(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgCanvasController", AgCanvasController);

  AgCanvasController.$inject = ["agCanvasService", "agTemplateService", "agTextListService", "agTextService",];

  function AgCanvasController(agCanvasService, agTemplateService, agTextListService, agTextService) {

    init();

    function init() {
      if(_.isNull(agTemplateService.currentTemplate) || _.isUndefined(agTemplateService.currentTemplate)){
        agTemplateService.initNewTemplate();
      } else {
        agCanvasService.init(agTemplateService.currentTemplate);
        agCanvasService.createBackground(agTemplateService.currentTemplate.template.backgroundImage)
        .then(function(){
          var texts = _.filter(agTemplateService.currentTemplate.template.objects, {'type': 'i-text'})
          if (!_.isEmpty(texts)) {
            _.each(texts,function(text){
              agTextListService.addText(agTextService.addText(text));
            });
          }
        });
      }
      //agCanvasService.canvas.loadFromJSON(agTemplateService.currentTemplate.template, agCanvasService.canvas.renderAll.bind(agCanvasService.canvas));
    }

  }
})();
