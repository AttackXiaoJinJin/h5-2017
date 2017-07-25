//定义一个函数，用来向元素添加指定的class属性值
function addClass(obj , className) {
    //检查obj中是否含有重复的className，若没有则添加
    if(!hasClass(obj,className)){
        obj.className += " "+className;
    }

    //可能会一直叠加重复的类名
//            obj.className += "" + className;
}
//去除重复的class
function hasClass(obj,className) {
    //若有返回true,没有返回false
    // \b单词边界
//            var reg = /\bb2\b/;
    var reg=new RegExp("\\b"+className+"\\b");
    alert(reg);
    return reg.test(obj,className);

}

//删除指定的class
function removeClass(obj,className) {
    //创建reg
    var reg=new RegExp("\\b"+className+"\\b");
    //删除class,用""替换reg
    obj.className=obj.className.replace(reg,"");
}
//切换一个类，如果元素具有该类，则删除，没有则添加
function toggleClass() {
    if(hasClass(obj,className)){
        removeClass(obj,className);
    }else {
        addClass(obj,className);
    }
}
