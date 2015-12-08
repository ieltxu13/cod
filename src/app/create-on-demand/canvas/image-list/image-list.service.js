(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agImageListService", agImageListService);

  agImageListService.$inject = [];

  function agImageListService() {
    var service = {
      imageList : [],

      getImages : getImages,
      addImage: addImage
    };

    return service;

    function getImages() {
      return service.imageList;
    }

    function addImage(image) {
      service.imageList.push(image);
    }
  }
})();
