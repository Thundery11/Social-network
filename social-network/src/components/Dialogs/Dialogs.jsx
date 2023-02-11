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

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch({ type: "ADD-MESSAGE" });
  };
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE-TEXT", newMessage: text });
  };
  debugger;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            ref={newMessageElement}
            onChange={onMessageChange}
            value={props.state.newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={addMessage}>Add message</button>
        </div>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Dialogs;
