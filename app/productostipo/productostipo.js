(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.productosTipo', ['ngRoute'])
        .controller('ProductosTipoCtrl', ProductosTipoCtrl);


    ProductosTipoCtrl.$inject = ['$scope'];
    function ProductosTipoCtrl($scope) {

        var vm = this;

    }

})();