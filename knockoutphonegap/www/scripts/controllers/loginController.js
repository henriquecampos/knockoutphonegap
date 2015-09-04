(function () {
    'use strict';
    angular.module("AngularAuthApp.controllers").controller('LoginController', LoginController);

    function LoginController(authService, $location, localStorage) {
        this.authService = authService;
        authService.usuarioLogado = null;

        this.location = $location;

        var autenticacao = localStorage.obterAutenticacao() || {};
        autenticacao.Senha = "";
        localStorage.salvarAutenticacao(autenticacao);

        this.autenticacao = autenticacao;
    }

    LoginController.prototype.entrar = function () {
        var _this = this;
        this.authService.entrar(this.autenticacao).then(function (response) {
            _this.location.path('/contratos');
        }, function (rejection) {
            alert(rejection.status);
        });
    };
})();