(this.webpackJsonphonki=this.webpackJsonphonki||[]).push([[0],{12:function(e,t,n){e.exports=n.p+"static/media/EndMelody.cc90fca3.mp3"},13:function(e,t,n){e.exports=n(27)},24:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),c=n.n(i),o=n(1),l=n(2);var s=Object(l.b)({activeTimer:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"ACTIVATE_TIMER":return a;case"RESET_TIMER":return!1;default:return e}},term:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"UPDATE_TERM":return a;default:return e}},title:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"UPDATE_TITLE":return a;case"RESET_TIMER":return"";default:return e}},minute:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,a=t.payload;switch(n){case"UPDATE_MINUTE":return a;default:return e}},progress:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e=arguments.length>1?arguments[1]:void 0,t=e.type,n=e.payload;switch(t){case"ADD_PROGRESS":return n;case"RESET_TIMER":default:return 0}}}),u=(n(24),n(8)),m=n.n(u),d=(n(26),n(4)),E=n.n(d),_=n(11),p=n.n(_),f=n(12),h=n.n(f),v=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})),n=t.activeTimer,i=t.minute,c=t.progress;i=i||30,Object(a.useEffect)((function(){n&&c<1&&setTimeout((function(){e(function(e){return{type:"ADD_PROGRESS",payload:e}}(Math.min(c+1/i/60,1)))}),1e3)}));var l=-E.a.mainCir*c;return r.a.createElement("div",{className:"timer__container"},function(){if(1==c)return new p.a(h.a).play(),r.a.createElement("div",{className:"finishMessage"},r.a.createElement("div",null,"Done!"))}(),r.a.createElement("div",{hidden:1==c},r.a.createElement("svg",{className:"timer",viewBox:"0 0 100 100"},r.a.createElement("circle",{className:"timer__common timer__main",style:{strokeDashoffset:l}}),r.a.createElement("circle",{className:"timer__common timer__scale timer__scale--1min",strokeDasharray:"".concat(.5," ",E.a.subCir/i-.5)}),r.a.createElement("circle",{className:"timer__common timer__scale timer__scale--10min",strokeDasharray:"".concat(1," ",E.a.subCir/i*10-1)}))))},T=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e})),n=t.activeTimer,a=t.term,i=t.title,c=t.minute,l=t.progress;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement("input",{className:"input input__title",type:"text",value:i,placeholder:"What do you focus?",onChange:function(t){return e(function(e){return{type:"UPDATE_TITLE",payload:e}}(t.target.value))},hidden:n}),r.a.createElement("input",{className:"input input__minute",type:"text",value:c,placeholder:"Minutes?",onChange:function(t){return e(function(e){return{type:"UPDATE_MINUTE",payload:e}}(t.target.value))},hidden:n}),r.a.createElement("button",{className:"button__start",onClick:function(){e({type:"ACTIVATE_TIMER",payload:!0}),e(function(e){return{type:"UPDATE_TERM",payload:e}}(m()().format("HH:mm")+" ~ "+m()().add(c||30,"minutes").format("HH:mm")))},hidden:n},"Start"),r.a.createElement("div",{className:"title_container"},r.a.createElement("div",{className:"title",hidden:!n,style:{animation:"".concat(1!=l?"blink 3s linear infinite":"")}},i)),r.a.createElement("div",{className:"term",hidden:!n},a),r.a.createElement("button",{className:"button__start",hidden:1!=l,onClick:function(){e({type:"RESET_TIMER",payload:""})}},"NEW TIMER")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=Object(l.c)(s,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),g=document.getElementById("root");c.a.render(r.a.createElement(o.a,{store:y},r.a.createElement(T,null)),g),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},4:function(e,t,n){e.exports={mainCir:"125.66371",subCir:"282.74334"}}},[[13,1,2]]]);
//# sourceMappingURL=main.74204d9d.chunk.js.map