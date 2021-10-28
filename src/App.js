import Router from "./util/Router";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import RestorePassword from "./components/RestorePassword";

export default function App() {
  function Controller() {
    let myModel = null;
    let myView = null;

    this.init = (model, view, controller) => {
      myModel = model;
      myView = view;
      myModel.init(controller);
      myView.init(controller);
      this.onAuthChange();
    };

    this.changeAuth = () => {
      myModel.setAuth(!myModel.getAuth());
      this.onAuthChange();
    };

    this.onAuthChange = () =>
      this.changePage(!myModel.getAuth() ? "signIn" : "main");

    this.changePage = (page) => {
      myView.changePage(page);
      Router.navigate(page);
    };
  }

  function Model() {
    let myController = null;
    let isAuth = null;

    this.init = (controller) => {
      myController = controller;
      isAuth = localStorage?.ITRex_isAuth || false;
    };

    this.getAuth = () => isAuth;

    this.setAuth = (value) => {
      isAuth = value;
      localStorage.ITRex_isAuth = isAuth;
    };
  }

  function View() {
    let myController = null;
    let ui = null;
    let myPage = null;

    this.init = (controller) => {
      myController = controller;
      ui = {};
      ui.root = document.createElement("div");
      ui.root.className = "root";
      ui.wrapper = document.createElement("div");
      ui.wrapper.className = "wrapper";
      ui.root.append(ui.wrapper);
      document.body.append(ui.root);
      window.addEventListener(
        "popstate",
        function (e) {
          myController.changePage(e.state.page);
        },
        false
      );
      window.addEventListener(
        "app:router:pageChange",
        (e) => myController.changePage(e.detail.page),
        false
      );
    };

    this.changePage = (page) => {
      switch (page) {
        case "signIn":
          ui.wrapper.className = "wrapper wrapper_form";
          myPage = new SignIn().init();
          break;

        case "signUp":
          ui.wrapper.className = "wrapper wrapper_form";
          myPage = new SignUp().init();
          break;

        case "restorePassword":
          ui.wrapper.className = "wrapper wrapper_form";
          myPage = new RestorePassword().init();
          break;

        case "main":
          break;

        default:
          break;
      }
      ui.wrapper.innerHTML = "";
      ui.wrapper.append(myPage.element);
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
