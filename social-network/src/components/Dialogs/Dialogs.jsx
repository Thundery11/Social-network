import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  let newDialogElement = React.createRef();
  let addDialog = () => {
    let text = newDialogElement.current.value;
    alert(text);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea ref={newDialogElement}></textarea>
        </div>
        <div>
          <button onClick={addDialog}>Add post</button>
        </div>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Dialogs;
