(function () {
    'use strict';

    angular.module('AngularAuthApp.services').service('localStorage', ['$window', LocalStorage]);

    /**
     * Local storage service.
     * @param {angular.Service} $q
     * @param {angular.Service} $window
     * @param {angular.Service} guidGenerator
     * @constructor
     */
    function LocalStorage($window) {
        this.$window = $window;
    }

    /**
     * Key for storing todo items locally.
     * @type {string}
     * @const
     */
    //LocalStorage.prototype.LOCAL_STORAGE_KEY = 'toDoItems';

    /**
     * Load JSON data from the local storage.
     * @return {Object} Todo items.
     */
    LocalStorage.prototype.obterUsuario = function () {
        //return angular.fromJson(this.$window.localStorage.getItem(this.LOCAL_STORAGE_KEY)) || [];
        return this.$window.localStorage.getItem('usuario');
    };

    /**
     * Save JSON data in the local storage.
     * @params {Object} items Todo items.
     */
    LocalStorage.prototype.salvarUsuario = function (usuario) {
        //this.$window.localStorage.setItem(this.LOCAL_STORAGE_KEY, angular.toJson(items));
        this.$window.localStorage.setItem('usuario', usuario);
    };
})();