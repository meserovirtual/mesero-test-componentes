(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.view2', ['ngRoute'])
      .controller('View2Ctrl', View2Ctrl);


  View2Ctrl.$inject = ['$scope'];
  function View2Ctrl($scope) {

    var vm = this;

  }

})();