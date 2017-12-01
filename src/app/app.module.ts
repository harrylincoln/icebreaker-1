import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { EmailComposer } from '@ionic-native/email-composer';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { HTTP } from '@ionic-native/http';
import { SMS } from '@ionic-native/sms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { PlacePage } from '../pages/place/place';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PlacePage
  ],
  providers: [
    SMS,
    HTTP,
    LocalNotifications,
    EmailComposer,
    Geolocation,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
