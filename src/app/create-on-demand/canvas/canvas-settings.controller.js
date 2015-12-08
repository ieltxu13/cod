(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgCanvasSettingsController", AgCanvasSettingsController);

  AgCanvasSettingsController.$inject = ["agCanvasService", "agTemplateCatalogService"];

  function AgCanvasSettingsController(agCanvasService, agTemplateCatalogService) {

    this.changeSize = changeSize;
    this.changeBackgroundColor = changeBackgroundColor;
    this.canvasToJSON = canvasToJSON;
    this.loadBackgroundImage = loadBackgroundImage;
    this.width = parseInt(agCanvasService.canvas.getWidth());
    this.height = parseInt(agCanvasService.canvas.getHeight());
    this.backgroundColor = agCanvasService.canvas.backgroundColor;

    function changeSize() {
      agCanvasService.canvas.setWidth(this.width);
      agCanvasService.canvas.setHeight(this.height);
    }

    function changeBackgroundColor() {
      agCanvasService.canvas.setBackgroundColor(this.backgroundColor);
    }

    function canvasToJSON() {
      var templateJSON = {
        templateSize:{
          "width": 3.625,
          "height": 2.125
        },
        webScale: this.scale,
        template : agCanvasService.canvas.toJSON(),
        thumbnail : agCanvasService.canvas.toDataURL(),
        fonts: ['Comic Sans', 'Roboto', 'Sanchez']
      }
      agTemplateCatalogService.saveTemplate(templateJSON)
      console.log(agCanvasService.canvas.toJSON());
    }

    function loadBackgroundImage() {
      var backgroundImage = {
        src: 'resources/'+this.backgroundImage,
        scaleX: this.scale,
        scaleY: this.scale
      }
      agCanvasService.createBackground(backgroundImage)
        .then(function(image){
          agCanvasService.canvas.setBackgroundImage(image);
        });
    }

  }

})();
