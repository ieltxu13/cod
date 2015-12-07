(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgTextFontController", AgTextFontController);

  AgTextFontController.$inject = ["agTextService"];

  function AgTextFontController(agTextService) {
    this.changeFont = changeFont;
    this.changeFontWeight = changeFontWeight;

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
