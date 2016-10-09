(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.view7', ['ngRoute'])
        .controller('View7Ctrl', View7Ctrl);


    View7Ctrl.$inject = ['$scope'];
    function View7Ctrl($scope) {

        var vm = this;

    }

})();