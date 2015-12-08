(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agImageService", agImageService);

  agImageService.$inject = ["$q", "agCanvasService"];

  function agImageService($q, agCanvasService) {
    var service = {
      createImage: createImage
    };

    return service;

    function createImage(options) {
      var deferred = $q.defer();
      var image = new fabric.Image.fromURL(options.url, function(oImg) {
        agCanvasService.canvas.add(oImg);
        deferred.resolve(oImg);
      })

      return deferred.promise;
    }

  }
})()
