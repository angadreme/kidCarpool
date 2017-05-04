namespace kideventcarpool.Services {

  export class UserTeamServices {
    private USERTEAM_RESOURCE = this.$resource('/api/userteam/:id');

    constructor(private $resource){}

    public add(whichResource, whichModel) {
        return this.USERTEAM_RESOURCE.save(whichModel).$promise;
    }

    public getOne(whichResource, whichID) {
        return this.USERTEAM_RESOURCE.get({id: whichID});
    }

    public delete(whichResource, whichID) {
        return this.USERTEAM_RESOURCE.delete({id: whichID}).$promise;
    }
  }

angular.module('kideventcarpool').service('userTeamServices', UserTeamServices);
}
