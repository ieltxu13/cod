(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgCanvasSettingsController", AgCanvasSettingsController);

  AgCanvasSettingsController.$inject = ["agCanvasService"];

  function AgCanvasSettingsController(agCanvasService) {

    this.changeSize = changeSize;
    this.changeBackgroundColor = changeBackgroundColor;
    this.width = parseInt(agCanvasService.canvas.getWidth());
    this.height = parseInt(agCanvasService.canvas.getHeight());
    this.backgroundColor = agCanvasService.canvas.backgroundColor;

    function changeSize() {
      agCanvasService.canvas.setWidth(this.width);
      agCanvasService.canvas.setHeight(this.height);
    }

    function changeBackgroundColor() {
      agCanvasService.canvas.setBackgroundColor(this.backgroundColor);
      agCanvasService.canvas.renderAll();
    }

  }

})();
