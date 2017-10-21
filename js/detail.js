/**
 * Created by zhouyang on 17/10/21.
 */
  var url=location.search;

var detailIndex = url.split('=')[1];
console.log(detailIndex);

//公用函数--获取节点
function g(elem){
    if(elem.substring(0,1)=='.'){
        return document.getElementsByClassName(elem.substr(1));
    }
    else{
        return document.getElementById(elem.substr(1));
    }

}
var contentHtml = g("#showPic").innerHTML;
//显示图片列表
function putContent(data){

    var _html=contentHtml
        .replace('{{img}}',data[detailIndex].img+'.jpg')
        .replace('{{desc}}',data[detailIndex].desc)
        .replace('{{collect}}',data[detailIndex].collect);
    g('#showPic').innerHTML= _html;
    console.log(g('#showPic').innerHTML);

}
putContent(data);