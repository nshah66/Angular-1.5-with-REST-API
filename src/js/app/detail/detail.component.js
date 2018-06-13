"use strict";

angular.module('detailPage').
		component('detailPage', {
			templateUrl: '/templates/detail.html',
			controller: function(Document, $location, $routeParams, $scope){
				$scope.id = $routeParams.id
				$scope.isEdit = false
				if($scope.id)
					$scope.isEdit = true
				$scope.new = {
					Name: '',
					Description: '',
					URL: ''
				};
				$scope.item
				Document.get({Id: $scope.id}, function(data){
					$scope.item = data
					console.log($scope.item.imgs[0].url)
				})

				$scope.goBack = function(){
					$location.path("/")
				}
			}
		});