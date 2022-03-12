import Vizzu from 'vizzu';
import VizzuModule from 'vizzu/dist/cvizzu.wasm';

let data = {
	series: [
		{ name: 'Foo', values: ['Alice', 'Bob', 'Ted'] },
		{ name: 'Bar', values: [15, 32, 12] },
		{ name: 'Baz', values: [5, 3, 2] }
	]
};

Vizzu.options({ wasmUrl: VizzuModule });

let chart = new Vizzu('myVizzu', { data });

chart.animate({
	x: 'Foo',
	y: 'Bar'
});
