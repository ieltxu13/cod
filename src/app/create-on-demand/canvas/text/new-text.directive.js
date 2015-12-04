(function() {
  "use strict";

  angular.module("create-on-demand")
  .directive("agNewText", agNewText);

  agNewText.$inject = ['agTextService','agTextListService'];

  function agNewText(agTextService, agTextListService) {
    var directive = {
      scope: {
        value: '@'
      },
      restrict: 'EA',
      template: '<input type="text" ng-model="value"/><button ng-click="AgNewTextController.createText(value)">New Text</button>',
      controller: AgNewTextController,
      controllerAs: 'AgNewTextController'
    //  templateUrl: 'agg/create-on-demand/canvas/text/new-text.template.html'

    };

    return directive;

    function AgNewTextController() {

      this.createText = createText;

      function createText(value) {
        var opts = {
          text: value
        }
        agTextListService.addText(agTextService.createText(opts));
        value = "";
      }
    }

  }
})();
