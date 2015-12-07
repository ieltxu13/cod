(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgCanvasController", AgCanvasController);

  AgCanvasController.$inject = ["agCanvasService", "agTextListService", "agTemplateService"];

  function AgCanvasController(agCanvasService, agTextListService, agTemplateService) {

    init();

    function init() {
      agCanvasService.init(agTemplateService.currentTemplate);
      agCanvasService.canvas.loadFromJSON(agTemplateService.currentTemplate.template);
      var texts = _.filter(agTemplateService.currentTemplate.template.objects, {'type': 'i-text'})
      if (!_.isEmpty(texts))
        agTextListService.populateTextList(texts);
    }
  }
})();
