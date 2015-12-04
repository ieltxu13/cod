(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agCanvasService", agCanvasService);

  agCanvasService.$inject = [];

  function agCanvasService() {
    var service = {
      canvas: null
    };
    return service;

  }
})();
