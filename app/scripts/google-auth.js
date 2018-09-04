/*globals gapi*/
'use strict';

angular.module('angular-google-auth', [])
  .factory('googleAuth', ['$rootScope', '$http', '$q', function ($rootScope) {

    var self ={
      init: function(params)  {

        if (document.domain === 'localhost') {
          self.login({getEmail: function(){return 'localhost@ft.com';}}, params);
        } else {
          var gapiScript = document.createElement('script');
          gapiScript.src = 'https://apis.google.com/js/client:platform.js?onload=cardKitAuth';
          document.body.appendChild(gapiScript);
          window.cardKitAuth = function renderButton(){
            gapi.signin2.render('my-signin2', {
              'width': 200,
              'height': 50,
              'longtitle': false,
              'theme': 'dark',
              'onsuccess': function(googleUser){self.login(googleUser.getBasicProfile(), params);}
            });
          };
        }
      },

      login: function(profile, params) {
        var regexp = /^.*\@(ft|nex\.nikkei)\.com$/gi;
        var email = profile.getEmail();
        if (email.match(regexp)) {
          if (email !== 'localhost@ft.com'){
            var trackingImage = document.createElement('img');
            trackingImage.src = 'http://track.ft.com/track/track.gif?cardkit_login=' + encodeURIComponent(email);
            document.body.appendChild(trackingImage);
          }
          $rootScope.$broadcast(params.evtName, profile);
        } else {
          //if the user has multiple google accounts then calling disconnect() ensures the user will be shown the login preferences box
          //when re-signing in (otherwise login will automatically login with their previous selection).
          gapi.auth2.getAuthInstance().disconnect();
          gapi.auth2.getAuthInstance().signOut();
        }

        //get back in angular world (since did Google calls, etc. - without this, nothing will happen!)
        if(!$rootScope.$$phase) {
          $rootScope.$apply();
        }
      }
    };

    return self;
  }]);
