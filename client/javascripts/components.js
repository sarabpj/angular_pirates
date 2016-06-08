(function(){
  angular.module('piratesApp')
    .component('gsPirateShow', {
        //with bindings everything by default is bound to the controller
        bindings:{
          pirate: '<'
        },
        controller: 'ShowPirateController',
        controllerAs: 'vm',
        templateUrl: '../views/pirates/show.html'
      })
    
})()