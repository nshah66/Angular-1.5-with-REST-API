"use strict";

angular.module('document', []).
		factory('Document', function($resource){
			var getAll_url = "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/:Id"
			//var getOne_url = "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/:Id"
			var documents =  $resource(getAll_url, {Id: "@id"}, {
				query: {
					method: 'GET',
					headers: 
					{
						"Authorization": "Bearer f17900d4abfbc57cd4bb644d952a4d518fc24d20-c45fc6ca3e8e33637d00dba625384571c62faa5b"
					},
					isArray: true,
				},
				get: {
					method: 'GET',
					headers: 
					{
						"Authorization": "Bearer f17900d4abfbc57cd4bb644d952a4d518fc24d20-c45fc6ca3e8e33637d00dba625384571c62faa5b"
					},
					
				}
			});
			return documents;
		});