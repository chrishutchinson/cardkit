'use strict';

/**
 * @ngdoc provider
 * @name cardkitApp.themeConfigProvider
 * @description
 * # themeConfigProvider
 * Service in the cardkitApp.
 */
angular.module('cardkitApp')
  .provider('themeConfigProvider', function () {
  	return {
	    $get: function($http, $q) {
			var defaultConfig = $http.get('themes.config.json').catch(function(err) {
				if(err.status === 404) {
					return [];
				}

				return $q.reject(err);
			});

			return $q.all([defaultConfig]).then(function(values){
				return values[0].data;
			});
		}
	};
  });
