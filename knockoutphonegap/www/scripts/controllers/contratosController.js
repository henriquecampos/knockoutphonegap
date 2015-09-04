(function () {
    'use strict';
    angular.module("AngularAuthApp.controllers").controller('ContratosController', ContratosController);

    function ContratosController(contratosService) {
        this.contratosService = contratosService;
        this.obterContratos();
    }

    ContratosController.prototype.obterContratos = function () {
        var _this = this;
        this.contratosService.obterContratos().then(function (response) {
            _this.contratos = response.data;
        });
    };

    ContratosController.prototype.atualizar = function () {
        this.contratos = undefined;
        this.obterContratos();
    }
})();