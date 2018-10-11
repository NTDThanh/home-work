import validator from 'validator';

class FormValidator {
  constructor(rules) {
    // validations is an array of validation rules specific to a form
    this.rules = rules;
  }

  validate(state) {
    // start out assuming valid
    const validations = this.valid();

    // for each validation rule
    this.rules.forEach(rule => {
      // determine the field value, the method to invoke and optional args from
      // the rule definition
      if (!(rule.field in state)) {
        return;
      }
      const fieldValue = state[rule.field].toString();
      const args = rule.args || [];
      const validationMethod =
        typeof rule.method === 'string' ? validator[rule.method] : rule.method;

      // call the validation_method with the current field value as the first
      // argument, any additional arguments, and the whole state as a final
      // argument.  If the result doesn't match the rule.validWhen property,
      // then modify the validation object for the field and set the isValid
      // field to false
      if (validationMethod(fieldValue, ...args, state) !== rule.validWhen) {
        // That means field is not valid
        validations.isValid = false;

        validations[rule.field] = {
          ...validations[rule.field],
          isInvalid: true,
          messages: [...validations[rule.field].messages, rule.message],
        };
      }
    });

    return validations;
  }

  valid() {
    const validation = {};

    /* eslint-disable no-return-assign */
    this.rules.map(
      rule => (validation[rule.field] = { isInvalid: false, messages: [] }),
    );

    return { isValid: true, ...validation };
  }
}

export default FormValidator;

/*
  * a rule is like this
  * {
        field: 'phone',
        method: 'matches',
        args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/], // args is an optional array of arguements that will be passed to the validation method
        validWhen: true,
        message: 'That is not a valid phone number.'
      },
      {
        field: 'phone',
        method: 'isEmpty',
        validWhen: false,
        message: 'Pleave provide a phone number.'
      },
*/
