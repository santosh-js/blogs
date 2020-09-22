// responsive version menu items
// with multi language support argument passed
export function getMenuItems(t) {
  return [
    {
      menuTitle: t("navbar.blogs"),
      pageURL: "/blogs",
    },
    {
      menuTitle: t("navbar.about"),
      pageURL: "/about",
    },
    {
      menuTitle: t("navbar.contact"),
      pageURL: "/contact",
    },
  ];
}
