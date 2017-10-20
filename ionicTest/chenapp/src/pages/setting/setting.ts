import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LoginPage} from '../login/login';


/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewCtrl: ViewController,
    private storage:Storage


  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  login_out(){
      this.storage.ready().then(()=>{
        this.storage.remove('isLogin');
      });

      this.viewCtrl.dismiss();
      this.navCtrl.push(LoginPage)
  }
}
