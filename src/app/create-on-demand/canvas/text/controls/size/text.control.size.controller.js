(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgTextSizeController", AgTextSizeController);

  AgTextSizeController.$inject = ["agTextService"];

  function AgTextSizeController(agTextService) {
    this.changeFontSize = changeFontSize;

    function changeFontSize(text) {
      agTextService.changeFontSize(text,this.size);
      text.canvas.renderAll();
    }
  }


})();
