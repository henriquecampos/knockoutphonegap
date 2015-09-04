(function () {
    'use strict';
    angular.module("AngularAuthApp.services").factory('authInterceptorService', authInterceptorService);

    function authInterceptorService($q, $location, $injector) {
        return {
            request: function (config) {
                var authService = $injector.get('authService');
                if (authService.usuarioLogado && authService.deveRenovar()) {
                    var deferred = $q.defer();

                    authService.renovar().then(function () {
                        deferred.resolve(config);
                    }, function (rejection) {
                        deferred.reject(rejection);
                    })

                    return deferred.promise;
                }

                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        };
    }
})()