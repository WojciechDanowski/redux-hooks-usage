import React, { useEffect } from "react";
import Users from "../Users/Users";
import { fetchUsers } from "../../services/users";
import { useDispatch } from "react-redux";
const UsersList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <ul>
      <Users />
    </ul>
  );
};

export default UsersList;
