namespace kideventcarpool.Services {

  export class StudentTeamServices {
    private STUDENTTEAM_RESOURCE = this.$resource('/api/studentteam/:id');

    constructor(private $resource){}

    public add(studentTeam) {
        return this.STUDENTTEAM_RESOURCE.save(studentTeam).$promise;
    }

    public getOne(Id) {
        return this.STUDENTTEAM_RESOURCE.get({id: Id});
    }

    public delete(Id) {
        return this.STUDENTTEAM_RESOURCE.delete({id: Id}).$promise;
    }
  }

angular.module('kideventcarpool').service('studentTeamServices', StudentTeamServices);
}
