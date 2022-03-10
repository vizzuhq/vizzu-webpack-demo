# vizzu-webpack-demo

This project is a showcase of bundling the vizzulib with Webpack.

Vizzu lib comes with a WebAssembly module. Because of this, Webpack cannot handle it out of box. 

> Note: this project will work only with Vizzu 0.4.5+, which is not yet released as of now (2022.03.10).
> So after installing vizzu, you will need to download and overwrite `vizzu.min.js` and `cvizzu.wasm`
> with the most recent versions from here: 

> https://vizzu-lib-main.storage.googleapis.com/lib/vizzu.min.js

> https://vizzu-lib-main.storage.googleapis.com/lib/cvizzu.wasm


## Usage

Clone the project, then run the following commands to build it:

```shell
npm install
npm run build
```

It will generate to output to the dist/ folder.

## Adding Vizzu to a project which using Webpack

Add vizzu to the project:
```shell
npm install --save vizzu
```

Add the following code to the source:

```javascript
import Vizzu from 'vizzu';

import VizzuModule from './../node_modules/vizzu/dist/cvizzu.wasm';

Vizzu.options({ wasmUrl: VizzuModule });
```

Setup Webpack to use `file-loader` for `cvizzu.wasm` using `/webpack.config.js`:

```javascript
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
```
