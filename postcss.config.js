module.exports = {
	plugins: [
        require('postcss-import'),
        require('postcss-nested'),
		require('postcss-preset-env')({ features: { 'cascade-layers': false } })
        // require('cssnano')
	]
}
