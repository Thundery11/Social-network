import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "2ae5bbdb-ec27-42f3-9502-5fb19ea27207",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
};

export const authAPI = {
  setAuth() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
};

export const userProfileAPI = {
  setUserProfile(userId = 28039) {
    return instance.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const FollowAPI = {
  unFollow(id) {
    return instance.delete(`follow/${id}`).then((response) => response.data);
  },
  follow(id) {
    return instance.post(`follow/${id}`).then((response) => response.data);
  },
};
