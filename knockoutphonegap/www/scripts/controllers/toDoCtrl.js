(function () {
    'use strict';

    angular.module("xPlat.controllers").controller('ToDoCtrl', ['storage', ToDoCtrl]);

    /**
     * Controller for the todo list.
     * 
     * @param {!angular.Service} storage
     * @constructor
     * @export
     */
    function ToDoCtrl(storage) {
        this.storage = storage;
        this.todos = storage.getAll();
    }

    /**
     * Add a todo item to the list.
     */
    ToDoCtrl.prototype.addToDo = function () {
        var _this = this;

        var text = this.newToDoText;
        if (!text) {
            return;
        };

        this.newToDoText = '';
        this.storage.create(text)
            .then(function (todo) {
                _this.todos.push(todo);
                return todo;
            });
    };

    /**
     * Update the text of a todo item.
     */
    ToDoCtrl.prototype.changeToDoText = function (toDoItem) {
        this.storage.update(toDoItem);
    };

    /**
     * Check/uncheck a todo item.
     */
    ToDoCtrl.prototype.toggleToDoDone = function (toDoItem) {
        toDoItem.done = !toDoItem.done;
        this.storage.update(toDoItem);
    };

    /**
     * Remove a todo item from the list.
     */
    ToDoCtrl.prototype.removeToDo = function (toDoItem) {
        var _this = this;
        this.storage.del(toDoItem).then(function (todo) {
            var index = _this.todos.indexOf(todo);
            _this.todos.splice(index, 1);
        });
    };
})();