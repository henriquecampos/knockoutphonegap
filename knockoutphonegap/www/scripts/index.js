(function () {
    'use strict';

    angular.module('AngularAuthApp.services', []);
    angular.module('AngularAuthApp.controllers', []);
    angular.module('AngularAuthApp', ['ngRoute', 'AngularAuthApp.services', 'AngularAuthApp.controllers'])
        .value('apiUrl', 'http://localhost:8138/')
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('authInterceptorService');
        })
        .config(function ($routeProvider) {
            $routeProvider.when("/login", {
                controller: "LoginController as login",
                templateUrl: "/views/login.html"
            });

            $routeProvider.when("/contratos", {
                controller: "ContratosController as ctrl",
                templateUrl: "/views/contratos.html"
            });

            //TODO Redirecionr dinamicamente para /contratos se o usuário estiver logado, ou /login caso contrário
            $routeProvider.otherwise({ redirectTo: "/contratos" });
        });
})();