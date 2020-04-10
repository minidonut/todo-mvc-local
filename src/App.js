import React from "react";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import {
  Container,
  Header,
  Section,
  Footer,
} from "./components";
import createStore from "./redux";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const store = createStore();
const GlobalStyle = createGlobalStyle`
  body {
    background: #f5f5f5;
  }
`;

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Container>
          <GlobalStyle />
          <Header />
          <Route path="/todos/:filter" >
            <Section />
          </Route>
          <Footer />
        </Container>
      </Provider>
    </Router >
  );
}

export default App;
