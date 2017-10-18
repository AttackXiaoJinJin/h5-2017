import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import {TabsPage} from "../pages/tabs/tabs";
import {LoginService} from "../service/LoginService";
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html',
  providers:[LoginService]
})
export class MyApp {
  // rootPage:any = TabsPage;
  rootPage:any = LoginPage;
  // isLogin:boolean=false
  isLogin:any
  val:any

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private lg:LoginService,
              private storage: Storage,

              ) {
    platform.ready().then(() => {
      // this.isLogin=lg.login
      // this.isLogin=this.storage.get('isLogin')
      // if(this.isLogin){
      //   this.rootPage=TabsPage
      // }else{
      //   this.rootPage=LoginPage
      // }

      // this.storage.ready().then(()=>{
        this.storage.get('isLogin').then((val)=>{
          console.log(val+"vvvvvvvv")
          if(val){
            this.rootPage=TabsPage
          }else{
            this.rootPage=LoginPage
          }
        })
      // })

      statusBar.styleDefault()
      splashScreen.hide()
    })
  }
}
