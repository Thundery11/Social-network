import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>Profile</div>
      <div className={s.item}>Message</div>
      <div className={s.item}>News</div>
      <div className={s.item}>Music</div>
      <div className={s.item}>Settings</div>
    </nav>
  );
};

export default Navbar;
