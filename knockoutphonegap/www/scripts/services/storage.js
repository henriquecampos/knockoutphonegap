(function () {
    'use strict';

    angular.module('AngularAuthApp.services').factory('storage', ['$injector', storage]);

    /**
     * Storage service to abstract specific implementations.
     *
     * @params {!angular.Service} $injector
     */
    function storage($injector) {
        return $injector.get('localStorage');
    }
})();