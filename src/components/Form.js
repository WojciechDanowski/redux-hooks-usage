import React from "react";
import "./addingForm.css";
import { useDispatch, useSelector } from "react-redux";

import { addUser, editUser } from "../services/users";
import { SET_FORM } from "../actions/actions";

const Form = () => {
  const formData = useSelector((state) => state.usersReducer.form);
  const dispatch = useDispatch();

  const nameHandle = (e) => {
    dispatch({
      type: SET_FORM,
      payload: {
        ...formData,
        name: e.target.value,
      },
    });
  };

  const surnameHandle = (e) => {
    dispatch({
      type: SET_FORM,
      payload: {
        ...formData,
        surname: e.target.value,
      },
    });
  };

  const ageHandle = (e) => {
    dispatch({
      type: SET_FORM,
      payload: {
        ...formData,
        age: e.target.value,
      },
    });
  };

  const handleAddClick = () => {
    const payload = {
      ...formData,
    };
    dispatch(addUser(payload));
    dispatch({
      type: SET_FORM,
      payload: {
        name: "",
        surname: "",
        age: "",
      },
    });
  };
  const handleEditionClick = () => {
    const payload = {
      ...formData,
    };
    dispatch(editUser(payload));
    dispatch({
      type: SET_FORM,
      payload: {
        name: "",
        surname: "",
        age: "",
      },
    });
  };

  return (
    <>
      <div className="Form">
        <input
          type="text"
          placeholder="Podaj imię..."
          onChange={nameHandle}
          value={formData.name}
        />
        <input
          type="text"
          placeholder="Podaj nazwisko..."
          onChange={surnameHandle}
          value={formData.surname}
        />
        <input
          type="number"
          placeholder="wiek"
          onChange={ageHandle}
          value={formData.age}
        />
        <button onClick={handleAddClick}>Dodaj</button>
        <button onClick={handleEditionClick}>Potwierdź edycję</button>
      </div>
    </>
  );
};

export default Form;
