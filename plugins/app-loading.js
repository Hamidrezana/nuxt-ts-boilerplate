export default ({ store }, inject) => {
  inject('appLoading', {
    showLoading(payload) {
      store.commit('SHOW_MESSAGE', payload);
    },
  });
};
