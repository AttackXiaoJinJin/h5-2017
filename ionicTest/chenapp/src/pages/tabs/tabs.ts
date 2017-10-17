import { Component,ViewChild } from '@angular/core';

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
  constructor() {

  }
  //默认选定页
  ionViewDidEnter(){
    this.tabRef.select(2)
  }
}
