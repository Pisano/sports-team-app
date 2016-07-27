class TeamDetailController {
  constructor($stateParams, $http) {
    this.$stateParams = $stateParams;
    this.$http = $http;
  }
  $onInit() {
    this.refresh();
    this.newPlayerForm = {name: ''};
  }
  removePlayer(player) {
    let teamUrl = 'http://localhost:3000/players/' + player.id;
    console.log(teamUrl);
    this.$http.delete(teamUrl)
      .then((result) => {
        this.refresh();
      });
  }
  refresh() {
    let teamUrl = 'http://localhost:3000/teams/' + this.$stateParams.id;
    console.log(teamUrl);
    this.$http.get(teamUrl)
      .then((result) => {
        this.teamDetail = result.data;
      });
  }
  addPlayer() {
    let newName = this.newPlayerForm.name;
    let playersUrl = 'http://localhost:3000/players/';
    this.$http.post(playersUrl, {
      name: newName,
      team_id: this.$stateParams.id
    })
    .then((result) => {
      this.newPlayerForm.name = '';
      this.refresh();
    });
  }
}

TeamDetailController.$inject = ['$stateParams', '$http'];

export default TeamDetailController;
