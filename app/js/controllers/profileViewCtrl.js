four51.app.controller('profileCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
	 $scope.oneAtATime = true;

  		$scope.groups = [{ title: "SPA CARD Visa ending in 6802",
						 	NameOnCard:"Name On Card",
						  	Name:"Julia Sosa",
						  	BillAdd:"Billing Address",
						  	add1:"330 Cypress Avenue N",
						  	add2:"Mineapolis,MN 55414"
						 },
						 { title: "SPA CARD Visa ending in 6802",
						 	NameOnCard:"Name On Card",
						  	Name:"Julia Sosa",
						  	BillAdd:"Billing Address",
						  	add1:"330 Cypress Avenue N",
						  	add2:"Mineapolis,MN 55414"
						 },
						 { title: "PROMOTION CARD Visa endig in 6802",
						 	NameOnCard:"Name On Card",
						  	Name:"Julia Sosa",
						  	BillAdd:"Billing Address",
						  	add1:"330 Cypress Avenue N",
						  	add2:"Mineapolis,MN 55414"}
		 ];

	  $scope.status = {
		isItemOpen: new Array($scope.groups.length),
		isFirstOpen: true,
		isFirstDisabled: false
	  };
	  $scope.status.isItemOpen[0] = true;
}]);