(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.usuarios', ['ngRoute'])
      .controller('UsuariosCtrl', UsuariosCtrl);


  UsuariosCtrl.$inject = ['$scope'];
  function UsuariosCtrl($scope) {

    var vm = this;

  }

})();