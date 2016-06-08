(function(){
  angular.module('piratesApp')
    .directive('gsPirateShow', function (){
      return {
        scope:{
          pirate: '<'
        },
        controller: 'ShowPirateController',
        controllerAs: 'vm',
        templateUrl: '../views/pirates/show.html'
      }
    })
})()