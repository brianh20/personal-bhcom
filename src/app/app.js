var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider){
	//$urlRouteProvider.otherwise("/");

	var home = {
		name: 'home',
		url: '',
		templateUrl : '/app/pages/home.html'
	}

	$stateProvider.state(home);
/*	$stateProvider.state(newSensor);
	$stateProvider.state(newElement);
	$stateProvider.state(viewSensors);
	$stateProvider.state(viewElements);
	$stateProvider.state(editElement);*/
	
});

/*
app.directive('navbar', function(){
  return{
    templateUrl : '/app/widgets/navbar.html'
  };
});

app.controller('editElement', function($scope) {

	angular.element(document).ready(function () {
		var expected = {lat: -34.6160073, lng: -58.3890407};
		var truth = {lat: -34.617, lng: -58.3990407};

		var map = new google.maps.Map(document.getElementById('elementMap'), {
	  		zoom: 14,
	  		center: expected
		});
		
		var markerExpected = new google.maps.Marker({
	  		position: expected,
	  		map: map,
	  		icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
		});
		
		var markerTruth = new google.maps.Marker({
	  		position: truth,
	  		map: map,
	  		icon: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
		});
    });

});*/























