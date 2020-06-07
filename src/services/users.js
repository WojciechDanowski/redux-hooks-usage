import {
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
} from "../actions/actions";

const responseMock = [{ name: "Zbigniew", surname: "Boniek", age: 25, id: 1 }];

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_USERS, payload: responseMock });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      await fetch("https://react-redux-hooks-704ffa.firebaseio.com/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      dispatch({ type: ADD_USER });
      dispatch(fetchUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`https://react-redux-hooks-704ffa.firebaseio.com/${id}`, {
        method: "DELETE",
      });
      dispatch({ type: DELETE_USER });
      dispatch(fetchUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUser = (user) => {
  return async (dispatch) => {
    try {
      await fetch(
        `https://react-redux-hooks-704ffa.firebaseio.com/${user.id}`,
        {
          method: "PUT",
          body: JSON.stringify(user),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};
