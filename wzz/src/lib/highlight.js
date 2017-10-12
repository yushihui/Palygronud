/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function r(e){return e.nodeName.toLowerCase()}function t(e,n){var r=e&&e.exec(n);return r&&0===r.index}function a(e){return L.test(e)}function c(e){var n,r,t,c,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",r=B.exec(i))return x(r[1])?r[1]:"no-highlight";for(i=i.split(/\s+/),n=0,t=i.length;t>n;n++)if(c=i[n],a(c)||x(c))return c}function i(e){var n,r={},t=Array.prototype.slice.call(arguments,1);for(n in e)r[n]=e[n];return t.forEach(function(e){for(n in e)r[n]=e[n]}),r}function o(e){var n=[];return function t(e,a){for(var c=e.firstChild;c;c=c.nextSibling)3===c.nodeType?a+=c.nodeValue.length:1===c.nodeType&&(n.push({event:"start",offset:a,node:c}),a=t(c,a),r(c).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:c}));return a}(e,0),n}function u(e,t,a){function c(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function i(e){function t(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}l+="<"+r(e)+R.map.call(e.attributes,t).join("")+">"}function o(e){l+="</"+r(e)+">"}function u(e){("start"===e.event?i:o)(e.node)}for(var s=0,l="",f=[];e.length||t.length;){var b=c();if(l+=n(a.substring(s,b[0].offset)),s=b[0].offset,b===e){f.reverse().forEach(o);do u(b.splice(0,1)[0]),b=c();while(b===e&&b.length&&b[0].offset===s);f.reverse().forEach(i)}else"start"===b[0].event?f.push(b[0].node):f.pop(),u(b.splice(0,1)[0])}return l+n(a.substr(s))}function s(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(n){return i(e,{v:null},n)})),e.cached_variants||e.eW&&[i(e)]||[e]}function l(e){function n(e){return e&&e.source||e}function r(r,t){return new RegExp(n(r),"m"+(e.cI?"i":"")+(t?"g":""))}function t(a,c){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var i={},o=function(n,r){e.cI&&(r=r.toLowerCase()),r.split(" ").forEach(function(e){var r=e.split("|");i[r[0]]=[n,r[1]?Number(r[1]):1]})};"string"==typeof a.k?o("keyword",a.k):E(a.k).forEach(function(e){o(e,a.k[e])}),a.k=i}a.lR=r(a.l||/\w+/,!0),c&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=r(a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=r(a.e)),a.tE=n(a.e)||"",a.eW&&c.tE&&(a.tE+=(a.e?"|":"")+c.tE)),a.i&&(a.iR=r(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]),a.c=Array.prototype.concat.apply([],a.c.map(function(e){return s("self"===e?a:e)})),a.c.forEach(function(e){t(e,a)}),a.starts&&t(a.starts,c);var u=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=u.length?r(u.join("|"),!0):{exec:function(){return null}}}}t(e)}function f(e,r,a,c){function i(e,n){var r,a;for(r=0,a=n.c.length;a>r;r++)if(t(n.c[r].bR,e))return n.c[r]}function o(e,n){if(t(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?o(e.parent,n):void 0}function u(e,n){return!a&&t(n.iR,e)}function s(e,n){var r=N.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(r)&&e.k[r]}function g(e,n,r,t){var a=t?"":_.classPrefix,c='<span class="'+a,i=r?"":C;return c+=e+'">',c+n+i}function d(){var e,r,t,a;if(!R.k)return n(L);for(a="",r=0,R.lR.lastIndex=0,t=R.lR.exec(L);t;)a+=n(L.substring(r,t.index)),e=s(R,t),e?(B+=e[1],a+=g(e[0],n(t[0]))):a+=n(t[0]),r=R.lR.lastIndex,t=R.lR.exec(L);return a+n(L.substr(r))}function p(){var e="string"==typeof R.sL;if(e&&!y[R.sL])return n(L);var r=e?f(R.sL,L,!0,E[R.sL]):b(L,R.sL.length?R.sL:void 0);return R.r>0&&(B+=r.r),e&&(E[R.sL]=r.top),g(r.language,r.value,!1,!0)}function h(){k+=null!=R.sL?p():d(),L=""}function v(e){k+=e.cN?g(e.cN,"",!0):"",R=Object.create(e,{parent:{value:R}})}function m(e,n){if(L+=e,null==n)return h(),0;var r=i(n,R);if(r)return r.skip?L+=n:(r.eB&&(L+=n),h(),r.rB||r.eB||(L=n)),v(r,n),r.rB?0:n.length;var t=o(R,n);if(t){var a=R;a.skip?L+=n:(a.rE||a.eE||(L+=n),h(),a.eE&&(L=n));do R.cN&&(k+=C),R.skip||R.sL||(B+=R.r),R=R.parent;while(R!==t.parent);return t.starts&&v(t.starts,""),a.rE?0:n.length}if(u(n,R))throw new Error('Illegal lexeme "'+n+'" for mode "'+(R.cN||"<unnamed>")+'"');return L+=n,n.length||1}var N=x(e);if(!N)throw new Error('Unknown language: "'+e+'"');l(N);var w,R=c||N,E={},k="";for(w=R;w!==N;w=w.parent)w.cN&&(k=g(w.cN,"",!0)+k);var L="",B=0;try{for(var M,I,A=0;;){if(R.t.lastIndex=A,M=R.t.exec(r),!M)break;I=m(r.substring(A,M.index),M[0]),A=M.index+I}for(m(r.substr(A)),w=R;w.parent;w=w.parent)w.cN&&(k+=C);return{r:B,value:k,language:e,top:R}}catch($){if($.message&&-1!==$.message.indexOf("Illegal"))return{r:0,value:n(r)};throw $}}function b(e,r){r=r||_.languages||E(y);var t={r:0,value:n(e)},a=t;return r.filter(x).forEach(function(n){var r=f(n,e,!1);r.language=n,r.r>a.r&&(a=r),r.r>t.r&&(a=t,t=r)}),a.language&&(t.second_best=a),t}function g(e){return _.tabReplace||_.useBR?e.replace(M,function(e,n){return _.useBR&&"\n"===e?"<br>":_.tabReplace?n.replace(/\t/g,_.tabReplace):""}):e}function d(e,n,r){var t=n?k[n]:r,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(t)&&a.push(t),a.join(" ").trim()}function p(e){var n,r,t,i,s,l=c(e);a(l)||(_.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,s=n.textContent,t=l?f(l,s,!0):b(s),r=o(n),r.length&&(i=document.createElementNS("http://www.w3.org/1999/xhtml","div"),i.innerHTML=t.value,t.value=u(r,o(i),s)),t.value=g(t.value),e.innerHTML=t.value,e.className=d(e.className,l,t.language),e.result={language:t.language,re:t.r},t.second_best&&(e.second_best={language:t.second_best.language,re:t.second_best.r}))}function h(e){_=i(_,e)}function v(){if(!v.called){v.called=!0;var e=document.querySelectorAll("pre code");R.forEach.call(e,p)}}function m(){addEventListener("DOMContentLoaded",v,!1),addEventListener("load",v,!1)}function N(n,r){var t=y[n]=r(e);t.aliases&&t.aliases.forEach(function(e){k[e]=n})}function w(){return E(y)}function x(e){return e=(e||"").toLowerCase(),y[e]||y[k[e]]}var R=[],E=Object.keys,y={},k={},L=/^(no-?highlight|plain|text)$/i,B=/\blang(?:uage)?-([\w-]+)\b/i,M=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,C="</span>",_={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=f,e.highlightAuto=b,e.fixMarkup=g,e.highlightBlock=p,e.configure=h,e.initHighlighting=v,e.initHighlightingOnLoad=m,e.registerLanguage=N,e.listLanguages=w,e.getLanguage=x,e.inherit=i,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(n,r,t){var a=e.inherit({cN:"comment",b:n,e:r,c:[]},t||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e.registerLanguage("ruby",function(e){var n="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",r={keyword:"and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",literal:"true false nil"},t={cN:"doctag",b:"@[A-Za-z]+"},a={b:"#<",e:">"},c=[e.C("#","$",{c:[t]}),e.C("^\\=begin","^\\=end",{c:[t],r:10}),e.C("^__END__","\\n$")],i={cN:"subst",b:"#\\{",e:"}",k:r},o={cN:"string",c:[e.BE,i],v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/`/,e:/`/},{b:"%[qQwWx]?\\(",e:"\\)"},{b:"%[qQwWx]?\\[",e:"\\]"},{b:"%[qQwWx]?{",e:"}"},{b:"%[qQwWx]?<",e:">"},{b:"%[qQwWx]?/",e:"/"},{b:"%[qQwWx]?%",e:"%"},{b:"%[qQwWx]?-",e:"-"},{b:"%[qQwWx]?\\|",e:"\\|"},{b:/\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/},{b:/<<(-?)\w+$/,e:/^\s*\w+$/}]},u={cN:"params",b:"\\(",e:"\\)",endsParent:!0,k:r},s=[o,a,{cN:"class",bK:"class module",e:"$|;",i:/=/,c:[e.inherit(e.TM,{b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"}),{b:"<\\s*",c:[{b:"("+e.IR+"::)?"+e.IR}]}].concat(c)},{cN:"function",bK:"def",e:"$|;",c:[e.inherit(e.TM,{b:n}),u].concat(c)},{b:e.IR+"::"},{cN:"symbol",b:e.UIR+"(\\!|\\?)?:",r:0},{cN:"symbol",b:":(?!\\s)",c:[o,{b:n}],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},{cN:"params",b:/\|/,e:/\|/,k:r},{b:"("+e.RSR+"|unless)\\s*",k:"unless",c:[a,{cN:"regexp",c:[e.BE,i],i:/\n/,v:[{b:"/",e:"/[a-z]*"},{b:"%r{",e:"}[a-z]*"},{b:"%r\\(",e:"\\)[a-z]*"},{b:"%r!",e:"![a-z]*"},{b:"%r\\[",e:"\\][a-z]*"}]}].concat(c),r:0}].concat(c);i.c=s,u.c=s;var l="[>?]>",f="[\\w#]+\\(\\w+\\):\\d+:\\d+>",b="(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",g=[{b:/^\s*=>/,starts:{e:"$",c:s}},{cN:"meta",b:"^("+l+"|"+f+"|"+b+")",starts:{e:"$",c:s}}];return{aliases:["rb","gemspec","podspec","thor","irb"],k:r,i:/\/\*/,c:c.concat(g).concat(s)}}),e.registerLanguage("yaml",function(e){var n="true false yes no null",r="^[ \\-]*",t="[a-zA-Z_][\\w\\-]*",a={cN:"attr",v:[{b:r+t+":"},{b:r+'"'+t+'":'},{b:r+"'"+t+"':"}]},c={cN:"template-variable",v:[{b:"{{",e:"}}"},{b:"%{",e:"}"}]},i={cN:"string",r:0,v:[{b:/'/,e:/'/},{b:/"/,e:/"/},{b:/\S+/}],c:[e.BE,c]};return{cI:!0,aliases:["yml","YAML","yaml"],c:[a,{cN:"meta",b:"^---s*$",r:10},{cN:"string",b:"[\\|>] *$",rE:!0,c:i.c,e:a.v[0].b},{b:"<%[%=-]?",e:"[%-]?%>",sL:"ruby",eB:!0,eE:!0,r:0},{cN:"type",b:"!!"+e.UIR},{cN:"meta",b:"&"+e.UIR+"$"},{cN:"meta",b:"\\*"+e.UIR+"$"},{cN:"bullet",b:"^ *-",r:0},e.HCM,{bK:n,k:{literal:n}},e.CNM,i]}}),e});