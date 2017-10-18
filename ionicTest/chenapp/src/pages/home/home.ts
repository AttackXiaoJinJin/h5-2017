import {Component, ViewChild} from '@angular/core';
import {NavController, Slides, ViewController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {AboutPage} from "../about/about";
import { ModalController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides:Slides;
  // list=['img1.jpg','img2.jpg','img3.jpg']
  lists=[
    {"head":'head1.jpg',"salary":'15k',"post":'前端工程师',"address":'哈哈哈1号',"postId":1},
    {"head":'head1.jpg',"salary":'15k',"post":'前端工程师',"address":'哈哈哈1号',"postId":2},
    {"head":'head1.jpg',"salary":'15k',"post":'前端工程师',"address":'哈哈哈1号',"postId":3},
    {"head":'head1.jpg',"salary":'15k',"post":'前端工程师',"address":'哈哈哈1号',"postId":4},
    {"head":'head1.jpg',"salary":'15k',"post":'前端工程师',"address":'哈哈哈1号',"postId":5},
    ]
  imgs=[
    {"img":'img1.jpg',"link":'www.baidu.com'},
    {"img":'img2.jpg',"link":'www.qq.com'},
    {"img":'img3.jpg',"link":'www.taobao.com'},
  ]

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,

    ) {

  }

  back(){
    this.navCtrl.pop(LoginPage)
    //

  }
  slideChanged(){
    let activeIndex=this.slides.getActiveIndex()
    if(activeIndex==4){
      this.imgs[0].link="www.qq.com"
    }
    console.log(activeIndex)
    this.slides.startAutoplay()
  }
  showImg(img){
    console.log(img)
  }
  //跳转到详情页面，about页面
  itemSelected(item){
     // console.log(item.postId)
    let modalPage=this.modalCtrl.create(AboutPage, { "postId":item.postId })
    //带数据{newName:juan }过来
    modalPage.onDidDismiss(data => {
      console.log(data)
    })
    //呈现
    modalPage.present()


  }
  deleteById(id){
    for (let i = 0; i < this.lists.length; i++) {
      if(id===this.lists[i].postId){
        this.lists.splice(i,1)
      }

    }
  }
  //跳转
  about(){
    this.navCtrl.push(AboutPage)
  }

  //上拉刷新
  doRefresh(refresher) {
    // console.log('Begin async operation', refresher);
    setTimeout(() => {
      let aaa=
        {"head":'head1.jpg',
          "salary":'15k',
          "post":'sffsf工程师',
          "address":'vvvvv号',
          "postId":1}

      this.lists.unshift(aaa)
      // console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

//  下拉加载
//   doInfinite(infiniteScroll) {
//     console.log('Begin async operation');
//     setTimeout(() => {
//       let aaa=
//         {"head":'head1.jpg',
//           "salary":'15k',
//           "post":'sffsf工程师',
//           "address":'vvvvv号',
//           "postId":1}
//       // for (let i = 0; i < 30; i++) {
//         this.lists.push(aaa);
//       // }
//       console.log('Async operation has ended');
//       infiniteScroll.complete();
//     }, 500);
//   }
  doInfinite(scroll): Promise<any> {
    console.log('Begin async operation');

    return new Promise((resolve) => {
      setTimeout(() => {
        let aaa=
        {"head":'head1.jpg',
          "salary":'15k',
          "post":'sffsf工程师',
          "address":'vvvvv号',
          "postId":1
        }
        this.lists.push( aaa )
        //阻止下拉加载
        scroll.enable(false)
        console.log('Async operation has ended')
        resolve();
      }, 500);
    })
  }


}
