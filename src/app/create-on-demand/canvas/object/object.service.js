(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agObjectService", agObjectService);

  agObjectService.$inject = [];

  function agObjectService () {
    var service = {
      remove: remove
    }

    return service;

    function remove(object) {
      object.remove();
    }
  }
})();
