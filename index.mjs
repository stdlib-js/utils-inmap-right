// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";function s(s,n,o){var i,l,d;if(!t(s))throw new TypeError(e("1UxAh,O3",s));if(!r(n))throw new TypeError(e("1Ux2H,G6",n));for(d=(i=s.length)-1;d>=0;d--)l=n.call(o,s[d],d,s),i!==s.length&&(d+=s.length-i,i=s.length),d>=0&&d<i&&(s[d]=l);return s}export{s as default};
//# sourceMappingURL=index.mjs.map
