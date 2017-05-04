namespace kideventcarpool.Services {

  export class TeamServices {
    private TEAM_RESOURCE = this.$resource('/api/teams/:id');

    constructor(private $resource){}

    public getAll() {
        return this.TEAM_RESOURCE.query();
    }

    public add(team) {
        return this.TEAM_RESOURCE.save(team).$promise;
    }

    public update(team) {
        return this.TEAM_RESOURCE.save({id: team._id}, team).$promise;
    }

    public getOne(Id) {
        return this.TEAM_RESOURCE.get({id: Id});
    }

    public delete(Id) {
        return this.TEAM_RESOURCE.delete({id: Id}).$promise;
    }

    public getTeamsByOrgID(orgID){
        return this.TEAM_RESOURCE.query({id: orgID});
    }
  }

angular.module('kideventcarpool').service('teamServices', TeamServices);
}
