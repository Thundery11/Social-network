import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Ilya" id="1" />
        <DialogItem name="Katya" id="2" />
        <DialogItem name="Sasha" id="3" />
        <DialogItem name="Jenya" id="4" />
        <DialogItem name="Dasha" id="5" />
        <DialogItem name="Denis" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are u" />
        <Message message="Everything is fine" />
        <Message message="Bye" />
      </div>
    </div>
  );
};

export default Dialogs;
