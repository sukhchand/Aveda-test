four51.app.directive('leftNav', function() {
	var obj = {
		restrict: 'E',
		replace : true,
		templateUrl: 'partials/controls/leftNav.html',
		controller: 'LeftNavCtrl'
	};
	return obj;
});