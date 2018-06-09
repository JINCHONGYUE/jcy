$(function(){
	$("#header").load("header.html", function(){
			var link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = "css/header.css";
			document.head.appendChild(link);
		});
		$.ajax({
			
		})
});