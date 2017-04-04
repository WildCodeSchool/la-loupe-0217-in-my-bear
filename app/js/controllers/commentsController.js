angular.module('app')
    .controller('CommentsController', function($scope, CurrentUser, UserService, BeerService, CommentService) {
      $scope.user = CurrentUser.user();
      $scope.favourites = [];
      UserService.getOne($scope.user._id).then(function (res) {
        res.data.favourites.forEach(function (beer) {
          BeerService.getById(beer.beerId).then(function (res) {
            $scope.favourites.push(res.data[0]);
          });
        });
      });
      $scope.delComment = function (beerId) {
        UserService.delComment($scope.user._id, beerId).then(function(res) {
        });
      };
    });
