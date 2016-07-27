class TeamDetailController {
  constructor($stateParams, $http) {
    this.$stateParams = $stateParams;
    this.$http = $http;
  }
  $onInit() {
    this.text = 'Testing' + this.$stateParams.id;
    let teamUrl = 'http://localhost:3000/teams/' + this.$stateParams.id;
    console.log(teamUrl);
    this.$http.get(teamUrl)
      .then((result) => {
        this.teamDetail = result.data;
      });

  }
}

TeamDetailController.$inject = ['$stateParams', '$http'];

export default TeamDetailController;
