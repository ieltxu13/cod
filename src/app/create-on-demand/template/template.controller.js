(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgTemplateController", AgTemplateController);

  AgTemplateController.$inject = ["template", "agTemplateService"];

  function AgTemplateController(template, agTemplateService) {

    init();

    function init() {
      agTemplateService.currentTemplate = template;
    }
  }
})();
