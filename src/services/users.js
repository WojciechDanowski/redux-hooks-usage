import {
  FETCH_USERS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
} from "../actions/actions";

const responseMock = [
  {
    name: "Zbigniew",
    surname: "Boniek:D",
    age: 25,
    id: 1,
  },
];

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://react-redux-hooks-704ffa.firebaseio.com/users.json/"
      );
      const responseBody = await response.json();
      console.log(responseBody, "response Body");
      let users = [];
      Object.keys(responseBody).forEach((key) => {
        const user = { ...responseBody[key], id: key };
        users = [...users, user];
      });
      console.log(users, "users");
      dispatch({ type: FETCH_USERS, payload: users });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUser = (user) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://react-redux-hooks-704ffa.firebaseio.com/users.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(user),
        }
      );
      const responseBody = await response.json();
      console.log(responseBody.name);
      dispatch({
        type: ADD_USER,
      });
      dispatch(fetchUsers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await fetch(
        `https://react-redux-hooks-704ffa.firebaseio.com/users.json/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      dispatch({
        type: DELETE_USER,
      });
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
        `https://react-redux-hooks-704ffa.firebaseio.com/users.json/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(user),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
};
