(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgTextListController", AgTextListController);

  AgTextListController.$inject = ["agTextListService"];

  function AgTextListController(agTextListService) {
    this.textList = agTextListService.getTextList();
    console.log(this.textList);
  }
})();
