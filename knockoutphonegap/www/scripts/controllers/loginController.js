(function () {
    'use strict';
    angular.module("AngularAuthApp.controllers").controller('LoginController', ['authService', '$location', 'localStorage', LoginController]);

    /**
     * Controller for the login.
     * 
     * @param {!angular.Service} storage
     * @constructor
     * @export
     */
    function LoginController(authService, $location, localStorage) {
        this.authService = authService;
        this.location = $location;
        this.localStorage = localStorage;
        this.autenticacao = {
            Email: localStorage.obterUsuario(),
            Senha: "123456"
        }
    }

    LoginController.prototype.entrar = function () {
        var _this = this;
        this.authService.entrar(this.autenticacao).then(function (response) {
            _this.localStorage.salvarUsuario(_this.autenticacao.Email);
            _this.location.path('/contratos');
        }, function (rejection) {
            alert(rejection.status);
        });
    };
})();