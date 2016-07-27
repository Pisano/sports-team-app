import appTemplate from 'text!app.html';

class AppController {
  constructor($state) {
    this.$state = $state;
  }
  $onInit() {
    this.header = "Fantasy Football";
  }
  isState(stateName) {
    return this.$state.current.name == stateName;
  }
}

AppController.$inject = ['$state'];

const AppComponent = {
  controller: AppController,
  template: appTemplate
};

export default AppComponent;
