angular.module('app')
    .controller('ProfileController', function($scope, CurrentUser, UserService, BeerService) {
      $scope.user = CurrentUser.user();
    });
