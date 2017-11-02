import {Component, ViewChild} from '@angular/core';
import {NavController, Slides,App, ViewController,ModalController } from 'ionic-angular';

import {PostDetailPage} from '../post-detail/post-detail';
import {PositionsService} from '../../providers/positions.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[PositionsService]
})
export class HomePage {
  @ViewChild(Slides) mySlides: Slides;

  imgs = [
    {
      'img': '1.jpg',
      'links': 'www.baidu.com'
    }
    ,
    {
      'img': '2.jpg',
      'links': 'www.baidu.com'
    },
    {
      'img': '3.jpg',
      'links': 'www.baidu.com'
    },
    {
      'img': '4.jpg',
      'links': 'www.baidu.com'
    }
  ];

  items: any;
  all_items:any;

  constructor(
    private navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public modalCtrl: ModalController,
    public positionSer:PositionsService

  ) {

  }


  ionViewDidLoad(){
    this.positionSer.getallbooks().then(data=>{
      this.all_items=data;
      this.items=this.all_items.slice(0,10);
    })
  }

  ionViewWillEnter(){
    console.log('2222222222');

  }

  ionViewDidEnter(){
    console.log('33333333333');
  }

  ionViewWillLeave(){
    console.log('444444444');
  }
  slideChanged() {
    // let activeIndex=this.mySlides.getActiveIndex();
    // console.log(activeIndex);
    this.mySlides.startAutoplay();
  }

  showImg(img) {
    console.log(img);
  }
  itemSelected(item) {
    // this.viewCtrl.dismiss();
    // item && this.navCtrl.push(PostDetailPage,{"post_id":item.postId});

    // this.appCtrl.getRootNav().push(PostDetailPage);

    let modelPage=this.modalCtrl.create(PostDetailPage,{"post_id":item.id});
    // modelPage.onDidDismiss(data => {
    //   console.log(data);
    // });

    modelPage.present();



  }

  deleteById(id) {
    for(let i=0;i<this.items.length;i++){
      if(id===this.items[i].postId){
        this.items.splice(i,10);
      }
    }
  }


  onInput(){

  }


  doRefresh(refresher) {
    setTimeout(() => {
      let item= {
        postId: '0017',
        icon_url: 'assets/img/smile.png',
        post: '阿里巴巴总经理',
        salary: '120-1000',
        address: '苏州仁爱路7号'
      }
      this.items.unshift(item);
      refresher.complete();
    }, 2000);
  }

  doInfinite(infiniteScroll) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let item= {
          postId: '0018',
          icon_url: 'assets/img/smile.png',
          post: '华为总经理',
          salary: '120-1000',
          address: '苏州仁爱路7号'
        };
        this.items.push(item);
        infiniteScroll.enable(false);
        resolve();
      }, 500);
    })
  }

}
