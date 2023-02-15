const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      message: state.newPostText,
      id: 5,
      likesCount: 32,
    };
    state.posts.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }
  return state;
};

export default profileReducer;
