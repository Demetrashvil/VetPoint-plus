var app = angular.module('vetPointApp', []);

app.factory('AuthService', function() {
    var authData = {
        isLoggedIn: false
    };

    return {
        getAuthData: function() {
            return authData;
        },

        login: function() {
            authData.isLoggedIn = true;
        },

        logout: function() {
            authData.isLoggedIn = false;
        }
    };
});

app.controller('HeaderController', ['$scope', 'AuthService', function($scope, AuthService) {
    $scope.auth = AuthService.getAuthData();

    $scope.login = function() {
        AuthService.login();
    };

    $scope.logout = function() {
        AuthService.logout();
    };
}]);