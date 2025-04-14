// File: categories.controller.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 9
// Due Date: 4/22/2025
// Author: Justin Loi - jloi2
(function () {
    'use strict';

    angular.module('MenuApp')
      .controller('CategoriesController', CategoriesController);

    // Exposes retrieved categories object from routes.js for the categories component.
    CategoriesController.$inject = ['items'];
    function CategoriesController(items) {
      var catCtrl = this;
      catCtrl.categories = items.data;
    }
})();