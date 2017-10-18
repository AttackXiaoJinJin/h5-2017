import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {TabsPage} from "../pages/tabs/tabs";
import {LoginService} from "../service/LoginService";

@Component({
  templateUrl: 'app.html',
  providers:[LoginService]
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage:any = LoginPage;
  isLogin:boolean=false

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private lg:LoginService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.isLogin=lg.login
      if(this.isLogin){
        this.rootPage=TabsPage
      }else{
        this.rootPage=LoginPage
      }

      statusBar.styleDefault()
      splashScreen.hide()
    })
  }
}
