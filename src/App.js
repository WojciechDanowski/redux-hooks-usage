import React from "react";

import Form from "./components/Form/Form";
import Users from "./components/Users/Users";
import { Provider } from "react-redux";
import store from "./reducer/store";
import { ThemeProvider } from "styled-components";
import * as theme from "./styles/themes/theme";
import PageLoader from "./components/pageLoader/pageLoader";
import UsersList from "./components/UsersList/UsersList";
const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <ThemeProvider theme={theme}>
          <PageLoader />
          <Form />
          <UsersList />
        </ThemeProvider>
      </div>
    </Provider>
  );
};

export default App;
