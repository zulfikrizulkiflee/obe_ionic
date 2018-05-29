import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

import { HomePage } from '../pages/home/home';
import { FeedPage } from '../pages/feed/feed';
import { OrdersPage } from '../pages/orders/orders';
import { NotificationPage } from '../pages/notification/notification';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  users: Observable<any>;

  pages: Array<{icon: string, title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public httpClient: HttpClient) {
    this.initializeApp();

    this.users = this.httpClient.get('http://www.obe-apps.tk/obe_apiv2/GO_USER_PROFILE.php?action=login&user_callsign=obe1&user_password=123&platform=abc');

    // used for an example of ngFor and navigation
    this.pages = [
      { icon: 'home', title: 'Home', component: HomePage },
      { icon: 'paper-plane', title: 'Feed', component: FeedPage },
      { icon: 'basket', title: 'Orders', component: OrdersPage },
      { icon: 'alert', title: 'Notifications', component: NotificationPage },
    ];

  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
