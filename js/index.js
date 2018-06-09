//js/index.js
//轮播图，上下不可以轮播
//1 向php发送ajax请求

$(function(){
	var $ul=$(".banner-img");
	var $ulIds=$(".indicators");//圆点
//interval，滚动500毫秒
	var LIWIDTH=1200;interval=500,wait=3000,moved=0;timer=null;//timer=null可能定时器停止
	//1 向php发送ajax请求
	$.ajax({
		type:"get",
		url:"data/index/getCarousel.php",
			//返回的是json
		dataType:"json",
			//返回data商品
		success:function(data){
			//console.log(data);//可以看控制台有没有数据（数组）
			var html="";//空的来接在页面上
			//循环出内存中的数据
			for(var c of data){
				var {img,href,title}= c;//数据库中的标题，结构的
					
				html+=`<li>
					<a href="${href}" title="${title}">
						<img src="${img}">
					 </a>
					</li>`;
			}
			//出来时再加载一次第一个，使得连接起来
			var {img,href,title}=data[0];//只加载第一个
				html+=
					`<li>
					<a href="${href}" title="${title}">
						<img src="${img}">
					 </a>
					</li>`;
			//把第一章图片再写一遍，所以length+1，data.length+1数据库中的长度加后来多加的一个第一张图，控制栏现在5个li
			//1填充图片
			$ul.html(html).css("width",LIWIDTH*(data.length+1));
			//2填充圆点，圆点跟着moved变
			$ulIds.html("<li></li>".repeat(data.length))//内存中的data数据，repeat是ES6中的新函数，给一个模板，重复生成，data有几个就重复几次
			.children(":first").addClass("hover");
			autoMove();//调用，就是下面注释掉的

//				timer=setInterval(function(){//动画 
//					moved++;//个数
//					$ul.animate({
//						left:-moved*LIWIDTH
//					},interval,function(){//3动画500毫秒过去
//							if(moved==data.length){//5可以用data因为还在函数内
//								$ul.css("left",0);
//								moved=0;//到最后一章时立即跳到第一章
//							}
//						//6 小圆点跟着moved变，所以写在if下面，圆点变蓝
//							$ulIds.children(":eq("+moved+")").addClass("hover")
//										.siblings().removeClass("hover");
//						})
//				},wait);//4 wait是3秒钟执行一次


		}
	});
	//7
	function autoMove(){//自动轮播，给调用
				timer=setInterval(function(){//动画 
//					moved++;//个数
//					$ul.animate({
//						left:-moved*LIWIDTH
//					},interval,function(){//3动画500毫秒过去
//							if(moved==$ul.children().length-1){//5可以用data因为还在函数内，放上面没问题，data不是全局函数，所以data.length改成,length-1是因为轮播多补了一个li
//								$ul.css("left",0);
//								moved=0;//到最后一章时立即跳到第一章
//							}
//						//6 小圆点跟着moved变，所以写在if下面，圆点变蓝
//							$ulIds.children(":eq("+moved+")").addClass("hover")
//										.siblings().removeClass("hover");
//						})//拿出来放在move中,用move调用
					move();//move调用
				},wait);//4 wait是3秒钟执行一次
	}
	//10 封装上面注释的，共调用
	function move(){
		moved++;
			$ul.animate({//stop(true).不能解决，用if
					left:-moved*LIWIDTH
				},interval,function(){
				if(moved==$ul.children().length-1){
					$ul.css("left",0);
					moved=0;
				}
				$ulIds.children(":eq("+moved+")").addClass("hover")
					.siblings().removeClass("hover");
				})
	}
	//8 鼠标上去喊停（大方块内都喊停：圆点、图片、箭头）
	$("#banner").mouseenter(function(){//鼠标进去停止轮播
		clearInterval(timer);
		timer=null;
		}).mouseleave(function(){
		autoMove();//鼠标出去继续轮播，调用
	})	
	//9点击圆点拿到当前是哪个图片
	$ulIds.on("click","li",function(){
		var $li=$(this);//当前的$li等于$this
		var i=$li.index();//当前的li第几个
		moved=i;//从这往下都是上面复制下来的，但没有if，因为最后一个是自己加的，不可能点到最后一个
		$ul.stop(true).animate({//stop(true)防止可能的动画叠加，点击快了，可能重叠
		left:-moved*LIWIDTH
				},interval,function(){
					$ulIds.children(":eq("+moved+")").addClass("hover")
					.siblings().removeClass("hover");				
		})
	})
	//11左右箭头，单击右左移
	var $aLeft=$(".ck-left"),
			$aRight=$(".ck-right");
		//动态叠加
			$aRight.click(function(){
				if(!$ul.is(":animated")){//防止动画叠加的另一个方式，如果不在播放动画才行驶下面
					move();
				}
	});
	//12右箭头
	$aLeft.click(function(){
		if(!$ul.is(":animated")){//防止动画叠加
			if(moved==0){//不写会导致到第一个是空白
				moved=$ul.children().length-1;//显示第四张图
				$ul.css("left",-moved*LIWIDTH);//left和moved配套的
					}
				moved--;
				$ul.animate({
					left:-moved*LIWIDTH//这个永远都是这么写
				},interval,function(){
	//				$ul.css("left",0);//往回倒不要
	//				moved=0;//往回倒不要
					$ulIds.children(":eq("+moved+")").addClass("hover")
					.siblings().removeClass("hover");				
				})
				}
	})
});

	
// 教学环境、教学设备、师资力量 
//data/index/environment.php
$(function(){
	$.ajax({
		type:"get",
		url:"data/index/environment.php",
		dataType:"json",
		success:function(data){
			//console.log(data);
			var html="";
			for(var e of data){
				var {href,img,title,details} = e;
				html +=
					`<ul>
						<li><a href="${href}"><img src="${img}" alt=""></a></li>
						<li>${title}</li>
						<li>${details}</li>
					</ul>`
			}
				$(".about").html(html);
		}
	})
});
		
//学生风采图片
//data/index/student.php
$(function(){
	$.ajax({
		type:"get",//php是sql语句是select时候用get
		url:"data/index/student.php",
		dataType:"json",
		success:function(data){
			//console.log(data);
			var html="";
			for(var t of data){
				var {img,title,href} = t;
				html +=
					`<a href="${href}"><img src="${img}" alt="${title}"></a>`
			}
			$(".student-pic").html(html);
		}
	})
});

//学生荣誉
//data/index/honor.php
//$(function(){
//	$.ajax({
//		type:"get",//php是sql语句是select时候用get
//		url:"data/index/honor.php",
//		dataType:"json",
//		success:function(data){
//			//console.log(data);
//			var html="";
//			for(var h of data){
//				var {img,title,href} = h;
//				html +=
//					`<a href="${href}"><img src="${img}" alt="${title}"></a>`
//			}
//			$(".honor-pic").html(html);
//		}
//	})
//});


