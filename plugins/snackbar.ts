import { Plugin } from '@nuxt/types';

export interface ISnackbar {
  content: string;
  color: string;
}

declare module 'vue/types/vue' {
  interface Vue {
    $snackbar({ content, color }: ISnackbar): void;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $snackbar({ content, color }: ISnackbar): void;
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $snackbar({ content, color }: ISnackbar): void;
  }
}

const snackbar: Plugin = ({ store }, inject) => {
  inject('snackbar', ({ content = '', color = '' }: ISnackbar) =>
    store.commit('App/SHOW_MESSAGE', { content, color }),
  );
};

export default snackbar;

// export default ({ store }, inject) => {
// 	inject("snackbar", {
// 		showMessage({ content = "", color = "" }) {
// 			store.commit("SHOW_MESSAGE", { content, color });
// 		}
// 	});
// };
