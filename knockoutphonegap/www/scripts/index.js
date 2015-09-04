(function () {
    'use strict';

    var milliseconds = 1000;
    angular.module('AngularAuthApp.services', []);
    angular.module('AngularAuthApp.controllers', []);
    angular.module('AngularAuthApp', ['ngRoute', 'AngularAuthApp.services', 'AngularAuthApp.controllers'])
        .value('apiUrl', 'http://localhost:8138/')
        .value('tempoRenovacaoLogin', milliseconds * 10)
        .config(function ($httpProvider) {
            $httpProvider.interceptors.push('authInterceptorService');
        })
        .config(function ($routeProvider) {

            $routeProvider.when("/home", {
                controller: "HomeController",
                templateUrl: '/views/home.html'
            });

            $routeProvider.when("/login", {
                controller: "LoginController as login",
                templateUrl: "/views/login.html"
            });

            $routeProvider.when("/contratos", {
                controller: "ContratosController as ctrl",
                templateUrl: "/views/contratos.html"
            });

            $routeProvider.otherwise({ redirectTo: "/home" });
        });
})();