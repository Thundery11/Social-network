import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>Profile Message News Music Settings</div>
    </nav>
  );
};

export default Navbar;
