(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgTemplateController", AgTemplateController);

  AgTemplateController.$inject = ["agTemplateService","agFontsService"];

  function AgTemplateController(agTemplateService, agFontsService) {
    this.init = init;
    this.init();
    this.currentTemplate = {};

    function init() {
      if(agTemplateService.currentTemplate) {
        this.currentTemplate = agTemplateService.currentTemplate;
        agFontsService.loadFonts(agTemplateService.currentTemplate.fonts);
      }
    }

  }
})();
