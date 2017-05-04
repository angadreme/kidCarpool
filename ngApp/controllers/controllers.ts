namespace kideventcarpool.Controllers {

    export class HomeController {
        public user;
        public username;
        public password;

        constructor(private userServices, private $state) {}

        public login() {
          console.log('clicked login');
          this.user = this.userServices.login(this.username, this.password, (x) => {
            this.$state.go(this.userServices.pageRedirect(x));
          });

        }


    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
