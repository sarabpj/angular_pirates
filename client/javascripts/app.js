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
          controllerAs: 'vm'
        })
        .when('/pirates/new', {
             templateUrl: '../views/pirates/new.html',
          controller: 'NewPirateController',
          controllerAs: 'vm'
        })
        .otherwise({redirectTo: '/pirates'})
      $locationProvider.html5Mode(true)
    }


 config.$inject = ['$routeProvider', '$locationProvider']
})()