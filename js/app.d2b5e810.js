(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],o[i]&&f.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"687cbed7"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),r=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/pecuaria/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=n("8a03"),r=n.n(o),i=(n("5abe"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container"},[n("nav",{staticClass:"navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[t._m(0),n("div",{staticClass:"navbar-menu",attrs:{id:"navbarBasicExample"}},[n("div",{staticClass:"navbar-start"},[n("a",{staticClass:"navbar-item"},[n("router-link",{attrs:{to:"/"}},[t._v("Home")])],1),n("div",{staticClass:"navbar-item has-dropdown is-hoverable"},[n("a",{staticClass:"navbar-link"},[t._v("\n            Mais\n          ")]),n("div",{staticClass:"navbar-dropdown"},[n("a",{staticClass:"navbar-item"},[n("router-link",{attrs:{to:"/about"}},[t._v("Ação 1")])],1),n("a",{staticClass:"navbar-item"},[t._v("\n              Ação 2\n            ")]),n("a",{staticClass:"navbar-item"},[t._v("\n              Ação 3\n            ")]),n("hr",{staticClass:"navbar-divider"}),n("a",{staticClass:"navbar-item"},[t._v("\n              Ação 4\n            ")])])])]),t._m(1)])])]),n("router-view")],1)}),s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar-brand"},[a("a",{staticClass:"navbar-item",attrs:{href:"http://localhost:8080"}},[a("img",{attrs:{src:n("786d"),width:"56",height:"28"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[n("div",{staticClass:"buttons"},[n("a",{staticClass:"button is-primary"},[n("strong",[t._v("Criar conta")])]),n("a",{staticClass:"button is-light"},[t._v("\n              Acessar\n            ")])])])])}],c=n("2877"),l={},u=Object(c["a"])(l,i,s,!1,null,null,null),d=u.exports,f=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("Geolocation")],1)},p=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("b-table",{attrs:{data:t.coordenadas,columns:t.colunas}})],1)])},b=[],h={name:"Geolocation",data:function(){return{coordenadas:[],colunas:[{field:"latitude",label:"Latitude"},{field:"longitude",label:"Longitude"},{field:"timestamp",label:"Timestamp"}]}},mounted:function(){this.geolocation()},methods:{geolocation:function(){var t=this;navigator.geolocation.watchPosition(function(e){var n={latitude:e.coords.latitude,longitude:e.coords.longitude,timestamp:e.timestamp};t.coordenadas.push(n)},function(t){console.log(t)},{enableHighAccuracy:!0,maximumAge:3e4,timeout:3e4})}}},g=h,w=Object(c["a"])(g,m,b,!1,null,null,null),_=w.exports,C={name:"home",components:{Geolocation:_}},y=C,j=Object(c["a"])(y,v,p,!1,null,null,null),O=j.exports;a["default"].use(f["a"]);var k=new f["a"]({mode:"history",base:"/pecuaria/",routes:[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),x=n("2f62");a["default"].use(x["a"]);var A=new x["a"].Store({state:{},mutations:{},actions:{}}),E=n("9483");Object(E["a"])("".concat("/pecuaria/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["default"].use(r.a),a["default"].config.productionTip=!1,new a["default"]({router:k,store:A,render:function(t){return t(d)}}).$mount("#app")},"786d":function(t,e,n){t.exports=n.p+"img/logo-cow.fefaa81d.png"}});
//# sourceMappingURL=app.d2b5e810.js.map