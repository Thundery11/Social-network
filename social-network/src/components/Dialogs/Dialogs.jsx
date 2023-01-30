import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

let dialogs = [
  { name: "Ilya", id: 1 },
  { name: "Katya", id: 2 },
  { name: "Sasha", id: 3 },
  { name: "Jenya", id: 4 },
  { name: "Dasha", id: 5 },
  { name: "Denis", id: 6 },
];
let dialogsElements = dialogs.map((d) => (
  <DialogItem name={d.name} id={d.id} />
));
let messages = [
  { message: "Hi", id: 1 },
  { message: "How are u", id: 1 },
  { message: "Everything is fine", id: 1 },
];
let messagesElements = messages.map((m) => (
  <Message message={m.message} id={m.id} />
));
const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
