<?php header('Content-Type: text/html; charset=UTF-8'); ?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/min/css">
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
	<title>Resume</title>
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
			<p>
				I'm driven by curiosity and a need to know how things work. I enjoy finding patterns, whether they be in music, mathematics, language, or elsewhere. I don't think there's anything more valuable than a desire to learn, and second to this is a desire to teach. I'd rather <a href="http://www.thegeekstuff.com/2011/07/lazy-sysadmin/">put effort into automating something</a> than doing the thing itself. I enjoy making something work well more than making it work. I read <a href="http://www.goodreads.com/user/show/3612009-ben">all sorts of things</a>. I write music, and have formed or been a member of bands that have played around Australia. I have <a href="https://picasaweb.google.com/106149912329040737914/2011India?authuser=0&amp;feat=directlink">hiked in the Himalayas</a> and the <a href="http://www.parks.tas.gov.au/index.aspx?base=7771">Tasmanian wilderness</a>, and lived abroad in <a href="http://en.wikipedia.org/wiki/Norrk%C3%B6ping">Norrköping, Sweden</a>.
			</p>
		</section>
		<section class="education">
			<h1>Education</h1>
			<p>
				I obtained the following degrees at Swinburne University of Technology (Hawthorn, Australia). One semester was completed at Linköping University (Linköping, Sweden)
			</p>
			<ul class="bullet">
				<li>Bachelor of Engineering (Robotics and Mechatronics)</li>
				<li>Bachelor of Science (Computer Science and Software Engineering)</li>
			</ul>
		</section>
		<section class="experience">
			<h1>Experience</h1>
			<h2>Next Studio <span class="date-range">(<span class="year">2007</span> - )</span></h2>
			<p class="sub">Web Development</p>
			<ul class="bullet">
				<li>Specified, designed and built a security-sensitive document tracking service with recurring payment processing and multiple user tiers.</li>
				<li>Responsible for moving integration, staging, and many production sites from internal or VPS hardware to Amazon EC2 instances.</li>
				<li>Championed adoption of issue tracking, continuous integration, more thorough project and code documentation, and responsiveness improvements through profiling and optimisation of HTML content and HTTP responses.</li>
				<li>Responsible for a complete functional and visual overhaul of standard CMS and Auth tools deployed with all company projects, including the addition of a fine-grained and flexible ACL-based authorisation system.</li>
				<li>Completed a full respecification and build of the company website, including CMS features to ensure it remains strictly XHTML+RDFa compliant.</li>
				<li>Experience with the full spectrum of small business operation, including quoting, specification, scheduling, client and project management, etc.</li>
			</ul>
			<h2>Zi-Argus <span class="date-range">(<span class="year">2006</span> - <span class="year">2007</span>)</span></h2>
			<p class="sub">Industrial Automation and Control</p>
			<ul class="bullet">
				<li>Rewrote software controlling a multi-vat acid bath system, including collision avoidance and planning for a pair of overhead cranes, and a software interface which would visualise vat conflicts and allow timing offsets when scheduling a new sequence. My work here was projected to save the client $30,000 every year.</li>
				<li>Wrote software for a major Australian retailer which queried logistics databases to manage pallet facilities in a warehouse. This single-site software was flexible enough to subsequently be deployed to multiple sites.</li>
				<li>Responsible for purchasing, configuring and providing support for a company-wide automated full-disk backup system.</li>
			</ul>
			<h2>Textor <span class="date-range">(<span class="year">2003</span> - <span class="year">2005</span>)</span></h2>
			<p class="sub">Synthetic Textile Manufactury</p>
			<ul class="bullet">
				<li>Helped specify and manage the deployment of SCADA systems to monitor factory equipment, along with fibre-optic networking to overcome interference issues in the existing factory electrical network.</li>
				<li>Created documentation and electrical diagrams for power distribution equipment throughout the factory.</li>
			</ul>
		</section>
		<section class="skills">
			<h1>Skills</h1>
			<p>
				In brief, I am a skilled PHP developer with full confidence in all languages and concepts used in a modern MVC web application. I can speak Python and Java competently, and have experience with several other languages. I administer many Linux machines (both virtual and actual computers), and am completely at home in a command-line environment.
			</p>
			<p>
				For a full list of technology-related acronyms, please see my <a href="//www.linkedin.com/profile/view?id=79501528" rel="me">LinkedIn profile</a>. For code samples, see my <a href="https://github.com/bennullgraham/" rel="me">GitHub account</a>.
			</p>
		</section>
		<section class="signoff">
			<p>
				Ben<br />
				<a href="mailto:bgraham@bgraham.com.au" rel="me">bgraham@bgraham.com.au</a>
			</p>
		</section>
	</div>
<script type="text/javascript">
//<![CDATA[
	jQl.loadjQ('//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
	jQl.loadjQdep('/min/js');
//]]>
</script>
</body>
