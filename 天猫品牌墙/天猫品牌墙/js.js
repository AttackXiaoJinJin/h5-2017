window.onload=function () {
    var iconWall=document.getElementById("iconWall");
    iconWall.innerHTML="";
    for(var i=0;i<23;i++){
        iconWall.innerHTML +=" <li>" +
            "        <div class='img-3d'>" +
            "        <div class='img-back'>" +
            "        <img src='images/icon"+(i+1)+".jpg' alt=''>" +
            "        </div>" +
            "        <div class='img-front'>" +
            "        <img src='images/icon"+(i+24)+".jpg' alt=''>" +
            "        </div>" +
            "        </div><div class='mask'>" +
            "<img src='images/heart.png' alt=''>" +
            "<p>关注人数 323.4万</p><a href=''>点击进入</a>" +
            "</div>" +
            "        </li>"
    }

    iconWall.innerHTML+="<li id='btnRefresh'><div class='iconRefresh'></div>" +
        "<span>换一批</span></li>";

    var clickTimes=1;

    //获取所有img
    var img3DList=document.querySelectorAll(".img-3d");
    var btnRefresh=document.querySelector("#btnRefresh");
    var iconRefresh=document.querySelector(".iconRefresh");
    btnRefresh.onclick=function () {
        iconRefresh.style.transition="0.3s linear";
        //光写这个点击是没有反应的,必须加一个过渡效果
        iconRefresh.style.transform="rotate("+360*clickTimes+"deg)";

        for (var i = 0; i < img3DList.length; i++) {
            var colNum=parseInt(i/6);
            var rowNum=i%6;
            var delayTime=(colNum+rowNum)*150;
            img3DList[i].style.transition=delayTime+"ms linear";
            img3DList[i].style.transform="rotateY("+180*clickTimes+"deg)";

        }

        //让按钮能每单击一次都能旋转
        clickTimes++;
    };



};