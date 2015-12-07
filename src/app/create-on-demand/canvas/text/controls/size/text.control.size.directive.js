(function(){
  "use strict";

  angular.module("create-on-demand")
  .directive("agTextSize", agTextFontsDirective);

  function agTextFontsDirective() {
    var directive = {
      restrict: "EA",
      templateUrl: "app/create-on-demand/canvas/text/controls/size/text.control.size.template.html",
      scope:{
        text: '='
      },
      controller: "AgTextSizeController",
      controllerAs: "AgTextSizeController"
    }
    return directive;

  }
})();
