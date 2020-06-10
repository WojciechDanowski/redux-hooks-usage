import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteButton from "../styles/DeleteButton";
import EditButton from "../styles/EditButton";
import { deleteUser, fetchUsers } from "../services/users";
import { SET_FORM } from "../actions/actions";
const Users = (props) => {
  const pepole = useSelector((state) => state.usersReducer.pepole);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEditUser = (pepole) => {
    dispatch({
      type: SET_FORM,
      payload: pepole,
    });
  };

  return (
    <ul>
      {pepole.map((user) => {
        return (
          <li key={user.id}>
            {user.name} {user.surname}, wiek: {user.age}
            <DeleteButton onClick={() => handleDeleteUser(user.id)}>
              x
            </DeleteButton>
            <EditButton onClick={() => handleEditUser(user)}>Edytuj</EditButton>
          </li>
        );
      })}
    </ul>
  );
};

export default Users;
