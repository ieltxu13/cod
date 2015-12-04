(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgTextController", AgTextController);

  AgTextController.$inject = ["agTextService","agTextListService"];

  function AgTextController(agTextService, agTextListService) {
    this.remove = remove;

    function remove(text) {
      agTextService.remove(text);
      agTextListService.remove(text);
    }

  }


})();
