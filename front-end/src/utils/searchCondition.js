export class SearchConditionUtil {
  static findSearchCondition(searchConditionsSimpleOrAdvanced, fieldName) {
    let found = null;

    if (!searchConditionsSimpleOrAdvanced) {
      return found;
    }

    searchConditionsSimpleOrAdvanced.forEach(v => {
      if (!found && v.id === fieldName) {
        found = v;
      }
    });

    return found;
  }

  static filterItem(searchConditionsSimpleOrAdvanced, fieldName, filterValue) {
    const searchCondition = SearchConditionUtil.findSearchCondition(
      searchConditionsSimpleOrAdvanced,
      fieldName,
    );
    if (!searchCondition) {
      return [];
    }

    searchCondition.items = searchCondition.items.map(item => {
      // partial match?
      const newItem = { ...item };
      if (item.label.indexOf(filterValue) >= 0) {
        newItem.hidden = false;
      } else {
        newItem.hidden = true;
      }
      return newItem;
    });

    return searchConditionsSimpleOrAdvanced;
  }

  static keywordChanged(
    searchConditionsSimpleOrAdvanced,
    fieldName,
    selectedLabel,
    selectedValue,
  ) {
    const searchCondition = SearchConditionUtil.findSearchCondition(
      searchConditionsSimpleOrAdvanced,
      fieldName,
    );
    if (!searchCondition) {
      return [];
    }

    if (!selectedValue) {
      searchCondition.selectedValue = '';
      searchCondition.selectedLabel = '';
      return searchConditionsSimpleOrAdvanced;
    }

    /* eslint no-irregular-whitespace: ["error", {"skipRegExps": true}] */
    searchCondition.selectedValue = selectedValue.split(/ +|　+/gi);
    searchCondition.selectedLabel = selectedLabel;

    return searchConditionsSimpleOrAdvanced;
  }

  static dateChanged(
    searchConditionsSimpleOrAdvanced,
    fieldName,
    fieldNameFrom,
    fieldNameTo,
    selectedLabel,
    selectedValue,
  ) {
    const searchConditionFrom = SearchConditionUtil.findSearchCondition(
      searchConditionsSimpleOrAdvanced,
      fieldNameFrom,
    );
    const searchConditionTo = SearchConditionUtil.findSearchCondition(
      searchConditionsSimpleOrAdvanced,
      fieldNameTo,
    );
    const searchCondition =
      fieldName === fieldNameFrom ? searchConditionFrom : searchConditionTo;

    if (!searchCondition) {
      return [];
    }

    if (!selectedValue) {
      searchCondition.selectedValue = null;
      searchCondition.selectedLabel = null;
    } else {
      searchCondition.selectedValue = selectedValue;
      searchCondition.selectedLabel = selectedLabel;
    }

    searchConditionFrom.dateValue = `${searchConditionFrom.selectedValue ||
      ''} ~ ${searchConditionTo.selectedValue || ''}`;

    searchConditionTo.dateValue = null;

    return searchConditionsSimpleOrAdvanced;
  }

  static selectItem(
    searchConditionsSimpleOrAdvanced,
    fieldName,
    selectedLabel,
    selectedValue,
  ) {
    const searchCondition = SearchConditionUtil.findSearchCondition(
      searchConditionsSimpleOrAdvanced,
      fieldName,
    );
    if (!searchCondition) {
      return [];
    }

    searchCondition.selectedValue = selectedValue;
    searchCondition.selectedLabel = selectedLabel;

    return searchConditionsSimpleOrAdvanced;
  }

  static multiSelectItem(
    searchConditionsSimpleOrAdvanced,
    fieldName,
    selectedLabel,
    selectedValue,
  ) {
    const searchCondition = SearchConditionUtil.findSearchCondition(
      searchConditionsSimpleOrAdvanced,
      fieldName,
    );
    if (!searchCondition) {
      return [];
    }

    searchCondition.selectedValue = searchCondition.selectedValue || [];
    searchCondition.selectedLabel = searchCondition.selectedLabel || [];

    const index = searchCondition.selectedValue.indexOf(selectedValue);

    if (index >= 0) {
      return this.releaseItem(
        searchConditionsSimpleOrAdvanced,
        fieldName,
        selectedValue,
        selectedLabel,
      );
    }

    searchCondition.selectedValue.unshift(selectedValue);
    searchCondition.selectedLabel.unshift(selectedLabel);

    return searchConditionsSimpleOrAdvanced;
  }

  static selectItemAll(searchConditionsSimpleOrAdvanced, fieldName) {
    const searchCondition = SearchConditionUtil.findSearchCondition(
      searchConditionsSimpleOrAdvanced,
      fieldName,
    );
    if (!searchCondition) {
      return [];
    }

    searchCondition.selectedValue = searchCondition.items.map(
      item => item.value,
    );
    searchCondition.selectedLabel = searchCondition.items.map(
      item => item.label,
    );

    return searchConditionsSimpleOrAdvanced;
  }

  static releaseItem(
    searchConditionsSimpleOrAdvanced,
    fieldName,
    selectedLabel,
  ) {
    const searchCondition = SearchConditionUtil.findSearchCondition(
      searchConditionsSimpleOrAdvanced,
      fieldName,
    );
    if (!searchCondition) {
      return [];
    }

    const index = searchCondition.selectedLabel.indexOf(selectedLabel);
    searchCondition.selectedValue.splice(index, 1);
    searchCondition.selectedLabel.splice(index, 1);

    return searchConditionsSimpleOrAdvanced;
  }

  static releaseItemAll(searchConditionsSimpleOrAdvanced, fieldName) {
    const searchCondition = SearchConditionUtil.findSearchCondition(
      searchConditionsSimpleOrAdvanced,
      fieldName,
    );
    if (!searchCondition) {
      return [];
    }

    searchCondition.selectedValue = null;
    searchCondition.selectedLabel = null;

    return searchConditionsSimpleOrAdvanced;
  }

  static clearSearchConditions(searchConditions) {
    Object.values(searchConditions).forEach(
      searchConditionsSimpleOrAdvanced => {
        SearchConditionUtil.clearConditions(searchConditionsSimpleOrAdvanced);
      },
    );
  }

  static clearConditions(searchConditionsSimpleOrAdvanced) {
    if (!searchConditionsSimpleOrAdvanced) {
      return;
    }
    /* eslint-disable no-param-reassign */
    searchConditionsSimpleOrAdvanced.forEach(v => {
      v.selectedLabel = null;
      v.selectedValue = null;
      if (v.type === 'date') {
        v.dateValue = null;
      }
    });
  }
}

export default SearchConditionUtil;
