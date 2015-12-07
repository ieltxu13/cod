(function() {
  "use strict"

  angular.module("create-on-demand")
  .directive("agCanvas", agCanvasDirective);

  agCanvasDirective.$inject = ['agCanvasService']

  function agCanvasDirective(agCanvasService){
    var directive = {
      restrict: 'EA',
      scope: {
        width: '@',
        height: '@'
      },
      template: '<canvas id="ag-canvas"></canvas>',
      controller: 'AgCanvasController',
      controllerAs: 'AgCanvasController'
    };

    return directive;

  }
})();
