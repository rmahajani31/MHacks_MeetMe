import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the MyService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class MyService {

  constructor(public http: Http) {

  }

  getFriends(friends : JSON) {
    let requestOriginal = "http://graph.facebook.com/v2.8/";
    let request = requestOriginal +"me/friends";
    return this.http.get(request).toPromise().then(this.extractData);
  }

  extractData(res : Response) {
    return res.json();
  }

}
