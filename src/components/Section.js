import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import Filter from "./Filter";
import { Input } from "./Input";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../redux/actions";
import * as api from "../redux/apis/TodoAPI";

const StyledSection = styled.section`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  > div {
    label {
      transform: rotate(90deg);
      margin: 0 8px 0 20px;
      flex-shrink: 0;
      font-size: 22px;
    }
  }
`;

const StyledLabel = styled.label`
   color: ${props => props.allCompleted ? "#777" : "rgba(77, 77, 77, 0.2)"};
   cursor: pointer;
   transition: color 0.3s ease-out;
`;

const getTodosFromServer = async (dispatch) => {
  try {
    const res = await api.getTodos();
    if(res) {
      dispatch(actions.getTodos(res.data));
    }
  } catch(e) {
    window.alert("Cannot get todos from server. try again");
  }
};


export const Section = () => {
  const { filter } = useParams();
  const [value, setValue] = React.useState("");
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const deleteTodo = React.useCallback(async (id) => {
    const res = await api.deleteTodo(id);
    if(res) {
      dispatch(actions.deleteTodo(id));
    }
  }, [dispatch]);

  const updateTodo = React.useCallback((id, done, content) => {
    dispatch(actions.updateTodo(id, done, content));
  }, [dispatch]);

  const addTodo = React.useCallback(async (e) => {
    if (e.key === "Enter") {
      const res = await api.addTodo(value);
      dispatch(actions.addTodo(res.data));
      setValue("");
    }
  }, [value, setValue, dispatch]);

  const handleClear = React.useCallback(() => {
    dispatch(actions.clearTodo());
  }, [dispatch]);

  const handleToggleAll = React.useCallback(() => {
    dispatch(actions.toggleAllTodo());
  }, [dispatch]);

  React.useEffect(() => {
    getTodosFromServer(dispatch);
  }, []);

  return <StyledSection>
    <div style={{ display: "flex", alignItems: "center" }}>
      <StyledLabel onClick={handleToggleAll} allCompleted={todos.every(todo => todo.done)}>
        {"❯"}
      </StyledLabel>
      <Input
        placeholder="What needs to be done?"
        value={value}
        onKeyPress={addTodo}
        onChange={(e) => { setValue(e.target.value); }} />
    </div>
    {todos
      .filter(todo => filter === "all" ? true : filter === "completed" ? todo.done : !todo.done)
      .map(todo => <TodoItem
        todo={todo}
        handleDelete={deleteTodo}
        handleUpdate={updateTodo}
        key={todo.id} />)}
    {todos.length ? <Filter
      count={todos.length}
      clear={handleClear}
    /> : null}
  </StyledSection>;
};
