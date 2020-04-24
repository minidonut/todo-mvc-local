import * as types from "../ActionTypes";

const INITIAL_STATE = {
  todos: [],
};

export const todoReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.ADD_TODO:
      return {
        todos: [
          payload.todo,
          ...state.todos,
        ]
      };
    case types.GET_TODO:
      return {
        todos: payload.todos,
      };
    case types.UPDATE_TODO:
      return {
        todos: state.todos.map(todo => {
          if (todo.id === payload.id) {
            return {
              id: todo.id,
              content: payload.content,
              done: payload.done,
            };
          } else {
            return todo;
          }
        }),
      };
    case types.DELETE_TODO:
      return {
        todos: state.todos.filter(todo => todo.id !== payload.id),
      };
    case types.CLEAR_TODO:
      return {
        todos: state.todos.filter(todo => !todo.done),
      };
    case types.TOGGLE_ALL_TODO:
      return {
        todos: state.todos.map(todo => ({ ...todo, done: !state.todos.every(x => x.done) })),
      };
    default:
      return state;
  };
};
