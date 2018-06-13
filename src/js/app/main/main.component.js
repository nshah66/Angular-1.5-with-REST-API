"use strict";

angular.module('mainPage').
		component('mainPage', {
			templateUrl: "/templates/main.html",
			controller: function(Document, $location, $scope){
				$scope.docs = [];

				$scope.onClick = function(docu){
					$location.path("/detail/" + docu._id)
				}

				Document.query(function(data){
					$scope.docs = data
				})


			}
		});