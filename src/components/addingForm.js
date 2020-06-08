import React, { useState, useEffect } from "react";
import "./addingForm.css";
import { useDispatch } from "react-redux";

import uuid from "uuid/v4";

import { fetchUsers, addUser } from "../services/users";

const AddingForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const nameHandle = (e) => {
    setName(e.target.value);
  };

  const surnameHandle = (e) => {
    setSurname(e.target.value);
  };

  const ageHandle = (e) => {
    setAge(e.target.value);
  };

  const handleClick = () => {
    dispatch(addUser({ name, surname, age, id: uuid() }));
    // dispatch({
    //   type: ADD_USER,
    //   payload: {
    //     name,
    //     surname,
    //     age,
    //     id: uuid(),
    //   },
    // });
  };

  return (
    <>
      <div className="AddingForm">
        <input type="text" placeholder="Podaj imię..." onChange={nameHandle} />
        <input
          type="text"
          placeholder="Podaj nazwisko..."
          onChange={surnameHandle}
        />
        <input type="number" placeholder="wiek" onChange={ageHandle} />
        <button onClick={handleClick}>Potwierdź</button>
      </div>
    </>
  );
};

export default AddingForm;
