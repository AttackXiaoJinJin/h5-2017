import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {PersonalPage} from "../personal/personal";


// @IonicPage()
@Component({
  selector: 'page-person-center',
  templateUrl: 'person-center.html',
})
export class PersonCenterPage {

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              ) {
  }

  ionViewDidLoad() {
    console.log('这是个人中心页面');
  }

  ionViewWillEnter(){
    // this.navCtrl.push(PersonalPage)


  }



}
