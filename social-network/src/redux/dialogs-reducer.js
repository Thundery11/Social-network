const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let dialogsReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    let newMessage = {
      message: state.newMessageText,
      id: 4,
    };
    state.messages.push(newMessage);
    state.newMessageText = " ";
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newMessage;
  }
  return state;
};

export default dialogsReducer;
