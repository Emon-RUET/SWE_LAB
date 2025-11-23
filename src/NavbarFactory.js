class NavbarItem {
  constructor(label, link) {
    this.label = label;
    this.link = link;
  }
}
class NavbarFactory {
  static createItem(type) {
    switch (type) {
      case "home":
        return new NavbarItem("Home", "/");
      case "accounts":
        return new NavbarItem("Accounts", "/accounts");
      case "about":
        return new NavbarItem("About", "/about");
      default:
        return new NavbarItem("Unknown", "#");
    }
  }
}
export default NavbarFactory;
