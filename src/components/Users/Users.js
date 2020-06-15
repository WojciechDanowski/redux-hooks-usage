import React from "react";
import { useDispatch } from "react-redux";
import DeleteButton from "../../styles/DeleteButton";
import EditButton from "../../styles/EditButton";
import { deleteUser } from "../../services/users";
import { SET_FORM } from "../../actions/actions";
import Li from "../../styles/li";
import ButtonsOverlay from "../../styles/listButtonsOverlay";
const Users = (props) => {
  const dispatch = useDispatch();

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const handleEditUser = (user) => {
    dispatch({
      type: SET_FORM,
      payload: user,
    });
  };

  const { id, name, surname, age } = props;
  return (
    <Li>
      {name} {surname}, wiek: {age}
      <ButtonsOverlay>
        <DeleteButton onClick={() => handleDeleteUser(props.id)}>
          x
        </DeleteButton>
        <EditButton onClick={() => handleEditUser(props)}> Edytuj </EditButton>
      </ButtonsOverlay>
    </Li>
  );
};

export default Users;
