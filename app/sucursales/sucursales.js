(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.sucursales', ['ngRoute'])
        .controller('SucursalesCtrl', SucursalesCtrl);


    SucursalesCtrl.$inject = ['$scope'];
    function SucursalesCtrl($scope) {

        var vm = this;

    }

})();