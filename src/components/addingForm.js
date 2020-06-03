import React, { useState } from "react";
import "./addingForm.css";
import { useDispatch } from "react-redux";
import { ADD_USER } from "../reducer/actions";

const AddingForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [id, setId] = useState("");

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
    dispatch({
      type: ADD_USER,
      payload: {
        name,
        surname,
        age,
        id,
      },
    });
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
