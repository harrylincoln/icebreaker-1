import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { EmailComposer } from '@ionic-native/email-composer';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HTTP } from '@ionic-native/http';

import { LoginPage } from '../login/login';
import { PlacePage } from '../place/place';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public doubletestVar: any;
    public samples: any;
    public location: any;
    public image: any;
    public username: any;

  constructor(
    public navParams: NavParams,
  	public navCtrl: NavController, 
  	private geolocation: Geolocation,
    private emailComposer: EmailComposer,
    private localNotifications: LocalNotifications,
    private http: HTTP

    
    ) {
    

    let usernameVar = navParams.get('username');

    console.log(usernameVar);

    this.username = usernameVar;


  }

  test() {

//     let watch = this.geolocation.watchPosition();
// watch.subscribe((data) => {
//  // data can be a set of coordinates, or an error (if an error occurred).
//  // data.coords.latitude
//  // data.coords.longitude
//  console.log(data.coords.latitude);

//  this.location = data;

// });

    this.geolocation.getCurrentPosition()
      .then(
        (location) => {
          console.log('lat: ' + location.coords.latitude + ', lon: ' + location.coords.longitude);
          this.location = location;
        }
        
      );
  }

  doubletest() {
    this.doubletestVar = 'location';


    this.http.get('http://ionicframework.com/', {}, {})
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


    this.localNotifications.schedule({
      title: "Hello",
      at: new Date(new Date().getTime() + 3600),
      led: 'FF0000',
      data: { mydata: 'My hidden message this is' },
      text: 'Single ILocalNotification'
    });


  }

  loadLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  loadPlacePage(id, name, image) {
    console.log(id);
    this.navCtrl.push(PlacePage, {
      id: id,
      name: name,
      image: image
    });
  }

doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.test();
      this.onOpenPlace();
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
    

  onOpenPlace(){



      this.samples = [
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"},
{"id": 1, "name": "Adrian", "interests": "Medicine", "image": "http://lorempixel.com/100/100/people/"},
{"id": 2, "name": "Adrian2", "interests": "Medicine2", "image": "http://lorempixel.com/100/100/people/"}
]  
    
    
  }

}
