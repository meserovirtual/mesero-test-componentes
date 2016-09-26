(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.view5', ['ngRoute'])
      .controller('View5Ctrl', View5Ctrl);


  View5Ctrl.$inject = ['$scope'];
  function View5Ctrl($scope) {

    var vm = this;

  }

})();