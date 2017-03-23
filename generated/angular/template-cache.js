angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/footer.html",
    "<div>\n" +
    "  <div class=\"footer\" id=\"footer\" ng-controller=\"FooterController\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"row\">\n" +
    "            <ul>\n" +
    "              <li><p class=\"loi\">L'abus d'alcool est dangereux pour la santé, consommez avec modération<p></li>\n" +
    "            </ul>\n" +
    "            <ul class=\"social\">\n" +
    "                <li> <a href=\"#\"> <i class=\" fa fa-facebook\">   </i> </a> </li>\n" +
    "                <li> <a href=\"#\"> <i class=\"fa fa-twitter\">   </i> </a> </li>\n" +
    "                <li> <a href=\"#\"> <i class=\"fa fa-google-plus\">   </i> </a> </li>\n" +
    "                <li> <a href=\"#\"> <i class=\"fa fa-pinterest\">   </i> </a> </li>\n" +
    "                <li> <a href=\"#\"> <i class=\"fa fa-youtube\">   </i> </a> </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"footer-bottom\">\n" +
    "      <div class=\"container\">\n" +
    "          <p class=\"pull-left\"> Copyright © In My Bear 2017. All right reserved. </p>\n" +
    "          <div class=\"pull-right\">\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/home.html",
    "<h1>In My Bear</h1>\n" +
    "\n" +
    "<ul class=\"list-group\" ng-repeat=\"beers in beer\">\n" +
    "  <li class=\"list-group-item\">\n" +
    "    <h3> {{ beer[0].name }}\n" +
    "      <em class=\"pull-right\"> {{ beer[0].abv }} </em>\n" +
    "      <img class=\"imgBeer\" ng-src=\"{{ beer[0].image_url }}\"/>\n" +
    "    </h3>\n" +
    "    <p> {{ beer[0].description }} </p>\n" +
    "    <p> {{ beer[0].food_pairing }} </p>\n" +
    "    <button> Add to Fav </button>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "<ul class=\"list-group\" ng-repeat=\"beers in beer\">\n" +
    "  <li class=\"list-group-item\">\n" +
    "    <h3> {{ beer1[0].name }}\n" +
    "      <em class=\"pull-right\"> {{ beer1[0].abv }} </em>\n" +
    "      <img class=\"imgBeer\" ng-src=\"{{ beer1[0].image_url }}\"/>\n" +
    "    </h3>\n" +
    "    <p> {{ beer1[0].description }} </p>\n" +
    "    <p> {{ beer1[0].food_pairing }} </p>\n" +
    "    <button> Add to Fav </button>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "<ul class=\"list-group\" ng-repeat=\"beers in beer\">\n" +
    "  <li class=\"list-group-item\">\n" +
    "    <h3> {{ beer2[0].name }}\n" +
    "      <em class=\"pull-right\"> {{ beer2[0].abv }} </em>\n" +
    "      <img class=\"imgBeer\" ng-src=\"{{ beer2[0].image_url }}\"/>\n" +
    "    </h3>\n" +
    "    <p> {{ beer2[0].description }} </p>\n" +
    "    <p> {{ beer2[0].food_pairing }} </p>\n" +
    "    <button> Add to Fav </button>\n" +
    "  </li>\n" +
    "</ul>\n"
  );

  $templateCache.put("anon/login.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"login()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "            <button type=\"submit\" class=\"btn btn-primary btn-block\">Login</button>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.search\" ng-hide=\"auth.isAuthenticated()\">Search</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\">Login</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\">Register</a></li>\n" +
    "                    <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/register.html",
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-6 col-xs-offset-3\">\n" +
    "        <form class=\"form\" name=\"loginForm\" novalidate ng-submit=\"register()\">\n" +
    "            <div ng-repeat=\"error in errors\">{{error.error}}</div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "                <input id=\"email\" type=\"email\" class=\"form-control\" ng-model=\"user.email\" required placeholder=\"Email Address\">\n" +
    "            </div>\n" +
    "            <div class=\"input-group\">\n" +
    "                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "                <input id=\"password\" type=\"password\" class=\"form-control\" ng-model=\"user.password\" required placeholder=\"Password\">\n" +
    "            </div>\n" +
    "        </form>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/search.html",
    "<h1>Search result</h1>\n" +
    "\n" +
    "<!-- <div class=\"descriptionBeer\">{{ beer[0].name }} {{ beer[0].abv }} {{ beer[0].description }} {{ beer[0].food_pairing }}\n" +
    "<img class=\"imgBeer\" src=\"{{ beer[0].image_url }}\">\n" +
    "</div> -->\n" +
    "\n" +
    "<input type=\"text\" ng-model=\"query\">\n" +
    "<button ng-click=\"addBeer()\" ui-sref=\"anon.search\">Cheeeeeers !</button>\n" +
    "\n" +
    "<ul class=\"list-group\">\n" +
    "      <!-- Product container -->\n" +
    "  <li class=\"list-group-item\" ng-repeat=\"beers in beer\">\n" +
    "    <h3> {{ beer[0].name }}\n" +
    "      <em class=\"pull-right\"> {{ beer[0].abv }} </em>\n" +
    "      <img class=\"imgBeer\" ng-src=\"{{ beer[0].image_url }}\"/>\n" +
    "    </h3>\n" +
    "    <p> {{ beer[0].description }} </p>\n" +
    "    <!-- <button> Add to Fav </button> -->\n" +
    "  </li>\n" +
    "</ul>\n"
  );

  $templateCache.put("user/dashboard.html",
    "Dashboard de {{user.email}}\n"
  );

  $templateCache.put("user/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "        <span class=\"sr-only\">Toggle navigation</span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "        <span class=\"icon-bar\"></span>\n" +
    "      </button>\n" +
    "            <a class=\"navbar-brand\" href=\"#\"></a>\n" +
    "        </div>\n" +
    "        <div class=\"collapse navbar-collapse\" id=\"navbar\">\n" +
    "            <ul class=\"nav navbar-nav\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "            </ul>\n" +
    "            <ul class=\"nav navbar-nav navbar-right\">\n" +
    "                <li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Website</a></li>\n" +
    "                    <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("user/profile.html",
    "Profile de {{user.email}}\n"
  );

}]);
