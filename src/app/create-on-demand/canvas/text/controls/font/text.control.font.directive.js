(function(){
  "use strict";

  angular.module("create-on-demand")
  .directive("agTextFont", agTextFontsDirective);

  function agTextFontsDirective() {
    var directive = {
      restrict: "EA",
      templateUrl: "app/create-on-demand/canvas/text/controls/font/text.control.font.template.html",
      scope:{
        text: '='
      },
      controller: "AgTextFontController",
      controllerAs: "AgTextFontController"
    }
    return directive;

  }
})();
