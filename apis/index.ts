/* eslint-disable import/no-mutable-exports */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import { AxiosResponse, AxiosStatic } from 'axios';
import Response, { IResponse, RequestMethod } from '~/libs/Response';
import Logger from '~/libs/Logger';
import { ApiName } from '~/@types/_apiName';

let appClient: any;

let store: any;

export function setModule(newModule: any) {
  appClient = newModule;
}

export function setStore(newStore: any) {
  store = newStore;
}

const reqMethods = ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch'];

// @ts-expect-error
let apiModule: AxiosStatic = {};

reqMethods.forEach(method => {
  // @ts-expect-error
  apiModule[method] = function () {
    if (!appClient) {
      throw new Error('appClient not installed');
    }
    return appClient[method].apply(null, arguments);
  };
});

export default apiModule;

export const createUrl = (
  baseUrl: string,
  id: number | string,
  others: Array<string> = [],
): string => [baseUrl, id, ...others].join('/');

export const onResponse = (
  res: AxiosResponse<any>,
  apiName: ApiName,
  requestMethod?: RequestMethod,
) => {
  return new Response({
    success: res.data.success || res.data.statusCode === 1200 || !res.data.errorType,
    data: res.data.data,
    message: res.data.message,
    statusCode: res.data.statusCode,
    apiName,
    requestMethod,
  });
};

export const onError = (err: any, apiName: ApiName) => {
  const response = err?.response?.data;
  Logger.log({
    fileName: `Request Failed: ${apiName}`,
    type: 'ERROR',
    log: err?.response?.data?.errorType || err,
  });
  return new Response({
    success: false,
    message: response?.message,
    statusCode: response?.statusCode,
    apiName,
  });
};
