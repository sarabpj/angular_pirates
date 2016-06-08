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
          //nothing will be loaded until the promise is revolved which helps with some
          //of the flickering
          resolve:{
            pirates: getAllPirates
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
          controllerAs: 'vm',
          resolve: {
            pirate: getPirateById
          }
        })
        .otherwise({redirectTo: '/pirates'})
      $locationProvider.html5Mode(true)
    }

  function getAllPirates(PirateService){
     return PirateService.getPirates();
  }
  function getPirateById(PirateService, $route){
    return PirateService.getPirate($route.current.params.id)
  }
 config.$inject = ['$routeProvider', '$locationProvider']
 getAllPirates.$inject = ['PirateService']
 getPirateById.$inject = ['PirateService', '$route']
})()