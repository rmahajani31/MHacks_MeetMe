import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Suggestions Page');
  }

}
