import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,ToastController,App, ViewController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { Storage } from '@ionic/storage';
import {UsersService} from '../../providers/users.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import 'rxjs/add/operator/toPromise';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[UsersService]
})
export class LoginPage {
  loginForm: FormGroup;
  loginPhone: any;
  loginPasswd: any;
  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private viewCtrl: ViewController,
    private appCtrl: App,
    private storage:Storage,
    private userSer:UsersService,
    private formBuilder: FormBuilder
  ) {
        this.loginForm = formBuilder.group({
          //login
          loginPhone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
          loginPasswd: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });
        this.loginPhone = this.loginForm.controls['loginPhone'];
        this.loginPasswd= this.loginForm.controls['loginPasswd'];
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(user) {
    // let alert = this.alertCtrl.create({
    //   title: 'ok!',
    //   subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
    //   buttons: ['OK']
    // });
    // alert.present();


    // this.navCtrl.push(TabsPage,{userId:'001',name:'tom'});

    // this.viewCtrl.dismiss();
    // this.appCtrl.getRootNav().push(TabsPage);


    // this.storage.ready().then(() => {
    //   this.storage.set('isLogin',true);
    // });
    //
    // this.navCtrl.push(TabsPage,{userId:'001',name:'tom'});

      this.userSer.login(user).then((result)=> {
        if(result){
          if(result[0]){
            this.storage.ready().then(()=>{
              this.storage.set('isLogin',true);
              this.storage.set('userId',user.telephone);
              this.storage.set('token',result.token);
              console.log(result[0])
            });
            this.navCtrl.push(TabsPage);

          }else {
            let toast = this.toastCtrl.create({
              message: '用户名或密码错误',
              duration: 3000
            });
            toast.present();
          }
        }else{
          let toast = this.toastCtrl.create({
            message: '服务器异常',
            duration: 3000
          });
          toast.present();
        }
      })
    }

    // this.userSer.getAllUsers().then((data) => {
    //   console.log(data)
    // })

}
