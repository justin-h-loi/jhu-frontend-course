// File: routes.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 9
// Due Date: 4/22/2025
// Author: Justin Loi - jloi2
(function () {
    'use strict';
  
    angular.module('MenuApp')
      .config(RoutesConfig);
  
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
  
      // Home state
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.template.html'
        })
  
        // Categories state
        .state('categories', {
          url: '/categories',
          templateUrl: 'categories.template.html',
          controller: 'CategoriesController as catCtrl',
          resolve: {
            items: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
            }]
          }
        })
  
        // Items state
        .state('items', {
          url: '/items/{categoryShortName}',
          templateUrl: 'items.template.html',
          controller: 'ItemsController as itemsCtrl',
          resolve: {
            items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
              }]
          }
        });
    }
  })();