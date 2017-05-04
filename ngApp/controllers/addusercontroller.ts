namespace kideventcarpool.Controllers {

  export class AddUserController {
    private displayedAccessLevel = [];
    private newUser = {
      userName: '',
      firstName: '',
      lastName: '',
      password: '',
      email: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: null,
      phone: null,
      accessLevel: null,
      organizationID: ''
    };

    constructor (organization, private userServices, private $uibModalInstance) {
      this.newUser.organizationID = organization._id;
      this.displayedAccessLevel = userServices.grantedAccessLevel;
    }

    public addUser() {
      console.log(this.newUser);
      this.userServices.add({
        userName: this.newUser.email,
        firstName: this.newUser.firstName,
        lastName: this.newUser.lastName,
        password: this.newUser.password,
        email: this.newUser.email,
        address: this.newUser.address,
        address2: this.newUser.address2,
        city: this.newUser.city,
        state: this.newUser.state,
        zip: this.newUser.zip,
        phone: this.newUser.phone,
        accessLevel: this.newUser.accessLevel,
        organizationID: this.newUser.organizationID
      }).then(() => {this.ok()});
    }

    public ok() {
            this.$uibModalInstance.close();
        }

  }

}
