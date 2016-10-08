import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Page, Platform} from 'ionic-angular';
import { Dashboard } from '../dashboard/dashboard';

/*
  Generated class for the Suggestions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-suggestions',
  templateUrl: 'suggestions.html'
})
export class Suggestions {

	static get parameters() {
		return [[Platform]];
	}

  constructor(public navCtrl: NavController, platform) {
  	this.platform = platform;
  }

  launch(url) {
  		window.open(url,"_system", "location=true");
  }

}
