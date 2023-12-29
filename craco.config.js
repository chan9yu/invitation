const FontPreloadPlugin = require('webpack-font-preload-plugin');

module.exports = {
	webpack: {
		plugins: {
			add: [
				new FontPreloadPlugin({
					extensions: ['woff2']
				})
			]
		}
	}
};
