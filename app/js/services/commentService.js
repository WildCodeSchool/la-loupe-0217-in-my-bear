angular.module('app')
    .service('CommentService', function($http) {
        return {
            getAll: function() {
                return $http.get('/comments');
            },
            addComment: function(id, commentId) {
                return $http.put('/comments/addcomment/' + id, {beer: beerId, comment: commentId});
            },
            delComment: function(id, commentId) {
                return $http.put('/comments/delcomment', {user: id, beer: beerId, comment: commentId});
            }
        };
    });
