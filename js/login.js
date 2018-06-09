$(function(){
	$("#btn").click(function(){
		//var $btn=$(this);
		var uname=$("#uname").val();
		var upwd=$("#upwd").val();
		$.ajax({
			type:"post",
			url:"data/users/signin.php",
			data:{uname:uname,upwd:upwd},
			success:function(msg){
				
				if(msg==="登录成功!"){
					alert(msg);
					location.href="index.html";
					//?back=http://xxx/products.html?kw=i5
//					var i=location.search.indexOf("=");
//					location.href=location.search.slice(i+1);
				
				}else if(msg==="用户名或密码错误，请重新输入"){
				alert(msg);
				location.href="login.html";
				}
			}
		})
	})
})
//			$.ajax({
//			type:"get",
//			url:"data/users/islogin.php",
//			dataType:"json",
//			success:function(data){
//				if(data.ok==0){
//					$("#loginList").show().next().hide();
//				}else{
//					var {uname}=data;
//					$("#loginList").hide().next().show()
//						.find("#uname").html(uname);
//				}
//			}
//		});
//		$("#btnLogin").click(function(e){
//			e.preventDefault();
//			location.href="login.html?back="+location.href;
//		});
//		$("#btnSignout").click(function(e){
//			e.preventDefault();
//			$.ajax({
//				type:"get",
//				url:"data/users/signout.php",
//				success:function(){
//					location.reload(true);
//				}
//			})
//		})
//	})