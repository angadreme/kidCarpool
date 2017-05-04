// namespace kideventcarpool.Services {
//
//   export class WorkingService {
//     private USER_RESOURCE = this.$resource('/api/users/:id');
//     private EVENT_RESOURCE = this.$resource('/api/events/:id');
//     private CHILD_RESOURCE = this.$resource('/api/children/:id');
//     private TEAM_ROUSOURCE = this.$resource('/api/teams/:id');
//     private USERCHILD_RESOURCE = this.$resource('/api/userchildren/:id');
//     private CHILDTEAM_RESOURCE = this.$resource('/api/childteams/:id');
//
//     constructor(private $resource){}
//
//     public getAll(whichResource) {
//       switch (whichResource) {
//         case "USER_RESOURCE":
//           return this.USER_RESOURCE.query();
//         case "EVENT_RESOURCE":
//           return this.EVENT_RESOURCE.query();
//         case "CHILD_RESOURCE":
//           return this.CHILD_RESOURCE.query();
//         case "TEAM_ROUSOURCE":
//           return this.TEAM_ROUSOURCE.query();
//       }
//     }
//
//     public add(whichResource, whichModel) {
//       switch (whichResource) {
//         case "USER_RESOURCE":
//           return this.USER_RESOURCE.save(whichModel).$promise;
//         case "EVENT_RESOURCE":
//           return this.EVENT_RESOURCE.save(whichModel).$promise;
//         case "CHILD_RESOURCE":
//           return this.CHILD_RESOURCE.save(whichModel).$promise;
//         case "TEAM_ROUSOURCE":
//           return this.TEAM_ROUSOURCE.save(whichModel).$promise;
//         case "USERCHILD_RESOURCE":
//           return this.USERCHILD_RESOURCE.save(whichModel).$promise;
//         case "CHILDTEAM_RESOURCE":
//           return this.CHILDTEAM_RESOURCE.save(whichModel).$promise;
//       }
//     }
//
//     public update(whichResource, whichModel) {
//       switch (whichResource) {
//         case "USER_RESOURCE":
//           return this.USER_RESOURCE.save({id: whichModel._id}, whichModel).$promise;
//         case "EVENT_RESOURCE":
//           return this.EVENT_RESOURCE.save({id: whichModel._id}, whichModel).$promise;
//         case "CHILD_RESOURCE":
//           return this.CHILD_RESOURCE.save({id: whichModel._id}, whichModel).$promise;
//         case "TEAM_ROUSOURCE":
//           return this.TEAM_ROUSOURCE.save({id: whichModel._id}, whichModel).$promise;
//       }
//     }
//
//     public getOne(whichResource, whichID) {
//       switch (whichResource) {
//         case "USER_RESOURCE":
//           return this.USER_RESOURCE.get({id: whichID});
//         case "EVENT_RESOURCE":
//           return this.EVENT_RESOURCE.get({id: whichID});
//         case "CHILD_RESOURCE":
//           return this.CHILD_RESOURCE.get({id: whichID});
//         case "TEAM_ROUSOURCE":
//           return this.TEAM_ROUSOURCE.get({id: whichID});
//         case "USERCHILD_RESOURCE":
//           return this.USERCHILD_RESOURCE.get({id: whichID});
//         case "CHILDTEAM_RESOURCE":
//           return this.CHILDTEAM_RESOURCE.get({id: whichID});
//       }
//     }
//
//     public delete(whichResource, whichID) {
//       switch (whichResource) {
//         case "USER_RESOURCE":
//           return this.USER_RESOURCE.delete({id: whichID}).$promise;
//         case "EVENT_RESOURCE":
//           return this.EVENT_RESOURCE.delete({id: whichID}).$promise;
//         case "CHILD_RESOURCE":
//           return this.CHILD_RESOURCE.delete({id: whichID}).$promise;
//         case "TEAM_ROUSOURCE":
//           return this.TEAM_ROUSOURCE.delete({id: whichID}).$promise;
//         case "USERCHILD_RESOURCE":
//           return this.USERCHILD_RESOURCE.delete({id: whichID}).$promise;
//         case "CHILDTEAM_RESOURCE":
//           return this.CHILDTEAM_RESOURCE.delete({id: whichID}).$promise;
//       }
//     }
//   }
//
// angular.module('kideventcarpool').service('workingService', WorkingService);
// }
