(function() {
  "use strict";

  angular.module("create-on-demand")
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state("/home", {
        url: "/home",
        templateUrl: "app/create-on-demand/template-catalog/template-catalog.template.html"
      })
      .state("/template", {
        url: "/template/:templateId",
        controller: 'AgTemplateController',
        controllerAs: 'AgTemplateController',
        templateUrl: "app/create-on-demand/template/template.template.html",
        resolve: {
          template: ["$stateParams","agTemplateService", function($stateParams, agTemplateService) {
            return agTemplateService.loadTemplate($stateParams.templateId);
          }]
        }
      })
  });
})();
