namespace kideventcarpool.Controllers {

  export class EditUserController {
    private user;
    private displayedAccessLevel = [];

    constructor (user, private userServices, private $uibModalInstance) {
      this.user = userServices.getOne(user._id);
      this.displayedAccessLevel = userServices.grantedAccessLevel;
    }

    public editUser() {
      this.userServices.update({
        _id: this.user._id,
        userName: this.user.userName,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        password: this.user.password,
        email: this.user.email,
        address: this.user.address,
        address2: this.user.address2,
        city: this.user.city,
        state: this.user.state,
        zip: this.user.zip,
        phone: this.user.phone,
        accessLevel: this.user.accessLevel,
        organizationID: this.user.organizationID,
        teamID: this.user.teamID,
        enabled: this.user.enabled,
        firstLogin: this.user.firstLogin
      }).then(() => {this.ok()});
    }

    public ok() {
      this.$uibModalInstance.close();
    }

  }

}
