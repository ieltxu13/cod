(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgBackgroundUploadController", AgBackgroundUploadController);

  AgBackgroundUploadController.$inject = ["$scope", "agBackgroundService", "agCanvasService", "fileReader"];

  function AgBackgroundUploadController($scope, agBackgroundService, agCanvasService, fileReader) {
    var controller = this;
    controller.readFile = readFile;
    controller.imageSrc = "";
    controller.imageId = Date.now();
    var reader = new FileReader();

    function readFile(scale) {
      fileReader.readAsDataUrl($scope.file, $scope)
      .then(function(result) {
            controller.imageSrc = result;
            var imageElement = document.getElementById(controller.imageId);
            agBackgroundService.createBackgroundImage({url:result, scale: scale || 1}).then(function(image){
              agCanvasService.canvas.setWidth(image.width * scale);
              agCanvasService.canvas.setHeight(image.height * scale);
              console.log(image);
            });
        });
    }
  }
})();
