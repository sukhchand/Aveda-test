four51.app.controller('LeftNavCtrl', ['$location', '$route', '$scope', '$451', 'User', 'leftNavService',
function ($location, $route, $scope, $451, User, leftNavService) {
	$scope.userGroupName = '';
	$scope.$on("data:userDetails",function(event,user){
		$scope.userGroupName = user.Groups[0].Name.toLowerCase();
		//$scope.leftNavData = leftNavService.getUserType($scope.userGroupName);
	});
	$scope.hasPermission = function(hasPermission){
		
	}
}]);