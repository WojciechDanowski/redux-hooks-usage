import React from "react";

import AddingForm from "./components/addingForm";
import UsersList from "./components/UsersList";
import { Provider } from "react-redux";
import store from "./reducer/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <AddingForm />
        <UsersList />
      </div>
    </Provider>
  );
};

export default App;
