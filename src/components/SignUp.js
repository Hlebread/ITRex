import Form from "./Form";

export default function SignUp() {
  function Controller() {
    let myModel = null;
    let myView = null;

    this.init = (model, view, controller) => {
      myModel = model;
      myView = view;
      myModel.init(controller);
      return myView.init(controller);
    };
  }

  function Model() {
    let myController = null;

    this.init = (controller) => {
      myController = controller;
    };
  }

  function View() {
    let myController = null;
    let ui = null;

    this.init = (controller) => {
      myController = controller;
      ui = {};
      return this.createPage();
    };

    this.createPage = () => {
      ui.container = document.createElement("section");
      ui.container.className = "ui-container ui-container_form";
      ui.container.append(this.getTitle());
      ui.container.append(this.getForm());
      ui.form.ui.submitBtn.element.addEventListener("click", (event) => {
        event.preventDefault();
        ui.form.validate();
      });
      return ui.container;
    };

    this.getTitle = () => {
      const title = document.createElement("h2");
      title.className = "ui-title";
      title.textContent = "Sign Up";
      return title;
    };

    this.getForm = () => {
      ui.form = new Form().init({ type: "signUp" });
      return ui.form.element;
    };
  }

  return {
    init: function () {
      const componentView = new View();
      const componentModel = new Model();
      const componentController = new Controller();
      return {
        element: componentController.init(
          componentModel,
          componentView,
          componentController
        ),
      };
    },
  };
}
