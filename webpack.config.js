module.exports = {
	module: {
		rules: [
			{
				test: /cvizzu\.wasm$/,
				type: "javascript/auto",
				loader: "file-loader",
			}
		]
	}
};