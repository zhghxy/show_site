(this["webpackJsonpshow-site"]=this["webpackJsonpshow-site"]||[]).push([[0],{21:function(e,a,t){"use strict";var n=t(4),l=t(5),r=t(7),c=t(6),s=t(19),o=t(8),i=t(0),m=t.n(i),u=t(17),p=t.n(u),d=t(12),h=t(11);var E=function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).state={scroll:!1},t.handleScroll=t.handleScroll.bind(Object(s.a)(t)),t}return Object(o.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){window.onscroll=function(e,a){var t=null;return function(){t||(t=setTimeout((function(){e(),t=null}),a))}}(this.handleScroll,50)}},{key:"handleScroll",value:function(){console.log("scroll"),p()(window).scrollTop()>30?this.setState({scroll:!0}):this.setState({scroll:!1})}},{key:"render",value:function(){var e=["","/people","/paper","/project","/patent"],a=this.props.location.pathname.match(/\/[a-zA-Z_]+/),t=a?a[0]:"";return m.a.createElement("nav",{className:"navbar navbar-expand-lg "+(this.state.scroll?"bg-light navbar-scroll navbar-light":"navbar-dark bg-dark")},m.a.createElement("a",{className:"navbar-brand"},m.a.createElement("img",{src:"http://39.100.113.162/show/img/log.png",className:"d-inline-block mr-2",alt:"log",width:"30",height:"30"}),"\u89c6\u9891\u7f16\u7801\u7ec4"),m.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},m.a.createElement("span",{className:"navbar-toggler-icon"})),m.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},m.a.createElement("ul",{className:"navbar-nav mr-auto"},m.a.createElement("li",{className:"nav-item "+(t===e[0]?"active":"")},m.a.createElement(d.b,{className:"nav-link",to:"/"},"\u4e3b\u9875 ",m.a.createElement("span",{className:"sr-only"},"(current)"))),m.a.createElement("li",{className:"nav-item "+(t===e[1]?"active":"")},m.a.createElement(d.b,{className:"nav-link",to:"/people"},"\u6210\u5458")),m.a.createElement("li",{className:"nav-item "+(t===e[2]?"active":"")},m.a.createElement(d.b,{className:"nav-link",to:"/paper"},"\u8bba\u6587")),m.a.createElement("li",{className:"nav-item "+(t===e[3]?"active":"")},m.a.createElement(d.b,{className:"nav-link",to:"/project"},"\u9879\u76ee")),m.a.createElement("li",{className:"nav-item "+(t===e[4]?"active":"")},m.a.createElement(d.b,{className:"nav-link",to:"/patent"},"\u4e13\u5229")))))}}]),a}(m.a.Component);a.a=Object(h.f)(E)},28:function(e,a,t){"use strict";function n(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e=e.toUpperCase();var n="";for(var l in t)n+="".concat(l,"=").concat(t[l],"&");return n.length>0&&(n=n.substring(0,n.length-1)),new Promise((function(l,r){var c=new XMLHttpRequest;c.withCredentials=!0,c.onreadystatechange=function(){4===c.readyState&&(200===c.status?(console.log(c.responseText),l(JSON.parse(c.responseText))):r(new Error(c.statusText)))},"POST"===e?(c.open(e,a),c.setRequestHeader("Content-Type","application/json;charset=UTF-8"),c.send(JSON.stringify(t))):"GET"===e&&(n?c.open(e,a+"?"+n):c.open(e,a),c.send())}))}t.d(a,"a",(function(){return n}))},29:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(4),l=t(5),r=t(7),c=t(6),s=t(8),o=t(0),i=t.n(o),m=t(55),u=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"result-view text-danger"},i.a.createElement(m.a,{size:"48"}),i.a.createElement("div",{className:"result-body"},i.a.createElement("p",null,this.props.text)))}}]),a}(i.a.Component)},38:function(e,a,t){e.exports=t(54)},43:function(e,a,t){},53:function(e,a,t){},54:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(31),c=t.n(r),s=t(12),o=t(11),i=t(2),m=(t(43),t(4)),u=t(5),p=t(7),d=t(6),h=t(8),E=t(21),v=t(28),b=t(61),f=t(60),g=t(62),N=t(29),j=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-header"},this.props.conf),l.a.createElement("div",{className:"card-body"},l.a.createElement("h6",{className:"card-title"},this.props.title),l.a.createElement("p",{className:"card-text"},this.props.author),this.props.link&&l.a.createElement("a",{className:"card-link btn btn-self",href:this.props.link},l.a.createElement(f.a,{className:"mr-1",size:"15"}),"Paper")))}}]),a}(l.a.Component),O=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(d.a)(a).call(this,e))).state={paper_list:[],error:!1,error_msg:"error"},t}return Object(h.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(v.a)("GET","http://39.100.113.162/info/paper/getPaperByYear.php",{limit:6}).then((function(a){0===a.code?e.setState({paper_list:a.data,error:!1}):e.setState({error:!0})}),(function(a){console.log(a),e.setState({error:!0,error_msg:a.message})}))}},{key:"render",value:function(){var e=this.state.paper_list.map((function(e){return l.a.createElement(j,{key:e.id,link:e.pdf_link,author:e.author,conf:e.conf,title:e.title})}));return l.a.createElement("div",{className:"home row border-left border-right border-bottom"},l.a.createElement("div",{className:"paper-container col-sm-8"},l.a.createElement("h4",null,l.a.createElement(b.a,{className:"align-bottom",size:"30"}),"\u6700\u65b0\u8bba\u6587"),this.state.error?l.a.createElement(N.a,{text:this.state.error_msg}):l.a.createElement("div",{className:"card-group"},e)),l.a.createElement("div",{className:"info-container col-sm-4"},l.a.createElement("h4",null,l.a.createElement(g.a,{className:"align-bottom",size:"30 "}),"\u5173\u4e8e\u6211\u4eec"),l.a.createElement("p",null,"\u672c\u9879\u76ee\u7ec4\u5171 \u6709\u4e00\u540d\u6307\u5bfc\u8001\u5e08\uff0c\u8096\u6676\u526f\u6559\u6388\uff0c\u5171\u67094\u540d\u535a\u58eb\uff0c21\u540d\u7855\u58eb\u3002 \u9879\u76ee\u7ec4\u5171\u62c5\u4efb\u8fc73\u9879\u56fd\u5bb6\u7ea7\u91cd\u70b9\u9879\u76ee\uff0c4\u9879\u56fd\u5bb6\u81ea\u7136\u79d1\u5b66\u57fa\u91d1\u9879\u76ee\uff0c1\u9879\u56fd\u9645\u9879\u76ee\uff0c 2\u9879\u7701\u7ea7\u91cd\u5927\u9879\u76ee\uff0c\u5176\u4ed6\u91cd\u5927\u9879\u76ee2\u9879\u3002\u6b64\u5916\uff0c\u9879\u76ee\u7ec4\u8fd8\u5728AItrans\u548cICME Grand Chanllenge\u7b49 \u91cd\u5927\u6bd4\u8d5b\u4e2d\u53d6\u5f97\u4e86\u4f18\u5f02\u6210\u7ee9\u3002")))}}]),a}(l.a.Component),y=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:"carouselIndicators",className:"carousel slide carousel-fade w-100","data-ride":"carousel"},l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"carousel-item active",style:{backgroundImage:"url(http://39.100.113.162/img/general1.png)"}}),l.a.createElement("div",{className:"carousel-item",style:{backgroundImage:"url(http://39.100.113.162/img/whu_1.jpg)"}}),l.a.createElement("div",{className:"carousel-item",style:{backgroundImage:"url(http://39.100.113.162/img/whu_3.jpg)"}})),l.a.createElement("a",{className:"carousel-control-prev",href:"#carouselIndicators",role:"button","data-slide":"prev"},l.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"carousel-control-next",href:"#carouselIndicators",role:"button","data-slide":"next"},l.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),l.a.createElement("span",{className:"sr-only"},"Next")))}}]),a}(l.a.Component),k=function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,null),l.a.createElement("div",{className:"container img-container"},l.a.createElement(y,null)),l.a.createElement("div",{className:"container main-container"},l.a.createElement("div",{className:"main-shade  border-left border-right"},l.a.createElement("svg",{className:"w-100 main-shade-svg",version:"1.1",viewBox:"0 0 100 100",preserveAspectRatio:"none"},l.a.createElement("path",{className:"main-shade-path",d:"M0,0 C16.6666667,66 33.3333333,99 50,99 C66.6666667, 99 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z"}))),l.a.createElement(O,null),l.a.createElement("footer",{className:"d-flex justify-content-around"},l.a.createElement("div",null,l.a.createElement("h6",null,"Contact us"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",null,"address"),l.a.createElement("span",null,"\u6b66\u6c49\u5927\u5b66\u672c\u79d1\u751f\u9662\u697c\u516d\u697c\u5357619\u5ba4")),l.a.createElement("div",null,l.a.createElement("span",null,"phone"),l.a.createElement("span",null,"13248201775")),l.a.createElement("div",null,l.a.createElement("span",null,"e-mail"),l.a.createElement("span",null,"3321794527@qq.com")))),l.a.createElement("div",null,l.a.createElement("h6",null,"Related Connection"),l.a.createElement("a",{href:"mmap.whu.edu.cn"},"MMAP")))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(49),t(50),t(51),t(53);var w=t(36);new(t.n(w).a)({bid:"d4w5q5hr-z1r5gsv4",plugins:[]}).installAll(),c.a.render(l.a.createElement(s.a,{history:Object(i.b)()},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:k}),l.a.createElement(o.a,{path:"/"},l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/people/:id",component:Object(n.lazy)((function(){return t.e(3).then(t.bind(null,65))}))}),l.a.createElement(o.a,{path:"/paper",component:Object(n.lazy)((function(){return t.e(4).then(t.bind(null,66))}))}),l.a.createElement(o.a,{path:"/people",component:Object(n.lazy)((function(){return t.e(7).then(t.bind(null,63))}))}),l.a.createElement(o.a,{path:"/project",component:Object(n.lazy)((function(){return t.e(6).then(t.bind(null,67))}))}),l.a.createElement(o.a,{path:"/patent",component:Object(n.lazy)((function(){return t.e(5).then(t.bind(null,68))}))}))),l.a.createElement("footer",{className:"d-flex justify-content-around"},l.a.createElement("div",null,l.a.createElement("h6",null,"Contact us"),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",null,"address"),l.a.createElement("span",null,"\u6b66\u6c49\u5927\u5b66\u672c\u79d1\u751f\u9662\u697c\u516d\u697c\u5357619\u5ba4")),l.a.createElement("div",null,l.a.createElement("span",null,"phone"),l.a.createElement("span",null,"13248201775")),l.a.createElement("div",null,l.a.createElement("span",null,"e-mail"),l.a.createElement("span",null,"3321794527@qq.com")))),l.a.createElement("div",null,l.a.createElement("h6",null,"Related Connection"),l.a.createElement("a",{href:"mmap.whu.edu.cn"},"MMAP")))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.56f143e6.chunk.js.map