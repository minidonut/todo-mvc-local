import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom"; 

const StyledContainer = styled.div`
  max-width: 550px;
  margin: 0 auto;
`;


export const Container = (props) => {
  const history = useHistory();

  React.useEffect(() => {
    if(history.location.pathname === "/") {
      history.push("/todos/all");
    }
  }, [history]);

  return <StyledContainer>
    {props.children}
  </StyledContainer>;
};
