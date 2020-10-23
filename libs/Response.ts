import Strings from '~/utils/Strings';
import { ApiName } from '~/@types/_apiName';

export enum RequestMethod {
  POST,
  GET,
  DELETE,
  PATCH,
}

const successApi: Array<ApiName> = [];

export interface IResponse {
  success: boolean;
  data?: any;
  message?: string;
  apiName: ApiName;
  requestMethod?: RequestMethod;
  statusCode?: number;
}

export default class Response {
  success: boolean;
  data?: any;
  message?: string;
  apiName: ApiName;
  requestMethod?: RequestMethod;
  constructor({ success, data, message, apiName, requestMethod }: IResponse) {
    this.success = success;
    this.data = data || null;
    this.message = message || '';
    this.requestMethod = requestMethod;
    this.apiName = apiName;
    this.showMessage();
  }

  showMessage() {
    if (!this.success) {
      this.snackbar(this.apiName, 'error', this.message);
    } else if (successApi.includes(this.apiName)) {
      this.snackbar(this.apiName, 'success', this.message);
    }
  }

  snackbar(_apiName: string, type: 'error' | 'success', message?: string) {
    if (process.client) {
      window.$nuxt.$snackbar({
        color: type,
        content: message || Strings.messages.problemOccurred,
      });
    }
  }
}
