(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("AgTemplateCatalogController", AgTemplateCatalogController);

  AgTemplateCatalogController.$inject = ["templates"]
  function AgTemplateCatalogController(templates) {

    this.templates = templates

  }
})();
