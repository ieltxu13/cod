(function() {
  "use strict"

  angular.module("create-on-demand")
  .directive("agCanvasSettings", agCanvasSettingsDirective);

  agCanvasSettingsDirective.$inject = ['agCanvasService']

  function agCanvasSettingsDirective(agCanvasService){
    var directive = {
      templateUrl: 'app/create-on-demand/canvas/canvas-settings.template.html',
      restrict: 'EA'
    };

    return directive;

  }
})();
