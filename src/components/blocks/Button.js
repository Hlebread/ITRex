export default function Button() {
  function Controller() {
    let myModel = null;
    let myView = null;

    this.init = (model, view, controller, config) => {
      myModel = model;
      myView = view;
      myModel.init(controller);
      return myView.init(controller, config);
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
    let config = null;
    let ui = null;

    this.init = (controller, elementConfig) => {
      myController = controller;
      config = elementConfig || {};
      ui = {};
      return this.createComponent();
    };

    this.createComponent = () => {
      ui.component = document.createElement(config.type || "button");
      ui.component.className = `btn ${config.router ? "router-link" : ""}`;
      if (config.href) ui.component.setAttribute("href", config.href);
      const text = config.text || "Submit";
      ui.component.innerHTML = config.arrow ? text + this.getIcon() : text;
      return ui.component;
    };

    this.getIcon = () => {
      return `
			<svg
				width="8"
				height="14"
				viewBox="0 0 8 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="btn__icon"
			>
				<path
				d="M7.53998 6.29004L1.87998 0.640037C1.78702 0.546308 1.67642 0.471914 1.55456 0.421145C1.4327 0.370377 1.30199 0.344238 1.16998 0.344238C1.03797 0.344238 0.907264 0.370377 0.785405 0.421145C0.663546 0.471914 0.552945 0.546308 0.459982 0.640037C0.273731 0.827399 0.169189 1.08085 0.169189 1.34504C0.169189 1.60922 0.273731 1.86267 0.459982 2.05004L5.40998 7.05004L0.459982 12C0.273731 12.1874 0.169189 12.4409 0.169189 12.705C0.169189 12.9692 0.273731 13.2227 0.459982 13.41C0.552597 13.5045 0.663042 13.5797 0.784917 13.6312C0.906792 13.6827 1.03767 13.7095 1.16998 13.71C1.30229 13.7095 1.43317 13.6827 1.55505 13.6312C1.67692 13.5797 1.78737 13.5045 1.87998 13.41L7.53998 7.76004C7.64149 7.66639 7.7225 7.55274 7.7779 7.42624C7.83331 7.29974 7.86191 7.16314 7.86191 7.02504C7.86191 6.88693 7.83331 6.75033 7.7779 6.62383C7.7225 6.49733 7.64149 6.38368 7.53998 6.29004Z"
				fill="white"
				/>
			</svg>
		 `;
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
      };
    },
  };
}
