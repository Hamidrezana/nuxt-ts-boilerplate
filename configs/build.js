const path = require('path');

export default {
  // extractCSS: true,
  // optimization: {
  // 	splitChunks: {
  // 		chunks: "all",
  // 		maxSize: 240000
  // 		// cacheGroups: {
  // 		// 	styles: {
  // 		// 		name: "styles",
  // 		// 		test: /\.(css|vue)$/,
  // 		// 		chunks: "all",
  // 		// 		enforce: true
  // 		// 	}
  // 		// }
  // 	}
  // },
  cssSourceMap: false,
  extend(config, _ctx) {
    config.node = {
      fs: 'empty',
    };
    const alias = config.resolve.alias;
    const projectSrc = alias['@'];
    alias['@components'] = path.join(projectSrc, 'components');
    alias['@pages'] = path.join(projectSrc, 'components/pages');
    alias['@sass'] = path.join(projectSrc, 'assets/sass');
    alias['@img'] = path.join(projectSrc, 'assets/img');
    alias['@icon'] = path.join(projectSrc, 'assets/icons');
    alias['@utils'] = path.join(projectSrc, 'assets/utils');
  },
};
