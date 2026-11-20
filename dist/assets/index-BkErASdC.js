(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wr="160",Ja=0,Nr=1,ja=2,ha=1,da=2,fn=3,Ln=0,Ne=1,be=2,Rn=0,mi=1,Or=2,Fr=3,Br=4,$a=5,Vn=100,Qa=101,tc=102,Gr=103,kr=104,ec=200,nc=201,ic=202,sc=203,pr=204,mr=205,rc=206,oc=207,ac=208,cc=209,lc=210,hc=211,dc=212,uc=213,fc=214,pc=0,mc=1,gc=2,ps=3,_c=4,Mc=5,vc=6,xc=7,ua=0,Sc=1,wc=2,Pn=0,yc=1,Ec=2,Tc=3,fa=4,bc=5,Ac=6,pa=300,_i=301,Mi=302,gr=303,_r=304,ws=306,tn=1e3,$e=1001,Mr=1002,Ue=1003,zr=1004,Ds=1005,We=1006,Rc=1007,Bi=1008,Cn=1009,Pc=1010,Cc=1011,yr=1012,ma=1013,bn=1014,An=1015,Gi=1016,ga=1017,_a=1018,Wn=1020,Lc=1021,Qe=1023,Ic=1024,Dc=1025,Xn=1026,vi=1027,Uc=1028,Ma=1029,Nc=1030,va=1031,xa=1033,Us=33776,Ns=33777,Os=33778,Fs=33779,Vr=35840,Hr=35841,Wr=35842,Xr=35843,Sa=36196,qr=37492,Yr=37496,Kr=37808,Zr=37809,Jr=37810,jr=37811,$r=37812,Qr=37813,to=37814,eo=37815,no=37816,io=37817,so=37818,ro=37819,oo=37820,ao=37821,Bs=36492,co=36494,lo=36495,Oc=36283,ho=36284,uo=36285,fo=36286,wa=3e3,qn=3001,Fc=3200,Bc=3201,ya=0,Gc=1,Xe="",Te="srgb",gn="srgb-linear",Er="display-p3",ys="display-p3-linear",ms="linear",le="srgb",gs="rec709",_s="p3",Jn=7680,po=519,kc=512,zc=513,Vc=514,Ea=515,Hc=516,Wc=517,Xc=518,qc=519,mo=35044,go="300 es",vr=1035,mn=2e3,Ms=2001;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _o=1234567;const Di=Math.PI/180,xi=180/Math.PI;function yi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pe[s&255]+Pe[s>>8&255]+Pe[s>>16&255]+Pe[s>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]).toLowerCase()}function Ee(s,t,e){return Math.max(t,Math.min(e,s))}function Tr(s,t){return(s%t+t)%t}function Yc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Kc(s,t,e){return s!==t?(e-s)/(t-s):0}function Ui(s,t,e){return(1-e)*s+e*t}function Zc(s,t,e,n){return Ui(s,t,1-Math.exp(-e*n))}function Jc(s,t=1){return t-Math.abs(Tr(s,t*2)-t)}function jc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $c(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Qc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function tl(s,t){return s+Math.random()*(t-s)}function el(s){return s*(.5-Math.random())}function nl(s){s!==void 0&&(_o=s);let t=_o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function il(s){return s*Di}function sl(s){return s*xi}function xr(s){return(s&s-1)===0&&s!==0}function rl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ol(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),p=r((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*d,c*u,o*l);break;case"YZY":s.set(c*u,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*u,o*h,o*l);break;case"XZX":s.set(o*h,c*_,c*p,o*l);break;case"YXY":s.set(c*p,o*h,c*_,o*l);break;case"ZYZ":s.set(c*_,c*p,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ui(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ai={DEG2RAD:Di,RAD2DEG:xi,generateUUID:yi,clamp:Ee,euclideanModulo:Tr,mapLinear:Yc,inverseLerp:Kc,lerp:Ui,damp:Zc,pingpong:Jc,smoothstep:jc,smootherstep:$c,randInt:Qc,randFloat:tl,randFloatSpread:el,seededRandom:nl,degToRad:il,radToDeg:sl,isPowerOfTwo:xr,ceilPowerOfTwo:rl,floorPowerOfTwo:vs,setQuaternionFromProperEuler:ol,normalize:Ie,denormalize:ui};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,r,a,o,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],p=n[5],_=n[8],v=i[0],m=i[3],f=i[6],y=i[1],g=i[4],M=i[7],I=i[2],R=i[5],P=i[8];return r[0]=a*v+o*y+c*I,r[3]=a*m+o*g+c*R,r[6]=a*f+o*M+c*P,r[1]=l*v+h*y+d*I,r[4]=l*m+h*g+d*R,r[7]=l*f+h*M+d*P,r[2]=u*v+p*y+_*I,r[5]=u*m+p*g+_*R,r[8]=u*f+p*M+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,u=o*c-h*r,p=l*r-a*c,_=e*d+n*u+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=d*v,t[1]=(i*l-h*n)*v,t[2]=(o*n-i*a)*v,t[3]=u*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-o*e)*v,t[6]=p*v,t[7]=(n*c-l*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Gs.makeScale(t,e)),this}rotate(t){return this.premultiply(Gs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new $t;function Ta(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function al(){const s=xs("canvas");return s.style.display="block",s}const Mo={};function Ni(s){s in Mo||(Mo[s]=!0,console.warn(s))}const vo=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xo=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[gn]:{transfer:ms,primaries:gs,toReference:s=>s,fromReference:s=>s},[Te]:{transfer:le,primaries:gs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ys]:{transfer:ms,primaries:_s,toReference:s=>s.applyMatrix3(xo),fromReference:s=>s.applyMatrix3(vo)},[Er]:{transfer:le,primaries:_s,toReference:s=>s.convertSRGBToLinear().applyMatrix3(xo),fromReference:s=>s.applyMatrix3(vo).convertLinearToSRGB()}},cl=new Set([gn,ys]),oe={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Hi[t].toReference,i=Hi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Hi[s].primaries},getTransfer:function(s){return s===Xe?ms:Hi[s].transfer}};function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ks(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let jn;class ba{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=xs("canvas")),jn.width=t.width,jn.height=t.height;const n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ll=0;class Aa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ll++}),this.uuid=yi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(zs(i[a].image)):r.push(zs(i[a]))}else r=zs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function zs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ba.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hl=0;class Be extends wi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=$e,i=$e,r=We,a=Bi,o=Qe,c=Cn,l=Be.DEFAULT_ANISOTROPY,h=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=yi(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qn?Te:Xe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tn:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case Mr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tn:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case Mr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?qn:wa}set encoding(t){Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qn?Te:Xe}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=pa;Be.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,i=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],p=c[5],_=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,M=(p+1)/2,I=(f+1)/2,R=(h+u)/4,P=(d+v)/4,O=(_+m)/4;return g>M&&g>I?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=R/n,r=P/n):M>I?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=R/i,r=O/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=P/r,i=O/r),this.set(n,i,r,e),this}let y=Math.sqrt((m-_)*(m-_)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-v)/y,this.z=(u-h)/y,this.w=Math.acos((l+p+f-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dl extends wi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ni("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qn?Te:Xe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Aa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends dl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ra extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ul extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const u=r[a+0],p=r[a+1],_=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=p,t[e+2]=_,t[e+3]=v;return}if(d!==v||c!==u||l!==p||h!==_){let m=1-o;const f=c*u+l*p+h*_+d*v,y=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const I=Math.sqrt(g),R=Math.atan2(I,f*y);m=Math.sin(m*R)/I,o=Math.sin(o*R)/I}const M=o*y;if(c=c*m+u*M,l=l*m+p*M,h=h*m+_*M,d=d*m+v*M,m===1-o){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return t[e]=o*_+h*d+c*p-l*u,t[e+1]=c*_+h*u+l*d-o*p,t[e+2]=l*_+h*p+o*u-c*d,t[e+3]=h*_-o*d-c*u-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),u=c(n/2),p=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d-u*p*_;break;case"YXZ":this._x=u*h*d+l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d+u*p*_;break;case"ZXY":this._x=u*h*d-l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d-u*p*_;break;case"ZYX":this._x=u*h*d-l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d+u*p*_;break;case"YZX":this._x=u*h*d+l*p*_,this._y=l*p*d+u*h*_,this._z=l*h*_-u*p*d,this._w=l*h*d-u*p*_;break;case"XZY":this._x=u*h*d-l*p*_,this._y=l*p*d-u*h*_,this._z=l*h*_+u*p*d,this._w=l*h*d+u*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+l)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-l)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,u=Math.sin(e*h)/l;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(So.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(So.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vs.copy(this).projectOnVector(t),this.sub(Vs)}reflect(t){return this.sub(Vs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new D,So=new Vi;class _n{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),Xi.subVectors(this.max,Ri),$n.subVectors(t.a,Ri),Qn.subVectors(t.b,Ri),ti.subVectors(t.c,Ri),Sn.subVectors(Qn,$n),wn.subVectors(ti,Qn),On.subVectors($n,ti);let e=[0,-Sn.z,Sn.y,0,-wn.z,wn.y,0,-On.z,On.y,Sn.z,0,-Sn.x,wn.z,0,-wn.x,On.z,0,-On.x,-Sn.y,Sn.x,0,-wn.y,wn.x,0,-On.y,On.x,0];return!Hs(e,$n,Qn,ti,Xi)||(e=[1,0,0,0,1,0,0,0,1],!Hs(e,$n,Qn,ti,Xi))?!1:(qi.crossVectors(Sn,wn),e=[qi.x,qi.y,qi.z],Hs(e,$n,Qn,ti,Xi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new D,new D,new D,new D,new D,new D,new D,new D],Ke=new D,Wi=new _n,$n=new D,Qn=new D,ti=new D,Sn=new D,wn=new D,On=new D,Ri=new D,Xi=new D,qi=new D,Fn=new D;function Hs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Fn.fromArray(s,r);const o=i.x*Math.abs(Fn.x)+i.y*Math.abs(Fn.y)+i.z*Math.abs(Fn.z),c=t.dot(Fn),l=e.dot(Fn),h=n.dot(Fn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const fl=new _n,Pi=new D,Ws=new D;class Es{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Pi.subVectors(t,this.center);const e=Pi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Pi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ws.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Pi.copy(t.center).add(Ws)),this.expandByPoint(Pi.copy(t.center).sub(Ws))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new D,Xs=new D,Yi=new D,yn=new D,qs=new D,Ki=new D,Ys=new D;class Pa{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xs.copy(t).add(e).multiplyScalar(.5),Yi.copy(e).sub(t).normalize(),yn.copy(this.origin).sub(Xs);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Yi),o=yn.dot(this.direction),c=-yn.dot(Yi),l=yn.lengthSq(),h=Math.abs(1-a*a);let d,u,p,_;if(h>0)if(d=a*c-o,u=a*o-c,_=r*h,d>=0)if(u>=-_)if(u<=_){const v=1/h;d*=v,u*=v,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Xs).addScaledVector(Yi,u),p}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,i=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,i=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,i,r){qs.subVectors(e,t),Ki.subVectors(n,t),Ys.crossVectors(qs,Ki);let a=this.direction.dot(Ys),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yn.subVectors(this.origin,t);const c=o*this.direction.dot(Ki.crossVectors(yn,Ki));if(c<0)return null;const l=o*this.direction.dot(qs.cross(yn));if(l<0||c+l>a)return null;const h=-o*yn.dot(Ys);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class me{constructor(t,e,n,i,r,a,o,c,l,h,d,u,p,_,v,m){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,u,p,_,v,m)}set(t,e,n,i,r,a,o,c,l,h,d,u,p,_,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ei.setFromMatrixColumn(t,0).length(),r=1/ei.setFromMatrixColumn(t,1).length(),a=1/ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,p=a*d,_=o*h,v=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+_*l,e[5]=u-v*l,e[9]=-o*c,e[2]=v-u*l,e[6]=_+p*l,e[10]=a*c}else if(t.order==="YXZ"){const u=c*h,p=c*d,_=l*h,v=l*d;e[0]=u+v*o,e[4]=_*o-p,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-_,e[6]=v+u*o,e[10]=a*c}else if(t.order==="ZXY"){const u=c*h,p=c*d,_=l*h,v=l*d;e[0]=u-v*o,e[4]=-a*d,e[8]=_+p*o,e[1]=p+_*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const u=a*h,p=a*d,_=o*h,v=o*d;e[0]=c*h,e[4]=_*l-p,e[8]=u*l+v,e[1]=c*d,e[5]=v*l+u,e[9]=p*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const u=a*c,p=a*l,_=o*c,v=o*l;e[0]=c*h,e[4]=v-u*d,e[8]=_*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=p*d+_,e[10]=u-v*d}else if(t.order==="XZY"){const u=a*c,p=a*l,_=o*c,v=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+v,e[5]=a*h,e[9]=p*d-_,e[2]=_*d-p,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pl,t,ml)}lookAt(t,e,n){const i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),En.crossVectors(n,ke),En.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),En.crossVectors(n,ke)),En.normalize(),Zi.crossVectors(ke,En),i[0]=En.x,i[4]=Zi.x,i[8]=ke.x,i[1]=En.y,i[5]=Zi.y,i[9]=ke.y,i[2]=En.z,i[6]=Zi.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],p=n[13],_=n[2],v=n[6],m=n[10],f=n[14],y=n[3],g=n[7],M=n[11],I=n[15],R=i[0],P=i[4],O=i[8],x=i[12],E=i[1],C=i[5],X=i[9],ot=i[13],N=i[2],B=i[6],q=i[10],tt=i[14],Q=i[3],Y=i[7],it=i[11],K=i[15];return r[0]=a*R+o*E+c*N+l*Q,r[4]=a*P+o*C+c*B+l*Y,r[8]=a*O+o*X+c*q+l*it,r[12]=a*x+o*ot+c*tt+l*K,r[1]=h*R+d*E+u*N+p*Q,r[5]=h*P+d*C+u*B+p*Y,r[9]=h*O+d*X+u*q+p*it,r[13]=h*x+d*ot+u*tt+p*K,r[2]=_*R+v*E+m*N+f*Q,r[6]=_*P+v*C+m*B+f*Y,r[10]=_*O+v*X+m*q+f*it,r[14]=_*x+v*ot+m*tt+f*K,r[3]=y*R+g*E+M*N+I*Q,r[7]=y*P+g*C+M*B+I*Y,r[11]=y*O+g*X+M*q+I*it,r[15]=y*x+g*ot+M*tt+I*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],p=t[14],_=t[3],v=t[7],m=t[11],f=t[15];return _*(+r*c*d-i*l*d-r*o*u+n*l*u+i*o*p-n*c*p)+v*(+e*c*p-e*l*u+r*a*u-i*a*p+i*l*h-r*c*h)+m*(+e*l*d-e*o*p-r*a*d+n*a*p+r*o*h-n*l*h)+f*(-i*o*h-e*c*d+e*o*u+i*a*d-n*a*u+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],p=t[11],_=t[12],v=t[13],m=t[14],f=t[15],y=d*m*l-v*u*l+v*c*p-o*m*p-d*c*f+o*u*f,g=_*u*l-h*m*l-_*c*p+a*m*p+h*c*f-a*u*f,M=h*v*l-_*d*l+_*o*p-a*v*p-h*o*f+a*d*f,I=_*d*c-h*v*c-_*o*u+a*v*u+h*o*m-a*d*m,R=e*y+n*g+i*M+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=y*P,t[1]=(v*u*r-d*m*r-v*i*p+n*m*p+d*i*f-n*u*f)*P,t[2]=(o*m*r-v*c*r+v*i*l-n*m*l-o*i*f+n*c*f)*P,t[3]=(d*c*r-o*u*r-d*i*l+n*u*l+o*i*p-n*c*p)*P,t[4]=g*P,t[5]=(h*m*r-_*u*r+_*i*p-e*m*p-h*i*f+e*u*f)*P,t[6]=(_*c*r-a*m*r-_*i*l+e*m*l+a*i*f-e*c*f)*P,t[7]=(a*u*r-h*c*r+h*i*l-e*u*l-a*i*p+e*c*p)*P,t[8]=M*P,t[9]=(_*d*r-h*v*r-_*n*p+e*v*p+h*n*f-e*d*f)*P,t[10]=(a*v*r-_*o*r+_*n*l-e*v*l-a*n*f+e*o*f)*P,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*p-e*o*p)*P,t[12]=I*P,t[13]=(h*v*i-_*d*i+_*n*u-e*v*u-h*n*m+e*d*m)*P,t[14]=(_*o*i-a*v*i-_*n*c+e*v*c+a*n*m-e*o*m)*P,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*u+e*o*u)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,u=r*l,p=r*h,_=r*d,v=a*h,m=a*d,f=o*d,y=c*l,g=c*h,M=c*d,I=n.x,R=n.y,P=n.z;return i[0]=(1-(v+f))*I,i[1]=(p+M)*I,i[2]=(_-g)*I,i[3]=0,i[4]=(p-M)*R,i[5]=(1-(u+f))*R,i[6]=(m+y)*R,i[7]=0,i[8]=(_+g)*P,i[9]=(m-y)*P,i[10]=(1-(u+v))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ei.set(i[0],i[1],i[2]).length();const a=ei.set(i[4],i[5],i[6]).length(),o=ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const l=1/r,h=1/a,d=1/o;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=mn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,_;if(o===mn)p=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ms)p=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=mn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),u=(e+t)*l,p=(n+i)*h;let _,v;if(o===mn)_=(a+r)*d,v=-2*d;else if(o===Ms)_=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ei=new D,Ze=new me,pl=new D(0,0,0),ml=new D(1,1,1),En=new D,Zi=new D,ke=new D,wo=new me,yo=new Vi;class Ts{constructor(t=0,e=0,n=0,i=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yo.setFromEuler(this),this.setFromQuaternion(yo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class Ca{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gl=0;const Eo=new D,ni=new Vi,hn=new me,Ji=new D,Ci=new D,_l=new D,Ml=new Vi,To=new D(1,0,0),bo=new D(0,1,0),Ao=new D(0,0,1),vl={type:"added"},xl={type:"removed"};class ve extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new D,e=new Ts,n=new Vi,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new $t}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ca,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.multiply(ni),this}rotateOnWorldAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.premultiply(ni),this}rotateX(t){return this.rotateOnAxis(To,t)}rotateY(t){return this.rotateOnAxis(bo,t)}rotateZ(t){return this.rotateOnAxis(Ao,t)}translateOnAxis(t,e){return Eo.copy(t).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(To,t)}translateY(t){return this.translateOnAxis(bo,t)}translateZ(t){return this.translateOnAxis(Ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ji.copy(t):Ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ci.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Ci,Ji,this.up):hn.lookAt(Ji,Ci,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),ni.setFromRotationMatrix(hn),this.quaternion.premultiply(ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,t,_l),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ci,Ml,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),p=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ve.DEFAULT_UP=new D(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new D,dn=new D,Ks=new D,un=new D,ii=new D,si=new D,Ro=new D,Zs=new D,Js=new D,js=new D;let ji=!1;class je{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Je.subVectors(t,e),i.cross(Je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Je.subVectors(i,e),dn.subVectors(n,e),Ks.subVectors(t,e);const a=Je.dot(Je),o=Je.dot(dn),c=Je.dot(Ks),l=dn.dot(dn),h=dn.dot(Ks),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,un)===null?!1:un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(t,e,n,i,r,a,o,c){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),this.getInterpolation(t,e,n,i,r,a,o,c)}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,un.x),c.addScaledVector(a,un.y),c.addScaledVector(o,un.z),c)}static isFrontFacing(t,e,n,i){return Je.subVectors(n,e),dn.subVectors(t,e),Je.cross(dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),Je.cross(dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ii.subVectors(i,n),si.subVectors(r,n),Zs.subVectors(t,n);const c=ii.dot(Zs),l=si.dot(Zs);if(c<=0&&l<=0)return e.copy(n);Js.subVectors(t,i);const h=ii.dot(Js),d=si.dot(Js);if(h>=0&&d<=h)return e.copy(i);const u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ii,a);js.subVectors(t,r);const p=ii.dot(js),_=si.dot(js);if(_>=0&&p<=_)return e.copy(r);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(si,o);const m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return Ro.subVectors(r,i),o=(d-h)/(d-h+(p-_)),e.copy(i).addScaledVector(Ro,o);const f=1/(m+v+u);return a=v*f,o=u*f,e.copy(n).addScaledVector(ii,a).addScaledVector(si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const La={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},$i={h:0,s:0,l:0};function $s(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Tr(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=$s(a,r,t+1/3),this.g=$s(a,r,t),this.b=$s(a,r,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=La[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return oe.fromWorkingColorSpace(Ce.copy(this),t),Math.round(Ee(Ce.r*255,0,255))*65536+Math.round(Ee(Ce.g*255,0,255))*256+Math.round(Ee(Ce.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,r=Ce.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Te){oe.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL($i);const n=Ui(Tn.h,$i.h,e),i=Ui(Tn.s,$i.s,e),r=Ui(Tn.l,$i.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Qt;Qt.NAMES=La;let Sl=0;class Ei extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=mi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pr,this.blendDst=mr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pr&&(n.blendSrc=this.blendSrc),this.blendDst!==mr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fe extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new D,Qi=new Ot;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mo&&(t.usage=this.usage),t}}class Ia extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Da extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ce extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let wl=0;const He=new me,Qs=new ve,ri=new D,ze=new _n,Li=new _n,ye=new D;class Oe extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ta(t)?Da:Ia)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return Qs.lookAt(t),Qs.updateMatrix(),this.applyMatrix4(Qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ce(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(ye.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(ye),ye.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(ye)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Li.setFromBufferAttribute(o),this.morphTargetsRelative?(ye.addVectors(ze.min,Li.min),ze.expandByPoint(ye),ye.addVectors(ze.max,Li.max),ze.expandByPoint(ye)):(ze.expandByPoint(Li.min),ze.expandByPoint(Li.max))}ze.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)ye.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ye));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ye.fromBufferAttribute(o,l),c&&(ri.fromBufferAttribute(t,l),ye.add(ri)),i=Math.max(i,n.distanceToSquared(ye))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new D,h[E]=new D;const d=new D,u=new D,p=new D,_=new Ot,v=new Ot,m=new Ot,f=new D,y=new D;function g(E,C,X){d.fromArray(i,E*3),u.fromArray(i,C*3),p.fromArray(i,X*3),_.fromArray(a,E*2),v.fromArray(a,C*2),m.fromArray(a,X*2),u.sub(d),p.sub(d),v.sub(_),m.sub(_);const ot=1/(v.x*m.y-m.x*v.y);isFinite(ot)&&(f.copy(u).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(ot),y.copy(p).multiplyScalar(v.x).addScaledVector(u,-m.x).multiplyScalar(ot),l[E].add(f),l[C].add(f),l[X].add(f),h[E].add(y),h[C].add(y),h[X].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,C=M.length;E<C;++E){const X=M[E],ot=X.start,N=X.count;for(let B=ot,q=ot+N;B<q;B+=3)g(n[B+0],n[B+1],n[B+2])}const I=new D,R=new D,P=new D,O=new D;function x(E){P.fromArray(r,E*3),O.copy(P);const C=l[E];I.copy(C),I.sub(P.multiplyScalar(P.dot(C))).normalize(),R.crossVectors(O,C);const ot=R.dot(h[E])<0?-1:1;c[E*4]=I.x,c[E*4+1]=I.y,c[E*4+2]=I.z,c[E*4+3]=ot}for(let E=0,C=M.length;E<C;++E){const X=M[E],ot=X.start,N=X.count;for(let B=ot,q=ot+N;B<q;B+=3)x(n[B+0]),x(n[B+1]),x(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){const _=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ye.fromBufferAttribute(t,e),ye.normalize(),t.setXYZ(e,ye.x,ye.y,ye.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let f=0;f<h;f++)u[_++]=l[p++]}return new rn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const u=l[h],p=t(u,n);c.push(p)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){const p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new me,Bn=new Pa,ts=new Es,Co=new D,oi=new D,ai=new D,ci=new D,tr=new D,es=new D,ns=new Ot,is=new Ot,ss=new Ot,Lo=new D,Io=new D,Do=new D,rs=new D,os=new D;class T extends ve{constructor(t=new Oe,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){es.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(tr.fromBufferAttribute(d,t),a?es.addScaledVector(tr,h):es.addScaledVector(tr.sub(e),h))}e.add(es)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(ts.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ts,Co)===null||Bn.origin.distanceToSquared(Co)>(t.far-t.near)**2))&&(Po.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(Po),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){const m=u[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,I=g;M<I;M+=3){const R=o.getX(M),P=o.getX(M+1),O=o.getX(M+2);i=as(this,f,t,n,l,h,d,R,P,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const y=o.getX(m),g=o.getX(m+1),M=o.getX(m+2);i=as(this,a,t,n,l,h,d,y,g,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=u.length;_<v;_++){const m=u[_],f=a[m.materialIndex],y=Math.max(m.start,p.start),g=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let M=y,I=g;M<I;M+=3){const R=M,P=M+1,O=M+2;i=as(this,f,t,n,l,h,d,R,P,O),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const y=m,g=m+1,M=m+2;i=as(this,a,t,n,l,h,d,y,g,M),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function yl(s,t,e,n,i,r,a,o){let c;if(t.side===Ne?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Ln,o),c===null)return null;os.copy(o),os.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(os);return l<e.near||l>e.far?null:{distance:l,point:os.clone(),object:s}}function as(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,oi),s.getVertexPosition(c,ai),s.getVertexPosition(l,ci);const h=yl(s,t,e,n,oi,ai,ci,rs);if(h){i&&(ns.fromBufferAttribute(i,o),is.fromBufferAttribute(i,c),ss.fromBufferAttribute(i,l),h.uv=je.getInterpolation(rs,oi,ai,ci,ns,is,ss,new Ot)),r&&(ns.fromBufferAttribute(r,o),is.fromBufferAttribute(r,c),ss.fromBufferAttribute(r,l),h.uv1=je.getInterpolation(rs,oi,ai,ci,ns,is,ss,new Ot),h.uv2=h.uv1),a&&(Lo.fromBufferAttribute(a,o),Io.fromBufferAttribute(a,c),Do.fromBufferAttribute(a,l),h.normal=je.getInterpolation(rs,oi,ai,ci,Lo,Io,Do,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};je.getNormal(oi,ai,ci,d.normal),h.face=d}return h}class et extends Oe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let u=0,p=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function _(v,m,f,y,g,M,I,R,P,O,x){const E=M/P,C=I/O,X=M/2,ot=I/2,N=R/2,B=P+1,q=O+1;let tt=0,Q=0;const Y=new D;for(let it=0;it<q;it++){const K=it*C-ot;for(let at=0;at<B;at++){const J=at*E-X;Y[v]=J*y,Y[m]=K*g,Y[f]=N,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[f]=R>0?1:-1,h.push(Y.x,Y.y,Y.z),d.push(at/P),d.push(1-it/O),tt+=1}}for(let it=0;it<O;it++)for(let K=0;K<P;K++){const at=u+K+B*it,J=u+K+B*(it+1),nt=u+(K+1)+B*(it+1),ut=u+(K+1)+B*it;c.push(at,J,ut),c.push(J,nt,ut),Q+=6}o.addGroup(p,Q,x),p+=Q,u+=tt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const n=Si(s[e]);for(const i in n)t[i]=n[i]}return t}function El(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ua(s){return s.getRenderTarget()===null?s.outputColorSpace:oe.workingColorSpace}const Tl={clone:Si,merge:De};var bl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Al=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bl,this.fragmentShader=Al,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=El(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Na extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me,this.coordinateSystem=mn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Na{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xi*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Di*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,hi=1;class Rl extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(li,hi,t,e);i.layers=this.layers,this.add(i);const r=new Fe(li,hi,t,e);r.layers=this.layers,this.add(r);const a=new Fe(li,hi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(li,hi,t,e);o.layers=this.layers,this.add(o);const c=new Fe(li,hi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Oa extends Be{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pl extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ni("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qn?Te:Xe),this.texture=new Oa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new et(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Rn});r.uniforms.tEquirect.value=e;const a=new T(i,r),o=e.minFilter;return e.minFilter===Bi&&(e.minFilter=We),new Rl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const er=new D,Cl=new D,Ll=new $t;class kn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=er.subVectors(n,e).cross(Cl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(er),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ll.getNormalMatrix(t),i=this.coplanarPoint(er).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Es,cs=new D;class br{constructor(t=new kn,e=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=mn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],u=i[7],p=i[8],_=i[9],v=i[10],m=i[11],f=i[12],y=i[13],g=i[14],M=i[15];if(n[0].setComponents(c-r,u-l,m-p,M-f).normalize(),n[1].setComponents(c+r,u+l,m+p,M+f).normalize(),n[2].setComponents(c+a,u+h,m+_,M+y).normalize(),n[3].setComponents(c-a,u-h,m-_,M-y).normalize(),n[4].setComponents(c-o,u-d,m-v,M-g).normalize(),e===mn)n[5].setComponents(c+o,u+d,m+v,M+g).normalize();else if(e===Ms)n[5].setComponents(o,d,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(cs.x=i.normal.x>0?t.max.x:t.min.x,cs.y=i.normal.y>0?t.max.y:t.min.y,cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fa(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Il(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,u=l.usage,p=d.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,d,u),l.onUploadCallback();let v;if(d instanceof Float32Array)v=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=s.SHORT;else if(d instanceof Uint32Array)v=s.UNSIGNED_INT;else if(d instanceof Int32Array)v=s.INT;else if(d instanceof Int8Array)v=s.BYTE;else if(d instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:p}}function r(l,h,d){const u=h.array,p=h._updateRange,_=h.updateRanges;if(s.bindBuffer(d,l),p.count===-1&&_.length===0&&s.bufferSubData(d,0,u),_.length!==0){for(let v=0,m=_.length;v<m;v++){const f=_[v];e?s.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u,f.start,f.count):s.bufferSubData(d,f.start*u.BYTES_PER_ELEMENT,u.subarray(f.start,f.start+f.count))}h.clearUpdateRanges()}p.count!==-1&&(e?s.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u,p.offset,p.count):s.bufferSubData(d,p.offset*u.BYTES_PER_ELEMENT,u.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const u=n.get(l);(!u||u.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}class qt extends Oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,u=e/c,p=[],_=[],v=[],m=[];for(let f=0;f<h;f++){const y=f*u-a;for(let g=0;g<l;g++){const M=g*d-r;_.push(M,-y,0),v.push(0,0,1),m.push(g/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let y=0;y<o;y++){const g=y+l*f,M=y+l*(f+1),I=y+1+l*(f+1),R=y+1+l*f;p.push(g,M,R),p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ul=`#ifdef USE_ALPHAHASH
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
#endif`,Nl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ol=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fl=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gl=`#ifdef USE_AOMAP
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
#endif`,kl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zl=`#ifdef USE_BATCHING
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
#endif`,Vl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xl=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ql=`#ifdef USE_IRIDESCENCE
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
#endif`,Yl=`#ifdef USE_BUMPMAP
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
#endif`,Kl=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$l=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ql=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nh=`#define PI 3.141592653589793
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
} // validated`,ih=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sh=`vec3 transformedNormal = objectNormal;
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
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ah=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",hh=`
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
}`,dh=`#ifdef USE_ENVMAP
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
#endif`,uh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fh=`#ifdef USE_ENVMAP
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
#endif`,ph=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_h=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xh=`#ifdef USE_GRADIENTMAP
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
}`,Sh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Th=`uniform bool receiveShadow;
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
#endif`,bh=`#ifdef USE_ENVMAP
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
#endif`,Ah=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ph=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lh=`PhysicalMaterial material;
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
#endif`,Ih=`struct PhysicalMaterial {
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
}`,Dh=`
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Oh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Gh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,kh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hh=`#if defined( USE_POINTS_UV )
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
#endif`,Wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yh=`#ifdef USE_MORPHNORMALS
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
#endif`,Kh=`#ifdef USE_MORPHTARGETS
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
#endif`,Zh=`#ifdef USE_MORPHTARGETS
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
#endif`,Jh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$h=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
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
#endif`,nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,od=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ad=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_d=`float getShadowMask() {
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
}`,Md=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vd=`#ifdef USE_SKINNING
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
#endif`,xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sd=`#ifdef USE_SKINNING
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
#endif`,wd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Td=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bd=`#ifdef USE_TRANSMISSION
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
#endif`,Ad=`#ifdef USE_TRANSMISSION
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Id=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dd=`uniform sampler2D t2D;
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
}`,Ud=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`#include <common>
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
}`,Gd=`#if DEPTH_PACKING == 3200
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
}`,kd=`#define DISTANCE
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
}`,zd=`#define DISTANCE
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`uniform float scale;
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
}`,Xd=`uniform vec3 diffuse;
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
}`,qd=`#include <common>
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
}`,Yd=`uniform vec3 diffuse;
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
}`,Kd=`#define LAMBERT
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
}`,Zd=`#define LAMBERT
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
}`,Jd=`#define MATCAP
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
}`,jd=`#define MATCAP
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
}`,$d=`#define NORMAL
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
}`,Qd=`#define NORMAL
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
}`,tu=`#define PHONG
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
}`,eu=`#define PHONG
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
}`,nu=`#define STANDARD
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
}`,iu=`#define STANDARD
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
}`,su=`#define TOON
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
}`,ru=`#define TOON
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
}`,ou=`uniform float size;
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
}`,au=`uniform vec3 diffuse;
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
}`,cu=`#include <common>
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
}`,lu=`uniform vec3 color;
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
}`,hu=`uniform float rotation;
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
}`,du=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Dl,alphahash_pars_fragment:Ul,alphamap_fragment:Nl,alphamap_pars_fragment:Ol,alphatest_fragment:Fl,alphatest_pars_fragment:Bl,aomap_fragment:Gl,aomap_pars_fragment:kl,batching_pars_vertex:zl,batching_vertex:Vl,begin_vertex:Hl,beginnormal_vertex:Wl,bsdfs:Xl,iridescence_fragment:ql,bumpmap_pars_fragment:Yl,clipping_planes_fragment:Kl,clipping_planes_pars_fragment:Zl,clipping_planes_pars_vertex:Jl,clipping_planes_vertex:jl,color_fragment:$l,color_pars_fragment:Ql,color_pars_vertex:th,color_vertex:eh,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:sh,displacementmap_pars_vertex:rh,displacementmap_vertex:oh,emissivemap_fragment:ah,emissivemap_pars_fragment:ch,colorspace_fragment:lh,colorspace_pars_fragment:hh,envmap_fragment:dh,envmap_common_pars_fragment:uh,envmap_pars_fragment:fh,envmap_pars_vertex:ph,envmap_physical_pars_fragment:bh,envmap_vertex:mh,fog_vertex:gh,fog_pars_vertex:_h,fog_fragment:Mh,fog_pars_fragment:vh,gradientmap_pars_fragment:xh,lightmap_fragment:Sh,lightmap_pars_fragment:wh,lights_lambert_fragment:yh,lights_lambert_pars_fragment:Eh,lights_pars_begin:Th,lights_toon_fragment:Ah,lights_toon_pars_fragment:Rh,lights_phong_fragment:Ph,lights_phong_pars_fragment:Ch,lights_physical_fragment:Lh,lights_physical_pars_fragment:Ih,lights_fragment_begin:Dh,lights_fragment_maps:Uh,lights_fragment_end:Nh,logdepthbuf_fragment:Oh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Bh,logdepthbuf_vertex:Gh,map_fragment:kh,map_pars_fragment:zh,map_particle_fragment:Vh,map_particle_pars_fragment:Hh,metalnessmap_fragment:Wh,metalnessmap_pars_fragment:Xh,morphcolor_vertex:qh,morphnormal_vertex:Yh,morphtarget_pars_vertex:Kh,morphtarget_vertex:Zh,normal_fragment_begin:Jh,normal_fragment_maps:jh,normal_pars_fragment:$h,normal_pars_vertex:Qh,normal_vertex:td,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:nd,clearcoat_normal_fragment_maps:id,clearcoat_pars_fragment:sd,iridescence_pars_fragment:rd,opaque_fragment:od,packing:ad,premultiplied_alpha_fragment:cd,project_vertex:ld,dithering_fragment:hd,dithering_pars_fragment:dd,roughnessmap_fragment:ud,roughnessmap_pars_fragment:fd,shadowmap_pars_fragment:pd,shadowmap_pars_vertex:md,shadowmap_vertex:gd,shadowmask_pars_fragment:_d,skinbase_vertex:Md,skinning_pars_vertex:vd,skinning_vertex:xd,skinnormal_vertex:Sd,specularmap_fragment:wd,specularmap_pars_fragment:yd,tonemapping_fragment:Ed,tonemapping_pars_fragment:Td,transmission_fragment:bd,transmission_pars_fragment:Ad,uv_pars_fragment:Rd,uv_pars_vertex:Pd,uv_vertex:Cd,worldpos_vertex:Ld,background_vert:Id,background_frag:Dd,backgroundCube_vert:Ud,backgroundCube_frag:Nd,cube_vert:Od,cube_frag:Fd,depth_vert:Bd,depth_frag:Gd,distanceRGBA_vert:kd,distanceRGBA_frag:zd,equirect_vert:Vd,equirect_frag:Hd,linedashed_vert:Wd,linedashed_frag:Xd,meshbasic_vert:qd,meshbasic_frag:Yd,meshlambert_vert:Kd,meshlambert_frag:Zd,meshmatcap_vert:Jd,meshmatcap_frag:jd,meshnormal_vert:$d,meshnormal_frag:Qd,meshphong_vert:tu,meshphong_frag:eu,meshphysical_vert:nu,meshphysical_frag:iu,meshtoon_vert:su,meshtoon_frag:ru,points_vert:ou,points_frag:au,shadow_vert:cu,shadow_frag:lu,sprite_vert:hu,sprite_frag:du},mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},sn={basic:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:De([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:De([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:De([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:De([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:De([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:De([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:De([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:De([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:De([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:De([mt.common,mt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:De([mt.lights,mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};sn.physical={uniforms:De([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const ls={r:0,b:0,g:0};function uu(s,t,e,n,i,r,a){const o=new Qt(0);let c=r===!0?0:1,l,h,d=null,u=0,p=null;function _(m,f){let y=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?e:t).get(g)),g===null?v(o,c):g&&g.isColor&&(v(g,1),y=!0);const M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ws)?(h===void 0&&(h=new T(new et(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Si(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=oe.getTransfer(g.colorSpace)!==le,(d!==g||u!==g.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=g,u=g.version,p=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new T(new qt(2,2),new Kn({name:"BackgroundMaterial",uniforms:Si(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=oe.getTransfer(g.colorSpace)!==le,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||u!==g.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=g,u=g.version,p=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function v(m,f){m.getRGB(ls,Ua(s)),n.buffers.color.setClear(ls.r,ls.g,ls.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),c=f,v(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(o,c)},render:_}}function fu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,h=!1;function d(N,B,q,tt,Q){let Y=!1;if(a){const it=v(tt,q,B);l!==it&&(l=it,p(l.object)),Y=f(N,tt,q,Q),Y&&y(N,tt,q,Q)}else{const it=B.wireframe===!0;(l.geometry!==tt.id||l.program!==q.id||l.wireframe!==it)&&(l.geometry=tt.id,l.program=q.id,l.wireframe=it,Y=!0)}Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,O(N,B,q,tt),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function u(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function p(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function v(N,B,q){const tt=q.wireframe===!0;let Q=o[N.id];Q===void 0&&(Q={},o[N.id]=Q);let Y=Q[B.id];Y===void 0&&(Y={},Q[B.id]=Y);let it=Y[tt];return it===void 0&&(it=m(u()),Y[tt]=it),it}function m(N){const B=[],q=[],tt=[];for(let Q=0;Q<i;Q++)B[Q]=0,q[Q]=0,tt[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:tt,object:N,attributes:{},index:null}}function f(N,B,q,tt){const Q=l.attributes,Y=B.attributes;let it=0;const K=q.getAttributes();for(const at in K)if(K[at].location>=0){const nt=Q[at];let ut=Y[at];if(ut===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(ut=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(ut=N.instanceColor)),nt===void 0||nt.attribute!==ut||ut&&nt.data!==ut.data)return!0;it++}return l.attributesNum!==it||l.index!==tt}function y(N,B,q,tt){const Q={},Y=B.attributes;let it=0;const K=q.getAttributes();for(const at in K)if(K[at].location>=0){let nt=Y[at];nt===void 0&&(at==="instanceMatrix"&&N.instanceMatrix&&(nt=N.instanceMatrix),at==="instanceColor"&&N.instanceColor&&(nt=N.instanceColor));const ut={};ut.attribute=nt,nt&&nt.data&&(ut.data=nt.data),Q[at]=ut,it++}l.attributes=Q,l.attributesNum=it,l.index=tt}function g(){const N=l.newAttributes;for(let B=0,q=N.length;B<q;B++)N[B]=0}function M(N){I(N,0)}function I(N,B){const q=l.newAttributes,tt=l.enabledAttributes,Q=l.attributeDivisors;q[N]=1,tt[N]===0&&(s.enableVertexAttribArray(N),tt[N]=1),Q[N]!==B&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,B),Q[N]=B)}function R(){const N=l.newAttributes,B=l.enabledAttributes;for(let q=0,tt=B.length;q<tt;q++)B[q]!==N[q]&&(s.disableVertexAttribArray(q),B[q]=0)}function P(N,B,q,tt,Q,Y,it){it===!0?s.vertexAttribIPointer(N,B,q,Q,Y):s.vertexAttribPointer(N,B,q,tt,Q,Y)}function O(N,B,q,tt){if(n.isWebGL2===!1&&(N.isInstancedMesh||tt.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const Q=tt.attributes,Y=q.getAttributes(),it=B.defaultAttributeValues;for(const K in Y){const at=Y[K];if(at.location>=0){let J=Q[K];if(J===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){const nt=J.normalized,ut=J.itemSize,Tt=e.get(J);if(Tt===void 0)continue;const Et=Tt.buffer,It=Tt.type,Ut=Tt.bytesPerElement,Ct=n.isWebGL2===!0&&(It===s.INT||It===s.UNSIGNED_INT||J.gpuType===ma);if(J.isInterleavedBufferAttribute){const St=J.data,V=St.stride,Wt=J.offset;if(St.isInstancedInterleavedBuffer){for(let Rt=0;Rt<at.locationSize;Rt++)I(at.location+Rt,St.meshPerAttribute);N.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let Rt=0;Rt<at.locationSize;Rt++)M(at.location+Rt);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let Rt=0;Rt<at.locationSize;Rt++)P(at.location+Rt,ut/at.locationSize,It,nt,V*Ut,(Wt+ut/at.locationSize*Rt)*Ut,Ct)}else{if(J.isInstancedBufferAttribute){for(let St=0;St<at.locationSize;St++)I(at.location+St,J.meshPerAttribute);N.isInstancedMesh!==!0&&tt._maxInstanceCount===void 0&&(tt._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let St=0;St<at.locationSize;St++)M(at.location+St);s.bindBuffer(s.ARRAY_BUFFER,Et);for(let St=0;St<at.locationSize;St++)P(at.location+St,ut/at.locationSize,It,nt,ut*Ut,ut/at.locationSize*St*Ut,Ct)}}else if(it!==void 0){const nt=it[K];if(nt!==void 0)switch(nt.length){case 2:s.vertexAttrib2fv(at.location,nt);break;case 3:s.vertexAttrib3fv(at.location,nt);break;case 4:s.vertexAttrib4fv(at.location,nt);break;default:s.vertexAttrib1fv(at.location,nt)}}}}R()}function x(){X();for(const N in o){const B=o[N];for(const q in B){const tt=B[q];for(const Q in tt)_(tt[Q].object),delete tt[Q];delete B[q]}delete o[N]}}function E(N){if(o[N.id]===void 0)return;const B=o[N.id];for(const q in B){const tt=B[q];for(const Q in tt)_(tt[Q].object),delete tt[Q];delete B[q]}delete o[N.id]}function C(N){for(const B in o){const q=o[B];if(q[N.id]===void 0)continue;const tt=q[N.id];for(const Q in tt)_(tt[Q].object),delete tt[Q];delete q[N.id]}}function X(){ot(),h=!0,l!==c&&(l=c,p(l.object))}function ot(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:X,resetDefaultState:ot,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:M,disableUnusedAttributes:R}}function pu(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),e.update(d,r,1)}function c(h,d,u){if(u===0)return;let p,_;if(i)p=s,_="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[_](r,h,d,u),e.update(d,r,u)}function l(h,d,u){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u;_++)this.render(h[_],d[_]);else{p.multiDrawArraysWEBGL(r,h,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=d[v];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function mu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),f=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=u>0,M=a||t.has("OES_texture_float"),I=g&&M,R=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:u,maxTextureSize:p,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:g,floatFragmentTextures:M,floatVertexTextures:I,maxSamples:R}}function gu(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new kn,o=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const _=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const y=r?0:n,g=y*4;let M=f.clippingState||null;c.value=M,M=h(_,u,g,p);for(let I=0;I!==g;++I)M[I]=e[I];f.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,_){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const f=p+v*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,M=p;g!==v;++g,M+=4)a.copy(d[g]).applyMatrix4(y,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function _u(s){let t=new WeakMap;function e(a,o){return o===gr?a.mapping=_i:o===_r&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===gr||o===_r)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Pl(c.height/2);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ba extends Na{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fi=4,Uo=[.125,.215,.35,.446,.526,.582],Hn=20,nr=new Ba,No=new Qt;let ir=null,sr=0,rr=0;const zn=(1+Math.sqrt(5))/2,di=1/zn,Oo=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,zn,di),new D(0,zn,-di),new D(di,0,zn),new D(-di,0,zn),new D(zn,di,0),new D(-zn,di,0)];class Fo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ir,sr,rr),t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ir=this._renderer.getRenderTarget(),sr=this._renderer.getActiveCubeFace(),rr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Gi,format:Qe,colorSpace:gn,depthBuffer:!1},i=Bo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mu(r)),this._blurMaterial=vu(r,t,e)}return i}_compileMaterial(t){const e=new T(this._lodPlanes[0],t);this._renderer.compile(e,nr)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(No),h.toneMapping=Pn,h.autoClear=!1;const p=new fe({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),_=new T(new et,p);let v=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,v=!0):(p.color.copy(No),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):y===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const g=this._cubeSize;hs(i,y*g,f>2?g:0,g,g),h.setRenderTarget(i),v&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_i||t.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new T(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;hs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Oo[(i-1)%Oo.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new T(this._lodPlanes[i],l),u=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Hn-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Hn;m>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const f=[];let y=0;for(let P=0;P<Hn;++P){const O=P/v,x=Math.exp(-O*O/2);f.push(x),P===0?y+=x:P<m&&(y+=2*x)}for(let P=0;P<f.length;P++)f[P]=f[P]/y;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:g}=this;u.dTheta.value=_,u.mipInt.value=g-n;const M=this._sizeLods[i],I=3*M*(i>g-fi?i-g+fi:0),R=4*(this._cubeSize-M);hs(e,I,R,3*M,2*M),c.setRenderTarget(e),c.render(d,nr)}}function Mu(s){const t=[],e=[],n=[];let i=s;const r=s-fi+1+Uo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-fi?c=Uo[a-s+fi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,v=3,m=2,f=1,y=new Float32Array(v*_*p),g=new Float32Array(m*_*p),M=new Float32Array(f*_*p);for(let R=0;R<p;R++){const P=R%3*2/3-1,O=R>2?0:-1,x=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];y.set(x,v*_*R),g.set(u,m*_*R);const E=[R,R,R,R,R,R];M.set(E,f*_*R)}const I=new Oe;I.setAttribute("position",new rn(y,v)),I.setAttribute("uv",new rn(g,m)),I.setAttribute("faceIndex",new rn(M,f)),t.push(I),i>fi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bo(s,t,e){const n=new Yn(s,t,e);return n.texture.mapping=ws,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function vu(s,t,e){const n=new Float32Array(Hn),i=new D(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Go(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ar(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ko(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ar(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Ar(){return`

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
	`}function xu(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===gr||c===_r,h=c===_i||c===Mi;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Fo(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Fo(s));const u=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,u),o.addEventListener("dispose",r),u.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Su(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wu(s,t,e,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const _ in u.attributes)t.remove(u.attributes[_]);for(const _ in u.morphAttributes){const v=u.morphAttributes[_];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function c(d){const u=d.attributes;for(const _ in u)t.update(u[_],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const v=p[_];for(let m=0,f=v.length;m<f;m++)t.update(v[m],s.ARRAY_BUFFER)}}function l(d){const u=[],p=d.index,_=d.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let g=0,M=y.length;g<M;g+=3){const I=y[g+0],R=y[g+1],P=y[g+2];u.push(I,R,R,P,P,I)}}else if(_!==void 0){const y=_.array;v=_.version;for(let g=0,M=y.length/3-1;g<M;g+=3){const I=g+0,R=g+1,P=g+2;u.push(I,R,R,P,P,I)}}else return;const m=new(Ta(u)?Da:Ia)(u,1);m.version=v;const f=r.get(d);f&&t.remove(f),r.set(d,m)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function yu(s,t,e,n){const i=n.isWebGL2;let r;function a(p){r=p}let o,c;function l(p){o=p.type,c=p.bytesPerElement}function h(p,_){s.drawElements(r,_,o,p*c),e.update(_,r,1)}function d(p,_,v){if(v===0)return;let m,f;if(i)m=s,f="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](r,_,o,p*c,v),e.update(_,r,v)}function u(p,_,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<v;f++)this.render(p[f]/c,_[f]);else{m.multiDrawElementsWEBGL(r,_,0,o,p,0,v);let f=0;for(let y=0;y<v;y++)f+=_[y];e.update(f,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=u}function Eu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Tu(s,t){return s[0]-t[0]}function bu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Au(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new de,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const u=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==v){let B=function(){ot.dispose(),r.delete(h),h.removeEventListener("dispose",B)};var p=B;m!==void 0&&m.texture.dispose();const g=h.morphAttributes.position!==void 0,M=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let x=0;g===!0&&(x=1),M===!0&&(x=2),I===!0&&(x=3);let E=h.attributes.position.count*x,C=1;E>t.maxTextureSize&&(C=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const X=new Float32Array(E*C*4*v),ot=new Ra(X,E,C,v);ot.type=An,ot.needsUpdate=!0;const N=x*4;for(let q=0;q<v;q++){const tt=R[q],Q=P[q],Y=O[q],it=E*C*4*q;for(let K=0;K<tt.count;K++){const at=K*N;g===!0&&(a.fromBufferAttribute(tt,K),X[it+at+0]=a.x,X[it+at+1]=a.y,X[it+at+2]=a.z,X[it+at+3]=0),M===!0&&(a.fromBufferAttribute(Q,K),X[it+at+4]=a.x,X[it+at+5]=a.y,X[it+at+6]=a.z,X[it+at+7]=0),I===!0&&(a.fromBufferAttribute(Y,K),X[it+at+8]=a.x,X[it+at+9]=a.y,X[it+at+10]=a.z,X[it+at+11]=Y.itemSize===4?a.w:1)}}m={count:v,texture:ot,size:new Ot(E,C)},r.set(h,m),h.addEventListener("dispose",B)}let f=0;for(let g=0;g<u.length;g++)f+=u[g];const y=h.morphTargetsRelative?1:1-f;d.getUniforms().setValue(s,"morphTargetBaseInfluence",y),d.getUniforms().setValue(s,"morphTargetInfluences",u),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=u===void 0?0:u.length;let v=n[h.id];if(v===void 0||v.length!==_){v=[];for(let M=0;M<_;M++)v[M]=[M,0];n[h.id]=v}for(let M=0;M<_;M++){const I=v[M];I[0]=M,I[1]=u[M]}v.sort(bu);for(let M=0;M<8;M++)M<_&&v[M][1]?(o[M][0]=v[M][0],o[M][1]=v[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Tu);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const I=o[M],R=I[0],P=I[1];R!==Number.MAX_SAFE_INTEGER&&P?(m&&h.getAttribute("morphTarget"+M)!==m[R]&&h.setAttribute("morphTarget"+M,m[R]),f&&h.getAttribute("morphNormal"+M)!==f[R]&&h.setAttribute("morphNormal"+M,f[R]),i[M]=P,y+=P):(m&&h.hasAttribute("morphTarget"+M)===!0&&h.deleteAttribute("morphTarget"+M),f&&h.hasAttribute("morphNormal"+M)===!0&&h.deleteAttribute("morphNormal"+M),i[M]=0)}const g=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",g),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Ru(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==l&&(u.update(),i.set(u,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Ga extends Be{constructor(t,e,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Xn,h!==Xn&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xn&&(n=bn),n===void 0&&h===vi&&(n=Wn),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ka=new Be,za=new Ga(1,1);za.compareFunction=Ea;const Va=new Ra,Ha=new ul,Wa=new Oa,zo=[],Vo=[],Ho=new Float32Array(16),Wo=new Float32Array(9),Xo=new Float32Array(4);function Ti(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=zo[i];if(r===void 0&&(r=new Float32Array(i),zo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function bs(s,t){let e=Vo[t];e===void 0&&(e=new Int32Array(t),Vo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Pu(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Cu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function Lu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function Iu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function Du(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(xe(e,n))return;Xo.set(n),s.uniformMatrix2fv(this.addr,!1,Xo),Se(e,n)}}function Uu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(xe(e,n))return;Wo.set(n),s.uniformMatrix3fv(this.addr,!1,Wo),Se(e,n)}}function Nu(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(xe(e,n))return;Ho.set(n),s.uniformMatrix4fv(this.addr,!1,Ho),Se(e,n)}}function Ou(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Fu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function Bu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function Gu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function ku(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function zu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function Vu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function Hu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function Wu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?za:ka;e.setTexture2D(t||r,i)}function Xu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ha,i)}function qu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wa,i)}function Yu(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Va,i)}function Ku(s){switch(s){case 5126:return Pu;case 35664:return Cu;case 35665:return Lu;case 35666:return Iu;case 35674:return Du;case 35675:return Uu;case 35676:return Nu;case 5124:case 35670:return Ou;case 35667:case 35671:return Fu;case 35668:case 35672:return Bu;case 35669:case 35673:return Gu;case 5125:return ku;case 36294:return zu;case 36295:return Vu;case 36296:return Hu;case 35678:case 36198:case 36298:case 36306:case 35682:return Wu;case 35679:case 36299:case 36307:return Xu;case 35680:case 36300:case 36308:case 36293:return qu;case 36289:case 36303:case 36311:case 36292:return Yu}}function Zu(s,t){s.uniform1fv(this.addr,t)}function Ju(s,t){const e=Ti(t,this.size,2);s.uniform2fv(this.addr,e)}function ju(s,t){const e=Ti(t,this.size,3);s.uniform3fv(this.addr,e)}function $u(s,t){const e=Ti(t,this.size,4);s.uniform4fv(this.addr,e)}function Qu(s,t){const e=Ti(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function tf(s,t){const e=Ti(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ef(s,t){const e=Ti(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function nf(s,t){s.uniform1iv(this.addr,t)}function sf(s,t){s.uniform2iv(this.addr,t)}function rf(s,t){s.uniform3iv(this.addr,t)}function of(s,t){s.uniform4iv(this.addr,t)}function af(s,t){s.uniform1uiv(this.addr,t)}function cf(s,t){s.uniform2uiv(this.addr,t)}function lf(s,t){s.uniform3uiv(this.addr,t)}function hf(s,t){s.uniform4uiv(this.addr,t)}function df(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ka,r[a])}function uf(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ha,r[a])}function ff(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Wa,r[a])}function pf(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Va,r[a])}function mf(s){switch(s){case 5126:return Zu;case 35664:return Ju;case 35665:return ju;case 35666:return $u;case 35674:return Qu;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return sf;case 35668:case 35672:return rf;case 35669:case 35673:return of;case 5125:return af;case 36294:return cf;case 36295:return lf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return df;case 35679:case 36299:case 36307:return uf;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}class gf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ku(e.type)}}class _f{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mf(e.type)}}class Mf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const or=/(\w+)(\])?(\[|\.)?/g;function qo(s,t){s.seq.push(t),s.map[t.id]=t}function vf(s,t,e){const n=s.name,i=n.length;for(or.lastIndex=0;;){const r=or.exec(n),a=or.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){qo(e,l===void 0?new gf(o,s,t):new _f(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Mf(o),qo(e,d)),e=d}}}class fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);vf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Yo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const xf=37297;let Sf=0;function wf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function yf(s){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(s);let n;switch(t===e?n="":t===_s&&e===gs?n="LinearDisplayP3ToLinearSRGB":t===gs&&e===_s&&(n="LinearSRGBToLinearDisplayP3"),s){case gn:case ys:return[n,"LinearTransferOETF"];case Te:case Er:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ko(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+wf(s.getShaderSource(t),a)}else return i}function Ef(s,t){const e=yf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tf(s,t){let e;switch(t){case yc:e="Linear";break;case Ec:e="Reinhard";break;case Tc:e="OptimizedCineon";break;case fa:e="ACESFilmic";break;case Ac:e="AgX";break;case bc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function bf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pi).join(`
