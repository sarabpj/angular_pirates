// var app = angular.module('piratesApp', ['ngRoute']);

//john papa style- it avoids adding on in the global variables
(function(){
  angular
    .module('piratesApp', ['ngRoute'])
    .config(config)

    function config($routeProvider, $locationProvider){
      $routeProvider
        .when('/pirates', {
          templateUrl: '../views/pirates/index.html',
          controller: 'PiratesController',
          controllerAs: 'vm',
          //nothing will be loaded until the promise is revolved
          resolve:{
            pirates: function(){
              return PirateService.getPirates();
            }
          }
        })
        .when('/pirates/new', {
          templateUrl: '../views/pirates/new.html',
          controller: 'NewPirateController',
          controllerAs: 'vm'
        })
        .when('/pirates/:id/edit',{
          templateUrl: '../views/pirates/edit.html',
          controller: 'EditPirateController',
          controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/pirates'})
      $locationProvider.html5Mode(true)
    }


 config.$inject = ['$routeProvider', '$locationProvider']
})()