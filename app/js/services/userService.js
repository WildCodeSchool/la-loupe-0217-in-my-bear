angular.module('app')
    .service('UserService', function($http) {
        return {
            getAll: function() {
                return $http.get('/users');
            },
            getOne: function(id) {
                return $http.get('/users/' + id);
            },
            update: function(id, user) {
                return $http.put('/users/' + id, user);
            },
            delete: function(id) {
                return $http.delete('/users/' + id);
            },
            addBeer: function(id, beerId) {
                return $http.put('/users/newbeer/' + id, {beer: beerId});
            },
            delBeer: function(id, beerId) {
                return $http.put('/users/delbeer', {user: id, beer: beerId});
            },

        };
    });
