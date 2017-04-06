angular.module('app')
    .controller('SearchController', function($scope, $http, CurrentUser, UserService, BeerService,  CommentService) {
      $scope.query = '';
      $scope.addBeer = function () {
        $http.get("https://api.punkapi.com/v2/beers?beer_name="+ $scope.query).then(
          function (res) {
            $scope.beer = res.data;
            getComments(res.data[0].id);
          }, function error (err) {
          });
      };
      $scope.comments = [];
      var getComments = function(beerId) {
        CommentService.getAllByBeerId(beerId).then(function(res) {
          $scope.comments = res.data;
        }, function(err) {
          console.error('err comments beer', err);
        });
      };
      $scope.expanded = false;

      $scope.expand_collapse = function()
      {
          $scope.expanded = !$scope.expanded;
      };
    });
