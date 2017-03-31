
angular.module('app')
    .controller('BeerController', function($scope, randomService, UserService, CurrentUser) {
      console.log(CurrentUser.user()._id);
      $scope.afficher = function() {
        $scope.beers = [];

        for (let i = 0; i < 3; i++) {
          randomService.getAll().then(function(res) {
            $scope.beers.push(res.data[0]);
            console.log($scope.beers);
          });
        }
      };
      $scope.afficher();
      $scope.addBeer = function () {
        UserService.addBeer(CurrentUser.user()._id, $scope.beers).then(function(res) {
          // cool
        });
      };
    });
