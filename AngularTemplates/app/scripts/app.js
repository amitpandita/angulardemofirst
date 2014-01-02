'use strict';

angular.module('angularTemplatesApp', ['ui',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .run(function($rootScope){
    
})
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
