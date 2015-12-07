(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agTemplateCatalogService", agTemplateCatalogService);

  agTemplateCatalogService.$inject = ["$q", "$firebaseArray", "agFirebaseService"];

  function agTemplateCatalogService($q, $firebaseArray, agFirebaseService) {
    var service = {
      templates: [],

      getTemplates: getTemplates,
      saveTemplate: saveTemplate
    };

    return service;

    function getTemplates() {
      var deferred = $q.defer();
      service.templates = $firebaseArray(agFirebaseService.getFirebaseRef());
      service.templates.$loaded()
        .then(function() {
          deferred.resolve(service.templates);
        }
      );
      return deferred.promise;
    }

    function saveTemplate(template) {
      service.templates.$add(template);
    }
  }
})();
