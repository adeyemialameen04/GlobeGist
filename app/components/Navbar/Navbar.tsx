import styles from "./navbar.module.css";

const Navbar = () => {
  const { nav__container, logo } = styles;
  return (
    <nav>
      <div className={`container ${nav__container}`}>
        <h1 className={logo}>GlobeGist</h1>
      </div>
    </nav>
  );
};

export default Navbar;
