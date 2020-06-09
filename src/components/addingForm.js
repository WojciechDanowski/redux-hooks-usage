import React, { useState } from "react";
import "./addingForm.css";
import { useDispatch } from "react-redux";

import uuid from "uuid/v4";

import { fetchUsers, addUser } from "../services/users";

const AddingForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [editPersonId, setEditPersonId] = useState("");
  const [editedValue, setEditedValue] = useState("");
  const dispatch = useDispatch();

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
    const payload = {
      name,
      surname,
      age,
      id: uuid(),
    };
    dispatch(addUser(payload));
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
