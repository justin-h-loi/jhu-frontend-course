// File: menu.service.spec.js
// Course: EN.605.787.SP25 - Front End Web App Development
// Assignment: Module 10
// Due Date: 5/6/2025
// Author: Justin Loi - jloi2
describe('SignUpController', function () {
    var $http, $controller, $httpBackend, UserService, SignUpController, API_URL;

    beforeEach(module('public'));

    // Initializes the variables
    beforeEach(inject(function (_$http_, _$httpBackend_, _$controller_, _UserService_) {
        $controller = _$controller_;
        $http = _$http_;
        $httpBackend = _$httpBackend_;
        UserService = _UserService_;

        SignUpController = $controller('SignUpController', {
            $http: $http,
            UserService: UserService
        });

        API_URL = 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items';
    }));

    it('menu item is valid if it exists', function () {
        SignUpController.user.favorite = 'A1'; // valid item example

        // mock data
        var responseData = {
            "description":"chicken broth with egg drop",
            "large_portion_name":"quart",
            "name":"Egg Drop Soup",
            "price_large":4.5,
            "price_small":2.25,
            "short_name":"A2",
            "small_portion_name":"pint"
        };

        // Mocking the API call/response
        $httpBackend.expectGET(`${API_URL}/A/menu_items/1.json`).respond(200, responseData); 

        // Check if the menu item from the call was set to valid or not
        SignUpController.validateMenuItem();
        $httpBackend.flush();

        // Should be valid
        expect(SignUpController.menuValid).toBe(true); 
    });

    it('menu item is invalid does NOT exist', function () {
        SignUpController.user.favorite = 'Z999'; // invalid item example

        // Mocking the API get and a null response
        $httpBackend.expectGET(`${API_URL}/Z/menu_items/999.json`).respond(200, null);

        // Check if the menu item from the call was set to valid or not
        SignUpController.validateMenuItem();
        $httpBackend.flush();

        // Should be invalid
        expect(SignUpController.menuValid).toBe(false);
    });
});