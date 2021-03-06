import {
  ADD_USERS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  SET_LOADER,
} from "../actions/actions";
import { batch } from "react-redux";

export const fetchUsers = () => {
  return async (dispatch) => {
    
    try {
      const response = await fetch(
        "https://react-redux-hooks-704ffa.firebaseio.com/users.json/"
      );
      const responseBody = await response.json();

      let users = [];

      Object.keys(responseBody || {}).forEach((key) => {
        const user = { ...responseBody[key], id: key };
        users = [...users, user];
      });

      dispatch({ type: ADD_USERS, payload: users });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addUser = (user) => {
  
  return async (dispatch) => {
    dispatch({
      type: SET_LOADER,
      payload: true,
    })
    try {
      await fetch(
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
        batch(() => {

          dispatch({
            type: ADD_USER,
            payload: user,
          });
          dispatch({
            type: SET_LOADER,
            payload: false,
          })
          dispatch(fetchUsers());
        } 
          
      )
    } catch (error) {
      console.log(error)
    }
    } 
    
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    try {
      await fetch(
        `https://react-redux-hooks-704ffa.firebaseio.com/users/${id}.json`,
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
        payload: { id },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const editUser = (user) => {
  return async (dispatch) => {
    try {
      await fetch(
        `https://react-redux-hooks-704ffa.firebaseio.com/users/${user.id}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify(user),
        }
      );
      dispatch({ type: EDIT_USER, payload: { ...user } });
    } catch (error) {
      console.log(error);
    }
  };
};
