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
				var themes = $http.get('themes.config.json').catch(function(err) {
					if(err.status === 404) {
						return [];
					}

					return $q.reject(err);
				});

				var resources = $http.get('resources.json').catch(function(err) {
					if (err.status === 404) {
						return {};
					}

					return $q.reject(err);
				});

				return $q.all([themes, resources]).then(function(values){
          var themes = values[0].data;
          var resources = values[1].data;
          var theme, images;
					for (var i = 0; i < themes.length; i++) {
            theme = themes[i];
            images = theme.images;
            for (var k in images) {
              images[k] = resources[images[k]];
            }
					}

					return themes;
				});
		}
	};
  });
