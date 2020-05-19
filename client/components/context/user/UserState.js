import React, { useReducer } from 'react';
import UserReducer from './userReducer';
import UserContext from './userContext';
import { SET_USER } from '../types';

const UserState = props => {
  const initialState = {
    user: {
      id: null,
      email: '',
      name: '',
      //IDs
      photo: '',
      bio: '',
      active: false,
    },
    items: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const SetUserInfo = userInfo => {
    const { user } = userInfo;
    const { email, name, id, photo } = user;

    var userInd = {
      email,
      name,
      id,
      photo,
      bio: '',
      active: false,
    };

    dispatch({
      type: SET_USER,
      payload: userInd,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        SetUserInfo,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
