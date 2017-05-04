namespace kideventcarpool.Services {

  export class StudentUserServices {
    private CHILDTEAM_RESOURCE = this.$resource('/api/childteams/:id');

    constructor(private $resource){}

    public add(studentUser) {
        return this.CHILDTEAM_RESOURCE.save(studentUser).$promise;
    }

    public getOne(Id) {
        return this.CHILDTEAM_RESOURCE.get({id: Id});
    }

    public delete(Id) {
        return this.CHILDTEAM_RESOURCE.delete({id: Id}).$promise;
    }
  }

angular.module('kideventcarpool').service('studentUserServices', StudentUserServices);
}
