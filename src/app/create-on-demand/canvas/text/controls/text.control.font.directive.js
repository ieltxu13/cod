(function(){
  "use strict";

  angular.module("create-on-demand")
  .directive("agTextFonts", agTextFontsDirective);

  function agTextFontsDirective() {
    var directive = {
      restrict: 'EA',
      templateUrl: '',
      scope:{},
      link: link,
    }
  }
})();
