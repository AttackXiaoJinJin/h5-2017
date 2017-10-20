import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import {PersonalPage} from '../personal/personal';

/**
 * Generated class for the MePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl:ModalController
  ) {
    console.log('ionViewDidLoad MePage');
    const modelPage=this.modalCtrl.create(PersonalPage);
    modelPage.present();
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter(){

  }

}
