(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgTextController", AgTextController);

  AgTextController.$inject = ["agTextService","agTextListService"];

  function AgTextController(agTextService, agTextListService) {
    this.changeFont = changeFont;
    this.changeFontWeight = changeFontWeight;
    this.remove = remove;

    function changeFont(text) {
      agTextService.changeFont(text, this.fontFamily);
      text.canvas.renderAll();
    }

    function changeFontWeight(text) {
      agTextService.changeFontWeight(text, this.fontWeight)
      text.canvas.renderAll();
    }

    function remove(text) {
      agTextService.remove(text);
      agTextListService.remove(text);
    }

  }


})();
