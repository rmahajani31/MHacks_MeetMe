import { Component , ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {Page, Platform} from 'ionic-angular';
import { Dashboard } from '../dashboard/dashboard';
import { Facebook } from 'ionic-native';
import { Welcome } from '../welcome/welcome';
import { MyService } from '../../providers/my-service';

/*
  Generated class for the Suggestions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-suggestions',
  templateUrl: 'suggestions.html',
  providers: [MyService]
})
export class Suggestions {

public chosenFriend = "Hello";
public myFriends = [];

public incomingList : any;

constructor(public navCtrl: NavController, private serviceProvider : MyService) {
this.myFriends = this.serviceProvider.getFriends();
console.log(this.myFriends);
this.chosenFriend = this.myFriends[0][name];
}

  ionViewWillEnter() {
    this.chosenFriend = "Inside will enter";
  }

  ionViewDidUnload() {
/*
make cards disappear?
*/
  }

  logOut() {
    this.client.logout();
    this.navCtrl.push(Welcome);
  }

}
