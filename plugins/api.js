import { setModule, setStore } from '~/apis';

export default ({ app, store }) => {
  setModule(app.$axios);
  setStore(store);
};
