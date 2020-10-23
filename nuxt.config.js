import axios from './configs/axios';
import head from './configs/head';
import modules from './configs/modules';
import vuetify from './configs/vuetify';
import plugins from './configs/plugins';
import css from './configs/css';
// import loading from "./configs/loading";
import buildModules from './configs/buildModules';
import build from './configs/build';
import server from './configs/server';
import router from './configs/router';
import vue from './configs/vue';

const config = {
  target: 'static',
  // components: true,
  head,
  // loading,
  css,
  plugins,
  buildModules,
  modules,
  axios,
  vuetify,
  build,
  server,
  router,
  vue,
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}',
      },
    },
  },
};

export default config;
