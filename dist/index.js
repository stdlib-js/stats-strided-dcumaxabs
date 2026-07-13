"use strict";var c=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(s){throw (r=0, s)}};};var m=c(function(G,p){
var x=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/math-base-special-abs/dist');function O(a,r,s,f,i,t,q){var e,o,u,n,v;if(a<=0)return i;if(o=f,u=q,e=d(r[o]),i[u]=e,u+=t,v=1,x(e)===!1)for(v;v<a;v++){if(o+=s,n=d(r[o]),x(n)){e=n;break}n>e&&(e=n),i[u]=e,u+=t}if(x(e))for(v;v<a;v++)i[u]=e,u+=t;return i}p.exports=O
});var y=c(function(H,l){
var j=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(a,r,s,f,i){var t=j(a,s),q=j(a,i);return g(a,r,s,t,f,i,q)}l.exports=h
});var k=c(function(I,_){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),R=y(),z=m();w(R,"ndarray",z);_.exports=R
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=k(),b,E=B(A(__dirname,"./native.js"));C(E)?b=D:b=E;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
