import React from "react";
import "./addingForm.css";
import { useDispatch, useSelector } from "react-redux";

import { addUser, editUser } from "../../services/users";
import { SET_FORM } from "../../actions/actions";
import Button from "../../styles/AddingButton";
import Article from "../../styles/article";
import Input from "../../styles/input";
import Overlay from "../../styles/buttonsOverlay";
import ConfirmButton from "../../styles/confirmEdition";
import { batch } from "react-redux";

const Form = () => {
  const formData = useSelector((state) => state.usersReducer.form);
  const dispatch = useDispatch();

  const nameHandle = (e) => {
    dispatch({
      type: SET_FORM,
      payload: {
        ...formData,
        name: e.target.value,
      },
    });
  };

  const surnameHandle = (e) => {
    dispatch({
      type: SET_FORM,
      payload: {
        ...formData,
        surname: e.target.value,
      },
    });
  };

  const ageHandle = (e) => {
    dispatch({
      type: SET_FORM,
      payload: {
        ...formData,
        age: e.target.value,
      },
    });
  };

  const handleAddClick = () => {
    const payload = {
      ...formData,
    };
    batch(() => {
      dispatch(addUser(payload));
      dispatch({
        type: SET_FORM,
        payload: {
          name: "",
          surname: "",
          age: "",
        },
      });
    });
  };
  const handleEditionClick = () => {
    const payload = {
      ...formData,
    };

    batch(() => {
      dispatch(editUser(payload));
      dispatch({
        type: SET_FORM,
        payload: {
          name: "",
          surname: "",
          age: "",
        },
      });
    });
  };

  return (
    <>
      <Article>
        <Input
          type="text"
          placeholder="Podaj imię..."
          onChange={nameHandle}
          value={formData.name}
        />{" "}
        <Input
          type="text"
          placeholder="Podaj nazwisko..."
          onChange={surnameHandle}
          value={formData.surname}
        />{" "}
        <Input
          type="number"
          placeholder="wiek"
          onChange={ageHandle}
          value={formData.age}
        />{" "}
        <Overlay>
          <Button onClick={handleAddClick}> Dodaj </Button>{" "}
          <ConfirmButton onClick={handleEditionClick}> Zapisz </ConfirmButton>{" "}
        </Overlay>{" "}
      </Article>{" "}
    </>
  );
};

export default Form;
