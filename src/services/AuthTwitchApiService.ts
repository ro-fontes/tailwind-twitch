import axios from "axios";

const AuthTwitchApiService = axios.create({
  baseURL: "https://id.twitch.tv/oauth2",
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
});

export default AuthTwitchApiService;
