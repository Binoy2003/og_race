(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fr="160",Ja=0,Lr=1,ja=2,oa=1,aa=2,cn=3,wn=0,Ue=1,Ee=2,xn=0,ri=1,Ir=2,Dr=3,Ur=4,$a=5,In=100,Qa=101,tc=102,Nr=103,Or=104,ec=200,nc=201,ic=202,sc=203,rr=204,or=205,rc=206,oc=207,ac=208,cc=209,lc=210,hc=211,uc=212,dc=213,fc=214,pc=0,mc=1,gc=2,os=3,_c=4,vc=5,Mc=6,xc=7,ca=0,Sc=1,yc=2,Sn=0,wc=1,Ec=2,Tc=3,la=4,bc=5,Ac=6,ha=300,ai=301,ci=302,ar=303,cr=304,ps=306,je=1e3,Ze=1001,lr=1002,De=1003,Fr=1004,Es=1005,He=1006,Rc=1007,Ri=1008,yn=1009,Cc=1010,Pc=1011,pr=1012,ua=1013,vn=1014,Mn=1015,Ci=1016,da=1017,fa=1018,Nn=1020,Lc=1021,Je=1023,Ic=1024,Dc=1025,On=1026,li=1027,Uc=1028,pa=1029,Nc=1030,ma=1031,ga=1033,Ts=33776,bs=33777,As=33778,Rs=33779,Br=35840,Gr=35841,zr=35842,kr=35843,_a=36196,Vr=37492,Hr=37496,Wr=37808,Xr=37809,qr=37810,Yr=37811,Kr=37812,Zr=37813,Jr=37814,jr=37815,$r=37816,Qr=37817,to=37818,eo=37819,no=37820,io=37821,Cs=36492,so=36494,ro=36495,Oc=36283,oo=36284,ao=36285,co=36286,va=3e3,Fn=3001,Fc=3200,Bc=3201,Ma=0,Gc=1,We="",we="srgb",hn="srgb-linear",mr="display-p3",ms="display-p3-linear",as="linear",ae="srgb",cs="rec709",ls="p3",zn=7680,lo=519,zc=512,kc=513,Vc=514,xa=515,Hc=516,Wc=517,Xc=518,qc=519,ho=35044,uo="300 es",hr=1035,ln=2e3,hs=2001;class di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fo=1234567;const wi=Math.PI/180,hi=180/Math.PI;function fi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[s&255]+be[s>>8&255]+be[s>>16&255]+be[s>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function ye(s,t,e){return Math.max(t,Math.min(e,s))}function gr(s,t){return(s%t+t)%t}function Yc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Kc(s,t,e){return s!==t?(e-s)/(t-s):0}function Ei(s,t,e){return(1-e)*s+e*t}function Zc(s,t,e,n){return Ei(s,t,1-Math.exp(-e*n))}function Jc(s,t=1){return t-Math.abs(gr(s,t*2)-t)}function jc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $c(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Qc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function tl(s,t){return s+Math.random()*(t-s)}function el(s){return s*(.5-Math.random())}function nl(s){s!==void 0&&(fo=s);let t=fo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function il(s){return s*wi}function sl(s){return s*hi}function ur(s){return(s&s-1)===0&&s!==0}function rl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function us(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ol(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),f=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*d,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*m,o*l);break;case"YXY":s.set(c*m,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*m,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ni(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Le(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const _i={DEG2RAD:wi,RAD2DEG:hi,generateUUID:fi,clamp:ye,euclideanModulo:gr,mapLinear:Yc,inverseLerp:Kc,lerp:Ei,damp:Zc,pingpong:Jc,smoothstep:jc,smootherstep:$c,randInt:Qc,randFloat:tl,randFloatSpread:el,seededRandom:nl,degToRad:il,radToDeg:sl,isPowerOfTwo:ur,ceilPowerOfTwo:rl,floorPowerOfTwo:us,setQuaternionFromProperEuler:ol,normalize:Le,denormalize:ni};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,i,r,a,o,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],_=i[0],p=i[3],u=i[6],y=i[1],v=i[4],S=i[7],P=i[2],b=i[5],A=i[8];return r[0]=a*_+o*y+c*P,r[3]=a*p+o*v+c*b,r[6]=a*u+o*S+c*A,r[1]=l*_+h*y+d*P,r[4]=l*p+h*v+d*b,r[7]=l*u+h*S+d*A,r[2]=f*_+m*y+g*P,r[5]=f*p+m*v+g*b,r[8]=f*u+m*S+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,f=o*c-h*r,m=l*r-a*c,g=e*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(i*l-h*n)*_,t[2]=(o*n-i*a)*_,t[3]=f*_,t[4]=(h*e-i*c)*_,t[5]=(i*r-o*e)*_,t[6]=m*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ps.makeScale(t,e)),this}rotate(t){return this.premultiply(Ps.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ps.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new Kt;function Sa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function al(){const s=ds("canvas");return s.style.display="block",s}const po={};function Ti(s){s in po||(po[s]=!0,console.warn(s))}const mo=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),go=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ni={[hn]:{transfer:as,primaries:cs,toReference:s=>s,fromReference:s=>s},[we]:{transfer:ae,primaries:cs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ms]:{transfer:as,primaries:ls,toReference:s=>s.applyMatrix3(go),fromReference:s=>s.applyMatrix3(mo)},[mr]:{transfer:ae,primaries:ls,toReference:s=>s.convertSRGBToLinear().applyMatrix3(go),fromReference:s=>s.applyMatrix3(mo).convertLinearToSRGB()}},cl=new Set([hn,ms]),ee={enabled:!0,_workingColorSpace:hn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ni[t].toReference,i=Ni[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ni[s].primaries},getTransfer:function(s){return s===We?as:Ni[s].transfer}};function oi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ls(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let kn;class ya{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{kn===void 0&&(kn=ds("canvas")),kn.width=t.width,kn.height=t.height;const n=kn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=kn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=oi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ll=0;class wa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ll++}),this.uuid=fi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Is(i[a].image)):r.push(Is(i[a]))}else r=Is(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Is(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ya.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hl=0;class Fe extends di{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=Ze,i=Ze,r=He,a=Ri,o=Je,c=yn,l=Fe.DEFAULT_ANISOTROPY,h=We){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=fi(),this.name="",this.source=new wa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Fn?we:We),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ha)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case je:t.x=t.x-Math.floor(t.x);break;case Ze:t.x=t.x<0?0:1;break;case lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case je:t.y=t.y-Math.floor(t.y);break;case Ze:t.y=t.y<0?0:1;break;case lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===we?Fn:va}set encoding(t){Ti("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Fn?we:We}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=ha;Fe.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],m=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(l+1)/2,S=(m+1)/2,P=(u+1)/2,b=(h+f)/4,A=(d+_)/4,D=(g+p)/4;return v>S&&v>P?v<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(v),i=b/n,r=A/n):S>P?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=b/i,r=D/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=A/r,i=D/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(d-_)/y,this.z=(f-h)/y,this.w=Math.acos((l+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ul extends di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ti("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Fn?we:We),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Fe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new wa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ea extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=Ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl extends Fe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=De,this.minFilter=De,this.wrapR=Ze,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ii{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const f=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(d!==_||c!==f||l!==m||h!==g){let p=1-o;const u=c*f+l*m+h*g+d*_,y=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const P=Math.sqrt(v),b=Math.atan2(P,u*y);p=Math.sin(p*b)/P,o=Math.sin(o*b)/P}const S=o*y;if(c=c*p+f*S,l=l*p+m*S,h=h*p+g*S,d=d*p+_*S,p===1-o){const P=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=P,l*=P,h*=P,d*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],f=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*d+c*m-l*f,t[e+1]=c*g+h*f+l*d-o*m,t[e+2]=l*g+h*m+o*f-c*d,t[e+3]=h*g-o*d-c*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),f=c(n/2),m=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d+f*m*g;break;case"YZX":this._x=f*h*d+l*m*g,this._y=l*m*d+f*h*g,this._z=l*h*g-f*m*d,this._w=l*h*d-f*m*g;break;case"XZY":this._x=f*h*d-l*m*g,this._y=l*m*d-f*h*g,this._z=l*h*g+f*m*d,this._w=l*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-i)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(h-c)/m,this._x=.25*m,this._y=(i+a)/m,this._z=(r+l)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-l)/m,this._x=(i+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(t=0,e=0,n=0){C.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(_o.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(_o.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ds.copy(this).projectOnVector(t),this.sub(Ds)}reflect(t){return this.sub(Ds.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ds=new C,_o=new Ii;class un{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Xe):Xe.fromBufferAttribute(r,a),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oi.copy(n.boundingBox)),Oi.applyMatrix4(t.matrixWorld),this.union(Oi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vi),Fi.subVectors(this.max,vi),Vn.subVectors(t.a,vi),Hn.subVectors(t.b,vi),Wn.subVectors(t.c,vi),fn.subVectors(Hn,Vn),pn.subVectors(Wn,Hn),bn.subVectors(Vn,Wn);let e=[0,-fn.z,fn.y,0,-pn.z,pn.y,0,-bn.z,bn.y,fn.z,0,-fn.x,pn.z,0,-pn.x,bn.z,0,-bn.x,-fn.y,fn.x,0,-pn.y,pn.x,0,-bn.y,bn.x,0];return!Us(e,Vn,Hn,Wn,Fi)||(e=[1,0,0,0,1,0,0,0,1],!Us(e,Vn,Hn,Wn,Fi))?!1:(Bi.crossVectors(fn,pn),e=[Bi.x,Bi.y,Bi.z],Us(e,Vn,Hn,Wn,Fi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new C,new C,new C,new C,new C,new C,new C,new C],Xe=new C,Oi=new un,Vn=new C,Hn=new C,Wn=new C,fn=new C,pn=new C,bn=new C,vi=new C,Fi=new C,Bi=new C,An=new C;function Us(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){An.fromArray(s,r);const o=i.x*Math.abs(An.x)+i.y*Math.abs(An.y)+i.z*Math.abs(An.z),c=t.dot(An),l=e.dot(An),h=n.dot(An);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const fl=new un,Mi=new C,Ns=new C;class gs{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Mi.subVectors(t,this.center);const e=Mi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Mi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ns.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Mi.copy(t.center).add(Ns)),this.expandByPoint(Mi.copy(t.center).sub(Ns))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new C,Os=new C,Gi=new C,mn=new C,Fs=new C,zi=new C,Bs=new C;class Ta{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Os.copy(t).add(e).multiplyScalar(.5),Gi.copy(e).sub(t).normalize(),mn.copy(this.origin).sub(Os);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Gi),o=mn.dot(this.direction),c=-mn.dot(Gi),l=mn.lengthSq(),h=Math.abs(1-a*a);let d,f,m,g;if(h>0)if(d=a*c-o,f=a*o-c,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,m=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),m=f*(f+2*c)+l):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+f*(f+2*c)+l);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Os).addScaledVector(Gi,f),m}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),i=sn.dot(sn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,i=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,i=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,i,r){Fs.subVectors(e,t),zi.subVectors(n,t),Bs.crossVectors(Fs,zi);let a=this.direction.dot(Bs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mn.subVectors(this.origin,t);const c=o*this.direction.dot(zi.crossVectors(mn,zi));if(c<0)return null;const l=o*this.direction.dot(Fs.cross(mn));if(l<0||c+l>a)return null;const h=-o*mn.dot(Bs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,n,i,r,a,o,c,l,h,d,f,m,g,_,p){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,f,m,g,_,p)}set(t,e,n,i,r,a,o,c,l,h,d,f,m,g,_,p){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=m,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Xn.setFromMatrixColumn(t,0).length(),r=1/Xn.setFromMatrixColumn(t,1).length(),a=1/Xn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=a*h,m=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=m+g*l,e[5]=f-_*l,e[9]=-o*c,e[2]=_-f*l,e[6]=g+m*l,e[10]=a*c}else if(t.order==="YXZ"){const f=c*h,m=c*d,g=l*h,_=l*d;e[0]=f+_*o,e[4]=g*o-m,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+f*o,e[10]=a*c}else if(t.order==="ZXY"){const f=c*h,m=c*d,g=l*h,_=l*d;e[0]=f-_*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const f=a*h,m=a*d,g=o*h,_=o*d;e[0]=c*h,e[4]=g*l-m,e[8]=f*l+_,e[1]=c*d,e[5]=_*l+f,e[9]=m*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const f=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=_-f*d,e[8]=g*d+m,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=m*d+g,e[10]=f-_*d}else if(t.order==="XZY"){const f=a*c,m=a*l,g=o*c,_=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+_,e[5]=a*h,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*h,e[10]=_*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pl,t,ml)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),gn.crossVectors(n,Ge),gn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),gn.crossVectors(n,Ge)),gn.normalize(),ki.crossVectors(Ge,gn),i[0]=gn.x,i[4]=ki.x,i[8]=Ge.x,i[1]=gn.y,i[5]=ki.y,i[9]=Ge.y,i[2]=gn.z,i[6]=ki.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],u=n[14],y=n[3],v=n[7],S=n[11],P=n[15],b=i[0],A=i[4],D=i[8],M=i[12],w=i[1],B=i[5],F=i[9],rt=i[13],L=i[2],N=i[6],Y=i[10],$=i[14],J=i[3],Z=i[7],tt=i[11],nt=i[15];return r[0]=a*b+o*w+c*L+l*J,r[4]=a*A+o*B+c*N+l*Z,r[8]=a*D+o*F+c*Y+l*tt,r[12]=a*M+o*rt+c*$+l*nt,r[1]=h*b+d*w+f*L+m*J,r[5]=h*A+d*B+f*N+m*Z,r[9]=h*D+d*F+f*Y+m*tt,r[13]=h*M+d*rt+f*$+m*nt,r[2]=g*b+_*w+p*L+u*J,r[6]=g*A+_*B+p*N+u*Z,r[10]=g*D+_*F+p*Y+u*tt,r[14]=g*M+_*rt+p*$+u*nt,r[3]=y*b+v*w+S*L+P*J,r[7]=y*A+v*B+S*N+P*Z,r[11]=y*D+v*F+S*Y+P*tt,r[15]=y*M+v*rt+S*$+P*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],m=t[14],g=t[3],_=t[7],p=t[11],u=t[15];return g*(+r*c*d-i*l*d-r*o*f+n*l*f+i*o*m-n*c*m)+_*(+e*c*m-e*l*f+r*a*f-i*a*m+i*l*h-r*c*h)+p*(+e*l*d-e*o*m-r*a*d+n*a*m+r*o*h-n*l*h)+u*(-i*o*h-e*c*d+e*o*f+i*a*d-n*a*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],m=t[11],g=t[12],_=t[13],p=t[14],u=t[15],y=d*p*l-_*f*l+_*c*m-o*p*m-d*c*u+o*f*u,v=g*f*l-h*p*l-g*c*m+a*p*m+h*c*u-a*f*u,S=h*_*l-g*d*l+g*o*m-a*_*m-h*o*u+a*d*u,P=g*d*c-h*_*c-g*o*f+a*_*f+h*o*p-a*d*p,b=e*y+n*v+i*S+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/b;return t[0]=y*A,t[1]=(_*f*r-d*p*r-_*i*m+n*p*m+d*i*u-n*f*u)*A,t[2]=(o*p*r-_*c*r+_*i*l-n*p*l-o*i*u+n*c*u)*A,t[3]=(d*c*r-o*f*r-d*i*l+n*f*l+o*i*m-n*c*m)*A,t[4]=v*A,t[5]=(h*p*r-g*f*r+g*i*m-e*p*m-h*i*u+e*f*u)*A,t[6]=(g*c*r-a*p*r-g*i*l+e*p*l+a*i*u-e*c*u)*A,t[7]=(a*f*r-h*c*r+h*i*l-e*f*l-a*i*m+e*c*m)*A,t[8]=S*A,t[9]=(g*d*r-h*_*r-g*n*m+e*_*m+h*n*u-e*d*u)*A,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*u+e*o*u)*A,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*m-e*o*m)*A,t[12]=P*A,t[13]=(h*_*i-g*d*i+g*n*f-e*_*f-h*n*p+e*d*p)*A,t[14]=(g*o*i-a*_*i-g*n*c+e*_*c+a*n*p-e*o*p)*A,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,f=r*l,m=r*h,g=r*d,_=a*h,p=a*d,u=o*d,y=c*l,v=c*h,S=c*d,P=n.x,b=n.y,A=n.z;return i[0]=(1-(_+u))*P,i[1]=(m+S)*P,i[2]=(g-v)*P,i[3]=0,i[4]=(m-S)*b,i[5]=(1-(f+u))*b,i[6]=(p+y)*b,i[7]=0,i[8]=(g+v)*A,i[9]=(p-y)*A,i[10]=(1-(f+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Xn.set(i[0],i[1],i[2]).length();const a=Xn.set(i[4],i[5],i[6]).length(),o=Xn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],qe.copy(this);const l=1/r,h=1/a,d=1/o;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=d,qe.elements[9]*=d,qe.elements[10]*=d,e.setFromRotationMatrix(qe),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=ln){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(o===ln)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===hs)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=ln){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),f=(e+t)*l,m=(n+i)*h;let g,_;if(o===ln)g=(a+r)*d,_=-2*d;else if(o===hs)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Xn=new C,qe=new de,pl=new C(0,0,0),ml=new C(1,1,1),gn=new C,ki=new C,Ge=new C,vo=new de,Mo=new Ii;class _s{constructor(t=0,e=0,n=0,i=_s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_s.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gl=0;const xo=new C,qn=new Ii,rn=new de,Vi=new C,xi=new C,_l=new C,vl=new Ii,So=new C(1,0,0),yo=new C(0,1,0),wo=new C(0,0,1),Ml={type:"added"},xl={type:"removed"};class ge extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ge.DEFAULT_UP.clone();const t=new C,e=new _s,n=new Ii,i=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new de},normalMatrix:{value:new Kt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=ge.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.multiply(qn),this}rotateOnWorldAxis(t,e){return qn.setFromAxisAngle(t,e),this.quaternion.premultiply(qn),this}rotateX(t){return this.rotateOnAxis(So,t)}rotateY(t){return this.rotateOnAxis(yo,t)}rotateZ(t){return this.rotateOnAxis(wo,t)}translateOnAxis(t,e){return xo.copy(t).applyQuaternion(this.quaternion),this.position.add(xo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(So,t)}translateY(t){return this.translateOnAxis(yo,t)}translateZ(t){return this.translateOnAxis(wo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Vi.copy(t):Vi.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(xi,Vi,this.up):rn.lookAt(Vi,xi,this.up),this.quaternion.setFromRotationMatrix(rn),i&&(rn.extractRotation(i.matrixWorld),qn.setFromRotationMatrix(rn),this.quaternion.premultiply(qn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Ml)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,t,_l),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xi,vl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ge.DEFAULT_UP=new C(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ye=new C,on=new C,Gs=new C,an=new C,Yn=new C,Kn=new C,Eo=new C,zs=new C,ks=new C,Vs=new C;let Hi=!1;class Ke{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ye.subVectors(t,e),i.cross(Ye);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ye.subVectors(i,e),on.subVectors(n,e),Gs.subVectors(t,e);const a=Ye.dot(Ye),o=Ye.dot(on),c=Ye.dot(Gs),l=on.dot(on),h=on.dot(Gs),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const f=1/d,m=(l*c-o*h)*f,g=(a*h-o*c)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,an)===null?!1:an.x>=0&&an.y>=0&&an.x+an.y<=1}static getUV(t,e,n,i,r,a,o,c){return Hi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hi=!0),this.getInterpolation(t,e,n,i,r,a,o,c)}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,an)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,an.x),c.addScaledVector(a,an.y),c.addScaledVector(o,an.z),c)}static isFrontFacing(t,e,n,i){return Ye.subVectors(n,e),on.subVectors(t,e),Ye.cross(on).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Ye.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ke.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ke.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Hi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Hi=!0),Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Ke.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ke.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ke.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;Yn.subVectors(i,n),Kn.subVectors(r,n),zs.subVectors(t,n);const c=Yn.dot(zs),l=Kn.dot(zs);if(c<=0&&l<=0)return e.copy(n);ks.subVectors(t,i);const h=Yn.dot(ks),d=Kn.dot(ks);if(h>=0&&d<=h)return e.copy(i);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(Yn,a);Vs.subVectors(t,r);const m=Yn.dot(Vs),g=Kn.dot(Vs);if(g>=0&&m<=g)return e.copy(r);const _=m*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Kn,o);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return Eo.subVectors(r,i),o=(d-h)/(d-h+(m-g)),e.copy(i).addScaledVector(Eo,o);const u=1/(p+_+f);return a=_*u,o=f*u,e.copy(n).addScaledVector(Yn,a).addScaledVector(Kn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Aa={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_n={h:0,s:0,l:0},Wi={h:0,s:0,l:0};function Hs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ee.workingColorSpace){if(t=gr(t,1),e=ye(e,0,1),n=ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Hs(a,r,t+1/3),this.g=Hs(a,r,t),this.b=Hs(a,r,t-1/3)}return ee.toWorkingColorSpace(this,i),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){const n=Aa[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return ee.fromWorkingColorSpace(Ae.copy(this),t),Math.round(ye(Ae.r*255,0,255))*65536+Math.round(ye(Ae.g*255,0,255))*256+Math.round(ye(Ae.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,r=Ae.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=we){ee.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_n),this.setHSL(_n.h+t,_n.s+e,_n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_n),t.getHSL(Wi);const n=Ei(_n.h,Wi.h,e),i=Ei(_n.s,Wi.s,e),r=Ei(_n.l,Wi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Zt;Zt.NAMES=Aa;let Sl=0;class pi extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=ri,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rr,this.blendDst=or,this.blendEquation=In,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ri&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rr&&(n.blendSrc=this.blendSrc),this.blendDst!==or&&(n.blendDst=this.blendDst),this.blendEquation!==In&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ue extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ca,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new C,Xi=new Ct;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ho,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Xi.fromBufferAttribute(this,e),Xi.applyMatrix3(t),this.setXY(e,Xi.x,Xi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ho&&(t.usage=this.usage),t}}class Ra extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ca extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yl=0;const Ve=new de,Ws=new ge,Zn=new C,ze=new un,Si=new un,Se=new C;class Ne extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sa(t)?Ca:Ra)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ve.makeRotationFromQuaternion(t),this.applyMatrix4(Ve),this}rotateX(t){return Ve.makeRotationX(t),this.applyMatrix4(Ve),this}rotateY(t){return Ve.makeRotationY(t),this.applyMatrix4(Ve),this}rotateZ(t){return Ve.makeRotationZ(t),this.applyMatrix4(Ve),this}translate(t,e,n){return Ve.makeTranslation(t,e,n),this.applyMatrix4(Ve),this}scale(t,e,n){return Ve.makeScale(t,e,n),this.applyMatrix4(Ve),this}lookAt(t){return Ws.lookAt(t),Ws.updateMatrix(),this.applyMatrix4(Ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zn).negate(),this.translate(Zn.x,Zn.y,Zn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Si.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(ze.min,Si.min),ze.expandByPoint(Se),Se.addVectors(ze.max,Si.max),ze.expandByPoint(Se)):(ze.expandByPoint(Si.min),ze.expandByPoint(Si.max))}ze.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Se.fromBufferAttribute(o,l),c&&(Zn.fromBufferAttribute(t,l),Se.add(Zn)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let w=0;w<o;w++)l[w]=new C,h[w]=new C;const d=new C,f=new C,m=new C,g=new Ct,_=new Ct,p=new Ct,u=new C,y=new C;function v(w,B,F){d.fromArray(i,w*3),f.fromArray(i,B*3),m.fromArray(i,F*3),g.fromArray(a,w*2),_.fromArray(a,B*2),p.fromArray(a,F*2),f.sub(d),m.sub(d),_.sub(g),p.sub(g);const rt=1/(_.x*p.y-p.x*_.y);isFinite(rt)&&(u.copy(f).multiplyScalar(p.y).addScaledVector(m,-_.y).multiplyScalar(rt),y.copy(m).multiplyScalar(_.x).addScaledVector(f,-p.x).multiplyScalar(rt),l[w].add(u),l[B].add(u),l[F].add(u),h[w].add(y),h[B].add(y),h[F].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let w=0,B=S.length;w<B;++w){const F=S[w],rt=F.start,L=F.count;for(let N=rt,Y=rt+L;N<Y;N+=3)v(n[N+0],n[N+1],n[N+2])}const P=new C,b=new C,A=new C,D=new C;function M(w){A.fromArray(r,w*3),D.copy(A);const B=l[w];P.copy(B),P.sub(A.multiplyScalar(A.dot(B))).normalize(),b.crossVectors(D,B);const rt=b.dot(h[w])<0?-1:1;c[w*4]=P.x,c[w*4+1]=P.y,c[w*4+2]=P.z,c[w*4+3]=rt}for(let w=0,B=S.length;w<B;++w){const F=S[w],rt=F.start,L=F.count;for(let N=rt,Y=rt+L;N<Y;N+=3)M(n[N+0]),M(n[N+1]),M(n[N+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new C,r=new C,a=new C,o=new C,c=new C,l=new C,h=new C,d=new C;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),_=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,f=new l.constructor(c.length*h);let m=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?m=c[_]*o.data.stride+o.offset:m=c[_]*h;for(let u=0;u<h;u++)f[g++]=l[m++]}return new tn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const f=l[h],m=t(f,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const m=l[d];h.push(m.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const To=new de,Rn=new Ta,qi=new gs,bo=new C,Jn=new C,jn=new C,$n=new C,Xs=new C,Yi=new C,Ki=new Ct,Zi=new Ct,Ji=new Ct,Ao=new C,Ro=new C,Co=new C,ji=new C,$i=new C;class R extends ge{constructor(t=new Ne,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){Yi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Xs.fromBufferAttribute(d,t),a?Yi.addScaledVector(Xs,h):Yi.addScaledVector(Xs.sub(e),h))}e.add(Yi)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere),qi.applyMatrix4(r),Rn.copy(t.ray).recast(t.near),!(qi.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(qi,bo)===null||Rn.origin.distanceToSquared(bo)>(t.far-t.near)**2))&&(To.copy(r).invert(),Rn.copy(t.ray).applyMatrix4(To),!(n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Rn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,P=v;S<P;S+=3){const b=o.getX(S),A=o.getX(S+1),D=o.getX(S+2);i=Qi(this,u,t,n,l,h,d,b,A,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const y=o.getX(p),v=o.getX(p+1),S=o.getX(p+2);i=Qi(this,a,t,n,l,h,d,y,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const p=f[g],u=a[p.materialIndex],y=Math.max(p.start,m.start),v=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let S=y,P=v;S<P;S+=3){const b=S,A=S+1,D=S+2;i=Qi(this,u,t,n,l,h,d,b,A,D),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),_=Math.min(c.count,m.start+m.count);for(let p=g,u=_;p<u;p+=3){const y=p,v=p+1,S=p+2;i=Qi(this,a,t,n,l,h,d,y,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function wl(s,t,e,n,i,r,a,o){let c;if(t.side===Ue?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===wn,o),c===null)return null;$i.copy(o),$i.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo($i);return l<e.near||l>e.far?null:{distance:l,point:$i.clone(),object:s}}function Qi(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,Jn),s.getVertexPosition(c,jn),s.getVertexPosition(l,$n);const h=wl(s,t,e,n,Jn,jn,$n,ji);if(h){i&&(Ki.fromBufferAttribute(i,o),Zi.fromBufferAttribute(i,c),Ji.fromBufferAttribute(i,l),h.uv=Ke.getInterpolation(ji,Jn,jn,$n,Ki,Zi,Ji,new Ct)),r&&(Ki.fromBufferAttribute(r,o),Zi.fromBufferAttribute(r,c),Ji.fromBufferAttribute(r,l),h.uv1=Ke.getInterpolation(ji,Jn,jn,$n,Ki,Zi,Ji,new Ct),h.uv2=h.uv1),a&&(Ao.fromBufferAttribute(a,o),Ro.fromBufferAttribute(a,c),Co.fromBufferAttribute(a,l),h.normal=Ke.getInterpolation(ji,Jn,jn,$n,Ao,Ro,Co,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};Ke.getNormal(Jn,jn,$n,d.normal),h.face=d}return h}class st extends Ne{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function g(_,p,u,y,v,S,P,b,A,D,M){const w=S/A,B=P/D,F=S/2,rt=P/2,L=b/2,N=A+1,Y=D+1;let $=0,J=0;const Z=new C;for(let tt=0;tt<Y;tt++){const nt=tt*B-rt;for(let ot=0;ot<N;ot++){const G=ot*w-F;Z[_]=G*y,Z[p]=nt*v,Z[u]=L,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[p]=0,Z[u]=b>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(ot/A),d.push(1-tt/D),$+=1}}for(let tt=0;tt<D;tt++)for(let nt=0;nt<A;nt++){const ot=f+nt+N*tt,G=f+nt+N*(tt+1),et=f+(nt+1)+N*(tt+1),lt=f+(nt+1)+N*tt;c.push(ot,G,lt),c.push(G,et,lt),J+=6}o.addGroup(m,J,M),m+=J,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new st(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ui(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(s){const t={};for(let e=0;e<s.length;e++){const n=ui(s[e]);for(const i in n)t[i]=n[i]}return t}function El(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Pa(s){return s.getRenderTarget()===null?s.outputColorSpace:ee.workingColorSpace}const Tl={clone:ui,merge:Ie};var bl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Al=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gn extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bl,this.fragmentShader=Al,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ui(t.uniforms),this.uniformsGroups=El(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class La extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=ln}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Oe extends La{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=hi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hi*2*Math.atan(Math.tan(wi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Qn=-90,ti=1;class Rl extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Oe(Qn,ti,t,e);i.layers=this.layers,this.add(i);const r=new Oe(Qn,ti,t,e);r.layers=this.layers,this.add(r);const a=new Oe(Qn,ti,t,e);a.layers=this.layers,this.add(a);const o=new Oe(Qn,ti,t,e);o.layers=this.layers,this.add(o);const c=new Oe(Qn,ti,t,e);c.layers=this.layers,this.add(c);const l=new Oe(Qn,ti,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===ln)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ia extends Fe{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ai,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cl extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ti("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Fn?we:We),this.texture=new Ia(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:He}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new st(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ue,blending:xn});r.uniforms.tEquirect.value=e;const a=new R(i,r),o=e.minFilter;return e.minFilter===Ri&&(e.minFilter=He),new Rl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const qs=new C,Pl=new C,Ll=new Kt;class Pn{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qs.subVectors(n,e).cross(Pl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(qs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ll.getNormalMatrix(t),i=this.coplanarPoint(qs).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cn=new gs,ts=new C;class _r{constructor(t=new Pn,e=new Pn,n=new Pn,i=new Pn,r=new Pn,a=new Pn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ln){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],f=i[7],m=i[8],g=i[9],_=i[10],p=i[11],u=i[12],y=i[13],v=i[14],S=i[15];if(n[0].setComponents(c-r,f-l,p-m,S-u).normalize(),n[1].setComponents(c+r,f+l,p+m,S+u).normalize(),n[2].setComponents(c+a,f+h,p+g,S+y).normalize(),n[3].setComponents(c-a,f-h,p-g,S-y).normalize(),n[4].setComponents(c-o,f-d,p-_,S-v).normalize(),e===ln)n[5].setComponents(c+o,f+d,p+_,S+v).normalize();else if(e===hs)n[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Cn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Cn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Cn)}intersectsSprite(t){return Cn.center.set(0,0,0),Cn.radius=.7071067811865476,Cn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Cn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ts.x=i.normal.x>0?t.max.x:t.min.x,ts.y=i.normal.y>0?t.max.y:t.min.y,ts.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Da(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Il(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,f=l.usage,m=d.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=s.SHORT;else if(d instanceof Uint32Array)_=s.UNSIGNED_INT;else if(d instanceof Int32Array)_=s.INT;else if(d instanceof Int8Array)_=s.BYTE;else if(d instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,d){const f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(d,l),m.count===-1&&g.length===0&&s.bufferSubData(d,0,f),g.length!==0){for(let _=0,p=g.length;_<p;_++){const u=g[_];e?s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):s.bufferSubData(d,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}class jt extends Ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,f=e/c,m=[],g=[],_=[],p=[];for(let u=0;u<h;u++){const y=u*f-a;for(let v=0;v<l;v++){const S=v*d-r;g.push(S,-y,0),_.push(0,0,1),p.push(v/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<o;y++){const v=y+l*u,S=y+l*(u+1),P=y+1+l*(u+1),b=y+1+l*u;m.push(v,S,b),m.push(S,P,b)}this.setIndex(m),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dl=`#ifdef USE_ALPHAHASH
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
#endif`,zl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kl=`#ifdef USE_BATCHING
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
}`,uh=`#ifdef USE_ENVMAP
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
#endif`,dh=`#ifdef USE_ENVMAP
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
#endif`,vh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mh=`#ifdef USE_FOG
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
#endif`,yh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wh=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ch=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ph=`varying vec3 vViewPosition;
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
#endif`,zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
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
#endif`,tu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eu=`#ifdef USE_NORMALMAP
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
#endif`,nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,su=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ou=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,au=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_u=`float getShadowMask() {
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
}`,vu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mu=`#ifdef USE_SKINNING
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
#endif`,xu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Su=`#ifdef USE_SKINNING
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
#endif`,yu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tu=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bu=`#ifdef USE_TRANSMISSION
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
#endif`,Au=`#ifdef USE_TRANSMISSION
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
#endif`,Ru=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Du=`uniform sampler2D t2D;
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
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bu=`#include <common>
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
}`,Gu=`#if DEPTH_PACKING == 3200
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
}`,zu=`#define DISTANCE
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
}`,ku=`#define DISTANCE
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
}`,Vu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wu=`uniform float scale;
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
}`,Xu=`uniform vec3 diffuse;
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
}`,qu=`#include <common>
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
}`,Yu=`uniform vec3 diffuse;
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
}`,Ku=`#define LAMBERT
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
}`,Zu=`#define LAMBERT
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
}`,Ju=`#define MATCAP
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
}`,ju=`#define MATCAP
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
}`,$u=`#define NORMAL
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
}`,Qu=`#define NORMAL
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
}`,td=`#define PHONG
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
}`,ed=`#define PHONG
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
}`,nd=`#define STANDARD
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
}`,id=`#define STANDARD
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
}`,sd=`#define TOON
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
}`,rd=`#define TOON
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
}`,od=`uniform float size;
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
}`,ad=`uniform vec3 diffuse;
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
}`,cd=`#include <common>
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
}`,ld=`uniform vec3 color;
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
}`,hd=`uniform float rotation;
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
}`,ud=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Dl,alphahash_pars_fragment:Ul,alphamap_fragment:Nl,alphamap_pars_fragment:Ol,alphatest_fragment:Fl,alphatest_pars_fragment:Bl,aomap_fragment:Gl,aomap_pars_fragment:zl,batching_pars_vertex:kl,batching_vertex:Vl,begin_vertex:Hl,beginnormal_vertex:Wl,bsdfs:Xl,iridescence_fragment:ql,bumpmap_pars_fragment:Yl,clipping_planes_fragment:Kl,clipping_planes_pars_fragment:Zl,clipping_planes_pars_vertex:Jl,clipping_planes_vertex:jl,color_fragment:$l,color_pars_fragment:Ql,color_pars_vertex:th,color_vertex:eh,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:sh,displacementmap_pars_vertex:rh,displacementmap_vertex:oh,emissivemap_fragment:ah,emissivemap_pars_fragment:ch,colorspace_fragment:lh,colorspace_pars_fragment:hh,envmap_fragment:uh,envmap_common_pars_fragment:dh,envmap_pars_fragment:fh,envmap_pars_vertex:ph,envmap_physical_pars_fragment:bh,envmap_vertex:mh,fog_vertex:gh,fog_pars_vertex:_h,fog_fragment:vh,fog_pars_fragment:Mh,gradientmap_pars_fragment:xh,lightmap_fragment:Sh,lightmap_pars_fragment:yh,lights_lambert_fragment:wh,lights_lambert_pars_fragment:Eh,lights_pars_begin:Th,lights_toon_fragment:Ah,lights_toon_pars_fragment:Rh,lights_phong_fragment:Ch,lights_phong_pars_fragment:Ph,lights_physical_fragment:Lh,lights_physical_pars_fragment:Ih,lights_fragment_begin:Dh,lights_fragment_maps:Uh,lights_fragment_end:Nh,logdepthbuf_fragment:Oh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Bh,logdepthbuf_vertex:Gh,map_fragment:zh,map_pars_fragment:kh,map_particle_fragment:Vh,map_particle_pars_fragment:Hh,metalnessmap_fragment:Wh,metalnessmap_pars_fragment:Xh,morphcolor_vertex:qh,morphnormal_vertex:Yh,morphtarget_pars_vertex:Kh,morphtarget_vertex:Zh,normal_fragment_begin:Jh,normal_fragment_maps:jh,normal_pars_fragment:$h,normal_pars_vertex:Qh,normal_vertex:tu,normalmap_pars_fragment:eu,clearcoat_normal_fragment_begin:nu,clearcoat_normal_fragment_maps:iu,clearcoat_pars_fragment:su,iridescence_pars_fragment:ru,opaque_fragment:ou,packing:au,premultiplied_alpha_fragment:cu,project_vertex:lu,dithering_fragment:hu,dithering_pars_fragment:uu,roughnessmap_fragment:du,roughnessmap_pars_fragment:fu,shadowmap_pars_fragment:pu,shadowmap_pars_vertex:mu,shadowmap_vertex:gu,shadowmask_pars_fragment:_u,skinbase_vertex:vu,skinning_pars_vertex:Mu,skinning_vertex:xu,skinnormal_vertex:Su,specularmap_fragment:yu,specularmap_pars_fragment:wu,tonemapping_fragment:Eu,tonemapping_pars_fragment:Tu,transmission_fragment:bu,transmission_pars_fragment:Au,uv_pars_fragment:Ru,uv_pars_vertex:Cu,uv_vertex:Pu,worldpos_vertex:Lu,background_vert:Iu,background_frag:Du,backgroundCube_vert:Uu,backgroundCube_frag:Nu,cube_vert:Ou,cube_frag:Fu,depth_vert:Bu,depth_frag:Gu,distanceRGBA_vert:zu,distanceRGBA_frag:ku,equirect_vert:Vu,equirect_frag:Hu,linedashed_vert:Wu,linedashed_frag:Xu,meshbasic_vert:qu,meshbasic_frag:Yu,meshlambert_vert:Ku,meshlambert_frag:Zu,meshmatcap_vert:Ju,meshmatcap_frag:ju,meshnormal_vert:$u,meshnormal_frag:Qu,meshphong_vert:td,meshphong_frag:ed,meshphysical_vert:nd,meshphysical_frag:id,meshtoon_vert:sd,meshtoon_frag:rd,points_vert:od,points_frag:ad,shadow_vert:cd,shadow_frag:ld,sprite_vert:hd,sprite_frag:ud},ft={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Qe={basic:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ie([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ie([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ie([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ie([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ie([ft.points,ft.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ie([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ie([ft.common,ft.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ie([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ie([ft.sprite,ft.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ie([ft.common,ft.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ie([ft.lights,ft.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Qe.physical={uniforms:Ie([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const es={r:0,b:0,g:0};function dd(s,t,e,n,i,r,a){const o=new Zt(0);let c=r===!0?0:1,l,h,d=null,f=0,m=null;function g(p,u){let y=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?e:t).get(v)),v===null?_(o,c):v&&v.isColor&&(_(v,1),y=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===ps)?(h===void 0&&(h=new R(new st(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:ui(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=ee.getTransfer(v.colorSpace)!==ae,(d!==v||f!==v.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new R(new jt(2,2),new Gn({name:"BackgroundMaterial",uniforms:ui(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=ee.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function _(p,u){p.getRGB(es,Pa(s)),n.buffers.color.setClear(es.r,es.g,es.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),c=u,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function fd(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=p(null);let l=c,h=!1;function d(L,N,Y,$,J){let Z=!1;if(a){const tt=_($,Y,N);l!==tt&&(l=tt,m(l.object)),Z=u(L,$,Y,J),Z&&y(L,$,Y,J)}else{const tt=N.wireframe===!0;(l.geometry!==$.id||l.program!==Y.id||l.wireframe!==tt)&&(l.geometry=$.id,l.program=Y.id,l.wireframe=tt,Z=!0)}J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,D(L,N,Y,$),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function _(L,N,Y){const $=Y.wireframe===!0;let J=o[L.id];J===void 0&&(J={},o[L.id]=J);let Z=J[N.id];Z===void 0&&(Z={},J[N.id]=Z);let tt=Z[$];return tt===void 0&&(tt=p(f()),Z[$]=tt),tt}function p(L){const N=[],Y=[],$=[];for(let J=0;J<i;J++)N[J]=0,Y[J]=0,$[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:Y,attributeDivisors:$,object:L,attributes:{},index:null}}function u(L,N,Y,$){const J=l.attributes,Z=N.attributes;let tt=0;const nt=Y.getAttributes();for(const ot in nt)if(nt[ot].location>=0){const et=J[ot];let lt=Z[ot];if(lt===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(lt=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(lt=L.instanceColor)),et===void 0||et.attribute!==lt||lt&&et.data!==lt.data)return!0;tt++}return l.attributesNum!==tt||l.index!==$}function y(L,N,Y,$){const J={},Z=N.attributes;let tt=0;const nt=Y.getAttributes();for(const ot in nt)if(nt[ot].location>=0){let et=Z[ot];et===void 0&&(ot==="instanceMatrix"&&L.instanceMatrix&&(et=L.instanceMatrix),ot==="instanceColor"&&L.instanceColor&&(et=L.instanceColor));const lt={};lt.attribute=et,et&&et.data&&(lt.data=et.data),J[ot]=lt,tt++}l.attributes=J,l.attributesNum=tt,l.index=$}function v(){const L=l.newAttributes;for(let N=0,Y=L.length;N<Y;N++)L[N]=0}function S(L){P(L,0)}function P(L,N){const Y=l.newAttributes,$=l.enabledAttributes,J=l.attributeDivisors;Y[L]=1,$[L]===0&&(s.enableVertexAttribArray(L),$[L]=1),J[L]!==N&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,N),J[L]=N)}function b(){const L=l.newAttributes,N=l.enabledAttributes;for(let Y=0,$=N.length;Y<$;Y++)N[Y]!==L[Y]&&(s.disableVertexAttribArray(Y),N[Y]=0)}function A(L,N,Y,$,J,Z,tt){tt===!0?s.vertexAttribIPointer(L,N,Y,J,Z):s.vertexAttribPointer(L,N,Y,$,J,Z)}function D(L,N,Y,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();const J=$.attributes,Z=Y.getAttributes(),tt=N.defaultAttributeValues;for(const nt in Z){const ot=Z[nt];if(ot.location>=0){let G=J[nt];if(G===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(G=L.instanceColor)),G!==void 0){const et=G.normalized,lt=G.itemSize,Mt=e.get(G);if(Mt===void 0)continue;const ut=Mt.buffer,Pt=Mt.type,Rt=Mt.bytesPerElement,Tt=n.isWebGL2===!0&&(Pt===s.INT||Pt===s.UNSIGNED_INT||G.gpuType===ua);if(G.isInterleavedBufferAttribute){const Nt=G.data,z=Nt.stride,$t=G.offset;if(Nt.isInstancedInterleavedBuffer){for(let yt=0;yt<ot.locationSize;yt++)P(ot.location+yt,Nt.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let yt=0;yt<ot.locationSize;yt++)S(ot.location+yt);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let yt=0;yt<ot.locationSize;yt++)A(ot.location+yt,lt/ot.locationSize,Pt,et,z*Rt,($t+lt/ot.locationSize*yt)*Rt,Tt)}else{if(G.isInstancedBufferAttribute){for(let Nt=0;Nt<ot.locationSize;Nt++)P(ot.location+Nt,G.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Nt=0;Nt<ot.locationSize;Nt++)S(ot.location+Nt);s.bindBuffer(s.ARRAY_BUFFER,ut);for(let Nt=0;Nt<ot.locationSize;Nt++)A(ot.location+Nt,lt/ot.locationSize,Pt,et,lt*Rt,lt/ot.locationSize*Nt*Rt,Tt)}}else if(tt!==void 0){const et=tt[nt];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(ot.location,et);break;case 3:s.vertexAttrib3fv(ot.location,et);break;case 4:s.vertexAttrib4fv(ot.location,et);break;default:s.vertexAttrib1fv(ot.location,et)}}}}b()}function M(){F();for(const L in o){const N=o[L];for(const Y in N){const $=N[Y];for(const J in $)g($[J].object),delete $[J];delete N[Y]}delete o[L]}}function w(L){if(o[L.id]===void 0)return;const N=o[L.id];for(const Y in N){const $=N[Y];for(const J in $)g($[J].object),delete $[J];delete N[Y]}delete o[L.id]}function B(L){for(const N in o){const Y=o[N];if(Y[L.id]===void 0)continue;const $=Y[L.id];for(const J in $)g($[J].object),delete $[J];delete Y[L.id]}}function F(){rt(),h=!0,l!==c&&(l=c,m(l.object))}function rt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:F,resetDefaultState:rt,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfProgram:B,initAttributes:v,enableAttribute:S,disableUnusedAttributes:b}}function pd(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),e.update(d,r,1)}function c(h,d,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,d,f),e.update(d,r,f)}function l(h,d,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],d[g]);else{m.multiDrawArraysWEBGL(r,h,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=d[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function md(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,S=a||t.has("OES_texture_float"),P=v&&S,b=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:b}}function gd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new Pn,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,u=s.get(d);if(!i||g===null||g.length===0||r&&!p)r?h(null):l();else{const y=r?0:n,v=y*4;let S=u.clippingState||null;c.value=S,S=h(g,f,v,m);for(let P=0;P!==v;++P)S[P]=e[P];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,m,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const u=m+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,S=m;v!==_;++v,S+=4)a.copy(d[v]).applyMatrix4(y,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function _d(s){let t=new WeakMap;function e(a,o){return o===ar?a.mapping=ai:o===cr&&(a.mapping=ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ar||o===cr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Cl(c.height/2);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ua extends La{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ii=4,Po=[.125,.215,.35,.446,.526,.582],Dn=20,Ys=new Ua,Lo=new Zt;let Ks=null,Zs=0,Js=0;const Ln=(1+Math.sqrt(5))/2,ei=1/Ln,Io=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Ln,ei),new C(0,Ln,-ei),new C(ei,0,Ln),new C(-ei,0,Ln),new C(Ln,ei,0),new C(-Ln,ei,0)];class Do{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=No(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ks,Zs,Js),t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ai||t.mapping===ci?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ks=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Ci,format:Je,colorSpace:hn,depthBuffer:!1},i=Uo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vd(r)),this._blurMaterial=Md(r,t,e)}return i}_compileMaterial(t){const e=new R(this._lodPlanes[0],t);this._renderer.compile(e,Ys)}_sceneToCubeUV(t,e,n,i){const o=new Oe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Lo),h.toneMapping=Sn,h.autoClear=!1;const m=new ue({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),g=new R(new st,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(Lo),_=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):y===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const v=this._cubeSize;ns(i,y*v,u>2?v:0,v,v),h.setRenderTarget(i),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ai||t.mapping===ci;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=No());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new R(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;ns(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,Ys)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Io[(i-1)%Io.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new R(this._lodPlanes[i],l),f=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Dn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Dn;p>Dn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dn}`);const u=[];let y=0;for(let A=0;A<Dn;++A){const D=A/_,M=Math.exp(-D*D/2);u.push(M),A===0?y+=M:A<p&&(y+=2*M)}for(let A=0;A<u.length;A++)u[A]=u[A]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const S=this._sizeLods[i],P=3*S*(i>v-ii?i-v+ii:0),b=4*(this._cubeSize-S);ns(e,P,b,3*S,2*S),c.setRenderTarget(e),c.render(d,Ys)}}function vd(s){const t=[],e=[],n=[];let i=s;const r=s-ii+1+Po.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-ii?c=Po[a-s+ii-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,_=3,p=2,u=1,y=new Float32Array(_*g*m),v=new Float32Array(p*g*m),S=new Float32Array(u*g*m);for(let b=0;b<m;b++){const A=b%3*2/3-1,D=b>2?0:-1,M=[A,D,0,A+2/3,D,0,A+2/3,D+1,0,A,D,0,A+2/3,D+1,0,A,D+1,0];y.set(M,_*g*b),v.set(f,p*g*b);const w=[b,b,b,b,b,b];S.set(w,u*g*b)}const P=new Ne;P.setAttribute("position",new tn(y,_)),P.setAttribute("uv",new tn(v,p)),P.setAttribute("faceIndex",new tn(S,u)),t.push(P),i>ii&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Uo(s,t,e){const n=new Bn(s,t,e);return n.texture.mapping=ps,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ns(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Md(s,t,e){const n=new Float32Array(Dn),i=new C(0,1,0);return new Gn({name:"SphericalGaussianBlur",defines:{n:Dn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vr(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function No(){return new Gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vr(),fragmentShader:`

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
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Oo(){return new Gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function vr(){return`

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
	`}function xd(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ar||c===cr,h=c===ai||c===ci;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Do(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Do(s));const f=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yd(s,t,e,n){const i={},r=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)t.remove(_[p])}f.removeEventListener("dispose",a),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,e.memory.geometries++),f}function c(d){const f=d.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const _=m[g];for(let p=0,u=_.length;p<u;p++)t.update(_[p],s.ARRAY_BUFFER)}}function l(d){const f=[],m=d.index,g=d.attributes.position;let _=0;if(m!==null){const y=m.array;_=m.version;for(let v=0,S=y.length;v<S;v+=3){const P=y[v+0],b=y[v+1],A=y[v+2];f.push(P,b,b,A,A,P)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const P=v+0,b=v+1,A=v+2;f.push(P,b,b,A,A,P)}}else return;const p=new(Sa(f)?Ca:Ra)(f,1);p.version=_;const u=r.get(d);u&&t.remove(u),r.set(d,p)}function h(d){const f=r.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function wd(s,t,e,n){const i=n.isWebGL2;let r;function a(m){r=m}let o,c;function l(m){o=m.type,c=m.bytesPerElement}function h(m,g){s.drawElements(r,g,o,m*c),e.update(g,r,1)}function d(m,g,_){if(_===0)return;let p,u;if(i)p=s,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,o,m*c,_),e.update(g,r,_)}function f(m,g,_){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<_;u++)this.render(m[u]/c,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,o,m,0,_);let u=0;for(let y=0;y<_;y++)u+=g[y];e.update(u,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=f}function Ed(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Td(s,t){return s[0]-t[0]}function bd(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ad(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ce,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==_){let N=function(){rt.dispose(),r.delete(h),h.removeEventListener("dispose",N)};var m=N;p!==void 0&&p.texture.dispose();const v=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,P=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let M=0;v===!0&&(M=1),S===!0&&(M=2),P===!0&&(M=3);let w=h.attributes.position.count*M,B=1;w>t.maxTextureSize&&(B=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const F=new Float32Array(w*B*4*_),rt=new Ea(F,w,B,_);rt.type=Mn,rt.needsUpdate=!0;const L=M*4;for(let Y=0;Y<_;Y++){const $=b[Y],J=A[Y],Z=D[Y],tt=w*B*4*Y;for(let nt=0;nt<$.count;nt++){const ot=nt*L;v===!0&&(a.fromBufferAttribute($,nt),F[tt+ot+0]=a.x,F[tt+ot+1]=a.y,F[tt+ot+2]=a.z,F[tt+ot+3]=0),S===!0&&(a.fromBufferAttribute(J,nt),F[tt+ot+4]=a.x,F[tt+ot+5]=a.y,F[tt+ot+6]=a.z,F[tt+ot+7]=0),P===!0&&(a.fromBufferAttribute(Z,nt),F[tt+ot+8]=a.x,F[tt+ot+9]=a.y,F[tt+ot+10]=a.z,F[tt+ot+11]=Z.itemSize===4?a.w:1)}}p={count:_,texture:rt,size:new Ct(w,B)},r.set(h,p),h.addEventListener("dispose",N)}let u=0;for(let v=0;v<f.length;v++)u+=f[v];const y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",y),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[h.id]=_}for(let S=0;S<g;S++){const P=_[S];P[0]=S,P[1]=f[S]}_.sort(bd);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Td);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const P=o[S],b=P[0],A=P[1];b!==Number.MAX_SAFE_INTEGER&&A?(p&&h.getAttribute("morphTarget"+S)!==p[b]&&h.setAttribute("morphTarget"+S,p[b]),u&&h.getAttribute("morphNormal"+S)!==u[b]&&h.setAttribute("morphNormal"+S,u[b]),i[S]=A,y+=A):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),u&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const v=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Rd(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Na extends Fe{constructor(t,e,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:On,h!==On&&h!==li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===On&&(n=vn),n===void 0&&h===li&&(n=Nn),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:De,this.minFilter=c!==void 0?c:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Oa=new Fe,Fa=new Na(1,1);Fa.compareFunction=xa;const Ba=new Ea,Ga=new dl,za=new Ia,Fo=[],Bo=[],Go=new Float32Array(16),zo=new Float32Array(9),ko=new Float32Array(4);function mi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Fo[i];if(r===void 0&&(r=new Float32Array(i),Fo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ve(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function vs(s,t){let e=Bo[t];e===void 0&&(e=new Int32Array(t),Bo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Cd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Pd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),ve(e,t)}}function Ld(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),ve(e,t)}}function Id(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),ve(e,t)}}function Dd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;ko.set(n),s.uniformMatrix2fv(this.addr,!1,ko),ve(e,n)}}function Ud(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;zo.set(n),s.uniformMatrix3fv(this.addr,!1,zo),ve(e,n)}}function Nd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;Go.set(n),s.uniformMatrix4fv(this.addr,!1,Go),ve(e,n)}}function Od(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Fd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),ve(e,t)}}function Bd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),ve(e,t)}}function Gd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),ve(e,t)}}function zd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function kd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),ve(e,t)}}function Vd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),ve(e,t)}}function Hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),ve(e,t)}}function Wd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Fa:Oa;e.setTexture2D(t||r,i)}function Xd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ga,i)}function qd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||za,i)}function Yd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ba,i)}function Kd(s){switch(s){case 5126:return Cd;case 35664:return Pd;case 35665:return Ld;case 35666:return Id;case 35674:return Dd;case 35675:return Ud;case 35676:return Nd;case 5124:case 35670:return Od;case 35667:case 35671:return Fd;case 35668:case 35672:return Bd;case 35669:case 35673:return Gd;case 5125:return zd;case 36294:return kd;case 36295:return Vd;case 36296:return Hd;case 35678:case 36198:case 36298:case 36306:case 35682:return Wd;case 35679:case 36299:case 36307:return Xd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Yd}}function Zd(s,t){s.uniform1fv(this.addr,t)}function Jd(s,t){const e=mi(t,this.size,2);s.uniform2fv(this.addr,e)}function jd(s,t){const e=mi(t,this.size,3);s.uniform3fv(this.addr,e)}function $d(s,t){const e=mi(t,this.size,4);s.uniform4fv(this.addr,e)}function Qd(s,t){const e=mi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function tf(s,t){const e=mi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ef(s,t){const e=mi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function nf(s,t){s.uniform1iv(this.addr,t)}function sf(s,t){s.uniform2iv(this.addr,t)}function rf(s,t){s.uniform3iv(this.addr,t)}function of(s,t){s.uniform4iv(this.addr,t)}function af(s,t){s.uniform1uiv(this.addr,t)}function cf(s,t){s.uniform2uiv(this.addr,t)}function lf(s,t){s.uniform3uiv(this.addr,t)}function hf(s,t){s.uniform4uiv(this.addr,t)}function uf(s,t,e){const n=this.cache,i=t.length,r=vs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||Oa,r[a])}function df(s,t,e){const n=this.cache,i=t.length,r=vs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ga,r[a])}function ff(s,t,e){const n=this.cache,i=t.length,r=vs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||za,r[a])}function pf(s,t,e){const n=this.cache,i=t.length,r=vs(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Ba,r[a])}function mf(s){switch(s){case 5126:return Zd;case 35664:return Jd;case 35665:return jd;case 35666:return $d;case 35674:return Qd;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return sf;case 35668:case 35672:return rf;case 35669:case 35673:return of;case 5125:return af;case 36294:return cf;case 36295:return lf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}class gf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kd(e.type)}}class _f{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mf(e.type)}}class vf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const js=/(\w+)(\])?(\[|\.)?/g;function Vo(s,t){s.seq.push(t),s.map[t.id]=t}function Mf(s,t,e){const n=s.name,i=n.length;for(js.lastIndex=0;;){const r=js.exec(n),a=js.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Vo(e,l===void 0?new gf(o,s,t):new _f(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new vf(o),Vo(e,d)),e=d}}}class rs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Mf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Ho(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const xf=37297;let Sf=0;function yf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function wf(s){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(s);let n;switch(t===e?n="":t===ls&&e===cs?n="LinearDisplayP3ToLinearSRGB":t===cs&&e===ls&&(n="LinearSRGBToLinearDisplayP3"),s){case hn:case ms:return[n,"LinearTransferOETF"];case we:case mr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Wo(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+yf(s.getShaderSource(t),a)}else return i}function Ef(s,t){const e=wf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tf(s,t){let e;switch(t){case wc:e="Linear";break;case Ec:e="Reinhard";break;case Tc:e="OptimizedCineon";break;case la:e="ACESFilmic";break;case Ac:e="AgX";break;case bc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function bf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(si).join(`
`)}function Af(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(si).join(`
`)}function Rf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function si(s){return s!==""}function Xo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function dr(s){return s.replace(Pf,If)}const Lf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function If(s,t){let e=Xt[t];if(e===void 0){const n=Lf.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return dr(e)}const Df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yo(s){return s.replace(Df,Uf)}function Uf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ko(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===oa?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===aa?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===cn&&(t="SHADOWMAP_TYPE_VSM"),t}function Of(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ai:case ci:t="ENVMAP_TYPE_CUBE";break;case ps:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ff(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ci:t="ENVMAP_MODE_REFRACTION";break}return t}function Bf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ca:t="ENVMAP_BLENDING_MULTIPLY";break;case Sc:t="ENVMAP_BLENDING_MIX";break;case yc:t="ENVMAP_BLENDING_ADD";break}return t}function Gf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zf(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Nf(e),l=Of(e),h=Ff(e),d=Bf(e),f=Gf(e),m=e.isWebGL2?"":bf(e),g=Af(e),_=Rf(r),p=i.createProgram();let u,y,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(si).join(`
`),u.length>0&&(u+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(si).join(`
`),y.length>0&&(y+=`
`)):(u=[Ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(si).join(`
`),y=[m,Ko(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Tf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Ef("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(si).join(`
`)),a=dr(a),a=Xo(a,e),a=qo(a,e),o=dr(o),o=Xo(o,e),o=qo(o,e),a=Yo(a),o=Yo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===uo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+u+a,P=v+y+o,b=Ho(i,i.VERTEX_SHADER,S),A=Ho(i,i.FRAGMENT_SHADER,P);i.attachShader(p,b),i.attachShader(p,A),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function D(F){if(s.debug.checkShaderErrors){const rt=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(b).trim(),N=i.getShaderInfoLog(A).trim();let Y=!0,$=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,b,A);else{const J=Wo(i,b,"vertex"),Z=Wo(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+J+`
`+Z)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(L===""||N==="")&&($=!1);$&&(F.diagnostics={runnable:Y,programLog:rt,vertexShader:{log:L,prefix:u},fragmentShader:{log:N,prefix:y}})}i.deleteShader(b),i.deleteShader(A),M=new rs(i,p),w=Cf(i,p)}let M;this.getUniforms=function(){return M===void 0&&D(this),M};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let B=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=i.getProgramParameter(p,xf)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=A,this}let kf=0;class Vf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hf(t),e.set(t,n)),n}}class Hf{constructor(t){this.id=kf++,this.code=t,this.usedTimes=0}}function Wf(s,t,e,n,i,r,a){const o=new ba,c=new Vf,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function p(M,w,B,F,rt){const L=F.fog,N=rt.geometry,Y=M.isMeshStandardMaterial?F.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||Y),J=$&&$.mapping===ps?$.image.height:null,Z=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const tt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,nt=tt!==void 0?tt.length:0;let ot=0;N.morphAttributes.position!==void 0&&(ot=1),N.morphAttributes.normal!==void 0&&(ot=2),N.morphAttributes.color!==void 0&&(ot=3);let G,et,lt,Mt;if(Z){const Ce=Qe[Z];G=Ce.vertexShader,et=Ce.fragmentShader}else G=M.vertexShader,et=M.fragmentShader,c.update(M),lt=c.getVertexShaderID(M),Mt=c.getFragmentShaderID(M);const ut=s.getRenderTarget(),Pt=rt.isInstancedMesh===!0,Rt=rt.isBatchedMesh===!0,Tt=!!M.map,Nt=!!M.matcap,z=!!$,$t=!!M.aoMap,yt=!!M.lightMap,wt=!!M.bumpMap,Et=!!M.normalMap,Qt=!!M.displacementMap,Ut=!!M.emissiveMap,T=!!M.metalnessMap,x=!!M.roughnessMap,V=M.anisotropy>0,k=M.clearcoat>0,H=M.iridescence>0,X=M.sheen>0,gt=M.transmission>0,ct=V&&!!M.anisotropyMap,mt=k&&!!M.clearcoatMap,At=k&&!!M.clearcoatNormalMap,Ot=k&&!!M.clearcoatRoughnessMap,at=H&&!!M.iridescenceMap,Jt=H&&!!M.iridescenceThicknessMap,zt=X&&!!M.sheenColorMap,it=X&&!!M.sheenRoughnessMap,dt=!!M.specularMap,U=!!M.specularColorMap,j=!!M.specularIntensityMap,pt=gt&&!!M.transmissionMap,Lt=gt&&!!M.thicknessMap,Ft=!!M.gradientMap,ht=!!M.alphaMap,I=M.alphaTest>0,_t=!!M.alphaHash,vt=!!M.extensions,kt=!!N.attributes.uv1,Bt=!!N.attributes.uv2,ie=!!N.attributes.uv3;let se=Sn;return M.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(se=s.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:G,fragmentShader:et,defines:M.defines,customVertexShaderID:lt,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Rt,instancing:Pt,instancingColor:Pt&&rt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ut===null?s.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:hn,map:Tt,matcap:Nt,envMap:z,envMapMode:z&&$.mapping,envMapCubeUVHeight:J,aoMap:$t,lightMap:yt,bumpMap:wt,normalMap:Et,displacementMap:f&&Qt,emissiveMap:Ut,normalMapObjectSpace:Et&&M.normalMapType===Gc,normalMapTangentSpace:Et&&M.normalMapType===Ma,metalnessMap:T,roughnessMap:x,anisotropy:V,anisotropyMap:ct,clearcoat:k,clearcoatMap:mt,clearcoatNormalMap:At,clearcoatRoughnessMap:Ot,iridescence:H,iridescenceMap:at,iridescenceThicknessMap:Jt,sheen:X,sheenColorMap:zt,sheenRoughnessMap:it,specularMap:dt,specularColorMap:U,specularIntensityMap:j,transmission:gt,transmissionMap:pt,thicknessMap:Lt,gradientMap:Ft,opaque:M.transparent===!1&&M.blending===ri,alphaMap:ht,alphaTest:I,alphaHash:_t,combine:M.combine,mapUv:Tt&&_(M.map.channel),aoMapUv:$t&&_(M.aoMap.channel),lightMapUv:yt&&_(M.lightMap.channel),bumpMapUv:wt&&_(M.bumpMap.channel),normalMapUv:Et&&_(M.normalMap.channel),displacementMapUv:Qt&&_(M.displacementMap.channel),emissiveMapUv:Ut&&_(M.emissiveMap.channel),metalnessMapUv:T&&_(M.metalnessMap.channel),roughnessMapUv:x&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:mt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:it&&_(M.sheenRoughnessMap.channel),specularMapUv:dt&&_(M.specularMap.channel),specularColorMapUv:U&&_(M.specularColorMap.channel),specularIntensityMapUv:j&&_(M.specularIntensityMap.channel),transmissionMapUv:pt&&_(M.transmissionMap.channel),thicknessMapUv:Lt&&_(M.thicknessMap.channel),alphaMapUv:ht&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Et||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:kt,vertexUv2s:Bt,vertexUv3s:ie,pointsUvs:rt.isPoints===!0&&!!N.attributes.uv&&(Tt||ht),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:rt.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:ot,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:se,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Tt&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ee,flipSided:M.side===Ue,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:vt&&M.extensions.derivatives===!0,extensionFragDepth:vt&&M.extensions.fragDepth===!0,extensionDrawBuffers:vt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:vt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:vt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(const B in M.defines)w.push(B),w.push(M.defines[B]);return M.isRawShaderMaterial===!1&&(y(w,M),v(w,M),w.push(s.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function v(M,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),M.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const w=g[M.type];let B;if(w){const F=Qe[w];B=Tl.clone(F.uniforms)}else B=M.uniforms;return B}function P(M,w){let B;for(let F=0,rt=l.length;F<rt;F++){const L=l[F];if(L.cacheKey===w){B=L,++B.usedTimes;break}}return B===void 0&&(B=new zf(s,w,M,r),l.push(B)),B}function b(M){if(--M.usedTimes===0){const w=l.indexOf(M);l[w]=l[l.length-1],l.pop(),M.destroy()}}function A(M){c.remove(M)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:S,acquireProgram:P,releaseProgram:b,releaseShaderCache:A,programs:l,dispose:D}}function Xf(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function qf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Zo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Jo(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,f,m,g,_,p){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},s[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=m,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=_,u.group=p),t++,u}function o(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):e.push(u)}function c(d,f,m,g,_,p){const u=a(d,f,m,g,_,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||qf),n.length>1&&n.sort(f||Zo),i.length>1&&i.sort(f||Zo)}function h(){for(let d=t,f=s.length;d<f;d++){const m=s[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Yf(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new Jo,s.set(n,[a])):i>=r.length?(a=new Jo,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new Zt};break;case"SpotLight":e={position:new C,direction:new C,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function Zf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Jf=0;function jf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $f(s,t){const e=new Kf,n=Zf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new C);const r=new C,a=new de,o=new de;function c(h,d){let f=0,m=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let _=0,p=0,u=0,y=0,v=0,S=0,P=0,b=0,A=0,D=0,M=0;h.sort(jf);const w=d===!0?Math.PI:1;for(let F=0,rt=h.length;F<rt;F++){const L=h[F],N=L.color,Y=L.intensity,$=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=N.r*Y*w,m+=N.g*Y*w,g+=N.b*Y*w;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(L.sh.coefficients[Z],Y);M++}else if(L.isDirectionalLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const tt=L.shadow,nt=n.get(L);nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,i.directionalShadow[_]=nt,i.directionalShadowMap[_]=J,i.directionalShadowMatrix[_]=L.shadow.matrix,S++}i.directional[_]=Z,_++}else if(L.isSpotLight){const Z=e.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(N).multiplyScalar(Y*w),Z.distance=$,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,i.spot[u]=Z;const tt=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,tt.updateMatrices(L),L.castShadow&&D++),i.spotLightMatrix[u]=tt.matrix,L.castShadow){const nt=n.get(L);nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,i.spotShadow[u]=nt,i.spotShadowMap[u]=J,b++}u++}else if(L.isRectAreaLight){const Z=e.get(L);Z.color.copy(N).multiplyScalar(Y),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),i.rectArea[y]=Z,y++}else if(L.isPointLight){const Z=e.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity*w),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){const tt=L.shadow,nt=n.get(L);nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,nt.shadowCameraNear=tt.camera.near,nt.shadowCameraFar=tt.camera.far,i.pointShadow[p]=nt,i.pointShadowMap[p]=J,i.pointShadowMatrix[p]=L.shadow.matrix,P++}i.point[p]=Z,p++}else if(L.isHemisphereLight){const Z=e.get(L);Z.skyColor.copy(L.color).multiplyScalar(Y*w),Z.groundColor.copy(L.groundColor).multiplyScalar(Y*w),i.hemi[v]=Z,v++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const B=i.hash;(B.directionalLength!==_||B.pointLength!==p||B.spotLength!==u||B.rectAreaLength!==y||B.hemiLength!==v||B.numDirectionalShadows!==S||B.numPointShadows!==P||B.numSpotShadows!==b||B.numSpotMaps!==A||B.numLightProbes!==M)&&(i.directional.length=_,i.spot.length=u,i.rectArea.length=y,i.point.length=p,i.hemi.length=v,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=b+A-D,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=M,B.directionalLength=_,B.pointLength=p,B.spotLength=u,B.rectAreaLength=y,B.hemiLength=v,B.numDirectionalShadows=S,B.numPointShadows=P,B.numSpotShadows=b,B.numSpotMaps=A,B.numLightProbes=M,i.version=Jf++)}function l(h,d){let f=0,m=0,g=0,_=0,p=0;const u=d.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const S=h[y];if(S.isDirectionalLight){const P=i.directional[f];P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(u),f++}else if(S.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(u),g++}else if(S.isRectAreaLight){const P=i.rectArea[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const P=i.point[m];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(u),m++}else if(S.isHemisphereLight){const P=i.hemi[p];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:i}}function jo(s,t){const e=new $f(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Qf(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new jo(s,t),e.set(r,[c])):a>=o.length?(c=new jo(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class tp extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ep extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const np=`void main() {
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
}`;function sp(s,t,e){let n=new _r;const i=new Ct,r=new Ct,a=new ce,o=new tp({depthPacking:Bc}),c=new ep,l={},h=e.maxTextureSize,d={[wn]:Ue,[Ue]:wn,[Ee]:Ee},f=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:np,fragmentShader:ip}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ne;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new R(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oa;let u=this.type;this.render=function(b,A,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const M=s.getRenderTarget(),w=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),F=s.state;F.setBlending(xn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const rt=u!==cn&&this.type===cn,L=u===cn&&this.type!==cn;for(let N=0,Y=b.length;N<Y;N++){const $=b[N],J=$.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;i.copy(J.mapSize);const Z=J.getFrameExtents();if(i.multiply(Z),r.copy(J.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Z.x),i.x=r.x*Z.x,J.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Z.y),i.y=r.y*Z.y,J.mapSize.y=r.y)),J.map===null||rt===!0||L===!0){const nt=this.type!==cn?{minFilter:De,magFilter:De}:{};J.map!==null&&J.map.dispose(),J.map=new Bn(i.x,i.y,nt),J.map.texture.name=$.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const tt=J.getViewportCount();for(let nt=0;nt<tt;nt++){const ot=J.getViewport(nt);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),F.viewport(a),J.updateMatrices($,nt),n=J.getFrustum(),S(A,D,J.camera,$,this.type)}J.isPointLightShadow!==!0&&this.type===cn&&y(J,D),J.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(M,w,B)};function y(b,A){const D=t.update(_);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,m.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Bn(i.x,i.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(A,null,D,f,_,null),m.uniforms.shadow_pass.value=b.mapPass.texture,m.uniforms.resolution.value=b.mapSize,m.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(A,null,D,m,_,null)}function v(b,A,D,M){let w=null;const B=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(B!==void 0)w=B;else if(w=D.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=w.uuid,rt=A.uuid;let L=l[F];L===void 0&&(L={},l[F]=L);let N=L[rt];N===void 0&&(N=w.clone(),L[rt]=N,A.addEventListener("dispose",P)),w=N}if(w.visible=A.visible,w.wireframe=A.wireframe,M===cn?w.side=A.shadowSide!==null?A.shadowSide:A.side:w.side=A.shadowSide!==null?A.shadowSide:d[A.side],w.alphaMap=A.alphaMap,w.alphaTest=A.alphaTest,w.map=A.map,w.clipShadows=A.clipShadows,w.clippingPlanes=A.clippingPlanes,w.clipIntersection=A.clipIntersection,w.displacementMap=A.displacementMap,w.displacementScale=A.displacementScale,w.displacementBias=A.displacementBias,w.wireframeLinewidth=A.wireframeLinewidth,w.linewidth=A.linewidth,D.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const F=s.properties.get(w);F.light=D}return w}function S(b,A,D,M,w){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&w===cn)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const rt=t.update(b),L=b.material;if(Array.isArray(L)){const N=rt.groups;for(let Y=0,$=N.length;Y<$;Y++){const J=N[Y],Z=L[J.materialIndex];if(Z&&Z.visible){const tt=v(b,Z,M,w);b.onBeforeShadow(s,b,A,D,rt,tt,J),s.renderBufferDirect(D,null,rt,tt,b,J),b.onAfterShadow(s,b,A,D,rt,tt,J)}}}else if(L.visible){const N=v(b,L,M,w);b.onBeforeShadow(s,b,A,D,rt,N,null),s.renderBufferDirect(D,null,rt,N,b,null),b.onAfterShadow(s,b,A,D,rt,N,null)}}const F=b.children;for(let rt=0,L=F.length;rt<L;rt++)S(F[rt],A,D,M,w)}function P(b){b.target.removeEventListener("dispose",P);for(const D in l){const M=l[D],w=b.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}function rp(s,t,e){const n=e.isWebGL2;function i(){let I=!1;const _t=new ce;let vt=null;const kt=new ce(0,0,0,0);return{setMask:function(Bt){vt!==Bt&&!I&&(s.colorMask(Bt,Bt,Bt,Bt),vt=Bt)},setLocked:function(Bt){I=Bt},setClear:function(Bt,ie,se,Me,Ce){Ce===!0&&(Bt*=Me,ie*=Me,se*=Me),_t.set(Bt,ie,se,Me),kt.equals(_t)===!1&&(s.clearColor(Bt,ie,se,Me),kt.copy(_t))},reset:function(){I=!1,vt=null,kt.set(-1,0,0,0)}}}function r(){let I=!1,_t=null,vt=null,kt=null;return{setTest:function(Bt){Bt?Rt(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(Bt){_t!==Bt&&!I&&(s.depthMask(Bt),_t=Bt)},setFunc:function(Bt){if(vt!==Bt){switch(Bt){case pc:s.depthFunc(s.NEVER);break;case mc:s.depthFunc(s.ALWAYS);break;case gc:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case _c:s.depthFunc(s.EQUAL);break;case vc:s.depthFunc(s.GEQUAL);break;case Mc:s.depthFunc(s.GREATER);break;case xc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}vt=Bt}},setLocked:function(Bt){I=Bt},setClear:function(Bt){kt!==Bt&&(s.clearDepth(Bt),kt=Bt)},reset:function(){I=!1,_t=null,vt=null,kt=null}}}function a(){let I=!1,_t=null,vt=null,kt=null,Bt=null,ie=null,se=null,Me=null,Ce=null;return{setTest:function(re){I||(re?Rt(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(re){_t!==re&&!I&&(s.stencilMask(re),_t=re)},setFunc:function(re,Pe,$e){(vt!==re||kt!==Pe||Bt!==$e)&&(s.stencilFunc(re,Pe,$e),vt=re,kt=Pe,Bt=$e)},setOp:function(re,Pe,$e){(ie!==re||se!==Pe||Me!==$e)&&(s.stencilOp(re,Pe,$e),ie=re,se=Pe,Me=$e)},setLocked:function(re){I=re},setClear:function(re){Ce!==re&&(s.clearStencil(re),Ce=re)},reset:function(){I=!1,_t=null,vt=null,kt=null,Bt=null,ie=null,se=null,Me=null,Ce=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,_=[],p=null,u=!1,y=null,v=null,S=null,P=null,b=null,A=null,D=null,M=new Zt(0,0,0),w=0,B=!1,F=null,rt=null,L=null,N=null,Y=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,Z=0;const tt=s.getParameter(s.VERSION);tt.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(tt)[1]),J=Z>=1):tt.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(tt)[1]),J=Z>=2);let nt=null,ot={};const G=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),lt=new ce().fromArray(G),Mt=new ce().fromArray(et);function ut(I,_t,vt,kt){const Bt=new Uint8Array(4),ie=s.createTexture();s.bindTexture(I,ie),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let se=0;se<vt;se++)n&&(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)?s.texImage3D(_t,0,s.RGBA,1,1,kt,0,s.RGBA,s.UNSIGNED_BYTE,Bt):s.texImage2D(_t+se,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Bt);return ie}const Pt={};Pt[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),Pt[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Pt[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Pt[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Rt(s.DEPTH_TEST),c.setFunc(os),Ut(!1),T(Lr),Rt(s.CULL_FACE),Et(xn);function Rt(I){f[I]!==!0&&(s.enable(I),f[I]=!0)}function Tt(I){f[I]!==!1&&(s.disable(I),f[I]=!1)}function Nt(I,_t){return m[I]!==_t?(s.bindFramebuffer(I,_t),m[I]=_t,n&&(I===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=_t),I===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=_t)),!0):!1}function z(I,_t){let vt=_,kt=!1;if(I)if(vt=g.get(_t),vt===void 0&&(vt=[],g.set(_t,vt)),I.isWebGLMultipleRenderTargets){const Bt=I.texture;if(vt.length!==Bt.length||vt[0]!==s.COLOR_ATTACHMENT0){for(let ie=0,se=Bt.length;ie<se;ie++)vt[ie]=s.COLOR_ATTACHMENT0+ie;vt.length=Bt.length,kt=!0}}else vt[0]!==s.COLOR_ATTACHMENT0&&(vt[0]=s.COLOR_ATTACHMENT0,kt=!0);else vt[0]!==s.BACK&&(vt[0]=s.BACK,kt=!0);kt&&(e.isWebGL2?s.drawBuffers(vt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(vt))}function $t(I){return p!==I?(s.useProgram(I),p=I,!0):!1}const yt={[In]:s.FUNC_ADD,[Qa]:s.FUNC_SUBTRACT,[tc]:s.FUNC_REVERSE_SUBTRACT};if(n)yt[Nr]=s.MIN,yt[Or]=s.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(yt[Nr]=I.MIN_EXT,yt[Or]=I.MAX_EXT)}const wt={[ec]:s.ZERO,[nc]:s.ONE,[ic]:s.SRC_COLOR,[rr]:s.SRC_ALPHA,[lc]:s.SRC_ALPHA_SATURATE,[ac]:s.DST_COLOR,[rc]:s.DST_ALPHA,[sc]:s.ONE_MINUS_SRC_COLOR,[or]:s.ONE_MINUS_SRC_ALPHA,[cc]:s.ONE_MINUS_DST_COLOR,[oc]:s.ONE_MINUS_DST_ALPHA,[hc]:s.CONSTANT_COLOR,[uc]:s.ONE_MINUS_CONSTANT_COLOR,[dc]:s.CONSTANT_ALPHA,[fc]:s.ONE_MINUS_CONSTANT_ALPHA};function Et(I,_t,vt,kt,Bt,ie,se,Me,Ce,re){if(I===xn){u===!0&&(Tt(s.BLEND),u=!1);return}if(u===!1&&(Rt(s.BLEND),u=!0),I!==$a){if(I!==y||re!==B){if((v!==In||b!==In)&&(s.blendEquation(s.FUNC_ADD),v=In,b=In),re)switch(I){case ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ir:s.blendFunc(s.ONE,s.ONE);break;case Dr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ur:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ir:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Dr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ur:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,P=null,A=null,D=null,M.set(0,0,0),w=0,y=I,B=re}return}Bt=Bt||_t,ie=ie||vt,se=se||kt,(_t!==v||Bt!==b)&&(s.blendEquationSeparate(yt[_t],yt[Bt]),v=_t,b=Bt),(vt!==S||kt!==P||ie!==A||se!==D)&&(s.blendFuncSeparate(wt[vt],wt[kt],wt[ie],wt[se]),S=vt,P=kt,A=ie,D=se),(Me.equals(M)===!1||Ce!==w)&&(s.blendColor(Me.r,Me.g,Me.b,Ce),M.copy(Me),w=Ce),y=I,B=!1}function Qt(I,_t){I.side===Ee?Tt(s.CULL_FACE):Rt(s.CULL_FACE);let vt=I.side===Ue;_t&&(vt=!vt),Ut(vt),I.blending===ri&&I.transparent===!1?Et(xn):Et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const kt=I.stencilWrite;l.setTest(kt),kt&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),V(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(I){F!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),F=I)}function T(I){I!==Ja?(Rt(s.CULL_FACE),I!==rt&&(I===Lr?s.cullFace(s.BACK):I===ja?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),rt=I}function x(I){I!==L&&(J&&s.lineWidth(I),L=I)}function V(I,_t,vt){I?(Rt(s.POLYGON_OFFSET_FILL),(N!==_t||Y!==vt)&&(s.polygonOffset(_t,vt),N=_t,Y=vt)):Tt(s.POLYGON_OFFSET_FILL)}function k(I){I?Rt(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function H(I){I===void 0&&(I=s.TEXTURE0+$-1),nt!==I&&(s.activeTexture(I),nt=I)}function X(I,_t,vt){vt===void 0&&(nt===null?vt=s.TEXTURE0+$-1:vt=nt);let kt=ot[vt];kt===void 0&&(kt={type:void 0,texture:void 0},ot[vt]=kt),(kt.type!==I||kt.texture!==_t)&&(nt!==vt&&(s.activeTexture(vt),nt=vt),s.bindTexture(I,_t||Pt[I]),kt.type=I,kt.texture=_t)}function gt(){const I=ot[nt];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function At(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Jt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function zt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function U(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(I){lt.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),lt.copy(I))}function pt(I){Mt.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),Mt.copy(I))}function Lt(I,_t){let vt=d.get(_t);vt===void 0&&(vt=new WeakMap,d.set(_t,vt));let kt=vt.get(I);kt===void 0&&(kt=s.getUniformBlockIndex(_t,I.name),vt.set(I,kt))}function Ft(I,_t){const kt=d.get(_t).get(I);h.get(_t)!==kt&&(s.uniformBlockBinding(_t,kt,I.__bindingPointIndex),h.set(_t,kt))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},nt=null,ot={},m={},g=new WeakMap,_=[],p=null,u=!1,y=null,v=null,S=null,P=null,b=null,A=null,D=null,M=new Zt(0,0,0),w=0,B=!1,F=null,rt=null,L=null,N=null,Y=null,lt.set(0,0,s.canvas.width,s.canvas.height),Mt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Rt,disable:Tt,bindFramebuffer:Nt,drawBuffers:z,useProgram:$t,setBlending:Et,setMaterial:Qt,setFlipSided:Ut,setCullFace:T,setLineWidth:x,setPolygonOffset:V,setScissorTest:k,activeTexture:H,bindTexture:X,unbindTexture:gt,compressedTexImage2D:ct,compressedTexImage3D:mt,texImage2D:dt,texImage3D:U,updateUBOMapping:Lt,uniformBlockBinding:Ft,texStorage2D:zt,texStorage3D:it,texSubImage2D:At,texSubImage3D:Ot,compressedTexSubImage2D:at,compressedTexSubImage3D:Jt,scissor:j,viewport:pt,reset:ht}}function op(s,t,e,n,i,r,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return m?new OffscreenCanvas(T,x):ds("canvas")}function _(T,x,V,k){let H=1;if((T.width>k||T.height>k)&&(H=k/Math.max(T.width,T.height)),H<1||x===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const X=x?us:Math.floor,gt=X(H*T.width),ct=X(H*T.height);d===void 0&&(d=g(gt,ct));const mt=V?g(gt,ct):d;return mt.width=gt,mt.height=ct,mt.getContext("2d").drawImage(T,0,0,gt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+gt+"x"+ct+")."),mt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function p(T){return ur(T.width)&&ur(T.height)}function u(T){return o?!1:T.wrapS!==Ze||T.wrapT!==Ze||T.minFilter!==De&&T.minFilter!==He}function y(T,x){return T.generateMipmaps&&x&&T.minFilter!==De&&T.minFilter!==He}function v(T){s.generateMipmap(T)}function S(T,x,V,k,H=!1){if(o===!1)return x;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=x;if(x===s.RED&&(V===s.FLOAT&&(X=s.R32F),V===s.HALF_FLOAT&&(X=s.R16F),V===s.UNSIGNED_BYTE&&(X=s.R8)),x===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(X=s.R8UI),V===s.UNSIGNED_SHORT&&(X=s.R16UI),V===s.UNSIGNED_INT&&(X=s.R32UI),V===s.BYTE&&(X=s.R8I),V===s.SHORT&&(X=s.R16I),V===s.INT&&(X=s.R32I)),x===s.RG&&(V===s.FLOAT&&(X=s.RG32F),V===s.HALF_FLOAT&&(X=s.RG16F),V===s.UNSIGNED_BYTE&&(X=s.RG8)),x===s.RGBA){const gt=H?as:ee.getTransfer(k);V===s.FLOAT&&(X=s.RGBA32F),V===s.HALF_FLOAT&&(X=s.RGBA16F),V===s.UNSIGNED_BYTE&&(X=gt===ae?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function P(T,x,V){return y(T,V)===!0||T.isFramebufferTexture&&T.minFilter!==De&&T.minFilter!==He?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function b(T){return T===De||T===Fr||T===Es?s.NEAREST:s.LINEAR}function A(T){const x=T.target;x.removeEventListener("dispose",A),M(x),x.isVideoTexture&&h.delete(x)}function D(T){const x=T.target;x.removeEventListener("dispose",D),B(x)}function M(T){const x=n.get(T);if(x.__webglInit===void 0)return;const V=T.source,k=f.get(V);if(k){const H=k[x.__cacheKey];H.usedTimes--,H.usedTimes===0&&w(T),Object.keys(k).length===0&&f.delete(V)}n.remove(T)}function w(T){const x=n.get(T);s.deleteTexture(x.__webglTexture);const V=T.source,k=f.get(V);delete k[x.__cacheKey],a.memory.textures--}function B(T){const x=T.texture,V=n.get(T),k=n.get(x);if(k.__webglTexture!==void 0&&(s.deleteTexture(k.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(V.__webglFramebuffer[H]))for(let X=0;X<V.__webglFramebuffer[H].length;X++)s.deleteFramebuffer(V.__webglFramebuffer[H][X]);else s.deleteFramebuffer(V.__webglFramebuffer[H]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[H])}else{if(Array.isArray(V.__webglFramebuffer))for(let H=0;H<V.__webglFramebuffer.length;H++)s.deleteFramebuffer(V.__webglFramebuffer[H]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let H=0;H<V.__webglColorRenderbuffer.length;H++)V.__webglColorRenderbuffer[H]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[H]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let H=0,X=x.length;H<X;H++){const gt=n.get(x[H]);gt.__webglTexture&&(s.deleteTexture(gt.__webglTexture),a.memory.textures--),n.remove(x[H])}n.remove(x),n.remove(T)}let F=0;function rt(){F=0}function L(){const T=F;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),F+=1,T}function N(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function Y(T,x){const V=n.get(T);if(T.isVideoTexture&&Qt(T),T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version){const k=T.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(V,T,x);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+x)}function $(T,x){const V=n.get(T);if(T.version>0&&V.__version!==T.version){lt(V,T,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+x)}function J(T,x){const V=n.get(T);if(T.version>0&&V.__version!==T.version){lt(V,T,x);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+x)}function Z(T,x){const V=n.get(T);if(T.version>0&&V.__version!==T.version){Mt(V,T,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+x)}const tt={[je]:s.REPEAT,[Ze]:s.CLAMP_TO_EDGE,[lr]:s.MIRRORED_REPEAT},nt={[De]:s.NEAREST,[Fr]:s.NEAREST_MIPMAP_NEAREST,[Es]:s.NEAREST_MIPMAP_LINEAR,[He]:s.LINEAR,[Rc]:s.LINEAR_MIPMAP_NEAREST,[Ri]:s.LINEAR_MIPMAP_LINEAR},ot={[zc]:s.NEVER,[qc]:s.ALWAYS,[kc]:s.LESS,[xa]:s.LEQUAL,[Vc]:s.EQUAL,[Xc]:s.GEQUAL,[Hc]:s.GREATER,[Wc]:s.NOTEQUAL};function G(T,x,V){if(V?(s.texParameteri(T,s.TEXTURE_WRAP_S,tt[x.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,tt[x.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,tt[x.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,nt[x.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,nt[x.minFilter])):(s.texParameteri(T,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(T,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==Ze||x.wrapT!==Ze)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,s.TEXTURE_MAG_FILTER,b(x.magFilter)),s.texParameteri(T,s.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==De&&x.minFilter!==He&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const k=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===De||x.minFilter!==Es&&x.minFilter!==Ri||x.type===Mn&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===Ci&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function et(T,x){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",A));const k=x.source;let H=f.get(k);H===void 0&&(H={},f.set(k,H));const X=N(x);if(X!==T.__cacheKey){H[X]===void 0&&(H[X]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),H[X].usedTimes++;const gt=H[T.__cacheKey];gt!==void 0&&(H[T.__cacheKey].usedTimes--,gt.usedTimes===0&&w(x)),T.__cacheKey=X,T.__webglTexture=H[X].texture}return V}function lt(T,x,V){let k=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=s.TEXTURE_3D);const H=et(T,x),X=x.source;e.bindTexture(k,T.__webglTexture,s.TEXTURE0+V);const gt=n.get(X);if(X.version!==gt.__version||H===!0){e.activeTexture(s.TEXTURE0+V);const ct=ee.getPrimaries(ee.workingColorSpace),mt=x.colorSpace===We?null:ee.getPrimaries(x.colorSpace),At=x.colorSpace===We||ct===mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ot=u(x)&&p(x.image)===!1;let at=_(x.image,Ot,!1,i.maxTextureSize);at=Ut(x,at);const Jt=p(at)||o,zt=r.convert(x.format,x.colorSpace);let it=r.convert(x.type),dt=S(x.internalFormat,zt,it,x.colorSpace,x.isVideoTexture);G(k,x,Jt);let U;const j=x.mipmaps,pt=o&&x.isVideoTexture!==!0&&dt!==_a,Lt=gt.__version===void 0||H===!0,Ft=P(x,at,Jt);if(x.isDepthTexture)dt=s.DEPTH_COMPONENT,o?x.type===Mn?dt=s.DEPTH_COMPONENT32F:x.type===vn?dt=s.DEPTH_COMPONENT24:x.type===Nn?dt=s.DEPTH24_STENCIL8:dt=s.DEPTH_COMPONENT16:x.type===Mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===On&&dt===s.DEPTH_COMPONENT&&x.type!==pr&&x.type!==vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=vn,it=r.convert(x.type)),x.format===li&&dt===s.DEPTH_COMPONENT&&(dt=s.DEPTH_STENCIL,x.type!==Nn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Nn,it=r.convert(x.type))),Lt&&(pt?e.texStorage2D(s.TEXTURE_2D,1,dt,at.width,at.height):e.texImage2D(s.TEXTURE_2D,0,dt,at.width,at.height,0,zt,it,null));else if(x.isDataTexture)if(j.length>0&&Jt){pt&&Lt&&e.texStorage2D(s.TEXTURE_2D,Ft,dt,j[0].width,j[0].height);for(let ht=0,I=j.length;ht<I;ht++)U=j[ht],pt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,U.width,U.height,zt,it,U.data):e.texImage2D(s.TEXTURE_2D,ht,dt,U.width,U.height,0,zt,it,U.data);x.generateMipmaps=!1}else pt?(Lt&&e.texStorage2D(s.TEXTURE_2D,Ft,dt,at.width,at.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,at.width,at.height,zt,it,at.data)):e.texImage2D(s.TEXTURE_2D,0,dt,at.width,at.height,0,zt,it,at.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){pt&&Lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,dt,j[0].width,j[0].height,at.depth);for(let ht=0,I=j.length;ht<I;ht++)U=j[ht],x.format!==Je?zt!==null?pt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,U.width,U.height,at.depth,zt,U.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,dt,U.width,U.height,at.depth,0,U.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,U.width,U.height,at.depth,zt,it,U.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,dt,U.width,U.height,at.depth,0,zt,it,U.data)}else{pt&&Lt&&e.texStorage2D(s.TEXTURE_2D,Ft,dt,j[0].width,j[0].height);for(let ht=0,I=j.length;ht<I;ht++)U=j[ht],x.format!==Je?zt!==null?pt?e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,U.width,U.height,zt,U.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,dt,U.width,U.height,0,U.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,U.width,U.height,zt,it,U.data):e.texImage2D(s.TEXTURE_2D,ht,dt,U.width,U.height,0,zt,it,U.data)}else if(x.isDataArrayTexture)pt?(Lt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Ft,dt,at.width,at.height,at.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,zt,it,at.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,at.width,at.height,at.depth,0,zt,it,at.data);else if(x.isData3DTexture)pt?(Lt&&e.texStorage3D(s.TEXTURE_3D,Ft,dt,at.width,at.height,at.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,zt,it,at.data)):e.texImage3D(s.TEXTURE_3D,0,dt,at.width,at.height,at.depth,0,zt,it,at.data);else if(x.isFramebufferTexture){if(Lt)if(pt)e.texStorage2D(s.TEXTURE_2D,Ft,dt,at.width,at.height);else{let ht=at.width,I=at.height;for(let _t=0;_t<Ft;_t++)e.texImage2D(s.TEXTURE_2D,_t,dt,ht,I,0,zt,it,null),ht>>=1,I>>=1}}else if(j.length>0&&Jt){pt&&Lt&&e.texStorage2D(s.TEXTURE_2D,Ft,dt,j[0].width,j[0].height);for(let ht=0,I=j.length;ht<I;ht++)U=j[ht],pt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,zt,it,U):e.texImage2D(s.TEXTURE_2D,ht,dt,zt,it,U);x.generateMipmaps=!1}else pt?(Lt&&e.texStorage2D(s.TEXTURE_2D,Ft,dt,at.width,at.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,zt,it,at)):e.texImage2D(s.TEXTURE_2D,0,dt,zt,it,at);y(x,Jt)&&v(k),gt.__version=X.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Mt(T,x,V){if(x.image.length!==6)return;const k=et(T,x),H=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+V);const X=n.get(H);if(H.version!==X.__version||k===!0){e.activeTexture(s.TEXTURE0+V);const gt=ee.getPrimaries(ee.workingColorSpace),ct=x.colorSpace===We?null:ee.getPrimaries(x.colorSpace),mt=x.colorSpace===We||gt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const At=x.isCompressedTexture||x.image[0].isCompressedTexture,Ot=x.image[0]&&x.image[0].isDataTexture,at=[];for(let ht=0;ht<6;ht++)!At&&!Ot?at[ht]=_(x.image[ht],!1,!0,i.maxCubemapSize):at[ht]=Ot?x.image[ht].image:x.image[ht],at[ht]=Ut(x,at[ht]);const Jt=at[0],zt=p(Jt)||o,it=r.convert(x.format,x.colorSpace),dt=r.convert(x.type),U=S(x.internalFormat,it,dt,x.colorSpace),j=o&&x.isVideoTexture!==!0,pt=X.__version===void 0||k===!0;let Lt=P(x,Jt,zt);G(s.TEXTURE_CUBE_MAP,x,zt);let Ft;if(At){j&&pt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,U,Jt.width,Jt.height);for(let ht=0;ht<6;ht++){Ft=at[ht].mipmaps;for(let I=0;I<Ft.length;I++){const _t=Ft[I];x.format!==Je?it!==null?j?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,I,0,0,_t.width,_t.height,it,_t.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,I,U,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,I,0,0,_t.width,_t.height,it,dt,_t.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,I,U,_t.width,_t.height,0,it,dt,_t.data)}}}else{Ft=x.mipmaps,j&&pt&&(Ft.length>0&&Lt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,U,at[0].width,at[0].height));for(let ht=0;ht<6;ht++)if(Ot){j?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,at[ht].width,at[ht].height,it,dt,at[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,U,at[ht].width,at[ht].height,0,it,dt,at[ht].data);for(let I=0;I<Ft.length;I++){const vt=Ft[I].image[ht].image;j?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,I+1,0,0,vt.width,vt.height,it,dt,vt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,I+1,U,vt.width,vt.height,0,it,dt,vt.data)}}else{j?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,it,dt,at[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,U,it,dt,at[ht]);for(let I=0;I<Ft.length;I++){const _t=Ft[I];j?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,I+1,0,0,it,dt,_t.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,I+1,U,it,dt,_t.image[ht])}}}y(x,zt)&&v(s.TEXTURE_CUBE_MAP),X.__version=H.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function ut(T,x,V,k,H,X){const gt=r.convert(V.format,V.colorSpace),ct=r.convert(V.type),mt=S(V.internalFormat,gt,ct,V.colorSpace);if(!n.get(x).__hasExternalTextures){const Ot=Math.max(1,x.width>>X),at=Math.max(1,x.height>>X);H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?e.texImage3D(H,X,mt,Ot,at,x.depth,0,gt,ct,null):e.texImage2D(H,X,mt,Ot,at,0,gt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,T),Et(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,k,H,n.get(V).__webglTexture,0,wt(x)):(H===s.TEXTURE_2D||H>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,k,H,n.get(V).__webglTexture,X),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(T,x,V){if(s.bindRenderbuffer(s.RENDERBUFFER,T),x.depthBuffer&&!x.stencilBuffer){let k=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||Et(x)){const H=x.depthTexture;H&&H.isDepthTexture&&(H.type===Mn?k=s.DEPTH_COMPONENT32F:H.type===vn&&(k=s.DEPTH_COMPONENT24));const X=wt(x);Et(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X,k,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,X,k,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,k,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,T)}else if(x.depthBuffer&&x.stencilBuffer){const k=wt(x);V&&Et(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,k,s.DEPTH24_STENCIL8,x.width,x.height):Et(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,k,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,T)}else{const k=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let H=0;H<k.length;H++){const X=k[H],gt=r.convert(X.format,X.colorSpace),ct=r.convert(X.type),mt=S(X.internalFormat,gt,ct,X.colorSpace),At=wt(x);V&&Et(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,At,mt,x.width,x.height):Et(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,At,mt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,mt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const k=n.get(x.depthTexture).__webglTexture,H=wt(x);if(x.depthTexture.format===On)Et(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,k,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,k,0);else if(x.depthTexture.format===li)Et(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,k,0,H):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function Tt(T){const x=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Rt(x.__webglFramebuffer,T)}else if(V){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]=s.createRenderbuffer(),Pt(x.__webglDepthbuffer[k],T,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Pt(x.__webglDepthbuffer,T,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(T,x,V){const k=n.get(T);x!==void 0&&ut(k.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Tt(T)}function z(T){const x=T.texture,V=n.get(T),k=n.get(x);T.addEventListener("dispose",D),T.isWebGLMultipleRenderTargets!==!0&&(k.__webglTexture===void 0&&(k.__webglTexture=s.createTexture()),k.__version=x.version,a.memory.textures++);const H=T.isWebGLCubeRenderTarget===!0,X=T.isWebGLMultipleRenderTargets===!0,gt=p(T)||o;if(H){V.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(o&&x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[ct]=[];for(let mt=0;mt<x.mipmaps.length;mt++)V.__webglFramebuffer[ct][mt]=s.createFramebuffer()}else V.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)V.__webglFramebuffer[ct]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(X)if(i.drawBuffers){const ct=T.texture;for(let mt=0,At=ct.length;mt<At;mt++){const Ot=n.get(ct[mt]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Et(T)===!1){const ct=X?x:[x];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let mt=0;mt<ct.length;mt++){const At=ct[mt];V.__webglColorRenderbuffer[mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[mt]);const Ot=r.convert(At.format,At.colorSpace),at=r.convert(At.type),Jt=S(At.internalFormat,Ot,at,At.colorSpace,T.isXRRenderTarget===!0),zt=wt(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,zt,Jt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+mt,s.RENDERBUFFER,V.__webglColorRenderbuffer[mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Pt(V.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(H){e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture),G(s.TEXTURE_CUBE_MAP,x,gt);for(let ct=0;ct<6;ct++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)ut(V.__webglFramebuffer[ct][mt],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else ut(V.__webglFramebuffer[ct],T,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);y(x,gt)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(X){const ct=T.texture;for(let mt=0,At=ct.length;mt<At;mt++){const Ot=ct[mt],at=n.get(Ot);e.bindTexture(s.TEXTURE_2D,at.__webglTexture),G(s.TEXTURE_2D,Ot,gt),ut(V.__webglFramebuffer,T,Ot,s.COLOR_ATTACHMENT0+mt,s.TEXTURE_2D,0),y(Ot,gt)&&v(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ct=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,k.__webglTexture),G(ct,x,gt),o&&x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)ut(V.__webglFramebuffer[mt],T,x,s.COLOR_ATTACHMENT0,ct,mt);else ut(V.__webglFramebuffer,T,x,s.COLOR_ATTACHMENT0,ct,0);y(x,gt)&&v(ct),e.unbindTexture()}T.depthBuffer&&Tt(T)}function $t(T){const x=p(T)||o,V=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let k=0,H=V.length;k<H;k++){const X=V[k];if(y(X,x)){const gt=T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ct=n.get(X).__webglTexture;e.bindTexture(gt,ct),v(gt),e.unbindTexture()}}}function yt(T){if(o&&T.samples>0&&Et(T)===!1){const x=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],V=T.width,k=T.height;let H=s.COLOR_BUFFER_BIT;const X=[],gt=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(T),mt=T.isWebGLMultipleRenderTargets===!0;if(mt)for(let At=0;At<x.length;At++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let At=0;At<x.length;At++){X.push(s.COLOR_ATTACHMENT0+At),T.depthBuffer&&X.push(gt);const Ot=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ot===!1&&(T.depthBuffer&&(H|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&(H|=s.STENCIL_BUFFER_BIT)),mt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[At]),Ot===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[gt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[gt])),mt){const at=n.get(x[At]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,at,0)}s.blitFramebuffer(0,0,V,k,0,0,V,k,H,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,X)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),mt)for(let At=0;At<x.length;At++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,ct.__webglColorRenderbuffer[At]);const Ot=n.get(x[At]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,Ot,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function wt(T){return Math.min(i.maxSamples,T.samples)}function Et(T){const x=n.get(T);return o&&T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Qt(T){const x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Ut(T,x){const V=T.colorSpace,k=T.format,H=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===hr||V!==hn&&V!==We&&(ee.getTransfer(V)===ae?o===!1?t.has("EXT_sRGB")===!0&&k===Je?(T.format=hr,T.minFilter=He,T.generateMipmaps=!1):x=ya.sRGBToLinear(x):(k!==Je||H!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}this.allocateTextureUnit=L,this.resetTextureUnits=rt,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=J,this.setTextureCube=Z,this.rebindTextures=Nt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Et}function ap(s,t,e){const n=e.isWebGL2;function i(r,a=We){let o;const c=ee.getTransfer(a);if(r===yn)return s.UNSIGNED_BYTE;if(r===da)return s.UNSIGNED_SHORT_4_4_4_4;if(r===fa)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Cc)return s.BYTE;if(r===Pc)return s.SHORT;if(r===pr)return s.UNSIGNED_SHORT;if(r===ua)return s.INT;if(r===vn)return s.UNSIGNED_INT;if(r===Mn)return s.FLOAT;if(r===Ci)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Lc)return s.ALPHA;if(r===Je)return s.RGBA;if(r===Ic)return s.LUMINANCE;if(r===Dc)return s.LUMINANCE_ALPHA;if(r===On)return s.DEPTH_COMPONENT;if(r===li)return s.DEPTH_STENCIL;if(r===hr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Uc)return s.RED;if(r===pa)return s.RED_INTEGER;if(r===Nc)return s.RG;if(r===ma)return s.RG_INTEGER;if(r===ga)return s.RGBA_INTEGER;if(r===Ts||r===bs||r===As||r===Rs)if(c===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ts)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ts)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===As)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Rs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Br||r===Gr||r===zr||r===kr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Br)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===_a)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vr||r===Hr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Vr)return c===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Hr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wr||r===Xr||r===qr||r===Yr||r===Kr||r===Zr||r===Jr||r===jr||r===$r||r===Qr||r===to||r===eo||r===no||r===io)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Wr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===jr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$r)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Qr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===to)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===eo)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===no)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===io)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cs||r===so||r===ro)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Cs)return c===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===so)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ro)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oc||r===oo||r===ao||r===co)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Cs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===oo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ao)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===co)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Nn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class cp extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class bt extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lp={type:"move"};class $s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),u=this._getHandJoint(l,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&f>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class hp extends di{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,f=null,m=null,g=null;const _=e.getContextAttributes();let p=null,u=null;const y=[],v=[],S=new Ct;let P=null;const b=new Oe;b.layers.enable(1),b.viewport=new ce;const A=new Oe;A.layers.enable(2),A.viewport=new ce;const D=[b,A],M=new cp;M.layers.enable(1),M.layers.enable(2);let w=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let et=y[G];return et===void 0&&(et=new $s,y[G]=et),et.getTargetRaySpace()},this.getControllerGrip=function(G){let et=y[G];return et===void 0&&(et=new $s,y[G]=et),et.getGripSpace()},this.getHand=function(G){let et=y[G];return et===void 0&&(et=new $s,y[G]=et),et.getHandSpace()};function F(G){const et=v.indexOf(G.inputSource);if(et===-1)return;const lt=y[et];lt!==void 0&&(lt.update(G.inputSource,G.frame,l||a),lt.dispatchEvent({type:G.type,data:G.inputSource}))}function rt(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",rt),i.removeEventListener("inputsourceschange",L);for(let G=0;G<y.length;G++){const et=v[G];et!==null&&(v[G]=null,y[G].disconnect(et))}w=null,B=null,t.setRenderTarget(p),m=null,f=null,d=null,i=null,u=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(G){if(i=G,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",rt),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Bn(m.framebufferWidth,m.framebufferHeight,{format:Je,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let et=null,lt=null,Mt=null;_.depth&&(Mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?li:On,lt=_.stencil?Nn:vn);const ut={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};d=new XRWebGLBinding(i,e),f=d.createProjectionLayer(ut),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),u=new Bn(f.textureWidth,f.textureHeight,{format:Je,type:yn,depthTexture:new Na(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});const Pt=t.properties.get(u);Pt.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(G){for(let et=0;et<G.removed.length;et++){const lt=G.removed[et],Mt=v.indexOf(lt);Mt>=0&&(v[Mt]=null,y[Mt].disconnect(lt))}for(let et=0;et<G.added.length;et++){const lt=G.added[et];let Mt=v.indexOf(lt);if(Mt===-1){for(let Pt=0;Pt<y.length;Pt++)if(Pt>=v.length){v.push(lt),Mt=Pt;break}else if(v[Pt]===null){v[Pt]=lt,Mt=Pt;break}if(Mt===-1)break}const ut=y[Mt];ut&&ut.connect(lt)}}const N=new C,Y=new C;function $(G,et,lt){N.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(lt.matrixWorld);const Mt=N.distanceTo(Y),ut=et.projectionMatrix.elements,Pt=lt.projectionMatrix.elements,Rt=ut[14]/(ut[10]-1),Tt=ut[14]/(ut[10]+1),Nt=(ut[9]+1)/ut[5],z=(ut[9]-1)/ut[5],$t=(ut[8]-1)/ut[0],yt=(Pt[8]+1)/Pt[0],wt=Rt*$t,Et=Rt*yt,Qt=Mt/(-$t+yt),Ut=Qt*-$t;et.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ut),G.translateZ(Qt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const T=Rt+Qt,x=Tt+Qt,V=wt-Ut,k=Et+(Mt-Ut),H=Nt*Tt/x*T,X=z*Tt/x*T;G.projectionMatrix.makePerspective(V,k,H,X,T,x),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function J(G,et){et===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(et.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(i===null)return;M.near=A.near=b.near=G.near,M.far=A.far=b.far=G.far,(w!==M.near||B!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),w=M.near,B=M.far);const et=G.parent,lt=M.cameras;J(M,et);for(let Mt=0;Mt<lt.length;Mt++)J(lt[Mt],et);lt.length===2?$(M,b,A):M.projectionMatrix.copy(b.projectionMatrix),Z(G,M,et)};function Z(G,et,lt){lt===null?G.matrix.copy(et.matrixWorld):(G.matrix.copy(lt.matrixWorld),G.matrix.invert(),G.matrix.multiply(et.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(et.projectionMatrix),G.projectionMatrixInverse.copy(et.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=hi*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(G){c=G,f!==null&&(f.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)};let tt=null;function nt(G,et){if(h=et.getViewerPose(l||a),g=et,h!==null){const lt=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let Mt=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,Mt=!0);for(let ut=0;ut<lt.length;ut++){const Pt=lt[ut];let Rt=null;if(m!==null)Rt=m.getViewport(Pt);else{const Nt=d.getViewSubImage(f,Pt);Rt=Nt.viewport,ut===0&&(t.setRenderTargetTextures(u,Nt.colorTexture,f.ignoreDepthValues?void 0:Nt.depthStencilTexture),t.setRenderTarget(u))}let Tt=D[ut];Tt===void 0&&(Tt=new Oe,Tt.layers.enable(ut),Tt.viewport=new ce,D[ut]=Tt),Tt.matrix.fromArray(Pt.transform.matrix),Tt.matrix.decompose(Tt.position,Tt.quaternion,Tt.scale),Tt.projectionMatrix.fromArray(Pt.projectionMatrix),Tt.projectionMatrixInverse.copy(Tt.projectionMatrix).invert(),Tt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ut===0&&(M.matrix.copy(Tt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Mt===!0&&M.cameras.push(Tt)}}for(let lt=0;lt<y.length;lt++){const Mt=v[lt],ut=y[lt];Mt!==null&&ut!==void 0&&ut.update(Mt,et,l||a)}tt&&tt(G,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const ot=new Da;ot.setAnimationLoop(nt),this.setAnimationLoop=function(G){tt=G},this.dispose=function(){}}}function up(s,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,Pa(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,y,v,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),d(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,S)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,y,v):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ue&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ue&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const y=t.get(u).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const v=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*v,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,y,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=v*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function d(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ue&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const y=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dp(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function l(y,v){let S=i[y.id];S===void 0&&(g(y),S=h(y),i[y.id]=S,y.addEventListener("dispose",p));const P=v.program;n.updateUBOMapping(y,P);const b=t.render.frame;r[y.id]!==b&&(f(y),r[y.id]=b)}function h(y){const v=d();y.__bindingPointIndex=v;const S=s.createBuffer(),P=y.__size,b=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,P,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,v,S),S}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const v=i[y.id],S=y.uniforms,P=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,v);for(let b=0,A=S.length;b<A;b++){const D=Array.isArray(S[b])?S[b]:[S[b]];for(let M=0,w=D.length;M<w;M++){const B=D[M];if(m(B,b,M,P)===!0){const F=B.__offset,rt=Array.isArray(B.value)?B.value:[B.value];let L=0;for(let N=0;N<rt.length;N++){const Y=rt[N],$=_(Y);typeof Y=="number"||typeof Y=="boolean"?(B.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,F+L,B.__data)):Y.isMatrix3?(B.__data[0]=Y.elements[0],B.__data[1]=Y.elements[1],B.__data[2]=Y.elements[2],B.__data[3]=0,B.__data[4]=Y.elements[3],B.__data[5]=Y.elements[4],B.__data[6]=Y.elements[5],B.__data[7]=0,B.__data[8]=Y.elements[6],B.__data[9]=Y.elements[7],B.__data[10]=Y.elements[8],B.__data[11]=0):(Y.toArray(B.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,v,S,P){const b=y.value,A=v+"_"+S;if(P[A]===void 0)return typeof b=="number"||typeof b=="boolean"?P[A]=b:P[A]=b.clone(),!0;{const D=P[A];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return P[A]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(y){const v=y.uniforms;let S=0;const P=16;for(let A=0,D=v.length;A<D;A++){const M=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,B=M.length;w<B;w++){const F=M[w],rt=Array.isArray(F.value)?F.value:[F.value];for(let L=0,N=rt.length;L<N;L++){const Y=rt[L],$=_(Y),J=S%P;J!==0&&P-J<$.boundary&&(S+=P-J),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=$.storage}}}const b=S%P;return b>0&&(S+=P-b),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[v.id]),delete i[v.id],delete r[v.id]}function u(){for(const y in i)s.deleteBuffer(i[y]);a=[],i={},r={}}return{bind:c,update:l,dispose:u}}class ka{constructor(t={}){const{canvas:e=al(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=we,this._useLegacyLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const v=this;let S=!1,P=0,b=0,A=null,D=-1,M=null;const w=new ce,B=new ce;let F=null;const rt=new Zt(0);let L=0,N=e.width,Y=e.height,$=1,J=null,Z=null;const tt=new ce(0,0,N,Y),nt=new ce(0,0,N,Y);let ot=!1;const G=new _r;let et=!1,lt=!1,Mt=null;const ut=new de,Pt=new Ct,Rt=new C,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Nt(){return A===null?$:1}let z=n;function $t(E,O){for(let q=0;q<E.length;q++){const K=E[q],W=e.getContext(K,O);if(W!==null)return W}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fr}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",_t,!1),z===null){const O=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&O.shift(),z=$t(O,E),z===null)throw $t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let yt,wt,Et,Qt,Ut,T,x,V,k,H,X,gt,ct,mt,At,Ot,at,Jt,zt,it,dt,U,j,pt;function Lt(){yt=new Sd(z),wt=new md(z,yt,t),yt.init(wt),U=new ap(z,yt,wt),Et=new rp(z,yt,wt),Qt=new Ed(z),Ut=new Xf,T=new op(z,yt,Et,Ut,wt,U,Qt),x=new _d(v),V=new xd(v),k=new Il(z,wt),j=new fd(z,yt,k,wt),H=new yd(z,k,Qt,j),X=new Rd(z,H,k,Qt),zt=new Ad(z,wt,T),Ot=new gd(Ut),gt=new Wf(v,x,V,yt,wt,j,Ot),ct=new up(v,Ut),mt=new Yf,At=new Qf(yt,wt),Jt=new dd(v,x,V,Et,X,f,c),at=new sp(v,X,wt),pt=new dp(z,Qt,wt,Et),it=new pd(z,yt,Qt,wt),dt=new wd(z,yt,Qt,wt),Qt.programs=gt.programs,v.capabilities=wt,v.extensions=yt,v.properties=Ut,v.renderLists=mt,v.shadowMap=at,v.state=Et,v.info=Qt}Lt();const Ft=new hp(v,z);this.xr=Ft,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=yt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=yt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(N,Y,!1))},this.getSize=function(E){return E.set(N,Y)},this.setSize=function(E,O,q=!0){if(Ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,Y=O,e.width=Math.floor(E*$),e.height=Math.floor(O*$),q===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(N*$,Y*$).floor()},this.setDrawingBufferSize=function(E,O,q){N=E,Y=O,$=q,e.width=Math.floor(E*q),e.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(w)},this.getViewport=function(E){return E.copy(tt)},this.setViewport=function(E,O,q,K){E.isVector4?tt.set(E.x,E.y,E.z,E.w):tt.set(E,O,q,K),Et.viewport(w.copy(tt).multiplyScalar($).floor())},this.getScissor=function(E){return E.copy(nt)},this.setScissor=function(E,O,q,K){E.isVector4?nt.set(E.x,E.y,E.z,E.w):nt.set(E,O,q,K),Et.scissor(B.copy(nt).multiplyScalar($).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){Et.setScissorTest(ot=E)},this.setOpaqueSort=function(E){J=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(E=!0,O=!0,q=!0){let K=0;if(E){let W=!1;if(A!==null){const St=A.texture.format;W=St===ga||St===ma||St===pa}if(W){const St=A.texture.type,It=St===yn||St===vn||St===pr||St===Nn||St===da||St===fa,Gt=Jt.getClearColor(),Vt=Jt.getClearAlpha(),qt=Gt.r,Ht=Gt.g,Wt=Gt.b;It?(m[0]=qt,m[1]=Ht,m[2]=Wt,m[3]=Vt,z.clearBufferuiv(z.COLOR,0,m)):(g[0]=qt,g[1]=Ht,g[2]=Wt,g[3]=Vt,z.clearBufferiv(z.COLOR,0,g))}else K|=z.COLOR_BUFFER_BIT}O&&(K|=z.DEPTH_BUFFER_BIT),q&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",_t,!1),mt.dispose(),At.dispose(),Ut.dispose(),x.dispose(),V.dispose(),X.dispose(),j.dispose(),pt.dispose(),gt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Ce),Ft.removeEventListener("sessionend",re),Mt&&(Mt.dispose(),Mt=null),Pe.stop()};function ht(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=Qt.autoReset,O=at.enabled,q=at.autoUpdate,K=at.needsUpdate,W=at.type;Lt(),Qt.autoReset=E,at.enabled=O,at.autoUpdate=q,at.needsUpdate=K,at.type=W}function _t(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function vt(E){const O=E.target;O.removeEventListener("dispose",vt),kt(O)}function kt(E){Bt(E),Ut.remove(E)}function Bt(E){const O=Ut.get(E).programs;O!==void 0&&(O.forEach(function(q){gt.releaseProgram(q)}),E.isShaderMaterial&&gt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,K,W,St){O===null&&(O=Tt);const It=W.isMesh&&W.matrixWorld.determinant()<0,Gt=qa(E,O,q,K,W);Et.setMaterial(K,It);let Vt=q.index,qt=1;if(K.wireframe===!0){if(Vt=H.getWireframeAttribute(q),Vt===void 0)return;qt=2}const Ht=q.drawRange,Wt=q.attributes.position;let fe=Ht.start*qt,Be=(Ht.start+Ht.count)*qt;St!==null&&(fe=Math.max(fe,St.start*qt),Be=Math.min(Be,(St.start+St.count)*qt)),Vt!==null?(fe=Math.max(fe,0),Be=Math.min(Be,Vt.count)):Wt!=null&&(fe=Math.max(fe,0),Be=Math.min(Be,Wt.count));const xe=Be-fe;if(xe<0||xe===1/0)return;j.setup(W,K,Gt,q,Vt);let en,le=it;if(Vt!==null&&(en=k.get(Vt),le=dt,le.setIndex(en)),W.isMesh)K.wireframe===!0?(Et.setLineWidth(K.wireframeLinewidth*Nt()),le.setMode(z.LINES)):le.setMode(z.TRIANGLES);else if(W.isLine){let Yt=K.linewidth;Yt===void 0&&(Yt=1),Et.setLineWidth(Yt*Nt()),W.isLineSegments?le.setMode(z.LINES):W.isLineLoop?le.setMode(z.LINE_LOOP):le.setMode(z.LINE_STRIP)}else W.isPoints?le.setMode(z.POINTS):W.isSprite&&le.setMode(z.TRIANGLES);if(W.isBatchedMesh)le.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else if(W.isInstancedMesh)le.renderInstances(fe,xe,W.count);else if(q.isInstancedBufferGeometry){const Yt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,xs=Math.min(q.instanceCount,Yt);le.renderInstances(fe,xe,xs)}else le.render(fe,xe)};function ie(E,O,q){E.transparent===!0&&E.side===Ee&&E.forceSinglePass===!1?(E.side=Ue,E.needsUpdate=!0,Ui(E,O,q),E.side=wn,E.needsUpdate=!0,Ui(E,O,q),E.side=Ee):Ui(E,O,q)}this.compile=function(E,O,q=null){q===null&&(q=E),p=At.get(q),p.init(),y.push(p),q.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),E!==q&&E.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(v._useLegacyLights);const K=new Set;return E.traverse(function(W){const St=W.material;if(St)if(Array.isArray(St))for(let It=0;It<St.length;It++){const Gt=St[It];ie(Gt,q,W),K.add(Gt)}else ie(St,q,W),K.add(St)}),y.pop(),p=null,K},this.compileAsync=function(E,O,q=null){const K=this.compile(E,O,q);return new Promise(W=>{function St(){if(K.forEach(function(It){Ut.get(It).currentProgram.isReady()&&K.delete(It)}),K.size===0){W(E);return}setTimeout(St,10)}yt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let se=null;function Me(E){se&&se(E)}function Ce(){Pe.stop()}function re(){Pe.start()}const Pe=new Da;Pe.setAnimationLoop(Me),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(E){se=E,Ft.setAnimationLoop(E),E===null?Pe.stop():Pe.start()},Ft.addEventListener("sessionstart",Ce),Ft.addEventListener("sessionend",re),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(O),O=Ft.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,A),p=At.get(E,y.length),p.init(),y.push(p),ut.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(ut),lt=this.localClippingEnabled,et=Ot.init(this.clippingPlanes,lt),_=mt.get(E,u.length),_.init(),u.push(_),$e(E,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(J,Z),this.info.render.frame++,et===!0&&Ot.beginShadows();const q=p.state.shadowsArray;if(at.render(q,E,O),et===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(_,E),p.setupLights(v._useLegacyLights),O.isArrayCamera){const K=O.cameras;for(let W=0,St=K.length;W<St;W++){const It=K[W];Tr(_,E,It,It.viewport)}}else Tr(_,E,O);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,O),j.resetDefaultState(),D=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function $e(E,O,q,K){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){K&&Rt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ut);const It=X.update(E),Gt=E.material;Gt.visible&&_.push(E,It,Gt,q,Rt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const It=X.update(E),Gt=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Rt.copy(E.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Rt.copy(It.boundingSphere.center)),Rt.applyMatrix4(E.matrixWorld).applyMatrix4(ut)),Array.isArray(Gt)){const Vt=It.groups;for(let qt=0,Ht=Vt.length;qt<Ht;qt++){const Wt=Vt[qt],fe=Gt[Wt.materialIndex];fe&&fe.visible&&_.push(E,It,fe,q,Rt.z,Wt)}}else Gt.visible&&_.push(E,It,Gt,q,Rt.z,null)}}const St=E.children;for(let It=0,Gt=St.length;It<Gt;It++)$e(St[It],O,q,K)}function Tr(E,O,q,K){const W=E.opaque,St=E.transmissive,It=E.transparent;p.setupLightsView(q),et===!0&&Ot.setGlobalState(v.clippingPlanes,q),St.length>0&&Xa(W,St,O,q),K&&Et.viewport(w.copy(K)),W.length>0&&Di(W,O,q),St.length>0&&Di(St,O,q),It.length>0&&Di(It,O,q),Et.buffers.depth.setTest(!0),Et.buffers.depth.setMask(!0),Et.buffers.color.setMask(!0),Et.setPolygonOffset(!1)}function Xa(E,O,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const St=wt.isWebGL2;Mt===null&&(Mt=new Bn(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")?Ci:yn,minFilter:Ri,samples:St?4:0})),v.getDrawingBufferSize(Pt),St?Mt.setSize(Pt.x,Pt.y):Mt.setSize(us(Pt.x),us(Pt.y));const It=v.getRenderTarget();v.setRenderTarget(Mt),v.getClearColor(rt),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Gt=v.toneMapping;v.toneMapping=Sn,Di(E,q,K),T.updateMultisampleRenderTarget(Mt),T.updateRenderTargetMipmap(Mt);let Vt=!1;for(let qt=0,Ht=O.length;qt<Ht;qt++){const Wt=O[qt],fe=Wt.object,Be=Wt.geometry,xe=Wt.material,en=Wt.group;if(xe.side===Ee&&fe.layers.test(K.layers)){const le=xe.side;xe.side=Ue,xe.needsUpdate=!0,br(fe,q,K,Be,xe,en),xe.side=le,xe.needsUpdate=!0,Vt=!0}}Vt===!0&&(T.updateMultisampleRenderTarget(Mt),T.updateRenderTargetMipmap(Mt)),v.setRenderTarget(It),v.setClearColor(rt,L),v.toneMapping=Gt}function Di(E,O,q){const K=O.isScene===!0?O.overrideMaterial:null;for(let W=0,St=E.length;W<St;W++){const It=E[W],Gt=It.object,Vt=It.geometry,qt=K===null?It.material:K,Ht=It.group;Gt.layers.test(q.layers)&&br(Gt,O,q,Vt,qt,Ht)}}function br(E,O,q,K,W,St){E.onBeforeRender(v,O,q,K,W,St),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(v,O,q,K,E,St),W.transparent===!0&&W.side===Ee&&W.forceSinglePass===!1?(W.side=Ue,W.needsUpdate=!0,v.renderBufferDirect(q,O,K,W,E,St),W.side=wn,W.needsUpdate=!0,v.renderBufferDirect(q,O,K,W,E,St),W.side=Ee):v.renderBufferDirect(q,O,K,W,E,St),E.onAfterRender(v,O,q,K,W,St)}function Ui(E,O,q){O.isScene!==!0&&(O=Tt);const K=Ut.get(E),W=p.state.lights,St=p.state.shadowsArray,It=W.state.version,Gt=gt.getParameters(E,W.state,St,O,q),Vt=gt.getProgramCacheKey(Gt);let qt=K.programs;K.environment=E.isMeshStandardMaterial?O.environment:null,K.fog=O.fog,K.envMap=(E.isMeshStandardMaterial?V:x).get(E.envMap||K.environment),qt===void 0&&(E.addEventListener("dispose",vt),qt=new Map,K.programs=qt);let Ht=qt.get(Vt);if(Ht!==void 0){if(K.currentProgram===Ht&&K.lightsStateVersion===It)return Rr(E,Gt),Ht}else Gt.uniforms=gt.getUniforms(E),E.onBuild(q,Gt,v),E.onBeforeCompile(Gt,v),Ht=gt.acquireProgram(Gt,Vt),qt.set(Vt,Ht),K.uniforms=Gt.uniforms;const Wt=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Wt.clippingPlanes=Ot.uniform),Rr(E,Gt),K.needsLights=Ka(E),K.lightsStateVersion=It,K.needsLights&&(Wt.ambientLightColor.value=W.state.ambient,Wt.lightProbe.value=W.state.probe,Wt.directionalLights.value=W.state.directional,Wt.directionalLightShadows.value=W.state.directionalShadow,Wt.spotLights.value=W.state.spot,Wt.spotLightShadows.value=W.state.spotShadow,Wt.rectAreaLights.value=W.state.rectArea,Wt.ltc_1.value=W.state.rectAreaLTC1,Wt.ltc_2.value=W.state.rectAreaLTC2,Wt.pointLights.value=W.state.point,Wt.pointLightShadows.value=W.state.pointShadow,Wt.hemisphereLights.value=W.state.hemi,Wt.directionalShadowMap.value=W.state.directionalShadowMap,Wt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Wt.spotShadowMap.value=W.state.spotShadowMap,Wt.spotLightMatrix.value=W.state.spotLightMatrix,Wt.spotLightMap.value=W.state.spotLightMap,Wt.pointShadowMap.value=W.state.pointShadowMap,Wt.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=Ht,K.uniformsList=null,Ht}function Ar(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=rs.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Rr(E,O){const q=Ut.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function qa(E,O,q,K,W){O.isScene!==!0&&(O=Tt),T.resetTextureUnits();const St=O.fog,It=K.isMeshStandardMaterial?O.environment:null,Gt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:hn,Vt=(K.isMeshStandardMaterial?V:x).get(K.envMap||It),qt=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ht=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Wt=!!q.morphAttributes.position,fe=!!q.morphAttributes.normal,Be=!!q.morphAttributes.color;let xe=Sn;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xe=v.toneMapping);const en=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=en!==void 0?en.length:0,Yt=Ut.get(K),xs=p.state.lights;if(et===!0&&(lt===!0||E!==M)){const ke=E===M&&K.id===D;Ot.setState(K,E,ke)}let he=!1;K.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==xs.state.version||Yt.outputColorSpace!==Gt||W.isBatchedMesh&&Yt.batching===!1||!W.isBatchedMesh&&Yt.batching===!0||W.isInstancedMesh&&Yt.instancing===!1||!W.isInstancedMesh&&Yt.instancing===!0||W.isSkinnedMesh&&Yt.skinning===!1||!W.isSkinnedMesh&&Yt.skinning===!0||W.isInstancedMesh&&Yt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Yt.instancingColor===!1&&W.instanceColor!==null||Yt.envMap!==Vt||K.fog===!0&&Yt.fog!==St||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Ot.numPlanes||Yt.numIntersection!==Ot.numIntersection)||Yt.vertexAlphas!==qt||Yt.vertexTangents!==Ht||Yt.morphTargets!==Wt||Yt.morphNormals!==fe||Yt.morphColors!==Be||Yt.toneMapping!==xe||wt.isWebGL2===!0&&Yt.morphTargetsCount!==le)&&(he=!0):(he=!0,Yt.__version=K.version);let En=Yt.currentProgram;he===!0&&(En=Ui(K,O,W));let Cr=!1,gi=!1,Ss=!1;const Te=En.getUniforms(),Tn=Yt.uniforms;if(Et.useProgram(En.program)&&(Cr=!0,gi=!0,Ss=!0),K.id!==D&&(D=K.id,gi=!0),Cr||M!==E){Te.setValue(z,"projectionMatrix",E.projectionMatrix),Te.setValue(z,"viewMatrix",E.matrixWorldInverse);const ke=Te.map.cameraPosition;ke!==void 0&&ke.setValue(z,Rt.setFromMatrixPosition(E.matrixWorld)),wt.logarithmicDepthBuffer&&Te.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Te.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,gi=!0,Ss=!0)}if(W.isSkinnedMesh){Te.setOptional(z,W,"bindMatrix"),Te.setOptional(z,W,"bindMatrixInverse");const ke=W.skeleton;ke&&(wt.floatVertexTextures?(ke.boneTexture===null&&ke.computeBoneTexture(),Te.setValue(z,"boneTexture",ke.boneTexture,T)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}W.isBatchedMesh&&(Te.setOptional(z,W,"batchingTexture"),Te.setValue(z,"batchingTexture",W._matricesTexture,T));const ys=q.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0&&wt.isWebGL2===!0)&&zt.update(W,q,En),(gi||Yt.receiveShadow!==W.receiveShadow)&&(Yt.receiveShadow=W.receiveShadow,Te.setValue(z,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Tn.envMap.value=Vt,Tn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),gi&&(Te.setValue(z,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&Ya(Tn,Ss),St&&K.fog===!0&&ct.refreshFogUniforms(Tn,St),ct.refreshMaterialUniforms(Tn,K,$,Y,Mt),rs.upload(z,Ar(Yt),Tn,T)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(rs.upload(z,Ar(Yt),Tn,T),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Te.setValue(z,"center",W.center),Te.setValue(z,"modelViewMatrix",W.modelViewMatrix),Te.setValue(z,"normalMatrix",W.normalMatrix),Te.setValue(z,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const ke=K.uniformsGroups;for(let ws=0,Za=ke.length;ws<Za;ws++)if(wt.isWebGL2){const Pr=ke[ws];pt.update(Pr,En),pt.bind(Pr,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function Ya(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Ka(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,O,q){Ut.get(E.texture).__webglTexture=O,Ut.get(E.depthTexture).__webglTexture=q;const K=Ut.get(E);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=q===void 0,K.__autoAllocateDepthBuffer||yt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const q=Ut.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,q=0){A=E,P=O,b=q;let K=!0,W=null,St=!1,It=!1;if(E){const Vt=Ut.get(E);Vt.__useDefaultFramebuffer!==void 0?(Et.bindFramebuffer(z.FRAMEBUFFER,null),K=!1):Vt.__webglFramebuffer===void 0?T.setupRenderTarget(E):Vt.__hasExternalTextures&&T.rebindTextures(E,Ut.get(E.texture).__webglTexture,Ut.get(E.depthTexture).__webglTexture);const qt=E.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(It=!0);const Ht=Ut.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[O])?W=Ht[O][q]:W=Ht[O],St=!0):wt.isWebGL2&&E.samples>0&&T.useMultisampledRTT(E)===!1?W=Ut.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?W=Ht[q]:W=Ht,w.copy(E.viewport),B.copy(E.scissor),F=E.scissorTest}else w.copy(tt).multiplyScalar($).floor(),B.copy(nt).multiplyScalar($).floor(),F=ot;if(Et.bindFramebuffer(z.FRAMEBUFFER,W)&&wt.drawBuffers&&K&&Et.drawBuffers(E,W),Et.viewport(w),Et.scissor(B),Et.setScissorTest(F),St){const Vt=Ut.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Vt.__webglTexture,q)}else if(It){const Vt=Ut.get(E.texture),qt=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Vt.__webglTexture,q||0,qt)}D=-1},this.readRenderTargetPixels=function(E,O,q,K,W,St,It){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&It!==void 0&&(Gt=Gt[It]),Gt){Et.bindFramebuffer(z.FRAMEBUFFER,Gt);try{const Vt=E.texture,qt=Vt.format,Ht=Vt.type;if(qt!==Je&&U.convert(qt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Wt=Ht===Ci&&(yt.has("EXT_color_buffer_half_float")||wt.isWebGL2&&yt.has("EXT_color_buffer_float"));if(Ht!==yn&&U.convert(Ht)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===Mn&&(wt.isWebGL2||yt.has("OES_texture_float")||yt.has("WEBGL_color_buffer_float")))&&!Wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-K&&q>=0&&q<=E.height-W&&z.readPixels(O,q,K,W,U.convert(qt),U.convert(Ht),St)}finally{const Vt=A!==null?Ut.get(A).__webglFramebuffer:null;Et.bindFramebuffer(z.FRAMEBUFFER,Vt)}}},this.copyFramebufferToTexture=function(E,O,q=0){const K=Math.pow(2,-q),W=Math.floor(O.image.width*K),St=Math.floor(O.image.height*K);T.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,E.x,E.y,W,St),Et.unbindTexture()},this.copyTextureToTexture=function(E,O,q,K=0){const W=O.image.width,St=O.image.height,It=U.convert(q.format),Gt=U.convert(q.type);T.setTexture2D(q,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,q.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,q.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,K,E.x,E.y,W,St,It,Gt,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,K,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,It,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,K,E.x,E.y,It,Gt,O.image),K===0&&q.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Et.unbindTexture()},this.copyTextureToTexture3D=function(E,O,q,K,W=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const St=E.max.x-E.min.x+1,It=E.max.y-E.min.y+1,Gt=E.max.z-E.min.z+1,Vt=U.convert(K.format),qt=U.convert(K.type);let Ht;if(K.isData3DTexture)T.setTexture3D(K,0),Ht=z.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)T.setTexture2DArray(K,0),Ht=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment);const Wt=z.getParameter(z.UNPACK_ROW_LENGTH),fe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Be=z.getParameter(z.UNPACK_SKIP_PIXELS),xe=z.getParameter(z.UNPACK_SKIP_ROWS),en=z.getParameter(z.UNPACK_SKIP_IMAGES),le=q.isCompressedTexture?q.mipmaps[W]:q.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,le.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,le.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),q.isDataTexture||q.isData3DTexture?z.texSubImage3D(Ht,W,O.x,O.y,O.z,St,It,Gt,Vt,qt,le.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Ht,W,O.x,O.y,O.z,St,It,Gt,Vt,le.data)):z.texSubImage3D(Ht,W,O.x,O.y,O.z,St,It,Gt,Vt,qt,le),z.pixelStorei(z.UNPACK_ROW_LENGTH,Wt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,fe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Be),z.pixelStorei(z.UNPACK_SKIP_ROWS,xe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,en),W===0&&K.generateMipmaps&&z.generateMipmap(Ht),Et.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),Et.unbindTexture()},this.resetState=function(){P=0,b=0,A=null,Et.reset(),j.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ln}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===mr?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===ms?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===we?Fn:va}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Fn?we:hn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class fp extends ka{}fp.prototype.isWebGL1Renderer=!0;class Mr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Zt(t),this.density=e}clone(){return new Mr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pp extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Va extends pi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $o=new C,Qo=new C,ta=new de,Qs=new Ta,is=new gs;class mp extends ge{constructor(t=new Ne,e=new Va){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)$o.fromBufferAttribute(e,i-1),Qo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=$o.distanceTo(Qo);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(i),is.radius+=r,t.ray.intersectsSphere(is)===!1)return;ta.copy(i).invert(),Qs.copy(t.ray).applyMatrix4(ta);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new C,h=new C,d=new C,f=new C,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const u=Math.max(0,a.start),y=Math.min(g.count,a.start+a.count);for(let v=u,S=y-1;v<S;v+=m){const P=g.getX(v),b=g.getX(v+1);if(l.fromBufferAttribute(p,P),h.fromBufferAttribute(p,b),Qs.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const D=t.ray.origin.distanceTo(f);D<t.near||D>t.far||e.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),y=Math.min(p.count,a.start+a.count);for(let v=u,S=y-1;v<S;v+=m){if(l.fromBufferAttribute(p,v),h.fromBufferAttribute(p,v+1),Qs.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const b=t.ray.origin.distanceTo(f);b<t.near||b>t.far||e.push({distance:b,point:d.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class me extends Fe{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],f=n[i+1]-h,m=(a-h)/f;return(i+m)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new Ct:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new C,i=[],r=[],a=[],o=new C,c=new de;for(let m=0;m<=t;m++){const g=m/t;i[m]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(i[m-1],i[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ye(i[m-1].dot(i[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(i[m],r[m])}if(e===!0){let m=Math.acos(ye(r[0].dot(r[t]),-1,1));m/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],m*g)),a[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ha extends dn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new Ct,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,m=l-this.aY;c=f*h-m*d+this.aX,l=f*d+m*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gp extends Ha{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function xr(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let f=(a-r)/l-(o-r)/(l+h)+(o-a)/h,m=(o-a)/h-(c-a)/(h+d)+(c-o)/d;f*=h,m*=h,i(a,o,f,m)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const ss=new C,tr=new xr,er=new xr,nr=new xr;class fs extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new C){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ss.subVectors(i[0],i[1]).add(i[0]),l=ss);const d=i[o%r],f=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ss.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ss),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),m),_=Math.pow(d.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),tr.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,g,_,p),er.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,g,_,p),nr.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(tr.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),er.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),nr.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(tr.calc(c),er.calc(c),nr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new C().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ea(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function _p(s,t){const e=1-s;return e*e*t}function vp(s,t){return 2*(1-s)*s*t}function Mp(s,t){return s*s*t}function bi(s,t,e,n){return _p(s,t)+vp(s,e)+Mp(s,n)}function xp(s,t){const e=1-s;return e*e*e*t}function Sp(s,t){const e=1-s;return 3*e*e*s*t}function yp(s,t){return 3*(1-s)*s*s*t}function wp(s,t){return s*s*s*t}function Ai(s,t,e,n,i){return xp(s,t)+Sp(s,e)+yp(s,n)+wp(s,i)}class Ep extends dn{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ai(t,i.x,r.x,a.x,o.x),Ai(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tp extends dn{constructor(t=new C,e=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ai(t,i.x,r.x,a.x,o.x),Ai(t,i.y,r.y,a.y,o.y),Ai(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bp extends dn{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ap extends dn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rp extends dn{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(bi(t,i.x,r.x,a.x),bi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Wa extends dn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(bi(t,i.x,r.x,a.x),bi(t,i.y,r.y,a.y),bi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cp extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(ea(o,c.x,l.x,h.x,d.x),ea(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}}var Pp=Object.freeze({__proto__:null,ArcCurve:gp,CatmullRomCurve3:fs,CubicBezierCurve:Ep,CubicBezierCurve3:Tp,EllipseCurve:Ha,LineCurve:bp,LineCurve3:Ap,QuadraticBezierCurve:Rp,QuadraticBezierCurve3:Wa,SplineCurve:Cp});class Sr extends Ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new C,h=new Ct;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){const m=n+d/e*i;l.x=t*Math.cos(m),l.y=t*Math.sin(m),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[f]/t+1)/2,h.y=(a[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xt extends Ne{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],f=[],m=[];let g=0;const _=[],p=n/2;let u=0;y(),a===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(m,2));function y(){const S=new C,P=new C;let b=0;const A=(e-t)/n;for(let D=0;D<=r;D++){const M=[],w=D/r,B=w*(e-t)+t;for(let F=0;F<=i;F++){const rt=F/i,L=rt*c+o,N=Math.sin(L),Y=Math.cos(L);P.x=B*N,P.y=-w*n+p,P.z=B*Y,d.push(P.x,P.y,P.z),S.set(N,A,Y).normalize(),f.push(S.x,S.y,S.z),m.push(rt,1-w),M.push(g++)}_.push(M)}for(let D=0;D<i;D++)for(let M=0;M<r;M++){const w=_[M][D],B=_[M+1][D],F=_[M+1][D+1],rt=_[M][D+1];h.push(w,B,rt),h.push(B,F,rt),b+=6}l.addGroup(u,b,0),u+=b}function v(S){const P=g,b=new Ct,A=new C;let D=0;const M=S===!0?t:e,w=S===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,p*w,0),f.push(0,w,0),m.push(.5,.5),g++;const B=g;for(let F=0;F<=i;F++){const L=F/i*c+o,N=Math.cos(L),Y=Math.sin(L);A.x=M*Y,A.y=p*w,A.z=M*N,d.push(A.x,A.y,A.z),f.push(0,w,0),b.x=N*.5+.5,b.y=Y*.5*w+.5,m.push(b.x,b.y),g++}for(let F=0;F<i;F++){const rt=P+F,L=B+F;S===!0?h.push(L,L+1,rt):h.push(L+1,L,rt),D+=3}l.addGroup(u,D,S===!0?1:2),u+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Re extends xt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Re(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class yr extends Ne{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const v=new C,S=new C,P=new C;for(let b=0;b<e.length;b+=3)m(e[b+0],v),m(e[b+1],S),m(e[b+2],P),c(v,S,P,y)}function c(y,v,S,P){const b=P+1,A=[];for(let D=0;D<=b;D++){A[D]=[];const M=y.clone().lerp(S,D/b),w=v.clone().lerp(S,D/b),B=b-D;for(let F=0;F<=B;F++)F===0&&D===b?A[D][F]=M:A[D][F]=M.clone().lerp(w,F/B)}for(let D=0;D<b;D++)for(let M=0;M<2*(b-D)-1;M++){const w=Math.floor(M/2);M%2===0?(f(A[D][w+1]),f(A[D+1][w]),f(A[D][w])):(f(A[D][w+1]),f(A[D+1][w+1]),f(A[D+1][w]))}}function l(y){const v=new C;for(let S=0;S<r.length;S+=3)v.x=r[S+0],v.y=r[S+1],v.z=r[S+2],v.normalize().multiplyScalar(y),r[S+0]=v.x,r[S+1]=v.y,r[S+2]=v.z}function h(){const y=new C;for(let v=0;v<r.length;v+=3){y.x=r[v+0],y.y=r[v+1],y.z=r[v+2];const S=p(y)/2/Math.PI+.5,P=u(y)/Math.PI+.5;a.push(S,1-P)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){const v=a[y+0],S=a[y+2],P=a[y+4],b=Math.max(v,S,P),A=Math.min(v,S,P);b>.9&&A<.1&&(v<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),P<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function m(y,v){const S=y*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function g(){const y=new C,v=new C,S=new C,P=new C,b=new Ct,A=new Ct,D=new Ct;for(let M=0,w=0;M<r.length;M+=9,w+=6){y.set(r[M+0],r[M+1],r[M+2]),v.set(r[M+3],r[M+4],r[M+5]),S.set(r[M+6],r[M+7],r[M+8]),b.set(a[w+0],a[w+1]),A.set(a[w+2],a[w+3]),D.set(a[w+4],a[w+5]),P.copy(y).add(v).add(S).divideScalar(3);const B=p(P);_(b,w+0,y,B),_(A,w+2,v,B),_(D,w+4,S,B)}}function _(y,v,S,P){P<0&&y.x===1&&(a[v]=y.x-1),S.x===0&&S.z===0&&(a[v]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yr(t.vertices,t.indices,t.radius,t.details)}}class wr extends yr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new wr(t.radius,t.detail)}}class te extends Ne{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new C,f=new C,m=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const y=[],v=u/n;let S=0;u===0&&a===0?S=.5/e:u===n&&c===Math.PI&&(S=-.5/e);for(let P=0;P<=e;P++){const b=P/e;d.x=-t*Math.cos(i+b*r)*Math.sin(a+v*o),d.y=t*Math.cos(a+v*o),d.z=t*Math.sin(i+b*r)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),p.push(b+S,1-v),y.push(l++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<e;y++){const v=h[u][y+1],S=h[u][y],P=h[u+1][y],b=h[u+1][y+1];(u!==0||a>0)&&m.push(v,S,b),(u!==n-1||c<Math.PI)&&m.push(S,P,b)}this.setIndex(m),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Un extends Ne{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new C,d=new C,f=new C;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const _=g/i*r,p=m/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(_),d.y=(t+e*Math.cos(p))*Math.sin(_),d.z=e*Math.sin(p),o.push(d.x,d.y,d.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const _=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,u=(i+1)*(m-1)+g,y=(i+1)*m+g;a.push(_,p,y),a.push(p,u,y)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Un(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Pi extends Ne{constructor(t=new Wa(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new C,c=new C,l=new Ct;let h=new C;const d=[],f=[],m=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(m,2));function _(){for(let v=0;v<e;v++)p(v);p(r===!1?e:0),y(),u()}function p(v){h=t.getPointAt(v/e,h);const S=a.normals[v],P=a.binormals[v];for(let b=0;b<=i;b++){const A=b/i*Math.PI*2,D=Math.sin(A),M=-Math.cos(A);c.x=M*S.x+D*P.x,c.y=M*S.y+D*P.y,c.z=M*S.z+D*P.z,c.normalize(),f.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function u(){for(let v=1;v<=e;v++)for(let S=1;S<=i;S++){const P=(i+1)*(v-1)+(S-1),b=(i+1)*v+(S-1),A=(i+1)*v+S,D=(i+1)*(v-1)+S;g.push(P,b,D),g.push(b,A,D)}}function y(){for(let v=0;v<=e;v++)for(let S=0;S<=i;S++)l.x=v/e,l.y=S/i,m.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Pi(new Pp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Q extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ma,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Li extends Q{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Zt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Zt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Zt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ms extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Lp extends Ms{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ir=new de,na=new C,ia=new C;class Er{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _r,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;na.setFromMatrixPosition(t.matrixWorld),e.position.copy(na),ia.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ia),e.updateMatrixWorld(),ir.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ir),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ir)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ip extends Er{constructor(){super(new Oe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=hi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Dp extends Ms{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ip}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const sa=new de,yi=new C,sr=new C;class Up extends Er{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),yi.setFromMatrixPosition(t.matrixWorld),n.position.copy(yi),sr.copy(n.position),sr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(sr),n.updateMatrixWorld(),i.makeTranslation(-yi.x,-yi.y,-yi.z),sa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa)}}class Np extends Ms{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Up}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Op extends Er{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fp extends Ms{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Op}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ra(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ra();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ra(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fr);const Dt={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:8,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},ne={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class Gp{constructor(){this.state=ne.MENU,this.speedKmh=Dt.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Dt.LANES[1],this.targetLaneX=Dt.LANES[1],this.crashTimer=0}startNewGame(){this.state=ne.PLAYING,this.speedKmh=Dt.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Dt.LANES[1],this.targetLaneX=Dt.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==ne.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<Dt.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=Dt.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min(Dt.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=Dt.SCORING.COMBO_TIMEOUT;const t=Dt.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min(Dt.NITRO.MAX,this.nitro+Dt.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==ne.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*Dt.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,r=e.keys.accelerate,a=e.keys.boost,o=this.distanceMeters/1e3,c=Math.min(Dt.SPEED.MAX_PROGRESSIVE_BONUS,o*Dt.SPEED.PROGRESSIVE_RATE),l=Dt.SPEED.BASE_START+c,h=l+45,d=Dt.SPEED.BOOST+c*.4;a&&this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-Dt.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(d,this.speedKmh+Dt.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.nitro=Math.min(Dt.NITRO.MAX,this.nitro+Dt.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max(Dt.SPEED.MIN,this.speedKmh-Dt.SPEED.BRAKING*t):r?this.speedKmh=Math.min(h,this.speedKmh+Dt.SPEED.ACCELERATION*1.6*t):this.speedKmh<l?this.speedKmh=Math.min(l,this.speedKmh+Dt.SPEED.ACCELERATION*t):this.speedKmh>l&&(this.speedKmh=Math.max(l,this.speedKmh-Dt.SPEED.NATURAL_DECEL*t)));const m=this.speedKmh*1e3/3600*t;this.distanceMeters+=m,this.score+=Math.round(m*Dt.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=ne.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class zp{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.touchStartX=0,this.touchStartY=0,this.touchStartTime=0,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)&&t.preventDefault(),t.code){case"ArrowLeft":case"KeyA":this.keys.left||(this.laneChangeRequested=-1),this.keys.left=!0;break;case"ArrowRight":case"KeyD":this.keys.right||(this.laneChangeRequested=1),this.keys.right=!0;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!0;break;case"Space":this.keys.boost=!0;break;case"ArrowDown":case"KeyS":this.keys.brake=!0;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!0,this.onHorn&&this.onHorn();break;case"KeyP":case"Escape":this.onPauseToggle&&this.onPauseToggle();break;case"KeyR":this.onRestart&&this.onRestart();break}}),window.addEventListener("keyup",t=>{switch(t.code){case"ArrowLeft":case"KeyA":this.keys.left=!1;break;case"ArrowRight":case"KeyD":this.keys.right=!1;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!1;break;case"Space":this.keys.boost=!1;break;case"ArrowDown":case"KeyS":this.keys.brake=!1;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!1;break}}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0,t.touches.length>0&&(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=Date.now())},{passive:!0}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;Date.now()-this.touchStartTime<350&&Math.abs(e)>40&&Math.abs(e)>Math.abs(n)*1.3&&(e<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}triggerSteerLeft(){this.laneChangeRequested=-1}triggerSteerRight(){this.laneChangeRequested=1}setBrake(t){this.keys.brake=t}setAccelerate(t){this.keys.accelerate=t}setNitro(t){this.keys.boost=t}setBoost(t){this.keys.boost=t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0}}class kp{constructor(t){this.camera=t,this.defaultOffset=new C(Dt.CAMERA.DEFAULT_OFFSET.x,Dt.CAMERA.DEFAULT_OFFSET.y,Dt.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new C(Dt.CAMERA.LOOK_OFFSET.x,Dt.CAMERA.LOOK_OFFSET.y,Dt.CAMERA.LOOK_OFFSET.z),this.currentPos=new C,this.currentLook=new C,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=Dt.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.8,8.2),this.lookOffset.set(0,1.3,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=Dt.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const r=t.group.position,a=Math.min(1,e/Dt.SPEED.MAX_NORMAL),o=this.camera.aspect,c=o<1?Math.min(24,(1-o)*36):0;this.targetFOV=Dt.CAMERA.BASE_FOV+c+a*10+(n?8:0),this.camera.fov+=(this.targetFOV-this.camera.fov)*Math.min(1,i*Dt.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix();const l=r.x+this.defaultOffset.x,h=r.y+this.defaultOffset.y,d=r.z+this.defaultOffset.z+(n?.8:0),f=Math.min(1,i*10),m=Math.min(1,i*12);this.currentPos.x+=(l-this.currentPos.x)*f,this.currentPos.y+=(h-this.currentPos.y)*m,this.currentPos.z=d;const g=r.x+this.lookOffset.x,_=r.y+this.lookOffset.y,p=r.z+this.lookOffset.z;this.currentLook.x+=(g-this.currentLook.x)*f,this.currentLook.y+=(_-this.currentLook.y)*m,this.currentLook.z=p;let u=0,y=0;if(e>70){const b=e/280*.03;u=(Math.random()-.5)*b,y=(Math.random()-.5)*b}let v=0,S=0,P=0;if(this.shakeDuration>0){this.shakeDuration-=i;const b=Math.max(0,this.shakeDuration/.6),A=this.shakeIntensity*b;v=(Math.random()-.5)*A,S=(Math.random()-.5)*A,P=(Math.random()-.5)*A}this.camera.position.set(this.currentPos.x+u+v,this.currentPos.y+y+S,this.currentPos.z+P),this.camera.lookAt(this.currentLook.x+u*.5,this.currentLook.y+y*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,r=(e?4.8:8.2)*i,a=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),o=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*r,a,Math.cos(c)*r),this.camera.lookAt(0,o,0)}}class Vp{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){this.ctx&&fetch("/audio/eta_ki_korli_mama.mp3").then(t=>{if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.arrayBuffer()}).then(t=>this.ctx.decodeAudioData(t)).then(t=>{this.crashVoiceBuffer=t}).catch(t=>{console.warn("Could not decode crash voice buffer:",t)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const r=this.ctx.createGain();r.gain.setValueAtTime(.04,t),this.highOsc.connect(r),r.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,r=0,a=0;for(let c=0;c<t;c++){const l=Math.random()*2-1;i=.98*i+l*.055,r=.95*r+l*.075,a=.85*a+l*.15,n[c]=(i+r+a)*.45}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),o.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),o.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(500,t),a.frequency.exponentialRampToValueAtTime(180,t+.35);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.07,t+.05),o.gain.exponentialRampToValueAtTime(.001,t+.35),r.connect(a),a.connect(o),o.connect(this.masterGain),r.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const r=[2093,2637];[0,.09].forEach(a=>{r.forEach(o=>{const c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(o,n+a),l.gain.setValueAtTime(0,n+a),l.gain.linearRampToValueAtTime(.22,n+a+.008),l.gain.exponentialRampToValueAtTime(1e-4,n+a+.18),c.connect(l),l.connect(this.masterGain),c.start(n+a),c.stop(n+a+.2)})});return}if(e==="cng"){[620,780].forEach(a=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sawtooth",o.frequency.setValueAtTime(a,n);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.35)});return}[330,415.3,523.25].forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain(),l=this.ctx.createBiquadFilter();o.type=a===0?"sine":"triangle",o.frequency.setValueAtTime(r,n),l.type="lowpass",l.frequency.setValueAtTime(1400,n);const h=a===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(h,n+.02),c.gain.setValueAtTime(h,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n*.8,t),r.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.08,t+.06),a.gain.exponentialRampToValueAtTime(1e-4,t+.45),r.connect(a),a.connect(this.masterGain),r.start(t),r.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const r=this.ctx.currentTime,a=Math.min(1,Math.max(0,t/200)),o=a*5%1,c=900+a*1800+o*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const l=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,l),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,r,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,r,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,r,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,r,.05);const h=300+a*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(h,r,.06);const d=.16+a*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,d),r,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+a*350,r,.08),this.turboGain.gain.setTargetAtTime(.05,r,.08)):this.turboGain.gain.setTargetAtTime(1e-4,r,.15);const f=Math.pow(a,1.3)*.06;this.roadGain.gain.setTargetAtTime(f,r,.08),this.roadFilter.frequency.setTargetAtTime(180+a*250,r,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime((a===0?n:n*1.25)*i,e+r),c.gain.setValueAtTime(.001,e+r),c.gain.linearRampToValueAtTime(.12,e+r+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+r+.28),o.connect(c),c.connect(this.masterGain),o.start(e+r),o.stop(e+r+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),r=this.ctx.createBuffer(1,i,this.ctx.sampleRate),a=r.getChannelData(0);for(let h=0;h<i;h++)a[h]=(Math.random()*2-1)*Math.exp(-h/(this.ctx.sampleRate*.12));const o=this.ctx.createBufferSource();o.buffer=r;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const l=this.ctx.createGain();l.gain.setValueAtTime(.3,t),l.gain.exponentialRampToValueAtTime(.001,t+.45),o.connect(c),c.connect(l),l.connect(this.masterGain),o.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(r=>r.lang.includes("bn")||r.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(e,t+i),a.gain.setValueAtTime(.001,t+i),a.gain.linearRampToValueAtTime(.12,t+i+.02),a.gain.exponentialRampToValueAtTime(.001,t+i+.32),r.connect(a),a.connect(this.masterGain),r.start(t+i),r.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class Hp{constructor(){this.group=new bt,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new un,this.collisionSize=new C(2.1,2.8,5.5),this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new me(t),i=document.createElement("canvas");i.width=1024,i.height=384;const r=i.getContext("2d");r.fillStyle="#f8fafc",r.fillRect(0,0,1024,384),r.fillStyle="#dc2626",r.fillRect(0,0,1024,36),r.fillRect(0,348,1024,36),r.fillStyle="#16a34a",r.beginPath(),r.arc(512,180,110,Math.PI,0),r.fill(),r.fillStyle="#f59e0b",r.fillRect(472,80,80,100),r.beginPath(),r.moveTo(512,20),r.lineTo(460,80),r.lineTo(564,80),r.fill();const a=(k,H)=>{r.fillStyle="#dc2626";for(let X=0;X<Math.PI*2;X+=Math.PI/3)r.beginPath(),r.arc(k+Math.cos(X)*35,H+Math.sin(X)*35,24,0,Math.PI*2),r.fill();r.fillStyle="#fbbf24",r.beginPath(),r.arc(k,H,22,0,Math.PI*2),r.fill()};a(220,180),a(804,180),r.fillStyle="#1e293b",r.font="bold 54px serif",r.textAlign="center",r.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const o=new me(i),c=document.createElement("canvas");c.width=1024,c.height=512;const l=c.getContext("2d");l.fillStyle="#f59e0b",l.fillRect(0,0,1024,140);for(let k=60;k<1024;k+=110)l.fillStyle="#dc2626",l.beginPath(),l.arc(k,70,32,0,Math.PI*2),l.fill(),l.fillStyle="#22c55e",l.beginPath(),l.arc(k,70,16,0,Math.PI*2),l.fill();l.fillStyle="#15803d",l.fillRect(0,140,1024,372),l.strokeStyle="#f8fafc",l.lineWidth=8;for(let k=30;k<1024;k+=138)l.strokeRect(k,160,116,320);l.fillStyle="#ffffff",l.font="900 80px sans-serif",l.textAlign="center",l.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),l.fillStyle="#dc2626",l.fillRect(0,140,30,372),l.fillRect(994,140,30,372);const h=new me(c);this.yellowPaint=new Q({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new Q({color:165063,roughness:.4,metalness:.3}),this.redPaint=new Q({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new Q({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new Q({color:2040877,roughness:.8}),this.woodPlankMat=new Q({color:7877903,roughness:.9}),this.tireMat=new Q({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new Q({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new Li({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new ue({color:16777215}),this.taillightMat=new Q({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new Q({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new Q({color:16119280,roughness:.65}),this.cowBrownMat=new Q({color:9262372,roughness:.7}),this.cowBlackMat=new Q({color:2236962,roughness:.75}),this.cowFawnMat=new Q({color:12088115,roughness:.68}),this.hornMat=new Q({color:3621201,roughness:.4}),this.snoutMat=new Q({color:1974308,roughness:.8});const d=new bt;d.name="truckBody",this.bodyGroup=d;const f=new st(1.9,.4,6),m=new R(f,this.chassisMat);m.position.set(0,.65,.2),m.castShadow=!0,d.add(m);const g=new bt;g.position.set(0,.6,-2.85),[-.3,0,.3].forEach(k=>{const H=new xt(.06,.06,2.3,8);H.rotateZ(Math.PI/2);const X=new R(H,this.tealBumperMat);X.position.y=k,X.castShadow=!0,g.add(X)}),[-.95,-.45,.45,.95].forEach(k=>{const H=new st(.08,.72,.08),X=new R(H,this.tealBumperMat);X.position.x=k,g.add(X)}),[-1.08,1.08].forEach(k=>{const H=new xt(.03,.03,.9,6),X=new R(H,this.tealBumperMat);X.position.set(k,.35,0),g.add(X);const gt=new te(.07,8,8),ct=new R(gt,this.redPaint);ct.position.set(k,.8,0),g.add(ct)});const _=document.createElement("canvas");_.width=256,_.height=80;const p=_.getContext("2d");p.fillStyle="#006633",p.fillRect(0,0,256,80),p.strokeStyle="#ffffff",p.lineWidth=4,p.strokeRect(4,4,248,72),p.fillStyle="#ffffff",p.font="bold 26px sans-serif",p.textAlign="center",p.fillText("যশোর-ট",128,34),p.fillText("০২-০৯৬৯",128,64);const u=new me(_),y=new jt(.65,.22),v=new ue({map:u}),S=new R(y,v);S.position.set(0,-.15,.08),g.add(S),d.add(g);const P=new st(1.85,.95,1.6),b=new R(P,this.yellowPaint);b.position.set(0,1.25,-2.05),b.castShadow=!0,d.add(b);const A=new jt(1.65,.85),D=new Q({map:n}),M=new R(A,D);M.position.set(0,1.25,-2.86),d.add(M),[-.68,.68].forEach(k=>{const H=new xt(.16,.16,.06,16);H.rotateX(Math.PI/2);const X=new R(H,this.chassisMat);X.position.set(k,1.15,-2.87),d.add(X);const gt=new Sr(.13,16),ct=new R(gt,this.headlightMat);ct.position.set(k,1.15,-2.89),d.add(ct),this.headlights.push(ct);const mt=new Dp(16772829,2.5,60,Math.PI/5,.5,1.2);mt.position.set(k,1.15,-2.9),mt.target.position.set(k*1.5,0,-35),d.add(mt),d.add(mt.target)}),[-.98,.98].forEach(k=>{const H=new st(.24,.55,1.4),X=new R(H,this.chassisMat);X.position.set(k,.95,-1.95),X.castShadow=!0,d.add(X)});const w=new st(2.1,1.45,1.55),B=new R(w,this.yellowPaint);B.position.set(0,1.75,-.6),B.castShadow=!0,d.add(B),[-1.06,1.06].forEach(k=>{const H=new st(.04,1.35,1.4),X=new R(H,this.cyanBluePaint);X.position.set(k,1.75,-.6),d.add(X);const gt=new jt(.65,.55),ct=new R(gt,this.glassMat);ct.position.set(k>0?k+.03:k-.03,1.95,-.65),ct.rotation.y=k>0?Math.PI/2:-Math.PI/2,d.add(ct)});const F=new jt(1.85,.72),rt=new R(F,this.glassMat);rt.position.set(0,1.92,-1.39),d.add(rt);const L=new bt;L.position.set(0,2.65,-.85);const N=new jt(2.15,.85),Y=new Q({map:o,roughness:.4}),$=new R(N,Y);$.position.set(0,0,-.55),L.add($);const J=new st(2.2,.15,1.4),Z=new R(J,this.redPaint);Z.position.set(0,.45,.1),Z.castShadow=!0,L.add(Z);const tt=new st(2.24,.18,.08),nt=new R(tt,this.yellowPaint);nt.position.set(0,.38,-.58),L.add(nt),d.add(L);const ot=new bt;ot.position.set(0,1.6,1.6);const G=new st(2.2,.12,3.4),et=new R(G,this.woodPlankMat);et.position.set(0,-.4,0),et.receiveShadow=!0,ot.add(et);const lt=new Q({map:h,roughness:.45});[-1.12,1.12].forEach(k=>{const H=new jt(3.4,1.15),X=new R(H,lt);X.position.set(k,.25,0),X.rotation.y=k>0?Math.PI/2:-Math.PI/2,X.castShadow=!0,ot.add(X);const gt=new st(.12,.12,3.4),ct=new R(gt,this.redPaint);ct.position.set(k,.85,0),ot.add(ct)});const Mt=new st(2.2,1.15,.1),ut=new R(Mt,this.redPaint);ut.position.set(0,.25,-1.68),ot.add(ut);const Pt=new st(2.2,1.05,.1),Rt=new R(Pt,this.yellowPaint);Rt.position.set(0,.2,1.68),Rt.castShadow=!0,ot.add(Rt);const Tt=new st(2.25,.18,.15),Nt=new R(Tt,this.chassisMat);Nt.position.set(0,-.65,1.72),ot.add(Nt),[-.85,.85].forEach(k=>{const H=new st(.32,.14,.05),X=new R(H,this.taillightMat);X.position.set(k,-.65,1.82),ot.add(X),this.brakeLights.push(X)}),[-.85,.85].forEach(k=>{const H=new st(.4,.45,.04),X=new R(H,this.tireMat);X.position.set(k,-.9,1.74),ot.add(X)}),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((k,H)=>{const X=this.createBedCow(k.mat,k.scale);X.position.set(k.x,.35,k.z),X.rotation.y=k.rotY,ot.add(X),this.cows.push({group:X,head:X.userData.head,baseRotX:X.userData.head.rotation.x,seed:H*1.5})}),d.add(ot);const $t=this.createTruckWheel(.48,.26,!1);$t.position.set(0,.42,.4),$t.rotation.x=Math.PI/2,d.add($t);const yt=new xt(.08,.08,.6,8);yt.rotateZ(Math.PI/2);const wt=new R(yt,this.chassisMat);wt.position.set(1.05,.48,-.8),d.add(wt);const Et=new Re(.22,1.2,12);Et.rotateZ(-Math.PI/2);const Qt=new ue({color:16755200,transparent:!0,opacity:0}),Ut=new R(Et,Qt);Ut.position.set(1.65,.48,-.8),d.add(Ut),this.exhaustFires.push(Ut),this.group.add(d);const T=.48,x=.52,V=.32;[-1.02,1.02].forEach(k=>{const H=this.createTruckWheelAssembly(x,V,k>0,!1);H.position.set(k,T,-1.95),this.group.add(H),this.wheels.push(H.userData.spinner),this.frontWheels.push(H)}),[-1.02,1.02].forEach(k=>{const H=this.createTruckWheelAssembly(x,V,k>0,!0);H.position.set(k,T,1.85),this.group.add(H),this.wheels.push(H.userData.spinner)})}createBedCow(t,e=1){const n=new bt;n.scale.set(e,e,e);const i=new st(.85,.85,1.35),r=new R(i,t);r.position.set(0,.45,0),r.castShadow=!0,n.add(r);const a=new Re(.24,.38,8),o=new R(a,t);o.position.set(0,.95,-.32),o.rotation.x=-.2,n.add(o);const c=new bt;c.position.set(0,.75,-.6),n.userData.head=c;const l=new st(.42,.46,.62),h=new R(l,t);h.position.set(0,.22,-.35),c.add(h);const d=new st(.32,.25,.25),f=new R(d,this.snoutMat);return f.position.set(0,.12,-.68),c.add(f),[-.18,.18].forEach(m=>{const g=new Re(.05,.3,6),_=new R(g,this.hornMat);_.position.set(m,.46,-.28),_.rotation.z=m>0?-.38:.38,_.rotation.x=.25,c.add(_);const p=new st(.18,.07,.08),u=new R(p,t);u.position.set(m>0?.26:-.26,.32,-.25),u.rotation.z=m>0?-.35:.35,c.add(u)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const r=new bt,a=new bt;if(r.userData.spinner=a,r.add(a),i){const o=this.createTruckWheel(t,e*.75,n);o.position.x=n?.08:-.08,a.add(o);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,a.add(c)}else{const o=this.createTruckWheel(t,e,n);a.add(o)}return r}createTruckWheel(t,e,n){const i=new bt,r=new xt(t,t,e,24);r.rotateZ(Math.PI/2);const a=new R(r,this.tireMat);i.add(a);const o=new xt(t*.65,t*.65,e+.02,18);o.rotateZ(Math.PI/2);const c=new R(o,this.rimMat);i.add(c);const l=new xt(t*.28,t*.28,e+.05,12);l.rotateZ(Math.PI/2);const h=new R(l,this.chassisMat);return i.add(h),i}update(t,e,n,i,r,a){const o=t*1e3/3600,c=2*Math.PI*.52,l=o/c*(2*Math.PI)*a;this.wheelRotation-=l,this.wheels.forEach(u=>{u.rotation.x=this.wheelRotation});const h=n-this.group.position.x,d=-Math.max(-.35,Math.min(Dt.STEERING.WHEEL_TURN_ANGLE,h*.35));this.frontWheels.forEach(u=>{u.rotation.y+=(d-u.rotation.y)*Math.min(1,a*12)});const f=Math.max(-.065,Math.min(.065,h*.065));this.currentRoll+=(f-this.currentRoll)*Math.min(1,a*10),this.bodyGroup.rotation.z=this.currentRoll;const m=Math.max(-.05,Math.min(.05,h*.05));this.currentYaw+=(m-this.currentYaw)*Math.min(1,a*10),this.bodyGroup.rotation.y=this.currentYaw;let g=0;i?g=.045:r&&(g=-.035),this.currentPitch+=(g-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const _=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(u=>{u.material=_}),this.exhaustFires.forEach(u=>{r?(u.material.opacity=.95,u.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),u.material.color.setHex(Math.random()>.4?16759552:16729088)):u.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(u=>{u.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(u=>{u.scale.set(1,1,1)});const p=performance.now()*.001;this.cows.forEach(u=>{const y=Math.sin(p*6.5+u.seed)*.08+(r?Math.sin(p*14+u.seed)*.05:0);u.head.rotation.x=u.baseRotX+y,u.head.rotation.y=Math.sin(p*2.2+u.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.45,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Wp{constructor(){this.group=new bt,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new bt,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new un,this.collisionSize=new C(1.5,2.1,3.2),this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new bt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f59e0b",e.fillRect(0,0,512,384),e.strokeStyle="#dc2626",e.lineWidth=10,e.strokeRect(10,10,492,364),e.strokeStyle="#fde047",e.lineWidth=4,e.strokeRect(18,18,476,348),e.fillStyle="#b91c1c",e.beginPath(),e.roundRect(100,22,312,46,8),e.fill(),e.strokeStyle="#fde047",e.lineWidth=2.5,e.stroke(),e.fillStyle="#ffffff",e.font="bold 26px sans-serif",e.textAlign="center",e.fillText("মা বাবার দোয়া",256,54),e.fillStyle="#db2777",e.beginPath(),e.arc(256,175,42,0,Math.PI*2),e.fill(),e.fillStyle="#fde047",e.beginPath(),e.arc(256,175,22,0,Math.PI*2),e.fill();const n=["#ef4444","#f59e0b","#10b981","#06b6d4","#ec4899"];for(let U=0;U<12;U++){const j=U*Math.PI/6,pt=256+Math.cos(j)*72,Lt=175+Math.sin(j)*62;e.fillStyle=n[U%n.length],e.beginPath(),e.ellipse(pt,Lt,18,26,j,0,Math.PI*2),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2.5,e.stroke()}e.strokeStyle="#18181b",e.lineWidth=4.5,[-1,1].forEach(U=>{e.beginPath(),e.moveTo(256+U*60,120),e.bezierCurveTo(256+U*130,90,256+U*180,130,256+U*150,170),e.stroke(),e.beginPath(),e.moveTo(256+U*60,230),e.bezierCurveTo(256+U*140,260,256+U*190,220,256+U*160,180),e.stroke()}),e.fillStyle="#ec4899",e.fillRect(20,280,472,48),e.fillStyle="#06b6d4",e.fillRect(20,328,472,38),e.strokeStyle="#ffffff",e.lineWidth=3;for(let U=20;U<=492;U+=28)e.beginPath(),e.moveTo(U,280),e.lineTo(U+14,328),e.lineTo(U+28,280),e.stroke(),e.beginPath(),e.arc(U+14,346,6,0,Math.PI*2),e.fillStyle="#fde047",e.fill();const i=new me(t),r=document.createElement("canvas");r.width=512,r.height=512;const a=r.getContext("2d");a.fillStyle="#f59e0b",a.fillRect(0,0,512,512),a.fillStyle="#dc2626",a.fillRect(0,460,512,52);for(let U=80;U<=400;U+=120)for(let j=80;j<=440;j+=120)a.fillStyle="#059669",a.beginPath(),a.arc(j,U,36,0,Math.PI*2),a.fill(),a.fillStyle="#ef4444",a.beginPath(),a.arc(j,U,22,0,Math.PI*2),a.fill(),a.fillStyle="#ffffff",a.beginPath(),a.arc(j,U,10,0,Math.PI*2),a.fill();const o=new me(r),c=document.createElement("canvas");c.width=256,c.height=256;const l=c.getContext("2d");l.fillStyle="#b91c1c",l.fillRect(0,0,256,256),l.strokeStyle="#fde047",l.lineWidth=3;for(let U=0;U<256;U+=32)l.beginPath(),l.moveTo(U,0),l.lineTo(U+32,256),l.stroke(),l.beginPath(),l.moveTo(256-U,0),l.lineTo(256-U-32,256),l.stroke();const h=new me(c),d=document.createElement("canvas");d.width=512,d.height=256;const f=d.getContext("2d");f.fillStyle="#f59e0b",f.fillRect(0,0,512,256),f.fillStyle="#ea580c",f.beginPath(),f.arc(256,105,45,0,Math.PI*2),f.fill();for(let U=0;U<Math.PI*2;U+=Math.PI/8)f.fillStyle="#dc2626",f.beginPath(),f.arc(256+Math.cos(U)*62,105+Math.sin(U)*62,14,0,Math.PI*2),f.fill();f.fillStyle="#fde047",f.beginPath(),f.arc(256,105,26,0,Math.PI*2),f.fill(),f.fillStyle="#0d9488",f.fillRect(0,185,512,71),f.strokeStyle="#fde047",f.lineWidth=5;for(let U=-20;U<=530;U+=32)f.beginPath(),f.moveTo(U,185),f.lineTo(U+32,256),f.stroke(),f.beginPath(),f.moveTo(U+32,185),f.lineTo(U,256),f.stroke();const m=new me(d),g=new Q({color:14427686,metalness:.6,roughness:.3}),_=new Q({color:15658734,metalness:.9,roughness:.15}),p=new Q({color:2040865,roughness:.9}),u=new Q({color:165063,metalness:.5,roughness:.4}),y=new Q({color:1409085,roughness:.6}),v=new Q({map:i,roughness:.4}),S=new Q({map:m,roughness:.5,side:Ee}),P=new Q({map:o,roughness:.7,side:Ee}),b=new Q({map:h,roughness:.6}),A=new bt,D=new xt(.045,.045,1.8,12);D.rotateX(Math.PI/2);const M=new R(D,g);M.position.set(0,.65,.1),A.add(M);const w=new xt(.04,.04,.95,12);w.rotateX(-.18);const B=new R(w,g);B.position.set(0,.95,-.9),A.add(B),[-.1,.1].forEach(U=>{const j=new xt(.025,.02,.7,8);j.rotateX(.15);const pt=new R(j,_);pt.position.set(U,.48,-1.02),A.add(pt)});const F=new xt(.025,.025,.75,12);F.rotateZ(Math.PI/2);const rt=new R(F,_);rt.position.set(0,1.35,-.85),A.add(rt),[-.38,.38].forEach(U=>{const j=new xt(.032,.032,.14,12);j.rotateZ(Math.PI/2);const pt=new R(j,p);pt.position.set(U,1.35,-.85),A.add(pt)});const L=new te(.09,14,14);L.scale(1,1,.7);const N=new R(L,new ue({color:16777215}));N.position.set(0,1.05,-1.08),A.add(N),this.headlights.push(N);const Y=new te(.05,12,12);this.bellMesh=new R(Y,_),this.bellMesh.position.set(-.24,1.4,-.85),A.add(this.bellMesh);const $=new st(.26,.08,.32),J=new R($,p);J.position.set(0,1.08,-.15),A.add(J),[-.08,.08].forEach(U=>{const j=new xt(.02,.02,.12,8),pt=new R(j,_);pt.position.set(U,.98,-.15),A.add(pt)});const Z=new xt(.06,.06,.28,12);Z.rotateZ(Math.PI/2);const tt=new R(Z,_);tt.position.set(0,.52,-.15),A.add(tt),this.bodyGroup.add(A),this.frontWheel=this.createRickshawWheel(.42,g,_,p),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const nt=new xt(.46,.46,.12,16,1,!0,0,Math.PI*.8);nt.rotateZ(Math.PI/2);const ot=new R(nt,u);ot.position.set(0,.44,-1.05),this.bodyGroup.add(ot),[-.78,.78].forEach(U=>{const j=this.createRickshawWheel(.48,g,_,p);j.position.set(U,.48,.95),this.bodyGroup.add(j),this.wheels.push(j);const pt=new xt(.53,.53,.16,20,1,!0,0,Math.PI);pt.rotateZ(Math.PI/2);const Lt=new R(pt,u);Lt.position.set(U,.48,.95),this.bodyGroup.add(Lt)});const G=new bt,et=new st(1.25,.08,1.25),lt=new R(et,y);lt.position.set(0,.65,.75),G.add(lt);const Mt=new st(.9,.05,.5),ut=new R(Mt,y);ut.position.set(0,.48,.35),G.add(ut);const Pt=new st(1.2,.38,.58),Rt=new R(Pt,y);Rt.position.set(0,.86,.88),G.add(Rt),[-.62,.62].forEach((U,j)=>{const pt=new jt(1.15,.52),Lt=new R(pt,S);Lt.position.set(U,.96,.75),Lt.rotation.y=j===0?-Math.PI/2:Math.PI/2,G.add(Lt)});const Tt=new st(1.18,.14,.56),Nt=new R(Tt,b);Nt.position.set(0,1.08,.88),G.add(Nt);const z=new st(1.16,.22,.1),$t=new R(z,b);$t.position.set(0,1.15,1.08),G.add($t),[-.58,.58].forEach(U=>{const j=new st(.08,.28,.6),pt=new R(j,u);pt.position.set(U,1.22,.88),G.add(pt)});const yt=new jt(1.06,.52),wt=new R(yt,v);wt.position.set(0,.68,1.18),wt.rotation.y=Math.PI,G.add(wt);const Et=new jt(.96,.22),Qt=new Q({color:14427686,roughness:.9,side:Ee}),Ut=new R(Et,Qt);Ut.position.set(0,.32,1.18),G.add(Ut),[-.78,.78].forEach(U=>{const j=new R(new xt(.055,.055,.035,12),_);j.rotateX(Math.PI/2),j.position.set(U,.62,1.16),G.add(j);const pt=new te(.048,12,12),Lt=new R(pt,new ue({color:15680580}));Lt.position.set(U,.62,1.18),G.add(Lt),this.brakeLights.push(Lt)});const T=new xt(.68,.68,.9,24,1,!0,-Math.PI/2,Math.PI);T.rotateX(Math.PI/2);const x=new R(T,P);x.position.set(0,1.48,.7),G.add(x);const V=new Un(.68,.025,8,24,Math.PI),k=new R(V,g);k.position.set(0,1.48,1.15),G.add(k);for(let U=0;U<=14;U++){const j=U*Math.PI/14,pt=Math.cos(j)*.68,Lt=1.48+Math.sin(j)*.68,Ft=new R(new te(.022,6,6),new Q({color:14427686,roughness:.8}));Ft.position.set(pt,Lt-.02,1.15),G.add(Ft)}[-.64,.64].forEach(U=>{const j=new xt(.015,.015,1.15,8);j.rotateX(.42);const pt=new R(j,g);pt.position.set(U,1.4,.6),G.add(pt)}),this.bodyGroup.add(G);const H=new bt,X=new Q({color:165063,roughness:.8}),gt=new Q({color:9262372,roughness:.7}),ct=new Q({color:1409085,roughness:.9}),mt=new st(.36,.48,.22),At=new R(mt,X);At.position.set(0,1.42,-.25),At.rotation.x=.22,H.add(At);const Ot=new te(.12,14,14),at=new R(Ot,gt);at.position.set(0,1.74,-.32),H.add(at);const Jt=new Un(.11,.035,8,16);Jt.rotateX(Math.PI/2);const zt=new R(Jt,new Q({color:14427686}));zt.position.set(0,1.68,-.32),H.add(zt),[-.18,.18].forEach(U=>{const j=new xt(.04,.035,.52,8);j.rotateX(.75);const pt=new R(j,gt);pt.position.set(U,1.42,-.52),H.add(pt)});const it=new st(.38,.44,.32),dt=new R(it,ct);dt.position.set(0,1.05,-.18),H.add(dt),this.bodyGroup.add(H),this.buildCuteRomanticCouple(),[-.32,.32].forEach(U=>{const j=new Re(.12,.65,8);j.rotateX(-Math.PI/2);const pt=new ue({color:16759552,transparent:!0,opacity:0}),Lt=new R(j,pt);Lt.position.set(U,.58,1.25),this.bodyGroup.add(Lt),this.exhaustFires.push(Lt)})}createRickshawWheel(t,e,n,i){const r=new bt,a=new Un(t,.038,14,36);a.rotateY(Math.PI/2);const o=new R(a,i);r.add(o);const c=new Un(t*.92,.02,10,36);c.rotateY(Math.PI/2);const l=new R(c,n);r.add(l);const h=new xt(.06,.06,.14,14);h.rotateZ(Math.PI/2);const d=new R(h,e);r.add(d);for(let f=0;f<14;f++){const m=f*Math.PI/7,g=new xt(.005,.005,t*1.84,4);g.rotateX(m);const _=new R(g,n);r.add(_)}return r}buildCuteRomanticCouple(){this.coupleGroup=new bt,this.coupleGroup.position.set(0,0,0);const t=new Q({color:16106390,roughness:.6}),e=new Q({color:1841431,roughness:.5}),n=new Q({color:986638,roughness:.4}),i=new Q({color:15680580,roughness:.7}),r=new Q({color:1976635,roughness:.8}),a=new Q({color:15485081,roughness:.6}),o=new Q({color:16638023,roughness:.7}),c=new Q({color:16777215,roughness:.8}),l=new bt;l.position.set(-.25,1.18,.82);const h=new st(.32,.42,.24),d=new R(h,i);d.position.set(0,.22,0),d.rotation.y=.16,d.rotation.z=-.06,l.add(d);const f=new te(.12,14,14),m=new R(f,t);m.position.set(.02,.52,.02),m.rotation.y=.26,m.rotation.z=-.08,l.add(m);const g=new te(.13,14,14);g.scale(1.02,1.05,1.02);const _=new R(g,e);_.position.set(.02,.55,.01),l.add(_);const p=new st(.28,.18,.48),u=new R(p,r);u.position.set(0,-.05,-.16),l.add(u);const y=new xt(.04,.035,.38,8);y.rotateZ(.25);const v=new R(y,i);v.position.set(-.22,.18,0),l.add(v);const S=new xt(.04,.035,.34,8);S.rotateZ(-Math.PI/4),S.rotateX(-.18);const P=new R(S,i);P.position.set(.18,.14,-.07),l.add(P),this.coupleGroup.add(l);const b=new bt;b.position.set(.25,1.18,.82);const A=new st(.28,.38,.22),D=new R(A,a);D.position.set(0,.2,0),D.rotation.y=-.18,D.rotation.z=.08,b.add(D);const M=new st(.32,.35,.24),w=new R(M,o);w.position.set(0,.22,.02),b.add(w);const B=new te(.11,14,14),F=new R(B,t);F.position.set(-.02,.48,.02),F.rotation.y=-.3,F.rotation.z=.1,b.add(F);const rt=new te(.12,14,14);rt.scale(1.04,1.06,1.08);const L=new R(rt,n);L.position.set(-.02,.51,0),b.add(L);const N=new xt(.04,.02,.32,8);N.rotateX(-.4);const Y=new R(N,n);Y.position.set(-.01,.38,.15),b.add(Y);const $=new st(.26,.16,.46),J=new R($,c);J.position.set(0,-.05,-.16),b.add(J);const Z=new xt(.035,.03,.35,8);Z.rotateZ(-.25),Z.rotateX(-.25);const tt=new R(Z,a);tt.position.set(.2,.16,-.05),b.add(tt);const nt=new bt,ot=new xt(.007,.007,.32,6),G=new Q({color:1409085,roughness:.8}),et=new R(ot,G);et.position.set(0,.14,0),nt.add(et);const lt=new st(.07,.012,.035),Mt=new R(lt,G);Mt.position.set(.035,.12,0),Mt.rotation.z=.3,nt.add(Mt);const ut=new R(lt,G);ut.position.set(-.035,.18,0),ut.rotation.z=-.3,nt.add(ut);const Pt=new Q({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Rt=new R(new wr(.055,1),Pt);Rt.position.set(0,.3,0),Rt.scale.set(1.1,1.25,1.1),nt.add(Rt);const Tt=new R(new te(.038,8,8),new Q({color:10033947,roughness:.3}));Tt.position.set(0,.32,0),nt.add(Tt),nt.position.set(.22,.22,-.15),nt.rotation.x=-.35,nt.rotation.z=-.22,b.add(nt);const Nt=new xt(.035,.03,.32,8);Nt.rotateZ(Math.PI/4),Nt.rotateX(-.18);const z=new R(Nt,a);z.position.set(-.17,.14,-.07),b.add(z),this.coupleGroup.add(b);const $t=new bt;$t.position.set(0,1.28,.74);const yt=new R(new te(.045,10,10),t);yt.scale.set(1.3,.9,1.1),yt.position.set(-.02,0,0),$t.add(yt);const wt=new R(new te(.042,10,10),t);wt.scale.set(1.2,.85,1.05),wt.position.set(.02,.01,.01),$t.add(wt),this.coupleGroup.add($t),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,r,a){const c=t*1e3/3600/.42*a;this.wheelRotation-=c,this.wheels.forEach(p=>{p.rotation.x=this.wheelRotation});const l=n-e,h=-l*.12;this.currentRoll+=(h-this.currentRoll)*Math.min(1,a*7),this.bodyGroup.rotation.z=this.currentRoll;const d=-l*.08;this.currentYaw+=(d-this.currentYaw)*Math.min(1,a*6),this.bodyGroup.rotation.y=this.currentYaw;let f=0;i?f=.04:r&&(f=-.05),this.currentPitch+=(f-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const m=performance.now()*.001,g=Math.min(1,t/80),_=Math.sin(m*8.5)*.025*g;this.coupleGroup.position.y=_,this.coupleGroup.rotation.z=Math.sin(m*4.2)*.015*g,this.exhaustFires.forEach(p=>{r?(p.material.opacity=.9,p.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):p.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(p=>p.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(p=>p.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.15,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Xp{constructor(){this.group=new bt,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new un,this.collisionSize=new C(1.6,1.95,3.1),this.buildCNG(),this.group.scale.set(.86,.86,.86)}buildCNG(){this.bodyGroup=new bt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#18181b",e.fillRect(0,0,512,384),e.fillStyle="#fde047",e.strokeStyle="#dc2626",e.lineWidth=5,e.font="bold 38px sans-serif",e.textAlign="center",e.strokeText("সি.এন.জি চালিত",256,95),e.fillText("সি.এন.জি চালিত",256,95);const n=["#0284c7","#ef4444","#f59e0b","#10b981"];[{x:195,y:220,r:24,c:0},{x:256,y:195,r:26,c:1},{x:317,y:220,r:24,c:2},{x:256,y:260,r:22,c:3}].forEach(it=>{e.fillStyle=n[it.c],e.beginPath(),e.ellipse(it.x,it.y,it.r,it.r*1.25,0,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=2,e.stroke(),e.strokeStyle="#e2e8f0",e.lineWidth=2,e.beginPath(),e.moveTo(it.x,it.y+it.r*1.25),e.lineTo(256,340),e.stroke()});const r=new me(t),a=document.createElement("canvas");a.width=512,a.height=160;const o=a.getContext("2d");o.fillStyle="#15803d",o.fillRect(0,0,512,160),o.fillStyle="#ffffff",o.fillRect(20,15,472,58),o.strokeStyle="#0284c7",o.lineWidth=3,o.strokeRect(20,15,472,58),o.fillStyle="#0284c7",o.font="bold 32px sans-serif",o.textAlign="center",o.fillText("সি.এন.জি চালিত",256,56),o.fillStyle="#f59e0b",o.fillRect(20,85,472,60),o.strokeStyle="#dc2626",o.lineWidth=3,o.strokeRect(20,85,472,60),o.fillStyle="#b91c1c",o.font="bold 34px sans-serif",o.fillText("মা বাবার দোয়া",256,128);const c=new me(a),l=document.createElement("canvas");l.width=384,l.height=384;const h=l.getContext("2d");h.fillStyle="rgba(21, 128, 61, 0.4)",h.fillRect(0,0,384,384),h.strokeStyle="#15803d",h.lineWidth=4;for(let it=0;it<384;it+=28)h.beginPath(),h.moveTo(it,0),h.lineTo(it,384),h.stroke(),h.beginPath(),h.moveTo(0,it),h.lineTo(384,it),h.stroke();h.fillStyle="#fef08a",h.strokeStyle="#dc2626",h.lineWidth=6,h.font="900 85px sans-serif",h.textAlign="center",h.strokeText("OK",192,225),h.fillText("OK",192,225);const d=new me(l),f=document.createElement("canvas");f.width=256,f.height=128;const m=f.getContext("2d");m.fillStyle="#15803d",m.fillRect(0,0,256,128);const g=["#ef4444","#f59e0b","#0284c7"];for(let it=0;it<3;it++)m.fillStyle=g[it],m.fillRect(35,25+it*26,186,18);m.fillStyle="#ffffff",m.strokeStyle="#334155",m.lineWidth=3,m.beginPath(),m.arc(128,64,18,0,Math.PI*2),m.fill(),m.stroke();const _=new me(f),p=document.createElement("canvas");p.width=512,p.height=360;const u=p.getContext("2d");u.fillStyle="#15803d",u.fillRect(0,0,512,360),u.strokeStyle="#166534",u.lineWidth=4,u.strokeRect(6,6,500,348);for(let it=50;it<=210;it+=22)u.fillStyle="#14532d",u.fillRect(25,it,105,8),u.fillStyle="#22c55e",u.fillRect(25,it+8,105,2),u.fillStyle="#14532d",u.fillRect(382,it,105,8),u.fillStyle="#22c55e",u.fillRect(382,it+8,105,2),it>=165&&(u.fillStyle="#14532d",u.fillRect(145,it,222,7),u.fillStyle="#22c55e",u.fillRect(145,it+7,222,2));u.fillStyle="#b91c1c",u.beginPath(),u.roundRect(24,18,95,26,6),u.fill(),u.strokeStyle="#fde047",u.lineWidth=2,u.stroke(),u.fillStyle="#ffffff",u.font="bold 16px sans-serif",u.textAlign="center",u.fillText("উত্তরা",71,37),u.fillStyle="#065f46",u.beginPath(),u.roundRect(390,18,98,26,6),u.fill(),u.strokeStyle="#fde047",u.lineWidth=2,u.stroke(),u.fillStyle="#fde047",u.font="bold 13px sans-serif",u.textAlign="center",u.fillText("RE CNG",439,32),u.fillStyle="#ffffff",u.font="9px sans-serif",u.fillText("FOUR STROKE",439,42),u.fillStyle="#047857",u.beginPath(),u.roundRect(176,20,160,72,8),u.fill(),u.strokeStyle="#ffffff",u.lineWidth=3,u.stroke(),u.fillStyle="#ffffff",u.font="bold 19px sans-serif",u.textAlign="center",u.fillText("ঢাকা মেট্রো-থ",256,48),u.font="bold 24px sans-serif",u.fillText("১১-৫০৫১",256,80),u.fillStyle="#facc15",u.beginPath(),u.roundRect(138,104,236,44,6),u.fill(),u.strokeStyle="#dc2626",u.lineWidth=3,u.stroke(),u.fillStyle="#dc2626",u.beginPath(),u.arc(158,126,9,0,Math.PI*2),u.arc(354,126,9,0,Math.PI*2),u.fill(),u.fillStyle="#1c1917",u.font="900 24px sans-serif",u.textAlign="center",u.fillText("UTTARA",256,134);const y=(it,dt,U)=>{const j=["#0284c7","#10b981","#f59e0b","#ef4444","#ec4899"],pt=Math.PI/j.length;for(let Lt=0;Lt<j.length;Lt++)u.fillStyle=j[Lt],u.beginPath(),u.moveTo(it,dt),u.arc(it,dt,U,Math.PI+Lt*pt,Math.PI+(Lt+1)*pt),u.closePath(),u.fill();u.strokeStyle="#ffffff",u.lineWidth=2,u.stroke()};y(65,305,46),y(447,305,46);const v=new me(p),S=new Q({color:1409085,metalness:.45,roughness:.35});new Q({color:16096779,roughness:.4});const P=new Q({color:1579035,roughness:.9}),b=new Q({color:15658734,metalness:.9,roughness:.15}),A=new Q({color:2040865,roughness:.9}),D=new Q({color:9741240,metalness:.6,roughness:.3}),M=new Li({color:988970,transparent:!0,opacity:.55,roughness:.1}),w=new Li({color:9684477,transparent:!0,opacity:.48,roughness:.08,transmission:.65}),B=new Q({color:1579035,roughness:.85}),F=new Q({map:r,roughness:.85}),rt=new Q({map:c,roughness:.5}),L=new Q({map:d,transparent:!0,opacity:.92,side:Ee}),N=new Q({map:_,roughness:.4}),Y=new Q({map:v,roughness:.45,metalness:.1}),$=new st(1.65,.45,2.7),J=new R($,S);J.position.set(0,.48,0),this.bodyGroup.add(J),[-.83,.83].forEach((it,dt)=>{const U=new jt(2.35,.42),j=new R(U,rt);j.position.set(it,.48,.05),j.rotation.y=dt===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(j)});const Z=new xt(.55,.82,.85,16,1,!1,-Math.PI/2,Math.PI);Z.rotateX(Math.PI/2);const tt=new R(Z,S);tt.position.set(0,.72,-1.25),this.bodyGroup.add(tt);const nt=new jt(.85,.38),ot=new R(nt,N);ot.position.set(0,.85,-1.58),this.bodyGroup.add(ot);const G=new jt(1.45,.68),et=new R(G,M);et.position.set(0,1.45,-.92),et.rotation.x=-.25,this.bodyGroup.add(et);const lt=new xt(.85,.85,2.25,24,1,!0,Math.PI*.1,Math.PI*.8);lt.rotateZ(Math.PI/2);const Mt=new R(lt,P);Mt.position.set(0,1.82,.15),this.bodyGroup.add(Mt);const ut=new R(new jt(1.58,.72),P);ut.position.set(0,1.62,1.28),ut.rotation.y=Math.PI,this.bodyGroup.add(ut);const Pt=new R(new st(1.18,.52,.04),B);Pt.position.set(0,1.62,1.3),this.bodyGroup.add(Pt);const Rt=new R(new jt(1.1,.44),w);Rt.position.set(0,1.62,1.325),Rt.rotation.y=Math.PI,this.bodyGroup.add(Rt),[-.84,.84].forEach((it,dt)=>{const U=new jt(1.2,.55),j=new R(U,F);j.position.set(it,1.76,.42),j.rotation.y=dt===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(j)}),[-.83,.83].forEach((it,dt)=>{const U=new jt(1.2,.85),j=new R(U,L);j.position.set(it,1.25,.1),j.rotation.y=dt===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(j)}),this.frontWheel=this.createCNGWheel(.32,A,D),this.frontWheel.position.set(0,.32,-1.42),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const Tt=new xt(.38,.38,.22,16,1,!0,0,Math.PI);Tt.rotateZ(Math.PI/2);const Nt=new R(Tt,S);Nt.position.set(0,.35,-1.42),this.bodyGroup.add(Nt);const z=new xt(.04,.04,.55,8),$t=new R(z,b);$t.position.set(0,.65,-1.42),this.bodyGroup.add($t),[-.75,.75].forEach(it=>{const dt=this.createCNGWheel(.35,A,D);dt.position.set(it,.35,.85),this.bodyGroup.add(dt),this.wheels.push(dt)});const yt=new xt(.02,.02,.35,8);yt.rotateX(.4);const wt=new R(yt,b);wt.position.set(0,.76,-1.55),this.bodyGroup.add(wt);const Et=new te(.12,16,16);Et.scale(1,1,.65);const Qt=new R(Et,new ue({color:16777215}));Qt.position.set(0,.95,-1.62),this.bodyGroup.add(Qt),this.headlights.push(Qt);const Ut=new R(new jt(1.64,.94),Y);Ut.position.set(0,.88,1.35),Ut.rotation.y=Math.PI,this.bodyGroup.add(Ut),[-.66,.66].forEach(it=>{const dt=new st(.13,.28,.05),U=new R(dt,B);U.position.set(it,.82,1.37),this.bodyGroup.add(U);const j=new st(.11,.13,.04),pt=new R(j,new ue({color:15680580}));pt.position.set(it,.88,1.39),this.bodyGroup.add(pt),this.brakeLights.push(pt);const Lt=new st(.11,.09,.04),Ft=new R(Lt,new ue({color:16317180}));Ft.position.set(it,.75,1.39),this.bodyGroup.add(Ft)});const T=new bt;T.position.set(0,0,0);const x=new xt(.035,.035,1.72,12);x.rotateZ(Math.PI/2);const V=new R(x,S);V.position.set(0,.38,1.44),T.add(V),[-.85,.85].forEach(it=>{const dt=new xt(.035,.035,.25,10);dt.rotateX(Math.PI/2);const U=new R(dt,S);U.position.set(it,.38,1.34),T.add(U)});const k=document.createElement("canvas");k.width=128,k.height=64;const H=k.getContext("2d");H.fillStyle="#facc15",H.fillRect(0,0,128,64),H.strokeStyle="#1c1917",H.lineWidth=4;for(let it=-64;it<192;it+=16)H.beginPath(),H.moveTo(it,0),H.lineTo(it+32,64),H.stroke(),H.beginPath(),H.moveTo(it+32,0),H.lineTo(it,64),H.stroke();const X=new me(k),gt=new R(new jt(.44,.12),new Q({map:X,roughness:.4}));gt.position.set(0,.38,1.48),gt.rotation.y=Math.PI,T.add(gt);const ct=new xt(.022,.022,1.48,10);ct.rotateZ(Math.PI/2);const mt=new R(ct,b);mt.position.set(0,.26,1.43),T.add(mt),[-.68,.68].forEach(it=>{const dt=new st(.24,.18,.02),U=new R(dt,A);U.position.set(it,.22,1.36),T.add(U)}),this.bodyGroup.add(T);const At=new bt,Ot=new Q({color:9262372,roughness:.7}),at=new Q({color:165063,roughness:.8}),Jt=new R(new st(.38,.45,.22),at);Jt.position.set(0,1.15,-.42),At.add(Jt);const zt=new R(new te(.12,12,12),Ot);zt.position.set(0,1.48,-.42),At.add(zt),this.bodyGroup.add(At),[-.35,.35].forEach(it=>{const dt=new Re(.12,.7,8);dt.rotateX(-Math.PI/2);const U=new ue({color:440020,transparent:!0,opacity:0}),j=new R(dt,U);j.position.set(it,.42,1.45),this.bodyGroup.add(j),this.exhaustFires.push(j)})}createCNGWheel(t,e,n){const i=new bt,r=new xt(t,t,.22,18);r.rotateZ(Math.PI/2);const a=new R(r,e);i.add(a);const o=new xt(t*.65,t*.65,.23,14);o.rotateZ(Math.PI/2);const c=new R(o,n);return i.add(c),i}update(t,e,n,i,r,a){const c=t*1e3/3600/.32*a;this.wheelRotation-=c,this.wheels.forEach(m=>{m.rotation.x=this.wheelRotation});const l=n-e,h=-l*.14;this.currentRoll+=(h-this.currentRoll)*Math.min(1,a*8),this.bodyGroup.rotation.z=this.currentRoll;const d=-l*.09;this.currentYaw+=(d-this.currentYaw)*Math.min(1,a*7),this.bodyGroup.rotation.y=this.currentYaw;let f=0;i?f=.045:r&&(f=-.04),this.currentPitch+=(f-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch,this.exhaustFires.forEach(m=>{r?(m.material.opacity=.95,m.scale.set(1.2+Math.random()*.4,1.2+Math.random()*.5,1.2+Math.random()*.4),m.material.color.setHex(Math.random()>.4?440020:3718648)):m.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(m=>m.scale.set(1.4,1.4,1.4))):this.headlights.forEach(m=>m.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.05,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.4,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.15,this.bodyGroup.position.y=.3}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class qp{constructor(){this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[]}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let o=0;o<128;o+=8)e.fillStyle="#6b7280",e.fillRect(o,0,4,128),e.fillStyle="#d1d5db",e.fillRect(o+4,0,4,128);const n=new me(t);n.wrapS=je,n.wrapT=je,n.repeat.set(4,4),this.tinRoofMat=new Q({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new Q({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d");r.fillStyle="#c8a165",r.fillRect(0,0,128,128),r.strokeStyle="#8c6239",r.lineWidth=3;for(let o=0;o<=128;o+=16)r.beginPath(),r.moveTo(0,o),r.lineTo(128,o),r.stroke(),r.beginPath(),r.moveTo(o,0),r.lineTo(o,128),r.stroke();const a=new me(i);a.wrapS=je,a.wrapT=je,a.repeat.set(2,2),this.bambooWallMat=new Q({map:a,roughness:.85,color:13935475}),this.woodMat=new Q({color:6045747,roughness:.85}),this.mudPlinthMat=new Q({color:8150594,roughness:.95}),this.brickMat=new Q({color:10239278,roughness:.9}),this.palmLeafMat=new Q({color:3046706,roughness:.6,side:Ee}),this.bananaLeafMat=new Q({color:4431943,roughness:.5,side:Ee}),this.treeCrownMat=new Q({color:1793568,roughness:.85}),this.bambooTrunkMat=new Q({color:6732650,roughness:.4}),this.palmTrunkMat=new Q({color:7162945,roughness:.9}),this.hayMat=new Q({color:13934615,roughness:.95}),this.paddyFieldMat=new Q({color:3706428,roughness:.8}),this.waterMat=new Q({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new Q({color:10395294,roughness:.7}),this.cowWhiteMat=new Q({color:16119280,roughness:.6}),this.cowBrownMat=new Q({color:9262372,roughness:.65}),this.cowBlackPatchMat=new Q({color:2171169,roughness:.7}),this.hornMat=new Q({color:3621201,roughness:.4}),this.ropeMat=new ue({color:12756553}),this.duckMat=new Q({color:16777215,roughness:.5}),this.beakMat=new Q({color:16750592,roughness:.4}),this.smokeMat=new ue({color:16777215,transparent:!0,opacity:.35})}createCow(t="brown"){const e=new bt;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new st(.9,.95,1.7),r=new R(i,n);r.position.set(0,1.05,0),r.castShadow=!0,e.add(r);const a=new Re(.3,.45,8),o=new R(a,n);o.position.set(0,1.62,-.45),o.rotation.x=-.2,o.castShadow=!0,e.add(o);const c=new st(.12,.45,.5),l=new R(c,n);l.position.set(0,.85,-.85),e.add(l);const h=new bt;h.position.set(0,1.25,-.85);const d=new st(.45,.55,.6),f=new R(d,n);f.position.set(0,.15,-.2),f.rotation.x=.35,h.add(f);const m=new st(.48,.52,.7),g=new R(m,n);g.position.set(0,.28,-.55),h.add(g);const _=new Q({color:2236962,roughness:.8}),p=new st(.36,.3,.3),u=new R(p,_);u.position.set(0,.18,-.92),h.add(u),[-.22,.22].forEach(N=>{const Y=new Re(.06,.35,6),$=new R(Y,this.hornMat);$.position.set(N,.56,-.48),$.rotation.z=N>0?-.4:.4,$.rotation.x=.3,h.add($);const J=new st(.22,.08,.1),Z=new R(J,n);Z.position.set(N>0?.32:-.32,.38,-.45),Z.rotation.z=N>0?-.35:.35,h.add(Z)}),e.add(h),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(N=>{const Y=new st(.2,.75,.2),$=new R(Y,n);$.position.set(N.x,.38,N.z),$.castShadow=!0,e.add($);const J=new st(.22,.1,.22),Z=new R(J,this.hornMat);Z.position.set(N.x,.05,N.z),e.add(Z)});const v=new bt;v.position.set(0,1.35,.85);const S=new xt(.03,.03,.85,6);S.translate(0,-.42,0);const P=new R(S,n);v.add(P);const b=new Re(.08,.25,6);b.translate(0,-.9,0);const A=new R(b,this.hornMat);v.add(A),e.add(v);const D=new xt(.08,.1,1.2,8),M=new R(D,this.woodMat);M.position.set(.9,.6,-1.2),e.add(M);const w=[new C(0,1.2,-.8),new C(.45,.75,-1),new C(.9,.85,-1.2)],B=new fs(w),F=new Pi(B,8,.02,4,!1),rt=new R(F,this.ropeMat);e.add(rt);const L={type:"cow",head:h,tail:v,seed:Math.random()*10};return this.animatedAnimals.push(L),e}createVillageHouse(t=!1){const e=new bt;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new st(6.6,.45,5.2),r=new R(i,this.mudPlinthMat);r.position.set(0,.22,0),r.receiveShadow=!0,e.add(r);const a=new st(5.8,2.6,3.8),o=new R(a,this.bambooWallMat);o.position.set(0,1.75,-.4),o.castShadow=!0,o.receiveShadow=!0,e.add(o);const c=new st(.85,1.8,.08),l=new R(c,this.woodMat);l.position.set(.6,1.35,1.52),e.add(l),[-1.6,-.6].forEach(g=>{const _=new st(.7,.8,.08),p=new R(_,this.woodMat);p.position.set(g,1.8,1.52),e.add(p)});const h=new st(6.6,.1,2.8),d=new R(h,n);d.position.set(0,3.65,-.9),d.rotation.x=-.52,d.castShadow=!0,e.add(d);const f=new st(6.6,.1,3.4),m=new R(f,n);return m.position.set(0,3.5,.8),m.rotation.x=.46,m.castShadow=!0,e.add(m),[-2.5,-.8,.8,2.5].forEach(g=>{const _=new xt(.08,.08,2.3,8),p=new R(_,this.woodMat);p.position.set(g,1.6,2.1),p.castShadow=!0,e.add(p)}),e}createTeaStall(){const t=new bt;t.name="cha_er_tong";const e=new st(3.2,1,1.8),n=new R(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new st(3.8,.08,2.8),r=new R(i,this.tinRoofMat);r.position.set(0,2.3,.2),r.rotation.x=.2,r.castShadow=!0,t.add(r),[-1.6,1.6].forEach(_=>{const p=new xt(.07,.07,2.2,6),u=new R(p,this.woodMat);u.position.set(_,1.1,1.2),t.add(u)});const a=new st(3,.08,.45),o=new R(a,this.woodMat);o.position.set(0,.45,1.8),t.add(o),[-1.2,1.2].forEach(_=>{const p=new st(.08,.45,.4),u=new R(p,this.woodMat);u.position.set(_,.22,1.8),t.add(u)});const c=new Q({color:13421772,metalness:.9,roughness:.2}),l=new xt(.18,.22,.35,10),h=new R(l,c);h.position.set(-.6,1.18,.2),t.add(h);const d=new Li({color:16777215,transmission:.7,roughness:.1}),f=new xt(.12,.12,.28,8),m=new R(f,d);m.position.set(.6,1.15,.1),t.add(m);const g=new bt;g.position.set(-.6,1.45,.2),t.add(g);for(let _=0;_<4;_++){const p=new te(.08,6,6),u=new R(p,this.smokeMat);u.position.y=_*.25,g.add(u)}return this.smokeEmitters.push(g),t}createHaystack(){const t=new bt;t.name="khorer_gada";const e=new xt(1.6,1.9,1.4,12),n=new R(e,this.hayMat);n.position.y=.7,n.castShadow=!0,t.add(n);const i=new xt(1,1.6,1.2,12),r=new R(i,this.hayMat);r.position.y=2,r.castShadow=!0,t.add(r);const a=new Re(1,1.5,12),o=new R(a,this.hayMat);o.position.y=3.35,o.castShadow=!0,t.add(o);const c=new xt(.04,.05,4.8,6),l=new R(c,this.bambooTrunkMat);return l.position.y=2.4,t.add(l),t}createJatriChawni(){const t=new bt;t.name="jatri_chawni";const e=new st(6.2,.35,3.2),n=new R(e,this.concreteMat);n.position.set(0,.175,0),n.receiveShadow=!0,t.add(n);const i=new st(6.4,.14,.25),r=new R(i,this.brickMat);r.position.set(0,.07,-1.5),t.add(r);const a=new st(5.6,2.5,.2),o=new R(a,this.brickMat);o.position.set(0,1.45,1.35),o.castShadow=!0,t.add(o);const c=new jt(5.4,2.3),l=new R(c,this.culvertRailingMaterial);l.position.set(0,1.45,1.24),t.add(l),[[-2.6,-1.25],[2.6,-1.25],[-2.6,1.25],[2.6,1.25]].forEach(([U,j])=>{const pt=new xt(.08,.09,2.6,12),Lt=new R(pt,this.culvertRailingMaterial);Lt.position.set(U,1.45,j),Lt.castShadow=!0,t.add(Lt);const Ft=new xt(.12,.12,.35,12),ht=new R(Ft,new Q({color:1409085}));ht.position.set(U,.45,j),t.add(ht)});const d=new xt(2.8,2.8,6.4,24,1,!0,Math.PI*.2,Math.PI*.6);d.rotateZ(Math.PI/2);const f=new R(d,this.tinRoofMat);f.position.set(0,2.85,.05),f.castShadow=!0,t.add(f),[-2.2,0,2.2].forEach(U=>{const j=new st(.06,.06,2.6),pt=new R(j,new Q({color:3359061}));pt.position.set(U,2.65,0),t.add(pt)});const m=new Np(16772565,3.5,16);m.position.set(0,2.45,.35),t.add(m);const g=new xt(.14,.18,.28,8,1,!0),_=new R(g,new Q({color:1976635,wireframe:!0}));_.position.set(0,2.48,.35),t.add(_);const p=new R(new te(.1,12,12),new ue({color:16772565}));p.position.set(0,2.48,.35),t.add(p);const u=document.createElement("canvas");u.width=512,u.height=128;const y=u.getContext("2d");y.fillStyle="#15803d",y.fillRect(0,0,512,128),y.strokeStyle="#f59e0b",y.lineWidth=8,y.strokeRect(6,6,500,116),y.fillStyle="#ffffff",y.font="bold 44px sans-serif",y.textAlign="center",y.fillText("যাত্রী ছাউনি",256,60),y.fillStyle="#fde047",y.font="bold 26px sans-serif",y.fillText("বাস স্টপ (BUS STOP)",256,102);const v=new me(u),S=new jt(3.6,.95),P=new Q({map:v,roughness:.5}),b=new R(S,P);b.position.set(0,2.7,-1.35),t.add(b);const A=new bt;A.position.set(0,0,0);const D=new st(4.4,.12,.7),M=new R(D,this.woodMat);M.position.set(0,.65,.5),M.castShadow=!0,A.add(M);const w=new st(4.4,.42,.1),B=new R(w,this.woodMat);B.position.set(0,1.12,.82),B.castShadow=!0,A.add(B),[-1.9,0,1.9].forEach(U=>{const j=new st(.12,.35,.58),pt=new R(j,this.concreteMat);pt.position.set(U,.45,.5),A.add(pt);const Lt=new st(.08,.55,.08),Ft=new R(Lt,new Q({color:3359061}));Ft.position.set(U,.95,.82),A.add(Ft)}),t.add(A);const F=new bt;F.scale.set(1.35,1.35,1.35),F.position.set(0,.72,.48);const rt=new Q({color:16106390,roughness:.6}),L=new Q({color:959977,roughness:.7}),N=new Q({color:1976635,roughness:.8}),Y=new Q({color:1579035,roughness:.5}),$=new Q({color:14362487,roughness:.6}),J=new Q({color:16436245,roughness:.7}),Z=new Q({color:16777215,roughness:.8}),tt=new Q({color:986638,roughness:.4}),nt=new bt;nt.position.set(-.26,0,0);const ot=new R(new st(.36,.46,.24),L);ot.position.set(0,.25,0),ot.rotation.y=.35,ot.rotation.z=-.12,nt.add(ot);const G=new R(new te(.12,14,14),rt);G.position.set(.04,.58,.02),G.rotation.y=.45,G.rotation.z=-.12,nt.add(G);const et=new R(new te(.13,14,14),Y);et.scale.set(1.02,1.05,1.02),et.position.set(.04,.61,.01),nt.add(et);const lt=new R(new st(.34,.16,.44),N);lt.position.set(0,-.02,-.15),nt.add(lt),[-.1,.1].forEach(U=>{const j=new R(new xt(.05,.045,.38,8),N);j.position.set(U,-.22,-.32),nt.add(j)});const Mt=new R(new xt(.045,.04,.34,8),L);Mt.position.set(.18,.14,-.05),Mt.rotation.z=-Math.PI/4,Mt.rotation.x=-.18,nt.add(Mt),F.add(nt);const ut=new bt;ut.position.set(.26,0,0);const Pt=new R(new st(.32,.42,.22),$);Pt.position.set(0,.23,0),Pt.rotation.y=-.32,Pt.rotation.z=.14,ut.add(Pt);const Rt=new R(new st(.34,.36,.24),J);Rt.position.set(0,.24,.02),ut.add(Rt);const Tt=new R(new te(.115,14,14),rt);Tt.position.set(-.06,.54,.02),Tt.rotation.y=-.38,Tt.rotation.z=.22,ut.add(Tt);const Nt=new R(new te(.125,14,14),tt);Nt.scale.set(1.04,1.06,1.08),Nt.position.set(-.06,.57,0),ut.add(Nt);const z=new R(new xt(.04,.02,.36,8),tt);z.position.set(-.04,.42,.16),z.rotation.x=-.35,ut.add(z);const $t=new R(new st(.3,.15,.42),Z);$t.position.set(0,-.02,-.15),ut.add($t),[-.08,.08].forEach(U=>{const j=new R(new xt(.042,.038,.38,8),Z);j.position.set(U,-.22,-.32),ut.add(j)});const yt=new R(new xt(.04,.035,.32,8),$);yt.position.set(-.16,.14,-.05),yt.rotation.z=Math.PI/4,yt.rotation.x=-.18,ut.add(yt);const wt=new bt;wt.position.set(.22,.22,-.2),wt.rotation.x=-.25,wt.rotation.z=-.15;const Et=new xt(.016,.018,.38,8),Qt=new Q({color:1409085,roughness:.8}),Ut=new R(Et,Qt);wt.add(Ut);const T=new jt(.12,.06),x=new Q({color:1483594,roughness:.6,side:Ee});[-1,1].forEach(U=>{const j=new R(T,x);j.position.set(U*.06,-.04,0),j.rotation.z=U*.55,wt.add(j)});const V=new Re(.07,.09,5);V.rotateX(Math.PI);const k=new R(V,x);k.position.set(0,.18,0),wt.add(k);const H=new Q({color:14427686,roughness:.35,metalness:.1}),X=new te(.09,14,14);X.scale(1.15,1.35,1.15);const gt=new R(X,H);gt.position.set(0,.26,0),wt.add(gt);const ct=new Un(.08,.035,8,16);ct.rotateX(Math.PI/2);const mt=new R(ct,H);mt.position.set(0,.23,0),wt.add(mt),ut.add(wt),F.add(ut);const At=new R(new te(.065,12,12),rt);At.scale.set(1.6,.95,1.2),At.position.set(0,.1,-.06),F.add(At);const Ot=new bt;Ot.position.set(0,1.38,.05);const at=new ue({color:16723285}),Jt=new R(new te(.075,10,10),at);Jt.position.set(-.05,.04,0),Ot.add(Jt);const zt=new R(new te(.075,10,10),at);zt.position.set(.05,.04,0),Ot.add(zt);const it=new Re(.11,.14,12);it.rotateZ(Math.PI);const dt=new R(it,at);return dt.position.set(0,-.04,0),Ot.add(dt),F.add(Ot),t.add(F),this.animatedAnimals.push({type:"couple",mesh:F,heart:Ot,seed:Math.random()*10}),t}createCoconutTree(){const t=new bt;t.name="coconut_tree";const e=new fs([new C(0,0,0),new C(.4,3.5,.2),new C(.9,7.5,.5),new C(1.1,10.5,.7)]),n=new Pi(e,12,.24,8,!1),i=new R(n,this.palmTrunkMat);i.castShadow=!0,t.add(i);const r=new C(1.1,10.5,.7),a=10;for(let o=0;o<a;o++){const c=o*Math.PI*2/a,l=new jt(.8,3.4);l.translate(0,1.7,0);const h=new R(l,this.palmLeafMat);h.position.copy(r),h.rotation.y=c,h.rotation.x=.85,h.castShadow=!0,t.add(h)}for(let o=0;o<5;o++){const c=new te(.2,8,8),l=new R(c,this.palmLeafMat);l.position.set(r.x+(Math.random()-.5)*.4,r.y-.25,r.z+(Math.random()-.5)*.4),t.add(l)}return t}createBananaTree(){const t=new bt;t.name="banana_tree";const e=new xt(.18,.28,2.8,8),n=new R(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let r=0;r<i;r++){const a=r*Math.PI*2/i,o=new jt(.75,2.4);o.translate(0,1.2,0);const c=new R(o,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=a,c.rotation.x=.95,c.castShadow=!0,t.add(c)}return t}createBambooGrove(){const t=new bt;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,r=new xt(.06,.08,i,6),a=new R(r,this.bambooTrunkMat);a.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),a.rotation.z=(Math.random()-.5)*.15,a.rotation.x=(Math.random()-.5)*.15,t.add(a);const o=new te(.8+Math.random()*.5,6,6),c=new R(o,this.palmLeafMat);c.position.set(a.position.x,i-.3,a.position.z),t.add(c)}return t}createElectricPole(){const t=new bt;t.name="electric_pole";const e=new xt(.14,.18,8.5,8),n=new R(e,this.concreteMat);n.position.y=4.25,n.castShadow=!0,t.add(n);const i=new st(2.2,.12,.12),r=new R(i,this.concreteMat);return r.position.y=7.8,t.add(r),[-.9,0,.9].forEach(a=>{const o=new xt(.04,.05,.2,6),c=new R(o,this.tinRoofMat);c.position.set(a,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new bt;n.name="village_pond";const i=new jt(t,e);i.rotateX(-Math.PI/2);const r=new R(i,this.waterMat);r.position.y=.05,n.add(r),this.mudPlinthMat;const a=3;for(let o=0;o<a;o++){const c=new bt;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const l=new te(.24,8,8);l.scale(1,.7,1.4);const h=new R(l,this.duckMat);c.add(h);const d=new te(.14,8,8),f=new R(d,this.duckMat);f.position.set(0,.22,-.22),c.add(f);const m=new Re(.06,.16,6);m.rotateX(-Math.PI/2);const g=new R(m,this.beakMat);g.position.set(0,.2,-.34),c.add(g),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new bt;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const r=new xt(.04,.04,t,6);r.rotateX(Math.PI/2);const a=new R(r,this.bambooTrunkMat);a.position.y=i,e.add(a)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const r=-t*.5+i*1.4,a=new xt(.05,.06,1.25,6),o=new R(a,this.woodMat);o.position.set(0,.62,r),o.castShadow=!0,e.add(o)}return e}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}}),this.smokeEmitters.forEach(e=>{e.children.forEach((n,i)=>{n.position.y+=.015,n.position.x+=Math.sin(t*3+i)*.005,n.position.y>1.4&&(n.position.y=0)})})}}class Yp{constructor(t){this.scene=t,this.segments=[],this.segmentLength=Dt.ROAD_SEGMENT_LENGTH,this.segmentCount=Dt.ROAD_SEGMENT_COUNT,this.roadWidth=Dt.ROAD_WIDTH,this.props=new qp,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let h=0;h<i.length;h+=4){const d=(Math.random()-.5)*12;i[h]=Math.min(255,Math.max(0,i[h]+d)),i[h+1]=Math.min(255,Math.max(0,i[h+1]+d)),i[h+2]=Math.min(255,Math.max(0,i[h+2]+d))}e.putImageData(n,0,0);const r=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",r.forEach(h=>{e.fillRect(h-50,0,36,t.height),e.fillRect(h+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const a=new me(t);a.wrapS=je,a.wrapT=je,a.repeat.set(1,1),a.anisotropy=8,this.roadMaterial=new Q({map:a,roughness:.82,metalness:.12});const o=document.createElement("canvas");o.width=512,o.height=512;const c=o.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let h=0;h<512;h+=24)c.beginPath(),c.moveTo(0,h),c.lineTo(512,h),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const l=new me(o);l.wrapS=je,l.wrapT=je,l.repeat.set(4,8),this.paddyFieldMaterial=new Q({map:l,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new Q({color:7032635,roughness:.95}),this.culvertRailingMaterial=new Q({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new bt;n.position.z=t;const i=new jt(this.roadWidth,this.segmentLength);i.rotateX(-Math.PI/2);const r=new R(i,this.roadMaterial);r.receiveShadow=!0,n.add(r);const a=3.5;[-1,1].forEach(c=>{const l=new jt(a,this.segmentLength);l.rotateX(-Math.PI/2);const h=new R(l,this.dirtVergeMaterial);h.position.set((this.roadWidth*.5+a*.5)*c,-.01,0),h.receiveShadow=!0,n.add(h)});const o=60;return[-1,1].forEach(c=>{const l=new jt(o,this.segmentLength);l.rotateX(-Math.PI/2);const h=new R(l,this.paddyFieldMaterial),d=(this.roadWidth*.5+a+o*.5)*c;h.position.set(d,-.05,0),h.receiveShadow=!0,n.add(h)}),this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=n.createElectricPole();i.position.set(this.roadWidth*.5+2.4,0,0),t.add(i);const r=[new C(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new C(this.roadWidth*.5+2.4,7.1,0),new C(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],a=new fs(r),o=new Pi(a,8,.02,4,!1),c=new ue({color:2040865}),l=new R(o,c);t.add(l);const h=e%2===0?-1:1,d=e%3===0?"white":e%3===1?"brown":"black",f=n.createCow(d),m=(this.roadWidth*.5+2.8+Math.random()*1.5)*h,g=6+Math.random()*14;if(f.position.set(m,0,g),f.rotation.y=h>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(f),e%2===1){const A=n.createCow("brown");A.scale.set(.75,.75,.75),A.position.set(m+(h>0?3:-3),0,g+3.5),A.rotation.y=f.rotation.y+.5,t.add(A)}if(e%2===0){const D=n.createVillageHouse(e%4===0),M=(this.roadWidth*.5+11.5)*-1;D.position.set(M,0,-10),D.rotation.y=Math.PI/2,t.add(D);const w=n.createHaystack();w.position.set(M-5.5,0,4),t.add(w);const B=n.createBambooFence(24);B.position.set((this.roadWidth*.5+5.5)*-1,0,-5),t.add(B)}if(e%3===1){const D=n.createTeaStall();D.position.set((this.roadWidth*.5+5.8)*1,0,12),D.rotation.y=-Math.PI/2,t.add(D);const M=n.createCoconutTree();M.position.set((this.roadWidth*.5+9)*1,0,16),t.add(M)}if(e%3===2){const D=n.createPond(14,22);D.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(D);for(let M=0;M<3;M++){const w=n.createBananaTree();w.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+M*6),t.add(w)}}e%4===3&&[-this.roadWidth*.5-.4,this.roadWidth*.5+.4].forEach(A=>{const D=new st(.35,.75,14),M=new R(D,this.culvertRailingMaterial);M.position.set(A,.38,0),M.castShadow=!0,t.add(M),[-7,7].forEach(w=>{const B=new st(.45,.9,.45),F=new R(B,this.culvertRailingMaterial);F.position.set(A,.45,w),t.add(F)})});const _=e%2===0?1:-1,p=n.createCoconutTree();p.position.set((this.roadWidth*.5+7.5+Math.random()*5)*_,0,-22),t.add(p);const u=n.createBambooGrove();u.position.set((this.roadWidth*.5+9+Math.random()*6)*-_,0,18),t.add(u);const y=n.createBananaTree();y.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*_,0,4),t.add(y);const v=e%2===0?1:-1,S=n.createJatriChawni(),P=(this.roadWidth*.5+1.8)*v,b=e===0?-14:-18;S.position.set(P,0,b),S.rotation.y=v>0?2.45:-2.45,t.add(S)}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const r=this.segments[i];if(r.group.position.z>n){let a=0;for(let o=0;o<this.segments.length;o++)this.segments[o].group.position.z<a&&(a=this.segments[o].group.position.z);r.group.position.z=a-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class Kp{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new Mr(11722715,.0038),this.scene.background=new Zt(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(l,h,d)=>{e.beginPath(),e.arc(l,h,d,0,Math.PI*2),e.arc(l+d*.7,h-d*.2,d*.8,0,Math.PI*2),e.arc(l-d*.7,h-d*.1,d*.7,0,Math.PI*2),e.arc(l+d*1.3,h+d*.1,d*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const r=e.createRadialGradient(256,380,15,256,380,120);r.addColorStop(0,"rgba(255, 255, 240, 1.0)"),r.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),r.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),r.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=r,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const a=new me(t),o=new te(480,32,16),c=new ue({map:a,side:Ue});this.skyDome=new R(o,c),this.scene.add(this.skyDome)}initLighting(){this.hemiLight=new Lp(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new Fp(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=170,this.dirLight.shadow.camera.left=-28,this.dirLight.shadow.camera.right=28,this.dirLight.shadow.camera.top=28,this.dirLight.shadow.camera.bottom=-28,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new Q({color:1793568,roughness:.9,flatShading:!0});[-1,1].forEach(e=>{const n=new bt,i=28;for(let r=0;r<i;r++){const a=12+Math.random()*18,o=6+Math.random()*8,c=new Re(o,a,6),l=new R(c,t),h=(55+Math.random()*30)*e,d=-r*18;l.position.set(h,a*.5-2,d),l.rotation.y=Math.random()*Math.PI,n.add(l)}this.scene.add(n),this.treeLines.push(n)})}initFlyingBirds(){this.birdsGroup=new bt;const t=new ue({color:16777215,side:Ee}),e=8;for(let n=0;n<e;n++){const i=new bt,r=new jt(.8,.35);r.translate(-.4,0,0);const a=new R(r,t);i.add(a);const o=new jt(.8,.35);o.translate(.4,0,0);const c=new R(o,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:a,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class Zp{constructor(t="sedan"){this.type=t,this.group=new bt,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new un,this.collisionSize=new C(1.8,1.4,4.5),this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new Q({color:t,metalness:.5,roughness:.35}),darkTrim:new Q({color:1974308,roughness:.7}),wood:new Q({color:8736014,roughness:.9}),glass:new Li({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new Q({color:14671839,metalness:.9,roughness:.2}),headlight:new ue({color:16777215}),taillight:new Q({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new Q({color:1973792,metalness:.1,roughness:.85}),rim:new Q({color:12131356,metalness:.5,roughness:.4}),cowFawn:new Q({color:9262372,roughness:.7}),cowWhite:new Q({color:16119280,roughness:.6}),cowBlack:new Q({color:2236962,roughness:.7}),horn:new Q({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new st(2,.4,6.2),r=new R(i,n.darkTrim);r.position.set(0,.6,0),this.group.add(r);const a=new st(2.3,.4,.25),o=new R(a,n.darkTrim);o.position.set(0,.6,-3.15),this.group.add(o);const c=new st(1.8,.9,1.5),l=new R(c,n.body);l.position.set(0,1.25,-2.2),this.group.add(l);const h=new st(2.1,1.5,1.5),d=new R(h,n.body);d.position.set(0,1.8,-.7),this.group.add(d);const f=new jt(1.85,.7),m=new R(f,n.glass);m.position.set(0,1.95,-1.46),this.group.add(m),[-.7,.7].forEach(S=>{const P=new R(new st(.24,.2,.05),n.headlight);P.position.set(S,1.15,-3.18),this.group.add(P)});const g=new st(2.25,.12,3.6),_=new R(g,n.wood);_.position.set(0,1.05,1.5),this.group.add(_),[-1.12,1.12].forEach(S=>{const P=new st(.08,1.3,3.6),b=new R(P,n.wood);b.position.set(S,1.7,1.5),this.group.add(b)});const p=new st(2.25,1.2,.08),u=new R(p,n.wood);u.position.set(0,1.65,3.3),this.group.add(u),[-.85,.85].forEach(S=>{const P=new R(new st(.28,.16,.05),n.taillight);P.position.set(S,.75,3.32),this.group.add(P)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(S=>{const P=new bt;P.position.set(S.x,2.2,S.z);const b=new st(.42,.45,.6),A=new R(b,S.mat);P.add(A);const D=new st(.3,.25,.25),M=new R(D,n.darkTrim);M.position.set(0,-.08,.38),P.add(M),[-.18,.18].forEach(w=>{const B=new Re(.05,.28,6),F=new R(B,n.horn);F.position.set(w,.26,.05),F.rotation.z=w>0?-.35:.35,P.add(F)}),this.group.add(P)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(S=>{const P=this.createSimpleWheel(n,.5,.3);P.position.set(S.x,.5,S.z),this.group.add(P),this.wheels.push(P)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new st(2,.4,6.2),n=new R(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new st(2.1,1.6,1.8),r=new R(i,t.body);r.position.set(0,1.7,-1.8),this.group.add(r);const a=new st(2.3,2.1,3.8),o=new R(a,t.wood);o.position.set(0,1.85,1.2),this.group.add(o),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new st(2.35,2.5,10.2),n=new R(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new jt(2.15,1.2),r=new R(i,t.glass);r.position.set(0,1.95,-5.12),this.group.add(r),[-1.19,1.19].forEach(o=>{const c=new jt(9,.9),l=new R(c,t.glass);l.position.set(o,1.9,.2),l.rotation.y=o>0?Math.PI/2:-Math.PI/2,this.group.add(l)}),[-.85,.85].forEach(o=>{const c=new R(new st(.3,.16,.05),t.headlight);c.position.set(o,.75,-5.12),this.group.add(c);const l=new R(new st(.24,.35,.05),t.taillight);l.position.set(o,1.3,5.12),this.group.add(l)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(o=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(o.x,.48,o.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new st(1.88,.4,4.65),r=new R(i,n.darkTrim);r.position.set(0,.42,0),this.group.add(r);const a=new st(1.84,.6,4.6),o=new R(a,n.body);o.position.set(0,.78,0),this.group.add(o);const c=new st(1.58,.65,2.9),l=new R(c,n.body);l.position.set(0,1.3,.2),this.group.add(l),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new st(1.76,.32,4.5),r=new R(i,n.darkTrim);r.position.set(0,.32,0),this.group.add(r);const a=new st(1.72,.44,4.4),o=new R(a,n.body);o.position.set(0,.58,0),this.group.add(o);const c=new st(1.44,.46,2.2),l=new R(c,n.body);l.position.set(0,.92,-.05),this.group.add(l),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,r,a){[-e,e].forEach(o=>{const c=new st(.3,.1,.05),l=new R(c,t.headlight);l.position.set(o,i,n),this.group.add(l)}),[-e,e].forEach(o=>{const c=new st(.32,.12,.05),l=new R(c,t.taillight);l.position.set(o,a,r),this.group.add(l)})}addStandardWheels(t,e,n,i,r){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(o=>{const c=this.createSimpleWheel(t,r,.24);c.position.set(o.x,o.y,o.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new bt,r=new xt(e,e,n,18);r.rotateZ(Math.PI/2);const a=new R(r,t.tire);i.add(a);const o=new xt(e*.7,e*.7,n+.02,14);o.rotateZ(Math.PI/2);const c=new R(o,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=Dt.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<Dt.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=Dt.LANES[n];if(!t.some(a=>{if(a===this||!a.active)return!1;const o=Math.abs(a.group.position.z-this.group.position.z),c=Math.abs(a.group.position.x-i);return o<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const r=this.targetX-this.group.position.x;Math.abs(r)>.04?this.group.position.x+=Math.sign(r)*Math.min(Math.abs(r),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(r=>{r.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(t,this.collisionSize)}}class Jp{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"];for(let n=0;n<25;n++){const i=t[n%t.length],r=new Zp(i);r.despawn(),this.pool.push(r),this.scene.add(r.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,r){const a=t.group.position.z,o=t.group.position.x,c=Math.min(1,n/4500),l=_i.lerp(1.3,.8,c),h=_i.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=_i.lerp(l,h,Math.random()),this.trySpawnTraffic(a,c));for(let d=this.activeVehicles.length-1;d>=0;d--){const f=this.activeVehicles[d];if(f.update(e,i),f.group.position.z>a+Dt.TRAFFIC.DESPAWN_DISTANCE){f.despawn(),this.activeVehicles.splice(d,1);continue}if(!f.hasBeenOvertaken){const m=Math.abs(f.group.position.z-a),g=Math.abs(f.group.position.x-o);m<Dt.SCORING.NEAR_MISS_DIST_Z&&g<Dt.SCORING.NEAR_MISS_DIST_X&&g>.5&&e>f.speed+12?(f.hasBeenOvertaken=!0,r&&r(f)):a<f.group.position.z-4&&(f.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-Dt.TRAFFIC.SPAWN_DISTANCE,i=34,r=new Set;this.activeVehicles.forEach(g=>{Math.abs(g.group.position.z-n)<i&&r.add(g.lane)});const a=[0,1,2].filter(g=>!r.has(g));if(a.length===0||a.length===1&&r.size>=2)return;const o=a[Math.floor(Math.random()*a.length)];let c="cow_truck";const l=Math.random();o===0?c=l>.45?"cow_truck":"truck":o===1?c=l>.5?"bus":l>.25?"cow_truck":"suv":c=l>.45?"bus":"sedan";const h=this.getInactiveVehicle(c);if(!h)return;const d=Dt.TRAFFIC.SPEEDS[c]||[65,85],f=e*35,m=_i.lerp(d[0],d[1],Math.random())+f;if(h.spawn(o,n,m),this.activeVehicles.push(h),e>.5&&Math.random()<.35&&a.length>=2){const g=a.filter(_=>_!==o);if(g.length>0){const _=g[Math.floor(Math.random()*g.length)],p=Math.random()>.5?"cow_truck":"bus",u=this.getInactiveVehicle(p);if(u){const y=n-(28+Math.random()*20),v=Dt.TRAFFIC.SPEEDS[p]||[65,80],S=_i.lerp(v[0],v[1],Math.random())+f;u.spawn(_,y,S),this.activeVehicles.push(u)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const r=this.activeVehicles[i],a=e-r.group.position.z,o=Math.abs(r.group.position.x-n);if(a>4&&a<65&&o<2.4&&!r.isYielding){r.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class jp{constructor(t){this.scene=t,this.particles=[],this.poolSize=180,this.smokeMat=new ue({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new ue({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new Q({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new st(.14,.14,.14),n=new R(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new C,rotVel:new C,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){for(let e=0;e<35;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="spark",n.mesh.material=this.sparkMat,n.mesh.visible=!0,n.mesh.scale.set(.12,.12,.12),n.mesh.position.copy(t);const i=Math.random()*Math.PI*2,r=6+Math.random()*14;n.vel.set(Math.cos(i)*r,3+Math.random()*10,Math.sin(i)*r),n.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),n.life=0,n.maxLife=.7+Math.random()*.5,n.scaleSpeed=-.5}for(let e=0;e<20;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="debris",n.mesh.material=this.debrisMat,n.mesh.visible=!0,n.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),n.mesh.position.copy(t),n.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),n.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),n.life=0,n.maxLife=1.2,n.scaleSpeed=0}for(let e=0;e<25;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="smoke",n.mesh.material=this.smokeMat,n.mesh.visible=!0,n.mesh.scale.set(.8,.8,.8),n.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),n.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),n.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),n.life=0,n.maxLife=1.4,n.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class $p{constructor(t){this.scene=t,this.linesCount=60,this.group=new bt;const e=new Va({color:10083839,transparent:!0,opacity:0});this.lineMat=e,this.lines=[];for(let n=0;n<this.linesCount;n++){const i=[new C(0,0,0),new C(0,0,6+Math.random()*8)],r=new Ne().setFromPoints(i),a=new mp(r,e);this.resetLinePos(a),this.group.add(a),this.lines.push(a)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const r=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=r*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const a=t.group.position.z,o=t.group.position.x;this.group.position.set(o,0,a);const c=e/60*i*50;this.lines.forEach(l=>{l.position.z+=c,l.position.z>5&&this.resetLinePos(l)})}}class Qp{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),r=document.getElementById("btn-gameover-restart");[i,r].forEach(f=>{f&&f.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const a=document.getElementById("btn-pause-menu"),o=document.getElementById("btn-gameover-menu");[a,o].forEach(f=>{f&&f.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(f=>{f.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),l=document.getElementById("btn-how-to-play"),h=document.getElementById("btn-modal-close");l&&c&&l.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",f=>{f.target===c&&c.classList.remove("active")});const d=document.querySelectorAll(".veh-btn");d.forEach(f=>{f.addEventListener("click",()=>{d.forEach(m=>m.classList.remove("active")),f.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(f.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(f=>{f.addEventListener("click",m=>{m.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),r=document.getElementById("btn-touch-nitro"),a=document.getElementById("btn-touch-horn");if(document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(o=>{o.addEventListener("contextmenu",c=>c.preventDefault())}),t&&t.addEventListener("pointerdown",o=>{o.preventDefault(),document.body.classList.add("touch-active"),this.onSteerLeft&&this.onSteerLeft()}),e&&e.addEventListener("pointerdown",o=>{o.preventDefault(),document.body.classList.add("touch-active"),this.onSteerRight&&this.onSteerRight()}),n){const o=c=>{document.body.classList.add("touch-active"),this.onBrake&&this.onBrake(c),c&&this.soundManager.playAirBrake()};n.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),n.addEventListener("pointerup",()=>o(!1)),n.addEventListener("pointerleave",()=>o(!1)),n.addEventListener("pointercancel",()=>o(!1))}if(i){const o=c=>{document.body.classList.add("touch-active"),this.onAccelerate&&this.onAccelerate(c)};i.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),i.addEventListener("pointerup",()=>o(!1)),i.addEventListener("pointerleave",()=>o(!1)),i.addEventListener("pointercancel",()=>o(!1))}if(r){const o=c=>{document.body.classList.add("touch-active"),this.onNitro&&this.onNitro(c)};r.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),r.addEventListener("pointerup",()=>o(!1)),r.addEventListener("pointerleave",()=>o(!1)),r.addEventListener("pointercancel",()=>o(!1))}a&&a.addEventListener("pointerdown",o=>{o.preventDefault(),this.onHorn?this.onHorn():this.soundManager.playTruckHorn()}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===ne.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case ne.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case ne.PLAYING:this.hudLayer.classList.remove("hidden");break;case ne.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case ne.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){if(this.scoreVal&&(this.scoreVal.innerText=t.score.toLocaleString()),this.distVal&&(this.distVal.innerText=`${(t.distanceMeters/1e3).toFixed(2)} km`),this.speedVal&&(this.speedVal.innerText=Math.round(t.speedKmh)),this.nitroBar){const e=t.nitro/100*100;this.nitroBar.style.width=`${e}%`,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting")}}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class tm{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new Gp,this.inputManager=new zp,this.soundManager=new Vp,this.uiManager=new Qp(this.soundManager),this.scene=new pp,this.camera=new Oe(Dt.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.renderer=new ka({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=aa,this.renderer.toneMapping=la,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new Kp(this.scene),this.roadManager=new Yp(this.scene),this.vehicles={truck:new Hp,rickshaw:new Wp,cng:new Xp},Object.values(this.vehicles).forEach(t=>{this.scene.add(t.group),t.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new Jp(this.scene),this.particleSystem=new jp(this.scene),this.speedLines=new $p(this.scene),this.cameraController=new kp(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new Bp,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(ne.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=e=>this.setVehicle(e);const t=()=>{this.gameState.state===ne.PLAYING?(this.gameState.state=ne.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(ne.PAUSED,this.gameState)):this.gameState.state===ne.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=t,this.inputManager.onPauseToggle=t,this.inputManager.onRestart=()=>{(this.gameState.state===ne.GAMEOVER||this.gameState.state===ne.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=()=>this.inputManager.triggerSteerLeft(),this.uiManager.onSteerRight=()=>this.inputManager.triggerSteerRight(),this.uiManager.onAccelerate=e=>this.inputManager.setAccelerate(e),this.uiManager.onBrake=e=>this.inputManager.setBrake(e),this.uiManager.onNitro=e=>this.inputManager.setNitro(e)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(ne.PLAYING,this.gameState)}resumeGame(){this.gameState.state===ne.PAUSED&&(this.gameState.state=ne.PLAYING,this.uiManager.setScreen(ne.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=ne.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(ne.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(ne.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===ne.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===ne.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const r=this.inputManager.keys.brake;r&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=r,this.gameState.update(e,this.inputManager);const a=this.gameState.speedKmh*1e3/3600;if(this.playerVehicle.group.position.z-=a*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,r,this.gameState.isBoosting,e),r&&this.gameState.speedKmh>50){const c=this.playerVehicle.group.position.clone();c.x-=.85,c.z+=1.6;const l=this.playerVehicle.group.position.clone();l.x+=.85,l.z+=1.6,this.particleSystem.emitTireSmoke(c),this.particleSystem.emitTireSmoke(l)}this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const l=this.gameState.addNearMiss();this.soundManager.playNearMiss(l.combo),this.uiManager.showNearMiss(l.bonus,l.combo)});const o=this.trafficManager.checkCollision(this.playerVehicle);o&&this.onCrash(o),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,r,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===ne.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new tm});
//# sourceMappingURL=index-DmOb2tnJ.js.map
