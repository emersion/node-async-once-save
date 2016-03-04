module.exports = function (fn) {
	var promise;

	return function () {
		var args = Array.prototype.slice.call(arguments);
		var callback = args.pop();
		var ctx = this;

		if (!promise) {
			promise = new Promise(function (done) {
				args.push(function () {
					var results = Array.prototype.slice.call(arguments);
					done(results);
				});

				fn.apply(ctx, args);
			});
		}

		promise.then(function (results) {
			callback.apply(ctx, results);
		});
	};
};
