import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { ISnackbar } from '~/plugins/snackbar';

@Module({
  name: 'App',
  stateFactory: true,
  namespaced: true,
})
export default class App extends VuexModule {
  snackbar: ISnackbar = {
    color: '',
    content: '',
  };

  @Mutation
  SHOW_MESSAGE(payload: ISnackbar) {
    this.snackbar = payload;
  }

  @Action
  setMessage(payload: ISnackbar) {
    this.context.commit('SHOW_MESSAGE', payload);
  }
}
