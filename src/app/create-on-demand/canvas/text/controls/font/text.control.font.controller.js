(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgTextFontController", AgTextFontController);

  AgTextFontController.$inject = ["agTextService", "agTemplateService"];

  function AgTextFontController(agTextService, agTemplateService) {
    this.changeFont = changeFont;
    this.changeFontWeight = changeFontWeight;
    this.fonts = agTemplateService.currentTemplate.fonts

    function changeFont(text) {
      agTextService.changeFont(text,this.font);
      text.canvas.renderAll();
    }

    function changeFontWeight(text) {
      agTextService.changeFontWeight(text,this.fontWeight)
      text.canvas.renderAll();
    }
  }


})();
