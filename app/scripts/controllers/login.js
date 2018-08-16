/**
 */

'use strict';

angular.module('cardkitApp')
  .controller('LoginCtrl',
    ['$rootScope', '$scope', '$location', 'googleAuth',
    function($rootScope, $scope, $location, jrgGoogleAuth) {
      var googleClientId ='1099049241800-cm901q07nc633n4p5he6fpjg7bhivc59.apps.googleusercontent.com';		//hardcoded
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
