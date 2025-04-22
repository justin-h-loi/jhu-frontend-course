// File: user.service.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 10
// Due Date: 5/6/2025
// Author: Justin Loi - jloi2
(function () {
    'use strict';
    
    angular.module('public')
      .service('UserService', UserService);
    
    function UserService() {
      var service = this;
      var user = null;
      var favoriteItem = null;
    
      service.saveUser = function (userInfo, favItem) {
        user = angular.copy(userInfo);
        favoriteItem = angular.copy(favItem);
      };
    
      service.getUser = function () {
        return user;
      };
    
      service.getFavoriteItem = function () {
        return favoriteItem;
      };
    }
})();