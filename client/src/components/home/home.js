import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';
import pluginsService from './../plugins/plugins.service';
import 'angularjs-scroll-glue';
let homeModule = angular.module('home', [
  uiRouter,
  'luegg.directives'
])

.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home></home>',
      data: {
        requiresLogin: true
      }
    });
})

.component('home', homeComponent)
.service('pluginsService', pluginsService)
.filter('hasHomebridgePluginName', function () {
    return function (obj) {
      Object.keys(obj).filter(function (propertyName) {
          return propertyName.indexOf("homebridge-") === 0;
      });
    }
})
.filter('isEmpty', function () {
    var bar;
    return function (obj) {
        for (bar in obj) {
            if (obj.hasOwnProperty(bar)) {
                return false;
            }
        }
        return true;
    };
})
;

export default homeModule;
