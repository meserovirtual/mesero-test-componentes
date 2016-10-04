(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.view6', ['ngRoute'])
        .controller('View6Ctrl', View6Ctrl);


    View6Ctrl.$inject = ['$scope'];
    function View6Ctrl($scope) {

        var vm = this;

    }

})();