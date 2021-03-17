import { mockApiService } from '../../services';

type ILoginApiType = (email: string, password: string) => Promise<any>;

export const loginApi: ILoginApiType = (email, password) =>
  mockApiService({ email, password });

type IRegistrationApiType = (name: string, surname: string, email: string, password: string) => Promise<any>;

export const registrationApi: IRegistrationApiType = (name, surname, email, password) =>
  mockApiService({ name, surname, email, password });

type ILogoutApiType = () => Promise<any>;

export const logoutApi: ILogoutApiType = () =>
  mockApiService({});
