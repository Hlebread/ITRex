export default class Validator {
  static validateEmail(value) {
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(value).toLowerCase());
  }

  static validatePassword(value) {
    const regex = /^[a-z0-9]{6,}$/i;
    return regex.test(String(value));
  }

  static validateName(value) {
    const regex = /^[a-zA-Z\-]+$/;
    return regex.test(String(value));
  }
}
