import Categories from "./Categories";
import styles from "./navbar.module.css";

const Navbar = () => {
  const { nav__container, logo } = styles;
  return (
    <nav>
      <div className={`container ${nav__container}`}>
        <h1 className={logo}>GlobeGist</h1>
        <Categories />
      </div>
    </nav>
  );
};

export default Navbar;
