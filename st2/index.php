<?php header('Content-Type: text/html; charset=UTF-8'); ?><!DOCTYPE html>
<?php $rev = exec('git rev-parse --short HEAD'); ?>
<html lang="en">
<head>
	<meta charset="utf-8">
	<link rel="stylesheet" href="/min/css?rev=<?php echo $rev; ?>">
	<link rel="stylesheet" href="/min/csssh">
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
	<title>Sublime Text 2</title>
</head>
<body>
	<header>
		<div class="container">
			<h1>bgraham.com.au</h1>
		</div>
	</header>
	<div class="container">
		<section class="package-control">
			<h1>Install Package Control</h1>
			<p>
				The apt-get of ST2. Paste the following in the ST2 console (<span class="key">Ctrl</span>+<span class="key">~</span>):
			</p>
			<pre class="brush: python code">import urllib2,os
pf='Package Control.sublime-package'
ipp=sublime.installed_packages_path()
os.makedirs(ipp) if not os.path.exists(ipp) else None
urllib2.install_opener(urllib2.build_opener(urllib2.ProxyHandler()))
open(os.path.join(ipp,pf),'wb').write(urllib2.urlopen('http://sublime.wbond.net/'+pf.replace(' ','%20')).read())
print 'Please restart Sublime Text to finish installation'</pre>
			<p>
				Full installation details are here: <a href="http://wbond.net/sublime_packages/package_control/installation">http://wbond.net/sublime_packages/package_control/installation</a>
			</p>
		</section>
		<section class="install-package">
			<h1>Install a Package</h1>
			<p>
				Hit <span class="key">Ctrl</span>+<span class="key">Shift</span>+<span class="key">P</span> and type 'install <span class="key">Enter</span>'. Then, type (part of) a package name, and <span class="key">Enter</span> again.
			</p>
		</section>
		<section class="discover-package">
			<h1>Discover Packages</h1>
			<p>
				Although you can browse through the autocomplete list when installing a package, there's also a HTML version: <a href="http://wbond.net/sublime_packages/community">http://wbond.net/sublime_packages/community</a>
			</p>
		</section>
		<section class="recommended-package">
			<h1>Recommended Packages</h1>
			<h2>SublimeOnSaveBuild</h2>
			<p>
				I use this to trigger our build system to turn SASS into CSS. Create <span class="inline-code">~/.config/sublime-text-2/Packages/User/Phing-Sass.sublime-build</span> with the following:
			</p>
<pre class="brush: python code">{
    "cmd": ["phing", "build-sass"],
    "working_dir": "$project_path"
}</pre>
			<p>
				In ST2, go Tools&rarr;Build System&rarr;Phing-Sass
			</p>
			<h2>SublimeLinter</h2>
			<p>
				This says why your code is dumb. I have:
			</p>
<pre class="brush: js code">// ~/.config/sublime-text-2/Packages/User/SublimeLinter.sublime-settings
{
    // python errors to ignore.
    // see https://github.com/jcrocholl/pep8/blob/master/pep8.py
    "pep8_ignore":
    [
        "E501",
        "W191"
    ],

    // Set to true to highlight annotations
    "sublimelinter_notes": true
}
</pre>
			<h2>LiveReload</h2>
			<p>
				This refreshes the browser on save. For CSS, the page need not reload. Awesome. Your browser will need a LiveReload plugin (<a href="https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei">https://chrome.google.com/webstore/detail/jnihajbhpnppcggbcgedagnkighmdlei</a>).
			</p>
			<p>
				You will need to give phing time to run its sass&rarr;css target:
			</p>
<pre class="brush: js code">// ~/.config/sublime-text-2/Packages/User/LiveReload.sublime-settings:
{
  "delay_ms" : 1000
}
</pre>
		</section>
	</div>
<script type="text/javascript">
//<![CDATA[
	jQl.loadjQ('//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js');
	jQl.loadjQdep('/min/js');
	jQl.loadjQdep('/min/jssh');
//]]>
</script>

</body>
