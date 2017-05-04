namespace kideventcarpool.Services {

  export class StuentServices {
    private STUDENT_RESOURCE = this.$resource('/api/student/:id');

    constructor(private $resource){}

    public getAll() {
      return this.STUDENT_RESOURCE.query();
    }

    public add(student) {
        return this.STUDENT_RESOURCE.save(student).$promise;
    }

    public update(student) {
        return this.STUDENT_RESOURCE.save({id: student._id}, student).$promise;
    }

    public getOne(Id) {
        return this.STUDENT_RESOURCE.get({id: Id});
    }

    public delete(Id) {
        return this.STUDENT_RESOURCE.delete({id: Id}).$promise;
    }
  }

angular.module('kideventcarpool').service('studentServices', StuentServices);
}
