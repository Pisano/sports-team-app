class TeamsController {
  constructor($http) {
    this.$http = $http;
  }
  $onInit() {
    this.header = 'Teams!';
    this.teams = [
      { name: 'Our Team 4' },
    ]
    this.$http.get('http://localhost:3000/teams')
      .then((result) => {
        this.teams = result.data;
      });
  }
}

TeamsController.$inject = ['$http'];

export default TeamsController;
