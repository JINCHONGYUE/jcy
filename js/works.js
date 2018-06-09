//dom方式编写
//(function(){
//	var divFirst=document.querySelector(
//		".container>div:first-child"
//	);
//	divFirst.style.zIndex=10;//所有带-的css属性都要去横线变驼峰
//	//查找触发事件的元素,四个a
//	var as=document.querySelectorAll(
//		".works-navbar>li>[data-toggle=tab]"
//	);
//	//绑定事件,找打所有的li
//		for(var a of as){
//			a.onclick = function(){
//				//alert("疼");
//				//this->a 
//				var a = this;//不写的话，循环a永远显示的是最后一个
//				//查找所有div修改的元素
//				var divs = document.querySelectorAll(
//					".container>div");
//				for(var div of divs){
//					//修改元素，所有div的index都抹掉
//					div.style.zIndex = "";
//				}
//				//找到div，href属性可以作为id找到
//				var id=a.href;//http://......xx.html#content1，href是标准属性
//				var  i = id.lastIndexOf("#");//找到#的位置
//				id = id.slice(i);//#content1
//				console.log(id);
//				var div = document.querySelector(id);//找到div，有#所有不要getElementById
//				div.style.zIndex = 10;
//				//找到我对应的div改成10
//			}
//		}
//})()




$(function(){
	//jq方式写
	$(".works-navbar:has([data-toggle=tab])").on("click","[data-toggle=tab]",function(e){
		e.preventDefault();
		var $tar=$(e.target);
		if(!$tar.parent().is(".active")){
			$tar.parent().addClass("active")
			.siblings().removeClass("active");
//		下面
			var id = $tar.attr("href");
			$(id).addClass("active")
			.siblings().removeClass("active");
		}
	})
	//作品
	$(".con>a").on("mouseenter",function(e){
			$(this).children(":first").css("display","block");
		}).on("mouseleave",function(e){
			$(this).children(":first").css("display","none");
		})
});