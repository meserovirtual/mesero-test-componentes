(function () {
  'use strict';

  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.clientes', ['ngRoute'])
      .controller('ClienteCtrl', ClienteCtrl);


  ClienteCtrl.$inject = ['$scope'];
  function ClienteCtrl($scope) {

    var vm = this;

  }

})();