(function(){

  angular
    .module('pirateApp')
    .service('PirateService', PirateService)

    function PirateService($http){
      const BASE_URL = '/api/pirates'

      this.getPirates = function(){
        return $http.get(BASE_URL)
      }

      this.createPirate= function(newPirate){
        return $http.post(BASE_URL, newPirate)
      }
    }
})()