# node-async-once-save

Execute an async function once and save the result.

The async function can be any function, unlike [`async-once`](https://www.npmjs.com/package/async-once).

## Usage

```js
var once = require('async-once-save');

var i = 0;
var asyncFunction = once(function (j, done) {
	setTimeout(function () {
		i++;
		done(i, j);
	}, 1000);
});

asyncFunction(42, function (i, j) {
	console.log(i, j); // 1, 42

	// The function as been executed once and its result has been saved.
	// Another call won't wait for 1 second and will return the same result.

	asyncFunction(76, function (i, j) {
		console.log(i, j); // 1, 42
	});
});
```

## Licence

MIT
