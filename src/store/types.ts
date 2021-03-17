import { IUsersStore } from './users';
import { IAuthStore } from './auth';

export type IStore = {
  auth: IAuthStore,
  users: IUsersStore,
}
