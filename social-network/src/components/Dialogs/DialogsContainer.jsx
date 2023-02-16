import React from "react";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };
  let onMessageChange = (text) => {
    props.store.dispatch(onMessageChangeActionCreator(text));
  };

  return (
    <Dialogs
      dialogs={state.dialogsPage.dialogs}
      messages={state.dialogsPage.messages}
      addMessage={addMessage}
      onMessageChange={onMessageChange}
      newMessageText={state.dialogsPage.newMessageText}
    />
  );
};

export default DialogsContainer;
