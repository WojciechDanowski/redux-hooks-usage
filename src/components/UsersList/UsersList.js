import React, { useEffect } from "react";
import Users from "../Users/Users";
import { fetchUsers } from "../../services/users";
import { useDispatch, useSelector } from "react-redux";

const UsersList = () => {
  const pepole = useSelector((state) => state.usersReducer.pepole);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <ul>
      {pepole.map((user) => {
        return (
          <Users
            id={user.id}
            name={user.name}
            surname={user.surname}
            age={user.age}
          />
        );
      })}
    </ul>
  );
};

export default UsersList;
