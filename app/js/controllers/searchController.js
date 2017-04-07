angular.module('app')
    .controller('SearchController', function($scope, $http, Auth, CurrentUser, UserService, BeerService,  CommentService) {
      $scope.auth = Auth;
      $scope.query = '';
      $scope.showResult = false;
      $scope.noResult = false;
      $scope.searchBeer = function () {
        $http.get("https://api.punkapi.com/v2/beers?beer_name="+ $scope.query).then(
          function (res) {
            if(res.data.length > 0 ) {
              $scope.showResult = true;
              $scope.noResult = false;
            } else {
              $scope.showResult = false;
              $scope.noResult = true;
            }
            console.log();
            $scope.beer = res.data;
            getComments(res.data[0].id);
          }, function error (err) {
          });
      };
      $scope.addBeer = function (beerId) {
          UserService.addBeer(CurrentUser.user()._id, beerId).then(function(res) {
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
