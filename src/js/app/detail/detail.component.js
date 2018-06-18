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
				if($scope.isEdit === true){
					Document.get({Id: $scope.id}, function(data){
						$scope.item = data
						//console.log($scope.item.imgs[0].url)
					})
				}
				
				$scope.goBack = function(){
					$location.path("/")
				}
				$scope.createDoc = function(){
					$scope.new.Name = $scope.new.name
					$scope.new.Description = $scope.new.description
					$scope.new.URL = $scope.new.url
					Document.post({}, {
						name: $scope.new.Name,
						description: $scope.new.Description,
						imgs: [{url: $scope.new.URL}]
					}, function(){$location.path("/")})
					
				}

				$scope.updateDoc = function(){
					Document.update({Id: $scope.id}, {
						name: $scope.item.name,
						description: $scope.item.description,
						imgs:[{url: $scope.item.imgs[0].url}]
					}, function(){$location.path("/")})
					
				}
			}
		});