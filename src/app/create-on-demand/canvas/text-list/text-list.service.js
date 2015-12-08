(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agTextListService", agTextListService);

  agTextListService.$inject = [];

  function agTextListService () {
    var service = {
      textList: [],
      selectedText: null,

      addText: addText,
      getTextList: getTextList,
      getSelectedText: getSelectedText,
      populateTextList: populateTextList,
      remove: remove,
      setSelectedText: setSelectedText
    };

    return service;

    function addText(text) {
      service.textList.push(text);
    }

    function getSelectedText() {
      return service.selectedText;
    }

    function getTextList() {
      return service.textList;
    }

    function populateTextList(textList) {
      service.textList = textList;
    }

    function remove(text) {
      _.remove(service.textList, {'$$hashKey': text.$$hashKey});
    }

    function setSelectedText(text){
      service.selectedText = text;
    }
  }
})();
