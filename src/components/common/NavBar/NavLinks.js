import NavLink from "./NavLink";

const NavLinks = () => {
  return <div className="header__menu">
    <ul className="header__nav">

      <NavLink label="Home" to="/" />

      <NavLink
        label="Explore"
        items={["Explore", "Item"]}
      />

      <NavLink label="Activity" to="/activity" />

      <NavLink
        label="Community"
        items={["Unitok", "Blogs", "Article", "FAQ", "Contacts"]}
      />

      <NavLink
        label="Pages"
        items={["Authors", "Author", "Collection", "Create"]}
      />

      <NavLink
        items={["Sign in", "Sign up", "Forgot Password", "404 page", "Privacy Policy"]}
      />
    </ul>
  </div>;
}

export default NavLinks;