(function () {
    'use strict';

    angular.module('AngularAuthApp.services').service('localStorage', LocalStorage);

    function LocalStorage($window) {
        this.$window = $window;
    }

    LocalStorage.prototype.limpar = function () {
        this.$window.localStorage.clear();
    };

    LocalStorage.prototype.AUTENTICACAO_KEY = "autenticacao";

    LocalStorage.prototype.obterAutenticacao = function () {
        return angular.fromJson(this.$window.localStorage.getItem(this.AUTENTICACAO_KEY));
    };

    LocalStorage.prototype.salvarAutenticacao = function (autenticacao) {
        this.$window.localStorage.setItem(this.AUTENTICACAO_KEY, angular.toJson(autenticacao));
    };

    LocalStorage.prototype.salvarDataUltimoLogin = function () {
        this.$window.localStorage.dataUltimoLogin = new Date();
    };

    LocalStorage.prototype.obterDataUltimoLogin = function () {
        return new Date(this.$window.localStorage.dataUltimoLogin)
    };
})();