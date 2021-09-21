(this["webpackJsonpboston-punjabi-radio"]=this["webpackJsonpboston-punjabi-radio"]||[]).push([[0],{49:function(e,t,a){e.exports=a(87)},54:function(e,t,a){},55:function(e,t,a){},59:function(e,t,a){},80:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),s=(a(54),a(55),a(31));var o=function(){return r.a.createElement("header",{className:"App-header"},r.a.createElement(s.a,{bg:"dark",variant:"dark"},r.a.createElement(s.a.Brand,null,"Boston Punjabi Radio")))},i=(a(58),a(9)),u=a(15),m=function(e){return r.a.createElement("div",{className:"player",dangerouslySetInnerHTML:{__html:'<iframe src="https://beta.dholcutzradio.com/public/dholcutz_bhangra_radio/embed" frameborder="0" allowtransparency="true" style="width: 100%; min-height: 150px; border: 0;"></iframe>'}})},d=(a(59),Object(u.d)((function(e){return e.station?r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h4",null,"Now Playing"),r.a.createElement(m,null),r.a.createElement("h6",null,"Listeners: ",e.station.listeners.current),r.a.createElement("h6",null,"Next Song: ",e.station.playing_next.song.text)):r.a.createElement("p",null,"Loading stuff...")}))),E=a(17),h=a.n(E),g="https://beta.dholcutzradio.com/api",f="https://beta.dholcutzradio.com/api",p={apiUrl:"localhost"===window.location.hostname?f:g,stationId:1},b=(a(80),a(23)),v=a(14),y=a(13),j=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),l=a[0],c=a[1];return e.history?r.a.createElement(v.a,{className:"song-history-row"},r.a.createElement(y.a,null,r.a.createElement(b.a,{className:"show-history",variant:"dark",onClick:function(){c(!l)}},l?"\u2795":"\u2796"," Song History"),r.a.createElement("ol",{className:l?"show":"hide"},e.history.map((function(e){return r.a.createElement("li",{key:e.sh_id},e.song.text)}))))):r.a.createElement("p",null,"Loading stuff...")},w=function(e){var t=Object(n.useState)(null),a=Object(i.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(0),o=Object(i.a)(s,2),u=o[0],m=o[1];return Object(n.useEffect)((function(){h()({url:"".concat(p.apiUrl,"/nowplaying/").concat(p.stationId),method:"GET"}).then((function(e){c(e.data),setTimeout((function(){m(u+1)}),1e3*e.data.now_playing.remaining),console.log(e.data)})).catch(console.error)}),[u]),l?r.a.createElement("div",null,r.a.createElement(d,{station:l}),r.a.createElement(j,{history:l.song_history})):r.a.createElement("p",null,"Loading station...")},N=a(32),O=a(46),k=a.n(O),S=a(48),C=a(19),q=function(e){return r.a.createElement(S.a,{inline:!0,className:"float-right"},r.a.createElement(C.a,{type:"text",placeholder:"Search",className:"mr-sm-2",value:e.searchTerm,onChange:e.handleChange}))},I=(a(85),function(e){var t=e.requestMessage;return r.a.createElement("div",{className:(t.success,"alert alert-dark")},r.a.createElement("strong",null,t.message),t.reason?r.a.createElement("span",{className:"reason"},r.a.createElement("br",null),t.reason):"")}),x=function(e){var t=r.a.useState({}),a=Object(i.a)(t,2),n=a[0],l=a[1];return r.a.createElement("div",null,n.message?r.a.createElement(I,{requestMessage:n}):r.a.createElement(b.a,{className:"request-button",variant:"success",onClick:function(){h()({url:"".concat(p.apiUrl,"/station/").concat(p.stationId,"/request/").concat(e.requestId),method:"POST"}).then((function(e){l({success:!0,message:"success"+e.data.message,reason:""})}),(function(e){l({success:!1,message:"request failed",reason:e.response.data.message})})).catch(console.error)}},"request"))},_=(a(86),function(e,t,a){var n=(t-1)*a;return e.slice(n,n+a)}),L=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),l=a[0],c=a[1],s=Object(n.useState)(1),o=Object(i.a)(s,2),u=o[0],m=o[1];Object(n.useEffect)((function(){h()({url:"".concat(p.apiUrl,"/station/").concat(p.stationId,"/requests"),method:"GET"}).then((function(e){c(e.data),O(e.data)})).catch(console.error)}),[]);var d=r.a.useState(""),E=Object(i.a)(d,2),g=E[0],f=E[1],b=r.a.useState([]),j=Object(i.a)(b,2),w=j[0],O=j[1];r.a.useEffect((function(){var e=l.filter((function(e){return e.song.title.toLowerCase().includes(g)||e.song.artist.toLowerCase().includes(g)}));O(e),m(1)}),[g,l]);var S=_(w,u,20).map((function(e){return r.a.createElement(N.a.Item,{variant:"dark",key:e.song.id},r.a.createElement("div",{className:"song-item"},r.a.createElement("img",{src:e.song.art,className:"song-art",alt:"song art"}),r.a.createElement("div",{className:"song-info"},e.song.text,r.a.createElement("br",null),r.a.createElement("span",{className:"song-album"},e.song.album)),r.a.createElement(x,{requestId:e.request_id})))}));return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement("h1",null,"Song List")),r.a.createElement(y.a,null,r.a.createElement(q,{searchTerm:g,handleChange:function(e){f(e.target.value)}}))),r.a.createElement(N.a,null,S),r.a.createElement(k.a,{activePage:u,itemsCountPerPage:20,totalItemsCount:w.length,pageRangeDisplayed:5,onChange:m,itemClass:"page-item",linkClass:"page-link"}))},T=a(47);var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(T.a,null,r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(o,null))),r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(w,null))),r.a.createElement(v.a,null,r.a.createElement(y.a,null,r.a.createElement(L,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(28),B=r.a.createElement(z.a,null,r.a.createElement(P,null));c.a.render(B,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.9622ff14.chunk.js.map