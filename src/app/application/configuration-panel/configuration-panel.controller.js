(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgConfigurationPanelController", AgConfigurationPanelController);

  AgConfigurationPanelController.$inject = ["$scope", "agCanvasService", "agTextListService"];

  function AgConfigurationPanelController($scope, agCanvasService, agTextListService) {
    var vm = this
    vm.selectedText = null;
    agCanvasService.canvas.on("object:selected", function(event) {
      var object = event.target;
      if(object.type == 'i-text') {
        agTextListService.setSelectedText(object);
        vm.selectedText = object;
        $scope.$apply();
      }
    });
    //this.selectedText = agTextListService.getSelectedText();

  }
})();
