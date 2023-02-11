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
  rerenderEntireTree() {
    console.log("state changed!");
  },

  addPost() {
    let newPost = {
      message: this._state.profilePage.newPostText,
      id: 5,
      likesCount: 32,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this.rerenderEntireTree(state);
  },
  updateNewPostText(newText) {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
  },
  addMessage() {
    let newMessage = {
      message: state.dialogsPage.newMessageText,
      id: 4,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = " ";
    rerenderEntireTree(state);
  },
  updateNewMessageText(newMessage) {
    state.dialogsPage.newMessageText = newMessage;
    rerenderEntireTree(state);
  },
  subscribe(observer) {
    rerenderEntireTree = observer;
  },
};

export default store;
