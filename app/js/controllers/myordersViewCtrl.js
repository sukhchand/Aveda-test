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
  		status:'cancelled'
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
  		status:'pending'
  	},
  	{  	
  		orderId:'12485345-456',
  		createdBy:'Ryan Belinger',
  		orderType:'Standard',
  		orderPlaced:'06/12/2015',
  		total:'$56.97',
  		status:'pending'
  	},
  	{  	
  		orderId:'12485345-456',
  		createdBy:'Ryan Belinger',
  		orderType:'Standard',
  		orderPlaced:'06/12/2015',
  		total:'$56.97',
  		status:'cancelled'
  	},
  	{  	
  		orderId:'12485345-456',
  		createdBy:'Ryan Belinger',
  		orderType:'Standard',
  		orderPlaced:'06/12/2015',
  		total:'$56.97',
  		status:'pending'
  	},
    {   
      orderId:'12485345-456',
      createdBy:'Ryan Belinger',
      orderType:'Standard',
      orderPlaced:'06/12/2015',
      total:'$56.97',
      status:'pending'
    },
    {   
      orderId:'12485345-456',
      createdBy:'Ryan Belinger',
      orderType:'Standard',
      orderPlaced:'06/12/2015',
      total:'$56.97',
      status:'delivered'
    },
    {   
      orderId:'12485345-456',
      createdBy:'Ryan Belinger',
      orderType:'Standard',
      orderPlaced:'06/12/2015',
      total:'$56.97',
      status:'delivered'
    },
    {   
      orderId:'12485345-456',
      createdBy:'Ryan Belinger',
      orderType:'Standard',
      orderPlaced:'06/12/2015',
      total:'$56.97',
      status:'cancelled'
    },
    {   
      orderId:'12485345-456',
      createdBy:'Ryan Belinger',
      orderType:'Standard',
      orderPlaced:'06/12/2015',
      total:'$56.97',
      status:'delivered'
    },
    {   
      orderId:'12485345-456',
      createdBy:'Ryan Belinger',
      orderType:'Standard',
      orderPlaced:'06/12/2015',
      total:'$56.97',
      status:'delivered'
    },
    {   
      orderId:'12485345-456',
      createdBy:'Ryan Belinger',
      orderType:'Standard',
      orderPlaced:'06/12/2015',
      total:'$56.97',
      status:'pending'
    },
    {   
      orderId:'12485345-456',
      createdBy:'Ryan Belinger',
      orderType:'Standard',
      orderPlaced:'06/12/2015',
      total:'$56.97',
      status:'pending'
    },
    {   
      orderId:'12485345-456',
      createdBy:'Ryan Belinger',
      orderType:'Standard',
      orderPlaced:'06/12/2015',
      total:'$56.97',
      status:'pending'
    },{   
      orderId:'12485345-456',
      createdBy:'Ryan Belinger',
      orderType:'Standard',
      orderPlaced:'06/12/2015',
      total:'$56.97',
      status:'pending'
    }

  ];
  // angular.copy( $scope.Orders,$scope.OrdersCopy); 
   $scope.OrdersCopy = $scope.Orders;
  $scope.myColDefs = [
      {field: 'orderId', displayName: 'ORDER NUMBER', cellTemplate: "<a href='#''>{{COL_FIELD}}</a> "},
      {field: 'createdBy', displayName: 'CREATED BY'},
      {field: 'orderType', displayName: 'ORDER TYPE'},
      {field: 'orderPlaced', displayName: 'ORDER PLACED'},
      {field: 'total', displayName: 'TOTAL'},
      {field: 'status',displayName: 'STATUS', cellTemplate: "<button class='btn btn-primary status_icon' type='button' ng-class = 'COL_FIELD'><span></span>{{COL_FIELD}}</button> "},
      {field: '', displayName: '',cellTemplate: '<a href="">CREATE ORDER CLAIM</a>'}


  ];
  $scope.gridOptions = { columnDefs:$scope.myColDefs, data: 'Orders' };

  $scope.orderCategory=[
    {
      'type':'ORDER HISTORY',
    },
    {
      'type':'PENDING ORDERS',
    },
    {
      'type':'USER ORDERS',
    }
  ];
  $scope.selected = 0;

    $scope.select= function(index) {
       $scope.selected = index;
       if(index=='1'){   
          $scope.Orders = _.pluck(_.where($scope.Orders, { 'status': 'pending'}));   
       }
       else{       
        $scope.Orders = $scope.OrdersCopy;
       }

    };

}]);
