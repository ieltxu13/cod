(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agTemplateService", agTemplateService);

  agTemplateService.$inject = ["$q", "agTemplateCatalogService", "agTextService", "agTextListService","agCanvasService"]
  function agTemplateService($q, agTemplateCatalogService, agTextService, agTextListService, agCanvasService) {
    var service = {
      currentTemplate: null,
      initNewTemplate: initNewTemplate,
      loadTemplate: loadTemplate,
    };

    return service;

    function initNewTemplate() {
      agCanvasService.init();
    }

    function loadTemplate(id) {
      var deferred = $q.defer();
      agTemplateCatalogService.getTemplates()
      .then(function(templates){
        service.currentTemplate = _.findWhere(templates, {'$id': id});
        deferred.resolve(service.currentTemplate);
      });
      return deferred.promise;
    }

  }
})();
