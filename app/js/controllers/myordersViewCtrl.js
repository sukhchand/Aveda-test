four51.app.controller('myordersCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.Orders =[{  	
  		orderId:'12485345-456',
  		createdBy:'Ryan Belinger',
  		orderType:'Standard',
  		orderPlaced:'06/12/2015',
  		total:'$56.97',
  		status:'shipped'
  	},
  	{  	
  		orderId:'12485345-456',
  		createdBy:'Ryan Belinger',
  		orderType:'Standard',
  		orderPlaced:'06/12/2015',
  		total:'$56.97',
  		status:'shipped'
  	},
  	{  	
  		orderId:'12485345-456',
  		createdBy:'Ryan Belinger',
  		orderType:'Standard',
  		orderPlaced:'06/12/2015',
  		total:'$56.97',
  		status:'shipped'
  	},
  	{  	
  		orderId:'12485345-456',
  		createdBy:'Ryan Belinger',
  		orderType:'Standard',
  		orderPlaced:'06/12/2015',
  		total:'$56.97',
  		status:'shipped'
  	},
  	{  	
  		orderId:'12485345-456',
  		createdBy:'Ryan Belinger',
  		orderType:'Standard',
  		orderPlaced:'06/12/2015',
  		total:'$56.97',
  		status:'shipped'
  	},
  	{  	
  		orderId:'12485345-456',
  		createdBy:'Ryan Belinger',
  		orderType:'Standard',
  		orderPlaced:'06/12/2015',
  		total:'$56.97',
  		status:'shipped'
  	},
  	{  	
  		orderId:'12485345-456',
  		createdBy:'Ryan Belinger',
  		orderType:'Standard',
  		orderPlaced:'06/12/2015',
  		total:'$56.97',
  		status:'shipped'
  	}
  ];
  $scope.myColDefs = [
      {field: 'orderId', displayName: 'ORDER NUMBER'},
      {field: 'createdBy', displayName: 'CREATED BY'},
      {field: 'orderType', displayName: 'ORDER TYPE'},
      {field: 'orderPlaced', displayName: 'ORDER PLACED'},
      {field: 'total', displayName: 'TOTAL'},
      {field: 'status',displayName: 'STATUS', cellTemplate: '<button class="btn btn-primary" type="button" value="shyam"></button> '},
      {field: '', displayName: '',cellTemplate: '<a href="">CREATE ORDER CLAIM</a>'}


  ];
  $scope.gridOptions = { columnDefs:$scope.myColDefs, data: 'Orders' };
  
}]);
