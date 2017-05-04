namespace kideventcarpool.Controllers {

    export class SuperDashBoardController {
      private users;
      private organizations;
      private OrgHalf1 = [];
      private OrgHalf2 = [];
      private newOrg = {
        organizationName: "",
        Logo: ""
      };
      private dummyOrg = {
        _id: '0001',
        organizationName: 'Help Desk People',
        Logo: ""
      }
      private Modal;
      private orgID = '0001';


      constructor (private userServices, private $uibModal, private organizationServices, private $state) {
        this.listUsers();
        this.listOrganizations();
      }

      public listUsers() {
        //this.users = this.userServices.getAll();
        this.users = this.userServices.getUsersByOrgID('0001');
      }

      public listOrganizations(){
        this.organizationServices.getAll()
          .$promise.then((data) => {
            this.organizations = data;
            for(let i in data){
              if(data[i].organizationName)
              {
                if(parseInt(i) % 2 != 0){
                  this.OrgHalf2.push(data[i]);
                }else{
                  this.OrgHalf1.push(data[i]);
                }
              }
            }
          });
      }

      public addUserModal(organization) {
        this.Modal = this.$uibModal.open({
          templateUrl: '/ngApp/views/addUserModal.html',
          controller: kideventcarpool.Controllers.AddUserController,
          controllerAs: 'controller',
          resolve: {
            organization: () => organization
          },
          size: 'sm'
        });

        this.Modal.closed.then( () => {
          this.listUsers()
        });
      }

      public addOrg() {
        this.organizationServices.add({organizationName: this.newOrg.organizationName, Logo: this.newOrg.Logo})
          .then(() => this.listOrganizations());
        this.newOrg.organizationName = "";
        this.newOrg.Logo = "";
      }

      public editUserModal(user) {
        this.Modal = this.$uibModal.open({
        templateUrl: '/ngApp/views/editUserModal.html',
        controller: kideventcarpool.Controllers.EditUserController,
        controllerAs: 'controller',
        resolve: {
          user: () => user
        },
        size: 'sm'
        });

        this.Modal.closed.then( () => {
          this.listUsers()
        });
      }

      public deleteUser(id) {
        this.userServices.delete(id).then(this.listUsers());
      }

      public redirectOrgPage(orgID) {
        console.log(orgID);
        this.$state.go('organizationDashboard', {id: orgID});
      }


    }

}
