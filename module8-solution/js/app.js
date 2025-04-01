// File: app.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 8
// Due Date: 4/8/2025
// Author: Justin Loi - jloi2
(function() {
    'use strict';
    
    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com")
        .directive('foundItems', FoundItemsDirective);
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;
        controller.searchTerm = "";
        controller.found = [];
        controller.nothingFound = false;
        
        controller.narrowItDown = function() {
            if (!controller.searchTerm) {
                controller.found = [];
                controller.nothingFound = true;
                return;
            }
            
            MenuSearchService.getMatchedMenuItems(controller.searchTerm).then(function(foundItems) {
                controller.found = foundItems;
                controller.nothingFound = foundItems.length === 0;
            });
        };
        
        controller.removeItem = function(index) {
            controller.found.splice(index, 1);
        };
    }
    
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(result) {
                // process result and only keep items that match
                var allItems = [];
                Object.keys(result.data).forEach(function(categoryKey) {
                    if (result.data[categoryKey].menu_items) {
                        allItems = allItems.concat(result.data[categoryKey].menu_items);
                    }
                });
                var foundItems = allItems.filter(function(item) {
                    return item.description.toLowerCase().includes(searchTerm.toLowerCase());
                });
        
                // return processed items
                return foundItems;
            }).catch(function(error) {
                console.error("HTTP Request Failed:", error);
                return [];
            });
        };
    }
    
    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundItems.html',
            scope: {
                items: '<',
                onRemove: '&'
            }
        };
        return ddo;
    }
})();
