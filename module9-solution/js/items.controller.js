// File: items.controller.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 9
// Due Date: 4/22/2025
// Author: Justin Loi - jloi2
(function () {
    'use strict';

    angular.module('MenuApp')
      .controller('ItemsController', ItemsController)

    // Exposes retrieved items object from routes.js for the items component.
    ItemsController.$inject = ['items'];
    function ItemsController(items) {
      var ctrl = this;
      ctrl.items = items.data.menu_items;
    }
})();