(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgImageUploadController", AgImageUploadController);

  AgImageUploadController.$inject = ["$scope", "agImageService", "agImageListService", "fileReader"];

  function AgImageUploadController($scope, agImageService, agImageListService, fileReader) {

    var controller = this;
    controller.readFile = readFile;
    controller.imageSrc = "";
    controller.imageId = Date.now();
    var reader = new FileReader();

    function readFile() {
      fileReader.readAsDataUrl($scope.file, $scope)
      .then(function(result) {
            controller.imageSrc = result;
            var imageElement = document.getElementById(controller.imageId);
            agImageService.createImage({url:result}).then(function(image){
              agImageListService.addImage(image);
              console.log(image);
            });
            console.log(result);
        });
    }
  }
})();
