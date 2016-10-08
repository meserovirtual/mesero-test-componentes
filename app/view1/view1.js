(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.view1', ['ngRoute'])
      .controller('View1Ctrl', View1Ctrl);


  View1Ctrl.$inject = ['$scope', 'UploadVars', 'UploadService'];
  function View1Ctrl($scope, UploadVars, UploadService) {

    var vm = this;

  }

})();