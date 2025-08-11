"use strict";var g=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var s=g(function(w,n){
var m=require('@stdlib/assert-is-collection/dist'),h=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function f(r,a,v){var t,u,e;if(!m(r))throw new TypeError(i('1UxAh',r));if(!h(a))throw new TypeError(i('1Ux2H',a));for(t=r.length,e=t-1;e>=0;e--)u=a.call(v,r[e],e,r),t!==r.length&&(e+=r.length-t,t=r.length),e>=0&&e<t&&(r[e]=u);return r}n.exports=f
});var p=s();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
