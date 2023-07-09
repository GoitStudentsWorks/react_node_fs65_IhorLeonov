"use strict";(self.webpackChunkgoosetrack=self.webpackChunkgoosetrack||[]).push([[583],{5583:function(n,t,e){e.r(t),e.d(t,{default:function(){return J}});var r,i,o,a,d,u,c,p,l,f,s,h,x,g,m=e(9439),w=e(9434),b=e(2791),v=e(168),Z=e(1087),k=e(6444),y=k.ZP.div(r||(r=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  border-radius: 8px;\n"]))),D=k.ZP.div(i||(i=(0,v.Z)(["\n  color: ",";\n  background-color: ",";\n  border-radius: 6px;\n  padding: 4px 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  @media (min-width: 768px) {\n    padding: 4px 8px;\n    margin: -4px -8px;\n    border-radius: 8px;\n  }\n"])),(function(n){return n.isCurrentDate?"#fff":"".concat(n.theme.colors.headerFontcolor)}),(function(n){return n.isCurrentDate?"#3e85f3":"inherit"})),j=(0,k.ZP)(Z.OL)(o||(o=(0,v.Z)(["\n  min-width: 28px;\n  min-height: 94px;\n  border: 1px solid ",";\n  background: ",";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.17;\n\n  &:hover,\n  &:focus {\n    background: #3e85f3;\n    color: #fff;\n    transition: background-color 0.5s;\n  }\n\n  &:first-child {\n    border-top-left-radius: 8px;\n  }\n\n  &:last-child {\n    border-bottom-right-radius: 8px;\n  }\n\n  &:nth-child(7) {\n    border-top-right-radius: 8px;\n  }\n\n  &:nth-last-child(7) {\n    border-bottom-left-radius: 8px;\n  }\n\n  @media (min-width: 376px) {\n    min-width: 48px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    min-width: 100px;\n    height: 144px;\n    line-height: 1.12;\n  }\n\n  @media (min-width: 1440px) {\n    height: 135px;\n  }\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.currentdayBgColor})),F=k.ZP.div(a||(a=(0,v.Z)(["\n  padding: 10px 12px;\n  font-weight: 700;\n\n  @media (min-width: 768px) {\n    padding: 18px 22px;\n  }\n"]))),C=k.ZP.div(d||(d=(0,v.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  color: ",";\n"])),(function(n){return n.theme.colors.headerFontcolor})),E=(k.ZP.div(u||(u=(0,v.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),k.ZP.div(c||(c=(0,v.Z)(["\n  background-color: #ffffff;\n  padding: 40px;\n"]))),k.ZP.li(p||(p=(0,v.Z)(["\n  height: 22px;\n  padding: 4px 4px 4px 8px;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 10px;\n  line-height: 1.4;\n  border-radius: 8px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 4px;\n  ",";\n\n  @media (min-width: 768px) {\n    min-width: 94px;\n    height: 26px;\n    padding: 4px 8px 4px 12px;\n    font-size: 14px;\n    line-height: 1.29;\n  }\n\n  @media (min-width: 1280px) {\n    min-width: 114px;\n  }\n"])),(function(n){return function(n){switch(n.priority){case"low":return"color: #3E85F3; background-color: #CEEEFD;";case"medium":return"color: #F3B249; background-color: #FCF0D4;";case"high":return"color: #EA3D65; background-color: #FFD2DD;";default:return"color: #3E85F3; background-color: #FFFFFF"}}(n)}))),P=(k.ZP.div(l||(l=(0,v.Z)(["\n  margin-top: auto;\n  margin: auto;\n  color: #3e85f3;\n  text-align: center;\n  overflow: hidden;\n  font-size: 14px;\n"]))),k.ZP.ul(f||(f=(0,v.Z)(["\n  list-style-type: none;\n  padding: 0 8px 0px 8px;\n"])))),z=k.ZP.div(s||(s=(0,v.Z)(["\n  min-width: 28px;\n  min-height: 94px;\n  border: 1px solid ",";\n  background: ",";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 12px;\n  line-height: 1.17;\n\n  &:first-child {\n    border-top-left-radius: 8px;\n  }\n\n  &:last-child {\n    border-bottom-right-radius: 8px;\n  }\n\n  &:nth-child(7) {\n    border-top-right-radius: 8px;\n  }\n\n  &:nth-last-child(7) {\n    border-bottom-left-radius: 8px;\n  }\n\n  @media (min-width: 376px) {\n    min-width: 48px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 16px;\n    min-width: 100px;\n    height: 144px;\n    line-height: 1.12;\n  }\n\n  @media (min-width: 1440px) {\n    height: 135px;\n  }\n"])),(function(n){return n.theme.colors.borderColor}),(function(n){return n.theme.colors.currentdayBgColor})),S=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},M=e(184),B=function(n){var t=n.date,e=n.setDate,r=n.tasks,i=(0,b.useState)(null),o=(0,m.Z)(i,2),a=o[0],d=o[1],u=(0,b.useState)([]),c=(0,m.Z)(u,2),p=c[0],l=c[1];(0,b.useEffect)((function(){f()}),[t]);var f=function(){for(var n=t.getFullYear(),i=t.getMonth(),o=new Date(n,i+1,0).getDate(),u=new Date(n,i,1).getDay(),c=[],p=0===u?6:u-1,f=Math.ceil((p+o)/7),s=function(n){var t=new Date(n),e=""+(t.getMonth()+1),r=""+t.getDate(),i=t.getFullYear();return e.length<2&&(e="0"+e),r.length<2&&(r="0"+r),[i,e,r].join("-")},h=0;h<p;h++)c.push((0,M.jsx)(z,{},S()));for(var x=function(o){var u=new Date(n,i,o),p=o===(new Date).getDate()&&i===(new Date).getMonth()&&n===(new Date).getFullYear();c.push((0,M.jsxs)(j,{onClick:function(){return e(u)},selected:a===t,to:"/layout/calendar/day/".concat(o),children:[(0,M.jsx)(C,{children:(0,M.jsx)(F,{children:(0,M.jsx)(D,{isCurrentDate:p,children:o})})}),(0,M.jsx)(P,{children:null===r||void 0===r?void 0:r.map((function(n){return function(n,t){var e=s(n);return t.date===e}(u,n)?(0,M.jsx)(E,{priority:n.priority,onClick:function(){return function(n){d(n)}(t)},children:n.title},n._id):null}))})]},S()))},g=1;g<=o;g++)x(g);for(var m=7*f-p-o,w=0;w<m;w++)c.push((0,M.jsx)(z,{},S()));l(c)};return(0,M.jsx)(M.Fragment,{children:(0,M.jsx)(y,{children:p})})},Y=e(7689),_=e(5716),L=e(3629),O=e(4565),A=e(1951),U=e(9040),G=e(2680),H=k.ZP.ul(h||(h=(0,v.Z)(["\n  height: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  border: 1px solid ",";\n  margin-top: 24px;\n  margin-bottom: 14px;\n  background-color: ",";\n  padding: ",";\n\n  @media (min-width: 768px) {\n    padding: ",";\n    height: ",";\n    margin-bottom: ",";\n    margin-top: ",";\n  }\n\n  @media (min-width: 1280px) {\n    margin-bottom: ",";\n    padding: ",";\n    margin-top: 32px;\n  }\n"])),(function(n){return n.page?"50px":"74px"}),(function(n){return n.theme.colors.calendarMonthBorder}),(function(n){return n.theme.colors.componentsBgColor}),(function(n){return n.page?"16px":"14px 18px"}),(function(n){return n.page?"14px 40px":"10px 32px"}),(function(n){return n.page?"46px":"68px"}),(function(n){return n.page?"18px":"16px"}),(function(n){return n.page?"32px":"24px"}),(function(n){return n.page?"15px":"16px"}),(function(n){return n.page?"14px 60px":"10px 46px"})),I=k.ZP.li(x||(x=(0,v.Z)(["\n  background: ",";\n\n  text-align: center;\n  color: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 4px;\n  border-radius: 8px;\n\n  cursor: ",";\n\n  @media (min-width: 376px) {\n    min-width: 40px;\n    gap: 6px;\n  }\n\n  :hover {\n    color: ",";\n    background-color: ",";\n    transform: ",";\n    font-size: ",";\n    transition-duration: ",";\n  }\n"])),(function(n){return n.theme.colors.componentsBgColor}),(function(n){return n.theme.colors.headerFontcolor}),(function(n){return n.page?"default":"pointer"}),(function(n){return!n.page&&"#fff"}),(function(n){return!n.page&&"#3e85f3"}),(function(n){return!n.page&&"scale(1.12)"}),(function(n){return!n.page&&"12px"}),(function(n){return!n.page&&"500ms"})),R=k.ZP.p(g||(g=(0,v.Z)(["\n  font-weight: 600;\n  color: ",";\n  text-transform: uppercase;\n  font-size: 16px;\n  line-height: 1.12;\n  @media (min-width: 768px) {\n    font-size: ",";\n    line-height: ",";\n  }\n"])),(function(n){return n.weekend?"#3e85f3":"".concat(n.theme.colors.headerFontcolor)}),(function(n){return n.page?"16px":"14px"}),(function(n){return n.page?"1.12":"1.3"})),T=function(n){for(var t=n.date,e=n.setDate,r=(0,Y.TH)().pathname.includes("day"),i=(0,_.Z)("(max-width: 767px)")?"EEEEE":"E",o=(0,L.default)(t,{weekStartsOn:1}),a=(0,O.default)(t,{weekStartsOn:1}),d=[],u=o;u<=a;){var c=(0,A.default)(u,"d"),p=(0,A.default)(u,i);d.push({date:c,day:p,fullDate:u}),u=(0,U.default)(u,1)}return(0,M.jsx)(H,{page:!r,children:d.map((function(n){return(0,M.jsx)(I,{onClick:function(){return r&&e(n.fullDate)},page:!r,children:(0,M.jsx)(R,{weekend:(0,G.Z)(n.fullDate)&&!r,page:!r,children:n.day})},n.fullDate)}))})},V=e(8712),q=e(8558),J=function(){var n=(0,q.Y)(),t=(0,m.Z)(n,2),e=t[0],r=t[1],i=(0,w.v9)(V.jF);return(0,M.jsxs)("div",{children:[(0,M.jsx)(T,{date:e,setDate:r}),(0,M.jsx)(B,{date:e,setDate:r,tasks:i})]})}},8558:function(n,t,e){e.d(t,{Y:function(){return a}});var r=e(9434),i=e(7232),o=e(6803),a=function(){var n=(0,r.I0)();return[new Date((0,r.v9)(i._)),function(t){n((0,o.G)(t.toString()))}]}},7232:function(n,t,e){e.d(t,{_:function(){return r}});var r=function(n){return n.date}},8712:function(n,t,e){e.d(t,{jF:function(){return r}});var r=function(n){return n.tasks.tasks}},2680:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(8527),i=e(4522);function o(n){(0,i.Z)(1,arguments);var t=(0,r.default)(n),e=t.getDay();return 0===e||6===e}},5716:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(2791);var i="undefined"!==typeof window,o=function(n,t){var e=(0,r.useState)(function(n,t){return void 0!==t?t:!!i&&window.matchMedia(n).matches}(n,t)),o=e[0],a=e[1];return(0,r.useEffect)((function(){var t=!0,e=window.matchMedia(n),r=function(){t&&a(!!e.matches)};return e.addListener(r),a(e.matches),function(){t=!1,e.removeListener(r)}}),[n]),o}}}]);
//# sourceMappingURL=583.6072b8d9.chunk.js.map