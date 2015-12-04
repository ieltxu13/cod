(function() {
  "use strict";

  angular.module("create-on-demand")
  .directive("agText", agTextDirective);

  agTextDirective.$inject = ['agTextService'];

  function agTextDirective(agTextService) {
    var directive = {
      restrict: 'EA',
      scope: {
        text: '=',
      },
      templateUrl: 'app/create-on-demand/canvas/text/text.template.html'
    };

    return directive;
  }
})();
