(function(){
  "use strict";
  angular.module("create-on-demand")
  .directive("fileInput", fileInput);

  function fileInput($parse) {
    var directive = {
      restrict: "EA",
      template: "<input type='file' />",
      replace: true,
      link: link
    };
    return directive;

    function link(scope, element, attrs) {
      var modelGet = $parse(attrs.fileInput);
      var modelSet = modelGet.assign;
      var onChange = $parse(attrs.onChange);

      var updateModel = function () {
        scope.$apply(function () {
          modelSet(scope, element[0].files[0]);
          onChange(scope);
        });
      };

      element.bind('change', updateModel);
    }
  }
})();
