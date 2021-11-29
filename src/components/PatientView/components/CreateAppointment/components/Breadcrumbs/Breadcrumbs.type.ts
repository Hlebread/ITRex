export default interface IBreadcrumbs {
  crumbs: {
    items: Array<{ label: string; path: string }>;
    active: string;
  };
}
