/**
 * Created by Administrator on 2017/8/1 0001.
 */


var tb,tbody;
window.onload=function(){
     tb=document.getElementById('tb');
    tbody=tb.firstElementChild;
};

function addRow() {
    // var tb=document.getElementById('tb');
    var newRow=document.createElement('tr');                                      //2，添加元素tr
    // var tbody=tb.firstElementChild;                                              //3，找到tbody,tbody是table的父级元素
    var td1=document.createElement('td');                                       //4,创建td
    var td2=document.createElement('td');
    var td3=document.createElement('td');
    var td4=document.createElement('td');
    var index=tbody.children.length-1;
    // var index=2;
    // index++;
    td1.innerHTML="<input type='text' >";                                       //5，写td的内容
    td2.innerHTML="<input type='text' >";
    td3.innerHTML="<input type='text' >";
    td4.innerHTML="<input type='button' value='删除' onclick='delRow("+index+")'>"+
        "<input type='button' value='修改' onclick='editRow("+index+")'>";

    newRow.appendChild(td1);                                                   //6，插入td
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    newRow.appendChild(td4);

    tbody.insertBefore(newRow,tbody.lastElementChild);
                       //7,tboty要插入到最后一个元素之前
}
function delRow(index) {
       var delNode=tbody.children[index];
       console.log(tbody.children[index]);
       tbody.removeChild(delNode);


}












// *********************************************************************************
// function addRow() {
//   var tb=document.getElementById('tb');
//   var newRow=document.createElement('tr');
//   var tbody=tb.firstElementChild;
//   var td1=document.createElement('td');
//   var td2=document.createElement('td');
//   var td3=document.createElement('td');
//   var td4=document.createElement('td');
//   var td5=document.createElement('td');
//   td1.innerHTML='<input type="text">';
//   td2.innerHTML='<input type="text">';
//   td3.innerHTML='<input type="text">';
//   td4.innerHTML='<input type="button" value="删除" onclick="delRow()">+<input type="button" value="修改" onclick="editRow()">';
//   newRow.appendChild(td1);
//   newRow.appendChild(td2);
//   newRow.appendChild(td3);
//   newRow.appendChild(td4);
//
//   tbody.insertBefore(newRow,tbody.lastElementChild)
// }