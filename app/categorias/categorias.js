(function () {
    'use strict';
    var scripts = document.getElementsByTagName("script");
    var currentScriptPath = scripts[scripts.length - 1].src;

    angular.module('myApp.categorias', ['ngRoute'])
        .controller('CategoriasCtrl', CategoriasCtrl);


    CategoriasCtrl.$inject = ['$scope'];
    function CategoriasCtrl($scope) {

        var vm = this;

    }

})();