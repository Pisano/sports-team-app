import angular from 'angular';
import AppComponent from './app.component';

const root = angular
  .module('sportsApp', [
  ])
  .component('app', AppComponent)
  .name;

export default root;
