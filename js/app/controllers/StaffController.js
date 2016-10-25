function StaffController() {
  this.name = 'mark';
  this.email = 'why@gmail.com'
  this.phone =  '1231233333'

}

angular
  .module('app')
  .controller('StaffController', StaffController);
