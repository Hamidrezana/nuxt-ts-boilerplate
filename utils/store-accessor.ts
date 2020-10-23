/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import App from '~/store/App';

let $axios: NuxtAxiosInstance;

function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance;
}

let appStore: App;

function initializeStores(store: Store<any>): void {
  appStore = getModule(App, store);
}

export { initializeStores, initializeAxios, appStore, $axios };
