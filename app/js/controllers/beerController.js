
angular.module('app')
    .controller('BeerController', function($scope, BeerService, UserService, CurrentUser) {
      console.log(CurrentUser.user()._id);
      $scope.afficher = function() {
        $scope.beers = [];

        for (let i = 0; i < 3; i++) {
          BeerService.random().then(function(res) {
            $scope.beers.push(res.data[0]);
            console.log($scope.beers);
          });
        }
      };
      $scope.afficher();
      $scope.addBeer = function (beerId) {
        UserService.addBeer(CurrentUser.user()._id, beerId).then(function(res) {
          // cool
        });
      };
    });
