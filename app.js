'use strict';
angular.module('vendorApp', ['ngCookies']).config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $routeProvider.
        when('/', {
          templateUrl: '/views/main.html',
          controller: 'MainCtrl'
        })    
    }
]);
