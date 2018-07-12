app.controller("MainController", ["$scope","$rootScope", "$http", "$state", function ($scope, $rootScope, $http, $state){
	console.log("???: ", $state.current);
	$scope.backgroundPic = "assets/img/park.jpg";
	$scope.bodyStyle = {background: "url(" + $scope.backgroundPic + ") no-repeat center center fixed"};
}]);