import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  };
  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.onMessageChange(text);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <div>
        <div>
          <textarea
            ref={newMessageElement}
            onChange={onMessageChange}
            value={props.dialogsPage.newMessageText}
          ></textarea>
        </div>
        <div>
          <button onClick={onAddMessage}>Add message</button>
        </div>
        <button>Remove</button>
      </div>
    </div>
  );
};

export default Dialogs;
