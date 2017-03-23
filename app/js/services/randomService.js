angular.module('app')
    .service('randomService', function($http) {
            return {
                getAll: function() {
                    return $http.get('https://api.punkapi.com/v2/beers/random');
                }
            };
        });
