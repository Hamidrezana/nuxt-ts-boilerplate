import { Plugin } from '@nuxt/types';
import { initializeAxios } from '~/utils/store-accessor';

const accessor: Plugin = ({ $axios }) => {
  initializeAxios($axios);
};

export default accessor;
