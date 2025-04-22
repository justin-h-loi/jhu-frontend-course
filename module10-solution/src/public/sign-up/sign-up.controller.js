// File: sign-up-.controller.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 10
// Due Date: 5/6/2025
// Author: Justin Loi - jloi2
(function () {
    'use strict';
    
    angular.module('public')
      .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['$http', 'UserService'];
    function SignUpController($http, UserService) {
      var signUpCtrl = this;
    
      signUpCtrl.user = {};
      signUpCtrl.menuValid = false;
      signUpCtrl.saved = false;
    
      // Function to check if the user's input favorite item is valid
      signUpCtrl.validateMenuItem = function () {
        if (!signUpCtrl.user.favorite) {
          return;
        } 

        // Filters the short name for just the category
        var shortName = signUpCtrl.user.favorite.toUpperCase();
        var category = shortName.match(/[A-Za-z]+/g);
        var index = shortName.match(/\d+/g);
        if (!category || !index) {
          signUpCtrl.menuValid = false;
          return;
        }

        // Makes API call to check if the menu item exists
        var url = `https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/${category[0]}/menu_items/${index[0]}.json`;
        $http.get(url).then(function (response) {
          if (response.data === null) {
            signUpCtrl.menuValid = false;
            return;
          }
          signUpCtrl.favoriteItem = response.data;
          signUpCtrl.favoriteItem.category_short_name = category[0];
          signUpCtrl.menuValid = true;
        }).catch(() => {
          signUpCtrl.menuValid = false;
        });
      };
    
      // Function for when sign-up.html form is submitted
      signUpCtrl.submit = function () {
        if (signUpCtrl.menuValid) {
          UserService.saveUser(signUpCtrl.user, signUpCtrl.favoriteItem);
          signUpCtrl.saved = true;
        }
      };
    }
})();