// File: my-info.controller.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 10
// Due Date: 5/6/2025
// Author: Justin Loi - jloi2
(function () {
    'use strict';
    
    angular.module('public')
      .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['UserService'];
    function MyInfoController(UserService) {
      var myInfoCtrl = this;
      myInfoCtrl.user = UserService.getUser();
      myInfoCtrl.favoriteItem = UserService.getFavoriteItem();
    }
})();    