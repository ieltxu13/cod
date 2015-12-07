(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agTextService", agTextService);

  agTextService.$inject = ['agCanvasService','agObjectService'];

  function agTextService (agCanvasService, agObjectService) {
    var service = {
      addText: addText,
      changeColor: changeColor,
      changeFont: changeFont,
      changeFontSize: changeFontSize,
      changeFontWeight: changeFontWeight,
      createText: createText,
      remove: remove
    };

    return service;

    function addText(text) {
      var text = new fabric.IText(text.text, text);

      agCanvasService.canvas.add(text);
      return text;
    }

    function changeColor(text, color) {
      text.fill = color;
    }

    function changeFont(text, fontFamily) {
      text.fontFamily = fontFamily;
    }

    function changeFontSize(text, size) {
      text.fontSize = size * 0.5;
    }

    function changeFontWeight(text, fontWeight) {
      text.fontWeight = fontWeight;
    }

    function createText(options) {
      var text = new fabric.IText(options.text, {
        left: 100,
        top: 100,
        fontFamily: options.font,
        fontWeight: options.fontWeight,
        fill: options.color
      });

      agCanvasService.canvas.add(text);
      return text;
    }

    function remove(text) {
      agObjectService.remove(text);
    }
  }
})();
