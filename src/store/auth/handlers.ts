import * as api from './api';
import authActions from './slice';

type IHandleLoginActionType = (email: string, password: string) => void;

export const handleLoginAction: IHandleLoginActionType = (email, password) => {
  api.loginApi(email, password).then(() => authActions.loginSuccess({ email, password }));
};

type IHandleLogoutActionType = () => void;

export const handleLogoutAction: IHandleLogoutActionType = () => {
  api.logoutApi().then(() => authActions.logoutSuccess());
};
