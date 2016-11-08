(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.proveedores', ['ngRoute'])
      .controller('ProveedoresCtrl', ProveedoresCtrl);


  ProveedoresCtrl.$inject = ['$scope'];
  function ProveedoresCtrl($scope) {

    var vm = this;

  }

})();