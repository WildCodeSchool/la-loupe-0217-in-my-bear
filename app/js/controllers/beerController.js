
angular.module('app')
    .controller('BeerController', function($scope, BeerService, UserService, CurrentUser) {
      $scope.afficher = function() {
        $scope.beers = [];

        for (var i = 0; i < 3; i++) {
          BeerService.random().then(function(res) {
            $scope.beers.push(res.data[0]);
          });
        }
      };
      $scope.afficher();
      $scope.addBeer = function (beerId) {
        UserService.addBeer(CurrentUser.user()._id, beerId).then(function(res) {
        });
      };
      $scope.afficher();
      $scope.delBeer = function (beerId) {
        UserService.delBeer(CurrentUser.user()._id, beerId).then(function(res) {
        });
      };
    });
