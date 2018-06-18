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

angular.module('mainPage').
		component('tablePage', {
			templateUrl: "/templates/main-table.html",
			controller: function(Document, $location, $scope, $route){
				$scope.docs = [];


				Document.query(function(data){
					$scope.docs = data
					
				})

				$scope.deleteDoc = function(id){
					Document.delete({Id: id}, {}, 
						function(){
							alert("document deleted"+id)
							$route.reload()
						})
				}


			}
		});


