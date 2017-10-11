window.onload=function () {
    var imgArray=[];

    for(var i=0;i<60;i++){
        var newImg=new Image();
        newImg.src="img/car/"+i+".jpg";
        imgArray.push(newImg);
    }

    var carimg=document.querySelector("#carimg");
//    保存当前显示的图片
    var currentIndex=0;
//    1.当鼠标按下时，开始监听,onmousedown
    document.onmousedown=function (event) {
        //获取鼠标的移动距离
        var dis=0;
        //一点击就获取鼠标的水平坐标
        var begin=event.clientX;
        //    2.当鼠标移动时，切换图片,onmousemove
        document.onmousemove=function (event) {
            //获取鼠标当前的水平坐标
            var current=event.clientX;
        //    获取鼠标移动的水平距离
        //     dis=current-begin;
            dis=currentIndex+Math.floor((begin-current)/30);
            //让其不超过59张，并可以循环
            dis=dis%60;
            if(dis<0){
                dis=dis+60;
            }
            // console.log(dis);
        //    修改img
            carimg.src="img/car/"+dis+".jpg";
        };
        //3.鼠标松开，停止监听，onmouseup
        document.onmouseup=function () {
            //清除document上的onmouseup和onmousemove事件
            document.onmousemove=null;
            document.onmouseup=null;
            currentIndex=dis;

        };

        //取消默认行为
        return false;
    };




};