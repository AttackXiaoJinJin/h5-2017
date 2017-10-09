window.onload=function(){
    initPageSize();

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