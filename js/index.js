/**
 * Created by zhouyang on 17/10/14.
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

//很蠢的图片预加载方法
(function stupidPreLoad(){
    var mainhtml=[];
    for(var i=0;i<data.length;i++){
        var _html='<img src="img/'+data[i].img+'.jpg" width="222px">';
        mainhtml.push(_html);
    }
    g('#stupidPreLoad').innerHTML = mainhtml.join(' ');
})();

var picHtml=g('#picContent').innerHTML;
var currentPage = 0;
var pageNum = 8;
var totalPage =Math.ceil(data.length/pageNum) ;
var pageIner = g("#page").innerHTML;

//显示图片列表
function putPic(data ,currentPage,pageNum){
    var mainhtml=[];
    var initNum = (currentPage)*pageNum;
    var finalNum;
    if(data.length - initNum <pageNum){
        finalNum = data.length;
    }else{
        finalNum = initNum + pageNum;
    }
    for(var i=initNum;i<finalNum;i++){
        var _html=picHtml
            .replace(/{{index}}/g,i)
            .replace('{{img}}',data[i].img+'.jpg')
            .replace('{{desc}}',data[i].desc)
            .replace('{{collect}}',data[i].collect)
            .replace('{{praise}}',data[i].praise);
        mainhtml.push(_html);
    }
    g('#picContent').innerHTML= mainhtml.join(' ');
    console.log(g('#picContent').innerHTML);
    window.onload=function(){
        waterFall('#picContent','pic');
    }

}
putPic(data,currentPage,pageNum);


//实现翻页
function choosePage(){
    var mainhtml=[];
    for(var i=0;i<totalPage;i++){
        var _html='<li id="page_'+ i +'" onclick="checkPage('+i+')">'+ (i+1) +'</li>';
        mainhtml.push(_html);
    }
    g('#page').innerHTML = mainhtml.join(' ') + " <li onclick='nextpage()'>下一页</li>";
}
choosePage();

//点击下一页翻面
function nextpage(){
    if(currentPage == totalPage-1){
        return 0;
    }
    else{
        currentPage +=1;
        putPic(data,currentPage,pageNum);
        waterFall('#picContent','pic');
    }
}

//点击对应面数翻面
function checkPage(n) {
    currentPage = n;
    putPic(data,currentPage,pageNum);
    waterFall('#picContent','pic');
}




//按收藏数排序
function sortC(){
    data.sort(function(a,b){
        return a.collect-b.collect});
    console.log(data);
    putPic(data,currentPage,pageNum);
    console.log("done");
}

//按点赞数排序
function sortP(){
    data.sort(function(a,b){
        return a.praise-b.praise});
    putPic(data,currentPage,pageNum);
}

//搜索
function search(){
    var inputValue = g("#searchValue").value;
    var searchData = [];

    for(i in data){
        if(data[i].desc.indexOf(inputValue) > -1){
            searchData.push(data[i]);
            console.log(searchData);
        }
    }
    putPic(searchData,currentPage,pageNum);
}

//实现瀑布流布局
//规则:从第二行开始的图片,总是拼接在上一行高度最矮的图片后面
function  waterFall(parent,box) {
    //父盒子居中
    //通过父盒子拿到所有的子盒子
    var allBox = g(parent).getElementsByClassName(box);

    var boxWidth = 224;
    var cols = 5;

    //子盒子定位
    //创建一个高度数组,存所有的高度
    var heightArr = [];
    var maxHeight;
    //遍历
    for(var i = 0; i < allBox.length ;i++)
    {
        //求出每个盒子的高度
        var boxHeight = allBox[i].offsetHeight + 20;
        console.log(boxHeight);
        //第一行的盒子不需要重新定位//每一行的盒子数与列数相同
        if(i<cols)
        {
            //添加第一行所有盒子高度
            heightArr.push(boxHeight);
        }
        else//剩下的盒子都需要瀑布流布局
        {
            //求出最矮的盒子高度
            var minBoxHeight = Math.min.apply(this,heightArr);
            //求出最矮盒子对应的索引
            var minBoxIndex = getMinBoxIndex(minBoxHeight,heightArr);
            //盒子瀑布流定位  顶部间距就是最矮盒子的高度
            allBox[i].style.position = 'absolute';
            allBox[i].style.top = minBoxHeight +  'px';
            allBox[i].style.left = minBoxIndex * (boxWidth + 20) +'px';
            //关键:更新数组最矮高度,使下一个图片在高度数组中总是找最矮高度的图片下面拼接
            heightArr[minBoxIndex] += boxHeight;

        }
    }
    maxHeight=Math.max.apply(this,heightArr);
    g(parent).style.height=maxHeight + "px";
}

//求出最矮盒子对应的索引函数
function getMinBoxIndex(val,arr) {
    for(var i in arr)
    {
        if(val == arr[i])
        {
            return i;
        }
    }
}


var loginHtml = g("#login");
console.log(loginHtml);
var showState = 0;

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










