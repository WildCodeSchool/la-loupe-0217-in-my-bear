angular.module('app')
    .controller('FavoritesController', function($scope, CurrentUser, UserService, BeerService) {
      $scope.user = CurrentUser.user();
      $scope.favourites = [];
      UserService.getOne($scope.user._id).then(function (res) {
        console.log(res);
        res.data.favourites.forEach(function (beer) {
          BeerService.getById(beer.beerId).then(function (res) {
            $scope.favourites.push(res.data[0]);
            console.log($scope.favourites);
          })
        })
      })
    });
