import { apiService } from '../../services';

export const usersApi: any = () => apiService.get('users').then( (response) => response.data);
