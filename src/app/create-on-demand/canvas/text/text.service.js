(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agTextService", agTextService);

  agTextService.$inject = ['agCanvasService','agObjectService'];

  function agTextService (agCanvasService, agObjectService) {
    var service = {
      createText: createText,
      remove: remove
    };

    return service;

    function createText(options) {
      var text = new fabric.IText(options.text, {
        left: 100,
        top: 100
      });

      agCanvasService.canvas.add(text);
      return text;
    }

    function remove(text) {
      agObjectService.remove(text);
    }
  }
})();
