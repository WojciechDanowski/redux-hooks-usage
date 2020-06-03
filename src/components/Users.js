import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DELETE_USER, EDIT_USER } from "../reducer/actions";
const Users = () => {
  const pepoleArr = useSelector((state) => state.usersReducer.pepole);
  console.log(pepoleArr);
  const dispatch = useDispatch();

  const [editPersonId, setEditPersonId] = useState(undefined);
  const [editedValue, setEditedValue] = useState({});
  const handleDeleteUser = (id) => {
    dispatch({
      type: DELETE_USER,
      payload: {
        id,
      },
    });
  };

  const handleEditUser = (id) => {
    setEditPersonId(id);
    const currentUserValues = pepoleArr.find((person) => person.id === id);
    setEditedValue(currentUserValues);
  };

  const onEditHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditedValue((currentValue) => {
      return {
        ...currentValue,
        [name]: value,
      };
    });
  };

  const handleEditionSubmit = () => {
    dispatch({
      type: EDIT_USER,
      payload: {
        id: editPersonId,
        newValues: editedValue,
      },
    });
    setEditedValue({});
    setEditPersonId(undefined);
  };

  return pepoleArr.map((editedVAlue) => {
    return (
      <li key={editedVAlue.id}>
        {editedVAlue.name} {editedVAlue.surname}, wiek: {editedVAlue.age}
        <button onClick={() => handleDeleteUser(editedVAlue.id)}> x </button>
        <button onClick={() => handleEditUser(editedVAlue.id)}>Edytuj</button>
        {editedVAlue.id === editPersonId && (
          <>
            <div className="AddingForm">
              <input
                type="text"
                placeholder="Podaj imię..."
                name="name"
                onChange={onEditHandleChange}
                value={editedValue.name}
              />
              <input
                type="text"
                placeholder="Podaj nazwisko..."
                name="surname"
                onChange={onEditHandleChange}
                value={editedValue.surname}
              />
              <input
                type="number"
                placeholder="wiek"
                name="age"
                onChange={onEditHandleChange}
                value={editedValue.age}
              />
              <button onClick={handleEditionSubmit}>Potwierdź edycję</button>
            </div>
          </>
        )}
      </li>
    );
  });
};

export default Users;
