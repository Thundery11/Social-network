const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let initialState = {
  dialogs: [
    { name: "Ilya", id: 1 },
    { name: "Katya", id: 2 },
    { name: "Sasha", id: 3 },
    { name: "Jenya", id: 4 },
    { name: "Dasha", id: 5 },
    { name: "Denis", id: 6 },
  ],

  messages: [
    { message: "Hi", id: 1 },
    { message: "How are u", id: 1 },
    { message: "Everything is fine", id: 1 },
  ],
  newMessageText: "Write here something",
};
let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        message: state.newMessageText,
        id: 4,
      };
      state.messages.push(newMessage);
      state.newMessageText = " ";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state;
    default:
      return state;
  }
};
export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};
export const onMessageChangeActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessage: text,
  };
};

export default dialogsReducer;
