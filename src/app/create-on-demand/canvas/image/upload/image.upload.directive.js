(function() {
  "use strict";

  angular.module("create-on-demand")
  .directive("agImageUpload", agImageUploadDirective);

  function agImageUploadDirective() {
    var directive = {
      restrict: "EA",
      templateUrl: "app/create-on-demand/canvas/image/upload/image.upload.template.html",
      controller: "AgImageUploadController",
      controllerAs: "AgImageUploadController"
    };

    return directive;
  }
})();
