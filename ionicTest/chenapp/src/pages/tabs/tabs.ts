import { Component,ViewChild } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {PersonCenterPage} from "../person-center/person-center";
import {PersonalPage} from "../personal/personal";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {


  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = PersonCenterPage;
  //默认选定页
  @ViewChild('rootTabs') tabRef:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
  ) {

  }
  //生命周期，页面一加载
  ionViewDidEnter(){
    //默认选定页
    this.tabRef.select(0)
    //获取用户id
    let id=this.navParams.get('userId'+'userName')
    console.log(id)
  }

  change(){
    // this.tabRef.select(0)
    console.log("this is change")
  }
  person(){
    console.log("这是person")
    let modalPage=this.modalCtrl.create(PersonalPage)
    // //呈现
    modalPage.present()
  }

}
