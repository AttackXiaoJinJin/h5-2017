import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {Storage} from "@ionic/storage";

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public storage: Storage,

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  loginout(){
    this.storage.ready().then(()=>{

      this.storage.remove('isLogin')
      //清空所有
      // this.storage.clear()
    })
    this.viewCtrl.dismiss()
    this.navCtrl.push(LoginPage)

  }



}


