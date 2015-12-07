(function() {
  "use strict";

  angular.module("create-on-demand")
  .directive("agNewText", agNewText);

  agNewText.$inject = ['agTextService','agTextListService'];

  function agNewText(agTextService, agTextListService) {
    var directive = {
      scope: {
        value: '@',
        font: '@',
        fontWeight: '@',
        color: '@'
      },
      restrict: 'EA',
      templateUrl: 'app/create-on-demand/canvas/text/new-text.template.html',
      controller: AgNewTextController,
      controllerAs: 'AgNewTextController'
    };

    return directive;

    function AgNewTextController() {

      this.createText = createText;
      var scope = this;
      function createText() {
        var opts = {
          text: scope.value,
          font: scope.font,
          fontWeight: scope.fontWeight,
          color: scope.color,
        }
        agTextListService.addText(agTextService.createText(opts));
        scope.value = "";
      }
    }

  }
})();
