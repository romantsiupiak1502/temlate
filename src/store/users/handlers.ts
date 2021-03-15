import * as api from './api';
import usersActions from './slice';

export const setUsersAction: any = () => (dispatch: any) => api.usersApi()
  .then((data: any) => dispatch(usersActions.setUsersSuccess({data})));

export const onSearchByNameChangeAction: any = (text: string) => (dispatch: any) =>
  dispatch(usersActions.setOnSearchByNameChange({text}));

export const onSearchByEmailChangeAction: any = (text: string) => (dispatch: any) =>
  dispatch(usersActions.setOnSearchByEmailChange({text}));

export const sortByNameAction: any = () => (dispatch: any) =>
  dispatch(usersActions.sortByName());

export const sortByEmailAction: any = () => (dispatch: any) =>
  dispatch(usersActions.sortByEmail());
