(function(){
  "use strict";

  angular.module("create-on-demand")
  .directive("colorPicker", colorPicker);

  function colorPicker() {
    var directive = {
      link: link,
      restrict: 'EA',
      scope: {},
      template: "<input type='text' id='{{id}}'>"
    };

    return directive;

    function link(scope, element, attrs) {
      scope.id = Date.now();

      $(element).spectrum({color: "#f00"});
    }
  }
})();
