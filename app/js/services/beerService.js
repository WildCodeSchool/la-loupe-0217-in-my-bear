angular.module('app')
    .service('BeerService', function($http) {
            return {
                random: function() {
                    return $http.get('https://api.punkapi.com/v2/beers/random');
                },
                getById: function (beerId) {
                  return $http.get('https://api.punkapi.com/v2/beers/' + beerId);
                }
            };
        });
