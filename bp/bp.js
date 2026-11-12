(()=>{var pA=Object.create;var bh=Object.defineProperty;var uA=Object.getOwnPropertyDescriptor;var mA=Object.getOwnPropertyNames;var fA=Object.getPrototypeOf,dA=Object.prototype.hasOwnProperty;var Ut=(r,t)=>()=>{try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}},Et=(r,t)=>{for(var e in t)bh(r,e,{get:t[e],enumerable:!0})},hA=(r,t,e,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of mA(t))!dA.call(r,n)&&n!==e&&bh(r,n,{get:()=>t[n],enumerable:!(o=uA(t,n))||o.enumerable});return r};var Ou=(r,t,e)=>(e=r!=null?pA(fA(r)):{},hA(t||!r||!r.__esModule?bh(e,"default",{value:r,enumerable:!0}):e,r));var l0=Ut((_K,c0)=>{c0.exports=Kt;var dr=null;try{dr=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function Kt(r,t,e){this.low=r|0,this.high=t|0,this.unsigned=!!e}Kt.prototype.__isLong__;Object.defineProperty(Kt.prototype,"__isLong__",{value:!0});function er(r){return(r&&r.__isLong__)===!0}Kt.isLong=er;var Jb={},t0={};function gi(r,t){var e,o,n;return t?(r>>>=0,(n=0<=r&&r<256)&&(o=t0[r],o)?o:(e=jt(r,(r|0)<0?-1:0,!0),n&&(t0[r]=e),e)):(r|=0,(n=-128<=r&&r<128)&&(o=Jb[r],o)?o:(e=jt(r,r<0?-1:0,!1),n&&(Jb[r]=e),e))}Kt.fromInt=gi;function hr(r,t){if(isNaN(r))return t?hi:gr;if(t){if(r<0)return hi;if(r>=n0)return i0}else{if(r<=-r0)return tr;if(r+1>=r0)return a0}return r<0?hr(-r,t).neg():jt(r%Fc|0,r/Fc|0,t)}Kt.fromNumber=hr;function jt(r,t,e){return new Kt(r,t,e)}Kt.fromBits=jt;var zu=Math.pow;function Ah(r,t,e){if(r.length===0)throw Error("empty string");if(r==="NaN"||r==="Infinity"||r==="+Infinity"||r==="-Infinity")return gr;if(typeof t=="number"?(e=t,t=!1):t=!!t,e=e||10,e<2||36<e)throw RangeError("radix");var o;if((o=r.indexOf("-"))>0)throw Error("interior hyphen");if(o===0)return Ah(r.substring(1),t,e).neg();for(var n=hr(zu(e,8)),s=gr,a=0;a<r.length;a+=8){var i=Math.min(8,r.length-a),c=parseInt(r.substring(a,a+i),e);if(i<8){var l=hr(zu(e,i));s=s.mul(l).add(hr(c))}else s=s.mul(n),s=s.add(hr(c))}return s.unsigned=t,s}Kt.fromString=Ah;function Ar(r,t){return typeof r=="number"?hr(r,t):typeof r=="string"?Ah(r,t):jt(r.low,r.high,typeof t=="boolean"?t:r.unsigned)}Kt.fromValue=Ar;var e0=65536,XA=1<<24,Fc=e0*e0,n0=Fc*Fc,r0=n0/2,o0=gi(XA),gr=gi(0);Kt.ZERO=gr;var hi=gi(0,!0);Kt.UZERO=hi;var Dc=gi(1);Kt.ONE=Dc;var s0=gi(1,!0);Kt.UONE=s0;var $h=gi(-1);Kt.NEG_ONE=$h;var a0=jt(-1,2147483647,!1);Kt.MAX_VALUE=a0;var i0=jt(-1,-1,!0);Kt.MAX_UNSIGNED_VALUE=i0;var tr=jt(0,-2147483648,!1);Kt.MIN_VALUE=tr;var tt=Kt.prototype;tt.toInt=function(){return this.unsigned?this.low>>>0:this.low};tt.toNumber=function(){return this.unsigned?(this.high>>>0)*Fc+(this.low>>>0):this.high*Fc+(this.low>>>0)};tt.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(tr)){var e=hr(t),o=this.div(e),n=o.mul(e).sub(this);return o.toString(t)+n.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var s=hr(zu(t,6),this.unsigned),a=this,i="";;){var c=a.div(s),l=a.sub(c.mul(s)).toInt()>>>0,p=l.toString(t);if(a=c,a.isZero())return p+i;for(;p.length<6;)p="0"+p;i=""+p+i}};tt.getHighBits=function(){return this.high};tt.getHighBitsUnsigned=function(){return this.high>>>0};tt.getLowBits=function(){return this.low};tt.getLowBitsUnsigned=function(){return this.low>>>0};tt.getNumBitsAbs=function(){if(this.isNegative())return this.eq(tr)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,e=31;e>0&&(t&1<<e)==0;e--);return this.high!=0?e+33:e+1};tt.isZero=function(){return this.high===0&&this.low===0};tt.eqz=tt.isZero;tt.isNegative=function(){return!this.unsigned&&this.high<0};tt.isPositive=function(){return this.unsigned||this.high>=0};tt.isOdd=function(){return(this.low&1)===1};tt.isEven=function(){return(this.low&1)===0};tt.equals=function(t){return er(t)||(t=Ar(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};tt.eq=tt.equals;tt.notEquals=function(t){return!this.eq(t)};tt.neq=tt.notEquals;tt.ne=tt.notEquals;tt.lessThan=function(t){return this.comp(t)<0};tt.lt=tt.lessThan;tt.lessThanOrEqual=function(t){return this.comp(t)<=0};tt.lte=tt.lessThanOrEqual;tt.le=tt.lessThanOrEqual;tt.greaterThan=function(t){return this.comp(t)>0};tt.gt=tt.greaterThan;tt.greaterThanOrEqual=function(t){return this.comp(t)>=0};tt.gte=tt.greaterThanOrEqual;tt.ge=tt.greaterThanOrEqual;tt.compare=function(t){if(er(t)||(t=Ar(t)),this.eq(t))return 0;var e=this.isNegative(),o=t.isNegative();return e&&!o?-1:!e&&o?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};tt.comp=tt.compare;tt.negate=function(){return!this.unsigned&&this.eq(tr)?tr:this.not().add(Dc)};tt.neg=tt.negate;tt.add=function(t){er(t)||(t=Ar(t));var e=this.high>>>16,o=this.high&65535,n=this.low>>>16,s=this.low&65535,a=t.high>>>16,i=t.high&65535,c=t.low>>>16,l=t.low&65535,p=0,u=0,m=0,f=0;return f+=s+l,m+=f>>>16,f&=65535,m+=n+c,u+=m>>>16,m&=65535,u+=o+i,p+=u>>>16,u&=65535,p+=e+a,p&=65535,jt(m<<16|f,p<<16|u,this.unsigned)};tt.subtract=function(t){return er(t)||(t=Ar(t)),this.add(t.neg())};tt.sub=tt.subtract;tt.multiply=function(t){if(this.isZero())return gr;if(er(t)||(t=Ar(t)),dr){var e=dr.mul(this.low,this.high,t.low,t.high);return jt(e,dr.get_high(),this.unsigned)}if(t.isZero())return gr;if(this.eq(tr))return t.isOdd()?tr:gr;if(t.eq(tr))return this.isOdd()?tr:gr;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(o0)&&t.lt(o0))return hr(this.toNumber()*t.toNumber(),this.unsigned);var o=this.high>>>16,n=this.high&65535,s=this.low>>>16,a=this.low&65535,i=t.high>>>16,c=t.high&65535,l=t.low>>>16,p=t.low&65535,u=0,m=0,f=0,d=0;return d+=a*p,f+=d>>>16,d&=65535,f+=s*p,m+=f>>>16,f&=65535,f+=a*l,m+=f>>>16,f&=65535,m+=n*p,u+=m>>>16,m&=65535,m+=s*l,u+=m>>>16,m&=65535,m+=a*c,u+=m>>>16,m&=65535,u+=o*p+n*l+s*c+a*i,u&=65535,jt(f<<16|d,u<<16|m,this.unsigned)};tt.mul=tt.multiply;tt.divide=function(t){if(er(t)||(t=Ar(t)),t.isZero())throw Error("division by zero");if(dr){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var e=(this.unsigned?dr.div_u:dr.div_s)(this.low,this.high,t.low,t.high);return jt(e,dr.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?hi:gr;var o,n,s;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return hi;if(t.gt(this.shru(1)))return s0;s=hi}else{if(this.eq(tr)){if(t.eq(Dc)||t.eq($h))return tr;if(t.eq(tr))return Dc;var a=this.shr(1);return o=a.div(t).shl(1),o.eq(gr)?t.isNegative()?Dc:$h:(n=this.sub(t.mul(o)),s=o.add(n.div(t)),s)}else if(t.eq(tr))return this.unsigned?hi:gr;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();s=gr}for(n=this;n.gte(t);){o=Math.max(1,Math.floor(n.toNumber()/t.toNumber()));for(var i=Math.ceil(Math.log(o)/Math.LN2),c=i<=48?1:zu(2,i-48),l=hr(o),p=l.mul(t);p.isNegative()||p.gt(n);)o-=c,l=hr(o,this.unsigned),p=l.mul(t);l.isZero()&&(l=Dc),s=s.add(l),n=n.sub(p)}return s};tt.div=tt.divide;tt.modulo=function(t){if(er(t)||(t=Ar(t)),dr){var e=(this.unsigned?dr.rem_u:dr.rem_s)(this.low,this.high,t.low,t.high);return jt(e,dr.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};tt.mod=tt.modulo;tt.rem=tt.modulo;tt.not=function(){return jt(~this.low,~this.high,this.unsigned)};tt.and=function(t){return er(t)||(t=Ar(t)),jt(this.low&t.low,this.high&t.high,this.unsigned)};tt.or=function(t){return er(t)||(t=Ar(t)),jt(this.low|t.low,this.high|t.high,this.unsigned)};tt.xor=function(t){return er(t)||(t=Ar(t)),jt(this.low^t.low,this.high^t.high,this.unsigned)};tt.shiftLeft=function(t){return er(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?jt(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):jt(0,this.low<<t-32,this.unsigned)};tt.shl=tt.shiftLeft;tt.shiftRight=function(t){return er(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?jt(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):jt(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};tt.shr=tt.shiftRight;tt.shiftRightUnsigned=function(t){if(er(t)&&(t=t.toInt()),t&=63,t===0)return this;var e=this.high;if(t<32){var o=this.low;return jt(o>>>t|e<<32-t,e>>>t,this.unsigned)}else return t===32?jt(e,0,this.unsigned):jt(e>>>t-32,0,this.unsigned)};tt.shru=tt.shiftRightUnsigned;tt.shr_u=tt.shiftRightUnsigned;tt.toSigned=function(){return this.unsigned?jt(this.low,this.high,!1):this};tt.toUnsigned=function(){return this.unsigned?this:jt(this.low,this.high,!0)};tt.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};tt.toBytesLE=function(){var t=this.high,e=this.low;return[e&255,e>>>8&255,e>>>16&255,e>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};tt.toBytesBE=function(){var t=this.high,e=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,e>>>24,e>>>16&255,e>>>8&255,e&255]};Kt.fromBytes=function(t,e,o){return o?Kt.fromBytesLE(t,e):Kt.fromBytesBE(t,e)};Kt.fromBytesLE=function(t,e){return new Kt(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,e)};Kt.fromBytesBE=function(t,e){return new Kt(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],e)}});var K0=Ut(()=>{});var j0=Ut(()=>{});var iw=Ut((aw,Mg)=>{(function(r,t,e){function o(i){var c=this,l=a();c.next=function(){var p=2091639*c.s0+c.c*23283064365386963e-26;return c.s0=c.s1,c.s1=c.s2,c.s2=p-(c.c=p|0)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(i),c.s0<0&&(c.s0+=1),c.s1-=l(i),c.s1<0&&(c.s1+=1),c.s2-=l(i),c.s2<0&&(c.s2+=1),l=null}function n(i,c){return c.c=i.c,c.s0=i.s0,c.s1=i.s1,c.s2=i.s2,c}function s(i,c){var l=new o(i),p=c&&c.state,u=l.next;return u.int32=function(){return l.next()*4294967296|0},u.double=function(){return u()+(u()*2097152|0)*11102230246251565e-32},u.quick=u,p&&(typeof p=="object"&&n(p,l),u.state=function(){return n(l,{})}),u}function a(){var i=4022871197,c=function(l){l=String(l);for(var p=0;p<l.length;p++){i+=l.charCodeAt(p);var u=.02519603282416938*i;i=u>>>0,u-=i,u*=i,i=u>>>0,u-=i,i+=u*4294967296}return(i>>>0)*23283064365386963e-26};return c}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.alea=s})(aw,typeof Mg=="object"&&Mg,typeof define=="function"&&define)});var lw=Ut((cw,Vg)=>{(function(r,t,e){function o(a){var i=this,c="";i.x=0,i.y=0,i.z=0,i.w=0,i.next=function(){var p=i.x^i.x<<11;return i.x=i.y,i.y=i.z,i.z=i.w,i.w^=i.w>>>19^p^p>>>8},a===(a|0)?i.x=a:c+=a;for(var l=0;l<c.length+64;l++)i.x^=c.charCodeAt(l)|0,i.next()}function n(a,i){return i.x=a.x,i.y=a.y,i.z=a.z,i.w=a.w,i}function s(a,i){var c=new o(a),l=i&&i.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var u=c.next()>>>11,m=(c.next()>>>0)/4294967296,f=(u+m)/(1<<21);while(f===0);return f},p.int32=c.next,p.quick=p,l&&(typeof l=="object"&&n(l,c),p.state=function(){return n(c,{})}),p}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xor128=s})(cw,typeof Vg=="object"&&Vg,typeof define=="function"&&define)});var uw=Ut((pw,Gg)=>{(function(r,t,e){function o(a){var i=this,c="";i.next=function(){var p=i.x^i.x>>>2;return i.x=i.y,i.y=i.z,i.z=i.w,i.w=i.v,(i.d=i.d+362437|0)+(i.v=i.v^i.v<<4^(p^p<<1))|0},i.x=0,i.y=0,i.z=0,i.w=0,i.v=0,a===(a|0)?i.x=a:c+=a;for(var l=0;l<c.length+64;l++)i.x^=c.charCodeAt(l)|0,l==c.length&&(i.d=i.x<<10^i.x>>>4),i.next()}function n(a,i){return i.x=a.x,i.y=a.y,i.z=a.z,i.w=a.w,i.v=a.v,i.d=a.d,i}function s(a,i){var c=new o(a),l=i&&i.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var u=c.next()>>>11,m=(c.next()>>>0)/4294967296,f=(u+m)/(1<<21);while(f===0);return f},p.int32=c.next,p.quick=p,l&&(typeof l=="object"&&n(l,c),p.state=function(){return n(c,{})}),p}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xorwow=s})(pw,typeof Gg=="object"&&Gg,typeof define=="function"&&define)});var fw=Ut((mw,Ug)=>{(function(r,t,e){function o(a){var i=this;i.next=function(){var l=i.x,p=i.i,u,m,f;return u=l[p],u^=u>>>7,m=u^u<<24,u=l[p+1&7],m^=u^u>>>10,u=l[p+3&7],m^=u^u>>>3,u=l[p+4&7],m^=u^u<<7,u=l[p+7&7],u=u^u<<13,m^=u^u<<9,l[p]=m,i.i=p+1&7,m};function c(l,p){var u,m,f=[];if(p===(p|0))m=f[0]=p;else for(p=""+p,u=0;u<p.length;++u)f[u&7]=f[u&7]<<15^p.charCodeAt(u)+f[u+1&7]<<13;for(;f.length<8;)f.push(0);for(u=0;u<8&&f[u]===0;++u);for(u==8?m=f[7]=-1:m=f[u],l.x=f,l.i=0,u=256;u>0;--u)l.next()}c(i,a)}function n(a,i){return i.x=a.x.slice(),i.i=a.i,i}function s(a,i){a==null&&(a=+new Date);var c=new o(a),l=i&&i.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var u=c.next()>>>11,m=(c.next()>>>0)/4294967296,f=(u+m)/(1<<21);while(f===0);return f},p.int32=c.next,p.quick=p,l&&(l.x&&n(l,c),p.state=function(){return n(c,{})}),p}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xorshift7=s})(mw,typeof Ug=="object"&&Ug,typeof define=="function"&&define)});var hw=Ut((dw,zg)=>{(function(r,t,e){function o(a){var i=this;i.next=function(){var l=i.w,p=i.X,u=i.i,m,f;return i.w=l=l+1640531527|0,f=p[u+34&127],m=p[u=u+1&127],f^=f<<13,m^=m<<17,f^=f>>>15,m^=m>>>12,f=p[u]=f^m,i.i=u,f+(l^l>>>16)|0};function c(l,p){var u,m,f,d,g,h=[],x=128;for(p===(p|0)?(m=p,p=null):(p=p+"\0",m=0,x=Math.max(x,p.length)),f=0,d=-32;d<x;++d)p&&(m^=p.charCodeAt((d+32)%p.length)),d===0&&(g=m),m^=m<<10,m^=m>>>15,m^=m<<4,m^=m>>>13,d>=0&&(g=g+1640531527|0,u=h[d&127]^=m+g,f=u==0?f+1:0);for(f>=128&&(h[(p&&p.length||0)&127]=-1),f=127,d=512;d>0;--d)m=h[f+34&127],u=h[f=f+1&127],m^=m<<13,u^=u<<17,m^=m>>>15,u^=u>>>12,h[f]=m^u;l.w=g,l.X=h,l.i=f}c(i,a)}function n(a,i){return i.i=a.i,i.w=a.w,i.X=a.X.slice(),i}function s(a,i){a==null&&(a=+new Date);var c=new o(a),l=i&&i.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var u=c.next()>>>11,m=(c.next()>>>0)/4294967296,f=(u+m)/(1<<21);while(f===0);return f},p.int32=c.next,p.quick=p,l&&(l.X&&n(l,c),p.state=function(){return n(c,{})}),p}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.xor4096=s})(dw,typeof zg=="object"&&zg,typeof define=="function"&&define)});var xw=Ut((gw,Wg)=>{(function(r,t,e){function o(a){var i=this,c="";i.next=function(){var p=i.b,u=i.c,m=i.d,f=i.a;return p=p<<25^p>>>7^u,u=u-m|0,m=m<<24^m>>>8^f,f=f-p|0,i.b=p=p<<20^p>>>12^u,i.c=u=u-m|0,i.d=m<<16^u>>>16^f,i.a=f-p|0},i.a=0,i.b=0,i.c=-1640531527,i.d=1367130551,a===Math.floor(a)?(i.a=a/4294967296|0,i.b=a|0):c+=a;for(var l=0;l<c.length+20;l++)i.b^=c.charCodeAt(l)|0,i.next()}function n(a,i){return i.a=a.a,i.b=a.b,i.c=a.c,i.d=a.d,i}function s(a,i){var c=new o(a),l=i&&i.state,p=function(){return(c.next()>>>0)/4294967296};return p.double=function(){do var u=c.next()>>>11,m=(c.next()>>>0)/4294967296,f=(u+m)/(1<<21);while(f===0);return f},p.int32=c.next,p.quick=p,l&&(typeof l=="object"&&n(l,c),p.state=function(){return n(c,{})}),p}t&&t.exports?t.exports=s:e&&e.amd?e(function(){return s}):this.tychei=s})(gw,typeof Wg=="object"&&Wg,typeof define=="function"&&define)});var yw=Ut(()=>{});var ww=Ut((bw,lm)=>{(function(r,t,e){var o=256,n=6,s=52,a="random",i=e.pow(o,n),c=e.pow(2,s),l=c*2,p=o-1,u;function m(I,T,E){var $=[];T=T==!0?{entropy:!0}:T||{};var A=h(g(T.entropy?[I,b(t)]:I??x(),3),$),D=new f($),_=function(){for(var O=D.g(n),L=i,B=0;O<c;)O=(O+B)*o,L*=o,B=D.g(1);for(;O>=l;)O/=2,L/=2,B>>>=1;return(O+B)/L};return _.int32=function(){return D.g(4)|0},_.quick=function(){return D.g(4)/4294967296},_.double=_,h(b(D.S),t),(T.pass||E||function(O,L,B,M){return M&&(M.S&&d(M,D),O.state=function(){return d(D,{})}),B?(e[a]=O,L):O})(_,A,"global"in T?T.global:this==e,T.state)}function f(I){var T,E=I.length,$=this,A=0,D=$.i=$.j=0,_=$.S=[];for(E||(I=[E++]);A<o;)_[A]=A++;for(A=0;A<o;A++)_[A]=_[D=p&D+I[A%E]+(T=_[A])],_[D]=T;($.g=function(O){for(var L,B=0,M=$.i,G=$.j,V=$.S;O--;)L=V[M=p&M+1],B=B*o+V[p&(V[M]=V[G=p&G+L])+(V[G]=L)];return $.i=M,$.j=G,B})(o)}function d(I,T){return T.i=I.i,T.j=I.j,T.S=I.S.slice(),T}function g(I,T){var E=[],$=typeof I,A;if(T&&$=="object")for(A in I)try{E.push(g(I[A],T-1))}catch{}return E.length?E:$=="string"?I:I+"\0"}function h(I,T){for(var E=I+"",$,A=0;A<E.length;)T[p&A]=p&($^=T[p&A]*19)+E.charCodeAt(A++);return b(T)}function x(){try{var I;return u&&(I=u.randomBytes)?I=I(o):(I=new Uint8Array(o),(r.crypto||r.msCrypto).getRandomValues(I)),b(I)}catch{var T=r.navigator,E=T&&T.plugins;return[+new Date,r,E,r.screen,b(t)]}}function b(I){return String.fromCharCode.apply(0,I)}if(h(e.random(),t),typeof lm=="object"&&lm.exports){lm.exports=m;try{u=yw()}catch{}}else typeof define=="function"&&define.amd?define(function(){return m}):e["seed"+a]=m})(typeof self<"u"?self:bw,[],Math)});var Hg=Ut((ost,Cw)=>{var __=iw(),O_=lw(),P_=uw(),L_=fw(),B_=hw(),M_=xw(),Ui=ww();Ui.alea=__;Ui.xor128=O_;Ui.xorwow=P_;Ui.xorshift7=L_;Ui.xor4096=B_;Ui.tychei=M_;Cw.exports=Ui});var L2=Ut((ype,P2)=>{function mq(r){var t=new Qe(r),e=t.readChunk();if(e.id!="MThd")throw"Bad MIDI file.  Expected 'MHdr', got: '"+e.id+"'";for(var o=fq(e.data),n=[],s=0;!t.eof()&&s<o.numTracks;s++){var a=t.readChunk();if(a.id!="MTrk")throw"Bad MIDI file.  Expected 'MTrk', got: '"+a.id+"'";var i=dq(a.data);n.push(i)}return{header:o,tracks:n}}function fq(r){var t=new Qe(r),e=t.readUInt16(),o=t.readUInt16(),n={format:e,numTracks:o},s=t.readUInt16();return s&32768?(n.framesPerSecond=256-(s>>8),n.ticksPerFrame=s&255):n.ticksPerBeat=s,n}function dq(r){for(var t=new Qe(r),e=[];!t.eof();){var o=s();e.push(o)}return e;var n;function s(){var a={};a.deltaTime=t.readVarInt();var i=t.readUInt8();if((i&240)===240)if(i===255){a.meta=!0;var c=t.readUInt8(),l=t.readVarInt();switch(c){case 0:if(a.type="sequenceNumber",l!==2)throw"Expected length for sequenceNumber event is 2, got "+l;return a.number=t.readUInt16(),a;case 1:return a.type="text",a.text=t.readString(l),a;case 2:return a.type="copyrightNotice",a.text=t.readString(l),a;case 3:return a.type="trackName",a.text=t.readString(l),a;case 4:return a.type="instrumentName",a.text=t.readString(l),a;case 5:return a.type="lyrics",a.text=t.readString(l),a;case 6:return a.type="marker",a.text=t.readString(l),a;case 7:return a.type="cuePoint",a.text=t.readString(l),a;case 32:if(a.type="channelPrefix",l!=1)throw"Expected length for channelPrefix event is 1, got "+l;return a.channel=t.readUInt8(),a;case 33:if(a.type="portPrefix",l!=1)throw"Expected length for portPrefix event is 1, got "+l;return a.port=t.readUInt8(),a;case 47:if(a.type="endOfTrack",l!=0)throw"Expected length for endOfTrack event is 0, got "+l;return a;case 81:if(a.type="setTempo",l!=3)throw"Expected length for setTempo event is 3, got "+l;return a.microsecondsPerBeat=t.readUInt24(),a;case 84:if(a.type="smpteOffset",l!=5)throw"Expected length for smpteOffset event is 5, got "+l;var p=t.readUInt8(),u={0:24,32:25,64:29,96:30};return a.frameRate=u[p&96],a.hour=p&31,a.min=t.readUInt8(),a.sec=t.readUInt8(),a.frame=t.readUInt8(),a.subFrame=t.readUInt8(),a;case 88:if(a.type="timeSignature",l!=2&&l!=4)throw"Expected length for timeSignature event is 4 or 2, got "+l;return a.numerator=t.readUInt8(),a.denominator=1<<t.readUInt8(),l===4?(a.metronome=t.readUInt8(),a.thirtyseconds=t.readUInt8()):(a.metronome=36,a.thirtyseconds=8),a;case 89:if(a.type="keySignature",l!=2)throw"Expected length for keySignature event is 2, got "+l;return a.key=t.readInt8(),a.scale=t.readUInt8(),a;case 127:return a.type="sequencerSpecific",a.data=t.readBytes(l),a;default:return a.type="unknownMeta",a.data=t.readBytes(l),a.metatypeByte=c,a}}else if(i==240){a.type="sysEx";var l=t.readVarInt();return a.data=t.readBytes(l),a}else if(i==247){a.type="endSysEx";var l=t.readVarInt();return a.data=t.readBytes(l),a}else throw"Unrecognised MIDI event type byte: "+i;else{var m;if((i&128)===0){if(n===null)throw"Running status byte encountered before status byte";m=i,i=n,a.running=!0}else m=t.readUInt8(),n=i;var f=i>>4;switch(a.channel=i&15,f){case 8:return a.type="noteOff",a.noteNumber=m,a.velocity=t.readUInt8(),a;case 9:var d=t.readUInt8();return a.type=d===0?"noteOff":"noteOn",a.noteNumber=m,a.velocity=d,d===0&&(a.byte9=!0),a;case 10:return a.type="noteAftertouch",a.noteNumber=m,a.amount=t.readUInt8(),a;case 11:return a.type="controller",a.controllerType=m,a.value=t.readUInt8(),a;case 12:return a.type="programChange",a.programNumber=m,a;case 13:return a.type="channelAftertouch",a.amount=m,a;case 14:return a.type="pitchBend",a.value=m+(t.readUInt8()<<7)-8192,a;default:throw"Unrecognised MIDI event type: "+f}}}}function Qe(r){this.buffer=r,this.bufferLen=this.buffer.length,this.pos=0}Qe.prototype.eof=function(){return this.pos>=this.bufferLen};Qe.prototype.readUInt8=function(){var r=this.buffer[this.pos];return this.pos+=1,r};Qe.prototype.readInt8=function(){var r=this.readUInt8();return r&128?r-256:r};Qe.prototype.readUInt16=function(){var r=this.readUInt8(),t=this.readUInt8();return(r<<8)+t};Qe.prototype.readInt16=function(){var r=this.readUInt16();return r&32768?r-65536:r};Qe.prototype.readUInt24=function(){var r=this.readUInt8(),t=this.readUInt8(),e=this.readUInt8();return(r<<16)+(t<<8)+e};Qe.prototype.readInt24=function(){var r=this.readUInt24();return r&8388608?r-16777216:r};Qe.prototype.readUInt32=function(){var r=this.readUInt8(),t=this.readUInt8(),e=this.readUInt8(),o=this.readUInt8();return(r<<24)+(t<<16)+(e<<8)+o};Qe.prototype.readBytes=function(r){var t=this.buffer.slice(this.pos,this.pos+r);return this.pos+=r,t};Qe.prototype.readString=function(r){var t=this.readBytes(r);return String.fromCharCode.apply(null,t)};Qe.prototype.readVarInt=function(){for(var r=0;!this.eof();){var t=this.readUInt8();if(t&128)r+=t&127,r<<=7;else return r+t}return r};Qe.prototype.readChunk=function(){var r=this.readString(4),t=this.readUInt32(),e=this.readBytes(t);return{id:r,length:t,data:e}};P2.exports=mq});var M2=Ut((bpe,B2)=>{function hq(r,t){if(typeof r!="object")throw"Invalid MIDI data";t=t||{};var e=r.header||{},o=r.tracks||[],n,s=o.length,a=new Te;for(gq(a,e,s),n=0;n<s;n++)xq(a,o[n],t);return a.buffer}function gq(r,t,e){var o=t.format==null?1:t.format,n=128;t.timeDivision?n=t.timeDivision:t.ticksPerFrame&&t.framesPerSecond?n=-(t.framesPerSecond&255)<<8|t.ticksPerFrame&255:t.ticksPerBeat&&(n=t.ticksPerBeat&32767);var s=new Te;s.writeUInt16(o),s.writeUInt16(e),s.writeUInt16(n),r.writeChunk("MThd",s.buffer)}function xq(r,t,e){var o=new Te,n,s=t.length,a=null;for(n=0;n<s;n++)(e.running===!1||!e.running&&!t[n].running)&&(a=null),a=yq(o,t[n],a,e.useByte9ForNoteOff);r.writeChunk("MTrk",o.buffer)}function yq(r,t,e,o){var n=t.type,s=t.deltaTime,a=t.text||"",i=t.data||[],c=null;switch(r.writeVarInt(s),n){case"sequenceNumber":r.writeUInt8(255),r.writeUInt8(0),r.writeVarInt(2),r.writeUInt16(t.number);break;case"text":r.writeUInt8(255),r.writeUInt8(1),r.writeVarInt(a.length),r.writeString(a);break;case"copyrightNotice":r.writeUInt8(255),r.writeUInt8(2),r.writeVarInt(a.length),r.writeString(a);break;case"trackName":r.writeUInt8(255),r.writeUInt8(3),r.writeVarInt(a.length),r.writeString(a);break;case"instrumentName":r.writeUInt8(255),r.writeUInt8(4),r.writeVarInt(a.length),r.writeString(a);break;case"lyrics":r.writeUInt8(255),r.writeUInt8(5),r.writeVarInt(a.length),r.writeString(a);break;case"marker":r.writeUInt8(255),r.writeUInt8(6),r.writeVarInt(a.length),r.writeString(a);break;case"cuePoint":r.writeUInt8(255),r.writeUInt8(7),r.writeVarInt(a.length),r.writeString(a);break;case"channelPrefix":r.writeUInt8(255),r.writeUInt8(32),r.writeVarInt(1),r.writeUInt8(t.channel);break;case"portPrefix":r.writeUInt8(255),r.writeUInt8(33),r.writeVarInt(1),r.writeUInt8(t.port);break;case"endOfTrack":r.writeUInt8(255),r.writeUInt8(47),r.writeVarInt(0);break;case"setTempo":r.writeUInt8(255),r.writeUInt8(81),r.writeVarInt(3),r.writeUInt24(t.microsecondsPerBeat);break;case"smpteOffset":r.writeUInt8(255),r.writeUInt8(84),r.writeVarInt(5);var l={24:0,25:32,29:64,30:96},p=t.hour&31|l[t.frameRate];r.writeUInt8(p),r.writeUInt8(t.min),r.writeUInt8(t.sec),r.writeUInt8(t.frame),r.writeUInt8(t.subFrame);break;case"timeSignature":r.writeUInt8(255),r.writeUInt8(88),r.writeVarInt(4),r.writeUInt8(t.numerator);var u=Math.floor(Math.log(t.denominator)/Math.LN2)&255;r.writeUInt8(u),r.writeUInt8(t.metronome),r.writeUInt8(t.thirtyseconds||8);break;case"keySignature":r.writeUInt8(255),r.writeUInt8(89),r.writeVarInt(2),r.writeInt8(t.key),r.writeUInt8(t.scale);break;case"sequencerSpecific":r.writeUInt8(255),r.writeUInt8(127),r.writeVarInt(i.length),r.writeBytes(i);break;case"unknownMeta":t.metatypeByte!=null&&(r.writeUInt8(255),r.writeUInt8(t.metatypeByte),r.writeVarInt(i.length),r.writeBytes(i));break;case"sysEx":r.writeUInt8(240),r.writeVarInt(i.length),r.writeBytes(i);break;case"endSysEx":r.writeUInt8(247),r.writeVarInt(i.length),r.writeBytes(i);break;case"noteOff":var m=o!==!1&&t.byte9||o&&t.velocity==0?144:128;c=m|t.channel,c!==e&&r.writeUInt8(c),r.writeUInt8(t.noteNumber),r.writeUInt8(t.velocity);break;case"noteOn":c=144|t.channel,c!==e&&r.writeUInt8(c),r.writeUInt8(t.noteNumber),r.writeUInt8(t.velocity);break;case"noteAftertouch":c=160|t.channel,c!==e&&r.writeUInt8(c),r.writeUInt8(t.noteNumber),r.writeUInt8(t.amount);break;case"controller":c=176|t.channel,c!==e&&r.writeUInt8(c),r.writeUInt8(t.controllerType),r.writeUInt8(t.value);break;case"programChange":c=192|t.channel,c!==e&&r.writeUInt8(c),r.writeUInt8(t.programNumber);break;case"channelAftertouch":c=208|t.channel,c!==e&&r.writeUInt8(c),r.writeUInt8(t.amount);break;case"pitchBend":c=224|t.channel,c!==e&&r.writeUInt8(c);var f=8192+t.value,d=f&127,g=f>>7&127;r.writeUInt8(d),r.writeUInt8(g);break;default:throw"Unrecognized event type: "+n}return c}function Te(){this.buffer=[]}Te.prototype.writeUInt8=function(r){this.buffer.push(r&255)};Te.prototype.writeInt8=Te.prototype.writeUInt8;Te.prototype.writeUInt16=function(r){var t=r>>8&255,e=r&255;this.writeUInt8(t),this.writeUInt8(e)};Te.prototype.writeInt16=Te.prototype.writeUInt16;Te.prototype.writeUInt24=function(r){var t=r>>16&255,e=r>>8&255,o=r&255;this.writeUInt8(t),this.writeUInt8(e),this.writeUInt8(o)};Te.prototype.writeInt24=Te.prototype.writeUInt24;Te.prototype.writeUInt32=function(r){var t=r>>24&255,e=r>>16&255,o=r>>8&255,n=r&255;this.writeUInt8(t),this.writeUInt8(e),this.writeUInt8(o),this.writeUInt8(n)};Te.prototype.writeInt32=Te.prototype.writeUInt32;Te.prototype.writeBytes=function(r){this.buffer=this.buffer.concat(Array.prototype.slice.call(r,0))};Te.prototype.writeString=function(r){var t,e=r.length,o=[];for(t=0;t<e;t++)o.push(r.codePointAt(t));this.writeBytes(o)};Te.prototype.writeVarInt=function(r){if(r<0)throw"Cannot write negative variable-length integer";if(r<=127)this.writeUInt8(r);else{var t=r,e=[];for(e.push(t&127),t>>=7;t;){var o=t&127|128;e.push(o),t>>=7}this.writeBytes(e.reverse())}};Te.prototype.writeChunk=function(r,t){this.writeString(r),this.writeUInt32(t.length),this.writeBytes(t)};B2.exports=hq});var Ab=Ut($b=>{$b.parseMidi=L2();$b.writeMidi=M2()});var Rb=Ut(Cl=>{"use strict";Object.defineProperty(Cl,"__esModule",{value:!0});Cl.insert=Cl.search=void 0;function V2(r,t,e){e===void 0&&(e="ticks");var o=0,n=r.length,s=n;if(n>0&&r[n-1][e]<=t)return n-1;for(;o<s;){var a=Math.floor(o+(s-o)/2),i=r[a],c=r[a+1];if(i[e]===t){for(var l=a;l<r.length;l++){var p=r[l];p[e]===t&&(a=l)}return a}else{if(i[e]<t&&c[e]>t)return a;i[e]>t?s=a:i[e]<t&&(o=a+1)}}return-1}Cl.search=V2;function bq(r,t,e){if(e===void 0&&(e="ticks"),r.length){var o=V2(r,t[e],e);r.splice(o+1,0,t)}else r.push(t)}Cl.insert=bq});var ah=Ut(dc=>{"use strict";Object.defineProperty(dc,"__esModule",{value:!0});dc.Header=dc.keySignatureKeys=void 0;var Db=Rb(),sh=new WeakMap;dc.keySignatureKeys=["Cb","Gb","Db","Ab","Eb","Bb","F","C","G","D","A","E","B","F#","C#"];var wq=(function(){function r(t){var e=this;if(this.tempos=[],this.timeSignatures=[],this.keySignatures=[],this.meta=[],this.name="",sh.set(this,480),t){sh.set(this,t.header.ticksPerBeat),t.tracks.forEach(function(n){n.forEach(function(s){s.meta&&(s.type==="timeSignature"?e.timeSignatures.push({ticks:s.absoluteTime,timeSignature:[s.numerator,s.denominator]}):s.type==="setTempo"?e.tempos.push({bpm:6e7/s.microsecondsPerBeat,ticks:s.absoluteTime}):s.type==="keySignature"&&e.keySignatures.push({key:dc.keySignatureKeys[s.key+7],scale:s.scale===0?"major":"minor",ticks:s.absoluteTime}))})});var o=0;t.tracks[0].forEach(function(n){o+=n.deltaTime,n.meta&&(n.type==="trackName"?e.name=n.text:(n.type==="text"||n.type==="cuePoint"||n.type==="marker"||n.type==="lyrics")&&e.meta.push({text:n.text,ticks:o,type:n.type}))}),this.update()}}return r.prototype.update=function(){var t=this,e=0,o=0;this.tempos.sort(function(n,s){return n.ticks-s.ticks}),this.tempos.forEach(function(n,s){var a=s>0?t.tempos[s-1].bpm:t.tempos[0].bpm,i=n.ticks/t.ppq-o,c=60/a*i;n.time=c+e,e=n.time,o+=i}),this.timeSignatures.sort(function(n,s){return n.ticks-s.ticks}),this.timeSignatures.forEach(function(n,s){var a=s>0?t.timeSignatures[s-1]:t.timeSignatures[0],i=(n.ticks-a.ticks)/t.ppq,c=i/a.timeSignature[0]/(a.timeSignature[1]/4);a.measures=a.measures||0,n.measures=c+a.measures})},r.prototype.ticksToSeconds=function(t){var e=(0,Db.search)(this.tempos,t);if(e!==-1){var o=this.tempos[e],n=o.time,s=(t-o.ticks)/this.ppq;return n+60/o.bpm*s}else{var a=t/this.ppq;return 60/120*a}},r.prototype.ticksToMeasures=function(t){var e=(0,Db.search)(this.timeSignatures,t);if(e!==-1){var o=this.timeSignatures[e],n=(t-o.ticks)/this.ppq;return o.measures+n/(o.timeSignature[0]/o.timeSignature[1])/4}else return t/this.ppq/4},Object.defineProperty(r.prototype,"ppq",{get:function(){return sh.get(this)},enumerable:!1,configurable:!0}),r.prototype.secondsToTicks=function(t){var e=(0,Db.search)(this.tempos,t,"time");if(e!==-1){var o=this.tempos[e],n=o.time,s=t-n,a=s/(60/o.bpm);return Math.round(o.ticks+a*this.ppq)}else{var i=t/.5;return Math.round(i*this.ppq)}},r.prototype.toJSON=function(){return{keySignatures:this.keySignatures,meta:this.meta,name:this.name,ppq:this.ppq,tempos:this.tempos.map(function(t){return{bpm:t.bpm,ticks:t.ticks}}),timeSignatures:this.timeSignatures}},r.prototype.fromJSON=function(t){this.name=t.name,this.tempos=t.tempos.map(function(e){return Object.assign({},e)}),this.timeSignatures=t.timeSignatures.map(function(e){return Object.assign({},e)}),this.keySignatures=t.keySignatures.map(function(e){return Object.assign({},e)}),this.meta=t.meta.map(function(e){return Object.assign({},e)}),sh.set(this,t.ppq),this.update()},r.prototype.setTempo=function(t){this.tempos=[{bpm:t,ticks:0}],this.update()},r})();dc.Header=wq});var _b=Ut(Nr=>{"use strict";Object.defineProperty(Nr,"__esModule",{value:!0});Nr.ControlChange=Nr.controlChangeIds=Nr.controlChangeNames=void 0;Nr.controlChangeNames={1:"modulationWheel",2:"breath",4:"footController",5:"portamentoTime",7:"volume",8:"balance",10:"pan",64:"sustain",65:"portamentoTime",66:"sostenuto",67:"softPedal",68:"legatoFootswitch",84:"portamentoControl"};Nr.controlChangeIds=Object.keys(Nr.controlChangeNames).reduce(function(r,t){return r[Nr.controlChangeNames[t]]=t,r},{});var Fb=new WeakMap,G2=new WeakMap,Cq=(function(){function r(t,e){Fb.set(this,e),G2.set(this,t.controllerType),this.ticks=t.absoluteTime,this.value=t.value}return Object.defineProperty(r.prototype,"number",{get:function(){return G2.get(this)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return Nr.controlChangeNames[this.number]?Nr.controlChangeNames[this.number]:null},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"time",{get:function(){var t=Fb.get(this);return t.ticksToSeconds(this.ticks)},set:function(t){var e=Fb.get(this);this.ticks=e.secondsToTicks(t)},enumerable:!1,configurable:!0}),r.prototype.toJSON=function(){return{number:this.number,ticks:this.ticks,time:this.time,value:this.value}},r})();Nr.ControlChange=Cq});var U2=Ut(ch=>{"use strict";Object.defineProperty(ch,"__esModule",{value:!0});ch.createControlChanges=void 0;var ih=_b();function Tq(){return new Proxy({},{get:function(r,t){if(r[t])return r[t];if(ih.controlChangeIds.hasOwnProperty(t))return r[ih.controlChangeIds[t]]},set:function(r,t,e){return ih.controlChangeIds.hasOwnProperty(t)?r[ih.controlChangeIds[t]]=e:r[t]=e,!0}})}ch.createControlChanges=Tq});var z2=Ut(lh=>{"use strict";Object.defineProperty(lh,"__esModule",{value:!0});lh.PitchBend=void 0;var Ob=new WeakMap,Iq=(function(){function r(t,e){Ob.set(this,e),this.ticks=t.absoluteTime,this.value=t.value}return Object.defineProperty(r.prototype,"time",{get:function(){var t=Ob.get(this);return t.ticksToSeconds(this.ticks)},set:function(t){var e=Ob.get(this);this.ticks=e.secondsToTicks(t)},enumerable:!1,configurable:!0}),r.prototype.toJSON=function(){return{ticks:this.ticks,time:this.time,value:this.value}},r})();lh.PitchBend=Iq});var W2=Ut(bs=>{"use strict";Object.defineProperty(bs,"__esModule",{value:!0});bs.DrumKitByPatchID=bs.InstrumentFamilyByID=bs.instrumentByPatchID=void 0;bs.instrumentByPatchID=["acoustic grand piano","bright acoustic piano","electric grand piano","honky-tonk piano","electric piano 1","electric piano 2","harpsichord","clavi","celesta","glockenspiel","music box","vibraphone","marimba","xylophone","tubular bells","dulcimer","drawbar organ","percussive organ","rock organ","church organ","reed organ","accordion","harmonica","tango accordion","acoustic guitar (nylon)","acoustic guitar (steel)","electric guitar (jazz)","electric guitar (clean)","electric guitar (muted)","overdriven guitar","distortion guitar","guitar harmonics","acoustic bass","electric bass (finger)","electric bass (pick)","fretless bass","slap bass 1","slap bass 2","synth bass 1","synth bass 2","violin","viola","cello","contrabass","tremolo strings","pizzicato strings","orchestral harp","timpani","string ensemble 1","string ensemble 2","synthstrings 1","synthstrings 2","choir aahs","voice oohs","synth voice","orchestra hit","trumpet","trombone","tuba","muted trumpet","french horn","brass section","synthbrass 1","synthbrass 2","soprano sax","alto sax","tenor sax","baritone sax","oboe","english horn","bassoon","clarinet","piccolo","flute","recorder","pan flute","blown bottle","shakuhachi","whistle","ocarina","lead 1 (square)","lead 2 (sawtooth)","lead 3 (calliope)","lead 4 (chiff)","lead 5 (charang)","lead 6 (voice)","lead 7 (fifths)","lead 8 (bass + lead)","pad 1 (new age)","pad 2 (warm)","pad 3 (polysynth)","pad 4 (choir)","pad 5 (bowed)","pad 6 (metallic)","pad 7 (halo)","pad 8 (sweep)","fx 1 (rain)","fx 2 (soundtrack)","fx 3 (crystal)","fx 4 (atmosphere)","fx 5 (brightness)","fx 6 (goblins)","fx 7 (echoes)","fx 8 (sci-fi)","sitar","banjo","shamisen","koto","kalimba","bag pipe","fiddle","shanai","tinkle bell","agogo","steel drums","woodblock","taiko drum","melodic tom","synth drum","reverse cymbal","guitar fret noise","breath noise","seashore","bird tweet","telephone ring","helicopter","applause","gunshot"];bs.InstrumentFamilyByID=["piano","chromatic percussion","organ","guitar","bass","strings","ensemble","brass","reed","pipe","synth lead","synth pad","synth effects","world","percussive","sound effects"];bs.DrumKitByPatchID={0:"standard kit",8:"room kit",16:"power kit",24:"electronic kit",25:"tr-808 kit",32:"jazz kit",40:"brush kit",48:"orchestra kit",56:"sound fx kit"}});var q2=Ut(uh=>{"use strict";Object.defineProperty(uh,"__esModule",{value:!0});uh.Instrument=void 0;var ph=W2(),H2=new WeakMap,Sq=(function(){function r(t,e){if(this.number=0,H2.set(this,e),this.number=0,t){var o=t.find(function(n){return n.type==="programChange"});o&&(this.number=o.programNumber)}}return Object.defineProperty(r.prototype,"name",{get:function(){return this.percussion?ph.DrumKitByPatchID[this.number]:ph.instrumentByPatchID[this.number]},set:function(t){var e=ph.instrumentByPatchID.indexOf(t);e!==-1&&(this.number=e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"family",{get:function(){return this.percussion?"drums":ph.InstrumentFamilyByID[Math.floor(this.number/8)]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"percussion",{get:function(){var t=H2.get(this);return t.channel===9},enumerable:!1,configurable:!0}),r.prototype.toJSON=function(){return{family:this.family,number:this.number,name:this.name}},r.prototype.fromJSON=function(t){this.number=t.number},r})();uh.Instrument=Sq});var j2=Ut(mh=>{"use strict";Object.defineProperty(mh,"__esModule",{value:!0});mh.Note=void 0;function vq(r){var t=Math.floor(r/12)-1;return K2(r)+t.toString()}function K2(r){var t=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],e=r%12;return t[e]}function Nq(r){var t=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];return t.indexOf(r)}var kq=(function(){var r=/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,t={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13};return function(e){var o=r.exec(e),n=o[1],s=o[2],a=t[n.toLowerCase()];return a+(parseInt(s,10)+1)*12}})(),Tl=new WeakMap,Eq=(function(){function r(t,e,o){Tl.set(this,o),this.midi=t.midi,this.velocity=t.velocity,this.noteOffVelocity=e.velocity,this.ticks=t.ticks,this.durationTicks=e.ticks-t.ticks}return Object.defineProperty(r.prototype,"name",{get:function(){return vq(this.midi)},set:function(t){this.midi=kq(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"octave",{get:function(){return Math.floor(this.midi/12)-1},set:function(t){var e=t-this.octave;this.midi+=e*12},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"pitch",{get:function(){return K2(this.midi)},set:function(t){this.midi=12*(this.octave+1)+Nq(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"duration",{get:function(){var t=Tl.get(this);return t.ticksToSeconds(this.ticks+this.durationTicks)-t.ticksToSeconds(this.ticks)},set:function(t){var e=Tl.get(this),o=e.secondsToTicks(this.time+t);this.durationTicks=o-this.ticks},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"time",{get:function(){var t=Tl.get(this);return t.ticksToSeconds(this.ticks)},set:function(t){var e=Tl.get(this);this.ticks=e.secondsToTicks(t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"bars",{get:function(){var t=Tl.get(this);return t.ticksToMeasures(this.ticks)},enumerable:!1,configurable:!0}),r.prototype.toJSON=function(){return{duration:this.duration,durationTicks:this.durationTicks,midi:this.midi,name:this.name,ticks:this.ticks,time:this.time,velocity:this.velocity}},r})();mh.Note=Eq});var Lb=Ut(dh=>{"use strict";Object.defineProperty(dh,"__esModule",{value:!0});dh.Track=void 0;var Pb=Rb(),$q=_b(),Aq=U2(),Rq=z2(),X2=q2(),Dq=j2(),fh=new WeakMap,Fq=(function(){function r(t,e){var o=this;if(this.name="",this.notes=[],this.controlChanges=(0,Aq.createControlChanges)(),this.pitchBends=[],fh.set(this,e),t){var n=t.find(function(m){return m.type==="trackName"});this.name=n?n.text:""}if(this.instrument=new X2.Instrument(t,this),this.channel=0,t){for(var s=t.filter(function(m){return m.type==="noteOn"}),a=t.filter(function(m){return m.type==="noteOff"}),i=function(){var m=s.shift();c.channel=m.channel;var f=a.findIndex(function(g){return g.noteNumber===m.noteNumber&&g.absoluteTime>=m.absoluteTime});if(f!==-1){var d=a.splice(f,1)[0];c.addNote({durationTicks:d.absoluteTime-m.absoluteTime,midi:m.noteNumber,noteOffVelocity:d.velocity/127,ticks:m.absoluteTime,velocity:m.velocity/127})}},c=this;s.length;)i();var l=t.filter(function(m){return m.type==="controller"});l.forEach(function(m){o.addCC({number:m.controllerType,ticks:m.absoluteTime,value:m.value/127})});var p=t.filter(function(m){return m.type==="pitchBend"});p.forEach(function(m){o.addPitchBend({ticks:m.absoluteTime,value:m.value/Math.pow(2,13)})});var u=t.find(function(m){return m.type==="endOfTrack"});this.endOfTrackTicks=u!==void 0?u.absoluteTime:void 0}}return r.prototype.addNote=function(t){var e=fh.get(this),o=new Dq.Note({midi:0,ticks:0,velocity:1},{ticks:0,velocity:0},e);return Object.assign(o,t),(0,Pb.insert)(this.notes,o,"ticks"),this},r.prototype.addCC=function(t){var e=fh.get(this),o=new $q.ControlChange({controllerType:t.number},e);return delete t.number,Object.assign(o,t),Array.isArray(this.controlChanges[o.number])||(this.controlChanges[o.number]=[]),(0,Pb.insert)(this.controlChanges[o.number],o,"ticks"),this},r.prototype.addPitchBend=function(t){var e=fh.get(this),o=new Rq.PitchBend({},e);return Object.assign(o,t),(0,Pb.insert)(this.pitchBends,o,"ticks"),this},Object.defineProperty(r.prototype,"duration",{get:function(){if(!this.notes.length)return 0;for(var t=this.notes[this.notes.length-1].time+this.notes[this.notes.length-1].duration,e=0;e<this.notes.length-1;e++){var o=this.notes[e].time+this.notes[e].duration;t<o&&(t=o)}return t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"durationTicks",{get:function(){if(!this.notes.length)return 0;for(var t=this.notes[this.notes.length-1].ticks+this.notes[this.notes.length-1].durationTicks,e=0;e<this.notes.length-1;e++){var o=this.notes[e].ticks+this.notes[e].durationTicks;t<o&&(t=o)}return t},enumerable:!1,configurable:!0}),r.prototype.fromJSON=function(t){var e=this;this.name=t.name,this.channel=t.channel,this.instrument=new X2.Instrument(void 0,this),this.instrument.fromJSON(t.instrument),t.endOfTrackTicks!==void 0&&(this.endOfTrackTicks=t.endOfTrackTicks);for(var o in t.controlChanges)t.controlChanges[o]&&t.controlChanges[o].forEach(function(n){e.addCC({number:n.number,ticks:n.ticks,value:n.value})});t.notes.forEach(function(n){e.addNote({durationTicks:n.durationTicks,midi:n.midi,ticks:n.ticks,velocity:n.velocity})})},r.prototype.toJSON=function(){for(var t={},e=0;e<127;e++)this.controlChanges.hasOwnProperty(e)&&(t[e]=this.controlChanges[e].map(function(n){return n.toJSON()}));var o={channel:this.channel,controlChanges:t,pitchBends:this.pitchBends.map(function(n){return n.toJSON()}),instrument:this.instrument.toJSON(),name:this.name,notes:this.notes.map(function(n){return n.toJSON()})};return this.endOfTrackTicks!==void 0&&(o.endOfTrackTicks=this.endOfTrackTicks),o},r})();dh.Track=Fq});var Z2=Ut(Bb=>{"use strict";Object.defineProperty(Bb,"__esModule",{value:!0});function _q(r){var t=[];return Y2(r,t),t}Bb.flatten=_q;function Y2(r,t){for(var e=0;e<r.length;e++){var o=r[e];Array.isArray(o)?Y2(o,t):t.push(o)}}});var Q2=Ut(Il=>{"use strict";var ws=Il&&Il.__spreadArray||function(r,t,e){if(e||arguments.length===2)for(var o=0,n=t.length,s;o<n;o++)(s||!(o in t))&&(s||(s=Array.prototype.slice.call(t,0,o)),s[o]=t[o]);return r.concat(s||Array.prototype.slice.call(t))};Object.defineProperty(Il,"__esModule",{value:!0});Il.encode=void 0;var Oq=Ab(),Pq=ah(),Lq=Z2();function Bq(r,t){return[{absoluteTime:r.ticks,channel:t,deltaTime:0,noteNumber:r.midi,type:"noteOn",velocity:Math.floor(r.velocity*127)},{absoluteTime:r.ticks+r.durationTicks,channel:t,deltaTime:0,noteNumber:r.midi,type:"noteOff",velocity:Math.floor(r.noteOffVelocity*127)}]}function Mq(r){return(0,Lq.flatten)(r.notes.map(function(t){return Bq(t,r.channel)}))}function Vq(r,t){return{absoluteTime:r.ticks,channel:t,controllerType:r.number,deltaTime:0,type:"controller",value:Math.floor(r.value*127)}}function Gq(r){for(var t=[],e=0;e<127;e++)r.controlChanges.hasOwnProperty(e)&&r.controlChanges[e].forEach(function(o){t.push(Vq(o,r.channel))});return t}function Uq(r,t){return{absoluteTime:r.ticks,channel:t,deltaTime:0,type:"pitchBend",value:r.value}}function zq(r){var t=[];return r.pitchBends.forEach(function(e){t.push(Uq(e,r.channel))}),t}function Wq(r){return{absoluteTime:0,channel:r.channel,deltaTime:0,programNumber:r.instrument.number,type:"programChange"}}function Hq(r){return{absoluteTime:0,deltaTime:0,meta:!0,text:r,type:"trackName"}}function qq(r){return{absoluteTime:r.ticks,deltaTime:0,meta:!0,microsecondsPerBeat:Math.floor(6e7/r.bpm),type:"setTempo"}}function Kq(r){return{absoluteTime:r.ticks,deltaTime:0,denominator:r.timeSignature[1],meta:!0,metronome:24,numerator:r.timeSignature[0],thirtyseconds:8,type:"timeSignature"}}function jq(r){var t=Pq.keySignatureKeys.indexOf(r.key);return{absoluteTime:r.ticks,deltaTime:0,key:t+7,meta:!0,scale:r.scale==="major"?0:1,type:"keySignature"}}function Xq(r){return{absoluteTime:r.ticks,deltaTime:0,meta:!0,text:r.text,type:r.type}}function Yq(r){var t={header:{format:1,numTracks:r.tracks.length+1,ticksPerBeat:r.header.ppq},tracks:ws([ws(ws(ws(ws([{absoluteTime:0,deltaTime:0,meta:!0,text:r.header.name,type:"trackName"}],r.header.keySignatures.map(function(e){return jq(e)}),!0),r.header.meta.map(function(e){return Xq(e)}),!0),r.header.tempos.map(function(e){return qq(e)}),!0),r.header.timeSignatures.map(function(e){return Kq(e)}),!0)],r.tracks.map(function(e){return ws(ws(ws([Hq(e.name),Wq(e)],Mq(e),!0),Gq(e),!0),zq(e),!0)}),!0)};return t.tracks=t.tracks.map(function(e){e=e.sort(function(n,s){return n.absoluteTime-s.absoluteTime});var o=0;return e.forEach(function(n){n.deltaTime=n.absoluteTime-o,o=n.absoluteTime,delete n.absoluteTime}),e.push({deltaTime:0,meta:!0,type:"endOfTrack"}),e}),new Uint8Array((0,Oq.writeMidi)(t))}Il.encode=Yq});var tA=Ut(kr=>{"use strict";var Zq=kr&&kr.__awaiter||function(r,t,e,o){function n(s){return s instanceof e?s:new e(function(a){a(s)})}return new(e||(e=Promise))(function(s,a){function i(p){try{l(o.next(p))}catch(u){a(u)}}function c(p){try{l(o.throw(p))}catch(u){a(u)}}function l(p){p.done?s(p.value):n(p.value).then(i,c)}l((o=o.apply(r,t||[])).next())})},Qq=kr&&kr.__generator||function(r,t){var e={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},o,n,s,a;return a={next:i(0),throw:i(1),return:i(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function i(l){return function(p){return c([l,p])}}function c(l){if(o)throw new TypeError("Generator is already executing.");for(;e;)try{if(o=1,n&&(s=l[0]&2?n.return:l[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,l[1])).done)return s;switch(n=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return e.label++,{value:l[1],done:!1};case 5:e.label++,n=l[1],l=[0];continue;case 7:l=e.ops.pop(),e.trys.pop();continue;default:if(s=e.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){e.label=l[1];break}if(l[0]===6&&e.label<s[1]){e.label=s[1],s=l;break}if(s&&e.label<s[2]){e.label=s[2],e.ops.push(l);break}s[2]&&e.ops.pop(),e.trys.pop();continue}l=t.call(r,e)}catch(p){l=[6,p],n=0}finally{o=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}};Object.defineProperty(kr,"__esModule",{value:!0});kr.Header=kr.Track=kr.Midi=void 0;var Jq=Ab(),J2=ah(),Mb=Lb(),tK=Q2(),eK=(function(){function r(t){var e=this,o=null;if(t){var n=t instanceof ArrayBuffer?new Uint8Array(t):t;o=(0,Jq.parseMidi)(n),o.tracks.forEach(function(s){var a=0;s.forEach(function(i){a+=i.deltaTime,i.absoluteTime=a})}),o.tracks=nK(o.tracks)}this.header=new J2.Header(o),this.tracks=[],t&&(this.tracks=o.tracks.map(function(s){return new Mb.Track(s,e.header)}),o.header.format===1&&this.tracks[0].duration===0&&this.tracks.shift())}return r.fromUrl=function(t){return Zq(this,void 0,void 0,function(){var e,o;return Qq(this,function(n){switch(n.label){case 0:return[4,fetch(t)];case 1:return e=n.sent(),e.ok?[4,e.arrayBuffer()]:[3,3];case 2:return o=n.sent(),[2,new r(o)];case 3:throw new Error("Could not load '".concat(t,"'"))}})})},Object.defineProperty(r.prototype,"name",{get:function(){return this.header.name},set:function(t){this.header.name=t},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"duration",{get:function(){var t=this.tracks.map(function(e){return e.duration});return Math.max.apply(Math,t)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"durationTicks",{get:function(){var t=this.tracks.map(function(e){return e.durationTicks});return Math.max.apply(Math,t)},enumerable:!1,configurable:!0}),r.prototype.addTrack=function(){var t=new Mb.Track(void 0,this.header);return this.tracks.push(t),t},r.prototype.toArray=function(){return(0,tK.encode)(this)},r.prototype.toJSON=function(){return{header:this.header.toJSON(),tracks:this.tracks.map(function(t){return t.toJSON()})}},r.prototype.fromJSON=function(t){var e=this;this.header=new J2.Header,this.header.fromJSON(t.header),this.tracks=t.tracks.map(function(o){var n=new Mb.Track(void 0,e.header);return n.fromJSON(o),n})},r.prototype.clone=function(){var t=new r;return t.fromJSON(this.toJSON()),t},r})();kr.Midi=eK;var rK=Lb();Object.defineProperty(kr,"Track",{enumerable:!0,get:function(){return rK.Track}});var oK=ah();Object.defineProperty(kr,"Header",{enumerable:!0,get:function(){return oK.Header}});function nK(r){for(var t=[],e=0;e<r.length;e++)for(var o=t.length,n=new Map,s=Array(16).fill(0),a=0,i=r[e];a<i.length;a++){var c=i[a],l=o,p=c.channel;if(p!==void 0){c.type==="programChange"&&(s[p]=c.programNumber);var u=s[p],m="".concat(u," ").concat(p);n.has(m)?l=n.get(m):(l=o+n.size,n.set(m,l))}t[l]||t.push([]),t[l].push(c)}return t}});var ou={};Et(ou,{Abs:()=>vs,Acos:()=>tn,Acosh:()=>en,AdadeltaOptimizer:()=>ss,AdagradOptimizer:()=>as,AdamOptimizer:()=>is,AdamaxOptimizer:()=>cs,Add:()=>To,AddN:()=>Ns,All:()=>wc,Any:()=>Cc,ArgMax:()=>ks,ArgMin:()=>Es,Asin:()=>rn,Asinh:()=>on,Atan:()=>nn,Atan2:()=>an,Atanh:()=>sn,AvgPool:()=>$s,AvgPool3D:()=>As,AvgPool3DGrad:()=>El,AvgPoolGrad:()=>kl,BatchMatMul:()=>Rs,BatchToSpaceND:()=>Ds,Bincount:()=>Fs,BitwiseAnd:()=>cn,BroadcastArgs:()=>_s,BroadcastTo:()=>LA,Cast:()=>Io,Ceil:()=>ln,ClipByValue:()=>pn,Complex:()=>Os,ComplexAbs:()=>Ps,Concat:()=>Ls,Conv2D:()=>Bs,Conv2DBackpropFilter:()=>Ms,Conv2DBackpropInput:()=>Vs,Conv3D:()=>Gs,Conv3DBackpropFilterV2:()=>$l,Conv3DBackpropInputV2:()=>Us,Cos:()=>zs,Cosh:()=>un,CropAndResize:()=>qs,Cumprod:()=>Ws,Cumsum:()=>Hs,DataStorage:()=>Zo,DenseBincount:()=>Ks,DepthToSpace:()=>js,DepthwiseConv2dNative:()=>Xs,DepthwiseConv2dNativeBackpropFilter:()=>Ys,DepthwiseConv2dNativeBackpropInput:()=>Zs,Diag:()=>Qs,Dilation2D:()=>Js,Dilation2DBackpropFilter:()=>Vu,Dilation2DBackpropInput:()=>Mu,Draw:()=>Tc,ENV:()=>Bu,Einsum:()=>ta,Elu:()=>ea,EluGrad:()=>Al,Environment:()=>bc,Equal:()=>fn,Erf:()=>ra,Exp:()=>oa,ExpandDims:()=>na,Expm1:()=>dn,FFT:()=>Ic,Fill:()=>sa,FlipLeftRight:()=>aa,Floor:()=>hn,FloorDiv:()=>gn,FromPixels:()=>$c,FusedBatchNorm:()=>ia,FusedConv2D:()=>jn,FusedDepthwiseConv2D:()=>Xn,GatherNd:()=>la,GatherV2:()=>ca,Greater:()=>xn,GreaterEqual:()=>yn,IFFT:()=>pa,Identity:()=>So,Imag:()=>ua,IsFinite:()=>bn,IsInf:()=>wn,IsNan:()=>Cn,KernelBackend:()=>jr,LRN:()=>Sc,LRNGrad:()=>Rl,LeakyRelu:()=>ma,Less:()=>Tn,LessEqual:()=>In,LinSpace:()=>fa,Log:()=>da,Log1p:()=>Sn,LogSoftmax:()=>MA,LogicalAnd:()=>vn,LogicalNot:()=>Nn,LogicalOr:()=>kn,LogicalXor:()=>BA,LowerBound:()=>VA,MatrixBandPart:()=>GA,Max:()=>vc,MaxPool:()=>ha,MaxPool3D:()=>ga,MaxPool3DGrad:()=>Fl,MaxPoolGrad:()=>Dl,MaxPoolWithArgmax:()=>xa,Maximum:()=>En,Mean:()=>ya,Min:()=>Nc,Minimum:()=>$n,MirrorPad:()=>ba,Mod:()=>wa,MomentumOptimizer:()=>ls,Multinomial:()=>Ca,Multiply:()=>An,Neg:()=>kc,NonMaxSuppressionV3:()=>Ta,NonMaxSuppressionV4:()=>Ia,NonMaxSuppressionV5:()=>Sa,NotEqual:()=>Rn,OP_SCOPE_SUFFIX:()=>Zu,OneHot:()=>Na,OnesLike:()=>va,Optimizer:()=>De,OptimizerConstructors:()=>qc,Pack:()=>ka,PadV2:()=>Ea,Pool:()=>UA,Pow:()=>$a,Prelu:()=>Aa,Prod:()=>Ra,RMSPropOptimizer:()=>ps,RaggedGather:()=>Da,RaggedRange:()=>Fa,RaggedTensorToTensor:()=>_a,Range:()=>Oa,Rank:()=>Ku,Real:()=>Pa,RealDiv:()=>mn,Reciprocal:()=>Dn,Reduction:()=>Xt,Relu:()=>Fn,Relu6:()=>_n,Reshape:()=>La,ResizeBilinear:()=>Ma,ResizeBilinearGrad:()=>Ol,ResizeNearestNeighbor:()=>Ba,ResizeNearestNeighborGrad:()=>_l,Reverse:()=>Va,RotateWithOffset:()=>fi,Round:()=>On,Rsqrt:()=>Pn,SGDOptimizer:()=>uo,ScatterNd:()=>Ga,SearchSorted:()=>za,Select:()=>Wa,Selu:()=>Ln,Sigmoid:()=>Vn,Sign:()=>Mn,Sin:()=>qa,Sinh:()=>Bn,Slice:()=>Ha,Softmax:()=>Xa,Softplus:()=>Gn,SpaceToBatchND:()=>Ka,SparseFillEmptyRows:()=>Ya,SparseReshape:()=>Za,SparseSegmentMean:()=>Qa,SparseSegmentSum:()=>Ja,SparseToDense:()=>ti,SplitV:()=>ja,Sqrt:()=>Un,Square:()=>Pl,SquaredDifference:()=>zn,StaticRegexReplace:()=>Wn,Step:()=>qn,StridedSlice:()=>ei,StringNGrams:()=>ri,StringSplit:()=>oi,StringToHashBucketFast:()=>ni,Sub:()=>si,Sum:()=>Ec,Tan:()=>ai,Tanh:()=>Hn,Tensor:()=>Rt,TensorBuffer:()=>$t,TensorScatterUpdate:()=>Ua,Tile:()=>vo,TopK:()=>ii,Transform:()=>ci,Transpose:()=>No,Unique:()=>li,Unpack:()=>pi,UnsortedSegmentSum:()=>ui,UpperBound:()=>zA,Variable:()=>Qr,ZerosLike:()=>mi,_FusedMatMul:()=>Kn,abs:()=>ie,acos:()=>jl,acosh:()=>Xl,add:()=>nt,addN:()=>rg,all:()=>Yl,any:()=>Zl,argMax:()=>Ql,argMin:()=>Jl,asin:()=>tp,asinh:()=>ep,atan:()=>rp,atan2:()=>op,atanh:()=>np,avgPool:()=>Si,avgPool3d:()=>ag,backend:()=>qh,backend_util:()=>v,basicLSTMCell:()=>ig,batchNorm:()=>_r,batchNorm2d:()=>cg,batchNorm3d:()=>lg,batchNorm4d:()=>pg,batchToSpaceND:()=>vi,bincount:()=>ip,bitwiseAnd:()=>ug,booleanMaskAsync:()=>vw,broadcastArgs:()=>mg,broadcastTo:()=>Or,broadcast_util:()=>Br,browser:()=>kx,buffer:()=>ot,cast:()=>mt,ceil:()=>cp,clipByValue:()=>lp,clone:()=>We,complex:()=>Oe,concat:()=>Ot,concat1d:()=>pp,concat2d:()=>fg,concat3d:()=>dg,concat4d:()=>hg,conv1d:()=>up,conv2d:()=>Lr,conv2dTranspose:()=>mp,conv3d:()=>gg,conv3dTranspose:()=>xg,copyRegisteredKernels:()=>jA,cos:()=>fp,cosh:()=>dp,cosineWindow:()=>zc,cumprod:()=>hp,cumsum:()=>gp,customGrad:()=>Re,denseBincount:()=>yg,deprecationWarn:()=>S0,depthToSpace:()=>xp,depthwiseConv2d:()=>Ro,device_util:()=>ko,diag:()=>bg,dilation2d:()=>yp,disableDeprecationWarnings:()=>bR,dispose:()=>Zt,disposeVariables:()=>wR,div:()=>Tt,divNoNan:()=>bp,dot:()=>wp,dropout:()=>Dw,einsum:()=>Do,elu:()=>ki,enableDebugMode:()=>yR,enableProdMode:()=>xR,enclosingPowerOfTwo:()=>dm,engine:()=>lr,ensureShape:()=>wg,env:()=>F,equal:()=>Ni,erf:()=>Cp,euclideanNorm:()=>Tp,exp:()=>He,expandDims:()=>Me,expm1:()=>Ip,eye:()=>Sp,fft:()=>Lo,fill:()=>Pr,findBackend:()=>kR,findBackendFactory:()=>ER,floor:()=>Ei,floorDiv:()=>Ci,fused:()=>hm,gather:()=>$i,gatherND:()=>Aw,gather_util:()=>Ex,getBackend:()=>Hh,getGradient:()=>Gu,getKernel:()=>di,getKernelsForBackend:()=>Bl,grad:()=>rw,grads:()=>ow,greater:()=>so,greaterEqual:()=>Ai,ifft:()=>po,imag:()=>_o,image:()=>SC,inTopKAsync:()=>Fw,io:()=>Hc,irfft:()=>Ki,isFinite:()=>vp,isInf:()=>Np,isNaN:()=>kp,keep:()=>Le,kernel_impls:()=>be,leakyRelu:()=>Ri,less:()=>os,lessEqual:()=>Oo,linalg:()=>vC,linspace:()=>Tg,localResponseNormalization:()=>Ep,log:()=>yr,log1p:()=>Di,logSigmoid:()=>$p,logSoftmax:()=>Ap,logSumExp:()=>_i,logicalAnd:()=>ao,logicalNot:()=>Oi,logicalOr:()=>Pi,logicalXor:()=>Rp,losses:()=>NC,lowerBound:()=>Ig,matMul:()=>vt,math:()=>Nx,max:()=>ur,maxPool:()=>Li,maxPool3d:()=>Sg,maxPoolWithArgmax:()=>vg,maximum:()=>Bi,mean:()=>io,memory:()=>CR,meshgrid:()=>Ng,min:()=>rs,minimum:()=>co,mirrorPad:()=>Dp,mod:()=>Fp,moments:()=>kg,movingAverage:()=>Nw,mul:()=>j,multiRNNCell:()=>Eg,multinomial:()=>$g,neg:()=>pe,nextFrame:()=>Em,norm:()=>no,notEqual:()=>Mi,oneHot:()=>ns,ones:()=>Vr,onesLike:()=>_p,op:()=>S,outerProduct:()=>Ag,pad:()=>mr,pad1d:()=>Rg,pad2d:()=>Dg,pad3d:()=>Fg,pad4d:()=>_g,pool:()=>Op,pow:()=>xr,prelu:()=>Gi,print:()=>Kl,prod:()=>Pp,profile:()=>TR,raggedGather:()=>Og,raggedRange:()=>Pg,raggedTensorToTensor:()=>Lg,rand:()=>Bg,randomGamma:()=>Yg,randomNormal:()=>Lp,randomStandardNormal:()=>Zg,randomUniform:()=>Wi,randomUniformInt:()=>Qg,range:()=>Po,ready:()=>vR,real:()=>lo,reciprocal:()=>Bp,registerBackend:()=>Hl,registerGradient:()=>HA,registerKernel:()=>Rc,relu:()=>Gr,relu6:()=>Hi,removeBackend:()=>NR,reshape:()=>P,reverse:()=>Ve,reverse1d:()=>Jg,reverse2d:()=>tx,reverse3d:()=>ex,reverse4d:()=>rx,rfft:()=>Bo,round:()=>qi,rsqrt:()=>Mp,scalar:()=>lt,scatterND:()=>kw,scatter_util:()=>Xp,searchSorted:()=>Gc,selu:()=>Vp,separableConv2d:()=>Gp,serialization:()=>bx,setBackend:()=>SR,setPlatform:()=>$R,setdiff1dAsync:()=>ox,sigmoid:()=>pr,sign:()=>Up,signal:()=>Im,sin:()=>zp,sinh:()=>Wp,slice:()=>yt,slice1d:()=>nx,slice2d:()=>sx,slice3d:()=>ax,slice4d:()=>ix,slice_util:()=>ue,softmax:()=>Hp,softplus:()=>Fi,spaceToBatchND:()=>Vi,sparse:()=>kC,sparseToDense:()=>$w,spectral:()=>IC,split:()=>br,sqrt:()=>Ne,square:()=>ce,squaredDifference:()=>ji,squeeze:()=>Mo,stack:()=>ye,step:()=>Xi,stridedSlice:()=>qp,string:()=>EC,sub:()=>ct,sum:()=>kt,sumOutType:()=>Qn,tan:()=>Kp,tanh:()=>es,tensor:()=>xe,tensor1d:()=>de,tensor2d:()=>Vo,tensor3d:()=>jp,tensor4d:()=>cx,tensor5d:()=>lx,tensor6d:()=>px,tensorScatterUpdate:()=>mx,tensor_util:()=>Vh,test_util:()=>Xg,tidy:()=>gt,tile:()=>Mr,time:()=>IR,topk:()=>Yp,train:()=>vL,transpose:()=>Go,truncatedNormal:()=>fx,unique:()=>Zp,unregisterGradient:()=>KA,unregisterKernel:()=>qA,unsortedSegmentSum:()=>Qp,unstack:()=>Ge,upcastType:()=>re,upperBound:()=>dx,util:()=>y,valueAndGrad:()=>nw,valueAndGrads:()=>sw,variable:()=>hx,variableGrads:()=>am,version_core:()=>JC,where:()=>Be,whereAsync:()=>Jp,zeros:()=>qe,zerosLike:()=>oe});var Zo=class{constructor(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,e){this.dataIdsCount++,this.data.set(t,e)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}},jr=class{refCount(t){return Je("refCount")}incRef(t){return Je("incRef")}timerAvailable(){return!0}time(t){return Je("time")}read(t){return Je("read")}readSync(t){return Je("readSync")}readToGPU(t,e){return Je("readToGPU")}numDataIds(){return Je("numDataIds")}disposeData(t,e){return Je("disposeData")}write(t,e,o){return Je("write")}move(t,e,o,n,s){return Je("move")}createTensorFromGPUData(t,e,o){return Je("createTensorFromGPUData")}memory(){return Je("memory")}floatPrecision(){return Je("floatPrecision")}epsilon(){return this.floatPrecision()===32?1e-7:1e-4}dispose(){return Je("dispose")}};function Je(r){throw new Error(`'${r}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}function qb(r){let t=r.length,e=0;for(;t>0;)e=Math.random()*t|0,t--,Pu(r,t,e)}function gA(r,t){if(r.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${r.length}Second array length was ${t.length}`);let e=r.length,o=0;for(;e>0;)o=Math.random()*e|0,e--,Pu(r,e,o),Pu(t,e,o)}function hc(r,t,e){return Math.max(r,Math.min(t,e))}function xA(r){return r%2===0?r:r+1}function Pu(r,t,e){let o=r[t];r[t]=r[e],r[e]=o}function yA(r){let t=0;for(let e=0;e<r.length;e++)t+=r[e];return t}function bA(r,t){let e=Math.random();return t*e+(1-e)*r}function wA(r,t){let e=0;for(let o=0;o<r.length;o++){let n=Number(r[o])-Number(t[o]);e+=n*n}return e}function k(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function Bt(r,t,e=""){k(Fe(r,t),()=>e+` Shapes ${r} and ${t} must match`)}function cr(r){k(r!=null,()=>"The input to the tensor constructor must be a non-null value.")}function bt(r){if(r.length===0)return 1;let t=r[0];for(let e=1;e<r.length;e++)t*=r[e];return t}function CA(r){return r.length===0}function wh(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==null&&t[e]!==null&&r[e]!==t[e])return!1;return!0}function Fe(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(let e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function Co(r){return r%1===0}function TA(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;{let t=Math.exp(2*r);return(t-1)/(t+1)}}function IA(r){let t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function SA(r){let t=new Uint32Array(r);for(let e=0;e<r;++e)t[e]=e;return qb(t),t}function Is(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function vA(r,t=n=>0,e,o){return new Promise((n,s)=>{let a=0,i=()=>{if(r()){n();return}a++;let c=t(a);if(e!=null&&a>=e){s();return}o!=null?o(i,c):setTimeout(i,c)};i()})}function NA(r,t){let e=1,o=-1;for(let s=0;s<r.length;++s)if(r[s]>=0)e*=r[s];else if(r[s]===-1){if(o!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${o} and dim ${s}`);o=s}else if(r[s]<0)throw Error(`Shapes can not be < 0. Found ${r[s]} at dim ${s}`);if(o===-1){if(t>0&&t!==e)throw Error(`Size(${t}) must match the product of shape ${r}`);return r}if(e===0)throw Error(`Cannot infer the missing size in [${r}] when there are 0 elements`);if(t%e!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${e}`);let n=r.slice();return n[o]=t/e,n}function Qo(r,t){let e=t.length;return r=r==null?t.map((o,n)=>n):[].concat(r),k(r.every(o=>o>=-e&&o<e),()=>`All values in axis param must be in range [-${e}, ${e}) but got axis ${r}`),k(r.every(o=>Co(o)),()=>`All values in axis param must be integers but got axis ${r}`),r.map(o=>o<0?e+o:o)}function Ch(r,t){let e=[],o=[],n=t!=null&&Array.isArray(t)&&t.length===0,s=t==null||n?null:Qo(t,r).sort(),a=0;for(let i=0;i<r.length;++i){if(s!=null){if(s[a]===i&&r[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${r[i]}' is not 1`);(s[a]==null||s[a]>i)&&r[i]===1&&(e.push(r[i]),o.push(i)),s[a]<=i&&a++}r[i]!==1&&(e.push(r[i]),o.push(i))}return{newShape:e,keptDims:o}}function Th(r,t){return Lu(r,t)}function Lu(r,t){let e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else if(r==="string")e=new Array(t);else throw new Error(`Unknown data type ${r}`);return e}function Ih(r,t){for(let e=0;e<r.length;e++){let o=r[e];if(isNaN(o)||!isFinite(o))throw Error(`A tensor of type ${t} being uploaded contains ${o}.`)}}function Sh(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function kA(r,t){return!(t==="complex64"||t==="float32"&&r!=="complex64"||t==="int32"&&r!=="float32"&&r!=="complex64"||t==="bool"&&r==="bool")}function gc(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error(`Unknown dtype ${r}`)}function vh(r){if(r==null)return 0;let t=0;return r.forEach(e=>t+=e.length),t}function $r(r){return typeof r=="string"||r instanceof String}function Kb(r){return typeof r=="boolean"}function jb(r){return typeof r=="number"}function Jo(r){return Array.isArray(r)?Jo(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray?"int32":jb(r)?"float32":$r(r)?"string":Kb(r)?"bool":"float32"}function Xr(r){return!!(r&&r.constructor&&r.call&&r.apply)}function xc(r,t){for(let e=t;e<r;++e)if(r%e===0)return e;return r}function Yr(r){let t=r.length;if(t<2)return[];let e=new Array(t-1);e[t-2]=r[t-1];for(let o=t-3;o>=0;--o)e[o]=e[o+1]*r[o+1];return e}function Xb(r,t,e,o=!1){let n=new Array;if(t.length===1){let s=t[0]*(o?2:1);for(let a=0;a<s;a++)n[a]=e[r+a]}else{let s=t[0],a=t.slice(1),i=a.reduce((c,l)=>c*l)*(o?2:1);for(let c=0;c<s;c++)n[c]=Xb(r+c*i,a,e,o)}return n}function Ts(r,t,e=!1){if(r.length===0)return t[0];let o=r.reduce((n,s)=>n*s)*(e?2:1);if(o===0)return[];if(o!==t.length)throw new Error(`[${r}] does not match the input size ${t.length}${e?" for a complex tensor":""}.`);return Xb(0,r,t,e)}function EA(r,t){if(Array.isArray(r))return r;if(t==="float32")return r instanceof Float32Array?r:new Float32Array(r);if(t==="int32")return r instanceof Int32Array?r:new Int32Array(r);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(r));throw new Error(`Unknown dtype ${t}`)}function vl(r,t){let e=yc(r,t);for(let o=0;o<e.length;o++)e[o]=1;return e}function yc(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error(`Unknown data type ${t}`)}function $A(r,t){let e=r.reduce((o,n)=>o*n,1);if(t==null||t==="float32")return Ts(r,new Float32Array(e));if(t==="int32")return Ts(r,new Int32Array(e));if(t==="bool")return Ts(r,new Uint8Array(e));throw new Error(`Unknown data type ${t}`)}function zt(r){r.forEach(t=>{k(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${r}].`)})}function AA(r,t,e){if(t===0)return 0;if(t===1)return r[0];let o=r[r.length-1];for(let n=0;n<r.length-1;++n)o+=e[n]*r[n];return o}function RA(r,t,e){if(t===0)return[];if(t===1)return[r];let o=new Array(t);for(let n=0;n<o.length-1;++n)o[n]=Math.floor(r/e[n]),r-=o[n]*e[n];return o[o.length-1]=r,o}function Ss(r){return r&&r.then&&typeof r.then=="function"}var Yb="tfjsflags",bc=class{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=FA,this.populateURLFlags()}setPlatform(t,e){this.platform!=null&&(F().getBool("IS_TEST")||F().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=e}registerFlag(t,e,o){if(this.flagRegistry[t]={evaluationFn:e,setHook:o},this.urlFlags[t]!=null){let n=this.urlFlags[t];F().getBool("IS_TEST")||F().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${n}.`),this.set(t,n)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];let e=this.evaluateFlag(t);if(Ss(e))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=e,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,e){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;let t=this.getQueryParams(this.global.location.search);Yb in t&&t[Yb].split(",").forEach(o=>{let[n,s]=o.split(":");this.urlFlags[n]=OA(n,s)})}};function FA(r){let t={};return r.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...o)=>(_A(t,o[0],o[1]),o.join("="))),t}function _A(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function OA(r,t){let e=t.toLowerCase();return e==="true"||e==="false"?e==="true":`${+e}`===e?+e:t}function F(){return Bu}var Bu=null;function Zb(r){Bu=r}var Nh;function kh(){if(Nh==null){let r;if(typeof window<"u")r=window;else if(typeof global<"u")r=global;else if(typeof process<"u")r=process;else if(typeof self<"u")r=self;else throw new Error("Could not find a global object");Nh=r}return Nh}function PA(){let r=kh();return r._tfGlobals==null&&(r._tfGlobals=new Map),r._tfGlobals}function Nl(r,t){let e=PA();if(e.has(r))return e.get(r);{let o=t();return e.set(r,o),e.get(r)}}var vs="Abs",tn="Acos",en="Acosh",To="Add",Ns="AddN",wc="All",Cc="Any",ks="ArgMax",Es="ArgMin",rn="Asin",on="Asinh",nn="Atan",sn="Atanh",an="Atan2",$s="AvgPool",kl="AvgPoolGrad",As="AvgPool3D",El="AvgPool3DGrad",Rs="BatchMatMul",Ds="BatchToSpaceND",Fs="Bincount",cn="BitwiseAnd",LA="BroadcastTo",_s="BroadcastArgs",Io="Cast",ln="Ceil",pn="ClipByValue",Os="Complex",Ps="ComplexAbs",Ls="Concat",Bs="Conv2D",Ms="Conv2DBackpropFilter",Vs="Conv2DBackpropInput",Gs="Conv3D",$l="Conv3DBackpropFilterV2",Us="Conv3DBackpropInputV2",zs="Cos",un="Cosh",Ws="Cumprod",Hs="Cumsum",qs="CropAndResize",Ks="DenseBincount",js="DepthToSpace",Xs="DepthwiseConv2dNative",Ys="DepthwiseConv2dNativeBackpropFilter",Zs="DepthwiseConv2dNativeBackpropInput",Qs="Diag",Js="Dilation2D",Mu="Dilation2DBackpropInput",Vu="Dilation2DBackpropFilter",Tc="Draw",mn="RealDiv",ta="Einsum",ea="Elu",Al="EluGrad",ra="Erf",fn="Equal",oa="Exp",na="ExpandDims",dn="Expm1",Ic="FFT",sa="Fill",aa="FlipLeftRight",hn="Floor",gn="FloorDiv",ia="FusedBatchNorm",ca="GatherV2",la="GatherNd",xn="Greater",yn="GreaterEqual",So="Identity",pa="IFFT",ua="Imag",bn="IsFinite",wn="IsInf",Cn="IsNan",ma="LeakyRelu",Tn="Less",In="LessEqual",fa="LinSpace",da="Log",Sn="Log1p",vn="LogicalAnd",Nn="LogicalNot",kn="LogicalOr",BA="LogicalXor",MA="LogSoftmax",VA="LowerBound",Sc="LRN",Rl="LRNGrad",GA="MatrixBandPart",vc="Max",En="Maximum",ha="MaxPool",Dl="MaxPoolGrad",ga="MaxPool3D",Fl="MaxPool3DGrad",xa="MaxPoolWithArgmax",ya="Mean",Nc="Min",$n="Minimum",ba="MirrorPad",wa="Mod",Ca="Multinomial",An="Multiply",kc="Neg",Rn="NotEqual",Ta="NonMaxSuppressionV3",Ia="NonMaxSuppressionV4",Sa="NonMaxSuppressionV5",va="OnesLike",Na="OneHot",ka="Pack",Ea="PadV2",UA="Pool",$a="Pow",Aa="Prelu",Ra="Prod",Da="RaggedGather",Fa="RaggedRange",_a="RaggedTensorToTensor",Oa="Range",Pa="Real",Dn="Reciprocal",Fn="Relu",La="Reshape",Ba="ResizeNearestNeighbor",_l="ResizeNearestNeighborGrad",Ma="ResizeBilinear",Ol="ResizeBilinearGrad",_n="Relu6",Va="Reverse",On="Round",Pn="Rsqrt",Ga="ScatterNd",Ua="TensorScatterUpdate",za="SearchSorted",Wa="Select",Ln="Selu",Ha="Slice",qa="Sin",Bn="Sinh",Mn="Sign",Vn="Sigmoid",Gn="Softplus",Un="Sqrt",Ec="Sum",Ka="SpaceToBatchND",ja="SplitV",Xa="Softmax",Ya="SparseFillEmptyRows",Za="SparseReshape",Qa="SparseSegmentMean",Ja="SparseSegmentSum",ti="SparseToDense",zn="SquaredDifference",Pl="Square",Wn="StaticRegexReplace",ei="StridedSlice",ri="StringNGrams",oi="StringSplit",ni="StringToHashBucketFast",si="Sub",ai="Tan",Hn="Tanh",vo="Tile",ii="TopK",ci="Transform",No="Transpose",li="Unique",pi="Unpack",ui="UnsortedSegmentSum",zA="UpperBound",mi="ZerosLike",qn="Step",$c="FromPixels",fi="RotateWithOffset",Kn="_FusedMatMul",jn="FusedConv2D",Xn="FusedDepthwiseConv2D";function Zr(...r){F().getBool("IS_TEST")||F().getBool("PROD")||console.warn(...r)}function WA(...r){F().getBool("IS_TEST")||F().getBool("PROD")||console.log(...r)}var Ac=Nl("kernelRegistry",()=>new Map),Ll=Nl("gradRegistry",()=>new Map);function di(r,t){let e=Eh(r,t);return Ac.get(e)}function Gu(r){return Ll.get(r)}function Bl(r){let t=Ac.entries(),e=[];for(;;){let{done:o,value:n}=t.next();if(o)break;let[s,a]=n,[i]=s.split("_");i===r&&e.push(a)}return e}function Rc(r){let{kernelName:t,backendName:e}=r,o=Eh(t,e);Ac.has(o)&&Zr(`The kernel '${t}' for backend '${e}' is already registered`),Ac.set(o,r)}function HA(r){let{kernelName:t}=r;Ll.has(t)&&F().getBool("DEBUG")&&Zr(`Overriding the gradient for '${t}'`),Ll.set(t,r)}function qA(r,t){let e=Eh(r,t);if(!Ac.has(e))throw new Error(`The kernel '${r}' for backend '${t}' is not registered`);Ac.delete(e)}function KA(r){if(!Ll.has(r))throw new Error(`The gradient '${r}' for backend is not registered`);Ll.delete(r)}function jA(r,t){Bl(r).forEach(o=>{let n=Object.assign({},o,{backendName:t});Rc(n)})}function Eh(r,t){return`${t}_${r}`}var y={};Et(y,{arraysEqual:()=>Fe,arraysEqualWithNull:()=>wh,assert:()=>k,assertNonNegativeIntegerDimensions:()=>zt,assertNonNull:()=>cr,assertShapesMatch:()=>Bt,bytesFromStringArray:()=>vh,bytesPerElement:()=>gc,checkConversionForErrors:()=>Ih,clamp:()=>hc,computeStrides:()=>Yr,convertBackendValuesAndArrayBuffer:()=>EA,createScalarValue:()=>eR,createShuffledIndices:()=>SA,decodeString:()=>Oc,distSquared:()=>wA,encodeString:()=>Zn,fetch:()=>oR,fingerPrint64:()=>tR,flatten:()=>Rr,getArrayFromDType:()=>Lu,getTypedArrayFromDType:()=>Th,hasEncodingLoss:()=>kA,hexToLong:()=>Ml,indexToLoc:()=>RA,inferDtype:()=>Jo,inferFromImplicitShape:()=>NA,isBoolean:()=>Kb,isFunction:()=>Xr,isInt:()=>Co,isNumber:()=>jb,isPromise:()=>Ss,isScalarShape:()=>CA,isString:()=>$r,isTypedArray:()=>ee,isValidDtype:()=>Sh,locToIndex:()=>AA,makeOnesTypedArray:()=>vl,makeZerosNestedTypedArray:()=>$A,makeZerosTypedArray:()=>yc,nearestDivisor:()=>xc,nearestLargerEven:()=>xA,now:()=>bi,parseAxisParam:()=>Qo,randUniform:()=>bA,repeatedTry:()=>vA,rightPad:()=>Is,shuffle:()=>qb,shuffleCombo:()=>gA,sizeFromShape:()=>bt,sizeToSquarishShape:()=>IA,squeezeShape:()=>Ch,sum:()=>yA,swap:()=>Pu,tanh:()=>TA,toNestedArray:()=>Ts,toTypedArray:()=>_c});function Uu(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array||r instanceof Uint8ClampedArray}var Dh=Ou(l0());var yi=Dh.default||Dh;function Ml(r){return yi.fromString(r,!0,16)}var u0=Ml("c3a5c85c97cb3127"),xi=Ml("b492b66fbe98f273"),_e=Ml("9ae16a3b2f90404f");function Rh(r){return r.xor(r.shru(47))}function m0(r,t,e){let o=r.slice(t,t+e);return yi.fromBytes(Array.from(o),!0,!0)}function Wt(r,t){return m0(r,t,8)}function p0(r,t){return m0(r,t,4)}function ge(r,t){return t===0?r:r.shru(t).or(r.shl(64-t))}function Yn(r,t,e=Ml("9ddfea08eb382d69")){let o=r.xor(t).mul(e);o=o.xor(o.shru(47));let n=t.xor(o).mul(e);return n=n.xor(n.shru(47)),n=n.mul(e),n}function YA(r,t,e,o,n,s){n=n.add(r),s=ge(s.add(n).add(o),21);let a=n;return n=n.add(t),n=n.add(e),s=s.add(ge(n,44)),[n.add(o),s.add(a)]}function Wu(r,t,e,o){return YA(Wt(r,t),Wt(r,t+8),Wt(r,t+16),Wt(r,t+24),e,o)}function ZA(r,t=r.length){if(t>=8){let e=_e.add(t*2),o=Wt(r,0).add(_e),n=Wt(r,t-8),s=ge(n,37).mul(e).add(o),a=ge(o,25).add(n).mul(e);return Yn(s,a,e)}if(t>=4){let e=_e.add(t*2),o=p0(r,0);return Yn(o.shl(3).add(t),p0(r,t-4),e)}if(t>0){let e=r[0],o=r[t>>1],n=r[t-1],s=e+(o<<8),a=t+(n<<2);return Rh(_e.mul(s).xor(u0.mul(a))).mul(_e)}return _e}function QA(r,t=r.length){let e=_e.add(t*2),o=Wt(r,0).mul(xi),n=Wt(r,8),s=Wt(r,t-8).mul(e),a=Wt(r,t-16).mul(_e);return Yn(ge(o.add(n),43).add(ge(s,30)).add(a),o.add(ge(n.add(_e),18)).add(s),e)}function JA(r,t=r.length){let e=_e.add(t*2),o=Wt(r,0).mul(_e),n=Wt(r,8),s=Wt(r,t-8).mul(e),a=Wt(r,t-16).mul(_e),i=ge(o.add(n),43).add(ge(s,30)).add(a),c=Yn(i,o.add(ge(n.add(_e),18)).add(s),e),l=Wt(r,16).mul(e),p=Wt(r,24),u=i.add(Wt(r,t-32)).mul(e),m=c.add(Wt(r,t-24)).mul(e);return Yn(ge(l.add(p),43).add(ge(u,30)).add(m),l.add(ge(p.add(o),18)).add(u),e)}function tR(r,t=r.length){let e=yi.fromNumber(81,!0);if(t<=32)return t<=16?ZA(r,t):QA(r,t);if(t<=64)return JA(r,t);let o=e,n=e.mul(xi).add(113),s=Rh(n.mul(_e).add(113)).mul(_e),a=[yi.UZERO,yi.UZERO],i=[yi.UZERO,yi.UZERO];o=o.mul(_e).add(Wt(r,0));let c=0,l=(t-1>>6)*64,p=l+(t-1&63)-63;do o=ge(o.add(n).add(a[0]).add(Wt(r,c+8)),37).mul(xi),n=ge(n.add(a[1]).add(Wt(r,c+48)),42).mul(xi),o=o.xor(i[1]),n=n.add(a[0]).add(Wt(r,c+40)),s=ge(s.add(i[0]),33).mul(xi),a=Wu(r,c,a[1].mul(xi),o.add(i[0])),i=Wu(r,c+32,s.add(i[1]),n.add(Wt(r,c+16))),[s,o]=[o,s],c+=64;while(c!==l);let u=xi.add(s.and(255).shl(1));return c=p,i[0]=i[0].add(t-1&63),a[0]=a[0].add(i[0]),i[0]=i[0].add(a[0]),o=ge(o.add(n).add(a[0]).add(Wt(r,c+8)),37).mul(u),n=ge(n.add(a[1]).add(Wt(r,c+48)),42).mul(u),o=o.xor(i[1].mul(9)),n=n.add(a[0].mul(9).add(Wt(r,c+40))),s=ge(s.add(i[0]),33).mul(u),a=Wu(r,c,a[1].mul(u),o.add(i[0])),i=Wu(r,c+32,s.add(i[1]),n.add(Wt(r,c+16))),[s,o]=[o,s],Yn(Yn(a[0],i[0],u).add(Rh(n).mul(u0)).add(s),Yn(a[1],i[1],u).add(o),u)}function eR(r,t){return t==="string"?Zn(r):_c([r],t)}function rR(r,t){return r instanceof Float32Array&&t==="float32"||r instanceof Int32Array&&t==="int32"||r instanceof Uint8Array&&t==="bool"}function _c(r,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Rr(r)),F().getBool("DEBUG")&&Ih(r,t),rR(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){let e=new Uint8Array(r.length);for(let o=0;o<e.length;++o)Math.round(r[o])!==0&&(e[o]=1);return e}else throw new Error(`Unknown data type ${t}`)}function bi(){return F().platform.now()}function oR(r,t){return F().platform.fetch(r,t)}function Zn(r,t="utf-8"){return t=t||"utf-8",F().platform.encode(r,t)}function Oc(r,t="utf-8"){return t=t||"utf-8",F().platform.decode(r,t)}function ee(r){return F().platform.isTypedArray!=null?F().platform.isTypedArray(r):Uu(r)}function Rr(r,t=[],e=!1){if(t==null&&(t=[]),typeof r=="boolean"||typeof r=="number"||typeof r=="string"||Ss(r)||r==null||ee(r)&&e)t.push(r);else if(Array.isArray(r)||ee(r))for(let o=0;o<r.length;++o)Rr(r[o],t,e);else{let o=-1;for(let n of Object.keys(r))/^([1-9]+[0-9]*|0)$/.test(n)&&(o=Math.max(o,Number(n)));for(let n=0;n<=o;n++)Rr(r[n],t,e)}return t}var Hu=class{constructor(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Fh)}profileKernel(t,e,o){let n,s=()=>{n=o()},a,i=bi();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(s);else{s();for(let l of n)l.dataSync();a=Promise.resolve({kernelMs:bi()-i})}if(F().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let l=0;l<n.length;l++){let p=n[l];p.data().then(u=>{nR(u,p.dtype,t)})}return{kernelName:t,outputs:n,inputs:e,timeMs:a.then(l=>l.kernelMs),extraInfo:a.then(l=>l.getExtraProfileInfo!=null?l.getExtraProfileInfo():"")}}logKernelProfile(t){let{kernelName:e,outputs:o,timeMs:n,inputs:s,extraInfo:a}=t;o.forEach(i=>{Promise.all([i.data(),n,a]).then(c=>{this.logger.logKernelProfile(e,i,c[0],c[1],s,c[2])})})}};function nR(r,t,e){if(t!=="float32")return!1;for(let o=0;o<r.length;o++){let n=r[o];if(isNaN(n)||!isFinite(n))return console.warn(`Found ${n} in the result of '${e}'`),!0}return!1}var Fh=class{logKernelProfile(t,e,o,n,s,a){let i=typeof n=="number"?Is(`${n}ms`,9):n.error,c=Is(t,25),l=e.rank,p=e.size,u=Is(e.shape.toString(),14),m="";for(let f in s){let d=s[f];if(d!=null){let g=d.shape||e.shape,h=g.length;m+=`${f}: ${h}D ${h>0?g:""} `}}console.log(`%c${c}	%c${i}	%c${l}D ${u}	%c${p}	%c${m}	%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}};function f0(r,t,e){let o={},n={};for(let c=0;c<t.length;c++)o[t[c].id]=!0;for(let c=0;c<r.length;c++){let l=r[c],p=l.inputs;for(let u in p){let m=p[u],f=!1;for(let d=0;d<t.length;d++)if(o[m.id]){l.outputs.forEach(g=>o[g.id]=!0),f=!0,n[l.id]=!0;break}if(f)break}}let s={};s[e.id]=!0;let a={};for(let c=r.length-1;c>=0;c--){let l=r[c],p=l.inputs;for(let u=0;u<l.outputs.length;u++)if(s[l.outputs[u].id]){for(let m in p)s[p[m].id]=!0,a[l.id]=!0;break}}let i=[];for(let c=0;c<r.length;c++){let l=r[c];if(n[l.id]&&a[l.id]){let p={};for(let m in l.inputs){let f=l.inputs[m];o[f.id]&&(p[m]=f)}let u=Object.assign({},l);u.inputs=p,u.outputs=l.outputs,i.push(u)}}return i}function d0(r,t,e,o){for(let n=t.length-1;n>=0;n--){let s=t[n],a=[];if(s.outputs.forEach(c=>{let l=r[c.id];l!=null?a.push(l):a.push(null)}),s.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let i=s.gradient(a);for(let c in s.inputs){if(!(c in i))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(i)}.`);let l=e(()=>i[c]());if(l.dtype!=="float32")throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${l.dtype}'`);let p=s.inputs[c];if(!Fe(l.shape,p.shape))throw new Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${c}' has shape '${l.shape}', which does not match the shape of the input '${p.shape}'`);if(r[p.id]==null)r[p.id]=l;else{let u=r[p.id];r[p.id]=o(u,l),u.dispose()}}}}var h0=20,Vl=3,_h=7;function g0(r,t,e,o){let n=Yr(t),s=sR(r,t,e,n),a=t.length,i=qu(r,t,e,n,s),c=["Tensor"];return o&&(c.push(`  dtype: ${e}`),c.push(`  rank: ${a}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(i.map(l=>"    "+l).join(`
`)),c.join(`
`)}function sR(r,t,e,o){let n=bt(t),s=o[o.length-1],a=new Array(s).fill(0),i=t.length,c=e==="complex64"?Ul(r):r;if(i>1)for(let l=0;l<n/s;l++){let p=l*s;for(let u=0;u<s;u++)a[u]=Math.max(a[u],Gl(c[p+u],0,e).length)}return a}function Gl(r,t,e){let o;return Array.isArray(r)?o=`${parseFloat(r[0].toFixed(_h))} + ${parseFloat(r[1].toFixed(_h))}j`:$r(r)?o=`'${r}'`:e==="bool"?o=x0(r):o=parseFloat(r.toFixed(_h)).toString(),Is(o,t)}function x0(r){return r===0?"false":"true"}function qu(r,t,e,o,n,s=!0){let a=e==="complex64"?2:1,i=t[0],c=t.length;if(c===0){if(e==="complex64"){let g=Ul(r);return[Gl(g[0],0,e)]}return e==="bool"?[x0(r[0])]:[r[0].toString()]}if(c===1){if(i>h0){let h=Vl*a,x=Array.from(r.slice(0,h)),b=Array.from(r.slice((i-Vl)*a,i*a));return e==="complex64"&&(x=Ul(x),b=Ul(b)),["["+x.map((I,T)=>Gl(I,n[T],e)).join(", ")+", ..., "+b.map((I,T)=>Gl(I,n[i-Vl+T],e)).join(", ")+"]"]}return["["+(e==="complex64"?Ul(r):Array.from(r)).map((h,x)=>Gl(h,n[x],e)).join(", ")+"]"]}let l=t.slice(1),p=o.slice(1),u=o[0]*a,m=[];if(i>h0){for(let g=0;g<Vl;g++){let h=g*u,x=h+u;m.push(...qu(r.slice(h,x),l,e,p,n,!1))}m.push("...");for(let g=i-Vl;g<i;g++){let h=g*u,x=h+u;m.push(...qu(r.slice(h,x),l,e,p,n,g===i-1))}}else for(let g=0;g<i;g++){let h=g*u,x=h+u;m.push(...qu(r.slice(h,x),l,e,p,n,g===i-1))}let f=c===2?",":"";m[0]="["+(i>0?m[0]+f:"");for(let g=1;g<m.length-1;g++)m[g]=" "+m[g]+f;let d=`,
`;for(let g=2;g<c;g++)d+=`
`;return m[m.length-1]=" "+m[m.length-1]+"]"+(s?"":d),m}function Ul(r){let t=[];for(let e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var $t=class{constructor(t,e,o){if(this.dtype=e,this.shape=t.slice(),this.size=bt(t),o!=null){let n=o.length;k(n===this.size,()=>`Length of values '${n}' does not match the size inferred by the shape '${this.size}'.`)}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=o||Lu(e,this.size),this.strides=Yr(t)}set(t,...e){e.length===0&&(e=[0]),k(e.length===this.rank,()=>`The number of provided coordinates (${e.length}) must match the rank (${this.rank})`);let o=this.locToIndex(e);this.values[o]=t}get(...t){t.length===0&&(t=[0]);let e=0;for(let n of t){if(n<0||n>=this.shape[e]){let s=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(s)}e++}let o=t[t.length-1];for(let n=0;n<t.length-1;++n)o+=this.strides[n]*t[n];return this.values[o]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let e=t[t.length-1];for(let o=0;o<t.length-1;++o)e+=this.strides[o]*t[o];return e}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];let e=new Array(this.shape.length);for(let o=0;o<e.length-1;++o)e[o]=Math.floor(t/this.strides[o]),t-=e[o]*this.strides[o];return e[e.length-1]=t,e}get rank(){return this.shape.length}toTensor(){return Dr().makeTensor(this.values,this.shape,this.dtype)}},Dr=null,Pc=null,aR=null;function y0(r){Dr=r}function b0(r){Pc=r}function w0(r){aR=r}var Rt=class{constructor(t,e,o,n){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=bt(t),this.strides=Yr(t),this.dataId=o,this.id=n,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let t=await this.data();return Pc.buffer(this.shape,this.dtype,t)}bufferSync(){return Pc.buffer(this.shape,this.dtype,this.dataSync())}async array(){let t=await this.data();return Ts(this.shape,t,this.dtype==="complex64")}arraySync(){return Ts(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();let t=Dr().read(this.dataId);if(this.dtype==="string"){let e=await t;try{return e.map(o=>Oc(o))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),Dr().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();let t=Dr().readSync(this.dataId);if(this.dtype==="string")try{return t.map(e=>Oc(e))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();let t=await Dr().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),Dr().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return Pc.print(this,t)}clone(){return this.throwIfDisposed(),Pc.clone(this)}toString(t=!1){let e=this.dataSync();return g0(e,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),Pc.cast(this,t)}variable(t=!0,e,o){return this.throwIfDisposed(),Dr().makeVariable(this,t,e,o)}};Object.defineProperty(Rt,Symbol.hasInstance,{value:r=>!!r&&r.data!=null&&r.dataSync!=null&&r.throwIfDisposed!=null});function R(){return Nl("Tensor",()=>Rt)}R();var Qr=class extends Rt{constructor(t,e,o,n){super(t.shape,t.dtype,t.dataId,n),this.trainable=e,this.name=o}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Fe(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);Dr().disposeTensor(this),this.dataId=t.dataId,Dr().incRef(this,null)}dispose(){Dr().disposeVariable(this),this.isDisposedInternal=!0}};Object.defineProperty(Qr,Symbol.hasInstance,{value:r=>r instanceof Rt&&r.assign!=null&&r.assign instanceof Function});var Vh={};Et(Vh,{assertTypesMatch:()=>Mh,getTensorsInContainer:()=>zl,isTensorInList:()=>cR,makeTypesMatch:()=>xt});var Ku;(function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"})(Ku||(Ku={}));var Oh;(function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"})(Oh||(Oh={}));var Ph;(function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"})(Ph||(Ph={}));var Lh;(function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"})(Lh||(Lh={}));var Bh;(function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"})(Bh||(Bh={}));var iR={float32:Lh,int32:Oh,bool:Ph,complex64:Bh};function re(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${r} with ${t}`)}return iR[r][t]}function Qn(r){return re(r,"int32")}function ju(r){return r!=null&&typeof r=="object"&&"texture"in r&&r.texture instanceof WebGLTexture}function Xu(r){return typeof GPUBuffer<"u"&&r!=null&&typeof r=="object"&&"buffer"in r&&r.buffer instanceof GPUBuffer}function xt(r,t){if(r.dtype===t.dtype)return[r,t];let e=re(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function Mh(r,t){k(r.dtype===t.dtype,()=>`The dtypes of the first(${r.dtype}) and second(${t.dtype}) input must match`)}function cR(r,t){return t.some(e=>e.id===r.id)}function zl(r){let t=[];return C0(r,t,new Set),t}function C0(r,t,e){if(r==null)return;if(r instanceof Rt){t.push(r);return}if(!lR(r))return;let o=r;for(let n in o){let s=o[n];e.has(s)||(e.add(s),C0(s,t,e))}}function lR(r){return Array.isArray(r)||typeof r=="object"}function Gh(r){return r.kernelName!=null}var Yu=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(let t in this.registeredVariables)this.registeredVariables[t].dispose()}},Wl=class r{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Yu}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let t=this.getSortedBackends();for(let e=0;e<t.length;e++){let o=t[e];if(await this.initializeBackend(o).success){await this.setBackend(o);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:t,asyncInit:e}=this.initializeBackendsAndReturnBest();if(e)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){let{asyncInit:e}=this.initializeBackend(t);if(e)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,e,o=1){return t in this.registryFactory?(Zr(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:e,priority:o},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;let{success:e,asyncInit:o}=this.initializeBackend(t);if(!(o?await e:e))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Hu(this.backendInstance),!0}setupRegisteredKernels(){Bl(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){Bl(t).forEach(o=>{o.disposeFunc!=null&&o.disposeFunc(this.registry[t])})}initializeBackend(t){let e=this.registryFactory[t];if(e==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{let o=e.factory();if(o&&!(o instanceof jr)&&typeof o.then=="function"){let n=++this.pendingBackendInitId,s=o.then(a=>n<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(n<this.pendingBackendInitId||(this.pendingBackendInit=null,Zr(`Initialization of backend ${t} failed`),Zr(a.stack||a.message)),!1));return this.pendingBackendInit=s,{success:s,asyncInit:!0}}else return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(o){return Zr(`Initialization of backend ${t} failed`),Zr(o.stack||o.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,e)=>this.registryFactory[e].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){let t=this.getSortedBackends();for(let e=0;e<t.length;e++){let o=t[e],{success:n,asyncInit:s}=this.initializeBackend(o);if(s||n)return{name:o,asyncInit:s}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,e){let o=this.state.tensorInfo.get(e),n=o.backend,s=this.readSync(e),a=n.refCount(e);n.disposeData(e,!0),o.backend=t,t.move(e,s,o.shape,o.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,e){let o=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");o=t}let n;return this.scopedRun(()=>this.startScope(o),()=>this.endScope(n),()=>(n=e(),n instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n))}scopedRun(t,e,o){t();try{let n=o();return e(),n}catch(n){throw e(),n}}nextTensorId(){return r.nextTensorId++}nextVariableId(){return r.nextVariableId++}clone(t){let e=N.runKernel(So,{x:t}),o={x:t},n=a=>({x:()=>{let i="float32",c={x:a},l={dtype:i};return N.runKernel(Io,c,l)}}),s=[];return this.addTapeNode(this.state.activeScope.name,o,[e],n,s,{}),e}runKernel(t,e,o){if(this.backendName==null&&this.backend,!(di(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:e,attrs:o})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,e,o){let n=this.backend.numDataIds(),s=0;o.forEach(c=>{s+=c.dtype==="complex64"?3:1});let a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=n-e-s-a;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let e,o=[],n=this.isTapeOn(),s=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let c,l=Gh(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Gh(t)){let{kernelName:d,inputs:g,attrs:h}=t;this.backendName==null&&this.backend;let x=di(d,this.backendName);k(x!=null,()=>`Cannot find registered kernel '${d}' for backend '${this.backendName}'`),i=()=>{let b=this.backend.numDataIds();c=x.kernelFunc({inputs:g,attrs:h,backend:this.backend});let I=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(d,b,I);let T=I.map(E=>E.rank!=null?E:this.makeTensorFromTensorInfo(E));if(n){let E=this.getTensorsForGradient(d,g,T);o=this.saveTensorsForBackwardMode(E)}return T}}else{let{forwardFunc:d}=t,g=h=>{n&&(o=h.map(x=>this.keep(this.clone(x))))};i=()=>{let h=this.backend.numDataIds();c=this.tidy(()=>d(this.backend,g));let x=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(l,h,x),x}}let{inputs:p,attrs:u}=t,m=Gh(t)?null:t.backwardsFunc,f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?e=i():(f=this.profiler.profileKernel(l,p,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(f),e=f.outputs)}),n&&this.addTapeNode(l,p,e,m,o,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:l,bytesAdded:this.state.numBytes-s,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(p).map(d=>p[d]!=null?p[d].shape:null),outputShapes:e.map(d=>d.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(c)?e:e[0]}saveTensorsForBackwardMode(t){return t.map(o=>this.keep(this.clone(o)))}getTensorsForGradient(t,e,o){let n=Gu(t);if(n!=null){let s=n.inputsToSave||[],a=n.outputsToSave||[],i;n.saveAllInputs?(k(Array.isArray(e),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(e).map(l=>e[l])):i=s.map(l=>e[l]);let c=o.filter((l,p)=>a[p]);return i.concat(c)}return[]}makeTensor(t,e,o,n){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");o=o||"float32",n=n||this.backend;let s=t;o==="string"&&$r(t[0])&&(s=t.map(c=>Zn(c)));let a=n.write(s,e,o),i=new Rt(e,o,a,this.nextTensorId());if(this.trackTensor(i,n),o==="string"){let c=this.state.tensorInfo.get(a),l=vh(s);this.state.numBytes+=l-c.bytes,c.bytes=l}return i}makeTensorFromDataId(t,e,o,n){o=o||"float32";let s={dataId:t,shape:e,dtype:o};return this.makeTensorFromTensorInfo(s,n)}makeTensorFromTensorInfo(t,e){let{dataId:o,shape:n,dtype:s}=t,a=new Rt(n,s,o,this.nextTensorId());return this.trackTensor(a,e),a}makeVariable(t,e=!0,o,n){o=o||this.nextVariableId().toString(),n!=null&&n!==t.dtype&&(t=t.cast(n));let s=new Qr(t,e,o,this.nextTensorId());if(this.state.registeredVariables[s.name]!=null)throw new Error(`Variable with name ${s.name} was already registered`);return this.state.registeredVariables[s.name]=s,this.incRef(s,this.backend),s}trackTensor(t,e){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*gc(t.dtype)),this.state.numBytes+=o,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o})),t instanceof Qr||this.track(t)}incRef(t,e){this.trackTensor(t,e),this.backend.incRef(t.dataId)}removeDataId(t,e){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===e&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;let e=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=e.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){let o=t.size*gc(t.dtype);this.state.numBytes-=o}e.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,e.backend)}disposeVariables(){for(let t in this.state.registeredVariables){let e=this.state.registeredVariables[t];this.disposeVariable(e)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){let t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;let e=this.state.numBytes,o=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(n=>n.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-o;for(let n of this.state.activeProfile.kernels)n.kernelTimeMs=await n.kernelTimeMs,n.extraInfo=await n.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,e,o,n,s,a){let i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:o,saved:s},c=Gu(t);c!=null&&(n=c.gradFunc),n!=null&&(i.gradient=l=>(l=l.map((p,u)=>{if(p==null){let m=o[u],f=yc(m.size,m.dtype);return this.makeTensor(f,m.shape,m.dtype)}return p}),n(l.length>1?l:l[0],s,a))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){let e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e}endScope(t){let e=zl(t),o=new Set(e.map(s=>s.id));for(let s=0;s<this.state.activeScope.track.length;s++){let a=this.state.activeScope.track[s];!a.kept&&!o.has(a.id)&&a.dispose()}let n=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],e.forEach(s=>{!s.kept&&s.scopeId===n.id&&this.track(s)})}gradients(t,e,o,n=!1){if(k(e.length>0,()=>"gradients() received an empty list of xs."),o!=null&&o.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${o.dtype}'`);let s=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));k(s instanceof Rt,()=>"The result y returned by f() must be a tensor.");let a=f0(this.state.activeTape,e,s);if(!n&&a.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let i={};i[s.id]=o??pR(s.shape),d0(i,a,l=>this.tidy(l),uR);let c=e.map(l=>i[l.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(l=>{for(let p of l.saved)p.dispose()}),this.state.activeTape=null),{value:s,grads:c}})}customGrad(t){return k(Xr(t),()=>"The f passed in customGrad(f) must be a function."),(...e)=>{k(e.every(i=>i instanceof Rt),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let o,n={};e.forEach((i,c)=>{n[c]=i});let s=(i,c)=>(o=t(...e,c),k(o.value instanceof Rt,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),k(Xr(o.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),o.value),a=(i,c)=>{let l=o.gradFunc(i,c),p=Array.isArray(l)?l:[l];k(p.length===e.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),k(p.every(m=>m instanceof Rt),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let u={};return p.forEach((m,f)=>{u[f]=()=>m}),u};return this.runKernelFunc({forwardFunc:s,backwardsFunc:a,inputs:n})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,e){return this.state.tensorInfo.get(t).backend.readToGPU(t,e)}async time(t){let e=bi(),o=await this.backend.time(t);return o.wallMs=bi()-e,o}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Yu;for(let t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}};Wl.nextTensorId=0;Wl.nextVariableId=0;function pR(r){let t=vl(bt(r),"float32");return N.makeTensor(t,r,"float32")}function Uh(){let r=kh();if(r._tfengine==null){let t=new bc(r);r._tfengine=new Wl(t)}return Zb(r._tfengine.ENV),y0(()=>r._tfengine),r._tfengine}var N=Uh();function uR(r,t){let e={a:r,b:t};return N.runKernel("Add",e)}var ko={};Et(ko,{isBrowser:()=>Wh,isMobile:()=>dR,mockIsMobile:()=>fR});function mR(){return typeof navigator<"u"&&navigator!=null}var zh;function fR(r){zh=r}function dR(r){if(zh!==void 0)return zh;if(r||mR()){if(r||(r=navigator),r.product==="ReactNative")return!0;let t=r.userAgent||r.vendor||(typeof window<"u"?window.opera:"");if(!t){let e=r;return e.userAgentData&&e.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Wh(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var ze=F();ze.registerFlag("DEBUG",()=>!1,r=>{r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});ze.registerFlag("IS_BROWSER",()=>Wh());ze.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");ze.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));ze.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));ze.registerFlag("PROD",()=>!1);ze.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>ze.getBool("DEBUG"));ze.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);ze.registerFlag("IS_TEST",()=>!1);ze.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>ze.getBool("DEBUG"));ze.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);ze.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);ze.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);function Se(r,t){let e=r;if(ee(r))return t==="string"?[]:[r.length];if(ju(r)){let n=r.channels||"RGBA";return[r.height,r.width*n.length]}else if(Xu(r))return[r.buffer.size/(t==null?4:gc(t))];if(!Array.isArray(r))return[];let o=[];for(;Array.isArray(e)||ee(e)&&t!=="string";)o.push(e.length),e=e[0];return Array.isArray(r)&&F().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&I0(r,o,[]),o}function I0(r,t,e){if(e=e||[],!Array.isArray(r)&&!ee(r)){k(t.length===0,()=>`Element arr[${e.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}k(t.length>0,()=>`Element arr[${e.join("][")}] should be a primitive, but is an array of ${r.length} elements`),k(r.length===t[0],()=>`Element arr[${e.join("][")}] should have ${t[0]} elements, but has ${r.length} elements`);let o=t.slice(1);for(let n=0;n<r.length;++n)I0(r[n],o,e.concat(n))}function T0(r,t,e,o){if(r!=="string_or_numeric"){if(r==null)throw new Error("Expected dtype cannot be null.");if(r!=="numeric"&&r!==t||r==="numeric"&&t==="string")throw new Error(`Argument '${e}' passed to '${o}' must be ${r} tensor, but got ${t} tensor`)}}function C(r,t,e,o="numeric"){if(r instanceof R())return T0(o,r.dtype,t,e),r;let n=Jo(r);if(n!=="string"&&["bool","int32","float32"].indexOf(o)>=0&&(n=o),T0(o,n,t,e),r==null||!ee(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){let c=r==null?"null":r.constructor.name;throw new Error(`Argument '${t}' passed to '${e}' must be a Tensor or TensorLike, but got '${c}'`)}let s=Se(r,n);!ee(r)&&!Array.isArray(r)&&(r=[r]);let i=n!=="string"?_c(r,n):Rr(r,[],!0);return N.makeTensor(i,s,n)}function Eo(r,t,e,o="numeric"){if(!Array.isArray(r))throw new Error(`Argument ${t} passed to ${e} must be a \`Tensor[]\` or \`TensorLike[]\``);return r.map((s,a)=>C(s,`${t}[${a}]`,e,o))}var Zu="__op";function S(r){let t=Object.keys(r);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let e=t[0],o=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1)),e=e+Zu;let n=(...s)=>{N.startScope(e);try{let a=o(...s);return Ss(a)&&console.error("Cannot return a Promise inside of tidy."),N.endScope(a),a}catch(a){throw N.endScope(null),a}};return Object.defineProperty(n,"name",{value:e,configurable:!0}),n}function hR(r,t){let e=C(r,"real","complex"),o=C(t,"imag","complex");Bt(e.shape,o.shape,`real and imag shapes, ${e.shape} and ${o.shape}, must match in call to tf.complex().`);let n={real:e,imag:o};return N.runKernel(Os,n)}var Oe=S({complex_:hR});function Pe(r,t,e,o){if(o==null)o=Jo(r);else if(o==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(Xu(r)||ju(r)){if(o!=="float32"&&o!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${o}.`);return N.backend.createTensorFromGPUData(r,t||e,o)}if(!ee(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){zt(t);let n=bt(t),s=bt(e);k(n===s,()=>`Based on the provided shape, [${t}], the tensor should have ${n} values but has ${s}`);for(let a=0;a<e.length;++a){let i=e[a],c=a===e.length-1?i!==bt(t.slice(a)):!0;k(e[a]===t[a]||!c,()=>`Error creating a new Tensor. Inferred shape (${e}) does not match the provided shape (${t}). `)}}return!ee(r)&&!Array.isArray(r)&&(r=[r]),t=t||e,r=o!=="string"?_c(r,o):Rr(r,[],!0),N.makeTensor(r,t,o)}function xe(r,t,e){let o=Se(r,e);return Pe(r,t,o,e)}var $o={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};var ve=class r{static join(t){return new r(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(o=>ee(o)?o.buffer:o),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let e=0;for(let o=0;o<t.length;o++){let n=t[o];o!==t.length-1&&n.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let s=e+n.byteLength;this.shards.push({buffer:n,start:e,end:s}),e=s}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,e=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,e=isNaN(Number(e))?0:e,t=Math.max(0,t),e=Math.min(this.byteLength,e),e<=t)return new ArrayBuffer(0);let o=this.findShardForByte(t);if(o===-1)throw new Error(`Could not find start shard for byte ${t}`);let n=e-t,s=new ArrayBuffer(n),a=new Uint8Array(s),i=0;for(let c=o;c<this.shards.length;c++){let l=this.shards[c],u=t+i-l.start,m=i,d=Math.min(e,l.end)-l.start,g=new Uint8Array(l.buffer,u,d-u);if(a.set(g,m),i+=g.length,e<l.end)break}return s}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function e(n){return t<n.start?-1:t>=n.end?1:0}if(e(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;let o=gR(this.shards,e);return o===-1?-1:(this.previousShardIndex=o,this.previousShardIndex)}};function gR(r,t){let e=0,o=r.length;for(;e<=o;){let n=Math.floor((o-e)/2)+e,s=t(r[n]);if(s===0)return n;s<0?o=n:e=n+1}return-1}function xR(){F().set("PROD",!0)}function yR(){F().set("DEBUG",!0)}function bR(){F().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function S0(r){F().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}w0(S0);function wR(){N.disposeVariables()}function lr(){return N}function CR(){return N.memory()}function TR(r){return N.profile(r)}function gt(r,t){return N.tidy(r,t)}function Zt(r){zl(r).forEach(e=>e.dispose())}function Le(r){return N.keep(r)}function IR(r){return N.time(r)}function SR(r){return N.setBackend(r)}function vR(){return N.ready()}function Hh(){return N.backendName}function NR(r){N.removeBackend(r)}function kR(r){return N.findBackend(r)}function ER(r){return N.findBackendFactory(r)}function Hl(r,t,e=1){return N.registerBackend(r,t,e)}function qh(){return N.backend}function $R(r,t){F().setPlatform(r,t)}var Jn=4;async function k0(r,t){let e=[],o=[],n=Array.isArray(r)?r.map(a=>a.name):Object.keys(r);for(let a=0;a<n.length;++a){let i=n[a],c=Array.isArray(r)?r[a].tensor:r[i];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${c.dtype}`);let l={name:i,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){let p=new Promise(async u=>{let m=await c.bytes(),f=m.reduce((h,x)=>h+x.length,0)+Jn*m.length,d=new Uint8Array(f),g=0;for(let h=0;h<m.length;h++){let x=m[h],b=new Uint8Array(new Uint32Array([x.length]).buffer);d.set(b,g),g+=Jn,d.set(x,g),g+=x.length}u(d)});o.push(p)}else o.push(c.data());t!=null&&(l.group=t),e.push(l)}let s=await Promise.all(o);return{data:DR(s),specs:e}}function Qu(r,t){let e=new ve(r),o={},n=0;for(let s of t){let a=AR(s,(i,c)=>e.slice(n+i,n+c));o[s.name]=E0(s,e.slice(n,n+a)),n+=a}return o}function AR(r,t){let e=bt(r.shape),o;if("quantization"in r){let n=r.quantization;o=$o[n.dtype]}else if(r.dtype==="string"){let n=0;for(let s=0;s<e;s++)n+=Jn+new Uint32Array(t(n,n+Jn))[0];return n}else o=$o[r.dtype];return e*o}async function RR(r,t){let e=bt(r.shape),o;if("quantization"in r){let n=r.quantization;o=$o[n.dtype]}else if(r.dtype==="string"){let n=0;for(let s=0;s<e;s++)n+=Jn+new Uint32Array(await t(n,n+Jn))[0];return n}else o=$o[r.dtype];return e*o}function E0(r,t){let e=r.name,o=r.dtype,n=r.shape,s=bt(n),a,i=0;if("quantization"in r){let c=r.quantization;if(c.dtype==="uint8"||c.dtype==="uint16"){if(!("min"in c&&"scale"in c))throw new Error(`Weight ${r.name} with quantization ${c.dtype} doesn't have corresponding metadata min and scale.`)}else if(c.dtype==="float16"){if(o!=="float32")throw new Error(`Weight ${r.name} is quantized with ${c.dtype} which only supports weights of type float32 not ${o}.`)}else throw new Error(`Weight ${r.name} has unknown quantization dtype ${c.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let l=$o[c.dtype],p=c.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(o==="float32")if(c.dtype==="uint8"||c.dtype==="uint16"){a=new Float32Array(p.length);for(let u=0;u<p.length;u++){let m=p[u];a[u]=m*c.scale+c.min}}else if(c.dtype==="float16")a=PR()(p);else throw new Error(`Unsupported quantization type ${c.dtype} for weight type float32.`);else if(o==="int32"){if(c.dtype!=="uint8"&&c.dtype!=="uint16")throw new Error(`Unsupported quantization type ${c.dtype} for weight type int32.`);a=new Int32Array(p.length);for(let u=0;u<p.length;u++){let m=p[u];a[u]=Math.round(m*c.scale+c.min)}}else throw new Error(`Unsupported dtype in weight '${e}': ${o}`);i+=s*l}else if(o==="string"){let c=bt(r.shape);a=[];for(let l=0;l<c;l++){let p=new Uint32Array(t.slice(i,i+Jn))[0];i+=Jn;let u=new Uint8Array(t.slice(i,i+p));a.push(u),i+=p}}else{let c=$o[o];if(o==="float32")a=new Float32Array(t);else if(o==="int32")a=new Int32Array(t);else if(o==="bool")a=new Uint8Array(t);else if(o==="complex64"){a=new Float32Array(t);let l=new Float32Array(a.length/2),p=new Float32Array(a.length/2);for(let d=0;d<l.length;d++)l[d]=a[d*2],p[d]=a[d*2+1];let u=xe(l,n,"float32"),m=xe(p,n,"float32"),f=Oe(u,m);return u.dispose(),m.dispose(),f}else throw new Error(`Unsupported dtype in weight '${e}': ${o}`);i+=s*c}return xe(a,n,o)}async function v0(r,t,e){let o=new Uint8Array(t);for(;o.byteLength<e;){let{done:n,value:s}=await r.read();if(n&&s==null){let i=e-o.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}let a=new Uint8Array(o.length+s.byteLength);a.set(o,0),a.set(new Uint8Array(s),o.length),o=a}return o.buffer}async function Ju(r,t){let e={},o=r.getReader(),n=new ArrayBuffer(0);for(let s of t){let a=await RR(s,async(l,p)=>(n=await v0(o,n,p),n.slice(l,p)));n=await v0(o,n,a);let i=n.slice(0,a);n=n.slice(a);let c=E0(s,i);if(e[s.name]=c,Hh()==="webgpu"){let l=qh();"uploadToGPU"in l&&bt(c.shape)>=F().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&l.uploadToGPU(c.dataId)}}return e}function DR(r){if(r===null)throw new Error(`Invalid input value: ${JSON.stringify(r)}`);let t=0,e=[];r.forEach(s=>{if(t+=s.byteLength,e.push(s.byteLength===s.buffer.byteLength?s:new s.constructor(s)),!(s instanceof Float32Array||s instanceof Int32Array||s instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${s.constructor.name}`)});let o=new Uint8Array(t),n=0;return e.forEach(s=>{o.set(new Uint8Array(s.buffer),n),n+=s.byteLength}),o.buffer}var Kh=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function N0(r){return Kh?Buffer.byteLength(r,"utf8"):new Blob([r]).size}function $0(r){if(Kh)return Buffer.from(r).toString("base64");let t=new Uint8Array(r),e="";for(let o=0,n=t.length;o<n;o++)e+=String.fromCharCode(t[o]);return btoa(e)}function A0(r){if(Kh){let o=Buffer.from(r,"base64");return o.buffer.slice(o.byteOffset,o.byteOffset+o.byteLength)}let t=atob(r),e=new Uint8Array(t.length);for(let o=0;o<t.length;++o)e.set([t.charCodeAt(o)],o);return e.buffer}function R0(r){return ve.join(r)}function jh(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);let e=r.split("/");return e[e.length-1]}function tm(r,t){let e={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy,weightsManifest:t};return r.signature!=null&&(e.signature=r.signature),r.userDefinedMetadata!=null&&(e.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(e.modelInitializer=r.modelInitializer),r.initializerSignature!=null&&(e.initializerSignature=r.initializerSignature),r.trainingConfig!=null&&(e.trainingConfig=r.trainingConfig),e}function Xh(r,t,e){let o={modelTopology:r.modelTopology,format:r.format,generatedBy:r.generatedBy,convertedBy:r.convertedBy};if(r.trainingConfig!=null&&(o.trainingConfig=r.trainingConfig),r.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!e)throw new Error("modelJSON has weightsManifest but weightData is null");o.weightSpecs=t,o.weightData=e}return r.signature!=null&&(o.signature=r.signature),r.userDefinedMetadata!=null&&(o.userDefinedMetadata=r.userDefinedMetadata),r.modelInitializer!=null&&(o.modelInitializer=r.modelInitializer),r.initializerSignature!=null&&(o.initializerSignature=r.initializerSignature),o}async function Lc(r,t){let e,o;return r.weightsManifest!=null&&([e,o]=await t(r.weightsManifest)),Xh(r,e,o)}function Jr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:N0(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:N0(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:new ve(r.weightData).byteLength}}function ql(r){let t=[];for(let e of r)t.push(...e.weights);return t}function FR(){let r=e=>{let o=e<<13,n=0;for(;(o&8388608)===0;)n-=8388608,o<<=1;return o&=-8388609,n+=947912704,o|n},t=new Uint32Array(2048);t[0]=0;for(let e=1;e<1024;e++)t[e]=r(e);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}function _R(){let r=new Uint32Array(64);r[0]=0,r[31]=1199570944,r[32]=2147483648,r[63]=3347054592;for(let t=1;t<31;t++)r[t]=t<<23;for(let t=33;t<63;t++)r[t]=2147483648+(t-32<<23);return r}function OR(){let r=new Uint32Array(64);for(let t=0;t<64;t++)r[t]=1024;return r[0]=r[32]=0,r}function PR(){let r=FR(),t=_R(),e=OR();return o=>{let n=new ArrayBuffer(4*o.length),s=new Uint32Array(n);for(let a=0;a<o.length;a++){let i=o[a],c=r[e[i>>10]+(i&1023)]+t[i>>10];s[a]=c}return new Float32Array(n)}}var fe=class r{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return r.instance==null&&(r.instance=new r),r.instance}static registerSaveRouter(t){r.getInstance().saveRouters.push(t)}static registerLoadRouter(t){r.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return r.getHandlers(t,"save")}static getLoadHandlers(t,e){return r.getHandlers(t,"load",e)}static getHandlers(t,e,o){let n=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(a=>{let i=a(t,o);i!==null&&n.push(i)}),n}},D0=r=>fe.registerSaveRouter(r),F0=r=>fe.registerLoadRouter(r),_0=r=>fe.getSaveHandlers(r),O0=(r,t)=>fe.getLoadHandlers(r,t);var Yh="tensorflowjs",Zh=1,wi="models_store",ts="model_info_store";function P0(){if(!F().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let r=typeof window>"u"?self:window,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Qh(r){let t=r.result;t.createObjectStore(wi,{keyPath:"modelPath"}),t.createObjectStore(ts,{keyPath:"modelPath"})}var to=class{constructor(t){if(this.indexedDB=P0(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,e){return new Promise((o,n)=>{let s=this.indexedDB.open(Yh,Zh);s.onupgradeneeded=()=>Qh(s),s.onsuccess=()=>{let a=s.result;if(e==null){let i=a.transaction(wi,"readonly"),l=i.objectStore(wi).get(this.modelPath);l.onsuccess=()=>{if(l.result==null)return a.close(),n(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));o(l.result.modelArtifacts)},l.onerror=p=>(a.close(),n(l.error)),i.oncomplete=()=>a.close()}else{e.weightData=ve.join(e.weightData);let i=Jr(e),c=a.transaction(ts,"readwrite"),l=c.objectStore(ts),p;try{p=l.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(m){return n(m)}let u;p.onsuccess=()=>{u=a.transaction(wi,"readwrite");let m=u.objectStore(wi),f;try{f=m.put({modelPath:this.modelPath,modelArtifacts:e,modelArtifactsInfo:i})}catch(d){return n(d)}f.onsuccess=()=>o({modelArtifactsInfo:i}),f.onerror=d=>{l=c.objectStore(ts);let g=l.delete(this.modelPath);g.onsuccess=()=>(a.close(),n(f.error)),g.onerror=h=>(a.close(),n(f.error))}},p.onerror=m=>(a.close(),n(p.error)),c.oncomplete=()=>{u==null?a.close():u.oncomplete=()=>a.close()}}},s.onerror=a=>n(s.error)})}};to.URL_SCHEME="indexeddb://";var L0=r=>F().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(to.URL_SCHEME)?LR(r.slice(to.URL_SCHEME.length)):null;fe.registerSaveRouter(L0);fe.registerLoadRouter(L0);function LR(r){return new to(r)}function BR(r){return r.startsWith(to.URL_SCHEME)?r.slice(to.URL_SCHEME.length):r}var em=class{constructor(){this.indexedDB=P0()}async listModels(){return new Promise((t,e)=>{let o=this.indexedDB.open(Yh,Zh);o.onupgradeneeded=()=>Qh(o),o.onsuccess=()=>{let n=o.result,s=n.transaction(ts,"readonly"),i=s.objectStore(ts).getAll();i.onsuccess=()=>{let c={};for(let l of i.result)c[l.modelPath]=l.modelArtifactsInfo;t(c)},i.onerror=c=>(n.close(),e(i.error)),s.oncomplete=()=>n.close()},o.onerror=n=>e(o.error)})}async removeModel(t){return t=BR(t),new Promise((e,o)=>{let n=this.indexedDB.open(Yh,Zh);n.onupgradeneeded=()=>Qh(n),n.onsuccess=()=>{let s=n.result,a=s.transaction(ts,"readwrite"),i=a.objectStore(ts),c=i.get(t),l;c.onsuccess=()=>{if(c.result==null)return s.close(),o(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{let p=i.delete(t),u=()=>{l=s.transaction(wi,"readwrite");let f=l.objectStore(wi).delete(t);f.onsuccess=()=>e(c.result.modelArtifactsInfo),f.onerror=d=>o(c.error)};p.onsuccess=u,p.onerror=m=>(u(),s.close(),o(c.error))}},c.onerror=p=>(s.close(),o(c.error)),a.oncomplete=()=>{l==null?s.close():l.oncomplete=()=>s.close()}},n.onerror=s=>o(n.error)})}};var Ao="/",Bc="tensorflowjs_models",B0="info",MR="model_topology",VR="weight_specs",GR="weight_data",UR="model_metadata";function M0(r){return{info:[Bc,r,B0].join(Ao),topology:[Bc,r,MR].join(Ao),weightSpecs:[Bc,r,VR].join(Ao),weightData:[Bc,r,GR].join(Ao),modelMetadata:[Bc,r,UR].join(Ao)}}function V0(r){for(let t of Object.values(r))window.localStorage.removeItem(t)}function zR(r){let t=r.split(Ao);if(t.length<3)throw new Error(`Invalid key format: ${r}`);return t.slice(1,t.length-1).join(Ao)}function WR(r){return r.startsWith(eo.URL_SCHEME)?r.slice(eo.URL_SCHEME.length):r}var eo=class{constructor(t){if(!F().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=M0(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let e=JSON.stringify(t.modelTopology),o=JSON.stringify(t.weightSpecs),n=Jr(t),s=ve.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(n)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,o),this.LS.setItem(this.keys.weightData,$0(s));let a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:n}}catch{throw V0(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${n.modelTopologyBytes}, weightSpecsBytes=${n.weightSpecsBytes}, weightDataBytes=${n.weightDataBytes}.`)}}}async load(){let t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let e={},o=JSON.parse(this.LS.getItem(this.keys.topology));if(o==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);e.modelTopology=o;let n=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(n==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);e.weightSpecs=n;let s=this.LS.getItem(this.keys.modelMetadata);if(s!=null){let i=JSON.parse(s);e.format=i.format,e.generatedBy=i.generatedBy,e.convertedBy=i.convertedBy,i.signature!=null&&(e.signature=i.signature),i.userDefinedMetadata!=null&&(e.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(e.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(e.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(e.trainingConfig=i.trainingConfig)}let a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return e.weightData=A0(a),e}};eo.URL_SCHEME="localstorage://";var G0=r=>F().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(eo.URL_SCHEME)?HR(r.slice(eo.URL_SCHEME.length)):null;fe.registerSaveRouter(G0);fe.registerLoadRouter(G0);function HR(r){return new eo(r)}var rm=class{constructor(){k(F().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),k(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let t={},e=Bc+Ao,o=Ao+B0;for(let n=0;n<this.LS.length;++n){let s=this.LS.key(n);if(s.startsWith(e)&&s.endsWith(o)){let a=zR(s);t[a]=JSON.parse(this.LS.getItem(s))}}return t}async removeModel(t){t=WR(t);let e=M0(t);if(this.LS.getItem(e.info)==null)throw new Error(`Cannot find model at path '${t}'`);let o=JSON.parse(this.LS.getItem(e.info));return V0(e),o}};var Mc="://",Fr=class r{constructor(){this.managers={}}static getInstance(){return r.instance==null&&(r.instance=new r),r.instance}static registerManager(t,e){k(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(Mc)&&(t=t.slice(0,t.indexOf(Mc))),k(t.length>0,()=>"scheme must not be an empty string.");let o=r.getInstance();k(o.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),o.managers[t]=e}static getManager(t){let e=r.getInstance().managers[t];if(e==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return e}static getSchemes(){return Object.keys(r.getInstance().managers)}};function om(r){if(r.indexOf(Mc)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${Fr.getSchemes().join(",")}`);return{scheme:r.split(Mc)[0],path:r.split(Mc)[1]}}async function U0(r,t,e=!1){k(r!==t,()=>`Old path and new path are the same: '${r}'`);let o=fe.getLoadHandlers(r);k(o.length>0,()=>`Copying failed because no load handler is found for source URL ${r}.`),k(o.length<2,()=>`Copying failed because more than one (${o.length}) load handlers for source URL ${r}.`);let n=o[0],s=fe.getSaveHandlers(t);k(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),k(s.length<2,()=>`Copying failed because more than one (${o.length}) save handlers for destination URL ${t}.`);let a=s[0],i=om(r).scheme,c=om(r).path,l=i===om(r).scheme,p=await n.load();e&&l&&await Fr.getManager(i).removeModel(c);let u=await a.save(p);return e&&!l&&await Fr.getManager(i).removeModel(c),u.modelArtifactsInfo}async function z0(){let r=Fr.getSchemes(),t={};for(let e of r){let o=await Fr.getManager(e).listModels();for(let n in o){let s=e+Mc+n;t[s]=o[n]}}return t}async function W0(r){let t=om(r);return Fr.getManager(t.scheme).removeModel(t.path)}async function H0(r,t){return U0(r,t,!1)}async function q0(r,t){return U0(r,t,!0)}var Jh=class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,e){return fetch(t,e)}now(){return performance.now()}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${e}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,e){return new TextDecoder(e).decode(t)}setTimeoutCustom(t,e){if(typeof window>"u"||!F().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,e);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},e),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",o=>{if(o.source===window&&o.data.name===this.messageName){o.stopPropagation();let n=this.functionRefs[o.data.index];n(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return Uu(t)}};if(F().get("IS_BROWSER")){F().setPlatform("browser",new Jh);try{Fr.registerManager(eo.URL_SCHEME,new rm)}catch{}try{Fr.registerManager(to.URL_SCHEME,new em)}catch{}}var qR={importFetch:()=>K0()},tg;var eg=class{constructor(){this.util=j0(),this.textEncoder=new this.util.TextEncoder}fetch(t,e){return F().global.fetch!=null?F().global.fetch(t,e):(tg==null&&(tg=qR.importFetch()),tg(t,e))}now(){let t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${e}`);return this.textEncoder.encode(t)}decode(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}};F().get("IS_NODE")&&!F().get("IS_BROWSER")&&F().setPlatform("node",new eg);function ot(r,t="float32",e){return t=t||"float32",zt(r),new $t(r,t,e)}function KR(r,t){let e=C(r,"x","cast");if(!Sh(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");let o={x:e},n={dtype:t};return N.runKernel(Io,o,n)}var mt=S({cast_:KR});function jR(r){let e={x:C(r,"x","clone","string_or_numeric")};return N.runKernel(So,e)}var We=S({clone_:jR});function Kl(r,t=!1){console.log(r.toString(t))}Uh();var XR={buffer:ot,cast:mt,clone:We,print:Kl};b0(XR);function YR(r,t){let e=C(r,"a","add"),o=C(t,"b","add");[e,o]=xt(e,o);let n={a:e,b:o};return N.runKernel("Add",n)}var nt=S({add_:YR});function ZR(r,t){let e=C(r,"a","floorDiv"),o=C(t,"b","floorDiv");[e,o]=xt(e,o);let n={a:e,b:o};return N.runKernel(gn,n)}var Ci=S({floorDiv_:ZR});function QR(r,t){let e=C(r,"a","div"),o=C(t,"b","div");if([e,o]=xt(e,o),e.dtype==="int32"&&o.dtype==="int32")return Ci(e,o);let n={a:e,b:o},s={};return N.runKernel(mn,n,s)}var Tt=S({div_:QR});function JR(r,t){let e=C(r,"a","mul"),o=C(t,"b","mul");[e,o]=xt(e,o);let n={a:e,b:o};return N.runKernel(An,n)}var j=S({mul_:JR});function tD(r){let t=C(r,"x","abs");if(t.dtype==="complex64"){let e={x:t};return N.runKernel(Ps,e)}else{let e={x:t};return N.runKernel("Abs",e)}}var ie=S({abs_:tD});function eD(r){let e={x:C(r,"x","acos")};return N.runKernel(tn,e)}var jl=S({acos_:eD});function rD(r){let e={x:C(r,"x","acosh")};return N.runKernel(en,e)}var Xl=S({acosh_:rD});function oD(r){k(Array.isArray(r),()=>"The argument passed to tf.addN() must be a list of tensors"),k(r.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${r.length}`);let t=r.map((n,s)=>C(n,`tensors${s}`,"addN")),e=t[0];t.forEach(n=>{if(n.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(n=>{if(!Fe(n.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});let o=t;return N.runKernel(Ns,o)}var rg=S({addN_:oD});function nD(r,t=null,e=!1){let n={x:C(r,"x","all","bool")},s={axis:t,keepDims:e};return N.runKernel("All",n,s)}var Yl=S({all_:nD});function sD(r,t=null,e=!1){let n={x:C(r,"x","any","bool")},s={axis:t,keepDims:e};return N.runKernel("Any",n,s)}var Zl=S({any_:sD});function aD(r,t=0){let o={x:C(r,"x","argMax")},n={axis:t};return N.runKernel(ks,o,n)}var Ql=S({argMax_:aD});function iD(r,t=0){let o={x:C(r,"x","argMin")},n={axis:t};return N.runKernel(Es,o,n)}var Jl=S({argMin_:iD});function cD(r){let e={x:C(r,"x","asin")};return N.runKernel(rn,e)}var tp=S({asin_:cD});function lD(r){let e={x:C(r,"x","asinh")};return N.runKernel(on,e)}var ep=S({asinh_:lD});function pD(r){let e={x:C(r,"x","atan")};return N.runKernel(nn,e)}var rp=S({atan_:pD});function uD(r,t){let e=C(r,"a","atan2"),o=C(t,"b","atan2");[e,o]=xt(e,o);let n={a:e,b:o};return N.runKernel(an,n)}var op=S({atan2_:uD});function mD(r){let e={x:C(r,"x","atanh")};return N.runKernel(sn,e)}var np=S({atanh_:mD});function fD(r,t,e,o,n="NHWC",s){let a=r[3],i=[...t,a],c=Y0(n);return Ii(r,i,e,s,o,null,null,c)}function ng(r,t,e,o,n,s,a="channelsLast"){let[i,c]=sp(t),l;if(a==="channelsLast")l=[i,c,r[3],r[3]];else if(a==="channelsFirst")l=[i,c,r[1],r[1]];else throw new Error(`Unknown dataFormat ${a}`);return Ii(r,l,e,o,n,s,!1,a)}function dD(r,t,e,o,n,s,a="NDHWC"){let[i,c,l]=og(t),p,u;if(a==="NDHWC")u="channelsLast",p=[i,c,l,r[4],r[4]];else if(a==="NCDHW")u="channelsFirst",p=[i,c,l,r[1],r[1]];else throw new Error(`Unknown dataFormat ${a}`);return X0(r,p,e,o,n,!1,u,s)}function Ii(r,t,e,o,n,s,a=!1,i="channelsLast"){let[c,l,p,u]=[-1,-1,-1,-1];if(i==="channelsLast")[c,l,p,u]=r;else if(i==="channelsFirst")[c,u,l,p]=r;else throw new Error(`Unknown dataFormat ${i}`);let[m,f,,d]=t,[g,h]=sp(e),[x,b]=sp(o),I=Vc(m,x),T=Vc(f,b),{padInfo:E,outHeight:$,outWidth:A}=xD(n,l,p,g,h,I,T,s,i),D=a?d*u:d,_;return i==="channelsFirst"?_=[c,D,$,A]:i==="channelsLast"&&(_=[c,$,A,D]),{batchSize:c,dataFormat:i,inHeight:l,inWidth:p,inChannels:u,outHeight:$,outWidth:A,outChannels:D,padInfo:E,strideHeight:g,strideWidth:h,filterHeight:m,filterWidth:f,effectiveFilterHeight:I,effectiveFilterWidth:T,dilationHeight:x,dilationWidth:b,inShape:r,outShape:_,filterShape:t}}function X0(r,t,e,o,n,s=!1,a="channelsLast",i){let[c,l,p,u,m]=[-1,-1,-1,-1,-1];if(a==="channelsLast")[c,l,p,u,m]=r;else if(a==="channelsFirst")[c,m,l,p,u]=r;else throw new Error(`Unknown dataFormat ${a}`);let[f,d,g,,h]=t,[x,b,I]=og(e),[T,E,$]=og(o),A=Vc(f,T),D=Vc(d,E),_=Vc(g,$),{padInfo:O,outDepth:L,outHeight:B,outWidth:M}=yD(n,l,p,u,x,b,I,A,D,_,i),G=s?h*m:h,V;return a==="channelsFirst"?V=[c,G,L,B,M]:a==="channelsLast"&&(V=[c,L,B,M,G]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:p,inWidth:u,inChannels:m,outDepth:L,outHeight:B,outWidth:M,outChannels:G,padInfo:O,strideDepth:x,strideHeight:b,strideWidth:I,filterDepth:f,filterHeight:d,filterWidth:g,effectiveFilterDepth:A,effectiveFilterHeight:D,effectiveFilterWidth:_,dilationDepth:T,dilationHeight:E,dilationWidth:$,inShape:r,outShape:V,filterShape:t}}function hD(r,t,e,o,n){o==null&&(o=sg(r,t,e));let s=r[0],a=r[1],i=ap((s-t+2*o)/e+1,n),c=ap((a-t+2*o)/e+1,n);return[i,c]}function gD(r,t,e,o,n,s){n==null&&(n=sg(r,t[0],o[0]));let a=[0,0,0,e];for(let i=0;i<3;i++)r[i]+2*n>=t[i]&&(a[i]=ap((r[i]-t[i]+2*n)/o[i]+1,s));return a}function sg(r,t,e,o=1){let n=Vc(t,o);return Math.floor((r[0]*(e-1)-e+n)/2)}function sp(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function og(r){return typeof r=="number"?[r,r,r]:r}function Vc(r,t){return t<=1?r:r+(r-1)*(t-1)}function xD(r,t,e,o,n,s,a,i,c){let l,p,u;if(typeof r=="number"){l={top:r,bottom:r,left:r,right:r,type:r===0?"VALID":"NUMBER"};let f=hD([t,e],s,o,r,i);p=f[0],u=f[1]}else if(r==="same"){p=Math.ceil(t/o),u=Math.ceil(e/n);let m=Math.max(0,(p-1)*o+s-t),f=Math.max(0,(u-1)*n+a-e),d=Math.floor(m/2),g=m-d,h=Math.floor(f/2),x=f-h;l={top:d,bottom:g,left:h,right:x,type:"SAME"}}else if(r==="valid")l={top:0,bottom:0,left:0,right:0,type:"VALID"},p=Math.ceil((t-s+1)/o),u=Math.ceil((e-a+1)/n);else if(typeof r=="object"){let m=c==="channelsLast"?r[1][0]:r[2][0],f=c==="channelsLast"?r[1][1]:r[2][1],d=c==="channelsLast"?r[2][0]:r[3][0],g=c==="channelsLast"?r[2][1]:r[3][1];l={top:m,bottom:f,left:d,right:g,type:m===0&&f===0&&d===0&&g===0?"VALID":"EXPLICIT"},p=ap((t-s+m+f)/o+1,i),u=ap((e-a+d+g)/n+1,i)}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:l,outHeight:p,outWidth:u}}function yD(r,t,e,o,n,s,a,i,c,l,p){let u,m,f,d;if(r==="valid"&&(r=0),typeof r=="number"){u={top:r,bottom:r,left:r,right:r,front:r,back:r,type:r===0?"VALID":"NUMBER"};let h=gD([t,e,o,1],[i,c,l],1,[n,s,a],r,p);m=h[0],f=h[1],d=h[2]}else if(r==="same"){m=Math.ceil(t/n),f=Math.ceil(e/s),d=Math.ceil(o/a);let g=(m-1)*n+i-t,h=(f-1)*s+c-e,x=(d-1)*a+l-o,b=Math.floor(g/2),I=g-b,T=Math.floor(h/2),E=h-T,$=Math.floor(x/2),A=x-$;u={top:T,bottom:E,left:$,right:A,front:b,back:I,type:"SAME"}}else throw Error(`Unknown padding parameter: ${r}`);return{padInfo:u,outDepth:m,outHeight:f,outWidth:d}}function ap(r,t){if(!t)return Math.trunc(r);switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error(`Unknown roundingMode ${t}`)}}function Ti(r){let[t,e,o]=sp(r);return t===1&&e===1&&o===1}function Ae(r,t){return Ti(r)||Ti(t)}function ro(r){return sp(r).every(t=>t>0)}function Y0(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${r}`)}function se(r,t,e){if(e!=null){if(typeof t=="string")throw Error(`Error in ${r}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);if(typeof t=="number")k(Co(t),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${e} but got pad ${t}.`);else if(typeof t=="object")t.forEach(o=>{o.forEach(n=>{k(Co(n),()=>`Error in ${r}: pad must be an integer when using dimRoundingMode ${e} but got pad ${n}.`)})});else throw Error(`Error in ${r}: Unknown padding parameter: ${t}`)}}function bD(r,t){let o={x:C(r,"x","reshape","string_or_numeric")},n={shape:t};return N.runKernel(La,o,n)}var P=S({reshape_:bD});function wD(r,t,e,o,n){let s=C(r,"x","avgPool","float32"),a=1;k(Ae(e,a),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`);let i=s,c=!1;s.rank===3&&(c=!0,i=P(s,[1,s.shape[0],s.shape[1],s.shape[2]])),k(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),se("avgPool",o,n);let l={x:i},p={filterSize:t,strides:e,pad:o,dimRoundingMode:n},u=N.runKernel($s,l,p);return u=mt(u,s.dtype),c?P(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Si=S({avgPool_:wD});function CD(r,t,e,o,n,s="NDHWC"){let a=C(r,"x","avgPool3d","float32"),i=a,c=!1;a.rank===4&&(c=!0,i=P(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),k(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),k(s==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),k(typeof e=="number"&&e>0||Array.isArray(e)&&e[0]>0&&e[1]>0&&e[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${e}'`),se("avgPool3d",o,n);let l={x:i},p={filterSize:t,strides:e,pad:o,dimRoundingMode:n,dataFormat:s},u=N.runKernel(As,l,p);return u=mt(u,i.dtype),c?P(u,[u.shape[1],u.shape[2],u.shape[3],u.shape[4]]):u}var ag=S({avgPool3d_:CD});function TD(r,t=0){k(r.length>=1,()=>"Pass at least one tensor to concat");let e=Eo(r,"tensors","concat","string_or_numeric");if(e[0].dtype==="complex64"&&e.forEach(s=>{if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${s.dtype}. `)}),e.length===1)return We(e[0]);let o=e,n={axis:t};return N.runKernel(Ls,o,n)}var Ot=S({concat_:TD});function ID(r,t,e=!1,o=!1){let n=C(r,"a","matMul"),s=C(t,"b","matMul");[n,s]=xt(n,s);let a={a:n,b:s},i={transposeA:e,transposeB:o};return N.runKernel(Rs,a,i)}var vt=S({matMul_:ID});function SD(r){let e={x:C(r,"x","sigmoid","float32")};return N.runKernel(Vn,e)}var pr=S({sigmoid_:SD});function vD(r,t,e){let o=C(r,"x","slice","string_or_numeric");if(o.rank===0)throw new Error("Slicing scalar is not possible");let n={x:o},s={begin:t,size:e};return N.runKernel(Ha,n,s)}var yt=S({slice_:vD});function ND(r){let e={x:C(r,"x","tanh","float32")};return N.runKernel(Hn,e)}var es=S({tanh_:ND});function kD(r,t,e,o,n,s){let a=C(r,"forgetBias","basicLSTMCell"),i=C(t,"lstmKernel","basicLSTMCell"),c=C(e,"lstmBias","basicLSTMCell"),l=C(o,"data","basicLSTMCell"),p=C(n,"c","basicLSTMCell"),u=C(s,"h","basicLSTMCell"),m=Ot([l,u],1),f=vt(m,i),d=nt(f,c),g=d.shape[0],h=d.shape[1]/4,x=[g,h],b=yt(d,[0,0],x),I=yt(d,[0,h],x),T=yt(d,[0,h*2],x),E=yt(d,[0,h*3],x),$=nt(j(pr(b),es(I)),j(p,pr(nt(a,T)))),A=j(es($),pr(E));return[$,A]}var ig=S({basicLSTMCell_:kD});function ED(r,t,e){let o=C(r,"x","batchToSpaceND"),n=t.reduce((i,c)=>i*c);k(o.rank>=1+t.length,()=>`input rank is ${o.rank} but should be > than blockShape.length ${t.length}`),k(e.length===t.length,()=>`crops.length is ${e.length} but should be equal to blockShape.length  ${t.length}`),k(o.shape[0]%n===0,()=>`input tensor batch is ${o.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${n}`);let s={x:o},a={blockShape:t,crops:e};return N.runKernel(Ds,s,a)}var vi=S({batchToSpaceND_:ED});function Z0(r){let t;return r.rank===0||r.rank===1?t=P(r,[1,1,1,r.size]):r.rank===2?t=P(r,[1,1,r.shape[0],r.shape[1]]):r.rank===3?t=P(r,[1,r.shape[0],r.shape[1],r.shape[2]]):t=r,t}function $D(r,t,e,o,n,s){s==null&&(s=.001);let a=C(r,"x","batchNorm"),i=C(t,"mean","batchNorm"),c=C(e,"variance","batchNorm"),l;n!=null&&(l=C(n,"scale","batchNorm"));let p;o!=null&&(p=C(o,"offset","batchNorm")),k(i.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),k(p==null||i.rank===p.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),k(l==null||i.rank===l.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let m={x:Z0(a),scale:l,offset:p,mean:i,variance:c},f={varianceEpsilon:s},d=N.runKernel(ia,m,f);return P(d,a.shape)}var _r=S({batchNorm_:$D});function AD(r,t,e,o,n,s){let a=C(r,"x","batchNorm"),i=C(t,"mean","batchNorm"),c=C(e,"variance","batchNorm"),l;n!=null&&(l=C(n,"scale","batchNorm"));let p;return o!=null&&(p=C(o,"offset","batchNorm")),k(a.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${a.rank}.`),k(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),k(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&k(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),p!=null&&k(p.rank===2||p.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${p.rank}.`),_r(a,i,c,p,l,s)}var cg=S({batchNorm2d_:AD});function RD(r,t,e,o,n,s){let a=C(r,"x","batchNorm"),i=C(t,"mean","batchNorm"),c=C(e,"variance","batchNorm"),l;n!=null&&(l=C(n,"scale","batchNorm"));let p;return o!=null&&(p=C(o,"offset","batchNorm")),k(a.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${a.rank}.`),k(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),k(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&k(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),p!=null&&k(p.rank===3||p.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${p.rank}.`),_r(a,i,c,p,l,s)}var lg=S({batchNorm3d_:RD});function DD(r,t,e,o,n,s){let a=C(r,"x","batchNorm"),i=C(t,"mean","batchNorm"),c=C(e,"variance","batchNorm"),l;n!=null&&(l=C(n,"scale","batchNorm"));let p;return o!=null&&(p=C(o,"offset","batchNorm")),k(a.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${a.rank}.`),k(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),k(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&k(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),p!=null&&k(p.rank===4||p.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${p.rank}.`),_r(a,i,c,p,l,s)}var pg=S({batchNorm4d_:DD});function FD(r,t,e){let o=C(r,"x","bincount"),n=C(t,"weights","bincount");k(o.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${o.dtype}`),k(e>=0,()=>`size must be non-negative, but got ${e}.`),k(n.size===o.size||n.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${o.shape}, weights shape: ${n.shape}.`);let s={x:o,weights:n},a={size:e};return N.runKernel(Fs,s,a)}var ip=S({bincount_:FD});function _D(r,t){let e=C(r,"x","bitwiseAnd"),o=C(t,"y","bitwiseAnd");if(!Fe(e.shape,o.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${e.shape}, y: ${o.shape}`);if(e.dtype!=="int32"||o.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${e.dtype} and type of y: ${o.dtype}`);let n={a:e,b:o};return N.runKernel(cn,n)}var ug=S({bitwiseAnd_:_D});function OD(r,t){let e=C(r,"s0","broadcastArgs","int32"),o=C(t,"s1","broadcastArgs","int32");if(e.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${e.rank}`);if(o.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${o.rank}`);let n={s0:e,s1:o};return N.runKernel(_s,n)}var mg=S({broadcastArgs_:OD});function PD(r,t){let e=C(r,"broadcastTo","x"),o=e.shape;if(zt(t),t.length<e.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${e.rank}.`);if(t.length>e.rank){let l=e.shape.slice();for(;l.length<t.length;)l.unshift(1);e=P(e,l)}let n=e.shape,s=Array.from(t);for(let l=t.length-1;l>=0;l--)if(n[l]===t[l])s[l]=1;else if(e.shape[l]!==1)throw new Error(`broadcastTo(): [${o}] cannot be broadcast to [${t}].`);if(s.map((l,p)=>l>1?p:-1).filter(l=>l>=0).length===0)return We(e);let i={x:e},c={reps:s};return N.runKernel(vo,i,c)}var Or=S({broadcastTo_:PD});function LD(r){let e={x:C(r,"x","ceil","float32")};return N.runKernel(ln,e)}var cp=S({ceil_:LD});function Pr(r,t,e){zt(r),e=e||Jo(t);let o={shape:r,value:t,dtype:e};return N.runKernel(sa,{},o)}function BD(r,t,e){let o=C(r,"x","clipByValue");if(k(t<=e,()=>`Error in clip: min (${t}) must be less than or equal to max (${e}).`),t===e)return Pr(o.shape,t,o.dtype);let n={x:o},s={clipValueMin:t,clipValueMax:e};return N.runKernel(pn,n,s)}var lp=S({clipByValue_:BD});function MD(r){return Ot(r,0)}var pp=S({concat1d_:MD});function VD(r,t){return Ot(r,t)}var fg=S({concat2d_:VD});function GD(r,t){return Ot(r,t)}var dg=S({concat3d_:GD});function UD(r,t){return Ot(r,t)}var hg=S({concat4d_:UD});function zD(r,t,e,o,n="NHWC",s=[1,1],a){let i=C(r,"x","conv2d","float32"),c=C(t,"filter","conv2d","float32"),l=i,p=!1;i.rank===3&&(p=!0,l=P(i,[1,i.shape[0],i.shape[1],i.shape[2]])),k(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),k(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),se("conv2d",o,a);let u=n==="NHWC"?l.shape[3]:l.shape[1];k(u===c.shape[2],()=>`Error in conv2d: depth of input (${u}) must match input depth for filter ${c.shape[2]}.`),k(Ae(e,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${s}'`),k(ro(s),()=>"Error in conv2D: Dilated rates should be larger than 0."),k(ro(e),()=>"Error in conv2D: Strides should be larger than 0.");let m={x:l,filter:c},f={strides:e,pad:o,dataFormat:n,dilations:s,dimRoundingMode:a},d=N.runKernel(Bs,m,f);return p?P(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var Lr=S({conv2d_:zD});function WD(r,t,e,o,n="NWC",s=1,a){let i=C(r,"x","conv1d"),c=C(t,"filter","conv1d"),l=i,p=!1;i.rank===2&&(p=!0,l=P(i,[1,i.shape[0],i.shape[1]])),k(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),k(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),se("conv1d",o,a),k(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),k(Ae(e,s),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${e} and dilation '${s}'`),k(ro(s),()=>"Error in conv1D: Dilated rates should be larger than 0."),k(ro(e),()=>"Error in conv1D: Stride should be larger than 0."),k(n==="NWC",()=>`Error in conv1d: got dataFormat of ${n} but only NWC is currently supported.`);let u=P(c,[1,c.shape[0],c.shape[1],c.shape[2]]),m=P(l,[l.shape[0],1,l.shape[1],l.shape[2]]),h=Lr(m,u,[1,e],o,"NHWC",[1,s],a);return p?P(h,[h.shape[2],h.shape[3]]):P(h,[h.shape[0],h.shape[2],h.shape[3]])}var up=S({conv1d_:WD});function HD(r,t,e,o,n,s="NHWC",a){k(r.length===t.rank,()=>`Length of inShape (${r.length}) and rank of dy (${t.rank}) must match`);let i=r,c=t,l=!1;t.rank===3&&(l=!0,c=P(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,r[0],r[1],r[2]]),k(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),k(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),k(e.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${e.rank}`);let p=s==="NHWC"?i[3]:i[1],u=s==="NHWC"?c.shape[3]:c.shape[1];k(p===e.shape[2],()=>`Error in conv2dDerInput: depth of input (${p}) must match input depth for filter ${e.shape[2]}.`),k(u===e.shape[3],()=>`Error in conv2dDerInput: depth of output (${u}) must match output depth for filter ${e.shape[3]}.`),se("conv2dDerInput",n,a);let m={dy:c,filter:e},f={strides:o,pad:n,dataFormat:s,dimRoundingMode:a,inputShape:i},d=N.runKernel(Vs,m,f);return l?P(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var nm=S({conv2DBackpropInput_:HD});function qD(r,t,e,o,n,s){let a=C(r,"x","conv2dTranspose"),i=C(t,"filter","conv2dTranspose");return nm(e,a,i,o,n,"NHWC",s)}var mp=S({conv2dTranspose_:qD});function KD(r,t,e,o,n="NDHWC",s=[1,1,1]){let a=C(r,"x","conv3d"),i=C(t,"filter","conv3d"),c=a,l=!1;a.rank===4&&(l=!0,c=P(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),k(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),k(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),k(c.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${i.shape[3]}.`),k(Ae(e,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${e} and dilations '${s}'`),k(n==="NDHWC",()=>`Error in conv3d: got dataFormat of ${n} but only NDHWC is currently supported.`),k(ro(s),()=>"Error in conv3D: Dilated rates should be larger than 0."),k(ro(e),()=>"Error in conv3D: Strides should be larger than 0.");let p={x:c,filter:i},u={strides:e,pad:o,dataFormat:n,dilations:s},m=N.runKernel(Gs,p,u);return l?P(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var gg=S({conv3d_:KD});function jD(r,t,e,o,n){k(r.length===t.rank,()=>`Length of inShape (${r.length}) and rank of dy (${t.rank}) must match`);let s=r,a=t,i=!1;t.rank===4&&(i=!0,a=P(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),s=[1,r[0],r[1],r[2],r[3]]);let c=s[4],l=a.shape[4];k(s.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`),k(a.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${a.rank}`),k(e.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${e.rank}`),k(c===e.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${e.shape[3]}.`),k(l===e.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${e.shape[4]}.`);let p={dy:a,filter:e},u={pad:n,strides:o,inputShape:s},m=N.runKernel(Us,p,u);return i?P(m,[m.shape[1],m.shape[2],m.shape[3],m.shape[4]]):m}var Q0=S({conv3DBackpropInput_:jD});function XD(r,t,e,o,n){let s=C(r,"x","conv3dTranspose"),a=C(t,"filter","conv3dTranspose");return Q0(e,s,a,o,n)}var xg=S({conv3dTranspose_:XD});function YD(r){let e={x:C(r,"x","cos","float32")};return N.runKernel("Cos",e)}var fp=S({cos_:YD});function ZD(r){let e={x:C(r,"x","cosh","float32")};return N.runKernel(un,e)}var dp=S({cosh_:ZD});function QD(r,t=0,e=!1,o=!1){let s={x:C(r,"x","cumprod")},a={axis:t,exclusive:e,reverse:o};return N.runKernel(Ws,s,a)}var hp=S({cumprod_:QD});function JD(r,t=0,e=!1,o=!1){let s={x:C(r,"x","cumsum")},a={axis:t,exclusive:e,reverse:o};return N.runKernel(Hs,s,a)}var gp=S({cumsum_:JD});function tF(r,t,e,o=!1){let n=C(r,"x","denseBincount"),s=C(t,"weights","denseBincount");k(n.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${n.dtype}`),k(n.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${n.rank}.`),k(e>=0,()=>`size must be non-negative, but got ${e}.`),k(s.size===n.size||s.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${n.shape}, weights shape: ${s.shape}.`);let a={x:n,weights:s},i={size:e,binaryOutput:o};return N.runKernel(Ks,a,i)}var yg=S({denseBincount_:tF});function eF(r,t,e="NHWC"){let o=C(r,"x","depthToSpace","float32"),n=e==="NHWC"?o.shape[1]:o.shape[2],s=e==="NHWC"?o.shape[2]:o.shape[3],a=e==="NHWC"?o.shape[3]:o.shape[1];k(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),k(n*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${n} and ${t}  for depthToSpace with input shape
    ${o.shape}`),k(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t} for depthToSpace with input shape
        ${o.shape}`),k(a%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${a} for depthToSpace with input shape ${o.shape}`);let i={x:o},c={blockSize:t,dataFormat:e};return N.runKernel(js,i,c)}var xp=S({depthToSpace_:eF});function rF(r,t,e,o,n="NHWC",s=[1,1],a){let i=C(r,"x","depthwiseConv2d","float32"),c=C(t,"filter","depthwiseConv2d","float32"),l=i,p=!1;i.rank===3&&(p=!0,l=P(i,[1,i.shape[0],i.shape[1],i.shape[2]])),k(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),k(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);let u=n==="NHWC"?l.shape[3]:l.shape[1];k(u===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${u}) must match the inChannels dimension in filter ${c.shape[2]}.`),se("depthwiseConv2d",o,a);let m={x:l,filter:c},f={strides:e,pad:o,dataFormat:n,dilations:s,dimRoundingMode:a},d=N.runKernel(Xs,m,f);return p?P(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var Ro=S({depthwiseConv2d_:rF});function oF(r){let e={x:C(r,"x","diag")};return N.runKernel(Qs,e)}var bg=S({diag_:oF});function nF(r,t,e,o,n=[1,1],s="NHWC"){let a=C(r,"x","dilation2d"),i=C(t,"filter","dilation2d");k(a.rank===3||a.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${a.rank}.`),k(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),k(s==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`);let c=a,l=!1;a.rank===3&&(c=P(a,[1,a.shape[0],a.shape[1],a.shape[2]]),l=!0),k(c.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${i.shape[2]}`);let p={x:c,filter:i},u={strides:e,pad:o,dilations:n},m=N.runKernel(Js,p,u);return l?P(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var yp=S({dilation2d_:nF});var Br={};Et(Br,{assertAndGetBroadcastShape:()=>Dt,getBroadcastDims:()=>J0,getReductionAxes:()=>sm});function J0(r,t){let e=r.length,o=[];for(let n=0;n<e;n++){let s=e-1-n,a=r[s]||1;(t[t.length-1-n]||1)>1&&a===1&&o.unshift(s)}return o}function sm(r,t){let e=[];for(let o=0;o<t.length;o++){let n=r[r.length-o-1],s=t.length-o-1,a=t[s];(n==null||n===1&&a>1)&&e.unshift(s)}return e}function Dt(r,t){let e=Math.max(r.length,t.length),o=new Array(e);for(let n=0;n<e;n++){let s=r[r.length-n-1];s==null&&(s=1);let a=t[t.length-n-1];if(a==null&&(a=1),s===1)o[e-n-1]=a;else if(a===1)o[e-n-1]=s;else if(s!==a){let i=`Operands could not be broadcast together with shapes ${r} and ${t}.`;throw Error(i)}else o[e-n-1]=s}return o}function sF(r,t){let e=C(r,"a","equal","string_or_numeric"),o=C(t,"b","equal","string_or_numeric");[e,o]=xt(e,o),Dt(e.shape,o.shape);let n={a:e,b:o};return N.runKernel(fn,n)}var Ni=S({equal_:sF});function aF(r,t,e){let o=C(t,"a","where"),n=C(e,"b","where"),s=C(r,"condition","where","bool"),a=Dt(Dt(s.shape,o.shape),n.shape),i=Or(s,a),c=Or(o,a),l=Or(n,a),p={condition:i,t:c,e:l};return N.runKernel(Wa,p)}var Be=S({where_:aF});function iF(r){let e={x:C(r,"x","zerosLike")};return N.runKernel(mi,e)}var oe=S({zerosLike_:iF});function cF(r,t){let e=C(r,"a","div"),o=C(t,"b","div");[e,o]=xt(e,o);let n=Tt(e,o),s=oe(n),a=Ni(o,s);return Be(a,s,n)}var bp=S({divNoNan_:cF});function lF(r,t){let e=C(r,"t1","dot"),o=C(t,"t2","dot");k((e.rank===1||e.rank===2)&&(o.rank===1||o.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${e.rank} and ${o.rank}.`);let n=e.rank===1?e.size:e.shape[1],s=o.rank===1?o.size:o.shape[0];if(k(n===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${n} and ${s}.`),e.rank===1&&o.rank===1){let a=P(e,[1,-1]),i=P(o,[-1,1]),c=vt(a,i);return P(c,[])}else if(e.rank===1&&o.rank===2){let a=P(e,[1,-1]),i=P(o,[o.shape[0],o.shape[1]]),c=vt(a,i);return P(c,[c.size])}else if(e.rank===2&&o.rank===1){let a=P(o,[-1,1]),i=vt(e,a);return P(i,[i.size])}else{let a=P(o,[o.shape[0],o.shape[1]]);return vt(e,a)}}var wp=S({dot_:lF});function pF(r,...t){let e=t.map((n,s)=>C(n,`tensors${s}`,"einsum")),o={equation:r};return N.runKernel(ta,e,o)}var Do=S({einsum_:pF});function uF(r){let e={x:C(r,"x","elu","float32")};return N.runKernel("Elu",e)}var ki=S({elu_:uF});function mF(r,t){let e=C(r,"x","ensureShape","string_or_numeric");if(!wh(e.shape,t))throw new Error(`EnsureShape: Shape of tensor ${e.shape} is not compatible with expected shape ${t}`);return r}var wg=S({ensureShape_:mF});function fF(r){let t=C(r,"x","erf");k(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=mt(t,"float32"));let e={x:t};return N.runKernel("Erf",e)}var Cp=S({erf_:fF});function Cg(r,t){for(let e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function tw(r,t,e){let o=r.length+t.length,n=[],s=0,a=0;for(let i=0;i<o;i++)e.indexOf(i)===-1?n.push(r[s++]):n.push(t[a++]);return n}function dF(r,t){let e=[],o=r.length;for(let s=0;s<o;s++)t.indexOf(s)===-1&&e.push(r[s]);let n=t.map(s=>r[s]);return[e,n]}function Fo(r,t){let e=t.map(o=>1);return tw(r,e,t)}function hF(r,t,e){k(Cg(t,e),()=>`${r} supports only inner-most axes for now. Got axes ${t} and rank-${e} input.`)}function gF(r,t){if(Cg(r,t))return null;let e=[];for(let o=0;o<t;++o)r.indexOf(o)===-1&&e.push(o);return r.forEach(o=>e.push(o)),e}function xF(r){return r.map((t,e)=>[e,t]).sort((t,e)=>t[1]-e[1]).map(t=>t[0])}function yF(r,t){let e=[];for(let o=t-r;o<t;++o)e.push(o);return e}function wF(r,t=null,e=!1){let n={x:C(r,"x","max")},s={reductionIndices:t,keepDims:e};return N.runKernel("Max",n,s)}var ur=S({max_:wF});function CF(r,t=null,e=!1){let n={x:C(r,"x","min")},s={axis:t,keepDims:e};return N.runKernel("Min",n,s)}var rs=S({min_:CF});function TF(r,t){let e=C(r,"base","pow"),o=C(t,"exp","pow");[e,o]=xt(e,o);let n={a:e,b:o};return N.runKernel("Pow",n)}var xr=S({pow_:TF});function lt(r,t){if((ee(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&ee(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Pe(r,[],[],t)}function IF(r){let e={x:C(r,"x","sqrt","float32")};return N.runKernel(Un,e)}var Ne=S({sqrt_:IF});function SF(r){let t=C(r,"x","square"),e={};return N.runKernel("Square",{x:t},e)}var ce=S({square_:SF});function vF(r,t=null,e=!1){let o=C(r,"x","sum");o.dtype==="bool"&&(o=mt(o,"int32"));let n={x:o},s={axis:t,keepDims:e};return N.runKernel("Sum",n,s)}var kt=S({sum_:vF});function NF(r,t="euclidean",e=null,o=!1){r=C(r,"x","norm");let n=ew(r,t,e),s=n.shape;if(o){let a=Qo(e,r.shape);s=Fo(n.shape,a)}return P(n,s)}function ew(r,t,e=null){if(r.rank===0)return ie(r);if(r.rank!==1&&e===null)return ew(P(r,[-1]),t,e);if(r.rank===1||typeof e=="number"||Array.isArray(e)&&e.length===1){if(t===1)return kt(ie(r),e);if(t===1/0)return ur(ie(r),e);if(t===-1/0)return rs(ie(r),e);if(t==="euclidean"||t===2)return Ne(kt(xr(ie(r),lt(2,"int32")),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(e)&&e.length===2){if(t===1)return ur(kt(ie(r),e[0]),e[1]-1);if(t===1/0)return ur(kt(ie(r),e[1]),e[0]);if(t===-1/0)return rs(kt(ie(r),e[1]),e[0]);if(t==="fro"||t==="euclidean")return Ne(kt(ce(r),e));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${e}`)}var no=S({norm_:NF});function kF(r,t=null,e=!1){return no(r,"euclidean",t,e)}var Tp=S({euclideanNorm_:kF});function EF(r){let e={x:C(r,"x","exp")};return N.runKernel("Exp",e)}var He=S({exp_:EF});function $F(r,t=0){let e=C(r,"x","expandDims","string_or_numeric");k(t<=e.rank,()=>"Axis must be <= rank of the tensor");let o={input:e},n={dim:t};return N.runKernel(na,o,n)}var Me=S({expandDims_:$F});function AF(r){let e={x:C(r,"x","expm1")};return N.runKernel(dn,e)}var Ip=S({expm1_:AF});function RF(r,t){let e=C(r,"x","tile","string_or_numeric");k(e.rank===t.length,()=>`Error in transpose: rank of input ${e.rank} must match length of reps ${t}.`);let o={x:e},n={reps:t};return N.runKernel(vo,o,n)}var Mr=S({tile_:RF});function DF(r,t,e,o="float32"){t==null&&(t=r);let n=ot([r,t],o),s=r<=t?r:t;for(let i=0;i<s;++i)n.set(1,i,i);let a=P(n.toTensor(),[r,t]);if(e==null)return a;if(e.length===1)return Mr(Me(a,0),[e[0],1,1]);if(e.length===2)return Mr(Me(Me(a,0),0),[e[0],e[1],1,1]);if(e.length===3)return Mr(Me(Me(Me(a,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${e.length}D.`)}var Sp=S({eye_:DF});function FF(r){let e={x:C(r,"x","floor","float32")};return N.runKernel(hn,e)}var Ei=S({floor_:FF});function _F(r,t,e=0,o=0){let n=C(r,"x","gather"),s=C(t,"indices","gather","int32"),a={x:n,indices:s},i={axis:e,batchDims:o};return N.runKernel(ca,a,i)}var $i=S({gather_:_F});function OF(r,t){let e=C(r,"a","greater","string_or_numeric"),o=C(t,"b","greater","string_or_numeric");[e,o]=xt(e,o),Dt(e.shape,o.shape);let n={a:e,b:o};return N.runKernel(xn,n)}var so=S({greater_:OF});function PF(r,t){let e=C(r,"a","greaterEqual","string_or_numeric"),o=C(t,"b","greaterEqual","string_or_numeric");[e,o]=xt(e,o),Dt(e.shape,o.shape);let n={a:e,b:o};return N.runKernel(yn,n)}var Ai=S({greaterEqual_:PF});function LF(r){let e={input:C(r,"input","imag")};return N.runKernel(ua,e)}var _o=S({imag_:LF});function BF(r){let e={x:C(r,"x","isFinite")};return N.runKernel(bn,e)}var vp=S({isFinite_:BF});function MF(r){let e={x:C(r,"x","isInf")};return N.runKernel(wn,e)}var Np=S({isInf_:MF});function VF(r){let e={x:C(r,"x","isNaN")};return N.runKernel(Cn,e)}var kp=S({isNaN_:VF});function GF(r,t=.2){let o={x:C(r,"x","leakyRelu")},n={alpha:t};return N.runKernel(ma,o,n)}var Ri=S({leakyRelu_:GF});function UF(r,t){let e=C(r,"a","less","string_or_numeric"),o=C(t,"b","less","string_or_numeric");[e,o]=xt(e,o),Dt(e.shape,o.shape);let n={a:e,b:o};return N.runKernel(Tn,n)}var os=S({less_:UF});function zF(r,t){let e=C(r,"a","lessEqual","string_or_numeric"),o=C(t,"b","lessEqual","string_or_numeric");[e,o]=xt(e,o),Dt(e.shape,o.shape);let n={a:e,b:o};return N.runKernel(In,n)}var Oo=S({lessEqual_:zF});function Tg(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");let o={start:r,stop:t,num:e};return N.runKernel(fa,{},o)}function WF(r,t=5,e=1,o=1,n=.5){let s=C(r,"x","localResponseNormalization");k(s.rank===4||s.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${s.rank}.`),k(Co(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let a=s,i=!1;s.rank===3&&(i=!0,a=P(s,[1,s.shape[0],s.shape[1],s.shape[2]]));let c={x:a},l={depthRadius:t,bias:e,alpha:o,beta:n},p=N.runKernel("LRN",c,l);return i?P(p,[p.shape[1],p.shape[2],p.shape[3]]):p}var Ep=S({localResponseNormalization_:WF});function HF(r){let e={x:C(r,"x","log","float32")};return N.runKernel("Log",e)}var yr=S({log_:HF});function qF(r){let e={x:C(r,"x","log1p")};return N.runKernel(Sn,e)}var Di=S({log1p_:qF});function rw(r){return k(Xr(r),()=>"The f passed in grad(f) must be a function"),(t,e)=>{let o=C(t,"x","tf.grad","string_or_numeric"),n=e!=null?C(e,"dy","tf.grad"):null;return N.tidy(()=>{let{value:s,grads:a}=N.gradients(()=>r(o),[o],n);return n!=null&&Bt(s.shape,n.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),im(a),a[0]})}}function ow(r){return k(Xr(r),()=>"The f passed in grads(f) must be a function"),(t,e)=>{k(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");let o=Eo(t,"args","tf.grads","string_or_numeric"),n=e!=null?C(e,"dy","tf.grads"):null;return N.tidy(()=>{let{value:s,grads:a}=N.gradients(()=>r(...o),o,n);return n!=null&&Bt(s.shape,n.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),im(a),a})}}function nw(r){return k(Xr(r),()=>"The f passed in valueAndGrad(f) must be a function"),(t,e)=>{k(t instanceof Rt,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),k(e==null||e instanceof Rt,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");let{grads:o,value:n}=N.gradients(()=>r(t),[t],e);return im(o),{grad:o[0],value:n}}}function sw(r){return k(Xr(r),()=>"The f passed in valueAndGrads(f) must be a function"),(t,e)=>{k(Array.isArray(t)&&t.every(n=>n instanceof Rt),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),k(e==null||e instanceof Rt,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");let o=N.gradients(()=>r(...t),t,e);return e!=null&&Bt(o.value.shape,e.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),im(o.grads),o}}function am(r,t){k(Xr(r),()=>"The f passed in variableGrads(f) must be a function"),k(t==null||Array.isArray(t)&&t.every(l=>l instanceof Qr),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let e=t!=null;if(!e){t=[];for(let l in N.registeredVariables)t.push(N.registeredVariables[l])}let o=e?t.filter(l=>!l.trainable):null,n=t.length;t=t.filter(l=>l.trainable),k(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${n} variables is trainable.`);let s=!0,{value:a,grads:i}=N.gradients(r,t,null,s);k(i.some(l=>l!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),k(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);let c={};return t.forEach((l,p)=>{i[p]!=null&&(c[l.name]=i[p])}),o?.forEach(l=>c[l.name]=null),{value:a,grads:c}}function Re(r){return N.customGrad(r)}function im(r){if(r.filter(e=>e==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}function KF(r){let e={x:C(r,"x","neg")};return N.runKernel("Neg",e)}var pe=S({neg_:KF});function jF(r){let e={x:C(r,"x","softplus")};return N.runKernel(Gn,e)}var Fi=S({softplus_:jF});function XF(r){let t=C(r,"x","logSigmoid");return Re(o=>({value:pe(Fi(pe(o))),gradFunc:a=>j(a,pr(pe(o)))}))(t)}var $p=S({logSigmoid_:XF});function YF(r,t){let e=C(r,"a","sub"),o=C(t,"b","sub");[e,o]=xt(e,o);let n={a:e,b:o};return N.runKernel("Sub",n)}var ct=S({sub_:YF});function ZF(r,t=-1){let e=C(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and axis was ${t}`);return Re((n,s)=>{let i=ur(n,t,!0),c=ct(n,i),l=ct(mt(c,"float32"),yr(kt(He(c),t,!0)));return s([l]),{value:l,gradFunc:(u,m)=>{let[f]=m,d=!0,g=He(f);return ct(u,j(kt(u,t,d),g))}}})(e)}var Ap=S({logSoftmax_:ZF});function QF(r,t=null,e=!1){let o=C(r,"x","logSumExp"),n=Qo(t,o.shape),s=ur(o,n,!0),a=ct(o,s),i=He(a),c=kt(i,n),l=yr(c),p=nt(P(s,l.shape),l);if(e){let u=Fo(p.shape,n);return P(p,u)}return p}var _i=S({logSumExp_:QF});function JF(r,t){let e=C(r,"a","logicalAnd","bool"),o=C(t,"b","logicalAnd","bool");Dt(e.shape,o.shape);let n={a:e,b:o};return N.runKernel(vn,n)}var ao=S({logicalAnd_:JF});function t_(r){let e={x:C(r,"x","logicalNot","bool")};return N.runKernel(Nn,e)}var Oi=S({logicalNot_:t_});function e_(r,t){let e=C(r,"a","logicalOr","bool"),o=C(t,"b","logicalOr","bool");Dt(e.shape,o.shape);let n={a:e,b:o};return N.runKernel(kn,n)}var Pi=S({logicalOr_:e_});function r_(r,t){let e=C(r,"a","logicalXor","bool"),o=C(t,"b","logicalXor","bool");return Dt(e.shape,o.shape),ao(Pi(r,t),Oi(ao(r,t)))}var Rp=S({logicalXor_:r_});var cm=2147483648;function o_(r,t,e="left"){let o=C(r,"sortedSequence","searchSorted"),n=C(t,"values","searchSorted"),s=o.shape[o.shape.length-1],a=n.shape[n.shape.length-1],i=P(o,[-1,s]),c=P(n,[-1,a]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==c.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(bt(c.shape)>=cm)throw new Error(`values tensor size must less than ${cm}`);if(i.shape[1]>=cm)throw new Error(`trailing dim_size must less than ${cm} for int32 output type, was ${i.shape[1]}`);let l={sortedSequence:i,values:c},p={side:e};return N.runKernel(za,l,p)}var Gc=S({searchSorted_:o_});function Ig(r,t){return Gc(r,t,"left")}function n_(r,t,e,o,n){let s=C(r,"x","maxPool"),a=1,i=s,c=!1;s.rank===3&&(c=!0,i=P(s,[1,s.shape[0],s.shape[1],s.shape[2]])),k(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),k(Ae(e,a),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${e} and dilations '${a}'`),se("maxPool",o,n);let l={x:i},p={filterSize:t,strides:e,pad:o,dimRoundingMode:n},u=N.runKernel(ha,l,p);return c?P(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Li=S({maxPool_:n_});function s_(r,t=[1,1,1],e,o,n,s="NDHWC"){let a=C(r,"x","maxPool3d"),i=a,c=!1;a.rank===4&&(c=!0,i=P(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),k(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),k(s==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),se("maxPool3d",o,n);let l={x:i},p={filterSize:t,strides:e,pad:o,dimRoundingMode:n,dataFormat:s},u=N.runKernel(ga,l,p);return c?P(u,[u.shape[1],u.shape[2],u.shape[3],u.shape[4]]):u}var Sg=S({maxPool3d_:s_});function a_(r,t,e,o,n=!1){let a={x:C(r,"x","maxPoolWithArgmax")},i={filterSize:t,strides:e,pad:o,includeBatchInIndex:n},c=N.runKernel(xa,a,i);return{result:c[0],indexes:c[1]}}var vg=S({maxPoolWithArgmax_:a_});function i_(r,t){let e=C(r,"a","maximum"),o=C(t,"b","maximum");[e,o]=xt(e,o),e.dtype==="bool"&&(e=mt(e,"int32"),o=mt(o,"int32")),Dt(e.shape,o.shape);let n={a:e,b:o};return N.runKernel(En,n)}var Bi=S({maximum_:i_});function c_(r,t=null,e=!1){let n={x:C(r,"x","mean")},s={axis:t,keepDims:e};return N.runKernel(ya,n,s)}var io=S({mean_:c_});function qe(r,t="float32"){if(zt(r),t==="complex64"){let o=qe(r,"float32"),n=qe(r,"float32");return Oe(o,n)}let e=yc(bt(r),t);return N.makeTensor(e,r,t)}function Vr(r,t="float32"){if(zt(r),t==="complex64"){let o=Vr(r,"float32"),n=qe(r,"float32");return Oe(o,n)}let e=vl(bt(r),t);return N.makeTensor(e,r,t)}function Ng(r,t,{indexing:e="xy"}={}){if(e!=="xy"&&e!=="ij")throw new TypeError(`${e} is not a valid third argument to meshgrid`);if(r===void 0)return[];let o=C(r,"x","meshgrid",r instanceof Rt?r.dtype:"float32");if(t===void 0)return[o];let n=C(t,"y","meshgrid",t instanceof Rt?t.dtype:"float32"),s=bt(o.shape),a=bt(n.shape);return e==="xy"?(o=P(o,[1,-1]),n=P(n,[-1,1]),[vt(Vr([a,1],o.dtype),o),vt(n,Vr([1,s],n.dtype))]):(o=P(o,[-1,1]),n=P(n,[1,-1]),[vt(o,Vr([1,a],o.dtype)),vt(Vr([s,1],n.dtype),n)])}function l_(r,t){let e=C(r,"a","minimum"),o=C(t,"b","minimum");[e,o]=xt(e,o),e.dtype==="bool"&&(e=mt(e,"int32"),o=mt(o,"int32")),Dt(e.shape,o.shape);let n={a:e,b:o};return N.runKernel($n,n)}var co=S({minimum_:l_});function p_(r,t,e){k(e==="reflect"||e==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${e}.`);let o=C(r,"x","mirrorPad");if(o.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");k(t.length===o.rank,()=>`Padding doesn't match input. Must be ${o.rank}. Got ${t.length}.`);let n=e==="reflect"?1:0;for(let i=0;i<o.rank;i++)k(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),k(t[i][0]>=0&&t[i][0]<=o.shape[i]-n&&t[i][1]>=0&&t[i][1]<=o.shape[i]-n,()=>`Padding in dimension ${i} cannot be greater than or equal to ${o.shape[i]-n} or less than 0 for input of shape ${o.shape}`);let s={paddings:t,mode:e},a={x:o};return N.runKernel(ba,a,s)}var Dp=S({mirrorPad_:p_});function u_(r,t){let e=C(r,"a","mod"),o=C(t,"b","mod");[e,o]=xt(e,o);let n={a:e,b:o};return N.runKernel("Mod",n)}var Fp=S({mod_:u_});function m_(r,t=null,e=!1){r=C(r,"x","moments");let o=Qo(t,r.shape),n=io(r,o,e),s=n.shape;e||(s=Fo(n.shape,o));let a=ce(ct(mt(r,"float32"),P(n,s))),i=io(a,o,e);return{mean:n,variance:i}}var kg=S({moments_:m_});function f_(r,t,e,o){let n=C(t,"data","multiRNNCell"),s=Eo(e,"c","multiRNNCell"),a=Eo(o,"h","multiRNNCell"),i=n,c=[];for(let u=0;u<r.length;u++){let m=r[u](i,s[u],a[u]);c.push(m[0]),c.push(m[1]),i=m[1]}let l=[],p=[];for(let u=0;u<c.length;u+=2)l.push(c[u]),p.push(c[u+1]);return[l,p]}var Eg=S({multiRNNCell_:f_});function d_(r,t,e,o=!1){let n=C(r,"logits","multinomial"),s=n.size,a=n.rank;if(s<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(a>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${a}`);e=e||Math.random();let c={logits:a===1?P(n,[1,-1]):n},l={numSamples:t,seed:e,normalized:o},p=N.runKernel(Ca,c,l);return a===1?P(p,[p.size]):p}var $g=S({multinomial_:d_});function h_(r,t){let e=C(r,"a","notEqual","string_or_numeric"),o=C(t,"b","notEqual","string_or_numeric");[e,o]=xt(e,o),Dt(e.shape,o.shape);let n={a:e,b:o};return N.runKernel(Rn,n)}var Mi=S({notEqual_:h_});function g_(r,t,e=1,o=0,n="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let a={indices:C(r,"indices","oneHot","int32")},i={dtype:n,depth:t,onValue:e,offValue:o};return N.runKernel(Na,a,i)}var ns=S({oneHot_:g_});function x_(r){let e={x:C(r,"x","onesLike")};return N.runKernel(va,e)}var _p=S({onesLike_:x_});function y_(r,t){let e=C(r,"v1","outerProduct"),o=C(t,"v2","outerProduct");k(e.rank===1&&o.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${e.rank} and ${o.rank}.`);let n=P(e,[-1,1]),s=P(o,[1,-1]);return vt(n,s)}var Ag=S({outerProduct_:y_});function b_(r,t,e=0){let o=C(r,"x","pad");if(o.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");let n={paddings:t,constantValue:e},s={x:o};return N.runKernel(Ea,s,n)}var mr=S({pad_:b_});function w_(r,t,e=0){return k(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),mr(r,[t],e)}var Rg=S({pad1d_:w_});function C_(r,t,e=0){return k(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),mr(r,t,e)}var Dg=S({pad2d_:C_});function T_(r,t,e=0){return k(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),mr(r,t,e)}var Fg=S({pad3d_:T_});function I_(r,t,e=0){return k(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),mr(r,t,e)}var _g=S({pad4d_:I_});function S_(r,t,e){let o=C(r,"x","spaceToBatchND");k(o.rank>=1+t.length,()=>`input rank ${o.rank} should be > than [blockShape] ${t.length}`),k(e.length===t.length,()=>`paddings.shape[0] ${e.length} must be equal to [blockShape] ${t.length}`),k(o.shape.reduce((a,i,c)=>c>0&&c<=t.length?a&&(i+e[c-1][0]+e[c-1][1])%t[c-1]===0:a,!0),()=>`input spatial dimensions ${o.shape.slice(1)} with paddings ${e.toString()} must be divisible by blockShapes ${t.toString()}`);let n={x:o},s={blockShape:t,paddings:e};return N.runKernel(Ka,n,s)}var Vi=S({spaceToBatchND_:S_});function v_(r,t,e,o,n,s,a){n==null&&(n=[1,1]),s==null&&(s=1),o===0&&(o="valid");let i=C(r,"x","maxPool"),c=i,l=!1;i.rank===3&&(l=!0,c=P(i,[1,i.shape[0],i.shape[1],i.shape[2]])),k(Ae(s,n),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${n}'`);let p=ng(c.shape,t,s,n,o),u=[p.dilationHeight,p.dilationWidth],m;o==="same"?m=k_([p.filterHeight,p.filterWidth],u):m=[[0,0],[0,0]];let f=u[0]===1&&u[1]===1,[d,g]=N_([p.inHeight,p.inWidth],u,m),h=f?o:"valid",x=f?c:Vi(c,u,d),I=(e==="avg"?()=>Si(x,t,s,h,a):()=>Li(x,t,s,h,a))(),T=f?I:vi(I,u,g);return l?P(T,[T.shape[1],T.shape[2],T.shape[3]]):T}function N_(r,t,e){let o=e.map(p=>p[0]),n=e.map(p=>p[1]),s=r.concat(o,n),a=t.map((p,u)=>(p-s[u]%p)%p),i=n.map((p,u)=>p+a[u]),c=t.map((p,u)=>[o[u],i[u]]),l=t.map((p,u)=>[0,a[u]]);return[c,l]}function k_(r,t){let o=r.map((a,i)=>a+(a-1)*(t[i]-1)).map(a=>a-1),n=o.map(a=>Math.floor(a/2)),s=o.map((a,i)=>a-n[i]);return o.map((a,i)=>[n[i],s[i]])}var Op=S({pool_:v_});function E_(r,t){let e=C(r,"x","prelu"),o=C(t,"alpha","prelu"),n={x:e,alpha:o};return N.runKernel(Aa,n)}var Gi=S({prelu_:E_});function $_(r,t=null,e=!1){let o=C(r,"x","prod");o.dtype==="bool"&&(o=mt(o,"int32"));let n={x:o},s={axis:t,keepDims:e};return N.runKernel(Ra,n,s)}var Pp=S({prod_:$_});function A_(r,t,e,o){let n=r.map((p,u)=>C(p,`tensors${u}`,"raggedGather","int32")),s=C(t,"paramsDenseValues","raggedGather"),a=C(e,"indices","raggedGather","int32"),i={paramsNestedSplits:n,paramsDenseValues:s,indices:a},c={outputRaggedRank:o},l=N.runKernel(Da,i,c);return{outputNestedSplits:l.slice(0,l.length-1),outputDenseValues:l[l.length-1]}}var Og=S({raggedGather_:A_});function R_(r,t,e){let o=C(r,"starts","raggedRange"),n=C(t,"limits","raggedRange",o.dtype),s=C(e,"deltas","raggedRange",o.dtype),a={starts:o,limits:n,deltas:s},i=N.runKernel(Fa,a);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}var Pg=S({raggedRange_:R_});function D_(r,t,e,o,n){let s=C(r,"shape","raggedTensorToTensor","int32"),a=C(t,"values","raggedTensorToTensor"),i=C(e,"defaultValue","raggedTensorToTensor",a.dtype),c=o.map((u,m)=>C(u,`tensors${m}`,"raggedTensorToTensor","int32")),l={shape:s,values:a,defaultValue:i,rowPartitionTensors:c},p={rowPartitionTypes:n};return N.runKernel(_a,l,p)}var Lg=S({raggedTensorToTensor_:D_});function F_(r,t,e){zt(r);let o=bt(r),n=null;if(e==null||e==="float32")n=new Float32Array(o);else if(e==="int32")n=new Int32Array(o);else if(e==="bool")n=new Uint8Array(o);else throw new Error(`Unknown data type ${e}`);for(let s=0;s<o;s++)n[s]=t();return N.makeTensor(n,r,e)}var Bg=S({rand_:F_});var mm=Ou(Hg());var Xg={};Et(Xg,{TEST_EPSILON_FLOAT16:()=>Tw,createVideoElement:()=>K_,encodeStrings:()=>Iw,expectArrayBuffersEqual:()=>q_,expectArraysClose:()=>G_,expectArraysEqual:()=>z_,expectNumbersClose:()=>W_,expectPromiseToFail:()=>U_,expectValuesInRange:()=>H_,play:()=>j_,testEpsilon:()=>Kg});var V_=.001,Tw=.1;function G_(r,t,e){return e==null&&(e=Kg()),qg(r,t,(o,n)=>jg(o,n,e))}function Kg(){return N.backend.floatPrecision()===32?V_:Tw}function qg(r,t,e){let o=!0;if((ee(r)||ee(t))&&(o=!1),ee(r)&&ee(t)&&(o=!0),o){let a=r.constructor.name,i=t.constructor.name;if(a!==i)throw new Error(`Arrays are of different type. Actual: ${a}. Expected: ${i}`)}if(Array.isArray(r)&&Array.isArray(t)){let a=Se(r),i=Se(t);if(!Fe(a,i))throw new Error(`Arrays have different shapes. Actual: [${a}]. Expected: [${i}]`)}let n=ee(r)?r:Rr(r),s=ee(t)?t:Rr(t);if(n.length!==s.length)throw new Error(`Arrays have different lengths actual: ${n.length} vs expected: ${s.length}.
Actual:   ${n}.
Expected: ${s}.`);for(let a=0;a<s.length;++a){let i=n[a],c=s[a];if(!e(i,c))throw new Error(`Arrays differ: actual[${a}] = ${i}, expected[${a}] = ${c}.
Actual:   ${n}.
Expected: ${s}.`)}typeof expect<"u"&&expect().nothing()}function U_(r,t){r().then(()=>t.fail(),()=>t()),typeof expect<"u"&&expect().nothing()}function z_(r,t){let e=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return $r(r)||$r(r[0])||$r(t)||$r(t[0])?qg(r,e,(o,n)=>o==n):qg(r,t,(o,n)=>jg(o,n,0))}function W_(r,t,e){if(e==null&&(e=Kg()),!jg(r,t,e))throw new Error(`Numbers differ: actual === ${r}, expected === ${t}`);typeof expect<"u"&&expect().nothing()}function jg(r,t,e){return!isFinite(r)&&!isFinite(t)?!0:!(isNaN(r)||isNaN(t)||Math.abs(r-t)>e)}function H_(r,t,e){for(let o=0;o<r.length;o++)if(r[o]<t||r[o]>e)throw new Error(`Value out of range:${r[o]} low: ${t}, high: ${e}`)}function q_(r,t){let e=new Float32Array(r),o=new Float32Array(t);if(e.length!==o.length)throw new Error(`Expected ArrayBuffer to be of length ${o.length}, but it was ${e.length}`);for(let n=0;n<o.length;n++)if(e[n]!==o[n])throw new Error(`Expected ArrayBuffer value at ${n} to be ${o[n]} but got ${e[n]} instead`)}function Iw(r){for(let t=0;t<r.length;t++){let e=r[t];Array.isArray(e)?Iw(e):r[t]=Zn(e)}return r}function K_(r){let t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(r),new Promise(e=>{t.addEventListener("loadeddata",o=>e(t)),t.load()})}async function j_(r){await r.play(),"requestVideoFrameCallback"in r&&await new Promise(t=>{r.requestVideoFrameCallback(t)})}var zi=class{constructor(t,e,o,n,s){this.mean=t,this.stdDev=e,this.dtype=o,this.nextVal=NaN,this.truncated=n,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let a=s||Math.random();this.random=mm.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){let n=this.nextVal;return this.nextVal=NaN,n}let t,e,o=!1;for(;!o;){let n,s,a;do n=2*this.random()-1,s=2*this.random()-1,a=n*n+s*s;while(a>=1||a===0);let i=Math.sqrt(-2*Math.log(a)/a);t=this.mean+this.stdDev*n*i,e=this.mean+this.stdDev*s*i,(!this.truncated||this.isValidTruncated(t))&&(o=!0)}return(!this.truncated||this.isValidTruncated(e))&&(this.nextVal=this.convertValue(e)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}},pm=class{constructor(t,e,o,n){this.alpha=t,this.beta=1/e,this.dtype=o;let s=n||Math.random();this.randu=mm.alea(s.toString()),this.randn=new zi(0,1,o,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,e,o,n,s,a;for(;;){do n=this.randn.nextValue(),a=1+this.c*n;while(a<=0);if(a*=a*a,t=n*n,e=1-.331*t*t,o=.5*t+this.d*(1-a+Math.log(a)),s=this.randu(),s<e||Math.log(s)<o)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}},um=class{constructor(t=0,e=1,o,n){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=e-t,this.dtype=o,n==null&&(n=Math.random()),typeof n=="number"&&(n=n.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${e} <= 1 and dtype is not float`);this.random=mm.alea(n)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}};function X_(r,t,e=1,o="float32",n){if(zt(r),e==null&&(e=1),o==null&&(o="float32"),o!=="float32"&&o!=="int32")throw new Error(`Unsupported data type ${o}`);let s=new pm(t,e,o,n),a=ot(r,o);for(let i=0;i<a.values.length;i++)a.values[i]=s.nextValue();return a.toTensor()}var Yg=S({randomGamma_:X_});function Y_(r,t=0,e=1,o,n){if(zt(r),o!=null&&o==="bool")throw new Error(`Unsupported data type ${o}`);let s=new zi(t,e,o,!1,n),a=ot(r,o);for(let i=0;i<a.values.length;i++)a.values[i]=s.nextValue();return a.toTensor()}var Lp=S({randomNormal_:Y_});function Z_(r,t,e){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return Lp(r,0,1,t,e)}var Zg=S({randomStandardNormal_:Z_});function Q_(r,t=0,e=1,o="float32",n){zt(r);let s=ot(r,o),a=new um(t,e,null,n);for(let i=0;i<s.values.length;i++)s.values[i]=a.nextValue();return s.toTensor()}var Wi=S({randomUniform_:Q_});function J_(r,t,e,o){return Wi(r,t,e,"int32",o)}var Qg=S({randomUniformInt_:J_});function Po(r,t,e=1,o="float32"){if(e===0)throw new Error("Cannot have a step of zero");let n={start:r,stop:t,step:e,dtype:o};return N.runKernel(Oa,{},n)}function tO(r){let e={input:C(r,"input","real")};return N.runKernel(Pa,e)}var lo=S({real_:tO});function eO(r){let e={x:C(r,"x","reciprocal")};return N.runKernel(Dn,e)}var Bp=S({reciprocal_:eO});function rO(r){let e={x:C(r,"x","relu")};return N.runKernel(Fn,e)}var Gr=S({relu_:rO});function oO(r){let e={x:C(r,"x","relu6")};return N.runKernel(_n,e)}var Hi=S({relu6_:oO});function nO(r,t){let o={x:C(r,"x","reverse")},n={dims:t};return N.runKernel(Va,o,n)}var Ve=S({reverse_:nO});function sO(r){let t=C(r,"x","reverse");return k(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),Ve(t,0)}var Jg=S({reverse1d_:sO});function aO(r,t){let e=C(r,"x","reverse");return k(e.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${e.rank}.`),Ve(e,t)}var tx=S({reverse2d_:aO});function iO(r,t){let e=C(r,"x","reverse");return k(e.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${e.rank}.`),Ve(e,t)}var ex=S({reverse3d_:iO});function cO(r,t){let e=C(r,"x","reverse");return k(e.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${e.rank}.`),Ve(e,t)}var rx=S({reverse4d_:cO});function lO(r){let e={x:C(r,"x","round")};return N.runKernel(On,e)}var qi=S({round_:lO});function pO(r){let e={x:C(r,"x","rsqrt","float32")};return N.runKernel(Pn,e)}var Mp=S({rsqrt_:pO});function uO(r){let e={x:C(r,"x","selu")};return N.runKernel(Ln,e)}var Vp=S({selu_:uO});function mO(r,t,e,o,n,s=[1,1],a="NHWC"){let i=C(r,"x","separableConv2d"),c=C(t,"depthwiseFilter","separableConv2d"),l=C(e,"pointwiseFilter","separableConv2d"),p=i,u=!1;if(i.rank===3&&(u=!0,p=P(i,[1,i.shape[0],i.shape[1],i.shape[2]])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");k(p.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${p.rank}.`),k(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),k(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),k(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),k(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);let m=c.shape[2],f=c.shape[3];k(l.shape[2]===m*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${m*f}, but got ${l.shape[2]}.`);let d=Ro(p,c,o,n,a,s),h=Lr(d,l,1,"valid",a);return u?P(h,[h.shape[1],h.shape[2],h.shape[3]]):h}var Gp=S({separableConv2d_:mO});async function fO(r,t){let e=C(r,"x","setdiff1d"),o=C(t,"y","setdiff1d");k(e.dtype===o.dtype,()=>`x and y should have the same dtype, but got x (${e.dtype}) and y (${o.dtype}).`),k(e.rank===1,()=>`x should be 1D tensor, but got x (${e.shape}).`),k(o.rank===1,()=>`y should be 1D tensor, but got y (${o.shape}).`);let n=await e.data(),s=await o.data(),a=new Set(s),i=0;for(let p=0;p<n.length;p++)a.has(n[p])||i++;let c=new $t([i],e.dtype),l=new $t([i],"int32");for(let p=0,u=0;p<n.length;p++)a.has(n[p])||(c.values[u]=n[p],l.values[u]=p,u++);return[c.toTensor(),l.toTensor()]}var ox=fO;function dO(r){let e={x:C(r,"x","sign")};return N.runKernel(Mn,e)}var Up=S({sign_:dO});function hO(r){let e={x:C(r,"x","sin","float32")};return N.runKernel("Sin",e)}var zp=S({sin_:hO});function gO(r){let e={x:C(r,"x","sinh")};return N.runKernel(Bn,e)}var Wp=S({sinh_:gO});function xO(r,t,e){let o=C(r,"x","slice1d");return k(o.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${o.rank} tensor`),yt(o,[t],[e])}var nx=S({slice1d_:xO});function yO(r,t,e){let o=C(r,"x","slice2d");return k(o.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${o.rank} tensor`),yt(o,t,e)}var sx=S({slice2d_:yO});function bO(r,t,e){let o=C(r,"x","slice3d");return k(o.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${o.rank} tensor`),yt(o,t,e)}var ax=S({slice3d_:bO});function wO(r,t,e){let o=C(r,"x","slice4d");return k(o.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${o.rank} tensor`),yt(o,t,e)}var ix=S({slice4d_:wO});function CO(r,t=-1){let e=C(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${e.rank} and dim was ${t}`);let o={logits:e},n={dim:t};return N.runKernel(Xa,o,n)}var Hp=S({softmax_:CO});function TO(r){k(r.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${r.dtype}.`);let t={input:r};return N.runKernel("FFT",t)}var Lo=S({fft_:TO});function IO(r){k(r.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${r.dtype}.`);let t={input:r};return N.runKernel(pa,t)}var po=S({ifft_:IO});function SO(r){let t=r.shape[r.shape.length-1],e=r.size/t,o;if(t<=2){let n=P(r,[e,t]);o=po(n)}else{let n=[e,2*(t-1)],s=P(lo(r),[e,t]),a=P(_o(r),[e,t]),i=Ve(yt(s,[0,1],[e,t-2]),1),c=j(Ve(yt(a,[0,1],[e,t-2]),1),lt(-1)),l=Ot([s,i],1),p=Ot([a,c],1),u=P(Oe(l,p),[n[0],n[1]]);o=po(u)}if(o=lo(o),r.rank===3&&r.shape[0]!==0){let n=o,s=r.shape[0];o=P(o,[s,o.shape[0]/s,o.shape[1]]),n.dispose()}return o}var Ki=S({irfft_:SO});function vO(r,t,e=0){let n={x:C(r,"x","split")},s={numOrSizeSplits:t,axis:e};return N.runKernel(ja,n,s)}var br=S({split_:vO});function NO(r,t){k(r.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${r.dtype}`);let e=r.shape[r.shape.length-1],o=r.size/e,n;if(t!=null&&t<e){let d=r.shape.map(h=>0),g=r.shape.map(h=>h);g[r.shape.length-1]=t,n=yt(r,d,g),e=t}else if(t!=null&&t>e){let d=r.shape.map(g=>g);d[r.shape.length-1]=t-e,n=Ot([r,qe(d)],r.shape.length-1),e=t}else n=r;let s=oe(n),a=P(Oe(n,s),[o,e]),i=Lo(a),c=Math.floor(e/2)+1,l=lo(i),p=_o(i),u=br(l,[c,e-c],l.shape.length-1),m=br(p,[c,e-c],p.shape.length-1),f=n.shape.slice();return f[n.shape.length-1]=c,P(Oe(u[0],m[0]),f)}var Bo=S({rfft_:NO});function kO(r,t){let e=C(r,"a","squaredDifference"),o=C(t,"b","squaredDifference");[e,o]=xt(e,o),Dt(e.shape,o.shape);let n={a:e,b:o},s={};return N.runKernel(zn,n,s)}var ji=S({squaredDifference_:kO});function EO(r,t){let e=C(r,"x","squeeze","string_or_numeric");return P(e,Ch(e.shape,t).newShape)}var Mo=S({squeeze_:EO});function $O(r,t=0){let e=Eo(r,"tensors","stack","string_or_numeric");k(e.length>=1,()=>"Pass at least one tensor to tf.stack"),e.length>0&&k(t<=e[0].rank,()=>"Axis must be <= rank of the tensor");let o=e,n={axis:t};return N.runKernel(ka,o,n)}var ye=S({stack_:$O});function AO(r,t=0){let o={x:C(r,"x","step")},n={alpha:t};return N.runKernel(qn,o,n)}var Xi=S({step_:AO});function RO(r,t,e,o,n=0,s=0,a=0,i=0,c=0){let p={x:C(r,"x","stridedSlice","string_or_numeric")},u={begin:t,end:e,strides:o,beginMask:n,endMask:s,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};return N.runKernel(ei,p,u)}var qp=S({stridedSlice_:RO});function DO(r){let e={x:C(r,"x","tan","float32")};return N.runKernel("Tan",e)}var Kp=S({tan_:DO});function de(r,t){cr(r);let e=Se(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Pe(r,null,e,t)}function Vo(r,t,e){if(cr(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");let o=Se(r,e);if(o.length!==2&&o.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Pe(r,t,o,e)}function jp(r,t,e){if(cr(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");let o=Se(r,e);if(o.length!==3&&o.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Pe(r,t,o,e)}function cx(r,t,e){if(cr(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");let o=Se(r,e);if(o.length!==4&&o.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Pe(r,t,o,e)}function lx(r,t,e){if(cr(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");let o=Se(r,e);if(o.length!==5&&o.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Pe(r,t,o,e)}function px(r,t,e){if(cr(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");let o=Se(r,e);if(o.length!==6&&o.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(o.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||o,Pe(r,t,o,e)}var Xp={};Et(Xp,{calculateShapes:()=>Sw,validateInput:()=>Uc,validateUpdateShape:()=>ux});function ux(r,t,e){let o=t.rank>1?t.shape[t.rank-1]:1,n=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${e.shape}, indices.shape: ${t.shape}, shape: ${r}, sliceDim: ${o}, and batchDim: ${n}.`;if(e.rank<n)throw new Error(s+` update.rank < ${n}. `);if(r.length<o+(e.rank-n))throw new Error(s+` Output shape length < ${o+(e.rank-n)}`);if(e.rank!==n+r.length-o)throw new Error(s+` update.rank != ${n+r.length-o}`);for(let a=0;a<n;++a)if(e.shape[a]!==t.shape[a])throw new Error(s+` updates.shape[${a}] (${e.shape[a]}) != indices.shape[${a}] (${t.shape[a]}).`);for(let a=0;a<e.rank-n;++a)if(e.shape[a+n]!==r[a+o])throw new Error(s+` updates.shape[${a+n}] (${e.shape[a+n]}) != shape[${a+n}] (${r[a+n]})`)}function Uc(r,t,e){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(r.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${r.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(e.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${e}`);if(e.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(r.size===0)throw new Error(`Updates specified for empty output. updates shape: ${r.shape}`)}ux(e,t,r)}function Sw(r,t,e){let o=t.shape.length,n=o>1?t.shape[o-1]:1,s=e.length,a=1;for(let u=n;u<s;++u)a*=e[u];let i=n<1?1:n,c=bt(t.shape)/i,l=[...Yr(e.slice(0,n)),1],p=bt(e);return{sliceRank:n,numUpdates:c,sliceSize:a,strides:l,outputSize:p}}function FO(r,t,e){let o=C(r,"tensor","tensorScatterupdate"),n=C(t,"indices","tensorScatterupdate","int32"),s=C(e,"updates","tensorScatterupdate");if(Uc(s,n,o.shape),o.dtype!==s.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${o.dtype} and ${s.dtype}.`);let a={tensor:o,indices:n,updates:s},i={};return N.runKernel(Ua,a,i)}var mx=S({tensorScatterUpdate_:FO});function _O(r,t=1,e=!0){let o=C(r,"x","topk");if(o.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");let n=o.shape[o.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>n)throw new Error(`'k' passed to topk() must be <= the last dimension (${n}) but got ${t}`);let s={x:o},a={k:t,sorted:e},[i,c]=N.runKernel(ii,s,a);return{values:i,indices:c}}var Yp=S({topk_:_O});function OO(r,t=0,e=1,o,n){if(zt(r),o!=null&&o==="bool")throw new Error("Unsupported data type $ { dtype }");let s=new zi(t,e,o,!0,n),a=ot(r,o);for(let i=0;i<a.values.length;i++)a.values[i]=s.nextValue();return a.toTensor()}var fx=S({truncatedNormal_:OO});function PO(r,t=0){let e=C(r,"x","unique","string_or_numeric");k(e.rank>0,()=>"The input tensor must be at least 1D");let o={x:e},n={axis:t},[s,a]=N.runKernel(li,o,n);return{values:s,indices:a}}var Zp=S({unique_:PO});function LO(r,t,e){let o=C(r,"x","unsortedSegmentSum"),n=C(t,"segmentIds","unsortedSegmentSum","int32");k(Co(e),()=>"numSegments must be of dtype int");let s={x:o,segmentIds:n},a={numSegments:e};return N.runKernel(ui,s,a)}var Qp=S({unsortedSegmentSum_:LO});function BO(r,t=0){let e=C(r,"x","unstack","string_or_numeric");k(t>=-e.shape.length&&t<e.shape.length,()=>`Axis = ${t} is not in [-${e.shape.length}, ${e.shape.length})`);let o={value:e},n={axis:t};return N.runKernel(pi,o,n)}var Ge=S({unstack_:BO});function dx(r,t){return Gc(r,t,"right")}function hx(r,t=!0,e,o){return N.makeVariable(r,t,e,o)}function fm(r,t){let e=[];for(let s=0;s<t.length;s++)t[s]&&e.push(s);let o=ot(r,"int32"),n=ot([e.length,r.length],"int32");for(let s=0;s<e.length;s++){let a=o.indexToLoc(e[s]),i=s*r.length;n.values.set(a,i)}return n.toTensor()}async function MO(r){let t=C(r,"condition","whereAsync","bool"),e=await t.data(),o=fm(t.shape,e);return r!==t&&t.dispose(),o}var Jp=MO;async function VO(r,t,e){let o=C(r,"tensor","boolMask"),n=C(t,"mask","boolMask","bool"),s=e??0,a=n.rank,i=o.shape;k(a>0,()=>"mask cannot be scalar"),Bt(i.slice(s,s+a),n.shape,"mask's shape must match the first K dimensions of tensor's shape,");let c=1;for(let g=s;g<s+a;g++)c*=i[g];let l=i.slice(0,s).concat([c],i.slice(s+a)),p=P(o,l),u=P(n,[-1]),m=await Jp(u),f=Mo(m,[1]),d=$i(p,f,s);return r!==o&&o.dispose(),t!==n&&n.dispose(),f.dispose(),p.dispose(),u.dispose(),m.dispose(),d}var vw=VO;function GO(r,t,e){let o=C(r,"x","transpose");if(t==null&&(t=o.shape.map((a,i)=>i).reverse()),k(o.rank===t.length,()=>`Error in transpose: rank of input ${o.rank} must match length of perm ${t}.`),t.forEach(a=>{k(a>=0&&a<o.rank,()=>`All entries in 'perm' must be between 0 and ${o.rank-1} but got ${t}`)}),o.rank<=1)return o.clone();let n={x:o},s={perm:t};return o.dtype==="complex64"?gt(()=>{let a=lo(o),i=_o(o);return a=N.runKernel(No,{x:a},s),i=N.runKernel(No,{x:i},s),e&&(i=pe(i)),Oe(a,i)}):N.runKernel(No,n,s)}var Go=S({transpose_:GO});function UO(r,t,e,o,n=!0){let s=C(r,"v","movingAverage"),a=C(t,"x","movingAverage"),i=C(e,"decay","movingAverage");Mh(s,a),k(Fe(s.shape,a.shape),()=>"Shape mismatch in v and x");let c=lt(1),l=ct(c,i),p=j(ct(a,s),l);if(n){k(o!=null,()=>"When using zeroDebias: true, step is required.");let u=C(o,"step","movingAverage");p=Tt(p,ct(c,xr(i,u)))}return nt(s,p)}var Nw=S({movingAverage_:UO});function zO(r,t,e){zt(e);let o=C(r,"indices","scatterND","int32"),n=C(t,"updates","scatterND");Uc(n,o,e);let s={indices:o,updates:n},a={shape:e};return N.runKernel(Ga,s,a)}var kw=S({scatterND_:zO});function Ew(r,t,e,o){if(r.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${r.dtype}.`);if(r.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${r.shape}.`);let n=r.rank>0?r.shape[0]:1,s=r.rank>1?r.shape[1]:1;if(e.length!==s)throw new Error(`outputShape has incorrect number of elements:, ${e.length}, should be: ${s}.`);let a=t.size;if(!(t.rank===0||t.rank===1&&a===n))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${n}]`);if(t.dtype!==o.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}function HO(r,t,e,o=0){zt(e);let n=C(r,"sparseIndices","sparseToDense","int32"),s=C(t,"sparseValues","sparseToDense","string_or_numeric"),a=C(o,"defaultValue","sparseToDense",s.dtype);Ew(n,s,e,a);let i={sparseIndices:n,sparseValues:s,defaultValue:a},c={outputShape:e};return N.runKernel(ti,i,c)}var $w=S({sparseToDense_:HO});function qO(r,t){let e=C(t,"indices","gatherND","int32"),n={params:C(r,"x","gatherND","string_or_numeric"),indices:e};return N.runKernel(la,n)}var Aw=S({gatherND_:qO});function Rw(r,t){if(t==null)return r.shape.slice();if(Fe(r.shape,t))return t;if(r.shape.length===t.length){let e=[];for(let o=0;o<r.shape.length;o++)t[o]==null&&r.shape[o]!=null?e.push(r.shape[o]):e.push(t[o]);return e}return t}function KO(r,t,e,o){let n=C(r,"x","dropout");if(k(n.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${n.dtype} tensor instead.`),k(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return r instanceof Rt?n.clone():n;let s=Rw(n,e),a=1-t,i=Tt(Ei(nt(Wi(s,0,1,"float32",o),a)),a);return j(n,i)}var Dw=S({dropout_:KO});function dm(r){return Math.floor(Math.pow(2,Math.ceil(Math.log(r)/Math.log(2))))}function zc(r,t,e){let o=1-r%2,n=new Float32Array(r);for(let s=0;s<r;++s){let a=2*Math.PI*s/(r+o-1);n[s]=t-e*Math.cos(a)}return de(n,"float32")}async function jO(r,t,e=1){let o=C(r,"predictions","inTopK"),n=C(t,"targets","inTopK");k(o.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${o.rank}`),k(o.rank-1===n.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${o.rank} and targets rank ${n.rank}`),Bt(o.shape.slice(0,o.shape.length-1),n.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");let s=o.shape[o.shape.length-1];k(e>0&&e<=s,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${e}`);let a=await o.data(),i=await n.data(),[c,l]=[a.length/s,s],p=Th("bool",c);for(let u=0;u<c;u++){let m=u*l,f=a.subarray(m,m+l),d=[];for(let g=0;g<f.length;g++)d.push({value:f[g],index:g});d.sort((g,h)=>h.value-g.value),p[u]=0;for(let g=0;g<e;g++)if(d[g].index===i[u]){p[u]=1;break}}return r!==o&&o.dispose(),t!==n&&n.dispose(),xe(p,n.shape,"bool")}var Fw=jO;var hm={};Et(hm,{conv2d:()=>Ow,depthwiseConv2d:()=>Bw,matMul:()=>Mw});function XO(r,t,e,o,n,s="NHWC",a){let i=r;r.rank===3&&(i=P(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let c=t;c.rank===3&&(c=P(t,[1,t.shape[0],t.shape[1],t.shape[2]])),k(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),k(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),k(e.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${e}.`);let l=s==="NHWC"?i.shape[3]:i.shape[1],p=s==="NHWC"?c.shape[3]:c.shape[1];k(l===e[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${e[2]}.`),k(p===e[3],()=>`Error in conv2dDerFilter: depth of dy (${p}) must match output depth for filter (${e[3]}).`),se("conv2dDerFilter",n,a);let u={x:i,dy:c},m={strides:o,pad:n,dataFormat:s,dimRoundingMode:a,filterShape:e};return N.runKernel(Ms,u,m)}var _w=S({conv2DBackpropFilter_:XO});function Yi(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return j(r,Xi(t));throw new Error(`Cannot compute gradient for fused activation ${e}.`)}function Zi(r,t){let e=t,o=sm(r.shape,t.shape);return o.length>0&&(e=kt(e,o)),P(e,r.shape)}function Qi(r,t,e,o){if(t==="linear")return r;if(t==="relu")return Gr(r);if(t==="elu")return ki(r);if(t==="relu6")return Hi(r);if(t==="prelu")return Gi(r,e);if(t==="leakyrelu")return Ri(r,o);if(t==="sigmoid")return pr(r);throw new Error(`Unknown fused activation ${t}.`)}var Ji=(r,t)=>!(r>0)||t==="linear";function YO({x:r,filter:t,strides:e,pad:o,dataFormat:n="NHWC",dilations:s=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:p}){if(c=c||"linear",Ji(N.state.gradientDepth,c)===!1){k(n==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${n} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let $=Lr(r,t,e,o,n,s,a);return i!=null&&($=nt($,i)),Qi($,c,l,p)}let u=C(r,"x","conv2d","float32"),m=C(t,"filter","conv2d","float32"),f=u,d=!1;u.rank===3&&(d=!0,f=P(u,[1,u.shape[0],u.shape[1],u.shape[2]])),k(f.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${f.rank}.`),k(m.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${m.rank}.`),se("fused conv2d",o,a);let g=n==="NHWC"?f.shape[3]:f.shape[1];k(m.shape[2]===g,()=>`Error in conv2d: depth of input (${g}) must match input depth for filter ${m.shape[2]}.`),k(Ae(e,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${e} and dilations '${s}'`);let h=Ii(f.shape,m.shape,e,s,o,a),x;i!=null&&(x=C(i,"bias","fused conv2d"),[x]=xt(x,u),n==="NHWC"?Dt(h.outShape,x.shape):(k(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),k(x.shape.length===0||x.shape[0]===h.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${h.outChannels})`)));let b;if(l!=null){let $=l.shape;if(k($.length<=1||$.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${$.length}.`),$.length===1)k($[0]===1||$[0]===h.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the number of output channels (${h.outChannels}).`);else if($.length===3)try{Dt($,h.outShape)}catch{let D=`Error in fused conv2d: PReLU activation weights (${$}) is not compatible with the output shape of the conv2d (${h.outShape}).`;throw Error(D)}b=C(l,"prelu weights","fused conv2d")}let I=($,A)=>{k(n==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${n} but only NHWC is currently supported.`);let[D,_,O,L]=A,B=Yi($,O,c);k(Ti(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);let M=nm(_.shape,B,D,e,o),G=_w(_,B,D.shape,e,o),V=[M,G];if(L!=null){let W=Zi(L,B);V.push(W)}return V},T={x:f,filter:m,bias:x,preluActivationWeights:b},E={strides:e,pad:o,dataFormat:n,dilations:s,dimRoundingMode:a,activation:c,leakyreluAlpha:p};return i==null?Re((A,D,_)=>{let O=N.runKernel(jn,T,E);return _([D,A,O]),d&&(O=P(O,[O.shape[1],O.shape[2],O.shape[3]])),{value:O,gradFunc:I}})(f,m):Re((A,D,_,O)=>{let L=N.runKernel(jn,T,E);return O([D,A,L,_]),d&&(L=P(L,[L.shape[1],L.shape[2],L.shape[3]])),{value:L,gradFunc:I}})(f,m,x)}var Ow=S({fusedConv2d_:YO});function ZO(r,t,e,o,n,s=[1,1],a){let i=r;r.rank===3&&(i=P(r,[1,r.shape[0],r.shape[1],r.shape[2]]));let c=t;c.rank===3&&(c=P(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={x:i,dy:c},p={strides:o,pad:n,dimRoundingMode:a,dilations:s,filterShape:e};return N.runKernel(Ys,l,p)}var Pw=S({depthwiseConv2dNativeBackpropFilter_:ZO});function QO(r,t,e,o,n,s=[1,1],a){let i=t,c=!1;t.rank===3&&(c=!0,i=P(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={dy:i,filter:e},p={strides:o,pad:n,dimRoundingMode:a,dilations:s,inputShape:r},u=N.runKernel(Zs,l,p);return c?P(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var Lw=S({depthwiseConv2dNativeBackpropInput_:QO});function JO({x:r,filter:t,strides:e,pad:o,dataFormat:n="NHWC",dilations:s=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:l,leakyreluAlpha:p}){if(Ji(N.state.gradientDepth,c)===!1){let E=Ro(r,t,e,o,n,s,a);return i!=null&&(E=nt(E,i)),Qi(E,c,l,p)}let u=C(r,"x","depthwiseConv2d","float32"),m=C(t,"filter","depthwiseConv2d","float32"),f=u,d=!1;u.rank===3&&(d=!0,f=P(u,[1,u.shape[0],u.shape[1],u.shape[2]])),k(f.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${f.rank}.`),k(m.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${m.rank}.`),k(f.shape[3]===m.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${f.shape[3]}) must match the inChannels dimension in filter ${m.shape[2]}.`),s==null&&(s=[1,1]),k(Ae(e,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${e} and dilations '${s}'`),se("fused depthwiseConv2d",o,a);let g=Ii(f.shape,m.shape,e,s,o,a,!0),h;i!=null&&(h=C(i,"bias","fused conv2d"),[h]=xt(h,u),Dt(g.outShape,h.shape));let x;l!=null&&(x=C(l,"prelu weights","fused depthwiseConv2d"));let b=(E,$)=>{k(Ti(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[A,D,_,O]=$,L=Yi(E,_,c),B=Lw(D.shape,L,A,e,o,s,a),M=Pw(D,L,A.shape,e,o,s,a);if(O!=null){let G=Zi(h,L);return[B,M,G]}return[B,M]},I={x:f,filter:m,bias:h,preluActivationWeights:x},T={strides:e,pad:o,dataFormat:n,dilations:s,dimRoundingMode:a,activation:c,leakyreluAlpha:p};return i==null?Re(($,A,D)=>{let _=N.runKernel(Xn,I,T);return D([A,$,_]),d&&(_=P(_,[_.shape[1],_.shape[2],_.shape[3]])),{value:_,gradFunc:b}})(f,m):Re(($,A,D,_)=>{let O=N.runKernel(Xn,I,T);return _([A,$,O,D]),d&&(O=P(O,[O.shape[1],O.shape[2],O.shape[3]])),{value:O,gradFunc:b}})(f,m,h)}var Bw=S({fusedDepthwiseConv2d_:JO});function tP({a:r,b:t,transposeA:e=!1,transposeB:o=!1,bias:n,activation:s="linear",preluActivationWeights:a,leakyreluAlpha:i=.2}){if(Ji(N.state.gradientDepth,s)===!1){let L=vt(r,t,e,o);return n!=null&&(L=nt(L,n)),Qi(L,s,a,i)}let c=C(r,"a","fused matMul"),l=C(t,"b","fused matMul");[c,l]=xt(c,l);let p=e?c.shape[c.rank-2]:c.shape[c.rank-1],u=o?l.shape[l.rank-1]:l.shape[l.rank-2],m=e?c.shape[c.rank-1]:c.shape[c.rank-2],f=o?l.shape[l.rank-2]:l.shape[l.rank-1],d=c.shape.slice(0,-2),g=l.shape.slice(0,-2),h=bt(d),x=bt(g);k(p===u,()=>`Error in fused matMul: inner shapes (${p}) and (${u}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${e} and transposeB=${o} must match.`);let I=Dt(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([m,f]),T=e?P(c,[h,p,m]):P(c,[h,m,p]),E=o?P(l,[x,f,u]):P(l,[x,u,f]),$;n!=null&&($=C(n,"bias","fused matMul"),[$]=xt($,c),Dt(I,$.shape));let A;a!=null&&(A=C(a,"prelu weights","fused matMul"));let D=(L,B)=>{let[M,G,V,W]=B,H=Yi(P(L,V.shape),V,s),U,q;if(!e&&!o?(U=vt(H,G,!1,!0),q=vt(M,H,!0,!1)):!e&&o?(U=vt(H,G,!1,!1),q=vt(H,M,!0,!1)):e&&!o?(U=vt(G,H,!1,!0),q=vt(M,H,!1,!1)):(U=vt(G,H,!0,!0),q=vt(H,M,!0,!0)),n!=null){let X=Zi(W,H);return[U,q,X]}else return[U,q]},_={a:T,b:E,bias:$,preluActivationWeights:A},O={transposeA:e,transposeB:o,activation:s,leakyreluAlpha:i};return n==null?Re((B,M,G)=>{let V=N.runKernel(Kn,_,O);return G([B,M,V]),{value:P(V,I),gradFunc:D}})(T,E):Re((B,M,G,V)=>{let W=N.runKernel(Kn,_,O);return V([B,M,W,G]),{value:P(W,I),gradFunc:D}})(T,E,$)}var Mw=S({fusedMatMul_:tP});function eP(r){return zc(r,.54,.46)}var Vw=S({hammingWindow_:eP});function rP(r){return zc(r,.5,.5)}var gm=S({hannWindow_:rP});function oP(r,t,e,o=!1,n=0){let s=0,a=[];for(;s+t<=r.size;)a.push(yt(r,s,t)),s+=e;if(o)for(;s<r.size;){let i=s+t-r.size,c=Ot([yt(r,s,t-i),Pr([i],n)]);a.push(c),s+=e}return a.length===0?Vo([],[0,t]):P(Ot(a),[a.length,t])}var xm=S({frame_:oP});function nP(r,t,e,o,n=gm){o==null&&(o=dm(t));let s=xm(r,t,e),a=j(s,n(t));return Bo(a,o)}var Gw=S({stft_:nP});function sP(r,t,e,o,n="bilinear",s=0){let a=C(r,"image","cropAndResize"),i=C(t,"boxes","cropAndResize","float32"),c=C(e,"boxInd","cropAndResize","int32"),l=i.shape[0];k(a.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${a.rank}.`),k(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${i.shape}.`),k(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${i.shape}.`),k(o.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${o.length}.`),k(o[0]>=1&&o[1]>=1,()=>`cropSize must be atleast [1,1], but was ${o}`),k(n==="bilinear"||n==="nearest",()=>`method must be bilinear or nearest, but was ${n}`);let p={image:a,boxes:i,boxInd:c},u={method:n,extrapolationValue:s,cropSize:o};return N.runKernel(qs,p,u)}var Uw=S({cropAndResize_:sP});function aP(r){let t=C(r,"image","flipLeftRight","float32");k(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let e={image:t};return N.runKernel(aa,e,{})}var zw=S({flipLeftRight_:aP});function iP(r){let t=C(r,"image","grayscaleToRGB"),e=t.rank-1,o=t.shape[e];k(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),k(o===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${o}.`);let n=new Array(t.rank);return n.fill(1,0,e),n[e]=3,Mr(t,n)}var Ww=S({grayscaleToRGB_:iP});function cP(r){let t=C(r,"image","RGBToGrayscale"),e=t.rank-1,o=t.shape[e];k(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),k(o===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${o}.`);let n=t.dtype,s=mt(t,"float32"),a=de([.2989,.587,.114]),i;switch(t.rank){case 2:i=Do("ij,j->i",s,a);break;case 3:i=Do("ijk,k->ij",s,a);break;case 4:i=Do("ijkl,l->ijk",s,a);break;case 5:i=Do("ijklm,m->ijkl",s,a);break;case 6:i=Do("ijklmn,n->ijklm",s,a);break;default:throw new Error("Not a valid tensor rank.")}return i=Me(i,-1),mt(i,n)}var Hw=S({rgbToGrayscale_:cP});function lP(r,t,e=0,o=.5){let n=C(r,"image","rotateWithOffset","float32");k(n.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${n.rank}.`);let s={image:n},a={radians:t,fillValue:e,center:o};return N.runKernel(fi,s,a)}var qw=S({rotateWithOffset_:lP});function wr(r,t,e,o,n,s){o==null&&(o=.5),n==null&&(n=Number.NEGATIVE_INFINITY),s==null&&(s=0);let a=r.shape[0];return e=Math.min(e,a),k(0<=o&&o<=1,()=>`iouThreshold must be in [0, 1], but was '${o}'`),k(r.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${r.rank}'`),k(r.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${r.shape[1]}`),k(t.rank===1,()=>"scores must be a 1D tensor"),k(t.shape[0]===a,()=>`scores has incompatible shape with boxes. Expected ${a}, but was ${t.shape[0]}`),k(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:e,iouThreshold:o,scoreThreshold:n,softNmsSigma:s}}function pP(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY){let s=C(r,"boxes","nonMaxSuppression","float32"),a=C(t,"scores","nonMaxSuppression","float32"),i=wr(s,a,e,o,n);e=i.maxOutputSize,o=i.iouThreshold,n=i.scoreThreshold;let c={maxOutputSize:e,iouThreshold:o,scoreThreshold:n};return N.runKernel(Ta,{boxes:s,scores:a},c)}var Kw=S({nonMaxSuppression_:pP});function jw(r,t,e){let o=uP(r,t,e),n=o<0?-(o+1):o;r.splice(n,0,t)}function uP(r,t,e){return fP(r,t,e||mP)}function mP(r,t){return r>t?1:r<t?-1:0}function fP(r,t,e){let o=0,n=r.length,s=0,a=!1;for(;o<n;){s=o+(n-o>>>1);let i=e(t,r[s]);i>0?o=s+1:(n=s,a=!i)}return a?o:-o-1}function ym(r,t,e,o,n){return gx(r,t,e,o,n,0)}function bm(r,t,e,o,n,s){return gx(r,t,e,o,n,0,!1,s,!0)}function wm(r,t,e,o,n,s){return gx(r,t,e,o,n,s,!0)}function gx(r,t,e,o,n,s,a=!1,i=!1,c=!1){let l=[];for(let h=0;h<t.length;h++)t[h]>n&&l.push({score:t[h],boxIndex:h,suppressBeginIndex:0});l.sort(Xw);let p=s>0?-.5/s:0,u=[],m=[];for(;u.length<e&&l.length>0;){let h=l.pop(),{score:x,boxIndex:b,suppressBeginIndex:I}=h;if(x<n)break;let T=!1;for(let E=u.length-1;E>=I;--E){let $=dP(r,b,u[E]);if($>=o){T=!0;break}if(h.score=h.score*hP(o,p,$),h.score<=n)break}h.suppressBeginIndex=u.length,T||(h.score===x?(u.push(b),m.push(h.score)):h.score>n&&jw(l,h,Xw))}let f=u.length,d=e-f;i&&d>0&&(u.push(...new Array(d).fill(0)),m.push(...new Array(d).fill(0)));let g={selectedIndices:u};return a&&(g.selectedScores=m),c&&(g.validOutputs=f),g}function dP(r,t,e){let o=r.subarray(t*4,t*4+4),n=r.subarray(e*4,e*4+4),s=Math.min(o[0],o[2]),a=Math.min(o[1],o[3]),i=Math.max(o[0],o[2]),c=Math.max(o[1],o[3]),l=Math.min(n[0],n[2]),p=Math.min(n[1],n[3]),u=Math.max(n[0],n[2]),m=Math.max(n[1],n[3]),f=(i-s)*(c-a),d=(u-l)*(m-p);if(f<=0||d<=0)return 0;let g=Math.max(s,l),h=Math.max(a,p),x=Math.min(i,u),b=Math.min(c,m),I=Math.max(x-g,0)*Math.max(b-h,0);return I/(f+d-I)}function hP(r,t,e){let o=Math.exp(t*e*e);return e<=r?o:0}function Xw(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}async function gP(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY){let s=C(r,"boxes","nonMaxSuppressionAsync"),a=C(t,"scores","nonMaxSuppressionAsync"),i=wr(s,a,e,o,n);e=i.maxOutputSize,o=i.iouThreshold,n=i.scoreThreshold;let c=await Promise.all([s.data(),a.data()]),l=c[0],p=c[1],{selectedIndices:u}=ym(l,p,e,o,n);return s!==r&&s.dispose(),a!==t&&a.dispose(),de(u,"int32")}var Yw=gP;function xP(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY,s=0){let a=C(r,"boxes","nonMaxSuppression"),i=C(t,"scores","nonMaxSuppression"),c=wr(a,i,e,o,n,s);e=c.maxOutputSize,o=c.iouThreshold,n=c.scoreThreshold,s=c.softNmsSigma;let l={boxes:a,scores:i},p={maxOutputSize:e,iouThreshold:o,scoreThreshold:n,softNmsSigma:s},u=N.runKernel(Sa,l,p);return{selectedIndices:u[0],selectedScores:u[1]}}var Zw=S({nonMaxSuppressionWithScore_:xP});async function yP(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY,s=0){let a=C(r,"boxes","nonMaxSuppressionAsync"),i=C(t,"scores","nonMaxSuppressionAsync"),c=wr(a,i,e,o,n,s);e=c.maxOutputSize,o=c.iouThreshold,n=c.scoreThreshold,s=c.softNmsSigma;let l=await Promise.all([a.data(),i.data()]),p=l[0],u=l[1],{selectedIndices:m,selectedScores:f}=wm(p,u,e,o,n,s);return a!==r&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:de(m,"int32"),selectedScores:de(f)}}var Qw=yP;function bP(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY,s=!1){let a=C(r,"boxes","nonMaxSuppression"),i=C(t,"scores","nonMaxSuppression"),c=wr(a,i,e,o,n,null),l=c.maxOutputSize,p=c.iouThreshold,u=c.scoreThreshold,m={boxes:a,scores:i},f={maxOutputSize:l,iouThreshold:p,scoreThreshold:u,padToMaxOutputSize:s},d=N.runKernel(Ia,m,f);return{selectedIndices:d[0],validOutputs:d[1]}}var Jw=S({nonMaxSuppressionPadded_:bP});async function wP(r,t,e,o=.5,n=Number.NEGATIVE_INFINITY,s=!1){let a=C(r,"boxes","nonMaxSuppressionAsync"),i=C(t,"scores","nonMaxSuppressionAsync"),c=wr(a,i,e,o,n,null),l=c.maxOutputSize,p=c.iouThreshold,u=c.scoreThreshold,[m,f]=await Promise.all([a.data(),i.data()]),{selectedIndices:d,validOutputs:g}=bm(m,f,l,p,u,s);return a!==r&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:de(d,"int32"),validOutputs:lt(g,"int32")}}var tC=wP;function CP(r,t,e=!1,o=!1){let n=C(r,"images","resizeBilinear");k(n.rank===3||n.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${n.rank}.`),k(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),k(o===!1||e===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let s=n,a=!1;n.rank===3&&(a=!0,s=P(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let[]=t,i={images:s},c={alignCorners:e,halfPixelCenters:o,size:t},l=N.runKernel(Ma,i,c);return a?P(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var Cm=S({resizeBilinear_:CP});function TP(r,t,e=!1,o=!1){let n=C(r,"images","resizeNearestNeighbor");k(n.rank===3||n.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${n.rank}.`),k(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),k(n.dtype==="float32"||n.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),k(o===!1||e===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let s=n,a=!1;n.rank===3&&(a=!0,s=P(n,[1,n.shape[0],n.shape[1],n.shape[2]]));let[]=t,i={images:s},c={alignCorners:e,halfPixelCenters:o,size:t},l=N.runKernel(Ba,i,c);return a?P(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var Tm=S({resizeNearestNeighbor_:TP});function IP(r,t="binary",e=!1,o=.5){let n=C(r,"image","threshold"),s=.2989,a=.587,i=.114,c=n.shape[0]*n.shape[1],l=j(de([o]),255),p,u,m,f;if(k(n.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${n.rank}.`),k(n.shape[2]===3||n.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${n.shape[2]}.`),k(n.dtype==="int32"||n.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${n.dtype}.`),k(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),n.shape[2]===3){[p,u,m]=br(n,[1,1,1],-1);let h=j(p,s),x=j(u,a),b=j(m,i);f=nt(nt(h,x),b)}else f=r;if(t==="otsu"){let h=ip(mt(qi(f),"int32"),xe([]),256);l=SP(h,c)}let d=e?Oo(f,l):so(f,l);return mt(j(d,255),"int32")}function SP(r,t){let e=de([-1]),o=de([0]),n=de([0]),s,a,i,c,l,p;for(let u=0;u<r.size-1;u++){s=yt(r,0,u+1),a=yt(r,u+1),l=Tt(kt(s),t),p=Tt(kt(a),t);let m=kt(j(s,Po(0,s.size)));i=Tt(m,kt(s));let f=Pr(a.shape,s.size),d=nt(Po(0,a.size),f),g=j(a,d);c=Tt(kt(g),kt(a));let h=ct(i,c),x=ct(i,c),b=j(l,p);n=j(j(b,h),x);let I=so(n,o);o=Be(I,n,o),e=Be(I,de([u]),e)}return e}var eC=S({threshold_:IP});function vP(r,t,e="nearest",o="constant",n=0,s){let a=C(r,"image","transform","float32"),i=C(t,"transforms","transform","float32");k(a.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${a.rank}.`),k(i.rank===2&&(i.shape[0]===a.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),k(s==null||s.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`);let c={image:a,transforms:i},l={interpolation:e,fillMode:o,fillValue:n,outputShape:s};return N.runKernel(ci,c,l)}var rC=S({transform_:vP});function NP(r,t,e){let o=C(r,"a","bandPart");k(o.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${o.rank}.`);let n=o.shape,[s,a]=o.shape.slice(-2),i,c;typeof t=="number"?(k(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),k(t<=s,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${s}).`),i=C(t<0?s:t,"numLower","bandPart")):(k(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),i=Be(os(t,0),s,co(t,s))),typeof e=="number"?(k(e%1===0,()=>`bandPart(): numUpper must be an integer, got ${e}.`),k(e<=a,()=>`bandPart(): numUpper (${e}) must not be greater than the number of columns (${a}).`),c=C(e<0?a:e,"numUpper","bandPart")):(k(e.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),c=Be(os(e,0),a,co(e,a)));let l=P(Po(0,s,1,"int32"),[-1,1]),p=Po(0,a,1,"int32"),u=ct(l,p),m=ao(Oo(u,i),Ai(u,pe(c))),f=qe([s,a],o.dtype);return P(ye(Ge(P(o,[-1,s,a])).map(d=>Be(m,d,f))),n)}var oC=S({bandPart_:NP});function kP(r){let t;if(Array.isArray(r)){t=!1,k(r!=null&&r.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");let n=r[0].shape[0];for(let s=1;s<r.length;++s)k(r[s].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${r[s].shape[0]} vs. ${n})`)}else t=!0,r=br(r,r.shape[0],0).map(n=>Mo(n,[0]));k(r.length<=r[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${r.length}) exceeds number of dimensions (${r[0].shape[0]}).`);let e=[],o=r;for(let n=0;n<r.length;++n)e.push(N.tidy(()=>{let s=o[n];if(n>0)for(let a=0;a<n;++a){let i=j(kt(j(e[a],s)),e[a]);s=ct(s,i)}return Tt(s,no(s,"euclidean"))}));return t?ye(e,0):e}var nC=S({gramSchmidt_:kP});function EP(r,t=!1){if(k(r.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${r.rank}`),r.rank===2)return sC(r,t);{let e=r.shape.slice(0,r.shape.length-2).reduce((c,l)=>c*l),o=Ge(P(r,[e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),n=[],s=[];o.forEach(c=>{let[l,p]=sC(c,t);n.push(l),s.push(p)});let a=P(ye(n,0),r.shape),i=P(ye(s,0),r.shape);return[a,i]}}function sC(r,t=!1){return N.tidy(()=>{k(r.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${r.shape.length}D Tensor.`);let e=r.shape[0],o=r.shape[1],n=Sp(e),s=We(r),a=Vo([[1]],[1,1]),i=We(a),c=e>=o?o:e;for(let l=0;l<c;++l){let p=s,u=i,m=n;[i,s,n]=N.tidy(()=>{let f=yt(s,[l,l],[e-l,1]),d=no(f),g=yt(s,[l,l],[1,1]),h=Be(so(g,0),Vo([[-1]]),Vo([[1]])),x=ct(g,j(h,d)),b=Tt(f,x);b.shape[0]===1?i=We(a):i=Ot([a,yt(b,[1,0],[b.shape[0]-1,b.shape[1]])],0);let I=pe(Tt(vt(h,x),d)),T=yt(s,[l,0],[e-l,o]),E=j(I,i),$=Go(i);if(l===0)s=ct(T,vt(E,vt($,T)));else{let _=ct(T,vt(E,vt($,T)));s=Ot([yt(s,[0,0],[l,o]),_],0)}let A=Go(E),D=yt(n,[0,l],[e,n.shape[1]-l]);if(l===0)n=ct(D,vt(vt(D,i),A));else{let _=ct(D,vt(vt(D,i),A));n=Ot([yt(n,[0,0],[e,l]),_],1)}return[i,s,n]}),Zt([p,u,m])}return!t&&e>o&&(n=yt(n,[0,0],[e,o]),s=yt(s,[0,0],[o,o])),[n,s]})}var aC=S({qr_:EP});var Xt;(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Xt||(Xt={}));function $P(r,t,e=Xt.SUM_BY_NONZERO_WEIGHTS){let o=C(r,"losses","computeWeightedLoss"),n=null;t!=null&&(n=C(t,"weights","computeWeightedLoss"));let s=n==null?o:j(o,n);if(e===Xt.NONE)return s;if(e===Xt.SUM)return kt(s);if(e===Xt.MEAN){if(n==null)return io(s);{let a=o.size/n.size,i=Tt(kt(s),kt(n));return a>1?Tt(i,lt(a)):i}}if(e===Xt.SUM_BY_NONZERO_WEIGHTS){if(n==null)return Tt(kt(s),lt(o.size));{let a=j(n,Vr(o.shape)),i=mt(kt(Mi(a,lt(0))),"float32");return Tt(kt(s),i)}}throw Error(`Unknown reduction: ${e}`)}var ke=S({computeWeightedLoss_:$P});function AP(r,t,e,o=Xt.SUM_BY_NONZERO_WEIGHTS){let n=C(r,"labels","absoluteDifference"),s=C(t,"predictions","absoluteDifference"),a=null;e!=null&&(a=C(e,"weights","absoluteDifference")),Bt(n.shape,s.shape,"Error in absoluteDifference: ");let i=ie(ct(n,s));return ke(i,a,o)}var iC=S({absoluteDifference_:AP});function RP(r,t,e,o,n=Xt.SUM_BY_NONZERO_WEIGHTS){let s=C(r,"labels","cosineDistance"),a=C(t,"predictions","cosineDistance"),i=null;o!=null&&(i=C(o,"weights","cosineDistance")),Bt(s.shape,a.shape,"Error in cosineDistance: ");let c=lt(1),l=ct(c,kt(j(s,a),e,!0));return ke(l,i,n)}var cC=S({cosineDistance_:RP});function DP(r,t,e,o=Xt.SUM_BY_NONZERO_WEIGHTS){let n=C(r,"labels","hingeLoss"),s=C(t,"predictions","hingeLoss"),a=null;e!=null&&(a=C(e,"weights","hingeLoss")),Bt(n.shape,s.shape,"Error in hingeLoss: ");let i=lt(1);n=ct(j(lt(2),n),i);let c=Gr(ct(i,j(n,s)));return ke(c,a,o)}var lC=S({hingeLoss_:DP});function FP(r,t,e,o=1,n=Xt.SUM_BY_NONZERO_WEIGHTS){let s=C(r,"labels","huberLoss"),a=C(t,"predictions","huberLoss"),i=null;e!=null&&(i=C(e,"weights","huberLoss")),Bt(s.shape,a.shape,"Error in huberLoss: ");let c=lt(o),l=ie(ct(a,s)),p=co(l,c),u=ct(l,p),m=nt(j(lt(.5),ce(p)),j(c,u));return ke(m,i,n)}var pC=S({huberLoss_:FP});function _P(r,t,e,o=1e-7,n=Xt.SUM_BY_NONZERO_WEIGHTS){let s=C(r,"labels","logLoss"),a=C(t,"predictions","logLoss"),i=null;e!=null&&(i=C(e,"weights","logLoss")),Bt(s.shape,a.shape,"Error in logLoss: ");let c=lt(1),l=lt(o),p=pe(j(s,yr(nt(a,l)))),u=j(ct(c,s),yr(nt(ct(c,a),l))),m=ct(p,u);return ke(m,i,n)}var uC=S({logLoss_:_P});function OP(r,t,e,o=Xt.SUM_BY_NONZERO_WEIGHTS){let n=C(r,"labels","meanSquaredError"),s=C(t,"predictions","meanSquaredError"),a=null;e!=null&&(a=C(e,"weights","meanSquaredError")),Bt(n.shape,s.shape,"Error in meanSquaredError: ");let i=ji(n,s);return ke(i,a,o)}var mC=S({meanSquaredError_:OP});function PP(r,t){let e=C(r,"labels","sigmoidCrossEntropyWithLogits"),o=C(t,"logits","sigmoidCrossEntropyWithLogits");Bt(e.shape,o.shape,"Error in sigmoidCrossEntropyWithLogits: ");let n=Gr(o),s=j(o,e),a=Di(He(pe(ie(o))));return nt(ct(n,s),a)}function LP(r,t,e,o=0,n=Xt.SUM_BY_NONZERO_WEIGHTS){let s=C(r,"multiClassLabels","sigmoidCrossEntropy"),a=C(t,"logits","sigmoidCrossEntropy"),i=null;if(e!=null&&(i=C(e,"weights","sigmoidCrossEntropy")),Bt(s.shape,a.shape,"Error in sigmoidCrossEntropy: "),o>0){let l=lt(o),p=lt(1),u=lt(.5);s=nt(j(s,ct(p,l)),j(u,l))}let c=PP(s,a);return ke(c,i,n)}var fC=S({sigmoidCrossEntropy_:LP});function BP(r,t,e=-1){if(e===-1&&(e=t.rank-1),e!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${e}`);return Re((n,s,a)=>{let c=_i(s,[e],!0),l=ct(mt(s,"float32"),c);a([n,l]);let p=pe(j(l,n));return{value:kt(p,[e]),gradFunc:(f,d)=>{let[g,h]=d,x=Fo(f.shape,[e]);return[j(P(f,x),ct(mt(g,"float32"),He(h))),j(P(f,x),ct(He(h),mt(g,"float32")))]}}})(r,t)}function MP(r,t,e,o=0,n=Xt.SUM_BY_NONZERO_WEIGHTS){let s=C(r,"onehotLabels","softmaxCrossEntropy"),a=C(t,"logits","softmaxCrossEntropy"),i=null;if(e!=null&&(i=C(e,"weights","softmaxCrossEntropy")),Bt(s.shape,a.shape,"Error in softmaxCrossEntropy: "),o>0){let l=lt(o),p=lt(1),u=lt(s.shape[1]);s=nt(j(s,ct(p,l)),Tt(l,u))}let c=BP(s,a);return ke(c,i,n)}var dC=S({softmaxCrossEntropy_:MP});function VP(r,t,e,o){let n=C(r,"indices","sparseFillEmptyRows","int32"),s=C(t,"values","sparseFillEmptyRows"),a=C(e,"denseShape","sparseFillEmptyRows","int32"),i=C(o,"defaultValue","sparseFillEmptyRows",s.dtype);if(n.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${n.shape}`);if(s.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${s.shape}`);if(a.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${a.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);let c={indices:n,values:s,denseShape:a,defaultValue:i},l=N.runKernel(Ya,c);return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}var hC=S({sparseFillEmptyRows_:VP});function GP(r,t,e){let o=C(r,"inputIndices","sparseReshape","int32"),n=C(t,"inputShape","sparseReshape","int32"),s=C(e,"newShape","sparseReshape","int32");if(o.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${o.shape}`);if(n.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${n.shape}`);if(s.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${s.shape}`);let a={inputIndices:o,inputShape:n,newShape:s},i=N.runKernel(Za,a);return{outputIndices:i[0],outputShape:i[1]}}var gC=S({sparseReshape_:GP});function UP(r,t,e){let o=C(r,"data","sparseSegmentMean"),n=C(t,"indices","sparseSegmentMean","int32"),s=C(e,"segmentIds","sparseSegmentMean","int32");if(o.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${n.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${s.shape}`);let a={data:o,indices:n,segmentIds:s};return N.runKernel(Qa,a)}var xC=S({sparseSegmentMean_:UP});function zP(r,t,e){let o=C(r,"data","sparseSegmentSum"),n=C(t,"indices","sparseSegmentSum","int32"),s=C(e,"segmentIds","sparseSegmentSum","int32");if(o.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${n.shape}`);if(s.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${s.shape}`);let a={data:o,indices:n,segmentIds:s};return N.runKernel(Ja,a)}var yC=S({sparseSegmentSum_:zP});function WP(r,t,e,o,n,s,a,i){let c=C(r,"data","stringNGrams","string");if(c.dtype!=="string")throw new Error("Data must be of datatype string");if(c.shape.length!==1)throw new Error(`Data must be a vector, saw: ${c.shape}`);let l=C(t,"dataSplits","stringNGrams");if(l.dtype!=="int32")throw new Error("Data splits must be of datatype int32");let p={separator:e,nGramWidths:o,leftPad:n,rightPad:s,padWidth:a,preserveShortSequences:i},u={data:c,dataSplits:l},m=N.runKernel(ri,u,p);return{nGrams:m[0],nGramsSplits:m[1]}}var bC=S({stringNGrams_:WP});function HP(r,t,e=!0){let o=C(r,"input","stringSplit","string"),n=C(t,"delimiter","stringSplit","string");if(o.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${o.shape}`);if(n.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${n.shape}`);let s={skipEmpty:e},a={input:o,delimiter:n},i=N.runKernel(oi,a,s);return{indices:i[0],values:i[1],shape:i[2]}}var wC=S({stringSplit_:HP});function qP(r,t){let e=C(r,"input","stringToHashBucketFast","string"),o={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");let n={input:e};return N.runKernel(ni,n,o)}var CC=S({stringToHashBucketFast_:qP});function KP(r,t,e,o=!0){let n=C(r,"input","staticRegexReplace","string"),s={pattern:t,rewrite:e,replaceGlobal:o};return N.runKernel(Wn,{x:n},s)}var TC=S({staticRegexReplace_:KP});var IC={fft:Lo,ifft:po,rfft:Bo,irfft:Ki},Im={hammingWindow:Vw,hannWindow:gm,frame:xm,stft:Gw},SC={flipLeftRight:zw,grayscaleToRGB:Ww,resizeNearestNeighbor:Tm,resizeBilinear:Cm,rgbToGrayscale:Hw,rotateWithOffset:qw,cropAndResize:Uw,nonMaxSuppression:Kw,nonMaxSuppressionAsync:Yw,nonMaxSuppressionWithScore:Zw,nonMaxSuppressionWithScoreAsync:Qw,nonMaxSuppressionPadded:Jw,nonMaxSuppressionPaddedAsync:tC,threshold:eC,transform:rC},vC={bandPart:oC,gramSchmidt:nC,qr:aC},NC={absoluteDifference:iC,computeWeightedLoss:ke,cosineDistance:cC,hingeLoss:lC,huberLoss:pC,logLoss:uC,meanSquaredError:mC,sigmoidCrossEntropy:fC,softmaxCrossEntropy:dC},kC={sparseFillEmptyRows:hC,sparseReshape:gC,sparseSegmentMean:xC,sparseSegmentSum:yC},EC={stringNGrams:bC,stringSplit:wC,stringToHashBucketFast:CC,staticRegexReplace:TC};var bx={};Et(bx,{Serializable:()=>tu,SerializationMap:()=>Sm,getRegisteredName:()=>XP,registerClass:()=>yx});var jP=new Map,xx=new Map,tu=class{getClassName(){return this.constructor.className}static fromConfig(t,e){return new t(e)}},Sm=class r{constructor(){this.classNameMap={}}static getMap(){return r.instance==null&&(r.instance=new r),r.instance}static register(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]}};function yx(r,t,e){k(r.className!=null,()=>"Class being registered does not have the static className property defined."),k(typeof r.className=="string",()=>"className is required to be a string, but got type "+typeof r.className),k(r.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof e>"u"&&(e=r.className);let o=e,n=t+">"+o;return Sm.register(r),jP.set(n,r),xx.set(r,n),r}function XP(r){return xx.has(r)?xx.get(r):r.className}var De=class extends tu{minimize(t,e=!1,o){let{value:n,grads:s}=this.computeGradients(t,o);if(o!=null){let a=o.map(i=>({name:i.name,tensor:s[i.name]}));this.applyGradients(a)}else this.applyGradients(s);return Zt(s),e?n:(n.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,e){return am(t,e)}dispose(){this.iterations_!=null&&Zt(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:lt(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}};Object.defineProperty(De,Symbol.hasInstance,{value:r=>r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null});var ss=class extends De{static get className(){return"Adadelta"}constructor(t,e,o=null){super(),this.learningRate=t,this.rho=e,this.epsilon=o,this.accumulatedGrads=[],this.accumulatedUpdates=[],o==null&&(this.epsilon=N.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=N.registeredVariables[o],a=!1;this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accum_grad`,variable:gt(()=>oe(s).variable(a))}),this.accumulatedUpdates[n]==null&&(this.accumulatedUpdates[n]={originalName:`${o}/accum_var`,variable:gt(()=>oe(s).variable(a))});let i=Array.isArray(t)?t[n].tensor:t[o];if(i==null)return;let c=this.accumulatedGrads[n].variable,l=this.accumulatedUpdates[n].variable;gt(()=>{let p=nt(j(c,this.rho),j(ce(i),1-this.rho)),u=j(Tt(Ne(nt(l,this.epsilon)),Ne(nt(c,this.epsilon))),i),m=nt(j(l,this.rho),j(ce(u),1-this.rho));c.assign(p),l.assign(m);let f=nt(j(u,-this.learningRate),s);s.assign(f)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Zt(this.accumulatedGrads.map(t=>t.variable)),Zt(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){let t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=t.length/2,o=!1;this.accumulatedGrads=t.slice(0,e).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedUpdates=t.slice(e,e*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.rho,e.epsilon)}};var as=class extends De{static get className(){return"Adagrad"}constructor(t,e=.1){super(),this.learningRate=t,this.initialAccumulatorValue=e,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=N.registeredVariables[o];this.accumulatedGrads[n]==null&&(this.accumulatedGrads[n]={originalName:`${o}/accumulator`,variable:gt(()=>Pr(s.shape,this.initialAccumulatorValue).variable(!1))});let a=Array.isArray(t)?t[n].tensor:t[o];if(a==null)return;let i=this.accumulatedGrads[n].variable;gt(()=>{let c=nt(i,ce(a));i.assign(c);let l=nt(j(Tt(a,Ne(nt(c,N.backend.epsilon()))),-this.learningRate),s);s.assign(l)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Zt(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=!1;this.accumulatedGrads=t.map(o=>({originalName:o.name,variable:o.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,e){return new t(e.learningRate,e.initialAccumulatorValue)}};var is=class extends De{static get className(){return"Adam"}constructor(t,e,o,n=null){super(),this.learningRate=t,this.beta1=e,this.beta2=o,this.epsilon=n,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],gt(()=>{this.accBeta1=lt(e).variable(),this.accBeta2=lt(o).variable()}),n==null&&(this.epsilon=N.backend.epsilon())}applyGradients(t){let e=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);gt(()=>{let o=ct(1,this.accBeta1),n=ct(1,this.accBeta2);e.forEach((s,a)=>{let i=N.registeredVariables[s],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${s}/m`,variable:gt(()=>oe(i).variable(c))}),this.accumulatedSecondMoment[a]==null&&(this.accumulatedSecondMoment[a]={originalName:`${s}/v`,variable:gt(()=>oe(i).variable(c))});let l=Array.isArray(t)?t[a].tensor:t[s];if(l==null)return;let p=this.accumulatedFirstMoment[a].variable,u=this.accumulatedSecondMoment[a].variable,m=nt(j(p,this.beta1),j(l,1-this.beta1)),f=nt(j(u,this.beta2),j(ce(l),1-this.beta2)),d=Tt(m,o),g=Tt(f,n);p.assign(m),u.assign(f);let h=nt(j(Tt(d,nt(Ne(g),this.epsilon)),-this.learningRate),i);i.assign(h)}),this.accBeta1.assign(j(this.accBeta1,this.beta1)),this.accBeta2.assign(j(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Zt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&Zt(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t),gt(()=>{this.accBeta1.assign(xr(this.beta1,this.iterations_+1)),this.accBeta2.assign(xr(this.beta2,this.iterations_+1))});let e=t.length/2,o=!1;this.accumulatedFirstMoment=t.slice(0,e).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedSecondMoment=t.slice(e,e*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon)}};var cs=class extends De{static get className(){return"Adamax"}constructor(t,e,o,n=null,s=0){super(),this.learningRate=t,this.beta1=e,this.beta2=o,this.epsilon=n,this.decay=s,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],gt(()=>{this.iteration=lt(0).variable(),this.accBeta1=lt(e).variable()}),n==null&&(this.epsilon=N.backend.epsilon())}applyGradients(t){let e=Array.isArray(t)?t.map(o=>o.name):Object.keys(t);gt(()=>{let o=ct(1,this.accBeta1),n=Tt(-this.learningRate,nt(j(this.iteration,this.decay),1));e.forEach((s,a)=>{let i=N.registeredVariables[s],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${s}/m`,variable:oe(i).variable(c)}),this.accumulatedWeightedInfNorm[a]==null&&(this.accumulatedWeightedInfNorm[a]={originalName:`${s}/v`,variable:oe(i).variable(c)});let l=Array.isArray(t)?t[a].tensor:t[s];if(l==null)return;let p=this.accumulatedFirstMoment[a].variable,u=this.accumulatedWeightedInfNorm[a].variable,m=nt(j(p,this.beta1),j(l,1-this.beta1)),f=j(u,this.beta2),d=ie(l),g=Bi(f,d);p.assign(m),u.assign(g);let h=nt(j(Tt(n,o),Tt(m,nt(g,this.epsilon))),i);i.assign(h)}),this.iteration.assign(nt(this.iteration,1)),this.accBeta1.assign(j(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Zt(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&Zt(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,e){return new t(e.learningRate,e.beta1,e.beta2,e.epsilon,e.decay)}};var uo=class extends De{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=Array.isArray(t)?t[n].tensor:t[o];if(s==null)return;let a=N.registeredVariables[o];gt(()=>{let i=nt(j(this.c,s),a);a.assign(i)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=Le(lt(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,e){return new t(e.learningRate)}};var ls=class extends uo{static get className(){return"Momentum"}constructor(t,e,o=!1){super(t),this.learningRate=t,this.momentum=e,this.useNesterov=o,this.accumulations=[],this.m=lt(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=N.registeredVariables[o];this.accumulations[n]==null&&(this.accumulations[n]={originalName:`${o}/momentum`,variable:gt(()=>oe(s).variable(!1))});let a=this.accumulations[n].variable,i=Array.isArray(t)?t[n].tensor:t[o];i!=null&&gt(()=>{let c,l=nt(j(this.m,a),i);this.useNesterov?c=nt(j(this.c,nt(i,j(l,this.m))),s):c=nt(j(this.c,l),s),a.assign(l),s.assign(c)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Zt(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=!1;this.accumulations=t.map(o=>({originalName:o.name,variable:o.tensor.variable(e)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,e){return new t(e.learningRate,e.momentum,e.useNesterov)}};var ps=class extends De{static get className(){return"RMSProp"}constructor(t,e=.9,o=0,n=null,s=!1){if(super(),this.learningRate=t,this.decay=e,this.momentum=o,this.epsilon=n,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=s,n==null&&(this.epsilon=N.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(o=>o.name):Object.keys(t)).forEach((o,n)=>{let s=N.registeredVariables[o],a=!1;this.accumulatedMeanSquares[n]==null&&(this.accumulatedMeanSquares[n]={originalName:`${o}/rms`,variable:gt(()=>oe(s).variable(a))}),this.accumulatedMoments[n]==null&&(this.accumulatedMoments[n]={originalName:`${o}/momentum`,variable:gt(()=>oe(s).variable(a))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${o}/mg`,variable:gt(()=>oe(s).variable(a))});let i=Array.isArray(t)?t[n].tensor:t[o];if(i==null)return;let c=this.accumulatedMeanSquares[n].variable,l=this.accumulatedMoments[n].variable;gt(()=>{let p=nt(j(c,this.decay),j(ce(i),1-this.decay));if(this.centered){let u=this.accumulatedMeanGrads[n].variable,m=nt(j(u,this.decay),j(i,1-this.decay)),f=Tt(j(i,this.learningRate),Ne(ct(p,nt(ce(m),this.epsilon)))),d=nt(j(l,this.momentum),f);c.assign(p),u.assign(m),l.assign(d);let g=ct(s,d);s.assign(g)}else{let u=nt(j(c,this.decay),j(ce(i),1-this.decay)),m=nt(j(l,this.momentum),Tt(j(i,this.learningRate),Ne(nt(u,this.epsilon))));c.assign(u),l.assign(m);let f=ct(s,m);s.assign(f)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Zt(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Zt(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&Zt(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){let t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(t){t=await this.extractIterations(t);let e=this.centered?t.length/3:t.length/2,o=!1;this.accumulatedMeanSquares=t.slice(0,e).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.accumulatedMoments=t.slice(e,e*2).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})),this.centered&&(this.accumulatedMeanGrads=t.slice(e*2,e*3).map(n=>({originalName:n.name,variable:n.tensor.variable(o)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,e){return new t(e.learningRate,e.decay,e.momentum,e.epsilon,e.centered)}};var YP=[ss,as,is,cs,ls,ps,uo];function $C(){for(let r of YP)yx(r)}var Hc={};Et(Hc,{CompositeArrayBuffer:()=>ve,browserFiles:()=>RC,browserHTTPRequest:()=>OC,concatenateArrayBuffers:()=>R0,copyModel:()=>H0,decodeWeights:()=>Qu,decodeWeightsStream:()=>Ju,encodeWeights:()=>k0,fromMemory:()=>PC,fromMemorySync:()=>vx,getLoadHandlers:()=>O0,getModelArtifactsForJSON:()=>Lc,getModelArtifactsForJSONSync:()=>Xh,getModelArtifactsInfoForJSON:()=>Jr,getSaveHandlers:()=>_0,getWeightSpecs:()=>ql,http:()=>Nm,isHTTPScheme:()=>vm,listModels:()=>z0,loadWeights:()=>FC,moveModel:()=>q0,registerLoadRouter:()=>F0,registerSaveRouter:()=>D0,removeModel:()=>W0,weightsLoaderFactory:()=>Ix,withSaveHandler:()=>LC,withSaveHandlerSync:()=>BC});var ZP="model",QP=".json",JP=".weights.bin";function AC(r){return new Promise(t=>setTimeout(t)).then(r)}var Wc=class r{constructor(t){if(!F().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),(t==null||t.length===0)&&(t=ZP),this.modelJsonFileName=t+QP,this.weightDataFileName=t+JP}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");let e=ve.join(t.weightData),o=window.URL.createObjectURL(new Blob([e],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],s=tm(t,n),a=window.URL.createObjectURL(new Blob([JSON.stringify(s)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=a,await AC(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){let c=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;c.download=this.weightDataFileName,c.href=o,await AC(()=>c.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:Jr(t)}}}};Wc.URL_SCHEME="downloads://";var wx=class{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,e)=>{let o=new FileReader;o.onload=n=>{let s=JSON.parse(n.target.result),a=s.modelTopology;if(a==null){e(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(s.weightsManifest==null){e(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:a});return}let c=Lc(s,l=>this.loadWeights(l));t(c)},o.onerror=n=>e(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),o.readAsText(this.jsonFile)})}loadWeights(t){let e=[],o=[];for(let a of t)e.push(...a.weights),o.push(...a.paths);let n=this.checkManifestAndWeightFiles(t),s=o.map(a=>this.loadWeightsFile(a,n[a]));return Promise.all(s).then(a=>[e,a])}loadWeightsFile(t,e){return new Promise((o,n)=>{let s=new FileReader;s.onload=a=>{let i=a.target.result;o(i)},s.onerror=a=>n(`Failed to weights data from file of path '${t}'.`),s.readAsArrayBuffer(e)})}checkManifestAndWeightFiles(t){let e=[],o=this.weightsFiles.map(s=>jh(s.name)),n={};for(let s of t)s.paths.forEach(a=>{let i=jh(a);if(e.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(e.push(i),o.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);n[a]=this.weightsFiles[o.indexOf(i)]});if(e.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${e.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return n}},tL=r=>F().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Wc.URL_SCHEME)?eL(r.slice(Wc.URL_SCHEME.length)):null;fe.registerSaveRouter(tL);function eL(r="model"){return new Wc(r)}function RC(r){return new wx(r)}function Cx(r,t,e,o){a(r),e=e??0,o=o??1,i(e,o);let n=0,s=c=>(c.then(l=>{let p=e+ ++n/r.length*(o-e);return t(p),l}),c);function a(c){k(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function i(c,l){k(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),k(l>=0&&l<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${l}`),k(l>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${l}`)}return Promise.all(r.map(s))}async function Tx(r,t){t==null&&(t={});let e=t.fetchFunc==null?F().platform.fetch:t.fetchFunc,o=r.map(u=>e(u,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(o):await Cx(o,t.onProgress,0,.5)).map(u=>u.arrayBuffer());return t.onProgress==null?await Promise.all(i):await Cx(i,t.onProgress,.5,1)}function DC(r,t){var e;let o=t.fetchFunc==null?F().platform.fetch:t.fetchFunc,n=0,s;return(e=t.onProgress)===null||e===void 0||e.call(t,0),new ReadableStream({pull:async a=>{for(var i;n<r.length;){s||(s=(await o(r[n],t.requestInit,{isBinary:!0})).body.getReader());let{done:c,value:l}=await s.read();if(c){n++,s=void 0,(i=t.onProgress)===null||i===void 0||i.call(t,n/r.length);continue}a.enqueue(l);return}a.close()}})}async function FC(r,t="",e,o){return Ix(a=>Tx(a,{requestInit:o}))(r,t,e)}function Ix(r){return async(t,e="",o)=>{let n=t.map(()=>!1),s={},a=o!=null?o.map(()=>!1):[],i=[];if(t.forEach((f,d)=>{let g=0;f.weights.forEach(h=>{let x="quantization"in h?h.quantization.dtype:h.dtype,b=$o[x]*bt(h.shape),I=()=>{n[d]=!0,s[d]==null&&(s[d]=[]),s[d].push({manifestEntry:h,groupOffset:g,sizeBytes:b})};o!=null?o.forEach((T,E)=>{T===h.name&&(I(),a[E]=!0)}):I(),i.push(h.name),g+=b})}),!a.every(f=>f)){let f=o.filter((d,g)=>!a[g]);throw new Error(`Could not find weights in manifest with names: ${f.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}let c=n.reduce((f,d,g)=>(d&&f.push(g),f),[]),l=[];c.forEach(f=>{t[f].paths.forEach(d=>{let g=e+(e.endsWith("/")?"":"/")+d;l.push(g)})});let p=await r(l),u={},m=0;return c.forEach(f=>{let d=t[f].paths.length,g=new ve(p.slice(m,m+d));s[f].forEach(x=>{let b=g.slice(x.groupOffset,x.groupOffset+x.sizeBytes),I=Qu(b,[x.manifestEntry]);for(let T in I)u[T]=I[T]}),m+=d}),u}}var rL="application/octet-stream",oL="application/json",eu=class{constructor(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.weightUrlConverter=e.weightUrlConverter,e.fetchFunc!=null?(k(typeof e.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=e.fetchFunc):this.fetch=F().platform.fetch,k(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&k(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{},this.loadOptions=e}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);e.body=new FormData;let o=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],n=tm(t,o);if(e.body.append("model.json",new Blob([JSON.stringify(n)],{type:oL}),"model.json"),t.weightData!=null){let a=ve.join(t.weightData);e.body.append("model.weights.bin",new Blob([a],{type:rL}),"model.weights.bin")}let s=await this.fetch(this.path,e);if(s.ok)return{modelArtifactsInfo:Jr(t),responses:[s]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${s.status}.`)}async loadModelJSON(){let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let e;try{e=await t.json()}catch{let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}let o=e.modelTopology,n=e.weightsManifest;if(o==null&&n==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e}async load(){if(this.loadOptions.streamWeights)return this.loadStream();let t=await this.loadModelJSON();return Lc(t,e=>this.loadWeights(e))}async loadStream(){let t=await this.loadModelJSON(),e=await this.getWeightUrls(t.weightsManifest),o=ql(t.weightsManifest),n=()=>DC(e,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:o,getWeightStream:n})}async getWeightUrls(t){let e=Array.isArray(this.path)?this.path[1]:this.path,[o,n]=nL(e),s=this.weightPathPrefix||o,a=[],i=[];for(let c of t)for(let l of c.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(l)):a.push(s+l+n);return this.weightUrlConverter&&a.push(...await Promise.all(i)),a}async loadWeights(t){let e=await this.getWeightUrls(t),o=ql(t),n=await Tx(e,this.loadOptions);return[o,n]}};eu.URL_SCHEME_REGEX=/^https?:\/\//;function nL(r){let t=r.lastIndexOf("/"),e=r.lastIndexOf("?"),o=r.substring(0,t),n=e>t?r.substring(e):"";return[o+"/",n]}function vm(r){return r.match(eu.URL_SCHEME_REGEX)!=null}var _C=(r,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let e=!0;if(Array.isArray(r)?e=r.every(o=>vm(o)):e=vm(r),e)return Nm(r,t)}return null};fe.registerSaveRouter(_C);fe.registerLoadRouter(_C);function Nm(r,t){return new eu(r,t)}function OC(r,t){return Nm(r,t)}var ru=class{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}},km=class{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}},Sx=class{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=e=>Promise.resolve(t.save(e)))}};function PC(r,t,e,o){let n=arguments;return new Sx(vx(...n))}function vx(r,t,e,o){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new ru(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ru({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ru({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:o}))}function LC(r){return new km(r)}function BC(r){return new km(r)}var Nx={};Et(Nx,{confusionMatrix:()=>MC});function sL(r,t,e){let o=C(r,"labels","confusionMatrix"),n=C(t,"predictions","confusionMatrix");k(e==null||e>0&&Number.isInteger(e),()=>`If provided, numClasses must be a positive integer, but got ${e}`),k(o.rank===1,()=>`Expected the rank of labels to be 1, but got ${o.rank}`),k(n.rank===1,()=>`Expected the rank of predictions to be 1, but got ${n.rank}`),k(o.shape[0]===n.shape[0],()=>`Mismatch in the number of examples: ${o.shape[0]} vs. ${n.shape[0]}. Labels and predictions should have the same number of elements.`),k(e>0&&Number.isInteger(e),()=>`numClasses is required to be a positive integer, but got ${e}`);let s=ns(mt(o,"int32"),e),a=ns(mt(n,"int32"),e),i=Go(s),c=vt(i,a);return mt(c,"int32")}var MC=S({confusionMatrix_:sL});var kx={};Et(kx,{draw:()=>fL,fromPixels:()=>dL,fromPixelsAsync:()=>pL,toPixels:()=>mL});var tc,VC=!1;function GC(r,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let e=!1,o=!1,n=!1,s=!1,a=!1,i=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)o=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)n=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)s=!0;else if(r.getContext!=null)a=!0;else if(typeof ImageBitmap<"u"&&r instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${r.constructor.name}`);if(di($c,N.backendName)!=null){let d={pixels:r},g={numChannels:t};return N.runKernel($c,d,g)}let[l,p]=n?[r.videoWidth,r.videoHeight]:[r.width,r.height],u;if(a)u=r.getContext("2d").getImageData(0,0,l,p).data;else if(o||e)u=r.data;else if(s||n||i){if(tc==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")tc=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else tc=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});tc.canvas.width=l,tc.canvas.height=p,tc.drawImage(r,0,0,l,p),u=tc.getImageData(0,0,l,p).data}let m;if(t===4)m=new Int32Array(u);else{let d=l*p;m=new Int32Array(d*t);for(let g=0;g<d;g++)for(let h=0;h<t;++h)m[g*t+h]=u[g*4+h]}return jp(m,[p,l,t],"int32")}function aL(r){return r!=null&&r.data instanceof Uint8Array}function iL(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function cL(r){return r!=null&&r.width!==0&&r.height!==0}function lL(r){return iL()&&!(r instanceof ImageBitmap)&&cL(r)&&!aL(r)}async function pL(r,t=3){let e=null;if(F().getBool("WRAP_TO_IMAGEBITMAP")&&lL(r)){let o;try{o=await createImageBitmap(r,{premultiplyAlpha:"none"})}catch{o=null}o!=null&&o.width===r.width&&o.height===r.height?e=o:e=r}else e=r;return GC(e,t)}function UC(r){if(r.rank!==2&&r.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${r.rank}.`);let t=r.rank===2?1:r.shape[2];if(t>4||t===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if(r.dtype!=="float32"&&r.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${r.dtype}. Please use float32 or int32 tensors.`)}function uL(r){let t=r?.alpha||1;if(t>1||t<0)throw new Error(`Alpha value ${t} is suppoed to be in range [0 - 1].`)}async function mL(r,t){let e=C(r,"img","toPixels");if(!(r instanceof Rt)){let l=e;e=mt(l,"int32"),l.dispose()}UC(e);let[o,n]=e.shape.slice(0,2),s=e.rank===2?1:e.shape[2],a=await e.data(),i=e.dtype==="float32"?255:1,c=new Uint8ClampedArray(n*o*4);for(let l=0;l<o*n;++l){let p=[0,0,0,255];for(let m=0;m<s;m++){let f=a[l*s+m];if(e.dtype==="float32"){if(f<0||f>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${f}.`)}else if(e.dtype==="int32"&&(f<0||f>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${f}.`);s===1?(p[0]=f*i,p[1]=f*i,p[2]=f*i):p[m]=f*i}let u=l*4;c[u+0]=Math.round(p[0]),c[u+1]=Math.round(p[1]),c[u+2]=Math.round(p[2]),c[u+3]=Math.round(p[3])}if(t!=null){VC||di(Tc,N.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),VC=!0),t.width=n,t.height=o;let l=t.getContext("2d"),p=new ImageData(c,n,o);l.putImageData(p,0,0)}return e!==r&&e.dispose(),c}function fL(r,t,e){let o=C(r,"img","draw");if(!(r instanceof Rt)){let a=o;o=mt(a,"int32"),a.dispose()}UC(o),uL(e?.imageOptions);let n={image:o},s={canvas:t,options:e};N.runKernel(Tc,n,s)}var dL=S({fromPixels_:GC});var Ex={};Et(Ex,{prepareAndValidate:()=>zC});function zC(r,t){let e=r.shape.length,o=t.shape.length;if(e<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${e}.`);if(o<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${o}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[o-1]>e)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[o-1]} vs. ${e}`);if(bt(r.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${r.shape}.`);let n=t.shape,s=n[n.length-1],a=1;for(let u=0;u<n.length-1;++u)a*=n[u];let i=r.shape,c=n.slice();c.pop();let l=1;for(let u=s;u<e;++u)l*=i[u],c.push(i[u]);let p=[...Yr(r.shape).map(u=>u/l),1].slice(0,s);return[c,a,l,p]}var ue={};Et(ue,{assertParamsValid:()=>gL,computeFlatOffset:()=>CL,computeOutShape:()=>yL,getNormalizedAxes:()=>bL,isSliceContinous:()=>wL,maskToAxes:()=>xL,parseSliceParams:()=>TL,sliceInfo:()=>IL,startForAxis:()=>ZC,startIndicesWithElidedDims:()=>jC,stopForAxis:()=>QC,stopIndicesWithElidedDims:()=>XC,stridesForAxis:()=>YC,stridesWithElidedDims:()=>HC});var $x=-2,hL=-1;function gL(r,t,e){let o=r.shape.length;k(o===t.length,()=>`Error in slice${o}D: Length of begin ${t} must match the rank of the array (${o}).`),k(o===e.length,()=>`Error in slice${o}D: Length of size ${e} must match the rank of the array (${o}).`);for(let n=0;n<o;++n)k(t[n]+e[n]<=r.shape[n],()=>`Error in slice${o}D: begin[${n}] + size[${n}] (${t[n]+e[n]}) would overflow input.shape[${n}] (${r.shape[n]})`)}function xL(r){let t=[],e=0;for(;r>0;)r&1&&t.push(e),r/=2,e++;return t}function yL(r,t,e){let o=[];for(let n=0;n<r.length;n++)o[n]=Math.ceil((t[n]-r[n])/e[n]);return o}function HC(r,t,e,o){let n=[...r];for(let s=n.length;s<o.length;s++)n.push(1);for(let s=0;s<e;s++)s===0?n[t]=1:(n.splice(t,0,1),n.pop());return n}function qC(r,t,e){return e<=r?e:e-(t-1)}function KC(r,t){let e=[];for(let o=0;o<r;o++)e.push(t+o);return e}function bL(r,t,e,o,n,s,a,i,c){let l=r.length,p=new Array(l),u=new Array(l),m=new Array(l);if(t.length&&e>0){let f=t[0],d=e+1;p=jC(a,f,d,o,r),u=XC(i,f,d,n,r),m=HC(s,f,d,r)}else for(let f=0;f<l;f++)p[f]=ZC(a,o,s,r,f,c),u[f]=QC(i,n,s,r,f,c),m[f]=YC(s,f,c);return{begin:p,end:u,strides:m}}function jC(r,t,e,o,n){let s=[...n],a=KC(e,t);for(let i=0;i<s.length;i++)if(a.indexOf(i)>-1)s[i]=0;else{let c=qC(t,e,i),l=o[c];r&1<<c&&(l=0),s[i]=l}return s}function XC(r,t,e,o,n){let s=[...n],a=KC(e,t);for(let i=0;i<s.length;i++)if(a.indexOf(i)>-1)s[i]=Number.MAX_SAFE_INTEGER;else{let c=qC(t,e,i),l=o[c];r&1<<c&&(l=Number.MAX_SAFE_INTEGER),s[i]=l}for(let i=0;i<s.length;i++){let c=n[i];s[i]<0&&(s[i]+=c),s[i]=hc(0,s[i],n[i])}return s}function YC(r,t,e){let o=r[t];return(e&1<<t||o==null)&&(o=1),o}function ZC(r,t,e,o,n,s){let a=t[n],i=e[n]||1;(r&1<<n||s&1<<n||a==null)&&(i>0?a=Number.MIN_SAFE_INTEGER:a=Number.MAX_SAFE_INTEGER);let c=o[n];return a<0&&(a+=c),a=hc(0,a,c-1),a}function QC(r,t,e,o,n,s){let a=t[n],i=e[n]||1;(r&1<<n||s&1<<n||a==null)&&(i>0?a=Number.MAX_SAFE_INTEGER:a=Number.MIN_SAFE_INTEGER);let c=o[n];return a<0&&(a+=c),i>0?a=hc(0,a,c):a=hc(-1,a,c-1),a}function wL(r,t,e){let o=e.length;for(let n=0;n<e.length;n++)if(e[n]>1){o=n;break}for(let n=o+1;n<e.length;n++)if(t[n]>0||e[n]!==r[n])return!1;return!0}function CL(r,t){let e=r.length>0?r[r.length-1]:1;for(let o=0;o<r.length-1;o++)e+=r[o]*t[o];return e}function TL(r,t,e){let o,n=r.shape.length;typeof t=="number"?o=[t,...new Array(n-1).fill(0)]:t.length<n?o=t.concat(new Array(n-t.length).fill(0)):o=t.slice(),o.forEach(a=>{k(a!==-1,()=>"slice() does not support negative begin indexing.")});let s;return e==null?s=new Array(n).fill(-1):typeof e=="number"?s=[e,...new Array(n-1).fill(-1)]:e.length<n?s=e.concat(new Array(n-e.length).fill(-1)):s=e,s=s.map((a,i)=>a>=0?a:(k(a===-1,()=>`Negative size values should be exactly -1 but got ${a} for the slice() size at index ${i}.`),r.shape[i]-o[i])),[o,s]}function IL(r,t,e,o,n,s,a,i,c){let l;if(o==null?(l=new Array(t.length),l.fill(1)):l=o,a!=null&&(a&a-1)!==0)throw new Error("Multiple ellipses in slice is not allowed.");let p=!1,u={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:e.slice(),strides:l.slice(),beginMask:n,endMask:s,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};for(let I=0;I<u.dims;I++)p&&(1<<I&i)!==0&&u.numAddAxisAfterEllipsis++,1<<I&a&&(p=!0);p||(u.ellipsisMask|=1<<u.dims,u.dims++);let m={dims:r.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};SL(u,m);let f=!0,d=!0,g=!0,h=[],x=[];for(let I=0;I<r.length;++I){if(m.strides[I]===0)throw Error(`strides[${I}] must be non-zero`);let T=!!(m.shrinkAxisMask&1<<I),E=r[I];if(E===-1){h.push(T?1:-1);continue}let $=[m.beginMask&1<<I,m.endMask&1<<I],A=[m.strides[I]>0?0:-1,m.strides[I]>0?E:E-1];if(T&&m.strides[I]<=0)throw Error("only stride 1 allowed on non-range indexing.");g=g&&m.strides[I]===1;let D=!!(m.beginMask&1<<I&&m.endMask&1<<I);if(m.beginValid&&m.endValid){if(T){let B=m.begin[I]<0?E+m.begin[I]:m.begin[I];if(m.begin[I]=B,m.end[I]=m.begin[I]+1,B<0||B>=E)throw Error(`slice index ${m.begin[I]} of dimension ${I} out of bounds.`)}else m.begin[I]=WC(m.begin[I],0,m.strides[I],E,$,A),m.end[I]=WC(m.end[I],1,m.strides[I],E,$,A);let L=m.strides[I]===1&&m.begin[I]===0&&m.end[I]===E;f=f&&L,d=d&&(I===0&&m.strides[I]===1||L)}else f=f&&m.strides[I]===1&&D,d=d&&(I===0&&m.strides[I]===1||D);let _,O=!1;if(m.beginValid&&m.endValid?(_=m.end[I]-m.begin[I],O=!0):T?(_=1,O=!0):D&&E>=0&&(m.strides[I]<0?_=-E:_=E,O=!0),O){let L;_===0||_<0!=m.strides[I]<0?L=0:L=Math.trunc(_/m.strides[I])+(_%m.strides[I]!==0?1:0),h.push(L)}else h.push(-1)}for(let I=0;I<m.finalShapeGatherIndices.length;++I){let T=m.finalShapeGatherIndices[I];T>=0?x.push(h[T]):T===$x&&x.push(1)}return{finalShapeSparse:x.filter((I,T)=>m.finalShapeGatherIndices[T]!==$x),finalShape:x,isIdentity:f,sliceDim0:d,isSimpleSlice:g,begin:m.begin,end:m.end,strides:m.strides}}function SL(r,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let e=0;t.beginValid=r.begin!=null,t.endValid=r.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let o=0;o<r.dims;o++)if(1<<o&r.ellipsisMask){let n=Math.min(t.dims-(r.dims-o)+1+r.numAddAxisAfterEllipsis,t.dims);for(;e<n;e++)t.begin[e]=0,t.end[e]=0,t.strides[e]=1,t.beginMask|=1<<e,t.endMask|=1<<e,t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[e]=o}else if(1<<o&r.newAxisMask)t.finalShapeGatherIndices.push($x),t.finalShapeGatherIndicesSparse.push(-1);else{if(e===t.begin.length)throw Error(`Index out of range using input dim ${e}; input has only ${t.dims} dims, ${t.begin.length}.`);r.begin!=null&&(t.begin[e]=r.begin[o]),r.end!=null&&(t.end[e]=r.end[o]),t.strides[e]=r.strides[o],r.beginMask&1<<o&&(t.beginMask|=1<<e),r.endMask&1<<o&&(t.endMask|=1<<e),r.shrinkAxisMask&1<<o?(t.finalShapeGatherIndices.push(hL),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<e):(t.finalShapeGatherIndices.push(e),t.finalShapeGatherIndicesSparse.push(o)),t.inputShapeGatherIndicesSparse[e]=o,e++}}function WC(r,t,e,o,n,s){if(n[t])return e>0?s[t]:s[t+1&1];{let a=r<0?o+r:r;return a<s[0]?s[0]:a>s[1]?s[1]:a}}var JC="4.22.0";var qc=class{static sgd(t){return new uo(t)}static momentum(t,e,o=!1){return new ls(t,e,o)}static rmsprop(t,e=.9,o=0,n=null,s=!1){return new ps(t,e,o,n,s)}static adam(t=.001,e=.9,o=.999,n=null){return new is(t,e,o,n)}static adadelta(t=.001,e=.95,o=null){return new ss(t,e,o)}static adamax(t=.002,e=.9,o=.999,n=null,s=0){return new cs(t,e,o,n,s)}static adagrad(t,e=.1){return new as(t,e)}};var vL=qc;var NL=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:r=>r();function Em(){return new Promise(r=>NL(()=>r()))}var v={};Et(v,{ERF_A1:()=>zL,ERF_A2:()=>WL,ERF_A3:()=>HL,ERF_A4:()=>qL,ERF_A5:()=>KL,ERF_P:()=>UL,PARALLELIZE_THRESHOLD:()=>$m,RowPartitionType:()=>mo,SELU_SCALE:()=>GL,SELU_SCALEALPHA:()=>VL,applyActivation:()=>Qi,assertAndGetBroadcastShape:()=>Dt,assertAxesAreInnerMostDims:()=>hF,assertParamsConsistent:()=>kL,assignToTypedArray:()=>JL,axesAreInnerMostDims:()=>Cg,calculateShapes:()=>Sw,checkEinsumDimSizes:()=>s3,checkPadOnDimRoundingMode:()=>se,combineLocations:()=>tw,combineRaggedTensorToTensorShapes:()=>$L,complexWithEvenIndex:()=>YL,complexWithOddIndex:()=>ZL,computeConv2DInfo:()=>Ii,computeConv3DInfo:()=>X0,computeDefaultPad:()=>sg,computeDilation2DInfo:()=>fD,computeOptimalWindowSize:()=>FL,computeOutAndReduceShapes:()=>dF,computeOutShape:()=>EL,computePool2DInfo:()=>ng,computePool3DInfo:()=>dD,convertConv2DDataFormat:()=>Y0,decodeEinsumEquation:()=>o3,eitherStridesOrDilationsAreOne:()=>Ae,expandShapeToKeepDim:()=>Fo,exponent:()=>e3,exponents:()=>t3,fromStringArrayToUint8:()=>N3,fromUint8ToStringArray:()=>v3,getAxesPermutation:()=>gF,getBroadcastDims:()=>J0,getComplexWithIndex:()=>QL,getEinsumComputePath:()=>a3,getEinsumPermutation:()=>n3,getFusedBiasGradient:()=>Zi,getFusedDyActivation:()=>Yi,getImageCenter:()=>_L,getInnerMostAxes:()=>yF,getPermuted:()=>PL,getRaggedRank:()=>RL,getReductionAxes:()=>sm,getReshaped:()=>OL,getReshapedPermuted:()=>LL,getRowPartitionTypesHelper:()=>AL,getSliceBeginCoords:()=>BL,getSliceSize:()=>ML,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>p3,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>u3,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>m3,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>h3,getSparseReshapeInputOutputMismatchErrorMessage:()=>x3,getSparseReshapeInputOutputMultipleErrorMessage:()=>g3,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>f3,getSparseReshapeNegativeOutputDimErrorMessage:()=>d3,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>C3,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>y3,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>b3,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>w3,getUndoAxesPermutation:()=>xF,isIdentityPermutation:()=>i3,log:()=>WA,mergeRealAndImagArrays:()=>jL,prepareAndValidate:()=>zC,prepareSplitSize:()=>l3,segment_util:()=>Rx,shouldFuse:()=>Ji,slice_util:()=>ue,splitRealAndImagArrays:()=>XL,stridesOrDilationsArePositive:()=>ro,tupleValuesAreOne:()=>Ti,upcastType:()=>re,validateDefaultValueShape:()=>DL,validateInput:()=>Uc,validateUpdateShape:()=>ux,warn:()=>Zr});function kL(r,t){let e=r[0].length;r.forEach((n,s)=>{k(n.length===e,()=>`Error in concat${e}D: rank of tensors[${s}] must be the same as the rank of the rest (${e})`)}),k(t>=0&&t<e,()=>`Error in concat${e}D: axis must be between 0 and ${e-1}.`);let o=r[0];r.forEach((n,s)=>{for(let a=0;a<e;a++)k(a===t||n[a]===o[a],()=>`Error in concat${e}D: Shape of tensors[${s}] (${n}) does not match the shape of the rest (${o}) along the non-concatenated axis ${s}.`)})}function EL(r,t){let e=r[0].slice();for(let o=1;o<r.length;o++)e[t]+=r[o][t];return e}var mo;(function(r){r[r.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",r[r.VALUE_ROWIDS=1]="VALUE_ROWIDS",r[r.ROW_LENGTHS=2]="ROW_LENGTHS",r[r.ROW_SPLITS=3]="ROW_SPLITS",r[r.ROW_LIMITS=4]="ROW_LIMITS",r[r.ROW_STARTS=5]="ROW_STARTS"})(mo||(mo={}));function $L(r,t,e){let o=new Array;if(e==null&&t==null)return o;if(t==null)for(;o.length<r+e.length;)o.push(-1);else o=t.slice();if(e==null)return o;if(r+e.length!==o.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${r+e.length}, but shape.rank = ${o.length}`);for(let n=1;n<e.length;++n){let s=e[n],a=o[o.length-e.length+n],i=o[a];if(s>=0)if(i>=0){if(i!==s)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${n+r}] = ${s} but shape[${n+r}] = ${i}`)}else o[a]=s}return o}function AL(r){let t={FIRST_DIM_SIZE:mo.FIRST_DIM_SIZE,VALUE_ROWIDS:mo.VALUE_ROWIDS,ROW_LENGTHS:mo.ROW_LENGTHS,ROW_SPLITS:mo.ROW_SPLITS,ROW_LIMITS:mo.ROW_LIMITS,ROW_STARTS:mo.ROW_STARTS},e=[];for(let o of r)if(o in t)e.push(t[o]);else break;return e}function RL(r){return r.length===0?0:r[0]===mo.FIRST_DIM_SIZE?r.length-1:r.length}function DL(r,t){if(r==null||t==null)return;let e=r.length,o=t.length;if(e>=o)throw new Error(`defaultValue.shape=${r} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${e} must be less than ragged tensor input flatValues.rank = ${o})`);for(let n=0;n<Math.min(e,o-1);++n){let s=r[n],a=t[n+1];if(s>=0&&a>=0&&s!==1&&s!==a)throw new Error(`defaultValue.shape=${r}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${n-r.length}] = ${s} but ragged tensor input.flatValues.shape[${n-r.length}] = ${a}`)}}var $m=30;function FL(r){return r<=$m?r:xc(r,Math.floor(Math.sqrt(r)))}function _L(r,t,e){let o=e*(typeof r=="number"?r:r[0]),n=t*(typeof r=="number"?r:r[1]);return[o,n]}function OL(r,t,e,o=!0){let n=[];if(o)n=n.concat(t.slice(0)),n.push(r[0]/e),n=n.concat(r.slice(1));else{n=n.concat(r[0]);let s=t.length;for(let a=0;a<s;++a)n=n.concat([r[a+1]/t[a],t[a]]);n=n.concat(r.slice(s+1))}return n}function PL(r,t,e=!0){let o=[];if(e){o.push(t);for(let n=t+1;n<r;++n)n<=2*t?(o.push(n),o.push(n-(t+1))):o.push(n)}else{let n=[],s=[];for(let a=1;a<r;++a)a>=t*2+1||a%2===1?s.push(a):n.push(a);o.push(...n),o.push(0),o.push(...s)}return o}function LL(r,t,e,o=!0){let n=[];o?n.push(r[0]/e):n.push(r[0]*e);for(let s=1;s<r.length;++s)s<=t.length?o?n.push(t[s-1]*r[s]):n.push(r[s]/t[s-1]):n.push(r[s]);return n}function BL(r,t){let e=[0];for(let o=0;o<t;++o)e.push(r[o][0]);return e}function ML(r,t,e){let o=r.slice(0,1);for(let n=0;n<e;++n)o.push(r[n+1]-t[n][0]-t[n][1]);return o}var VL=1.7580993408473768,GL=1.0507009873554805;var UL=.3275911,zL=.254829592,WL=-.284496736,HL=1.421413741,qL=-1.453152027,KL=1.061405429;function jL(r,t){if(r.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${r.length}, imag: ${t.length}.`);let e=new Float32Array(r.length*2);for(let o=0;o<e.length;o+=2)e[o]=r[o/2],e[o+1]=t[o/2];return e}function XL(r){let t=new Float32Array(r.length/2),e=new Float32Array(r.length/2);for(let o=0;o<r.length;o+=2)t[o/2]=r[o],e[o/2]=r[o+1];return{real:t,imag:e}}function YL(r){let t=Math.ceil(r.length/4),e=new Float32Array(t),o=new Float32Array(t);for(let n=0;n<r.length;n+=4)e[Math.floor(n/4)]=r[n],o[Math.floor(n/4)]=r[n+1];return{real:e,imag:o}}function ZL(r){let t=Math.floor(r.length/4),e=new Float32Array(t),o=new Float32Array(t);for(let n=2;n<r.length;n+=4)e[Math.floor(n/4)]=r[n],o[Math.floor(n/4)]=r[n+1];return{real:e,imag:o}}function QL(r,t){let e=r[t*2],o=r[t*2+1];return{real:e,imag:o}}function JL(r,t,e,o){r[o*2]=t,r[o*2+1]=e}function t3(r,t){let e=new Float32Array(r/2),o=new Float32Array(r/2);for(let n=0;n<Math.ceil(r/2);n++){let s=(t?2:-2)*Math.PI*(n/r);e[n]=Math.cos(s),o[n]=Math.sin(s)}return{real:e,imag:o}}function e3(r,t,e){let o=(e?2:-2)*Math.PI*(r/t),n=Math.cos(o),s=Math.sin(o);return{real:n,imag:s}}var Ax="->",r3=/->/g,tT=",",eT="...";function o3(r,t){r=r.replace(/\s/g,"");let e=(r.length-r.replace(r3,"").length)/Ax.length;if(e<1)throw new Error("Equations without an arrow are not supported.");if(e>1)throw new Error(`Equation must contain exactly one arrow ("${Ax}").`);let[o,n]=r.split(Ax);k(o.indexOf(eT)===-1,()=>`The ellipsis notation ("${eT}") is not supported yet.`);let s=o.split(tT),a=s.length;if(t!==a)throw new Error(`Expected ${a} input tensors, received ${t}`);if(a>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");let i=[];for(let m=0;m<n.length;++m){let f=n[m];if(!s.some(d=>d.indexOf(f)!==-1))throw new Error(`Output subscripts contain the label ${f} not present in the input subscripts.`);i.indexOf(f)===-1&&i.push(f)}for(let m=0;m<o.length;++m){let f=o[m];i.indexOf(f)===-1&&f!==tT&&i.push(f)}let c=new Array(s.length);for(let m=0;m<a;++m){if(new Set(s[m].split("")).size!==s[m].length)throw new Error(`Found duplicate axes in input component ${s[m]}. Support for duplicate axes in input is not implemented yet.`);c[m]=[];for(let f=0;f<s[m].length;++f)c[m].push(i.indexOf(s[m][f]))}let l=i.length,p=n.length,u=[];for(let m=p;m<l;++m)u.push(m);return{allDims:i,summedDims:u,idDims:c}}function n3(r,t){let e=new Array(r);e.fill(-1);for(let n=0;n<t.length;++n)e[t[n]]=n;let o=[];for(let n=0;n<r;++n)e[n]===-1&&o.push(n);return e=e.filter(n=>n!==-1),{permutationIndices:e,expandDims:o}}function s3(r,t,e){let o=new Array(r);for(let n=0;n<e.length;++n){let s=e[n].shape;for(let a=0;a<t[n].length;++a)o[t[n][a]]===void 0?o[t[n][a]]=s[a]:k(o[t[n][a]]===s[a],()=>`Expected dimension ${o[t[n][a]]} at axis ${a} of input shaped ${JSON.stringify(s)}, but got dimension ${s[a]}`)}}function a3(r,t){let e=r,o=[],n=0;r.length===0&&e.push(-1),n=r.length+1;for(let a=0;a<n;++a)o.push([]);let s=[];for(let a=0;a<e.length;++a){let i=e[a],c=c3(t,i);for(let l of c)s.indexOf(l)===-1&&(o[a].push(l),s.push(l))}return{path:e,steps:o}}function i3(r){return r.every((t,e)=>t===e)}function c3(r,t){let e=[];for(let o=0;o<r.length;++o)(r[o].length===0||r[o].indexOf(t)!==-1||t===-1)&&e.push(o);return e}function l3(r,t,e=0){let o=[];if(typeof t=="number")k(r.shape[e]%t===0,()=>"Number of splits must evenly divide the axis."),o=new Array(t).fill(r.shape[e]/t);else{let n=t.reduce((a,i)=>(i===-1&&(a+=1),a),0);k(n<=1,()=>"There should be only one negative value in split array.");let s=t.indexOf(-1);if(s!==-1){let a=t.reduce((i,c)=>c>0?i+c:i);t[s]=r.shape[e]-a}k(r.shape[e]===t.reduce((a,i)=>a+i),()=>"The sum of sizes must match the size of the axis dimension."),o=t}return o}function p3(r){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${r}`}function u3(r,t){return`indices(${r}, 0) is invalid: ${t} < 0`}function m3(r,t,e){return`indices(${r}, 0) is invalid: ${t} >= ${e}`}function f3(r,t){return`only one output dimension may be -1, not both ${r} and ${t}`}function d3(r,t){return`size ${r} must be non-negative, not ${t}`}function h3(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function g3(r,t){let e=bt(r),o=bt(t);return`Input to reshape is a SparseTensor with ${e}
  dense values, but the requested shape requires a multiple of ${o}. inputShape=${r} outputShape= ${t}`}function x3(r,t){let e=bt(r),o=bt(t);return`Input to reshape is a tensor with ${e} dense values, but the requested shape has ${o}. inputShape=${r} outputShape=${t}`}function y3(){return"segment ids must be >= 0"}function b3(){return"segment ids are not increasing"}function w3(r,t){return`Segment id ${r} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function C3(r,t,e){return`Bad: indices[${r}] == ${t} out of range [0, ${e})`}var Rx={};Et(Rx,{collectGatherOpShapeInfo:()=>S3,computeOutShape:()=>I3,segOpComputeOptimalWindowSize:()=>T3});function T3(r,t){let e=!1,o;for(r<=$m?(o=r,e=!0):o=xc(r,Math.floor(Math.sqrt(r)));!e;)o>t||o===r?e=!0:o=xc(r,o+1);return o}function I3(r,t,e){let o=[],n=r.length;for(let s=0;s<n;s++)s!==t?o.push(r[s]):o.push(e);return o}function S3(r,t,e,o){let n=t.shape.length,s=r.shape.length;if(o!==0&&(o<-n||o>n))throw new Error(`Expect batchDims in the range of [-${n}, ${n}], but got ${o}`);if(o<0&&(o+=n),o>s)throw new Error(`batchDims (${o}) must be less than rank(x) (
    ${s}).`);if(e<o)throw new Error(`batchDims (${o}) must be less than or equal to axis (${e}).`);for(let u=0;u<o;++u)if(r.shape[u]!==t.shape[u])throw new Error(`x.shape[${u}]: ${r.shape[u]} should be equal to indices.shape[${u}]: ${t.shape[u]}.`);let a=r.shape[e],i=[],c=1,l=1,p=1;for(let u=0;u<o;++u)i.push(r.shape[u]),c*=r.shape[u];for(let u=o;u<e;u++)i.push(r.shape[u]),l*=r.shape[u];for(let u=o;u<n;u++)i.push(t.shape[u]);for(let u=e+1;u<s;u++)i.push(r.shape[u]),p*=r.shape[u];return{batchSize:c,sliceSize:p,outerSize:l,dimSize:a,outputShape:i}}function v3(r){try{return r.map(t=>Oc(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function N3(r){return r.map(t=>Zn(t))}var be={};Et(be,{nonMaxSuppressionV3Impl:()=>ym,nonMaxSuppressionV4Impl:()=>bm,nonMaxSuppressionV5Impl:()=>wm,whereImpl:()=>fm});$C();var ec={},Am={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function rT(r,t){ec[r]=t}function rr(r,t){if(!(r in ec)||t!=null){let o=E3(r,t);if(o!==null)ec[r]=o;else return console.log("Could not get context for WebGL version",r),null}let e=ec[r];return e==null||e.isContextLost()?(delete ec[r],rr(r)):(e.disable(e.DEPTH_TEST),e.disable(e.STENCIL_TEST),e.disable(e.BLEND),e.disable(e.DITHER),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SAMPLE_COVERAGE),e.enable(e.SCISSOR_TEST),e.enable(e.CULL_FACE),e.cullFace(e.BACK),ec[r])}function k3(r){if(!F().getBool("IS_SAFARI")&&typeof OffscreenCanvas<"u"&&r===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}function E3(r,t){if(r!==1&&r!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");let e=t??k3(r);return e.addEventListener("webglcontextlost",o=>{o.preventDefault(),delete ec[r]},!1),F().getBool("SOFTWARE_WEBGL_ENABLED")&&(Am.failIfMajorPerformanceCaveat=!1),r===1?e.getContext("webgl",Am)||e.getContext("experimental-webgl",Am):e.getContext("webgl2",Am)}var us;(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(us||(us={}));var Ee;(function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"})(Ee||(Ee={}));var we;(function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"})(we||(we={}));function rc(r,t){return[t,r]}function oT(r,t){return r*t}function nu(r){let t=y.sizeFromShape(r),e=Math.ceil(t/4);return y.sizeToSquarishShape(e)}function fo(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function nT(r,t){let[e,o]=fo(r,t);return e*o*4}function su(r,t){let e=r,o,n,s,a,i,c,l,p,u,m;return F().getNumber("WEBGL_VERSION")===2?(o=e.R32F,n=e.R16F,s=e.RGBA16F,a=e.RGBA32F,i=e.RED,l=4,p=1,u=e.HALF_FLOAT,m=e.FLOAT,c=e.RGBA8):(o=r.RGBA,n=r.RGBA,s=r.RGBA,a=e.RGBA,i=r.RGBA,l=4,p=4,u=t!=null?t.HALF_FLOAT_OES:null,m=r.FLOAT,c=r.RGBA),{internalFormatFloat:o,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:s,internalFormatPackedFloat:a,textureFormatFloat:i,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:p,textureTypeHalfFloat:u,textureTypeFloat:m}}function rt(r,t){let e=t();return F().getBool("DEBUG")&&$3(r),e}function $3(r){let t=r.getError();if(t!==r.NO_ERROR)throw new Error("WebGL Error: "+D3(r,t))}var A3=596e-10,R3=65504;function sT(r){return!!(F().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||A3<Math.abs(r)&&Math.abs(r)<R3)}function D3(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return`Unknown error code ${t}`}}function au(r,t){return Uo(r,()=>r.getExtension(t),'Extension "'+t+'" not supported on this browser.')}function aT(r,t){let e=Uo(r,()=>r.createShader(r.VERTEX_SHADER),"Unable to create vertex WebGLShader.");if(rt(r,()=>r.shaderSource(e,t)),rt(r,()=>r.compileShader(e)),r.getShaderParameter(e,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(e)),new Error("Failed to compile vertex shader.");return e}function iT(r,t){let e=Uo(r,()=>r.createShader(r.FRAGMENT_SHADER),"Unable to create fragment WebGLShader.");if(rt(r,()=>r.shaderSource(e,t)),rt(r,()=>r.compileShader(e)),F().get("ENGINE_COMPILE_ONLY"))return e;if(r.getShaderParameter(e,r.COMPILE_STATUS)===!1)throw Px(t,r.getShaderInfoLog(e)),new Error("Failed to compile fragment shader.");return e}var F3=/ERROR: [0-9]+:([0-9]+):/g;function Px(r,t){let e=F3.exec(t);if(e==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(r);return}let o=+e[1],n=r.split(`
`),s=n.length.toString().length+2,a=n.map((u,m)=>y.rightPad((m+1).toString(),s)+u),i=0;for(let u=0;u<a.length;u++)i=Math.max(a[u].length,i);let c=a.slice(0,o-1),l=a.slice(o-1,o),p=a.slice(o);console.log(c.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${y.rightPad(l[0],i)}`,"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(p.join(`
`))}function cT(r){return Uo(r,()=>r.createProgram(),"Unable to create WebGLProgram.")}function lT(r,t){if(rt(r,()=>r.linkProgram(t)),!F().get("ENGINE_COMPILE_ONLY")&&r.getProgramParameter(t,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(t)),new Error("Failed to link vertex and fragment shaders.")}function Dm(r,t){if(rt(r,()=>r.validateProgram(t)),r.getProgramParameter(t,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(t)),new Error("Shader program validation failed.")}function pT(r,t){let e=Uo(r,()=>r.createBuffer(),"Unable to create WebGLBuffer");return rt(r,()=>r.bindBuffer(r.ARRAY_BUFFER,e)),rt(r,()=>r.bufferData(r.ARRAY_BUFFER,t,r.STATIC_DRAW)),e}function uT(r,t){let e=Uo(r,()=>r.createBuffer(),"Unable to create WebGLBuffer");return rt(r,()=>r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e)),rt(r,()=>r.bufferData(r.ELEMENT_ARRAY_BUFFER,t,r.STATIC_DRAW)),e}function mT(r){return Uo(r,()=>r.createTexture(),"Unable to create WebGLTexture.")}function fT(r,t){let e=F().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){let o=`[${r}x${t}]`;throw new Error("Requested texture size "+o+" is invalid.")}if(r>e||t>e){let o=`[${r}x${t}]`,n=`[${e}x${e}]`;throw new Error("Requested texture size "+o+" greater than WebGL maximum on this browser / GPU "+n+".")}}function dT(r){return Uo(r,()=>r.createFramebuffer(),"Unable to create WebGLFramebuffer.")}function Lx(r,t,e,o,n,s,a){let i=r.getAttribLocation(t,e);return i===-1?!1:(rt(r,()=>r.bindBuffer(r.ARRAY_BUFFER,o)),rt(r,()=>r.vertexAttribPointer(i,n,r.FLOAT,!1,s,a)),rt(r,()=>r.enableVertexAttribArray(i)),!0)}function _3(r,t,e){P3(r,e),rt(r,()=>r.activeTexture(r.TEXTURE0+e)),rt(r,()=>r.bindTexture(r.TEXTURE_2D,t))}function hT(r,t,e){return Uo(r,()=>r.getUniformLocation(t,e),'uniform "'+e+'" not present in program.')}function gT(r,t,e){return r.getUniformLocation(t,e)}function xT(r,t,e,o){rt(r,()=>_3(r,t,o)),rt(r,()=>r.uniform1i(e,o))}function Fm(r,t,e){rt(r,()=>r.bindFramebuffer(r.FRAMEBUFFER,e)),rt(r,()=>r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t,0))}function Bx(r,t){rt(r,()=>r.bindFramebuffer(r.FRAMEBUFFER,t)),rt(r,()=>r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0))}function iu(r){let t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+O3(r,t))}function O3(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return`unknown error ${t}`}}function Uo(r,t,e){let o=rt(r,()=>t());if(o==null)throw new Error(e);return o}function P3(r,t){let e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,o=t+r.TEXTURE0;if(o<r.TEXTURE0||o>e){let n=`[gl.TEXTURE0, gl.TEXTURE${e}]`;throw new Error(`textureUnit must be in ${n}.`)}}function ms(r,t=2){return y.sizeFromShape(r.slice(0,r.length-t))}function fs(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function cu(r){let t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[ms(r),...fs(r)]),t}function yT(r,t=!1){let e=F().getNumber("WEBGL_MAX_TEXTURE_SIZE"),o=F().getNumber("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE");o===1/0&&F().getBool("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE")&&(o=e/2),t&&(e=e*2,o=o*2,r=r.map((i,c)=>c>=r.length-2?y.nearestLargerEven(r[c]):r[c]),r.length===1&&(r=[2,r[0]])),r.length!==2&&(r=y.squeezeShape(r).newShape);let n=y.sizeFromShape(r),s=null;r.length<=1&&n<=e?s=[1,n]:r.length===2&&r[0]<=e&&r[1]<=e?s=r:r.length===3&&r[0]*r[1]<=e&&r[2]<=e?s=[r[0]*r[1],r[2]]:r.length===3&&r[0]<=e&&r[1]*r[2]<=e?s=[r[0],r[1]*r[2]]:r.length===4&&r[0]*r[1]*r[2]<=e&&r[3]<=e?s=[r[0]*r[1]*r[2],r[3]]:r.length===4&&r[0]<=e&&r[1]*r[2]*r[3]<=e&&(s=[r[0],r[1]*r[2]*r[3]]);let a=s!=null&&Math.max(...s)>o&&Math.min(...s)<=(t?2:1)&&Math.min(...s)>0;if(s==null||a)if(t){let i=ms(r),c=2,l=2;r.length&&([c,l]=fs(r)),n=i*(c/2)*(l/2),s=y.sizeToSquarishShape(n).map(p=>p*2)}else s=y.sizeToSquarishShape(n);return s}function Rm(r){return r%2===0}function oc(r,t){if(r=r.slice(-2),t=t.slice(-2),y.arraysEqual(r,t)||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){let e=r[r.length-1],o=t[t.length-1];if(e===o||Rm(e)&&Rm(o)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&Rm(r[0])&&Rm(t[0])}var Fx,_x;function bT(r){if(Fx==null){let t=rr(r);Fx=t.getParameter(t.MAX_TEXTURE_SIZE)}return Fx}function wT(r){if(_x==null){let t=rr(r);_x=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,_x)}function CT(r){if(r===0)return 0;let t,e=rr(r);return fr(e,"EXT_disjoint_timer_query_webgl2")&&r===2?t=2:fr(e,"EXT_disjoint_timer_query")?t=1:t=0,t}function fr(r,t){return r.getExtension(t)!=null}function Mx(r){try{if(rr(r)!=null)return!0}catch(t){return console.log("Error when getting WebGL context: ",t),!1}return!1}function TT(r){if(r===0)return!1;let t=rr(r);if(r===1){if(!fr(t,"OES_texture_float"))return!1}else if(!fr(t,"EXT_color_buffer_float"))return!1;return Ox(t)}function IT(r){if(r===0)return!1;let t=rr(r);if(r===1){if(!fr(t,"OES_texture_float")||!fr(t,"WEBGL_color_buffer_float"))return!1}else{if(fr(t,"EXT_color_buffer_float"))return Ox(t);let o="EXT_color_buffer_half_float";if(fr(t,o)){let n=t.getExtension(o);return L3(t,n)}return!1}return Ox(t)}function Ox(r){let t=su(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let s=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,s),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);let a=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(s),a}function L3(r,t){let e=su(r,t),o=r.createTexture();r.bindTexture(r.TEXTURE_2D,o),r.texImage2D(r.TEXTURE_2D,0,e.internalFormatHalfFloat,1,1,0,e.textureFormatFloat,e.textureTypeHalfFloat,null);let a=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,a),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,o,0);let i=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(o),r.deleteFramebuffer(a),i}function ST(r){return r!==2?!1:rr(r).fenceSync!=null}function ho(r,t){Array.isArray(r)||(r=[r]),r.forEach(e=>{e!=null&&y.assert(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var it=F();it.registerFlag("HAS_WEBGL",()=>it.getNumber("WEBGL_VERSION")>0);it.registerFlag("WEBGL_VERSION",()=>Mx(2)?2:Mx(1)?1:0);it.registerFlag("WEBGL_CHECK_NUMERICAL_PROBLEMS",()=>!1);it.registerFlag("WEBGL_BUFFER_SUPPORTED",()=>it.get("WEBGL_VERSION")===2);it.registerFlag("WEBGL_CPU_FORWARD",()=>!0);it.registerFlag("WEBGL_FORCE_F16_TEXTURES",()=>!1);it.registerFlag("WEBGL_PACK",()=>it.getBool("HAS_WEBGL"));it.registerFlag("WEBGL_PACK_NORMALIZATION",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_CLIP",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_DEPTHWISECONV",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_REDUCE",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_LAZILY_UNPACK",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_CONV_IM2COL",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_PACK_CONV2DTRANSPOSE",()=>it.getBool("WEBGL_PACK"));it.registerFlag("WEBGL_MAX_TEXTURE_SIZE",()=>bT(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",()=>wT(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",()=>{let r=it.getNumber("WEBGL_VERSION");return r===0?0:CT(r)});it.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",()=>it.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&!ko.isMobile());it.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",()=>TT(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",()=>it.getBool("WEBGL_FORCE_F16_TEXTURES")?!1:it.getBool("WEBGL_RENDER_FLOAT32_CAPABLE"));it.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",()=>IT(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_FENCE_API_ENABLED",()=>ST(it.getNumber("WEBGL_VERSION")));it.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",()=>it.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0);it.registerFlag("WEBGL_DELETE_TEXTURE_THRESHOLD",()=>-1,r=>{if(typeof r!="number")throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${r}.`);if(r<0&&r!==-1)throw new Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${r}.`)});it.registerFlag("WEBGL_FLUSH_THRESHOLD",()=>ko.isMobile()?1:-1,r=>{if(typeof r!="number")throw new Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${r}.`);if(r<0&&r!==-1)throw new Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${r}.`)});it.registerFlag("CPU_HANDOFF_SIZE_THRESHOLD",()=>128);it.registerFlag("WEBGL_USE_SHAPES_UNIFORMS",()=>!1);it.registerFlag("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e5);it.registerFlag("TOPK_K_CPU_HANDOFF_THRESHOLD",()=>128);it.registerFlag("WEBGL_EXP_CONV",()=>!1);it.registerFlag("SOFTWARE_WEBGL_ENABLED",()=>it.getBool("IS_TEST"));it.registerFlag("WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE",()=>1/0);it.registerFlag("WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE",()=>!1);it.registerFlag("WEBGL2_ISNAN_CUSTOM",()=>!1);it.registerFlag("ENGINE_COMPILE_ONLY",()=>!1);function Ht(){let r,t,e,o,n,s,a,i,c,l;return F().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",o="in",n="texture",s="outputColor",a="out vec4 outputColor;",i=F().getBool("WEBGL2_ISNAN_CUSTOM")?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:"",c="",l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",o="varying",n="texture2D",s="gl_FragColor",a="",i=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:o,texture2D:n,output:s,defineOutput:a,defineSpecialNaN:i,defineSpecialInf:c,defineRound:l}}function Ur(r,t,e="index"){let o=y.computeStrides(t);return o.map((n,s)=>{let a=`int ${r[s]} = ${e} / ${n}`,i=s===o.length-1?`int ${r[s+1]} = ${e} - ${r[s]} * ${n}`:`index -= ${r[s]} * ${n}`;return`${a}; ${i};`}).join("")}function nc(r,t,e="index"){let o=y.computeStrides(t);return o.map((n,s)=>{let a=`int ${r[s]} = ${e} / outShapeStrides[${s}]`,i=s===o.length-1?`int ${r[s+1]} = ${e} - ${r[s]} * outShapeStrides[${s}]`:`index -= ${r[s]} * outShapeStrides[${s}]`;return`${a}; ${i};`}).join("")}function B3(r,t){let e=r.length,o=r.map(s=>`${t}[${s}]`),n=new Array(e-1);n[e-2]=o[e-1];for(let s=e-3;s>=0;--s)n[s]=`(${n[s+1]} * ${o[s+1]})`;return n}function vT(r,t,e="index"){let o=r.map((s,a)=>a),n=B3(o,t);return n.map((s,a)=>{let i=`int ${r[a]} = ${e} / ${n[a]}`,c=a===n.length-1?`int ${r[a+1]} = ${e} - ${r[a]} * ${n[a]}`:`index -= ${r[a]} * ${n[a]}`;return`${i}; ${c};`}).join("")}function Kc(r){let t=y.computeStrides(r).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function jc(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var Om=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;var{getBroadcastDims:NT}=v;function kT(r,t,e){let o=[];if(r.forEach(f=>{let d=y.sizeFromShape(f.shapeInfo.logicalShape);if(f.shapeInfo.isUniform?o.push(`uniform float ${f.name}${d>1?`[${d}]`:""};`):(o.push(`uniform sampler2D ${f.name};`),o.push(`uniform int offset${f.name};`)),e.enableShapeUniforms){let{uniformShape:g}=Pm(e.packedInputs,f.shapeInfo.logicalShape,f.shapeInfo.texShape);switch(g.length){case 1:o.push(`uniform int ${f.name}Shape;`);break;case 2:o.push(`uniform ivec2 ${f.name}Shape;`);break;case 3:o.push(`uniform ivec3 ${f.name}Shape;`);break;case 4:o.push(`uniform ivec4 ${f.name}Shape;`);break;default:break}o.push(`uniform ivec2 ${f.name}TexShape;`)}}),e.enableShapeUniforms){switch(t.logicalShape.length){case 1:o.push("uniform int outShape;");break;case 2:o.push("uniform ivec2 outShape;"),o.push("uniform int outShapeStrides;");break;case 3:o.push("uniform ivec3 outShape;"),o.push("uniform ivec2 outShapeStrides;");break;case 4:o.push("uniform ivec4 outShape;"),o.push("uniform ivec3 outShapeStrides;");break;default:break}o.push("uniform ivec2 outTexShape;")}e.customUniforms&&e.customUniforms.forEach(f=>{o.push(`uniform ${f.type} ${f.name}${f.arrayIndex?`[${f.arrayIndex}]`:""};`)});let n=o.join(`
`),s=r.map(f=>M3(f,t,e.packedInputs,e.enableShapeUniforms)).join(`
`),a=t.texShape,i=Ht(),c=U3(i),l,p,u=H3(i);return t.isPacked?(l=V3(t.logicalShape,a,e.enableShapeUniforms),p=W3(i)):(l=G3(t.logicalShape,a,e.enableShapeUniforms),p=z3(i)),e.packedInputs&&(u+=X3),[u,c,p,n,l,s,e.userCode].join(`
`)}function Yc(r,t=!1){let e=r.shapeInfo.logicalShape;switch(e.length){case 0:return iB(r,t);case 1:return lB(r,t);case 2:return uB(r,t);case 3:return fB(r,t);case 4:return hB(r,t);case 5:return gB(r);case 6:return xB(r);default:throw new Error(`${e.length}-D input sampling is not yet supported`)}}function ET(r,t){switch(r.shapeInfo.logicalShape.length){case 0:return aB(r);case 1:return cB(r,t);case 2:return pB(r,t);case 3:return mB(r,t);default:return dB(r,t)}}function M3(r,t,e=!1,o){let n="";e?n+=ET(r,o):n+=Yc(r,o);let s=r.shapeInfo.logicalShape,a=t.logicalShape;return s.length<=a.length&&(e?n+=yB(r,t):n+=bB(r,t)),n}function V3(r,t,e){switch(r.length){case 0:return $T();case 1:return Y3(r,t,e);case 2:return nB(r,t,e);case 3:return Q3(r,t,e);default:return tB(r,t,e)}}function G3(r,t,e){switch(r.length){case 0:return $T();case 1:return Z3(r,t,e);case 2:return sB(r,t,e);case 3:return J3(r,t,e);case 4:return eB(r,t,e);case 5:return rB(r,t);case 6:return oB(r,t);default:throw new Error(`${r.length}-D output sampling is not yet supported`)}}function U3(r){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${r.texture2D}(textureSampler, uv).r;
    }
  `}function z3(r){return`
    void setOutput(float val) {
      ${r.output} = vec4(val, 0, 0, 0);
    }
  `}function W3(r){return`
    void setOutput(vec4 val) {
      ${r.output} = val;
    }
  `}function H3(r){return`${r.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${r.varyingFs} vec2 resultUV;
    ${r.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${r.defineSpecialNaN}
    ${r.defineSpecialInf}
    ${r.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${q3}
    ${K3}
    ${j3}
  `}var q3=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,K3=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,j3=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,X3=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function $T(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function Y3(r,t,e){let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return o[0]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${o[1]}.0);
      }
    `:o[1]===1?e?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${o[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      return 2 * (resTexRC.x * ${o[1]} + resTexRC.y);
    }
  `}function Z3(r,t,e){return t[0]===1?e?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?e?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:e?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function Q3(r,t,e){if(e)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],n=Math.ceil(r[2]/2),s=n*Math.ceil(r[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec3(b, r, c);
    }
  `}function J3(r,t,e){if(e)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${nc(["r","c","d"],r)}
    return ivec3(r, c, d);
  }
`;let o=Ur(["r","c","d"],r);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${o}
      return ivec3(r, c, d);
    }
  `}function tB(r,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],n=Math.ceil(r[r.length-1]/2),s=n*Math.ceil(r[r.length-2]/2),a=s,i="",c="b, r, c";for(let l=2;l<r.length-1;l++)a*=r[r.length-l-1],i=`
      int b${l} = index / ${a};
      index -= b${l} * ${a};
    `+i,c=`b${l}, `+c;return`
    ivec${r.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));
      int index = resTexRC.x * ${o[1]} + resTexRC.y;

      ${i}

      int b = index / ${s};
      index -= b * ${s};

      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec${r.length}(${c});
    }
  `}function eB(r,t,e){if(e)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${nc(["r","c","d","d2"],r)}
      return ivec4(r, c, d, d2);
    }
  `;let o=Ur(["r","c","d","d2"],r);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${o}
      return ivec4(r, c, d, d2);
    }
  `}function rB(r,t){let e=Ur(["r","c","d","d2","d3"],r);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function oB(r,t){let e=Ur(["r","c","d","d2","d3","d4"],r);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${e}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function nB(r,t,e){let o=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(y.arraysEqual(r,t))return e?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${o[0]}, ${o[1]}));
      }
    `;let n=Math.ceil(r[1]/2);return e?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${o[0]}, ${o[1]}));

      int index = resTexRC.x * ${o[1]} + resTexRC.y;
      int r = 2 * (index / ${n});
      int c = imod(index, ${n}) * 2;

      return ivec2(r, c);
    }
  `}function sB(r,t,e){return y.arraysEqual(r,t)?e?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:r[1]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:r[0]===1?e?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:e?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${r[1]};
      int c = index - r * ${r[1]};
      return ivec2(r, c);
    }
  `}function sc(r){return`offset${r}`}function aB(r){let t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),o=Ht();return`
    vec4 ${e}() {
      return ${o.texture2D}(${t}, halfCR);
    }
  `}function iB(r,t){let e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1);if(r.shapeInfo.isUniform)return`float ${o}() {return ${e};}`;let[n,s]=r.shapeInfo.texShape;if(n===1&&s===1)return`
      float ${o}() {
        return sampleTexture(${e}, halfCR);
      }
    `;let a=sc(e);if(t)return`
    float ${o}() {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], ${a});
      return sampleTexture(${e}, uv);
    }
  `;let[i,c]=r.shapeInfo.texShape;return`
    float ${o}() {
      vec2 uv = uvFromFlat(${i}, ${c}, ${a});
      return sampleTexture(${e}, uv);
    }
  `}function cB(r,t){let e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1),n=r.shapeInfo.texShape,s=Ht();if(t)return`
    vec4 ${o}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${s.texture2D}(${e}, uv);
    }
  `;let a=[Math.ceil(n[0]/2),Math.ceil(n[1]/2)];return`
    vec4 ${o}(int index) {
      vec2 uv = packedUVfrom1D(
        ${a[0]}, ${a[1]}, index);
      return ${s.texture2D}(${e}, uv);
    }
  `}function lB(r,t){let e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1);if(r.shapeInfo.isUniform)return`
      float ${o}(int index) {
        ${Zc(r)}
      }
    `;let n=r.shapeInfo.texShape,s=n[0],a=n[1];if(a===1&&s===1)return`
      float ${o}(int index) {
        return sampleTexture(${e}, halfCR);
      }
    `;let i=sc(e);return a===1?t?`
      float ${o}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / float(${e}TexShape[0]));
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${o}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${i}) + 0.5) / ${s}.0);
        return sampleTexture(${e}, uv);
      }
    `:s===1?t?`
      float ${o}(int index) {
        vec2 uv = vec2((float(index + ${i}) + 0.5) / float(${e}TexShape[1]), 0.5);
        return sampleTexture(${e}, uv);
      }
    `:`
      float ${o}(int index) {
        vec2 uv = vec2((float(index + ${i}) + 0.5) / ${a}.0, 0.5);
        return sampleTexture(${e}, uv);
      }
    `:t?`
    float ${o}(int index) {
      vec2 uv = uvFromFlat(${e}TexShape[0], ${e}TexShape[1], index + ${i});
      return sampleTexture(${e}, uv);
    }
  `:`
    float ${o}(int index) {
      vec2 uv = uvFromFlat(${s}, ${a}, index + ${i});
      return sampleTexture(${e}, uv);
    }
  `}function pB(r,t){let e=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape,a=s[0],i=s[1],c=Ht();if(s!=null&&y.arraysEqual(e,s))return t?`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);

        return ${c.texture2D}(${o}, uv);
      }
    `:`
      vec4 ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${i}.0, ${a}.0);

        return ${c.texture2D}(${o}, uv);
      }
    `;if(t)return`
    vec4 ${n}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${o}, uv);
    }
  `;let l=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],p=Math.ceil(e[1]/2);return`
    vec4 ${n}(int row, int col) {
      vec2 uv = packedUVfrom2D(${p}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${o}, uv);
    }
  `}function uB(r,t){let e=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape;if(s!=null&&y.arraysEqual(e,s)){if(t)return`
      float ${n}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `;let m=s[0],f=s[1];return`
    float ${n}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${f}.0, ${m}.0);
      return sampleTexture(${o}, uv);
    }
  `}let{newShape:a,keptDims:i}=y.squeezeShape(e),c=a;if(c.length<e.length){let m=Qc(r,c),f=["row","col"];return`
      ${Yc(m,t)}
      float ${n}(int row, int col) {
        return ${n}(${Jc(f,i)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${e[1]}, 1)));
        ${Zc(r)}
      }
    `;let l=s[0],p=s[1],u=sc(o);return p===1?t?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${u}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${o}TexShape[0]));
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${u}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${o}, uv);
    }
  `:l===1?t?`
      float ${n}(int row, int col) {
        float index = dot(vec3(row, col, ${u}), vec3(${o}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${o}TexShape[1]), 0.5);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col) {
      float index = dot(vec3(row, col, ${u}), vec3(${e[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${p}.0, 0.5);
      return sampleTexture(${o}, uv);
    }
  `:t?`
      float ${n}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${o}Shape[1] + col + ${u};
        vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
        return sampleTexture(${o}, uv);
      }
    `:`
  float ${n}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${e[1]} + col + ${u};
    vec2 uv = uvFromFlat(${l}, ${p}, index);
    return sampleTexture(${o}, uv);
  }
`}function mB(r,t){let e=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=r.shapeInfo.texShape,a=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)];if(e[0]===1){let m=e.slice(1),f=[1,2],d=Qc(r,m),g=["b","row","col"];return`
        ${ET(d,t)}
        vec4 ${n}(int b, int row, int col) {
          return ${n}(${Jc(g,f)});
        }
      `}let i=Ht();if(t)return`
    vec4 ${n}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${o}TexShape[0]) / 2.0), ceil(float(${o}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${o}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${o}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${i.texture2D}(${o}, uv);
    }
  `;let c=a[0],l=a[1],p=Math.ceil(e[2]/2),u=p*Math.ceil(e[1]/2);return`
    vec4 ${n}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${u}, ${p}, b, row, col);
      return ${i.texture2D}(${o}, uv);
    }
  `}function fB(r,t){let e=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e[1]*e[2],a=e[2],{newShape:i,keptDims:c}=y.squeezeShape(e),l=i;if(l.length<e.length){let g=Qc(r,l),h=["row","col","depth"];return`
        ${Yc(g,t)}
        float ${n}(int row, int col, int depth) {
          return ${n}(${Jc(h,c)});
        }
      `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${s}, ${a}, 1)));
        ${Zc(r)}
      }
    `;let p=r.shapeInfo.texShape,u=p[0],m=p[1],f=r.shapeInfo.flatOffset;if(m===s&&f==null)return t?`
      float ${n}(int row, int col, int depth) {
        int stride1 = ${o}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
        float ${n}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${a}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${m}.0, ${u}.0);
          return sampleTexture(${o}, uv);
        }
      `;if(m===a&&f==null)return t?`
      float ${n}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${o}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
    float ${n}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${e[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${m}.0, ${u}.0);
      return sampleTexture(${o}, uv);
    }
  `;let d=sc(o);return t?`
    float ${n}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${o}Shape[1] * ${o}Shape[2];
      int stride1 = ${o}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${d};
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index);
      return sampleTexture(${o}, uv);
    }
    `:`
      float ${n}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${s} + col * ${a} + depth + ${d};
        vec2 uv = uvFromFlat(${u}, ${m}, index);
        return sampleTexture(${o}, uv);
      }
  `}function dB(r,t){let e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1),n=Ht();if(t)return`
    vec4 ${o}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${e}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${e}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${e}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${e}TexShape[0]) / 2.0), ceil(float(${e}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${n.texture2D}(${e}, uv);
    }
  `;let s=r.shapeInfo.logicalShape,a=s.length,i=r.shapeInfo.texShape,c=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)],l=c[0],p=c[1],u=Math.ceil(s[a-1]/2),m=u*Math.ceil(s[a-2]/2),f="int b, int row, int col",d=`b * ${m} + (row / 2) * ${u} + (col / 2)`;for(let g=2;g<a-1;g++)f=`int b${g}, `+f,m*=s[a-g-1],d=`b${g} * ${m} + `+d;return`
    vec4 ${o}(${f}) {
      int index = ${d};
      int texR = index / ${p};
      int texC = index - texR * ${p};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${p}, ${l});
      return ${n.texture2D}(${e}, uv);
    }
  `}function hB(r,t){let e=r.shapeInfo.logicalShape,o=r.name,n="get"+o.charAt(0).toUpperCase()+o.slice(1),s=e[3],a=e[2]*s,i=e[1]*a,{newShape:c,keptDims:l}=y.squeezeShape(e);if(c.length<e.length){let b=Qc(r,c),I=["row","col","depth","depth2"];return`
      ${Yc(b,t)}
      float ${n}(int row, int col, int depth, int depth2) {
        return ${n}(${Jc(I,l)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${n}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${i}, ${a}, ${s}, 1)));
        ${Zc(r)}
      }
    `;let p=r.shapeInfo.flatOffset,u=r.shapeInfo.texShape,m=u[0],f=u[1],d=`int stride2 = ${o}Shape[3];`,g=`int stride1 = ${o}Shape[2] * stride2;`,h=`int stride0 = ${o}Shape[1] * stride1;`;if(f===i&&p==null)return t?`
      float ${n}(int row, int col, int depth, int depth2) {
        ${d}
        ${g}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${a}, ${s}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${m}.0);
        return sampleTexture(${o}, uv);
      }
    `;if(f===s&&p==null)return t?`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${o}Shape[1] * ${o}Shape[2], ${o}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${o}TexShape[1], ${o}TexShape[0]);
        return sampleTexture(${o}, uv);
      }
    `:`
      float ${n}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${e[1]*e[2]}, ${e[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${m}.0);
        return sampleTexture(${o}, uv);
      }
    `;let x=sc(o);return t?`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${d}
      ${g}
      ${h}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${o}TexShape[0], ${o}TexShape[1], index + ${x});
      return sampleTexture(${o}, uv);
    }
  `:`
    float ${n}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${i} + col * ${a} +
          depth * ${s} + depth2;
      vec2 uv = uvFromFlat(${m}, ${f}, index + ${x});
      return sampleTexture(${o}, uv);
    }
  `}function gB(r){let t=r.shapeInfo.logicalShape,e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1),n=t[4],s=t[3]*n,a=t[2]*s,i=t[1]*a,{newShape:c,keptDims:l}=y.squeezeShape(t);if(c.length<t.length){let g=Qc(r,c),h=["row","col","depth","depth2","depth3"];return`
      ${Yc(g)}
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        return ${o}(${Jc(h,l)});
      }
    `}if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${i}, ${a}, ${s}, ${n})) +
          depth3;
        ${Zc(r)}
      }
    `;let p=r.shapeInfo.flatOffset,u=r.shapeInfo.texShape,m=u[0],f=u[1];if(f===i&&p==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${a}, ${s}, ${n}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${f}.0, ${m}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(f===n&&p==null)return`
      float ${o}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${f}.0, ${m}.0);
        return sampleTexture(${e}, uv);
      }
    `;let d=sc(e);return`
    float ${o}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${i} + col * ${a} + depth * ${s} +
          depth2 * ${n} + depth3 + ${d};
      vec2 uv = uvFromFlat(${m}, ${f}, index);
      return sampleTexture(${e}, uv);
    }
  `}function xB(r){let t=r.shapeInfo.logicalShape,e=r.name,o="get"+e.charAt(0).toUpperCase()+e.slice(1),{newShape:n,keptDims:s}=y.squeezeShape(t);if(n.length<t.length){let h=Qc(r,n),x=["row","col","depth","depth2","depth3","depth4"];return`
      ${Yc(h)}
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${o}(${Jc(x,s)});
      }
    `}let a=t[5],i=t[4]*a,c=t[3]*i,l=t[2]*c,p=t[1]*l;if(r.shapeInfo.isUniform)return`
      float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${p}, ${l}, ${c}, ${i})) +
          dot(
            vec2(depth3, depth4),
            vec2(${a}, 1)));
        ${Zc(r)}
      }
    `;let u=r.shapeInfo.flatOffset,m=r.shapeInfo.texShape,f=m[0],d=m[1];if(d===p&&u==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${i}, ${a})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${d}.0, ${f}.0);
        return sampleTexture(${e}, uv);
      }
    `;if(d===a&&u==null)return`
      float ${o}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${d}.0, ${f}.0);
        return sampleTexture(${e}, uv);
      }
    `;let g=sc(e);return`
    float ${o}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${p} + col * ${l} + depth * ${c} +
          depth2 * ${i} + depth3 * ${a} + depth4 + ${g};
      vec2 uv = uvFromFlat(${f}, ${d}, index);
      return sampleTexture(${e}, uv);
    }
  `}function Zc(r){let t=r.name,e=y.sizeFromShape(r.shapeInfo.logicalShape);return e<2?`return ${t};`:`
    for (int i = 0; i < ${e}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function yB(r,t){let e=r.name,o=e.charAt(0).toUpperCase()+e.slice(1),n="get"+o+"AtOutCoords",s=r.shapeInfo.logicalShape.length,a=t.logicalShape.length,i=NT(r.shapeInfo.logicalShape,t.logicalShape),c=dt(a),l=a-s,p,u=["x","y","z","w","u","v"];s===0?p="":a<2&&i.length>=1?p="coords = 0;":p=i.map(b=>`coords.${u[b+l]} = 0;`).join(`
`);let m="";a<2&&s>0?m="coords":m=r.shapeInfo.logicalShape.map((b,I)=>`coords.${u[I+l]}`).join(", ");let f="return outputValue;",g=y.sizeFromShape(r.shapeInfo.logicalShape)===1,x=y.sizeFromShape(t.logicalShape)===1;if(s===1&&!g&&!x)f=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(g&&!x)a===1?f=`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:f=`
        return vec4(outputValue.x);
      `;else if(i.length){let b=s-2,I=s-1;i.indexOf(b)>-1&&i.indexOf(I)>-1?f="return vec4(outputValue.x);":i.indexOf(b)>-1?f="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":i.indexOf(I)>-1&&(f="return vec4(outputValue.xx, outputValue.zz);")}return`
    vec4 ${n}() {
      ${c} coords = getOutputCoords();
      ${p}
      vec4 outputValue = get${o}(${m});
      ${f}
    }
  `}function bB(r,t){let e=r.name,o=e.charAt(0).toUpperCase()+e.slice(1),n="get"+o+"AtOutCoords",s=t.texShape,a=r.shapeInfo.texShape,i=r.shapeInfo.logicalShape.length,c=t.logicalShape.length;if(!r.shapeInfo.isUniform&&i===c&&r.shapeInfo.flatOffset==null&&y.arraysEqual(a,s))return`
      float ${n}() {
        return sampleTexture(${e}, resultUV);
      }
    `;let l=dt(c),p=NT(r.shapeInfo.logicalShape,t.logicalShape),u=c-i,m,f=["x","y","z","w","u","v"];i===0?m="":c<2&&p.length>=1?m="coords = 0;":m=p.map(g=>`coords.${f[g+u]} = 0;`).join(`
`);let d="";return c<2&&i>0?d="coords":d=r.shapeInfo.logicalShape.map((g,h)=>`coords.${f[h+u]}`).join(", "),`
    float ${n}() {
      ${l} coords = getOutputCoords();
      ${m}
      return get${o}(${d});
    }
  `}function dt(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error(`GPU for rank ${r} is not yet supported`)}function Pm(r,t,e){let{newShape:o,keptDims:n}=y.squeezeShape(t),s=t.length,a=r&&s===3&&t[0]===1,i=a?t.slice(1):o,c=!r&&s>1&&!y.arraysEqual(t,e)&&o.length<s||a;return{useSqueezeShape:c,uniformShape:c?i:t,keptDims:n}}function Qc(r,t){let e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function Jc(r,t){return t.map(e=>r[e]).join(", ")}function RT(r,t,e,o){let n=e.map((p,u)=>{let m={logicalShape:p.shape,texShape:p.isUniform?null:p.texData.texShape,isUniform:p.isUniform,isPacked:p.isUniform?!1:p.texData.isPacked,flatOffset:null};return p.texData!=null&&p.texData.slice!=null&&p.texData.slice.flatOffset>0&&(m.flatOffset=p.texData.slice.flatOffset),{name:t.variableNames[u],shapeInfo:m}}),s=n.map(p=>p.shapeInfo),a={logicalShape:o.shape,texShape:o.texData.texShape,isUniform:!1,isPacked:o.texData.isPacked,flatOffset:null},i=kT(n,a,t),c=iT(r.gl,i),l=r.createProgram(c);return F().get("ENGINE_COMPILE_ONLY")?{program:t,fragmentShader:c,source:i,webGLProgram:l,inShapeInfos:s,outShapeInfo:a,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(r.buildVao(l),Object.assign({program:t,fragmentShader:c,source:i,webGLProgram:l,inShapeInfos:s,outShapeInfo:a},Vx(r,t,l)))}function Vx(r,t,e){let o=[],n=[],s,a,i,c=null,l=null;l=r.getUniformLocation(e,"NAN",!1),F().getNumber("WEBGL_VERSION")===1&&(c=r.getUniformLocation(e,"INFINITY",!1));let p=!1;for(let u of t.variableNames){let m={name:u,uniform:r.getUniformLocation(e,u,p),offset:r.getUniformLocation(e,`offset${u}`,p)};t.enableShapeUniforms&&(m.shape=r.getUniformLocation(e,`${u}Shape`,p),m.texShape=r.getUniformLocation(e,`${u}TexShape`,p)),o.push(m)}if(t.enableShapeUniforms&&(s=r.getUniformLocation(e,"outShape",p),i=r.getUniformLocation(e,"outShapeStrides",p),a=r.getUniformLocation(e,"outTexShape",p)),t.customUniforms)for(let u of t.customUniforms)n.push(r.getUniformLocation(e,u.name,p));return{variablesLocations:o,customUniformLocations:n,infLoc:c,nanLoc:l,outShapeLocation:s,outShapeStridesLocation:i,outTexShapeLocation:a}}function AT(r,t){if(r.length!==t.length)throw Error(`Binary was compiled with ${r.length} inputs, but was executed with ${t.length} inputs`);r.forEach((e,o)=>{let n=e.logicalShape,s=t[o],a=s.shape;if(!y.arraysEqual(n,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${n} and ${a} must match`);if(e.isUniform&&s.isUniform)return;let i=e.texShape,c=s.isUniform?null:s.texData.texShape;if(!y.arraysEqual(i,c))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${i} and ${c} must match`)})}function DT(r,t,e,o,n){t.program.enableShapeUniforms||(AT(t.inShapeInfos,e),AT([t.outShapeInfo],[o]));let s=o.texData.texture,a=o.texData.texShape;o.texData.isPacked?r.setOutputPackedMatrixTexture(s.texture,a[0],a[1]):r.setOutputMatrixTexture(s.texture,a[0],a[1]),r.setProgram(t.webGLProgram),r.bindVertexArray(t.webGLProgram.vao),F().getNumber("WEBGL_VERSION")===1&&t.infLoc!==null&&r.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&r.gl.uniform1f(t.nanLoc,NaN);for(let c=0;c<e.length;++c){let l=e[c],{uniform:p,offset:u,shape:m,texShape:f}=t.variablesLocations[c];if(m){let{uniformShape:d}=Pm(t.program.packedInputs,l.shape,l.texData.texShape);switch(d.length){case 1:r.gl.uniform1iv(m,new Int32Array(d));break;case 2:r.gl.uniform2iv(m,new Int32Array(d));break;case 3:r.gl.uniform3iv(m,new Int32Array(d));break;case 4:r.gl.uniform4iv(m,new Int32Array(d));break;default:break}}if(f&&r.gl.uniform2i(f,l.texData.texShape[0],l.texData.texShape[1]),p!=null){if(l.isUniform){if(y.sizeFromShape(l.shape)<2)r.gl.uniform1f(p,l.uniformValues[0]);else{let d=l.uniformValues;d instanceof Float32Array||(d=new Float32Array(d)),r.gl.uniform1fv(p,d)}continue}l.texData.slice!=null&&u!=null&&r.gl.uniform1i(u,l.texData.slice.flatOffset),r.setInputMatrixTexture(l.texData.texture.texture,p,c)}}let i=t.outShapeLocation;if(i)switch(o.shape.length){case 1:r.gl.uniform1iv(i,new Int32Array(o.shape));break;case 2:r.gl.uniform2iv(i,new Int32Array(o.shape));break;case 3:r.gl.uniform3iv(i,new Int32Array(o.shape));break;case 4:r.gl.uniform4iv(i,new Int32Array(o.shape));break;default:break}if(t.outShapeStridesLocation){let c=y.computeStrides(o.shape);switch(o.shape.length){case 2:r.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(c));break;case 3:r.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(c));break;case 4:r.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(c));break;default:break}}if(t.outTexShapeLocation&&r.gl.uniform2i(t.outTexShapeLocation,o.texData.texShape[0],o.texData.texShape[1]),t.program.customUniforms&&n)for(let c=0;c<t.program.customUniforms.length;++c){let l=t.program.customUniforms[c],p=t.customUniformLocations[c],u=n[c];if(l.type==="float")r.gl.uniform1fv(p,u);else if(l.type==="vec2")r.gl.uniform2fv(p,u);else if(l.type==="vec3")r.gl.uniform3fv(p,u);else if(l.type==="vec4")r.gl.uniform4fv(p,u);else if(l.type==="int")r.gl.uniform1iv(p,u);else if(l.type==="ivec2")r.gl.uniform2iv(p,u);else if(l.type==="ivec3")r.gl.uniform3iv(p,u);else if(l.type==="ivec4")r.gl.uniform4iv(p,u);else throw Error(`uniform type ${l.type} is not supported yet.`)}r.executeProgram()}function FT(r,t,e){let o="";t.concat(e).forEach(a=>{let i=a.texData!=null&&a.texData.slice!=null&&a.texData.slice.flatOffset>0;if(r.enableShapeUniforms&&!a.isUniform){let c=a.texData.texShape,{useSqueezeShape:l,uniformShape:p,keptDims:u}=Pm(r.packedInputs,a.shape,c),m="",f="",d="";if(p.length===1&&r.packedInputs){let E=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)];m=`${E[0]>1}_${E[1]>1}`}else if(p.length===2&&!r.packedInputs)f=`${p[0]>1}_${p[1]>1}`;else if(p.length>2&&!r.packedInputs){let E=y.computeStrides(p);d=`${E[0]===c[1]}_${E[E.length-1]===c[1]}`}let g=a.shape.length,h=p.length===2&&y.arraysEqual(a.shape,c),x=y.sizeFromShape(a.shape)===1,b=v.getBroadcastDims(a.shape,e.shape),I=!r.packedInputs&&g===e.shape.length&&y.arraysEqual(c,e.texData.texShape),T=r.packedInputs||p.length>2?"":`${c[0]>1}_${c[1]>1}`;o+=`${g}_${I}_${l?u:""}_${p.length}_${x}_${b}_${h}_${m}_${f}_${d}_${T}_${i}`}else{let c=a.isUniform?"uniform":a.texData.texShape;o+=`${a.shape}_${c}_${i}`}});let n=r.userCode,s=r.constructor.name;return s+="_"+o+"_"+n+`${F().getNumber("WEBGL_VERSION")}`,s}function _t(r){return F().getBool("WEBGL_USE_SHAPES_UNIFORMS")&&r<=4}var Lm=class{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=us.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let e=Ht();this.outputShape=t,this.enableShapeUniforms=_t(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?nc(["r","c","d"],t):Ur(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${e.output} = result;
      }
    `}};var Bm=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=us.DENSE,this.customUniforms=[{name:"texShape",type:"ivec2"}];let e=Ht();this.outputShape=t,this.enableShapeUniforms=_t(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?nc(["r","c","d"],t):Ur(["r","c","d"],t)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${e.output} = result;
      }
    `}};var Mm=class{constructor(t){this.variableNames=["A"],this.outTexUsage=Ee.DOWNLOAD;let e=Ht();this.outputShape=t,this.userCode=`
      ${Om}

      void main() {
        float x = getAAtOutCoords();
        ${e.output} = encode_float(x);
      }
    `}};var Vm=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=Ee.DOWNLOAD;let e=Ht();this.outputShape=t,this.userCode=`
      ${Om}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${e.output} = encode_float(x);
      }
    `}};var TB={R:0,G:1,B:2,A:3},lu=class{constructor(t,e=!1,o="RGBA"){this.variableNames=["A"],this.customUniforms=[{name:"texShape",type:"ivec2"}];let n=Ht();this.outputShape=t,this.enableShapeUniforms=_t(this.outputShape.length);let s="result";e&&(s="floor(result * 255. + 0.5)");let a="";for(let i=0;i<o.length;i++){let c=o[i];a+=`
          if(offset == ${i}) {
            result = values[${TB[c]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?jc():Kc(t)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${o.length});

        flatIndex = idiv(flatIndex, ${o.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${n.texture2D}(A, uv);
          ${a}
        }
        ${n.output} = vec4(${s}, 0., 0., 0.);
      }
    `}};var Gm=class{constructor(t,e=!1){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:"texShape",type:"ivec2"}];let o=Ht();this.outputShape=t,this.enableShapeUniforms=_t(this.outputShape.length);let n="",s="result";e&&(s="floor(result * 255. + 0.5)");for(let a=0;a<=1;a++)for(let i=0;i<=1;i++){let c=a*2+i;n+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?"outShape[2]":`${t[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${a} < ${this.enableShapeUniforms?"outShape[1]":`${t[1]}`}) {
            localCoords[1] += ${a};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${o.texture2D}(A, uv);

            if (offset == 0) {
              result[${c}] = values[0];
            } else if (offset == 1) {
              result[${c}] = values[1];
            } else if (offset == 2) {
              result[${c}] = values[2];
            } else {
              result[${c}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?jc():Kc(t)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${n}

          ${o.output} = ${s};
        }
    `}};function _T(r){let t=Ht(),e=`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`;return aT(r,e)}function OT(r){let t=new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]);return pT(r,t)}function PT(r){let t=new Uint16Array([0,1,2,2,1,3]);return uT(r,t)}function pu(r,t,e,o,n,s){fT(t,e);let a=mT(r),i=r.TEXTURE_2D;return rt(r,()=>r.bindTexture(i,a)),rt(r,()=>r.texParameteri(i,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)),rt(r,()=>r.texParameteri(i,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)),rt(r,()=>r.texParameteri(i,r.TEXTURE_MIN_FILTER,r.NEAREST)),rt(r,()=>r.texParameteri(i,r.TEXTURE_MAG_FILTER,r.NEAREST)),F().getNumber("WEBGL_VERSION")===1?rt(r,()=>r.texImage2D(i,0,o,t,e,0,n,s,null)):rt(r,()=>r.texStorage2D(i,1,o,t,e)),rt(r,()=>r.bindTexture(r.TEXTURE_2D,null)),{texture:a,texShape:[e,t]}}function Gx(r){return r.internalFormatFloat}function LT(r,t,e,o){let[n,s]=rc(t,e);return pu(r,n,s,Gx(o),o.textureFormatFloat,r.FLOAT)}function Ux(r){return r.internalFormatHalfFloat}function BT(r,t,e,o){let[n,s]=rc(t,e);return pu(r,n,s,Ux(o),o.textureFormatFloat,o.textureTypeHalfFloat)}function zx(r){return r.downloadTextureFormat}function MT(r,t,e,o){let[n,s]=rc(t,e);return pu(r,n,s,zx(o),r.RGBA,r.UNSIGNED_BYTE)}function Wx(r){return r.internalFormatPackedFloat}function VT(r,t,e,o){let[n,s]=fo(t,e);return pu(r,n,s,Wx(o),r.RGBA,r.FLOAT)}function Hx(r){return r.internalFormatPackedHalfFloat}function GT(r,t,e,o){let[n,s]=fo(t,e);return pu(r,n,s,Hx(o),r.RGBA,o.textureTypeHalfFloat)}function UT(r,t,e){return rt(r,()=>r.bindBuffer(r.ARRAY_BUFFER,e)),Lx(r,t,"clipSpacePos",e,3,20,0)&&Lx(r,t,"uv",e,2,20,12)}function zT(r,t,e,o,n,s){rt(r,()=>r.bindTexture(r.TEXTURE_2D,t));let a,i,c;n instanceof Uint8Array?(a=new Uint8Array(e*o*4),i=r.UNSIGNED_BYTE,c=r.RGBA):(a=new Float32Array(e*o*4),i=r.FLOAT,c=s.internalFormatPackedFloat),a.set(n),F().getNumber("WEBGL_VERSION")===2?rt(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,e,o,r.RGBA,i,a)):rt(r,()=>r.texImage2D(r.TEXTURE_2D,0,c,e,o,0,r.RGBA,i,a)),rt(r,()=>r.bindTexture(r.TEXTURE_2D,null))}function WT(r,t,e){rt(r,()=>r.bindTexture(r.TEXTURE_2D,t)),e.data instanceof Uint8Array?F().getNumber("WEBGL_VERSION")===2?rt(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,e.width,e.height,r.RGBA,r.UNSIGNED_BYTE,e.data)):rt(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,e.width,e.height,0,r.RGBA,r.UNSIGNED_BYTE,e.data)):F().getNumber("WEBGL_VERSION")===2?rt(r,()=>r.texSubImage2D(r.TEXTURE_2D,0,0,0,r.RGBA,r.UNSIGNED_BYTE,e)):rt(r,()=>r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,e)),rt(r,()=>r.bindTexture(r.TEXTURE_2D,null))}function HT(r,t,e,o){let n=r.createBuffer();rt(r,()=>r.bindBuffer(r.PIXEL_PACK_BUFFER,n));let i=4*4*t*e;return rt(r,()=>r.bufferData(r.PIXEL_PACK_BUFFER,i,r.STREAM_READ)),rt(r,()=>r.readPixels(0,0,e,t,r.RGBA,r.FLOAT,0)),rt(r,()=>r.bindBuffer(r.PIXEL_PACK_BUFFER,null)),n}function qT(r,t,e){let o=r,n=new Float32Array(e);return o.bindBuffer(o.PIXEL_PACK_BUFFER,t),o.getBufferSubData(o.PIXEL_PACK_BUFFER,0,n),o.bindBuffer(o.PIXEL_PACK_BUFFER,null),n}function KT(r,t,e,o){let[n,s]=rc(t,e),a=4,i=new Uint8Array(oT(t*e,a));return rt(r,()=>r.readPixels(0,0,n,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,i)),new Float32Array(i.buffer)}function jT(r,t,e,o,n,s,a,i){let c=r,l=new Float32Array(nT(s,a));return c.bindBuffer(c.PIXEL_PACK_BUFFER,t),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function XT(r,t,e){let o=new Float32Array(t*e*4);return rt(r,()=>r.readPixels(0,0,e,t,r.RGBA,r.FLOAT,o)),o}var tl=class{constructor(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let e=F().getNumber("WEBGL_VERSION");if(t!=null?(this.gl=t,rT(e,t)):this.gl=rr(e),t=this.gl,F().getNumber("WEBGL_VERSION")===2){let s=t;this.createVertexArray=()=>rt(s,()=>s.createVertexArray()),this.bindVertexArray=a=>rt(s,()=>s.bindVertexArray(a)),this.deleteVertexArray=a=>rt(s,()=>s.deleteVertexArray(a)),this.getVertexArray=()=>rt(s,()=>s.getParameter(s.VERTEX_ARRAY_BINDING))}else if(t!=null){let s=t.getExtension("OES_vertex_array_object");if(s==null)throw new Error("All WebGL1 implementations are expected to offer OES_vertex_array_object.");this.createVertexArray=()=>rt(t,()=>s.createVertexArrayOES()),this.bindVertexArray=a=>rt(t,()=>s.bindVertexArrayOES(a)),this.deleteVertexArray=a=>rt(t,()=>s.deleteVertexArrayOES(a)),this.getVertexArray=()=>rt(t,()=>t.getParameter(s.VERTEX_ARRAY_BINDING_OES))}let o="WEBGL_color_buffer_float",n="EXT_color_buffer_half_float";if(this.parallelCompilationExtension=this.gl.getExtension("KHR_parallel_shader_compile"),F().getNumber("WEBGL_VERSION")===1){let s="OES_texture_float",a="OES_texture_half_float";if(this.textureFloatExtension=au(this.gl,s),fr(this.gl,a))this.textureHalfFloatExtension=au(this.gl,a);else if(F().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(o),fr(this.gl,n))this.colorBufferHalfFloatExtension=au(this.gl,n);else if(F().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(o="EXT_color_buffer_float",fr(this.gl,o))this.colorBufferFloatExtension=this.gl.getExtension(o);else if(fr(this.gl,n))this.colorBufferHalfFloatExtension=this.gl.getExtension(n);else throw new Error("GL context does not support color renderable floats");this.vertexBuffer=OT(this.gl),this.indexBuffer=PT(this.gl),this.framebuffer=dT(this.gl),this.textureConfig=su(this.gl,this.textureHalfFloatExtension)}get debug(){return F().getBool("DEBUG")}dispose(){if(this.disposed)return;this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");let t=this.gl;rt(t,()=>t.finish()),rt(t,()=>t.bindFramebuffer(t.FRAMEBUFFER,null)),rt(t,()=>t.deleteFramebuffer(this.framebuffer)),rt(t,()=>t.bindBuffer(t.ARRAY_BUFFER,null)),rt(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,null)),rt(t,()=>t.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(t,e){return this.throwIfDisposed(),LT(this.gl,t,e,this.textureConfig)}createFloat16MatrixTexture(t,e){return this.throwIfDisposed(),BT(this.gl,t,e,this.textureConfig)}createUnsignedBytesMatrixTexture(t,e){return this.throwIfDisposed(),MT(this.gl,t,e,this.textureConfig)}uploadPixelDataToTexture(t,e){this.throwIfDisposed(),WT(this.gl,t,e)}uploadDenseMatrixToTexture(t,e,o,n){this.throwIfDisposed(),zT(this.gl,t,e,o,n,this.textureConfig)}createFloat16PackedMatrixTexture(t,e){return this.throwIfDisposed(),GT(this.gl,t,e,this.textureConfig)}createPackedMatrixTexture(t,e){return this.throwIfDisposed(),VT(this.gl,t,e,this.textureConfig)}deleteMatrixTexture(t){this.throwIfDisposed(),this.outputTexture===t&&(Bx(this.gl,this.framebuffer),this.outputTexture=null),rt(this.gl,()=>this.gl.deleteTexture(t))}downloadByteEncodedFloatMatrixFromOutputTexture(t,e,o){return this.downloadMatrixDriver(t,()=>KT(this.gl,e,o,this.textureConfig))}downloadPackedMatrixFromBuffer(t,e,o,n,s,a){return jT(this.gl,t,e,o,n,s,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(t,e){return qT(this.gl,t,e)}createBufferFromTexture(t,e,o){this.bindTextureToFrameBuffer(t);let n=HT(this.gl,e,o,this.textureConfig);return this.unbindTextureToFrameBuffer(),n}createAndWaitForFence(){let t=this.createFence(this.gl);return this.pollFence(t)}createFence(t){let e,o;if(F().getBool("WEBGL_FENCE_API_ENABLED")){let n=t,s=n.fenceSync(n.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),o=()=>{let a=n.clientWaitSync(s,0,0);return a===n.ALREADY_SIGNALED||a===n.CONDITION_SATISFIED},e=s}else F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),o=()=>this.isQueryAvailable(e,F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))):o=()=>!0;return{query:e,isFencePassed:o}}downloadMatrixFromPackedTexture(t,e,o){return this.downloadMatrixDriver(t,()=>XT(this.gl,e,o))}createProgram(t){this.throwIfDisposed();let e=this.gl;this.vertexShader==null&&(this.vertexShader=_T(e));let o=cT(e);rt(e,()=>e.attachShader(o,this.vertexShader)),rt(e,()=>e.attachShader(o,t)),lT(e,o);let n=Object.assign(o,{vao:this.createVertexArray()});return this.debug&&Dm(e,n),n}buildVao(t){this.setProgram(t),this.bindVertexArray(t.vao);let e=this.gl;rt(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),UT(e,t,this.vertexBuffer)}deleteProgram(t){this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&(rt(this.gl,()=>this.gl.deleteProgram(t)),this.deleteVertexArray(t.vao))}setProgram(t){this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Dm(this.gl,this.program),rt(this.gl,()=>this.gl.useProgram(t))}getUniformLocation(t,e,o=!0){return this.throwIfDisposed(),o?hT(this.gl,t,e):gT(this.gl,t,e)}getAttributeLocation(t,e){return this.throwIfDisposed(),rt(this.gl,()=>this.gl.getAttribLocation(t,e))}getUniformLocationNoThrow(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)}setInputMatrixTexture(t,e,o){this.throwIfDisposed(),this.throwIfNoProgram(),xT(this.gl,t,e,o)}setOutputMatrixTexture(t,e,o){this.setOutputMatrixTextureDriver(t,o,e)}setOutputPackedMatrixTexture(t,e,o){this.throwIfDisposed();let[n,s]=fo(e,o);this.setOutputMatrixTextureDriver(t,n,s)}setOutputMatrixWriteRegion(t,e,o,n){this.setOutputMatrixWriteRegionDriver(o,t,n,e)}setOutputPackedMatrixWriteRegion(t,e,o,n){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")}debugValidate(){this.program!=null&&Dm(this.gl,this.program),iu(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let t=this.gl;if(this.debug){let e=this.getVertexArray();console.assert(e===this.program.vao,"VAO changed between setProgram and executeProgram!"),this.debugValidate()}rt(t,()=>t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),rt(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=au(this.gl,F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.createQuery();return o.beginQuery(n.TIME_ELAPSED_EXT,s),s}let t=this.getQueryTimerExtensionWebGL1(),e=t.createQueryEXT();return t.beginQueryEXT(t.TIME_ELAPSED_EXT,e),e}endQuery(){if(F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){let e=this.gl,o=this.getQueryTimerExtensionWebGL2();e.endQuery(o.TIME_ELAPSED_EXT);return}let t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(t){return await y.repeatedTry(()=>this.disposed||this.isQueryAvailable(t,F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))),this.getQueryTime(t,F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}getQueryTime(t,e){if(e===0)return null;if(e===2){let o=this.gl;return o.getQueryParameter(t,o.QUERY_RESULT)/1e6}else{let o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(t,e){if(e===0)return!0;if(e===2){let o=this.gl,n=this.getQueryTimerExtensionWebGL2(),s=o.getQueryParameter(t,o.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(n.GPU_DISJOINT_EXT)),s&&!this.disjoint}else{let o=this.getQueryTimerExtensionWebGL1(),n=o.getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),n&&!this.disjoint}}pollFence(t){return new Promise(e=>{this.addItemToPoll(()=>t.isFencePassed(),()=>e())})}pollItems(){let t=SB(this.itemsToPoll.map(e=>e.isDoneFn));for(let e=0;e<=t;++e){let{resolveFn:o}=this.itemsToPoll[e];o()}this.itemsToPoll=this.itemsToPoll.slice(t+1)}addItemToPoll(t,e){if(this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1)return;let o;"setTimeoutCustom"in F().platform&&(o=F().platform.setTimeoutCustom.bind(F().platform)),y.repeatedTry(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,o)}bindTextureToFrameBuffer(t){this.throwIfDisposed(),Fm(this.gl,t,this.framebuffer),this.debug&&iu(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture!=null?(Fm(this.gl,this.outputTexture,this.framebuffer),this.debug&&iu(this.gl)):Bx(this.gl,this.framebuffer)}downloadMatrixDriver(t,e){this.bindTextureToFrameBuffer(t);let o=e();return this.unbindTextureToFrameBuffer(),o}setOutputMatrixTextureDriver(t,e,o){this.throwIfDisposed();let n=this.gl;Fm(n,t,this.framebuffer),this.debug&&iu(n),this.outputTexture=t,rt(n,()=>n.viewport(0,0,e,o)),rt(n,()=>n.scissor(0,0,e,o))}setOutputMatrixWriteRegionDriver(t,e,o,n){this.throwIfDisposed(),rt(this.gl,()=>this.gl.scissor(t,e,o,n))}throwIfDisposed(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")}throwIfNoProgram(){if(this.program==null)throw new Error("No GPU program is currently set.")}};function SB(r){let t=0;for(;t<r.length&&r[t]();++t);return t-1}var Ty={};Et(Ty,{addImpl:()=>jx,bincountImpl:()=>ol,bincountReduceImpl:()=>Um,bitwiseAndImpl:()=>Xx,castImpl:()=>Kx,ceilImpl:()=>Yx,concatImpl:()=>zm,equalImpl:()=>Zx,expImpl:()=>Jx,expm1Impl:()=>ey,floorDivImpl:()=>oy,floorImpl:()=>ry,gatherNdImpl:()=>Wm,gatherV2Impl:()=>Hm,greaterEqualImpl:()=>sy,greaterImpl:()=>ny,lessEqualImpl:()=>iy,lessImpl:()=>ay,linSpaceImpl:()=>qm,logImpl:()=>cy,maxImpl:()=>Km,maximumImpl:()=>ly,minimumImpl:()=>py,multiplyImpl:()=>uu,negImpl:()=>uy,notEqualImpl:()=>my,prodImpl:()=>fy,raggedGatherImpl:()=>jm,raggedRangeImpl:()=>Xm,raggedTensorToTensorImpl:()=>Ym,rangeImpl:()=>Zm,rsqrtImpl:()=>hy,scatterImpl:()=>zr,sigmoidImpl:()=>NI,simpleAbsImpl:()=>qx,sliceImpl:()=>xy,sparseFillEmptyRowsImpl:()=>Qm,sparseReshapeImpl:()=>Jm,sparseSegmentReductionImpl:()=>sl,sqrtImpl:()=>$I,squaredDifferenceImpl:()=>yy,staticRegexReplaceImpl:()=>by,stridedSliceImpl:()=>tf,stringNGramsImpl:()=>ef,stringSplitImpl:()=>rf,stringToHashBucketFastImpl:()=>of,subImpl:()=>Cy,tileImpl:()=>nf,topKImpl:()=>sf,transposeImpl:()=>nl,uniqueImpl:()=>af});function z(r,t){Array.isArray(r)||(r=[r]),r.forEach(e=>{e!=null&&y.assert(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the CPU backend.`)})}function qx(r){let t=new Float32Array(r.length);for(let e=0;e<r.length;++e)t[e]=Math.abs(r[e]);return t}var vB=r=>{let{x:t}=r.inputs,e=r.backend;z(t,"abs");let o=new Float32Array(y.sizeFromShape(t.shape)),n=e.data.get(t.dataId).values;return o=qx(n),e.makeOutput(o,t.shape,t.dtype)},YT={kernelName:"Abs",backendName:"cpu",kernelFunc:vB};function wt(r){return(t,e,o,n,s)=>{let a=v.assertAndGetBroadcastShape(t,e),i=a.length,c=y.computeStrides(a),l=y.sizeFromShape(a),p=y.getTypedArrayFromDType(s,l),u=t.length,m=e.length,f=y.computeStrides(t),d=y.computeStrides(e),g=v.getBroadcastDims(t,a),h=v.getBroadcastDims(e,a);if(g.length+h.length===0)for(let x=0;x<p.length;++x)p[x]=r(o[x%o.length],n[x%n.length]);else for(let x=0;x<p.length;++x){let b=y.indexToLoc(x,i,c),I=b.slice(-u);g.forEach(A=>I[A]=0);let T=y.locToIndex(I,u,f),E=b.slice(-m);h.forEach(A=>E[A]=0);let $=y.locToIndex(E,m,d);p[x]=r(o[T],n[$])}return[p,a]}}function me(r){let{inputs:t,backend:e}=r,{real:o,imag:n}=t,s=e.data.get(o.dataId).values,a=e.data.get(n.dataId).values,i=e.makeTensorInfo(o.shape,"complex64"),c=e.data.get(i.dataId);return c.complexTensorInfos={real:e.makeTensorInfo(o.shape,"float32",s),imag:e.makeTensorInfo(n.shape,"float32",a)},i}var ZT={kernelName:Os,backendName:"cpu",kernelFunc:me};function el(r,t,e="float32"){if(e==="complex64"){let n=el(r,t,"float32"),s=el(r,t,"float32");return me({inputs:{real:n,imag:s},backend:r})}let o=y.makeZerosTypedArray(y.sizeFromShape(t),e);return r.makeTensorInfo(t,e,o)}function $e(r){let{inputs:t,backend:e}=r,{x:o}=t;return e.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}var QT={kernelName:So,backendName:"cpu",kernelFunc:$e};function Cr(r){let{inputs:t,backend:e}=r,{input:o}=t,n=e.data.get(o.dataId).complexTensorInfos.real,s=e.data.get(n.dataId).values;return e.makeTensorInfo(n.shape,n.dtype,s)}var JT={kernelName:Pa,backendName:"cpu",kernelFunc:Cr};function Kx(r,t,e,o){if(o==="int32"){let n=Int32Array.from(r);return[t,"int32",n]}if(o==="bool"){let n=y.toTypedArray([0],e),[s,a]=wt((i,c)=>i!==c?1:0)(t,[],r,n,"bool");return[a,"bool",s]}throw new Error(`Error in Cast: failed to cast ${e} to ${o}`)}function Tr(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return $e({inputs:{x:n},backend:e});let p=el(e,n.shape,n.dtype),u=Tr({inputs:{x:n},backend:e,attrs:{dtype:"float32"}}),m=me({inputs:{real:u,imag:p},backend:e});return e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(u),m}if(n.dtype==="complex64"){let p=Cr({inputs:{input:n},backend:e}),u=Tr({inputs:{x:p},backend:e,attrs:{dtype:s}});return e.disposeIntermediateTensorInfo(p),u}if(!y.hasEncodingLoss(n.dtype,s)){let p=$e({inputs:{x:n},backend:e});return{dataId:p.dataId,shape:p.shape,dtype:s}}let a=e.data.get(n.dataId).values,[i,c,l]=Kx(a,n.shape,n.dtype,s);return e.makeTensorInfo(i,c,l)}var tI={kernelName:Io,backendName:"cpu",kernelFunc:Tr};function Nt(r,t,e,o){return e==null?({inputs:n,backend:s})=>{let{a,b:i}=n,c=s;z([a,i],r);let l=c.data.get(a.dataId).values,p=c.data.get(i.dataId).values,u=a.dtype==="string"?v.fromUint8ToStringArray(l):l,m=a.dtype==="string"?v.fromUint8ToStringArray(p):p,f=o||a.dtype,[d,g]=t(a.shape,i.shape,u,m,f);return c.makeTensorInfo(g,f,d)}:({inputs:n,backend:s})=>{let{a,b:i}=n,c=s;if(a.dtype==="complex64"||i.dtype==="complex64"){let l=Tr({inputs:{x:a},backend:c,attrs:{dtype:"complex64"}}),p=c.data.get(l.dataId),u=p.complexTensorInfos.real,m=p.complexTensorInfos.imag,f=c.data.get(u.dataId).values,d=c.data.get(m.dataId).values,g=Tr({inputs:{x:i},backend:c,attrs:{dtype:"complex64"}}),h=c.data.get(g.dataId),x=h.complexTensorInfos.real,b=h.complexTensorInfos.imag,I=c.data.get(x.dataId).values,T=c.data.get(b.dataId).values,[E,$,A]=e(a.shape,i.shape,f,d,I,T),D=c.makeTensorInfo(A,"float32",E),_=c.makeTensorInfo(A,"float32",$),O=me({inputs:{real:D,imag:_},backend:c});return c.disposeIntermediateTensorInfo(l),c.disposeIntermediateTensorInfo(g),c.disposeIntermediateTensorInfo(D),c.disposeIntermediateTensorInfo(_),O}else{let l=c.data.get(a.dataId).values,p=c.data.get(i.dataId).values,u=o||a.dtype,[m,f]=t(a.shape,i.shape,l,p,u);return c.makeTensorInfo(f,u,m)}}}function rl(r){return(t,e,o,n,s,a)=>{let i=v.assertAndGetBroadcastShape(t,e),c=y.sizeFromShape(i),l=i.length,p=y.computeStrides(i),u=y.getTypedArrayFromDType("float32",c),m=y.getTypedArrayFromDType("float32",c),f=v.getBroadcastDims(t,i),d=v.getBroadcastDims(e,i),g=v.mergeRealAndImagArrays(o,n),h=v.mergeRealAndImagArrays(s,a),x=t.length,b=y.computeStrides(t),I=e.length,T=y.computeStrides(e);if(f.length+d.length===0)for(let E=0;E<u.length;E++){let $=E%g.length,A=E%h.length,D=r(g[$*2],g[$*2+1],h[A*2],h[A*2+1]);u[E]=D.real,m[E]=D.imag}else for(let E=0;E<u.length;E++){let $=y.indexToLoc(E,l,p),A=$.slice(-x);f.forEach(B=>A[B]=0);let D=y.locToIndex(A,x,b),_=$.slice(-I);d.forEach(B=>_[B]=0);let O=y.locToIndex(_,I,T),L=r(g[D*2],g[D*2+1],h[O*2],h[O*2+1]);u[E]=L.real,m[E]=L.imag}return[u,m,i]}}var jx=wt(((r,t)=>r+t)),NB=rl(((r,t,e,o)=>({real:r+e,imag:t+o}))),go=Nt("Add",jx,NB),eI={kernelName:"Add",backendName:"cpu",kernelFunc:go};function ol(r,t,e,o,n){let s=y.sizeFromShape(o),a=y.makeZerosTypedArray(n,e);for(let i=0;i<r.length;i++){let c=r[i];if(c<0)throw new Error("Input x must be non-negative!");c>=n||(s>0?a[c]+=t[i]:a[c]+=1)}return a}function Um(r,t,e,o=!1){let n=r.shape[0],s=r.shape[1],a=ot([n,e],t.dtype);for(let i=0;i<n;i++)for(let c=0;c<s;c++){let l=r.get(i,c);if(l<0)throw new Error("Input x must be non-negative!");l>=e||(o?a.set(1,i,l):t.size>0?a.set(a.get(i,l)+t.get(i,c),i,l):a.set(a.get(i,l)+1,i,l))}return a}var Xx=wt(((r,t)=>r&t)),kB=Nt(cn,Xx),rI={kernelName:cn,backendName:"cpu",kernelFunc:kB};function he(r){return(t,e,o)=>{let n=y.getArrayFromDType(e,t.length);for(let s=0;s<t.length;++s)n[s]=r(t[s],o);return n}}function pt(r,t,e){let o=he(t);return Ke(r,o,e)}function Ke(r,t,e){return({inputs:o,attrs:n,backend:s})=>{let{x:a}=o;z(a,r);let i=s,c=i.data.get(a.dataId).values,l;if(a.dtype==="string"){if(!Array.isArray(c))throw new Error("String tensor's value was not an instance of Array");l=v.fromUint8ToStringArray(c)}else l=c;let p=e||a.dtype,u=t(l,p,n);return i.makeTensorInfo(a.shape,p,u)}}var Yx=he(r=>Math.ceil(r)),EB=Ke(ln,Yx),oI={kernelName:ln,backendName:"cpu",kernelFunc:EB};function zm(r,t,e,o){let n=y.getArrayFromDType(e,y.sizeFromShape(t));if(o&&e!=="string"){let s=0;r.forEach(a=>{let i=y.sizeFromShape(a.shape);n.set(a.vals,s),s+=i})}else{let s=0;r.forEach(a=>{let i=e==="string"?v.fromUint8ToStringArray(a.vals):a.vals,c=0;for(let l=0;l<a.shape[0];++l){let p=l*t[1]+s;for(let u=0;u<a.shape[1];++u)n[p+u]=i[c++]}s+=a.shape[1]})}return n}var Zx=wt((r,t)=>r===t?1:0),Qx=Nt(fn,Zx,null,"bool"),nI={kernelName:fn,backendName:"cpu",kernelFunc:Qx};var Jx=he(r=>Math.exp(r)),ty=Ke("Exp",Jx,"float32"),sI={kernelName:"Exp",backendName:"cpu",kernelFunc:ty};var ey=he(r=>Math.expm1(r)),$B=Ke(dn,ey),aI={kernelName:dn,backendName:"cpu",kernelFunc:$B};var ry=he(r=>Math.floor(r)),AB=Ke(hn,ry),iI={kernelName:hn,backendName:"cpu",kernelFunc:AB};var oy=wt((r,t)=>Math.floor(r/t)),RB=Nt(gn,oy,null,"int32"),cI={kernelName:gn,backendName:"cpu",kernelFunc:RB};function Wm(r,t,e,o,n,s,a,i,c){let l=ot([o,s],e);for(let p=0;p<o;p++){let u=[],m=0;for(let f=0;f<n;f++){let d=r[p*n+f];m+=d*a[f],u.push(d)}if(m<0||m>=c/s)throw new Error(`Invalid indices: ${u} does not index into ${i}`);for(let f=0;f<s;f++)l.values[p*s+f]=t.get(...t.indexToLoc(m*s+f))}return l}function Hm(r,t,e){let o=ot(e,r.dtype);for(let n=0;n<o.size;++n){let a=o.indexToLoc(n).slice(),i=a[0],c=a[2],l=t.locToIndex([i,c]);a[2]=t.values[l];let p=r.locToIndex(a);0<=p&&p<r.values.length&&(o.values[n]=r.values[p])}return o}var ny=wt((r,t)=>r>t?1:0),DB=Nt(xn,ny,null,"bool"),lI={kernelName:xn,backendName:"cpu",kernelFunc:DB};var sy=wt((r,t)=>r>=t?1:0),FB=Nt(yn,sy,null,"bool"),pI={kernelName:yn,backendName:"cpu",kernelFunc:FB};var ay=wt((r,t)=>r<t?1:0),_B=Nt(Tn,ay,null,"bool"),uI={kernelName:Tn,backendName:"cpu",kernelFunc:_B};var iy=wt((r,t)=>r<=t?1:0),OB=Nt(In,iy,null,"bool"),mI={kernelName:In,backendName:"cpu",kernelFunc:OB};function qm(r,t,e){let o=(t-r)/(e-1),n=y.makeZerosTypedArray(e,"float32");n[0]=r;for(let s=1;s<n.length;s++)n[s]=n[s-1]+o;return n}var cy=he(r=>Math.log(r)),PB=Ke("Log",cy),fI={kernelName:"Log",backendName:"cpu",kernelFunc:PB};function Km(r,t,e,o){let n=y.getTypedArrayFromDType(o,y.sizeFromShape(e));for(let s=0;s<n.length;++s){let a=s*t,i=r[a];for(let c=0;c<t;++c){let l=r[a+c];(Number.isNaN(l)||l>i)&&(i=l)}n[s]=i}return n}var ly=wt(((r,t)=>Math.max(r,t))),LB=Nt(En,ly),dI={kernelName:En,backendName:"cpu",kernelFunc:LB};var py=wt(((r,t)=>Math.min(r,t))),BB=Nt($n,py),hI={kernelName:$n,backendName:"cpu",kernelFunc:BB};var uu=wt(((r,t)=>r*t)),MB=rl(((r,t,e,o)=>({real:r*e-t*o,imag:r*o+t*e}))),ac=Nt(An,uu,MB),gI={kernelName:An,backendName:"cpu",kernelFunc:ac};function uy(r,t,e){let o=y.createScalarValue(-1,e);return uu([],t,o,r,e)}function VB(r){let{inputs:t,backend:e}=r,{x:o}=t;z(o,"neg");let n=e.data.get(o.dataId).values,[s,a]=uy(n,o.shape,o.dtype);return e.makeTensorInfo(a,o.dtype,s)}var xI={kernelName:"Neg",backendName:"cpu",kernelFunc:VB};var my=wt(((r,t)=>r!==t?1:0)),GB=Nt(Rn,my,null,"bool"),yI={kernelName:Rn,backendName:"cpu",kernelFunc:GB};function nl(r,t,e,o,n){let s=t.length,a=y.sizeFromShape(t),i=y.computeStrides(t),c=y.computeStrides(n),l=y.getTypedArrayFromDType(e,y.sizeFromShape(n));for(let p=0;p<a;++p){let u=y.indexToLoc(p,s,i),m=new Array(u.length);for(let d=0;d<m.length;d++)m[d]=u[o[d]];let f=y.locToIndex(m,s,c);l[f]=r[p]}return l}function qt(r){let{inputs:t,attrs:e,backend:o}=r,{x:n}=t,{perm:s}=e;z(n,"transpose");let a=n.shape.length,i=new Array(a);for(let u=0;u<i.length;u++)i[u]=n.shape[s[u]];let c=o.data.get(n.dataId).values,l=nl(c,n.shape,n.dtype,s,i);return{dataId:o.write(l,i,n.dtype),shape:i,dtype:n.dtype}}var bI={kernelName:No,backendName:"cpu",kernelFunc:qt};function fy(r,t,e,o){let[n,s]=v.computeOutAndReduceShapes(r,o),a=re(t,"int32"),i=y.makeZerosTypedArray(y.sizeFromShape(n),a),c=y.sizeFromShape(s);for(let l=0;l<i.length;++l){let p=l*c,u=1;for(let m=0;m<c;++m)u*=e[p+m];i[l]=u}return{outVals:i,outShape:n,outDtype:a}}function UB(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o;z(n,"prod");let i=n.shape.length,c=y.parseAxisParam(s,n.shape),l=v.getAxesPermutation(c,i),p=c,u=n,m=[];l!=null&&(u=qt({inputs:{x:n},backend:e,attrs:{perm:l}}),m.push(u),p=v.getInnerMostAxes(p.length,i));let f=e.data.get(u.dataId).values,{outVals:d,outShape:g,outDtype:h}=fy(u.shape,u.dtype,f,p),x=g;return a&&(x=v.expandShapeToKeepDim(g,c)),m.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.makeTensorInfo(x,h,d)}var wI={kernelName:Ra,backendName:"cpu",kernelFunc:UB};function zB(r,t,e){r.forEach((o,n)=>{if(o<0||o>=e){let s=y.indexToLoc(n,t.length,y.computeStrides(t)).join(",");throw new Error(`indices[${s}] = ${o} is not in [0, ${e})`)}})}function WB(r,t){for(let e=0;e<r.length;++e){let o=r[e],n=e===r.length-1?t:r[e+1].length;if(o.length===0)throw new Error("Ragged splits may not be empty");if(o[0]<0)throw new Error("Ragged splits must be non-negative");if(o[o.length-1]>n)throw new Error("Ragged splits must not point past values");for(let s=1;s<o.length;++s)if(o[s-1]>o[s])throw new Error("Ragged splits must be sorted in ascending order")}}function HB(r,t,e,o){let n=[],s=0,a=t.length-1+e.length,i=new Array(a).fill(null).map(()=>[0]);WB(e,o);let c=1;for(let l=0;l<t.length-1;++l){c*=t[l];let p=t[l+1];for(let u=1;u<c+1;++u)i[l].push(u*p)}for(let l=0;l<r.length;++l){let p=r[l],u=r[l]+1;for(let m=0;m<e.length;++m){let f=e[m],d=m+t.length-1;if(d>=0){let g=i[d],h=g[g.length-1]-f[p];for(let x=p;x<u;++x)i[d].push(f[x+1]+h)}p=f[p],u=f[u]}u!==p&&(n.push([p,u]),s+=u-p)}return{outSplits:i,valueSlices:n,numValues:s}}function qB(r){let t=[];for(let e=0;e<r.length;++e){let o=r[e].length,n=y.getArrayFromDType("int32",o);t.push(n),r[e].forEach((s,a)=>n[a]=s)}return t}function CI(r,t){let e=r.slice(0,t);for(;e.length<t;)e.push(1);for(let o=t;o<r.length;o++)e[t-1]*=r[o];return e}function KB(r,t,e,o,n,s){let a=CI(t,2)[1],i=CI(s,2)[1],c=0;for(let l of e)for(let p=l[0];p<l[1];++p){for(let u=0;u<o;++u)n[c*i+u]=r[p*a+u];++c}}function jB(r,t,e,o,n){let s=t.slice();s[0]=n;let a=y.getArrayFromDType(e,y.sizeFromShape(s)),i=r.length,c=i===0?0:i/t[0];return KB(r,t,o,c,a,s),[a,s]}function jm(r,t,e,o,n,s,a,i){if(r.length===0)throw new Error("paramsNestedSplits must be non empty");if(t[0].length===0)throw new Error("Split tensors must not be scalars");let c=t[0][0]-1;if(zB(s,a,c),o.length===0)throw new Error("params.rank must be nonzero");let l=o[0],{outSplits:p,valueSlices:u,numValues:m}=HB(s,a,r,l),f=qB(p),d=jB(e,o,n,u,m);return[f,d[0],d[1]]}var TI=2147483647;function Xm(r,t,e,o,n,s,a){if(t.length>1)throw new Error("starts must be a scalar or vector");if(n.length>1)throw new Error("limits must be a scalar or vector");if(a.length>1)throw new Error("deltas must be a scalar or vector");let i=t.length===0,c=n.length===0,l=a.length===0,p=[];i||p.push(t[0]),c||p.push(n[0]),l||p.push(a[0]);for(let h=1;h<p.length;++h)if(p[h]!==p[h-1])throw new Error("starts, limits, and deltas must have the same shape");let u=p.length===0?1:p[0],m=y.getArrayFromDType("int32",u+1);m[0]=0;for(let h=0;h<u;++h){let x=i?r[0]:r[h],b=c?o[0]:o[h],I=l?s[0]:s[h];if(I===0)throw new Error("Requires delta != 0");let T;if(I>0&&b<x||I<0&&b>x)T=0;else if(T=Math.ceil(Math.abs((b-x)/I)),T>TI)throw new Error(`Requires ((limit - start) / delta) <= ${TI}`);m[h+1]=m[h]+T}let f=m[u],d=y.getArrayFromDType(e,f),g=0;for(let h=0;h<u;++h){let x=m[h+1]-m[h],b=i?r[0]:r[h],I=l?s[0]:s[h];for(let T=0;T<x;++T)d[g++]=b,b+=I}return[m,d]}var Ir=v.RowPartitionType,dy=class r{constructor(t,e,o,n,s,a,i,c,l,p){this.shape=t,this.shapeShape=e,this.values=o,this.valuesShape=n,this.valuesDType=s,this.defaultValue=a,this.defaultValueShape=i,this.rowPartitionValues=c,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=v.getRowPartitionTypesHelper(p),this.raggedRank=v.getRaggedRank(this.rowPartitionTypes)}getRowPartitionTypeByDimension(t){return this.rowPartitionTypes[0]===Ir.FIRST_DIM_SIZE?this.rowPartitionTypes[t+1]:this.rowPartitionTypes[t]}getRowPartitionTensor(t){return this.rowPartitionTypes[0]===Ir.FIRST_DIM_SIZE?this.rowPartitionValues[t+1]:this.rowPartitionValues[t]}getMaxWidth(t){let e=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case Ir.VALUE_ROWIDS:return r.getMaxWidthValueRowID(e);case Ir.ROW_SPLITS:return r.getMaxWidthRowSplit(e);default:throw new Error(`Cannot handle partition type ${Ir[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(t){let e=t.length;if(e===0||e===1)return 0;let o=0;for(let n=0;n<e-1;++n){let s=t[n+1]-t[n];s>o&&(o=s)}return o}static getMaxWidthValueRowID(t){let e=t.length;if(e===0)return 0;let o=0,n=t[0],s=0;for(let a=1;a<e;++a){let i=t[a];i!==n&&(n=i,s=Math.max(a-o,s),o=a)}return Math.max(e-o,s)}tensorShapeFromTensor(t,e,o=!0){if(e.length===0){if(t[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return SI(t,o)}calculateOutputSize(t){let e=this.valuesShape,o=this.defaultValueShape;v.validateDefaultValueShape(o,e);let n=this.tensorShapeFromTensor(this.shape,this.shapeShape),a=v.combineRaggedTensorToTensorShapes(this.raggedRank,n,e);a[0]<0&&(a[0]=t);for(let i=1;i<=this.raggedRank;++i)a[i]<0&&(a[i]=this.getMaxWidth(i));return a}calculateFirstParentOutputIndex(t,e,o){let n=Math.min(t,o),s=[],a=0;for(let i=0;i<n;++i,a+=e)s.push(a);for(let i=n;i<t;++i)s.push(-1);return y.assert(s.length===t,()=>"Final length of result must be equal to firstDimension."),s}calculateOutputIndexRowSplit(t,e,o,n){let s=t.length,a=[];for(let i=0;i<s-1;++i){let c=t[i+1]-t[i],l=Math.min(n,c),p=e[i];p===-1&&(l=0);for(let u=0;u<l;++u)a.push(p),p+=o;for(let u=0;u<c-l;++u)a.push(-1)}if(s>0&&a.length!==t[s-1])throw new Error("Invalid row split size.");return a}calculateOutputIndexValueRowID(t,e,o,n){let s=t.length,a=[];if(s===0)return[];let i=0,c=t[0];if(c>=e.length)throw new Error(`Got currentValueRowId=${c}, which is not less than ${e.length}`);let l=e[c];a.push(l);for(let p=1;p<s;++p){let u=t[p];if(u===c)l>=0&&(++i,i<n?l+=o:l=-1);else{if(i=0,c=u,u>=e.length)throw new Error(`Got nextValueRowId=${u} which is not less than ${e.length}`);l=e[u]}a.push(l)}if(a.length!==t.length)throw new Error("Invalid row ids.");return a}calculateOutputIndex(t,e,o,n){let s=this.getRowPartitionTensor(t),a=this.getRowPartitionTypeByDimension(t);switch(a){case Ir.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(s,e,o,n);case Ir.ROW_SPLITS:if(s.length-1>e.length)throw new Error(`Row partition size is greater than output size: ${s.length-1} > ${e.length}`);return this.calculateOutputIndexRowSplit(s,e,o,n);default:throw new Error(`Unsupported partition type: ${Ir[a]}`)}}getFirstDimensionSize(){let t=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");let e=this.rowPartitionTypes[0];switch(e){case Ir.FIRST_DIM_SIZE:return t[0];case Ir.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case Ir.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${Ir[e]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");let e=this.getFirstDimensionSize(),o=this.calculateOutputSize(e),n=new Array(this.raggedRank+1);n[n.length-1]=1;for(let c=n.length-2;c>=0;--c)n[c]=n[c+1]*o[c+1];let s=SI(o,!1),a=y.getArrayFromDType(this.valuesDType,y.sizeFromShape(s));if(n[0]*o[0]>0){let c=this.calculateFirstParentOutputIndex(e,n[0],o[0]);for(let l=1;l<=this.raggedRank;++l)c=this.calculateOutputIndex(l-1,c,n[l],o[l]);this.setOutput(this.raggedRank,c,a,s)}return[s,a]}setOutput(t,e,o,n){if(o.length===0)return;let s=this.values,a=o,i=n.slice();i=i.slice(t+1);let c=y.sizeFromShape(i),l=e.length,p=this.defaultValue;if(p.length!==c&&p.length!==1){let d=this.defaultValueShape;gt(()=>{let g=P(p,d);p=Or(g,i).dataSync()})}let u=0,m=0,f=0;for(let d=0;d<=l;++d){let g=d<l?e[d]:-1;if(g===f){++f;continue}if(m<f){let h=s.subarray(u*c),x=a.subarray(m*c),b=(f-m)*c;II(x,h,b)}if(d>=l){let h=o.length;g=Math.floor(h/c)}if(g>f)if(this.defaultValue.length===1)a.subarray(f*c,g*c).fill(this.defaultValue[0]),f=g;else for(;g>f;){let h=a.slice(f*c);II(h,p,c),++f}g<0?(u=d+1,m=f):(u=d,m=f,f=m+1)}}};function II(r,t,e){for(let o=0;o<e;o++)r[o]=t[o]}function SI(r,t){let e=[];for(let o of r){if(o<0){if(!t)throw new Error(`Dimension ${o} must be >= 0`);if(o<-1)throw new Error(`Dimension ${o} must be >= -1`);o=-1}e.push(o)}return e}function Ym(r,t,e,o,n,s,a,i,c,l){return new dy(r,t,e,o,n,s,a,i,c,l).compute()}function Zm(r,t,e,o){let n=r===t,s=r<t&&e<0,a=t<r&&e>1;if(n||s||a)return y.makeZerosTypedArray(0,o);let i=Math.abs(Math.ceil((t-r)/e)),c=y.makeZerosTypedArray(i,o);t<r&&e===1&&(e=-1),c[0]=r;for(let l=1;l<c.length;l++)c[l]=c[l-1]+e;return c}var hy=he(r=>1/Math.sqrt(r)),XB=Ke(Pn,hy),vI={kernelName:Pn,backendName:"cpu",kernelFunc:XB};function zr(r,t,e,o,n,s,a,i,c,l){let p=[o/n,n],u=r.values,m=t.values;if(o===0)return ot(e,t.dtype);let f=c instanceof $t?c:ot(p,t.dtype);typeof c=="string"||typeof c=="number"?f.values.fill(c):typeof c=="boolean"&&f.values.fill(+c);for(let d=0;d<s;d++){let g=[],h=0;for(let x=0;x<a;x++){let b=u[d*a+x];g.push(b),h+=b*i[x]}if(h<0||h>=o/n)throw new Error(`Invalid indices: ${g} does not index into ${e}`);for(let x=0;x<n;x++)l?f.values[h*n+x]+=m[d*n+x]:f.values[h*n+x]=t.rank===0?m[0]:m[d*n+x]}return f}var NI=he(r=>1/(1+Math.exp(-r))),gy=pt(Vn,r=>1/(1+Math.exp(-r))),kI={kernelName:Vn,backendName:"cpu",kernelFunc:gy};function xy(r,t,e,o,n){let s=ue.isSliceContinous(o,t,e),a=y.sizeFromShape(e),i=y.computeStrides(o);if(s){let u=ue.computeFlatOffset(t,i);return n==="string"?r.slice(u,u+a):r.subarray(u,u+a)}let c=n==="string"?v.fromUint8ToStringArray(r):r,l=ot(o,n,c),p=ot(e,n);for(let u=0;u<p.size;++u){let m=p.indexToLoc(u),f=m.map((d,g)=>d+t[g]);p.set(l.get(...f),...m)}return n==="string"?v.fromStringArrayToUint8(p.values):p.values}function Sr(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{begin:s,size:a}=o;z(n,"slice");let[i,c]=ue.parseSliceParams(n,s,a);ue.assertParamsValid(n,i,c);let l=e.data.get(n.dataId).values,p=xy(l,i,c,n.shape,n.dtype);return e.makeTensorInfo(c,n.dtype,p)}var EI={kernelName:Ha,backendName:"cpu",kernelFunc:Sr};function Qm(r,t,e,o,n,s,a){let i=t[0],c=s[0],l=new Array(c),p=new Array(i),u=t[1];if(c===0){if(i!==0)throw new Error(v.getSparseFillEmptyRowsIndicesDenseShapeMismatch(i));let h=y.getArrayFromDType(e,0),x=y.getArrayFromDType(n,0);return[h,[0,u],x,l,p]}let m=!0,f=0,d=new Array(c).fill(0);for(let h=0;h<i;++h){let x=r[h*u];if(x<0)throw new Error(v.getSparseFillEmptyRowsNegativeIndexErrorMessage(h,x));if(x>=c)throw new Error(v.getSparseFillEmptyRowsOutOfRangeIndexErrorMessage(h,x,c));++d[x],m=m&&x>=f,f=x}let g=!0;for(let h=0;h<c;++h){let x=d[h]===0;l[h]=x,g=g&&!x,d[h]=Math.max(d[h],1),h>0&&(d[h]+=d[h-1])}if(g&&m){let h=r,x=o;for(let b=0;b<i;++b)p[b]=b;return[h,[i,u],x,l,p]}else{let h=d[c-1],x=y.getArrayFromDType(e,h*u),b=y.getArrayFromDType(n,h),I=new Array(c).fill(0);for(let T=0;T<i;++T){let E=r[T*u],$=I[E],A=(E===0?0:d[E-1])+$;I[E]++;for(let D=0;D<u;++D)x[A*u+D]=r[T*u+D];b[A]=o[T],p[T]=A}for(let T=0;T<c;++T)if(I[T]===0){let $=T===0?0:d[T-1];x[$*u+0]=T;for(let A=1;A<u;++A)x[$*u+A]=0;b[$]=a}return[x,[h,u],b,l,p]}}function Jm(r,t,e,o,n){let s=y.sizeFromShape(o),a=t[0],i=n.length,c=[],l=1,p=-1;for(let h=0;h<i;++h){let x=n[h];if(x===-1){if(p!==-1)throw new Error(v.getSparseReshapeMultipleNegativeOneOutputDimErrorMessage(p,h));p=h,c.push(1)}else{if(x<0)throw new Error(v.getSparseReshapeNegativeOutputDimErrorMessage(h,x));l*=x,c.push(x)}}if(p!==-1){if(l<=0)throw new Error(v.getSparseReshapeEmptyTensorZeroOutputDimErrorMessage());let h=Math.trunc(s/l);if(l*h!==s)throw new Error(v.getSparseReshapeInputOutputMultipleErrorMessage(o,c));c[p]=h}if(y.sizeFromShape(c)!==s)throw new Error(v.getSparseReshapeInputOutputMismatchErrorMessage(o,c));let m=o.length,f=[];if(m>0){f[m-1]=1;for(let h=m-2;h>=0;--h)f[h]=f[h+1]*o[h+1]}let d=[];if(i>0){d[i-1]=1;for(let h=i-2;h>=0;--h)d[h]=d[h+1]*c[h+1]}let g=y.getArrayFromDType(e,a*i);for(let h=0;h<a;++h){let x=0;for(let b=0;b<m;++b)x+=r[h*m+b]*f[b];for(let b=0;b<i;++b)g[h*i+b]=Math.trunc(x/d[b]),x%=d[b]}return[g,[a,i],c]}function sl(r,t,e,o,n,s=!1,a=0){let i=o.length,c=[t[0],r.length/t[0]],l=c[1],u=i>0?n[i-1]+1:0;if(u<0)throw new Error(v.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let m=t.slice();m[0]=u;let f=m.reduce((I,T)=>I*T,1),d=y.getArrayFromDType(e,f);if(i===0)return u>0&&d.fill(a),[d,m];if(u<=0)throw new Error(v.getSparseSegmentReductionNegativeSegmentIdsErrorMessage());let g=0,h=1,x=0,b=n[g];for(;;){let I=0;if(h<i){if(I=n[h],b===I){++h;continue}if(b>=I)throw new Error(v.getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage())}if(b<0||b>=u)throw new Error(v.getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage(b,u));b>x&&d.fill(a,x*l,b*l);for(let T=g;T<h;++T){let E=o[T];if(E<0||E>=c[0])throw new Error(v.getSparseSegmentReductionIndicesOutOfRangeErrorMessage(T,o[T],c[0]));for(let $=0;$<l;$++)d[b*l+$]+=r[E*l+$]}if(s)for(let T=0;T<l;T++)d[b*l+T]/=h-g;if(g=h,++h,x=b+1,b=I,h>i)break}return x<u&&d.fill(a,x*l,u*l),[d,m]}var $I=he(r=>Math.sqrt(r)),YB=pt(Un,r=>Math.sqrt(r)),AI={kernelName:Un,backendName:"cpu",kernelFunc:YB};var yy=wt(((r,t)=>{let e=r-t;return e*e})),ZB=Nt(zn,yy),RI={kernelName:zn,backendName:"cpu",kernelFunc:ZB};var by=he((r,t)=>{let{pattern:e,replaceGlobal:o,rewrite:n}=t;return r.replace(new RegExp(e,o?"g":""),n)}),QB=Ke(Wn,by),DI={kernelName:Wn,backendName:"cpu",kernelFunc:QB};function tf(r,t,e,o){let n=ot(r,t.dtype);for(let s=0;s<n.size;s++){let a=n.indexToLoc(s),i=new Array(a.length);for(let c=0;c<i.length;c++)i[c]=a[c]*e[c]+o[c];n.set(t.get(...i),...a)}return n}var wy=class{constructor(t,e,o,n,s,a){this.separator=y.encodeString(t),this.nGramWidths=e,this.leftPad=y.encodeString(o),this.rightPad=y.encodeString(n),this.padWidth=s,this.preserveShort=a}getPadWidth(t){return Math.min(this.padWidth<0?t-1:this.padWidth,t-1)}getNumNGrams(t,e){let o=this.getPadWidth(e);return Math.max(0,t+2*o-e+1)}createNGrams(t,e,o,n,s,a){for(let i=0;i<s;++i){let c=this.getPadWidth(a),l=Math.max(0,c-i),p=Math.max(0,c-(s-(i+1))),u=a-(l+p),m=e+(l>0?0:i-c),f=0;f+=l*this.leftPad.length;for(let b=0;b<u;++b)f+=t[m+b].length;f+=p*this.rightPad.length;let d=l+p+u-1;f+=d*this.separator.length,o[n+i]=new Uint8Array(f);let g=o[n+i],h=0,x=b=>b.forEach(I=>g[h++]=I);for(let b=0;b<l;++b)x(this.leftPad),x(this.separator);for(let b=0;b<u-1;++b)x(t[m+b]),x(this.separator);if(u>0){x(t[m+u-1]);for(let b=0;b<p;++b)x(this.separator),x(this.rightPad)}else{for(let b=0;b<p-1;++b)x(this.rightPad),x(this.separator);x(this.rightPad)}}}compute(t,e){let o=t.length,n=e.length;if(n>0){let c=e[0];if(c!==0)throw new Error(`First split value must be 0, got ${c}`);for(let l=1;l<n;++l){let p=e[l]>=c;if(p=p&&e[l]<=o,!p)throw new Error(`Invalid split value ${e[l]}, must be in [${c}, ${o}]`);c=e[l]}if(c!==o)throw new Error(`Last split value must be data size. Expected ${o}, got ${c}`)}let s=n-1,a=y.getArrayFromDType("int32",n);if(o===0||n===0){let c=new Array(o);for(let l=0;l<=s;++l)a[l]=0;return[c,a]}a[0]=0;for(let c=1;c<=s;++c){let l=e[c]-e[c-1],p=0;this.nGramWidths.forEach(u=>{p+=this.getNumNGrams(l,u)}),this.preserveShort&&l>0&&p===0&&(p=1),a[c]=a[c-1]+p}let i=new Array(a[s]);for(let c=0;c<s;++c){let l=e[c],p=a[c];if(this.nGramWidths.forEach(u=>{let m=e[c+1]-e[c],f=this.getNumNGrams(m,u);this.createNGrams(t,l,i,p,f,u),p+=f}),this.preserveShort&&p===a[c]){let u=e[c+1]-e[c];if(u===0)continue;let m=u+2*this.padWidth;this.createNGrams(t,l,i,p,1,m)}}return[i,a]}};function ef(r,t,e,o,n,s,a,i){return new wy(e,o,n,s,a,i).compute(r,t)}function JB(r,t,e,o){if(!r.length)return;if(t.length===0){for(let s=0;s<r.length;++s)o.push(r.subarray(s,s+1));return}if(t.length===1){let s=t[0],a=r.indexOf(s);for(;a!==-1;){let i=r.subarray(0,a);(!e||i.length!==0)&&o.push(i),r=r.subarray(a+1),a=r.indexOf(s)}(!e||r.length!==0)&&o.push(r);return}let n=0;for(let s=0;s<r.length+1;s++)if(s===r.length||t.indexOf(r[s])!==-1){let a=r.subarray(n,s);(!e||a.length!==0)&&o.push(a),n=s+1}}function rf(r,t,e){let o=r.length,n=[],s=0,a=0,i=new Array(o);for(let m=0;m<o;++m){let f=n.length;JB(r[m],t,e,n);let d=n.length-f;i[m]=d,s+=d,a=Math.max(a,d)}let c=y.getArrayFromDType("int32",s*2),l=new Array(s),p=[o,a],u=0;for(let m=0;m<o;++m)for(let f=0;f<i[m];++f)c[u*2]=m,c[u*2+1]=f,l[u]=n[u],++u;return[c,l,p]}function of(r,t){let e=y.getArrayFromDType("int32",r.length);for(let o=0;o<r.length;++o)e[o]=y.fingerPrint64(r[o]).modulo(t).getLowBitsUnsigned();return e}var Cy=wt(((r,t)=>r-t)),tM=rl(((r,t,e,o)=>({real:r-e,imag:t-o}))),mu=Nt("Sub",Cy,tM),FI={kernelName:"Sub",backendName:"cpu",kernelFunc:mu};function nf(r,t){let e=new Array(r.rank);for(let n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];let o=ot(e,r.dtype);for(let n=0;n<o.values.length;++n){let s=o.indexToLoc(n),a=new Array(r.rank);for(let c=0;c<a.length;c++)a[c]=s[c]%r.shape[c];let i=r.locToIndex(a);o.values[n]=r.values[i]}return o}var fu=(r,t)=>{let e=t.value-r.value;return e===0?r.index-t.index:e};function _I(r,t,e=0,o=r.length-1){for(;o>e;){if(o-e>600){let i=o-e+1,c=t-e+1,l=Math.log(i),p=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*p*(i-p)/i)*Math.sign(c-i/2),m=Math.max(e,Math.floor(t-c*p/i+u)),f=Math.min(o,Math.floor(t+(i-c)*p/i+u));_I(r,t,m,f)}let n=r[t],s=e,a=o;for(y.swap(r,e,t),fu(r[o],n)>0&&y.swap(r,e,o);s<a;){for(y.swap(r,s,a),s++,a--;fu(r[s],n)<0;)s=s+1;for(;fu(r[a],n)>0;)a=a-1}fu(r[e],n)===0?y.swap(r,e,a):(a=a+1,y.swap(r,a,o)),a<=t&&(e=a+1),t<=a&&(o=a-1)}}function sf(r,t,e,o,n){let s=t[t.length-1],[a,i]=[r.length/s,s],c=y.getTypedArrayFromDType(e,a*o),l=y.getTypedArrayFromDType("int32",a*o);for(let u=0;u<a;u++){let m=u*i,f=r.subarray(m,m+i),d=new Array(f.length);f.forEach((b,I)=>d[I]={value:b,index:I}),o<d.length&&(_I(d,o),d=d.slice(0,o)),n&&d.sort(fu);let g=u*o,h=c.subarray(g,g+o),x=l.subarray(g,g+o);for(let b=0;b<o;b++)h[b]=d[b].value,x[b]=d[b].index}let p=t.slice();return p[p.length-1]=o,[ot(p,e,c),ot(p,"int32",l)]}function af(r,t,e,o){let n=y.parseAxisParam(t,e)[0],s=[1,e[0],1];for(let d=0;d<n;d++)s[0]*=e[d];s[1]=e[n];for(let d=n+1;d<e.length;d++)s[2]*=e[d];let a=new Map,i=new Int32Array(e[n]),c=new $t(s,o,r),l=[],p=s[0]===1&&s[2]===1;for(let d=0;d<e[n];d++){let g;if(p)g=r[d].toString();else{let x=[];for(let b=0;b<s[0];b++)for(let I=0;I<s[2];I++)x.push(c.get(b,d,I));g=x.join(",")}let h=a.get(g);if(h!=null)i[d]=h;else{let x=a.size;a.set(g,x),i[d]=x,l.push(d)}}let u=s.slice();u[1]=a.size;let m=new $t(u,o);l.forEach((d,g)=>{for(let h=0;h<s[0];h++)for(let x=0;x<s[2];x++)m.set(c.get(h,d,x),h,g,x)});let f=e.slice();return f[n]=u[1],{outputValues:m.values,outputShape:f,indices:i}}var{addImpl:OI,bincountImpl:cf,bincountReduceImpl:PI,bitwiseAndImpl:LI,castImpl:BI,ceilImpl:MI,concatImpl:VI,equalImpl:GI,expImpl:UI,expm1Impl:zI,floorImpl:WI,gatherNdImpl:HI,gatherV2Impl:qI,greaterImpl:KI,greaterEqualImpl:jI,lessImpl:XI,lessEqualImpl:YI,linSpaceImpl:ZI,logImpl:QI,maxImpl:JI,maximumImpl:tS,minimumImpl:eS,multiplyImpl:rS,negImpl:oS,notEqualImpl:nS,prodImpl:sS,raggedGatherImpl:aS,raggedRangeImpl:iS,raggedTensorToTensorImpl:cS,rangeImpl:lS,rsqrtImpl:pS,scatterImpl:uS,sigmoidImpl:mS,simpleAbsImpl:lf,sliceImpl:fS,sparseFillEmptyRowsImpl:dS,sparseReshapeImpl:hS,sparseSegmentReductionImpl:pf,sqrtImpl:gS,staticRegexReplaceImpl:xS,stridedSliceImpl:yS,stringNGramsImpl:bS,stringSplitImpl:wS,stringToHashBucketFastImpl:CS,subImpl:TS,tileImpl:IS,topKImpl:SS,transposeImpl:ic,uniqueImpl:vS}=Ty;function Iy(r,t){return["x","y","z","w","u","v"].slice(0,t).map(e=>`${r}.${e}`)}function Qt(r,t){return t===1?[r]:Iy(r,t)}function NS(r,t){if(r===1)return"rc";let e="";for(let o=0;o<r;o++)e+=t[o],o<r-1&&(e+=",");return e}var uf=class{constructor(t){if(this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.enableShapeUniforms=_t(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=Qt("rc",this.rank),o=dt(this.rank),n=this.getOutOfBoundsCondition(e),s=this.getSetup(e),a=this.getOutput(e);this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${s}

            setOutput(vec4(${a}));
          }
        }
      `}}getSourceCoordsArr(t){let e=[];for(let o=0;o<=1;o++)for(let n=0;n<=1;n++){let s=`${o===0?"r":"rp1"}, ${n===0?"c":"cp1"}`;for(let a=2;a<this.rank;a++)s=`${t[t.length-1-a]},`+s;e.push(s)}return e}getOutOfBoundsCondition(t){if(this.rank===1)return`rc > ${this.enableShapeUniforms?"outShape":this.outputShape[0]}`;let e="";for(let o=this.rank-2;o<this.rank;o++)e+=`${t[o]} >= ${this.enableShapeUniforms?`outShape[${o}]`:this.outputShape[o]}`,o<this.rank-1&&(e+="||");return e}getSetup(t){if(this.rank===1)return"";let e=t.slice(-2),o=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],n=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${e[0]};
      int c = ${e[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${o};
      bool rEdge = rp1 >= ${n};
    `}getOutput(t){let e=this.getSourceCoordsArr(t);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?"outShape":this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${e[0]}),
            cEdge ? 0. : getA(${e[1]}),
            rEdge ? 0. : getA(${e[2]}),
            rEdge || cEdge ? 0. : getA(${e[3]})`}};var al=class{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec3"}],this.outputShape=t,this.enableShapeUniforms=_t(this.outputShape.length);let o="";for(let n=0;n<4;n++){let s="thisRC = rc;";n%2===1&&(s+="thisRC.z += 1;"),n>1&&(s+="thisRC.y += 1;"),o+=`
        ${s}
        ${n>0?"if(thisRC.y < rows && thisRC.z < cols){":""}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${n}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${n>0?"}":""}
      `}this.userCode=`
      ${eM(e,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?jc():Kc(t)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?"outShape[1]":t[1]};
        int cols = ${this.enableShapeUniforms?"outShape[2]":t[2]};

        ${o}

        setOutput(result);
      }
    `}};function eM(r,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?vT(["r","c","d"],"inputShape"):Ur(["r","c","d"],r)}
      return ivec3(r, c, d);
    }
  `}var mf=class{constructor(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(t,e,o){let n=ES(e,o),s=$S(t,n,o);s in this.freeTextures||(this.freeTextures[s]=[]),s in this.usedTextures||(this.usedTextures[s]=[]);let a=kS(t,n,this.gpgpu.gl,this.gpgpu.textureConfig,o);if(this.freeTextures[s].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=a,this.log();let c=this.freeTextures[s].pop();return this.usedTextures[s].push(c),c}let i;return n===we.PACKED_2X2_FLOAT32?i=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):n===we.PACKED_2X2_FLOAT16?i=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):n===we.UNPACKED_FLOAT32?i=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):n===we.UNPACKED_FLOAT16?i=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):n===we.PACKED_4X1_UNSIGNED_BYTE&&(i=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[s].push(i),this.numUsedTextures++,this._numBytesAllocated+=a,this.log(),i}releaseTexture(t,e,o,n){if(this.freeTextures==null)return;let s=ES(o,n),a=$S(e,s,n);a in this.freeTextures||(this.freeTextures[a]=[]);let i=kS(e,s,this.gpgpu.gl,this.gpgpu.textureConfig,n),c=F().getNumber("WEBGL_DELETE_TEXTURE_THRESHOLD");c!==-1&&this._numBytesAllocated>c?(this.gpgpu.deleteMatrixTexture(t.texture),this._numBytesAllocated-=i):(this.freeTextures[a].push(t),this.numFreeTextures++,this._numBytesFree+=i),this.numUsedTextures--;let l=this.usedTextures[a],p=l&&l.indexOf(t);if(p==null||p<0)throw new Error("Cannot release a texture that was never provided by this texture manager");l[p]=l[l.length-1],l.pop(),this.log()}log(){if(!this.logEnabled)return;let t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${t})`);let e=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*e)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let t in this.freeTextures)this.freeTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let t in this.usedTextures)this.usedTextures[t].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}};function rM(r,t){let e=r;if(t===e.R32F)return 4;if(t===e.R16F)return 2;if(t===e.RGBA32F)return 16;if(t===r.RGBA)return 16;if(t===e.RGBA16F)return 8;if(t===e.RGBA8)return 4;throw new Error(`Unknown internal format ${t}`)}function kS(r,t,e,o,n){let s=oM(t,o),a;if(n){let[c,l]=fo(r[0],r[1]);a=c*l}else{let[c,l]=rc(r[0],r[1]);a=c*l}let i=rM(e,s);return a*i}function oM(r,t){switch(r){case we.PACKED_2X2_FLOAT32:return Wx(t);case we.PACKED_2X2_FLOAT16:return Hx(t);case we.UNPACKED_FLOAT32:return Gx(t);case we.UNPACKED_FLOAT16:return Ux(t);case we.PACKED_4X1_UNSIGNED_BYTE:return zx(t);default:throw new Error(`Unknown physical texture type ${r}`)}}function nM(r){return F().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?r?we.PACKED_2X2_FLOAT32:we.UNPACKED_FLOAT32:r?we.PACKED_2X2_FLOAT16:we.UNPACKED_FLOAT16}function ES(r,t){if(r===Ee.UPLOAD)return we.PACKED_2X2_FLOAT32;if(r===Ee.RENDER||r==null)return nM(t);if(r===Ee.DOWNLOAD||r===Ee.PIXELS)return we.PACKED_4X1_UNSIGNED_BYTE;throw new Error(`Unknown logical texture type ${r}`)}function $S(r,t,e){return`${r[0]}_${r[1]}_${t}_${e}`}var Ce=class{constructor(t,e){this.variableNames=["A"],this.outputShape=t,this.enableShapeUniforms=_t(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${e}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},le="if (isnan(x)) return x;",AS="return x;",Sy="return abs(x);";var RS="return (x >= 0.0) ? x : (exp(x) - 1.0);",DS=le+`
  return (x < 0.0) ? 0.0 : x;
`,FS=le+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,xo="return x;",_S="return 1.0 / (1.0 + exp(-1.0 * x));";var PS="return x;",LS=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,BS=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,MS=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,VS="return 1.0 / (1.0 + exp(-1.0 * x));",je=class{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.enableShapeUniforms=_t(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${e}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}};var ff=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=t,this.enableShapeUniforms=_t(this.outputShape.length);let e=t.length,o=Qt("rc",e),n=dt(e),s=NS(e,o),a=o.slice(-2),i=e<=1?"rc":`vec2(${a.join(",")})`;this.userCode=`
      void main() {
        ${n} rc = getOutputCoords();
        vec4 packedInput = getA(${s});

        setOutput(getChannel(packedInput, ${i}));
      }
    `}};var aM=be.whereImpl,iM=1e-7,cM=1e-4,df={};function lM(r){return r in df||(df[r]={}),df[r]}var pM=F().getNumber("CPU_HANDOFF_SIZE_THRESHOLD"),uM=600;function mM(){return F().global.screen==null?1024:F().global.screen.height*F().global.screen.width*window.devicePixelRatio*uM/1024/1024}var du=class r extends jr{nextDataId(){return r.nextDataId++}constructor(t){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!F().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");let e;if(t!=null){if(t instanceof tl)e=t;else{let o=rr(F().getNumber("WEBGL_VERSION"),t);e=new tl(o)}this.binaryCache={},this.gpgpuCreatedLocally=!1}else{let o=rr(F().getNumber("WEBGL_VERSION"));e=new tl(o),this.binaryCache=lM(F().getNumber("WEBGL_VERSION")),this.gpgpuCreatedLocally=!0}this.gpgpu=e,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new mf(this.gpgpu),this.numMBBeforeWarning=mM(),this.texData=new Zo(this,lr())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(t,e,o,n,s,a){let i=this.makeTensorInfo(e,o),c=this.texData.get(i.dataId);c.isPacked=!1,c.texture={texture:t,texShape:[n,s]},c.texShape=[n,s];let l=cu(e),p=new lu(l,!1,a),u=this.runWebGLProgram(p,[i],o,[[n,s]]);return u.shape=e,c.texture=null,this.disposeIntermediateTensorInfo(i),u.dataId}write(t,e,o){if((F().getBool("WEBGL_CHECK_NUMERICAL_PROBLEMS")||F().getBool("DEBUG"))&&this.checkNumericalProblems(t),o==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");let n={id:this.nextDataId()};return this.texData.set(n,{shape:e,dtype:o,values:t,usage:Ee.UPLOAD,refCount:1}),n}refCount(t){return this.texData.has(t)?this.texData.get(t).refCount:0}incRef(t){let e=this.texData.get(t);e.refCount++}decRef(t){if(this.texData.has(t)){let e=this.texData.get(t);e.refCount--}}move(t,e,o,n,s){if(F().getBool("DEBUG")&&this.checkNumericalProblems(e),n==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(t,{shape:o,dtype:n,values:e,usage:Ee.UPLOAD,refCount:s})}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}readSync(t){let e=this.texData.get(t),{values:o,dtype:n,complexTensorInfos:s,slice:a,shape:i,isPacked:c}=e;if(a!=null){let m;c?m=new je(i,xo):m=new Ce(i,xo);let f=this.runWebGLProgram(m,[{dataId:t,shape:i,dtype:n}],n),d=this.readSync(f.dataId);return this.disposeIntermediateTensorInfo(f),d}if(o!=null)return this.convertAndCacheOnCPU(t);if(n==="string")return o;let l=this.activeTimers!=null,p;l&&(p=y.now());let u;if(n==="complex64"){let m=this.readSync(s.real.dataId),f=this.readSync(s.imag.dataId);u=v.mergeRealAndImagArrays(m,f)}else u=this.getValuesFromTexture(t);return l&&(this.downloadWaitMs+=y.now()-p),this.convertAndCacheOnCPU(t,u)}async read(t){if(this.pendingRead.has(t)){let d=this.pendingRead.get(t);return new Promise(g=>d.push(g))}let e=this.texData.get(t),{values:o,shape:n,slice:s,dtype:a,complexTensorInfos:i,isPacked:c}=e;if(s!=null){let d;c?d=new je(n,xo):d=new Ce(n,xo);let g=this.runWebGLProgram(d,[{dataId:t,shape:n,dtype:a}],a),h=this.read(g.dataId);return this.disposeIntermediateTensorInfo(g),h}if(o!=null)return this.convertAndCacheOnCPU(t);if(F().getBool("DEBUG")&&!F().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&F().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");let l=null,p;if(a!=="complex64"&&F().get("WEBGL_BUFFER_SUPPORTED")){p=this.decode(t);let d=this.texData.get(p.dataId);l=this.gpgpu.createBufferFromTexture(d.texture.texture,...nu(n))}this.pendingRead.set(t,[]),a!=="complex64"&&await this.gpgpu.createAndWaitForFence();let u;if(a==="complex64"){let d=await Promise.all([this.read(i.real.dataId),this.read(i.imag.dataId)]),g=d[0],h=d[1];u=v.mergeRealAndImagArrays(g,h)}else if(l==null)u=this.getValuesFromTexture(t);else{let d=y.sizeFromShape(n);u=this.gpgpu.downloadFloat32MatrixFromBuffer(l,d)}if(p!=null&&this.disposeIntermediateTensorInfo(p),l!=null){let d=this.gpgpu.gl;rt(d,()=>d.deleteBuffer(l))}let m=this.convertAndCacheOnCPU(t,u),f=this.pendingRead.get(t);return this.pendingRead.delete(t),f.forEach(d=>d(m)),this.pendingDisposal.has(t)&&(this.pendingDisposal.delete(t),this.disposeData(t)&&lr().removeDataId(t,this),this.pendingDeletes--),m}readToGPU(t,e={}){let o=this.texData.get(t),{values:n,shape:s,slice:a,dtype:i,isPacked:c,texture:l}=o;if(i==="complex64")throw new Error("Does not support reading texture for complex64 dtype.");if(a!=null){let f;c?f=new je(s,xo):f=new Ce(s,xo);let d=this.runWebGLProgram(f,[{dataId:t,shape:s,dtype:i}],i),g=this.readToGPU(d,e);return this.disposeIntermediateTensorInfo(d),g}if(l==null)throw n!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");let p=this.decode(t,e.customTexShape),u=lr().makeTensorFromTensorInfo(p),m=this.texData.get(p.dataId);return Object.assign({tensorRef:u},m.texture)}bufferSync(t){let e=this.readSync(t.dataId);if(t.dtype==="string")try{let o=e.map(n=>y.decodeString(n));return ot(t.shape,t.dtype,o)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ot(t.shape,t.dtype,e)}checkNumericalProblems(t){if(t!=null)for(let e=0;e<t.length;e++){let o=t[e];if(!sT(o))throw F().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error(`The value ${o} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${o} cannot be represented on this device.`)}}getValuesFromTexture(t){let{shape:e,dtype:o,isPacked:n}=this.texData.get(t),s=y.sizeFromShape(e);if(F().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){let m=this.decode(t),f=this.texData.get(m.dataId),d=this.gpgpu.downloadMatrixFromPackedTexture(f.texture.texture,...nu(e)).subarray(0,s);return this.disposeIntermediateTensorInfo(m),d}let a=F().getBool("WEBGL_PACK")&&n===!0,i=a?cu(e):e,c=a?new Vm(i):new Mm(i),l=this.runWebGLProgram(c,[{shape:i,dtype:o,dataId:t}],"float32"),p=this.texData.get(l.dataId),u=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(p.texture.texture,p.texShape[0],p.texShape[1]).subarray(0,s);return this.disposeIntermediateTensorInfo(l),u}timerAvailable(){return F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0}time(t){let e=this.activeTimers,o=[],n=!1;this.programTimersStack==null?(this.programTimersStack=o,n=!0):this.activeTimers.push(o),this.activeTimers=o,t();let s=y.flatten(this.activeTimers.map(c=>c.query)).filter(c=>c!=null),a=y.flatten(this.activeTimers.map(c=>c.name)).filter(c=>c!=null);this.activeTimers=e,n&&(this.programTimersStack=null);let i={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0){let c=await Promise.all(s);i.kernelMs=y.sum(c),i.getExtraProfileInfo=()=>c.map((l,p)=>({name:a[p],ms:l})).map(l=>`${l.name}: ${l.ms}`).join(", ")}else i.kernelMs={error:"WebGL query timers are not supported in this environment."};return this.uploadWaitMs=0,this.downloadWaitMs=0,i})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:y.now(),endMs:null}}endTimer(t){return F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),t):(t.endMs=y.now(),t)}async getQueryTime(t){if(F().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0)return this.gpgpu.waitForQueryAndGetTime(t);let e=t;return e.endMs-e.startMs}disposeData(t,e=!1){if(this.pendingDisposal.has(t))return!1;if(!this.texData.has(t))return!0;if(e?this.texData.get(t).refCount=0:this.texData.get(t).refCount--,!e&&this.texData.get(t).refCount>0)return!1;if(this.pendingRead.has(t))return this.pendingDisposal.add(t),this.pendingDeletes++,!1;this.releaseGPUData(t);let{complexTensorInfos:o}=this.texData.get(t);return o!=null&&(this.disposeData(o.real.dataId,e),this.disposeData(o.imag.dataId,e)),this.texData.delete(t),!0}releaseGPUData(t){let{texture:e,dtype:o,texShape:n,usage:s,isPacked:a,slice:i}=this.texData.get(t),c=i&&i.origDataId||t,l=this.dataRefCount.get(c);l>1?this.dataRefCount.set(c,l-1):(this.dataRefCount.delete(c),e!=null&&(this.numBytesInGPU-=this.computeBytes(n,o),this.textureManager.releaseTexture(e,n,s,a)));let p=this.texData.get(t);p.texture=null,p.texShape=null,p.isPacked=!1,p.slice=null}getTexture(t){return this.uploadToGPU(t),this.texData.get(t).texture.texture}getDataInfo(t){return this.texData.get(t)}shouldExecuteOnCPU(t,e=pM){return F().getBool("WEBGL_CPU_FORWARD")&&t.every(o=>this.texData.get(o.dataId).texture==null&&y.sizeFromShape(o.shape)<e)}getGPGPUContext(){return this.gpgpu}where(t){v.warn("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");let e=t.dataSync();return aM(t.shape,e)}packedUnaryOp(t,e,o){let n=new je(t.shape,e),s=this.compileAndRun(n,[t],o);return lr().makeTensorFromTensorInfo(s)}abs(t){if(this.shouldExecuteOnCPU([t])&&t.dtype!=="complex64"){let n=lf(this.texData.get(t.dataId).values);return this.makeOutput(t.shape,t.dtype,n)}if(F().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(t,Sy,t.dtype);let e=new Ce(t.shape,Sy),o=this.compileAndRun(e,[t]);return lr().makeTensorFromTensorInfo(o)}makeTensorInfo(t,e,o){let n;if(e==="string"&&o!=null&&o.length>0&&y.isString(o[0])){let s=o.map(a=>y.encodeString(a));n=this.write(s,t,e)}else n=this.write(o,t,e);return this.texData.get(n).usage=null,{dataId:n,shape:t,dtype:e}}makeOutput(t,e,o){return lr().makeTensorFromTensorInfo(this.makeTensorInfo(t,e,o),this)}unpackTensor(t){let e=new ff(t.shape);return this.runWebGLProgram(e,[t],t.dtype)}packTensor(t){let e=new uf(t.shape);return this.runWebGLProgram(e,[t],t.dtype,null,!0)}packedReshape(t,e){let o=[ms(t.shape),...fs(t.shape)],n={dtype:t.dtype,shape:o,dataId:t.dataId},s=[ms(e),...fs(e)],a=new al(s,o),i=!0,c=[o],l=this.runWebGLProgram(a,[n],t.dtype,c,i);return{dataId:l.dataId,shape:e,dtype:l.dtype}}decode(t,e){let o=this.texData.get(t),{isPacked:n,shape:s,dtype:a}=o;if(e!=null){let m=y.sizeFromShape(s),f=e[0]*e[1]*4;y.assert(m<=f,()=>"customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.")}let i=cu(s),c;n?c=new Bm(i):c=new Lm(i);let l=!0,p=[e??nu(i)],u=this.runWebGLProgram(c,[{shape:i,dtype:a,dataId:t}],a,p,l,e);return{dtype:a,shape:s,dataId:u.dataId}}runWebGLProgram(t,e,o,n,s=!1,a){let i=this.makeTensorInfo(t.outputShape,o),c=this.texData.get(i.dataId);if(t.packedOutput&&(c.isPacked=!0),t.outPackingScheme===us.DENSE){let x=a??nu(t.outputShape);c.texShape=x.map(b=>b*2)}if(t.outTexUsage!=null&&(c.usage=t.outTexUsage),y.sizeFromShape(i.shape)===0)return c.values=y.getTypedArrayFromDType(i.dtype,0),i;let l=[],p=e.map(x=>{if(x.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");let b=this.texData.get(x.dataId);if(b.texture==null){if(!t.packedInputs&&y.sizeFromShape(x.shape)<=F().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:x.shape,texData:null,isUniform:!0,uniformValues:b.values};t.packedInputs&&(b.isPacked=!0,b.shape=x.shape)}if(this.uploadToGPU(x.dataId),!!b.isPacked!=!!t.packedInputs)x=b.isPacked?this.unpackTensor(x):this.packTensor(x),l.push(x),b=this.texData.get(x.dataId);else if(b.isPacked&&!oc(b.shape,x.shape)){let I=x,T=x.shape;x.shape=b.shape,x=this.packedReshape(x,T),l.push(x),b=this.texData.get(x.dataId),I.shape=T}return{shape:x.shape,texData:b,isUniform:!1}});this.uploadToGPU(i.dataId);let u={shape:i.shape,texData:c,isUniform:!1},m=FT(t,p,u),f=this.getAndSaveBinary(m,()=>RT(this.gpgpu,t,p,u)),d=this.activeTimers!=null,g;d&&(g=this.startTimer()),F().get("ENGINE_COMPILE_ONLY")||DT(this.gpgpu,f,p,u,n),l.forEach(x=>this.disposeIntermediateTensorInfo(x)),d&&(g=this.endTimer(g),this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime(g)}));let h=F().getNumber("WEBGL_FLUSH_THRESHOLD");if(h>0){let x=y.now();x-this.lastGlFlushTime>h&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=x)}if(!F().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&s===!1){let x=this.unpackTensor(i);return this.disposeIntermediateTensorInfo(i),x}return i}compileAndRun(t,e,o,n,s=!1){return o=o||e[0].dtype,this.runWebGLProgram(t,e,o,n,s)}getAndSaveBinary(t,e){return t in this.binaryCache||(this.binaryCache[t]=e()),this.binaryCache[t]}getTextureManager(){return this.textureManager}dispose(){this.disposed||(F().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)}floatPrecision(){return this.floatPrecisionValue==null&&(this.floatPrecisionValue=gt(()=>{if(!F().get("WEBGL_RENDER_FLOAT32_ENABLED")){let t=F().getBool("DEBUG");F().set("DEBUG",!1);let e=this.abs(lt(1e-8)).dataSync()[0];if(F().set("DEBUG",t),e>0)return 32}return 16})),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?iM:cM}uploadToGPU(t){let e=this.texData.get(t),{shape:o,dtype:n,values:s,texture:a,usage:i,isPacked:c}=e;if(a!=null)return;let l=this.activeTimers!=null,p;l&&(p=y.now());let u=e.texShape;if(u==null&&(u=yT(o,c),e.texShape=u),s!=null){let m=cu(o),f,d=u[1],g=u[0],h=s instanceof Uint8Array||s instanceof Uint8ClampedArray;(c||!h)&&([d,g]=fo(u[0],u[1])),c?f=new Gm(m,h):f=new lu(m,h);let x=h?[g,d]:u,b=this.makeTensorInfo(x,n),I=this.texData.get(b.dataId);h?I.usage=Ee.PIXELS:I.usage=Ee.UPLOAD,I.texShape=x,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),d,g,s);let T=[[g,d]],$=this.runWebGLProgram(f,[b],n,T,!0),A=this.texData.get($.dataId);e.texShape=A.texShape,e.isPacked=A.isPacked,e.usage=A.usage,F().get("ENGINE_COMPILE_ONLY")?this.disposeData($.dataId):(e.texture=A.texture,e.values=null,this.texData.delete($.dataId)),this.disposeIntermediateTensorInfo(b),l&&(this.uploadWaitMs+=y.now()-p)}else{let m=this.acquireTexture(u,i,n,c);e.texture=m}}convertAndCacheOnCPU(t,e){let o=this.texData.get(t),{dtype:n}=o;return e!=null&&(o.values=fM(e,n)),o.values}acquireTexture(t,e,o,n){if(this.numBytesInGPU+=this.computeBytes(t,o),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let s=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${s} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(t,e,n)}computeBytes(t,e){return t[0]*t[1]*y.bytesPerElement(e)}checkCompileCompletion(){for(let[,t]of Object.entries(this.binaryCache))this.checkCompletion_(t)}async checkCompileCompletionAsync(){let t=[];if(this.gpgpu.parallelCompilationExtension){for(let[,e]of Object.entries(this.binaryCache))t.push(this.checkCompletionAsync_(e));return Promise.all(t)}else{for(let[,e]of Object.entries(this.binaryCache)){let o=new Promise(n=>{try{this.checkCompletion_(e),n(!0)}catch(s){throw s}});t.push(o)}return Promise.all(t)}}async checkCompletionAsync_(t){return this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(t):(await Em(),this.checkCompletionAsync_(t))}checkCompletion_(t){if(this.gpgpu.gl.getProgramParameter(t.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(t.webGLProgram)),this.gpgpu.gl.getShaderParameter(t.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Px(t.source,this.gpgpu.gl.getShaderInfoLog(t.fragmentShader)),new Error("Failed to compile fragment shader.")):new Error("Failed to link vertex and fragment shaders.");return!0}getUniformLocations(){for(let t of Object.values(this.binaryCache)){this.gpgpu.buildVao(t.webGLProgram);let{variablesLocations:e,customUniformLocations:o,infLoc:n,nanLoc:s,outShapeLocation:a,outShapeStridesLocation:i,outTexShapeLocation:c}=Vx(this.gpgpu,t.program,t.webGLProgram);t.variablesLocations=e,t.customUniformLocations=o,t.infLoc=n,t.nanLoc=s,t.outShapeLocation=a,t.outShapeStridesLocation=i,t.outTexShapeLocation=c}}createTensorFromGPUData(t,e,o){t.channels=t.channels||"RGBA";let{texture:n,height:s,width:a,channels:i}=t,c=lr().backend;if(!c.gpgpu.gl.isTexture(n))throw new Error("The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.");let l=c.writeTexture(n,e,o,s,a,i);return lr().makeTensorFromDataId(l,e,o,c)}};du.nextDataId=0;function fM(r,t){if(t==="float32"||t==="complex64")return r;if(t==="int32"||t==="bool"){let e=t==="int32"?new Int32Array(r.length):new Uint8Array(r.length);for(let o=0;o<e.length;++o)e[o]=Math.round(r[o]);return e}else throw new Error(`Unknown dtype ${t}`)}ko.isBrowser()&&Hl("webgl",()=>new du,2);var il=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`;var Xe=class{constructor(t,e,o){this.variableNames=["A","B"],this.outputShape=v.assertAndGetBroadcastShape(e,o),this.enableShapeUniforms=_t(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${t}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}};var nr=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`;var or=class{constructor(t,e,o,n=!1){this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=v.assertAndGetBroadcastShape(e,o);let s=this.outputShape.length;this.enableShapeUniforms=_t(s);let a="";if(n)if(s===0||y.sizeFromShape(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          ${dt(s)} coords = getOutputCoords();
        `,s===1)this.enableShapeUniforms?a+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:a+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let c=Qt("coords",s);this.enableShapeUniforms?a+=`
            bool nextRowOutOfBounds =
              (${c[s-2]} + 1) >= outShape[${s} - 2];
            bool nextColOutOfBounds =
              (${c[s-1]} + 1) >= outShape[${s} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:a+=`
            bool nextRowOutOfBounds =
              (${c[s-2]} + 1) >= ${this.outputShape[s-2]};
            bool nextColOutOfBounds =
              (${c[s-1]} + 1) >= ${this.outputShape[s-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${t}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${a}

        setOutput(result);
      }
    `}};function Jt(r){let{inputs:t,backend:e}=r,{x:o}=t;return e.incRef(o.dataId),{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}var GS={kernelName:So,backendName:"webgl",kernelFunc:Jt};function Ye(r){let{inputs:t,backend:e}=r,{real:o,imag:n}=t,s=e.makeTensorInfo(o.shape,"complex64"),a=e.texData.get(s.dataId),i=Jt({inputs:{x:o},backend:e}),c=Jt({inputs:{x:n},backend:e});return a.complexTensorInfos={real:i,imag:c},s}var US={kernelName:Os,backendName:"webgl",kernelFunc:Ye};var vy="return (a < 0.) ? b * a : a;",Ny=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function dM(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{alpha:s}=o,a=e.makeTensorInfo([],"float32",y.createScalarValue(s,"float32")),i=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new or(Ny,n.shape,a.shape):new Xe(vy,n.shape,a.shape),c=e.runWebGLProgram(i,[n,a],"float32");return e.disposeIntermediateTensorInfo(a),c}var zS={kernelName:ma,backendName:"webgl",kernelFunc:dM};var ky="return (a < 0.) ? b * a : a;",Ey=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`;function hM(r){let{inputs:t,backend:e}=r,{x:o,alpha:n}=t,s=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new or(Ey,o.shape,n.shape):new Xe(ky,o.shape,n.shape);return e.runWebGLProgram(s,[o,n],"float32")}var WS={kernelName:Aa,backendName:"webgl",kernelFunc:hM};var vr="if (isnan(x)) return x;";function at({opSnippet:r,packedOpSnippet:t,cpuKernelImpl:e,dtype:o}){return({inputs:n,backend:s})=>{let{x:a}=n,i=s,c=o||a.dtype;if(i.shouldExecuteOnCPU([a])&&e!=null){let u=i.texData.get(a.dataId),m=e(u.values,c);return i.makeTensorInfo(a.shape,c,m)}let l=F().getBool("WEBGL_PACK_UNARY_OPERATIONS")&&t!=null,p;return l?p=new je(a.shape,t):p=new Ce(a.shape,r),i.runWebGLProgram(p,[a],c)}}function Ft({opSnippet:r,packedOpSnippet:t,checkOutOfBounds:e=!1,supportsComplex:o=!1,cpuKernelImpl:n,dtype:s}){return({inputs:a,backend:i})=>{let{a:c,b:l}=a,p=i;if(o&&c.dtype==="complex64"){let d=p.texData.get(c.dataId),g=p.texData.get(l.dataId),[h,x]=[[d.complexTensorInfos.real,g.complexTensorInfos.real],[d.complexTensorInfos.imag,g.complexTensorInfos.imag]].map(I=>{let[T,E]=I,$={dataId:T.dataId,dtype:T.dtype,shape:c.shape},A={dataId:E.dataId,dtype:E.dtype,shape:l.shape},D=new Xe(r,c.shape,l.shape);return p.runWebGLProgram(D,[$,A],re(T.dtype,E.dtype))}),b=Ye({inputs:{real:h,imag:x},backend:p});return p.disposeIntermediateTensorInfo(h),p.disposeIntermediateTensorInfo(x),b}let u=s||re(c.dtype,l.dtype);if((c.dtype==="string"||l.dtype==="string"||p.shouldExecuteOnCPU([c,l]))&&n!=null){let d=p.texData.get(c.dataId).values,g=p.texData.get(l.dataId).values,h=c.dtype==="string"?v.fromUint8ToStringArray(d):d,x=c.dtype==="string"?v.fromUint8ToStringArray(g):g,[b,I]=n(c.shape,l.shape,h,x,u),T=p.makeTensorInfo(I,u),E=p.texData.get(T.dataId);return E.values=b,T}let m=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")&&t!=null,f;return m?f=new or(t,c.shape,l.shape,e):f=new Xe(r,c.shape,l.shape),p.runWebGLProgram(f,[c,l],u)}}function zo(r,t=!1){if(r==="linear")return t?PS:AS;if(r==="relu")return t?BS:DS;if(r==="elu")return t?LS:RS;if(r==="relu6")return t?MS:FS;if(r==="prelu")return t?Ey:ky;if(r==="leakyrelu")return t?Ny:vy;if(r==="sigmoid")return t?VS:_S;throw new Error(`Activation ${r} has not been implemented for the WebGL backend.`)}var cl=class{constructor(t,e,o,n=!1,s=!1,a=!1,i=null,c=!1,l=!1){this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=o,this.enableShapeUniforms=_t(this.outputShape.length);let p=n?t[1]:t[2],u=Math.ceil(p/2),m=n?"i * 2, rc.y":"rc.y, i * 2",f=s?"rc.z, i * 2":"i * 2, rc.z",d=n?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],g=s?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],h="",x="";i&&(c?h=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${i}
        }`:l?h=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${i}
        }`:h=`vec4 activation(vec4 x) {
          ${i}
        }`,x="result = activation(result);");let b=a?"result += getBiasAtOutCoords();":"";a&&this.variableNames.push("bias"),c&&this.variableNames.push("preluActivationWeights"),l&&this.variableNames.push("leakyreluAlpha");let I="rc.x",T="rc.x";t[0]<e[0]?I=`imod(rc.x, ${t[0]})`:e[0]<t[0]&&(T=`imod(rc.x, ${e[0]})`),this.userCode=`
      ${h}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${I};
        int batchB = ${T};
        for (int i = 0; i < ${u}; i++) {
          vec4 a = getMatrixA(batchA, ${m});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${d[0]} * ${g[0]});
          result += (${d[1]} * ${g[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${b}

        ${x}

        setOutput(result);
      }
    `}};var $y={REAL:"return areal * breal - aimag * bimag;",IMAG:"return areal * bimag + aimag * breal;"},hu=class{constructor(t,e,o){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=v.assertAndGetBroadcastShape(e,o),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${t}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}};var HS="return a * b;";function gu(r){let{inputs:t,backend:e}=r,{a:o,b:n}=t,s=v.upcastType(o.dtype,n.dtype);if(o.dtype==="complex64"){let i=e.texData.get(o.dataId),c=e.texData.get(n.dataId),l=new hu($y.REAL,o.shape,n.shape),p=new hu($y.IMAG,o.shape,n.shape),u=[{dataId:i.complexTensorInfos.real.dataId,dtype:i.complexTensorInfos.real.dtype,shape:o.shape},{dataId:i.complexTensorInfos.imag.dataId,dtype:i.complexTensorInfos.imag.dtype,shape:o.shape},{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:n.shape},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:n.shape}],m=e.runWebGLProgram(l,u,"float32"),f=e.runWebGLProgram(p,u,"float32"),d=Ye({inputs:{real:m,imag:f},backend:e});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(f),d}if(e.shouldExecuteOnCPU([o,n])){let i=e.texData.get(o.dataId),c=e.texData.get(n.dataId),[l,p]=rS(o.shape,n.shape,i.values,c.values,s),u=e.makeTensorInfo(p,s),m=e.texData.get(u.dataId);return m.values=l,u}let a;return F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?a=new or(HS,o.shape,n.shape):a=new Xe(HS,o.shape,n.shape),e.runWebGLProgram(a,[o,n],s)}var qS={kernelName:An,backendName:"webgl",kernelFunc:gu};function KS(r,t,e){let o=[ms(r.shape),...fs(r.shape)],n={dtype:r.dtype,shape:o,dataId:r.dataId},s=[ms(t),...fs(t)],a=new al(s,o),i=!0,c=[o],l=e.runWebGLProgram(a,[n],r.dtype,c,i);return{dataId:l.dataId,shape:t,dtype:l.dtype}}function K(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{shape:s}=o,a=e,i=y.sizeFromShape(n.shape),c=y.inferFromImplicitShape(s,i),l=y.sizeFromShape(c);y.assert(i===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${n.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`);let p=a.texData.get(n.dataId);return p.isPacked&&!oc(n.shape,c)&&!(p.texture!==null&&oc(p.shape,c))?KS(n,c,a):(a.incRef(n.dataId),{dataId:n.dataId,shape:c,dtype:n.dtype})}var jS={kernelName:La,backendName:"webgl",kernelFunc:K};var xu=class{constructor(t,e){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:a}=t;this.outputShape=[n,a];let i=Math.floor(o/4)*4,c=o%4,l="sumValue += dot(values, ones);";if(e!=null){let u=1/e;l=`sumValue += dot(values * ${y.isInt(u)?u.toPrecision(2):u}, ones);`}let p="";s%o>0&&(p=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        float sumValue = 0.0;

        for (int i = 0; i < ${i}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${l}
        }

        int inIdx = inOffset + ${i};
        if (${c===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${l}
        } else if (${c===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${l}
        } else if (${c===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${l}
        }
        setOutput(sumValue);
      }
    `}};var hf=class{constructor(t,e){this.variableNames=["x"];let{windowSize:o,batchSize:n,inSize:s,outSize:a}=t;this.outputShape=[n,a];let i="0.0",c="";e==="prod"?i="1.0":e==="min"?(i="1.0 / 1e-20",c="min"):e==="max"&&(i="-1.0 / 1e-20",c="max");let l=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="sum"?l="sumValue":e==="prod"?l="prodValue":e==="all"?l="allValue":e==="any"&&(l="anyValue");let p=Math.floor(o/4)*4,u=o%4,m=`
      if (${e==="sum"}) {
        sumValue += dot(values, ones);
      } else if (${e==="prod"}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${c}(values, minMaxValue);
        if (${e==="min"} || ${e==="max"}) {
          minMaxValue = ${c}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f="vec4";e==="all"?(i="1.0",m=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):e==="any"&&(i="0.0",m=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");let d="";s%o>0&&(d=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${i};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${d}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${o};

        vec4 minMaxValue = vec4(${i});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${p}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${m}
        }

        int inIdx = inOffset + ${p};
        if (${u===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${m}
        } else if (${u===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${m}
        } else if (${u===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${m}
        }
        setOutput(${l});
      }
    `}};function xM(r){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let e=t.length?t[t.length-1].outSize:r[1],o=v.computeOptimalWindowSize(e);t.push({inSize:e,windowSize:o,outSize:Math.ceil(e/o)})}return t}function sr(r,t,e,o){let n=xM(r.shape),s=r;for(let a=0;a<n.length;a++){let{inSize:i,windowSize:c,outSize:l}=n[a],p,u;e==="mean"?p=a===0?new xu({windowSize:c,inSize:i,batchSize:r.shape[0],outSize:l},i):new xu({windowSize:c,inSize:i,batchSize:r.shape[0],outSize:l}):p=new hf({windowSize:c,inSize:i,batchSize:r.shape[0],outSize:l},e),u=s,s=o.runWebGLProgram(p,[s],t),u.dataId!==r.dataId&&o.disposeIntermediateTensorInfo(u)}return s}var gf=class{constructor(t,e){this.variableNames=["A"];let o=new Array(t.length);for(let a=0;a<o.length;a++)o[a]=t[e[a]];this.outputShape=o,this.rank=o.length;let n=dt(this.rank),s=yM(e);this.userCode=`
    void main() {
      ${n} resRC = getOutputCoords();
      setOutput(getA(${s}));
    }
    `}};function yM(r){let t=r.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],o=new Array(t);for(let n=0;n<r.length;n++)o[r[n]]=e[n];return o.join()}var xf=class{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;let o=new Array(t.length);for(let p=0;p<o.length;p++)o[p]=t[e[p]];if(this.outputShape=o,this.rank=o.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let n=dt(this.rank),s=Iy("rc",this.rank),a=new Array(this.rank);for(let p=0;p<e.length;p++)a[e[p]]=s[p];let i=`vec2(${a.slice(-2).join()})`,c=`++${s[this.rank-1]} < ${o[this.rank-1]}`,l=`getChannel(getA(${a.join()}), ${i})`;this.userCode=`
    void main() {
      ${n} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${l};
      if(${c}) {
        result[1] = ${l};
      }
      --${s[this.rank-1]};
      if(++${s[this.rank-2]} < ${o[this.rank-2]}) {
        result[2] = ${l};
        if(${c}) {
          result[3] = ${l};
        }
      }
      setOutput(result);
    }
    `}};function ds(r,t,e){let o=F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new xf(r.shape,t):new gf(r.shape,t);return e.runWebGLProgram(o,[r],r.dtype)}function XS(r,t,e,o){let n=t,s=r.shape.length,a=y.parseAxisParam(n,r.shape),i=a,c=v.getAxesPermutation(i,s),l=c!=null,p=r;l&&(p=ds(r,c,o),i=v.getInnerMostAxes(i.length,s)),v.assertAxesAreInnerMostDims("sum",i,s);let[u,m]=v.computeOutAndReduceShapes(p.shape,i),f=u;e&&(f=v.expandShapeToKeepDim(u,a));let d=y.sizeFromShape(m),h=y.sizeFromShape(r.shape)/d,x=K({inputs:{x:p},attrs:{shape:[h,d]},backend:o}),b=Qn(r.dtype),I=sr(x,b,"sum",o),T=K({inputs:{x:I},attrs:{shape:f},backend:o});return o.disposeIntermediateTensorInfo(x),o.disposeIntermediateTensorInfo(I),l&&o.disposeIntermediateTensorInfo(p),T}function cc(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o;return XS(n,s,a,e)}var YS={kernelName:"Sum",backendName:"webgl",kernelFunc:cc};function Mt(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{perm:s}=o,a=e,i=n.shape.length,c=new Array(i);for(let p=0;p<c.length;p++)c[p]=n.shape[s[p]];let l;if(a.shouldExecuteOnCPU([n])){let u=a.texData.get(n.dataId).values,m=ic(u,n.shape,n.dtype,s,c);l=a.makeTensorInfo(c,n.dtype);let f=a.texData.get(l.dataId);f.values=m}else l=ds(n,s,a);return l}var ZS={kernelName:No,backendName:"webgl",kernelFunc:Mt};var Ay=1e3;function lc({a:r,b:t,transposeA:e,transposeB:o,backend:n,bias:s=null,preluActivationWeights:a=null,leakyreluAlpha:i=0,activation:c=null}){let l=r.shape.length,p=t.shape.length,u=e?r.shape[l-2]:r.shape[l-1],m=o?t.shape[p-1]:t.shape[p-2],f=e?r.shape[l-1]:r.shape[l-2],d=o?t.shape[p-2]:t.shape[p-1],g=r.shape.slice(0,-2),h=t.shape.slice(0,-2),x=y.sizeFromShape(g),b=y.sizeFromShape(h),T=Br.assertAndGetBroadcastShape(r.shape.slice(0,-2),t.shape.slice(0,-2)).concat([f,d]);y.assert(u===m,()=>`Error in matMul: inner shapes (${u}) and (${m}) of Tensors with shapes ${r.shape} and ${t.shape} and transposeA=${e} and transposeB=${o} must match.`);let E=e?[x,u,f]:[x,f,u],$=o?[b,d,m]:[b,m,d],A=K({inputs:{x:r},backend:n,attrs:{shape:E}}),D=K({inputs:{x:t},backend:n,attrs:{shape:$}}),_=[A,D],O=Math.max(x,b),L=e?A.shape[1]:A.shape[2],B=s!=null,M=a!=null,G=c==="leakyrelu",V=c!=null?zo(c,!0):null,W=B||M||G||V!=null,H;if((f===1||d===1)&&L>Ay&&W===!1){let q=A,X=D;e&&(q=Mt({inputs:{x:A},backend:n,attrs:{perm:[0,2,1]}}),_.push(q)),o&&(X=Mt({inputs:{x:D},backend:n,attrs:{perm:[0,2,1]}}),_.push(X));let Y=d!==1,J=d===1,Z=q;Y&&(Z=K({inputs:{x:q},backend:n,attrs:{shape:[O,L,1]}}),_.push(Z));let et=d===1?2:1,Q=X;J&&(Q=K({inputs:{x:X},backend:n,attrs:{shape:[O,1,L]}}),_.push(Q));let st=gu({inputs:{a:Z,b:Q},backend:n});H=cc({inputs:{x:st},backend:n,attrs:{axis:et,keepDims:!0}}),_.push(st)}else{let q=re(r.dtype,t.dtype),X=new cl(E,$,[O,f,d],e,o,B,V,M,G),Y=[A,D];if(s!=null&&Y.push(s),M&&Y.push(a),G){let J=n.makeTensorInfo([],"float32",y.createScalarValue(i,"float32"));Y.push(J),_.push(J)}H=n.runWebGLProgram(X,Y,q)}let U=K({inputs:{x:H},backend:n,attrs:{shape:T}});_.push(H);for(let q of _)n.disposeIntermediateTensorInfo(q);return U}function bM(r){let{inputs:t,backend:e,attrs:o}=r,{a:n,b:s,bias:a,preluActivationWeights:i}=t,{transposeA:c,transposeB:l,activation:p,leakyreluAlpha:u}=o;return lc({a:n,b:s,transposeA:c,transposeB:l,backend:e,bias:a,preluActivationWeights:i,leakyreluAlpha:u,activation:p})}var QS={kernelName:Kn,backendName:"webgl",kernelFunc:bM};var JS="return abs(x);";function wM(r){let{inputs:t,backend:e}=r,{x:o}=t;if(e.shouldExecuteOnCPU([o])&&o.dtype!=="complex64"){let s=e.texData.get(o.dataId),a=lf(s.values);return e.makeTensorInfo(o.shape,o.dtype,a)}let n;return F().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new je(o.shape,JS):n=new Ce(o.shape,JS),e.runWebGLProgram(n,[o],o.dtype)}var tv={kernelName:"Abs",backendName:"webgl",kernelFunc:wM};var CM=le+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,TM=at({opSnippet:CM}),ev={kernelName:tn,backendName:"webgl",kernelFunc:TM};var IM=le+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,SM=at({opSnippet:IM}),rv={kernelName:en,backendName:"webgl",kernelFunc:SM};var ov="return a + b;",vM=Ft({opSnippet:ov,packedOpSnippet:ov,supportsComplex:!0,cpuKernelImpl:OI}),nv={kernelName:"Add",backendName:"webgl",kernelFunc:vM};var yf=class{constructor(t,e){this.outputShape=[],this.outputShape=t,this.variableNames=e.map((s,a)=>`T${a}`);let o=[];this.variableNames.forEach(s=>{o.push(`float v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        float result = ${n};
        setOutput(result);
      }
    `}};var bf=class{constructor(t,e){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.variableNames=e.map((s,a)=>`T${a}`);let o=[];this.variableNames.forEach(s=>{o.push(`vec4 v${s} = get${s}AtOutCoords();`)});let n=this.variableNames.map(s=>`v${s}`).join(" + ");this.userCode=`
      void main() {
        ${o.join(`
        `)}

        vec4 result = ${n};
        setOutput(result);
      }
    `}};function wf(r){let{inputs:t,backend:e}=r,o=t;if(o.length===1)return Jt({inputs:{x:o[0]},backend:e});if(o.length>F().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){let c=Math.floor(o.length/2),l=wf({inputs:o.slice(0,c),backend:e}),p=wf({inputs:o.slice(c),backend:e});return wf({inputs:[l,p],backend:e})}let n=o.map(c=>c.dtype).reduce((c,l)=>re(c,l)),s=o.map(c=>c.shape),i=F().getBool("WEBGL_PACK")?new bf(o[0].shape,s):new yf(o[0].shape,s);return e.runWebGLProgram(i,o,n)}var sv={kernelName:Ns,backendName:"webgl",kernelFunc:wf};function NM(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o,i=n.shape.length,c=y.parseAxisParam(s,n.shape),l=c,p=v.getAxesPermutation(l,i),u=n;p!=null&&(u=Mt({inputs:{x:n},backend:e,attrs:{perm:p}}),l=v.getInnerMostAxes(l.length,i)),v.assertAxesAreInnerMostDims("all",l,i);let[m,f]=v.computeOutAndReduceShapes(u.shape,l),d=y.sizeFromShape(f),g=K({inputs:{x:u},backend:e,attrs:{shape:[-1,d]}}),h=sr(g,g.dtype,"all",e),x;if(a){let b=v.expandShapeToKeepDim(m,c);x=K({inputs:{x:h},backend:e,attrs:{shape:b}})}else x=K({inputs:{x:h},backend:e,attrs:{shape:m}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(h),p!=null&&e.disposeIntermediateTensorInfo(u),x}var av={kernelName:"All",backendName:"webgl",kernelFunc:NM};function kM(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o,i=n.shape.length,c=y.parseAxisParam(s,n.shape),l=c,p=v.getAxesPermutation(l,i),u=n;p!=null&&(u=Mt({inputs:{x:n},backend:e,attrs:{perm:p}}),l=v.getInnerMostAxes(l.length,i)),v.assertAxesAreInnerMostDims("any",l,i);let[m,f]=v.computeOutAndReduceShapes(u.shape,l),d=y.sizeFromShape(f),g=K({inputs:{x:u},backend:e,attrs:{shape:[-1,d]}}),h=sr(g,g.dtype,"any",e),x;if(a){let b=v.expandShapeToKeepDim(m,c);x=K({inputs:{x:h},backend:e,attrs:{shape:b}})}else x=K({inputs:{x:h},backend:e,attrs:{shape:m}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(h),p!=null&&e.disposeIntermediateTensorInfo(u),x}var iv={kernelName:"Any",backendName:"webgl",kernelFunc:kM};var Cf=class{constructor(t,e,o){this.variableNames=["A"];let{windowSize:n,batchSize:s,outSize:a}=t;o||this.variableNames.push("bestIndicesA"),this.outputShape=[s,a];let i=e==="max"?">":"<",c=o?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${n}; i++) {
          int inIdx = ${c};
          float candidate = getA(batch, inIdx);
          if (candidate ${i} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}};var Tf=class{constructor(t,e,o,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,y.assert(t.length>2,()=>`Packed arg${o.charAt(0).toUpperCase()+o.slice(1)} supports only inputs with rank above 2.`);let s=t[t.length-1],a=Math.ceil(s/e);this.outputShape=t.slice(0,-1),a>1&&this.outputShape.push(a),n||this.variableNames.push("bestIndicesA");let i=this.outputShape,c=i.length,l=dt(c),p=Qt("coords",c),u,m;if(a===1){m=c+1;let D=dt(m);u=`
        ${D} sourceLocR = ${D}(${p.join()}, 0);
        ++${p[c-1]};
        ${D} sourceLocG = ${D}(${p.join()}, 0);
        ++${p[c-2]};
        ${D} sourceLocA = ${D}(${p.join()}, 0);
        --${p[c-1]};
        ${D} sourceLocB = ${D}(${p.join()}, 0);
        --${p[c-2]};`}else m=c,u=`
        ${l} sourceLocR = coords;
        ++${p[c-1]};
        ${l} sourceLocG = coords;
        ++${p[c-2]};
        ${l} sourceLocA = coords;
        --${p[c-1]};
        ${l} sourceLocB = coords;
        --${p[c-2]};`;let f=["x","y","z","w","u","v"].slice(0,m),d="."+f[m-1],g=f.map(D=>"int "+D),h=Qt("sourceLocR",m-1).concat("inIdx.r"),x=Qt("sourceLocG",m-1).concat("inIdx.g"),b=Qt("sourceLocB",m-1).concat("inIdx.b"),I=Qt("sourceLocA",m-1).concat("inIdx.a"),T=o==="max"?"greaterThan":"lessThan",E=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(${h.join()}),
                             getBestIndicesAChannel(${x.join()}),
                             getBestIndicesAChannel(${b.join()}),
                             getBestIndicesAChannel(${I.join()})));`,$=`vec4(
            getAChannel(${h.join()}),
            hasNextCol ? getAChannel(${x.join()}) : 0.,
            hasNextRow ? getAChannel(${b.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${I.join()}) : 0.)`,A=n?"":`
      float getBestIndicesAChannel(${g.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${g.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${A}
      void main() {
        ${l} coords = getOutputCoords();
        bool hasNextCol = ${p[c-1]} < ${i[c-1]-1};
        bool hasNextRow = ${p[c-2]} < ${i[c-2]-1};
        ${u}
        ivec4 srcIdx = ivec4(sourceLocR${d}, sourceLocG${d},
          sourceLocB${d}, sourceLocA${d}) * ${e};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${$};

        for (int i = 0; i < ${e}; i++) {
          inIdx = srcIdx;
          ${E}
          vec4 candidate = ${$};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${T}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}};function cv(r,t,e,o=null){let n=t.shape[0],s=t.shape[1];o!=null&&(n=o.shape[0],s=o.shape[1]);let a=v.computeOptimalWindowSize(s),i={windowSize:a,inSize:s,batchSize:n,outSize:Math.ceil(s/a)},c=new Cf(i,e,o==null),l=[t];o!=null&&l.push(o);let p=r.runWebGLProgram(c,l,"int32");if(p.shape[1]===1)return p;let u=cv(r,t,e,p);return r.disposeIntermediateTensorInfo(p),u}function lv(r,t,e,o=null){let n=o!=null?o.shape:t.shape,s=n[n.length-1],a=v.computeOptimalWindowSize(s),i=new Tf(n,a,e,o==null),c=o==null?[t]:[t,o],l=r.runWebGLProgram(i,c,"int32");if(l.shape.length===t.shape.length){let p=lv(r,t,e,l);return r.disposeIntermediateTensorInfo(l),p}return l}function If(r,t,e,o){let n=[e];if(v.assertAxesAreInnerMostDims("arg"+o.charAt(0).toUpperCase()+o.slice(1),n,t.shape.length),!F().getBool("WEBGL_PACK_REDUCE")||t.shape.length<=2){let s=[],a=r.texData.get(t.dataId),i=a!==null&&a.isPacked,c=t;i&&(c=r.unpackTensor(t),s.push(c));let[l,p]=v.computeOutAndReduceShapes(c.shape,n),u=y.sizeFromShape(p),m=K({inputs:{x:c},backend:r,attrs:{shape:[-1,u]}});s.push(m);let f=cv(r,m,o);s.push(f);let d=K({inputs:{x:f},backend:r,attrs:{shape:l}});return s.forEach(g=>r.disposeIntermediateTensorInfo(g)),d}return lv(r,t,o)}function EM(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s}=o,a=y.parseAxisParam(s,n.shape),i=v.getAxesPermutation(a,n.shape.length),c=n,l=[];i!=null&&(c=Mt({inputs:{x:n},backend:e,attrs:{perm:i}}),l.push(c),a=v.getInnerMostAxes(a.length,c.shape.length)),v.assertAxesAreInnerMostDims("argMax",[a[0]],c.shape.length);let p=If(e,c,a[0],"max");return l.forEach(u=>e.disposeIntermediateTensorInfo(u)),p}var pv={kernelName:ks,backendName:"webgl",kernelFunc:EM};function $M(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s}=o,a=y.parseAxisParam(s,n.shape),i=v.getAxesPermutation(a,n.shape.length),c=n,l=[];i!=null&&(c=Mt({inputs:{x:n},backend:e,attrs:{perm:i}}),l.push(c),a=v.getInnerMostAxes(a.length,c.shape.length)),v.assertAxesAreInnerMostDims("argMin",[a[0]],c.shape.length);let p=If(e,c,a[0],"min");return l.forEach(u=>e.disposeIntermediateTensorInfo(u)),p}var uv={kernelName:Es,backendName:"webgl",kernelFunc:$M};var AM=le+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,RM=at({opSnippet:AM}),mv={kernelName:rn,backendName:"webgl",kernelFunc:RM};var DM=le+"return log(x + sqrt(x * x + 1.0));",FM=at({opSnippet:DM}),fv={kernelName:on,backendName:"webgl",kernelFunc:FM};var _M=le+`
  return atan(x);
`,OM=at({opSnippet:_M}),dv={kernelName:nn,backendName:"webgl",kernelFunc:OM};var PM=il+`
  return atan(a, b);
`,LM=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+nr+`
  return result;
`,BM=Ft({opSnippet:PM,packedOpSnippet:LM}),hv={kernelName:an,backendName:"webgl",kernelFunc:BM};var MM=le+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,VM=at({opSnippet:MM}),gv={kernelName:sn,backendName:"webgl",kernelFunc:VM};var Wr=class{constructor(t,e,o,n=!1,s=!1){if(this.variableNames=["x"],e==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let a=t.filterWidth,i=t.strideHeight,c=t.strideWidth,l=t.dilationHeight,p=t.dilationWidth,u=t.effectiveFilterHeight,m=t.effectiveFilterWidth,f=t.padInfo.top,d=t.padInfo.left;this.outputShape=t.outShape;let g=e==="avg",h=`((batch  * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + d`,x=`(xR * ${t.inWidth} + xC) * ${t.inChannels} + d`,b="0.0";if(g||(b="-1.0 / 1e-20"),o){this.userCode=`
        const ivec2 strides = ivec2(${i}, ${c});
        const ivec2 pads = ivec2(${f}, ${d});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${u};
              wR += ${l}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${m};
                wC += ${p}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${n?s?h:x:`wR * ${m} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let I="max",T=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&(T="avgValue / max(count, 1.0)");let E=Math.floor(a/4)*4,$=a%4,A=`
      if (${g}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${I}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${c});
      const ivec2 pads = ivec2(${f}, ${d});
      const float initializationValue = ${b};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${b});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${u};
            wR += ${l}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${E}; wC += 4) {
            int xC = xCCorner + wC * ${p};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${p}, d),
              getValue(batch, xR, xC + 2 * ${p}, d),
              getValue(batch, xR, xC + 3 * ${p}, d)
            );

            ${A}
          }

          int xC = xCCorner + ${E};
          if (${$===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${A}
          } else if (${$===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${p}, d),
              initializationValue,
              initializationValue
            );

            ${A}
          } else if (${$===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${p}, d),
              getValue(batch, xR, xC + 2 * ${p}, d),
              initializationValue
            );

            ${A}
          }
        }
        setOutput(${T});
      }
    `}},hs=class{constructor(t,e,o,n=!1,s=!1){if(this.variableNames=["x"],e==="avg"&&o)throw new Error("Cannot compute positions for average pool.");let a=t.filterWidth,i=t.strideDepth,c=t.strideHeight,l=t.strideWidth,p=t.dilationDepth,u=t.dilationHeight,m=t.dilationWidth,f=t.effectiveFilterDepth,d=t.effectiveFilterHeight,g=t.effectiveFilterWidth,h=t.padInfo.front,x=t.padInfo.top,b=t.padInfo.left;this.outputShape=t.outShape;let I=e==="avg",T="0.0";if(I||(T="-1.0 / 1e-20"),o){this.userCode=`
        const ivec3 strides =
            ivec3(${i}, ${c}, ${l});
        const ivec3 pads = ivec3(${h}, ${x}, ${b});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${p}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${t.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${d};
                wR += ${u}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${g};
                  wC += ${m}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${n?s?`(((batch * ${t.inDepth} + xD) * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`((xD * ${t.inHeight} + xR) * ${t.inWidth} + xC) * ${t.inChannels} + ch`:`wD * ${d} * ${g} +
                      wR * ${g} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let E="max",$=`${e}(${e}(${e}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;e==="avg"&&($="avgValue / max(count, 1.0)");let A=Math.floor(a/4)*4,D=a%4,_=`
      if (${I}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = ${E}(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${i}, ${c}, ${l});
      const ivec3 pads = ivec3(${h}, ${x}, ${b});
      const float initializationValue = ${T};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${t.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${T});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${p}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d};
            wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${A}; wC += 4) {
              int xC = xCCorner + wC * ${m};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                getValue(batch, xD, xR, xC + 2 * ${m}, ch),
                getValue(batch, xD, xR, xC + 3 * ${m}, ch)
              );

              ${_}
            }

            int xC = xCCorner + ${A};
            if (${D===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${_}
            } else if (${D===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                initializationValue,
                initializationValue
              );

              ${_}
            } else if (${D===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${m}, ch),
                getValue(batch, xD, xR, xC + 2 * ${m}, ch),
                initializationValue
              );

              ${_}
            }
          }
        }
        setOutput(${$});
      }
    `}};function GM(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t;ho(n,"avgPool");let{filterSize:s,strides:a,pad:i,dimRoundingMode:c}=o,l=1;y.assert(v.eitherStridesOrDilationsAreOne(a,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let p=v.computePool2DInfo(n.shape,s,a,l,i,c);if(p.filterWidth===1&&p.filterHeight===1&&y.arraysEqual(p.inShape,p.outShape))return Jt({inputs:{x:n},backend:e});let u=new Wr(p,"avg",!1);return e.runWebGLProgram(u,[n],"float32")}var xv={kernelName:$s,backendName:"webgl",kernelFunc:GM};function UM(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{filterSize:s,strides:a,pad:i,dimRoundingMode:c,dataFormat:l}=o,p=[1,1,1],u=v.computePool3DInfo(n.shape,s,a,p,i,c,l),m=new hs(u,"avg",!1);return e.runWebGLProgram(m,[n],"float32")}var yv={kernelName:As,backendName:"webgl",kernelFunc:UM};var Sf=class{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;let e=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,a=t.dilationHeight,i=t.dilationWidth,c=t.effectiveFilterHeight,l=t.effectiveFilterWidth,p=c-1-t.padInfo.top,u=l-1-t.padInfo.left,m=1/(e*o);this.userCode=`
      const ivec2 pads = ivec2(${p}, ${u});
      const float avgMultiplier = float(${m});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${c};
            wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${l};
            wC+= ${i}) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},vf=class{constructor(t){this.variableNames=["dy"],this.outputShape=t.inShape;let e=t.filterDepth,o=t.filterHeight,n=t.filterWidth,s=t.strideDepth,a=t.strideHeight,i=t.strideWidth,c=t.dilationDepth,l=t.dilationHeight,p=t.dilationWidth,u=t.effectiveFilterDepth,m=t.effectiveFilterHeight,f=t.effectiveFilterWidth,d=u-1-t.padInfo.front,g=m-1-t.padInfo.top,h=f-1-t.padInfo.left,x=1/(e*o*n);this.userCode=`
      const ivec3 pads = ivec3(${d}, ${g}, ${h});
      const float avgMultiplier = float(${x});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${u};
            wD += ${c}) {
          float dyD = float(dyDCorner + wD) / ${s}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${m};
              wR += ${l}) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${p}) {
              float dyC = float(dyCCorner + wC) / ${i}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function zM(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s}=t,a=s,{filterSize:i,strides:c,pad:l,dimRoundingMode:p}=o,u=[1,1,1],m=v.computePool3DInfo(a.shape,i,c,u,l,p),f=new vf(m);return e.runWebGLProgram(f,[n],a.dtype)}var bv={kernelName:El,backendName:"webgl",kernelFunc:zM};function WM(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s}=t,a=s;ho([n,s],"avgPoolGrad");let{filterSize:i,strides:c,pad:l}=o,p=v.computePool2DInfo(a.shape,i,c,1,l),u=new Sf(p);return e.runWebGLProgram(u,[n],a.dtype)}var wv={kernelName:kl,backendName:"webgl",kernelFunc:WM};function HM(r){let{inputs:t,backend:e,attrs:o}=r,{a:n,b:s}=t,{transposeA:a,transposeB:i}=o;return lc({a:n,b:s,transposeA:a,transposeB:i,backend:e})}var Cv={kernelName:Rs,backendName:"webgl",kernelFunc:HM};var Nf=class{constructor(t,e,o,n,s,a){this.outputShape=[],this.variableNames=["x","mean","variance"],v.assertAndGetBroadcastShape(t,e),v.assertAndGetBroadcastShape(t,o);let i="0.0";n!=null&&(v.assertAndGetBroadcastShape(t,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let c="1.0";s!=null&&(v.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale"),c="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${i};
        float scale = ${c};
        float inv = scale * inversesqrt(variance + float(${a}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}};var kf=class{constructor(t,e,o,n,s,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],v.assertAndGetBroadcastShape(t,e),v.assertAndGetBroadcastShape(t,o);let i="vec4(0.0)";n!=null&&(v.assertAndGetBroadcastShape(t,n),this.variableNames.push("offset"),i="getOffsetAtOutCoords()");let c="vec4(1.0)";s!=null&&(v.assertAndGetBroadcastShape(t,s),this.variableNames.push("scale"),c="getScaleAtOutCoords()"),this.outputShape=t,this.userCode=`
      void main() {
        vec4 offset = ${i};
        vec4 scale = ${c};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${a}));

        setOutput((x - mean) * inv + offset);
      }
    `}};var qM=({inputs:r,backend:t,attrs:e})=>{let{x:o,mean:n,variance:s,offset:a,scale:i}=r;y.assert(n.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),y.assert(a==null||n.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),y.assert(i==null||n.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let{varianceEpsilon:c}=e;c==null&&(c=.001);let l=[o,n,s],p=null;a!=null&&(p=a.shape,l.push(a));let u=null;i!=null&&(u=i.shape,l.push(i));let m=F().getBool("WEBGL_PACK_NORMALIZATION")?new kf(o.shape,n.shape,s.shape,p,u,c):new Nf(o.shape,n.shape,s.shape,p,u,c);return t.runWebGLProgram(m,l,l[0].dtype)},Tv={kernelName:ia,backendName:"webgl",kernelFunc:qM};var Ef=class{constructor(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;let e=dt(this.rank);this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let o=KM(this.rank),n,s=t.map((a,i)=>`sourceLoc.${Ry[i]} = start[${i}] + coords.${Ry[i]};`);n=`
        ${e} sourceLoc;
        ${e} coords = getOutputCoords();
        ${s.join(`
`)}
      `,this.userCode=`
      void main() {
        ${n}
        setOutput(getSource(${o}));
      }
    `}},Ry=["x","y","z","w","u","v"];function KM(r){if(r===1)return"sourceLoc";if(r<=6)return Ry.slice(0,r).map(t=>"sourceLoc."+t).join(",");throw Error(`Slicing for rank ${r} is not yet supported`)}var $f=class{constructor(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length,this.customUniforms=[{name:"start",arrayIndex:this.rank,type:"int"}];let e=dt(this.rank),o=Qt("coords",this.rank),n=Qt("sourceLoc",this.rank),s=this.rank===1?"sourceLoc":`vec2(${n.slice(-2).join()})`,a=`getChannel(getSource(${n.join()}), ${s})`,i=`
      result.x = ${a};
      if (++${o[this.rank-1]} < ${t[this.rank-1]}) {
        ++${n[this.rank-1]};
        result.y = ${a};
        --${n[this.rank-1]};
      }
    `,c=this.rank===1?"":`
      --${o[this.rank-1]};
      if (++${o[this.rank-2]} < ${t[this.rank-2]}) {
        ++${n[this.rank-2]};
        result.z = ${a};
        if (++${o[this.rank-1]} < ${t[this.rank-1]}) {
          ++${n[this.rank-1]};
          result.w = ${a};
        }
      }
    `,l=this.rank<=4?`sourceLoc = coords +
            ${e}(${t.map((p,u)=>`start[${u}]`).join()});`:t.map((p,u)=>`${n[u]} = ${o[u]} + start[${u}];`).join(`
`);this.userCode=`
      void main() {
        ${e} coords = getOutputCoords();
        ${e} sourceLoc;
        ${l}
        vec4 result = vec4(0.);
        ${i}
        ${c}
        setOutput(result);
      }
    `}};function jM(r,t,e,o){let n=o.texData.get(r.dataId),s=o.makeTensorInfo(e,r.dtype),a=o.texData.get(s.dataId);Object.assign(a,n),a.refCount=1,a.shape=e,a.dtype=r.dtype;let i=ue.computeFlatOffset(t,y.computeStrides(r.shape));n.slice&&(i+=n.slice.flatOffset),a.slice={flatOffset:i,origDataId:n.slice&&n.slice.origDataId||r.dataId};let c=o.dataRefCount.get(a.slice.origDataId)||1;return o.dataRefCount.set(a.slice.origDataId,c+1),s}function Hr(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{begin:s,size:a}=o,[i,c]=ue.parseSliceParams(n,s,a);if(ue.assertParamsValid(n,i,c),y.sizeFromShape(c)===0)return e.makeTensorInfo(c,n.dtype,[]);if(e.shouldExecuteOnCPU([n])||n.dtype==="string"){let u=e.texData.get(n.dataId),m=fS(u.values,i,c,n.shape,n.dtype);return e.makeTensorInfo(c,n.dtype,m)}let{isPacked:l}=e.texData.get(n.dataId),p=ue.isSliceContinous(n.shape,i,c);if(l||!p){let u=F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new $f(c):new Ef(c),m=[i];return e.runWebGLProgram(u,[n],n.dtype,m)}return e.uploadToGPU(n.dataId),jM(n,i,c,e)}var Iv={kernelName:Ha,backendName:"webgl",kernelFunc:Hr};var XM=r=>{let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{blockShape:s,crops:a}=o;y.assert(n.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet");let i=s.reduce((b,I)=>b*I),c=v.getReshaped(n.shape,s,i),l=v.getPermuted(c.length,s.length),p=v.getReshapedPermuted(n.shape,s,i),u=v.getSliceBeginCoords(a,s.length),m=v.getSliceSize(p,a,s.length),f=[],d=K({inputs:{x:n},backend:e,attrs:{shape:c}}),g=Mt({inputs:{x:d},backend:e,attrs:{perm:l}}),h=K({inputs:{x:g},backend:e,attrs:{shape:p}}),x=Hr({inputs:{x:h},backend:e,attrs:{begin:u,size:m}});return f.push(d),f.push(g),f.push(h),f.forEach(b=>e.disposeIntermediateTensorInfo(b)),x},Sv={kernelName:Ds,backendName:"webgl",kernelFunc:XM};function YM(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,weights:s}=t,{size:a}=o,i=e.readSync(n.dataId),c=e.readSync(s.dataId),l=cf(i,c,s.dtype,s.shape,a);return e.makeTensorInfo([a],s.dtype,l)}var vv={kernelName:Fs,backendName:"webgl",kernelFunc:YM};var ZM=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,QM=`
  return float(int(a.r) & int(b.r));
`;function JM(r){let{inputs:t,backend:e}=r,{a:o,b:n}=t,s=F().getBool("WEBGL_PACK_BINARY_OPERATIONS"),a=F().getNumber("WEBGL_VERSION");if(e.shouldExecuteOnCPU([o,n])||a===1){let c=e.texData.get(o.dataId).values,l=e.texData.get(n.dataId).values,[p,u]=LI(o.shape,n.shape,c,l,o.dtype),m=e.makeTensorInfo(u,o.dtype),f=e.texData.get(m.dataId);return f.values=p,m}let i;return s?i=new or(ZM,o.shape,n.shape,!1):i=new Xe(QM,o.shape,n.shape),e.runWebGLProgram(i,[o,n],o.dtype)}var Nv={kernelName:cn,backendName:"webgl",kernelFunc:JM};function tV(r){let{inputs:t,backend:e}=r,{s0:o,s1:n}=t,s=e.readSync(o.dataId),a=e.readSync(n.dataId),i=v.assertAndGetBroadcastShape(Array.from(s),Array.from(a));return e.makeTensorInfo([i.length],"int32",Int32Array.from(i))}var kv={kernelName:_s,backendName:"webgl",kernelFunc:tV};var eV="return float(a != b);",Dy=Ft({opSnippet:eV,cpuKernelImpl:nS,dtype:"bool"}),Ev={kernelName:Rn,backendName:"webgl",kernelFunc:Dy};function Wo(r){let{inputs:t,backend:e}=r,{input:o}=t,n=e.texData.get(o.dataId);return Jt({inputs:{x:n.complexTensorInfos.real},backend:e})}var $v={kernelName:Pa,backendName:"webgl",kernelFunc:Wo};var rV="return float(int(x));";function Av(r,t){let e=new Ce(r.shape,rV),o=t.runWebGLProgram(e,[r],"int32");return{dataId:o.dataId,shape:o.shape,dtype:o.dtype}}function Fy(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{dtype:s}=o;if(s==="complex64"){if(n.dtype==="complex64")return Jt({inputs:{x:n},backend:e});let a=qe(n.shape),i=Fy({inputs:{x:n},backend:e,attrs:{dtype:"float32"}}),c=Ye({inputs:{real:i,imag:a},backend:e});return a.dispose(),e.disposeIntermediateTensorInfo(i),c}if(n.dtype==="complex64"){let a=Wo({inputs:{input:n},backend:e}),i=Fy({inputs:{x:a},backend:e,attrs:{dtype:s}});return e.disposeIntermediateTensorInfo(a),i}if(!y.hasEncodingLoss(n.dtype,s)){let a=Jt({inputs:{x:n},backend:e});return{dataId:a.dataId,shape:a.shape,dtype:s}}if(e.shouldExecuteOnCPU([n])){let a=e.texData.get(n.dataId).values,[i,c,l]=BI(a,n.shape,n.dtype,s);return e.makeTensorInfo(i,c,l)}if(s==="int32")return Av(n,e);if(s==="bool"){let a=e.makeTensorInfo([],"bool",y.getTypedArrayFromDType("bool",1)),c=Dy({inputs:{a:n,b:a},backend:e});return e.disposeIntermediateTensorInfo(a),c}throw new Error(`Error in Cast: failed to cast ${n.dtype} to ${s}`)}var Rv={kernelName:Io,backendName:"webgl",kernelFunc:Fy};var Dv="return ceil(x);",oV=at({opSnippet:Dv,packedOpSnippet:Dv,cpuKernelImpl:MI}),Fv={kernelName:ln,backendName:"webgl",kernelFunc:oV};var Af=class{constructor(t){this.variableNames=["A"],this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}};var Rf=class{constructor(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"minVal",type:"float"},{name:"maxVal",type:"float"}],this.outputShape=t,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}};function nV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{clipValueMin:s,clipValueMax:a}=o,i;F().getBool("WEBGL_PACK_CLIP")?i=new Rf(n.shape):i=new Af(n.shape);let c=[[s],[a]];return e.runWebGLProgram(i,[n],n.dtype,c)}var _v={kernelName:pn,backendName:"webgl",kernelFunc:nV};var Df=class{constructor(t){this.variableNames=["real","imag"],this.outputShape=t,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}};function Ov(r,t){return{dataId:t.dataId,dtype:t.dtype,shape:r.shape}}function sV(r){let{inputs:t,backend:e}=r,{x:o}=t,n=e.texData.get(o.dataId),s=new Df(o.shape),a=[Ov(o,n.complexTensorInfos.real),Ov(o,n.complexTensorInfos.imag)];return e.runWebGLProgram(s,a,a[0].dtype)}var Pv={kernelName:Ps,backendName:"webgl",kernelFunc:sV};var Ff=class{constructor(t){this.outputShape=[],this.outputShape=v.computeOutShape(t,1),this.variableNames=t.map((a,i)=>`T${i}`);let e=new Array(t.length-1);e[0]=t[0][1];for(let a=1;a<e.length;a++)e[a]=e[a-1]+t[a][1];let o=[`if (yC < ${e[0]}) setOutput(getT0(yR, yC));`];for(let a=1;a<e.length;a++){let i=e[a-1];o.push(`else if (yC < ${e[a]}) setOutput(getT${a}(yR, yC-${i}));`)}let n=e.length,s=e[e.length-1];o.push(`else setOutput(getT${n}(yR, yC-${s}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${o.join(`
        `)}
      }
    `}};var Of=class{constructor(t,e){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=v.computeOutShape(t,e);let o=this.outputShape,n=o.length,s=dt(n),a=Qt("coords",n),i=["x","y","z","w","u","v"].slice(0,n);this.variableNames=t.map((g,h)=>`T${h}`);let c=new Array(t.length-1);c[0]=t[0][e];for(let g=1;g<c.length;g++)c[g]=c[g-1]+t[g][e];let l=i[e],p=i.slice(-2),u=i.join(),m=`if (${l} < ${c[0]}) {
        return getChannel(
            getT0(${u}), vec2(${p.join()}));
        }`;for(let g=1;g<c.length;g++){let h=c[g-1];m+=`
        if (${l} < ${c[g]}  && ${l} >= ${c[g-1]}) {
          return getChannel(
            getT${g}(${_f(i,l,h)}),
            vec2(${_f(p,l,h)}));
        }`}let f=c.length,d=c[c.length-1];m+=`
        return getChannel(
          getT${f}(${_f(i,l,d)}),
          vec2(${_f(p,l,d)}));`,this.userCode=`
      float getValue(${i.map(g=>"int "+g)}) {
        ${m}
      }

      void main() {
        ${s} coords = getOutputCoords();
        vec4 result = vec4(getValue(${a}), 0., 0., 0.);

        ${a[n-1]} = ${a[n-1]} + 1;
        if (${a[n-1]} < ${o[n-1]}) {
          result.g = getValue(${a});
        }

        ${a[n-2]} = ${a[n-2]} + 1;
        if (${a[n-2]} < ${o[n-2]}) {
          result.a = getValue(${a});
        }

        ${a[n-1]} = ${a[n-1]} - 1;
        if (${a[n-2]} < ${o[n-2]} &&
            ${a[n-1]} < ${o[n-1]}) {
          result.b = getValue(${a});
        }
        setOutput(result);
      }
    `}};function _f(r,t,e){let o=r.indexOf(t);return r.map((s,a)=>a===o?`${s} - ${e}`:s).join()}function pc(r){let{inputs:t,backend:e}=r,{input:o}=t,n=e.texData.get(o.dataId);return Jt({inputs:{x:n.complexTensorInfos.imag},backend:e})}var Lv={kernelName:ua,backendName:"webgl",kernelFunc:pc};function ll(r,t,e){let o=r[0].dtype;if(o==="complex64"){let f=r.map(b=>Wo({inputs:{input:b},backend:e})),d=r.map(b=>pc({inputs:{input:b},backend:e})),g=ll(f,t,e),h=ll(d,t,e),x=Ye({inputs:{real:g,imag:h},backend:e});return f.forEach(b=>e.disposeIntermediateTensorInfo(b)),d.forEach(b=>e.disposeIntermediateTensorInfo(b)),e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(h),x}let n=e.shouldExecuteOnCPU(r);if(o==="string"&&(n=!0),n){let f=r.map(T=>{let $=[-1,y.sizeFromShape(T.shape.slice(t))];return K({inputs:{x:T},backend:e,attrs:{shape:$}})}),d=f.map(T=>({vals:e.readSync(T.dataId),shape:T.shape})),g=v.computeOutShape(f.map(T=>T.shape),1),h=f[0].shape[0]===1,x=VI(d,g,o,h),b=v.computeOutShape(r.map(T=>T.shape),t),I=e.makeTensorInfo(b,o,x);return f.forEach(T=>e.disposeIntermediateTensorInfo(T)),I}let s=r.filter(f=>y.sizeFromShape(f.shape)>0),a=F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&s[0].shape.length>1;if(s.length===1){let f=a?new Ce(r[0].shape,xo):new je(r[0].shape,xo);return e.runWebGLProgram(f,r,o)}let i=F().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER");if(s.length>i){let f=[];for(let g=0;g<s.length;g+=i){let h=s.slice(g,g+i);f.push(ll(h,t,e))}let d=ll(f,t,e);for(let g of f)e.disposeIntermediateTensorInfo(g);return d}if(a){let f=new Of(s.map(d=>d.shape),t);return e.runWebGLProgram(f,s,o)}let{tensors2D:c,outShape:l}=aV(s,t,e),p=new Ff(c.map(f=>f.shape)),u=e.runWebGLProgram(p,c,o);c.forEach(f=>e.disposeIntermediateTensorInfo(f));let m=K({inputs:{x:u},attrs:{shape:l},backend:e});return e.disposeIntermediateTensorInfo(u),m}function aV(r,t,e){let o=v.computeOutShape(r.map(s=>s.shape),t);return{tensors2D:r.map(s=>K({inputs:{x:s},attrs:{shape:[-1,y.sizeFromShape(s.shape.slice(t))]},backend:e})),outShape:o}}function _y(r){let{inputs:t,backend:e,attrs:o}=r,{axis:n}=o,s=y.parseAxisParam(n,t[0].shape)[0],a=t.map(l=>l.shape);v.assertParamsConsistent(a,s);let i=v.computeOutShape(t.map(l=>l.shape),s);if(y.sizeFromShape(i)===0)return e.makeTensorInfo(i,t[0].dtype,[]);let c=t.filter(l=>y.sizeFromShape(l.shape)>0);return c.length===1?Jt({inputs:{x:c[0]},backend:e}):ll(c,s,e)}var Bv={kernelName:Ls,backendName:"webgl",kernelFunc:_y};var pl=class{constructor(t,e=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.outputShape=t.outShape;let a=t.padInfo.top,i=t.padInfo.left,c=t.strideHeight,l=t.strideWidth,p=t.dilationHeight,u=t.dilationWidth,m=t.filterHeight,f=t.filterWidth,d=Math.floor(t.inChannels/4)*4,g=t.inChannels%4,h=t.dataFormat==="channelsLast",x=h?1:2,b=h?2:3,I=h?3:1,T="",E="";o&&(n?T=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?T=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:T=`
          float activation(float x) {
            ${o}
          }
        `,E="result = activation(result);");let $=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${T}

      const ivec2 strides = ivec2(${c}, ${l});
      const ivec2 pads = ivec2(${a}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${I}];

        ivec2 xRCCorner =
            ivec2(coords[${x}], coords[${b}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${m}; wR++) {
          int xR = xRCorner + wR * ${p};

          if (xR < 0 || xR >= ${t.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${u};

            if (xC < 0 || xC >= ${t.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${d}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${h}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${g===1}) {

              if (${h}) {
                dotProd +=
                    getX(batch, xR, xC, ${d}) *
                    getW(wR, wC, ${d}, d2);
              } else {
                dotProd +=
                    getX(batch, ${d}, xR, xC) *
                    getW(wR, wC, ${d}, d2);
              }

            } else if (${g===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${d}, d2),
                getW(wR, wC, ${d} + 1, d2)
              );

              if (${h}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${d}),
                  getX(batch, xR, xC, ${d} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${d}, xR, xC),
                  getX(batch, ${d} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${g===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${d}, d2),
                getW(wR, wC, ${d} + 1, d2),
                getW(wR, wC, ${d} + 2, d2)
              );

              if (${h}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${d}),
                  getX(batch, xR, xC, ${d} + 1),
                  getX(batch, xR, xC, ${d} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${d}, xR, xC),
                  getX(batch, ${d} + 1, xR, xC),
                  getX(batch, ${d} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${$}
        ${E}
        setOutput(result);
      }
    `}},Pf=class{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;let e=t.padInfo.front,o=t.padInfo.top,n=t.padInfo.left,s=t.strideDepth,a=t.strideHeight,i=t.strideWidth,c=t.dilationDepth,l=t.dilationHeight,p=t.dilationWidth,u=t.filterDepth,m=t.filterHeight,f=t.filterWidth,d=Math.floor(t.inChannels/4)*4,g=t.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${s}, ${a}, ${i});
      const ivec3 pads = ivec3(${e}, ${o}, ${n});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${u}; wF++) {
          int xF = xFCorner + wF * ${c};

          if (xF < 0 || xF >= ${t.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${m}; wR++) {
            int xR = xRCorner + wR * ${l};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${p};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${d}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${g===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${d}) *
                  getW(wF, wR, wC, ${d}, d2);
              } else if (${g===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${d}),
                  getX(batch, xF, xR, xC, ${d} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${d}, d2),
                  getW(wF, wR, wC, ${d} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${g===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${d}),
                  getX(batch, xF, xR, xC, ${d} + 1),
                  getX(batch, xF, xR, xC, ${d} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${d}, d2),
                  getW(wF, wR, wC, ${d} + 1, d2),
                  getW(wF, wR, wC, ${d} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};var ul=class{constructor(t,e=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=_t(this.outputShape.length);let a=t.padInfo.left,i=t.strideWidth,c=t.dilationWidth,l=t.filterHeight,p=t.filterWidth,u=p,m=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let h=0;h<p;h++)m+=`
           vec4 xTexelC${h*2};
           int xTexelC${h*2}Ready;
           vec4 xTexelC${h*2+1};
           int xTexelC${h*2+1}Ready;
           vec4 xC${h};`;m+=`
     for (int r = 0; r < ${l}; r++) {
      for (int d1 = 0; d1 < ${t.inChannels}; d1 += 2) {
       `;for(let h=0;h<p;h++)m+=`
           xTexelC${h*2} = vec4(0.0);
           xTexelC${h*2}Ready = 0;
           xTexelC${h*2+1} = vec4(0.0);
           xTexelC${h*2+1}Ready = 0;
           xC${h} = vec4(0.0);`;m+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let h=0;h<(u+1)/2;h++){let x=h*2;if(m+=`
           xC = xCCorner + ${x*c};
           `,i===1){if(x<p&&(a%2===1?(m+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }
               `,c===1&&x>0?m+=`
                 xC${x} = vec4(xTexelC${x-2}.zw, xTexelC${x}.xy);
                 `:m+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${x} = vec4(previous.zw, xTexelC${x}.xy);
                   } else {
                     xC${x} = vec4(0.0, 0.0, xTexelC${x}.xy);
                   }
                   `):m+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xC${x} = xTexelC${x};
                 `,x+1<p)){let b=a%2===0?y.nearestLargerEven(c):c;c%2===0&&a%2===1||c%2!==0&&a%2!==1?(m+=`
                   xCOffset = xC + imod(pads[1], 2) + ${b};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                     xTexelC${x+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${x+1}.zw = vec2(0.0);
                     }
                     xTexelC${x+1}Ready = 1;
                   }
                   `,c>1?m+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${x+1} = vec4(previous.zw, xTexelC${x+1}.xy);
                     } else {
                      xC${x+1} = vec4(0.0, 0.0, xTexelC${x+1}.xy);
                     }
                     `:m+=`
                     xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.xy);
                     `):b===1?m+=`
                     xC${x+1} = xTexelC${x};
                     `:m+=`
                     xCOffset = xC + ${b};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                       xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${x+1}.zw = vec2(0.0);
                       }
                       xTexelC${x+1}Ready = 1;
                     }

                     xC${x+1} = xTexelC${x+1};
                     `}}else x<p&&(a%2===1?(m+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.0);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
               `,x+1<p&&(m+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${x+1} = vec4(xTexelC${x+1}.xy, final.xy);
                 `)):(m+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${x}Ready == 0) {
                   xTexelC${x} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${x}.zw = vec2(0.0);
                   }
                   xTexelC${x}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${x+1}Ready == 0) {
                   xTexelC${x+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${x+1}.zw = vec2(0.);
                   }
                   xTexelC${x+1}Ready = 1;
                 }

                 xC${x} = vec4(
                   xTexelC${x}.xy, xTexelC${x+1}.xy);
               `,x+1<p&&(m+=`
                   xC${x+1} = vec4(xTexelC${x}.zw, xTexelC${x+1}.zw);
                 `)));x<p&&(m+=`
             wTexel = getW(r, ${x}, d1, d2);
             dotProd += xC${x}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${t.inChannels}) {
               dotProd += xC${x}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,x+1<p&&(m+=`
               wTexel = getW(r, ${x+1}, d1, d2);
               dotProd += xC${x+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${t.inChannels}) {
                 dotProd += xC${x+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}m+=`
     }
   `,m+=`
     }
   `,m+=`
     }
   `;let f="",d="";o&&(n?f=`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${o}
         }`:s?f=`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${o}
         }`:f=`vec4 activation(vec4 x) {
           ${o}
         }`,d="result = activation(result);");let g=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${m}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${g}
         ${d}
         setOutput(result);
       }
     `}};var Lf=class{constructor(t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"inputShape",type:"ivec4"},{name:"pad",type:"ivec2"},{name:"stride",type:"ivec2"},{name:"dilation",type:"ivec2"},{name:"inChannels",type:"int"},{name:"itemsPerBlockRow",type:"int"},{name:"outWidth",type:"int"}],this.outputShape=t,this.enableShapeUniforms=_t(this.outputShape.length);let{dataFormat:o}=e,n=Ht(),s=o==="channelsLast",a=s?1:2,i=s?2:3,c=this.enableShapeUniforms?"if(blockIndex < outShape[2] && pos < outShape[1]) {":`if(blockIndex < ${t[2]} && pos < ${t[1]}) {`,l="";for(let p=0;p<=1;p++)for(let u=0;u<=1;u++)l+=`
          blockIndex = rc.z + ${u};
          pos = rc.y + ${p};

          ${c}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${a}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${i}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${s}) {
                  innerDims = vec2(d1, ch);
                  result[${p*2+u}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${p*2+u}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${l}

        ${n.output} = result;
      }
    `}};function Bf(r,t){let e=r.length;return e>=3?t?[...r.slice(0,-3),r[e-3]*r[e-2],r[e-1]]:[...r.slice(0,-3),r[e-3],r[e-2]*r[e-1]]:!t&&e===1&&r[0]>1?[r[0],1]:null}function Mf({x:r,filter:t,convInfo:e,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:a=0,activation:i=null}){let c=r.shape,l=o.texData.get(r.dataId),p=e.inChannels,u=c[0]*c[1]*c[2],m=e.outChannels,f=e.dataFormat==="channelsLast",d=!1,g=!1,h,x=[];if(s!=null){let T=Bf(s.shape,f);T!=null&&(s=K({inputs:{x:s},backend:o,attrs:{shape:T}}),x.push(s))}if(n!=null){let T=Bf(n.shape,f);T!=null&&(n=K({inputs:{x:n},backend:o,attrs:{shape:T}}),x.push(n))}if(!((u===1||m===1)&&p>Ay)&&l.isPacked&&f&&l.texture!=null&&c[2]%2!==0&&y.arraysEqual(l.shape.slice(-3),c.slice(-3))){let T=c[0]*c[1]*(c[2]+1),E={dataId:r.dataId,shape:[1,T,e.inChannels],dtype:r.dtype},$=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,y.assert(oc(l.shape,E.shape),()=>`packed reshape ${l.shape} to ${E.shape} isn't free`);let A=K({inputs:{x:t},backend:o,attrs:{shape:[1,e.inChannels,e.outChannels]}});x.push(A);let D=lc({a:E,b:A,backend:o,transposeA:d,transposeB:g,bias:n,activation:i,preluActivationWeights:s,leakyreluAlpha:a}),_=o.texData.get(D.dataId);y.assert(_.isPacked,()=>"batchMatMul result is expected to be packed"),l.shape=$,_.shape=e.outShape,h=Jt({inputs:{x:D},backend:o}),h.shape=e.outShape,x.push(D)}else{let T=e.outHeight*e.outWidth,E=K({inputs:{x:r},backend:o,attrs:{shape:f?[e.batchSize,T,e.inChannels]:[e.batchSize,e.inChannels,T]}}),$=K({inputs:{x:t},backend:o,attrs:{shape:[1,e.inChannels,e.outChannels]}}),A=lc({a:f?E:$,b:f?$:E,transposeA:!f,transposeB:g,backend:o,bias:n,activation:i,preluActivationWeights:s,leakyreluAlpha:a});h=K({inputs:{x:A},backend:o,attrs:{shape:e.outShape}}),x.push(E),x.push($),x.push(A)}for(let T of x)o.disposeIntermediateTensorInfo(T);return h}function Vf({x:r,filter:t,convInfo:e,backend:o,bias:n=null,preluActivationWeights:s=null,leakyreluAlpha:a=0,activation:i=null}){let{filterWidth:c,filterHeight:l,inChannels:p,outWidth:u,outHeight:m,dataFormat:f}=e,d=f==="channelsLast",g=c*l*p,h=m*u,x=[e.batchSize,g,h],b=!0,I=!1,T=[];if(s!=null){let U=Bf(s.shape,d);U!=null&&(s=K({inputs:{x:s},backend:o,attrs:{shape:U}}),T.push(s))}if(n!=null){let U=Bf(n.shape,d);U!=null&&(n=K({inputs:{x:n},backend:o,attrs:{shape:U}}),T.push(n))}let E=K({inputs:{x:t},backend:o,attrs:{shape:[1,g,y.sizeFromShape(t.shape)/g]}});T.push(E);let $=new Lf(x,e),A=[r.shape,[e.padInfo.top,e.padInfo.left],[e.strideHeight,e.strideWidth],[e.dilationHeight,e.dilationWidth],[e.inChannels],[e.filterWidth*e.inChannels],[e.outWidth]],D=o.runWebGLProgram($,[r],"float32",A),_=K({inputs:{x:D},backend:o,attrs:{shape:x}});T.push(D),T.push(_);let O=n!=null,L=s!=null,B=i==="leakyrelu",M=i?zo(i,!0):null,G=new cl(d?_.shape:E.shape,d?E.shape:_.shape,d?[e.batchSize,h,e.outChannels]:[e.batchSize,e.outChannels,h],b,I,O,M,L,B),V=d?[_,E]:[E,_];if(n&&V.push(n),L&&V.push(s),B){let U=o.makeTensorInfo([],"float32",y.createScalarValue(a,"float32"));V.push(U),T.push(U)}let W=o.runWebGLProgram(G,V,"float32"),H=K({inputs:{x:W},backend:o,attrs:{shape:e.outShape}});T.push(W);for(let U of T)o.disposeIntermediateTensorInfo(U);return H}function iV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:a,pad:i,dataFormat:c,dilations:l,dimRoundingMode:p}=o,u=v.convertConv2DDataFormat(c),m=v.computeConv2DInfo(n.shape,s.shape,a,l,i,p,!1,u),f;if(m.filterHeight===1&&m.filterWidth===1&&m.dilationHeight===1&&m.dilationWidth===1&&m.strideHeight===1&&m.strideWidth===1&&(m.padInfo.type==="SAME"||m.padInfo.type==="VALID"))f=Mf({x:n,filter:s,convInfo:m,backend:e});else if(m.strideWidth<=2&&u==="channelsLast"&&F().getBool("WEBGL_EXP_CONV")){let g=new ul(m),h=[[m.padInfo.top,m.padInfo.left],[m.strideHeight,m.strideWidth],[m.dilationHeight,m.dilationWidth],[m.inHeight,m.inWidth]];f=e.runWebGLProgram(g,[n,s],"float32",h)}else if(F().getBool("WEBGL_CONV_IM2COL"))f=Vf({x:n,filter:s,convInfo:m,backend:e});else{let g=new pl(m);f=e.runWebGLProgram(g,[n,s],"float32")}let d=K({inputs:{x:f},backend:e,attrs:{shape:m.outShape}});return e.disposeIntermediateTensorInfo(f),d}var Mv={kernelName:Bs,backendName:"webgl",kernelFunc:iV};var Gf=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let e=t.strideHeight,o=t.strideWidth,n=t.padInfo.top,s=t.padInfo.left,a=t.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${n};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${o} - ${s};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              ${a?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Uf=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let e=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,a=t.dataFormat==="channelsLast",i=e-1-t.padInfo.top,c=o-1-t.padInfo.left,l=a?1:2,p=a?2:3,u=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${u}];

        ivec2 dyCorner = ivec2(coords[${l}], coords[${p}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${o} - 1 - wC;

            for (int d2 = 0; d2 < ${t.outChannels}; d2++) {

              if (${a}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},zf=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let e=t.strideDepth,o=t.strideHeight,n=t.strideWidth,s=t.padInfo.front,a=t.padInfo.top,i=t.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yF = 0; yF < ${t.outDepth}; yF++) {
            int xF = wF + yF * ${e} - ${s};

            if (xF < 0 || xF >= ${t.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${t.outHeight}; yR++) {
              int xR = wR + yR * ${o} - ${a};

              if (xR < 0 || xR >= ${t.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${t.outWidth}; yC++) {
                int xC = wC + yC * ${n} - ${i};

                if (xC < 0 || xC >= ${t.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Wf=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let e=t.filterDepth,o=t.filterHeight,n=t.filterWidth,s=t.strideDepth,a=t.strideHeight,i=t.strideWidth,c=e-1-t.padInfo.front,l=o-1-t.padInfo.top,p=n-1-t.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${c}, ${l}, ${p});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${e}; wF++) {
          float dyF = float(dyFCorner + wF) / ${s}.0;

          if (dyF < 0.0 || dyF >= ${t.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${e} - 1 - wF;

          for (int wR = 0; wR < ${o}; wR++) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${o} - 1 - wR;

            for (int wC = 0; wC < ${n}; wC++) {
              float dyC = float(dyCCorner + wC) / ${i}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${n} - 1 - wC;

              for (int d2 = 0; d2 < ${t.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function cV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,dy:s}=t,{strides:a,pad:i,dataFormat:c,dimRoundingMode:l,filterShape:p}=o,u=v.convertConv2DDataFormat(c),m=v.computeConv2DInfo(n.shape,p,a,1,i,l,!1,u),f=new Gf(m);return e.runWebGLProgram(f,[n,s],"float32")}var Vv={kernelName:Ms,backendName:"webgl",kernelFunc:cV};var Hf=class{constructor(t){this.variableNames=["dy","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"strides",type:"vec2"}],this.outputShape=t.inShape,this.enableShapeUniforms=_t(this.outputShape.length);let e=t.filterHeight,o=t.filterWidth,n=e-1-t.padInfo.top,s=o-1-t.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${n}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            int wCPerm = ${o} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${t.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${t.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${t.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}};function lV(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,filter:s}=t,{inputShape:a,strides:i,pad:c,dataFormat:l,dimRoundingMode:p}=o,u=v.convertConv2DDataFormat(l),m=v.computeConv2DInfo(a,s.shape,i,1,c,p,!1,u);if(F().getBool("WEBGL_PACK_CONV2DTRANSPOSE")&&u==="channelsLast"){let f=[[m.strideHeight,m.strideWidth]],d=new Hf(m);return e.runWebGLProgram(d,[n,s],"float32",f)}else{let f=new Uf(m);return e.runWebGLProgram(f,[n,s],"float32")}}var Gv={kernelName:Vs,backendName:"webgl",kernelFunc:lV};function pV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:a,pad:i,dilations:c}=o,l=v.computeConv3DInfo(n.shape,s.shape,a,c,i),p=new Pf(l);return e.runWebGLProgram(p,[n,s],"float32")}var Uv={kernelName:Gs,backendName:"webgl",kernelFunc:pV};function uV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,dy:s}=t,{strides:a,pad:i,filterShape:c}=o,l=v.computeConv3DInfo(n.shape,c,a,1,i),p=new zf(l);return e.runWebGLProgram(p,[n,s],"float32")}var zv={kernelName:$l,backendName:"webgl",kernelFunc:uV};function mV(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,filter:s}=t,{pad:a,strides:i,inputShape:c}=o,l=v.computeConv3DInfo(c,s.shape,i,1,a),p=new Wf(l);return e.runWebGLProgram(p,[n,s],"float32")}var Wv={kernelName:Us,backendName:"webgl",kernelFunc:mV};var fV=vr+`
  return cos(x);
`,dV=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${nr}
  return result;
`,hV=at({opSnippet:fV,packedOpSnippet:dV}),Hv={kernelName:"Cos",backendName:"webgl",kernelFunc:hV};var gV=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,xV=at({opSnippet:gV}),qv={kernelName:un,backendName:"webgl",kernelFunc:xV};var qf=class{constructor(t,e,o,n,s){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];let[a,i,c,l]=t,[p]=e,[u,m]=o;this.outputShape=[p,u,m,l];let f=n==="bilinear"?1:0,[d,g]=[`${i-1}.0`,`${c-1}.0`],[h,x,b]=u>1?[`${(i-1)/(u-1)}`,"(y2-y1) * height_ratio",`y1*${d} + float(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${d}`],[I,T,E]=m>1?[`${(c-1)/(m-1)}`,"(x2-x1) * width_ratio",`x1*${g} + float(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${g}`];this.userCode=`
      const float height_ratio = float(${h});
      const float width_ratio = float(${I});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${a}) {
          return;
        }

        float height_scale = ${x};
        float width_scale = ${T};

        float in_y = ${b};
        if( in_y < 0.0 || in_y > ${d} ) {
          setOutput(float(${s}));
          return;
        }
        float in_x = ${E};
        if( in_x < 0.0 || in_x > ${g} ) {
          setOutput(float(${s}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}};var yV=r=>{let{inputs:t,backend:e,attrs:o}=r,{image:n,boxes:s,boxInd:a}=t,{cropSize:i,method:c,extrapolationValue:l}=o,p=new qf(n.shape,s.shape,i,c,l);return e.runWebGLProgram(p,[n,s,a],"float32")},Kv={kernelName:qs,backendName:"webgl",kernelFunc:yV};var uc;(function(r){r.Prod="*",r.Sum="+"})(uc||(uc={}));var yu=class{constructor(t,e,o,n){this.op=t,this.outputShape=e,this.variableNames=["x"],this.customUniforms=[{name:"index",type:"float"}];let s=this.outputShape.length,a=this.op===uc.Prod?"1.0":"0.0",i=o?a:`getX(${jv(s,"coords",this.op)})`,c=this.outputShape[this.outputShape.length-1],l="",p="";o?(l=n?`end != ${c-1}`:"end != 0",p=n?"end + 1":"end - 1"):(l=n?`end + pow2 < ${c}`:"end >= pow2",p=n?"end + pow2":"end - pow2"),this.userCode=`
      void main() {
        ${dt(s)} coords = getOutputCoords();
        int end = ${Xv(s,"coords",this.op)};
        float val = ${i};
        int pow2 = int(pow(2.0, index));
        if (${l}) {
          int idx = ${p};
          ${Xv(s,"coords",this.op)} = idx;
          val ${this.op}= getX(${jv(s,"coords",this.op)});
        }
        setOutput(val);
      }
    `}};function jv(r,t,e){if(r===1)return`${t}`;if(r===2)return`${t}.x, ${t}.y`;if(r===3)return`${t}.x, ${t}.y, ${t}.z`;if(r===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw new Error(`Cumulative ${e} for rank ${r} is not yet supported`)}function Xv(r,t,e){if(r===1)return`${t}`;if(r===2)return`${t}.y`;if(r===3)return`${t}.z`;if(r===4)return`${t}.w`;throw new Error(`Cumulative ${e} for rank ${r} is not yet supported`)}function Kf(r,t,e,o,n,s){let a=t.shape.length,i=v.getAxesPermutation([o],a),c=t;i!=null&&(c=Mt({inputs:{x:t},backend:e,attrs:{perm:i}}));let l=v.getInnerMostAxes(1,a)[0];if(l!==a-1)throw new Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${o}`);let p=c.shape[l],u=Jt({inputs:{x:c},backend:e});for(let m=0;m<=Math.ceil(Math.log2(p))-1;m++){let f=new yu(r,c.shape,!1,s),d=[[m]],g=u;u=e.runWebGLProgram(f,[u],u.dtype,d),e.disposeIntermediateTensorInfo(g)}if(n){let m=new yu(r,c.shape,n,s),f=u;u=e.runWebGLProgram(m,[u],u.dtype),e.disposeIntermediateTensorInfo(f)}if(i!=null){let m=v.getUndoAxesPermutation(i),f=Mt({inputs:{x:u},backend:e,attrs:{perm:m}});return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(c),f}return u}function bV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,exclusive:a,reverse:i}=o;return Kf(uc.Prod,n,e,s,a,i)}var Yv={kernelName:Ws,backendName:"webgl",kernelFunc:bV};function wV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,exclusive:a,reverse:i}=o;return Kf(uc.Sum,n,e,s,a,i)}var Zv={kernelName:Hs,backendName:"webgl",kernelFunc:wV};function CV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,weights:s}=t,{size:a,binaryOutput:i}=o;if(n.shape.length===1){let c=e.readSync(n.dataId),l=e.readSync(s.dataId),p=cf(c,l,s.dtype,s.shape,a);return e.makeTensorInfo([a],s.dtype,p)}else if(n.shape.length===2){let c=e.bufferSync(n),l=e.bufferSync(s),p=PI(c,l,a,i);return e.makeTensorInfo(p.shape,s.dtype,p.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}var Qv={kernelName:Ks,backendName:"webgl",kernelFunc:CV};var jf=class{constructor(t,e,o){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=o,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${e};
      int offset_h = imod(h, ${e});
      int in_w = w / ${e};
      int offset_w = imod(w, ${e});
      int offset_d = (offset_h * ${e} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}};function TV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{blockSize:s,dataFormat:a}=o,i=n.shape[0],c=a==="NHWC"?n.shape[1]:n.shape[2],l=a==="NHWC"?n.shape[2]:n.shape[3],p=a==="NHWC"?n.shape[3]:n.shape[1],u=c*s,m=l*s,f=p/(s*s),d=a==="NHWC"?[i,u,m,f]:[i,f,u,m],g=new jf(d,s,a);return e.runWebGLProgram(g,[n],n.dtype)}var Jv={kernelName:js,backendName:"webgl",kernelFunc:TV};var ml=class{constructor(t,e=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=_t(this.outputShape.length);let a=t.filterHeight,i=t.filterWidth,c=t.outChannels/t.inChannels,l="",p="";o&&(n?l=`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?l=`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:l=`
          float activation(float x) {
            ${o}
          }
        `,p="result = activation(result);");let u=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${l}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${c};
        int q = d2 - d1 * ${c};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${a}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${i}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${u}
        ${p}
        setOutput(result);
      }
    `}};var fl=class{constructor(t,e=!1,o=null,n=!1,s=!1){this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"pads",type:"ivec2"},{name:"strides",type:"ivec2"},{name:"dilations",type:"ivec2"},{name:"inDims",type:"ivec2"}],this.outputShape=t.outShape,this.enableShapeUniforms=_t(this.outputShape.length);let a=t.outChannels/t.inChannels,i=t.padInfo.left,c=t.strideWidth,l=t.dilationWidth,p=t.filterHeight,u=t.filterWidth,m=u,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let x=0;x<u;x++)f+=`
          vec4 xTexelC${x*2};
          int xTexelC${x*2}Ready;
          vec4 xTexelC${x*2+1};
          int xTexelC${x*2+1}Ready;
          vec4 xC${x};`;f+=`
    for (int r = 0; r < ${p}; r++) {
      `;for(let x=0;x<u;x++)f+=`
          xTexelC${x*2} = vec4(0.0);
          xTexelC${x*2}Ready = 0;
          xTexelC${x*2+1} = vec4(0.0);
          xTexelC${x*2+1}Ready = 0;
          xC${x} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let x=0;x<(m+1)/2;x++){let b=x*2;if(f+=`
          xC = xCCorner + ${b*l};
          `,c===1){if(b<u&&(i%2===1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }
              `,l===1&&b>0?f+=`
                xC${b} = vec4(xTexelC${b-2}.zw, xTexelC${b}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${b} = vec4(previous.zw, xTexelC${b}.xy);
                  } else {
                    xC${b} = vec4(0.0, 0.0, xTexelC${b}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xC${b} = xTexelC${b};
                `,b+1<u)){let I=i%2===0?y.nearestLargerEven(l):l;l%2===0&&i%2===1||l%2!==0&&i%2!==1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${I};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                    xTexelC${b+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${b+1}.zw = vec2(0.0);
                    }
                    xTexelC${b+1}Ready = 1;
                  }
                  `,l>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${b+1} = vec4(previous.zw, xTexelC${b+1}.xy);
                    } else {
                     xC${b+1} = vec4(0.0, 0.0, xTexelC${b+1}.xy);
                    }
                    `:f+=`
                    xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.xy);
                    `):I===1?f+=`
                    xC${b+1} = xTexelC${b};
                    `:f+=`
                    xCOffset = xC + ${I};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                      xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${b+1}.zw = vec2(0.0);
                      }
                      xTexelC${b+1}Ready = 1;
                    }

                    xC${b+1} = xTexelC${b+1};
                    `}}else b<u&&(i%2===1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.0);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
              `,b+1<u&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${b+1} = vec4(xTexelC${b+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${b}Ready == 0) {
                  xTexelC${b} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${b}.zw = vec2(0.0);
                  }
                  xTexelC${b}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${b+1}Ready == 0) {
                  xTexelC${b+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${b+1}.zw = vec2(0.);
                  }
                  xTexelC${b+1}Ready = 1;
                }

                xC${b} = vec4(
                  xTexelC${b}.xy, xTexelC${b+1}.xy);
              `,b+1<u&&(f+=`
                  xC${b+1} = vec4(xTexelC${b}.zw, xTexelC${b+1}.zw);
                `)));b<u&&(f+=`
            wTexel = getW(r, ${b}, d1, q);
            dotProd += xC${b} * vec4(wTexel.xz, wTexel.xz);
          `,b+1<u&&(f+=`
              wTexel = getW(r, ${b+1}, d1, q);
              dotProd += xC${b+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let d="",g="";o&&(n?d=`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:s?d=`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:d=`vec4 activation(vec4 x) {
          ${o}
        }`,g="result = activation(result);");let h=e?"result += getBiasAtOutCoords();":"";e&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),s&&this.variableNames.push("leakyreluAlpha"),this.userCode=`
      ${d}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${h}
        ${g}
        setOutput(result);
      }
    `}};function IV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:a,pad:i,dilations:c,dimRoundingMode:l}=o,p=c;p==null&&(p=[1,1]),y.assert(v.eitherStridesOrDilationsAreOne(a,p),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${a} and dilations '${p}'`);let u=v.computeConv2DInfo(n.shape,s.shape,a,p,i,l,!0),m;F().getBool("WEBGL_PACK_DEPTHWISECONV")&&u.strideWidth<=2&&u.outChannels/u.inChannels===1?m=new fl(u):m=new ml(u);let f=[[u.padInfo.top,u.padInfo.left],[u.strideHeight,u.strideWidth],[u.dilationHeight,u.dilationWidth],[u.inHeight,u.inWidth]];return e.runWebGLProgram(m,[n,s],"float32",f)}var tN={kernelName:Xs,backendName:"webgl",kernelFunc:IV};var Xf=class{constructor(t){this.variableNames=["x","dy"],this.outputShape=t.filterShape;let e=t.strideHeight,o=t.strideWidth,n=t.padInfo.top,s=t.padInfo.left,a=t.outChannels/t.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${a} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${t.batchSize}; b++) {
          for (int yR = 0; yR < ${t.outHeight}; yR++) {
            int xR = wR + yR * ${e} - ${n};

            if (xR < 0 || xR >= ${t.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${t.outWidth}; yC++) {
              int xC = wC + yC * ${o} - ${s};

              if (xC < 0 || xC >= ${t.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},Yf=class{constructor(t){this.variableNames=["dy","W"],this.outputShape=t.inShape;let e=t.filterHeight,o=t.filterWidth,n=t.strideHeight,s=t.strideWidth,a=e-1-t.padInfo.top,i=o-1-t.padInfo.left,c=t.outChannels/t.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${e}; wR++) {
          float dyR = float(dyRCorner + wR) / ${n}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${e} - 1 - wR;

          for (int wC = 0; wC < ${o}; wC++) {
            float dyC = float(dyCCorner + wC) / ${s}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${o} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${c}; dm++) {
              int d2 = d1 * ${c} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function SV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,dy:s}=t,{strides:a,dilations:i,pad:c,dimRoundingMode:l,filterShape:p}=o,u=v.computeConv2DInfo(n.shape,p,a,i,c,l,!0),m=new Xf(u);return e.runWebGLProgram(m,[n,s],"float32")}var eN={kernelName:Ys,backendName:"webgl",kernelFunc:SV};function vV(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,filter:s}=t,{strides:a,dilations:i,pad:c,dimRoundingMode:l,inputShape:p}=o,u=v.computeConv2DInfo(p,s.shape,a,i,c,l,!0),m=new Yf(u);return e.runWebGLProgram(m,[n,s],"float32")}var rN={kernelName:Zs,backendName:"webgl",kernelFunc:vV};var Zf=class{constructor(t){this.variableNames=["X"],this.outputShape=[t,t],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}};function NV(r){let{inputs:t,backend:e}=r,{x:o}=t,n=[...o.shape,...o.shape],s=y.sizeFromShape(o.shape),a=K({inputs:{x:o},backend:e,attrs:{shape:[s]}}),i=new Zf(s),c=e.runWebGLProgram(i,[a],a.dtype),l=K({inputs:{x:c},backend:e,attrs:{shape:n}});return e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(c),l}var oN={kernelName:Qs,backendName:"webgl",kernelFunc:NV};var Qf=class{constructor(t){this.variableNames=["x","W"],this.outputShape=t.outShape;let{inHeight:e,inWidth:o,padInfo:n,strideHeight:s,strideWidth:a,filterHeight:i,filterWidth:c,dilationHeight:l,dilationWidth:p}=t,{top:u,left:m}=n;this.userCode=`
      const ivec2 strides = ivec2(${s}, ${a});
      const ivec2 pads = ivec2(${u}, ${m});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${i}; h++) {
          int hIn = hBeg + h * ${l};

          if (hIn >= 0 && hIn < ${e}) {
            for (int w = 0; w < ${c}; w++) {
              int wIn = wBeg + w * ${p};

              if (wIn >= 0 && wIn < ${o}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}};function kV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:a,pad:i,dilations:c}=o,l=v.computeDilation2DInfo(n.shape,s.shape,a,i,"NHWC",c),p,u=new Qf(l);p=e.runWebGLProgram(u,[n,s],"float32");let m=K({inputs:{x:p},backend:e,attrs:{shape:l.outShape}});return e.disposeIntermediateTensorInfo(p),m}var nN={kernelName:Js,backendName:"webgl",kernelFunc:kV};function EV(r){let{inputs:t,backend:e,attrs:o}=r,{equation:n}=o,s=t,{allDims:a,summedDims:i,idDims:c}=v.decodeEinsumEquation(n,s.length);v.checkEinsumDimSizes(a.length,c,s);let{path:l,steps:p}=v.getEinsumComputePath(i,c),u=p.length,m=null,f=a.length,d=[];for(let g=0;g<u;++g){for(let h of p[g]){let{permutationIndices:x,expandDims:b}=v.getEinsumPermutation(f,c[h]),I;v.isIdentityPermutation(x)?I=s[h]:(I=Mt({inputs:{x:s[h]},backend:e,attrs:{perm:x}}),d.push(I));let T=I.shape.slice();for(let E=0;E<b.length;++E)T.splice(b[E],0,1);y.arraysEqual(I.shape,T)||(I=K({inputs:{x:I},backend:e,attrs:{shape:T}}),d.push(I)),m===null?m=I:(m=gu({inputs:{a:I,b:m},backend:e}),d.push(m))}g<u-1&&(l[g]>=0&&(m=cc({inputs:{x:m},backend:e,attrs:{axis:l[g]-(a.length-f),keepDims:!1}}),d.push(m)),f--)}for(let g of d)g!==m&&e.disposeIntermediateTensorInfo(g);return m}var sN={kernelName:ta,backendName:"webgl",kernelFunc:EV};var $V="return (x >= 0.0) ? x : (exp(x) - 1.0);",AV=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,RV=at({opSnippet:$V,packedOpSnippet:AV}),aN={kernelName:"Elu",backendName:"webgl",kernelFunc:RV};var DV="return (b >= 0.0) ? a : a * (b + 1.0);",FV=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,_V=r=>{let{inputs:t,backend:e}=r,{dy:o,y:n}=t,s=F().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new or(FV,o.shape,n.shape):new Xe(DV,o.shape,n.shape);return e.runWebGLProgram(s,[o,n],o.dtype)},iN={kernelName:Al,backendName:"webgl",kernelFunc:_V};var OV=`
  return vec4(equal(a, b));
`,PV="return float(a == b);",LV=Ft({opSnippet:PV,packedOpSnippet:OV,dtype:"bool",cpuKernelImpl:GI}),cN={kernelName:fn,backendName:"webgl",kernelFunc:LV};var BV=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${v.ERF_P};
  float a1 = ${v.ERF_A1};
  float a2 = ${v.ERF_A2};
  float a3 = ${v.ERF_A3};
  float a4 = ${v.ERF_A4};
  float a5 = ${v.ERF_A5};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,MV=at({opSnippet:BV}),lN={kernelName:"Erf",backendName:"webgl",kernelFunc:MV};var VV=vr+`
  return exp(x);
`,GV=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Oy=at({opSnippet:VV,packedOpSnippet:GV,cpuKernelImpl:UI,dtype:"float32"}),pN={kernelName:"Exp",backendName:"webgl",kernelFunc:Oy};function Jf(r){let{inputs:t,attrs:e,backend:o}=r,{dim:n}=e,{input:s}=t,a=s.shape.length,i=s.shape.slice(),c=n;return n<0&&(y.assert(-(a+1)<=n,()=>`Axis must be in the interval [${-(a+1)}, ${a}]`),c=a+n+1),i.splice(c,0,1),K({inputs:{x:s},backend:o,attrs:{shape:i}})}var uN={kernelName:na,backendName:"webgl",kernelFunc:Jf};var mN="return exp(x) - 1.0;",UV=at({opSnippet:mN,packedOpSnippet:mN,cpuKernelImpl:zI}),fN={kernelName:dn,backendName:"webgl",kernelFunc:UV};var bu=class{constructor(t,e,o){this.variableNames=["real","imag"];let n=e[1];this.outputShape=e;let s=o?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,a=o?`${n}.0`:"1.0",i;if(t==="real")i="return real * expR - imag * expI;";else if(t==="imag")i="return real * expI + imag * expR;";else throw new Error(`FFT component must be either "real" or "imag", got ${t}.`);this.userCode=`
      const float exponentMultiplier = ${s};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${i}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${n});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${n}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${a};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}};function td(r,t,e){let o=e.texData.get(r.dataId),n=y.sizeFromShape(r.shape),s=r.shape[r.shape.length-1],a=n/s,i=K({inputs:{x:r},backend:e,attrs:{shape:[a,s]}}),c=i.shape,l=new bu("real",c,t),p=new bu("imag",c,t),u=[{dataId:o.complexTensorInfos.real.dataId,dtype:o.complexTensorInfos.real.dtype,shape:c},{dataId:o.complexTensorInfos.imag.dataId,dtype:o.complexTensorInfos.imag.dtype,shape:c}],m=e.runWebGLProgram(l,u,"float32"),f=e.runWebGLProgram(p,u,"float32"),d=Ye({inputs:{real:m,imag:f},backend:e});e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(f);let g=K({inputs:{x:d},backend:e,attrs:{shape:r.shape}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(d),g}function zV(r){let{inputs:t,backend:e}=r,{input:o}=t;return td(o,!1,e)}var dN={kernelName:"FFT",backendName:"webgl",kernelFunc:zV};var ed=class{constructor(t,e){this.outputShape=[],this.customUniforms=[{name:"value",type:"float"}],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}};function Ho(r){let{backend:t,attrs:e}=r,{shape:o,value:n}=e,{dtype:s}=e;if(s=s||y.inferDtype(n),s==="string"){let a=y.getArrayFromDType(s,y.sizeFromShape(o));return a.fill(n),t.makeTensorInfo(o,s,a)}else{let a=new ed(o,n),i=[[n]];return t.runWebGLProgram(a,[],s,i)}}var hN={kernelName:sa,backendName:"webgl",kernelFunc:Ho};var rd=class{constructor(t){this.variableNames=["Image"],this.outputShape=[];let e=t[2];this.outputShape=t,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${e} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${e}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var gN={kernelName:aa,backendName:"webgl",kernelFunc:({inputs:r,backend:t})=>{let{image:e}=r,o=t,n=new rd(e.shape);return o.runWebGLProgram(n,[e],e.dtype)}};var xN="return floor(x);",WV=at({opSnippet:xN,packedOpSnippet:xN,cpuKernelImpl:WI}),yN={kernelName:hn,backendName:"webgl",kernelFunc:WV};var HV=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,qV=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,KV=Ft({opSnippet:HV,packedOpSnippet:qV,dtype:"int32"}),bN={kernelName:gn,backendName:"webgl",kernelFunc:KV};var od=class{constructor(t){this.variableNames=["A"];let e=Ht(),[o,n]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${n}.0, ${o}.0);

        vec4 values = ${e.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}};var nd=class{constructor(t){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;let e=Ht(),[o,n]=t;this.outputShape=t,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${n}.0, ${o}.0);
            vec4 values = ${e.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${e.output} = result;
      }
    `}};var wN={kernelName:$c,backendName:"webgl",kernelFunc:jV},dl,Py=F().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function jV(r){let{inputs:t,backend:e,attrs:o}=r,{pixels:n}=t,{numChannels:s}=o,a=typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement,i=typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement,[c,l]=a?[n.videoWidth,n.videoHeight]:[n.width,n.height],p=[l,c],u=[l,c,s];if(i||a){let g=F().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(dl==null||g!==Py)&&(Py=g,dl=document.createElement("canvas").getContext("2d",{willReadFrequently:Py})),dl.canvas.width=c,dl.canvas.height=l,dl.drawImage(n,0,0,c,l),n=dl.canvas}let m=e.makeTensorInfo(p,"int32");e.texData.get(m.dataId).usage=Ee.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(m.dataId),n);let f=F().getBool("WEBGL_PACK")?new nd(u):new od(u),d=e.runWebGLProgram(f,[m],"int32");return e.disposeData(m.dataId),d}function XV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s,bias:a,preluActivationWeights:i}=t,{strides:c,pad:l,dataFormat:p,dilations:u,dimRoundingMode:m,activation:f,leakyreluAlpha:d}=o,g=v.convertConv2DDataFormat(p),h=v.computeConv2DInfo(n.shape,s.shape,c,u,l,m,!1,g),x,b=[],I=a!=null,T=i!=null,E=f==="leakyrelu",$=()=>{let D=[n,s],_=(O,L)=>{if(L==="NCHW"&&O.shape.length===1&&O.shape[0]!==1){let B=K({inputs:{x:O},backend:e,attrs:{shape:[O.shape[0],1,1]}});return b.push(B),B}return O};if(I&&D.push(_(a,p)),T&&D.push(_(i,p)),E){let O=e.makeTensorInfo([],"float32",y.createScalarValue(d,"float32"));D.push(O),b.push(O)}return D};if(h.filterHeight===1&&h.filterWidth===1&&h.dilationHeight===1&&h.dilationWidth===1&&h.strideHeight===1&&h.strideWidth===1&&(h.padInfo.type==="SAME"||h.padInfo.type==="VALID"))x=Mf({x:n,filter:s,convInfo:h,backend:e,bias:a,activation:f,preluActivationWeights:i,leakyreluAlpha:d});else if(h.strideWidth<=2&&g==="channelsLast"&&F().getBool("WEBGL_EXP_CONV")){let D=f?zo(f,!0):null,_=new ul(h,I,D,T,E),O=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]],L=$();x=e.runWebGLProgram(_,L,"float32",O)}else if(F().getBool("WEBGL_CONV_IM2COL"))x=Vf({x:n,filter:s,convInfo:h,backend:e,bias:a,activation:f,preluActivationWeights:i,leakyreluAlpha:d});else{let D=f?zo(f,!1):null,_=new pl(h,I,D,T,E),O=$();x=e.runWebGLProgram(_,O,"float32")}let A=K({inputs:{x},backend:e,attrs:{shape:h.outShape}});return b.push(x),b.forEach(D=>e.disposeIntermediateTensorInfo(D)),A}var CN={kernelName:jn,backendName:"webgl",kernelFunc:XV};function YV(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s,bias:a,preluActivationWeights:i}=t,{strides:c,pad:l,dilations:p,dimRoundingMode:u,activation:m,leakyreluAlpha:f}=o,d=[],g=p;g==null&&(g=[1,1]),y.assert(v.eitherStridesOrDilationsAreOne(c,g),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${g}'`);let h=v.computeConv2DInfo(n.shape,s.shape,c,g,l,u,!0),x=F().getBool("WEBGL_PACK_DEPTHWISECONV")&&h.strideWidth<=2&&h.outChannels/h.inChannels===1,b=m?zo(m,x):null,I=[n,s],T=a!=null,E=i!=null,$=m==="leakyrelu";if(T&&I.push(a),E&&I.push(i),$){let O=e.makeTensorInfo([],"float32",y.createScalarValue(f,"float32"));I.push(O),d.push(O)}let A;x?A=new fl(h,T,b,E,$):A=new ml(h,T,b,E,$);let D=[[h.padInfo.top,h.padInfo.left],[h.strideHeight,h.strideWidth],[h.dilationHeight,h.dilationWidth],[h.inHeight,h.inWidth]],_=e.runWebGLProgram(A,I,"float32",D);return d.forEach(O=>e.disposeIntermediateTensorInfo(O)),_}var TN={kernelName:Xn,backendName:"webgl",kernelFunc:YV};var sd=class{constructor(t,e,o,n){this.sliceDim=t,this.strides=e,this.paramsShape=n,this.variableNames=["x","indices"],this.outputShape=o;let s=dt(o.length),a=`
    int index;`;for(let i=0;i<this.sliceDim;i++)a+=`
          index = round(getIndices(coords[0], ${i}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[i]};
          flattenIndex += index * ${this.strides[i]};`;this.userCode=`
         void main() {
          ${s} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${a}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}};function ZV(r){let{inputs:t,backend:e}=r,{params:o,indices:n}=t,s=n.shape,a=s[s.length-1],i=y.sizeFromShape(o.shape),[c,l,p,u]=v.prepareAndValidate(o,n),m=K({inputs:{x:n},backend:e,attrs:{shape:[l,a]}}),f=K({inputs:{x:o},backend:e,attrs:{shape:[y.sizeFromShape(o.shape)/p,p]}});if(e.shouldExecuteOnCPU([o,n])||o.dtype==="string"){let x=e.readSync(n.dataId),b=e.bufferSync(o),I=HI(x,b,o.dtype,l,a,p,u,o.shape,i);return e.makeTensorInfo(c,o.dtype,I.values)}let d=new sd(a,u,[l,p],o.shape),g=e.runWebGLProgram(d,[f,m],f.dtype),h=K({inputs:{x:g},backend:e,attrs:{shape:c}});return e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(g),h}var IN={kernelName:la,backendName:"webgl",kernelFunc:ZV};var ad=class{constructor(t,e){this.variableNames=["A","indices"],this.outputShape=e,this.rank=e.length;let o=dt(this.rank),n=QV(t,2);this.userCode=`
      void main() {
        ${o} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${t[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${n}));
      }
    `}};function QV(r,t){let e=["resRC.x","resRC.y","resRC.z","resRC.w"],o=[];for(let n=0;n<r.length;n++)n===2?o.push("index"):o.push(`${e[n]}`);return o.join()}function Ly(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,indices:s}=t,{axis:a,batchDims:i}=o,c=y.parseAxisParam(a,n.shape)[0];if(F().get("DEBUG")){let b=e.readSync(s.dataId),I=n.shape[c];for(let T=0;T<b.length;++T){let E=b[T];y.assert(E<=I-1&&E>=0,()=>`GatherV2: the index value ${E} is not in [0, ${I-1}]`)}}let l=v.segment_util.collectGatherOpShapeInfo(n,s,c,i),p=y.sizeFromShape(s.shape),u=[],m=K({inputs:{x:n},backend:e,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),f=K({inputs:{x:s},backend:e,attrs:{shape:[l.batchSize,p/l.batchSize]}});u.push(m),u.push(f);let d=[l.batchSize,l.outerSize,p/l.batchSize,l.sliceSize];if(e.shouldExecuteOnCPU([n,s])||n.dtype==="string"){let b=e.bufferSync(f),I=e.bufferSync(m),T=qI(I,b,d);return u.forEach(E=>e.disposeIntermediateTensorInfo(E)),e.makeTensorInfo(l.outputShape,T.dtype,T.values)}let g=new ad(m.shape,d),h=e.runWebGLProgram(g,[m,f],m.dtype);u.push(h);let x=K({inputs:{x:h},backend:e,attrs:{shape:l.outputShape}});return u.forEach(b=>e.disposeIntermediateTensorInfo(b)),x}var SN={kernelName:ca,backendName:"webgl",kernelFunc:Ly};var JV="return float(a > b);",tG=`
  return vec4(greaterThan(a, b));
`,eG=Ft({opSnippet:JV,packedOpSnippet:tG,cpuKernelImpl:KI,dtype:"bool"}),vN={kernelName:xn,backendName:"webgl",kernelFunc:eG};var rG="return float(a >= b);",oG=`
  return vec4(greaterThanEqual(a, b));
`,nG=Ft({opSnippet:rG,packedOpSnippet:oG,dtype:"bool",cpuKernelImpl:jI}),NN={kernelName:yn,backendName:"webgl",kernelFunc:nG};function sG(r){let{inputs:t,backend:e}=r,{input:o}=t;return td(o,!0,e)}var kN={kernelName:pa,backendName:"webgl",kernelFunc:sG};var aG="return float(!isnan(x) && !isinf(x));",iG=at({opSnippet:aG,dtype:"bool"}),EN={kernelName:bn,backendName:"webgl",kernelFunc:iG};var cG="return float(isinf(x));",lG=at({opSnippet:cG,dtype:"bool"}),$N={kernelName:wn,backendName:"webgl",kernelFunc:lG};var pG="return float(isnan(x));",uG=at({opSnippet:pG,dtype:"bool"}),AN={kernelName:Cn,backendName:"webgl",kernelFunc:uG};var mG="return float(a < b);",fG=`
  return vec4(lessThan(a, b));
`,dG=Ft({opSnippet:mG,packedOpSnippet:fG,cpuKernelImpl:XI,dtype:"bool"}),RN={kernelName:Tn,backendName:"webgl",kernelFunc:dG};var hG="return float(a <= b);",gG=`
  return vec4(lessThanEqual(a, b));
`,xG=Ft({opSnippet:hG,packedOpSnippet:gG,cpuKernelImpl:YI,dtype:"bool"}),DN={kernelName:In,backendName:"webgl",kernelFunc:xG};function yG(r){let{backend:t,attrs:e}=r,{start:o,stop:n,num:s}=e,a=ZI(o,n,s);return t.makeTensorInfo([a.length],"float32",a)}var FN={kernelName:fa,backendName:"webgl",kernelFunc:yG};var bG=vr+`
  return x < 0.0 ? 0./0. : log(x);
`,wG=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,CG=at({opSnippet:bG,packedOpSnippet:wG,cpuKernelImpl:QI}),_N={kernelName:"Log",backendName:"webgl",kernelFunc:CG};var TG=vr+`
  return log(1.0 + x);
`,IG=at({opSnippet:TG}),ON={kernelName:Sn,backendName:"webgl",kernelFunc:IG};var SG="return float(a >= 1.0 && b >= 1.0);",vG=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,NG=Ft({opSnippet:SG,packedOpSnippet:vG,dtype:"bool"}),PN={kernelName:vn,backendName:"webgl",kernelFunc:NG};var kG="return float(!(x >= 1.0));",EG=at({opSnippet:kG}),LN={kernelName:Nn,backendName:"webgl",kernelFunc:EG};var $G="return float(a >= 1.0 || b >= 1.0);",AG=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,RG=Ft({opSnippet:$G,packedOpSnippet:AG,dtype:"bool"}),BN={kernelName:kn,backendName:"webgl",kernelFunc:RG};var id=class{constructor(t,e,o,n,s){this.variableNames=["x"],this.outputShape=[];let a=e,i=t[3]-1;this.outputShape=t;let c,l=`float(${o}) + float(${n}) * sum`;s===.5?c=`inversesqrt(${l})`:s===1?c=`1.0/(${l})`:c=`exp(log(${l}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${a}; j <= ${a}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${i}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${c};
        setOutput(val);
      }
    `}};var cd=class{constructor(t,e,o,n,s){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let a=e,i=t[3]-1;this.outputShape=t;let c,l=`float(${o}) + float(${n}) * sum`;s===.5?c=`inversesqrt(${l})`:s===1?c=`1.0/(${l})`:c=`exp(log(${l}) * float(-${s}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${a};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${a}; j <= ${a}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${i}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${c};
        setOutput(result);
      }
    `}};var DG=r=>{let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{depthRadius:s,bias:a,alpha:i,beta:c}=o,l=F().getBool("WEBGL_PACK_NORMALIZATION")?new cd(n.shape,s,a,i,c):new id(n.shape,s,a,i,c);return e.runWebGLProgram(l,[n],n.dtype)},MN={kernelName:"LRN",backendName:"webgl",kernelFunc:DG};var ld=class{constructor(t,e,o,n,s){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=t,this.depth=t[3],this.depthRadius=e,this.bias=o,this.alpha=n,this.beta=s,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${e})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${e} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${n}) * norm + float(${o});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${n})
                * float(${s})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${s});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}};var FG=r=>{let{inputs:t,backend:e,attrs:o}=r,{x:n,y:s,dy:a}=t,{depthRadius:i,bias:c,alpha:l,beta:p}=o,u=new ld(n.shape,i,c,l,p);return e.runWebGLProgram(u,[n,s,a],n.dtype)},VN={kernelName:Rl,backendName:"webgl",kernelFunc:FG};function GN(r,t,e,o){let n=y.sizeFromShape(t),a=y.sizeFromShape(r.shape)/n,i=K({inputs:{x:r},attrs:{shape:[a,n]},backend:o}),c=sr(i,r.dtype,"max",o),l=K({inputs:{x:c},attrs:{shape:e},backend:o});return o.disposeIntermediateTensorInfo(i),o.disposeIntermediateTensorInfo(c),l}function By(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{reductionIndices:s,keepDims:a}=o,i=n.shape.length,c=y.parseAxisParam(s,n.shape),l=c,p=v.getAxesPermutation(l,i),u=p!=null,m=e.shouldExecuteOnCPU([n]),f=n;if(u){if(m){let I=e.texData.get(f.dataId).values,T=new Array(i);for(let A=0;A<T.length;A++)T[A]=n.shape[p[A]];let E=ic(I,n.shape,n.dtype,p,T);f=e.makeTensorInfo(T,n.dtype);let $=e.texData.get(f.dataId);$.values=E}else f=ds(n,p,e);l=v.getInnerMostAxes(l.length,i)}v.assertAxesAreInnerMostDims("max",l,i);let[d,g]=v.computeOutAndReduceShapes(f.shape,l),h=d;a&&(h=v.expandShapeToKeepDim(d,c));let x;if(m){let I=e.texData.get(f.dataId).values,T=JI(I,y.sizeFromShape(g),h,n.dtype);x=e.makeTensorInfo(h,n.dtype);let E=e.texData.get(x.dataId);E.values=T}else x=GN(f,g,h,e);return u&&e.disposeIntermediateTensorInfo(f),x}var UN={kernelName:"Max",backendName:"webgl",kernelFunc:By};var _G=il+`
  return max(a, b);
`,OG=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+nr+`
  return result;
`,PG=Ft({opSnippet:_G,packedOpSnippet:OG,cpuKernelImpl:tS}),zN={kernelName:En,backendName:"webgl",kernelFunc:PG};function LG(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t;ho(n,"maxPool");let{filterSize:s,strides:a,pad:i,dimRoundingMode:c}=o,l=1;y.assert(v.eitherStridesOrDilationsAreOne(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let p=v.computePool2DInfo(n.shape,s,a,l,i,c);if(p.filterWidth===1&&p.filterHeight===1&&y.arraysEqual(p.inShape,p.outShape))return Jt({inputs:{x:n},backend:e});let u=new Wr(p,"max",!1);return e.runWebGLProgram(u,[n],n.dtype)}var WN={kernelName:ha,backendName:"webgl",kernelFunc:LG};function BG(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{filterSize:s,strides:a,pad:i,dataFormat:c,dimRoundingMode:l}=o,p=[1,1,1],u=v.computePool3DInfo(n.shape,s,a,p,i,l,c),m=new hs(u,"max",!1);return e.runWebGLProgram(m,[n],n.dtype)}var HN={kernelName:ga,backendName:"webgl",kernelFunc:BG};var pd=class{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;let e=t.strideHeight,o=t.strideWidth,n=t.dilationHeight,s=t.effectiveFilterHeight,a=t.effectiveFilterWidth,i=s-1-t.padInfo.top,c=a-1-t.padInfo.left,l=s*a-1;this.userCode=`
      const ivec2 pads = ivec2(${i}, ${c});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
          wR += ${n}) {
          float dyR = float(dyRCorner + wR) / ${e}.0;

          if (dyR < 0.0 || dyR >= ${t.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${o}.0;

            if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${l} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${a} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},ud=class{constructor(t){this.variableNames=["dy","maxPos"],this.outputShape=t.inShape;let e=t.strideDepth,o=t.strideHeight,n=t.strideWidth,s=t.dilationDepth,a=t.dilationHeight,i=t.dilationWidth,c=t.effectiveFilterDepth,l=t.effectiveFilterHeight,p=t.effectiveFilterWidth,u=c-1-t.padInfo.front,m=l-1-t.padInfo.top,f=p-1-t.padInfo.left,d=c*l*p-1;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${m}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${c};
           wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${e}.0;

          if (dyD < 0.0 || dyD >= ${t.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${l};
              wR += ${a}) {
            float dyR = float(dyRCorner + wR) / ${o}.0;

            if (dyR < 0.0 || dyR >= ${t.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${p};
                wC += ${i}) {
              float dyC = float(dyCCorner + wC) / ${n}.0;

              if (dyC < 0.0 || dyC >= ${t.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${d} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${l} * ${p} +
                  wR * ${p} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}};function MG(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s}=t,a=s,{filterSize:i,strides:c,pad:l,dimRoundingMode:p}=o,u=[1,1,1],m=v.computePool3DInfo(a.shape,i,c,u,l,p),f=new hs(m,"max",!0),d=e.runWebGLProgram(f,[a],a.dtype),g=new ud(m),h=e.runWebGLProgram(g,[n,d],a.dtype);return e.disposeIntermediateTensorInfo(d),h}var qN={kernelName:Fl,backendName:"webgl",kernelFunc:MG};function VG(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s,output:a}=t,i=s;ho([s,a],"maxPoolGrad");let{filterSize:c,strides:l,pad:p,dimRoundingMode:u}=o,m=v.computePool2DInfo(i.shape,c,l,1,p,u),f=!0,d=new Wr(m,"max",f),g=e.runWebGLProgram(d,[i],i.dtype),h=new pd(m),x=e.runWebGLProgram(h,[n,g],i.dtype);return e.disposeIntermediateTensorInfo(g),x}var KN={kernelName:Dl,backendName:"webgl",kernelFunc:VG};function jN(r,t,e,o){let n=new Wr(e,"max",!1),s=o.runWebGLProgram(n,[r],"float32");n=new Wr(e,"max",!0,!0,t);let a=o.runWebGLProgram(n,[r],"float32");return[s,a]}var XN={kernelName:xa,backendName:"webgl",kernelFunc:({inputs:r,attrs:t,backend:e})=>{let{x:o}=r,{filterSize:n,strides:s,pad:a,includeBatchInIndex:i}=t,c=e;y.assert(o.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.shape.length}.`);let l=[1,1];y.assert(v.eitherStridesOrDilationsAreOne(s,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${s} and dilations '${l}'`);let p=v.computePool2DInfo(o.shape,n,s,l,a),[u,m]=jN(o,i,p,c);return[u,m]}};function YN(r,t,e,o){let n=y.sizeFromShape(t),a=y.sizeFromShape(r.shape)/n,i=K({inputs:{x:r},attrs:{shape:[a,n]},backend:o}),c=sr(i,"float32","mean",o),l=K({inputs:{x:c},attrs:{shape:e},backend:o});return o.disposeIntermediateTensorInfo(i),o.disposeIntermediateTensorInfo(c),l}var ZN={kernelName:ya,backendName:"webgl",kernelFunc:({inputs:r,attrs:t,backend:e})=>{let{x:o}=r,{keepDims:n,axis:s}=t,a=e,i=o.shape.length,c=y.parseAxisParam(s,o.shape),l=c,p=v.getAxesPermutation(l,i),u=p!=null,m=a.shouldExecuteOnCPU([o]),f=[],d=o;if(u){if(m){let T=a.texData.get(d.dataId).values,E=new Array(i);for(let D=0;D<E.length;D++)E[D]=o.shape[p[D]];let $=ic(T,o.shape,o.dtype,p,E);d=a.makeTensorInfo(E,o.dtype);let A=a.texData.get(d.dataId);A.values=$}else d=ds(o,p,a);f.push(d),l=v.getInnerMostAxes(l.length,i)}v.assertAxesAreInnerMostDims("sum",l,i);let[g,h]=v.computeOutAndReduceShapes(d.shape,l),x=g;n&&(x=v.expandShapeToKeepDim(g,c));let b=YN(d,h,x,a);for(let I of f)a.disposeIntermediateTensorInfo(I);return b}};function GG(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o,i=n.shape.length,c=y.parseAxisParam(s,n.shape),l=c,p=v.getAxesPermutation(l,i),u=n;p!=null&&(u=Mt({inputs:{x:n},backend:e,attrs:{perm:p}}),l=v.getInnerMostAxes(l.length,n.shape.length)),v.assertAxesAreInnerMostDims("min",l,i);let[m,f]=v.computeOutAndReduceShapes(u.shape,l),d=y.sizeFromShape(f),g=K({inputs:{x:u},backend:e,attrs:{shape:[-1,d]}}),h=sr(g,g.dtype,"min",e),x;if(a){let b=v.expandShapeToKeepDim(m,c);x=K({inputs:{x:h},backend:e,attrs:{shape:b}})}else x=K({inputs:{x:h},backend:e,attrs:{shape:m}});return e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(h),p!=null&&e.disposeIntermediateTensorInfo(u),x}var QN={kernelName:"Min",backendName:"webgl",kernelFunc:GG};var UG=il+`
  return min(a, b);
`,zG=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+nr+`
  return result;
`,WG=Ft({opSnippet:UG,packedOpSnippet:zG,cpuKernelImpl:eS}),JN={kernelName:$n,backendName:"webgl",kernelFunc:WG};var md=class{constructor(t,e,o){this.variableNames=["x"],this.outputShape=e.map((p,u)=>p[0]+t[u]+p[1]);let n=t.length,s=dt(n),a=e.map(p=>p[0]).join(","),i=e.map((p,u)=>p[0]+t[u]).join(","),c=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n),l=o==="reflect"?0:1;if(n===1){this.userCode=`
        int start = ${a};
        int end = ${i};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${l};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${l};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${a});
      ${s} end = ${s}(${i});

      void main() {
        ${s} outC = getOutputCoords();
        for (int i = 0; i < ${n}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${l};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${l};
          }
        }
        ${s} coords = outC - start;
        setOutput(getX(${c}));
      }
    `}};var fd=class{constructor(t,e,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e.map((d,g)=>d[0]+t[g]+d[1]);let n=t.length,s=dt(n),a=e.map(d=>d[0]).join(","),i=e.map((d,g)=>d[0]+t[g]).join(","),c=Qt("rc",n),l=Qt("source",n),p=`${c[n-1]} < ${this.outputShape[n-1]}`,u=n===1?"source":`vec2(${l.slice(-2).join()})`,m=o==="reflect"?0:1,f="";if(n===1){let d=`
        ${s} source = rc;
        if (source < start) {
          source = start * 2 - source - ${m};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${m};
        }
        source -= start;
      `;f=`
        ${s} rc = outputLoc;
        ${d}
        result[0] = getChannel(getX(${l.join()}), ${u});
        ${c[n-1]} += 1;
        if(${p}) {
          ${d}
          result[1] = getChannel(getX(${l.join()}), ${u});
        }
      `}else{let d=`
        ${s} source = rc;
        ${s} lt = ${s}(lessThan(source, start));
        ${s} gte = ${s}(greaterThanEqual(source, end));
        ${s} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${m}) +
                gte * ((end - 1) * 2 - source + ${m});
        source -= start;
      `;f=`
        ${s} rc = outputLoc;
        ${d}
        result[0] = getChannel(getX(${l.join()}), ${u});
        ${c[n-1]} += 1;
        if(${p}) {
          ${d}
          result[1] = getChannel(getX(${l.join()}), ${u});
        }
        rc = outputLoc;
        ${c[n-2]} += 1;
        if(${c[n-2]} < ${this.outputShape[n-2]}) {
          ${d}
          result[2] = getChannel(getX(${l.join()}), ${u});
          ${c[n-1]} += 1;
          if(${p}) {
            ${d}
            result[3] = getChannel(getX(${l.join()}), ${u});
          }
        }
      `}this.userCode=`
      const ${s} start = ${s}(${a});
      const ${s} end = ${s}(${i});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}};var HG=({inputs:r,backend:t,attrs:e})=>{let{x:o}=r,{paddings:n,mode:s}=e,a=F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new fd(o.shape,n,s):new md(o.shape,n,s);return t.runWebGLProgram(a,[o],o.dtype)},t1={kernelName:ba,backendName:"webgl",kernelFunc:HG};var qG=`if (b == 0.0) return NAN;
  return mod(a, b);`,KG=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+nr+`
  return result;
`,jG=Ft({opSnippet:qG,packedOpSnippet:KG}),e1={kernelName:"Mod",backendName:"webgl",kernelFunc:jG};var dd=class{constructor(t,e,o){this.variableNames=["probs"],this.customUniforms=[{name:"seed",type:"float"}],this.outputShape=[t,o],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${e-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${e-1}));
      }
    `}};var XG=`
if (a == b) {
  return 1.0;
};
return a / b;`,YG=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,My=Ft({opSnippet:XG,packedOpSnippet:YG,checkOutOfBounds:!0}),r1={kernelName:mn,backendName:"webgl",kernelFunc:My};var o1="return a - b;",Vy=Ft({opSnippet:o1,packedOpSnippet:o1,supportsComplex:!0,cpuKernelImpl:TS}),n1={kernelName:"Sub",backendName:"webgl",kernelFunc:Vy};function Gy(r){let{inputs:t,backend:e,attrs:o}=r,{logits:n}=t,{dim:s}=o,a=y.parseAxisParam([s],n.shape),i=By({inputs:{x:n},backend:e,attrs:{reductionIndices:a,keepDims:!1}}),c=v.expandShapeToKeepDim(i.shape,a),l=K({inputs:{x:i},backend:e,attrs:{shape:c}}),p=Vy({inputs:{a:n,b:l},backend:e}),u=Oy({inputs:{x:p},backend:e}),m=cc({inputs:{x:u},backend:e,attrs:{axis:a,keepDims:!1}}),f=K({inputs:{x:m},backend:e,attrs:{shape:c}}),d=My({inputs:{a:u,b:f},backend:e});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(f),d}var s1={kernelName:Xa,backendName:"webgl",kernelFunc:Gy};function ZG(r){let{inputs:t,backend:e,attrs:o}=r,{logits:n}=t,{numSamples:s,seed:a,normalized:i}=o,c=i?n:Gy({inputs:{logits:n},backend:e,attrs:{dim:n.shape.length-1}}),l=c.shape[0],p=c.shape[1],u=new dd(l,p,s),m=[[a]],f=e.runWebGLProgram(u,[c],"int32",m);return i||e.disposeIntermediateTensorInfo(c),f}var a1={kernelName:Ca,backendName:"webgl",kernelFunc:ZG};var QG=le+`
  return -x;
`,JG=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`;function tU(r){let{inputs:t,backend:e}=r,{x:o}=t;if(e.shouldExecuteOnCPU([o])){let s=e.texData.get(o.dataId),[a,i]=oS(s.values,o.shape,o.dtype);return e.makeTensorInfo(i,o.dtype,a)}let n;return F().getBool("WEBGL_PACK_UNARY_OPERATIONS")?n=new je(o.shape,JG):n=new Ce(o.shape,QG),e.runWebGLProgram(n,[o],o.dtype)}var i1={kernelName:"Neg",backendName:"webgl",kernelFunc:tU};var eU=be.nonMaxSuppressionV3Impl;function rU(r){v.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:e,attrs:o}=r,{boxes:n,scores:s}=t,{maxOutputSize:a,iouThreshold:i,scoreThreshold:c}=o,l=e.readSync(n.dataId),p=e.readSync(s.dataId),{selectedIndices:u}=eU(l,p,a,i,c);return e.makeTensorInfo([u.length],"int32",new Int32Array(u))}var c1={kernelName:Ta,backendName:"webgl",kernelFunc:rU};var oU=be.nonMaxSuppressionV4Impl;function nU(r){v.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:e,attrs:o}=r,{boxes:n,scores:s}=t,{maxOutputSize:a,iouThreshold:i,scoreThreshold:c,padToMaxOutputSize:l}=o,p=e.readSync(n.dataId),u=e.readSync(s.dataId),{selectedIndices:m,validOutputs:f}=oU(p,u,a,i,c,l);return[e.makeTensorInfo([m.length],"int32",new Int32Array(m)),e.makeTensorInfo([],"int32",new Int32Array([f]))]}var l1={kernelName:Ia,backendName:"webgl",kernelFunc:nU};var sU=be.nonMaxSuppressionV5Impl;function aU(r){v.warn("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");let{inputs:t,backend:e,attrs:o}=r,{boxes:n,scores:s}=t,{maxOutputSize:a,iouThreshold:i,scoreThreshold:c,softNmsSigma:l}=o,p=e.readSync(n.dataId),u=e.readSync(s.dataId),m=a,f=i,d=c,g=l,{selectedIndices:h,selectedScores:x}=sU(p,u,m,f,d,g);return[e.makeTensorInfo([h.length],"int32",new Int32Array(h)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}var p1={kernelName:Sa,backendName:"webgl",kernelFunc:aU};var hd=class{constructor(t,e,o,n){this.variableNames=["indices"],this.outputShape=[t,e],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${n}), float(${o}),
                      float(index == coords.y)));
      }
    `}};var iU=r=>{let{inputs:t,backend:e,attrs:o}=r,{indices:n}=t,{dtype:s,depth:a,onValue:i,offValue:c}=o,l=y.sizeFromShape(n.shape),p=new hd(l,a,i,c),u=K({inputs:{x:n},backend:e,attrs:{shape:[l]}}),m=e.runWebGLProgram(p,[u],s);e.disposeIntermediateTensorInfo(u);let f=[...n.shape,a],d=K({inputs:{x:m},backend:e,attrs:{shape:f}});return e.disposeIntermediateTensorInfo(m),d},u1={kernelName:Na,backendName:"webgl",kernelFunc:iU};function wu(r){let{inputs:t,backend:e}=r,{x:o}=t;if(o.dtype==="complex64"){let n=Wo({inputs:{input:o},backend:e}),s=wu({inputs:{x:n},backend:e}),a=pc({inputs:{input:o},backend:e}),i=wu({inputs:{x:a},backend:e}),c=Ye({inputs:{real:s,imag:i},backend:e});return e.disposeIntermediateTensorInfo(n),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(i),c}else return Ho({attrs:{shape:o.shape,dtype:o.dtype,value:o.dtype==="string"?"":0},backend:e})}var m1={kernelName:mi,backendName:"webgl",kernelFunc:wu};function f1(r){let{inputs:t,backend:e}=r,{x:o}=t;if(o.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(o.dtype==="complex64"){let n=Wo({inputs:{input:o},backend:e}),s=f1({inputs:{x:n},backend:e}),a=pc({inputs:{input:o},backend:e}),i=wu({inputs:{x:a},backend:e}),c=Ye({inputs:{real:s,imag:i},backend:e});return e.disposeIntermediateTensorInfo(n),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(i),c}else return Ho({attrs:{shape:o.shape,dtype:o.dtype,value:1},backend:e})}var d1={kernelName:va,backendName:"webgl",kernelFunc:f1};function cU(r){let{inputs:t,backend:e,attrs:o}=r,{axis:n}=o;if(t.length===1)return Jf({inputs:{input:t[0]},backend:e,attrs:{dim:n}});let s=t[0].shape,a=t[0].dtype;t.forEach(p=>{y.assertShapesMatch(s,p.shape,"All tensors passed to stack must have matching shapes"),y.assert(a===p.dtype,()=>"All tensors passed to stack must have matching dtypes")});let i=[],c=t.map(p=>{let u=Jf({inputs:{input:p},backend:e,attrs:{dim:n}});return i.push(u),u}),l=_y({inputs:c,backend:e,attrs:{axis:n}});return i.forEach(p=>e.disposeIntermediateTensorInfo(p)),l}var h1={kernelName:ka,backendName:"webgl",kernelFunc:cU};var gd=class{constructor(t,e,o){this.variableNames=["x"],this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((l,p)=>l[0]+t[p]+l[1]);let n=t.length,s=dt(n),a=e.map(l=>l[0]).join(","),i=e.map((l,p)=>l[0]+t[p]).join(","),c=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);if(n===1){this.userCode=`
        int start = ${a};
        int end = ${i};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${s} start = ${s}(${a});
      ${s} end = ${s}(${i});

      void main() {
        ${s} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${s} coords = outC - start;
          setOutput(getX(${c}));
        }
      }
    `}};var xd=class{constructor(t,e,o){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:"value",type:"float"}],this.outputShape=e.map((g,h)=>g[0]+t[h]+g[1]);let n=t.length,s=dt(n),a=e.map(g=>g[0]).join(","),i=e.map((g,h)=>g[0]+t[h]).join(","),c=Qt("rc",n),l=Qt("source",n),p=`${c[n-1]} < ${this.outputShape[n-1]}`,u=n===1?"source":`vec2(${l.slice(-2).join()})`,m=[`${s} rc = outputLoc;`,`${c[n-1]} += 1;
       if(${p}) {
      `,n===1?"":`}
       rc = outputLoc;
       ${c[n-2]} += 1;
       if(${c[n-2]} < ${this.outputShape[n-2]}) {`,n===1?"":`  ${c[n-1]} += 1;
         if(${p}) {`],f=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="";for(let g=0,h=n===1?2:4;g<h;g++)d+=`
        ${m[g]}
        if (${f}) {
          result[${g}] = float(value);
        } else {
          ${s} source = rc - start;
          result[${g}] = getChannel(getX(${l.join()}), ${u});
        }
      `;d+=n===1?"} ":"}}",this.userCode=`
      const ${s} start = ${s}(${a});
      const ${s} end = ${s}(${i});

      void main() {
        ${s} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${d}
        setOutput(result);
      }
    `}};var Uy=r=>{let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{paddings:s,constantValue:a}=o;if(y.sizeFromShape(n.shape)===0){let l=s.map((p,u)=>p[0]+n.shape[u]+p[1]);return Ho({backend:e,attrs:{shape:l,value:a,dtype:n.dtype}})}let i=F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new xd(n.shape,s,a):new gd(n.shape,s,a),c=[[a]];return e.runWebGLProgram(i,[n],n.dtype,c)},g1={kernelName:Ea,backendName:"webgl",kernelFunc:Uy};var lU=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,pU=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+nr+`
  return result;
`,uU=Ft({opSnippet:lU,packedOpSnippet:pU}),x1={kernelName:"Pow",backendName:"webgl",kernelFunc:uU};function mU(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o,i=n.shape.length,c=[],l=y.parseAxisParam(s,n.shape),p=l,u=v.getAxesPermutation(p,i),m=n;u!=null&&(m=Mt({inputs:{x:n},backend:e,attrs:{perm:u}}),p=v.getInnerMostAxes(p.length,i),c.push(m)),v.assertAxesAreInnerMostDims("prod",p,i);let f;if(e.shouldExecuteOnCPU([m])){let d=e.texData.get(m.dataId).values,{outVals:g,outShape:h,outDtype:x}=sS(m.shape,m.dtype,d,p);f=e.makeTensorInfo(h,x,g)}else{let[d,g]=v.computeOutAndReduceShapes(m.shape,p),h=y.sizeFromShape(g),x=K({inputs:{x:m},backend:e,attrs:{shape:[-1,h]}}),b=Qn(n.dtype),I=sr(x,b,"prod",e);f=K({inputs:{x:I},backend:e,attrs:{shape:d}}),c.push(x),c.push(I)}if(a){c.push(f);let d=v.expandShapeToKeepDim(f.shape,l);f=K({inputs:{x:f},backend:e,attrs:{shape:d}})}return c.forEach(d=>e.disposeIntermediateTensorInfo(d)),f}var y1={kernelName:Ra,backendName:"webgl",kernelFunc:mU};function fU(r){let{inputs:t,backend:e,attrs:o}=r,{paramsNestedSplits:n,paramsDenseValues:s,indices:a}=t,{outputRaggedRank:i}=o,c=n.map(x=>e.readSync(x.dataId)),l=n.map(x=>x.shape),p=e.readSync(s.dataId),u=e.readSync(a.dataId),[m,f,d]=aS(c,l,p,s.shape,s.dtype,u,a.shape,i),g=m.map(x=>e.makeTensorInfo([x.length],"int32",x)),h=e.makeTensorInfo(d,s.dtype,f);return g.concat([h])}var b1={kernelName:Da,backendName:"webgl",kernelFunc:fU};function dU(r){let{inputs:t,backend:e}=r,{starts:o,limits:n,deltas:s}=t,a=e.readSync(o.dataId),i=e.readSync(n.dataId),c=e.readSync(s.dataId),[l,p]=iS(a,o.shape,o.dtype,i,n.shape,c,s.shape),u=e.makeTensorInfo([l.length],"int32",l),m=e.makeTensorInfo([p.length],o.dtype,p);return[u,m]}var w1={kernelName:Fa,backendName:"webgl",kernelFunc:dU};function hU(r){let{inputs:t,backend:e,attrs:o}=r,{shape:n,values:s,defaultValue:a,rowPartitionTensors:i}=t,{rowPartitionTypes:c}=o,l=e.readSync(n.dataId),p=e.readSync(s.dataId),u=e.readSync(a.dataId),m=i.map(h=>e.readSync(h.dataId)),f=i.map(h=>h.shape),[d,g]=cS(l,n.shape,p,s.shape,s.dtype,u,a.shape,m,f,c);return e.makeTensorInfo(d,s.dtype,g)}var C1={kernelName:_a,backendName:"webgl",kernelFunc:hU};var zy=r=>{let{backend:t,attrs:e}=r,{start:o,stop:n,step:s,dtype:a}=e,i=lS(o,n,s,a);return t.makeTensorInfo([i.length],a,i)},T1={kernelName:Oa,backendName:"webgl",kernelFunc:zy};var gU="return 1.0 / x;",xU=at({opSnippet:gU}),I1={kernelName:Dn,backendName:"webgl",kernelFunc:xU};var yU=le+`
  return (x < 0.0) ? 0.0 : x;
`,bU=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,wU=at({opSnippet:yU,packedOpSnippet:bU}),S1={kernelName:Fn,backendName:"webgl",kernelFunc:wU};var CU=le+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,TU=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,IU=at({opSnippet:CU,packedOpSnippet:TU}),v1={kernelName:_n,backendName:"webgl",kernelFunc:IU};var yd=class{constructor(t,e,o,n,s){this.variableNames=["A"],this.outputShape=[];let[a,i,c,l]=t;this.outputShape=[a,e,o,l];let p=[n&&e>1?i-1:i,n&&o>1?c-1:c],u=[n&&e>1?e-1:e,n&&o>1?o-1:o],m;s?m="(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)":m="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${p[0]/u[0]},
          ${p[1]/u[1]});
      const vec2 inputShapeRC = vec2(${i}.0, ${c}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${m};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}};var bd=class{constructor(t,e,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,i,c,l]=t;this.outputShape=[a,e,o,l];let p=[n&&e>1?i-1:i,n&&o>1?c-1:c],u=[n&&e>1?e-1:e,n&&o>1?o-1:o],m;s?m="(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)":m="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${p[0]/u[0]},
          ${p[1]/u[1]},
          ${p[1]/u[1]});
      const vec3 inputShapeRC = vec3(${i}.0, ${c}.0,
                                     ${c}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${m};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${o-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}};function SU(r){let{inputs:t,backend:e,attrs:o}=r,{images:n}=t,{alignCorners:s,halfPixelCenters:a,size:i}=o,[c,l]=i,p=F().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new bd(n.shape,c,l,s,a):new yd(n.shape,c,l,s,a);return e.runWebGLProgram(p,[n],"float32")}var N1={kernelName:Ma,backendName:"webgl",kernelFunc:SU};var wd=class{constructor(t,e,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;let[,n,s]=e,[,a,i]=t,c=[o&&a>1?n-1:n,o&&i>1?s-1:s],l=[o&&a>1?a-1:a,o&&i>1?i-1:i],p=c[0]/l[0],u=c[1]/l[1],m=1/p,f=1/u,d=Math.ceil(m)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${p});
        const float widthScale = float(${u});

        const float invHeightScale = float(${m});
        const float invWidthScale = float(${f});

        const int winHeight = int(${d});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${i}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${n-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${s-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function vU(r){let{inputs:t,backend:e,attrs:o}=r,{images:n,dy:s}=t,{alignCorners:a}=o,i=new wd(s.shape,n.shape,a);return e.runWebGLProgram(i,[s],s.dtype)}var k1={kernelName:Ol,backendName:"webgl",kernelFunc:vU};var Cd=class{constructor(t,e,o,n,s){this.variableNames=["A"],this.outputShape=[];let[a,i,c,l]=t;this.outputShape=[a,e,o,l];let p=[n&&e>1?i-1:i,n&&o>1?c-1:c],u=[n&&e>1?e-1:e,n&&o>1?o-1:o],m=n?"0.5":"0.0",f;s?f="max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))":f="vec2(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${p[0]/u[0]},
          ${p[1]/u[1]});
      const vec2 inputShapeRC = vec2(${i}.0, ${c}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${m})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}};var Td=class{constructor(t,e,o,n,s){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,i,c,l]=t;this.outputShape=[a,e,o,l];let p=[n&&e>1?i-1:i,n&&o>1?c-1:c],u=[n&&e>1?e-1:e,n&&o>1?o-1:o],m=n?"0.5":"0.0",f;s?f="max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))":f="vec3(yRC) * effectiveInputOverOutputRatioRC",this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${p[0]/u[0]},
          ${p[1]/u[1]},
          ${p[1]/u[1]});
      const vec3 inputShapeRC = vec3(${i}.0, ${c}.0,
                                     ${c}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${m})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${l-1};
        bool hasNextRow = coords.z < ${o-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}};function NU(r){let{inputs:t,backend:e,attrs:o}=r,{images:n}=t,{alignCorners:s,halfPixelCenters:a,size:i}=o,[c,l]=i,p=F().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Td(n.shape,c,l,s,a):new Cd(n.shape,c,l,s,a);return e.runWebGLProgram(p,[n],n.dtype)}var E1={kernelName:Ba,backendName:"webgl",kernelFunc:NU};var Id=class{constructor(t,e,o){this.variableNames=["dy"],this.outputShape=[],this.outputShape=e;let[,n,s]=e,[,a,i]=t,c=[o&&a>1?n-1:n,o&&i>1?s-1:s],l=[o&&a>1?a-1:a,o&&i>1?i-1:i],p=c[0]/l[0],u=c[1]/l[1],m=1/p,f=1/u,d=Math.ceil(m)*2+2,g=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${p});
        const float widthScale = float(${u});

        const float invHeightScale = float(${m});
        const float invWidthScale = float(${f});

        const int winHeight = int(${d});
        const int winWidth = int(${g});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${i}) {
              continue;
            }

            float sourceFracRow =
              float(${c[0]}) *
                (float(dyR) / float(${l[0]}));

            float sourceFracCol =
                float(${c[1]}) *
                  (float(dyC) / float(${l[1]}));

            int sourceNearestRow = int(min(
                float(int(${n}) - 1),
                ${o} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${s}) - 1),
                ${o} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}};function kU(r){let{inputs:t,backend:e,attrs:o}=r,{images:n,dy:s}=t,{alignCorners:a}=o,i=new Id(s.shape,n.shape,a);return e.runWebGLProgram(i,[s],s.dtype)}var $1={kernelName:_l,backendName:"webgl",kernelFunc:kU};var Sd=class{constructor(t,e){this.variableNames=["x"];let o=t.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);if(this.outputShape=t,o===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${t[0]} - coord - 1));
        }
      `;return}let n=i=>e.indexOf(i)!==-1&&t[i]!==1?`${t[i]} - coords[${i}] - 1`:`coords[${i}]`,s=t.map((i,c)=>n(c)).join(","),a=dt(o);this.userCode=`
      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${s}));
      }
    `}};var vd=class{constructor(t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;let o=t.length;if(o>4)throw new Error(`WebGL backend: Reverse of rank-${o} tensor is not yet supported`);this.outputShape=t;let n=Qt("rc",o),s=`${n[o-1]} + 1 < ${this.outputShape[o-1]}`,a=`${n[o-2]} + 1 < ${this.outputShape[o-2]}`,i=dt(o);o===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${t[0]} - rc - 1),
            ${t[0]} - rc - 1);
          if(${s}){
              result.g = getChannel(getX(${t[0]} - (rc  + 1) - 1),
                ${t[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${i} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${c(n.slice())};
          if(${s}){
            result.g = ${l(n.slice())};
          }
          if(${a}) {
            result.b = ${p(n.slice())};
            if(${s}) {
              result.a = ${u(n.slice())};
            }
          }
          setOutput(result);
        }
    `;function c(d){return m(d)}function l(d){return d[o-1]="("+d[o-1]+" + 1)",m(d)}function p(d){return d[o-2]="("+d[o-2]+" + 1)",m(d)}function u(d){return d[o-1]="("+d[o-1]+" + 1)",d[o-2]="("+d[o-2]+" + 1)",m(d)}function m(d){let g=t.map((b,I)=>f(I,d)),h=g.join(","),x=g.slice(-2).join(",");return`getChannel(getX(${h}), vec2(${x}))`}function f(d,g){return e.indexOf(d)!==-1&&t[d]!==1?`${t[d]} - ${g[d]} - 1`:`${g[d]}`}}};function EU(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{dims:s}=o,a=n.shape.length,i=y.parseAxisParam(s,n.shape);if(a===0)return Jt({inputs:{x:n},backend:e});let c=F().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new vd(n.shape,i):new Sd(n.shape,i);return e.runWebGLProgram(c,[n],n.dtype)}var A1={kernelName:Va,backendName:"webgl",kernelFunc:EU};var Nd=class{constructor(t,e){this.variableNames=["Image"],this.outputShape=[],this.customUniforms=[{name:"params",type:"vec4"}];let o=t[1],n=t[2];this.outputShape=t;let s="";typeof e=="number"?s=`float outputValue = ${e.toFixed(2)};`:s=`
        vec3 fill = vec3(${e.join(",")});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${s}
          if(coordX >= 0 && coordX < ${n} && coordY >= 0 && coordY < ${o}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}};var R1={kernelName:fi,backendName:"webgl",kernelFunc:({inputs:r,attrs:t,backend:e})=>{let{image:o}=r,{radians:n,fillValue:s,center:a}=t,i=e,c=new Nd(o.shape,s),[l,p]=v.getImageCenter(a,o.shape[1],o.shape[2]),u=[[l,p,Math.sin(n),Math.cos(n)]];return i.runWebGLProgram(c,[o],o.dtype,u)}};var $U=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,AU=at({opSnippet:$U}),D1={kernelName:On,backendName:"webgl",kernelFunc:AU};var RU="return inversesqrt(x);",DU=at({opSnippet:RU,cpuKernelImpl:pS}),F1={kernelName:Pn,backendName:"webgl",kernelFunc:DU};var gs=class{constructor(t,e,o,n,s,a,i=!0,c=!1){this.variableNames=["updates","indices","defaultValue"],this.outputShape=a;let l=dt(s.length),p=dt(a.length),u="";o===1?u="i":o===2&&(u="i, j");let m=`getIndices(${u})`,f="";n===1?f="i":n===2&&(f="i, coords[1]");let d=`getUpdates(${f})`,g="";c&&(g="coords[0], coords[1]");let h=`getDefaultValue(${g})`,x=e>1?"strides[j]":"strides";this.userCode=`
        ${l} strides = ${l}(${s});

        void main() {
          ${p} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${t}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${e}; j++) {
              int index = round(${m});
              flattenedIndex += index * ${x};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${d};
              found = true;
            }
          }
          setOutput(mix(${h}, sum, float(found)));
        }
      `}};var kd=class{constructor(t,e,o,n,s,a,i=!0,c=!1){this.variableNames=["updates","indices","defaultValue"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a;let l=dt(s.length),p=dt(a.length),u="";o===1?u="i":o===2&&(u="i, j");let m=`getIndices(${u})`,f="";n===1?f="i":n===2&&(f="i, coords[1]");let d=`getUpdates(${f})`,g="";c&&(g="coords[0], coords[1]");let h=`getDefaultValue(${g})`,x=e>1?"strides[j]":"strides",b=e>1?"strides[j + 1]":"strides";this.userCode=`
        ${l} strides = ${l}(${s});

        void main() {
          ${p} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${t}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${e}; j+=2) {
              ivec4 index = round(${m});
              flattenedIndex += index.xz * ${x};
              if (j + 1 < ${e}) {
                flattenedIndex += index.yw * ${b};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${d};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${h}, sum, found));
        }
      `}};function FU(r){let{inputs:t,backend:e,attrs:o}=r,{indices:n,updates:s}=t,{shape:a}=o,{sliceRank:i,numUpdates:c,sliceSize:l,strides:p,outputSize:u}=v.calculateShapes(s,n,a),m=[u/l,l];if(u===0)return e.makeTensorInfo(a,n.dtype);let f=K({inputs:{x:n},backend:e,attrs:{shape:[c,i]}}),d=K({inputs:{x:s},backend:e,attrs:{shape:[c,l]}}),g=e.makeTensorInfo([],"float32",new Float32Array([0])),h;F().getBool("WEBGL_PACK")?h=new kd(c,i,f.shape.length,d.shape.length,p,m):h=new gs(c,i,f.shape.length,d.shape.length,p,m);let x=e.runWebGLProgram(h,[d,f,g],d.dtype),b=K({inputs:{x},backend:e,attrs:{shape:a}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(g),b}var _1={kernelName:Ga,backendName:"webgl",kernelFunc:FU};var Ed=class{constructor(t,e,o,n){this.variableNames=["sortedSequence","values"],this.customUniforms=[{name:"numInputs",type:"int"}],this.outputShape=[t,o];let s="while (left < right) {",a=`for (int i = 0; i < ${Math.ceil(Math.log2(e+1))}; ++i) { if (left >= right) break;`,i=F().getNumber("WEBGL_VERSION")===2?s:a,c=n==="left"?"<":"<=";this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${i}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${c} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}};function _U(r){let{inputs:t,backend:e,attrs:o}=r,{sortedSequence:n,values:s}=t,{side:a}=o,i=new Ed(n.shape[0],n.shape[1],s.shape[1],a),c=[[n.shape[1]]];return e.runWebGLProgram(i,[n,s],"int32",c)}var O1={kernelName:za,backendName:"webgl",kernelFunc:_U};var $d=class{constructor(t,e,o){this.variableNames=["c","a","b"],this.outputShape=e;let n,s;if(o>4)throw Error(`Where for rank ${o} is not yet supported`);if(o===1)s="resRC",n="resRC";else{let i=["resRC.x","resRC.y","resRC.z","resRC.w"],c=[],l=[];for(let p=0;p<e.length;p++)l.push(`${i[p]}`),p<t&&c.push(`${i[p]}`);n=c.join(),s=l.join()}let a=dt(o);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        float cVal = getC(${n});
        if (cVal >= 1.0) {
          setOutput(getA(${s}));
        } else {
          setOutput(getB(${s}));
        }
      }
    `}};function OU(r){let{inputs:t,backend:e}=r,{condition:o,t:n,e:s}=t,a=new $d(o.shape.length,n.shape,n.shape.length);return e.runWebGLProgram(a,[o,n,s],re(n.dtype,s.dtype))}var P1={kernelName:Wa,backendName:"webgl",kernelFunc:OU};var PU=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${v.SELU_SCALEALPHA};
  float scale = ${v.SELU_SCALE};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,LU=at({opSnippet:PU}),L1={kernelName:Ln,backendName:"webgl",kernelFunc:LU};var BU=vr+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,MU=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,VU=at({opSnippet:BU,packedOpSnippet:MU,cpuKernelImpl:mS}),B1={kernelName:Vn,backendName:"webgl",kernelFunc:VU};var GU=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,UU=at({opSnippet:GU}),M1={kernelName:Mn,backendName:"webgl",kernelFunc:UU};var zU=vr+`
  return sin(x);
`,WU=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${nr}
  return result;
`,HU=at({opSnippet:zU,packedOpSnippet:WU}),V1={kernelName:"Sin",backendName:"webgl",kernelFunc:HU};var qU=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,KU=at({opSnippet:qU}),G1={kernelName:Bn,backendName:"webgl",kernelFunc:KU};var jU=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,XU=at({opSnippet:jU}),U1={kernelName:Gn,backendName:"webgl",kernelFunc:XU};var YU=r=>{let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{blockShape:s,paddings:a}=o;y.assert(n.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet");let i=s.reduce((x,b)=>x*b),c=[[0,0]];c.push(...a);for(let x=1+s.length;x<n.shape.length;++x)c.push([0,0]);let l=[],p=Uy({inputs:{x:n},backend:e,attrs:{paddings:c,constantValue:0}}),u=v.getReshaped(p.shape,s,i,!1),m=v.getPermuted(u.length,s.length,!1),f=v.getReshapedPermuted(p.shape,s,i,!1),d=K({inputs:{x:p},backend:e,attrs:{shape:u}}),g=Mt({inputs:{x:d},backend:e,attrs:{perm:m}}),h=K({inputs:{x:g},backend:e,attrs:{shape:f}});return l.push(p),l.push(d),l.push(g),l.forEach(x=>e.disposeIntermediateTensorInfo(x)),h},z1={kernelName:Ka,backendName:"webgl",kernelFunc:YU};function ZU(r){let{inputs:t,backend:e}=r,{indices:o,values:n,denseShape:s,defaultValue:a}=t;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
         ${s.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
         ${o.shape}`);if(n.shape.length!==1)throw new Error(`Values must be a vector, saw:
         ${n.shape}`);if(a.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${a.shape}`);let i=e.readSync(o.dataId),c=e.readSync(n.dataId),l=e.readSync(s.dataId),p=e.readSync(a.dataId)[0],[u,m,f,d,g]=dS(i,o.shape,o.dtype,c,n.dtype,l,p);return[e.makeTensorInfo(m,o.dtype,u),e.makeTensorInfo([m[0]],n.dtype,f),e.makeTensorInfo([d.length],"bool",new Uint8Array(d.map(h=>Number(h)))),e.makeTensorInfo([g.length],o.dtype,new Int32Array(g))]}var W1={kernelName:Ya,backendName:"webgl",kernelFunc:ZU};function QU(r){let{inputs:t,backend:e}=r,{inputIndices:o,inputShape:n,newShape:s}=t;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape ${o.shape}`);if(n.shape.length!==1)throw new Error(`Input shape should be a vector but received shape ${n.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let a=Array.from(e.readSync(n.dataId)),i=e.readSync(o.dataId),c=Array.from(e.readSync(s.dataId)),[l,p,u]=hS(i,o.shape,o.dtype,a,c);return[e.makeTensorInfo(p,o.dtype,l),e.makeTensorInfo([u.length],s.dtype,new Int32Array(u))]}var H1={kernelName:Za,backendName:"webgl",kernelFunc:QU};function JU(r){let{inputs:t,backend:e}=r,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
              ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
              ${s.shape}`);let a=e.readSync(o.dataId),i=e.readSync(n.dataId),c=e.readSync(s.dataId),[l,p]=pf(a,o.shape,o.dtype,i,c,!0);return e.makeTensorInfo(p,o.dtype,l)}var q1={kernelName:Qa,backendName:"webgl",kernelFunc:JU};function tz(r){let{inputs:t,backend:e}=r,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
             ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
             ${s.shape}`);let a=e.readSync(o.dataId),i=e.readSync(n.dataId),c=e.readSync(s.dataId),[l,p]=pf(a,o.shape,o.dtype,i,c);return e.makeTensorInfo(p,o.dtype,l)}var K1={kernelName:Ja,backendName:"webgl",kernelFunc:tz};function ez(r){let{inputs:t,backend:e,attrs:o}=r,{sparseIndices:n,sparseValues:s,defaultValue:a}=t,{outputShape:i}=o,{sliceRank:c,numUpdates:l,sliceSize:p,strides:u,outputSize:m}=v.calculateShapes(s,n,i),f=!1;if(s.dtype==="string"){let x=e.bufferSync(n),b=e.bufferSync(s),I=y.decodeString(e.readSync(a.dataId)[0]),T=uS(x,b,i,m,p,l,c,u,I,f);return e.makeTensorInfo(i,T.dtype,T.values)}let d=new gs(l,c,n.shape.length,s.shape.length,u,[m,1],f),g=e.runWebGLProgram(d,[s,n,a],s.dtype),h=K({inputs:{x:g},backend:e,attrs:{shape:i}});return e.disposeIntermediateTensorInfo(g),h}var j1={kernelName:ti,backendName:"webgl",kernelFunc:ez};function rz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{numOrSizeSplits:s,axis:a}=o,i=y.parseAxisParam(a,n.shape)[0],c=v.prepareSplitSize(n,s,i),l=n.shape.length,p=new Array(l).fill(0),u=n.shape.slice();return c.map(m=>{let f=[...u];f[i]=m;let d=Hr({inputs:{x:n},backend:e,attrs:{begin:p,size:f}});return p[i]+=m,d})}var X1={kernelName:ja,backendName:"webgl",kernelFunc:rz};var Y1="return sqrt(x);",oz=at({opSnippet:Y1,packedOpSnippet:Y1,cpuKernelImpl:gS}),Z1={kernelName:Un,backendName:"webgl",kernelFunc:oz};var nz="return x * x;",sz=at({opSnippet:nz}),Q1={kernelName:Pl,backendName:"webgl",kernelFunc:sz};var J1="return (a - b) * (a - b);",az=Ft({opSnippet:J1,packedOpSnippet:J1}),tk={kernelName:zn,backendName:"webgl",kernelFunc:az};function iz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t;if(n.dtype!=="string")throw new Error("Input must be of datatype string");let s=e.readSync(n.dataId),a=v.fromUint8ToStringArray(s),i=xS(a,"string",o);return e.makeTensorInfo(n.shape,"string",i)}var ek={kernelName:Wn,backendName:"webgl",kernelFunc:iz};function cz({inputs:r,attrs:t,backend:e}){let{x:o}=r,n=le+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,s=new Ce(o.shape,n);return e.runWebGLProgram(s,[o],o.dtype)}var rk={kernelName:qn,backendName:"webgl",kernelFunc:cz};var Ad=class{constructor(t,e,o){this.variableNames=["x"],this.outputShape=o;let n=o.length,s=dt(o.length),a=dt(o.length),i="";if(n===1)i="coords * strides + begin";else{let c=0;i=o.map((l,p)=>(c++,o.length===1?`coords * strides[${p}] + begin[${p}]`:`coords[${c-1}] * strides[${p}] + begin[${p}]`)).join(",")}this.userCode=`
      ${s} begin = ${s}(${t});
      ${s} strides = ${s}(${e});

      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}};function lz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{begin:s,end:a,strides:i,beginMask:c,endMask:l,ellipsisMask:p,newAxisMask:u,shrinkAxisMask:m}=o,{finalShapeSparse:f,finalShape:d,isIdentity:g,sliceDim0:h,isSimpleSlice:x,begin:b,end:I,strides:T}=ue.sliceInfo(n.shape,s,a,i,c,l,p,u,m),E;if(g)E=K({inputs:{x:n},backend:e,attrs:{shape:d}});else if(h||x){y.assert(n.shape.length>=1,()=>`Input must have rank at least 1, got: ${n.shape.length}`);let A=ue.computeOutShape(b,I,T),D=Hr({inputs:{x:n},backend:e,attrs:{begin:b,size:A}});E=K({inputs:{x:D},backend:e,attrs:{shape:d}}),e.disposeIntermediateTensorInfo(D)}else if(e.shouldExecuteOnCPU([n])){let D=e.readSync(n.dataId),_=ot(n.shape,n.dtype,D),O=yS(f,_,T,b);E=e.makeTensorInfo(d,n.dtype,O.values)}else{let D=new Ad(b,T,f);E=e.runWebGLProgram(D,[n],n.dtype)}let $=K({inputs:{x:E},backend:e,attrs:{shape:d}});return e.disposeIntermediateTensorInfo(E),$}var ok={kernelName:ei,backendName:"webgl",kernelFunc:lz};function pz(r){let{inputs:t,backend:e,attrs:o}=r,{separator:n,nGramWidths:s,leftPad:a,rightPad:i,padWidth:c,preserveShortSequences:l}=o,{data:p,dataSplits:u}=t,m=e.readSync(p.dataId),f=e.readSync(u.dataId),[d,g]=bS(m,f,n,s,a,i,c,l);return[e.makeTensorInfo([d.length],"string",d),e.makeTensorInfo(u.shape,"int32",g)]}var nk={kernelName:ri,backendName:"webgl",kernelFunc:pz};function uz(r){let{inputs:t,backend:e,attrs:o}=r,{skipEmpty:n}=o,{input:s,delimiter:a}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(a.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${a.shape}`);let i=e.readSync(s.dataId),c=e.readSync(a.dataId)[0],[l,p,u]=wS(i,c,n),m=p.length;return[e.makeTensorInfo([m,2],"int32",l),e.makeTensorInfo([m],"string",p),e.makeTensorInfo([2],"int32",new Int32Array(u))]}var sk={kernelName:oi,backendName:"webgl",kernelFunc:uz};function mz(r){let{inputs:t,backend:e,attrs:o}=r,{numBuckets:n}=o,{input:s}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(n<=0)throw new Error("Number of buckets must be at least 1");let a=e.readSync(s.dataId),i=CS(a,n);return e.makeTensorInfo(s.shape,"int32",i)}var ak={kernelName:ni,backendName:"webgl",kernelFunc:mz};var fz="return tan(x);",dz=at({opSnippet:fz}),ik={kernelName:"Tan",backendName:"webgl",kernelFunc:dz};var hz=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,gz=at({opSnippet:hz}),ck={kernelName:Hn,backendName:"webgl",kernelFunc:gz};function xz(r){let{inputs:t,backend:e,attrs:o}=r,{tensor:n,indices:s,updates:a}=t,{}=o,{sliceRank:i,numUpdates:c,sliceSize:l,strides:p,outputSize:u}=v.calculateShapes(a,s,n.shape),m=[u/l,l];if(u===0)return e.makeTensorInfo(n.shape,s.dtype);let f=K({inputs:{x:s},backend:e,attrs:{shape:[c,i]}}),d=K({inputs:{x:a},backend:e,attrs:{shape:[c,l]}}),g=K({inputs:{x:n},backend:e,attrs:{shape:m}}),h=new gs(c,i,f.shape.length,d.shape.length,p,m,!1,!0),x=e.runWebGLProgram(h,[d,f,g],g.dtype),b=K({inputs:{x},backend:e,attrs:{shape:n.shape}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(x),b}var lk={kernelName:Ua,backendName:"webgl",kernelFunc:xz};var Rd=class{constructor(t,e){this.variableNames=["A"];let o=new Array(t.length);for(let a=0;a<o.length;a++)o[a]=t[a]*e[a];this.outputShape=o,this.rank=o.length;let n=dt(this.rank),s=yz(t);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        setOutput(getA(${s}));
      }
    `}};function yz(r){let t=r.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${r[0]})`;let e=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],o=[];for(let n=0;n<r.length;n++)o.push(`imod(${e[n]}, ${r[n]})`);return o.join()}function Wy(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{reps:s}=o;if(n.dtype==="string"||n.shape.length>5){let c=e.readSync(n.dataId),l=n.dtype==="string"?c.map(m=>y.decodeString(m)):c,p=ot(n.shape,n.dtype,l),u=IS(p,s);return e.makeTensorInfo(u.shape,u.dtype,u.values)}let a=new Rd(n.shape,s);return e.runWebGLProgram(a,[n],n.dtype)}var pk={kernelName:vo,backendName:"webgl",kernelFunc:Wy};var Dd=class{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"negativeInf",type:"float"},{name:"dir",type:"int"},{name:"inc",type:"int"}],this.outputShape=t,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},Fd=class{constructor(t){this.variableNames=["x","indices"],this.customUniforms=[{name:"n",type:"int"},{name:"firstPass",type:"int"},{name:"k",type:"int"}],this.outputShape=t,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}};function mc(r,t){t!==null&&r.disposeIntermediateTensorInfo(t)}function uk(r){let t=1;for(;t<r;)t*=2;return t}function bz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{k:s,sorted:a}=o,i=F().getNumber("TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD"),c=F().getNumber("TOPK_K_CPU_HANDOFF_THRESHOLD"),l=n.shape,p=l[l.length-1];if(e.shouldExecuteOnCPU([n])||p<i||s>c){let O=e.readSync(n.dataId),[L,B]=SS(O,l,n.dtype,s,a);return[e.makeTensorInfo(L.shape,L.dtype,L.values),e.makeTensorInfo(B.shape,B.dtype,B.values)]}if(s===0)return l[l.length-1]=0,[e.makeTensorInfo(l,n.dtype,[]),e.makeTensorInfo(l,"int32",[])];if(p===1)return[n,Ho({attrs:{shape:l,dtype:"int32",value:0},backend:e})];let u=e.texData.get(n.dataId),m=u!==null&&u.isPacked,f=m?e.unpackTensor(n):n,g=y.sizeFromShape(l)/p,h=K({inputs:{x:f},attrs:{shape:[g,p]},backend:e});m&&mc(e,f);let x=uk(s),b=uk(p),I=null,T=()=>I===null?[h,h]:[h,I],E=(O,L,B)=>{let M=T(),G=new Dd(B),W=[[p],[I===null?1:0],[Number.NEGATIVE_INFINITY],[O],[L]],H=I;I=e.runWebGLProgram(G,M,"int32",W),mc(e,H)};for(let O=1;O<x;O*=2){let L=O*2;for(let B=O;B>=1;B/=2)E(L,B,[g,b])}for(let O=b;O>x;O/=2){let L=T(),B=new Fd([g,O/2]),G=[[p],[I===null?1:0],[x]],V=I;I=e.runWebGLProgram(B,L,"int32",G),mc(e,V);let W=x/2,H=W*2;for(let U=W;U>=1;U/=2)E(H,U,I.shape)}let $=I;I=Hr({inputs:{x:I},backend:e,attrs:{begin:0,size:[g,s]}}),mc(e,$);let A=Ly({inputs:{x:h,indices:I},backend:e,attrs:{axis:1,batchDims:1}});mc(e,h);let D=l.slice(0,-1);D.push(s),$=I,I=K({inputs:{x:I},attrs:{shape:D},backend:e}),mc(e,$);let _=A;return A=K({inputs:{x:A},attrs:{shape:D},backend:e}),mc(e,_),[A,I]}var mk={kernelName:ii,backendName:"webgl",kernelFunc:bz};var _d=class{constructor(t,e,o,n,s,a){this.variableNames=["Image","Transforms"],this.outputShape=a;let i=o==="nearest"?1:2,c;switch(n){case"constant":c=1;break;case"reflect":c=2;break;case"wrap":c=3;break;case"nearest":c=4;break;default:c=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${c} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${c} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${c} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${t} && 0 <= coordX && coordX < ${e}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${s});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${s});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${e}));
                float mapY = mapCoord(inY, float(${t}));

                if (${i} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}};function wz(r){let{inputs:t,backend:e,attrs:o}=r,{image:n,transforms:s}=t,{interpolation:a,fillMode:i,fillValue:c,outputShape:l}=o,[p,u,m,f]=n.shape,[d,g]=l??[u,m],h=[p,d,g,f],x=new _d(u,m,a,i,c,h);return e.runWebGLProgram(x,[n,s],"float32")}var fk={kernelName:ci,backendName:"webgl",kernelFunc:wz};function Cz(r){let{inputs:t,attrs:e,backend:o}=r,{axis:n}=e,{x:s}=t;ho(s,"unique"),console.warn("WARNING: ","UI might be locked temporarily as data is being downloaded");let a=o.readSync(s.dataId),{outputValues:i,outputShape:c,indices:l}=vS(a,n,s.shape,s.dtype);return[o.makeTensorInfo(c,s.dtype,i),o.makeTensorInfo([l.length],"int32",l)]}var dk={kernelName:li,backendName:"webgl",kernelFunc:Cz};function Tz(r){let{inputs:t,backend:e,attrs:o}=r,{value:n}=t,{axis:s}=o;s<0&&(s+=n.shape.length);let a=n,i=a.shape.length,c=n.shape[s],l=new Array(i-1),p=0;for(let g=0;g<i;g++)g!==s&&(l[p++]=a.shape[g]);let u=[],m=new Array(i).fill(0),f=a.shape.slice();f[s]=1;let d=new Array(c);for(let g=0;g<d.length;g++){m[s]=g;let h=Hr({inputs:{x:a},backend:e,attrs:{begin:m,size:f}}),x=K({inputs:{x:h},backend:e,attrs:{shape:l}});d[g]=x,u.push(h)}return u.forEach(g=>e.disposeIntermediateTensorInfo(g)),d}var hk={kernelName:pi,backendName:"webgl",kernelFunc:Tz};var Od=class{constructor(t,e){this.variableNames=["x","segmentIds"];let o=t.windowSize,n=t.batchSize,s=t.inSize,a=t.numSegments,i=a*Math.ceil(s/o);this.outputShape=[n,i];let c="0.0",l="sumValue",p=Math.floor(o/4)*4,u=o%4,m=`
        sumValue += dot(values, segFilter);
    `,f="";s%o>0&&(f=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return initializationValue;
        }
      `);let d="";s%o>0&&(d=`
        if (inIdx < 0 || inIdx >= ${s}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = ${c};

      float getValue(int batch, int inIdx) {
        ${f}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${d}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${a})) * float(${o}));
        int currentSeg = int(mod(float(outIdx), float(${a})));

        float sumValue = 0.0;

        for (int i = 0; i < ${p}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${m}
        }

        int inIdx = inOffset + ${p};
        if (${u===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${m}
        } else if (${u===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${m}
        } else if (${u===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${m}
        }
        setOutput(${l});
      }
    `}};function Iz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,segmentIds:s}=t,{numSegments:a}=o,i=n.shape.length,c=[],l=0,p=v.getAxesPermutation([l],i),u=n;p!=null&&(u=Mt({inputs:{x:n},backend:e,attrs:{perm:p}}),c.push(u),l=v.getInnerMostAxes(1,i)[0]);let m=v.segment_util.computeOutShape(u.shape,l,a),f=y.sizeFromShape([u.shape[l]]),d=K({inputs:{x:u},backend:e,attrs:{shape:[-1,f]}});c.push(d);let g=Qn(n.dtype),h=(T,E,$,A,D)=>{let _=T.shape[0],O=T.shape[1],L=v.segment_util.segOpComputeOptimalWindowSize(O,D),B={windowSize:L,inSize:O,batchSize:_,numSegments:D},M=new Od(B,E),G=e.compileAndRun(M,[T,$],A);if(c.push(G),G.shape[1]===D)return G;let V=zy({backend:e,attrs:{start:0,stop:D,step:1,dtype:"float32"}}),W=Wy({inputs:{x:V},backend:e,attrs:{reps:[O/L]}});return c.push(V),c.push(W),h(G,E,W,A,D)},x=h(d,"unsortedSegmentSum",s,g,a),b=K({inputs:{x},backend:e,attrs:{shape:m}}),I=b;if(p!=null){c.push(b);let T=v.getUndoAxesPermutation(p);I=Mt({inputs:{x:I},backend:e,attrs:{perm:T}})}return c.forEach(T=>e.disposeIntermediateTensorInfo(T)),I}var gk={kernelName:ui,backendName:"webgl",kernelFunc:Iz};var Sz=[QS,tv,ev,rv,nv,sv,av,iv,pv,uv,mv,fv,dv,hv,gv,xv,yv,bv,wv,Cv,Tv,Sv,vv,Nv,kv,Rv,Fv,_v,US,Pv,Bv,Mv,Vv,Gv,Uv,zv,Wv,Hv,qv,Kv,Yv,Zv,Qv,Jv,tN,eN,rN,oN,nN,sN,aN,iN,cN,lN,pN,uN,fN,dN,hN,gN,yN,bN,wN,CN,TN,IN,SN,vN,NN,GS,kN,Lv,EN,$N,AN,zS,RN,DN,FN,_N,ON,PN,LN,BN,MN,VN,UN,zN,WN,HN,qN,KN,XN,ZN,QN,JN,t1,e1,a1,qS,i1,c1,l1,p1,Ev,u1,d1,h1,g1,x1,WS,y1,b1,w1,C1,T1,$v,r1,I1,S1,v1,jS,N1,k1,E1,$1,A1,R1,D1,F1,_1,O1,P1,L1,B1,M1,V1,G1,Iv,s1,U1,z1,W1,H1,q1,K1,j1,X1,Z1,Q1,tk,ek,rk,ok,nk,sk,ak,n1,YS,ik,ck,lk,pk,mk,fk,ZS,dk,hk,gk,m1];for(let r of Sz)Rc(r);var vz=be.whereImpl,Cu=class r extends jr{nextDataId(){return r.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new Zo(this,lr())}write(t,e,o){this.firstUse&&(this.firstUse=!1,F().get("IS_NODE")&&v.warn(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));let n={id:this.nextDataId()};return this.data.set(n,{values:t,dtype:o,refCount:1}),n}makeTensorInfo(t,e,o){let n;if(e==="string"&&o!=null&&o.length>0&&y.isString(o[0])){let s=o.map(a=>y.encodeString(a));n=this.write(s,t,e)}else n=this.write(o,t,e);return{dataId:n,shape:t,dtype:e}}refCount(t){return this.data.has(t)?this.data.get(t).refCount:0}incRef(t){let e=this.data.get(t);e.refCount++}decRef(t){if(this.data.has(t)){let e=this.data.get(t);e.refCount--}}move(t,e,o,n,s){this.data.set(t,{values:e,dtype:n,refCount:s})}numDataIds(){return this.data.numDataIds()}async read(t){return this.readSync(t)}readSync(t){let{dtype:e,complexTensorInfos:o}=this.data.get(t);if(e==="complex64"){let n=this.readSync(o.real.dataId),s=this.readSync(o.imag.dataId);return v.mergeRealAndImagArrays(n,s)}return y.convertBackendValuesAndArrayBuffer(this.data.get(t).values,e)}bufferSync(t){let e=this.readSync(t.dataId);if(t.dtype==="string")try{let o=e.map(n=>y.decodeString(n));return ot(t.shape,t.dtype,o)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return ot(t.shape,t.dtype,e)}makeOutput(t,e,o){return lr().makeTensorFromTensorInfo(this.makeTensorInfo(e,o,t),this)}disposeData(t,e=!1){if(this.data.has(t)){if(this.data.get(t).refCount--,!e&&this.data.get(t).refCount>0)return!1;let{complexTensorInfos:o}=this.data.get(t);o!=null&&(this.disposeData(o.real.dataId,!0),this.disposeData(o.imag.dataId,!0)),this.data.delete(t)}return!0}disposeIntermediateTensorInfo(t){this.disposeData(t.dataId)}async time(t){let e=y.now();return t(),{kernelMs:y.now()-e}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(t){z([t],"where");let e=this.readSync(t.dataId);return vz(t.shape,e)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}};Cu.nextDataId=0;Hl("cpu",()=>new Cu,1);var Hy=pt("Elu",r=>r>=0?r:Math.exp(r)-1),xk={kernelName:"Elu",backendName:"cpu",kernelFunc:Hy};function qy(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{alpha:s}=o;z([n],"leakyRelu");let a=y.sizeFromShape(n.shape),i=e.data.get(n.dataId).values,c=y.getTypedArrayFromDType("float32",a);for(let l=0;l<i.length;l++)c[l]=i[l]<0?s*i[l]:i[l];return e.makeTensorInfo(n.shape,"float32",c)}var yk={kernelName:ma,backendName:"cpu",kernelFunc:qy};var Nz=wt((r,t)=>r<0?t*r:r);function Ky(r){let{inputs:t,backend:e}=r,{x:o,alpha:n}=t;z([o,n],"prelu");let s=e.data.get(o.dataId).values,a=e.data.get(n.dataId).values,[i,c]=Nz(o.shape,n.shape,s,a,"float32");return e.makeTensorInfo(c,"float32",i)}var bk={kernelName:Aa,backendName:"cpu",kernelFunc:Ky};var jy=pt(Fn,r=>Math.max(0,r)),wk={kernelName:Fn,backendName:"cpu",kernelFunc:jy};var Xy=pt(_n,r=>Math.min(Math.max(0,r),6)),Ck={kernelName:_n,backendName:"cpu",kernelFunc:Xy};function fc(r,t,e,o,n){if(e==="linear")return $e({inputs:{x:t},backend:r});if(e==="relu")return jy({inputs:{x:t},backend:r});if(e==="elu")return Hy({inputs:{x:t},backend:r});if(e==="relu6")return Xy({inputs:{x:t},backend:r});if(e==="prelu")return Ky({inputs:{x:t,alpha:o},backend:r});if(e==="leakyrelu")return qy({inputs:{x:t},backend:r,attrs:{alpha:n}});if(e==="sigmoid")return gy({inputs:{x:t},backend:r});throw new Error(`Activation ${e} has not been implemented for the CPU backend.`)}function Ct(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{shape:s}=o,a=y.sizeFromShape(n.shape),i=y.inferFromImplicitShape(s,a),c=y.sizeFromShape(i);y.assert(a===c,()=>`The new shape (${i}) has ${c} elements and the old shape (${n.shape}) has ${a} elements. The new shape and old shape must have the same number of elements.`),e.incRef(n.dataId);let l=e.data.get(n.dataId);if(l.complexTensorInfos!=null){let p=l.complexTensorInfos.real,u=l.complexTensorInfos.imag;p.shape=i,u.shape=i}return{dataId:n.dataId,shape:i,dtype:n.dtype}}var Tk={kernelName:La,backendName:"cpu",kernelFunc:Ct};function Yy(r){let{inputs:t,backend:e,attrs:o}=r,{a:n,b:s}=t,{transposeA:a,transposeB:i}=o;z([n,s],"matMul");let c=n.shape.length,l=s.shape.length,p=a?n.shape[c-2]:n.shape[c-1],u=i?s.shape[l-1]:s.shape[l-2],m=a?n.shape[c-1]:n.shape[c-2],f=i?s.shape[l-2]:s.shape[l-1],d=n.shape.slice(0,-2),g=s.shape.slice(0,-2),h=y.sizeFromShape(d),x=y.sizeFromShape(g),I=Br.assertAndGetBroadcastShape(n.shape.slice(0,-2),s.shape.slice(0,-2)).concat([m,f]);y.assert(p===u,()=>`Error in matMul: inner shapes (${p}) and (${u}) of Tensors with shapes ${n.shape} and ${s.shape} and transposeA=${a} and transposeB=${i} must match.`);let T=a?[h,p,m]:[h,m,p],E=i?[x,f,u]:[x,u,f],$=Ct({inputs:{x:n},backend:e,attrs:{shape:T}}),A=Ct({inputs:{x:s},backend:e,attrs:{shape:E}}),D=a?$.shape[1]:$.shape[2],_=a?$.shape[2]:$.shape[1],O=i?A.shape[1]:A.shape[2],L=Math.max(h,x),B=e.data.get($.dataId).values,M=e.data.get(A.dataId).values,G=y.computeStrides($.shape),V=y.computeStrides(A.shape),[W,H,U]=a?[G[0],1,G[1]]:[G[0],G[1],1],[q,X,Y]=i?[1,V[1],V[0]]:[V[1],1,V[0]],J=_*O,Z=ot([L,_,O],$.dtype),et=Z.values,Q=e.blockSize;for(let st=0;st<L;st++){let ut=st%h,ht=st%x;for(let ft=0;ft<_;ft+=Q){let It=Math.min(ft+Q,_);for(let St=0;St<O;St+=Q){let Pt=Math.min(St+Q,O);for(let Vt=0;Vt<D;Vt+=Q){let ne=Math.min(Vt+Q,D);for(let Gt=ft;Gt<It;Gt++)for(let Lt=St;Lt<Pt;Lt++){let te=0;for(let Yt=Vt;Yt<ne;Yt++){let bo=B[ut*W+Gt*H+Yt*U],Ie=M[Yt*q+Lt*X+ht*Y];te+=bo*Ie}et[st*J+(Gt*O+Lt)]+=te}}}}}return e.disposeIntermediateTensorInfo($),e.disposeIntermediateTensorInfo(A),e.makeTensorInfo(I,Z.dtype,Z.values)}var Ik={kernelName:Rs,backendName:"cpu",kernelFunc:Yy};function kz(r){let{inputs:t,backend:e,attrs:o}=r,{a:n,b:s,bias:a,preluActivationWeights:i}=t,{transposeA:c,transposeB:l,activation:p,leakyreluAlpha:u}=o,m,f,d,g=[];m=Yy({inputs:{a:n,b:s},attrs:{transposeA:c,transposeB:l},backend:e}),a&&(f=go({inputs:{a:m,b:a},backend:e}),g.push(m),m=f),p&&(d=fc(e,m,p,i,u),g.push(m),m=d);for(let x of g)e.disposeIntermediateTensorInfo(x);return m}var Sk={kernelName:Kn,backendName:"cpu",kernelFunc:kz};var Ez=pt(tn,r=>Math.acos(r)),vk={kernelName:tn,backendName:"cpu",kernelFunc:Ez};var $z=pt(en,r=>Math.acosh(r)),Nk={kernelName:en,backendName:"cpu",kernelFunc:$z};function Az(r){let{inputs:t,backend:e}=r,o=t;z(t,"addN");let n=o.map(i=>e.data.get(i.dataId).values),s=ot(o[0].shape,o[0].dtype),a=s.values;for(let i=0;i<o.length;i++){let c=n[i];for(let l=0;l<a.length;l++)a[l]+=c[l]}return e.makeTensorInfo(s.shape,s.dtype,s.values)}var kk={kernelName:Ns,backendName:"cpu",kernelFunc:Az};function Rz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o;z(n,"all");let i=y.parseAxisParam(s,n.shape),c=i,l=v.getAxesPermutation(c,n.shape.length),p=n;l!=null&&(p=qt({inputs:{x:n},backend:e,attrs:{perm:l}}),c=v.getInnerMostAxes(c.length,n.shape.length)),v.assertAxesAreInnerMostDims("all",c,p.shape.length);let[u,m]=v.computeOutAndReduceShapes(p.shape,c),f=y.sizeFromShape(m),d=y.makeZerosTypedArray(y.sizeFromShape(u),p.dtype),g=e.data.get(p.dataId).values;for(let x=0;x<d.length;++x){let b=x*f,I=g[b];for(let T=0;T<f;++T){let E=g[b+T];I=I&&E}d[x]=I}l!=null&&e.disposeIntermediateTensorInfo(p);let h=e.makeTensorInfo(u,p.dtype,d);if(a){let x=v.expandShapeToKeepDim(u,i),b=Ct({inputs:{x:h},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(h),b}return h}var Ek={kernelName:"All",backendName:"cpu",kernelFunc:Rz};function Dz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o;z(n,"any");let i=y.parseAxisParam(s,n.shape),c=i,l=v.getAxesPermutation(c,n.shape.length),p=n;l!=null&&(p=qt({inputs:{x:n},backend:e,attrs:{perm:l}}),c=v.getInnerMostAxes(c.length,n.shape.length)),v.assertAxesAreInnerMostDims("any",c,p.shape.length);let[u,m]=v.computeOutAndReduceShapes(p.shape,c),f=y.sizeFromShape(m),d=y.makeZerosTypedArray(y.sizeFromShape(u),p.dtype),g=e.data.get(p.dataId).values;for(let x=0;x<d.length;++x){let b=x*f,I=g[b];for(let T=0;T<f;++T){let E=g[b+T];I=I||E}d[x]=I}l!=null&&e.disposeIntermediateTensorInfo(p);let h=e.makeTensorInfo(u,p.dtype,d);if(a){let x=v.expandShapeToKeepDim(u,i),b=Ct({inputs:{x:h},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(h),b}return h}var $k={kernelName:"Any",backendName:"cpu",kernelFunc:Dz};function Fz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s}=o;z(n,"argMax");let a=y.parseAxisParam(s,n.shape),i=v.getAxesPermutation(a,n.shape.length),c=n,l=[];i!=null&&(c=qt({inputs:{x:n},backend:e,attrs:{perm:i}}),l.push(c),a=v.getInnerMostAxes(a.length,c.shape.length)),a=[a[0]],v.assertAxesAreInnerMostDims("argMax",a,c.shape.length);let[p,u]=v.computeOutAndReduceShapes(c.shape,a),m=y.sizeFromShape(p),f=y.makeZerosTypedArray(m,"int32"),d=y.sizeFromShape(u),g=e.data.get(c.dataId).values;for(let h=0;h<f.length;++h){let x=h*d,b=g[x],I=0;for(let T=0;T<d;++T){let E=g[x+T];E>b&&(b=E,I=T)}f[h]=I}return l.forEach(h=>e.disposeIntermediateTensorInfo(h)),e.makeTensorInfo(p,"int32",f)}var Ak={kernelName:ks,backendName:"cpu",kernelFunc:Fz};function _z(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s}=o;z(n,"argMin");let a=y.parseAxisParam(s,n.shape),i=v.getAxesPermutation(a,n.shape.length),c=n,l=[];i!=null&&(c=qt({inputs:{x:n},backend:e,attrs:{perm:i}}),l.push(c),a=v.getInnerMostAxes(a.length,c.shape.length)),a=[a[0]],v.assertAxesAreInnerMostDims("argMin",a,c.shape.length);let[p,u]=v.computeOutAndReduceShapes(c.shape,a),m=y.sizeFromShape(p),f=y.makeZerosTypedArray(m,"int32"),d=y.sizeFromShape(u),g=e.data.get(c.dataId).values;for(let h=0;h<f.length;++h){let x=h*d,b=g[x],I=0;for(let T=0;T<d;++T){let E=g[x+T];E<b&&(b=E,I=T)}f[h]=I}return l.forEach(h=>e.disposeIntermediateTensorInfo(h)),e.makeTensorInfo(p,"int32",f)}var Rk={kernelName:Es,backendName:"cpu",kernelFunc:_z};var Oz=pt(rn,r=>Math.asin(r)),Dk={kernelName:rn,backendName:"cpu",kernelFunc:Oz};var Pz=pt(on,r=>Math.asinh(r)),Fk={kernelName:on,backendName:"cpu",kernelFunc:Pz};var Lz=pt(nn,r=>Math.atan(r)),_k={kernelName:nn,backendName:"cpu",kernelFunc:Lz};var Bz=wt((r,t)=>Math.atan2(r,t)),Mz=Nt(an,Bz),Ok={kernelName:an,backendName:"cpu",kernelFunc:Mz};var Vz=pt(sn,r=>Math.atanh(r)),Pk={kernelName:sn,backendName:"cpu",kernelFunc:Vz};function hl(r,t,e,o,n,s){let a=n.strideHeight,i=n.strideWidth,c=n.dilationHeight,l=n.dilationWidth,p=n.effectiveFilterHeight,u=n.effectiveFilterWidth,m=n.padInfo.top,f=n.padInfo.left,d=s==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,g=ot(n.outShape,e),h=g.values,x=n.outShape[1]*n.outShape[2]*n.outShape[3],b=n.outShape[2]*n.outShape[3],I=n.outShape[3];for(let T=0;T<n.batchSize;++T){let E=T*x,$=T*o[0];for(let A=0;A<n.inChannels;++A)for(let D=0;D<n.outHeight;++D){let _=D*a-m,O=Math.max(0,_),L=Math.min(n.inHeight,p+_),B=E+D*b;for(let M=0;M<n.outWidth;++M){let G=M*i-f,V=Math.max(0,G),W=Math.min(n.inWidth,u+G),H=d,U=0,q=0;for(let Y=O;Y<L;Y+=c){let J=$+Y*o[1];for(let Z=V;Z<W;Z+=l){let et=J+Z*o[2],Q=r[et+A];s==="max"&&Q>H?H=Q:s==="avg"&&(U+=Q,q++)}if(isNaN(H))break}let X=B+M*I+A;h[X]=s==="avg"?U/q:H}}}return g}function Pd(r,t,e,o,n=!1,s=!1){let a=ot(o.outShape,"int32"),i=o.strideHeight,c=o.strideWidth,l=o.dilationHeight,p=o.dilationWidth,u=o.effectiveFilterHeight,m=o.effectiveFilterWidth,f=o.padInfo.top,d=o.padInfo.left,g=ot(t,e,r);for(let h=0;h<o.batchSize;++h)for(let x=0;x<o.inChannels;++x)for(let b=0;b<o.outHeight;++b){let I=b*i-f,T=I;for(;T<0;)T+=l;let E=Math.min(o.inHeight,u+I);for(let $=0;$<o.outWidth;++$){let A=$*c-d,D=A;for(;D<0;)D+=p;let _=Math.min(o.inWidth,m+A),O=Number.NEGATIVE_INFINITY,L=-1;for(let B=T;B<E;B+=l){let M=B-I;for(let G=D;G<_;G+=p){let V=G-A,W=g.get(h,B,G,x);W>O&&(O=W,n?L=s?((h*o.inHeight+B)*o.inWidth+G)*o.inChannels+x:(B*o.inWidth+G)*o.inChannels+x:L=M*m+V)}}a.set(L,h,b,$,x)}}return a}function Ld(r,t,e,o,n,s){let a=n.strideDepth,i=n.strideHeight,c=n.strideWidth,l=n.dilationDepth,p=n.dilationHeight,u=n.dilationWidth,m=n.effectiveFilterDepth,f=n.effectiveFilterHeight,d=n.effectiveFilterWidth,g=n.padInfo.front,h=n.padInfo.top,x=n.padInfo.left,b=s==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,I=ot(n.outShape,e),T=I.values,E=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],$=n.outShape[2]*n.outShape[3]*n.outShape[4],A=n.outShape[3]*n.outShape[4],D=n.outShape[4];for(let _=0;_<n.batchSize;++_){let O=_*E,L=_*o[0];for(let B=0;B<n.inChannels;++B)for(let M=0;M<n.outDepth;++M){let G=M*a-g,V=G;for(;V<0;)V+=l;let W=Math.min(n.inDepth,m+G),H=O+M*$;for(let U=0;U<n.outHeight;++U){let q=U*i-h,X=q;for(;X<0;)X+=p;let Y=Math.min(n.inHeight,f+q),J=H+U*A;for(let Z=0;Z<n.outWidth;++Z){let et=Z*c-x,Q=et;for(;Q<0;)Q+=u;let st=Math.min(n.inWidth,d+et),ut=J+Z*D,ht=b,ft=0,It=0;for(let Pt=V;Pt<W;Pt+=l){let Vt=L+Pt*o[1];for(let ne=X;ne<Y;ne+=p){let Gt=Vt+ne*o[2];for(let Lt=Q;Lt<st;Lt+=u){let te=Gt+Lt*o[3],Yt=r[te+B];if(s==="max"&&Yt>ht?ht=Yt:s==="avg"&&(ft+=Yt,It++),isNaN(ht))break}if(isNaN(ht))break}if(isNaN(ht))break}let St=ut+B;T[St]=s==="avg"?ft/Math.max(It,1):ht}}}}return I}function Lk(r,t){let e=ot(t.outShape,"int32"),o=t.strideDepth,n=t.strideHeight,s=t.strideWidth,a=t.dilationDepth,i=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,p=t.effectiveFilterHeight,u=t.effectiveFilterWidth,m=t.padInfo.front,f=t.padInfo.top,d=t.padInfo.left;for(let g=0;g<t.batchSize;++g)for(let h=0;h<t.inChannels;++h)for(let x=0;x<t.outDepth;++x){let b=x*o-m,I=b;for(;I<0;)I+=a;let T=Math.min(t.inDepth,l+b);for(let E=0;E<t.outHeight;++E){let $=E*n-f,A=$;for(;A<0;)A+=i;let D=Math.min(t.inHeight,p+$);for(let _=0;_<t.outWidth;++_){let O=_*s-d,L=O;for(;L<0;)L+=c;let B=Math.min(t.inWidth,u+O),M=Number.NEGATIVE_INFINITY,G=-1;for(let V=I;V<T;V+=a){let W=V-b;for(let H=A;H<D;H+=i){let U=H-$;for(let q=L;q<B;q+=c){let X=q-O,Y=r.get(g,V,H,q,h);Y>=M&&(M=Y,G=W*p*u+U*p+X)}}}e.set(G,g,x,E,_,h)}}}return e}function Gz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t;z(n,"avgPool");let{filterSize:s,strides:a,pad:i,dimRoundingMode:c}=o,l=1;y.assert(v.eitherStridesOrDilationsAreOne(a,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let p=v.computePool2DInfo(n.shape,s,a,l,i,c),u;if(p.filterWidth===1&&p.filterHeight===1&&y.arraysEqual(p.inShape,p.outShape))u=$e({inputs:{x:n},backend:e});else{let m=e.data.get(n.dataId).values,f=y.computeStrides(n.shape),d=hl(m,n.shape,n.dtype,f,p,"avg");u=e.makeTensorInfo(p.outShape,n.dtype,d.values)}return u}var Bk={kernelName:$s,backendName:"cpu",kernelFunc:Gz};function Uz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{filterSize:s,strides:a,pad:i,dimRoundingMode:c,dataFormat:l}=o;z(n,"avgPool3d");let p=v.computePool3DInfo(n.shape,s,a,1,i,c,l),u=e.data.get(n.dataId).values,m=Ld(u,n.shape,n.dtype,y.computeStrides(n.shape),p,"avg");return e.makeTensorInfo(m.shape,"float32",m.values)}var Mk={kernelName:As,backendName:"cpu",kernelFunc:Uz};function zz(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s}=t,{filterSize:a,strides:i,pad:c,dimRoundingMode:l}=o;z([n,s],"avgPool3DGrad");let p=v.computePool3DInfo(s.shape,a,i,1,c,l),u=p.strideDepth,m=p.strideHeight,f=p.strideWidth,d=p.filterDepth,g=p.filterHeight,h=p.filterWidth,x=p.dilationDepth,b=p.dilationHeight,I=p.dilationWidth,T=p.effectiveFilterDepth,E=p.effectiveFilterHeight,$=p.effectiveFilterWidth,A=T-1-p.padInfo.front,D=$-1-p.padInfo.left,_=E-1-p.padInfo.top,O=ot(s.shape,"float32"),L=1/(d*g*h),B=e.bufferSync(n);for(let M=0;M<p.batchSize;++M)for(let G=0;G<p.inChannels;++G)for(let V=0;V<p.inDepth;++V)for(let W=0;W<p.inHeight;++W)for(let H=0;H<p.inWidth;++H){let U=V-A,q=W-_,X=H-D,Y=0;for(let J=0;J<T;J+=x){let Z=(U+J)/u;if(!(Z<0||Z>=p.outDepth||Math.floor(Z)!==Z))for(let et=0;et<E;et+=b){let Q=(q+et)/m;if(!(Q<0||Q>=p.outHeight||Math.floor(Q)!==Q))for(let st=0;st<$;st+=I){let ut=(X+st)/f;if(ut<0||ut>=p.outWidth||Math.floor(ut)!==ut)continue;let ht=B.get(M,Z,Q,ut,G);Y+=ht}}}O.set(Y*L,M,V,W,H,G)}return e.makeTensorInfo(O.shape,O.dtype,O.values)}var Vk={kernelName:El,backendName:"cpu",kernelFunc:zz};function Wz(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s}=t,a=s;z([n,s],"avgPoolGrad");let{filterSize:i,strides:c,pad:l}=o,p=v.computePool2DInfo(a.shape,i,c,1,l),u=p.strideHeight,m=p.strideWidth,f=p.filterHeight,d=p.filterWidth,g=p.dilationHeight,h=p.dilationWidth,x=p.effectiveFilterHeight,b=p.effectiveFilterWidth,I=b-1-p.padInfo.left,T=x-1-p.padInfo.top,E=ot(a.shape,"float32"),$=1/(f*d),A=e.data.get(n.dataId).values,D=ot(n.shape,"float32",A);for(let _=0;_<p.batchSize;++_)for(let O=0;O<p.inChannels;++O)for(let L=0;L<p.inHeight;++L)for(let B=0;B<p.inWidth;++B){let M=L-T,G=B-I,V=0;for(let W=0;W<x;W+=g){let H=(M+W)/u;if(!(H<0||H>=p.outHeight||Math.floor(H)!==H))for(let U=0;U<b;U+=h){let q=(G+U)/m;if(q<0||q>=p.outWidth||Math.floor(q)!==q)continue;let X=D.get(_,H,q,O);V+=X}}E.set(V*$,_,L,B,O)}return e.makeTensorInfo(E.shape,E.dtype,E.values)}var Gk={kernelName:kl,backendName:"cpu",kernelFunc:Wz};function Hz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,scale:s,offset:a,mean:i,variance:c}=t;y.assert(i.shape.length===c.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),y.assert(a==null||i.shape.length===a.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),y.assert(s==null||i.shape.length===s.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),z([n,i,c,s,a],"batchNorm");let{varianceEpsilon:l}=o;l==null&&(l=.001);let p=e.data.get(n.dataId).values,u=e.data.get(i.dataId).values,m=e.data.get(c.dataId).values,f=s?e.data.get(s.dataId).values:new Float32Array([1]),d=a?e.data.get(a.dataId).values:new Float32Array([0]),g=new Float32Array(p.length),h=d.length,x=f.length,b=m.length,I=u.length,T=0,E=0,$=0,A=0;for(let D=0;D<p.length;++D)g[D]=d[T++]+(p[D]-u[E++])*f[$++]/Math.sqrt(m[A++]+l),T>=h&&(T=0),E>=I&&(E=0),$>=x&&($=0),A>=b&&(A=0);return e.makeTensorInfo(n.shape,n.dtype,g)}var Uk={kernelName:ia,backendName:"cpu",kernelFunc:Hz};function qz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{blockShape:s,crops:a}=o;z([n],"batchToSpaceND");let i=s.reduce((x,b)=>x*b),c=v.getReshaped(n.shape,s,i),l=v.getPermuted(c.length,s.length),p=v.getReshapedPermuted(n.shape,s,i),u=v.getSliceBeginCoords(a,s.length),m=v.getSliceSize(p,a,s.length),f=Ct({inputs:{x:n},backend:e,attrs:{shape:c}}),d=qt({inputs:{x:f},backend:e,attrs:{perm:l}}),g=Ct({inputs:{x:d},backend:e,attrs:{shape:p}}),h=Sr({inputs:{x:g},backend:e,attrs:{begin:u,size:m}});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(g),h}var zk={kernelName:Ds,backendName:"cpu",kernelFunc:qz};function Kz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,weights:s}=t,{size:a}=o,i=e.data.get(n.dataId).values,c=e.data.get(s.dataId).values,l=ol(i,c,s.dtype,s.shape,a);return e.makeTensorInfo([a],s.dtype,l)}var Wk={kernelName:Fs,backendName:"cpu",kernelFunc:Kz};function jz(r){let{inputs:t,backend:e}=r,{s0:o,s1:n}=t,s=e.data.get(o.dataId).values,a=e.data.get(n.dataId).values,i=v.assertAndGetBroadcastShape(Array.from(s),Array.from(a));return e.makeTensorInfo([i.length],"int32",Int32Array.from(i))}var Hk={kernelName:_s,backendName:"cpu",kernelFunc:jz};var Xz=pt(pn,(r,t)=>{let e=t;return r>e.clipValueMax?e.clipValueMax:r<e.clipValueMin?e.clipValueMin:r}),qk={kernelName:pn,backendName:"cpu",kernelFunc:Xz};var Yz=r=>{let{x:t}=r.inputs,e=r.backend,o=new Float32Array(y.sizeFromShape(t.shape)),n=e.data.get(t.dataId),s=n.complexTensorInfos.real,a=n.complexTensorInfos.imag,i=e.data.get(s.dataId).values,c=e.data.get(a.dataId).values;for(let l=0;l<i.length;l++){let p=i[l],u=c[l];o[l]=Math.hypot(p,u)}return e.makeOutput(o,t.shape,"float32")},Kk={kernelName:Ps,backendName:"cpu",kernelFunc:Yz};function yo(r){let{inputs:t,backend:e}=r,{input:o}=t,n=e.data.get(o.dataId).complexTensorInfos.imag,s=e.data.get(n.dataId).values;return e.makeTensorInfo(n.shape,n.dtype,s)}var jk={kernelName:ua,backendName:"cpu",kernelFunc:yo};function xs(r){let{inputs:t,backend:e,attrs:o}=r,{axis:n}=o,s=y.parseAxisParam(n,t[0].shape)[0],a=t.map(g=>g.shape);v.assertParamsConsistent(a,s);let i=v.computeOutShape(t.map(g=>g.shape),s);if(y.sizeFromShape(i)===0)return e.makeTensorInfo(i,t[0].dtype,[]);let c=t.filter(g=>y.sizeFromShape(g.shape)>0);if(c.length===1)return $e({inputs:{x:c[0]},backend:e});if(c[0].dtype==="complex64"){let g=c.map(T=>Cr({inputs:{input:T},backend:e})),h=c.map(T=>yo({inputs:{input:T},backend:e})),x=xs({inputs:g,backend:e,attrs:{axis:s}}),b=xs({inputs:h,backend:e,attrs:{axis:s}}),I=me({inputs:{real:x,imag:b},backend:e});return g.forEach(T=>e.disposeIntermediateTensorInfo(T)),h.forEach(T=>e.disposeIntermediateTensorInfo(T)),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),I}let l=c.map(g=>{let x=[-1,y.sizeFromShape(g.shape.slice(s))];return Ct({inputs:{x:g},backend:e,attrs:{shape:x}})}),p=l.map(g=>({vals:e.data.get(g.dataId).values,shape:g.shape}));i=v.computeOutShape(l.map(g=>g.shape),1);let u=l[0].shape[0]===1,m=zm(p,i,t[0].dtype,u),f=v.computeOutShape(c.map(g=>g.shape),s),d=e.makeTensorInfo(f,t[0].dtype,m);return l.forEach(g=>e.disposeIntermediateTensorInfo(g)),d}var Xk={kernelName:Ls,backendName:"cpu",kernelFunc:xs};function Zy(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:a,pad:i,dataFormat:c,dilations:l,dimRoundingMode:p}=o;z([n,s],"conv2d");let u=v.convertConv2DDataFormat(c),m=v.computeConv2DInfo(n.shape,s.shape,a,l,i,p,!1,u),f=m.filterHeight,d=m.filterWidth,g=m.dilationHeight,h=m.dilationWidth,x=m.padInfo.left,b=m.padInfo.top,I=m.dataFormat==="channelsLast",T=new $t(m.outShape,n.dtype),E=y.computeStrides(n.shape),$=y.computeStrides(s.shape),A=E[0],D=I?E[1]:E[2],_=I?E[2]:1,O=I?1:E[1],L=T.strides[0],B=I?T.strides[1]:T.strides[2],M=I?T.strides[2]:1,G=I?1:T.strides[1],V=e.data.get(n.dataId).values,W=e.data.get(s.dataId).values,H=T.values;for(let U=0;U<m.batchSize;++U){let q=U*A,X=U*L;for(let Y=0;Y<m.outHeight;++Y){let J=X+Y*B,Z=Y*m.strideHeight-b;for(let et=0;et<f;++et){let Q=Z+et*g;if(Q<0||Q>=m.inHeight)continue;let st=et*$[0],ut=q+Q*D;for(let ht=0;ht<m.outWidth;++ht){let ft=J+ht*M,It=ht*m.strideWidth-x;for(let St=0;St<d;++St){let Pt=It+St*h;if(Pt<0||Pt>=m.inWidth)continue;let Vt=st+St*$[1],ne=ut+Pt*_,Gt=Vt;for(let Lt=0;Lt<m.inChannels;++Lt){let te=V[ne+Lt*O];for(let Yt=0;Yt<m.outChannels;++Yt)H[ft+Yt*G]+=te*W[Gt+Yt];Gt+=m.outChannels}}}}}}return e.makeTensorInfo(T.shape,T.dtype,H)}var Yk={kernelName:Bs,backendName:"cpu",kernelFunc:Zy};function Zz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,dy:s}=t,{strides:a,pad:i,dataFormat:c,dimRoundingMode:l,filterShape:p}=o;z([n,s],"conv2dBackpropFilter");let u=v.convertConv2DDataFormat(c),m=v.computeConv2DInfo(n.shape,p,a,1,i,l,!1,u),{strideHeight:f,strideWidth:d,filterHeight:g,filterWidth:h}=m,x=m.dataFormat==="channelsLast",b=new $t(m.filterShape,"float32"),I=m.padInfo.left,T=m.padInfo.top,E=e.data.get(n.dataId).values,$=e.data.get(s.dataId).values,A=new $t(n.shape,n.dtype,E),D=new $t(s.shape,s.dtype,$);for(let _=0;_<g;++_){let O=Math.max(0,Math.ceil((T-_)/f)),L=Math.min(m.outHeight,(m.inHeight+T-_)/f);for(let B=0;B<h;++B){let M=Math.max(0,Math.ceil((I-B)/d)),G=Math.min(m.outWidth,(m.inWidth+I-B)/d);for(let V=0;V<m.inChannels;++V)for(let W=0;W<m.outChannels;++W){let H=0;for(let U=0;U<m.batchSize;++U)for(let q=O;q<L;++q){let X=_+q*f-T;for(let Y=M;Y<G;++Y){let J=B+Y*d-I;x?H+=A.get(U,X,J,V)*D.get(U,q,Y,W):H+=A.get(U,V,X,J)*D.get(U,W,q,Y)}}b.set(H,_,B,V,W)}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}var Zk={kernelName:Ms,backendName:"cpu",kernelFunc:Zz};function Qz(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,filter:s}=t,{inputShape:a,strides:i,pad:c,dataFormat:l,dimRoundingMode:p}=o;z([n,s],"conv2dBackpropInput");let u=y.computeStrides(s.shape),m=y.computeStrides(n.shape),f=v.convertConv2DDataFormat(l),d=v.computeConv2DInfo(a,s.shape,i,1,c,p,!1,f),g=new $t(d.inShape,"float32"),h=g.values,x=e.data.get(n.dataId).values,b=e.data.get(s.dataId).values,[I,T,E]=u,{batchSize:$,filterHeight:A,filterWidth:D,inChannels:_,inHeight:O,inWidth:L,outChannels:B,outHeight:M,outWidth:G,strideHeight:V,strideWidth:W}=d;f=d.dataFormat;let H=A-1-d.padInfo.top,U=D-1-d.padInfo.left,q=f==="channelsLast",X=g.strides[0],Y=q?g.strides[1]:g.strides[2],J=q?g.strides[2]:1,Z=q?1:g.strides[1],et=m[0],Q=q?m[1]:m[2],st=q?m[2]:1,ut=q?1:m[1];for(let ht=0;ht<$;++ht)for(let ft=0;ft<_;++ft)for(let It=0;It<O;++It){let St=It-H,Pt=Math.max(0,Math.ceil(St/V)),Vt=Math.min(M,(A+St)/V);for(let ne=0;ne<L;++ne){let Gt=ne-U,Lt=Math.max(0,Math.ceil(Gt/W)),te=Math.min(G,(D+Gt)/W),Yt=0;for(let Ie=Pt;Ie<Vt;++Ie){let Ko=Ie*V-St;for(let ir=Lt;ir<te;++ir){let Cs=ir*W-Gt,Er=et*ht+Q*Ie+st*ir,wo=I*(A-1-Ko)+T*(D-1-Cs)+E*ft;for(let jo=0;jo<B;++jo){let Xo=x[Er+ut*jo],Yo=b[wo+jo];Yt+=Xo*Yo}}}let bo=X*ht+Y*It+J*ne+Z*ft;h[bo]=Yt}}return e.makeTensorInfo(g.shape,g.dtype,g.values)}var Qk={kernelName:Vs,backendName:"cpu",kernelFunc:Qz};function Jz(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:a,pad:i,dilations:c}=o;z([n,s],"conv3d");let l=v.computeConv3DInfo(n.shape,s.shape,a,c,i),{filterDepth:p,filterHeight:u,filterWidth:m,dilationDepth:f,dilationHeight:d,dilationWidth:g,padInfo:h}=l,x=h.front,b=h.left,I=h.top,T=new $t(l.outShape,n.dtype),E=e.data.get(n.dataId).values,$=e.data.get(s.dataId).values,A=T.values,D=y.computeStrides(n.shape),_=y.computeStrides(s.shape);for(let O=0;O<l.batchSize;++O){let L=O*D[0],B=O*T.strides[0];for(let M=0;M<l.outDepth;++M){let G=B+M*T.strides[1],V=M*l.strideDepth-x;for(let W=0;W<p;++W){let H=V+W*f;if(H<0||H>=l.inDepth)continue;let U=W*_[0],q=L+H*D[1];for(let X=0;X<l.outHeight;++X){let Y=G+X*T.strides[2],J=X*l.strideHeight-I;for(let Z=0;Z<u;++Z){let et=J+Z*d;if(et<0||et>=l.inHeight)continue;let Q=U+Z*_[1],st=q+et*D[2];for(let ut=0;ut<l.outWidth;++ut){let ht=Y+ut*l.outChannels,ft=ut*l.strideWidth-b;for(let It=0;It<m;++It){let St=ft+It*g;if(St<0||St>=l.inWidth)continue;let Pt=Q+It*_[2],Vt=st+St*l.inChannels,ne=Pt;for(let Gt=0;Gt<l.inChannels;++Gt){let Lt=E[Vt+Gt];for(let te=0;te<l.outChannels;++te)A[ht+te]+=Lt*$[ne+te];ne+=l.outChannels}}}}}}}}return e.makeTensorInfo(T.shape,T.dtype,T.values)}var Jk={kernelName:Gs,backendName:"cpu",kernelFunc:Jz};function tW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,dy:s}=t,{strides:a,pad:i,filterShape:c}=o;z([n,s],"conv3dBackpropFilterV2");let l=y.computeStrides(n.shape),p=y.computeStrides(s.shape),u=v.computeConv3DInfo(n.shape,c,a,1,i),m=u.strideDepth,f=u.strideHeight,d=u.strideWidth,g=u.filterDepth,h=u.filterHeight,x=u.filterWidth,b=new $t(u.filterShape,"float32"),I=b.values,[T,E,$,A]=b.strides,D=e.data.get(s.dataId).values,[_,O,L,B]=p,M=e.data.get(n.dataId).values,[G,V,W,H]=l,U=u.padInfo.front,q=u.padInfo.left,X=u.padInfo.top;for(let Y=0;Y<g;++Y){let J=Math.max(0,Math.ceil((U-Y)/m)),Z=Math.min(u.outDepth,(u.inDepth+U-Y)/m),et=Y*T;for(let Q=0;Q<h;++Q){let st=Math.max(0,Math.ceil((X-Q)/f)),ut=Math.min(u.outHeight,(u.inHeight+X-Q)/f),ht=Q*E+et;for(let ft=0;ft<x;++ft){let It=Math.max(0,Math.ceil((q-ft)/d)),St=Math.min(u.outWidth,(u.inWidth+q-ft)/d),Pt=ft*$+ht;for(let Vt=0;Vt<u.inChannels;++Vt){let ne=Vt*A+Pt;for(let Gt=0;Gt<u.outChannels;++Gt){let Lt=0;for(let te=0;te<u.batchSize;++te){let Yt=te*G,bo=te*_;for(let Ie=J;Ie<Z;++Ie){let ir=(Y+Ie*m-U)*V+Yt,Cs=Ie*O+bo;for(let Er=st;Er<ut;++Er){let jo=(Q+Er*f-X)*W+ir,Xo=Er*L+Cs;for(let Yo=It;Yo<St;++Yo){let xh=(ft+Yo*d-q)*H+jo,yh=Yo*B+Xo;Lt+=M[xh+Vt]*D[yh+Gt]}}}}I[ne+Gt]=Lt}}}}}return e.makeTensorInfo(b.shape,b.dtype,b.values)}var tE={kernelName:$l,backendName:"cpu",kernelFunc:tW};function eW(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,filter:s}=t,{pad:a,strides:i,inputShape:c}=o;z([n],"conv3dBackpropInputV2");let l=y.computeStrides(n.shape),p=y.computeStrides(s.shape),u=v.computeConv3DInfo(c,s.shape,i,1,a),m=new $t(u.inShape,"float32"),f=m.values,[d,g,h,x]=m.strides,b=e.data.get(n.dataId).values,[I,T,E,$]=l,A=e.data.get(s.dataId).values,[D,_,O,L]=p,{batchSize:B,filterDepth:M,filterHeight:G,filterWidth:V,inChannels:W,inDepth:H,inHeight:U,inWidth:q,outChannels:X,outDepth:Y,outHeight:J,outWidth:Z,strideDepth:et,strideHeight:Q,strideWidth:st}=u,ut=M-1-u.padInfo.front,ht=G-1-u.padInfo.top,ft=V-1-u.padInfo.left;for(let It=0;It<B;++It)for(let St=0;St<W;++St)for(let Pt=0;Pt<H;++Pt){let Vt=Pt-ut,ne=Math.max(0,Math.ceil(Vt/et)),Gt=Math.min(Y,(M+Vt)/et);for(let Lt=0;Lt<U;++Lt){let te=Lt-ht,Yt=Math.max(0,Math.ceil(te/Q)),bo=Math.min(J,(G+te)/Q);for(let Ie=0;Ie<q;++Ie){let Ko=Ie-ft,ir=Math.max(0,Math.ceil(Ko/st)),Cs=Math.min(Z,(V+Ko)/st),Er=0;for(let wo=ne;wo<Gt;++wo){let jo=wo*et-Vt;for(let Xo=Yt;Xo<bo;++Xo){let Yo=Xo*Q-te;for(let Sl=ir;Sl<Cs;++Sl){let xh=Sl*st-Ko,yh=I*It+T*wo+E*Xo+$*Sl,iA=D*(M-1-jo)+_*(G-1-Yo)+O*(V-1-xh)+L*St;for(let _u=0;_u<X;++_u){let cA=b[yh+_u],lA=A[iA+_u];Er+=cA*lA}}}}f[d*It+g*Pt+h*Lt+x*Ie+St]=Er}}}return e.makeTensorInfo(m.shape,m.dtype,m.values)}var eE={kernelName:Us,backendName:"cpu",kernelFunc:eW};var rW=pt("Cos",r=>Math.cos(r)),rE={kernelName:"Cos",backendName:"cpu",kernelFunc:rW};var oW=pt(un,r=>Math.cosh(r)),oE={kernelName:un,backendName:"cpu",kernelFunc:oW};function nW(r){let{inputs:t,backend:e,attrs:o}=r,{image:n,boxes:s,boxInd:a}=t,{cropSize:i,method:c,extrapolationValue:l}=o,[p,u,m,f]=n.shape,d=s.shape[0],[g,h]=i,x=ot([d,g,h,f],"float32"),b=e.data.get(s.dataId).values,I=e.data.get(a.dataId).values,T=e.data.get(n.dataId).values,E=y.computeStrides(n.shape),$=y.computeStrides(x.shape);for(let A=0;A<d;A++){let D=A*4,_=b[D],O=b[D+1],L=b[D+2],B=b[D+3],M=I[A];if(M>=p)continue;let G=g>1?(L-_)*(u-1)/(g-1):0,V=h>1?(B-O)*(m-1)/(h-1):0;for(let W=0;W<g;W++){let H=g>1?_*(u-1)+W*G:.5*(_+L)*(u-1);if(H<0||H>u-1){for(let U=0;U<h;U++)for(let q=0;q<f;q++){let X=q+U*$[2]+W*$[1]+A*$[0];x.values[X]=l}continue}if(c==="bilinear"){let U=Math.floor(H),q=Math.ceil(H),X=H-U;for(let Y=0;Y<h;Y++){let J=h>1?O*(m-1)+Y*V:.5*(O+B)*(m-1);if(J<0||J>m-1){for(let st=0;st<f;st++){let ut=st+Y*$[2]+W*$[1]+A*$[0];x.values[ut]=l}continue}let Z=Math.floor(J),et=Math.ceil(J),Q=J-Z;for(let st=0;st<f;st++){let ut=st+Z*E[2]+U*E[1]+M*E[0],ht=T[ut];ut=st+et*E[2]+U*E[1]+M*E[0];let ft=T[ut];ut=st+Z*E[2]+q*E[1]+M*E[0];let It=T[ut];ut=st+et*E[2]+q*E[1]+M*E[0];let St=T[ut],Pt=ht+(ft-ht)*Q,Vt=It+(St-It)*Q;ut=st+Y*$[2]+W*$[1]+A*$[0],x.values[ut]=Pt+(Vt-Pt)*X}}}else for(let U=0;U<h;++U){let q=h>1?O*(m-1)+U*V:.5*(O+B)*(m-1);if(q<0||q>m-1){for(let J=0;J<f;J++){let Z=J+U*$[2]+W*$[1]+A*$[0];x.values[Z]=l}continue}let X=Math.round(q),Y=Math.round(H);for(let J=0;J<f;J++){let Z=J+X*E[2]+Y*E[1]+M*E[0],et=J+U*$[2]+W*$[1]+A*$[0];x.values[et]=T[Z]}}}}return e.makeTensorInfo(x.shape,x.dtype,x.values)}var nE={kernelName:qs,backendName:"cpu",kernelFunc:nW};function sW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,exclusive:a,reverse:i}=o;z(n,"cumprod");let c=v.getAxesPermutation([s],n.shape.length),l=n;c!=null&&(l=qt({inputs:{x:n},backend:e,attrs:{perm:c}}));let p=v.getInnerMostAxes(1,n.shape.length)[0];if(p!==l.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${p}`);let u=re(l.dtype,"int32"),m=y.makeOnesTypedArray(y.sizeFromShape(l.shape),u),f=e.data.get(l.dataId).values,d=l.shape[l.shape.length-1],g=i?(x,b)=>x+d-b-1:(x,b)=>x+b;for(let x=0;x<f.length;x+=d)for(let b=0;b<d;b++){let I=g(x,b);if(b===0)m[I]=a?1:f[I];else{let T=g(x,b-1);m[I]=a?f[T]*m[T]:f[I]*m[T]}}let h=e.makeTensorInfo(l.shape,u,m);if(c!=null){let x=v.getUndoAxesPermutation(c),b=qt({inputs:{x:h},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(l),b}return h}var sE={kernelName:Ws,backendName:"cpu",kernelFunc:sW};function aW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,exclusive:a,reverse:i}=o;z(n,"cumsum");let c=v.getAxesPermutation([s],n.shape.length),l=n;c!=null&&(l=qt({inputs:{x:n},backend:e,attrs:{perm:c}}));let p=v.getInnerMostAxes(1,n.shape.length)[0];if(p!==l.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${p}`);let u=re(l.dtype,"int32"),m=y.makeZerosTypedArray(y.sizeFromShape(l.shape),u),f=e.data.get(l.dataId).values,d=l.shape[l.shape.length-1],g=i?(x,b)=>x+d-b-1:(x,b)=>x+b;for(let x=0;x<f.length;x+=d)for(let b=0;b<d;b++){let I=g(x,b);if(b===0)m[I]=a?0:f[I];else{let T=g(x,b-1);m[I]=a?f[T]+m[T]:f[I]+m[T]}}let h=e.makeTensorInfo(l.shape,u,m);if(c!=null){let x=v.getUndoAxesPermutation(c),b=qt({inputs:{x:h},backend:e,attrs:{perm:x}});return e.disposeIntermediateTensorInfo(h),e.disposeIntermediateTensorInfo(l),b}return h}var aE={kernelName:Hs,backendName:"cpu",kernelFunc:aW};function iW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,weights:s}=t,{size:a,binaryOutput:i}=o;if(n.shape.length===1){let c=e.data.get(n.dataId).values,l=e.data.get(s.dataId).values,p=ol(c,l,s.dtype,s.shape,a);return e.makeTensorInfo([a],s.dtype,p)}else if(n.shape.length===2){let c=e.bufferSync(n),l=e.bufferSync(s),p=Um(c,l,a,i);return e.makeTensorInfo(p.shape,s.dtype,p.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${n.shape.length}.`)}var iE={kernelName:Ks,backendName:"cpu",kernelFunc:iW};function cW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{blockSize:s,dataFormat:a}=o;y.assert(a==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${a}`);let i=n.shape[0],c=n.shape[1],l=n.shape[2],p=n.shape[3],u=c*s,m=l*s,f=p/(s*s),d=e.data.get(n.dataId).values,g=new Float32Array(i*u*m*f),h=0;for(let x=0;x<i;++x)for(let b=0;b<u;++b){let I=Math.floor(b/s),T=b%s;for(let E=0;E<m;++E){let $=Math.floor(E/s),A=E%s,D=(T*s+A)*f;for(let _=0;_<f;++_){let L=_+D+p*($+l*(I+c*x));g[h++]=d[L]}}}return e.makeTensorInfo([i,u,m,f],n.dtype,g)}var cE={kernelName:js,backendName:"cpu",kernelFunc:cW};function Qy(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s}=t,{strides:a,pad:i,dilations:c,dimRoundingMode:l}=o;z([n,s],"depthwiseConv2DNative");let p=y.computeStrides(n.shape),u=y.computeStrides(s.shape),m=c;m==null&&(m=[1,1]),y.assert(v.eitherStridesOrDilationsAreOne(a,m),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${a} and dilations '${m}'`);let f=v.computeConv2DInfo(n.shape,s.shape,a,m,i,l,!0),{filterHeight:d,filterWidth:g,dilationHeight:h,dilationWidth:x,padInfo:b}=f,I=b.left,T=b.top,E=f.outChannels/f.inChannels,$=new $t(f.outShape,n.dtype),A=e.data.get(n.dataId).values,D=e.data.get(s.dataId).values,_=$.values;for(let O=0;O<f.batchSize;++O){let L=O*p[0],B=O*$.strides[0];for(let M=0;M<f.outHeight;++M){let G=B+M*$.strides[1],V=M*f.strideHeight-T;for(let W=0;W<d;++W){let H=V+W*h;if(H<0||H>=f.inHeight)continue;let U=W*u[0],q=L+H*p[1];for(let X=0;X<f.outWidth;++X){let Y=G+X*$.strides[2],J=X*f.strideWidth-I;for(let Z=0;Z<g;++Z){let et=J+Z*x;if(et<0||et>=f.inWidth)continue;let Q=U+Z*u[1],st=q+et*f.inChannels,ut=Y,ht=Q;for(let ft=0;ft<f.inChannels;++ft){let It=A[st+ft];for(let St=0;St<E;++St)_[ut+St]+=It*D[ht+St];ut+=E,ht+=E}}}}}}return e.makeTensorInfo($.shape,$.dtype,$.values)}var lE={kernelName:Xs,backendName:"cpu",kernelFunc:Qy};function lW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,dy:s}=t,{strides:a,dilations:i,pad:c,dimRoundingMode:l,filterShape:p}=o;z([n,s],"depthwiseConv2dNativeBackpropFilter");let u=v.computeConv2DInfo(n.shape,p,a,i,c,l,!0),{strideHeight:m,strideWidth:f,filterHeight:d,filterWidth:g}=u,h=new $t(u.filterShape,"float32"),x=u.padInfo.left,b=u.padInfo.top,I=u.outChannels/u.inChannels,T=e.data.get(n.dataId).values,E=new $t(n.shape,n.dtype,T),$=e.data.get(s.dataId).values,A=new $t(s.shape,s.dtype,$);for(let D=0;D<d;++D){let _=Math.max(0,Math.ceil((b-D)/m)),O=Math.min(u.outHeight,(u.inHeight+b-D)/m);for(let L=0;L<g;++L){let B=Math.max(0,Math.ceil((x-L)/f)),M=Math.min(u.outWidth,(u.inWidth+x-L)/f);for(let G=0;G<u.outChannels;++G){let V=Math.trunc(G/I),W=G%I,H=0;for(let U=0;U<u.batchSize;++U)for(let q=_;q<O;++q){let X=D+q*m-b;for(let Y=B;Y<M;++Y){let J=L+Y*f-x;H+=E.get(U,X,J,V)*A.get(U,q,Y,G)}}h.set(H,D,L,V,W)}}}return e.makeTensorInfo(h.shape,h.dtype,h.values)}var pE={kernelName:Ys,backendName:"cpu",kernelFunc:lW};function pW(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,filter:s}=t,{strides:a,dilations:i,pad:c,dimRoundingMode:l,inputShape:p}=o;z([n,s],"depthwiseConv2DNativeBackpropInput");let u=y.computeStrides(n.shape),m=y.computeStrides(s.shape),f=v.computeConv2DInfo(p,s.shape,a,i,c,l,!0),d=new $t(f.inShape,"float32"),g=d.values,[h,x,b]=d.strides,I=e.data.get(n.dataId).values,[T,E,$]=u,A=e.data.get(s.dataId).values,[D,_,O]=m,{batchSize:L,filterHeight:B,filterWidth:M,inChannels:G,inHeight:V,inWidth:W,outChannels:H,outHeight:U,outWidth:q,strideHeight:X,strideWidth:Y}=f,J=B-1-f.padInfo.top,Z=M-1-f.padInfo.left,et=H/G;for(let Q=0;Q<L;++Q)for(let st=0;st<G;++st)for(let ut=0;ut<V;++ut){let ht=ut-J,ft=Math.max(0,Math.ceil(ht/X)),It=Math.min(U,(B+ht)/X);for(let St=0;St<W;++St){let Pt=St-Z,Vt=Math.max(0,Math.ceil(Pt/Y)),ne=Math.min(q,(M+Pt)/Y),Gt=0;for(let Lt=ft;Lt<It;++Lt){let te=Lt*X-ht;for(let Yt=Vt;Yt<ne;++Yt){let bo=Yt*Y-Pt,Ie=T*Q+E*Lt+$*Yt,Ko=D*(B-1-te)+_*(M-1-bo)+O*st;for(let ir=0;ir<et;++ir){let Cs=st*et+ir,Er=I[Ie+Cs],wo=A[Ko+ir];Gt+=Er*wo}}}g[h*Q+x*ut+b*St+st]=Gt}}return e.makeTensorInfo(d.shape,d.dtype,d.values)}var uE={kernelName:Zs,backendName:"cpu",kernelFunc:pW};function uW(r){let{inputs:t,backend:e}=r,{x:o}=t,n=y.sizeFromShape(o.shape),s=e.data.get(o.dataId).values,a=ot([n,n],o.dtype),i=a.values;for(let l=0;l<s.length;l++)i[l*n+l]=s[l];let c=[...o.shape,...o.shape];return e.makeTensorInfo(c,a.dtype,a.values)}var mE={kernelName:Qs,backendName:"cpu",kernelFunc:uW};var fE={kernelName:Js,backendName:"cpu",kernelFunc:({inputs:r,backend:t,attrs:e})=>{let{x:o,filter:n}=r,{strides:s,pad:a,dilations:i}=e,c=t,l=c.data.get(o.dataId).values,p=o.shape.length,u=c.data.get(n.dataId).values,m=n.shape.length,{batchSize:f,inHeight:d,inWidth:g,inChannels:h,outHeight:x,outWidth:b,padInfo:I,strideHeight:T,strideWidth:E,filterHeight:$,filterWidth:A,dilationHeight:D,dilationWidth:_,outShape:O}=v.computeDilation2DInfo(o.shape,n.shape,s,a,"NHWC",i),L=y.sizeFromShape(O),B=O.length,M=y.getArrayFromDType(o.dtype,L);for(let V=0;V<f;++V)for(let W=0;W<x;++W){let H=W*T-I.top;for(let U=0;U<b;++U){let q=U*E-I.left;for(let X=0;X<h;++X){let Y=Number.MIN_SAFE_INTEGER;for(let Z=0;Z<$;++Z){let et=H+Z*D;if(et>=0&&et<d)for(let Q=0;Q<A;++Q){let st=q+Q*_;if(st>=0&&st<g){let ut=y.locToIndex([V,et,st,X],p,y.computeStrides(o.shape)),ht=y.locToIndex([Z,Q,X],m,y.computeStrides(n.shape)),ft=l[ut]+u[ht];ft>Y&&(Y=ft)}}}let J=y.locToIndex([V,W,U,X],B,y.computeStrides(O));M[J]=Y}}}return{dataId:c.write(y.toTypedArray(M,o.dtype),O,o.dtype),shape:O,dtype:o.dtype}}};var dE={kernelName:Vu,backendName:"cpu",kernelFunc:({inputs:r,backend:t,attrs:e})=>{let{x:o,filter:n,dy:s}=r,{strides:a,pad:i,dilations:c}=e,l=t,p=y.toNestedArray(o.shape,l.data.get(o.dataId).values),u=y.toNestedArray(n.shape,l.data.get(n.dataId).values),{batchSize:m,inHeight:f,inWidth:d,inChannels:g,outHeight:h,outWidth:x,padInfo:b,strideHeight:I,strideWidth:T,filterHeight:E,filterWidth:$,dilationHeight:A,dilationWidth:D,outShape:_}=v.computeDilation2DInfo(o.shape,n.shape,a,i,"NHWC",c);y.assert(s.rank===_.length,()=>`Error in ${Vu}, dy must have the same rank as output ${_.length}, but got ${s.rank}`);let O=y.toNestedArray(_,l.data.get(s.dataId).values),L=y.makeZerosNestedTypedArray(n.shape,n.dtype);for(let M=0;M<m;++M)for(let G=0;G<h;++G){let V=G*I-b.top;for(let W=0;W<x;++W){let H=W*T-b.left;for(let U=0;U<g;++U){let q=Number.MIN_SAFE_INTEGER,X=0,Y=0;for(let J=0;J<E;++J){let Z=V+J*A;if(Z>=0&&Z<f)for(let et=0;et<$;++et){let Q=H+et*D;if(Q>=0&&Q<d){let st=p[M][Z][Q][U]+u[J][et][U];st>q&&(q=st,X=J,Y=et)}}}L[X][Y][U]+=O[M][G][W][U]}}}return{dataId:l.write(y.toTypedArray(L,o.dtype),n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};var hE={kernelName:Mu,backendName:"cpu",kernelFunc:({inputs:r,backend:t,attrs:e})=>{let{x:o,filter:n,dy:s}=r,{strides:a,pad:i,dilations:c}=e,l=t,p=y.toNestedArray(o.shape,l.data.get(o.dataId).values),u=y.toNestedArray(n.shape,l.data.get(n.dataId).values),{batchSize:m,inHeight:f,inWidth:d,inChannels:g,outHeight:h,outWidth:x,padInfo:b,strideHeight:I,strideWidth:T,filterHeight:E,filterWidth:$,dilationHeight:A,dilationWidth:D,outShape:_}=v.computeDilation2DInfo(o.shape,n.shape,a,i,"NHWC",c);y.assert(s.rank===_.length,()=>`Error in ${Mu}, dy must have the same rank as output ${_.length}, but got ${s.rank}`);let O=y.toNestedArray(_,l.data.get(s.dataId).values),L=y.makeZerosNestedTypedArray(o.shape,o.dtype);for(let M=0;M<m;++M)for(let G=0;G<h;++G){let V=G*I-b.top;for(let W=0;W<x;++W){let H=W*T-b.left;for(let U=0;U<g;++U){let q=Number.MIN_SAFE_INTEGER,X=V<0?0:V,Y=H<0?0:H;for(let J=0;J<E;++J){let Z=V+J*A;if(Z>=0&&Z<f)for(let et=0;et<$;++et){let Q=H+et*D;if(Q>=0&&Q<d){let st=p[M][Z][Q][U]+u[J][et][U];st>q&&(q=st,X=Z,Y=Q)}}}L[M][X][Y][U]+=O[M][G][W][U]}}}return{dataId:l.write(y.toTypedArray(L,o.dtype),o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};function mW(r){let{inputs:t,backend:e,attrs:o}=r,{image:n}=t,{canvas:s,options:a}=o,{contextOptions:i,imageOptions:c}=a||{},l=c?.alpha||1,p=i?.contextType||"2d";if(p!=="2d")throw new Error(`Context type ${i.contextType} is not supported by the CPU backend.`);let u=s.getContext(p,i?.contextAttributes||{});if(u==null)throw new Error(`Could not get the context with ${p} type.`);let[m,f]=n.shape.slice(0,2),d=n.shape.length===2?1:n.shape[2],g=e.data.get(n.dataId).values,h=n.dtype==="float32"?255:1,x=new Uint8ClampedArray(f*m*4);for(let I=0;I<m*f;++I){let T=[0,0,0,255*l];for(let $=0;$<d;$++){let A=g[I*d+$];if(n.dtype==="float32"){if(A<0||A>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${A}.`)}else if(n.dtype==="int32"&&(A<0||A>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${A}.`);d===1?(T[0]=A*h,T[1]=A*h,T[2]=A*h):T[$]=A*h}let E=I*4;x[E+0]=Math.round(T[0]),x[E+1]=Math.round(T[1]),x[E+2]=Math.round(T[2]),x[E+3]=Math.round(T[3])}s.width=f,s.height=m;let b=new ImageData(x,f,m);return u.putImageData(b,0,0),n}var gE={kernelName:Tc,backendName:"cpu",kernelFunc:mW};function qo(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o;z(n,"sum");let i;n.dtype==="bool"?i=Tr({inputs:{x:n},backend:e,attrs:{dtype:"int32"}}):i=$e({inputs:{x:n},backend:e});let c=i.shape.length,l=y.parseAxisParam(s,i.shape),p=v.getAxesPermutation(l,c),u=l,m=i;p!=null&&(m=qt({inputs:{x:i},backend:e,attrs:{perm:p}}),u=v.getInnerMostAxes(u.length,c)),v.assertAxesAreInnerMostDims("sum",u,m.shape.length);let[f,d]=v.computeOutAndReduceShapes(m.shape,u),g=v.upcastType(m.dtype,"int32"),h=el(e,f,g),x=y.sizeFromShape(d),b=e.data.get(h.dataId).values,I=e.data.get(m.dataId).values;for(let T=0;T<b.length;++T){let E=T*x,$=0;for(let A=0;A<x;++A)$+=I[E+A];b[T]=$}if(a){let T=v.expandShapeToKeepDim(h.shape,l),E=h;h=Ct({inputs:{x:h},backend:e,attrs:{shape:T}}),e.disposeIntermediateTensorInfo(E)}return e.disposeIntermediateTensorInfo(i),p!=null&&e.disposeIntermediateTensorInfo(m),h}var xE={kernelName:"Sum",backendName:"cpu",kernelFunc:qo};function fW(r){let{inputs:t,backend:e,attrs:o}=r,{equation:n}=o,s=t,{allDims:a,summedDims:i,idDims:c}=v.decodeEinsumEquation(n,s.length);v.checkEinsumDimSizes(a.length,c,s);let{path:l,steps:p}=v.getEinsumComputePath(i,c),u=p.length,m=null,f=a.length,d=[];for(let g=0;g<u;++g){for(let h of p[g]){let{permutationIndices:x,expandDims:b}=v.getEinsumPermutation(f,c[h]),I;v.isIdentityPermutation(x)?I=s[h]:(I=qt({inputs:{x:s[h]},backend:e,attrs:{perm:x}}),d.push(I));let T=I.shape.slice();for(let E=0;E<b.length;++E)T.splice(b[E],0,1);y.arraysEqual(I.shape,T)||(I=Ct({inputs:{x:I},backend:e,attrs:{shape:T}}),d.push(I)),m===null?m=I:(m=ac({inputs:{a:I,b:m},backend:e}),d.push(m))}g<u-1&&(l[g]>=0&&(m=qo({inputs:{x:m},backend:e,attrs:{axis:l[g]-(a.length-f),keepDims:!1}}),d.push(m)),f--)}for(let g of d)g!==m&&e.disposeIntermediateTensorInfo(g);return m}var yE={kernelName:ta,backendName:"cpu",kernelFunc:fW};function dW(r){let{inputs:t,backend:e}=r,{dy:o,y:n}=t;z([o,n],"eluGrad");let s=new Float32Array(y.sizeFromShape(n.shape)),a=e.data.get(n.dataId).values,i=e.data.get(o.dataId).values;for(let c=0;c<a.length;++c){let l=a[c];l>=0?s[c]=i[c]:s[c]=i[c]*(l+1)}return e.makeTensorInfo(n.shape,"float32",s)}var bE={kernelName:Al,backendName:"cpu",kernelFunc:dW};var hW=v.ERF_P,gW=v.ERF_A1,xW=v.ERF_A2,yW=v.ERF_A3,bW=v.ERF_A4,wW=v.ERF_A5,CW=pt("Erf",r=>{let t=Math.sign(r),e=Math.abs(r),o=1/(1+hW*e);return t*(1-((((wW*o+bW)*o+yW)*o+xW)*o+gW)*o*Math.exp(-e*e))}),wE={kernelName:"Erf",backendName:"cpu",kernelFunc:CW};function gl(r){let{inputs:t,backend:e,attrs:o}=r,{input:n}=t,{dim:s}=o,a=n.shape.length,i=n.shape.slice(),c=s;return s<0&&(y.assert(-(a+1)<=s,()=>`Axis must be in the interval [${-(a+1)}, ${a}]`),c=a+s+1),i.splice(c,0,1),Ct({inputs:{x:n},backend:e,attrs:{shape:i}})}var CE={kernelName:na,backendName:"cpu",kernelFunc:gl};var TW=wt((r,t)=>r/t),Tu=Nt(mn,TW),Iu={kernelName:mn,backendName:"cpu",kernelFunc:Tu};function Bd(r,t,e){let o=r.shape,n=o[0],s=o[1],a=e.data.get(r.dataId),i=a.complexTensorInfos.real,c=a.complexTensorInfos.imag,l=[n,s],p=y.sizeFromShape(l),u=y.getTypedArrayFromDType("float32",p),m=y.getTypedArrayFromDType("float32",p);for(let h=0;h<n;h++){let x=Sr({inputs:{x:i},backend:e,attrs:{begin:[h,0],size:[1,s]}}),b=Sr({inputs:{x:c},backend:e,attrs:{begin:[h,0],size:[1,s]}}),I=me({inputs:{real:x,imag:b},backend:e}),{real:T,imag:E}=IW(I,t,e),$=v.mergeRealAndImagArrays(T,E);for(let A=0;A<s;A++){let D=v.getComplexWithIndex($,A);u[h*s+A]=D.real,m[h*s+A]=D.imag}e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(I)}let f=e.makeTensorInfo(l,"float32",u),d=e.makeTensorInfo(l,"float32",m),g=me({inputs:{real:f,imag:d},backend:e});return e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(d),g}function IW(r,t,e){let o=y.sizeFromShape(r.shape),n=e.data.get(r.dataId),s=e.data.get(n.complexTensorInfos.real.dataId).values,a=e.data.get(n.complexTensorInfos.imag.dataId).values;if(SW(o)){let i=Jy(s,a,o,t,e),c=[r.shape[0],r.shape[1]];if(t){let l=e.makeTensorInfo(c,"float32",i.real),p=e.makeTensorInfo(c,"float32",i.imag),u=e.makeTensorInfo([],"float32",y.createScalarValue(o,"float32")),m=$e({inputs:{x:u},backend:e}),f=Iu.kernelFunc({inputs:{a:l,b:u},backend:e}),d=Iu.kernelFunc({inputs:{a:p,b:m},backend:e}),g=e.data.get(f.dataId).values,h=e.data.get(d.dataId).values;return e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(d),{real:g,imag:h}}return i}else{let i=v.mergeRealAndImagArrays(s,a),c=vW(i,o,t);return v.splitRealAndImagArrays(c)}}function SW(r){return(r&r-1)===0}function Jy(r,t,e,o,n){if(e===1)return{real:r,imag:t};let s=v.mergeRealAndImagArrays(r,t),a=e/2,i=v.complexWithEvenIndex(s),c=i.real,l=i.imag,p=[c.length],u=n.makeTensorInfo(p,"float32",c),m=n.makeTensorInfo(p,"float32",l),f=me({inputs:{real:u,imag:m},backend:n}),d=v.complexWithOddIndex(s),g=d.real,h=d.imag,x=[g.length],b=n.makeTensorInfo(x,"float32",g),I=n.makeTensorInfo(x,"float32",h),T=me({inputs:{real:b,imag:I},backend:n}),E=Jy(c,l,a,o,n),$=E.real,A=E.imag,D=[$.length],_=n.makeTensorInfo(D,"float32",$),O=n.makeTensorInfo(D,"float32",A),L=me({inputs:{real:_,imag:O},backend:n}),B=Jy(g,h,a,o,n),M=B.real,G=B.imag,V=[M.length],W=n.makeTensorInfo(V,"float32",M),H=n.makeTensorInfo(V,"float32",G),U=me({inputs:{real:W,imag:H},backend:n}),q=v.exponents(e,o),X=[q.real.length],Y=n.makeTensorInfo(X,"float32",q.real),J=n.makeTensorInfo(X,"float32",q.imag),Z=me({inputs:{real:Y,imag:J},backend:n}),et=ac({inputs:{a:Z,b:U},backend:n}),Q=go({inputs:{a:L,b:et},backend:n}),st=mu({inputs:{a:L,b:et},backend:n}),ut=Cr({inputs:{input:Q},backend:n}),ht=Cr({inputs:{input:st},backend:n}),ft=yo({inputs:{input:Q},backend:n}),It=yo({inputs:{input:st},backend:n}),St=xs({inputs:[ut,ht],backend:n,attrs:{axis:0}}),Pt=xs({inputs:[ft,It],backend:n,attrs:{axis:0}}),Vt=n.data.get(St.dataId).values,ne=n.data.get(Pt.dataId).values;return n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(b),n.disposeIntermediateTensorInfo(I),n.disposeIntermediateTensorInfo(T),n.disposeIntermediateTensorInfo(_),n.disposeIntermediateTensorInfo(O),n.disposeIntermediateTensorInfo(L),n.disposeIntermediateTensorInfo(W),n.disposeIntermediateTensorInfo(H),n.disposeIntermediateTensorInfo(U),n.disposeIntermediateTensorInfo(Y),n.disposeIntermediateTensorInfo(J),n.disposeIntermediateTensorInfo(Z),n.disposeIntermediateTensorInfo(et),n.disposeIntermediateTensorInfo(Q),n.disposeIntermediateTensorInfo(st),n.disposeIntermediateTensorInfo(ut),n.disposeIntermediateTensorInfo(ft),n.disposeIntermediateTensorInfo(ht),n.disposeIntermediateTensorInfo(It),n.disposeIntermediateTensorInfo(St),n.disposeIntermediateTensorInfo(Pt),{real:Vt,imag:ne}}function vW(r,t,e){let o=new Float32Array(t*2);for(let n=0;n<t;n++){let s=0,a=0;for(let i=0;i<t;i++){let c=v.exponent(n*i,t,e),l=v.getComplexWithIndex(r,i);s+=l.real*c.real-l.imag*c.imag,a+=l.real*c.imag+l.imag*c.real}e&&(s/=t,a/=t),v.assignToTypedArray(o,s,a,n)}return o}function NW(r){let{inputs:t,backend:e}=r,{input:o}=t,n=y.sizeFromShape(o.shape),s=o.shape[o.shape.length-1],a=n/s,i=Ct({inputs:{x:o},backend:e,attrs:{shape:[a,s]}}),c=Bd(i,!1,e),l=Ct({inputs:{x:c},backend:e,attrs:{shape:o.shape}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(c),l}var TE={kernelName:"FFT",backendName:"cpu",kernelFunc:NW};function Su(r){let{backend:t,attrs:e}=r,{shape:o,value:n,dtype:s}=e,a=s||y.inferDtype(n),i=y.getArrayFromDType(a,y.sizeFromShape(o));return kW(i,n,a),t.makeTensorInfo(o,a,i)}var IE={kernelName:sa,backendName:"cpu",kernelFunc:Su};function kW(r,t,e){r.fill(t)}var SE={kernelName:aa,backendName:"cpu",kernelFunc:({inputs:r,attrs:t,backend:e})=>{let{image:o}=r,n=e,s=y.getTypedArrayFromDType(o.dtype,y.sizeFromShape(o.shape)),[a,i,c,l]=o.shape,p=n.data.get(o.dataId).values;for(let m=0;m<a;m++){let f=m*c*i*l;for(let d=0;d<i;d++){let g=d*(c*l);for(let h=0;h<c;h++){let x=h*l;for(let b=0;b<l;b++){let I=Math.round(c-h-1),T=f+g+x+b,E=p[T];if(I>=0&&I<c){let $=I*l,A=f+g+$+b;E=p[A]}s[T]=E}}}}return{dataId:n.write(s,o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};function EW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s,bias:a,preluActivationWeights:i}=t,{strides:c,pad:l,dataFormat:p,dilations:u,dimRoundingMode:m,activation:f,leakyreluAlpha:d}=o,g=Zy({inputs:{x:n,filter:s},backend:e,attrs:{strides:c,pad:l,dataFormat:p,dilations:u,dimRoundingMode:m}});if(a){let h=g;if(p==="NCHW"&&a.shape.length===1&&a.shape[0]!==1){let x=Ct({inputs:{x:a},backend:e,attrs:{shape:[a.shape[0],1,1]}});g=go({inputs:{a:g,b:x},backend:e}),e.disposeIntermediateTensorInfo(x)}else g=go({inputs:{a:g,b:a},backend:e});e.disposeIntermediateTensorInfo(h)}if(f){let h=g;if(p==="NCHW"&&f==="prelu"&&i.shape.length===1&&i.shape[0]!==1){let x=Ct({inputs:{x:i},backend:e,attrs:{shape:[i.shape[0],1,1]}});g=fc(e,g,f,x,d),e.disposeIntermediateTensorInfo(x)}else g=fc(e,g,f,i,d);e.disposeIntermediateTensorInfo(h)}return g}var vE={kernelName:jn,backendName:"cpu",kernelFunc:EW};function $W(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,filter:s,bias:a,preluActivationWeights:i}=t,{strides:c,pad:l,dataFormat:p,dilations:u,dimRoundingMode:m,activation:f,leakyreluAlpha:d}=o,g=Qy({inputs:{x:n,filter:s},backend:e,attrs:{strides:c,pad:l,dataFormat:p,dilations:u,dimRoundingMode:m}});if(a){let h=g;g=go({inputs:{a:g,b:a},backend:e}),e.disposeIntermediateTensorInfo(h)}if(f){let h=g;g=fc(e,g,f,i,d),e.disposeIntermediateTensorInfo(h)}return g}var NE={kernelName:Xn,backendName:"cpu",kernelFunc:$W};function AW(r){let{inputs:t,backend:e}=r,{params:o,indices:n}=t,s=y.sizeFromShape(o.shape),a=n.shape,i=a[a.length-1],[c,l,p,u]=v.prepareAndValidate(o,n);if(l===0)return e.makeTensorInfo(c,o.dtype,[]);let m=e.data.get(n.dataId).values,f=e.bufferSync(o),d=Wm(m,f,o.dtype,l,i,p,u,o.shape,s);return e.makeTensorInfo(c,o.dtype,d.values)}var kE={kernelName:la,backendName:"cpu",kernelFunc:AW};function RW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,indices:s}=t,{axis:a,batchDims:i}=o;z([n,s],"gatherV2");let c=y.parseAxisParam(a,n.shape)[0],l=e.data.get(s.dataId).values,p=n.shape[c];for(let T=0;T<l.length;++T){let E=l[T];y.assert(E<=p-1&&E>=0,()=>`GatherV2: the index value ${E} is not in [0, ${p-1}]`)}let u=i;i==null&&(u=0);let m=y.sizeFromShape(s.shape),f=v.segment_util.collectGatherOpShapeInfo(n,s,c,u),d=Ct({inputs:{x:n},backend:e,attrs:{shape:[f.batchSize,f.outerSize,f.dimSize,f.sliceSize]}}),g=Ct({inputs:{x:s},backend:e,attrs:{shape:[f.batchSize,m/f.batchSize]}}),h=[f.batchSize,f.outerSize,m/f.batchSize,f.sliceSize],x=e.bufferSync(g),b=e.bufferSync(d),I=Hm(b,x,h);return e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(g),e.makeTensorInfo(f.outputShape,I.dtype,I.values)}var EE={kernelName:ca,backendName:"cpu",kernelFunc:RW};function DW(r){let{inputs:t,backend:e}=r,{input:o}=t,n=y.sizeFromShape(o.shape),s=o.shape[o.shape.length-1],a=n/s,i=Ct({inputs:{x:o},backend:e,attrs:{shape:[a,s]}}),c=Bd(i,!0,e),l=Ct({inputs:{x:c},backend:e,attrs:{shape:o.shape}});return e.disposeIntermediateTensorInfo(i),e.disposeIntermediateTensorInfo(c),l}var $E={kernelName:pa,backendName:"cpu",kernelFunc:DW};var FW=pt(bn,r=>Number.isFinite(r)?1:0,"bool"),AE={kernelName:bn,backendName:"cpu",kernelFunc:FW};var _W=pt(wn,r=>Math.abs(r)===1/0?1:0,"bool"),RE={kernelName:wn,backendName:"cpu",kernelFunc:_W};var OW=pt(Cn,r=>Number.isNaN(r)?1:0,"bool"),DE={kernelName:Cn,backendName:"cpu",kernelFunc:OW};function PW(r){let{backend:t,attrs:e}=r,{start:o,stop:n,num:s}=e,a=qm(o,n,s);return t.makeTensorInfo([a.length],"float32",a)}var FE={kernelName:fa,backendName:"cpu",kernelFunc:PW};var LW=pt(Sn,r=>Math.log1p(r)),_E={kernelName:Sn,backendName:"cpu",kernelFunc:LW};var BW=wt((r,t)=>r&&t),MW=Nt(vn,BW,null,"bool"),OE={kernelName:vn,backendName:"cpu",kernelFunc:MW};var VW=pt(Nn,r=>r?0:1,"bool"),PE={kernelName:Nn,backendName:"cpu",kernelFunc:VW};var GW=wt((r,t)=>r||t),UW=Nt(kn,GW,null,"bool"),LE={kernelName:kn,backendName:"cpu",kernelFunc:UW};function zW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{depthRadius:s,bias:a,alpha:i,beta:c}=o;z(n,"LRN");let l=n.shape[3],p=l-1,u=e.data.get(n.dataId).values,m=y.sizeFromShape(n.shape),f=new Float32Array(m);function d(g){let h=g%l,x=g-h+Math.max(0,h-s),b=g-h+Math.min(h+s,p),I=0;for(;x<=b;x++){let T=u[x];I+=T*T}return I}for(let g=0;g<m;g++){let h=d(g),x=u[g]*Math.pow(a+i*h,-c);f[g]=x}return e.makeTensorInfo(n.shape,n.dtype,f)}var BE={kernelName:"LRN",backendName:"cpu",kernelFunc:zW};function WW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,y:s,dy:a}=t,{depthRadius:i,bias:c,alpha:l,beta:p}=o;z(a,"LRNGrad");let u=y.sizeFromShape(a.shape),m=a.shape[3],f=e.data.get(a.dataId).values,d=e.data.get(n.dataId).values,g=e.data.get(s.dataId).values,h=new Float32Array(u),x=u;for(let b=0;b<x;b++){let I=b%m,T=b-I+Math.max(0,I-i),E=b-I+Math.min(m,I+i+1),$=0;for(let A=T;A<E;A++)$+=Math.pow(d[A],2);$=l*$+c;for(let A=T;A<E;A++){let D=-2*l*p*d[A]*g[b]/$;b===A&&(D+=Math.pow($,-p)),D*=f[b],h[A]+=D}}return e.makeTensorInfo(a.shape,n.dtype,h)}var ME={kernelName:Rl,backendName:"cpu",kernelFunc:WW};function tb(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{reductionIndices:s,keepDims:a}=o,i=e,c=n.shape,l=c.length,p=y.parseAxisParam(s,c),u=p,m=v.getAxesPermutation(u,l),f=i.data.get(n.dataId).values;if(m!=null){let T=new Array(l);for(let E=0;E<T.length;E++)T[E]=c[m[E]];f=nl(f,c,n.dtype,m,T),u=v.getInnerMostAxes(u.length,l),c=T}z(n,"max"),v.assertAxesAreInnerMostDims("max",u,l);let[d,g]=v.computeOutAndReduceShapes(c,u),h=y.sizeFromShape(g),x=Km(f,h,d,n.dtype),b=i.write(x,d,n.dtype),I=d;return a&&(I=v.expandShapeToKeepDim(d,p)),{dataId:b,shape:I,dtype:n.dtype}}var VE={kernelName:"Max",backendName:"cpu",kernelFunc:tb};function HW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t;z(n,"maxPool");let{filterSize:s,strides:a,pad:i,dimRoundingMode:c}=o,l=1;y.assert(v.eitherStridesOrDilationsAreOne(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let p=v.computePool2DInfo(n.shape,s,a,l,i,c),u;if(p.filterWidth===1&&p.filterHeight===1&&y.arraysEqual(p.inShape,p.outShape))u=$e({inputs:{x:n},backend:e});else{let m=e.data.get(n.dataId).values,f=y.computeStrides(n.shape),d=hl(m,n.shape,n.dtype,f,p,"max");u=e.makeTensorInfo(p.outShape,n.dtype,d.values)}return u}var GE={kernelName:ha,backendName:"cpu",kernelFunc:HW};function qW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{filterSize:s,strides:a,pad:i,dimRoundingMode:c,dataFormat:l}=o;z(n,"maxPool3d");let p=v.computePool3DInfo(n.shape,s,a,1,i,c,l),u=e.data.get(n.dataId).values,m=Ld(u,n.shape,n.dtype,y.computeStrides(n.shape),p,"max");return e.makeTensorInfo(m.shape,"float32",m.values)}var UE={kernelName:ga,backendName:"cpu",kernelFunc:qW};function KW(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s}=t,{filterSize:a,strides:i,pad:c,dimRoundingMode:l}=o;z([n,s],"maxPool3DGrad");let p=v.computePool3DInfo(s.shape,a,i,1,c,l),u=e.bufferSync(s),m=Lk(u,p),f=p.strideDepth,d=p.strideHeight,g=p.strideWidth,h=p.dilationDepth,x=p.dilationHeight,b=p.dilationWidth,I=p.effectiveFilterDepth,T=p.effectiveFilterHeight,E=p.effectiveFilterWidth,$=I-1-p.padInfo.front,A=E-1-p.padInfo.left,D=T-1-p.padInfo.top,_=ot(s.shape,"float32"),O=e.bufferSync(n);for(let L=0;L<p.batchSize;++L)for(let B=0;B<p.inChannels;++B)for(let M=0;M<p.inDepth;++M)for(let G=0;G<p.inHeight;++G)for(let V=0;V<p.inWidth;++V){let W=M-$,H=G-D,U=V-A,q=0;for(let X=0;X<I;X+=h){let Y=(W+X)/f;if(!(Y<0||Y>=p.outDepth||Math.floor(Y)!==Y))for(let J=0;J<T;J+=x){let Z=(H+J)/d;if(!(Z<0||Z>=p.outHeight||Math.floor(Z)!==Z))for(let et=0;et<E;et+=b){let Q=(U+et)/g;if(Q<0||Q>=p.outWidth||Math.floor(Q)!==Q)continue;let st=I*T*E-1-m.get(L,Y,Z,Q,B),ut=X*T*E+J*E+et,ht=st===ut?1:0;if(ht===0)continue;let ft=O.get(L,Y,Z,Q,B);q+=ft*ht}}}_.set(q,L,M,G,V,B)}return e.makeTensorInfo(_.shape,_.dtype,_.values)}var zE={kernelName:Fl,backendName:"cpu",kernelFunc:KW};function jW(r){let{inputs:t,backend:e,attrs:o}=r,{dy:n,input:s,output:a}=t,i=s;z([s,a],"maxPoolGrad");let{filterSize:c,strides:l,pad:p,dimRoundingMode:u}=o,m=v.computePool2DInfo(i.shape,c,l,1,p,u),f=e.data.get(i.dataId).values,d=ot(m.outShape,i.dtype,Pd(f,i.shape,i.dtype,m).values),g=m.strideHeight,h=m.strideWidth,x=m.dilationHeight,b=m.dilationWidth,I=m.effectiveFilterHeight,T=m.effectiveFilterWidth,E=T-1-m.padInfo.left,$=I-1-m.padInfo.top,A=ot(i.shape,"float32"),D=e.data.get(n.dataId).values,_=ot(n.shape,"float32",D);for(let O=0;O<m.batchSize;++O)for(let L=0;L<m.inChannels;++L)for(let B=0;B<m.inHeight;++B)for(let M=0;M<m.inWidth;++M){let G=B-$,V=M-E,W=0;for(let H=0;H<I;H+=x){let U=(G+H)/g;if(!(U<0||U>=m.outHeight||Math.floor(U)!==U))for(let q=0;q<T;q+=b){let X=(V+q)/h;if(X<0||X>=m.outWidth||Math.floor(X)!==X)continue;let Y=I*T-1-d.get(O,U,X,L),J=H*T+q,Z=Y===J?1:0;if(Z===0)continue;let et=_.get(O,U,X,L);W+=et*Z}}A.set(W,O,B,M,L)}return e.makeTensorInfo(A.shape,A.dtype,A.values)}var WE={kernelName:Dl,backendName:"cpu",kernelFunc:jW};function HE(r,t,e,o,n){let s=y.computeStrides(t),a=hl(r,t,e,s,n,"max"),i=Pd(r,t,e,n,!0,o);return[a.values,i.values]}var qE={kernelName:xa,backendName:"cpu",kernelFunc:({inputs:r,attrs:t,backend:e})=>{let{x:o}=r,{filterSize:n,strides:s,pad:a,includeBatchInIndex:i}=t,c=e;z(o,"MaxPoolWithArgmax");let l=c.data.get(o.dataId).values,p=v.computePool2DInfo(o.shape,n,s,[1,1],a),[u,m]=HE(l,o.shape,o.dtype,i,p),f=c.write(u,p.outShape,o.dtype),d=c.write(m,p.outShape,o.dtype);return[{dataId:f,shape:p.outShape,dtype:o.dtype},{dataId:d,shape:p.outShape,dtype:"int32"}]}};function XW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o,i=y.parseAxisParam(s,n.shape),l=v.computeOutAndReduceShapes(n.shape,i)[1],p=y.sizeFromShape(l),u=[],m=e.makeTensorInfo([],"float32",new Float32Array([p]));u.push(m);let f=Tr({inputs:{x:n},backend:e,attrs:{dtype:"float32"}});u.push(f);let d=Tu({inputs:{a:f,b:m},backend:e});u.push(d);let g=qo({inputs:{x:d},backend:e,attrs:{axis:s,keepDims:a}});return u.forEach(h=>e.disposeIntermediateTensorInfo(h)),g}var KE={kernelName:ya,backendName:"cpu",kernelFunc:XW};function YW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{axis:s,keepDims:a}=o;z(n,"min");let i=y.parseAxisParam(s,n.shape),c=i,l=v.getAxesPermutation(c,n.shape.length),p=n;l!=null&&(p=qt({inputs:{x:n},backend:e,attrs:{perm:l}}),c=v.getInnerMostAxes(c.length,n.shape.length)),v.assertAxesAreInnerMostDims("min",c,p.shape.length);let[u,m]=v.computeOutAndReduceShapes(p.shape,c),f=y.sizeFromShape(m),d=y.makeZerosTypedArray(y.sizeFromShape(u),p.dtype),g=e.data.get(p.dataId).values;for(let x=0;x<d.length;++x){let b=x*f,I=g[b];for(let T=0;T<f;++T){let E=g[b+T];(Number.isNaN(E)||E<I)&&(I=E)}d[x]=I}l!=null&&e.disposeIntermediateTensorInfo(p);let h=e.makeTensorInfo(u,p.dtype,d);if(a){let x=v.expandShapeToKeepDim(u,i),b=Ct({inputs:{x:h},backend:e,attrs:{shape:x}});return e.disposeIntermediateTensorInfo(h),b}return h}var jE={kernelName:"Min",backendName:"cpu",kernelFunc:YW};function ZW(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{paddings:s,mode:a}=o;z(n,"mirrorPad");let i=s.map((I,T)=>I[0]+n.shape[T]+I[1]),c=s.map(I=>I[0]),l=s.map((I,T)=>I[0]+n.shape[T]),p=a==="reflect"?0:1,u=e.data.get(n.dataId).values,m=n.shape.length,f=y.computeStrides(n.shape),d=y.sizeFromShape(i),g=i.length,h=y.computeStrides(i),x=y.getTypedArrayFromDType(n.dtype,d);for(let I=0;I<d;I++){let T=y.indexToLoc(I,g,h);for(let $=0;$<g;$++)T[$]<c[$]?T[$]=c[$]*2-T[$]-p:T[$]>=l[$]&&(T[$]=(l[$]-1)*2-T[$]+p);T=T.map(($,A)=>$-c[A]);let E=y.locToIndex(T,m,f);x[I]=u[E]}return{dataId:e.write(x,i,n.dtype),shape:i,dtype:n.dtype}}var XE={kernelName:ba,backendName:"cpu",kernelFunc:ZW};var QW=wt(((r,t)=>{let e=r%t;return r<0&&t<0||r>=0&&t>=0?e:(e+t)%t})),JW=Nt("Mod",QW),YE={kernelName:"Mod",backendName:"cpu",kernelFunc:JW};var QE=Ou(Hg());function eb(r){let{inputs:t,backend:e,attrs:o}=r,{logits:n}=t,{dim:s}=o,a=n.shape.length,i=s;if(i===-1&&(i=a-1),i!==a-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${a} and dim was ${i}`);let c=y.parseAxisParam([i],n.shape),l=tb({inputs:{x:n},backend:e,attrs:{reductionIndices:c,keepDims:!1}}),p=v.expandShapeToKeepDim(l.shape,c),u=Ct({inputs:{x:l},backend:e,attrs:{shape:p}}),m=mu({inputs:{a:n,b:u},backend:e}),f=ty({inputs:{x:m},backend:e}),d=qo({inputs:{x:f},backend:e,attrs:{axis:c,keepDims:!1}}),g=Ct({inputs:{x:d},backend:e,attrs:{shape:p}}),h=Tu({inputs:{a:f,b:g},backend:e});return e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(m),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(d),e.disposeIntermediateTensorInfo(g),h}var ZE={kernelName:Xa,backendName:"cpu",kernelFunc:eb};function t4(r){let{inputs:t,backend:e,attrs:o}=r,{logits:n}=t,{numSamples:s,seed:a,normalized:i}=o;z(n,"multinomial");let c=i?n:eb({inputs:{logits:n},backend:e,attrs:{dim:-1}}),l=c.shape[0],p=c.shape[1],u=e.data.get(c.dataId).values,m=[l,s],f=y.makeZerosTypedArray(y.sizeFromShape(m),"int32");for(let d=0;d<l;++d){let g=d*p,h=new Float32Array(p-1);h[0]=u[g];for(let I=1;I<h.length;++I)h[I]=h[I-1]+u[g+I];let x=QE.alea(a.toString()),b=d*s;for(let I=0;I<s;++I){let T=x();f[b+I]=h.length;for(let E=0;E<h.length;E++)if(T<h[E]){f[b+I]=E;break}}}return i||e.disposeIntermediateTensorInfo(c),e.makeTensorInfo(m,"int32",f)}var JE={kernelName:Ca,backendName:"cpu",kernelFunc:t4};var e4=be.nonMaxSuppressionV3Impl;function r4(r){let{inputs:t,backend:e,attrs:o}=r,{boxes:n,scores:s}=t,{maxOutputSize:a,iouThreshold:i,scoreThreshold:c}=o;z(n,"NonMaxSuppression");let l=e.data.get(n.dataId).values,p=e.data.get(s.dataId).values,{selectedIndices:u}=e4(l,p,a,i,c);return e.makeTensorInfo([u.length],"int32",new Int32Array(u))}var t$={kernelName:Ta,backendName:"cpu",kernelFunc:r4};var o4=be.nonMaxSuppressionV4Impl;function n4(r){let{inputs:t,backend:e,attrs:o}=r,{boxes:n,scores:s}=t,{maxOutputSize:a,iouThreshold:i,scoreThreshold:c,padToMaxOutputSize:l}=o;z(n,"NonMaxSuppressionPadded");let p=e.data.get(n.dataId).values,u=e.data.get(s.dataId).values,{selectedIndices:m,validOutputs:f}=o4(p,u,a,i,c,l);return[e.makeTensorInfo([m.length],"int32",new Int32Array(m)),e.makeTensorInfo([],"int32",new Int32Array([f]))]}var e$={kernelName:Ia,backendName:"cpu",kernelFunc:n4};var s4=be.nonMaxSuppressionV5Impl;function a4(r){let{inputs:t,backend:e,attrs:o}=r,{boxes:n,scores:s}=t,{maxOutputSize:a,iouThreshold:i,scoreThreshold:c,softNmsSigma:l}=o;z(n,"NonMaxSuppressionWithScore");let p=e.data.get(n.dataId).values,u=e.data.get(s.dataId).values,m=a,f=i,d=c,g=l,{selectedIndices:h,selectedScores:x}=s4(p,u,m,f,d,g);return[e.makeTensorInfo([h.length],"int32",new Int32Array(h)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}var r$={kernelName:Sa,backendName:"cpu",kernelFunc:a4};function i4(r){let{inputs:t,backend:e,attrs:o}=r,{indices:n}=t,{dtype:s,depth:a,onValue:i,offValue:c}=o;z(n,"oneHot");let l=y.sizeFromShape(n.shape),p=new Float32Array(l*a);p.fill(c);let u=e.data.get(n.dataId).values;for(let m=0;m<l;++m)u[m]>=0&&u[m]<a&&(p[m*a+u[m]]=i);return e.makeTensorInfo([...n.shape,a],s,p)}var o$={kernelName:Na,backendName:"cpu",kernelFunc:i4};function vu(r){let{inputs:t,backend:e}=r,{x:o}=t;if(o.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(o.dtype==="complex64"){let n=Cr({inputs:{input:o},backend:e}),s=vu({inputs:{x:n},backend:e}),a=yo({inputs:{input:o},backend:e}),i=vu({inputs:{x:a},backend:e}),c=me({inputs:{real:s,imag:i},backend:e});return e.disposeIntermediateTensorInfo(n),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(i),c}else return Su({backend:e,attrs:{shape:o.shape,value:0,dtype:o.dtype}})}var n$={kernelName:mi,backendName:"cpu",kernelFunc:vu};function s$(r){let{inputs:t,backend:e}=r,{x:o}=t;if(o.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(o.dtype==="complex64"){let n=Cr({inputs:{input:o},backend:e}),s=s$({inputs:{x:n},backend:e}),a=yo({inputs:{input:o},backend:e}),i=vu({inputs:{x:a},backend:e}),c=me({inputs:{real:s,imag:i},backend:e});return e.disposeIntermediateTensorInfo(n),e.disposeIntermediateTensorInfo(s),e.disposeIntermediateTensorInfo(a),e.disposeIntermediateTensorInfo(i),c}else return Su({backend:e,attrs:{shape:o.shape,value:1,dtype:o.dtype}})}var a$={kernelName:va,backendName:"cpu",kernelFunc:s$};function rb(r){let{inputs:t,backend:e,attrs:o}=r,{axis:n}=o;if(t.length===1)return gl({inputs:{input:t[0]},backend:e,attrs:{dim:n}});let s=t[0].shape,a=t[0].dtype;t.forEach(p=>{y.assertShapesMatch(s,p.shape,"All tensors passed to stack must have matching shapes"),y.assert(a===p.dtype,()=>"All tensors passed to stack must have matching dtypes")});let i=[],c=t.map(p=>{let u=gl({inputs:{input:p},backend:e,attrs:{dim:n}});return i.push(u),u}),l=xs({inputs:c,backend:e,attrs:{axis:n}});return i.forEach(p=>e.disposeIntermediateTensorInfo(p)),l}var i$={kernelName:ka,backendName:"cpu",kernelFunc:rb};function c4(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{paddings:s,constantValue:a}=o;z(n,"pad");let i=s.map((b,I)=>b[0]+n.shape[I]+b[1]),c=s.map(b=>b[0]),l=e.data.get(n.dataId).values,p=y.sizeFromShape(n.shape),u=n.shape.length,m=y.computeStrides(n.shape),f=y.sizeFromShape(i),d=i.length,g=y.computeStrides(i),h=y.getTypedArrayFromDType(n.dtype,f);a!==0&&h.fill(a);for(let b=0;b<p;b++){let T=y.indexToLoc(b,u,m).map(($,A)=>$+c[A]),E=y.locToIndex(T,d,g);h[E]=l[b]}return{dataId:e.write(h,i,n.dtype),shape:i,dtype:n.dtype}}var Md={kernelName:Ea,backendName:"cpu",kernelFunc:c4};var l4=wt((r,t)=>Math.pow(r,t)),p4=Nt("Pow",l4),c$={kernelName:"Pow",backendName:"cpu",kernelFunc:p4};function u4(r){let{inputs:t,backend:e,attrs:o}=r,{paramsNestedSplits:n,paramsDenseValues:s,indices:a}=t,{outputRaggedRank:i}=o,c=n.map(x=>e.data.get(x.dataId).values),l=n.map(x=>x.shape),p=e.data.get(s.dataId).values,u=e.data.get(a.dataId).values,[m,f,d]=jm(c,l,p,s.shape,s.dtype,u,a.shape,i),g=m.map(x=>e.makeTensorInfo([x.length],"int32",x)),h=e.makeTensorInfo(d,s.dtype,f);return g.concat([h])}var l$={kernelName:Da,backendName:"cpu",kernelFunc:u4};function m4(r){let{inputs:t,backend:e}=r,{starts:o,limits:n,deltas:s}=t,a=e.data.get(o.dataId).values,i=e.data.get(n.dataId).values,c=e.data.get(s.dataId).values,[l,p]=Xm(a,o.shape,o.dtype,i,n.shape,c,s.shape),u=e.makeTensorInfo([l.length],"int32",l),m=e.makeTensorInfo([p.length],o.dtype,p);return[u,m]}var p$={kernelName:Fa,backendName:"cpu",kernelFunc:m4};function f4(r){let{inputs:t,backend:e,attrs:o}=r,{shape:n,values:s,defaultValue:a,rowPartitionTensors:i}=t,{rowPartitionTypes:c}=o,l=e.data.get(n.dataId).values,p=e.data.get(s.dataId).values,u=e.data.get(a.dataId).values,m=i.map(h=>e.data.get(h.dataId).values),f=i.map(h=>h.shape),[d,g]=Ym(l,n.shape,p,s.shape,s.dtype,u,a.shape,m,f,c);return e.makeTensorInfo(d,s.dtype,g)}var u$={kernelName:_a,backendName:"cpu",kernelFunc:f4};function d4(r){let{backend:t,attrs:e}=r,{start:o,stop:n,dtype:s,step:a}=e,i=Zm(o,n,a,s);return t.makeTensorInfo([i.length],s,i)}var m$={kernelName:Oa,backendName:"cpu",kernelFunc:d4};var h4=pt(Dn,r=>1/r),f$={kernelName:Dn,backendName:"cpu",kernelFunc:h4};function g4(r){let{inputs:t,backend:e,attrs:o}=r,{images:n}=t,{alignCorners:s,halfPixelCenters:a,size:i}=o;z(n,"resizeBilinear");let c=y.computeStrides(n.shape),[l,p]=i,[u,m,f,d]=n.shape,g=e.data.get(n.dataId).values,h=new Float32Array(y.sizeFromShape([u,l,p,d])),x=[s&&l>1?m-1:m,s&&p>1?f-1:f],b=[s&&l>1?l-1:l,s&&p>1?p-1:p],I=0,T=x[0]/b[0],E=x[1]/b[1];for(let $=0;$<u;$++)for(let A=0;A<l;A++){let D;a?D=T*(A+.5)-.5:D=T*A;let _=Math.max(0,Math.floor(D)),O=D-_,L=Math.min(m-1,Math.ceil(D)),B=$*c[0]+_*c[1],M=$*c[0]+L*c[1];for(let G=0;G<p;G++){let V;a?V=E*(G+.5)-.5:V=E*G;let W=Math.max(0,Math.floor(V)),H=V-W,U=Math.min(f-1,Math.ceil(V)),q=B+W*c[2],X=M+W*c[2],Y=B+U*c[2],J=M+U*c[2];for(let Z=0;Z<d;Z++){let et=g[q+Z],Q=g[X+Z],st=g[Y+Z],ut=g[J+Z],ht=et+(st-et)*H,ft=Q+(ut-Q)*H,It=ht+(ft-ht)*O;h[I++]=It}}}return e.makeTensorInfo([u,l,p,d],"float32",h)}var d$={kernelName:Ma,backendName:"cpu",kernelFunc:g4};function x4(r){let{inputs:t,backend:e,attrs:o}=r,{images:n,dy:s}=t,{alignCorners:a}=o;z([s,n],"resizeBilinearGrad");let i=y.computeStrides(n.shape),[c,l,p,u]=n.shape,[,m,f]=s.shape,d=new Float32Array(c*l*p*u),g=[a&&m>1?l-1:l,a&&f>1?p-1:p],h=[a&&m>1?m-1:m,a&&f>1?f-1:f],x=g[0]/h[0],b=g[1]/h[1],I=e.data.get(s.dataId).values,T=0;for(let E=0;E<c;E++){let $=E*i[0];for(let A=0;A<m;A++){let D=A*x,_=Math.floor(D),O=Math.min(Math.ceil(D),l-1),L=$+_*i[1],B=$+O*i[1],M=D-_,G=1-M;for(let V=0;V<f;V++){let W=V*b,H=Math.floor(W),U=Math.min(Math.ceil(W),p-1),q=W-H,X=1-q,Y=L+H*i[2],J=L+U*i[2],Z=B+H*i[2],et=B+U*i[2],Q=G*X,st=G*q,ut=M*X,ht=M*q;for(let ft=0;ft<u;ft++){let It=I[T++];d[Y+ft]+=It*Q,d[J+ft]+=It*st,d[Z+ft]+=It*ut,d[et+ft]+=It*ht}}}}return e.makeTensorInfo([c,p,l,u],"float32",d)}var h$={kernelName:Ol,backendName:"cpu",kernelFunc:x4};function y4(r){let{inputs:t,backend:e,attrs:o}=r,{images:n}=t,{alignCorners:s,halfPixelCenters:a,size:i}=o;z(n,"resizeNearestNeighbor");let c=y.computeStrides(n.shape),[l,p]=i,[u,m,f,d]=n.shape,g=e.data.get(n.dataId).values,h=new Float32Array(u*l*p*d),x=[s&&l>1?m-1:m,s&&p>1?f-1:f],b=[s&&l>1?l-1:l,s&&p>1?p-1:p],I=x[0]/b[0],T=x[1]/b[1],E=0;for(let $=0;$<u;$++){let A=$*c[0];for(let D=0;D<l;D++){let _=a?I*(D+.5):I*D,O=Math.min(m-1,s?Math.round(_):Math.floor(_));a&&(O=Math.max(0,O));let L=A+O*c[1];for(let B=0;B<p;B++){let M=a?T*(B+.5):T*B,G=Math.min(f-1,s?Math.round(M):Math.floor(M));a&&(G=Math.max(0,G));let V=L+G*c[2];for(let W=0;W<d;W++){let H=g[V+W];h[E++]=H}}}}return e.makeTensorInfo([u,l,p,d],n.dtype,h)}var g$={kernelName:Ba,backendName:"cpu",kernelFunc:y4};function b4(r){let{inputs:t,backend:e,attrs:o}=r,{images:n,dy:s}=t,{alignCorners:a}=o;z([s,n],"resizeNearestNeighborGrad");let i=y.computeStrides(n.shape),c=y.computeStrides(s.shape),[l,p,u,m]=n.shape,[,f,d]=s.shape,g=new Float32Array(l*p*u*m),h=e.data.get(s.dataId).values,x=[a&&f>1?p-1:p,a&&d>1?u-1:u],b=[a&&f>1?f-1:f,a&&d>1?d-1:d],I=x[0]/b[0],T=x[1]/b[1],E=1/I,$=1/T,A=Math.ceil(E)*2+2,D=Math.ceil($)*2+2;for(let _=0;_<l;_++){let O=_*i[0];for(let L=0;L<p;L++){let B=O+L*i[1],M=Math.floor(L*E),G=Math.floor(M-A/2);for(let V=0;V<u;V++){let W=B+V*i[2],H=Math.floor(V*$),U=Math.floor(H-D/2);for(let q=0;q<m;q++){let X=0;for(let Y=0;Y<A;Y++){let J=Y+G;if(J<0||J>=f)continue;let Z=O+J*c[1],et=J*I,Q=Math.min(p-1,a?Math.round(et):Math.floor(et));if(L===Q)for(let st=0;st<D;st++){let ut=st+U;if(ut<0||ut>=d)continue;let ht=Z+ut*c[2],ft=ut*T,It=Math.min(u-1,a?Math.round(ft):Math.floor(ft));V===It&&(X+=h[ht+q])}}g[W+q]=X}}}}return e.makeTensorInfo(n.shape,n.dtype,g)}var x$={kernelName:_l,backendName:"cpu",kernelFunc:b4};function w4(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{dims:s}=o;z(n,"reverse");let a=n.shape.length,i=y.parseAxisParam(s,n.shape);if(a===0)return $e({inputs:{x:n},backend:e});let c=new $t(n.shape,n.dtype),l=e.bufferSync(n);for(let p=0;p<c.size;p++){let u=c.indexToLoc(p),m=u.slice();i.forEach(f=>m[f]=n.shape[f]-1-m[f]),c.set(l.get(...m),...u)}return e.makeTensorInfo(c.shape,c.dtype,c.values)}var y$={kernelName:Va,backendName:"cpu",kernelFunc:w4};var b$={kernelName:fi,backendName:"cpu",kernelFunc:({inputs:r,attrs:t,backend:e})=>{let{image:o}=r,{radians:n,fillValue:s,center:a}=t,i=e,c=y.getTypedArrayFromDType(o.dtype,y.sizeFromShape(o.shape)),[l,p,u,m]=o.shape,[f,d]=v.getImageCenter(a,p,u),g=255,h=Math.sin(n),x=Math.cos(n),b=i.data.get(o.dataId).values;for(let T=0;T<l;T++){let E=T*u*p*m;for(let $=0;$<p;$++){let A=$*(u*m);for(let D=0;D<u;D++){let _=D*m;for(let O=0;O<m;O++){let L=[l,$,D,O],B=L[2],M=L[1],G=(B-f)*x-(M-d)*h,V=(B-f)*h+(M-d)*x;G=Math.round(G+f),V=Math.round(V+d);let W=s;if(typeof s!="number"&&(O===3?W=g:W=s[O]),G>=0&&G<u&&V>=0&&V<p){let U=V*(u*m),q=G*m,X=E+U+q+O;W=b[X]}let H=E+A+_+O;c[H]=W}}}}return{dataId:i.write(c,o.shape,o.dtype),shape:o.shape,dtype:o.dtype}}};var C4=pt(On,r=>{let t=Math.floor(r);return r-t<.5?Math.floor(r):r-t>.5?Math.ceil(r):t%2===0?t:t+1}),w$={kernelName:On,backendName:"cpu",kernelFunc:C4};function T4(r){let{inputs:t,backend:e,attrs:o}=r,{indices:n,updates:s}=t,{shape:a}=o,{sliceRank:i,numUpdates:c,sliceSize:l,strides:p,outputSize:u}=v.calculateShapes(s,n,a),m=!0,f=e.bufferSync(n),d=e.bufferSync(s),g=zr(f,d,a,u,l,c,i,p,0,m);return e.makeTensorInfo(a,g.dtype,g.values)}var C$={kernelName:Ga,backendName:"cpu",kernelFunc:T4};function I4(r,t){let e=0,o=r.length,n=0;for(;e<o;)n=Math.floor((e+o)/2),r[n]<t?e=n+1:o=n;return o}function S4(r,t){let e=0,o=r.length,n=0;for(;e<o;)n=Math.floor((e+o)/2),r[n]<=t?e=n+1:o=n;return o}function T$(r,t,e,o,n,s){let a=y.getArrayFromDType("int32",e*n);for(let i=0;i<e;++i){let c=r.slice(i*o,(i+1)*o),l=i*n;for(let p=0;p<n;++p)a[l+p]=s==="left"?I4(c,t[p+l]):S4(c,t[p+l])}return a}function v4(r){let{inputs:t,backend:e,attrs:o}=r,{sortedSequence:n,values:s}=t,{side:a}=o,i=e.data.get(n.dataId).values,c=e.data.get(s.dataId).values,l=T$(i,c,n.shape[0],n.shape[1],s.shape[1],a);return e.makeTensorInfo(s.shape,"int32",l)}var I$={kernelName:za,backendName:"cpu",kernelFunc:v4};function N4(r){let{inputs:t,backend:e}=r,{condition:o,t:n,e:s}=t;z([o,n,s],"select");let a=o.shape.length,i=e.data.get(o.dataId).values,c=e.data.get(n.dataId).values,l=e.data.get(s.dataId).values,p=re(n.dtype,s.dtype),u=y.makeZerosTypedArray(y.sizeFromShape(n.shape),p),m=0,f=a===0||a>1||n.shape.length===1?1:y.sizeFromShape(n.shape.slice(1));for(let d=0;d<i.length;d++)for(let g=0;g<f;g++)i[d]===1?u[m++]=c[d]:u[m++]=l[d];return e.makeTensorInfo(n.shape,p,u)}var S$={kernelName:Wa,backendName:"cpu",kernelFunc:N4};var k4=v.SELU_SCALEALPHA,E4=v.SELU_SCALE,$4=pt(Ln,r=>r>=0?E4*r:k4*(Math.exp(r)-1)),v$={kernelName:Ln,backendName:"cpu",kernelFunc:$4};var A4=pt(Mn,r=>r<0?-1:r>0?1:0),N$={kernelName:Mn,backendName:"cpu",kernelFunc:A4};var R4=pt("Sin",r=>Math.sin(r)),k$={kernelName:"Sin",backendName:"cpu",kernelFunc:R4};var D4=pt(Bn,r=>Math.sinh(r)),E$={kernelName:Bn,backendName:"cpu",kernelFunc:D4};var F4=11920928955078125e-23,$$=Math.log(F4)+2,_4=pt(Gn,r=>{let t=r>-$$,e=r<$$,o=Math.exp(r),n;return e?n=o:t?n=r:n=Math.log(1+o),n}),A$={kernelName:Gn,backendName:"cpu",kernelFunc:_4};function O4(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{blockShape:s,paddings:a}=o;z([n],"spaceToBatchND");let i=y.sizeFromShape(s),c=[[0,0]];c.push(...a);for(let $=1+s.length;$<n.shape.length;++$)c.push([0,0]);let l=Md.kernelFunc({inputs:{x:n},backend:e,attrs:{paddings:c,constantValue:0}}),p=v.getReshaped(l.shape,s,i,!1),u=v.getPermuted(p.length,s.length,!1),m=v.getReshapedPermuted(l.shape,s,i,!1),g=Ct({inputs:{x:l},backend:e,attrs:{shape:p}}),b=qt({inputs:{x:g},backend:e,attrs:{perm:u}}),E=Ct({inputs:{x:b},backend:e,attrs:{shape:m}});return e.disposeIntermediateTensorInfo(l),e.disposeIntermediateTensorInfo(g),e.disposeIntermediateTensorInfo(b),E}var R$={kernelName:Ka,backendName:"cpu",kernelFunc:O4};function P4(r){let{inputs:t,backend:e}=r,{indices:o,values:n,denseShape:s,defaultValue:a}=t;if(s.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${s.shape}`);if(o.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${o.shape}`);if(n.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${n.shape}`);if(a.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${a.shape}`);let i=e.data.get(o.dataId).values,c=e.data.get(n.dataId).values,l=e.data.get(s.dataId).values,p=e.data.get(a.dataId).values[0],[u,m,f,d,g]=Qm(i,o.shape,o.dtype,c,n.dtype,l,p);return[e.makeTensorInfo(m,o.dtype,u),e.makeTensorInfo([m[0]],n.dtype,f),e.makeTensorInfo([d.length],"bool",new Uint8Array(d.map(h=>Number(h)))),e.makeTensorInfo([g.length],o.dtype,new Int32Array(g))]}var D$={kernelName:Ya,backendName:"cpu",kernelFunc:P4};function L4(r){let{inputs:t,backend:e}=r,{inputIndices:o,inputShape:n,newShape:s}=t;if(o.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${o.shape}`);if(n.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${n.shape}`);if(s.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${s.shape}`);let a=Array.from(e.data.get(n.dataId).values),i=e.data.get(o.dataId).values,c=Array.from(e.data.get(s.dataId).values),[l,p,u]=Jm(i,o.shape,o.dtype,a,c);return[e.makeTensorInfo(p,o.dtype,l),e.makeTensorInfo([u.length],s.dtype,new Int32Array(u))]}var F$={kernelName:Za,backendName:"cpu",kernelFunc:L4};function B4(r){let{inputs:t,backend:e}=r,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${s.shape}`);if(n.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");let a=e.data.get(o.dataId).values,i=e.data.get(n.dataId).values,c=e.data.get(s.dataId).values,[l,p]=sl(a,o.shape,o.dtype,i,c,!0);return e.makeTensorInfo(p,o.dtype,l)}var _$={kernelName:Qa,backendName:"cpu",kernelFunc:B4};function M4(r){let{inputs:t,backend:e}=r,{data:o,indices:n,segmentIds:s}=t;if(o.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(n.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${n.shape}`);if(s.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${s.shape}`);if(n.shape[0]!==s.shape[0])throw new Error("segmentIds and indices should have same size.");let a=e.data.get(o.dataId).values,i=e.data.get(n.dataId).values,c=e.data.get(s.dataId).values,[l,p]=sl(a,o.shape,o.dtype,i,c);return e.makeTensorInfo(p,o.dtype,l)}var O$={kernelName:Ja,backendName:"cpu",kernelFunc:M4};function V4(r){let{inputs:t,backend:e,attrs:o}=r,{sparseIndices:n,sparseValues:s,defaultValue:a}=t,{outputShape:i}=o,{sliceRank:c,numUpdates:l,sliceSize:p,strides:u,outputSize:m}=v.calculateShapes(s,n,i),f=!1,d=e.bufferSync(n),g;switch(s.dtype){case"bool":{let h=e.bufferSync(s),x=!!e.data.get(a.dataId).values[0];g=zr(d,h,i,m,p,l,c,u,x,f);break}case"float32":{let h=e.bufferSync(s),x=e.data.get(a.dataId).values[0];g=zr(d,h,i,m,p,l,c,u,x,f);break}case"int32":{let h=e.bufferSync(s),x=e.data.get(a.dataId).values[0];g=zr(d,h,i,m,p,l,c,u,x,f);break}case"string":{let h=e.bufferSync(s),x=y.decodeString(e.data.get(a.dataId).values[0]);g=zr(d,h,i,m,p,l,c,u,x,f);break}default:throw new Error(`Unsupported type ${s.dtype}`)}return e.makeTensorInfo(i,g.dtype,g.values)}var P$={kernelName:ti,backendName:"cpu",kernelFunc:V4};function G4(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{numOrSizeSplits:s,axis:a}=o,i=y.parseAxisParam(a,n.shape)[0],c=v.prepareSplitSize(n,s,i),l=new Array(n.shape.length).fill(0),p=n.shape.slice();return c.map(u=>{let m=[...p];m[i]=u;let f=Sr({inputs:{x:n},backend:e,attrs:{begin:l,size:m}});return l[i]+=u,f})}var L$={kernelName:ja,backendName:"cpu",kernelFunc:G4};var B$={kernelName:Pl,backendName:"cpu",kernelFunc:({inputs:r,backend:t})=>{let{x:e}=r,o=t;z(e,"square");let n=o.data.get(e.dataId).values,s=new Float32Array(n.length);for(let i=0;i<n.length;++i){let c=n[i];s[i]=c*c}return{dataId:o.write(s,e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};var U4=pt(qn,(r,t)=>{let e=t;return isNaN(r)?NaN:r>0?1:e.alpha}),M$={kernelName:qn,backendName:"cpu",kernelFunc:U4};function z4(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{begin:s,end:a,strides:i,beginMask:c,endMask:l,ellipsisMask:p,newAxisMask:u,shrinkAxisMask:m}=o;z(n,"stridedSlice");let{finalShapeSparse:f,finalShape:d,isIdentity:g,sliceDim0:h,isSimpleSlice:x,begin:b,end:I,strides:T}=ue.sliceInfo(n.shape,s,a,i,c,l,p,u,m),E;if(g)E=Ct({inputs:{x:n},backend:e,attrs:{shape:d}});else if(h||x){y.assert(n.shape.length>=1,()=>`Input must have rank at least 1, got: ${n.shape.length}`);let $=ue.computeOutShape(b,I,T),A=Sr({inputs:{x:n},backend:e,attrs:{begin:b,size:$}});E=Ct({inputs:{x:A},backend:e,attrs:{shape:d}}),e.disposeIntermediateTensorInfo(A)}else{let $=e.bufferSync(n),A=tf(f,$,T,b);E=e.makeTensorInfo(d,A.dtype,A.values)}return E}var V$={kernelName:ei,backendName:"cpu",kernelFunc:z4};function W4(r){let{inputs:t,backend:e,attrs:o}=r,{separator:n,nGramWidths:s,leftPad:a,rightPad:i,padWidth:c,preserveShortSequences:l}=o,{data:p,dataSplits:u}=t,m=e.data.get(p.dataId).values,f=e.data.get(u.dataId).values,[d,g]=ef(m,f,n,s,a,i,c,l);return[e.makeTensorInfo([d.length],"string",d),e.makeTensorInfo(u.shape,"int32",g)]}var G$={kernelName:ri,backendName:"cpu",kernelFunc:W4};function H4(r){let{inputs:t,backend:e,attrs:o}=r,{skipEmpty:n}=o,{input:s,delimiter:a}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(s.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${s.shape}`);if(a.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${a.shape}`);let i=e.data.get(s.dataId).values,c=e.data.get(a.dataId).values[0],[l,p,u]=rf(i,c,n),m=p.length;return[e.makeTensorInfo([m,2],"int32",l),e.makeTensorInfo([m],"string",p),e.makeTensorInfo([2],"int32",new Int32Array(u))]}var U$={kernelName:oi,backendName:"cpu",kernelFunc:H4};function q4(r){let{inputs:t,backend:e,attrs:o}=r,{numBuckets:n}=o,{input:s}=t;if(s.dtype!=="string")throw new Error("Input must be of datatype string");if(n<=0)throw new Error("Number of buckets must be at least 1");let a=e.data.get(s.dataId).values,i=of(a,n);return e.makeTensorInfo(s.shape,"int32",i)}var z$={kernelName:ni,backendName:"cpu",kernelFunc:q4};var K4=pt("Tan",r=>Math.tan(r)),W$={kernelName:"Tan",backendName:"cpu",kernelFunc:K4};var j4=pt(Hn,r=>Math.tanh(r)),H$={kernelName:Hn,backendName:"cpu",kernelFunc:j4};function X4(r){let{inputs:t,backend:e}=r,{tensor:o,indices:n,updates:s}=t,{sliceRank:a,numUpdates:i,sliceSize:c,strides:l,outputSize:p}=v.calculateShapes(s,n,o.shape),u=!1,m=e.bufferSync(n),f=e.bufferSync(s),d=e.bufferSync(o),g=zr(m,f,o.shape,p,c,i,a,l,d,u);return e.makeTensorInfo(o.shape,g.dtype,g.values)}var q$={kernelName:Ua,backendName:"cpu",kernelFunc:X4};function Y4(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{reps:s}=o;z(n,"tile");let a=nf(e.bufferSync(n),s);return e.makeTensorInfo(a.shape,a.dtype,a.values)}var K$={kernelName:vo,backendName:"cpu",kernelFunc:Y4};function Z4(r){let{inputs:t,backend:e,attrs:o}=r,{x:n}=t,{k:s,sorted:a}=o;z(n,"topk");let i=e.data.get(n.dataId).values,[c,l]=sf(i,n.shape,n.dtype,s,a);return[e.makeTensorInfo(c.shape,c.dtype,c.values),e.makeTensorInfo(l.shape,l.dtype,l.values)]}var j$={kernelName:ii,backendName:"cpu",kernelFunc:Z4};function Q4(r){let{inputs:t,attrs:e,backend:o}=r,{image:n,transforms:s}=t,{interpolation:a,fillMode:i,fillValue:c,outputShape:l}=e,[p,u,m,f]=n.shape,[d,g]=l??[u,m],h=[p,d,g,f],x=y.computeStrides(n.shape),b=x[0],I=x[1],T=x[2],E=y.computeStrides(h),$=E[0],A=E[1],D=E[2],_=y.getTypedArrayFromDType(n.dtype,y.sizeFromShape(h));_.fill(c);let O=o.data.get(n.dataId).values,L=o.data.get(s.dataId).values;for(let M=0;M<p;++M){let G=s.shape[0]===1?L:L.subarray(M*8,M*8+8);for(let V=0;V<d;++V)for(let W=0;W<g;++W)for(let H=0;H<f;++H){let U,q=G[6]*W+G[7]*V+1;if(q===0)continue;let X=(G[0]*W+G[1]*V+G[2])/q,Y=(G[3]*W+G[4]*V+G[5])/q,J=X$(X,m,i),Z=X$(Y,u,i);switch(a){case"nearest":U=oH(O,u,m,b,I,T,M,Z,J,H,c);break;case"bilinear":U=nH(O,u,m,b,I,T,M,Z,J,H,c);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${a}`)}let et=M*$+V*A+W*D+H;_[et]=U}return o.makeTensorInfo(h,n.dtype,_)}return{dataId:o.write(_,h,n.dtype),shape:n.shape,dtype:n.dtype}}var Y$={kernelName:ci,backendName:"cpu",kernelFunc:Q4};function X$(r,t,e){switch(e){case"reflect":return J4(r,t);case"wrap":return tH(r,t);case"nearest":return rH(r,t);default:return eH(r,t)}}function J4(r,t){let e=r;if(e<0)if(t<=1)e=0;else{let o=2*t;e<o&&(e=o*Math.trunc(-e/o)+e),e=e<-t?e+o:-e-1}else if(e>t-1)if(t<=1)e=0;else{let o=2*t;e-=o*Math.trunc(e/o),e>=t&&(e=o-e-1)}return y.clamp(0,e,t-1)}function tH(r,t){let e=r;if(e<0)if(t<=1)e=0;else{let o=t-1;e+=t*(Math.trunc(-e/o)+1)}else if(e>t-1)if(t<=1)e=0;else{let o=t-1;e-=t*Math.trunc(e/o)}return y.clamp(0,e,t-1)}function eH(r,t){return r}function rH(r,t){return y.clamp(0,r,t-1)}function Nu(r,t,e,o,n,s,a,i,c,l,p){let u=a*o+i*n+c*s+l;return 0<=i&&i<t&&0<=c&&c<e?r[u]:p}function oH(r,t,e,o,n,s,a,i,c,l,p){let u=Math.round(i),m=Math.round(c);return Nu(r,t,e,o,n,s,a,u,m,l,p)}function nH(r,t,e,o,n,s,a,i,c,l,p){let u=Math.floor(i),m=Math.floor(c),f=u+1,d=m+1,g=(d-c)*Nu(r,t,e,o,n,s,a,u,m,l,p)+(c-m)*Nu(r,t,e,o,n,s,a,u,d,l,p),h=(d-c)*Nu(r,t,e,o,n,s,a,f,m,l,p)+(c-m)*Nu(r,t,e,o,n,s,a,f,d,l,p);return(f-i)*g+(i-u)*h}function sH(r){let{inputs:t,attrs:e,backend:o}=r,{axis:n}=e,{x:s}=t;z(s,"unique");let a=o.data.get(s.dataId).values,{outputValues:i,outputShape:c,indices:l}=af(a,n,s.shape,s.dtype);return[o.makeTensorInfo(c,s.dtype,i),o.makeTensorInfo([l.length],"int32",l)]}var Z$={kernelName:li,backendName:"cpu",kernelFunc:sH};function aH(r){let{inputs:t,backend:e,attrs:o}=r,{value:n}=t,{axis:s}=o;s<0&&(s+=n.shape.length);let a=n.shape.length,i=n.shape[s],c=new Array(a-1),l=0;for(let f=0;f<a;f++)f!==s&&(c[l++]=n.shape[f]);let p=new Array(a).fill(0),u=n.shape.slice();u[s]=1;let m=new Array(i);for(let f=0;f<m.length;f++){p[s]=f;let d=Sr({inputs:{x:n},backend:e,attrs:{begin:p,size:u}});m[f]=Ct({inputs:{x:d},backend:e,attrs:{shape:c}}),e.disposeIntermediateTensorInfo(d)}return m}var Q$={kernelName:pi,backendName:"cpu",kernelFunc:aH};function iH(r){let{inputs:t,backend:e,attrs:o}=r,{x:n,segmentIds:s}=t,{numSegments:a}=o;z(n,"unsortedSegmentSum");let i=n.shape.length,c=s.shape.length,l=[],p=[],u=i-c,m=s;for(let d=0;d<u;++d){let g=gl({inputs:{input:m},backend:e,attrs:{dim:d+1}});m=g,p.push(g)}for(let d=0;d<a;++d){let g=y.createScalarValue(d,"int32"),h=e.makeTensorInfo([],"int32",g),x=Qx({inputs:{a:h,b:m},backend:e}),b=Tr({inputs:{x},backend:e,attrs:{dtype:"float32"}}),I=ac({inputs:{a:b,b:n},backend:e}),T=qo({inputs:{x:I},backend:e,attrs:{axis:0,keepDims:!1}});l.push(T),p.push(h),p.push(x),p.push(b),p.push(I),p.push(T)}let f=rb({inputs:l,backend:e,attrs:{axis:0}});return p.forEach(d=>e.disposeIntermediateTensorInfo(d)),f}var J$={kernelName:ui,backendName:"cpu",kernelFunc:iH};var cH=[Sk,YT,vk,Nk,eI,kk,Ek,$k,Ak,Rk,Dk,Fk,_k,Ok,Pk,Bk,Mk,Vk,Gk,Ik,Uk,zk,Wk,rI,Hk,tI,oI,qk,ZT,Kk,Xk,Yk,Zk,Qk,Jk,tE,eE,rE,oE,nE,sE,aE,iE,cE,lE,pE,uE,mE,fE,dE,hE,gE,yE,xk,bE,nI,wE,sI,CE,aI,TE,IE,SE,iI,cI,vE,NE,kE,EE,lI,pI,QT,$E,jk,AE,RE,DE,yk,uI,mI,FE,fI,_E,OE,PE,LE,BE,ME,VE,dI,GE,UE,zE,WE,qE,KE,jE,hI,XE,YE,JE,gI,xI,t$,e$,r$,yI,o$,a$,i$,Md,c$,bk,wI,l$,p$,u$,m$,JT,Iu,f$,wk,Ck,Tk,d$,h$,g$,x$,y$,b$,w$,vI,C$,I$,S$,v$,kI,N$,k$,E$,EI,ZE,A$,R$,D$,F$,_$,O$,P$,L$,AI,B$,RI,DI,M$,V$,G$,U$,z$,FI,xE,W$,H$,q$,K$,j$,Y$,bI,Z$,Q$,J$,n$];for(let r of cH)Rc(r);var lH=F();lH.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,r=>{r&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")});var Ze;(function(r){r[r.DT_INVALID=0]="DT_INVALID",r[r.DT_FLOAT=1]="DT_FLOAT",r[r.DT_DOUBLE=2]="DT_DOUBLE",r[r.DT_INT32=3]="DT_INT32",r[r.DT_UINT8=4]="DT_UINT8",r[r.DT_INT16=5]="DT_INT16",r[r.DT_INT8=6]="DT_INT8",r[r.DT_STRING=7]="DT_STRING",r[r.DT_COMPLEX64=8]="DT_COMPLEX64",r[r.DT_INT64=9]="DT_INT64",r[r.DT_BOOL=10]="DT_BOOL",r[r.DT_QINT8=11]="DT_QINT8",r[r.DT_QUINT8=12]="DT_QUINT8",r[r.DT_QINT32=13]="DT_QINT32",r[r.DT_BFLOAT16=14]="DT_BFLOAT16",r[r.DT_QINT16=15]="DT_QINT16",r[r.DT_QUINT16=16]="DT_QUINT16",r[r.DT_UINT16=17]="DT_UINT16",r[r.DT_COMPLEX128=18]="DT_COMPLEX128",r[r.DT_HALF=19]="DT_HALF",r[r.DT_RESOURCE=20]="DT_RESOURCE",r[r.DT_VARIANT=21]="DT_VARIANT",r[r.DT_UINT32=22]="DT_UINT32",r[r.DT_UINT64=23]="DT_UINT64",r[r.DT_FLOAT_REF=101]="DT_FLOAT_REF",r[r.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",r[r.DT_INT32_REF=103]="DT_INT32_REF",r[r.DT_UINT8_REF=104]="DT_UINT8_REF",r[r.DT_INT16_REF=105]="DT_INT16_REF",r[r.DT_INT8_REF=106]="DT_INT8_REF",r[r.DT_STRING_REF=107]="DT_STRING_REF",r[r.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",r[r.DT_INT64_REF=109]="DT_INT64_REF",r[r.DT_BOOL_REF=110]="DT_BOOL_REF",r[r.DT_QINT8_REF=111]="DT_QINT8_REF",r[r.DT_QUINT8_REF=112]="DT_QUINT8_REF",r[r.DT_QINT32_REF=113]="DT_QINT32_REF",r[r.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",r[r.DT_QINT16_REF=115]="DT_QINT16_REF",r[r.DT_QUINT16_REF=116]="DT_QUINT16_REF",r[r.DT_UINT16_REF=117]="DT_UINT16_REF",r[r.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",r[r.DT_HALF_REF=119]="DT_HALF_REF",r[r.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",r[r.DT_VARIANT_REF=121]="DT_VARIANT_REF",r[r.DT_UINT32_REF=122]="DT_UINT32_REF",r[r.DT_UINT64_REF=123]="DT_UINT64_REF"})(Ze||(Ze={}));var t2;(function(r){let t;(function(e){e[e.LEGACY=0]="LEGACY",e[e.V1=1]="V1",e[e.V2=2]="V2"})(t=r.CheckpointFormatVersion||(r.CheckpointFormatVersion={}))})(t2||(t2={}));var uH={};function Vd(r){return uH[r]}function w(r,t,e,o,n){let s=t.inputParams[r];if(s&&s.inputIndexStart!==void 0){let i=s.inputIndexStart,c=s.inputIndexEnd===0?void 0:s.inputIndexEnd===void 0?i+1:s.inputIndexEnd,l=i<0?t.inputNames.length+i:i;if(s.type==="tensor")return ae(t.inputNames[l],e,o,n);if(s.type==="tensors"){let m=t.inputs.slice(i,c);return t.inputNames.slice(i,c).filter((d,g)=>{var h;return((h=m[g])===null||h===void 0?void 0:h.op)!=="NoOp"}).map(d=>ae(d,e,o,n))}let p=ae(t.inputNames[l],e,o,n),u=p.dataSync();return s.type==="number"?u[0]:y.toNestedArray(p.shape,u)}let a=t.attrParams[r];return a&&a.value}function ae(r,t,e,o){let[n,s]=Ue(r,e);if(o!=null){let i=o.getHashTableHandleByName(n);if(i!=null)return i}let a=e.currentContextIds.find(i=>!!t[Gd(n,i)]);return a!==void 0?t[Gd(n,a)][s]:void 0}function ob(r,t,e){return t[Gd(r,e.currentContextId)]}function qr(r,t){let[e,o,n]=Ue(r,t);return[Gd(e,t&&t.currentContextId),o,n]}function Gd(r,t){return t?`${r}-${t}`:r}function Ue(r,t){if(r==="")return["",0,void 0];let e=t!=null&&t.parseNodeNameCache!=null;if(e){let s=t.parseNodeNameCache.get(r);if(s!=null)return s}let o=r.split(":"),n;if(o.length===1)n=[r,0,void 0];else{let s=o[0],a=o.length===3?o[1]:void 0,i=Number(o[o.length-1]);n=[s,i,a]}return e&&t.parseNodeNameCache.set(r,n),n}function ku(r,t,e){let o=w("pad",r,t,e);if(o==="explicit"){o=w("explicitPaddings",r,t,e);let n=[[0,0],[0,0],[0,0],[0,0]];for(let s=0;s<4;s++)n[s][0]=o[s*2],n[s][1]=o[s*2+1];return n}return o}function Kr(r){return r.kept?r:We(r)}var nb={};Et(nb,{json:()=>mH});var mH=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var sb={};Et(sb,{json:()=>fH});var fH=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var ab={};Et(ab,{json:()=>dH});var dH=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var ib={};Et(ib,{json:()=>hH});var hH=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var cb={};Et(cb,{json:()=>gH});var gH=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var lb={};Et(lb,{json:()=>xH});var xH=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var pb={};Et(pb,{json:()=>yH});var yH=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var ub={};Et(ub,{json:()=>bH});var bH=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var mb={};Et(mb,{json:()=>wH});var wH=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}];var fb={};Et(fb,{json:()=>CH});var CH=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var db={};Et(db,{json:()=>TH});var TH=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}];var hb={};Et(hb,{json:()=>IH});var IH=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}];var gb={};Et(gb,{json:()=>SH});var SH=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}];var xb={};Et(xb,{json:()=>vH});var vH=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var yb={};Et(yb,{json:()=>NH});var NH=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}];var bb={};Et(bb,{json:()=>kH});var kH=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var wb={};Et(wb,{json:()=>EH});var EH=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var Cb={};Et(Cb,{json:()=>$H});var $H=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var Tb={};Et(Tb,{json:()=>AH});var AH=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];var Eu=class{static get Instance(){return this._instance||(this._instance=new this)}constructor(){let t=[nb,sb,ab,ib,cb,lb,pb,ub,mb,fb,db,hb,gb,xb,yb,bb,wb,Cb,Tb],e=[].concat(...t.map(o=>o.json));this.opMappers=e.reduce((o,n)=>(o[n.tfOpName]=n,o),{})}transformGraph(t,e={}){let o=t.node,n=[],s=[],a=[],i=o.reduce((g,h)=>(g[h.name]=this.mapNode(h),h.op.startsWith("Placeholder")?n.push(g[h.name]):h.op==="Const"?s.push(g[h.name]):(h.input==null||h.input.length===0)&&a.push(g[h.name]),g),{}),c=[],l=[],p={},u={};e!=null&&(p=this.mapSignatureEntries(e.inputs),u=this.mapSignatureEntries(e.outputs));let m=Object.keys(i);m.forEach(g=>{let h=i[g];h.inputNames.forEach((x,b)=>{let[I,,T]=qr(x),E=i[I];if(E.outputs!=null){let $=E.outputs.indexOf(T);if($!==-1){let A=`${I}:${$}`;h.inputNames[b]=A}}h.inputs.push(E),E.children.push(h)})}),Object.keys(u).length===0?m.forEach(g=>{let h=i[g];h.children.length===0&&l.push(h)}):Object.keys(u).forEach(g=>{let[h]=qr(g),x=i[h];x!=null&&(x.signatureKey=u[g],l.push(x))}),Object.keys(p).length>0?Object.keys(p).forEach(g=>{let[h]=qr(g),x=i[h];x&&(x.signatureKey=p[g],c.push(x))}):c=n;let f={};t.library!=null&&t.library.function!=null&&(f=t.library.function.reduce((g,h)=>(g[h.signature.name]=this.mapFunction(h),g),{}));let d={nodes:i,inputs:c,outputs:l,weights:s,placeholders:n,signature:e,functions:f};return a.length>0&&(d.initNodes=a),d}mapSignatureEntries(t){return Object.keys(t||{}).reduce((e,o)=>(e[t[o].name]=o,e),{})}mapNode(t){let e=Vd(t.op)||this.opMappers[t.op]||{};t.attr==null&&(t.attr={});let o={name:t.name,op:t.op,category:e.category,inputNames:(t.input||[]).map(n=>n.startsWith("^")?n.slice(1):n),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:t.attr,outputs:e.outputs};return e.inputs!=null&&(o.inputParams=e.inputs.reduce((n,s)=>(n[s.name]={type:s.type,inputIndexStart:s.start,inputIndexEnd:s.end},n),{})),e.attrs!=null&&(o.attrParams=e.attrs.reduce((n,s)=>{let a=s.type,i;switch(s.type){case"string":i=Ud(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Ud(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"string[]":i=Xd(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Xd(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"number":i=Wd(t.attr,s.tfName,s.defaultValue||0),i===void 0&&s.tfDeprecatedName&&(i=Wd(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"number[]":i=jd(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=jd(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool":i=zd(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=zd(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"bool[]":i=Zd(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Zd(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape":i=Kd(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Kd(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"shape[]":i=Yd(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Yd(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype":i=Hd(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=Hd(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"dtype[]":i=qd(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=qd(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"func":i=e2(t.attr,s.tfName,s.defaultValue),i===void 0&&s.tfDeprecatedName&&(i=e2(t.attr,s.tfDeprecatedName,s.defaultValue));break;case"tensor":case"tensors":break;default:throw new Error(`Unsupported param type: ${s.type} for op: ${t.op}`)}return n[s.name]={value:i,type:a},n},{})),o}mapFunction(t){let e=t.nodeDef,o=[],n=[],s={};e!=null&&(s=e.reduce((u,m)=>(u[m.name]=this.mapNode(m),m.op==="Const"&&n.push(u[m.name]),u),{}));let a=[],i=[];t.signature.inputArg.forEach(u=>{let[m]=qr(u.name),f={name:m,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:Ib(u.type),type:"dtype"}},children:[]};f.signatureKey=u.name,a.push(f),s[m]=f}),Object.keys(s).forEach(u=>{let m=s[u];m.inputNames.forEach((f,d)=>{let[g,,h]=qr(f),x=s[g];if(x.outputs!=null){let b=x.outputs.indexOf(h);if(b!==-1){let I=`${g}:${b}`;m.inputNames[d]=I}}m.inputs.push(x),x.children.push(m)})});let l=t.ret;t.signature.outputArg.forEach(u=>{let[m,f]=qr(l[u.name]),d=s[m];d!=null&&(d.defaultOutput=f,i.push(d))});let p=this.mapArgsToSignature(t);return{nodes:s,inputs:a,outputs:i,weights:n,placeholders:o,signature:p}}mapArgsToSignature(t){return{methodName:t.signature.name,inputs:t.signature.inputArg.reduce((e,o)=>(e[o.name]=this.mapArgToTensorInfo(o),e),{}),outputs:t.signature.outputArg.reduce((e,o)=>(e[o.name]=this.mapArgToTensorInfo(o,t.ret),e),{})}}mapArgToTensorInfo(t,e){let o=t.name;return e!=null&&(o=e[o]),{name:o,dtype:t.type}}};function RH(r){let t=F().global;if(typeof t.atob<"u")return t.atob(r);if(typeof Buffer<"u")return new Buffer(r,"base64").toString();throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()")}function r2(r,t){let e=Array.isArray(r)?String.fromCharCode.apply(null,r):RH(r);return t?e:e.toLowerCase()}function Ud(r,t,e,o=!1){let n=r[t];return n!=null?r2(n.s,o):e}function zd(r,t,e){let o=r[t];return o?o.b:e}function Wd(r,t,e){let o=r[t]||{},n=o.i!=null?o.i:o.f!=null?o.f:e;return typeof n=="number"?n:parseInt(n,10)}function Ib(r){switch(typeof r=="string"&&(r=Ze[r]),r){case Ze.DT_FLOAT:case Ze.DT_HALF:return"float32";case Ze.DT_INT32:case Ze.DT_INT64:case Ze.DT_INT8:case Ze.DT_UINT8:return"int32";case Ze.DT_BOOL:return"bool";case Ze.DT_DOUBLE:return"float32";case Ze.DT_STRING:return"string";case Ze.DT_COMPLEX64:case Ze.DT_COMPLEX128:return"complex64";default:return null}}function e2(r,t,e){let o=r[t];return o&&o.func?o.func.name:e}function Hd(r,t,e){let o=r[t];return o&&o.type?Ib(o.type):e}function qd(r,t,e){let o=r[t];return o&&o.list&&o.list.type?o.list.type.map(n=>Ib(n)):e}function o2(r){if(!r.unknownRank)return r.dim!=null?r.dim.map(t=>typeof t.size=="number"?t.size:parseInt(t.size,10)):[]}function Kd(r,t,e){let o=r[t];return o&&o.shape?o2(o.shape):e}function jd(r,t,e){let o=r[t];return o?((o.list.f&&o.list.f.length?o.list.f:o.list.i)||[]).map(n=>typeof n=="number"?n:parseInt(n,10)):e}function Xd(r,t,e,o=!1){let n=r[t];return n&&n.list&&n.list.s?n.list.s.map(s=>r2(s,o)):e}function Yd(r,t,e){let o=r[t];return o&&o.list&&o.list.shape?o.list.shape.map(n=>o2(n)):e}function Zd(r,t,e){let o=r[t];return o&&o.list&&o.list.b?o.list.b:e}var Qd=class{constructor(t,e,o){this.node=t,this.tensorMap=e,this.context=o,this.inputs=[],this.attrs={},this.inputs=t.inputNames.map(n=>this.getInput(n)),t.rawAttrs!=null&&(this.attrs=Object.keys(t.rawAttrs).reduce((n,s)=>(n[s]=this.getAttr(s),n),{}))}getInput(t){return ae(t,this.tensorMap,this.context)}getAttr(t,e){let o=this.node.rawAttrs[t];if(o.tensor!=null)return ae(t,this.tensorMap,this.context);if(o.i!=null||o.f!=null)return Wd(this.node.rawAttrs,t,e);if(o.s!=null)return Ud(this.node.rawAttrs,t,e);if(o.b!=null)return zd(this.node.rawAttrs,t,e);if(o.shape!=null)return Kd(this.node.rawAttrs,t,e);if(o.type!=null)return Hd(this.node.rawAttrs,t,e);if(o.list!=null){if(o.list.i!=null||o.list.f!=null)return jd(this.node.rawAttrs,t,e);if(o.list.s!=null)return Xd(this.node.rawAttrs,t,e);if(o.list.shape!=null)return Yd(this.node.rawAttrs,t,e);if(o.list.b!=null)return Zd(this.node.rawAttrs,t,e);if(o.list.type!=null)return qd(this.node.rawAttrs,t,e)}return e}};var At={};Et(At,{OP_SCOPE_SUFFIX:()=>Zu,abs:()=>ie,acos:()=>jl,acosh:()=>Xl,add:()=>nt,addN:()=>rg,all:()=>Yl,any:()=>Zl,argMax:()=>Ql,argMin:()=>Jl,asin:()=>tp,asinh:()=>ep,atan:()=>rp,atan2:()=>op,atanh:()=>np,avgPool:()=>Si,avgPool3d:()=>ag,basicLSTMCell:()=>ig,batchNorm:()=>_r,batchNorm2d:()=>cg,batchNorm3d:()=>lg,batchNorm4d:()=>pg,batchToSpaceND:()=>vi,bincount:()=>ip,bitwiseAnd:()=>ug,booleanMaskAsync:()=>vw,broadcastArgs:()=>mg,broadcastTo:()=>Or,buffer:()=>ot,cast:()=>mt,ceil:()=>cp,clipByValue:()=>lp,clone:()=>We,complex:()=>Oe,concat:()=>Ot,concat1d:()=>pp,concat2d:()=>fg,concat3d:()=>dg,concat4d:()=>hg,conv1d:()=>up,conv2d:()=>Lr,conv2dTranspose:()=>mp,conv3d:()=>gg,conv3dTranspose:()=>xg,cos:()=>fp,cosh:()=>dp,cosineWindow:()=>zc,cumprod:()=>hp,cumsum:()=>gp,denseBincount:()=>yg,depthToSpace:()=>xp,depthwiseConv2d:()=>Ro,diag:()=>bg,dilation2d:()=>yp,div:()=>Tt,divNoNan:()=>bp,dot:()=>wp,dropout:()=>Dw,einsum:()=>Do,elu:()=>ki,enclosingPowerOfTwo:()=>dm,ensureShape:()=>wg,equal:()=>Ni,erf:()=>Cp,euclideanNorm:()=>Tp,exp:()=>He,expandDims:()=>Me,expm1:()=>Ip,eye:()=>Sp,fft:()=>Lo,fill:()=>Pr,floor:()=>Ei,floorDiv:()=>Ci,fused:()=>hm,gather:()=>$i,gatherND:()=>Aw,greater:()=>so,greaterEqual:()=>Ai,ifft:()=>po,imag:()=>_o,image:()=>SC,inTopKAsync:()=>Fw,irfft:()=>Ki,isFinite:()=>vp,isInf:()=>Np,isNaN:()=>kp,leakyRelu:()=>Ri,less:()=>os,lessEqual:()=>Oo,linalg:()=>vC,linspace:()=>Tg,localResponseNormalization:()=>Ep,log:()=>yr,log1p:()=>Di,logSigmoid:()=>$p,logSoftmax:()=>Ap,logSumExp:()=>_i,logicalAnd:()=>ao,logicalNot:()=>Oi,logicalOr:()=>Pi,logicalXor:()=>Rp,losses:()=>NC,lowerBound:()=>Ig,matMul:()=>vt,max:()=>ur,maxPool:()=>Li,maxPool3d:()=>Sg,maxPoolWithArgmax:()=>vg,maximum:()=>Bi,mean:()=>io,meshgrid:()=>Ng,min:()=>rs,minimum:()=>co,mirrorPad:()=>Dp,mod:()=>Fp,moments:()=>kg,movingAverage:()=>Nw,mul:()=>j,multiRNNCell:()=>Eg,multinomial:()=>$g,neg:()=>pe,norm:()=>no,notEqual:()=>Mi,oneHot:()=>ns,ones:()=>Vr,onesLike:()=>_p,op:()=>S,outerProduct:()=>Ag,pad:()=>mr,pad1d:()=>Rg,pad2d:()=>Dg,pad3d:()=>Fg,pad4d:()=>_g,pool:()=>Op,pow:()=>xr,prelu:()=>Gi,print:()=>Kl,prod:()=>Pp,raggedGather:()=>Og,raggedRange:()=>Pg,raggedTensorToTensor:()=>Lg,rand:()=>Bg,randomGamma:()=>Yg,randomNormal:()=>Lp,randomStandardNormal:()=>Zg,randomUniform:()=>Wi,randomUniformInt:()=>Qg,range:()=>Po,real:()=>lo,reciprocal:()=>Bp,relu:()=>Gr,relu6:()=>Hi,reshape:()=>P,reverse:()=>Ve,reverse1d:()=>Jg,reverse2d:()=>tx,reverse3d:()=>ex,reverse4d:()=>rx,rfft:()=>Bo,round:()=>qi,rsqrt:()=>Mp,scalar:()=>lt,scatterND:()=>kw,searchSorted:()=>Gc,selu:()=>Vp,separableConv2d:()=>Gp,setdiff1dAsync:()=>ox,sigmoid:()=>pr,sign:()=>Up,signal:()=>Im,sin:()=>zp,sinh:()=>Wp,slice:()=>yt,slice1d:()=>nx,slice2d:()=>sx,slice3d:()=>ax,slice4d:()=>ix,softmax:()=>Hp,softplus:()=>Fi,spaceToBatchND:()=>Vi,sparse:()=>kC,sparseToDense:()=>$w,spectral:()=>IC,split:()=>br,sqrt:()=>Ne,square:()=>ce,squaredDifference:()=>ji,squeeze:()=>Mo,stack:()=>ye,step:()=>Xi,stridedSlice:()=>qp,string:()=>EC,sub:()=>ct,sum:()=>kt,tan:()=>Kp,tanh:()=>es,tensor:()=>xe,tensor1d:()=>de,tensor2d:()=>Vo,tensor3d:()=>jp,tensor4d:()=>cx,tensor5d:()=>lx,tensor6d:()=>px,tensorScatterUpdate:()=>mx,tile:()=>Mr,topk:()=>Yp,transpose:()=>Go,truncatedNormal:()=>fx,unique:()=>Zp,unsortedSegmentSum:()=>Qp,unstack:()=>Ge,upperBound:()=>dx,variable:()=>hx,where:()=>Be,whereAsync:()=>Jp,zeros:()=>qe,zerosLike:()=>oe});var n2=(r,t,e,o=At)=>{switch(r.op){case"BiasAdd":case"AddV2":case"Add":return[o.add(w("a",r,t,e),w("b",r,t,e))];case"AddN":return[o.addN(w("tensors",r,t,e))];case"FloorMod":case"Mod":return[o.mod(w("a",r,t,e),w("b",r,t,e))];case"Mul":return[o.mul(w("a",r,t,e),w("b",r,t,e))];case"RealDiv":case"Div":return[o.div(w("a",r,t,e),w("b",r,t,e))];case"DivNoNan":return[o.divNoNan(w("a",r,t,e),w("b",r,t,e))];case"FloorDiv":return[o.floorDiv(w("a",r,t,e),w("b",r,t,e))];case"Sub":return[o.sub(w("a",r,t,e),w("b",r,t,e))];case"Minimum":return[o.minimum(w("a",r,t,e),w("b",r,t,e))];case"Maximum":return[o.maximum(w("a",r,t,e),w("b",r,t,e))];case"Pow":return[o.pow(w("a",r,t,e),w("b",r,t,e))];case"SquaredDifference":return[o.squaredDifference(w("a",r,t,e),w("b",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var s2=(r,t,e,o=At)=>{switch(r.op){case"Abs":case"ComplexAbs":return[o.abs(w("x",r,t,e))];case"Acos":return[o.acos(w("x",r,t,e))];case"Acosh":return[o.acosh(w("x",r,t,e))];case"Asin":return[o.asin(w("x",r,t,e))];case"Asinh":return[o.asinh(w("x",r,t,e))];case"Atan":return[o.atan(w("x",r,t,e))];case"Atan2":return[o.atan2(w("x",r,t,e),w("y",r,t,e))];case"Atanh":return[o.atanh(w("x",r,t,e))];case"Ceil":return[o.ceil(w("x",r,t,e))];case"Complex":return[o.complex(w("real",r,t,e),w("imag",r,t,e))];case"Cos":return[o.cos(w("x",r,t,e))];case"Cosh":return[o.cosh(w("x",r,t,e))];case"Elu":return[o.elu(w("x",r,t,e))];case"Erf":return[o.erf(w("x",r,t,e))];case"Exp":return[o.exp(w("x",r,t,e))];case"Expm1":return[o.expm1(w("x",r,t,e))];case"Floor":return[o.floor(w("x",r,t,e))];case"Log":return[o.log(w("x",r,t,e))];case"Log1p":return[o.log1p(w("x",r,t,e))];case"Imag":return[o.imag(w("x",r,t,e))];case"Neg":return[o.neg(w("x",r,t,e))];case"Reciprocal":return[o.reciprocal(w("x",r,t,e))];case"Real":return[o.real(w("x",r,t,e))];case"Relu":return[o.relu(w("x",r,t,e))];case"Round":return[o.round(w("x",r,t,e))];case"Selu":return[o.selu(w("x",r,t,e))];case"Sigmoid":return[o.sigmoid(w("x",r,t,e))];case"Sin":return[o.sin(w("x",r,t,e))];case"Sign":return[o.sign(w("x",r,t,e))];case"Sinh":return[o.sinh(w("x",r,t,e))];case"Softplus":return[o.softplus(w("x",r,t,e))];case"Sqrt":return[o.sqrt(w("x",r,t,e))];case"Square":return[o.square(w("x",r,t,e))];case"Tanh":return[o.tanh(w("x",r,t,e))];case"Tan":return[o.tan(w("x",r,t,e))];case"ClipByValue":return[o.clipByValue(w("x",r,t,e),w("clipValueMin",r,t,e),w("clipValueMax",r,t,e))];case"Relu6":return[o.relu6(w("x",r,t,e))];case"Rsqrt":return[o.rsqrt(ae(r.inputNames[0],t,e))];case"LeakyRelu":return[o.leakyRelu(w("x",r,t,e),w("alpha",r,t,e))];case"Prelu":return[o.prelu(w("x",r,t,e),w("alpha",r,t,e))];case"IsNan":return[o.isNaN(ae(r.inputNames[0],t,e))];case"IsInf":return[o.isInf(ae(r.inputNames[0],t,e))];case"IsFinite":return[o.isFinite(ae(r.inputNames[0],t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function ar(r,t,e=""){if(!(typeof r=="number"||typeof t=="number")){y.assert(r.length===t.length,()=>e+` Shapes ${r} and ${t} must match`);for(let o=0;o<r.length;o++){let n=r[o],s=t[o];y.assert(n<0||s<0||n===s,()=>e+` Shapes ${r} and ${t} must match`)}}}function a2(r){return!(typeof r=="number"||r.some(t=>t<0))}function xl(r,t,e){let o=Jd(r,e),n=!a2(o);if(n&&t.length===0)throw new Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${o}`);if(n&&t.forEach(s=>{o=Jd(s.shape,o)}),!a2(o))throw new Error(`Non-fully-defined elementShape: ${o}`);return o}function Jd(r,t){if(typeof r=="number")return t;if(typeof t=="number")return r;if(r.length!==t.length)throw new Error(`Incompatible ranks during merge: ${r} vs. ${t}`);let e=[];for(let o=0;o<r.length;++o){let n=r[o],s=t[o];if(n>=0&&s>=0&&n!==s)throw new Error(`Incompatible shape during merge: ${r} vs. ${t}`);e[o]=n>=0?n:s}return e}var th=class{constructor(t,e,o,n,s,a,i){this.name=t,this.dtype=e,this.maxSize=o,this.elementShape=n,this.identicalElementShapes=s,this.dynamicSize=a,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=lt(0),Le(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.tensor.id))&&e.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(t){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||t>=this.size())throw new Error(`Tried to read from index ${t}, but array size is: ${this.size()}`);let e=this.tensors[t];if(e.cleared)throw new Error(`TensorArray ${this.name}: Could not read index ${t} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(e.cleared=!0),e.read=!0,e.tensor}readMany(t){return t.map(e=>this.read(e))}write(t,e){if(this.closed_)throw new Error(`TensorArray ${this.name} has already been closed.`);if(t<0||!this.dynamicSize&&t>=this.maxSize)throw new Error(`Tried to write to index ${t}, but array is not resizeable and size is: ${this.maxSize}`);let o=this.tensors[t]||{};if(e.dtype!==this.dtype)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t},
          because the value dtype is ${e.dtype}, but TensorArray dtype is ${this.dtype}.`);if(this.size()===0&&(this.elementShape==null||this.elementShape.length===0)&&(this.elementShape=e.shape),ar(this.elementShape,e.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${t}.`),o.read)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been read.`);if(o.written)throw new Error(`TensorArray ${this.name}: Could not write to TensorArray index ${t}, because it has already been written.`);o.tensor=e,Le(e),o.written=!0,this.tensors[t]=o}writeMany(t,e){if(t.length!==e.length)throw new Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${t.length} is not the same as tensors size: ${e.length}.`);t.forEach((o,n)=>this.write(o,e[n]))}gather(t,e){if(e&&e!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${e}`);if(t)t=t.slice(0,this.size());else{t=[];for(let n=0;n<this.size();n++)t.push(n)}if(t.length===0)return xe([],[0].concat(this.elementShape));let o=this.readMany(t);return ar(this.elementShape,o[0].shape,"TensorArray shape mismatch: "),ye(o,0)}concat(t){if(t&&t!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${t}`);if(this.size()===0)return xe([],[0].concat(this.elementShape));let e=[];for(let n=0;n<this.size();n++)e.push(n);let o=this.readMany(e);return ar(this.elementShape,o[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${o[0].shape})`),Ot(o,0)}scatter(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);if(t.length!==e.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);let o=Math.max(...t);if(!this.dynamicSize&&o>=this.maxSize)throw new Error(`Max index must be < array size (${o}  vs. ${this.maxSize})`);this.writeMany(t,Ge(e,0))}split(t,e){if(e.dtype!==this.dtype)throw new Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${e.dtype}`);let o=0,n=t.map(c=>(o+=c,o));if(o!==e.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${o}, and tensor's shape is: ${e.shape}`);if(!this.dynamicSize&&t.length!==this.maxSize)throw new Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${t.length}), and the TensorArray is not marked as dynamically resizeable`);let s=o===0?0:e.size/o,a=[];gt(()=>{e=P(e,[1,o,s]);for(let c=0;c<t.length;++c){let p=[0,c===0?0:n[c-1],0],u=[1,t[c],s];a[c]=P(yt(e,p,u),this.elementShape)}return a});let i=[];for(let c=0;c<t.length;c++)i[c]=c;this.writeMany(i,a)}};var yl=class r{get id(){return this.idTensor.id}constructor(t,e,o,n=-1){this.tensors=t,this.elementShape=e,this.elementDtype=o,t?.forEach(s=>{if(o!==s.dtype)throw new Error(`Invalid data types; op elements ${o}, but list elements ${s.dtype}`);ar(e,s.shape,"TensorList shape mismatch: "),Le(s)}),this.idTensor=lt(0),this.maxNumElements=n,Le(this.idTensor)}copy(){return new r([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(t){this.tensors.forEach(e=>{(t==null||!t.has(e.id))&&e.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(t,e,o=-1){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(o!==-1&&this.tensors.length!==o)throw new Error(`Operation expected a list with ${o} elements but got a list with ${this.tensors.length} elements.`);ar(t,this.elementShape,"TensorList shape mismatch: ");let n=xl(this.elementShape,this.tensors,t);return gt(()=>{let s=this.tensors.map(a=>P(a,n));return ye(s,0)})}popBack(t,e){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);if(this.size()===0)throw new Error("Trying to pop from an empty list.");let o=xl(this.elementShape,this.tensors,t),n=this.tensors.pop();return n.kept=!1,ar(n.shape,t,"TensorList shape mismatch: "),P(n,o)}pushBack(t){if(t.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(ar(t.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw new Error("Trying to push element into a full list.");Le(t),this.tensors.push(t)}resize(t){if(t<0)throw new Error(`TensorListResize expects size to be non-negative. Got: ${t}`);if(this.maxNumElements!==-1&&t>this.maxNumElements)throw new Error(`TensorListResize input size ${t} is greater maxNumElement ${this.maxNumElements}.`);let e=new r([],this.elementShape,this.elementDtype,this.maxNumElements);e.tensors.length=t;for(let o=0;o<Math.min(this.tensors.length,t);++o)e.tensors[o]=this.tensors[o];return e}getItem(t,e,o){if(o!==this.elementDtype)throw new Error(`Invalid data types; op elements ${o}, but list elements ${this.elementDtype}`);if(t<0||t>this.tensors.length)throw new Error(`Trying to access element ${t} in a list with ${this.tensors.length} elements.`);if(this.tensors[t]==null)throw new Error(`element at index ${t} is null.`);ar(this.tensors[t].shape,e,"TensorList shape mismatch: ");let n=xl(this.elementShape,this.tensors,e);return P(this.tensors[t],n)}setItem(t,e){if(e.dtype!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(t<0||this.maxNumElements!==-1&&t>=this.maxNumElements)throw new Error(`Trying to set element ${t} in a list with max ${this.maxNumElements} elements.`);ar(this.elementShape,e.shape,"TensorList shape mismatch: "),Le(e),this.tensors[t]!=null&&(this.tensors[t].kept=!1),this.tensors[t]=e}gather(t,e,o){if(e!==this.elementDtype)throw new Error(`Invalid data types; op elements ${e}, but list elements ${this.elementDtype}`);ar(this.elementShape,o,"TensorList shape mismatch: "),t=t.slice(0,this.size());let n=xl(this.elementShape,this.tensors,o);return t.length===0?xe([],[0].concat(n)):gt(()=>{let s=t.map(a=>P(this.tensors[a],n));return ye(s,0)})}concat(t,e){if(t&&t!==this.elementDtype)throw new Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${t}`);ar(this.elementShape,e,"TensorList shape mismatch: ");let o=xl(this.elementShape,this.tensors,e);return this.size()===0?xe([],[0].concat(o)):gt(()=>{let n=this.tensors.map(s=>P(s,o));return Ot(n,0)})}};function i2(r,t,e){let o=r.dtype;if(r.shape.length<1)throw new Error(`Tensor must be at least a vector, but saw shape: ${r.shape}`);if(r.dtype!==e)throw new Error(`Invalid data types; op elements ${r.dtype}, but list elements ${e}`);let n=r.shape.slice(1);ar(n,t,"TensorList shape mismatch: ");let s=Ge(r);return new yl(s,t,o)}function c2(r,t,e,o){return new yl([],r,t,o)}function l2(r,t,e,o){if(t.length!==r.shape[0])throw new Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${r.shape[0]}`);let n=Math.max(...t);if(o!=null&&o!==-1&&n>=o)throw new Error(`Max index must be < array size (${n}  vs. ${o})`);let s=new yl([],e,r.dtype,o),a=Ge(r,0);return t.forEach((i,c)=>{s.setItem(i,a[c])}),s}function p2(r,t,e){let o=0,n=t.map(p=>(o+=p,o));if(o!==r.shape[0])throw new Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${o}, and tensor's shape is: ${r.shape}`);let s=r.shape.slice(1),a=Jd(s,e),i=o===0?0:r.size/o,c=gt(()=>{let p=[];r=P(r,[1,o,i]);for(let u=0;u<t.length;++u){let f=[0,u===0?0:n[u-1],0],d=[1,t[u],i];p[u]=P(yt(r,f,d),a)}return r.dispose(),p}),l=new yl([],e,r.dtype,t.length);for(let p=0;p<c.length;p++)l.setItem(p,c[p]);return l}var u2=async(r,t,e)=>{switch(r.op){case"If":case"StatelessIf":{let o=w("thenBranch",r,t,e),n=w("elseBranch",r,t,e),s=w("cond",r,t,e),a=w("args",r,t,e);return(await s.data())[0]?e.functionMap[o].executeFunctionAsync(a,e.tensorArrayMap,e.tensorListMap):e.functionMap[n].executeFunctionAsync(a,e.tensorArrayMap,e.tensorListMap)}case"While":case"StatelessWhile":{let o=w("body",r,t,e),n=w("cond",r,t,e),s=w("args",r,t,e),a=await e.functionMap[n].executeFunctionAsync(s,e.tensorArrayMap,e.tensorListMap),i=s.map(p=>p.id),c=await a[0].data();a.forEach(p=>{!p.kept&&i.indexOf(p.id)===-1&&p.dispose()});let l=s;for(;c[0];){let p=l;l=await e.functionMap[o].executeFunctionAsync(l,e.tensorArrayMap,e.tensorListMap);let u=l.map(f=>f.id);p.forEach(f=>{!f.kept&&i.indexOf(f.id)===-1&&u.indexOf(f.id)===-1&&f.dispose()});let m=await e.functionMap[n].executeFunctionAsync(l,e.tensorArrayMap,e.tensorListMap);c=await m[0].data(),m.forEach(f=>{!f.kept&&i.indexOf(f.id)===-1&&u.indexOf(f.id)===-1&&f.dispose()})}return l}case"LoopCond":{let o=w("pred",r,t,e);return[Kr(o)]}case"Switch":{let o=w("pred",r,t,e),n=w("data",r,t,e);return n.kept||(n=Kr(n)),(await o.data())[0]?[void 0,n]:[n,void 0]}case"Merge":{let o=r.inputNames.find(n=>ae(n,t,e)!==void 0);if(o){let n=ae(o,t,e);return[Kr(n)]}return}case"Enter":{let o=w("frameName",r,t,e),n=w("tensor",r,t,e);return e.enterFrame(o),[Kr(n)]}case"Exit":{let o=w("tensor",r,t,e);return e.exitFrame(),[Kr(o)]}case"NextIteration":{let o=w("tensor",r,t,e);return e.nextIteration(),[Kr(o)]}case"TensorArrayV3":{let o=w("size",r,t,e),n=w("dtype",r,t,e),s=w("elementShape",r,t,e),a=w("dynamicSize",r,t,e),i=w("clearAfterRead",r,t,e),c=w("identicalElementShapes",r,t,e),l=w("name",r,t,e),p=new th(l,n,o,s,c,a,i);return e.addTensorArray(p),[p.idTensor,lt(1)]}case"TensorArrayWriteV3":{let o=w("tensorArrayId",r,t,e),n=w("index",r,t,e),s=w("tensor",r,t,e),a=e.getTensorArray(o.id);return a.write(n,s),[a.idTensor]}case"TensorArrayReadV3":{let o=w("tensorArrayId",r,t,e),n=w("index",r,t,e);return[e.getTensorArray(o.id).read(n)]}case"TensorArrayGatherV3":{let o=w("tensorArrayId",r,t,e),n=w("indices",r,t,e),s=w("dtype",r,t,e);return[e.getTensorArray(o.id).gather(n,s)]}case"TensorArrayScatterV3":{let o=w("tensorArrayId",r,t,e),n=w("indices",r,t,e),s=w("tensor",r,t,e),a=e.getTensorArray(o.id);return a.scatter(n,s),[a.idTensor]}case"TensorArrayConcatV3":{let o=w("tensorArrayId",r,t,e),n=e.getTensorArray(o.id),s=w("dtype",r,t,e);return[n.concat(s)]}case"TensorArraySplitV3":{let o=w("tensorArrayId",r,t,e),n=w("tensor",r,t,e),s=w("lengths",r,t,e),a=e.getTensorArray(o.id);return a.split(s,n),[a.idTensor]}case"TensorArraySizeV3":{let o=w("tensorArrayId",r,t,e),n=e.getTensorArray(o.id);return[lt(n.size(),"int32")]}case"TensorArrayCloseV3":{let o=w("tensorArrayId",r,t,e),n=e.getTensorArray(o.id);return n.clearAndClose(),[n.idTensor]}case"TensorListSetItem":{let o=w("tensorListId",r,t,e),n=w("index",r,t,e),s=w("tensor",r,t,e),a=e.getTensorList(o.id);return a.setItem(n,s),[a.idTensor]}case"TensorListGetItem":{let o=w("tensorListId",r,t,e),n=w("index",r,t,e),s=w("elementShape",r,t,e),a=w("elementDType",r,t,e);return[e.getTensorList(o.id).getItem(n,s,a)]}case"TensorListScatterV2":case"TensorListScatter":{let o=w("indices",r,t,e),n=w("tensor",r,t,e),s=w("elementShape",r,t,e),a=w("numElements",r,t,e),i=l2(n,o,s,a);return e.addTensorList(i),[i.idTensor]}case"TensorListReserve":case"EmptyTensorList":{let o=w("elementShape",r,t,e),n=w("elementDType",r,t,e),s;r.op==="TensorListReserve"?s="numElements":s="maxNumElements";let a=w(s,r,t,e),i=r.op==="TensorListReserve"?-1:a,c=c2(o,n,a,i);return e.addTensorList(c),[c.idTensor]}case"TensorListGather":{let o=w("tensorListId",r,t,e),n=w("indices",r,t,e),s=w("elementShape",r,t,e),a=w("elementDType",r,t,e);return[e.getTensorList(o.id).gather(n,a,s)]}case"TensorListStack":{let o=w("tensorListId",r,t,e),n=w("elementShape",r,t,e),s=w("elementDType",r,t,e),a=w("numElements",r,t,e);return[e.getTensorList(o.id).stack(n,s,a)]}case"TensorListFromTensor":{let o=w("tensor",r,t,e),n=w("elementShape",r,t,e),s=w("elementDType",r,t,e),a=i2(o,n,s);return e.addTensorList(a),[a.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{let o=w("tensorListId",r,t,e),n=e.getTensorList(o.id),s=w("dtype",r,t,e),a=w("elementShape",r,t,e);return[n.concat(s,a)]}case"TensorListPushBack":{let o=w("tensorListId",r,t,e),n=w("tensor",r,t,e),s=e.getTensorList(o.id);return s.pushBack(n),[s.idTensor]}case"TensorListPopBack":{let o=w("tensorListId",r,t,e),n=w("elementShape",r,t,e),s=w("elementDType",r,t,e);return[e.getTensorList(o.id).popBack(n,s)]}case"TensorListSplit":{let o=w("tensor",r,t,e),n=w("elementShape",r,t,e),s=w("lengths",r,t,e),a=p2(o,s,n);return e.addTensorList(a),[a.idTensor]}case"TensorListLength":{let o=w("tensorListId",r,t,e),n=e.getTensorList(o.id);return[lt(n.size(),"int32")]}case"TensorListResize":{let o=w("tensorListId",r,t,e),n=w("size",r,t,e),a=e.getTensorList(o.id).resize(n);return e.addTensorList(a),[a.idTensor]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};function m2(r,t,e){let[o,n]=w("fusedOps",r,t,e),s=o==="biasadd",a=!s,i=n==="prelu",c=o==="fusedbatchnorm",l=w("numArgs",r,t,e);if(s){if(i&&l!==2)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&s&&l!==1)throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if(c)throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");let p=w("strides",r,t,e),u=ku(r,t,e),m=w("dataFormat",r,t,e).toUpperCase(),f=w("dilations",r,t,e),[d,g]=w("args",r,t,e);a&&(g=d,d=void 0);let h=w("leakyreluAlpha",r,t,e);return{stride:p,pad:u,dataFormat:m,dilations:f,biasArg:d,preluArg:g,activationFunc:n,leakyreluAlpha:h}}var f2=(r,t,e,o=At)=>{switch(r.op){case"Conv1D":{let n=w("stride",r,t,e),s=w("pad",r,t,e),a=w("dataFormat",r,t,e).toUpperCase(),i=w("dilation",r,t,e);return[o.conv1d(w("x",r,t,e),w("filter",r,t,e),n,s,a,i)]}case"Conv2D":{let n=w("strides",r,t,e),s=ku(r,t,e),a=w("dataFormat",r,t,e).toUpperCase(),i=w("dilations",r,t,e);return[o.conv2d(w("x",r,t,e),w("filter",r,t,e),[n[1],n[2]],s,a,[i[1],i[2]])]}case"_FusedConv2D":{let{stride:n,pad:s,dataFormat:a,dilations:i,biasArg:c,preluArg:l,activationFunc:p,leakyreluAlpha:u}=m2(r,t,e);return[o.fused.conv2d({x:w("x",r,t,e),filter:w("filter",r,t,e),strides:[n[1],n[2]],pad:s,dataFormat:a,dilations:[i[1],i[2]],bias:c,activation:p,preluActivationWeights:l,leakyreluAlpha:u})]}case"FusedDepthwiseConv2dNative":{let{stride:n,pad:s,dataFormat:a,dilations:i,biasArg:c,preluArg:l,activationFunc:p,leakyreluAlpha:u}=m2(r,t,e);return[o.fused.depthwiseConv2d({x:w("x",r,t,e),filter:w("filter",r,t,e),strides:[n[1],n[2]],pad:s,dataFormat:a,dilations:[i[1],i[2]],bias:c,activation:p,preluActivationWeights:l,leakyreluAlpha:u})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{let n=w("outputShape",r,t,e),s=w("strides",r,t,e),a=ku(r,t,e);return[o.conv2dTranspose(w("x",r,t,e),w("filter",r,t,e),n,[s[1],s[2]],a)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{let n=w("strides",r,t,e),s=ku(r,t,e),a=w("dilations",r,t,e),i=w("dataFormat",r,t,e).toUpperCase();return[o.depthwiseConv2d(w("input",r,t,e),w("filter",r,t,e),[n[1],n[2]],s,i,[a[1],a[2]])]}case"Conv3D":{let n=w("strides",r,t,e),s=w("pad",r,t,e),a=w("dataFormat",r,t,e).toUpperCase(),i=w("dilations",r,t,e);return[o.conv3d(w("x",r,t,e),w("filter",r,t,e),[n[1],n[2],n[3]],s,a,[i[1],i[2],i[3]])]}case"AvgPool":{let n=w("strides",r,t,e),s=w("pad",r,t,e),a=w("kernelSize",r,t,e);return[o.avgPool(w("x",r,t,e),[a[1],a[2]],[n[1],n[2]],s)]}case"MaxPool":{let n=w("strides",r,t,e),s=w("pad",r,t,e),a=w("kernelSize",r,t,e);return[o.maxPool(w("x",r,t,e),[a[1],a[2]],[n[1],n[2]],s)]}case"MaxPoolWithArgmax":{let n=w("strides",r,t,e),s=w("pad",r,t,e),a=w("kernelSize",r,t,e),i=w("includeBatchInIndex",r,t,e),{result:c,indexes:l}=o.maxPoolWithArgmax(w("x",r,t,e),[a[1],a[2]],[n[1],n[2]],s,i);return[c,l]}case"AvgPool3D":{let n=w("strides",r,t,e),s=w("pad",r,t,e),a=w("kernelSize",r,t,e);return[o.avgPool3d(w("x",r,t,e),[a[1],a[2],a[3]],[n[1],n[2],n[3]],s)]}case"MaxPool3D":{let n=w("strides",r,t,e),s=w("pad",r,t,e),a=w("kernelSize",r,t,e);return[o.maxPool3d(w("x",r,t,e),[a[1],a[2],a[3]],[n[1],n[2],n[3]],s)]}case"Dilation2D":{let n=w("strides",r,t,e),s=w("pad",r,t,e),a=w("dilations",r,t,e),i=n[1],c=n[2],l=a[1],p=a[2];return[o.dilation2d(w("x",r,t,e),w("filter",r,t,e),[i,c],s,[l,p],"NHWC")]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var d2=(r,t,e,o=At)=>{switch(r.op){case"Fill":{let n=w("shape",r,t,e),s=w("dtype",r,t,e),a=w("value",r,t,e);return[o.fill(n,a,s)]}case"LinSpace":{let n=w("start",r,t,e),s=w("stop",r,t,e),a=w("num",r,t,e);return[o.linspace(n,s,a)]}case"Multinomial":{let n=w("logits",r,t,e),s=w("numSamples",r,t,e),a=w("seed",r,t,e);return[o.multinomial(n,s,a)]}case"OneHot":{let n=w("indices",r,t,e),s=w("depth",r,t,e),a=w("onValue",r,t,e),i=w("offValue",r,t,e),c=w("dtype",r,t,e);return[o.oneHot(n,s,a,i,c)]}case"Ones":return[o.ones(w("shape",r,t,e),w("dtype",r,t,e))];case"OnesLike":return[o.onesLike(w("x",r,t,e))];case"RandomStandardNormal":return[o.randomStandardNormal(w("shape",r,t,e),w("dtype",r,t,e),w("seed",r,t,e))];case"RandomUniform":return[o.randomUniform(w("shape",r,t,e),w("minval",r,t,e),w("maxval",r,t,e),w("dtype",r,t,e))];case"RandomUniformInt":return[o.randomUniformInt(w("shape",r,t,e),w("minval",r,t,e),w("maxval",r,t,e),w("seed",r,t,e))];case"Range":{let n=w("start",r,t,e),s=w("stop",r,t,e),a=w("step",r,t,e);return[o.range(n,s,a,w("dtype",r,t,e))]}case"TruncatedNormal":{let n=w("shape",r,t,e),s=w("mean",r,t,e),a=w("stdDev",r,t,e),i=w("seed",r,t,e);return[o.truncatedNormal(n,s,a,w("dtype",r,t,e),i)]}case"Zeros":return[o.zeros(w("shape",r,t,e),w("dtype",r,t,e))];case"ZerosLike":return[o.zerosLike(w("x",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function Sb(r,t,e){let o=w("boxes",r,t,e),n=w("scores",r,t,e),s=w("maxOutputSize",r,t,e),a=w("iouThreshold",r,t,e),i=w("scoreThreshold",r,t,e),c=w("softNmsSigma",r,t,e);return{boxes:o,scores:n,maxOutputSize:s,iouThreshold:a,scoreThreshold:i,softNmsSigma:c}}var h2=async(r,t,e,o,n=At)=>{switch(r.op){case"NonMaxSuppressionV5":{let{boxes:s,scores:a,maxOutputSize:i,iouThreshold:c,scoreThreshold:l,softNmsSigma:p}=Sb(r,t,e),u=await n.image.nonMaxSuppressionWithScoreAsync(s,a,i,c,l,p);return[u.selectedIndices,u.selectedScores]}case"NonMaxSuppressionV4":{let{boxes:s,scores:a,maxOutputSize:i,iouThreshold:c,scoreThreshold:l}=Sb(r,t,e),p=w("padToMaxOutputSize",r,t,e),u=await n.image.nonMaxSuppressionPaddedAsync(s,a,i,c,l,p);return[u.selectedIndices,u.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{let{boxes:s,scores:a,maxOutputSize:i,iouThreshold:c,scoreThreshold:l}=Sb(r,t,e);return[await n.image.nonMaxSuppressionAsync(s,a,i,c,l)]}case"Where":{let s=n.cast(w("condition",r,t,e),"bool"),a=[await n.whereAsync(s)];return s.dispose(),a}case"ListDiff":return n.setdiff1dAsync(w("x",r,t,e),w("y",r,t,e));default:throw TypeError(`Node type ${r.op} is not implemented`)}};var g2=(r,t,e,o=At)=>{switch(r.op){case"LowerBound":{let n=w("sortedSequence",r,t,e),s=w("values",r,t,e);return[o.lowerBound(n,s)]}case"TopKV2":{let n=w("x",r,t,e),s=w("k",r,t,e),a=w("sorted",r,t,e),i=o.topk(n,s,a);return[i.values,i.indices]}case"UpperBound":{let n=w("sortedSequence",r,t,e),s=w("values",r,t,e);return[o.upperBound(n,s)]}case"Unique":{let n=w("x",r,t,e),s=o.unique(n);return[s.values,s.indices]}case"UniqueV2":{let n=w("x",r,t,e),s=w("axis",r,t,e),a=o.unique(n,s);return[a.values,a.indices]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var x2=(r,t,e,o=At)=>{switch(r.op){case"Const":return t[r.name];case"PlaceholderWithDefault":let n=w("default",r,t,e);return[ae(r.name,t,e)||n];case"Placeholder":return[ae(r.name,t,e)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":{let p=w("x",r,t,e);return[Kr(p)]}case"IdentityN":return w("x",r,t,e).map(p=>Kr(p));case"Snapshot":let s=w("x",r,t,e);return[Kr(s)];case"Shape":return[o.tensor1d(w("x",r,t,e).shape,"int32")];case"ShapeN":return w("x",r,t,e).map(p=>o.tensor1d(p.shape));case"Size":return[o.scalar(w("x",r,t,e).size,"int32")];case"Rank":return[o.scalar(w("x",r,t,e).rank,"int32")];case"NoOp":return[o.scalar(1)];case"Print":let a=w("x",r,t,e),i=w("data",r,t,e),c=w("message",r,t,e),l=w("summarize",r,t,e);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(c);for(let p=0;p<i.length;p++)console.log(Array.prototype.slice.call(i[p].dataSync()).slice(0,l));return[a];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var eh=class{get id(){return this.handle.id}constructor(t,e){this.keyDType=t,this.valueDType=e,this.handle=lt(0),this.tensorMap=new Map,Le(this.handle)}clearAndClose(){this.tensorMap.forEach(t=>t.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return lt(this.size(),"int32")}async import(t,e){this.checkKeyAndValueTensor(t,e);let o=await t.data();return this.tensorMap.forEach(n=>n.dispose()),this.tensorMap.clear(),gt(()=>{let n=Ge(e),s=o.length,a=n.length;y.assert(s===a,()=>`The number of elements doesn't match, keys has ${s} elements, the values has ${a} elements.`);for(let i=0;i<s;i++){let c=o[i],l=n[i];Le(l),this.tensorMap.set(c,l)}return this.handle})}async find(t,e){this.checkKeyAndValueTensor(t,e);let o=await t.data();return gt(()=>{let n=[];for(let s=0;s<o.length;s++){let a=o[s],i=this.findWithDefault(a,e);n.push(i)}return ye(n)})}findWithDefault(t,e){let o=this.tensorMap.get(t);return o??e}checkKeyAndValueTensor(t,e){if(t.dtype!==this.keyDType)throw new Error(`Expect key dtype ${this.keyDType}, but got ${t.dtype}`);if(e.dtype!==this.valueDType)throw new Error(`Expect value dtype ${this.valueDType}, but got ${e.dtype}`)}};var y2=async(r,t,e,o)=>{switch(r.op){case"HashTable":case"HashTableV2":{let n=o.getHashTableHandleByName(r.name);if(n!=null)return[n];{let s=w("keyDType",r,t,e),a=w("valueDType",r,t,e),i=new eh(s,a);return o.addHashTable(r.name,i),[i.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{let n=w("tableHandle",r,t,e,o),s=w("keys",r,t,e),a=w("values",r,t,e);return[await o.getHashTableById(n.id).import(s,a)]}case"LookupTableFind":case"LookupTableFindV2":{let n=w("tableHandle",r,t,e,o),s=w("keys",r,t,e),a=w("defaultValue",r,t,e);return[await o.getHashTableById(n.id).find(s,a)]}case"LookupTableSize":case"LookupTableSizeV2":{let n=w("tableHandle",r,t,e,o);return[o.getHashTableById(n.id).tensorSize()]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var b2=(r,t,e,o=At)=>{switch(r.op){case"ResizeBilinear":{let n=w("images",r,t,e),s=w("size",r,t,e),a=w("alignCorners",r,t,e),i=w("halfPixelCenters",r,t,e);return[o.image.resizeBilinear(n,[s[0],s[1]],a,i)]}case"ResizeNearestNeighbor":{let n=w("images",r,t,e),s=w("size",r,t,e),a=w("alignCorners",r,t,e),i=w("halfPixelCenters",r,t,e);return[o.image.resizeNearestNeighbor(n,[s[0],s[1]],a,i)]}case"CropAndResize":{let n=w("image",r,t,e),s=w("boxes",r,t,e),a=w("boxInd",r,t,e),i=w("cropSize",r,t,e),c=w("method",r,t,e),l=w("extrapolationValue",r,t,e);return[o.image.cropAndResize(n,s,a,i,c,l)]}case"ImageProjectiveTransformV3":{let n=w("images",r,t,e),s=w("transforms",r,t,e),a=w("outputShape",r,t,e),i=w("fillValue",r,t,e),c=w("interpolation",r,t,e),l=w("fillMode",r,t,e);return[o.image.transform(n,s,c.toLowerCase(),l.toLowerCase(),i,a)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var w2=(r,t,e,o=At)=>{switch(r.op){case"Equal":return[o.equal(w("a",r,t,e),w("b",r,t,e))];case"NotEqual":return[o.notEqual(w("a",r,t,e),w("b",r,t,e))];case"Greater":return[o.greater(w("a",r,t,e),w("b",r,t,e))];case"GreaterEqual":return[o.greaterEqual(w("a",r,t,e),w("b",r,t,e))];case"Less":return[o.less(w("a",r,t,e),w("b",r,t,e))];case"LessEqual":return[o.lessEqual(w("a",r,t,e),w("b",r,t,e))];case"LogicalAnd":return[o.logicalAnd(w("a",r,t,e),w("b",r,t,e))];case"LogicalNot":return[o.logicalNot(w("a",r,t,e))];case"LogicalOr":return[o.logicalOr(w("a",r,t,e),w("b",r,t,e))];case"Select":case"SelectV2":return[o.where(w("condition",r,t,e),w("a",r,t,e),w("b",r,t,e))];case"BitwiseAnd":return[o.bitwiseAnd(w("a",r,t,e),w("b",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var C2=(r,t,e,o=At)=>{switch(r.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[o.matMul(w("a",r,t,e),w("b",r,t,e),w("transposeA",r,t,e),w("transposeB",r,t,e))];case"Einsum":return[o.einsum(w("equation",r,t,e),...w("tensors",r,t,e))];case"Transpose":return[o.transpose(w("x",r,t,e),w("perm",r,t,e))];case"_FusedMatMul":let[n,s]=w("fusedOps",r,t,e),a=n==="biasadd",i=s==="prelu",c=w("numArgs",r,t,e),l=w("leakyreluAlpha",r,t,e);if(a){if(i&&c!==2)throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&c!==1)throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}let[p,u]=w("args",r,t,e);return[o.fused.matMul({a:w("a",r,t,e),b:w("b",r,t,e),transposeA:w("transposeA",r,t,e),transposeB:w("transposeB",r,t,e),bias:p,activation:s,preluActivationWeights:u,leakyreluAlpha:l})];case"MatrixBandPart":return[o.linalg.bandPart(w("a",r,t,e),w("numLower",r,t,e),w("numUpper",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var T2=(r,t,e,o=At)=>{switch(r.op){case"EuclideanNorm":return[o.euclideanNorm(w("x",r,t,e),w("axis",r,t,e),w("keepDims",r,t,e))];case"FusedBatchNorm":case"FusedBatchNormV2":return[o.batchNorm(w("x",r,t,e),w("mean",r,t,e),w("variance",r,t,e),w("offset",r,t,e),w("scale",r,t,e),w("epsilon",r,t,e))];case"FusedBatchNormV3":return[o.batchNorm(w("x",r,t,e),w("mean",r,t,e),w("variance",r,t,e),w("offset",r,t,e),w("scale",r,t,e),w("epsilon",r,t,e))];case"LRN":return[o.localResponseNormalization(w("x",r,t,e),w("radius",r,t,e),w("bias",r,t,e),w("alpha",r,t,e),w("beta",r,t,e))];case"Softmax":return[o.softmax(w("x",r,t,e))];case"LogSoftmax":return[o.logSoftmax(w("x",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var I2=(r,t,e,o=At)=>{switch(r.op){case"RaggedGather":{let{outputNestedSplits:n,outputDenseValues:s}=o.raggedGather(w("paramsNestedSplits",r,t,e),w("paramsDenseValues",r,t,e),w("indices",r,t,e),w("outputRaggedRank",r,t,e));return n.concat(s)}case"RaggedRange":{let{rtNestedSplits:n,rtDenseValues:s}=o.raggedRange(w("starts",r,t,e),w("limits",r,t,e),w("splits",r,t,e));return[n,s]}case"RaggedTensorToTensor":return[o.raggedTensorToTensor(w("shape",r,t,e),w("values",r,t,e),w("defaultValue",r,t,e),w("rowPartitionTensors",r,t,e),w("rowPartitionTypes",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var S2=(r,t,e,o=At)=>{switch(r.op){case"Max":{let i=w("axis",r,t,e),c=w("keepDims",r,t,e);return[o.max(w("x",r,t,e),i,c)]}case"Mean":{let i=w("axis",r,t,e),c=w("keepDims",r,t,e);return[o.mean(w("x",r,t,e),i,c)]}case"Min":{let i=w("axis",r,t,e),c=w("keepDims",r,t,e);return[o.min(w("x",r,t,e),i,c)]}case"Sum":{let i=w("axis",r,t,e),c=w("keepDims",r,t,e);return[o.sum(w("x",r,t,e),i,c)]}case"All":{let i=w("axis",r,t,e),c=w("keepDims",r,t,e);return[o.all(w("x",r,t,e),i,c)]}case"Any":{let i=w("axis",r,t,e),c=w("keepDims",r,t,e);return[o.any(w("x",r,t,e),i,c)]}case"ArgMax":{let i=w("axis",r,t,e);return[o.argMax(w("x",r,t,e),i)]}case"ArgMin":{let i=w("axis",r,t,e);return[o.argMin(w("x",r,t,e),i)]}case"Prod":{let i=w("axis",r,t,e),c=w("keepDims",r,t,e);return[o.prod(w("x",r,t,e),i,c)]}case"Cumprod":{let i=w("axis",r,t,e),c=w("exclusive",r,t,e),l=w("reverse",r,t,e);return[o.cumprod(w("x",r,t,e),i,c,l)]}case"Cumsum":{let i=w("axis",r,t,e),c=w("exclusive",r,t,e),l=w("reverse",r,t,e);return[o.cumsum(w("x",r,t,e),i,c,l)]}case"Bincount":let n=w("x",r,t,e),s=w("weights",r,t,e),a=w("size",r,t,e);return[o.bincount(n,s,a)];case"DenseBincount":{let i=w("x",r,t,e),c=w("weights",r,t,e),l=w("size",r,t,e),p=w("binaryOutput",r,t,e);return[o.denseBincount(i,c,l,p)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var v2=(r,t,e,o=At)=>{switch(r.op){case"ConcatV2":case"Concat":{let n=w("n",r,t,e),s=w("axis",r,t,e),a=w("tensors",r,t,e);return a=a.slice(0,n),[o.concat(a,s)]}case"Gather":{let n=w("x",r,t,e),s=w("indices",r,t,e);return[o.gather(n,o.cast(s,"int32"),0)]}case"GatherV2":{let n=w("axis",r,t,e),s=w("batchDims",r,t,e),a=w("x",r,t,e),i=w("indices",r,t,e);return[o.gather(a,o.cast(i,"int32"),n,s)]}case"Reverse":{let n=w("dims",r,t,e),s=[];for(let i=0;i<n.length;i++)n[i]&&s.push(i);let a=w("x",r,t,e);return[o.reverse(a,s)]}case"ReverseV2":{let n=w("axis",r,t,e),s=w("x",r,t,e);return[o.reverse(s,n)]}case"Slice":{let n=w("begin",r,t,e),s=w("size",r,t,e);return[o.slice(w("x",r,t,e),n,s)]}case"StridedSlice":{let n=w("begin",r,t,e),s=w("end",r,t,e),a=w("strides",r,t,e),i=w("beginMask",r,t,e),c=w("endMask",r,t,e),l=w("ellipsisMask",r,t,e),p=w("newAxisMask",r,t,e),u=w("shrinkAxisMask",r,t,e),m=w("x",r,t,e);return[o.stridedSlice(m,n,s,a,i,c,l,p,u)]}case"Pack":return gt(()=>{let n=w("axis",r,t,e),s=w("tensors",r,t,e),a=s[0].shape,i=o.squeeze(s[0]).shape,c=s.map(l=>{let p=y.arraysEqual(l.shape,a);if(!p&&!y.arraysEqual(o.squeeze(l).shape,i))throw new Error("the input tensors shape does not match");return p?l:o.reshape(l,a)});return[o.stack(c,n)]});case"Unpack":{let n=w("axis",r,t,e),s=w("tensor",r,t,e);return o.unstack(s,n)}case"Tile":{let n=w("reps",r,t,e);return[o.tile(w("x",r,t,e),n)]}case"Split":case"SplitV":{let n=w("axis",r,t,e),s=w("numOrSizeSplits",r,t,e),a=w("x",r,t,e);return o.split(a,s,n)}case"ScatterNd":{let n=w("indices",r,t,e),s=w("values",r,t,e),a=w("shape",r,t,e);return[o.scatterND(n,s,a)]}case"GatherNd":{let n=w("x",r,t,e),s=w("indices",r,t,e);return[o.gatherND(n,s)]}case"SparseToDense":{let n=w("sparseIndices",r,t,e),s=w("outputShape",r,t,e),a=w("sparseValues",r,t,e),i=w("defaultValue",r,t,e);return[o.sparseToDense(n,a,s,a.dtype===i.dtype?i:o.cast(i,a.dtype))]}case"TensorScatterUpdate":{let n=w("indices",r,t,e),s=w("values",r,t,e),a=w("tensor",r,t,e);return[o.tensorScatterUpdate(a,n,s)]}default:throw TypeError(`Node type ${r.op} is not implemented`)}};var N2=(r,t,e,o=At)=>{switch(r.op){case"SparseFillEmptyRows":{let{outputIndices:n,outputValues:s,emptyRowIndicator:a,reverseIndexMap:i}=o.sparse.sparseFillEmptyRows(w("indices",r,t,e),w("values",r,t,e),w("denseShape",r,t,e),w("defaultValue",r,t,e));return[n,s,a,i]}case"SparseReshape":{let{outputIndices:n,outputShape:s}=o.sparse.sparseReshape(w("inputIndices",r,t,e),w("inputShape",r,t,e),w("newShape",r,t,e));return[n,s]}case"SparseSegmentMean":return[o.sparse.sparseSegmentMean(w("data",r,t,e),w("indices",r,t,e),w("segmentIds",r,t,e))];case"SparseSegmentSum":return[o.sparse.sparseSegmentSum(w("data",r,t,e),w("indices",r,t,e),w("segmentIds",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var k2=(r,t,e,o=At)=>{switch(r.op){case"FFT":return[o.fft(w("x",r,t,e))];case"IFFT":return[o.ifft(w("x",r,t,e))];case"RFFT":return[o.rfft(w("x",r,t,e))];case"IRFFT":return[o.irfft(w("x",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var E2=(r,t,e,o=At)=>{switch(r.op){case"StaticRegexReplace":return[o.string.staticRegexReplace(w("input",r,t,e),w("pattern",r,t,e),w("rewrite",r,t,e),w("replaceGlobal",r,t,e))];case"StringNGrams":{let{nGrams:n,nGramsSplits:s}=o.string.stringNGrams(w("data",r,t,e),w("dataSplits",r,t,e),w("separator",r,t,e),w("nGramWidths",r,t,e),w("leftPad",r,t,e),w("rightPad",r,t,e),w("padWidth",r,t,e),w("preserveShortSequences",r,t,e));return[n,s]}case"StringSplit":{let{indices:n,values:s,shape:a}=o.string.stringSplit(w("input",r,t,e),w("delimiter",r,t,e),w("skipEmpty",r,t,e));return[n,s,a]}case"StringToHashBucketFast":return[o.string.stringToHashBucketFast(w("input",r,t,e),w("numBuckets",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};var $2=(r,t,e,o=At)=>{switch(r.op){case"Cast":return[o.cast(w("x",r,t,e),w("dtype",r,t,e))];case"ExpandDims":{let n=w("axis",r,t,e);return[o.expandDims(w("x",r,t,e),n)]}case"Squeeze":{let n=w("axis",r,t,e);return[o.squeeze(w("x",r,t,e),n)]}case"Reshape":return[o.reshape(w("x",r,t,e),w("shape",r,t,e))];case"EnsureShape":return[o.ensureShape(w("x",r,t,e),w("shape",r,t,e))];case"MirrorPad":return[o.mirrorPad(w("x",r,t,e),w("padding",r,t,e),w("mode",r,t,e))];case"PadV2":case"Pad":return[o.pad(w("x",r,t,e),w("padding",r,t,e),w("constantValue",r,t,e))];case"SpaceToBatchND":{let n=w("blockShape",r,t,e),s=w("paddings",r,t,e);return[o.spaceToBatchND(w("x",r,t,e),n,s)]}case"BatchToSpaceND":{let n=w("blockShape",r,t,e),s=w("crops",r,t,e);return[o.batchToSpaceND(w("x",r,t,e),n,s)]}case"DepthToSpace":{let n=w("blockSize",r,t,e),s=w("dataFormat",r,t,e).toUpperCase();return[o.depthToSpace(w("x",r,t,e),n,s)]}case"BroadcastTo":return[o.broadcastTo(w("x",r,t,e),w("shape",r,t,e))];case"BroadcastArgs":return[o.broadcastArgs(w("s0",r,t,e),w("s1",r,t,e))];default:throw TypeError(`Node type ${r.op} is not implemented`)}};function vb(r,t,e,o,n=gt){let s=((a,i,c)=>{switch(a.category){case"arithmetic":return n(()=>n2(a,i,c));case"basic_math":return n(()=>s2(a,i,c));case"control":return u2(a,i,c);case"convolution":return n(()=>f2(a,i,c));case"creation":return n(()=>d2(a,i,c));case"dynamic":return h2(a,i,c);case"evaluation":return n(()=>g2(a,i,c));case"image":return n(()=>b2(a,i,c));case"graph":return n(()=>x2(a,i,c));case"logical":return n(()=>w2(a,i,c));case"matrices":return n(()=>C2(a,i,c));case"normalization":return n(()=>T2(a,i,c));case"ragged":return n(()=>I2(a,i,c));case"reduction":return n(()=>S2(a,i,c));case"slice_join":return n(()=>v2(a,i,c));case"sparse":return n(()=>N2(a,i,c));case"spectral":return n(()=>k2(a,i,c));case"string":return n(()=>E2(a,i,c));case"transformation":return n(()=>$2(a,i,c));case"hash_table":return y2(a,i,c,o);case"custom":let l=Vd(a.op);if(l&&l.customExecutor)return l.customExecutor(new Qd(a,i,c));throw TypeError(`Custom op ${a.op} is not registered.`);default:throw TypeError(`Unknown op '${a.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(r,t,e);return y.isPromise(s)?s.then(a=>[].concat(a)):[].concat(s)}var $u=class{constructor(t={},e={},o={},n={},s){this.weightMap=t,this.tensorArrayMap=e,this.tensorListMap=o,this.functionMap=n,this.parseNodeNameCache=s,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(t,e){return{id:t,frameName:e,iterationId:0}}set currentContext(t){this.contexts!==t&&(this.contexts=t,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){let t=[];for(let e=0;e<this.contexts.length-1;e++){let o=this.contexts.slice(0,this.contexts.length-e);t.push(this.contextIdforContexts(o))}t.push(""),this._currentContextIds=t}contextIdforContexts(t){return t?t.map(e=>e.id===0&&e.iterationId===0?"":`${e.frameName}-${e.iterationId}`).join("/"):""}enterFrame(t){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,t)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw new Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;let t=Object.assign({},this.contexts[this.contexts.length-1]);t.iterationId+=1,t.id=this.lastId,this.contexts.splice(-1,1,t),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw new Error("Cannot increase frame iteration, the context is empty")}getWeight(t){return this.weightMap[t]}addTensorArray(t){this.tensorArrayMap[t.id]=t}getTensorArray(t){return this.tensorArrayMap[t]}addTensorList(t){this.tensorListMap[t.id]=t}getTensorList(t){return this.tensorListMap[t]}dispose(t){for(let e in this.tensorArrayMap)this.tensorArrayMap[e].clearAndClose(t);for(let e in this.tensorListMap)this.tensorListMap[e].clearAndClose(t)}};function Nb(r,t,e,o){let n=new Set,s=[],a=null,i=null,c=new Set,l=new Set(Object.keys(r).map(m=>Ue(m)[0]));o=o||[];let p=new Set(o.map(m=>Ue(m.name)[0])),u=[...t];for(;u.length>0;){let m=u.pop();if((ys(m)||oq(m)||nq(m))&&a==null&&(a=m,i=a.children.map(f=>f.name).filter(f=>n.has(f))),n.add(m.name),e[m.name]==null&&!l.has(m.name)&&!p.has(m.name)){if(m.inputs.length===0){s.push(m.name);continue}m.inputs.forEach(f=>{c.has(f.name)||(c.add(f.name),u.push(f))})}}return{inputs:r,outputs:t,usedNodes:n,missingInputs:s,dynamicNode:a,syncInputs:i}}function A2(r,t){let{usedNodes:e,inputs:o}=t,n=Object.keys(o).map(h=>Ue(h)[0]).map(h=>r.nodes[h]),s=r.initNodes||[],a=h=>e.has(typeof h=="string"?h:h.name);function i(h){return[...new Map(h.map(x=>[x.name,x])).values()]}let c=i([...n,...r.weights,...s]).filter(a),l=i([...c,...Object.values(r.nodes)]).filter(a),p=new Map(l.map(h=>[h.name,h])),u={};for(let h of l){u[h.name]=u[h.name]||0;for(let x of h.children)a(x)||(u[x.name]=Number.POSITIVE_INFINITY),u[x.name]=(u[x.name]||0)+1}let m=Object.entries(u).filter(([,h])=>h===0).map(([h])=>h),f=[...m];for(;m.length>0;){let h=m.pop(),x=p.get(h);for(let b of x.children.filter(a))--u[b.name]===0&&(f.push(b.name),m.push(b.name))}let d=f.map(h=>p.get(h)),g=QH(d,c);return JH(g,c),g}function QH(r,t){let e=new Map(r.map(a=>[a.name,a])),o=t.map(a=>a.name),n=new Set(o);for(;o.length>0;){let a=o.pop(),i=e.get(a);for(let c of i.children)!e.has(c.name)||n.has(c.name)||(n.add(c.name),o.push(c.name))}return r.filter(a=>n.has(a.name))}var bl=class extends Error{constructor(t){super(`NodesExecutionOrderError: ${t}`)}};function JH(r,t){let e=new Map(r.map((i,c)=>[i.name,c])),o=new Set(t.map(i=>i.name)),n=i=>o.has(typeof i=="string"?i:i.name),s=new Set(r.map(i=>i.name)),a=i=>s.has(typeof i=="string"?i:i.name);for(let i of r){for(let c of i.children.filter(a)){if(!e.has(c.name))throw new bl(`Child ${c.name} of node ${i.name} is unreachable.`);if(e.get(i.name)>e.get(c.name))throw new bl(`Node ${i.name} is scheduled to run after its child ${c.name}.`)}if(!n(i))for(let c of i.inputs){if(!e.has(c.name))throw new bl(`Input ${c.name} of node ${i.name} is unreachable.`);if(e.get(c.name)>e.get(i.name))throw new bl(`Node ${i.name} is scheduled to run before its input ${c.name}.`)}}}function R2(r){let t=new Map(r.map((i,c)=>[i.name,c])),e=Number.MAX_SAFE_INTEGER,o=r.map((i,c)=>ys(i)?e:c),n=i=>{let c=o[t.get(i.name)];return c??-1},s=r.map((i,c)=>i.children.map(n).reduce((l,p)=>Math.max(l,p),o[c])),a=new Map;for(let i=0;i<r.length;++i){let c=s[i];if(c===e)continue;let l=r[i],p=r[c];a.has(p.name)||a.set(p.name,[]),a.get(p.name).push(l)}return a}var tq=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),eq=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),rq=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function ys(r){return tq.has(r.op)}function oq(r){return eq.has(r.op)}function nq(r){return rq.has(r.op)}var Au=class r{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(t){let e=Object.keys(t).map(o=>t[o].map(n=>n.id));this._weightIds=[].concat(...e),this._weightMap=t}set resourceManager(t){this._resourceManager=t}get inputs(){return this._inputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(t=>({name:t.name,shape:t.attrParams.shape?t.attrParams.shape.value:void 0,dtype:t.attrParams.dtype?t.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(t=>t.signatureKey||t.name)}get outputNodes(){return this._outputs.map(t=>{let e=t.signatureKey||t.name;return t.defaultOutput?`${e}:${t.defaultOutput}`:e})}get functions(){return Object.keys(this._functions).reduce((t,e)=>(t[e]=this._functions[e].signature,t),{})}constructor(t,e){this.graph=t,this.parent=e,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=t.outputs,this._inputs=t.inputs,this._initNodes=t.initNodes,this._signature=t.signature,this._functions=t.functions,t.functions!=null&&Object.keys(t.functions).forEach(o=>{this._functionExecutorMap[o]=new r(t.functions[o],this)})}getCompilationKey(t,e){let o=t.map(s=>s.name).sort(),n=e.map(s=>s.name).sort();return o.join(this.SEPARATOR)+"--"+n.join(this.SEPARATOR)}compile(t,e){let o=Nb(t,e,this.weightMap,this._initNodes),{missingInputs:n,dynamicNode:s,syncInputs:a}=o;if(s!=null)throw new Error(`This execution contains the node '${s.name}', which has the dynamic op '${s.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${a}]`);if(n.length>0){let l=e.map(u=>u.name),p=Object.keys(t);throw new Error(`Cannot compute the outputs [${l}] from the provided inputs [${p}]. Missing the following inputs: [${n}]`)}let i=A2(this.graph,o),c=R2(i);return{orderedNodes:i,nodeLiveUntilMap:c}}cloneAndKeepTensor(t){if(t==null)return null;let e=t.clone();return Le(e),e}cloneTensorList(t){return t?t.map(o=>this.cloneAndKeepTensor(o)):null}cloneTensorMap(t){return Object.fromEntries(Object.entries(t).map(([e,o])=>[e,this.cloneTensorList(o)]))}execute(t,e){this.disposeIntermediateTensors(),t=this.mapInputs(t);let o=Object.keys(t).sort();this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e);let n=o.map(m=>this.graph.nodes[Ue(m)[0]]),s=e.map(m=>Ue(m)[0]),a=new Set(s),i=s.map(m=>this.graph.nodes[m]);i.length===0&&(i=this._outputs);let c=this.getCompilationKey(n,i),l=this.compiledMap.get(c);l==null&&(l=this.compile(t,i),this.compiledMap.set(c,l));try{this.keepIntermediateTensors=F().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(m){this.keepIntermediateTensors=!1,console.warn(m.message)}let p={},u={};return gt(()=>{let m=new $u(this.weightMap,p,u,this.functionExecutorMap,this.parseNodeNameCache),f=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(t).forEach(x=>{let[b,I]=Ue(x,m),T=[];T[I]=t[x],f[b]=T,this.keepIntermediateTensors&&(this.clonedTensorsMap[b]=this.cloneTensorList(T))});let d=this.getFrozenTensorIds(f),{orderedNodes:g,nodeLiveUntilMap:h}=l;for(let x of g){if(f[x.name])continue;let b=vb(x,f,m,this._resourceManager);if(y.isPromise(b))throw new Error(`The execution of the op '${x.op}' returned a promise. Please use model.executeAsync() instead.`);f[x.name]=b,this.keepIntermediateTensors&&(this.clonedTensorsMap[x.name]=this.cloneTensorList(b)),this.checkTensorForDisposalWithNodeLiveUntilInfo(x,f,m,d,a,h.get(x.name))}return this.parent==null&&m.dispose(d),e.map(x=>ae(x,f,m))})}getFrozenTensorIds(t){let e=[].concat.apply([],Object.keys(t).map(o=>t[o]).map(o=>o.map(n=>n.id)));return new Set(e)}checkTensorForDisposal(t,e,o,n,s,a,i){if(!(ys(e)||a.has(t))){for(let c of o[t])c!=null&&(i[c.id]=(i[c.id]||0)+e.children.length);for(let c of e.inputs){if(ys(c))continue;let l=ob(c.name,o,n);if(l!=null)for(let p of l){if(!p||p.kept||s.has(p.id))continue;let u=i[p.id];u===1?(p.dispose(),delete i[p.id]):u!=null&&i[p.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(t,e,o,n,s,a){function i(c){return ys(c)||s.has(c.name)}if(!(ys(t)||a==null))for(let c of a){if(i(c))continue;let l=ob(c.name,e,o);for(let p of l)!p||p.kept||n.has(p.id)||p.dispose()}}async executeAsync(t,e){return this._executeAsync(t,e)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(t=>{for(let e of t)e&&!e.isDisposed&&e.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(t,e,o=!1,n={},s={}){this.disposeIntermediateTensors(),o||(t=this.mapInputs(t),this.checkInputs(t),this.checkInputShapeAndType(t),e=this.mapOutputs(e),this.checkOutputs(e));try{this.keepIntermediateTensors=F().getBool("KEEP_INTERMEDIATE_TENSORS")}catch(m){this.keepIntermediateTensors=!1,console.warn(m.message)}let a=new $u(this.weightMap,n,s,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));let i=await this.executeWithControlFlow(t,a,e,o),c=e.map(m=>ae(m,i,a)),l=c.map(m=>m.id),p=Object.keys(t).map(m=>t[m].id),u=new Set([...l,...p,...this.weightIds]);return Object.values(i).forEach(m=>{m.forEach(f=>{f&&!f.isDisposed&&!u.has(f.id)&&f.dispose()})}),this.parent==null&&a.dispose(u),c}async executeFunctionAsync(t,e,o){let n=t.reduce((s,a,i)=>(s[this.inputs[i].name]=a,s),{});return this._executeAsync(n,this.outputNodes,!0,e,o)}async executeWithControlFlow(t,e,o,n){let s=Object.keys(t),a=s.map(T=>this.graph.nodes[Ue(T)[0]]),i=o.map(T=>Ue(T)[0]),c=new Set(i),l=i.map(T=>this.graph.nodes[T]);l.length===0&&(l=this._outputs);let{usedNodes:p,missingInputs:u,dynamicNode:m,syncInputs:f}=Nb(t,l,this.weightMap,this._initNodes),d=[...a,...this.graph.weights,...this._initNodes||[]].map(T=>({node:T,contexts:e.currentContext})),g=Object.assign({},this.weightMap);Object.keys(t).forEach(T=>{let[E,$]=Ue(T),A=[];A[$]=t[T],g[E]=A});let h={},x=this.getFrozenTensorIds(g),b={};for(;d.length>0;){let T=this.processStack(a,d,e,g,b,x,c,h,p);await Promise.all(T)}m==null&&!n&&console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");let I=l.filter(T=>!ys(T)&&!ae(T.name,g,e)).map(T=>T.name);if(I.length>0){let T="";throw m!=null&&(T=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${f}]`),new Error(`Cannot compute the outputs [${I}] from the provided inputs [${s}]. Consider providing the following inputs: [${u}]. ${T}`)}return g}processStack(t,e,o,n,s,a,i,c,l){let p=[];for(;e.length>0;){let u=e.pop();o.currentContext=u.contexts;let m="";if(u.node.op==="Enter"&&w("isConstant",u.node,n,o)&&([m]=qr(u.node.name,o)),n[u.node.name]==null){let f=vb(u.node,n,o,this._resourceManager);m||([m]=qr(u.node.name,o));let d=o.currentContext;y.isPromise(f)?p.push(f.then(g=>(n[m]=g,this.keepIntermediateTensors&&(this.clonedTensorsMap[m]=this.cloneTensorList(g)),o.currentContext=d,this.checkTensorForDisposal(m,u.node,n,o,a,i,c),this.processChildNodes(u.node,e,o,n,s,l),g))):(n[m]=f,this.keepIntermediateTensors&&(this.clonedTensorsMap[m]=this.cloneTensorList(f)),this.checkTensorForDisposal(m,u.node,n,o,a,i,c),this.processChildNodes(u.node,e,o,n,s,l))}else this.processChildNodes(u.node,e,o,n,s,l)}return p}processChildNodes(t,e,o,n,s,a){t.children.forEach(i=>{let[c]=qr(i.name,o);s[c]||!a.has(i.name)||(i.op==="Merge"?i.inputNames.some(l=>!!ae(l,n,o))&&(s[c]=!0,e.push({contexts:o.currentContext,node:i})):i.inputNames.every(l=>!!ae(l,n,o))&&(s[c]=!0,e.push({contexts:o.currentContext,node:i})))})}dispose(){Object.keys(this.weightMap).forEach(t=>this.weightMap[t].forEach(e=>e.dispose()))}checkInputShapeAndType(t){Object.keys(t).forEach(e=>{let o=t[e],[n]=Ue(e),s=this.graph.nodes[n];if(s.attrParams.shape&&s.attrParams.shape.value){let a=s.attrParams.shape.value,i=a.length===o.shape.length&&o.shape.every((c,l)=>a[l]===-1||a[l]===c);y.assert(i,()=>`The shape of dict['${s.name}'] provided in model.execute(dict) must be [${a}], but was [${o.shape}]`)}s.attrParams.dtype&&s.attrParams.dtype.value&&y.assert(o.dtype===s.attrParams.dtype.value,()=>`The dtype of dict['${s.name}'] provided in model.execute(dict) must be ${s.attrParams.dtype.value}, but was ${o.dtype}`)})}mapInputs(t){var e,o;let n={};for(let s in t){let a=(o=(e=this._signature)===null||e===void 0?void 0:e.inputs)===null||o===void 0?void 0:o[s];a!=null?n[a.name]=t[s]:n[s]=t[s]}return n}checkInputs(t){let e=Object.keys(t).filter(o=>{let[n]=Ue(o);return this.graph.nodes[n]==null});if(e.length>0)throw new Error(`The dict provided in model.execute(dict) has keys: [${e}] that are not part of graph`)}mapOutputs(t){return t.map(e=>{var o,n;let s=(n=(o=this._signature)===null||o===void 0?void 0:o.outputs)===null||n===void 0?void 0:n[e];return s!=null?s.name:e},{})}checkOutputs(t){t.forEach(e=>{let[o]=Ue(e);if(!this.graph.nodes[o])throw new Error(`The output '${e}' is not found in the graph`)})}};var rh=class{constructor(t={},e={}){this.hashTableNameToHandle=t,this.hashTableMap=e}addHashTable(t,e){this.hashTableNameToHandle[t]=e.handle,this.hashTableMap[e.id]=e}getHashTableHandleByName(t){return this.hashTableNameToHandle[t]}getHashTableById(t){return this.hashTableMap[t]}dispose(){for(let t in this.hashTableMap)this.hashTableMap[t].clearAndClose(),delete this.hashTableMap[t];for(let t in this.hashTableNameToHandle)this.hashTableNameToHandle[t].dispose(),delete this.hashTableNameToHandle[t]}};var sq="?tfjs-format=file",aq="model.json",oh=class{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(t,e={},o=Hc){this.modelUrl=t,this.loadOptions=e,this.version="n/a",this.io=o,e==null&&(this.loadOptions={}),this.resourceManager=new rh}findIOHandler(){let t=this.modelUrl;if(t.load!=null)this.handler=t;else if(this.loadOptions.requestInit!=null)this.handler=this.io.browserHTTPRequest(t,this.loadOptions);else{let e=this.io.getLoadHandlers(t,this.loadOptions);if(e.length===0)e.push(this.io.browserHTTPRequest(t,this.loadOptions));else if(e.length>1)throw new Error(`Found more than one (${e.length}) load handlers for URL '${[t]}'`);this.handler=e[0]}}load(){if(this.findIOHandler(),this.handler.load==null)throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let t=this.handler.load();return y.isPromise(t)?t.then(e=>e.getWeightStream==null?this.loadSync(e):this.loadStreaming(e)):this.loadSync(t)}loadSync(t){let e=this.io.decodeWeights(t.weightData,t.weightSpecs);return this.loadWithWeightMap(t,e)}async loadStreaming(t){if(t.getWeightStream==null)throw new Error("Model artifacts missing streamWeights function");let e=await Ju(t.getWeightStream(),t.weightSpecs);return this.loadWithWeightMap(t,e)}loadWithWeightMap(t,e){this.artifacts=t;let o=this.artifacts.modelTopology,n=this.artifacts.signature;if(this.artifacts.userDefinedMetadata!=null){let s=this.artifacts.userDefinedMetadata;s.signature!=null&&(n=s.signature),s.structuredOutputKeys!=null&&(this.structuredOutputKeys=s.structuredOutputKeys)}if(this.signature=n,this.version=`${o.versions.producer}.${o.versions.minConsumer}`,this.executor=new Au(Eu.Instance.transformGraph(o,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(e),this.executor.resourceManager=this.resourceManager,t.modelInitializer!=null&&t.modelInitializer.node!=null){let s=Eu.Instance.transformGraph(t.modelInitializer);this.initializer=new Au(s),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=t.initializerSignature}return!0}async save(t,e){if(typeof t=="string"){let o=this.io.getSaveHandlers(t);if(o.length===0)throw new Error(`Cannot find any save handlers for URL '${t}'`);if(o.length>1)throw new Error(`Found more than one (${o.length}) save handlers for URL '${t}'`);t=o[0]}if(t.save==null)throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return t.save(this.artifacts)}addStructuredOutputNames(t){if(this.structuredOutputKeys){let e=t instanceof Rt?[t]:t,o={};return e.forEach((n,s)=>o[this.structuredOutputKeys[s]]=n),o}return t}predict(t,e){let o=this.execute(t,this.outputNodes);return this.addStructuredOutputNames(o)}async predictAsync(t,e){let o=await this.executeAsync(t,this.outputNodes);return this.addStructuredOutputNames(o)}normalizeInputs(t){var e;if(!(t instanceof Rt)&&!Array.isArray(t)){let s=(e=this.signature)===null||e===void 0?void 0:e.inputs;if(s!=null)for(let a in s){let i=s[a];i.resourceId!=null&&(t[a]=this.resourceIdToCapturedInput[i.resourceId])}return t}t=Array.isArray(t)?t:[t];let o=Object.keys(this.resourceIdToCapturedInput).length;if(t.length+o!==this.inputNodes.length)throw new Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-o} non-resource placeholders, while there are ${t.length} input tensors provided.`);let n=0;return this.inputNodes.reduce((s,a)=>{var i,c,l;let p=(l=(c=(i=this.signature)===null||i===void 0?void 0:i.inputs)===null||c===void 0?void 0:c[a])===null||l===void 0?void 0:l.resourceId;return p!=null?s[a]=this.resourceIdToCapturedInput[p]:s[a]=t[n++],s},{})}normalizeOutputs(t){return t=t||this.outputNodes,Array.isArray(t)?t:[t]}executeInitializerGraph(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return this.initializer==null?[]:this.initializerSignature==null?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(t){if(this.resourceIdToCapturedInput={},this.initializerSignature){let e=this.initializerSignature.outputs,o=Object.keys(e);for(let n=0;n<o.length;n++){let s=o[n],a=e[s];this.resourceIdToCapturedInput[a.resourceId]=t[n]}}}execute(t,e){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),t=this.normalizeInputs(t),e=this.normalizeOutputs(e);let o=this.executor.execute(t,e);return o.length>1?o:o[0]}async executeAsync(t,e){this.resourceIdToCapturedInput==null&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),t=this.normalizeInputs(t),e=this.normalizeOutputs(e);let o=await this.executor.executeAsync(t,e);return o.length>1?o:o[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(t){return Object.keys(t).reduce((e,o)=>(e[o]=[t[o]],e),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&Zt(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}};async function wl(r,t={},e=Hc){if(r==null)throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");t==null&&(t={}),t.fromTFHub&&typeof r=="string"&&(r=iq(r));let o=new oh(r,t,e);return await o.load(),o}function iq(r){return r.endsWith("/")||(r=r+"/"),`${r}${aq}${sq}`}R().prototype.abs=function(){return this.throwIfDisposed(),ie(this)};R().prototype.acos=function(){return this.throwIfDisposed(),jl(this)};R().prototype.acosh=function(){return this.throwIfDisposed(),Xl(this)};R().prototype.add=function(r){return this.throwIfDisposed(),nt(this,r)};R().prototype.all=function(r,t){return this.throwIfDisposed(),Yl(this,r,t)};R().prototype.any=function(r,t){return this.throwIfDisposed(),Zl(this,r,t)};R().prototype.argMax=function(r){return this.throwIfDisposed(),Ql(this,r)};R().prototype.argMin=function(r){return this.throwIfDisposed(),Jl(this,r)};R().prototype.asScalar=function(){return this.throwIfDisposed(),k(this.size===1,()=>"The array must have only 1 element."),P(this,[])};R().prototype.asType=function(r){return this.throwIfDisposed(),mt(this,r)};R().prototype.as1D=function(){return this.throwIfDisposed(),P(this,[this.size])};R().prototype.as2D=function(r,t){return this.throwIfDisposed(),P(this,[r,t])};R().prototype.as3D=function(r,t,e){return this.throwIfDisposed(),P(this,[r,t,e])};R().prototype.as4D=function(r,t,e,o){return this.throwIfDisposed(),P(this,[r,t,e,o])};R().prototype.as5D=function(r,t,e,o,n){return this.throwIfDisposed(),P(this,[r,t,e,o,n])};R().prototype.asin=function(){return this.throwIfDisposed(),tp(this)};R().prototype.asinh=function(){return this.throwIfDisposed(),ep(this)};R().prototype.atan=function(){return this.throwIfDisposed(),rp(this)};R().prototype.atan2=function(r){return this.throwIfDisposed(),op(this,r)};R().prototype.atanh=function(){return this.throwIfDisposed(),np(this)};R().prototype.avgPool=function(r,t,e,o){return this.throwIfDisposed(),Si(this,r,t,e,o)};R().prototype.batchToSpaceND=function(r,t){return this.throwIfDisposed(),vi(this,r,t)};R().prototype.batchNorm=function(r,t,e,o,n){return this.throwIfDisposed(),_r(this,r,t,e,o,n)};R().prototype.broadcastTo=function(r){return this.throwIfDisposed(),Or(this,r)};R().prototype.cast=function(r){return this.throwIfDisposed(),mt(this,r)};R().prototype.ceil=function(){return this.throwIfDisposed(),cp(this)};R().prototype.clipByValue=function(r,t){return this.throwIfDisposed(),lp(this,r,t)};R().prototype.concat=function(r,t){return this.throwIfDisposed(),r instanceof Rt&&(r=[r]),Ot([this,...r],t)};R().prototype.conv1d=function(r,t,e,o,n,s){return this.throwIfDisposed(),up(this,r,t,e,o,n,s)};R().prototype.conv2dTranspose=function(r,t,e,o,n){return this.throwIfDisposed(),mp(this,r,t,e,o,n)};R().prototype.conv2d=function(r,t,e,o,n,s){return this.throwIfDisposed(),Lr(this,r,t,e,o,n,s)};R().prototype.cos=function(){return this.throwIfDisposed(),fp(this)};R().prototype.cosh=function(){return this.throwIfDisposed(),dp(this)};R().prototype.cumprod=function(r,t,e){return this.throwIfDisposed(),hp(this,r,t,e)};R().prototype.cumsum=function(r,t,e){return this.throwIfDisposed(),gp(this,r,t,e)};R().prototype.depthToSpace=function(r,t){return this.throwIfDisposed(),xp(this,r,t)};R().prototype.depthwiseConv2d=function(r,t,e,o,n,s){return this.throwIfDisposed(),Ro(this,r,t,e,o,n,s)};R().prototype.dilation2d=function(r,t,e,o,n){return this.throwIfDisposed(),yp(this,r,t,e,o,n)};R().prototype.divNoNan=function(r){return this.throwIfDisposed(),bp(this,r)};R().prototype.div=function(r){return this.throwIfDisposed(),Tt(this,r)};R().prototype.dot=function(r){return this.throwIfDisposed(),wp(this,r)};R().prototype.elu=function(){return this.throwIfDisposed(),ki(this)};R().prototype.equal=function(r){return this.throwIfDisposed(),Ni(this,r)};R().prototype.erf=function(){return this.throwIfDisposed(),Cp(this)};R().prototype.euclideanNorm=function(r,t){return this.throwIfDisposed(),Tp(this,r,t)};R().prototype.exp=function(){return this.throwIfDisposed(),He(this)};R().prototype.expandDims=function(r){return this.throwIfDisposed(),Me(this,r)};R().prototype.expm1=function(){return this.throwIfDisposed(),Ip(this)};R().prototype.fft=function(){return this.throwIfDisposed(),Lo(this)};R().prototype.flatten=function(){return this.throwIfDisposed(),P(this,[this.size])};R().prototype.floor=function(){return this.throwIfDisposed(),Ei(this)};R().prototype.floorDiv=function(r){return this.throwIfDisposed(),Ci(this,r)};R().prototype.gather=function(r,t,e){return this.throwIfDisposed(),$i(this,r,t,e)};R().prototype.greaterEqual=function(r){return this.throwIfDisposed(),Ai(this,r)};R().prototype.greater=function(r){return this.throwIfDisposed(),so(this,r)};R().prototype.ifft=function(){return this.throwIfDisposed(),po(this)};R().prototype.irfft=function(){return this.throwIfDisposed(),Ki(this)};R().prototype.isFinite=function(){return this.throwIfDisposed(),vp(this)};R().prototype.isInf=function(){return this.throwIfDisposed(),Np(this)};R().prototype.isNaN=function(){return this.throwIfDisposed(),kp(this)};R().prototype.leakyRelu=function(r){return this.throwIfDisposed(),Ri(this,r)};R().prototype.lessEqual=function(r){return this.throwIfDisposed(),Oo(this,r)};R().prototype.less=function(r){return this.throwIfDisposed(),os(this,r)};R().prototype.localResponseNormalization=function(r,t,e,o){return this.throwIfDisposed(),Ep(this,r,t,e,o)};R().prototype.logSigmoid=function(){return this.throwIfDisposed(),$p(this)};R().prototype.logSoftmax=function(r){return this.throwIfDisposed(),Ap(this,r)};R().prototype.logSumExp=function(r,t){return this.throwIfDisposed(),_i(this,r,t)};R().prototype.log=function(){return this.throwIfDisposed(),yr(this)};R().prototype.log1p=function(){return this.throwIfDisposed(),Di(this)};R().prototype.logicalAnd=function(r){return this.throwIfDisposed(),ao(this,r)};R().prototype.logicalNot=function(){return this.throwIfDisposed(),Oi(this)};R().prototype.logicalOr=function(r){return this.throwIfDisposed(),Pi(this,r)};R().prototype.logicalXor=function(r){return this.throwIfDisposed(),Rp(this,r)};R().prototype.matMul=function(r,t,e){return this.throwIfDisposed(),vt(this,r,t,e)};R().prototype.maxPool=function(r,t,e,o){return this.throwIfDisposed(),Li(this,r,t,e,o)};R().prototype.max=function(r,t){return this.throwIfDisposed(),ur(this,r,t)};R().prototype.maximum=function(r){return this.throwIfDisposed(),Bi(this,r)};R().prototype.mean=function(r,t){return this.throwIfDisposed(),io(this,r,t)};R().prototype.min=function(r,t){return this.throwIfDisposed(),rs(this,r,t)};R().prototype.minimum=function(r){return this.throwIfDisposed(),co(this,r)};R().prototype.mirrorPad=function(r,t){return this.throwIfDisposed(),Dp(this,r,t)};R().prototype.mod=function(r){return this.throwIfDisposed(),Fp(this,r)};R().prototype.mul=function(r){return this.throwIfDisposed(),j(this,r)};R().prototype.neg=function(){return this.throwIfDisposed(),pe(this)};R().prototype.norm=function(r,t,e){return this.throwIfDisposed(),no(this,r,t,e)};R().prototype.notEqual=function(r){return this.throwIfDisposed(),Mi(this,r)};R().prototype.oneHot=function(r,t=1,e=0){return this.throwIfDisposed(),ns(this,r,t,e)};R().prototype.onesLike=function(){return this.throwIfDisposed(),_p(this)};R().prototype.pad=function(r,t){return this.throwIfDisposed(),mr(this,r,t)};R().prototype.pool=function(r,t,e,o,n,s){return this.throwIfDisposed(),Op(this,r,t,e,o,n,s)};R().prototype.pow=function(r){return this.throwIfDisposed(),xr(this,r)};R().prototype.prelu=function(r){return this.throwIfDisposed(),Gi(this,r)};R().prototype.prod=function(r,t){return this.throwIfDisposed(),Pp(this,r,t)};R().prototype.reciprocal=function(){return this.throwIfDisposed(),Bp(this)};R().prototype.relu=function(){return this.throwIfDisposed(),Gr(this)};R().prototype.relu6=function(){return this.throwIfDisposed(),Hi(this)};R().prototype.reshapeAs=function(r){return this.throwIfDisposed(),P(this,r.shape)};R().prototype.reshape=function(r){return this.throwIfDisposed(),P(this,r)};R().prototype.resizeBilinear=function(r,t,e){return this.throwIfDisposed(),Cm(this,r,t,e)};R().prototype.resizeNearestNeighbor=function(r,t,e){return this.throwIfDisposed(),Tm(this,r,t,e)};R().prototype.reverse=function(r){return this.throwIfDisposed(),Ve(this,r)};R().prototype.rfft=function(){return this.throwIfDisposed(),Bo(this)};R().prototype.round=function(){return this.throwIfDisposed(),qi(this)};R().prototype.rsqrt=function(){return this.throwIfDisposed(),Mp(this)};R().prototype.selu=function(){return this.throwIfDisposed(),Vp(this)};R().prototype.separableConv2d=function(r,t,e,o,n,s){return this.throwIfDisposed(),Gp(this,r,t,e,o,n,s)};R().prototype.sigmoid=function(){return this.throwIfDisposed(),pr(this)};R().prototype.sign=function(){return this.throwIfDisposed(),Up(this)};R().prototype.sin=function(){return this.throwIfDisposed(),zp(this)};R().prototype.sinh=function(){return this.throwIfDisposed(),Wp(this)};R().prototype.slice=function(r,t){return this.throwIfDisposed(),yt(this,r,t)};R().prototype.softmax=function(r){return this.throwIfDisposed(),Hp(this,r)};R().prototype.softplus=function(){return this.throwIfDisposed(),Fi(this)};R().prototype.spaceToBatchND=function(r,t){return this.throwIfDisposed(),Vi(this,r,t)};R().prototype.split=function(r,t){return this.throwIfDisposed(),br(this,r,t)};R().prototype.sqrt=function(){return this.throwIfDisposed(),Ne(this)};R().prototype.square=function(){return this.throwIfDisposed(),ce(this)};R().prototype.squaredDifference=function(r){return this.throwIfDisposed(),ji(this,r)};R().prototype.squeeze=function(r){return this.throwIfDisposed(),Mo(this,r)};R().prototype.stack=function(r,t){this.throwIfDisposed();let e=r instanceof Rt?[this,r]:[this,...r];return ye(e,t)};R().prototype.step=function(r){return this.throwIfDisposed(),Xi(this,r)};R().prototype.stridedSlice=function(r,t,e,o,n,s,a,i){return this.throwIfDisposed(),qp(this,r,t,e,o,n,s,a,i)};R().prototype.sub=function(r){return this.throwIfDisposed(),ct(this,r)};R().prototype.sum=function(r,t){return this.throwIfDisposed(),kt(this,r,t)};R().prototype.tan=function(){return this.throwIfDisposed(),Kp(this)};R().prototype.tanh=function(){return this.throwIfDisposed(),es(this)};R().prototype.tile=function(r){return this.throwIfDisposed(),Mr(this,r)};R().prototype.toBool=function(){return this.throwIfDisposed(),mt(this,"bool")};R().prototype.toFloat=function(){return this.throwIfDisposed(),mt(this,"float32")};R().prototype.toInt=function(){return this.throwIfDisposed(),mt(this,"int32")};R().prototype.topk=function(r,t){return this.throwIfDisposed(),Yp(this,r,t)};R().prototype.transpose=function(r){return this.throwIfDisposed(),Go(this,r)};R().prototype.unique=function(r){return this.throwIfDisposed(),Zp(this,r)};R().prototype.unsortedSegmentSum=function(r,t){return this.throwIfDisposed(),Qp(this,r,t)};R().prototype.unstack=function(r){return this.throwIfDisposed(),Ge(this,r)};R().prototype.where=function(r,t){return this.throwIfDisposed(),Be(r,this,t)};R().prototype.zerosLike=function(){return this.throwIfDisposed(),oe(this)};var kb={contours:"Identity",onsets:"Identity_2",frames:"Identity_1"},D2=1,Ru=22050,Eb=256,lq=Math.floor(Ru/Eb),pq=2,_2=Ru*pq-Eb,O2=30,F2=Math.floor(O2/2),nh=O2*Eb,uq=_2-nh,Du=class{constructor(t){if(nh%2!==0)throw new Error(`OVERLAP_LENGTH_FRAMES is not divisible by 2! Is ${nh}`);this.model=typeof t=="string"?wl(t):t}adjustNoteStart(t,e){return t.map(o=>({startTimeSeconds:o.startTimeSeconds+e,durationSeconds:o.durationSeconds,pitch_midi:o.pitchMidi,amplitude:o.amplitude,pitchBends:o.pitchBends}))}async evaluateSingleFrame(t,e){let o=await this.model,n=yt(t,e,1),s=o.execute(n,[kb.frames,kb.onsets,kb.contours]);return[s[0],s[1],s[2]]}async prepareData(t){let e=pp([qe([Math.floor(nh/2)],"float32"),xe(t)]);return[Me(Im.frame(e,_2,uq,!0,0),-1),t.length]}unwrapOutput(t){let e=t;e=t.slice([0,F2,0],[-1,t.shape[1]-2*F2,-1]);let o=e.shape;return e.reshape([o[0]*o[1],o[2]])}async evaluateModel(t,e,o){let n;if(t instanceof Float32Array)n=t;else{if(t.sampleRate!==Ru)throw new Error(`Input audio buffer is not at correct sample rate! Is ${t.sampleRate}. Should be ${Ru}`);if(t.numberOfChannels!==D2)throw new Error(`Input audio buffer is not mono! Number of channels is ${t.numberOfChannels}. Should be ${D2}`);n=t.getChannelData(0)}let[s,a]=await this.prepareData(n),i=Math.floor(a*(lq/Ru)),c=0;for(let l=0;l<s.shape[0];++l){o(l/s.shape[0]);let[p,u,m]=await this.evaluateSingleFrame(s,l),f=this.unwrapOutput(p),d=this.unwrapOutput(u),g=this.unwrapOutput(m),h=f.shape[0];if(!(c>=i)){if(h+c>=i){let x=i-c;f=f.slice([0,0],[x,-1]),d=d.slice([0,0],[x,-1]),g=g.slice([0,0],[x,-1])}c+=h,e(await f.array(),await d.array(),await g.array())}}o(1)}};var sK=Ou(tA()),hh=21,gh=22050,oA=2,Fu=256,aK=Math.floor(gh/Fu),nA=aK*oA,iK=gh*oA-Fu,cK=Fu/gh*(nA-iK/Fu)+.0018,Vb=87,sA=3,lK=27.5,pK=88,eA=pK*sA,rA=r=>12*(Math.log2(r)-Math.log2(440))+69,uK=r=>440*2**((r-69)/12),Gb=r=>r*Fu/gh-cK*Math.floor(r/nA);function aA(r){return r.length===0?null:r.reduce((t,e,o)=>r[t]>e?t:o,-1)}var mK=r=>r.map(t=>aA(t));function fK(r,t){let e=[],o=[];for(let n=0;n<r.length;n++)for(let s=0;s<r[n].length;s++)r[n][s]>t&&(e.push(n),o.push(s));return[e,o]}function dK(r){let[t,e,o]=r.reduce((a,i)=>{let[c,l,p]=i.reduce((u,m)=>[u[0]+m,u[1]+m*m,u[2]+1],[0,0,0]);return[a[0]+c,a[1]+l,a[2]+p]},[0,0,0]),n=t/o,s=Math.sqrt(1/(o-1)*(e-t*t/o));return[n,s]}function Ub(r){return r.reduce((t,e)=>Math.max(t,...e),0)}function hK(r){let t=r[0].map(e=>e.slice());for(let e=1;e<r.length;++e)for(let o=0;o<r[0].length;++o)for(let n=0;n<r[0][0].length;++n)t[o][n]=Math.min(t[o][n],r[e][o][n]);return t}function gK(r,t=1){let e=[];for(let o=0;o<r[0].length;++o)for(let n=0;n<r.length;++n){let s=!0;for(let a=Math.max(0,n-t);s&&a<=Math.min(r.length-1,n+t);++a)a!==n&&(s=s&&r[n][o]>r[a][o]);s&&e.push([n,o])}return e}function xK(r){let t=r[0].map(e=>e.slice());for(let e=1;e<r.length;++e)for(let o=0;o<r[0].length;++o)for(let n=0;n<r[0][0].length;++n)t[o][n]=Math.max(t[o][n],r[e][o][n]);return t}function yK(r){return r!==null}function bK(r,t,e,o){if(e){let n=rA(e)-hh;for(let s=0;s<r.length;s++)r[s].fill(0,n);for(let s=0;s<t.length;s++)t[s].fill(0,n)}if(o){let n=rA(o)-hh;for(let s=0;s<r.length;s++)r[s].fill(0,0,n);for(let s=0;s<t.length;s++)t[s].fill(0,0,n)}}function wK(r,t,e=2){let o=Array.from(Array(e).keys()).map(i=>i+1).map(i=>{let c=Array(i).fill(Array(t[0].length).fill(0)).concat(t),l=c.slice(i),p=c.slice(0,-i);if(l.length!==p.length)throw new Error(`nPlus length !== minusN length: ${l.length} !== ${p.length}`);return l.map((u,m)=>u.map((f,d)=>f-p[m][d]))}),n=hK(o);n=n.map(i=>i.map(c=>Math.max(c,0))),n=n.map((i,c)=>c<e?i.fill(0):i);let s=Ub(r),a=Ub(n);return n=n.map(i=>i.map(c=>s*c/a)),xK([r,n])}function zb(r,t,e=.5,o=.3,n=5,s=!0,a=null,i=null,c=!0,l=11){let p=o;if(p===null){let[b,I]=dK(r);p=b+I}let u=r.length;bK(t,r,a,i);let m=t;s&&(m=wK(t,r));let f=m.map(b=>b.map(()=>0));gK(m).forEach(([b,I])=>{f[b][I]=m[b][I]});let[d,g]=fK(f,e);d.reverse(),g.reverse();let h=r.map(b=>b.slice()),x=d.map((b,I)=>{let T=g[I];if(b>=u-1)return null;let E=b+1,$=0;for(;E<u-1&&$<l;)h[E][T]<p?$+=1:$=0,E+=1;if(E-=$,E-b<=n)return null;for(let D=b;D<E;++D)h[D][T]=0,T<Vb&&(h[D][T+1]=0),T>0&&(h[D][T-1]=0);let A=r.slice(b,E).reduce((D,_)=>D+_[T],0)/(E-b);return{startFrame:b,durationFrames:E-b,pitchMidi:T+hh,amplitude:A}}).filter(yK);if(c===!0)for(;Ub(h)>p;){let[b,I]=h.reduce((_,O,L)=>{let B=aA(O);return O[B]>h[_[0]][_[1]]?[L,B]:_},[0,0]);h[b][I]=0;let T=b+1,E=0;for(;T<u-1&&E<l;)h[T][I]<p?E+=1:E=0,h[T][I]=0,I<Vb&&(h[T][I+1]=0),I>0&&(h[T][I-1]=0),T+=1;let $=T-1-E;for(T=b-1,E=0;T>0&&E<l;)h[T][I]<p?E+=1:E=0,h[T][I]=0,I<Vb&&(h[T][I+1]=0),I>0&&(h[T][I-1]=0),T-=1;let A=T+1+E;if(A<0)throw new Error(`iStart is not positive! value: ${A}`);if($>=u)throw new Error(`iEnd is past end of times. (iEnd, times.length): (${$}, ${u})`);let D=r.slice(A,$).reduce((_,O)=>_+O[I],0)/($-A);$-A<=n||x.push({startFrame:A,durationFrames:$-A,pitchMidi:I+hh,amplitude:D})}return x}var CK=(r,t)=>Array.from(Array(r).keys()).map(e=>Math.exp(-1*(e-(r-1)/2)**2/(2*t**2))),TK=r=>12*sA*Math.log2(uK(r)/lK);function Wb(r,t,e=25){let o=e*2+1,n=CK(o,5);return t.map(s=>{let a=Math.floor(Math.round(TK(s.pitchMidi))),i=Math.max(a-e,0),c=Math.min(eA,a+e+1),l=n.slice(Math.max(0,e-a),o-Math.max(0,a-(eA-e-1))),p=r.slice(s.startFrame,s.startFrame+s.durationFrames).map(f=>f.slice(i,c).map((d,g)=>d*l[g])),u=e-Math.max(0,e-a),m=mK(p).map(f=>f-u);return Object.assign(Object.assign({},s),{pitchBends:m})})}var Hb=r=>r.map(t=>({pitchMidi:t.pitchMidi,amplitude:t.amplitude,pitchBends:t.pitchBends,startTimeSeconds:Gb(t.startFrame),durationSeconds:Gb(t.startFrame+t.durationFrames)-Gb(t.startFrame)}));window.BP={tf:ou,loadGraphModel:wl,BasicPitch:Du,outputToNotesPoly:zb,addPitchBendsToNoteEvents:Wb,noteFramesToTime:Hb};})();
/*! Bundled license information:

@tensorflow/tfjs-core/dist/backends/backend.js:
@tensorflow/tfjs-core/dist/util_base.js:
@tensorflow/tfjs-core/dist/global_util.js:
@tensorflow/tfjs-core/dist/ops/complex.js:
@tensorflow/tfjs-core/dist/ops/clone.js:
@tensorflow/tfjs-core/dist/ops/add.js:
@tensorflow/tfjs-core/dist/ops/floorDiv.js:
@tensorflow/tfjs-core/dist/ops/div.js:
@tensorflow/tfjs-core/dist/ops/mul.js:
@tensorflow/tfjs-core/dist/ops/add_n.js:
@tensorflow/tfjs-core/dist/ops/all.js:
@tensorflow/tfjs-core/dist/ops/any.js:
@tensorflow/tfjs-core/dist/ops/atan2.js:
@tensorflow/tfjs-core/dist/ops/conv_util.js:
@tensorflow/tfjs-core/dist/ops/reshape.js:
@tensorflow/tfjs-core/dist/ops/avg_pool.js:
@tensorflow/tfjs-core/dist/ops/avg_pool_3d.js:
@tensorflow/tfjs-core/dist/ops/concat.js:
@tensorflow/tfjs-core/dist/ops/mat_mul.js:
@tensorflow/tfjs-core/dist/ops/basic_lstm_cell.js:
@tensorflow/tfjs-core/dist/ops/batch_to_space_nd.js:
@tensorflow/tfjs-core/dist/ops/batchnorm.js:
@tensorflow/tfjs-core/dist/ops/bincount.js:
@tensorflow/tfjs-core/dist/ops/broadcast_to.js:
@tensorflow/tfjs-core/dist/ops/fill.js:
@tensorflow/tfjs-core/dist/ops/conv2d.js:
@tensorflow/tfjs-core/dist/ops/conv2d_backprop_input.js:
@tensorflow/tfjs-core/dist/ops/conv3d.js:
@tensorflow/tfjs-core/dist/ops/conv3d_backprop_input.js:
@tensorflow/tfjs-core/dist/ops/dense_bincount.js:
@tensorflow/tfjs-core/dist/ops/depth_to_space.js:
@tensorflow/tfjs-core/dist/ops/depthwise_conv2d.js:
@tensorflow/tfjs-core/dist/ops/diag.js:
@tensorflow/tfjs-core/dist/ops/dilation2d.js:
@tensorflow/tfjs-core/dist/ops/equal.js:
@tensorflow/tfjs-core/dist/ops/where.js:
@tensorflow/tfjs-core/dist/ops/div_no_nan.js:
@tensorflow/tfjs-core/dist/ops/dot.js:
@tensorflow/tfjs-core/dist/ops/elu.js:
@tensorflow/tfjs-core/dist/ops/max.js:
@tensorflow/tfjs-core/dist/ops/pow.js:
@tensorflow/tfjs-core/dist/ops/expand_dims.js:
@tensorflow/tfjs-core/dist/ops/tile.js:
@tensorflow/tfjs-core/dist/ops/eye.js:
@tensorflow/tfjs-core/dist/ops/greater.js:
@tensorflow/tfjs-core/dist/ops/greater_equal.js:
@tensorflow/tfjs-core/dist/ops/imag.js:
@tensorflow/tfjs-core/dist/ops/leaky_relu.js:
@tensorflow/tfjs-core/dist/ops/less.js:
@tensorflow/tfjs-core/dist/ops/less_equal.js:
@tensorflow/tfjs-core/dist/ops/local_response_normalization.js:
@tensorflow/tfjs-core/dist/ops/sub.js:
@tensorflow/tfjs-core/dist/ops/log_sum_exp.js:
@tensorflow/tfjs-core/dist/ops/logical_and.js:
@tensorflow/tfjs-core/dist/ops/logical_not.js:
@tensorflow/tfjs-core/dist/ops/logical_or.js:
@tensorflow/tfjs-core/dist/ops/logical_xor.js:
@tensorflow/tfjs-core/dist/ops/max_pool.js:
@tensorflow/tfjs-core/dist/ops/max_pool_3d.js:
@tensorflow/tfjs-core/dist/ops/maximum.js:
@tensorflow/tfjs-core/dist/ops/minimum.js:
@tensorflow/tfjs-core/dist/ops/mirror_pad.js:
@tensorflow/tfjs-core/dist/ops/mod.js:
@tensorflow/tfjs-core/dist/ops/moments.js:
@tensorflow/tfjs-core/dist/ops/multinomial.js:
@tensorflow/tfjs-core/dist/ops/not_equal.js:
@tensorflow/tfjs-core/dist/ops/one_hot.js:
@tensorflow/tfjs-core/dist/ops/pad.js:
@tensorflow/tfjs-core/dist/ops/space_to_batch_nd.js:
@tensorflow/tfjs-core/dist/ops/prelu.js:
@tensorflow/tfjs-core/dist/ops/prod.js:
@tensorflow/tfjs-core/dist/ops/rand.js:
@tensorflow/tfjs-core/dist/ops/random_gamma.js:
@tensorflow/tfjs-core/dist/ops/random_normal.js:
@tensorflow/tfjs-core/dist/ops/random_uniform.js:
@tensorflow/tfjs-core/dist/ops/real.js:
@tensorflow/tfjs-core/dist/ops/relu.js:
@tensorflow/tfjs-core/dist/ops/relu6.js:
@tensorflow/tfjs-core/dist/ops/reverse_1d.js:
@tensorflow/tfjs-core/dist/ops/reverse_2d.js:
@tensorflow/tfjs-core/dist/ops/reverse_3d.js:
@tensorflow/tfjs-core/dist/ops/reverse_4d.js:
@tensorflow/tfjs-core/dist/ops/selu.js:
@tensorflow/tfjs-core/dist/ops/spectral/fft.js:
@tensorflow/tfjs-core/dist/ops/spectral/ifft.js:
@tensorflow/tfjs-core/dist/ops/split.js:
@tensorflow/tfjs-core/dist/ops/squared_difference.js:
@tensorflow/tfjs-core/dist/ops/squeeze.js:
@tensorflow/tfjs-core/dist/ops/stack.js:
@tensorflow/tfjs-core/dist/ops/truncated_normal.js:
@tensorflow/tfjs-core/dist/ops/unique.js:
@tensorflow/tfjs-core/dist/ops/unsorted_segment_sum.js:
@tensorflow/tfjs-core/dist/ops/unstack.js:
@tensorflow/tfjs-core/dist/ops/where_async.js:
@tensorflow/tfjs-core/dist/ops/conv2d_backprop_filter.js:
@tensorflow/tfjs-core/dist/ops/depthwise_conv2d_native_backprop_filter.js:
@tensorflow/tfjs-core/dist/ops/depthwise_conv2d_native_backprop_input.js:
@tensorflow/tfjs-core/dist/ops/image/crop_and_resize.js:
@tensorflow/tfjs-core/dist/ops/image/flip_left_right.js:
@tensorflow/tfjs-core/dist/ops/image/rotate_with_offset.js:
@tensorflow/tfjs-core/dist/ops/nonmax_util.js:
@tensorflow/tfjs-core/dist/ops/image/non_max_suppression.js:
@tensorflow/tfjs-core/dist/backends/non_max_suppression_impl.js:
@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_async.js:
@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_with_score.js:
@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_with_score_async.js:
@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_padded.js:
@tensorflow/tfjs-core/dist/ops/image/non_max_suppression_padded_async.js:
@tensorflow/tfjs-core/dist/ops/image/resize_bilinear.js:
@tensorflow/tfjs-core/dist/ops/image/resize_nearest_neighbor.js:
@tensorflow/tfjs-core/dist/ops/linalg/band_part.js:
@tensorflow/tfjs-core/dist/ops/linalg/gram_schmidt.js:
@tensorflow/tfjs-core/dist/ops/linalg/qr.js:
@tensorflow/tfjs-core/dist/ops/loss_ops_utils.js:
@tensorflow/tfjs-core/dist/ops/losses/absolute_difference.js:
@tensorflow/tfjs-core/dist/ops/losses/huber_loss.js:
@tensorflow/tfjs-core/dist/ops/losses/log_loss.js:
@tensorflow/tfjs-core/dist/ops/losses/mean_squared_error.js:
@tensorflow/tfjs-core/dist/ops/losses/sigmoid_cross_entropy.js:
@tensorflow/tfjs-core/dist/ops/losses/softmax_cross_entropy.js:
@tensorflow/tfjs-core/dist/ops/ops.js:
@tensorflow/tfjs-core/dist/ops/rotate_util.js:
@tensorflow/tfjs-core/dist/backends/kernel_impls.js:
@tensorflow/tfjs-backend-cpu/dist/utils/binary_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Complex.js:
@tensorflow/tfjs-backend-cpu/dist/utils/zeros_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Identity.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Real.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cast.js:
@tensorflow/tfjs-backend-cpu/dist/utils/binary_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Add.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Bincount_impl.js:
@tensorflow/tfjs-backend-cpu/dist/utils/unary_impl.js:
@tensorflow/tfjs-backend-cpu/dist/utils/unary_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Concat_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Equal.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FloorDiv.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GatherV2_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Greater.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GreaterEqual.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Less.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LessEqual.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LinSpace_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Max_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Maximum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Minimum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Multiply.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Neg.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/NotEqual.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Transpose.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Prod.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Range_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Scatter_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Slice.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SquaredDifference.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StridedSlice_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sub.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/TopK_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Unique_impl.js:
@tensorflow/tfjs-backend-cpu/dist/shared.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/shared.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Identity.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Complex.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LeakyRelu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Prelu.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/kernel_funcs_utils.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Multiply.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reshape.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Reshape.js:
@tensorflow/tfjs-backend-webgl/dist/mean_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/reduce.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sum_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sum.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Transpose.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BatchMatMul_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Abs.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Acos.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Acosh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Add.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/AddN.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/All.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Any.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/arg_min_max.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ArgMax.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ArgMin.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Asin.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Asinh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Atan.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Atan2.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Atanh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool3D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPool3DGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/AvgPoolGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BatchMatMul.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BatchNorm.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Slice.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BatchToSpaceND.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Bincount.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/NotEqual.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Real.js:
@tensorflow/tfjs-backend-webgl/dist/kernel_utils/int.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cast.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Ceil.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ClipByValue.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ComplexAbs.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Imag.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Concat_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Concat.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2D_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2DBackpropFilter.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv2DBackpropInput.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3DBackpropFilterV2.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Conv3DBackpropInputV2.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cos.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cosh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/CropAndResize.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/DenseBincount.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/DepthToSpace.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNative.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNativeBackpropFilter.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/DepthwiseConv2dNativeBackpropInput.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Diag.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Dilation2D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Elu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/EluGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Equal.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Erf.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Exp.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Expm1.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FFT_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FFT.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Fill.js:
@tensorflow/tfjs-backend-webgl/dist/flip_left_right_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FlipLeftRight.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Floor.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FloorDiv.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FusedConv2D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FusedDepthwiseConv2D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/GatherNd.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/GatherV2.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Greater.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/GreaterEqual.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/IFFT.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/IsFinite.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/IsInf.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/IsNaN.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Less.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LessEqual.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LinSpace.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Log.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Log1p.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalAnd.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalNot.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LogicalOr.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LRN.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/LRNGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Max_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Max.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Maximum.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool3D.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPool3DGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MaxPoolWithArgmax.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Mean_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Mean.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Min.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Minimum.js:
@tensorflow/tfjs-backend-webgl/dist/mirror_pad_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/mirror_pad_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/MirrorPad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Mod.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/RealDiv.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sub.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Softmax.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Multinomial.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Neg.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV3.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV4.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/NonMaxSuppressionV5.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/OneHot.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ZerosLike.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/OnesLike.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Pack.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/PadV2.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Pow.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Prod.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Range.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Reciprocal.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Relu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Relu6.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeBilinear.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeBilinearGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeNearestNeighbor.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ResizeNearestNeighborGrad.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Reverse.js:
@tensorflow/tfjs-backend-webgl/dist/rotate_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/RotateWithOffset.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Round.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Rsqrt.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ScatterNd.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Select.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Selu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sigmoid.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sign.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sin.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sinh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Softplus.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SpaceToBatchND.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SparseToDense.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SplitV.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Sqrt.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SquaredDifference.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Step.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/StridedSlice.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Tan.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Tanh.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Tile.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/TopK.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Unpack.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/UnsortedSegmentSum.js:
@tensorflow/tfjs-backend-webgl/dist/register_all_kernels.js:
@tensorflow/tfjs-backend-webgl/dist/index.js:
@tensorflow/tfjs-backend-cpu/dist/base.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LeakyRelu.js:
@tensorflow/tfjs-backend-cpu/dist/utils/fused_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Reshape.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/AddN.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/All.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Any.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ArgMax.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ArgMin.js:
@tensorflow/tfjs-backend-cpu/dist/utils/pool_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/AvgPool.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/AvgPool3D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/AvgPool3DGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/AvgPoolGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/BatchNorm.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/BatchToSpaceND.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Bincount.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Imag.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Concat.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv2D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv2DBackpropFilter.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv2DBackpropInput.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv3D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv3DBackpropFilterV2.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Conv3DBackpropInputV2.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cos.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/CropAndResize.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cumsum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/DenseBincount.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/DepthToSpace.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/DepthwiseConv2dNative.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/DepthwiseConv2dNativeBackpropFilter.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/DepthwiseConv2dNativeBackpropInput.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Diag.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Dilation2D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Dilation2DBackpropFilter.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Dilation2DBackpropInput.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/EluGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ExpandDims.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RealDiv.js:
@tensorflow/tfjs-backend-cpu/dist/utils/fft_utils.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FFT.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Fill.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FlipLeftRight.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FusedConv2D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/FusedDepthwiseConv2D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GatherNd.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GatherV2.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/IFFT.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LinSpace.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LogicalAnd.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LogicalOr.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LRN.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LRNGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Max.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPool.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPool3D.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPool3DGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPoolGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPoolWithArgmax_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MaxPoolWithArgmax.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Mean.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Min.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/MirrorPad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Mod.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Softmax.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Multinomial.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/NonMaxSuppressionV3.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/NonMaxSuppressionV4.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/OneHot.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ZerosLike.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/OnesLike.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Pack.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/PadV2.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Pow.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Range.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ResizeBilinear.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ResizeBilinearGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ResizeNearestNeighbor.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ResizeNearestNeighborGrad.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Reverse.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RotateWithOffset.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ScatterNd.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Select.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SpaceToBatchND.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseToDense.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SplitV.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StridedSlice.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Tile.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/TopK.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Unpack.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/UnsortedSegmentSum.js:
@tensorflow/tfjs-backend-cpu/dist/register_all_kernels.js:
@tensorflow/tfjs-backend-cpu/dist/index.js:
@tensorflow/tfjs-core/dist/ops/ops_for_converter.js:
@tensorflow/tfjs-converter/dist/executor/tensor_utils.js:
@tensorflow/tfjs-converter/dist/executor/tensor_list.js:
@tensorflow/tfjs-converter/dist/executor/hash_table.js:
@tensorflow/tfjs-converter/dist/operations/executors/hash_table_executor.js:
@tensorflow/tfjs-core/dist/public/chained_ops/abs.js:
@tensorflow/tfjs-core/dist/public/chained_ops/acos.js:
@tensorflow/tfjs-core/dist/public/chained_ops/acosh.js:
@tensorflow/tfjs-core/dist/public/chained_ops/add.js:
@tensorflow/tfjs-core/dist/public/chained_ops/all.js:
@tensorflow/tfjs-core/dist/public/chained_ops/any.js:
@tensorflow/tfjs-core/dist/public/chained_ops/arg_max.js:
@tensorflow/tfjs-core/dist/public/chained_ops/arg_min.js:
@tensorflow/tfjs-core/dist/public/chained_ops/as_scalar.js:
@tensorflow/tfjs-core/dist/public/chained_ops/as_type.js:
@tensorflow/tfjs-core/dist/public/chained_ops/as1d.js:
@tensorflow/tfjs-core/dist/public/chained_ops/as2d.js:
@tensorflow/tfjs-core/dist/public/chained_ops/as3d.js:
@tensorflow/tfjs-core/dist/public/chained_ops/as4d.js:
@tensorflow/tfjs-core/dist/public/chained_ops/as5d.js:
@tensorflow/tfjs-core/dist/public/chained_ops/asin.js:
@tensorflow/tfjs-core/dist/public/chained_ops/asinh.js:
@tensorflow/tfjs-core/dist/public/chained_ops/atan.js:
@tensorflow/tfjs-core/dist/public/chained_ops/atan2.js:
@tensorflow/tfjs-core/dist/public/chained_ops/atanh.js:
@tensorflow/tfjs-core/dist/public/chained_ops/batch_to_space_nd.js:
@tensorflow/tfjs-core/dist/public/chained_ops/batchnorm.js:
@tensorflow/tfjs-core/dist/public/chained_ops/broadcast_to.js:
@tensorflow/tfjs-core/dist/public/chained_ops/cast.js:
@tensorflow/tfjs-core/dist/public/chained_ops/ceil.js:
@tensorflow/tfjs-core/dist/public/chained_ops/clip_by_value.js:
@tensorflow/tfjs-core/dist/public/chained_ops/concat.js:
@tensorflow/tfjs-core/dist/public/chained_ops/conv1d.js:
@tensorflow/tfjs-core/dist/public/chained_ops/conv2d_transpose.js:
@tensorflow/tfjs-core/dist/public/chained_ops/conv2d.js:
@tensorflow/tfjs-core/dist/public/chained_ops/cos.js:
@tensorflow/tfjs-core/dist/public/chained_ops/cosh.js:
@tensorflow/tfjs-core/dist/public/chained_ops/cumsum.js:
@tensorflow/tfjs-core/dist/public/chained_ops/depth_to_space.js:
@tensorflow/tfjs-core/dist/public/chained_ops/depthwise_conv2d.js:
@tensorflow/tfjs-core/dist/public/chained_ops/dilation2d.js:
@tensorflow/tfjs-core/dist/public/chained_ops/div_no_nan.js:
@tensorflow/tfjs-core/dist/public/chained_ops/div.js:
@tensorflow/tfjs-core/dist/public/chained_ops/dot.js:
@tensorflow/tfjs-core/dist/public/chained_ops/elu.js:
@tensorflow/tfjs-core/dist/public/chained_ops/equal.js:
@tensorflow/tfjs-core/dist/public/chained_ops/erf.js:
@tensorflow/tfjs-core/dist/public/chained_ops/exp.js:
@tensorflow/tfjs-core/dist/public/chained_ops/expand_dims.js:
@tensorflow/tfjs-core/dist/public/chained_ops/expm1.js:
@tensorflow/tfjs-core/dist/public/chained_ops/fft.js:
@tensorflow/tfjs-core/dist/public/chained_ops/flatten.js:
@tensorflow/tfjs-core/dist/public/chained_ops/floor.js:
@tensorflow/tfjs-core/dist/public/chained_ops/floorDiv.js:
@tensorflow/tfjs-core/dist/public/chained_ops/gather.js:
@tensorflow/tfjs-core/dist/public/chained_ops/greater_equal.js:
@tensorflow/tfjs-core/dist/public/chained_ops/greater.js:
@tensorflow/tfjs-core/dist/public/chained_ops/ifft.js:
@tensorflow/tfjs-core/dist/public/chained_ops/irfft.js:
@tensorflow/tfjs-core/dist/public/chained_ops/is_finite.js:
@tensorflow/tfjs-core/dist/public/chained_ops/is_inf.js:
@tensorflow/tfjs-core/dist/public/chained_ops/is_nan.js:
@tensorflow/tfjs-core/dist/public/chained_ops/leaky_relu.js:
@tensorflow/tfjs-core/dist/public/chained_ops/less_equal.js:
@tensorflow/tfjs-core/dist/public/chained_ops/less.js:
@tensorflow/tfjs-core/dist/public/chained_ops/local_response_normalization.js:
@tensorflow/tfjs-core/dist/public/chained_ops/log_sigmoid.js:
@tensorflow/tfjs-core/dist/public/chained_ops/log_softmax.js:
@tensorflow/tfjs-core/dist/public/chained_ops/log_sum_exp.js:
@tensorflow/tfjs-core/dist/public/chained_ops/log.js:
@tensorflow/tfjs-core/dist/public/chained_ops/log1p.js:
@tensorflow/tfjs-core/dist/public/chained_ops/logical_and.js:
@tensorflow/tfjs-core/dist/public/chained_ops/logical_not.js:
@tensorflow/tfjs-core/dist/public/chained_ops/logical_or.js:
@tensorflow/tfjs-core/dist/public/chained_ops/logical_xor.js:
@tensorflow/tfjs-core/dist/public/chained_ops/mat_mul.js:
@tensorflow/tfjs-core/dist/public/chained_ops/max.js:
@tensorflow/tfjs-core/dist/public/chained_ops/maximum.js:
@tensorflow/tfjs-core/dist/public/chained_ops/mean.js:
@tensorflow/tfjs-core/dist/public/chained_ops/min.js:
@tensorflow/tfjs-core/dist/public/chained_ops/minimum.js:
@tensorflow/tfjs-core/dist/public/chained_ops/mirror_pad.js:
@tensorflow/tfjs-core/dist/public/chained_ops/mod.js:
@tensorflow/tfjs-core/dist/public/chained_ops/mul.js:
@tensorflow/tfjs-core/dist/public/chained_ops/neg.js:
@tensorflow/tfjs-core/dist/public/chained_ops/norm.js:
@tensorflow/tfjs-core/dist/public/chained_ops/not_equal.js:
@tensorflow/tfjs-core/dist/public/chained_ops/one_hot.js:
@tensorflow/tfjs-core/dist/public/chained_ops/ones_like.js:
@tensorflow/tfjs-core/dist/public/chained_ops/pad.js:
@tensorflow/tfjs-core/dist/public/chained_ops/pow.js:
@tensorflow/tfjs-core/dist/public/chained_ops/prelu.js:
@tensorflow/tfjs-core/dist/public/chained_ops/prod.js:
@tensorflow/tfjs-core/dist/public/chained_ops/reciprocal.js:
@tensorflow/tfjs-core/dist/public/chained_ops/relu.js:
@tensorflow/tfjs-core/dist/public/chained_ops/relu6.js:
@tensorflow/tfjs-core/dist/public/chained_ops/reshape_as.js:
@tensorflow/tfjs-core/dist/public/chained_ops/reshape.js:
@tensorflow/tfjs-core/dist/public/chained_ops/resize_bilinear.js:
@tensorflow/tfjs-core/dist/public/chained_ops/resize_nearest_neighbor.js:
@tensorflow/tfjs-core/dist/public/chained_ops/reverse.js:
@tensorflow/tfjs-core/dist/public/chained_ops/rfft.js:
@tensorflow/tfjs-core/dist/public/chained_ops/round.js:
@tensorflow/tfjs-core/dist/public/chained_ops/rsqrt.js:
@tensorflow/tfjs-core/dist/public/chained_ops/selu.js:
@tensorflow/tfjs-core/dist/public/chained_ops/separable_conv2d.js:
@tensorflow/tfjs-core/dist/public/chained_ops/sigmoid.js:
@tensorflow/tfjs-core/dist/public/chained_ops/sign.js:
@tensorflow/tfjs-core/dist/public/chained_ops/sin.js:
@tensorflow/tfjs-core/dist/public/chained_ops/sinh.js:
@tensorflow/tfjs-core/dist/public/chained_ops/slice.js:
@tensorflow/tfjs-core/dist/public/chained_ops/softmax.js:
@tensorflow/tfjs-core/dist/public/chained_ops/softplus.js:
@tensorflow/tfjs-core/dist/public/chained_ops/space_to_batch_nd.js:
@tensorflow/tfjs-core/dist/public/chained_ops/split.js:
@tensorflow/tfjs-core/dist/public/chained_ops/sqrt.js:
@tensorflow/tfjs-core/dist/public/chained_ops/square.js:
@tensorflow/tfjs-core/dist/public/chained_ops/squared_difference.js:
@tensorflow/tfjs-core/dist/public/chained_ops/squeeze.js:
@tensorflow/tfjs-core/dist/public/chained_ops/stack.js:
@tensorflow/tfjs-core/dist/public/chained_ops/step.js:
@tensorflow/tfjs-core/dist/public/chained_ops/strided_slice.js:
@tensorflow/tfjs-core/dist/public/chained_ops/sub.js:
@tensorflow/tfjs-core/dist/public/chained_ops/sum.js:
@tensorflow/tfjs-core/dist/public/chained_ops/tan.js:
@tensorflow/tfjs-core/dist/public/chained_ops/tanh.js:
@tensorflow/tfjs-core/dist/public/chained_ops/tile.js:
@tensorflow/tfjs-core/dist/public/chained_ops/to_bool.js:
@tensorflow/tfjs-core/dist/public/chained_ops/to_float.js:
@tensorflow/tfjs-core/dist/public/chained_ops/to_int.js:
@tensorflow/tfjs-core/dist/public/chained_ops/topk.js:
@tensorflow/tfjs-core/dist/public/chained_ops/transpose.js:
@tensorflow/tfjs-core/dist/public/chained_ops/unique.js:
@tensorflow/tfjs-core/dist/public/chained_ops/unsorted_segment_sum.js:
@tensorflow/tfjs-core/dist/public/chained_ops/unstack.js:
@tensorflow/tfjs-core/dist/public/chained_ops/where.js:
@tensorflow/tfjs-core/dist/public/chained_ops/zeros_like.js:
@tensorflow/tfjs-core/dist/public/chained_ops/register_all_chained_ops.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/environment.js:
@tensorflow/tfjs-core/dist/util.js:
@tensorflow/tfjs-core/dist/tape.js:
@tensorflow/tfjs-core/dist/tensor.js:
@tensorflow/tfjs-core/dist/types.js:
@tensorflow/tfjs-core/dist/device_util.js:
@tensorflow/tfjs-core/dist/ops/broadcast_util.js:
@tensorflow/tfjs-core/dist/ops/axis_util.js:
@tensorflow/tfjs-core/dist/test_util.js:
@tensorflow/tfjs-core/dist/browser_util.js:
@tensorflow/tfjs-core/dist/ops/concat_util.js:
@tensorflow/tfjs-core/dist/ops/reduce_util.js:
@tensorflow/tfjs-core/dist/index.js:
@tensorflow/tfjs-backend-webgl/dist/tex_util.js:
@tensorflow/tfjs-backend-webgl/dist/webgl_util.js:
@tensorflow/tfjs-backend-webgl/dist/shader_compiler.js:
@tensorflow/tfjs-backend-webgl/dist/gpgpu_math.js:
@tensorflow/tfjs-backend-webgl/dist/gpgpu_util.js:
@tensorflow/tfjs-backend-webgl/dist/gpgpu_context.js:
@tensorflow/tfjs-backend-webgl/dist/texture_manager.js:
@tensorflow/tfjs-backend-webgl/dist/unaryop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/backend_webgl.js:
@tensorflow/tfjs-backend-webgl/dist/binaryop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/reduce_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/transpose_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/argminmax_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/pool_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/avg_pool_backprop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/batchnorm_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/slice_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/clip_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/concat_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/conv_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/crop_and_resize_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/conv_gpu_depthwise.js:
@tensorflow/tfjs-backend-webgl/dist/dilation_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/gather_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/lrn_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/max_pool_backprop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/multinomial_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/onehot_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/pad_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/reverse_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/select_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/strided_slice_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/tile_gpu.js:
  (**
   * @license
   * Copyright 2017 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/log.js:
@tensorflow/tfjs-core/dist/profiler.js:
@tensorflow/tfjs-core/dist/tensor_format.js:
@tensorflow/tfjs-core/dist/tensor_util.js:
@tensorflow/tfjs-core/dist/engine.js:
@tensorflow/tfjs-core/dist/tensor_util_env.js:
@tensorflow/tfjs-core/dist/ops/operation.js:
@tensorflow/tfjs-core/dist/ops/tensor_ops_util.js:
@tensorflow/tfjs-core/dist/ops/tensor.js:
@tensorflow/tfjs-core/dist/io/types.js:
@tensorflow/tfjs-core/dist/globals.js:
@tensorflow/tfjs-core/dist/io/io_utils.js:
@tensorflow/tfjs-core/dist/io/router_registry.js:
@tensorflow/tfjs-core/dist/io/indexed_db.js:
@tensorflow/tfjs-core/dist/io/local_storage.js:
@tensorflow/tfjs-core/dist/io/model_management.js:
@tensorflow/tfjs-core/dist/ops/abs.js:
@tensorflow/tfjs-core/dist/ops/acos.js:
@tensorflow/tfjs-core/dist/ops/acosh.js:
@tensorflow/tfjs-core/dist/ops/asin.js:
@tensorflow/tfjs-core/dist/ops/asinh.js:
@tensorflow/tfjs-core/dist/ops/atan.js:
@tensorflow/tfjs-core/dist/ops/atanh.js:
@tensorflow/tfjs-core/dist/ops/sigmoid.js:
@tensorflow/tfjs-core/dist/ops/slice.js:
@tensorflow/tfjs-core/dist/ops/tanh.js:
@tensorflow/tfjs-core/dist/ops/ceil.js:
@tensorflow/tfjs-core/dist/ops/clip_by_value.js:
@tensorflow/tfjs-core/dist/ops/cos.js:
@tensorflow/tfjs-core/dist/ops/cosh.js:
@tensorflow/tfjs-core/dist/ops/cumsum.js:
@tensorflow/tfjs-core/dist/ops/zeros_like.js:
@tensorflow/tfjs-core/dist/ops/erf.js:
@tensorflow/tfjs-core/dist/ops/scalar.js:
@tensorflow/tfjs-core/dist/ops/sqrt.js:
@tensorflow/tfjs-core/dist/ops/sum.js:
@tensorflow/tfjs-core/dist/ops/norm.js:
@tensorflow/tfjs-core/dist/ops/exp.js:
@tensorflow/tfjs-core/dist/ops/expm1.js:
@tensorflow/tfjs-core/dist/ops/floor.js:
@tensorflow/tfjs-core/dist/ops/gather.js:
@tensorflow/tfjs-core/dist/ops/is_finite.js:
@tensorflow/tfjs-core/dist/ops/is_inf.js:
@tensorflow/tfjs-core/dist/ops/is_nan.js:
@tensorflow/tfjs-core/dist/ops/linspace.js:
@tensorflow/tfjs-core/dist/ops/log.js:
@tensorflow/tfjs-core/dist/ops/log1p.js:
@tensorflow/tfjs-core/dist/gradients.js:
@tensorflow/tfjs-core/dist/ops/neg.js:
@tensorflow/tfjs-core/dist/ops/softplus.js:
@tensorflow/tfjs-core/dist/ops/log_sigmoid.js:
@tensorflow/tfjs-core/dist/ops/max_pool_with_argmax.js:
@tensorflow/tfjs-core/dist/ops/zeros.js:
@tensorflow/tfjs-core/dist/ops/ones.js:
@tensorflow/tfjs-core/dist/ops/ones_like.js:
@tensorflow/tfjs-core/dist/ops/pool.js:
@tensorflow/tfjs-core/dist/ops/rand_util.js:
@tensorflow/tfjs-core/dist/ops/range.js:
@tensorflow/tfjs-core/dist/ops/reciprocal.js:
@tensorflow/tfjs-core/dist/ops/reverse.js:
@tensorflow/tfjs-core/dist/ops/round.js:
@tensorflow/tfjs-core/dist/ops/rsqrt.js:
@tensorflow/tfjs-core/dist/ops/sign.js:
@tensorflow/tfjs-core/dist/ops/sin.js:
@tensorflow/tfjs-core/dist/ops/sinh.js:
@tensorflow/tfjs-core/dist/ops/slice1d.js:
@tensorflow/tfjs-core/dist/ops/slice2d.js:
@tensorflow/tfjs-core/dist/ops/slice3d.js:
@tensorflow/tfjs-core/dist/ops/slice4d.js:
@tensorflow/tfjs-core/dist/ops/softmax.js:
@tensorflow/tfjs-core/dist/ops/spectral/irfft.js:
@tensorflow/tfjs-core/dist/ops/spectral/rfft.js:
@tensorflow/tfjs-core/dist/ops/step.js:
@tensorflow/tfjs-core/dist/ops/strided_slice.js:
@tensorflow/tfjs-core/dist/ops/tan.js:
@tensorflow/tfjs-core/dist/ops/tensor1d.js:
@tensorflow/tfjs-core/dist/ops/tensor2d.js:
@tensorflow/tfjs-core/dist/ops/tensor3d.js:
@tensorflow/tfjs-core/dist/ops/tensor4d.js:
@tensorflow/tfjs-core/dist/ops/tensor5d.js:
@tensorflow/tfjs-core/dist/ops/tensor6d.js:
@tensorflow/tfjs-core/dist/ops/topk.js:
@tensorflow/tfjs-core/dist/ops/variable.js:
@tensorflow/tfjs-core/dist/backends/where_impl.js:
@tensorflow/tfjs-core/dist/ops/boolean_mask.js:
@tensorflow/tfjs-core/dist/ops/transpose.js:
@tensorflow/tfjs-core/dist/ops/moving_average.js:
@tensorflow/tfjs-core/dist/ops/scatter_nd.js:
@tensorflow/tfjs-core/dist/ops/sparse_to_dense.js:
@tensorflow/tfjs-core/dist/ops/gather_nd.js:
@tensorflow/tfjs-core/dist/ops/dropout.js:
@tensorflow/tfjs-core/dist/serialization.js:
@tensorflow/tfjs-core/dist/optimizers/optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adadelta_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adagrad_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adam_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/adamax_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/sgd_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/momentum_optimizer.js:
@tensorflow/tfjs-core/dist/optimizers/rmsprop_optimizer.js:
@tensorflow/tfjs-core/dist/io/browser_files.js:
@tensorflow/tfjs-core/dist/io/weights_loader.js:
@tensorflow/tfjs-core/dist/io/http.js:
@tensorflow/tfjs-core/dist/io/passthrough.js:
@tensorflow/tfjs-core/dist/io/io.js:
@tensorflow/tfjs-core/dist/ops/confusion_matrix.js:
@tensorflow/tfjs-core/dist/math.js:
@tensorflow/tfjs-core/dist/optimizers/optimizer_constructors.js:
@tensorflow/tfjs-core/dist/train.js:
@tensorflow/tfjs-core/dist/ops/array_ops_util.js:
@tensorflow/tfjs-core/dist/ops/selu_util.js:
@tensorflow/tfjs-core/dist/ops/erf_util.js:
@tensorflow/tfjs-core/dist/backends/complex_util.js:
@tensorflow/tfjs-core/dist/ops/segment_util.js:
@tensorflow/tfjs-core/dist/backends/backend_util.js:
@tensorflow/tfjs-backend-webgl/dist/canvas_util.js:
@tensorflow/tfjs-backend-webgl/dist/glsl_version.js:
@tensorflow/tfjs-backend-webgl/dist/shader_compiler_util.js:
@tensorflow/tfjs-backend-webgl/dist/encode_float_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/encode_float_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/encode_matrix_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/encode_matrix_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/packing_util.js:
@tensorflow/tfjs-backend-webgl/dist/pack_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/reshape_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/unaryop_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/unpack_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/binaryop_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/mulmat_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/binaryop_complex_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/batchnorm_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/clip_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/complex_abs_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/depth_to_space_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu_depthwise.js:
@tensorflow/tfjs-backend-webgl/dist/conv_backprop_gpu_depthwise.js:
@tensorflow/tfjs-backend-webgl/dist/fft_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels_utils/from_pixels_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/lrn_grad_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_backprop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_backprop_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/scatter_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/segment_gpu.js:
@tensorflow/tfjs-converter/dist/operations/executors/utils.js:
@tensorflow/tfjs-converter/dist/operations/operation_mapper.js:
@tensorflow/tfjs-converter/dist/operations/executors/arithmetic_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/basic_math_executor.js:
@tensorflow/tfjs-converter/dist/executor/tensor_array.js:
@tensorflow/tfjs-converter/dist/operations/executors/control_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/convolution_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/creation_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/dynamic_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/evaluation_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/graph_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/image_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/logical_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/matrices_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/normalization_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/reduction_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/slice_join_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/spectral_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/transformation_executor.js:
@tensorflow/tfjs-converter/dist/operations/operation_executor.js:
@tensorflow/tfjs-converter/dist/executor/graph_executor.js:
@tensorflow/tfjs-converter/dist/executor/graph_model.js:
@tensorflow/tfjs-converter/dist/index.js:
  (**
   * @license
   * Copyright 2018 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/kernel_registry.js:
@tensorflow/tfjs-core/dist/flags.js:
@tensorflow/tfjs-core/dist/platforms/platform_browser.js:
@tensorflow/tfjs-core/dist/platforms/platform_node.js:
@tensorflow/tfjs-core/dist/ops/square.js:
@tensorflow/tfjs-core/dist/ops/dropout_util.js:
@tensorflow/tfjs-core/dist/ops/signal_ops_util.js:
@tensorflow/tfjs-core/dist/ops/in_top_k.js:
@tensorflow/tfjs-core/dist/ops/fused_util.js:
@tensorflow/tfjs-core/dist/ops/fused/conv2d.js:
@tensorflow/tfjs-core/dist/ops/fused/depthwise_conv2d.js:
@tensorflow/tfjs-core/dist/ops/fused/mat_mul.js:
@tensorflow/tfjs-core/dist/ops/fused_ops.js:
@tensorflow/tfjs-core/dist/ops/signal/hamming_window.js:
@tensorflow/tfjs-core/dist/ops/signal/hann_window.js:
@tensorflow/tfjs-core/dist/ops/signal/frame.js:
@tensorflow/tfjs-core/dist/ops/signal/stft.js:
@tensorflow/tfjs-core/dist/backends/non_max_suppression_util.js:
@tensorflow/tfjs-core/dist/io/progress.js:
@tensorflow/tfjs-core/dist/ops/browser.js:
@tensorflow/tfjs-backend-webgl/dist/flags_webgl.js:
@tensorflow/tfjs-backend-webgl/dist/decode_matrix_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/decode_matrix_packed_gpu.js:
@tensorflow/tfjs-backend-cpu/dist/cpu_util.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Tile_impl.js:
@tensorflow/tfjs-backend-webgl/dist/transpose_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/addn_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/addn_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/argminmax_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/slice_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/concat_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/im2col_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/diag_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/fill_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/FromPixels.js:
@tensorflow/tfjs-backend-webgl/dist/lrn_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/pad_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_bilinear_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/resize_nearest_neighbor_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/reverse_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Square.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/NonMaxSuppressionV5.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Square.js:
@tensorflow/tfjs-converter/dist/operations/custom_op/register.js:
@tensorflow/tfjs-converter/dist/operations/custom_op/node_value_impl.js:
@tensorflow/tfjs-converter/dist/executor/model_analysis.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/platforms/is_typed_array_browser.js:
@tensorflow/tfjs-core/dist/ops/bitwise_and.js:
@tensorflow/tfjs-core/dist/ops/ensure_shape.js:
@tensorflow/tfjs-core/dist/ops/random_uniform_int.js:
@tensorflow/tfjs-core/dist/ops/image/rgb_to_grayscale.js:
@tensorflow/tfjs-core/dist/ops/string/static_regex_replace.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/BitwiseAnd.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StaticRegexReplace.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BitwiseAnd.js:
@tensorflow/tfjs-backend-webgl/dist/conv_backprop_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/scatter_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/StaticRegexReplace.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Draw.js:
  (**
   * @license
   * Copyright 2023 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/hash_util.js:
@tensorflow/tfjs-core/dist/ops/broadcast_args.js:
@tensorflow/tfjs-core/dist/ops/einsum.js:
@tensorflow/tfjs-core/dist/ops/meshgrid.js:
@tensorflow/tfjs-core/dist/ops/image/grayscale_to_rgb.js:
@tensorflow/tfjs-core/dist/ops/image/transform.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_fill_empty_rows.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_reshape.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_mean.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_sum.js:
@tensorflow/tfjs-core/dist/ops/string/string_n_grams.js:
@tensorflow/tfjs-core/dist/ops/string/string_split.js:
@tensorflow/tfjs-core/dist/ops/string/string_to_hash_bucket_fast.js:
@tensorflow/tfjs-core/dist/ops/slice_util.js:
@tensorflow/tfjs-core/dist/backends/einsum_util.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_fill_empty_rows_util.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_reshape_util.js:
@tensorflow/tfjs-core/dist/ops/sparse/sparse_segment_reduction_util.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/GatherNd_Impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseFillEmptyRows_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseReshape_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentReduction_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringNGrams_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringSplit_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringToHashBucketFast_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/BroadcastArgs.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Einsum.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SparseFillEmptyRows.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SparseReshape.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SparseSegmentMean.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SparseSegmentSum.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/StringNGrams.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/StringSplit.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/StringToHashBucketFast.js:
@tensorflow/tfjs-backend-webgl/dist/transform_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Transform.js:
@tensorflow/tfjs-backend-cpu/dist/backend_cpu.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/BroadcastArgs.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Einsum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseFillEmptyRows.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseReshape.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentMean.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SparseSegmentSum.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringNGrams.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringSplit.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/StringToHashBucketFast.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Transform.js:
@tensorflow/tfjs-converter/dist/flags.js:
@tensorflow/tfjs-converter/dist/operations/executors/sparse_executor.js:
@tensorflow/tfjs-converter/dist/operations/executors/string_executor.js:
@tensorflow/tfjs-core/dist/public/chained_ops/euclidean_norm.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/buffer.js:
@tensorflow/tfjs-core/dist/ops/cast.js:
@tensorflow/tfjs-core/dist/ops/print.js:
@tensorflow/tfjs-core/dist/base_side_effects.js:
@tensorflow/tfjs-core/dist/ops/arg_max.js:
@tensorflow/tfjs-core/dist/ops/arg_min.js:
@tensorflow/tfjs-core/dist/ops/min.js:
@tensorflow/tfjs-core/dist/ops/log_softmax.js:
@tensorflow/tfjs-core/dist/ops/mean.js:
@tensorflow/tfjs-core/dist/ops/setdiff1d_async.js:
@tensorflow/tfjs-core/dist/base.js:
@tensorflow/tfjs-backend-webgl/dist/base.js:
  (**
   * @license
   * Copyright 2020 Google Inc. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/cumprod.js:
@tensorflow/tfjs-core/dist/public/chained_ops/cumprod.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the 'License');
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an 'AS IS' BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/euclidean_norm.js:
@tensorflow/tfjs-core/dist/ops/search_sorted.js:
@tensorflow/tfjs-core/dist/ops/lower_bound.js:
@tensorflow/tfjs-core/dist/ops/ragged_gather.js:
@tensorflow/tfjs-core/dist/ops/ragged_tensor_to_tensor.js:
@tensorflow/tfjs-core/dist/ops/random_standard_normal.js:
@tensorflow/tfjs-core/dist/ops/tensor_scatter_update.js:
@tensorflow/tfjs-core/dist/ops/upper_bound.js:
@tensorflow/tfjs-core/dist/ops/ragged_to_dense_util.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedGather_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedTensorToTensor_impl.js:
@tensorflow/tfjs-backend-webgl/dist/conv_packed_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cum_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cumprod.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Cumsum.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedGather.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedTensorToTensor.js:
@tensorflow/tfjs-backend-webgl/dist/search_sorted_gpu.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/SearchSorted.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/TensorScatterUpdate.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cumprod.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedGather.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedTensorToTensor.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SearchSorted_impl.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/SearchSorted.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/TensorScatterUpdate.js:
@tensorflow/tfjs-converter/dist/operations/executors/ragged_executor.js:
  (**
   * @license
   * Copyright 2022 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/ragged_range.js:
@tensorflow/tfjs-core/dist/optimizers/register_optimizers.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedRange_impl.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/RaggedRange.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/RaggedRange.js:
  (**
   * @license
   * Copyright 2022 Google LLC.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/ops/image/threshold.js:
  (**
   * @license
   * Copyright 2021 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * https://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-core/dist/version.js:
@tensorflow/tfjs-converter/dist/version.js:
  (** @license See the LICENSE file. *)

@tensorflow/tfjs-backend-cpu/dist/kernels/Abs.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Ceil.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Exp.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Expm1.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Floor.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Log.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Rsqrt.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sigmoid.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sqrt.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/_FusedMatMul.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/ExpandDims.js:
@tensorflow/tfjs-backend-webgl/dist/kernels/Unique.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Elu.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Prelu.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Relu.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Relu6.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/BatchMatMul.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/_FusedMatMul.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Acos.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Acosh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Asin.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Asinh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Atan.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Atan2.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Atanh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ClipByValue.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/ComplexAbs.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Cosh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Erf.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/IsFinite.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/IsInf.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/IsNaN.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Log1p.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/LogicalNot.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Reciprocal.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Round.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Selu.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sign.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sin.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Sinh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Softplus.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Step.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Tan.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Tanh.js:
@tensorflow/tfjs-backend-cpu/dist/kernels/Unique.js:
  (**
   * @license
   * Copyright 2020 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the License);
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an AS IS BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/data/compiled_api.js:
  (**
   * @license
   * Copyright 2019 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * =============================================================================
   *)

@tensorflow/tfjs-converter/dist/operations/op_list/arithmetic.js:
@tensorflow/tfjs-converter/dist/operations/op_list/basic_math.js:
@tensorflow/tfjs-converter/dist/operations/op_list/control.js:
@tensorflow/tfjs-converter/dist/operations/op_list/convolution.js:
@tensorflow/tfjs-converter/dist/operations/op_list/creation.js:
@tensorflow/tfjs-converter/dist/operations/op_list/dynamic.js:
@tensorflow/tfjs-converter/dist/operations/op_list/evaluation.js:
@tensorflow/tfjs-converter/dist/operations/op_list/graph.js:
@tensorflow/tfjs-converter/dist/operations/op_list/hash_table.js:
@tensorflow/tfjs-converter/dist/operations/op_list/image.js:
@tensorflow/tfjs-converter/dist/operations/op_list/logical.js:
@tensorflow/tfjs-converter/dist/operations/op_list/matrices.js:
@tensorflow/tfjs-converter/dist/operations/op_list/normalization.js:
@tensorflow/tfjs-converter/dist/operations/op_list/reduction.js:
@tensorflow/tfjs-converter/dist/operations/op_list/slice_join.js:
@tensorflow/tfjs-converter/dist/operations/op_list/sparse.js:
@tensorflow/tfjs-converter/dist/operations/op_list/spectral.js:
@tensorflow/tfjs-converter/dist/operations/op_list/string.js:
@tensorflow/tfjs-converter/dist/operations/op_list/transformation.js:
  (**
   * @license
   * Copyright 2023 Google LLC. All Rights Reserved.
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   * =============================================================================
   *)
*/
