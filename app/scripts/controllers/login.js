/**
 */

'use strict';

angular.module('cardkitApp')
  .controller('LoginCtrl',
    ['$rootScope', '$scope', '$location', 'googleAuth',
    function($rootScope, $scope, $location, jrgGoogleAuth) {
      var googleClientId ='991906554139-pn6gc09ch9jb2iric7tms4jmg7gp8lur.apps.googleusercontent.com';		//hardcoded
      var evtGoogleLogin ='evtGoogleLogin';

      $scope.trouble = function(setHeight) {
        var help = document.querySelector('.trouble__help');
        setHeight = setHeight || help.style.height === '100px' ? 0 : '100px';
        help.style.height = setHeight;
      };

      $scope.$on(evtGoogleLogin, function(evt, googleInfo) {
        $rootScope.googleInfo =googleInfo;
        $location.path('/home');
      });

      jrgGoogleAuth.init({'client_id':googleClientId, 'evtName':evtGoogleLogin});

  }
]);
