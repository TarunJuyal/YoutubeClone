(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[17],{581:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"===typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(l){r=!0,c=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw c}}return n}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function o(e,t){var n=t||{},c=n.defaultValue,o=n.value,i=n.onChange,l=n.postState,s=r(a.useState((function(){return void 0!==o?o:void 0!==c?"function"===typeof c?c():c:"function"===typeof e?e():e})),2),u=s[0],f=s[1],d=void 0!==o?o:u;l&&(d=l(d));var b=a.useRef(!0);return a.useEffect((function(){b.current?b.current=!1:void 0===o&&f(o)}),[o]),[d,function(e){f(e),d!==e&&i&&i(e,d)}]}},602:function(e,t,n){"use strict";var a=n(655);t.a=a.a},603:function(e,t,n){"use strict";var a=n(637);t.a=a.a},604:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(605))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},605:function(e,t,n){"use strict";var a=n(542),r=n(543);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(1)),o=a(n(606)),i=a(n(544)),l=function(e,t){return c.createElement(i.default,Object.assign({},e,{ref:t,icon:o.default}))};l.displayName="PlusOutlined";var s=c.forwardRef(l);t.default=s},606:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"}},607:function(e,t,n){"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(608))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},608:function(e,t,n){"use strict";var a=n(542),r=n(543);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(1)),o=a(n(609)),i=a(n(544)),l=function(e,t){return c.createElement(i.default,Object.assign({},e,{ref:t,icon:o.default}))};l.displayName="EllipsisOutlined";var s=c.forwardRef(l);t.default=s},609:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"ellipsis",theme:"outlined"}},659:function(e,t,n){"use strict";var a=n(540),r=n.n(a),c=n(539),o=n.n(c),i=n(1),l=n(114),s=n.n(l),u=n(557),f=n(679),d=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},b=function(e){return i.createElement(f.a,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,c=e.className,l=e.hoverable,u=void 0===l||l,f=d(e,["prefixCls","className","hoverable"]),b=n("card",a),p=s()("".concat(b,"-grid"),c,r()({},"".concat(b,"-grid-hoverable"),u));return i.createElement("div",o()({},f,{className:p}))}))},p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=function(e){return i.createElement(f.a,null,(function(t){var n=t.getPrefixCls,a=e.prefixCls,r=e.className,c=e.avatar,l=e.title,u=e.description,f=p(e,["prefixCls","className","avatar","title","description"]),d=n("card",a),b=s()("".concat(d,"-meta"),r),v=c?i.createElement("div",{className:"".concat(d,"-meta-avatar")},c):null,m=l?i.createElement("div",{className:"".concat(d,"-meta-title")},l):null,y=u?i.createElement("div",{className:"".concat(d,"-meta-description")},u):null,h=m||y?i.createElement("div",{className:"".concat(d,"-meta-detail")},m,y):null;return i.createElement("div",o()({},f,{className:b}),v,h)}))},m=n(89),y=n(90),h=n(62),g=n(580),O=n(581),j=n(573),w=n(277),E=n.n(w),x=n(628);function k(e){var t=Object(i.useRef)(),n=Object(i.useRef)(!1);return Object(i.useEffect)((function(){return function(){n.current=!0,E.a.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];n.current||(E.a.cancel(t.current),t.current=E()((function(){e.apply(void 0,r)})))}}var P=n(555);var C=i.forwardRef((function(e,t){var n,a=e.prefixCls,r=e.id,c=e.active,o=e.rtl,l=e.tab,u=l.key,f=l.tab,d=l.disabled,b=l.closeIcon,p=e.tabBarGutter,v=e.tabPosition,m=e.closable,y=e.renderWrapper,g=e.removeAriaLabel,O=e.editable,j=e.onClick,w=e.onRemove,E=e.onFocus,x="".concat(a,"-tab");i.useEffect((function(){return w}),[]);var k={};"top"===v||"bottom"===v?k[o?"marginLeft":"marginRight"]=p:k.marginBottom=p;var C=O&&!1!==m&&!d;function N(e){d||j(e)}var S=i.createElement("div",{key:u,ref:t,className:s()(x,(n={},Object(h.a)(n,"".concat(x,"-with-remove"),C),Object(h.a)(n,"".concat(x,"-active"),c),Object(h.a)(n,"".concat(x,"-disabled"),d),n)),style:k,onClick:N},i.createElement("div",{role:"tab","aria-selected":c,id:r&&"".concat(r,"-tab-").concat(u),className:"".concat(x,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(u),"aria-disabled":d,tabIndex:d?null:0,onClick:function(e){e.stopPropagation(),N(e)},onKeyDown:function(e){[P.a.SPACE,P.a.ENTER].includes(e.which)&&(e.preventDefault(),N(e))},onFocus:E},f),C&&i.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:"".concat(x,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),O.onEdit("remove",{key:u,event:t})}},b||O.removeIcon||"\xd7"));return y&&(S=y(S)),S}));function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T={width:0,height:0,left:0,top:0};var M={width:0,height:0,left:0,top:0,right:0};var R=n(627),I=n(622),A={adjustX:1,adjustY:1},D=[0,0],B={topLeft:{points:["bl","tl"],overflow:A,offset:[0,-4],targetOffset:D},topCenter:{points:["bc","tc"],overflow:A,offset:[0,-4],targetOffset:D},topRight:{points:["br","tr"],overflow:A,offset:[0,-4],targetOffset:D},bottomLeft:{points:["tl","bl"],overflow:A,offset:[0,4],targetOffset:D},bottomCenter:{points:["tc","bc"],overflow:A,offset:[0,4],targetOffset:D},bottomRight:{points:["tr","br"],overflow:A,offset:[0,4],targetOffset:D}};var _=i.forwardRef((function(e,t){var n=e.arrow,a=void 0!==n&&n,r=e.prefixCls,c=void 0===r?"rc-dropdown":r,o=e.transitionName,l=e.animation,u=e.align,f=e.placement,d=void 0===f?"bottomLeft":f,b=e.placements,p=void 0===b?B:b,v=e.getPopupContainer,g=e.showAction,O=e.hideAction,j=e.overlayClassName,w=e.overlayStyle,E=e.visible,x=e.trigger,k=void 0===x?["hover"]:x,P=Object(y.a)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),C=i.useState(),N=Object(m.a)(C,2),S=N[0],T=N[1],M="visible"in e?E:S,R=i.useRef(null);i.useImperativeHandle(t,(function(){return R.current}));var A=function(){var t=e.overlay;return"function"===typeof t?t():t},D=function(t){var n=e.onOverlayClick,a=A().props;T(!1),n&&n(t),a.onClick&&a.onClick(t)},_=function(){var e=A(),t={prefixCls:"".concat(c,"-menu"),onClick:D};return"string"===typeof e.type&&delete t.prefixCls,i.createElement(i.Fragment,null,a&&i.createElement("div",{className:"".concat(c,"-arrow")}),i.cloneElement(e,t))},z=O;return z||-1===k.indexOf("contextMenu")||(z=["click"]),i.createElement(I.a,Object.assign({},P,{prefixCls:c,ref:R,popupClassName:s()(j,Object(h.a)({},"".concat(c,"-show-arrow"),a)),popupStyle:w,builtinPlacements:p,action:k,showAction:g,hideAction:z||[],popupPlacement:d,popupAlign:u,popupTransitionName:o,popupAnimation:l,popupVisible:M,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?_:_(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;T(t),"function"===typeof n&&n(t)},getPopupContainer:v}),function(){var t=e.children,n=t.props?t.props:{},a=s()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(c,"-open")}());return S&&t?i.cloneElement(t,{className:a}):t}())}));var z=i.forwardRef((function(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,c=e.style;return a&&!1!==a.showAdd?i.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:c,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}));var L=i.forwardRef((function(e,t){var n=e.prefixCls,a=e.id,r=e.tabs,c=e.locale,o=e.mobile,l=e.moreIcon,u=void 0===l?"More":l,f=e.moreTransitionName,d=e.style,b=e.className,p=e.editable,v=e.tabBarGutter,y=e.rtl,g=e.onTabClick,O=Object(i.useState)(!1),j=Object(m.a)(O,2),w=j[0],E=j[1],x=Object(i.useState)(null),k=Object(m.a)(x,2),C=k[0],N=k[1],S="".concat(a,"-more-popup"),T="".concat(n,"-dropdown"),M=null!==C?"".concat(S,"-").concat(C):null,I=null===c||void 0===c?void 0:c.dropdownAriaLabel,A=i.createElement(R.f,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),E(!1)},id:S,tabIndex:-1,role:"listbox","aria-activedescendant":M,selectedKeys:[C],"aria-label":void 0!==I?I:"expanded dropdown"},r.map((function(e){return i.createElement(R.d,{key:e.key,id:"".concat(S,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function D(e){for(var t=r.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===C}))||0,a=t.length,c=0;c<a;c+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void N(o.key)}}Object(i.useEffect)((function(){var e=document.getElementById(M);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[C]),Object(i.useEffect)((function(){w||N(null)}),[w]);var B=Object(h.a)({},y?"marginLeft":"marginRight",v);r.length||(B.visibility="hidden",B.order=1);var L=s()(Object(h.a)({},"".concat(T,"-rtl"),y)),K=o?null:i.createElement(_,{prefixCls:T,overlay:A,trigger:["hover"],visible:w,transitionName:f,onVisibleChange:E,overlayClassName:L},i.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:B,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":S,id:"".concat(a,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case P.a.UP:D(-1),e.preventDefault();break;case P.a.DOWN:D(1),e.preventDefault();break;case P.a.ESC:E(!1);break;case P.a.SPACE:case P.a.ENTER:null!==C&&g(C,e)}else[P.a.DOWN,P.a.SPACE,P.a.ENTER].includes(t)&&(E(!0),e.preventDefault())}},u));return i.createElement("div",{className:s()("".concat(n,"-nav-operations"),b),style:d,ref:t},K,i.createElement(z,{prefixCls:n,locale:c,editable:p}))})),K=Object(i.createContext)(null),W=Math.pow(.995,20);function q(e,t){var n=i.useRef(e),a=i.useState({}),r=Object(m.a)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=i.forwardRef((function(e,t){var n,a=i.useContext(K),r=a.prefixCls,c=a.tabs,o=e.className,l=e.style,u=e.id,f=e.animated,d=e.activeKey,b=e.rtl,p=e.extra,v=e.editable,y=e.locale,g=e.tabPosition,O=e.tabBarGutter,w=e.children,P=e.onTabClick,N=e.onTabScroll,R=Object(i.useRef)(),I=Object(i.useRef)(),A=Object(i.useRef)(),D=Object(i.useRef)(),B=function(){var e=Object(i.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,i.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),_=Object(m.a)(B,2),V=_[0],H=_[1],Y="top"===g||"bottom"===g,F=q(0,(function(e,t){Y&&N&&N({direction:e>t?"left":"right"})})),X=Object(m.a)(F,2),J=X[0],U=X[1],$=q(0,(function(e,t){!Y&&N&&N({direction:e>t?"top":"bottom"})})),Q=Object(m.a)($,2),Z=Q[0],ee=Q[1],te=Object(i.useState)(0),ne=Object(m.a)(te,2),ae=ne[0],re=ne[1],ce=Object(i.useState)(0),oe=Object(m.a)(ce,2),ie=oe[0],le=oe[1],se=Object(i.useState)(null),ue=Object(m.a)(se,2),fe=ue[0],de=ue[1],be=Object(i.useState)(null),pe=Object(m.a)(be,2),ve=pe[0],me=pe[1],ye=function(e){var t=Object(i.useRef)([]),n=Object(i.useState)({}),a=Object(m.a)(n,2)[1],r=Object(i.useRef)("function"===typeof e?e():e),c=k((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),c()}]}(new Map),he=Object(m.a)(ye,2),ge=he[0],Oe=he[1],je=function(e,t,n){return Object(i.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||T,c=r.left+r.width,o=0;o<e.length;o+=1){var i,l=e[o].key,s=t.get(l);if(!s)s=t.get(null===(i=e[o-1])||void 0===i?void 0:i.key)||T;var u=a.get(l)||S({},s);u.right=c-u.left-u.width,a.set(l,u)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(c,ge,ae),we="".concat(r,"-nav-operations-hidden"),Ee=0,xe=0;function ke(e){return e<Ee?[Ee,!1]:e>xe?[xe,!1]:[e,!0]}Y?b?(Ee=0,xe=Math.max(0,ae-fe)):(Ee=Math.min(0,fe-ae),xe=0):(Ee=Math.min(0,ve-ie),xe=0);var Pe=Object(i.useRef)(),Ce=Object(i.useState)(),Ne=Object(m.a)(Ce,2),Se=Ne[0],Te=Ne[1];function Me(){Te(Date.now())}function Re(){window.clearTimeout(Pe.current)}function Ie(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=je.get(e);if(t)if(Y){var n=J;b?t.right<J?n=t.right:t.right+t.width>J+fe&&(n=t.right+t.width-fe):t.left<-J?n=-t.left:t.left+t.width>-J+fe&&(n=-(t.left+t.width-fe)),ee(0),U(ke(n)[0])}else{var a=Z;t.top<-Z?a=-t.top:t.top+t.height>-Z+ve&&(a=-(t.top+t.height-ve)),U(0),ee(ke(a)[0])}}!function(e,t){var n=Object(i.useState)(),a=Object(m.a)(n,2),r=a[0],c=a[1],o=Object(i.useState)(0),l=Object(m.a)(o,2),s=l[0],u=l[1],f=Object(i.useState)(0),d=Object(m.a)(f,2),b=d[0],p=d[1],v=Object(i.useState)(),y=Object(m.a)(v,2),h=y[0],g=y[1],O=Object(i.useRef)(),j=Object(i.useRef)(0),w=Object(i.useRef)(0),E=Object(i.useRef)(!1),x=Object(i.useRef)(),k=Object(i.useRef)(null);k.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(O.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,o=n.screenY;c({x:a,y:o});var i=a-r.x,l=o-r.y;t(i,l);var f=Date.now();u(f),p(f-s),g({x:i,y:l})}},onTouchEnd:function(){if(r&&(c(null),g(null),h)){var e=h.x/b,n=h.y/b,a=Math.abs(e),o=Math.abs(n);if(Math.max(a,o)<.1)return;var i=e,l=n;O.current=window.setInterval((function(){Math.abs(i)<.01&&Math.abs(l)<.01?window.clearInterval(O.current):t(20*(i*=W),20*(l*=W))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,c=Math.abs(n),o=Math.abs(a);c===o?r="x"===x.current?n:a:c>o?(r=n,x.current="x"):(r=a,x.current="y");var i=Date.now(),l=Math.abs(r);(i-w.current>100||l-j.current>10)&&(E.current=!1),(t(-r,-r)||E.current)&&(e.preventDefault(),E.current=!0),w.current=i,j.current=l}},i.useEffect((function(){function t(e){k.current.onTouchMove(e)}function n(e){k.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){k.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){k.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(R,(function(e,t){var n=!1;function a(e,t){e((function(e){var a=ke(e+t),r=Object(m.a)(a,2),c=r[0],o=r[1];return n=o,c}))}if(Y){if(fe>=ae)return n;a(U,e)}else{if(ve>=ie)return n;a(ee,t)}return Re(),Me(),n})),Object(i.useEffect)((function(){return Re(),Se&&(Pe.current=window.setTimeout((function(){Te(0)}),100)),Re}),[Se]);var Ae=function(e,t,n){var a,r,c,o=n.tabs,l=n.tabPosition,s=n.rtl;["top","bottom"].includes(l)?(a="width",r=s?"right":"left",c=Math.abs(t.left)):(a="height",r="top",c=-t.top);var u=t[a];return Object(i.useMemo)((function(){if(!o.length)return[0,0];for(var t=o.length,n=t,i=0;i<t;i+=1){var l=e.get(o[i].key)||M;if(l[r]+l[a]>c+u){n=i-1;break}}for(var s=0,f=t-1;f>=0;f-=1){if((e.get(o[f].key)||M)[r]<c){s=f+1;break}}return[s,n]}),[e,c,u,l,o.map((function(e){return e.key})).join("_"),s])}(je,{width:fe,height:ve,left:J,top:Z},G(G({},e),{},{tabs:c})),De=Object(m.a)(Ae,2),Be=De[0],_e=De[1];function ze(e){var t,n,a=(null===(t=D.current)||void 0===t?void 0:t[e])||0,r=0;return(null===(n=A.current)||void 0===n?void 0:n.className.includes(we))&&(r=A.current[e]),a+r}var Le=c.map((function(e){var t=e.key;return i.createElement(C,{id:u,prefixCls:r,key:t,rtl:b,tab:e,closable:e.closable,editable:v,active:t===d,tabPosition:g,tabBarGutter:O,renderWrapper:w,removeAriaLabel:null===y||void 0===y?void 0:y.removeAriaLabel,ref:V(t),onClick:function(e){P(t,e)},onRemove:function(){H(t)},onFocus:function(){Ie(t),Me(),b||(R.current.scrollLeft=0),R.current.scrollTop=0}})})),Ke=k((function(){var e,t,n,a,r=(null===(e=R.current)||void 0===e?void 0:e.offsetWidth)||0,o=(null===(t=R.current)||void 0===t?void 0:t.offsetHeight)||0;de(r),me(o),re(((null===(n=I.current)||void 0===n?void 0:n.offsetWidth)||0)-ze("offsetWidth")),le(((null===(a=I.current)||void 0===a?void 0:a.offsetHeight)||0)-ze("offsetHeight")),Oe((function(){var e=new Map;return c.forEach((function(t){var n=t.key,a=V(n).current;e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),We=c.slice(0,Be),qe=c.slice(_e+1),Ve=[].concat(Object(j.a)(We),Object(j.a)(qe)),Ge=Object(i.useState)(),He=Object(m.a)(Ge,2),Ye=He[0],Fe=He[1],Xe=je.get(d),Je=Object(i.useRef)();function Ue(){E.a.cancel(Je.current)}Object(i.useEffect)((function(){var e={};return Xe&&(Y?(b?e.right=Xe.right:e.left=Xe.left,e.width=Xe.width):(e.top=Xe.top,e.height=Xe.height)),Ue(),Je.current=E()((function(){Fe(e)})),Ue}),[Xe,Y,b]),Object(i.useEffect)((function(){Ie()}),[d,Xe,je,Y]),Object(i.useEffect)((function(){Ke()}),[b,O,d,c.map((function(e){return e.key})).join("_")]);var $e,Qe,Ze,et,tt=!!Ve.length,nt="".concat(r,"-nav-wrap");return Y?b?(Qe=J>0,$e=J+fe<ae):($e=J<0,Qe=-J+fe<ae):(Ze=Z<0,et=-Z+ve<ie),i.createElement("div",{ref:t,role:"tablist",className:s()("".concat(r,"-nav"),o),style:l,onKeyDown:function(){Me()}},i.createElement(x.a,{onResize:Ke},i.createElement("div",{className:s()(nt,(n={},Object(h.a)(n,"".concat(nt,"-ping-left"),$e),Object(h.a)(n,"".concat(nt,"-ping-right"),Qe),Object(h.a)(n,"".concat(nt,"-ping-top"),Ze),Object(h.a)(n,"".concat(nt,"-ping-bottom"),et),n)),ref:R},i.createElement(x.a,{onResize:Ke},i.createElement("div",{ref:I,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat(J,"px, ").concat(Z,"px)"),transition:Se?"none":void 0}},Le,!tt&&i.createElement(z,{ref:D,prefixCls:r,locale:y,editable:v}),i.createElement("div",{className:s()("".concat(r,"-ink-bar"),Object(h.a)({},"".concat(r,"-ink-bar-animated"),f.inkBar)),style:Ye}))))),i.createElement(L,Object.assign({},e,{ref:A,prefixCls:r,tabs:Ve,className:!tt&&we})),p&&i.createElement("div",{className:"".concat(r,"-extra-content")},p))}));function Y(e){var t=e.id,n=e.activeKey,a=e.animated,r=e.tabPosition,c=e.rtl,o=e.destroyInactiveTabPane,l=i.useContext(K),u=l.prefixCls,f=l.tabs,d=a.tabPane,b=f.findIndex((function(e){return e.key===n}));return i.createElement("div",{className:s()("".concat(u,"-content-holder"))},i.createElement("div",{className:s()("".concat(u,"-content"),"".concat(u,"-content-").concat(r),Object(h.a)({},"".concat(u,"-content-animated"),d)),style:b&&d?Object(h.a)({},c?"marginRight":"marginLeft","-".concat(b,"00%")):null},f.map((function(e){return i.cloneElement(e.node,{key:e.key,prefixCls:u,tabKey:e.key,id:t,animated:d,active:e.key===n,destroyInactiveTabPane:o})}))))}function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function J(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,c=e.id,o=e.active,l=e.animated,u=e.destroyInactiveTabPane,f=e.tabKey,d=e.children,b=i.useState(n),p=Object(m.a)(b,2),v=p[0],y=p[1];i.useEffect((function(){o?y(!0):u&&y(!1)}),[o,u]);var h={};return o||(l?(h.visibility="hidden",h.height=0,h.overflowY="hidden"):h.display="none"),i.createElement("div",{id:c&&"".concat(c,"-panel-").concat(f),role:"tabpanel",tabIndex:o?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(f),"aria-hidden":!o,style:X(X({},h),r),className:s()("".concat(t,"-tabpane"),o&&"".concat(t,"-tabpane-active"),a)},(o||v||n)&&d)}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){Object(h.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q=0;var Z=i.forwardRef((function(e,t){var n,a,r=e.id,c=e.prefixCls,o=void 0===c?"rc-tabs":c,l=e.className,u=e.children,f=e.direction,d=e.activeKey,b=e.defaultActiveKey,p=e.editable,v=e.animated,j=e.tabPosition,w=void 0===j?"top":j,E=e.tabBarGutter,x=e.tabBarStyle,k=e.tabBarExtraContent,P=e.locale,C=e.moreIcon,N=e.moreTransitionName,S=e.destroyInactiveTabPane,T=e.renderTabBar,M=e.onChange,R=e.onTabClick,I=e.onTabScroll,A=Object(y.a)(e,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),D=function(e){return Object(g.a)(e).map((function(e){return i.isValidElement(e)?$($({key:void 0!==e.key?String(e.key):void 0},e.props),{},{node:e}):null})).filter((function(e){return e}))}(u),B="rtl"===f;a=!1===v?{inkBar:!1,tabPane:!1}:$({inkBar:!0,tabPane:!1},!0!==v?v:null);var _=Object(i.useState)(!1),z=Object(m.a)(_,2),L=z[0],W=z[1];Object(i.useEffect)((function(){W(function(){var e=navigator.userAgent||navigator.vendor||window.opera;return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0,4)))}())}),[]);var q=Object(O.a)((function(){var e;return null===(e=D[0])||void 0===e?void 0:e.key}),{value:d,defaultValue:b}),V=Object(m.a)(q,2),G=V[0],F=V[1],X=Object(i.useState)((function(){return D.findIndex((function(e){return e.key===G}))})),J=Object(m.a)(X,2),U=J[0],Z=J[1];Object(i.useEffect)((function(){var e,t=D.findIndex((function(e){return e.key===G}));-1===t&&(t=Math.max(0,Math.min(U,D.length-1)),F(null===(e=D[t])||void 0===e?void 0:e.key));Z(t)}),[D.map((function(e){return e.key})).join("_"),G,U]);var ee=Object(O.a)(null,{value:r}),te=Object(m.a)(ee,2),ne=te[0],ae=te[1],re=w;L&&!["left","right"].includes(w)&&(re="top"),Object(i.useEffect)((function(){r||(ae("rc-tabs-".concat(Q)),Q+=1)}),[]);var ce,oe={id:ne,activeKey:G,animated:a,tabPosition:re,rtl:B,mobile:L},ie=$($({},oe),{},{editable:p,locale:P,moreIcon:C,moreTransitionName:N,tabBarGutter:E,onTabClick:function(e,t){null===R||void 0===R||R(e,t),F(e),null===M||void 0===M||M(e)},onTabScroll:I,extra:k,style:x,panes:u});return ce=T?T(ie,H):i.createElement(H,Object.assign({},ie)),i.createElement(K.Provider,{value:{tabs:D,prefixCls:o}},i.createElement("div",Object.assign({ref:t,id:r,className:s()(o,"".concat(o,"-").concat(re),(n={},Object(h.a)(n,"".concat(o,"-mobile"),L),Object(h.a)(n,"".concat(o,"-editable"),p),Object(h.a)(n,"".concat(o,"-rtl"),B),n),l)},A),ce,i.createElement(Y,Object.assign({destroyInactiveTabPane:S},oe,{animated:a}))))}));Z.TabPane=J;var ee=Z,te=n(607),ne=n.n(te),ae=n(604),re=n.n(ae),ce=n(611),oe=n.n(ce),ie=n(567),le=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function se(e){var t,n,a=e.type,c=e.className,l=e.size,u=e.onEdit,d=e.hideAdd,b=e.centered,p=e.addIcon,v=le(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),m=v.prefixCls,y=i.useContext(f.b),h=y.getPrefixCls,g=y.direction,O=h("tabs",m);return"editable-card"===a&&(n={onEdit:function(e,t){var n=t.key,a=t.event;null===u||void 0===u||u("add"===e?a:n,e)},removeIcon:i.createElement(oe.a,null),addIcon:p||i.createElement(re.a,null),showAdd:!0!==d}),Object(ie.a)(!("onPrevClick"in v)&&!("onNextClick"in v),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),i.createElement(ee,o()({direction:g},v,{moreTransitionName:"slide-up",className:s()(c,(t={},r()(t,"".concat(O,"-").concat(l),l),r()(t,"".concat(O,"-card"),["card","editable-card"].includes(a)),r()(t,"".concat(O,"-editable-card"),"editable-card"===a),r()(t,"".concat(O,"-centered"),b),t)),editable:n,moreIcon:i.createElement(ne.a,null),prefixCls:O}))}se.TabPane=J;var ue=se,fe=n(602),de=n(603),be=n(601),pe=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};var ve=function(e){var t,n,a,c=i.useContext(f.b),l=c.getPrefixCls,d=c.direction,p=i.useContext(be.b),v=e.prefixCls,m=e.className,y=e.extra,h=e.headStyle,g=void 0===h?{}:h,O=e.bodyStyle,j=void 0===O?{}:O,w=e.title,E=e.loading,x=e.bordered,k=void 0===x||x,P=e.size,C=e.type,N=e.cover,S=e.actions,T=e.tabList,M=e.children,R=e.activeTabKey,I=e.defaultActiveTabKey,A=e.tabBarExtraContent,D=e.hoverable,B=e.tabProps,_=void 0===B?{}:B,z=pe(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),L=l("card",v),K=0===j.padding||"0px"===j.padding?{padding:24}:void 0,W=i.createElement("div",{className:"".concat(L,"-loading-block")}),q=i.createElement("div",{className:"".concat(L,"-loading-content"),style:K},i.createElement(fe.a,{gutter:8},i.createElement(de.a,{span:22},W)),i.createElement(fe.a,{gutter:8},i.createElement(de.a,{span:8},W),i.createElement(de.a,{span:15},W)),i.createElement(fe.a,{gutter:8},i.createElement(de.a,{span:6},W),i.createElement(de.a,{span:18},W)),i.createElement(fe.a,{gutter:8},i.createElement(de.a,{span:13},W),i.createElement(de.a,{span:9},W)),i.createElement(fe.a,{gutter:8},i.createElement(de.a,{span:4},W),i.createElement(de.a,{span:3},W),i.createElement(de.a,{span:16},W))),V=void 0!==R,G=o()(o()({},_),(t={},r()(t,V?"activeKey":"defaultActiveKey",V?R:I),r()(t,"tabBarExtraContent",A),t)),H=T&&T.length?i.createElement(ue,o()({size:"large"},G,{className:"".concat(L,"-head-tabs"),onChange:function(t){e.onTabChange&&e.onTabChange(t)}}),T.map((function(e){return i.createElement(ue.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(w||y||H)&&(a=i.createElement("div",{className:"".concat(L,"-head"),style:g},i.createElement("div",{className:"".concat(L,"-head-wrapper")},w&&i.createElement("div",{className:"".concat(L,"-head-title")},w),y&&i.createElement("div",{className:"".concat(L,"-extra")},y)),H));var Y=N?i.createElement("div",{className:"".concat(L,"-cover")},N):null,F=i.createElement("div",{className:"".concat(L,"-body"),style:j},E?q:M),X=S&&S.length?i.createElement("ul",{className:"".concat(L,"-actions")},function(e){return e.map((function(t,n){return i.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(n)},i.createElement("span",null,t))}))}(S)):null,J=Object(u.a)(z,["onTabChange"]),U=P||p,$=s()(L,m,(n={},r()(n,"".concat(L,"-loading"),E),r()(n,"".concat(L,"-bordered"),k),r()(n,"".concat(L,"-hoverable"),D),r()(n,"".concat(L,"-contain-grid"),function(){var t;return i.Children.forEach(e.children,(function(e){e&&e.type&&e.type===b&&(t=!0)})),t}()),r()(n,"".concat(L,"-contain-tabs"),T&&T.length),r()(n,"".concat(L,"-").concat(U),U),r()(n,"".concat(L,"-type-").concat(C),!!C),r()(n,"".concat(L,"-rtl"),"rtl"===d),n));return i.createElement("div",o()({},J,{className:$}),a,Y,F,X)};ve.Grid=b,ve.Meta=v;t.a=ve},873:function(e,t,n){"use strict";n.r(t);var a=n(556),r=n(1),c=n.n(r),o=n(115),i=n(19),l=n(887),s=n(659),u=n(603),f=n(787),d=n(602),b=n(67),p=n.n(b),v=n(632),m=n.n(v),y=n(69),h=l.a.Title,g=s.a.Meta;t.default=Object(i.g)((function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],i=t[1];Object(r.useEffect)((function(){document.title="My Video Streamer",p.a.get("/api/video/getVideos").then((function(e){e.data.success?i(e.data.videos):alert("Failed to get videos")}))}),[]),n.sort((function(){return.5-Math.random()}));var l=n.map((function(e,t){var n=Math.floor(e.duration/60),a=Math.floor(e.duration-60*n);return c.a.createElement(u.a,{key:t,lg:6,md:8,sm:12,xs:24,style:{marginBottom:"3vh"}},c.a.createElement("div",{style:{position:"relative"}},c.a.createElement(o.b,{to:"/video/".concat(e._id)},c.a.createElement("img",{style:{width:"100%"},src:"".concat(y.a).concat(e.thumbnail),alt:"thumbnail"}),c.a.createElement("div",{className:"duration",style:{bottom:0,right:0,position:"absolute",margin:"4px",color:"white",backgroundColor:"black",opacity:.8,padding:"2px 4px",borderRadius:"2px",letterSpacing:"0.5px",fontSize:"12px",fontWeight:"500",lineHeight:"12px"}},c.a.createElement("span",null,n,":",a)))),c.a.createElement("br",null),c.a.createElement(g,{avatar:c.a.createElement(f.a,{src:e.writer.image}),title:e.title}),c.a.createElement(o.b,{to:"/channel/".concat(e.writer._id),style:{color:"black"}},"".concat(e.writer.firstName,"\n            ").concat(e.writer.lastName)),c.a.createElement("br",null),c.a.createElement("span",{style:{marginLeft:"3rem"}},e.views," views")," -"," ",c.a.createElement("span",null,m()(e.createdAt).format("MMM Do YY")))}));return c.a.createElement("div",{style:{width:"85%",margin:"3rem auto"}},c.a.createElement(h,{level:2}," Recommended "),c.a.createElement("hr",null),n&&c.a.createElement(d.a,{gutter:16},l))}))}}]);
//# sourceMappingURL=17.94c37727.chunk.js.map