import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Suggestions } from '../suggestions/suggestions';

/*
  Generated class for the Dashboard page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})
export class Dashboard {
	

  constructor(public navCtrl: NavController)	 {
  }

  getSuggestions() {
  	this.navCtrl.push(Suggestions);
  }

}