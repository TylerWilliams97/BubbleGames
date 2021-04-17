/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getAuth: function(authData) {
    return axios.post("/api/auth/login", authData);
  },
  saveAuth: function(authData) {
    return axios.post("/api/auth/signup", authData);
  },
  // getGame: function(gameData) {
  //   return axios.post(api/game/)
  // }
  


}