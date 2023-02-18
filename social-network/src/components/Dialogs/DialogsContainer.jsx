import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   let state = props.store.getState();

//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreator());
//   };
//   let onMessageChange = (text) => {
//     props.store.dispatch(onMessageChangeActionCreator(text));
//   };

//   return (
//     <Dialogs
//       dialogsPage={state.dialogsPage}
//       addMessage={addMessage}
//       onMessageChange={onMessageChange}
//     />
//   );
// };
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(onMessageChangeActionCreator(text));
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
