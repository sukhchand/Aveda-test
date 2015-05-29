four51.app.controller('profileCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
	 $scope.oneAtATime = true;

  		$scope.groups = [{ title: "SPA CARD Visa ending in 6802"},
						 { title: "SPA CARD Visa ending in 6802"},
						 { title: "PROMOTION CARD Visa endig in 6802"}
		 ];

	  $scope.status = {
		isItemOpen: new Array($scope.groups.length),
		isFirstOpen: true,
		isFirstDisabled: false
	  };
	  $scope.status.isItemOpen[0] = true;
}]);