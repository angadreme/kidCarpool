namespace kideventcarpool.Services {

  export class EventServices {
    private EVENT_RESOURCE = this.$resource('/api/events/:id');

    constructor(private $resource){}

    public getAll() {
      return this.EVENT_RESOURCE.query();
    }

    public add(event) {
      return this.EVENT_RESOURCE.save(event).$promise;
    }

    public update(event) {
      return this.EVENT_RESOURCE.save({id: event._id}, event).$promise;
    }


    public getOne(Id) {
      return this.EVENT_RESOURCE.get({id: Id});
    }

    public delete(Id) {
      return this.EVENT_RESOURCE.delete({id: Id}).$promise;
    }

  }

angular.module('kideventcarpool').service('eventServices', EventServices);
}
