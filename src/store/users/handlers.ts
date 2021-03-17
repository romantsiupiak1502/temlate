import { Dispatch } from 'react';
import * as api from './api';
import usersActions from './slice';
import { IUsersItem } from './types';

type IHandleSetUsersAction = () => void;

interface IDispatchType {
  type: string,
  payload?: any,
}

export const setUsersAction: IHandleSetUsersAction = () => (dispatch: Dispatch<IDispatchType>) => api.usersApi()
  .then((data: IUsersItem[]) => dispatch(usersActions.setUsersSuccess({data})));

type IHandleOnSearchChangeAction = (text: string) => void;

export const onSearchByNameChangeAction: IHandleOnSearchChangeAction = (text) => (dispatch: Dispatch<IDispatchType>) =>
  dispatch(usersActions.setOnSearchByNameChange({text}));

export const onSearchByEmailChangeAction: IHandleOnSearchChangeAction = (text) => (dispatch: Dispatch<IDispatchType>) =>
  dispatch(usersActions.setOnSearchByEmailChange({text}));

type IHandleSortAction = () => void;

export const sortByNameAction: IHandleSortAction = () => (dispatch: Dispatch<IDispatchType>) =>
  dispatch(usersActions.sortByName());

export const sortByEmailAction: IHandleSortAction = () => (dispatch: Dispatch<IDispatchType>) =>
  dispatch(usersActions.sortByEmail());
