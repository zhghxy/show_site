(this["webpackJsonpshow-site"]=this["webpackJsonpshow-site"]||[]).push([[3,4],{430:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=m(r),l=m(a(136)),i=m(a(63)),s=a(431),c=m(a(432)),d=m(a(433)),u=m(a(434));function m(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,g=0,E=0,b=0,y="data-lazyload-listened",w=[],_=[],N=!1;try{var O=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,O)}catch(D){}var j=!!N&&{capture:!1,passive:!0},k=function(e){var t=l.default.findDOMNode(e);if(t instanceof HTMLElement){var a=(0,c.default)(t);(e.props.overflow&&a!==t.ownerDocument&&a!==document&&a!==document.documentElement?function(e,t){var a=l.default.findDOMNode(e),n=void 0,r=void 0,o=void 0,i=void 0;try{var s=t.getBoundingClientRect();n=s.top,r=s.left,o=s.height,i=s.width}catch(D){n=v,r=g,o=b,i=E}var c=window.innerHeight||document.documentElement.clientHeight,d=window.innerWidth||document.documentElement.clientWidth,u=Math.max(n,0),m=Math.max(r,0),f=Math.min(c,n+o)-u,p=Math.min(d,r+i)-m,h=void 0,y=void 0,w=void 0,_=void 0;try{var N=a.getBoundingClientRect();h=N.top,y=N.left,w=N.height,_=N.width}catch(D){h=v,y=g,w=b,_=E}var O=h-u,j=y-m,k=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return O-k[0]<=f&&O+w+k[1]>=0&&j-k[0]<=p&&j+_+k[1]>=0}(e,a):function(e){var t=l.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var a=void 0,n=void 0;try{var r=t.getBoundingClientRect();a=r.top,n=r.height}catch(D){a=v,n=b}var o=window.innerHeight||document.documentElement.clientHeight,i=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return a-i[0]<=o&&a+n+i[1]>=0}(e))?e.visible||(e.props.once&&_.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},M=function(){for(var e=0;e<w.length;++e){var t=w[e];k(t)}_.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),_=[]},T=void 0,C=null,S=function(e){function t(e){f(this,t);var a=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.visible=!1,a}return h(t,e),n(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var a=void 0!==this.props.debounce&&"throttle"===T||"debounce"===T&&void 0===this.props.debounce;if(a&&((0,s.off)(e,"scroll",C,j),(0,s.off)(window,"resize",C,j),C=null),C||(void 0!==this.props.debounce?(C=(0,d.default)(M,"number"===typeof this.props.debounce?this.props.debounce:300),T="debounce"):void 0!==this.props.throttle?(C=(0,u.default)(M,"number"===typeof this.props.throttle?this.props.throttle:300),T="throttle"):C=M),this.props.overflow){var n=(0,c.default)(l.default.findDOMNode(this));if(n&&"function"===typeof n.getAttribute){var r=+n.getAttribute(y)+1;1===r&&n.addEventListener("scroll",C,j),n.setAttribute(y,r)}}else if(0===w.length||a){var o=this.props,i=o.scroll,m=o.resize;i&&(0,s.on)(e,"scroll",C,j),m&&(0,s.on)(window,"resize",C,j)}w.push(this),k(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(l.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",C,j),e.removeAttribute(y)):e.setAttribute(y,t)}}var a=w.indexOf(this);-1!==a&&w.splice(a,1),0===w.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",C,j),(0,s.off)(window,"scroll",C,j))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:o.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(r.Component);S.propTypes={once:i.default.bool,height:i.default.oneOfType([i.default.number,i.default.string]),offset:i.default.oneOfType([i.default.number,i.default.arrayOf(i.default.number)]),overflow:i.default.bool,resize:i.default.bool,scroll:i.default.bool,children:i.default.node,throttle:i.default.oneOfType([i.default.number,i.default.bool]),debounce:i.default.oneOfType([i.default.number,i.default.bool]),placeholder:i.default.node,scrollContainer:i.default.oneOfType([i.default.string,i.default.object]),unmountIfInvisible:i.default.bool},S.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var x=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(a){function r(){f(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+x(t),e}return h(r,a),n(r,[{key:"render",value:function(){return o.default.createElement(S,e,o.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=S,t.forceCheck=M},431:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,a,n){n=n||!1,e.addEventListener?e.addEventListener(t,a,n):e.attachEvent&&e.attachEvent("on"+t,(function(t){a.call(e,t||window.event)}))},t.off=function(e,t,a,n){n=n||!1,e.removeEventListener?e.removeEventListener(t,a,n):e.detachEvent&&e.detachEvent("on"+t,a)}},432:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,a=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(n),o=r.position,l=r.overflow,i=r["overflow-x"],s=r["overflow-y"];if("static"===o&&t)n=n.parentNode;else{if(a.test(l)&&a.test(i)&&a.test(s))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},433:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n=void 0,r=void 0,o=void 0,l=void 0,i=void 0,s=function s(){var c=+new Date-l;c<t&&c>=0?n=setTimeout(s,t-c):(n=null,a||(i=e.apply(o,r),n||(o=null,r=null)))};return function(){o=this,r=arguments,l=+new Date;var c=a&&!n;return n||(n=setTimeout(s,t)),c&&(i=e.apply(o,r),o=null,r=null),i}}},434:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){var n,r;return t||(t=250),function(){var o=a||this,l=+new Date,i=arguments;n&&l<n+t?(clearTimeout(r),r=setTimeout((function(){n=l,e.apply(o,i)}),t)):(n=l,e.apply(o,i))}}},435:function(e,t,a){"use strict";a.r(t),a.d(t,"UserSingle",(function(){return g})),a.d(t,"default",(function(){return E}));var n=a(26),r=a(27),o=a(29),l=a(28),i=a(30),s=a(0),c=a.n(s),d=a(430),u=a.n(d),m=a(135),f=a(98),p=a(53),h=a(99),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).img=c.a.createRef(),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"card user-item"},c.a.createElement(u.a,{once:!0},c.a.createElement("img",{className:"card-img-top rounded-circle",alt:"\u7528\u6237\u5934\u50cf",ref:this.img,src:this.props.img?this.props.img:"http://localhost/test/img/default.jpg",onError:function(){return e.img.current.src="http://localhost/test/img/default.jpg"}})),c.a.createElement("div",{className:"card-body"},c.a.createElement(p.b,{className:"card-text",to:"/people/"+this.props["data-id"]},this.props.name)))}}]),t}(c.a.Component),g=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={name:"",enroll_year:"",email:"",research_orientation:"",fvalue:"",graduate_orientation:"",link:"",imgUrl:"",papers:[],patents:[],load:!1,error:!1,error_msg:"error"},a.img=c.a.createRef(),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(f.a)("GET","http://39.100.113.162/info/user/getById.php",{id:this.props.match.params.id}).then((function(t){0===t.code?e.setState(Object.assign(t.data[0],{load:!0})):e.setState({error:!0,error_msg:"error"})}),(function(t){console.log(t),e.setState({error:!0,error_msg:t.message})}))}},{key:"render",value:function(){var e=this,t=[c.a.createElement("dt",null,"\u6bd5\u4e1a\u53bb\u5411"),c.a.createElement("dd",null,this.state.graduate_orientation)],a=this.state.papers.map((function(e){return c.a.createElement("li",{key:e.paper_id},e.degree&&"[".concat(e.degree,"]"),e.author,".",e.title,".",e.conf,",",e.year)})),n=this.state.patents.map((function(e){return c.a.createElement("li",{key:e.patent_id},e.patent_name," ",e.authorized_id," \u53d1\u660e\u4eba:",e.author)}));return this.state.error?c.a.createElement("div",null,c.a.createElement(m.a,null),c.a.createElement("div",{className:"user-container container"},c.a.createElement(h.a,{text:this.state.error_msg}))):this.state.load?c.a.createElement("div",null,c.a.createElement(m.a,null),c.a.createElement("div",{className:"user-container container user-single"},c.a.createElement("div",{className:"user-item card mt-3"},c.a.createElement(p.b,{to:this.state.link?this.state.link:"#"},c.a.createElement("img",{className:"card-img-top rounded-circle",src:this.state.imgUrl?this.state.imgUrl:"http://localhost/test/img/default.jpg",alt:"\u7528\u6237\u5934\u50cf",ref:this.img,onError:function(){return e.img.current.src="http://localhost/test/img/default.jpg"}})),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-title font-weight-bold"},this.state.name),c.a.createElement("p",null,this.state.email),2!==this.state.type&&c.a.createElement("p",null,this.state.enroll_year+"\u7ea7"+this.state.fvalue))),c.a.createElement("dl",null,c.a.createElement("dt",null,"\u7814\u7a76\u65b9\u5411"),c.a.createElement("dd",null,this.state.research_orientation),1===this.state.type?t:"",this.state.papers.length>0&&c.a.createElement("dt",null,"\u53d1\u8868\u8bba\u6587"),this.state.papers.length>0&&c.a.createElement("dd",null,c.a.createElement("ul",null,a)),this.state.patents.length>0&&c.a.createElement("dt",null,"\u53d1\u8868\u4e13\u5229"),this.state.patents.length>0&&c.a.createElement("dd",null,c.a.createElement("ul",null,n))))):c.a.createElement("div",null,c.a.createElement(m.a,null),c.a.createElement("div",{className:"user-container container user-signle"},c.a.createElement("div",{className:"d-flex content-loader flex-wrap justify-content-around"},c.a.createElement("div",{className:"d-flex flex-column flex-wrap"},c.a.createElement("div",{className:"content-loader-circle rounded-circle  m-3",style:{width:"10rem",height:"10rem"}},c.a.createElement("div",{className:"animated-circle"})),c.a.createElement("div",null,c.a.createElement("div",{className:"content-loader-rect rounded-pill  m-3",style:{width:"8rem",height:"1rem"}},c.a.createElement("div",{className:"animated-bg"})),c.a.createElement("div",{className:"content-loader-rect rounded-pill  m-3",style:{width:"8rem",height:"1rem"}},c.a.createElement("div",{className:"animated-bg"})))),c.a.createElement("div",null,c.a.createElement("div",{className:"content-loader-rect rounded-pill  m-3",style:{width:"15rem",height:"1rem"}},c.a.createElement("div",{className:"animated-bg"})),c.a.createElement("div",{className:"content-loader-rect rounded-pill  m-3",style:{width:"12rem",height:"1rem"}},c.a.createElement("div",{className:"animated-bg"}))))))}}]),t}(c.a.Component),E=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={teacher_list:[],graduate_list:[],postgraduate_list:[],load_teacher:!1,load_graduate:!1,load_postgraduate:!1,error:!1,error_msg:"error"},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(f.a)("GET","http://39.100.113.162/info/user/teacher.php").then((function(t){0===t.code?e.setState({teacher_list:t.data,load_teacher:!0}):e.setState({error:!0})}),(function(t){console.log(t),e.setState({error:!0,error_msg:t.message})})),Object(f.a)("GET","http://39.100.113.162/info/user/graduate.php").then((function(t){0===t.code?e.setState({graduate_list:t.data,load_graduate:!0}):e.setState({error:!0})}),(function(t){console.log(t),e.setState({error:!0,error_msg:t.message})})),Object(f.a)("GET","http://39.100.113.162/info/user/postgraduate.php").then((function(t){0===t.code?e.setState({postgraduate_list:t.data,load_postgraduate:!0}):e.setState({error:!0})}),(function(t){console.log(t),e.setState({error:!0,error_msg:t.message})}))}},{key:"render",value:function(){for(var e=this.state.teacher_list.map((function(e){return c.a.createElement(v,{key:e.id,img:e.imgUrl,name:e.name,"data-id":e.id})})),t=this.state.graduate_list.map((function(e){return c.a.createElement(v,{key:e.id,img:e.imgUrl,name:e.name,"data-id":e.id})})),a=this.state.postgraduate_list.map((function(e){return c.a.createElement(v,{key:e.id,img:e.imgUrl,name:e.name,"data-id":e.id})})),n=[],r=0;r<8;r++)n.push(c.a.createElement("div",{key:r,className:"p-2",style:{width:"12rem"}},c.a.createElement("div",{className:"content-loader-circle rounded-circle  m-3",style:{width:"8rem",height:"8rem"}},c.a.createElement("div",{className:"animated-circle"})),c.a.createElement("div",{className:"content-loader-rect rounded-pill  m-3",style:{width:"50%",height:".8rem"}},c.a.createElement("div",{className:"animated-bg"})),c.a.createElement("div",{className:"content-loader-rect rounded-pill  m-3",style:{width:"40%",height:".8rem"}},c.a.createElement("div",{className:"animated-bg"}))));return this.state.error?c.a.createElement("div",null,c.a.createElement(m.a,null),c.a.createElement("div",{className:"container user-container"},c.a.createElement(h.a,{text:this.state.error_msg}))):this.state.load_teacher&&this.state.load_graduate&&this.state.load_postgraduate?c.a.createElement("div",null,c.a.createElement(m.a,null),c.a.createElement("div",{className:"container user-container"},c.a.createElement("h4",{className:"title border-bottom"},"\u6210\u5458"),c.a.createElement("h5",{className:"subtitle"},"\u5bfc\u5e08"),c.a.createElement("div",{className:"card-deck"},e),c.a.createElement("h5",{className:"subtitle"},"\u5728\u8bfb\u7814\u7a76\u751f"),c.a.createElement("div",{className:"card-deck"},a),c.a.createElement("h5",{className:"subtitle"},"\u6bd5\u4e1a\u751f"),c.a.createElement("div",{className:"card-deck"},t))):c.a.createElement("div",null,c.a.createElement(m.a,null),c.a.createElement("div",{className:"container user-container"},c.a.createElement("div",{className:"w-100 p-2"},c.a.createElement("div",{className:"content-loader-rect rounded-pill  m-3",style:{width:"85%",height:".8rem"}},c.a.createElement("div",{className:"animated-bg"})),c.a.createElement("div",{className:"content-loader-rect rounded-pill  m-3",style:{width:"60%",height:".8rem"}},c.a.createElement("div",{className:"animated-bg"}))),c.a.createElement("div",{className:"d-flex flex-wrap"},n)))}}]),t}(c.a.Component)},436:function(e,t,a){"use strict";a.r(t);var n=a(435);t.default=n.UserSingle}}]);
//# sourceMappingURL=3.94cda1e8.chunk.js.map