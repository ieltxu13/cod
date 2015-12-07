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
      agCanvasService.canvas = canvas;
      var width = scope.width  || 300;
      var height = scope.height  || 300;
      canvas.setWidth(width);
      canvas.setHeight(height);
      var backgroundImage = new fabric.Image.fromURL('resources/AG1052-FRONT-picture-Image_0004.png',function(oImg){
        console.log(oImg);
        canvas.setBackgroundImage(oImg,
        function() {
          canvas.renderAll();
        });
      },{'left':0,'top':0, 'scaleX': 0.5, 'scaleY': 0.5});
    }
  }
})();
