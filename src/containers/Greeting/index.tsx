import React from 'react';
import { useDispatch } from 'react-redux';

import { handleLoginAction, handleRegistrationAction } from '../../store/auth';

import { Greeting } from './Greeting';

export const GreetingContainer = () => {
  const dispatch = useDispatch();

  return (
    <Greeting
      onLoginClick={ (email: string, password: string, toggleIsShowError: () => void) =>
        dispatch(handleLoginAction(email, password, toggleIsShowError))}
      onSignUpClick={
        (name: string, surname: string, email: string, password: string, toggleIsShowError: () => void, isCheckout: () => void) =>
        dispatch(handleRegistrationAction(name, surname, email, password, toggleIsShowError, isCheckout)) } />
  );
};