import React from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";

const StyledFilter = styled.div`
  position: relative;
  border-top: 1px solid rgba(77, 77, 77, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 0 16px;
  height: 50px;
  font-size: 14px;
  > * { z-index: 100; }
  :after {
    z-index: 0;
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;

const FilterButton = styled.p`
  margin: 0 4px 0 4px;
  padding: 3px 7px;
  border-radius: 2px;
  border: 1px solid #FFF;
  cursor: pointer;
  border-color: ${props => props.current ? "rgba(175, 47, 47, 0.2)" : "#FFF"};
  transition: all 0.15s ease-out;
  :hover {
     border-color: ${props => props.current ? "rgba(175, 47, 47, 0.2)" : "rgba(175, 47, 47, 0.1)"};
  }
`;

const ClearButton = styled.p`
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
`;

const Filter = (props) => {
  const history = useHistory();
  const { filter } = useParams();
  const { count, clear } = props;
  return <StyledFilter>
    <p>{count} items left</p>
    <div style={{ display: "flex", alignItems: "center" }}>
      <FilterButton onClick={() => history.push("/todos/all")} current={filter === "all"}>All</FilterButton>
      <FilterButton onClick={() => history.push("/todos/active")} current={filter === "active"}>Active</FilterButton>
      <FilterButton onClick={() => history.push("/todos/completed")} current={filter === "completed"}>Completed</FilterButton>
    </div>
    <ClearButton onClick={clear}>Clear completed</ClearButton>
  </StyledFilter>;
};

export default Filter;
