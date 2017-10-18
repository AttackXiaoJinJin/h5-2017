import { Component } from '@angular/core';
import {NavController, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    ) {

  }

  back(){
    //后退，但不销毁
    this.navCtrl.pop();
  }
  close(){
    //关闭（销毁）当前页面
    this.viewCtrl.dismiss({"newName":"juan"})
  }

}
