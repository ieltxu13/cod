(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agTextListService", agTextListService);

  agTextListService.$inject = [];

  function agTextListService () {
    var service = {
      textList: [],

      addText: addText,
      getTextList: getTextList,
      remove: remove
    };

    return service;

    function addText(text) {
      service.textList.push(text);
    }

    function getTextList() {
      return service.textList;
    }

    function remove(text) {
      _.remove(service.textList, {'$$hashKey': text.$$hashKey});
    }
  }
})();
