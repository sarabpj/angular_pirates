(function(){
  angular
    .module('piratesApp')
    .controller('PiratesController', PiratesController)
    .controller('NewPirateController', NewPirateController)

    function PiratesController($http){
      var vm = this;
      $http.get('/api/pirates').then(function(res){
          vm.pirates = res.data
      })
    };

    function NewPirateController($http, $location){
      var vm = this;
      vm.pirate ={};

      vm.addPirate = function(newPirate){
        var req = {pirate: newPirate};
        $http.post('/api/pirates', req).then(function(res){
          $location.path('/pirates')
        })
      }
    };

    PiratesController.$inject=['$http']
    NewPirateController.$inject=['$http', '$location']
})()

