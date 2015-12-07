(function(){
  "use strict";

  angular.module("create-on-demand")
  .directive("agTextColor", agTextFontsDirective);

  function agTextFontsDirective() {
    var directive = {
      restrict: "EA",
      templateUrl: "app/create-on-demand/canvas/text/controls/color/text.control.color.template.html",
      scope:{
        text: '='
      },
      controller: "AgTextColorController",
      controllerAs: "AgTextColorController"
    }
    return directive;

  }
})();
