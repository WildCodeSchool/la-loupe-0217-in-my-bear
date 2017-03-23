
angular.module('app')
    .controller('BeerController', function($scope, randomService) {
      $scope.afficher = function() {
        randomService.getAll().then(function(res) {
          $scope.beer = res.data;
        });
        randomService.getAll().then(function(res) {
          $scope.beer1 = res.data;
        });
        randomService.getAll().then(function(res) {
          $scope.beer2 = res.data;
        });
      };
      $scope.afficher();
    });
