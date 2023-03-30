import { userProfileAPI } from "../api/Api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { message: "Hi how are u", id: 1, likesCount: 10 },
    { message: "I`m fine, thanks", id: 2, likesCount: 5 },
    { message: "Hi guys", id: 3, likesCount: 33 },
  ],
  newPostText: "Hi, my friend!",
  profile: null,
  status: " ",
};

let profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        message: state.newPostText,
        id: 5,
        likesCount: 32,
      };
      let stateCopy = { ...state };
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.newPostText = "";
      return stateCopy;
    }
    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};
export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setProfileStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getProfileStatus = (userId) => (dispatch) => {
  userProfileAPI.getStatus(userId).then((data) => {
    dispatch(setProfileStatus(data));
  });
};

export const setProfile = (userId) => {
  return (dispatch) => {
    userProfileAPI.setUserProfile(userId).then((data) => {
      dispatch(setUserProfile(data));
    });
  };
};
export const updateStatus = (status) => (dispatch) => {
  userProfileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setProfileStatus(status));
    }
  });
};

export default profileReducer;