`)}function Af(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pi).join(`
`)}function Rf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function pi(s){return s!==""}function Zo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Cf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sr(s){return s.replace(Cf,If)}const Lf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function If(s,t){let e=Zt[t];if(e===void 0){const n=Lf.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sr(e)}const Df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(s){return s.replace(Df,Uf)}function Uf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $o(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ha?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===da?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Of(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case Mi:t="ENVMAP_TYPE_CUBE";break;case ws:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ff(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mi:t="ENVMAP_MODE_REFRACTION";break}return t}function Bf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ua:t="ENVMAP_BLENDING_MULTIPLY";break;case Sc:t="ENVMAP_BLENDING_MIX";break;case wc:t="ENVMAP_BLENDING_ADD";break}return t}function Gf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kf(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Nf(e),l=Of(e),h=Ff(e),d=Bf(e),u=Gf(e),p=e.isWebGL2?"":bf(e),_=Af(e),v=Rf(r),m=i.createProgram();let f,y,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(pi).join(`
`),f.length>0&&(f+=`
`),y=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(pi).join(`
`),y.length>0&&(y+=`
`)):(f=[$o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pi).join(`
`),y=[p,$o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Pn?"#define TONE_MAPPING":"",e.toneMapping!==Pn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Pn?Tf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Ef("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pi).join(`
`)),a=Sr(a),a=Zo(a,e),a=Jo(a,e),o=Sr(o),o=Zo(o,e),o=Jo(o,e),a=jo(a),o=jo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const M=g+f+a,I=g+y+o,R=Yo(i,i.VERTEX_SHADER,M),P=Yo(i,i.FRAGMENT_SHADER,I);i.attachShader(m,R),i.attachShader(m,P),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function O(X){if(s.debug.checkShaderErrors){const ot=i.getProgramInfoLog(m).trim(),N=i.getShaderInfoLog(R).trim(),B=i.getShaderInfoLog(P).trim();let q=!0,tt=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,R,P);else{const Q=Ko(i,R,"vertex"),Y=Ko(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+ot+`
`+Q+`
`+Y)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(N===""||B==="")&&(tt=!1);tt&&(X.diagnostics={runnable:q,programLog:ot,vertexShader:{log:N,prefix:f},fragmentShader:{log:B,prefix:y}})}i.deleteShader(R),i.deleteShader(P),x=new fs(i,m),E=Pf(i,m)}let x;this.getUniforms=function(){return x===void 0&&O(this),x};let E;this.getAttributes=function(){return E===void 0&&O(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(m,xf)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=P,this}let zf=0;class Vf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hf(t),e.set(t,n)),n}}class Hf{constructor(t){this.id=zf++,this.code=t,this.usedTimes=0}}function Wf(s,t,e,n,i,r,a){const o=new Ca,c=new Vf,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,E,C,X,ot){const N=X.fog,B=ot.geometry,q=x.isMeshStandardMaterial?X.environment:null,tt=(x.isMeshStandardMaterial?e:t).get(x.envMap||q),Q=tt&&tt.mapping===ws?tt.image.height:null,Y=_[x.type];x.precision!==null&&(p=i.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const it=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,K=it!==void 0?it.length:0;let at=0;B.morphAttributes.position!==void 0&&(at=1),B.morphAttributes.normal!==void 0&&(at=2),B.morphAttributes.color!==void 0&&(at=3);let J,nt,ut,Tt;if(Y){const ee=sn[Y];J=ee.vertexShader,nt=ee.fragmentShader}else J=x.vertexShader,nt=x.fragmentShader,c.update(x),ut=c.getVertexShaderID(x),Tt=c.getFragmentShaderID(x);const Et=s.getRenderTarget(),It=ot.isInstancedMesh===!0,Ut=ot.isBatchedMesh===!0,Ct=!!x.map,St=!!x.matcap,V=!!tt,Wt=!!x.aoMap,Rt=!!x.lightMap,Lt=!!x.bumpMap,vt=!!x.normalMap,se=!!x.displacementMap,Gt=!!x.emissiveMap,A=!!x.metalnessMap,S=!!x.roughnessMap,H=x.anisotropy>0,W=x.clearcoat>0,j=x.iridescence>0,Z=x.sheen>0,yt=x.transmission>0,lt=H&&!!x.anisotropyMap,xt=W&&!!x.clearcoatMap,Nt=W&&!!x.clearcoatNormalMap,gt=W&&!!x.clearcoatRoughnessMap,st=j&&!!x.iridescenceMap,Jt=j&&!!x.iridescenceThicknessMap,Vt=Z&&!!x.sheenColorMap,Bt=Z&&!!x.sheenRoughnessMap,Pt=!!x.specularMap,wt=!!x.specularColorMap,Dt=!!x.specularIntensityMap,Yt=yt&&!!x.transmissionMap,re=yt&&!!x.thicknessMap,zt=!!x.gradientMap,ht=!!x.alphaMap,U=x.alphaTest>0,ft=!!x.alphaHash,dt=!!x.extensions,k=!!B.attributes.uv1,ct=!!B.attributes.uv2,_t=!!B.attributes.uv3;let bt=Pn;return x.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(bt=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:J,fragmentShader:nt,defines:x.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:Ut,instancing:It,instancingColor:It&&ot.instanceColor!==null,supportsVertexTextures:u,outputColorSpace:Et===null?s.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:gn,map:Ct,matcap:St,envMap:V,envMapMode:V&&tt.mapping,envMapCubeUVHeight:Q,aoMap:Wt,lightMap:Rt,bumpMap:Lt,normalMap:vt,displacementMap:u&&se,emissiveMap:Gt,normalMapObjectSpace:vt&&x.normalMapType===Gc,normalMapTangentSpace:vt&&x.normalMapType===ya,metalnessMap:A,roughnessMap:S,anisotropy:H,anisotropyMap:lt,clearcoat:W,clearcoatMap:xt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:gt,iridescence:j,iridescenceMap:st,iridescenceThicknessMap:Jt,sheen:Z,sheenColorMap:Vt,sheenRoughnessMap:Bt,specularMap:Pt,specularColorMap:wt,specularIntensityMap:Dt,transmission:yt,transmissionMap:Yt,thicknessMap:re,gradientMap:zt,opaque:x.transparent===!1&&x.blending===mi,alphaMap:ht,alphaTest:U,alphaHash:ft,combine:x.combine,mapUv:Ct&&v(x.map.channel),aoMapUv:Wt&&v(x.aoMap.channel),lightMapUv:Rt&&v(x.lightMap.channel),bumpMapUv:Lt&&v(x.bumpMap.channel),normalMapUv:vt&&v(x.normalMap.channel),displacementMapUv:se&&v(x.displacementMap.channel),emissiveMapUv:Gt&&v(x.emissiveMap.channel),metalnessMapUv:A&&v(x.metalnessMap.channel),roughnessMapUv:S&&v(x.roughnessMap.channel),anisotropyMapUv:lt&&v(x.anisotropyMap.channel),clearcoatMapUv:xt&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&v(x.sheenRoughnessMap.channel),specularMapUv:Pt&&v(x.specularMap.channel),specularColorMapUv:wt&&v(x.specularColorMap.channel),specularIntensityMapUv:Dt&&v(x.specularIntensityMap.channel),transmissionMapUv:Yt&&v(x.transmissionMap.channel),thicknessMapUv:re&&v(x.thicknessMap.channel),alphaMapUv:ht&&v(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(vt||H),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:k,vertexUv2s:ct,vertexUv3s:_t,pointsUvs:ot.isPoints===!0&&!!B.attributes.uv&&(Ct||ht),fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:ot.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:at,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:bt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&oe.getTransfer(x.map.colorSpace)===le,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===be,flipSided:x.side===Ne,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:dt&&x.extensions.derivatives===!0,extensionFragDepth:dt&&x.extensions.fragDepth===!0,extensionDrawBuffers:dt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)E.push(C),E.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(y(E,x),g(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function y(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function g(x,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function M(x){const E=_[x.type];let C;if(E){const X=sn[E];C=Tl.clone(X.uniforms)}else C=x.uniforms;return C}function I(x,E){let C;for(let X=0,ot=l.length;X<ot;X++){const N=l[X];if(N.cacheKey===E){C=N,++C.usedTimes;break}}return C===void 0&&(C=new kf(s,E,x,r),l.push(C)),C}function R(x){if(--x.usedTimes===0){const E=l.indexOf(x);l[E]=l[l.length-1],l.pop(),x.destroy()}}function P(x){c.remove(x)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:M,acquireProgram:I,releaseProgram:R,releaseShaderCache:P,programs:l,dispose:O}}function Xf(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function qf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Qo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ta(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,u,p,_,v,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:_,renderOrder:d.renderOrder,z:v,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=_,f.renderOrder=d.renderOrder,f.z=v,f.group=m),t++,f}function o(d,u,p,_,v,m){const f=a(d,u,p,_,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function c(d,u,p,_,v,m){const f=a(d,u,p,_,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function l(d,u){e.length>1&&e.sort(d||qf),n.length>1&&n.sort(u||Qo),i.length>1&&i.sort(u||Qo)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Yf(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new ta,s.set(n,[a])):i>=r.length?(a=new ta,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Qt};break;case"SpotLight":e={position:new D,direction:new D,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Zf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Jf=0;function jf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $f(s,t){const e=new Kf,n=Zf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const r=new D,a=new me,o=new me;function c(h,d){let u=0,p=0,_=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let v=0,m=0,f=0,y=0,g=0,M=0,I=0,R=0,P=0,O=0,x=0;h.sort(jf);const E=d===!0?Math.PI:1;for(let X=0,ot=h.length;X<ot;X++){const N=h[X],B=N.color,q=N.intensity,tt=N.distance,Q=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)u+=B.r*q*E,p+=B.g*q*E,_+=B.b*q*E;else if(N.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(N.sh.coefficients[Y],q);x++}else if(N.isDirectionalLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const it=N.shadow,K=n.get(N);K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,i.directionalShadow[v]=K,i.directionalShadowMap[v]=Q,i.directionalShadowMatrix[v]=N.shadow.matrix,M++}i.directional[v]=Y,v++}else if(N.isSpotLight){const Y=e.get(N);Y.position.setFromMatrixPosition(N.matrixWorld),Y.color.copy(B).multiplyScalar(q*E),Y.distance=tt,Y.coneCos=Math.cos(N.angle),Y.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Y.decay=N.decay,i.spot[f]=Y;const it=N.shadow;if(N.map&&(i.spotLightMap[P]=N.map,P++,it.updateMatrices(N),N.castShadow&&O++),i.spotLightMatrix[f]=it.matrix,N.castShadow){const K=n.get(N);K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,i.spotShadow[f]=K,i.spotShadowMap[f]=Q,R++}f++}else if(N.isRectAreaLight){const Y=e.get(N);Y.color.copy(B).multiplyScalar(q),Y.halfWidth.set(N.width*.5,0,0),Y.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=Y,y++}else if(N.isPointLight){const Y=e.get(N);if(Y.color.copy(N.color).multiplyScalar(N.intensity*E),Y.distance=N.distance,Y.decay=N.decay,N.castShadow){const it=N.shadow,K=n.get(N);K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,K.shadowCameraNear=it.camera.near,K.shadowCameraFar=it.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=Q,i.pointShadowMatrix[m]=N.shadow.matrix,I++}i.point[m]=Y,m++}else if(N.isHemisphereLight){const Y=e.get(N);Y.skyColor.copy(N.color).multiplyScalar(q*E),Y.groundColor.copy(N.groundColor).multiplyScalar(q*E),i.hemi[g]=Y,g++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=u,i.ambient[1]=p,i.ambient[2]=_;const C=i.hash;(C.directionalLength!==v||C.pointLength!==m||C.spotLength!==f||C.rectAreaLength!==y||C.hemiLength!==g||C.numDirectionalShadows!==M||C.numPointShadows!==I||C.numSpotShadows!==R||C.numSpotMaps!==P||C.numLightProbes!==x)&&(i.directional.length=v,i.spot.length=f,i.rectArea.length=y,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=R+P-O,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=x,C.directionalLength=v,C.pointLength=m,C.spotLength=f,C.rectAreaLength=y,C.hemiLength=g,C.numDirectionalShadows=M,C.numPointShadows=I,C.numSpotShadows=R,C.numSpotMaps=P,C.numLightProbes=x,i.version=Jf++)}function l(h,d){let u=0,p=0,_=0,v=0,m=0;const f=d.matrixWorldInverse;for(let y=0,g=h.length;y<g;y++){const M=h[y];if(M.isDirectionalLight){const I=i.directional[u];I.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),u++}else if(M.isSpotLight){const I=i.spot[_];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(f),_++}else if(M.isRectAreaLight){const I=i.rectArea[v];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(f),o.identity(),a.copy(M.matrixWorld),a.premultiply(f),o.extractRotation(a),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),v++}else if(M.isPointLight){const I=i.point[p];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(f),p++}else if(M.isHemisphereLight){const I=i.hemi[m];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(f),m++}}}return{setup:c,setupView:l,state:i}}function ea(s,t){const e=new $f(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Qf(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new ea(s,t),e.set(r,[c])):a>=o.length?(c=new ea(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class tp extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ep extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const np=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ip=`uniform sampler2D shadow_pass;
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
}`;function sp(s,t,e){let n=new br;const i=new Ot,r=new Ot,a=new de,o=new tp({depthPacking:Bc}),c=new ep,l={},h=e.maxTextureSize,d={[Ln]:Ne,[Ne]:Ln,[be]:be},u=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:np,fragmentShader:ip}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const _=new Oe;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new T(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ha;let f=this.type;this.render=function(R,P,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const x=s.getRenderTarget(),E=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),X=s.state;X.setBlending(Rn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const ot=f!==fn&&this.type===fn,N=f===fn&&this.type!==fn;for(let B=0,q=R.length;B<q;B++){const tt=R[B],Q=tt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",tt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;i.copy(Q.mapSize);const Y=Q.getFrameExtents();if(i.multiply(Y),r.copy(Q.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,Q.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,Q.mapSize.y=r.y)),Q.map===null||ot===!0||N===!0){const K=this.type!==fn?{minFilter:Ue,magFilter:Ue}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Yn(i.x,i.y,K),Q.map.texture.name=tt.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const it=Q.getViewportCount();for(let K=0;K<it;K++){const at=Q.getViewport(K);a.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),X.viewport(a),Q.updateMatrices(tt,K),n=Q.getFrustum(),M(P,O,Q.camera,tt,this.type)}Q.isPointLightShadow!==!0&&this.type===fn&&y(Q,O),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(x,E,C)};function y(R,P){const O=t.update(v);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yn(i.x,i.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(P,null,O,u,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(P,null,O,p,v,null)}function g(R,P,O,x){let E=null;const C=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)E=C;else if(E=O.isPointLight===!0?c:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const X=E.uuid,ot=P.uuid;let N=l[X];N===void 0&&(N={},l[X]=N);let B=N[ot];B===void 0&&(B=E.clone(),N[ot]=B,P.addEventListener("dispose",I)),E=B}if(E.visible=P.visible,E.wireframe=P.wireframe,x===fn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:d[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const X=s.properties.get(E);X.light=O}return E}function M(R,P,O,x,E){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===fn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const ot=t.update(R),N=R.material;if(Array.isArray(N)){const B=ot.groups;for(let q=0,tt=B.length;q<tt;q++){const Q=B[q],Y=N[Q.materialIndex];if(Y&&Y.visible){const it=g(R,Y,x,E);R.onBeforeShadow(s,R,P,O,ot,it,Q),s.renderBufferDirect(O,null,ot,it,R,Q),R.onAfterShadow(s,R,P,O,ot,it,Q)}}}else if(N.visible){const B=g(R,N,x,E);R.onBeforeShadow(s,R,P,O,ot,B,null),s.renderBufferDirect(O,null,ot,B,R,null),R.onAfterShadow(s,R,P,O,ot,B,null)}}const X=R.children;for(let ot=0,N=X.length;ot<N;ot++)M(X[ot],P,O,x,E)}function I(R){R.target.removeEventListener("dispose",I);for(const O in l){const x=l[O],E=R.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function rp(s,t,e){const n=e.isWebGL2;function i(){let U=!1;const ft=new de;let dt=null;const k=new de(0,0,0,0);return{setMask:function(ct){dt!==ct&&!U&&(s.colorMask(ct,ct,ct,ct),dt=ct)},setLocked:function(ct){U=ct},setClear:function(ct,_t,bt,te,ee){ee===!0&&(ct*=te,_t*=te,bt*=te),ft.set(ct,_t,bt,te),k.equals(ft)===!1&&(s.clearColor(ct,_t,bt,te),k.copy(ft))},reset:function(){U=!1,dt=null,k.set(-1,0,0,0)}}}function r(){let U=!1,ft=null,dt=null,k=null;return{setTest:function(ct){ct?Ut(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(ct){ft!==ct&&!U&&(s.depthMask(ct),ft=ct)},setFunc:function(ct){if(dt!==ct){switch(ct){case pc:s.depthFunc(s.NEVER);break;case mc:s.depthFunc(s.ALWAYS);break;case gc:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case _c:s.depthFunc(s.EQUAL);break;case Mc:s.depthFunc(s.GEQUAL);break;case vc:s.depthFunc(s.GREATER);break;case xc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=ct}},setLocked:function(ct){U=ct},setClear:function(ct){k!==ct&&(s.clearDepth(ct),k=ct)},reset:function(){U=!1,ft=null,dt=null,k=null}}}function a(){let U=!1,ft=null,dt=null,k=null,ct=null,_t=null,bt=null,te=null,ee=null;return{setTest:function(ne){U||(ne?Ut(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(ne){ft!==ne&&!U&&(s.stencilMask(ne),ft=ne)},setFunc:function(ne,ge,Ae){(dt!==ne||k!==ge||ct!==Ae)&&(s.stencilFunc(ne,ge,Ae),dt=ne,k=ge,ct=Ae)},setOp:function(ne,ge,Ae){(_t!==ne||bt!==ge||te!==Ae)&&(s.stencilOp(ne,ge,Ae),_t=ne,bt=ge,te=Ae)},setLocked:function(ne){U=ne},setClear:function(ne){ee!==ne&&(s.clearStencil(ne),ee=ne)},reset:function(){U=!1,ft=null,dt=null,k=null,ct=null,_t=null,bt=null,te=null,ee=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,d=new WeakMap;let u={},p={},_=new WeakMap,v=[],m=null,f=!1,y=null,g=null,M=null,I=null,R=null,P=null,O=null,x=new Qt(0,0,0),E=0,C=!1,X=null,ot=null,N=null,B=null,q=null;const tt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,Y=0;const it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(it)[1]),Q=Y>=1):it.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),Q=Y>=2);let K=null,at={};const J=s.getParameter(s.SCISSOR_BOX),nt=s.getParameter(s.VIEWPORT),ut=new de().fromArray(J),Tt=new de().fromArray(nt);function Et(U,ft,dt,k){const ct=new Uint8Array(4),_t=s.createTexture();s.bindTexture(U,_t),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let bt=0;bt<dt;bt++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(ft,0,s.RGBA,1,1,k,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(ft+bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return _t}const It={};It[s.TEXTURE_2D]=Et(s.TEXTURE_2D,s.TEXTURE_2D,1),It[s.TEXTURE_CUBE_MAP]=Et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(It[s.TEXTURE_2D_ARRAY]=Et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),It[s.TEXTURE_3D]=Et(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ut(s.DEPTH_TEST),c.setFunc(ps),Gt(!1),A(Nr),Ut(s.CULL_FACE),vt(Rn);function Ut(U){u[U]!==!0&&(s.enable(U),u[U]=!0)}function Ct(U){u[U]!==!1&&(s.disable(U),u[U]=!1)}function St(U,ft){return p[U]!==ft?(s.bindFramebuffer(U,ft),p[U]=ft,n&&(U===s.DRAW_FRAMEBUFFER&&(p[s.FRAMEBUFFER]=ft),U===s.FRAMEBUFFER&&(p[s.DRAW_FRAMEBUFFER]=ft)),!0):!1}function V(U,ft){let dt=v,k=!1;if(U)if(dt=_.get(ft),dt===void 0&&(dt=[],_.set(ft,dt)),U.isWebGLMultipleRenderTargets){const ct=U.texture;if(dt.length!==ct.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,bt=ct.length;_t<bt;_t++)dt[_t]=s.COLOR_ATTACHMENT0+_t;dt.length=ct.length,k=!0}}else dt[0]!==s.COLOR_ATTACHMENT0&&(dt[0]=s.COLOR_ATTACHMENT0,k=!0);else dt[0]!==s.BACK&&(dt[0]=s.BACK,k=!0);k&&(e.isWebGL2?s.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function Wt(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const Rt={[Vn]:s.FUNC_ADD,[Qa]:s.FUNC_SUBTRACT,[tc]:s.FUNC_REVERSE_SUBTRACT};if(n)Rt[Gr]=s.MIN,Rt[kr]=s.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(Rt[Gr]=U.MIN_EXT,Rt[kr]=U.MAX_EXT)}const Lt={[ec]:s.ZERO,[nc]:s.ONE,[ic]:s.SRC_COLOR,[pr]:s.SRC_ALPHA,[lc]:s.SRC_ALPHA_SATURATE,[ac]:s.DST_COLOR,[rc]:s.DST_ALPHA,[sc]:s.ONE_MINUS_SRC_COLOR,[mr]:s.ONE_MINUS_SRC_ALPHA,[cc]:s.ONE_MINUS_DST_COLOR,[oc]:s.ONE_MINUS_DST_ALPHA,[hc]:s.CONSTANT_COLOR,[dc]:s.ONE_MINUS_CONSTANT_COLOR,[uc]:s.CONSTANT_ALPHA,[fc]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(U,ft,dt,k,ct,_t,bt,te,ee,ne){if(U===Rn){f===!0&&(Ct(s.BLEND),f=!1);return}if(f===!1&&(Ut(s.BLEND),f=!0),U!==$a){if(U!==y||ne!==C){if((g!==Vn||R!==Vn)&&(s.blendEquation(s.FUNC_ADD),g=Vn,R=Vn),ne)switch(U){case mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFunc(s.ONE,s.ONE);break;case Fr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Br:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Br:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}M=null,I=null,P=null,O=null,x.set(0,0,0),E=0,y=U,C=ne}return}ct=ct||ft,_t=_t||dt,bt=bt||k,(ft!==g||ct!==R)&&(s.blendEquationSeparate(Rt[ft],Rt[ct]),g=ft,R=ct),(dt!==M||k!==I||_t!==P||bt!==O)&&(s.blendFuncSeparate(Lt[dt],Lt[k],Lt[_t],Lt[bt]),M=dt,I=k,P=_t,O=bt),(te.equals(x)===!1||ee!==E)&&(s.blendColor(te.r,te.g,te.b,ee),x.copy(te),E=ee),y=U,C=!1}function se(U,ft){U.side===be?Ct(s.CULL_FACE):Ut(s.CULL_FACE);let dt=U.side===Ne;ft&&(dt=!dt),Gt(dt),U.blending===mi&&U.transparent===!1?vt(Rn):vt(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const k=U.stencilWrite;l.setTest(k),k&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),H(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ut(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(U){X!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),X=U)}function A(U){U!==Ja?(Ut(s.CULL_FACE),U!==ot&&(U===Nr?s.cullFace(s.BACK):U===ja?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),ot=U}function S(U){U!==N&&(Q&&s.lineWidth(U),N=U)}function H(U,ft,dt){U?(Ut(s.POLYGON_OFFSET_FILL),(B!==ft||q!==dt)&&(s.polygonOffset(ft,dt),B=ft,q=dt)):Ct(s.POLYGON_OFFSET_FILL)}function W(U){U?Ut(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function j(U){U===void 0&&(U=s.TEXTURE0+tt-1),K!==U&&(s.activeTexture(U),K=U)}function Z(U,ft,dt){dt===void 0&&(K===null?dt=s.TEXTURE0+tt-1:dt=K);let k=at[dt];k===void 0&&(k={type:void 0,texture:void 0},at[dt]=k),(k.type!==U||k.texture!==ft)&&(K!==dt&&(s.activeTexture(dt),K=dt),s.bindTexture(U,ft||It[U]),k.type=U,k.texture=ft)}function yt(){const U=at[K];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function lt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Nt(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Jt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Vt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Bt(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pt(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function wt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){ut.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ut.copy(U))}function Yt(U){Tt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Tt.copy(U))}function re(U,ft){let dt=d.get(ft);dt===void 0&&(dt=new WeakMap,d.set(ft,dt));let k=dt.get(U);k===void 0&&(k=s.getUniformBlockIndex(ft,U.name),dt.set(U,k))}function zt(U,ft){const k=d.get(ft).get(U);h.get(ft)!==k&&(s.uniformBlockBinding(ft,k,U.__bindingPointIndex),h.set(ft,k))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),u={},K=null,at={},p={},_=new WeakMap,v=[],m=null,f=!1,y=null,g=null,M=null,I=null,R=null,P=null,O=null,x=new Qt(0,0,0),E=0,C=!1,X=null,ot=null,N=null,B=null,q=null,ut.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Ut,disable:Ct,bindFramebuffer:St,drawBuffers:V,useProgram:Wt,setBlending:vt,setMaterial:se,setFlipSided:Gt,setCullFace:A,setLineWidth:S,setPolygonOffset:H,setScissorTest:W,activeTexture:j,bindTexture:Z,unbindTexture:yt,compressedTexImage2D:lt,compressedTexImage3D:xt,texImage2D:Pt,texImage3D:wt,updateUBOMapping:re,uniformBlockBinding:zt,texStorage2D:Vt,texStorage3D:Bt,texSubImage2D:Nt,texSubImage3D:gt,compressedTexSubImage2D:st,compressedTexSubImage3D:Jt,scissor:Dt,viewport:Yt,reset:ht}}function op(s,t,e,n,i,r,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return p?new OffscreenCanvas(A,S):xs("canvas")}function v(A,S,H,W){let j=1;if((A.width>W||A.height>W)&&(j=W/Math.max(A.width,A.height)),j<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const Z=S?vs:Math.floor,yt=Z(j*A.width),lt=Z(j*A.height);d===void 0&&(d=_(yt,lt));const xt=H?_(yt,lt):d;return xt.width=yt,xt.height=lt,xt.getContext("2d").drawImage(A,0,0,yt,lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+yt+"x"+lt+")."),xt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return xr(A.width)&&xr(A.height)}function f(A){return o?!1:A.wrapS!==$e||A.wrapT!==$e||A.minFilter!==Ue&&A.minFilter!==We}function y(A,S){return A.generateMipmaps&&S&&A.minFilter!==Ue&&A.minFilter!==We}function g(A){s.generateMipmap(A)}function M(A,S,H,W,j=!1){if(o===!1)return S;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=S;if(S===s.RED&&(H===s.FLOAT&&(Z=s.R32F),H===s.HALF_FLOAT&&(Z=s.R16F),H===s.UNSIGNED_BYTE&&(Z=s.R8)),S===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(Z=s.R8UI),H===s.UNSIGNED_SHORT&&(Z=s.R16UI),H===s.UNSIGNED_INT&&(Z=s.R32UI),H===s.BYTE&&(Z=s.R8I),H===s.SHORT&&(Z=s.R16I),H===s.INT&&(Z=s.R32I)),S===s.RG&&(H===s.FLOAT&&(Z=s.RG32F),H===s.HALF_FLOAT&&(Z=s.RG16F),H===s.UNSIGNED_BYTE&&(Z=s.RG8)),S===s.RGBA){const yt=j?ms:oe.getTransfer(W);H===s.FLOAT&&(Z=s.RGBA32F),H===s.HALF_FLOAT&&(Z=s.RGBA16F),H===s.UNSIGNED_BYTE&&(Z=yt===le?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function I(A,S,H){return y(A,H)===!0||A.isFramebufferTexture&&A.minFilter!==Ue&&A.minFilter!==We?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){return A===Ue||A===zr||A===Ds?s.NEAREST:s.LINEAR}function P(A){const S=A.target;S.removeEventListener("dispose",P),x(S),S.isVideoTexture&&h.delete(S)}function O(A){const S=A.target;S.removeEventListener("dispose",O),C(S)}function x(A){const S=n.get(A);if(S.__webglInit===void 0)return;const H=A.source,W=u.get(H);if(W){const j=W[S.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(A),Object.keys(W).length===0&&u.delete(H)}n.remove(A)}function E(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const H=A.source,W=u.get(H);delete W[S.__cacheKey],a.memory.textures--}function C(A){const S=A.texture,H=n.get(A),W=n.get(S);if(W.__webglTexture!==void 0&&(s.deleteTexture(W.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(H.__webglFramebuffer[j]))for(let Z=0;Z<H.__webglFramebuffer[j].length;Z++)s.deleteFramebuffer(H.__webglFramebuffer[j][Z]);else s.deleteFramebuffer(H.__webglFramebuffer[j]);H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer[j])}else{if(Array.isArray(H.__webglFramebuffer))for(let j=0;j<H.__webglFramebuffer.length;j++)s.deleteFramebuffer(H.__webglFramebuffer[j]);else s.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&s.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&s.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let j=0;j<H.__webglColorRenderbuffer.length;j++)H.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(H.__webglColorRenderbuffer[j]);H.__webglDepthRenderbuffer&&s.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let j=0,Z=S.length;j<Z;j++){const yt=n.get(S[j]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(S[j])}n.remove(S),n.remove(A)}let X=0;function ot(){X=0}function N(){const A=X;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),X+=1,A}function B(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function q(A,S){const H=n.get(A);if(A.isVideoTexture&&se(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const W=A.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(H,A,S);return}}e.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+S)}function tt(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ut(H,A,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+S)}function Q(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ut(H,A,S);return}e.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+S)}function Y(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Tt(H,A,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+S)}const it={[tn]:s.REPEAT,[$e]:s.CLAMP_TO_EDGE,[Mr]:s.MIRRORED_REPEAT},K={[Ue]:s.NEAREST,[zr]:s.NEAREST_MIPMAP_NEAREST,[Ds]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[Rc]:s.LINEAR_MIPMAP_NEAREST,[Bi]:s.LINEAR_MIPMAP_LINEAR},at={[kc]:s.NEVER,[qc]:s.ALWAYS,[zc]:s.LESS,[Ea]:s.LEQUAL,[Vc]:s.EQUAL,[Xc]:s.GEQUAL,[Hc]:s.GREATER,[Wc]:s.NOTEQUAL};function J(A,S,H){if(H?(s.texParameteri(A,s.TEXTURE_WRAP_S,it[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,it[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,it[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,K[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,K[S.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==$e||S.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,R(S.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,R(S.minFilter)),S.minFilter!==Ue&&S.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,at[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const W=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Ue||S.minFilter!==Ds&&S.minFilter!==Bi||S.type===An&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Gi&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function nt(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",P));const W=S.source;let j=u.get(W);j===void 0&&(j={},u.set(W,j));const Z=B(S);if(Z!==A.__cacheKey){j[Z]===void 0&&(j[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,H=!0),j[Z].usedTimes++;const yt=j[A.__cacheKey];yt!==void 0&&(j[A.__cacheKey].usedTimes--,yt.usedTimes===0&&E(S)),A.__cacheKey=Z,A.__webglTexture=j[Z].texture}return H}function ut(A,S,H){let W=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(W=s.TEXTURE_3D);const j=nt(A,S),Z=S.source;e.bindTexture(W,A.__webglTexture,s.TEXTURE0+H);const yt=n.get(Z);if(Z.version!==yt.__version||j===!0){e.activeTexture(s.TEXTURE0+H);const lt=oe.getPrimaries(oe.workingColorSpace),xt=S.colorSpace===Xe?null:oe.getPrimaries(S.colorSpace),Nt=S.colorSpace===Xe||lt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const gt=f(S)&&m(S.image)===!1;let st=v(S.image,gt,!1,i.maxTextureSize);st=Gt(S,st);const Jt=m(st)||o,Vt=r.convert(S.format,S.colorSpace);let Bt=r.convert(S.type),Pt=M(S.internalFormat,Vt,Bt,S.colorSpace,S.isVideoTexture);J(W,S,Jt);let wt;const Dt=S.mipmaps,Yt=o&&S.isVideoTexture!==!0&&Pt!==Sa,re=yt.__version===void 0||j===!0,zt=I(S,st,Jt);if(S.isDepthTexture)Pt=s.DEPTH_COMPONENT,o?S.type===An?Pt=s.DEPTH_COMPONENT32F:S.type===bn?Pt=s.DEPTH_COMPONENT24:S.type===Wn?Pt=s.DEPTH24_STENCIL8:Pt=s.DEPTH_COMPONENT16:S.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Xn&&Pt===s.DEPTH_COMPONENT&&S.type!==yr&&S.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=bn,Bt=r.convert(S.type)),S.format===vi&&Pt===s.DEPTH_COMPONENT&&(Pt=s.DEPTH_STENCIL,S.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Wn,Bt=r.convert(S.type))),re&&(Yt?e.texStorage2D(s.TEXTURE_2D,1,Pt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Pt,st.width,st.height,0,Vt,Bt,null));else if(S.isDataTexture)if(Dt.length>0&&Jt){Yt&&re&&e.texStorage2D(s.TEXTURE_2D,zt,Pt,Dt[0].width,Dt[0].height);for(let ht=0,U=Dt.length;ht<U;ht++)wt=Dt[ht],Yt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,wt.width,wt.height,Vt,Bt,wt.data):e.texImage2D(s.TEXTURE_2D,ht,Pt,wt.width,wt.height,0,Vt,Bt,wt.data);S.generateMipmaps=!1}else Yt?(re&&e.texStorage2D(s.TEXTURE_2D,zt,Pt,st.width,st.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,Vt,Bt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,st.width,st.height,0,Vt,Bt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Pt,Dt[0].width,Dt[0].height,st.depth);for(let ht=0,U=Dt.length;ht<U;ht++)wt=Dt[ht],S.format!==Qe?Vt!==null?Yt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,wt.width,wt.height,st.depth,Vt,wt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,Pt,wt.width,wt.height,st.depth,0,wt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,wt.width,wt.height,st.depth,Vt,Bt,wt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,Pt,wt.width,wt.height,st.depth,0,Vt,Bt,wt.data)}else{Yt&&re&&e.texStorage2D(s.TEXTURE_2D,zt,Pt,Dt[0].width,Dt[0].height);for(let ht=0,U=Dt.length;ht<U;ht++)wt=Dt[ht],S.format!==Qe?Vt!==null?Yt?e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,wt.width,wt.height,Vt,wt.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,Pt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,wt.width,wt.height,Vt,Bt,wt.data):e.texImage2D(s.TEXTURE_2D,ht,Pt,wt.width,wt.height,0,Vt,Bt,wt.data)}else if(S.isDataArrayTexture)Yt?(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,zt,Pt,st.width,st.height,st.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,Vt,Bt,st.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,st.width,st.height,st.depth,0,Vt,Bt,st.data);else if(S.isData3DTexture)Yt?(re&&e.texStorage3D(s.TEXTURE_3D,zt,Pt,st.width,st.height,st.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,Vt,Bt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,st.width,st.height,st.depth,0,Vt,Bt,st.data);else if(S.isFramebufferTexture){if(re)if(Yt)e.texStorage2D(s.TEXTURE_2D,zt,Pt,st.width,st.height);else{let ht=st.width,U=st.height;for(let ft=0;ft<zt;ft++)e.texImage2D(s.TEXTURE_2D,ft,Pt,ht,U,0,Vt,Bt,null),ht>>=1,U>>=1}}else if(Dt.length>0&&Jt){Yt&&re&&e.texStorage2D(s.TEXTURE_2D,zt,Pt,Dt[0].width,Dt[0].height);for(let ht=0,U=Dt.length;ht<U;ht++)wt=Dt[ht],Yt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,Vt,Bt,wt):e.texImage2D(s.TEXTURE_2D,ht,Pt,Vt,Bt,wt);S.generateMipmaps=!1}else Yt?(re&&e.texStorage2D(s.TEXTURE_2D,zt,Pt,st.width,st.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Vt,Bt,st)):e.texImage2D(s.TEXTURE_2D,0,Pt,Vt,Bt,st);y(S,Jt)&&g(W),yt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Tt(A,S,H){if(S.image.length!==6)return;const W=nt(A,S),j=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+H);const Z=n.get(j);if(j.version!==Z.__version||W===!0){e.activeTexture(s.TEXTURE0+H);const yt=oe.getPrimaries(oe.workingColorSpace),lt=S.colorSpace===Xe?null:oe.getPrimaries(S.colorSpace),xt=S.colorSpace===Xe||yt===lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Nt=S.isCompressedTexture||S.image[0].isCompressedTexture,gt=S.image[0]&&S.image[0].isDataTexture,st=[];for(let ht=0;ht<6;ht++)!Nt&&!gt?st[ht]=v(S.image[ht],!1,!0,i.maxCubemapSize):st[ht]=gt?S.image[ht].image:S.image[ht],st[ht]=Gt(S,st[ht]);const Jt=st[0],Vt=m(Jt)||o,Bt=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type),wt=M(S.internalFormat,Bt,Pt,S.colorSpace),Dt=o&&S.isVideoTexture!==!0,Yt=Z.__version===void 0||W===!0;let re=I(S,Jt,Vt);J(s.TEXTURE_CUBE_MAP,S,Vt);let zt;if(Nt){Dt&&Yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,re,wt,Jt.width,Jt.height);for(let ht=0;ht<6;ht++){zt=st[ht].mipmaps;for(let U=0;U<zt.length;U++){const ft=zt[U];S.format!==Qe?Bt!==null?Dt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,0,0,ft.width,ft.height,Bt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,wt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,0,0,ft.width,ft.height,Bt,Pt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,wt,ft.width,ft.height,0,Bt,Pt,ft.data)}}}else{zt=S.mipmaps,Dt&&Yt&&(zt.length>0&&re++,e.texStorage2D(s.TEXTURE_CUBE_MAP,re,wt,st[0].width,st[0].height));for(let ht=0;ht<6;ht++)if(gt){Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,st[ht].width,st[ht].height,Bt,Pt,st[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,wt,st[ht].width,st[ht].height,0,Bt,Pt,st[ht].data);for(let U=0;U<zt.length;U++){const dt=zt[U].image[ht].image;Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,0,0,dt.width,dt.height,Bt,Pt,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,wt,dt.width,dt.height,0,Bt,Pt,dt.data)}}else{Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Bt,Pt,st[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,wt,Bt,Pt,st[ht]);for(let U=0;U<zt.length;U++){const ft=zt[U];Dt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,0,0,Bt,Pt,ft.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,wt,Bt,Pt,ft.image[ht])}}}y(S,Vt)&&g(s.TEXTURE_CUBE_MAP),Z.__version=j.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Et(A,S,H,W,j,Z){const yt=r.convert(H.format,H.colorSpace),lt=r.convert(H.type),xt=M(H.internalFormat,yt,lt,H.colorSpace);if(!n.get(S).__hasExternalTextures){const gt=Math.max(1,S.width>>Z),st=Math.max(1,S.height>>Z);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,Z,xt,gt,st,S.depth,0,yt,lt,null):e.texImage2D(j,Z,xt,gt,st,0,yt,lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),vt(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,j,n.get(H).__webglTexture,0,Lt(S)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,j,n.get(H).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function It(A,S,H){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer&&!S.stencilBuffer){let W=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(H||vt(S)){const j=S.depthTexture;j&&j.isDepthTexture&&(j.type===An?W=s.DEPTH_COMPONENT32F:j.type===bn&&(W=s.DEPTH_COMPONENT24));const Z=Lt(S);vt(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,W,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,W,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,W,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(S.depthBuffer&&S.stencilBuffer){const W=Lt(S);H&&vt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,W,s.DEPTH24_STENCIL8,S.width,S.height):vt(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,W,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const W=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let j=0;j<W.length;j++){const Z=W[j],yt=r.convert(Z.format,Z.colorSpace),lt=r.convert(Z.type),xt=M(Z.internalFormat,yt,lt,Z.colorSpace),Nt=Lt(S);H&&vt(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,xt,S.width,S.height):vt(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt,xt,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,xt,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const W=n.get(S.depthTexture).__webglTexture,j=Lt(S);if(S.depthTexture.format===Xn)vt(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,W,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,W,0);else if(S.depthTexture.format===vi)vt(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,W,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ct(A){const S=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ut(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let W=0;W<6;W++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[W]),S.__webglDepthbuffer[W]=s.createRenderbuffer(),It(S.__webglDepthbuffer[W],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),It(S.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function St(A,S,H){const W=n.get(A);S!==void 0&&Et(W.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Ct(A)}function V(A){const S=A.texture,H=n.get(A),W=n.get(S);A.addEventListener("dispose",O),A.isWebGLMultipleRenderTargets!==!0&&(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=S.version,a.memory.textures++);const j=A.isWebGLCubeRenderTarget===!0,Z=A.isWebGLMultipleRenderTargets===!0,yt=m(A)||o;if(j){H.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(o&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[lt]=[];for(let xt=0;xt<S.mipmaps.length;xt++)H.__webglFramebuffer[lt][xt]=s.createFramebuffer()}else H.__webglFramebuffer[lt]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let lt=0;lt<S.mipmaps.length;lt++)H.__webglFramebuffer[lt]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Z)if(i.drawBuffers){const lt=A.texture;for(let xt=0,Nt=lt.length;xt<Nt;xt++){const gt=n.get(lt[xt]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&vt(A)===!1){const lt=Z?S:[S];H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let xt=0;xt<lt.length;xt++){const Nt=lt[xt];H.__webglColorRenderbuffer[xt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[xt]);const gt=r.convert(Nt.format,Nt.colorSpace),st=r.convert(Nt.type),Jt=M(Nt.internalFormat,gt,st,Nt.colorSpace,A.isXRRenderTarget===!0),Vt=Lt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Jt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,H.__webglColorRenderbuffer[xt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),It(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),J(s.TEXTURE_CUBE_MAP,S,yt);for(let lt=0;lt<6;lt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)Et(H.__webglFramebuffer[lt][xt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,xt);else Et(H.__webglFramebuffer[lt],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);y(S,yt)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){const lt=A.texture;for(let xt=0,Nt=lt.length;xt<Nt;xt++){const gt=lt[xt],st=n.get(gt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),J(s.TEXTURE_2D,gt,yt),Et(H.__webglFramebuffer,A,gt,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,0),y(gt,yt)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let lt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?lt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(lt,W.__webglTexture),J(lt,S,yt),o&&S.mipmaps&&S.mipmaps.length>0)for(let xt=0;xt<S.mipmaps.length;xt++)Et(H.__webglFramebuffer[xt],A,S,s.COLOR_ATTACHMENT0,lt,xt);else Et(H.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,lt,0);y(S,yt)&&g(lt),e.unbindTexture()}A.depthBuffer&&Ct(A)}function Wt(A){const S=m(A)||o,H=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let W=0,j=H.length;W<j;W++){const Z=H[W];if(y(Z,S)){const yt=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,lt=n.get(Z).__webglTexture;e.bindTexture(yt,lt),g(yt),e.unbindTexture()}}}function Rt(A){if(o&&A.samples>0&&vt(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],H=A.width,W=A.height;let j=s.COLOR_BUFFER_BIT;const Z=[],yt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,lt=n.get(A),xt=A.isWebGLMultipleRenderTargets===!0;if(xt)for(let Nt=0;Nt<S.length;Nt++)e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let Nt=0;Nt<S.length;Nt++){Z.push(s.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&Z.push(yt);const gt=lt.__ignoreDepthValues!==void 0?lt.__ignoreDepthValues:!1;if(gt===!1&&(A.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),xt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,lt.__webglColorRenderbuffer[Nt]),gt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[yt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[yt])),xt){const st=n.get(S[Nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,st,0)}s.blitFramebuffer(0,0,H,W,0,0,H,W,j,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Z)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xt)for(let Nt=0;Nt<S.length;Nt++){e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,lt.__webglColorRenderbuffer[Nt]);const gt=n.get(S[Nt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}}function Lt(A){return Math.min(i.maxSamples,A.samples)}function vt(A){const S=n.get(A);return o&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function se(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function Gt(A,S){const H=A.colorSpace,W=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===vr||H!==gn&&H!==Xe&&(oe.getTransfer(H)===le?o===!1?t.has("EXT_sRGB")===!0&&W===Qe?(A.format=vr,A.minFilter=We,A.generateMipmaps=!1):S=ba.sRGBToLinear(S):(W!==Qe||j!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}this.allocateTextureUnit=N,this.resetTextureUnits=ot,this.setTexture2D=q,this.setTexture2DArray=tt,this.setTexture3D=Q,this.setTextureCube=Y,this.rebindTextures=St,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=vt}function ap(s,t,e){const n=e.isWebGL2;function i(r,a=Xe){let o;const c=oe.getTransfer(a);if(r===Cn)return s.UNSIGNED_BYTE;if(r===ga)return s.UNSIGNED_SHORT_4_4_4_4;if(r===_a)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Pc)return s.BYTE;if(r===Cc)return s.SHORT;if(r===yr)return s.UNSIGNED_SHORT;if(r===ma)return s.INT;if(r===bn)return s.UNSIGNED_INT;if(r===An)return s.FLOAT;if(r===Gi)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Lc)return s.ALPHA;if(r===Qe)return s.RGBA;if(r===Ic)return s.LUMINANCE;if(r===Dc)return s.LUMINANCE_ALPHA;if(r===Xn)return s.DEPTH_COMPONENT;if(r===vi)return s.DEPTH_STENCIL;if(r===vr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Uc)return s.RED;if(r===Ma)return s.RED_INTEGER;if(r===Nc)return s.RG;if(r===va)return s.RG_INTEGER;if(r===xa)return s.RGBA_INTEGER;if(r===Us||r===Ns||r===Os||r===Fs)if(c===le)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Us)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Us)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Os)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vr||r===Hr||r===Wr||r===Xr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Vr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sa)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qr||r===Yr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===qr)return c===le?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Yr)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kr||r===Zr||r===Jr||r===jr||r===$r||r===Qr||r===to||r===eo||r===no||r===io||r===so||r===ro||r===oo||r===ao)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Kr)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zr)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jr)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jr)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$r)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qr)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===to)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===no)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===io)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===so)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ro)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oo)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ao)return c===le?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bs||r===co||r===lo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Bs)return c===le?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===co)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oc||r===ho||r===uo||r===fo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Bs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ho)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class cp extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lp={type:"move"};class ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class hp extends wi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,p=null,_=null;const v=e.getContextAttributes();let m=null,f=null;const y=[],g=[],M=new Ot;let I=null;const R=new Fe;R.layers.enable(1),R.viewport=new de;const P=new Fe;P.layers.enable(2),P.viewport=new de;const O=[R,P],x=new cp;x.layers.enable(1),x.layers.enable(2);let E=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=y[J];return nt===void 0&&(nt=new ar,y[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=y[J];return nt===void 0&&(nt=new ar,y[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=y[J];return nt===void 0&&(nt=new ar,y[J]=nt),nt.getHandSpace()};function X(J){const nt=g.indexOf(J.inputSource);if(nt===-1)return;const ut=y[nt];ut!==void 0&&(ut.update(J.inputSource,J.frame,l||a),ut.dispatchEvent({type:J.type,data:J.inputSource}))}function ot(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",ot),i.removeEventListener("inputsourceschange",N);for(let J=0;J<y.length;J++){const nt=g[J];nt!==null&&(g[J]=null,y[J].disconnect(nt))}E=null,C=null,t.setRenderTarget(m),p=null,u=null,d=null,i=null,f=null,at.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",ot),i.addEventListener("inputsourceschange",N),v.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(M),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const nt={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Yn(p.framebufferWidth,p.framebufferHeight,{format:Qe,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let nt=null,ut=null,Tt=null;v.depth&&(Tt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=v.stencil?vi:Xn,ut=v.stencil?Wn:bn);const Et={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Et),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),f=new Yn(u.textureWidth,u.textureHeight,{format:Qe,type:Cn,depthTexture:new Ga(u.textureWidth,u.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const It=t.properties.get(f);It.__ignoreDepthValues=u.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),at.setContext(i),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(J){for(let nt=0;nt<J.removed.length;nt++){const ut=J.removed[nt],Tt=g.indexOf(ut);Tt>=0&&(g[Tt]=null,y[Tt].disconnect(ut))}for(let nt=0;nt<J.added.length;nt++){const ut=J.added[nt];let Tt=g.indexOf(ut);if(Tt===-1){for(let It=0;It<y.length;It++)if(It>=g.length){g.push(ut),Tt=It;break}else if(g[It]===null){g[It]=ut,Tt=It;break}if(Tt===-1)break}const Et=y[Tt];Et&&Et.connect(ut)}}const B=new D,q=new D;function tt(J,nt,ut){B.setFromMatrixPosition(nt.matrixWorld),q.setFromMatrixPosition(ut.matrixWorld);const Tt=B.distanceTo(q),Et=nt.projectionMatrix.elements,It=ut.projectionMatrix.elements,Ut=Et[14]/(Et[10]-1),Ct=Et[14]/(Et[10]+1),St=(Et[9]+1)/Et[5],V=(Et[9]-1)/Et[5],Wt=(Et[8]-1)/Et[0],Rt=(It[8]+1)/It[0],Lt=Ut*Wt,vt=Ut*Rt,se=Tt/(-Wt+Rt),Gt=se*-Wt;nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Gt),J.translateZ(se),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const A=Ut+se,S=Ct+se,H=Lt-Gt,W=vt+(Tt-Gt),j=St*Ct/S*A,Z=V*Ct/S*A;J.projectionMatrix.makePerspective(H,W,j,Z,A,S),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function Q(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;x.near=P.near=R.near=J.near,x.far=P.far=R.far=J.far,(E!==x.near||C!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,C=x.far);const nt=J.parent,ut=x.cameras;Q(x,nt);for(let Tt=0;Tt<ut.length;Tt++)Q(ut[Tt],nt);ut.length===2?tt(x,R,P):x.projectionMatrix.copy(R.projectionMatrix),Y(J,x,nt)};function Y(J,nt,ut){ut===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(ut.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)};let it=null;function K(J,nt){if(h=nt.getViewerPose(l||a),_=nt,h!==null){const ut=h.views;p!==null&&(t.setRenderTargetFramebuffer(f,p.framebuffer),t.setRenderTarget(f));let Tt=!1;ut.length!==x.cameras.length&&(x.cameras.length=0,Tt=!0);for(let Et=0;Et<ut.length;Et++){const It=ut[Et];let Ut=null;if(p!==null)Ut=p.getViewport(It);else{const St=d.getViewSubImage(u,It);Ut=St.viewport,Et===0&&(t.setRenderTargetTextures(f,St.colorTexture,u.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(f))}let Ct=O[Et];Ct===void 0&&(Ct=new Fe,Ct.layers.enable(Et),Ct.viewport=new de,O[Et]=Ct),Ct.matrix.fromArray(It.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(It.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Et===0&&(x.matrix.copy(Ct.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Tt===!0&&x.cameras.push(Ct)}}for(let ut=0;ut<y.length;ut++){const Tt=g[ut],Et=y[ut];Tt!==null&&Et!==void 0&&Et.update(Tt,nt,l||a)}it&&it(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}const at=new Fa;at.setAnimationLoop(K),this.setAnimationLoop=function(J){it=J},this.dispose=function(){}}}function dp(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ua(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,y,g,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),d(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,y,g):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ne&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ne&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=t.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const g=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*g,e(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,y,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=g*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),t.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ne&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function up(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,g){const M=g.program;n.uniformBlockBinding(y,M)}function l(y,g){let M=i[y.id];M===void 0&&(_(y),M=h(y),i[y.id]=M,y.addEventListener("dispose",m));const I=g.program;n.updateUBOMapping(y,I);const R=t.render.frame;r[y.id]!==R&&(u(y),r[y.id]=R)}function h(y){const g=d();y.__bindingPointIndex=g;const M=s.createBuffer(),I=y.__size,R=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,I,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const g=i[y.id],M=y.uniforms,I=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let R=0,P=M.length;R<P;R++){const O=Array.isArray(M[R])?M[R]:[M[R]];for(let x=0,E=O.length;x<E;x++){const C=O[x];if(p(C,R,x,I)===!0){const X=C.__offset,ot=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let B=0;B<ot.length;B++){const q=ot[B],tt=v(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,X+N,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,N),N+=tt.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,X,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(y,g,M,I){const R=y.value,P=g+"_"+M;if(I[P]===void 0)return typeof R=="number"||typeof R=="boolean"?I[P]=R:I[P]=R.clone(),!0;{const O=I[P];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return I[P]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function _(y){const g=y.uniforms;let M=0;const I=16;for(let P=0,O=g.length;P<O;P++){const x=Array.isArray(g[P])?g[P]:[g[P]];for(let E=0,C=x.length;E<C;E++){const X=x[E],ot=Array.isArray(X.value)?X.value:[X.value];for(let N=0,B=ot.length;N<B;N++){const q=ot[N],tt=v(q),Q=M%I;Q!==0&&I-Q<tt.boundary&&(M+=I-Q),X.__data=new Float32Array(tt.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=M,M+=tt.storage}}}const R=M%I;return R>0&&(M+=I-R),y.__size=M,y.__cache={},this}function v(y){const g={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(g.boundary=4,g.storage=4):y.isVector2?(g.boundary=8,g.storage=8):y.isVector3||y.isColor?(g.boundary=16,g.storage=12):y.isVector4?(g.boundary=16,g.storage=16):y.isMatrix3?(g.boundary=48,g.storage=48):y.isMatrix4?(g.boundary=64,g.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),g}function m(y){const g=y.target;g.removeEventListener("dispose",m);const M=a.indexOf(g.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function f(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:f}}class Xa{constructor(t={}){const{canvas:e=al(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;n!==null?u=n.getContextAttributes().alpha:u=a;const p=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const f=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=Pn,this.toneMappingExposure=1;const g=this;let M=!1,I=0,R=0,P=null,O=-1,x=null;const E=new de,C=new de;let X=null;const ot=new Qt(0);let N=0,B=e.width,q=e.height,tt=1,Q=null,Y=null;const it=new de(0,0,B,q),K=new de(0,0,B,q);let at=!1;const J=new br;let nt=!1,ut=!1,Tt=null;const Et=new me,It=new Ot,Ut=new D,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return P===null?tt:1}let V=n;function Wt(b,F){for(let G=0;G<b.length;G++){const w=b[G],L=e.getContext(w,F);if(L!==null)return L}return null}try{const b={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${wr}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ft,!1),V===null){const F=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&F.shift(),V=Wt(F,b),V===null)throw Wt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&V instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Rt,Lt,vt,se,Gt,A,S,H,W,j,Z,yt,lt,xt,Nt,gt,st,Jt,Vt,Bt,Pt,wt,Dt,Yt;function re(){Rt=new Su(V),Lt=new mu(V,Rt,t),Rt.init(Lt),wt=new ap(V,Rt,Lt),vt=new rp(V,Rt,Lt),se=new Eu(V),Gt=new Xf,A=new op(V,Rt,vt,Gt,Lt,wt,se),S=new _u(g),H=new xu(g),W=new Il(V,Lt),Dt=new fu(V,Rt,W,Lt),j=new wu(V,W,se,Dt),Z=new Ru(V,j,W,se),Vt=new Au(V,Lt,A),gt=new gu(Gt),yt=new Wf(g,S,H,Rt,Lt,Dt,gt),lt=new dp(g,Gt),xt=new Yf,Nt=new Qf(Rt,Lt),Jt=new uu(g,S,H,vt,Z,u,c),st=new sp(g,Z,Lt),Yt=new up(V,se,Lt,vt),Bt=new pu(V,Rt,se,Lt),Pt=new yu(V,Rt,se,Lt),se.programs=yt.programs,g.capabilities=Lt,g.extensions=Rt,g.properties=Gt,g.renderLists=xt,g.shadowMap=st,g.state=vt,g.info=se}re();const zt=new hp(g,V);this.xr=zt,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const b=Rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(B,q,!1))},this.getSize=function(b){return b.set(B,q)},this.setSize=function(b,F,G=!0){if(zt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,q=F,e.width=Math.floor(b*tt),e.height=Math.floor(F*tt),G===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(B*tt,q*tt).floor()},this.setDrawingBufferSize=function(b,F,G){B=b,q=F,tt=G,e.width=Math.floor(b*G),e.height=Math.floor(F*G),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(it)},this.setViewport=function(b,F,G,w){b.isVector4?it.set(b.x,b.y,b.z,b.w):it.set(b,F,G,w),vt.viewport(E.copy(it).multiplyScalar(tt).floor())},this.getScissor=function(b){return b.copy(K)},this.setScissor=function(b,F,G,w){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,F,G,w),vt.scissor(C.copy(K).multiplyScalar(tt).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(b){vt.setScissorTest(at=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){Y=b},this.getClearColor=function(b){return b.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(b=!0,F=!0,G=!0){let w=0;if(b){let L=!1;if(P!==null){const z=P.texture.format;L=z===xa||z===va||z===Ma}if(L){const z=P.texture.type,rt=z===Cn||z===bn||z===yr||z===Wn||z===ga||z===_a,Mt=Jt.getClearColor(),Ft=Jt.getClearAlpha(),Ht=Mt.r,Xt=Mt.g,Kt=Mt.b;rt?(p[0]=Ht,p[1]=Xt,p[2]=Kt,p[3]=Ft,V.clearBufferuiv(V.COLOR,0,p)):(_[0]=Ht,_[1]=Xt,_[2]=Kt,_[3]=Ft,V.clearBufferiv(V.COLOR,0,_))}else w|=V.COLOR_BUFFER_BIT}F&&(w|=V.DEPTH_BUFFER_BIT),G&&(w|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(w)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),xt.dispose(),Nt.dispose(),Gt.dispose(),S.dispose(),H.dispose(),Z.dispose(),Dt.dispose(),Yt.dispose(),yt.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",ee),zt.removeEventListener("sessionend",ne),Tt&&(Tt.dispose(),Tt=null),ge.stop()};function ht(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=se.autoReset,F=st.enabled,G=st.autoUpdate,w=st.needsUpdate,L=st.type;re(),se.autoReset=b,st.enabled=F,st.autoUpdate=G,st.needsUpdate=w,st.type=L}function ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function dt(b){const F=b.target;F.removeEventListener("dispose",dt),k(F)}function k(b){ct(b),Gt.remove(b)}function ct(b){const F=Gt.get(b).programs;F!==void 0&&(F.forEach(function(G){yt.releaseProgram(G)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,G,w,L,z){F===null&&(F=Ct);const rt=L.isMesh&&L.matrixWorld.determinant()<0,Mt=Zn(b,F,G,w,L);vt.setMaterial(w,rt);let Ft=G.index,Ht=1;if(w.wireframe===!0){if(Ft=j.getWireframeAttribute(G),Ft===void 0)return;Ht=2}const Xt=G.drawRange,Kt=G.attributes.position;let _e=Xt.start*Ht,Ge=(Xt.start+Xt.count)*Ht;z!==null&&(_e=Math.max(_e,z.start*Ht),Ge=Math.min(Ge,(z.start+z.count)*Ht)),Ft!==null?(_e=Math.max(_e,0),Ge=Math.min(Ge,Ft.count)):Kt!=null&&(_e=Math.max(_e,0),Ge=Math.min(Ge,Kt.count));const we=Ge-_e;if(we<0||we===1/0)return;Dt.setup(L,w,Mt,G,Ft);let an,ue=Bt;if(Ft!==null&&(an=W.get(Ft),ue=Pt,ue.setIndex(an)),L.isMesh)w.wireframe===!0?(vt.setLineWidth(w.wireframeLinewidth*St()),ue.setMode(V.LINES)):ue.setMode(V.TRIANGLES);else if(L.isLine){let jt=w.linewidth;jt===void 0&&(jt=1),vt.setLineWidth(jt*St()),L.isLineSegments?ue.setMode(V.LINES):L.isLineLoop?ue.setMode(V.LINE_LOOP):ue.setMode(V.LINE_STRIP)}else L.isPoints?ue.setMode(V.POINTS):L.isSprite&&ue.setMode(V.TRIANGLES);if(L.isBatchedMesh)ue.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else if(L.isInstancedMesh)ue.renderInstances(_e,we,L.count);else if(G.isInstancedBufferGeometry){const jt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ps=Math.min(G.instanceCount,jt);ue.renderInstances(_e,we,Ps)}else ue.render(_e,we)};function _t(b,F,G){b.transparent===!0&&b.side===be&&b.forceSinglePass===!1?(b.side=Ne,b.needsUpdate=!0,en(b,F,G),b.side=Ln,b.needsUpdate=!0,en(b,F,G),b.side=be):en(b,F,G)}this.compile=function(b,F,G=null){G===null&&(G=b),m=Nt.get(G),m.init(),y.push(m),G.traverseVisible(function(L){L.isLight&&L.layers.test(F.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),b!==G&&b.traverseVisible(function(L){L.isLight&&L.layers.test(F.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),m.setupLights(g._useLegacyLights);const w=new Set;return b.traverse(function(L){const z=L.material;if(z)if(Array.isArray(z))for(let rt=0;rt<z.length;rt++){const Mt=z[rt];_t(Mt,G,L),w.add(Mt)}else _t(z,G,L),w.add(z)}),y.pop(),m=null,w},this.compileAsync=function(b,F,G=null){const w=this.compile(b,F,G);return new Promise(L=>{function z(){if(w.forEach(function(rt){Gt.get(rt).currentProgram.isReady()&&w.delete(rt)}),w.size===0){L(b);return}setTimeout(z,10)}Rt.get("KHR_parallel_shader_compile")!==null?z():setTimeout(z,10)})};let bt=null;function te(b){bt&&bt(b)}function ee(){ge.stop()}function ne(){ge.start()}const ge=new Fa;ge.setAnimationLoop(te),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(b){bt=b,zt.setAnimationLoop(b),b===null?ge.stop():ge.start()},zt.addEventListener("sessionstart",ee),zt.addEventListener("sessionend",ne),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(F),F=zt.getCamera()),b.isScene===!0&&b.onBeforeRender(g,b,F,P),m=Nt.get(b,y.length),m.init(),y.push(m),Et.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(Et),ut=this.localClippingEnabled,nt=gt.init(this.clippingPlanes,ut),v=xt.get(b,f.length),v.init(),f.push(v),Ae(b,F,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(Q,Y),this.info.render.frame++,nt===!0&&gt.beginShadows();const G=m.state.shadowsArray;if(st.render(G,b,F),nt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(v,b),m.setupLights(g._useLegacyLights),F.isArrayCamera){const w=F.cameras;for(let L=0,z=w.length;L<z;L++){const rt=w[L];vn(v,b,rt,rt.viewport)}}else vn(v,b,F);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(g,b,F),Dt.resetDefaultState(),O=-1,x=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Ae(b,F,G,w){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||J.intersectsSprite(b)){w&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Et);const rt=Z.update(b),Mt=b.material;Mt.visible&&v.push(b,rt,Mt,G,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||J.intersectsObject(b))){const rt=Z.update(b),Mt=b.material;if(w&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Ut.copy(rt.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(Et)),Array.isArray(Mt)){const Ft=rt.groups;for(let Ht=0,Xt=Ft.length;Ht<Xt;Ht++){const Kt=Ft[Ht],_e=Mt[Kt.materialIndex];_e&&_e.visible&&v.push(b,rt,_e,G,Ut.z,Kt)}}else Mt.visible&&v.push(b,rt,Mt,G,Ut.z,null)}}const z=b.children;for(let rt=0,Mt=z.length;rt<Mt;rt++)Ae(z[rt],F,G,w)}function vn(b,F,G,w){const L=b.opaque,z=b.transmissive,rt=b.transparent;m.setupLightsView(G),nt===!0&&gt.setGlobalState(g.clippingPlanes,G),z.length>0&&qe(L,z,F,G),w&&vt.viewport(E.copy(w)),L.length>0&&on(L,F,G),z.length>0&&on(z,F,G),rt.length>0&&on(rt,F,G),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function qe(b,F,G,w){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const z=Lt.isWebGL2;Tt===null&&(Tt=new Yn(1,1,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")?Gi:Cn,minFilter:Bi,samples:z?4:0})),g.getDrawingBufferSize(It),z?Tt.setSize(It.x,It.y):Tt.setSize(vs(It.x),vs(It.y));const rt=g.getRenderTarget();g.setRenderTarget(Tt),g.getClearColor(ot),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const Mt=g.toneMapping;g.toneMapping=Pn,on(b,G,w),A.updateMultisampleRenderTarget(Tt),A.updateRenderTargetMipmap(Tt);let Ft=!1;for(let Ht=0,Xt=F.length;Ht<Xt;Ht++){const Kt=F[Ht],_e=Kt.object,Ge=Kt.geometry,we=Kt.material,an=Kt.group;if(we.side===be&&_e.layers.test(w.layers)){const ue=we.side;we.side=Ne,we.needsUpdate=!0,xn(_e,G,w,Ge,we,an),we.side=ue,we.needsUpdate=!0,Ft=!0}}Ft===!0&&(A.updateMultisampleRenderTarget(Tt),A.updateRenderTargetMipmap(Tt)),g.setRenderTarget(rt),g.setClearColor(ot,N),g.toneMapping=Mt}function on(b,F,G){const w=F.isScene===!0?F.overrideMaterial:null;for(let L=0,z=b.length;L<z;L++){const rt=b[L],Mt=rt.object,Ft=rt.geometry,Ht=w===null?rt.material:w,Xt=rt.group;Mt.layers.test(G.layers)&&xn(Mt,F,G,Ft,Ht,Xt)}}function xn(b,F,G,w,L,z){b.onBeforeRender(g,F,G,w,L,z),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),L.onBeforeRender(g,F,G,w,b,z),L.transparent===!0&&L.side===be&&L.forceSinglePass===!1?(L.side=Ne,L.needsUpdate=!0,g.renderBufferDirect(G,F,w,L,b,z),L.side=Ln,L.needsUpdate=!0,g.renderBufferDirect(G,F,w,L,b,z),L.side=be):g.renderBufferDirect(G,F,w,L,b,z),b.onAfterRender(g,F,G,w,L,z)}function en(b,F,G){F.isScene!==!0&&(F=Ct);const w=Gt.get(b),L=m.state.lights,z=m.state.shadowsArray,rt=L.state.version,Mt=yt.getParameters(b,L.state,z,F,G),Ft=yt.getProgramCacheKey(Mt);let Ht=w.programs;w.environment=b.isMeshStandardMaterial?F.environment:null,w.fog=F.fog,w.envMap=(b.isMeshStandardMaterial?H:S).get(b.envMap||w.environment),Ht===void 0&&(b.addEventListener("dispose",dt),Ht=new Map,w.programs=Ht);let Xt=Ht.get(Ft);if(Xt!==void 0){if(w.currentProgram===Xt&&w.lightsStateVersion===rt)return nn(b,Mt),Xt}else Mt.uniforms=yt.getUniforms(b),b.onBuild(G,Mt,g),b.onBeforeCompile(Mt,g),Xt=yt.acquireProgram(Mt,Ft),Ht.set(Ft,Xt),w.uniforms=Mt.uniforms;const Kt=w.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Kt.clippingPlanes=gt.uniform),nn(b,Mt),w.needsLights=Dn(b),w.lightsStateVersion=rt,w.needsLights&&(Kt.ambientLightColor.value=L.state.ambient,Kt.lightProbe.value=L.state.probe,Kt.directionalLights.value=L.state.directional,Kt.directionalLightShadows.value=L.state.directionalShadow,Kt.spotLights.value=L.state.spot,Kt.spotLightShadows.value=L.state.spotShadow,Kt.rectAreaLights.value=L.state.rectArea,Kt.ltc_1.value=L.state.rectAreaLTC1,Kt.ltc_2.value=L.state.rectAreaLTC2,Kt.pointLights.value=L.state.point,Kt.pointLightShadows.value=L.state.pointShadow,Kt.hemisphereLights.value=L.state.hemi,Kt.directionalShadowMap.value=L.state.directionalShadowMap,Kt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Kt.spotShadowMap.value=L.state.spotShadowMap,Kt.spotLightMatrix.value=L.state.spotLightMatrix,Kt.spotLightMap.value=L.state.spotLightMap,Kt.pointShadowMap.value=L.state.pointShadowMap,Kt.pointShadowMatrix.value=L.state.pointShadowMatrix),w.currentProgram=Xt,w.uniformsList=null,Xt}function Ye(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=fs.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function nn(b,F){const G=Gt.get(b);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Zn(b,F,G,w,L){F.isScene!==!0&&(F=Ct),A.resetTextureUnits();const z=F.fog,rt=w.isMeshStandardMaterial?F.environment:null,Mt=P===null?g.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:gn,Ft=(w.isMeshStandardMaterial?H:S).get(w.envMap||rt),Ht=w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Xt=!!G.attributes.tangent&&(!!w.normalMap||w.anisotropy>0),Kt=!!G.morphAttributes.position,_e=!!G.morphAttributes.normal,Ge=!!G.morphAttributes.color;let we=Pn;w.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(we=g.toneMapping);const an=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ue=an!==void 0?an.length:0,jt=Gt.get(w),Ps=m.state.lights;if(nt===!0&&(ut===!0||b!==x)){const Ve=b===x&&w.id===O;gt.setState(w,b,Ve)}let pe=!1;w.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ps.state.version||jt.outputColorSpace!==Mt||L.isBatchedMesh&&jt.batching===!1||!L.isBatchedMesh&&jt.batching===!0||L.isInstancedMesh&&jt.instancing===!1||!L.isInstancedMesh&&jt.instancing===!0||L.isSkinnedMesh&&jt.skinning===!1||!L.isSkinnedMesh&&jt.skinning===!0||L.isInstancedMesh&&jt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&jt.instancingColor===!1&&L.instanceColor!==null||jt.envMap!==Ft||w.fog===!0&&jt.fog!==z||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==gt.numPlanes||jt.numIntersection!==gt.numIntersection)||jt.vertexAlphas!==Ht||jt.vertexTangents!==Xt||jt.morphTargets!==Kt||jt.morphNormals!==_e||jt.morphColors!==Ge||jt.toneMapping!==we||Lt.isWebGL2===!0&&jt.morphTargetsCount!==ue)&&(pe=!0):(pe=!0,jt.__version=w.version);let Un=jt.currentProgram;pe===!0&&(Un=en(w,F,L));let Dr=!1,bi=!1,Cs=!1;const Re=Un.getUniforms(),Nn=jt.uniforms;if(vt.useProgram(Un.program)&&(Dr=!0,bi=!0,Cs=!0),w.id!==O&&(O=w.id,bi=!0),Dr||x!==b){Re.setValue(V,"projectionMatrix",b.projectionMatrix),Re.setValue(V,"viewMatrix",b.matrixWorldInverse);const Ve=Re.map.cameraPosition;Ve!==void 0&&Ve.setValue(V,Ut.setFromMatrixPosition(b.matrixWorld)),Lt.logarithmicDepthBuffer&&Re.setValue(V,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(w.isMeshPhongMaterial||w.isMeshToonMaterial||w.isMeshLambertMaterial||w.isMeshBasicMaterial||w.isMeshStandardMaterial||w.isShaderMaterial)&&Re.setValue(V,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,bi=!0,Cs=!0)}if(L.isSkinnedMesh){Re.setOptional(V,L,"bindMatrix"),Re.setOptional(V,L,"bindMatrixInverse");const Ve=L.skeleton;Ve&&(Lt.floatVertexTextures?(Ve.boneTexture===null&&Ve.computeBoneTexture(),Re.setValue(V,"boneTexture",Ve.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}L.isBatchedMesh&&(Re.setOptional(V,L,"batchingTexture"),Re.setValue(V,"batchingTexture",L._matricesTexture,A));const Ls=G.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0&&Lt.isWebGL2===!0)&&Vt.update(L,G,Un),(bi||jt.receiveShadow!==L.receiveShadow)&&(jt.receiveShadow=L.receiveShadow,Re.setValue(V,"receiveShadow",L.receiveShadow)),w.isMeshGouraudMaterial&&w.envMap!==null&&(Nn.envMap.value=Ft,Nn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),bi&&(Re.setValue(V,"toneMappingExposure",g.toneMappingExposure),jt.needsLights&&In(Nn,Cs),z&&w.fog===!0&&lt.refreshFogUniforms(Nn,z),lt.refreshMaterialUniforms(Nn,w,tt,q,Tt),fs.upload(V,Ye(jt),Nn,A)),w.isShaderMaterial&&w.uniformsNeedUpdate===!0&&(fs.upload(V,Ye(jt),Nn,A),w.uniformsNeedUpdate=!1),w.isSpriteMaterial&&Re.setValue(V,"center",L.center),Re.setValue(V,"modelViewMatrix",L.modelViewMatrix),Re.setValue(V,"normalMatrix",L.normalMatrix),Re.setValue(V,"modelMatrix",L.matrixWorld),w.isShaderMaterial||w.isRawShaderMaterial){const Ve=w.uniformsGroups;for(let Is=0,Za=Ve.length;Is<Za;Is++)if(Lt.isWebGL2){const Ur=Ve[Is];Yt.update(Ur,Un),Yt.bind(Ur,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function In(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function Dn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,F,G){Gt.get(b.texture).__webglTexture=F,Gt.get(b.depthTexture).__webglTexture=G;const w=Gt.get(b);w.__hasExternalTextures=!0,w.__hasExternalTextures&&(w.__autoAllocateDepthBuffer=G===void 0,w.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),w.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,F){const G=Gt.get(b);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,G=0){P=b,I=F,R=G;let w=!0,L=null,z=!1,rt=!1;if(b){const Ft=Gt.get(b);Ft.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(V.FRAMEBUFFER,null),w=!1):Ft.__webglFramebuffer===void 0?A.setupRenderTarget(b):Ft.__hasExternalTextures&&A.rebindTextures(b,Gt.get(b.texture).__webglTexture,Gt.get(b.depthTexture).__webglTexture);const Ht=b.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(rt=!0);const Xt=Gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Xt[F])?L=Xt[F][G]:L=Xt[F],z=!0):Lt.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?L=Gt.get(b).__webglMultisampledFramebuffer:Array.isArray(Xt)?L=Xt[G]:L=Xt,E.copy(b.viewport),C.copy(b.scissor),X=b.scissorTest}else E.copy(it).multiplyScalar(tt).floor(),C.copy(K).multiplyScalar(tt).floor(),X=at;if(vt.bindFramebuffer(V.FRAMEBUFFER,L)&&Lt.drawBuffers&&w&&vt.drawBuffers(b,L),vt.viewport(E),vt.scissor(C),vt.setScissorTest(X),z){const Ft=Gt.get(b.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ft.__webglTexture,G)}else if(rt){const Ft=Gt.get(b.texture),Ht=F||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ft.__webglTexture,G||0,Ht)}O=-1},this.readRenderTargetPixels=function(b,F,G,w,L,z,rt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&rt!==void 0&&(Mt=Mt[rt]),Mt){vt.bindFramebuffer(V.FRAMEBUFFER,Mt);try{const Ft=b.texture,Ht=Ft.format,Xt=Ft.type;if(Ht!==Qe&&wt.convert(Ht)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Kt=Xt===Gi&&(Rt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&Rt.has("EXT_color_buffer_float"));if(Xt!==Cn&&wt.convert(Xt)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xt===An&&(Lt.isWebGL2||Rt.has("OES_texture_float")||Rt.has("WEBGL_color_buffer_float")))&&!Kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-w&&G>=0&&G<=b.height-L&&V.readPixels(F,G,w,L,wt.convert(Ht),wt.convert(Xt),z)}finally{const Ft=P!==null?Gt.get(P).__webglFramebuffer:null;vt.bindFramebuffer(V.FRAMEBUFFER,Ft)}}},this.copyFramebufferToTexture=function(b,F,G=0){const w=Math.pow(2,-G),L=Math.floor(F.image.width*w),z=Math.floor(F.image.height*w);A.setTexture2D(F,0),V.copyTexSubImage2D(V.TEXTURE_2D,G,0,0,b.x,b.y,L,z),vt.unbindTexture()},this.copyTextureToTexture=function(b,F,G,w=0){const L=F.image.width,z=F.image.height,rt=wt.convert(G.format),Mt=wt.convert(G.type);A.setTexture2D(G,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment),F.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,w,b.x,b.y,L,z,rt,Mt,F.image.data):F.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,w,b.x,b.y,F.mipmaps[0].width,F.mipmaps[0].height,rt,F.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,w,b.x,b.y,rt,Mt,F.image),w===0&&G.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),vt.unbindTexture()},this.copyTextureToTexture3D=function(b,F,G,w,L=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const z=b.max.x-b.min.x+1,rt=b.max.y-b.min.y+1,Mt=b.max.z-b.min.z+1,Ft=wt.convert(w.format),Ht=wt.convert(w.type);let Xt;if(w.isData3DTexture)A.setTexture3D(w,0),Xt=V.TEXTURE_3D;else if(w.isDataArrayTexture||w.isCompressedArrayTexture)A.setTexture2DArray(w,0),Xt=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,w.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,w.unpackAlignment);const Kt=V.getParameter(V.UNPACK_ROW_LENGTH),_e=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ge=V.getParameter(V.UNPACK_SKIP_PIXELS),we=V.getParameter(V.UNPACK_SKIP_ROWS),an=V.getParameter(V.UNPACK_SKIP_IMAGES),ue=G.isCompressedTexture?G.mipmaps[L]:G.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ue.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ue.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,b.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,b.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,b.min.z),G.isDataTexture||G.isData3DTexture?V.texSubImage3D(Xt,L,F.x,F.y,F.z,z,rt,Mt,Ft,Ht,ue.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),V.compressedTexSubImage3D(Xt,L,F.x,F.y,F.z,z,rt,Mt,Ft,ue.data)):V.texSubImage3D(Xt,L,F.x,F.y,F.z,z,rt,Mt,Ft,Ht,ue),V.pixelStorei(V.UNPACK_ROW_LENGTH,Kt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_e),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ge),V.pixelStorei(V.UNPACK_SKIP_ROWS,we),V.pixelStorei(V.UNPACK_SKIP_IMAGES,an),L===0&&w.generateMipmaps&&V.generateMipmap(Xt),vt.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),vt.unbindTexture()},this.resetState=function(){I=0,R=0,P=null,vt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Er?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===ys?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?qn:wa}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qn?Te:gn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class fp extends Xa{}fp.prototype.isWebGL1Renderer=!0;class Rr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qt(t),this.density=e}clone(){return new Rr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pp extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class qa extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const na=new D,ia=new D,sa=new me,cr=new Pa,ds=new Es;class mp extends ve{constructor(t=new Oe,e=new qa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)na.fromBufferAttribute(e,i-1),ia.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=na.distanceTo(ia);t.setAttribute("lineDistance",new ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(i),ds.radius+=r,t.ray.intersectsSphere(ds)===!1)return;sa.copy(i).invert(),cr.copy(t.ray).applyMatrix4(sa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new D,h=new D,d=new D,u=new D,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const f=Math.max(0,a.start),y=Math.min(_.count,a.start+a.count);for(let g=f,M=y-1;g<M;g+=p){const I=_.getX(g),R=_.getX(g+1);if(l.fromBufferAttribute(m,I),h.fromBufferAttribute(m,R),cr.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const O=t.ray.origin.distanceTo(u);O<t.near||O>t.far||e.push({distance:O,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),y=Math.min(m.count,a.start+a.count);for(let g=f,M=y-1;g<M;g+=p){if(l.fromBufferAttribute(m,g),h.fromBufferAttribute(m,g+1),cr.distanceSqToSegment(l,h,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(u);R<t.near||R>t.far||e.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class he extends Be{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],u=n[i+1]-h,p=(a-h)/u;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new Ot:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],r=[],a=[],o=new D,c=new me;for(let p=0;p<=t;p++){const _=p/t;i[p]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ee(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(o,_))}a[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(Ee(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],p*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ya extends Mn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new Ot,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,p=l-this.aY;c=u*h-p*d+this.aX,l=u*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gp extends Ya{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Pr(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let u=(a-r)/l-(o-r)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+d)+(c-o)/d;u*=h,p*=h,i(a,o,u,p)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const us=new D,lr=new Pr,hr=new Pr,dr=new Pr;class Ss extends Mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(us.subVectors(i[0],i[1]).add(i[0]),l=us);const d=i[o%r],u=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(us.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=us),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(h),p);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),lr.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,_,v,m),hr.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,_,v,m),dr.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,_,v,m)}else this.curveType==="catmullrom"&&(lr.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),hr.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),dr.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(lr.calc(c),hr.calc(c),dr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ra(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function _p(s,t){const e=1-s;return e*e*t}function Mp(s,t){return 2*(1-s)*s*t}function vp(s,t){return s*s*t}function Oi(s,t,e,n){return _p(s,t)+Mp(s,e)+vp(s,n)}function xp(s,t){const e=1-s;return e*e*e*t}function Sp(s,t){const e=1-s;return 3*e*e*s*t}function wp(s,t){return 3*(1-s)*s*s*t}function yp(s,t){return s*s*s*t}function Fi(s,t,e,n,i){return xp(s,t)+Sp(s,e)+wp(s,n)+yp(s,i)}class Ep extends Mn{constructor(t=new Ot,e=new Ot,n=new Ot,i=new Ot){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ot){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fi(t,i.x,r.x,a.x,o.x),Fi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tp extends Mn{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fi(t,i.x,r.x,a.x,o.x),Fi(t,i.y,r.y,a.y,o.y),Fi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bp extends Mn{constructor(t=new Ot,e=new Ot){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ot){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ot){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ap extends Mn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rp extends Mn{constructor(t=new Ot,e=new Ot,n=new Ot){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ot){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Oi(t,i.x,r.x,a.x),Oi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ka extends Mn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Oi(t,i.x,r.x,a.x),Oi(t,i.y,r.y,a.y),Oi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pp extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ot){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(ra(o,c.x,l.x,h.x,d.x),ra(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ot().fromArray(i))}return this}}var Cp=Object.freeze({__proto__:null,ArcCurve:gp,CatmullRomCurve3:Ss,CubicBezierCurve:Ep,CubicBezierCurve3:Tp,EllipseCurve:Ya,LineCurve:bp,LineCurve3:Ap,QuadraticBezierCurve:Rp,QuadraticBezierCurve3:Ka,SplineCurve:Pp});class As extends Oe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new D,h=new Ot;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(o,3)),this.setAttribute("uv",new ce(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class pt extends Oe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let _=0;const v=[],m=n/2;let f=0;y(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(p,2));function y(){const M=new D,I=new D;let R=0;const P=(e-t)/n;for(let O=0;O<=r;O++){const x=[],E=O/r,C=E*(e-t)+t;for(let X=0;X<=i;X++){const ot=X/i,N=ot*c+o,B=Math.sin(N),q=Math.cos(N);I.x=C*B,I.y=-E*n+m,I.z=C*q,d.push(I.x,I.y,I.z),M.set(B,P,q).normalize(),u.push(M.x,M.y,M.z),p.push(ot,1-E),x.push(_++)}v.push(x)}for(let O=0;O<i;O++)for(let x=0;x<r;x++){const E=v[x][O],C=v[x+1][O],X=v[x+1][O+1],ot=v[x][O+1];h.push(E,C,ot),h.push(C,X,ot),R+=6}l.addGroup(f,R,0),f+=R}function g(M){const I=_,R=new Ot,P=new D;let O=0;const x=M===!0?t:e,E=M===!0?1:-1;for(let X=1;X<=i;X++)d.push(0,m*E,0),u.push(0,E,0),p.push(.5,.5),_++;const C=_;for(let X=0;X<=i;X++){const N=X/i*c+o,B=Math.cos(N),q=Math.sin(N);P.x=x*q,P.y=m*E,P.z=x*B,d.push(P.x,P.y,P.z),u.push(0,E,0),R.x=B*.5+.5,R.y=q*.5*E+.5,p.push(R.x,R.y),_++}for(let X=0;X<i;X++){const ot=I+X,N=C+X;M===!0?h.push(N,N+1,ot):h.push(N+1,N,ot),O+=3}l.addGroup(f,O,M===!0?1:2),f+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Le extends pt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Le(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Cr extends Oe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new ce(r,3)),this.setAttribute("normal",new ce(r.slice(),3)),this.setAttribute("uv",new ce(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const g=new D,M=new D,I=new D;for(let R=0;R<e.length;R+=3)p(e[R+0],g),p(e[R+1],M),p(e[R+2],I),c(g,M,I,y)}function c(y,g,M,I){const R=I+1,P=[];for(let O=0;O<=R;O++){P[O]=[];const x=y.clone().lerp(M,O/R),E=g.clone().lerp(M,O/R),C=R-O;for(let X=0;X<=C;X++)X===0&&O===R?P[O][X]=x:P[O][X]=x.clone().lerp(E,X/C)}for(let O=0;O<R;O++)for(let x=0;x<2*(R-O)-1;x++){const E=Math.floor(x/2);x%2===0?(u(P[O][E+1]),u(P[O+1][E]),u(P[O][E])):(u(P[O][E+1]),u(P[O+1][E+1]),u(P[O+1][E]))}}function l(y){const g=new D;for(let M=0;M<r.length;M+=3)g.x=r[M+0],g.y=r[M+1],g.z=r[M+2],g.normalize().multiplyScalar(y),r[M+0]=g.x,r[M+1]=g.y,r[M+2]=g.z}function h(){const y=new D;for(let g=0;g<r.length;g+=3){y.x=r[g+0],y.y=r[g+1],y.z=r[g+2];const M=m(y)/2/Math.PI+.5,I=f(y)/Math.PI+.5;a.push(M,1-I)}_(),d()}function d(){for(let y=0;y<a.length;y+=6){const g=a[y+0],M=a[y+2],I=a[y+4],R=Math.max(g,M,I),P=Math.min(g,M,I);R>.9&&P<.1&&(g<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),I<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,g){const M=y*3;g.x=t[M+0],g.y=t[M+1],g.z=t[M+2]}function _(){const y=new D,g=new D,M=new D,I=new D,R=new Ot,P=new Ot,O=new Ot;for(let x=0,E=0;x<r.length;x+=9,E+=6){y.set(r[x+0],r[x+1],r[x+2]),g.set(r[x+3],r[x+4],r[x+5]),M.set(r[x+6],r[x+7],r[x+8]),R.set(a[E+0],a[E+1]),P.set(a[E+2],a[E+3]),O.set(a[E+4],a[E+5]),I.copy(y).add(g).add(M).divideScalar(3);const C=m(I);v(R,E+0,y,C),v(P,E+2,g,C),v(O,E+4,M,C)}}function v(y,g,M,I){I<0&&y.x===1&&(a[g]=y.x-1),M.x===0&&M.z===0&&(a[g]=I/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.vertices,t.indices,t.radius,t.details)}}class Lr extends Cr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lr(t.radius,t.detail)}}class ie extends Oe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new D,u=new D,p=[],_=[],v=[],m=[];for(let f=0;f<=n;f++){const y=[],g=f/n;let M=0;f===0&&a===0?M=.5/e:f===n&&c===Math.PI&&(M=-.5/e);for(let I=0;I<=e;I++){const R=I/e;d.x=-t*Math.cos(i+R*r)*Math.sin(a+g*o),d.y=t*Math.cos(a+g*o),d.z=t*Math.sin(i+R*r)*Math.sin(a+g*o),_.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(R+M,1-g),y.push(l++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){const g=h[f][y+1],M=h[f][y],I=h[f+1][y],R=h[f+1][y+1];(f!==0||a>0)&&p.push(g,M,R),(f!==n-1||c<Math.PI)&&p.push(M,I,R)}this.setIndex(p),this.setAttribute("position",new ce(_,3)),this.setAttribute("normal",new ce(v,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ie(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class pn extends Oe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new D,d=new D,u=new D;for(let p=0;p<=n;p++)for(let _=0;_<=i;_++){const v=_/i*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(v),d.y=(t+e*Math.cos(m))*Math.sin(v),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(d,h).normalize(),c.push(u.x,u.y,u.z),l.push(_/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=i;_++){const v=(i+1)*p+_-1,m=(i+1)*(p-1)+_-1,f=(i+1)*(p-1)+_,y=(i+1)*p+_;a.push(v,m,y),a.push(m,f,y)}this.setIndex(a),this.setAttribute("position",new ce(o,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ki extends Oe{constructor(t=new Ka(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,c=new D,l=new Ot;let h=new D;const d=[],u=[],p=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(p,2));function v(){for(let g=0;g<e;g++)m(g);m(r===!1?e:0),y(),f()}function m(g){h=t.getPointAt(g/e,h);const M=a.normals[g],I=a.binormals[g];for(let R=0;R<=i;R++){const P=R/i*Math.PI*2,O=Math.sin(P),x=-Math.cos(P);c.x=x*M.x+O*I.x,c.y=x*M.y+O*I.y,c.z=x*M.z+O*I.z,c.normalize(),u.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function f(){for(let g=1;g<=e;g++)for(let M=1;M<=i;M++){const I=(i+1)*(g-1)+(M-1),R=(i+1)*g+(M-1),P=(i+1)*g+M,O=(i+1)*(g-1)+M;_.push(I,R,O),_.push(R,P,O)}}function y(){for(let g=0;g<=e;g++)for(let M=0;M<=i;M++)l.x=g/e,l.y=M/i,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ki(new Cp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class $ extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ya,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zi extends ${constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ot(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Rs extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Lp extends Rs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ur=new me,oa=new D,aa=new D;class Ir{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new br,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;oa.setFromMatrixPosition(t.matrixWorld),e.position.copy(oa),aa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(aa),e.updateMatrixWorld(),ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ip extends Ir{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=xi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Dp extends Rs{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ip}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ca=new me,Ii=new D,fr=new D;class Up extends Ir{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ot(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ii.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ii),fr.copy(n.position),fr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(fr),n.updateMatrixWorld(),i.makeTranslation(-Ii.x,-Ii.y,-Ii.z),ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca)}}class Np extends Rs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Up}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Op extends Ir{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fp extends Rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Op}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=la(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=la();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function la(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wr);const kt={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:8,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},ae={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class Gp{constructor(){this.state=ae.MENU,this.speedKmh=kt.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=kt.LANES[1],this.targetLaneX=kt.LANES[1],this.crashTimer=0}startNewGame(){this.state=ae.PLAYING,this.speedKmh=kt.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=kt.LANES[1],this.targetLaneX=kt.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==ae.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<kt.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=kt.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min(kt.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=kt.SCORING.COMBO_TIMEOUT;const t=kt.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min(kt.NITRO.MAX,this.nitro+kt.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==ae.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*kt.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,r=e.keys.accelerate,a=e.keys.boost,o=this.distanceMeters/1e3,c=Math.min(kt.SPEED.MAX_PROGRESSIVE_BONUS,o*kt.SPEED.PROGRESSIVE_RATE),l=kt.SPEED.BASE_START+c,h=l+45,d=kt.SPEED.BOOST+c*.4;a&&this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-kt.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(d,this.speedKmh+kt.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.nitro=Math.min(kt.NITRO.MAX,this.nitro+kt.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max(kt.SPEED.MIN,this.speedKmh-kt.SPEED.BRAKING*t):r?this.speedKmh=Math.min(h,this.speedKmh+kt.SPEED.ACCELERATION*1.6*t):this.speedKmh<l?this.speedKmh=Math.min(l,this.speedKmh+kt.SPEED.ACCELERATION*t):this.speedKmh>l&&(this.speedKmh=Math.max(l,this.speedKmh-kt.SPEED.NATURAL_DECEL*t)));const p=this.speedKmh*1e3/3600*t;this.distanceMeters+=p,this.score+=Math.round(p*kt.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=ae.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class kp{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.touchStartX=0,this.touchStartY=0,this.touchStartTime=0,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)&&t.preventDefault(),t.code){case"ArrowLeft":case"KeyA":this.keys.left||(this.laneChangeRequested=-1),this.keys.left=!0;break;case"ArrowRight":case"KeyD":this.keys.right||(this.laneChangeRequested=1),this.keys.right=!0;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!0;break;case"Space":this.keys.boost=!0;break;case"ArrowDown":case"KeyS":this.keys.brake=!0;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!0,this.onHorn&&this.onHorn();break;case"KeyP":case"Escape":this.onPauseToggle&&this.onPauseToggle();break;case"KeyR":this.onRestart&&this.onRestart();break}}),window.addEventListener("keyup",t=>{switch(t.code){case"ArrowLeft":case"KeyA":this.keys.left=!1;break;case"ArrowRight":case"KeyD":this.keys.right=!1;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!1;break;case"Space":this.keys.boost=!1;break;case"ArrowDown":case"KeyS":this.keys.brake=!1;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!1;break}}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0,t.touches.length>0&&(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=Date.now())},{passive:!0}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;Date.now()-this.touchStartTime<350&&Math.abs(e)>40&&Math.abs(e)>Math.abs(n)*1.3&&(e<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}triggerSteerLeft(){this.laneChangeRequested=-1}triggerSteerRight(){this.laneChangeRequested=1}setBrake(t){this.keys.brake=t}setAccelerate(t){this.keys.accelerate=t}setNitro(t){this.keys.boost=t}setBoost(t){this.keys.boost=t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0}}class zp{constructor(t){this.camera=t,this.defaultOffset=new D(kt.CAMERA.DEFAULT_OFFSET.x,kt.CAMERA.DEFAULT_OFFSET.y,kt.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new D(kt.CAMERA.LOOK_OFFSET.x,kt.CAMERA.LOOK_OFFSET.y,kt.CAMERA.LOOK_OFFSET.z),this.currentPos=new D,this.currentLook=new D,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=kt.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.8,8.2),this.lookOffset.set(0,1.3,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=kt.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const r=t.group.position,a=Math.min(1,e/kt.SPEED.MAX_NORMAL),o=this.camera.aspect,c=o<1?Math.min(24,(1-o)*36):0;this.targetFOV=kt.CAMERA.BASE_FOV+c+a*10+(n?8:0),this.camera.fov+=(this.targetFOV-this.camera.fov)*Math.min(1,i*kt.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix();const l=r.x+this.defaultOffset.x,h=r.y+this.defaultOffset.y,d=r.z+this.defaultOffset.z+(n?.8:0),u=Math.min(1,i*10),p=Math.min(1,i*12);this.currentPos.x+=(l-this.currentPos.x)*u,this.currentPos.y+=(h-this.currentPos.y)*p,this.currentPos.z=d;const _=r.x+this.lookOffset.x,v=r.y+this.lookOffset.y,m=r.z+this.lookOffset.z;this.currentLook.x+=(_-this.currentLook.x)*u,this.currentLook.y+=(v-this.currentLook.y)*p,this.currentLook.z=m;let f=0,y=0;if(e>70){const R=e/280*.03;f=(Math.random()-.5)*R,y=(Math.random()-.5)*R}let g=0,M=0,I=0;if(this.shakeDuration>0){this.shakeDuration-=i;const R=Math.max(0,this.shakeDuration/.6),P=this.shakeIntensity*R;g=(Math.random()-.5)*P,M=(Math.random()-.5)*P,I=(Math.random()-.5)*P}this.camera.position.set(this.currentPos.x+f+g,this.currentPos.y+y+M,this.currentPos.z+I),this.camera.lookAt(this.currentLook.x+f*.5,this.currentLook.y+y*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,r=(e?4.8:8.2)*i,a=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),o=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*r,a,Math.cos(c)*r),this.camera.lookAt(0,o,0)}}class Vp{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){this.ctx&&fetch("/audio/eta_ki_korli_mama.mp3").then(t=>{if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.arrayBuffer()}).then(t=>this.ctx.decodeAudioData(t)).then(t=>{this.crashVoiceBuffer=t}).catch(t=>{console.warn("Could not decode crash voice buffer:",t)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const r=this.ctx.createGain();r.gain.setValueAtTime(.04,t),this.highOsc.connect(r),r.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,r=0,a=0;for(let c=0;c<t;c++){const l=Math.random()*2-1;i=.98*i+l*.055,r=.95*r+l*.075,a=.85*a+l*.15,n[c]=(i+r+a)*.45}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),o.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),o.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(500,t),a.frequency.exponentialRampToValueAtTime(180,t+.35);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.07,t+.05),o.gain.exponentialRampToValueAtTime(.001,t+.35),r.connect(a),a.connect(o),o.connect(this.masterGain),r.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const r=[2093,2637];[0,.09].forEach(a=>{r.forEach(o=>{const c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(o,n+a),l.gain.setValueAtTime(0,n+a),l.gain.linearRampToValueAtTime(.22,n+a+.008),l.gain.exponentialRampToValueAtTime(1e-4,n+a+.18),c.connect(l),l.connect(this.masterGain),c.start(n+a),c.stop(n+a+.2)})});return}if(e==="cng"){[620,780].forEach(a=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sawtooth",o.frequency.setValueAtTime(a,n);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.35)});return}[330,415.3,523.25].forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain(),l=this.ctx.createBiquadFilter();o.type=a===0?"sine":"triangle",o.frequency.setValueAtTime(r,n),l.type="lowpass",l.frequency.setValueAtTime(1400,n);const h=a===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(h,n+.02),c.gain.setValueAtTime(h,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n*.8,t),r.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.08,t+.06),a.gain.exponentialRampToValueAtTime(1e-4,t+.45),r.connect(a),a.connect(this.masterGain),r.start(t),r.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const r=this.ctx.currentTime,a=Math.min(1,Math.max(0,t/200)),o=a*5%1,c=900+a*1800+o*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const l=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,l),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,r,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,r,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,r,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,r,.05);const h=300+a*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(h,r,.06);const d=.16+a*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,d),r,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+a*350,r,.08),this.turboGain.gain.setTargetAtTime(.05,r,.08)):this.turboGain.gain.setTargetAtTime(1e-4,r,.15);const u=Math.pow(a,1.3)*.06;this.roadGain.gain.setTargetAtTime(u,r,.08),this.roadFilter.frequency.setTargetAtTime(180+a*250,r,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime((a===0?n:n*1.25)*i,e+r),c.gain.setValueAtTime(.001,e+r),c.gain.linearRampToValueAtTime(.12,e+r+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+r+.28),o.connect(c),c.connect(this.masterGain),o.start(e+r),o.stop(e+r+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),r=this.ctx.createBuffer(1,i,this.ctx.sampleRate),a=r.getChannelData(0);for(let h=0;h<i;h++)a[h]=(Math.random()*2-1)*Math.exp(-h/(this.ctx.sampleRate*.12));const o=this.ctx.createBufferSource();o.buffer=r;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const l=this.ctx.createGain();l.gain.setValueAtTime(.3,t),l.gain.exponentialRampToValueAtTime(.001,t+.45),o.connect(c),c.connect(l),l.connect(this.masterGain),o.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(r=>r.lang.includes("bn")||r.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(e,t+i),a.gain.setValueAtTime(.001,t+i),a.gain.linearRampToValueAtTime(.12,t+i+.02),a.gain.exponentialRampToValueAtTime(.001,t+i+.32),r.connect(a),a.connect(this.masterGain),r.start(t+i),r.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class Hp{constructor(){this.group=new At,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new _n,this.collisionSize=new D(2.1,2.8,5.5),this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new he(t),i=document.createElement("canvas");i.width=1024,i.height=384;const r=i.getContext("2d");r.fillStyle="#f8fafc",r.fillRect(0,0,1024,384),r.fillStyle="#dc2626",r.fillRect(0,0,1024,36),r.fillRect(0,348,1024,36),r.fillStyle="#16a34a",r.beginPath(),r.arc(512,180,110,Math.PI,0),r.fill(),r.fillStyle="#f59e0b",r.fillRect(472,80,80,100),r.beginPath(),r.moveTo(512,20),r.lineTo(460,80),r.lineTo(564,80),r.fill();const a=(W,j)=>{r.fillStyle="#dc2626";for(let Z=0;Z<Math.PI*2;Z+=Math.PI/3)r.beginPath(),r.arc(W+Math.cos(Z)*35,j+Math.sin(Z)*35,24,0,Math.PI*2),r.fill();r.fillStyle="#fbbf24",r.beginPath(),r.arc(W,j,22,0,Math.PI*2),r.fill()};a(220,180),a(804,180),r.fillStyle="#1e293b",r.font="bold 54px serif",r.textAlign="center",r.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const o=new he(i),c=document.createElement("canvas");c.width=1024,c.height=512;const l=c.getContext("2d");l.fillStyle="#f59e0b",l.fillRect(0,0,1024,140);for(let W=60;W<1024;W+=110)l.fillStyle="#dc2626",l.beginPath(),l.arc(W,70,32,0,Math.PI*2),l.fill(),l.fillStyle="#22c55e",l.beginPath(),l.arc(W,70,16,0,Math.PI*2),l.fill();l.fillStyle="#15803d",l.fillRect(0,140,1024,372),l.strokeStyle="#f8fafc",l.lineWidth=8;for(let W=30;W<1024;W+=138)l.strokeRect(W,160,116,320);l.fillStyle="#ffffff",l.font="900 80px sans-serif",l.textAlign="center",l.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),l.fillStyle="#dc2626",l.fillRect(0,140,30,372),l.fillRect(994,140,30,372);const h=new he(c);this.yellowPaint=new $({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new $({color:165063,roughness:.4,metalness:.3}),this.redPaint=new $({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new $({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new $({color:2040877,roughness:.8}),this.woodPlankMat=new $({color:7877903,roughness:.9}),this.tireMat=new $({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new $({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new zi({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new fe({color:16777215}),this.taillightMat=new $({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new $({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new $({color:16119280,roughness:.65}),this.cowBrownMat=new $({color:9262372,roughness:.7}),this.cowBlackMat=new $({color:2236962,roughness:.75}),this.cowFawnMat=new $({color:12088115,roughness:.68}),this.hornMat=new $({color:3621201,roughness:.4}),this.snoutMat=new $({color:1974308,roughness:.8});const d=new At;d.name="truckBody",this.bodyGroup=d;const u=new et(1.9,.4,6),p=new T(u,this.chassisMat);p.position.set(0,.65,.2),p.castShadow=!0,d.add(p);const _=new At;_.position.set(0,.6,-2.85),[-.3,0,.3].forEach(W=>{const j=new pt(.06,.06,2.3,8);j.rotateZ(Math.PI/2);const Z=new T(j,this.tealBumperMat);Z.position.y=W,Z.castShadow=!0,_.add(Z)}),[-.95,-.45,.45,.95].forEach(W=>{const j=new et(.08,.72,.08),Z=new T(j,this.tealBumperMat);Z.position.x=W,_.add(Z)}),[-1.08,1.08].forEach(W=>{const j=new pt(.03,.03,.9,6),Z=new T(j,this.tealBumperMat);Z.position.set(W,.35,0),_.add(Z);const yt=new ie(.07,8,8),lt=new T(yt,this.redPaint);lt.position.set(W,.8,0),_.add(lt)});const v=document.createElement("canvas");v.width=256,v.height=80;const m=v.getContext("2d");m.fillStyle="#006633",m.fillRect(0,0,256,80),m.strokeStyle="#ffffff",m.lineWidth=4,m.strokeRect(4,4,248,72),m.fillStyle="#ffffff",m.font="bold 26px sans-serif",m.textAlign="center",m.fillText("যশোর-ট",128,34),m.fillText("০২-০৯৬৯",128,64);const f=new he(v),y=new qt(.65,.22),g=new fe({map:f}),M=new T(y,g);M.position.set(0,-.15,.08),_.add(M),d.add(_);const I=new et(1.85,.95,1.6),R=new T(I,this.yellowPaint);R.position.set(0,1.25,-2.05),R.castShadow=!0,d.add(R);const P=new qt(1.65,.85),O=new $({map:n}),x=new T(P,O);x.position.set(0,1.25,-2.86),d.add(x),[-.68,.68].forEach(W=>{const j=new pt(.16,.16,.06,16);j.rotateX(Math.PI/2);const Z=new T(j,this.chassisMat);Z.position.set(W,1.15,-2.87),d.add(Z);const yt=new As(.13,16),lt=new T(yt,this.headlightMat);lt.position.set(W,1.15,-2.89),d.add(lt),this.headlights.push(lt);const xt=new Dp(16772829,2.5,60,Math.PI/5,.5,1.2);xt.position.set(W,1.15,-2.9),xt.target.position.set(W*1.5,0,-35),d.add(xt),d.add(xt.target)}),[-.98,.98].forEach(W=>{const j=new et(.24,.55,1.4),Z=new T(j,this.chassisMat);Z.position.set(W,.95,-1.95),Z.castShadow=!0,d.add(Z)});const E=new et(2.1,1.45,1.55),C=new T(E,this.yellowPaint);C.position.set(0,1.75,-.6),C.castShadow=!0,d.add(C),[-1.06,1.06].forEach(W=>{const j=new et(.04,1.35,1.4),Z=new T(j,this.cyanBluePaint);Z.position.set(W,1.75,-.6),d.add(Z);const yt=new qt(.65,.55),lt=new T(yt,this.glassMat);lt.position.set(W>0?W+.03:W-.03,1.95,-.65),lt.rotation.y=W>0?Math.PI/2:-Math.PI/2,d.add(lt)});const X=new qt(1.85,.72),ot=new T(X,this.glassMat);ot.position.set(0,1.92,-1.39),d.add(ot);const N=new At;N.position.set(0,2.65,-.85);const B=new qt(2.15,.85),q=new $({map:o,roughness:.4}),tt=new T(B,q);tt.position.set(0,0,-.55),N.add(tt);const Q=new et(2.2,.15,1.4),Y=new T(Q,this.redPaint);Y.position.set(0,.45,.1),Y.castShadow=!0,N.add(Y);const it=new et(2.24,.18,.08),K=new T(it,this.yellowPaint);K.position.set(0,.38,-.58),N.add(K),d.add(N);const at=new At;at.position.set(0,1.6,1.6);const J=new et(2.2,.12,3.4),nt=new T(J,this.woodPlankMat);nt.position.set(0,-.4,0),nt.receiveShadow=!0,at.add(nt);const ut=new $({map:h,roughness:.45});[-1.12,1.12].forEach(W=>{const j=new qt(3.4,1.15),Z=new T(j,ut);Z.position.set(W,.25,0),Z.rotation.y=W>0?Math.PI/2:-Math.PI/2,Z.castShadow=!0,at.add(Z);const yt=new et(.12,.12,3.4),lt=new T(yt,this.redPaint);lt.position.set(W,.85,0),at.add(lt)});const Tt=new et(2.2,1.15,.1),Et=new T(Tt,this.redPaint);Et.position.set(0,.25,-1.68),at.add(Et);const It=new et(2.2,1.05,.1),Ut=new T(It,this.yellowPaint);Ut.position.set(0,.2,1.68),Ut.castShadow=!0,at.add(Ut);const Ct=new et(2.25,.18,.15),St=new T(Ct,this.chassisMat);St.position.set(0,-.65,1.72),at.add(St),[-.85,.85].forEach(W=>{const j=new et(.32,.14,.05),Z=new T(j,this.taillightMat);Z.position.set(W,-.65,1.82),at.add(Z),this.brakeLights.push(Z)}),[-.85,.85].forEach(W=>{const j=new et(.4,.45,.04),Z=new T(j,this.tireMat);Z.position.set(W,-.9,1.74),at.add(Z)}),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((W,j)=>{const Z=this.createBedCow(W.mat,W.scale);Z.position.set(W.x,.35,W.z),Z.rotation.y=W.rotY,at.add(Z),this.cows.push({group:Z,head:Z.userData.head,baseRotX:Z.userData.head.rotation.x,seed:j*1.5})}),d.add(at);const Wt=this.createTruckWheel(.48,.26,!1);Wt.position.set(0,.42,.4),Wt.rotation.x=Math.PI/2,d.add(Wt);const Rt=new pt(.08,.08,.6,8);Rt.rotateZ(Math.PI/2);const Lt=new T(Rt,this.chassisMat);Lt.position.set(1.05,.48,-.8),d.add(Lt);const vt=new Le(.22,1.2,12);vt.rotateZ(-Math.PI/2);const se=new fe({color:16755200,transparent:!0,opacity:0}),Gt=new T(vt,se);Gt.position.set(1.65,.48,-.8),d.add(Gt),this.exhaustFires.push(Gt),this.group.add(d);const A=.48,S=.52,H=.32;[-1.02,1.02].forEach(W=>{const j=this.createTruckWheelAssembly(S,H,W>0,!1);j.position.set(W,A,-1.95),this.group.add(j),this.wheels.push(j.userData.spinner),this.frontWheels.push(j)}),[-1.02,1.02].forEach(W=>{const j=this.createTruckWheelAssembly(S,H,W>0,!0);j.position.set(W,A,1.85),this.group.add(j),this.wheels.push(j.userData.spinner)})}createBedCow(t,e=1){const n=new At;n.scale.set(e,e,e);const i=new et(.85,.85,1.35),r=new T(i,t);r.position.set(0,.45,0),r.castShadow=!0,n.add(r);const a=new Le(.24,.38,8),o=new T(a,t);o.position.set(0,.95,-.32),o.rotation.x=-.2,n.add(o);const c=new At;c.position.set(0,.75,-.6),n.userData.head=c;const l=new et(.42,.46,.62),h=new T(l,t);h.position.set(0,.22,-.35),c.add(h);const d=new et(.32,.25,.25),u=new T(d,this.snoutMat);return u.position.set(0,.12,-.68),c.add(u),[-.18,.18].forEach(p=>{const _=new Le(.05,.3,6),v=new T(_,this.hornMat);v.position.set(p,.46,-.28),v.rotation.z=p>0?-.38:.38,v.rotation.x=.25,c.add(v);const m=new et(.18,.07,.08),f=new T(m,t);f.position.set(p>0?.26:-.26,.32,-.25),f.rotation.z=p>0?-.35:.35,c.add(f)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const r=new At,a=new At;if(r.userData.spinner=a,r.add(a),i){const o=this.createTruckWheel(t,e*.75,n);o.position.x=n?.08:-.08,a.add(o);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,a.add(c)}else{const o=this.createTruckWheel(t,e,n);a.add(o)}return r}createTruckWheel(t,e,n){const i=new At,r=new pt(t,t,e,24);r.rotateZ(Math.PI/2);const a=new T(r,this.tireMat);i.add(a);const o=new pt(t*.65,t*.65,e+.02,18);o.rotateZ(Math.PI/2);const c=new T(o,this.rimMat);i.add(c);const l=new pt(t*.28,t*.28,e+.05,12);l.rotateZ(Math.PI/2);const h=new T(l,this.chassisMat);return i.add(h),i}update(t,e,n,i,r,a){const o=t*1e3/3600,c=2*Math.PI*.52,l=o/c*(2*Math.PI)*a;this.wheelRotation-=l,this.wheels.forEach(f=>{f.rotation.x=this.wheelRotation});const h=n-this.group.position.x,d=-Math.max(-.35,Math.min(kt.STEERING.WHEEL_TURN_ANGLE,h*.35));this.frontWheels.forEach(f=>{f.rotation.y+=(d-f.rotation.y)*Math.min(1,a*12)});const u=Math.max(-.065,Math.min(.065,h*.065));this.currentRoll+=(u-this.currentRoll)*Math.min(1,a*10),this.bodyGroup.rotation.z=this.currentRoll;const p=Math.max(-.05,Math.min(.05,h*.05));this.currentYaw+=(p-this.currentYaw)*Math.min(1,a*10),this.bodyGroup.rotation.y=this.currentYaw;let _=0;i?_=.045:r&&(_=-.035),this.currentPitch+=(_-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const v=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(f=>{f.material=v}),this.exhaustFires.forEach(f=>{r?(f.material.opacity=.95,f.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),f.material.color.setHex(Math.random()>.4?16759552:16729088)):f.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(f=>{f.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(f=>{f.scale.set(1,1,1)});const m=performance.now()*.001;this.cows.forEach(f=>{const y=Math.sin(m*6.5+f.seed)*.08+(r?Math.sin(m*14+f.seed)*.05:0);f.head.rotation.x=f.baseRotX+y,f.head.rotation.y=Math.sin(m*2.2+f.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.45,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Wp{constructor(){this.group=new At,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new At,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new _n,this.collisionSize=new D(1.5,2.1,3.2),this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new At,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=640;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,360);n.addColorStop(0,"#7dd3fc"),n.addColorStop(1,"#e0f2fe"),e.fillStyle=n,e.fillRect(0,0,1024,640);const i=(w,L,z)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(w,L,38*z,0,Math.PI*2),e.arc(w+42*z,L-14*z,48*z,0,Math.PI*2),e.arc(w+95*z,L-8*z,42*z,0,Math.PI*2),e.arc(w+135*z,L+8*z,32*z,0,Math.PI*2),e.fill()};i(80,120,1.1),i(720,100,.95);const r=512,a=270;for(let w=-Math.PI;w<=0;w+=Math.PI/18)e.beginPath(),e.moveTo(r,a),e.lineTo(r+Math.cos(w)*380,a+Math.sin(w)*380),e.lineTo(r+Math.cos(w+Math.PI/36)*380,a+Math.sin(w+Math.PI/36)*380),e.closePath(),e.fillStyle="rgba(245, 158, 11, 0.45)",e.fill();e.beginPath(),e.arc(r,a,78,Math.PI,0),e.fillStyle="#f59e0b",e.fill(),e.beginPath(),e.arc(r,a,52,Math.PI,0),e.fillStyle="#fde047",e.fill();const o=e.createLinearGradient(0,270,0,520);o.addColorStop(0,"#0284c7"),o.addColorStop(1,"#0369a1"),e.fillStyle=o,e.beginPath(),e.moveTo(0,270),e.lineTo(512,270),e.lineTo(470,520),e.lineTo(0,520),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=3.5;for(let w=290;w<510;w+=24)for(let z=20;z<440;z+=38*2)e.beginPath(),e.moveTo(z,w),e.quadraticCurveTo(z+38/2,w-5,z+38,w),e.stroke();e.fillStyle="#fde68a",e.beginPath(),e.moveTo(470,520),e.lineTo(512,270),e.lineTo(560,270),e.lineTo(530,520),e.closePath(),e.fill(),e.fillStyle="#16a34a",e.beginPath(),e.moveTo(520,270),e.lineTo(1024,270),e.lineTo(1024,520),e.lineTo(485,520),e.closePath(),e.fill();const c=(w,L)=>{e.strokeStyle="#854d0e",e.lineWidth=6,e.beginPath(),e.moveTo(w,L),e.quadraticCurveTo(w-15,L-60,w-25,L-110),e.stroke(),e.strokeStyle="#15803d",e.lineWidth=4;for(let z=0;z<Math.PI*2;z+=Math.PI/4)e.beginPath(),e.moveTo(w-25,L-110),e.quadraticCurveTo(w-25+Math.cos(z)*45,L-110+Math.sin(z)*40-15,w-25+Math.cos(z)*65,L-110+Math.sin(z)*40),e.stroke()};c(640,360),c(720,350),c(940,360),e.fillStyle="#fce7f3",e.fillRect(720,370,190,85),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(720,370,190,85),e.fillStyle="#dc2626",e.beginPath(),e.moveTo(705,370),e.lineTo(815,310),e.lineTo(925,370),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let w=720;w<910;w+=18)e.beginPath(),e.moveTo(w,370),e.lineTo(815,310),e.stroke();e.fillStyle="#374151",e.fillRect(785,395,35,60),e.fillRect(850,390,30,30),e.fillStyle="#f8fafc",e.fillRect(570,385,140,70),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(570,385,140,70),e.fillStyle="#2563eb",e.beginPath(),e.moveTo(555,385),e.lineTo(640,335),e.lineTo(725,385),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let w=570;w<710;w+=18)e.beginPath(),e.moveTo(w,385),e.lineTo(640,335),e.stroke();e.fillStyle="#1e3a8a",e.fillRect(620,405,30,50),e.fillStyle="#ea580c",e.fillRect(0,510,1024,45),e.fillStyle="#fde047";for(let w=20;w<1024;w+=40)e.beginPath(),e.arc(w,510,16,0,Math.PI),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2,e.stroke();e.fillStyle="#18181b",e.fillRect(0,555,1024,35);const l=["#dc2626","#ffffff","#16a34a","#fde047"];for(let w=0;w<48;w++)e.fillStyle=l[w%l.length],e.fillRect(w*22,558,14,29);const h=(w,L)=>{e.strokeStyle="#94a3b8",e.lineWidth=3,e.beginPath(),e.arc(w,L,8,0,Math.PI*2),e.stroke(),e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(w,L+8),e.bezierCurveTo(w+28,L+8,w+44,L+28,w,L+64),e.bezierCurveTo(w-44,L+28,w-28,L+8,w,L+8),e.closePath(),e.fill(),e.strokeStyle="#64748b",e.lineWidth=2.5,e.stroke(),e.fillStyle="#94a3b8",[[0,24],[-14,28],[14,28],[-8,42],[8,42],[0,52]].forEach(([z,rt])=>{e.beginPath(),e.arc(w+z,L+rt,3.2,0,Math.PI*2),e.fill()})};h(220,570),h(512,570),h(804,570);const d=new he(t),u=document.createElement("canvas");u.width=1024,u.height=260;const p=u.getContext("2d"),_=p.createLinearGradient(0,0,0,260);_.addColorStop(0,"#f8fafc"),_.addColorStop(.5,"#e2e8f0"),_.addColorStop(1,"#94a3b8"),p.fillStyle=_,p.fillRect(0,0,1024,260),p.fillStyle="#475569";for(let w=30;w<1e3;w+=45)p.beginPath(),p.arc(w,24,7,0,Math.PI*2),p.fill(),p.beginPath(),p.arc(w-2,22,2.5,0,Math.PI*2),p.fillStyle="#ffffff",p.fill(),p.fillStyle="#475569",p.beginPath(),p.arc(w,236,7,0,Math.PI*2),p.fill(),p.beginPath(),p.arc(w-2,234,2.5,0,Math.PI*2),p.fillStyle="#ffffff",p.fill(),p.fillStyle="#475569";p.fillStyle="#f59e0b",p.strokeStyle="#dc2626",p.lineWidth=7,p.font="bold 82px sans-serif",p.textAlign="center",p.textBaseline="middle",p.strokeText("বাংলাদেশ",512,115),p.fillText("বাংলাদেশ",512,115),p.fillStyle="#16a34a",p.font="bold 78px sans-serif",p.fillText("বাংলাদেশ",512,113),p.fillStyle="#fef08a",p.font="bold 74px sans-serif",p.fillText("বাংলাদেশ",512,111);const v=["#dc2626","#16a34a","#f59e0b","#06b6d4","#ec4899"];for(let w=0;w<18;w++)p.beginPath(),p.arc(310+w*24,185,7.5,0,Math.PI*2),p.fillStyle=v[w%v.length],p.fill(),p.strokeStyle="#18181b",p.lineWidth=1.8,p.stroke();const m=(w,L)=>{p.beginPath(),p.arc(w,L,62,0,Math.PI*2),p.fillStyle="#cbd5e1",p.fill(),p.strokeStyle="#64748b",p.lineWidth=4,p.stroke(),p.beginPath(),p.arc(w,L,48,0,Math.PI*2),p.fillStyle="#dc2626",p.fill(),p.strokeStyle="#fde047",p.lineWidth=3,p.stroke(),p.fillStyle="#ffffff",p.font="bold 50px sans-serif",p.textAlign="center",p.textBaseline="middle",p.fillText("মা",w,L)};m(140,125),m(884,125);const f=new he(u),y=document.createElement("canvas");y.width=1024,y.height=1024;const g=y.getContext("2d");g.beginPath(),g.moveTo(40,1024),g.lineTo(40,520),g.bezierCurveTo(40,60,984,60,984,520),g.lineTo(984,1024),g.closePath(),g.fillStyle="#dc2626",g.fill(),g.strokeStyle="#881337",g.lineWidth=12,g.stroke(),g.strokeStyle="#fde047",g.lineWidth=5,g.stroke(),g.fillStyle="#1d4ed8",g.fillRect(456,120,112,680),g.strokeStyle="#18181b",g.lineWidth=3,g.strokeRect(456,120,112,680),g.fillStyle="#ffffff",g.fillRect(498,120,28,680),g.beginPath(),g.arc(512,780,42,0,Math.PI*2),g.fillStyle="#dc2626",g.fill(),g.strokeStyle="#fde047",g.lineWidth=5,g.stroke(),g.fillStyle="#ffffff",g.font="bold 44px sans-serif",g.textAlign="center",g.textBaseline="middle",g.fillText("১",512,780);const M=(w,L,z,rt)=>{g.save(),g.translate(L,z),g.rotate(rt),g.font="bold 88px sans-serif",g.textAlign="center",g.textBaseline="middle",g.strokeStyle="#18181b",g.lineWidth=12,g.strokeText(w,0,0),g.fillStyle="#ffffff",g.fillText(w,0,0),g.restore()};M("মায়ের",310,240,-.22),M("দোয়া",714,240,.22);const I=(w,L)=>{g.save(),g.translate(w,500),L&&g.scale(-1,1),g.beginPath(),g.arc(70,-160,36,0,Math.PI*2),g.fillStyle="#fde047",g.fill(),g.strokeStyle="#18181b",g.lineWidth=3,g.stroke(),g.beginPath(),g.arc(70,-160,16,0,Math.PI*2),g.fillStyle="#ea580c",g.fill();for(let rt=0;rt<7;rt++){const Mt=-Math.PI/2+(rt-3)*.35;g.beginPath(),g.ellipse(80+Math.cos(Mt)*45,-50+Math.sin(Mt)*35,18,38,Mt,0,Math.PI*2),g.fillStyle="#ec4899",g.fill(),g.strokeStyle="#18181b",g.lineWidth=2.5,g.stroke()}g.beginPath(),g.arc(80,-50,24,0,Math.PI*2),g.fillStyle="#fef08a",g.fill(),g.stroke(),((rt,Mt)=>{g.fillStyle="#16a34a",g.beginPath(),g.ellipse(rt-30,Mt+20,16,32,.6,0,Math.PI*2),g.ellipse(rt+30,Mt+20,16,32,-.6,0,Math.PI*2),g.fill(),g.stroke(),g.fillStyle="#1d4ed8",g.beginPath(),g.arc(rt,Mt,55,0,Math.PI*2),g.fill(),g.strokeStyle="#18181b",g.lineWidth=3,g.stroke(),g.strokeStyle="#38bdf8",g.lineWidth=4,g.beginPath(),g.arc(rt,Mt,36,.4,Math.PI*1.6),g.stroke(),g.beginPath(),g.arc(rt,Mt,20,Math.PI,Math.PI*2.2),g.stroke(),g.fillStyle="#ffffff",g.beginPath(),g.arc(rt,Mt,10,0,Math.PI*2),g.fill()})(85,110),g.restore()};I(260,!1),I(764,!0);const R=new he(y),P=document.createElement("canvas");P.width=512,P.height=128;const O=P.getContext("2d");O.fillStyle="#ffffff",O.fillRect(0,0,512,128),O.fillStyle="#dc2626";for(let w=-128;w<640;w+=36)O.beginPath(),O.moveTo(w,0),O.lineTo(w+18,0),O.lineTo(w+18+128,128),O.lineTo(w+128,128),O.closePath(),O.fill();const x=new he(P),E=document.createElement("canvas");E.width=1024,E.height=1024;const C=E.getContext("2d");C.fillStyle="#f59e0b",C.fillRect(0,0,1024,1024),C.strokeStyle="rgba(234, 88, 12, 0.18)",C.lineWidth=3;for(let w=-1024;w<2048;w+=64)C.beginPath(),C.moveTo(w,0),C.lineTo(w+1024,1024),C.stroke(),C.beginPath(),C.moveTo(w,1024),C.lineTo(w+1024,0),C.stroke();C.fillStyle="#881337",C.fillRect(0,0,1024,140),C.fillRect(0,884,1024,140),C.fillStyle="#06b6d4",C.fillRect(0,140,1024,28),C.fillRect(0,856,1024,28),C.fillStyle="#10b981",C.fillRect(0,168,1024,16),C.fillRect(0,840,1024,16);for(let w=32;w<1024;w+=64)C.beginPath(),C.arc(w,140,16,0,Math.PI),C.fillStyle="#fde047",C.fill(),C.strokeStyle="#18181b",C.lineWidth=2.5,C.stroke(),C.beginPath(),C.arc(w,884,16,Math.PI,Math.PI*2),C.fillStyle="#fde047",C.fill(),C.strokeStyle="#18181b",C.lineWidth=2.5,C.stroke();[70,954].forEach(w=>{C.fillStyle="#ffffff",C.font="bold 44px sans-serif",C.textAlign="center",C.textBaseline="middle",C.shadowColor="rgba(0,0,0,0.8)",C.shadowBlur=8,C.fillText("মা বাবার দোয়া",512,w),C.shadowBlur=0}),((w,L)=>{C.strokeStyle="#ea580c",C.lineWidth=4;for(let z=0;z<Math.PI*2;z+=Math.PI/16)C.beginPath(),C.moveTo(w,L),C.lineTo(w+Math.cos(z)*260,L+Math.sin(z)*260),C.stroke();for(let z=0;z<16;z++){const rt=z*Math.PI/8,Mt=w+Math.cos(rt)*175,Ft=L+Math.sin(rt)*175;C.beginPath(),C.ellipse(Mt,Ft,42,65,rt+Math.PI/2,0,Math.PI*2),C.fillStyle=z%2===0?"#dc2626":"#0284c7",C.fill(),C.strokeStyle="#18181b",C.lineWidth=4,C.stroke()}for(let z=0;z<12;z++){const rt=z*Math.PI/6,Mt=w+Math.cos(rt)*115,Ft=L+Math.sin(rt)*115;C.beginPath(),C.ellipse(Mt,Ft,34,52,rt+Math.PI/2,0,Math.PI*2),C.fillStyle=z%2===0?"#ec4899":"#10b981",C.fill(),C.strokeStyle="#18181b",C.lineWidth=3.5,C.stroke()}C.beginPath(),C.arc(w,L,62,0,Math.PI*2),C.fillStyle="#fde047",C.fill(),C.strokeStyle="#18181b",C.lineWidth=4,C.stroke(),C.beginPath(),C.arc(w,L,32,0,Math.PI*2),C.fillStyle="#b91c1c",C.fill(),[-1,1].forEach(z=>{C.beginPath(),C.moveTo(w+z*160,L-60),C.bezierCurveTo(w+z*320,L-140,w+z*420,L-40,w+z*340,L+50),C.bezierCurveTo(w+z*280,L+120,w+z*200,L+60,w+z*180,L),C.fillStyle="#0d9488",C.fill(),C.strokeStyle="#18181b",C.lineWidth=4,C.stroke(),C.beginPath(),C.arc(w+z*320,L-30,28,0,Math.PI*2),C.fillStyle="#fde047",C.fill(),C.beginPath(),C.arc(w+z*320,L-30,16,0,Math.PI*2),C.fillStyle="#1e3a8a",C.fill()})})(512,512);const ot=(w,L)=>{const z=["#dc2626","#ec4899","#f59e0b","#10b981"];for(let rt=0;rt<8;rt++){const Mt=rt*Math.PI/4,Ft=w+Math.cos(Mt)*48,Ht=L+Math.sin(Mt)*48;C.beginPath(),C.arc(Ft,Ht,22,0,Math.PI*2),C.fillStyle=z[rt%z.length],C.fill(),C.strokeStyle="#18181b",C.lineWidth=2.5,C.stroke()}C.beginPath(),C.arc(w,L,26,0,Math.PI*2),C.fillStyle="#fde047",C.fill(),C.strokeStyle="#18181b",C.lineWidth=2.5,C.stroke(),C.beginPath(),C.arc(w,L,12,0,Math.PI*2),C.fillStyle="#991b1b",C.fill()};[120,904].forEach(w=>{ot(w,320),ot(w,704)});const N=new he(E),B=document.createElement("canvas");B.width=256,B.height=256;const q=B.getContext("2d");q.fillStyle="#b91c1c",q.fillRect(0,0,256,256),q.strokeStyle="#fde047",q.lineWidth=3;for(let w=0;w<256;w+=32)q.beginPath(),q.moveTo(w,0),q.lineTo(w+32,256),q.stroke(),q.beginPath(),q.moveTo(256-w,0),q.lineTo(256-w-32,256),q.stroke();const tt=new he(B),Q=document.createElement("canvas");Q.width=512,Q.height=256;const Y=Q.getContext("2d");Y.fillStyle="#f59e0b",Y.fillRect(0,0,512,256),Y.fillStyle="#ea580c",Y.beginPath(),Y.arc(256,105,45,0,Math.PI*2),Y.fill();for(let w=0;w<Math.PI*2;w+=Math.PI/8)Y.fillStyle="#dc2626",Y.beginPath(),Y.arc(256+Math.cos(w)*62,105+Math.sin(w)*62,14,0,Math.PI*2),Y.fill();Y.fillStyle="#fde047",Y.beginPath(),Y.arc(256,105,26,0,Math.PI*2),Y.fill(),Y.fillStyle="#0d9488",Y.fillRect(0,185,512,71),Y.strokeStyle="#fde047",Y.lineWidth=5;for(let w=-20;w<=530;w+=32)Y.beginPath(),Y.moveTo(w,185),Y.lineTo(w+32,256),Y.stroke(),Y.beginPath(),Y.moveTo(w+32,185),Y.lineTo(w,256),Y.stroke();const it=new he(Q),K=new $({color:14427686,metalness:.6,roughness:.3}),at=new $({color:15658734,metalness:.9,roughness:.15}),J=new $({color:2040865,roughness:.9}),nt=new $({color:165063,metalness:.5,roughness:.4}),ut=new $({color:1409085,roughness:.6}),Tt=new $({map:d,roughness:.4}),Et=new $({map:f,roughness:.35,metalness:.1}),It=new $({map:R,roughness:.6,transparent:!0,side:be}),Ut=new $({map:x,roughness:.45,metalness:.1}),Ct=new $({map:it,roughness:.5,side:be}),St=new $({map:N,roughness:.7,side:be}),V=new $({map:tt,roughness:.6}),Wt=new At,Rt=new pt(.045,.045,1.8,12);Rt.rotateX(Math.PI/2);const Lt=new T(Rt,K);Lt.position.set(0,.65,.1),Wt.add(Lt);const vt=new pt(.04,.04,.95,12);vt.rotateX(-.18);const se=new T(vt,K);se.position.set(0,.95,-.9),Wt.add(se),[-.1,.1].forEach(w=>{const L=new pt(.025,.02,.7,8);L.rotateX(.15);const z=new T(L,at);z.position.set(w,.48,-1.02),Wt.add(z)});const Gt=new pt(.025,.025,.75,12);Gt.rotateZ(Math.PI/2);const A=new T(Gt,at);A.position.set(0,1.35,-.85),Wt.add(A),[-.38,.38].forEach(w=>{const L=new pt(.032,.032,.14,12);L.rotateZ(Math.PI/2);const z=new T(L,J);z.position.set(w,1.35,-.85),Wt.add(z)});const S=new ie(.09,14,14);S.scale(1,1,.7);const H=new T(S,new fe({color:16777215}));H.position.set(0,1.05,-1.08),Wt.add(H),this.headlights.push(H);const W=new ie(.05,12,12);this.bellMesh=new T(W,at),this.bellMesh.position.set(-.24,1.4,-.85),Wt.add(this.bellMesh);const j=new et(.26,.08,.32),Z=new T(j,J);Z.position.set(0,1.08,-.15),Wt.add(Z),[-.08,.08].forEach(w=>{const L=new pt(.02,.02,.12,8),z=new T(L,at);z.position.set(w,.98,-.15),Wt.add(z)});const yt=new pt(.06,.06,.28,12);yt.rotateZ(Math.PI/2);const lt=new T(yt,at);lt.position.set(0,.52,-.15),Wt.add(lt),this.bodyGroup.add(Wt),this.frontWheel=this.createRickshawWheel(.42,K,at,J),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const xt=new pt(.46,.46,.12,16,1,!0,0,Math.PI*.8);xt.rotateZ(Math.PI/2);const Nt=new T(xt,nt);Nt.position.set(0,.44,-1.05),this.bodyGroup.add(Nt),[-.78,.78].forEach(w=>{const L=this.createRickshawWheel(.48,K,at,J);L.position.set(w,.48,.95),this.bodyGroup.add(L),this.wheels.push(L);const z=new pt(.53,.53,.16,20,1,!0,0,Math.PI);z.rotateZ(Math.PI/2);const rt=new T(z,Ut);rt.position.set(w,.48,.95),this.bodyGroup.add(rt)});const gt=new At,st=new et(1.25,.08,1.25),Jt=new T(st,ut);Jt.position.set(0,.65,.75),gt.add(Jt);const Vt=new et(.9,.05,.5),Bt=new T(Vt,ut);Bt.position.set(0,.48,.35),gt.add(Bt);const Pt=new et(1.2,.38,.58),wt=new T(Pt,ut);wt.position.set(0,.86,.88),gt.add(wt),[-.62,.62].forEach((w,L)=>{const z=new qt(1.15,.52),rt=new T(z,Ct);rt.position.set(w,.96,.75),rt.rotation.y=L===0?-Math.PI/2:Math.PI/2,gt.add(rt)});const Dt=new et(1.18,.14,.56),Yt=new T(Dt,V);Yt.position.set(0,1.08,.88),gt.add(Yt);const re=new et(1.16,.22,.1),zt=new T(re,V);zt.position.set(0,1.15,1.08),gt.add(zt),[-.58,.58].forEach(w=>{const L=new et(.08,.28,.6),z=new T(L,nt);z.position.set(w,1.22,.88),gt.add(z)});const ht=new qt(1.06,.54),U=new T(ht,Tt);U.position.set(0,.66,1.18),U.rotation.y=Math.PI,gt.add(U);const ft=new qt(1.08,.19),dt=new T(ft,Et);dt.position.set(0,.96,1.185),dt.rotation.y=Math.PI,gt.add(dt);const k=new qt(1.22,.82),ct=new T(k,It);ct.position.set(0,1.5,1.11),ct.rotation.y=Math.PI,gt.add(ct),[-.78,.78].forEach(w=>{const L=new T(new pt(.055,.055,.035,12),at);L.rotateX(Math.PI/2),L.position.set(w,.62,1.16),gt.add(L);const z=new ie(.048,12,12),rt=new T(z,new fe({color:15680580}));rt.position.set(w,.62,1.18),gt.add(rt),this.brakeLights.push(rt)});const _t=new pt(.7,.7,.96,24,1,!0,-Math.PI/2,Math.PI);_t.rotateX(-Math.PI/2);const bt=new T(_t,St);bt.position.set(0,1.5,.62),gt.add(bt);const te=new pn(.7,.022,8,24,Math.PI),ee=new T(te,K);ee.position.set(0,1.5,.14),gt.add(ee);for(let w=0;w<=14;w++){const L=w*Math.PI/14,z=Math.cos(L)*.7,rt=1.5+Math.sin(L)*.7,Mt=new T(new ie(.022,6,6),new $({color:14427686,roughness:.8}));Mt.position.set(z,rt-.02,.14),gt.add(Mt)}const ne=new pn(.7,.025,8,24,Math.PI),ge=new T(ne,K);ge.position.set(0,1.5,1.1),gt.add(ge);for(let w=0;w<=14;w++){const L=w*Math.PI/14,z=Math.cos(L)*.7,rt=1.5+Math.sin(L)*.7,Mt=new T(new ie(.022,6,6),new $({color:14427686,roughness:.8}));Mt.position.set(z,rt-.02,1.1),gt.add(Mt)}const Ae=new pt(.7,.7,.12,24,1,!0,-Math.PI/2,Math.PI);Ae.rotateX(-Math.PI/2);const vn=new T(Ae,St);vn.position.set(0,1.5,1.04),gt.add(vn),[-.7,.7].forEach((w,L)=>{const z=new qt(.82,.36),rt=new T(z,St);rt.position.set(w,1.34,.65),rt.rotation.y=L===0?-Math.PI/2:Math.PI/2,gt.add(rt);const Mt=new T(new pt(.012,.012,.78,8),at);Mt.position.set(w+(L===0?-.015:.015),1.34,.65),Mt.rotation.x=.45,gt.add(Mt);const Ft=new T(new pt(.012,.012,.78,8),at);Ft.position.set(w+(L===0?-.015:.015),1.34,.65),Ft.rotation.x=-.45,gt.add(Ft);const Ht=new T(new ie(.022,8,8),K);Ht.position.set(w+(L===0?-.025:.025),1.34,.65),gt.add(Ht)}),[-.64,.64].forEach(w=>{const L=new pt(.016,.016,1.15,8);L.rotateX(.42);const z=new T(L,K);z.position.set(w,1.4,.6),gt.add(z)}),this.bodyGroup.add(gt);const qe=new At,on=new $({color:165063,roughness:.8}),xn=new $({color:9262372,roughness:.7}),en=new $({color:1409085,roughness:.9}),Ye=new et(.36,.48,.22),nn=new T(Ye,on);nn.position.set(0,1.42,-.25),nn.rotation.x=.22,qe.add(nn);const Zn=new ie(.12,14,14),In=new T(Zn,xn);In.position.set(0,1.74,-.32),qe.add(In);const Dn=new pn(.11,.035,8,16);Dn.rotateX(Math.PI/2);const b=new T(Dn,new $({color:14427686}));b.position.set(0,1.68,-.32),qe.add(b),[-.18,.18].forEach(w=>{const L=new pt(.04,.035,.52,8);L.rotateX(.75);const z=new T(L,xn);z.position.set(w,1.42,-.52),qe.add(z)});const F=new et(.38,.44,.32),G=new T(F,en);G.position.set(0,1.05,-.18),qe.add(G),this.bodyGroup.add(qe),this.buildCuteRomanticCouple(),[-.32,.32].forEach(w=>{const L=new Le(.12,.65,8);L.rotateX(-Math.PI/2);const z=new fe({color:16759552,transparent:!0,opacity:0}),rt=new T(L,z);rt.position.set(w,.58,1.25),this.bodyGroup.add(rt),this.exhaustFires.push(rt)})}createRickshawWheel(t,e,n,i){const r=new At,a=new pn(t,.038,14,36);a.rotateY(Math.PI/2);const o=new T(a,i);r.add(o);const c=new pn(t*.92,.02,10,36);c.rotateY(Math.PI/2);const l=new T(c,n);r.add(l);const h=new pt(.06,.06,.14,14);h.rotateZ(Math.PI/2);const d=new T(h,e);r.add(d);for(let u=0;u<14;u++){const p=u*Math.PI/7,_=new pt(.005,.005,t*1.84,4);_.rotateX(p);const v=new T(_,n);r.add(v)}return r}buildCuteRomanticCouple(){this.coupleGroup=new At,this.coupleGroup.position.set(0,0,0);const t=new $({color:16106390,roughness:.6}),e=new $({color:1841431,roughness:.5}),n=new $({color:986638,roughness:.4}),i=new $({color:15680580,roughness:.7}),r=new $({color:1976635,roughness:.8}),a=new $({color:15485081,roughness:.6}),o=new $({color:16638023,roughness:.7}),c=new $({color:16777215,roughness:.8}),l=new At;l.position.set(-.25,1.18,.82);const h=new et(.32,.42,.24),d=new T(h,i);d.position.set(0,.22,0),d.rotation.y=.16,d.rotation.z=-.06,l.add(d);const u=new ie(.12,14,14),p=new T(u,t);p.position.set(.02,.52,.02),p.rotation.y=.26,p.rotation.z=-.08,l.add(p);const _=new ie(.13,14,14);_.scale(1.02,1.05,1.02);const v=new T(_,e);v.position.set(.02,.55,.01),l.add(v);const m=new et(.28,.18,.48),f=new T(m,r);f.position.set(0,-.05,-.16),l.add(f);const y=new pt(.04,.035,.38,8);y.rotateZ(.25);const g=new T(y,i);g.position.set(-.22,.18,0),l.add(g);const M=new pt(.04,.035,.34,8);M.rotateZ(-Math.PI/4),M.rotateX(-.18);const I=new T(M,i);I.position.set(.18,.14,-.07),l.add(I),this.coupleGroup.add(l);const R=new At;R.position.set(.25,1.18,.82);const P=new et(.28,.38,.22),O=new T(P,a);O.position.set(0,.2,0),O.rotation.y=-.18,O.rotation.z=.08,R.add(O);const x=new et(.32,.35,.24),E=new T(x,o);E.position.set(0,.22,.02),R.add(E);const C=new ie(.11,14,14),X=new T(C,t);X.position.set(-.02,.48,.02),X.rotation.y=-.3,X.rotation.z=.1,R.add(X);const ot=new ie(.12,14,14);ot.scale(1.04,1.06,1.08);const N=new T(ot,n);N.position.set(-.02,.51,0),R.add(N);const B=new pt(.04,.02,.32,8);B.rotateX(-.4);const q=new T(B,n);q.position.set(-.01,.38,.15),R.add(q);const tt=new et(.26,.16,.46),Q=new T(tt,c);Q.position.set(0,-.05,-.16),R.add(Q);const Y=new pt(.035,.03,.35,8);Y.rotateZ(-.25),Y.rotateX(-.25);const it=new T(Y,a);it.position.set(.2,.16,-.05),R.add(it);const K=new At,at=new pt(.007,.007,.32,6),J=new $({color:1409085,roughness:.8}),nt=new T(at,J);nt.position.set(0,.14,0),K.add(nt);const ut=new et(.07,.012,.035),Tt=new T(ut,J);Tt.position.set(.035,.12,0),Tt.rotation.z=.3,K.add(Tt);const Et=new T(ut,J);Et.position.set(-.035,.18,0),Et.rotation.z=-.3,K.add(Et);const It=new $({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Ut=new T(new Lr(.055,1),It);Ut.position.set(0,.3,0),Ut.scale.set(1.1,1.25,1.1),K.add(Ut);const Ct=new T(new ie(.038,8,8),new $({color:10033947,roughness:.3}));Ct.position.set(0,.32,0),K.add(Ct),K.position.set(.22,.22,-.15),K.rotation.x=-.35,K.rotation.z=-.22,R.add(K);const St=new pt(.035,.03,.32,8);St.rotateZ(Math.PI/4),St.rotateX(-.18);const V=new T(St,a);V.position.set(-.17,.14,-.07),R.add(V),this.coupleGroup.add(R);const Wt=new At;Wt.position.set(0,1.28,.74);const Rt=new T(new ie(.045,10,10),t);Rt.scale.set(1.3,.9,1.1),Rt.position.set(-.02,0,0),Wt.add(Rt);const Lt=new T(new ie(.042,10,10),t);Lt.scale.set(1.2,.85,1.05),Lt.position.set(.02,.01,.01),Wt.add(Lt),this.coupleGroup.add(Wt),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,r,a){const c=t*1e3/3600/.42*a;this.wheelRotation-=c,this.wheels.forEach(m=>{m.rotation.x=this.wheelRotation});const l=n-e,h=-l*.12;this.currentRoll+=(h-this.currentRoll)*Math.min(1,a*7),this.bodyGroup.rotation.z=this.currentRoll;const d=-l*.08;this.currentYaw+=(d-this.currentYaw)*Math.min(1,a*6),this.bodyGroup.rotation.y=this.currentYaw;let u=0;i?u=.04:r&&(u=-.05),this.currentPitch+=(u-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const p=performance.now()*.001,_=Math.min(1,t/80),v=Math.sin(p*8.5)*.025*_;this.coupleGroup.position.y=v,this.coupleGroup.rotation.z=Math.sin(p*4.2)*.015*_,this.exhaustFires.forEach(m=>{r?(m.material.opacity=.9,m.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):m.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(m=>m.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(m=>m.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.15,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Xp{constructor(){this.group=new At,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.headlightRays=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new _n,this.collisionSize=new D(1.55,1.9,2.9),this.buildCNG(),this.group.scale.set(.85,.85,.85)}buildCNG(){this.bodyGroup=new At,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");e.fillStyle="#181a1b",e.fillRect(0,0,512,256),e.fillStyle="rgba(255, 255, 255, 0.03)";for(let k=0;k<512;k+=4)e.fillRect(k,0,2,256);for(let k=0;k<256;k+=4)e.fillRect(0,k,512,2);e.fillStyle="#f1f5f9",e.strokeStyle="#94a3b8",e.lineWidth=1.5;for(let k=0;k<512;k+=32)e.beginPath(),e.arc(k+16,238,14,0,Math.PI,!1),e.fill(),e.stroke();e.fillStyle="#dc2626";for(let k=0;k<512;k+=32)e.beginPath(),e.arc(k+16,244,3,0,Math.PI*2),e.fill();const n=320,i=110;e.fillStyle="#b91c1c",e.beginPath(),e.roundRect(n-120,i-45,240,80,16),e.fill(),e.strokeStyle="#facc15",e.lineWidth=4,e.stroke(),e.strokeStyle="#fde047",e.lineWidth=2,e.strokeRect(n-112,i-38,224,66),e.fillStyle="#ffffff",e.font="900 38px sans-serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.85)",e.shadowBlur=6,e.fillText("মায়ের দোয়া",n,i-4),e.shadowBlur=0;const r=(k,ct)=>{for(let bt=0;bt<6;bt++){const te=bt*Math.PI*2/6;e.fillStyle="#facc15",e.beginPath(),e.arc(k+Math.cos(te)*12,ct+Math.sin(te)*12,7,0,Math.PI*2),e.fill()}e.fillStyle="#dc2626",e.beginPath(),e.arc(k,ct,6,0,Math.PI*2),e.fill()};r(n-145,i-5),r(n+145,i-5);const a=new he(t),o=document.createElement("canvas");o.width=512,o.height=512;const c=o.getContext("2d");c.clearRect(0,0,512,512),c.fillStyle="#166534",c.fillRect(10,10,492,260),c.clearRect(22,22,468,236),c.strokeStyle="#15803d",c.lineWidth=3.5;const l=28;for(let k=-260;k<=772;k+=l)c.beginPath(),c.moveTo(k,22),c.lineTo(k+236,258),c.stroke(),c.beginPath(),c.moveTo(k,258),c.lineTo(k+236,22),c.stroke();c.strokeStyle="#166534",c.lineWidth=7;for(let k=60;k<=460;k+=70)c.beginPath(),c.moveTo(k,15),c.lineTo(k,265),c.stroke();c.fillStyle="#334155",c.fillRect(15,135,482,12),c.fillStyle="#facc15",c.fillRect(235,128,42,26),c.fillStyle="#0f172a",c.fillRect(248,135,16,12),c.fillStyle="#16a34a",c.fillRect(10,270,492,236),c.strokeStyle="#14532d",c.lineWidth=5,c.strokeRect(12,272,488,232),c.fillStyle="#ffffff",c.beginPath(),c.roundRect(24,288,464,95,8),c.fill(),c.strokeStyle="#0284c7",c.lineWidth=4,c.stroke(),c.fillStyle="#dc2626",c.font="bold 28px sans-serif",c.fillText("★",42,342),c.fillText("★",470,342),c.fillStyle="#0284c7",c.font="900 48px sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText("সি এন জি চালিত",256,335),c.fillStyle="#f59e0b",c.beginPath(),c.roundRect(24,396,464,98,8),c.fill(),c.strokeStyle="#b91c1c",c.lineWidth=4,c.stroke(),c.strokeStyle="#dc2626",c.lineWidth=2,c.strokeRect(32,404,448,82),c.fillStyle="#b91c1c",c.font="900 46px sans-serif",c.fillText("ভাই বোন পরিবহন",256,445);const h=new he(o),d=document.createElement("canvas");d.width=256,d.height=160;const u=d.getContext("2d");u.fillStyle="#16a34a",u.fillRect(0,0,256,160);const p=["#0284c7","#facc15","#dc2626"];for(let k=0;k<3;k++)u.fillStyle=p[k],u.beginPath(),u.roundRect(15,20+k*24,226,18,4),u.fill();u.fillStyle="#ffffff",u.font="900 48px sans-serif",u.textAlign="center",u.textBaseline="middle",u.shadowColor="rgba(0,0,0,0.5)",u.shadowBlur=6,u.fillText("CNG",128,122),u.shadowBlur=0;const _=new he(d),v=document.createElement("canvas");v.width=512,v.height=256;const m=v.getContext("2d");m.fillStyle="#1e293b",m.fillRect(0,0,512,256);const f=(k,ct,_t)=>{m.fillStyle="#94a3b8",m.beginPath(),m.arc(k,ct,_t+6,0,Math.PI*2),m.fill();const bt=m.createRadialGradient(k,ct,4,k,ct,_t);bt.addColorStop(0,"#ffffff"),bt.addColorStop(.4,"#e2e8f0"),bt.addColorStop(.85,"#94a3b8"),bt.addColorStop(1,"#475569"),m.fillStyle=bt,m.beginPath(),m.arc(k,ct,_t,0,Math.PI*2),m.fill(),m.strokeStyle="rgba(255,255,255,0.6)",m.lineWidth=1.8;for(let te=10;te<_t;te+=10)m.beginPath(),m.arc(k,ct,te,0,Math.PI*2),m.stroke();m.fillStyle="#fef08a",m.beginPath(),m.arc(k,ct,6,0,Math.PI*2),m.fill()};f(105,140,52),f(407,140,52),m.fillStyle="#0f172a";for(let k=200;k<=312;k+=16)m.fillRect(k,105,7,75);m.fillStyle="#047857",m.beginPath(),m.roundRect(165,20,182,54,6),m.fill(),m.strokeStyle="#ffffff",m.lineWidth=2.5,m.stroke(),m.fillStyle="#ffffff",m.font="bold 22px sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText("ঢাকা মেট্রো",256,47),m.fillStyle="#ef4444",m.fillRect(75,30,48,22),m.fillStyle="#f59e0b",m.fillRect(389,30,48,22);const y=new he(v),g=document.createElement("canvas");g.width=512,g.height=360;const M=g.getContext("2d");M.fillStyle="#16a34a",M.fillRect(0,0,512,360),M.strokeStyle="#14532d",M.lineWidth=4,M.strokeRect(6,6,500,348);for(let k=55;k<=220;k+=22)M.fillStyle="#14532d",M.fillRect(25,k,105,8),M.fillStyle="#22c55e",M.fillRect(25,k+8,105,2),M.fillStyle="#14532d",M.fillRect(382,k,105,8),M.fillStyle="#22c55e",M.fillRect(382,k+8,105,2),k>=165&&(M.fillStyle="#14532d",M.fillRect(145,k,222,7),M.fillStyle="#22c55e",M.fillRect(145,k+7,222,2));M.fillStyle="#b91c1c",M.beginPath(),M.roundRect(24,18,95,26,6),M.fill(),M.strokeStyle="#fde047",M.lineWidth=2,M.stroke(),M.fillStyle="#ffffff",M.font="bold 16px sans-serif",M.textAlign="center",M.textBaseline="middle",M.fillText("উত্তরা",71,31),M.fillStyle="#065f46",M.beginPath(),M.roundRect(390,18,98,26,6),M.fill(),M.strokeStyle="#fde047",M.lineWidth=2,M.stroke(),M.fillStyle="#fde047",M.font="bold 12px sans-serif",M.fillText("RE CNG",439,26),M.fillStyle="#ffffff",M.font="9px sans-serif",M.fillText("FOUR STROKE",439,37),M.fillStyle="#047857",M.beginPath(),M.roundRect(176,18,160,72,8),M.fill(),M.strokeStyle="#ffffff",M.lineWidth=3,M.stroke(),M.fillStyle="#ffffff",M.font="bold 19px sans-serif",M.fillText("ঢাকা মেট্রো-থ",256,40),M.font="bold 24px sans-serif",M.fillText("১১-৫০৫১",256,70),M.fillStyle="#facc15",M.beginPath(),M.roundRect(138,104,236,44,6),M.fill(),M.strokeStyle="#dc2626",M.lineWidth=3,M.stroke(),M.fillStyle="#dc2626",M.beginPath(),M.arc(158,126,9,0,Math.PI*2),M.arc(354,126,9,0,Math.PI*2),M.fill(),M.fillStyle="#1c1917",M.font="900 24px sans-serif",M.fillText("UTTARA",256,126);const I=(k,ct,_t)=>{const bt=["#0284c7","#10b981","#f59e0b","#ef4444","#ec4899"],te=Math.PI/bt.length;for(let ee=0;ee<bt.length;ee++)M.fillStyle=bt[ee],M.beginPath(),M.moveTo(k,ct),M.arc(k,ct,_t,Math.PI+ee*te,Math.PI+(ee+1)*te),M.closePath(),M.fill();M.strokeStyle="#ffffff",M.lineWidth=2,M.stroke()};I(65,305,46),I(447,305,46);const R=new he(g),P=document.createElement("canvas");P.width=128,P.height=64;const O=P.getContext("2d");O.fillStyle="#facc15",O.fillRect(0,0,128,64),O.strokeStyle="#1c1917",O.lineWidth=4;for(let k=-64;k<192;k+=16)O.beginPath(),O.moveTo(k,0),O.lineTo(k+32,64),O.stroke(),O.beginPath(),O.moveTo(k+32,0),O.lineTo(k,64),O.stroke();const x=new he(P),E=new $({color:1483594,metalness:.25,roughness:.35}),C=new $({color:1409085,roughness:.45}),X=new $({color:1579547,roughness:.9,metalness:.05}),ot=new $({color:1976635,roughness:.7}),N=new $({color:15857145,metalness:.92,roughness:.12}),B=new $({color:2040865,roughness:.92}),q=new $({color:9741240,metalness:.65,roughness:.28}),tt=new zi({color:988970,transparent:!0,opacity:.52,roughness:.08,transmission:.6}),Q=new zi({color:3718648,transparent:!0,opacity:.45,roughness:.08,transmission:.7}),Y=new $({color:1579035,roughness:.85}),it=new $({map:a,roughness:.85}),K=new $({map:h,transparent:!0,opacity:.96,side:be}),at=new $({map:_,roughness:.35}),J=new $({map:y,roughness:.4}),nt=new $({map:R,roughness:.4,metalness:.1}),ut=new et(1.52,.36,2.65),Tt=new T(ut,E);Tt.position.set(0,.44,0),Tt.receiveShadow=!0,this.bodyGroup.add(Tt);const Et=new T(new et(1.35,.18,2.4),ot);Et.position.set(0,.22,.05),this.bodyGroup.add(Et);const It=new At;It.position.set(0,0,0);const Ut=new pt(.52,.78,.85,18,1,!1,-Math.PI/2,Math.PI);Ut.rotateX(Math.PI/2);const Ct=new T(Ut,E);Ct.position.set(0,.7,-1.22),It.add(Ct),[-.72,.72].forEach((k,ct)=>{const _t=new qt(.72,.42),bt=new T(_t,at);bt.position.set(k,.68,-.92),bt.rotation.y=ct===0?-Math.PI/2:Math.PI/2,It.add(bt)});const St=new T(new qt(.96,.48),J);St.position.set(0,.82,-1.58),It.add(St),[-.28,.28].forEach(k=>{const ct=new pn(.12,.022,10,24),_t=new T(ct,N);_t.position.set(k,.76,-1.59),It.add(_t);const bt=new ie(.11,14,14,0,Math.PI*2,0,Math.PI*.4);bt.rotateX(-Math.PI/2);const te=new fe({color:16777215}),ee=new T(bt,te);ee.position.set(k,.76,-1.59),It.add(ee),this.headlights.push(ee)}),[-.42,.42].forEach(k=>{const ct=new et(.12,.05,.03),_t=new fe({color:16096779}),bt=new T(ct,_t);bt.position.set(k,.98,-1.52),It.add(bt)}),this.bodyGroup.add(It);const V=new At,Wt=new T(new et(1.48,.72,.04),Y);Wt.position.set(0,1.42,-.9),Wt.rotation.x=-.26,V.add(Wt);const Rt=new T(new qt(1.38,.64),tt);Rt.position.set(0,1.42,-.92),Rt.rotation.x=-.26,V.add(Rt);const Lt=new T(new et(.02,.42,.015),ot);Lt.position.set(.12,1.42,-.94),Lt.rotation.x=-.26,Lt.rotation.z=.52,V.add(Lt),[-.72,.72].forEach(k=>{const ct=new pt(.035,.04,.82,8),_t=new T(ct,E);_t.position.set(k,1.4,-.9),_t.rotation.x=-.26,V.add(_t)}),[-.78,.78].forEach((k,ct)=>{const _t=new pt(.014,.014,.32,6);_t.rotateZ(ct===0?.65:-.65);const bt=new T(_t,ot);bt.position.set(k,1.58,-.86),V.add(bt);const te=new pt(.08,.08,.025,14);te.rotateX(Math.PI/2);const ee=new T(te,ot);ee.position.set(ct===0?k-.16:k+.16,1.66,-.86),V.add(ee);const ne=new T(new As(.072,14),new $({color:9741240,metalness:.9,roughness:.1}));ne.position.set(ct===0?k-.16:k+.16,1.66,-.84),V.add(ne)}),this.bodyGroup.add(V);const vt=new At,se=new pt(.82,.82,2.22,24,1,!0,Math.PI*.12,Math.PI*.76);se.rotateZ(Math.PI/2);const Gt=new T(se,X);Gt.position.set(0,1.8,.16),vt.add(Gt),[-.78,.78].forEach((k,ct)=>{const _t=new T(new qt(1.65,.52),it);_t.position.set(k,1.66,.42),_t.rotation.y=ct===0?-Math.PI/2:Math.PI/2,vt.add(_t)}),[-.75,.75].forEach(k=>{const ct=new T(new et(.05,.92,.05),E);ct.position.set(k,1.15,-.22),vt.add(ct);const _t=new T(new et(.05,.92,.05),E);_t.position.set(k,1.15,1.2),vt.add(_t)}),this.bodyGroup.add(vt),[-.77,.77].forEach((k,ct)=>{const _t=new T(new qt(1.36,1.05),K);_t.position.set(k,1.08,.28),_t.rotation.y=ct===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(_t)});const A=new At,S=new T(new qt(1.42,2.2),new $({color:1579035,roughness:.95}));S.rotation.x=-Math.PI/2,S.position.set(0,.63,.1),A.add(S);const H=new T(new et(.55,.25,.45),ot);H.position.set(0,.85,-.42),A.add(H);const W=new At;W.position.set(0,1.08,-.68);const j=new T(new pt(.02,.02,.64,8),N);j.rotateZ(Math.PI/2),W.add(j),[-.3,.3].forEach(k=>{const ct=new T(new pt(.028,.028,.12,8),ot);ct.rotateZ(Math.PI/2),ct.position.set(k,0,0),W.add(ct)});const Z=new T(new et(.18,.08,.12),ot);Z.position.set(0,.04,.02),W.add(Z),A.add(W);const yt=new T(new et(.38,.48,.24),new $({color:165063,roughness:.8}));yt.position.set(0,1.2,-.4),A.add(yt);const lt=new T(new ie(.12,12,12),new $({color:9262372,roughness:.7}));lt.position.set(0,1.54,-.4),A.add(lt);const xt=new T(new et(1.38,.26,.58),new $({color:2042167,roughness:.65}));xt.position.set(0,.85,.72),A.add(xt);const Nt=new T(new et(1.38,.48,.12),new $({color:2042167,roughness:.65}));Nt.position.set(0,1.18,.98),A.add(Nt),this.bodyGroup.add(A);const gt=new At,st=new T(new qt(1.52,.72),X);st.position.set(0,1.62,1.26),st.rotation.y=Math.PI,gt.add(st);const Jt=new T(new et(1.18,.52,.04),Y);Jt.position.set(0,1.62,1.28),gt.add(Jt);const Vt=new T(new qt(1.1,.44),Q);Vt.position.set(0,1.62,1.305),Vt.rotation.y=Math.PI,gt.add(Vt);const Bt=new T(new qt(1.52,.94),nt);Bt.position.set(0,.88,1.33),Bt.rotation.y=Math.PI,gt.add(Bt),[-.64,.64].forEach(k=>{const ct=new T(new et(.12,.28,.05),Y);ct.position.set(k,.82,1.35),gt.add(ct);const _t=new T(new et(.1,.12,.04),new fe({color:15680580}));_t.position.set(k,.88,1.37),gt.add(_t),this.brakeLights.push(_t);const bt=new T(new et(.1,.08,.04),new fe({color:16317180}));bt.position.set(k,.76,1.37),gt.add(bt)}),this.bodyGroup.add(gt);const Pt=new At,wt=new pt(.035,.035,1.65,12);wt.rotateZ(Math.PI/2);const Dt=new T(wt,E);Dt.position.set(0,.38,1.42),Pt.add(Dt),[-.81,.81].forEach(k=>{const ct=new pt(.035,.035,.24,10);ct.rotateX(Math.PI/2);const _t=new T(ct,E);_t.position.set(k,.38,1.32),Pt.add(_t)});const Yt=new T(new qt(.42,.12),new $({map:x,roughness:.4}));Yt.position.set(0,.38,1.46),Yt.rotation.y=Math.PI,Pt.add(Yt);const re=new pt(.022,.022,1.42,10);re.rotateZ(Math.PI/2);const zt=new T(re,N);zt.position.set(0,.26,1.41),Pt.add(zt),[-.64,.64].forEach(k=>{const ct=new T(new et(.24,.18,.02),B);ct.position.set(k,.22,1.34),Pt.add(ct)}),this.bodyGroup.add(Pt),this.frontWheel=this.createCNGWheel(.3,B,q),this.frontWheel.position.set(0,.3,-1.35),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const ht=new pt(.36,.36,.22,16,1,!0,0,Math.PI);ht.rotateZ(Math.PI/2);const U=new T(ht,E);U.position.set(0,.34,-1.35),this.bodyGroup.add(U);const ft=new pt(.04,.04,.52,8),dt=new T(ft,N);dt.position.set(0,.62,-1.35),this.bodyGroup.add(dt),[-.7,.7].forEach(k=>{const ct=this.createCNGWheel(.33,B,q);ct.position.set(k,.33,.82),this.bodyGroup.add(ct),this.wheels.push(ct);const _t=new pt(.39,.39,.24,16,1,!0,0,Math.PI);_t.rotateZ(Math.PI/2);const bt=new T(_t,C);bt.position.set(k,.36,.82),this.bodyGroup.add(bt)}),[-.32,.32].forEach(k=>{const ct=new Le(.12,.75,8);ct.rotateX(-Math.PI/2);const _t=new fe({color:440020,transparent:!0,opacity:0}),bt=new T(ct,_t);bt.position.set(k,.4,1.46),this.bodyGroup.add(bt),this.exhaustFires.push(bt)})}createCNGWheel(t,e,n){const i=new At,r=new pt(t,t,.2,20);r.rotateZ(Math.PI/2);const a=new T(r,e);i.add(a);const o=new pt(t*.65,t*.65,.21,16);o.rotateZ(Math.PI/2);const c=new T(o,n);i.add(c);const l=new pt(t*.28,t*.28,.22,10);l.rotateZ(Math.PI/2);const h=new T(l,new $({color:1579035,roughness:.6}));i.add(h);const d=new pt(t*.12,t*.12,.23,8);d.rotateZ(Math.PI/2);const u=new T(d,new $({color:15857145,metalness:.9}));return i.add(u),i}update(t,e,n,i,r,a){const c=t*1e3/3600/.3*a;this.wheelRotation-=c,this.wheels.forEach(p=>{p.rotation.x=this.wheelRotation});const l=n-e,h=-l*.15;this.currentRoll+=(h-this.currentRoll)*Math.min(1,a*8.5),this.bodyGroup.rotation.z=this.currentRoll;const d=-l*.1;this.currentYaw+=(d-this.currentYaw)*Math.min(1,a*7.5),this.bodyGroup.rotation.y=this.currentYaw;let u=0;i?u=.05:r&&(u=-.045),this.currentPitch+=(u-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch,this.brakeLights.forEach(p=>{p.material.color.setHex(i?16711680:15680580)}),this.exhaustFires.forEach(p=>{r?(p.material.opacity=.95,p.scale.set(1.2+Math.random()*.4,1.2+Math.random()*.5,1.2+Math.random()*.4),p.material.color.setHex(Math.random()>.4?440020:3718648)):p.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(p=>p.scale.set(1.4,1.4,1.4))):this.headlights.forEach(p=>p.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=.95,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.45,this.bodyGroup.rotation.y=.5,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class qp{constructor(){this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[]}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let o=0;o<128;o+=8)e.fillStyle="#6b7280",e.fillRect(o,0,4,128),e.fillStyle="#d1d5db",e.fillRect(o+4,0,4,128);const n=new he(t);n.wrapS=tn,n.wrapT=tn,n.repeat.set(4,4),this.tinRoofMat=new $({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new $({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d");r.fillStyle="#c8a165",r.fillRect(0,0,128,128),r.strokeStyle="#8c6239",r.lineWidth=3;for(let o=0;o<=128;o+=16)r.beginPath(),r.moveTo(0,o),r.lineTo(128,o),r.stroke(),r.beginPath(),r.moveTo(o,0),r.lineTo(o,128),r.stroke();const a=new he(i);a.wrapS=tn,a.wrapT=tn,a.repeat.set(2,2),this.bambooWallMat=new $({map:a,roughness:.85,color:13935475}),this.woodMat=new $({color:6045747,roughness:.85}),this.mudPlinthMat=new $({color:8150594,roughness:.95}),this.brickMat=new $({color:10239278,roughness:.9}),this.palmLeafMat=new $({color:3046706,roughness:.6,side:be}),this.bananaLeafMat=new $({color:4431943,roughness:.5,side:be}),this.treeCrownMat=new $({color:1793568,roughness:.85}),this.bambooTrunkMat=new $({color:6732650,roughness:.4}),this.palmTrunkMat=new $({color:7162945,roughness:.9}),this.hayMat=new $({color:13934615,roughness:.95}),this.paddyFieldMat=new $({color:3706428,roughness:.8}),this.waterMat=new $({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new $({color:10395294,roughness:.7}),this.cowWhiteMat=new $({color:16119280,roughness:.6}),this.cowBrownMat=new $({color:9262372,roughness:.65}),this.cowBlackPatchMat=new $({color:2171169,roughness:.7}),this.hornMat=new $({color:3621201,roughness:.4}),this.ropeMat=new fe({color:12756553}),this.duckMat=new $({color:16777215,roughness:.5}),this.beakMat=new $({color:16750592,roughness:.4}),this.smokeMat=new fe({color:16777215,transparent:!0,opacity:.35})}createCow(t="brown"){const e=new At;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new et(.9,.95,1.7),r=new T(i,n);r.position.set(0,1.05,0),r.castShadow=!0,e.add(r);const a=new Le(.3,.45,8),o=new T(a,n);o.position.set(0,1.62,-.45),o.rotation.x=-.2,o.castShadow=!0,e.add(o);const c=new et(.12,.45,.5),l=new T(c,n);l.position.set(0,.85,-.85),e.add(l);const h=new At;h.position.set(0,1.25,-.85);const d=new et(.45,.55,.6),u=new T(d,n);u.position.set(0,.15,-.2),u.rotation.x=.35,h.add(u);const p=new et(.48,.52,.7),_=new T(p,n);_.position.set(0,.28,-.55),h.add(_);const v=new $({color:2236962,roughness:.8}),m=new et(.36,.3,.3),f=new T(m,v);f.position.set(0,.18,-.92),h.add(f),[-.22,.22].forEach(B=>{const q=new Le(.06,.35,6),tt=new T(q,this.hornMat);tt.position.set(B,.56,-.48),tt.rotation.z=B>0?-.4:.4,tt.rotation.x=.3,h.add(tt);const Q=new et(.22,.08,.1),Y=new T(Q,n);Y.position.set(B>0?.32:-.32,.38,-.45),Y.rotation.z=B>0?-.35:.35,h.add(Y)}),e.add(h),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(B=>{const q=new et(.2,.75,.2),tt=new T(q,n);tt.position.set(B.x,.38,B.z),tt.castShadow=!0,e.add(tt);const Q=new et(.22,.1,.22),Y=new T(Q,this.hornMat);Y.position.set(B.x,.05,B.z),e.add(Y)});const g=new At;g.position.set(0,1.35,.85);const M=new pt(.03,.03,.85,6);M.translate(0,-.42,0);const I=new T(M,n);g.add(I);const R=new Le(.08,.25,6);R.translate(0,-.9,0);const P=new T(R,this.hornMat);g.add(P),e.add(g);const O=new pt(.08,.1,1.2,8),x=new T(O,this.woodMat);x.position.set(.9,.6,-1.2),e.add(x);const E=[new D(0,1.2,-.8),new D(.45,.75,-1),new D(.9,.85,-1.2)],C=new Ss(E),X=new ki(C,8,.02,4,!1),ot=new T(X,this.ropeMat);e.add(ot);const N={type:"cow",head:h,tail:g,seed:Math.random()*10};return this.animatedAnimals.push(N),e}createVillageHouse(t=!1){const e=new At;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new et(6.6,.45,5.2),r=new T(i,this.mudPlinthMat);r.position.set(0,.22,0),r.receiveShadow=!0,e.add(r);const a=new et(5.8,2.6,3.8),o=new T(a,this.bambooWallMat);o.position.set(0,1.75,-.4),o.castShadow=!0,o.receiveShadow=!0,e.add(o);const c=new et(.85,1.8,.08),l=new T(c,this.woodMat);l.position.set(.6,1.35,1.52),e.add(l),[-1.6,-.6].forEach(_=>{const v=new et(.7,.8,.08),m=new T(v,this.woodMat);m.position.set(_,1.8,1.52),e.add(m)});const h=new et(6.6,.1,2.8),d=new T(h,n);d.position.set(0,3.65,-.9),d.rotation.x=-.52,d.castShadow=!0,e.add(d);const u=new et(6.6,.1,3.4),p=new T(u,n);return p.position.set(0,3.5,.8),p.rotation.x=.46,p.castShadow=!0,e.add(p),[-2.5,-.8,.8,2.5].forEach(_=>{const v=new pt(.08,.08,2.3,8),m=new T(v,this.woodMat);m.position.set(_,1.6,2.1),m.castShadow=!0,e.add(m)}),e}createTeaStall(){const t=new At;t.name="cha_er_tong";const e=new et(3.2,1,1.8),n=new T(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new et(3.8,.08,2.8),r=new T(i,this.tinRoofMat);r.position.set(0,2.3,.2),r.rotation.x=.2,r.castShadow=!0,t.add(r),[-1.6,1.6].forEach(v=>{const m=new pt(.07,.07,2.2,6),f=new T(m,this.woodMat);f.position.set(v,1.1,1.2),t.add(f)});const a=new et(3,.08,.45),o=new T(a,this.woodMat);o.position.set(0,.45,1.8),t.add(o),[-1.2,1.2].forEach(v=>{const m=new et(.08,.45,.4),f=new T(m,this.woodMat);f.position.set(v,.22,1.8),t.add(f)});const c=new $({color:13421772,metalness:.9,roughness:.2}),l=new pt(.18,.22,.35,10),h=new T(l,c);h.position.set(-.6,1.18,.2),t.add(h);const d=new zi({color:16777215,transmission:.7,roughness:.1}),u=new pt(.12,.12,.28,8),p=new T(u,d);p.position.set(.6,1.15,.1),t.add(p);const _=new At;_.position.set(-.6,1.45,.2),t.add(_);for(let v=0;v<4;v++){const m=new ie(.08,6,6),f=new T(m,this.smokeMat);f.position.y=v*.25,_.add(f)}return this.smokeEmitters.push(_),t}createHaystack(){const t=new At;t.name="khorer_gada";const e=new pt(1.6,1.9,1.4,12),n=new T(e,this.hayMat);n.position.y=.7,n.castShadow=!0,t.add(n);const i=new pt(1,1.6,1.2,12),r=new T(i,this.hayMat);r.position.y=2,r.castShadow=!0,t.add(r);const a=new Le(1,1.5,12),o=new T(a,this.hayMat);o.position.y=3.35,o.castShadow=!0,t.add(o);const c=new pt(.04,.05,4.8,6),l=new T(c,this.bambooTrunkMat);return l.position.y=2.4,t.add(l),t}createJatriChawni(t=1){const e=new At;e.name="jatri_chawni";const n=new et(5,.35,2.3),i=new T(n,this.concreteMat);i.position.set(0,.175,0),i.receiveShadow=!0,e.add(i);const r=new et(5.2,.14,.22),a=new T(r,this.brickMat);a.position.set(0,.07,-1.1),e.add(a);const o=new et(4.8,2.5,.18),c=new T(o,this.brickMat);c.position.set(0,1.45,1.02),c.castShadow=!0,e.add(c);const l=new qt(4.6,2.3),h=new T(l,this.culvertRailingMaterial);h.position.set(0,1.45,.92),e.add(h),[[-2.1,-.92],[2.1,-.92],[-2.1,.92],[2.1,.92]].forEach(([F,G])=>{const w=new pt(.08,.09,2.6,12),L=new T(w,this.culvertRailingMaterial);L.position.set(F,1.45,G),L.castShadow=!0,e.add(L);const z=new pt(.12,.12,.35,12),rt=new T(z,new $({color:1409085}));rt.position.set(F,.45,G),e.add(rt)});const u=new pt(2.4,2.4,5.2,24,1,!0,Math.PI*.2,Math.PI*.6);u.rotateZ(Math.PI/2);const p=new T(u,this.tinRoofMat);p.position.set(0,2.75,.05),p.castShadow=!0,e.add(p),[-1.8,0,1.8].forEach(F=>{const G=new et(.06,.06,2.1),w=new T(G,new $({color:3359061}));w.position.set(F,2.55,0),e.add(w)});const _=new Np(16772565,3.5,16);_.position.set(0,2.45,.25),e.add(_);const v=new pt(.14,.18,.28,8,1,!0),m=new T(v,new $({color:1976635,wireframe:!0}));m.position.set(0,2.48,.25),e.add(m);const f=new T(new ie(.1,12,12),new fe({color:16772565}));f.position.set(0,2.48,.25),e.add(f);const y=document.createElement("canvas");y.width=1024,y.height=256;const g=y.getContext("2d");g.fillStyle="#15803d",g.fillRect(0,0,1024,256),g.strokeStyle="#f59e0b",g.lineWidth=14,g.strokeRect(10,10,1004,236),g.strokeStyle="#fde047",g.lineWidth=4,g.strokeRect(24,24,976,208);const M=(F,G)=>{g.fillStyle="#fde047",g.beginPath(),g.roundRect(F,G,76,44,8),g.fill(),g.fillStyle="#0284c7",g.fillRect(F+8,G+6,20,18),g.fillRect(F+34,G+6,20,18),g.fillRect(F+58,G+6,12,18),g.fillStyle="#18181b",g.beginPath(),g.arc(F+20,G+44,9,0,Math.PI*2),g.arc(F+56,G+44,9,0,Math.PI*2),g.fill()};M(42,105),M(906,105),g.fillStyle="#ffffff",g.font="900 86px sans-serif",g.textAlign="center",g.textBaseline="middle",g.shadowColor="rgba(0,0,0,0.9)",g.shadowBlur=12,g.fillText("BUS STOP",512,85),g.fillStyle="#fde047",g.font="bold 54px sans-serif",g.shadowColor="rgba(0,0,0,0.8)",g.shadowBlur=8,g.fillText("বাস স্টপ  |  যাত্রী ছাউনি",512,185),g.shadowBlur=0;const I=new he(y),R=new At;R.position.set(0,2.65,-1.02);const P=new et(4.24,.84,.07),O=new $({color:1332013,roughness:.5}),x=new T(P,O);R.add(x);const E=new $({map:I,roughness:.35,emissive:1409085,emissiveIntensity:.15}),C=new qt(4.18,.78);C.rotateY(Math.PI);const X=new T(C,E);X.position.set(0,0,-.038),R.add(X);const ot=new qt(4.18,.78),N=new T(ot,E);N.position.set(0,0,.038),R.add(N),e.add(R);const B=new At,q=t>0?-2.25:2.25;B.position.set(q,0,-1.15);const tt=new T(new pt(.18,.22,.3,12),this.concreteMat);tt.position.set(0,.15,0),B.add(tt);const Q=new $({color:3359061,metalness:.8,roughness:.2}),Y=new T(new pt(.045,.045,3.1,12),Q);Y.position.set(0,1.55,0),B.add(Y);const it=document.createElement("canvas");it.width=512,it.height=512;const K=it.getContext("2d");K.fillStyle="#0284c7",K.beginPath(),K.roundRect(16,16,480,480,48),K.fill(),K.strokeStyle="#facc15",K.lineWidth=20,K.stroke(),K.strokeStyle="#ffffff",K.lineWidth=4,K.beginPath(),K.roundRect(36,36,440,440,36),K.stroke(),K.fillStyle="#ffffff",K.beginPath(),K.roundRect(135,75,242,130,24),K.fill(),K.fillStyle="#0284c7",K.fillRect(155,95,60,50),K.fillRect(230,95,60,50),K.fillRect(305,95,52,50),K.fillStyle="#18181b",K.beginPath(),K.arc(190,205,22,0,Math.PI*2),K.arc(320,205,22,0,Math.PI*2),K.fill(),K.fillStyle="#ffffff",K.font="900 72px sans-serif",K.textAlign="center",K.textBaseline="middle",K.shadowColor="rgba(0,0,0,0.85)",K.shadowBlur=8,K.fillText("BUS STOP",256,310),K.fillStyle="#fde047",K.font="bold 56px sans-serif",K.fillText("বাস স্টপ",256,405),K.shadowBlur=0;const at=new he(it),J=new $({map:at,roughness:.35,emissive:165063,emissiveIntensity:.12}),nt=new At;nt.position.set(0,2.7,0);const ut=new T(new et(.96,.96,.06),new $({color:223649,roughness:.4}));nt.add(ut);const Tt=new qt(.92,.92);Tt.rotateY(Math.PI);const Et=new T(Tt,J);Et.position.set(0,0,-.032),nt.add(Et);const It=new qt(.92,.92),Ut=new T(It,J);Ut.position.set(0,0,.032),nt.add(Ut),nt.rotation.y=t>0?.35:-.35,B.add(nt),e.add(B);const Ct=document.createElement("canvas");Ct.width=512,Ct.height=320;const St=Ct.getContext("2d");St.fillStyle="#f8fafc",St.fillRect(0,0,512,320),St.strokeStyle="#15803d",St.lineWidth=14,St.strokeRect(8,8,496,304),St.strokeStyle="#dc2626",St.lineWidth=4,St.strokeRect(22,22,468,276),St.fillStyle="#15803d",St.font="bold 30px sans-serif",St.textAlign="center",St.textBaseline="middle",St.fillText("বাংলাদেশ সড়ক পরিবহন (BRTC)",256,55),St.fillStyle="#dc2626",St.font="900 68px sans-serif",St.shadowColor="rgba(0,0,0,0.3)",St.shadowBlur=4,St.fillText("BUS STOP",256,140),St.fillStyle="#1e293b",St.font="bold 50px sans-serif",St.shadowBlur=0,St.fillText("বাস স্টপ",256,220),St.fillStyle="#64748b",St.font="bold 24px sans-serif",St.fillText("HIGHWAY PASSENGER SHELTER",256,275);const V=new he(Ct),Wt=new $({map:V,roughness:.35,emissive:16777215,emissiveIntensity:.08}),Rt=new T(new qt(1.2,.75),Wt),Lt=t>0?-2.12:2.12;Rt.position.set(Lt,1.85,0),Rt.rotation.y=t>0?-Math.PI/2:Math.PI/2,e.add(Rt);const vt=new At;vt.position.set(0,0,0);const se=new et(4.4,.12,.7),Gt=new T(se,this.woodMat);Gt.position.set(0,.65,.5),Gt.castShadow=!0,vt.add(Gt);const A=new et(4.4,.42,.1),S=new T(A,this.woodMat);S.position.set(0,1.12,.82),S.castShadow=!0,vt.add(S),[-1.9,0,1.9].forEach(F=>{const G=new et(.12,.35,.58),w=new T(G,this.concreteMat);w.position.set(F,.45,.5),vt.add(w);const L=new et(.08,.55,.08),z=new T(L,new $({color:3359061}));z.position.set(F,.95,.82),vt.add(z)}),e.add(vt);const H=new At;H.scale.set(1.35,1.35,1.35),H.position.set(0,.72,.48);const W=new $({color:16106390,roughness:.6}),j=new $({color:959977,roughness:.7}),Z=new $({color:1976635,roughness:.8}),yt=new $({color:1579035,roughness:.5}),lt=new $({color:14362487,roughness:.6}),xt=new $({color:16436245,roughness:.7}),Nt=new $({color:16777215,roughness:.8}),gt=new $({color:986638,roughness:.4}),st=new At;st.position.set(-.26,0,0);const Jt=new T(new et(.36,.46,.24),j);Jt.position.set(0,.25,0),Jt.rotation.y=.35,Jt.rotation.z=-.12,st.add(Jt);const Vt=new T(new ie(.12,14,14),W);Vt.position.set(.04,.58,.02),Vt.rotation.y=.45,Vt.rotation.z=-.12,st.add(Vt);const Bt=new T(new ie(.13,14,14),yt);Bt.scale.set(1.02,1.05,1.02),Bt.position.set(.04,.61,.01),st.add(Bt);const Pt=new T(new et(.34,.16,.44),Z);Pt.position.set(0,-.02,-.15),st.add(Pt),[-.1,.1].forEach(F=>{const G=new T(new pt(.05,.045,.38,8),Z);G.position.set(F,-.22,-.32),st.add(G)});const wt=new T(new pt(.045,.04,.34,8),j);wt.position.set(.18,.14,-.05),wt.rotation.z=-Math.PI/4,wt.rotation.x=-.18,st.add(wt),H.add(st);const Dt=new At;Dt.position.set(.26,0,0);const Yt=new T(new et(.32,.42,.22),lt);Yt.position.set(0,.23,0),Yt.rotation.y=-.32,Yt.rotation.z=.14,Dt.add(Yt);const re=new T(new et(.34,.36,.24),xt);re.position.set(0,.24,.02),Dt.add(re);const zt=new T(new ie(.115,14,14),W);zt.position.set(-.06,.54,.02),zt.rotation.y=-.38,zt.rotation.z=.22,Dt.add(zt);const ht=new T(new ie(.125,14,14),gt);ht.scale.set(1.04,1.06,1.08),ht.position.set(-.06,.57,0),Dt.add(ht);const U=new T(new pt(.04,.02,.36,8),gt);U.position.set(-.04,.42,.16),U.rotation.x=-.35,Dt.add(U);const ft=new T(new et(.3,.15,.42),Nt);ft.position.set(0,-.02,-.15),Dt.add(ft),[-.08,.08].forEach(F=>{const G=new T(new pt(.042,.038,.38,8),Nt);G.position.set(F,-.22,-.32),Dt.add(G)});const dt=new T(new pt(.04,.035,.32,8),lt);dt.position.set(-.16,.14,-.05),dt.rotation.z=Math.PI/4,dt.rotation.x=-.18,Dt.add(dt);const k=new At;k.position.set(.22,.22,-.2),k.rotation.x=-.25,k.rotation.z=-.15;const ct=new pt(.016,.018,.38,8),_t=new $({color:1409085,roughness:.8}),bt=new T(ct,_t);k.add(bt);const te=new qt(.12,.06),ee=new $({color:1483594,roughness:.6,side:be});[-1,1].forEach(F=>{const G=new T(te,ee);G.position.set(F*.06,-.04,0),G.rotation.z=F*.55,k.add(G)});const ne=new Le(.07,.09,5);ne.rotateX(Math.PI);const ge=new T(ne,ee);ge.position.set(0,.18,0),k.add(ge);const Ae=new $({color:14427686,roughness:.35,metalness:.1}),vn=new ie(.09,14,14);vn.scale(1.15,1.35,1.15);const qe=new T(vn,Ae);qe.position.set(0,.26,0),k.add(qe);const on=new pn(.08,.035,8,16);on.rotateX(Math.PI/2);const xn=new T(on,Ae);xn.position.set(0,.23,0),k.add(xn),Dt.add(k),H.add(Dt);const en=new T(new ie(.065,12,12),W);en.scale.set(1.6,.95,1.2),en.position.set(0,.1,-.06),H.add(en);const Ye=new At;Ye.position.set(0,1.38,.05);const nn=new fe({color:16723285}),Zn=new T(new ie(.075,10,10),nn);Zn.position.set(-.05,.04,0),Ye.add(Zn);const In=new T(new ie(.075,10,10),nn);In.position.set(.05,.04,0),Ye.add(In);const Dn=new Le(.11,.14,12);Dn.rotateZ(Math.PI);const b=new T(Dn,nn);return b.position.set(0,-.04,0),Ye.add(b),H.add(Ye),e.add(H),this.animatedAnimals.push({type:"couple",mesh:H,heart:Ye,seed:Math.random()*10}),e}createCoconutTree(){const t=new At;t.name="coconut_tree";const e=new Ss([new D(0,0,0),new D(.4,3.5,.2),new D(.9,7.5,.5),new D(1.1,10.5,.7)]),n=new ki(e,12,.24,8,!1),i=new T(n,this.palmTrunkMat);i.castShadow=!0,t.add(i);const r=new D(1.1,10.5,.7),a=10;for(let o=0;o<a;o++){const c=o*Math.PI*2/a,l=new qt(.8,3.4);l.translate(0,1.7,0);const h=new T(l,this.palmLeafMat);h.position.copy(r),h.rotation.y=c,h.rotation.x=.85,h.castShadow=!0,t.add(h)}for(let o=0;o<5;o++){const c=new ie(.2,8,8),l=new T(c,this.palmLeafMat);l.position.set(r.x+(Math.random()-.5)*.4,r.y-.25,r.z+(Math.random()-.5)*.4),t.add(l)}return t}createBananaTree(){const t=new At;t.name="banana_tree";const e=new pt(.18,.28,2.8,8),n=new T(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let r=0;r<i;r++){const a=r*Math.PI*2/i,o=new qt(.75,2.4);o.translate(0,1.2,0);const c=new T(o,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=a,c.rotation.x=.95,c.castShadow=!0,t.add(c)}return t}createBambooGrove(){const t=new At;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,r=new pt(.06,.08,i,6),a=new T(r,this.bambooTrunkMat);a.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),a.rotation.z=(Math.random()-.5)*.15,a.rotation.x=(Math.random()-.5)*.15,t.add(a);const o=new ie(.8+Math.random()*.5,6,6),c=new T(o,this.palmLeafMat);c.position.set(a.position.x,i-.3,a.position.z),t.add(c)}return t}createElectricPole(){const t=new At;t.name="electric_pole";const e=new pt(.14,.18,8.5,8),n=new T(e,this.concreteMat);n.position.y=4.25,n.castShadow=!0,t.add(n);const i=new et(2.2,.12,.12),r=new T(i,this.concreteMat);return r.position.y=7.8,t.add(r),[-.9,0,.9].forEach(a=>{const o=new pt(.04,.05,.2,6),c=new T(o,this.tinRoofMat);c.position.set(a,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new At;n.name="village_pond";const i=new qt(t,e);i.rotateX(-Math.PI/2);const r=new T(i,this.waterMat);r.position.y=.05,n.add(r),this.mudPlinthMat;const a=3;for(let o=0;o<a;o++){const c=new At;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const l=new ie(.24,8,8);l.scale(1,.7,1.4);const h=new T(l,this.duckMat);c.add(h);const d=new ie(.14,8,8),u=new T(d,this.duckMat);u.position.set(0,.22,-.22),c.add(u);const p=new Le(.06,.16,6);p.rotateX(-Math.PI/2);const _=new T(p,this.beakMat);_.position.set(0,.2,-.34),c.add(_),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new At;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const r=new pt(.04,.04,t,6);r.rotateX(Math.PI/2);const a=new T(r,this.bambooTrunkMat);a.position.y=i,e.add(a)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const r=-t*.5+i*1.4,a=new pt(.05,.06,1.25,6),o=new T(a,this.woodMat);o.position.set(0,.62,r),o.castShadow=!0,e.add(o)}return e}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}}),this.smokeEmitters.forEach(e=>{e.children.forEach((n,i)=>{n.position.y+=.015,n.position.x+=Math.sin(t*3+i)*.005,n.position.y>1.4&&(n.position.y=0)})})}}class Yp{constructor(t){this.scene=t,this.segments=[],this.segmentLength=kt.ROAD_SEGMENT_LENGTH,this.segmentCount=kt.ROAD_SEGMENT_COUNT,this.roadWidth=kt.ROAD_WIDTH,this.props=new qp,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let h=0;h<i.length;h+=4){const d=(Math.random()-.5)*12;i[h]=Math.min(255,Math.max(0,i[h]+d)),i[h+1]=Math.min(255,Math.max(0,i[h+1]+d)),i[h+2]=Math.min(255,Math.max(0,i[h+2]+d))}e.putImageData(n,0,0);const r=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",r.forEach(h=>{e.fillRect(h-50,0,36,t.height),e.fillRect(h+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const a=new he(t);a.wrapS=tn,a.wrapT=tn,a.repeat.set(1,1),a.anisotropy=8,this.roadMaterial=new $({map:a,roughness:.82,metalness:.12});const o=document.createElement("canvas");o.width=512,o.height=512;const c=o.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let h=0;h<512;h+=24)c.beginPath(),c.moveTo(0,h),c.lineTo(512,h),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const l=new he(o);l.wrapS=tn,l.wrapT=tn,l.repeat.set(4,8),this.paddyFieldMaterial=new $({map:l,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new $({color:7032635,roughness:.95}),this.culvertRailingMaterial=new $({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new At;n.position.z=t;const i=new qt(this.roadWidth,this.segmentLength);i.rotateX(-Math.PI/2);const r=new T(i,this.roadMaterial);r.receiveShadow=!0,n.add(r);const a=3.5;[-1,1].forEach(c=>{const l=new qt(a,this.segmentLength);l.rotateX(-Math.PI/2);const h=new T(l,this.dirtVergeMaterial);h.position.set((this.roadWidth*.5+a*.5)*c,-.01,0),h.receiveShadow=!0,n.add(h)});const o=60;return[-1,1].forEach(c=>{const l=new qt(o,this.segmentLength);l.rotateX(-Math.PI/2);const h=new T(l,this.paddyFieldMaterial),d=(this.roadWidth*.5+a+o*.5)*c;h.position.set(d,-.05,0),h.receiveShadow=!0,n.add(h)}),this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=n.createElectricPole();i.position.set(this.roadWidth*.5+2.4,0,0),t.add(i);const r=[new D(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new D(this.roadWidth*.5+2.4,7.1,0),new D(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],a=new Ss(r),o=new ki(a,8,.02,4,!1),c=new fe({color:2040865}),l=new T(o,c);t.add(l);const h=e%2===0?-1:1,d=e%3===0?"white":e%3===1?"brown":"black",u=n.createCow(d),p=(this.roadWidth*.5+2.8+Math.random()*1.5)*h,_=6+Math.random()*14;if(u.position.set(p,0,_),u.rotation.y=h>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(u),e%2===1){const P=n.createCow("brown");P.scale.set(.75,.75,.75),P.position.set(p+(h>0?3:-3),0,_+3.5),P.rotation.y=u.rotation.y+.5,t.add(P)}if(e%2===0){const O=n.createVillageHouse(e%4===0),x=(this.roadWidth*.5+11.5)*-1;O.position.set(x,0,-10),O.rotation.y=Math.PI/2,t.add(O);const E=n.createHaystack();E.position.set(x-5.5,0,4),t.add(E);const C=n.createBambooFence(24);C.position.set((this.roadWidth*.5+5.5)*-1,0,-5),t.add(C)}if(e%3===1){const O=n.createTeaStall();O.position.set((this.roadWidth*.5+5.8)*1,0,12),O.rotation.y=-Math.PI/2,t.add(O);const x=n.createCoconutTree();x.position.set((this.roadWidth*.5+9)*1,0,16),t.add(x)}if(e%3===2){const O=n.createPond(14,22);O.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(O);for(let x=0;x<3;x++){const E=n.createBananaTree();E.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+x*6),t.add(E)}}e%4===3&&[-this.roadWidth*.5-.4,this.roadWidth*.5+.4].forEach(P=>{const O=new et(.35,.75,14),x=new T(O,this.culvertRailingMaterial);x.position.set(P,.38,0),x.castShadow=!0,t.add(x),[-7,7].forEach(E=>{const C=new et(.45,.9,.45),X=new T(C,this.culvertRailingMaterial);X.position.set(P,.45,E),t.add(X)})});const v=e%2===0?1:-1,m=n.createCoconutTree();m.position.set((this.roadWidth*.5+7.5+Math.random()*5)*v,0,-22),t.add(m);const f=n.createBambooGrove();f.position.set((this.roadWidth*.5+9+Math.random()*6)*-v,0,18),t.add(f);const y=n.createBananaTree();y.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*v,0,4),t.add(y);const g=e%2===0?1:-1,M=n.createJatriChawni(g),I=(this.roadWidth*.5+3.4)*g,R=e===0?-14:-18;M.position.set(I,0,R),M.rotation.y=g>0?Math.PI*.5+.32:-Math.PI*.5-.32,t.add(M)}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const r=this.segments[i];if(r.group.position.z>n){let a=0;for(let o=0;o<this.segments.length;o++)this.segments[o].group.position.z<a&&(a=this.segments[o].group.position.z);r.group.position.z=a-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class Kp{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new Rr(11722715,.0038),this.scene.background=new Qt(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(l,h,d)=>{e.beginPath(),e.arc(l,h,d,0,Math.PI*2),e.arc(l+d*.7,h-d*.2,d*.8,0,Math.PI*2),e.arc(l-d*.7,h-d*.1,d*.7,0,Math.PI*2),e.arc(l+d*1.3,h+d*.1,d*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const r=e.createRadialGradient(256,380,15,256,380,120);r.addColorStop(0,"rgba(255, 255, 240, 1.0)"),r.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),r.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),r.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=r,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const a=new he(t),o=new ie(480,32,16),c=new fe({map:a,side:Ne});this.skyDome=new T(o,c),this.scene.add(this.skyDome)}initLighting(){this.hemiLight=new Lp(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new Fp(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=170,this.dirLight.shadow.camera.left=-28,this.dirLight.shadow.camera.right=28,this.dirLight.shadow.camera.top=28,this.dirLight.shadow.camera.bottom=-28,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new $({color:1793568,roughness:.9,flatShading:!0});[-1,1].forEach(e=>{const n=new At,i=28;for(let r=0;r<i;r++){const a=12+Math.random()*18,o=6+Math.random()*8,c=new Le(o,a,6),l=new T(c,t),h=(55+Math.random()*30)*e,d=-r*18;l.position.set(h,a*.5-2,d),l.rotation.y=Math.random()*Math.PI,n.add(l)}this.scene.add(n),this.treeLines.push(n)})}initFlyingBirds(){this.birdsGroup=new At;const t=new fe({color:16777215,side:be}),e=8;for(let n=0;n<e;n++){const i=new At,r=new qt(.8,.35);r.translate(-.4,0,0);const a=new T(r,t);i.add(a);const o=new qt(.8,.35);o.translate(.4,0,0);const c=new T(o,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:a,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class Zp{constructor(t="sedan"){this.type=t,this.group=new At,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new _n,this.collisionSize=new D(1.8,1.4,4.5),this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new $({color:t,metalness:.5,roughness:.35}),darkTrim:new $({color:1974308,roughness:.7}),wood:new $({color:8736014,roughness:.9}),glass:new zi({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new $({color:14671839,metalness:.9,roughness:.2}),headlight:new fe({color:16777215}),taillight:new $({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new $({color:1973792,metalness:.1,roughness:.85}),rim:new $({color:12131356,metalness:.5,roughness:.4}),cowFawn:new $({color:9262372,roughness:.7}),cowWhite:new $({color:16119280,roughness:.6}),cowBlack:new $({color:2236962,roughness:.7}),horn:new $({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new et(2,.4,6.2),r=new T(i,n.darkTrim);r.position.set(0,.6,0),this.group.add(r);const a=new et(2.3,.4,.25),o=new T(a,n.darkTrim);o.position.set(0,.6,-3.15),this.group.add(o);const c=new et(1.8,.9,1.5),l=new T(c,n.body);l.position.set(0,1.25,-2.2),this.group.add(l);const h=new et(2.1,1.5,1.5),d=new T(h,n.body);d.position.set(0,1.8,-.7),this.group.add(d);const u=new qt(1.85,.7),p=new T(u,n.glass);p.position.set(0,1.95,-1.46),this.group.add(p),[-.7,.7].forEach(M=>{const I=new T(new et(.24,.2,.05),n.headlight);I.position.set(M,1.15,-3.18),this.group.add(I)});const _=new et(2.25,.12,3.6),v=new T(_,n.wood);v.position.set(0,1.05,1.5),this.group.add(v),[-1.12,1.12].forEach(M=>{const I=new et(.08,1.3,3.6),R=new T(I,n.wood);R.position.set(M,1.7,1.5),this.group.add(R)});const m=new et(2.25,1.2,.08),f=new T(m,n.wood);f.position.set(0,1.65,3.3),this.group.add(f),[-.85,.85].forEach(M=>{const I=new T(new et(.28,.16,.05),n.taillight);I.position.set(M,.75,3.32),this.group.add(I)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(M=>{const I=new At;I.position.set(M.x,2.2,M.z);const R=new et(.42,.45,.6),P=new T(R,M.mat);I.add(P);const O=new et(.3,.25,.25),x=new T(O,n.darkTrim);x.position.set(0,-.08,.38),I.add(x),[-.18,.18].forEach(E=>{const C=new Le(.05,.28,6),X=new T(C,n.horn);X.position.set(E,.26,.05),X.rotation.z=E>0?-.35:.35,I.add(X)}),this.group.add(I)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(M=>{const I=this.createSimpleWheel(n,.5,.3);I.position.set(M.x,.5,M.z),this.group.add(I),this.wheels.push(I)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new et(2,.4,6.2),n=new T(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new et(2.1,1.6,1.8),r=new T(i,t.body);r.position.set(0,1.7,-1.8),this.group.add(r);const a=new et(2.3,2.1,3.8),o=new T(a,t.wood);o.position.set(0,1.85,1.2),this.group.add(o),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new et(2.35,2.5,10.2),n=new T(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new qt(2.15,1.2),r=new T(i,t.glass);r.position.set(0,1.95,-5.12),this.group.add(r),[-1.19,1.19].forEach(o=>{const c=new qt(9,.9),l=new T(c,t.glass);l.position.set(o,1.9,.2),l.rotation.y=o>0?Math.PI/2:-Math.PI/2,this.group.add(l)}),[-.85,.85].forEach(o=>{const c=new T(new et(.3,.16,.05),t.headlight);c.position.set(o,.75,-5.12),this.group.add(c);const l=new T(new et(.24,.35,.05),t.taillight);l.position.set(o,1.3,5.12),this.group.add(l)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(o=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(o.x,.48,o.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new et(1.88,.4,4.65),r=new T(i,n.darkTrim);r.position.set(0,.42,0),this.group.add(r);const a=new et(1.84,.6,4.6),o=new T(a,n.body);o.position.set(0,.78,0),this.group.add(o);const c=new et(1.58,.65,2.9),l=new T(c,n.body);l.position.set(0,1.3,.2),this.group.add(l),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new et(1.76,.32,4.5),r=new T(i,n.darkTrim);r.position.set(0,.32,0),this.group.add(r);const a=new et(1.72,.44,4.4),o=new T(a,n.body);o.position.set(0,.58,0),this.group.add(o);const c=new et(1.44,.46,2.2),l=new T(c,n.body);l.position.set(0,.92,-.05),this.group.add(l),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,r,a){[-e,e].forEach(o=>{const c=new et(.3,.1,.05),l=new T(c,t.headlight);l.position.set(o,i,n),this.group.add(l)}),[-e,e].forEach(o=>{const c=new et(.32,.12,.05),l=new T(c,t.taillight);l.position.set(o,a,r),this.group.add(l)})}addStandardWheels(t,e,n,i,r){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(o=>{const c=this.createSimpleWheel(t,r,.24);c.position.set(o.x,o.y,o.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new At,r=new pt(e,e,n,18);r.rotateZ(Math.PI/2);const a=new T(r,t.tire);i.add(a);const o=new pt(e*.7,e*.7,n+.02,14);o.rotateZ(Math.PI/2);const c=new T(o,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=kt.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<kt.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=kt.LANES[n];if(!t.some(a=>{if(a===this||!a.active)return!1;const o=Math.abs(a.group.position.z-this.group.position.z),c=Math.abs(a.group.position.x-i);return o<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const r=this.targetX-this.group.position.x;Math.abs(r)>.04?this.group.position.x+=Math.sign(r)*Math.min(Math.abs(r),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(r=>{r.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(t,this.collisionSize)}}class Jp{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"];for(let n=0;n<25;n++){const i=t[n%t.length],r=new Zp(i);r.despawn(),this.pool.push(r),this.scene.add(r.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,r){const a=t.group.position.z,o=t.group.position.x,c=Math.min(1,n/4500),l=Ai.lerp(1.3,.8,c),h=Ai.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=Ai.lerp(l,h,Math.random()),this.trySpawnTraffic(a,c));for(let d=this.activeVehicles.length-1;d>=0;d--){const u=this.activeVehicles[d];if(u.update(e,i),u.group.position.z>a+kt.TRAFFIC.DESPAWN_DISTANCE){u.despawn(),this.activeVehicles.splice(d,1);continue}if(!u.hasBeenOvertaken){const p=Math.abs(u.group.position.z-a),_=Math.abs(u.group.position.x-o);p<kt.SCORING.NEAR_MISS_DIST_Z&&_<kt.SCORING.NEAR_MISS_DIST_X&&_>.5&&e>u.speed+12?(u.hasBeenOvertaken=!0,r&&r(u)):a<u.group.position.z-4&&(u.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-kt.TRAFFIC.SPAWN_DISTANCE,i=34,r=new Set;this.activeVehicles.forEach(_=>{Math.abs(_.group.position.z-n)<i&&r.add(_.lane)});const a=[0,1,2].filter(_=>!r.has(_));if(a.length===0||a.length===1&&r.size>=2)return;const o=a[Math.floor(Math.random()*a.length)];let c="cow_truck";const l=Math.random();o===0?c=l>.45?"cow_truck":"truck":o===1?c=l>.5?"bus":l>.25?"cow_truck":"suv":c=l>.45?"bus":"sedan";const h=this.getInactiveVehicle(c);if(!h)return;const d=kt.TRAFFIC.SPEEDS[c]||[65,85],u=e*35,p=Ai.lerp(d[0],d[1],Math.random())+u;if(h.spawn(o,n,p),this.activeVehicles.push(h),e>.5&&Math.random()<.35&&a.length>=2){const _=a.filter(v=>v!==o);if(_.length>0){const v=_[Math.floor(Math.random()*_.length)],m=Math.random()>.5?"cow_truck":"bus",f=this.getInactiveVehicle(m);if(f){const y=n-(28+Math.random()*20),g=kt.TRAFFIC.SPEEDS[m]||[65,80],M=Ai.lerp(g[0],g[1],Math.random())+u;f.spawn(v,y,M),this.activeVehicles.push(f)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const r=this.activeVehicles[i],a=e-r.group.position.z,o=Math.abs(r.group.position.x-n);if(a>4&&a<65&&o<2.4&&!r.isYielding){r.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class jp{constructor(t){this.scene=t,this.particles=[],this.poolSize=180,this.smokeMat=new fe({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new fe({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new $({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new et(.14,.14,.14),n=new T(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new D,rotVel:new D,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){for(let e=0;e<35;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="spark",n.mesh.material=this.sparkMat,n.mesh.visible=!0,n.mesh.scale.set(.12,.12,.12),n.mesh.position.copy(t);const i=Math.random()*Math.PI*2,r=6+Math.random()*14;n.vel.set(Math.cos(i)*r,3+Math.random()*10,Math.sin(i)*r),n.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),n.life=0,n.maxLife=.7+Math.random()*.5,n.scaleSpeed=-.5}for(let e=0;e<20;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="debris",n.mesh.material=this.debrisMat,n.mesh.visible=!0,n.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),n.mesh.position.copy(t),n.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),n.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),n.life=0,n.maxLife=1.2,n.scaleSpeed=0}for(let e=0;e<25;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="smoke",n.mesh.material=this.smokeMat,n.mesh.visible=!0,n.mesh.scale.set(.8,.8,.8),n.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),n.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),n.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),n.life=0,n.maxLife=1.4,n.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class $p{constructor(t){this.scene=t,this.linesCount=60,this.group=new At;const e=new qa({color:10083839,transparent:!0,opacity:0});this.lineMat=e,this.lines=[];for(let n=0;n<this.linesCount;n++){const i=[new D(0,0,0),new D(0,0,6+Math.random()*8)],r=new Oe().setFromPoints(i),a=new mp(r,e);this.resetLinePos(a),this.group.add(a),this.lines.push(a)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const r=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=r*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const a=t.group.position.z,o=t.group.position.x;this.group.position.set(o,0,a);const c=e/60*i*50;this.lines.forEach(l=>{l.position.z+=c,l.position.z>5&&this.resetLinePos(l)})}}class Qp{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),r=document.getElementById("btn-gameover-restart");[i,r].forEach(u=>{u&&u.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const a=document.getElementById("btn-pause-menu"),o=document.getElementById("btn-gameover-menu");[a,o].forEach(u=>{u&&u.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(u=>{u.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),l=document.getElementById("btn-how-to-play"),h=document.getElementById("btn-modal-close");l&&c&&l.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",u=>{u.target===c&&c.classList.remove("active")});const d=document.querySelectorAll(".veh-btn");d.forEach(u=>{u.addEventListener("click",()=>{d.forEach(p=>p.classList.remove("active")),u.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(u.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(u=>{u.addEventListener("click",p=>{p.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),r=document.getElementById("btn-touch-nitro"),a=document.getElementById("btn-touch-horn");if(document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(o=>{o.addEventListener("contextmenu",c=>c.preventDefault())}),t&&t.addEventListener("pointerdown",o=>{o.preventDefault(),document.body.classList.add("touch-active"),this.onSteerLeft&&this.onSteerLeft()}),e&&e.addEventListener("pointerdown",o=>{o.preventDefault(),document.body.classList.add("touch-active"),this.onSteerRight&&this.onSteerRight()}),n){const o=c=>{document.body.classList.add("touch-active"),this.onBrake&&this.onBrake(c),c&&this.soundManager.playAirBrake()};n.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),n.addEventListener("pointerup",()=>o(!1)),n.addEventListener("pointerleave",()=>o(!1)),n.addEventListener("pointercancel",()=>o(!1))}if(i){const o=c=>{document.body.classList.add("touch-active"),this.onAccelerate&&this.onAccelerate(c)};i.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),i.addEventListener("pointerup",()=>o(!1)),i.addEventListener("pointerleave",()=>o(!1)),i.addEventListener("pointercancel",()=>o(!1))}if(r){const o=c=>{document.body.classList.add("touch-active"),this.onNitro&&this.onNitro(c)};r.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),r.addEventListener("pointerup",()=>o(!1)),r.addEventListener("pointerleave",()=>o(!1)),r.addEventListener("pointercancel",()=>o(!1))}a&&a.addEventListener("pointerdown",o=>{o.preventDefault(),this.onHorn?this.onHorn():this.soundManager.playTruckHorn()}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===ae.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case ae.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case ae.PLAYING:this.hudLayer.classList.remove("hidden");break;case ae.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case ae.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){if(this.scoreVal&&(this.scoreVal.innerText=t.score.toLocaleString()),this.distVal&&(this.distVal.innerText=`${(t.distanceMeters/1e3).toFixed(2)} km`),this.speedVal&&(this.speedVal.innerText=Math.round(t.speedKmh)),this.nitroBar){const e=t.nitro/100*100;this.nitroBar.style.width=`${e}%`,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting")}}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class t0{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new Gp,this.inputManager=new kp,this.soundManager=new Vp,this.uiManager=new Qp(this.soundManager),this.scene=new pp,this.camera=new Fe(kt.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.renderer=new Xa({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=da,this.renderer.toneMapping=fa,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new Kp(this.scene),this.roadManager=new Yp(this.scene),this.vehicles={truck:new Hp,rickshaw:new Wp,cng:new Xp},Object.values(this.vehicles).forEach(t=>{this.scene.add(t.group),t.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new Jp(this.scene),this.particleSystem=new jp(this.scene),this.speedLines=new $p(this.scene),this.cameraController=new zp(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new Bp,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(ae.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=e=>this.setVehicle(e);const t=()=>{this.gameState.state===ae.PLAYING?(this.gameState.state=ae.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(ae.PAUSED,this.gameState)):this.gameState.state===ae.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=t,this.inputManager.onPauseToggle=t,this.inputManager.onRestart=()=>{(this.gameState.state===ae.GAMEOVER||this.gameState.state===ae.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=()=>this.inputManager.triggerSteerLeft(),this.uiManager.onSteerRight=()=>this.inputManager.triggerSteerRight(),this.uiManager.onAccelerate=e=>this.inputManager.setAccelerate(e),this.uiManager.onBrake=e=>this.inputManager.setBrake(e),this.uiManager.onNitro=e=>this.inputManager.setNitro(e)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(ae.PLAYING,this.gameState)}resumeGame(){this.gameState.state===ae.PAUSED&&(this.gameState.state=ae.PLAYING,this.uiManager.setScreen(ae.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=ae.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(ae.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(ae.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===ae.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===ae.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const r=this.inputManager.keys.brake;r&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=r,this.gameState.update(e,this.inputManager);const a=this.gameState.speedKmh*1e3/3600;if(this.playerVehicle.group.position.z-=a*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,r,this.gameState.isBoosting,e),r&&this.gameState.speedKmh>50){const c=this.playerVehicle.group.position.clone();c.x-=.85,c.z+=1.6;const l=this.playerVehicle.group.position.clone();l.x+=.85,l.z+=1.6,this.particleSystem.emitTireSmoke(c),this.particleSystem.emitTireSmoke(l)}this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const l=this.gameState.addNearMiss();this.soundManager.playNearMiss(l.combo),this.uiManager.showNearMiss(l.bonus,l.combo)});const o=this.trafficManager.checkCollision(this.playerVehicle);o&&this.onCrash(o),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,r,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===ae.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new t0});
//# sourceMappingURL=index-BkErASdC.js.map
