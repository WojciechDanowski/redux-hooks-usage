import React from "react";
import { useDispatch } from "react-redux";
import Users from "./Users";
import { deleteUser } from "../services/users";
const UsersList = () => {
  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <ul>
        <Users handleDelete={handleDeleteUser} />
      </ul>
    </>
  );
};

export default UsersList;
