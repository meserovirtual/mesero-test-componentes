(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.controles', ['ngRoute'])
      .controller('ControlesCtrl', ControlesCtrl);


  ControlesCtrl.$inject = ['$scope', 'UploadVars', 'UploadService', 'SucursalesVars', 'SucursalesService', 'AcUtils'];
  function ControlesCtrl($scope, UploadVars, UploadService, SucursalesVars, SucursalesService, AcUtils) {

    var vm = this;
    vm.sucursales = [];
    vm.item1, vm.item2, vm.item3 = false;

    //FUNCIONES
    vm.showMessage = showMessage;

    console.log(vm.item);
    console.log(vm.item2);

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
      } else if(type == 'error') {
        AcUtils.showMessage('error', 'Mensajes de error');
      } else if(type == 'info') {
        AcUtils.showMessage('info', 'Mensajes de información');
      } else if(type == 'warning') {
        AcUtils.showMessage('warning', 'Mensajes de precaución');
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