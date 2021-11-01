import Router from "../util/Router";
import Validator from "../util/Validator";

import InputBlock from "./InputBlock";
import Button from "./blocks/Button";

export default function Form() {
  function Controller() {
    let myModel = null;
    let myView = null;

    this.init = (model, view, controller, config) => {
      myModel = model;
      myView = view;
      myModel.init(controller);
      return myView.init(controller, config);
    };

    this.validate = () => {
      let isValid = true;
      const elements = myView.getElements();
      const validated = {};
      for (let key in elements) {
        if (elements[key]) {
          validated[key] = myModel.validate(
            key,
            elements[key].element.querySelector("input").value
          );
        }
      }
      for (let key in validated) {
        if (!validated[key]) {
          isValid = false;
          myView.setElementInvalid(elements[key]);
        } else {
          myView.setElementValid(elements[key]);
        }
      }
      return isValid;
    };
  }

  function Model() {
    let myController = null;
    let memory = null;

    this.init = (controller) => {
      myController = controller;
    };

    this.validate = (type, value) => {
      switch (type) {
        case "firstName":
        case "lastName":
          return Validator.validateName(value);

        case "email":
          return Validator.validateEmail(value);

        case "pass":
          return Validator.validatePassword(value);

        default:
          return true;
          break;
      }
    };
  }

  function View() {
    let myController = null;
    let config = null;
    let ui = null;

    this.init = (controller, elementConfig) => {
      myController = controller;
      config = elementConfig || {};
      ui = {};
      return this.createComponent();
    };

    this.getElements = () => ({
      firstName: ui.firstNameInput,
      lastName: ui.lastNameInput,
      email: ui.emailInput,
      pass: ui.passwordInput,
      passCheck: ui.passwordCheckInput,
    });

    this.setElementInvalid = (element) => element.setInvalid();

    this.setElementValid = (element) => element.setValid();

    this.createComponent = () => {
      ui.component = document.createElement("form");
      ui.component.className = "auth-form";
      switch (config.type) {
        case "signIn":
          this.createSignInForm();
          break;

        case "signUp":
          this.createSignUpForm();
          break;

        case "restorePassword":
          this.createRestorePasswordForm();
          break;

        default:
          //  this.createSignInForm();
          break;
      }
      this.ui = ui;
      return ui.component;
    };

    this.createSignInForm = () => {
      ui.emailInput = new InputBlock().init({
        type: "email",
        placeholder: "Email",
        invalidMessage: "Email not found. Please check the spelling",
      });
      ui.passwordInput = new InputBlock().init({
        type: "password",
        placeholder: "Password",
        invalidMessage: "Password contain unsupported characters",
      });
      ui.submitBtn = new Button().init({
        type: "a",
        router: true,
        href: "doctorView",
        text: "Sign In",
        arrow: true,
      });
      ui.component.append(
        ui.emailInput.element,
        ui.passwordInput.element,
        ui.submitBtn.element,
        this.createLink(
          "restorePassword",
          "link_forgot-pass router-link",
          "Forgot password?"
        ),
        this.createFooter({
          title: "Don’t have an account?",
          href: "signUp",
          class: "link_footer router-link",
          text: "Sign up",
        })
      );
    };

    this.createSignUpForm = () => {
      ui.firstNameInput = new InputBlock().init({
        type: "firstName",
        placeholder: "First name",
        invalidMessage: "Strange name, dude",
      });
      ui.lastNameInput = new InputBlock().init({
        type: "lastName",
        placeholder: "Last name",
        invalidMessage: "Strange surname, dude",
      });
      ui.emailInput = new InputBlock().init({
        type: "email",
        placeholder: "Email",
        invalidMessage: "Email not found. Please check the spelling",
      });
      ui.passwordInput = new InputBlock().init({
        type: "password",
        placeholder: "Password",
        invalidMessage: "Password contain unsupported characters",
      });
      ui.passwordCheckInput = new InputBlock().init({
        type: "password-check",
        placeholder: "Repeat password",
        invalidMessage: "Password does not match",
      });
      ui.submitBtn = new Button().init({
        type: "a",
        router: true,
        href: "signIn",
        text: "Sign Up",
        arrow: true,
      });
      ui.component.append(
        ui.firstNameInput.element,
        ui.lastNameInput.element,
        ui.emailInput.element,
        ui.passwordInput.element,
        ui.passwordCheckInput.element,
        ui.submitBtn.element,
        this.createFooter({
          title: "Already have an account?",
          href: "signIn",
          class: "link_footer router-link",
          text: "Sign in",
        })
      );
    };

    this.createRestorePasswordForm = () => {
      ui.emailInput = new InputBlock().init({
        type: "email",
        placeholder: "Email",
        invalidMessage: "Email not found. Please check the spelling",
      });
      ui.submitBtn = new Button().init({
        type: "button",
        text: "Send reset link",
        arrow: true,
      });
      ui.component.append(ui.emailInput.element, ui.submitBtn.element);
    };

    this.createLink = (href, className = "", text) => {
      const link = document.createElement("a");
      if (href) link.setAttribute("href", href);
      if (text) link.textContent = text;
      link.className = `link ${className}`;
      Router.makeLink(link);
      return link;
    };

    this.createFooter = (footerConfig) => {
      const footer = document.createElement("div");
      footer.className = "auth-form__footer";
      const footerTitle = document.createElement("div");
      footerTitle.className = "auth-form__footer__title";
      footerTitle.textContent = footerConfig.title;
      footer.append(
        footerTitle,
        this.createLink(
          footerConfig.href,
          footerConfig.class,
          footerConfig.text
        )
      );
      return footer;
    };
  }

  return {
    init: function (config) {
      const componentView = new View();
      const componentModel = new Model();
      const componentController = new Controller();

      return {
        element: componentController.init(
          componentModel,
          componentView,
          componentController,
          config
        ),
        validate: componentController.validate,
        ui: componentView.ui,
      };
    },
  };
}
