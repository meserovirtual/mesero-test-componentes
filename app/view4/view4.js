(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.view4', ['ngRoute'])
      .controller('View4Ctrl', View4Ctrl);


  View4Ctrl.$inject = ['$scope'];
  function View4Ctrl($scope) {

    var vm = this;

  }

})();