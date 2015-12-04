(function() {
  "use strict"

  angular.module("create-on-demand")
  .directive("agCanvas", agCanvasDirective);

  agCanvasDirective.$inject = ['agCanvasService']

  function agCanvasDirective(agCanvasService){
    var directive = {
      link: link,
      scope: {
        width: '@',
        height: '@'
      },
      template: '<canvas id="ag-canvas"></canvas>',
      restrict: 'EA'
    };

    return directive;

    function link(scope, element, attrs) {
      var canvas = new fabric.Canvas('ag-canvas');
      var width = scope.width  || 300;
      var height = scope.height  || 300;
      canvas.setWidth(width);
      canvas.setHeight(height);
      canvas.setBackgroundColor("#d0d0d0")
      canvas.renderAll();
      agCanvasService.canvas = canvas;
    }
  }
})();
