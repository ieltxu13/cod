(function() {
  "use strict";

  angular.module("create-on-demand")
  .directive("agBackgroundUpload", agBackgroundUploadDirective);

  function agBackgroundUploadDirective() {
    var directive = {
      restrict: "EA",
      scope: {
        scale: '@'
      },
      templateUrl: "app/create-on-demand/canvas/background/upload/background.upload.template.html",
      controller: "AgBackgroundUploadController",
      controllerAs: "AgBackgroundUploadController"
    };

    return directive;
  }
})();
