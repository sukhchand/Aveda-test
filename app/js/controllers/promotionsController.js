four51.app.controller('promotionsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.status = {
    isItemOpen: new Array($scope.groups.length),
    isFirstOpen: true,
    isFirstDisabled: false
  };
  $scope.status.isItemOpen[0] = true;
}]);