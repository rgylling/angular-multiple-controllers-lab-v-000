function ContactController() {
  var vm = this;
  this.name = "Mike"
  this.email = 'hello@gmail.com'
  this.phone =  '9998887777'

  this.changeName = function () {
    vm.name = 'Something else!'
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);
