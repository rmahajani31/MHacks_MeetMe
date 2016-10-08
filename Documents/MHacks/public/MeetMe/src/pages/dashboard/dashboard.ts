import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
	
	searchQuery: string = '';
	items: string[];

  constructor(public navCtrl: NavController)	 {
  	this.initializeItems();
  }

  initializeItems() {
  	this.items = [
  		'Arwin',
  		'Alon',
  		'Rashabh'
  	];
  }

  getItems(ev: any) {
  	this.initializeItems();
  	let val = ev.target.value;
  	if (val && val.trim() != '') {
  		this.items = this.items.filter((item) => {
  			return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  		})
  	}
  }

  getSuggestions() {

  }

}