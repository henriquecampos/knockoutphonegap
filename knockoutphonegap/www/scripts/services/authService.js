(function () {
    'use strict';

    angular.module('AngularAuthApp.services').service('authService', ['$http', 'apiUrl', AuthService]);

    function AuthService($http, apiUrl) {
        this.http = $http;
        this.url = apiUrl;
    }

    AuthService.prototype.entrar = function (dados) {
        return this.http.post(this.url + 'Conta/Entrar', dados);
    };
})();