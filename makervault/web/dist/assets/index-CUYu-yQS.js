const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/3MFLoader-Cux4Jsa_.js","assets/fflate.module-DxdqVi2p.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function vx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function QA(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Zm={exports:{}},Ol={},Qm={exports:{}},Ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),_x=Symbol.for("react.portal"),xx=Symbol.for("react.fragment"),yx=Symbol.for("react.strict_mode"),Sx=Symbol.for("react.profiler"),Ex=Symbol.for("react.provider"),Mx=Symbol.for("react.context"),wx=Symbol.for("react.forward_ref"),Tx=Symbol.for("react.suspense"),bx=Symbol.for("react.memo"),Ax=Symbol.for("react.lazy"),Yf=Symbol.iterator;function Cx(t){return t===null||typeof t!="object"?null:(t=Yf&&t[Yf]||t["@@iterator"],typeof t=="function"?t:null)}var Jm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eg=Object.assign,tg={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=tg,this.updater=n||Jm}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ng(){}ng.prototype=Vs.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=tg,this.updater=n||Jm}var Nd=Ld.prototype=new ng;Nd.constructor=Ld;eg(Nd,Vs.prototype);Nd.isPureReactComponent=!0;var Kf=Array.isArray,ig=Object.prototype.hasOwnProperty,Dd={current:null},rg={key:!0,ref:!0,__self:!0,__source:!0};function sg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ig.call(e,i)&&!rg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Va,type:t,key:s,ref:a,props:r,_owner:Dd.current}}function Rx(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function Px(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Zf=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Px(""+t.key):e.toString(36)}function Vo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Va:case _x:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+hc(a,0):i,Kf(r)?(n="",t!=null&&(n=t.replace(Zf,"$&/")+"/"),Vo(r,e,n,"",function(c){return c})):r!=null&&(Ud(r)&&(r=Rx(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Zf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Kf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+hc(s,o);a+=Vo(s,e,n,l,r)}else if(l=Cx(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+hc(s,o++),a+=Vo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ja(t,e,n){if(t==null)return t;var i=[],r=0;return Vo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Lx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Wo={transition:null},Nx={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Wo,ReactCurrentOwner:Dd};function ag(){throw Error("act(...) is not supported in production builds of React.")}Ze.Children={map:Ja,forEach:function(t,e,n){Ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ja(t,function(){e++}),e},toArray:function(t){return Ja(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ze.Component=Vs;Ze.Fragment=xx;Ze.Profiler=Sx;Ze.PureComponent=Ld;Ze.StrictMode=yx;Ze.Suspense=Tx;Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nx;Ze.act=ag;Ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=eg({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Dd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)ig.call(e,l)&&!rg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:a}};Ze.createContext=function(t){return t={$$typeof:Mx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ex,_context:t},t.Consumer=t};Ze.createElement=sg;Ze.createFactory=function(t){var e=sg.bind(null,t);return e.type=t,e};Ze.createRef=function(){return{current:null}};Ze.forwardRef=function(t){return{$$typeof:wx,render:t}};Ze.isValidElement=Ud;Ze.lazy=function(t){return{$$typeof:Ax,_payload:{_status:-1,_result:t},_init:Lx}};Ze.memo=function(t,e){return{$$typeof:bx,type:t,compare:e===void 0?null:e}};Ze.startTransition=function(t){var e=Wo.transition;Wo.transition={};try{t()}finally{Wo.transition=e}};Ze.unstable_act=ag;Ze.useCallback=function(t,e){return sn.current.useCallback(t,e)};Ze.useContext=function(t){return sn.current.useContext(t)};Ze.useDebugValue=function(){};Ze.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};Ze.useEffect=function(t,e){return sn.current.useEffect(t,e)};Ze.useId=function(){return sn.current.useId()};Ze.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};Ze.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};Ze.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};Ze.useMemo=function(t,e){return sn.current.useMemo(t,e)};Ze.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};Ze.useRef=function(t){return sn.current.useRef(t)};Ze.useState=function(t){return sn.current.useState(t)};Ze.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};Ze.useTransition=function(){return sn.current.useTransition()};Ze.version="18.3.1";Qm.exports=Ze;var ue=Qm.exports;const be=vx(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx=ue,Ux=Symbol.for("react.element"),Ix=Symbol.for("react.fragment"),Fx=Object.prototype.hasOwnProperty,Ox=Dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kx={key:!0,ref:!0,__self:!0,__source:!0};function og(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Fx.call(e,i)&&!kx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ux,type:t,key:s,ref:a,props:r,_owner:Ox.current}}Ol.Fragment=Ix;Ol.jsx=og;Ol.jsxs=og;Zm.exports=Ol;var y=Zm.exports,lg={exports:{}},bn={},cg={exports:{}},ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,O){var W=D.length;D.push(O);e:for(;0<W;){var ee=W-1>>>1,ae=D[ee];if(0<r(ae,O))D[ee]=O,D[W]=ae,W=ee;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var O=D[0],W=D.pop();if(W!==O){D[0]=W;e:for(var ee=0,ae=D.length,j=ae>>>1;ee<j;){var ie=2*(ee+1)-1,de=D[ie],_e=ie+1,xe=D[_e];if(0>r(de,W))_e<ae&&0>r(xe,de)?(D[ee]=xe,D[_e]=W,ee=_e):(D[ee]=de,D[ie]=W,ee=ie);else if(_e<ae&&0>r(xe,W))D[ee]=xe,D[_e]=W,ee=_e;else break e}}return O}function r(D,O){var W=D.sortIndex-O.sortIndex;return W!==0?W:D.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,d=null,h=3,p=!1,_=!1,x=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(D){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=D)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function M(D){if(x=!1,m(D),!_)if(n(l)!==null)_=!0,Y(R);else{var O=n(c);O!==null&&ne(M,O.startTime-D)}}function R(D,O){_=!1,x&&(x=!1,u(U),U=-1),p=!0;var W=h;try{for(m(O),d=n(l);d!==null&&(!(d.expirationTime>O)||D&&!I());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,h=d.priorityLevel;var ae=ee(d.expirationTime<=O);O=t.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(l)&&i(l),m(O)}else i(l);d=n(l)}if(d!==null)var j=!0;else{var ie=n(c);ie!==null&&ne(M,ie.startTime-O),j=!1}return j}finally{d=null,h=W,p=!1}}var b=!1,C=null,U=-1,S=5,T=-1;function I(){return!(t.unstable_now()-T<S)}function q(){if(C!==null){var D=t.unstable_now();T=D;var O=!0;try{O=C(!0,D)}finally{O?se():(b=!1,C=null)}}else b=!1}var se;if(typeof v=="function")se=function(){v(q)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,B=N.port2;N.port1.onmessage=q,se=function(){B.postMessage(null)}}else se=function(){g(q,0)};function Y(D){C=D,b||(b=!0,se())}function ne(D,O){U=g(function(){D(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,Y(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var W=h;h=O;try{return D()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var W=h;h=D;try{return O()}finally{h=W}},t.unstable_scheduleCallback=function(D,O,W){var ee=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ee+W:ee):W=ee,D){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=W+ae,D={id:f++,callback:O,priorityLevel:D,startTime:W,expirationTime:ae,sortIndex:-1},W>ee?(D.sortIndex=W,e(c,D),n(l)===null&&D===n(c)&&(x?(u(U),U=-1):x=!0,ne(M,W-ee))):(D.sortIndex=ae,e(l,D),_||p||(_=!0,Y(R))),D},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(D){var O=h;return function(){var W=h;h=O;try{return D.apply(this,arguments)}finally{h=W}}}})(ug);cg.exports=ug;var Bx=cg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zx=ue,Tn=Bx;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dg=new Set,Ma={};function kr(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Ma[t]=e,t=0;t<e.length;t++)dg.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wu=Object.prototype.hasOwnProperty,Hx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qf={},Jf={};function Gx(t){return wu.call(Jf,t)?!0:wu.call(Qf,t)?!1:Hx.test(t)?Jf[t]=!0:(Qf[t]=!0,!1)}function Vx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Wx(t,e,n,i){if(e===null||typeof e>"u"||Vx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var Id=/[\-:]([a-z])/g;function Fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Id,Fd);jt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Id,Fd);jt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Id,Fd);jt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Od(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Wx(e,n,r,i)&&(n=null),i||r===null?Gx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ci=zx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),fg=Symbol.for("react.provider"),hg=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),Au=Symbol.for("react.suspense_list"),zd=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),pg=Symbol.for("react.offscreen"),eh=Symbol.iterator;function Ks(t){return t===null||typeof t!="object"?null:(t=eh&&t[eh]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,pc;function ca(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ca(t):""}function jx(t){switch(t.tag){case 5:return ca(t.type);case 16:return ca("Lazy");case 13:return ca("Suspense");case 19:return ca("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function Cu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case Tu:return"Profiler";case kd:return"StrictMode";case bu:return"Suspense";case Au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hg:return(t.displayName||"Context")+".Consumer";case fg:return(t._context.displayName||"Context")+".Provider";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zd:return e=t.displayName||null,e!==null?e:Cu(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return Cu(t(e))}catch{}}return null}function Xx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cu(e);case 8:return e===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $x(t){var e=mg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function to(t){t._valueTracker||(t._valueTracker=$x(t))}function gg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=mg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ru(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function th(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vg(t,e){e=e.checked,e!=null&&Od(t,"checked",e,!1)}function Pu(t,e){vg(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Lu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Lu(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Lu(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ua=Array.isArray;function _s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ih(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(ua(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function _g(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function rh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var no,yg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=no.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qx=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){qx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function Sg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function Eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Sg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Yx=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uu(t,e){if(e){if(Yx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function Iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fu=null;function Hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ou=null,xs=null,ys=null;function sh(t){if(t=Xa(t)){if(typeof Ou!="function")throw Error(le(280));var e=t.stateNode;e&&(e=Gl(e),Ou(t.stateNode,t.type,e))}}function Mg(t){xs?ys?ys.push(t):ys=[t]:xs=t}function wg(){if(xs){var t=xs,e=ys;if(ys=xs=null,sh(t),e)for(t=0;t<e.length;t++)sh(e[t])}}function Tg(t,e){return t(e)}function bg(){}var vc=!1;function Ag(t,e,n){if(vc)return t(e,n);vc=!0;try{return Tg(t,e,n)}finally{vc=!1,(xs!==null||ys!==null)&&(bg(),wg())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Gl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var ku=!1;if(Mi)try{var Zs={};Object.defineProperty(Zs,"passive",{get:function(){ku=!0}}),window.addEventListener("test",Zs,Zs),window.removeEventListener("test",Zs,Zs)}catch{ku=!1}function Kx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var pa=!1,rl=null,sl=!1,Bu=null,Zx={onError:function(t){pa=!0,rl=t}};function Qx(t,e,n,i,r,s,a,o,l){pa=!1,rl=null,Kx.apply(Zx,arguments)}function Jx(t,e,n,i,r,s,a,o,l){if(Qx.apply(this,arguments),pa){if(pa){var c=rl;pa=!1,rl=null}else throw Error(le(198));sl||(sl=!0,Bu=c)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ah(t){if(Br(t)!==t)throw Error(le(188))}function e0(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ah(r),t;if(s===i)return ah(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function Rg(t){return t=e0(t),t!==null?Pg(t):null}function Pg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pg(t);if(e!==null)return e;t=t.sibling}return null}var Lg=Tn.unstable_scheduleCallback,oh=Tn.unstable_cancelCallback,t0=Tn.unstable_shouldYield,n0=Tn.unstable_requestPaint,Tt=Tn.unstable_now,i0=Tn.unstable_getCurrentPriorityLevel,Gd=Tn.unstable_ImmediatePriority,Ng=Tn.unstable_UserBlockingPriority,al=Tn.unstable_NormalPriority,r0=Tn.unstable_LowPriority,Dg=Tn.unstable_IdlePriority,kl=null,si=null;function s0(t){if(si&&typeof si.onCommitFiberRoot=="function")try{si.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:l0,a0=Math.log,o0=Math.LN2;function l0(t){return t>>>=0,t===0?32:31-(a0(t)/o0|0)|0}var io=64,ro=4194304;function da(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=da(o):(s&=a,s!==0&&(i=da(s)))}else a=n&~r,a!==0?i=da(a):s!==0&&(i=da(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Kn(e),r=1<<n,i|=t[n],e&=~r;return i}function c0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Kn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=c0(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function zu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ug(){var t=io;return io<<=1,!(io&4194240)&&(io=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kn(e),t[e]=n}function d0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Kn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Kn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Ig(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Fg,Wd,Og,kg,Bg,Hu=!1,so=[],ji=null,Xi=null,$i=null,ba=new Map,Aa=new Map,ki=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lh(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Xi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&Wd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function h0(t,e,n,i,r){switch(e){case"focusin":return ji=Qs(ji,t,e,n,i,r),!0;case"dragenter":return Xi=Qs(Xi,t,e,n,i,r),!0;case"mouseover":return $i=Qs($i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ba.set(s,Qs(ba.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Aa.set(s,Qs(Aa.get(s)||null,t,e,n,i,r)),!0}return!1}function zg(t){var e=Mr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=Cg(n),e!==null){t.blockedOn=e,Bg(t.priority,function(){Og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fu=i,n.target.dispatchEvent(i),Fu=null}else return e=Xa(n),e!==null&&Wd(e),t.blockedOn=n,!1;e.shift()}return!0}function ch(t,e,n){jo(t)&&n.delete(e)}function p0(){Hu=!1,ji!==null&&jo(ji)&&(ji=null),Xi!==null&&jo(Xi)&&(Xi=null),$i!==null&&jo($i)&&($i=null),ba.forEach(ch),Aa.forEach(ch)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Hu||(Hu=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,p0)))}function Ca(t){function e(r){return Js(r,t)}if(0<so.length){Js(so[0],t);for(var n=1;n<so.length;n++){var i=so[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&Js(ji,t),Xi!==null&&Js(Xi,t),$i!==null&&Js($i,t),ba.forEach(e),Aa.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)zg(n),n.blockedOn===null&&ki.shift()}var Ss=Ci.ReactCurrentBatchConfig,ll=!0;function m0(t,e,n,i){var r=rt,s=Ss.transition;Ss.transition=null;try{rt=1,jd(t,e,n,i)}finally{rt=r,Ss.transition=s}}function g0(t,e,n,i){var r=rt,s=Ss.transition;Ss.transition=null;try{rt=4,jd(t,e,n,i)}finally{rt=r,Ss.transition=s}}function jd(t,e,n,i){if(ll){var r=Gu(t,e,n,i);if(r===null)Cc(t,e,i,cl,n),lh(t,i);else if(h0(r,t,e,n,i))i.stopPropagation();else if(lh(t,i),e&4&&-1<f0.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&Fg(s),s=Gu(t,e,n,i),s===null&&Cc(t,e,i,cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cc(t,e,i,null,n)}}var cl=null;function Gu(t,e,n,i){if(cl=null,t=Hd(i),t=Mr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function Hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i0()){case Gd:return 1;case Ng:return 4;case al:case r0:return 16;case Dg:return 536870912;default:return 16}default:return 16}}var zi=null,Xd=null,Xo=null;function Gg(){if(Xo)return Xo;var t,e=Xd,n=e.length,i,r="value"in zi?zi.value:zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Xo=r.slice(t,1<i?1-i:void 0)}function $o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function uh(){return!1}function An(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ao:uh,this.isPropagationStopped=uh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),e}var Ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$d=An(Ws),ja=xt({},Ws,{view:0,detail:0}),v0=An(ja),xc,yc,ea,Bl=xt({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ea&&(ea&&t.type==="mousemove"?(xc=t.screenX-ea.screenX,yc=t.screenY-ea.screenY):yc=xc=0,ea=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),dh=An(Bl),_0=xt({},Bl,{dataTransfer:0}),x0=An(_0),y0=xt({},ja,{relatedTarget:0}),Sc=An(y0),S0=xt({},Ws,{animationName:0,elapsedTime:0,pseudoElement:0}),E0=An(S0),M0=xt({},Ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),w0=An(M0),T0=xt({},Ws,{data:0}),fh=An(T0),b0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},A0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C0[t])?!!e[t]:!1}function qd(){return R0}var P0=xt({},ja,{key:function(t){if(t.key){var e=b0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?A0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qd,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),L0=An(P0),N0=xt({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hh=An(N0),D0=xt({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qd}),U0=An(D0),I0=xt({},Ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=An(I0),O0=xt({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k0=An(O0),B0=[9,13,27,32],Yd=Mi&&"CompositionEvent"in window,ma=null;Mi&&"documentMode"in document&&(ma=document.documentMode);var z0=Mi&&"TextEvent"in window&&!ma,Vg=Mi&&(!Yd||ma&&8<ma&&11>=ma),ph=" ",mh=!1;function Wg(t,e){switch(t){case"keyup":return B0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function H0(t,e){switch(t){case"compositionend":return jg(e);case"keypress":return e.which!==32?null:(mh=!0,ph);case"textInput":return t=e.data,t===ph&&mh?null:t;default:return null}}function G0(t,e){if(as)return t==="compositionend"||!Yd&&Wg(t,e)?(t=Gg(),Xo=Xd=zi=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Vg&&e.locale!=="ko"?null:e.data;default:return null}}var V0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!V0[t.type]:e==="textarea"}function Xg(t,e,n,i){Mg(i),e=ul(e,"onChange"),0<e.length&&(n=new $d("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ga=null,Ra=null;function W0(t){iv(t,0)}function zl(t){var e=cs(t);if(gg(e))return t}function j0(t,e){if(t==="change")return e}var $g=!1;if(Mi){var Ec;if(Mi){var Mc="oninput"in document;if(!Mc){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),Mc=typeof vh.oninput=="function"}Ec=Mc}else Ec=!1;$g=Ec&&(!document.documentMode||9<document.documentMode)}function _h(){ga&&(ga.detachEvent("onpropertychange",qg),Ra=ga=null)}function qg(t){if(t.propertyName==="value"&&zl(Ra)){var e=[];Xg(e,Ra,t,Hd(t)),Ag(W0,e)}}function X0(t,e,n){t==="focusin"?(_h(),ga=e,Ra=n,ga.attachEvent("onpropertychange",qg)):t==="focusout"&&_h()}function $0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(Ra)}function q0(t,e){if(t==="click")return zl(e)}function Y0(t,e){if(t==="input"||t==="change")return zl(e)}function K0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Jn=typeof Object.is=="function"?Object.is:K0;function Pa(t,e){if(Jn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wu.call(e,r)||!Jn(t[r],e[r]))return!1}return!0}function xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yh(t,e){var n=xh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xh(n)}}function Yg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Yg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Kg(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function Kd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Z0(t){var e=Kg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Yg(n.ownerDocument.documentElement,n)){if(i!==null&&Kd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=yh(n,s);var a=yh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Q0=Mi&&"documentMode"in document&&11>=document.documentMode,os=null,Vu=null,va=null,Wu=!1;function Sh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wu||os==null||os!==il(i)||(i=os,"selectionStart"in i&&Kd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),va&&Pa(va,i)||(va=i,i=ul(Vu,"onSelect"),0<i.length&&(e=new $d("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:oo("Animation","AnimationEnd"),animationiteration:oo("Animation","AnimationIteration"),animationstart:oo("Animation","AnimationStart"),transitionend:oo("Transition","TransitionEnd")},wc={},Zg={};Mi&&(Zg=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function Hl(t){if(wc[t])return wc[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Zg)return wc[t]=e[n];return t}var Qg=Hl("animationend"),Jg=Hl("animationiteration"),ev=Hl("animationstart"),tv=Hl("transitionend"),nv=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,e){nv.set(t,e),kr(e,[t])}for(var Tc=0;Tc<Eh.length;Tc++){var bc=Eh[Tc],J0=bc.toLowerCase(),ey=bc[0].toUpperCase()+bc.slice(1);ar(J0,"on"+ey)}ar(Qg,"onAnimationEnd");ar(Jg,"onAnimationIteration");ar(ev,"onAnimationStart");ar("dblclick","onDoubleClick");ar("focusin","onFocus");ar("focusout","onBlur");ar(tv,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(fa));function Mh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Jx(i,e,void 0,t),t.currentTarget=null}function iv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Mh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Mh(r,o,c),s=l}}}if(sl)throw t=Bu,sl=!1,Bu=null,t}function ut(t,e){var n=e[Yu];n===void 0&&(n=e[Yu]=new Set);var i=t+"__bubble";n.has(i)||(rv(e,t,2,!1),n.add(i))}function Ac(t,e,n){var i=0;e&&(i|=4),rv(n,t,i,e)}var lo="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[lo]){t[lo]=!0,dg.forEach(function(n){n!=="selectionchange"&&(ty.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[lo]||(e[lo]=!0,Ac("selectionchange",!1,e))}}function rv(t,e,n,i){switch(Hg(e)){case 1:var r=m0;break;case 4:r=g0;break;default:r=jd}n=r.bind(null,e,n,t),r=void 0,!ku||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Mr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ag(function(){var c=s,f=Hd(n),d=[];e:{var h=nv.get(t);if(h!==void 0){var p=$d,_=t;switch(t){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":p=L0;break;case"focusin":_="focus",p=Sc;break;case"focusout":_="blur",p=Sc;break;case"beforeblur":case"afterblur":p=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=dh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=x0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=U0;break;case Qg:case Jg:case ev:p=E0;break;case tv:p=F0;break;case"scroll":p=v0;break;case"wheel":p=k0;break;case"copy":case"cut":case"paste":p=w0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=hh}var x=(e&4)!==0,g=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,m;v!==null;){m=v;var M=m.stateNode;if(m.tag===5&&M!==null&&(m=M,u!==null&&(M=Ta(v,u),M!=null&&x.push(Na(v,M,m)))),g)break;v=v.return}0<x.length&&(h=new p(h,_,null,n,f),d.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Fu&&(_=n.relatedTarget||n.fromElement)&&(Mr(_)||_[wi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?Mr(_):null,_!==null&&(g=Br(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(x=dh,M="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=hh,M="onPointerLeave",u="onPointerEnter",v="pointer"),g=p==null?h:cs(p),m=_==null?h:cs(_),h=new x(M,v+"leave",p,n,f),h.target=g,h.relatedTarget=m,M=null,Mr(f)===c&&(x=new x(u,v+"enter",_,n,f),x.target=m,x.relatedTarget=g,M=x),g=M,p&&_)t:{for(x=p,u=_,v=0,m=x;m;m=zr(m))v++;for(m=0,M=u;M;M=zr(M))m++;for(;0<v-m;)x=zr(x),v--;for(;0<m-v;)u=zr(u),m--;for(;v--;){if(x===u||u!==null&&x===u.alternate)break t;x=zr(x),u=zr(u)}x=null}else x=null;p!==null&&wh(d,h,p,x,!1),_!==null&&g!==null&&wh(d,g,_,x,!0)}}e:{if(h=c?cs(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var R=j0;else if(gh(h))if($g)R=Y0;else{R=$0;var b=X0}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(R=q0);if(R&&(R=R(t,c))){Xg(d,R,n,f);break e}b&&b(t,h,c),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Lu(h,"number",h.value)}switch(b=c?cs(c):window,t){case"focusin":(gh(b)||b.contentEditable==="true")&&(os=b,Vu=c,va=null);break;case"focusout":va=Vu=os=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,Sh(d,n,f);break;case"selectionchange":if(Q0)break;case"keydown":case"keyup":Sh(d,n,f)}var C;if(Yd)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else as?Wg(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Vg&&n.locale!=="ko"&&(as||U!=="onCompositionStart"?U==="onCompositionEnd"&&as&&(C=Gg()):(zi=f,Xd="value"in zi?zi.value:zi.textContent,as=!0)),b=ul(c,U),0<b.length&&(U=new fh(U,t,null,n,f),d.push({event:U,listeners:b}),C?U.data=C:(C=jg(n),C!==null&&(U.data=C)))),(C=z0?H0(t,n):G0(t,n))&&(c=ul(c,"onBeforeInput"),0<c.length&&(f=new fh("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:c}),f.data=C))}iv(d,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(Na(t,s,r)),s=Ta(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ta(n,s),l!=null&&a.unshift(Na(n,l,o))):r||(l=Ta(n,s),l!=null&&a.push(Na(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ny=/\r\n?/g,iy=/\u0000|\uFFFD/g;function Th(t){return(typeof t=="string"?t:""+t).replace(ny,`
`).replace(iy,"")}function co(t,e,n){if(e=Th(e),Th(t)!==e&&n)throw Error(le(425))}function dl(){}var ju=null,Xu=null;function $u(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,bh=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof bh<"u"?function(t){return bh.resolve(null).then(t).catch(ay)}:qu;function ay(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ca(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ca(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ah(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),ri="__reactFiber$"+js,Da="__reactProps$"+js,wi="__reactContainer$"+js,Yu="__reactEvents$"+js,oy="__reactListeners$"+js,ly="__reactHandles$"+js;function Mr(t){var e=t[ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wi]||n[ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ah(t);t!==null;){if(n=t[ri])return n;t=Ah(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[ri]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function Gl(t){return t[Da]||null}var Ku=[],us=-1;function or(t){return{current:t}}function ft(t){0>us||(t.current=Ku[us],Ku[us]=null,us--)}function lt(t,e){us++,Ku[us]=t.current,t.current=e}var ir={},Qt=or(ir),dn=or(!1),Lr=ir;function Rs(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function fn(t){return t=t.childContextTypes,t!=null}function fl(){ft(dn),ft(Qt)}function Ch(t,e,n){if(Qt.current!==ir)throw Error(le(168));lt(Qt,e),lt(dn,n)}function sv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,Xx(t)||"Unknown",r));return xt({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Lr=Qt.current,lt(Qt,t),lt(dn,dn.current),!0}function Rh(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=sv(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,ft(dn),ft(Qt),lt(Qt,t)):ft(dn),lt(dn,n)}var vi=null,Vl=!1,Pc=!1;function av(t){vi===null?vi=[t]:vi.push(t)}function cy(t){Vl=!0,av(t)}function lr(){if(!Pc&&vi!==null){Pc=!0;var t=0,e=rt;try{var n=vi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,Vl=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),Lg(Gd,lr),r}finally{rt=e,Pc=!1}}return null}var ds=[],fs=0,pl=null,ml=0,Ln=[],Nn=0,Nr=null,xi=1,yi="";function vr(t,e){ds[fs++]=ml,ds[fs++]=pl,pl=t,ml=e}function ov(t,e,n){Ln[Nn++]=xi,Ln[Nn++]=yi,Ln[Nn++]=Nr,Nr=t;var i=xi;t=yi;var r=32-Kn(i)-1;i&=~(1<<r),n+=1;var s=32-Kn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,xi=1<<32-Kn(e)+r|n<<r|i,yi=s+t}else xi=1<<s|n<<r|i,yi=t}function Zd(t){t.return!==null&&(vr(t,1),ov(t,1,0))}function Qd(t){for(;t===pl;)pl=ds[--fs],ds[fs]=null,ml=ds[--fs],ds[fs]=null;for(;t===Nr;)Nr=Ln[--Nn],Ln[Nn]=null,yi=Ln[--Nn],Ln[Nn]=null,xi=Ln[--Nn],Ln[Nn]=null}var wn=null,En=null,pt=!1,Xn=null;function lv(t,e){var n=In(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ph(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,wn=t,En=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,wn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:xi,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=In(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,wn=t,En=null,!0):!1;default:return!1}}function Zu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qu(t){if(pt){var e=En;if(e){var n=e;if(!Ph(t,e)){if(Zu(t))throw Error(le(418));e=qi(n.nextSibling);var i=wn;e&&Ph(t,e)?lv(i,n):(t.flags=t.flags&-4097|2,pt=!1,wn=t)}}else{if(Zu(t))throw Error(le(418));t.flags=t.flags&-4097|2,pt=!1,wn=t}}}function Lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;wn=t}function uo(t){if(t!==wn)return!1;if(!pt)return Lh(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$u(t.type,t.memoizedProps)),e&&(e=En)){if(Zu(t))throw cv(),Error(le(418));for(;e;)lv(t,e),e=qi(e.nextSibling)}if(Lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=wn?qi(t.stateNode.nextSibling):null;return!0}function cv(){for(var t=En;t;)t=qi(t.nextSibling)}function Ps(){En=wn=null,pt=!1}function Jd(t){Xn===null?Xn=[t]:Xn.push(t)}var uy=Ci.ReactCurrentBatchConfig;function ta(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function fo(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Nh(t){var e=t._init;return e(t._payload)}function uv(t){function e(u,v){if(t){var m=u.deletions;m===null?(u.deletions=[v],u.flags|=16):m.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=Qi(u,v),u.index=0,u.sibling=null,u}function s(u,v,m){return u.index=m,t?(m=u.alternate,m!==null?(m=m.index,m<v?(u.flags|=2,v):m):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,m,M){return v===null||v.tag!==6?(v=Oc(m,u.mode,M),v.return=u,v):(v=r(v,m),v.return=u,v)}function l(u,v,m,M){var R=m.type;return R===ss?f(u,v,m.props.children,M,m.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fi&&Nh(R)===v.type)?(M=r(v,m.props),M.ref=ta(u,v,m),M.return=u,M):(M=el(m.type,m.key,m.props,null,u.mode,M),M.ref=ta(u,v,m),M.return=u,M)}function c(u,v,m,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==m.containerInfo||v.stateNode.implementation!==m.implementation?(v=kc(m,u.mode,M),v.return=u,v):(v=r(v,m.children||[]),v.return=u,v)}function f(u,v,m,M,R){return v===null||v.tag!==7?(v=Ar(m,u.mode,M,R),v.return=u,v):(v=r(v,m),v.return=u,v)}function d(u,v,m){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Oc(""+v,u.mode,m),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case eo:return m=el(v.type,v.key,v.props,null,u.mode,m),m.ref=ta(u,null,v),m.return=u,m;case rs:return v=kc(v,u.mode,m),v.return=u,v;case Fi:var M=v._init;return d(u,M(v._payload),m)}if(ua(v)||Ks(v))return v=Ar(v,u.mode,m,null),v.return=u,v;fo(u,v)}return null}function h(u,v,m,M){var R=v!==null?v.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return R!==null?null:o(u,v,""+m,M);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:return m.key===R?l(u,v,m,M):null;case rs:return m.key===R?c(u,v,m,M):null;case Fi:return R=m._init,h(u,v,R(m._payload),M)}if(ua(m)||Ks(m))return R!==null?null:f(u,v,m,M,null);fo(u,m)}return null}function p(u,v,m,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(m)||null,o(v,u,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case eo:return u=u.get(M.key===null?m:M.key)||null,l(v,u,M,R);case rs:return u=u.get(M.key===null?m:M.key)||null,c(v,u,M,R);case Fi:var b=M._init;return p(u,v,m,b(M._payload),R)}if(ua(M)||Ks(M))return u=u.get(m)||null,f(v,u,M,R,null);fo(v,M)}return null}function _(u,v,m,M){for(var R=null,b=null,C=v,U=v=0,S=null;C!==null&&U<m.length;U++){C.index>U?(S=C,C=null):S=C.sibling;var T=h(u,C,m[U],M);if(T===null){C===null&&(C=S);break}t&&C&&T.alternate===null&&e(u,C),v=s(T,v,U),b===null?R=T:b.sibling=T,b=T,C=S}if(U===m.length)return n(u,C),pt&&vr(u,U),R;if(C===null){for(;U<m.length;U++)C=d(u,m[U],M),C!==null&&(v=s(C,v,U),b===null?R=C:b.sibling=C,b=C);return pt&&vr(u,U),R}for(C=i(u,C);U<m.length;U++)S=p(C,u,U,m[U],M),S!==null&&(t&&S.alternate!==null&&C.delete(S.key===null?U:S.key),v=s(S,v,U),b===null?R=S:b.sibling=S,b=S);return t&&C.forEach(function(I){return e(u,I)}),pt&&vr(u,U),R}function x(u,v,m,M){var R=Ks(m);if(typeof R!="function")throw Error(le(150));if(m=R.call(m),m==null)throw Error(le(151));for(var b=R=null,C=v,U=v=0,S=null,T=m.next();C!==null&&!T.done;U++,T=m.next()){C.index>U?(S=C,C=null):S=C.sibling;var I=h(u,C,T.value,M);if(I===null){C===null&&(C=S);break}t&&C&&I.alternate===null&&e(u,C),v=s(I,v,U),b===null?R=I:b.sibling=I,b=I,C=S}if(T.done)return n(u,C),pt&&vr(u,U),R;if(C===null){for(;!T.done;U++,T=m.next())T=d(u,T.value,M),T!==null&&(v=s(T,v,U),b===null?R=T:b.sibling=T,b=T);return pt&&vr(u,U),R}for(C=i(u,C);!T.done;U++,T=m.next())T=p(C,u,U,T.value,M),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?U:T.key),v=s(T,v,U),b===null?R=T:b.sibling=T,b=T);return t&&C.forEach(function(q){return e(u,q)}),pt&&vr(u,U),R}function g(u,v,m,M){if(typeof m=="object"&&m!==null&&m.type===ss&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case eo:e:{for(var R=m.key,b=v;b!==null;){if(b.key===R){if(R=m.type,R===ss){if(b.tag===7){n(u,b.sibling),v=r(b,m.props.children),v.return=u,u=v;break e}}else if(b.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fi&&Nh(R)===b.type){n(u,b.sibling),v=r(b,m.props),v.ref=ta(u,b,m),v.return=u,u=v;break e}n(u,b);break}else e(u,b);b=b.sibling}m.type===ss?(v=Ar(m.props.children,u.mode,M,m.key),v.return=u,u=v):(M=el(m.type,m.key,m.props,null,u.mode,M),M.ref=ta(u,v,m),M.return=u,u=M)}return a(u);case rs:e:{for(b=m.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===m.containerInfo&&v.stateNode.implementation===m.implementation){n(u,v.sibling),v=r(v,m.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=kc(m,u.mode,M),v.return=u,u=v}return a(u);case Fi:return b=m._init,g(u,v,b(m._payload),M)}if(ua(m))return _(u,v,m,M);if(Ks(m))return x(u,v,m,M);fo(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,m),v.return=u,u=v):(n(u,v),v=Oc(m,u.mode,M),v.return=u,u=v),a(u)):n(u,v)}return g}var Ls=uv(!0),dv=uv(!1),gl=or(null),vl=null,hs=null,ef=null;function tf(){ef=hs=vl=null}function nf(t){var e=gl.current;ft(gl),t._currentValue=e}function Ju(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){vl=t,ef=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function kn(t){var e=t._currentValue;if(ef!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(vl===null)throw Error(le(308));hs=t,vl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var wr=null;function rf(t){wr===null?wr=[t]:wr.push(t)}function fv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,rf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,et&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,rf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vd(t,n)}}function Dh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;a=0,f=c=l=null,o=s;do{var h=o.lane,p=o.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(h=e,p=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){d=_.call(p,d,h);break e}d=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,h=typeof _=="function"?_.call(p,d,h):_,h==null)break e;d=xt({},d,h);break e;case 2:Oi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[o]:h.push(o))}else p={eventTime:p,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=p,l=d):f=f.next=p,a|=h;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;h=o,o=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=a,t.lanes=a,t.memoizedState=d}}function Uh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var $a={},ai=or($a),Ua=or($a),Ia=or($a);function Tr(t){if(t===$a)throw Error(le(174));return t}function af(t,e){switch(lt(Ia,e),lt(Ua,t),lt(ai,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Du(e,t)}ft(ai),lt(ai,e)}function Ns(){ft(ai),ft(Ua),ft(Ia)}function pv(t){Tr(Ia.current);var e=Tr(ai.current),n=Du(e,t.type);e!==n&&(lt(Ua,t),lt(ai,n))}function of(t){Ua.current===t&&(ft(ai),ft(Ua))}var vt=or(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function lf(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var Yo=Ci.ReactCurrentDispatcher,Nc=Ci.ReactCurrentBatchConfig,Dr=0,_t=null,Lt=null,Bt=null,yl=!1,_a=!1,Fa=0,dy=0;function $t(){throw Error(le(321))}function cf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Jn(t[n],e[n]))return!1;return!0}function uf(t,e,n,i,r,s){if(Dr=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Yo.current=t===null||t.memoizedState===null?my:gy,t=n(i,r),_a){s=0;do{if(_a=!1,Fa=0,25<=s)throw Error(le(301));s+=1,Bt=Lt=null,e.updateQueue=null,Yo.current=vy,t=n(i,r)}while(_a)}if(Yo.current=Sl,e=Lt!==null&&Lt.next!==null,Dr=0,Bt=Lt=_t=null,yl=!1,e)throw Error(le(300));return t}function df(){var t=Fa!==0;return Fa=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?_t.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Bn(){if(Lt===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Bt===null?_t.memoizedState:Bt.next;if(e!==null)Bt=e,Lt=t;else{if(t===null)throw Error(le(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Bt===null?_t.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Oa(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Dr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=d,a=i):l=l.next=d,_t.lanes|=f,Ur|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Jn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,_t.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Jn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function mv(){}function gv(t,e){var n=_t,i=Bn(),r=e(),s=!Jn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,ff(xv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,ka(9,_v.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(le(349));Dr&30||vv(n,e,r)}return r}function vv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function _v(t,e,n,i){e.value=n,e.getSnapshot=i,yv(e)&&Sv(t)}function xv(t,e,n){return n(function(){yv(e)&&Sv(t)})}function yv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Jn(t,n)}catch{return!0}}function Sv(t){var e=Ti(t,1);e!==null&&Zn(e,t,1,-1)}function Ih(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=py.bind(null,_t,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ev(){return Bn().memoizedState}function Ko(t,e,n,i){var r=ni();_t.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function Wl(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var a=Lt.memoizedState;if(s=a.destroy,i!==null&&cf(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}_t.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function Fh(t,e){return Ko(8390656,8,t,e)}function ff(t,e){return Wl(2048,8,t,e)}function Mv(t,e){return Wl(4,2,t,e)}function wv(t,e){return Wl(4,4,t,e)}function Tv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bv(t,e,n){return n=n!=null?n.concat([t]):null,Wl(4,4,Tv.bind(null,e,t),n)}function hf(){}function Av(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Cv(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Rv(t,e,n){return Dr&21?(Jn(n,e)||(n=Ug(),_t.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function fy(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Nc.transition;Nc.transition={};try{t(!1),e()}finally{rt=n,Nc.transition=i}}function Pv(){return Bn().memoizedState}function hy(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Lv(t))Nv(e,n);else if(n=fv(t,e,n,i),n!==null){var r=rn();Zn(n,t,i,r),Dv(n,e,i)}}function py(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lv(t))Nv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Jn(o,a)){var l=e.interleaved;l===null?(r.next=r,rf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=fv(t,e,r,i),n!==null&&(r=rn(),Zn(n,t,i,r),Dv(n,e,i))}}function Lv(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function Nv(t,e){_a=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vd(t,n)}}var Sl={readContext:kn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},my={readContext:kn,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:kn,useEffect:Fh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ko(4194308,4,Tv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ko(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ko(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=hy.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Ih,useDebugValue:hf,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Ih(!1),e=t[0];return t=fy.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=ni();if(pt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Ht===null)throw Error(le(349));Dr&30||vv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Fh(xv.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,_v.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Ht.identifierPrefix;if(pt){var n=yi,i=xi;n=(i&~(1<<32-Kn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gy={readContext:kn,useCallback:Av,useContext:kn,useEffect:ff,useImperativeHandle:bv,useInsertionEffect:Mv,useLayoutEffect:wv,useMemo:Cv,useReducer:Dc,useRef:Ev,useState:function(){return Dc(Oa)},useDebugValue:hf,useDeferredValue:function(t){var e=Bn();return Rv(e,Lt.memoizedState,t)},useTransition:function(){var t=Dc(Oa)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:mv,useSyncExternalStore:gv,useId:Pv,unstable_isNewReconciler:!1},vy={readContext:kn,useCallback:Av,useContext:kn,useEffect:ff,useImperativeHandle:bv,useInsertionEffect:Mv,useLayoutEffect:wv,useMemo:Cv,useReducer:Uc,useRef:Ev,useState:function(){return Uc(Oa)},useDebugValue:hf,useDeferredValue:function(t){var e=Bn();return Lt===null?e.memoizedState=t:Rv(e,Lt.memoizedState,t)},useTransition:function(){var t=Uc(Oa)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:mv,useSyncExternalStore:gv,useId:Pv,unstable_isNewReconciler:!1};function Wn(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ed(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var jl={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=rn(),r=Zi(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(Zn(e,t,r,i),qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=rn(),r=Zi(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yi(t,s,r),e!==null&&(Zn(e,t,r,i),qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rn(),i=Zi(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Yi(t,r,i),e!==null&&(Zn(e,t,i,n),qo(e,t,i))}};function Oh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(r,s):!0}function Uv(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=kn(s):(r=fn(e)?Lr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function kh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&jl.enqueueReplaceState(e,e.state,null)}function td(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},sf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=kn(s):(s=fn(e)?Lr:Qt.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ed(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&jl.enqueueReplaceState(r,r.state,null),_l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",i=e;do n+=jx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _y=typeof WeakMap=="function"?WeakMap:Map;function Iv(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ml||(Ml=!0,fd=i),nd(t,e)},n}function Fv(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){nd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){nd(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Bh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new _y;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ny.bind(null,t,e,n),e.then(t,t))}function zh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Yi(n,e,1))),n.lanes|=1),t)}var xy=Ci.ReactCurrentOwner,un=!1;function en(t,e,n,i){e.child=t===null?dv(e,null,n,i):Ls(e,t.child,n,i)}function Gh(t,e,n,i,r){n=n.render;var s=e.ref;return Es(e,r),i=uf(t,e,n,i,s,r),n=df(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(pt&&n&&Zd(e),e.flags|=1,en(t,e,i,r),e.child)}function Vh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Sf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ov(t,e,s,i,r)):(t=el(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(a,i)&&t.ref===e.ref)return bi(t,e,r)}return e.flags|=1,t=Qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ov(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Pa(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,bi(t,e,r)}return id(t,e,n,i,r)}function kv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(ms,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(ms,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(ms,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(ms,yn),yn|=i;return en(t,e,r,n),e.child}function Bv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function id(t,e,n,i,r){var s=fn(n)?Lr:Qt.current;return s=Rs(e,s),Es(e,r),n=uf(t,e,n,i,s,r),i=df(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,bi(t,e,r)):(pt&&i&&Zd(e),e.flags|=1,en(t,e,n,r),e.child)}function Wh(t,e,n,i,r){if(fn(n)){var s=!0;hl(e)}else s=!1;if(Es(e,r),e.stateNode===null)Zo(t,e),Uv(e,n,i),td(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=kn(c):(c=fn(n)?Lr:Qt.current,c=Rs(e,c));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&kh(e,a,i,c),Oi=!1;var h=e.memoizedState;a.state=h,_l(e,i,a,r),l=e.memoizedState,o!==i||h!==l||dn.current||Oi?(typeof f=="function"&&(ed(e,n,f,i),l=e.memoizedState),(o=Oi||Oh(e,n,o,i,h,l,c))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,hv(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Wn(e.type,o),a.props=c,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=kn(l):(l=fn(n)?Lr:Qt.current,l=Rs(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==d||h!==l)&&kh(e,a,i,l),Oi=!1,h=e.memoizedState,a.state=h,_l(e,i,a,r);var _=e.memoizedState;o!==d||h!==_||dn.current||Oi?(typeof p=="function"&&(ed(e,n,p,i),_=e.memoizedState),(c=Oi||Oh(e,n,c,i,h,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return rd(t,e,n,i,s,r)}function rd(t,e,n,i,r,s){Bv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Rh(e,n,!1),bi(t,e,s);i=e.stateNode,xy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ls(e,t.child,null,s),e.child=Ls(e,null,o,s)):en(t,e,o,s),e.memoizedState=i.state,r&&Rh(e,n,!0),e.child}function zv(t){var e=t.stateNode;e.pendingContext?Ch(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ch(t,e.context,!1),af(t,e.containerInfo)}function jh(t,e,n,i,r){return Ps(),Jd(r),e.flags|=256,en(t,e,n,i),e.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(vt,r&1),t===null)return Qu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ql(a,i,0,null),t=Ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ad(n),e.memoizedState=sd,t):pf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return yy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Qi(o,s):(s=Ar(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ad(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=sd,i}return s=t.child,t=s.sibling,i=Qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function pf(t,e){return e=ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ho(t,e,n,i){return i!==null&&Jd(i),Ls(e,t.child,null,n),t=pf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Ic(Error(le(422))),ho(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ql({mode:"visible",children:i.children},r,0,null),s=Ar(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ls(e,t.child,null,a),e.child.memoizedState=ad(a),e.memoizedState=sd,s);if(!(e.mode&1))return ho(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(le(419)),i=Ic(s,i,void 0),ho(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=Ht,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(t,r),Zn(i,t,r,-1))}return yf(),i=Ic(Error(le(421))),ho(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Dy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=qi(r.nextSibling),wn=e,pt=!0,Xn=null,t!==null&&(Ln[Nn++]=xi,Ln[Nn++]=yi,Ln[Nn++]=Nr,xi=t.id,yi=t.overflow,Nr=e),e=pf(e,i.children),e.flags|=4096,e)}function Xh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ju(t.return,e,n)}function Fc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Gv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xh(t,n,e);else if(t.tag===19)Xh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Fc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Fc(e,!0,n,null,s);break;case"together":Fc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Zo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function bi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sy(t,e,n){switch(e.tag){case 3:zv(e),Ps();break;case 5:pv(e);break;case 1:fn(e.type)&&hl(e);break;case 4:af(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(lt(vt,vt.current&1),t=bi(t,e,n),t!==null?t.sibling:null);lt(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Gv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,kv(t,e,n)}return bi(t,e,n)}var Vv,od,Wv,jv;Vv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};od=function(){};Wv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(ai.current);var s=null;switch(n){case"input":r=Ru(t,r),i=Ru(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=Nu(t,r),i=Nu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}Uu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ma.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ma.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};jv=function(t,e,n,i){n!==i&&(e.flags|=4)};function na(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Ey(t,e,n){var i=e.pendingProps;switch(Qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return fn(e.type)&&fl(),qt(e),null;case 3:return i=e.stateNode,Ns(),ft(dn),ft(Qt),lf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(uo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(md(Xn),Xn=null))),od(t,e),qt(e),null;case 5:of(e);var r=Tr(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)Wv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return qt(e),null}if(t=Tr(ai.current),uo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ri]=e,i[Da]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<fa.length;r++)ut(fa[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":th(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":ih(i,s),ut("invalid",i)}Uu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&co(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&co(i.textContent,o,t),r=["children",""+o]):Ma.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":to(i),nh(i,s,!0);break;case"textarea":to(i),rh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ri]=e,t[Da]=i,Vv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Iu(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<fa.length;r++)ut(fa[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":th(t,i),r=Ru(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":ih(t,i),r=Nu(t,i),ut("invalid",t);break;default:r=i}Uu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Eg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ma.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&Od(t,s,l,a))}switch(n){case"input":to(t),nh(t,i,!1);break;case"textarea":to(t),rh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?_s(t,!!i.multiple,s,!1):i.defaultValue!=null&&_s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)jv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Tr(Ia.current),Tr(ai.current),uo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ri]=e,(s=i.nodeValue!==n)&&(t=wn,t!==null))switch(t.tag){case 3:co(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&co(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ri]=e,e.stateNode=i}return qt(e),null;case 13:if(ft(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&En!==null&&e.mode&1&&!(e.flags&128))cv(),Ps(),e.flags|=98560,s=!1;else if(s=uo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[ri]=e}else Ps(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Xn!==null&&(md(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Nt===0&&(Nt=3):yf())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Ns(),od(t,e),t===null&&La(e.stateNode.containerInfo),qt(e),null;case 10:return nf(e.type._context),qt(e),null;case 17:return fn(e.type)&&fl(),qt(e),null;case 19:if(ft(vt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)na(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=xl(t),a!==null){for(e.flags|=128,na(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Us&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304)}else{if(!i)if(t=xl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),na(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!pt)return qt(e),null}else 2*Tt()-s.renderingStartTime>Us&&n!==1073741824&&(e.flags|=128,i=!0,na(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=vt.current,lt(vt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return xf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function My(t,e){switch(Qd(e),e.tag){case 1:return fn(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),ft(dn),ft(Qt),lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return of(e),null;case 13:if(ft(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Ps()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(vt),null;case 4:return Ns(),null;case 10:return nf(e.type._context),null;case 22:case 23:return xf(),null;case 24:return null;default:return null}}var po=!1,Zt=!1,wy=typeof WeakSet=="function"?WeakSet:Set,we=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function ld(t,e,n){try{n()}catch(i){St(t,e,i)}}var $h=!1;function Ty(t,e){if(ju=ll,t=Kg(),Kd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(o=a+r),d!==s||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(o=a),h===s&&++f===i&&(l=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xu={focusedElem:t,selectionRange:n},ll=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,g=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Wn(e.type,x),g);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(M){St(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return _=$h,$h=!1,_}function xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ld(e,n,s)}r=r.next}while(r!==i)}}function Xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Xv(t){var e=t.alternate;e!==null&&(t.alternate=null,Xv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ri],delete e[Da],delete e[Yu],delete e[oy],delete e[ly])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $v(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function dd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}var Gt=null,jn=!1;function Pi(t,e,n){for(n=n.child;n!==null;)qv(t,e,n),n=n.sibling}function qv(t,e,n){if(si&&typeof si.onCommitFiberUnmount=="function")try{si.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:Zt||ps(n,e);case 6:var i=Gt,r=jn;Gt=null,Pi(t,e,n),Gt=i,jn=r,Gt!==null&&(jn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(jn?(t=Gt,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),Ca(t)):Rc(Gt,n.stateNode));break;case 4:i=Gt,r=jn,Gt=n.stateNode.containerInfo,jn=!0,Pi(t,e,n),Gt=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ld(n,e,a),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Zt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){St(n,e,o)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,Pi(t,e,n),Zt=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function Yh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new wy),e.forEach(function(i){var r=Uy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,jn=!1;break e;case 3:Gt=o.stateNode.containerInfo,jn=!0;break e;case 4:Gt=o.stateNode.containerInfo,jn=!0;break e}o=o.return}if(Gt===null)throw Error(le(160));qv(s,a,r),Gt=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Yv(e,t),e=e.sibling}function Yv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ti(t),i&4){try{xa(3,t,t.return),Xl(3,t)}catch(x){St(t,t.return,x)}try{xa(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:zn(e,t),ti(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(zn(e,t),ti(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{wa(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&vg(r,s),Iu(o,a);var c=Iu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],d=l[a+1];f==="style"?Eg(r,d):f==="dangerouslySetInnerHTML"?yg(r,d):f==="children"?wa(r,d):Od(r,f,d,c)}switch(o){case"input":Pu(r,s);break;case"textarea":_g(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?_s(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?_s(r,!!s.multiple,s.defaultValue,!0):_s(r,!!s.multiple,s.multiple?[]:"",!1))}r[Da]=s}catch(x){St(t,t.return,x)}}break;case 6:if(zn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){St(t,t.return,x)}}break;case 3:if(zn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:zn(e,t),ti(t);break;case 13:zn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(vf=Tt())),i&4&&Yh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(c=Zt)||f,zn(e,t),Zt=c):zn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(we=t,f=t.child;f!==null;){for(d=we=f;we!==null;){switch(h=we,p=h.child,h.tag){case 0:case 11:case 14:case 15:xa(4,h,h.return);break;case 1:ps(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:ps(h,h.return);break;case 22:if(h.memoizedState!==null){Zh(d);continue}}p!==null?(p.return=h,we=p):Zh(d)}f=f.sibling}e:for(f=null,d=t;;){if(d.tag===5){if(f===null){f=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Sg("display",a))}catch(x){St(t,t.return,x)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){St(t,t.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:zn(e,t),ti(t),i&4&&Yh(t);break;case 21:break;default:zn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($v(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=qh(t);dd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=qh(t);ud(t,o,a);break;default:throw Error(le(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function by(t,e,n){we=t,Kv(t)}function Kv(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||po;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Zt;o=po;var c=Zt;if(po=a,(Zt=l)&&!c)for(we=r;we!==null;)a=we,l=a.child,a.tag===22&&a.memoizedState!==null?Qh(r):l!==null?(l.return=a,we=l):Qh(r);for(;s!==null;)we=s,Kv(s),s=s.sibling;we=r,po=o,Zt=c}Kh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):Kh(t)}}function Kh(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||Xl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Wn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&Ca(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Zt||e.flags&512&&cd(e)}catch(h){St(e,e.return,h)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function Zh(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function Qh(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xl(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{cd(e)}catch(l){St(e,s,l)}break;case 5:var a=e.return;try{cd(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===t){we=null;break}var o=e.sibling;if(o!==null){o.return=e.return,we=o;break}we=e.return}}var Ay=Math.ceil,El=Ci.ReactCurrentDispatcher,mf=Ci.ReactCurrentOwner,Fn=Ci.ReactCurrentBatchConfig,et=0,Ht=null,Rt=null,Wt=0,yn=0,ms=or(0),Nt=0,Ba=null,Ur=0,$l=0,gf=0,ya=null,cn=null,vf=0,Us=1/0,gi=null,Ml=!1,fd=null,Ki=null,mo=!1,Hi=null,wl=0,Sa=0,hd=null,Qo=-1,Jo=0;function rn(){return et&6?Tt():Qo!==-1?Qo:Qo=Tt()}function Zi(t){return t.mode&1?et&2&&Wt!==0?Wt&-Wt:uy.transition!==null?(Jo===0&&(Jo=Ug()),Jo):(t=rt,t!==0||(t=window.event,t=t===void 0?16:Hg(t.type)),t):1}function Zn(t,e,n,i){if(50<Sa)throw Sa=0,hd=null,Error(le(185));Wa(t,n,i),(!(et&2)||t!==Ht)&&(t===Ht&&(!(et&2)&&($l|=n),Nt===4&&Bi(t,Wt)),hn(t,i),n===1&&et===0&&!(e.mode&1)&&(Us=Tt()+500,Vl&&lr()))}function hn(t,e){var n=t.callbackNode;u0(t,e);var i=ol(t,t===Ht?Wt:0);if(i===0)n!==null&&oh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&oh(n),e===1)t.tag===0?cy(Jh.bind(null,t)):av(Jh.bind(null,t)),sy(function(){!(et&6)&&lr()}),n=null;else{switch(Ig(i)){case 1:n=Gd;break;case 4:n=Ng;break;case 16:n=al;break;case 536870912:n=Dg;break;default:n=al}n=r_(n,Zv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Zv(t,e){if(Qo=-1,Jo=0,et&6)throw Error(le(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=ol(t,t===Ht?Wt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tl(t,i);else{e=i;var r=et;et|=2;var s=Jv();(Ht!==t||Wt!==e)&&(gi=null,Us=Tt()+500,br(t,e));do try{Py();break}catch(o){Qv(t,o)}while(!0);tf(),El.current=s,et=r,Rt!==null?e=0:(Ht=null,Wt=0,e=Nt)}if(e!==0){if(e===2&&(r=zu(t),r!==0&&(i=r,e=pd(t,r))),e===1)throw n=Ba,br(t,0),Bi(t,i),hn(t,Tt()),n;if(e===6)Bi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Cy(r)&&(e=Tl(t,i),e===2&&(s=zu(t),s!==0&&(i=s,e=pd(t,s))),e===1))throw n=Ba,br(t,0),Bi(t,i),hn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:_r(t,cn,gi);break;case 3:if(Bi(t,i),(i&130023424)===i&&(e=vf+500-Tt(),10<e)){if(ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){rn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=qu(_r.bind(null,t,cn,gi),e);break}_r(t,cn,gi);break;case 4:if(Bi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Kn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Ay(i/1960))-i,10<i){t.timeoutHandle=qu(_r.bind(null,t,cn,gi),i);break}_r(t,cn,gi);break;case 5:_r(t,cn,gi);break;default:throw Error(le(329))}}}return hn(t,Tt()),t.callbackNode===n?Zv.bind(null,t):null}function pd(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=cn,cn=n,e!==null&&md(e)),t}function md(t){cn===null?cn=t:cn.push.apply(cn,t)}function Cy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Jn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Bi(t,e){for(e&=~gf,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kn(e),i=1<<n;t[n]=-1,e&=~i}}function Jh(t){if(et&6)throw Error(le(327));Ms();var e=ol(t,0);if(!(e&1))return hn(t,Tt()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var i=zu(t);i!==0&&(e=i,n=pd(t,i))}if(n===1)throw n=Ba,br(t,0),Bi(t,e),hn(t,Tt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,cn,gi),hn(t,Tt()),null}function _f(t,e){var n=et;et|=1;try{return t(e)}finally{et=n,et===0&&(Us=Tt()+500,Vl&&lr())}}function Ir(t){Hi!==null&&Hi.tag===0&&!(et&6)&&Ms();var e=et;et|=1;var n=Fn.transition,i=rt;try{if(Fn.transition=null,rt=1,t)return t()}finally{rt=i,Fn.transition=n,et=e,!(et&6)&&lr()}}function xf(){yn=ms.current,ft(ms)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ry(n)),Rt!==null)for(n=Rt.return;n!==null;){var i=n;switch(Qd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fl();break;case 3:Ns(),ft(dn),ft(Qt),lf();break;case 5:of(i);break;case 4:Ns();break;case 13:ft(vt);break;case 19:ft(vt);break;case 10:nf(i.type._context);break;case 22:case 23:xf()}n=n.return}if(Ht=t,Rt=t=Qi(t.current,null),Wt=yn=e,Nt=0,Ba=null,gf=$l=Ur=0,cn=ya=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}wr=null}return t}function Qv(t,e){do{var n=Rt;try{if(tf(),Yo.current=Sl,yl){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yl=!1}if(Dr=0,Bt=Lt=_t=null,_a=!1,Fa=0,mf.current=null,n===null||n.return===null){Nt=1,Ba=e,Rt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Wt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=zh(a);if(p!==null){p.flags&=-257,Hh(p,a,o,s,e),p.mode&1&&Bh(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){Bh(s,c,e),yf();break e}l=Error(le(426))}}else if(pt&&o.mode&1){var g=zh(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Hh(g,a,o,s,e),Jd(Ds(l,o));break e}}s=l=Ds(l,o),Nt!==4&&(Nt=2),ya===null?ya=[s]:ya.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Iv(s,l,e);Dh(s,u);break e;case 1:o=l;var v=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ki===null||!Ki.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Fv(s,o,e);Dh(s,M);break e}}s=s.return}while(s!==null)}t_(n)}catch(R){e=R,Rt===n&&n!==null&&(Rt=n=n.return);continue}break}while(!0)}function Jv(){var t=El.current;return El.current=Sl,t===null?Sl:t}function yf(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Ht===null||!(Ur&268435455)&&!($l&268435455)||Bi(Ht,Wt)}function Tl(t,e){var n=et;et|=2;var i=Jv();(Ht!==t||Wt!==e)&&(gi=null,br(t,e));do try{Ry();break}catch(r){Qv(t,r)}while(!0);if(tf(),et=n,El.current=i,Rt!==null)throw Error(le(261));return Ht=null,Wt=0,Nt}function Ry(){for(;Rt!==null;)e_(Rt)}function Py(){for(;Rt!==null&&!t0();)e_(Rt)}function e_(t){var e=i_(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?t_(t):Rt=e,mf.current=null}function t_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=My(n,e),n!==null){n.flags&=32767,Rt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Rt=null;return}}else if(n=Ey(n,e,yn),n!==null){Rt=n;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=t}while(e!==null);Nt===0&&(Nt=5)}function _r(t,e,n){var i=rt,r=Fn.transition;try{Fn.transition=null,rt=1,Ly(t,e,n,i)}finally{Fn.transition=r,rt=i}return null}function Ly(t,e,n,i){do Ms();while(Hi!==null);if(et&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(d0(t,s),t===Ht&&(Rt=Ht=null,Wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||mo||(mo=!0,r_(al,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var a=rt;rt=1;var o=et;et|=4,mf.current=null,Ty(t,n),Yv(n,t),Z0(Xu),ll=!!ju,Xu=ju=null,t.current=n,by(n),n0(),et=o,rt=a,Fn.transition=s}else t.current=n;if(mo&&(mo=!1,Hi=t,wl=r),s=t.pendingLanes,s===0&&(Ki=null),s0(n.stateNode),hn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ml)throw Ml=!1,t=fd,fd=null,t;return wl&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===hd?Sa++:(Sa=0,hd=t):Sa=0,lr(),null}function Ms(){if(Hi!==null){var t=Ig(wl),e=Fn.transition,n=rt;try{if(Fn.transition=null,rt=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,wl=0,et&6)throw Error(le(331));var r=et;for(et|=4,we=t.current;we!==null;){var s=we,a=s.child;if(we.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(we=c;we!==null;){var f=we;switch(f.tag){case 0:case 11:case 15:xa(8,f,s)}var d=f.child;if(d!==null)d.return=f,we=d;else for(;we!==null;){f=we;var h=f.sibling,p=f.return;if(Xv(f),f===c){we=null;break}if(h!==null){h.return=p,we=h;break}we=p}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var g=x.sibling;x.sibling=null,x=g}while(x!==null)}}we=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,we=a;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,we=u;break e}we=s.return}}var v=t.current;for(we=v;we!==null;){a=we;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,we=m;else e:for(a=v;we!==null;){if(o=we,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Xl(9,o)}}catch(R){St(o,o.return,R)}if(o===a){we=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,we=M;break e}we=o.return}}if(et=r,lr(),si&&typeof si.onPostCommitFiberRoot=="function")try{si.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{rt=n,Fn.transition=e}}return!1}function ep(t,e,n){e=Ds(n,e),e=Iv(t,e,1),t=Yi(t,e,1),e=rn(),t!==null&&(Wa(t,1,e),hn(t,e))}function St(t,e,n){if(t.tag===3)ep(t,t,n);else for(;e!==null;){if(e.tag===3){ep(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Ds(n,t),t=Fv(e,t,1),e=Yi(e,t,1),t=rn(),e!==null&&(Wa(e,1,t),hn(e,t));break}}e=e.return}}function Ny(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=rn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(Wt&n)===n&&(Nt===4||Nt===3&&(Wt&130023424)===Wt&&500>Tt()-vf?br(t,0):gf|=n),hn(t,e)}function n_(t,e){e===0&&(t.mode&1?(e=ro,ro<<=1,!(ro&130023424)&&(ro=4194304)):e=1);var n=rn();t=Ti(t,e),t!==null&&(Wa(t,e,n),hn(t,n))}function Dy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n_(t,n)}function Uy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),n_(t,n)}var i_;i_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Sy(t,e,n);un=!!(t.flags&131072)}else un=!1,pt&&e.flags&1048576&&ov(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Zo(t,e),t=e.pendingProps;var r=Rs(e,Qt.current);Es(e,n),r=uf(null,e,i,t,r,n);var s=df();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,sf(e),r.updater=jl,e.stateNode=r,r._reactInternals=e,td(e,i,t,n),e=rd(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Zd(e),en(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Zo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fy(i),t=Wn(i,t),r){case 0:e=id(null,e,i,t,n);break e;case 1:e=Wh(null,e,i,t,n);break e;case 11:e=Gh(null,e,i,t,n);break e;case 14:e=Vh(null,e,i,Wn(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),id(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Wh(t,e,i,r,n);case 3:e:{if(zv(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,hv(t,e),_l(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ds(Error(le(423)),e),e=jh(t,e,i,n,r);break e}else if(i!==r){r=Ds(Error(le(424)),e),e=jh(t,e,i,n,r);break e}else for(En=qi(e.stateNode.containerInfo.firstChild),wn=e,pt=!0,Xn=null,n=dv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ps(),i===r){e=bi(t,e,n);break e}en(t,e,i,n)}e=e.child}return e;case 5:return pv(e),t===null&&Qu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,$u(i,r)?a=null:s!==null&&$u(i,s)&&(e.flags|=32),Bv(t,e),en(t,e,a,n),e.child;case 6:return t===null&&Qu(e),null;case 13:return Hv(t,e,n);case 4:return af(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ls(e,null,i,n):en(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Gh(t,e,i,r,n);case 7:return en(t,e,e.pendingProps,n),e.child;case 8:return en(t,e,e.pendingProps.children,n),e.child;case 12:return en(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,lt(gl,i._currentValue),i._currentValue=a,s!==null)if(Jn(s.value,a)){if(s.children===r.children&&!dn.current){e=bi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ju(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(le(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Ju(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}en(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,n),r=kn(r),i=i(r),e.flags|=1,en(t,e,i,n),e.child;case 14:return i=e.type,r=Wn(i,e.pendingProps),r=Wn(i.type,r),Vh(t,e,i,r,n);case 15:return Ov(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Wn(i,r),Zo(t,e),e.tag=1,fn(i)?(t=!0,hl(e)):t=!1,Es(e,n),Uv(e,i,r),td(e,i,r,n),rd(null,e,i,!0,t,n);case 19:return Gv(t,e,n);case 22:return kv(t,e,n)}throw Error(le(156,e.tag))};function r_(t,e){return Lg(t,e)}function Iy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(t,e,n,i){return new Iy(t,e,n,i)}function Sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fy(t){if(typeof t=="function")return Sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bd)return 11;if(t===zd)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=In(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function el(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Sf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ss:return Ar(n.children,r,s,e);case kd:a=8,r|=8;break;case Tu:return t=In(12,n,e,r|2),t.elementType=Tu,t.lanes=s,t;case bu:return t=In(13,n,e,r),t.elementType=bu,t.lanes=s,t;case Au:return t=In(19,n,e,r),t.elementType=Au,t.lanes=s,t;case pg:return ql(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case fg:a=10;break e;case hg:a=9;break e;case Bd:a=11;break e;case zd:a=14;break e;case Fi:a=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=In(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ar(t,e,n,i){return t=In(7,t,i,e),t.lanes=n,t}function ql(t,e,n,i){return t=In(22,t,i,e),t.elementType=pg,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=In(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=In(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Oy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Ef(t,e,n,i,r,s,a,o,l){return t=new Oy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=In(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sf(s),t}function ky(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function s_(t){if(!t)return ir;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(fn(n))return sv(t,n,e)}return e}function a_(t,e,n,i,r,s,a,o,l){return t=Ef(n,i,!0,t,r,s,a,o,l),t.context=s_(null),n=t.current,i=rn(),r=Zi(n),s=Ei(i,r),s.callback=e??null,Yi(n,s,r),t.current.lanes=r,Wa(t,r,i),hn(t,i),t}function Yl(t,e,n,i){var r=e.current,s=rn(),a=Zi(r);return n=s_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Yi(r,e,a),t!==null&&(Zn(t,r,a,s),qo(t,r,a)),a}function bl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mf(t,e){tp(t,e),(t=t.alternate)&&tp(t,e)}function By(){return null}var o_=typeof reportError=="function"?reportError:function(t){console.error(t)};function wf(t){this._internalRoot=t}Kl.prototype.render=wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));Yl(t,e,null,null)};Kl.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){Yl(null,t,null,null)}),e[wi]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var e=kg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&zg(t)}};function Tf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function np(){}function zy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=bl(a);s.call(c)}}var a=a_(e,i,t,0,null,!1,!1,"",np);return t._reactRootContainer=a,t[wi]=a.current,La(t.nodeType===8?t.parentNode:t),Ir(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=bl(l);o.call(c)}}var l=Ef(t,0,!1,null,null,!1,!1,"",np);return t._reactRootContainer=l,t[wi]=l.current,La(t.nodeType===8?t.parentNode:t),Ir(function(){Yl(e,l,n,i)}),l}function Ql(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=bl(a);o.call(l)}}Yl(e,a,t,r)}else a=zy(n,e,t,r,i);return bl(a)}Fg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=da(e.pendingLanes);n!==0&&(Vd(e,n|1),hn(e,Tt()),!(et&6)&&(Us=Tt()+500,lr()))}break;case 13:Ir(function(){var i=Ti(t,1);if(i!==null){var r=rn();Zn(i,t,1,r)}}),Mf(t,1)}};Wd=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=rn();Zn(e,t,134217728,n)}Mf(t,134217728)}};Og=function(t){if(t.tag===13){var e=Zi(t),n=Ti(t,e);if(n!==null){var i=rn();Zn(n,t,e,i)}Mf(t,e)}};kg=function(){return rt};Bg=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Ou=function(t,e,n){switch(e){case"input":if(Pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Gl(i);if(!r)throw Error(le(90));gg(i),Pu(i,r)}}}break;case"textarea":_g(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};Tg=_f;bg=Ir;var Hy={usingClientEntryPoint:!1,Events:[Xa,cs,Gl,Mg,wg,_f]},ia={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gy={bundleType:ia.bundleType,version:ia.version,rendererPackageName:ia.rendererPackageName,rendererConfig:ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ci.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rg(t),t===null?null:t.stateNode},findFiberByHostInstance:ia.findFiberByHostInstance||By,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{kl=go.inject(Gy),si=go}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tf(e))throw Error(le(200));return ky(t,e,null,n)};bn.createRoot=function(t,e){if(!Tf(t))throw Error(le(299));var n=!1,i="",r=o_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Ef(t,1,!1,null,null,n,!1,i,r),t[wi]=e.current,La(t.nodeType===8?t.parentNode:t),new wf(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=Rg(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Ir(t)};bn.hydrate=function(t,e,n){if(!Zl(e))throw Error(le(200));return Ql(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!Tf(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=o_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=a_(e,null,t,1,n??null,r,!1,s,a),t[wi]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kl(e)};bn.render=function(t,e,n){if(!Zl(e))throw Error(le(200));return Ql(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!Zl(t))throw Error(le(40));return t._reactRootContainer?(Ir(function(){Ql(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1};bn.unstable_batchedUpdates=_f;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Zl(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return Ql(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function l_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l_)}catch(t){console.error(t)}}l_(),lg.exports=bn;var Vy=lg.exports,c_,ip=Vy;c_=ip.createRoot,ip.hydrateRoot;const bf="makersvault_auth_token";function Af(){if(typeof window>"u")return null;try{return window.localStorage}catch{return null}}function Cf(){const t=Af();return t?t.getItem(bf):null}function rp(t){const e=Af();e&&e.setItem(bf,t)}function sp(){const t=Af();t&&t.removeItem(bf)}function Pt(t){const e=new Headers(t||{}),n=Cf();return n&&e.set("Authorization",`Bearer ${n}`),e}function Wy(t){const e=Cf();if(!e)return t;try{const n=new URL(t,typeof window<"u"?window.location.origin:"http://localhost");return n.searchParams.set("token",e),n.toString()}catch{const n=t.includes("?")?"&":"?";return`${t}${n}token=${encodeURIComponent(e)}`}}const Rf=[{id:"orca",label:"OrcaSlicer"},{id:"bambu",label:"Bambu Studio"},{id:"prusa",label:"PrusaSlicer"},{id:"superslicer",label:"SuperSlicer"},{id:"cura",label:"UltiMaker Cura"},{id:"ideamaker",label:"ideaMaker"},{id:"simplify3d",label:"Simplify3D"},{id:"kisslicer",label:"KISSlicer"},{id:"repetier",label:"Repetier-Host"},{id:"chitubox",label:"ChiTuBox"},{id:"lychee",label:"Lychee Slicer"},{id:"photon",label:"Anycubic Photon Workshop"},{id:"creality",label:"Creality Print"},{id:"other",label:"Other / Manual"}],Pf=[{id:"lightburn",label:"LightBurn"},{id:"ezcad",label:"EZCAD"},{id:"other",label:"Other / Manual"}],u_=[{id:"system",label:"System",description:"Match your device preference."},{id:"light",label:"Light",description:"Bright backgrounds, dark text."},{id:"dark",label:"Dark",description:"Dimmed panels for low light."},{id:"neon",label:"Neon Green",description:"Black UI with neon green accents."},{id:"purple",label:"Neon Purple",description:"Black UI with purple glow highlights."},{id:"blue",label:"Neon Blue",description:"Black UI with blue glow highlights."}],d_="makersvault_settings",jy="makersvault_theme",vn={slicer:{enabled:!1,selected:"orca"},engraving:{enabled:!1,selected:"lightburn"},theme:{selected:"system"},makerworld:{cookie:""},thingiverse:{cookie:""},network:{publicUrl:""}};function f_(){if(typeof window>"u")return vn;try{const t=window.localStorage.getItem(d_),e=t?JSON.parse(t)||{}:{},n=e.slicer||{},i=typeof n.selected=="string"?n.selected:vn.slicer.selected,r=typeof n.enabled=="boolean"?n.enabled:vn.slicer.enabled,s=Rf.some(m=>m.id===i),a=e.engraving||{},o=typeof a.selected=="string"?a.selected:vn.engraving.selected,l=typeof a.enabled=="boolean"?a.enabled:vn.engraving.enabled,c=Pf.some(m=>m.id===o),f=e.theme||{};let d=typeof f.selected=="string"?f.selected:vn.theme.selected;const h=u_.some(m=>m.id===d),p=e.makerworld||{},_=typeof p.cookie=="string"?p.cookie:vn.makerworld.cookie,x=e.thingiverse||{},g=typeof x.cookie=="string"?x.cookie:vn.thingiverse.cookie,u=e.network||{},v=typeof u.publicUrl=="string"?u.publicUrl:vn.network.publicUrl;if(!h){const m=window.localStorage.getItem(jy);m==="light"||m==="dark"?d=m:d=vn.theme.selected}return{slicer:{enabled:r,selected:s?i:vn.slicer.selected},engraving:{enabled:l,selected:c?o:vn.engraving.selected},theme:{selected:d},makerworld:{cookie:_},thingiverse:{cookie:g},network:{publicUrl:v}}}catch{return vn}}function Xy(t){if(!(typeof window>"u"))try{window.localStorage.setItem(d_,JSON.stringify(t))}catch{}}function $y(t){if(!t)return"Slicer";const e=Rf.find(n=>n.id===t);return e?e.label:"Slicer"}function qy(t){if(!t)return"Engraving";const e=Pf.find(n=>n.id===t);return e?e.label:"Engraving"}function Yy(t){return t==="system"?typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":t}class Dt extends Error{constructor(e="Unauthorized"){super(e),this.name="UnauthorizedError"}}function on(t,e){if(t.status===401)throw new Dt;if(!t.ok)throw new Error(e)}async function Jl(t,e){let n="";try{n=await t.text()}catch{return e}const i=n.trim();if(!i)return e;try{const r=JSON.parse(i);if(typeof(r==null?void 0:r.detail)=="string"&&r.detail.trim())return r.detail.trim()}catch{}return i}function Ky(t){const e=(t||"").trim();return e?/^https?:\/\//i.test(e)?e.replace(/\/+$/,""):`${typeof window<"u"?window.location.protocol:"http:"}//${e}`.replace(/\/+$/,""):null}function Zy(t){const e=Ky(t);return e?/\/api\/?$/i.test(e)?e.replace(/\/+$/,""):`${e}/api`:null}function Qy(){var t;if(typeof window>"u")return null;try{const e=f_();return Zy(((t=e.network)==null?void 0:t.publicUrl)||"")}catch{return null}}function Jy(t){return t==="localhost"||t==="127.0.0.1"||t==="::1"}function eS(){const t=Qy();if(t)return t;const e=typeof window<"u",n=e?window.location.hostname:"localhost",i=e?window.location.port:"",r=i===""||i==="80"||i==="443",s=Jy(n);return e&&!s&&r&&e?`${window.location.origin}/api`.replace(/\/$/,""):`http://${n}:8000`}function mt(){return eS()}async function ap(t={}){const e=new URLSearchParams;t.q&&e.set("q",t.q),t.tags&&t.tags.length&&e.set("tags",t.tags.join(",")),t.folder_id&&e.set("folder_id",t.folder_id),typeof t.limit=="number"&&e.set("limit",String(t.limit)),typeof t.offset=="number"&&e.set("offset",String(t.offset));const n=await fetch(`${mt()}/assets?${e.toString()}`,{headers:Pt()});on(n,"Failed to list assets");const i=await n.json(),r=(n.headers.get("X-Has-More")||"").toLowerCase()==="true",s=n.headers.get("X-Next-Offset"),a=s?Number(s):void 0;return{items:i,hasMore:r,nextOffset:a}}async function tS(t,e={}){const n=new FormData;n.set("file",t),e.title&&n.set("title",e.title),e.notes&&n.set("notes",e.notes),e.tags&&e.tags.length&&n.set("tags",e.tags.join(",")),e.folder_id&&n.set("folder_id",e.folder_id);const i=await fetch(`${mt()}/upload`,{method:"POST",body:n,headers:Pt()});if(i.status===401)throw new Dt;if(!i.ok){const r=await Jl(i,"Upload failed");throw new Error(r)}return i.json()}async function op(t){const e=await fetch(`${mt()}/import`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify(t)});if(e.status===401)throw new Dt;if(!e.ok){let n="Import failed";try{const i=await e.json();typeof(i==null?void 0:i.detail)=="string"&&(n=i.detail)}catch{}throw new Error(n)}return e.json()}async function nS(t){const e=await fetch(`${mt()}/import/inspect`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify(t)});if(e.status===401)throw new Dt;if(!e.ok){const n=await Jl(e,"Inspect failed");throw new Error(n)}return e.json()}async function iS(t){const e=await fetch(`${mt()}/import/zip/entries`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify(t)});if(e.status===401)throw new Dt;if(!e.ok){const n=await Jl(e,"Zip listing failed");throw new Error(n)}return e.json()}async function rS(t){const e=await fetch(`${mt()}/import/zip`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify(t)});if(e.status===401)throw new Dt;if(!e.ok){const n=await Jl(e,"Zip import failed");throw new Error(n)}return e.json()}async function sS(t,e){const n=await fetch(`${mt()}/asset/${t}/tags`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify({tags:e})});return on(n,"Tag update failed"),n.json()}async function aS(t,e){const n=await fetch(`${mt()}/asset/${t}/meta`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify(e)});return on(n,"Metadata update failed"),n.json()}async function oS(t){const e=await fetch(`${mt()}/asset/${t}`,{method:"DELETE",headers:Pt()});return on(e,"Delete asset failed"),e.json()}async function lS(t,e){const n=await fetch(`${mt()}/asset/${t}/rename`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify({filename:e})});return on(n,"Rename failed"),n.json()}async function cS(t,e){const n=await fetch(`${mt()}/asset/${t}/folder`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify({folder_id:e})});return on(n,"Folder update failed"),n.json()}function ws(t){return t&&Wy(`${mt()}${t}`)}async function h_(){const t=await fetch(`${mt()}/folders`,{headers:Pt()});return on(t,"Failed to list folders"),t.json()}async function Lf(t,e=[],n){const i=await fetch(`${mt()}/folders`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify({name:t,tags:e,parent_id:n})});return on(i,"Create folder failed"),i.json()}async function uS(t,e,n,i){const r=await fetch(`${mt()}/folder/${t}`,{method:"PATCH",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify({name:e,tags:n,parent_id:i})});return on(r,"Update folder failed"),r.json()}async function dS(t){const e=await fetch(`${mt()}/folder/${t}`,{method:"DELETE",headers:Pt()});return on(e,"Delete folder failed"),e.json()}async function lp(t){const e=await fetch(`${mt()}/download/zip`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify(t)});return on(e,"Download failed"),e}async function fS(t){const e=await fetch(`${mt()}/folder/${t}/download`,{headers:Pt()});return on(e,"Folder download failed"),e}async function hS(){try{const t=await fetch(`${mt()}/health`,{cache:"no-store"});if(!t.ok)return null;const e=await t.json();return{ok:!!(e!=null&&e.ok),auth_required:!!(e!=null&&e.auth_required)}}catch{return null}}function pS(){return mt()}async function mS(t,e){const n=await fetch(`${mt()}/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:t,password:e})});if(!n.ok){let i="Login failed";try{const r=await n.json();typeof(r==null?void 0:r.detail)=="string"&&(i=r.detail)}catch{}throw new Error(i)}return n.json()}async function gS(){const t=await fetch(`${mt()}/refresh`,{method:"POST",headers:Pt()});return on(t,"Token refresh failed"),t.json()}async function vS(){const t=await fetch(`${mt()}/settings/mount-import`,{headers:Pt()});return on(t,"Failed to load mount import settings"),t.json()}async function _S(t){const e=await fetch(`${mt()}/settings/mount-import`,{method:"POST",headers:Pt({"Content-Type":"application/json"}),body:JSON.stringify(t)});return on(e,"Failed to update mount import settings"),e.json()}function ec(t){return(t||"").replace(/\\/g,"/").replace(/^\/+/,"")||""}function Al(t){return Array.from(t||[]).map(e=>{const i=ec(e.webkitRelativePath||e.name);return{file:e,relativePath:i||e.name}})}async function xS(t){const e=[];for(;;){const n=await new Promise((i,r)=>{t.readEntries(i,r)});if(!n.length)break;e.push(...n)}return e}async function p_(t,e,n){const i=ec(e?`${e}/${t.name}`:t.name);if(t.isFile&&t.file){const r=await new Promise((s,a)=>{var o;return(o=t.file)==null?void 0:o.call(t,s,a)});n.push({file:r,relativePath:i||r.name});return}if(t.isDirectory&&t.createReader){const r=t.createReader(),s=await xS(r);await Promise.all(s.map(a=>p_(a,i,n)))}}async function gd(t){const e=[],n=Array.from(t.items||[]),i=n.map(r=>{var s;return(s=r.webkitGetAsEntry)==null?void 0:s.call(r)}).filter(Boolean);if(i.length)return await Promise.all(i.map(r=>p_(r,"",e))),e;for(const r of n){if(r.kind!=="file")continue;const s=r.getAsFile();if(!s)continue;const o=ec(s.webkitRelativePath||s.name);e.push({file:s,relativePath:o||s.name})}return e.length?e:Al(t.files||[])}async function oi(t,e,n){const i=[];let r=0,s=!1;const a=[],o=new Map,l=e||"root",c=async(f,d,h)=>{const p=`${d}/${h}`,_=o.get(p);if(_)return _;const g=(await Lf(h,[],f||void 0)).id;return o.set(p,g),g};for(const f of t){const h=ec(f.relativePath||f.file.name).split("/").filter(Boolean);if(!h.length)continue;h.pop();let p=e,_=l;for(const x of h)try{p=await c(p,_,x),_=`${_}/${x}`}catch(g){if(g instanceof Dt){n==null||n(),s=!0;break}console.error("Folder creation failed for",x,g),i.push(f.file.name),p=null;break}if(s)break;if(!(p===null&&h.length))try{await tS(f.file,{folder_id:p||void 0}),r+=1,a.push(f)}catch(x){if(x instanceof Dt){n==null||n(),s=!0;break}console.error("Upload failed for",f.file.name,x);const g=x instanceof Error?x.message.trim():"";i.push(g&&g!=="Upload failed"?`${f.file.name} (${g})`:f.file.name)}}return{uploaded:r,failed:i,uploadedEntries:a}}const yS="modulepreload",SS=function(t){return"/"+t},cp={},rr=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=SS(l),l in cp)return;cp[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":yS,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((h,p)=>{d.addEventListener("load",h),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},ES={".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".bmp":"image/bmp",".svg":"image/svg+xml",".stl":"model/stl",".3mf":"model/3mf",".step":"model/step",".stp":"model/step",".obj":"model/obj"};function m_(t){return(t||"").replace(/\\/g,"/").replace(/^\/+/,"").replace(/\/+$/,"")}function g_(t){const e=(t||"").replace(/\\/g,"/").replace(/^\/+/,"");if(!e||e.endsWith("/"))return null;const n=m_(e);if(!n)return null;const i=n.split("/").filter(Boolean);return!i.length||i.some(r=>r==="..")?null:i.join("/")}function MS(t){const e=(t||"").toLowerCase(),n=e.lastIndexOf(".");if(n===-1)return"";const i=e.slice(n);return ES[i]||""}function Is(t){return(t||"").toLowerCase().endsWith(".zip")}async function Fs(t){const{unzipSync:e}=await rr(async()=>{const{unzipSync:a}=await import("./fflate.module-DxdqVi2p.js");return{unzipSync:a}},[]),n=new Uint8Array(await t.arrayBuffer()),i=e(n),r={};for(const[a,o]of Object.entries(i)){const l=g_(a);l&&(r[l]=o)}return{entries:Object.keys(r).sort((a,o)=>a.localeCompare(o)).map(a=>({path:a,size:r[a].length})),data:r}}function Nf(t,e,n=""){const i=[],r=m_(n),s=new Set;for(const a of e){const o=g_(a);if(!o||s.has(o))continue;s.add(o);const l=t[o];if(!l)continue;const c=o.split("/"),f=c[c.length-1],d=MS(f),h=new File([l],f,d?{type:d}:void 0),p=r?`${r}/${o}`:o;i.push({file:h,relativePath:p})}return i}function Bc(t,e){return t instanceof Error&&t.message.trim()?t.message:e}function wS(t){if(!t&&t!==0)return"";const e=["B","KB","MB","GB"];let n=t,i=0;for(;n>=1024&&i<e.length-1;)n/=1024,i++;return`${n.toFixed(i===0?0:1)} ${e[i]}`}function Df(){const[t,e]=ue.useState(null),[n,i]=ue.useState("choice"),[r,s]=ue.useState([]),[a,o]=ue.useState(new Set),[l,c]=ue.useState(!1),[f,d]=ue.useState(null),h=ue.useRef(null),p=()=>{i("choice"),s([]),o(new Set),c(!1),d(null)},_=()=>{e(null),p(),h.current&&(h.current(),h.current=null)},x=S=>t?Promise.resolve():(p(),e({config:S}),new Promise(T=>{h.current=T})),g=async()=>{if(t){c(!0),d(null);try{const S=await t.config.loadEntries();s(S),o(new Set(S.map(T=>T.path))),i("select")}catch(S){d(Bc(S,"Unable to read zip contents"))}finally{c(!1)}}},u=async()=>{if(t){c(!0),d(null);try{await t.config.onImportAsZip(),_()}catch(S){d(Bc(S,"Import failed")),c(!1)}}},v=async()=>{if(!t)return;const S=Array.from(a);if(!S.length){d("Select at least one file to import.");return}c(!0),d(null);try{await t.config.onImportSelected(S),_()}catch(T){d(Bc(T,"Import failed")),c(!1)}},m=S=>{o(T=>{const I=new Set(T);return I.has(S)?I.delete(S):I.add(S),I})},M=()=>{o(new Set(r.map(S=>S.path)))},R=()=>{o(new Set)},b=a.size,C=r.length>0&&b===r.length,U=t?y.jsx(TS,{label:t.config.label,stage:n,entries:r,selected:a,selectedCount:b,allSelected:C,busy:l,error:f,onClose:_,onImportAsZip:u,onLoadEntries:g,onImportSelected:v,onToggleEntry:m,onSelectAll:M,onClearAll:R}):null;return{prompt:x,modal:U,isOpen:!!t}}function TS({label:t,stage:e,entries:n,selected:i,selectedCount:r,allSelected:s,busy:a,error:o,onClose:l,onImportAsZip:c,onLoadEntries:f,onImportSelected:d,onToggleEntry:h,onSelectAll:p,onClearAll:_}){const x=n.length,g=ue.useMemo(()=>e==="choice"?"Import zip":"Choose files",[e]);return y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",children:y.jsxs("div",{className:"bg-panel-strong rounded-lg shadow-2xl max-w-3xl w-full max-h-full overflow-hidden flex flex-col",children:[y.jsxs("div",{className:"flex items-center justify-between border-b border-panel px-4 py-3",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-lg font-semibold",children:g}),y.jsx("p",{className:"text-sm opacity-70",children:t})]}),y.jsx("button",{className:"px-3 py-1 rounded-md border border-panel-strong text-sm disabled:opacity-60",onClick:l,disabled:a,children:"Close"})]}),y.jsxs("div",{className:"p-4 space-y-4 overflow-auto",children:[e==="choice"&&y.jsxs("div",{className:"space-y-4",children:[y.jsx("p",{className:"text-sm opacity-80",children:"How would you like to handle this zip file?"}),y.jsxs("div",{className:"flex flex-wrap gap-3",children:[y.jsx("button",{className:"px-4 py-2 rounded-md bg-accent disabled:opacity-60",onClick:c,disabled:a,children:"Import as zip"}),y.jsx("button",{className:"px-4 py-2 rounded-md border border-panel-strong disabled:opacity-60",onClick:f,disabled:a,children:"Import and unzip"})]})]}),e==="select"&&y.jsxs("div",{className:"space-y-3",children:[y.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 text-sm",children:[y.jsxs("div",{className:"opacity-70",children:[r," of ",x," selected"]}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx("button",{className:"px-2 py-1 rounded-md border border-panel-strong text-sm disabled:opacity-60",onClick:p,disabled:a||s,children:"Select all"}),y.jsx("button",{className:"px-2 py-1 rounded-md border border-panel-strong text-sm disabled:opacity-60",onClick:_,disabled:a||r===0,children:"Clear"})]})]}),y.jsxs("div",{className:"border border-panel-strong rounded-md max-h-[360px] overflow-auto",children:[n.map(u=>y.jsxs("label",{className:"flex items-center gap-3 px-3 py-2 border-b border-panel-strong last:border-b-0 text-sm",children:[y.jsx("input",{type:"checkbox",checked:i.has(u.path),onChange:()=>h(u.path),disabled:a,className:"w-4 h-4"}),y.jsx("span",{className:"flex-1 truncate",children:u.path}),y.jsx("span",{className:"text-xs opacity-70",children:wS(u.size)})]},u.path)),x===0&&y.jsx("div",{className:"px-3 py-4 text-sm opacity-60",children:"No files found in this zip."})]}),y.jsxs("div",{className:"flex flex-wrap gap-3",children:[y.jsx("button",{className:"px-4 py-2 rounded-md bg-accent disabled:opacity-60",onClick:d,disabled:a||r===0,children:"Import selected"}),y.jsx("button",{className:"px-4 py-2 rounded-md border border-panel-strong disabled:opacity-60",onClick:l,disabled:a,children:"Cancel"})]})]}),o&&y.jsx("div",{className:"text-sm text-red-600 border border-red-300 rounded-md px-3 py-2",children:o})]})]})})}function bS({onUploaded:t,folderId:e,makerworldCookie:n,thingiverseCookie:i,onUnauthorized:r}){const s=ue.useRef(null),a=ue.useRef(null),[o,l]=ue.useState(!1),[c,f]=ue.useState(!1),[d,h]=ue.useState(""),p=Df(),_=o||c||p.isOpen;ue.useEffect(()=>{a.current&&(a.current.setAttribute("webkitdirectory",""),a.current.setAttribute("directory",""))},[]);const x=async m=>{if(!m.length)return;l(!0);const M=m.filter(S=>!Is(S.file.name)),R=m.filter(S=>Is(S.file.name));let b=0;const C=[],U=S=>{b+=S.uploaded,C.push(...S.failed)};if(M.length){const S=await oi(M,e||null,r);U(S)}for(const S of R){let T=null;const I=S.relativePath.split("/").filter(Boolean);I.pop();const q=I.join("/");await p.prompt({label:S.file.name,onImportAsZip:async()=>{const se=await oi([S],e||null,r);U(se)},loadEntries:async()=>{const se=await Fs(S.file);return T=se.data,se.entries},onImportSelected:async se=>{T||(T=(await Fs(S.file)).data);const N=Nf(T||{},se,q),B=await oi(N,e||null,r);U(B)}})}b&&t(),C.length&&alert(`Failed to upload: ${C.join(", ")}`),l(!1)},g=async m=>{const M=Al(m.target.files||[]);M.length&&(await x(M),s.current&&(s.current.value=""))},u=async m=>{const M=Al(m.target.files||[]);M.length&&(await x(M),a.current&&(a.current.value=""))},v=async()=>{const m=d.trim();if(m){f(!0);try{const M=(n||"").trim(),R=(i||"").trim(),b={url:m,folder_id:e||void 0,makerworld_cookie:M||void 0,thingiverse_cookie:R||void 0},C=await nS(b);if(!C.is_zip){await op(b),h(""),t();return}f(!1),await p.prompt({label:C.filename,onImportAsZip:async()=>{try{await op(b)}catch(U){if(U instanceof Dt){r==null||r();return}throw U}h(""),t()},loadEntries:async()=>{try{return(await iS(b)).entries}catch(U){throw U instanceof Dt&&(r==null||r()),U}},onImportSelected:async U=>{try{const S=await rS({...b,entries:U});S.failed.length&&alert(`Failed to import: ${S.failed.join(", ")}`)}catch(S){if(S instanceof Dt){r==null||r();return}throw S}h(""),t()}})}catch(M){if(M instanceof Dt){r==null||r();return}console.error("Import failed for",m,M);const R=M instanceof Error?M.message:"Import failed";alert(R)}finally{f(!1)}}};return y.jsxs(y.Fragment,{children:[y.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[y.jsx("input",{ref:s,type:"file",onChange:g,multiple:!0,accept:".png,.jpg,.jpeg,.webp,.bmp,.gif,.svg,.stl,.step,.stp,.3mf,.lbrn,.lbrn2,.zip",className:"hidden"}),y.jsx("input",{ref:a,type:"file",onChange:u,multiple:!0,className:"hidden"}),y.jsx("button",{className:"px-3 py-2 rounded-md bg-accent hover:bg-accent-strong disabled:opacity-60",disabled:_,onClick:()=>{var m;return(m=s.current)==null?void 0:m.click()},children:o?"Uploading...":"Upload"}),y.jsx("button",{className:"px-3 py-2 rounded-md border border-panel-strong disabled:opacity-60",disabled:_,onClick:()=>{var m;return(m=a.current)==null?void 0:m.click()},children:o?"Uploading...":"Upload folder"}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("input",{type:"url",value:d,onChange:m=>h(m.target.value),onKeyDown:m=>{m.key==="Enter"&&(m.preventDefault(),v())},placeholder:"Paste model link (MakerWorld, Printables, Thingiverse...)",className:"px-3 py-2 rounded-md border border-panel-strong bg-panel-soft w-80",disabled:_}),y.jsx("button",{className:"px-3 py-2 rounded-md border border-panel-strong disabled:opacity-60",disabled:_||!d.trim(),onClick:v,children:c?"Importing...":"Import link"})]})]}),p.modal]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="160",JA={ROTATE:0,DOLLY:1,PAN:2},eC={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},AS=0,up=1,CS=2,v_=1,RS=2,mi=3,sr=0,pn=1,_i=2,Ji=0,Ts=1,dp=2,fp=3,hp=4,PS=5,Sr=100,LS=101,NS=102,pp=103,mp=104,DS=200,US=201,IS=202,FS=203,vd=204,_d=205,OS=206,kS=207,BS=208,zS=209,HS=210,GS=211,VS=212,WS=213,jS=214,XS=0,$S=1,qS=2,Cl=3,YS=4,KS=5,ZS=6,QS=7,If=0,JS=1,eE=2,er=0,tE=1,nE=2,iE=3,rE=4,sE=5,aE=6,__=300,Os=301,ks=302,xd=303,yd=304,tc=306,Sd=1e3,qn=1001,Ed=1002,tn=1003,gp=1004,zc=1005,Dn=1006,oE=1007,za=1008,tr=1009,lE=1010,cE=1011,Ff=1012,x_=1013,Gi=1014,Vi=1015,Ha=1016,y_=1017,S_=1018,Cr=1020,uE=1021,Yn=1023,dE=1024,fE=1025,Rr=1026,Bs=1027,hE=1028,E_=1029,pE=1030,M_=1031,w_=1033,Hc=33776,Gc=33777,Vc=33778,Wc=33779,vp=35840,_p=35841,xp=35842,yp=35843,T_=36196,Sp=37492,Ep=37496,Mp=37808,wp=37809,Tp=37810,bp=37811,Ap=37812,Cp=37813,Rp=37814,Pp=37815,Lp=37816,Np=37817,Dp=37818,Up=37819,Ip=37820,Fp=37821,jc=36492,Op=36494,kp=36495,mE=36283,Bp=36284,zp=36285,Hp=36286,b_=3e3,Pr=3001,gE=3200,vE=3201,Of=0,_E=1,Un="",Vt="srgb",Ai="srgb-linear",kf="display-p3",nc="display-p3-linear",Rl="linear",dt="srgb",Pl="rec709",Ll="p3",Hr=7680,Gp=519,xE=512,yE=513,SE=514,A_=515,EE=516,ME=517,wE=518,TE=519,Vp=35044,Wp="300 es",Md=1035,Si=2e3,Nl=2001;class Xs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tl=Math.PI/180,wd=180/Math.PI;function qa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function nn(t,e,n){return Math.max(e,Math.min(n,t))}function bE(t,e){return(t%e+e)%e}function Xc(t,e,n){return(1-n)*t+n*e}function jp(t){return(t&t-1)===0&&t!==0}function Td(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ra(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ln(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const tC={DEG2RAD:tl};class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,n,i,r,s,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],d=i[7],h=i[2],p=i[5],_=i[8],x=r[0],g=r[3],u=r[6],v=r[1],m=r[4],M=r[7],R=r[2],b=r[5],C=r[8];return s[0]=a*x+o*v+l*R,s[3]=a*g+o*m+l*b,s[6]=a*u+o*M+l*C,s[1]=c*x+f*v+d*R,s[4]=c*g+f*m+d*b,s[7]=c*u+f*M+d*C,s[2]=h*x+p*v+_*R,s[5]=h*g+p*m+_*b,s[8]=h*u+p*M+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=f*a-o*c,h=o*l-f*s,p=c*s-a*l,_=n*d+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(r*c-f*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply($c.makeScale(e,n)),this}rotate(e){return this.premultiply($c.makeRotation(-e)),this}translate(e,n){return this.premultiply($c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $c=new Ke;function C_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ga(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function AE(){const t=Ga("canvas");return t.style.display="block",t}const Xp={};function Ea(t){t in Xp||(Xp[t]=!0,console.warn(t))}const $p=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qp=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),vo={[Ai]:{transfer:Rl,primaries:Pl,toReference:t=>t,fromReference:t=>t},[Vt]:{transfer:dt,primaries:Pl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[nc]:{transfer:Rl,primaries:Ll,toReference:t=>t.applyMatrix3(qp),fromReference:t=>t.applyMatrix3($p)},[kf]:{transfer:dt,primaries:Ll,toReference:t=>t.convertSRGBToLinear().applyMatrix3(qp),fromReference:t=>t.applyMatrix3($p).convertLinearToSRGB()}},CE=new Set([Ai,nc]),ot={enabled:!0,_workingColorSpace:Ai,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!CE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=vo[e].toReference,r=vo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return vo[t].primaries},getTransfer:function(t){return t===Un?Rl:vo[t].transfer}};function bs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class R_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=Ga("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ga("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bs(n[i]/255)*255):n[i]=bs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RE=0;class P_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=qa(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Yc(r[a].image)):s.push(Yc(r[a]))}else s=Yc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?R_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PE=0;class mn extends Xs{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=qn,r=qn,s=Dn,a=za,o=Yn,l=tr,c=mn.DEFAULT_ANISOTROPY,f=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PE++}),this.uuid=qa(),this.name="",this.source=new P_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof f=="string"?this.colorSpace=f:(Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=f===Pr?Vt:Un),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==__)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sd:e.x=e.x-Math.floor(e.x);break;case qn:e.x=e.x<0?0:1;break;case Ed:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sd:e.y=e.y-Math.floor(e.y);break;case qn:e.y=e.y<0?0:1;break;case Ed:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Vt?Pr:b_}set encoding(e){Ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Pr?Vt:Un}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=__;mn.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,n=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],d=l[8],h=l[1],p=l[5],_=l[9],x=l[2],g=l[6],u=l[10];if(Math.abs(f-h)<.01&&Math.abs(d-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,M=(p+1)/2,R=(u+1)/2,b=(f+h)/4,C=(d+x)/4,U=(_+g)/4;return m>M&&m>R?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=b/i,s=C/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=b/r,s=U/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=U/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-_)*(g-_)+(d-x)*(d-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(d-x)/v,this.z=(h-f)/v,this.w=Math.acos((c+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LE extends Xs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new zt(0,0,e,n),this.scissorTest=!1,this.viewport=new zt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Pr?Vt:Un),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new P_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends LE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class L_ extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class NE extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ya{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],d=i[r+3];const h=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(d!==x||l!==h||c!==p||f!==_){let g=1-o;const u=l*h+c*p+f*_+d*x,v=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const R=Math.sqrt(m),b=Math.atan2(R,u*v);g=Math.sin(g*b)/R,o=Math.sin(o*b)/R}const M=o*v;if(l=l*g+h*M,c=c*g+p*M,f=f*g+_*M,d=d*g+x*M,g===1-o){const R=1/Math.sqrt(l*l+c*c+f*f+d*d);l*=R,c*=R,f*=R,d*=R}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],d=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+f*d+l*p-c*h,e[n+1]=l*_+f*h+c*d-o*p,e[n+2]=c*_+f*p+o*h-l*d,e[n+3]=f*_-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),d=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"YXZ":this._x=h*f*d+c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"ZXY":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d-h*p*_;break;case"ZYX":this._x=h*f*d-c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d+h*p*_;break;case"YZX":this._x=h*f*d+c*p*_,this._y=c*p*d+h*f*_,this._z=c*f*_-h*p*d,this._w=c*f*d-h*p*_;break;case"XZY":this._x=h*f*d-c*p*_,this._y=c*p*d-h*f*_,this._z=c*f*_+h*p*d,this._w=c*f*d+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],d=n[10],h=i+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(f-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,o),d=Math.sin((1-n)*f)/c,h=Math.sin(n*f)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*f,this.y=i+l*f+o*c-s*d,this.z=r+l*d+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new V,Yp=new Ya;class cr{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_o.copy(i.boundingBox)),_o.applyMatrix4(e.matrixWorld),this.union(_o)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sa),xo.subVectors(this.max,sa),Vr.subVectors(e.a,sa),Wr.subVectors(e.b,sa),jr.subVectors(e.c,sa),Li.subVectors(Wr,Vr),Ni.subVectors(jr,Wr),hr.subVectors(Vr,jr);let n=[0,-Li.z,Li.y,0,-Ni.z,Ni.y,0,-hr.z,hr.y,Li.z,0,-Li.x,Ni.z,0,-Ni.x,hr.z,0,-hr.x,-Li.y,Li.x,0,-Ni.y,Ni.x,0,-hr.y,hr.x,0];return!Zc(n,Vr,Wr,jr,xo)||(n=[1,0,0,0,1,0,0,0,1],!Zc(n,Vr,Wr,jr,xo))?!1:(yo.crossVectors(Li,Ni),n=[yo.x,yo.y,yo.z],Zc(n,Vr,Wr,jr,xo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new V,new V,new V,new V,new V,new V,new V,new V],Hn=new V,_o=new cr,Vr=new V,Wr=new V,jr=new V,Li=new V,Ni=new V,hr=new V,sa=new V,xo=new V,yo=new V,pr=new V;function Zc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){pr.fromArray(t,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),c=n.dot(pr),f=i.dot(pr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const DE=new cr,aa=new V,Qc=new V;class Ka{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):DE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;aa.subVectors(e,this.center);const n=aa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(aa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(aa.copy(e.center).add(Qc)),this.expandByPoint(aa.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ui=new V,Jc=new V,So=new V,Di=new V,eu=new V,Eo=new V,tu=new V;class Bf{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jc.copy(e).add(n).multiplyScalar(.5),So.copy(n).sub(e).normalize(),Di.copy(this.origin).sub(Jc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(So),o=Di.dot(this.direction),l=-Di.dot(So),c=Di.lengthSq(),f=Math.abs(1-a*a);let d,h,p,_;if(f>0)if(d=a*l-o,h=a*o-l,_=s*f,d>=0)if(h>=-_)if(h<=_){const x=1/f;d*=x,h*=x,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Jc).addScaledVector(So,h),p}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),r=ui.dot(ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,r,s){eu.subVectors(n,e),Eo.subVectors(i,e),tu.crossVectors(eu,Eo);let a=this.direction.dot(tu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);const l=o*this.direction.dot(Eo.crossVectors(Di,Eo));if(l<0)return null;const c=o*this.direction.dot(eu.cross(Di));if(c<0||l+c>a)return null;const f=-o*Di.dot(tu);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,a,o,l,c,f,d,h,p,_,x,g){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,d,h,p,_,x,g)}set(e,n,i,r,s,a,o,l,c,f,d,h,p,_,x,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=d,u[14]=h,u[3]=p,u[7]=_,u[11]=x,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*f,p=a*d,_=o*f,x=o*d;n[0]=l*f,n[4]=-l*d,n[8]=c,n[1]=p+_*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*f,p=l*d,_=c*f,x=c*d;n[0]=h+x*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*d,n[5]=a*f,n[9]=-o,n[2]=p*o-_,n[6]=x+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*f,p=l*d,_=c*f,x=c*d;n[0]=h-x*o,n[4]=-a*d,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*f,n[9]=x-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*f,p=a*d,_=o*f,x=o*d;n[0]=l*f,n[4]=_*c-p,n[8]=h*c+x,n[1]=l*d,n[5]=x*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*f,n[4]=x-h*d,n[8]=_*d+p,n[1]=d,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=p*d+_,n[10]=h-x*d}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*f,n[4]=-d,n[8]=c*f,n[1]=h*d+x,n[5]=a*f,n[9]=p*d-_,n[2]=_*d-p,n[6]=o*f,n[10]=x*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(UE,e,IE)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Ui.crossVectors(i,_n),Ui.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Ui.crossVectors(i,_n)),Ui.normalize(),Mo.crossVectors(_n,Ui),r[0]=Ui.x,r[4]=Mo.x,r[8]=_n.x,r[1]=Ui.y,r[5]=Mo.y,r[9]=_n.y,r[2]=Ui.z,r[6]=Mo.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],d=i[5],h=i[9],p=i[13],_=i[2],x=i[6],g=i[10],u=i[14],v=i[3],m=i[7],M=i[11],R=i[15],b=r[0],C=r[4],U=r[8],S=r[12],T=r[1],I=r[5],q=r[9],se=r[13],N=r[2],B=r[6],Y=r[10],ne=r[14],D=r[3],O=r[7],W=r[11],ee=r[15];return s[0]=a*b+o*T+l*N+c*D,s[4]=a*C+o*I+l*B+c*O,s[8]=a*U+o*q+l*Y+c*W,s[12]=a*S+o*se+l*ne+c*ee,s[1]=f*b+d*T+h*N+p*D,s[5]=f*C+d*I+h*B+p*O,s[9]=f*U+d*q+h*Y+p*W,s[13]=f*S+d*se+h*ne+p*ee,s[2]=_*b+x*T+g*N+u*D,s[6]=_*C+x*I+g*B+u*O,s[10]=_*U+x*q+g*Y+u*W,s[14]=_*S+x*se+g*ne+u*ee,s[3]=v*b+m*T+M*N+R*D,s[7]=v*C+m*I+M*B+R*O,s[11]=v*U+m*q+M*Y+R*W,s[15]=v*S+m*se+M*ne+R*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],d=e[6],h=e[10],p=e[14],_=e[3],x=e[7],g=e[11],u=e[15];return _*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*p-i*l*p)+x*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*f-s*l*f)+g*(+n*c*d-n*o*p-s*a*d+i*a*p+s*o*f-i*c*f)+u*(-r*o*f-n*l*d+n*o*h+r*a*d-i*a*h+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],d=e[9],h=e[10],p=e[11],_=e[12],x=e[13],g=e[14],u=e[15],v=d*g*c-x*h*c+x*l*p-o*g*p-d*l*u+o*h*u,m=_*h*c-f*g*c-_*l*p+a*g*p+f*l*u-a*h*u,M=f*x*c-_*d*c+_*o*p-a*x*p-f*o*u+a*d*u,R=_*d*l-f*x*l-_*o*h+a*x*h+f*o*g-a*d*g,b=n*v+i*m+r*M+s*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=v*C,e[1]=(x*h*s-d*g*s-x*r*p+i*g*p+d*r*u-i*h*u)*C,e[2]=(o*g*s-x*l*s+x*r*c-i*g*c-o*r*u+i*l*u)*C,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*p-i*l*p)*C,e[4]=m*C,e[5]=(f*g*s-_*h*s+_*r*p-n*g*p-f*r*u+n*h*u)*C,e[6]=(_*l*s-a*g*s-_*r*c+n*g*c+a*r*u-n*l*u)*C,e[7]=(a*h*s-f*l*s+f*r*c-n*h*c-a*r*p+n*l*p)*C,e[8]=M*C,e[9]=(_*d*s-f*x*s-_*i*p+n*x*p+f*i*u-n*d*u)*C,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*u+n*o*u)*C,e[11]=(f*o*s-a*d*s-f*i*c+n*d*c+a*i*p-n*o*p)*C,e[12]=R*C,e[13]=(f*x*r-_*d*r+_*i*h-n*x*h-f*i*g+n*d*g)*C,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*g-n*o*g)*C,e[15]=(a*d*r-f*o*r+f*i*l-n*d*l-a*i*h+n*o*h)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,d=o+o,h=s*c,p=s*f,_=s*d,x=a*f,g=a*d,u=o*d,v=l*c,m=l*f,M=l*d,R=i.x,b=i.y,C=i.z;return r[0]=(1-(x+u))*R,r[1]=(p+M)*R,r[2]=(_-m)*R,r[3]=0,r[4]=(p-M)*b,r[5]=(1-(h+u))*b,r[6]=(g+v)*b,r[7]=0,r[8]=(_+m)*C,r[9]=(g-v)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const a=Xr.set(r[4],r[5],r[6]).length(),o=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Gn.copy(this);const c=1/s,f=1/a,d=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=f,Gn.elements[5]*=f,Gn.elements[6]*=f,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,n.setFromRotationMatrix(Gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Si){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(o===Si)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Nl)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Si){const l=this.elements,c=1/(n-e),f=1/(i-r),d=1/(a-s),h=(n+e)*c,p=(i+r)*f;let _,x;if(o===Si)_=(a+s)*d,x=-2*d;else if(o===Nl)_=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new V,Gn=new Et,UE=new V(0,0,0),IE=new V(1,1,1),Ui=new V,Mo=new V,_n=new V,Kp=new Et,Zp=new Ya;class ic{constructor(e=0,n=0,i=0,r=ic.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ic.DEFAULT_ORDER="XYZ";class N_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let FE=0;const Qp=new V,$r=new Ya,di=new Et,wo=new V,oa=new V,OE=new V,kE=new Ya,Jp=new V(1,0,0),em=new V(0,1,0),tm=new V(0,0,1),BE={type:"added"},zE={type:"removed"};class Ut extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new V,n=new ic,i=new Ya,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ke}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(oa,wo,this.up):di.lookAt(wo,oa,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(di),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(BE)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(zE)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,OE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,kE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new V(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vn=new V,fi=new V,nu=new V,hi=new V,qr=new V,Yr=new V,nm=new V,iu=new V,ru=new V,su=new V;let To=!1;class $n{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),fi.subVectors(i,n),nu.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(fi),l=Vn.dot(nu),c=fi.dot(fi),f=fi.dot(nu),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*f)*h,_=(a*f-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getUV(e,n,i,r,s,a,o,l){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),this.getInterpolation(e,n,i,r,s,a,o,l)}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),fi.subVectors(e,n),Vn.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),Vn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),$n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;qr.subVectors(r,i),Yr.subVectors(s,i),iu.subVectors(e,i);const l=qr.dot(iu),c=Yr.dot(iu);if(l<=0&&c<=0)return n.copy(i);ru.subVectors(e,r);const f=qr.dot(ru),d=Yr.dot(ru);if(f>=0&&d<=f)return n.copy(r);const h=l*d-f*c;if(h<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(qr,a);su.subVectors(e,s);const p=qr.dot(su),_=Yr.dot(su);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Yr,o);const g=f*_-p*d;if(g<=0&&d-f>=0&&p-_>=0)return nm.subVectors(s,r),o=(d-f)/(d-f+(p-_)),n.copy(r).addScaledVector(nm,o);const u=1/(g+x+h);return a=x*u,o=h*u,n.copy(i).addScaledVector(qr,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const D_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},bo={h:0,s:0,l:0};function au(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=bE(e,1),n=nn(n,0,1),i=nn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=au(a,s,e+1/3),this.g=au(a,s,e),this.b=au(a,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Vt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vt){const i=D_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}copyLinearToSRGB(e){return this.r=qc(e.r),this.g=qc(e.g),this.b=qc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return ot.fromWorkingColorSpace(Kt.copy(this),e),Math.round(nn(Kt.r*255,0,255))*65536+Math.round(nn(Kt.g*255,0,255))*256+Math.round(nn(Kt.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,s=Kt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=f<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Vt){ot.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==Vt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(bo);const i=Xc(Ii.h,bo.h,n),r=Xc(Ii.s,bo.s,n),s=Xc(Ii.l,bo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Xe;Xe.NAMES=D_;let HE=0;class ur extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=Ts,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vd,this.blendDst=_d,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Cl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==sr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==vd&&(i.blendSrc=this.blendSrc),this.blendDst!==_d&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class U_ extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=If,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new V,Ao=new tt;class On{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ao.fromBufferAttribute(this,n),Ao.applyMatrix3(e),this.setXY(n,Ao.x,Ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ra(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ln(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ra(n,this.array)),n}setX(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ra(n,this.array)),n}setY(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ra(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ra(n,this.array)),n}setW(e,n){return this.normalized&&(n=ln(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ln(n,this.array),i=ln(i,this.array),r=ln(r,this.array),s=ln(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}}class I_ extends On{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class F_ extends On{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qn extends On{constructor(e,n,i){super(new Float32Array(e),n,i)}}let GE=0;const Pn=new Et,ou=new Ut,Kr=new V,xn=new cr,la=new cr,kt=new V;class ei extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?F_:I_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,n,i){return Pn.makeTranslation(e,n,i),this.applyMatrix4(Pn),this}scale(e,n,i){return Pn.makeScale(e,n,i),this.applyMatrix4(Pn),this}lookAt(e){return ou.lookAt(e),ou.updateMatrix(),this.applyMatrix4(ou.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Qn(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];la.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(xn.min,la.min),xn.expandByPoint(kt),kt.addVectors(xn.max,la.max),xn.expandByPoint(kt)):(xn.expandByPoint(la.min),xn.expandByPoint(la.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)kt.fromBufferAttribute(o,c),l&&(Kr.fromBufferAttribute(e,c),kt.add(Kr)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,a=n.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let T=0;T<o;T++)c[T]=new V,f[T]=new V;const d=new V,h=new V,p=new V,_=new tt,x=new tt,g=new tt,u=new V,v=new V;function m(T,I,q){d.fromArray(r,T*3),h.fromArray(r,I*3),p.fromArray(r,q*3),_.fromArray(a,T*2),x.fromArray(a,I*2),g.fromArray(a,q*2),h.sub(d),p.sub(d),x.sub(_),g.sub(_);const se=1/(x.x*g.y-g.x*x.y);isFinite(se)&&(u.copy(h).multiplyScalar(g.y).addScaledVector(p,-x.y).multiplyScalar(se),v.copy(p).multiplyScalar(x.x).addScaledVector(h,-g.x).multiplyScalar(se),c[T].add(u),c[I].add(u),c[q].add(u),f[T].add(v),f[I].add(v),f[q].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let T=0,I=M.length;T<I;++T){const q=M[T],se=q.start,N=q.count;for(let B=se,Y=se+N;B<Y;B+=3)m(i[B+0],i[B+1],i[B+2])}const R=new V,b=new V,C=new V,U=new V;function S(T){C.fromArray(s,T*3),U.copy(C);const I=c[T];R.copy(I),R.sub(C.multiplyScalar(C.dot(I))).normalize(),b.crossVectors(U,I);const se=b.dot(f[T])<0?-1:1;l[T*4]=R.x,l[T*4+1]=R.y,l[T*4+2]=R.z,l[T*4+3]=se}for(let T=0,I=M.length;T<I;++T){const q=M[T],se=q.start,N=q.count;for(let B=se,Y=se+N;B<Y;B+=3)S(i[B+0]),S(i[B+1]),S(i[B+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new On(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new V,s=new V,a=new V,o=new V,l=new V,c=new V,f=new V,d=new V;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),d.subVectors(r,s),f.cross(d),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,d=o.normalized,h=new c.constructor(l.length*f);let p=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*f;for(let u=0;u<f;u++)h[_++]=c[p++]}return new On(h,f,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ei,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,d=c.length;f<d;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],d=s[c];for(let h=0,p=d.length;h<p;h++)f.push(d[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new Et,mr=new Bf,Co=new Ka,rm=new V,Zr=new V,Qr=new V,Jr=new V,lu=new V,Ro=new V,Po=new tt,Lo=new tt,No=new tt,sm=new V,am=new V,om=new V,Do=new V,Uo=new V;class Mn extends Ut{constructor(e=new ei,n=new U_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],d=s[l];f!==0&&(lu.fromBufferAttribute(d,e),a?Ro.addScaledVector(lu,f):Ro.addScaledVector(lu.sub(n),f))}n.add(Ro)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(Co.containsPoint(mr.origin)===!1&&(mr.intersectSphere(Co,rm)===null||mr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(s).invert(),mr.copy(e.ray).applyMatrix4(im),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const g=h[_],u=a[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let M=v,R=m;M<R;M+=3){const b=o.getX(M),C=o.getX(M+1),U=o.getX(M+2);r=Io(this,u,e,i,c,f,d,b,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=_,u=x;g<u;g+=3){const v=o.getX(g),m=o.getX(g+1),M=o.getX(g+2);r=Io(this,a,e,i,c,f,d,v,m,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const g=h[_],u=a[g.materialIndex],v=Math.max(g.start,p.start),m=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let M=v,R=m;M<R;M+=3){const b=M,C=M+1,U=M+2;r=Io(this,u,e,i,c,f,d,b,C,U),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,u=x;g<u;g+=3){const v=g,m=g+1,M=g+2;r=Io(this,a,e,i,c,f,d,v,m,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function VE(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===sr,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Uo);return c<n.near||c>n.far?null:{distance:c,point:Uo.clone(),object:t}}function Io(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Zr),t.getVertexPosition(l,Qr),t.getVertexPosition(c,Jr);const f=VE(t,e,n,i,Zr,Qr,Jr,Do);if(f){r&&(Po.fromBufferAttribute(r,o),Lo.fromBufferAttribute(r,l),No.fromBufferAttribute(r,c),f.uv=$n.getInterpolation(Do,Zr,Qr,Jr,Po,Lo,No,new tt)),s&&(Po.fromBufferAttribute(s,o),Lo.fromBufferAttribute(s,l),No.fromBufferAttribute(s,c),f.uv1=$n.getInterpolation(Do,Zr,Qr,Jr,Po,Lo,No,new tt),f.uv2=f.uv1),a&&(sm.fromBufferAttribute(a,o),am.fromBufferAttribute(a,l),om.fromBufferAttribute(a,c),f.normal=$n.getInterpolation(Do,Zr,Qr,Jr,sm,am,om,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new V,materialIndex:0};$n.getNormal(Zr,Qr,Jr,d.normal),f.face=d}return f}class Za extends ei{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],d=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qn(c,3)),this.setAttribute("normal",new Qn(f,3)),this.setAttribute("uv",new Qn(d,2));function _(x,g,u,v,m,M,R,b,C,U,S){const T=M/C,I=R/U,q=M/2,se=R/2,N=b/2,B=C+1,Y=U+1;let ne=0,D=0;const O=new V;for(let W=0;W<Y;W++){const ee=W*I-se;for(let ae=0;ae<B;ae++){const j=ae*T-q;O[x]=j*v,O[g]=ee*m,O[u]=N,c.push(O.x,O.y,O.z),O[x]=0,O[g]=0,O[u]=b>0?1:-1,f.push(O.x,O.y,O.z),d.push(ae/C),d.push(1-W/U),ne+=1}}for(let W=0;W<U;W++)for(let ee=0;ee<C;ee++){const ae=h+ee+B*W,j=h+ee+B*(W+1),ie=h+(ee+1)+B*(W+1),de=h+(ee+1)+B*W;l.push(ae,j,de),l.push(j,ie,de),D+=6}o.addGroup(p,D,S),p+=D,h+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Jt(t){const e={};for(let n=0;n<t.length;n++){const i=zs(t[n]);for(const r in i)e[r]=i[r]}return e}function WE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function O_(t){return t.getRenderTarget()===null?t.outputColorSpace:ot.workingColorSpace}const jE={clone:zs,merge:Jt};var XE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$E=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XE,this.fragmentShader=$E,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=WE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class k_ extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Sn extends k_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=wd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(tl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const es=-90,ts=1;class qE extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(es,ts,e,n);r.layers=this.layers,this.add(r);const s=new Sn(es,ts,e,n);s.layers=this.layers,this.add(s);const a=new Sn(es,ts,e,n);a.layers=this.layers,this.add(a);const o=new Sn(es,ts,e,n);o.layers=this.layers,this.add(o);const l=new Sn(es,ts,e,n);l.layers=this.layers,this.add(l);const c=new Sn(es,ts,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(d,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class B_ extends mn{constructor(e,n,i,r,s,a,o,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YE extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Pr?Vt:Un),this.texture=new B_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Dn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Za(5,5,5),s=new Or({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ji});s.uniforms.tEquirect.value=n;const a=new Mn(r,s),o=n.minFilter;return n.minFilter===za&&(n.minFilter=Dn),new qE(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const cu=new V,KE=new V,ZE=new Ke;class xr{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=cu.subVectors(i,n).cross(KE.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(cu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ZE.getNormalMatrix(e),r=this.coplanarPoint(cu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Ka,Fo=new V;class zf{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,a=new xr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],f=r[5],d=r[6],h=r[7],p=r[8],_=r[9],x=r[10],g=r[11],u=r[12],v=r[13],m=r[14],M=r[15];if(i[0].setComponents(l-s,h-c,g-p,M-u).normalize(),i[1].setComponents(l+s,h+c,g+p,M+u).normalize(),i[2].setComponents(l+a,h+f,g+_,M+v).normalize(),i[3].setComponents(l-a,h-f,g-_,M-v).normalize(),i[4].setComponents(l-o,h-d,g-x,M-m).normalize(),n===Si)i[5].setComponents(l+o,h+d,g+x,M+m).normalize();else if(n===Nl)i[5].setComponents(o,d,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function z_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function QE(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,f){const d=c.array,h=c.usage,p=d.byteLength,_=t.createBuffer();t.bindBuffer(f,_),t.bufferData(f,d,h),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:p}}function s(c,f,d){const h=f.array,p=f._updateRange,_=f.updateRanges;if(t.bindBuffer(d,c),p.count===-1&&_.length===0&&t.bufferSubData(d,0,h),_.length!==0){for(let x=0,g=_.length;x<g;x++){const u=_[x];n?t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(d,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}f.clearUpdateRanges()}p.count!==-1&&(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),f.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f&&(t.deleteBuffer(f.buffer),i.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);if(d===void 0)i.set(c,r(c,f));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,c,f),d.version=c.version}}return{get:a,remove:o,update:l}}class Hf extends ei{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,d=e/o,h=n/l,p=[],_=[],x=[],g=[];for(let u=0;u<f;u++){const v=u*h-a;for(let m=0;m<c;m++){const M=m*d-s;_.push(M,-v,0),x.push(0,0,1),g.push(m/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const m=v+c*u,M=v+c*(u+1),R=v+1+c*(u+1),b=v+1+c*u;p.push(m,M,b),p.push(M,R,b)}this.setIndex(p),this.setAttribute("position",new Qn(_,3)),this.setAttribute("normal",new Qn(x,3)),this.setAttribute("uv",new Qn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hf(e.width,e.height,e.widthSegments,e.heightSegments)}}var JE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,cM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,EM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,wM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RM="gl_FragColor = linearToOutputTexel( gl_FragColor );",PM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,LM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,NM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,DM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,BM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,GM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,XM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$M=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,QM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ew=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,aw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ow=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pw=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ew=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ww=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Aw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Cw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Nw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ow=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$w=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,aT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_T=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ST=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ET=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,CT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:JE,alphahash_pars_fragment:eM,alphamap_fragment:tM,alphamap_pars_fragment:nM,alphatest_fragment:iM,alphatest_pars_fragment:rM,aomap_fragment:sM,aomap_pars_fragment:aM,batching_pars_vertex:oM,batching_vertex:lM,begin_vertex:cM,beginnormal_vertex:uM,bsdfs:dM,iridescence_fragment:fM,bumpmap_pars_fragment:hM,clipping_planes_fragment:pM,clipping_planes_pars_fragment:mM,clipping_planes_pars_vertex:gM,clipping_planes_vertex:vM,color_fragment:_M,color_pars_fragment:xM,color_pars_vertex:yM,color_vertex:SM,common:EM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:wM,displacementmap_pars_vertex:TM,displacementmap_vertex:bM,emissivemap_fragment:AM,emissivemap_pars_fragment:CM,colorspace_fragment:RM,colorspace_pars_fragment:PM,envmap_fragment:LM,envmap_common_pars_fragment:NM,envmap_pars_fragment:DM,envmap_pars_vertex:UM,envmap_physical_pars_fragment:XM,envmap_vertex:IM,fog_vertex:FM,fog_pars_vertex:OM,fog_fragment:kM,fog_pars_fragment:BM,gradientmap_pars_fragment:zM,lightmap_fragment:HM,lightmap_pars_fragment:GM,lights_lambert_fragment:VM,lights_lambert_pars_fragment:WM,lights_pars_begin:jM,lights_toon_fragment:$M,lights_toon_pars_fragment:qM,lights_phong_fragment:YM,lights_phong_pars_fragment:KM,lights_physical_fragment:ZM,lights_physical_pars_fragment:QM,lights_fragment_begin:JM,lights_fragment_maps:ew,lights_fragment_end:tw,logdepthbuf_fragment:nw,logdepthbuf_pars_fragment:iw,logdepthbuf_pars_vertex:rw,logdepthbuf_vertex:sw,map_fragment:aw,map_pars_fragment:ow,map_particle_fragment:lw,map_particle_pars_fragment:cw,metalnessmap_fragment:uw,metalnessmap_pars_fragment:dw,morphcolor_vertex:fw,morphnormal_vertex:hw,morphtarget_pars_vertex:pw,morphtarget_vertex:mw,normal_fragment_begin:gw,normal_fragment_maps:vw,normal_pars_fragment:_w,normal_pars_vertex:xw,normal_vertex:yw,normalmap_pars_fragment:Sw,clearcoat_normal_fragment_begin:Ew,clearcoat_normal_fragment_maps:Mw,clearcoat_pars_fragment:ww,iridescence_pars_fragment:Tw,opaque_fragment:bw,packing:Aw,premultiplied_alpha_fragment:Cw,project_vertex:Rw,dithering_fragment:Pw,dithering_pars_fragment:Lw,roughnessmap_fragment:Nw,roughnessmap_pars_fragment:Dw,shadowmap_pars_fragment:Uw,shadowmap_pars_vertex:Iw,shadowmap_vertex:Fw,shadowmask_pars_fragment:Ow,skinbase_vertex:kw,skinning_pars_vertex:Bw,skinning_vertex:zw,skinnormal_vertex:Hw,specularmap_fragment:Gw,specularmap_pars_fragment:Vw,tonemapping_fragment:Ww,tonemapping_pars_fragment:jw,transmission_fragment:Xw,transmission_pars_fragment:$w,uv_pars_fragment:qw,uv_pars_vertex:Yw,uv_vertex:Kw,worldpos_vertex:Zw,background_vert:Qw,background_frag:Jw,backgroundCube_vert:eT,backgroundCube_frag:tT,cube_vert:nT,cube_frag:iT,depth_vert:rT,depth_frag:sT,distanceRGBA_vert:aT,distanceRGBA_frag:oT,equirect_vert:lT,equirect_frag:cT,linedashed_vert:uT,linedashed_frag:dT,meshbasic_vert:fT,meshbasic_frag:hT,meshlambert_vert:pT,meshlambert_frag:mT,meshmatcap_vert:gT,meshmatcap_frag:vT,meshnormal_vert:_T,meshnormal_frag:xT,meshphong_vert:yT,meshphong_frag:ST,meshphysical_vert:ET,meshphysical_frag:MT,meshtoon_vert:wT,meshtoon_frag:TT,points_vert:bT,points_frag:AT,shadow_vert:CT,shadow_frag:RT,sprite_vert:PT,sprite_frag:LT},pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ii={basic:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Jt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Jt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Jt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Jt([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Jt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Jt([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Jt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Jt([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Jt([pe.common,pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Jt([pe.lights,pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ii.physical={uniforms:Jt([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Oo={r:0,b:0,g:0};function NT(t,e,n,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,f,d=null,h=0,p=null;function _(g,u){let v=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?n:e).get(m)),m===null?x(o,l):m&&m.isColor&&(x(m,1),v=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===tc)?(f===void 0&&(f=new Mn(new Za(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:zs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),f.material.uniforms.envMap.value=m,f.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,f.material.toneMapped=ot.getTransfer(m.colorSpace)!==dt,(d!==m||h!==m.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,d=m,h=m.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new Mn(new Hf(2,2),new Or({name:"BackgroundMaterial",uniforms:zs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ot.getTransfer(m.colorSpace)!==dt,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(d!==m||h!==m.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=m,h=m.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,u){g.getRGB(Oo,O_(t)),i.buffers.color.setClear(Oo.r,Oo.g,Oo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(g,u=1){o.set(g),l=u,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(o,l)},render:_}}function DT(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=g(null);let c=l,f=!1;function d(N,B,Y,ne,D){let O=!1;if(a){const W=x(ne,Y,B);c!==W&&(c=W,p(c.object)),O=u(N,ne,Y,D),O&&v(N,ne,Y,D)}else{const W=B.wireframe===!0;(c.geometry!==ne.id||c.program!==Y.id||c.wireframe!==W)&&(c.geometry=ne.id,c.program=Y.id,c.wireframe=W,O=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(O||f)&&(f=!1,U(N,B,Y,ne),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?t.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?t.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function x(N,B,Y){const ne=Y.wireframe===!0;let D=o[N.id];D===void 0&&(D={},o[N.id]=D);let O=D[B.id];O===void 0&&(O={},D[B.id]=O);let W=O[ne];return W===void 0&&(W=g(h()),O[ne]=W),W}function g(N){const B=[],Y=[],ne=[];for(let D=0;D<r;D++)B[D]=0,Y[D]=0,ne[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:ne,object:N,attributes:{},index:null}}function u(N,B,Y,ne){const D=c.attributes,O=B.attributes;let W=0;const ee=Y.getAttributes();for(const ae in ee)if(ee[ae].location>=0){const ie=D[ae];let de=O[ae];if(de===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(de=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(de=N.instanceColor)),ie===void 0||ie.attribute!==de||de&&ie.data!==de.data)return!0;W++}return c.attributesNum!==W||c.index!==ne}function v(N,B,Y,ne){const D={},O=B.attributes;let W=0;const ee=Y.getAttributes();for(const ae in ee)if(ee[ae].location>=0){let ie=O[ae];ie===void 0&&(ae==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),ae==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor));const de={};de.attribute=ie,ie&&ie.data&&(de.data=ie.data),D[ae]=de,W++}c.attributes=D,c.attributesNum=W,c.index=ne}function m(){const N=c.newAttributes;for(let B=0,Y=N.length;B<Y;B++)N[B]=0}function M(N){R(N,0)}function R(N,B){const Y=c.newAttributes,ne=c.enabledAttributes,D=c.attributeDivisors;Y[N]=1,ne[N]===0&&(t.enableVertexAttribArray(N),ne[N]=1),D[N]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,B),D[N]=B)}function b(){const N=c.newAttributes,B=c.enabledAttributes;for(let Y=0,ne=B.length;Y<ne;Y++)B[Y]!==N[Y]&&(t.disableVertexAttribArray(Y),B[Y]=0)}function C(N,B,Y,ne,D,O,W){W===!0?t.vertexAttribIPointer(N,B,Y,D,O):t.vertexAttribPointer(N,B,Y,ne,D,O)}function U(N,B,Y,ne){if(i.isWebGL2===!1&&(N.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const D=ne.attributes,O=Y.getAttributes(),W=B.defaultAttributeValues;for(const ee in O){const ae=O[ee];if(ae.location>=0){let j=D[ee];if(j===void 0&&(ee==="instanceMatrix"&&N.instanceMatrix&&(j=N.instanceMatrix),ee==="instanceColor"&&N.instanceColor&&(j=N.instanceColor)),j!==void 0){const ie=j.normalized,de=j.itemSize,_e=n.get(j);if(_e===void 0)continue;const xe=_e.buffer,Fe=_e.type,Oe=_e.bytesPerElement,Le=i.isWebGL2===!0&&(Fe===t.INT||Fe===t.UNSIGNED_INT||j.gpuType===x_);if(j.isInterleavedBufferAttribute){const Ue=j.data,z=Ue.stride,nt=j.offset;if(Ue.isInstancedInterleavedBuffer){for(let Me=0;Me<ae.locationSize;Me++)R(ae.location+Me,Ue.meshPerAttribute);N.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Me=0;Me<ae.locationSize;Me++)M(ae.location+Me);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Me=0;Me<ae.locationSize;Me++)C(ae.location+Me,de/ae.locationSize,Fe,ie,z*Oe,(nt+de/ae.locationSize*Me)*Oe,Le)}else{if(j.isInstancedBufferAttribute){for(let Ue=0;Ue<ae.locationSize;Ue++)R(ae.location+Ue,j.meshPerAttribute);N.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ue=0;Ue<ae.locationSize;Ue++)M(ae.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,xe);for(let Ue=0;Ue<ae.locationSize;Ue++)C(ae.location+Ue,de/ae.locationSize,Fe,ie,de*Oe,de/ae.locationSize*Ue*Oe,Le)}}else if(W!==void 0){const ie=W[ee];if(ie!==void 0)switch(ie.length){case 2:t.vertexAttrib2fv(ae.location,ie);break;case 3:t.vertexAttrib3fv(ae.location,ie);break;case 4:t.vertexAttrib4fv(ae.location,ie);break;default:t.vertexAttrib1fv(ae.location,ie)}}}}b()}function S(){q();for(const N in o){const B=o[N];for(const Y in B){const ne=B[Y];for(const D in ne)_(ne[D].object),delete ne[D];delete B[Y]}delete o[N]}}function T(N){if(o[N.id]===void 0)return;const B=o[N.id];for(const Y in B){const ne=B[Y];for(const D in ne)_(ne[D].object),delete ne[D];delete B[Y]}delete o[N.id]}function I(N){for(const B in o){const Y=o[B];if(Y[N.id]===void 0)continue;const ne=Y[N.id];for(const D in ne)_(ne[D].object),delete ne[D];delete Y[N.id]}}function q(){se(),f=!0,c!==l&&(c=l,p(c.object))}function se(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:q,resetDefaultState:se,dispose:S,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:m,enableAttribute:M,disableUnusedAttributes:b}}function UT(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,d){t.drawArrays(s,f,d),n.update(d,s,1)}function l(f,d,h){if(h===0)return;let p,_;if(r)p=t,_="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](s,f,d,h),n.update(d,s,h)}function c(f,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<h;_++)this.render(f[_],d[_]);else{p.multiDrawArraysWEBGL(s,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function IT(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,M=a||e.has("OES_texture_float"),R=m&&M,b=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:g,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:m,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:b}}function FT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new xr,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=f(d,h,0)},this.setState=function(d,h,p){const _=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,u=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const v=s?0:i,m=v*4;let M=u.clippingState||null;l.value=M,M=f(_,h,m,p);for(let R=0;R!==m;++R)M[R]=n[R];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(d,h,p,_){const x=d!==null?d.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const u=p+x*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<u)&&(g=new Float32Array(u));for(let m=0,M=p;m!==x;++m,M+=4)a.copy(d[m]).applyMatrix4(v,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function OT(t){let e=new WeakMap;function n(a,o){return o===xd?a.mapping=Os:o===yd&&(a.mapping=ks),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===xd||o===yd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new YE(l.height/2);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class H_ extends k_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const gs=4,lm=[.125,.215,.35,.446,.526,.582],Er=20,uu=new H_,cm=new Xe;let du=null,fu=0,hu=0;const yr=(1+Math.sqrt(5))/2,ns=1/yr,um=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,yr,ns),new V(0,yr,-ns),new V(ns,0,yr),new V(-ns,0,yr),new V(yr,ns,0),new V(-yr,ns,0)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(du,fu,hu),e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),du=this._renderer.getRenderTarget(),fu=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:Ha,format:Yn,colorSpace:Ai,depthBuffer:!1},r=fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kT(s)),this._blurMaterial=BT(s,e,n)}return r}_compileMaterial(e){const n=new Mn(this._lodPlanes[0],e);this._renderer.compile(n,uu)}_sceneToCubeUV(e,n,i,r){const o=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(cm),f.toneMapping=er,f.autoClear=!1;const p=new U_({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),_=new Mn(new Za,p);let x=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,x=!0):(p.color.copy(cm),x=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const m=this._cubeSize;ko(r,v*m,u>2?m:0,m,m),f.setRenderTarget(r),x&&f.render(_,o),f.render(e,o)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Os||e.mapping===ks;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Mn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ko(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,uu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=um[(r-1)%um.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,d=new Mn(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Er-1),x=s/_,g=isFinite(s)?1+Math.floor(f*x):Er;g>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Er}`);const u=[];let v=0;for(let C=0;C<Er;++C){const U=C/x,S=Math.exp(-U*U/2);u.push(S),C===0?v+=S:C<g&&(v+=2*S)}for(let C=0;C<u.length;C++)u[C]=u[C]/v;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:m}=this;h.dTheta.value=_,h.mipInt.value=m-i;const M=this._sizeLods[r],R=3*M*(r>m-gs?r-m+gs:0),b=4*(this._cubeSize-M);ko(n,R,b,3*M,2*M),l.setRenderTarget(n),l.render(d,uu)}}function kT(t){const e=[],n=[],i=[];let r=t;const s=t-gs+1+lm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-gs?l=lm[a-t+gs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),f=-c,d=1+c,h=[f,f,d,f,d,d,f,f,d,d,f,d],p=6,_=6,x=3,g=2,u=1,v=new Float32Array(x*_*p),m=new Float32Array(g*_*p),M=new Float32Array(u*_*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,U=b>2?0:-1,S=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];v.set(S,x*_*b),m.set(h,g*_*b);const T=[b,b,b,b,b,b];M.set(T,u*_*b)}const R=new ei;R.setAttribute("position",new On(v,x)),R.setAttribute("uv",new On(m,g)),R.setAttribute("faceIndex",new On(M,u)),e.push(R),r>gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function fm(t,e,n){const i=new Fr(t,e,n);return i.texture.mapping=tc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function BT(t,e,n){const i=new Float32Array(Er),r=new V(0,1,0);return new Or({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function hm(){return new Or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function pm(){return new Or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Gf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zT(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===xd||l===yd,f=l===Os||l===ks;if(c||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return n===null&&(n=new dm(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||f&&d&&r(d)){n===null&&(n=new dm(t));const h=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let f=0;f<c;f++)o[f]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function HT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function GT(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let g=0,u=x.length;g<u;g++)e.remove(x[g])}h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)e.update(h[_],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const x=p[_];for(let g=0,u=x.length;g<u;g++)e.update(x[g],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,_=d.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let m=0,M=v.length;m<M;m+=3){const R=v[m+0],b=v[m+1],C=v[m+2];h.push(R,b,b,C,C,R)}}else if(_!==void 0){const v=_.array;x=_.version;for(let m=0,M=v.length/3-1;m<M;m+=3){const R=m+0,b=m+1,C=m+2;h.push(R,b,b,C,C,R)}}else return;const g=new(C_(h)?F_:I_)(h,1);g.version=x;const u=s.get(d);u&&e.remove(u),s.set(d,g)}function f(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:f}}function VT(t,e,n,i){const r=i.isWebGL2;let s;function a(p){s=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function f(p,_){t.drawElements(s,_,o,p*l),n.update(_,s,1)}function d(p,_,x){if(x===0)return;let g,u;if(r)g=t,u="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[u](s,_,o,p*l,x),n.update(_,s,x)}function h(p,_,x){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<x;u++)this.render(p[u]/l,_[u]);else{g.multiDrawElementsWEBGL(s,_,0,o,p,0,x);let u=0;for(let v=0;v<x;v++)u+=_[v];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=f,this.renderInstances=d,this.renderMultiDraw=h}function WT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jT(t,e){return t[0]-e[0]}function XT(t,e){return Math.abs(e[1])-Math.abs(t[1])}function $T(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new zt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,f,d){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=p!==void 0?p.length:0;let x=s.get(f);if(x===void 0||x.count!==_){let N=function(){q.dispose(),s.delete(f),f.removeEventListener("dispose",N)};x!==void 0&&x.texture.dispose();const v=f.morphAttributes.position!==void 0,m=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,R=f.morphAttributes.position||[],b=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let U=0;v===!0&&(U=1),m===!0&&(U=2),M===!0&&(U=3);let S=f.attributes.position.count*U,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const I=new Float32Array(S*T*4*_),q=new L_(I,S,T,_);q.type=Vi,q.needsUpdate=!0;const se=U*4;for(let B=0;B<_;B++){const Y=R[B],ne=b[B],D=C[B],O=S*T*4*B;for(let W=0;W<Y.count;W++){const ee=W*se;v===!0&&(a.fromBufferAttribute(Y,W),I[O+ee+0]=a.x,I[O+ee+1]=a.y,I[O+ee+2]=a.z,I[O+ee+3]=0),m===!0&&(a.fromBufferAttribute(ne,W),I[O+ee+4]=a.x,I[O+ee+5]=a.y,I[O+ee+6]=a.z,I[O+ee+7]=0),M===!0&&(a.fromBufferAttribute(D,W),I[O+ee+8]=a.x,I[O+ee+9]=a.y,I[O+ee+10]=a.z,I[O+ee+11]=D.itemSize===4?a.w:1)}}x={count:_,texture:q,size:new tt(S,T)},s.set(f,x),f.addEventListener("dispose",N)}let g=0;for(let v=0;v<h.length;v++)g+=h[v];const u=f.morphTargetsRelative?1:1-g;d.getUniforms().setValue(t,"morphTargetBaseInfluence",u),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",x.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",x.size)}else{const p=h===void 0?0:h.length;let _=i[f.id];if(_===void 0||_.length!==p){_=[];for(let m=0;m<p;m++)_[m]=[m,0];i[f.id]=_}for(let m=0;m<p;m++){const M=_[m];M[0]=m,M[1]=h[m]}_.sort(XT);for(let m=0;m<8;m++)m<p&&_[m][1]?(o[m][0]=_[m][0],o[m][1]=_[m][1]):(o[m][0]=Number.MAX_SAFE_INTEGER,o[m][1]=0);o.sort(jT);const x=f.morphAttributes.position,g=f.morphAttributes.normal;let u=0;for(let m=0;m<8;m++){const M=o[m],R=M[0],b=M[1];R!==Number.MAX_SAFE_INTEGER&&b?(x&&f.getAttribute("morphTarget"+m)!==x[R]&&f.setAttribute("morphTarget"+m,x[R]),g&&f.getAttribute("morphNormal"+m)!==g[R]&&f.setAttribute("morphNormal"+m,g[R]),r[m]=b,u+=b):(x&&f.hasAttribute("morphTarget"+m)===!0&&f.deleteAttribute("morphTarget"+m),g&&f.hasAttribute("morphNormal"+m)===!0&&f.deleteAttribute("morphNormal"+m),r[m]=0)}const v=f.morphTargetsRelative?1:1-u;d.getUniforms().setValue(t,"morphTargetBaseInfluence",v),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function qT(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class G_ extends mn{constructor(e,n,i,r,s,a,o,l,c,f){if(f=f!==void 0?f:Rr,f!==Rr&&f!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Rr&&(i=Gi),i===void 0&&f===Bs&&(i=Cr),super(null,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const V_=new mn,W_=new G_(1,1);W_.compareFunction=A_;const j_=new L_,X_=new NE,$_=new B_,mm=[],gm=[],vm=new Float32Array(16),_m=new Float32Array(9),xm=new Float32Array(4);function $s(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=mm[r];if(s===void 0&&(s=new Float32Array(r),mm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function rc(t,e){let n=gm[e];n===void 0&&(n=new Int32Array(e),gm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function YT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function JT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(It(n,i))return;xm.set(i),t.uniformMatrix2fv(this.addr,!1,xm),Ft(n,i)}}function e1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(It(n,i))return;_m.set(i),t.uniformMatrix3fv(this.addr,!1,_m),Ft(n,i)}}function t1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(It(n,i))return;vm.set(i),t.uniformMatrix4fv(this.addr,!1,vm),Ft(n,i)}}function n1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function i1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function r1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function s1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function a1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function o1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function l1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function c1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function u1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?W_:V_;n.setTexture2D(e||s,r)}function d1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||X_,r)}function f1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||$_,r)}function h1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||j_,r)}function p1(t){switch(t){case 5126:return YT;case 35664:return KT;case 35665:return ZT;case 35666:return QT;case 35674:return JT;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return r1;case 35669:case 35673:return s1;case 5125:return a1;case 36294:return o1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return h1}}function m1(t,e){t.uniform1fv(this.addr,e)}function g1(t,e){const n=$s(e,this.size,2);t.uniform2fv(this.addr,n)}function v1(t,e){const n=$s(e,this.size,3);t.uniform3fv(this.addr,n)}function _1(t,e){const n=$s(e,this.size,4);t.uniform4fv(this.addr,n)}function x1(t,e){const n=$s(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function y1(t,e){const n=$s(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function S1(t,e){const n=$s(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function E1(t,e){t.uniform1iv(this.addr,e)}function M1(t,e){t.uniform2iv(this.addr,e)}function w1(t,e){t.uniform3iv(this.addr,e)}function T1(t,e){t.uniform4iv(this.addr,e)}function b1(t,e){t.uniform1uiv(this.addr,e)}function A1(t,e){t.uniform2uiv(this.addr,e)}function C1(t,e){t.uniform3uiv(this.addr,e)}function R1(t,e){t.uniform4uiv(this.addr,e)}function P1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||V_,s[a])}function L1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||X_,s[a])}function N1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||$_,s[a])}function D1(t,e,n){const i=this.cache,r=e.length,s=rc(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||j_,s[a])}function U1(t){switch(t){case 5126:return m1;case 35664:return g1;case 35665:return v1;case 35666:return _1;case 35674:return x1;case 35675:return y1;case 35676:return S1;case 5124:case 35670:return E1;case 35667:case 35671:return M1;case 35668:case 35672:return w1;case 35669:case 35673:return T1;case 5125:return b1;case 36294:return A1;case 36295:return C1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return P1;case 35679:case 36299:case 36307:return L1;case 35680:case 36300:case 36308:case 36293:return N1;case 36289:case 36303:case 36311:case 36292:return D1}}class I1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=p1(n.type)}}class F1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=U1(n.type)}}class O1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const pu=/(\w+)(\])?(\[|\.)?/g;function ym(t,e){t.seq.push(e),t.map[e.id]=e}function k1(t,e,n){const i=t.name,r=i.length;for(pu.lastIndex=0;;){const s=pu.exec(i),a=pu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ym(n,c===void 0?new I1(o,t,e):new F1(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new O1(o),ym(n,d)),n=d}}}class nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);k1(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Sm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const B1=37297;let z1=0;function H1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function G1(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===Ll&&n===Pl?i="LinearDisplayP3ToLinearSRGB":e===Pl&&n===Ll&&(i="LinearSRGBToLinearDisplayP3"),t){case Ai:case nc:return[i,"LinearTransferOETF"];case Vt:case kf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+H1(t.getShaderSource(e),a)}else return r}function V1(t,e){const n=G1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function W1(t,e){let n;switch(e){case tE:n="Linear";break;case nE:n="Reinhard";break;case iE:n="OptimizedCineon";break;case rE:n="ACESFilmic";break;case aE:n="AgX";break;case sE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function j1(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vs).join(`
`)}function X1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vs).join(`
`)}function $1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function q1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function vs(t){return t!==""}function Mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(t){return t.replace(Y1,Z1)}const K1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Z1(t,e){let n=$e[e];if(n===void 0){const i=K1.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bd(n)}const Q1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(t){return t.replace(Q1,J1)}function J1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function eb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===v_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===RS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function tb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function nb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function ib(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case If:e="ENVMAP_BLENDING_MULTIPLY";break;case JS:e="ENVMAP_BLENDING_MIX";break;case eE:e="ENVMAP_BLENDING_ADD";break}return e}function rb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function sb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=eb(n),c=tb(n),f=nb(n),d=ib(n),h=rb(n),p=n.isWebGL2?"":j1(n),_=X1(n),x=$1(s),g=r.createProgram();let u,v,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(vs).join(`
`),u.length>0&&(u+=`
`),v=[p,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(vs).join(`
`),v.length>0&&(v+=`
`)):(u=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),v=[p,bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?$e.tonemapping_pars_fragment:"",n.toneMapping!==er?W1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,V1("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vs).join(`
`)),a=bd(a),a=Mm(a,n),a=wm(a,n),o=bd(o),o=Mm(o,n),o=wm(o,n),a=Tm(a),o=Tm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=m+u+a,R=m+v+o,b=Sm(r,r.VERTEX_SHADER,M),C=Sm(r,r.FRAGMENT_SHADER,R);r.attachShader(g,b),r.attachShader(g,C),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function U(q){if(t.debug.checkShaderErrors){const se=r.getProgramInfoLog(g).trim(),N=r.getShaderInfoLog(b).trim(),B=r.getShaderInfoLog(C).trim();let Y=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,b,C);else{const D=Em(r,b,"vertex"),O=Em(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+D+`
`+O)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(N===""||B==="")&&(ne=!1);ne&&(q.diagnostics={runnable:Y,programLog:se,vertexShader:{log:N,prefix:u},fragmentShader:{log:B,prefix:v}})}r.deleteShader(b),r.deleteShader(C),S=new nl(r,g),T=q1(r,g)}let S;this.getUniforms=function(){return S===void 0&&U(this),S};let T;this.getAttributes=function(){return T===void 0&&U(this),T};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(g,B1)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=z1++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=C,this}let ab=0;class ob{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new lb(e),n.set(e,i)),i}}class lb{constructor(e){this.id=ab++,this.code=e,this.usedTimes=0}}function cb(t,e,n,i,r,s,a){const o=new N_,l=new ob,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return S===0?"uv":`uv${S}`}function g(S,T,I,q,se){const N=q.fog,B=se.geometry,Y=S.isMeshStandardMaterial?q.environment:null,ne=(S.isMeshStandardMaterial?n:e).get(S.envMap||Y),D=ne&&ne.mapping===tc?ne.image.height:null,O=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const W=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ee=W!==void 0?W.length:0;let ae=0;B.morphAttributes.position!==void 0&&(ae=1),B.morphAttributes.normal!==void 0&&(ae=2),B.morphAttributes.color!==void 0&&(ae=3);let j,ie,de,_e;if(O){const F=ii[O];j=F.vertexShader,ie=F.fragmentShader}else j=S.vertexShader,ie=S.fragmentShader,l.update(S),de=l.getVertexShaderID(S),_e=l.getFragmentShaderID(S);const xe=t.getRenderTarget(),Fe=se.isInstancedMesh===!0,Oe=se.isBatchedMesh===!0,Le=!!S.map,Ue=!!S.matcap,z=!!ne,nt=!!S.aoMap,Me=!!S.lightMap,Ce=!!S.bumpMap,he=!!S.normalMap,Qe=!!S.displacementMap,Ne=!!S.emissiveMap,w=!!S.metalnessMap,E=!!S.roughnessMap,$=S.anisotropy>0,P=S.clearcoat>0,H=S.iridescence>0,X=S.sheen>0,ce=S.transmission>0,k=$&&!!S.anisotropyMap,re=P&&!!S.clearcoatMap,me=P&&!!S.clearcoatNormalMap,Se=P&&!!S.clearcoatRoughnessMap,J=H&&!!S.iridescenceMap,De=H&&!!S.iridescenceThicknessMap,Re=X&&!!S.sheenColorMap,Pe=X&&!!S.sheenRoughnessMap,Te=!!S.specularMap,ye=!!S.specularColorMap,He=!!S.specularIntensityMap,Je=ce&&!!S.transmissionMap,ct=ce&&!!S.thicknessMap,We=!!S.gradientMap,fe=!!S.alphaMap,L=S.alphaTest>0,ge=!!S.alphaHash,ve=!!S.extensions,Be=!!B.attributes.uv1,ke=!!B.attributes.uv2,it=!!B.attributes.uv3;let st=er;return S.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(st=t.toneMapping),{isWebGL2:f,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:ie,defines:S.defines,customVertexShaderID:de,customFragmentShaderID:_e,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Oe,instancing:Fe,instancingColor:Fe&&se.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:xe===null?t.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ai,map:Le,matcap:Ue,envMap:z,envMapMode:z&&ne.mapping,envMapCubeUVHeight:D,aoMap:nt,lightMap:Me,bumpMap:Ce,normalMap:he,displacementMap:h&&Qe,emissiveMap:Ne,normalMapObjectSpace:he&&S.normalMapType===_E,normalMapTangentSpace:he&&S.normalMapType===Of,metalnessMap:w,roughnessMap:E,anisotropy:$,anisotropyMap:k,clearcoat:P,clearcoatMap:re,clearcoatNormalMap:me,clearcoatRoughnessMap:Se,iridescence:H,iridescenceMap:J,iridescenceThicknessMap:De,sheen:X,sheenColorMap:Re,sheenRoughnessMap:Pe,specularMap:Te,specularColorMap:ye,specularIntensityMap:He,transmission:ce,transmissionMap:Je,thicknessMap:ct,gradientMap:We,opaque:S.transparent===!1&&S.blending===Ts,alphaMap:fe,alphaTest:L,alphaHash:ge,combine:S.combine,mapUv:Le&&x(S.map.channel),aoMapUv:nt&&x(S.aoMap.channel),lightMapUv:Me&&x(S.lightMap.channel),bumpMapUv:Ce&&x(S.bumpMap.channel),normalMapUv:he&&x(S.normalMap.channel),displacementMapUv:Qe&&x(S.displacementMap.channel),emissiveMapUv:Ne&&x(S.emissiveMap.channel),metalnessMapUv:w&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:k&&x(S.anisotropyMap.channel),clearcoatMapUv:re&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:De&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&x(S.sheenRoughnessMap.channel),specularMapUv:Te&&x(S.specularMap.channel),specularColorMapUv:ye&&x(S.specularColorMap.channel),specularIntensityMapUv:He&&x(S.specularIntensityMap.channel),transmissionMapUv:Je&&x(S.transmissionMap.channel),thicknessMapUv:ct&&x(S.thicknessMap.channel),alphaMapUv:fe&&x(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(he||$),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Be,vertexUv2s:ke,vertexUv3s:it,pointsUvs:se.isPoints===!0&&!!B.attributes.uv&&(Le||fe),fog:!!N,useFog:S.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:se.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ae,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:st,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===dt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===_i,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:ve&&S.extensions.derivatives===!0,extensionFragDepth:ve&&S.extensions.fragDepth===!0,extensionDrawBuffers:ve&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)T.push(I),T.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(v(T,S),m(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function v(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function m(S,T){o.disableAll(),T.isWebGL2&&o.enable(0),T.supportsVertexTextures&&o.enable(1),T.instancing&&o.enable(2),T.instancingColor&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.skinning&&o.enable(4),T.morphTargets&&o.enable(5),T.morphNormals&&o.enable(6),T.morphColors&&o.enable(7),T.premultipliedAlpha&&o.enable(8),T.shadowMapEnabled&&o.enable(9),T.useLegacyLights&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),S.push(o.mask)}function M(S){const T=_[S.type];let I;if(T){const q=ii[T];I=jE.clone(q.uniforms)}else I=S.uniforms;return I}function R(S,T){let I;for(let q=0,se=c.length;q<se;q++){const N=c[q];if(N.cacheKey===T){I=N,++I.usedTimes;break}}return I===void 0&&(I=new sb(t,T,S,s),c.push(I)),I}function b(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),S.destroy()}}function C(S){l.remove(S)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:u,getUniforms:M,acquireProgram:R,releaseProgram:b,releaseShaderCache:C,programs:c,dispose:U}}function ub(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function db(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Am(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,p,_,x,g){let u=t[e];return u===void 0?(u={id:d.id,object:d,geometry:h,material:p,groupOrder:_,renderOrder:d.renderOrder,z:x,group:g},t[e]=u):(u.id=d.id,u.object=d,u.geometry=h,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=x,u.group=g),e++,u}function o(d,h,p,_,x,g){const u=a(d,h,p,_,x,g);p.transmission>0?i.push(u):p.transparent===!0?r.push(u):n.push(u)}function l(d,h,p,_,x,g){const u=a(d,h,p,_,x,g);p.transmission>0?i.unshift(u):p.transparent===!0?r.unshift(u):n.unshift(u)}function c(d,h){n.length>1&&n.sort(d||db),i.length>1&&i.sort(h||Am),r.length>1&&r.sort(h||Am)}function f(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:c}}function fb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Cm,t.set(i,[a])):r>=s.length?(a=new Cm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function hb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Xe};break;case"SpotLight":n={position:new V,direction:new V,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function pb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let mb=0;function gb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function vb(t,e){const n=new hb,i=pb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new V);const s=new V,a=new Et,o=new Et;function l(f,d){let h=0,p=0,_=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let x=0,g=0,u=0,v=0,m=0,M=0,R=0,b=0,C=0,U=0,S=0;f.sort(gb);const T=d===!0?Math.PI:1;for(let q=0,se=f.length;q<se;q++){const N=f[q],B=N.color,Y=N.intensity,ne=N.distance,D=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=B.r*Y*T,p+=B.g*Y*T,_+=B.b*Y*T;else if(N.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(N.sh.coefficients[O],Y);S++}else if(N.isDirectionalLight){const O=n.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity*T),N.castShadow){const W=N.shadow,ee=i.get(N);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,r.directionalShadow[x]=ee,r.directionalShadowMap[x]=D,r.directionalShadowMatrix[x]=N.shadow.matrix,M++}r.directional[x]=O,x++}else if(N.isSpotLight){const O=n.get(N);O.position.setFromMatrixPosition(N.matrixWorld),O.color.copy(B).multiplyScalar(Y*T),O.distance=ne,O.coneCos=Math.cos(N.angle),O.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),O.decay=N.decay,r.spot[u]=O;const W=N.shadow;if(N.map&&(r.spotLightMap[C]=N.map,C++,W.updateMatrices(N),N.castShadow&&U++),r.spotLightMatrix[u]=W.matrix,N.castShadow){const ee=i.get(N);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,r.spotShadow[u]=ee,r.spotShadowMap[u]=D,b++}u++}else if(N.isRectAreaLight){const O=n.get(N);O.color.copy(B).multiplyScalar(Y),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),r.rectArea[v]=O,v++}else if(N.isPointLight){const O=n.get(N);if(O.color.copy(N.color).multiplyScalar(N.intensity*T),O.distance=N.distance,O.decay=N.decay,N.castShadow){const W=N.shadow,ee=i.get(N);ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,ee.shadowCameraNear=W.camera.near,ee.shadowCameraFar=W.camera.far,r.pointShadow[g]=ee,r.pointShadowMap[g]=D,r.pointShadowMatrix[g]=N.shadow.matrix,R++}r.point[g]=O,g++}else if(N.isHemisphereLight){const O=n.get(N);O.skyColor.copy(N.color).multiplyScalar(Y*T),O.groundColor.copy(N.groundColor).multiplyScalar(Y*T),r.hemi[m]=O,m++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=_;const I=r.hash;(I.directionalLength!==x||I.pointLength!==g||I.spotLength!==u||I.rectAreaLength!==v||I.hemiLength!==m||I.numDirectionalShadows!==M||I.numPointShadows!==R||I.numSpotShadows!==b||I.numSpotMaps!==C||I.numLightProbes!==S)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=v,r.point.length=g,r.hemi.length=m,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=b+C-U,r.spotLightMap.length=C,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=S,I.directionalLength=x,I.pointLength=g,I.spotLength=u,I.rectAreaLength=v,I.hemiLength=m,I.numDirectionalShadows=M,I.numPointShadows=R,I.numSpotShadows=b,I.numSpotMaps=C,I.numLightProbes=S,r.version=mb++)}function c(f,d){let h=0,p=0,_=0,x=0,g=0;const u=d.matrixWorldInverse;for(let v=0,m=f.length;v<m;v++){const M=f[v];if(M.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),h++}else if(M.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(u),_++}else if(M.isRectAreaLight){const R=r.rectArea[x];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),o.identity(),a.copy(M.matrixWorld),a.premultiply(u),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(u),p++}else if(M.isHemisphereLight){const R=r.hemi[g];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(u),g++}}}return{setup:l,setupView:c,state:r}}function Rm(t,e){const n=new vb(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(d){i.push(d)}function o(d){r.push(d)}function l(d){n.setup(i,d)}function c(d){n.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function _b(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Rm(t,e),n.set(s,[l])):a>=o.length?(l=new Rm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class xb extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yb extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mb(t,e,n){let i=new zf;const r=new tt,s=new tt,a=new zt,o=new xb({depthPacking:vE}),l=new yb,c={},f=n.maxTextureSize,d={[sr]:pn,[pn]:sr,[_i]:_i},h=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Sb,fragmentShader:Eb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new ei;_.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Mn(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=v_;let u=this.type;this.render=function(b,C,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const S=t.getRenderTarget(),T=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),q=t.state;q.setBlending(Ji),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const se=u!==mi&&this.type===mi,N=u===mi&&this.type!==mi;for(let B=0,Y=b.length;B<Y;B++){const ne=b[B],D=ne.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const O=D.getFrameExtents();if(r.multiply(O),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,D.mapSize.y=s.y)),D.map===null||se===!0||N===!0){const ee=this.type!==mi?{minFilter:tn,magFilter:tn}:{};D.map!==null&&D.map.dispose(),D.map=new Fr(r.x,r.y,ee),D.map.texture.name=ne.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const W=D.getViewportCount();for(let ee=0;ee<W;ee++){const ae=D.getViewport(ee);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),q.viewport(a),D.updateMatrices(ne,ee),i=D.getFrustum(),M(C,U,D.camera,ne,this.type)}D.isPointLightShadow!==!0&&this.type===mi&&v(D,U),D.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(S,T,I)};function v(b,C){const U=e.update(x);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fr(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(C,null,U,h,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(C,null,U,p,x,null)}function m(b,C,U,S){let T=null;const I=U.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(I!==void 0)T=I;else if(T=U.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const q=T.uuid,se=C.uuid;let N=c[q];N===void 0&&(N={},c[q]=N);let B=N[se];B===void 0&&(B=T.clone(),N[se]=B,C.addEventListener("dispose",R)),T=B}if(T.visible=C.visible,T.wireframe=C.wireframe,S===mi?T.side=C.shadowSide!==null?C.shadowSide:C.side:T.side=C.shadowSide!==null?C.shadowSide:d[C.side],T.alphaMap=C.alphaMap,T.alphaTest=C.alphaTest,T.map=C.map,T.clipShadows=C.clipShadows,T.clippingPlanes=C.clippingPlanes,T.clipIntersection=C.clipIntersection,T.displacementMap=C.displacementMap,T.displacementScale=C.displacementScale,T.displacementBias=C.displacementBias,T.wireframeLinewidth=C.wireframeLinewidth,T.linewidth=C.linewidth,U.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const q=t.properties.get(T);q.light=U}return T}function M(b,C,U,S,T){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&T===mi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,b.matrixWorld);const se=e.update(b),N=b.material;if(Array.isArray(N)){const B=se.groups;for(let Y=0,ne=B.length;Y<ne;Y++){const D=B[Y],O=N[D.materialIndex];if(O&&O.visible){const W=m(b,O,S,T);b.onBeforeShadow(t,b,C,U,se,W,D),t.renderBufferDirect(U,null,se,W,b,D),b.onAfterShadow(t,b,C,U,se,W,D)}}}else if(N.visible){const B=m(b,N,S,T);b.onBeforeShadow(t,b,C,U,se,B,null),t.renderBufferDirect(U,null,se,B,b,null),b.onAfterShadow(t,b,C,U,se,B,null)}}const q=b.children;for(let se=0,N=q.length;se<N;se++)M(q[se],C,U,S,T)}function R(b){b.target.removeEventListener("dispose",R);for(const U in c){const S=c[U],T=b.target.uuid;T in S&&(S[T].dispose(),delete S[T])}}}function wb(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ge=new zt;let ve=null;const Be=new zt(0,0,0,0);return{setMask:function(ke){ve!==ke&&!L&&(t.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){L=ke},setClear:function(ke,it,st,bt,F){F===!0&&(ke*=bt,it*=bt,st*=bt),ge.set(ke,it,st,bt),Be.equals(ge)===!1&&(t.clearColor(ke,it,st,bt),Be.copy(ge))},reset:function(){L=!1,ve=null,Be.set(-1,0,0,0)}}}function s(){let L=!1,ge=null,ve=null,Be=null;return{setTest:function(ke){ke?Oe(t.DEPTH_TEST):Le(t.DEPTH_TEST)},setMask:function(ke){ge!==ke&&!L&&(t.depthMask(ke),ge=ke)},setFunc:function(ke){if(ve!==ke){switch(ke){case XS:t.depthFunc(t.NEVER);break;case $S:t.depthFunc(t.ALWAYS);break;case qS:t.depthFunc(t.LESS);break;case Cl:t.depthFunc(t.LEQUAL);break;case YS:t.depthFunc(t.EQUAL);break;case KS:t.depthFunc(t.GEQUAL);break;case ZS:t.depthFunc(t.GREATER);break;case QS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=ke}},setLocked:function(ke){L=ke},setClear:function(ke){Be!==ke&&(t.clearDepth(ke),Be=ke)},reset:function(){L=!1,ge=null,ve=null,Be=null}}}function a(){let L=!1,ge=null,ve=null,Be=null,ke=null,it=null,st=null,bt=null,F=null;return{setTest:function(te){L||(te?Oe(t.STENCIL_TEST):Le(t.STENCIL_TEST))},setMask:function(te){ge!==te&&!L&&(t.stencilMask(te),ge=te)},setFunc:function(te,oe,Ae){(ve!==te||Be!==oe||ke!==Ae)&&(t.stencilFunc(te,oe,Ae),ve=te,Be=oe,ke=Ae)},setOp:function(te,oe,Ae){(it!==te||st!==oe||bt!==Ae)&&(t.stencilOp(te,oe,Ae),it=te,st=oe,bt=Ae)},setLocked:function(te){L=te},setClear:function(te){F!==te&&(t.clearStencil(te),F=te)},reset:function(){L=!1,ge=null,ve=null,Be=null,ke=null,it=null,st=null,bt=null,F=null}}}const o=new r,l=new s,c=new a,f=new WeakMap,d=new WeakMap;let h={},p={},_=new WeakMap,x=[],g=null,u=!1,v=null,m=null,M=null,R=null,b=null,C=null,U=null,S=new Xe(0,0,0),T=0,I=!1,q=null,se=null,N=null,B=null,Y=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(W)[1]),D=O>=1):W.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),D=O>=2);let ee=null,ae={};const j=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),de=new zt().fromArray(j),_e=new zt().fromArray(ie);function xe(L,ge,ve,Be){const ke=new Uint8Array(4),it=t.createTexture();t.bindTexture(L,it),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<ve;st++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ge,0,t.RGBA,1,1,Be,0,t.RGBA,t.UNSIGNED_BYTE,ke):t.texImage2D(ge+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ke);return it}const Fe={};Fe[t.TEXTURE_2D]=xe(t.TEXTURE_2D,t.TEXTURE_2D,1),Fe[t.TEXTURE_CUBE_MAP]=xe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Fe[t.TEXTURE_2D_ARRAY]=xe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Fe[t.TEXTURE_3D]=xe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(t.DEPTH_TEST),l.setFunc(Cl),Ne(!1),w(up),Oe(t.CULL_FACE),he(Ji);function Oe(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Le(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function Ue(L,ge){return p[L]!==ge?(t.bindFramebuffer(L,ge),p[L]=ge,i&&(L===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=ge),L===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=ge)),!0):!1}function z(L,ge){let ve=x,Be=!1;if(L)if(ve=_.get(ge),ve===void 0&&(ve=[],_.set(ge,ve)),L.isWebGLMultipleRenderTargets){const ke=L.texture;if(ve.length!==ke.length||ve[0]!==t.COLOR_ATTACHMENT0){for(let it=0,st=ke.length;it<st;it++)ve[it]=t.COLOR_ATTACHMENT0+it;ve.length=ke.length,Be=!0}}else ve[0]!==t.COLOR_ATTACHMENT0&&(ve[0]=t.COLOR_ATTACHMENT0,Be=!0);else ve[0]!==t.BACK&&(ve[0]=t.BACK,Be=!0);Be&&(n.isWebGL2?t.drawBuffers(ve):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ve))}function nt(L){return g!==L?(t.useProgram(L),g=L,!0):!1}const Me={[Sr]:t.FUNC_ADD,[LS]:t.FUNC_SUBTRACT,[NS]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[pp]=t.MIN,Me[mp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Me[pp]=L.MIN_EXT,Me[mp]=L.MAX_EXT)}const Ce={[DS]:t.ZERO,[US]:t.ONE,[IS]:t.SRC_COLOR,[vd]:t.SRC_ALPHA,[HS]:t.SRC_ALPHA_SATURATE,[BS]:t.DST_COLOR,[OS]:t.DST_ALPHA,[FS]:t.ONE_MINUS_SRC_COLOR,[_d]:t.ONE_MINUS_SRC_ALPHA,[zS]:t.ONE_MINUS_DST_COLOR,[kS]:t.ONE_MINUS_DST_ALPHA,[GS]:t.CONSTANT_COLOR,[VS]:t.ONE_MINUS_CONSTANT_COLOR,[WS]:t.CONSTANT_ALPHA,[jS]:t.ONE_MINUS_CONSTANT_ALPHA};function he(L,ge,ve,Be,ke,it,st,bt,F,te){if(L===Ji){u===!0&&(Le(t.BLEND),u=!1);return}if(u===!1&&(Oe(t.BLEND),u=!0),L!==PS){if(L!==v||te!==I){if((m!==Sr||b!==Sr)&&(t.blendEquation(t.FUNC_ADD),m=Sr,b=Sr),te)switch(L){case Ts:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dp:t.blendFunc(t.ONE,t.ONE);break;case fp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ts:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case dp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case fp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case hp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}M=null,R=null,C=null,U=null,S.set(0,0,0),T=0,v=L,I=te}return}ke=ke||ge,it=it||ve,st=st||Be,(ge!==m||ke!==b)&&(t.blendEquationSeparate(Me[ge],Me[ke]),m=ge,b=ke),(ve!==M||Be!==R||it!==C||st!==U)&&(t.blendFuncSeparate(Ce[ve],Ce[Be],Ce[it],Ce[st]),M=ve,R=Be,C=it,U=st),(bt.equals(S)===!1||F!==T)&&(t.blendColor(bt.r,bt.g,bt.b,F),S.copy(bt),T=F),v=L,I=!1}function Qe(L,ge){L.side===_i?Le(t.CULL_FACE):Oe(t.CULL_FACE);let ve=L.side===pn;ge&&(ve=!ve),Ne(ve),L.blending===Ts&&L.transparent===!1?he(Ji):he(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const Be=L.stencilWrite;c.setTest(Be),Be&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):Le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(L){q!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),q=L)}function w(L){L!==AS?(Oe(t.CULL_FACE),L!==se&&(L===up?t.cullFace(t.BACK):L===CS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Le(t.CULL_FACE),se=L}function E(L){L!==N&&(D&&t.lineWidth(L),N=L)}function $(L,ge,ve){L?(Oe(t.POLYGON_OFFSET_FILL),(B!==ge||Y!==ve)&&(t.polygonOffset(ge,ve),B=ge,Y=ve)):Le(t.POLYGON_OFFSET_FILL)}function P(L){L?Oe(t.SCISSOR_TEST):Le(t.SCISSOR_TEST)}function H(L){L===void 0&&(L=t.TEXTURE0+ne-1),ee!==L&&(t.activeTexture(L),ee=L)}function X(L,ge,ve){ve===void 0&&(ee===null?ve=t.TEXTURE0+ne-1:ve=ee);let Be=ae[ve];Be===void 0&&(Be={type:void 0,texture:void 0},ae[ve]=Be),(Be.type!==L||Be.texture!==ge)&&(ee!==ve&&(t.activeTexture(ve),ee=ve),t.bindTexture(L,ge||Fe[L]),Be.type=L,Be.texture=ge)}function ce(){const L=ae[ee];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function k(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function De(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function He(L){de.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),de.copy(L))}function Je(L){_e.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),_e.copy(L))}function ct(L,ge){let ve=d.get(ge);ve===void 0&&(ve=new WeakMap,d.set(ge,ve));let Be=ve.get(L);Be===void 0&&(Be=t.getUniformBlockIndex(ge,L.name),ve.set(L,Be))}function We(L,ge){const Be=d.get(ge).get(L);f.get(ge)!==Be&&(t.uniformBlockBinding(ge,Be,L.__bindingPointIndex),f.set(ge,Be))}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},ee=null,ae={},p={},_=new WeakMap,x=[],g=null,u=!1,v=null,m=null,M=null,R=null,b=null,C=null,U=null,S=new Xe(0,0,0),T=0,I=!1,q=null,se=null,N=null,B=null,Y=null,de.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Oe,disable:Le,bindFramebuffer:Ue,drawBuffers:z,useProgram:nt,setBlending:he,setMaterial:Qe,setFlipSided:Ne,setCullFace:w,setLineWidth:E,setPolygonOffset:$,setScissorTest:P,activeTexture:H,bindTexture:X,unbindTexture:ce,compressedTexImage2D:k,compressedTexImage3D:re,texImage2D:Te,texImage3D:ye,updateUBOMapping:ct,uniformBlockBinding:We,texStorage2D:Re,texStorage3D:Pe,texSubImage2D:me,texSubImage3D:Se,compressedTexSubImage2D:J,compressedTexSubImage3D:De,scissor:He,viewport:Je,reset:fe}}function Tb(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,E){return p?new OffscreenCanvas(w,E):Ga("canvas")}function x(w,E,$,P){let H=1;if((w.width>P||w.height>P)&&(H=P/Math.max(w.width,w.height)),H<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const X=E?Td:Math.floor,ce=X(H*w.width),k=X(H*w.height);d===void 0&&(d=_(ce,k));const re=$?_(ce,k):d;return re.width=ce,re.height=k,re.getContext("2d").drawImage(w,0,0,ce,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+ce+"x"+k+")."),re}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function g(w){return jp(w.width)&&jp(w.height)}function u(w){return o?!1:w.wrapS!==qn||w.wrapT!==qn||w.minFilter!==tn&&w.minFilter!==Dn}function v(w,E){return w.generateMipmaps&&E&&w.minFilter!==tn&&w.minFilter!==Dn}function m(w){t.generateMipmap(w)}function M(w,E,$,P,H=!1){if(o===!1)return E;if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let X=E;if(E===t.RED&&($===t.FLOAT&&(X=t.R32F),$===t.HALF_FLOAT&&(X=t.R16F),$===t.UNSIGNED_BYTE&&(X=t.R8)),E===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(X=t.R8UI),$===t.UNSIGNED_SHORT&&(X=t.R16UI),$===t.UNSIGNED_INT&&(X=t.R32UI),$===t.BYTE&&(X=t.R8I),$===t.SHORT&&(X=t.R16I),$===t.INT&&(X=t.R32I)),E===t.RG&&($===t.FLOAT&&(X=t.RG32F),$===t.HALF_FLOAT&&(X=t.RG16F),$===t.UNSIGNED_BYTE&&(X=t.RG8)),E===t.RGBA){const ce=H?Rl:ot.getTransfer(P);$===t.FLOAT&&(X=t.RGBA32F),$===t.HALF_FLOAT&&(X=t.RGBA16F),$===t.UNSIGNED_BYTE&&(X=ce===dt?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function R(w,E,$){return v(w,$)===!0||w.isFramebufferTexture&&w.minFilter!==tn&&w.minFilter!==Dn?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function b(w){return w===tn||w===gp||w===zc?t.NEAREST:t.LINEAR}function C(w){const E=w.target;E.removeEventListener("dispose",C),S(E),E.isVideoTexture&&f.delete(E)}function U(w){const E=w.target;E.removeEventListener("dispose",U),I(E)}function S(w){const E=i.get(w);if(E.__webglInit===void 0)return;const $=w.source,P=h.get($);if(P){const H=P[E.__cacheKey];H.usedTimes--,H.usedTimes===0&&T(w),Object.keys(P).length===0&&h.delete($)}i.remove(w)}function T(w){const E=i.get(w);t.deleteTexture(E.__webglTexture);const $=w.source,P=h.get($);delete P[E.__cacheKey],a.memory.textures--}function I(w){const E=w.texture,$=i.get(w),P=i.get(E);if(P.__webglTexture!==void 0&&(t.deleteTexture(P.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray($.__webglFramebuffer[H]))for(let X=0;X<$.__webglFramebuffer[H].length;X++)t.deleteFramebuffer($.__webglFramebuffer[H][X]);else t.deleteFramebuffer($.__webglFramebuffer[H]);$.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer[H])}else{if(Array.isArray($.__webglFramebuffer))for(let H=0;H<$.__webglFramebuffer.length;H++)t.deleteFramebuffer($.__webglFramebuffer[H]);else t.deleteFramebuffer($.__webglFramebuffer);if($.__webglDepthbuffer&&t.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&t.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let H=0;H<$.__webglColorRenderbuffer.length;H++)$.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer($.__webglColorRenderbuffer[H]);$.__webglDepthRenderbuffer&&t.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let H=0,X=E.length;H<X;H++){const ce=i.get(E[H]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(E[H])}i.remove(E),i.remove(w)}let q=0;function se(){q=0}function N(){const w=q;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),q+=1,w}function B(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function Y(w,E){const $=i.get(w);if(w.isVideoTexture&&Qe(w),w.isRenderTargetTexture===!1&&w.version>0&&$.__version!==w.version){const P=w.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de($,w,E);return}}n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+E)}function ne(w,E){const $=i.get(w);if(w.version>0&&$.__version!==w.version){de($,w,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+E)}function D(w,E){const $=i.get(w);if(w.version>0&&$.__version!==w.version){de($,w,E);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+E)}function O(w,E){const $=i.get(w);if(w.version>0&&$.__version!==w.version){_e($,w,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+E)}const W={[Sd]:t.REPEAT,[qn]:t.CLAMP_TO_EDGE,[Ed]:t.MIRRORED_REPEAT},ee={[tn]:t.NEAREST,[gp]:t.NEAREST_MIPMAP_NEAREST,[zc]:t.NEAREST_MIPMAP_LINEAR,[Dn]:t.LINEAR,[oE]:t.LINEAR_MIPMAP_NEAREST,[za]:t.LINEAR_MIPMAP_LINEAR},ae={[xE]:t.NEVER,[TE]:t.ALWAYS,[yE]:t.LESS,[A_]:t.LEQUAL,[SE]:t.EQUAL,[wE]:t.GEQUAL,[EE]:t.GREATER,[ME]:t.NOTEQUAL};function j(w,E,$){if($?(t.texParameteri(w,t.TEXTURE_WRAP_S,W[E.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,W[E.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,W[E.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,ee[E.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,ee[E.minFilter])):(t.texParameteri(w,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(w,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==qn||E.wrapT!==qn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(w,t.TEXTURE_MAG_FILTER,b(E.magFilter)),t.texParameteri(w,t.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==tn&&E.minFilter!==Dn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===tn||E.minFilter!==zc&&E.minFilter!==za||E.type===Vi&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ha&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(w,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function ie(w,E){let $=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",C));const P=E.source;let H=h.get(P);H===void 0&&(H={},h.set(P,H));const X=B(E);if(X!==w.__cacheKey){H[X]===void 0&&(H[X]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,$=!0),H[X].usedTimes++;const ce=H[w.__cacheKey];ce!==void 0&&(H[w.__cacheKey].usedTimes--,ce.usedTimes===0&&T(E)),w.__cacheKey=X,w.__webglTexture=H[X].texture}return $}function de(w,E,$){let P=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(P=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(P=t.TEXTURE_3D);const H=ie(w,E),X=E.source;n.bindTexture(P,w.__webglTexture,t.TEXTURE0+$);const ce=i.get(X);if(X.version!==ce.__version||H===!0){n.activeTexture(t.TEXTURE0+$);const k=ot.getPrimaries(ot.workingColorSpace),re=E.colorSpace===Un?null:ot.getPrimaries(E.colorSpace),me=E.colorSpace===Un||k===re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Se=u(E)&&g(E.image)===!1;let J=x(E.image,Se,!1,r.maxTextureSize);J=Ne(E,J);const De=g(J)||o,Re=s.convert(E.format,E.colorSpace);let Pe=s.convert(E.type),Te=M(E.internalFormat,Re,Pe,E.colorSpace,E.isVideoTexture);j(P,E,De);let ye;const He=E.mipmaps,Je=o&&E.isVideoTexture!==!0&&Te!==T_,ct=ce.__version===void 0||H===!0,We=R(E,J,De);if(E.isDepthTexture)Te=t.DEPTH_COMPONENT,o?E.type===Vi?Te=t.DEPTH_COMPONENT32F:E.type===Gi?Te=t.DEPTH_COMPONENT24:E.type===Cr?Te=t.DEPTH24_STENCIL8:Te=t.DEPTH_COMPONENT16:E.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Rr&&Te===t.DEPTH_COMPONENT&&E.type!==Ff&&E.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Gi,Pe=s.convert(E.type)),E.format===Bs&&Te===t.DEPTH_COMPONENT&&(Te=t.DEPTH_STENCIL,E.type!==Cr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Cr,Pe=s.convert(E.type))),ct&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Te,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Te,J.width,J.height,0,Re,Pe,null));else if(E.isDataTexture)if(He.length>0&&De){Je&&ct&&n.texStorage2D(t.TEXTURE_2D,We,Te,He[0].width,He[0].height);for(let fe=0,L=He.length;fe<L;fe++)ye=He[fe],Je?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ye.width,ye.height,Re,Pe,ye.data):n.texImage2D(t.TEXTURE_2D,fe,Te,ye.width,ye.height,0,Re,Pe,ye.data);E.generateMipmaps=!1}else Je?(ct&&n.texStorage2D(t.TEXTURE_2D,We,Te,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,Re,Pe,J.data)):n.texImage2D(t.TEXTURE_2D,0,Te,J.width,J.height,0,Re,Pe,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,Te,He[0].width,He[0].height,J.depth);for(let fe=0,L=He.length;fe<L;fe++)ye=He[fe],E.format!==Yn?Re!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,ye.width,ye.height,J.depth,Re,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,Te,ye.width,ye.height,J.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,ye.width,ye.height,J.depth,Re,Pe,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,Te,ye.width,ye.height,J.depth,0,Re,Pe,ye.data)}else{Je&&ct&&n.texStorage2D(t.TEXTURE_2D,We,Te,He[0].width,He[0].height);for(let fe=0,L=He.length;fe<L;fe++)ye=He[fe],E.format!==Yn?Re!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,ye.width,ye.height,Re,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,Te,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ye.width,ye.height,Re,Pe,ye.data):n.texImage2D(t.TEXTURE_2D,fe,Te,ye.width,ye.height,0,Re,Pe,ye.data)}else if(E.isDataArrayTexture)Je?(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,We,Te,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Re,Pe,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,Re,Pe,J.data);else if(E.isData3DTexture)Je?(ct&&n.texStorage3D(t.TEXTURE_3D,We,Te,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Re,Pe,J.data)):n.texImage3D(t.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,Re,Pe,J.data);else if(E.isFramebufferTexture){if(ct)if(Je)n.texStorage2D(t.TEXTURE_2D,We,Te,J.width,J.height);else{let fe=J.width,L=J.height;for(let ge=0;ge<We;ge++)n.texImage2D(t.TEXTURE_2D,ge,Te,fe,L,0,Re,Pe,null),fe>>=1,L>>=1}}else if(He.length>0&&De){Je&&ct&&n.texStorage2D(t.TEXTURE_2D,We,Te,He[0].width,He[0].height);for(let fe=0,L=He.length;fe<L;fe++)ye=He[fe],Je?n.texSubImage2D(t.TEXTURE_2D,fe,0,0,Re,Pe,ye):n.texImage2D(t.TEXTURE_2D,fe,Te,Re,Pe,ye);E.generateMipmaps=!1}else Je?(ct&&n.texStorage2D(t.TEXTURE_2D,We,Te,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Pe,J)):n.texImage2D(t.TEXTURE_2D,0,Te,Re,Pe,J);v(E,De)&&m(P),ce.__version=X.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function _e(w,E,$){if(E.image.length!==6)return;const P=ie(w,E),H=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+$);const X=i.get(H);if(H.version!==X.__version||P===!0){n.activeTexture(t.TEXTURE0+$);const ce=ot.getPrimaries(ot.workingColorSpace),k=E.colorSpace===Un?null:ot.getPrimaries(E.colorSpace),re=E.colorSpace===Un||ce===k?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const me=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,J=[];for(let fe=0;fe<6;fe++)!me&&!Se?J[fe]=x(E.image[fe],!1,!0,r.maxCubemapSize):J[fe]=Se?E.image[fe].image:E.image[fe],J[fe]=Ne(E,J[fe]);const De=J[0],Re=g(De)||o,Pe=s.convert(E.format,E.colorSpace),Te=s.convert(E.type),ye=M(E.internalFormat,Pe,Te,E.colorSpace),He=o&&E.isVideoTexture!==!0,Je=X.__version===void 0||P===!0;let ct=R(E,De,Re);j(t.TEXTURE_CUBE_MAP,E,Re);let We;if(me){He&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ct,ye,De.width,De.height);for(let fe=0;fe<6;fe++){We=J[fe].mipmaps;for(let L=0;L<We.length;L++){const ge=We[L];E.format!==Yn?Pe!==null?He?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,L,0,0,ge.width,ge.height,Pe,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,L,ye,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,L,0,0,ge.width,ge.height,Pe,Te,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,L,ye,ge.width,ge.height,0,Pe,Te,ge.data)}}}else{We=E.mipmaps,He&&Je&&(We.length>0&&ct++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ct,ye,J[0].width,J[0].height));for(let fe=0;fe<6;fe++)if(Se){He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,J[fe].width,J[fe].height,Pe,Te,J[fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ye,J[fe].width,J[fe].height,0,Pe,Te,J[fe].data);for(let L=0;L<We.length;L++){const ve=We[L].image[fe].image;He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,L+1,0,0,ve.width,ve.height,Pe,Te,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,L+1,ye,ve.width,ve.height,0,Pe,Te,ve.data)}}else{He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Pe,Te,J[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ye,Pe,Te,J[fe]);for(let L=0;L<We.length;L++){const ge=We[L];He?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,L+1,0,0,Pe,Te,ge.image[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,L+1,ye,Pe,Te,ge.image[fe])}}}v(E,Re)&&m(t.TEXTURE_CUBE_MAP),X.__version=H.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function xe(w,E,$,P,H,X){const ce=s.convert($.format,$.colorSpace),k=s.convert($.type),re=M($.internalFormat,ce,k,$.colorSpace);if(!i.get(E).__hasExternalTextures){const Se=Math.max(1,E.width>>X),J=Math.max(1,E.height>>X);H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?n.texImage3D(H,X,re,Se,J,E.depth,0,ce,k,null):n.texImage2D(H,X,re,Se,J,0,ce,k,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),he(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,P,H,i.get($).__webglTexture,0,Ce(E)):(H===t.TEXTURE_2D||H>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,P,H,i.get($).__webglTexture,X),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(w,E,$){if(t.bindRenderbuffer(t.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let P=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if($||he(E)){const H=E.depthTexture;H&&H.isDepthTexture&&(H.type===Vi?P=t.DEPTH_COMPONENT32F:H.type===Gi&&(P=t.DEPTH_COMPONENT24));const X=Ce(E);he(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,X,P,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,X,P,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,P,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){const P=Ce(E);$&&he(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,P,t.DEPTH24_STENCIL8,E.width,E.height):he(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,w)}else{const P=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let H=0;H<P.length;H++){const X=P[H],ce=s.convert(X.format,X.colorSpace),k=s.convert(X.type),re=M(X.internalFormat,ce,k,X.colorSpace),me=Ce(E);$&&he(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,re,E.width,E.height):he(E)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,re,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,re,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const P=i.get(E.depthTexture).__webglTexture,H=Ce(E);if(E.depthTexture.format===Rr)he(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,P,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,P,0);else if(E.depthTexture.format===Bs)he(E)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,P,0,H):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,P,0);else throw new Error("Unknown depthTexture format")}function Le(w){const E=i.get(w),$=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Oe(E.__webglFramebuffer,w)}else if($){E.__webglDepthbuffer=[];for(let P=0;P<6;P++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[P]),E.__webglDepthbuffer[P]=t.createRenderbuffer(),Fe(E.__webglDepthbuffer[P],w,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),Fe(E.__webglDepthbuffer,w,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(w,E,$){const P=i.get(w);E!==void 0&&xe(P.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&Le(w)}function z(w){const E=w.texture,$=i.get(w),P=i.get(E);w.addEventListener("dispose",U),w.isWebGLMultipleRenderTargets!==!0&&(P.__webglTexture===void 0&&(P.__webglTexture=t.createTexture()),P.__version=E.version,a.memory.textures++);const H=w.isWebGLCubeRenderTarget===!0,X=w.isWebGLMultipleRenderTargets===!0,ce=g(w)||o;if(H){$.__webglFramebuffer=[];for(let k=0;k<6;k++)if(o&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[k]=[];for(let re=0;re<E.mipmaps.length;re++)$.__webglFramebuffer[k][re]=t.createFramebuffer()}else $.__webglFramebuffer[k]=t.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let k=0;k<E.mipmaps.length;k++)$.__webglFramebuffer[k]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(X)if(r.drawBuffers){const k=w.texture;for(let re=0,me=k.length;re<me;re++){const Se=i.get(k[re]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&he(w)===!1){const k=X?E:[E];$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let re=0;re<k.length;re++){const me=k[re];$.__webglColorRenderbuffer[re]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[re]);const Se=s.convert(me.format,me.colorSpace),J=s.convert(me.type),De=M(me.internalFormat,Se,J,me.colorSpace,w.isXRRenderTarget===!0),Re=Ce(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,De,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+re,t.RENDERBUFFER,$.__webglColorRenderbuffer[re])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe($.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(H){n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture),j(t.TEXTURE_CUBE_MAP,E,ce);for(let k=0;k<6;k++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)xe($.__webglFramebuffer[k][re],w,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+k,re);else xe($.__webglFramebuffer[k],w,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);v(E,ce)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(X){const k=w.texture;for(let re=0,me=k.length;re<me;re++){const Se=k[re],J=i.get(Se);n.bindTexture(t.TEXTURE_2D,J.__webglTexture),j(t.TEXTURE_2D,Se,ce),xe($.__webglFramebuffer,w,Se,t.COLOR_ATTACHMENT0+re,t.TEXTURE_2D,0),v(Se,ce)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let k=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?k=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(k,P.__webglTexture),j(k,E,ce),o&&E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)xe($.__webglFramebuffer[re],w,E,t.COLOR_ATTACHMENT0,k,re);else xe($.__webglFramebuffer,w,E,t.COLOR_ATTACHMENT0,k,0);v(E,ce)&&m(k),n.unbindTexture()}w.depthBuffer&&Le(w)}function nt(w){const E=g(w)||o,$=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let P=0,H=$.length;P<H;P++){const X=$[P];if(v(X,E)){const ce=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,k=i.get(X).__webglTexture;n.bindTexture(ce,k),m(ce),n.unbindTexture()}}}function Me(w){if(o&&w.samples>0&&he(w)===!1){const E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],$=w.width,P=w.height;let H=t.COLOR_BUFFER_BIT;const X=[],ce=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=i.get(w),re=w.isWebGLMultipleRenderTargets===!0;if(re)for(let me=0;me<E.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,k.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,k.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,k.__webglFramebuffer);for(let me=0;me<E.length;me++){X.push(t.COLOR_ATTACHMENT0+me),w.depthBuffer&&X.push(ce);const Se=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(Se===!1&&(w.depthBuffer&&(H|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&(H|=t.STENCIL_BUFFER_BIT)),re&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,k.__webglColorRenderbuffer[me]),Se===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ce]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ce])),re){const J=i.get(E[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,J,0)}t.blitFramebuffer(0,0,$,P,0,0,$,P,H,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,X)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),re)for(let me=0;me<E.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,k.__webglColorRenderbuffer[me]);const Se=i.get(E[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,k.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,k.__webglMultisampledFramebuffer)}}function Ce(w){return Math.min(r.maxSamples,w.samples)}function he(w){const E=i.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Qe(w){const E=a.render.frame;f.get(w)!==E&&(f.set(w,E),w.update())}function Ne(w,E){const $=w.colorSpace,P=w.format,H=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Md||$!==Ai&&$!==Un&&(ot.getTransfer($)===dt?o===!1?e.has("EXT_sRGB")===!0&&P===Yn?(w.format=Md,w.minFilter=Dn,w.generateMipmaps=!1):E=R_.sRGBToLinear(E):(P!==Yn||H!==tr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),E}this.allocateTextureUnit=N,this.resetTextureUnits=se,this.setTexture2D=Y,this.setTexture2DArray=ne,this.setTexture3D=D,this.setTextureCube=O,this.rebindTextures=Ue,this.setupRenderTarget=z,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=he}function bb(t,e,n){const i=n.isWebGL2;function r(s,a=Un){let o;const l=ot.getTransfer(a);if(s===tr)return t.UNSIGNED_BYTE;if(s===y_)return t.UNSIGNED_SHORT_4_4_4_4;if(s===S_)return t.UNSIGNED_SHORT_5_5_5_1;if(s===lE)return t.BYTE;if(s===cE)return t.SHORT;if(s===Ff)return t.UNSIGNED_SHORT;if(s===x_)return t.INT;if(s===Gi)return t.UNSIGNED_INT;if(s===Vi)return t.FLOAT;if(s===Ha)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===uE)return t.ALPHA;if(s===Yn)return t.RGBA;if(s===dE)return t.LUMINANCE;if(s===fE)return t.LUMINANCE_ALPHA;if(s===Rr)return t.DEPTH_COMPONENT;if(s===Bs)return t.DEPTH_STENCIL;if(s===Md)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===hE)return t.RED;if(s===E_)return t.RED_INTEGER;if(s===pE)return t.RG;if(s===M_)return t.RG_INTEGER;if(s===w_)return t.RGBA_INTEGER;if(s===Hc||s===Gc||s===Vc||s===Wc)if(l===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Hc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Vc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Hc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Vc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vp||s===_p||s===xp||s===yp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===vp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_p)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===T_)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sp||s===Ep)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Sp)return l===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ep)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Mp||s===wp||s===Tp||s===bp||s===Ap||s===Cp||s===Rp||s===Pp||s===Lp||s===Np||s===Dp||s===Up||s===Ip||s===Fp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Mp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Tp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ap)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Cp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Np)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Up)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ip)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fp)return l===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jc||s===Op||s===kp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===jc)return l===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Op)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===kp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mE||s===Bp||s===zp||s===Hp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===jc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Bp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class Ab extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wi extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cb={type:"move"};class mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),u=this._getHandJoint(c,x);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=f.position.distanceTo(d.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Wi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Rb extends Xs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,d=null,h=null,p=null,_=null;const x=n.getContextAttributes();let g=null,u=null;const v=[],m=[],M=new tt;let R=null;const b=new Sn;b.layers.enable(1),b.viewport=new zt;const C=new Sn;C.layers.enable(2),C.viewport=new zt;const U=[b,C],S=new Ab;S.layers.enable(1),S.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=v[j];return ie===void 0&&(ie=new mu,v[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=v[j];return ie===void 0&&(ie=new mu,v[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=v[j];return ie===void 0&&(ie=new mu,v[j]=ie),ie.getHandSpace()};function q(j){const ie=m.indexOf(j.inputSource);if(ie===-1)return;const de=v[ie];de!==void 0&&(de.update(j.inputSource,j.frame,c||a),de.dispatchEvent({type:j.type,data:j.inputSource}))}function se(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",se),r.removeEventListener("inputsourceschange",N);for(let j=0;j<v.length;j++){const ie=m[j];ie!==null&&(m[j]=null,v[j].disconnect(ie))}T=null,I=null,e.setRenderTarget(g),p=null,h=null,d=null,r=null,u=null,ae.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(M.width,M.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",se),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ie={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),u=new Fr(p.framebufferWidth,p.framebufferHeight,{format:Yn,type:tr,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ie=null,de=null,_e=null;x.depth&&(_e=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=x.stencil?Bs:Rr,de=x.stencil?Cr:Gi);const xe={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new Fr(h.textureWidth,h.textureHeight,{format:Yn,type:tr,depthTexture:new G_(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Fe=e.properties.get(u);Fe.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),ae.setContext(r),ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function N(j){for(let ie=0;ie<j.removed.length;ie++){const de=j.removed[ie],_e=m.indexOf(de);_e>=0&&(m[_e]=null,v[_e].disconnect(de))}for(let ie=0;ie<j.added.length;ie++){const de=j.added[ie];let _e=m.indexOf(de);if(_e===-1){for(let Fe=0;Fe<v.length;Fe++)if(Fe>=m.length){m.push(de),_e=Fe;break}else if(m[Fe]===null){m[Fe]=de,_e=Fe;break}if(_e===-1)break}const xe=v[_e];xe&&xe.connect(de)}}const B=new V,Y=new V;function ne(j,ie,de){B.setFromMatrixPosition(ie.matrixWorld),Y.setFromMatrixPosition(de.matrixWorld);const _e=B.distanceTo(Y),xe=ie.projectionMatrix.elements,Fe=de.projectionMatrix.elements,Oe=xe[14]/(xe[10]-1),Le=xe[14]/(xe[10]+1),Ue=(xe[9]+1)/xe[5],z=(xe[9]-1)/xe[5],nt=(xe[8]-1)/xe[0],Me=(Fe[8]+1)/Fe[0],Ce=Oe*nt,he=Oe*Me,Qe=_e/(-nt+Me),Ne=Qe*-nt;ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ne),j.translateZ(Qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const w=Oe+Qe,E=Le+Qe,$=Ce-Ne,P=he+(_e-Ne),H=Ue*Le/E*w,X=z*Le/E*w;j.projectionMatrix.makePerspective($,P,H,X,w,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function D(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.near=C.near=b.near=j.near,S.far=C.far=b.far=j.far,(T!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),T=S.near,I=S.far);const ie=j.parent,de=S.cameras;D(S,ie);for(let _e=0;_e<de.length;_e++)D(de[_e],ie);de.length===2?ne(S,b,C):S.projectionMatrix.copy(b.projectionMatrix),O(j,S,ie)};function O(j,ie,de){de===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=wd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let W=null;function ee(j,ie){if(f=ie.getViewerPose(c||a),_=ie,f!==null){const de=f.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let _e=!1;de.length!==S.cameras.length&&(S.cameras.length=0,_e=!0);for(let xe=0;xe<de.length;xe++){const Fe=de[xe];let Oe=null;if(p!==null)Oe=p.getViewport(Fe);else{const Ue=d.getViewSubImage(h,Fe);Oe=Ue.viewport,xe===0&&(e.setRenderTargetTextures(u,Ue.colorTexture,h.ignoreDepthValues?void 0:Ue.depthStencilTexture),e.setRenderTarget(u))}let Le=U[xe];Le===void 0&&(Le=new Sn,Le.layers.enable(xe),Le.viewport=new zt,U[xe]=Le),Le.matrix.fromArray(Fe.transform.matrix),Le.matrix.decompose(Le.position,Le.quaternion,Le.scale),Le.projectionMatrix.fromArray(Fe.projectionMatrix),Le.projectionMatrixInverse.copy(Le.projectionMatrix).invert(),Le.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),xe===0&&(S.matrix.copy(Le.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),_e===!0&&S.cameras.push(Le)}}for(let de=0;de<v.length;de++){const _e=m[de],xe=v[de];_e!==null&&xe!==void 0&&xe.update(_e,ie,c||a)}W&&W(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const ae=new z_;ae.setAnimationLoop(ee),this.setAnimationLoop=function(j){W=j},this.dispose=function(){}}}function Pb(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,O_(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,v,m,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(g,u):u.isMeshToonMaterial?(s(g,u),d(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u)):u.isMeshStandardMaterial?(s(g,u),h(g,u),u.isMeshPhysicalMaterial&&p(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),x(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,v,m):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===pn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===pn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const v=e.get(u).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap){g.lightMap.value=u.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=u.lightMapIntensity*m,n(u.lightMap,g.lightMapTransform)}u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,v,m){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*v,g.scale.value=m*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function d(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function h(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),e.get(u).envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function p(g,u,v){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&g.clearcoatNormalScale.value.negate())),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function x(g,u){const v=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Lb(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,m){const M=m.program;i.uniformBlockBinding(v,M)}function c(v,m){let M=r[v.id];M===void 0&&(_(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",g));const R=m.program;i.updateUBOMapping(v,R);const b=e.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function f(v){const m=d();v.__bindingPointIndex=m;const M=t.createBuffer(),R=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,M),M}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const m=r[v.id],M=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let b=0,C=M.length;b<C;b++){const U=Array.isArray(M[b])?M[b]:[M[b]];for(let S=0,T=U.length;S<T;S++){const I=U[S];if(p(I,b,S,R)===!0){const q=I.__offset,se=Array.isArray(I.value)?I.value:[I.value];let N=0;for(let B=0;B<se.length;B++){const Y=se[B],ne=x(Y);typeof Y=="number"||typeof Y=="boolean"?(I.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,q+N,I.__data)):Y.isMatrix3?(I.__data[0]=Y.elements[0],I.__data[1]=Y.elements[1],I.__data[2]=Y.elements[2],I.__data[3]=0,I.__data[4]=Y.elements[3],I.__data[5]=Y.elements[4],I.__data[6]=Y.elements[5],I.__data[7]=0,I.__data[8]=Y.elements[6],I.__data[9]=Y.elements[7],I.__data[10]=Y.elements[8],I.__data[11]=0):(Y.toArray(I.__data,N),N+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,m,M,R){const b=v.value,C=m+"_"+M;if(R[C]===void 0)return typeof b=="number"||typeof b=="boolean"?R[C]=b:R[C]=b.clone(),!0;{const U=R[C];if(typeof b=="number"||typeof b=="boolean"){if(U!==b)return R[C]=b,!0}else if(U.equals(b)===!1)return U.copy(b),!0}return!1}function _(v){const m=v.uniforms;let M=0;const R=16;for(let C=0,U=m.length;C<U;C++){const S=Array.isArray(m[C])?m[C]:[m[C]];for(let T=0,I=S.length;T<I;T++){const q=S[T],se=Array.isArray(q.value)?q.value:[q.value];for(let N=0,B=se.length;N<B;N++){const Y=se[N],ne=x(Y),D=M%R;D!==0&&R-D<ne.boundary&&(M+=R-D),q.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=M,M+=ne.storage}}}const b=M%R;return b>0&&(M+=R-b),v.__size=M,v.__cache={},this}function x(v){const m={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(m.boundary=4,m.storage=4):v.isVector2?(m.boundary=8,m.storage=8):v.isVector3||v.isColor?(m.boundary=16,m.storage=12):v.isVector4?(m.boundary=16,m.storage=16):v.isMatrix3?(m.boundary=48,m.storage=48):v.isMatrix4?(m.boundary=64,m.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),m}function g(v){const m=v.target;m.removeEventListener("dispose",g);const M=a.indexOf(m.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Vf{constructor(e={}){const{canvas:n=AE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=a;const p=new Uint32Array(4),_=new Int32Array(4);let x=null,g=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vt,this._useLegacyLights=!1,this.toneMapping=er,this.toneMappingExposure=1;const m=this;let M=!1,R=0,b=0,C=null,U=-1,S=null;const T=new zt,I=new zt;let q=null;const se=new Xe(0);let N=0,B=n.width,Y=n.height,ne=1,D=null,O=null;const W=new zt(0,0,B,Y),ee=new zt(0,0,B,Y);let ae=!1;const j=new zf;let ie=!1,de=!1,_e=null;const xe=new Et,Fe=new tt,Oe=new V,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return C===null?ne:1}let z=i;function nt(A,G){for(let Z=0;Z<A.length;Z++){const Q=A[Z],K=n.getContext(Q,G);if(K!==null)return K}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uf}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ge,!1),z===null){const G=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&G.shift(),z=nt(G,A),z===null)throw nt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Me,Ce,he,Qe,Ne,w,E,$,P,H,X,ce,k,re,me,Se,J,De,Re,Pe,Te,ye,He,Je;function ct(){Me=new HT(z),Ce=new IT(z,Me,e),Me.init(Ce),ye=new bb(z,Me,Ce),he=new wb(z,Me,Ce),Qe=new WT(z),Ne=new ub,w=new Tb(z,Me,he,Ne,Ce,ye,Qe),E=new OT(m),$=new zT(m),P=new QE(z,Ce),He=new DT(z,Me,P,Ce),H=new GT(z,P,Qe,He),X=new qT(z,H,P,Qe),Re=new $T(z,Ce,w),Se=new FT(Ne),ce=new cb(m,E,$,Me,Ce,He,Se),k=new Pb(m,Ne),re=new fb,me=new _b(Me,Ce),De=new NT(m,E,$,he,X,h,l),J=new Mb(m,X,Ce),Je=new Lb(z,Qe,Ce,he),Pe=new UT(z,Me,Qe,Ce),Te=new VT(z,Me,Qe,Ce),Qe.programs=ce.programs,m.capabilities=Ce,m.extensions=Me,m.properties=Ne,m.renderLists=re,m.shadowMap=J,m.state=he,m.info=Qe}ct();const We=new Rb(m,z);this.xr=We,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(B,Y,!1))},this.getSize=function(A){return A.set(B,Y)},this.setSize=function(A,G,Z=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=A,Y=G,n.width=Math.floor(A*ne),n.height=Math.floor(G*ne),Z===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(B*ne,Y*ne).floor()},this.setDrawingBufferSize=function(A,G,Z){B=A,Y=G,ne=Z,n.width=Math.floor(A*Z),n.height=Math.floor(G*Z),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(W)},this.setViewport=function(A,G,Z,Q){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,G,Z,Q),he.viewport(T.copy(W).multiplyScalar(ne).floor())},this.getScissor=function(A){return A.copy(ee)},this.setScissor=function(A,G,Z,Q){A.isVector4?ee.set(A.x,A.y,A.z,A.w):ee.set(A,G,Z,Q),he.scissor(I.copy(ee).multiplyScalar(ne).floor())},this.getScissorTest=function(){return ae},this.setScissorTest=function(A){he.setScissorTest(ae=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){O=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(A=!0,G=!0,Z=!0){let Q=0;if(A){let K=!1;if(C!==null){const Ee=C.texture.format;K=Ee===w_||Ee===M_||Ee===E_}if(K){const Ee=C.texture.type,Ie=Ee===tr||Ee===Gi||Ee===Ff||Ee===Cr||Ee===y_||Ee===S_,ze=De.getClearColor(),Ge=De.getClearAlpha(),qe=ze.r,Ve=ze.g,je=ze.b;Ie?(p[0]=qe,p[1]=Ve,p[2]=je,p[3]=Ge,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=qe,_[1]=Ve,_[2]=je,_[3]=Ge,z.clearBufferiv(z.COLOR,0,_))}else Q|=z.COLOR_BUFFER_BIT}G&&(Q|=z.DEPTH_BUFFER_BIT),Z&&(Q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),re.dispose(),me.dispose(),Ne.dispose(),E.dispose(),$.dispose(),X.dispose(),He.dispose(),Je.dispose(),ce.dispose(),We.dispose(),We.removeEventListener("sessionstart",F),We.removeEventListener("sessionend",te),_e&&(_e.dispose(),_e=null),oe.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const A=Qe.autoReset,G=J.enabled,Z=J.autoUpdate,Q=J.needsUpdate,K=J.type;ct(),Qe.autoReset=A,J.enabled=G,J.autoUpdate=Z,J.needsUpdate=Q,J.type=K}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ve(A){const G=A.target;G.removeEventListener("dispose",ve),Be(G)}function Be(A){ke(A),Ne.remove(A)}function ke(A){const G=Ne.get(A).programs;G!==void 0&&(G.forEach(function(Z){ce.releaseProgram(Z)}),A.isShaderMaterial&&ce.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Z,Q,K,Ee){G===null&&(G=Le);const Ie=K.isMesh&&K.matrixWorld.determinant()<0,ze=Ri(A,G,Z,Q,K);he.setMaterial(Q,Ie);let Ge=Z.index,qe=1;if(Q.wireframe===!0){if(Ge=H.getWireframeAttribute(Z),Ge===void 0)return;qe=2}const Ve=Z.drawRange,je=Z.attributes.position;let wt=Ve.start*qe,gn=(Ve.start+Ve.count)*qe;Ee!==null&&(wt=Math.max(wt,Ee.start*qe),gn=Math.min(gn,(Ee.start+Ee.count)*qe)),Ge!==null?(wt=Math.max(wt,0),gn=Math.min(gn,Ge.count)):je!=null&&(wt=Math.max(wt,0),gn=Math.min(gn,je.count));const Ot=gn-wt;if(Ot<0||Ot===1/0)return;He.setup(K,Q,ze,Z,Ge);let li,gt=Pe;if(Ge!==null&&(li=P.get(Ge),gt=Te,gt.setIndex(li)),K.isMesh)Q.wireframe===!0?(he.setLineWidth(Q.wireframeLinewidth*Ue()),gt.setMode(z.LINES)):gt.setMode(z.TRIANGLES);else if(K.isLine){let Ye=Q.linewidth;Ye===void 0&&(Ye=1),he.setLineWidth(Ye*Ue()),K.isLineSegments?gt.setMode(z.LINES):K.isLineLoop?gt.setMode(z.LINE_LOOP):gt.setMode(z.LINE_STRIP)}else K.isPoints?gt.setMode(z.POINTS):K.isSprite&&gt.setMode(z.TRIANGLES);if(K.isBatchedMesh)gt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)gt.renderInstances(wt,Ot,K.count);else if(Z.isInstancedBufferGeometry){const Ye=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,cc=Math.min(Z.instanceCount,Ye);gt.renderInstances(wt,Ot,cc)}else gt.render(wt,Ot)};function it(A,G,Z){A.transparent===!0&&A.side===_i&&A.forceSinglePass===!1?(A.side=pn,A.needsUpdate=!0,Cn(A,G,Z),A.side=sr,A.needsUpdate=!0,Cn(A,G,Z),A.side=_i):Cn(A,G,Z)}this.compile=function(A,G,Z=null){Z===null&&(Z=A),g=me.get(Z),g.init(),v.push(g),Z.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),A!==Z&&A.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(g.pushLight(K),K.castShadow&&g.pushShadow(K))}),g.setupLights(m._useLegacyLights);const Q=new Set;return A.traverse(function(K){const Ee=K.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const ze=Ee[Ie];it(ze,Z,K),Q.add(ze)}else it(Ee,Z,K),Q.add(Ee)}),v.pop(),g=null,Q},this.compileAsync=function(A,G,Z=null){const Q=this.compile(A,G,Z);return new Promise(K=>{function Ee(){if(Q.forEach(function(Ie){Ne.get(Ie).currentProgram.isReady()&&Q.delete(Ie)}),Q.size===0){K(A);return}setTimeout(Ee,10)}Me.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let st=null;function bt(A){st&&st(A)}function F(){oe.stop()}function te(){oe.start()}const oe=new z_;oe.setAnimationLoop(bt),typeof self<"u"&&oe.setContext(self),this.setAnimationLoop=function(A){st=A,We.setAnimationLoop(A),A===null?oe.stop():oe.start()},We.addEventListener("sessionstart",F),We.addEventListener("sessionend",te),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(G),G=We.getCamera()),A.isScene===!0&&A.onBeforeRender(m,A,G,C),g=me.get(A,v.length),g.init(),v.push(g),xe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(xe),de=this.localClippingEnabled,ie=Se.init(this.clippingPlanes,de),x=re.get(A,u.length),x.init(),u.push(x),Ae(A,G,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(D,O),this.info.render.frame++,ie===!0&&Se.beginShadows();const Z=g.state.shadowsArray;if(J.render(Z,A,G),ie===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),De.render(x,A),g.setupLights(m._useLegacyLights),G.isArrayCamera){const Q=G.cameras;for(let K=0,Ee=Q.length;K<Ee;K++){const Ie=Q[K];at(x,A,Ie,Ie.viewport)}}else at(x,A,G);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(m,A,G),He.resetDefaultState(),U=-1,S=null,v.pop(),v.length>0?g=v[v.length-1]:g=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Ae(A,G,Z,Q){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||j.intersectsSprite(A)){Q&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const Ie=X.update(A),ze=A.material;ze.visible&&x.push(A,Ie,ze,Z,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||j.intersectsObject(A))){const Ie=X.update(A),ze=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Oe.copy(Ie.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(ze)){const Ge=Ie.groups;for(let qe=0,Ve=Ge.length;qe<Ve;qe++){const je=Ge[qe],wt=ze[je.materialIndex];wt&&wt.visible&&x.push(A,Ie,wt,Z,Oe.z,je)}}else ze.visible&&x.push(A,Ie,ze,Z,Oe.z,null)}}const Ee=A.children;for(let Ie=0,ze=Ee.length;Ie<ze;Ie++)Ae(Ee[Ie],G,Z,Q)}function at(A,G,Z,Q){const K=A.opaque,Ee=A.transmissive,Ie=A.transparent;g.setupLightsView(Z),ie===!0&&Se.setGlobalState(m.clippingPlanes,Z),Ee.length>0&&At(K,Ee,G,Z),Q&&he.viewport(T.copy(Q)),K.length>0&&Mt(K,G,Z),Ee.length>0&&Mt(Ee,G,Z),Ie.length>0&&Mt(Ie,G,Z),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function At(A,G,Z,Q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;const Ee=Ce.isWebGL2;_e===null&&(_e=new Fr(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Ha:tr,minFilter:za,samples:Ee?4:0})),m.getDrawingBufferSize(Fe),Ee?_e.setSize(Fe.x,Fe.y):_e.setSize(Td(Fe.x),Td(Fe.y));const Ie=m.getRenderTarget();m.setRenderTarget(_e),m.getClearColor(se),N=m.getClearAlpha(),N<1&&m.setClearColor(16777215,.5),m.clear();const ze=m.toneMapping;m.toneMapping=er,Mt(A,Z,Q),w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e);let Ge=!1;for(let qe=0,Ve=G.length;qe<Ve;qe++){const je=G[qe],wt=je.object,gn=je.geometry,Ot=je.material,li=je.group;if(Ot.side===_i&&wt.layers.test(Q.layers)){const gt=Ot.side;Ot.side=pn,Ot.needsUpdate=!0,ht(wt,Z,Q,gn,Ot,li),Ot.side=gt,Ot.needsUpdate=!0,Ge=!0}}Ge===!0&&(w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e)),m.setRenderTarget(Ie),m.setClearColor(se,N),m.toneMapping=ze}function Mt(A,G,Z){const Q=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Ee=A.length;K<Ee;K++){const Ie=A[K],ze=Ie.object,Ge=Ie.geometry,qe=Q===null?Ie.material:Q,Ve=Ie.group;ze.layers.test(Z.layers)&&ht(ze,G,Z,Ge,qe,Ve)}}function ht(A,G,Z,Q,K,Ee){A.onBeforeRender(m,G,Z,Q,K,Ee),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(m,G,Z,Q,A,Ee),K.transparent===!0&&K.side===_i&&K.forceSinglePass===!1?(K.side=pn,K.needsUpdate=!0,m.renderBufferDirect(Z,G,Q,K,A,Ee),K.side=sr,K.needsUpdate=!0,m.renderBufferDirect(Z,G,Q,K,A,Ee),K.side=_i):m.renderBufferDirect(Z,G,Q,K,A,Ee),A.onAfterRender(m,G,Z,Q,K,Ee)}function Cn(A,G,Z){G.isScene!==!0&&(G=Le);const Q=Ne.get(A),K=g.state.lights,Ee=g.state.shadowsArray,Ie=K.state.version,ze=ce.getParameters(A,K.state,Ee,G,Z),Ge=ce.getProgramCacheKey(ze);let qe=Q.programs;Q.environment=A.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(A.isMeshStandardMaterial?$:E).get(A.envMap||Q.environment),qe===void 0&&(A.addEventListener("dispose",ve),qe=new Map,Q.programs=qe);let Ve=qe.get(Ge);if(Ve!==void 0){if(Q.currentProgram===Ve&&Q.lightsStateVersion===Ie)return Qa(A,ze),Ve}else ze.uniforms=ce.getUniforms(A),A.onBuild(Z,ze,m),A.onBeforeCompile(ze,m),Ve=ce.acquireProgram(ze,Ge),qe.set(Ge,Ve),Q.uniforms=ze.uniforms;const je=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Se.uniform),Qa(A,ze),Q.needsLights=lc(A),Q.lightsStateVersion=Ie,Q.needsLights&&(je.ambientLightColor.value=K.state.ambient,je.lightProbe.value=K.state.probe,je.directionalLights.value=K.state.directional,je.directionalLightShadows.value=K.state.directionalShadow,je.spotLights.value=K.state.spot,je.spotLightShadows.value=K.state.spotShadow,je.rectAreaLights.value=K.state.rectArea,je.ltc_1.value=K.state.rectAreaLTC1,je.ltc_2.value=K.state.rectAreaLTC2,je.pointLights.value=K.state.point,je.pointLightShadows.value=K.state.pointShadow,je.hemisphereLights.value=K.state.hemi,je.directionalShadowMap.value=K.state.directionalShadowMap,je.directionalShadowMatrix.value=K.state.directionalShadowMatrix,je.spotShadowMap.value=K.state.spotShadowMap,je.spotLightMatrix.value=K.state.spotLightMatrix,je.spotLightMap.value=K.state.spotLightMap,je.pointShadowMap.value=K.state.pointShadowMap,je.pointShadowMatrix.value=K.state.pointShadowMatrix),Q.currentProgram=Ve,Q.uniformsList=null,Ve}function qs(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=nl.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Qa(A,G){const Z=Ne.get(A);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Ri(A,G,Z,Q,K){G.isScene!==!0&&(G=Le),w.resetTextureUnits();const Ee=G.fog,Ie=Q.isMeshStandardMaterial?G.environment:null,ze=C===null?m.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ai,Ge=(Q.isMeshStandardMaterial?$:E).get(Q.envMap||Ie),qe=Q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Ve=!!Z.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),je=!!Z.morphAttributes.position,wt=!!Z.morphAttributes.normal,gn=!!Z.morphAttributes.color;let Ot=er;Q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ot=m.toneMapping);const li=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,gt=li!==void 0?li.length:0,Ye=Ne.get(Q),cc=g.state.lights;if(ie===!0&&(de===!0||A!==S)){const Rn=A===S&&Q.id===U;Se.setState(Q,A,Rn)}let yt=!1;Q.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==cc.state.version||Ye.outputColorSpace!==ze||K.isBatchedMesh&&Ye.batching===!1||!K.isBatchedMesh&&Ye.batching===!0||K.isInstancedMesh&&Ye.instancing===!1||!K.isInstancedMesh&&Ye.instancing===!0||K.isSkinnedMesh&&Ye.skinning===!1||!K.isSkinnedMesh&&Ye.skinning===!0||K.isInstancedMesh&&Ye.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ye.instancingColor===!1&&K.instanceColor!==null||Ye.envMap!==Ge||Q.fog===!0&&Ye.fog!==Ee||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Se.numPlanes||Ye.numIntersection!==Se.numIntersection)||Ye.vertexAlphas!==qe||Ye.vertexTangents!==Ve||Ye.morphTargets!==je||Ye.morphNormals!==wt||Ye.morphColors!==gn||Ye.toneMapping!==Ot||Ce.isWebGL2===!0&&Ye.morphTargetsCount!==gt)&&(yt=!0):(yt=!0,Ye.__version=Q.version);let dr=Ye.currentProgram;yt===!0&&(dr=Cn(Q,G,K));let $f=!1,Ys=!1,uc=!1;const Xt=dr.getUniforms(),fr=Ye.uniforms;if(he.useProgram(dr.program)&&($f=!0,Ys=!0,uc=!0),Q.id!==U&&(U=Q.id,Ys=!0),$f||S!==A){Xt.setValue(z,"projectionMatrix",A.projectionMatrix),Xt.setValue(z,"viewMatrix",A.matrixWorldInverse);const Rn=Xt.map.cameraPosition;Rn!==void 0&&Rn.setValue(z,Oe.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&Xt.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Xt.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Ys=!0,uc=!0)}if(K.isSkinnedMesh){Xt.setOptional(z,K,"bindMatrix"),Xt.setOptional(z,K,"bindMatrixInverse");const Rn=K.skeleton;Rn&&(Ce.floatVertexTextures?(Rn.boneTexture===null&&Rn.computeBoneTexture(),Xt.setValue(z,"boneTexture",Rn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}K.isBatchedMesh&&(Xt.setOptional(z,K,"batchingTexture"),Xt.setValue(z,"batchingTexture",K._matricesTexture,w));const dc=Z.morphAttributes;if((dc.position!==void 0||dc.normal!==void 0||dc.color!==void 0&&Ce.isWebGL2===!0)&&Re.update(K,Z,dr),(Ys||Ye.receiveShadow!==K.receiveShadow)&&(Ye.receiveShadow=K.receiveShadow,Xt.setValue(z,"receiveShadow",K.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(fr.envMap.value=Ge,fr.flipEnvMap.value=Ge.isCubeTexture&&Ge.isRenderTargetTexture===!1?-1:1),Ys&&(Xt.setValue(z,"toneMappingExposure",m.toneMappingExposure),Ye.needsLights&&oc(fr,uc),Ee&&Q.fog===!0&&k.refreshFogUniforms(fr,Ee),k.refreshMaterialUniforms(fr,Q,ne,Y,_e),nl.upload(z,qs(Ye),fr,w)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(nl.upload(z,qs(Ye),fr,w),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Xt.setValue(z,"center",K.center),Xt.setValue(z,"modelViewMatrix",K.modelViewMatrix),Xt.setValue(z,"normalMatrix",K.normalMatrix),Xt.setValue(z,"modelMatrix",K.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Rn=Q.uniformsGroups;for(let fc=0,gx=Rn.length;fc<gx;fc++)if(Ce.isWebGL2){const qf=Rn[fc];Je.update(qf,dr),Je.bind(qf,dr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return dr}function oc(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function lc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,G,Z){Ne.get(A.texture).__webglTexture=G,Ne.get(A.depthTexture).__webglTexture=Z;const Q=Ne.get(A);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=Z===void 0,Q.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,G){const Z=Ne.get(A);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,Z=0){C=A,R=G,b=Z;let Q=!0,K=null,Ee=!1,Ie=!1;if(A){const Ge=Ne.get(A);Ge.__useDefaultFramebuffer!==void 0?(he.bindFramebuffer(z.FRAMEBUFFER,null),Q=!1):Ge.__webglFramebuffer===void 0?w.setupRenderTarget(A):Ge.__hasExternalTextures&&w.rebindTextures(A,Ne.get(A.texture).__webglTexture,Ne.get(A.depthTexture).__webglTexture);const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ie=!0);const Ve=Ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[G])?K=Ve[G][Z]:K=Ve[G],Ee=!0):Ce.isWebGL2&&A.samples>0&&w.useMultisampledRTT(A)===!1?K=Ne.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?K=Ve[Z]:K=Ve,T.copy(A.viewport),I.copy(A.scissor),q=A.scissorTest}else T.copy(W).multiplyScalar(ne).floor(),I.copy(ee).multiplyScalar(ne).floor(),q=ae;if(he.bindFramebuffer(z.FRAMEBUFFER,K)&&Ce.drawBuffers&&Q&&he.drawBuffers(A,K),he.viewport(T),he.scissor(I),he.setScissorTest(q),Ee){const Ge=Ne.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ge.__webglTexture,Z)}else if(Ie){const Ge=Ne.get(A.texture),qe=G||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.__webglTexture,Z||0,qe)}U=-1},this.readRenderTargetPixels=function(A,G,Z,Q,K,Ee,Ie){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){he.bindFramebuffer(z.FRAMEBUFFER,ze);try{const Ge=A.texture,qe=Ge.format,Ve=Ge.type;if(qe!==Yn&&ye.convert(qe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Ve===Ha&&(Me.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ve!==tr&&ye.convert(Ve)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ve===Vi&&(Ce.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-Q&&Z>=0&&Z<=A.height-K&&z.readPixels(G,Z,Q,K,ye.convert(qe),ye.convert(Ve),Ee)}finally{const Ge=C!==null?Ne.get(C).__webglFramebuffer:null;he.bindFramebuffer(z.FRAMEBUFFER,Ge)}}},this.copyFramebufferToTexture=function(A,G,Z=0){const Q=Math.pow(2,-Z),K=Math.floor(G.image.width*Q),Ee=Math.floor(G.image.height*Q);w.setTexture2D(G,0),z.copyTexSubImage2D(z.TEXTURE_2D,Z,0,0,A.x,A.y,K,Ee),he.unbindTexture()},this.copyTextureToTexture=function(A,G,Z,Q=0){const K=G.image.width,Ee=G.image.height,Ie=ye.convert(Z.format),ze=ye.convert(Z.type);w.setTexture2D(Z,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Z.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Z.unpackAlignment),G.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Q,A.x,A.y,K,Ee,Ie,ze,G.image.data):G.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Q,A.x,A.y,G.mipmaps[0].width,G.mipmaps[0].height,Ie,G.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,Q,A.x,A.y,Ie,ze,G.image),Q===0&&Z.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),he.unbindTexture()},this.copyTextureToTexture3D=function(A,G,Z,Q,K=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=A.max.x-A.min.x+1,Ie=A.max.y-A.min.y+1,ze=A.max.z-A.min.z+1,Ge=ye.convert(Q.format),qe=ye.convert(Q.type);let Ve;if(Q.isData3DTexture)w.setTexture3D(Q,0),Ve=z.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)w.setTexture2DArray(Q,0),Ve=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,Q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,Q.unpackAlignment);const je=z.getParameter(z.UNPACK_ROW_LENGTH),wt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),gn=z.getParameter(z.UNPACK_SKIP_PIXELS),Ot=z.getParameter(z.UNPACK_SKIP_ROWS),li=z.getParameter(z.UNPACK_SKIP_IMAGES),gt=Z.isCompressedTexture?Z.mipmaps[K]:Z.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,gt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),Z.isDataTexture||Z.isData3DTexture?z.texSubImage3D(Ve,K,G.x,G.y,G.z,Ee,Ie,ze,Ge,qe,gt.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ve,K,G.x,G.y,G.z,Ee,Ie,ze,Ge,gt.data)):z.texSubImage3D(Ve,K,G.x,G.y,G.z,Ee,Ie,ze,Ge,qe,gt),z.pixelStorei(z.UNPACK_ROW_LENGTH,je),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,wt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,gn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Ot),z.pixelStorei(z.UNPACK_SKIP_IMAGES,li),K===0&&Q.generateMipmaps&&z.generateMipmap(Ve),he.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),he.unbindTexture()},this.resetState=function(){R=0,b=0,C=null,he.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===kf?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===nc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Vt?Pr:b_}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Pr?Vt:Ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Nb extends Vf{}Nb.prototype.isWebGL1Renderer=!0;class q_ extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class Db extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pm=new V,Lm=new V,Nm=new Et,gu=new Bf,Bo=new Ka;class Ub extends Ut{constructor(e=new ei,n=new Db){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Pm.fromBufferAttribute(n,r-1),Lm.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Pm.distanceTo(Lm);e.setAttribute("lineDistance",new Qn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=s,e.ray.intersectsSphere(Bo)===!1)return;Nm.copy(r).invert(),gu.copy(e.ray).applyMatrix4(Nm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new V,f=new V,d=new V,h=new V,p=this.isLineSegments?2:1,_=i.index,g=i.attributes.position;if(_!==null){const u=Math.max(0,a.start),v=Math.min(_.count,a.start+a.count);for(let m=u,M=v-1;m<M;m+=p){const R=_.getX(m),b=_.getX(m+1);if(c.fromBufferAttribute(g,R),f.fromBufferAttribute(g,b),gu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const U=e.ray.origin.distanceTo(h);U<e.near||U>e.far||n.push({distance:U,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let m=u,M=v-1;m<M;m+=p){if(c.fromBufferAttribute(g,m),f.fromBufferAttribute(g,m+1),gu.distanceSqToSegment(c,f,h,d)>l)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||n.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Dm=new V,Um=new V;class nC extends Ub{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Dm.fromBufferAttribute(n,r),Um.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Dm.distanceTo(Um);e.setAttribute("lineDistance",new Qn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ib extends ur{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Im=new Et,Ad=new Bf,zo=new Ka,Ho=new V;class iC extends Ut{constructor(e=new ei,n=new Ib){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zo.copy(i.boundingSphere),zo.applyMatrix4(r),zo.radius+=s,e.ray.intersectsSphere(zo)===!1)return;Im.copy(r).invert(),Ad.copy(e.ray).applyMatrix4(Im);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let _=h,x=p;_<x;_++){const g=c.getX(_);Ho.fromBufferAttribute(d,g),Fm(Ho,g,l,r,e,n,this)}}else{const h=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let _=h,x=p;_<x;_++)Ho.fromBufferAttribute(d,_),Fm(Ho,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fm(t,e,n,i,r,s,a){const o=Ad.distanceSqToPoint(t);if(o<n){const l=new V;Ad.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Wf extends ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Of,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rC extends ur{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Of,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=If,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Dl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Fb{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(f){o++,s===!1&&r.onStart!==void 0&&r.onStart(f,a,o),s=!0},this.itemEnd=function(f){a++,r.onProgress!==void 0&&r.onProgress(f,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,d){return c.push(f,d),this},this.removeHandler=function(f){const d=c.indexOf(f);return d!==-1&&c.splice(d,2),this},this.getHandler=function(f){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],_=c[d+1];if(p.global&&(p.lastIndex=0),p.test(f))return _}return null}}}const Ob=new Fb;class sc{constructor(e){this.manager=e!==void 0?e:Ob,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}sc.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi={};class kb extends Error{constructor(e,n){super(e),this.response=n}}class sC extends sc{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Dl.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(pi[e]!==void 0){pi[e].push({onLoad:n,onProgress:i,onError:r});return}pi[e]=[],pi[e].push({onLoad:n,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=pi[e],d=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=h?parseInt(h):0,_=p!==0;let x=0;const g=new ReadableStream({start(u){v();function v(){d.read().then(({done:m,value:M})=>{if(m)u.close();else{x+=M.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:p});for(let b=0,C=f.length;b<C;b++){const U=f[b];U.onProgress&&U.onProgress(R)}u.enqueue(M),v()}})}}});return new Response(g)}else throw new kb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),h=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(h);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{Dl.add(e,c);const f=pi[e];delete pi[e];for(let d=0,h=f.length;d<h;d++){const p=f[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{const f=pi[e];if(f===void 0)throw this.manager.itemError(e),c;delete pi[e];for(let d=0,h=f.length;d<h;d++){const p=f[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Bb extends sc{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Dl.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Ga("img");function l(){f(),Dl.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(d){f(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class aC extends sc{constructor(e){super(e)}load(e,n,i,r){const s=new mn,a=new Bb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class jf extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}class Y_ extends jf{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const vu=new Et,Om=new V,km=new V;class zb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zf,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Om.setFromMatrixPosition(e.matrixWorld),n.position.copy(Om),km.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(km),n.updateMatrixWorld(),vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Hb extends zb{constructor(){super(new H_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bm extends jf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Hb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class K_ extends jf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class oC{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nn(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);const Gb="/assets/occt-import-js-BhHfLpto.wasm",Vb="data:text/javascript;base64,aW1wb3J0U2NyaXB0cyAoJ29jY3QtaW1wb3J0LWpzLmpzJyk7DQoNCm9ubWVzc2FnZSA9IGFzeW5jIGZ1bmN0aW9uIChldikNCnsNCglsZXQgbW9kdWxPdmVycmlkZXMgPSB7DQoJCWxvY2F0ZUZpbGU6IGZ1bmN0aW9uIChwYXRoKSB7DQoJCQlyZXR1cm4gcGF0aDsNCgkJfQ0KCX07DQoJbGV0IG9jY3QgPSBhd2FpdCBvY2N0aW1wb3J0anMgKG1vZHVsT3ZlcnJpZGVzKTsNCglsZXQgcmVzdWx0ID0gb2NjdC5SZWFkRmlsZSAoZXYuZGF0YS5mb3JtYXQsIGV2LmRhdGEuYnVmZmVyLCBldi5kYXRhLnBhcmFtcyk7DQoJcG9zdE1lc3NhZ2UgKHJlc3VsdCk7DQp9Ow0K";function zm(t,e){if(typeof window>"u")return new Xe(e);const n=getComputedStyle(document.documentElement).getPropertyValue(t).trim();return new Xe(n||e)}function Z_(t){const e=t==="neon"?"#b6ff2b":t==="purple"?"#c77dff":t==="blue"?"#74d4ff":t==="dark"?"#e2e8f0":"#cbd5e1",n=t==="neon"?"#3a7a1a":t==="purple"?"#6a2da8":t==="blue"?"#1f5c9a":t==="dark"?"#475569":"#94a3b8";return{color:zm("--mv-model-color",e),emissive:zm("--mv-model-emissive",n),emissiveIntensity:t==="neon"||t==="purple"||t==="blue"?.35:t==="dark"?.08:.05,metalness:.2,roughness:t==="neon"||t==="purple"||t==="blue"?.6:.8}}function Q_(t,e){t.traverse(n=>{if(!(n instanceof Mn))return;(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{const s=r;s.color&&s.color.copy(e.color),s.emissive&&(s.emissive.copy(e.emissive),s.emissiveIntensity=e.emissiveIntensity),typeof s.metalness=="number"&&(s.metalness=e.metalness),typeof s.roughness=="number"&&(s.roughness=e.roughness),r.needsUpdate=!0})})}function Wb({url:t,ext:e,assetId:n,theme:i}){const r=ue.useRef(null),[s,a]=ue.useState(null);return ue.useEffect(()=>{let o=!1,l=null;const c=r.current;if(!c)return;const f=Z_(i);a(null);const d=b=>{o||a(b)},h=new q_,p=new Sn(45,1,.1,1e3),_=new Vf({antialias:!0,alpha:!0});_.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),_.setSize(c.clientWidth||300,c.clientHeight||300),c.appendChild(_.domElement),h.add(new Y_(16777215,4473924,1.6)),h.add(new K_(16777215,.9));const x=new Bm(16777215,1.4);x.position.set(3,6,2);const g=new Bm(16777215,1.2);g.position.set(-4,-2,3),h.add(x),h.add(g),p.position.set(1,1,3);let u,v;const m=n?`mv-view-${n}`:null,M=()=>{if(!m||typeof window>"u")return!1;try{const b=window.localStorage.getItem(m);if(!b)return!1;const C=JSON.parse(b);return!Array.isArray(C==null?void 0:C.position)||!Array.isArray(C==null?void 0:C.target)?!1:(p.position.fromArray(C.position),u==null||u.target.fromArray(C.target),u==null||u.update(),!0)}catch(b){return console.warn("Failed to load saved view",b),!1}},R=()=>{if(!(!m||typeof window>"u"||!u))try{const b={position:p.position.toArray(),target:u.target.toArray()};window.localStorage.setItem(m,JSON.stringify(b))}catch{}};return(async()=>{try{const{OrbitControls:U}=await rr(async()=>{const{OrbitControls:I}=await import("./OrbitControls-DkupPpaN.js");return{OrbitControls:I}},[]);u=new U(p,_.domElement),u.enableDamping=!0,u.dampingFactor=.05,u.enablePan=!0,u.target.set(0,0,0),u.addEventListener("change",R);const S=I=>{const q=I.getSize(new V),se=I.getCenter(new V),N=Math.max(q.x,q.y,q.z)||1;M()||(p.position.copy(se).add(new V(N*1.8,N*1.2,N*1.8)),p.lookAt(se),u==null||u.target.copy(se),u==null||u.update())},T=(e||"").toLowerCase();try{const I=await tx(T,t);if(!I){d("Preview unsupported for this file type.");return}if(o){Cd(I);return}Q_(I,f),l=I,h.add(I);const q=new cr().setFromObject(I);q.isEmpty()||S(q)}catch(I){console.error("Viewer asset load failed:",I),d("Preview failed to load.")}}catch(U){console.error("Viewer init failed:",U)}const b=()=>{if(!c)return;const U=c.clientWidth||300,S=c.clientHeight||300;_.setSize(U,S),p.aspect=U/S,p.updateProjectionMatrix()};window.addEventListener("resize",b),v=()=>window.removeEventListener("resize",b);const C=()=>{o||(_.render(h,p),requestAnimationFrame(C))};C()})(),()=>{var b;o=!0;try{v==null||v(),c.removeChild(_.domElement)}catch{}l&&Cd(l);try{u==null||u.removeEventListener("change",R),u==null||u.dispose()}catch{}try{(b=_.forceContextLoss)==null||b.call(_)}catch{}_.dispose()}},[t,e,n,i]),y.jsx("div",{ref:r,className:"w-full h-full bg-panel-soft rounded-md overflow-hidden relative",children:s&&y.jsx("div",{className:"absolute inset-0 flex items-center justify-center px-4 text-center text-sm font-medium text-red-700 dark:text-red-300 bg-panel-overlay",children:s})})}const _u=new Map;let xu=null,yu=Promise.resolve();function jb(){const t=new Vf({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});return t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t}async function Xb(){let t;const e=yu;yu=yu.then(()=>new Promise(r=>t=r)),await e,xu=jb();const n=xu;return{renderer:n,release:()=>{var r;try{(r=n.forceContextLoss)==null||r.call(n),n.dispose()}catch{}xu=null,t()}}}function $b({url:t,ext:e,assetId:n,theme:i}){const r=ue.useRef(null),[s,a]=ue.useState(null),[o,l]=ue.useState("idle");return ue.useEffect(()=>{let c=!1;const f=n?`asset:${n}:${i}`:`${t}:${i}`;if(_u.has(f)){a(_u.get(f));return}return(async()=>{if(r.current){l("loading");try{const h=r.current.getBoundingClientRect(),p=Math.max(120,Math.floor(h.width||240)),_=Math.max(120,Math.floor(h.height||180)),x=await tA(t,e,p,_,i);if(c)return;_u.set(f,x),a(x),l("idle")}catch(h){console.warn("Snapshot generation failed:",h),c||l("error")}}})(),()=>{c=!0}},[t,e,n,i]),y.jsx("div",{ref:r,className:"w-full h-full bg-panel-soft flex items-center justify-center rounded-md overflow-hidden",children:s?y.jsx("img",{src:s,alt:"Preview",className:"w-full h-full object-cover"}):o==="loading"?y.jsx("span",{className:"text-xs text-muted",children:"Generating preview..."}):y.jsx("span",{className:"text-xs text-muted",children:"Preview unavailable"})})}async function qb(t){const e=await fetch(t);if(!e.ok)throw new Error(`3MF fetch failed with status ${e.status}`);const n=new Uint8Array(await e.arrayBuffer()),i=new TextDecoder,r=new Map,s=(l,c)=>{const f=typeof c=="string"?c:i.decode(c);try{const d=Kb(f,l);(d.objects.size||d.buildItems.length)&&r.set(d.path,d)}catch(d){console.warn(`3MF fallback parse failed for ${l}`,d)}};let a=!1;try{const{unzipSync:l}=await rr(async()=>{const{unzipSync:d}=await import("./fflate.module-DxdqVi2p.js");return{unzipSync:d}},[]),c=l(n),f=Object.keys(c).filter(d=>/\.model$/i.test(d));if(f.length){a=!0;for(const d of f)s(d,c[d])}}catch(l){console.warn("3MF fallback unzip failed, attempting inline parse",l)}if(a||s("/3D/3dmodel.model",n),!r.size)throw new Error("3MF fallback: no printable geometry found");const o=Yb(r);if(!o.children.length)throw new Error("3MF fallback: no printable geometry found");return o}function Yb(t){const e=new Wi,n=new Map,i=(r,s,a)=>{var p;const o=ac(r),l=`${o}::${s}`,c=n.get(l);if(c)return c.clone(!0);const f=t.get(o);if(!f)return null;if(a.has(l))return console.warn("3MF fallback: detected recursive reference for %s",l),null;a.add(l);const d=f.objects.get(s);if(!d)return a.delete(l),null;let h=null;if(d.mesh)h=Zb(d.mesh);else if((p=d.components)!=null&&p.length){const _=new Wi;for(const x of d.components){const g=i(x.sourcePath??f.path,x.objectId,a);g&&(x.transform&&g.applyMatrix4(x.transform.clone()),_.add(g))}h=_}return a.delete(l),h?(n.set(l,h),h.clone(!0)):null};for(const r of t.values()){if(!r.buildItems.length)continue;const s=new Wi;for(const a of r.buildItems){const o=i(a.sourcePath??r.path,a.objectId,new Set);o&&(a.transform&&o.applyMatrix4(a.transform.clone()),s.add(o))}s.children.length&&e.add(s)}return e}function Kb(t,e){const i=new DOMParser().parseFromString(t,"application/xml");if(i.querySelector("parsererror"))throw new Error("3MF fallback: invalid XML");const r=ac(e),s=new Map;for(const l of Hs(i,"object")){const c=l.getAttribute("id");if(!c)continue;const f={id:c},d=Su(l,"mesh");if(d){const p=Qb(d);p&&(f.mesh=p)}const h=Su(l,"components");if(h){const p=Jb(h);p.length&&(f.components=p)}s.set(c,f)}const a=Su(i,"build"),o=a?eA(a):[];return{path:r,objects:s,buildItems:o}}function Zb(t){const e=new ei;return e.setAttribute("position",new On(t.positions,3)),e.setIndex(new On(t.indices,1)),e.computeVertexNormals(),e.computeBoundingSphere(),new Mn(e,new Wf({color:15857145,metalness:.2,roughness:.8}))}function Qb(t){const e=Hs(t,"vertex"),n=Hs(t,"triangle");if(!e.length||!n.length)return null;const i=new Float32Array(e.length*3);e.forEach((s,a)=>{i[a*3+0]=parseFloat(s.getAttribute("x")||"0"),i[a*3+1]=parseFloat(s.getAttribute("y")||"0"),i[a*3+2]=parseFloat(s.getAttribute("z")||"0")});const r=new Uint32Array(n.length*3);return n.forEach((s,a)=>{r[a*3+0]=parseInt(s.getAttribute("v1")||"0",10),r[a*3+1]=parseInt(s.getAttribute("v2")||"0",10),r[a*3+2]=parseInt(s.getAttribute("v3")||"0",10)}),{positions:i,indices:r}}function Jb(t){const e=[];for(const n of Hs(t,"component")){const i=n.getAttribute("objectid");if(!i)continue;const r=n.getAttribute("transform"),s=ex(n,"path");e.push({objectId:i,transform:r?J_(r):void 0,sourcePath:s?ac(s):void 0})}return e}function eA(t){const e=[];for(const n of Hs(t,"item")){const i=n.getAttribute("objectid");if(!i)continue;const r=n.getAttribute("transform"),s=ex(n,"path");e.push({objectId:i,transform:r?J_(r):void 0,sourcePath:s?ac(s):void 0})}return e}function J_(t){const e=t.trim().split(/\s+/).map(i=>parseFloat(i)).filter(i=>!Number.isNaN(i));if(e.length!==12)return null;const n=new Et;return n.set(e[0],e[3],e[6],e[9],e[1],e[4],e[7],e[10],e[2],e[5],e[8],e[11],0,0,0,1),n}function ex(t,e){const n=t.getAttribute(e);if(n!==null)return n;if(typeof t.getAttributeNames=="function")for(const i of t.getAttributeNames()){const r=i.indexOf(":");if(r!==-1&&i.slice(r+1)===e){const s=t.getAttribute(i);if(s!==null)return s}}else for(const i of["p","m","s"]){const r=t.getAttribute(`${i}:${e}`);if(r!==null)return r}return null}function ac(t){const e=(t||"").trim();if(!e)return"/3D/3dmodel.model";let n=e.replace(/\\/g,"/");return n=n.replace(/^\/+/,"/"),n.startsWith("/")||(n=`/${n}`),n}function Hs(t,e){const n=Array.from(t.getElementsByTagName(e));if(n.length)return n;if("getElementsByTagNameNS"in t){const i=t.getElementsByTagNameNS("*",e);return Array.from(i??[])}return[]}function Su(t,e){return Hs(t,e)[0]??null}async function tA(t,e,n,i,r){const s=(e||"").toLowerCase(),a=await tx(s,t);if(!a)throw new Error(`Unsupported snapshot extension: ${e}`);Q_(a,Z_(r));const o=new q_;o.add(new Y_(16777215,4473924,1.2)),o.add(new K_(16777215,.8));const l=new Sn(45,n/i,.1,1e3),{renderer:c,release:f}=await Xb();c.setSize(n,i,!1),o.add(a);const d=new cr().setFromObject(a);if(d.isEmpty())l.position.set(1,1,3),l.lookAt(new V(0,0,0));else{const h=d.getSize(new V),p=d.getCenter(new V),_=Math.max(h.x,h.y,h.z)||1;l.position.copy(p).add(new V(_*1.8,_*1.3,_*1.6)),l.lookAt(p)}try{c.render(o,l);const h=c.domElement.toDataURL("image/png");return Cd(a),h}finally{f()}}async function tx(t,e){if(t==="stl"){const{STLLoader:n}=await rr(async()=>{const{STLLoader:o}=await import("./STLLoader-C5ssMd5H.js");return{STLLoader:o}},[]),i=await new Promise((o,l)=>{new n().load(e,o,void 0,l)});i.computeBoundingBox();const s=(i.boundingBox??new cr).getCenter(new V);return i.translate(-s.x,-s.y,-s.z),new Mn(i,new Wf({metalness:.2,roughness:.8,color:14540253}))}if(t==="3mf")return await iA(e);if(t==="obj"){const{OBJLoader:n}=await rr(async()=>{const{OBJLoader:i}=await import("./OBJLoader-CZ87RJPj.js");return{OBJLoader:i}},[]);return await new Promise((i,r)=>{new n().load(e,i,void 0,r)})}return t==="step"||t==="stp"?await nA(e):null}async function nA(t){var o,l,c,f,d;const e=(await rr(async()=>{const{default:h}=await import("./occt-import-js-Wi5VEtWB.js").then(p=>p.o);return{default:h}},[])).default,n=await fetch(t),i=new Uint8Array(await n.arrayBuffer()),s=await(await e({locateFile:h=>h.endsWith(".wasm")?Gb:h.endsWith(".worker.js")?Vb:h})).ReadStepFile(i,null),a=new Wi;for(const h of s.meshes){const p=(l=(o=h.attributes)==null?void 0:o.position)==null?void 0:l.array;if(!p||!p.length)continue;const _=new ei,x=M=>Float32Array.from(M);_.setAttribute("position",new Qn(x(p),3));const g=(f=(c=h.attributes)==null?void 0:c.normal)==null?void 0:f.array;g&&g.length&&_.setAttribute("normal",new Qn(x(g),3));const u=(d=h.index)==null?void 0:d.array;u&&u.length?_.setIndex(Array.isArray(u)?u:Array.from(u)):_.computeVertexNormals(),_.computeBoundingSphere();const v=h.color?new Xe(h.color[0]/255,h.color[1]/255,h.color[2]/255):new Xe(15857145),m=new Mn(_,new Wf({color:v,metalness:.2,roughness:.8}));a.add(m)}if(!a.children.length)throw new Error("STEP preview produced no meshes");return a}async function iA(t){try{return await qb(t)}catch(e){return console.warn("Simple 3MF parse failed, falling back to ThreeMFLoader",e),await rA(t)}}async function rA(t){const{ThreeMFLoader:e}=await rr(async()=>{const{ThreeMFLoader:n}=await import("./3MFLoader-Cux4Jsa_.js");return{ThreeMFLoader:n}},__vite__mapDeps([0,1]));return await new Promise((n,i)=>{new e().load(t,n,void 0,i)})}function Cd(t){t.traverse(e=>{var n,i;e instanceof Mn&&((n=e.geometry)==null||n.dispose(),Array.isArray(e.material)?e.material.forEach(r=>r.dispose()):(i=e.material)==null||i.dispose())})}const Hm=new Map,Eu=new Uint8Array([80,75,3,4]),sA=new Uint8Array([80,75,5,6]),aA=64*1024*1024,oA=1024*1024,Rd=new Uint8Array([137,80,78,71,13,10,26,10]),Pd=new Uint8Array([255,216]),Gm=new Uint8Array([255,217]),nx=new Uint8Array([66,77]),ix=new Uint8Array([82,73,70,70]),lA=new Uint8Array([87,69,66,80]),cA=new Uint8Array([71,73,70,56,55,97]),uA=new Uint8Array([71,73,70,56,57,97]),dA=new Set([".png",".jpg",".jpeg",".webp",".bmp",".gif"]),Vm=16*1024*1024,fA={".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".webp":"image/webp",".bmp":"image/bmp",".gif":"image/gif"};function Wm({url:t,assetId:e,filename:n,imgClass:i}){const[r,s]=ue.useState(null),[a,o]=ue.useState("idle");return ue.useEffect(()=>{let l=!0;const c=e?`asset:${e}`:t,f=Hm.get(c);return f?(s(f),o("idle"),()=>{l=!1}):(s(null),o("loading"),(async()=>{try{const d=await fetch(t);if(!d.ok)throw new Error(`Preview fetch failed: ${d.status}`);const h=new Uint8Array(await d.arrayBuffer()),p=await hA(h);if(!p)throw new Error("Preview not found in LightBurn file");const _=URL.createObjectURL(new Blob([p.data],{type:p.mime}));Hm.set(c,_),l&&(s(_),o("idle"))}catch(d){console.warn("LightBurn preview failed:",d),l&&o("error")}})(),()=>{l=!1})},[t,e]),y.jsx("div",{className:"w-full h-full bg-panel-soft flex items-center justify-center rounded-md overflow-hidden",children:r?y.jsx("img",{src:r,alt:n,className:i}):a==="loading"?y.jsx("span",{className:"text-xs text-muted",children:"Generating preview..."}):y.jsx("span",{className:"text-xs text-muted",children:"Preview unavailable"})})}async function hA(t){const e=await pA(t);if(e)return e;const n=vA(t);return n||gA(t)}async function pA(t){const e=PA(t);if(!e)return null;const{unzipSync:n}=await rr(async()=>{const{unzipSync:l}=await import("./fflate.module-DxdqVi2p.js");return{unzipSync:l}},[]);let i;try{i=n(e)}catch{return null}const r=Object.entries(i).map(([l,c])=>{const f=AA(l),d=CA(c);return{name:l,data:c,ext:f,detected:d}}).filter(l=>{var c;return((c=l.data)==null?void 0:c.length)&&(l.ext&&dA.has(l.ext)||l.detected)});if(!r.length)return mA(i);const s=r.filter(l=>/preview|thumb|thumbnail/i.test(l.name)),a=bA(s.length?s:r);if(!a)return null;const o=a.detected||fA[a.ext]||"image/png";return{data:a.data,mime:o}}function mA(t){const e=Object.values(t);for(const n of e){if(!(n!=null&&n.length)||!sx(n))continue;const i=rx(n);if(i)return i}return null}function gA(t){const e=rx(t);return e||null}function vA(t){const e=_A(t);if(e)return{data:e,mime:"image/png"};const n=xA(t);if(n)return{data:n,mime:"image/jpeg"};const i=yA(t);if(i)return{data:i,mime:"image/webp"};const r=SA(t);return r?{data:r,mime:"image/bmp"}:null}function _A(t){const e=Gs(t,Rd);if(e===-1)return null;let n=e+Rd.length;for(;n+8<=t.length;){const i=LA(t,n),r=NA(t,n+4,4),s=n+8+i+4;if(s>t.length)return null;if(n=s,r==="IEND")return t.slice(e,n)}return null}function xA(t){const e=Gs(t,Pd);if(e===-1)return null;const n=Gs(t,Gm,e+Pd.length);return n===-1?null:t.slice(e,n+Gm.length)}function yA(t){let e=0;for(;e<t.length;){const n=Gs(t,ix,e);if(n===-1)return null;if(lx(t,n)){if(n+12>t.length)return null;const r=Il(t,n+4)+8;if(r>0&&n+r<=t.length)return t.slice(n,n+r)}e=n+4}return null}function SA(t){const e=Gs(t,nx);if(e===-1||e+6>t.length)return null;const n=Il(t,e+2);return!n||e+n>t.length?null:t.slice(e,e+n)}function rx(t){if(!sx(t))return null;const e=t.length>Vm?t.slice(0,Vm):t,n=EA(e);if(!n)return null;const i=MA(n);return i||wA(n)}function EA(t){try{return new TextDecoder("utf-8",{fatal:!1}).decode(t)}catch{return""}}function sx(t){const e=t.length>2048?t.slice(0,2048):t;if(!e.length)return!1;let n=0;for(let i=0;i<e.length;i+=1){const r=e[i];if(r===0)return!1;if(r===9||r===10||r===13){n+=1;continue}r>=32&&r<=126&&(n+=1)}return n/e.length>.7}function MA(t){const n=t.indexOf("data:image/");if(n===-1)return null;const i=n+5,r=t.indexOf("base64,",i);if(r===-1)return null;const s=t.slice(i,r-1).trim().toLowerCase(),a=r+7,o=ax(t,a);if(o<=a)return null;const l=t.slice(a,o),c=ox(l);return c?{data:c,mime:TA(s)}:null}function wA(t){const e=[{prefix:"iVBORw0KGgo",mime:"image/png"},{prefix:"/9j/",mime:"image/jpeg"},{prefix:"UklGR",mime:"image/webp"},{prefix:"Qk",mime:"image/bmp"},{prefix:"R0lGOD",mime:"image/gif"}];for(const n of e){const i=t.indexOf(n.prefix);if(i===-1)continue;const r=ax(t,i);if(r<=i)continue;const s=t.slice(i,r),a=ox(s);if(a)return{data:a,mime:n.mime}}return null}function ax(t,e){let n=e;for(;n<t.length;n+=1){const i=t.charCodeAt(n);if(!(i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122||i===43||i===47||i===61))break}return n}function ox(t){try{const e=atob(t),n=new Uint8Array(e.length);for(let i=0;i<e.length;i+=1)n[i]=e.charCodeAt(i);return n}catch{return null}}function TA(t){return t==="image/jpg"?"image/jpeg":t||"image/png"}function bA(t){return t.length?t.reduce((e,n)=>n.data.length>e.data.length?n:e,t[0]):null}function AA(t){const e=(t||"").toLowerCase(),n=e.lastIndexOf(".");return n===-1?"":e.slice(n)}function CA(t){return is(t,Rd)?"image/png":is(t,Pd)?"image/jpeg":is(t,nx)?"image/bmp":RA(t)?"image/webp":is(t,uA)||is(t,cA)?"image/gif":""}function is(t,e){return Ul(t,e,0)}function Ul(t,e,n){if(n<0||t.length<n+e.length)return!1;for(let i=0;i<e.length;i+=1)if(t[n+i]!==e[i])return!1;return!0}function RA(t){return lx(t,0)}function lx(t,e){return Ul(t,ix,e)&&Ul(t,lA,e+8)}function PA(t){if(is(t,Eu))return t;const e=DA(t,sA,oA);if(e!==-1&&e+22<=t.length){const i=Il(t,e+12),r=Il(t,e+16);if(i!==4294967295&&r!==4294967295){const s=e-(r+i);if(s>=0&&Ul(t,Eu,s))return t.slice(s)}}const n=Gs(t,Eu,0,aA);return n===-1?null:t.slice(n)}function Il(t,e){return(t[e]|t[e+1]<<8|t[e+2]<<16|t[e+3]<<24)>>>0}function LA(t,e){return(t[e]<<24>>>0)+(t[e+1]<<16)+(t[e+2]<<8)+t[e+3]}function NA(t,e,n){let i="";for(let r=0;r<n;r+=1)i+=String.fromCharCode(t[e+r]);return i}function Gs(t,e,n=0,i){const r=t.length-e.length,s=Math.max(0,n),a=Math.min(r,i===void 0?r:s+i);for(let o=s;o<=a;o+=1){let l=!0;for(let c=0;c<e.length;c+=1)if(t[o+c]!==e[c]){l=!1;break}if(l)return o}return-1}function DA(t,e,n){const i=t.length-e.length;if(i<0)return-1;const r=Math.max(0,i-n);for(let s=i;s>=r;s-=1){let a=!0;for(let o=0;o<e.length;o+=1)if(t[s+o]!==e[o]){a=!1;break}if(a)return s}return-1}const jm=[{bg:"#fee2e2",text:"#991b1b",border:"#fecaca"},{bg:"#ffedd5",text:"#9a3412",border:"#fed7aa"},{bg:"#fef9c3",text:"#854d0e",border:"#fde68a"},{bg:"#dcfce7",text:"#166534",border:"#bbf7d0"},{bg:"#e0f2fe",text:"#075985",border:"#bae6fd"},{bg:"#e0e7ff",text:"#3730a3",border:"#c7d2fe"},{bg:"#f4e8ff",text:"#6d28d9",border:"#e9d5ff"},{bg:"#fce7f3",text:"#9d174d",border:"#fbcfe8"},{bg:"#f1f5f9",text:"#475569",border:"#e2e8f0"}];function cx(t){const e=t.toLowerCase();let n=0;for(let r=0;r<e.length;r++)n=(n<<5)-n+e.charCodeAt(r),n|=0;return jm[Math.abs(n)%jm.length]}function Xf({tag:t,className:e="",onRemove:n}){const i=cx(t);return y.jsxs("span",{className:`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${e}`,style:{backgroundColor:i.bg,color:i.text,borderColor:i.border},children:[t,n&&y.jsx("button",{type:"button",className:"text-[10px] leading-none opacity-70 hover:opacity-100",onClick:n,"aria-label":`Remove ${t}`,children:"×"})]})}function ux({value:t,onChange:e,placeholder:n}){const[i,r]=be.useState(""),s=be.useRef(null),a=d=>d.trim().replace(/\s+/g," "),o=d=>{const h=a(d);if(h){if(t.some(p=>p.toLowerCase()===h.toLowerCase())){r("");return}e([...t,h]),r("")}},l=d=>{const h=[...t.slice(0,d),...t.slice(d+1)];e(h)},c=d=>{d.key==="Enter"||d.key===","?(d.preventDefault(),o(i)):d.key==="Backspace"&&i===""&&t.length&&(d.preventDefault(),l(t.length-1))},f=()=>{i.trim()&&o(i)};return y.jsxs("div",{className:"flex flex-wrap gap-2 px-2 py-2 rounded-md border border-panel-strong bg-panel-soft text-sm",onClick:()=>{var d;return(d=s.current)==null?void 0:d.focus()},children:[t.map((d,h)=>y.jsx(Xf,{tag:d,onRemove:()=>l(h)},`${d}-${h}`)),y.jsx("input",{ref:s,value:i,onChange:d=>r(d.target.value),onKeyDown:c,onBlur:f,placeholder:t.length===0?n:"",className:"flex-1 min-w-[120px] bg-transparent outline-none text-sm text-foreground placeholder:text-[color:var(--mv-text-subtle)]"})]})}function As(t){const e=/\.([^.]+)$/.exec(t);return((e==null?void 0:e[1])||"").toLowerCase()}const dx=new Set(["stl","3mf","step","stp","obj"]),UA=new Set(["lbrn","lbrn2"]),IA=new Set(["svg","dxf","ai","eps","pdf","plt","hpgl","png","jpg","jpeg","bmp","gif","tif","tiff","lbrn","lbrn2","ezd"]),fx=5,FA=260,Xm=16;function OA(t){return Math.max(1,Math.floor((t+Xm)/(FA+Xm)))*fx}function kA({folderId:t,foldersVersion:e=0,onUnauthorized:n,slicerSettings:i,engravingSettings:r,theme:s}){const[a,o]=ue.useState([]),[l,c]=ue.useState([]),[f,d]=ue.useState(new Set),[h,p]=ue.useState(""),[_,x]=ue.useState([]),[g,u]=ue.useState(!1),[v,m]=ue.useState(!1),[M,R]=ue.useState(0),[b,C]=ue.useState(!1),[U,S]=ue.useState(null),[T,I]=ue.useState(null),[q,se]=ue.useState(null),[N,B]=ue.useState(null),[Y,ne]=ue.useState("name"),[D,O]=ue.useState("asc"),[W,ee]=ue.useState(new Set),[ae,j]=ue.useState(null),[ie]=ue.useState(()=>typeof window>"u"?fx:OA(window.innerWidth)),de=ue.useRef(0),[_e,xe]=ue.useState(!1),[Fe,Oe]=ue.useState(!1),Le=!!(i!=null&&i.enabled),Ue=$y(i==null?void 0:i.selected),z=!!(r!=null&&r.enabled),nt=qy(r==null?void 0:r.selected),Me=Df(),Ce=(F,te)=>F instanceof Dt?(n==null||n(),!0):(console.error(F),te&&alert(te),!1),he=async(F={})=>{u(!0),C(!1),R(0);try{const te=await ap({q:F.search??h,tags:F.tags??_,folder_id:t||void 0,limit:ie,offset:0});o(te.items),R(te.items.length),C(te.hasMore)}catch(te){Ce(te,"Failed to load assets. Please sign in again or refresh.")}finally{u(!1)}},Qe=async()=>{if(!(v||!b)){m(!0);try{const F=await ap({q:h,tags:_,folder_id:t||void 0,limit:ie,offset:M});o(te=>[...te,...F.items]),R(M+F.items.length),C(F.hasMore)}catch(F){Ce(F,"Failed to load more assets.")}finally{m(!1)}}},Ne=F=>{var oe;return Array.from(((oe=F.dataTransfer)==null?void 0:oe.types)||[]).includes("Files")},w=F=>{Ne(F)&&(F.preventDefault(),F.stopPropagation(),de.current+=1,xe(!0))},E=F=>{Ne(F)&&(F.preventDefault(),F.dataTransfer.dropEffect="copy")},$=F=>{Ne(F)&&(F.preventDefault(),F.stopPropagation(),de.current-=1,de.current<=0&&(de.current=0,xe(!1)))},P=async F=>{if(!Ne(F))return;F.preventDefault(),F.stopPropagation(),de.current=0,xe(!1),Oe(!0);const te=await gd(F.dataTransfer);if(!te.length){Oe(!1);return}const oe=te.filter(ht=>!Is(ht.file.name)),Ae=te.filter(ht=>Is(ht.file.name));let at=0;const At=[],Mt=ht=>{at+=ht.uploaded,At.push(...ht.failed)};if(oe.length){const ht=await oi(oe,t||null,n);Mt(ht)}for(const ht of Ae){let Cn=null;const qs=ht.relativePath.split("/").filter(Boolean);qs.pop();const Qa=qs.join("/");await Me.prompt({label:ht.file.name,onImportAsZip:async()=>{const Ri=await oi([ht],t||null,n);Mt(Ri)},loadEntries:async()=>{const Ri=await Fs(ht.file);return Cn=Ri.data,Ri.entries},onImportSelected:async Ri=>{Cn||(Cn=(await Fs(ht.file)).data);const oc=Nf(Cn||{},Ri,Qa),lc=await oi(oc,t||null,n);Mt(lc)}})}at&&await he(),At.length&&alert(`Failed to upload: ${At.join(", ")}`),Oe(!1)};ue.useEffect(()=>{he()},[t]),ue.useEffect(()=>{(async()=>{try{c(await h_())}catch(F){Ce(F,"Failed to load folders. Please refresh.")}})()},[e]),ue.useEffect(()=>{const F=new Set(a.map(te=>te.id));ee(te=>new Set([...te].filter(oe=>F.has(oe))))},[a]);const H=ue.useMemo(()=>{const F=new Set;for(const te of a)for(const oe of te.tags)F.add(oe);return Array.from(F).sort((te,oe)=>te.localeCompare(oe))},[a]),X=ue.useMemo(()=>{const F={};return a.forEach(te=>{F[te.id]=te}),F},[a]),ce=ue.useMemo(()=>{const F={};return l.forEach(te=>{F[te.id]=te}),F},[l]),k=ue.useMemo(()=>{var F;return t?((F=ce[t])==null?void 0:F.name)||"this folder":"All Items"},[t,ce]),re=ue.useMemo(()=>{const F={},te=oe=>{const Ae=[oe.name||"Untitled"];let at=oe;const At=new Set([oe.id]);for(;at.parent_id;){const Mt=ce[at.parent_id];if(!Mt||At.has(Mt.id))break;Ae.unshift(Mt.name||"Untitled"),At.add(Mt.id),at=Mt}return Ae.join(" / ")};for(const oe of l)F[oe.id]=te(oe);return F},[l,ce]),me=ue.useMemo(()=>[{id:null,name:"Unassigned"},...l.map(F=>({id:F.id,name:re[F.id]||F.name||"Untitled"})).sort((F,te)=>F.name.localeCompare(te.name))],[l,re]),Se=ue.useMemo(()=>{const F=[...a],te=D==="asc"?1:-1,oe=Ae=>Ae.folder_id&&re[Ae.folder_id]||"";return F.sort((Ae,at)=>Y==="size"?(Ae.size-at.size)*te:Y==="type"?As(Ae.filename).localeCompare(As(at.filename))*te:Y==="folder"?oe(Ae).localeCompare(oe(at))*te:Ae.filename.localeCompare(at.filename)*te),F},[a,Y,D,re]),J=ue.useMemo(()=>{if(Y!=="folder")return[];const F={};for(const oe of a){const Ae=oe.folder_id||"__ungrouped";F[Ae]||(F[Ae]={id:`folder:${Ae}`,title:oe.folder_id?re[oe.folder_id]||"Untitled":"Unassigned",items:[]}),F[Ae].items.push(oe)}const te=D==="asc"?1:-1;return Object.values(F).sort((oe,Ae)=>oe.title.localeCompare(Ae.title)*te).map(oe=>({...oe,items:oe.items.sort((Ae,at)=>Ae.filename.localeCompare(at.filename))}))},[a,re,Y,D]),De=ue.useMemo(()=>{if(Y!=="type")return[];const F={};for(const oe of a){const Ae=As(oe.filename)||"other";F[Ae]||(F[Ae]={id:`type:${Ae}`,title:Ae==="other"?"Other":Ae.toUpperCase(),items:[]}),F[Ae].items.push(oe)}const te=D==="asc"?1:-1;return Object.values(F).sort((oe,Ae)=>oe.title.localeCompare(Ae.title)*te).map(oe=>({...oe,items:oe.items.sort((Ae,at)=>Ae.filename.localeCompare(at.filename))}))},[a,Y,D]),Re=F=>{d(te=>{const oe=new Set(te);return oe.has(F)?oe.delete(F):oe.add(F),oe})},Pe=F=>{x(te=>{const oe=te.includes(F)?te.filter(Ae=>Ae!==F):[...te,F];return he({tags:oe}),oe})},Te=F=>{ee(te=>{const oe=new Set(te);return oe.has(F)?oe.delete(F):oe.add(F),oe})},ye=(F,te)=>{const Ae=(F.headers.get("content-disposition")||"").match(/filename="?([^\";]+)"?/i);return Ae&&Ae[1]||te||"download"},He=async(F,te)=>{const oe=ye(F,te),Ae=await F.blob(),at=URL.createObjectURL(Ae),At=document.createElement("a");At.href=at,At.download=oe,document.body.appendChild(At),At.click(),document.body.removeChild(At),URL.revokeObjectURL(at)},Je=async(F,te)=>{var Mt;const oe=W.has(F)&&W.size>1,Ae=oe?Array.from(W):[F],at=[];let At=!1;for(const ht of Ae)try{await sS(ht,te)}catch(Cn){if(Cn instanceof Dt){n==null||n(),At=!0;break}console.error(Cn),at.push(((Mt=X[ht])==null?void 0:Mt.filename)||ht)}At||(await he(),oe&&ee(new Set)),at.length&&alert(`Tag update failed for: ${at.join(", ")}`)},ct=async(F,te)=>{try{await aS(F,{notes:te}),await he()}catch(oe){Ce(oe,"Failed to save notes. Please try again.")}},We=async(F,te)=>{try{await lS(F,te),await he()}catch(oe){Ce(oe,"Rename failed. Please try again.")}},fe=async(F,te)=>{try{B(F),await cS(F,te),await he()}catch(oe){Ce(oe)||alert("Folder update failed. Please try again.")}finally{B(null)}},L=async F=>{try{I(F.id);const te=await fetch(ws(F.url));if(te.status===401)throw n==null||n(),new Error("Unauthorized");if(!te.ok)throw new Error("Download failed");await He(te,F.filename||"download")}catch(te){Ce(te)||(console.error(te),alert("Download failed. Please try again."))}finally{I(null)}},ge=F=>{if(!Le)return;const te=ws(F.url),Ae=`makersvault-slicer://open?${new URLSearchParams({url:te,slicer:(i==null?void 0:i.selected)||"orca",filename:F.filename||"model"}).toString()}`;window.location.href=Ae},ve=F=>{if(!z)return;const te=ws(F.url),Ae=`makersvault-engrave://open?${new URLSearchParams({url:te,engraver:(r==null?void 0:r.selected)||"lightburn",filename:F.filename||"design"}).toString()}`;window.location.href=Ae},Be=async()=>{if(!W.size){alert("Select at least one item to download.");return}try{j("selected");const F=await lp({asset_ids:Array.from(W)});await He(F,"makersvault-selected.zip")}catch(F){Ce(F,"Bulk download failed.")||console.error(F)}finally{j(null)}},ke=async F=>{if(F)try{j(`tag:${F}`);const te=await lp({tag:F});await He(te,`${F}.zip`)}catch(te){Ce(te,"Download by tag failed.")||console.error(te)}finally{j(null)}},it=async F=>{var At;const te=W.has(F.id)&&W.size>1?Array.from(W):[F.id],oe=te.length>1?`Delete ${te.length} selected items? This cannot be undone.`:`Delete "${F.title||F.filename}"? This cannot be undone.`;if(!confirm(oe))return;se(F.id);const Ae=[];let at=!1;for(const Mt of te)try{await oS(Mt)}catch(ht){if(ht instanceof Dt){n==null||n(),at=!0;break}console.error(ht),Ae.push(((At=X[Mt])==null?void 0:At.filename)||Mt)}at||await he(),Ae.length&&alert(`Delete failed for: ${Ae.join(", ")}`),se(null)},st=_e||Fe,bt=Fe?`Uploading to ${k}...`:`Drop files or folders to upload to ${k}`;return y.jsxs("div",{className:"relative",onDragEnter:w,onDragOver:E,onDragLeave:$,onDrop:P,children:[st&&y.jsx("div",{className:"absolute inset-0 z-40 flex items-center justify-center rounded-lg border-2 border-dashed border-accent bg-panel-overlay pointer-events-none",children:y.jsx("div",{className:"px-4 py-3 rounded-md border border-panel-strong bg-panel-strong shadow-sm text-sm",children:bt})}),y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[y.jsx("input",{value:h,onChange:F=>p(F.target.value),onKeyDown:F=>{if(F.key==="Enter"){const te=F.currentTarget.value;he({search:te})}},placeholder:"Search title, filename, notes...",className:"px-3 py-2 rounded-md border border-panel-strong bg-panel-soft w-80"}),y.jsx("button",{className:"px-3 py-2 rounded-md border border-panel-strong disabled:opacity-60",onClick:()=>he({search:h}),disabled:g,children:"Search"}),g&&y.jsx("span",{className:"text-sm opacity-70",children:"Loading..."}),y.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[y.jsx("span",{className:"opacity-70",children:"Sort"}),y.jsxs("select",{className:"px-2 py-1 rounded-md border border-panel-strong bg-panel-soft",value:Y,onChange:F=>ne(F.target.value),children:[y.jsx("option",{value:"name",children:"Name"}),y.jsx("option",{value:"size",children:"Size"}),y.jsx("option",{value:"type",children:"File type"}),y.jsx("option",{value:"folder",children:"Folder"})]}),y.jsx("button",{type:"button",onClick:()=>O(F=>F==="asc"?"desc":"asc"),className:"px-2 py-1 rounded-md border border-panel-strong",children:D==="asc"?"Asc":"Desc"})]})]}),!!H.length&&y.jsxs("div",{className:"flex flex-wrap gap-2",children:[H.map(F=>{const te=cx(F),oe=_.includes(F);return y.jsx("button",{className:`px-2 py-1 rounded-full text-sm border transition-colors ${oe?"ring-2 ring-offset-1 ring-[color:var(--mv-accent)] ring-offset-[color:var(--mv-bg)]":""}`,style:{backgroundColor:oe?te.bg:"transparent",color:te.text,borderColor:te.border},onClick:()=>Pe(F),children:F},F)}),_.length>0&&y.jsx("button",{className:"px-2 py-1 rounded-full text-sm border border-panel-strong",onClick:()=>{x([]),he({tags:[]})},children:"Reset"})]}),["folder","type"].includes(Y)?y.jsx("div",{className:"space-y-4",children:(Y==="folder"?J:De).map(F=>{const te=f.has(F.id);return y.jsxs("div",{className:"rounded-lg border border-panel bg-panel-soft",children:[y.jsxs("button",{className:"w-full flex items-center justify-between px-4 py-3 text-left",onClick:()=>Re(F.id),children:[y.jsxs("div",{children:[y.jsx("div",{className:"font-medium",children:F.title}),y.jsxs("div",{className:"text-xs opacity-70",children:[F.items.length," item",F.items.length===1?"":"s"]})]}),y.jsx("span",{className:"text-sm opacity-70",children:te?"Show":"Hide"})]}),!te&&y.jsx("div",{className:"px-4 pb-4 overflow-x-auto",children:y.jsxs("div",{className:"flex gap-4 min-h-[280px]",children:[F.items.map(oe=>y.jsx("div",{className:"min-w-[260px] max-w-[320px]",children:y.jsx($m,{item:oe,onSaveTags:Je,onSaveNotes:ct,onRename:We,onPreview:S,onDownloadSingle:L,downloading:T===oe.id,onDelete:it,deleting:q===oe.id,onMoveFolder:fe,folderOptions:me,moving:N===oe.id,onDownloadByTag:ke,onDownloadSelected:Be,selected:W.has(oe.id),onToggleSelected:()=>Te(oe.id),hasSelection:W.size>0,bulkDownloading:!!ae,slicerEnabled:Le,slicerLabel:Ue,onOpenInSlicer:ge,engravingEnabled:z,engraverLabel:nt,onOpenInEngraving:ve,theme:s})},oe.id)),!F.items.length&&y.jsx("div",{className:"px-2 py-4 text-sm opacity-60",children:"No assets in this folder"})]})})]},F.id)})}):y.jsx("div",{className:"grid gap-4",style:{gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))"},children:Se.map(F=>y.jsx($m,{item:F,onSaveTags:Je,onSaveNotes:ct,onRename:We,onPreview:S,onDownloadSingle:L,downloading:T===F.id,onDelete:it,deleting:q===F.id,onMoveFolder:fe,folderOptions:me,moving:N===F.id,onDownloadByTag:ke,onDownloadSelected:Be,selected:W.has(F.id),onToggleSelected:()=>Te(F.id),hasSelection:W.size>0,bulkDownloading:!!ae,slicerEnabled:Le,slicerLabel:Ue,onOpenInSlicer:ge,engravingEnabled:z,engraverLabel:nt,onOpenInEngraving:ve,theme:s},F.id))}),b&&y.jsx("div",{className:"flex justify-center pt-2",children:y.jsx("button",{className:"px-4 py-2 rounded-md border border-panel-strong text-sm disabled:opacity-60",onClick:Qe,disabled:v,children:v?"Loading...":"Load more"})}),U&&y.jsx(BA,{asset:U,theme:s,onClose:()=>S(null)}),Me.modal]})]})}function $m({item:t,onSaveTags:e,onSaveNotes:n,onRename:i,onPreview:r,onDownloadSingle:s,onDownloadByTag:a,onDownloadSelected:o,downloading:l,onDelete:c,deleting:f,onMoveFolder:d,folderOptions:h,moving:p,selected:_,onToggleSelected:x,hasSelection:g,bulkDownloading:u,slicerEnabled:v,slicerLabel:m,onOpenInSlicer:M,engravingEnabled:R,engraverLabel:b,onOpenInEngraving:C,theme:U}){const[S,T]=ue.useState(!1),[I,q]=ue.useState(t.tags),[se,N]=ue.useState(!1),[B,Y]=ue.useState(t.notes||""),[ne,D]=ue.useState(!0),[O,W]=ue.useState(!1),[ee,ae]=ue.useState(t.filename),j=be.useRef(null),[ie,de]=ue.useState("");ue.useEffect(()=>{S||q(t.tags)},[t.tags,S]),ue.useEffect(()=>{se||Y(t.notes||"")},[t.notes,se]),ue.useEffect(()=>{O?setTimeout(()=>{var w;return(w=j.current)==null?void 0:w.select()},0):ae(t.filename)},[t.filename,O]);const _e=()=>{q(t.tags),T(!0)},xe=()=>{T(!1),q(t.tags)},Fe=async()=>{await e(t.id,I),T(!1)},Oe=async()=>{await n(t.id,B),N(!1)},Le=()=>{N(!1),Y(t.notes||"")},Ue=(t.notes||"").trim(),z=async()=>{const w=ee.trim();if(!w){ae(t.filename),W(!1);return}if(w===t.filename){W(!1);return}try{await i(t.id,w)}catch(E){console.error(E),alert("Rename failed"),ae(t.filename)}finally{W(!1)}},nt=()=>{ae(t.filename),W(!1)},Me=w=>{w.key==="Enter"?(w.preventDefault(),z()):w.key==="Escape"&&(w.preventDefault(),nt())},Ce=w=>{const E=w.target.value||null,$=t.folder_id||null;E!==$&&d(t.id,E)},he=w=>{const E=w.target.value;E&&(de(""),E==="single"?s(t):E==="selected"?o():E.startsWith("tag:")&&a(E.slice(4)))},Qe=v&&dx.has(As(t.filename)),Ne=R&&IA.has(As(t.filename));return y.jsxs("div",{className:"rounded-lg border border-panel overflow-hidden bg-panel-soft",children:[y.jsx("div",{className:"h-40 relative cursor-pointer",onDoubleClick:()=>r(t),title:"Double-click to open large preview",onClick:w=>w.stopPropagation(),children:hx(t,"card",U)}),y.jsxs("div",{className:"p-3 flex flex-col gap-2",children:[y.jsxs("div",{className:"flex items-center justify-between gap-2",children:[y.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[y.jsx("input",{type:"checkbox",checked:_,onChange:x,className:"w-4 h-4"}),y.jsx("span",{children:"Select"})]}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsxs("select",{value:ie,onChange:he,disabled:l||u,className:"px-2 py-1 rounded-md border border-panel-strong bg-panel-strong text-sm",children:[y.jsx("option",{value:"",children:"Download..."}),y.jsx("option",{value:"single",children:"Download file"}),y.jsx("option",{value:"selected",disabled:!g,children:"Download all selected"}),t.tags.map(w=>y.jsxs("option",{value:`tag:${w}`,children:["Download tag: ",w]},`tag-${w}`))]}),(l||u)&&y.jsx("span",{className:"text-xs opacity-70",children:l?"Downloading...":"Preparing..."})]})]}),(Qe||Ne)&&y.jsxs("div",{className:"flex flex-wrap gap-2 justify-end",children:[Qe&&y.jsxs("button",{className:"text-xs px-2 py-1 rounded-md border border-panel-strong disabled:opacity-60",onClick:()=>M(t),disabled:l||u,children:["Open in ",m]}),Ne&&y.jsxs("button",{className:"text-xs px-2 py-1 rounded-md border border-panel-strong disabled:opacity-60",onClick:()=>C(t),disabled:l||u,children:["Open in ",b]})]}),y.jsxs("div",{className:"flex flex-col gap-1",children:[y.jsx("label",{className:"text-xs font-semibold uppercase text-muted",children:p?"Updating...":"Folder"}),y.jsx("select",{value:t.folder_id||"",onChange:Ce,disabled:p,className:"px-2 py-1 rounded-md border border-panel-strong bg-panel-strong text-sm",children:h.map(w=>y.jsx("option",{value:w.id||"",children:w.name},w.id||"none"))})]}),y.jsx("div",{className:"text-sm font-medium truncate cursor-text",title:t.filename,onDoubleClick:w=>{w.stopPropagation(),W(!0)},onClick:w=>O&&w.stopPropagation(),children:O?y.jsx("input",{ref:j,value:ee,onChange:w=>ae(w.target.value),onBlur:z,onKeyDown:Me,onClick:w=>w.stopPropagation(),className:"px-2 py-1 w-full rounded-md border border-panel-strong bg-panel-soft text-sm",autoFocus:!0}):t.title||t.filename}),y.jsx("div",{className:"flex flex-wrap gap-1",children:t.tags.length?t.tags.map(w=>y.jsx(Xf,{tag:w},w)):y.jsx("span",{className:"text-xs opacity-60",children:"No tags"})}),y.jsxs("div",{className:"border border-dashed border-panel-strong rounded-md p-2 text-sm flex flex-col gap-2",children:[y.jsxs("div",{className:"flex items-center justify-between text-xs uppercase tracking-wide text-muted",children:[y.jsx("span",{children:"Notes"}),y.jsx("button",{className:"text-[11px] px-2 py-0.5 rounded-md border border-panel-strong",onClick:()=>D(w=>!w),children:ne?"Expand":"Collapse"})]}),!ne&&y.jsx(y.Fragment,{children:se?y.jsxs(y.Fragment,{children:[y.jsx("textarea",{value:B,onChange:w=>Y(w.target.value),className:"w-full min-h-[80px] rounded-md border border-panel-strong bg-panel-soft p-2",placeholder:"Add some details about this asset"}),y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx("button",{className:"text-sm px-3 py-1 rounded-md bg-accent",onClick:Oe,children:"Save"}),y.jsx("button",{className:"text-sm px-3 py-1 rounded-md border border-panel-strong",onClick:Le,children:"Cancel"})]})]}):y.jsxs(y.Fragment,{children:[y.jsx("div",{className:`text-sm whitespace-pre-wrap ${Ue?"text-foreground":"opacity-60"}`,children:Ue||"Add notes"}),y.jsx("button",{className:"self-start text-xs px-2 py-1 rounded-md border border-panel-strong",onClick:()=>N(!0),children:Ue?"Edit notes":"Add notes"})]})}),ne&&y.jsx("div",{className:`text-sm ${Ue?"text-foreground":"opacity-60"}`,children:Ue?`${Ue.slice(0,60)}${Ue.length>60?"...":""}`:"No notes"})]}),S?y.jsxs("div",{className:"flex flex-col gap-2",children:[y.jsx(ux,{value:I,onChange:q,placeholder:"Type and press comma/Enter"}),y.jsxs("div",{className:"flex flex-wrap gap-2",children:[y.jsx("button",{className:"text-sm px-3 py-1 rounded-md bg-accent",onClick:Fe,children:"Save"}),y.jsx("button",{className:"text-sm px-3 py-1 rounded-md border border-panel-strong",onClick:xe,children:"Cancel"})]})]}):y.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[y.jsx("button",{className:"text-sm px-2 py-1 rounded-md border border-panel-strong",onClick:_e,children:"Edit tags"}),y.jsx("button",{className:"text-sm px-2 py-1 rounded-md border border-red-300 text-red-700 dark:text-red-300 disabled:opacity-60",onClick:()=>c(t),disabled:f,children:f?"Deleting...":"Delete"})]})]})]})}function hx(t,e,n){const i=As(t.filename),r=ws(t.url),s=t.thumb_url?ws(t.thumb_url):null,a=e==="card"?"w-full h-full object-cover":"w-full h-full object-contain bg-panel-strong",o=dx.has(i),l=UA.has(i);if(e==="card")return s?y.jsx("img",{src:s,alt:t.filename,className:a}):i==="svg"?y.jsx("img",{src:r,alt:t.filename,className:a}):o?y.jsx($b,{url:r,ext:i,assetId:t.id,theme:n}):l?y.jsx(Wm,{url:r,assetId:t.id,filename:t.filename,imgClass:a}):y.jsx("div",{className:"flex items-center justify-center w-full h-full text-sm opacity-60",children:"No preview"});if(o)return y.jsx(Wb,{url:r,ext:i,assetId:t.id,theme:n},`${e}-${t.id}`);if(s||i==="svg"){const c=s||r;return y.jsx("img",{src:c,alt:t.filename,className:a})}return l?y.jsx(Wm,{url:r,assetId:t.id,filename:t.filename,imgClass:a}):y.jsx("div",{className:"flex items-center justify-center w-full h-full text-sm opacity-60",children:"Preview unavailable"})}function BA({asset:t,theme:e,onClose:n}){const i=r=>r.stopPropagation();return y.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4",onClick:n,children:y.jsxs("div",{className:"bg-panel-strong rounded-lg shadow-2xl max-w-5xl w-full max-h-full overflow-hidden flex flex-col",onClick:i,children:[y.jsxs("div",{className:"flex items-center justify-between border-b border-panel px-4 py-3",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-lg font-semibold",children:t.title||t.filename}),y.jsxs("p",{className:"text-sm opacity-70",children:[t.filename," · ",zA(t.size)]})]}),y.jsx("button",{className:"px-3 py-1 rounded-md border border-panel-strong text-sm",onClick:n,children:"Close"})]}),y.jsxs("div",{className:"p-4 space-y-4 overflow-auto",children:[y.jsx("div",{className:"w-full h-[70vh] min-h-[400px]",children:y.jsx("div",{className:"w-full h-full rounded-lg bg-panel-soft flex items-center justify-center overflow-hidden",children:hx(t,"modal",e)})}),y.jsx("div",{className:"flex flex-wrap gap-2",children:t.tags.length?t.tags.map(r=>y.jsx(Xf,{tag:r},r)):y.jsx("span",{className:"text-xs opacity-60",children:"No tags"})}),t.notes&&y.jsx("div",{className:"text-sm border border-dashed border-panel-strong rounded-md p-3 whitespace-pre-wrap",children:t.notes}),y.jsxs("div",{className:"flex gap-3",children:[y.jsx("a",{className:"px-3 py-2 rounded-md bg-accent text-sm",href:ws(t.url),download:t.filename,children:"Download"}),y.jsx("button",{className:"px-3 py-2 rounded-md border border-panel-strong text-sm",onClick:n,children:"Close"})]})]})]})})}function zA(t){if(!t&&t!==0)return"";const e=["B","KB","MB","GB"];let n=t,i=0;for(;n>=1024&&i<e.length-1;)n/=1024,i++;return`${n.toFixed(i===0?0:1)} ${e[i]}`}const Go="__all";function HA({selectedId:t,onSelect:e,onFoldersChanged:n,foldersVersion:i,onUnauthorized:r,onOpenSettings:s,activeView:a="library",onAssetsChanged:o}){const[l,c]=ue.useState([]),[f,d]=ue.useState(!1),[h,p]=ue.useState(""),[_,x]=ue.useState(null),[g,u]=ue.useState(new Set),[v,m]=ue.useState(!1),[M,R]=ue.useState(null),[b,C]=ue.useState(""),[U,S]=ue.useState([]),[T,I]=ue.useState(null),[q,se]=ue.useState(null),[N,B]=ue.useState(!1),Y=Df(),ne=async(P,H)=>{const X=P.filter(Se=>!Is(Se.file.name)),ce=P.filter(Se=>Is(Se.file.name));let k=0;const re=[],me=Se=>{k+=Se.uploaded,re.push(...Se.failed)};if(X.length){const Se=await oi(X,H,r);me(Se)}for(const Se of ce){let J=null;const De=Se.relativePath.split("/").filter(Boolean);De.pop();const Re=De.join("/");await Y.prompt({label:Se.file.name,onImportAsZip:async()=>{const Pe=await oi([Se],H,r);me(Pe)},loadEntries:async()=>{const Pe=await Fs(Se.file);return J=Pe.data,Pe.entries},onImportSelected:async Pe=>{J||(J=(await Fs(Se.file)).data);const Te=Nf(J||{},Pe,Re),ye=await oi(Te,H,r);me(ye)}})}k&&(o==null||o()),re.length&&alert(`Failed to upload: ${re.join(", ")}`)},D=P=>{var X;return Array.from(((X=P.dataTransfer)==null?void 0:X.types)||[]).includes("Files")},O=P=>H=>{D(H)&&(H.preventDefault(),H.stopPropagation(),N||se(P),H.dataTransfer.dropEffect="copy")},W=P=>async H=>{if(!D(H)||(H.preventDefault(),H.stopPropagation(),N))return;se(null),B(!0);const X=await gd(H.dataTransfer);if(!X.length){B(!1);return}await ne(X,P),B(!1)},ee=P=>{D(P)&&P.preventDefault()},ae=P=>{D(P)&&P.currentTarget===P.target&&(P.preventDefault(),se(null))},j=P=>{if(!D(P)||(P.preventDefault(),P.stopPropagation(),N))return;const H=q===Go?null:q;se(null),!(!H&&q!==Go)&&(B(!0),(async()=>{const X=await gd(P.dataTransfer);if(!X.length){B(!1);return}await ne(X,H),B(!1)})())},ie=(P,H)=>{const ce=(P.headers.get("content-disposition")||"").match(/filename="?([^\";]+)"?/i);return ce&&ce[1]||H},de=async(P,H)=>{const X=ie(P,H),ce=await P.blob(),k=URL.createObjectURL(ce),re=document.createElement("a");re.href=k,re.download=X,document.body.appendChild(re),re.click(),document.body.removeChild(re),URL.revokeObjectURL(k)},_e=(P,H)=>{if(P instanceof Dt){r==null||r();return}console.error(P),alert(H)},xe=async()=>{try{c(await h_())}catch(P){_e(P,"Unable to load folders.")}};ue.useEffect(()=>{xe()},[i]);const Fe=(P=null)=>{d(!0),p(""),x(P??(t||null))},Oe=async()=>{if(h.trim()){m(!0);try{await Lf(h.trim(),[],_||void 0),await xe(),_&&u(P=>new Set(P).add(_)),n==null||n()}catch(P){_e(P,"Folder creation failed. Please try again.")}finally{m(!1),d(!1)}}},Le=P=>{R(P.id),C(P.name),S(P.tags),I(P.parent_id||null)},Ue=async()=>{if(M){m(!0);try{await uS(M,b.trim()||"Untitled",U,T||void 0),await xe(),n==null||n()}catch(P){_e(P,"Folder update failed. Please try again.")}finally{m(!1),R(null),S([]),I(null)}}},z=async P=>{if(confirm("Delete folder? (Assets remain but become unassigned)")){m(!0);try{await dS(P),await xe(),n==null||n(),t===P&&e(null)}catch(H){_e(H,"Failed to delete folder.")}finally{m(!1)}}},nt=async P=>{m(!0);try{const H=await fS(P.id),X=(P.name||"folder").replace(/\s+/g,"_")||"folder";await de(H,`${X}.zip`)}catch(H){_e(H,"Unable to download folder.")}finally{m(!1)}},Me=be.useMemo(()=>{const P={};return l.forEach(H=>{P[H.id]=H}),P},[l]);ue.useEffect(()=>{if(!t)return;const P=new Set(g);let H=Me[t];const X=new Set;for(;H!=null&&H.parent_id&&!X.has(H.parent_id);)P.add(H.parent_id),X.add(H.parent_id),H=Me[H.parent_id];u(P)},[t,Me]);const Ce=be.useCallback((P,H)=>{let X=Me[P];const ce=new Set;for(;X;){if(!X.parent_id)return!1;if(X.parent_id===H)return!0;if(ce.has(X.parent_id))break;ce.add(X.parent_id),X=Me[X.parent_id]}return!1},[Me]),he=be.useCallback(P=>{const H=[P.name||"Untitled"];let X=P;const ce=new Set([P.id]);for(;X.parent_id;){const k=Me[X.parent_id];if(!k||ce.has(k.id))break;H.unshift(k.name||"Untitled"),ce.add(k.id),X=k}return H.join(" / ")},[Me]),Qe=be.useMemo(()=>{const P=[{id:null,name:"(Root)"}];return[...l].sort((X,ce)=>he(X).localeCompare(he(ce))).forEach(X=>P.push({id:X.id,name:he(X)})),P},[l,he]),Ne=be.useMemo(()=>{const P={},H=(X,ce)=>{P[X]||(P[X]=[]),P[X].push(ce)};return l.forEach(X=>H(X.parent_id||"__root",X)),Object.values(P).forEach(X=>X.sort((ce,k)=>ce.name.localeCompare(k.name))),P},[l]);ue.useEffect(()=>{const P=Ne.__root||[];P.length&&u(H=>{const X=new Set(H);return P.forEach(ce=>X.add(ce.id)),X})},[Ne]);const w=P=>{u(H=>{const X=new Set(H);return X.has(P)?X.delete(P):X.add(P),X})},E=P=>{const H=P.currentTarget.closest("details");H!=null&&H.open&&(H.open=!1)},$=(P,H=0)=>{const X=Ne[P.id]||[],ce=t===P.id,k=g.has(P.id),re=q===P.id;return y.jsxs("div",{className:"rounded-md",children:[y.jsxs("div",{className:`flex items-center gap-2 w-full rounded-md px-2 py-2 min-h-[38px] ${ce?"bg-accent-soft":""} ${re?"ring-2 ring-[color:var(--mv-accent)] ring-offset-1 ring-offset-[color:var(--mv-panel-strong)]":""}`,style:{paddingLeft:8+H*12},onDragOver:O(P.id),onDrop:W(P.id),children:[X.length?y.jsx("button",{onClick:()=>w(P.id),className:"text-xs w-5 h-5 flex items-center justify-center rounded border border-transparent hover:border-panel-strong","aria-label":k?"Collapse":"Expand",children:k?"▾":"▸"}):y.jsx("span",{className:"w-5 h-5"}),y.jsxs("button",{className:"flex-1 text-left truncate",onClick:()=>e(P.id),title:he(P),children:[H>0?" - ":"",P.name||"Untitled"]}),y.jsx("div",{className:"relative",children:y.jsxs("details",{className:"group",children:[y.jsx("summary",{className:"list-none w-8 h-8 rounded-md border border-panel-strong flex items-center justify-center text-xs cursor-pointer select-none",children:"⋯"}),y.jsxs("div",{className:"absolute right-0 mt-1 min-w-[140px] rounded-md border border-panel bg-panel-strong shadow-lg z-10",children:[y.jsx("button",{className:"w-full text-left px-3 py-2 text-sm hover:bg-panel-soft disabled:opacity-60",disabled:v,onClick:me=>{E(me),Fe(P.id)},children:"+ Subfolder"}),y.jsx("button",{className:"w-full text-left px-3 py-2 text-sm hover:bg-panel-soft disabled:opacity-60",disabled:v,onClick:me=>{E(me),Le(P)},children:"Edit"}),y.jsx("button",{className:"w-full text-left px-3 py-2 text-sm hover:bg-panel-soft disabled:opacity-60",disabled:v,onClick:me=>{E(me),nt(P)},children:"Zip download"}),y.jsx("button",{className:"w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/40 disabled:opacity-60",disabled:v,onClick:me=>{E(me),z(P.id)},children:"Delete"})]})]})})]}),k&&X.map(me=>$(me,H+1))]},P.id)};return y.jsxs("aside",{className:"w-64 border-r border-panel p-3 flex flex-col gap-3",onDragOver:ee,onDragLeave:ae,onDrop:j,children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsx("div",{className:"text-xs text-muted",children:"Location Manager"}),y.jsx("button",{className:"text-sm px-2 py-1 rounded-md border border-panel-strong",onClick:()=>Fe(null),children:"New"})]}),y.jsx("button",{className:`flex items-center gap-2 px-2 py-1 rounded-md border border-transparent ${t?"":"bg-accent-soft"} ${q===Go?"border-accent ring-2 ring-[color:var(--mv-accent)] ring-offset-1 ring-offset-[color:var(--mv-panel-strong)]":""}`,onClick:()=>e(null),onDragOver:O(Go),onDrop:W(null),children:y.jsx("span",{children:"All Items"})}),y.jsxs("div",{className:"flex flex-col gap-1",children:[(Ne.__root||[]).map(P=>$(P,0)),l.length===0&&y.jsx("div",{className:"text-sm opacity-60 px-2",children:"No folders yet"})]}),f&&y.jsxs("div",{className:"mt-2 flex flex-col gap-2",children:[y.jsx("input",{value:h,onChange:P=>p(P.target.value),placeholder:"Folder name",className:"px-2 py-1 text-sm rounded-md border border-panel-strong w-full bg-panel-strong text-foreground"}),y.jsx("select",{value:_||"",onChange:P=>x(P.target.value||null),className:"px-2 py-1 text-sm rounded-md border border-panel-strong w-full bg-panel-strong text-foreground",children:Qe.map(P=>y.jsx("option",{value:P.id||"",children:P.name},P.id??"root"))}),y.jsxs("div",{className:"flex gap-2",children:[y.jsx("button",{disabled:v,className:"text-sm px-3 py-1 rounded-md bg-accent flex-1",onClick:Oe,children:"Create"}),y.jsx("button",{className:"text-sm px-3 py-1 rounded-md border border-panel-strong flex-1",onClick:()=>{d(!1),x(null)},children:"Cancel"})]})]}),M&&y.jsxs("div",{className:"mt-2 flex flex-col gap-2",children:[y.jsx("input",{value:b,onChange:P=>C(P.target.value),className:"px-2 py-1 text-sm rounded-md border border-panel-strong bg-panel-strong text-foreground"}),y.jsx("select",{value:T||"",onChange:P=>I(P.target.value||null),className:"px-2 py-1 text-sm rounded-md border border-panel-strong bg-panel-strong text-foreground",children:Qe.filter(P=>!M||P.id!==M&&!(P.id&&Ce(P.id,M))).map(P=>y.jsx("option",{value:P.id||"",children:P.name},P.id??"root"))}),y.jsx(ux,{value:U,onChange:S,placeholder:"Add folder tags"}),y.jsxs("div",{className:"flex items-center gap-2",children:[y.jsx("button",{disabled:v,className:"text-sm px-2 py-1 rounded-md bg-accent",onClick:Ue,children:"Save"}),y.jsx("button",{className:"text-sm px-2 py-1 rounded-md border border-panel-strong",onClick:()=>{R(null),S([]),I(null)},children:"Cancel"})]})]}),y.jsx("div",{className:"mt-auto pt-2 border-t border-panel",children:y.jsxs("button",{type:"button",onClick:s,className:`w-full flex items-center gap-2 px-2 py-2 rounded-md border ${a==="settings"?"bg-accent-soft border-accent-soft":"border-panel-strong hover:bg-panel-soft"}`,"aria-label":"Settings",children:[y.jsx(GA,{className:"w-4 h-4"}),y.jsx("span",{className:"text-sm",children:"Settings"})]})}),Y.modal]})}function GA({className:t=""}){return y.jsxs("svg",{viewBox:"0 0 24 24",className:t,fill:"none",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[y.jsx("circle",{cx:"12",cy:"12",r:"3.2"}),y.jsx("path",{d:"M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1 1.54V21a2 2 0 0 1-4 0v-.08a1.7 1.7 0 0 0-1-1.54 1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.7 1.7 0 0 0 .34-1.87 1.7 1.7 0 0 0-1.54-1H3a2 2 0 0 1 0-4h.08a1.7 1.7 0 0 0 1.54-1 1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.7 1.7 0 0 0 1.87.34 1.7 1.7 0 0 0 1-1.54V3a2 2 0 0 1 4 0v.08a1.7 1.7 0 0 0 1 1.54 1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.7 1.7 0 0 0-.34 1.87 1.7 1.7 0 0 0 1.54 1H21a2 2 0 0 1 0 4h-.08a1.7 1.7 0 0 0-1.54 1z"})]})}const VA=t=>{switch(t){case"neon":return"/img/green_theme/Neon_Green_bgrm.png";case"purple":return"/img/purple_theme/Neon_Purple_logo_bgrm.png";case"blue":return"/img/blue_theme/Blue_Theme_logo_bgrm.png";case"dark":return"/img/whitelogo.png";default:return"/img/blacklogo.png"}};function WA({onSuccess:t,apiUp:e,theme:n}){const[i,r]=be.useState(""),[s,a]=be.useState(""),[o,l]=be.useState(!1),[c,f]=be.useState(null),d=async h=>{h.preventDefault(),f(null),l(!0);try{const p=await mS(i,s);t(p.token,p.expires_in)}catch(p){console.error(p),p instanceof Error?f(p.message):f("Login failed")}finally{l(!1)}};return y.jsxs("div",{className:"w-full max-w-md rounded-xl border border-panel bg-panel-soft p-6 shadow-xl backdrop-blur",children:[y.jsxs("div",{className:"mb-6 text-center space-y-3",children:[y.jsx("div",{className:"flex justify-center",children:y.jsx("img",{src:VA(n),alt:"Makers Vault",className:"max-h-40 w-auto"})}),y.jsx("p",{className:"text-sm text-muted",children:"Sign in to continue"})]}),e===!1&&y.jsx("div",{className:"mb-4 rounded-md bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100 px-3 py-2 text-sm",children:"API appears offline. Ensure the API service is running."}),c&&y.jsx("div",{className:"mb-4 rounded-md bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100 px-3 py-2 text-sm",children:c}),y.jsxs("form",{className:"space-y-4",onSubmit:d,children:[y.jsxs("div",{className:"flex flex-col gap-1",children:[y.jsx("label",{className:"text-sm font-medium",children:"Username"}),y.jsx("input",{value:i,onChange:h=>r(h.target.value),className:"px-3 py-2 rounded-md border border-panel-strong bg-panel-strong",autoComplete:"username",required:!0})]}),y.jsxs("div",{className:"flex flex-col gap-1",children:[y.jsx("label",{className:"text-sm font-medium",children:"Password"}),y.jsx("input",{type:"password",value:s,onChange:h=>a(h.target.value),className:"px-3 py-2 rounded-md border border-panel-strong bg-panel-strong",autoComplete:"current-password",required:!0})]}),y.jsx("button",{type:"submit",disabled:o,className:"w-full px-3 py-2 rounded-md bg-accent font-medium disabled:opacity-60",children:o?"Signing in...":"Sign in"})]})]})}const jA={system:"linear-gradient(135deg, #f8fafc 0%, #f8fafc 50%, #0b0f19 50%, #0b0f19 100%)",light:"linear-gradient(135deg, #ffffff, #e2e8f0)",dark:"linear-gradient(135deg, #0b0f19, #1f2937)",neon:"linear-gradient(135deg, #b6ff2b, #0a1508)",purple:"linear-gradient(135deg, #c77dff, #12091f)",blue:"linear-gradient(135deg, #74d4ff, #0a1324)"},px=["stl","3mf","step","stp","obj","lbrn","lbrn2"],XA=new Set(px);function $A(t){const e=/\.([^.]+)$/.exec(t||"");return((e==null?void 0:e[1])||"").toLowerCase()}function Fl(t){return(t||"").replace(/\\/g,"/").replace(/^\/+/,"")}function Mu(t){if(!t.length)return"";const n=Fl(t[0].relativePath||t[0].file.name).split("/").filter(Boolean);if(n.length<2)return"";const i=n[0];if(!i)return"";for(const r of t)if(!Fl(r.relativePath||r.file.name).startsWith(`${i}/`))return"";return i}function qm(t,e,n){const i=[];let r=0;for(const s of t){const a=$A(s.file.name);if(!XA.has(a)){r+=1;continue}let o=Fl(s.relativePath||s.file.name);if(n&&e){const l=o.split("/").filter(Boolean);l[0]===e&&(l.shift(),o=l.join("/"))}o||(o=s.file.name),i.push({...s,relativePath:o})}return{entries:i,skipped:r}}async function Ym(t){const e=[],n=async(r,s)=>{for await(const[,a]of r.entries())if(a.kind==="file"){const o=await a.getFile(),l=s?`${s}/${a.name}`:a.name;e.push({file:o,relativePath:l})}else if(a.kind==="directory"){const o=s?`${s}/${a.name}`:a.name;await n(a,o)}},i=t.name||"";return await n(t,i),e}function Km(t){return`${Fl(t.relativePath||t.file.name)}::${t.file.size}::${t.file.lastModified}`}function qA({settings:t,onChange:e,onAssetsChanged:n,onFoldersChanged:i,onUnauthorized:r,onSelectFolder:s}){const[a,o]=be.useState("root"),[l,c]=be.useState(t.makerworld.cookie),[f,d]=be.useState(t.thingiverse.cookie),[h,p]=be.useState(!t.makerworld.cookie),[_,x]=be.useState(!t.thingiverse.cookie),[g,u]=be.useState(t.network.publicUrl),[v,m]=be.useState(!1),[M,R]=be.useState(!0),[b,C]=be.useState(null),[U,S]=be.useState(!1),[T,I]=be.useState(!1),[q,se]=be.useState({enabled:!1,copy:!0}),[N,B]=be.useState([]),[Y,ne]=be.useState([]),[D,O]=be.useState(""),[W,ee]=be.useState(0),[ae,j]=be.useState(null),[ie,de]=be.useState(!1),[_e,xe]=be.useState(!1),[Fe,Oe]=be.useState(null),[Le,Ue]=be.useState(null),z=be.useRef(null),nt=be.useRef(new Set),Me=k=>{for(const re of k)nt.current.add(Km(re))},Ce=k=>k.filter(re=>!nt.current.has(Km(re))),he=(k,re,me,Se)=>{const{entries:J,skipped:De}=qm(k,re,me);return Se&&(nt.current=new Set),B(k),O(re),ne(J),ee(De),J},Qe=async(k,re,me)=>{var J;const Se=Ce(k);if(!Se.length){j(re||"No new files to upload.");return}de(!0),j("Uploading...");try{const De=await oi(Se,me||null,r);(J=De.uploadedEntries)!=null&&J.length?Me(De.uploadedEntries):De.uploaded&&Me(Se),De.uploaded&&(n==null||n(),i==null||i()),De.failed.length?j(`Uploaded ${De.uploaded} file(s). Failed: ${De.failed.length}.`):j(`Uploaded ${De.uploaded} file(s).`)}catch(De){console.error("Folder scan upload failed",De),j("Upload failed. Please try again.")}finally{de(!1)}},Ne=async k=>{if(!k||_e)return Ue(null),null;if(Le&&D===k)return Le;try{const me=(await Lf(k,[],void 0)).id;return Ue(me),me}catch(re){return re instanceof Dt?(r==null||r(),null):(console.error("Root folder creation failed",re),j("Failed to create the top-level folder."),null)}},w=k=>{e({...t,slicer:{...t.slicer,...k}})},E=k=>{e({...t,engraving:{...t.engraving,...k}})},$=k=>{e({...t,theme:{selected:k}})},P=k=>{e({...t,makerworld:{...t.makerworld,...k}})},H=k=>{e({...t,thingiverse:{...t.thingiverse,...k}})},X=async()=>{I(!0);try{const k=await _S({enabled:v,copy_files:M});m(!!k.enabled),R(!!k.copy_files),C(k.path||null),se({enabled:!!k.enabled,copy:!!k.copy_files})}catch(k){k instanceof Dt?r==null||r():console.error(k)}finally{I(!1)}},ce=k=>{e({...t,network:{...t.network,...k}})};if(be.useEffect(()=>{a==="imports"&&(c(t.makerworld.cookie||""),d(t.thingiverse.cookie||""),p(!t.makerworld.cookie),x(!t.thingiverse.cookie))},[a,t.makerworld.cookie,t.thingiverse.cookie]),be.useEffect(()=>{if(a!=="imports")return;let k=!0;return S(!0),(async()=>{try{const re=await vS();if(!k)return;m(!!re.enabled),R(!!re.copy_files),C(re.path||null),se({enabled:!!re.enabled,copy:!!re.copy_files})}catch(re){re instanceof Dt?r==null||r():console.error(re)}finally{k&&S(!1)}})(),()=>{k=!1}},[a,r]),be.useEffect(()=>{a==="network"&&u(t.network.publicUrl||"")},[a,t.network.publicUrl]),be.useEffect(()=>{h||c(t.makerworld.cookie||"")},[t.makerworld.cookie,h]),be.useEffect(()=>{_||d(t.thingiverse.cookie||"")},[t.thingiverse.cookie,_]),be.useEffect(()=>{a==="imports"&&z.current&&(z.current.setAttribute("webkitdirectory",""),z.current.setAttribute("directory",""))},[a]),be.useEffect(()=>{if(!N.length){ne([]),ee(0);return}const k=!!D,{entries:re,skipped:me}=qm(N,D,k);ne(re),ee(me)},[N,D]),a==="slicer")return y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-semibold",children:"Slicer"}),y.jsx("p",{className:"text-sm opacity-70",children:"Control the Open in Slicer button for 3D files."})]}),y.jsx("button",{className:"text-sm px-3 py-2 rounded-md border border-panel-strong",onClick:()=>o("root"),children:"Back"})]}),y.jsxs("div",{className:"rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-4",children:[y.jsxs("p",{className:"text-xs opacity-70",children:["Requires the Slicer Bridge helper to be installed on each client to register the makersvault-slicer:// protocol. Download the installer from"," ",y.jsx("a",{className:"underline",href:"https://github.com/VincentCinque/MakersVault/releases/latest",target:"_blank",rel:"noreferrer",children:"MakerVault releases"}),". On Linux, mark the download as executable if prompted."]}),y.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[y.jsx("input",{type:"checkbox",checked:t.slicer.enabled,onChange:k=>w({enabled:k.target.checked}),className:"w-4 h-4"}),y.jsx("span",{children:"Enable Open in Slicer"})]}),y.jsxs("div",{className:"flex flex-col gap-1",children:[y.jsx("label",{className:"text-xs uppercase tracking-wide text-muted",children:"Preferred slicer"}),y.jsx("select",{value:t.slicer.selected,onChange:k=>w({selected:k.target.value}),disabled:!t.slicer.enabled,className:"px-2 py-1 rounded-md border border-panel-strong bg-panel-strong text-sm",children:Rf.map(k=>y.jsx("option",{value:k.id,children:k.label},k.id))})]}),y.jsx("p",{className:"text-xs opacity-70",children:"The Open in Slicer button launches the custom protocol with a signed download URL."})]})]});if(a==="engraving")return y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-semibold",children:"Engraving Software"}),y.jsx("p",{className:"text-sm opacity-70",children:"Control the Open in Engraving Software button for laser-ready files."})]}),y.jsx("button",{className:"text-sm px-3 py-2 rounded-md border border-panel-strong",onClick:()=>o("root"),children:"Back"})]}),y.jsxs("div",{className:"rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-4",children:[y.jsxs("p",{className:"text-xs opacity-70",children:["Requires the Bridge helper to be installed on each client to register the makersvault-engrave:// protocol. Download the installer from"," ",y.jsx("a",{className:"underline",href:"https://github.com/VincentCinque/MakersVault/releases/latest",target:"_blank",rel:"noreferrer",children:"MakerVault releases"}),". On Linux, mark the download as executable if prompted."]}),y.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[y.jsx("input",{type:"checkbox",checked:t.engraving.enabled,onChange:k=>E({enabled:k.target.checked}),className:"w-4 h-4"}),y.jsx("span",{children:"Enable Open in Engraving Software"})]}),y.jsxs("div",{className:"flex flex-col gap-1",children:[y.jsx("label",{className:"text-xs uppercase tracking-wide text-muted",children:"Preferred engraving software"}),y.jsx("select",{value:t.engraving.selected,onChange:k=>E({selected:k.target.value}),disabled:!t.engraving.enabled,className:"px-2 py-1 rounded-md border border-panel-strong bg-panel-strong text-sm",children:Pf.map(k=>y.jsx("option",{value:k.id,children:k.label},k.id))})]}),y.jsx("p",{className:"text-xs opacity-70",children:"The Open in Engraving Software button launches the custom protocol with a signed download URL."})]})]});if(a==="theme")return y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-semibold",children:"Theme"}),y.jsx("p",{className:"text-sm opacity-70",children:"Choose how MakerVault looks and feels."})]}),y.jsx("button",{className:"text-sm px-3 py-2 rounded-md border border-panel-strong",onClick:()=>o("root"),children:"Back"})]}),y.jsx("div",{className:"rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-3",children:u_.map(k=>{const re=t.theme.selected===k.id;return y.jsxs("label",{className:`flex items-start gap-3 rounded-md border p-3 cursor-pointer transition ${re?"border-accent bg-accent-soft":"border-panel-strong bg-panel-strong"}`,children:[y.jsx("input",{type:"radio",name:"theme",value:k.id,checked:re,onChange:()=>$(k.id),className:"mt-1"}),y.jsx("span",{"aria-hidden":"true",className:`mt-0.5 h-8 w-8 shrink-0 rounded-md border ${re?"border-accent":"border-panel-strong"}`,style:{backgroundImage:jA[k.id]}}),y.jsxs("div",{children:[y.jsx("div",{className:"font-medium",children:k.label}),y.jsx("div",{className:"text-sm text-muted",children:k.description})]})]},k.id)})})]});if(a==="network"){const k=(g||"").trim().replace(/\/+$/,""),re=k?k.endsWith("/api")?k:`${k}/api`:"Auto (same origin)",me=k!==(t.network.publicUrl||"");return y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-semibold",children:"Reverse Proxy"}),y.jsx("p",{className:"text-sm opacity-70",children:"Point the app at your public domain."})]}),y.jsx("button",{className:"text-sm px-3 py-2 rounded-md border border-panel-strong",onClick:()=>o("root"),children:"Back"})]}),y.jsxs("div",{className:"rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-3",children:[y.jsxs("div",{children:[y.jsx("div",{className:"text-lg font-semibold",children:"Public URL"}),y.jsx("p",{className:"text-sm opacity-70",children:"Use this when MakerVault is available at a reverse proxy domain like https://makersvault.local. The API will be called at /api."})]}),y.jsx("p",{className:"text-xs opacity-70",children:"This setting is stored in your browser, so each device can point to a different URL if needed."}),y.jsxs("div",{className:"text-xs opacity-70 flex flex-col gap-1",children:[y.jsx("span",{children:"1) Configure your reverse proxy:"}),y.jsx("span",{children:"/ → web:5173"}),y.jsx("span",{children:"/api/* → api:8000"}),y.jsx("span",{children:"2) Save the public URL below, then open it in your browser."})]}),y.jsxs("div",{className:"flex flex-col gap-1",children:[y.jsx("label",{className:"text-xs uppercase tracking-wide text-muted",children:"Reverse proxy URL"}),y.jsx("input",{type:"text",value:g,onChange:Se=>u(Se.target.value),placeholder:"https://makersvault.local",className:"px-3 py-2 rounded-md border border-panel-strong bg-panel-soft text-sm"})]}),y.jsxs("div",{className:"text-xs opacity-70",children:["API base: ",re]}),y.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[y.jsx("button",{className:"text-xs px-2 py-1 rounded-md border border-panel-strong disabled:opacity-60",disabled:!me,onClick:()=>{const Se=k;ce({publicUrl:Se}),u(Se)},children:"Save"}),y.jsx("button",{className:"text-xs px-2 py-1 rounded-md border border-panel-strong disabled:opacity-60",disabled:!t.network.publicUrl,onClick:()=>{ce({publicUrl:""}),u("")},children:"Clear"})]})]})]})}if(a==="imports"){const k=N.length,re=Y.length,me=Y.length?Ce(Y).length:0,Se=v!==q.enabled||M!==q.copy;return y.jsxs("div",{className:"flex flex-col gap-4",children:[y.jsxs("div",{className:"flex items-center justify-between",children:[y.jsxs("div",{children:[y.jsx("h2",{className:"text-xl font-semibold",children:"Imports"}),y.jsx("p",{className:"text-sm opacity-70",children:"Manage session cookies and import local folders."})]}),y.jsx("button",{className:"text-sm px-3 py-2 rounded-md border border-panel-strong",onClick:()=>o("root"),children:"Back"})]}),y.jsxs("div",{className:"rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-3",children:[y.jsxs("div",{children:[y.jsx("div",{className:"text-lg font-semibold",children:"Mount import (server)"}),y.jsx("p",{className:"text-sm opacity-70",children:"Index files from the server's mounted volume. Enable the no-copy option to keep files in place and avoid duplicates."})]}),y.jsxs("p",{className:"text-xs opacity-70",children:["Mount path: ",b||"Not configured"]}),y.jsx("p",{className:"text-xs opacity-70",children:"Changes apply on the next server restart. In no-copy mode, mounted files stay read-only and renaming is disabled."}),y.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[y.jsx("input",{type:"checkbox",checked:v,onChange:J=>m(J.target.checked),className:"w-4 h-4",disabled:U||T}),y.jsx("span",{children:"Enable mount import on startup"})]}),y.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[y.jsx("input",{type:"checkbox",checked:M,onChange:J=>R(J.target.checked),className:"w-4 h-4",disabled:U||T}),y.jsx("span",{children:"Copy files into MakerVault storage (disable to use mounted files directly)"})]}),y.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[y.jsx("button",{className:"text-xs px-2 py-1 rounded-md border border-panel-strong disabled:opacity-60",disabled:!Se||U||T,onClick:X,children:T?"Saving...":"Save"}),U&&y.jsx("span",{className:"text-xs opacity-70",children:"Loading settings..."})]})]}),y.jsxs("div",{className:"rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-3",children:[y.jsxs("div",{children:[y.jsx("div",{className:"text-lg font-semibold",children:"Local folder scan"}),y.jsx("p",{className:"text-sm opacity-70",children:"Select a folder from this device (USB included) and import supported files. The folder name becomes a top-level folder, and subfolders stay nested."})]}),y.jsxs("p",{className:"text-xs opacity-70",children:["Supported extensions: ",px.join(", "),". Selecting a folder uploads immediately."]}),y.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[y.jsx("input",{type:"checkbox",checked:_e,onChange:J=>xe(J.target.checked),className:"w-4 h-4"}),y.jsx("span",{children:"Skip the top-level folder name"})]}),y.jsxs("div",{className:"flex items-center gap-2 flex-wrap",children:[y.jsx("input",{ref:z,type:"file",onChange:J=>{const De=Al(J.target.files||[]);if(!De.length){B([]),O(""),j(null),Oe(null),Ue(null),nt.current=new Set;return}const Re=Mu(De);Oe(null),Ue(null);const Te=he(De,Re,!!Re,!0);j(null),(async()=>{const ye=await Ne(Re);await Qe(Te,void 0,ye),s==null||s(ye??null)})(),z.current&&(z.current.value="")},multiple:!0,className:"hidden"}),y.jsx("button",{className:"text-sm px-3 py-2 rounded-md border border-panel-strong disabled:opacity-60",disabled:ie,onClick:async()=>{var De;const J=typeof window<"u"&&window.showDirectoryPicker;if(J)try{const Re=await J(),Pe=await Ym(Re);if(!Pe.length){B([]),O(Re.name||""),Oe(Re),Ue(null),nt.current=new Set,j("No files found in that folder.");return}Oe(Re),Ue(null);const Te=Re.name||Mu(Pe),He=he(Pe,Te,!!Te,!0);j(null),(async()=>{const Je=await Ne(Te);await Qe(He,void 0,Je),s==null||s(Je??null)})();return}catch(Re){if(Re instanceof DOMException&&Re.name==="AbortError")return;console.warn("Directory picker failed, falling back to file input",Re)}z.current&&(z.current.setAttribute("webkitdirectory",""),z.current.setAttribute("directory","")),(De=z.current)==null||De.click()},children:"Choose folder"}),y.jsx("button",{className:"text-sm px-3 py-2 rounded-md bg-accent hover:bg-accent-strong disabled:opacity-60",disabled:ie||re===0,onClick:async()=>{if(Fe){const De=await Ym(Fe);if(!De.length){B([]),O(Fe.name||""),ne([]),ee(0),j("No files found in that folder."),nt.current=new Set,Ue(null);return}const Re=Fe.name||Mu(De)||D,Te=he(De,Re,!!Re,!1),ye=await Ne(Re);await Qe(Te,"No new files to upload.",ye),s==null||s(ye??null);return}if(!Y.length){j("No supported files selected.");return}const J=await Ne(D);await Qe(Y,"No new files to upload.",J),s==null||s(J??null)},children:ie?"Uploading...":N.length?"Rescan now":"Scan now"}),y.jsx("button",{className:"text-xs px-2 py-1 rounded-md border border-panel-strong disabled:opacity-60",disabled:ie||k===0,onClick:()=>{B([]),O(""),j(null),Oe(null),Ue(null),nt.current=new Set},children:"Clear"})]}),y.jsx("div",{className:"text-xs opacity-70",children:k?`Selected ${k} file(s)${D?` from "${D}"`:""}. Ready: ${re}. New: ${me}. Skipped: ${W}.`:"No folder selected yet."}),ae&&y.jsx("div",{className:"text-xs font-medium",children:ae})]}),y.jsxs("div",{className:"rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-3",children:[y.jsxs("div",{children:[y.jsx("div",{className:"text-lg font-semibold",children:"MakerWorld"}),y.jsx("p",{className:"text-sm opacity-70",children:"Optional auth for importing MakerWorld models."})]}),y.jsx("p",{className:"text-xs opacity-70",children:"Paste the Cookie header from a logged-in makerworld.com request to lift download limits. This value is stored only in your browser."}),y.jsxs("div",{className:"flex items-center justify-between gap-3",children:[y.jsx("label",{className:"text-xs uppercase tracking-wide text-muted",children:"Session cookie"}),h?y.jsx("button",{className:"text-xs px-2 py-1 rounded-md border border-panel-strong disabled:opacity-60",onClick:()=>{P({cookie:l}),p(!1)},children:"Save"}):y.jsx("button",{className:"text-xs px-2 py-1 rounded-md border border-panel-strong",onClick:()=>p(!0),children:"Edit"})]}),y.jsx("textarea",{rows:4,value:l,onChange:J=>c(J.target.value),placeholder:"example: mw_session=...; mw_token=...;",readOnly:!h,className:`px-3 py-2 rounded-md border border-panel-strong bg-panel-soft text-sm ${h?"":"opacity-70"}`})]}),y.jsxs("div",{className:"rounded-lg border border-panel bg-panel-soft p-4 flex flex-col gap-3",children:[y.jsxs("div",{children:[y.jsx("div",{className:"text-lg font-semibold",children:"Thingiverse"}),y.jsx("p",{className:"text-sm opacity-70",children:"Optional auth for importing Thingiverse models."})]}),y.jsx("p",{className:"text-xs opacity-70",children:"Paste your Thingiverse Cookie header to pass Cloudflare checks when importing. This value is stored only in your browser."}),y.jsxs("div",{className:"flex items-center justify-between gap-3",children:[y.jsx("label",{className:"text-xs uppercase tracking-wide text-muted",children:"Session cookie"}),_?y.jsx("button",{className:"text-xs px-2 py-1 rounded-md border border-panel-strong disabled:opacity-60",onClick:()=>{H({cookie:f}),x(!1)},children:"Save"}):y.jsx("button",{className:"text-xs px-2 py-1 rounded-md border border-panel-strong",onClick:()=>x(!0),children:"Edit"})]}),y.jsx("textarea",{rows:4,value:f,onChange:J=>d(J.target.value),placeholder:"example: cf_clearance=...; PHPSESSID=...;",readOnly:!_,className:`px-3 py-2 rounded-md border border-panel-strong bg-panel-soft text-sm ${_?"":"opacity-70"}`})]})]})}return y.jsx("div",{className:"flex flex-col gap-4",children:y.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[y.jsxs("button",{className:"text-left rounded-lg border border-panel bg-panel-soft p-4 hover:shadow",onClick:()=>o("slicer"),children:[y.jsx("div",{className:"text-xs uppercase tracking-wide text-muted",children:"Slicer"}),y.jsx("div",{className:"text-lg font-semibold",children:"Open in Slicer"}),y.jsx("div",{className:"text-sm opacity-70",children:"Pick a slicer for 3D model downloads."})]}),y.jsxs("button",{className:"text-left rounded-lg border border-panel bg-panel-soft p-4 hover:shadow",onClick:()=>o("engraving"),children:[y.jsx("div",{className:"text-xs uppercase tracking-wide text-muted",children:"Engraving"}),y.jsx("div",{className:"text-lg font-semibold",children:"Open in Engraving Software"}),y.jsx("div",{className:"text-sm opacity-70",children:"Pick a laser app for vector and image files."})]}),y.jsxs("button",{className:"text-left rounded-lg border border-panel bg-panel-soft p-4 hover:shadow",onClick:()=>o("theme"),children:[y.jsx("div",{className:"text-xs uppercase tracking-wide text-muted",children:"Theme"}),y.jsx("div",{className:"text-lg font-semibold",children:"Appearance"}),y.jsx("div",{className:"text-sm opacity-70",children:"Switch between light, dark, and neon colors."})]}),y.jsxs("button",{className:"text-left rounded-lg border border-panel bg-panel-soft p-4 hover:shadow",onClick:()=>o("network"),children:[y.jsx("div",{className:"text-xs uppercase tracking-wide text-muted",children:"Reverse Proxy"}),y.jsx("div",{className:"text-lg font-semibold",children:"Public URL"}),y.jsx("div",{className:"text-sm opacity-70",children:"Set the domain for proxied access."})]}),y.jsxs("button",{className:"text-left rounded-lg border border-panel bg-panel-soft p-4 hover:shadow",onClick:()=>o("imports"),children:[y.jsx("div",{className:"text-xs uppercase tracking-wide text-muted",children:"Imports"}),y.jsx("div",{className:"text-lg font-semibold",children:"Imports & Folder Scan"}),y.jsx("div",{className:"text-sm opacity-70",children:"Manage import cookies and scan local folders."})]})]})})}const YA=6*60*60,KA=t=>{switch(t){case"neon":return"/img/green_theme/Neon_Green_bgrm.png";case"purple":return"/img/purple_theme/Neon_Purple_logo_bgrm.png";case"blue":return"/img/blue_theme/Blue_Theme_logo_bgrm.png";case"dark":return"/img/whitelogo.png";default:return"/img/blacklogo.png"}};function ZA(){const[t,e]=be.useState(()=>Cf()),[n,i]=be.useState(0),[r,s]=be.useState(null),[a,o]=be.useState(0),[l,c]=be.useState(null),[f,d]=be.useState(null),[h,p]=be.useState(!1),[_,x]=be.useState("library"),[g,u]=be.useState(()=>f_()),v=be.useMemo(()=>Yy(g.theme.selected),[g.theme.selected]);be.useEffect(()=>{if(typeof document>"u")return;const q=document.documentElement,se=v==="dark"||v==="neon"||v==="purple"||v==="blue";q.classList.toggle("dark",se),q.classList.toggle("theme-neon",v==="neon"),q.classList.toggle("theme-purple",v==="purple"),q.classList.toggle("theme-blue",v==="blue")},[v]),be.useEffect(()=>{(async()=>c(await hS()))()},[g.network.publicUrl]),be.useEffect(()=>{Xy(g)},[g]);const m=(l==null?void 0:l.ok)??null,M=(l==null?void 0:l.auth_required)??!0,R=(q,se)=>{rp(q),e(q),d(se),p(!1)},b=be.useCallback(()=>{h||(sp(),e(null),d(null),p(!0),alert("Your session has expired. Please sign in again."))},[h]),C=be.useCallback(()=>{o(q=>q+1)},[]),U=be.useCallback(()=>{i(q=>q+1)},[]),S=be.useCallback(q=>{s(q),x("library")},[]),T=()=>{sp(),e(null),d(null)},I=()=>{u(q=>({...q,network:{...q.network,publicUrl:""}}))};return be.useEffect(()=>{if(!t)return;const q=f??YA,se=Math.max(5*60*1e3,Math.min(q*.8*1e3,q*1e3-5*60*1e3)),N=window.setTimeout(async()=>{try{const B=await gS();rp(B.token),e(B.token),d(B.expires_in)}catch{b()}},se);return()=>window.clearTimeout(N)},[t,f,b]),M&&!t?y.jsx("div",{className:"min-h-screen flex items-center justify-center",children:y.jsx(WA,{onSuccess:R,apiUp:m,theme:v})}):y.jsxs("div",{className:"h-screen flex",children:[y.jsx(HA,{selectedId:r,onSelect:S,onFoldersChanged:C,foldersVersion:a,onAssetsChanged:U,onUnauthorized:b,onOpenSettings:()=>x("settings"),activeView:_}),y.jsxs("main",{className:"flex-1 p-4 overflow-auto",children:[m===!1&&y.jsxs("div",{className:"mb-3 p-2 rounded-md bg-red-100 text-red-900 dark:bg-red-900/30 dark:text-red-100 flex flex-wrap items-center gap-2",children:[y.jsxs("span",{children:["API unreachable at ",pS(),". Ensure the API container is running and reachable."]}),!!g.network.publicUrl&&y.jsx("button",{className:"px-2 py-1 rounded-md border border-red-400/70 text-xs font-medium",onClick:I,type:"button",children:"Reset saved proxy URL"})]}),y.jsxs("header",{className:"flex items-center justify-between mb-4 gap-4 flex-wrap",children:[_==="library"&&y.jsx("img",{src:KA(v),alt:"Makers Vault",className:"h-40 w-auto max-w-[520px]"}),y.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[_==="library"?y.jsx(bS,{folderId:r,makerworldCookie:g.makerworld.cookie,thingiverseCookie:g.thingiverse.cookie,onUploaded:U,onUnauthorized:b}):y.jsx("button",{className:"px-3 py-2 rounded-md border border-panel-strong text-sm",onClick:()=>x("library"),children:"Back to library"}),y.jsx("button",{onClick:()=>{confirm("Are you sure you want to log out?")&&T()},className:"px-3 py-2 rounded-md border border-panel-strong text-sm",children:"Log out"})]})]}),_==="library"?y.jsx(kA,{folderId:r,foldersVersion:a,onUnauthorized:b,slicerSettings:g.slicer,engravingSettings:g.engraving,theme:v},`${n+(r||"")}-${a}`):y.jsx(qA,{settings:g,onChange:u,onAssetsChanged:U,onFoldersChanged:C,onUnauthorized:b,onSelectFolder:S})]})]})}const mx=document.getElementById("root");if(!mx)throw new Error("#root not found");c_(mx).render(y.jsx(be.StrictMode,{children:y.jsx(ZA,{})}));export{ei as B,Xe as C,Xs as E,sC as F,Wi as G,sc as L,JA as M,tn as N,xr as P,Ya as Q,Bf as R,oC as S,eC as T,V,tt as a,tC as b,On as c,Qn as d,Db as e,ur as f,Ib as g,rC as h,nC as i,iC as j,Mn as k,QA as l,vx as m,aC as n,Vt as o,Et as p,Sd as q,qn as r,Ed as s,Dn as t,za as u,Wf as v};
