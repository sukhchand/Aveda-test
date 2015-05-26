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
	});
	$('.sec_nav_dd1').click(function(){
		$('.my_ord_dd1').slideToggle();
	});

}]);