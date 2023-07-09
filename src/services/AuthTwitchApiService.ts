import axios from "axios";

const AuthTwitchApiService = axios.create({
  baseURL: "https://id.twitch.tv/oauth2",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    // "Client-id": "lfyxb4l3ef82jzljbg1cc535reyv7i",
  },
});

export default AuthTwitchApiService;
