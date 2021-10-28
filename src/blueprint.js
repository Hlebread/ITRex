export default function Blueprint() {
  function Controller() {
    let myModel = null;
    let myView = null;

    this.init = (model, view, controller) => {
      myModel = model;
      myView = view;
      myModel.init(controller);
      myView.init(controller);
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
    };
  }

  return {
    init: function () {
      const componentView = new View();
      const componentModel = new Model();
      const componentController = new Controller();
      componentController.init(
        componentModel,
        componentView,
        componentController
      );
    },
  };
}
