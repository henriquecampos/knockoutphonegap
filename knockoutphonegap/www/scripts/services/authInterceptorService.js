(function () {
    'use strict';
    angular.module("AngularAuthApp.services").factory('authInterceptorService', ['$q', '$location', authInterceptorService]);

    function authInterceptorService($q, $location) {
        return {
            responseError: function (rejection) {
                if (rejection.status === 401) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        };
    }
})()