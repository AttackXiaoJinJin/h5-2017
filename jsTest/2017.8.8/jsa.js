/**
 * Created by yaochao on 2017/8/8.
 */
var jsonData=[{'time':'0.87','text':'钟无艳'},{'time':'2.81','text':'演唱：谢安琪'},{'time':'4.48','text':'作词：CHAKCHRISTOPHER,梁伟文(PKA林夕)  作曲：CHAKCHRISTOPHER,梁伟文(PKA林夕)'},{'time':'21.28','text':'其实我怕你总夸奖高估我坚忍'},
    {'time':'25.18','text':'其实更怕你只懂得欣赏我品行'},{'time':'29.15','text':'无人及我用字绝重拾了你信心'},{'time':'33.40','text':'无人问我可甘心演这伟大化身'},{'time':'37.79','text':'其实我想间中崩溃脆弱如恋人'},{'time':'41.89','text':'谁在你两臂中低得不需要身份'}
    ,{'time':'46.67','text':'无奈被你识穿这个念头'},{'time':'49.33','text':'得到好处的你'},{'time':'51.52','text':'明示不想失去绝世好友'},{'time':'55.35','text':'没有得你的允许'},{'time':'57.67','text':'我都会爱下去'}
    ,{'time':'60.01','text':'互相祝福心软之际'},{'time':'62.20','text':'或者准我吻下去'},{'time':'64.23','text':'我痛恨成熟到'},{'time':'66.07','text':'不要你望着我流泪'},{'time':'68.88','text':'但漂亮笑下去'}
    ,{'time':'70.68','text':'彷彿冬天饮雪水'},{'time':'72.80','text':'被你一贯的赞许 '},{'time':'74.71','text':'却不配爱下去'},{'time':'77.03','text':'在你悲伤一刻'},{'time':'78.68','text':'必须解慰找到我乐趣'}
    ,{'time':'81.04','text':'我甘于当副车'},{'time':'83.20','text':'也是快乐着唏嘘'},{'time':'85.44','text':'彼此这么了解'},{'time':'87.73','text':'难怪注定似兄妹一对'},{'time':'91.51','text':'......'}
    ,{'time':'123.94','text':'其实我怕你的好感基于我修养'},{'time':'127.61','text':'其实最怕你的私心亏准我体谅'},{'time':'131.95','text':'无人问我寂寞尽头何处去养伤'},{'time':'136.13','text':'原来是我的心境高到变为偶像'},{'time':'140.32','text':'谁情愿照耀着别人就如月亮'}
    ,{'time':'144.71','text':'为奴婢为你备饭奉茶是残忍真相'},{'time':'149.11','text':'无奈被你识穿这个念头'},{'time':'151.95','text':'得到好处的你'},{'time':'154.26','text':'明示不想失去绝世好友'},{'time':'158.21','text':'没有得你的允许'}
    ,{'time':'160.68','text':'我都会爱下去'},{'time':'162.78','text':'互相祝福心软之际'},{'time':'164.93','text':'或者准我吻下去'},{'time':'166.97','text':'我痛恨成熟到'},{'time':'168.93','text':'不要你望着我流泪'}
    ,{'time':'171.59','text':'但漂亮笑下去'},{'time':'172.94','text':'彷彿冬天饮雪水'},{'time':'175.64','text':'被你一贯的赞许'},{'time':'177.69','text':'却不配爱下去'},{'time':'179.79','text':'在你悲伤一刻必须解慰'}
    ,{'time':'182.54','text':'找到我乐趣'},{'time':'184.11','text':'我甘于当副车'},{'time':'186.15','text':'也是快乐着唏嘘'},{'time':'188.40','text':'彼此这么了解'},{'time':'190.49','text':'让我决定我的快乐'},{'time':'192.97','text':'那须得你的允许'}
    ,{'time':'194.94','text':'我都会爱下去'},{'time':'196.97','text':'互相祝福心软之际'},{'time':'199.12','text':'或者准我吻下去'},{'time':'201.23','text':'我痛恨成熟到'},{'time':'203.23','text':'不要你望着我流泪'},{'time':'205.83','text':'但漂亮笑下去'}
    ,{'time':'207.63','text':'彷彿冬天饮雪水'},{'time':'209.71','text':'被你一贯的赞许'},{'time':'211.95','text':'无须装说下去'},{'time':'214.10','text':'在你悲伤一刻必须解慰'},{'time':'216.87','text':'找到我乐趣'},{'time':'218.41','text':'我甘于当副车'}
    ,{'time':'220.51','text':'却没法撞入堡垒'},{'time':'222.67','text':'彼此这么了解'},{'time':'224.71','text':'难怪注定似兄妹一对'},{'time':'228.89','text':'......'},{'time':'231.86','text':'你的他怎允许'},{'time':'233.94','text':'结伴观赏雪的泪'}
    ,{'time':'236.52','text':'永不开封的汽水'},{'time':'239.36','text':'让我抱在怀内吻下去'},{'time':'244.79','text':'......'}];
var audio=document.getElementById('audio');
var word=document.getElementById('musicWord');
audio.addEventListener('timeupdate',function(){
   
        for(var i=0;i<jsonData.length-1;i++){
            if(jsonData[i].time<audio.currentTime&&audio.currentTime<jsonData[i+1].time){
                console.log(audio.currentTime);
                word.innerHTML=jsonData[i].text;
            }
        }
    

});
    
