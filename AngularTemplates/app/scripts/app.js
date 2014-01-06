'use strict';

angular.module('angularTemplatesApp', ['ui',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
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
      .otherwise({
        redirectTo: '/'
      });
  });
