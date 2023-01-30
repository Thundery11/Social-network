import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

let dialogsData = [
  { name: "Ilya", id: 1 },
  { name: "Katya", id: 2 },
  { name: "Sasha", id: 3 },
  { name: "Jenya", id: 4 },
  { name: "Dasha", id: 5 },
  { name: "Denis", id: 6 },
];
let messagesData = [
  { message: "Hi", id: 1 },
  { message: "How are u", id: 1 },
  { message: "Everything is fine", id: 1 },
];
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
