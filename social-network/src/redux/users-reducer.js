const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      fullName: "Illia",
      status: "I`m starting developer",
      location: { city: "Mogilev", county: "Belarus" },
      photoUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hockeydb.com%2Fihdb%2Fstats%2Fpdisplay.php%3Fpid%3D56745&psig=AOvVaw3hOeA3wqpK14c8JpCAiSMi&ust=1677062297583000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjVgoe2pv0CFQAAAAAdAAAAABAE",
      followed: true,
    },
    {
      id: 2,
      fullName: "Katya",
      status: "I`m girl",
      location: { city: "Mogilev", county: "Belarus" },
      photoUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAlexander_Lukashenko&psig=AOvVaw26zHE8Ym4g35PrPP3aISRl&ust=1677062869603000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjHzJe4pv0CFQAAAAAdAAAAABAE",
      followed: true,
    },
    {
      id: 3,
      fullName: "Denis",
      status: "developer",
      location: { city: "Mogilev", county: "Belarus" },
      photoUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hockeydb.com%2Fihdb%2Fstats%2Fpdisplay.php%3Fpid%3D56745&psig=AOvVaw3hOeA3wqpK14c8JpCAiSMi&ust=1677062297583000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjVgoe2pv0CFQAAAAAdAAAAABAE",
      followed: false,
    },
    {
      id: 4,
      fullName: "Sasha",
      status: "basketball player",
      location: { city: "Mogilev", county: "Belarus" },
      photoUrl:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hockeydb.com%2Fihdb%2Fstats%2Fpdisplay.php%3Fpid%3D56745&psig=AOvVaw3hOeA3wqpK14c8JpCAiSMi&ust=1677062297583000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLjVgoe2pv0CFQAAAAAdAAAAABAE",
      followed: true,
    },
    {
      id: 5,
      fullName: "Jenya",
      status: "staring developer",
      location: { city: "Mogilev", county: "Belarus" },
      followed: true,
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    // let stateCopy = {...state};
    // stateCopy.users = [...state.users.map(u =>{
    //     if(u.id === action.userID){
    //         return(...u, followed: true)
    //     }
    // })]
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};
export const followAC = (userID) => {
  return {
    type: FOLLOW,
    userID,
  };
};
export const unFollowAC = (userID) => {
  return {
    type: UNFOLLOW,
    userID,
  };
};
export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export default usersReducer;
