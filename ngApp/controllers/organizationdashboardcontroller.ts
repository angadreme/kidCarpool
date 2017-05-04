namespace kideventcarpool.Controllers {

  export class OrganizationDashboardController {
    private Organization;
    private users;
    private Modal;
    private Teams;
    private displayedAccessLevel = [];

    constructor(private userServices, private $stateParams, private organizationServices, private $uibModal, private teamServices){
      this.displayedAccessLevel = userServices.grantedAccessLevel;
      organizationServices.getOne($stateParams.id).then((data) => {
        this.Organization = data;
        this.listUsers();
        this.listTeams();
      });
    }

    public listUsers() {
      this.users = this.userServices.getUsersByOrgID(this.Organization._id);
    }

    public listTeams(){
      this.Teams = this.teamServices.getTeamsByOrgID(this.Organization._id);
    }

    public addUserModal(organization) {
      this.Modal = this.$uibModal.open({
        templateUrl: '/ngApp/views/addUserModal.html',
        controller: kideventcarpool.Controllers.AddUserController,
        controllerAs: 'controller',
        size: 'sm',
        resolve: {
          organization: () => organization
        }
      });

      this.Modal.closed.then( () => {
        this.listUsers()
      });
    }

  }

}
