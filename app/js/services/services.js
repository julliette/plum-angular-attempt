'use strict';

/* Services */
var services = angular.module('plumApp.services', []);
// Demonstrate how to register services
// In this case it is a simple value service.
services.value('version', '0.1');

services.factory('geolocation', ['$rootScope', 'cordovaReady', function($rootScope, cordovaReady) {
	return {
		getCurrentPosition : cordovaReady(function(onSuccess, onError, options) {
			navigator.geolocation.getCurrentPosition(function() {
				var that = this, args = arguments;

				if (onSuccess) {
					$rootScope.$apply(function() {
						onSuccess.apply(that, args);
					});
				}
			}, function() {
				var that = this, args = arguments;

				if (onError) {
					$rootScope.$apply(function() {
						onError.apply(that, args);
					});
				}
			}, options);
		})
	};
}]);

services.factory('cordovaReady', function() {
	return function(fn) {

		var queue = [];

		var impl = function() {
			queue.push(Array.prototype.slice.call(arguments));
		};

		document.addEventListener('deviceready', function() {
			queue.forEach(function(args) {
				fn.apply(this, args);
			});
			impl = fn;
		}, false);

		return function() {
			return impl.apply(this, arguments);
		};
	};
}); 