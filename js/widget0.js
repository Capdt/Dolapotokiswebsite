var params=document.getElementById("gpluswidget");var id=params.getAttribute("data-id");var api=params.getAttribute("data-key");var loops=(params.getAttribute("data-posts")*1)-1;var hll=params.getAttribute("data-lang");var bkgcss=params.getAttribute("data-bkg");var padcss=params.getAttribute("data-padding");var borcss=params.getAttribute("data-border");var radcss=params.getAttribute("data-radius");var txtcss=params.getAttribute("data-txt");var widthcss=params.getAttribute("data-width");var lincss=params.getAttribute("data-link");var fav=params.getAttribute("data-favicon");var heacss=params.getAttribute("data-header");var gwicss=params.getAttribute("data-footer");var pagee=params.getAttribute("data-page");var url="https://plus.google.com/"+id;localStorage.setItem("loops",loops);if(fav==="no"){var favcss="none"}if(gwicss==="no"){var gwicss="none"}var css="#gpluswidget{font:15px Open Sans,sans-serif;margin:0}#gpluswidget a{text-decoration:none;color:inherit}#gpluswidget h3 a:hover{opacity:.5}#gpluswidget a:hover img{opacity:.8}#gpluswidget #headergplusw{width:inherit}#gpluswidget #headergplusw ul{display:inline-block;margin:0;padding:0;list-style:none;width:100%}#gpluswidget li#photo{width:68px;height:65px;display:inline-block}#gpluswidget #photo img{border-radius:3px;-webkit-border-radius:3px;-khtml-border-radius:3px;-moz-border-radius:3px}#gpluswidget li#head{width:auto;height:55px;display:inline-block;text-align:left;vertical-align:top;margin-left:4%;float:top}#gpluswidget #head span{display:block;text-align:center}#gpluswidget a img{border:0;outline:none}";if(pagee==="yes"){css+="#gpluswidget #head a.btn {padding:6px 10px 6px;vertical-align:middle;color:#666;font-weight:bold;font-size:12px;text-shadow:0 1px 1px #fff;background:#f4f4f4;border-radius:2px;border:1px solid #dadada}#gpluswidget #head a.btn:hover{opacity:1;background:#eee;border:1px solid #dadada}"}else{if(pagee==="no"){css+="#gpluswidget #head a.btn {padding:6px 10px 6px;vertical-align:middle;color:#fff;font-weight:bold;font-size:12px;text-shadow:0 1px 1px #333;background:#da4a38;border-radius:2px;border:1px solid #c63320}#gpluswidget #head a.btn:hover{opacity:1;background:#3a8c00;border:1px solid #398b00}"}}css+="#gpluswidget .fav{vertical-align:middle;margin-right:6px;}#gpluswidget .fav img{width:16px;height:16px;display:inline-block;border-radius:2px;}#gpluswidget #purl{display:block;width:50px;height:50px;overflow:hidden;}#gpluswidget h3{font-weight:normal;padding-bottom:14px;margin:3px 0 0;line-height:16px;white-space:nowrap}#gpluswidget #circles{clear:both;display:block;text-align:center;border-bottom:1px solid #'+ borcss +';border-top:1px solid #'+ borcss +';padding:10px 0;font-weight:bold;font-size:12px;border-radius:2px;width:inherit}#gpluswidget #circles .jl{background: no-repeat url(https://ssl.gstatic.com/s2/oz/images/sprites/common-full-7fa547d7c6f0ca8f00d413cee02c8f39.png) 0 0;height:18px;width:18px;display:inline-block;float:right;opacity:0.35;margin-right:2%}#gpluswidget .plus{font-style: italic;font-weight: bold;font-size:13px;float:right;margin:-15px 3% 15px 0;}#gpluswidget .posts{margin:8px 1% 0 0;clear:both;width:inherit}#gpluswidget .posts p{font-size:13px; margin-bottom: 20px;}.po{text-align:justify}#gpluswidget .posts .datez{font-size:13px;opacity:0.7;color:inherit;}#gpluswidget .txt{font-weight:normal;}#gpluswidget .posts a span.grt:hover{text-decoration:underline}#gpluswidget .img{background: no-repeat url(//ssl.gstatic.com/s2/oz/images/sprites/common-full-7fa547d7c6f0ca8f00d413cee02c8f39.png) 0 -71px;height: 18px;width: 18px;display:inline-block;vertical-align:middle}";css+="#gpluswidget #footergplusw{clear:both;height:20px;display:block;margin-top:10px}#gpluswidget #footergplusw .goos{opacity:0.5;font-size:12px;margin-left:8px;vertical-align:top;}#gpluswidget #footergplusw .icon{display:inline-block;background:url(https://ssl.gstatic.com/s2/oz/images/favicon.ico) no-repeat 0 0;height:20px;width:20px;}#gpluswidget .rs{display:inline-block;margin-left:10px;background: url(";$("head").append('<style type="text/css" charset="utf-8">'+css+"</style>");$(function(){if(hll==="yes"){var p=window.navigator.userLanguage||window.navigator.language;var A=p.split("-");var h=A[0];if(h==="fr"){var f="Ajouter aux cercles";var j="voir ce post sur Google+";var b="Rejoindre";var o="sur";var a=" est sur";var g="Essayer Google+";var t="1 année";var r="année";var y="1 mois";var k="mois";var z="1 jour";var m="jours";var l="1 heure";var u="heures";var q="1 minute";var e="minutes";var x="Maintenant";var v="Il y a";var w=null;var c=null;var d="from now"}else{if(h==="de"){var f="zu Kreisen hinzufügen";var j="View this Post auf Google+";var b="Join";var o="on";var a=" ist auf";var g="Google+ Versuchen";var t="1 Jahr";var r="Jahren";var y="1 Monat";var k="Monaten";var z="1 Tag";var m="Tagen";var l="1 Stunde";var u="Stunden";var q="1 Minute";var e="Minuten";var x="Jetzt";var v="Vor";var w=null;var c=null;var d="from now"}else{if(h==="pt"){var f="Adic. a círc.";var j="visualizar esta post em Google+";var b="Join";var o="on";var a=" está no";var g="Experimentar o Google+";var t="1 ano";var r="anos";var y="1 mês";var k="meses";var z="1 dia";var m="dias";var l="1 hora";var u="horas";var q="1 minuto";var e="minutos";var x="Agora";var v=null;var w=null;var c="atrás";var d="from now"}else{if(h==="es"){var f="Añadir a círculos";var j="ver este post en Google+";var b="Join";var o="on";var a=" está en";var g="Pruebe Google+";var t="1 año";var r="años";var y="1 mes";var k="meses";var z="1 día";var m="días";var l="1 hora";var u="horas";var q="1 minuto";var e="minutos";var x="Ahora";var v="Hace";var w=null;var c=null;var d="from now"}else{if(h==="it"){var f="Aggiungi alle cerchie";var j="vista questo post su Google+";var b="Join";var o="on";var a=" è su";var g="Provare Google+";var t="1 anno";var r="anni";var y="1 mese";var k="mesi";var z="1 giorno";var m="giorni";var l="1 ora";var u="ore";var q="1 minuto";var e="minuti";var x="Ora";var v=null;var w=null;var c="fa";var d="from now"}else{if(h==="ru"){var f="Добавить в круги";var j="Посмотреть эту почту на Google+";var b="Присоединяйтесь к";var o="на";var a=" Джон на";var g="Попробуйте Google+";var t="1 год";var r="лет";var y="1 месяц";var k="месяцев";var z="1 день";var m="дней";var l="1 час";var u="часов";var q="1 минута";var e="минут";var x="Cейчас";var v=null;var w=null;var c="назад";var d="from now"}else{if(h==="zh"){var f="添加到圈子";var j="查看这篇文章";var b="Join";var o="on";var a=" 上";var g="Try Google+";var t="A year";var r="years";var y="A month";var k="months";var z="A day";var m="days";var l="An hour";var u="hours";var q="A minute";var e="minutes";var x="Now";var v=null;var w=null;var c="ago";var d="from now"}else{if(h==="ja"){var f="サークルに追加";var j="Google+でこのポストを参照してください";var b="Join";var o="on";var a=" is on";var g="Google+を試してください";var t="A year";var r="years";var y="A month";var k="months";var z="A day";var m="days";var l="An hour";var u="hours";var q="A minute";var e="minutes";var x="Now";var v=null;var w=null;var c="ago";var d="from now"}else{if(h==="el"){var f="Προσθήκη σε κύκλους";var j="Δείτε αυτό το μήνυμα στο";var b="Join";var o="on";var a=" είναι στο";var g="Δοκιμάστε το Google+";var t="A year";var r="years";var y="A month";var k="months";var z="A day";var m="days";var l="An hour";var u="hours";var q="A minute";var e="minutes";var x="Now";var v=null;var w=null;var c="ago";var d="from now"}else{if(h==="ar"){var f="إضافة إلى دوائر";var j="Google+ عرض هذا الموضوع في";var b="Join";var o="on";var a=" على";var g="Google+ محاولة";var t="A year";var r="years";var y="A month";var k="months";var z="A day";var m="days";var l="An hour";var u="hours";var q="A minute";var e="minutes";var x="Now";var v=null;var w=null;var c="ago";var d="from now"}else{var f="Add to circles";var j="view this post on Google+";var b="Join";var o="on";var a=" is on";var g="Try Google+";var t="A year";var r="years";var y="A month";var k="months";var z="A day";var m="days";var l="An hour";var u="hours";var q="A minute";var e="minutes";var x="Now";var v=null;var w=null;var c="ago";var d="from now"}}}}}}}}}}}else{var h="en";var f="Add to circles";var j="view this post on Google+";var b="Join";var o="on";var a=" is on";var g="Try Google+";var t="A year";var r="years";var y="A month";var k="months";var z="A day";var m="days";var l="An hour";var u="hours";var q="A minute";var e="minutes";var x="Now";var v=null;var w=null;var c="ago";var d="from now"}(function(E){E.timeago=function(G){if(G instanceof Date){return B(G)}else{if(typeof G==="string"){return B(E.timeago.parse(G))}else{return B(E.timeago.datetime(G))}}};var C=E.timeago;E.extend(E.timeago,{settings:{refreshMillis:60000,allowFuture:false,strings:{prefixAgo:v,prefixFromNow:w,suffixAgo:c,suffixFromNow:d,seconds:x,minute:q,minutes:"%d "+e,hour:l,hours:"%d "+u,day:z,days:"%d "+m,month:y,months:"%d "+k,year:t,years:"%d "+r,numbers:[]}},inWords:function(L){var K=this.settings.strings;var O=K.prefixAgo;var G=K.suffixAgo;if(this.settings.allowFuture){if(L<0){O=K.prefixFromNow;G=K.suffixFromNow}L=Math.abs(L)}var I=L/1000;var Q=I/60;var J=Q/60;var H=J/24;var N=H/365;function P(U,S){var T=E.isFunction(U)?U(S,L):U;var R=(K.numbers&&K.numbers[S])||S;return T.replace(/%d/i,R)}var M=I<45&&P(K.seconds,Math.round(I))||I<90&&P(K.minute,1)||Q<45&&P(K.minutes,Math.round(Q))||Q<90&&P(K.hour,1)||J<24&&P(K.hours,Math.round(J))||J<48&&P(K.day,1)||H<30&&P(K.days,Math.floor(H))||H<60&&P(K.month,1)||H<365&&P(K.months,Math.floor(H/30))||N<2&&P(K.year,1)||P(K.years,Math.floor(N));return E.trim([O,M,G].join(" "))},parse:function(G){var H=E.trim(G);H=H.replace(/\.\d\d\d+/,"");H=H.replace(/-/,"/").replace(/-/,"/");H=H.replace(/T/," ").replace(/Z/," UTC");H=H.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");return new Date(H)},datetime:function(H){var G=E(H).get(0).tagName.toLowerCase()==="time";var I=G?E(H).attr("datetime"):E(H).attr("title");return C.parse(I)}});E.fn.timeago=function(){var G=this;G.each(F);var H=C.settings;if(H.refreshMillis>0){setInterval(function(){G.each(F)},H.refreshMillis)}return G};function F(){var G=i(this);if(!isNaN(G.datetime)){E(this).text(B(G.datetime))}return this}function i(H){H=E(H);if(!H.data("timeago")){H.data("timeago",{datetime:C.datetime(H)});var G=E.trim(H.text());if(G.length>0){H.attr("title",G)}}return H.data("timeago")}function B(G){return C.inWords(D(G))}function D(G){return(new Date().getTime()-G.getTime())}document.createElement("abbr");document.createElement("time")}(jQuery));if(heacss!=="yes"){$("#headergplusw").css("display","none")}$.ajax({type:"GET",url:"https://www.googleapis.com/plus/v1/people/"+id+"?fields=displayName%2Cimage&pp=1&key="+api,dataType:"jsonp",success:function(J,E){if(J.image!=undefined){var D=$.trim(J.displayName);var C=D.length;var G=D.split(" ");var F=G[0];var I=G[1];$("#name").append(D);$("#name").attr("title",D+a+" Google+");$("a.btn").append(f);var B='<img width="50" height="50" src="'+$.trim(J.image.url)+'" alt="'+D+'">';$("#purl").append(B);$("#purl").attr("title",D);var H=$("h3").width();var K=widthcss-(2*padcss)-68;var i=(K/C)*1.5;if(H>=K){$("h3").css({"font-size":i,"font-weight":"bolder"})}if(gwicss==="yes"){$("#wrapper").append('<div id="footergplusw" class="gg"><a class="icon" href="http://gplusapi.appspot.com/" target="_blank" title="Get the Google+ widget"></a><a class="goos" title="'+g+'" href="https://plus.google.com/" target="_blank">'+b+" "+F+" "+o+" Google+</a></div>");if(loops>0){$("#footergplusw").css({"border-top":"1px solid #"+borcss,"padding-top":"10px","margin-top":"6px"})}}else{$("#wrapper").append("")}}else{if(J.image==undefined){$.ajax({type:"GET",url:"http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22https%3A%2F%2Fplus.google.com%2F"+id+"%2Fposts%22%20AND%20xpath%3D%22%2F%2Fdiv%5B%40class%3D'id pb g-hh'%5D%22&format=json&callback?",dataType:"jsonp",success:function(S,O){var N=S.query.results.div.span.content;var M=N.length;var P=N.split(" ");var P=P[0];var R=P[1];$("#name").append(N);$("#name").attr("title","Visit "+N+"'s profile");$("a.btn").attr("title","Add "+N+" to your circles");$("a.btn").append(f);var Q=$("h3").width();var T=widthcss-(2*padcss)-68;var L=(T/M)*1.5;if(Q>=T){$("h3").css({"font-size":L,"font-weight":"bolder"})}if(gwicss==="yes"){$("#wrapper").append('<div id="footergplusw" class="gg"><a class="icon" href="http://gplusapi.appspot.com/" target="_blank" title="Get the Google+ widget"></a><a class="goos" title="'+g+'" href="https://plus.google.com/" target="_blank">'+b+" "+P+" "+o+" Google+</a></div>");if(loops>0){$("#footergplusw").css({"border-top":"1px solid #"+borcss,"padding-top":"10px","margin-top":"6px"})}}else{$("#wrapper").append("")}}});$(".posts").css("display","none");$("#wrapper").append('<p>Sorry, Google+ API limit exceeded.</p><p>Ensure to generate your own <a href="https://code.google.com/apis/console#access" target="_blank" style="color:#36c">API key [?]</a>.</p>');$.ajax({type:"GET",url:"http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22https%3A%2F%2Fplus.google.com%2F"+id+"%2Fposts?hl="+h+"%22%20AND%20xpath%3D%22%2F%2Fdiv%5B%40class%3D'g-Em jD'%5D%22&format=json&callback?",dataType:"jsonp",success:function(M,O){var N=M.query.results.div.div[0].div.div.div.div.img.src;var N=N.replace("sz=200","sz=50");var L=localStorage.getItem("name");var N='<img height="50" width="50" src="https:'+N+'" alt="'+L+'">';$("#purl").append(N);$("#purl").attr("title",""+L+"")}})}}}});var n=[];var s=0;if(loops>=0){$.ajax({type:"GET",url:"https://www.googleapis.com/plus/v1/people/"+id+"/activities/public?key="+api,dataType:"jsonp",success:function(M,C){var G=localStorage.getItem("loops");var K=M.items;var i=0;for(Object in K){i++}if(K<=G){var G=K-1}else{var G=G}for(s=0;s<=G;s++){var B=($.timeago($.trim(M.items[s].published)))+" &ndash; ";var F=$.trim(M.items[s].object.url);var I=$.trim(M.items[s].object.content);if(I!=""){var I=I}else{var I=$.trim(M.items[s].object.attachments[0].content)}var I=I.replace(/(?:<b>|<em>|<u>|<\/b>|<\/u>|<\/em>|<\/span>|<i>|<\/i>)/g,"");var I=I.replace(/(?:<br \/>)/g," ");var I=I.replace(/(?:<br \/><br \/>)/g," ");var I=I.replace('class="proflinkWrapper"><span class="proflinkPrefix">'," ");var I=I.replace("  "," ");var I=I.replace('a href="','a class="httlink" target="_blank" href=" ');var H=I.length;if(I.indexOf('a target="_blank"')!==-1&&H>160){var I=I.substring(0,190)+" ..."}else{if(I.indexOf('a target="_blank"')==-1&&H>160){var I=I.substring(0,160)+" ..."}else{var I=I}}var P=$.trim(M.items[s].object.attachments);if(P!=""){var D=$.trim(M.items[s].object.attachments[0].objectType);if(D==="article"||D==="video"){var R=$.trim(M.items[s].object.attachments[0].content);var O=$.trim(M.items[s].object.attachments[0].objectType);var E=$.trim(M.items[s].object.attachments[0].url);var J=E.split("://");var L=J[0];var J=J[1];var J=J.split("/");var J=J[0];var D=D.toLowerCase().replace(/\b[a-z]/g,function(S){return S.toUpperCase()});var J="https://s2.googleusercontent.com/s2/favicons?domain="+J;var Q='<a href="'+E+'" title="'+D+" | "+R+'" target="_blank" rel="nofollow"><img src="'+J+'" width="16" height="16" alt="" /></a>'}else{if(D==="photo"){var R=$.trim(M.items[s].object.attachments[0].content);var O=$.trim(M.items[s].object.attachments[0].objectType);var E=$.trim(M.items[s].object.attachments[0].url);var D=D.toLowerCase().replace(/\b[a-z]/g,function(S){return S.toUpperCase()});var Q='<a href="'+E+'" title="'+D+" | "+R+'" target="_blank" rel="nofollow"><span class="img"></span></a>'}else{if(D==="photo-album"){var R=$.trim(M.items[s].object.attachments[0].displayName);var O=$.trim(M.items[s].object.attachments[0].objectType);var E=$.trim(M.items[s].object.attachments[0].url);var D=D.toLowerCase().replace(/\b[a-z]/g,function(S){return S.toUpperCase()});var Q='<a href="'+E+'" title="'+D+" | "+R+'" target="_blank" rel="nofollow"><span class="img"></span></a>'}}}}else{var Q=""}var N=$.trim(M.items[s].object.plusoners.totalItems);if(N==0){var N=""}else{var N="+"+N;$(".plus").attr("title","people +1'd this")}$(".posts").append('<p><span class="datez">'+B+'</span><span class="fav">'+Q+'</span><a href="'+F+'" target="_blank" title="'+j+'"><span class="po">'+I+'</span></p></a><a class="plus linkc" href="'+F+'" target="_blank"><span>'+N+"</span></a>");$(".fav").css("display",favcss);$(".gwi").css("display",gwicss);$(".linkc,.httlink").css("color","#"+lincss)}}})}$.ajax({type:"GET",url:"http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20html%20WHERE%20url%3D%22https%3A%2F%2Fplus.google.com%2F"+id+"%2Fposts?hl="+h+"%22%20AND%20xpath%3D%22%2F%2Fdiv%5B%40class%3D'YleYsd'%5D%22&format=json&callback?",dataType:"jsonp",success:function(i,F){if(i.query.results!=null){var E=i.query.results.div.div.div;var C=0;for(Object in E){C++}if(C==0){var B=$.trim(i.query.results.div.div[1].h4.content);$("#circles").append(B)}else{if(C==4){$(".btn").css("margin-left","-23px");var B=$.trim(i.query.results.div.div.h4.content);$("#circles").append(B)}}}else{var D="";var B="";$("#circles,.jl").css("display","none")}}})});$("#gpluswidget").append('<div style="width:'+widthcss+'px;"><div id="wrapper" style="background-color:#'+bkgcss+";border:1px solid #"+borcss+";border-radius:"+radcss+"px;padding:"+padcss+"px;color:#"+txtcss+';"><div id="headergplusw"><ul><li id="photo"><a id="purl" href="'+url+'" target="_blank"></a></li><li id="head"><h3><a id="name" style="color:inherit;text-decoration:none" href="'+url+'" target="_blank"></a></h3><span><a class="btn" href="'+url+'" target="_blank"></a></span></li></ul><div id="circles"><span class="jl"></span></div></div><div class="posts"></div></div></div>');
