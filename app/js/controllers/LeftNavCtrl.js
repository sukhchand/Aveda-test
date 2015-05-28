four51.app.controller('LeftNavCtrl', ['$location', '$route', '$scope', '$451', 'User', 'leftNavService',
function ($location, $route, $scope, $451, User, leftNavService) {
	$scope.userGroupName = '';
	$scope.permissions = [];
	$scope.$on("data:userDetails",function(event,user){
		$scope.userGroupName = user.Groups[0].Name.toLowerCase() || 'salonuser';
		$scope.permissions = leftNavService.getUserPermissions($scope.userGroupName);
	});
	$scope.hasPermission = function(hasPermission){
		return $scope.permissions.indexOf(hasPermission) > -1;
	}
	$('.navs_container').height(window.innerHeight-$('.main-nav').height());
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