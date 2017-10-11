window.onload=function(){
    initPageSize();

    var menuDom=document.querySelector("#menu");
    //记录当前的a位置
    var currentIndex=0;
    var menuItems=document.querySelectorAll("#menu a");
    //这样默认是第一个
    // menuItems[currentIndex].classList.add("active");

    menuDom.onclick=function (event) {
        menuItems[currentIndex].classList.remove("active");
        //因为仅仅需要对里面的a进行响应，又因为a有href属性
        //故判断
        if(event.target.href){
            //该目标a的前一个元素,#page0,6
            //截取到第五个即0,1,2
            currentIndex=event.target.href.substring(event.target.href.length-1);
            menuItems[currentIndex].classList.add("active");
        }
        //点击导航栏时也要添加
        page0Anima();
        page1Anima();
    };

    activeItem();

    //监听最后一个滚动
    var lastWheelTime=Date.now();
    //鼠标滚动监听
    window.onmousewheel=function (event) {
        var currentWheelTime=Date.now();
        // console.log(currentWheelTime);
        //滚轮的时间间隔
        var intervalTime=currentWheelTime-lastWheelTime;
        // console.log(intervalTime);
        //当两个事件的间隔大于150ms时，我们认为是有效的
        if(intervalTime>150){
            menuItems[currentIndex].classList.remove("active");
            //用来判断网页是往上还是往下
            //往上是正值，往下是负值
            console.log(event.wheelDelta);
            //下翻页
            //共0,1,2
            if(event.wheelDelta<0 &&currentIndex<2){
                ++currentIndex;
            }
            //上翻页
            if(event.wheelDelta>0 &&currentIndex>0){
                --currentIndex;
            }
            //关键，滚动页面自动执行点击事件
            menuItems[currentIndex].click();
            menuItems[currentIndex].classList.add("active");
        }
        lastWheelTime=Date.now();
    };

    page0Anima();
    page1Anima();

    //动态添加page0动画
    function page0Anima() {
        var page0Dom=document.querySelectorAll("#page0 div");
        //判断进入的是第一个页面
        if(currentIndex==0){
            page0Dom.forEach(function (pageDom) {
                pageDom.classList.add("page0-show")
            })
        }
        else{
            page0Dom.forEach(function (pageDom) {
                pageDom.classList.remove("page0-show")
            })
        }

    }

    //page1动画
    function page1Anima() {
        var page1Dom=document.querySelectorAll("#page1 .box");
        //判断进入的是第二个页面
        if(currentIndex==1){
            page1Dom.forEach(function (pageDom) {
                pageDom.classList.add("page1-show")
            })
        }
        else{
            page1Dom.forEach(function (pageDom) {
                pageDom.classList.remove("page1-show")
            })
        }
    }

    //每次刷新后重新渲染
    function activeItem() {
        //url网址 location.href
        if(location.href.indexOf('#page')>0){
            //0,1,2
           currentIndex = location.href.substring(location.href.length-1)
        }
        menuItems[currentIndex].classList.add("active");
    }

    /*初始化页面*/
      function initPageSize() {
          //获取所有li,并封装成数组
          var pageList=document.querySelectorAll("#pages li");
          //循环去设置页面的高为当前视窗的高
          pageList.forEach(function (pageDom) {
              pageDom.style.height=innerHeight+"px";
          })
      }

};