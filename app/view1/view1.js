(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.view1', ['ngRoute'])
      .controller('View1Ctrl', View1Ctrl);


  View1Ctrl.$inject = ['$scope', 'UploadVars', 'UploadService', 'SucursalesVars', 'SucursalesService', 'AcUtils'];
  function View1Ctrl($scope, UploadVars, UploadService, SucursalesVars, SucursalesService, AcUtils) {

    var vm = this;
    vm.sucursales = [];

    //FUNCIONES
    vm.showMessage = showMessage;

    SucursalesService.get().then(function (data) {
      setData(data);
      console.log(data);
    });

    function setData(data) {
      vm.sucursales = data;
    }

    function showMessage(type) {
      if(type == 'success') {
        AcUtils.showMessage('success', 'Mensajes de operación exitosa');
      } else {
        AcUtils.showMessage('error', 'Mensajes de error');
      }
    }



    // Implementación de la paginación
    vm.start = 0;
    vm.limit = SucursalesVars.paginacion;
    vm.pagina = SucursalesVars.pagina;
    vm.paginas = SucursalesVars.paginas;

    function paginar(vars) {
      if (vars == {}) {
        return;
      }
      vm.start = vars.start;
      vm.pagina = vars.pagina;
    }

    vm.next = function () {
      paginar(AcUtils.next(SucursalesVars));
    };
    vm.prev = function () {
      paginar(AcUtils.prev(SucursalesVars));
    };
    vm.first = function () {
      paginar(AcUtils.first(SucursalesVars));
    };
    vm.last = function () {
      paginar(AcUtils.last(SucursalesVars));
    };

    vm.goToPagina = function () {
      paginar(AcUtils.goToPagina(vm.pagina, SucursalesVars));
    }
    
  }

})();