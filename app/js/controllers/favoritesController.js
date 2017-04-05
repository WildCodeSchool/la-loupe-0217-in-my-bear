angular.module('app')
    .controller('FavoritesController', function($scope, CurrentUser, UserService, BeerService, CommentService) {
      $scope.user = CurrentUser.user();
      $scope.favourites = [];
      UserService.getOne($scope.user._id).then(function (res) {
        res.data.favourites.forEach(function (beer) {
          BeerService.getById(beer.beerId).then(function (res) {
            $scope.favourites.push(res.data[0]);
          });
        });
      });
      $scope.comments = [];
      $scope.getComments = function(beerId) {
        CommentService.getAllByBeerId(beerId).then(function(res) {
          $scope.comments = res.data;
        }, function(err) {
          console.error('err comments beer', err);
        });
      };
      $scope.delBeer = function (beerId) {
        UserService.delBeer($scope.user._id, beerId).then(function(res) {
        });
      };
      $scope.addComment = function (beerId, beerName, content) {
        var comment = {
          beerId: beerId,
          author: $scope.user._id,
          title: beerName,
          body: content
        };
        CommentService.addComment(comment).then(function(res) {
        });
      };
    });
