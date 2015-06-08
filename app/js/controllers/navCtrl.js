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
    $scope.selected_type= "default";
    
$scope.searchRes = {
"salon": [
    {
        name : 'Salon Blue',        
        shop_id : '12320492',
        address : '3489 Independence Dr N,<br> Minneapolis, MN',
        queries : ['salon','salon blue']
        },
    {
        name : 'Salon Blue Ivy',        
        shop_id : '12320493',
        address : '3489 Independence Dr N,<br> Minneapolis, MN',
        queries : ['salon','salon blue', 'salon blue ivy']
        },
    {
        name : 'Salon Blue Sky',        
        shop_id : '12320494',
        address: '3489 Independence Dr N,<br> Minneapolis, MN',
        queries : ['salon','salon blue','salon blue sky']
        },
    {
        name : 'Salon Blueberry',        
        shop_id : '12320495',
        address : '3489 Independence Dr N,<br> Minneapolis, MN',
        queries : ['salon','salon blue', 'salon blueberry']
        },
    {
        name : 'Salon Pink',        
        shop_id : '12320496',
        address : '3489 Independence Dr N,<br> Minneapolis, MN',
        queries: ['salon','salon pink']
        },
        
    ],
    "products" : [
    {
        product_image : 'images/prod1.jpg',        
        name : 'Invati Exfoliating Shampoo 250ml',
        product_id : '12320492',
        product_price : '$10.50',
        queries : ['Shampoo','Shampoo 250ml']
        },
    {
        product_image : 'images/prod2.jpg',        
        name : 'aveda men pure-formance exfoliating Shampoo',
        product_id : '12320493',
        product_price : '$10.50',
        queries : ['Shampoo','Shampoo 250ml', 'men', 'men Shampoo']
        },
    {
        product_image : 'images/prod3.jpg',        
        name : 'Imadder root Shampoo',
        product_id : '12320494',
        product_price : '$33.00',
        queries : ['Shampoo']
        },
    {
        product_image : 'images/prod4.jpg',        
        name: 'pure abundance volumizing Shampoo',
        product_id : '12320495',
        product_price : '$21.00',
        queries : ['Shampoo']
        }
    ]
    };
    $scope.search_func= function(xx){
        console.log($scope.selected_type,xx);
        console.log($scope.searchRes[$scope.selected_type]);
        $scope.resData = $scope.searchRes[$scope.selected_type];
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
	// close effect for browse
	$('.browse_div a.close-eff').on("click",function(){
		if($('a.close-eff span.a_lines').hasClass("a_close")){
			$('a.close-eff span.a_lines').removeClass("a_close");
		}
		else {
			$('a.close-eff span.a_lines').addClass("a_close");
		}
			
		});
	$('.browse_div a.close-eff').on("blur",function(){
		$('a.close-eff span.a_lines').removeClass("a_close");
	});
	
	// for mobile view header scroll up / down
		var lastScroll = 0;
	$(window).scroll(function(event) {
		if ($(window).width() < 676) {
			var st = $(this).scrollTop();
			if( st > lastScroll) {
				$('header.header.navbar').fadeOut("slow");
			}
			else {
				$('header.header.navbar').slideDown();
			}
			lastScroll = st ;
		}
	});
}]);