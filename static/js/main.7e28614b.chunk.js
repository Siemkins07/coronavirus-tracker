(this.webpackJsonpcoronavirus=this.webpackJsonpcoronavirus||[]).push([[0],{16:function(e,t,a){e.exports={container:"Cards_container__2kB17",card:"Cards_card__2LA7C",infected:"Cards_infected__1DO3N",recovered:"Cards_recovered__2Jsnk",deaths:"Cards_deaths__Z-FdX"}},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(70),o=a.n(c),u=a(6),s=a.n(u),i=a(10),l=a(71),d=a(72),f=a(85),p=a(84),m=a(225),v=a(229),h=a(226),b=a(227),g=a(73),y=a.n(g),x=a(16),E=a.n(x),_=a(74),C=a.n(_),O=a(75),j=a.n(O),k=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate,u=[{id:1,name:"Infected",style:E.a.infected,end:a,text:" active cases of "},{id:2,name:"Recovered",style:E.a.recovered,end:n,text:" recovered cases of "},{id:3,name:".deaths",style:E.a.deaths,end:c,text:" deaths caused by "}];return a?r.a.createElement("div",{className:E.a.container},r.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},u.map((function(e){return r.a.createElement(m.a,{item:!0,component:v.a,xs:12,md:3,key:e.id,className:C()(E.a.card,"".concat(e.style))},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},e.name),r.a.createElement(b.a,{variant:"h4"},r.a.createElement(y.a,{start:0,end:e.end.value,duration:3,separator:","})),r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},new Date(o).toLocaleDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of",e.text,"Covid-19")))})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:j.a,alt:"covid-19"}),r.a.createElement("h3",null,"Loading..."))},w=a(31),D=a(32),N=a.n(D),S="https://covid19.mathdro.id/api",A=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=S,t&&(a="".concat(S,"/countries/").concat(t)),e.prev=2,e.next=5,N.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(S,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(S,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),J=a(43),U=a(81),L=a.n(U),F=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(w.a)(l,2),f=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,B();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=f.length?r.a.createElement(J.b,{data:{labels:f.map((function(e){return e.date})),datasets:[{data:f.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:f.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255, 0, 0, .5)",fill:!0}]}}):null,v=a?r.a.createElement(J.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, .5)","rgba(0, 255, 0, .5)","rgba(255, 0, 0, .5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null;return r.a.createElement("div",{className:L.a.container},u?v:m)},G=a(230),P=a(228),R=a(82),z=a.n(R),H=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement(G.a,{className:z.a.formControl},r.a.createElement(P.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},M=a(44),V=a.n(M),X=a(83),Z=a.n(X),q=function(e){Object(f.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",{className:V.a.container},r.a.createElement("img",{className:V.a.image,src:Z.a,alt:"coronavirus covid-19"}),r.a.createElement(k,{data:t}),r.a.createElement(H,{handleCountryChange:this.handleCountryChange}),r.a.createElement(F,{data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(q,null),document.getElementById("root"))},44:function(e,t,a){e.exports={container:"App_container__3HDJA",image:"App_image__1zO54"}},75:function(e,t,a){e.exports=a.p+"static/media/covid.befdb884.png"},81:function(e,t,a){e.exports={container:"Chart_container__16gGg"}},82:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2_0UE"}},83:function(e,t,a){e.exports=a.p+"static/media/covid_logo.a6c66ccd.png"},88:function(e,t,a){e.exports=a(208)}},[[88,1,2]]]);
//# sourceMappingURL=main.7e28614b.chunk.js.map