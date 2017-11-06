/**
 * Created by zhouyang on 17/10/17.
 */
var data=[];
//  \只是js中将字符串的写法换行，，实际显示效果还是连着的
var dataStr = '仓鼠<br><br>仓鼠1<br><br>我这个人有一个坏习惯<br><br>12<br><br>13<br><br><br>\
仓鼠<br><br>仓鼠2<br><br>一旦我干了什么蠢事<br><br>11<br><br>121<br><br><br>\
仓鼠<br><br>仓鼠3<br><br>那个过程会<br><br>15<br><br>4<br><br><br>\
仓鼠<br><br>仓鼠4<br><br>在我脑子里回放几十遍<br><br>22<br><br>2<br><br><br>\
仓鼠<br><br>仓鼠5<br><br>一直体会自己的傻逼<br><br>33<br><br>34<br><br><br>\
仓鼠<br><br>仓鼠6<br><br>可能过了5年10年<br><br>11<br><br>32<br><br><br>\
仓鼠<br><br>仓鼠7<br><br>甚至到老了<br><br>21<br><br>23<br><br><br>\
仓鼠<br><br>仓鼠8<br><br>有些记忆深刻的场景<br><br>14<br><br>41<br><br><br>\
仓鼠<br><br>仓鼠9<br><br>都不会忘<br><br>65<br><br>56<br><br><br>\
佩服三连<br><br>佩服三连1<br><br>佩服三连<br><br>66<br><br>55<br><br><br>\
佩服三连<br><br>佩服三连2<br><br>佩服三连<br><br>321<br><br>123<br><br><br>\
佩服三连<br><br>佩服三连3<br><br>佩服三连<br><br>111<br><br>222<br><br><br>\
佩服三连<br><br>佩服三连4<br><br>佩服三连<br><br>323<br><br>232<br><br><br>\
佩服三连<br><br>佩服三连5<br><br>佩服三连<br><br>143<br><br>134<br><br><br>\
佩服三连<br><br>佩服三连6<br><br>佩服三连<br><br>98<br><br>89<br><br><br>\
佩服三连<br><br>佩服三连7<br><br>佩服三连<br><br>79<br><br>97<br><br><br>\
小祖宗<br><br>小祖宗1<br><br>小祖宗<br><br>96<br><br>69<br><br><br>\
小祖宗<br><br>小祖宗2<br><br>小祖宗<br><br>78<br><br>87<br><br><br>\
小祖宗<br><br>小祖宗3<br><br>小祖宗<br><br>56<br><br>65<br><br><br>\
小祖宗<br><br>小祖宗4<br><br>小祖宗<br><br>57<br><br>75<br><br><br>\
小祖宗<br><br>小祖宗5<br><br>小祖宗<br><br>74<br><br>47<br><br><br>\
小祖宗<br><br>小祖宗6<br><br>小祖宗<br><br>36<br><br>63<br><br><br>\
小祖宗<br><br>小祖宗7<br><br>小祖宗<br><br>85<br><br>58<br><br><br>\
小祖宗<br><br>小祖宗8<br><br>小祖宗<br><br>35<br><br>53<br><br><br>\
小祖宗<br><br>小祖宗9<br><br>小祖宗<br><br>91<br><br>19<br><br><br>\
雪碧<br><br>雪碧1<br><br>雪碧<br><br>17<br><br>71<br><br><br>\
雪碧<br><br>雪碧2<br><br>雪碧<br><br>27<br><br>72<br><br><br>\
雪碧<br><br>雪碧3<br><br>雪碧<br><br>37<br><br>73<br><br><br>\
雪碧<br><br>雪碧4<br><br>雪碧<br><br>47<br><br>74<br><br><br>\
雪碧<br><br>雪碧5<br><br>雪碧<br><br>57<br><br>75<br><br><br>\
雪碧<br><br>雪碧6<br><br>雪碧<br><br>67<br><br>76<br><br><br>\
熊本熊<br><br>熊本熊1<br><br>熊本熊<br><br>123<br><br>132<br><br><br>\
熊本熊<br><br>熊本熊2<br><br>熊本熊<br><br>134<br><br>143<br><br><br>\
熊本熊<br><br>熊本熊3<br><br>熊本熊<br><br>145<br><br>154<br><br><br>\
熊本熊<br><br>熊本熊4<br><br>熊本熊<br><br>156<br><br>165<br><br><br>\
熊本熊<br><br>熊本熊5<br><br>熊本熊<br><br>167<br><br>176<br><br><br>\
熊本熊<br><br>熊本熊6<br><br>熊本熊<br><br>178<br><br>187<br><br><br>\
熊本熊<br><br>熊本熊7<br><br>熊本熊<br><br>189<br><br>198<br><br><br>\
熊本熊<br><br>熊本熊8<br><br>熊本熊<br><br>113<br><br>131<br><br><br>\
熊本熊<br><br>熊本熊9<br><br>熊本熊<br><br>114<br><br>141<br>\
';

//以brbrbr分割成一个数组
var dataArr=dataStr.split('<br><br><br>');
for(var i=0;i<dataArr.length;i++){
    var _dataA=dataArr[i].split('<br><br>');
    data.push({
            label : _dataA[0],
            caption : _dataA[1],
            desc:_dataA[2],
            img:_dataA[1],
            collect:_dataA[3],
            praise:_dataA[4]
        }

    )
}
console.log(data);

