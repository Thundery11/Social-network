import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="data:image/png;base64,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"
        alt="ava-icon"
      ></img>

      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
