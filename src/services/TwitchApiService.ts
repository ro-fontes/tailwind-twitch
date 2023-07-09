import axios from "axios";

const twitchApiService = axios.create({
  baseURL: "https://api.twitch.tv",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    "Client-id": "lfyxb4l3ef82jzljbg1cc535reyv7i",
  },
});

export default twitchApiService;
