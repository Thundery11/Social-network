import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hi how are u", id: 1, likesCount: 10 },
        { message: "I`m fine, thanks", id: 2, likesCount: 5 },
        { message: "Hi guys", id: 3, likesCount: 33 },
      ],
      newPostText: "Hi, my friend!",
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("state changed!");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
// addPost() {
//   let newPost = {
//     message: this._state.profilePage.newPostText,
//     id: 5,
//     likesCount: 32,
//   };
//   this._state.profilePage.posts.push(newPost);
//   this._state.profilePage.newPostText = "";
//   this._callSubscriber(this._state);
// },
// updateNewPostText(newText) {
//   this._state.profilePage.newPostText = newText;
//   this._callSubscriber(this._state);
// },
// addMessage() {
//   let newMessage = {
//     message: this._state.dialogsPage.newMessageText,
//     id: 4,
//   };
//   this._state.dialogsPage.messages.push(newMessage);
//   this._state.dialogsPage.newMessageText = " ";
//   this._callSubscriber(this._state);
// },
// updateNewMessageText(newMessage) {
//   this._state.dialogsPage.newMessageText = newMessage;
//   this._callSubscriber(this._state);
// },
