angular.module('App', ['ngSanitize','ui.bootstrap','ngFileUpload','ngMaterial']).controller('DashboardCtrl',function ($scope,$http,$window,$element) {
	

						
						$scope.lastname = $window.localStorage['lastname'].replace(/\"/g,"");
						$scope.firstname = $window.localStorage['firstname'].replace(/\"/g,"");
						$scope.userid = $window.localStorage['id'].replace(/\"/g,"");
						$scope.email = $window.localStorage['email'].replace(/\"/g,"");
							//M.toast({html: 'Welcome '+firstname+' '+lastname,outDuration:375});
						
						M.AutoInit();
						
						$scope.languageArray = [{
													"name":"Marathi (Marāṭhī)",
													"nativeName":"मराठी",
													"code":"mr"
												},
												{
													"name":"Hindi",
													"nativeName":"हिन्दी, हिंदी",
													"code":"hi"
												},{
													 "name":"English",
													"nativeName":"English",
													"code":"en"
												},{
													 "name":"Urdu",
													"nativeName":"اردو",
													"code":"ur"
												},{
													 "name":"Bengali",
													"nativeName":"বাংলা",
													"code":"bn"
												},{
													 "name":"Bihari",
													"nativeName":"भोजपुरी",
													"code":"bh"
												},{
													 "name":"Malayalam",
													"nativeName":"മലയാളം",
													"code":"ml"
												},];
												
												
												$scope.CatagoryArray = [{
													"name":"All",
													"code":""
												},
												{
													"name":"News",
													"code":"news"
												},{
													 "name":"Entertainment",
													"code":"entertainment"
												},{
													 "name":"Infotainment",
													"code":"infotainment"
												},{
													 "name":"Music",
													"code":"music"
												},{
													 "name":"Movies",
													"code":"movies"
												},{
													 "name":"Devotional",
													"code":"devotional"
												},{
													 "name":"Lifestyle",
													"code":"lifestyle"
												},{
													 "name":"Sports",
													"code":"sports"
												},{
													 "name":"Kids",
													"code":"kids"
												},];
												
						
						
						$scope.searchTerm;
						  $scope.clearSearchTerm = function() {
							$scope.searchTerm = '';
						  };
						// The md-select directive eats keydown events for some quick select
						// logic. Since we have a search input here, we don't need that logic.
						  $element.find('input').on('keydown', function(ev) {
							  ev.stopPropagation();
						  });
						  
						$scope.selectedLanguages = [];
						$scope.selectedCatagory = [];
						  
						  $scope.$watch("$scope.selectedLanguages", function () {
								$scope.selectedlangtext = $scope.selectedLanguages.length + " Language selected";
							})
							
						  $scope.selectedLanguagefun = function()
						  {
							$scope.$watch("$scope.selectedLanguages", function () {
								$scope.selectedlangtext = $scope.selectedLanguages.length + " Language selected";
							})
						  }	;	

						  $scope.$watch("$scope.selectedCatagory", function () {
								$scope.selectedCattext = $scope.selectedCatagory.length + " Category selected";
							})
							
						  $scope.selectCatagoryfun = function()
						  {
							$scope.$watch("$scope.selectedCatagory", function () {
								$scope.selectedCattext = $scope.selectedCatagory.length + " Category selected";
							})
						  }	;	
						  
							
							
});