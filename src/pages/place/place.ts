import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';
import { SMS } from '@ionic-native/sms';
import { LocalNotifications } from '@ionic-native/local-notifications';


/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
	public id: any;
	public name: any;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	private emailComposer: EmailComposer,
    private sms: SMS,
    private plt: Platform,
    private localNotifications: LocalNotifications, 
    alertCtrl: AlertController
  	) {
 
  	 let idvar = navParams.get('id');
     let namevar = navParams.get('name');

     this.id = idvar;
     this.name = namevar;

     console.log(namevar);


     this.plt.ready().then((readySource) => {
        this.localNotifications.on('click', (notification, state) => {
          let json = JSON.parse(notification.data);
     
          let alert = alertCtrl.create({
            title: notification.title,
            subTitle: json.mydata
          });
          alert.present();
        })
      });

 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacePage');
  }


  sendEmail() {

    let email = {
      to: 'max@mustermann.de',
      cc: 'erika@mustermann.de',
      bcc: ['john@doe.com', 'jane@doe.com'],
      attachments: [
        'file://img/logo.png',
        'res://icon.png',
        'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
        'file://README.pdf'
      ],
      subject: 'Cordova Icons',
      body: 'How are you? Nice greetings from Leipzig',
      isHtml: true
    };

    // Send a text message using default options
    this.emailComposer.open(email);
  }

  sendSMS() {
    this.sms.send('+447428722845', 'Hey! Fancy meeting up?');
  }

}
