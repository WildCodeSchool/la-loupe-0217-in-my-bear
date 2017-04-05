angular.module('app')
    .controller('ProfileController', function($scope, CurrentUser, UserService, BeerService, LocalService) {
        $scope.user = CurrentUser.user();

        $scope.avatars = [
                "img/imageProfil.png",
                "img/imgBear1.png",
                "img/imgBear2.png",
                "img/imgCoala.png",
                "img/imgDeer.png",
                "img/imgDog.png",
                "img/imgFox.png",
                "img/imgFrog.png",
                "img/imgLazy.png",
                "img/imgMonkey.png",
                "img/imgPanda1.png",
                "img/imgPanda.png",
                "img/imgPig.png",
                "img/imgRaccoon.png",
                "img/imgRhinoceros.png",
                "img/imgTiger.png",
                "img/imgWolf.png"
            ];

            $scope.updateAvatar = function (avatar) {
              var user = CurrentUser.user();
              user.avatar = avatar;
              UserService.update(user._id, {avatar: avatar});
              LocalService.set('user', JSON.stringify(user) );
              location.reload();
            };


    });
