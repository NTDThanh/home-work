/**
 *
 * Form validator: Used for validating form state (based on current form state)
 *  In FormValidator.js we did a mistake so component will re-render each key press and sure, this issue affects to our web performance
 *  FormValidatorV2.js was designed for solving this issue.
 *
 *  In FormValidator.js, we use validator library as default. We remove this default behavior in FormValidatorV2.js
 *
 * Design goals:
 * 1. Only validate changed field value, keep other validation results (prevent re-render all the times) (MUST)
 * 2. Don't add any error fields into state, keep state clean & meanful (MUST)
 * 3. Readability (MAY BE)
 * 4. Reusable & Easy setup - do not depend on specific form (MAY BE)
 * 5. Do not mutate field validation results -> prevent component do not re-render when validation result has changed (MUST)
 *
 * Notes
 *  Ater executing validate() and getting validationResults,
 *   component should receive validation results like this
 *      buildingValidation={validationResults.building}
 *  PLEASE DON'T PASS ALL VALIDATION RESULTS to component (this will re-render component all the times), pass each field validation result like above instead.
 *
 */

import _ from 'lodash';

export default class FormValidator {
  constructor(rules) {
    // stores rules
    this.rules = rules;
    // init validations
    this.validations = this.initialValidations();
    // init state
    this.state = {};
    // flag used to dectect first validation
    this.firstValidate = true;
  }

  isValid = () => !_.some(this.validations, item => item.isInvalid);

  /**
   * Validates form state:
   * - When submitted is true, do validate
   * - When submitted is false, return initial validation results
   *
   * @param {object} nextState - Next form state (lives at form state)
   * @param {boolean} submitted - Form submitted event
   * @param {object} options - Now support only alwaysFields (always do validate in these fields - ['name','code'])
   * @returns Validation results
   */
  validate = (nextState, submitted, options) => {
    if (submitted) {
      this.validateState(nextState, options);
    }
    return this.validations;
  };

  /**
   * Validates form state
   *
   * @param {object} nextState - Next state
   * @param {object} options - Now support only alwaysFields (always do validate in these fields - ['name','code'])
   * @returns Validation results
   */
  validateState = (nextState, options) => {
    try {
      _.keys(this.rules)
        .filter(fieldName => {
          if (
            options &&
            _.has(options, 'alwaysFields') &&
            _.includes(options.alwaysFields, fieldName)
          ) {
            return true;
          }

          return this.firstValidate || this.valueChanged(fieldName, nextState);
        })
        .forEach(fieldName => {
          // Re-validate fields

          // Get data-path and field validation rules
          const { dataPath, rules: fieldRules } = this.rules[fieldName];

          // get nextValue
          const nextValue = _.get(nextState, dataPath);

          let fieldValidationResult = {
            isInvalid: false,
            messages: [],
          };

          fieldRules.forEach(rule => {
            if (
              rule.method(nextValue, ...(rule.args || []), nextState) !==
              rule.validWhen
            ) {
              // You need to pass the state for situations where the validity of a field depends on other fields.
              // The password match check, for example.

              // compose error messages
              const messages = fieldValidationResult.messages
                ? [...fieldValidationResult.messages, rule.message]
                : [rule.message];
              fieldValidationResult = {
                isInvalid: true,
                messages,
              };
            }
          });

          // Stores validation result
          this.validations[fieldName] = fieldValidationResult;
        });
      this.validations = { ...this.validations }; // Mark validations have changed (reference changed -> pure component will recognize it)
      return this.validations;
    } finally {
      // Stores current state
      this.state = nextState;
      // Mark first validate to false
      this.firstValidate = false;
    }
  };

  /**
   * Gets initial validation results
   *
   * @param {object} nextState - Next state
   * @returns initial validation results
   */
  initialValidations = () => {
    const validations = {};

    /* eslint-disable array-callback-return */
    _.keys(this.rules).map(key => {
      validations[key] = { isInvalid: false, messages: [] };
    });
    return { ...validations };
  };

  /**
   * Detects value has changed (compares current value & next value)
   *
   * @param {string} FieldName - Field name (lives at form state)
   * @param {object} nextState - Next form state (lives at form state)
   * @returns true when value has changed, otherwise false.
   */
  valueChanged = (fieldName, nextState) =>
    _.get(this.state, this.rules[fieldName].dataPath).toString() !==
    _.get(nextState, this.rules[fieldName].dataPath).toString();
}

/* this.validations like this
{
    isValid: false,
    cause: {
        isInvalid: false,
        messages: [
            '値を入力してください。',
            '1文字以上で入力してください。',
        ]
    },
    solutions: {
        isInvalid: false,
        messages: [
            '値を入力してください。',
            '1文字以上で入力してください。',
        ]
    },
}
*/

/* this.rules like this
{
    name: {
        dataPath: ['point', 'name'],
        rules: [
            {
                method: isLength,
                args: [{ max: 200 }],
                validWhen: true,
                message: 'The message ....',
            },
            {
                method: isEmpty,
                args: [{ max: 200 }],
                validWhen: true,
                message: 'The message ....',
            }
        ],
    },


}
*/
