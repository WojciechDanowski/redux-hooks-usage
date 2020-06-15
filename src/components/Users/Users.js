import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteButton from "../../styles/DeleteButton";
import EditButton from "../../styles/EditButton";
import { deleteUser } from "../../services/users";
import { SET_FORM } from "../../actions/actions";
import Li from "../../styles/li";
import ButtonsOverlay from "../../styles/listButtonsOverlay";
const Users = () => {
  const pepole = useSelector((state) => state.usersReducer.pepole);

  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEditUser = (pepole) => {
    dispatch({
      type: SET_FORM,
      payload: pepole,
    });
  };

  return pepole.map((user) => {
    return (
      <Li key={user.id}>
        {user.name} {user.surname}, wiek: {user.age}
        <ButtonsOverlay>
          <DeleteButton onClick={() => handleDeleteUser(user.id)}>
            x
          </DeleteButton>
          <EditButton onClick={() => handleEditUser(user)}> Edytuj </EditButton>
        </ButtonsOverlay>
      </Li>
    );
  });
};

export default Users;
