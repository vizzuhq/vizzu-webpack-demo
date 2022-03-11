# vizzu-webpack-demo

This project is a showcase of bundling the [Vizzu](https://github.com/vizzuhq/vizzu-lib) 
library with Webpack.

Vizzu lib comes with a WebAssembly module. Unfortunately Webpack cannot handle 
this out of box. To solve this problem Webpack and the Javascript code using Vizzu
needs a bit of tweaking.

## Usage

If you merely want to try out this project, then clone the project and run the 
following commands to build and host it on localhost:

```shell
npm install
npm run build
npx serve -s dist
```

You will find the generated output in the `dist` folder.


## Adding Vizzu to a project which using Webpack

If you'd like to use Vizzu in a project bundled using Webpack, the first thing
you need to do is installing Vizzu package from NPM:

```shell
npm install --save vizzu
```

To create a simple bar chart, you can put the following code to your HTML
and Javascript file.

```html
    <div id="myVizzu" style="width:800px; height:480px;"></div>
```

```javascript
import Vizzu from 'vizzu';

let data = {
	series: [
		{ name: 'Foo', values: ['Alice', 'Bob', 'Ted'] },
		{ name: 'Bar', values: [15, 32, 12] },
	]
};

let chart = new Vizzu('myVizzu', { data });

chart.animate({ x: 'Foo', y: 'Bar' });
```

The code above won't yet work, because Vizzu will search for it's Webassembly
module (`cvizzu.wasm`) in the same folder the library's Javascript file was 
included from.

To solve this problem, we should show Vizzu, where can it find its Webassembly
file by adding the following lines before the Vizzu constructor call:

```javascript
import VizzuModule from './../node_modules/vizzu/dist/cvizzu.wasm';

Vizzu.options({ wasmUrl: VizzuModule });
```

We also need to change the default behaviour of Webpack for the WebAssembly
module by adding the following configs into its project local config file
`/webpack.config.js`:

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
