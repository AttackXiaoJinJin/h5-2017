import { Component } from '@angular/core';
//NavController,NavParams是跳转用的
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {App,ViewController} from "ionic-angular";
import {LoginService} from "../../service/LoginService";

import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[LoginService]
})
export class LoginPage {
  // isLogin:boolean=false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public app: App,
    private lg:LoginService,
    private storage: Storage,cd
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login(){
    // let toast = this.toastCtrl.create({
    //   message: 'User was added successfully',
    //   duration: 3000
    // });
    // toast.present();
    // this.isLogin=true;
    // this.lg.login = this.isLogin;
    this.storage.ready().then(()=> {
      this.storage.set('isLogin', true);
    })
    this.navCtrl.push(TabsPage,{userId:'001',userName:'chen'})
    // this.viewCtrl.dismiss()
    // this.app.getRootNav().push(TabsPage)

  }

}
