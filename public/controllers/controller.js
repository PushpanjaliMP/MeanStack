var app= angular.module('ngapp',[]);

app.controller("AppCtrl", function($scope,$http){


var refresh = function(){
	$http({
		method:'GET',
		url:'contactlist'
		}).then(function(response){
			console.log("got the data"+response);
			$scope.contactlist = angular.fromJson(response.data);
		});
	};

	refresh();

	$scope.addContact = function(){

		console.log("contact add");
		console.log($scope.contact);
		//var data = angular.toJson($scope.contact);

		$http({
			method:'post',
			data:  $scope.contact ,
			url:'contactlist'
		}).then(function(response){
			console.log("updated list"+response);
			refresh();
		});
	};

	$scope.edit = function(id) {

		console.log("edit"+id);

		$http({
			method:'get',
			url:'contactlist/'+id
		}).then(function(response){
			console.log("edited list"+angular.fromJson(response.data));
			$scope.contact = angular.fromJson(response.data);
			//refresh();
		});
	};

	$scope.update = function() {

		console.log("update");
		$http({
			method:'put',
			data:  $scope.contact ,
			url:'contactlist/'+$scope.contact._id
		}).then(function(response){
			console.log("updated list"+response);
			//$scope.contact = response;
			refresh();
		});
	};

	$scope.remove = function(id){

		console.log("delete id"+id);
		$http({
			method:'delete',
			url:'contactlist/'+id
		}).then(function(response){
			console.log("deleted"+response);
			refresh();
		});
	};
	$scope.clear = function(){
		$scope.contact.name ="";
		$scope.contact.email ="";
		$scope.contact.number ="";
	}
	//$http.get('/contactlist').success(function(response){
	//});
});
