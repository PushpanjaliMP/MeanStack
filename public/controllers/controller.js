var app= angular.module('ngapp',[]);

app.controller("AppCtrl", function($scope,$http){


	$http({
		method:'GET',
		url:'contactlist'
	}).then(function(response){
		console.log("got the data"+response);
		$scope.contactlist = angular.fromJson(response.data);
	});
	//$http.get('/contactlist').success(function(response){
	//});
});
