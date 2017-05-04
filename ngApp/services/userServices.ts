namespace kideventcarpool.Services {

  export class UserServices {
    private USER_RESOURCE;
    private ORG_RESOURCE;
    private userData;
    private grantedAccessLevel = [
      {level: 5, display: "Super Me"},
      {level: 4, display: "Help Desk"},
      {level: 3, display: "Administrator"},
      {level: 2, display: "Coach/teacher"},
      {level: 1, display: "User"}
    ]

    constructor(private $resource, private $window, private $state, private $uibModal) {
      this.USER_RESOURCE = $resource('/api/users/:id');
      this.ORG_RESOURCE = $resource('/api/users/organizations/:id/users')
    }

    public login(username, password, callback) {
      this.USER_RESOURCE.save({id: 'login'}, {username: username, password: password}).$promise
        .then((data) => {
          this.userData = data;
          if(data._id) {
            this.$window.sessionStorage.setItem('token', data._id);
          }
          if(data.accessLevel) {
            this.$window.sessionStorage.setItem('accessLevel', data.accessLevel);
          }
          callback(data);
        })
    }

    public pageRedirect(user) {
      switch(user.accessLevel) {
        case 5:
          this.$state.go('SuperDashBoard');
          break;
        case 4:
          break;
        case 3:
          this.$state.go('organizationDashboard', {id: user.organizationID})
          break;
        case 2:
          break;
        case 1:
          if(user.firstLogin) {
          this.$uibModal.open({
            templateUrl: '/ngApp/views/firstTimeUserModal.html',
            controller: kideventcarpool.Controllers.firstTimeUserController,
            controllerAs: 'controller',
            resolve: {
              user: () => user
            },
            size: 'sm'
          });
          }
          this.$state.go('ParentDashboard');
          break;
        default:
          alert('Please login');
          this.$state.go('home');
          break;
      }
    }

    public getUserData() {
      return this.userData;
    }

    public getAll() {
        return this.USER_RESOURCE.query();
    }

    public add(user) {
        return this.USER_RESOURCE.save(user).$promise;
    }

    public update(user) {
        return this.USER_RESOURCE.save({id: user._id}, user).$promise;
    }

    public getOne(Id) {
        return this.USER_RESOURCE.get({id: Id});
    }

    public delete(Id) {
        return this.USER_RESOURCE.delete({id: Id}).$promise;
    }

    public getUsersByOrgID(orgID){
        return this.ORG_RESOURCE.query({id: orgID});
    }
  }

angular.module('kideventcarpool').service('userServices', UserServices);
}
