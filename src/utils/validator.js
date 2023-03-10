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
    //Check if the number contains only numeric value
    //and is of between 13 to 19 digits
    //TODO
    const regexp =
      /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

    return regexp.test(value) || "Enter valid card number";
  };

  return {
    isEmpty,
    emailValidator,
    required,
    creditCardValidator,
  };
}
