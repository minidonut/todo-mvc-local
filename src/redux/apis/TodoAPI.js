import axios from "axios";

const api = "https://todo-mvc-api.saeh.io";
const headers = {
  userId: 1,  
};
export const getTodos = () => {
    return axios.get(`${api}/todos`, { headers });
};

export const addTodo = (content) => {
    const payload = {
        content,
    };
    return axios.post(`${api}/todos`, payload, { headers });
}

export const deleteTodo = (id) => {
    return axios.delete(`${api}/todos/${id}`, { headers });
};

// `${api}/todos`
// api + "/todos"