(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ur="160",yc=0,Jr=1,wc=2,Pa=1,Ca=2,gn=3,In=0,Fe=1,Ie=2,Pn=0,Mi=1,jr=2,$r=3,Qr=4,Ec=5,Hn=100,Tc=101,bc=102,to=103,eo=104,Ac=200,Rc=201,Pc=202,Cc=203,Er=204,Tr=205,Lc=206,Ic=207,Dc=208,Uc=209,Nc=210,Oc=211,Fc=212,Bc=213,Gc=214,kc=0,zc=1,Vc=2,ys=3,Hc=4,Wc=5,Xc=6,qc=7,La=0,Yc=1,Zc=2,Cn=0,Kc=1,Jc=2,jc=3,Ia=4,$c=5,Qc=6,Da=300,Si=301,yi=302,br=303,Ar=304,Ls=306,en=1e3,Qe=1001,Rr=1002,Oe=1003,no=1004,Hs=1005,qe=1006,tl=1007,Vi=1008,Ln=1009,el=1010,nl=1011,Nr=1012,Ua=1013,An=1014,Rn=1015,Hi=1016,Na=1017,Oa=1018,Xn=1020,il=1021,tn=1023,sl=1024,rl=1025,qn=1026,wi=1027,ol=1028,Fa=1029,al=1030,Ba=1031,Ga=1033,Ws=33776,Xs=33777,qs=33778,Ys=33779,io=35840,so=35841,ro=35842,oo=35843,ka=36196,ao=37492,co=37496,lo=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,vo=37816,Mo=37817,xo=37818,So=37819,yo=37820,wo=37821,Zs=36492,Eo=36494,To=36495,cl=36283,bo=36284,Ao=36285,Ro=36286,za=3e3,Yn=3001,ll=3200,hl=3201,Va=0,ul=1,Ye="",Ae="srgb",Mn="srgb-linear",Or="display-p3",Is="display-p3-linear",ws="linear",le="srgb",Es="rec709",Ts="p3",Qn=7680,Po=519,dl=512,fl=513,pl=514,Ha=515,ml=516,gl=517,_l=518,vl=519,Co=35044,Lo="300 es",Pr=1035,vn=2e3,bs=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Io=1234567;const Oi=Math.PI/180,Ei=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function Fr(s,t){return(s%t+t)%t}function Ml(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function xl(s,t,e){return s!==t?(e-s)/(t-s):0}function Fi(s,t,e){return(1-e)*s+e*t}function Sl(s,t,e,n){return Fi(s,t,1-Math.exp(-e*n))}function yl(s,t=1){return t-Math.abs(Fr(s,t*2)-t)}function wl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function El(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Tl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function bl(s,t){return s+Math.random()*(t-s)}function Al(s){return s*(.5-Math.random())}function Rl(s){s!==void 0&&(Io=s);let t=Io+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pl(s){return s*Oi}function Cl(s){return s*Ei}function Cr(s){return(s&s-1)===0&&s!==0}function Ll(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function As(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Il(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),l=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(o*u,c*d,c*l,o*h);break;case"YZY":s.set(c*l,o*u,c*d,o*h);break;case"ZXZ":s.set(c*d,c*l,o*u,o*h);break;case"XZX":s.set(o*u,c*_,c*f,o*h);break;case"YXY":s.set(c*f,o*u,c*_,o*h);break;case"ZYZ":s.set(c*_,c*f,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ci={DEG2RAD:Oi,RAD2DEG:Ei,generateUUID:jn,clamp:be,euclideanModulo:Fr,mapLinear:Ml,inverseLerp:xl,lerp:Fi,damp:Sl,pingpong:yl,smoothstep:wl,smootherstep:El,randInt:Tl,randFloat:bl,randFloatSpread:Al,seededRandom:Rl,degToRad:Pl,radToDeg:Cl,isPowerOfTwo:Cr,ceilPowerOfTwo:Ll,floorPowerOfTwo:As,setQuaternionFromProperEuler:Il,normalize:Ue,denormalize:mi};class yt{constructor(t=0,e=0){yt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,n,i,r,a,o,c,h){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h)}set(t,e,n,i,r,a,o,c,h){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],d=n[7],l=n[2],f=n[5],_=n[8],v=i[0],m=i[3],p=i[6],E=i[1],g=i[4],y=i[7],D=i[2],C=i[5],L=i[8];return r[0]=a*v+o*E+c*D,r[3]=a*m+o*g+c*C,r[6]=a*p+o*y+c*L,r[1]=h*v+u*E+d*D,r[4]=h*m+u*g+d*C,r[7]=h*p+u*y+d*L,r[2]=l*v+f*E+_*D,r[5]=l*m+f*g+_*C,r[8]=l*p+f*y+_*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+i*r*h-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=u*a-o*h,l=o*c-u*r,f=h*r-a*c,_=e*d+n*l+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(i*h-u*n)*v,t[2]=(o*n-i*a)*v,t[3]=l*v,t[4]=(u*e-i*c)*v,t[5]=(i*r-o*e)*v,t[6]=f*v,t[7]=(n*c-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-i*h,i*c,-i*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ks.makeScale(t,e)),this}rotate(t){return this.premultiply(Ks.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ks.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ks=new Qt;function Wa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Rs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dl(){const s=Rs("canvas");return s.style.display="block",s}const Do={};function Bi(s){s in Do||(Do[s]=!0,console.warn(s))}const Uo=new Qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),No=new Qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ki={[Mn]:{transfer:ws,primaries:Es,toReference:s=>s,fromReference:s=>s},[Ae]:{transfer:le,primaries:Es,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Is]:{transfer:ws,primaries:Ts,toReference:s=>s.applyMatrix3(No),fromReference:s=>s.applyMatrix3(Uo)},[Or]:{transfer:le,primaries:Ts,toReference:s=>s.convertSRGBToLinear().applyMatrix3(No),fromReference:s=>s.applyMatrix3(Uo).convertLinearToSRGB()}},Ul=new Set([Mn,Is]),oe={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ul.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ki[t].toReference,i=Ki[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ki[s].primaries},getTransfer:function(s){return s===Ye?ws:Ki[s].transfer}};function xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ti;class Xa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=Rs("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nl=0;class qa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=jn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(js(i[a].image)):r.push(js(i[a]))}else r=js(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function js(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ol=0;class Ge extends bi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Qe,i=Qe,r=qe,a=Vi,o=tn,c=Ln,h=Ge.DEFAULT_ANISOTROPY,u=Ye){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=jn(),this.name="",this.source=new qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Yn?Ae:Ye),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Da)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case en:t.x=t.x-Math.floor(t.x);break;case Qe:t.x=t.x<0?0:1;break;case Rr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case en:t.y=t.y-Math.floor(t.y);break;case Qe:t.y=t.y<0?0:1;break;case Rr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?Yn:za}set encoding(t){Bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yn?Ae:Ye}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Da;Ge.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,h=c[0],u=c[4],d=c[8],l=c[1],f=c[5],_=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(u-l)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+l)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(h+1)/2,y=(f+1)/2,D=(p+1)/2,C=(u+l)/4,L=(d+v)/4,G=(_+m)/4;return g>y&&g>D?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=C/n,r=L/n):y>D?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=C/i,r=G/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=L/r,i=G/r),this.set(n,i,r,e),this}let E=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(l-u)*(l-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(d-v)/E,this.z=(l-u)/E,this.w=Math.acos((h+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fl extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Bi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yn?Ae:Ye),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ya extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bl extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],h=n[i+1],u=n[i+2],d=n[i+3];const l=r[a+0],f=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=l,t[e+1]=f,t[e+2]=_,t[e+3]=v;return}if(d!==v||c!==l||h!==f||u!==_){let m=1-o;const p=c*l+h*f+u*_+d*v,E=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){const D=Math.sqrt(g),C=Math.atan2(D,p*E);m=Math.sin(m*C)/D,o=Math.sin(o*C)/D}const y=o*E;if(c=c*m+l*y,h=h*m+f*y,u=u*m+_*y,d=d*m+v*y,m===1-o){const D=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=D,h*=D,u*=D,d*=D}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a],l=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+u*d+c*f-h*l,t[e+1]=c*_+u*l+h*d-o*f,t[e+2]=h*_+u*f+o*l-c*d,t[e+3]=u*_-o*d-c*l-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(i/2),d=o(r/2),l=c(n/2),f=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=l*u*d+h*f*_,this._y=h*f*d-l*u*_,this._z=h*u*_+l*f*d,this._w=h*u*d-l*f*_;break;case"YXZ":this._x=l*u*d+h*f*_,this._y=h*f*d-l*u*_,this._z=h*u*_-l*f*d,this._w=h*u*d+l*f*_;break;case"ZXY":this._x=l*u*d-h*f*_,this._y=h*f*d+l*u*_,this._z=h*u*_+l*f*d,this._w=h*u*d-l*f*_;break;case"ZYX":this._x=l*u*d-h*f*_,this._y=h*f*d+l*u*_,this._z=h*u*_-l*f*d,this._w=h*u*d+l*f*_;break;case"YZX":this._x=l*u*d+h*f*_,this._y=h*f*d+l*u*_,this._z=h*u*_-l*f*d,this._w=h*u*d-l*f*_;break;case"XZY":this._x=l*u*d-h*f*_,this._y=h*f*d-l*u*_,this._z=h*u*_+l*f*d,this._w=h*u*d+l*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],d=e[10],l=n+o+d;if(l>0){const f=.5/Math.sqrt(l+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-h)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+h)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-h)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+h)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+i*h-r*c,this._y=i*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-i*o,this._w=a*u-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),d=Math.sin((1-e)*u)/h,l=Math.sin(e*u)/h;return this._w=a*d+this._w*l,this._x=n*d+this._x*l,this._y=i*d+this._y*l,this._z=r*d+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*i-o*n),u=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*h+a*d-o*u,this.y=n+c*u+o*h-r*d,this.z=i+c*d+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $s.copy(this).projectOnVector(t),this.sub($s)}reflect(t){return this.sub($s.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $s=new U,Oo=new Zi;class xn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ji.copy(n.boundingBox)),Ji.applyMatrix4(t.matrixWorld),this.union(Ji)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),ji.subVectors(this.max,Li),ei.subVectors(t.a,Li),ni.subVectors(t.b,Li),ii.subVectors(t.c,Li),yn.subVectors(ni,ei),wn.subVectors(ii,ni),Fn.subVectors(ei,ii);let e=[0,-yn.z,yn.y,0,-wn.z,wn.y,0,-Fn.z,Fn.y,yn.z,0,-yn.x,wn.z,0,-wn.x,Fn.z,0,-Fn.x,-yn.y,yn.x,0,-wn.y,wn.x,0,-Fn.y,Fn.x,0];return!Qs(e,ei,ni,ii,ji)||(e=[1,0,0,0,1,0,0,0,1],!Qs(e,ei,ni,ii,ji))?!1:($i.crossVectors(yn,wn),e=[$i.x,$i.y,$i.z],Qs(e,ei,ni,ii,ji))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new U,new U,new U,new U,new U,new U,new U,new U],Ke=new U,Ji=new xn,ei=new U,ni=new U,ii=new U,yn=new U,wn=new U,Fn=new U,Li=new U,ji=new U,$i=new U,Bn=new U;function Qs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=t.dot(Bn),h=e.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const Gl=new xn,Ii=new U,tr=new U;class Ds{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(tr)),this.expandByPoint(Ii.copy(t.center).sub(tr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new U,er=new U,Qi=new U,En=new U,nr=new U,ts=new U,ir=new U;class Za{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){er.copy(t).add(e).multiplyScalar(.5),Qi.copy(e).sub(t).normalize(),En.copy(this.origin).sub(er);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Qi),o=En.dot(this.direction),c=-En.dot(Qi),h=En.lengthSq(),u=Math.abs(1-a*a);let d,l,f,_;if(u>0)if(d=a*c-o,l=a*o-c,_=r*u,d>=0)if(l>=-_)if(l<=_){const v=1/u;d*=v,l*=v,f=d*(d+a*l+2*o)+l*(a*d+l+2*c)+h}else l=r,d=Math.max(0,-(a*l+o)),f=-d*d+l*(l+2*c)+h;else l=-r,d=Math.max(0,-(a*l+o)),f=-d*d+l*(l+2*c)+h;else l<=-_?(d=Math.max(0,-(-a*r+o)),l=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+l*(l+2*c)+h):l<=_?(d=0,l=Math.min(Math.max(-r,-c),r),f=l*(l+2*c)+h):(d=Math.max(0,-(a*r+o)),l=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+l*(l+2*c)+h);else l=a>0?-r:r,d=Math.max(0,-(a*l+o)),f=-d*d+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(er).addScaledVector(Qi,l),f}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,l=this.origin;return h>=0?(n=(t.min.x-l.x)*h,i=(t.max.x-l.x)*h):(n=(t.max.x-l.x)*h,i=(t.min.x-l.x)*h),u>=0?(r=(t.min.y-l.y)*u,a=(t.max.y-l.y)*u):(r=(t.max.y-l.y)*u,a=(t.min.y-l.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-l.z)*d,c=(t.max.z-l.z)*d):(o=(t.max.z-l.z)*d,c=(t.min.z-l.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,r){nr.subVectors(e,t),ts.subVectors(n,t),ir.crossVectors(nr,ts);let a=this.direction.dot(ir),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);const c=o*this.direction.dot(ts.crossVectors(En,ts));if(c<0)return null;const h=o*this.direction.dot(nr.cross(En));if(h<0||c+h>a)return null;const u=-o*En.dot(ir);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,i,r,a,o,c,h,u,d,l,f,_,v,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h,u,d,l,f,_,v,m)}set(t,e,n,i,r,a,o,c,h,u,d,l,f,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=u,p[10]=d,p[14]=l,p[3]=f,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),a=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const l=a*u,f=a*d,_=o*u,v=o*d;e[0]=c*u,e[4]=-c*d,e[8]=h,e[1]=f+_*h,e[5]=l-v*h,e[9]=-o*c,e[2]=v-l*h,e[6]=_+f*h,e[10]=a*c}else if(t.order==="YXZ"){const l=c*u,f=c*d,_=h*u,v=h*d;e[0]=l+v*o,e[4]=_*o-f,e[8]=a*h,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-_,e[6]=v+l*o,e[10]=a*c}else if(t.order==="ZXY"){const l=c*u,f=c*d,_=h*u,v=h*d;e[0]=l-v*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*u,e[9]=v-l*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const l=a*u,f=a*d,_=o*u,v=o*d;e[0]=c*u,e[4]=_*h-f,e[8]=l*h+v,e[1]=c*d,e[5]=v*h+l,e[9]=f*h-_,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const l=a*c,f=a*h,_=o*c,v=o*h;e[0]=c*u,e[4]=v-l*d,e[8]=_*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=f*d+_,e[10]=l-v*d}else if(t.order==="XZY"){const l=a*c,f=a*h,_=o*c,v=o*h;e[0]=c*u,e[4]=-d,e[8]=h*u,e[1]=l*d+v,e[5]=a*u,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*u,e[10]=v*d+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kl,t,zl)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Tn.crossVectors(n,Ve),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Tn.crossVectors(n,Ve)),Tn.normalize(),es.crossVectors(Ve,Tn),i[0]=Tn.x,i[4]=es.x,i[8]=Ve.x,i[1]=Tn.y,i[5]=es.y,i[9]=Ve.y,i[2]=Tn.z,i[6]=es.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],d=n[5],l=n[9],f=n[13],_=n[2],v=n[6],m=n[10],p=n[14],E=n[3],g=n[7],y=n[11],D=n[15],C=i[0],L=i[4],G=i[8],w=i[12],b=i[1],R=i[5],Z=i[9],ot=i[13],O=i[2],z=i[6],V=i[10],J=i[14],et=i[3],X=i[7],it=i[11],q=i[15];return r[0]=a*C+o*b+c*O+h*et,r[4]=a*L+o*R+c*z+h*X,r[8]=a*G+o*Z+c*V+h*it,r[12]=a*w+o*ot+c*J+h*q,r[1]=u*C+d*b+l*O+f*et,r[5]=u*L+d*R+l*z+f*X,r[9]=u*G+d*Z+l*V+f*it,r[13]=u*w+d*ot+l*J+f*q,r[2]=_*C+v*b+m*O+p*et,r[6]=_*L+v*R+m*z+p*X,r[10]=_*G+v*Z+m*V+p*it,r[14]=_*w+v*ot+m*J+p*q,r[3]=E*C+g*b+y*O+D*et,r[7]=E*L+g*R+y*z+D*X,r[11]=E*G+g*Z+y*V+D*it,r[15]=E*w+g*ot+y*J+D*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],d=t[6],l=t[10],f=t[14],_=t[3],v=t[7],m=t[11],p=t[15];return _*(+r*c*d-i*h*d-r*o*l+n*h*l+i*o*f-n*c*f)+v*(+e*c*f-e*h*l+r*a*l-i*a*f+i*h*u-r*c*u)+m*(+e*h*d-e*o*f-r*a*d+n*a*f+r*o*u-n*h*u)+p*(-i*o*u-e*c*d+e*o*l+i*a*d-n*a*l+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=t[9],l=t[10],f=t[11],_=t[12],v=t[13],m=t[14],p=t[15],E=d*m*h-v*l*h+v*c*f-o*m*f-d*c*p+o*l*p,g=_*l*h-u*m*h-_*c*f+a*m*f+u*c*p-a*l*p,y=u*v*h-_*d*h+_*o*f-a*v*f-u*o*p+a*d*p,D=_*d*c-u*v*c-_*o*l+a*v*l+u*o*m-a*d*m,C=e*E+n*g+i*y+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=E*L,t[1]=(v*l*r-d*m*r-v*i*f+n*m*f+d*i*p-n*l*p)*L,t[2]=(o*m*r-v*c*r+v*i*h-n*m*h-o*i*p+n*c*p)*L,t[3]=(d*c*r-o*l*r-d*i*h+n*l*h+o*i*f-n*c*f)*L,t[4]=g*L,t[5]=(u*m*r-_*l*r+_*i*f-e*m*f-u*i*p+e*l*p)*L,t[6]=(_*c*r-a*m*r-_*i*h+e*m*h+a*i*p-e*c*p)*L,t[7]=(a*l*r-u*c*r+u*i*h-e*l*h-a*i*f+e*c*f)*L,t[8]=y*L,t[9]=(_*d*r-u*v*r-_*n*f+e*v*f+u*n*p-e*d*p)*L,t[10]=(a*v*r-_*o*r+_*n*h-e*v*h-a*n*p+e*o*p)*L,t[11]=(u*o*r-a*d*r-u*n*h+e*d*h+a*n*f-e*o*f)*L,t[12]=D*L,t[13]=(u*v*i-_*d*i+_*n*l-e*v*l-u*n*m+e*d*m)*L,t[14]=(_*o*i-a*v*i-_*n*c+e*v*c+a*n*m-e*o*m)*L,t[15]=(a*d*i-u*o*i+u*n*c-e*d*c-a*n*l+e*o*l)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,u*o+n,u*c-i*a,0,h*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,d=o+o,l=r*h,f=r*u,_=r*d,v=a*u,m=a*d,p=o*d,E=c*h,g=c*u,y=c*d,D=n.x,C=n.y,L=n.z;return i[0]=(1-(v+p))*D,i[1]=(f+y)*D,i[2]=(_-g)*D,i[3]=0,i[4]=(f-y)*C,i[5]=(1-(l+p))*C,i[6]=(m+E)*C,i[7]=0,i[8]=(_+g)*L,i[9]=(m-E)*L,i[10]=(1-(l+v))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=si.set(i[0],i[1],i[2]).length();const a=si.set(i[4],i[5],i[6]).length(),o=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const h=1/r,u=1/a,d=1/o;return Je.elements[0]*=h,Je.elements[1]*=h,Je.elements[2]*=h,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=d,Je.elements[9]*=d,Je.elements[10]*=d,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=vn){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),l=(n+i)/(n-i);let f,_;if(o===vn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===bs)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=vn){const c=this.elements,h=1/(e-t),u=1/(n-i),d=1/(a-r),l=(e+t)*h,f=(n+i)*u;let _,v;if(o===vn)_=(a+r)*d,v=-2*d;else if(o===bs)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const si=new U,Je=new _e,kl=new U(0,0,0),zl=new U(1,1,1),Tn=new U,es=new U,Ve=new U,Fo=new _e,Bo=new Zi;class Us{constructor(t=0,e=0,n=0,i=Us.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],h=i[5],u=i[9],d=i[2],l=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(l,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Us.DEFAULT_ORDER="XYZ";class Ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vl=0;const Go=new U,ri=new Zi,fn=new _e,ns=new U,Di=new U,Hl=new U,Wl=new Zi,ko=new U(1,0,0),zo=new U(0,1,0),Vo=new U(0,0,1),Xl={type:"added"},ql={type:"removed"};class xe extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new U,e=new Us,n=new Zi,i=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new Qt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(ko,t)}rotateY(t){return this.rotateOnAxis(zo,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,e){return Go.copy(t).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ko,t)}translateY(t){return this.translateOnAxis(zo,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ns.copy(t):ns.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Di,ns,this.up):fn.lookAt(ns,Di,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(fn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ql)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,Hl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Wl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),l=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),l.length>0&&(n.skeletons=l),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new U(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new U,pn=new U,sr=new U,mn=new U,oi=new U,ai=new U,Ho=new U,rr=new U,or=new U,ar=new U;let is=!1;class $e{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){je.subVectors(i,e),pn.subVectors(n,e),sr.subVectors(t,e);const a=je.dot(je),o=je.dot(pn),c=je.dot(sr),h=pn.dot(pn),u=pn.dot(sr),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const l=1/d,f=(h*c-o*u)*l,_=(a*u-o*c)*l;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(t,e,n,i,r,a,o,c){return is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),is=!0),this.getInterpolation(t,e,n,i,r,a,o,c)}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(a,mn.y),c.addScaledVector(o,mn.z),c)}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),pn.subVectors(t,e),je.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return is===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),is=!0),$e.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;oi.subVectors(i,n),ai.subVectors(r,n),rr.subVectors(t,n);const c=oi.dot(rr),h=ai.dot(rr);if(c<=0&&h<=0)return e.copy(n);or.subVectors(t,i);const u=oi.dot(or),d=ai.dot(or);if(u>=0&&d<=u)return e.copy(i);const l=c*d-u*h;if(l<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(oi,a);ar.subVectors(t,r);const f=oi.dot(ar),_=ai.dot(ar);if(_>=0&&f<=_)return e.copy(r);const v=f*h-c*_;if(v<=0&&h>=0&&_<=0)return o=h/(h-_),e.copy(n).addScaledVector(ai,o);const m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return Ho.subVectors(r,i),o=(d-u)/(d-u+(f-_)),e.copy(i).addScaledVector(Ho,o);const p=1/(m+v+l);return a=v*p,o=l*p,e.copy(n).addScaledVector(oi,a).addScaledVector(ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},ss={h:0,s:0,l:0};function cr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Fr(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=cr(a,r,t+1/3),this.g=cr(a,r,t),this.b=cr(a,r,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Ja[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return oe.fromWorkingColorSpace(Ce.copy(this),t),Math.round(be(Ce.r*255,0,255))*65536+Math.round(be(Ce.g*255,0,255))*256+Math.round(be(Ce.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,r=Ce.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Ae){oe.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(ss);const n=Fi(bn.h,ss.h,e),i=Fi(bn.s,ss.s,e),r=Fi(bn.l,ss.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new te;te.NAMES=Ja;let Yl=0;class Ai extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Mi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Er,this.blendDst=Tr,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Er&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ge extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new U,rs=new yt;class an{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)rs.fromBufferAttribute(this,e),rs.applyMatrix3(t),this.setXY(e,rs.x,rs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),t}}class ja extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $a extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zl=0;const Xe=new _e,lr=new xe,ci=new U,He=new xn,Ui=new xn,Te=new U;class De extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wa(t)?$a:ja)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return lr.lookAt(t),lr.updateMatrix(),this.applyMatrix4(lr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(He.min,Ui.min),He.expandByPoint(Te),Te.addVectors(He.max,Ui.max),He.expandByPoint(Te)):(He.expandByPoint(Ui.min),He.expandByPoint(Ui.max))}He.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Te.fromBufferAttribute(o,h),c&&(ci.fromBufferAttribute(t,h),Te.add(ci)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,h=[],u=[];for(let b=0;b<o;b++)h[b]=new U,u[b]=new U;const d=new U,l=new U,f=new U,_=new yt,v=new yt,m=new yt,p=new U,E=new U;function g(b,R,Z){d.fromArray(i,b*3),l.fromArray(i,R*3),f.fromArray(i,Z*3),_.fromArray(a,b*2),v.fromArray(a,R*2),m.fromArray(a,Z*2),l.sub(d),f.sub(d),v.sub(_),m.sub(_);const ot=1/(v.x*m.y-m.x*v.y);isFinite(ot)&&(p.copy(l).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(ot),E.copy(f).multiplyScalar(v.x).addScaledVector(l,-m.x).multiplyScalar(ot),h[b].add(p),h[R].add(p),h[Z].add(p),u[b].add(E),u[R].add(E),u[Z].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let b=0,R=y.length;b<R;++b){const Z=y[b],ot=Z.start,O=Z.count;for(let z=ot,V=ot+O;z<V;z+=3)g(n[z+0],n[z+1],n[z+2])}const D=new U,C=new U,L=new U,G=new U;function w(b){L.fromArray(r,b*3),G.copy(L);const R=h[b];D.copy(R),D.sub(L.multiplyScalar(L.dot(R))).normalize(),C.crossVectors(G,R);const ot=C.dot(u[b])<0?-1:1;c[b*4]=D.x,c[b*4+1]=D.y,c[b*4+2]=D.z,c[b*4+3]=ot}for(let b=0,R=y.length;b<R;++b){const Z=y[b],ot=Z.start,O=Z.count;for(let z=ot,V=ot+O;z<V;z+=3)w(n[z+0]),w(n[z+1]),w(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,f=n.count;l<f;l++)n.setXYZ(l,0,0,0);const i=new U,r=new U,a=new U,o=new U,c=new U,h=new U,u=new U,d=new U;if(t)for(let l=0,f=t.count;l<f;l+=3){const _=t.getX(l+0),v=t.getX(l+1),m=t.getX(l+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),o.add(u),c.add(u),h.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,f=e.count;l<f;l+=3)i.fromBufferAttribute(e,l+0),r.fromBufferAttribute(e,l+1),a.fromBufferAttribute(e,l+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(l+0,u.x,u.y,u.z),n.setXYZ(l+1,u.x,u.y,u.z),n.setXYZ(l+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){const h=o.array,u=o.itemSize,d=o.normalized,l=new h.constructor(c.length*u);let f=0,_=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*u;for(let p=0;p<u;p++)l[_++]=h[f++]}return new an(l,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=t(c,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let u=0,d=h.length;u<d;u++){const l=h[u],f=t(l,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,l=h.length;d<l;d++){const f=h[d];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],d=r[h];for(let l=0,f=d.length;l<f;l++)u.push(d[l].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new _e,Gn=new Za,os=new Ds,Xo=new U,li=new U,hi=new U,ui=new U,hr=new U,as=new U,cs=new yt,ls=new yt,hs=new yt,qo=new U,Yo=new U,Zo=new U,us=new U,ds=new U;class P extends xe{constructor(t=new De,e=new ge){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){as.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const u=o[c],d=r[c];u!==0&&(hr.fromBufferAttribute(d,t),a?as.addScaledVector(hr,u):as.addScaledVector(hr.sub(e),u))}e.add(as)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(os.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(os,Xo)===null||Gn.origin.distanceToSquared(Xo)>(t.far-t.near)**2))&&(Wo.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Wo),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,l=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=l.length;_<v;_++){const m=l[_],p=a[m.materialIndex],E=Math.max(m.start,f.start),g=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,D=g;y<D;y+=3){const C=o.getX(y),L=o.getX(y+1),G=o.getX(y+2);i=fs(this,p,t,n,h,u,d,C,L,G),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const E=o.getX(m),g=o.getX(m+1),y=o.getX(m+2);i=fs(this,a,t,n,h,u,d,E,g,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=l.length;_<v;_++){const m=l[_],p=a[m.materialIndex],E=Math.max(m.start,f.start),g=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=E,D=g;y<D;y+=3){const C=y,L=y+1,G=y+2;i=fs(this,p,t,n,h,u,d,C,L,G),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const E=m,g=m+1,y=m+2;i=fs(this,a,t,n,h,u,d,E,g,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Kl(s,t,e,n,i,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===In,o),c===null)return null;ds.copy(o),ds.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(ds);return h<e.near||h>e.far?null:{distance:h,point:ds.clone(),object:s}}function fs(s,t,e,n,i,r,a,o,c,h){s.getVertexPosition(o,li),s.getVertexPosition(c,hi),s.getVertexPosition(h,ui);const u=Kl(s,t,e,n,li,hi,ui,us);if(u){i&&(cs.fromBufferAttribute(i,o),ls.fromBufferAttribute(i,c),hs.fromBufferAttribute(i,h),u.uv=$e.getInterpolation(us,li,hi,ui,cs,ls,hs,new yt)),r&&(cs.fromBufferAttribute(r,o),ls.fromBufferAttribute(r,c),hs.fromBufferAttribute(r,h),u.uv1=$e.getInterpolation(us,li,hi,ui,cs,ls,hs,new yt),u.uv2=u.uv1),a&&(qo.fromBufferAttribute(a,o),Yo.fromBufferAttribute(a,c),Zo.fromBufferAttribute(a,h),u.normal=$e.getInterpolation(us,li,hi,ui,qo,Yo,Zo,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new U,materialIndex:0};$e.getNormal(li,hi,ui,d.normal),u.face=d}return u}class rt extends De{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],u=[],d=[];let l=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(d,2));function _(v,m,p,E,g,y,D,C,L,G,w){const b=y/L,R=D/G,Z=y/2,ot=D/2,O=C/2,z=L+1,V=G+1;let J=0,et=0;const X=new U;for(let it=0;it<V;it++){const q=it*R-ot;for(let ut=0;ut<z;ut++){const Y=ut*b-Z;X[v]=Y*E,X[m]=q*g,X[p]=O,h.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=C>0?1:-1,u.push(X.x,X.y,X.z),d.push(ut/L),d.push(1-it/G),J+=1}}for(let it=0;it<G;it++)for(let q=0;q<L;q++){const ut=l+q+z*it,Y=l+q+z*(it+1),st=l+(q+1)+z*(it+1),gt=l+(q+1)+z*it;c.push(ut,Y,gt),c.push(Y,st,gt),et+=6}o.addGroup(f,et,w),f+=et,l+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(s){const t={};for(let e=0;e<s.length;e++){const n=Ti(s[e]);for(const i in n)t[i]=n[i]}return t}function Jl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qa(s){return s.getRenderTarget()===null?s.outputColorSpace:oe.workingColorSpace}const jl={clone:Ti,merge:Ne};var $l=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ql=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$l,this.fragmentShader=Ql,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=Jl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends tc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ei*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const di=-90,fi=1;class th extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(di,fi,t,e);i.layers=this.layers,this.add(i);const r=new Be(di,fi,t,e);r.layers=this.layers,this.add(r);const a=new Be(di,fi,t,e);a.layers=this.layers,this.add(a);const o=new Be(di,fi,t,e);o.layers=this.layers,this.add(o);const c=new Be(di,fi,t,e);c.layers=this.layers,this.add(c);const h=new Be(di,fi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const h of e)this.remove(h);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===bs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,u]=this.children,d=t.getRenderTarget(),l=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,l,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ec extends Ge{constructor(t,e,n,i,r,a,o,c,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,i,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class eh extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Bi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yn?Ae:Ye),this.texture=new ec(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rt(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Pn});r.uniforms.tEquirect.value=e;const a=new P(i,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=qe),new th(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const ur=new U,nh=new U,ih=new Qt;class zn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ur.subVectors(n,e).cross(nh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ih.getNormalMatrix(t),i=this.coplanarPoint(ur).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Ds,ps=new U;class Br{constructor(t=new zn,e=new zn,n=new zn,i=new zn,r=new zn,a=new zn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],h=i[4],u=i[5],d=i[6],l=i[7],f=i[8],_=i[9],v=i[10],m=i[11],p=i[12],E=i[13],g=i[14],y=i[15];if(n[0].setComponents(c-r,l-h,m-f,y-p).normalize(),n[1].setComponents(c+r,l+h,m+f,y+p).normalize(),n[2].setComponents(c+a,l+u,m+_,y+E).normalize(),n[3].setComponents(c-a,l-u,m-_,y-E).normalize(),n[4].setComponents(c-o,l-d,m-v,y-g).normalize(),e===vn)n[5].setComponents(c+o,l+d,m+v,y+g).normalize();else if(e===bs)n[5].setComponents(o,d,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ps.x=i.normal.x>0?t.max.x:t.min.x,ps.y=i.normal.y>0?t.max.y:t.min.y,ps.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ps)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function sh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(h,u){const d=h.array,l=h.usage,f=d.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,d,l),h.onUploadCallback();let v;if(d instanceof Float32Array)v=s.FLOAT;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=s.SHORT;else if(d instanceof Uint32Array)v=s.UNSIGNED_INT;else if(d instanceof Int32Array)v=s.INT;else if(d instanceof Int8Array)v=s.BYTE;else if(d instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:f}}function r(h,u,d){const l=u.array,f=u._updateRange,_=u.updateRanges;if(s.bindBuffer(d,h),f.count===-1&&_.length===0&&s.bufferSubData(d,0,l),_.length!==0){for(let v=0,m=_.length;v<m;v++){const p=_[v];e?s.bufferSubData(d,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count):s.bufferSubData(d,p.start*l.BYTES_PER_ELEMENT,l.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(d,f.offset*l.BYTES_PER_ELEMENT,l,f.offset,f.count):s.bufferSubData(d,f.offset*l.BYTES_PER_ELEMENT,l.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(s.deleteBuffer(u.buffer),n.delete(h))}function c(h,u){if(h.isGLBufferAttribute){const l=n.get(h);(!l||l.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);if(d===void 0)n.set(h,i(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,u),d.version=h.version}}return{get:a,remove:o,update:c}}class ee extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),h=o+1,u=c+1,d=t/o,l=e/c,f=[],_=[],v=[],m=[];for(let p=0;p<u;p++){const E=p*l-a;for(let g=0;g<h;g++){const y=g*d-r;_.push(y,-E,0),v.push(0,0,1),m.push(g/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<o;E++){const g=E+h*p,y=E+h*(p+1),D=E+1+h*(p+1),C=E+1+h*p;f.push(g,y,C),f.push(y,D,C)}this.setIndex(f),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.width,t.height,t.widthSegments,t.heightSegments)}}var rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oh=`#ifdef USE_ALPHAHASH
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
#endif`,ah=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ch=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uh=`#ifdef USE_AOMAP
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
#endif`,dh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fh=`#ifdef USE_BATCHING
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
#endif`,ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,mh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_h=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vh=`#ifdef USE_IRIDESCENCE
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
#endif`,Mh=`#ifdef USE_BUMPMAP
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
#endif`,xh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rh=`#define PI 3.141592653589793
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
} // validated`,Ph=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ch=`vec3 transformedNormal = objectNormal;
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
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oh=`
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
}`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gh=`#ifdef USE_ENVMAP
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
#endif`,kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zh=`#ifdef USE_ENVMAP
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
#endif`,Vh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qh=`#ifdef USE_GRADIENTMAP
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
}`,Yh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jh=`uniform bool receiveShadow;
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
#endif`,$h=`#ifdef USE_ENVMAP
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
#endif`,Qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iu=`PhysicalMaterial material;
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
#endif`,su=`struct PhysicalMaterial {
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
}`,ru=`
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
#endif`,ou=`#if defined( RE_IndirectDiffuse )
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
#endif`,au=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,uu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,du=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mu=`#if defined( USE_POINTS_UV )
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
#endif`,gu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_u=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mu=`#ifdef USE_MORPHNORMALS
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
#endif`,xu=`#ifdef USE_MORPHTARGETS
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
#endif`,Su=`#ifdef USE_MORPHTARGETS
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
#endif`,yu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Au=`#ifdef USE_NORMALMAP
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
#endif`,Ru=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Du=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ou=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ku=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Hu=`float getShadowMask() {
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
}`,Wu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xu=`#ifdef USE_SKINNING
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
#endif`,qu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yu=`#ifdef USE_SKINNING
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
#endif`,Zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ku=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ju=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$u=`#ifdef USE_TRANSMISSION
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
#endif`,Qu=`#ifdef USE_TRANSMISSION
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
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rd=`uniform sampler2D t2D;
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
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`#include <common>
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
}`,ud=`#if DEPTH_PACKING == 3200
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
}`,dd=`#define DISTANCE
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
}`,fd=`#define DISTANCE
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
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,md=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gd=`uniform float scale;
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
}`,_d=`uniform vec3 diffuse;
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
}`,vd=`#include <common>
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
}`,Md=`uniform vec3 diffuse;
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
}`,xd=`#define LAMBERT
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
}`,Sd=`#define LAMBERT
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
}`,yd=`#define MATCAP
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
}`,wd=`#define MATCAP
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
}`,Ed=`#define NORMAL
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
}`,Td=`#define NORMAL
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
}`,bd=`#define PHONG
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
}`,Ad=`#define PHONG
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
}`,Rd=`#define STANDARD
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
}`,Pd=`#define STANDARD
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
}`,Cd=`#define TOON
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
}`,Ld=`#define TOON
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
}`,Id=`uniform float size;
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
}`,Dd=`uniform vec3 diffuse;
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
}`,Ud=`#include <common>
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
}`,Nd=`uniform vec3 color;
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
}`,Od=`uniform float rotation;
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
}`,Fd=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:rh,alphahash_pars_fragment:oh,alphamap_fragment:ah,alphamap_pars_fragment:ch,alphatest_fragment:lh,alphatest_pars_fragment:hh,aomap_fragment:uh,aomap_pars_fragment:dh,batching_pars_vertex:fh,batching_vertex:ph,begin_vertex:mh,beginnormal_vertex:gh,bsdfs:_h,iridescence_fragment:vh,bumpmap_pars_fragment:Mh,clipping_planes_fragment:xh,clipping_planes_pars_fragment:Sh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:wh,color_fragment:Eh,color_pars_fragment:Th,color_pars_vertex:bh,color_vertex:Ah,common:Rh,cube_uv_reflection_fragment:Ph,defaultnormal_vertex:Ch,displacementmap_pars_vertex:Lh,displacementmap_vertex:Ih,emissivemap_fragment:Dh,emissivemap_pars_fragment:Uh,colorspace_fragment:Nh,colorspace_pars_fragment:Oh,envmap_fragment:Fh,envmap_common_pars_fragment:Bh,envmap_pars_fragment:Gh,envmap_pars_vertex:kh,envmap_physical_pars_fragment:$h,envmap_vertex:zh,fog_vertex:Vh,fog_pars_vertex:Hh,fog_fragment:Wh,fog_pars_fragment:Xh,gradientmap_pars_fragment:qh,lightmap_fragment:Yh,lightmap_pars_fragment:Zh,lights_lambert_fragment:Kh,lights_lambert_pars_fragment:Jh,lights_pars_begin:jh,lights_toon_fragment:Qh,lights_toon_pars_fragment:tu,lights_phong_fragment:eu,lights_phong_pars_fragment:nu,lights_physical_fragment:iu,lights_physical_pars_fragment:su,lights_fragment_begin:ru,lights_fragment_maps:ou,lights_fragment_end:au,logdepthbuf_fragment:cu,logdepthbuf_pars_fragment:lu,logdepthbuf_pars_vertex:hu,logdepthbuf_vertex:uu,map_fragment:du,map_pars_fragment:fu,map_particle_fragment:pu,map_particle_pars_fragment:mu,metalnessmap_fragment:gu,metalnessmap_pars_fragment:_u,morphcolor_vertex:vu,morphnormal_vertex:Mu,morphtarget_pars_vertex:xu,morphtarget_vertex:Su,normal_fragment_begin:yu,normal_fragment_maps:wu,normal_pars_fragment:Eu,normal_pars_vertex:Tu,normal_vertex:bu,normalmap_pars_fragment:Au,clearcoat_normal_fragment_begin:Ru,clearcoat_normal_fragment_maps:Pu,clearcoat_pars_fragment:Cu,iridescence_pars_fragment:Lu,opaque_fragment:Iu,packing:Du,premultiplied_alpha_fragment:Uu,project_vertex:Nu,dithering_fragment:Ou,dithering_pars_fragment:Fu,roughnessmap_fragment:Bu,roughnessmap_pars_fragment:Gu,shadowmap_pars_fragment:ku,shadowmap_pars_vertex:zu,shadowmap_vertex:Vu,shadowmask_pars_fragment:Hu,skinbase_vertex:Wu,skinning_pars_vertex:Xu,skinning_vertex:qu,skinnormal_vertex:Yu,specularmap_fragment:Zu,specularmap_pars_fragment:Ku,tonemapping_fragment:Ju,tonemapping_pars_fragment:ju,transmission_fragment:$u,transmission_pars_fragment:Qu,uv_pars_fragment:td,uv_pars_vertex:ed,uv_vertex:nd,worldpos_vertex:id,background_vert:sd,background_frag:rd,backgroundCube_vert:od,backgroundCube_frag:ad,cube_vert:cd,cube_frag:ld,depth_vert:hd,depth_frag:ud,distanceRGBA_vert:dd,distanceRGBA_frag:fd,equirect_vert:pd,equirect_frag:md,linedashed_vert:gd,linedashed_frag:_d,meshbasic_vert:vd,meshbasic_frag:Md,meshlambert_vert:xd,meshlambert_frag:Sd,meshmatcap_vert:yd,meshmatcap_frag:wd,meshnormal_vert:Ed,meshnormal_frag:Td,meshphong_vert:bd,meshphong_frag:Ad,meshphysical_vert:Rd,meshphysical_frag:Pd,meshtoon_vert:Cd,meshtoon_frag:Ld,points_vert:Id,points_frag:Dd,shadow_vert:Ud,shadow_frag:Nd,sprite_vert:Od,sprite_frag:Fd},Et={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},on={basic:{uniforms:Ne([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ne([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new te(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ne([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ne([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ne([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new te(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ne([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ne([Et.points,Et.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ne([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ne([Et.common,Et.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ne([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ne([Et.sprite,Et.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ne([Et.common,Et.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ne([Et.lights,Et.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};on.physical={uniforms:Ne([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const ms={r:0,b:0,g:0};function Bd(s,t,e,n,i,r,a){const o=new te(0);let c=r===!0?0:1,h,u,d=null,l=0,f=null;function _(m,p){let E=!1,g=p.isScene===!0?p.background:null;g&&g.isTexture&&(g=(p.backgroundBlurriness>0?e:t).get(g)),g===null?v(o,c):g&&g.isColor&&(v(g,1),E=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||E)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ls)?(u===void 0&&(u=new P(new rt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ti(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=oe.getTransfer(g.colorSpace)!==le,(d!==g||l!==g.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,d=g,l=g.version,f=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(h===void 0&&(h=new P(new ee(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ti(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=g,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=oe.getTransfer(g.colorSpace)!==le,g.matrixAutoUpdate===!0&&g.updateMatrix(),h.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||l!==g.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=g,l=g.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function v(m,p){m.getRGB(ms,Qa(s)),n.buffers.color.setClear(ms.r,ms.g,ms.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:_}}function Gd(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let h=c,u=!1;function d(O,z,V,J,et){let X=!1;if(a){const it=v(J,V,z);h!==it&&(h=it,f(h.object)),X=p(O,J,V,et),X&&E(O,J,V,et)}else{const it=z.wireframe===!0;(h.geometry!==J.id||h.program!==V.id||h.wireframe!==it)&&(h.geometry=J.id,h.program=V.id,h.wireframe=it,X=!0)}et!==null&&e.update(et,s.ELEMENT_ARRAY_BUFFER),(X||u)&&(u=!1,G(O,z,V,J),et!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(et).buffer))}function l(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function v(O,z,V){const J=V.wireframe===!0;let et=o[O.id];et===void 0&&(et={},o[O.id]=et);let X=et[z.id];X===void 0&&(X={},et[z.id]=X);let it=X[J];return it===void 0&&(it=m(l()),X[J]=it),it}function m(O){const z=[],V=[],J=[];for(let et=0;et<i;et++)z[et]=0,V[et]=0,J[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:V,attributeDivisors:J,object:O,attributes:{},index:null}}function p(O,z,V,J){const et=h.attributes,X=z.attributes;let it=0;const q=V.getAttributes();for(const ut in q)if(q[ut].location>=0){const st=et[ut];let gt=X[ut];if(gt===void 0&&(ut==="instanceMatrix"&&O.instanceMatrix&&(gt=O.instanceMatrix),ut==="instanceColor"&&O.instanceColor&&(gt=O.instanceColor)),st===void 0||st.attribute!==gt||gt&&st.data!==gt.data)return!0;it++}return h.attributesNum!==it||h.index!==J}function E(O,z,V,J){const et={},X=z.attributes;let it=0;const q=V.getAttributes();for(const ut in q)if(q[ut].location>=0){let st=X[ut];st===void 0&&(ut==="instanceMatrix"&&O.instanceMatrix&&(st=O.instanceMatrix),ut==="instanceColor"&&O.instanceColor&&(st=O.instanceColor));const gt={};gt.attribute=st,st&&st.data&&(gt.data=st.data),et[ut]=gt,it++}h.attributes=et,h.attributesNum=it,h.index=J}function g(){const O=h.newAttributes;for(let z=0,V=O.length;z<V;z++)O[z]=0}function y(O){D(O,0)}function D(O,z){const V=h.newAttributes,J=h.enabledAttributes,et=h.attributeDivisors;V[O]=1,J[O]===0&&(s.enableVertexAttribArray(O),J[O]=1),et[O]!==z&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),et[O]=z)}function C(){const O=h.newAttributes,z=h.enabledAttributes;for(let V=0,J=z.length;V<J;V++)z[V]!==O[V]&&(s.disableVertexAttribArray(V),z[V]=0)}function L(O,z,V,J,et,X,it){it===!0?s.vertexAttribIPointer(O,z,V,et,X):s.vertexAttribPointer(O,z,V,J,et,X)}function G(O,z,V,J){if(n.isWebGL2===!1&&(O.isInstancedMesh||J.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const et=J.attributes,X=V.getAttributes(),it=z.defaultAttributeValues;for(const q in X){const ut=X[q];if(ut.location>=0){let Y=et[q];if(Y===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(Y=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(Y=O.instanceColor)),Y!==void 0){const st=Y.normalized,gt=Y.itemSize,Ct=e.get(Y);if(Ct===void 0)continue;const Mt=Ct.buffer,Ot=Ct.type,Ut=Ct.bytesPerElement,wt=n.isWebGL2===!0&&(Ot===s.INT||Ot===s.UNSIGNED_INT||Y.gpuType===Ua);if(Y.isInterleavedBufferAttribute){const _t=Y.data,N=_t.stride,dt=Y.offset;if(_t.isInstancedInterleavedBuffer){for(let $=0;$<ut.locationSize;$++)D(ut.location+$,_t.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let $=0;$<ut.locationSize;$++)y(ut.location+$);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let $=0;$<ut.locationSize;$++)L(ut.location+$,gt/ut.locationSize,Ot,st,N*Ut,(dt+gt/ut.locationSize*$)*Ut,wt)}else{if(Y.isInstancedBufferAttribute){for(let _t=0;_t<ut.locationSize;_t++)D(ut.location+_t,Y.meshPerAttribute);O.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let _t=0;_t<ut.locationSize;_t++)y(ut.location+_t);s.bindBuffer(s.ARRAY_BUFFER,Mt);for(let _t=0;_t<ut.locationSize;_t++)L(ut.location+_t,gt/ut.locationSize,Ot,st,gt*Ut,gt/ut.locationSize*_t*Ut,wt)}}else if(it!==void 0){const st=it[q];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(ut.location,st);break;case 3:s.vertexAttrib3fv(ut.location,st);break;case 4:s.vertexAttrib4fv(ut.location,st);break;default:s.vertexAttrib1fv(ut.location,st)}}}}C()}function w(){Z();for(const O in o){const z=o[O];for(const V in z){const J=z[V];for(const et in J)_(J[et].object),delete J[et];delete z[V]}delete o[O]}}function b(O){if(o[O.id]===void 0)return;const z=o[O.id];for(const V in z){const J=z[V];for(const et in J)_(J[et].object),delete J[et];delete z[V]}delete o[O.id]}function R(O){for(const z in o){const V=o[z];if(V[O.id]===void 0)continue;const J=V[O.id];for(const et in J)_(J[et].object),delete J[et];delete V[O.id]}}function Z(){ot(),u=!0,h!==c&&(h=c,f(h.object))}function ot(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:ot,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:y,disableUnusedAttributes:C}}function kd(s,t,e,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,d){s.drawArrays(r,u,d),e.update(d,r,1)}function c(u,d,l){if(l===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,u,d,l),e.update(d,r,l)}function h(u,d,l){if(l===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l;_++)this.render(u[_],d[_]);else{f.multiDrawArraysWEBGL(r,u,0,d,0,l);let _=0;for(let v=0;v<l;v++)_+=d[v];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function zd(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const h=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),E=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=l>0,y=a||t.has("OES_texture_float"),D=g&&y,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:l,maxTextureSize:f,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:E,vertexTextures:g,floatFragmentTextures:y,floatVertexTextures:D,maxSamples:C}}function Vd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new zn,o=new Qt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,l){const f=d.length!==0||l||n!==0||i;return i=l,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,l){e=u(d,l,0)},this.setState=function(d,l,f){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?u(null):h();else{const E=r?0:n,g=E*4;let y=p.clippingState||null;c.value=y,y=u(_,l,g,f);for(let D=0;D!==g;++D)y[D]=e[D];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,l,f,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const p=f+v*4,E=l.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let g=0,y=f;g!==v;++g,y+=4)a.copy(d[g]).applyMatrix4(E,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Hd(s){let t=new WeakMap;function e(a,o){return o===br?a.mapping=Si:o===Ar&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===br||o===Ar)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new eh(c.height/2);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ic extends tc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,Ko=[.125,.215,.35,.446,.526,.582],Wn=20,dr=new ic,Jo=new te;let fr=null,pr=0,mr=0;const Vn=(1+Math.sqrt(5))/2,pi=1/Vn,jo=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Vn,pi),new U(0,Vn,-pi),new U(pi,0,Vn),new U(-pi,0,Vn),new U(Vn,pi,0),new U(-Vn,pi,0)];class $o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){fr=this._renderer.getRenderTarget(),pr=this._renderer.getActiveCubeFace(),mr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fr,pr,mr),t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fr=this._renderer.getRenderTarget(),pr=this._renderer.getActiveCubeFace(),mr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Hi,format:tn,colorSpace:Mn,depthBuffer:!1},i=Qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wd(r)),this._blurMaterial=Xd(r,t,e)}return i}_compileMaterial(t){const e=new P(this._lodPlanes[0],t);this._renderer.compile(e,dr)}_sceneToCubeUV(t,e,n,i){const o=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,l=u.toneMapping;u.getClearColor(Jo),u.toneMapping=Cn,u.autoClear=!1;const f=new ge({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),_=new P(new rt,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Jo),v=!0);for(let p=0;p<6;p++){const E=p%3;E===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):E===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));const g=this._cubeSize;gs(i,E*g,p>2?g:0,g,g),u.setRenderTarget(i),v&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=l,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Si||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ta());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new P(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;gs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,dr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=jo[(i-1)%jo.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new P(this._lodPlanes[i],h),l=h.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wn-1),v=r/_,m=isFinite(r)?1+Math.floor(u*v):Wn;m>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const p=[];let E=0;for(let L=0;L<Wn;++L){const G=L/v,w=Math.exp(-G*G/2);p.push(w),L===0?E+=w:L<m&&(E+=2*w)}for(let L=0;L<p.length;L++)p[L]=p[L]/E;l.envMap.value=t.texture,l.samples.value=m,l.weights.value=p,l.latitudinal.value=a==="latitudinal",o&&(l.poleAxis.value=o);const{_lodMax:g}=this;l.dTheta.value=_,l.mipInt.value=g-n;const y=this._sizeLods[i],D=3*y*(i>g-gi?i-g+gi:0),C=4*(this._cubeSize-y);gs(e,D,C,3*y,2*y),c.setRenderTarget(e),c.render(d,dr)}}function Wd(s){const t=[],e=[],n=[];let i=s;const r=s-gi+1+Ko.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-gi?c=Ko[a-s+gi-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),u=-h,d=1+h,l=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,v=3,m=2,p=1,E=new Float32Array(v*_*f),g=new Float32Array(m*_*f),y=new Float32Array(p*_*f);for(let C=0;C<f;C++){const L=C%3*2/3-1,G=C>2?0:-1,w=[L,G,0,L+2/3,G,0,L+2/3,G+1,0,L,G,0,L+2/3,G+1,0,L,G+1,0];E.set(w,v*_*C),g.set(l,m*_*C);const b=[C,C,C,C,C,C];y.set(b,p*_*C)}const D=new De;D.setAttribute("position",new an(E,v)),D.setAttribute("uv",new an(g,m)),D.setAttribute("faceIndex",new an(y,p)),t.push(D),i>gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qo(s,t,e){const n=new Zn(s,t,e);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Xd(s,t,e){const n=new Float32Array(Wn),i=new U(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ta(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ea(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Gr(){return`

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
	`}function qd(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===br||c===Ar,u=c===Si||c===yi;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new $o(s)),d=h?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(h&&d&&d.height>0||u&&d&&i(d)){e===null&&(e=new $o(s));const l=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,l),o.addEventListener("dispose",r),l.texture}else return null}}}return o}function i(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Yd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zd(s,t,e,n){const i={},r=new WeakMap;function a(d){const l=d.target;l.index!==null&&t.remove(l.index);for(const _ in l.attributes)t.remove(l.attributes[_]);for(const _ in l.morphAttributes){const v=l.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}l.removeEventListener("dispose",a),delete i[l.id];const f=r.get(l);f&&(t.remove(f),r.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function o(d,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,e.memory.geometries++),l}function c(d){const l=d.attributes;for(const _ in l)t.update(l[_],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const v=f[_];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function h(d){const l=[],f=d.index,_=d.attributes.position;let v=0;if(f!==null){const E=f.array;v=f.version;for(let g=0,y=E.length;g<y;g+=3){const D=E[g+0],C=E[g+1],L=E[g+2];l.push(D,C,C,L,L,D)}}else if(_!==void 0){const E=_.array;v=_.version;for(let g=0,y=E.length/3-1;g<y;g+=3){const D=g+0,C=g+1,L=g+2;l.push(D,C,C,L,L,D)}}else return;const m=new(Wa(l)?$a:ja)(l,1);m.version=v;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const l=r.get(d);if(l){const f=d.index;f!==null&&l.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Kd(s,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,c;function h(f){o=f.type,c=f.bytesPerElement}function u(f,_){s.drawElements(r,_,o,f*c),e.update(_,r,1)}function d(f,_,v){if(v===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,_,o,f*c,v),e.update(_,r,v)}function l(f,_,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/c,_[p]);else{m.multiDrawElementsWEBGL(r,_,0,o,f,0,v);let p=0;for(let E=0;E<v;E++)p+=_[E];e.update(p,r,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=l}function Jd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function jd(s,t){return s[0]-t[0]}function $d(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Qd(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new he,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,d){const l=h.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==v){let z=function(){ot.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var f=z;m!==void 0&&m.texture.dispose();const g=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],G=u.morphAttributes.color||[];let w=0;g===!0&&(w=1),y===!0&&(w=2),D===!0&&(w=3);let b=u.attributes.position.count*w,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const Z=new Float32Array(b*R*4*v),ot=new Ya(Z,b,R,v);ot.type=Rn,ot.needsUpdate=!0;const O=w*4;for(let V=0;V<v;V++){const J=C[V],et=L[V],X=G[V],it=b*R*4*V;for(let q=0;q<J.count;q++){const ut=q*O;g===!0&&(a.fromBufferAttribute(J,q),Z[it+ut+0]=a.x,Z[it+ut+1]=a.y,Z[it+ut+2]=a.z,Z[it+ut+3]=0),y===!0&&(a.fromBufferAttribute(et,q),Z[it+ut+4]=a.x,Z[it+ut+5]=a.y,Z[it+ut+6]=a.z,Z[it+ut+7]=0),D===!0&&(a.fromBufferAttribute(X,q),Z[it+ut+8]=a.x,Z[it+ut+9]=a.y,Z[it+ut+10]=a.z,Z[it+ut+11]=X.itemSize===4?a.w:1)}}m={count:v,texture:ot,size:new yt(b,R)},r.set(u,m),u.addEventListener("dispose",z)}let p=0;for(let g=0;g<l.length;g++)p+=l[g];const E=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",E),d.getUniforms().setValue(s,"morphTargetInfluences",l),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=l===void 0?0:l.length;let v=n[u.id];if(v===void 0||v.length!==_){v=[];for(let y=0;y<_;y++)v[y]=[y,0];n[u.id]=v}for(let y=0;y<_;y++){const D=v[y];D[0]=y,D[1]=l[y]}v.sort($d);for(let y=0;y<8;y++)y<_&&v[y][1]?(o[y][0]=v[y][0],o[y][1]=v[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(jd);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let E=0;for(let y=0;y<8;y++){const D=o[y],C=D[0],L=D[1];C!==Number.MAX_SAFE_INTEGER&&L?(m&&u.getAttribute("morphTarget"+y)!==m[C]&&u.setAttribute("morphTarget"+y,m[C]),p&&u.getAttribute("morphNormal"+y)!==p[C]&&u.setAttribute("morphNormal"+y,p[C]),i[y]=L,E+=L):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),p&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const g=u.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",g),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function tf(s,t,e,n){let i=new WeakMap;function r(c){const h=n.render.frame,u=c.geometry,d=t.get(c,u);if(i.get(d)!==h&&(t.update(d),i.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return d}function a(){i=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class sc extends Ge{constructor(t,e,n,i,r,a,o,c,h,u){if(u=u!==void 0?u:qn,u!==qn&&u!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qn&&(n=An),n===void 0&&u===wi&&(n=Xn),super(null,i,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=c!==void 0?c:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rc=new Ge,oc=new sc(1,1);oc.compareFunction=Ha;const ac=new Ya,cc=new Bl,lc=new ec,na=[],ia=[],sa=new Float32Array(16),ra=new Float32Array(9),oa=new Float32Array(4);function Ri(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=na[i];if(r===void 0&&(r=new Float32Array(i),na[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ns(s,t){let e=ia[t];e===void 0&&(e=new Int32Array(t),ia[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ef(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function of(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;oa.set(n),s.uniformMatrix2fv(this.addr,!1,oa),ye(e,n)}}function af(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;ra.set(n),s.uniformMatrix3fv(this.addr,!1,ra),ye(e,n)}}function cf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;sa.set(n),s.uniformMatrix4fv(this.addr,!1,sa),ye(e,n)}}function lf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function _f(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?oc:rc;e.setTexture2D(t||r,i)}function vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cc,i)}function Mf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lc,i)}function xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ac,i)}function Sf(s){switch(s){case 5126:return ef;case 35664:return nf;case 35665:return sf;case 35666:return rf;case 35674:return of;case 35675:return af;case 35676:return cf;case 5124:case 35670:return lf;case 35667:case 35671:return hf;case 35668:case 35672:return uf;case 35669:case 35673:return df;case 5125:return ff;case 36294:return pf;case 36295:return mf;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return Mf;case 36289:case 36303:case 36311:case 36292:return xf}}function yf(s,t){s.uniform1fv(this.addr,t)}function wf(s,t){const e=Ri(t,this.size,2);s.uniform2fv(this.addr,e)}function Ef(s,t){const e=Ri(t,this.size,3);s.uniform3fv(this.addr,e)}function Tf(s,t){const e=Ri(t,this.size,4);s.uniform4fv(this.addr,e)}function bf(s,t){const e=Ri(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Af(s,t){const e=Ri(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Rf(s,t){const e=Ri(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Pf(s,t){s.uniform1iv(this.addr,t)}function Cf(s,t){s.uniform2iv(this.addr,t)}function Lf(s,t){s.uniform3iv(this.addr,t)}function If(s,t){s.uniform4iv(this.addr,t)}function Df(s,t){s.uniform1uiv(this.addr,t)}function Uf(s,t){s.uniform2uiv(this.addr,t)}function Nf(s,t){s.uniform3uiv(this.addr,t)}function Of(s,t){s.uniform4uiv(this.addr,t)}function Ff(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||rc,r[a])}function Bf(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||cc,r[a])}function Gf(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||lc,r[a])}function kf(s,t,e){const n=this.cache,i=t.length,r=Ns(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ac,r[a])}function zf(s){switch(s){case 5126:return yf;case 35664:return wf;case 35665:return Ef;case 35666:return Tf;case 35674:return bf;case 35675:return Af;case 35676:return Rf;case 5124:case 35670:return Pf;case 35667:case 35671:return Cf;case 35668:case 35672:return Lf;case 35669:case 35673:return If;case 5125:return Df;case 36294:return Uf;case 36295:return Nf;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return kf}}class Vf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sf(e.type)}}class Hf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zf(e.type)}}class Wf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const gr=/(\w+)(\])?(\[|\.)?/g;function aa(s,t){s.seq.push(t),s.map[t.id]=t}function Xf(s,t,e){const n=s.name,i=n.length;for(gr.lastIndex=0;;){const r=gr.exec(n),a=gr.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){aa(e,h===void 0?new Vf(o,s,t):new Hf(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Wf(o),aa(e,d)),e=d}}}class Ss{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Xf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ca(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const qf=37297;let Yf=0;function Zf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Kf(s){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(s);let n;switch(t===e?n="":t===Ts&&e===Es?n="LinearDisplayP3ToLinearSRGB":t===Es&&e===Ts&&(n="LinearSRGBToLinearDisplayP3"),s){case Mn:case Is:return[n,"LinearTransferOETF"];case Ae:case Or:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function la(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Zf(s.getShaderSource(t),a)}else return i}function Jf(s,t){const e=Kf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function jf(s,t){let e;switch(t){case Kc:e="Linear";break;case Jc:e="Reinhard";break;case jc:e="OptimizedCineon";break;case Ia:e="ACESFilmic";break;case Qc:e="AgX";break;case $c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $f(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_i).join(`
