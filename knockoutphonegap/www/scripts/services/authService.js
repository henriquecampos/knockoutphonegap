(function () {
    'use strict';

    angular.module('AngularAuthApp.services').service('authService', AuthService);

    function AuthService($http, localStorage, apiUrl, tempoRenovacaoLogin) {
        this.http = $http;
        this.localStorage = localStorage;
        this.url = apiUrl;
        this.tempoRenovacaoLogin = tempoRenovacaoLogin;

        var autenticacao = localStorage.obterAutenticacao() || {};
        this.usuarioLogado = autenticacao.Email;
    }

    AuthService.prototype.entrar = function (autenticacao) {
        var _this = this;
        return this.http.post(this.url + 'Conta/Entrar', autenticacao).then(function () {
            _this.usuarioLogado = autenticacao.Email;
            _this.localStorage.salvarAutenticacao(autenticacao);
            _this.localStorage.salvarDataUltimoLogin();
        });
    };

    AuthService.prototype.deveRenovar = function () {
        var dtUltimoLogin = this.localStorage.obterDataUltimoLogin();
        var tempoUltimoLogin = Math.abs(dtUltimoLogin - new Date());
        return tempoUltimoLogin > this.tempoRenovacaoLogin;
    };

    AuthService.prototype.renovar = function () {
        return this.entrar(this.localStorage.obterAutenticacao());
    };
})();