app.controller('homeController', ["$scope","$http", function ($scope, $http) {
	$scope.backgroundPic = "././View/img/maps.png";
	$scope.bodyStyle = {background: "url(" + $scope.backgroundPic + ") no-repeat center center fixed"};
	console.log($scope.backgroundPic);
}]);