(function () {
  'use strict';

// Declare app level module which depends on views, and components
  angular.module('mesero', ['oc.lazyLoad',
      'ngRoute',
      //'ngAnimate',
      'angular-jwt',
      'auth0',
      'acUtils',
      'acSucursales',
      'acAutocomplete',
      'acUsuarios',
      'acUsuariosAdministracion',
      'LangTables',
  ]).config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/view1'});

        $routeProvider.when('/view1', {
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl',
          //data: {requiresLogin: false},
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
              // you can lazy load files for an existing module
              return $ocLazyLoad.load('view1/view1.js');
            }]
          }
        });

        $routeProvider.when('/view2', {
          templateUrl: 'view2/view2.html',
          controller: 'View2Ctrl',
          //data: {requiresLogin: false},
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
              // you can lazy load files for an existing module
              return $ocLazyLoad.load('view2/view2.js');
            }]
          }
        });

        $routeProvider.when('/view3', {
          templateUrl: 'view3/view3.html',
          controller: 'View3Ctrl',
          //data: {requiresLogin: false},
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
              // you can lazy load files for an existing module
              return $ocLazyLoad.load('view3/view3.js');
            }]
          }
        });

        $routeProvider.when('/view4', {
          templateUrl: 'view4/view4.html',
          controller: 'View4Ctrl',
          //data: {requiresLogin: false},
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
              // you can lazy load files for an existing module
              return $ocLazyLoad.load('view4/view4.js');
            }]
          }
        });

        $routeProvider.when('/view5', {
          templateUrl: 'view5/view5.html',
          controller: 'View5Ctrl',
          //data: {requiresLogin: false},
          resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
            loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
              // you can lazy load files for an existing module
              return $ocLazyLoad.load('view5/view5.js');
            }]
          }
        });
      }]).controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$scope'];
    function AppCtrl($scope) {

        var vm = this;
        vm.hideLoader = true;

    }

})();
