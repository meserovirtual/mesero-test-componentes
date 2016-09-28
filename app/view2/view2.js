(function () {
  'use strict';

  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.view2', ['ngRoute'])
      .controller('View2Ctrl', View2Ctrl);


  View2Ctrl.$inject = ['$scope', 'UserVars', 'UserService', 'AcUtils'];
  function View2Ctrl($scope, UserVars, UserService, AcUtils) {

    var vm = this;

    vm.usuarios = [];
    vm.usuario = {};
    vm.soloActivos = false;


    vm.setData = setData;
    vm.loadUsuarios = loadUsuarios;

    function loadUsuarios() {
      console.log(vm.soloActivos);
      if(!vm.soloActivos){
        UserVars.all = false;
        UserService.get().then(function (data) {
          setData(data);
        });
      } else {
        UserVars.all = true;
        UserService.get().then(function (data) {
          setData(data);
        });
      }
    }

    function setData(data) {
      vm.usuarios = data;
      vm.paginas = UserVars.paginas;
      console.log(vm.usuarios);
    }

    UserService.get().then(function (data) {
      setData(data);
    });


    // Implementación de la paginación
    vm.start = 0;
    vm.limit = UserVars.paginacion;
    vm.pagina = UserVars.pagina;
    vm.paginas = UserVars.paginas;

    function paginar(vars) {
      if (vars == {}) {
        return;
      }
      vm.start = vars.start;
      vm.pagina = vars.pagina;
    }

    vm.next = function () {
      paginar(AcUtils.next(UserVars));
    };
    vm.prev = function () {
      paginar(AcUtils.prev(UserVars));
    };
    vm.first = function () {
      paginar(AcUtils.first(UserVars));
    };
    vm.last = function () {
      paginar(AcUtils.last(UserVars));
    };

    vm.goToPagina = function () {
      paginar(AcUtils.goToPagina(vm.pagina, UserVars));
    }

  }

})();