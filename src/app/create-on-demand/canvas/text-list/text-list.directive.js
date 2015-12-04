(function() {
  "use strict";

  angular.module("create-on-demand")
  .directive("agTextList", agTextList);

  agTextList.$inject = ['agTextListService'];

  function agTextList() {
    var directive = {
      templateUrl: 'app/create-on-demand/canvas/text-list/text-list.template.html',
      restrict: 'EA',
    };

    return directive;
  }
})();
