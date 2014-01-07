'use strict';

angular.module('angularTemplatesApp', ['ui',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'audioPlayer-directive'
])
  .run(function(){
    
})
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/song', {
        templateUrl: 'views/songlist.html',
        controller: 'MainCtrl'
      })
      .when('/random', {
        templateUrl: 'views/random.html',
        controller: 'RandomCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
