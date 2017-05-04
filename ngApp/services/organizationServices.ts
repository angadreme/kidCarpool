namespace kideventcarpool.Services {

  export class OrganizationServices {
    private ORGANIZATION_RESOURCE;

    constructor(private $resource){
      this.ORGANIZATION_RESOURCE = $resource('/api/orgainizations/:id');
    }

    public getAll() {
        return this.ORGANIZATION_RESOURCE.query();
    }

    public add(organization) {
        return this.ORGANIZATION_RESOURCE.save(organization).$promise;
    }

    public update(organization) {
        return this.ORGANIZATION_RESOURCE.save({id: organization._id}, organization).$promise;
    }

    public getOne(Id) {
        return this.ORGANIZATION_RESOURCE.get({id: Id}).$promise;
    }

    public delete(Id) {
        return this.ORGANIZATION_RESOURCE.delete({id: Id}).$promise;
    }
  }

angular.module('kideventcarpool').service('organizationServices', OrganizationServices);
}
