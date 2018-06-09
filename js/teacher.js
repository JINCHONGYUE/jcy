//$(function(){
//	$.ajax({
//		type:"get",
//			url:"data/index/getIndexteacher.php",
//			dataType:"json"
//	}).then(function(teachers){
//		var html="";
//		teachers.forEach(function(t,i){
//			var {img,title,school,details}=t;
//			if(i%2==0){
//				html+=
//					`<ul class="teacher-intr">
//							<li><img src="${img}"></li>
//							<li>
//								<ul>
//									<li class="font-name">${title}</li>
//									<li class="font-school">${school}</li>
//									<li class="font-detail">${details}</li>				
//								</ul>
//							</li>
//						</ul>`
//			}else{
//				html+=
//					`<ul class="teacher-intr-even">	
//						<li>
//							<ul>
//								<li class="font-name">${title}</li>
//								<li class="font-school">${school}</li>
//								<li class="font-detail">${details}</li>
//							</ul>
//						</li>
//						<li><img src="${img}" alt=""></li>
//					</ul>`
//				}		
//		})
//		document.querySelector("div.total>div.introduct>ul.teacher-intr").innerHTML = html ;
//	});
//})




$(function(){
	$.ajax({
		type:"get",
			url:"data/index/getIndexteacher.php",
			dataType:"json"
	}).then(function(teachers){
		var html="";
		teachers.forEach(function(t,i){
			var {img,name,school,details}=t;
			if(i%2==0){
				html+=
					`<li class="teacher-intr-odd"><div><img src="${img}" alt=""></div>
					<div>
						<p>${name}</p>
						<p>${school}</p>
						<p>${details}</p>
					</div></li>`
			}else{
				html+=
					`<li class="teacher-intr-even clear"><div><img src="${img}" alt=""></div>
					<div>
						<p>${name}</p>
						<p>${school}</p>
						<p>${details}</p>
					</div></li>`
				}		
		})
		document.querySelector("div.total ul.teacher-intr").innerHTML = html ;
		//document.querySelector("div.total ul.teacher-intr li.teacher-intr-even").innerHTML = html ;
	});
})

