four51.app.controller('promotionsCtrl', ['$scope', '$rootScope', function($scope, $rootScope){
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Pure Privilege Bonus Points Offer',
      product_image:'css/images/promoImg1.jpg',
      product_heading:'Rosemary Mint Body Lotion Travel',
      product_descp:'A silky, lightweight lotion that invigorates with a time-release aroma of certified organic rosemary and peppermint',
      product_spec:{"spec":["Cools and revitalizes skin with menthol. Imparts a cool, refreshing sensation",
      "Softens and soothes","Mind- and body-energizing aroma."]},
      product_discount:'Save 71% and get each for only $1.50!!'
    },
    {
      title: 'Less stress + more points',
      product_image:'css/images/promoImg1.jpg',
      product_heading:'Rosemary Mint Body Lotion Travel',
      product_descp:'A silky, lightweight lotion that invigorates with a time-release aroma of certified organic rosemary and peppermint',
      product_spec:{"spec":["Cools and revitalizes skin with menthol. Imparts a cool, refreshing sensation",
      "Softens and soothes","Mind- and body-energizing aroma."]},
      product_discount:'Save 71% and get each for only $1.50!!'
    },
    {
      title: 'Free Shipping + new Thickening toninc w/$50',
      product_image:'css/images/promoImg1.jpg',
      product_heading:'Rosemary Mint Body Lotion Travel',
      product_descp:'A silky, lightweight lotion that invigorates with a time-release aroma of certified organic rosemary and peppermint',
      product_spec:{"spec":["Cools and revitalizes skin with menthol. Imparts a cool, refreshing sensation",
      "Softens and soothes","Mind- and body-energizing aroma."]},
      product_discount:'Save 71% and get each for only $1.50!!'
    },
    {
      title: 'Free shiping with any invati&#153; purchase.',
      product_image:'css/images/promoImg1.jpg',
      product_heading:'Rosemary Mint Body Lotion Travel',
      product_descp:'A silky, lightweight lotion that invigorates with a time-release aroma of certified organic rosemary and peppermint',
      product_spec:{"spec":["Cools and revitalizes skin with menthol. Imparts a cool, refreshing sensation",
      "Softens and soothes","Mind- and body-energizing aroma."]},
      product_discount:'Save 71% and get each for only $1.50!!'
    }
  ];

  $scope.status = {
    isItemOpen: new Array($scope.groups.length),
    isFirstOpen: true,
    isFirstDisabled: false
  };
  $scope.status.isItemOpen[0] = true;
}]);