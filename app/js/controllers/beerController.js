
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
        // $scope.myInterval = 5000;
        // $scope.noWrapSlides = false;
        // $scope.active = 0;
        // var slides = $scope.slides = [];
        // var currIndex = 0;
        // $scope.addSlide = function() {
        //   var newWidth = 600 + slides.length + 1;
        //   slides.push({
        //     image: '//unsplash.it/' + newWidth + '/300',
        //     text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
        //     id: currIndex++
        //   });
        // };
      };
      $scope.afficher();
    });
