import 'bootstrap/dist/css/bootstrap.css';
import 'app.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Home from './home';

const root = angular
  .module('sportsApp', [
    Home,
    uiRouter
  ])
  .config(($locationProvider, $urlRouterProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $urlRouterProvider.otherwise('/');
  })
  .component('app', AppComponent)
  .name;

export default root;
