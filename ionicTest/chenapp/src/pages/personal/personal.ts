import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {SettingPage} from "../setting/setting";


@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl: ViewController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }

  back(){
    //销毁之前的视图
    this.viewCtrl.dismiss()
    //然后跳转
    this.navCtrl.push(TabsPage)
  }
  setting(){
    this.navCtrl.push(SettingPage)

  }

}
