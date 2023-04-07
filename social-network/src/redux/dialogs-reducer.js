const ADD_MESSAGE = "ADD-MESSAGE";

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
};
let dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        message: action.newMesageBody,
        id: 4,
      };
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = " ";
      return stateCopy;
    }

    default:
      return state;
  }
};
export const addMessageActionCreator = (newMesageBody) => {
  return {
    type: ADD_MESSAGE,
    newMesageBody,
  };
};

export default dialogsReducer;
