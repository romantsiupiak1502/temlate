import { apiService } from '../../services';

type IUsersApi = () => Promise<any>

export const usersApi: IUsersApi = () => apiService.get('users').then( (response) => response.data);
