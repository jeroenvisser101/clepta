// Make sure Clepta is defined
window.Clepta = window.Clepta || {};


/**
 * Finder
 *
 * It's the Finder's job to find and return requested types of fields.
 *
 * @param {DOMElement} document The document to search in. Defaulted to
 *                              window.document.
 */
Clepta.Finder = function (document) {
  this.document = document || window.document;
};

/**
 * Ask Clepta to find all login forms.
 *
 * Clepta's login finder will find forms based on the form's field types.
 * For instance, a login box would (most likely) contain both a normal field,
 * for either username or email, and a field for a secret, most likely a
 * password.
 *
 * @return {DOMElement[]} loginForms The forms found to be a login form.
 */
Clepta.Finder.findLoginForms = function () {
  var loginForms;

  // Get all forms in the document
  var forms = this.document.querySelectorAll('form');

  // Loop through all forms, keep if the form contains both a password and a
  // normal text field
  for (var key in forms) {
    if (!this.formFields.hasOwnProperty(key)) continue;

    // Retrieve value from forms array
    var form = forms[key];

    // Check if the form contains both a password field and normal text field
    if (form.querySelector('input[type="password"]') &&
        form.querySelector('input[type="text"], input:not([type])')) {
      // Add this form to the list of login forms
      loginForms.push(form);
    }
  }

  // Return all forms found
  return loginForms;
};
