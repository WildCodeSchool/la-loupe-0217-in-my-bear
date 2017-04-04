angular.module('app')
    .controller('CommentsController', function($scope, CurrentUser, UserService, BeerService, CommentService) {
      $scope.user = CurrentUser.user();
      $scope.comments = [];
      UserService.getOne($scope.user._id).then(function (res) {
        res.data.comments.forEach(function (beer) {
          BeerService.getById(beer.commentId).then(function (res) {
            $scope.comments.push(res.data[0]);
          });
        });
      });
      $scope.afficher();
      $scope.addComment = function (commentId) {
        UserService.addComment(CurrentUser.user()._id, beerId, commentId).then(function(res) {
          // cool
        });
      };
      $scope.afficher();
      $scope.delComment = function (commentId) {
        UserService.delComment(CurrentUser.user()._id, beerId, commentId).then(function(res) {
        });
      };
    });
