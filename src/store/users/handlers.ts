import * as api from './api';
import usersActions from './slice';
import { IUsersItem } from './types';

type ISetUsersAction = () => any;

export const setUsersAction: ISetUsersAction = () => (dispatch: any) => api.usersApi()
  .then((data: IUsersItem[]) => dispatch(usersActions.setUsersSuccess({data})));

type IOnSearchChangeAction = (text: string) => void;

export const onSearchByNameChangeAction: IOnSearchChangeAction = (text) => (dispatch: any) =>
  dispatch(usersActions.setOnSearchByNameChange({text}));

export const onSearchByEmailChangeAction: IOnSearchChangeAction = (text) => (dispatch: any) =>
  dispatch(usersActions.setOnSearchByEmailChange({text}));

type ISortAction = () => void;

export const sortByNameAction: ISortAction = () => (dispatch: any) =>
  dispatch(usersActions.sortByName());

export const sortByEmailAction: ISortAction = () => (dispatch: any) =>
  dispatch(usersActions.sortByEmail());
