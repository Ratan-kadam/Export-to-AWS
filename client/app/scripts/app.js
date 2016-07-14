'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })

      .when('/example', {
        templateUrl: 'views/about.html',
        controller: 'example'
      })

      .when('/signup', {
        templateUrl: 'views/signUp.html',
        controller: 'signupCtrl'
    })
      .when('/validate', {
        templateUrl: 'views/validate.html',
        controller: 'validateCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
