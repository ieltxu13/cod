(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agCanvasService", agCanvasService);

  agCanvasService.$inject = ["$q"];

  function agCanvasService($q) {
    var service = {
      canvas: null,

      createBackground: createBackground,
      init: init
    };
    return service;

    function createBackground(background) {
      var deferred = $q.defer();
      var backgroundImage = new fabric.Image.fromURL(background.src, function(oImg) {
        service.canvas.setBackgroundImage(oImg, function() {
          oImg.scaleX = background.scaleX;
          oImg.scaleY = background.scaleY;
          deferred.resolve(oImg);
        });
      });
      return deferred.promise;
    }

    function init(template) {
      var canvas = new fabric.Canvas('ag-canvas');
      if(_.isUndefined(template)){
        canvas.setWidth(400);
        canvas.setHeight(400);
        service.canvas = canvas;
      } else {
        var size = template.templateSize;
        canvas.setWidth(size.width * 72 / template.webScale);
        canvas.setHeight(size.height * 72 / template.webScale);
        service.canvas = canvas;
      }
    }

  }
})();
