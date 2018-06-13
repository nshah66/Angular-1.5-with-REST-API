"use strict";

angular.module('appHeader').
		component('appHeader', {
			templateUrl: "./templates/header.html",
			controller: function($location, $scope){
				$scope.toggleView = function(name){
					if(name == 'tile')
						$location.path('/')
					else if(name == 'table')
						$location.path('/table')
				}

				$scope.createNew = function(){
					$location.path('/detail')
				}
			}
		});
		