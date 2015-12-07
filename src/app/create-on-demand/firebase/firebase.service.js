(function(){
  "use strict";

  angular.module("create-on-demand")
  .factory("agFirebaseService", agFirebaseService);

  agFirebaseService.$inject = ["$firebase"];

  function agFirebaseService() {
    var service = {
      firebaseRef: null,

      getFirebaseRef: getFirebaseRef,
      init: init
    };

    return service;

    function init() {
      service.firebaseRef = new Firebase("https://ag-cod.firebaseio.com/data");
    }

    function getFirebaseRef() {
      if(_.isNull(service.firebaseRef)) {
        service.init();
      }
      return service.firebaseRef;
    }
  }
})();
