//js运行机制,是异步执行
function getData(callback) {
    setTimeout(function () {
        var s='this is data';
        callback(s);
    },200);
    //隐藏return
    //return undefined;
}

function manageData(s,callback) {
    setTimeout(function () {
        s=s+'.is managed';
        callback(s);
    },200)
}

function showData(s,callback) {
    setTimeout(function () {
        callback(s);
    },200)
}

getData(function (result) {
   //console.log(result);
   manageData(result,function (result02) {
     //  console.log(result02);
       showData(result02,function (result03) {
           console.log(result03);
       })
   })
});




