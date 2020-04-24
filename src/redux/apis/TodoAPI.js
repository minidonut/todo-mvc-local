import axios from "axios";

const api = "https://todo-mvc-api.saeh.io";
export const getTodos = (content) => {
  return axios.get(`${api}/todos`, { headers: { userId: 1 } });
};

export const addTodo = (content) => {

};
