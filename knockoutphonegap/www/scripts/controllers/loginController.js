(function () {
    'use strict';
    angular.module("AngularAuthApp.controllers").controller('LoginController', ['authService', '$location', LoginController]);

    /**
     * Controller for the login.
     * 
     * @param {!angular.Service} storage
     * @constructor
     * @export
     */
    function LoginController(authService, $location) {
        this.authService = authService;
        this.location = $location;
        this.dados = {
            Email: "admin@admin.com",
            Senha: "123456"
        }
    }

    LoginController.prototype.entrar = function () {
        var _this = this;
        this.authService.entrar(this.dados).then(function (response) {
            _this.location.path('/contratos');
        }, function (rejection) {
            alert(rejection.status);
        });
    };
})();