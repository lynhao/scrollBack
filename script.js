/**
 * Created by linhao on 15/10/26.
 */
window.onload = function()
{
  var obtn = document.getElementById('btn');
 var timer = null;
 var isTop = true;
 var clientHeight = document.documentElement.clientHeight;//获取页面可视的高度
 window.onscroll = function () {
     var osTop = document.documentElement.scrollTop || document.body.scrollTop;
     if(osTop>=clientHeight)
     {
         obtn.style.display = 'block';
     }else{
         obtn.style.display = 'none';
     }
  if(!isTop)
  {
   clearInterval(timer);
  }
  isTop = false;
 }
  obtn.onclick = function(){
   //设置定时器
  timer = setInterval(function(){
   var osTop = document.documentElement.scrollTop || document.body.scrollTop;
   var speed = Math.floor(-osTop/6);
   document.documentElement.scrollTop = document.body.scrollTop = osTop+speed ;
   isTop = true;
console.log(osTop+speed);
   if(osTop == 0){
   clearInterval(timer);
  }

  },30);


  }
}