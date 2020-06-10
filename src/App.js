import React from "react";

import Form from "./components/Form";
import Users from "./components/Users";
import { Provider } from "react-redux";
import store from "./reducer/store";
import { ThemeProvider } from "styled-components";
import * as theme from "./styles/themes/theme";
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <ThemeProvider theme={theme}>
          <Form />
          <Users />
        </ThemeProvider>
      </div>
    </Provider>
  );
};

export default App;
