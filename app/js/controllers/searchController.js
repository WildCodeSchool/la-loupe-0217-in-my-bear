angular.module('app')
    .controller('SearchController', function($scope, $http) {
      $scope.query = '';
      $scope.addBeer = function () {
        $http.get("https://api.punkapi.com/v2/beers?beer_name="+ $scope.query).then(
          function (res) {
            $scope.beer = res.data;
          }, function error (err) {
            console.log(err);
          });
      };
    });
