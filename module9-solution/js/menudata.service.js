// File: menudata.service.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 9
// Due Date: 4/22/2025
// Author: Justin Loi - jloi2
(function () {
    'use strict';
  
    angular.module('data')
      .service('MenuDataService', MenuDataService);
  
    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
      var service = this;
  
      // Returns promise of all categories
      service.getAllCategories = function () {
        return $http.get('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json');
      };
  
      // Returns promise of all items for a given category
      service.getItemsForCategory = function (categoryShortName) {
        return $http.get(
          'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' +
          categoryShortName +
          '.json'
        );
      };
    }
  })();