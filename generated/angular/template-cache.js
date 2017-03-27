angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/footer.html",
    "<div>\n" +
    "  <div class=\"footer\" id=\"footer\" ng-controller=\"FooterController\">\n" +
    "    <div class=\"container-fluid\">\n" +
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
    "<div class=\"container\">\n" +
    "\n" +
    "  <div class=\"row\">\n" +
    "      <div class=\"box\">\n" +
    "          <div class=\"col-lg-12 text-center\">\n" +
    "              <div id=\"carousel-example-generic\" class=\"carousel slide\">\n" +
    "                  <!-- Indicators -->\n" +
    "                  <ol class=\"carousel-indicators hidden-xs\">\n" +
    "                      <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n" +
    "                      <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n" +
    "                      <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n" +
    "                  </ol>\n" +
    "\n" +
    "                  <!-- Wrapper for slides -->\n" +
    "                  <div class=\"carousel-inner\">\n" +
    "                      <div class=\"item active\">\n" +
    "                          <img class=\"img-responsive img-full\" src=\"img/slide-1.jpg\" alt=\"\">\n" +
    "                      </div>\n" +
    "                      <div class=\"item\">\n" +
    "                          <img class=\"img-responsive img-full\" src=\"img/slide-2.jpg\" alt=\"\">\n" +
    "                      </div>\n" +
    "                      <div class=\"item\">\n" +
    "                          <img class=\"img-responsive img-full\" src=\"img/slide-3.png\" alt=\"\">\n" +
    "                      </div>\n" +
    "                  </div>\n" +
    "\n" +
    "                  <!-- Controls -->\n" +
    "                  <a class=\"left carousel-control\" href=\"#carousel-example-generic\" data-slide=\"prev\">\n" +
    "                      <span class=\"icon-prev\"></span>\n" +
    "                  </a>\n" +
    "                  <a class=\"right carousel-control\" href=\"#carousel-example-generic\" data-slide=\"next\">\n" +
    "                      <span class=\"icon-next\"></span>\n" +
    "                  </a>\n" +
    "              </div>\n" +
    "              <h2 class=\"brand-before\">\n" +
    "                  <small>Welcome to</small>\n" +
    "              </h2>\n" +
    "              <h1 class=\"brand-name\">In My Bear</h1>\n" +
    "              <hr class=\"tagline-divider\">\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "      <div class=\"box\">\n" +
    "          <div class=\"col-lg-12\">\n" +
    "              <hr>\n" +
    "              <h2 class=\"intro-text text-center\">\n" +
    "                  <strong> {{ beer[0].name }} </strong>\n" +
    "              </h2>\n" +
    "              <hr>\n" +
    "              <img class=\"img-responsive img-border img-left imgBeer\" ng-src=\"{{ beer[0].image_url }}\" alt=\"\">\n" +
    "              <hr class=\"visible-xs\">\n" +
    "              <p>{{ beer[0].description }}</p>\n" +
    "              <p>{{ beer[0].food_pairing }}</p>\n" +
    "              <button ng-show=\"auth.isAuthenticated()\"> Add to Fav </button>\n" +
    "              <!-- <p></p> -->\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "      <div class=\"box\">\n" +
    "          <div class=\"col-lg-12\">\n" +
    "              <hr>\n" +
    "              <h2 class=\"intro-text text-center\">\n" +
    "                  <strong> {{ beer1[0].name }} </strong>\n" +
    "              </h2>\n" +
    "              <hr>\n" +
    "              <img class=\"img-responsive img-border img-left imgBeer\" ng-src=\"{{ beer1[0].image_url }}\" alt=\"\">\n" +
    "              <hr class=\"visible-xs\">\n" +
    "              <p>{{ beer1[0].description }}</p>\n" +
    "              <p>{{ beer1[0].food_pairing }}</p>\n" +
    "              <button ng-show=\"auth.isAuthenticated()\"> Add to Fav </button>\n" +
    "              <!-- <p></p> -->\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "      <div class=\"box\">\n" +
    "          <div class=\"col-lg-12\">\n" +
    "              <hr>\n" +
    "              <h2 class=\"intro-text text-center\">\n" +
    "                  <strong> {{ beer2[0].name }} </strong>\n" +
    "              </h2>\n" +
    "              <hr>\n" +
    "              <img class=\"img-responsive img-border img-left imgBeer\" ng-src=\"{{ beer2[0].image_url }}\" alt=\"\">\n" +
    "              <hr class=\"visible-xs\">\n" +
    "              <p>{{ beer2[0].description }}</p>\n" +
    "              <p>{{ beer2[0].food_pairing }}</p>\n" +
    "              <button ng-show=\"auth.isAuthenticated()\"> Add to Fav </button>\n" +
    "              <!-- <p></p> -->\n" +
    "          </div>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n"
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
    "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container-fluid navbarBack\">\n" +
    "\n" +
    "\n" +
    "        <!-- System of icon bar -->\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <button type=\"button\" class=\"navbar-toggle navbar-left\" data-toggle=\"collapse\" data-target=\"#navbar\">\n" +
    "                  <span class=\"sr-only\">Toggle navigation</span>\n" +
    "                  <span class=\"icon-bar\"></span>\n" +
    "                  <span class=\"icon-bar\"></span>\n" +
    "                  <span class=\"icon-bar\"></span>\n" +
    "            </button>\n" +
    "\n" +
    "            <!-- Title in navbar -->\n" +
    "            <a ui-sref=\"anon.home\"><h1 class=\"navbar-text\" id=\"navText\">In My Bear</h1></a>\n" +
    "\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "        <!-- Dropdowns in navbar right-->\n" +
    "        <div class=\"collapse navbar-collapse navbar-right\" id=\"navbar\">\n" +
    "\n" +
    "            <!-- Logo in navbar for profile and avatard -->\n" +
    "            <ul class=\"nav navbar-nav navbar-right\" id=\"navbarLogo\">\n" +
    "                <li ui-sref-active=\"active\">\n" +
    "                    <a ui-sref=\"user.profile\">\n" +
    "                        <img class=\"img img-responsive\" src=\"img/imgProfil.png\">\n" +
    "                    </a>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <ul class=\"nav navbar-link navbar-right\">\n" +
    "                <li class=\"dropdown\">\n" +
    "                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" id=\"navDrop\">Menu<span class=\"caret\"></span></a>\n" +
    "                    <ul class=\"dropdown-menu\">\n" +
    "                        <li ui-sref-active=\"active\"><a ui-sref=\"anon.home\">Home</a></li>\n" +
    "                        <li role=\"separator\" class=\"divider\"></li>\n" +
    "                        <li ui-sref-active=\"active\"><a ui-sref=\"user.profile\" ng-show=\"auth.isAuthenticated()\">Profile</a></li>\n" +
    "\n" +
    "                        <li ui-sref-active=\"active\"><a ui-sref=\"user.Favoris\" ng-show=\"auth.isAuthenticated()\">Favorites</a></li>\n" +
    "\n" +
    "                        <li ui-sref-active=\"active\"><a ui-sref=\"user.dashboard\" ng-show=\"auth.isAuthenticated()\">Dashboard</a></li>\n" +
    "\n" +
    "                        <li><a ng-click=\"logout()\" ng-show=\"auth.isAuthenticated()\" href='#'>Logout</a></li>\n" +
    "                    </ul>\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "\n" +
    "            <!-- System for login and register -->\n" +
    "            <ul class=\"nav navbar-nav navbar-left\" id=\"navbarLogin1\">\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.search\" ng-hide=\"auth.isAuthenticated()\" id=\"navbarLogin2\">Search</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.login\" ng-hide=\"auth.isAuthenticated()\" id=\"navbarLogin2\">Login</a></li>\n" +
    "                <li ui-sref-active=\"active\"><a ui-sref=\"anon.register\" ng-hide=\"auth.isAuthenticated()\" id=\"navbarLogin2\">Register</a></li>\n" +
    "            </ul>\n" +
    "\n" +
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
    "<form ng-submit=\"submit\">\n" +
    "<input type=\"text\" ng-model=\"query\">\n" +
    "<button ng-click=\"addBeer()\" ui-sref=\"anon.search\">Cheeeeeers !</button>\n" +
    "</form>\n" +
    "\n" +
    "<ul class=\"list-group\">\n" +
    "      <!-- Product container -->\n" +
    "  <li class=\"list-group-item\">\n" +
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
