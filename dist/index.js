"use strict";var g=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(u){throw (e=0, u)}};};var v=g(function(w,s){
var m=require('@stdlib/assert-is-collection/dist'),h=require('@stdlib/assert-is-function/dist'),n=require('@stdlib/error-tools-fmtprodmsg/dist');function f(r,e,u){var t,i,a;if(!m(r))throw new TypeError(n('1UxAh',r));if(!h(e))throw new TypeError(n('1Ux2H',e));for(t=r.length,a=t-1;a>=0;a--)i=e.call(u,r[a],a,r),t!==r.length&&(a+=r.length-t,t=r.length),a>=0&&a<t&&(r[a]=i);return r}s.exports=f
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
