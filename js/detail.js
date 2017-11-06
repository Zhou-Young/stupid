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
        .replace('{{collect}}',data[detailIndex].collect)
        .replace('{{indexl}}',parseInt(detailIndex)-1)
        .replace('{{indexr}}',parseInt(detailIndex)+1);
    g('#showPic').innerHTML= _html;
    console.log(g('#showPic').innerHTML);

}
putContent(data);

var commitHtml = '<div class="show-1" id="show_1">\
    <div class="photo left"></div>\
    <div class="content">\
    <span>饭饭特稀</span><span>{{time}}</span>\
<div class="album-all">\
    <div class="commit">\
    <p>{{commit}}</p>\
</div>\
</div>\
</div>\
</div>';
var mainhtml=[];
function showCommit(){
    var commitText = g("#commit");
    var date = new Date();
    var currentTime = date.toLocaleString();
    var _html=commitHtml
        .replace('{{time}}',currentTime)
        .replace('{{commit}}',commitText.value);
    mainhtml.push(_html);
    g('#commitShow').innerHTML = mainhtml.join(' ');
    console.log("done");
    g("#commit").value = "";
}

