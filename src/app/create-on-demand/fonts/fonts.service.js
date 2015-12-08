(function() {
  "use strict";

  angular.module("create-on-demand")
  .factory("agFontsService", agFontsService);

  agFontsService.$inject = ["$q"];

  function agFontsService($q) {
    var service = {
      loadFonts: loadFonts
    };

    return service;

    function loadFonts(fonts) {
      console.log('loading fonts');
      var deferred = $q.defer();
      var fontCounter = 0;
      WebFont.load({
        google: {
          families: fonts,
          fontloading: function() {
            console.log('font loaded');
            fontCounter++;
            if (fontCounter == fonts.length) {
              console.log('fonts loaded');
              deferred.resolve();
            }
          },
          fontinactive: function() {
            console.log('fontinactive');
          }
        }
      });
      return deferred.promise;
    }
  }

})();
