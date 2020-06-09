import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { editUser, deleteUser, fetchUsers } from "../services/users";
const Users = (props) => {
  const pepole = useSelector((state) => state.usersReducer.pepole);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const [editPersonId, setEditPersonId] = useState("");
  const [editedValue, setEditedValue] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  // const handleDeleteUser = (id) => {
  //   dispatch(deleteUser(id));
  // };

  const handleEditUser = (id) => {
    setEditPersonId(id);
    const currentUserValues = pepole.find((person) => person.id === id);
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
    dispatch(editUser(editedValue, editPersonId));

    setEditedValue({});
    setEditPersonId("");
  };

  return pepole.map((editedValue) => {
    return (
      <li key={editedValue.id}>
        {" "}
        {editedValue.name} {editedValue.surname}, wiek: {editedValue.age}{" "}
        <button onClick={() => props.handleDelete(editedValue.id)}> x </button>{" "}
        <button onClick={() => handleEditUser(editedValue.id)}> Edytuj </button>{" "}
        {editedValue.id === editPersonId && (
          <>
            <div className="AddingForm">
              <input
                type="text"
                placeholder="Podaj imię..."
                name="name"
                onChange={onEditHandleChange}
                value={editedValue.name}
              />{" "}
              <input
                type="text"
                placeholder="Podaj nazwisko..."
                name="surname"
                onChange={onEditHandleChange}
                value={editedValue.surname}
              />{" "}
              <input
                type="number"
                placeholder="wiek"
                name="age"
                onChange={onEditHandleChange}
                value={editedValue.age}
              />{" "}
              <button onClick={handleEditionSubmit}> Potwierdź edycję </button>{" "}
            </div>{" "}
          </>
        )}{" "}
      </li>
    );
  });
};

export default Users;
