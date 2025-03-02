// File: script.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 6
// Due Date: 3/4/2025
// Author: Justin Loi - jloi2
(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

        LunchCheckController.$inject = ['$scope'];
        function LunchCheckController($scope) {
            $scope.lunchItems = '';
            $scope.message = '';
            $scope.textBoxBorderColor = '';
            $scope.fontColor = '';

            $scope.checkLunchItems = function () {
                // Split string by commas, then traverses each item and only returns items not empty after trimming
                var lunchItems = $scope.lunchItems.split(',').filter(function (item) {
                    return item.trim().length > 0; 
                });

                if (lunchItems.length === 0) {
                    $scope.message = 'Please enter data first';
                    $scope.textBoxBorderColor = {"border-color":"red"};
                    $scope.fontColor = {"color":"red"};
                } else if (lunchItems.length <= 3) {
                    $scope.message = 'Enjoy!';
                    $scope.textBoxBorderColor = {"border-color":"green"};
                    $scope.fontColor = {"color":"green"};
                } else { // >3 items
                    $scope.message = 'Too much!';
                    $scope.textBoxBorderColor = {"border-color":"green"};
                    $scope.fontColor = {"color":"green"};
                }
            };
        }
})();