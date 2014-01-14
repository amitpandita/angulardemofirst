'use strict';

angular.module('angularTemplatesApp', ['ui',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).run(function($rootScope, Songs) {
  if (void 0 == Songs.data || void 0 == Songs.data.songs) {
    Songs.getSongs();
  }
  $rootScope.songs = Songs;
}).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/song', {
        templateUrl: 'views/songlist.html',
        controller: 'SongListCtrl'
      })
      .when('/random', {
        templateUrl: 'views/random.html',
        controller: 'RandomCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
