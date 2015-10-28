four51.app.controller('LeftNavCtrl', ['$location', '$route', '$scope', '$451', 'User', 'leftNavService',
function ($location, $route, $scope, $451, User, leftNavService) {
	$scope.userGroupName = '';
	$scope.permissions = [];
	$scope.$on("data:userDetails",function(event,user){
		$scope.userGroupName = user.Groups[0].Name.toLowerCase();
		$scope.permissions = leftNavService.getUserPermissions($scope.userGroupName);
	});
	$scope.hasPermission = function(hasPermission){
		return $scope.permissions.indexOf(hasPermission) > -1;
	}
	$scope.orderMenu = [
		{ orderName : 'Order History', href : "/myorders/orderHistory" },
		{ orderName : 'Pending Orders', href : "/myorders/pendingOrders" },
		{ orderName : 'User Orders', href : "/myorders/userOrders" }
	];
	$scope.orderMenuActive = 0;
	$scope.orderMenuActtivFn = function(index){
		console.log(index);
		$scope.orderMenuActive = index || 0;
	};
	$('.navs_container').height(window.innerHeight-$('.main-nav').height());
	/*$('.sec_navs li').on('click', function(){
		// if($(this).hasClass("active")){
		// 	$('.sec_navs li').removeClass("active");
		// 	console.log($(this).hasClass("active"));
		// }
		// else{
		// 	$('.sec_navs li').removeClass("active");
		// 	$(this).addClass("active");
		// 	console.log($(this).hasClass("active"));
		// }
		$('.sec_navs li').removeClass("active");
			$(this).addClass("active");
	})*/
	$scope.addClass=function(){
		$('.sec_navs li').removeClass("active");
		$(this).addClass("active");
	}
	$('.sec_nav_dd').click(function(){
		$('.my_ord_dd').slideToggle();
		if($('.sec_nav_dd span.glyphicon').hasClass('glyphicon-chevron-down')) {
			$('.sec_nav_dd span.glyphicon').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
		}
		else {
			$('.sec_nav_dd span.glyphicon').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
		}
	});
	$('.sec_nav_dd1').click(function(){
		$('.my_ord_dd1').slideToggle();
	});
	
	// changing arrow on toggle

}]);