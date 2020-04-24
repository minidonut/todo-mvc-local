import * as types from "../ActionTypes";

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: { todo },
});

export const deleteTodo = (id) => ({
  type: types.DELETE_TODO,
  payload: { id },
});

export const updateTodo = (id, done, content) => ({
  type: types.UPDATE_TODO,
  payload: { id, content, done },
});

export const clearTodo = () => ({
  type: types.CLEAR_TODO,
});

export const toggleAllTodo = () => ({
  type: types.TOGGLE_ALL_TODO,
});
