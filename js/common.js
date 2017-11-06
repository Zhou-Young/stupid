/**
 * Created by zhouyang on 17/10/21.
 */
//公用函数--获取节点
function g(elem){
    if(elem.substring(0,1)=='.'){
        return document.getElementsByClassName(elem.substr(1));
    }
    else{
        return document.getElementById(elem.substr(1));
    }

}

////很蠢的图片预加载方法
//(function stupidPreLoad(){
//    var mainhtml=[];
//    for(var i=0;i<data.length;i++){
//        var _html='<img src="img/'+data[i].img+'.jpg" width="222px">';
//        mainhtml.push(_html);
//    }
//    g('#stupidPreLoad').innerHTML = mainhtml.join(' ');
//})();


function show(classN){
    var _classN = g("#"+classN).className.split(' ');
    _classN[_classN.length-1] = 'show';
    g("#"+classN).className = _classN.join(' ');
}

function hide(classN){
    var _classN = g("#"+classN).className.split(' ');
    _classN[_classN.length-1] = 'hidden';
    g("#"+classN).className = _classN.join(' ');
}

function magic(hide1,hide2,mshow){
    hide(hide1);
    hide(hide2);
    show(mshow);
}

window.onload=function(){

}