`)}function Qf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_i).join(`
`)}function tp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ep(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function _i(s){return s!==""}function ha(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ua(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lr(s){return s.replace(np,sp)}const ip=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sp(s,t){let e=jt[t];if(e===void 0){const n=ip.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Lr(e)}const rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function da(s){return s.replace(rp,op)}function op(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fa(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ap(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pa?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ca?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function cp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Si:case yi:t="ENVMAP_TYPE_CUBE";break;case Ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function hp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case La:t="ENVMAP_BLENDING_MULTIPLY";break;case Yc:t="ENVMAP_BLENDING_MIX";break;case Zc:t="ENVMAP_BLENDING_ADD";break}return t}function up(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ap(e),h=cp(e),u=lp(e),d=hp(e),l=up(e),f=e.isWebGL2?"":$f(e),_=Qf(e),v=tp(r),m=i.createProgram();let p,E,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_i).join(`
`),p.length>0&&(p+=`
`),E=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(_i).join(`
`),E.length>0&&(E+=`
`)):(p=[fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_i).join(`
`),E=[f,fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?jt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?jf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Jf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_i).join(`
`)),a=Lr(a),a=ha(a,e),a=ua(a,e),o=Lr(o),o=ha(o,e),o=ua(o,e),a=da(a),o=da(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,E=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+E);const y=g+p+a,D=g+E+o,C=ca(i,i.VERTEX_SHADER,y),L=ca(i,i.FRAGMENT_SHADER,D);i.attachShader(m,C),i.attachShader(m,L),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function G(Z){if(s.debug.checkShaderErrors){const ot=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(C).trim(),z=i.getShaderInfoLog(L).trim();let V=!0,J=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,C,L);else{const et=la(i,C,"vertex"),X=la(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+ot+`
`+et+`
`+X)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(O===""||z==="")&&(J=!1);J&&(Z.diagnostics={runnable:V,programLog:ot,vertexShader:{log:O,prefix:p},fragmentShader:{log:z,prefix:E}})}i.deleteShader(C),i.deleteShader(L),w=new Ss(i,m),b=ep(i,m)}let w;this.getUniforms=function(){return w===void 0&&G(this),w};let b;this.getAttributes=function(){return b===void 0&&G(this),b};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(m,qf)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=L,this}let fp=0;class pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mp(t),e.set(t,n)),n}}class mp{constructor(t){this.id=fp++,this.code=t,this.usedTimes=0}}function gp(s,t,e,n,i,r,a){const o=new Ka,c=new pp,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,l=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return w===0?"uv":`uv${w}`}function m(w,b,R,Z,ot){const O=Z.fog,z=ot.geometry,V=w.isMeshStandardMaterial?Z.environment:null,J=(w.isMeshStandardMaterial?e:t).get(w.envMap||V),et=J&&J.mapping===Ls?J.image.height:null,X=_[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const it=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,q=it!==void 0?it.length:0;let ut=0;z.morphAttributes.position!==void 0&&(ut=1),z.morphAttributes.normal!==void 0&&(ut=2),z.morphAttributes.color!==void 0&&(ut=3);let Y,st,gt,Ct;if(X){const ne=on[X];Y=ne.vertexShader,st=ne.fragmentShader}else Y=w.vertexShader,st=w.fragmentShader,c.update(w),gt=c.getVertexShaderID(w),Ct=c.getFragmentShaderID(w);const Mt=s.getRenderTarget(),Ot=ot.isInstancedMesh===!0,Ut=ot.isBatchedMesh===!0,wt=!!w.map,_t=!!w.matcap,N=!!J,dt=!!w.aoMap,$=!!w.lightMap,ft=!!w.bumpMap,Q=!!w.normalMap,It=!!w.displacementMap,pt=!!w.emissiveMap,S=!!w.metalnessMap,M=!!w.roughnessMap,F=w.anisotropy>0,tt=w.clearcoat>0,at=w.iridescence>0,nt=w.sheen>0,Dt=w.transmission>0,vt=F&&!!w.anisotropyMap,At=tt&&!!w.clearcoatMap,Ft=tt&&!!w.clearcoatNormalMap,Pt=tt&&!!w.clearcoatRoughnessMap,ct=at&&!!w.iridescenceMap,Jt=at&&!!w.iridescenceThicknessMap,Wt=nt&&!!w.sheenColorMap,kt=nt&&!!w.sheenRoughnessMap,Nt=!!w.specularMap,Rt=!!w.specularColorMap,Bt=!!w.specularIntensityMap,Zt=Dt&&!!w.transmissionMap,se=Dt&&!!w.thicknessMap,Ht=!!w.gradientMap,mt=!!w.alphaMap,x=w.alphaTest>0,B=!!w.alphaHash,K=!!w.extensions,bt=!!z.attributes.uv1,lt=!!z.attributes.uv2,xt=!!z.attributes.uv3;let Vt=Cn;return w.toneMapped&&(Mt===null||Mt.isXRRenderTarget===!0)&&(Vt=s.toneMapping),{isWebGL2:u,shaderID:X,shaderType:w.type,shaderName:w.name,vertexShader:Y,fragmentShader:st,defines:w.defines,customVertexShaderID:gt,customFragmentShaderID:Ct,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ut,instancing:Ot,instancingColor:Ot&&ot.instanceColor!==null,supportsVertexTextures:l,outputColorSpace:Mt===null?s.outputColorSpace:Mt.isXRRenderTarget===!0?Mt.texture.colorSpace:Mn,map:wt,matcap:_t,envMap:N,envMapMode:N&&J.mapping,envMapCubeUVHeight:et,aoMap:dt,lightMap:$,bumpMap:ft,normalMap:Q,displacementMap:l&&It,emissiveMap:pt,normalMapObjectSpace:Q&&w.normalMapType===ul,normalMapTangentSpace:Q&&w.normalMapType===Va,metalnessMap:S,roughnessMap:M,anisotropy:F,anisotropyMap:vt,clearcoat:tt,clearcoatMap:At,clearcoatNormalMap:Ft,clearcoatRoughnessMap:Pt,iridescence:at,iridescenceMap:ct,iridescenceThicknessMap:Jt,sheen:nt,sheenColorMap:Wt,sheenRoughnessMap:kt,specularMap:Nt,specularColorMap:Rt,specularIntensityMap:Bt,transmission:Dt,transmissionMap:Zt,thicknessMap:se,gradientMap:Ht,opaque:w.transparent===!1&&w.blending===Mi,alphaMap:mt,alphaTest:x,alphaHash:B,combine:w.combine,mapUv:wt&&v(w.map.channel),aoMapUv:dt&&v(w.aoMap.channel),lightMapUv:$&&v(w.lightMap.channel),bumpMapUv:ft&&v(w.bumpMap.channel),normalMapUv:Q&&v(w.normalMap.channel),displacementMapUv:It&&v(w.displacementMap.channel),emissiveMapUv:pt&&v(w.emissiveMap.channel),metalnessMapUv:S&&v(w.metalnessMap.channel),roughnessMapUv:M&&v(w.roughnessMap.channel),anisotropyMapUv:vt&&v(w.anisotropyMap.channel),clearcoatMapUv:At&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:kt&&v(w.sheenRoughnessMap.channel),specularMapUv:Nt&&v(w.specularMap.channel),specularColorMapUv:Rt&&v(w.specularColorMap.channel),specularIntensityMapUv:Bt&&v(w.specularIntensityMap.channel),transmissionMapUv:Zt&&v(w.transmissionMap.channel),thicknessMapUv:se&&v(w.thicknessMap.channel),alphaMapUv:mt&&v(w.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Q||F),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:bt,vertexUv2s:lt,vertexUv3s:xt,pointsUvs:ot.isPoints===!0&&!!z.attributes.uv&&(wt||mt),fog:!!O,useFog:w.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ot.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:wt&&w.map.isVideoTexture===!0&&oe.getTransfer(w.map.colorSpace)===le,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ie,flipSided:w.side===Fe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:K&&w.extensions.derivatives===!0,extensionFragDepth:K&&w.extensions.fragDepth===!0,extensionDrawBuffers:K&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:K&&w.extensions.shaderTextureLOD===!0,extensionClipCullDistance:K&&w.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const R in w.defines)b.push(R),b.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(E(b,w),g(b,w),b.push(s.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function E(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function g(w,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),w.push(o.mask)}function y(w){const b=_[w.type];let R;if(b){const Z=on[b];R=jl.clone(Z.uniforms)}else R=w.uniforms;return R}function D(w,b){let R;for(let Z=0,ot=h.length;Z<ot;Z++){const O=h[Z];if(O.cacheKey===b){R=O,++R.usedTimes;break}}return R===void 0&&(R=new dp(s,b,w,r),h.push(R)),R}function C(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function L(w){c.remove(w)}function G(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:D,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:G}}function _p(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function vp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function pa(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ma(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,l,f,_,v,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:l,material:f,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=l,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=v,p.group=m),t++,p}function o(d,l,f,_,v,m){const p=a(d,l,f,_,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,l,f,_,v,m){const p=a(d,l,f,_,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(d,l){e.length>1&&e.sort(d||vp),n.length>1&&n.sort(l||pa),i.length>1&&i.sort(l||pa)}function u(){for(let d=t,l=s.length;d<l;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:h}}function Mp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new ma,s.set(n,[a])):i>=r.length?(a=new ma,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function xp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new te};break;case"SpotLight":e={position:new U,direction:new U,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function Sp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let yp=0;function wp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ep(s,t){const e=new xp,n=Sp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new U);const r=new U,a=new _e,o=new _e;function c(u,d){let l=0,f=0,_=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let v=0,m=0,p=0,E=0,g=0,y=0,D=0,C=0,L=0,G=0,w=0;u.sort(wp);const b=d===!0?Math.PI:1;for(let Z=0,ot=u.length;Z<ot;Z++){const O=u[Z],z=O.color,V=O.intensity,J=O.distance,et=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)l+=z.r*V*b,f+=z.g*V*b,_+=z.b*V*b;else if(O.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(O.sh.coefficients[X],V);w++}else if(O.isDirectionalLight){const X=e.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*b),O.castShadow){const it=O.shadow,q=n.get(O);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,i.directionalShadow[v]=q,i.directionalShadowMap[v]=et,i.directionalShadowMatrix[v]=O.shadow.matrix,y++}i.directional[v]=X,v++}else if(O.isSpotLight){const X=e.get(O);X.position.setFromMatrixPosition(O.matrixWorld),X.color.copy(z).multiplyScalar(V*b),X.distance=J,X.coneCos=Math.cos(O.angle),X.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),X.decay=O.decay,i.spot[p]=X;const it=O.shadow;if(O.map&&(i.spotLightMap[L]=O.map,L++,it.updateMatrices(O),O.castShadow&&G++),i.spotLightMatrix[p]=it.matrix,O.castShadow){const q=n.get(O);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,i.spotShadow[p]=q,i.spotShadowMap[p]=et,C++}p++}else if(O.isRectAreaLight){const X=e.get(O);X.color.copy(z).multiplyScalar(V),X.halfWidth.set(O.width*.5,0,0),X.halfHeight.set(0,O.height*.5,0),i.rectArea[E]=X,E++}else if(O.isPointLight){const X=e.get(O);if(X.color.copy(O.color).multiplyScalar(O.intensity*b),X.distance=O.distance,X.decay=O.decay,O.castShadow){const it=O.shadow,q=n.get(O);q.shadowBias=it.bias,q.shadowNormalBias=it.normalBias,q.shadowRadius=it.radius,q.shadowMapSize=it.mapSize,q.shadowCameraNear=it.camera.near,q.shadowCameraFar=it.camera.far,i.pointShadow[m]=q,i.pointShadowMap[m]=et,i.pointShadowMatrix[m]=O.shadow.matrix,D++}i.point[m]=X,m++}else if(O.isHemisphereLight){const X=e.get(O);X.skyColor.copy(O.color).multiplyScalar(V*b),X.groundColor.copy(O.groundColor).multiplyScalar(V*b),i.hemi[g]=X,g++}}E>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=f,i.ambient[2]=_;const R=i.hash;(R.directionalLength!==v||R.pointLength!==m||R.spotLength!==p||R.rectAreaLength!==E||R.hemiLength!==g||R.numDirectionalShadows!==y||R.numPointShadows!==D||R.numSpotShadows!==C||R.numSpotMaps!==L||R.numLightProbes!==w)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=E,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=C+L-G,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=G,i.numLightProbes=w,R.directionalLength=v,R.pointLength=m,R.spotLength=p,R.rectAreaLength=E,R.hemiLength=g,R.numDirectionalShadows=y,R.numPointShadows=D,R.numSpotShadows=C,R.numSpotMaps=L,R.numLightProbes=w,i.version=yp++)}function h(u,d){let l=0,f=0,_=0,v=0,m=0;const p=d.matrixWorldInverse;for(let E=0,g=u.length;E<g;E++){const y=u[E];if(y.isDirectionalLight){const D=i.directional[l];D.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),l++}else if(y.isSpotLight){const D=i.spot[_];D.position.setFromMatrixPosition(y.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const D=i.rectArea[v];D.position.setFromMatrixPosition(y.matrixWorld),D.position.applyMatrix4(p),o.identity(),a.copy(y.matrixWorld),a.premultiply(p),o.extractRotation(a),D.halfWidth.set(y.width*.5,0,0),D.halfHeight.set(0,y.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const D=i.point[f];D.position.setFromMatrixPosition(y.matrixWorld),D.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const D=i.hemi[m];D.direction.setFromMatrixPosition(y.matrixWorld),D.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:i}}function ga(s,t){const e=new Ep(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){e.setup(n,d)}function h(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function Tp(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new ga(s,t),e.set(r,[c])):a>=o.length?(c=new ga(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class bp extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ll,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ap extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pp=`uniform sampler2D shadow_pass;
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
}`;function Cp(s,t,e){let n=new Br;const i=new yt,r=new yt,a=new he,o=new bp({depthPacking:hl}),c=new Ap,h={},u=e.maxTextureSize,d={[In]:Fe,[Fe]:In,[Ie]:Ie},l=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:Rp,fragmentShader:Pp}),f=l.clone();f.defines.HORIZONTAL_PASS=1;const _=new De;_.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new P(_,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let p=this.type;this.render=function(C,L,G){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=s.getRenderTarget(),b=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Pn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ot=p!==gn&&this.type===gn,O=p===gn&&this.type!==gn;for(let z=0,V=C.length;z<V;z++){const J=C[z],et=J.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;i.copy(et.mapSize);const X=et.getFrameExtents();if(i.multiply(X),r.copy(et.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/X.x),i.x=r.x*X.x,et.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/X.y),i.y=r.y*X.y,et.mapSize.y=r.y)),et.map===null||ot===!0||O===!0){const q=this.type!==gn?{minFilter:Oe,magFilter:Oe}:{};et.map!==null&&et.map.dispose(),et.map=new Zn(i.x,i.y,q),et.map.texture.name=J.name+".shadowMap",et.camera.updateProjectionMatrix()}s.setRenderTarget(et.map),s.clear();const it=et.getViewportCount();for(let q=0;q<it;q++){const ut=et.getViewport(q);a.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),Z.viewport(a),et.updateMatrices(J,q),n=et.getFrustum(),y(L,G,et.camera,J,this.type)}et.isPointLightShadow!==!0&&this.type===gn&&E(et,G),et.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,b,R)};function E(C,L){const G=t.update(v);l.defines.VSM_SAMPLES!==C.blurSamples&&(l.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,l.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(i.x,i.y)),l.uniforms.shadow_pass.value=C.map.texture,l.uniforms.resolution.value=C.mapSize,l.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(L,null,G,l,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(L,null,G,f,v,null)}function g(C,L,G,w){let b=null;const R=G.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)b=R;else if(b=G.isPointLight===!0?c:o,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Z=b.uuid,ot=L.uuid;let O=h[Z];O===void 0&&(O={},h[Z]=O);let z=O[ot];z===void 0&&(z=b.clone(),O[ot]=z,L.addEventListener("dispose",D)),b=z}if(b.visible=L.visible,b.wireframe=L.wireframe,w===gn?b.side=L.shadowSide!==null?L.shadowSide:L.side:b.side=L.shadowSide!==null?L.shadowSide:d[L.side],b.alphaMap=L.alphaMap,b.alphaTest=L.alphaTest,b.map=L.map,b.clipShadows=L.clipShadows,b.clippingPlanes=L.clippingPlanes,b.clipIntersection=L.clipIntersection,b.displacementMap=L.displacementMap,b.displacementScale=L.displacementScale,b.displacementBias=L.displacementBias,b.wireframeLinewidth=L.wireframeLinewidth,b.linewidth=L.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const Z=s.properties.get(b);Z.light=G}return b}function y(C,L,G,w,b){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===gn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,C.matrixWorld);const ot=t.update(C),O=C.material;if(Array.isArray(O)){const z=ot.groups;for(let V=0,J=z.length;V<J;V++){const et=z[V],X=O[et.materialIndex];if(X&&X.visible){const it=g(C,X,w,b);C.onBeforeShadow(s,C,L,G,ot,it,et),s.renderBufferDirect(G,null,ot,it,C,et),C.onAfterShadow(s,C,L,G,ot,it,et)}}}else if(O.visible){const z=g(C,O,w,b);C.onBeforeShadow(s,C,L,G,ot,z,null),s.renderBufferDirect(G,null,ot,z,C,null),C.onAfterShadow(s,C,L,G,ot,z,null)}}const Z=C.children;for(let ot=0,O=Z.length;ot<O;ot++)y(Z[ot],L,G,w,b)}function D(C){C.target.removeEventListener("dispose",D);for(const G in h){const w=h[G],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}function Lp(s,t,e){const n=e.isWebGL2;function i(){let x=!1;const B=new he;let K=null;const bt=new he(0,0,0,0);return{setMask:function(lt){K!==lt&&!x&&(s.colorMask(lt,lt,lt,lt),K=lt)},setLocked:function(lt){x=lt},setClear:function(lt,xt,Vt,re,ne){ne===!0&&(lt*=re,xt*=re,Vt*=re),B.set(lt,xt,Vt,re),bt.equals(B)===!1&&(s.clearColor(lt,xt,Vt,re),bt.copy(B))},reset:function(){x=!1,K=null,bt.set(-1,0,0,0)}}}function r(){let x=!1,B=null,K=null,bt=null;return{setTest:function(lt){lt?Ut(s.DEPTH_TEST):wt(s.DEPTH_TEST)},setMask:function(lt){B!==lt&&!x&&(s.depthMask(lt),B=lt)},setFunc:function(lt){if(K!==lt){switch(lt){case kc:s.depthFunc(s.NEVER);break;case zc:s.depthFunc(s.ALWAYS);break;case Vc:s.depthFunc(s.LESS);break;case ys:s.depthFunc(s.LEQUAL);break;case Hc:s.depthFunc(s.EQUAL);break;case Wc:s.depthFunc(s.GEQUAL);break;case Xc:s.depthFunc(s.GREATER);break;case qc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=lt}},setLocked:function(lt){x=lt},setClear:function(lt){bt!==lt&&(s.clearDepth(lt),bt=lt)},reset:function(){x=!1,B=null,K=null,bt=null}}}function a(){let x=!1,B=null,K=null,bt=null,lt=null,xt=null,Vt=null,re=null,ne=null;return{setTest:function(qt){x||(qt?Ut(s.STENCIL_TEST):wt(s.STENCIL_TEST))},setMask:function(qt){B!==qt&&!x&&(s.stencilMask(qt),B=qt)},setFunc:function(qt,ue,we){(K!==qt||bt!==ue||lt!==we)&&(s.stencilFunc(qt,ue,we),K=qt,bt=ue,lt=we)},setOp:function(qt,ue,we){(xt!==qt||Vt!==ue||re!==we)&&(s.stencilOp(qt,ue,we),xt=qt,Vt=ue,re=we)},setLocked:function(qt){x=qt},setClear:function(qt){ne!==qt&&(s.clearStencil(qt),ne=qt)},reset:function(){x=!1,B=null,K=null,bt=null,lt=null,xt=null,Vt=null,re=null,ne=null}}}const o=new i,c=new r,h=new a,u=new WeakMap,d=new WeakMap;let l={},f={},_=new WeakMap,v=[],m=null,p=!1,E=null,g=null,y=null,D=null,C=null,L=null,G=null,w=new te(0,0,0),b=0,R=!1,Z=null,ot=null,O=null,z=null,V=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,X=0;const it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(it)[1]),et=X>=1):it.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),et=X>=2);let q=null,ut={};const Y=s.getParameter(s.SCISSOR_BOX),st=s.getParameter(s.VIEWPORT),gt=new he().fromArray(Y),Ct=new he().fromArray(st);function Mt(x,B,K,bt){const lt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(x,xt),s.texParameteri(x,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(x,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Vt=0;Vt<K;Vt++)n&&(x===s.TEXTURE_3D||x===s.TEXTURE_2D_ARRAY)?s.texImage3D(B,0,s.RGBA,1,1,bt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(B+Vt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return xt}const Ot={};Ot[s.TEXTURE_2D]=Mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ot[s.TEXTURE_CUBE_MAP]=Mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ot[s.TEXTURE_2D_ARRAY]=Mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ot[s.TEXTURE_3D]=Mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Ut(s.DEPTH_TEST),c.setFunc(ys),pt(!1),S(Jr),Ut(s.CULL_FACE),Q(Pn);function Ut(x){l[x]!==!0&&(s.enable(x),l[x]=!0)}function wt(x){l[x]!==!1&&(s.disable(x),l[x]=!1)}function _t(x,B){return f[x]!==B?(s.bindFramebuffer(x,B),f[x]=B,n&&(x===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=B),x===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=B)),!0):!1}function N(x,B){let K=v,bt=!1;if(x)if(K=_.get(B),K===void 0&&(K=[],_.set(B,K)),x.isWebGLMultipleRenderTargets){const lt=x.texture;if(K.length!==lt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,Vt=lt.length;xt<Vt;xt++)K[xt]=s.COLOR_ATTACHMENT0+xt;K.length=lt.length,bt=!0}}else K[0]!==s.COLOR_ATTACHMENT0&&(K[0]=s.COLOR_ATTACHMENT0,bt=!0);else K[0]!==s.BACK&&(K[0]=s.BACK,bt=!0);bt&&(e.isWebGL2?s.drawBuffers(K):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(K))}function dt(x){return m!==x?(s.useProgram(x),m=x,!0):!1}const $={[Hn]:s.FUNC_ADD,[Tc]:s.FUNC_SUBTRACT,[bc]:s.FUNC_REVERSE_SUBTRACT};if(n)$[to]=s.MIN,$[eo]=s.MAX;else{const x=t.get("EXT_blend_minmax");x!==null&&($[to]=x.MIN_EXT,$[eo]=x.MAX_EXT)}const ft={[Ac]:s.ZERO,[Rc]:s.ONE,[Pc]:s.SRC_COLOR,[Er]:s.SRC_ALPHA,[Nc]:s.SRC_ALPHA_SATURATE,[Dc]:s.DST_COLOR,[Lc]:s.DST_ALPHA,[Cc]:s.ONE_MINUS_SRC_COLOR,[Tr]:s.ONE_MINUS_SRC_ALPHA,[Uc]:s.ONE_MINUS_DST_COLOR,[Ic]:s.ONE_MINUS_DST_ALPHA,[Oc]:s.CONSTANT_COLOR,[Fc]:s.ONE_MINUS_CONSTANT_COLOR,[Bc]:s.CONSTANT_ALPHA,[Gc]:s.ONE_MINUS_CONSTANT_ALPHA};function Q(x,B,K,bt,lt,xt,Vt,re,ne,qt){if(x===Pn){p===!0&&(wt(s.BLEND),p=!1);return}if(p===!1&&(Ut(s.BLEND),p=!0),x!==Ec){if(x!==E||qt!==R){if((g!==Hn||C!==Hn)&&(s.blendEquation(s.FUNC_ADD),g=Hn,C=Hn),qt)switch(x){case Mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jr:s.blendFunc(s.ONE,s.ONE);break;case $r:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $r:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}y=null,D=null,L=null,G=null,w.set(0,0,0),b=0,E=x,R=qt}return}lt=lt||B,xt=xt||K,Vt=Vt||bt,(B!==g||lt!==C)&&(s.blendEquationSeparate($[B],$[lt]),g=B,C=lt),(K!==y||bt!==D||xt!==L||Vt!==G)&&(s.blendFuncSeparate(ft[K],ft[bt],ft[xt],ft[Vt]),y=K,D=bt,L=xt,G=Vt),(re.equals(w)===!1||ne!==b)&&(s.blendColor(re.r,re.g,re.b,ne),w.copy(re),b=ne),E=x,R=!1}function It(x,B){x.side===Ie?wt(s.CULL_FACE):Ut(s.CULL_FACE);let K=x.side===Fe;B&&(K=!K),pt(K),x.blending===Mi&&x.transparent===!1?Q(Pn):Q(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),c.setFunc(x.depthFunc),c.setTest(x.depthTest),c.setMask(x.depthWrite),o.setMask(x.colorWrite);const bt=x.stencilWrite;h.setTest(bt),bt&&(h.setMask(x.stencilWriteMask),h.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),h.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),F(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?Ut(s.SAMPLE_ALPHA_TO_COVERAGE):wt(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(x){Z!==x&&(x?s.frontFace(s.CW):s.frontFace(s.CCW),Z=x)}function S(x){x!==yc?(Ut(s.CULL_FACE),x!==ot&&(x===Jr?s.cullFace(s.BACK):x===wc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):wt(s.CULL_FACE),ot=x}function M(x){x!==O&&(et&&s.lineWidth(x),O=x)}function F(x,B,K){x?(Ut(s.POLYGON_OFFSET_FILL),(z!==B||V!==K)&&(s.polygonOffset(B,K),z=B,V=K)):wt(s.POLYGON_OFFSET_FILL)}function tt(x){x?Ut(s.SCISSOR_TEST):wt(s.SCISSOR_TEST)}function at(x){x===void 0&&(x=s.TEXTURE0+J-1),q!==x&&(s.activeTexture(x),q=x)}function nt(x,B,K){K===void 0&&(q===null?K=s.TEXTURE0+J-1:K=q);let bt=ut[K];bt===void 0&&(bt={type:void 0,texture:void 0},ut[K]=bt),(bt.type!==x||bt.texture!==B)&&(q!==K&&(s.activeTexture(K),q=K),s.bindTexture(x,B||Ot[x]),bt.type=x,bt.texture=B)}function Dt(){const x=ut[q];x!==void 0&&x.type!==void 0&&(s.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function vt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function At(){try{s.compressedTexImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ft(){try{s.texSubImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Pt(){try{s.texSubImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Jt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Wt(){try{s.texStorage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function kt(){try{s.texStorage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Nt(){try{s.texImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Bt(x){gt.equals(x)===!1&&(s.scissor(x.x,x.y,x.z,x.w),gt.copy(x))}function Zt(x){Ct.equals(x)===!1&&(s.viewport(x.x,x.y,x.z,x.w),Ct.copy(x))}function se(x,B){let K=d.get(B);K===void 0&&(K=new WeakMap,d.set(B,K));let bt=K.get(x);bt===void 0&&(bt=s.getUniformBlockIndex(B,x.name),K.set(x,bt))}function Ht(x,B){const bt=d.get(B).get(x);u.get(B)!==bt&&(s.uniformBlockBinding(B,bt,x.__bindingPointIndex),u.set(B,bt))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},q=null,ut={},f={},_=new WeakMap,v=[],m=null,p=!1,E=null,g=null,y=null,D=null,C=null,L=null,G=null,w=new te(0,0,0),b=0,R=!1,Z=null,ot=null,O=null,z=null,V=null,gt.set(0,0,s.canvas.width,s.canvas.height),Ct.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:Ut,disable:wt,bindFramebuffer:_t,drawBuffers:N,useProgram:dt,setBlending:Q,setMaterial:It,setFlipSided:pt,setCullFace:S,setLineWidth:M,setPolygonOffset:F,setScissorTest:tt,activeTexture:at,bindTexture:nt,unbindTexture:Dt,compressedTexImage2D:vt,compressedTexImage3D:At,texImage2D:Nt,texImage3D:Rt,updateUBOMapping:se,uniformBlockBinding:Ht,texStorage2D:Wt,texStorage3D:kt,texSubImage2D:Ft,texSubImage3D:Pt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Jt,scissor:Bt,viewport:Zt,reset:mt}}function Ip(s,t,e,n,i,r,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const l=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,M){return f?new OffscreenCanvas(S,M):Rs("canvas")}function v(S,M,F,tt){let at=1;if((S.width>tt||S.height>tt)&&(at=tt/Math.max(S.width,S.height)),at<1||M===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const nt=M?As:Math.floor,Dt=nt(at*S.width),vt=nt(at*S.height);d===void 0&&(d=_(Dt,vt));const At=F?_(Dt,vt):d;return At.width=Dt,At.height=vt,At.getContext("2d").drawImage(S,0,0,Dt,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+Dt+"x"+vt+")."),At}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function m(S){return Cr(S.width)&&Cr(S.height)}function p(S){return o?!1:S.wrapS!==Qe||S.wrapT!==Qe||S.minFilter!==Oe&&S.minFilter!==qe}function E(S,M){return S.generateMipmaps&&M&&S.minFilter!==Oe&&S.minFilter!==qe}function g(S){s.generateMipmap(S)}function y(S,M,F,tt,at=!1){if(o===!1)return M;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let nt=M;if(M===s.RED&&(F===s.FLOAT&&(nt=s.R32F),F===s.HALF_FLOAT&&(nt=s.R16F),F===s.UNSIGNED_BYTE&&(nt=s.R8)),M===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(nt=s.R8UI),F===s.UNSIGNED_SHORT&&(nt=s.R16UI),F===s.UNSIGNED_INT&&(nt=s.R32UI),F===s.BYTE&&(nt=s.R8I),F===s.SHORT&&(nt=s.R16I),F===s.INT&&(nt=s.R32I)),M===s.RG&&(F===s.FLOAT&&(nt=s.RG32F),F===s.HALF_FLOAT&&(nt=s.RG16F),F===s.UNSIGNED_BYTE&&(nt=s.RG8)),M===s.RGBA){const Dt=at?ws:oe.getTransfer(tt);F===s.FLOAT&&(nt=s.RGBA32F),F===s.HALF_FLOAT&&(nt=s.RGBA16F),F===s.UNSIGNED_BYTE&&(nt=Dt===le?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(nt=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(nt=s.RGB5_A1)}return(nt===s.R16F||nt===s.R32F||nt===s.RG16F||nt===s.RG32F||nt===s.RGBA16F||nt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function D(S,M,F){return E(S,F)===!0||S.isFramebufferTexture&&S.minFilter!==Oe&&S.minFilter!==qe?Math.log2(Math.max(M.width,M.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?M.mipmaps.length:1}function C(S){return S===Oe||S===no||S===Hs?s.NEAREST:s.LINEAR}function L(S){const M=S.target;M.removeEventListener("dispose",L),w(M),M.isVideoTexture&&u.delete(M)}function G(S){const M=S.target;M.removeEventListener("dispose",G),R(M)}function w(S){const M=n.get(S);if(M.__webglInit===void 0)return;const F=S.source,tt=l.get(F);if(tt){const at=tt[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&b(S),Object.keys(tt).length===0&&l.delete(F)}n.remove(S)}function b(S){const M=n.get(S);s.deleteTexture(M.__webglTexture);const F=S.source,tt=l.get(F);delete tt[M.__cacheKey],a.memory.textures--}function R(S){const M=S.texture,F=n.get(S),tt=n.get(M);if(tt.__webglTexture!==void 0&&(s.deleteTexture(tt.__webglTexture),a.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(F.__webglFramebuffer[at]))for(let nt=0;nt<F.__webglFramebuffer[at].length;nt++)s.deleteFramebuffer(F.__webglFramebuffer[at][nt]);else s.deleteFramebuffer(F.__webglFramebuffer[at]);F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer[at])}else{if(Array.isArray(F.__webglFramebuffer))for(let at=0;at<F.__webglFramebuffer.length;at++)s.deleteFramebuffer(F.__webglFramebuffer[at]);else s.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&s.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&s.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let at=0;at<F.__webglColorRenderbuffer.length;at++)F.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer(F.__webglColorRenderbuffer[at]);F.__webglDepthRenderbuffer&&s.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let at=0,nt=M.length;at<nt;at++){const Dt=n.get(M[at]);Dt.__webglTexture&&(s.deleteTexture(Dt.__webglTexture),a.memory.textures--),n.remove(M[at])}n.remove(M),n.remove(S)}let Z=0;function ot(){Z=0}function O(){const S=Z;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),Z+=1,S}function z(S){const M=[];return M.push(S.wrapS),M.push(S.wrapT),M.push(S.wrapR||0),M.push(S.magFilter),M.push(S.minFilter),M.push(S.anisotropy),M.push(S.internalFormat),M.push(S.format),M.push(S.type),M.push(S.generateMipmaps),M.push(S.premultiplyAlpha),M.push(S.flipY),M.push(S.unpackAlignment),M.push(S.colorSpace),M.join()}function V(S,M){const F=n.get(S);if(S.isVideoTexture&&It(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const tt=S.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(F,S,M);return}}e.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+M)}function J(S,M){const F=n.get(S);if(S.version>0&&F.__version!==S.version){gt(F,S,M);return}e.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+M)}function et(S,M){const F=n.get(S);if(S.version>0&&F.__version!==S.version){gt(F,S,M);return}e.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+M)}function X(S,M){const F=n.get(S);if(S.version>0&&F.__version!==S.version){Ct(F,S,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+M)}const it={[en]:s.REPEAT,[Qe]:s.CLAMP_TO_EDGE,[Rr]:s.MIRRORED_REPEAT},q={[Oe]:s.NEAREST,[no]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[qe]:s.LINEAR,[tl]:s.LINEAR_MIPMAP_NEAREST,[Vi]:s.LINEAR_MIPMAP_LINEAR},ut={[dl]:s.NEVER,[vl]:s.ALWAYS,[fl]:s.LESS,[Ha]:s.LEQUAL,[pl]:s.EQUAL,[_l]:s.GEQUAL,[ml]:s.GREATER,[gl]:s.NOTEQUAL};function Y(S,M,F){if(F?(s.texParameteri(S,s.TEXTURE_WRAP_S,it[M.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,it[M.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,it[M.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,q[M.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,q[M.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(M.wrapS!==Qe||M.wrapT!==Qe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,C(M.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,C(M.minFilter)),M.minFilter!==Oe&&M.minFilter!==qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,ut[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(M.magFilter===Oe||M.minFilter!==Hs&&M.minFilter!==Vi||M.type===Rn&&t.has("OES_texture_float_linear")===!1||o===!1&&M.type===Hi&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(s.texParameterf(S,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function st(S,M){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,M.addEventListener("dispose",L));const tt=M.source;let at=l.get(tt);at===void 0&&(at={},l.set(tt,at));const nt=z(M);if(nt!==S.__cacheKey){at[nt]===void 0&&(at[nt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,F=!0),at[nt].usedTimes++;const Dt=at[S.__cacheKey];Dt!==void 0&&(at[S.__cacheKey].usedTimes--,Dt.usedTimes===0&&b(M)),S.__cacheKey=nt,S.__webglTexture=at[nt].texture}return F}function gt(S,M,F){let tt=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(tt=s.TEXTURE_3D);const at=st(S,M),nt=M.source;e.bindTexture(tt,S.__webglTexture,s.TEXTURE0+F);const Dt=n.get(nt);if(nt.version!==Dt.__version||at===!0){e.activeTexture(s.TEXTURE0+F);const vt=oe.getPrimaries(oe.workingColorSpace),At=M.colorSpace===Ye?null:oe.getPrimaries(M.colorSpace),Ft=M.colorSpace===Ye||vt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Pt=p(M)&&m(M.image)===!1;let ct=v(M.image,Pt,!1,i.maxTextureSize);ct=pt(M,ct);const Jt=m(ct)||o,Wt=r.convert(M.format,M.colorSpace);let kt=r.convert(M.type),Nt=y(M.internalFormat,Wt,kt,M.colorSpace,M.isVideoTexture);Y(tt,M,Jt);let Rt;const Bt=M.mipmaps,Zt=o&&M.isVideoTexture!==!0&&Nt!==ka,se=Dt.__version===void 0||at===!0,Ht=D(M,ct,Jt);if(M.isDepthTexture)Nt=s.DEPTH_COMPONENT,o?M.type===Rn?Nt=s.DEPTH_COMPONENT32F:M.type===An?Nt=s.DEPTH_COMPONENT24:M.type===Xn?Nt=s.DEPTH24_STENCIL8:Nt=s.DEPTH_COMPONENT16:M.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===qn&&Nt===s.DEPTH_COMPONENT&&M.type!==Nr&&M.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=An,kt=r.convert(M.type)),M.format===wi&&Nt===s.DEPTH_COMPONENT&&(Nt=s.DEPTH_STENCIL,M.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Xn,kt=r.convert(M.type))),se&&(Zt?e.texStorage2D(s.TEXTURE_2D,1,Nt,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Nt,ct.width,ct.height,0,Wt,kt,null));else if(M.isDataTexture)if(Bt.length>0&&Jt){Zt&&se&&e.texStorage2D(s.TEXTURE_2D,Ht,Nt,Bt[0].width,Bt[0].height);for(let mt=0,x=Bt.length;mt<x;mt++)Rt=Bt[mt],Zt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,Wt,kt,Rt.data):e.texImage2D(s.TEXTURE_2D,mt,Nt,Rt.width,Rt.height,0,Wt,kt,Rt.data);M.generateMipmaps=!1}else Zt?(se&&e.texStorage2D(s.TEXTURE_2D,Ht,Nt,ct.width,ct.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,Wt,kt,ct.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,ct.width,ct.height,0,Wt,kt,ct.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Zt&&se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Nt,Bt[0].width,Bt[0].height,ct.depth);for(let mt=0,x=Bt.length;mt<x;mt++)Rt=Bt[mt],M.format!==tn?Wt!==null?Zt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,Rt.width,Rt.height,ct.depth,Wt,Rt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,mt,Nt,Rt.width,Rt.height,ct.depth,0,Rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,mt,0,0,0,Rt.width,Rt.height,ct.depth,Wt,kt,Rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,mt,Nt,Rt.width,Rt.height,ct.depth,0,Wt,kt,Rt.data)}else{Zt&&se&&e.texStorage2D(s.TEXTURE_2D,Ht,Nt,Bt[0].width,Bt[0].height);for(let mt=0,x=Bt.length;mt<x;mt++)Rt=Bt[mt],M.format!==tn?Wt!==null?Zt?e.compressedTexSubImage2D(s.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,Wt,Rt.data):e.compressedTexImage2D(s.TEXTURE_2D,mt,Nt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Rt.width,Rt.height,Wt,kt,Rt.data):e.texImage2D(s.TEXTURE_2D,mt,Nt,Rt.width,Rt.height,0,Wt,kt,Rt.data)}else if(M.isDataArrayTexture)Zt?(se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ht,Nt,ct.width,ct.height,ct.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Wt,kt,ct.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,ct.width,ct.height,ct.depth,0,Wt,kt,ct.data);else if(M.isData3DTexture)Zt?(se&&e.texStorage3D(s.TEXTURE_3D,Ht,Nt,ct.width,ct.height,ct.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Wt,kt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,ct.width,ct.height,ct.depth,0,Wt,kt,ct.data);else if(M.isFramebufferTexture){if(se)if(Zt)e.texStorage2D(s.TEXTURE_2D,Ht,Nt,ct.width,ct.height);else{let mt=ct.width,x=ct.height;for(let B=0;B<Ht;B++)e.texImage2D(s.TEXTURE_2D,B,Nt,mt,x,0,Wt,kt,null),mt>>=1,x>>=1}}else if(Bt.length>0&&Jt){Zt&&se&&e.texStorage2D(s.TEXTURE_2D,Ht,Nt,Bt[0].width,Bt[0].height);for(let mt=0,x=Bt.length;mt<x;mt++)Rt=Bt[mt],Zt?e.texSubImage2D(s.TEXTURE_2D,mt,0,0,Wt,kt,Rt):e.texImage2D(s.TEXTURE_2D,mt,Nt,Wt,kt,Rt);M.generateMipmaps=!1}else Zt?(se&&e.texStorage2D(s.TEXTURE_2D,Ht,Nt,ct.width,ct.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Wt,kt,ct)):e.texImage2D(s.TEXTURE_2D,0,Nt,Wt,kt,ct);E(M,Jt)&&g(tt),Dt.__version=nt.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function Ct(S,M,F){if(M.image.length!==6)return;const tt=st(S,M),at=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+F);const nt=n.get(at);if(at.version!==nt.__version||tt===!0){e.activeTexture(s.TEXTURE0+F);const Dt=oe.getPrimaries(oe.workingColorSpace),vt=M.colorSpace===Ye?null:oe.getPrimaries(M.colorSpace),At=M.colorSpace===Ye||Dt===vt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ft=M.isCompressedTexture||M.image[0].isCompressedTexture,Pt=M.image[0]&&M.image[0].isDataTexture,ct=[];for(let mt=0;mt<6;mt++)!Ft&&!Pt?ct[mt]=v(M.image[mt],!1,!0,i.maxCubemapSize):ct[mt]=Pt?M.image[mt].image:M.image[mt],ct[mt]=pt(M,ct[mt]);const Jt=ct[0],Wt=m(Jt)||o,kt=r.convert(M.format,M.colorSpace),Nt=r.convert(M.type),Rt=y(M.internalFormat,kt,Nt,M.colorSpace),Bt=o&&M.isVideoTexture!==!0,Zt=nt.__version===void 0||tt===!0;let se=D(M,Jt,Wt);Y(s.TEXTURE_CUBE_MAP,M,Wt);let Ht;if(Ft){Bt&&Zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,se,Rt,Jt.width,Jt.height);for(let mt=0;mt<6;mt++){Ht=ct[mt].mipmaps;for(let x=0;x<Ht.length;x++){const B=Ht[x];M.format!==tn?kt!==null?Bt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,x,0,0,B.width,B.height,kt,B.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,x,Rt,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,x,0,0,B.width,B.height,kt,Nt,B.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,x,Rt,B.width,B.height,0,kt,Nt,B.data)}}}else{Ht=M.mipmaps,Bt&&Zt&&(Ht.length>0&&se++,e.texStorage2D(s.TEXTURE_CUBE_MAP,se,Rt,ct[0].width,ct[0].height));for(let mt=0;mt<6;mt++)if(Pt){Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,ct[mt].width,ct[mt].height,kt,Nt,ct[mt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Rt,ct[mt].width,ct[mt].height,0,kt,Nt,ct[mt].data);for(let x=0;x<Ht.length;x++){const K=Ht[x].image[mt].image;Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,x+1,0,0,K.width,K.height,kt,Nt,K.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,x+1,Rt,K.width,K.height,0,kt,Nt,K.data)}}else{Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,kt,Nt,ct[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Rt,kt,Nt,ct[mt]);for(let x=0;x<Ht.length;x++){const B=Ht[x];Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,x+1,0,0,kt,Nt,B.image[mt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+mt,x+1,Rt,kt,Nt,B.image[mt])}}}E(M,Wt)&&g(s.TEXTURE_CUBE_MAP),nt.__version=at.version,M.onUpdate&&M.onUpdate(M)}S.__version=M.version}function Mt(S,M,F,tt,at,nt){const Dt=r.convert(F.format,F.colorSpace),vt=r.convert(F.type),At=y(F.internalFormat,Dt,vt,F.colorSpace);if(!n.get(M).__hasExternalTextures){const Pt=Math.max(1,M.width>>nt),ct=Math.max(1,M.height>>nt);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,nt,At,Pt,ct,M.depth,0,Dt,vt,null):e.texImage2D(at,nt,At,Pt,ct,0,Dt,vt,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),Q(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,at,n.get(F).__webglTexture,0,ft(M)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,at,n.get(F).__webglTexture,nt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(S,M,F){if(s.bindRenderbuffer(s.RENDERBUFFER,S),M.depthBuffer&&!M.stencilBuffer){let tt=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(F||Q(M)){const at=M.depthTexture;at&&at.isDepthTexture&&(at.type===Rn?tt=s.DEPTH_COMPONENT32F:at.type===An&&(tt=s.DEPTH_COMPONENT24));const nt=ft(M);Q(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,tt,M.width,M.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,tt,M.width,M.height)}else s.renderbufferStorage(s.RENDERBUFFER,tt,M.width,M.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(M.depthBuffer&&M.stencilBuffer){const tt=ft(M);F&&Q(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,M.width,M.height):Q(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,s.DEPTH24_STENCIL8,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{const tt=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let at=0;at<tt.length;at++){const nt=tt[at],Dt=r.convert(nt.format,nt.colorSpace),vt=r.convert(nt.type),At=y(nt.internalFormat,Dt,vt,nt.colorSpace),Ft=ft(M);F&&Q(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,At,M.width,M.height):Q(M)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft,At,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,At,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(S,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const tt=n.get(M.depthTexture).__webglTexture,at=ft(M);if(M.depthTexture.format===qn)Q(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(M.depthTexture.format===wi)Q(M)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function wt(S){const M=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ut(M.__webglFramebuffer,S)}else if(F){M.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[tt]),M.__webglDepthbuffer[tt]=s.createRenderbuffer(),Ot(M.__webglDepthbuffer[tt],S,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Ot(M.__webglDepthbuffer,S,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(S,M,F){const tt=n.get(S);M!==void 0&&Mt(tt.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&wt(S)}function N(S){const M=S.texture,F=n.get(S),tt=n.get(M);S.addEventListener("dispose",G),S.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=M.version,a.memory.textures++);const at=S.isWebGLCubeRenderTarget===!0,nt=S.isWebGLMultipleRenderTargets===!0,Dt=m(S)||o;if(at){F.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[vt]=[];for(let At=0;At<M.mipmaps.length;At++)F.__webglFramebuffer[vt][At]=s.createFramebuffer()}else F.__webglFramebuffer[vt]=s.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let vt=0;vt<M.mipmaps.length;vt++)F.__webglFramebuffer[vt]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(nt)if(i.drawBuffers){const vt=S.texture;for(let At=0,Ft=vt.length;At<Ft;At++){const Pt=n.get(vt[At]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&S.samples>0&&Q(S)===!1){const vt=nt?M:[M];F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let At=0;At<vt.length;At++){const Ft=vt[At];F.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[At]);const Pt=r.convert(Ft.format,Ft.colorSpace),ct=r.convert(Ft.type),Jt=y(Ft.internalFormat,Pt,ct,Ft.colorSpace,S.isXRRenderTarget===!0),Wt=ft(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt,Jt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,F.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(F.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(at){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),Y(s.TEXTURE_CUBE_MAP,M,Dt);for(let vt=0;vt<6;vt++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let At=0;At<M.mipmaps.length;At++)Mt(F.__webglFramebuffer[vt][At],S,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,At);else Mt(F.__webglFramebuffer[vt],S,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);E(M,Dt)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const vt=S.texture;for(let At=0,Ft=vt.length;At<Ft;At++){const Pt=vt[At],ct=n.get(Pt);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),Y(s.TEXTURE_2D,Pt,Dt),Mt(F.__webglFramebuffer,S,Pt,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,0),E(Pt,Dt)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let vt=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(o?vt=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(vt,tt.__webglTexture),Y(vt,M,Dt),o&&M.mipmaps&&M.mipmaps.length>0)for(let At=0;At<M.mipmaps.length;At++)Mt(F.__webglFramebuffer[At],S,M,s.COLOR_ATTACHMENT0,vt,At);else Mt(F.__webglFramebuffer,S,M,s.COLOR_ATTACHMENT0,vt,0);E(M,Dt)&&g(vt),e.unbindTexture()}S.depthBuffer&&wt(S)}function dt(S){const M=m(S)||o,F=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let tt=0,at=F.length;tt<at;tt++){const nt=F[tt];if(E(nt,M)){const Dt=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,vt=n.get(nt).__webglTexture;e.bindTexture(Dt,vt),g(Dt),e.unbindTexture()}}}function $(S){if(o&&S.samples>0&&Q(S)===!1){const M=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],F=S.width,tt=S.height;let at=s.COLOR_BUFFER_BIT;const nt=[],Dt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,vt=n.get(S),At=S.isWebGLMultipleRenderTargets===!0;if(At)for(let Ft=0;Ft<M.length;Ft++)e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let Ft=0;Ft<M.length;Ft++){nt.push(s.COLOR_ATTACHMENT0+Ft),S.depthBuffer&&nt.push(Dt);const Pt=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;if(Pt===!1&&(S.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),At&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,vt.__webglColorRenderbuffer[Ft]),Pt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Dt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Dt])),At){const ct=n.get(M[Ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,F,tt,0,0,F,tt,at,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let Ft=0;Ft<M.length;Ft++){e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,vt.__webglColorRenderbuffer[Ft]);const Pt=n.get(M[Ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,vt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,Pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}}function ft(S){return Math.min(i.maxSamples,S.samples)}function Q(S){const M=n.get(S);return o&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function It(S){const M=a.render.frame;u.get(S)!==M&&(u.set(S,M),S.update())}function pt(S,M){const F=S.colorSpace,tt=S.format,at=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Pr||F!==Mn&&F!==Ye&&(oe.getTransfer(F)===le?o===!1?t.has("EXT_sRGB")===!0&&tt===tn?(S.format=Pr,S.minFilter=qe,S.generateMipmaps=!1):M=Xa.sRGBToLinear(M):(tt!==tn||at!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}this.allocateTextureUnit=O,this.resetTextureUnits=ot,this.setTexture2D=V,this.setTexture2DArray=J,this.setTexture3D=et,this.setTextureCube=X,this.rebindTextures=_t,this.setupRenderTarget=N,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Q}function Dp(s,t,e){const n=e.isWebGL2;function i(r,a=Ye){let o;const c=oe.getTransfer(a);if(r===Ln)return s.UNSIGNED_BYTE;if(r===Na)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Oa)return s.UNSIGNED_SHORT_5_5_5_1;if(r===el)return s.BYTE;if(r===nl)return s.SHORT;if(r===Nr)return s.UNSIGNED_SHORT;if(r===Ua)return s.INT;if(r===An)return s.UNSIGNED_INT;if(r===Rn)return s.FLOAT;if(r===Hi)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===il)return s.ALPHA;if(r===tn)return s.RGBA;if(r===sl)return s.LUMINANCE;if(r===rl)return s.LUMINANCE_ALPHA;if(r===qn)return s.DEPTH_COMPONENT;if(r===wi)return s.DEPTH_STENCIL;if(r===Pr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ol)return s.RED;if(r===Fa)return s.RED_INTEGER;if(r===al)return s.RG;if(r===Ba)return s.RG_INTEGER;if(r===Ga)return s.RGBA_INTEGER;if(r===Ws||r===Xs||r===qs||r===Ys)if(c===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ws)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Xs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ws)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Xs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===qs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ys)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===io||r===so||r===ro||r===oo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===io)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===so)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ro)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ka)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ao||r===co)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ao)return c===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===co)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lo||r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===_o||r===vo||r===Mo||r===xo||r===So||r===yo||r===wo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===lo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ho)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===po)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===go)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_o)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===So)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Zs||r===Eo||r===To)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Zs)return c===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Eo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===To)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cl||r===bo||r===Ao||r===Ro)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Zs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===bo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ao)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ro)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Up extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lt extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Np={type:"move"};class _r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],l=u.position.distanceTo(d.position),f=.02,_=.005;h.inputState.pinching&&l>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&l<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Lt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Op extends bi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,d=null,l=null,f=null,_=null;const v=e.getContextAttributes();let m=null,p=null;const E=[],g=[],y=new yt;let D=null;const C=new Be;C.layers.enable(1),C.viewport=new he;const L=new Be;L.layers.enable(2),L.viewport=new he;const G=[C,L],w=new Up;w.layers.enable(1),w.layers.enable(2);let b=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let st=E[Y];return st===void 0&&(st=new _r,E[Y]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Y){let st=E[Y];return st===void 0&&(st=new _r,E[Y]=st),st.getGripSpace()},this.getHand=function(Y){let st=E[Y];return st===void 0&&(st=new _r,E[Y]=st),st.getHandSpace()};function Z(Y){const st=g.indexOf(Y.inputSource);if(st===-1)return;const gt=E[st];gt!==void 0&&(gt.update(Y.inputSource,Y.frame,h||a),gt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function ot(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",ot),i.removeEventListener("inputsourceschange",O);for(let Y=0;Y<E.length;Y++){const st=g[Y];st!==null&&(g[Y]=null,E[Y].disconnect(st))}b=null,R=null,t.setRenderTarget(m),f=null,l=null,d=null,i=null,p=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return l!==null?l:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",ot),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const st={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Zn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let st=null,gt=null,Ct=null;v.depth&&(Ct=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=v.stencil?wi:qn,gt=v.stencil?Xn:An);const Mt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=new XRWebGLBinding(i,e),l=d.createProjectionLayer(Mt),i.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),p=new Zn(l.textureWidth,l.textureHeight,{format:tn,type:Ln,depthTexture:new sc(l.textureWidth,l.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Ot=t.properties.get(p);Ot.__ignoreDepthValues=l.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),ut.setContext(i),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(Y){for(let st=0;st<Y.removed.length;st++){const gt=Y.removed[st],Ct=g.indexOf(gt);Ct>=0&&(g[Ct]=null,E[Ct].disconnect(gt))}for(let st=0;st<Y.added.length;st++){const gt=Y.added[st];let Ct=g.indexOf(gt);if(Ct===-1){for(let Ot=0;Ot<E.length;Ot++)if(Ot>=g.length){g.push(gt),Ct=Ot;break}else if(g[Ot]===null){g[Ot]=gt,Ct=Ot;break}if(Ct===-1)break}const Mt=E[Ct];Mt&&Mt.connect(gt)}}const z=new U,V=new U;function J(Y,st,gt){z.setFromMatrixPosition(st.matrixWorld),V.setFromMatrixPosition(gt.matrixWorld);const Ct=z.distanceTo(V),Mt=st.projectionMatrix.elements,Ot=gt.projectionMatrix.elements,Ut=Mt[14]/(Mt[10]-1),wt=Mt[14]/(Mt[10]+1),_t=(Mt[9]+1)/Mt[5],N=(Mt[9]-1)/Mt[5],dt=(Mt[8]-1)/Mt[0],$=(Ot[8]+1)/Ot[0],ft=Ut*dt,Q=Ut*$,It=Ct/(-dt+$),pt=It*-dt;st.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(pt),Y.translateZ(It),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const S=Ut+It,M=wt+It,F=ft-pt,tt=Q+(Ct-pt),at=_t*wt/M*S,nt=N*wt/M*S;Y.projectionMatrix.makePerspective(F,tt,at,nt,S,M),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function et(Y,st){st===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(st.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;w.near=L.near=C.near=Y.near,w.far=L.far=C.far=Y.far,(b!==w.near||R!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),b=w.near,R=w.far);const st=Y.parent,gt=w.cameras;et(w,st);for(let Ct=0;Ct<gt.length;Ct++)et(gt[Ct],st);gt.length===2?J(w,C,L):w.projectionMatrix.copy(C.projectionMatrix),X(Y,w,st)};function X(Y,st,gt){gt===null?Y.matrix.copy(st.matrixWorld):(Y.matrix.copy(gt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(st.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(st.projectionMatrix),Y.projectionMatrixInverse.copy(st.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ei*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(l===null&&f===null))return c},this.setFoveation=function(Y){c=Y,l!==null&&(l.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)};let it=null;function q(Y,st){if(u=st.getViewerPose(h||a),_=st,u!==null){const gt=u.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Ct=!1;gt.length!==w.cameras.length&&(w.cameras.length=0,Ct=!0);for(let Mt=0;Mt<gt.length;Mt++){const Ot=gt[Mt];let Ut=null;if(f!==null)Ut=f.getViewport(Ot);else{const _t=d.getViewSubImage(l,Ot);Ut=_t.viewport,Mt===0&&(t.setRenderTargetTextures(p,_t.colorTexture,l.ignoreDepthValues?void 0:_t.depthStencilTexture),t.setRenderTarget(p))}let wt=G[Mt];wt===void 0&&(wt=new Be,wt.layers.enable(Mt),wt.viewport=new he,G[Mt]=wt),wt.matrix.fromArray(Ot.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Ot.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Mt===0&&(w.matrix.copy(wt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),Ct===!0&&w.cameras.push(wt)}}for(let gt=0;gt<E.length;gt++){const Ct=g[gt],Mt=E[gt];Ct!==null&&Mt!==void 0&&Mt.update(Ct,st,h||a)}it&&it(Y,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const ut=new nc;ut.setAnimationLoop(q),this.setAnimationLoop=function(Y){it=Y},this.dispose=function(){}}}function Fp(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qa(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,g,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),l(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,E,g):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=t.get(p).envMap;if(E&&(m.envMap.value=E,m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const g=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*g,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,g){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=g*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function l(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bp(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(E,g){const y=g.program;n.uniformBlockBinding(E,y)}function h(E,g){let y=i[E.id];y===void 0&&(_(E),y=u(E),i[E.id]=y,E.addEventListener("dispose",m));const D=g.program;n.updateUBOMapping(E,D);const C=t.render.frame;r[E.id]!==C&&(l(E),r[E.id]=C)}function u(E){const g=d();E.__bindingPointIndex=g;const y=s.createBuffer(),D=E.__size,C=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,D,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,y),y}function d(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(E){const g=i[E.id],y=E.uniforms,D=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let C=0,L=y.length;C<L;C++){const G=Array.isArray(y[C])?y[C]:[y[C]];for(let w=0,b=G.length;w<b;w++){const R=G[w];if(f(R,C,w,D)===!0){const Z=R.__offset,ot=Array.isArray(R.value)?R.value:[R.value];let O=0;for(let z=0;z<ot.length;z++){const V=ot[z],J=v(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,Z+O,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,O),O+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(E,g,y,D){const C=E.value,L=g+"_"+y;if(D[L]===void 0)return typeof C=="number"||typeof C=="boolean"?D[L]=C:D[L]=C.clone(),!0;{const G=D[L];if(typeof C=="number"||typeof C=="boolean"){if(G!==C)return D[L]=C,!0}else if(G.equals(C)===!1)return G.copy(C),!0}return!1}function _(E){const g=E.uniforms;let y=0;const D=16;for(let L=0,G=g.length;L<G;L++){const w=Array.isArray(g[L])?g[L]:[g[L]];for(let b=0,R=w.length;b<R;b++){const Z=w[b],ot=Array.isArray(Z.value)?Z.value:[Z.value];for(let O=0,z=ot.length;O<z;O++){const V=ot[O],J=v(V),et=y%D;et!==0&&D-et<J.boundary&&(y+=D-et),Z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=y,y+=J.storage}}}const C=y%D;return C>0&&(y+=D-C),E.__size=y,E.__cache={},this}function v(E){const g={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(g.boundary=4,g.storage=4):E.isVector2?(g.boundary=8,g.storage=8):E.isVector3||E.isColor?(g.boundary=16,g.storage=12):E.isVector4?(g.boundary=16,g.storage=16):E.isMatrix3?(g.boundary=48,g.storage=48):E.isMatrix4?(g.boundary=64,g.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),g}function m(E){const g=E.target;g.removeEventListener("dispose",m);const y=a.indexOf(g.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function p(){for(const E in i)s.deleteBuffer(i[E]);a=[],i={},r={}}return{bind:c,update:h,dispose:p}}class hc{constructor(t={}){const{canvas:e=Dl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let l;n!==null?l=n.getContextAttributes().alpha:l=a;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const p=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this._useLegacyLights=!1,this.toneMapping=Cn,this.toneMappingExposure=1;const g=this;let y=!1,D=0,C=0,L=null,G=-1,w=null;const b=new he,R=new he;let Z=null;const ot=new te(0);let O=0,z=e.width,V=e.height,J=1,et=null,X=null;const it=new he(0,0,z,V),q=new he(0,0,z,V);let ut=!1;const Y=new Br;let st=!1,gt=!1,Ct=null;const Mt=new _e,Ot=new yt,Ut=new U,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _t(){return L===null?J:1}let N=n;function dt(A,k){for(let H=0;H<A.length;H++){const T=A[H],I=e.getContext(T,k);if(I!==null)return I}return null}try{const A={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ur}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",x,!1),e.addEventListener("webglcontextcreationerror",B,!1),N===null){const k=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&k.shift(),N=dt(k,A),N===null)throw dt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let $,ft,Q,It,pt,S,M,F,tt,at,nt,Dt,vt,At,Ft,Pt,ct,Jt,Wt,kt,Nt,Rt,Bt,Zt;function se(){$=new Yd(N),ft=new zd(N,$,t),$.init(ft),Rt=new Dp(N,$,ft),Q=new Lp(N,$,ft),It=new Jd(N),pt=new _p,S=new Ip(N,$,Q,pt,ft,Rt,It),M=new Hd(g),F=new qd(g),tt=new sh(N,ft),Bt=new Gd(N,$,tt,ft),at=new Zd(N,tt,It,Bt),nt=new tf(N,at,tt,It),Wt=new Qd(N,ft,S),Pt=new Vd(pt),Dt=new gp(g,M,F,$,ft,Bt,Pt),vt=new Fp(g,pt),At=new Mp,Ft=new Tp($,ft),Jt=new Bd(g,M,F,Q,nt,l,c),ct=new Cp(g,nt,ft),Zt=new Bp(N,It,ft,Q),kt=new kd(N,$,It,ft),Nt=new Kd(N,$,It,ft),It.programs=Dt.programs,g.capabilities=ft,g.extensions=$,g.properties=pt,g.renderLists=At,g.shadowMap=ct,g.state=Q,g.info=It}se();const Ht=new Op(g,N);this.xr=Ht,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=$.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=$.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(z,V,!1))},this.getSize=function(A){return A.set(z,V)},this.setSize=function(A,k,H=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,V=k,e.width=Math.floor(A*J),e.height=Math.floor(k*J),H===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(z*J,V*J).floor()},this.setDrawingBufferSize=function(A,k,H){z=A,V=k,J=H,e.width=Math.floor(A*H),e.height=Math.floor(k*H),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(b)},this.getViewport=function(A){return A.copy(it)},this.setViewport=function(A,k,H,T){A.isVector4?it.set(A.x,A.y,A.z,A.w):it.set(A,k,H,T),Q.viewport(b.copy(it).multiplyScalar(J).floor())},this.getScissor=function(A){return A.copy(q)},this.setScissor=function(A,k,H,T){A.isVector4?q.set(A.x,A.y,A.z,A.w):q.set(A,k,H,T),Q.scissor(R.copy(q).multiplyScalar(J).floor())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){Q.setScissorTest(ut=A)},this.setOpaqueSort=function(A){et=A},this.setTransparentSort=function(A){X=A},this.getClearColor=function(A){return A.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(A=!0,k=!0,H=!0){let T=0;if(A){let I=!1;if(L!==null){const W=L.texture.format;I=W===Ga||W===Ba||W===Fa}if(I){const W=L.texture.type,ht=W===Ln||W===An||W===Nr||W===Xn||W===Na||W===Oa,Tt=Jt.getClearColor(),Gt=Jt.getClearAlpha(),Xt=Tt.r,Yt=Tt.g,Kt=Tt.b;ht?(f[0]=Xt,f[1]=Yt,f[2]=Kt,f[3]=Gt,N.clearBufferuiv(N.COLOR,0,f)):(_[0]=Xt,_[1]=Yt,_[2]=Kt,_[3]=Gt,N.clearBufferiv(N.COLOR,0,_))}else T|=N.COLOR_BUFFER_BIT}k&&(T|=N.DEPTH_BUFFER_BIT),H&&(T|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",x,!1),e.removeEventListener("webglcontextcreationerror",B,!1),At.dispose(),Ft.dispose(),pt.dispose(),M.dispose(),F.dispose(),nt.dispose(),Bt.dispose(),Zt.dispose(),Dt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",ne),Ht.removeEventListener("sessionend",qt),Ct&&(Ct.dispose(),Ct=null),ue.stop()};function mt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function x(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=It.autoReset,k=ct.enabled,H=ct.autoUpdate,T=ct.needsUpdate,I=ct.type;se(),It.autoReset=A,ct.enabled=k,ct.autoUpdate=H,ct.needsUpdate=T,ct.type=I}function B(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function K(A){const k=A.target;k.removeEventListener("dispose",K),bt(k)}function bt(A){lt(A),pt.remove(A)}function lt(A){const k=pt.get(A).programs;k!==void 0&&(k.forEach(function(H){Dt.releaseProgram(H)}),A.isShaderMaterial&&Dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,H,T,I,W){k===null&&(k=wt);const ht=I.isMesh&&I.matrixWorld.determinant()<0,Tt=$n(A,k,H,T,I);Q.setMaterial(T,ht);let Gt=H.index,Xt=1;if(T.wireframe===!0){if(Gt=at.getWireframeAttribute(H),Gt===void 0)return;Xt=2}const Yt=H.drawRange,Kt=H.attributes.position;let ve=Yt.start*Xt,ze=(Yt.start+Yt.count)*Xt;W!==null&&(ve=Math.max(ve,W.start*Xt),ze=Math.min(ze,(W.start+W.count)*Xt)),Gt!==null?(ve=Math.max(ve,0),ze=Math.min(ze,Gt.count)):Kt!=null&&(ve=Math.max(ve,0),ze=Math.min(ze,Kt.count));const Ee=ze-ve;if(Ee<0||Ee===1/0)return;Bt.setup(I,T,Tt,H,Gt);let hn,de=kt;if(Gt!==null&&(hn=tt.get(Gt),de=Nt,de.setIndex(hn)),I.isMesh)T.wireframe===!0?(Q.setLineWidth(T.wireframeLinewidth*_t()),de.setMode(N.LINES)):de.setMode(N.TRIANGLES);else if(I.isLine){let $t=T.linewidth;$t===void 0&&($t=1),Q.setLineWidth($t*_t()),I.isLineSegments?de.setMode(N.LINES):I.isLineLoop?de.setMode(N.LINE_LOOP):de.setMode(N.LINE_STRIP)}else I.isPoints?de.setMode(N.POINTS):I.isSprite&&de.setMode(N.TRIANGLES);if(I.isBatchedMesh)de.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)de.renderInstances(ve,Ee,I.count);else if(H.isInstancedBufferGeometry){const $t=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Gs=Math.min(H.instanceCount,$t);de.renderInstances(ve,Ee,Gs)}else de.render(ve,Ee)};function xt(A,k,H){A.transparent===!0&&A.side===Ie&&A.forceSinglePass===!1?(A.side=Fe,A.needsUpdate=!0,sn(A,k,H),A.side=In,A.needsUpdate=!0,sn(A,k,H),A.side=Ie):sn(A,k,H)}this.compile=function(A,k,H=null){H===null&&(H=A),m=Ft.get(H),m.init(),E.push(m),H.traverseVisible(function(I){I.isLight&&I.layers.test(k.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),A!==H&&A.traverseVisible(function(I){I.isLight&&I.layers.test(k.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights(g._useLegacyLights);const T=new Set;return A.traverse(function(I){const W=I.material;if(W)if(Array.isArray(W))for(let ht=0;ht<W.length;ht++){const Tt=W[ht];xt(Tt,H,I),T.add(Tt)}else xt(W,H,I),T.add(W)}),E.pop(),m=null,T},this.compileAsync=function(A,k,H=null){const T=this.compile(A,k,H);return new Promise(I=>{function W(){if(T.forEach(function(ht){pt.get(ht).currentProgram.isReady()&&T.delete(ht)}),T.size===0){I(A);return}setTimeout(W,10)}$.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let Vt=null;function re(A){Vt&&Vt(A)}function ne(){ue.stop()}function qt(){ue.start()}const ue=new nc;ue.setAnimationLoop(re),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(A){Vt=A,Ht.setAnimationLoop(A),A===null?ue.stop():ue.start()},Ht.addEventListener("sessionstart",ne),Ht.addEventListener("sessionend",qt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(k),k=Ht.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,k,L),m=Ft.get(A,E.length),m.init(),E.push(m),Mt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(Mt),gt=this.localClippingEnabled,st=Pt.init(this.clippingPlanes,gt),v=At.get(A,p.length),v.init(),p.push(v),we(A,k,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(et,X),this.info.render.frame++,st===!0&&Pt.beginShadows();const H=m.state.shadowsArray;if(ct.render(H,A,k),st===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(v,A),m.setupLights(g._useLegacyLights),k.isArrayCamera){const T=k.cameras;for(let I=0,W=T.length;I<W;I++){const ht=T[I];nn(v,A,ht,ht.viewport)}}else nn(v,A,k);L!==null&&(S.updateMultisampleRenderTarget(L),S.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(g,A,k),Bt.resetDefaultState(),G=-1,w=null,E.pop(),E.length>0?m=E[E.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function we(A,k,H,T){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){T&&Ut.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Mt);const ht=nt.update(A),Tt=A.material;Tt.visible&&v.push(A,ht,Tt,H,Ut.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){const ht=nt.update(A),Tt=A.material;if(T&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ut.copy(A.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),Ut.copy(ht.boundingSphere.center)),Ut.applyMatrix4(A.matrixWorld).applyMatrix4(Mt)),Array.isArray(Tt)){const Gt=ht.groups;for(let Xt=0,Yt=Gt.length;Xt<Yt;Xt++){const Kt=Gt[Xt],ve=Tt[Kt.materialIndex];ve&&ve.visible&&v.push(A,ht,ve,H,Ut.z,Kt)}}else Tt.visible&&v.push(A,ht,Tt,H,Ut.z,null)}}const W=A.children;for(let ht=0,Tt=W.length;ht<Tt;ht++)we(W[ht],k,H,T)}function nn(A,k,H,T){const I=A.opaque,W=A.transmissive,ht=A.transparent;m.setupLightsView(H),st===!0&&Pt.setGlobalState(g.clippingPlanes,H),W.length>0&&ke(I,W,k,H),T&&Q.viewport(b.copy(T)),I.length>0&&ln(I,k,H),W.length>0&&ln(W,k,H),ht.length>0&&ln(ht,k,H),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ke(A,k,H,T){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;const W=ft.isWebGL2;Ct===null&&(Ct=new Zn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")?Hi:Ln,minFilter:Vi,samples:W?4:0})),g.getDrawingBufferSize(Ot),W?Ct.setSize(Ot.x,Ot.y):Ct.setSize(As(Ot.x),As(Ot.y));const ht=g.getRenderTarget();g.setRenderTarget(Ct),g.getClearColor(ot),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();const Tt=g.toneMapping;g.toneMapping=Cn,ln(A,H,T),S.updateMultisampleRenderTarget(Ct),S.updateRenderTargetMipmap(Ct);let Gt=!1;for(let Xt=0,Yt=k.length;Xt<Yt;Xt++){const Kt=k[Xt],ve=Kt.object,ze=Kt.geometry,Ee=Kt.material,hn=Kt.group;if(Ee.side===Ie&&ve.layers.test(T.layers)){const de=Ee.side;Ee.side=Fe,Ee.needsUpdate=!0,Sn(ve,H,T,ze,Ee,hn),Ee.side=de,Ee.needsUpdate=!0,Gt=!0}}Gt===!0&&(S.updateMultisampleRenderTarget(Ct),S.updateRenderTargetMipmap(Ct)),g.setRenderTarget(ht),g.setClearColor(ot,O),g.toneMapping=Tt}function ln(A,k,H){const T=k.isScene===!0?k.overrideMaterial:null;for(let I=0,W=A.length;I<W;I++){const ht=A[I],Tt=ht.object,Gt=ht.geometry,Xt=T===null?ht.material:T,Yt=ht.group;Tt.layers.test(H.layers)&&Sn(Tt,k,H,Gt,Xt,Yt)}}function Sn(A,k,H,T,I,W){A.onBeforeRender(g,k,H,T,I,W),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),I.onBeforeRender(g,k,H,T,A,W),I.transparent===!0&&I.side===Ie&&I.forceSinglePass===!1?(I.side=Fe,I.needsUpdate=!0,g.renderBufferDirect(H,k,T,I,A,W),I.side=In,I.needsUpdate=!0,g.renderBufferDirect(H,k,T,I,A,W),I.side=Ie):g.renderBufferDirect(H,k,T,I,A,W),A.onAfterRender(g,k,H,T,I,W)}function sn(A,k,H){k.isScene!==!0&&(k=wt);const T=pt.get(A),I=m.state.lights,W=m.state.shadowsArray,ht=I.state.version,Tt=Dt.getParameters(A,I.state,W,k,H),Gt=Dt.getProgramCacheKey(Tt);let Xt=T.programs;T.environment=A.isMeshStandardMaterial?k.environment:null,T.fog=k.fog,T.envMap=(A.isMeshStandardMaterial?F:M).get(A.envMap||T.environment),Xt===void 0&&(A.addEventListener("dispose",K),Xt=new Map,T.programs=Xt);let Yt=Xt.get(Gt);if(Yt!==void 0){if(T.currentProgram===Yt&&T.lightsStateVersion===ht)return rn(A,Tt),Yt}else Tt.uniforms=Dt.getUniforms(A),A.onBuild(H,Tt,g),A.onBeforeCompile(Tt,g),Yt=Dt.acquireProgram(Tt,Gt),Xt.set(Gt,Yt),T.uniforms=Tt.uniforms;const Kt=T.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Kt.clippingPlanes=Pt.uniform),rn(A,Tt),T.needsLights=Un(A),T.lightsStateVersion=ht,T.needsLights&&(Kt.ambientLightColor.value=I.state.ambient,Kt.lightProbe.value=I.state.probe,Kt.directionalLights.value=I.state.directional,Kt.directionalLightShadows.value=I.state.directionalShadow,Kt.spotLights.value=I.state.spot,Kt.spotLightShadows.value=I.state.spotShadow,Kt.rectAreaLights.value=I.state.rectArea,Kt.ltc_1.value=I.state.rectAreaLTC1,Kt.ltc_2.value=I.state.rectAreaLTC2,Kt.pointLights.value=I.state.point,Kt.pointLightShadows.value=I.state.pointShadow,Kt.hemisphereLights.value=I.state.hemi,Kt.directionalShadowMap.value=I.state.directionalShadowMap,Kt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Kt.spotShadowMap.value=I.state.spotShadowMap,Kt.spotLightMatrix.value=I.state.spotLightMatrix,Kt.spotLightMap.value=I.state.spotLightMap,Kt.pointShadowMap.value=I.state.pointShadowMap,Kt.pointShadowMatrix.value=I.state.pointShadowMatrix),T.currentProgram=Yt,T.uniformsList=null,Yt}function Ze(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Ss.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function rn(A,k){const H=pt.get(A);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function $n(A,k,H,T,I){k.isScene!==!0&&(k=wt),S.resetTextureUnits();const W=k.fog,ht=T.isMeshStandardMaterial?k.environment:null,Tt=L===null?g.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Mn,Gt=(T.isMeshStandardMaterial?F:M).get(T.envMap||ht),Xt=T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Yt=!!H.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),Kt=!!H.morphAttributes.position,ve=!!H.morphAttributes.normal,ze=!!H.morphAttributes.color;let Ee=Cn;T.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ee=g.toneMapping);const hn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,de=hn!==void 0?hn.length:0,$t=pt.get(T),Gs=m.state.lights;if(st===!0&&(gt===!0||A!==w)){const We=A===w&&T.id===G;Pt.setState(T,A,We)}let me=!1;T.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Gs.state.version||$t.outputColorSpace!==Tt||I.isBatchedMesh&&$t.batching===!1||!I.isBatchedMesh&&$t.batching===!0||I.isInstancedMesh&&$t.instancing===!1||!I.isInstancedMesh&&$t.instancing===!0||I.isSkinnedMesh&&$t.skinning===!1||!I.isSkinnedMesh&&$t.skinning===!0||I.isInstancedMesh&&$t.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&$t.instancingColor===!1&&I.instanceColor!==null||$t.envMap!==Gt||T.fog===!0&&$t.fog!==W||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==Pt.numPlanes||$t.numIntersection!==Pt.numIntersection)||$t.vertexAlphas!==Xt||$t.vertexTangents!==Yt||$t.morphTargets!==Kt||$t.morphNormals!==ve||$t.morphColors!==ze||$t.toneMapping!==Ee||ft.isWebGL2===!0&&$t.morphTargetsCount!==de)&&(me=!0):(me=!0,$t.__version=T.version);let Nn=$t.currentProgram;me===!0&&(Nn=sn(T,k,I));let Zr=!1,Pi=!1,ks=!1;const Re=Nn.getUniforms(),On=$t.uniforms;if(Q.useProgram(Nn.program)&&(Zr=!0,Pi=!0,ks=!0),T.id!==G&&(G=T.id,Pi=!0),Zr||w!==A){Re.setValue(N,"projectionMatrix",A.projectionMatrix),Re.setValue(N,"viewMatrix",A.matrixWorldInverse);const We=Re.map.cameraPosition;We!==void 0&&We.setValue(N,Ut.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Re.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&Re.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Pi=!0,ks=!0)}if(I.isSkinnedMesh){Re.setOptional(N,I,"bindMatrix"),Re.setOptional(N,I,"bindMatrixInverse");const We=I.skeleton;We&&(ft.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Re.setValue(N,"boneTexture",We.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(Re.setOptional(N,I,"batchingTexture"),Re.setValue(N,"batchingTexture",I._matricesTexture,S));const zs=H.morphAttributes;if((zs.position!==void 0||zs.normal!==void 0||zs.color!==void 0&&ft.isWebGL2===!0)&&Wt.update(I,H,Nn),(Pi||$t.receiveShadow!==I.receiveShadow)&&($t.receiveShadow=I.receiveShadow,Re.setValue(N,"receiveShadow",I.receiveShadow)),T.isMeshGouraudMaterial&&T.envMap!==null&&(On.envMap.value=Gt,On.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),Pi&&(Re.setValue(N,"toneMappingExposure",g.toneMappingExposure),$t.needsLights&&Dn(On,ks),W&&T.fog===!0&&vt.refreshFogUniforms(On,W),vt.refreshMaterialUniforms(On,T,J,V,Ct),Ss.upload(N,Ze($t),On,S)),T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(Ss.upload(N,Ze($t),On,S),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&Re.setValue(N,"center",I.center),Re.setValue(N,"modelViewMatrix",I.modelViewMatrix),Re.setValue(N,"normalMatrix",I.normalMatrix),Re.setValue(N,"modelMatrix",I.matrixWorld),T.isShaderMaterial||T.isRawShaderMaterial){const We=T.uniformsGroups;for(let Vs=0,Sc=We.length;Vs<Sc;Vs++)if(ft.isWebGL2){const Kr=We[Vs];Zt.update(Kr,Nn),Zt.bind(Kr,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function Dn(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Un(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,k,H){pt.get(A.texture).__webglTexture=k,pt.get(A.depthTexture).__webglTexture=H;const T=pt.get(A);T.__hasExternalTextures=!0,T.__hasExternalTextures&&(T.__autoAllocateDepthBuffer=H===void 0,T.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,k){const H=pt.get(A);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,H=0){L=A,D=k,C=H;let T=!0,I=null,W=!1,ht=!1;if(A){const Gt=pt.get(A);Gt.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(N.FRAMEBUFFER,null),T=!1):Gt.__webglFramebuffer===void 0?S.setupRenderTarget(A):Gt.__hasExternalTextures&&S.rebindTextures(A,pt.get(A.texture).__webglTexture,pt.get(A.depthTexture).__webglTexture);const Xt=A.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(ht=!0);const Yt=pt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Yt[k])?I=Yt[k][H]:I=Yt[k],W=!0):ft.isWebGL2&&A.samples>0&&S.useMultisampledRTT(A)===!1?I=pt.get(A).__webglMultisampledFramebuffer:Array.isArray(Yt)?I=Yt[H]:I=Yt,b.copy(A.viewport),R.copy(A.scissor),Z=A.scissorTest}else b.copy(it).multiplyScalar(J).floor(),R.copy(q).multiplyScalar(J).floor(),Z=ut;if(Q.bindFramebuffer(N.FRAMEBUFFER,I)&&ft.drawBuffers&&T&&Q.drawBuffers(A,I),Q.viewport(b),Q.scissor(R),Q.setScissorTest(Z),W){const Gt=pt.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Gt.__webglTexture,H)}else if(ht){const Gt=pt.get(A.texture),Xt=k||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Gt.__webglTexture,H||0,Xt)}G=-1},this.readRenderTargetPixels=function(A,k,H,T,I,W,ht){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=pt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ht!==void 0&&(Tt=Tt[ht]),Tt){Q.bindFramebuffer(N.FRAMEBUFFER,Tt);try{const Gt=A.texture,Xt=Gt.format,Yt=Gt.type;if(Xt!==tn&&Rt.convert(Xt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Kt=Yt===Hi&&($.has("EXT_color_buffer_half_float")||ft.isWebGL2&&$.has("EXT_color_buffer_float"));if(Yt!==Ln&&Rt.convert(Yt)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Yt===Rn&&(ft.isWebGL2||$.has("OES_texture_float")||$.has("WEBGL_color_buffer_float")))&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-T&&H>=0&&H<=A.height-I&&N.readPixels(k,H,T,I,Rt.convert(Xt),Rt.convert(Yt),W)}finally{const Gt=L!==null?pt.get(L).__webglFramebuffer:null;Q.bindFramebuffer(N.FRAMEBUFFER,Gt)}}},this.copyFramebufferToTexture=function(A,k,H=0){const T=Math.pow(2,-H),I=Math.floor(k.image.width*T),W=Math.floor(k.image.height*T);S.setTexture2D(k,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,A.x,A.y,I,W),Q.unbindTexture()},this.copyTextureToTexture=function(A,k,H,T=0){const I=k.image.width,W=k.image.height,ht=Rt.convert(H.format),Tt=Rt.convert(H.type);S.setTexture2D(H,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment),k.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,T,A.x,A.y,I,W,ht,Tt,k.image.data):k.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,T,A.x,A.y,k.mipmaps[0].width,k.mipmaps[0].height,ht,k.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,T,A.x,A.y,ht,Tt,k.image),T===0&&H.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(A,k,H,T,I=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const W=A.max.x-A.min.x+1,ht=A.max.y-A.min.y+1,Tt=A.max.z-A.min.z+1,Gt=Rt.convert(T.format),Xt=Rt.convert(T.type);let Yt;if(T.isData3DTexture)S.setTexture3D(T,0),Yt=N.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)S.setTexture2DArray(T,0),Yt=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,T.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,T.unpackAlignment);const Kt=N.getParameter(N.UNPACK_ROW_LENGTH),ve=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ze=N.getParameter(N.UNPACK_SKIP_PIXELS),Ee=N.getParameter(N.UNPACK_SKIP_ROWS),hn=N.getParameter(N.UNPACK_SKIP_IMAGES),de=H.isCompressedTexture?H.mipmaps[I]:H.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,de.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,de.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,A.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,A.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,A.min.z),H.isDataTexture||H.isData3DTexture?N.texSubImage3D(Yt,I,k.x,k.y,k.z,W,ht,Tt,Gt,Xt,de.data):H.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Yt,I,k.x,k.y,k.z,W,ht,Tt,Gt,de.data)):N.texSubImage3D(Yt,I,k.x,k.y,k.z,W,ht,Tt,Gt,Xt,de),N.pixelStorei(N.UNPACK_ROW_LENGTH,Kt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ve),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ze),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ee),N.pixelStorei(N.UNPACK_SKIP_IMAGES,hn),I===0&&T.generateMipmaps&&N.generateMipmap(Yt),Q.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?S.setTextureCube(A,0):A.isData3DTexture?S.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?S.setTexture2DArray(A,0):S.setTexture2D(A,0),Q.unbindTexture()},this.resetState=function(){D=0,C=0,L=null,Q.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Or?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Is?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?Yn:za}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yn?Ae:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Gp extends hc{}Gp.prototype.isWebGL1Renderer=!0;class kr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new te(t),this.density=e}clone(){return new kr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class uc extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _a=new U,va=new U,Ma=new _e,vr=new Za,_s=new Ds;class zp extends xe{constructor(t=new De,e=new uc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)_a.fromBufferAttribute(e,i-1),va.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=_a.distanceTo(va);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(i),_s.radius+=r,t.ray.intersectsSphere(_s)===!1)return;Ma.copy(i).invert(),vr.copy(t.ray).applyMatrix4(Ma);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new U,u=new U,d=new U,l=new U,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),E=Math.min(_.count,a.start+a.count);for(let g=p,y=E-1;g<y;g+=f){const D=_.getX(g),C=_.getX(g+1);if(h.fromBufferAttribute(m,D),u.fromBufferAttribute(m,C),vr.distanceSqToSegment(h,u,l,d)>c)continue;l.applyMatrix4(this.matrixWorld);const G=t.ray.origin.distanceTo(l);G<t.near||G>t.far||e.push({distance:G,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),E=Math.min(m.count,a.start+a.count);for(let g=p,y=E-1;g<y;g+=f){if(h.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),vr.distanceSqToSegment(h,u,l,d)>c)continue;l.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(l);C<t.near||C>t.far||e.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class fe extends Ge{constructor(t,e,n,i,r,a,o,c,h){super(t,e,n,i,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),h=n[i]-a,h<0)o=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const u=n[i],l=n[i+1]-u,f=(a-u)/l;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new yt:new U);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,i=[],r=[],a=[],o=new U,c=new _e;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new U)}r[0]=new U,a[0]=new U;let h=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),l=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),l<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(be(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,_))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class zr extends cn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new yt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),l=c-this.aX,f=h-this.aY;c=l*u-f*d+this.aX,h=l*d+f*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Vp extends zr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Vr(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){i(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,d){let l=(a-r)/h-(o-r)/(h+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;l*=u,f*=u,i(a,o,l,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const vs=new U,Mr=new Vr,xr=new Vr,Sr=new Vr;class Ps extends cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=i[(o-1)%r]:(vs.subVectors(i[0],i[1]).add(i[0]),h=vs);const d=i[o%r],l=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(vs.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=vs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(l),f),m=Math.pow(l.distanceToSquared(u),f);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),Mr.initNonuniformCatmullRom(h.x,d.x,l.x,u.x,_,v,m),xr.initNonuniformCatmullRom(h.y,d.y,l.y,u.y,_,v,m),Sr.initNonuniformCatmullRom(h.z,d.z,l.z,u.z,_,v,m)}else this.curveType==="catmullrom"&&(Mr.initCatmullRom(h.x,d.x,l.x,u.x,this.tension),xr.initCatmullRom(h.y,d.y,l.y,u.y,this.tension),Sr.initCatmullRom(h.z,d.z,l.z,u.z,this.tension));return n.set(Mr.calc(c),xr.calc(c),Sr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xa(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Hp(s,t){const e=1-s;return e*e*t}function Wp(s,t){return 2*(1-s)*s*t}function Xp(s,t){return s*s*t}function Gi(s,t,e,n){return Hp(s,t)+Wp(s,e)+Xp(s,n)}function qp(s,t){const e=1-s;return e*e*e*t}function Yp(s,t){const e=1-s;return 3*e*e*s*t}function Zp(s,t){return 3*(1-s)*s*s*t}function Kp(s,t){return s*s*s*t}function ki(s,t,e,n,i){return qp(s,t)+Yp(s,e)+Zp(s,n)+Kp(s,i)}class dc extends cn{constructor(t=new yt,e=new yt,n=new yt,i=new yt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new yt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ki(t,i.x,r.x,a.x,o.x),ki(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jp extends cn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ki(t,i.x,r.x,a.x,o.x),ki(t,i.y,r.y,a.y,o.y),ki(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fc extends cn{constructor(t=new yt,e=new yt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new yt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new yt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jp extends cn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pc extends cn{constructor(t=new yt,e=new yt,n=new yt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new yt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Gi(t,i.x,r.x,a.x),Gi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mc extends cn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Gi(t,i.x,r.x,a.x),Gi(t,i.y,r.y,a.y),Gi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new yt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],h=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(xa(o,c.x,h.x,u.x,d.x),xa(o,c.y,h.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new yt().fromArray(i))}return this}}var Cs=Object.freeze({__proto__:null,ArcCurve:Vp,CatmullRomCurve3:Ps,CubicBezierCurve:dc,CubicBezierCurve3:Jp,EllipseCurve:zr,LineCurve:fc,LineCurve3:jp,QuadraticBezierCurve:pc,QuadraticBezierCurve3:mc,SplineCurve:gc});class $p extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cs[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){const u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Cs[i.type]().fromJSON(i))}return this}}class Sa extends $p{constructor(t){super(),this.type="Path",this.currentPoint=new yt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fc(this.currentPoint.clone(),new yt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new pc(this.currentPoint.clone(),new yt(t,e),new yt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new dc(this.currentPoint.clone(),new yt(t,e),new yt(n,i),new yt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const h=new zr(t,e,n,i,r,a,o,c);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Hr extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],h=new U,u=new yt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,l=3;d<=e;d++,l+=3){const f=n+d/e*i;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[l]/t+1)/2,u.y=(a[l+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class St extends De{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],l=[],f=[];let _=0;const v=[],m=n/2;let p=0;E(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(f,2));function E(){const y=new U,D=new U;let C=0;const L=(e-t)/n;for(let G=0;G<=r;G++){const w=[],b=G/r,R=b*(e-t)+t;for(let Z=0;Z<=i;Z++){const ot=Z/i,O=ot*c+o,z=Math.sin(O),V=Math.cos(O);D.x=R*z,D.y=-b*n+m,D.z=R*V,d.push(D.x,D.y,D.z),y.set(z,L,V).normalize(),l.push(y.x,y.y,y.z),f.push(ot,1-b),w.push(_++)}v.push(w)}for(let G=0;G<i;G++)for(let w=0;w<r;w++){const b=v[w][G],R=v[w+1][G],Z=v[w+1][G+1],ot=v[w][G+1];u.push(b,R,ot),u.push(R,Z,ot),C+=6}h.addGroup(p,C,0),p+=C}function g(y){const D=_,C=new yt,L=new U;let G=0;const w=y===!0?t:e,b=y===!0?1:-1;for(let Z=1;Z<=i;Z++)d.push(0,m*b,0),l.push(0,b,0),f.push(.5,.5),_++;const R=_;for(let Z=0;Z<=i;Z++){const O=Z/i*c+o,z=Math.cos(O),V=Math.sin(O);L.x=w*V,L.y=m*b,L.z=w*z,d.push(L.x,L.y,L.z),l.push(0,b,0),C.x=z*.5+.5,C.y=V*.5*b+.5,f.push(C.x,C.y),_++}for(let Z=0;Z<i;Z++){const ot=D+Z,O=R+Z;y===!0?u.push(O,O+1,ot):u.push(O+1,O,ot),G+=3}h.addGroup(p,G,y===!0?1:2),p+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new St(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Le extends St{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Le(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wr extends De{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),h(n),u(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const g=new U,y=new U,D=new U;for(let C=0;C<e.length;C+=3)f(e[C+0],g),f(e[C+1],y),f(e[C+2],D),c(g,y,D,E)}function c(E,g,y,D){const C=D+1,L=[];for(let G=0;G<=C;G++){L[G]=[];const w=E.clone().lerp(y,G/C),b=g.clone().lerp(y,G/C),R=C-G;for(let Z=0;Z<=R;Z++)Z===0&&G===C?L[G][Z]=w:L[G][Z]=w.clone().lerp(b,Z/R)}for(let G=0;G<C;G++)for(let w=0;w<2*(C-G)-1;w++){const b=Math.floor(w/2);w%2===0?(l(L[G][b+1]),l(L[G+1][b]),l(L[G][b])):(l(L[G][b+1]),l(L[G+1][b+1]),l(L[G+1][b]))}}function h(E){const g=new U;for(let y=0;y<r.length;y+=3)g.x=r[y+0],g.y=r[y+1],g.z=r[y+2],g.normalize().multiplyScalar(E),r[y+0]=g.x,r[y+1]=g.y,r[y+2]=g.z}function u(){const E=new U;for(let g=0;g<r.length;g+=3){E.x=r[g+0],E.y=r[g+1],E.z=r[g+2];const y=m(E)/2/Math.PI+.5,D=p(E)/Math.PI+.5;a.push(y,1-D)}_(),d()}function d(){for(let E=0;E<a.length;E+=6){const g=a[E+0],y=a[E+2],D=a[E+4],C=Math.max(g,y,D),L=Math.min(g,y,D);C>.9&&L<.1&&(g<.2&&(a[E+0]+=1),y<.2&&(a[E+2]+=1),D<.2&&(a[E+4]+=1))}}function l(E){r.push(E.x,E.y,E.z)}function f(E,g){const y=E*3;g.x=t[y+0],g.y=t[y+1],g.z=t[y+2]}function _(){const E=new U,g=new U,y=new U,D=new U,C=new yt,L=new yt,G=new yt;for(let w=0,b=0;w<r.length;w+=9,b+=6){E.set(r[w+0],r[w+1],r[w+2]),g.set(r[w+3],r[w+4],r[w+5]),y.set(r[w+6],r[w+7],r[w+8]),C.set(a[b+0],a[b+1]),L.set(a[b+2],a[b+3]),G.set(a[b+4],a[b+5]),D.copy(E).add(g).add(y).divideScalar(3);const R=m(D);v(C,b+0,E,R),v(L,b+2,g,R),v(G,b+4,y,R)}}function v(E,g,y,D){D<0&&E.x===1&&(a[g]=E.x-1),y.x===0&&y.z===0&&(a[g]=D/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.vertices,t.indices,t.radius,t.details)}}class Xr extends Wr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xr(t.radius,t.detail)}}class _c extends Sa{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Sa().fromJSON(i))}return this}}const Qp={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=vc(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,h,u,d,l,f;if(n&&(r=s0(s,t,r,e)),s.length>80*e){o=h=s[0],c=u=s[1];for(let _=e;_<i;_+=e)d=s[_],l=s[_+1],d<o&&(o=d),l<c&&(c=l),d>h&&(h=d),l>u&&(u=l);f=Math.max(h-o,u-c),f=f!==0?32767/f:0}return Wi(r,a,e,o,c,f,0),a}};function vc(s,t,e,n,i){let r,a;if(i===m0(s,t,e,n)>0)for(r=t;r<e;r+=n)a=ya(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=ya(r,s[r],s[r+1],a);return a&&Os(a,a.next)&&(qi(a),a=a.next),a}function Jn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Os(e,e.next)||pe(e.prev,e,e.next)===0)){if(qi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wi(s,t,e,n,i,r,a){if(!s)return;!a&&r&&l0(s,n,i,r);let o=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,r?e0(s,n,i,r):t0(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),qi(s),s=h.next,o=h.next;continue}if(s=h,s===o){a?a===1?(s=n0(Jn(s),t,e),Wi(s,t,e,n,i,r,2)):a===2&&i0(s,t,e,n,i,r):Wi(Jn(s),t,e,n,i,r,1);break}}}function t0(s){const t=s.prev,e=s,n=s.next;if(pe(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,u=i<r?i<a?i:a:r<a?r:a,d=o<c?o<h?o:h:c<h?c:h,l=i>r?i>a?i:a:r>a?r:a,f=o>c?o>h?o:h:c>h?c:h;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=l&&_.y>=d&&_.y<=f&&vi(i,o,r,c,a,h,_.x,_.y)&&pe(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function e0(s,t,e,n){const i=s.prev,r=s,a=s.next;if(pe(i,r,a)>=0)return!1;const o=i.x,c=r.x,h=a.x,u=i.y,d=r.y,l=a.y,f=o<c?o<h?o:h:c<h?c:h,_=u<d?u<l?u:l:d<l?d:l,v=o>c?o>h?o:h:c>h?c:h,m=u>d?u>l?u:l:d>l?d:l,p=Ir(f,_,t,e,n),E=Ir(v,m,t,e,n);let g=s.prevZ,y=s.nextZ;for(;g&&g.z>=p&&y&&y.z<=E;){if(g.x>=f&&g.x<=v&&g.y>=_&&g.y<=m&&g!==i&&g!==a&&vi(o,u,c,d,h,l,g.x,g.y)&&pe(g.prev,g,g.next)>=0||(g=g.prevZ,y.x>=f&&y.x<=v&&y.y>=_&&y.y<=m&&y!==i&&y!==a&&vi(o,u,c,d,h,l,y.x,y.y)&&pe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;g&&g.z>=p;){if(g.x>=f&&g.x<=v&&g.y>=_&&g.y<=m&&g!==i&&g!==a&&vi(o,u,c,d,h,l,g.x,g.y)&&pe(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;y&&y.z<=E;){if(y.x>=f&&y.x<=v&&y.y>=_&&y.y<=m&&y!==i&&y!==a&&vi(o,u,c,d,h,l,y.x,y.y)&&pe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function n0(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Os(i,r)&&Mc(i,n,n.next,r)&&Xi(i,r)&&Xi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),qi(n),qi(n.next),n=s=r),n=n.next}while(n!==s);return Jn(n)}function i0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&d0(a,o)){let c=xc(a,o);a=Jn(a,a.next),c=Jn(c,c.next),Wi(a,t,e,n,i,r,0),Wi(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function s0(s,t,e,n){const i=[];let r,a,o,c,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,h=vc(s,o,c,n,!1),h===h.next&&(h.steiner=!0),i.push(u0(h));for(i.sort(r0),r=0;r<i.length;r++)e=o0(i[r],e);return e}function r0(s,t){return s.x-t.x}function o0(s,t){const e=a0(s,t);if(!e)return t;const n=xc(e,s);return Jn(n,n.next),Jn(e,e.next)}function a0(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const l=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=r&&l>n&&(n=l,i=e.x<e.next.x?e:e.next,l===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,h=i.y;let u=1/0,d;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&vi(a<h?r:n,a,c,h,a<h?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),Xi(e,s)&&(d<u||d===u&&(e.x>i.x||e.x===i.x&&c0(i,e)))&&(i=e,u=d)),e=e.next;while(e!==o);return i}function c0(s,t){return pe(s.prev,s,t.prev)<0&&pe(t.next,s,s.next)<0}function l0(s,t,e,n){let i=s;do i.z===0&&(i.z=Ir(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,h0(i)}function h0(s){let t,e,n,i,r,a,o,c,h=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,h*=2}while(a>1);return s}function Ir(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function u0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function vi(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function d0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!f0(s,t)&&(Xi(s,t)&&Xi(t,s)&&p0(s,t)&&(pe(s.prev,s,t.prev)||pe(s,t.prev,t))||Os(s,t)&&pe(s.prev,s,s.next)>0&&pe(t.prev,t,t.next)>0)}function pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Os(s,t){return s.x===t.x&&s.y===t.y}function Mc(s,t,e,n){const i=xs(pe(s,t,e)),r=xs(pe(s,t,n)),a=xs(pe(e,n,s)),o=xs(pe(e,n,t));return!!(i!==r&&a!==o||i===0&&Ms(s,e,t)||r===0&&Ms(s,n,t)||a===0&&Ms(e,s,n)||o===0&&Ms(e,t,n))}function Ms(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function xs(s){return s>0?1:s<0?-1:0}function f0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Mc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xi(s,t){return pe(s.prev,s,s.next)<0?pe(s,t,s.next)>=0&&pe(s,s.prev,t)>=0:pe(s,t,s.prev)<0||pe(s,s.next,t)<0}function p0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function xc(s,t){const e=new Dr(s.i,s.x,s.y),n=new Dr(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ya(s,t,e,n){const i=new Dr(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Dr(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class zi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return zi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];wa(t),Ea(n,t);let a=t.length;e.forEach(wa);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Ea(n,e[c]);const o=Qp.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function wa(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ea(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class qr extends De{constructor(t=new _c([new yt(.5,.5),new yt(-.5,.5),new yt(-.5,-.5),new yt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const h=t[o];a(h)}this.setAttribute("position",new ae(i,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let l=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,E=e.UVGenerator!==void 0?e.UVGenerator:g0;let g,y=!1,D,C,L,G;p&&(g=p.getSpacedPoints(u),y=!0,l=!1,D=p.computeFrenetFrames(u,!1),C=new U,L=new U,G=new U),l||(m=0,f=0,_=0,v=0);const w=o.extractPoints(h);let b=w.shape;const R=w.holes;if(!zi.isClockWise(b)){b=b.reverse();for(let N=0,dt=R.length;N<dt;N++){const $=R[N];zi.isClockWise($)&&(R[N]=$.reverse())}}const ot=zi.triangulateShape(b,R),O=b;for(let N=0,dt=R.length;N<dt;N++){const $=R[N];b=b.concat($)}function z(N,dt,$){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(dt,$)}const V=b.length,J=ot.length;function et(N,dt,$){let ft,Q,It;const pt=N.x-dt.x,S=N.y-dt.y,M=$.x-N.x,F=$.y-N.y,tt=pt*pt+S*S,at=pt*F-S*M;if(Math.abs(at)>Number.EPSILON){const nt=Math.sqrt(tt),Dt=Math.sqrt(M*M+F*F),vt=dt.x-S/nt,At=dt.y+pt/nt,Ft=$.x-F/Dt,Pt=$.y+M/Dt,ct=((Ft-vt)*F-(Pt-At)*M)/(pt*F-S*M);ft=vt+pt*ct-N.x,Q=At+S*ct-N.y;const Jt=ft*ft+Q*Q;if(Jt<=2)return new yt(ft,Q);It=Math.sqrt(Jt/2)}else{let nt=!1;pt>Number.EPSILON?M>Number.EPSILON&&(nt=!0):pt<-Number.EPSILON?M<-Number.EPSILON&&(nt=!0):Math.sign(S)===Math.sign(F)&&(nt=!0),nt?(ft=-S,Q=pt,It=Math.sqrt(tt)):(ft=pt,Q=S,It=Math.sqrt(tt/2))}return new yt(ft/It,Q/It)}const X=[];for(let N=0,dt=O.length,$=dt-1,ft=N+1;N<dt;N++,$++,ft++)$===dt&&($=0),ft===dt&&(ft=0),X[N]=et(O[N],O[$],O[ft]);const it=[];let q,ut=X.concat();for(let N=0,dt=R.length;N<dt;N++){const $=R[N];q=[];for(let ft=0,Q=$.length,It=Q-1,pt=ft+1;ft<Q;ft++,It++,pt++)It===Q&&(It=0),pt===Q&&(pt=0),q[ft]=et($[ft],$[It],$[pt]);it.push(q),ut=ut.concat(q)}for(let N=0;N<m;N++){const dt=N/m,$=f*Math.cos(dt*Math.PI/2),ft=_*Math.sin(dt*Math.PI/2)+v;for(let Q=0,It=O.length;Q<It;Q++){const pt=z(O[Q],X[Q],ft);Mt(pt.x,pt.y,-$)}for(let Q=0,It=R.length;Q<It;Q++){const pt=R[Q];q=it[Q];for(let S=0,M=pt.length;S<M;S++){const F=z(pt[S],q[S],ft);Mt(F.x,F.y,-$)}}}const Y=_+v;for(let N=0;N<V;N++){const dt=l?z(b[N],ut[N],Y):b[N];y?(L.copy(D.normals[0]).multiplyScalar(dt.x),C.copy(D.binormals[0]).multiplyScalar(dt.y),G.copy(g[0]).add(L).add(C),Mt(G.x,G.y,G.z)):Mt(dt.x,dt.y,0)}for(let N=1;N<=u;N++)for(let dt=0;dt<V;dt++){const $=l?z(b[dt],ut[dt],Y):b[dt];y?(L.copy(D.normals[N]).multiplyScalar($.x),C.copy(D.binormals[N]).multiplyScalar($.y),G.copy(g[N]).add(L).add(C),Mt(G.x,G.y,G.z)):Mt($.x,$.y,d/u*N)}for(let N=m-1;N>=0;N--){const dt=N/m,$=f*Math.cos(dt*Math.PI/2),ft=_*Math.sin(dt*Math.PI/2)+v;for(let Q=0,It=O.length;Q<It;Q++){const pt=z(O[Q],X[Q],ft);Mt(pt.x,pt.y,d+$)}for(let Q=0,It=R.length;Q<It;Q++){const pt=R[Q];q=it[Q];for(let S=0,M=pt.length;S<M;S++){const F=z(pt[S],q[S],ft);y?Mt(F.x,F.y+g[u-1].y,g[u-1].x+$):Mt(F.x,F.y,d+$)}}}st(),gt();function st(){const N=i.length/3;if(l){let dt=0,$=V*dt;for(let ft=0;ft<J;ft++){const Q=ot[ft];Ot(Q[2]+$,Q[1]+$,Q[0]+$)}dt=u+m*2,$=V*dt;for(let ft=0;ft<J;ft++){const Q=ot[ft];Ot(Q[0]+$,Q[1]+$,Q[2]+$)}}else{for(let dt=0;dt<J;dt++){const $=ot[dt];Ot($[2],$[1],$[0])}for(let dt=0;dt<J;dt++){const $=ot[dt];Ot($[0]+V*u,$[1]+V*u,$[2]+V*u)}}n.addGroup(N,i.length/3-N,0)}function gt(){const N=i.length/3;let dt=0;Ct(O,dt),dt+=O.length;for(let $=0,ft=R.length;$<ft;$++){const Q=R[$];Ct(Q,dt),dt+=Q.length}n.addGroup(N,i.length/3-N,1)}function Ct(N,dt){let $=N.length;for(;--$>=0;){const ft=$;let Q=$-1;Q<0&&(Q=N.length-1);for(let It=0,pt=u+m*2;It<pt;It++){const S=V*It,M=V*(It+1),F=dt+ft+S,tt=dt+Q+S,at=dt+Q+M,nt=dt+ft+M;Ut(F,tt,at,nt)}}}function Mt(N,dt,$){c.push(N),c.push(dt),c.push($)}function Ot(N,dt,$){wt(N),wt(dt),wt($);const ft=i.length/3,Q=E.generateTopUV(n,i,ft-3,ft-2,ft-1);_t(Q[0]),_t(Q[1]),_t(Q[2])}function Ut(N,dt,$,ft){wt(N),wt(dt),wt(ft),wt(dt),wt($),wt(ft);const Q=i.length/3,It=E.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);_t(It[0]),_t(It[1]),_t(It[3]),_t(It[1]),_t(It[2]),_t(It[3])}function wt(N){i.push(c[N*3+0]),i.push(c[N*3+1]),i.push(c[N*3+2])}function _t(N){r.push(N.x),r.push(N.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Cs[i.type]().fromJSON(i)),new qr(n,t.options)}}const g0={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[i*3],u=t[i*3+1];return[new yt(r,a),new yt(o,c),new yt(h,u)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],d=t[n*3+2],l=t[i*3],f=t[i*3+1],_=t[i*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new yt(a,1-c),new yt(h,1-d),new yt(l,1-_),new yt(v,1-p)]:[new yt(o,1-c),new yt(u,1-d),new yt(f,1-_),new yt(m,1-p)]}};function _0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ie extends De{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const u=[],d=new U,l=new U,f=[],_=[],v=[],m=[];for(let p=0;p<=n;p++){const E=[],g=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let D=0;D<=e;D++){const C=D/e;d.x=-t*Math.cos(i+C*r)*Math.sin(a+g*o),d.y=t*Math.cos(a+g*o),d.z=t*Math.sin(i+C*r)*Math.sin(a+g*o),_.push(d.x,d.y,d.z),l.copy(d).normalize(),v.push(l.x,l.y,l.z),m.push(C+y,1-g),E.push(h++)}u.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){const g=u[p][E+1],y=u[p][E],D=u[p+1][E],C=u[p+1][E+1];(p!==0||a>0)&&f.push(g,y,C),(p!==n-1||c<Math.PI)&&f.push(y,D,C)}this.setIndex(f),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _n extends De{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],h=[],u=new U,d=new U,l=new U;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const v=_/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),l.subVectors(d,u).normalize(),c.push(l.x,l.y,l.z),h.push(_/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const v=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,E=(i+1)*f+_;a.push(v,m,E),a.push(m,p,E)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Yi extends De{constructor(t=new mc(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new U,c=new U,h=new yt;let u=new U;const d=[],l=[],f=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(f,2));function v(){for(let g=0;g<e;g++)m(g);m(r===!1?e:0),E(),p()}function m(g){u=t.getPointAt(g/e,u);const y=a.normals[g],D=a.binormals[g];for(let C=0;C<=i;C++){const L=C/i*Math.PI*2,G=Math.sin(L),w=-Math.cos(L);c.x=w*y.x+G*D.x,c.y=w*y.y+G*D.y,c.z=w*y.z+G*D.z,c.normalize(),l.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let g=1;g<=e;g++)for(let y=1;y<=i;y++){const D=(i+1)*(g-1)+(y-1),C=(i+1)*g+(y-1),L=(i+1)*g+y,G=(i+1)*(g-1)+y;_.push(D,C,G),_.push(C,L,G)}}function E(){for(let g=0;g<=e;g++)for(let y=0;y<=i;y++)h.x=g/e,h.y=y/i,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Yi(new Cs[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class j extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fs extends j{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Bs extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class v0 extends Bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new te(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const yr=new _e,Ta=new U,ba=new U;class Yr{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Br,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ta.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ta),ba.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ba),e.updateMatrixWorld(),yr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class M0 extends Yr{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ei*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class x0 extends Bs{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new M0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Aa=new _e,Ni=new U,wr=new U;class S0 extends Yr{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ni.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ni),wr.copy(n.position),wr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wr),n.updateMatrixWorld(),i.makeTranslation(-Ni.x,-Ni.y,-Ni.z),Aa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa)}}class y0 extends Bs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new S0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class w0 extends Yr{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E0 extends Bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new w0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class T0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ra(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ra();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ra(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ur}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ur);const zt={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:8,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},ce={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class b0{constructor(){this.state=ce.MENU,this.speedKmh=zt.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=zt.LANES[1],this.targetLaneX=zt.LANES[1],this.crashTimer=0}startNewGame(){this.state=ce.PLAYING,this.speedKmh=zt.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=zt.LANES[1],this.targetLaneX=zt.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==ce.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<zt.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=zt.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min(zt.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=zt.SCORING.COMBO_TIMEOUT;const t=zt.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min(zt.NITRO.MAX,this.nitro+zt.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==ce.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*zt.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,r=e.keys.accelerate,a=e.keys.boost,o=this.distanceMeters/1e3,c=Math.min(zt.SPEED.MAX_PROGRESSIVE_BONUS,o*zt.SPEED.PROGRESSIVE_RATE),h=zt.SPEED.BASE_START+c,u=h+45,d=zt.SPEED.BOOST+c*.4;a&&this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-zt.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(d,this.speedKmh+zt.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.nitro=Math.min(zt.NITRO.MAX,this.nitro+zt.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max(zt.SPEED.MIN,this.speedKmh-zt.SPEED.BRAKING*t):r?this.speedKmh=Math.min(u,this.speedKmh+zt.SPEED.ACCELERATION*1.6*t):this.speedKmh<h?this.speedKmh=Math.min(h,this.speedKmh+zt.SPEED.ACCELERATION*t):this.speedKmh>h&&(this.speedKmh=Math.max(h,this.speedKmh-zt.SPEED.NATURAL_DECEL*t)));const f=this.speedKmh*1e3/3600*t;this.distanceMeters+=f,this.score+=Math.round(f*zt.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=ce.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class A0{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.touchStartX=0,this.touchStartY=0,this.touchStartTime=0,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)&&t.preventDefault(),t.code){case"ArrowLeft":case"KeyA":this.keys.left||(this.laneChangeRequested=-1),this.keys.left=!0;break;case"ArrowRight":case"KeyD":this.keys.right||(this.laneChangeRequested=1),this.keys.right=!0;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!0;break;case"Space":this.keys.boost=!0;break;case"ArrowDown":case"KeyS":this.keys.brake=!0;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!0,this.onHorn&&this.onHorn();break;case"KeyP":case"Escape":this.onPauseToggle&&this.onPauseToggle();break;case"KeyR":this.onRestart&&this.onRestart();break}}),window.addEventListener("keyup",t=>{switch(t.code){case"ArrowLeft":case"KeyA":this.keys.left=!1;break;case"ArrowRight":case"KeyD":this.keys.right=!1;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!1;break;case"Space":this.keys.boost=!1;break;case"ArrowDown":case"KeyS":this.keys.brake=!1;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!1;break}}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0,t.touches.length>0&&(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=Date.now())},{passive:!0}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;Date.now()-this.touchStartTime<350&&Math.abs(e)>40&&Math.abs(e)>Math.abs(n)*1.3&&(e<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}triggerSteerLeft(){this.laneChangeRequested=-1}triggerSteerRight(){this.laneChangeRequested=1}setBrake(t){this.keys.brake=t}setAccelerate(t){this.keys.accelerate=t}setNitro(t){this.keys.boost=t}setBoost(t){this.keys.boost=t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0}}class R0{constructor(t){this.camera=t,this.defaultOffset=new U(zt.CAMERA.DEFAULT_OFFSET.x,zt.CAMERA.DEFAULT_OFFSET.y,zt.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new U(zt.CAMERA.LOOK_OFFSET.x,zt.CAMERA.LOOK_OFFSET.y,zt.CAMERA.LOOK_OFFSET.z),this.currentPos=new U,this.currentLook=new U,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=zt.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.3,6.8),this.lookOffset.set(0,1.35,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=zt.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const r=t.group.position,a=Math.min(1,e/zt.SPEED.MAX_NORMAL),o=this.camera.aspect,c=o<1?Math.min(24,(1-o)*36):0;this.targetFOV=zt.CAMERA.BASE_FOV+c+a*10+(n?8:0),this.camera.fov+=(this.targetFOV-this.camera.fov)*Math.min(1,i*zt.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix();const h=r.x+this.defaultOffset.x,u=r.y+this.defaultOffset.y,d=r.z+this.defaultOffset.z+(n?.8:0),l=Math.min(1,i*10),f=Math.min(1,i*12);this.currentPos.x+=(h-this.currentPos.x)*l,this.currentPos.y+=(u-this.currentPos.y)*f,this.currentPos.z=d;const _=r.x+this.lookOffset.x,v=r.y+this.lookOffset.y,m=r.z+this.lookOffset.z;this.currentLook.x+=(_-this.currentLook.x)*l,this.currentLook.y+=(v-this.currentLook.y)*f,this.currentLook.z=m;let p=0,E=0;if(e>70){const C=e/280*.03;p=(Math.random()-.5)*C,E=(Math.random()-.5)*C}let g=0,y=0,D=0;if(this.shakeDuration>0){this.shakeDuration-=i;const C=Math.max(0,this.shakeDuration/.6),L=this.shakeIntensity*C;g=(Math.random()-.5)*L,y=(Math.random()-.5)*L,D=(Math.random()-.5)*L}this.camera.position.set(this.currentPos.x+p+g,this.currentPos.y+E+y,this.currentPos.z+D),this.camera.lookAt(this.currentLook.x+p*.5,this.currentLook.y+E*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,r=(e?4.8:8.2)*i,a=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),o=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*r,a,Math.cos(c)*r),this.camera.lookAt(0,o,0)}}class P0{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){this.ctx&&fetch("/audio/eta_ki_korli_mama.mp3").then(t=>{if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.arrayBuffer()}).then(t=>this.ctx.decodeAudioData(t)).then(t=>{this.crashVoiceBuffer=t}).catch(t=>{console.warn("Could not decode crash voice buffer:",t)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const r=this.ctx.createGain();r.gain.setValueAtTime(.04,t),this.highOsc.connect(r),r.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,r=0,a=0;for(let c=0;c<t;c++){const h=Math.random()*2-1;i=.98*i+h*.055,r=.95*r+h*.075,a=.85*a+h*.15,n[c]=(i+r+a)*.45}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),o.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),o.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(500,t),a.frequency.exponentialRampToValueAtTime(180,t+.35);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.07,t+.05),o.gain.exponentialRampToValueAtTime(.001,t+.35),r.connect(a),a.connect(o),o.connect(this.masterGain),r.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const r=[2093,2637];[0,.09].forEach(a=>{r.forEach(o=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(o,n+a),h.gain.setValueAtTime(0,n+a),h.gain.linearRampToValueAtTime(.22,n+a+.008),h.gain.exponentialRampToValueAtTime(1e-4,n+a+.18),c.connect(h),h.connect(this.masterGain),c.start(n+a),c.stop(n+a+.2)})});return}if(e==="cng"){[620,780].forEach(a=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sawtooth",o.frequency.setValueAtTime(a,n);const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),o.connect(h),h.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.35)});return}[330,415.3,523.25].forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();o.type=a===0?"sine":"triangle",o.frequency.setValueAtTime(r,n),h.type="lowpass",h.frequency.setValueAtTime(1400,n);const u=a===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(u,n+.02),c.gain.setValueAtTime(u,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),o.connect(h),h.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n*.8,t),r.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.08,t+.06),a.gain.exponentialRampToValueAtTime(1e-4,t+.45),r.connect(a),a.connect(this.masterGain),r.start(t),r.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const r=this.ctx.currentTime,a=Math.min(1,Math.max(0,t/200)),o=a*5%1,c=900+a*1800+o*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const h=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,h),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,r,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,r,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,r,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,r,.05);const u=300+a*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(u,r,.06);const d=.16+a*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,d),r,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+a*350,r,.08),this.turboGain.gain.setTargetAtTime(.05,r,.08)):this.turboGain.gain.setTargetAtTime(1e-4,r,.15);const l=Math.pow(a,1.3)*.06;this.roadGain.gain.setTargetAtTime(l,r,.08),this.roadFilter.frequency.setTargetAtTime(180+a*250,r,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime((a===0?n:n*1.25)*i,e+r),c.gain.setValueAtTime(.001,e+r),c.gain.linearRampToValueAtTime(.12,e+r+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+r+.28),o.connect(c),c.connect(this.masterGain),o.start(e+r),o.stop(e+r+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),r=this.ctx.createBuffer(1,i,this.ctx.sampleRate),a=r.getChannelData(0);for(let u=0;u<i;u++)a[u]=(Math.random()*2-1)*Math.exp(-u/(this.ctx.sampleRate*.12));const o=this.ctx.createBufferSource();o.buffer=r;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const h=this.ctx.createGain();h.gain.setValueAtTime(.3,t),h.gain.exponentialRampToValueAtTime(.001,t+.45),o.connect(c),c.connect(h),h.connect(this.masterGain),o.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(r=>r.lang.includes("bn")||r.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(e,t+i),a.gain.setValueAtTime(.001,t+i),a.gain.linearRampToValueAtTime(.12,t+i+.02),a.gain.exponentialRampToValueAtTime(.001,t+i+.32),r.connect(a),a.connect(this.masterGain),r.start(t+i),r.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class C0{constructor(){this.group=new Lt,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new U(2.1,2.8,5.5),this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new fe(t),i=document.createElement("canvas");i.width=1024,i.height=384;const r=i.getContext("2d");r.fillStyle="#f8fafc",r.fillRect(0,0,1024,384),r.fillStyle="#dc2626",r.fillRect(0,0,1024,36),r.fillRect(0,348,1024,36),r.fillStyle="#16a34a",r.beginPath(),r.arc(512,180,110,Math.PI,0),r.fill(),r.fillStyle="#f59e0b",r.fillRect(472,80,80,100),r.beginPath(),r.moveTo(512,20),r.lineTo(460,80),r.lineTo(564,80),r.fill();const a=(x,B)=>{r.fillStyle="#dc2626";for(let K=0;K<Math.PI*2;K+=Math.PI/3)r.beginPath(),r.arc(x+Math.cos(K)*35,B+Math.sin(K)*35,24,0,Math.PI*2),r.fill();r.fillStyle="#fbbf24",r.beginPath(),r.arc(x,B,22,0,Math.PI*2),r.fill()};a(220,180),a(804,180),r.fillStyle="#1e293b",r.font="bold 54px serif",r.textAlign="center",r.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const o=new fe(i),c=document.createElement("canvas");c.width=1024,c.height=512;const h=c.getContext("2d");h.fillStyle="#f59e0b",h.fillRect(0,0,1024,140);for(let x=60;x<1024;x+=110)h.fillStyle="#dc2626",h.beginPath(),h.arc(x,70,32,0,Math.PI*2),h.fill(),h.fillStyle="#22c55e",h.beginPath(),h.arc(x,70,16,0,Math.PI*2),h.fill();h.fillStyle="#15803d",h.fillRect(0,140,1024,372),h.strokeStyle="#f8fafc",h.lineWidth=8;for(let x=30;x<1024;x+=138)h.strokeRect(x,160,116,320);h.fillStyle="#ffffff",h.font="900 80px sans-serif",h.textAlign="center",h.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),h.fillStyle="#dc2626",h.fillRect(0,140,30,372),h.fillRect(994,140,30,372);const u=new fe(c),d=document.createElement("canvas");d.width=1024,d.height=680;const l=d.getContext("2d");l.fillStyle="#4a90e2",l.fillRect(0,0,1024,680),l.fillStyle="#172554",l.beginPath(),l.moveTo(0,0),l.lineTo(110,0),l.lineTo(0,85),l.closePath(),l.fill(),l.beginPath(),l.moveTo(1024,0),l.lineTo(914,0),l.lineTo(1024,85),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.beginPath(),l.moveTo(0,85),l.lineTo(110,0),l.lineTo(914,0),l.lineTo(1024,85),l.stroke(),l.fillStyle="#2563eb",l.fillRect(100,35,824,45),l.strokeStyle="#18181b",l.lineWidth=3,l.strokeRect(100,35,824,45),l.fillStyle="#1e3a8a";for(let x=110;x<=900;x+=32)l.beginPath(),l.moveTo(x,80),l.lineTo(x+16,45),l.lineTo(x+32,80),l.closePath(),l.fill();const f=x=>{l.fillStyle="#facc15",l.fillRect(x,85,54,345),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(x,85,54,345);for(let B=104;B<=415;B+=26)l.fillStyle="#dc2626",l.beginPath(),l.arc(x+27,B,9.5,0,Math.PI*2),l.fill(),l.fillStyle="#fde047",l.beginPath(),l.arc(x+27,B,4.5,0,Math.PI*2),l.fill()};f(36),f(934);const _=90,v=335,m=_+v,p=104,E=252;l.fillStyle="#78aee6",l.fillRect(p,_,E,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(p,_,E,v);const g=386;l.fillStyle="#78aee6",l.fillRect(g,_,E,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(g,_,E,v);const y=668;l.fillStyle="#78aee6",l.fillRect(y,_,E,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(y,_,E,v);const D=(x,B)=>{[{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:0},{dx:-1,dy:0}].forEach(({dx:lt,dy:xt})=>{l.fillStyle="#15803d",l.beginPath();const Vt=x+lt*72,re=B+xt*72,ne=-xt*16,qt=lt*16;l.moveTo(x+lt*24,B+xt*24),l.quadraticCurveTo(x+lt*46+ne,B+xt*46+qt,Vt,re),l.quadraticCurveTo(x+lt*46-ne,B+xt*46-qt,x+lt*24,B+xt*24),l.fill(),l.fillStyle="#166534",l.beginPath();const ue=x+lt*52+ne*1.5,we=B+xt*52+qt*1.5;l.moveTo(x+lt*22,B+xt*22),l.quadraticCurveTo(x+lt*34+ne*1.8,B+xt*34+qt*1.8,ue,we),l.quadraticCurveTo(x+lt*38+ne*.8,B+xt*38+qt*.8,x+lt*22,B+xt*22),l.fill(),l.beginPath();const nn=x+lt*52-ne*1.5,ke=B+xt*52-qt*1.5;l.moveTo(x+lt*22,B+xt*22),l.quadraticCurveTo(x+lt*34-ne*1.8,B+xt*34-qt*1.8,nn,ke),l.quadraticCurveTo(x+lt*38-ne*.8,B+xt*38-qt*.8,x+lt*22,B+xt*22),l.fill(),l.strokeStyle="#4ade80",l.lineWidth=1.8,l.beginPath(),l.moveTo(x+lt*26,B+xt*26),l.lineTo(Vt*.95+x*.05,re*.95+B*.05),l.stroke()}),[{dx:.707,dy:-.707},{dx:-.707,dy:-.707},{dx:.707,dy:.707},{dx:-.707,dy:.707}].forEach(({dx:lt,dy:xt})=>{l.fillStyle="#16a34a",l.beginPath();const Vt=x+lt*46,re=B+xt*46,ne=-xt*10,qt=lt*10;l.moveTo(x+lt*22,B+xt*22),l.quadraticCurveTo(x+lt*32+ne,B+xt*32+qt,Vt,re),l.quadraticCurveTo(x+lt*32-ne,B+xt*32-qt,x+lt*22,B+xt*22),l.fill()}),l.fillStyle="#facc15";for(let lt=0;lt<Math.PI*2;lt+=Math.PI/8)l.beginPath(),l.arc(x+Math.cos(lt)*27,B+Math.sin(lt)*27,4.5,0,Math.PI*2),l.fill();l.fillStyle="#facc15",l.beginPath(),l.arc(x,B,25,0,Math.PI*2),l.fill(),l.strokeStyle="#ca8a04",l.lineWidth=2,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.arc(x,B,14,0,Math.PI*2),l.fill(),l.fillStyle="#fef08a",l.beginPath(),l.arc(x,B,6,0,Math.PI*2),l.fill()};D(p+E*.5,_+v*.5),D(y+E*.5,_+v*.5),((x,B,K)=>{l.strokeStyle="#18181b",l.lineWidth=3.5,l.lineCap="round",l.beginPath(),l.moveTo(x-24,K),l.lineTo(x-30,K-5),l.moveTo(x-24,K),l.lineTo(x-18,K-5),l.moveTo(x-24,K),l.lineTo(x-22,K-22),l.lineTo(x-32,K-52),l.lineTo(x-18,K-80),l.stroke(),l.beginPath(),l.moveTo(x+12,K),l.lineTo(x+6,K-5),l.moveTo(x+12,K),l.lineTo(x+18,K-5),l.moveTo(x+12,K),l.lineTo(x+14,K-22),l.lineTo(x+24,K-52),l.lineTo(x+8,K-84),l.stroke(),[{tipX:x+72,tipY:B-25,midX:x+45,midY:B-8},{tipX:x+95,tipY:B-2,midX:x+56,midY:B+12},{tipX:x+104,tipY:B+24,midX:x+58,midY:B+32},{tipX:x+82,tipY:B+50,midX:x+48,midY:B+46}].forEach(({tipX:xt,tipY:Vt,midX:re,midY:ne})=>{l.fillStyle="#facc15",l.beginPath(),l.moveTo(x+16,B+30),l.quadraticCurveTo(re,ne-12,xt,Vt),l.quadraticCurveTo(xt+6,Vt+12,xt-12,Vt+18),l.quadraticCurveTo(re,ne+12,x+16,B+38),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(xt-18,Vt+4),l.quadraticCurveTo(xt-4,Vt-8,xt,Vt),l.quadraticCurveTo(xt+6,Vt+12,xt-12,Vt+18),l.quadraticCurveTo(xt-12,Vt+10,xt-18,Vt+4),l.closePath(),l.fill()}),l.fillStyle="#facc15",l.beginPath(),l.moveTo(x-36,B+44),l.quadraticCurveTo(x-2,B+72,x+34,B+46),l.quadraticCurveTo(x+8,B+22,x-36,B+44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(x-16,B-42),l.quadraticCurveTo(x-62,B-2,x-42,B+46),l.quadraticCurveTo(x+12,B+34,x+4,B-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(x-18,B-28),l.quadraticCurveTo(x+24,B-35,x+58,B-14),l.lineTo(x+52,B+12),l.quadraticCurveTo(x+14,B+18,x-22,B+12),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#38bdf8",[{x:x+58,y:B-14},{x:x+64,y:B+4},{x:x+52,y:B+18}].forEach(({x:xt,y:Vt})=>{l.beginPath(),l.ellipse(xt,Vt,9,6,-Math.PI/4,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=1.8,l.stroke()}),l.strokeStyle="#1e3a8a",l.lineWidth=2,l.beginPath(),l.moveTo(x-4,B-18),l.lineTo(x+42,B-8),l.moveTo(x-2,B-6),l.lineTo(x+44,B+4),l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(x-24,B-32),l.quadraticCurveTo(x-28,B-68,x-2,B-78),l.quadraticCurveTo(x+24,B-74,x+22,B-48),l.quadraticCurveTo(x+8,B-28,x-16,B-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.moveTo(x+20,B-58),l.quadraticCurveTo(x+36,B-54,x+44,B-42),l.quadraticCurveTo(x+28,B-42,x+18,B-44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.2,l.stroke(),l.beginPath(),l.moveTo(x+20,B-50),l.lineTo(x+42,B-43),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(x+6,B-58,8.5,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2,l.stroke(),l.fillStyle="#18181b",l.beginPath(),l.arc(x+8,B-58,4.2,0,Math.PI*2),l.fill(),l.fillStyle="#ffffff",l.beginPath(),l.arc(x+7,B-60,1.8,0,Math.PI*2),l.fill()})(g+E*.5,_+v*.52,m),l.fillStyle="#3b82f6",l.fillRect(20,m,984,45),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(20,m,984,45);const L=x=>{l.fillStyle="#94a3b8",l.fillRect(x,m+8,54,28),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(x,m+8,54,28),l.fillStyle="#334155",l.fillRect(x+22,m+4,10,36),l.fillStyle="#f8fafc",l.fillRect(x+6,m+18,6,8),l.fillRect(x+42,m+18,6,8)};L(205),L(485),L(765);const G=470;l.fillStyle="#4a90e2",l.beginPath(),l.moveTo(20,G),l.lineTo(20,580),l.lineTo(315,580),l.lineTo(365,635),l.lineTo(659,635),l.lineTo(709,580),l.lineTo(1004,580),l.lineTo(1004,G),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.stroke();const w=(x,B)=>{l.fillStyle="#18181b",l.fillRect(x-4,498,172,64),l.strokeStyle="#facc15",l.lineWidth=3,l.strokeRect(x-4,498,172,64),(B?["#f59e0b","#ef4444","#f8fafc"]:["#f8fafc","#ef4444","#f59e0b"]).forEach((bt,lt)=>{l.fillStyle=bt,l.fillRect(x+lt*54+2,504,50,52),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(x+lt*54+2,504,50,52),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(x+lt*54+6,508,42,6)})};w(118,!0),w(742,!1);const b=new fe(d);this.yellowPaint=new j({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new j({color:165063,roughness:.4,metalness:.3}),this.redPaint=new j({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new j({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new j({color:2040877,roughness:.8}),this.woodPlankMat=new j({color:7877903,roughness:.9}),this.tireMat=new j({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new j({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new Fs({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new ge({color:16777215}),this.taillightMat=new j({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new j({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new j({color:16119280,roughness:.65}),this.cowBrownMat=new j({color:9262372,roughness:.7}),this.cowBlackMat=new j({color:2236962,roughness:.75}),this.cowFawnMat=new j({color:12088115,roughness:.68}),this.hornMat=new j({color:3621201,roughness:.4}),this.snoutMat=new j({color:1974308,roughness:.8});const R=new Lt;R.name="truckBody",this.bodyGroup=R;const Z=new rt(1.9,.4,6),ot=new P(Z,this.chassisMat);ot.position.set(0,.65,.2),ot.castShadow=!0,R.add(ot);const O=new Lt;O.position.set(0,.6,-2.85),[-.3,0,.3].forEach(x=>{const B=new St(.06,.06,2.3,8);B.rotateZ(Math.PI/2);const K=new P(B,this.tealBumperMat);K.position.y=x,K.castShadow=!0,O.add(K)}),[-.95,-.45,.45,.95].forEach(x=>{const B=new rt(.08,.72,.08),K=new P(B,this.tealBumperMat);K.position.x=x,O.add(K)}),[-1.08,1.08].forEach(x=>{const B=new St(.03,.03,.9,6),K=new P(B,this.tealBumperMat);K.position.set(x,.35,0),O.add(K);const bt=new ie(.07,8,8),lt=new P(bt,this.redPaint);lt.position.set(x,.8,0),O.add(lt)});const z=document.createElement("canvas");z.width=256,z.height=80;const V=z.getContext("2d");V.fillStyle="#006633",V.fillRect(0,0,256,80),V.strokeStyle="#ffffff",V.lineWidth=4,V.strokeRect(4,4,248,72),V.fillStyle="#ffffff",V.font="bold 26px sans-serif",V.textAlign="center",V.fillText("যশোর-ট",128,34),V.fillText("০২-০৯৬৯",128,64);const J=new fe(z),et=new ee(.65,.22),X=new ge({map:J}),it=new P(et,X);it.position.set(0,-.15,.08),O.add(it),R.add(O);const q=new rt(1.85,.95,1.6),ut=new P(q,this.yellowPaint);ut.position.set(0,1.25,-2.05),ut.castShadow=!0,R.add(ut);const Y=new ee(1.65,.85),st=new j({map:n}),gt=new P(Y,st);gt.position.set(0,1.25,-2.86),R.add(gt),[-.68,.68].forEach(x=>{const B=new St(.16,.16,.06,16);B.rotateX(Math.PI/2);const K=new P(B,this.chassisMat);K.position.set(x,1.15,-2.87),R.add(K);const bt=new Hr(.13,16),lt=new P(bt,this.headlightMat);lt.position.set(x,1.15,-2.89),R.add(lt),this.headlights.push(lt);const xt=new x0(16772829,2.5,60,Math.PI/5,.5,1.2);xt.position.set(x,1.15,-2.9),xt.target.position.set(x*1.5,0,-35),R.add(xt),R.add(xt.target)}),[-.98,.98].forEach(x=>{const B=new rt(.24,.55,1.4),K=new P(B,this.chassisMat);K.position.set(x,.95,-1.95),K.castShadow=!0,R.add(K)});const Ct=new rt(2.1,1.45,1.55),Mt=new P(Ct,this.yellowPaint);Mt.position.set(0,1.75,-.6),Mt.castShadow=!0,R.add(Mt),[-1.06,1.06].forEach(x=>{const B=new rt(.04,1.35,1.4),K=new P(B,this.cyanBluePaint);K.position.set(x,1.75,-.6),R.add(K);const bt=new ee(.65,.55),lt=new P(bt,this.glassMat);lt.position.set(x>0?x+.03:x-.03,1.95,-.65),lt.rotation.y=x>0?Math.PI/2:-Math.PI/2,R.add(lt)});const Ot=new ee(1.85,.72),Ut=new P(Ot,this.glassMat);Ut.position.set(0,1.92,-1.39),R.add(Ut);const wt=new Lt;wt.position.set(0,2.65,-.85);const _t=new ee(2.15,.85),N=new j({map:o,roughness:.4}),dt=new P(_t,N);dt.position.set(0,0,-.55),wt.add(dt);const $=new rt(2.2,.15,1.4),ft=new P($,this.redPaint);ft.position.set(0,.45,.1),ft.castShadow=!0,wt.add(ft);const Q=new rt(2.24,.18,.08),It=new P(Q,this.yellowPaint);It.position.set(0,.38,-.58),wt.add(It),R.add(wt);const pt=new Lt;pt.position.set(0,1.6,1.6);const S=new rt(2.2,.12,3.4),M=new P(S,this.woodPlankMat);M.position.set(0,-.4,0),M.receiveShadow=!0,pt.add(M);const F=new j({map:u,roughness:.45});[-1.12,1.12].forEach(x=>{const B=new ee(3.4,1.15),K=new P(B,F);K.position.set(x,.25,0),K.rotation.y=x>0?Math.PI/2:-Math.PI/2,K.castShadow=!0,pt.add(K);const bt=new rt(.12,.12,3.4),lt=new P(bt,this.redPaint);lt.position.set(x,.85,0),pt.add(lt)});const tt=new rt(2.2,1.15,.1),at=new P(tt,this.redPaint);at.position.set(0,.25,-1.68),pt.add(at);const nt=new Lt;nt.position.set(0,0,1.68);const Dt=new rt(2.28,1.45,.08),vt=new j({color:4886754,roughness:.45}),At=new P(Dt,vt);At.position.set(0,.08,0),At.castShadow=!0,nt.add(At);const Ft=new ee(2.28,1.45),Pt=new j({map:b,roughness:.35,metalness:.15}),ct=new P(Ft,Pt);ct.position.set(0,.08,.045),nt.add(ct),[-1,1].forEach(x=>{const B=new _c;B.moveTo(0,0),B.lineTo(x*.18,.28),B.lineTo(0,.28),B.closePath();const K={depth:.08,bevelEnabled:!1},bt=new qr(B,K),lt=new j({color:1516884,roughness:.4}),xt=new P(bt,lt);xt.position.set(x*1.14,.68,-.04),nt.add(xt)}),[-.78,.78].forEach((x,B)=>{const K=B===0,bt=new P(new rt(.42,.16,.05),this.chassisMat);bt.position.set(x,-.42,.08),nt.add(bt);const lt=new P(new rt(.12,.12,.03),new j({color:16096779,emissive:14251782,emissiveIntensity:.3}));lt.position.set(K?x-.13:x+.13,-.42,.1),nt.add(lt);const xt=new P(new rt(.12,.12,.03),this.taillightMat);xt.position.set(x,-.42,.1),nt.add(xt),this.brakeLights.push(xt);const Vt=new P(new rt(.12,.12,.03),new j({color:16317180,roughness:.3}));Vt.position.set(K?x+.13:x-.13,-.42,.1),nt.add(Vt)}),[-.85,.85].forEach(x=>{const B=new P(new rt(.42,.44,.03),this.tireMat);B.position.set(x,-.8,.06),nt.add(B)}),pt.add(nt),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((x,B)=>{const K=this.createBedCow(x.mat,x.scale);K.position.set(x.x,.35,x.z),K.rotation.y=x.rotY,pt.add(K),this.cows.push({group:K,head:K.userData.head,baseRotX:K.userData.head.rotation.x,seed:B*1.5})}),R.add(pt);const Wt=this.createTruckWheel(.48,.26,!1);Wt.position.set(0,.42,.4),Wt.rotation.x=Math.PI/2,R.add(Wt);const kt=new St(.08,.08,.6,8);kt.rotateZ(Math.PI/2);const Nt=new P(kt,this.chassisMat);Nt.position.set(1.05,.48,-.8),R.add(Nt);const Rt=new Le(.22,1.2,12);Rt.rotateZ(-Math.PI/2);const Bt=new ge({color:16755200,transparent:!0,opacity:0}),Zt=new P(Rt,Bt);Zt.position.set(1.65,.48,-.8),R.add(Zt),this.exhaustFires.push(Zt),this.group.add(R);const se=.48,Ht=.52,mt=.32;[-1.02,1.02].forEach(x=>{const B=this.createTruckWheelAssembly(Ht,mt,x>0,!1);B.position.set(x,se,-1.95),this.group.add(B),this.wheels.push(B.userData.spinner),this.frontWheels.push(B)}),[-1.02,1.02].forEach(x=>{const B=this.createTruckWheelAssembly(Ht,mt,x>0,!0);B.position.set(x,se,1.85),this.group.add(B),this.wheels.push(B.userData.spinner)})}createBedCow(t,e=1){const n=new Lt;n.scale.set(e,e,e);const i=new rt(.85,.85,1.35),r=new P(i,t);r.position.set(0,.45,0),r.castShadow=!0,n.add(r);const a=new Le(.24,.38,8),o=new P(a,t);o.position.set(0,.95,-.32),o.rotation.x=-.2,n.add(o);const c=new Lt;c.position.set(0,.75,-.6),n.userData.head=c;const h=new rt(.42,.46,.62),u=new P(h,t);u.position.set(0,.22,-.35),c.add(u);const d=new rt(.32,.25,.25),l=new P(d,this.snoutMat);return l.position.set(0,.12,-.68),c.add(l),[-.18,.18].forEach(f=>{const _=new Le(.05,.3,6),v=new P(_,this.hornMat);v.position.set(f,.46,-.28),v.rotation.z=f>0?-.38:.38,v.rotation.x=.25,c.add(v);const m=new rt(.18,.07,.08),p=new P(m,t);p.position.set(f>0?.26:-.26,.32,-.25),p.rotation.z=f>0?-.35:.35,c.add(p)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const r=new Lt,a=new Lt;if(r.userData.spinner=a,r.add(a),i){const o=this.createTruckWheel(t,e*.75,n);o.position.x=n?.08:-.08,a.add(o);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,a.add(c)}else{const o=this.createTruckWheel(t,e,n);a.add(o)}return r}createTruckWheel(t,e,n){const i=new Lt,r=new St(t,t,e,24);r.rotateZ(Math.PI/2);const a=new P(r,this.tireMat);i.add(a);const o=new St(t*.65,t*.65,e+.02,18);o.rotateZ(Math.PI/2);const c=new P(o,this.rimMat);i.add(c);const h=new St(t*.28,t*.28,e+.05,12);h.rotateZ(Math.PI/2);const u=new P(h,this.chassisMat);return i.add(u),i}update(t,e,n,i,r,a){const o=t*1e3/3600,c=2*Math.PI*.52,h=o/c*(2*Math.PI)*a;this.wheelRotation-=h,this.wheels.forEach(p=>{p.rotation.x=this.wheelRotation});const u=n-this.group.position.x,d=-Math.max(-.35,Math.min(zt.STEERING.WHEEL_TURN_ANGLE,u*.35));this.frontWheels.forEach(p=>{p.rotation.y+=(d-p.rotation.y)*Math.min(1,a*12)});const l=Math.max(-.065,Math.min(.065,u*.065));this.currentRoll+=(l-this.currentRoll)*Math.min(1,a*10),this.bodyGroup.rotation.z=this.currentRoll;const f=Math.max(-.05,Math.min(.05,u*.05));this.currentYaw+=(f-this.currentYaw)*Math.min(1,a*10),this.bodyGroup.rotation.y=this.currentYaw;let _=0;i?_=.045:r&&(_=-.035),this.currentPitch+=(_-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const v=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(p=>{p.material=v}),this.exhaustFires.forEach(p=>{r?(p.material.opacity=.95,p.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),p.material.color.setHex(Math.random()>.4?16759552:16729088)):p.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(p=>{p.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(p=>{p.scale.set(1,1,1)});const m=performance.now()*.001;this.cows.forEach(p=>{const E=Math.sin(m*6.5+p.seed)*.08+(r?Math.sin(m*14+p.seed)*.05:0);p.head.rotation.x=p.baseRotX+E,p.head.rotation.y=Math.sin(m*2.2+p.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.45,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class L0{constructor(){this.group=new Lt,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new Lt,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new U(1.5,2.1,3.2),this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new Lt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=640;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,360);n.addColorStop(0,"#7dd3fc"),n.addColorStop(1,"#e0f2fe"),e.fillStyle=n,e.fillRect(0,0,1024,640);const i=(T,I,W)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(T,I,38*W,0,Math.PI*2),e.arc(T+42*W,I-14*W,48*W,0,Math.PI*2),e.arc(T+95*W,I-8*W,42*W,0,Math.PI*2),e.arc(T+135*W,I+8*W,32*W,0,Math.PI*2),e.fill()};i(80,120,1.1),i(720,100,.95);const r=512,a=270;for(let T=-Math.PI;T<=0;T+=Math.PI/18)e.beginPath(),e.moveTo(r,a),e.lineTo(r+Math.cos(T)*380,a+Math.sin(T)*380),e.lineTo(r+Math.cos(T+Math.PI/36)*380,a+Math.sin(T+Math.PI/36)*380),e.closePath(),e.fillStyle="rgba(245, 158, 11, 0.45)",e.fill();e.beginPath(),e.arc(r,a,78,Math.PI,0),e.fillStyle="#f59e0b",e.fill(),e.beginPath(),e.arc(r,a,52,Math.PI,0),e.fillStyle="#fde047",e.fill();const o=e.createLinearGradient(0,270,0,520);o.addColorStop(0,"#0284c7"),o.addColorStop(1,"#0369a1"),e.fillStyle=o,e.beginPath(),e.moveTo(0,270),e.lineTo(512,270),e.lineTo(470,520),e.lineTo(0,520),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=3.5;for(let T=290;T<510;T+=24)for(let W=20;W<440;W+=38*2)e.beginPath(),e.moveTo(W,T),e.quadraticCurveTo(W+38/2,T-5,W+38,T),e.stroke();e.fillStyle="#fde68a",e.beginPath(),e.moveTo(470,520),e.lineTo(512,270),e.lineTo(560,270),e.lineTo(530,520),e.closePath(),e.fill(),e.fillStyle="#16a34a",e.beginPath(),e.moveTo(520,270),e.lineTo(1024,270),e.lineTo(1024,520),e.lineTo(485,520),e.closePath(),e.fill();const c=(T,I)=>{e.strokeStyle="#854d0e",e.lineWidth=6,e.beginPath(),e.moveTo(T,I),e.quadraticCurveTo(T-15,I-60,T-25,I-110),e.stroke(),e.strokeStyle="#15803d",e.lineWidth=4;for(let W=0;W<Math.PI*2;W+=Math.PI/4)e.beginPath(),e.moveTo(T-25,I-110),e.quadraticCurveTo(T-25+Math.cos(W)*45,I-110+Math.sin(W)*40-15,T-25+Math.cos(W)*65,I-110+Math.sin(W)*40),e.stroke()};c(640,360),c(720,350),c(940,360),e.fillStyle="#fce7f3",e.fillRect(720,370,190,85),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(720,370,190,85),e.fillStyle="#dc2626",e.beginPath(),e.moveTo(705,370),e.lineTo(815,310),e.lineTo(925,370),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let T=720;T<910;T+=18)e.beginPath(),e.moveTo(T,370),e.lineTo(815,310),e.stroke();e.fillStyle="#374151",e.fillRect(785,395,35,60),e.fillRect(850,390,30,30),e.fillStyle="#f8fafc",e.fillRect(570,385,140,70),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(570,385,140,70),e.fillStyle="#2563eb",e.beginPath(),e.moveTo(555,385),e.lineTo(640,335),e.lineTo(725,385),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let T=570;T<710;T+=18)e.beginPath(),e.moveTo(T,385),e.lineTo(640,335),e.stroke();e.fillStyle="#1e3a8a",e.fillRect(620,405,30,50),e.fillStyle="#ea580c",e.fillRect(0,510,1024,45),e.fillStyle="#fde047";for(let T=20;T<1024;T+=40)e.beginPath(),e.arc(T,510,16,0,Math.PI),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2,e.stroke();e.fillStyle="#18181b",e.fillRect(0,555,1024,35);const h=["#dc2626","#ffffff","#16a34a","#fde047"];for(let T=0;T<48;T++)e.fillStyle=h[T%h.length],e.fillRect(T*22,558,14,29);const u=(T,I)=>{e.strokeStyle="#94a3b8",e.lineWidth=3,e.beginPath(),e.arc(T,I,8,0,Math.PI*2),e.stroke(),e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(T,I+8),e.bezierCurveTo(T+28,I+8,T+44,I+28,T,I+64),e.bezierCurveTo(T-44,I+28,T-28,I+8,T,I+8),e.closePath(),e.fill(),e.strokeStyle="#64748b",e.lineWidth=2.5,e.stroke(),e.fillStyle="#94a3b8",[[0,24],[-14,28],[14,28],[-8,42],[8,42],[0,52]].forEach(([W,ht])=>{e.beginPath(),e.arc(T+W,I+ht,3.2,0,Math.PI*2),e.fill()})};u(220,570),u(512,570),u(804,570);const d=new fe(t),l=document.createElement("canvas");l.width=1024,l.height=260;const f=l.getContext("2d"),_=f.createLinearGradient(0,0,0,260);_.addColorStop(0,"#f8fafc"),_.addColorStop(.5,"#e2e8f0"),_.addColorStop(1,"#94a3b8"),f.fillStyle=_,f.fillRect(0,0,1024,260),f.fillStyle="#475569";for(let T=30;T<1e3;T+=45)f.beginPath(),f.arc(T,24,7,0,Math.PI*2),f.fill(),f.beginPath(),f.arc(T-2,22,2.5,0,Math.PI*2),f.fillStyle="#ffffff",f.fill(),f.fillStyle="#475569",f.beginPath(),f.arc(T,236,7,0,Math.PI*2),f.fill(),f.beginPath(),f.arc(T-2,234,2.5,0,Math.PI*2),f.fillStyle="#ffffff",f.fill(),f.fillStyle="#475569";f.fillStyle="#f59e0b",f.strokeStyle="#dc2626",f.lineWidth=7,f.font="bold 82px sans-serif",f.textAlign="center",f.textBaseline="middle",f.strokeText("বাংলাদেশ",512,115),f.fillText("বাংলাদেশ",512,115),f.fillStyle="#16a34a",f.font="bold 78px sans-serif",f.fillText("বাংলাদেশ",512,113),f.fillStyle="#fef08a",f.font="bold 74px sans-serif",f.fillText("বাংলাদেশ",512,111);const v=["#dc2626","#16a34a","#f59e0b","#06b6d4","#ec4899"];for(let T=0;T<18;T++)f.beginPath(),f.arc(310+T*24,185,7.5,0,Math.PI*2),f.fillStyle=v[T%v.length],f.fill(),f.strokeStyle="#18181b",f.lineWidth=1.8,f.stroke();const m=(T,I)=>{f.beginPath(),f.arc(T,I,62,0,Math.PI*2),f.fillStyle="#cbd5e1",f.fill(),f.strokeStyle="#64748b",f.lineWidth=4,f.stroke(),f.beginPath(),f.arc(T,I,48,0,Math.PI*2),f.fillStyle="#dc2626",f.fill(),f.strokeStyle="#fde047",f.lineWidth=3,f.stroke(),f.fillStyle="#ffffff",f.font="bold 50px sans-serif",f.textAlign="center",f.textBaseline="middle",f.fillText("মা",T,I)};m(140,125),m(884,125);const p=new fe(l),E=document.createElement("canvas");E.width=1024,E.height=1024;const g=E.getContext("2d");g.beginPath(),g.moveTo(40,1024),g.lineTo(40,520),g.bezierCurveTo(40,60,984,60,984,520),g.lineTo(984,1024),g.closePath(),g.fillStyle="#dc2626",g.fill(),g.strokeStyle="#881337",g.lineWidth=12,g.stroke(),g.strokeStyle="#fde047",g.lineWidth=5,g.stroke(),g.fillStyle="#1d4ed8",g.fillRect(456,120,112,680),g.strokeStyle="#18181b",g.lineWidth=3,g.strokeRect(456,120,112,680),g.fillStyle="#ffffff",g.fillRect(498,120,28,680),g.beginPath(),g.arc(512,780,42,0,Math.PI*2),g.fillStyle="#dc2626",g.fill(),g.strokeStyle="#fde047",g.lineWidth=5,g.stroke(),g.fillStyle="#ffffff",g.font="bold 44px sans-serif",g.textAlign="center",g.textBaseline="middle",g.fillText("১",512,780);const y=(T,I,W,ht)=>{g.save(),g.translate(I,W),g.rotate(ht),g.font="bold 88px sans-serif",g.textAlign="center",g.textBaseline="middle",g.strokeStyle="#18181b",g.lineWidth=12,g.strokeText(T,0,0),g.fillStyle="#ffffff",g.fillText(T,0,0),g.restore()};y("মায়ের",310,240,-.22),y("দোয়া",714,240,.22);const D=(T,I)=>{g.save(),g.translate(T,500),I&&g.scale(-1,1),g.beginPath(),g.arc(70,-160,36,0,Math.PI*2),g.fillStyle="#fde047",g.fill(),g.strokeStyle="#18181b",g.lineWidth=3,g.stroke(),g.beginPath(),g.arc(70,-160,16,0,Math.PI*2),g.fillStyle="#ea580c",g.fill();for(let ht=0;ht<7;ht++){const Tt=-Math.PI/2+(ht-3)*.35;g.beginPath(),g.ellipse(80+Math.cos(Tt)*45,-50+Math.sin(Tt)*35,18,38,Tt,0,Math.PI*2),g.fillStyle="#ec4899",g.fill(),g.strokeStyle="#18181b",g.lineWidth=2.5,g.stroke()}g.beginPath(),g.arc(80,-50,24,0,Math.PI*2),g.fillStyle="#fef08a",g.fill(),g.stroke(),((ht,Tt)=>{g.fillStyle="#16a34a",g.beginPath(),g.ellipse(ht-30,Tt+20,16,32,.6,0,Math.PI*2),g.ellipse(ht+30,Tt+20,16,32,-.6,0,Math.PI*2),g.fill(),g.stroke(),g.fillStyle="#1d4ed8",g.beginPath(),g.arc(ht,Tt,55,0,Math.PI*2),g.fill(),g.strokeStyle="#18181b",g.lineWidth=3,g.stroke(),g.strokeStyle="#38bdf8",g.lineWidth=4,g.beginPath(),g.arc(ht,Tt,36,.4,Math.PI*1.6),g.stroke(),g.beginPath(),g.arc(ht,Tt,20,Math.PI,Math.PI*2.2),g.stroke(),g.fillStyle="#ffffff",g.beginPath(),g.arc(ht,Tt,10,0,Math.PI*2),g.fill()})(85,110),g.restore()};D(260,!1),D(764,!0);const C=new fe(E),L=document.createElement("canvas");L.width=512,L.height=128;const G=L.getContext("2d");G.fillStyle="#ffffff",G.fillRect(0,0,512,128),G.fillStyle="#dc2626";for(let T=-128;T<640;T+=36)G.beginPath(),G.moveTo(T,0),G.lineTo(T+18,0),G.lineTo(T+18+128,128),G.lineTo(T+128,128),G.closePath(),G.fill();const w=new fe(L),b=document.createElement("canvas");b.width=1024,b.height=1024;const R=b.getContext("2d");R.fillStyle="#f59e0b",R.fillRect(0,0,1024,1024),R.strokeStyle="rgba(234, 88, 12, 0.18)",R.lineWidth=3;for(let T=-1024;T<2048;T+=64)R.beginPath(),R.moveTo(T,0),R.lineTo(T+1024,1024),R.stroke(),R.beginPath(),R.moveTo(T,1024),R.lineTo(T+1024,0),R.stroke();R.fillStyle="#881337",R.fillRect(0,0,1024,140),R.fillRect(0,884,1024,140),R.fillStyle="#06b6d4",R.fillRect(0,140,1024,28),R.fillRect(0,856,1024,28),R.fillStyle="#10b981",R.fillRect(0,168,1024,16),R.fillRect(0,840,1024,16);for(let T=32;T<1024;T+=64)R.beginPath(),R.arc(T,140,16,0,Math.PI),R.fillStyle="#fde047",R.fill(),R.strokeStyle="#18181b",R.lineWidth=2.5,R.stroke(),R.beginPath(),R.arc(T,884,16,Math.PI,Math.PI*2),R.fillStyle="#fde047",R.fill(),R.strokeStyle="#18181b",R.lineWidth=2.5,R.stroke();[70,954].forEach(T=>{R.fillStyle="#ffffff",R.font="bold 44px sans-serif",R.textAlign="center",R.textBaseline="middle",R.shadowColor="rgba(0,0,0,0.8)",R.shadowBlur=8,R.fillText("মা বাবার দোয়া",512,T),R.shadowBlur=0}),((T,I)=>{R.strokeStyle="#ea580c",R.lineWidth=4;for(let W=0;W<Math.PI*2;W+=Math.PI/16)R.beginPath(),R.moveTo(T,I),R.lineTo(T+Math.cos(W)*260,I+Math.sin(W)*260),R.stroke();for(let W=0;W<16;W++){const ht=W*Math.PI/8,Tt=T+Math.cos(ht)*175,Gt=I+Math.sin(ht)*175;R.beginPath(),R.ellipse(Tt,Gt,42,65,ht+Math.PI/2,0,Math.PI*2),R.fillStyle=W%2===0?"#dc2626":"#0284c7",R.fill(),R.strokeStyle="#18181b",R.lineWidth=4,R.stroke()}for(let W=0;W<12;W++){const ht=W*Math.PI/6,Tt=T+Math.cos(ht)*115,Gt=I+Math.sin(ht)*115;R.beginPath(),R.ellipse(Tt,Gt,34,52,ht+Math.PI/2,0,Math.PI*2),R.fillStyle=W%2===0?"#ec4899":"#10b981",R.fill(),R.strokeStyle="#18181b",R.lineWidth=3.5,R.stroke()}R.beginPath(),R.arc(T,I,62,0,Math.PI*2),R.fillStyle="#fde047",R.fill(),R.strokeStyle="#18181b",R.lineWidth=4,R.stroke(),R.beginPath(),R.arc(T,I,32,0,Math.PI*2),R.fillStyle="#b91c1c",R.fill(),[-1,1].forEach(W=>{R.beginPath(),R.moveTo(T+W*160,I-60),R.bezierCurveTo(T+W*320,I-140,T+W*420,I-40,T+W*340,I+50),R.bezierCurveTo(T+W*280,I+120,T+W*200,I+60,T+W*180,I),R.fillStyle="#0d9488",R.fill(),R.strokeStyle="#18181b",R.lineWidth=4,R.stroke(),R.beginPath(),R.arc(T+W*320,I-30,28,0,Math.PI*2),R.fillStyle="#fde047",R.fill(),R.beginPath(),R.arc(T+W*320,I-30,16,0,Math.PI*2),R.fillStyle="#1e3a8a",R.fill()})})(512,512);const ot=(T,I)=>{const W=["#dc2626","#ec4899","#f59e0b","#10b981"];for(let ht=0;ht<8;ht++){const Tt=ht*Math.PI/4,Gt=T+Math.cos(Tt)*48,Xt=I+Math.sin(Tt)*48;R.beginPath(),R.arc(Gt,Xt,22,0,Math.PI*2),R.fillStyle=W[ht%W.length],R.fill(),R.strokeStyle="#18181b",R.lineWidth=2.5,R.stroke()}R.beginPath(),R.arc(T,I,26,0,Math.PI*2),R.fillStyle="#fde047",R.fill(),R.strokeStyle="#18181b",R.lineWidth=2.5,R.stroke(),R.beginPath(),R.arc(T,I,12,0,Math.PI*2),R.fillStyle="#991b1b",R.fill()};[120,904].forEach(T=>{ot(T,320),ot(T,704)});const O=new fe(b),z=document.createElement("canvas");z.width=256,z.height=256;const V=z.getContext("2d");V.fillStyle="#b91c1c",V.fillRect(0,0,256,256),V.strokeStyle="#fde047",V.lineWidth=3;for(let T=0;T<256;T+=32)V.beginPath(),V.moveTo(T,0),V.lineTo(T+32,256),V.stroke(),V.beginPath(),V.moveTo(256-T,0),V.lineTo(256-T-32,256),V.stroke();const J=new fe(z),et=document.createElement("canvas");et.width=512,et.height=256;const X=et.getContext("2d");X.fillStyle="#f59e0b",X.fillRect(0,0,512,256),X.fillStyle="#ea580c",X.beginPath(),X.arc(256,105,45,0,Math.PI*2),X.fill();for(let T=0;T<Math.PI*2;T+=Math.PI/8)X.fillStyle="#dc2626",X.beginPath(),X.arc(256+Math.cos(T)*62,105+Math.sin(T)*62,14,0,Math.PI*2),X.fill();X.fillStyle="#fde047",X.beginPath(),X.arc(256,105,26,0,Math.PI*2),X.fill(),X.fillStyle="#0d9488",X.fillRect(0,185,512,71),X.strokeStyle="#fde047",X.lineWidth=5;for(let T=-20;T<=530;T+=32)X.beginPath(),X.moveTo(T,185),X.lineTo(T+32,256),X.stroke(),X.beginPath(),X.moveTo(T+32,185),X.lineTo(T,256),X.stroke();const it=new fe(et),q=new j({color:14427686,metalness:.6,roughness:.3}),ut=new j({color:15658734,metalness:.9,roughness:.15}),Y=new j({color:2040865,roughness:.9}),st=new j({color:165063,metalness:.5,roughness:.4}),gt=new j({color:1409085,roughness:.6}),Ct=new j({map:d,roughness:.4}),Mt=new j({map:p,roughness:.35,metalness:.1}),Ot=new j({map:C,roughness:.6,transparent:!0,side:Ie}),Ut=new j({map:w,roughness:.45,metalness:.1}),wt=new j({map:it,roughness:.5,side:Ie}),_t=new j({map:O,roughness:.7,side:Ie}),N=new j({map:J,roughness:.6}),dt=new Lt,$=new St(.045,.045,1.8,12);$.rotateX(Math.PI/2);const ft=new P($,q);ft.position.set(0,.65,.1),dt.add(ft);const Q=new St(.04,.04,.95,12);Q.rotateX(-.18);const It=new P(Q,q);It.position.set(0,.95,-.9),dt.add(It),[-.1,.1].forEach(T=>{const I=new St(.025,.02,.7,8);I.rotateX(.15);const W=new P(I,ut);W.position.set(T,.48,-1.02),dt.add(W)});const pt=new St(.025,.025,.75,12);pt.rotateZ(Math.PI/2);const S=new P(pt,ut);S.position.set(0,1.35,-.85),dt.add(S),[-.38,.38].forEach(T=>{const I=new St(.032,.032,.14,12);I.rotateZ(Math.PI/2);const W=new P(I,Y);W.position.set(T,1.35,-.85),dt.add(W)});const M=new ie(.09,14,14);M.scale(1,1,.7);const F=new P(M,new ge({color:16777215}));F.position.set(0,1.05,-1.08),dt.add(F),this.headlights.push(F);const tt=new ie(.05,12,12);this.bellMesh=new P(tt,ut),this.bellMesh.position.set(-.24,1.4,-.85),dt.add(this.bellMesh);const at=new rt(.26,.08,.32),nt=new P(at,Y);nt.position.set(0,1.08,-.15),dt.add(nt),[-.08,.08].forEach(T=>{const I=new St(.02,.02,.12,8),W=new P(I,ut);W.position.set(T,.98,-.15),dt.add(W)});const Dt=new St(.06,.06,.28,12);Dt.rotateZ(Math.PI/2);const vt=new P(Dt,ut);vt.position.set(0,.52,-.15),dt.add(vt),this.bodyGroup.add(dt),this.frontWheel=this.createRickshawWheel(.42,q,ut,Y),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const At=new St(.46,.46,.12,16,1,!0,0,Math.PI*.8);At.rotateZ(Math.PI/2);const Ft=new P(At,st);Ft.position.set(0,.44,-1.05),this.bodyGroup.add(Ft),[-.78,.78].forEach(T=>{const I=this.createRickshawWheel(.48,q,ut,Y);I.position.set(T,.48,.95),this.bodyGroup.add(I),this.wheels.push(I);const W=new St(.53,.53,.16,20,1,!0,0,Math.PI);W.rotateZ(Math.PI/2);const ht=new P(W,Ut);ht.position.set(T,.48,.95),this.bodyGroup.add(ht)});const Pt=new Lt,ct=new rt(1.25,.08,1.25),Jt=new P(ct,gt);Jt.position.set(0,.65,.75),Pt.add(Jt);const Wt=new rt(.9,.05,.5),kt=new P(Wt,gt);kt.position.set(0,.48,.35),Pt.add(kt);const Nt=new rt(1.2,.38,.58),Rt=new P(Nt,gt);Rt.position.set(0,.86,.88),Pt.add(Rt),[-.62,.62].forEach((T,I)=>{const W=new ee(1.15,.52),ht=new P(W,wt);ht.position.set(T,.96,.75),ht.rotation.y=I===0?-Math.PI/2:Math.PI/2,Pt.add(ht)});const Bt=new rt(1.18,.14,.56),Zt=new P(Bt,N);Zt.position.set(0,1.08,.88),Pt.add(Zt);const se=new rt(1.16,.22,.1),Ht=new P(se,N);Ht.position.set(0,1.15,1.08),Pt.add(Ht),[-.58,.58].forEach(T=>{const I=new rt(.08,.28,.6),W=new P(I,st);W.position.set(T,1.22,.88),Pt.add(W)});const mt=new ee(1.06,.54),x=new P(mt,Ct);x.position.set(0,.66,1.18),x.rotation.y=Math.PI,Pt.add(x);const B=new ee(1.08,.19),K=new P(B,Mt);K.position.set(0,.96,1.185),K.rotation.y=Math.PI,Pt.add(K);const bt=new ee(1.22,.82),lt=new P(bt,Ot);lt.position.set(0,1.5,1.11),lt.rotation.y=Math.PI,Pt.add(lt),[-.78,.78].forEach(T=>{const I=new P(new St(.055,.055,.035,12),ut);I.rotateX(Math.PI/2),I.position.set(T,.62,1.16),Pt.add(I);const W=new ie(.048,12,12),ht=new P(W,new ge({color:15680580}));ht.position.set(T,.62,1.18),Pt.add(ht),this.brakeLights.push(ht)});const xt=new St(.7,.7,.96,24,1,!0,-Math.PI/2,Math.PI);xt.rotateX(-Math.PI/2);const Vt=new P(xt,_t);Vt.position.set(0,1.5,.62),Pt.add(Vt);const re=new _n(.7,.022,8,24,Math.PI),ne=new P(re,q);ne.position.set(0,1.5,.14),Pt.add(ne);for(let T=0;T<=14;T++){const I=T*Math.PI/14,W=Math.cos(I)*.7,ht=1.5+Math.sin(I)*.7,Tt=new P(new ie(.022,6,6),new j({color:14427686,roughness:.8}));Tt.position.set(W,ht-.02,.14),Pt.add(Tt)}const qt=new _n(.7,.025,8,24,Math.PI),ue=new P(qt,q);ue.position.set(0,1.5,1.1),Pt.add(ue);for(let T=0;T<=14;T++){const I=T*Math.PI/14,W=Math.cos(I)*.7,ht=1.5+Math.sin(I)*.7,Tt=new P(new ie(.022,6,6),new j({color:14427686,roughness:.8}));Tt.position.set(W,ht-.02,1.1),Pt.add(Tt)}const we=new St(.7,.7,.12,24,1,!0,-Math.PI/2,Math.PI);we.rotateX(-Math.PI/2);const nn=new P(we,_t);nn.position.set(0,1.5,1.04),Pt.add(nn),[-.7,.7].forEach((T,I)=>{const W=new ee(.82,.36),ht=new P(W,_t);ht.position.set(T,1.34,.65),ht.rotation.y=I===0?-Math.PI/2:Math.PI/2,Pt.add(ht);const Tt=new P(new St(.012,.012,.78,8),ut);Tt.position.set(T+(I===0?-.015:.015),1.34,.65),Tt.rotation.x=.45,Pt.add(Tt);const Gt=new P(new St(.012,.012,.78,8),ut);Gt.position.set(T+(I===0?-.015:.015),1.34,.65),Gt.rotation.x=-.45,Pt.add(Gt);const Xt=new P(new ie(.022,8,8),q);Xt.position.set(T+(I===0?-.025:.025),1.34,.65),Pt.add(Xt)}),[-.64,.64].forEach(T=>{const I=new St(.016,.016,1.15,8);I.rotateX(.42);const W=new P(I,q);W.position.set(T,1.4,.6),Pt.add(W)}),this.bodyGroup.add(Pt);const ke=new Lt,ln=new j({color:165063,roughness:.8}),Sn=new j({color:9262372,roughness:.7}),sn=new j({color:1409085,roughness:.9}),Ze=new rt(.36,.48,.22),rn=new P(Ze,ln);rn.position.set(0,1.42,-.25),rn.rotation.x=.22,ke.add(rn);const $n=new ie(.12,14,14),Dn=new P($n,Sn);Dn.position.set(0,1.74,-.32),ke.add(Dn);const Un=new _n(.11,.035,8,16);Un.rotateX(Math.PI/2);const A=new P(Un,new j({color:14427686}));A.position.set(0,1.68,-.32),ke.add(A),[-.18,.18].forEach(T=>{const I=new St(.04,.035,.52,8);I.rotateX(.75);const W=new P(I,Sn);W.position.set(T,1.42,-.52),ke.add(W)});const k=new rt(.38,.44,.32),H=new P(k,sn);H.position.set(0,1.05,-.18),ke.add(H),this.bodyGroup.add(ke),this.buildCuteRomanticCouple(),[-.32,.32].forEach(T=>{const I=new Le(.12,.65,8);I.rotateX(-Math.PI/2);const W=new ge({color:16759552,transparent:!0,opacity:0}),ht=new P(I,W);ht.position.set(T,.58,1.25),this.bodyGroup.add(ht),this.exhaustFires.push(ht)})}createRickshawWheel(t,e,n,i){const r=new Lt,a=new _n(t,.038,14,36);a.rotateY(Math.PI/2);const o=new P(a,i);r.add(o);const c=new _n(t*.92,.02,10,36);c.rotateY(Math.PI/2);const h=new P(c,n);r.add(h);const u=new St(.06,.06,.14,14);u.rotateZ(Math.PI/2);const d=new P(u,e);r.add(d);for(let l=0;l<14;l++){const f=l*Math.PI/7,_=new St(.005,.005,t*1.84,4);_.rotateX(f);const v=new P(_,n);r.add(v)}return r}buildCuteRomanticCouple(){this.coupleGroup=new Lt,this.coupleGroup.position.set(0,0,0);const t=new j({color:16106390,roughness:.6}),e=new j({color:1841431,roughness:.5}),n=new j({color:986638,roughness:.4}),i=new j({color:15680580,roughness:.7}),r=new j({color:1976635,roughness:.8}),a=new j({color:15485081,roughness:.6}),o=new j({color:16638023,roughness:.7}),c=new j({color:16777215,roughness:.8}),h=new Lt;h.position.set(-.25,1.18,.82);const u=new rt(.32,.42,.24),d=new P(u,i);d.position.set(0,.22,0),d.rotation.y=.16,d.rotation.z=-.06,h.add(d);const l=new ie(.12,14,14),f=new P(l,t);f.position.set(.02,.52,.02),f.rotation.y=.26,f.rotation.z=-.08,h.add(f);const _=new ie(.13,14,14);_.scale(1.02,1.05,1.02);const v=new P(_,e);v.position.set(.02,.55,.01),h.add(v);const m=new rt(.28,.18,.48),p=new P(m,r);p.position.set(0,-.05,-.16),h.add(p);const E=new St(.04,.035,.38,8);E.rotateZ(.25);const g=new P(E,i);g.position.set(-.22,.18,0),h.add(g);const y=new St(.04,.035,.34,8);y.rotateZ(-Math.PI/4),y.rotateX(-.18);const D=new P(y,i);D.position.set(.18,.14,-.07),h.add(D),this.coupleGroup.add(h);const C=new Lt;C.position.set(.25,1.18,.82);const L=new rt(.28,.38,.22),G=new P(L,a);G.position.set(0,.2,0),G.rotation.y=-.18,G.rotation.z=.08,C.add(G);const w=new rt(.32,.35,.24),b=new P(w,o);b.position.set(0,.22,.02),C.add(b);const R=new ie(.11,14,14),Z=new P(R,t);Z.position.set(-.02,.48,.02),Z.rotation.y=-.3,Z.rotation.z=.1,C.add(Z);const ot=new ie(.12,14,14);ot.scale(1.04,1.06,1.08);const O=new P(ot,n);O.position.set(-.02,.51,0),C.add(O);const z=new St(.04,.02,.32,8);z.rotateX(-.4);const V=new P(z,n);V.position.set(-.01,.38,.15),C.add(V);const J=new rt(.26,.16,.46),et=new P(J,c);et.position.set(0,-.05,-.16),C.add(et);const X=new St(.035,.03,.35,8);X.rotateZ(-.25),X.rotateX(-.25);const it=new P(X,a);it.position.set(.2,.16,-.05),C.add(it);const q=new Lt,ut=new St(.007,.007,.32,6),Y=new j({color:1409085,roughness:.8}),st=new P(ut,Y);st.position.set(0,.14,0),q.add(st);const gt=new rt(.07,.012,.035),Ct=new P(gt,Y);Ct.position.set(.035,.12,0),Ct.rotation.z=.3,q.add(Ct);const Mt=new P(gt,Y);Mt.position.set(-.035,.18,0),Mt.rotation.z=-.3,q.add(Mt);const Ot=new j({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Ut=new P(new Xr(.055,1),Ot);Ut.position.set(0,.3,0),Ut.scale.set(1.1,1.25,1.1),q.add(Ut);const wt=new P(new ie(.038,8,8),new j({color:10033947,roughness:.3}));wt.position.set(0,.32,0),q.add(wt),q.position.set(.22,.22,-.15),q.rotation.x=-.35,q.rotation.z=-.22,C.add(q);const _t=new St(.035,.03,.32,8);_t.rotateZ(Math.PI/4),_t.rotateX(-.18);const N=new P(_t,a);N.position.set(-.17,.14,-.07),C.add(N),this.coupleGroup.add(C);const dt=new Lt;dt.position.set(0,1.28,.74);const $=new P(new ie(.045,10,10),t);$.scale.set(1.3,.9,1.1),$.position.set(-.02,0,0),dt.add($);const ft=new P(new ie(.042,10,10),t);ft.scale.set(1.2,.85,1.05),ft.position.set(.02,.01,.01),dt.add(ft),this.coupleGroup.add(dt),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,r,a){const c=t*1e3/3600/.42*a;this.wheelRotation-=c,this.wheels.forEach(m=>{m.rotation.x=this.wheelRotation});const h=n-e,u=-h*.12;this.currentRoll+=(u-this.currentRoll)*Math.min(1,a*7),this.bodyGroup.rotation.z=this.currentRoll;const d=-h*.08;this.currentYaw+=(d-this.currentYaw)*Math.min(1,a*6),this.bodyGroup.rotation.y=this.currentYaw;let l=0;i?l=.04:r&&(l=-.05),this.currentPitch+=(l-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const f=performance.now()*.001,_=Math.min(1,t/80),v=Math.sin(f*8.5)*.025*_;this.coupleGroup.position.y=v,this.coupleGroup.rotation.z=Math.sin(f*4.2)*.015*_,this.exhaustFires.forEach(m=>{r?(m.material.opacity=.9,m.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):m.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(m=>m.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(m=>m.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.15,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class I0{constructor(){this.group=new Lt,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new U(1.38,1.82,2.65),this.buildCNG(),this.group.scale.set(.92,.92,.92)}buildCNG(){this.bodyGroup=new Lt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.fillStyle="#18221b",e.fillRect(0,0,1024,480),e.fillStyle="rgba(255, 255, 255, 0.025)";for(let S=0;S<1024;S+=4)e.fillRect(S,0,2,480);for(let S=0;S<480;S+=4)e.fillRect(0,S,1024,2);e.fillStyle="#fde047",e.strokeStyle="#dc2626",e.lineWidth=6,e.font="900 66px sans-serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.85)",e.shadowBlur=8,e.strokeText("আল্লাহ সর্বশক্তিমান",512,115),e.fillText("আল্লাহ সর্বশক্তিমান",512,115),e.shadowBlur=0,e.fillStyle="#ffffff",e.font="bold 20px monospace",e.fillText("P/01199806111/222/888",512,168),e.fillStyle="#facc15",e.beginPath(),e.moveTo(45,120),e.lineTo(135,120),e.lineTo(45,210),e.closePath(),e.fill(),e.strokeStyle="#18181b",e.lineWidth=3,e.stroke(),e.fillStyle="#dc2626",e.font="bold 18px sans-serif",e.fillText("রোড",75,155),e.fillStyle="#ffffff",e.fillRect(860,135,125,48),e.strokeStyle="#0284c7",e.lineWidth=3,e.strokeRect(860,135,125,48),e.fillStyle="#0284c7",e.font="bold 15px sans-serif",e.fillText("AnyTolet.com",922,162);const n=145,i=195,r=734,a=210,o=32;e.fillStyle="#0f172a",e.beginPath(),e.roundRect(n-12,i-12,r+24,a+24,o+8),e.fill(),e.fillStyle="#1e293b",e.beginPath(),e.roundRect(n,i,r,a,o),e.fill(),e.strokeStyle="#16a34a",e.lineWidth=3.5;const c=28;for(let S=n-a;S<=n+r+a;S+=c)e.beginPath(),e.moveTo(S,i),e.lineTo(S+a,i+a),e.stroke(),e.beginPath(),e.moveTo(S,i+a),e.lineTo(S+a,i),e.stroke();e.strokeStyle="#15803d",e.lineWidth=6;for(let S=n+50;S<=n+r-50;S+=75)e.beginPath(),e.moveTo(S,i),e.lineTo(S,i+a),e.stroke();e.fillStyle="#dc2626",e.fillRect(165,345,335,115),e.strokeStyle="#ffffff",e.lineWidth=3,e.strokeRect(165,345,335,115),e.fillStyle="#ffffff",e.font="bold 22px sans-serif",e.fillText("সি এন জি-তে চলি",332,385),e.fillStyle="#fef08a",e.font="bold 18px sans-serif",e.fillText("ভাড়া মিটারে দিন!",332,425),e.fillStyle="#f59e0b",e.fillRect(525,330,345,135),e.strokeStyle="#0284c7",e.lineWidth=3,e.strokeRect(525,330,345,135),e.fillStyle="#ea580c",e.fillRect(815,345,32,95),e.fillStyle="#fde047",e.beginPath(),e.arc(600,385,28,0,Math.PI*2),e.arc(660,385,32,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="900 24px sans-serif",e.fillText("MANGO",730,375),e.font="bold 16px sans-serif",e.fillText("COOL FRESH JUICE",730,410),e.fillStyle="#f8fafc",e.font="bold 48px sans-serif",e.fillText("★",170,275),e.fillStyle="#15803d",e.fillRect(0,480,1024,544),e.fillStyle="#14532d",e.fillRect(0,476,1024,10),e.fillStyle="#22c55e",e.fillRect(0,486,1024,3);const h=[["#f8fafc","#facc15"],["#dc2626","#facc15"],["#0284c7","#facc15"],["#16a34a","#dc2626"]];for(let S=0;S<4;S++){const M=545+S*65,F=h[S][0],tt=h[S][1];e.fillStyle="#14532d",e.fillRect(175,M-4,275,46),e.fillStyle=F,e.fillRect(180,M,135,38),e.fillStyle=tt,e.fillRect(315,M,130,38),e.strokeStyle="#18181b",e.lineWidth=2.5,e.strokeRect(180,M,265,38),e.fillStyle="#14532d",e.fillRect(569,M-4,275,46),e.fillStyle=tt,e.fillRect(574,M,130,38),e.fillStyle=F,e.fillRect(704,M,135,38),e.strokeStyle="#18181b",e.lineWidth=2.5,e.strokeRect(574,M,265,38)}e.fillStyle="#14532d",e.beginPath(),e.roundRect(240,630,544,48,8),e.fill(),e.strokeStyle="#facc15",e.lineWidth=3,e.stroke(),e.fillStyle="#ffffff",e.font="bold 30px sans-serif",e.fillText("সাবধান, পিছনে ইঞ্জিন",512,655),e.fillStyle="#ffffff",e.beginPath(),e.roundRect(125,835,175,75,8),e.fill(),e.strokeStyle="#dc2626",e.lineWidth=5,e.stroke(),e.fillStyle="#dc2626",e.font="900 48px sans-serif",e.fillText("থামুন",212,880),e.fillStyle="#047857",e.beginPath(),e.roundRect(724,825,175,85,8),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=3.5,e.stroke(),e.fillStyle="#ffffff",e.font="bold 22px sans-serif",e.fillText("ঢাকা মেট্রো-থ",811,855),e.font="bold 28px sans-serif",e.fillText("১১-০৮২৬",811,890),e.fillStyle="#94a3b8",e.fillRect(492,530,40,45),e.fillStyle="#ca8a04",e.fillRect(496,565,32,35);const u=new fe(t),d=document.createElement("canvas");d.width=512,d.height=512;const l=d.getContext("2d");l.fillStyle="#18221b",l.fillRect(0,0,512,230),l.fillStyle="#ffffff",l.fillRect(0,230,512,55),l.strokeStyle="#0284c7",l.lineWidth=3,l.strokeRect(0,230,512,55),l.fillStyle="#0284c7",l.font="900 36px sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText("সি.এন.জি চালিত",256,258),l.fillStyle="#15803d",l.fillRect(0,285,512,227),l.fillStyle="#facc15",l.fillRect(20,395,472,8),l.strokeStyle="#16a34a",l.lineWidth=3;for(let S=30;S<=480;S+=32)l.beginPath(),l.moveTo(S,15),l.lineTo(S,225),l.stroke();l.strokeStyle="#14532d",l.lineWidth=6;for(let S=35;S<=215;S+=45)l.beginPath(),l.moveTo(20,S),l.lineTo(492,S),l.stroke();const f=new fe(d),_=document.createElement("canvas");_.width=512,_.height=256;const v=_.getContext("2d");v.fillStyle="#1e293b",v.fillRect(0,0,512,256);const m=(S,M,F)=>{v.fillStyle="#94a3b8",v.beginPath(),v.arc(S,M,F+5,0,Math.PI*2),v.fill();const tt=v.createRadialGradient(S,M,4,S,M,F);tt.addColorStop(0,"#ffffff"),tt.addColorStop(.5,"#e2e8f0"),tt.addColorStop(1,"#64748b"),v.fillStyle=tt,v.beginPath(),v.arc(S,M,F,0,Math.PI*2),v.fill()};m(105,140,52),m(407,140,52),v.fillStyle="#047857",v.beginPath(),v.roundRect(165,20,182,54,6),v.fill(),v.strokeStyle="#ffffff",v.lineWidth=2.5,v.stroke(),v.fillStyle="#ffffff",v.font="bold 22px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillText("ঢাকা মেট্রো",256,47),v.fillStyle="#f59e0b",v.fillRect(75,30,48,22),v.fillRect(389,30,48,22);const p=new fe(_),E=new j({color:1409085,metalness:.25,roughness:.35}),g=new j({color:1581595,roughness:.88,metalness:.05}),y=new j({color:1976635,roughness:.7}),D=new j({color:15857145,metalness:.92,roughness:.12}),C=new j({color:2040865,roughness:.92}),L=new j({color:9741240,metalness:.65,roughness:.28}),G=new Fs({color:988970,transparent:!0,opacity:.52,roughness:.08,transmission:.6}),w=new j({map:u,roughness:.45,metalness:.12}),b=new j({map:f,roughness:.42}),R=new j({map:p,roughness:.4}),Z=new rt(1.36,.32,2.52),ot=new P(Z,E);ot.position.set(0,.38,0),ot.receiveShadow=!0,this.bodyGroup.add(ot);const O=new Lt,z=new St(.72,.72,2.15,24,1,!0,Math.PI*.14,Math.PI*.72);z.rotateZ(Math.PI/2);const V=new P(z,g);V.position.set(0,1.68,.12),O.add(V),[-.69,.69].forEach((S,M)=>{const F=new P(new ee(2.05,1.25),b);F.position.set(S,1.15,.18),F.rotation.y=M===0?-Math.PI/2:Math.PI/2,O.add(F)}),this.bodyGroup.add(O);const J=new Lt;J.position.set(0,0,1.26);const et=new P(new ee(1.36,1.45),w);et.position.set(0,1.08,.02),et.rotation.y=Math.PI,J.add(et),[-.56,.56].forEach(S=>{const M=new P(new rt(.1,.14,.04),new ge({color:15680580}));M.position.set(S,.88,.05),J.add(M),this.brakeLights.push(M);const F=new P(new rt(.1,.09,.04),new ge({color:16096779}));F.position.set(S,.74,.05),J.add(F);const tt=new j({color:9741240,metalness:.8,roughness:.3});[-.05,.05].forEach(at=>{const nt=new P(new St(.007,.007,.28,6),tt);nt.position.set(S+at,.81,.08),J.add(nt)}),[.72,.81,.92].forEach(at=>{const nt=new P(new St(.007,.007,.14,6),tt);nt.rotateZ(Math.PI/2),nt.position.set(S,at,.08),J.add(nt)})});const X=new Lt,it=new St(.032,.032,1.48,12);it.rotateZ(Math.PI/2);const q=new P(it,E);q.position.set(0,.34,.12),X.add(q),[-.72,.72].forEach((S,M)=>{const F=new St(.03,.03,.26,10);F.rotateX(Math.PI/2);const tt=new P(F,E);tt.position.set(S,.34,.01),X.add(tt);const at=new St(.024,.024,.22,8),nt=new P(at,E);nt.position.set(S*.82,.42,.08),X.add(nt)});const ut=new P(new St(.045,.045,.65,12),new j({color:9741240,metalness:.85,roughness:.25}));ut.rotateZ(Math.PI/2),ut.position.set(-.25,.22,.06),X.add(ut),[-.56,.56].forEach(S=>{const M=new P(new rt(.24,.22,.02),C);M.position.set(S,.18,.04),X.add(M)}),J.add(X),this.bodyGroup.add(J);const Y=new Lt,st=new St(.48,.7,.78,16,1,!1,-Math.PI/2,Math.PI);st.rotateX(Math.PI/2);const gt=new P(st,E);gt.position.set(0,.65,-1.15),Y.add(gt);const Ct=new P(new ee(.88,.44),R);Ct.position.set(0,.76,-1.48),Y.add(Ct),[-.26,.26].forEach(S=>{const M=new P(new _n(.1,.02,10,20),D);M.position.set(S,.72,-1.49),Y.add(M);const F=new P(new ie(.09,12,12,0,Math.PI*2,0,Math.PI*.4),new ge({color:16777215}));F.rotateX(-Math.PI/2),F.position.set(S,.72,-1.49),Y.add(F),this.headlights.push(F)});const Mt=new P(new rt(1.32,.66,.04),new j({color:1579035,roughness:.85}));Mt.position.set(0,1.34,-.84),Mt.rotation.x=-.26,Y.add(Mt);const Ot=new P(new ee(1.24,.58),G);Ot.position.set(0,1.34,-.86),Ot.rotation.x=-.26,Y.add(Ot);const Ut=new P(new rt(.018,.38,.015),y);Ut.position.set(.1,1.34,-.88),Ut.rotation.x=-.26,Ut.rotation.z=.52,Y.add(Ut),[-.72,.72].forEach((S,M)=>{const F=new P(new St(.012,.012,.3,6),y);F.rotateZ(M===0?.65:-.65),F.position.set(S,1.5,-.8),Y.add(F);const tt=new P(new St(.075,.075,.02,12),y);tt.rotateX(Math.PI/2),tt.position.set(M===0?S-.14:S+.14,1.58,-.8),Y.add(tt)}),this.bodyGroup.add(Y);const wt=new Lt,_t=new P(new rt(.5,.22,.4),y);_t.position.set(0,.78,-.38),wt.add(_t);const N=new P(new St(.018,.018,.58,8),D);N.rotateZ(Math.PI/2),N.position.set(0,1.02,-.62),wt.add(N);const dt=new P(new rt(.36,.45,.22),new j({color:165063,roughness:.8}));dt.position.set(0,1.15,-.36),wt.add(dt);const $=new P(new ie(.11,12,12),new j({color:9262372,roughness:.7}));$.position.set(0,1.48,-.36),wt.add($);const ft=new P(new rt(1.24,.25,.52),new j({color:2042167,roughness:.65}));ft.position.set(0,.78,.65),wt.add(ft),this.bodyGroup.add(wt),this.frontWheel=this.createCNGWheel(.28,C,L),this.frontWheel.position.set(0,.28,-1.25),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const Q=new St(.33,.33,.2,16,1,!0,0,Math.PI);Q.rotateZ(Math.PI/2);const It=new P(Q,E);It.position.set(0,.32,-1.25),this.bodyGroup.add(It);const pt=new P(new St(.038,.038,.48,8),D);pt.position.set(0,.58,-1.25),this.bodyGroup.add(pt),[-.62,.62].forEach(S=>{const M=this.createCNGWheel(.3,C,L);M.position.set(S,.3,.75),this.bodyGroup.add(M),this.wheels.push(M);const F=new St(.35,.35,.22,16,1,!0,0,Math.PI);F.rotateZ(Math.PI/2);const tt=new P(F,E);tt.position.set(S,.34,.75),this.bodyGroup.add(tt)}),[-.28,.28].forEach(S=>{const M=new Le(.11,.72,8);M.rotateX(-Math.PI/2);const F=new ge({color:440020,transparent:!0,opacity:0}),tt=new P(M,F);tt.position.set(S,.36,1.38),this.bodyGroup.add(tt),this.exhaustFires.push(tt)})}createCNGWheel(t,e,n){const i=new Lt,r=new St(t,t,.18,18);r.rotateZ(Math.PI/2);const a=new P(r,e);i.add(a);const o=new St(t*.65,t*.65,.19,14);o.rotateZ(Math.PI/2);const c=new P(o,n);i.add(c);const h=new St(t*.26,t*.26,.2,10);h.rotateZ(Math.PI/2);const u=new P(h,new j({color:1579035,roughness:.6}));return i.add(u),i}update(t,e,n,i,r,a){const c=t*1e3/3600/.28*a;this.wheelRotation-=c,this.wheels.forEach(f=>{f.rotation.x=this.wheelRotation});const h=n-e,u=-h*.15;this.currentRoll+=(u-this.currentRoll)*Math.min(1,a*8.5),this.bodyGroup.rotation.z=this.currentRoll;const d=-h*.1;this.currentYaw+=(d-this.currentYaw)*Math.min(1,a*7.5),this.bodyGroup.rotation.y=this.currentYaw;let l=0;i?l=.05:r&&(l=-.045),this.currentPitch+=(l-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch,this.brakeLights.forEach(f=>{f.material.color.setHex(i?16711680:15680580)}),this.exhaustFires.forEach(f=>{r?(f.material.opacity=.95,f.scale.set(1.2+Math.random()*.4,1.2+Math.random()*.5,1.2+Math.random()*.4),f.material.color.setHex(Math.random()>.4?440020:3718648)):f.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(f=>f.scale.set(1.4,1.4,1.4))):this.headlights.forEach(f=>f.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=.9,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.45,this.bodyGroup.rotation.y=.5,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class D0{constructor(){this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[]}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let o=0;o<128;o+=8)e.fillStyle="#6b7280",e.fillRect(o,0,4,128),e.fillStyle="#d1d5db",e.fillRect(o+4,0,4,128);const n=new fe(t);n.wrapS=en,n.wrapT=en,n.repeat.set(4,4),this.tinRoofMat=new j({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new j({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d");r.fillStyle="#c8a165",r.fillRect(0,0,128,128),r.strokeStyle="#8c6239",r.lineWidth=3;for(let o=0;o<=128;o+=16)r.beginPath(),r.moveTo(0,o),r.lineTo(128,o),r.stroke(),r.beginPath(),r.moveTo(o,0),r.lineTo(o,128),r.stroke();const a=new fe(i);a.wrapS=en,a.wrapT=en,a.repeat.set(2,2),this.bambooWallMat=new j({map:a,roughness:.85,color:13935475}),this.woodMat=new j({color:6045747,roughness:.85}),this.mudPlinthMat=new j({color:8150594,roughness:.95}),this.brickMat=new j({color:10239278,roughness:.9}),this.palmLeafMat=new j({color:3046706,roughness:.6,side:Ie}),this.bananaLeafMat=new j({color:4431943,roughness:.5,side:Ie}),this.treeCrownMat=new j({color:1793568,roughness:.85}),this.bambooTrunkMat=new j({color:6732650,roughness:.4}),this.palmTrunkMat=new j({color:7162945,roughness:.9}),this.hayMat=new j({color:13934615,roughness:.95}),this.paddyFieldMat=new j({color:3706428,roughness:.8}),this.waterMat=new j({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new j({color:10395294,roughness:.7}),this.cowWhiteMat=new j({color:16119280,roughness:.6}),this.cowBrownMat=new j({color:9262372,roughness:.65}),this.cowBlackPatchMat=new j({color:2171169,roughness:.7}),this.hornMat=new j({color:3621201,roughness:.4}),this.ropeMat=new ge({color:12756553}),this.duckMat=new j({color:16777215,roughness:.5}),this.beakMat=new j({color:16750592,roughness:.4}),this.smokeMat=new ge({color:16777215,transparent:!0,opacity:.35})}createCow(t="brown"){const e=new Lt;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new rt(.9,.95,1.7),r=new P(i,n);r.position.set(0,1.05,0),r.castShadow=!0,e.add(r);const a=new Le(.3,.45,8),o=new P(a,n);o.position.set(0,1.62,-.45),o.rotation.x=-.2,o.castShadow=!0,e.add(o);const c=new rt(.12,.45,.5),h=new P(c,n);h.position.set(0,.85,-.85),e.add(h);const u=new Lt;u.position.set(0,1.25,-.85);const d=new rt(.45,.55,.6),l=new P(d,n);l.position.set(0,.15,-.2),l.rotation.x=.35,u.add(l);const f=new rt(.48,.52,.7),_=new P(f,n);_.position.set(0,.28,-.55),u.add(_);const v=new j({color:2236962,roughness:.8}),m=new rt(.36,.3,.3),p=new P(m,v);p.position.set(0,.18,-.92),u.add(p),[-.22,.22].forEach(z=>{const V=new Le(.06,.35,6),J=new P(V,this.hornMat);J.position.set(z,.56,-.48),J.rotation.z=z>0?-.4:.4,J.rotation.x=.3,u.add(J);const et=new rt(.22,.08,.1),X=new P(et,n);X.position.set(z>0?.32:-.32,.38,-.45),X.rotation.z=z>0?-.35:.35,u.add(X)}),e.add(u),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(z=>{const V=new rt(.2,.75,.2),J=new P(V,n);J.position.set(z.x,.38,z.z),J.castShadow=!0,e.add(J);const et=new rt(.22,.1,.22),X=new P(et,this.hornMat);X.position.set(z.x,.05,z.z),e.add(X)});const g=new Lt;g.position.set(0,1.35,.85);const y=new St(.03,.03,.85,6);y.translate(0,-.42,0);const D=new P(y,n);g.add(D);const C=new Le(.08,.25,6);C.translate(0,-.9,0);const L=new P(C,this.hornMat);g.add(L),e.add(g);const G=new St(.08,.1,1.2,8),w=new P(G,this.woodMat);w.position.set(.9,.6,-1.2),e.add(w);const b=[new U(0,1.2,-.8),new U(.45,.75,-1),new U(.9,.85,-1.2)],R=new Ps(b),Z=new Yi(R,8,.02,4,!1),ot=new P(Z,this.ropeMat);e.add(ot);const O={type:"cow",head:u,tail:g,seed:Math.random()*10};return this.animatedAnimals.push(O),e}createVillageHouse(t=!1){const e=new Lt;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new rt(6.6,.45,5.2),r=new P(i,this.mudPlinthMat);r.position.set(0,.22,0),r.receiveShadow=!0,e.add(r);const a=new rt(5.8,2.6,3.8),o=new P(a,this.bambooWallMat);o.position.set(0,1.75,-.4),o.castShadow=!0,o.receiveShadow=!0,e.add(o);const c=new rt(.85,1.8,.08),h=new P(c,this.woodMat);h.position.set(.6,1.35,1.52),e.add(h),[-1.6,-.6].forEach(_=>{const v=new rt(.7,.8,.08),m=new P(v,this.woodMat);m.position.set(_,1.8,1.52),e.add(m)});const u=new rt(6.6,.1,2.8),d=new P(u,n);d.position.set(0,3.65,-.9),d.rotation.x=-.52,d.castShadow=!0,e.add(d);const l=new rt(6.6,.1,3.4),f=new P(l,n);return f.position.set(0,3.5,.8),f.rotation.x=.46,f.castShadow=!0,e.add(f),[-2.5,-.8,.8,2.5].forEach(_=>{const v=new St(.08,.08,2.3,8),m=new P(v,this.woodMat);m.position.set(_,1.6,2.1),m.castShadow=!0,e.add(m)}),e}createTeaStall(){const t=new Lt;t.name="cha_er_tong";const e=new rt(3.2,1,1.8),n=new P(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new rt(3.8,.08,2.8),r=new P(i,this.tinRoofMat);r.position.set(0,2.3,.2),r.rotation.x=.2,r.castShadow=!0,t.add(r),[-1.6,1.6].forEach(v=>{const m=new St(.07,.07,2.2,6),p=new P(m,this.woodMat);p.position.set(v,1.1,1.2),t.add(p)});const a=new rt(3,.08,.45),o=new P(a,this.woodMat);o.position.set(0,.45,1.8),t.add(o),[-1.2,1.2].forEach(v=>{const m=new rt(.08,.45,.4),p=new P(m,this.woodMat);p.position.set(v,.22,1.8),t.add(p)});const c=new j({color:13421772,metalness:.9,roughness:.2}),h=new St(.18,.22,.35,10),u=new P(h,c);u.position.set(-.6,1.18,.2),t.add(u);const d=new Fs({color:16777215,transmission:.7,roughness:.1}),l=new St(.12,.12,.28,8),f=new P(l,d);f.position.set(.6,1.15,.1),t.add(f);const _=new Lt;_.position.set(-.6,1.45,.2),t.add(_);for(let v=0;v<4;v++){const m=new ie(.08,6,6),p=new P(m,this.smokeMat);p.position.y=v*.25,_.add(p)}return this.smokeEmitters.push(_),t}createHaystack(){const t=new Lt;t.name="khorer_gada";const e=new St(1.6,1.9,1.4,12),n=new P(e,this.hayMat);n.position.y=.7,n.castShadow=!0,t.add(n);const i=new St(1,1.6,1.2,12),r=new P(i,this.hayMat);r.position.y=2,r.castShadow=!0,t.add(r);const a=new Le(1,1.5,12),o=new P(a,this.hayMat);o.position.y=3.35,o.castShadow=!0,t.add(o);const c=new St(.04,.05,4.8,6),h=new P(c,this.bambooTrunkMat);return h.position.y=2.4,t.add(h),t}createJatriChawni(t=1){const e=new Lt;e.name="jatri_chawni";const n=new rt(5,.35,2.3),i=new P(n,this.concreteMat);i.position.set(0,.175,0),i.receiveShadow=!0,e.add(i);const r=new rt(5.2,.14,.22),a=new P(r,this.brickMat);a.position.set(0,.07,-1.1),e.add(a);const o=new rt(4.8,2.5,.18),c=new P(o,this.brickMat);c.position.set(0,1.45,1.02),c.castShadow=!0,e.add(c);const h=new ee(4.6,2.3),u=new P(h,this.culvertRailingMaterial);u.position.set(0,1.45,.92),e.add(u),[[-2.1,-.92],[2.1,-.92],[-2.1,.92],[2.1,.92]].forEach(([k,H])=>{const T=new St(.08,.09,2.6,12),I=new P(T,this.culvertRailingMaterial);I.position.set(k,1.45,H),I.castShadow=!0,e.add(I);const W=new St(.12,.12,.35,12),ht=new P(W,new j({color:1409085}));ht.position.set(k,.45,H),e.add(ht)});const l=new St(2.4,2.4,5.2,24,1,!0,Math.PI*.2,Math.PI*.6);l.rotateZ(Math.PI/2);const f=new P(l,this.tinRoofMat);f.position.set(0,2.75,.05),f.castShadow=!0,e.add(f),[-1.8,0,1.8].forEach(k=>{const H=new rt(.06,.06,2.1),T=new P(H,new j({color:3359061}));T.position.set(k,2.55,0),e.add(T)});const _=new y0(16772565,3.5,16);_.position.set(0,2.45,.25),e.add(_);const v=new St(.14,.18,.28,8,1,!0),m=new P(v,new j({color:1976635,wireframe:!0}));m.position.set(0,2.48,.25),e.add(m);const p=new P(new ie(.1,12,12),new ge({color:16772565}));p.position.set(0,2.48,.25),e.add(p);const E=document.createElement("canvas");E.width=1024,E.height=256;const g=E.getContext("2d");g.fillStyle="#15803d",g.fillRect(0,0,1024,256),g.strokeStyle="#f59e0b",g.lineWidth=14,g.strokeRect(10,10,1004,236),g.strokeStyle="#fde047",g.lineWidth=4,g.strokeRect(24,24,976,208);const y=(k,H)=>{g.fillStyle="#fde047",g.beginPath(),g.roundRect(k,H,76,44,8),g.fill(),g.fillStyle="#0284c7",g.fillRect(k+8,H+6,20,18),g.fillRect(k+34,H+6,20,18),g.fillRect(k+58,H+6,12,18),g.fillStyle="#18181b",g.beginPath(),g.arc(k+20,H+44,9,0,Math.PI*2),g.arc(k+56,H+44,9,0,Math.PI*2),g.fill()};y(42,105),y(906,105),g.fillStyle="#ffffff",g.font="900 86px sans-serif",g.textAlign="center",g.textBaseline="middle",g.shadowColor="rgba(0,0,0,0.9)",g.shadowBlur=12,g.fillText("BUS STOP",512,85),g.fillStyle="#fde047",g.font="bold 54px sans-serif",g.shadowColor="rgba(0,0,0,0.8)",g.shadowBlur=8,g.fillText("বাস স্টপ  |  যাত্রী ছাউনি",512,185),g.shadowBlur=0;const D=new fe(E),C=new Lt;C.position.set(0,2.65,-1.02);const L=new rt(4.24,.84,.07),G=new j({color:1332013,roughness:.5}),w=new P(L,G);C.add(w);const b=new j({map:D,roughness:.35,emissive:1409085,emissiveIntensity:.15}),R=new ee(4.18,.78);R.rotateY(Math.PI);const Z=new P(R,b);Z.position.set(0,0,-.038),C.add(Z);const ot=new ee(4.18,.78),O=new P(ot,b);O.position.set(0,0,.038),C.add(O),e.add(C);const z=new Lt,V=t>0?-2.25:2.25;z.position.set(V,0,-1.15);const J=new P(new St(.18,.22,.3,12),this.concreteMat);J.position.set(0,.15,0),z.add(J);const et=new j({color:3359061,metalness:.8,roughness:.2}),X=new P(new St(.045,.045,3.1,12),et);X.position.set(0,1.55,0),z.add(X);const it=document.createElement("canvas");it.width=512,it.height=512;const q=it.getContext("2d");q.fillStyle="#0284c7",q.beginPath(),q.roundRect(16,16,480,480,48),q.fill(),q.strokeStyle="#facc15",q.lineWidth=20,q.stroke(),q.strokeStyle="#ffffff",q.lineWidth=4,q.beginPath(),q.roundRect(36,36,440,440,36),q.stroke(),q.fillStyle="#ffffff",q.beginPath(),q.roundRect(135,75,242,130,24),q.fill(),q.fillStyle="#0284c7",q.fillRect(155,95,60,50),q.fillRect(230,95,60,50),q.fillRect(305,95,52,50),q.fillStyle="#18181b",q.beginPath(),q.arc(190,205,22,0,Math.PI*2),q.arc(320,205,22,0,Math.PI*2),q.fill(),q.fillStyle="#ffffff",q.font="900 72px sans-serif",q.textAlign="center",q.textBaseline="middle",q.shadowColor="rgba(0,0,0,0.85)",q.shadowBlur=8,q.fillText("BUS STOP",256,310),q.fillStyle="#fde047",q.font="bold 56px sans-serif",q.fillText("বাস স্টপ",256,405),q.shadowBlur=0;const ut=new fe(it),Y=new j({map:ut,roughness:.35,emissive:165063,emissiveIntensity:.12}),st=new Lt;st.position.set(0,2.7,0);const gt=new P(new rt(.96,.96,.06),new j({color:223649,roughness:.4}));st.add(gt);const Ct=new ee(.92,.92);Ct.rotateY(Math.PI);const Mt=new P(Ct,Y);Mt.position.set(0,0,-.032),st.add(Mt);const Ot=new ee(.92,.92),Ut=new P(Ot,Y);Ut.position.set(0,0,.032),st.add(Ut),st.rotation.y=t>0?.35:-.35,z.add(st),e.add(z);const wt=document.createElement("canvas");wt.width=512,wt.height=320;const _t=wt.getContext("2d");_t.fillStyle="#f8fafc",_t.fillRect(0,0,512,320),_t.strokeStyle="#15803d",_t.lineWidth=14,_t.strokeRect(8,8,496,304),_t.strokeStyle="#dc2626",_t.lineWidth=4,_t.strokeRect(22,22,468,276),_t.fillStyle="#15803d",_t.font="bold 30px sans-serif",_t.textAlign="center",_t.textBaseline="middle",_t.fillText("বাংলাদেশ সড়ক পরিবহন (BRTC)",256,55),_t.fillStyle="#dc2626",_t.font="900 68px sans-serif",_t.shadowColor="rgba(0,0,0,0.3)",_t.shadowBlur=4,_t.fillText("BUS STOP",256,140),_t.fillStyle="#1e293b",_t.font="bold 50px sans-serif",_t.shadowBlur=0,_t.fillText("বাস স্টপ",256,220),_t.fillStyle="#64748b",_t.font="bold 24px sans-serif",_t.fillText("HIGHWAY PASSENGER SHELTER",256,275);const N=new fe(wt),dt=new j({map:N,roughness:.35,emissive:16777215,emissiveIntensity:.08}),$=new P(new ee(1.2,.75),dt),ft=t>0?-2.12:2.12;$.position.set(ft,1.85,0),$.rotation.y=t>0?-Math.PI/2:Math.PI/2,e.add($);const Q=new Lt;Q.position.set(0,0,0);const It=new rt(4.4,.12,.7),pt=new P(It,this.woodMat);pt.position.set(0,.65,.5),pt.castShadow=!0,Q.add(pt);const S=new rt(4.4,.42,.1),M=new P(S,this.woodMat);M.position.set(0,1.12,.82),M.castShadow=!0,Q.add(M),[-1.9,0,1.9].forEach(k=>{const H=new rt(.12,.35,.58),T=new P(H,this.concreteMat);T.position.set(k,.45,.5),Q.add(T);const I=new rt(.08,.55,.08),W=new P(I,new j({color:3359061}));W.position.set(k,.95,.82),Q.add(W)}),e.add(Q);const F=new Lt;F.scale.set(1.35,1.35,1.35),F.position.set(0,.72,.48);const tt=new j({color:16106390,roughness:.6}),at=new j({color:959977,roughness:.7}),nt=new j({color:1976635,roughness:.8}),Dt=new j({color:1579035,roughness:.5}),vt=new j({color:14362487,roughness:.6}),At=new j({color:16436245,roughness:.7}),Ft=new j({color:16777215,roughness:.8}),Pt=new j({color:986638,roughness:.4}),ct=new Lt;ct.position.set(-.26,0,0);const Jt=new P(new rt(.36,.46,.24),at);Jt.position.set(0,.25,0),Jt.rotation.y=.35,Jt.rotation.z=-.12,ct.add(Jt);const Wt=new P(new ie(.12,14,14),tt);Wt.position.set(.04,.58,.02),Wt.rotation.y=.45,Wt.rotation.z=-.12,ct.add(Wt);const kt=new P(new ie(.13,14,14),Dt);kt.scale.set(1.02,1.05,1.02),kt.position.set(.04,.61,.01),ct.add(kt);const Nt=new P(new rt(.34,.16,.44),nt);Nt.position.set(0,-.02,-.15),ct.add(Nt),[-.1,.1].forEach(k=>{const H=new P(new St(.05,.045,.38,8),nt);H.position.set(k,-.22,-.32),ct.add(H)});const Rt=new P(new St(.045,.04,.34,8),at);Rt.position.set(.18,.14,-.05),Rt.rotation.z=-Math.PI/4,Rt.rotation.x=-.18,ct.add(Rt),F.add(ct);const Bt=new Lt;Bt.position.set(.26,0,0);const Zt=new P(new rt(.32,.42,.22),vt);Zt.position.set(0,.23,0),Zt.rotation.y=-.32,Zt.rotation.z=.14,Bt.add(Zt);const se=new P(new rt(.34,.36,.24),At);se.position.set(0,.24,.02),Bt.add(se);const Ht=new P(new ie(.115,14,14),tt);Ht.position.set(-.06,.54,.02),Ht.rotation.y=-.38,Ht.rotation.z=.22,Bt.add(Ht);const mt=new P(new ie(.125,14,14),Pt);mt.scale.set(1.04,1.06,1.08),mt.position.set(-.06,.57,0),Bt.add(mt);const x=new P(new St(.04,.02,.36,8),Pt);x.position.set(-.04,.42,.16),x.rotation.x=-.35,Bt.add(x);const B=new P(new rt(.3,.15,.42),Ft);B.position.set(0,-.02,-.15),Bt.add(B),[-.08,.08].forEach(k=>{const H=new P(new St(.042,.038,.38,8),Ft);H.position.set(k,-.22,-.32),Bt.add(H)});const K=new P(new St(.04,.035,.32,8),vt);K.position.set(-.16,.14,-.05),K.rotation.z=Math.PI/4,K.rotation.x=-.18,Bt.add(K);const bt=new Lt;bt.position.set(.22,.22,-.2),bt.rotation.x=-.25,bt.rotation.z=-.15;const lt=new St(.016,.018,.38,8),xt=new j({color:1409085,roughness:.8}),Vt=new P(lt,xt);bt.add(Vt);const re=new ee(.12,.06),ne=new j({color:1483594,roughness:.6,side:Ie});[-1,1].forEach(k=>{const H=new P(re,ne);H.position.set(k*.06,-.04,0),H.rotation.z=k*.55,bt.add(H)});const qt=new Le(.07,.09,5);qt.rotateX(Math.PI);const ue=new P(qt,ne);ue.position.set(0,.18,0),bt.add(ue);const we=new j({color:14427686,roughness:.35,metalness:.1}),nn=new ie(.09,14,14);nn.scale(1.15,1.35,1.15);const ke=new P(nn,we);ke.position.set(0,.26,0),bt.add(ke);const ln=new _n(.08,.035,8,16);ln.rotateX(Math.PI/2);const Sn=new P(ln,we);Sn.position.set(0,.23,0),bt.add(Sn),Bt.add(bt),F.add(Bt);const sn=new P(new ie(.065,12,12),tt);sn.scale.set(1.6,.95,1.2),sn.position.set(0,.1,-.06),F.add(sn);const Ze=new Lt;Ze.position.set(0,1.38,.05);const rn=new ge({color:16723285}),$n=new P(new ie(.075,10,10),rn);$n.position.set(-.05,.04,0),Ze.add($n);const Dn=new P(new ie(.075,10,10),rn);Dn.position.set(.05,.04,0),Ze.add(Dn);const Un=new Le(.11,.14,12);Un.rotateZ(Math.PI);const A=new P(Un,rn);return A.position.set(0,-.04,0),Ze.add(A),F.add(Ze),e.add(F),this.animatedAnimals.push({type:"couple",mesh:F,heart:Ze,seed:Math.random()*10}),e}createCoconutTree(){const t=new Lt;t.name="coconut_tree";const e=new Ps([new U(0,0,0),new U(.4,3.5,.2),new U(.9,7.5,.5),new U(1.1,10.5,.7)]),n=new Yi(e,12,.24,8,!1),i=new P(n,this.palmTrunkMat);i.castShadow=!0,t.add(i);const r=new U(1.1,10.5,.7),a=10;for(let o=0;o<a;o++){const c=o*Math.PI*2/a,h=new ee(.8,3.4);h.translate(0,1.7,0);const u=new P(h,this.palmLeafMat);u.position.copy(r),u.rotation.y=c,u.rotation.x=.85,u.castShadow=!0,t.add(u)}for(let o=0;o<5;o++){const c=new ie(.2,8,8),h=new P(c,this.palmLeafMat);h.position.set(r.x+(Math.random()-.5)*.4,r.y-.25,r.z+(Math.random()-.5)*.4),t.add(h)}return t}createBananaTree(){const t=new Lt;t.name="banana_tree";const e=new St(.18,.28,2.8,8),n=new P(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let r=0;r<i;r++){const a=r*Math.PI*2/i,o=new ee(.75,2.4);o.translate(0,1.2,0);const c=new P(o,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=a,c.rotation.x=.95,c.castShadow=!0,t.add(c)}return t}createBambooGrove(){const t=new Lt;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,r=new St(.06,.08,i,6),a=new P(r,this.bambooTrunkMat);a.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),a.rotation.z=(Math.random()-.5)*.15,a.rotation.x=(Math.random()-.5)*.15,t.add(a);const o=new ie(.8+Math.random()*.5,6,6),c=new P(o,this.palmLeafMat);c.position.set(a.position.x,i-.3,a.position.z),t.add(c)}return t}createElectricPole(){const t=new Lt;t.name="electric_pole";const e=new St(.14,.18,8.5,8),n=new P(e,this.concreteMat);n.position.y=4.25,n.castShadow=!0,t.add(n);const i=new rt(2.2,.12,.12),r=new P(i,this.concreteMat);return r.position.y=7.8,t.add(r),[-.9,0,.9].forEach(a=>{const o=new St(.04,.05,.2,6),c=new P(o,this.tinRoofMat);c.position.set(a,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new Lt;n.name="village_pond";const i=new ee(t,e);i.rotateX(-Math.PI/2);const r=new P(i,this.waterMat);r.position.y=.05,n.add(r),this.mudPlinthMat;const a=3;for(let o=0;o<a;o++){const c=new Lt;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const h=new ie(.24,8,8);h.scale(1,.7,1.4);const u=new P(h,this.duckMat);c.add(u);const d=new ie(.14,8,8),l=new P(d,this.duckMat);l.position.set(0,.22,-.22),c.add(l);const f=new Le(.06,.16,6);f.rotateX(-Math.PI/2);const _=new P(f,this.beakMat);_.position.set(0,.2,-.34),c.add(_),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new Lt;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const r=new St(.04,.04,t,6);r.rotateX(Math.PI/2);const a=new P(r,this.bambooTrunkMat);a.position.y=i,e.add(a)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const r=-t*.5+i*1.4,a=new St(.05,.06,1.25,6),o=new P(a,this.woodMat);o.position.set(0,.62,r),o.castShadow=!0,e.add(o)}return e}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}}),this.smokeEmitters.forEach(e=>{e.children.forEach((n,i)=>{n.position.y+=.015,n.position.x+=Math.sin(t*3+i)*.005,n.position.y>1.4&&(n.position.y=0)})})}}class U0{constructor(t){this.scene=t,this.segments=[],this.segmentLength=zt.ROAD_SEGMENT_LENGTH,this.segmentCount=zt.ROAD_SEGMENT_COUNT,this.roadWidth=zt.ROAD_WIDTH,this.props=new D0,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let u=0;u<i.length;u+=4){const d=(Math.random()-.5)*12;i[u]=Math.min(255,Math.max(0,i[u]+d)),i[u+1]=Math.min(255,Math.max(0,i[u+1]+d)),i[u+2]=Math.min(255,Math.max(0,i[u+2]+d))}e.putImageData(n,0,0);const r=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",r.forEach(u=>{e.fillRect(u-50,0,36,t.height),e.fillRect(u+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const a=new fe(t);a.wrapS=en,a.wrapT=en,a.repeat.set(1,1),a.anisotropy=8,this.roadMaterial=new j({map:a,roughness:.82,metalness:.12});const o=document.createElement("canvas");o.width=512,o.height=512;const c=o.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let u=0;u<512;u+=24)c.beginPath(),c.moveTo(0,u),c.lineTo(512,u),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const h=new fe(o);h.wrapS=en,h.wrapT=en,h.repeat.set(4,8),this.paddyFieldMaterial=new j({map:h,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new j({color:7032635,roughness:.95}),this.culvertRailingMaterial=new j({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new Lt;n.position.z=t;const i=new ee(this.roadWidth,this.segmentLength);i.rotateX(-Math.PI/2);const r=new P(i,this.roadMaterial);r.receiveShadow=!0,n.add(r);const a=3.5;[-1,1].forEach(c=>{const h=new ee(a,this.segmentLength);h.rotateX(-Math.PI/2);const u=new P(h,this.dirtVergeMaterial);u.position.set((this.roadWidth*.5+a*.5)*c,-.01,0),u.receiveShadow=!0,n.add(u)});const o=60;return[-1,1].forEach(c=>{const h=new ee(o,this.segmentLength);h.rotateX(-Math.PI/2);const u=new P(h,this.paddyFieldMaterial),d=(this.roadWidth*.5+a+o*.5)*c;u.position.set(d,-.05,0),u.receiveShadow=!0,n.add(u)}),this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=n.createElectricPole();i.position.set(this.roadWidth*.5+2.4,0,0),t.add(i);const r=[new U(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new U(this.roadWidth*.5+2.4,7.1,0),new U(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],a=new Ps(r),o=new Yi(a,8,.02,4,!1),c=new ge({color:2040865}),h=new P(o,c);t.add(h);const u=e%2===0?-1:1,d=e%3===0?"white":e%3===1?"brown":"black",l=n.createCow(d),f=(this.roadWidth*.5+2.8+Math.random()*1.5)*u,_=6+Math.random()*14;if(l.position.set(f,0,_),l.rotation.y=u>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(l),e%2===1){const L=n.createCow("brown");L.scale.set(.75,.75,.75),L.position.set(f+(u>0?3:-3),0,_+3.5),L.rotation.y=l.rotation.y+.5,t.add(L)}if(e%2===0){const G=n.createVillageHouse(e%4===0),w=(this.roadWidth*.5+11.5)*-1;G.position.set(w,0,-10),G.rotation.y=Math.PI/2,t.add(G);const b=n.createHaystack();b.position.set(w-5.5,0,4),t.add(b);const R=n.createBambooFence(24);R.position.set((this.roadWidth*.5+5.5)*-1,0,-5),t.add(R)}if(e%3===1){const G=n.createTeaStall();G.position.set((this.roadWidth*.5+5.8)*1,0,12),G.rotation.y=-Math.PI/2,t.add(G);const w=n.createCoconutTree();w.position.set((this.roadWidth*.5+9)*1,0,16),t.add(w)}if(e%3===2){const G=n.createPond(14,22);G.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(G);for(let w=0;w<3;w++){const b=n.createBananaTree();b.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+w*6),t.add(b)}}e%4===3&&[-this.roadWidth*.5-.4,this.roadWidth*.5+.4].forEach(L=>{const G=new rt(.35,.75,14),w=new P(G,this.culvertRailingMaterial);w.position.set(L,.38,0),w.castShadow=!0,t.add(w),[-7,7].forEach(b=>{const R=new rt(.45,.9,.45),Z=new P(R,this.culvertRailingMaterial);Z.position.set(L,.45,b),t.add(Z)})});const v=e%2===0?1:-1,m=n.createCoconutTree();m.position.set((this.roadWidth*.5+7.5+Math.random()*5)*v,0,-22),t.add(m);const p=n.createBambooGrove();p.position.set((this.roadWidth*.5+9+Math.random()*6)*-v,0,18),t.add(p);const E=n.createBananaTree();E.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*v,0,4),t.add(E);const g=e%2===0?1:-1,y=n.createJatriChawni(g),D=(this.roadWidth*.5+3.4)*g,C=e===0?-14:-18;y.position.set(D,0,C),y.rotation.y=g>0?Math.PI*.5+.32:-Math.PI*.5-.32,t.add(y)}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const r=this.segments[i];if(r.group.position.z>n){let a=0;for(let o=0;o<this.segments.length;o++)this.segments[o].group.position.z<a&&(a=this.segments[o].group.position.z);r.group.position.z=a-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class N0{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new kr(11722715,.0038),this.scene.background=new te(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(h,u,d)=>{e.beginPath(),e.arc(h,u,d,0,Math.PI*2),e.arc(h+d*.7,u-d*.2,d*.8,0,Math.PI*2),e.arc(h-d*.7,u-d*.1,d*.7,0,Math.PI*2),e.arc(h+d*1.3,u+d*.1,d*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const r=e.createRadialGradient(256,380,15,256,380,120);r.addColorStop(0,"rgba(255, 255, 240, 1.0)"),r.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),r.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),r.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=r,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const a=new fe(t),o=new ie(480,32,16),c=new ge({map:a,side:Fe});this.skyDome=new P(o,c),this.scene.add(this.skyDome)}initLighting(){this.hemiLight=new v0(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new E0(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=170,this.dirLight.shadow.camera.left=-28,this.dirLight.shadow.camera.right=28,this.dirLight.shadow.camera.top=28,this.dirLight.shadow.camera.bottom=-28,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new j({color:1793568,roughness:.9,flatShading:!0});[-1,1].forEach(e=>{const n=new Lt,i=28;for(let r=0;r<i;r++){const a=12+Math.random()*18,o=6+Math.random()*8,c=new Le(o,a,6),h=new P(c,t),u=(55+Math.random()*30)*e,d=-r*18;h.position.set(u,a*.5-2,d),h.rotation.y=Math.random()*Math.PI,n.add(h)}this.scene.add(n),this.treeLines.push(n)})}initFlyingBirds(){this.birdsGroup=new Lt;const t=new ge({color:16777215,side:Ie}),e=8;for(let n=0;n<e;n++){const i=new Lt,r=new ee(.8,.35);r.translate(-.4,0,0);const a=new P(r,t);i.add(a);const o=new ee(.8,.35);o.translate(.4,0,0);const c=new P(o,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:a,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class O0{constructor(t="sedan"){this.type=t,this.group=new Lt,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new xn,this.collisionSize=new U(1.8,1.4,4.5),this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new j({color:t,metalness:.5,roughness:.35}),darkTrim:new j({color:1974308,roughness:.7}),wood:new j({color:8736014,roughness:.9}),glass:new Fs({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new j({color:14671839,metalness:.9,roughness:.2}),headlight:new ge({color:16777215}),taillight:new j({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new j({color:1973792,metalness:.1,roughness:.85}),rim:new j({color:12131356,metalness:.5,roughness:.4}),cowFawn:new j({color:9262372,roughness:.7}),cowWhite:new j({color:16119280,roughness:.6}),cowBlack:new j({color:2236962,roughness:.7}),horn:new j({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new rt(2,.4,6.2),r=new P(i,n.darkTrim);r.position.set(0,.6,0),this.group.add(r);const a=new rt(2.3,.4,.25),o=new P(a,n.darkTrim);o.position.set(0,.6,-3.15),this.group.add(o);const c=new rt(1.8,.9,1.5),h=new P(c,n.body);h.position.set(0,1.25,-2.2),this.group.add(h);const u=new rt(2.1,1.5,1.5),d=new P(u,n.body);d.position.set(0,1.8,-.7),this.group.add(d);const l=new ee(1.85,.7),f=new P(l,n.glass);f.position.set(0,1.95,-1.46),this.group.add(f),[-.7,.7].forEach(y=>{const D=new P(new rt(.24,.2,.05),n.headlight);D.position.set(y,1.15,-3.18),this.group.add(D)});const _=new rt(2.25,.12,3.6),v=new P(_,n.wood);v.position.set(0,1.05,1.5),this.group.add(v),[-1.12,1.12].forEach(y=>{const D=new rt(.08,1.3,3.6),C=new P(D,n.wood);C.position.set(y,1.7,1.5),this.group.add(C)});const m=new rt(2.25,1.2,.08),p=new P(m,n.wood);p.position.set(0,1.65,3.3),this.group.add(p),[-.85,.85].forEach(y=>{const D=new P(new rt(.28,.16,.05),n.taillight);D.position.set(y,.75,3.32),this.group.add(D)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(y=>{const D=new Lt;D.position.set(y.x,2.2,y.z);const C=new rt(.42,.45,.6),L=new P(C,y.mat);D.add(L);const G=new rt(.3,.25,.25),w=new P(G,n.darkTrim);w.position.set(0,-.08,.38),D.add(w),[-.18,.18].forEach(b=>{const R=new Le(.05,.28,6),Z=new P(R,n.horn);Z.position.set(b,.26,.05),Z.rotation.z=b>0?-.35:.35,D.add(Z)}),this.group.add(D)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(y=>{const D=this.createSimpleWheel(n,.5,.3);D.position.set(y.x,.5,y.z),this.group.add(D),this.wheels.push(D)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new rt(2,.4,6.2),n=new P(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new rt(2.1,1.6,1.8),r=new P(i,t.body);r.position.set(0,1.7,-1.8),this.group.add(r);const a=new rt(2.3,2.1,3.8),o=new P(a,t.wood);o.position.set(0,1.85,1.2),this.group.add(o),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new rt(2.35,2.5,10.2),n=new P(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new ee(2.15,1.2),r=new P(i,t.glass);r.position.set(0,1.95,-5.12),this.group.add(r),[-1.19,1.19].forEach(o=>{const c=new ee(9,.9),h=new P(c,t.glass);h.position.set(o,1.9,.2),h.rotation.y=o>0?Math.PI/2:-Math.PI/2,this.group.add(h)}),[-.85,.85].forEach(o=>{const c=new P(new rt(.3,.16,.05),t.headlight);c.position.set(o,.75,-5.12),this.group.add(c);const h=new P(new rt(.24,.35,.05),t.taillight);h.position.set(o,1.3,5.12),this.group.add(h)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(o=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(o.x,.48,o.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new rt(1.88,.4,4.65),r=new P(i,n.darkTrim);r.position.set(0,.42,0),this.group.add(r);const a=new rt(1.84,.6,4.6),o=new P(a,n.body);o.position.set(0,.78,0),this.group.add(o);const c=new rt(1.58,.65,2.9),h=new P(c,n.body);h.position.set(0,1.3,.2),this.group.add(h),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new rt(1.76,.32,4.5),r=new P(i,n.darkTrim);r.position.set(0,.32,0),this.group.add(r);const a=new rt(1.72,.44,4.4),o=new P(a,n.body);o.position.set(0,.58,0),this.group.add(o);const c=new rt(1.44,.46,2.2),h=new P(c,n.body);h.position.set(0,.92,-.05),this.group.add(h),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,r,a){[-e,e].forEach(o=>{const c=new rt(.3,.1,.05),h=new P(c,t.headlight);h.position.set(o,i,n),this.group.add(h)}),[-e,e].forEach(o=>{const c=new rt(.32,.12,.05),h=new P(c,t.taillight);h.position.set(o,a,r),this.group.add(h)})}addStandardWheels(t,e,n,i,r){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(o=>{const c=this.createSimpleWheel(t,r,.24);c.position.set(o.x,o.y,o.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new Lt,r=new St(e,e,n,18);r.rotateZ(Math.PI/2);const a=new P(r,t.tire);i.add(a);const o=new St(e*.7,e*.7,n+.02,14);o.rotateZ(Math.PI/2);const c=new P(o,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=zt.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<zt.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=zt.LANES[n];if(!t.some(a=>{if(a===this||!a.active)return!1;const o=Math.abs(a.group.position.z-this.group.position.z),c=Math.abs(a.group.position.x-i);return o<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const r=this.targetX-this.group.position.x;Math.abs(r)>.04?this.group.position.x+=Math.sign(r)*Math.min(Math.abs(r),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(r=>{r.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(t,this.collisionSize)}}class F0{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"];for(let n=0;n<25;n++){const i=t[n%t.length],r=new O0(i);r.despawn(),this.pool.push(r),this.scene.add(r.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,r){const a=t.group.position.z,o=t.group.position.x,c=Math.min(1,n/4500),h=Ci.lerp(1.3,.8,c),u=Ci.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=Ci.lerp(h,u,Math.random()),this.trySpawnTraffic(a,c));for(let d=this.activeVehicles.length-1;d>=0;d--){const l=this.activeVehicles[d];if(l.update(e,i),l.group.position.z>a+zt.TRAFFIC.DESPAWN_DISTANCE){l.despawn(),this.activeVehicles.splice(d,1);continue}if(!l.hasBeenOvertaken){const f=Math.abs(l.group.position.z-a),_=Math.abs(l.group.position.x-o);f<zt.SCORING.NEAR_MISS_DIST_Z&&_<zt.SCORING.NEAR_MISS_DIST_X&&_>.5&&e>l.speed+12?(l.hasBeenOvertaken=!0,r&&r(l)):a<l.group.position.z-4&&(l.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-zt.TRAFFIC.SPAWN_DISTANCE,i=34,r=new Set;this.activeVehicles.forEach(_=>{Math.abs(_.group.position.z-n)<i&&r.add(_.lane)});const a=[0,1,2].filter(_=>!r.has(_));if(a.length===0||a.length===1&&r.size>=2)return;const o=a[Math.floor(Math.random()*a.length)];let c="cow_truck";const h=Math.random();o===0?c=h>.45?"cow_truck":"truck":o===1?c=h>.5?"bus":h>.25?"cow_truck":"suv":c=h>.45?"bus":"sedan";const u=this.getInactiveVehicle(c);if(!u)return;const d=zt.TRAFFIC.SPEEDS[c]||[65,85],l=e*35,f=Ci.lerp(d[0],d[1],Math.random())+l;if(u.spawn(o,n,f),this.activeVehicles.push(u),e>.5&&Math.random()<.35&&a.length>=2){const _=a.filter(v=>v!==o);if(_.length>0){const v=_[Math.floor(Math.random()*_.length)],m=Math.random()>.5?"cow_truck":"bus",p=this.getInactiveVehicle(m);if(p){const E=n-(28+Math.random()*20),g=zt.TRAFFIC.SPEEDS[m]||[65,80],y=Ci.lerp(g[0],g[1],Math.random())+l;p.spawn(v,E,y),this.activeVehicles.push(p)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const r=this.activeVehicles[i],a=e-r.group.position.z,o=Math.abs(r.group.position.x-n);if(a>4&&a<65&&o<2.4&&!r.isYielding){r.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class B0{constructor(t){this.scene=t,this.particles=[],this.poolSize=180,this.smokeMat=new ge({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new ge({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new j({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new rt(.14,.14,.14),n=new P(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new U,rotVel:new U,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){for(let e=0;e<35;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="spark",n.mesh.material=this.sparkMat,n.mesh.visible=!0,n.mesh.scale.set(.12,.12,.12),n.mesh.position.copy(t);const i=Math.random()*Math.PI*2,r=6+Math.random()*14;n.vel.set(Math.cos(i)*r,3+Math.random()*10,Math.sin(i)*r),n.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),n.life=0,n.maxLife=.7+Math.random()*.5,n.scaleSpeed=-.5}for(let e=0;e<20;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="debris",n.mesh.material=this.debrisMat,n.mesh.visible=!0,n.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),n.mesh.position.copy(t),n.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),n.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),n.life=0,n.maxLife=1.2,n.scaleSpeed=0}for(let e=0;e<25;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="smoke",n.mesh.material=this.smokeMat,n.mesh.visible=!0,n.mesh.scale.set(.8,.8,.8),n.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),n.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),n.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),n.life=0,n.maxLife=1.4,n.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class G0{constructor(t){this.scene=t,this.linesCount=60,this.group=new Lt;const e=new uc({color:10083839,transparent:!0,opacity:0});this.lineMat=e,this.lines=[];for(let n=0;n<this.linesCount;n++){const i=[new U(0,0,0),new U(0,0,6+Math.random()*8)],r=new De().setFromPoints(i),a=new zp(r,e);this.resetLinePos(a),this.group.add(a),this.lines.push(a)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const r=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=r*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const a=t.group.position.z,o=t.group.position.x;this.group.position.set(o,0,a);const c=e/60*i*50;this.lines.forEach(h=>{h.position.z+=c,h.position.z>5&&this.resetLinePos(h)})}}class k0{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),r=document.getElementById("btn-gameover-restart");[i,r].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const a=document.getElementById("btn-pause-menu"),o=document.getElementById("btn-gameover-menu");[a,o].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(l=>{l.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),h=document.getElementById("btn-how-to-play"),u=document.getElementById("btn-modal-close");h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),u&&c&&u.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")});const d=document.querySelectorAll(".veh-btn");d.forEach(l=>{l.addEventListener("click",()=>{d.forEach(f=>f.classList.remove("active")),l.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(l.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(l=>{l.addEventListener("click",f=>{f.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),r=document.getElementById("btn-touch-nitro"),a=document.getElementById("btn-touch-horn");if(document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(o=>{o.addEventListener("contextmenu",c=>c.preventDefault())}),t&&t.addEventListener("pointerdown",o=>{o.preventDefault(),document.body.classList.add("touch-active"),this.onSteerLeft&&this.onSteerLeft()}),e&&e.addEventListener("pointerdown",o=>{o.preventDefault(),document.body.classList.add("touch-active"),this.onSteerRight&&this.onSteerRight()}),n){const o=c=>{document.body.classList.add("touch-active"),this.onBrake&&this.onBrake(c),c&&this.soundManager.playAirBrake()};n.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),n.addEventListener("pointerup",()=>o(!1)),n.addEventListener("pointerleave",()=>o(!1)),n.addEventListener("pointercancel",()=>o(!1))}if(i){const o=c=>{document.body.classList.add("touch-active"),this.onAccelerate&&this.onAccelerate(c)};i.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),i.addEventListener("pointerup",()=>o(!1)),i.addEventListener("pointerleave",()=>o(!1)),i.addEventListener("pointercancel",()=>o(!1))}if(r){const o=c=>{document.body.classList.add("touch-active"),this.onNitro&&this.onNitro(c)};r.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),r.addEventListener("pointerup",()=>o(!1)),r.addEventListener("pointerleave",()=>o(!1)),r.addEventListener("pointercancel",()=>o(!1))}a&&a.addEventListener("pointerdown",o=>{o.preventDefault(),this.onHorn?this.onHorn():this.soundManager.playTruckHorn()}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===ce.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case ce.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case ce.PLAYING:this.hudLayer.classList.remove("hidden");break;case ce.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case ce.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){if(this.scoreVal&&(this.scoreVal.innerText=t.score.toLocaleString()),this.distVal&&(this.distVal.innerText=`${(t.distanceMeters/1e3).toFixed(2)} km`),this.speedVal&&(this.speedVal.innerText=Math.round(t.speedKmh)),this.nitroBar){const e=t.nitro/100*100;this.nitroBar.style.width=`${e}%`,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting")}}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class z0{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new b0,this.inputManager=new A0,this.soundManager=new P0,this.uiManager=new k0(this.soundManager),this.scene=new kp,this.camera=new Be(zt.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.renderer=new hc({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ca,this.renderer.toneMapping=Ia,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new N0(this.scene),this.roadManager=new U0(this.scene),this.vehicles={truck:new C0,rickshaw:new L0,cng:new I0},Object.values(this.vehicles).forEach(t=>{this.scene.add(t.group),t.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new F0(this.scene),this.particleSystem=new B0(this.scene),this.speedLines=new G0(this.scene),this.cameraController=new R0(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new T0,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(ce.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=e=>this.setVehicle(e);const t=()=>{this.gameState.state===ce.PLAYING?(this.gameState.state=ce.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(ce.PAUSED,this.gameState)):this.gameState.state===ce.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=t,this.inputManager.onPauseToggle=t,this.inputManager.onRestart=()=>{(this.gameState.state===ce.GAMEOVER||this.gameState.state===ce.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=()=>this.inputManager.triggerSteerLeft(),this.uiManager.onSteerRight=()=>this.inputManager.triggerSteerRight(),this.uiManager.onAccelerate=e=>this.inputManager.setAccelerate(e),this.uiManager.onBrake=e=>this.inputManager.setBrake(e),this.uiManager.onNitro=e=>this.inputManager.setNitro(e)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(ce.PLAYING,this.gameState)}resumeGame(){this.gameState.state===ce.PAUSED&&(this.gameState.state=ce.PLAYING,this.uiManager.setScreen(ce.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=ce.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(ce.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(ce.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===ce.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===ce.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const r=this.inputManager.keys.brake;r&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=r,this.gameState.update(e,this.inputManager);const a=this.gameState.speedKmh*1e3/3600;if(this.playerVehicle.group.position.z-=a*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,r,this.gameState.isBoosting,e),r&&this.gameState.speedKmh>50){const c=this.playerVehicle.group.position.clone();c.x-=.85,c.z+=1.6;const h=this.playerVehicle.group.position.clone();h.x+=.85,h.z+=1.6,this.particleSystem.emitTireSmoke(c),this.particleSystem.emitTireSmoke(h)}this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const h=this.gameState.addNearMiss();this.soundManager.playNearMiss(h.combo),this.uiManager.showNearMiss(h.bonus,h.combo)});const o=this.trafficManager.checkCollision(this.playerVehicle);o&&this.onCrash(o),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,r,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===ce.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new z0});
//# sourceMappingURL=index-CAobbDVo.js.map
