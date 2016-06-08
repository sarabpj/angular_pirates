(function(){
  angular
    .module('piratesApp')
    .controller('PiratesController', PiratesController)
    .controller('NewPirateController', NewPirateController)
    .controller('ShowPirateController', ShowPirateController)
    .controller('EditPirateController', EditPirateController)

    function PiratesController(PirateService){
      var vm = this;
      PirateService.getPirates().then(function(res){
        vm.pirates = res.data
      })
    };

    function NewPirateController(PirateService, $location){
      var vm = this;
      vm.pirate ={};

      vm.addPirate = function(newPirate){
        var req = {pirate: newPirate};
         PirateService.createPirate(req).then(function(res){
          $location.path('/pirates')
        })
      }
    };

    function ShowPirateController(PirateService, $route){
      var vm = this;
      vm.removePirate = function(id){
        PirateService.deletePirate(id).then(function(){
          //when going to a new location you need to use $location.path('/pirates')
          //when needing to refresh the page after a delete or update uses $route.reload
            $route.reload();
        });
      }
    }

    function EditPirateController(PirateService, $routeParams, $location){
       var vm = this

      PirateService.getPirate($routeParams.id).then(function(res){
        vm.pirate = res.data
        if(!vm.pirate) $location.path('/pirates')
      })

       vm.editPirate = function(pirate){
        var req = {pirate: pirate}
         PirateService.updatePirate(req).then(function(res){
          $location.path('/pirates')
         })
       }
    }
    //make sure the order you inject is the same order as your function 
    PiratesController.$inject=['PirateService']
    NewPirateController.$inject=['PirateService', '$location']
    ShowPirateController.$inject=['PirateService', '$route']
    EditPirateController.$inject =['PirateService', '$routeParams', '$location']
})()

