// File: app.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 7
// Due Date: 3/25/2025
// Author: Justin Loi - jloi2
(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
        .filter('dollarFilter', DollarFilter);

    // ToBuyController that retrieves toBuy items from ShoppingListCheckOffService and sets up buyItem function
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;
        toBuyCtrl.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyCtrl.buyItem = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        };
    }

    // AlreadyBoughtController that retrieves bought items from ShoppingListCheckOffService
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtCtrl = this;
        boughtCtrl.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var boughtItems = [];
        var toBuyItems = [
            { name: "cookies", quantity: 6, pricePerItem: 2.50 },
            { name: "eggs", quantity: 12, pricePerItem: 500 },
            { name: "bread", quantity: 1, pricePerItem: 3 },
            { name: "apples", quantity: 3, pricePerItem: 0.75 },
            { name: "cheese", quantity: 5, pricePerItem: 4 }
        ];

        // Moves selected item from toBuyItems list to boughtItems list
        service.buyItem = function(index) {
            var item = toBuyItems.splice(index, 1)[0];
            boughtItems.push(item);
        };

        // Get toBuyItems List
        service.getToBuyItems = function() {
            return toBuyItems;
        };

        // Get boughtItems List
        service.getBoughtItems = function() {
            return boughtItems;
        };
    }

    // Filter to add dollar signs and round input price to 2 decimal places
    function DollarFilter() {
        return function(input) {
            return '$$$' + parseFloat(input).toFixed(2);
        };
    }
})();
