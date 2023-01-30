import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>
          <NavLink to="/dialogs/1">Ilya</NavLink>{" "}
        </div>
        <div className={`${s.dialog} ${s.active}`}>
          <NavLink to="/dialogs/2">Katya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/3">Sasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/4">Dasha</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/5">Jenya</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to="/dialogs/6">Denis</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>Yo</div>
        <div className={s.message}>alright</div>
        <div className={s.message}>Hey</div>
        <div className={s.message}>Bye</div>
      </div>
    </div>
  );
};

export default Dialogs;
