(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.view3', ['ngRoute'])
      .controller('View3Ctrl', View3Ctrl);


  View3Ctrl.$inject = ['$scope'];
  function View3Ctrl($scope) {

    var vm = this;

  }

})();