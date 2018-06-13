"use strict";

angular.module('code').
		config(
			function(
				$locationProvider,
				$routeProvider,
				
			){
				$locationProvider.html5Mode({enabled: true})



				$routeProvider.
					when("/", {
						template: "<main-page></main-page>"
					}).
					when("/table", {
						templateUrl: "/templates/main-table.html"
					}).
					when("/detail", {
						template: "<detail-page></detail-page>"
					}).
					when("/detail/:id", {
						template: "<detail-page></detail-page>"
					}).
					otherwise({
						template: "not found!"
					})
			});