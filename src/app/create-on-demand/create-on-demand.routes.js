(function() {
  "use strict";

  angular.module("create-on-demand")
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "app/create-on-demand/template-catalog/template-catalog.template.html",
        controller: 'AgTemplateCatalogController',
        controllerAs: 'AgTemplateCatalogController',
        resolve: {
          templates: ["agTemplateCatalogService", "$q", function(agTemplateCatalogService, $q) {
            var deferred = $q.defer();
            agTemplateCatalogService.getTemplates()
            .then(function(templates) {
              deferred.resolve(templates);
            });
            return deferred.promise;
          }]
        }
      })
      .state("template", {
        url: "/template/:templateId",
        controller: 'AgTemplateController',
        controllerAs: 'AgTemplateController',
        templateUrl: "app/create-on-demand/template/template.template.html",
        resolve: {
          template: ["$q", "$stateParams","agTemplateService", function($q, $stateParams, agTemplateService) {
            var deferred = $q.defer();
            agTemplateService.loadTemplate($stateParams.templateId).then(function(template){
              deferred.resolve(template);
            });
            return deferred.promise;
          }]
        }
      })
      .state("new-template", {
        url: "/new-template",
        controller: 'AgTemplateController',
        controllerAs: 'AgTemplateController',
        templateUrl: "app/create-on-demand/template/template.template.html",
        resolve: {
          firebase: ["agFirebaseService", function(agFirebaseService){
            agFirebaseService.init();
          }]
        }
      })
  });
})();
