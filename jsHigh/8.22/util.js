//添加util属性
// exports.util=createUnique;
// exports.createUnique=createUnique;

module.exports={
  "createUnique":function () {
      var date=new Date().valueOf();
      var random=Math.random();
      return date+" "+random;
  }
};
function MD5(s) {

}

module.exports.MD5=MD5;

// console.log(module);