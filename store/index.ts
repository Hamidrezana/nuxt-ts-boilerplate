import { ActionTree, Store } from 'vuex';
import { initializeStores } from '~/utils/store-accessor';

const initializer = (store: Store<any>) => initializeStores(store);
export const plugins = [initializer];

export const actions: ActionTree<any, any> = {
  // async nuxtServerInit() {},
  // async nuxtClientInit(context) {},
};

export * from '~/utils/store-accessor';

// export const state = () => ({});
