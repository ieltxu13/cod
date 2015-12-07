(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agTemplateService", agTemplateService);

  agTemplateService.$inject = ["$http", "$q", "agCanvasService", "agTextListService"]
  function agTemplateService($http, $q, agCanvasService, agTextListService) {
    var service = {
      currentTemplate: null,
      loadTemplate: loadTemplate
    };

    return service;

    function loadTemplate(id) {
      var deferred = $q.defer();

      $http.get('templates/'+id+'/'+id+'.json')
        .then(function(res){
          deferred.resolve(res.data);
        },
      function(error) {
        console.log('template loading error..');
        deferred.reject(error);
      })

      return deferred.promise;

    }
  }
})();
