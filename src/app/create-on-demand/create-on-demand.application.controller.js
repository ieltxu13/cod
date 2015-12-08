(function() {
  "use strict";

  angular.module("create-on-demand")
  .controller("ApplicationController", ApplicationController);

  ApplicationController.$inject = ["$rootScope", "$loading"];

  function ApplicationController($rootScope, $loading) {
    this.initListeners = initListeners;
    this.key = 'app';
    this.initListeners();

    function initListeners() {
      console.log('aoenutreoa');
      $rootScope.$on('stateChangStart', function(event) {
        $loading.start(this.key);
      });

      $rootScope.$on('$stateChangeSuccess', function(event) {
        $loading.finish(this.key);
      });
    }
  }
})();
