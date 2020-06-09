import React from "react";

import Form from "./components/Form";
import Users from "./components/Users";
import { Provider } from "react-redux";
import store from "./reducer/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Form />
        <Users />
      </div>
    </Provider>
  );
};

export default App;
