import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	public username: any;
	public password: any;


  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	private http: HTTP
  	) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  loadHomePage() {


  	this.http.get('http://ionicframework.com/?username='+this.username+'&password='+this.password, {}, {})
      .then(data => {

        console.log(data.status);
        console.log(data.data); // data received by server
        console.log(data.headers);

      })
      .catch(error => {

        console.log(error.status);
        console.log(error.error); // error message as string
        console.log(error.headers);

      });


    this.navCtrl.push(HomePage, {
      username: this.username
    });


  }

}
