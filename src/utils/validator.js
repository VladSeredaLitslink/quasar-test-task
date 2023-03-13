function validateCreditCard(ccNumberNoDashes) {
  // Remove spaces between numbers
  ccNumberNoDashes = ccNumberNoDashes.replaceAll(' ','')

  // The credit card number must be 16 digits in length
  if (ccNumberNoDashes.length !== 16) {
    return false;
  }

  // The credit card number must be composed of at least two different digits (i.e. all of the digits cannot be the same)
  const obj = {};
  for (let i = 0; i < ccNumberNoDashes.length; i++) {
    obj[ccNumberNoDashes[i]] = true;
  }
  if (Object.keys(obj).length < 2) {
    return false;
  }

  // The final digit of the credit card number must be even
  if (ccNumberNoDashes[ccNumberNoDashes.length - 1] % 2 !== 0) {
    return false;
  }

  // The sum of all the digits must be greater than 16
  let sum = 0;
  for (let i = 0; i < ccNumberNoDashes.length; i++) {
    sum += Number(ccNumberNoDashes[i]);
  }
  if (sum <= 16) {
    return false;
  }

  return true;
}


export function useValidator() {
  const isEmpty = (value) => {
    if (value === null || value === undefined || value === "") return true;

    return !!(Array.isArray(value) && value.length === 0);
  };

  const emailValidator = (value) => {
    if (isEmpty(value)) {
      return true;
    }

    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (Array.isArray(value))
      return (
        value.every((val) => re.test(String(val))) ||
        t("$prx.validation.emailValidator")
      );

    return re.test(String(value)) || "Enter a valid email address";
  };

  const required = (val, label) =>
    (val && val.length > 0) || "Enter a " + label;

  const creditCardValidator = (value) => {
    return validateCreditCard(value) || "Enter valid card number";
  };

  return {
    isEmpty,
    emailValidator,
    required,
    creditCardValidator,
  };
}
