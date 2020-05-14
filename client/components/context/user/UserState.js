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
    },
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const SetUserInfo = userInfo => {
    const { user } = userInfo;
    const { email, name, id } = user;

    var userInd = {
      email,
      name,
      id,
    };

    dispatch({
      type: SET_USER,
      payload: userInd,
    });
  };

  const GetUserInfo = () => {
    dispatch({
      type: Get,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        SetUserInfo,
        GetUserInfo,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
