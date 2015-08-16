(function () {
    'use strict';

    angular.module('AngularAuthApp.services').service('authService', AuthService);

    function AuthService(apiUrl) {
        this.url = apiUrl;
    }
})();