import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {PersonCenterPage} from "../person-center/person-center";

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
}
