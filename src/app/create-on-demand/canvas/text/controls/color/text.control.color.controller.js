(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgTextColorController", AgTextColorController);

  AgTextColorController.$inject = ["agTextService"];

  function AgTextColorController(agTextService) {
    this.changeColor = changeColor;
    function changeColor(text) {
      agTextService.changeColor(text,this.color);
      text.canvas.renderAll();
    }
  }
})();
