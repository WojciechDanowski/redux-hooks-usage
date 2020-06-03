import React from "react";

import AddingForm from "./components/addingForm";
import PepoleList from "./components/PepoleList";
import { Provider } from "react-redux";
import store from "./reducer/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <AddingForm />
        <PepoleList />
      </div>
    </Provider>
  );
};

export default App;
