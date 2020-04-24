import axios from "axios";

const api = "https://todo-mvc-api.saeh.io";
export const getTodos = (content) => {
  return axios.get(`${api}/todos`, { headers: { userId: 1 } });
};

export const deleteTodo = (id) => {
  return axios.delete(`${api}/todos/${id}`, { headers: { userId: 1 } });
};

export const addTodo = (content) => {
  return axios.post(`${api}/todos/`, { content }, { headers: { userId: 1 } });
};
