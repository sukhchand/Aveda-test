four51.app.controller('NavCtrl', ['$location', '$route', '$scope', '$451', 'User',
function ($location, $route, $scope, $451, User) {
    $scope.Logout = function(){
        User.logout();
        if ($scope.isAnon) {
            $location.path("/catalog");
            User.login();
        }
    };

	$scope.refreshUser = function() {
		store.clear();
	}

    // http://stackoverflow.com/questions/12592472/how-to-highlight-a-current-menu-item-in-angularjs
    $scope.isActive = function(path) {
        var cur_path = $location.path().replace('/', '');
        var result = false;
        if (path instanceof Array) {
            angular.forEach(path, function(p) {
                if (p == cur_path && !result)
                    result = true;
            });
        }
        else{
            if (cur_path == path)
                result = true;
        }
        return result;
    };
    // extension of above isActive in path
    $scope.isInPath = function(path) {
        var cur_path = $location.path().replace('/', '');
        var result = false;

        if(cur_path.indexOf(path) > -1) {
            result = true;
        }
        else {
            result = false;
        }
        return result;
    };

	$scope.Clear = function() {
		localStorage.clear();
	}

	$scope.$on('event:orderUpdate', function(event, order) {
		$scope.cartCount = order ? (order.Status == 'Unsubmitted' || order.Status == 'AwaitingApproval') ? order.LineItems.length : null : null;
	});
    $('.win-ht').height(window.innerHeight-$('.main-nav').height());
   /* $('.browse_submenu li').mouseenter(function(){
        console.log(this);
        $(this).find("sub_browse_menu-2").css("display","block");
        console.log($(this).find("sub_browse_menu-2").css("display","block"));
    });
    $('.sub_browse_menu-2 li').hover(function(){
        $(this).find("sub_browse_menu-3").css("display","block");
    })*/
    $( '.browse_submenu li' ).mouseenter(function() {
        console.log(this);
        $(this).find('ul.sub_browse_menu-2').css("display", "block");
      })
      .mouseleave(function() {
        $(this).find('ul.sub_browse_menu-2').css("display", "none");
      });
      $( '.sub_browse_menu-2 li' ).mouseenter(function() {
        console.log(this);
        $(this).find('ul.sub_browse_menu-3').css("display", "block");
      })
      .mouseleave(function() {
        $(this).find('ul.sub_browse_menu-3').css("display", "none");
      });
}]);