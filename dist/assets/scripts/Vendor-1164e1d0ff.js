!function(n){var r={};function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=4)}([,,,,function(e,t,n){"use strict";n.r(t),n(5),n(6),n(7)},function(e,t){function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e,t){var o=[],n={_version:"3.7.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){o.push({name:e,fn:t,options:n})},addAsyncTest:function(e){o.push({name:null,fn:e})}},c=function(){};c.prototype=n,c=new c;var l=[],s=t.documentElement,i="svg"===s.nodeName.toLowerCase();c.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,s,i;for(var a in o)if(o.hasOwnProperty(a)){if(e=[],(t=o[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r="function"===u(t.fn)?t.fn():t.fn,s=0;s<e.length;s++)1===(i=e[s].split(".")).length?c[i[0]]=r:(!c[i[0]]||c[i[0]]instanceof Boolean||(c[i[0]]=new Boolean(c[i[0]])),c[i[0]][i[1]]=r),l.push((r?"":"no-")+i.join("-"))}}(),function(e){var t=s.className,n=c._config.classPrefix||"";if(i&&(t=t.baseVal),c._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}c._config.enableClasses&&(0<e.length&&(t+=" "+n+e.join(" "+n)),i?s.className.baseVal=t:s.className=t)}(l),delete n.addTest,delete n.addAsyncTest;for(var r=0;r<c._q.length;r++)c._q[r]();e.Modernizr=c}(window,document)},function(e,t,n){var r,s;r=window,s=function(r,p){"use strict";if(p.getElementsByClassName){var m,h,n,s,t,i,a,o,e,g=p.documentElement,c=r.Date,l=r.HTMLPictureElement,u=r.addEventListener,d=r.setTimeout,f=r.requestAnimationFrame||d,A=r.requestIdleCallback,v=/^picture$/i,y=["load","error","lazyincluded","_lazyloaded"],b={},z=Array.prototype.forEach,w=function(e,t){return b[t]||(b[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),b[t].test(e.getAttribute("class")||"")&&b[t]},C=function(e,t){w(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},E=function(e,t){var n;(n=w(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},S=function(t,n,e){var r=e?"addEventListener":"removeEventListener";e&&S(t,n),y.forEach(function(e){t[r](e,n)})},x=function(e,t,n,r,s){var i=p.createEvent("Event");return n||(n={}),n.instance=m,i.initEvent(t,!r,!s),i.detail=n,e.dispatchEvent(i),i},T=function(e,t){var n;!l&&(n=r.picturefill||h.pf)?(t&&t.src&&!e.getAttribute("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},M=function(e,t){return(getComputedStyle(e,null)||{})[t]},_=function(e,t,n){for(n=n||e.offsetWidth;n<h.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},L=(i=[],a=t=[],(e=function(e,t){n&&!t?e.apply(this,arguments):(a.push(e),s||(s=!0,(p.hidden?d:f)(o)))})._lsFlush=o=function(){var e=a;for(a=t.length?i:t,s=!(n=!0);e.length;)e.shift()();n=!1},e),R=function(n,e){return e?function(){L(n)}:function(){var e=this,t=arguments;L(function(){n.apply(e,t)})}},P=function(e){function t(){n=null,e()}var n,r,s=function(){var e=c.now()-r;e<99?d(s,99-e):(A||t)(t)};return function(){r=c.now(),n||(n=d(s,99))}};!function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(e in h=r.lazySizesConfig||r.lazysizesConfig||{},t)e in h||(h[e]=t[e]);d(function(){h.init&&Ae()})}();var N,B,D,W,$,k,O,I,U,F,j,H,Q,q,G,V,J,K,X,Y,Z,ee,te,ne,re,se,ie,ae,oe,ce,le,ue,de,fe,pe,me,he=(Y=/^img$/i,Z=/^iframe$/i,ee="onscroll"in r&&!/(gle|ing)bot/.test(navigator.userAgent),re=-1,Q=ze,G=ne=te=0,V=h.throttleDelay,J=h.ricTimeout,K=function(){q=!1,G=c.now(),Q()},X=A&&49<J?function(){A(K,{timeout:J}),J!==h.ricTimeout&&(J=h.ricTimeout)}:R(function(){d(K)},!0),se=function(e){var t;(e=!0===e)&&(J=33),q||(q=!0,(t=V-(c.now()-G))<0&&(t=0),e||t<9?X():d(X,t))},ie=R(we),ae=function(e){ie({target:e.target})},oe=R(function(t,e,n,r,s){var i,a,o,c,l,u;(l=x(t,"lazybeforeunveil",e)).defaultPrevented||(r&&(n?C(t,h.autosizesClass):t.setAttribute("sizes",r)),a=t.getAttribute(h.srcsetAttr),i=t.getAttribute(h.srcAttr),s&&(c=(o=t.parentNode)&&v.test(o.nodeName||"")),u=e.firesLoad||"src"in t&&(a||i||c),l={target:t},C(t,h.loadingClass),u&&(clearTimeout(D),D=d(ve,2500),S(t,ae,!0)),c&&z.call(o.getElementsByTagName("source"),Ce),a?t.setAttribute("srcset",a):i&&!c&&(Z.test(t.nodeName)?function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}}(t,i):t.src=i),s&&(a||c)&&T(t,{src:i})),t._lazyRace&&delete t._lazyRace,E(t,h.lazyClass),L(function(){var e=t.complete&&1<t.naturalWidth;u&&!e||(e&&C(t,"ls-is-cached"),we(l),t._lazyCache=!0,d(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&ne--},!0)}),ce=function(e){if(!e._lazyRace){var t,n=Y.test(e.nodeName),r=n&&(e.getAttribute(h.sizesAttr)||e.getAttribute("sizes")),s="auto"==r;(!s&&B||!n||!e.getAttribute("src")&&!e.srcset||e.complete||w(e,h.errorClass)||!w(e,h.lazyClass))&&(t=x(e,"lazyunveilread").detail,s&&ge.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,ne++,oe(e,t,s,r,n))}},le=P(function(){h.loadMode=3,se()}),ue=function(){B||(c.now()-$<999?d(ue,999):(B=!0,h.loadMode=3,se(),u("scroll",Ee,!0)))},{_:function(){$=c.now(),m.elements=p.getElementsByClassName(h.lazyClass),N=p.getElementsByClassName(h.lazyClass+" "+h.preloadClass),u("scroll",se,!0),u("resize",se,!0),r.MutationObserver?new MutationObserver(se).observe(g,{childList:!0,subtree:!0,attributes:!0}):(g.addEventListener("DOMNodeInserted",se,!0),g.addEventListener("DOMAttrModified",se,!0),setInterval(se,999)),u("hashchange",se,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){p.addEventListener(e,se,!0)}),/d$|^c/.test(p.readyState)?ue():(u("load",ue),p.addEventListener("DOMContentLoaded",se),d(ue,2e4)),m.elements.length?(ze(),L._lsFlush()):se()},checkElems:se,unveil:ce,_aLSL:Ee}),ge=(fe=R(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),v.test(t.nodeName||""))for(i=0,a=(s=t.getElementsByTagName("source")).length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||T(e,n.detail)}),pe=function(e,t,n){var r,s=e.parentNode;s&&(n=_(e,s,n),(r=x(e,"lazybeforesizes",{width:n,dataAttr:!!t})).defaultPrevented||(n=r.detail.width)&&n!==e._lazysizesWidth&&fe(e,s,r,n))},{_:function(){de=p.getElementsByClassName(h.autosizesClass),u("resize",me)},checkElems:me=P(function(){var e,t=de.length;if(t)for(e=0;e<t;e++)pe(de[e])}),updateElem:pe}),Ae=function(){Ae.i||(Ae.i=!0,ge._(),he._())};return m={cfg:h,autoSizer:ge,loader:he,init:Ae,uP:T,aC:C,rC:E,hC:w,fire:x,gW:_,rAF:L}}function ve(e){ne--,e&&!(ne<0)&&e.target||(ne=0)}function ye(e){return null==H&&(H="hidden"==M(p.body,"visibility")),H||"hidden"!=M(e.parentNode,"visibility")&&"hidden"!=M(e,"visibility")}function be(e,t){var n,r=e,s=ye(e);for(I-=t,j+=t,U-=t,F+=t;s&&(r=r.offsetParent)&&r!=p.body&&r!=g;)(s=0<(M(r,"opacity")||1))&&"visible"!=M(r,"overflow")&&(n=r.getBoundingClientRect(),s=F>n.left&&U<n.right&&j>n.top-1&&I<n.bottom+1);return s}function ze(){var e,t,n,r,s,i,a,o,c,l,u,d,f=m.elements;if((W=h.loadMode)&&ne<8&&(e=f.length)){for(t=0,re++;t<e;t++)if(f[t]&&!f[t]._lazyRace)if(!ee||m.prematureUnveil&&m.prematureUnveil(f[t]))ce(f[t]);else if((o=f[t].getAttribute("data-expand"))&&(i=1*o)||(i=te),l||(l=!h.expand||h.expand<1?500<g.clientHeight&&500<g.clientWidth?500:370:h.expand,u=(m._defEx=l)*h.expFactor,d=h.hFac,H=null,te<u&&ne<1&&2<re&&2<W&&!p.hidden?(te=u,re=0):te=1<W&&1<re&&ne<6?l:0),c!==i&&(k=innerWidth+i*d,O=innerHeight+i,a=-1*i,c=i),n=f[t].getBoundingClientRect(),(j=n.bottom)>=a&&(I=n.top)<=O&&(F=n.right)>=a*d&&(U=n.left)<=k&&(j||F||U||I)&&(h.loadHidden||ye(f[t]))&&(B&&ne<3&&!o&&(W<3||re<4)||be(f[t],i))){if(ce(f[t]),s=!0,9<ne)break}else!s&&B&&!r&&ne<4&&re<4&&2<W&&(N[0]||h.preloadAfterLoad)&&(N[0]||!o&&(j||F||U||I||"auto"!=f[t].getAttribute(h.sizesAttr)))&&(r=N[0]||f[t]);r&&!s&&ce(r)}}function we(e){var t=e.target;t._lazyCache?delete t._lazyCache:(ve(e),C(t,h.loadedClass),E(t,h.loadingClass),S(t,ae),x(t,"lazyloaded"))}function Ce(e){var t,n=e.getAttribute(h.srcsetAttr);(t=h.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)}function Ee(){3==h.loadMode&&(h.loadMode=2),le()}}(r,r.document),r.lazySizes=s,e.exports&&(e.exports=s)},function(ae,oe,ce){var le,e,t,s,n,r,i,a,o,c;e=window,c=navigator.userAgent,e.HTMLPictureElement&&/ecko/.test(c)&&c.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",(s=document.createElement("source"),n=function(e){var t,n,r=e.parentNode;"PICTURE"===r.nodeName.toUpperCase()?(t=s.cloneNode(),r.insertBefore(t,r.firstElementChild),setTimeout(function(){r.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,n=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=n}))},r=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)n(t[e])},i=function(){clearTimeout(t),t=setTimeout(r,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)},s.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i)),function(e,i){"use strict";var s,l,c;i.createElement("picture");function t(){}function n(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)}function r(t){var n={};return function(e){return e in n||(n[e]=t(e)),n[e]}}var C={},a=!1,o=i.createElement("img"),u=o.getAttribute,d=o.setAttribute,f=o.removeAttribute,p=i.documentElement,m={},E={algorithm:""},h=navigator.userAgent,S=/rident/.test(h)||/ecko/.test(h)&&h.match(/rv\:(\d+)/)&&35<RegExp.$1,x="currentSrc",g=/\s+\+?\d+(e\d+)?w/,A=/(\([^)]+\))?\s*(.+)/,v=e.picturefillCFG,y="font-size:100%!important;",b=!0,z={},w={},T=e.devicePixelRatio,M={px:1,in:96},_=i.createElement("a"),L=!1,R=/^[ \t\n\r\u000c]+/,P=/^[, \t\n\r\u000c]+/,N=/^[^ \t\n\r\u000c]+/,B=/[,]+$/,D=/^\d+$/,W=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;function $(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function k(e,t){return e.w?(e.cWidth=C.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e}var O,I,U,F,j,H,Q,q,G,V,J,K,X,Y,Z,ee,te,ne=(O=/^([\d\.]+)(em|vw|px)$/,I=r(function(e){return"return "+function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n}((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"}),function(e,t){var n;if(!(e in z))if(z[e]=!1,t&&(n=e.match(O)))z[e]=n[1]*M[n[2]];else try{z[e]=new Function("e",I(e))(M)}catch(e){}return z[e]}),re=function(e){if(a){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),r=(t=s.elements||C.qsa(s.context||i,s.reevaluate||s.reselect?C.sel:C.selShort)).length){for(C.setupRun(s),L=!0,n=0;n<r;n++)C.fillImg(t[n],s);C.teardownRun(s)}}};function se(e,t){return e.res-t.res}function ie(e,t){var n,r,s;if(e&&t)for(s=C.parseSet(t),e=C.makeUrl(e),n=0;n<s.length;n++)if(e===C.makeUrl(s[n].url)){r=s[n];break}return r}e.console&&console.warn,x in o||(x="src"),m["image/jpeg"]=!0,m["image/gif"]=!0,m["image/png"]=!0,m["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),C.ns=("pf"+(new Date).getTime()).substr(0,9),C.supSrcset="srcset"in o,C.supSizes="sizes"in o,C.supPicture=!!e.HTMLPictureElement,C.supSrcset&&C.supPicture&&!C.supSizes&&(U=i.createElement("img"),o.srcset="data:,a",U.src="data:,a",C.supSrcset=o.complete===U.complete,C.supPicture=C.supSrcset&&C.supPicture),C.supSrcset&&!C.supSizes?(F="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",H=function(){2===j.width&&(C.supSizes=!0),l=C.supSrcset&&!C.supSizes,a=!0,setTimeout(re)},(j=i.createElement("img")).onload=H,j.onerror=H,j.setAttribute("sizes","9px"),j.srcset=F+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",j.src=F):a=!0,C.selShort="picture>img,img[srcset]",C.sel=C.selShort,C.cfg=E,C.DPR=T||1,C.u=M,C.types=m,C.setSize=t,C.makeUrl=r(function(e){return _.href=e,_.href}),C.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},C.matchesMedia=function(){return e.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?C.matchesMedia=function(e){return!e||matchMedia(e).matches}:C.matchesMedia=C.mMQ,C.matchesMedia.apply(this,arguments)},C.mMQ=function(e){return!e||ne(e)},C.calcLength=function(e){var t=ne(e,!0)||!1;return t<0&&(t=!1),t},C.supportsType=function(e){return!e||m[e]},C.parseSize=r(function(e){var t=(e||"").match(A);return{media:t&&t[1],length:t&&t[2]}}),C.parseSet=function(e){return e.cands||(e.cands=function(r,d){function e(e){var t,n=e.exec(r.substring(a));if(n)return t=n[0],a+=t.length,t}var f,p,t,n,s,i=r.length,a=0,m=[];function o(){var e,t,n,r,s,i,a,o,c,l=!1,u={};for(r=0;r<p.length;r++)i=(s=p[r])[s.length-1],a=s.substring(0,s.length-1),o=parseInt(a,10),c=parseFloat(a),D.test(a)&&"w"===i?((e||t)&&(l=!0),0===o?l=!0:e=o):W.test(a)&&"x"===i?((e||t||n)&&(l=!0),c<0?l=!0:t=c):D.test(a)&&"h"===i?((n||t)&&(l=!0),0===o?l=!0:n=o):l=!0;l||(u.url=f,e&&(u.w=e),t&&(u.d=t),n&&(u.h=n),n||t||e||(u.d=1),1===u.d&&(d.has1x=!0),u.set=d,m.push(u))}function c(){for(e(R),t="",n="in descriptor";;){if(s=r.charAt(a),"in descriptor"===n)if($(s))t&&(p.push(t),t="",n="after descriptor");else{if(","===s)return a+=1,t&&p.push(t),void o();if("("===s)t+=s,n="in parens";else{if(""===s)return t&&p.push(t),void o();t+=s}}else if("in parens"===n)if(")"===s)t+=s,n="in descriptor";else{if(""===s)return p.push(t),void o();t+=s}else if("after descriptor"===n)if($(s));else{if(""===s)return void o();n="in descriptor",a-=1}a+=1}}for(;;){if(e(P),i<=a)return m;f=e(N),p=[],","===f.slice(-1)?(f=f.replace(B,""),o()):c()}}(e.srcset,e)),e.cands},C.getEmValue=function(){var e;if(!s&&(e=i.body)){var t=i.createElement("div"),n=p.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",p.style.cssText=y,e.style.cssText=y,e.appendChild(t),s=t.offsetWidth,e.removeChild(t),s=parseFloat(s,10),p.style.cssText=n,e.style.cssText=r}return s||16},C.calcListLength=function(l){if(!(l in w)||E.uT){var e=C.calcLength(function(){var e,t,n,r,s,i,a,o=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,c=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(n=(t=function(e){var t,n="",r=[],s=[],i=0,a=0,o=!1;function c(){n&&(r.push(n),n="")}function l(){r[0]&&(s.push(r),r=[])}for(;;){if(""===(t=e.charAt(a)))return c(),l(),s;if(o){if("*"===t&&"/"===e[a+1]){o=!1,a+=2,c();continue}a+=1}else{if($(t)){if(e.charAt(a-1)&&$(e.charAt(a-1))||!n){a+=1;continue}if(0===i){c(),a+=1;continue}t=" "}else if("("===t)i+=1;else if(")"===t)i-=1;else{if(","===t){c(),l(),a+=1;continue}if("/"===t&&"*"===e.charAt(a+1)){o=!0,a+=2;continue}}n+=t,a+=1}}}(l)).length,e=0;e<n;e++)if(a=s=(r=t[e])[r.length-1],o.test(a)&&0<=parseFloat(a)||c.test(a)||"0"===a||"-0"===a||"+0"===a){if(i=s,r.pop(),0===r.length)return i;if(r=r.join(" "),C.matchesMedia(r))return i}return"100vw"}());w[l]=e||M.width}return w[l]},C.setRes=function(e){var t;if(e)for(var n=0,r=(t=C.parseSet(e)).length;n<r;n++)k(t[n],e.sizes);return t},C.setRes.res=k,C.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,c,l,u,d,f,p,m,h,g,A=t[C.ns],v=C.DPR;if(o=A.curSrc||t[x],(c=A.curCan||(y=t,b=o,!(z=e[0].set)&&b&&(z=(z=y[C.ns].sets)&&z[z.length-1]),(w=ie(b,z))&&(b=C.makeUrl(b),y[C.ns].curSrc=b,(y[C.ns].curCan=w).res||k(w,w.set.sizes)),w))&&c.set===e[0].set&&((u=S&&!t.complete&&c.res-.1>v)||(c.cached=!0,c.res>=v&&(a=c))),!a)for(e.sort(se),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=v){a=e[s=r-1]&&(u||o!==C.makeUrl(n.url))&&(d=e[s].res,f=n.res,p=v,m=e[s].cached,g=h=void 0,p<("saveData"===E.algorithm?2.7<d?p+1:(g=(f-p)*(h=Math.pow(d-.6,1.5)),m&&(g+=.1*h),d+g):1<p?Math.sqrt(d*f):d))?e[s]:n;break}a&&(l=C.makeUrl(a.url),A.curSrc=l,A.curCan=a,l!==o&&C.setSrc(t,a),C.setSize(t))}var y,b,z,w},C.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},C.getSet=function(e){var t,n,r,s=!1,i=e[C.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&C.matchesMedia(n.media)&&(r=C.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},C.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[C.ns];void 0!==c.src&&!n.src||(c.src=u.call(e,"src"),c.src?d.call(e,"data-pfsrc",c.src):f.call(e,"data-pfsrc")),void 0!==c.srcset&&!n.srcset&&C.supSrcset&&!e.srcset||(r=u.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,function(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[C.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:u.call(e,"sizes")},c.sets.push(s),(i=(l||c.src)&&g.test(c.srcset||""))||!c.src||ie(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||s&&!C.supSrcset||i&&!C.supSizes),a&&C.supSrcset&&!c.supported&&(r?(d.call(e,"data-pfsrcset",r),e.srcset=""):f.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==C.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},C.fillImg=function(e,t){var n,r,s,i,a,o=t.reselect||t.reevaluate;e[C.ns]||(e[C.ns]={}),n=e[C.ns],!o&&n.evaled===c||(n.parsed&&!t.reevaluate||C.parseSets(e,e.parentNode,t),n.supported?n.evaled=c:(r=e,a=!1,"pending"!==(i=C.getSet(r))&&(a=c,i&&(s=C.setRes(i),C.applySetCandidate(s,r))),r[C.ns].evaled=a))},C.setupRun=function(){L&&!b&&T===e.devicePixelRatio||(b=!1,T=e.devicePixelRatio,z={},w={},C.DPR=T||1,M.width=Math.max(e.innerWidth||0,p.clientWidth),M.height=Math.max(e.innerHeight||0,p.clientHeight),M.vw=M.width/100,M.vh=M.height/100,c=[M.height,M.width,T].join("-"),M.em=C.getEmValue(),M.rem=M.em)},C.supPicture?(re=t,C.fillImg=t):(K=e.attachEvent?/d$|^c/:/d$|^c|^i/,X=function(){var e=i.readyState||"";Y=setTimeout(X,"loading"===e?200:999),i.body&&(C.fillImgs(),(Q=Q||K.test(e))&&clearTimeout(Y))},Y=setTimeout(X,i.body?9:99),Z=p.clientHeight,n(e,"resize",(q=function(){b=Math.max(e.innerWidth||0,p.clientWidth)!==M.width||p.clientHeight!==Z,Z=p.clientHeight,b&&C.fillImgs()},99,J=function(){var e=new Date-V;e<99?G=setTimeout(J,99-e):(G=null,q())},function(){V=new Date,G||(G=setTimeout(J,99))})),n(i,"readystatechange",X)),C.picturefill=re,C.fillImgs=re,C.teardownRun=t,re._=C,e.picturefillCFG={pf:C,push:function(e){var t=e.shift();"function"==typeof C[t]?C[t].apply(C,e):(E[t]=e[0],L&&C.fillImgs({reselect:!0}))}};for(;v&&v.length;)e.picturefillCFG.push(v.shift());e.picturefill=re,"object"==typeof ae.exports?ae.exports=re:void 0===(le=function(){return re}.call(oe,ce,oe,ae))||(ae.exports=le),C.supPicture||(m["image/webp"]=(ee="image/webp",(te=new e.Image).onerror=function(){m[ee]=!1,re()},te.onload=function(){m[ee]=1===te.width,re()},te.src="data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==","pending"))}(window,document)}]);