(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agBackgroundService", agBackgroundService);

  agBackgroundService.$inject = ["$q", "agCanvasService"];

  function agBackgroundService($q, agCanvasService) {
    var service = {
      background: null,

      createBackgroundImage: createBackgroundImage
    };

    return service;

    function createBackgroundImage(options) {
      var deferred = $q.defer();
      var image = new fabric.Image.fromURL(options.url, function(oImg) {
        oImg.scaleX = options.scale;
        oImg.scaleY = options.scale;
        agCanvasService.canvas.setBackgroundImage(oImg, function(){
          service.background = oImg;
          deferred.resolve(oImg);
        });
      });
      return deferred.promise;
    }

  }
})();
