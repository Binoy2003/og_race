(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sr="160",Ja=0,Nr=1,ja=2,ha=1,ua=2,fn=3,Ln=0,Ne=1,be=2,Rn=0,mi=1,Or=2,Fr=3,Br=4,$a=5,Vn=100,Qa=101,tc=102,Gr=103,kr=104,ec=200,nc=201,ic=202,sc=203,fr=204,pr=205,rc=206,oc=207,ac=208,cc=209,lc=210,hc=211,uc=212,dc=213,fc=214,pc=0,mc=1,gc=2,ps=3,_c=4,Mc=5,vc=6,xc=7,da=0,Sc=1,yc=2,Cn=0,wc=1,Ec=2,Tc=3,fa=4,bc=5,Ac=6,pa=300,_i=301,Mi=302,mr=303,gr=304,ys=306,tn=1e3,$e=1001,_r=1002,Ue=1003,zr=1004,Is=1005,We=1006,Rc=1007,Bi=1008,Pn=1009,Cc=1010,Pc=1011,yr=1012,ma=1013,bn=1014,An=1015,Gi=1016,ga=1017,_a=1018,Wn=1020,Lc=1021,Qe=1023,Ic=1024,Dc=1025,Xn=1026,vi=1027,Uc=1028,Ma=1029,Nc=1030,va=1031,xa=1033,Ds=33776,Us=33777,Ns=33778,Os=33779,Vr=35840,Hr=35841,Wr=35842,Xr=35843,Sa=36196,qr=37492,Yr=37496,Kr=37808,Zr=37809,Jr=37810,jr=37811,$r=37812,Qr=37813,to=37814,eo=37815,no=37816,io=37817,so=37818,ro=37819,oo=37820,ao=37821,Fs=36492,co=36494,lo=36495,Oc=36283,ho=36284,uo=36285,fo=36286,ya=3e3,qn=3001,Fc=3200,Bc=3201,wa=0,Gc=1,Xe="",Te="srgb",mn="srgb-linear",wr="display-p3",ws="display-p3-linear",ms="linear",ae="srgb",gs="rec709",_s="p3",Jn=7680,po=519,kc=512,zc=513,Vc=514,Ea=515,Hc=516,Wc=517,Xc=518,qc=519,mo=35044,go="300 es",Mr=1035,pn=2e3,Ms=2001;class yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _o=1234567;const Di=Math.PI/180,xi=180/Math.PI;function wi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[s&255]+Ce[s>>8&255]+Ce[s>>16&255]+Ce[s>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Ee(s,t,e){return Math.max(t,Math.min(e,s))}function Er(s,t){return(s%t+t)%t}function Yc(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Kc(s,t,e){return s!==t?(e-s)/(t-s):0}function Ui(s,t,e){return(1-e)*s+e*t}function Zc(s,t,e,n){return Ui(s,t,1-Math.exp(-e*n))}function Jc(s,t=1){return t-Math.abs(Er(s,t*2)-t)}function jc(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function $c(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Qc(s,t){return s+Math.floor(Math.random()*(t-s+1))}function tl(s,t){return s+Math.random()*(t-s)}function el(s){return s*(.5-Math.random())}function nl(s){s!==void 0&&(_o=s);let t=_o+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function il(s){return s*Di}function sl(s){return s*xi}function vr(s){return(s&s-1)===0&&s!==0}function rl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function vs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ol(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),p=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(o*h,c*d,c*p,o*l);break;case"YZY":s.set(c*p,o*h,c*d,o*l);break;case"ZXZ":s.set(c*d,c*p,o*h,o*l);break;case"XZX":s.set(o*h,c*_,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*_,o*l);break;case"ZYZ":s.set(c*_,c*f,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function di(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ai={DEG2RAD:Di,RAD2DEG:xi,generateUUID:wi,clamp:Ee,euclideanModulo:Er,mapLinear:Yc,inverseLerp:Kc,lerp:Ui,damp:Zc,pingpong:Jc,smoothstep:jc,smootherstep:$c,randInt:Qc,randFloat:tl,randFloatSpread:el,seededRandom:nl,degToRad:il,radToDeg:sl,isPowerOfTwo:vr,ceilPowerOfTwo:rl,floorPowerOfTwo:vs,setQuaternionFromProperEuler:ol,normalize:Ie,denormalize:di};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,i,r,a,o,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l)}set(t,e,n,i,r,a,o,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=o,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],d=n[7],p=n[2],f=n[5],_=n[8],M=i[0],m=i[3],u=i[6],w=i[1],g=i[4],S=i[7],I=i[2],R=i[5],P=i[8];return r[0]=a*M+o*w+c*I,r[3]=a*m+o*g+c*R,r[6]=a*u+o*S+c*P,r[1]=l*M+h*w+d*I,r[4]=l*m+h*g+d*R,r[7]=l*u+h*S+d*P,r[2]=p*M+f*w+_*I,r[5]=p*m+f*g+_*R,r[8]=p*u+f*S+_*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8];return e*a*h-e*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=h*a-o*l,p=o*c-h*r,f=l*r-a*c,_=e*d+n*p+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=d*M,t[1]=(i*l-h*n)*M,t[2]=(o*n-i*a)*M,t[3]=p*M,t[4]=(h*e-i*c)*M,t[5]=(i*r-o*e)*M,t[6]=f*M,t[7]=(n*c-l*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Jt;function Ta(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function al(){const s=xs("canvas");return s.style.display="block",s}const Mo={};function Ni(s){s in Mo||(Mo[s]=!0,console.warn(s))}const vo=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xo=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[mn]:{transfer:ms,primaries:gs,toReference:s=>s,fromReference:s=>s},[Te]:{transfer:ae,primaries:gs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ws]:{transfer:ms,primaries:_s,toReference:s=>s.applyMatrix3(xo),fromReference:s=>s.applyMatrix3(vo)},[wr]:{transfer:ae,primaries:_s,toReference:s=>s.convertSRGBToLinear().applyMatrix3(xo),fromReference:s=>s.applyMatrix3(vo).convertLinearToSRGB()}},cl=new Set([mn,ws]),se={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!cl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Hi[t].toReference,i=Hi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Hi[s].primaries},getTransfer:function(s){return s===Xe?ms:Hi[s].transfer}};function gi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let jn;class ba{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{jn===void 0&&(jn=xs("canvas")),jn.width=t.width,jn.height=t.height;const n=jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=gi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(gi(e[n]/255)*255):e[n]=gi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ll=0;class Aa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ll++}),this.uuid=wi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(ks(i[a].image)):r.push(ks(i[a]))}else r=ks(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function ks(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ba.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hl=0;class Be extends yi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=$e,i=$e,r=We,a=Bi,o=Qe,c=Pn,l=Be.DEFAULT_ANISOTROPY,h=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hl++}),this.uuid=wi(),this.name="",this.source=new Aa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===qn?Te:Xe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pa)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tn:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case _r:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tn:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case _r:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Te?qn:ya}set encoding(t){Ni("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===qn?Te:Xe}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=pa;Be.DEFAULT_ANISOTROPY=1;class le{constructor(t=0,e=0,n=0,i=1){le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],d=c[8],p=c[1],f=c[5],_=c[9],M=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(l+f+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,S=(f+1)/2,I=(u+1)/2,R=(h+p)/4,P=(d+M)/4,F=(_+m)/4;return g>S&&g>I?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=R/n,r=P/n):S>I?S<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),n=R/i,r=F/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=P/r,i=F/r),this.set(n,i,r,e),this}let w=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(p-h)*(p-h));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(d-M)/w,this.z=(p-h)/w,this.w=Math.acos((l+f+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ul extends yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Ni("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qn?Te:Xe),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Aa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yn extends ul{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ra extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl extends Be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],d=n[i+3];const p=r[a+0],f=r[a+1],_=r[a+2],M=r[a+3];if(o===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=f,t[e+2]=_,t[e+3]=M;return}if(d!==M||c!==p||l!==f||h!==_){let m=1-o;const u=c*p+l*f+h*_+d*M,w=u>=0?1:-1,g=1-u*u;if(g>Number.EPSILON){const I=Math.sqrt(g),R=Math.atan2(I,u*w);m=Math.sin(m*R)/I,o=Math.sin(o*R)/I}const S=o*w;if(c=c*m+p*S,l=l*m+f*S,h=h*m+_*S,d=d*m+M*S,m===1-o){const I=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=I,l*=I,h*=I,d*=I}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],d=r[a],p=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+h*d+c*f-l*p,t[e+1]=c*_+h*p+l*d-o*f,t[e+2]=l*_+h*f+o*p-c*d,t[e+3]=h*_-o*d-c*p-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),d=o(r/2),p=c(n/2),f=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=p*h*d+l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d-p*f*_;break;case"YXZ":this._x=p*h*d+l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d+p*f*_;break;case"ZXY":this._x=p*h*d-l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d-p*f*_;break;case"ZYX":this._x=p*h*d-l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d+p*f*_;break;case"YZX":this._x=p*h*d+l*f*_,this._y=l*f*d+p*h*_,this._z=l*h*_-p*f*d,this._w=l*h*d-p*f*_;break;case"XZY":this._x=p*h*d-l*f*_,this._y=l*f*d-p*h*_,this._z=l*h*_+p*f*d,this._w=l*h*d+p*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],h=e[6],d=e[10],p=n+o+d;if(p>0){const f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),d=Math.sin((1-e)*h)/l,p=Math.sin(e*h)/l;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=i*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(So.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(So.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),h=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*l+a*d-o*h,this.y=n+c*h+o*l-r*d,this.z=i+c*d+r*h-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return zs.copy(this).projectOnVector(t),this.sub(zs)}reflect(t){return this.sub(zs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zs=new D,So=new Vi;class gn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wi.copy(n.boundingBox)),Wi.applyMatrix4(t.matrixWorld),this.union(Wi)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ri),Xi.subVectors(this.max,Ri),$n.subVectors(t.a,Ri),Qn.subVectors(t.b,Ri),ti.subVectors(t.c,Ri),xn.subVectors(Qn,$n),Sn.subVectors(ti,Qn),On.subVectors($n,ti);let e=[0,-xn.z,xn.y,0,-Sn.z,Sn.y,0,-On.z,On.y,xn.z,0,-xn.x,Sn.z,0,-Sn.x,On.z,0,-On.x,-xn.y,xn.x,0,-Sn.y,Sn.x,0,-On.y,On.x,0];return!Vs(e,$n,Qn,ti,Xi)||(e=[1,0,0,0,1,0,0,0,1],!Vs(e,$n,Qn,ti,Xi))?!1:(qi.crossVectors(xn,Sn),e=[qi.x,qi.y,qi.z],Vs(e,$n,Qn,ti,Xi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const cn=[new D,new D,new D,new D,new D,new D,new D,new D],Ke=new D,Wi=new gn,$n=new D,Qn=new D,ti=new D,xn=new D,Sn=new D,On=new D,Ri=new D,Xi=new D,qi=new D,Fn=new D;function Vs(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Fn.fromArray(s,r);const o=i.x*Math.abs(Fn.x)+i.y*Math.abs(Fn.y)+i.z*Math.abs(Fn.z),c=t.dot(Fn),l=e.dot(Fn),h=n.dot(Fn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const fl=new gn,Ci=new D,Hs=new D;class Es{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ci.subVectors(t,this.center);const e=Ci.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ci,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Hs.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ci.copy(t.center).add(Hs)),this.expandByPoint(Ci.copy(t.center).sub(Hs))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new D,Ws=new D,Yi=new D,yn=new D,Xs=new D,Ki=new D,qs=new D;class Ca{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ln)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ln.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ln.copy(this.origin).addScaledVector(this.direction,e),ln.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ws.copy(t).add(e).multiplyScalar(.5),Yi.copy(e).sub(t).normalize(),yn.copy(this.origin).sub(Ws);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Yi),o=yn.dot(this.direction),c=-yn.dot(Yi),l=yn.lengthSq(),h=Math.abs(1-a*a);let d,p,f,_;if(h>0)if(d=a*c-o,p=a*o-c,_=r*h,d>=0)if(p>=-_)if(p<=_){const M=1/h;d*=M,p*=M,f=d*(d+a*p+2*o)+p*(a*d+p+2*c)+l}else p=r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p=-r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;else p<=-_?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l):p<=_?(d=0,p=Math.min(Math.max(-r,-c),r),f=p*(p+2*c)+l):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+p*(p+2*c)+l);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),f=-d*d+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Ws).addScaledVector(Yi,p),f}intersectSphere(t,e){ln.subVectors(t.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,p=this.origin;return l>=0?(n=(t.min.x-p.x)*l,i=(t.max.x-p.x)*l):(n=(t.max.x-p.x)*l,i=(t.min.x-p.x)*l),h>=0?(r=(t.min.y-p.y)*h,a=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,a=(t.min.y-p.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ln)!==null}intersectTriangle(t,e,n,i,r){Xs.subVectors(e,t),Ki.subVectors(n,t),qs.crossVectors(Xs,Ki);let a=this.direction.dot(qs),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;yn.subVectors(this.origin,t);const c=o*this.direction.dot(Ki.crossVectors(yn,Ki));if(c<0)return null;const l=o*this.direction.dot(Xs.cross(yn));if(l<0||c+l>a)return null;const h=-o*yn.dot(qs);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,i,r,a,o,c,l,h,d,p,f,_,M,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,l,h,d,p,f,_,M,m)}set(t,e,n,i,r,a,o,c,l,h,d,p,f,_,M,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=p,u[3]=f,u[7]=_,u[11]=M,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ei.setFromMatrixColumn(t,0).length(),r=1/ei.setFromMatrixColumn(t,1).length(),a=1/ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=a*h,f=a*d,_=o*h,M=o*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=p-M*l,e[9]=-o*c,e[2]=M-p*l,e[6]=_+f*l,e[10]=a*c}else if(t.order==="YXZ"){const p=c*h,f=c*d,_=l*h,M=l*d;e[0]=p+M*o,e[4]=_*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-_,e[6]=M+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*h,f=c*d,_=l*h,M=l*d;e[0]=p-M*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*h,e[9]=M-p*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*h,f=a*d,_=o*h,M=o*d;e[0]=c*h,e[4]=_*l-f,e[8]=p*l+M,e[1]=c*d,e[5]=M*l+p,e[9]=f*l-_,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,f=a*l,_=o*c,M=o*l;e[0]=c*h,e[4]=M-p*d,e[8]=_*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-l*h,e[6]=f*d+_,e[10]=p-M*d}else if(t.order==="XZY"){const p=a*c,f=a*l,_=o*c,M=o*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=p*d+M,e[5]=a*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*h,e[10]=M*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pl,t,ml)}lookAt(t,e,n){const i=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),wn.crossVectors(n,ke),wn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),wn.crossVectors(n,ke)),wn.normalize(),Zi.crossVectors(ke,wn),i[0]=wn.x,i[4]=Zi.x,i[8]=ke.x,i[1]=wn.y,i[5]=Zi.y,i[9]=ke.y,i[2]=wn.z,i[6]=Zi.z,i[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],d=n[5],p=n[9],f=n[13],_=n[2],M=n[6],m=n[10],u=n[14],w=n[3],g=n[7],S=n[11],I=n[15],R=i[0],P=i[4],F=i[8],v=i[12],E=i[1],C=i[5],W=i[9],at=i[13],N=i[2],B=i[6],X=i[10],Q=i[14],$=i[3],q=i[7],et=i[11],K=i[15];return r[0]=a*R+o*E+c*N+l*$,r[4]=a*P+o*C+c*B+l*q,r[8]=a*F+o*W+c*X+l*et,r[12]=a*v+o*at+c*Q+l*K,r[1]=h*R+d*E+p*N+f*$,r[5]=h*P+d*C+p*B+f*q,r[9]=h*F+d*W+p*X+f*et,r[13]=h*v+d*at+p*Q+f*K,r[2]=_*R+M*E+m*N+u*$,r[6]=_*P+M*C+m*B+u*q,r[10]=_*F+M*W+m*X+u*et,r[14]=_*v+M*at+m*Q+u*K,r[3]=w*R+g*E+S*N+I*$,r[7]=w*P+g*C+S*B+I*q,r[11]=w*F+g*W+S*X+I*et,r[15]=w*v+g*at+S*Q+I*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],h=t[2],d=t[6],p=t[10],f=t[14],_=t[3],M=t[7],m=t[11],u=t[15];return _*(+r*c*d-i*l*d-r*o*p+n*l*p+i*o*f-n*c*f)+M*(+e*c*f-e*l*p+r*a*p-i*a*f+i*l*h-r*c*h)+m*(+e*l*d-e*o*f-r*a*d+n*a*f+r*o*h-n*l*h)+u*(-i*o*h-e*c*d+e*o*p+i*a*d-n*a*p+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],h=t[8],d=t[9],p=t[10],f=t[11],_=t[12],M=t[13],m=t[14],u=t[15],w=d*m*l-M*p*l+M*c*f-o*m*f-d*c*u+o*p*u,g=_*p*l-h*m*l-_*c*f+a*m*f+h*c*u-a*p*u,S=h*M*l-_*d*l+_*o*f-a*M*f-h*o*u+a*d*u,I=_*d*c-h*M*c-_*o*p+a*M*p+h*o*m-a*d*m,R=e*w+n*g+i*S+r*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/R;return t[0]=w*P,t[1]=(M*p*r-d*m*r-M*i*f+n*m*f+d*i*u-n*p*u)*P,t[2]=(o*m*r-M*c*r+M*i*l-n*m*l-o*i*u+n*c*u)*P,t[3]=(d*c*r-o*p*r-d*i*l+n*p*l+o*i*f-n*c*f)*P,t[4]=g*P,t[5]=(h*m*r-_*p*r+_*i*f-e*m*f-h*i*u+e*p*u)*P,t[6]=(_*c*r-a*m*r-_*i*l+e*m*l+a*i*u-e*c*u)*P,t[7]=(a*p*r-h*c*r+h*i*l-e*p*l-a*i*f+e*c*f)*P,t[8]=S*P,t[9]=(_*d*r-h*M*r-_*n*f+e*M*f+h*n*u-e*d*u)*P,t[10]=(a*M*r-_*o*r+_*n*l-e*M*l-a*n*u+e*o*u)*P,t[11]=(h*o*r-a*d*r-h*n*l+e*d*l+a*n*f-e*o*f)*P,t[12]=I*P,t[13]=(h*M*i-_*d*i+_*n*p-e*M*p-h*n*m+e*d*m)*P,t[14]=(_*o*i-a*M*i-_*n*c+e*M*c+a*n*m-e*o*m)*P,t[15]=(a*d*i-h*o*i+h*n*c-e*d*c-a*n*p+e*o*p)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,h=a+a,d=o+o,p=r*l,f=r*h,_=r*d,M=a*h,m=a*d,u=o*d,w=c*l,g=c*h,S=c*d,I=n.x,R=n.y,P=n.z;return i[0]=(1-(M+u))*I,i[1]=(f+S)*I,i[2]=(_-g)*I,i[3]=0,i[4]=(f-S)*R,i[5]=(1-(p+u))*R,i[6]=(m+w)*R,i[7]=0,i[8]=(_+g)*P,i[9]=(m-w)*P,i[10]=(1-(p+M))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ei.set(i[0],i[1],i[2]).length();const a=ei.set(i[4],i[5],i[6]).length(),o=ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ze.copy(this);const l=1/r,h=1/a,d=1/o;return Ze.elements[0]*=l,Ze.elements[1]*=l,Ze.elements[2]*=l,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=d,Ze.elements[9]*=d,Ze.elements[10]*=d,e.setFromRotationMatrix(Ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=pn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),p=(n+i)/(n-i);let f,_;if(o===pn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Ms)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=pn){const c=this.elements,l=1/(e-t),h=1/(n-i),d=1/(a-r),p=(e+t)*l,f=(n+i)*h;let _,M;if(o===pn)_=(a+r)*d,M=-2*d;else if(o===Ms)_=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ei=new D,Ze=new pe,pl=new D(0,0,0),ml=new D(1,1,1),wn=new D,Zi=new D,ke=new D,yo=new pe,wo=new Vi;class Ts{constructor(t=0,e=0,n=0,i=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],d=i[2],p=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ee(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ee(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return wo.setFromEuler(this),this.setFromQuaternion(wo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gl=0;const Eo=new D,ni=new Vi,hn=new pe,Ji=new D,Pi=new D,_l=new D,Ml=new Vi,To=new D(1,0,0),bo=new D(0,1,0),Ao=new D(0,0,1),vl={type:"added"},xl={type:"removed"};class ve extends yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gl++}),this.uuid=wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new D,e=new Ts,n=new Vi,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new pe},normalMatrix:{value:new Jt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.multiply(ni),this}rotateOnWorldAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.premultiply(ni),this}rotateX(t){return this.rotateOnAxis(To,t)}rotateY(t){return this.rotateOnAxis(bo,t)}rotateZ(t){return this.rotateOnAxis(Ao,t)}translateOnAxis(t,e){return Eo.copy(t).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(To,t)}translateY(t){return this.translateOnAxis(bo,t)}translateZ(t){return this.translateOnAxis(Ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ji.copy(t):Ji.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Pi,Ji,this.up):hn.lookAt(Ji,Pi,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),ni.setFromRotationMatrix(hn),this.quaternion.premultiply(ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(hn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,t,_l),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pi,Ml,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ve.DEFAULT_UP=new D(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new D,un=new D,Ys=new D,dn=new D,ii=new D,si=new D,Ro=new D,Ks=new D,Zs=new D,Js=new D;let ji=!1;class je{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Je.subVectors(t,e),i.cross(Je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Je.subVectors(i,e),un.subVectors(n,e),Ys.subVectors(t,e);const a=Je.dot(Je),o=Je.dot(un),c=Je.dot(Ys),l=un.dot(un),h=un.dot(Ys),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,f=(l*c-o*h)*p,_=(a*h-o*c)*p;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,dn)===null?!1:dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(t,e,n,i,r,a,o,c){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),this.getInterpolation(t,e,n,i,r,a,o,c)}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,dn.x),c.addScaledVector(a,dn.y),c.addScaledVector(o,dn.z),c)}static isFrontFacing(t,e,n,i){return Je.subVectors(n,e),un.subVectors(t,e),Je.cross(un).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),un.subVectors(this.a,this.b),Je.cross(un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return ji===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ji=!0),je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return je.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;ii.subVectors(i,n),si.subVectors(r,n),Ks.subVectors(t,n);const c=ii.dot(Ks),l=si.dot(Ks);if(c<=0&&l<=0)return e.copy(n);Zs.subVectors(t,i);const h=ii.dot(Zs),d=si.dot(Zs);if(h>=0&&d<=h)return e.copy(i);const p=c*d-h*l;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(n).addScaledVector(ii,a);Js.subVectors(t,r);const f=ii.dot(Js),_=si.dot(Js);if(_>=0&&f<=_)return e.copy(r);const M=f*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),e.copy(n).addScaledVector(si,o);const m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return Ro.subVectors(r,i),o=(d-h)/(d-h+(f-_)),e.copy(i).addScaledVector(Ro,o);const u=1/(m+M+p);return a=M*u,o=p*u,e.copy(n).addScaledVector(ii,a).addScaledVector(si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const La={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},$i={h:0,s:0,l:0};function js(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class jt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Te){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=se.workingColorSpace){if(t=Er(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=js(a,r,t+1/3),this.g=js(a,r,t),this.b=js(a,r,t-1/3)}return se.toWorkingColorSpace(this,i),this}setStyle(t,e=Te){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Te){const n=La[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=gi(t.r),this.g=gi(t.g),this.b=gi(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Te){return se.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ee(Pe.r*255,0,255))*65536+Math.round(Ee(Pe.g*255,0,255))*256+Math.round(Ee(Pe.b*255,0,255))}getHexString(t=Te){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,i=Pe.g,r=Pe.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Te){se.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,i=Pe.b;return t!==Te?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(En),this.setHSL(En.h+t,En.s+e,En.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL($i);const n=Ui(En.h,$i.h,e),i=Ui(En.s,$i.s,e),r=Ui(En.l,$i.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new jt;jt.NAMES=La;let Sl=0;class Ei extends yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=wi(),this.name="",this.type="Material",this.blending=mi,this.side=Ln,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fr,this.blendDst=pr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==Ln&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fr&&(n.blendSrc=this.blendSrc),this.blendDst!==pr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class fe extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new D,Qi=new Dt;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=mo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qi.fromBufferAttribute(this,e),Qi.applyMatrix3(t),this.setXY(e,Qi.x,Qi.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=di(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=di(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=di(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=di(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=di(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),i=Ie(i,this.array),r=Ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mo&&(t.usage=this.usage),t}}class Ia extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Da extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yl=0;const He=new pe,$s=new ve,ri=new D,ze=new gn,Li=new gn,we=new D;class Oe extends yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yl++}),this.uuid=wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ta(t)?Da:Ia)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return He.makeRotationFromQuaternion(t),this.applyMatrix4(He),this}rotateX(t){return He.makeRotationX(t),this.applyMatrix4(He),this}rotateY(t){return He.makeRotationY(t),this.applyMatrix4(He),this}rotateZ(t){return He.makeRotationZ(t),this.applyMatrix4(He),this}translate(t,e,n){return He.makeTranslation(t,e,n),this.applyMatrix4(He),this}scale(t,e,n){return He.makeScale(t,e,n),this.applyMatrix4(He),this}lookAt(t){return $s.lookAt(t),$s.updateMatrix(),this.applyMatrix4($s.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ze.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,ze.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,ze.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(ze.min),this.boundingBox.expandByPoint(ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(ze.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Li.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(ze.min,Li.min),ze.expandByPoint(we),we.addVectors(ze.max,Li.max),ze.expandByPoint(we)):(ze.expandByPoint(Li.min),ze.expandByPoint(Li.max))}ze.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)we.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(we));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)we.fromBufferAttribute(o,l),c&&(ri.fromBufferAttribute(t,l),we.add(ri)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let E=0;E<o;E++)l[E]=new D,h[E]=new D;const d=new D,p=new D,f=new D,_=new Dt,M=new Dt,m=new Dt,u=new D,w=new D;function g(E,C,W){d.fromArray(i,E*3),p.fromArray(i,C*3),f.fromArray(i,W*3),_.fromArray(a,E*2),M.fromArray(a,C*2),m.fromArray(a,W*2),p.sub(d),f.sub(d),M.sub(_),m.sub(_);const at=1/(M.x*m.y-m.x*M.y);isFinite(at)&&(u.copy(p).multiplyScalar(m.y).addScaledVector(f,-M.y).multiplyScalar(at),w.copy(f).multiplyScalar(M.x).addScaledVector(p,-m.x).multiplyScalar(at),l[E].add(u),l[C].add(u),l[W].add(u),h[E].add(w),h[C].add(w),h[W].add(w))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let E=0,C=S.length;E<C;++E){const W=S[E],at=W.start,N=W.count;for(let B=at,X=at+N;B<X;B+=3)g(n[B+0],n[B+1],n[B+2])}const I=new D,R=new D,P=new D,F=new D;function v(E){P.fromArray(r,E*3),F.copy(P);const C=l[E];I.copy(C),I.sub(P.multiplyScalar(P.dot(C))).normalize(),R.crossVectors(F,C);const at=R.dot(h[E])<0?-1:1;c[E*4]=I.x,c[E*4+1]=I.y,c[E*4+2]=I.z,c[E*4+3]=at}for(let E=0,C=S.length;E<C;++E){const W=S[E],at=W.start,N=W.count;for(let B=at,X=at+N;B<X;B+=3)v(n[B+0]),v(n[B+1]),v(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);const i=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,d=new D;if(t)for(let p=0,f=t.count;p<f;p+=3){const _=t.getX(p+0),M=t.getX(p+1),m=t.getX(p+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,f=e.count;p<f;p+=3)i.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),h.subVectors(a,r),d.subVectors(i,r),h.cross(d),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,c){const l=o.array,h=o.itemSize,d=o.normalized,p=new l.constructor(c.length*h);let f=0,_=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*h;for(let u=0;u<h;u++)p[_++]=l[f++]}return new rn(p,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=t(c,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){const p=l[h],f=t(p,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,p=l.length;d<p;d++){const f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],d=r[l];for(let p=0,f=d.length;p<f;p++)h.push(d[p].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,h=a.length;l<h;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Co=new pe,Bn=new Ca,ts=new Es,Po=new D,oi=new D,ai=new D,ci=new D,Qs=new D,es=new D,ns=new Dt,is=new Dt,ss=new Dt,Lo=new D,Io=new D,Do=new D,rs=new D,os=new D;class A extends ve{constructor(t=new Oe,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){es.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],d=r[c];h!==0&&(Qs.fromBufferAttribute(d,t),a?es.addScaledVector(Qs,h):es.addScaledVector(Qs.sub(e),h))}e.add(es)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(ts.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(ts,Po)===null||Bn.origin.distanceToSquared(Po)>(t.far-t.near)**2))&&(Co.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(Co),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){const m=p[_],u=a[m.materialIndex],w=Math.max(m.start,f.start),g=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,I=g;S<I;S+=3){const R=o.getX(S),P=o.getX(S+1),F=o.getX(S+2);i=as(this,u,t,n,l,h,d,R,P,F),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=_,u=M;m<u;m+=3){const w=o.getX(m),g=o.getX(m+1),S=o.getX(m+2);i=as(this,a,t,n,l,h,d,w,g,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=p.length;_<M;_++){const m=p[_],u=a[m.materialIndex],w=Math.max(m.start,f.start),g=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=w,I=g;S<I;S+=3){const R=S,P=S+1,F=S+2;i=as(this,u,t,n,l,h,d,R,P,F),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=_,u=M;m<u;m+=3){const w=m,g=m+1,S=m+2;i=as(this,a,t,n,l,h,d,w,g,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function wl(s,t,e,n,i,r,a,o){let c;if(t.side===Ne?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===Ln,o),c===null)return null;os.copy(o),os.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(os);return l<e.near||l>e.far?null:{distance:l,point:os.clone(),object:s}}function as(s,t,e,n,i,r,a,o,c,l){s.getVertexPosition(o,oi),s.getVertexPosition(c,ai),s.getVertexPosition(l,ci);const h=wl(s,t,e,n,oi,ai,ci,rs);if(h){i&&(ns.fromBufferAttribute(i,o),is.fromBufferAttribute(i,c),ss.fromBufferAttribute(i,l),h.uv=je.getInterpolation(rs,oi,ai,ci,ns,is,ss,new Dt)),r&&(ns.fromBufferAttribute(r,o),is.fromBufferAttribute(r,c),ss.fromBufferAttribute(r,l),h.uv1=je.getInterpolation(rs,oi,ai,ci,ns,is,ss,new Dt),h.uv2=h.uv1),a&&(Lo.fromBufferAttribute(a,o),Io.fromBufferAttribute(a,c),Do.fromBufferAttribute(a,l),h.normal=je.getInterpolation(rs,oi,ai,ci,Lo,Io,Do,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new D,materialIndex:0};je.getNormal(oi,ai,ci,d.normal),h.face=d}return h}class rt extends Oe{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],d=[];let p=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(d,2));function _(M,m,u,w,g,S,I,R,P,F,v){const E=S/P,C=I/F,W=S/2,at=I/2,N=R/2,B=P+1,X=F+1;let Q=0,$=0;const q=new D;for(let et=0;et<X;et++){const K=et*C-at;for(let nt=0;nt<B;nt++){const J=nt*E-W;q[M]=J*w,q[m]=K*g,q[u]=N,l.push(q.x,q.y,q.z),q[M]=0,q[m]=0,q[u]=R>0?1:-1,h.push(q.x,q.y,q.z),d.push(nt/P),d.push(1-et/F),Q+=1}}for(let et=0;et<F;et++)for(let K=0;K<P;K++){const nt=p+K+B*et,J=p+K+B*(et+1),tt=p+(K+1)+B*(et+1),ut=p+(K+1)+B*et;c.push(nt,J,ut),c.push(J,tt,ut),$+=6}o.addGroup(f,$,v),f+=$,p+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Si(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const n=Si(s[e]);for(const i in n)t[i]=n[i]}return t}function El(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Ua(s){return s.getRenderTarget()===null?s.outputColorSpace:se.workingColorSpace}const Tl={clone:Si,merge:De};var bl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Al=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bl,this.fragmentShader=Al,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Si(t.uniforms),this.uniformsGroups=El(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Na extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Fe extends Na{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xi*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Di*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const li=-90,hi=1;class Rl extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fe(li,hi,t,e);i.layers=this.layers,this.add(i);const r=new Fe(li,hi,t,e);r.layers=this.layers,this.add(r);const a=new Fe(li,hi,t,e);a.layers=this.layers,this.add(a);const o=new Fe(li,hi,t,e);o.layers=this.layers,this.add(o);const c=new Fe(li,hi,t,e);c.layers=this.layers,this.add(c);const l=new Fe(li,hi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,p,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Oa extends Be{constructor(t,e,n,i,r,a,o,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:_i,super(t,e,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cl extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Ni("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===qn?Te:Xe),this.texture=new Oa(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new rt(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:Rn});r.uniforms.tEquirect.value=e;const a=new A(i,r),o=e.minFilter;return e.minFilter===Bi&&(e.minFilter=We),new Rl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const tr=new D,Pl=new D,Ll=new Jt;class kn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=tr.subVectors(n,e).cross(Pl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(tr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ll.getNormalMatrix(t),i=this.coplanarPoint(tr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new Es,cs=new D;class Tr{constructor(t=new kn,e=new kn,n=new kn,i=new kn,r=new kn,a=new kn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=pn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],d=i[6],p=i[7],f=i[8],_=i[9],M=i[10],m=i[11],u=i[12],w=i[13],g=i[14],S=i[15];if(n[0].setComponents(c-r,p-l,m-f,S-u).normalize(),n[1].setComponents(c+r,p+l,m+f,S+u).normalize(),n[2].setComponents(c+a,p+h,m+_,S+w).normalize(),n[3].setComponents(c-a,p-h,m-_,S-w).normalize(),n[4].setComponents(c-o,p-d,m-M,S-g).normalize(),e===pn)n[5].setComponents(c+o,p+d,m+M,S+g).normalize();else if(e===Ms)n[5].setComponents(o,d,M,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(cs.x=i.normal.x>0?t.max.x:t.min.x,cs.y=i.normal.y>0?t.max.y:t.min.y,cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fa(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Il(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,h){const d=l.array,p=l.usage,f=d.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,d,p),l.onUploadCallback();let M;if(d instanceof Float32Array)M=s.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)M=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=s.SHORT;else if(d instanceof Uint32Array)M=s.UNSIGNED_INT;else if(d instanceof Int32Array)M=s.INT;else if(d instanceof Int8Array)M=s.BYTE;else if(d instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:f}}function r(l,h,d){const p=h.array,f=h._updateRange,_=h.updateRanges;if(s.bindBuffer(d,l),f.count===-1&&_.length===0&&s.bufferSubData(d,0,p),_.length!==0){for(let M=0,m=_.length;M<m;M++){const u=_[M];e?s.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):s.bufferSubData(d,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):s.bufferSubData(d,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const p=n.get(l);(!p||p.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);if(d===void 0)n.set(l,i(l,h));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,l,h),d.version=l.version}}return{get:a,remove:o,update:c}}class qt extends Oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,d=t/o,p=e/c,f=[],_=[],M=[],m=[];for(let u=0;u<h;u++){const w=u*p-a;for(let g=0;g<l;g++){const S=g*d-r;_.push(S,-w,0),M.push(0,0,1),m.push(g/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<o;w++){const g=w+l*u,S=w+l*(u+1),I=w+1+l*(u+1),R=w+1+l*u;f.push(g,S,R),f.push(S,I,R)}this.setIndex(f),this.setAttribute("position",new oe(_,3)),this.setAttribute("normal",new oe(M,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dl=`#ifdef USE_ALPHAHASH
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
}`,Mu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vu=`#ifdef USE_SKINNING
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
}`,ku=`#define DISTANCE
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
}`,zu=`#define DISTANCE
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
}`,Yt={alphahash_fragment:Dl,alphahash_pars_fragment:Ul,alphamap_fragment:Nl,alphamap_pars_fragment:Ol,alphatest_fragment:Fl,alphatest_pars_fragment:Bl,aomap_fragment:Gl,aomap_pars_fragment:kl,batching_pars_vertex:zl,batching_vertex:Vl,begin_vertex:Hl,beginnormal_vertex:Wl,bsdfs:Xl,iridescence_fragment:ql,bumpmap_pars_fragment:Yl,clipping_planes_fragment:Kl,clipping_planes_pars_fragment:Zl,clipping_planes_pars_vertex:Jl,clipping_planes_vertex:jl,color_fragment:$l,color_pars_fragment:Ql,color_pars_vertex:th,color_vertex:eh,common:nh,cube_uv_reflection_fragment:ih,defaultnormal_vertex:sh,displacementmap_pars_vertex:rh,displacementmap_vertex:oh,emissivemap_fragment:ah,emissivemap_pars_fragment:ch,colorspace_fragment:lh,colorspace_pars_fragment:hh,envmap_fragment:uh,envmap_common_pars_fragment:dh,envmap_pars_fragment:fh,envmap_pars_vertex:ph,envmap_physical_pars_fragment:bh,envmap_vertex:mh,fog_vertex:gh,fog_pars_vertex:_h,fog_fragment:Mh,fog_pars_fragment:vh,gradientmap_pars_fragment:xh,lightmap_fragment:Sh,lightmap_pars_fragment:yh,lights_lambert_fragment:wh,lights_lambert_pars_fragment:Eh,lights_pars_begin:Th,lights_toon_fragment:Ah,lights_toon_pars_fragment:Rh,lights_phong_fragment:Ch,lights_phong_pars_fragment:Ph,lights_physical_fragment:Lh,lights_physical_pars_fragment:Ih,lights_fragment_begin:Dh,lights_fragment_maps:Uh,lights_fragment_end:Nh,logdepthbuf_fragment:Oh,logdepthbuf_pars_fragment:Fh,logdepthbuf_pars_vertex:Bh,logdepthbuf_vertex:Gh,map_fragment:kh,map_pars_fragment:zh,map_particle_fragment:Vh,map_particle_pars_fragment:Hh,metalnessmap_fragment:Wh,metalnessmap_pars_fragment:Xh,morphcolor_vertex:qh,morphnormal_vertex:Yh,morphtarget_pars_vertex:Kh,morphtarget_vertex:Zh,normal_fragment_begin:Jh,normal_fragment_maps:jh,normal_pars_fragment:$h,normal_pars_vertex:Qh,normal_vertex:tu,normalmap_pars_fragment:eu,clearcoat_normal_fragment_begin:nu,clearcoat_normal_fragment_maps:iu,clearcoat_pars_fragment:su,iridescence_pars_fragment:ru,opaque_fragment:ou,packing:au,premultiplied_alpha_fragment:cu,project_vertex:lu,dithering_fragment:hu,dithering_pars_fragment:uu,roughnessmap_fragment:du,roughnessmap_pars_fragment:fu,shadowmap_pars_fragment:pu,shadowmap_pars_vertex:mu,shadowmap_vertex:gu,shadowmask_pars_fragment:_u,skinbase_vertex:Mu,skinning_pars_vertex:vu,skinning_vertex:xu,skinnormal_vertex:Su,specularmap_fragment:yu,specularmap_pars_fragment:wu,tonemapping_fragment:Eu,tonemapping_pars_fragment:Tu,transmission_fragment:bu,transmission_pars_fragment:Au,uv_pars_fragment:Ru,uv_pars_vertex:Cu,uv_vertex:Pu,worldpos_vertex:Lu,background_vert:Iu,background_frag:Du,backgroundCube_vert:Uu,backgroundCube_frag:Nu,cube_vert:Ou,cube_frag:Fu,depth_vert:Bu,depth_frag:Gu,distanceRGBA_vert:ku,distanceRGBA_frag:zu,equirect_vert:Vu,equirect_frag:Hu,linedashed_vert:Wu,linedashed_frag:Xu,meshbasic_vert:qu,meshbasic_frag:Yu,meshlambert_vert:Ku,meshlambert_frag:Zu,meshmatcap_vert:Ju,meshmatcap_frag:ju,meshnormal_vert:$u,meshnormal_frag:Qu,meshphong_vert:td,meshphong_frag:ed,meshphysical_vert:nd,meshphysical_frag:id,meshtoon_vert:sd,meshtoon_frag:rd,points_vert:od,points_frag:ad,shadow_vert:cd,shadow_frag:ld,sprite_vert:hd,sprite_frag:ud},pt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},sn={basic:{uniforms:De([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:De([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:De([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:De([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:De([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:De([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:De([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:De([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:De([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:De([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:De([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:De([pt.common,pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:De([pt.lights,pt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};sn.physical={uniforms:De([sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ls={r:0,b:0,g:0};function dd(s,t,e,n,i,r,a){const o=new jt(0);let c=r===!0?0:1,l,h,d=null,p=0,f=null;function _(m,u){let w=!1,g=u.isScene===!0?u.background:null;g&&g.isTexture&&(g=(u.backgroundBlurriness>0?e:t).get(g)),g===null?M(o,c):g&&g.isColor&&(M(g,1),w=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ys)?(h===void 0&&(h=new A(new rt(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Si(sn.backgroundCube.uniforms),vertexShader:sn.backgroundCube.vertexShader,fragmentShader:sn.backgroundCube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=g,h.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=se.getTransfer(g.colorSpace)!==ae,(d!==g||p!==g.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=g,p=g.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new A(new qt(2,2),new Kn({name:"BackgroundMaterial",uniforms:Si(sn.background.uniforms),vertexShader:sn.background.vertexShader,fragmentShader:sn.background.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=se.getTransfer(g.colorSpace)!==ae,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||p!==g.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,d=g,p=g.version,f=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function M(m,u){m.getRGB(ls,Ua(s)),n.buffers.color.setClear(ls.r,ls.g,ls.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(m,u=1){o.set(m),c=u,M(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,M(o,c)},render:_}}function fd(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let l=c,h=!1;function d(N,B,X,Q,$){let q=!1;if(a){const et=M(Q,X,B);l!==et&&(l=et,f(l.object)),q=u(N,Q,X,$),q&&w(N,Q,X,$)}else{const et=B.wireframe===!0;(l.geometry!==Q.id||l.program!==X.id||l.wireframe!==et)&&(l.geometry=Q.id,l.program=X.id,l.wireframe=et,q=!0)}$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,F(N,B,X,Q),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(N){return n.isWebGL2?s.bindVertexArray(N):r.bindVertexArrayOES(N)}function _(N){return n.isWebGL2?s.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function M(N,B,X){const Q=X.wireframe===!0;let $=o[N.id];$===void 0&&($={},o[N.id]=$);let q=$[B.id];q===void 0&&(q={},$[B.id]=q);let et=q[Q];return et===void 0&&(et=m(p()),q[Q]=et),et}function m(N){const B=[],X=[],Q=[];for(let $=0;$<i;$++)B[$]=0,X[$]=0,Q[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:X,attributeDivisors:Q,object:N,attributes:{},index:null}}function u(N,B,X,Q){const $=l.attributes,q=B.attributes;let et=0;const K=X.getAttributes();for(const nt in K)if(K[nt].location>=0){const tt=$[nt];let ut=q[nt];if(ut===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(ut=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(ut=N.instanceColor)),tt===void 0||tt.attribute!==ut||ut&&tt.data!==ut.data)return!0;et++}return l.attributesNum!==et||l.index!==Q}function w(N,B,X,Q){const $={},q=B.attributes;let et=0;const K=X.getAttributes();for(const nt in K)if(K[nt].location>=0){let tt=q[nt];tt===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));const ut={};ut.attribute=tt,tt&&tt.data&&(ut.data=tt.data),$[nt]=ut,et++}l.attributes=$,l.attributesNum=et,l.index=Q}function g(){const N=l.newAttributes;for(let B=0,X=N.length;B<X;B++)N[B]=0}function S(N){I(N,0)}function I(N,B){const X=l.newAttributes,Q=l.enabledAttributes,$=l.attributeDivisors;X[N]=1,Q[N]===0&&(s.enableVertexAttribArray(N),Q[N]=1),$[N]!==B&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,B),$[N]=B)}function R(){const N=l.newAttributes,B=l.enabledAttributes;for(let X=0,Q=B.length;X<Q;X++)B[X]!==N[X]&&(s.disableVertexAttribArray(X),B[X]=0)}function P(N,B,X,Q,$,q,et){et===!0?s.vertexAttribIPointer(N,B,X,$,q):s.vertexAttribPointer(N,B,X,Q,$,q)}function F(N,B,X,Q){if(n.isWebGL2===!1&&(N.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const $=Q.attributes,q=X.getAttributes(),et=B.defaultAttributeValues;for(const K in q){const nt=q[K];if(nt.location>=0){let J=$[K];if(J===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){const tt=J.normalized,ut=J.itemSize,Tt=e.get(J);if(Tt===void 0)continue;const wt=Tt.buffer,Bt=Tt.type,Pt=Tt.bytesPerElement,Rt=n.isWebGL2===!0&&(Bt===s.INT||Bt===s.UNSIGNED_INT||J.gpuType===ma);if(J.isInterleavedBufferAttribute){const vt=J.data,H=vt.stride,Wt=J.offset;if(vt.isInstancedInterleavedBuffer){for(let bt=0;bt<nt.locationSize;bt++)I(nt.location+bt,vt.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let bt=0;bt<nt.locationSize;bt++)S(nt.location+bt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let bt=0;bt<nt.locationSize;bt++)P(nt.location+bt,ut/nt.locationSize,Bt,tt,H*Pt,(Wt+ut/nt.locationSize*bt)*Pt,Rt)}else{if(J.isInstancedBufferAttribute){for(let vt=0;vt<nt.locationSize;vt++)I(nt.location+vt,J.meshPerAttribute);N.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let vt=0;vt<nt.locationSize;vt++)S(nt.location+vt);s.bindBuffer(s.ARRAY_BUFFER,wt);for(let vt=0;vt<nt.locationSize;vt++)P(nt.location+vt,ut/nt.locationSize,Bt,tt,ut*Pt,ut/nt.locationSize*vt*Pt,Rt)}}else if(et!==void 0){const tt=et[K];if(tt!==void 0)switch(tt.length){case 2:s.vertexAttrib2fv(nt.location,tt);break;case 3:s.vertexAttrib3fv(nt.location,tt);break;case 4:s.vertexAttrib4fv(nt.location,tt);break;default:s.vertexAttrib1fv(nt.location,tt)}}}}R()}function v(){W();for(const N in o){const B=o[N];for(const X in B){const Q=B[X];for(const $ in Q)_(Q[$].object),delete Q[$];delete B[X]}delete o[N]}}function E(N){if(o[N.id]===void 0)return;const B=o[N.id];for(const X in B){const Q=B[X];for(const $ in Q)_(Q[$].object),delete Q[$];delete B[X]}delete o[N.id]}function C(N){for(const B in o){const X=o[B];if(X[N.id]===void 0)continue;const Q=X[N.id];for(const $ in Q)_(Q[$].object),delete Q[$];delete X[N.id]}}function W(){at(),h=!0,l!==c&&(l=c,f(l.object))}function at(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:W,resetDefaultState:at,dispose:v,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:S,disableUnusedAttributes:R}}function pd(s,t,e,n){const i=n.isWebGL2;let r;function a(h){r=h}function o(h,d){s.drawArrays(r,h,d),e.update(d,r,1)}function c(h,d,p){if(p===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,h,d,p),e.update(d,r,p)}function l(h,d,p){if(p===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<p;_++)this.render(h[_],d[_]);else{f.multiDrawArraysWEBGL(r,h,0,d,0,p);let _=0;for(let M=0;M<p;M++)_+=d[M];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=l}function md(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const l=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=p>0,S=a||t.has("OES_texture_float"),I=g&&S,R=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:_,maxAttributes:M,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:w,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:I,maxSamples:R}}function gd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new kn,o=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const f=d.length!==0||p||n!==0||i;return i=p,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=h(d,p,0)},this.setState=function(d,p,f){const _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,u=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?h(null):l();else{const w=r?0:n,g=w*4;let S=u.clippingState||null;c.value=S,S=h(_,p,g,f);for(let I=0;I!==g;++I)S[I]=e[I];u.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,p,f,_){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const u=f+M*4,w=p.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let g=0,S=f;g!==M;++g,S+=4)a.copy(d[g]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function _d(s){let t=new WeakMap;function e(a,o){return o===mr?a.mapping=_i:o===gr&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===mr||o===gr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Cl(c.height/2);return l.fromEquirectangularTexture(s,a),t.set(a,l),a.addEventListener("dispose",i),e(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Ba extends Na{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const fi=4,Uo=[.125,.215,.35,.446,.526,.582],Hn=20,er=new Ba,No=new jt;let nr=null,ir=0,sr=0;const zn=(1+Math.sqrt(5))/2,ui=1/zn,Oo=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,zn,ui),new D(0,zn,-ui),new D(ui,0,zn),new D(-ui,0,zn),new D(zn,ui,0),new D(-zn,ui,0)];class Fo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Go(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(nr,ir,sr),t.scissorTest=!1,hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===Mi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),nr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),sr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Gi,format:Qe,colorSpace:mn,depthBuffer:!1},i=Bo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Md(r)),this._blurMaterial=vd(r,t,e)}return i}_compileMaterial(t){const e=new A(this._lodPlanes[0],t);this._renderer.compile(e,er)}_sceneToCubeUV(t,e,n,i){const o=new Fe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(No),h.toneMapping=Cn,h.autoClear=!1;const f=new fe({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),_=new A(new rt,f);let M=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,M=!0):(f.color.copy(No),M=!0);for(let u=0;u<6;u++){const w=u%3;w===0?(o.up.set(0,c[u],0),o.lookAt(l[u],0,0)):w===1?(o.up.set(0,0,c[u]),o.lookAt(0,l[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,l[u]));const g=this._cubeSize;hs(i,w*g,u>2?g:0,g,g),h.setRenderTarget(i),M&&h.render(_,o),h.render(t,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=p,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===_i||t.mapping===Mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Go());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new A(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;hs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,er)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Oo[(i-1)%Oo.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new A(this._lodPlanes[i],l),p=l.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Hn-1),M=r/_,m=isFinite(r)?1+Math.floor(h*M):Hn;m>Hn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hn}`);const u=[];let w=0;for(let P=0;P<Hn;++P){const F=P/M,v=Math.exp(-F*F/2);u.push(v),P===0?w+=v:P<m&&(w+=2*v)}for(let P=0;P<u.length;P++)u[P]=u[P]/w;p.envMap.value=t.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:g}=this;p.dTheta.value=_,p.mipInt.value=g-n;const S=this._sizeLods[i],I=3*S*(i>g-fi?i-g+fi:0),R=4*(this._cubeSize-S);hs(e,I,R,3*S,2*S),c.setRenderTarget(e),c.render(d,er)}}function Md(s){const t=[],e=[],n=[];let i=s;const r=s-fi+1+Uo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-fi?c=Uo[a-s+fi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,d=1+l,p=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,M=3,m=2,u=1,w=new Float32Array(M*_*f),g=new Float32Array(m*_*f),S=new Float32Array(u*_*f);for(let R=0;R<f;R++){const P=R%3*2/3-1,F=R>2?0:-1,v=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];w.set(v,M*_*R),g.set(p,m*_*R);const E=[R,R,R,R,R,R];S.set(E,u*_*R)}const I=new Oe;I.setAttribute("position",new rn(w,M)),I.setAttribute("uv",new rn(g,m)),I.setAttribute("faceIndex",new rn(S,u)),t.push(I),i>fi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bo(s,t,e){const n=new Yn(s,t,e);return n.texture.mapping=ys,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function vd(s,t,e){const n=new Float32Array(Hn),i=new D(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Hn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:br(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Go(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:br(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function ko(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:br(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function br(){return`

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
	`}function xd(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===mr||c===gr,h=c===_i||c===Mi;if(l||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Fo(s)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(l&&d&&d.height>0||h&&d&&i(d)){e===null&&(e=new Fo(s));const p=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Sd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yd(s,t,e,n){const i={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const _ in p.attributes)t.remove(p.attributes[_]);for(const _ in p.morphAttributes){const M=p.morphAttributes[_];for(let m=0,u=M.length;m<u;m++)t.remove(M[m])}p.removeEventListener("dispose",a),delete i[p.id];const f=r.get(p);f&&(t.remove(f),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return i[p.id]===!0||(p.addEventListener("dispose",a),i[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const _ in p)t.update(p[_],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const M=f[_];for(let m=0,u=M.length;m<u;m++)t.update(M[m],s.ARRAY_BUFFER)}}function l(d){const p=[],f=d.index,_=d.attributes.position;let M=0;if(f!==null){const w=f.array;M=f.version;for(let g=0,S=w.length;g<S;g+=3){const I=w[g+0],R=w[g+1],P=w[g+2];p.push(I,R,R,P,P,I)}}else if(_!==void 0){const w=_.array;M=_.version;for(let g=0,S=w.length/3-1;g<S;g+=3){const I=g+0,R=g+1,P=g+2;p.push(I,R,R,P,P,I)}}else return;const m=new(Ta(p)?Da:Ia)(p,1);m.version=M;const u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){const p=r.get(d);if(p){const f=d.index;f!==null&&p.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:h}}function wd(s,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,c;function l(f){o=f.type,c=f.bytesPerElement}function h(f,_){s.drawElements(r,_,o,f*c),e.update(_,r,1)}function d(f,_,M){if(M===0)return;let m,u;if(i)m=s,u="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](r,_,o,f*c,M),e.update(_,r,M)}function p(f,_,M){if(M===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<M;u++)this.render(f[u]/c,_[u]);else{m.multiDrawElementsWEBGL(r,_,0,o,f,0,M);let u=0;for(let w=0;w<M;w++)u+=_[w];e.update(u,r,1)}}this.setMode=a,this.setIndex=l,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function Ed(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Td(s,t){return s[0]-t[0]}function bd(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Ad(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new le,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function c(l,h,d){const p=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,M=_!==void 0?_.length:0;let m=r.get(h);if(m===void 0||m.count!==M){let B=function(){at.dispose(),r.delete(h),h.removeEventListener("dispose",B)};var f=B;m!==void 0&&m.texture.dispose();const g=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,I=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],F=h.morphAttributes.color||[];let v=0;g===!0&&(v=1),S===!0&&(v=2),I===!0&&(v=3);let E=h.attributes.position.count*v,C=1;E>t.maxTextureSize&&(C=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const W=new Float32Array(E*C*4*M),at=new Ra(W,E,C,M);at.type=An,at.needsUpdate=!0;const N=v*4;for(let X=0;X<M;X++){const Q=R[X],$=P[X],q=F[X],et=E*C*4*X;for(let K=0;K<Q.count;K++){const nt=K*N;g===!0&&(a.fromBufferAttribute(Q,K),W[et+nt+0]=a.x,W[et+nt+1]=a.y,W[et+nt+2]=a.z,W[et+nt+3]=0),S===!0&&(a.fromBufferAttribute($,K),W[et+nt+4]=a.x,W[et+nt+5]=a.y,W[et+nt+6]=a.z,W[et+nt+7]=0),I===!0&&(a.fromBufferAttribute(q,K),W[et+nt+8]=a.x,W[et+nt+9]=a.y,W[et+nt+10]=a.z,W[et+nt+11]=q.itemSize===4?a.w:1)}}m={count:M,texture:at,size:new Dt(E,C)},r.set(h,m),h.addEventListener("dispose",B)}let u=0;for(let g=0;g<p.length;g++)u+=p[g];const w=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",p),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=p===void 0?0:p.length;let M=n[h.id];if(M===void 0||M.length!==_){M=[];for(let S=0;S<_;S++)M[S]=[S,0];n[h.id]=M}for(let S=0;S<_;S++){const I=M[S];I[0]=S,I[1]=p[S]}M.sort(bd);for(let S=0;S<8;S++)S<_&&M[S][1]?(o[S][0]=M[S][0],o[S][1]=M[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Td);const m=h.morphAttributes.position,u=h.morphAttributes.normal;let w=0;for(let S=0;S<8;S++){const I=o[S],R=I[0],P=I[1];R!==Number.MAX_SAFE_INTEGER&&P?(m&&h.getAttribute("morphTarget"+S)!==m[R]&&h.setAttribute("morphTarget"+S,m[R]),u&&h.getAttribute("morphNormal"+S)!==u[R]&&h.setAttribute("morphNormal"+S,u[R]),i[S]=P,w+=P):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),u&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const g=h.morphTargetsRelative?1:1-w;d.getUniforms().setValue(s,"morphTargetBaseInfluence",g),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Rd(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,d=t.get(c,h);if(i.get(d)!==l&&(t.update(d),i.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const p=c.skeleton;i.get(p)!==l&&(p.update(),i.set(p,l))}return d}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class Ga extends Be{constructor(t,e,n,i,r,a,o,c,l,h){if(h=h!==void 0?h:Xn,h!==Xn&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xn&&(n=bn),n===void 0&&h===vi&&(n=Wn),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ka=new Be,za=new Ga(1,1);za.compareFunction=Ea;const Va=new Ra,Ha=new dl,Wa=new Oa,zo=[],Vo=[],Ho=new Float32Array(16),Wo=new Float32Array(9),Xo=new Float32Array(4);function Ti(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=zo[i];if(r===void 0&&(r=new Float32Array(i),zo[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function xe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Se(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function bs(s,t){let e=Vo[t];e===void 0&&(e=new Int32Array(t),Vo[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Cd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Pd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2fv(this.addr,t),Se(e,t)}}function Ld(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;s.uniform3fv(this.addr,t),Se(e,t)}}function Id(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4fv(this.addr,t),Se(e,t)}}function Dd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Se(e,t)}else{if(xe(e,n))return;Xo.set(n),s.uniformMatrix2fv(this.addr,!1,Xo),Se(e,n)}}function Ud(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Se(e,t)}else{if(xe(e,n))return;Wo.set(n),s.uniformMatrix3fv(this.addr,!1,Wo),Se(e,n)}}function Nd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Se(e,t)}else{if(xe(e,n))return;Ho.set(n),s.uniformMatrix4fv(this.addr,!1,Ho),Se(e,n)}}function Od(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Fd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2iv(this.addr,t),Se(e,t)}}function Bd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3iv(this.addr,t),Se(e,t)}}function Gd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4iv(this.addr,t),Se(e,t)}}function kd(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function zd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;s.uniform2uiv(this.addr,t),Se(e,t)}}function Vd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;s.uniform3uiv(this.addr,t),Se(e,t)}}function Hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;s.uniform4uiv(this.addr,t),Se(e,t)}}function Wd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?za:ka;e.setTexture2D(t||r,i)}function Xd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ha,i)}function qd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wa,i)}function Yd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Va,i)}function Kd(s){switch(s){case 5126:return Cd;case 35664:return Pd;case 35665:return Ld;case 35666:return Id;case 35674:return Dd;case 35675:return Ud;case 35676:return Nd;case 5124:case 35670:return Od;case 35667:case 35671:return Fd;case 35668:case 35672:return Bd;case 35669:case 35673:return Gd;case 5125:return kd;case 36294:return zd;case 36295:return Vd;case 36296:return Hd;case 35678:case 36198:case 36298:case 36306:case 35682:return Wd;case 35679:case 36299:case 36307:return Xd;case 35680:case 36300:case 36308:case 36293:return qd;case 36289:case 36303:case 36311:case 36292:return Yd}}function Zd(s,t){s.uniform1fv(this.addr,t)}function Jd(s,t){const e=Ti(t,this.size,2);s.uniform2fv(this.addr,e)}function jd(s,t){const e=Ti(t,this.size,3);s.uniform3fv(this.addr,e)}function $d(s,t){const e=Ti(t,this.size,4);s.uniform4fv(this.addr,e)}function Qd(s,t){const e=Ti(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function tf(s,t){const e=Ti(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ef(s,t){const e=Ti(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function nf(s,t){s.uniform1iv(this.addr,t)}function sf(s,t){s.uniform2iv(this.addr,t)}function rf(s,t){s.uniform3iv(this.addr,t)}function of(s,t){s.uniform4iv(this.addr,t)}function af(s,t){s.uniform1uiv(this.addr,t)}function cf(s,t){s.uniform2uiv(this.addr,t)}function lf(s,t){s.uniform3uiv(this.addr,t)}function hf(s,t){s.uniform4uiv(this.addr,t)}function uf(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ka,r[a])}function df(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Ha,r[a])}function ff(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Wa,r[a])}function pf(s,t,e){const n=this.cache,i=t.length,r=bs(e,i);xe(n,r)||(s.uniform1iv(this.addr,r),Se(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Va,r[a])}function mf(s){switch(s){case 5126:return Zd;case 35664:return Jd;case 35665:return jd;case 35666:return $d;case 35674:return Qd;case 35675:return tf;case 35676:return ef;case 5124:case 35670:return nf;case 35667:case 35671:return sf;case 35668:case 35672:return rf;case 35669:case 35673:return of;case 5125:return af;case 36294:return cf;case 36295:return lf;case 36296:return hf;case 35678:case 36198:case 36298:case 36306:case 35682:return uf;case 35679:case 36299:case 36307:return df;case 35680:case 36300:case 36308:case 36293:return ff;case 36289:case 36303:case 36311:case 36292:return pf}}class gf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Kd(e.type)}}class _f{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mf(e.type)}}class Mf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const rr=/(\w+)(\])?(\[|\.)?/g;function qo(s,t){s.seq.push(t),s.map[t.id]=t}function vf(s,t,e){const n=s.name,i=n.length;for(rr.lastIndex=0;;){const r=rr.exec(n),a=rr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){qo(e,l===void 0?new gf(o,s,t):new _f(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Mf(o),qo(e,d)),e=d}}}class fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);vf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function Yo(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const xf=37297;let Sf=0;function yf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function wf(s){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(s);let n;switch(t===e?n="":t===_s&&e===gs?n="LinearDisplayP3ToLinearSRGB":t===gs&&e===_s&&(n="LinearSRGBToLinearDisplayP3"),s){case mn:case ws:return[n,"LinearTransferOETF"];case Te:case wr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ko(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+yf(s.getShaderSource(t),a)}else return i}function Ef(s,t){const e=wf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tf(s,t){let e;switch(t){case wc:e="Linear";break;case Ec:e="Reinhard";break;case Tc:e="OptimizedCineon";break;case fa:e="ACESFilmic";break;case Ac:e="AgX";break;case bc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function bf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(pi).join(`
`)}function Af(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(pi).join(`
`)}function Rf(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cf(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function pi(s){return s!==""}function Zo(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jo(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Pf=/^[ \t]*#include +<([\w\d./]+)>/gm;function xr(s){return s.replace(Pf,If)}const Lf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function If(s,t){let e=Yt[t];if(e===void 0){const n=Lf.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return xr(e)}const Df=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jo(s){return s.replace(Df,Uf)}function Uf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function $o(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Nf(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ha?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ua?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(t="SHADOWMAP_TYPE_VSM"),t}function Of(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case _i:case Mi:t="ENVMAP_TYPE_CUBE";break;case ys:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ff(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Mi:t="ENVMAP_MODE_REFRACTION";break}return t}function Bf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case da:t="ENVMAP_BLENDING_MULTIPLY";break;case Sc:t="ENVMAP_BLENDING_MIX";break;case yc:t="ENVMAP_BLENDING_ADD";break}return t}function Gf(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kf(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Nf(e),l=Of(e),h=Ff(e),d=Bf(e),p=Gf(e),f=e.isWebGL2?"":bf(e),_=Af(e),M=Rf(r),m=i.createProgram();let u,w,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(pi).join(`
`),u.length>0&&(u+=`
`),w=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(pi).join(`
`),w.length>0&&(w+=`
`)):(u=[$o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pi).join(`
`),w=[f,$o(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?Tf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Ef("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pi).join(`
`)),a=xr(a),a=Zo(a,e),a=Jo(a,e),o=xr(o),o=Zo(o,e),o=Jo(o,e),a=jo(a),o=jo(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===go?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===go?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const S=g+u+a,I=g+w+o,R=Yo(i,i.VERTEX_SHADER,S),P=Yo(i,i.FRAGMENT_SHADER,I);i.attachShader(m,R),i.attachShader(m,P),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function F(W){if(s.debug.checkShaderErrors){const at=i.getProgramInfoLog(m).trim(),N=i.getShaderInfoLog(R).trim(),B=i.getShaderInfoLog(P).trim();let X=!0,Q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,R,P);else{const $=Ko(i,R,"vertex"),q=Ko(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+at+`
`+$+`
`+q)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(N===""||B==="")&&(Q=!1);Q&&(W.diagnostics={runnable:X,programLog:at,vertexShader:{log:N,prefix:u},fragmentShader:{log:B,prefix:w}})}i.deleteShader(R),i.deleteShader(P),v=new fs(i,m),E=Cf(i,m)}let v;this.getUniforms=function(){return v===void 0&&F(this),v};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(m,xf)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=P,this}let zf=0;class Vf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hf(t),e.set(t,n)),n}}class Hf{constructor(t){this.id=zf++,this.code=t,this.usedTimes=0}}function Wf(s,t,e,n,i,r,a){const o=new Pa,c=new Vf,l=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,p=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(v){return v===0?"uv":`uv${v}`}function m(v,E,C,W,at){const N=W.fog,B=at.geometry,X=v.isMeshStandardMaterial?W.environment:null,Q=(v.isMeshStandardMaterial?e:t).get(v.envMap||X),$=Q&&Q.mapping===ys?Q.image.height:null,q=_[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,K=et!==void 0?et.length:0;let nt=0;B.morphAttributes.position!==void 0&&(nt=1),B.morphAttributes.normal!==void 0&&(nt=2),B.morphAttributes.color!==void 0&&(nt=3);let J,tt,ut,Tt;if(q){const me=sn[q];J=me.vertexShader,tt=me.fragmentShader}else J=v.vertexShader,tt=v.fragmentShader,c.update(v),ut=c.getVertexShaderID(v),Tt=c.getFragmentShaderID(v);const wt=s.getRenderTarget(),Bt=at.isInstancedMesh===!0,Pt=at.isBatchedMesh===!0,Rt=!!v.map,vt=!!v.matcap,H=!!Q,Wt=!!v.aoMap,bt=!!v.lightMap,Lt=!!v.bumpMap,St=!!v.normalMap,Qt=!!v.displacementMap,Ot=!!v.emissiveMap,b=!!v.metalnessMap,x=!!v.roughnessMap,z=v.anisotropy>0,V=v.clearcoat>0,Y=v.iridescence>0,Z=v.sheen>0,yt=v.transmission>0,ct=z&&!!v.anisotropyMap,Mt=V&&!!v.clearcoatMap,It=V&&!!v.clearcoatNormalMap,Et=V&&!!v.clearcoatRoughnessMap,ot=Y&&!!v.iridescenceMap,Kt=Y&&!!v.iridescenceThicknessMap,kt=Z&&!!v.sheenColorMap,it=Z&&!!v.sheenRoughnessMap,ft=!!v.specularMap,lt=!!v.specularColorMap,gt=!!v.specularIntensityMap,zt=yt&&!!v.transmissionMap,$t=yt&&!!v.thicknessMap,Gt=!!v.gradientMap,ht=!!v.alphaMap,U=v.alphaTest>0,mt=!!v.alphaHash,dt=!!v.extensions,Ct=!!B.attributes.uv1,Ut=!!B.attributes.uv2,ee=!!B.attributes.uv3;let ne=Cn;return v.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(ne=s.toneMapping),{isWebGL2:h,shaderID:q,shaderType:v.type,shaderName:v.name,vertexShader:J,fragmentShader:tt,defines:v.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Pt,instancing:Bt,instancingColor:Bt&&at.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:wt===null?s.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:mn,map:Rt,matcap:vt,envMap:H,envMapMode:H&&Q.mapping,envMapCubeUVHeight:$,aoMap:Wt,lightMap:bt,bumpMap:Lt,normalMap:St,displacementMap:p&&Qt,emissiveMap:Ot,normalMapObjectSpace:St&&v.normalMapType===Gc,normalMapTangentSpace:St&&v.normalMapType===wa,metalnessMap:b,roughnessMap:x,anisotropy:z,anisotropyMap:ct,clearcoat:V,clearcoatMap:Mt,clearcoatNormalMap:It,clearcoatRoughnessMap:Et,iridescence:Y,iridescenceMap:ot,iridescenceThicknessMap:Kt,sheen:Z,sheenColorMap:kt,sheenRoughnessMap:it,specularMap:ft,specularColorMap:lt,specularIntensityMap:gt,transmission:yt,transmissionMap:zt,thicknessMap:$t,gradientMap:Gt,opaque:v.transparent===!1&&v.blending===mi,alphaMap:ht,alphaTest:U,alphaHash:mt,combine:v.combine,mapUv:Rt&&M(v.map.channel),aoMapUv:Wt&&M(v.aoMap.channel),lightMapUv:bt&&M(v.lightMap.channel),bumpMapUv:Lt&&M(v.bumpMap.channel),normalMapUv:St&&M(v.normalMap.channel),displacementMapUv:Qt&&M(v.displacementMap.channel),emissiveMapUv:Ot&&M(v.emissiveMap.channel),metalnessMapUv:b&&M(v.metalnessMap.channel),roughnessMapUv:x&&M(v.roughnessMap.channel),anisotropyMapUv:ct&&M(v.anisotropyMap.channel),clearcoatMapUv:Mt&&M(v.clearcoatMap.channel),clearcoatNormalMapUv:It&&M(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&M(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&M(v.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&M(v.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&M(v.sheenColorMap.channel),sheenRoughnessMapUv:it&&M(v.sheenRoughnessMap.channel),specularMapUv:ft&&M(v.specularMap.channel),specularColorMapUv:lt&&M(v.specularColorMap.channel),specularIntensityMapUv:gt&&M(v.specularIntensityMap.channel),transmissionMapUv:zt&&M(v.transmissionMap.channel),thicknessMapUv:$t&&M(v.thicknessMap.channel),alphaMapUv:ht&&M(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(St||z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Ut,vertexUv3s:ee,pointsUvs:at.isPoints===!0&&!!B.attributes.uv&&(Rt||ht),fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:at.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:nt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ne,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Rt&&v.map.isVideoTexture===!0&&se.getTransfer(v.map.colorSpace)===ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===be,flipSided:v.side===Ne,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:dt&&v.extensions.derivatives===!0,extensionFragDepth:dt&&v.extensions.fragDepth===!0,extensionDrawBuffers:dt&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&v.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()}}function u(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)E.push(C),E.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(w(E,v),g(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function w(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function g(v,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),v.push(o.mask)}function S(v){const E=_[v.type];let C;if(E){const W=sn[E];C=Tl.clone(W.uniforms)}else C=v.uniforms;return C}function I(v,E){let C;for(let W=0,at=l.length;W<at;W++){const N=l[W];if(N.cacheKey===E){C=N,++C.usedTimes;break}}return C===void 0&&(C=new kf(s,E,v,r),l.push(C)),C}function R(v){if(--v.usedTimes===0){const E=l.indexOf(v);l[E]=l[l.length-1],l.pop(),v.destroy()}}function P(v){c.remove(v)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:I,releaseProgram:R,releaseShaderCache:P,programs:l,dispose:F}}function Xf(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function qf(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Qo(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ta(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,p,f,_,M,m){let u=s[t];return u===void 0?(u={id:d.id,object:d,geometry:p,material:f,groupOrder:_,renderOrder:d.renderOrder,z:M,group:m},s[t]=u):(u.id=d.id,u.object=d,u.geometry=p,u.material=f,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=M,u.group=m),t++,u}function o(d,p,f,_,M,m){const u=a(d,p,f,_,M,m);f.transmission>0?n.push(u):f.transparent===!0?i.push(u):e.push(u)}function c(d,p,f,_,M,m){const u=a(d,p,f,_,M,m);f.transmission>0?n.unshift(u):f.transparent===!0?i.unshift(u):e.unshift(u)}function l(d,p){e.length>1&&e.sort(d||qf),n.length>1&&n.sort(p||Qo),i.length>1&&i.sort(p||Qo)}function h(){for(let d=t,p=s.length;d<p;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function Yf(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new ta,s.set(n,[a])):i>=r.length?(a=new ta,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new jt};break;case"SpotLight":e={position:new D,direction:new D,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Zf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Jf=0;function jf(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function $f(s,t){const e=new Kf,n=Zf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new D);const r=new D,a=new pe,o=new pe;function c(h,d){let p=0,f=0,_=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let M=0,m=0,u=0,w=0,g=0,S=0,I=0,R=0,P=0,F=0,v=0;h.sort(jf);const E=d===!0?Math.PI:1;for(let W=0,at=h.length;W<at;W++){const N=h[W],B=N.color,X=N.intensity,Q=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)p+=B.r*X*E,f+=B.g*X*E,_+=B.b*X*E;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],X);v++}else if(N.isDirectionalLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const et=N.shadow,K=n.get(N);K.shadowBias=et.bias,K.shadowNormalBias=et.normalBias,K.shadowRadius=et.radius,K.shadowMapSize=et.mapSize,i.directionalShadow[M]=K,i.directionalShadowMap[M]=$,i.directionalShadowMatrix[M]=N.shadow.matrix,S++}i.directional[M]=q,M++}else if(N.isSpotLight){const q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(B).multiplyScalar(X*E),q.distance=Q,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[u]=q;const et=N.shadow;if(N.map&&(i.spotLightMap[P]=N.map,P++,et.updateMatrices(N),N.castShadow&&F++),i.spotLightMatrix[u]=et.matrix,N.castShadow){const K=n.get(N);K.shadowBias=et.bias,K.shadowNormalBias=et.normalBias,K.shadowRadius=et.radius,K.shadowMapSize=et.mapSize,i.spotShadow[u]=K,i.spotShadowMap[u]=$,R++}u++}else if(N.isRectAreaLight){const q=e.get(N);q.color.copy(B).multiplyScalar(X),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=q,w++}else if(N.isPointLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity*E),q.distance=N.distance,q.decay=N.decay,N.castShadow){const et=N.shadow,K=n.get(N);K.shadowBias=et.bias,K.shadowNormalBias=et.normalBias,K.shadowRadius=et.radius,K.shadowMapSize=et.mapSize,K.shadowCameraNear=et.camera.near,K.shadowCameraFar=et.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=N.shadow.matrix,I++}i.point[m]=q,m++}else if(N.isHemisphereLight){const q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(X*E),q.groundColor.copy(N.groundColor).multiplyScalar(X*E),i.hemi[g]=q,g++}}w>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_FLOAT_1,i.rectAreaLTC2=pt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=pt.LTC_HALF_1,i.rectAreaLTC2=pt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=p,i.ambient[1]=f,i.ambient[2]=_;const C=i.hash;(C.directionalLength!==M||C.pointLength!==m||C.spotLength!==u||C.rectAreaLength!==w||C.hemiLength!==g||C.numDirectionalShadows!==S||C.numPointShadows!==I||C.numSpotShadows!==R||C.numSpotMaps!==P||C.numLightProbes!==v)&&(i.directional.length=M,i.spot.length=u,i.rectArea.length=w,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=R+P-F,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=v,C.directionalLength=M,C.pointLength=m,C.spotLength=u,C.rectAreaLength=w,C.hemiLength=g,C.numDirectionalShadows=S,C.numPointShadows=I,C.numSpotShadows=R,C.numSpotMaps=P,C.numLightProbes=v,i.version=Jf++)}function l(h,d){let p=0,f=0,_=0,M=0,m=0;const u=d.matrixWorldInverse;for(let w=0,g=h.length;w<g;w++){const S=h[w];if(S.isDirectionalLight){const I=i.directional[p];I.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),p++}else if(S.isSpotLight){const I=i.spot[_];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(u),I.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(u),_++}else if(S.isRectAreaLight){const I=i.rectArea[M];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(u),o.identity(),a.copy(S.matrixWorld),a.premultiply(u),o.extractRotation(a),I.halfWidth.set(S.width*.5,0,0),I.halfHeight.set(0,S.height*.5,0),I.halfWidth.applyMatrix4(o),I.halfHeight.applyMatrix4(o),M++}else if(S.isPointLight){const I=i.point[f];I.position.setFromMatrixPosition(S.matrixWorld),I.position.applyMatrix4(u),f++}else if(S.isHemisphereLight){const I=i.hemi[m];I.direction.setFromMatrixPosition(S.matrixWorld),I.direction.transformDirection(u),m++}}}return{setup:c,setupView:l,state:i}}function ea(s,t){const e=new $f(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function Qf(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new ea(s,t),e.set(r,[c])):a>=o.length?(c=new ea(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class tp extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ep extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const np=`void main() {
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
}`;function sp(s,t,e){let n=new Tr;const i=new Dt,r=new Dt,a=new le,o=new tp({depthPacking:Bc}),c=new ep,l={},h=e.maxTextureSize,d={[Ln]:Ne,[Ne]:Ln,[be]:be},p=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:np,fragmentShader:ip}),f=p.clone();f.defines.HORIZONTAL_PASS=1;const _=new Oe;_.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new A(_,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ha;let u=this.type;this.render=function(R,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const v=s.getRenderTarget(),E=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),W=s.state;W.setBlending(Rn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const at=u!==fn&&this.type===fn,N=u===fn&&this.type!==fn;for(let B=0,X=R.length;B<X;B++){const Q=R[B],$=Q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);const q=$.getFrameExtents();if(i.multiply(q),r.copy($.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/q.x),i.x=r.x*q.x,$.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/q.y),i.y=r.y*q.y,$.mapSize.y=r.y)),$.map===null||at===!0||N===!0){const K=this.type!==fn?{minFilter:Ue,magFilter:Ue}:{};$.map!==null&&$.map.dispose(),$.map=new Yn(i.x,i.y,K),$.map.texture.name=Q.name+".shadowMap",$.camera.updateProjectionMatrix()}s.setRenderTarget($.map),s.clear();const et=$.getViewportCount();for(let K=0;K<et;K++){const nt=$.getViewport(K);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),W.viewport(a),$.updateMatrices(Q,K),n=$.getFrustum(),S(P,F,$.camera,Q,this.type)}$.isPointLightShadow!==!0&&this.type===fn&&w($,F),$.needsUpdate=!1}u=this.type,m.needsUpdate=!1,s.setRenderTarget(v,E,C)};function w(R,P){const F=t.update(M);p.defines.VSM_SAMPLES!==R.blurSamples&&(p.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Yn(i.x,i.y)),p.uniforms.shadow_pass.value=R.map.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(P,null,F,p,M,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(P,null,F,f,M,null)}function g(R,P,F,v){let E=null;const C=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)E=C;else if(E=F.isPointLight===!0?c:o,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const W=E.uuid,at=P.uuid;let N=l[W];N===void 0&&(N={},l[W]=N);let B=N[at];B===void 0&&(B=E.clone(),N[at]=B,P.addEventListener("dispose",I)),E=B}if(E.visible=P.visible,E.wireframe=P.wireframe,v===fn?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:d[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const W=s.properties.get(E);W.light=F}return E}function S(R,P,F,v,E){if(R.visible===!1)return;if(R.layers.test(P.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===fn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const at=t.update(R),N=R.material;if(Array.isArray(N)){const B=at.groups;for(let X=0,Q=B.length;X<Q;X++){const $=B[X],q=N[$.materialIndex];if(q&&q.visible){const et=g(R,q,v,E);R.onBeforeShadow(s,R,P,F,at,et,$),s.renderBufferDirect(F,null,at,et,R,$),R.onAfterShadow(s,R,P,F,at,et,$)}}}else if(N.visible){const B=g(R,N,v,E);R.onBeforeShadow(s,R,P,F,at,B,null),s.renderBufferDirect(F,null,at,B,R,null),R.onAfterShadow(s,R,P,F,at,B,null)}}const W=R.children;for(let at=0,N=W.length;at<N;at++)S(W[at],P,F,v,E)}function I(R){R.target.removeEventListener("dispose",I);for(const F in l){const v=l[F],E=R.target.uuid;E in v&&(v[E].dispose(),delete v[E])}}}function rp(s,t,e){const n=e.isWebGL2;function i(){let U=!1;const mt=new le;let dt=null;const Ct=new le(0,0,0,0);return{setMask:function(Ut){dt!==Ut&&!U&&(s.colorMask(Ut,Ut,Ut,Ut),dt=Ut)},setLocked:function(Ut){U=Ut},setClear:function(Ut,ee,ne,ue,me){me===!0&&(Ut*=ue,ee*=ue,ne*=ue),mt.set(Ut,ee,ne,ue),Ct.equals(mt)===!1&&(s.clearColor(Ut,ee,ne,ue),Ct.copy(mt))},reset:function(){U=!1,dt=null,Ct.set(-1,0,0,0)}}}function r(){let U=!1,mt=null,dt=null,Ct=null;return{setTest:function(Ut){Ut?Pt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(Ut){mt!==Ut&&!U&&(s.depthMask(Ut),mt=Ut)},setFunc:function(Ut){if(dt!==Ut){switch(Ut){case pc:s.depthFunc(s.NEVER);break;case mc:s.depthFunc(s.ALWAYS);break;case gc:s.depthFunc(s.LESS);break;case ps:s.depthFunc(s.LEQUAL);break;case _c:s.depthFunc(s.EQUAL);break;case Mc:s.depthFunc(s.GEQUAL);break;case vc:s.depthFunc(s.GREATER);break;case xc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=Ut}},setLocked:function(Ut){U=Ut},setClear:function(Ut){Ct!==Ut&&(s.clearDepth(Ut),Ct=Ut)},reset:function(){U=!1,mt=null,dt=null,Ct=null}}}function a(){let U=!1,mt=null,dt=null,Ct=null,Ut=null,ee=null,ne=null,ue=null,me=null;return{setTest:function(ie){U||(ie?Pt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(ie){mt!==ie&&!U&&(s.stencilMask(ie),mt=ie)},setFunc:function(ie,ge,Ae){(dt!==ie||Ct!==ge||Ut!==Ae)&&(s.stencilFunc(ie,ge,Ae),dt=ie,Ct=ge,Ut=Ae)},setOp:function(ie,ge,Ae){(ee!==ie||ne!==ge||ue!==Ae)&&(s.stencilOp(ie,ge,Ae),ee=ie,ne=ge,ue=Ae)},setLocked:function(ie){U=ie},setClear:function(ie){me!==ie&&(s.clearStencil(ie),me=ie)},reset:function(){U=!1,mt=null,dt=null,Ct=null,Ut=null,ee=null,ne=null,ue=null,me=null}}}const o=new i,c=new r,l=new a,h=new WeakMap,d=new WeakMap;let p={},f={},_=new WeakMap,M=[],m=null,u=!1,w=null,g=null,S=null,I=null,R=null,P=null,F=null,v=new jt(0,0,0),E=0,C=!1,W=null,at=null,N=null,B=null,X=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,q=0;const et=s.getParameter(s.VERSION);et.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(et)[1]),$=q>=1):et.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(et)[1]),$=q>=2);let K=null,nt={};const J=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),ut=new le().fromArray(J),Tt=new le().fromArray(tt);function wt(U,mt,dt,Ct){const Ut=new Uint8Array(4),ee=s.createTexture();s.bindTexture(U,ee),s.texParameteri(U,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(U,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ne=0;ne<dt;ne++)n&&(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)?s.texImage3D(mt,0,s.RGBA,1,1,Ct,0,s.RGBA,s.UNSIGNED_BYTE,Ut):s.texImage2D(mt+ne,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ut);return ee}const Bt={};Bt[s.TEXTURE_2D]=wt(s.TEXTURE_2D,s.TEXTURE_2D,1),Bt[s.TEXTURE_CUBE_MAP]=wt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Bt[s.TEXTURE_2D_ARRAY]=wt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Bt[s.TEXTURE_3D]=wt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pt(s.DEPTH_TEST),c.setFunc(ps),Ot(!1),b(Nr),Pt(s.CULL_FACE),St(Rn);function Pt(U){p[U]!==!0&&(s.enable(U),p[U]=!0)}function Rt(U){p[U]!==!1&&(s.disable(U),p[U]=!1)}function vt(U,mt){return f[U]!==mt?(s.bindFramebuffer(U,mt),f[U]=mt,n&&(U===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=mt),U===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=mt)),!0):!1}function H(U,mt){let dt=M,Ct=!1;if(U)if(dt=_.get(mt),dt===void 0&&(dt=[],_.set(mt,dt)),U.isWebGLMultipleRenderTargets){const Ut=U.texture;if(dt.length!==Ut.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let ee=0,ne=Ut.length;ee<ne;ee++)dt[ee]=s.COLOR_ATTACHMENT0+ee;dt.length=Ut.length,Ct=!0}}else dt[0]!==s.COLOR_ATTACHMENT0&&(dt[0]=s.COLOR_ATTACHMENT0,Ct=!0);else dt[0]!==s.BACK&&(dt[0]=s.BACK,Ct=!0);Ct&&(e.isWebGL2?s.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function Wt(U){return m!==U?(s.useProgram(U),m=U,!0):!1}const bt={[Vn]:s.FUNC_ADD,[Qa]:s.FUNC_SUBTRACT,[tc]:s.FUNC_REVERSE_SUBTRACT};if(n)bt[Gr]=s.MIN,bt[kr]=s.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(bt[Gr]=U.MIN_EXT,bt[kr]=U.MAX_EXT)}const Lt={[ec]:s.ZERO,[nc]:s.ONE,[ic]:s.SRC_COLOR,[fr]:s.SRC_ALPHA,[lc]:s.SRC_ALPHA_SATURATE,[ac]:s.DST_COLOR,[rc]:s.DST_ALPHA,[sc]:s.ONE_MINUS_SRC_COLOR,[pr]:s.ONE_MINUS_SRC_ALPHA,[cc]:s.ONE_MINUS_DST_COLOR,[oc]:s.ONE_MINUS_DST_ALPHA,[hc]:s.CONSTANT_COLOR,[uc]:s.ONE_MINUS_CONSTANT_COLOR,[dc]:s.CONSTANT_ALPHA,[fc]:s.ONE_MINUS_CONSTANT_ALPHA};function St(U,mt,dt,Ct,Ut,ee,ne,ue,me,ie){if(U===Rn){u===!0&&(Rt(s.BLEND),u=!1);return}if(u===!1&&(Pt(s.BLEND),u=!0),U!==$a){if(U!==w||ie!==C){if((g!==Vn||R!==Vn)&&(s.blendEquation(s.FUNC_ADD),g=Vn,R=Vn),ie)switch(U){case mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFunc(s.ONE,s.ONE);break;case Fr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Br:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Or:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Fr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Br:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,I=null,P=null,F=null,v.set(0,0,0),E=0,w=U,C=ie}return}Ut=Ut||mt,ee=ee||dt,ne=ne||Ct,(mt!==g||Ut!==R)&&(s.blendEquationSeparate(bt[mt],bt[Ut]),g=mt,R=Ut),(dt!==S||Ct!==I||ee!==P||ne!==F)&&(s.blendFuncSeparate(Lt[dt],Lt[Ct],Lt[ee],Lt[ne]),S=dt,I=Ct,P=ee,F=ne),(ue.equals(v)===!1||me!==E)&&(s.blendColor(ue.r,ue.g,ue.b,me),v.copy(ue),E=me),w=U,C=!1}function Qt(U,mt){U.side===be?Rt(s.CULL_FACE):Pt(s.CULL_FACE);let dt=U.side===Ne;mt&&(dt=!dt),Ot(dt),U.blending===mi&&U.transparent===!1?St(Rn):St(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),c.setFunc(U.depthFunc),c.setTest(U.depthTest),c.setMask(U.depthWrite),o.setMask(U.colorWrite);const Ct=U.stencilWrite;l.setTest(Ct),Ct&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),z(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Pt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(U){W!==U&&(U?s.frontFace(s.CW):s.frontFace(s.CCW),W=U)}function b(U){U!==Ja?(Pt(s.CULL_FACE),U!==at&&(U===Nr?s.cullFace(s.BACK):U===ja?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),at=U}function x(U){U!==N&&($&&s.lineWidth(U),N=U)}function z(U,mt,dt){U?(Pt(s.POLYGON_OFFSET_FILL),(B!==mt||X!==dt)&&(s.polygonOffset(mt,dt),B=mt,X=dt)):Rt(s.POLYGON_OFFSET_FILL)}function V(U){U?Pt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function Y(U){U===void 0&&(U=s.TEXTURE0+Q-1),K!==U&&(s.activeTexture(U),K=U)}function Z(U,mt,dt){dt===void 0&&(K===null?dt=s.TEXTURE0+Q-1:dt=K);let Ct=nt[dt];Ct===void 0&&(Ct={type:void 0,texture:void 0},nt[dt]=Ct),(Ct.type!==U||Ct.texture!==mt)&&(K!==dt&&(s.activeTexture(dt),K=dt),s.bindTexture(U,mt||Bt[U]),Ct.type=U,Ct.texture=mt)}function yt(){const U=nt[K];U!==void 0&&U.type!==void 0&&(s.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ct(){try{s.compressedTexImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Mt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function It(){try{s.texSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(){try{s.texSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function kt(){try{s.texStorage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{s.texImage2D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function lt(){try{s.texImage3D.apply(s,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(U){ut.equals(U)===!1&&(s.scissor(U.x,U.y,U.z,U.w),ut.copy(U))}function zt(U){Tt.equals(U)===!1&&(s.viewport(U.x,U.y,U.z,U.w),Tt.copy(U))}function $t(U,mt){let dt=d.get(mt);dt===void 0&&(dt=new WeakMap,d.set(mt,dt));let Ct=dt.get(U);Ct===void 0&&(Ct=s.getUniformBlockIndex(mt,U.name),dt.set(U,Ct))}function Gt(U,mt){const Ct=d.get(mt).get(U);h.get(mt)!==Ct&&(s.uniformBlockBinding(mt,Ct,U.__bindingPointIndex),h.set(mt,Ct))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),p={},K=null,nt={},f={},_=new WeakMap,M=[],m=null,u=!1,w=null,g=null,S=null,I=null,R=null,P=null,F=null,v=new jt(0,0,0),E=0,C=!1,W=null,at=null,N=null,B=null,X=null,ut.set(0,0,s.canvas.width,s.canvas.height),Tt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),l.reset()}return{buffers:{color:o,depth:c,stencil:l},enable:Pt,disable:Rt,bindFramebuffer:vt,drawBuffers:H,useProgram:Wt,setBlending:St,setMaterial:Qt,setFlipSided:Ot,setCullFace:b,setLineWidth:x,setPolygonOffset:z,setScissorTest:V,activeTexture:Y,bindTexture:Z,unbindTexture:yt,compressedTexImage2D:ct,compressedTexImage3D:Mt,texImage2D:ft,texImage3D:lt,updateUBOMapping:$t,uniformBlockBinding:Gt,texStorage2D:kt,texStorage3D:it,texSubImage2D:It,texSubImage3D:Et,compressedTexSubImage2D:ot,compressedTexSubImage3D:Kt,scissor:gt,viewport:zt,reset:ht}}function op(s,t,e,n,i,r,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let d;const p=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,x){return f?new OffscreenCanvas(b,x):xs("canvas")}function M(b,x,z,V){let Y=1;if((b.width>V||b.height>V)&&(Y=V/Math.max(b.width,b.height)),Y<1||x===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const Z=x?vs:Math.floor,yt=Z(Y*b.width),ct=Z(Y*b.height);d===void 0&&(d=_(yt,ct));const Mt=z?_(yt,ct):d;return Mt.width=yt,Mt.height=ct,Mt.getContext("2d").drawImage(b,0,0,yt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+yt+"x"+ct+")."),Mt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return vr(b.width)&&vr(b.height)}function u(b){return o?!1:b.wrapS!==$e||b.wrapT!==$e||b.minFilter!==Ue&&b.minFilter!==We}function w(b,x){return b.generateMipmaps&&x&&b.minFilter!==Ue&&b.minFilter!==We}function g(b){s.generateMipmap(b)}function S(b,x,z,V,Y=!1){if(o===!1)return x;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Z=x;if(x===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8)),x===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),x===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8)),x===s.RGBA){const yt=Y?ms:se.getTransfer(V);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=yt===ae?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function I(b,x,z){return w(b,z)===!0||b.isFramebufferTexture&&b.minFilter!==Ue&&b.minFilter!==We?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function R(b){return b===Ue||b===zr||b===Is?s.NEAREST:s.LINEAR}function P(b){const x=b.target;x.removeEventListener("dispose",P),v(x),x.isVideoTexture&&h.delete(x)}function F(b){const x=b.target;x.removeEventListener("dispose",F),C(x)}function v(b){const x=n.get(b);if(x.__webglInit===void 0)return;const z=b.source,V=p.get(z);if(V){const Y=V[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(b),Object.keys(V).length===0&&p.delete(z)}n.remove(b)}function E(b){const x=n.get(b);s.deleteTexture(x.__webglTexture);const z=b.source,V=p.get(z);delete V[x.__cacheKey],a.memory.textures--}function C(b){const x=b.texture,z=n.get(b),V=n.get(x);if(V.__webglTexture!==void 0&&(s.deleteTexture(V.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(z.__webglFramebuffer[Y]))for(let Z=0;Z<z.__webglFramebuffer[Y].length;Z++)s.deleteFramebuffer(z.__webglFramebuffer[Y][Z]);else s.deleteFramebuffer(z.__webglFramebuffer[Y]);z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer[Y])}else{if(Array.isArray(z.__webglFramebuffer))for(let Y=0;Y<z.__webglFramebuffer.length;Y++)s.deleteFramebuffer(z.__webglFramebuffer[Y]);else s.deleteFramebuffer(z.__webglFramebuffer);if(z.__webglDepthbuffer&&s.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&s.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let Y=0;Y<z.__webglColorRenderbuffer.length;Y++)z.__webglColorRenderbuffer[Y]&&s.deleteRenderbuffer(z.__webglColorRenderbuffer[Y]);z.__webglDepthRenderbuffer&&s.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Y=0,Z=x.length;Y<Z;Y++){const yt=n.get(x[Y]);yt.__webglTexture&&(s.deleteTexture(yt.__webglTexture),a.memory.textures--),n.remove(x[Y])}n.remove(x),n.remove(b)}let W=0;function at(){W=0}function N(){const b=W;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),W+=1,b}function B(b){const x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function X(b,x){const z=n.get(b);if(b.isVideoTexture&&Qt(b),b.isRenderTargetTexture===!1&&b.version>0&&z.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(z,b,x);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+x)}function Q(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){ut(z,b,x);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+x)}function $(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){ut(z,b,x);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+x)}function q(b,x){const z=n.get(b);if(b.version>0&&z.__version!==b.version){Tt(z,b,x);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+x)}const et={[tn]:s.REPEAT,[$e]:s.CLAMP_TO_EDGE,[_r]:s.MIRRORED_REPEAT},K={[Ue]:s.NEAREST,[zr]:s.NEAREST_MIPMAP_NEAREST,[Is]:s.NEAREST_MIPMAP_LINEAR,[We]:s.LINEAR,[Rc]:s.LINEAR_MIPMAP_NEAREST,[Bi]:s.LINEAR_MIPMAP_LINEAR},nt={[kc]:s.NEVER,[qc]:s.ALWAYS,[zc]:s.LESS,[Ea]:s.LEQUAL,[Vc]:s.EQUAL,[Xc]:s.GEQUAL,[Hc]:s.GREATER,[Wc]:s.NOTEQUAL};function J(b,x,z){if(z?(s.texParameteri(b,s.TEXTURE_WRAP_S,et[x.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,et[x.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,et[x.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,K[x.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,K[x.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(x.wrapS!==$e||x.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,R(x.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,R(x.minFilter)),x.minFilter!==Ue&&x.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,nt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const V=t.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ue||x.minFilter!==Is&&x.minFilter!==Bi||x.type===An&&t.has("OES_texture_float_linear")===!1||o===!1&&x.type===Gi&&t.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(s.texParameterf(b,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function tt(b,x){let z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",P));const V=x.source;let Y=p.get(V);Y===void 0&&(Y={},p.set(V,Y));const Z=B(x);if(Z!==b.__cacheKey){Y[Z]===void 0&&(Y[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Y[Z].usedTimes++;const yt=Y[b.__cacheKey];yt!==void 0&&(Y[b.__cacheKey].usedTimes--,yt.usedTimes===0&&E(x)),b.__cacheKey=Z,b.__webglTexture=Y[Z].texture}return z}function ut(b,x,z){let V=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=s.TEXTURE_3D);const Y=tt(b,x),Z=x.source;e.bindTexture(V,b.__webglTexture,s.TEXTURE0+z);const yt=n.get(Z);if(Z.version!==yt.__version||Y===!0){e.activeTexture(s.TEXTURE0+z);const ct=se.getPrimaries(se.workingColorSpace),Mt=x.colorSpace===Xe?null:se.getPrimaries(x.colorSpace),It=x.colorSpace===Xe||ct===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Et=u(x)&&m(x.image)===!1;let ot=M(x.image,Et,!1,i.maxTextureSize);ot=Ot(x,ot);const Kt=m(ot)||o,kt=r.convert(x.format,x.colorSpace);let it=r.convert(x.type),ft=S(x.internalFormat,kt,it,x.colorSpace,x.isVideoTexture);J(V,x,Kt);let lt;const gt=x.mipmaps,zt=o&&x.isVideoTexture!==!0&&ft!==Sa,$t=yt.__version===void 0||Y===!0,Gt=I(x,ot,Kt);if(x.isDepthTexture)ft=s.DEPTH_COMPONENT,o?x.type===An?ft=s.DEPTH_COMPONENT32F:x.type===bn?ft=s.DEPTH_COMPONENT24:x.type===Wn?ft=s.DEPTH24_STENCIL8:ft=s.DEPTH_COMPONENT16:x.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Xn&&ft===s.DEPTH_COMPONENT&&x.type!==yr&&x.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=bn,it=r.convert(x.type)),x.format===vi&&ft===s.DEPTH_COMPONENT&&(ft=s.DEPTH_STENCIL,x.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Wn,it=r.convert(x.type))),$t&&(zt?e.texStorage2D(s.TEXTURE_2D,1,ft,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,ft,ot.width,ot.height,0,kt,it,null));else if(x.isDataTexture)if(gt.length>0&&Kt){zt&&$t&&e.texStorage2D(s.TEXTURE_2D,Gt,ft,gt[0].width,gt[0].height);for(let ht=0,U=gt.length;ht<U;ht++)lt=gt[ht],zt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,lt.width,lt.height,kt,it,lt.data):e.texImage2D(s.TEXTURE_2D,ht,ft,lt.width,lt.height,0,kt,it,lt.data);x.generateMipmaps=!1}else zt?($t&&e.texStorage2D(s.TEXTURE_2D,Gt,ft,ot.width,ot.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,kt,it,ot.data)):e.texImage2D(s.TEXTURE_2D,0,ft,ot.width,ot.height,0,kt,it,ot.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){zt&&$t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,ft,gt[0].width,gt[0].height,ot.depth);for(let ht=0,U=gt.length;ht<U;ht++)lt=gt[ht],x.format!==Qe?kt!==null?zt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,lt.width,lt.height,ot.depth,kt,lt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ht,ft,lt.width,lt.height,ot.depth,0,lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,ht,0,0,0,lt.width,lt.height,ot.depth,kt,it,lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ht,ft,lt.width,lt.height,ot.depth,0,kt,it,lt.data)}else{zt&&$t&&e.texStorage2D(s.TEXTURE_2D,Gt,ft,gt[0].width,gt[0].height);for(let ht=0,U=gt.length;ht<U;ht++)lt=gt[ht],x.format!==Qe?kt!==null?zt?e.compressedTexSubImage2D(s.TEXTURE_2D,ht,0,0,lt.width,lt.height,kt,lt.data):e.compressedTexImage2D(s.TEXTURE_2D,ht,ft,lt.width,lt.height,0,lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,lt.width,lt.height,kt,it,lt.data):e.texImage2D(s.TEXTURE_2D,ht,ft,lt.width,lt.height,0,kt,it,lt.data)}else if(x.isDataArrayTexture)zt?($t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,ft,ot.width,ot.height,ot.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,kt,it,ot.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,ft,ot.width,ot.height,ot.depth,0,kt,it,ot.data);else if(x.isData3DTexture)zt?($t&&e.texStorage3D(s.TEXTURE_3D,Gt,ft,ot.width,ot.height,ot.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,kt,it,ot.data)):e.texImage3D(s.TEXTURE_3D,0,ft,ot.width,ot.height,ot.depth,0,kt,it,ot.data);else if(x.isFramebufferTexture){if($t)if(zt)e.texStorage2D(s.TEXTURE_2D,Gt,ft,ot.width,ot.height);else{let ht=ot.width,U=ot.height;for(let mt=0;mt<Gt;mt++)e.texImage2D(s.TEXTURE_2D,mt,ft,ht,U,0,kt,it,null),ht>>=1,U>>=1}}else if(gt.length>0&&Kt){zt&&$t&&e.texStorage2D(s.TEXTURE_2D,Gt,ft,gt[0].width,gt[0].height);for(let ht=0,U=gt.length;ht<U;ht++)lt=gt[ht],zt?e.texSubImage2D(s.TEXTURE_2D,ht,0,0,kt,it,lt):e.texImage2D(s.TEXTURE_2D,ht,ft,kt,it,lt);x.generateMipmaps=!1}else zt?($t&&e.texStorage2D(s.TEXTURE_2D,Gt,ft,ot.width,ot.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,kt,it,ot)):e.texImage2D(s.TEXTURE_2D,0,ft,kt,it,ot);w(x,Kt)&&g(V),yt.__version=Z.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function Tt(b,x,z){if(x.image.length!==6)return;const V=tt(b,x),Y=x.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+z);const Z=n.get(Y);if(Y.version!==Z.__version||V===!0){e.activeTexture(s.TEXTURE0+z);const yt=se.getPrimaries(se.workingColorSpace),ct=x.colorSpace===Xe?null:se.getPrimaries(x.colorSpace),Mt=x.colorSpace===Xe||yt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);const It=x.isCompressedTexture||x.image[0].isCompressedTexture,Et=x.image[0]&&x.image[0].isDataTexture,ot=[];for(let ht=0;ht<6;ht++)!It&&!Et?ot[ht]=M(x.image[ht],!1,!0,i.maxCubemapSize):ot[ht]=Et?x.image[ht].image:x.image[ht],ot[ht]=Ot(x,ot[ht]);const Kt=ot[0],kt=m(Kt)||o,it=r.convert(x.format,x.colorSpace),ft=r.convert(x.type),lt=S(x.internalFormat,it,ft,x.colorSpace),gt=o&&x.isVideoTexture!==!0,zt=Z.__version===void 0||V===!0;let $t=I(x,Kt,kt);J(s.TEXTURE_CUBE_MAP,x,kt);let Gt;if(It){gt&&zt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,$t,lt,Kt.width,Kt.height);for(let ht=0;ht<6;ht++){Gt=ot[ht].mipmaps;for(let U=0;U<Gt.length;U++){const mt=Gt[U];x.format!==Qe?it!==null?gt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,0,0,mt.width,mt.height,it,mt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,lt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,0,0,mt.width,mt.height,it,ft,mt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U,lt,mt.width,mt.height,0,it,ft,mt.data)}}}else{Gt=x.mipmaps,gt&&zt&&(Gt.length>0&&$t++,e.texStorage2D(s.TEXTURE_CUBE_MAP,$t,lt,ot[0].width,ot[0].height));for(let ht=0;ht<6;ht++)if(Et){gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,ot[ht].width,ot[ht].height,it,ft,ot[ht].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,lt,ot[ht].width,ot[ht].height,0,it,ft,ot[ht].data);for(let U=0;U<Gt.length;U++){const dt=Gt[U].image[ht].image;gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,0,0,dt.width,dt.height,it,ft,dt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,lt,dt.width,dt.height,0,it,ft,dt.data)}}else{gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,it,ft,ot[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,lt,it,ft,ot[ht]);for(let U=0;U<Gt.length;U++){const mt=Gt[U];gt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,0,0,it,ft,mt.image[ht]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,U+1,lt,it,ft,mt.image[ht])}}}w(x,kt)&&g(s.TEXTURE_CUBE_MAP),Z.__version=Y.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function wt(b,x,z,V,Y,Z){const yt=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),Mt=S(z.internalFormat,yt,ct,z.colorSpace);if(!n.get(x).__hasExternalTextures){const Et=Math.max(1,x.width>>Z),ot=Math.max(1,x.height>>Z);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,Z,Mt,Et,ot,x.depth,0,yt,ct,null):e.texImage2D(Y,Z,Mt,Et,ot,0,yt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),St(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Y,n.get(z).__webglTexture,0,Lt(x)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Y,n.get(z).__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Bt(b,x,z){if(s.bindRenderbuffer(s.RENDERBUFFER,b),x.depthBuffer&&!x.stencilBuffer){let V=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(z||St(x)){const Y=x.depthTexture;Y&&Y.isDepthTexture&&(Y.type===An?V=s.DEPTH_COMPONENT32F:Y.type===bn&&(V=s.DEPTH_COMPONENT24));const Z=Lt(x);St(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,V,x.width,x.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,V,x.width,x.height)}else s.renderbufferStorage(s.RENDERBUFFER,V,x.width,x.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(x.depthBuffer&&x.stencilBuffer){const V=Lt(x);z&&St(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,V,s.DEPTH24_STENCIL8,x.width,x.height):St(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V,s.DEPTH24_STENCIL8,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const V=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Y=0;Y<V.length;Y++){const Z=V[Y],yt=r.convert(Z.format,Z.colorSpace),ct=r.convert(Z.type),Mt=S(Z.internalFormat,yt,ct,Z.colorSpace),It=Lt(x);z&&St(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,It,Mt,x.width,x.height):St(x)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It,Mt,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,Mt,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(b,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const V=n.get(x.depthTexture).__webglTexture,Y=Lt(x);if(x.depthTexture.format===Xn)St(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,V,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,V,0);else if(x.depthTexture.format===vi)St(x)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,V,0,Y):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,V,0);else throw new Error("Unknown depthTexture format")}function Rt(b){const x=n.get(b),z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!x.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Pt(x.__webglFramebuffer,b)}else if(z){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]=s.createRenderbuffer(),Bt(x.__webglDepthbuffer[V],b,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=s.createRenderbuffer(),Bt(x.__webglDepthbuffer,b,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(b,x,z){const V=n.get(b);x!==void 0&&wt(V.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Rt(b)}function H(b){const x=b.texture,z=n.get(b),V=n.get(x);b.addEventListener("dispose",F),b.isWebGLMultipleRenderTargets!==!0&&(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=x.version,a.memory.textures++);const Y=b.isWebGLCubeRenderTarget===!0,Z=b.isWebGLMultipleRenderTargets===!0,yt=m(b)||o;if(Y){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(o&&x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let Mt=0;Mt<x.mipmaps.length;Mt++)z.__webglFramebuffer[ct][Mt]=s.createFramebuffer()}else z.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)z.__webglFramebuffer[ct]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Z)if(i.drawBuffers){const ct=b.texture;for(let Mt=0,It=ct.length;Mt<It;Mt++){const Et=n.get(ct[Mt]);Et.__webglTexture===void 0&&(Et.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&St(b)===!1){const ct=Z?x:[x];z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ct.length;Mt++){const It=ct[Mt];z.__webglColorRenderbuffer[Mt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[Mt]);const Et=r.convert(It.format,It.colorSpace),ot=r.convert(It.type),Kt=S(It.internalFormat,Et,ot,It.colorSpace,b.isXRRenderTarget===!0),kt=Lt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,kt,Kt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Mt,s.RENDERBUFFER,z.__webglColorRenderbuffer[Mt])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Bt(z.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Y){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),J(s.TEXTURE_CUBE_MAP,x,yt);for(let ct=0;ct<6;ct++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)wt(z.__webglFramebuffer[ct][Mt],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Mt);else wt(z.__webglFramebuffer[ct],b,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);w(x,yt)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){const ct=b.texture;for(let Mt=0,It=ct.length;Mt<It;Mt++){const Et=ct[Mt],ot=n.get(Et);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),J(s.TEXTURE_2D,Et,yt),wt(z.__webglFramebuffer,b,Et,s.COLOR_ATTACHMENT0+Mt,s.TEXTURE_2D,0),w(Et,yt)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ct=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,V.__webglTexture),J(ct,x,yt),o&&x.mipmaps&&x.mipmaps.length>0)for(let Mt=0;Mt<x.mipmaps.length;Mt++)wt(z.__webglFramebuffer[Mt],b,x,s.COLOR_ATTACHMENT0,ct,Mt);else wt(z.__webglFramebuffer,b,x,s.COLOR_ATTACHMENT0,ct,0);w(x,yt)&&g(ct),e.unbindTexture()}b.depthBuffer&&Rt(b)}function Wt(b){const x=m(b)||o,z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let V=0,Y=z.length;V<Y;V++){const Z=z[V];if(w(Z,x)){const yt=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ct=n.get(Z).__webglTexture;e.bindTexture(yt,ct),g(yt),e.unbindTexture()}}}function bt(b){if(o&&b.samples>0&&St(b)===!1){const x=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],z=b.width,V=b.height;let Y=s.COLOR_BUFFER_BIT;const Z=[],yt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=n.get(b),Mt=b.isWebGLMultipleRenderTargets===!0;if(Mt)for(let It=0;It<x.length;It++)e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let It=0;It<x.length;It++){Z.push(s.COLOR_ATTACHMENT0+It),b.depthBuffer&&Z.push(yt);const Et=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Et===!1&&(b.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),Mt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ct.__webglColorRenderbuffer[It]),Et===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[yt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[yt])),Mt){const ot=n.get(x[It]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ot,0)}s.blitFramebuffer(0,0,z,V,0,0,z,V,Y,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Z)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Mt)for(let It=0;It<x.length;It++){e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,ct.__webglColorRenderbuffer[It]);const Et=n.get(x[It]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,Et,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Lt(b){return Math.min(i.maxSamples,b.samples)}function St(b){const x=n.get(b);return o&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Qt(b){const x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Ot(b,x){const z=b.colorSpace,V=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Mr||z!==mn&&z!==Xe&&(se.getTransfer(z)===ae?o===!1?t.has("EXT_sRGB")===!0&&V===Qe?(b.format=Mr,b.minFilter=We,b.generateMipmaps=!1):x=ba.sRGBToLinear(x):(V!==Qe||Y!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),x}this.allocateTextureUnit=N,this.resetTextureUnits=at,this.setTexture2D=X,this.setTexture2DArray=Q,this.setTexture3D=$,this.setTextureCube=q,this.rebindTextures=vt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=St}function ap(s,t,e){const n=e.isWebGL2;function i(r,a=Xe){let o;const c=se.getTransfer(a);if(r===Pn)return s.UNSIGNED_BYTE;if(r===ga)return s.UNSIGNED_SHORT_4_4_4_4;if(r===_a)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Cc)return s.BYTE;if(r===Pc)return s.SHORT;if(r===yr)return s.UNSIGNED_SHORT;if(r===ma)return s.INT;if(r===bn)return s.UNSIGNED_INT;if(r===An)return s.FLOAT;if(r===Gi)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Lc)return s.ALPHA;if(r===Qe)return s.RGBA;if(r===Ic)return s.LUMINANCE;if(r===Dc)return s.LUMINANCE_ALPHA;if(r===Xn)return s.DEPTH_COMPONENT;if(r===vi)return s.DEPTH_STENCIL;if(r===Mr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Uc)return s.RED;if(r===Ma)return s.RED_INTEGER;if(r===Nc)return s.RG;if(r===va)return s.RG_INTEGER;if(r===xa)return s.RGBA_INTEGER;if(r===Ds||r===Us||r===Ns||r===Os)if(c===ae)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Ds)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Us)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Os)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Ds)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Us)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ns)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Os)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vr||r===Hr||r===Wr||r===Xr)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Vr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xr)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sa)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===qr||r===Yr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===qr)return c===ae?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Yr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Kr||r===Zr||r===Jr||r===jr||r===$r||r===Qr||r===to||r===eo||r===no||r===io||r===so||r===ro||r===oo||r===ao)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Kr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===$r)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qr)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===to)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===eo)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===no)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===io)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===so)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ro)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oo)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ao)return c===ae?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fs||r===co||r===lo)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Fs)return c===ae?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===co)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===lo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Oc||r===ho||r===uo||r===fo)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Fs)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ho)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Wn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class cp extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class At extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lp={type:"move"};class or{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),u=this._getHandJoint(l,M);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],p=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&p>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&p<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new At;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class hp extends yi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,p=null,f=null,_=null;const M=e.getContextAttributes();let m=null,u=null;const w=[],g=[],S=new Dt;let I=null;const R=new Fe;R.layers.enable(1),R.viewport=new le;const P=new Fe;P.layers.enable(2),P.viewport=new le;const F=[R,P],v=new cp;v.layers.enable(1),v.layers.enable(2);let E=null,C=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let tt=w[J];return tt===void 0&&(tt=new or,w[J]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(J){let tt=w[J];return tt===void 0&&(tt=new or,w[J]=tt),tt.getGripSpace()},this.getHand=function(J){let tt=w[J];return tt===void 0&&(tt=new or,w[J]=tt),tt.getHandSpace()};function W(J){const tt=g.indexOf(J.inputSource);if(tt===-1)return;const ut=w[tt];ut!==void 0&&(ut.update(J.inputSource,J.frame,l||a),ut.dispatchEvent({type:J.type,data:J.inputSource}))}function at(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",at),i.removeEventListener("inputsourceschange",N);for(let J=0;J<w.length;J++){const tt=g[J];tt!==null&&(g[J]=null,w[J].disconnect(tt))}E=null,C=null,t.setRenderTarget(m),f=null,p=null,d=null,i=null,u=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",at),i.addEventListener("inputsourceschange",N),M.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const tt={antialias:i.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),u=new Yn(f.framebufferWidth,f.framebufferHeight,{format:Qe,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let tt=null,ut=null,Tt=null;M.depth&&(Tt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=M.stencil?vi:Xn,ut=M.stencil?Wn:bn);const wt={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};d=new XRWebGLBinding(i,e),p=d.createProjectionLayer(wt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),u=new Yn(p.textureWidth,p.textureHeight,{format:Qe,type:Pn,depthTexture:new Ga(p.textureWidth,p.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0});const Bt=t.properties.get(u);Bt.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(J){for(let tt=0;tt<J.removed.length;tt++){const ut=J.removed[tt],Tt=g.indexOf(ut);Tt>=0&&(g[Tt]=null,w[Tt].disconnect(ut))}for(let tt=0;tt<J.added.length;tt++){const ut=J.added[tt];let Tt=g.indexOf(ut);if(Tt===-1){for(let Bt=0;Bt<w.length;Bt++)if(Bt>=g.length){g.push(ut),Tt=Bt;break}else if(g[Bt]===null){g[Bt]=ut,Tt=Bt;break}if(Tt===-1)break}const wt=w[Tt];wt&&wt.connect(ut)}}const B=new D,X=new D;function Q(J,tt,ut){B.setFromMatrixPosition(tt.matrixWorld),X.setFromMatrixPosition(ut.matrixWorld);const Tt=B.distanceTo(X),wt=tt.projectionMatrix.elements,Bt=ut.projectionMatrix.elements,Pt=wt[14]/(wt[10]-1),Rt=wt[14]/(wt[10]+1),vt=(wt[9]+1)/wt[5],H=(wt[9]-1)/wt[5],Wt=(wt[8]-1)/wt[0],bt=(Bt[8]+1)/Bt[0],Lt=Pt*Wt,St=Pt*bt,Qt=Tt/(-Wt+bt),Ot=Qt*-Wt;tt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ot),J.translateZ(Qt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const b=Pt+Qt,x=Rt+Qt,z=Lt-Ot,V=St+(Tt-Ot),Y=vt*Rt/x*b,Z=H*Rt/x*b;J.projectionMatrix.makePerspective(z,V,Y,Z,b,x),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function $(J,tt){tt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(tt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;v.near=P.near=R.near=J.near,v.far=P.far=R.far=J.far,(E!==v.near||C!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,C=v.far);const tt=J.parent,ut=v.cameras;$(v,tt);for(let Tt=0;Tt<ut.length;Tt++)$(ut[Tt],tt);ut.length===2?Q(v,R,P):v.projectionMatrix.copy(R.projectionMatrix),q(J,v,tt)};function q(J,tt,ut){ut===null?J.matrix.copy(tt.matrixWorld):(J.matrix.copy(ut.matrixWorld),J.matrix.invert(),J.matrix.multiply(tt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(tt.projectionMatrix),J.projectionMatrixInverse.copy(tt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=xi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&f===null))return c},this.setFoveation=function(J){c=J,p!==null&&(p.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)};let et=null;function K(J,tt){if(h=tt.getViewerPose(l||a),_=tt,h!==null){const ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(u,f.framebuffer),t.setRenderTarget(u));let Tt=!1;ut.length!==v.cameras.length&&(v.cameras.length=0,Tt=!0);for(let wt=0;wt<ut.length;wt++){const Bt=ut[wt];let Pt=null;if(f!==null)Pt=f.getViewport(Bt);else{const vt=d.getViewSubImage(p,Bt);Pt=vt.viewport,wt===0&&(t.setRenderTargetTextures(u,vt.colorTexture,p.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(u))}let Rt=F[wt];Rt===void 0&&(Rt=new Fe,Rt.layers.enable(wt),Rt.viewport=new le,F[wt]=Rt),Rt.matrix.fromArray(Bt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Bt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),wt===0&&(v.matrix.copy(Rt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Tt===!0&&v.cameras.push(Rt)}}for(let ut=0;ut<w.length;ut++){const Tt=g[ut],wt=w[ut];Tt!==null&&wt!==void 0&&wt.update(Tt,tt,l||a)}et&&et(J,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}const nt=new Fa;nt.setAnimationLoop(K),this.setAnimationLoop=function(J){et=J},this.dispose=function(){}}}function up(s,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Ua(s)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function i(m,u,w,g,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),_(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),M(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,w,g):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ne&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ne&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=t.get(u).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const g=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*g,e(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,w,g){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=g*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),t.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ne&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function M(m,u){const w=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dp(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,g){const S=g.program;n.uniformBlockBinding(w,S)}function l(w,g){let S=i[w.id];S===void 0&&(_(w),S=h(w),i[w.id]=S,w.addEventListener("dispose",m));const I=g.program;n.updateUBOMapping(w,I);const R=t.render.frame;r[w.id]!==R&&(p(w),r[w.id]=R)}function h(w){const g=d();w.__bindingPointIndex=g;const S=s.createBuffer(),I=w.__size,R=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,I,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,S),S}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const g=i[w.id],S=w.uniforms,I=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let R=0,P=S.length;R<P;R++){const F=Array.isArray(S[R])?S[R]:[S[R]];for(let v=0,E=F.length;v<E;v++){const C=F[v];if(f(C,R,v,I)===!0){const W=C.__offset,at=Array.isArray(C.value)?C.value:[C.value];let N=0;for(let B=0;B<at.length;B++){const X=at[B],Q=M(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,W+N,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,N),N+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,W,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,g,S,I){const R=w.value,P=g+"_"+S;if(I[P]===void 0)return typeof R=="number"||typeof R=="boolean"?I[P]=R:I[P]=R.clone(),!0;{const F=I[P];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return I[P]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function _(w){const g=w.uniforms;let S=0;const I=16;for(let P=0,F=g.length;P<F;P++){const v=Array.isArray(g[P])?g[P]:[g[P]];for(let E=0,C=v.length;E<C;E++){const W=v[E],at=Array.isArray(W.value)?W.value:[W.value];for(let N=0,B=at.length;N<B;N++){const X=at[N],Q=M(X),$=S%I;$!==0&&I-$<Q.boundary&&(S+=I-$),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=Q.storage}}}const R=S%I;return R>0&&(S+=I-R),w.__size=S,w.__cache={},this}function M(w){const g={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(g.boundary=4,g.storage=4):w.isVector2?(g.boundary=8,g.storage=8):w.isVector3||w.isColor?(g.boundary=16,g.storage=12):w.isVector4?(g.boundary=16,g.storage=16):w.isMatrix3?(g.boundary=48,g.storage=48):w.isMatrix4?(g.boundary=64,g.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),g}function m(w){const g=w.target;g.removeEventListener("dispose",m);const S=a.indexOf(g.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function u(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:c,update:l,dispose:u}}class Xa{constructor(t={}){const{canvas:e=al(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const f=new Uint32Array(4),_=new Int32Array(4);let M=null,m=null;const u=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Te,this._useLegacyLights=!1,this.toneMapping=Cn,this.toneMappingExposure=1;const g=this;let S=!1,I=0,R=0,P=null,F=-1,v=null;const E=new le,C=new le;let W=null;const at=new jt(0);let N=0,B=e.width,X=e.height,Q=1,$=null,q=null;const et=new le(0,0,B,X),K=new le(0,0,B,X);let nt=!1;const J=new Tr;let tt=!1,ut=!1,Tt=null;const wt=new pe,Bt=new Dt,Pt=new D,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function vt(){return P===null?Q:1}let H=n;function Wt(T,O){for(let G=0;G<T.length;G++){const y=T[G],L=e.getContext(y,O);if(L!==null)return L}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Sr}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",mt,!1),H===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),H=Wt(O,T),H===null)throw Wt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let bt,Lt,St,Qt,Ot,b,x,z,V,Y,Z,yt,ct,Mt,It,Et,ot,Kt,kt,it,ft,lt,gt,zt;function $t(){bt=new Sd(H),Lt=new md(H,bt,t),bt.init(Lt),lt=new ap(H,bt,Lt),St=new rp(H,bt,Lt),Qt=new Ed(H),Ot=new Xf,b=new op(H,bt,St,Ot,Lt,lt,Qt),x=new _d(g),z=new xd(g),V=new Il(H,Lt),gt=new fd(H,bt,V,Lt),Y=new yd(H,V,Qt,gt),Z=new Rd(H,Y,V,Qt),kt=new Ad(H,Lt,b),Et=new gd(Ot),yt=new Wf(g,x,z,bt,Lt,gt,Et),ct=new up(g,Ot),Mt=new Yf,It=new Qf(bt,Lt),Kt=new dd(g,x,z,St,Z,p,c),ot=new sp(g,Z,Lt),zt=new dp(H,Qt,Lt,St),it=new pd(H,bt,Qt,Lt),ft=new wd(H,bt,Qt,Lt),Qt.programs=yt.programs,g.capabilities=Lt,g.extensions=bt,g.properties=Ot,g.renderLists=Mt,g.shadowMap=ot,g.state=St,g.info=Qt}$t();const Gt=new hp(g,H);this.xr=Gt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=bt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=bt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(B,X,!1))},this.getSize=function(T){return T.set(B,X)},this.setSize=function(T,O,G=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,X=O,e.width=Math.floor(T*Q),e.height=Math.floor(O*Q),G===!0&&(e.style.width=T+"px",e.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(B*Q,X*Q).floor()},this.setDrawingBufferSize=function(T,O,G){B=T,X=O,Q=G,e.width=Math.floor(T*G),e.height=Math.floor(O*G),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(et)},this.setViewport=function(T,O,G,y){T.isVector4?et.set(T.x,T.y,T.z,T.w):et.set(T,O,G,y),St.viewport(E.copy(et).multiplyScalar(Q).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,O,G,y){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,O,G,y),St.scissor(C.copy(K).multiplyScalar(Q).floor())},this.getScissorTest=function(){return nt},this.setScissorTest=function(T){St.setScissorTest(nt=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(T=!0,O=!0,G=!0){let y=0;if(T){let L=!1;if(P!==null){const k=P.texture.format;L=k===xa||k===va||k===Ma}if(L){const k=P.texture.type,st=k===Pn||k===bn||k===yr||k===Wn||k===ga||k===_a,_t=Kt.getClearColor(),Nt=Kt.getClearAlpha(),Vt=_t.r,Ht=_t.g,Xt=_t.b;st?(f[0]=Vt,f[1]=Ht,f[2]=Xt,f[3]=Nt,H.clearBufferuiv(H.COLOR,0,f)):(_[0]=Vt,_[1]=Ht,_[2]=Xt,_[3]=Nt,H.clearBufferiv(H.COLOR,0,_))}else y|=H.COLOR_BUFFER_BIT}O&&(y|=H.DEPTH_BUFFER_BIT),G&&(y|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Mt.dispose(),It.dispose(),Ot.dispose(),x.dispose(),z.dispose(),Z.dispose(),gt.dispose(),zt.dispose(),yt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",me),Gt.removeEventListener("sessionend",ie),Tt&&(Tt.dispose(),Tt=null),ge.stop()};function ht(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Qt.autoReset,O=ot.enabled,G=ot.autoUpdate,y=ot.needsUpdate,L=ot.type;$t(),Qt.autoReset=T,ot.enabled=O,ot.autoUpdate=G,ot.needsUpdate=y,ot.type=L}function mt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function dt(T){const O=T.target;O.removeEventListener("dispose",dt),Ct(O)}function Ct(T){Ut(T),Ot.remove(T)}function Ut(T){const O=Ot.get(T).programs;O!==void 0&&(O.forEach(function(G){yt.releaseProgram(G)}),T.isShaderMaterial&&yt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,G,y,L,k){O===null&&(O=Rt);const st=L.isMesh&&L.matrixWorld.determinant()<0,_t=Zn(T,O,G,y,L);St.setMaterial(y,st);let Nt=G.index,Vt=1;if(y.wireframe===!0){if(Nt=Y.getWireframeAttribute(G),Nt===void 0)return;Vt=2}const Ht=G.drawRange,Xt=G.attributes.position;let _e=Ht.start*Vt,Ge=(Ht.start+Ht.count)*Vt;k!==null&&(_e=Math.max(_e,k.start*Vt),Ge=Math.min(Ge,(k.start+k.count)*Vt)),Nt!==null?(_e=Math.max(_e,0),Ge=Math.min(Ge,Nt.count)):Xt!=null&&(_e=Math.max(_e,0),Ge=Math.min(Ge,Xt.count));const ye=Ge-_e;if(ye<0||ye===1/0)return;gt.setup(L,y,_t,G,Nt);let an,he=it;if(Nt!==null&&(an=V.get(Nt),he=ft,he.setIndex(an)),L.isMesh)y.wireframe===!0?(St.setLineWidth(y.wireframeLinewidth*vt()),he.setMode(H.LINES)):he.setMode(H.TRIANGLES);else if(L.isLine){let Zt=y.linewidth;Zt===void 0&&(Zt=1),St.setLineWidth(Zt*vt()),L.isLineSegments?he.setMode(H.LINES):L.isLineLoop?he.setMode(H.LINE_LOOP):he.setMode(H.LINE_STRIP)}else L.isPoints?he.setMode(H.POINTS):L.isSprite&&he.setMode(H.TRIANGLES);if(L.isBatchedMesh)he.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else if(L.isInstancedMesh)he.renderInstances(_e,ye,L.count);else if(G.isInstancedBufferGeometry){const Zt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Rs=Math.min(G.instanceCount,Zt);he.renderInstances(_e,ye,Rs)}else he.render(_e,ye)};function ee(T,O,G){T.transparent===!0&&T.side===be&&T.forceSinglePass===!1?(T.side=Ne,T.needsUpdate=!0,en(T,O,G),T.side=Ln,T.needsUpdate=!0,en(T,O,G),T.side=be):en(T,O,G)}this.compile=function(T,O,G=null){G===null&&(G=T),m=It.get(G),m.init(),w.push(m),G.traverseVisible(function(L){L.isLight&&L.layers.test(O.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),T!==G&&T.traverseVisible(function(L){L.isLight&&L.layers.test(O.layers)&&(m.pushLight(L),L.castShadow&&m.pushShadow(L))}),m.setupLights(g._useLegacyLights);const y=new Set;return T.traverse(function(L){const k=L.material;if(k)if(Array.isArray(k))for(let st=0;st<k.length;st++){const _t=k[st];ee(_t,G,L),y.add(_t)}else ee(k,G,L),y.add(k)}),w.pop(),m=null,y},this.compileAsync=function(T,O,G=null){const y=this.compile(T,O,G);return new Promise(L=>{function k(){if(y.forEach(function(st){Ot.get(st).currentProgram.isReady()&&y.delete(st)}),y.size===0){L(T);return}setTimeout(k,10)}bt.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let ne=null;function ue(T){ne&&ne(T)}function me(){ge.stop()}function ie(){ge.start()}const ge=new Fa;ge.setAnimationLoop(ue),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(T){ne=T,Gt.setAnimationLoop(T),T===null?ge.stop():ge.start()},Gt.addEventListener("sessionstart",me),Gt.addEventListener("sessionend",ie),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(O),O=Gt.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,O,P),m=It.get(T,w.length),m.init(),w.push(m),wt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),J.setFromProjectionMatrix(wt),ut=this.localClippingEnabled,tt=Et.init(this.clippingPlanes,ut),M=Mt.get(T,u.length),M.init(),u.push(M),Ae(T,O,0,g.sortObjects),M.finish(),g.sortObjects===!0&&M.sort($,q),this.info.render.frame++,tt===!0&&Et.beginShadows();const G=m.state.shadowsArray;if(ot.render(G,T,O),tt===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(M,T),m.setupLights(g._useLegacyLights),O.isArrayCamera){const y=O.cameras;for(let L=0,k=y.length;L<k;L++){const st=y[L];Mn(M,T,st,st.viewport)}}else Mn(M,T,O);P!==null&&(b.updateMultisampleRenderTarget(P),b.updateRenderTargetMipmap(P)),T.isScene===!0&&T.onAfterRender(g,T,O),gt.resetDefaultState(),F=-1,v=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function Ae(T,O,G,y){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||J.intersectsSprite(T)){y&&Pt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(wt);const st=Z.update(T),_t=T.material;_t.visible&&M.push(T,st,_t,G,Pt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||J.intersectsObject(T))){const st=Z.update(T),_t=T.material;if(y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Pt.copy(T.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Pt.copy(st.boundingSphere.center)),Pt.applyMatrix4(T.matrixWorld).applyMatrix4(wt)),Array.isArray(_t)){const Nt=st.groups;for(let Vt=0,Ht=Nt.length;Vt<Ht;Vt++){const Xt=Nt[Vt],_e=_t[Xt.materialIndex];_e&&_e.visible&&M.push(T,st,_e,G,Pt.z,Xt)}}else _t.visible&&M.push(T,st,_t,G,Pt.z,null)}}const k=T.children;for(let st=0,_t=k.length;st<_t;st++)Ae(k[st],O,G,y)}function Mn(T,O,G,y){const L=T.opaque,k=T.transmissive,st=T.transparent;m.setupLightsView(G),tt===!0&&Et.setGlobalState(g.clippingPlanes,G),k.length>0&&qe(L,k,O,G),y&&St.viewport(E.copy(y)),L.length>0&&on(L,O,G),k.length>0&&on(k,O,G),st.length>0&&on(st,O,G),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function qe(T,O,G,y){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const k=Lt.isWebGL2;Tt===null&&(Tt=new Yn(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?Gi:Pn,minFilter:Bi,samples:k?4:0})),g.getDrawingBufferSize(Bt),k?Tt.setSize(Bt.x,Bt.y):Tt.setSize(vs(Bt.x),vs(Bt.y));const st=g.getRenderTarget();g.setRenderTarget(Tt),g.getClearColor(at),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const _t=g.toneMapping;g.toneMapping=Cn,on(T,G,y),b.updateMultisampleRenderTarget(Tt),b.updateRenderTargetMipmap(Tt);let Nt=!1;for(let Vt=0,Ht=O.length;Vt<Ht;Vt++){const Xt=O[Vt],_e=Xt.object,Ge=Xt.geometry,ye=Xt.material,an=Xt.group;if(ye.side===be&&_e.layers.test(y.layers)){const he=ye.side;ye.side=Ne,ye.needsUpdate=!0,vn(_e,G,y,Ge,ye,an),ye.side=he,ye.needsUpdate=!0,Nt=!0}}Nt===!0&&(b.updateMultisampleRenderTarget(Tt),b.updateRenderTargetMipmap(Tt)),g.setRenderTarget(st),g.setClearColor(at,N),g.toneMapping=_t}function on(T,O,G){const y=O.isScene===!0?O.overrideMaterial:null;for(let L=0,k=T.length;L<k;L++){const st=T[L],_t=st.object,Nt=st.geometry,Vt=y===null?st.material:y,Ht=st.group;_t.layers.test(G.layers)&&vn(_t,O,G,Nt,Vt,Ht)}}function vn(T,O,G,y,L,k){T.onBeforeRender(g,O,G,y,L,k),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),L.onBeforeRender(g,O,G,y,T,k),L.transparent===!0&&L.side===be&&L.forceSinglePass===!1?(L.side=Ne,L.needsUpdate=!0,g.renderBufferDirect(G,O,y,L,T,k),L.side=Ln,L.needsUpdate=!0,g.renderBufferDirect(G,O,y,L,T,k),L.side=be):g.renderBufferDirect(G,O,y,L,T,k),T.onAfterRender(g,O,G,y,L,k)}function en(T,O,G){O.isScene!==!0&&(O=Rt);const y=Ot.get(T),L=m.state.lights,k=m.state.shadowsArray,st=L.state.version,_t=yt.getParameters(T,L.state,k,O,G),Nt=yt.getProgramCacheKey(_t);let Vt=y.programs;y.environment=T.isMeshStandardMaterial?O.environment:null,y.fog=O.fog,y.envMap=(T.isMeshStandardMaterial?z:x).get(T.envMap||y.environment),Vt===void 0&&(T.addEventListener("dispose",dt),Vt=new Map,y.programs=Vt);let Ht=Vt.get(Nt);if(Ht!==void 0){if(y.currentProgram===Ht&&y.lightsStateVersion===st)return nn(T,_t),Ht}else _t.uniforms=yt.getUniforms(T),T.onBuild(G,_t,g),T.onBeforeCompile(_t,g),Ht=yt.acquireProgram(_t,Nt),Vt.set(Nt,Ht),y.uniforms=_t.uniforms;const Xt=y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xt.clippingPlanes=Et.uniform),nn(T,_t),y.needsLights=Dn(T),y.lightsStateVersion=st,y.needsLights&&(Xt.ambientLightColor.value=L.state.ambient,Xt.lightProbe.value=L.state.probe,Xt.directionalLights.value=L.state.directional,Xt.directionalLightShadows.value=L.state.directionalShadow,Xt.spotLights.value=L.state.spot,Xt.spotLightShadows.value=L.state.spotShadow,Xt.rectAreaLights.value=L.state.rectArea,Xt.ltc_1.value=L.state.rectAreaLTC1,Xt.ltc_2.value=L.state.rectAreaLTC2,Xt.pointLights.value=L.state.point,Xt.pointLightShadows.value=L.state.pointShadow,Xt.hemisphereLights.value=L.state.hemi,Xt.directionalShadowMap.value=L.state.directionalShadowMap,Xt.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Xt.spotShadowMap.value=L.state.spotShadowMap,Xt.spotLightMatrix.value=L.state.spotLightMatrix,Xt.spotLightMap.value=L.state.spotLightMap,Xt.pointShadowMap.value=L.state.pointShadowMap,Xt.pointShadowMatrix.value=L.state.pointShadowMatrix),y.currentProgram=Ht,y.uniformsList=null,Ht}function Ye(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=fs.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function nn(T,O){const G=Ot.get(T);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Zn(T,O,G,y,L){O.isScene!==!0&&(O=Rt),b.resetTextureUnits();const k=O.fog,st=y.isMeshStandardMaterial?O.environment:null,_t=P===null?g.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:mn,Nt=(y.isMeshStandardMaterial?z:x).get(y.envMap||st),Vt=y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ht=!!G.attributes.tangent&&(!!y.normalMap||y.anisotropy>0),Xt=!!G.morphAttributes.position,_e=!!G.morphAttributes.normal,Ge=!!G.morphAttributes.color;let ye=Cn;y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ye=g.toneMapping);const an=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,he=an!==void 0?an.length:0,Zt=Ot.get(y),Rs=m.state.lights;if(tt===!0&&(ut===!0||T!==v)){const Ve=T===v&&y.id===F;Et.setState(y,T,Ve)}let de=!1;y.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Rs.state.version||Zt.outputColorSpace!==_t||L.isBatchedMesh&&Zt.batching===!1||!L.isBatchedMesh&&Zt.batching===!0||L.isInstancedMesh&&Zt.instancing===!1||!L.isInstancedMesh&&Zt.instancing===!0||L.isSkinnedMesh&&Zt.skinning===!1||!L.isSkinnedMesh&&Zt.skinning===!0||L.isInstancedMesh&&Zt.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Zt.instancingColor===!1&&L.instanceColor!==null||Zt.envMap!==Nt||y.fog===!0&&Zt.fog!==k||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Et.numPlanes||Zt.numIntersection!==Et.numIntersection)||Zt.vertexAlphas!==Vt||Zt.vertexTangents!==Ht||Zt.morphTargets!==Xt||Zt.morphNormals!==_e||Zt.morphColors!==Ge||Zt.toneMapping!==ye||Lt.isWebGL2===!0&&Zt.morphTargetsCount!==he)&&(de=!0):(de=!0,Zt.__version=y.version);let Un=Zt.currentProgram;de===!0&&(Un=en(y,O,L));let Dr=!1,bi=!1,Cs=!1;const Re=Un.getUniforms(),Nn=Zt.uniforms;if(St.useProgram(Un.program)&&(Dr=!0,bi=!0,Cs=!0),y.id!==F&&(F=y.id,bi=!0),Dr||v!==T){Re.setValue(H,"projectionMatrix",T.projectionMatrix),Re.setValue(H,"viewMatrix",T.matrixWorldInverse);const Ve=Re.map.cameraPosition;Ve!==void 0&&Ve.setValue(H,Pt.setFromMatrixPosition(T.matrixWorld)),Lt.logarithmicDepthBuffer&&Re.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(y.isMeshPhongMaterial||y.isMeshToonMaterial||y.isMeshLambertMaterial||y.isMeshBasicMaterial||y.isMeshStandardMaterial||y.isShaderMaterial)&&Re.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,bi=!0,Cs=!0)}if(L.isSkinnedMesh){Re.setOptional(H,L,"bindMatrix"),Re.setOptional(H,L,"bindMatrixInverse");const Ve=L.skeleton;Ve&&(Lt.floatVertexTextures?(Ve.boneTexture===null&&Ve.computeBoneTexture(),Re.setValue(H,"boneTexture",Ve.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}L.isBatchedMesh&&(Re.setOptional(H,L,"batchingTexture"),Re.setValue(H,"batchingTexture",L._matricesTexture,b));const Ps=G.morphAttributes;if((Ps.position!==void 0||Ps.normal!==void 0||Ps.color!==void 0&&Lt.isWebGL2===!0)&&kt.update(L,G,Un),(bi||Zt.receiveShadow!==L.receiveShadow)&&(Zt.receiveShadow=L.receiveShadow,Re.setValue(H,"receiveShadow",L.receiveShadow)),y.isMeshGouraudMaterial&&y.envMap!==null&&(Nn.envMap.value=Nt,Nn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),bi&&(Re.setValue(H,"toneMappingExposure",g.toneMappingExposure),Zt.needsLights&&In(Nn,Cs),k&&y.fog===!0&&ct.refreshFogUniforms(Nn,k),ct.refreshMaterialUniforms(Nn,y,Q,X,Tt),fs.upload(H,Ye(Zt),Nn,b)),y.isShaderMaterial&&y.uniformsNeedUpdate===!0&&(fs.upload(H,Ye(Zt),Nn,b),y.uniformsNeedUpdate=!1),y.isSpriteMaterial&&Re.setValue(H,"center",L.center),Re.setValue(H,"modelViewMatrix",L.modelViewMatrix),Re.setValue(H,"normalMatrix",L.normalMatrix),Re.setValue(H,"modelMatrix",L.matrixWorld),y.isShaderMaterial||y.isRawShaderMaterial){const Ve=y.uniformsGroups;for(let Ls=0,Za=Ve.length;Ls<Za;Ls++)if(Lt.isWebGL2){const Ur=Ve[Ls];zt.update(Ur,Un),zt.bind(Ur,Un)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Un}function In(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Dn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(T,O,G){Ot.get(T.texture).__webglTexture=O,Ot.get(T.depthTexture).__webglTexture=G;const y=Ot.get(T);y.__hasExternalTextures=!0,y.__hasExternalTextures&&(y.__autoAllocateDepthBuffer=G===void 0,y.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const G=Ot.get(T);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,G=0){P=T,I=O,R=G;let y=!0,L=null,k=!1,st=!1;if(T){const Nt=Ot.get(T);Nt.__useDefaultFramebuffer!==void 0?(St.bindFramebuffer(H.FRAMEBUFFER,null),y=!1):Nt.__webglFramebuffer===void 0?b.setupRenderTarget(T):Nt.__hasExternalTextures&&b.rebindTextures(T,Ot.get(T.texture).__webglTexture,Ot.get(T.depthTexture).__webglTexture);const Vt=T.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(st=!0);const Ht=Ot.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ht[O])?L=Ht[O][G]:L=Ht[O],k=!0):Lt.isWebGL2&&T.samples>0&&b.useMultisampledRTT(T)===!1?L=Ot.get(T).__webglMultisampledFramebuffer:Array.isArray(Ht)?L=Ht[G]:L=Ht,E.copy(T.viewport),C.copy(T.scissor),W=T.scissorTest}else E.copy(et).multiplyScalar(Q).floor(),C.copy(K).multiplyScalar(Q).floor(),W=nt;if(St.bindFramebuffer(H.FRAMEBUFFER,L)&&Lt.drawBuffers&&y&&St.drawBuffers(T,L),St.viewport(E),St.scissor(C),St.setScissorTest(W),k){const Nt=Ot.get(T.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,Nt.__webglTexture,G)}else if(st){const Nt=Ot.get(T.texture),Vt=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.__webglTexture,G||0,Vt)}F=-1},this.readRenderTargetPixels=function(T,O,G,y,L,k,st){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Ot.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&st!==void 0&&(_t=_t[st]),_t){St.bindFramebuffer(H.FRAMEBUFFER,_t);try{const Nt=T.texture,Vt=Nt.format,Ht=Nt.type;if(Vt!==Qe&&lt.convert(Vt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xt=Ht===Gi&&(bt.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&bt.has("EXT_color_buffer_float"));if(Ht!==Pn&&lt.convert(Ht)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===An&&(Lt.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!Xt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-y&&G>=0&&G<=T.height-L&&H.readPixels(O,G,y,L,lt.convert(Vt),lt.convert(Ht),k)}finally{const Nt=P!==null?Ot.get(P).__webglFramebuffer:null;St.bindFramebuffer(H.FRAMEBUFFER,Nt)}}},this.copyFramebufferToTexture=function(T,O,G=0){const y=Math.pow(2,-G),L=Math.floor(O.image.width*y),k=Math.floor(O.image.height*y);b.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,G,0,0,T.x,T.y,L,k),St.unbindTexture()},this.copyTextureToTexture=function(T,O,G,y=0){const L=O.image.width,k=O.image.height,st=lt.convert(G.format),_t=lt.convert(G.type);b.setTexture2D(G,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,y,T.x,T.y,L,k,st,_t,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,y,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,st,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,y,T.x,T.y,st,_t,O.image),y===0&&G.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),St.unbindTexture()},this.copyTextureToTexture3D=function(T,O,G,y,L=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const k=T.max.x-T.min.x+1,st=T.max.y-T.min.y+1,_t=T.max.z-T.min.z+1,Nt=lt.convert(y.format),Vt=lt.convert(y.type);let Ht;if(y.isData3DTexture)b.setTexture3D(y,0),Ht=H.TEXTURE_3D;else if(y.isDataArrayTexture||y.isCompressedArrayTexture)b.setTexture2DArray(y,0),Ht=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,y.unpackAlignment);const Xt=H.getParameter(H.UNPACK_ROW_LENGTH),_e=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Ge=H.getParameter(H.UNPACK_SKIP_PIXELS),ye=H.getParameter(H.UNPACK_SKIP_ROWS),an=H.getParameter(H.UNPACK_SKIP_IMAGES),he=G.isCompressedTexture?G.mipmaps[L]:G.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,he.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,he.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,T.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,T.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,T.min.z),G.isDataTexture||G.isData3DTexture?H.texSubImage3D(Ht,L,O.x,O.y,O.z,k,st,_t,Nt,Vt,he.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ht,L,O.x,O.y,O.z,k,st,_t,Nt,he.data)):H.texSubImage3D(Ht,L,O.x,O.y,O.z,k,st,_t,Nt,Vt,he),H.pixelStorei(H.UNPACK_ROW_LENGTH,Xt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_e),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Ge),H.pixelStorei(H.UNPACK_SKIP_ROWS,ye),H.pixelStorei(H.UNPACK_SKIP_IMAGES,an),L===0&&y.generateMipmaps&&H.generateMipmap(Ht),St.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),St.unbindTexture()},this.resetState=function(){I=0,R=0,P=null,St.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===wr?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===ws?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Te?qn:ya}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===qn?Te:mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class fp extends Xa{}fp.prototype.isWebGL1Renderer=!0;class Ar{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new jt(t),this.density=e}clone(){return new Ar(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pp extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class qa extends Ei{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const na=new D,ia=new D,sa=new pe,ar=new Ca,us=new Es;class mp extends ve{constructor(t=new Oe,e=new qa){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)na.fromBufferAttribute(e,i-1),ia.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=na.distanceTo(ia);t.setAttribute("lineDistance",new oe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(i),us.radius+=r,t.ray.intersectsSphere(us)===!1)return;sa.copy(i).invert(),ar.copy(t.ray).applyMatrix4(sa);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new D,h=new D,d=new D,p=new D,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const u=Math.max(0,a.start),w=Math.min(_.count,a.start+a.count);for(let g=u,S=w-1;g<S;g+=f){const I=_.getX(g),R=_.getX(g+1);if(l.fromBufferAttribute(m,I),h.fromBufferAttribute(m,R),ar.distanceSqToSegment(l,h,p,d)>c)continue;p.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(p);F<t.near||F>t.far||e.push({distance:F,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),w=Math.min(m.count,a.start+a.count);for(let g=u,S=w-1;g<S;g+=f){if(l.fromBufferAttribute(m,g),h.fromBufferAttribute(m,g+1),ar.distanceSqToSegment(l,h,p,d)>c)continue;p.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(p);R<t.near||R>t.far||e.push({distance:R,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class ce extends Be{constructor(t,e,n,i,r,a,o,c,l){super(t,e,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),l=n[i]-a,l<0)o=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const h=n[i],p=n[i+1]-h,f=(a-h)/p;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new Dt:new D);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,i=[],r=[],a=[],o=new D,c=new pe;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new D)}r[0]=new D,a[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),p<=l&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Ee(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,_))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(Ee(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ya extends _n{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new Dt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,f=l-this.aY;c=p*h-f*d+this.aX,l=p*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class gp extends Ya{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Rr(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){i(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,d){let p=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+d)+(c-o)/d;p*=h,f*=h,i(a,o,p,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const ds=new D,cr=new Rr,lr=new Rr,hr=new Rr;class Ss extends _n{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new D){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=i[(o-1)%r]:(ds.subVectors(i[0],i[1]).add(i[0]),l=ds);const d=i[o%r],p=i[(o+1)%r];if(this.closed||o+2<r?h=i[(o+2)%r]:(ds.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ds),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(h),f);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),cr.initNonuniformCatmullRom(l.x,d.x,p.x,h.x,_,M,m),lr.initNonuniformCatmullRom(l.y,d.y,p.y,h.y,_,M,m),hr.initNonuniformCatmullRom(l.z,d.z,p.z,h.z,_,M,m)}else this.curveType==="catmullrom"&&(cr.initCatmullRom(l.x,d.x,p.x,h.x,this.tension),lr.initCatmullRom(l.y,d.y,p.y,h.y,this.tension),hr.initCatmullRom(l.z,d.z,p.z,h.z,this.tension));return n.set(cr.calc(c),lr.calc(c),hr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new D().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ra(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function _p(s,t){const e=1-s;return e*e*t}function Mp(s,t){return 2*(1-s)*s*t}function vp(s,t){return s*s*t}function Oi(s,t,e,n){return _p(s,t)+Mp(s,e)+vp(s,n)}function xp(s,t){const e=1-s;return e*e*e*t}function Sp(s,t){const e=1-s;return 3*e*e*s*t}function yp(s,t){return 3*(1-s)*s*s*t}function wp(s,t){return s*s*s*t}function Fi(s,t,e,n,i){return xp(s,t)+Sp(s,e)+yp(s,n)+wp(s,i)}class Ep extends _n{constructor(t=new Dt,e=new Dt,n=new Dt,i=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Dt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fi(t,i.x,r.x,a.x,o.x),Fi(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Tp extends _n{constructor(t=new D,e=new D,n=new D,i=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Fi(t,i.x,r.x,a.x,o.x),Fi(t,i.y,r.y,a.y,o.y),Fi(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bp extends _n{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ap extends _n{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rp extends _n{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Oi(t,i.x,r.x,a.x),Oi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ka extends _n{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Oi(t,i.x,r.x,a.x),Oi(t,i.y,r.y,a.y),Oi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Cp extends _n{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],l=i[a],h=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(ra(o,c.x,l.x,h.x,d.x),ra(o,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Dt().fromArray(i))}return this}}var Pp=Object.freeze({__proto__:null,ArcCurve:gp,CatmullRomCurve3:Ss,CubicBezierCurve:Ep,CubicBezierCurve3:Tp,EllipseCurve:Ya,LineCurve:bp,LineCurve3:Ap,QuadraticBezierCurve:Rp,QuadraticBezierCurve3:Ka,SplineCurve:Cp});class Cr extends Oe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new D,h=new Dt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const f=n+d/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[p]/t+1)/2,h.y=(a[p+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class xt extends Oe{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],p=[],f=[];let _=0;const M=[],m=n/2;let u=0;w(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(p,3)),this.setAttribute("uv",new oe(f,2));function w(){const S=new D,I=new D;let R=0;const P=(e-t)/n;for(let F=0;F<=r;F++){const v=[],E=F/r,C=E*(e-t)+t;for(let W=0;W<=i;W++){const at=W/i,N=at*c+o,B=Math.sin(N),X=Math.cos(N);I.x=C*B,I.y=-E*n+m,I.z=C*X,d.push(I.x,I.y,I.z),S.set(B,P,X).normalize(),p.push(S.x,S.y,S.z),f.push(at,1-E),v.push(_++)}M.push(v)}for(let F=0;F<i;F++)for(let v=0;v<r;v++){const E=M[v][F],C=M[v+1][F],W=M[v+1][F+1],at=M[v][F+1];h.push(E,C,at),h.push(C,W,at),R+=6}l.addGroup(u,R,0),u+=R}function g(S){const I=_,R=new Dt,P=new D;let F=0;const v=S===!0?t:e,E=S===!0?1:-1;for(let W=1;W<=i;W++)d.push(0,m*E,0),p.push(0,E,0),f.push(.5,.5),_++;const C=_;for(let W=0;W<=i;W++){const N=W/i*c+o,B=Math.cos(N),X=Math.sin(N);P.x=v*X,P.y=m*E,P.z=v*B,d.push(P.x,P.y,P.z),p.push(0,E,0),R.x=B*.5+.5,R.y=X*.5*E+.5,f.push(R.x,R.y),_++}for(let W=0;W<i;W++){const at=I+W,N=C+W;S===!0?h.push(N,N+1,at):h.push(N+1,N,at),F+=3}l.addGroup(u,F,S===!0?1:2),u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Le extends xt{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Le(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Pr extends Oe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),l(n),h(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const g=new D,S=new D,I=new D;for(let R=0;R<e.length;R+=3)f(e[R+0],g),f(e[R+1],S),f(e[R+2],I),c(g,S,I,w)}function c(w,g,S,I){const R=I+1,P=[];for(let F=0;F<=R;F++){P[F]=[];const v=w.clone().lerp(S,F/R),E=g.clone().lerp(S,F/R),C=R-F;for(let W=0;W<=C;W++)W===0&&F===R?P[F][W]=v:P[F][W]=v.clone().lerp(E,W/C)}for(let F=0;F<R;F++)for(let v=0;v<2*(R-F)-1;v++){const E=Math.floor(v/2);v%2===0?(p(P[F][E+1]),p(P[F+1][E]),p(P[F][E])):(p(P[F][E+1]),p(P[F+1][E+1]),p(P[F+1][E]))}}function l(w){const g=new D;for(let S=0;S<r.length;S+=3)g.x=r[S+0],g.y=r[S+1],g.z=r[S+2],g.normalize().multiplyScalar(w),r[S+0]=g.x,r[S+1]=g.y,r[S+2]=g.z}function h(){const w=new D;for(let g=0;g<r.length;g+=3){w.x=r[g+0],w.y=r[g+1],w.z=r[g+2];const S=m(w)/2/Math.PI+.5,I=u(w)/Math.PI+.5;a.push(S,1-I)}_(),d()}function d(){for(let w=0;w<a.length;w+=6){const g=a[w+0],S=a[w+2],I=a[w+4],R=Math.max(g,S,I),P=Math.min(g,S,I);R>.9&&P<.1&&(g<.2&&(a[w+0]+=1),S<.2&&(a[w+2]+=1),I<.2&&(a[w+4]+=1))}}function p(w){r.push(w.x,w.y,w.z)}function f(w,g){const S=w*3;g.x=t[S+0],g.y=t[S+1],g.z=t[S+2]}function _(){const w=new D,g=new D,S=new D,I=new D,R=new Dt,P=new Dt,F=new Dt;for(let v=0,E=0;v<r.length;v+=9,E+=6){w.set(r[v+0],r[v+1],r[v+2]),g.set(r[v+3],r[v+4],r[v+5]),S.set(r[v+6],r[v+7],r[v+8]),R.set(a[E+0],a[E+1]),P.set(a[E+2],a[E+3]),F.set(a[E+4],a[E+5]),I.copy(w).add(g).add(S).divideScalar(3);const C=m(I);M(R,E+0,w,C),M(P,E+2,g,C),M(F,E+4,S,C)}}function M(w,g,S,I){I<0&&w.x===1&&(a[g]=w.x-1),S.x===0&&S.z===0&&(a[g]=I/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function u(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pr(t.vertices,t.indices,t.radius,t.details)}}class Lr extends Pr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Lr(t.radius,t.detail)}}class te extends Oe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],d=new D,p=new D,f=[],_=[],M=[],m=[];for(let u=0;u<=n;u++){const w=[],g=u/n;let S=0;u===0&&a===0?S=.5/e:u===n&&c===Math.PI&&(S=-.5/e);for(let I=0;I<=e;I++){const R=I/e;d.x=-t*Math.cos(i+R*r)*Math.sin(a+g*o),d.y=t*Math.cos(a+g*o),d.z=t*Math.sin(i+R*r)*Math.sin(a+g*o),_.push(d.x,d.y,d.z),p.copy(d).normalize(),M.push(p.x,p.y,p.z),m.push(R+S,1-g),w.push(l++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<e;w++){const g=h[u][w+1],S=h[u][w],I=h[u+1][w],R=h[u+1][w+1];(u!==0||a>0)&&f.push(g,S,R),(u!==n-1||c<Math.PI)&&f.push(S,I,R)}this.setIndex(f),this.setAttribute("position",new oe(_,3)),this.setAttribute("normal",new oe(M,3)),this.setAttribute("uv",new oe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new te(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tn extends Oe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],l=[],h=new D,d=new D,p=new D;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const M=_/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),h.x=t*Math.cos(M),h.y=t*Math.sin(M),p.subVectors(d,h).normalize(),c.push(p.x,p.y,p.z),l.push(_/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const M=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,u=(i+1)*(f-1)+_,w=(i+1)*f+_;a.push(M,m,w),a.push(m,u,w)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Tn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ki extends Oe{constructor(t=new Ka(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,c=new D,l=new Dt;let h=new D;const d=[],p=[],f=[],_=[];M(),this.setIndex(_),this.setAttribute("position",new oe(d,3)),this.setAttribute("normal",new oe(p,3)),this.setAttribute("uv",new oe(f,2));function M(){for(let g=0;g<e;g++)m(g);m(r===!1?e:0),w(),u()}function m(g){h=t.getPointAt(g/e,h);const S=a.normals[g],I=a.binormals[g];for(let R=0;R<=i;R++){const P=R/i*Math.PI*2,F=Math.sin(P),v=-Math.cos(P);c.x=v*S.x+F*I.x,c.y=v*S.y+F*I.y,c.z=v*S.z+F*I.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,d.push(o.x,o.y,o.z)}}function u(){for(let g=1;g<=e;g++)for(let S=1;S<=i;S++){const I=(i+1)*(g-1)+(S-1),R=(i+1)*g+(S-1),P=(i+1)*g+S,F=(i+1)*(g-1)+S;_.push(I,R,F),_.push(R,P,F)}}function w(){for(let g=0;g<=e;g++)for(let S=0;S<=i;S++)l.x=g/e,l.y=S/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ki(new Pp[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class j extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wa,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zi extends j{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ee(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class As extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class Lp extends As{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ur=new pe,oa=new D,aa=new D;class Ir{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;oa.setFromMatrixPosition(t.matrixWorld),e.position.copy(oa),aa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(aa),e.updateMatrixWorld(),ur.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ur)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Ip extends Ir{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=xi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Dp extends As{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ip}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ca=new pe,Ii=new D,dr=new D;class Up extends Ir{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ii.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ii),dr.copy(n.position),dr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(dr),n.updateMatrixWorld(),i.makeTranslation(-Ii.x,-Ii.y,-Ii.z),ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ca)}}class Np extends As{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Up}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Op extends Ir{constructor(){super(new Ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fp extends As{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Op}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Bp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=la(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=la();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function la(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sr);const Ft={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:8,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},re={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class Gp{constructor(){this.state=re.MENU,this.speedKmh=Ft.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Ft.LANES[1],this.targetLaneX=Ft.LANES[1],this.crashTimer=0}startNewGame(){this.state=re.PLAYING,this.speedKmh=Ft.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Ft.LANES[1],this.targetLaneX=Ft.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==re.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<Ft.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=Ft.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min(Ft.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=Ft.SCORING.COMBO_TIMEOUT;const t=Ft.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min(Ft.NITRO.MAX,this.nitro+Ft.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==re.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*Ft.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,r=e.keys.accelerate,a=e.keys.boost,o=this.distanceMeters/1e3,c=Math.min(Ft.SPEED.MAX_PROGRESSIVE_BONUS,o*Ft.SPEED.PROGRESSIVE_RATE),l=Ft.SPEED.BASE_START+c,h=l+45,d=Ft.SPEED.BOOST+c*.4;a&&this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-Ft.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(d,this.speedKmh+Ft.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.nitro=Math.min(Ft.NITRO.MAX,this.nitro+Ft.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max(Ft.SPEED.MIN,this.speedKmh-Ft.SPEED.BRAKING*t):r?this.speedKmh=Math.min(h,this.speedKmh+Ft.SPEED.ACCELERATION*1.6*t):this.speedKmh<l?this.speedKmh=Math.min(l,this.speedKmh+Ft.SPEED.ACCELERATION*t):this.speedKmh>l&&(this.speedKmh=Math.max(l,this.speedKmh-Ft.SPEED.NATURAL_DECEL*t)));const f=this.speedKmh*1e3/3600*t;this.distanceMeters+=f,this.score+=Math.round(f*Ft.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=re.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class kp{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.touchStartX=0,this.touchStartY=0,this.touchStartTime=0,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)&&t.preventDefault(),t.code){case"ArrowLeft":case"KeyA":this.keys.left||(this.laneChangeRequested=-1),this.keys.left=!0;break;case"ArrowRight":case"KeyD":this.keys.right||(this.laneChangeRequested=1),this.keys.right=!0;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!0;break;case"Space":this.keys.boost=!0;break;case"ArrowDown":case"KeyS":this.keys.brake=!0;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!0,this.onHorn&&this.onHorn();break;case"KeyP":case"Escape":this.onPauseToggle&&this.onPauseToggle();break;case"KeyR":this.onRestart&&this.onRestart();break}}),window.addEventListener("keyup",t=>{switch(t.code){case"ArrowLeft":case"KeyA":this.keys.left=!1;break;case"ArrowRight":case"KeyD":this.keys.right=!1;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!1;break;case"Space":this.keys.boost=!1;break;case"ArrowDown":case"KeyS":this.keys.brake=!1;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!1;break}}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0,t.touches.length>0&&(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=Date.now())},{passive:!0}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;Date.now()-this.touchStartTime<350&&Math.abs(e)>40&&Math.abs(e)>Math.abs(n)*1.3&&(e<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}triggerSteerLeft(){this.laneChangeRequested=-1}triggerSteerRight(){this.laneChangeRequested=1}setBrake(t){this.keys.brake=t}setAccelerate(t){this.keys.accelerate=t}setNitro(t){this.keys.boost=t}setBoost(t){this.keys.boost=t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0}}class zp{constructor(t){this.camera=t,this.defaultOffset=new D(Ft.CAMERA.DEFAULT_OFFSET.x,Ft.CAMERA.DEFAULT_OFFSET.y,Ft.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new D(Ft.CAMERA.LOOK_OFFSET.x,Ft.CAMERA.LOOK_OFFSET.y,Ft.CAMERA.LOOK_OFFSET.z),this.currentPos=new D,this.currentLook=new D,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=Ft.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.8,8.2),this.lookOffset.set(0,1.3,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=Ft.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const r=t.group.position,a=Math.min(1,e/Ft.SPEED.MAX_NORMAL),o=this.camera.aspect,c=o<1?Math.min(24,(1-o)*36):0;this.targetFOV=Ft.CAMERA.BASE_FOV+c+a*10+(n?8:0),this.camera.fov+=(this.targetFOV-this.camera.fov)*Math.min(1,i*Ft.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix();const l=r.x+this.defaultOffset.x,h=r.y+this.defaultOffset.y,d=r.z+this.defaultOffset.z+(n?.8:0),p=Math.min(1,i*10),f=Math.min(1,i*12);this.currentPos.x+=(l-this.currentPos.x)*p,this.currentPos.y+=(h-this.currentPos.y)*f,this.currentPos.z=d;const _=r.x+this.lookOffset.x,M=r.y+this.lookOffset.y,m=r.z+this.lookOffset.z;this.currentLook.x+=(_-this.currentLook.x)*p,this.currentLook.y+=(M-this.currentLook.y)*f,this.currentLook.z=m;let u=0,w=0;if(e>70){const R=e/280*.03;u=(Math.random()-.5)*R,w=(Math.random()-.5)*R}let g=0,S=0,I=0;if(this.shakeDuration>0){this.shakeDuration-=i;const R=Math.max(0,this.shakeDuration/.6),P=this.shakeIntensity*R;g=(Math.random()-.5)*P,S=(Math.random()-.5)*P,I=(Math.random()-.5)*P}this.camera.position.set(this.currentPos.x+u+g,this.currentPos.y+w+S,this.currentPos.z+I),this.camera.lookAt(this.currentLook.x+u*.5,this.currentLook.y+w*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,r=(e?4.8:8.2)*i,a=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),o=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*r,a,Math.cos(c)*r),this.camera.lookAt(0,o,0)}}class Vp{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){this.ctx&&fetch("/audio/eta_ki_korli_mama.mp3").then(t=>{if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.arrayBuffer()}).then(t=>this.ctx.decodeAudioData(t)).then(t=>{this.crashVoiceBuffer=t}).catch(t=>{console.warn("Could not decode crash voice buffer:",t)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const r=this.ctx.createGain();r.gain.setValueAtTime(.04,t),this.highOsc.connect(r),r.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,r=0,a=0;for(let c=0;c<t;c++){const l=Math.random()*2-1;i=.98*i+l*.055,r=.95*r+l*.075,a=.85*a+l*.15,n[c]=(i+r+a)*.45}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),o.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),o.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(500,t),a.frequency.exponentialRampToValueAtTime(180,t+.35);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.07,t+.05),o.gain.exponentialRampToValueAtTime(.001,t+.35),r.connect(a),a.connect(o),o.connect(this.masterGain),r.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const r=[2093,2637];[0,.09].forEach(a=>{r.forEach(o=>{const c=this.ctx.createOscillator(),l=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(o,n+a),l.gain.setValueAtTime(0,n+a),l.gain.linearRampToValueAtTime(.22,n+a+.008),l.gain.exponentialRampToValueAtTime(1e-4,n+a+.18),c.connect(l),l.connect(this.masterGain),c.start(n+a),c.stop(n+a+.2)})});return}if(e==="cng"){[620,780].forEach(a=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sawtooth",o.frequency.setValueAtTime(a,n);const l=this.ctx.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.35)});return}[330,415.3,523.25].forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain(),l=this.ctx.createBiquadFilter();o.type=a===0?"sine":"triangle",o.frequency.setValueAtTime(r,n),l.type="lowpass",l.frequency.setValueAtTime(1400,n);const h=a===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(h,n+.02),c.gain.setValueAtTime(h,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),o.connect(l),l.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n*.8,t),r.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.08,t+.06),a.gain.exponentialRampToValueAtTime(1e-4,t+.45),r.connect(a),a.connect(this.masterGain),r.start(t),r.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const r=this.ctx.currentTime,a=Math.min(1,Math.max(0,t/200)),o=a*5%1,c=900+a*1800+o*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const l=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,l),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,r,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,r,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,r,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,r,.05);const h=300+a*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(h,r,.06);const d=.16+a*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,d),r,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+a*350,r,.08),this.turboGain.gain.setTargetAtTime(.05,r,.08)):this.turboGain.gain.setTargetAtTime(1e-4,r,.15);const p=Math.pow(a,1.3)*.06;this.roadGain.gain.setTargetAtTime(p,r,.08),this.roadFilter.frequency.setTargetAtTime(180+a*250,r,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime((a===0?n:n*1.25)*i,e+r),c.gain.setValueAtTime(.001,e+r),c.gain.linearRampToValueAtTime(.12,e+r+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+r+.28),o.connect(c),c.connect(this.masterGain),o.start(e+r),o.stop(e+r+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),r=this.ctx.createBuffer(1,i,this.ctx.sampleRate),a=r.getChannelData(0);for(let h=0;h<i;h++)a[h]=(Math.random()*2-1)*Math.exp(-h/(this.ctx.sampleRate*.12));const o=this.ctx.createBufferSource();o.buffer=r;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const l=this.ctx.createGain();l.gain.setValueAtTime(.3,t),l.gain.exponentialRampToValueAtTime(.001,t+.45),o.connect(c),c.connect(l),l.connect(this.masterGain),o.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(r=>r.lang.includes("bn")||r.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(e,t+i),a.gain.setValueAtTime(.001,t+i),a.gain.linearRampToValueAtTime(.12,t+i+.02),a.gain.exponentialRampToValueAtTime(.001,t+i+.32),r.connect(a),a.connect(this.masterGain),r.start(t+i),r.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class Hp{constructor(){this.group=new At,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new gn,this.collisionSize=new D(2.1,2.8,5.5),this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new ce(t),i=document.createElement("canvas");i.width=1024,i.height=384;const r=i.getContext("2d");r.fillStyle="#f8fafc",r.fillRect(0,0,1024,384),r.fillStyle="#dc2626",r.fillRect(0,0,1024,36),r.fillRect(0,348,1024,36),r.fillStyle="#16a34a",r.beginPath(),r.arc(512,180,110,Math.PI,0),r.fill(),r.fillStyle="#f59e0b",r.fillRect(472,80,80,100),r.beginPath(),r.moveTo(512,20),r.lineTo(460,80),r.lineTo(564,80),r.fill();const a=(V,Y)=>{r.fillStyle="#dc2626";for(let Z=0;Z<Math.PI*2;Z+=Math.PI/3)r.beginPath(),r.arc(V+Math.cos(Z)*35,Y+Math.sin(Z)*35,24,0,Math.PI*2),r.fill();r.fillStyle="#fbbf24",r.beginPath(),r.arc(V,Y,22,0,Math.PI*2),r.fill()};a(220,180),a(804,180),r.fillStyle="#1e293b",r.font="bold 54px serif",r.textAlign="center",r.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const o=new ce(i),c=document.createElement("canvas");c.width=1024,c.height=512;const l=c.getContext("2d");l.fillStyle="#f59e0b",l.fillRect(0,0,1024,140);for(let V=60;V<1024;V+=110)l.fillStyle="#dc2626",l.beginPath(),l.arc(V,70,32,0,Math.PI*2),l.fill(),l.fillStyle="#22c55e",l.beginPath(),l.arc(V,70,16,0,Math.PI*2),l.fill();l.fillStyle="#15803d",l.fillRect(0,140,1024,372),l.strokeStyle="#f8fafc",l.lineWidth=8;for(let V=30;V<1024;V+=138)l.strokeRect(V,160,116,320);l.fillStyle="#ffffff",l.font="900 80px sans-serif",l.textAlign="center",l.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),l.fillStyle="#dc2626",l.fillRect(0,140,30,372),l.fillRect(994,140,30,372);const h=new ce(c);this.yellowPaint=new j({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new j({color:165063,roughness:.4,metalness:.3}),this.redPaint=new j({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new j({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new j({color:2040877,roughness:.8}),this.woodPlankMat=new j({color:7877903,roughness:.9}),this.tireMat=new j({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new j({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new zi({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new fe({color:16777215}),this.taillightMat=new j({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new j({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new j({color:16119280,roughness:.65}),this.cowBrownMat=new j({color:9262372,roughness:.7}),this.cowBlackMat=new j({color:2236962,roughness:.75}),this.cowFawnMat=new j({color:12088115,roughness:.68}),this.hornMat=new j({color:3621201,roughness:.4}),this.snoutMat=new j({color:1974308,roughness:.8});const d=new At;d.name="truckBody",this.bodyGroup=d;const p=new rt(1.9,.4,6),f=new A(p,this.chassisMat);f.position.set(0,.65,.2),f.castShadow=!0,d.add(f);const _=new At;_.position.set(0,.6,-2.85),[-.3,0,.3].forEach(V=>{const Y=new xt(.06,.06,2.3,8);Y.rotateZ(Math.PI/2);const Z=new A(Y,this.tealBumperMat);Z.position.y=V,Z.castShadow=!0,_.add(Z)}),[-.95,-.45,.45,.95].forEach(V=>{const Y=new rt(.08,.72,.08),Z=new A(Y,this.tealBumperMat);Z.position.x=V,_.add(Z)}),[-1.08,1.08].forEach(V=>{const Y=new xt(.03,.03,.9,6),Z=new A(Y,this.tealBumperMat);Z.position.set(V,.35,0),_.add(Z);const yt=new te(.07,8,8),ct=new A(yt,this.redPaint);ct.position.set(V,.8,0),_.add(ct)});const M=document.createElement("canvas");M.width=256,M.height=80;const m=M.getContext("2d");m.fillStyle="#006633",m.fillRect(0,0,256,80),m.strokeStyle="#ffffff",m.lineWidth=4,m.strokeRect(4,4,248,72),m.fillStyle="#ffffff",m.font="bold 26px sans-serif",m.textAlign="center",m.fillText("যশোর-ট",128,34),m.fillText("০২-০৯৬৯",128,64);const u=new ce(M),w=new qt(.65,.22),g=new fe({map:u}),S=new A(w,g);S.position.set(0,-.15,.08),_.add(S),d.add(_);const I=new rt(1.85,.95,1.6),R=new A(I,this.yellowPaint);R.position.set(0,1.25,-2.05),R.castShadow=!0,d.add(R);const P=new qt(1.65,.85),F=new j({map:n}),v=new A(P,F);v.position.set(0,1.25,-2.86),d.add(v),[-.68,.68].forEach(V=>{const Y=new xt(.16,.16,.06,16);Y.rotateX(Math.PI/2);const Z=new A(Y,this.chassisMat);Z.position.set(V,1.15,-2.87),d.add(Z);const yt=new Cr(.13,16),ct=new A(yt,this.headlightMat);ct.position.set(V,1.15,-2.89),d.add(ct),this.headlights.push(ct);const Mt=new Dp(16772829,2.5,60,Math.PI/5,.5,1.2);Mt.position.set(V,1.15,-2.9),Mt.target.position.set(V*1.5,0,-35),d.add(Mt),d.add(Mt.target)}),[-.98,.98].forEach(V=>{const Y=new rt(.24,.55,1.4),Z=new A(Y,this.chassisMat);Z.position.set(V,.95,-1.95),Z.castShadow=!0,d.add(Z)});const E=new rt(2.1,1.45,1.55),C=new A(E,this.yellowPaint);C.position.set(0,1.75,-.6),C.castShadow=!0,d.add(C),[-1.06,1.06].forEach(V=>{const Y=new rt(.04,1.35,1.4),Z=new A(Y,this.cyanBluePaint);Z.position.set(V,1.75,-.6),d.add(Z);const yt=new qt(.65,.55),ct=new A(yt,this.glassMat);ct.position.set(V>0?V+.03:V-.03,1.95,-.65),ct.rotation.y=V>0?Math.PI/2:-Math.PI/2,d.add(ct)});const W=new qt(1.85,.72),at=new A(W,this.glassMat);at.position.set(0,1.92,-1.39),d.add(at);const N=new At;N.position.set(0,2.65,-.85);const B=new qt(2.15,.85),X=new j({map:o,roughness:.4}),Q=new A(B,X);Q.position.set(0,0,-.55),N.add(Q);const $=new rt(2.2,.15,1.4),q=new A($,this.redPaint);q.position.set(0,.45,.1),q.castShadow=!0,N.add(q);const et=new rt(2.24,.18,.08),K=new A(et,this.yellowPaint);K.position.set(0,.38,-.58),N.add(K),d.add(N);const nt=new At;nt.position.set(0,1.6,1.6);const J=new rt(2.2,.12,3.4),tt=new A(J,this.woodPlankMat);tt.position.set(0,-.4,0),tt.receiveShadow=!0,nt.add(tt);const ut=new j({map:h,roughness:.45});[-1.12,1.12].forEach(V=>{const Y=new qt(3.4,1.15),Z=new A(Y,ut);Z.position.set(V,.25,0),Z.rotation.y=V>0?Math.PI/2:-Math.PI/2,Z.castShadow=!0,nt.add(Z);const yt=new rt(.12,.12,3.4),ct=new A(yt,this.redPaint);ct.position.set(V,.85,0),nt.add(ct)});const Tt=new rt(2.2,1.15,.1),wt=new A(Tt,this.redPaint);wt.position.set(0,.25,-1.68),nt.add(wt);const Bt=new rt(2.2,1.05,.1),Pt=new A(Bt,this.yellowPaint);Pt.position.set(0,.2,1.68),Pt.castShadow=!0,nt.add(Pt);const Rt=new rt(2.25,.18,.15),vt=new A(Rt,this.chassisMat);vt.position.set(0,-.65,1.72),nt.add(vt),[-.85,.85].forEach(V=>{const Y=new rt(.32,.14,.05),Z=new A(Y,this.taillightMat);Z.position.set(V,-.65,1.82),nt.add(Z),this.brakeLights.push(Z)}),[-.85,.85].forEach(V=>{const Y=new rt(.4,.45,.04),Z=new A(Y,this.tireMat);Z.position.set(V,-.9,1.74),nt.add(Z)}),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((V,Y)=>{const Z=this.createBedCow(V.mat,V.scale);Z.position.set(V.x,.35,V.z),Z.rotation.y=V.rotY,nt.add(Z),this.cows.push({group:Z,head:Z.userData.head,baseRotX:Z.userData.head.rotation.x,seed:Y*1.5})}),d.add(nt);const Wt=this.createTruckWheel(.48,.26,!1);Wt.position.set(0,.42,.4),Wt.rotation.x=Math.PI/2,d.add(Wt);const bt=new xt(.08,.08,.6,8);bt.rotateZ(Math.PI/2);const Lt=new A(bt,this.chassisMat);Lt.position.set(1.05,.48,-.8),d.add(Lt);const St=new Le(.22,1.2,12);St.rotateZ(-Math.PI/2);const Qt=new fe({color:16755200,transparent:!0,opacity:0}),Ot=new A(St,Qt);Ot.position.set(1.65,.48,-.8),d.add(Ot),this.exhaustFires.push(Ot),this.group.add(d);const b=.48,x=.52,z=.32;[-1.02,1.02].forEach(V=>{const Y=this.createTruckWheelAssembly(x,z,V>0,!1);Y.position.set(V,b,-1.95),this.group.add(Y),this.wheels.push(Y.userData.spinner),this.frontWheels.push(Y)}),[-1.02,1.02].forEach(V=>{const Y=this.createTruckWheelAssembly(x,z,V>0,!0);Y.position.set(V,b,1.85),this.group.add(Y),this.wheels.push(Y.userData.spinner)})}createBedCow(t,e=1){const n=new At;n.scale.set(e,e,e);const i=new rt(.85,.85,1.35),r=new A(i,t);r.position.set(0,.45,0),r.castShadow=!0,n.add(r);const a=new Le(.24,.38,8),o=new A(a,t);o.position.set(0,.95,-.32),o.rotation.x=-.2,n.add(o);const c=new At;c.position.set(0,.75,-.6),n.userData.head=c;const l=new rt(.42,.46,.62),h=new A(l,t);h.position.set(0,.22,-.35),c.add(h);const d=new rt(.32,.25,.25),p=new A(d,this.snoutMat);return p.position.set(0,.12,-.68),c.add(p),[-.18,.18].forEach(f=>{const _=new Le(.05,.3,6),M=new A(_,this.hornMat);M.position.set(f,.46,-.28),M.rotation.z=f>0?-.38:.38,M.rotation.x=.25,c.add(M);const m=new rt(.18,.07,.08),u=new A(m,t);u.position.set(f>0?.26:-.26,.32,-.25),u.rotation.z=f>0?-.35:.35,c.add(u)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const r=new At,a=new At;if(r.userData.spinner=a,r.add(a),i){const o=this.createTruckWheel(t,e*.75,n);o.position.x=n?.08:-.08,a.add(o);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,a.add(c)}else{const o=this.createTruckWheel(t,e,n);a.add(o)}return r}createTruckWheel(t,e,n){const i=new At,r=new xt(t,t,e,24);r.rotateZ(Math.PI/2);const a=new A(r,this.tireMat);i.add(a);const o=new xt(t*.65,t*.65,e+.02,18);o.rotateZ(Math.PI/2);const c=new A(o,this.rimMat);i.add(c);const l=new xt(t*.28,t*.28,e+.05,12);l.rotateZ(Math.PI/2);const h=new A(l,this.chassisMat);return i.add(h),i}update(t,e,n,i,r,a){const o=t*1e3/3600,c=2*Math.PI*.52,l=o/c*(2*Math.PI)*a;this.wheelRotation-=l,this.wheels.forEach(u=>{u.rotation.x=this.wheelRotation});const h=n-this.group.position.x,d=-Math.max(-.35,Math.min(Ft.STEERING.WHEEL_TURN_ANGLE,h*.35));this.frontWheels.forEach(u=>{u.rotation.y+=(d-u.rotation.y)*Math.min(1,a*12)});const p=Math.max(-.065,Math.min(.065,h*.065));this.currentRoll+=(p-this.currentRoll)*Math.min(1,a*10),this.bodyGroup.rotation.z=this.currentRoll;const f=Math.max(-.05,Math.min(.05,h*.05));this.currentYaw+=(f-this.currentYaw)*Math.min(1,a*10),this.bodyGroup.rotation.y=this.currentYaw;let _=0;i?_=.045:r&&(_=-.035),this.currentPitch+=(_-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const M=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(u=>{u.material=M}),this.exhaustFires.forEach(u=>{r?(u.material.opacity=.95,u.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),u.material.color.setHex(Math.random()>.4?16759552:16729088)):u.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(u=>{u.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(u=>{u.scale.set(1,1,1)});const m=performance.now()*.001;this.cows.forEach(u=>{const w=Math.sin(m*6.5+u.seed)*.08+(r?Math.sin(m*14+u.seed)*.05:0);u.head.rotation.x=u.baseRotX+w,u.head.rotation.y=Math.sin(m*2.2+u.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.45,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Wp{constructor(){this.group=new At,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new At,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new gn,this.collisionSize=new D(1.5,2.1,3.2),this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new At,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=640;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,360);n.addColorStop(0,"#7dd3fc"),n.addColorStop(1,"#e0f2fe"),e.fillStyle=n,e.fillRect(0,0,1024,640);const i=(y,L,k)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(y,L,38*k,0,Math.PI*2),e.arc(y+42*k,L-14*k,48*k,0,Math.PI*2),e.arc(y+95*k,L-8*k,42*k,0,Math.PI*2),e.arc(y+135*k,L+8*k,32*k,0,Math.PI*2),e.fill()};i(80,120,1.1),i(720,100,.95);const r=512,a=270;for(let y=-Math.PI;y<=0;y+=Math.PI/18)e.beginPath(),e.moveTo(r,a),e.lineTo(r+Math.cos(y)*380,a+Math.sin(y)*380),e.lineTo(r+Math.cos(y+Math.PI/36)*380,a+Math.sin(y+Math.PI/36)*380),e.closePath(),e.fillStyle="rgba(245, 158, 11, 0.45)",e.fill();e.beginPath(),e.arc(r,a,78,Math.PI,0),e.fillStyle="#f59e0b",e.fill(),e.beginPath(),e.arc(r,a,52,Math.PI,0),e.fillStyle="#fde047",e.fill();const o=e.createLinearGradient(0,270,0,520);o.addColorStop(0,"#0284c7"),o.addColorStop(1,"#0369a1"),e.fillStyle=o,e.beginPath(),e.moveTo(0,270),e.lineTo(512,270),e.lineTo(470,520),e.lineTo(0,520),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=3.5;for(let y=290;y<510;y+=24)for(let k=20;k<440;k+=38*2)e.beginPath(),e.moveTo(k,y),e.quadraticCurveTo(k+38/2,y-5,k+38,y),e.stroke();e.fillStyle="#fde68a",e.beginPath(),e.moveTo(470,520),e.lineTo(512,270),e.lineTo(560,270),e.lineTo(530,520),e.closePath(),e.fill(),e.fillStyle="#16a34a",e.beginPath(),e.moveTo(520,270),e.lineTo(1024,270),e.lineTo(1024,520),e.lineTo(485,520),e.closePath(),e.fill();const c=(y,L)=>{e.strokeStyle="#854d0e",e.lineWidth=6,e.beginPath(),e.moveTo(y,L),e.quadraticCurveTo(y-15,L-60,y-25,L-110),e.stroke(),e.strokeStyle="#15803d",e.lineWidth=4;for(let k=0;k<Math.PI*2;k+=Math.PI/4)e.beginPath(),e.moveTo(y-25,L-110),e.quadraticCurveTo(y-25+Math.cos(k)*45,L-110+Math.sin(k)*40-15,y-25+Math.cos(k)*65,L-110+Math.sin(k)*40),e.stroke()};c(640,360),c(720,350),c(940,360),e.fillStyle="#fce7f3",e.fillRect(720,370,190,85),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(720,370,190,85),e.fillStyle="#dc2626",e.beginPath(),e.moveTo(705,370),e.lineTo(815,310),e.lineTo(925,370),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let y=720;y<910;y+=18)e.beginPath(),e.moveTo(y,370),e.lineTo(815,310),e.stroke();e.fillStyle="#374151",e.fillRect(785,395,35,60),e.fillRect(850,390,30,30),e.fillStyle="#f8fafc",e.fillRect(570,385,140,70),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(570,385,140,70),e.fillStyle="#2563eb",e.beginPath(),e.moveTo(555,385),e.lineTo(640,335),e.lineTo(725,385),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let y=570;y<710;y+=18)e.beginPath(),e.moveTo(y,385),e.lineTo(640,335),e.stroke();e.fillStyle="#1e3a8a",e.fillRect(620,405,30,50),e.fillStyle="#ea580c",e.fillRect(0,510,1024,45),e.fillStyle="#fde047";for(let y=20;y<1024;y+=40)e.beginPath(),e.arc(y,510,16,0,Math.PI),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2,e.stroke();e.fillStyle="#18181b",e.fillRect(0,555,1024,35);const l=["#dc2626","#ffffff","#16a34a","#fde047"];for(let y=0;y<48;y++)e.fillStyle=l[y%l.length],e.fillRect(y*22,558,14,29);const h=(y,L)=>{e.strokeStyle="#94a3b8",e.lineWidth=3,e.beginPath(),e.arc(y,L,8,0,Math.PI*2),e.stroke(),e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(y,L+8),e.bezierCurveTo(y+28,L+8,y+44,L+28,y,L+64),e.bezierCurveTo(y-44,L+28,y-28,L+8,y,L+8),e.closePath(),e.fill(),e.strokeStyle="#64748b",e.lineWidth=2.5,e.stroke(),e.fillStyle="#94a3b8",[[0,24],[-14,28],[14,28],[-8,42],[8,42],[0,52]].forEach(([k,st])=>{e.beginPath(),e.arc(y+k,L+st,3.2,0,Math.PI*2),e.fill()})};h(220,570),h(512,570),h(804,570);const d=new ce(t),p=document.createElement("canvas");p.width=1024,p.height=260;const f=p.getContext("2d"),_=f.createLinearGradient(0,0,0,260);_.addColorStop(0,"#f8fafc"),_.addColorStop(.5,"#e2e8f0"),_.addColorStop(1,"#94a3b8"),f.fillStyle=_,f.fillRect(0,0,1024,260),f.fillStyle="#475569";for(let y=30;y<1e3;y+=45)f.beginPath(),f.arc(y,24,7,0,Math.PI*2),f.fill(),f.beginPath(),f.arc(y-2,22,2.5,0,Math.PI*2),f.fillStyle="#ffffff",f.fill(),f.fillStyle="#475569",f.beginPath(),f.arc(y,236,7,0,Math.PI*2),f.fill(),f.beginPath(),f.arc(y-2,234,2.5,0,Math.PI*2),f.fillStyle="#ffffff",f.fill(),f.fillStyle="#475569";f.fillStyle="#f59e0b",f.strokeStyle="#dc2626",f.lineWidth=7,f.font="bold 82px sans-serif",f.textAlign="center",f.textBaseline="middle",f.strokeText("বাংলাদেশ",512,115),f.fillText("বাংলাদেশ",512,115),f.fillStyle="#16a34a",f.font="bold 78px sans-serif",f.fillText("বাংলাদেশ",512,113),f.fillStyle="#fef08a",f.font="bold 74px sans-serif",f.fillText("বাংলাদেশ",512,111);const M=["#dc2626","#16a34a","#f59e0b","#06b6d4","#ec4899"];for(let y=0;y<18;y++)f.beginPath(),f.arc(310+y*24,185,7.5,0,Math.PI*2),f.fillStyle=M[y%M.length],f.fill(),f.strokeStyle="#18181b",f.lineWidth=1.8,f.stroke();const m=(y,L)=>{f.beginPath(),f.arc(y,L,62,0,Math.PI*2),f.fillStyle="#cbd5e1",f.fill(),f.strokeStyle="#64748b",f.lineWidth=4,f.stroke(),f.beginPath(),f.arc(y,L,48,0,Math.PI*2),f.fillStyle="#dc2626",f.fill(),f.strokeStyle="#fde047",f.lineWidth=3,f.stroke(),f.fillStyle="#ffffff",f.font="bold 50px sans-serif",f.textAlign="center",f.textBaseline="middle",f.fillText("মা",y,L)};m(140,125),m(884,125);const u=new ce(p),w=document.createElement("canvas");w.width=1024,w.height=1024;const g=w.getContext("2d");g.beginPath(),g.moveTo(40,1024),g.lineTo(40,520),g.bezierCurveTo(40,60,984,60,984,520),g.lineTo(984,1024),g.closePath(),g.fillStyle="#dc2626",g.fill(),g.strokeStyle="#881337",g.lineWidth=12,g.stroke(),g.strokeStyle="#fde047",g.lineWidth=5,g.stroke(),g.fillStyle="#1d4ed8",g.fillRect(456,120,112,680),g.strokeStyle="#18181b",g.lineWidth=3,g.strokeRect(456,120,112,680),g.fillStyle="#ffffff",g.fillRect(498,120,28,680),g.beginPath(),g.arc(512,780,42,0,Math.PI*2),g.fillStyle="#dc2626",g.fill(),g.strokeStyle="#fde047",g.lineWidth=5,g.stroke(),g.fillStyle="#ffffff",g.font="bold 44px sans-serif",g.textAlign="center",g.textBaseline="middle",g.fillText("১",512,780);const S=(y,L,k,st)=>{g.save(),g.translate(L,k),g.rotate(st),g.font="bold 88px sans-serif",g.textAlign="center",g.textBaseline="middle",g.strokeStyle="#18181b",g.lineWidth=12,g.strokeText(y,0,0),g.fillStyle="#ffffff",g.fillText(y,0,0),g.restore()};S("মায়ের",310,240,-.22),S("দোয়া",714,240,.22);const I=(y,L)=>{g.save(),g.translate(y,500),L&&g.scale(-1,1),g.beginPath(),g.arc(70,-160,36,0,Math.PI*2),g.fillStyle="#fde047",g.fill(),g.strokeStyle="#18181b",g.lineWidth=3,g.stroke(),g.beginPath(),g.arc(70,-160,16,0,Math.PI*2),g.fillStyle="#ea580c",g.fill();for(let st=0;st<7;st++){const _t=-Math.PI/2+(st-3)*.35;g.beginPath(),g.ellipse(80+Math.cos(_t)*45,-50+Math.sin(_t)*35,18,38,_t,0,Math.PI*2),g.fillStyle="#ec4899",g.fill(),g.strokeStyle="#18181b",g.lineWidth=2.5,g.stroke()}g.beginPath(),g.arc(80,-50,24,0,Math.PI*2),g.fillStyle="#fef08a",g.fill(),g.stroke(),((st,_t)=>{g.fillStyle="#16a34a",g.beginPath(),g.ellipse(st-30,_t+20,16,32,.6,0,Math.PI*2),g.ellipse(st+30,_t+20,16,32,-.6,0,Math.PI*2),g.fill(),g.stroke(),g.fillStyle="#1d4ed8",g.beginPath(),g.arc(st,_t,55,0,Math.PI*2),g.fill(),g.strokeStyle="#18181b",g.lineWidth=3,g.stroke(),g.strokeStyle="#38bdf8",g.lineWidth=4,g.beginPath(),g.arc(st,_t,36,.4,Math.PI*1.6),g.stroke(),g.beginPath(),g.arc(st,_t,20,Math.PI,Math.PI*2.2),g.stroke(),g.fillStyle="#ffffff",g.beginPath(),g.arc(st,_t,10,0,Math.PI*2),g.fill()})(85,110),g.restore()};I(260,!1),I(764,!0);const R=new ce(w),P=document.createElement("canvas");P.width=512,P.height=128;const F=P.getContext("2d");F.fillStyle="#ffffff",F.fillRect(0,0,512,128),F.fillStyle="#dc2626";for(let y=-128;y<640;y+=36)F.beginPath(),F.moveTo(y,0),F.lineTo(y+18,0),F.lineTo(y+18+128,128),F.lineTo(y+128,128),F.closePath(),F.fill();const v=new ce(P),E=document.createElement("canvas");E.width=1024,E.height=1024;const C=E.getContext("2d");C.fillStyle="#f59e0b",C.fillRect(0,0,1024,1024),C.strokeStyle="rgba(234, 88, 12, 0.18)",C.lineWidth=3;for(let y=-1024;y<2048;y+=64)C.beginPath(),C.moveTo(y,0),C.lineTo(y+1024,1024),C.stroke(),C.beginPath(),C.moveTo(y,1024),C.lineTo(y+1024,0),C.stroke();C.fillStyle="#881337",C.fillRect(0,0,1024,140),C.fillRect(0,884,1024,140),C.fillStyle="#06b6d4",C.fillRect(0,140,1024,28),C.fillRect(0,856,1024,28),C.fillStyle="#10b981",C.fillRect(0,168,1024,16),C.fillRect(0,840,1024,16);for(let y=32;y<1024;y+=64)C.beginPath(),C.arc(y,140,16,0,Math.PI),C.fillStyle="#fde047",C.fill(),C.strokeStyle="#18181b",C.lineWidth=2.5,C.stroke(),C.beginPath(),C.arc(y,884,16,Math.PI,Math.PI*2),C.fillStyle="#fde047",C.fill(),C.strokeStyle="#18181b",C.lineWidth=2.5,C.stroke();[70,954].forEach(y=>{C.fillStyle="#ffffff",C.font="bold 44px sans-serif",C.textAlign="center",C.textBaseline="middle",C.shadowColor="rgba(0,0,0,0.8)",C.shadowBlur=8,C.fillText("মা বাবার দোয়া",512,y),C.shadowBlur=0}),((y,L)=>{C.strokeStyle="#ea580c",C.lineWidth=4;for(let k=0;k<Math.PI*2;k+=Math.PI/16)C.beginPath(),C.moveTo(y,L),C.lineTo(y+Math.cos(k)*260,L+Math.sin(k)*260),C.stroke();for(let k=0;k<16;k++){const st=k*Math.PI/8,_t=y+Math.cos(st)*175,Nt=L+Math.sin(st)*175;C.beginPath(),C.ellipse(_t,Nt,42,65,st+Math.PI/2,0,Math.PI*2),C.fillStyle=k%2===0?"#dc2626":"#0284c7",C.fill(),C.strokeStyle="#18181b",C.lineWidth=4,C.stroke()}for(let k=0;k<12;k++){const st=k*Math.PI/6,_t=y+Math.cos(st)*115,Nt=L+Math.sin(st)*115;C.beginPath(),C.ellipse(_t,Nt,34,52,st+Math.PI/2,0,Math.PI*2),C.fillStyle=k%2===0?"#ec4899":"#10b981",C.fill(),C.strokeStyle="#18181b",C.lineWidth=3.5,C.stroke()}C.beginPath(),C.arc(y,L,62,0,Math.PI*2),C.fillStyle="#fde047",C.fill(),C.strokeStyle="#18181b",C.lineWidth=4,C.stroke(),C.beginPath(),C.arc(y,L,32,0,Math.PI*2),C.fillStyle="#b91c1c",C.fill(),[-1,1].forEach(k=>{C.beginPath(),C.moveTo(y+k*160,L-60),C.bezierCurveTo(y+k*320,L-140,y+k*420,L-40,y+k*340,L+50),C.bezierCurveTo(y+k*280,L+120,y+k*200,L+60,y+k*180,L),C.fillStyle="#0d9488",C.fill(),C.strokeStyle="#18181b",C.lineWidth=4,C.stroke(),C.beginPath(),C.arc(y+k*320,L-30,28,0,Math.PI*2),C.fillStyle="#fde047",C.fill(),C.beginPath(),C.arc(y+k*320,L-30,16,0,Math.PI*2),C.fillStyle="#1e3a8a",C.fill()})})(512,512);const at=(y,L)=>{const k=["#dc2626","#ec4899","#f59e0b","#10b981"];for(let st=0;st<8;st++){const _t=st*Math.PI/4,Nt=y+Math.cos(_t)*48,Vt=L+Math.sin(_t)*48;C.beginPath(),C.arc(Nt,Vt,22,0,Math.PI*2),C.fillStyle=k[st%k.length],C.fill(),C.strokeStyle="#18181b",C.lineWidth=2.5,C.stroke()}C.beginPath(),C.arc(y,L,26,0,Math.PI*2),C.fillStyle="#fde047",C.fill(),C.strokeStyle="#18181b",C.lineWidth=2.5,C.stroke(),C.beginPath(),C.arc(y,L,12,0,Math.PI*2),C.fillStyle="#991b1b",C.fill()};[120,904].forEach(y=>{at(y,320),at(y,704)});const N=new ce(E),B=document.createElement("canvas");B.width=256,B.height=256;const X=B.getContext("2d");X.fillStyle="#b91c1c",X.fillRect(0,0,256,256),X.strokeStyle="#fde047",X.lineWidth=3;for(let y=0;y<256;y+=32)X.beginPath(),X.moveTo(y,0),X.lineTo(y+32,256),X.stroke(),X.beginPath(),X.moveTo(256-y,0),X.lineTo(256-y-32,256),X.stroke();const Q=new ce(B),$=document.createElement("canvas");$.width=512,$.height=256;const q=$.getContext("2d");q.fillStyle="#f59e0b",q.fillRect(0,0,512,256),q.fillStyle="#ea580c",q.beginPath(),q.arc(256,105,45,0,Math.PI*2),q.fill();for(let y=0;y<Math.PI*2;y+=Math.PI/8)q.fillStyle="#dc2626",q.beginPath(),q.arc(256+Math.cos(y)*62,105+Math.sin(y)*62,14,0,Math.PI*2),q.fill();q.fillStyle="#fde047",q.beginPath(),q.arc(256,105,26,0,Math.PI*2),q.fill(),q.fillStyle="#0d9488",q.fillRect(0,185,512,71),q.strokeStyle="#fde047",q.lineWidth=5;for(let y=-20;y<=530;y+=32)q.beginPath(),q.moveTo(y,185),q.lineTo(y+32,256),q.stroke(),q.beginPath(),q.moveTo(y+32,185),q.lineTo(y,256),q.stroke();const et=new ce($),K=new j({color:14427686,metalness:.6,roughness:.3}),nt=new j({color:15658734,metalness:.9,roughness:.15}),J=new j({color:2040865,roughness:.9}),tt=new j({color:165063,metalness:.5,roughness:.4}),ut=new j({color:1409085,roughness:.6}),Tt=new j({map:d,roughness:.4}),wt=new j({map:u,roughness:.35,metalness:.1}),Bt=new j({map:R,roughness:.6,transparent:!0,side:be}),Pt=new j({map:v,roughness:.45,metalness:.1}),Rt=new j({map:et,roughness:.5,side:be}),vt=new j({map:N,roughness:.7,side:be}),H=new j({map:Q,roughness:.6}),Wt=new At,bt=new xt(.045,.045,1.8,12);bt.rotateX(Math.PI/2);const Lt=new A(bt,K);Lt.position.set(0,.65,.1),Wt.add(Lt);const St=new xt(.04,.04,.95,12);St.rotateX(-.18);const Qt=new A(St,K);Qt.position.set(0,.95,-.9),Wt.add(Qt),[-.1,.1].forEach(y=>{const L=new xt(.025,.02,.7,8);L.rotateX(.15);const k=new A(L,nt);k.position.set(y,.48,-1.02),Wt.add(k)});const Ot=new xt(.025,.025,.75,12);Ot.rotateZ(Math.PI/2);const b=new A(Ot,nt);b.position.set(0,1.35,-.85),Wt.add(b),[-.38,.38].forEach(y=>{const L=new xt(.032,.032,.14,12);L.rotateZ(Math.PI/2);const k=new A(L,J);k.position.set(y,1.35,-.85),Wt.add(k)});const x=new te(.09,14,14);x.scale(1,1,.7);const z=new A(x,new fe({color:16777215}));z.position.set(0,1.05,-1.08),Wt.add(z),this.headlights.push(z);const V=new te(.05,12,12);this.bellMesh=new A(V,nt),this.bellMesh.position.set(-.24,1.4,-.85),Wt.add(this.bellMesh);const Y=new rt(.26,.08,.32),Z=new A(Y,J);Z.position.set(0,1.08,-.15),Wt.add(Z),[-.08,.08].forEach(y=>{const L=new xt(.02,.02,.12,8),k=new A(L,nt);k.position.set(y,.98,-.15),Wt.add(k)});const yt=new xt(.06,.06,.28,12);yt.rotateZ(Math.PI/2);const ct=new A(yt,nt);ct.position.set(0,.52,-.15),Wt.add(ct),this.bodyGroup.add(Wt),this.frontWheel=this.createRickshawWheel(.42,K,nt,J),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const Mt=new xt(.46,.46,.12,16,1,!0,0,Math.PI*.8);Mt.rotateZ(Math.PI/2);const It=new A(Mt,tt);It.position.set(0,.44,-1.05),this.bodyGroup.add(It),[-.78,.78].forEach(y=>{const L=this.createRickshawWheel(.48,K,nt,J);L.position.set(y,.48,.95),this.bodyGroup.add(L),this.wheels.push(L);const k=new xt(.53,.53,.16,20,1,!0,0,Math.PI);k.rotateZ(Math.PI/2);const st=new A(k,Pt);st.position.set(y,.48,.95),this.bodyGroup.add(st)});const Et=new At,ot=new rt(1.25,.08,1.25),Kt=new A(ot,ut);Kt.position.set(0,.65,.75),Et.add(Kt);const kt=new rt(.9,.05,.5),it=new A(kt,ut);it.position.set(0,.48,.35),Et.add(it);const ft=new rt(1.2,.38,.58),lt=new A(ft,ut);lt.position.set(0,.86,.88),Et.add(lt),[-.62,.62].forEach((y,L)=>{const k=new qt(1.15,.52),st=new A(k,Rt);st.position.set(y,.96,.75),st.rotation.y=L===0?-Math.PI/2:Math.PI/2,Et.add(st)});const gt=new rt(1.18,.14,.56),zt=new A(gt,H);zt.position.set(0,1.08,.88),Et.add(zt);const $t=new rt(1.16,.22,.1),Gt=new A($t,H);Gt.position.set(0,1.15,1.08),Et.add(Gt),[-.58,.58].forEach(y=>{const L=new rt(.08,.28,.6),k=new A(L,tt);k.position.set(y,1.22,.88),Et.add(k)});const ht=new qt(1.06,.54),U=new A(ht,Tt);U.position.set(0,.66,1.18),U.rotation.y=Math.PI,Et.add(U);const mt=new qt(1.08,.19),dt=new A(mt,wt);dt.position.set(0,.96,1.185),dt.rotation.y=Math.PI,Et.add(dt);const Ct=new qt(1.22,.82),Ut=new A(Ct,Bt);Ut.position.set(0,1.5,1.11),Ut.rotation.y=Math.PI,Et.add(Ut),[-.78,.78].forEach(y=>{const L=new A(new xt(.055,.055,.035,12),nt);L.rotateX(Math.PI/2),L.position.set(y,.62,1.16),Et.add(L);const k=new te(.048,12,12),st=new A(k,new fe({color:15680580}));st.position.set(y,.62,1.18),Et.add(st),this.brakeLights.push(st)});const ee=new xt(.7,.7,.96,24,1,!0,-Math.PI/2,Math.PI);ee.rotateX(-Math.PI/2);const ne=new A(ee,vt);ne.position.set(0,1.5,.62),Et.add(ne);const ue=new Tn(.7,.022,8,24,Math.PI),me=new A(ue,K);me.position.set(0,1.5,.14),Et.add(me);for(let y=0;y<=14;y++){const L=y*Math.PI/14,k=Math.cos(L)*.7,st=1.5+Math.sin(L)*.7,_t=new A(new te(.022,6,6),new j({color:14427686,roughness:.8}));_t.position.set(k,st-.02,.14),Et.add(_t)}const ie=new Tn(.7,.025,8,24,Math.PI),ge=new A(ie,K);ge.position.set(0,1.5,1.1),Et.add(ge);for(let y=0;y<=14;y++){const L=y*Math.PI/14,k=Math.cos(L)*.7,st=1.5+Math.sin(L)*.7,_t=new A(new te(.022,6,6),new j({color:14427686,roughness:.8}));_t.position.set(k,st-.02,1.1),Et.add(_t)}const Ae=new xt(.7,.7,.12,24,1,!0,-Math.PI/2,Math.PI);Ae.rotateX(-Math.PI/2);const Mn=new A(Ae,vt);Mn.position.set(0,1.5,1.04),Et.add(Mn),[-.7,.7].forEach((y,L)=>{const k=new qt(.82,.36),st=new A(k,vt);st.position.set(y,1.34,.65),st.rotation.y=L===0?-Math.PI/2:Math.PI/2,Et.add(st);const _t=new A(new xt(.012,.012,.78,8),nt);_t.position.set(y+(L===0?-.015:.015),1.34,.65),_t.rotation.x=.45,Et.add(_t);const Nt=new A(new xt(.012,.012,.78,8),nt);Nt.position.set(y+(L===0?-.015:.015),1.34,.65),Nt.rotation.x=-.45,Et.add(Nt);const Vt=new A(new te(.022,8,8),K);Vt.position.set(y+(L===0?-.025:.025),1.34,.65),Et.add(Vt)}),[-.64,.64].forEach(y=>{const L=new xt(.016,.016,1.15,8);L.rotateX(.42);const k=new A(L,K);k.position.set(y,1.4,.6),Et.add(k)}),this.bodyGroup.add(Et);const qe=new At,on=new j({color:165063,roughness:.8}),vn=new j({color:9262372,roughness:.7}),en=new j({color:1409085,roughness:.9}),Ye=new rt(.36,.48,.22),nn=new A(Ye,on);nn.position.set(0,1.42,-.25),nn.rotation.x=.22,qe.add(nn);const Zn=new te(.12,14,14),In=new A(Zn,vn);In.position.set(0,1.74,-.32),qe.add(In);const Dn=new Tn(.11,.035,8,16);Dn.rotateX(Math.PI/2);const T=new A(Dn,new j({color:14427686}));T.position.set(0,1.68,-.32),qe.add(T),[-.18,.18].forEach(y=>{const L=new xt(.04,.035,.52,8);L.rotateX(.75);const k=new A(L,vn);k.position.set(y,1.42,-.52),qe.add(k)});const O=new rt(.38,.44,.32),G=new A(O,en);G.position.set(0,1.05,-.18),qe.add(G),this.bodyGroup.add(qe),this.buildCuteRomanticCouple(),[-.32,.32].forEach(y=>{const L=new Le(.12,.65,8);L.rotateX(-Math.PI/2);const k=new fe({color:16759552,transparent:!0,opacity:0}),st=new A(L,k);st.position.set(y,.58,1.25),this.bodyGroup.add(st),this.exhaustFires.push(st)})}createRickshawWheel(t,e,n,i){const r=new At,a=new Tn(t,.038,14,36);a.rotateY(Math.PI/2);const o=new A(a,i);r.add(o);const c=new Tn(t*.92,.02,10,36);c.rotateY(Math.PI/2);const l=new A(c,n);r.add(l);const h=new xt(.06,.06,.14,14);h.rotateZ(Math.PI/2);const d=new A(h,e);r.add(d);for(let p=0;p<14;p++){const f=p*Math.PI/7,_=new xt(.005,.005,t*1.84,4);_.rotateX(f);const M=new A(_,n);r.add(M)}return r}buildCuteRomanticCouple(){this.coupleGroup=new At,this.coupleGroup.position.set(0,0,0);const t=new j({color:16106390,roughness:.6}),e=new j({color:1841431,roughness:.5}),n=new j({color:986638,roughness:.4}),i=new j({color:15680580,roughness:.7}),r=new j({color:1976635,roughness:.8}),a=new j({color:15485081,roughness:.6}),o=new j({color:16638023,roughness:.7}),c=new j({color:16777215,roughness:.8}),l=new At;l.position.set(-.25,1.18,.82);const h=new rt(.32,.42,.24),d=new A(h,i);d.position.set(0,.22,0),d.rotation.y=.16,d.rotation.z=-.06,l.add(d);const p=new te(.12,14,14),f=new A(p,t);f.position.set(.02,.52,.02),f.rotation.y=.26,f.rotation.z=-.08,l.add(f);const _=new te(.13,14,14);_.scale(1.02,1.05,1.02);const M=new A(_,e);M.position.set(.02,.55,.01),l.add(M);const m=new rt(.28,.18,.48),u=new A(m,r);u.position.set(0,-.05,-.16),l.add(u);const w=new xt(.04,.035,.38,8);w.rotateZ(.25);const g=new A(w,i);g.position.set(-.22,.18,0),l.add(g);const S=new xt(.04,.035,.34,8);S.rotateZ(-Math.PI/4),S.rotateX(-.18);const I=new A(S,i);I.position.set(.18,.14,-.07),l.add(I),this.coupleGroup.add(l);const R=new At;R.position.set(.25,1.18,.82);const P=new rt(.28,.38,.22),F=new A(P,a);F.position.set(0,.2,0),F.rotation.y=-.18,F.rotation.z=.08,R.add(F);const v=new rt(.32,.35,.24),E=new A(v,o);E.position.set(0,.22,.02),R.add(E);const C=new te(.11,14,14),W=new A(C,t);W.position.set(-.02,.48,.02),W.rotation.y=-.3,W.rotation.z=.1,R.add(W);const at=new te(.12,14,14);at.scale(1.04,1.06,1.08);const N=new A(at,n);N.position.set(-.02,.51,0),R.add(N);const B=new xt(.04,.02,.32,8);B.rotateX(-.4);const X=new A(B,n);X.position.set(-.01,.38,.15),R.add(X);const Q=new rt(.26,.16,.46),$=new A(Q,c);$.position.set(0,-.05,-.16),R.add($);const q=new xt(.035,.03,.35,8);q.rotateZ(-.25),q.rotateX(-.25);const et=new A(q,a);et.position.set(.2,.16,-.05),R.add(et);const K=new At,nt=new xt(.007,.007,.32,6),J=new j({color:1409085,roughness:.8}),tt=new A(nt,J);tt.position.set(0,.14,0),K.add(tt);const ut=new rt(.07,.012,.035),Tt=new A(ut,J);Tt.position.set(.035,.12,0),Tt.rotation.z=.3,K.add(Tt);const wt=new A(ut,J);wt.position.set(-.035,.18,0),wt.rotation.z=-.3,K.add(wt);const Bt=new j({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Pt=new A(new Lr(.055,1),Bt);Pt.position.set(0,.3,0),Pt.scale.set(1.1,1.25,1.1),K.add(Pt);const Rt=new A(new te(.038,8,8),new j({color:10033947,roughness:.3}));Rt.position.set(0,.32,0),K.add(Rt),K.position.set(.22,.22,-.15),K.rotation.x=-.35,K.rotation.z=-.22,R.add(K);const vt=new xt(.035,.03,.32,8);vt.rotateZ(Math.PI/4),vt.rotateX(-.18);const H=new A(vt,a);H.position.set(-.17,.14,-.07),R.add(H),this.coupleGroup.add(R);const Wt=new At;Wt.position.set(0,1.28,.74);const bt=new A(new te(.045,10,10),t);bt.scale.set(1.3,.9,1.1),bt.position.set(-.02,0,0),Wt.add(bt);const Lt=new A(new te(.042,10,10),t);Lt.scale.set(1.2,.85,1.05),Lt.position.set(.02,.01,.01),Wt.add(Lt),this.coupleGroup.add(Wt),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,r,a){const c=t*1e3/3600/.42*a;this.wheelRotation-=c,this.wheels.forEach(m=>{m.rotation.x=this.wheelRotation});const l=n-e,h=-l*.12;this.currentRoll+=(h-this.currentRoll)*Math.min(1,a*7),this.bodyGroup.rotation.z=this.currentRoll;const d=-l*.08;this.currentYaw+=(d-this.currentYaw)*Math.min(1,a*6),this.bodyGroup.rotation.y=this.currentYaw;let p=0;i?p=.04:r&&(p=-.05),this.currentPitch+=(p-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const f=performance.now()*.001,_=Math.min(1,t/80),M=Math.sin(f*8.5)*.025*_;this.coupleGroup.position.y=M,this.coupleGroup.rotation.z=Math.sin(f*4.2)*.015*_,this.exhaustFires.forEach(m=>{r?(m.material.opacity=.9,m.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):m.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(m=>m.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(m=>m.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.15,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Xp{constructor(){this.group=new At,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new gn,this.collisionSize=new D(1.6,1.95,3.1),this.buildCNG(),this.group.scale.set(.86,.86,.86)}buildCNG(){this.bodyGroup=new At,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#18181b",e.fillRect(0,0,512,384),e.fillStyle="#fde047",e.strokeStyle="#dc2626",e.lineWidth=5,e.font="bold 38px sans-serif",e.textAlign="center",e.strokeText("সি.এন.জি চালিত",256,95),e.fillText("সি.এন.জি চালিত",256,95);const n=["#0284c7","#ef4444","#f59e0b","#10b981"];[{x:195,y:220,r:24,c:0},{x:256,y:195,r:26,c:1},{x:317,y:220,r:24,c:2},{x:256,y:260,r:22,c:3}].forEach(it=>{e.fillStyle=n[it.c],e.beginPath(),e.ellipse(it.x,it.y,it.r,it.r*1.25,0,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=2,e.stroke(),e.strokeStyle="#e2e8f0",e.lineWidth=2,e.beginPath(),e.moveTo(it.x,it.y+it.r*1.25),e.lineTo(256,340),e.stroke()});const r=new ce(t),a=document.createElement("canvas");a.width=512,a.height=160;const o=a.getContext("2d");o.fillStyle="#15803d",o.fillRect(0,0,512,160),o.fillStyle="#ffffff",o.fillRect(20,15,472,58),o.strokeStyle="#0284c7",o.lineWidth=3,o.strokeRect(20,15,472,58),o.fillStyle="#0284c7",o.font="bold 32px sans-serif",o.textAlign="center",o.fillText("সি.এন.জি চালিত",256,56),o.fillStyle="#f59e0b",o.fillRect(20,85,472,60),o.strokeStyle="#dc2626",o.lineWidth=3,o.strokeRect(20,85,472,60),o.fillStyle="#b91c1c",o.font="bold 34px sans-serif",o.fillText("মা বাবার দোয়া",256,128);const c=new ce(a),l=document.createElement("canvas");l.width=384,l.height=384;const h=l.getContext("2d");h.fillStyle="rgba(21, 128, 61, 0.4)",h.fillRect(0,0,384,384),h.strokeStyle="#15803d",h.lineWidth=4;for(let it=0;it<384;it+=28)h.beginPath(),h.moveTo(it,0),h.lineTo(it,384),h.stroke(),h.beginPath(),h.moveTo(0,it),h.lineTo(384,it),h.stroke();h.fillStyle="#fef08a",h.strokeStyle="#dc2626",h.lineWidth=6,h.font="900 85px sans-serif",h.textAlign="center",h.strokeText("OK",192,225),h.fillText("OK",192,225);const d=new ce(l),p=document.createElement("canvas");p.width=256,p.height=128;const f=p.getContext("2d");f.fillStyle="#15803d",f.fillRect(0,0,256,128);const _=["#ef4444","#f59e0b","#0284c7"];for(let it=0;it<3;it++)f.fillStyle=_[it],f.fillRect(35,25+it*26,186,18);f.fillStyle="#ffffff",f.strokeStyle="#334155",f.lineWidth=3,f.beginPath(),f.arc(128,64,18,0,Math.PI*2),f.fill(),f.stroke();const M=new ce(p),m=document.createElement("canvas");m.width=512,m.height=360;const u=m.getContext("2d");u.fillStyle="#15803d",u.fillRect(0,0,512,360),u.strokeStyle="#166534",u.lineWidth=4,u.strokeRect(6,6,500,348);for(let it=50;it<=210;it+=22)u.fillStyle="#14532d",u.fillRect(25,it,105,8),u.fillStyle="#22c55e",u.fillRect(25,it+8,105,2),u.fillStyle="#14532d",u.fillRect(382,it,105,8),u.fillStyle="#22c55e",u.fillRect(382,it+8,105,2),it>=165&&(u.fillStyle="#14532d",u.fillRect(145,it,222,7),u.fillStyle="#22c55e",u.fillRect(145,it+7,222,2));u.fillStyle="#b91c1c",u.beginPath(),u.roundRect(24,18,95,26,6),u.fill(),u.strokeStyle="#fde047",u.lineWidth=2,u.stroke(),u.fillStyle="#ffffff",u.font="bold 16px sans-serif",u.textAlign="center",u.fillText("উত্তরা",71,37),u.fillStyle="#065f46",u.beginPath(),u.roundRect(390,18,98,26,6),u.fill(),u.strokeStyle="#fde047",u.lineWidth=2,u.stroke(),u.fillStyle="#fde047",u.font="bold 13px sans-serif",u.textAlign="center",u.fillText("RE CNG",439,32),u.fillStyle="#ffffff",u.font="9px sans-serif",u.fillText("FOUR STROKE",439,42),u.fillStyle="#047857",u.beginPath(),u.roundRect(176,20,160,72,8),u.fill(),u.strokeStyle="#ffffff",u.lineWidth=3,u.stroke(),u.fillStyle="#ffffff",u.font="bold 19px sans-serif",u.textAlign="center",u.fillText("ঢাকা মেট্রো-থ",256,48),u.font="bold 24px sans-serif",u.fillText("১১-৫০৫১",256,80),u.fillStyle="#facc15",u.beginPath(),u.roundRect(138,104,236,44,6),u.fill(),u.strokeStyle="#dc2626",u.lineWidth=3,u.stroke(),u.fillStyle="#dc2626",u.beginPath(),u.arc(158,126,9,0,Math.PI*2),u.arc(354,126,9,0,Math.PI*2),u.fill(),u.fillStyle="#1c1917",u.font="900 24px sans-serif",u.textAlign="center",u.fillText("UTTARA",256,134);const w=(it,ft,lt)=>{const gt=["#0284c7","#10b981","#f59e0b","#ef4444","#ec4899"],zt=Math.PI/gt.length;for(let $t=0;$t<gt.length;$t++)u.fillStyle=gt[$t],u.beginPath(),u.moveTo(it,ft),u.arc(it,ft,lt,Math.PI+$t*zt,Math.PI+($t+1)*zt),u.closePath(),u.fill();u.strokeStyle="#ffffff",u.lineWidth=2,u.stroke()};w(65,305,46),w(447,305,46);const g=new ce(m),S=new j({color:1409085,metalness:.45,roughness:.35});new j({color:16096779,roughness:.4});const I=new j({color:1579035,roughness:.9}),R=new j({color:15658734,metalness:.9,roughness:.15}),P=new j({color:2040865,roughness:.9}),F=new j({color:9741240,metalness:.6,roughness:.3}),v=new zi({color:988970,transparent:!0,opacity:.55,roughness:.1}),E=new zi({color:9684477,transparent:!0,opacity:.48,roughness:.08,transmission:.65}),C=new j({color:1579035,roughness:.85}),W=new j({map:r,roughness:.85}),at=new j({map:c,roughness:.5}),N=new j({map:d,transparent:!0,opacity:.92,side:be}),B=new j({map:M,roughness:.4}),X=new j({map:g,roughness:.45,metalness:.1}),Q=new rt(1.65,.45,2.7),$=new A(Q,S);$.position.set(0,.48,0),this.bodyGroup.add($),[-.83,.83].forEach((it,ft)=>{const lt=new qt(2.35,.42),gt=new A(lt,at);gt.position.set(it,.48,.05),gt.rotation.y=ft===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(gt)});const q=new xt(.55,.82,.85,16,1,!1,-Math.PI/2,Math.PI);q.rotateX(Math.PI/2);const et=new A(q,S);et.position.set(0,.72,-1.25),this.bodyGroup.add(et);const K=new qt(.85,.38),nt=new A(K,B);nt.position.set(0,.85,-1.58),this.bodyGroup.add(nt);const J=new qt(1.45,.68),tt=new A(J,v);tt.position.set(0,1.45,-.92),tt.rotation.x=-.25,this.bodyGroup.add(tt);const ut=new xt(.85,.85,2.25,24,1,!0,Math.PI*.1,Math.PI*.8);ut.rotateZ(Math.PI/2);const Tt=new A(ut,I);Tt.position.set(0,1.82,.15),this.bodyGroup.add(Tt);const wt=new A(new qt(1.58,.72),I);wt.position.set(0,1.62,1.28),wt.rotation.y=Math.PI,this.bodyGroup.add(wt);const Bt=new A(new rt(1.18,.52,.04),C);Bt.position.set(0,1.62,1.3),this.bodyGroup.add(Bt);const Pt=new A(new qt(1.1,.44),E);Pt.position.set(0,1.62,1.325),Pt.rotation.y=Math.PI,this.bodyGroup.add(Pt),[-.84,.84].forEach((it,ft)=>{const lt=new qt(1.2,.55),gt=new A(lt,W);gt.position.set(it,1.76,.42),gt.rotation.y=ft===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(gt)}),[-.83,.83].forEach((it,ft)=>{const lt=new qt(1.2,.85),gt=new A(lt,N);gt.position.set(it,1.25,.1),gt.rotation.y=ft===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(gt)}),this.frontWheel=this.createCNGWheel(.32,P,F),this.frontWheel.position.set(0,.32,-1.42),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const Rt=new xt(.38,.38,.22,16,1,!0,0,Math.PI);Rt.rotateZ(Math.PI/2);const vt=new A(Rt,S);vt.position.set(0,.35,-1.42),this.bodyGroup.add(vt);const H=new xt(.04,.04,.55,8),Wt=new A(H,R);Wt.position.set(0,.65,-1.42),this.bodyGroup.add(Wt),[-.75,.75].forEach(it=>{const ft=this.createCNGWheel(.35,P,F);ft.position.set(it,.35,.85),this.bodyGroup.add(ft),this.wheels.push(ft)});const bt=new xt(.02,.02,.35,8);bt.rotateX(.4);const Lt=new A(bt,R);Lt.position.set(0,.76,-1.55),this.bodyGroup.add(Lt);const St=new te(.12,16,16);St.scale(1,1,.65);const Qt=new A(St,new fe({color:16777215}));Qt.position.set(0,.95,-1.62),this.bodyGroup.add(Qt),this.headlights.push(Qt);const Ot=new A(new qt(1.64,.94),X);Ot.position.set(0,.88,1.35),Ot.rotation.y=Math.PI,this.bodyGroup.add(Ot),[-.66,.66].forEach(it=>{const ft=new rt(.13,.28,.05),lt=new A(ft,C);lt.position.set(it,.82,1.37),this.bodyGroup.add(lt);const gt=new rt(.11,.13,.04),zt=new A(gt,new fe({color:15680580}));zt.position.set(it,.88,1.39),this.bodyGroup.add(zt),this.brakeLights.push(zt);const $t=new rt(.11,.09,.04),Gt=new A($t,new fe({color:16317180}));Gt.position.set(it,.75,1.39),this.bodyGroup.add(Gt)});const b=new At;b.position.set(0,0,0);const x=new xt(.035,.035,1.72,12);x.rotateZ(Math.PI/2);const z=new A(x,S);z.position.set(0,.38,1.44),b.add(z),[-.85,.85].forEach(it=>{const ft=new xt(.035,.035,.25,10);ft.rotateX(Math.PI/2);const lt=new A(ft,S);lt.position.set(it,.38,1.34),b.add(lt)});const V=document.createElement("canvas");V.width=128,V.height=64;const Y=V.getContext("2d");Y.fillStyle="#facc15",Y.fillRect(0,0,128,64),Y.strokeStyle="#1c1917",Y.lineWidth=4;for(let it=-64;it<192;it+=16)Y.beginPath(),Y.moveTo(it,0),Y.lineTo(it+32,64),Y.stroke(),Y.beginPath(),Y.moveTo(it+32,0),Y.lineTo(it,64),Y.stroke();const Z=new ce(V),yt=new A(new qt(.44,.12),new j({map:Z,roughness:.4}));yt.position.set(0,.38,1.48),yt.rotation.y=Math.PI,b.add(yt);const ct=new xt(.022,.022,1.48,10);ct.rotateZ(Math.PI/2);const Mt=new A(ct,R);Mt.position.set(0,.26,1.43),b.add(Mt),[-.68,.68].forEach(it=>{const ft=new rt(.24,.18,.02),lt=new A(ft,P);lt.position.set(it,.22,1.36),b.add(lt)}),this.bodyGroup.add(b);const It=new At,Et=new j({color:9262372,roughness:.7}),ot=new j({color:165063,roughness:.8}),Kt=new A(new rt(.38,.45,.22),ot);Kt.position.set(0,1.15,-.42),It.add(Kt);const kt=new A(new te(.12,12,12),Et);kt.position.set(0,1.48,-.42),It.add(kt),this.bodyGroup.add(It),[-.35,.35].forEach(it=>{const ft=new Le(.12,.7,8);ft.rotateX(-Math.PI/2);const lt=new fe({color:440020,transparent:!0,opacity:0}),gt=new A(ft,lt);gt.position.set(it,.42,1.45),this.bodyGroup.add(gt),this.exhaustFires.push(gt)})}createCNGWheel(t,e,n){const i=new At,r=new xt(t,t,.22,18);r.rotateZ(Math.PI/2);const a=new A(r,e);i.add(a);const o=new xt(t*.65,t*.65,.23,14);o.rotateZ(Math.PI/2);const c=new A(o,n);return i.add(c),i}update(t,e,n,i,r,a){const c=t*1e3/3600/.32*a;this.wheelRotation-=c,this.wheels.forEach(f=>{f.rotation.x=this.wheelRotation});const l=n-e,h=-l*.14;this.currentRoll+=(h-this.currentRoll)*Math.min(1,a*8),this.bodyGroup.rotation.z=this.currentRoll;const d=-l*.09;this.currentYaw+=(d-this.currentYaw)*Math.min(1,a*7),this.bodyGroup.rotation.y=this.currentYaw;let p=0;i?p=.045:r&&(p=-.04),this.currentPitch+=(p-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch,this.exhaustFires.forEach(f=>{r?(f.material.opacity=.95,f.scale.set(1.2+Math.random()*.4,1.2+Math.random()*.5,1.2+Math.random()*.4),f.material.color.setHex(Math.random()>.4?440020:3718648)):f.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(f=>f.scale.set(1.4,1.4,1.4))):this.headlights.forEach(f=>f.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.05,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.4,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.15,this.bodyGroup.position.y=.3}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class qp{constructor(){this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[]}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let o=0;o<128;o+=8)e.fillStyle="#6b7280",e.fillRect(o,0,4,128),e.fillStyle="#d1d5db",e.fillRect(o+4,0,4,128);const n=new ce(t);n.wrapS=tn,n.wrapT=tn,n.repeat.set(4,4),this.tinRoofMat=new j({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new j({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d");r.fillStyle="#c8a165",r.fillRect(0,0,128,128),r.strokeStyle="#8c6239",r.lineWidth=3;for(let o=0;o<=128;o+=16)r.beginPath(),r.moveTo(0,o),r.lineTo(128,o),r.stroke(),r.beginPath(),r.moveTo(o,0),r.lineTo(o,128),r.stroke();const a=new ce(i);a.wrapS=tn,a.wrapT=tn,a.repeat.set(2,2),this.bambooWallMat=new j({map:a,roughness:.85,color:13935475}),this.woodMat=new j({color:6045747,roughness:.85}),this.mudPlinthMat=new j({color:8150594,roughness:.95}),this.brickMat=new j({color:10239278,roughness:.9}),this.palmLeafMat=new j({color:3046706,roughness:.6,side:be}),this.bananaLeafMat=new j({color:4431943,roughness:.5,side:be}),this.treeCrownMat=new j({color:1793568,roughness:.85}),this.bambooTrunkMat=new j({color:6732650,roughness:.4}),this.palmTrunkMat=new j({color:7162945,roughness:.9}),this.hayMat=new j({color:13934615,roughness:.95}),this.paddyFieldMat=new j({color:3706428,roughness:.8}),this.waterMat=new j({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new j({color:10395294,roughness:.7}),this.cowWhiteMat=new j({color:16119280,roughness:.6}),this.cowBrownMat=new j({color:9262372,roughness:.65}),this.cowBlackPatchMat=new j({color:2171169,roughness:.7}),this.hornMat=new j({color:3621201,roughness:.4}),this.ropeMat=new fe({color:12756553}),this.duckMat=new j({color:16777215,roughness:.5}),this.beakMat=new j({color:16750592,roughness:.4}),this.smokeMat=new fe({color:16777215,transparent:!0,opacity:.35})}createCow(t="brown"){const e=new At;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new rt(.9,.95,1.7),r=new A(i,n);r.position.set(0,1.05,0),r.castShadow=!0,e.add(r);const a=new Le(.3,.45,8),o=new A(a,n);o.position.set(0,1.62,-.45),o.rotation.x=-.2,o.castShadow=!0,e.add(o);const c=new rt(.12,.45,.5),l=new A(c,n);l.position.set(0,.85,-.85),e.add(l);const h=new At;h.position.set(0,1.25,-.85);const d=new rt(.45,.55,.6),p=new A(d,n);p.position.set(0,.15,-.2),p.rotation.x=.35,h.add(p);const f=new rt(.48,.52,.7),_=new A(f,n);_.position.set(0,.28,-.55),h.add(_);const M=new j({color:2236962,roughness:.8}),m=new rt(.36,.3,.3),u=new A(m,M);u.position.set(0,.18,-.92),h.add(u),[-.22,.22].forEach(B=>{const X=new Le(.06,.35,6),Q=new A(X,this.hornMat);Q.position.set(B,.56,-.48),Q.rotation.z=B>0?-.4:.4,Q.rotation.x=.3,h.add(Q);const $=new rt(.22,.08,.1),q=new A($,n);q.position.set(B>0?.32:-.32,.38,-.45),q.rotation.z=B>0?-.35:.35,h.add(q)}),e.add(h),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(B=>{const X=new rt(.2,.75,.2),Q=new A(X,n);Q.position.set(B.x,.38,B.z),Q.castShadow=!0,e.add(Q);const $=new rt(.22,.1,.22),q=new A($,this.hornMat);q.position.set(B.x,.05,B.z),e.add(q)});const g=new At;g.position.set(0,1.35,.85);const S=new xt(.03,.03,.85,6);S.translate(0,-.42,0);const I=new A(S,n);g.add(I);const R=new Le(.08,.25,6);R.translate(0,-.9,0);const P=new A(R,this.hornMat);g.add(P),e.add(g);const F=new xt(.08,.1,1.2,8),v=new A(F,this.woodMat);v.position.set(.9,.6,-1.2),e.add(v);const E=[new D(0,1.2,-.8),new D(.45,.75,-1),new D(.9,.85,-1.2)],C=new Ss(E),W=new ki(C,8,.02,4,!1),at=new A(W,this.ropeMat);e.add(at);const N={type:"cow",head:h,tail:g,seed:Math.random()*10};return this.animatedAnimals.push(N),e}createVillageHouse(t=!1){const e=new At;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new rt(6.6,.45,5.2),r=new A(i,this.mudPlinthMat);r.position.set(0,.22,0),r.receiveShadow=!0,e.add(r);const a=new rt(5.8,2.6,3.8),o=new A(a,this.bambooWallMat);o.position.set(0,1.75,-.4),o.castShadow=!0,o.receiveShadow=!0,e.add(o);const c=new rt(.85,1.8,.08),l=new A(c,this.woodMat);l.position.set(.6,1.35,1.52),e.add(l),[-1.6,-.6].forEach(_=>{const M=new rt(.7,.8,.08),m=new A(M,this.woodMat);m.position.set(_,1.8,1.52),e.add(m)});const h=new rt(6.6,.1,2.8),d=new A(h,n);d.position.set(0,3.65,-.9),d.rotation.x=-.52,d.castShadow=!0,e.add(d);const p=new rt(6.6,.1,3.4),f=new A(p,n);return f.position.set(0,3.5,.8),f.rotation.x=.46,f.castShadow=!0,e.add(f),[-2.5,-.8,.8,2.5].forEach(_=>{const M=new xt(.08,.08,2.3,8),m=new A(M,this.woodMat);m.position.set(_,1.6,2.1),m.castShadow=!0,e.add(m)}),e}createTeaStall(){const t=new At;t.name="cha_er_tong";const e=new rt(3.2,1,1.8),n=new A(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new rt(3.8,.08,2.8),r=new A(i,this.tinRoofMat);r.position.set(0,2.3,.2),r.rotation.x=.2,r.castShadow=!0,t.add(r),[-1.6,1.6].forEach(M=>{const m=new xt(.07,.07,2.2,6),u=new A(m,this.woodMat);u.position.set(M,1.1,1.2),t.add(u)});const a=new rt(3,.08,.45),o=new A(a,this.woodMat);o.position.set(0,.45,1.8),t.add(o),[-1.2,1.2].forEach(M=>{const m=new rt(.08,.45,.4),u=new A(m,this.woodMat);u.position.set(M,.22,1.8),t.add(u)});const c=new j({color:13421772,metalness:.9,roughness:.2}),l=new xt(.18,.22,.35,10),h=new A(l,c);h.position.set(-.6,1.18,.2),t.add(h);const d=new zi({color:16777215,transmission:.7,roughness:.1}),p=new xt(.12,.12,.28,8),f=new A(p,d);f.position.set(.6,1.15,.1),t.add(f);const _=new At;_.position.set(-.6,1.45,.2),t.add(_);for(let M=0;M<4;M++){const m=new te(.08,6,6),u=new A(m,this.smokeMat);u.position.y=M*.25,_.add(u)}return this.smokeEmitters.push(_),t}createHaystack(){const t=new At;t.name="khorer_gada";const e=new xt(1.6,1.9,1.4,12),n=new A(e,this.hayMat);n.position.y=.7,n.castShadow=!0,t.add(n);const i=new xt(1,1.6,1.2,12),r=new A(i,this.hayMat);r.position.y=2,r.castShadow=!0,t.add(r);const a=new Le(1,1.5,12),o=new A(a,this.hayMat);o.position.y=3.35,o.castShadow=!0,t.add(o);const c=new xt(.04,.05,4.8,6),l=new A(c,this.bambooTrunkMat);return l.position.y=2.4,t.add(l),t}createJatriChawni(t=1){const e=new At;e.name="jatri_chawni";const n=new rt(5,.35,2.3),i=new A(n,this.concreteMat);i.position.set(0,.175,0),i.receiveShadow=!0,e.add(i);const r=new rt(5.2,.14,.22),a=new A(r,this.brickMat);a.position.set(0,.07,-1.1),e.add(a);const o=new rt(4.8,2.5,.18),c=new A(o,this.brickMat);c.position.set(0,1.45,1.02),c.castShadow=!0,e.add(c);const l=new qt(4.6,2.3),h=new A(l,this.culvertRailingMaterial);h.position.set(0,1.45,.92),e.add(h),[[-2.1,-.92],[2.1,-.92],[-2.1,.92],[2.1,.92]].forEach(([O,G])=>{const y=new xt(.08,.09,2.6,12),L=new A(y,this.culvertRailingMaterial);L.position.set(O,1.45,G),L.castShadow=!0,e.add(L);const k=new xt(.12,.12,.35,12),st=new A(k,new j({color:1409085}));st.position.set(O,.45,G),e.add(st)});const p=new xt(2.4,2.4,5.2,24,1,!0,Math.PI*.2,Math.PI*.6);p.rotateZ(Math.PI/2);const f=new A(p,this.tinRoofMat);f.position.set(0,2.75,.05),f.castShadow=!0,e.add(f),[-1.8,0,1.8].forEach(O=>{const G=new rt(.06,.06,2.1),y=new A(G,new j({color:3359061}));y.position.set(O,2.55,0),e.add(y)});const _=new Np(16772565,3.5,16);_.position.set(0,2.45,.25),e.add(_);const M=new xt(.14,.18,.28,8,1,!0),m=new A(M,new j({color:1976635,wireframe:!0}));m.position.set(0,2.48,.25),e.add(m);const u=new A(new te(.1,12,12),new fe({color:16772565}));u.position.set(0,2.48,.25),e.add(u);const w=document.createElement("canvas");w.width=1024,w.height=256;const g=w.getContext("2d");g.fillStyle="#15803d",g.fillRect(0,0,1024,256),g.strokeStyle="#f59e0b",g.lineWidth=14,g.strokeRect(10,10,1004,236),g.strokeStyle="#fde047",g.lineWidth=4,g.strokeRect(24,24,976,208);const S=(O,G)=>{g.fillStyle="#fde047",g.beginPath(),g.roundRect(O,G,76,44,8),g.fill(),g.fillStyle="#0284c7",g.fillRect(O+8,G+6,20,18),g.fillRect(O+34,G+6,20,18),g.fillRect(O+58,G+6,12,18),g.fillStyle="#18181b",g.beginPath(),g.arc(O+20,G+44,9,0,Math.PI*2),g.arc(O+56,G+44,9,0,Math.PI*2),g.fill()};S(42,105),S(906,105),g.fillStyle="#ffffff",g.font="900 86px sans-serif",g.textAlign="center",g.textBaseline="middle",g.shadowColor="rgba(0,0,0,0.9)",g.shadowBlur=12,g.fillText("BUS STOP",512,85),g.fillStyle="#fde047",g.font="bold 54px sans-serif",g.shadowColor="rgba(0,0,0,0.8)",g.shadowBlur=8,g.fillText("বাস স্টপ  |  যাত্রী ছাউনি",512,185),g.shadowBlur=0;const I=new ce(w),R=new At;R.position.set(0,2.65,-1.02);const P=new rt(4.24,.84,.07),F=new j({color:1332013,roughness:.5}),v=new A(P,F);R.add(v);const E=new j({map:I,roughness:.35,emissive:1409085,emissiveIntensity:.15}),C=new qt(4.18,.78);C.rotateY(Math.PI);const W=new A(C,E);W.position.set(0,0,-.038),R.add(W);const at=new qt(4.18,.78),N=new A(at,E);N.position.set(0,0,.038),R.add(N),e.add(R);const B=new At,X=t>0?-2.25:2.25;B.position.set(X,0,-1.15);const Q=new A(new xt(.18,.22,.3,12),this.concreteMat);Q.position.set(0,.15,0),B.add(Q);const $=new j({color:3359061,metalness:.8,roughness:.2}),q=new A(new xt(.045,.045,3.1,12),$);q.position.set(0,1.55,0),B.add(q);const et=document.createElement("canvas");et.width=512,et.height=512;const K=et.getContext("2d");K.fillStyle="#0284c7",K.beginPath(),K.roundRect(16,16,480,480,48),K.fill(),K.strokeStyle="#facc15",K.lineWidth=20,K.stroke(),K.strokeStyle="#ffffff",K.lineWidth=4,K.beginPath(),K.roundRect(36,36,440,440,36),K.stroke(),K.fillStyle="#ffffff",K.beginPath(),K.roundRect(135,75,242,130,24),K.fill(),K.fillStyle="#0284c7",K.fillRect(155,95,60,50),K.fillRect(230,95,60,50),K.fillRect(305,95,52,50),K.fillStyle="#18181b",K.beginPath(),K.arc(190,205,22,0,Math.PI*2),K.arc(320,205,22,0,Math.PI*2),K.fill(),K.fillStyle="#ffffff",K.font="900 72px sans-serif",K.textAlign="center",K.textBaseline="middle",K.shadowColor="rgba(0,0,0,0.85)",K.shadowBlur=8,K.fillText("BUS STOP",256,310),K.fillStyle="#fde047",K.font="bold 56px sans-serif",K.fillText("বাস স্টপ",256,405),K.shadowBlur=0;const nt=new ce(et),J=new j({map:nt,roughness:.35,emissive:165063,emissiveIntensity:.12}),tt=new At;tt.position.set(0,2.7,0);const ut=new A(new rt(.96,.96,.06),new j({color:223649,roughness:.4}));tt.add(ut);const Tt=new qt(.92,.92);Tt.rotateY(Math.PI);const wt=new A(Tt,J);wt.position.set(0,0,-.032),tt.add(wt);const Bt=new qt(.92,.92),Pt=new A(Bt,J);Pt.position.set(0,0,.032),tt.add(Pt),tt.rotation.y=t>0?.35:-.35,B.add(tt),e.add(B);const Rt=document.createElement("canvas");Rt.width=512,Rt.height=320;const vt=Rt.getContext("2d");vt.fillStyle="#f8fafc",vt.fillRect(0,0,512,320),vt.strokeStyle="#15803d",vt.lineWidth=14,vt.strokeRect(8,8,496,304),vt.strokeStyle="#dc2626",vt.lineWidth=4,vt.strokeRect(22,22,468,276),vt.fillStyle="#15803d",vt.font="bold 30px sans-serif",vt.textAlign="center",vt.textBaseline="middle",vt.fillText("বাংলাদেশ সড়ক পরিবহন (BRTC)",256,55),vt.fillStyle="#dc2626",vt.font="900 68px sans-serif",vt.shadowColor="rgba(0,0,0,0.3)",vt.shadowBlur=4,vt.fillText("BUS STOP",256,140),vt.fillStyle="#1e293b",vt.font="bold 50px sans-serif",vt.shadowBlur=0,vt.fillText("বাস স্টপ",256,220),vt.fillStyle="#64748b",vt.font="bold 24px sans-serif",vt.fillText("HIGHWAY PASSENGER SHELTER",256,275);const H=new ce(Rt),Wt=new j({map:H,roughness:.35,emissive:16777215,emissiveIntensity:.08}),bt=new A(new qt(1.2,.75),Wt),Lt=t>0?-2.12:2.12;bt.position.set(Lt,1.85,0),bt.rotation.y=t>0?-Math.PI/2:Math.PI/2,e.add(bt);const St=new At;St.position.set(0,0,0);const Qt=new rt(4.4,.12,.7),Ot=new A(Qt,this.woodMat);Ot.position.set(0,.65,.5),Ot.castShadow=!0,St.add(Ot);const b=new rt(4.4,.42,.1),x=new A(b,this.woodMat);x.position.set(0,1.12,.82),x.castShadow=!0,St.add(x),[-1.9,0,1.9].forEach(O=>{const G=new rt(.12,.35,.58),y=new A(G,this.concreteMat);y.position.set(O,.45,.5),St.add(y);const L=new rt(.08,.55,.08),k=new A(L,new j({color:3359061}));k.position.set(O,.95,.82),St.add(k)}),e.add(St);const z=new At;z.scale.set(1.35,1.35,1.35),z.position.set(0,.72,.48);const V=new j({color:16106390,roughness:.6}),Y=new j({color:959977,roughness:.7}),Z=new j({color:1976635,roughness:.8}),yt=new j({color:1579035,roughness:.5}),ct=new j({color:14362487,roughness:.6}),Mt=new j({color:16436245,roughness:.7}),It=new j({color:16777215,roughness:.8}),Et=new j({color:986638,roughness:.4}),ot=new At;ot.position.set(-.26,0,0);const Kt=new A(new rt(.36,.46,.24),Y);Kt.position.set(0,.25,0),Kt.rotation.y=.35,Kt.rotation.z=-.12,ot.add(Kt);const kt=new A(new te(.12,14,14),V);kt.position.set(.04,.58,.02),kt.rotation.y=.45,kt.rotation.z=-.12,ot.add(kt);const it=new A(new te(.13,14,14),yt);it.scale.set(1.02,1.05,1.02),it.position.set(.04,.61,.01),ot.add(it);const ft=new A(new rt(.34,.16,.44),Z);ft.position.set(0,-.02,-.15),ot.add(ft),[-.1,.1].forEach(O=>{const G=new A(new xt(.05,.045,.38,8),Z);G.position.set(O,-.22,-.32),ot.add(G)});const lt=new A(new xt(.045,.04,.34,8),Y);lt.position.set(.18,.14,-.05),lt.rotation.z=-Math.PI/4,lt.rotation.x=-.18,ot.add(lt),z.add(ot);const gt=new At;gt.position.set(.26,0,0);const zt=new A(new rt(.32,.42,.22),ct);zt.position.set(0,.23,0),zt.rotation.y=-.32,zt.rotation.z=.14,gt.add(zt);const $t=new A(new rt(.34,.36,.24),Mt);$t.position.set(0,.24,.02),gt.add($t);const Gt=new A(new te(.115,14,14),V);Gt.position.set(-.06,.54,.02),Gt.rotation.y=-.38,Gt.rotation.z=.22,gt.add(Gt);const ht=new A(new te(.125,14,14),Et);ht.scale.set(1.04,1.06,1.08),ht.position.set(-.06,.57,0),gt.add(ht);const U=new A(new xt(.04,.02,.36,8),Et);U.position.set(-.04,.42,.16),U.rotation.x=-.35,gt.add(U);const mt=new A(new rt(.3,.15,.42),It);mt.position.set(0,-.02,-.15),gt.add(mt),[-.08,.08].forEach(O=>{const G=new A(new xt(.042,.038,.38,8),It);G.position.set(O,-.22,-.32),gt.add(G)});const dt=new A(new xt(.04,.035,.32,8),ct);dt.position.set(-.16,.14,-.05),dt.rotation.z=Math.PI/4,dt.rotation.x=-.18,gt.add(dt);const Ct=new At;Ct.position.set(.22,.22,-.2),Ct.rotation.x=-.25,Ct.rotation.z=-.15;const Ut=new xt(.016,.018,.38,8),ee=new j({color:1409085,roughness:.8}),ne=new A(Ut,ee);Ct.add(ne);const ue=new qt(.12,.06),me=new j({color:1483594,roughness:.6,side:be});[-1,1].forEach(O=>{const G=new A(ue,me);G.position.set(O*.06,-.04,0),G.rotation.z=O*.55,Ct.add(G)});const ie=new Le(.07,.09,5);ie.rotateX(Math.PI);const ge=new A(ie,me);ge.position.set(0,.18,0),Ct.add(ge);const Ae=new j({color:14427686,roughness:.35,metalness:.1}),Mn=new te(.09,14,14);Mn.scale(1.15,1.35,1.15);const qe=new A(Mn,Ae);qe.position.set(0,.26,0),Ct.add(qe);const on=new Tn(.08,.035,8,16);on.rotateX(Math.PI/2);const vn=new A(on,Ae);vn.position.set(0,.23,0),Ct.add(vn),gt.add(Ct),z.add(gt);const en=new A(new te(.065,12,12),V);en.scale.set(1.6,.95,1.2),en.position.set(0,.1,-.06),z.add(en);const Ye=new At;Ye.position.set(0,1.38,.05);const nn=new fe({color:16723285}),Zn=new A(new te(.075,10,10),nn);Zn.position.set(-.05,.04,0),Ye.add(Zn);const In=new A(new te(.075,10,10),nn);In.position.set(.05,.04,0),Ye.add(In);const Dn=new Le(.11,.14,12);Dn.rotateZ(Math.PI);const T=new A(Dn,nn);return T.position.set(0,-.04,0),Ye.add(T),z.add(Ye),e.add(z),this.animatedAnimals.push({type:"couple",mesh:z,heart:Ye,seed:Math.random()*10}),e}createCoconutTree(){const t=new At;t.name="coconut_tree";const e=new Ss([new D(0,0,0),new D(.4,3.5,.2),new D(.9,7.5,.5),new D(1.1,10.5,.7)]),n=new ki(e,12,.24,8,!1),i=new A(n,this.palmTrunkMat);i.castShadow=!0,t.add(i);const r=new D(1.1,10.5,.7),a=10;for(let o=0;o<a;o++){const c=o*Math.PI*2/a,l=new qt(.8,3.4);l.translate(0,1.7,0);const h=new A(l,this.palmLeafMat);h.position.copy(r),h.rotation.y=c,h.rotation.x=.85,h.castShadow=!0,t.add(h)}for(let o=0;o<5;o++){const c=new te(.2,8,8),l=new A(c,this.palmLeafMat);l.position.set(r.x+(Math.random()-.5)*.4,r.y-.25,r.z+(Math.random()-.5)*.4),t.add(l)}return t}createBananaTree(){const t=new At;t.name="banana_tree";const e=new xt(.18,.28,2.8,8),n=new A(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let r=0;r<i;r++){const a=r*Math.PI*2/i,o=new qt(.75,2.4);o.translate(0,1.2,0);const c=new A(o,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=a,c.rotation.x=.95,c.castShadow=!0,t.add(c)}return t}createBambooGrove(){const t=new At;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,r=new xt(.06,.08,i,6),a=new A(r,this.bambooTrunkMat);a.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),a.rotation.z=(Math.random()-.5)*.15,a.rotation.x=(Math.random()-.5)*.15,t.add(a);const o=new te(.8+Math.random()*.5,6,6),c=new A(o,this.palmLeafMat);c.position.set(a.position.x,i-.3,a.position.z),t.add(c)}return t}createElectricPole(){const t=new At;t.name="electric_pole";const e=new xt(.14,.18,8.5,8),n=new A(e,this.concreteMat);n.position.y=4.25,n.castShadow=!0,t.add(n);const i=new rt(2.2,.12,.12),r=new A(i,this.concreteMat);return r.position.y=7.8,t.add(r),[-.9,0,.9].forEach(a=>{const o=new xt(.04,.05,.2,6),c=new A(o,this.tinRoofMat);c.position.set(a,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new At;n.name="village_pond";const i=new qt(t,e);i.rotateX(-Math.PI/2);const r=new A(i,this.waterMat);r.position.y=.05,n.add(r),this.mudPlinthMat;const a=3;for(let o=0;o<a;o++){const c=new At;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const l=new te(.24,8,8);l.scale(1,.7,1.4);const h=new A(l,this.duckMat);c.add(h);const d=new te(.14,8,8),p=new A(d,this.duckMat);p.position.set(0,.22,-.22),c.add(p);const f=new Le(.06,.16,6);f.rotateX(-Math.PI/2);const _=new A(f,this.beakMat);_.position.set(0,.2,-.34),c.add(_),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new At;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const r=new xt(.04,.04,t,6);r.rotateX(Math.PI/2);const a=new A(r,this.bambooTrunkMat);a.position.y=i,e.add(a)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const r=-t*.5+i*1.4,a=new xt(.05,.06,1.25,6),o=new A(a,this.woodMat);o.position.set(0,.62,r),o.castShadow=!0,e.add(o)}return e}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}}),this.smokeEmitters.forEach(e=>{e.children.forEach((n,i)=>{n.position.y+=.015,n.position.x+=Math.sin(t*3+i)*.005,n.position.y>1.4&&(n.position.y=0)})})}}class Yp{constructor(t){this.scene=t,this.segments=[],this.segmentLength=Ft.ROAD_SEGMENT_LENGTH,this.segmentCount=Ft.ROAD_SEGMENT_COUNT,this.roadWidth=Ft.ROAD_WIDTH,this.props=new qp,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let h=0;h<i.length;h+=4){const d=(Math.random()-.5)*12;i[h]=Math.min(255,Math.max(0,i[h]+d)),i[h+1]=Math.min(255,Math.max(0,i[h+1]+d)),i[h+2]=Math.min(255,Math.max(0,i[h+2]+d))}e.putImageData(n,0,0);const r=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",r.forEach(h=>{e.fillRect(h-50,0,36,t.height),e.fillRect(h+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const a=new ce(t);a.wrapS=tn,a.wrapT=tn,a.repeat.set(1,1),a.anisotropy=8,this.roadMaterial=new j({map:a,roughness:.82,metalness:.12});const o=document.createElement("canvas");o.width=512,o.height=512;const c=o.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let h=0;h<512;h+=24)c.beginPath(),c.moveTo(0,h),c.lineTo(512,h),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const l=new ce(o);l.wrapS=tn,l.wrapT=tn,l.repeat.set(4,8),this.paddyFieldMaterial=new j({map:l,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new j({color:7032635,roughness:.95}),this.culvertRailingMaterial=new j({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new At;n.position.z=t;const i=new qt(this.roadWidth,this.segmentLength);i.rotateX(-Math.PI/2);const r=new A(i,this.roadMaterial);r.receiveShadow=!0,n.add(r);const a=3.5;[-1,1].forEach(c=>{const l=new qt(a,this.segmentLength);l.rotateX(-Math.PI/2);const h=new A(l,this.dirtVergeMaterial);h.position.set((this.roadWidth*.5+a*.5)*c,-.01,0),h.receiveShadow=!0,n.add(h)});const o=60;return[-1,1].forEach(c=>{const l=new qt(o,this.segmentLength);l.rotateX(-Math.PI/2);const h=new A(l,this.paddyFieldMaterial),d=(this.roadWidth*.5+a+o*.5)*c;h.position.set(d,-.05,0),h.receiveShadow=!0,n.add(h)}),this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=n.createElectricPole();i.position.set(this.roadWidth*.5+2.4,0,0),t.add(i);const r=[new D(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new D(this.roadWidth*.5+2.4,7.1,0),new D(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],a=new Ss(r),o=new ki(a,8,.02,4,!1),c=new fe({color:2040865}),l=new A(o,c);t.add(l);const h=e%2===0?-1:1,d=e%3===0?"white":e%3===1?"brown":"black",p=n.createCow(d),f=(this.roadWidth*.5+2.8+Math.random()*1.5)*h,_=6+Math.random()*14;if(p.position.set(f,0,_),p.rotation.y=h>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(p),e%2===1){const P=n.createCow("brown");P.scale.set(.75,.75,.75),P.position.set(f+(h>0?3:-3),0,_+3.5),P.rotation.y=p.rotation.y+.5,t.add(P)}if(e%2===0){const F=n.createVillageHouse(e%4===0),v=(this.roadWidth*.5+11.5)*-1;F.position.set(v,0,-10),F.rotation.y=Math.PI/2,t.add(F);const E=n.createHaystack();E.position.set(v-5.5,0,4),t.add(E);const C=n.createBambooFence(24);C.position.set((this.roadWidth*.5+5.5)*-1,0,-5),t.add(C)}if(e%3===1){const F=n.createTeaStall();F.position.set((this.roadWidth*.5+5.8)*1,0,12),F.rotation.y=-Math.PI/2,t.add(F);const v=n.createCoconutTree();v.position.set((this.roadWidth*.5+9)*1,0,16),t.add(v)}if(e%3===2){const F=n.createPond(14,22);F.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(F);for(let v=0;v<3;v++){const E=n.createBananaTree();E.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+v*6),t.add(E)}}e%4===3&&[-this.roadWidth*.5-.4,this.roadWidth*.5+.4].forEach(P=>{const F=new rt(.35,.75,14),v=new A(F,this.culvertRailingMaterial);v.position.set(P,.38,0),v.castShadow=!0,t.add(v),[-7,7].forEach(E=>{const C=new rt(.45,.9,.45),W=new A(C,this.culvertRailingMaterial);W.position.set(P,.45,E),t.add(W)})});const M=e%2===0?1:-1,m=n.createCoconutTree();m.position.set((this.roadWidth*.5+7.5+Math.random()*5)*M,0,-22),t.add(m);const u=n.createBambooGrove();u.position.set((this.roadWidth*.5+9+Math.random()*6)*-M,0,18),t.add(u);const w=n.createBananaTree();w.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*M,0,4),t.add(w);const g=e%2===0?1:-1,S=n.createJatriChawni(g),I=(this.roadWidth*.5+3.4)*g,R=e===0?-14:-18;S.position.set(I,0,R),S.rotation.y=g>0?Math.PI*.5+.32:-Math.PI*.5-.32,t.add(S)}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const r=this.segments[i];if(r.group.position.z>n){let a=0;for(let o=0;o<this.segments.length;o++)this.segments[o].group.position.z<a&&(a=this.segments[o].group.position.z);r.group.position.z=a-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class Kp{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new Ar(11722715,.0038),this.scene.background=new jt(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(l,h,d)=>{e.beginPath(),e.arc(l,h,d,0,Math.PI*2),e.arc(l+d*.7,h-d*.2,d*.8,0,Math.PI*2),e.arc(l-d*.7,h-d*.1,d*.7,0,Math.PI*2),e.arc(l+d*1.3,h+d*.1,d*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const r=e.createRadialGradient(256,380,15,256,380,120);r.addColorStop(0,"rgba(255, 255, 240, 1.0)"),r.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),r.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),r.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=r,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const a=new ce(t),o=new te(480,32,16),c=new fe({map:a,side:Ne});this.skyDome=new A(o,c),this.scene.add(this.skyDome)}initLighting(){this.hemiLight=new Lp(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new Fp(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=170,this.dirLight.shadow.camera.left=-28,this.dirLight.shadow.camera.right=28,this.dirLight.shadow.camera.top=28,this.dirLight.shadow.camera.bottom=-28,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new j({color:1793568,roughness:.9,flatShading:!0});[-1,1].forEach(e=>{const n=new At,i=28;for(let r=0;r<i;r++){const a=12+Math.random()*18,o=6+Math.random()*8,c=new Le(o,a,6),l=new A(c,t),h=(55+Math.random()*30)*e,d=-r*18;l.position.set(h,a*.5-2,d),l.rotation.y=Math.random()*Math.PI,n.add(l)}this.scene.add(n),this.treeLines.push(n)})}initFlyingBirds(){this.birdsGroup=new At;const t=new fe({color:16777215,side:be}),e=8;for(let n=0;n<e;n++){const i=new At,r=new qt(.8,.35);r.translate(-.4,0,0);const a=new A(r,t);i.add(a);const o=new qt(.8,.35);o.translate(.4,0,0);const c=new A(o,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:a,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class Zp{constructor(t="sedan"){this.type=t,this.group=new At,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new gn,this.collisionSize=new D(1.8,1.4,4.5),this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new j({color:t,metalness:.5,roughness:.35}),darkTrim:new j({color:1974308,roughness:.7}),wood:new j({color:8736014,roughness:.9}),glass:new zi({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new j({color:14671839,metalness:.9,roughness:.2}),headlight:new fe({color:16777215}),taillight:new j({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new j({color:1973792,metalness:.1,roughness:.85}),rim:new j({color:12131356,metalness:.5,roughness:.4}),cowFawn:new j({color:9262372,roughness:.7}),cowWhite:new j({color:16119280,roughness:.6}),cowBlack:new j({color:2236962,roughness:.7}),horn:new j({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new rt(2,.4,6.2),r=new A(i,n.darkTrim);r.position.set(0,.6,0),this.group.add(r);const a=new rt(2.3,.4,.25),o=new A(a,n.darkTrim);o.position.set(0,.6,-3.15),this.group.add(o);const c=new rt(1.8,.9,1.5),l=new A(c,n.body);l.position.set(0,1.25,-2.2),this.group.add(l);const h=new rt(2.1,1.5,1.5),d=new A(h,n.body);d.position.set(0,1.8,-.7),this.group.add(d);const p=new qt(1.85,.7),f=new A(p,n.glass);f.position.set(0,1.95,-1.46),this.group.add(f),[-.7,.7].forEach(S=>{const I=new A(new rt(.24,.2,.05),n.headlight);I.position.set(S,1.15,-3.18),this.group.add(I)});const _=new rt(2.25,.12,3.6),M=new A(_,n.wood);M.position.set(0,1.05,1.5),this.group.add(M),[-1.12,1.12].forEach(S=>{const I=new rt(.08,1.3,3.6),R=new A(I,n.wood);R.position.set(S,1.7,1.5),this.group.add(R)});const m=new rt(2.25,1.2,.08),u=new A(m,n.wood);u.position.set(0,1.65,3.3),this.group.add(u),[-.85,.85].forEach(S=>{const I=new A(new rt(.28,.16,.05),n.taillight);I.position.set(S,.75,3.32),this.group.add(I)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(S=>{const I=new At;I.position.set(S.x,2.2,S.z);const R=new rt(.42,.45,.6),P=new A(R,S.mat);I.add(P);const F=new rt(.3,.25,.25),v=new A(F,n.darkTrim);v.position.set(0,-.08,.38),I.add(v),[-.18,.18].forEach(E=>{const C=new Le(.05,.28,6),W=new A(C,n.horn);W.position.set(E,.26,.05),W.rotation.z=E>0?-.35:.35,I.add(W)}),this.group.add(I)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(S=>{const I=this.createSimpleWheel(n,.5,.3);I.position.set(S.x,.5,S.z),this.group.add(I),this.wheels.push(I)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new rt(2,.4,6.2),n=new A(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new rt(2.1,1.6,1.8),r=new A(i,t.body);r.position.set(0,1.7,-1.8),this.group.add(r);const a=new rt(2.3,2.1,3.8),o=new A(a,t.wood);o.position.set(0,1.85,1.2),this.group.add(o),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new rt(2.35,2.5,10.2),n=new A(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new qt(2.15,1.2),r=new A(i,t.glass);r.position.set(0,1.95,-5.12),this.group.add(r),[-1.19,1.19].forEach(o=>{const c=new qt(9,.9),l=new A(c,t.glass);l.position.set(o,1.9,.2),l.rotation.y=o>0?Math.PI/2:-Math.PI/2,this.group.add(l)}),[-.85,.85].forEach(o=>{const c=new A(new rt(.3,.16,.05),t.headlight);c.position.set(o,.75,-5.12),this.group.add(c);const l=new A(new rt(.24,.35,.05),t.taillight);l.position.set(o,1.3,5.12),this.group.add(l)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(o=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(o.x,.48,o.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new rt(1.88,.4,4.65),r=new A(i,n.darkTrim);r.position.set(0,.42,0),this.group.add(r);const a=new rt(1.84,.6,4.6),o=new A(a,n.body);o.position.set(0,.78,0),this.group.add(o);const c=new rt(1.58,.65,2.9),l=new A(c,n.body);l.position.set(0,1.3,.2),this.group.add(l),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new rt(1.76,.32,4.5),r=new A(i,n.darkTrim);r.position.set(0,.32,0),this.group.add(r);const a=new rt(1.72,.44,4.4),o=new A(a,n.body);o.position.set(0,.58,0),this.group.add(o);const c=new rt(1.44,.46,2.2),l=new A(c,n.body);l.position.set(0,.92,-.05),this.group.add(l),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,r,a){[-e,e].forEach(o=>{const c=new rt(.3,.1,.05),l=new A(c,t.headlight);l.position.set(o,i,n),this.group.add(l)}),[-e,e].forEach(o=>{const c=new rt(.32,.12,.05),l=new A(c,t.taillight);l.position.set(o,a,r),this.group.add(l)})}addStandardWheels(t,e,n,i,r){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(o=>{const c=this.createSimpleWheel(t,r,.24);c.position.set(o.x,o.y,o.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new At,r=new xt(e,e,n,18);r.rotateZ(Math.PI/2);const a=new A(r,t.tire);i.add(a);const o=new xt(e*.7,e*.7,n+.02,14);o.rotateZ(Math.PI/2);const c=new A(o,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=Ft.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<Ft.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=Ft.LANES[n];if(!t.some(a=>{if(a===this||!a.active)return!1;const o=Math.abs(a.group.position.z-this.group.position.z),c=Math.abs(a.group.position.x-i);return o<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const r=this.targetX-this.group.position.x;Math.abs(r)>.04?this.group.position.x+=Math.sign(r)*Math.min(Math.abs(r),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(r=>{r.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(t,this.collisionSize)}}class Jp{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"];for(let n=0;n<25;n++){const i=t[n%t.length],r=new Zp(i);r.despawn(),this.pool.push(r),this.scene.add(r.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,r){const a=t.group.position.z,o=t.group.position.x,c=Math.min(1,n/4500),l=Ai.lerp(1.3,.8,c),h=Ai.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=Ai.lerp(l,h,Math.random()),this.trySpawnTraffic(a,c));for(let d=this.activeVehicles.length-1;d>=0;d--){const p=this.activeVehicles[d];if(p.update(e,i),p.group.position.z>a+Ft.TRAFFIC.DESPAWN_DISTANCE){p.despawn(),this.activeVehicles.splice(d,1);continue}if(!p.hasBeenOvertaken){const f=Math.abs(p.group.position.z-a),_=Math.abs(p.group.position.x-o);f<Ft.SCORING.NEAR_MISS_DIST_Z&&_<Ft.SCORING.NEAR_MISS_DIST_X&&_>.5&&e>p.speed+12?(p.hasBeenOvertaken=!0,r&&r(p)):a<p.group.position.z-4&&(p.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-Ft.TRAFFIC.SPAWN_DISTANCE,i=34,r=new Set;this.activeVehicles.forEach(_=>{Math.abs(_.group.position.z-n)<i&&r.add(_.lane)});const a=[0,1,2].filter(_=>!r.has(_));if(a.length===0||a.length===1&&r.size>=2)return;const o=a[Math.floor(Math.random()*a.length)];let c="cow_truck";const l=Math.random();o===0?c=l>.45?"cow_truck":"truck":o===1?c=l>.5?"bus":l>.25?"cow_truck":"suv":c=l>.45?"bus":"sedan";const h=this.getInactiveVehicle(c);if(!h)return;const d=Ft.TRAFFIC.SPEEDS[c]||[65,85],p=e*35,f=Ai.lerp(d[0],d[1],Math.random())+p;if(h.spawn(o,n,f),this.activeVehicles.push(h),e>.5&&Math.random()<.35&&a.length>=2){const _=a.filter(M=>M!==o);if(_.length>0){const M=_[Math.floor(Math.random()*_.length)],m=Math.random()>.5?"cow_truck":"bus",u=this.getInactiveVehicle(m);if(u){const w=n-(28+Math.random()*20),g=Ft.TRAFFIC.SPEEDS[m]||[65,80],S=Ai.lerp(g[0],g[1],Math.random())+p;u.spawn(M,w,S),this.activeVehicles.push(u)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const r=this.activeVehicles[i],a=e-r.group.position.z,o=Math.abs(r.group.position.x-n);if(a>4&&a<65&&o<2.4&&!r.isYielding){r.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class jp{constructor(t){this.scene=t,this.particles=[],this.poolSize=180,this.smokeMat=new fe({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new fe({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new j({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new rt(.14,.14,.14),n=new A(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new D,rotVel:new D,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){for(let e=0;e<35;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="spark",n.mesh.material=this.sparkMat,n.mesh.visible=!0,n.mesh.scale.set(.12,.12,.12),n.mesh.position.copy(t);const i=Math.random()*Math.PI*2,r=6+Math.random()*14;n.vel.set(Math.cos(i)*r,3+Math.random()*10,Math.sin(i)*r),n.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),n.life=0,n.maxLife=.7+Math.random()*.5,n.scaleSpeed=-.5}for(let e=0;e<20;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="debris",n.mesh.material=this.debrisMat,n.mesh.visible=!0,n.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),n.mesh.position.copy(t),n.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),n.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),n.life=0,n.maxLife=1.2,n.scaleSpeed=0}for(let e=0;e<25;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="smoke",n.mesh.material=this.smokeMat,n.mesh.visible=!0,n.mesh.scale.set(.8,.8,.8),n.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),n.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),n.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),n.life=0,n.maxLife=1.4,n.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class $p{constructor(t){this.scene=t,this.linesCount=60,this.group=new At;const e=new qa({color:10083839,transparent:!0,opacity:0});this.lineMat=e,this.lines=[];for(let n=0;n<this.linesCount;n++){const i=[new D(0,0,0),new D(0,0,6+Math.random()*8)],r=new Oe().setFromPoints(i),a=new mp(r,e);this.resetLinePos(a),this.group.add(a),this.lines.push(a)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const r=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=r*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const a=t.group.position.z,o=t.group.position.x;this.group.position.set(o,0,a);const c=e/60*i*50;this.lines.forEach(l=>{l.position.z+=c,l.position.z>5&&this.resetLinePos(l)})}}class Qp{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),r=document.getElementById("btn-gameover-restart");[i,r].forEach(p=>{p&&p.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const a=document.getElementById("btn-pause-menu"),o=document.getElementById("btn-gameover-menu");[a,o].forEach(p=>{p&&p.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(p=>{p.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),l=document.getElementById("btn-how-to-play"),h=document.getElementById("btn-modal-close");l&&c&&l.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",p=>{p.target===c&&c.classList.remove("active")});const d=document.querySelectorAll(".veh-btn");d.forEach(p=>{p.addEventListener("click",()=>{d.forEach(f=>f.classList.remove("active")),p.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(p.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(p=>{p.addEventListener("click",f=>{f.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),r=document.getElementById("btn-touch-nitro"),a=document.getElementById("btn-touch-horn");if(document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(o=>{o.addEventListener("contextmenu",c=>c.preventDefault())}),t&&t.addEventListener("pointerdown",o=>{o.preventDefault(),document.body.classList.add("touch-active"),this.onSteerLeft&&this.onSteerLeft()}),e&&e.addEventListener("pointerdown",o=>{o.preventDefault(),document.body.classList.add("touch-active"),this.onSteerRight&&this.onSteerRight()}),n){const o=c=>{document.body.classList.add("touch-active"),this.onBrake&&this.onBrake(c),c&&this.soundManager.playAirBrake()};n.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),n.addEventListener("pointerup",()=>o(!1)),n.addEventListener("pointerleave",()=>o(!1)),n.addEventListener("pointercancel",()=>o(!1))}if(i){const o=c=>{document.body.classList.add("touch-active"),this.onAccelerate&&this.onAccelerate(c)};i.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),i.addEventListener("pointerup",()=>o(!1)),i.addEventListener("pointerleave",()=>o(!1)),i.addEventListener("pointercancel",()=>o(!1))}if(r){const o=c=>{document.body.classList.add("touch-active"),this.onNitro&&this.onNitro(c)};r.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),r.addEventListener("pointerup",()=>o(!1)),r.addEventListener("pointerleave",()=>o(!1)),r.addEventListener("pointercancel",()=>o(!1))}a&&a.addEventListener("pointerdown",o=>{o.preventDefault(),this.onHorn?this.onHorn():this.soundManager.playTruckHorn()}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===re.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case re.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case re.PLAYING:this.hudLayer.classList.remove("hidden");break;case re.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case re.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){if(this.scoreVal&&(this.scoreVal.innerText=t.score.toLocaleString()),this.distVal&&(this.distVal.innerText=`${(t.distanceMeters/1e3).toFixed(2)} km`),this.speedVal&&(this.speedVal.innerText=Math.round(t.speedKmh)),this.nitroBar){const e=t.nitro/100*100;this.nitroBar.style.width=`${e}%`,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting")}}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class t0{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new Gp,this.inputManager=new kp,this.soundManager=new Vp,this.uiManager=new Qp(this.soundManager),this.scene=new pp,this.camera=new Fe(Ft.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.renderer=new Xa({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ua,this.renderer.toneMapping=fa,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new Kp(this.scene),this.roadManager=new Yp(this.scene),this.vehicles={truck:new Hp,rickshaw:new Wp,cng:new Xp},Object.values(this.vehicles).forEach(t=>{this.scene.add(t.group),t.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new Jp(this.scene),this.particleSystem=new jp(this.scene),this.speedLines=new $p(this.scene),this.cameraController=new zp(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new Bp,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(re.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=e=>this.setVehicle(e);const t=()=>{this.gameState.state===re.PLAYING?(this.gameState.state=re.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(re.PAUSED,this.gameState)):this.gameState.state===re.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=t,this.inputManager.onPauseToggle=t,this.inputManager.onRestart=()=>{(this.gameState.state===re.GAMEOVER||this.gameState.state===re.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=()=>this.inputManager.triggerSteerLeft(),this.uiManager.onSteerRight=()=>this.inputManager.triggerSteerRight(),this.uiManager.onAccelerate=e=>this.inputManager.setAccelerate(e),this.uiManager.onBrake=e=>this.inputManager.setBrake(e),this.uiManager.onNitro=e=>this.inputManager.setNitro(e)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(re.PLAYING,this.gameState)}resumeGame(){this.gameState.state===re.PAUSED&&(this.gameState.state=re.PLAYING,this.uiManager.setScreen(re.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=re.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(re.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(re.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===re.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===re.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const r=this.inputManager.keys.brake;r&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=r,this.gameState.update(e,this.inputManager);const a=this.gameState.speedKmh*1e3/3600;if(this.playerVehicle.group.position.z-=a*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,r,this.gameState.isBoosting,e),r&&this.gameState.speedKmh>50){const c=this.playerVehicle.group.position.clone();c.x-=.85,c.z+=1.6;const l=this.playerVehicle.group.position.clone();l.x+=.85,l.z+=1.6,this.particleSystem.emitTireSmoke(c),this.particleSystem.emitTireSmoke(l)}this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const l=this.gameState.addNearMiss();this.soundManager.playNearMiss(l.combo),this.uiManager.showNearMiss(l.bonus,l.combo)});const o=this.trafficManager.checkCollision(this.playerVehicle);o&&this.onCrash(o),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,r,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===re.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new t0});
//# sourceMappingURL=index-oFevWPO9.js.map
