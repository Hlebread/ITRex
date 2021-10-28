export default class Router {
  static makeLink(node) {
    node.addEventListener("click", (event) => {
      event.preventDefault();
      this.navigate(event.target.getAttribute("href"));
    });
  }

  static navigate(url) {
    if (history.state?.page === url) return;
    history.pushState({ page: url }, "", url);
    window.dispatchEvent(
      new CustomEvent("app:router:pageChange", { detail: { page: url } })
    );
  }
}
