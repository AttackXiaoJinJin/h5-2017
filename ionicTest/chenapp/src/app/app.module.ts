import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MePage} from '../pages/me/me';
import {LoginPage} from '../pages/login/login';
import {PostDetailPage} from '../pages/post-detail/post-detail';
import {PersonalPage} from '../pages/personal/personal';
import {SettingPage} from '../pages/setting/setting';
import { IonicStorageModule } from '@ionic/storage';


//service
import {HttpClientModule} from '@angular/common/http';
import {PositionsService} from '../providers/positions.service';
import {UsersService} from '../providers/users.service';
import {PersonCenterPage} from "../pages/person-center/person-center";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    LoginPage,
    PostDetailPage,
    PersonalPage,
    SettingPage,
    PersonCenterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MePage,
    LoginPage,
    PostDetailPage,
    PersonalPage,
    SettingPage,
    PersonCenterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PositionsService,
    UsersService
  ]
})
export class AppModule {}
