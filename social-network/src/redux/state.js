import { rerenderEntireTree } from "../render";

let state = {
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
  },
};
export let addPost = () => {
  let newPost = {
    message: state.profilePage.newPostText,
    id: 5,
    likesCount: 32,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
export default state;
