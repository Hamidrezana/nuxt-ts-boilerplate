import apiModule, { onResponse, onError, createUrl } from '.';
import { ApiName } from '~/@types/_apiName';

const BASE_URL = `user`;

export interface IChangeProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
}

const UserApi = {
  async getUserInfo(userId: string) {
    const apiName: ApiName = 'GET_USER';
    try {
      const response = await apiModule.get(createUrl(BASE_URL, userId));
      return onResponse(response, apiName);
    } catch (err) {
      return onError(err, apiName);
    }
  },
};

export default UserApi;
