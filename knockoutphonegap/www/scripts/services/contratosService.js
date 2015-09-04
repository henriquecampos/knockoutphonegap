(function () {
    'use strict';

    angular.module('AngularAuthApp.services').service('contratosService', ContratosService);

    function ContratosService($http, apiUrl) {
        this.http = $http;
        this.url = apiUrl;
    }

    ContratosService.prototype.obterContratos = function () {
        return this.http.get(this.url + 'Contratos');
    };
})();