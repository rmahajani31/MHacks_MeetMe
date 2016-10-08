import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { login } from 'ng-cordova.plugins.facebook';

/*
  Generated class for the Welcome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class Welcome {

  constructor(public navCtrl: NavController) {}



   openLogin() {
   $cordovaFacebook.login(["public_profile", "email"]).then(function(success){

   console.log(success);

 }, function(error){
   console.log(error);
 });
  }

}
