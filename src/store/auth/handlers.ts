import * as api from './api';
import authActions from './slice';
import { storageService } from '../../services';

type IHandleLoginActionType = (email: string, password: string, toggleIsShowError: () => void) => any;

export const handleLoginAction: IHandleLoginActionType = (email, password, toggleIsShowError) => (dispatch: any) =>
  api.loginApi(email, password).then(() => {
    const users: any = storageService.getItem('users');
    const currentUser = users.find((item: any) => item.email === email && item.password === password)
    if(currentUser) {
      dispatch(authActions.loginSuccess({currentUser}))
    } else {
      toggleIsShowError()
    }
  });

type IHandleRegistrationActionType =
  (name: string, surname: string, email: string, password: string, toggleIsShowError: () => void, isCheckout: () => void) => void;

export const handleRegistrationAction: IHandleRegistrationActionType =
  (name, surname, email, password, toggleIsShowError, isCheckout) => (dispatch: any) =>
    api.registrationApi(name, surname, email, password).then(() => {
      const users: any = storageService.getItem('users');
      if(users.find((item: any) => item.email === email)) {
        toggleIsShowError()
      } else {
        isCheckout();
        dispatch(authActions.registrationSuccess({ name, surname, email, password }));
      }
    });

type IHandleLogoutActionType = () => void;

export const handleLogoutAction: IHandleLogoutActionType = () => (dispatch: any) =>
  api.logoutApi().then(() => dispatch(authActions.logoutSuccess()));
