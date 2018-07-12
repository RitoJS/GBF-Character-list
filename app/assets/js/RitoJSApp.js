var app = angular.module('RitoJS', ['ngRoute', 'ui.router'])

.config([
        '$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix(' ');
        }
    ])

.controller("indexController", ["$scope", function ($scope){
	var initDate = new Date();
	$scope.date = initDate;
}]);





