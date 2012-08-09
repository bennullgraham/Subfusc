<?php header('Content-Type: text/html; charset=UTF-8'); ?><!DOCTYPE html>
<?php $rev = filemtime(__FILE__); ?>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="min/css?rev=<?php echo $rev; ?>">
	<!--[if lt IE 9]>
	<script src="/js/html5shiv.js"></script>
	<![endif]-->
	<link rel="openid.server" href="http://www.myopenid.com/server"/>
	<link rel="openid.delegate" href="http://blackwater.myopenid.com/"/>
	<script>
		var jQl={q:[],dq:[],ready:function(a){typeof a=="function"&&jQl.q.push(a);return jQl},unq:function(){for(var a=0;a<jQl.q.length;a++)jQl.q[a]();jQl.q=[]},bId:null,boot:function(a){if(typeof window.jQuery.fn=="undefined"){if(!jQl.bId)jQl.bId=setInterval(function(){jQl.boot(a)},25)}else{jQl.bId&&clearInterval(jQl.bId);jQl.bId=0;jQl.unqjQdep();$(jQl.unq());typeof a=="function"&&a()}},booted:function(){return jQl.bId===0},loadjQ:function(a,c){setTimeout(function(){var b=document.createElement("script"); b.src=a;document.getElementsByTagName("head")[0].appendChild(b)},1);jQl.boot(c)},loadjQdep:function(a){jQl.loadxhr(a,jQl.qdep)},qdep:function(a){if(a)typeof window.jQuery.fn!=="undefined"&&!jQl.dq.length?jQl.rs(a):jQl.dq.push(a)},unqjQdep:function(){if(typeof window.jQuery.fn=="undefined")setTimeout(jQl.unqjQdep,50);else{for(var a=0;a<jQl.dq.length;a++)jQl.rs(jQl.dq[a]);jQl.dq=[]}},rs:function(a){var c=document.createElement("script");document.getElementsByTagName("head")[0].appendChild(c);c.text= a},loadxhr:function(a,c){var b;b=jQl.getxo();b.onreadystatechange=function(){b.readyState!=4||200!=b.status||c(b.responseText,a)};try{b.open("GET",a,true);b.send("")}catch(d){}},getxo:function(){var a=false;try{a=new XMLHttpRequest}catch(c){for(var b=["MSXML2.XMLHTTP.5.0","MSXML2.XMLHTTP.4.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],d=0;d<b.length;++d){try{a=new ActiveXObject(b[d])}catch(e){continue}break}}finally{return a}}}; if(typeof window.jQuery=="undefined")var $=jQl.ready,jQuery=$;
	</script>
	<script>
		var _gaq = _gaq || [];
		_gaq.push(['_setAccount', 'UA-15595532-1']);
		_gaq.push(['_trackPageview']);

		(function() {
		var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		})();
	</script>
	<title>bgraham.com.au</title>
</head>
<body>
	<header>
		<div class="container">
			<h1>bgraham.com.au</h1>
		</div>
	</header>
	<div class="container">
		<section class="about">
			<h1>Ben</h1>
			<p>Ben is a man of many talents and great intrigue. In the still of the morning, when maybe you heard a whispered word from over the next horizon &ndash; it was his name that was spoken. When errant spelling is mysteriously corrected, or a documentary ridiculed for poor scientific accuracy, then he is your suspect. When a flock of birds changes direction suddenly, or several outstanding bugs in an issue tracker are resolved &ndash; then it is he you should consider responsible.</p>
		</section>
		<section class="host">
			<h1>Host</h1>
			<dl>
				<dt>$ uptime</dt>
				<dd><?php echo exec('uptime'); ?></dd>
			</dl>
		</section>
		<section class="links">
			<h1>Further Reading</h1>
			<ul class="links">
				<li>
					<span class="icon gp">Google+</span>
					<a href="//plus.google.com/106149912329040737914?rel=author" rel="author" target="_blank">Google+ Profile</a>
				</li>
				<li>
					<span class="icon li">LinkedIn</span>
					<a href="//www.linkedin.com/profile/view?id=79501528" rel="me" target="_blank">LinkedIn Profile</a>
				</li>
				<li>
					<span class="icon em">Email</span>
					bgraham / at / bgraham.com.au
				</li>
			</ul>
		</section>
	</div>
<script type="text/javascript">
//<![CDATA[
	jQl.loadjQ('//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
	jQl.loadjQdep('/min/js');
//]]>
</script>
</body>
