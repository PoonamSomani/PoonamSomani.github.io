(this["webpackJsonpupstox-app"]=this["webpackJsonpupstox-app"]||[]).push([[0],{175:function(e){e.exports=JSON.parse('{"appName":"Upstox","navigationMenu":{"liveChart":"Live Chart","overview":"Overview"}}')},176:function(e){e.exports=JSON.parse('{"appName":"fnfnfnfnfnUpstox","navigationMenu":{"liveChart":"fnfnfnfnLive Chart","overview":"fnfnfnfnOverview"}}')},188:function(e,t,n){e.exports=n(336)},193:function(e,t,n){},242:function(e,t){},334:function(e,t,n){},336:function(e,t,n){"use strict";n.r(t);var a,r=n(0),i=n.n(r),o=n(12),c=n.n(o),s=(n(193),n(30)),l=n(75),u=n(13),m=n(117),d=n(370),p=n(385),h=Object(d.a)((function(e){return Object(p.a)({root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(m.a)(Object(m.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}})})),f=n(22),g=n(383),v=n(60),E=n(382),b=n(373),O=n(374),w=n(375),j=n(378),x=n(377),S=n(376),y=n(168),k=n.n(y),A=n(169),N=n.n(A),C=n(170),T=n.n(C),M=n(384),L=n(379),B=n(380),I=n(6),z=n(106),F=n(164),H=n.n(F),R=n(163),D=n.n(R);!function(e){e.TRANSLATION="translation"}(a||(a={}));var W=[{text:"navigationMenu.overview",icon:i.a.createElement(D.a,null),link:"/"},{text:"navigationMenu.liveChart",icon:i.a.createElement(H.a,null),link:"/live"}],J=function(e){var t=e.handleMenu,n=e.open,r=e.classes,o=Object(g.a)(a.TRANSLATION).t,c=Object(v.a)();return i.a.createElement(i.a.Fragment,null,i.a.createElement(b.a,null),i.a.createElement(O.a,{position:"fixed",className:Object(I.a)(r.appBar,Object(f.a)({},r.appBarShift,n))},i.a.createElement(w.a,null,i.a.createElement(S.a,{color:"inherit","aria-label":"open drawer",onClick:function(){t(!0)},edge:"start",className:Object(I.a)(r.menuButton,n&&r.hide)},i.a.createElement(k.a,null)),i.a.createElement(z.a,{variant:"h6",noWrap:!0},i.a.createElement(l.b,{to:"/",style:{color:"white",textDecoration:"none"}},o("appName"))))),i.a.createElement(E.a,{className:r.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:r.drawerPaper}},i.a.createElement("div",{className:r.drawerHeader},i.a.createElement(S.a,{onClick:function(){t(!1)}},"ltr"===c.direction?i.a.createElement(N.a,null):i.a.createElement(T.a,null))),i.a.createElement(x.a,null),i.a.createElement(j.a,null,W.map((function(e,n){return i.a.createElement(l.b,{to:e.link,key:e.text,onClick:function(){return o(e.text),void t(!1)},style:{textDecoration:"none"}},i.a.createElement(M.a,{button:!0},i.a.createElement(L.a,null,e.icon),i.a.createElement(B.a,{primary:o(e.text)})))})))))},P=n(31),Y=n(62),X=n(171),G=n.n(X),U=n(61),V=function e(t){Object(U.a)(this,e),this.date=void 0,this.open=void 0,this.high=void 0,this.low=void 0,this.close=void 0,this.volume=void 0;var n=t&&t.split(",");this.date=n&&new Date(+n[0])||new Date,this.open=n&&+n[1]||0,this.high=n&&+n[2]||0,this.low=n&&+n[3]||0,this.close=n&&+n[4]||0,this.volume=n&&+n[5]||0},$=n(48),q=n(178),K=n(177),Q=n(85),Z=n(80),_=n(120),ee=n(105),te=n(78),ne=n(173),ae=n(121),re=n(79),ie=n(3),oe=function(e){Object(q.a)(n,e);var t=Object(K.a)(n);function n(){return Object(U.a)(this,n),t.apply(this,arguments)}return Object($.a)(n,[{key:"render",value:function(){var e=Object(re.change)(),t=Object(re.ema)().id(1).options({windowSize:18}).merge((function(e,t){e.ema12=t})).accessor((function(e){return e.ema12})),n=Object(re.macd)().options({fast:12,slow:26,signal:9}).merge((function(e,t){e.macd=t})).accessor((function(e){return e.macd})),a=Object(re.elderImpulse)().macdSource(n.accessor()).emaSource(t.accessor()),r=this.props,o=r.type,c=r.data,s=r.width,l=r.ratio,u=r.refetch,m=a(n(t(e(c)))),d=ne.discontinuousTimeScaleProvider.inputDateAccessor((function(e){return e.date}))(m),p=d.data,h=d.xScale,f=d.xAccessor,g=d.displayXAccessor,v=[f(Object(ie.last)(p)),f(p[Math.max(0,p.length-150)])];return i.a.createElement(Z.b,{height:500,width:s,ratio:l,margin:{left:70,right:70,top:20,bottom:30},type:o,seriesName:"MSFT",data:p,xScale:h,xAccessor:f,displayXAccessor:g,xExtents:v,mouseMoveEvent:!0,panEvent:!0,zoomEvent:!0},i.a.createElement(Z.a,{id:1,height:300,yExtents:function(e){return[e.high,e.low]},padding:{top:10,bottom:10}},i.a.createElement(ee.XAxis,{axisAt:"bottom",orient:"bottom",showTicks:!1,outerTickSize:0,zoomEnabled:!0}),i.a.createElement(ee.YAxis,{axisAt:"right",orient:"right",ticks:2,zoomEnabled:!0}),i.a.createElement(te.MouseCoordinateY,{at:"right",orient:"right",displayFormat:Object(Q.b)(".2f")}),i.a.createElement(_.LineSeries,{yAccessor:t.accessor(),stroke:t.stroke()}),i.a.createElement(_.OHLCSeries,{stroke:function(e){return a.stroke()[e.elderImpulse]}}),i.a.createElement(te.EdgeIndicator,{itemType:"last",orient:"right",edgeAt:"right",yAccessor:function(e){return e.close},fill:function(e){return e.close>e.open?"#6BA583":"#FF0000"}}),i.a.createElement(ae.OHLCTooltip,{origin:[-40,-10]}),i.a.createElement(Z.c,{onReset:u}),i.a.createElement(ae.MovingAverageTooltip,{onClick:function(e){return console.log(e)},origin:[-38,5],options:[{yAccessor:t.accessor(),type:"EMA",stroke:t.stroke(),windowSize:t.options().windowSize}]})),i.a.createElement(Z.a,{id:2,height:150,yExtents:function(e){return e.volume},origin:function(e,t){return[0,t-300]}},i.a.createElement(ee.YAxis,{axisAt:"left",orient:"left",ticks:5,tickFormat:Object(Q.b)(".2s"),zoomEnabled:!0}),i.a.createElement(te.MouseCoordinateY,{at:"left",orient:"left",displayFormat:Object(Q.b)(".4s")})),i.a.createElement(te.CrossHairCursor,null))}}]),n}(i.a.Component);oe.defaultProps={type:"svg"};var ce=oe=Object(Y.fitWidth)(oe),se=function(e){var t,n=e.classes,o=e.open,c=(Object(g.a)(a.TRANSLATION).t,Object(r.useState)([])),l=Object(s.a)(c,2),u=l[0],m=l[1];return Object(r.useEffect)((function(){return(t=G()("http://kaboom.rksv.net/watch")).emit("sub",{state:!0}),t&&t.on("data",(function(e,t){m((function(t){var n=Object(P.a)(t);return n.push(new V(e)),n})),setTimeout((function(){return t(1)}),300)})),function(){t.emit("unsub",{state:!1}),t.disconnect()}}),[]),i.a.createElement("div",{className:Object(I.a)(n.content,Object(f.a)({},n.contentShift,o))},i.a.createElement("div",{className:n.drawerHeader}),u&&u.length>1&&i.a.createElement(Y.TypeChooser,null,(function(e){return i.a.createElement(ce,{type:e,data:u,width:1e3})})))},le=n(174),ue=n.n(le);var me=function(e){var t=e.classes,n=e.open,o=Object(r.useState)(),c=Object(s.a)(o,2),l=c[0],u=c[1];Object(g.a)(a.TRANSLATION).t;Object(r.useEffect)((function(){m()}),[]);var m=function(){(function(){var e={method:"GET",url:"http://kaboom.rksv.net/api/historical",headers:{}};return ue()(e).then((function(e){return e.data.map((function(e){return new V(e)}))})).catch((function(e){}))})().then((function(e){u(e)}))};return i.a.createElement("div",{className:Object(I.a)(t.content,Object(f.a)({},t.contentShift,n))},i.a.createElement("div",{className:t.drawerHeader}),l&&i.a.createElement(Y.TypeChooser,null,(function(e){return i.a.createElement(ce,{type:"hybrid",data:l,width:1e3,refetch:m})})))};n(334);function de(){var e=h(),t=Object(r.useState)(!1),n=Object(s.a)(t,2),a=n[0],o=n[1],c=function(e){o(e)};return i.a.createElement(l.a,null,i.a.createElement("div",{className:e.root},i.a.createElement(J,{handleMenu:c,open:a,classes:e}),i.a.createElement("div",{onClick:function(){return c(!1)}},i.a.createElement(u.c,null,i.a.createElement(u.a,{path:"/live"},i.a.createElement(se,{classes:e,open:a})),i.a.createElement(u.a,{path:"/"},i.a.createElement(me,{classes:e,open:a}))))))}var pe=n(122),he=n(77),fe={en:{translation:n(175)},fr:{translation:n(176)}};pe.a.use(he.e).init({resources:fe,lng:navigator.language||navigator.userLanguage,ns:["translation"],defaultNS:"translation",fallbackNS:"translation",load:"languageOnly",interpolation:{escapeValue:!1},nonExplicitWhitelist:!0,whitelist:["en","fr"]});pe.a,Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.b329917e.chunk.js.map