(function () {
    'use strict';
    angular.module("AngularAuthApp.controllers").controller('HomeController', HomeController);

    function HomeController($location, localStorage) {
        var auth = localStorage.obterAutenticacao();
        if (auth) {
            $location.path('/contratos');
        }
        else {
            $location.path('/login');
        }
    }
})();