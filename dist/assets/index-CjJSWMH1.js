(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="160",yc=0,$o=1,Ec=2,Ca=1,La=2,_n=3,In=0,Be=1,we=2,Pn=0,xi=1,Qo=2,tr=3,er=4,bc=5,Hn=100,Tc=101,Ac=102,nr=103,ir=104,Rc=200,Pc=201,Cc=202,Lc=203,To=204,Ao=205,Ic=206,Dc=207,Uc=208,Nc=209,Oc=210,Fc=211,Bc=212,Gc=213,kc=214,zc=0,Vc=1,Hc=2,Es=3,Wc=4,Xc=5,qc=6,Yc=7,Ia=0,Zc=1,Kc=2,Cn=0,Jc=1,jc=2,$c=3,Da=4,Qc=5,tl=6,Ua=300,Si=301,yi=302,Ro=303,Po=304,Ds=306,Oe=1e3,tn=1001,Co=1002,Fe=1003,sr=1004,Ws=1005,Ye=1006,el=1007,Hi=1008,Ln=1009,nl=1010,il=1011,Fo=1012,Na=1013,An=1014,Rn=1015,Wi=1016,Oa=1017,Fa=1018,Xn=1020,sl=1021,en=1023,ol=1024,rl=1025,qn=1026,Ei=1027,al=1028,Ba=1029,cl=1030,Ga=1031,ka=1033,Xs=33776,qs=33777,Ys=33778,Zs=33779,or=35840,rr=35841,ar=35842,cr=35843,za=36196,lr=37492,hr=37496,dr=37808,ur=37809,fr=37810,pr=37811,mr=37812,gr=37813,_r=37814,vr=37815,Mr=37816,xr=37817,wr=37818,Sr=37819,yr=37820,Er=37821,Ks=36492,br=36494,Tr=36495,ll=36283,Ar=36284,Rr=36285,Pr=36286,Va=3e3,Yn=3001,hl=3200,dl=3201,Ha=0,ul=1,Ze="",Pe="srgb",Mn="srgb-linear",Bo="display-p3",Us="display-p3-linear",bs="linear",de="srgb",Ts="rec709",As="p3",Qn=7680,Cr=519,fl=512,pl=513,ml=514,Wa=515,gl=516,_l=517,vl=518,Ml=519,Lr=35044,Ir="300 es",Lo=1035,vn=2e3,Rs=2001;class Ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Dr=1234567;const Fi=Math.PI/180,bi=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[s&255]+Le[s>>8&255]+Le[s>>16&255]+Le[s>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Re(s,t,e){return Math.max(t,Math.min(e,s))}function Go(s,t){return(s%t+t)%t}function xl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function wl(s,t,e){return s!==t?(e-s)/(t-s):0}function Bi(s,t,e){return(1-e)*s+e*t}function Sl(s,t,e,n){return Bi(s,t,1-Math.exp(-e*n))}function yl(s,t=1){return t-Math.abs(Go(s,t*2)-t)}function El(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function bl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Tl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Al(s,t){return s+Math.random()*(t-s)}function Rl(s){return s*(.5-Math.random())}function Pl(s){s!==void 0&&(Dr=s);let t=Dr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Cl(s){return s*Fi}function Ll(s){return s*bi}function Io(s){return(s&s-1)===0&&s!==0}function Il(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ps(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Dl(s,t,e,n,i){const o=Math.cos,a=Math.sin,r=o(e/2),c=a(e/2),h=o((t+n)/2),d=a((t+n)/2),u=o((t-n)/2),l=a((t-n)/2),f=o((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(r*d,c*u,c*l,r*h);break;case"YZY":s.set(c*l,r*d,c*u,r*h);break;case"ZXZ":s.set(c*u,c*l,r*d,r*h);break;case"XZX":s.set(r*d,c*_,c*f,r*h);break;case"YXY":s.set(c*f,r*d,c*_,r*h);break;case"ZYZ":s.set(c*_,c*f,r*d,r*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Li={DEG2RAD:Fi,RAD2DEG:bi,generateUUID:jn,clamp:Re,euclideanModulo:Go,mapLinear:xl,inverseLerp:wl,lerp:Bi,damp:Sl,pingpong:yl,smoothstep:El,smootherstep:bl,randInt:Tl,randFloat:Al,randFloatSpread:Rl,seededRandom:Pl,degToRad:Cl,radToDeg:Ll,isPowerOfTwo:Io,ceilPowerOfTwo:Il,floorPowerOfTwo:Ps,setQuaternionFromProperEuler:Dl,normalize:Ue,denormalize:gi};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*i+t.x,this.y=o*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,n,i,o,a,r,c,h){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,h)}set(t,e,n,i,o,a,r,c,h){const d=this.elements;return d[0]=t,d[1]=i,d[2]=r,d[3]=e,d[4]=o,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[3],c=n[6],h=n[1],d=n[4],u=n[7],l=n[2],f=n[5],_=n[8],v=i[0],m=i[3],p=i[6],x=i[1],g=i[4],w=i[7],I=i[2],C=i[5],L=i[8];return o[0]=a*v+r*x+c*I,o[3]=a*m+r*g+c*C,o[6]=a*p+r*w+c*L,o[1]=h*v+d*x+u*I,o[4]=h*m+d*g+u*C,o[7]=h*p+d*w+u*L,o[2]=l*v+f*x+_*I,o[5]=l*m+f*g+_*C,o[8]=l*p+f*w+_*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*r*h-n*o*d+n*r*c+i*o*h-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8],u=d*a-r*h,l=r*c-d*o,f=h*o-a*c,_=e*u+n*l+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=u*v,t[1]=(i*h-d*n)*v,t[2]=(r*n-i*a)*v,t[3]=l*v,t[4]=(d*e-i*c)*v,t[5]=(i*o-r*e)*v,t[6]=f*v,t[7]=(n*c-h*e)*v,t[8]=(a*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,a,r){const c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*a+h*r)+a+t,-i*h,i*c,-i*(-h*a+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(Js.makeScale(t,e)),this}rotate(t){return this.premultiply(Js.makeRotation(-t)),this}translate(t,e){return this.premultiply(Js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new ne;function Xa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Cs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ul(){const s=Cs("canvas");return s.style.display="block",s}const Ur={};function Gi(s){s in Ur||(Ur[s]=!0,console.warn(s))}const Nr=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Or=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ji={[Mn]:{transfer:bs,primaries:Ts,toReference:s=>s,fromReference:s=>s},[Pe]:{transfer:de,primaries:Ts,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Us]:{transfer:bs,primaries:As,toReference:s=>s.applyMatrix3(Or),fromReference:s=>s.applyMatrix3(Nr)},[Bo]:{transfer:de,primaries:As,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Or),fromReference:s=>s.applyMatrix3(Nr).convertLinearToSRGB()}},Nl=new Set([Mn,Us]),ce={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Nl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=ji[t].toReference,i=ji[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ji[s].primaries},getTransfer:function(s){return s===Ze?bs:ji[s].transfer}};function wi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ti;class qa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=Cs("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Cs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=wi(o[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wi(e[n]/255)*255):e[n]=wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ol=0;class Ya{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=jn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push($s(i[a].image)):o.push($s(i[a]))}else o=$s(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function $s(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fl=0;class ke extends Ai{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,n=tn,i=tn,o=Ye,a=Hi,r=en,c=Ln,h=ke.DEFAULT_ANISOTROPY,d=Ze){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=jn(),this.name="",this.source=new Ya(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Yn?Pe:Ze),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ua)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oe:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Co:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oe:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Co:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pe?Yn:Va}set encoding(t){Gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yn?Pe:Ze}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=Ua;ke.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,h=c[0],d=c[4],u=c[8],l=c[1],f=c[5],_=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-l)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+l)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(h+1)/2,w=(f+1)/2,I=(p+1)/2,C=(d+l)/4,L=(u+v)/4,B=(_+m)/4;return g>w&&g>I?g<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(g),i=C/n,o=L/n):w>I?w<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(w),n=C/i,o=B/i):I<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(I),n=L/o,i=B/o),this.set(n,i,o,e),this}let x=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(l-d)*(l-d));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(u-v)/x,this.z=(l-d)/x,this.w=Math.acos((h+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bl extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yn?Pe:Ze),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ke(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Ya(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Za extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gl extends ke{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,a,r){let c=n[i+0],h=n[i+1],d=n[i+2],u=n[i+3];const l=o[a+0],f=o[a+1],_=o[a+2],v=o[a+3];if(r===0){t[e+0]=c,t[e+1]=h,t[e+2]=d,t[e+3]=u;return}if(r===1){t[e+0]=l,t[e+1]=f,t[e+2]=_,t[e+3]=v;return}if(u!==v||c!==l||h!==f||d!==_){let m=1-r;const p=c*l+h*f+d*_+u*v,x=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){const I=Math.sqrt(g),C=Math.atan2(I,p*x);m=Math.sin(m*C)/I,r=Math.sin(r*C)/I}const w=r*x;if(c=c*m+l*w,h=h*m+f*w,d=d*m+_*w,u=u*m+v*w,m===1-r){const I=1/Math.sqrt(c*c+h*h+d*d+u*u);c*=I,h*=I,d*=I,u*=I}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,o,a){const r=n[i],c=n[i+1],h=n[i+2],d=n[i+3],u=o[a],l=o[a+1],f=o[a+2],_=o[a+3];return t[e]=r*_+d*u+c*f-h*l,t[e+1]=c*_+d*l+h*u-r*f,t[e+2]=h*_+d*f+r*l-c*u,t[e+3]=d*_-r*u-c*l-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,a=t._order,r=Math.cos,c=Math.sin,h=r(n/2),d=r(i/2),u=r(o/2),l=c(n/2),f=c(i/2),_=c(o/2);switch(a){case"XYZ":this._x=l*d*u+h*f*_,this._y=h*f*u-l*d*_,this._z=h*d*_+l*f*u,this._w=h*d*u-l*f*_;break;case"YXZ":this._x=l*d*u+h*f*_,this._y=h*f*u-l*d*_,this._z=h*d*_-l*f*u,this._w=h*d*u+l*f*_;break;case"ZXY":this._x=l*d*u-h*f*_,this._y=h*f*u+l*d*_,this._z=h*d*_+l*f*u,this._w=h*d*u-l*f*_;break;case"ZYX":this._x=l*d*u-h*f*_,this._y=h*f*u+l*d*_,this._z=h*d*_-l*f*u,this._w=h*d*u+l*f*_;break;case"YZX":this._x=l*d*u+h*f*_,this._y=h*f*u+l*d*_,this._z=h*d*_-l*f*u,this._w=h*d*u-l*f*_;break;case"XZY":this._x=l*d*u-h*f*_,this._y=h*f*u-l*d*_,this._z=h*d*_+l*f*u,this._w=h*d*u+l*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],a=e[1],r=e[5],c=e[9],h=e[2],d=e[6],u=e[10],l=n+r+u;if(l>0){const f=.5/Math.sqrt(l+1);this._w=.25/f,this._x=(d-c)*f,this._y=(o-h)*f,this._z=(a-i)*f}else if(n>r&&n>u){const f=2*Math.sqrt(1+n-r-u);this._w=(d-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(o+h)/f}else if(r>u){const f=2*Math.sqrt(1+r-n-u);this._w=(o-h)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+d)/f}else{const f=2*Math.sqrt(1+u-n-r);this._w=(a-i)/f,this._x=(o+h)/f,this._y=(c+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Re(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,a=t._w,r=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+a*r+i*h-o*c,this._y=i*d+a*c+o*r-n*h,this._z=o*d+a*h+n*c-i*r,this._w=a*d-n*r-i*c-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const c=1-r*r;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,r),u=Math.sin((1-e)*d)/h,l=Math.sin(e*d)/h;return this._w=a*u+this._w*l,this._x=n*u+this._x*l,this._y=i*u+this._y*l,this._z=o*u+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(o),n*Math.cos(o),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Fr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Fr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,a=t.y,r=t.z,c=t.w,h=2*(a*i-r*n),d=2*(r*e-o*i),u=2*(o*n-a*e);return this.x=e+c*h+a*u-r*d,this.y=n+c*d+r*h-o*u,this.z=i+c*u+o*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,a=e.x,r=e.y,c=e.z;return this.x=i*c-o*r,this.y=o*a-n*c,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new F,Fr=new Ki;class xn{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Je):Je.fromBufferAttribute(o,a),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$i.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$i.copy(n.boundingBox)),$i.applyMatrix4(t.matrixWorld),this.union($i)}const i=t.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ii),Qi.subVectors(this.max,Ii),ei.subVectors(t.a,Ii),ni.subVectors(t.b,Ii),ii.subVectors(t.c,Ii),Sn.subVectors(ni,ei),yn.subVectors(ii,ni),Fn.subVectors(ei,ii);let e=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-Fn.z,Fn.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,Fn.z,0,-Fn.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-Fn.y,Fn.x,0];return!to(e,ei,ni,ii,Qi)||(e=[1,0,0,0,1,0,0,0,1],!to(e,ei,ni,ii,Qi))?!1:(ts.crossVectors(Sn,yn),e=[ts.x,ts.y,ts.z],to(e,ei,ni,ii,Qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new F,new F,new F,new F,new F,new F,new F,new F],Je=new F,$i=new xn,ei=new F,ni=new F,ii=new F,Sn=new F,yn=new F,Fn=new F,Ii=new F,Qi=new F,ts=new F,Bn=new F;function to(s,t,e,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){Bn.fromArray(s,o);const r=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=t.dot(Bn),h=e.dot(Bn),d=n.dot(Bn);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>r)return!1}return!0}const kl=new xn,Di=new F,eo=new F;class Ns{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):kl.setFromPoints(t).getCenter(n);let i=0;for(let o=0,a=t.length;o<a;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);const e=Di.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Di,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add(eo)),this.expandByPoint(Di.copy(t.center).sub(eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new F,no=new F,es=new F,En=new F,io=new F,ns=new F,so=new F;class Ka{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){no.copy(t).add(e).multiplyScalar(.5),es.copy(e).sub(t).normalize(),En.copy(this.origin).sub(no);const o=t.distanceTo(e)*.5,a=-this.direction.dot(es),r=En.dot(this.direction),c=-En.dot(es),h=En.lengthSq(),d=Math.abs(1-a*a);let u,l,f,_;if(d>0)if(u=a*c-r,l=a*r-c,_=o*d,u>=0)if(l>=-_)if(l<=_){const v=1/d;u*=v,l*=v,f=u*(u+a*l+2*r)+l*(a*u+l+2*c)+h}else l=o,u=Math.max(0,-(a*l+r)),f=-u*u+l*(l+2*c)+h;else l=-o,u=Math.max(0,-(a*l+r)),f=-u*u+l*(l+2*c)+h;else l<=-_?(u=Math.max(0,-(-a*o+r)),l=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+l*(l+2*c)+h):l<=_?(u=0,l=Math.min(Math.max(-o,-c),o),f=l*(l+2*c)+h):(u=Math.max(0,-(a*o+r)),l=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+l*(l+2*c)+h);else l=a>0?-o:o,u=Math.max(0,-(a*l+r)),f=-u*u+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(no).addScaledVector(es,l),f}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,o=t.radius*t.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,c=n+a;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,a,r,c;const h=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,l=this.origin;return h>=0?(n=(t.min.x-l.x)*h,i=(t.max.x-l.x)*h):(n=(t.max.x-l.x)*h,i=(t.min.x-l.x)*h),d>=0?(o=(t.min.y-l.y)*d,a=(t.max.y-l.y)*d):(o=(t.max.y-l.y)*d,a=(t.min.y-l.y)*d),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),u>=0?(r=(t.min.z-l.z)*u,c=(t.max.z-l.z)*u):(r=(t.max.z-l.z)*u,c=(t.min.z-l.z)*u),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,o){io.subVectors(e,t),ns.subVectors(n,t),so.crossVectors(io,ns);let a=this.direction.dot(so),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;En.subVectors(this.origin,t);const c=r*this.direction.dot(ns.crossVectors(En,ns));if(c<0)return null;const h=r*this.direction.dot(io.cross(En));if(h<0||c+h>a)return null;const d=-r*En.dot(so);return d<0?null:this.at(d/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,i,o,a,r,c,h,d,u,l,f,_,v,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,h,d,u,l,f,_,v,m)}set(t,e,n,i,o,a,r,c,h,d,u,l,f,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=a,p[9]=r,p[13]=c,p[2]=h,p[6]=d,p[10]=u,p[14]=l,p[3]=f,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/si.setFromMatrixColumn(t,0).length(),o=1/si.setFromMatrixColumn(t,1).length(),a=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),c=Math.cos(i),h=Math.sin(i),d=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const l=a*d,f=a*u,_=r*d,v=r*u;e[0]=c*d,e[4]=-c*u,e[8]=h,e[1]=f+_*h,e[5]=l-v*h,e[9]=-r*c,e[2]=v-l*h,e[6]=_+f*h,e[10]=a*c}else if(t.order==="YXZ"){const l=c*d,f=c*u,_=h*d,v=h*u;e[0]=l+v*r,e[4]=_*r-f,e[8]=a*h,e[1]=a*u,e[5]=a*d,e[9]=-r,e[2]=f*r-_,e[6]=v+l*r,e[10]=a*c}else if(t.order==="ZXY"){const l=c*d,f=c*u,_=h*d,v=h*u;e[0]=l-v*r,e[4]=-a*u,e[8]=_+f*r,e[1]=f+_*r,e[5]=a*d,e[9]=v-l*r,e[2]=-a*h,e[6]=r,e[10]=a*c}else if(t.order==="ZYX"){const l=a*d,f=a*u,_=r*d,v=r*u;e[0]=c*d,e[4]=_*h-f,e[8]=l*h+v,e[1]=c*u,e[5]=v*h+l,e[9]=f*h-_,e[2]=-h,e[6]=r*c,e[10]=a*c}else if(t.order==="YZX"){const l=a*c,f=a*h,_=r*c,v=r*h;e[0]=c*d,e[4]=v-l*u,e[8]=_*u+f,e[1]=u,e[5]=a*d,e[9]=-r*d,e[2]=-h*d,e[6]=f*u+_,e[10]=l-v*u}else if(t.order==="XZY"){const l=a*c,f=a*h,_=r*c,v=r*h;e[0]=c*d,e[4]=-u,e[8]=h*d,e[1]=l*u+v,e[5]=a*d,e[9]=f*u-_,e[2]=_*u-f,e[6]=r*d,e[10]=v*u+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(zl,t,Vl)}lookAt(t,e,n){const i=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),bn.crossVectors(n,He),bn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),bn.crossVectors(n,He)),bn.normalize(),is.crossVectors(He,bn),i[0]=bn.x,i[4]=is.x,i[8]=He.x,i[1]=bn.y,i[5]=is.y,i[9]=He.y,i[2]=bn.z,i[6]=is.z,i[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[4],c=n[8],h=n[12],d=n[1],u=n[5],l=n[9],f=n[13],_=n[2],v=n[6],m=n[10],p=n[14],x=n[3],g=n[7],w=n[11],I=n[15],C=i[0],L=i[4],B=i[8],y=i[12],E=i[1],T=i[5],U=i[9],it=i[13],O=i[2],z=i[6],H=i[10],Q=i[14],V=i[3],K=i[7],ot=i[11],J=i[15];return o[0]=a*C+r*E+c*O+h*V,o[4]=a*L+r*T+c*z+h*K,o[8]=a*B+r*U+c*H+h*ot,o[12]=a*y+r*it+c*Q+h*J,o[1]=d*C+u*E+l*O+f*V,o[5]=d*L+u*T+l*z+f*K,o[9]=d*B+u*U+l*H+f*ot,o[13]=d*y+u*it+l*Q+f*J,o[2]=_*C+v*E+m*O+p*V,o[6]=_*L+v*T+m*z+p*K,o[10]=_*B+v*U+m*H+p*ot,o[14]=_*y+v*it+m*Q+p*J,o[3]=x*C+g*E+w*O+I*V,o[7]=x*L+g*T+w*z+I*K,o[11]=x*B+g*U+w*H+I*ot,o[15]=x*y+g*it+w*Q+I*J,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],a=t[1],r=t[5],c=t[9],h=t[13],d=t[2],u=t[6],l=t[10],f=t[14],_=t[3],v=t[7],m=t[11],p=t[15];return _*(+o*c*u-i*h*u-o*r*l+n*h*l+i*r*f-n*c*f)+v*(+e*c*f-e*h*l+o*a*l-i*a*f+i*h*d-o*c*d)+m*(+e*h*u-e*r*f-o*a*u+n*a*f+o*r*d-n*h*d)+p*(-i*r*d-e*c*u+e*r*l+i*a*u-n*a*l+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8],u=t[9],l=t[10],f=t[11],_=t[12],v=t[13],m=t[14],p=t[15],x=u*m*h-v*l*h+v*c*f-r*m*f-u*c*p+r*l*p,g=_*l*h-d*m*h-_*c*f+a*m*f+d*c*p-a*l*p,w=d*v*h-_*u*h+_*r*f-a*v*f-d*r*p+a*u*p,I=_*u*c-d*v*c-_*r*l+a*v*l+d*r*m-a*u*m,C=e*x+n*g+i*w+o*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=x*L,t[1]=(v*l*o-u*m*o-v*i*f+n*m*f+u*i*p-n*l*p)*L,t[2]=(r*m*o-v*c*o+v*i*h-n*m*h-r*i*p+n*c*p)*L,t[3]=(u*c*o-r*l*o-u*i*h+n*l*h+r*i*f-n*c*f)*L,t[4]=g*L,t[5]=(d*m*o-_*l*o+_*i*f-e*m*f-d*i*p+e*l*p)*L,t[6]=(_*c*o-a*m*o-_*i*h+e*m*h+a*i*p-e*c*p)*L,t[7]=(a*l*o-d*c*o+d*i*h-e*l*h-a*i*f+e*c*f)*L,t[8]=w*L,t[9]=(_*u*o-d*v*o-_*n*f+e*v*f+d*n*p-e*u*p)*L,t[10]=(a*v*o-_*r*o+_*n*h-e*v*h-a*n*p+e*r*p)*L,t[11]=(d*r*o-a*u*o-d*n*h+e*u*h+a*n*f-e*r*f)*L,t[12]=I*L,t[13]=(d*v*i-_*u*i+_*n*l-e*v*l-d*n*m+e*u*m)*L,t[14]=(_*r*i-a*v*i-_*n*c+e*v*c+a*n*m-e*r*m)*L,t[15]=(a*u*i-d*r*i+d*n*c-e*u*c-a*n*l+e*r*l)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,a=t.x,r=t.y,c=t.z,h=o*a,d=o*r;return this.set(h*a+n,h*r-i*c,h*c+i*r,0,h*r+i*c,d*r+n,d*c-i*a,0,h*c-i*r,d*c+i*a,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,a){return this.set(1,n,o,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,a=e._y,r=e._z,c=e._w,h=o+o,d=a+a,u=r+r,l=o*h,f=o*d,_=o*u,v=a*d,m=a*u,p=r*u,x=c*h,g=c*d,w=c*u,I=n.x,C=n.y,L=n.z;return i[0]=(1-(v+p))*I,i[1]=(f+w)*I,i[2]=(_-g)*I,i[3]=0,i[4]=(f-w)*C,i[5]=(1-(l+p))*C,i[6]=(m+x)*C,i[7]=0,i[8]=(_+g)*L,i[9]=(m-x)*L,i[10]=(1-(l+v))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=si.set(i[0],i[1],i[2]).length();const a=si.set(i[4],i[5],i[6]).length(),r=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],je.copy(this);const h=1/o,d=1/a,u=1/r;return je.elements[0]*=h,je.elements[1]*=h,je.elements[2]*=h,je.elements[4]*=d,je.elements[5]*=d,je.elements[6]*=d,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,i,o,a,r=vn){const c=this.elements,h=2*o/(e-t),d=2*o/(n-i),u=(e+t)/(e-t),l=(n+i)/(n-i);let f,_;if(r===vn)f=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(r===Rs)f=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,a,r=vn){const c=this.elements,h=1/(e-t),d=1/(n-i),u=1/(a-o),l=(e+t)*h,f=(n+i)*d;let _,v;if(r===vn)_=(a+o)*u,v=-2*u;else if(r===Rs)_=o*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const si=new F,je=new _e,zl=new F(0,0,0),Vl=new F(1,1,1),bn=new F,is=new F,He=new F,Br=new _e,Gr=new Ki;class Os{constructor(t=0,e=0,n=0,i=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],a=i[4],r=i[8],c=i[1],h=i[5],d=i[9],u=i[2],l=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Re(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Re(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Re(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(l,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Br.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Br,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gr.setFromEuler(this),this.setFromQuaternion(Gr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hl=0;const kr=new F,oi=new Ki,pn=new _e,ss=new F,Ui=new F,Wl=new F,Xl=new Ki,zr=new F(1,0,0),Vr=new F(0,1,0),Hr=new F(0,0,1),ql={type:"added"},Yl={type:"removed"};class Se extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new F,e=new Os,n=new Ki,i=new F(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new ne}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(zr,t)}rotateY(t){return this.rotateOnAxis(Vr,t)}rotateZ(t){return this.rotateOnAxis(Hr,t)}translateOnAxis(t,e){return kr.copy(t).applyQuaternion(this.quaternion),this.position.add(kr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(zr,t)}translateY(t){return this.translateOnAxis(Vr,t)}translateZ(t){return this.translateOnAxis(Hr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ss.copy(t):ss.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Ui,ss,this.up):pn.lookAt(ss,Ui,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),oi.setFromRotationMatrix(pn),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(ql)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,t,Wl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Xl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++){const r=i[o];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const u=c[h];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,h=this.material.length;c<h;c++)r.push(o(t.materials,this.material[c]));i.material=r}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(o(t.animations,c))}}if(e){const r=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),u=a(t.shapes),l=a(t.skeletons),f=a(t.animations),_=a(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),l.length>0&&(n.skeletons=l),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(r){const c=[];for(const h in r){const d=r[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Se.DEFAULT_UP=new F(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new F,mn=new F,oo=new F,gn=new F,ri=new F,ai=new F,Wr=new F,ro=new F,ao=new F,co=new F;let os=!1;class Qe{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){$e.subVectors(i,e),mn.subVectors(n,e),oo.subVectors(t,e);const a=$e.dot($e),r=$e.dot(mn),c=$e.dot(oo),h=mn.dot(mn),d=mn.dot(oo),u=a*h-r*r;if(u===0)return o.set(0,0,0),null;const l=1/u,f=(h*c-r*d)*l,_=(a*d-r*c)*l;return o.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(t,e,n,i,o,a,r,c){return os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),os=!0),this.getInterpolation(t,e,n,i,o,a,r,c)}static getInterpolation(t,e,n,i,o,a,r,c){return this.getBarycoord(t,e,n,i,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(r,gn.z),c)}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),mn.subVectors(t,e),$e.cross(mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),$e.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Qe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Qe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,o){return os===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),os=!0),Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}getInterpolation(t,e,n,i,o){return Qe.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return Qe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Qe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let a,r;ri.subVectors(i,n),ai.subVectors(o,n),ro.subVectors(t,n);const c=ri.dot(ro),h=ai.dot(ro);if(c<=0&&h<=0)return e.copy(n);ao.subVectors(t,i);const d=ri.dot(ao),u=ai.dot(ao);if(d>=0&&u<=d)return e.copy(i);const l=c*u-d*h;if(l<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(ri,a);co.subVectors(t,o);const f=ri.dot(co),_=ai.dot(co);if(_>=0&&f<=_)return e.copy(o);const v=f*h-c*_;if(v<=0&&h>=0&&_<=0)return r=h/(h-_),e.copy(n).addScaledVector(ai,r);const m=d*_-f*u;if(m<=0&&u-d>=0&&f-_>=0)return Wr.subVectors(o,i),r=(u-d)/(u-d+(f-_)),e.copy(i).addScaledVector(Wr,r);const p=1/(m+v+l);return a=v*p,r=l*p,e.copy(n).addScaledVector(ri,a).addScaledVector(ai,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function lo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ce.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ce.workingColorSpace){return this.r=t,this.g=e,this.b=n,ce.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ce.workingColorSpace){if(t=Go(t,1),e=Re(e,0,1),n=Re(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=lo(a,o,t+1/3),this.g=lo(a,o,t),this.b=lo(a,o,t-1/3)}return ce.toWorkingColorSpace(this,i),this}setStyle(t,e=Pe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const n=ja[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wi(t.r),this.g=wi(t.g),this.b=wi(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return ce.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Re(Ie.r*255,0,255))*65536+Math.round(Re(Ie.g*255,0,255))*256+Math.round(Re(Ie.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ce.workingColorSpace){ce.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,i=Ie.g,o=Ie.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let c,h;const d=(r+a)/2;if(r===a)c=0,h=0;else{const u=a-r;switch(h=d<=.5?u/(a+r):u/(2-a-r),a){case n:c=(i-o)/u+(i<o?6:0);break;case i:c=(o-n)/u+2;break;case o:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=ce.workingColorSpace){return ce.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=Pe){ce.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,i=Ie.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Tn),this.setHSL(Tn.h+t,Tn.s+e,Tn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Tn),t.getHSL(rs);const n=Bi(Tn.h,rs.h,e),i=Bi(Tn.s,rs.s,e),o=Bi(Tn.l,rs.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new ie;ie.NAMES=ja;let Zl=0;class Ri extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=xi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=To,this.blendDst=Ao,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==To&&(n.blendSrc=this.blendSrc),this.blendDst!==Ao&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const c=o[r];delete c.metadata,a.push(c)}return a}if(e){const o=i(t.textures),a=i(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class re extends Ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new F,as=new Ct;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)as.fromBufferAttribute(this,e),as.applyMatrix3(t),this.setXY(e,as.x,as.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),o=Ue(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lr&&(t.usage=this.usage),t}}class $a extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Qa extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kl=0;const qe=new _e,ho=new Se,ci=new F,We=new xn,Ni=new xn,Ae=new F;class De extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Xa(t)?Qa:$a)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ne().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qe.makeRotationFromQuaternion(t),this.applyMatrix4(qe),this}rotateX(t){return qe.makeRotationX(t),this.applyMatrix4(qe),this}rotateY(t){return qe.makeRotationY(t),this.applyMatrix4(qe),this}rotateZ(t){return qe.makeRotationZ(t),this.applyMatrix4(qe),this}translate(t,e,n){return qe.makeTranslation(t,e,n),this.applyMatrix4(qe),this}scale(t,e,n){return qe.makeScale(t,e,n),this.applyMatrix4(qe),this}lookAt(t){return ho.lookAt(t),ho.updateMatrix(),this.applyMatrix4(ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new le(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];We.setFromBufferAttribute(o),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Ni.setFromBufferAttribute(r),this.morphTargetsRelative?(Ae.addVectors(We.min,Ni.min),We.expandByPoint(Ae),Ae.addVectors(We.max,Ni.max),We.expandByPoint(Ae)):(We.expandByPoint(Ni.min),We.expandByPoint(Ni.max))}We.getCenter(n);let i=0;for(let o=0,a=t.count;o<a;o++)Ae.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Ae));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],c=this.morphTargetsRelative;for(let h=0,d=r.count;h<d;h++)Ae.fromBufferAttribute(r,h),c&&(ci.fromBufferAttribute(t,h),Ae.add(ci)),i=Math.max(i,n.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,o=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,h=[],d=[];for(let E=0;E<r;E++)h[E]=new F,d[E]=new F;const u=new F,l=new F,f=new F,_=new Ct,v=new Ct,m=new Ct,p=new F,x=new F;function g(E,T,U){u.fromArray(i,E*3),l.fromArray(i,T*3),f.fromArray(i,U*3),_.fromArray(a,E*2),v.fromArray(a,T*2),m.fromArray(a,U*2),l.sub(u),f.sub(u),v.sub(_),m.sub(_);const it=1/(v.x*m.y-m.x*v.y);isFinite(it)&&(p.copy(l).multiplyScalar(m.y).addScaledVector(f,-v.y).multiplyScalar(it),x.copy(f).multiplyScalar(v.x).addScaledVector(l,-m.x).multiplyScalar(it),h[E].add(p),h[T].add(p),h[U].add(p),d[E].add(x),d[T].add(x),d[U].add(x))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let E=0,T=w.length;E<T;++E){const U=w[E],it=U.start,O=U.count;for(let z=it,H=it+O;z<H;z+=3)g(n[z+0],n[z+1],n[z+2])}const I=new F,C=new F,L=new F,B=new F;function y(E){L.fromArray(o,E*3),B.copy(L);const T=h[E];I.copy(T),I.sub(L.multiplyScalar(L.dot(T))).normalize(),C.crossVectors(B,T);const it=C.dot(d[E])<0?-1:1;c[E*4]=I.x,c[E*4+1]=I.y,c[E*4+2]=I.z,c[E*4+3]=it}for(let E=0,T=w.length;E<T;++E){const U=w[E],it=U.start,O=U.count;for(let z=it,H=it+O;z<H;z+=3)y(n[z+0]),y(n[z+1]),y(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,f=n.count;l<f;l++)n.setXYZ(l,0,0,0);const i=new F,o=new F,a=new F,r=new F,c=new F,h=new F,d=new F,u=new F;if(t)for(let l=0,f=t.count;l<f;l+=3){const _=t.getX(l+0),v=t.getX(l+1),m=t.getX(l+2);i.fromBufferAttribute(e,_),o.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),d.subVectors(a,o),u.subVectors(i,o),d.cross(u),r.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),r.add(d),c.add(d),h.add(d),n.setXYZ(_,r.x,r.y,r.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,f=e.count;l<f;l+=3)i.fromBufferAttribute(e,l+0),o.fromBufferAttribute(e,l+1),a.fromBufferAttribute(e,l+2),d.subVectors(a,o),u.subVectors(i,o),d.cross(u),n.setXYZ(l+0,d.x,d.y,d.z),n.setXYZ(l+1,d.x,d.y,d.z),n.setXYZ(l+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(r,c){const h=r.array,d=r.itemSize,u=r.normalized,l=new h.constructor(c.length*d);let f=0,_=0;for(let v=0,m=c.length;v<m;v++){r.isInterleavedBufferAttribute?f=c[v]*r.data.stride+r.offset:f=c[v]*d;for(let p=0;p<d;p++)l[_++]=h[f++]}return new cn(l,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],h=t(c,n);e.setAttribute(r,h)}const o=this.morphAttributes;for(const r in o){const c=[],h=o[r];for(let d=0,u=h.length;d<u;d++){const l=h[d],f=t(l,n);c.push(f)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,c=a.length;r<c;r++){const h=a[r];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let u=0,l=h.length;u<l;u++){const f=h[u];d.push(f.toJSON(t.data))}d.length>0&&(i[c]=d,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(e))}const o=t.morphAttributes;for(const h in o){const d=[],u=o[h];for(let l=0,f=u.length;l<f;l++)d.push(u[l].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const u=a[h];this.addGroup(u.start,u.count,u.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xr=new _e,Gn=new Ka,cs=new Ns,qr=new F,li=new F,hi=new F,di=new F,uo=new F,ls=new F,hs=new Ct,ds=new Ct,us=new Ct,Yr=new F,Zr=new F,Kr=new F,fs=new F,ps=new F;class M extends Se{constructor(t=new De,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(o&&r){ls.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const d=r[c],u=o[c];d!==0&&(uo.fromBufferAttribute(u,t),a?ls.addScaledVector(uo,d):ls.addScaledVector(uo.sub(e),d))}e.add(ls)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(o),Gn.copy(t.ray).recast(t.near),!(cs.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(cs,qr)===null||Gn.origin.distanceToSquared(qr)>(t.far-t.near)**2))&&(Xr.copy(o).invert(),Gn.copy(t.ray).applyMatrix4(Xr),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,a=this.material,r=o.index,c=o.attributes.position,h=o.attributes.uv,d=o.attributes.uv1,u=o.attributes.normal,l=o.groups,f=o.drawRange;if(r!==null)if(Array.isArray(a))for(let _=0,v=l.length;_<v;_++){const m=l[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),g=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,I=g;w<I;w+=3){const C=r.getX(w),L=r.getX(w+1),B=r.getX(w+2);i=ms(this,p,t,n,h,d,u,C,L,B),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const x=r.getX(m),g=r.getX(m+1),w=r.getX(m+2);i=ms(this,a,t,n,h,d,u,x,g,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=l.length;_<v;_++){const m=l[_],p=a[m.materialIndex],x=Math.max(m.start,f.start),g=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let w=x,I=g;w<I;w+=3){const C=w,L=w+1,B=w+2;i=ms(this,p,t,n,h,d,u,C,L,B),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=_,p=v;m<p;m+=3){const x=m,g=m+1,w=m+2;i=ms(this,a,t,n,h,d,u,x,g,w),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Jl(s,t,e,n,i,o,a,r){let c;if(t.side===Be?c=n.intersectTriangle(a,o,i,!0,r):c=n.intersectTriangle(i,o,a,t.side===In,r),c===null)return null;ps.copy(r),ps.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(ps);return h<e.near||h>e.far?null:{distance:h,point:ps.clone(),object:s}}function ms(s,t,e,n,i,o,a,r,c,h){s.getVertexPosition(r,li),s.getVertexPosition(c,hi),s.getVertexPosition(h,di);const d=Jl(s,t,e,n,li,hi,di,fs);if(d){i&&(hs.fromBufferAttribute(i,r),ds.fromBufferAttribute(i,c),us.fromBufferAttribute(i,h),d.uv=Qe.getInterpolation(fs,li,hi,di,hs,ds,us,new Ct)),o&&(hs.fromBufferAttribute(o,r),ds.fromBufferAttribute(o,c),us.fromBufferAttribute(o,h),d.uv1=Qe.getInterpolation(fs,li,hi,di,hs,ds,us,new Ct),d.uv2=d.uv1),a&&(Yr.fromBufferAttribute(a,r),Zr.fromBufferAttribute(a,c),Kr.fromBufferAttribute(a,h),d.normal=Qe.getInterpolation(fs,li,hi,di,Yr,Zr,Kr,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:r,b:c,c:h,normal:new F,materialIndex:0};Qe.getNormal(li,hi,di,u.normal),d.face=u}return d}class Z extends De{constructor(t=1,e=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const c=[],h=[],d=[],u=[];let l=0,f=0;_("z","y","x",-1,-1,n,e,t,a,o,0),_("z","y","x",1,-1,n,e,-t,a,o,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,o,4),_("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new le(h,3)),this.setAttribute("normal",new le(d,3)),this.setAttribute("uv",new le(u,2));function _(v,m,p,x,g,w,I,C,L,B,y){const E=w/L,T=I/B,U=w/2,it=I/2,O=C/2,z=L+1,H=B+1;let Q=0,V=0;const K=new F;for(let ot=0;ot<H;ot++){const J=ot*T-it;for(let rt=0;rt<z;rt++){const X=rt*E-U;K[v]=X*x,K[m]=J*g,K[p]=O,h.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=C>0?1:-1,d.push(K.x,K.y,K.z),u.push(rt/L),u.push(1-ot/B),Q+=1}}for(let ot=0;ot<B;ot++)for(let J=0;J<L;J++){const rt=l+J+z*ot,X=l+J+z*(ot+1),at=l+(J+1)+z*(ot+1),St=l+(J+1)+z*ot;c.push(rt,X,St),c.push(X,at,St),V+=6}r.addGroup(f,V,y),f+=V,l+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Z(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(s){const t={};for(let e=0;e<s.length;e++){const n=Ti(s[e]);for(const i in n)t[i]=n[i]}return t}function jl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function tc(s){return s.getRenderTarget()===null?s.outputColorSpace:ce.workingColorSpace}const $l={clone:Ti,merge:Ne};var Ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ql,this.fragmentShader=th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=jl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ec extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ge extends ec{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bi*2*Math.atan(Math.tan(Fi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;o+=a.offsetX*i/c,e-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ui=-90,fi=1;class eh extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ge(ui,fi,t,e);i.layers=this.layers,this.add(i);const o=new Ge(ui,fi,t,e);o.layers=this.layers,this.add(o);const a=new Ge(ui,fi,t,e);a.layers=this.layers,this.add(a);const r=new Ge(ui,fi,t,e);r.layers=this.layers,this.add(r);const c=new Ge(ui,fi,t,e);c.layers=this.layers,this.add(c);const h=new Ge(ui,fi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,a,r,c]=e;for(const h of e)this.remove(h);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,c,h,d]=this.children,u=t.getRenderTarget(),l=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(u,l,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class nc extends ke{constructor(t,e,n,i,o,a,r,c,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,i,o,a,r,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nh extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yn?Pe:Ze),this.texture=new nc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ye}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Z(5,5,5),o=new Kn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Pn});o.uniforms.tEquirect.value=e;const a=new M(i,o),r=e.minFilter;return e.minFilter===Hi&&(e.minFilter=Ye),new eh(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(o)}}const fo=new F,ih=new F,sh=new ne;class zn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=fo.subVectors(n,e).cross(ih.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(fo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sh.getNormalMatrix(t),i=this.coplanarPoint(fo).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Ns,gs=new F;class ko{constructor(t=new zn,e=new zn,n=new zn,i=new zn,o=new zn,a=new zn){this.planes=[t,e,n,i,o,a]}set(t,e,n,i,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,i=t.elements,o=i[0],a=i[1],r=i[2],c=i[3],h=i[4],d=i[5],u=i[6],l=i[7],f=i[8],_=i[9],v=i[10],m=i[11],p=i[12],x=i[13],g=i[14],w=i[15];if(n[0].setComponents(c-o,l-h,m-f,w-p).normalize(),n[1].setComponents(c+o,l+h,m+f,w+p).normalize(),n[2].setComponents(c+a,l+d,m+_,w+x).normalize(),n[3].setComponents(c-a,l-d,m-_,w-x).normalize(),n[4].setComponents(c-r,l-u,m-v,w-g).normalize(),e===vn)n[5].setComponents(c+r,l+u,m+v,w+g).normalize();else if(e===Rs)n[5].setComponents(r,u,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(gs.x=i.normal.x>0?t.max.x:t.min.x,gs.y=i.normal.y>0?t.max.y:t.min.y,gs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ic(){let s=null,t=!1,e=null,n=null;function i(o,a){e(o,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function oh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(h,d){const u=h.array,l=h.usage,f=u.byteLength,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,u,l),h.onUploadCallback();let v;if(u instanceof Float32Array)v=s.FLOAT;else if(u instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)v=s.SHORT;else if(u instanceof Uint32Array)v=s.UNSIGNED_INT;else if(u instanceof Int32Array)v=s.INT;else if(u instanceof Int8Array)v=s.BYTE;else if(u instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:_,type:v,bytesPerElement:u.BYTES_PER_ELEMENT,version:h.version,size:f}}function o(h,d,u){const l=d.array,f=d._updateRange,_=d.updateRanges;if(s.bindBuffer(u,h),f.count===-1&&_.length===0&&s.bufferSubData(u,0,l),_.length!==0){for(let v=0,m=_.length;v<m;v++){const p=_[v];e?s.bufferSubData(u,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count):s.bufferSubData(u,p.start*l.BYTES_PER_ELEMENT,l.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(u,f.offset*l.BYTES_PER_ELEMENT,l,f.offset,f.count):s.bufferSubData(u,f.offset*l.BYTES_PER_ELEMENT,l.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(s.deleteBuffer(d.buffer),n.delete(h))}function c(h,d){if(h.isGLBufferAttribute){const l=n.get(h);(!l||l.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);if(u===void 0)n.set(h,i(h,d));else if(u.version<h.version){if(u.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(u.buffer,h,d),u.version=h.version}}return{get:a,remove:r,update:c}}class Yt extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,a=e/2,r=Math.floor(n),c=Math.floor(i),h=r+1,d=c+1,u=t/r,l=e/c,f=[],_=[],v=[],m=[];for(let p=0;p<d;p++){const x=p*l-a;for(let g=0;g<h;g++){const w=g*u-o;_.push(w,-x,0),v.push(0,0,1),m.push(g/r),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<r;x++){const g=x+h*p,w=x+h*(p+1),I=x+1+h*(p+1),C=x+1+h*p;f.push(g,w,C),f.push(w,I,C)}this.setIndex(f),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.width,t.height,t.widthSegments,t.heightSegments)}}var rh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ah=`#ifdef USE_ALPHAHASH
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
#endif`,ch=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,dh=`#ifdef USE_ALPHATEST
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
#endif`,fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ph=`#ifdef USE_BATCHING
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
#endif`,mh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mh=`#ifdef USE_IRIDESCENCE
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
#endif`,xh=`#ifdef USE_BUMPMAP
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
#endif`,wh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ph=`#define PI 3.141592653589793
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
} // validated`,Ch=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lh=`vec3 transformedNormal = objectNormal;
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
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fh=`
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
}`,Bh=`#ifdef USE_ENVMAP
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
#endif`,Gh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kh=`#ifdef USE_ENVMAP
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
#endif`,zh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
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
#endif`,Hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yh=`#ifdef USE_GRADIENTMAP
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
}`,Zh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$h=`uniform bool receiveShadow;
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
#endif`,Qh=`#ifdef USE_ENVMAP
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
#endif`,td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sd=`PhysicalMaterial material;
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
#endif`,od=`struct PhysicalMaterial {
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
}`,rd=`
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
#endif`,ad=`#if defined( RE_IndirectDiffuse )
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
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gd=`#if defined( USE_POINTS_UV )
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
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
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
#endif`,wd=`#ifdef USE_MORPHTARGETS
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
#endif`,Sd=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ed=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rd=`#ifdef USE_NORMALMAP
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
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ld=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ud=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wd=`float getShadowMask() {
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
}`,Xd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qd=`#ifdef USE_SKINNING
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
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zd=`#ifdef USE_SKINNING
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
#endif`,Kd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$d=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qd=`#ifdef USE_TRANSMISSION
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
#endif`,tu=`#ifdef USE_TRANSMISSION
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
#endif`,eu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,su=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ou=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ru=`uniform sampler2D t2D;
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
}`,au=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,du=`#include <common>
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
}`,uu=`#if DEPTH_PACKING == 3200
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
}`,fu=`#define DISTANCE
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
}`,pu=`#define DISTANCE
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
}`,mu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_u=`uniform float scale;
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
}`,vu=`uniform vec3 diffuse;
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
}`,Mu=`#include <common>
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
}`,xu=`uniform vec3 diffuse;
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
}`,wu=`#define LAMBERT
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
}`,Su=`#define LAMBERT
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
}`,yu=`#define MATCAP
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
}`,Eu=`#define MATCAP
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
}`,bu=`#define NORMAL
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
}`,Tu=`#define NORMAL
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
}`,Au=`#define PHONG
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
}`,Ru=`#define PHONG
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
}`,Pu=`#define STANDARD
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
}`,Cu=`#define STANDARD
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
}`,Lu=`#define TOON
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
}`,Iu=`#define TOON
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
}`,Du=`uniform float size;
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
}`,Uu=`uniform vec3 diffuse;
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
}`,Nu=`#include <common>
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
}`,Ou=`uniform vec3 color;
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
}`,Fu=`uniform float rotation;
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
}`,Bu=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:rh,alphahash_pars_fragment:ah,alphamap_fragment:ch,alphamap_pars_fragment:lh,alphatest_fragment:hh,alphatest_pars_fragment:dh,aomap_fragment:uh,aomap_pars_fragment:fh,batching_pars_vertex:ph,batching_vertex:mh,begin_vertex:gh,beginnormal_vertex:_h,bsdfs:vh,iridescence_fragment:Mh,bumpmap_pars_fragment:xh,clipping_planes_fragment:wh,clipping_planes_pars_fragment:Sh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:Eh,color_fragment:bh,color_pars_fragment:Th,color_pars_vertex:Ah,color_vertex:Rh,common:Ph,cube_uv_reflection_fragment:Ch,defaultnormal_vertex:Lh,displacementmap_pars_vertex:Ih,displacementmap_vertex:Dh,emissivemap_fragment:Uh,emissivemap_pars_fragment:Nh,colorspace_fragment:Oh,colorspace_pars_fragment:Fh,envmap_fragment:Bh,envmap_common_pars_fragment:Gh,envmap_pars_fragment:kh,envmap_pars_vertex:zh,envmap_physical_pars_fragment:Qh,envmap_vertex:Vh,fog_vertex:Hh,fog_pars_vertex:Wh,fog_fragment:Xh,fog_pars_fragment:qh,gradientmap_pars_fragment:Yh,lightmap_fragment:Zh,lightmap_pars_fragment:Kh,lights_lambert_fragment:Jh,lights_lambert_pars_fragment:jh,lights_pars_begin:$h,lights_toon_fragment:td,lights_toon_pars_fragment:ed,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:sd,lights_physical_pars_fragment:od,lights_fragment_begin:rd,lights_fragment_maps:ad,lights_fragment_end:cd,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:dd,logdepthbuf_vertex:ud,map_fragment:fd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:vd,morphcolor_vertex:Md,morphnormal_vertex:xd,morphtarget_pars_vertex:wd,morphtarget_vertex:Sd,normal_fragment_begin:yd,normal_fragment_maps:Ed,normal_pars_fragment:bd,normal_pars_vertex:Td,normal_vertex:Ad,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Cd,clearcoat_pars_fragment:Ld,iridescence_pars_fragment:Id,opaque_fragment:Dd,packing:Ud,premultiplied_alpha_fragment:Nd,project_vertex:Od,dithering_fragment:Fd,dithering_pars_fragment:Bd,roughnessmap_fragment:Gd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Vd,shadowmap_vertex:Hd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:qd,skinning_vertex:Yd,skinnormal_vertex:Zd,specularmap_fragment:Kd,specularmap_pars_fragment:Jd,tonemapping_fragment:jd,tonemapping_pars_fragment:$d,transmission_fragment:Qd,transmission_pars_fragment:tu,uv_pars_fragment:eu,uv_pars_vertex:nu,uv_vertex:iu,worldpos_vertex:su,background_vert:ou,background_frag:ru,backgroundCube_vert:au,backgroundCube_frag:cu,cube_vert:lu,cube_frag:hu,depth_vert:du,depth_frag:uu,distanceRGBA_vert:fu,distanceRGBA_frag:pu,equirect_vert:mu,equirect_frag:gu,linedashed_vert:_u,linedashed_frag:vu,meshbasic_vert:Mu,meshbasic_frag:xu,meshlambert_vert:wu,meshlambert_frag:Su,meshmatcap_vert:yu,meshmatcap_frag:Eu,meshnormal_vert:bu,meshnormal_frag:Tu,meshphong_vert:Au,meshphong_frag:Ru,meshphysical_vert:Pu,meshphysical_frag:Cu,meshtoon_vert:Lu,meshtoon_frag:Iu,points_vert:Du,points_frag:Uu,shadow_vert:Nu,shadow_frag:Ou,sprite_vert:Fu,sprite_frag:Bu},Lt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},an={basic:{uniforms:Ne([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Ne([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Ne([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Ne([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Ne([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new ie(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Ne([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Ne([Lt.points,Lt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Ne([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Ne([Lt.common,Lt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Ne([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Ne([Lt.sprite,Lt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Ne([Lt.common,Lt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Ne([Lt.lights,Lt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};an.physical={uniforms:Ne([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const _s={r:0,b:0,g:0};function Gu(s,t,e,n,i,o,a){const r=new ie(0);let c=o===!0?0:1,h,d,u=null,l=0,f=null;function _(m,p){let x=!1,g=p.isScene===!0?p.background:null;g&&g.isTexture&&(g=(p.backgroundBlurriness>0?e:t).get(g)),g===null?v(r,c):g&&g.isColor&&(v(g,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ds)?(d===void 0&&(d=new M(new Z(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ti(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=g,d.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=ce.getTransfer(g.colorSpace)!==de,(u!==g||l!==g.version||f!==s.toneMapping)&&(d.material.needsUpdate=!0,u=g,l=g.version,f=s.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):g&&g.isTexture&&(h===void 0&&(h=new M(new Yt(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ti(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=g,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ce.getTransfer(g.colorSpace)!==de,g.matrixAutoUpdate===!0&&g.updateMatrix(),h.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||l!==g.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=g,l=g.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function v(m,p){m.getRGB(_s,tc(s)),n.buffers.color.setClear(_s.r,_s.g,_s.b,p,a)}return{getClearColor:function(){return r},setClearColor:function(m,p=1){r.set(m),c=p,v(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(r,c)},render:_}}function ku(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,r={},c=m(null);let h=c,d=!1;function u(O,z,H,Q,V){let K=!1;if(a){const ot=v(Q,H,z);h!==ot&&(h=ot,f(h.object)),K=p(O,Q,H,V),K&&x(O,Q,H,V)}else{const ot=z.wireframe===!0;(h.geometry!==Q.id||h.program!==H.id||h.wireframe!==ot)&&(h.geometry=Q.id,h.program=H.id,h.wireframe=ot,K=!0)}V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(K||d)&&(d=!1,B(O,z,H,Q),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function f(O){return n.isWebGL2?s.bindVertexArray(O):o.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?s.deleteVertexArray(O):o.deleteVertexArrayOES(O)}function v(O,z,H){const Q=H.wireframe===!0;let V=r[O.id];V===void 0&&(V={},r[O.id]=V);let K=V[z.id];K===void 0&&(K={},V[z.id]=K);let ot=K[Q];return ot===void 0&&(ot=m(l()),K[Q]=ot),ot}function m(O){const z=[],H=[],Q=[];for(let V=0;V<i;V++)z[V]=0,H[V]=0,Q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:Q,object:O,attributes:{},index:null}}function p(O,z,H,Q){const V=h.attributes,K=z.attributes;let ot=0;const J=H.getAttributes();for(const rt in J)if(J[rt].location>=0){const at=V[rt];let St=K[rt];if(St===void 0&&(rt==="instanceMatrix"&&O.instanceMatrix&&(St=O.instanceMatrix),rt==="instanceColor"&&O.instanceColor&&(St=O.instanceColor)),at===void 0||at.attribute!==St||St&&at.data!==St.data)return!0;ot++}return h.attributesNum!==ot||h.index!==Q}function x(O,z,H,Q){const V={},K=z.attributes;let ot=0;const J=H.getAttributes();for(const rt in J)if(J[rt].location>=0){let at=K[rt];at===void 0&&(rt==="instanceMatrix"&&O.instanceMatrix&&(at=O.instanceMatrix),rt==="instanceColor"&&O.instanceColor&&(at=O.instanceColor));const St={};St.attribute=at,at&&at.data&&(St.data=at.data),V[rt]=St,ot++}h.attributes=V,h.attributesNum=ot,h.index=Q}function g(){const O=h.newAttributes;for(let z=0,H=O.length;z<H;z++)O[z]=0}function w(O){I(O,0)}function I(O,z){const H=h.newAttributes,Q=h.enabledAttributes,V=h.attributeDivisors;H[O]=1,Q[O]===0&&(s.enableVertexAttribArray(O),Q[O]=1),V[O]!==z&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),V[O]=z)}function C(){const O=h.newAttributes,z=h.enabledAttributes;for(let H=0,Q=z.length;H<Q;H++)z[H]!==O[H]&&(s.disableVertexAttribArray(H),z[H]=0)}function L(O,z,H,Q,V,K,ot){ot===!0?s.vertexAttribIPointer(O,z,H,V,K):s.vertexAttribPointer(O,z,H,Q,V,K)}function B(O,z,H,Q){if(n.isWebGL2===!1&&(O.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const V=Q.attributes,K=H.getAttributes(),ot=z.defaultAttributeValues;for(const J in K){const rt=K[J];if(rt.location>=0){let X=V[J];if(X===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(X=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(X=O.instanceColor)),X!==void 0){const at=X.normalized,St=X.itemSize,vt=e.get(X);if(vt===void 0)continue;const $=vt.buffer,_t=vt.type,Rt=vt.bytesPerElement,yt=n.isWebGL2===!0&&(_t===s.INT||_t===s.UNSIGNED_INT||X.gpuType===Na);if(X.isInterleavedBufferAttribute){const Mt=X.data,D=Mt.stride,nt=X.offset;if(Mt.isInstancedInterleavedBuffer){for(let tt=0;tt<rt.locationSize;tt++)I(rt.location+tt,Mt.meshPerAttribute);O.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let tt=0;tt<rt.locationSize;tt++)w(rt.location+tt);s.bindBuffer(s.ARRAY_BUFFER,$);for(let tt=0;tt<rt.locationSize;tt++)L(rt.location+tt,St/rt.locationSize,_t,at,D*Rt,(nt+St/rt.locationSize*tt)*Rt,yt)}else{if(X.isInstancedBufferAttribute){for(let Mt=0;Mt<rt.locationSize;Mt++)I(rt.location+Mt,X.meshPerAttribute);O.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Mt=0;Mt<rt.locationSize;Mt++)w(rt.location+Mt);s.bindBuffer(s.ARRAY_BUFFER,$);for(let Mt=0;Mt<rt.locationSize;Mt++)L(rt.location+Mt,St/rt.locationSize,_t,at,St*Rt,St/rt.locationSize*Mt*Rt,yt)}}else if(ot!==void 0){const at=ot[J];if(at!==void 0)switch(at.length){case 2:s.vertexAttrib2fv(rt.location,at);break;case 3:s.vertexAttrib3fv(rt.location,at);break;case 4:s.vertexAttrib4fv(rt.location,at);break;default:s.vertexAttrib1fv(rt.location,at)}}}}C()}function y(){U();for(const O in r){const z=r[O];for(const H in z){const Q=z[H];for(const V in Q)_(Q[V].object),delete Q[V];delete z[H]}delete r[O]}}function E(O){if(r[O.id]===void 0)return;const z=r[O.id];for(const H in z){const Q=z[H];for(const V in Q)_(Q[V].object),delete Q[V];delete z[H]}delete r[O.id]}function T(O){for(const z in r){const H=r[z];if(H[O.id]===void 0)continue;const Q=H[O.id];for(const V in Q)_(Q[V].object),delete Q[V];delete H[O.id]}}function U(){it(),d=!0,h!==c&&(h=c,f(h.object))}function it(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:U,resetDefaultState:it,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:w,disableUnusedAttributes:C}}function zu(s,t,e,n){const i=n.isWebGL2;let o;function a(d){o=d}function r(d,u){s.drawArrays(o,d,u),e.update(u,o,1)}function c(d,u,l){if(l===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](o,d,u,l),e.update(u,o,l)}function h(d,u,l){if(l===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l;_++)this.render(d[_],u[_]);else{f.multiDrawArraysWEBGL(o,d,0,u,0,l);let _=0;for(let v=0;v<l;v++)_+=u[v];e.update(_,o,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=h}function Vu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=o(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const h=a||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=l>0,w=a||t.has("OES_texture_float"),I=g&&w,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:o,precision:r,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:l,maxTextureSize:f,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:x,vertexTextures:g,floatFragmentTextures:w,floatVertexTextures:I,maxSamples:C}}function Hu(s){const t=this;let e=null,n=0,i=!1,o=!1;const a=new zn,r=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,l){const f=u.length!==0||l||n!==0||i;return i=l,n=u.length,f},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,l){e=d(u,l,0)},this.setState=function(u,l,f){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||o&&!m)o?d(null):h();else{const x=o?0:n,g=x*4;let w=p.clippingState||null;c.value=w,w=d(_,l,g,f);for(let I=0;I!==g;++I)w[I]=e[I];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(u,l,f,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const p=f+v*4,x=l.matrixWorldInverse;r.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let g=0,w=f;g!==v;++g,w+=4)a.copy(u[g]).applyMatrix4(x,r),a.normal.toArray(m,w),m[w+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Wu(s){let t=new WeakMap;function e(a,r){return r===Ro?a.mapping=Si:r===Po&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===Ro||r===Po)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new nh(c.height/2);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class sc extends ec{constructor(t=-1,e=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,r-=d*this.view.offsetY,c=r-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _i=4,Jr=[.125,.215,.35,.446,.526,.582],Wn=20,po=new sc,jr=new ie;let mo=null,go=0,_o=0;const Vn=(1+Math.sqrt(5))/2,pi=1/Vn,$r=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Vn,pi),new F(0,Vn,-pi),new F(pi,0,Vn),new F(-pi,0,Vn),new F(Vn,pi,0),new F(-Vn,pi,0)];class Qr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=na(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(mo,go,_o),t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mo=this._renderer.getRenderTarget(),go=this._renderer.getActiveCubeFace(),_o=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:Wi,format:en,colorSpace:Mn,depthBuffer:!1},i=ta(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ta(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xu(o)),this._blurMaterial=qu(o,t,e)}return i}_compileMaterial(t){const e=new M(this._lodPlanes[0],t);this._renderer.compile(e,po)}_sceneToCubeUV(t,e,n,i){const r=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,l=d.toneMapping;d.getClearColor(jr),d.toneMapping=Cn,d.autoClear=!1;const f=new re({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),_=new M(new Z,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(jr),v=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(r.up.set(0,c[p],0),r.lookAt(h[p],0,0)):x===1?(r.up.set(0,0,c[p]),r.lookAt(0,h[p],0)):(r.up.set(0,c[p],0),r.lookAt(0,0,h[p]));const g=this._cubeSize;vs(i,x*g,p>2?g:0,g,g),d.setRenderTarget(i),v&&d.render(_,r),d.render(t,r)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=l,d.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Si||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=na()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ea());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new M(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const c=this._cubeSize;vs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,po)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=$r[(i-1)%$r.length];this._blur(t,i-1,i,o,a)}e.autoClear=n}_blur(t,e,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",o),this._halfBlur(a,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,a,r){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new M(this._lodPlanes[i],h),l=h.uniforms,f=this._sizeLods[n]-1,_=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Wn-1),v=o/_,m=isFinite(o)?1+Math.floor(d*v):Wn;m>Wn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const p=[];let x=0;for(let L=0;L<Wn;++L){const B=L/v,y=Math.exp(-B*B/2);p.push(y),L===0?x+=y:L<m&&(x+=2*y)}for(let L=0;L<p.length;L++)p[L]=p[L]/x;l.envMap.value=t.texture,l.samples.value=m,l.weights.value=p,l.latitudinal.value=a==="latitudinal",r&&(l.poleAxis.value=r);const{_lodMax:g}=this;l.dTheta.value=_,l.mipInt.value=g-n;const w=this._sizeLods[i],I=3*w*(i>g-_i?i-g+_i:0),C=4*(this._cubeSize-w);vs(e,I,C,3*w,2*w),c.setRenderTarget(e),c.render(u,po)}}function Xu(s){const t=[],e=[],n=[];let i=s;const o=s-_i+1+Jr.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);e.push(r);let c=1/r;a>s-_i?c=Jr[a-s+_i-1]:a===0&&(c=0),n.push(c);const h=1/(r-2),d=-h,u=1+h,l=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,_=6,v=3,m=2,p=1,x=new Float32Array(v*_*f),g=new Float32Array(m*_*f),w=new Float32Array(p*_*f);for(let C=0;C<f;C++){const L=C%3*2/3-1,B=C>2?0:-1,y=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];x.set(y,v*_*C),g.set(l,m*_*C);const E=[C,C,C,C,C,C];w.set(E,p*_*C)}const I=new De;I.setAttribute("position",new cn(x,v)),I.setAttribute("uv",new cn(g,m)),I.setAttribute("faceIndex",new cn(w,p)),t.push(I),i>_i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ta(s,t,e){const n=new Zn(s,t,e);return n.texture.mapping=Ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function qu(s,t,e){const n=new Float32Array(Wn),i=new F(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ea(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function na(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function zo(){return`

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
	`}function Yu(s){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,h=c===Ro||c===Po,d=c===Si||c===yi;if(h||d)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let u=t.get(r);return e===null&&(e=new Qr(s)),u=h?e.fromEquirectangular(r,u):e.fromCubemap(r,u),t.set(r,u),u.texture}else{if(t.has(r))return t.get(r).texture;{const u=r.image;if(h&&u&&u.height>0||d&&u&&i(u)){e===null&&(e=new Qr(s));const l=h?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,l),r.addEventListener("dispose",o),l.texture}else return null}}}return r}function i(r){let c=0;const h=6;for(let d=0;d<h;d++)r[d]!==void 0&&c++;return c===h}function o(r){const c=r.target;c.removeEventListener("dispose",o);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Zu(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ku(s,t,e,n){const i={},o=new WeakMap;function a(u){const l=u.target;l.index!==null&&t.remove(l.index);for(const _ in l.attributes)t.remove(l.attributes[_]);for(const _ in l.morphAttributes){const v=l.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}l.removeEventListener("dispose",a),delete i[l.id];const f=o.get(l);f&&(t.remove(f),o.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function r(u,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,e.memory.geometries++),l}function c(u){const l=u.attributes;for(const _ in l)t.update(l[_],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const v=f[_];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function h(u){const l=[],f=u.index,_=u.attributes.position;let v=0;if(f!==null){const x=f.array;v=f.version;for(let g=0,w=x.length;g<w;g+=3){const I=x[g+0],C=x[g+1],L=x[g+2];l.push(I,C,C,L,L,I)}}else if(_!==void 0){const x=_.array;v=_.version;for(let g=0,w=x.length/3-1;g<w;g+=3){const I=g+0,C=g+1,L=g+2;l.push(I,C,C,L,L,I)}}else return;const m=new(Xa(l)?Qa:$a)(l,1);m.version=v;const p=o.get(u);p&&t.remove(p),o.set(u,m)}function d(u){const l=o.get(u);if(l){const f=u.index;f!==null&&l.version<f.version&&h(u)}else h(u);return o.get(u)}return{get:r,update:c,getWireframeAttribute:d}}function Ju(s,t,e,n){const i=n.isWebGL2;let o;function a(f){o=f}let r,c;function h(f){r=f.type,c=f.bytesPerElement}function d(f,_){s.drawElements(o,_,r,f*c),e.update(_,o,1)}function u(f,_,v){if(v===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](o,_,r,f*c,v),e.update(_,o,v)}function l(f,_,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(f[p]/c,_[p]);else{m.multiDrawElementsWEBGL(o,_,0,r,f,0,v);let p=0;for(let x=0;x<v;x++)p+=_[x];e.update(p,o,1)}}this.setMode=a,this.setIndex=h,this.render=d,this.renderInstances=u,this.renderMultiDraw=l}function ju(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=r*(o/3);break;case s.LINES:e.lines+=r*(o/2);break;case s.LINE_STRIP:e.lines+=r*(o-1);break;case s.LINE_LOOP:e.lines+=r*o;break;case s.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function $u(s,t){return s[0]-t[0]}function Qu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function tf(s,t,e){const n={},i=new Float32Array(8),o=new WeakMap,a=new ue,r=[];for(let h=0;h<8;h++)r[h]=[h,0];function c(h,d,u){const l=h.morphTargetInfluences;if(t.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let m=o.get(d);if(m===void 0||m.count!==v){let z=function(){it.dispose(),o.delete(d),d.removeEventListener("dispose",z)};var f=z;m!==void 0&&m.texture.dispose();const g=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,I=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let y=0;g===!0&&(y=1),w===!0&&(y=2),I===!0&&(y=3);let E=d.attributes.position.count*y,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const U=new Float32Array(E*T*4*v),it=new Za(U,E,T,v);it.type=Rn,it.needsUpdate=!0;const O=y*4;for(let H=0;H<v;H++){const Q=C[H],V=L[H],K=B[H],ot=E*T*4*H;for(let J=0;J<Q.count;J++){const rt=J*O;g===!0&&(a.fromBufferAttribute(Q,J),U[ot+rt+0]=a.x,U[ot+rt+1]=a.y,U[ot+rt+2]=a.z,U[ot+rt+3]=0),w===!0&&(a.fromBufferAttribute(V,J),U[ot+rt+4]=a.x,U[ot+rt+5]=a.y,U[ot+rt+6]=a.z,U[ot+rt+7]=0),I===!0&&(a.fromBufferAttribute(K,J),U[ot+rt+8]=a.x,U[ot+rt+9]=a.y,U[ot+rt+10]=a.z,U[ot+rt+11]=K.itemSize===4?a.w:1)}}m={count:v,texture:it,size:new Ct(E,T)},o.set(d,m),d.addEventListener("dispose",z)}let p=0;for(let g=0;g<l.length;g++)p+=l[g];const x=d.morphTargetsRelative?1:1-p;u.getUniforms().setValue(s,"morphTargetBaseInfluence",x),u.getUniforms().setValue(s,"morphTargetInfluences",l),u.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=l===void 0?0:l.length;let v=n[d.id];if(v===void 0||v.length!==_){v=[];for(let w=0;w<_;w++)v[w]=[w,0];n[d.id]=v}for(let w=0;w<_;w++){const I=v[w];I[0]=w,I[1]=l[w]}v.sort(Qu);for(let w=0;w<8;w++)w<_&&v[w][1]?(r[w][0]=v[w][0],r[w][1]=v[w][1]):(r[w][0]=Number.MAX_SAFE_INTEGER,r[w][1]=0);r.sort($u);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let x=0;for(let w=0;w<8;w++){const I=r[w],C=I[0],L=I[1];C!==Number.MAX_SAFE_INTEGER&&L?(m&&d.getAttribute("morphTarget"+w)!==m[C]&&d.setAttribute("morphTarget"+w,m[C]),p&&d.getAttribute("morphNormal"+w)!==p[C]&&d.setAttribute("morphNormal"+w,p[C]),i[w]=L,x+=L):(m&&d.hasAttribute("morphTarget"+w)===!0&&d.deleteAttribute("morphTarget"+w),p&&d.hasAttribute("morphNormal"+w)===!0&&d.deleteAttribute("morphNormal"+w),i[w]=0)}const g=d.morphTargetsRelative?1:1-x;u.getUniforms().setValue(s,"morphTargetBaseInfluence",g),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function ef(s,t,e,n){let i=new WeakMap;function o(c){const h=n.render.frame,d=c.geometry,u=t.get(c,d);if(i.get(u)!==h&&(t.update(u),i.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return u}function a(){i=new WeakMap}function r(c){const h=c.target;h.removeEventListener("dispose",r),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}class oc extends ke{constructor(t,e,n,i,o,a,r,c,h,d){if(d=d!==void 0?d:qn,d!==qn&&d!==Ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===qn&&(n=An),n===void 0&&d===Ei&&(n=Xn),super(null,i,o,a,r,c,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Fe,this.minFilter=c!==void 0?c:Fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rc=new ke,ac=new oc(1,1);ac.compareFunction=Wa;const cc=new Za,lc=new Gl,hc=new nc,ia=[],sa=[],oa=new Float32Array(16),ra=new Float32Array(9),aa=new Float32Array(4);function Pi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=ia[i];if(o===void 0&&(o=new Float32Array(i),ia[i]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,s[a].toArray(o,r)}return o}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ee(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Fs(s,t){let e=sa[t];e===void 0&&(e=new Int32Array(t),sa[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function nf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Ee(e,t)}}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Ee(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Ee(e,t)}}function af(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;aa.set(n),s.uniformMatrix2fv(this.addr,!1,aa),Ee(e,n)}}function cf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;ra.set(n),s.uniformMatrix3fv(this.addr,!1,ra),Ee(e,n)}}function lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(ye(e,n))return;oa.set(n),s.uniformMatrix4fv(this.addr,!1,oa),Ee(e,n)}}function hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Ee(e,t)}}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Ee(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Ee(e,t)}}function pf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Ee(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Ee(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Ee(e,t)}}function vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const o=this.type===s.SAMPLER_2D_SHADOW?ac:rc;e.setTexture2D(t||o,i)}function Mf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||lc,i)}function xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||hc,i)}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||cc,i)}function Sf(s){switch(s){case 5126:return nf;case 35664:return sf;case 35665:return of;case 35666:return rf;case 35674:return af;case 35675:return cf;case 35676:return lf;case 5124:case 35670:return hf;case 35667:case 35671:return df;case 35668:case 35672:return uf;case 35669:case 35673:return ff;case 5125:return pf;case 36294:return mf;case 36295:return gf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return wf}}function yf(s,t){s.uniform1fv(this.addr,t)}function Ef(s,t){const e=Pi(t,this.size,2);s.uniform2fv(this.addr,e)}function bf(s,t){const e=Pi(t,this.size,3);s.uniform3fv(this.addr,e)}function Tf(s,t){const e=Pi(t,this.size,4);s.uniform4fv(this.addr,e)}function Af(s,t){const e=Pi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Rf(s,t){const e=Pi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Pf(s,t){const e=Pi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Cf(s,t){s.uniform1iv(this.addr,t)}function Lf(s,t){s.uniform2iv(this.addr,t)}function If(s,t){s.uniform3iv(this.addr,t)}function Df(s,t){s.uniform4iv(this.addr,t)}function Uf(s,t){s.uniform1uiv(this.addr,t)}function Nf(s,t){s.uniform2uiv(this.addr,t)}function Of(s,t){s.uniform3uiv(this.addr,t)}function Ff(s,t){s.uniform4uiv(this.addr,t)}function Bf(s,t,e){const n=this.cache,i=t.length,o=Fs(e,i);ye(n,o)||(s.uniform1iv(this.addr,o),Ee(n,o));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||rc,o[a])}function Gf(s,t,e){const n=this.cache,i=t.length,o=Fs(e,i);ye(n,o)||(s.uniform1iv(this.addr,o),Ee(n,o));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||lc,o[a])}function kf(s,t,e){const n=this.cache,i=t.length,o=Fs(e,i);ye(n,o)||(s.uniform1iv(this.addr,o),Ee(n,o));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||hc,o[a])}function zf(s,t,e){const n=this.cache,i=t.length,o=Fs(e,i);ye(n,o)||(s.uniform1iv(this.addr,o),Ee(n,o));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||cc,o[a])}function Vf(s){switch(s){case 5126:return yf;case 35664:return Ef;case 35665:return bf;case 35666:return Tf;case 35674:return Af;case 35675:return Rf;case 35676:return Pf;case 5124:case 35670:return Cf;case 35667:case 35671:return Lf;case 35668:case 35672:return If;case 35669:case 35673:return Df;case 5125:return Uf;case 36294:return Nf;case 36295:return Of;case 36296:return Ff;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return zf}}class Hf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sf(e.type)}}class Wf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vf(e.type)}}class Xf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(t,e[r.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function ca(s,t){s.seq.push(t),s.map[t.id]=t}function qf(s,t,e){const n=s.name,i=n.length;for(vo.lastIndex=0;;){const o=vo.exec(n),a=vo.lastIndex;let r=o[1];const c=o[2]==="]",h=o[3];if(c&&(r=r|0),h===void 0||h==="["&&a+2===i){ca(e,h===void 0?new Hf(r,s,t):new Wf(r,s,t));break}else{let u=e.map[r];u===void 0&&(u=new Xf(r),ca(e,u)),e=u}}}class ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),a=t.getUniformLocation(e,o.name);qf(o,a,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,a=e.length;o!==a;++o){const r=e[o],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function la(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Yf=37297;let Zf=0;function Kf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function Jf(s){const t=ce.getPrimaries(ce.workingColorSpace),e=ce.getPrimaries(s);let n;switch(t===e?n="":t===As&&e===Ts?n="LinearDisplayP3ToLinearSRGB":t===Ts&&e===As&&(n="LinearSRGBToLinearDisplayP3"),s){case Mn:case Us:return[n,"LinearTransferOETF"];case Pe:case Bo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ha(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Kf(s.getShaderSource(t),a)}else return i}function jf(s,t){const e=Jf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function $f(s,t){let e;switch(t){case Jc:e="Linear";break;case jc:e="Reinhard";break;case $c:e="OptimizedCineon";break;case Da:e="ACESFilmic";break;case tl:e="AgX";break;case Qc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Qf(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(vi).join(`
`)}function tp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(vi).join(`
`)}function ep(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function np(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:r}}return e}function vi(s){return s!==""}function da(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ua(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(s){return s.replace(ip,op)}const sp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function op(s,t){let e=Qt[t];if(e===void 0){const n=sp.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Do(e)}const rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fa(s){return s.replace(rp,ap)}function ap(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function pa(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ca?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===La?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===_n&&(t="SHADOWMAP_TYPE_VSM"),t}function lp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Si:case yi:t="ENVMAP_TYPE_CUBE";break;case Ds:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function dp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ia:t="ENVMAP_BLENDING_MULTIPLY";break;case Zc:t="ENVMAP_BLENDING_MIX";break;case Kc:t="ENVMAP_BLENDING_ADD";break}return t}function up(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fp(s,t,e,n){const i=s.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const c=cp(e),h=lp(e),d=hp(e),u=dp(e),l=up(e),f=e.isWebGL2?"":Qf(e),_=tp(e),v=ep(o),m=i.createProgram();let p,x,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(vi).join(`
`),p.length>0&&(p+=`
`),x=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(vi).join(`
`),x.length>0&&(x+=`
`)):(p=[pa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vi).join(`
`),x=[f,pa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+u:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Cn?$f("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,jf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vi).join(`
`)),a=Do(a),a=da(a,e),a=ua(a,e),r=Do(r),r=da(r,e),r=ua(r,e),a=fa(a),r=fa(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ir?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ir?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=g+p+a,I=g+x+r,C=la(i,i.VERTEX_SHADER,w),L=la(i,i.FRAGMENT_SHADER,I);i.attachShader(m,C),i.attachShader(m,L),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function B(U){if(s.debug.checkShaderErrors){const it=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(C).trim(),z=i.getShaderInfoLog(L).trim();let H=!0,Q=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,C,L);else{const V=ha(i,C,"vertex"),K=ha(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+it+`
`+V+`
`+K)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(O===""||z==="")&&(Q=!1);Q&&(U.diagnostics={runnable:H,programLog:it,vertexShader:{log:O,prefix:p},fragmentShader:{log:z,prefix:x}})}i.deleteShader(C),i.deleteShader(L),y=new ys(i,m),E=np(i,m)}let y;this.getUniforms=function(){return y===void 0&&B(this),y};let E;this.getAttributes=function(){return E===void 0&&B(this),E};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Yf)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Zf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=L,this}let pp=0;class mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new gp(t),e.set(t,n)),n}}class gp{constructor(t){this.id=pp++,this.code=t,this.usedTimes=0}}function _p(s,t,e,n,i,o,a){const r=new Ja,c=new mp,h=[],d=i.isWebGL2,u=i.logarithmicDepthBuffer,l=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function m(y,E,T,U,it){const O=U.fog,z=it.geometry,H=y.isMeshStandardMaterial?U.environment:null,Q=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),V=Q&&Q.mapping===Ds?Q.image.height:null,K=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,J=ot!==void 0?ot.length:0;let rt=0;z.morphAttributes.position!==void 0&&(rt=1),z.morphAttributes.normal!==void 0&&(rt=2),z.morphAttributes.color!==void 0&&(rt=3);let X,at,St,vt;if(K){const se=an[K];X=se.vertexShader,at=se.fragmentShader}else X=y.vertexShader,at=y.fragmentShader,c.update(y),St=c.getVertexShaderID(y),vt=c.getFragmentShaderID(y);const $=s.getRenderTarget(),_t=it.isInstancedMesh===!0,Rt=it.isBatchedMesh===!0,yt=!!y.map,Mt=!!y.matcap,D=!!Q,nt=!!y.aoMap,tt=!!y.lightMap,mt=!!y.bumpMap,st=!!y.normalMap,Ft=!!y.displacementMap,Et=!!y.emissiveMap,R=!!y.metalnessMap,b=!!y.roughnessMap,q=y.anisotropy>0,pt=y.clearcoat>0,ht=y.iridescence>0,ct=y.sheen>0,Bt=y.transmission>0,At=q&&!!y.anisotropyMap,It=pt&&!!y.clearcoatMap,Gt=pt&&!!y.clearcoatNormalMap,Nt=pt&&!!y.clearcoatRoughnessMap,lt=ht&&!!y.iridescenceMap,Kt=ht&&!!y.iridescenceThicknessMap,qt=ct&&!!y.sheenColorMap,bt=ct&&!!y.sheenRoughnessMap,gt=!!y.specularMap,Tt=!!y.specularColorMap,Ot=!!y.specularIntensityMap,Ht=Bt&&!!y.transmissionMap,te=Bt&&!!y.thicknessMap,kt=!!y.gradientMap,xt=!!y.alphaMap,S=y.alphaTest>0,G=!!y.alphaHash,et=!!y.extensions,Ut=!!z.attributes.uv1,ut=!!z.attributes.uv2,Pt=!!z.attributes.uv3;let Xt=Cn;return y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Xt=s.toneMapping),{isWebGL2:d,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:X,fragmentShader:at,defines:y.defines,customVertexShaderID:St,customFragmentShaderID:vt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Rt,instancing:_t,instancingColor:_t&&it.instanceColor!==null,supportsVertexTextures:l,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Mn,map:yt,matcap:Mt,envMap:D,envMapMode:D&&Q.mapping,envMapCubeUVHeight:V,aoMap:nt,lightMap:tt,bumpMap:mt,normalMap:st,displacementMap:l&&Ft,emissiveMap:Et,normalMapObjectSpace:st&&y.normalMapType===ul,normalMapTangentSpace:st&&y.normalMapType===Ha,metalnessMap:R,roughnessMap:b,anisotropy:q,anisotropyMap:At,clearcoat:pt,clearcoatMap:It,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Nt,iridescence:ht,iridescenceMap:lt,iridescenceThicknessMap:Kt,sheen:ct,sheenColorMap:qt,sheenRoughnessMap:bt,specularMap:gt,specularColorMap:Tt,specularIntensityMap:Ot,transmission:Bt,transmissionMap:Ht,thicknessMap:te,gradientMap:kt,opaque:y.transparent===!1&&y.blending===xi,alphaMap:xt,alphaTest:S,alphaHash:G,combine:y.combine,mapUv:yt&&v(y.map.channel),aoMapUv:nt&&v(y.aoMap.channel),lightMapUv:tt&&v(y.lightMap.channel),bumpMapUv:mt&&v(y.bumpMap.channel),normalMapUv:st&&v(y.normalMap.channel),displacementMapUv:Ft&&v(y.displacementMap.channel),emissiveMapUv:Et&&v(y.emissiveMap.channel),metalnessMapUv:R&&v(y.metalnessMap.channel),roughnessMapUv:b&&v(y.roughnessMap.channel),anisotropyMapUv:At&&v(y.anisotropyMap.channel),clearcoatMapUv:It&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&v(y.sheenRoughnessMap.channel),specularMapUv:gt&&v(y.specularMap.channel),specularColorMapUv:Tt&&v(y.specularColorMap.channel),specularIntensityMapUv:Ot&&v(y.specularIntensityMap.channel),transmissionMapUv:Ht&&v(y.transmissionMap.channel),thicknessMapUv:te&&v(y.thicknessMap.channel),alphaMapUv:xt&&v(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(st||q),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Ut,vertexUv2s:ut,vertexUv3s:Pt,pointsUvs:it.isPoints===!0&&!!z.attributes.uv&&(yt||xt),fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:it.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:rt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Xt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:yt&&y.map.isVideoTexture===!0&&ce.getTransfer(y.map.colorSpace)===de,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===we,flipSided:y.side===Be,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:et&&y.extensions.derivatives===!0,extensionFragDepth:et&&y.extensions.fragDepth===!0,extensionDrawBuffers:et&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:et&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:et&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)E.push(T),E.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(x(E,y),g(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){r.disableAll(),E.isWebGL2&&r.enable(0),E.supportsVertexTextures&&r.enable(1),E.instancing&&r.enable(2),E.instancingColor&&r.enable(3),E.matcap&&r.enable(4),E.envMap&&r.enable(5),E.normalMapObjectSpace&&r.enable(6),E.normalMapTangentSpace&&r.enable(7),E.clearcoat&&r.enable(8),E.iridescence&&r.enable(9),E.alphaTest&&r.enable(10),E.vertexColors&&r.enable(11),E.vertexAlphas&&r.enable(12),E.vertexUv1s&&r.enable(13),E.vertexUv2s&&r.enable(14),E.vertexUv3s&&r.enable(15),E.vertexTangents&&r.enable(16),E.anisotropy&&r.enable(17),E.alphaHash&&r.enable(18),E.batching&&r.enable(19),y.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.skinning&&r.enable(4),E.morphTargets&&r.enable(5),E.morphNormals&&r.enable(6),E.morphColors&&r.enable(7),E.premultipliedAlpha&&r.enable(8),E.shadowMapEnabled&&r.enable(9),E.useLegacyLights&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),y.push(r.mask)}function w(y){const E=_[y.type];let T;if(E){const U=an[E];T=$l.clone(U.uniforms)}else T=y.uniforms;return T}function I(y,E){let T;for(let U=0,it=h.length;U<it;U++){const O=h[U];if(O.cacheKey===E){T=O,++T.usedTimes;break}}return T===void 0&&(T=new fp(s,E,y,o),h.push(T)),T}function C(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function L(y){c.remove(y)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:I,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:B}}function vp(){let s=new WeakMap;function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function e(o){s.delete(o)}function n(o,a,r){s.get(o)[a]=r}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Mp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function ma(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ga(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function a(u,l,f,_,v,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:l,material:f,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=l,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function r(u,l,f,_,v,m){const p=a(u,l,f,_,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,l,f,_,v,m){const p=a(u,l,f,_,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(u,l){e.length>1&&e.sort(u||Mp),n.length>1&&n.sort(l||ma),i.length>1&&i.sort(l||ma)}function d(){for(let u=t,l=s.length;u<l;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:r,unshift:c,finish:d,sort:h}}function xp(){let s=new WeakMap;function t(n,i){const o=s.get(n);let a;return o===void 0?(a=new ga,s.set(n,[a])):i>=o.length?(a=new ga,o.push(a)):a=o[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function wp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new ie};break;case"SpotLight":e={position:new F,direction:new F,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function Sp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let yp=0;function Ep(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bp(s,t){const e=new wp,n=Sp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new F);const o=new F,a=new _e,r=new _e;function c(d,u){let l=0,f=0,_=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let v=0,m=0,p=0,x=0,g=0,w=0,I=0,C=0,L=0,B=0,y=0;d.sort(Ep);const E=u===!0?Math.PI:1;for(let U=0,it=d.length;U<it;U++){const O=d[U],z=O.color,H=O.intensity,Q=O.distance,V=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)l+=z.r*H*E,f+=z.g*H*E,_+=z.b*H*E;else if(O.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(O.sh.coefficients[K],H);y++}else if(O.isDirectionalLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity*E),O.castShadow){const ot=O.shadow,J=n.get(O);J.shadowBias=ot.bias,J.shadowNormalBias=ot.normalBias,J.shadowRadius=ot.radius,J.shadowMapSize=ot.mapSize,i.directionalShadow[v]=J,i.directionalShadowMap[v]=V,i.directionalShadowMatrix[v]=O.shadow.matrix,w++}i.directional[v]=K,v++}else if(O.isSpotLight){const K=e.get(O);K.position.setFromMatrixPosition(O.matrixWorld),K.color.copy(z).multiplyScalar(H*E),K.distance=Q,K.coneCos=Math.cos(O.angle),K.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),K.decay=O.decay,i.spot[p]=K;const ot=O.shadow;if(O.map&&(i.spotLightMap[L]=O.map,L++,ot.updateMatrices(O),O.castShadow&&B++),i.spotLightMatrix[p]=ot.matrix,O.castShadow){const J=n.get(O);J.shadowBias=ot.bias,J.shadowNormalBias=ot.normalBias,J.shadowRadius=ot.radius,J.shadowMapSize=ot.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=V,C++}p++}else if(O.isRectAreaLight){const K=e.get(O);K.color.copy(z).multiplyScalar(H),K.halfWidth.set(O.width*.5,0,0),K.halfHeight.set(0,O.height*.5,0),i.rectArea[x]=K,x++}else if(O.isPointLight){const K=e.get(O);if(K.color.copy(O.color).multiplyScalar(O.intensity*E),K.distance=O.distance,K.decay=O.decay,O.castShadow){const ot=O.shadow,J=n.get(O);J.shadowBias=ot.bias,J.shadowNormalBias=ot.normalBias,J.shadowRadius=ot.radius,J.shadowMapSize=ot.mapSize,J.shadowCameraNear=ot.camera.near,J.shadowCameraFar=ot.camera.far,i.pointShadow[m]=J,i.pointShadowMap[m]=V,i.pointShadowMatrix[m]=O.shadow.matrix,I++}i.point[m]=K,m++}else if(O.isHemisphereLight){const K=e.get(O);K.skyColor.copy(O.color).multiplyScalar(H*E),K.groundColor.copy(O.groundColor).multiplyScalar(H*E),i.hemi[g]=K,g++}}x>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2):(i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_FLOAT_1,i.rectAreaLTC2=Lt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Lt.LTC_HALF_1,i.rectAreaLTC2=Lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=f,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==v||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==x||T.hemiLength!==g||T.numDirectionalShadows!==w||T.numPointShadows!==I||T.numSpotShadows!==C||T.numSpotMaps!==L||T.numLightProbes!==y)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=x,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=C+L-B,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=y,T.directionalLength=v,T.pointLength=m,T.spotLength=p,T.rectAreaLength=x,T.hemiLength=g,T.numDirectionalShadows=w,T.numPointShadows=I,T.numSpotShadows=C,T.numSpotMaps=L,T.numLightProbes=y,i.version=yp++)}function h(d,u){let l=0,f=0,_=0,v=0,m=0;const p=u.matrixWorldInverse;for(let x=0,g=d.length;x<g;x++){const w=d[x];if(w.isDirectionalLight){const I=i.directional[l];I.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(p),l++}else if(w.isSpotLight){const I=i.spot[_];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(p),_++}else if(w.isRectAreaLight){const I=i.rectArea[v];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(p),r.identity(),a.copy(w.matrixWorld),a.premultiply(p),r.extractRotation(a),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(r),I.halfHeight.applyMatrix4(r),v++}else if(w.isPointLight){const I=i.point[f];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(p),f++}else if(w.isHemisphereLight){const I=i.hemi[m];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:i}}function _a(s,t){const e=new bp(s,t),n=[],i=[];function o(){n.length=0,i.length=0}function a(u){n.push(u)}function r(u){i.push(u)}function c(u){e.setup(n,u)}function h(u){e.setupView(n,u)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:r}}function Tp(s,t){let e=new WeakMap;function n(o,a=0){const r=e.get(o);let c;return r===void 0?(c=new _a(s,t),e.set(o,[c])):a>=r.length?(c=new _a(s,t),r.push(c)):c=r[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Ap extends Ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Rp extends Ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cp=`uniform sampler2D shadow_pass;
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
}`;function Lp(s,t,e){let n=new ko;const i=new Ct,o=new Ct,a=new ue,r=new Ap({depthPacking:dl}),c=new Rp,h={},d=e.maxTextureSize,u={[In]:Be,[Be]:In,[we]:we},l=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Pp,fragmentShader:Cp}),f=l.clone();f.defines.HORIZONTAL_PASS=1;const _=new De;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new M(_,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ca;let p=this.type;this.render=function(C,L,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=s.getRenderTarget(),E=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),U=s.state;U.setBlending(Pn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const it=p!==_n&&this.type===_n,O=p===_n&&this.type!==_n;for(let z=0,H=C.length;z<H;z++){const Q=C[z],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const K=V.getFrameExtents();if(i.multiply(K),o.copy(V.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/K.x),i.x=o.x*K.x,V.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/K.y),i.y=o.y*K.y,V.mapSize.y=o.y)),V.map===null||it===!0||O===!0){const J=this.type!==_n?{minFilter:Fe,magFilter:Fe}:{};V.map!==null&&V.map.dispose(),V.map=new Zn(i.x,i.y,J),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ot=V.getViewportCount();for(let J=0;J<ot;J++){const rt=V.getViewport(J);a.set(o.x*rt.x,o.y*rt.y,o.x*rt.z,o.y*rt.w),U.viewport(a),V.updateMatrices(Q,J),n=V.getFrustum(),w(L,B,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===_n&&x(V,B),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,E,T)};function x(C,L){const B=t.update(v);l.defines.VSM_SAMPLES!==C.blurSamples&&(l.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,l.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(i.x,i.y)),l.uniforms.shadow_pass.value=C.map.texture,l.uniforms.resolution.value=C.mapSize,l.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(L,null,B,l,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(L,null,B,f,v,null)}function g(C,L,B,y){let E=null;const T=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)E=T;else if(E=B.isPointLight===!0?c:r,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const U=E.uuid,it=L.uuid;let O=h[U];O===void 0&&(O={},h[U]=O);let z=O[it];z===void 0&&(z=E.clone(),O[it]=z,L.addEventListener("dispose",I)),E=z}if(E.visible=L.visible,E.wireframe=L.wireframe,y===_n?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:u[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=s.properties.get(E);U.light=B}return E}function w(C,L,B,y,E){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===_n)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const it=t.update(C),O=C.material;if(Array.isArray(O)){const z=it.groups;for(let H=0,Q=z.length;H<Q;H++){const V=z[H],K=O[V.materialIndex];if(K&&K.visible){const ot=g(C,K,y,E);C.onBeforeShadow(s,C,L,B,it,ot,V),s.renderBufferDirect(B,null,it,ot,C,V),C.onAfterShadow(s,C,L,B,it,ot,V)}}}else if(O.visible){const z=g(C,O,y,E);C.onBeforeShadow(s,C,L,B,it,z,null),s.renderBufferDirect(B,null,it,z,C,null),C.onAfterShadow(s,C,L,B,it,z,null)}}const U=C.children;for(let it=0,O=U.length;it<O;it++)w(U[it],L,B,y,E)}function I(C){C.target.removeEventListener("dispose",I);for(const B in h){const y=h[B],E=C.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function Ip(s,t,e){const n=e.isWebGL2;function i(){let S=!1;const G=new ue;let et=null;const Ut=new ue(0,0,0,0);return{setMask:function(ut){et!==ut&&!S&&(s.colorMask(ut,ut,ut,ut),et=ut)},setLocked:function(ut){S=ut},setClear:function(ut,Pt,Xt,oe,se){se===!0&&(ut*=oe,Pt*=oe,Xt*=oe),G.set(ut,Pt,Xt,oe),Ut.equals(G)===!1&&(s.clearColor(ut,Pt,Xt,oe),Ut.copy(G))},reset:function(){S=!1,et=null,Ut.set(-1,0,0,0)}}}function o(){let S=!1,G=null,et=null,Ut=null;return{setTest:function(ut){ut?Rt(s.DEPTH_TEST):yt(s.DEPTH_TEST)},setMask:function(ut){G!==ut&&!S&&(s.depthMask(ut),G=ut)},setFunc:function(ut){if(et!==ut){switch(ut){case zc:s.depthFunc(s.NEVER);break;case Vc:s.depthFunc(s.ALWAYS);break;case Hc:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case Wc:s.depthFunc(s.EQUAL);break;case Xc:s.depthFunc(s.GEQUAL);break;case qc:s.depthFunc(s.GREATER);break;case Yc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=ut}},setLocked:function(ut){S=ut},setClear:function(ut){Ut!==ut&&(s.clearDepth(ut),Ut=ut)},reset:function(){S=!1,G=null,et=null,Ut=null}}}function a(){let S=!1,G=null,et=null,Ut=null,ut=null,Pt=null,Xt=null,oe=null,se=null;return{setTest:function(Jt){S||(Jt?Rt(s.STENCIL_TEST):yt(s.STENCIL_TEST))},setMask:function(Jt){G!==Jt&&!S&&(s.stencilMask(Jt),G=Jt)},setFunc:function(Jt,fe,be){(et!==Jt||Ut!==fe||ut!==be)&&(s.stencilFunc(Jt,fe,be),et=Jt,Ut=fe,ut=be)},setOp:function(Jt,fe,be){(Pt!==Jt||Xt!==fe||oe!==be)&&(s.stencilOp(Jt,fe,be),Pt=Jt,Xt=fe,oe=be)},setLocked:function(Jt){S=Jt},setClear:function(Jt){se!==Jt&&(s.clearStencil(Jt),se=Jt)},reset:function(){S=!1,G=null,et=null,Ut=null,ut=null,Pt=null,Xt=null,oe=null,se=null}}}const r=new i,c=new o,h=new a,d=new WeakMap,u=new WeakMap;let l={},f={},_=new WeakMap,v=[],m=null,p=!1,x=null,g=null,w=null,I=null,C=null,L=null,B=null,y=new ie(0,0,0),E=0,T=!1,U=null,it=null,O=null,z=null,H=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,K=0;const ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ot)[1]),V=K>=1):ot.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),V=K>=2);let J=null,rt={};const X=s.getParameter(s.SCISSOR_BOX),at=s.getParameter(s.VIEWPORT),St=new ue().fromArray(X),vt=new ue().fromArray(at);function $(S,G,et,Ut){const ut=new Uint8Array(4),Pt=s.createTexture();s.bindTexture(S,Pt),s.texParameteri(S,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(S,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xt=0;Xt<et;Xt++)n&&(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)?s.texImage3D(G,0,s.RGBA,1,1,Ut,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(G+Xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return Pt}const _t={};_t[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),_t[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_t[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_t[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Rt(s.DEPTH_TEST),c.setFunc(Es),Et(!1),R($o),Rt(s.CULL_FACE),st(Pn);function Rt(S){l[S]!==!0&&(s.enable(S),l[S]=!0)}function yt(S){l[S]!==!1&&(s.disable(S),l[S]=!1)}function Mt(S,G){return f[S]!==G?(s.bindFramebuffer(S,G),f[S]=G,n&&(S===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=G),S===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=G)),!0):!1}function D(S,G){let et=v,Ut=!1;if(S)if(et=_.get(G),et===void 0&&(et=[],_.set(G,et)),S.isWebGLMultipleRenderTargets){const ut=S.texture;if(et.length!==ut.length||et[0]!==s.COLOR_ATTACHMENT0){for(let Pt=0,Xt=ut.length;Pt<Xt;Pt++)et[Pt]=s.COLOR_ATTACHMENT0+Pt;et.length=ut.length,Ut=!0}}else et[0]!==s.COLOR_ATTACHMENT0&&(et[0]=s.COLOR_ATTACHMENT0,Ut=!0);else et[0]!==s.BACK&&(et[0]=s.BACK,Ut=!0);Ut&&(e.isWebGL2?s.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function nt(S){return m!==S?(s.useProgram(S),m=S,!0):!1}const tt={[Hn]:s.FUNC_ADD,[Tc]:s.FUNC_SUBTRACT,[Ac]:s.FUNC_REVERSE_SUBTRACT};if(n)tt[nr]=s.MIN,tt[ir]=s.MAX;else{const S=t.get("EXT_blend_minmax");S!==null&&(tt[nr]=S.MIN_EXT,tt[ir]=S.MAX_EXT)}const mt={[Rc]:s.ZERO,[Pc]:s.ONE,[Cc]:s.SRC_COLOR,[To]:s.SRC_ALPHA,[Oc]:s.SRC_ALPHA_SATURATE,[Uc]:s.DST_COLOR,[Ic]:s.DST_ALPHA,[Lc]:s.ONE_MINUS_SRC_COLOR,[Ao]:s.ONE_MINUS_SRC_ALPHA,[Nc]:s.ONE_MINUS_DST_COLOR,[Dc]:s.ONE_MINUS_DST_ALPHA,[Fc]:s.CONSTANT_COLOR,[Bc]:s.ONE_MINUS_CONSTANT_COLOR,[Gc]:s.CONSTANT_ALPHA,[kc]:s.ONE_MINUS_CONSTANT_ALPHA};function st(S,G,et,Ut,ut,Pt,Xt,oe,se,Jt){if(S===Pn){p===!0&&(yt(s.BLEND),p=!1);return}if(p===!1&&(Rt(s.BLEND),p=!0),S!==bc){if(S!==x||Jt!==T){if((g!==Hn||C!==Hn)&&(s.blendEquation(s.FUNC_ADD),g=Hn,C=Hn),Jt)switch(S){case xi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qo:s.blendFunc(s.ONE,s.ONE);break;case tr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case er:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case xi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qo:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case tr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case er:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}w=null,I=null,L=null,B=null,y.set(0,0,0),E=0,x=S,T=Jt}return}ut=ut||G,Pt=Pt||et,Xt=Xt||Ut,(G!==g||ut!==C)&&(s.blendEquationSeparate(tt[G],tt[ut]),g=G,C=ut),(et!==w||Ut!==I||Pt!==L||Xt!==B)&&(s.blendFuncSeparate(mt[et],mt[Ut],mt[Pt],mt[Xt]),w=et,I=Ut,L=Pt,B=Xt),(oe.equals(y)===!1||se!==E)&&(s.blendColor(oe.r,oe.g,oe.b,se),y.copy(oe),E=se),x=S,T=!1}function Ft(S,G){S.side===we?yt(s.CULL_FACE):Rt(s.CULL_FACE);let et=S.side===Be;G&&(et=!et),Et(et),S.blending===xi&&S.transparent===!1?st(Pn):st(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),c.setFunc(S.depthFunc),c.setTest(S.depthTest),c.setMask(S.depthWrite),r.setMask(S.colorWrite);const Ut=S.stencilWrite;h.setTest(Ut),Ut&&(h.setMask(S.stencilWriteMask),h.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),h.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),q(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):yt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(S){U!==S&&(S?s.frontFace(s.CW):s.frontFace(s.CCW),U=S)}function R(S){S!==yc?(Rt(s.CULL_FACE),S!==it&&(S===$o?s.cullFace(s.BACK):S===Ec?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):yt(s.CULL_FACE),it=S}function b(S){S!==O&&(V&&s.lineWidth(S),O=S)}function q(S,G,et){S?(Rt(s.POLYGON_OFFSET_FILL),(z!==G||H!==et)&&(s.polygonOffset(G,et),z=G,H=et)):yt(s.POLYGON_OFFSET_FILL)}function pt(S){S?Rt(s.SCISSOR_TEST):yt(s.SCISSOR_TEST)}function ht(S){S===void 0&&(S=s.TEXTURE0+Q-1),J!==S&&(s.activeTexture(S),J=S)}function ct(S,G,et){et===void 0&&(J===null?et=s.TEXTURE0+Q-1:et=J);let Ut=rt[et];Ut===void 0&&(Ut={type:void 0,texture:void 0},rt[et]=Ut),(Ut.type!==S||Ut.texture!==G)&&(J!==et&&(s.activeTexture(et),J=et),s.bindTexture(S,G||_t[S]),Ut.type=S,Ut.texture=G)}function Bt(){const S=rt[J];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function At(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function It(){try{s.compressedTexImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Gt(){try{s.texSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function lt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Kt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function qt(){try{s.texStorage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function bt(){try{s.texStorage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Tt(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ot(S){St.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),St.copy(S))}function Ht(S){vt.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),vt.copy(S))}function te(S,G){let et=u.get(G);et===void 0&&(et=new WeakMap,u.set(G,et));let Ut=et.get(S);Ut===void 0&&(Ut=s.getUniformBlockIndex(G,S.name),et.set(S,Ut))}function kt(S,G){const Ut=u.get(G).get(S);d.get(G)!==Ut&&(s.uniformBlockBinding(G,Ut,S.__bindingPointIndex),d.set(G,Ut))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},J=null,rt={},f={},_=new WeakMap,v=[],m=null,p=!1,x=null,g=null,w=null,I=null,C=null,L=null,B=null,y=new ie(0,0,0),E=0,T=!1,U=null,it=null,O=null,z=null,H=null,St.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),h.reset()}return{buffers:{color:r,depth:c,stencil:h},enable:Rt,disable:yt,bindFramebuffer:Mt,drawBuffers:D,useProgram:nt,setBlending:st,setMaterial:Ft,setFlipSided:Et,setCullFace:R,setLineWidth:b,setPolygonOffset:q,setScissorTest:pt,activeTexture:ht,bindTexture:ct,unbindTexture:Bt,compressedTexImage2D:At,compressedTexImage3D:It,texImage2D:gt,texImage3D:Tt,updateUBOMapping:te,uniformBlockBinding:kt,texStorage2D:qt,texStorage3D:bt,texSubImage2D:Gt,texSubImage3D:Nt,compressedTexSubImage2D:lt,compressedTexSubImage3D:Kt,scissor:Ot,viewport:Ht,reset:xt}}function Dp(s,t,e,n,i,o,a){const r=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let u;const l=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,b){return f?new OffscreenCanvas(R,b):Cs("canvas")}function v(R,b,q,pt){let ht=1;if((R.width>pt||R.height>pt)&&(ht=pt/Math.max(R.width,R.height)),ht<1||b===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ct=b?Ps:Math.floor,Bt=ct(ht*R.width),At=ct(ht*R.height);u===void 0&&(u=_(Bt,At));const It=q?_(Bt,At):u;return It.width=Bt,It.height=At,It.getContext("2d").drawImage(R,0,0,Bt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+Bt+"x"+At+")."),It}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return Io(R.width)&&Io(R.height)}function p(R){return r?!1:R.wrapS!==tn||R.wrapT!==tn||R.minFilter!==Fe&&R.minFilter!==Ye}function x(R,b){return R.generateMipmaps&&b&&R.minFilter!==Fe&&R.minFilter!==Ye}function g(R){s.generateMipmap(R)}function w(R,b,q,pt,ht=!1){if(r===!1)return b;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ct=b;if(b===s.RED&&(q===s.FLOAT&&(ct=s.R32F),q===s.HALF_FLOAT&&(ct=s.R16F),q===s.UNSIGNED_BYTE&&(ct=s.R8)),b===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ct=s.R8UI),q===s.UNSIGNED_SHORT&&(ct=s.R16UI),q===s.UNSIGNED_INT&&(ct=s.R32UI),q===s.BYTE&&(ct=s.R8I),q===s.SHORT&&(ct=s.R16I),q===s.INT&&(ct=s.R32I)),b===s.RG&&(q===s.FLOAT&&(ct=s.RG32F),q===s.HALF_FLOAT&&(ct=s.RG16F),q===s.UNSIGNED_BYTE&&(ct=s.RG8)),b===s.RGBA){const Bt=ht?bs:ce.getTransfer(pt);q===s.FLOAT&&(ct=s.RGBA32F),q===s.HALF_FLOAT&&(ct=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ct=Bt===de?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function I(R,b,q){return x(R,q)===!0||R.isFramebufferTexture&&R.minFilter!==Fe&&R.minFilter!==Ye?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function C(R){return R===Fe||R===sr||R===Ws?s.NEAREST:s.LINEAR}function L(R){const b=R.target;b.removeEventListener("dispose",L),y(b),b.isVideoTexture&&d.delete(b)}function B(R){const b=R.target;b.removeEventListener("dispose",B),T(b)}function y(R){const b=n.get(R);if(b.__webglInit===void 0)return;const q=R.source,pt=l.get(q);if(pt){const ht=pt[b.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&E(R),Object.keys(pt).length===0&&l.delete(q)}n.remove(R)}function E(R){const b=n.get(R);s.deleteTexture(b.__webglTexture);const q=R.source,pt=l.get(q);delete pt[b.__cacheKey],a.memory.textures--}function T(R){const b=R.texture,q=n.get(R),pt=n.get(b);if(pt.__webglTexture!==void 0&&(s.deleteTexture(pt.__webglTexture),a.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(q.__webglFramebuffer[ht]))for(let ct=0;ct<q.__webglFramebuffer[ht].length;ct++)s.deleteFramebuffer(q.__webglFramebuffer[ht][ct]);else s.deleteFramebuffer(q.__webglFramebuffer[ht]);q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer[ht])}else{if(Array.isArray(q.__webglFramebuffer))for(let ht=0;ht<q.__webglFramebuffer.length;ht++)s.deleteFramebuffer(q.__webglFramebuffer[ht]);else s.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&s.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&s.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let ht=0;ht<q.__webglColorRenderbuffer.length;ht++)q.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(q.__webglColorRenderbuffer[ht]);q.__webglDepthRenderbuffer&&s.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ht=0,ct=b.length;ht<ct;ht++){const Bt=n.get(b[ht]);Bt.__webglTexture&&(s.deleteTexture(Bt.__webglTexture),a.memory.textures--),n.remove(b[ht])}n.remove(b),n.remove(R)}let U=0;function it(){U=0}function O(){const R=U;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),U+=1,R}function z(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function H(R,b){const q=n.get(R);if(R.isVideoTexture&&Ft(R),R.isRenderTargetTexture===!1&&R.version>0&&q.__version!==R.version){const pt=R.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{St(q,R,b);return}}e.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+b)}function Q(R,b){const q=n.get(R);if(R.version>0&&q.__version!==R.version){St(q,R,b);return}e.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+b)}function V(R,b){const q=n.get(R);if(R.version>0&&q.__version!==R.version){St(q,R,b);return}e.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+b)}function K(R,b){const q=n.get(R);if(R.version>0&&q.__version!==R.version){vt(q,R,b);return}e.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+b)}const ot={[Oe]:s.REPEAT,[tn]:s.CLAMP_TO_EDGE,[Co]:s.MIRRORED_REPEAT},J={[Fe]:s.NEAREST,[sr]:s.NEAREST_MIPMAP_NEAREST,[Ws]:s.NEAREST_MIPMAP_LINEAR,[Ye]:s.LINEAR,[el]:s.LINEAR_MIPMAP_NEAREST,[Hi]:s.LINEAR_MIPMAP_LINEAR},rt={[fl]:s.NEVER,[Ml]:s.ALWAYS,[pl]:s.LESS,[Wa]:s.LEQUAL,[ml]:s.EQUAL,[vl]:s.GEQUAL,[gl]:s.GREATER,[_l]:s.NOTEQUAL};function X(R,b,q){if(q?(s.texParameteri(R,s.TEXTURE_WRAP_S,ot[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ot[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ot[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,J[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,J[b.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(b.wrapS!==tn||b.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,C(b.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,C(b.minFilter)),b.minFilter!==Fe&&b.minFilter!==Ye&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const pt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Fe||b.minFilter!==Ws&&b.minFilter!==Hi||b.type===Rn&&t.has("OES_texture_float_linear")===!1||r===!1&&b.type===Wi&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(s.texParameterf(R,pt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function at(R,b){let q=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",L));const pt=b.source;let ht=l.get(pt);ht===void 0&&(ht={},l.set(pt,ht));const ct=z(b);if(ct!==R.__cacheKey){ht[ct]===void 0&&(ht[ct]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,q=!0),ht[ct].usedTimes++;const Bt=ht[R.__cacheKey];Bt!==void 0&&(ht[R.__cacheKey].usedTimes--,Bt.usedTimes===0&&E(b)),R.__cacheKey=ct,R.__webglTexture=ht[ct].texture}return q}function St(R,b,q){let pt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pt=s.TEXTURE_3D);const ht=at(R,b),ct=b.source;e.bindTexture(pt,R.__webglTexture,s.TEXTURE0+q);const Bt=n.get(ct);if(ct.version!==Bt.__version||ht===!0){e.activeTexture(s.TEXTURE0+q);const At=ce.getPrimaries(ce.workingColorSpace),It=b.colorSpace===Ze?null:ce.getPrimaries(b.colorSpace),Gt=b.colorSpace===Ze||At===It?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);const Nt=p(b)&&m(b.image)===!1;let lt=v(b.image,Nt,!1,i.maxTextureSize);lt=Et(b,lt);const Kt=m(lt)||r,qt=o.convert(b.format,b.colorSpace);let bt=o.convert(b.type),gt=w(b.internalFormat,qt,bt,b.colorSpace,b.isVideoTexture);X(pt,b,Kt);let Tt;const Ot=b.mipmaps,Ht=r&&b.isVideoTexture!==!0&&gt!==za,te=Bt.__version===void 0||ht===!0,kt=I(b,lt,Kt);if(b.isDepthTexture)gt=s.DEPTH_COMPONENT,r?b.type===Rn?gt=s.DEPTH_COMPONENT32F:b.type===An?gt=s.DEPTH_COMPONENT24:b.type===Xn?gt=s.DEPTH24_STENCIL8:gt=s.DEPTH_COMPONENT16:b.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===qn&&gt===s.DEPTH_COMPONENT&&b.type!==Fo&&b.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=An,bt=o.convert(b.type)),b.format===Ei&&gt===s.DEPTH_COMPONENT&&(gt=s.DEPTH_STENCIL,b.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Xn,bt=o.convert(b.type))),te&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,gt,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,gt,lt.width,lt.height,0,qt,bt,null));else if(b.isDataTexture)if(Ot.length>0&&Kt){Ht&&te&&e.texStorage2D(s.TEXTURE_2D,kt,gt,Ot[0].width,Ot[0].height);for(let xt=0,S=Ot.length;xt<S;xt++)Tt=Ot[xt],Ht?e.texSubImage2D(s.TEXTURE_2D,xt,0,0,Tt.width,Tt.height,qt,bt,Tt.data):e.texImage2D(s.TEXTURE_2D,xt,gt,Tt.width,Tt.height,0,qt,bt,Tt.data);b.generateMipmaps=!1}else Ht?(te&&e.texStorage2D(s.TEXTURE_2D,kt,gt,lt.width,lt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,qt,bt,lt.data)):e.texImage2D(s.TEXTURE_2D,0,gt,lt.width,lt.height,0,qt,bt,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ht&&te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,gt,Ot[0].width,Ot[0].height,lt.depth);for(let xt=0,S=Ot.length;xt<S;xt++)Tt=Ot[xt],b.format!==en?qt!==null?Ht?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,Tt.width,Tt.height,lt.depth,qt,Tt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xt,gt,Tt.width,Tt.height,lt.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,Tt.width,Tt.height,lt.depth,qt,bt,Tt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,xt,gt,Tt.width,Tt.height,lt.depth,0,qt,bt,Tt.data)}else{Ht&&te&&e.texStorage2D(s.TEXTURE_2D,kt,gt,Ot[0].width,Ot[0].height);for(let xt=0,S=Ot.length;xt<S;xt++)Tt=Ot[xt],b.format!==en?qt!==null?Ht?e.compressedTexSubImage2D(s.TEXTURE_2D,xt,0,0,Tt.width,Tt.height,qt,Tt.data):e.compressedTexImage2D(s.TEXTURE_2D,xt,gt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?e.texSubImage2D(s.TEXTURE_2D,xt,0,0,Tt.width,Tt.height,qt,bt,Tt.data):e.texImage2D(s.TEXTURE_2D,xt,gt,Tt.width,Tt.height,0,qt,bt,Tt.data)}else if(b.isDataArrayTexture)Ht?(te&&e.texStorage3D(s.TEXTURE_2D_ARRAY,kt,gt,lt.width,lt.height,lt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,qt,bt,lt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,lt.width,lt.height,lt.depth,0,qt,bt,lt.data);else if(b.isData3DTexture)Ht?(te&&e.texStorage3D(s.TEXTURE_3D,kt,gt,lt.width,lt.height,lt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,qt,bt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,gt,lt.width,lt.height,lt.depth,0,qt,bt,lt.data);else if(b.isFramebufferTexture){if(te)if(Ht)e.texStorage2D(s.TEXTURE_2D,kt,gt,lt.width,lt.height);else{let xt=lt.width,S=lt.height;for(let G=0;G<kt;G++)e.texImage2D(s.TEXTURE_2D,G,gt,xt,S,0,qt,bt,null),xt>>=1,S>>=1}}else if(Ot.length>0&&Kt){Ht&&te&&e.texStorage2D(s.TEXTURE_2D,kt,gt,Ot[0].width,Ot[0].height);for(let xt=0,S=Ot.length;xt<S;xt++)Tt=Ot[xt],Ht?e.texSubImage2D(s.TEXTURE_2D,xt,0,0,qt,bt,Tt):e.texImage2D(s.TEXTURE_2D,xt,gt,qt,bt,Tt);b.generateMipmaps=!1}else Ht?(te&&e.texStorage2D(s.TEXTURE_2D,kt,gt,lt.width,lt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,qt,bt,lt)):e.texImage2D(s.TEXTURE_2D,0,gt,qt,bt,lt);x(b,Kt)&&g(pt),Bt.__version=ct.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function vt(R,b,q){if(b.image.length!==6)return;const pt=at(R,b),ht=b.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+q);const ct=n.get(ht);if(ht.version!==ct.__version||pt===!0){e.activeTexture(s.TEXTURE0+q);const Bt=ce.getPrimaries(ce.workingColorSpace),At=b.colorSpace===Ze?null:ce.getPrimaries(b.colorSpace),It=b.colorSpace===Ze||Bt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Gt=b.isCompressedTexture||b.image[0].isCompressedTexture,Nt=b.image[0]&&b.image[0].isDataTexture,lt=[];for(let xt=0;xt<6;xt++)!Gt&&!Nt?lt[xt]=v(b.image[xt],!1,!0,i.maxCubemapSize):lt[xt]=Nt?b.image[xt].image:b.image[xt],lt[xt]=Et(b,lt[xt]);const Kt=lt[0],qt=m(Kt)||r,bt=o.convert(b.format,b.colorSpace),gt=o.convert(b.type),Tt=w(b.internalFormat,bt,gt,b.colorSpace),Ot=r&&b.isVideoTexture!==!0,Ht=ct.__version===void 0||pt===!0;let te=I(b,Kt,qt);X(s.TEXTURE_CUBE_MAP,b,qt);let kt;if(Gt){Ot&&Ht&&e.texStorage2D(s.TEXTURE_CUBE_MAP,te,Tt,Kt.width,Kt.height);for(let xt=0;xt<6;xt++){kt=lt[xt].mipmaps;for(let S=0;S<kt.length;S++){const G=kt[S];b.format!==en?bt!==null?Ot?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S,0,0,G.width,G.height,bt,G.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S,Tt,G.width,G.height,0,G.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S,0,0,G.width,G.height,bt,gt,G.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S,Tt,G.width,G.height,0,bt,gt,G.data)}}}else{kt=b.mipmaps,Ot&&Ht&&(kt.length>0&&te++,e.texStorage2D(s.TEXTURE_CUBE_MAP,te,Tt,lt[0].width,lt[0].height));for(let xt=0;xt<6;xt++)if(Nt){Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,lt[xt].width,lt[xt].height,bt,gt,lt[xt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Tt,lt[xt].width,lt[xt].height,0,bt,gt,lt[xt].data);for(let S=0;S<kt.length;S++){const et=kt[S].image[xt].image;Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S+1,0,0,et.width,et.height,bt,gt,et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S+1,Tt,et.width,et.height,0,bt,gt,et.data)}}else{Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,bt,gt,lt[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Tt,bt,gt,lt[xt]);for(let S=0;S<kt.length;S++){const G=kt[S];Ot?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S+1,0,0,bt,gt,G.image[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S+1,Tt,bt,gt,G.image[xt])}}}x(b,qt)&&g(s.TEXTURE_CUBE_MAP),ct.__version=ht.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function $(R,b,q,pt,ht,ct){const Bt=o.convert(q.format,q.colorSpace),At=o.convert(q.type),It=w(q.internalFormat,Bt,At,q.colorSpace);if(!n.get(b).__hasExternalTextures){const Nt=Math.max(1,b.width>>ct),lt=Math.max(1,b.height>>ct);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,ct,It,Nt,lt,b.depth,0,Bt,At,null):e.texImage2D(ht,ct,It,Nt,lt,0,Bt,At,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),st(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pt,ht,n.get(q).__webglTexture,0,mt(b)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pt,ht,n.get(q).__webglTexture,ct),e.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(R,b,q){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer&&!b.stencilBuffer){let pt=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(q||st(b)){const ht=b.depthTexture;ht&&ht.isDepthTexture&&(ht.type===Rn?pt=s.DEPTH_COMPONENT32F:ht.type===An&&(pt=s.DEPTH_COMPONENT24));const ct=mt(b);st(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,pt,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,pt,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,pt,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(b.depthBuffer&&b.stencilBuffer){const pt=mt(b);q&&st(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,s.DEPTH24_STENCIL8,b.width,b.height):st(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{const pt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ht=0;ht<pt.length;ht++){const ct=pt[ht],Bt=o.convert(ct.format,ct.colorSpace),At=o.convert(ct.type),It=w(ct.internalFormat,Bt,At,ct.colorSpace),Gt=mt(b);q&&st(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,It,b.width,b.height):st(b)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,It,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,It,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(R,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),H(b.depthTexture,0);const pt=n.get(b.depthTexture).__webglTexture,ht=mt(b);if(b.depthTexture.format===qn)st(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,pt,0);else if(b.depthTexture.format===Ei)st(b)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,pt,0);else throw new Error("Unknown depthTexture format")}function yt(R){const b=n.get(R),q=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Rt(b.__webglFramebuffer,R)}else if(q){b.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[pt]),b.__webglDepthbuffer[pt]=s.createRenderbuffer(),_t(b.__webglDepthbuffer[pt],R,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),_t(b.__webglDepthbuffer,R,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Mt(R,b,q){const pt=n.get(R);b!==void 0&&$(pt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&yt(R)}function D(R){const b=R.texture,q=n.get(R),pt=n.get(b);R.addEventListener("dispose",B),R.isWebGLMultipleRenderTargets!==!0&&(pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture()),pt.__version=b.version,a.memory.textures++);const ht=R.isWebGLCubeRenderTarget===!0,ct=R.isWebGLMultipleRenderTargets===!0,Bt=m(R)||r;if(ht){q.__webglFramebuffer=[];for(let At=0;At<6;At++)if(r&&b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[At]=[];for(let It=0;It<b.mipmaps.length;It++)q.__webglFramebuffer[At][It]=s.createFramebuffer()}else q.__webglFramebuffer[At]=s.createFramebuffer()}else{if(r&&b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let At=0;At<b.mipmaps.length;At++)q.__webglFramebuffer[At]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(ct)if(i.drawBuffers){const At=R.texture;for(let It=0,Gt=At.length;It<Gt;It++){const Nt=n.get(At[It]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&R.samples>0&&st(R)===!1){const At=ct?b:[b];q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let It=0;It<At.length;It++){const Gt=At[It];q.__webglColorRenderbuffer[It]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[It]);const Nt=o.convert(Gt.format,Gt.colorSpace),lt=o.convert(Gt.type),Kt=w(Gt.internalFormat,Nt,lt,Gt.colorSpace,R.isXRRenderTarget===!0),qt=mt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,qt,Kt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+It,s.RENDERBUFFER,q.__webglColorRenderbuffer[It])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),_t(q.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,pt.__webglTexture),X(s.TEXTURE_CUBE_MAP,b,Bt);for(let At=0;At<6;At++)if(r&&b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)$(q.__webglFramebuffer[At][It],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,It);else $(q.__webglFramebuffer[At],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);x(b,Bt)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ct){const At=R.texture;for(let It=0,Gt=At.length;It<Gt;It++){const Nt=At[It],lt=n.get(Nt);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),X(s.TEXTURE_2D,Nt,Bt),$(q.__webglFramebuffer,R,Nt,s.COLOR_ATTACHMENT0+It,s.TEXTURE_2D,0),x(Nt,Bt)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let At=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(r?At=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(At,pt.__webglTexture),X(At,b,Bt),r&&b.mipmaps&&b.mipmaps.length>0)for(let It=0;It<b.mipmaps.length;It++)$(q.__webglFramebuffer[It],R,b,s.COLOR_ATTACHMENT0,At,It);else $(q.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,At,0);x(b,Bt)&&g(At),e.unbindTexture()}R.depthBuffer&&yt(R)}function nt(R){const b=m(R)||r,q=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let pt=0,ht=q.length;pt<ht;pt++){const ct=q[pt];if(x(ct,b)){const Bt=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,At=n.get(ct).__webglTexture;e.bindTexture(Bt,At),g(Bt),e.unbindTexture()}}}function tt(R){if(r&&R.samples>0&&st(R)===!1){const b=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],q=R.width,pt=R.height;let ht=s.COLOR_BUFFER_BIT;const ct=[],Bt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(R),It=R.isWebGLMultipleRenderTargets===!0;if(It)for(let Gt=0;Gt<b.length;Gt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Gt=0;Gt<b.length;Gt++){ct.push(s.COLOR_ATTACHMENT0+Gt),R.depthBuffer&&ct.push(Bt);const Nt=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(Nt===!1&&(R.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),It&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[Gt]),Nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Bt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Bt])),It){const lt=n.get(b[Gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,q,pt,0,0,q,pt,ht,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),It)for(let Gt=0;Gt<b.length;Gt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,At.__webglColorRenderbuffer[Gt]);const Nt=n.get(b[Gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function mt(R){return Math.min(i.maxSamples,R.samples)}function st(R){const b=n.get(R);return r&&R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ft(R){const b=a.render.frame;d.get(R)!==b&&(d.set(R,b),R.update())}function Et(R,b){const q=R.colorSpace,pt=R.format,ht=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Lo||q!==Mn&&q!==Ze&&(ce.getTransfer(q)===de?r===!1?t.has("EXT_sRGB")===!0&&pt===en?(R.format=Lo,R.minFilter=Ye,R.generateMipmaps=!1):b=qa.sRGBToLinear(b):(pt!==en||ht!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}this.allocateTextureUnit=O,this.resetTextureUnits=it,this.setTexture2D=H,this.setTexture2DArray=Q,this.setTexture3D=V,this.setTextureCube=K,this.rebindTextures=Mt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=st}function Up(s,t,e){const n=e.isWebGL2;function i(o,a=Ze){let r;const c=ce.getTransfer(a);if(o===Ln)return s.UNSIGNED_BYTE;if(o===Oa)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Fa)return s.UNSIGNED_SHORT_5_5_5_1;if(o===nl)return s.BYTE;if(o===il)return s.SHORT;if(o===Fo)return s.UNSIGNED_SHORT;if(o===Na)return s.INT;if(o===An)return s.UNSIGNED_INT;if(o===Rn)return s.FLOAT;if(o===Wi)return n?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(o===sl)return s.ALPHA;if(o===en)return s.RGBA;if(o===ol)return s.LUMINANCE;if(o===rl)return s.LUMINANCE_ALPHA;if(o===qn)return s.DEPTH_COMPONENT;if(o===Ei)return s.DEPTH_STENCIL;if(o===Lo)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(o===al)return s.RED;if(o===Ba)return s.RED_INTEGER;if(o===cl)return s.RG;if(o===Ga)return s.RG_INTEGER;if(o===ka)return s.RGBA_INTEGER;if(o===Xs||o===qs||o===Ys||o===Zs)if(c===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===or||o===rr||o===ar||o===cr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===or)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===rr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===ar)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===cr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===za)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===lr||o===hr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(o===lr)return c===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===hr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===dr||o===ur||o===fr||o===pr||o===mr||o===gr||o===_r||o===vr||o===Mr||o===xr||o===wr||o===Sr||o===yr||o===Er)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(o===dr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===ur)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===fr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===pr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===mr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===gr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===_r)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===vr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Mr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===xr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===wr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===Sr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===yr)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Er)return c===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Ks||o===br||o===Tr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(o===Ks)return c===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===br)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Tr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===ll||o===Ar||o===Rr||o===Pr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(o===Ks)return r.COMPRESSED_RED_RGTC1_EXT;if(o===Ar)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Rr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Pr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Xn?n?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:i}}class Np extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class wt extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Op={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,a=null;const r=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=h.joints["index-finger-tip"],u=h.joints["thumb-tip"],l=d.position.distanceTo(u.position),f=.02,_=.005;h.inputState.pinching&&l>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&l<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new wt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Fp extends Ai{constructor(t,e){super();const n=this;let i=null,o=1,a=null,r="local-floor",c=1,h=null,d=null,u=null,l=null,f=null,_=null;const v=e.getContextAttributes();let m=null,p=null;const x=[],g=[],w=new Ct;let I=null;const C=new Ge;C.layers.enable(1),C.viewport=new ue;const L=new Ge;L.layers.enable(2),L.viewport=new ue;const B=[C,L],y=new Np;y.layers.enable(1),y.layers.enable(2);let E=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let at=x[X];return at===void 0&&(at=new Mo,x[X]=at),at.getTargetRaySpace()},this.getControllerGrip=function(X){let at=x[X];return at===void 0&&(at=new Mo,x[X]=at),at.getGripSpace()},this.getHand=function(X){let at=x[X];return at===void 0&&(at=new Mo,x[X]=at),at.getHandSpace()};function U(X){const at=g.indexOf(X.inputSource);if(at===-1)return;const St=x[at];St!==void 0&&(St.update(X.inputSource,X.frame,h||a),St.dispatchEvent({type:X.type,data:X.inputSource}))}function it(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",it),i.removeEventListener("inputsourceschange",O);for(let X=0;X<x.length;X++){const at=g[X];at!==null&&(g[X]=null,x[X].disconnect(at))}E=null,T=null,t.setRenderTarget(m),f=null,l=null,u=null,i=null,p=null,rt.stop(),n.isPresenting=!1,t.setPixelRatio(I),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(X){h=X},this.getBaseLayer=function(){return l!==null?l:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",it),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await e.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(w),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const at={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,e,at),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Zn(f.framebufferWidth,f.framebufferHeight,{format:en,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let at=null,St=null,vt=null;v.depth&&(vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=v.stencil?Ei:qn,St=v.stencil?Xn:An);const $={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:o};u=new XRWebGLBinding(i,e),l=u.createProjectionLayer($),i.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),p=new Zn(l.textureWidth,l.textureHeight,{format:en,type:Ln,depthTexture:new oc(l.textureWidth,l.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const _t=t.properties.get(p);_t.__ignoreDepthValues=l.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(r),rt.setContext(i),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(X){for(let at=0;at<X.removed.length;at++){const St=X.removed[at],vt=g.indexOf(St);vt>=0&&(g[vt]=null,x[vt].disconnect(St))}for(let at=0;at<X.added.length;at++){const St=X.added[at];let vt=g.indexOf(St);if(vt===-1){for(let _t=0;_t<x.length;_t++)if(_t>=g.length){g.push(St),vt=_t;break}else if(g[_t]===null){g[_t]=St,vt=_t;break}if(vt===-1)break}const $=x[vt];$&&$.connect(St)}}const z=new F,H=new F;function Q(X,at,St){z.setFromMatrixPosition(at.matrixWorld),H.setFromMatrixPosition(St.matrixWorld);const vt=z.distanceTo(H),$=at.projectionMatrix.elements,_t=St.projectionMatrix.elements,Rt=$[14]/($[10]-1),yt=$[14]/($[10]+1),Mt=($[9]+1)/$[5],D=($[9]-1)/$[5],nt=($[8]-1)/$[0],tt=(_t[8]+1)/_t[0],mt=Rt*nt,st=Rt*tt,Ft=vt/(-nt+tt),Et=Ft*-nt;at.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Et),X.translateZ(Ft),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=Rt+Ft,b=yt+Ft,q=mt-Et,pt=st+(vt-Et),ht=Mt*yt/b*R,ct=D*yt/b*R;X.projectionMatrix.makePerspective(q,pt,ht,ct,R,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function V(X,at){at===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(at.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;y.near=L.near=C.near=X.near,y.far=L.far=C.far=X.far,(E!==y.near||T!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,T=y.far);const at=X.parent,St=y.cameras;V(y,at);for(let vt=0;vt<St.length;vt++)V(St[vt],at);St.length===2?Q(y,C,L):y.projectionMatrix.copy(C.projectionMatrix),K(X,y,at)};function K(X,at,St){St===null?X.matrix.copy(at.matrixWorld):(X.matrix.copy(St.matrixWorld),X.matrix.invert(),X.matrix.multiply(at.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(at.projectionMatrix),X.projectionMatrixInverse.copy(at.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=bi*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(l===null&&f===null))return c},this.setFoveation=function(X){c=X,l!==null&&(l.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)};let ot=null;function J(X,at){if(d=at.getViewerPose(h||a),_=at,d!==null){const St=d.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let vt=!1;St.length!==y.cameras.length&&(y.cameras.length=0,vt=!0);for(let $=0;$<St.length;$++){const _t=St[$];let Rt=null;if(f!==null)Rt=f.getViewport(_t);else{const Mt=u.getViewSubImage(l,_t);Rt=Mt.viewport,$===0&&(t.setRenderTargetTextures(p,Mt.colorTexture,l.ignoreDepthValues?void 0:Mt.depthStencilTexture),t.setRenderTarget(p))}let yt=B[$];yt===void 0&&(yt=new Ge,yt.layers.enable($),yt.viewport=new ue,B[$]=yt),yt.matrix.fromArray(_t.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(_t.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),$===0&&(y.matrix.copy(yt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),vt===!0&&y.cameras.push(yt)}}for(let St=0;St<x.length;St++){const vt=g[St],$=x[St];vt!==null&&$!==void 0&&$.update(vt,at,h||a)}ot&&ot(X,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),_=null}const rt=new ic;rt.setAnimationLoop(J),this.setAnimationLoop=function(X){ot=X},this.dispose=function(){}}}function Bp(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,tc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,g,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),d(m,p)):p.isMeshStandardMaterial?(o(m,p),l(m,p),p.isMeshPhysicalMaterial&&f(m,p,w)):p.isMeshMatcapMaterial?(o(m,p),_(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?c(m,p,x,g):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Be&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Be&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const g=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*g,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,g){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=g*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function l(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Be&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gp(s,t,e,n){let i={},o={},a=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(x,g){const w=g.program;n.uniformBlockBinding(x,w)}function h(x,g){let w=i[x.id];w===void 0&&(_(x),w=d(x),i[x.id]=w,x.addEventListener("dispose",m));const I=g.program;n.updateUBOMapping(x,I);const C=t.render.frame;o[x.id]!==C&&(l(x),o[x.id]=C)}function d(x){const g=u();x.__bindingPointIndex=g;const w=s.createBuffer(),I=x.__size,C=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,I,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,w),w}function u(){for(let x=0;x<r;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(x){const g=i[x.id],w=x.uniforms,I=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let C=0,L=w.length;C<L;C++){const B=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,E=B.length;y<E;y++){const T=B[y];if(f(T,C,y,I)===!0){const U=T.__offset,it=Array.isArray(T.value)?T.value:[T.value];let O=0;for(let z=0;z<it.length;z++){const H=it[z],Q=v(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,U+O,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,O),O+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,U,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,g,w,I){const C=x.value,L=g+"_"+w;if(I[L]===void 0)return typeof C=="number"||typeof C=="boolean"?I[L]=C:I[L]=C.clone(),!0;{const B=I[L];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return I[L]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function _(x){const g=x.uniforms;let w=0;const I=16;for(let L=0,B=g.length;L<B;L++){const y=Array.isArray(g[L])?g[L]:[g[L]];for(let E=0,T=y.length;E<T;E++){const U=y[E],it=Array.isArray(U.value)?U.value:[U.value];for(let O=0,z=it.length;O<z;O++){const H=it[O],Q=v(H),V=w%I;V!==0&&I-V<Q.boundary&&(w+=I-V),U.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=Q.storage}}}const C=w%I;return C>0&&(w+=I-C),x.__size=w,x.__cache={},this}function v(x){const g={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(g.boundary=4,g.storage=4):x.isVector2?(g.boundary=8,g.storage=8):x.isVector3||x.isColor?(g.boundary=16,g.storage=12):x.isVector4?(g.boundary=16,g.storage=16):x.isMatrix3?(g.boundary=48,g.storage=48):x.isMatrix4?(g.boundary=64,g.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),g}function m(x){const g=x.target;g.removeEventListener("dispose",m);const w=a.indexOf(g.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete o[g.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},o={}}return{bind:c,update:h,dispose:p}}class dc{constructor(t={}){const{canvas:e=Ul(),context:n=null,depth:i=!0,stencil:o=!0,alpha:a=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let l;n!==null?l=n.getContextAttributes().alpha:l=a;const f=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const p=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pe,this._useLegacyLights=!1,this.toneMapping=Cn,this.toneMappingExposure=1;const g=this;let w=!1,I=0,C=0,L=null,B=-1,y=null;const E=new ue,T=new ue;let U=null;const it=new ie(0);let O=0,z=e.width,H=e.height,Q=1,V=null,K=null;const ot=new ue(0,0,z,H),J=new ue(0,0,z,H);let rt=!1;const X=new ko;let at=!1,St=!1,vt=null;const $=new _e,_t=new Ct,Rt=new F,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Mt(){return L===null?Q:1}let D=n;function nt(P,W){for(let Y=0;Y<P.length;Y++){const A=P[Y],N=e.getContext(A,W);if(N!==null)return N}return null}try{const P={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",S,!1),e.addEventListener("webglcontextcreationerror",G,!1),D===null){const W=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&W.shift(),D=nt(W,P),D===null)throw nt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let tt,mt,st,Ft,Et,R,b,q,pt,ht,ct,Bt,At,It,Gt,Nt,lt,Kt,qt,bt,gt,Tt,Ot,Ht;function te(){tt=new Zu(D),mt=new Vu(D,tt,t),tt.init(mt),Tt=new Up(D,tt,mt),st=new Ip(D,tt,mt),Ft=new ju(D),Et=new vp,R=new Dp(D,tt,st,Et,mt,Tt,Ft),b=new Wu(g),q=new Yu(g),pt=new oh(D,mt),Ot=new ku(D,tt,pt,mt),ht=new Ku(D,pt,Ft,Ot),ct=new ef(D,ht,pt,Ft),qt=new tf(D,mt,R),Nt=new Hu(Et),Bt=new _p(g,b,q,tt,mt,Ot,Nt),At=new Bp(g,Et),It=new xp,Gt=new Tp(tt,mt),Kt=new Gu(g,b,q,st,ct,l,c),lt=new Lp(g,ct,mt),Ht=new Gp(D,Ft,mt,st),bt=new zu(D,tt,Ft,mt),gt=new Ju(D,tt,Ft,mt),Ft.programs=Bt.programs,g.capabilities=mt,g.extensions=tt,g.properties=Et,g.renderLists=It,g.shadowMap=lt,g.state=st,g.info=Ft}te();const kt=new Fp(g,D);this.xr=kt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const P=tt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=tt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(P){P!==void 0&&(Q=P,this.setSize(z,H,!1))},this.getSize=function(P){return P.set(z,H)},this.setSize=function(P,W,Y=!0){if(kt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=P,H=W,e.width=Math.floor(P*Q),e.height=Math.floor(W*Q),Y===!0&&(e.style.width=P+"px",e.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(z*Q,H*Q).floor()},this.setDrawingBufferSize=function(P,W,Y){z=P,H=W,Q=Y,e.width=Math.floor(P*Y),e.height=Math.floor(W*Y),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(E)},this.getViewport=function(P){return P.copy(ot)},this.setViewport=function(P,W,Y,A){P.isVector4?ot.set(P.x,P.y,P.z,P.w):ot.set(P,W,Y,A),st.viewport(E.copy(ot).multiplyScalar(Q).floor())},this.getScissor=function(P){return P.copy(J)},this.setScissor=function(P,W,Y,A){P.isVector4?J.set(P.x,P.y,P.z,P.w):J.set(P,W,Y,A),st.scissor(T.copy(J).multiplyScalar(Q).floor())},this.getScissorTest=function(){return rt},this.setScissorTest=function(P){st.setScissorTest(rt=P)},this.setOpaqueSort=function(P){V=P},this.setTransparentSort=function(P){K=P},this.getClearColor=function(P){return P.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(P=!0,W=!0,Y=!0){let A=0;if(P){let N=!1;if(L!==null){const j=L.texture.format;N=j===ka||j===Ga||j===Ba}if(N){const j=L.texture.type,ft=j===Ln||j===An||j===Fo||j===Xn||j===Oa||j===Fa,Dt=Kt.getClearColor(),zt=Kt.getClearAlpha(),Zt=Dt.r,jt=Dt.g,$t=Dt.b;ft?(f[0]=Zt,f[1]=jt,f[2]=$t,f[3]=zt,D.clearBufferuiv(D.COLOR,0,f)):(_[0]=Zt,_[1]=jt,_[2]=$t,_[3]=zt,D.clearBufferiv(D.COLOR,0,_))}else A|=D.COLOR_BUFFER_BIT}W&&(A|=D.DEPTH_BUFFER_BIT),Y&&(A|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(A)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",S,!1),e.removeEventListener("webglcontextcreationerror",G,!1),It.dispose(),Gt.dispose(),Et.dispose(),b.dispose(),q.dispose(),ct.dispose(),Ot.dispose(),Ht.dispose(),Bt.dispose(),kt.dispose(),kt.removeEventListener("sessionstart",se),kt.removeEventListener("sessionend",Jt),vt&&(vt.dispose(),vt=null),fe.stop()};function xt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function S(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const P=Ft.autoReset,W=lt.enabled,Y=lt.autoUpdate,A=lt.needsUpdate,N=lt.type;te(),Ft.autoReset=P,lt.enabled=W,lt.autoUpdate=Y,lt.needsUpdate=A,lt.type=N}function G(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function et(P){const W=P.target;W.removeEventListener("dispose",et),Ut(W)}function Ut(P){ut(P),Et.remove(P)}function ut(P){const W=Et.get(P).programs;W!==void 0&&(W.forEach(function(Y){Bt.releaseProgram(Y)}),P.isShaderMaterial&&Bt.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Y,A,N,j){W===null&&(W=yt);const ft=N.isMesh&&N.matrixWorld.determinant()<0,Dt=$n(P,W,Y,A,N);st.setMaterial(A,ft);let zt=Y.index,Zt=1;if(A.wireframe===!0){if(zt=ht.getWireframeAttribute(Y),zt===void 0)return;Zt=2}const jt=Y.drawRange,$t=Y.attributes.position;let ve=jt.start*Zt,Ve=(jt.start+jt.count)*Zt;j!==null&&(ve=Math.max(ve,j.start*Zt),Ve=Math.min(Ve,(j.start+j.count)*Zt)),zt!==null?(ve=Math.max(ve,0),Ve=Math.min(Ve,zt.count)):$t!=null&&(ve=Math.max(ve,0),Ve=Math.min(Ve,$t.count));const Te=Ve-ve;if(Te<0||Te===1/0)return;Ot.setup(N,A,Dt,Y,zt);let dn,pe=bt;if(zt!==null&&(dn=pt.get(zt),pe=gt,pe.setIndex(dn)),N.isMesh)A.wireframe===!0?(st.setLineWidth(A.wireframeLinewidth*Mt()),pe.setMode(D.LINES)):pe.setMode(D.TRIANGLES);else if(N.isLine){let ee=A.linewidth;ee===void 0&&(ee=1),st.setLineWidth(ee*Mt()),N.isLineSegments?pe.setMode(D.LINES):N.isLineLoop?pe.setMode(D.LINE_LOOP):pe.setMode(D.LINE_STRIP)}else N.isPoints?pe.setMode(D.POINTS):N.isSprite&&pe.setMode(D.TRIANGLES);if(N.isBatchedMesh)pe.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)pe.renderInstances(ve,Te,N.count);else if(Y.isInstancedBufferGeometry){const ee=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,ks=Math.min(Y.instanceCount,ee);pe.renderInstances(ve,Te,ks)}else pe.render(ve,Te)};function Pt(P,W,Y){P.transparent===!0&&P.side===we&&P.forceSinglePass===!1?(P.side=Be,P.needsUpdate=!0,on(P,W,Y),P.side=In,P.needsUpdate=!0,on(P,W,Y),P.side=we):on(P,W,Y)}this.compile=function(P,W,Y=null){Y===null&&(Y=P),m=Gt.get(Y),m.init(),x.push(m),Y.traverseVisible(function(N){N.isLight&&N.layers.test(W.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),P!==Y&&P.traverseVisible(function(N){N.isLight&&N.layers.test(W.layers)&&(m.pushLight(N),N.castShadow&&m.pushShadow(N))}),m.setupLights(g._useLegacyLights);const A=new Set;return P.traverse(function(N){const j=N.material;if(j)if(Array.isArray(j))for(let ft=0;ft<j.length;ft++){const Dt=j[ft];Pt(Dt,Y,N),A.add(Dt)}else Pt(j,Y,N),A.add(j)}),x.pop(),m=null,A},this.compileAsync=function(P,W,Y=null){const A=this.compile(P,W,Y);return new Promise(N=>{function j(){if(A.forEach(function(ft){Et.get(ft).currentProgram.isReady()&&A.delete(ft)}),A.size===0){N(P);return}setTimeout(j,10)}tt.get("KHR_parallel_shader_compile")!==null?j():setTimeout(j,10)})};let Xt=null;function oe(P){Xt&&Xt(P)}function se(){fe.stop()}function Jt(){fe.start()}const fe=new ic;fe.setAnimationLoop(oe),typeof self<"u"&&fe.setContext(self),this.setAnimationLoop=function(P){Xt=P,kt.setAnimationLoop(P),P===null?fe.stop():fe.start()},kt.addEventListener("sessionstart",se),kt.addEventListener("sessionend",Jt),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),kt.enabled===!0&&kt.isPresenting===!0&&(kt.cameraAutoUpdate===!0&&kt.updateCamera(W),W=kt.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,W,L),m=Gt.get(P,x.length),m.init(),x.push(m),$.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),X.setFromProjectionMatrix($),St=this.localClippingEnabled,at=Nt.init(this.clippingPlanes,St),v=It.get(P,p.length),v.init(),p.push(v),be(P,W,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(V,K),this.info.render.frame++,at===!0&&Nt.beginShadows();const Y=m.state.shadowsArray;if(lt.render(Y,P,W),at===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Kt.render(v,P),m.setupLights(g._useLegacyLights),W.isArrayCamera){const A=W.cameras;for(let N=0,j=A.length;N<j;N++){const ft=A[N];sn(v,P,ft,ft.viewport)}}else sn(v,P,W);L!==null&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L)),P.isScene===!0&&P.onAfterRender(g,P,W),Ot.resetDefaultState(),B=-1,y=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function be(P,W,Y,A){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Y=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)m.pushLight(P),P.castShadow&&m.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||X.intersectsSprite(P)){A&&Rt.setFromMatrixPosition(P.matrixWorld).applyMatrix4($);const ft=ct.update(P),Dt=P.material;Dt.visible&&v.push(P,ft,Dt,Y,Rt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||X.intersectsObject(P))){const ft=ct.update(P),Dt=P.material;if(A&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Rt.copy(P.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Rt.copy(ft.boundingSphere.center)),Rt.applyMatrix4(P.matrixWorld).applyMatrix4($)),Array.isArray(Dt)){const zt=ft.groups;for(let Zt=0,jt=zt.length;Zt<jt;Zt++){const $t=zt[Zt],ve=Dt[$t.materialIndex];ve&&ve.visible&&v.push(P,ft,ve,Y,Rt.z,$t)}}else Dt.visible&&v.push(P,ft,Dt,Y,Rt.z,null)}}const j=P.children;for(let ft=0,Dt=j.length;ft<Dt;ft++)be(j[ft],W,Y,A)}function sn(P,W,Y,A){const N=P.opaque,j=P.transmissive,ft=P.transparent;m.setupLightsView(Y),at===!0&&Nt.setGlobalState(g.clippingPlanes,Y),j.length>0&&ze(N,j,W,Y),A&&st.viewport(E.copy(A)),N.length>0&&hn(N,W,Y),j.length>0&&hn(j,W,Y),ft.length>0&&hn(ft,W,Y),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function ze(P,W,Y,A){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;const j=mt.isWebGL2;vt===null&&(vt=new Zn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?Wi:Ln,minFilter:Hi,samples:j?4:0})),g.getDrawingBufferSize(_t),j?vt.setSize(_t.x,_t.y):vt.setSize(Ps(_t.x),Ps(_t.y));const ft=g.getRenderTarget();g.setRenderTarget(vt),g.getClearColor(it),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();const Dt=g.toneMapping;g.toneMapping=Cn,hn(P,Y,A),R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt);let zt=!1;for(let Zt=0,jt=W.length;Zt<jt;Zt++){const $t=W[Zt],ve=$t.object,Ve=$t.geometry,Te=$t.material,dn=$t.group;if(Te.side===we&&ve.layers.test(A.layers)){const pe=Te.side;Te.side=Be,Te.needsUpdate=!0,wn(ve,Y,A,Ve,Te,dn),Te.side=pe,Te.needsUpdate=!0,zt=!0}}zt===!0&&(R.updateMultisampleRenderTarget(vt),R.updateRenderTargetMipmap(vt)),g.setRenderTarget(ft),g.setClearColor(it,O),g.toneMapping=Dt}function hn(P,W,Y){const A=W.isScene===!0?W.overrideMaterial:null;for(let N=0,j=P.length;N<j;N++){const ft=P[N],Dt=ft.object,zt=ft.geometry,Zt=A===null?ft.material:A,jt=ft.group;Dt.layers.test(Y.layers)&&wn(Dt,W,Y,zt,Zt,jt)}}function wn(P,W,Y,A,N,j){P.onBeforeRender(g,W,Y,A,N,j),P.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),N.onBeforeRender(g,W,Y,A,P,j),N.transparent===!0&&N.side===we&&N.forceSinglePass===!1?(N.side=Be,N.needsUpdate=!0,g.renderBufferDirect(Y,W,A,N,P,j),N.side=In,N.needsUpdate=!0,g.renderBufferDirect(Y,W,A,N,P,j),N.side=we):g.renderBufferDirect(Y,W,A,N,P,j),P.onAfterRender(g,W,Y,A,N,j)}function on(P,W,Y){W.isScene!==!0&&(W=yt);const A=Et.get(P),N=m.state.lights,j=m.state.shadowsArray,ft=N.state.version,Dt=Bt.getParameters(P,N.state,j,W,Y),zt=Bt.getProgramCacheKey(Dt);let Zt=A.programs;A.environment=P.isMeshStandardMaterial?W.environment:null,A.fog=W.fog,A.envMap=(P.isMeshStandardMaterial?q:b).get(P.envMap||A.environment),Zt===void 0&&(P.addEventListener("dispose",et),Zt=new Map,A.programs=Zt);let jt=Zt.get(zt);if(jt!==void 0){if(A.currentProgram===jt&&A.lightsStateVersion===ft)return rn(P,Dt),jt}else Dt.uniforms=Bt.getUniforms(P),P.onBuild(Y,Dt,g),P.onBeforeCompile(Dt,g),jt=Bt.acquireProgram(Dt,zt),Zt.set(zt,jt),A.uniforms=Dt.uniforms;const $t=A.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&($t.clippingPlanes=Nt.uniform),rn(P,Dt),A.needsLights=Un(P),A.lightsStateVersion=ft,A.needsLights&&($t.ambientLightColor.value=N.state.ambient,$t.lightProbe.value=N.state.probe,$t.directionalLights.value=N.state.directional,$t.directionalLightShadows.value=N.state.directionalShadow,$t.spotLights.value=N.state.spot,$t.spotLightShadows.value=N.state.spotShadow,$t.rectAreaLights.value=N.state.rectArea,$t.ltc_1.value=N.state.rectAreaLTC1,$t.ltc_2.value=N.state.rectAreaLTC2,$t.pointLights.value=N.state.point,$t.pointLightShadows.value=N.state.pointShadow,$t.hemisphereLights.value=N.state.hemi,$t.directionalShadowMap.value=N.state.directionalShadowMap,$t.directionalShadowMatrix.value=N.state.directionalShadowMatrix,$t.spotShadowMap.value=N.state.spotShadowMap,$t.spotLightMatrix.value=N.state.spotLightMatrix,$t.spotLightMap.value=N.state.spotLightMap,$t.pointShadowMap.value=N.state.pointShadowMap,$t.pointShadowMatrix.value=N.state.pointShadowMatrix),A.currentProgram=jt,A.uniformsList=null,jt}function Ke(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=ys.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function rn(P,W){const Y=Et.get(P);Y.outputColorSpace=W.outputColorSpace,Y.batching=W.batching,Y.instancing=W.instancing,Y.instancingColor=W.instancingColor,Y.skinning=W.skinning,Y.morphTargets=W.morphTargets,Y.morphNormals=W.morphNormals,Y.morphColors=W.morphColors,Y.morphTargetsCount=W.morphTargetsCount,Y.numClippingPlanes=W.numClippingPlanes,Y.numIntersection=W.numClipIntersection,Y.vertexAlphas=W.vertexAlphas,Y.vertexTangents=W.vertexTangents,Y.toneMapping=W.toneMapping}function $n(P,W,Y,A,N){W.isScene!==!0&&(W=yt),R.resetTextureUnits();const j=W.fog,ft=A.isMeshStandardMaterial?W.environment:null,Dt=L===null?g.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Mn,zt=(A.isMeshStandardMaterial?q:b).get(A.envMap||ft),Zt=A.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,jt=!!Y.attributes.tangent&&(!!A.normalMap||A.anisotropy>0),$t=!!Y.morphAttributes.position,ve=!!Y.morphAttributes.normal,Ve=!!Y.morphAttributes.color;let Te=Cn;A.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Te=g.toneMapping);const dn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,pe=dn!==void 0?dn.length:0,ee=Et.get(A),ks=m.state.lights;if(at===!0&&(St===!0||P!==y)){const Xe=P===y&&A.id===B;Nt.setState(A,P,Xe)}let ge=!1;A.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==ks.state.version||ee.outputColorSpace!==Dt||N.isBatchedMesh&&ee.batching===!1||!N.isBatchedMesh&&ee.batching===!0||N.isInstancedMesh&&ee.instancing===!1||!N.isInstancedMesh&&ee.instancing===!0||N.isSkinnedMesh&&ee.skinning===!1||!N.isSkinnedMesh&&ee.skinning===!0||N.isInstancedMesh&&ee.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ee.instancingColor===!1&&N.instanceColor!==null||ee.envMap!==zt||A.fog===!0&&ee.fog!==j||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Nt.numPlanes||ee.numIntersection!==Nt.numIntersection)||ee.vertexAlphas!==Zt||ee.vertexTangents!==jt||ee.morphTargets!==$t||ee.morphNormals!==ve||ee.morphColors!==Ve||ee.toneMapping!==Te||mt.isWebGL2===!0&&ee.morphTargetsCount!==pe)&&(ge=!0):(ge=!0,ee.__version=A.version);let Nn=ee.currentProgram;ge===!0&&(Nn=on(A,W,N));let Jo=!1,Ci=!1,zs=!1;const Ce=Nn.getUniforms(),On=ee.uniforms;if(st.useProgram(Nn.program)&&(Jo=!0,Ci=!0,zs=!0),A.id!==B&&(B=A.id,Ci=!0),Jo||y!==P){Ce.setValue(D,"projectionMatrix",P.projectionMatrix),Ce.setValue(D,"viewMatrix",P.matrixWorldInverse);const Xe=Ce.map.cameraPosition;Xe!==void 0&&Xe.setValue(D,Rt.setFromMatrixPosition(P.matrixWorld)),mt.logarithmicDepthBuffer&&Ce.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(A.isMeshPhongMaterial||A.isMeshToonMaterial||A.isMeshLambertMaterial||A.isMeshBasicMaterial||A.isMeshStandardMaterial||A.isShaderMaterial)&&Ce.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,Ci=!0,zs=!0)}if(N.isSkinnedMesh){Ce.setOptional(D,N,"bindMatrix"),Ce.setOptional(D,N,"bindMatrixInverse");const Xe=N.skeleton;Xe&&(mt.floatVertexTextures?(Xe.boneTexture===null&&Xe.computeBoneTexture(),Ce.setValue(D,"boneTexture",Xe.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Ce.setOptional(D,N,"batchingTexture"),Ce.setValue(D,"batchingTexture",N._matricesTexture,R));const Vs=Y.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0&&mt.isWebGL2===!0)&&qt.update(N,Y,Nn),(Ci||ee.receiveShadow!==N.receiveShadow)&&(ee.receiveShadow=N.receiveShadow,Ce.setValue(D,"receiveShadow",N.receiveShadow)),A.isMeshGouraudMaterial&&A.envMap!==null&&(On.envMap.value=zt,On.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Ci&&(Ce.setValue(D,"toneMappingExposure",g.toneMappingExposure),ee.needsLights&&Dn(On,zs),j&&A.fog===!0&&At.refreshFogUniforms(On,j),At.refreshMaterialUniforms(On,A,Q,H,vt),ys.upload(D,Ke(ee),On,R)),A.isShaderMaterial&&A.uniformsNeedUpdate===!0&&(ys.upload(D,Ke(ee),On,R),A.uniformsNeedUpdate=!1),A.isSpriteMaterial&&Ce.setValue(D,"center",N.center),Ce.setValue(D,"modelViewMatrix",N.modelViewMatrix),Ce.setValue(D,"normalMatrix",N.normalMatrix),Ce.setValue(D,"modelMatrix",N.matrixWorld),A.isShaderMaterial||A.isRawShaderMaterial){const Xe=A.uniformsGroups;for(let Hs=0,Sc=Xe.length;Hs<Sc;Hs++)if(mt.isWebGL2){const jo=Xe[Hs];Ht.update(jo,Nn),Ht.bind(jo,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function Dn(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Un(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(P,W,Y){Et.get(P.texture).__webglTexture=W,Et.get(P.depthTexture).__webglTexture=Y;const A=Et.get(P);A.__hasExternalTextures=!0,A.__hasExternalTextures&&(A.__autoAllocateDepthBuffer=Y===void 0,A.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),A.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){const Y=Et.get(P);Y.__webglFramebuffer=W,Y.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Y=0){L=P,I=W,C=Y;let A=!0,N=null,j=!1,ft=!1;if(P){const zt=Et.get(P);zt.__useDefaultFramebuffer!==void 0?(st.bindFramebuffer(D.FRAMEBUFFER,null),A=!1):zt.__webglFramebuffer===void 0?R.setupRenderTarget(P):zt.__hasExternalTextures&&R.rebindTextures(P,Et.get(P.texture).__webglTexture,Et.get(P.depthTexture).__webglTexture);const Zt=P.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(ft=!0);const jt=Et.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(jt[W])?N=jt[W][Y]:N=jt[W],j=!0):mt.isWebGL2&&P.samples>0&&R.useMultisampledRTT(P)===!1?N=Et.get(P).__webglMultisampledFramebuffer:Array.isArray(jt)?N=jt[Y]:N=jt,E.copy(P.viewport),T.copy(P.scissor),U=P.scissorTest}else E.copy(ot).multiplyScalar(Q).floor(),T.copy(J).multiplyScalar(Q).floor(),U=rt;if(st.bindFramebuffer(D.FRAMEBUFFER,N)&&mt.drawBuffers&&A&&st.drawBuffers(P,N),st.viewport(E),st.scissor(T),st.setScissorTest(U),j){const zt=Et.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,Y)}else if(ft){const zt=Et.get(P.texture),Zt=W||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,zt.__webglTexture,Y||0,Zt)}B=-1},this.readRenderTargetPixels=function(P,W,Y,A,N,j,ft){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=Et.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ft!==void 0&&(Dt=Dt[ft]),Dt){st.bindFramebuffer(D.FRAMEBUFFER,Dt);try{const zt=P.texture,Zt=zt.format,jt=zt.type;if(Zt!==en&&Tt.convert(Zt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const $t=jt===Wi&&(tt.has("EXT_color_buffer_half_float")||mt.isWebGL2&&tt.has("EXT_color_buffer_float"));if(jt!==Ln&&Tt.convert(jt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(jt===Rn&&(mt.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!$t){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-A&&Y>=0&&Y<=P.height-N&&D.readPixels(W,Y,A,N,Tt.convert(Zt),Tt.convert(jt),j)}finally{const zt=L!==null?Et.get(L).__webglFramebuffer:null;st.bindFramebuffer(D.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(P,W,Y=0){const A=Math.pow(2,-Y),N=Math.floor(W.image.width*A),j=Math.floor(W.image.height*A);R.setTexture2D(W,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,P.x,P.y,N,j),st.unbindTexture()},this.copyTextureToTexture=function(P,W,Y,A=0){const N=W.image.width,j=W.image.height,ft=Tt.convert(Y.format),Dt=Tt.convert(Y.type);R.setTexture2D(Y,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,Y.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,Y.unpackAlignment),W.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,A,P.x,P.y,N,j,ft,Dt,W.image.data):W.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,A,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,ft,W.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,A,P.x,P.y,ft,Dt,W.image),A===0&&Y.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),st.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Y,A,N=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const j=P.max.x-P.min.x+1,ft=P.max.y-P.min.y+1,Dt=P.max.z-P.min.z+1,zt=Tt.convert(A.format),Zt=Tt.convert(A.type);let jt;if(A.isData3DTexture)R.setTexture3D(A,0),jt=D.TEXTURE_3D;else if(A.isDataArrayTexture||A.isCompressedArrayTexture)R.setTexture2DArray(A,0),jt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,A.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,A.unpackAlignment);const $t=D.getParameter(D.UNPACK_ROW_LENGTH),ve=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ve=D.getParameter(D.UNPACK_SKIP_PIXELS),Te=D.getParameter(D.UNPACK_SKIP_ROWS),dn=D.getParameter(D.UNPACK_SKIP_IMAGES),pe=Y.isCompressedTexture?Y.mipmaps[N]:Y.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,pe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,P.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,P.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,P.min.z),Y.isDataTexture||Y.isData3DTexture?D.texSubImage3D(jt,N,W.x,W.y,W.z,j,ft,Dt,zt,Zt,pe.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(jt,N,W.x,W.y,W.z,j,ft,Dt,zt,pe.data)):D.texSubImage3D(jt,N,W.x,W.y,W.z,j,ft,Dt,zt,Zt,pe),D.pixelStorei(D.UNPACK_ROW_LENGTH,$t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ve),D.pixelStorei(D.UNPACK_SKIP_ROWS,Te),D.pixelStorei(D.UNPACK_SKIP_IMAGES,dn),N===0&&A.generateMipmaps&&D.generateMipmap(jt),st.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),st.unbindTexture()},this.resetState=function(){I=0,C=0,L=null,st.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Bo?"display-p3":"srgb",e.unpackColorSpace=ce.workingColorSpace===Us?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pe?Yn:Va}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yn?Pe:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class kp extends dc{}kp.prototype.isWebGL1Renderer=!0;class Vo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ie(t),this.density=e}clone(){return new Vo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zp extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class uc extends Ri{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const va=new F,Ma=new F,xa=new _e,xo=new Ka,Ms=new Ns;class Vp extends Se{constructor(t=new De,e=new uc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)va.fromBufferAttribute(e,i-1),Ma.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=va.distanceTo(Ma);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(i),Ms.radius+=o,t.ray.intersectsSphere(Ms)===!1)return;xa.copy(i).invert(),xo.copy(t.ray).applyMatrix4(xa);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,h=new F,d=new F,u=new F,l=new F,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),x=Math.min(_.count,a.start+a.count);for(let g=p,w=x-1;g<w;g+=f){const I=_.getX(g),C=_.getX(g+1);if(h.fromBufferAttribute(m,I),d.fromBufferAttribute(m,C),xo.distanceSqToSegment(h,d,l,u)>c)continue;l.applyMatrix4(this.matrixWorld);const B=t.ray.origin.distanceTo(l);B<t.near||B>t.far||e.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let g=p,w=x-1;g<w;g+=f){if(h.fromBufferAttribute(m,g),d.fromBufferAttribute(m,g+1),xo.distanceSqToSegment(h,d,l,u)>c)continue;l.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(l);C<t.near||C>t.far||e.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}class ae extends ke{constructor(t,e,n,i,o,a,r,c,h){super(t,e,n,i,o,a,r,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,c=o-1,h;for(;r<=c;)if(i=Math.floor(r+(c-r)/2),h=n[i]-a,h<0)r=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(o-1);const d=n[i],l=n[i+1]-d,f=(a-d)/l;return(i+f)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const a=this.getPoint(i),r=this.getPoint(o),c=e||(a.isVector2?new Ct:new F);return c.copy(r).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,i=[],o=[],a=[],r=new F,c=new _e;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new F)}o[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),u=Math.abs(i[0].y),l=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),u<=h&&(h=u,n.set(0,1,0)),l<=h&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],r),a[0].crossVectors(i[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),a[f]=a[f-1].clone(),r.crossVectors(i[f-1],i[f]),r.length()>Number.EPSILON){r.normalize();const _=Math.acos(Re(i[f-1].dot(i[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(r,_))}a[f].crossVectors(i[f],o[f])}if(e===!0){let f=Math.acos(Re(o[0].dot(o[t]),-1,1));f/=t,i[0].dot(r.crossVectors(o[0],o[t]))>0&&(f=-f);for(let _=1;_<=t;_++)o[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],o[_])}return{tangents:i,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ho extends ln{constructor(t=0,e=0,n=1,i=1,o=0,a=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=r,this.aRotation=c}getPoint(t,e){const n=e||new Ct,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(a?o=0:o=i),this.aClockwise===!0&&!a&&(o===i?o=-i:o=o-i);const r=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(r),h=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const d=Math.cos(this.aRotation),u=Math.sin(this.aRotation),l=c-this.aX,f=h-this.aY;c=l*d-f*u+this.aX,h=l*u+f*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Hp extends Ho{constructor(t,e,n,i,o,a){super(t,e,n,n,i,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Wo(){let s=0,t=0,e=0,n=0;function i(o,a,r,c){s=o,t=r,e=-3*o+3*a-2*r-c,n=2*o-2*a+r+c}return{initCatmullRom:function(o,a,r,c,h){i(a,r,h*(r-o),h*(c-a))},initNonuniformCatmullRom:function(o,a,r,c,h,d,u){let l=(a-o)/h-(r-o)/(h+d)+(r-a)/d,f=(r-a)/d-(c-a)/(d+u)+(c-r)/u;l*=d,f*=d,i(a,r,l,f)},calc:function(o){const a=o*o,r=a*o;return s+t*o+e*a+n*r}}}const xs=new F,wo=new Wo,So=new Wo,yo=new Wo;class Ls extends ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){const n=e,i=this.points,o=i.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),c=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:c===0&&r===o-1&&(r=o-2,c=1);let h,d;this.closed||r>0?h=i[(r-1)%o]:(xs.subVectors(i[0],i[1]).add(i[0]),h=xs);const u=i[r%o],l=i[(r+1)%o];if(this.closed||r+2<o?d=i[(r+2)%o]:(xs.subVectors(i[o-1],i[o-2]).add(i[o-1]),d=xs),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(l),f),m=Math.pow(l.distanceToSquared(d),f);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),wo.initNonuniformCatmullRom(h.x,u.x,l.x,d.x,_,v,m),So.initNonuniformCatmullRom(h.y,u.y,l.y,d.y,_,v,m),yo.initNonuniformCatmullRom(h.z,u.z,l.z,d.z,_,v,m)}else this.curveType==="catmullrom"&&(wo.initCatmullRom(h.x,u.x,l.x,d.x,this.tension),So.initCatmullRom(h.y,u.y,l.y,d.y,this.tension),yo.initCatmullRom(h.z,u.z,l.z,d.z,this.tension));return n.set(wo.calc(c),So.calc(c),yo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function wa(s,t,e,n,i){const o=(n-t)*.5,a=(i-e)*.5,r=s*s,c=s*r;return(2*e-2*n+o+a)*c+(-3*e+3*n-2*o-a)*r+o*s+e}function Wp(s,t){const e=1-s;return e*e*t}function Xp(s,t){return 2*(1-s)*s*t}function qp(s,t){return s*s*t}function ki(s,t,e,n){return Wp(s,t)+Xp(s,e)+qp(s,n)}function Yp(s,t){const e=1-s;return e*e*e*t}function Zp(s,t){const e=1-s;return 3*e*e*s*t}function Kp(s,t){return 3*(1-s)*s*s*t}function Jp(s,t){return s*s*s*t}function zi(s,t,e,n,i){return Yp(s,t)+Zp(s,e)+Kp(s,n)+Jp(s,i)}class fc extends ln{constructor(t=new Ct,e=new Ct,n=new Ct,i=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ct){const n=e,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(zi(t,i.x,o.x,a.x,r.x),zi(t,i.y,o.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class jp extends ln{constructor(t=new F,e=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){const n=e,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(zi(t,i.x,o.x,a.x,r.x),zi(t,i.y,o.y,a.y,r.y),zi(t,i.z,o.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pc extends ln{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $p extends ln{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mc extends ln{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){const n=e,i=this.v0,o=this.v1,a=this.v2;return n.set(ki(t,i.x,o.x,a.x),ki(t,i.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends ln{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,i=this.v0,o=this.v1,a=this.v2;return n.set(ki(t,i.x,o.x,a.x),ki(t,i.y,o.y,a.y),ki(t,i.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){const n=e,i=this.points,o=(i.length-1)*t,a=Math.floor(o),r=o-a,c=i[a===0?a:a-1],h=i[a],d=i[a>i.length-2?i.length-1:a+1],u=i[a>i.length-3?i.length-1:a+2];return n.set(wa(r,c.x,h.x,d.x,u.x),wa(r,c.y,h.y,d.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ct().fromArray(i))}return this}}var Is=Object.freeze({__proto__:null,ArcCurve:Hp,CatmullRomCurve3:Ls,CubicBezierCurve:fc,CubicBezierCurve3:jp,EllipseCurve:Ho,LineCurve:pc,LineCurve3:$p,QuadraticBezierCurve:mc,QuadraticBezierCurve3:gc,SplineCurve:_c});class Qp extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Is[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const a=i[o]-n,r=this.curves[o],c=r.getLength(),h=c===0?0:1-a/c;return r.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const a=o[i],r=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(r);for(let h=0;h<c.length;h++){const d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Is[i.type]().fromJSON(i))}return this}}class Sa extends Qp{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new pc(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new mc(this.currentPoint.clone(),new Ct(t,e),new Ct(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,a){const r=new fc(this.currentPoint.clone(),new Ct(t,e),new Ct(n,i),new Ct(o,a));return this.curves.push(r),this.currentPoint.set(o,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _c(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,a){const r=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+r,e+c,n,i,o,a),this}absarc(t,e,n,i,o,a){return this.absellipse(t,e,n,n,i,o,a),this}ellipse(t,e,n,i,o,a,r,c){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,i,o,a,r,c),this}absellipse(t,e,n,i,o,a,r,c){const h=new Ho(t,e,n,i,o,a,r,c);if(this.curves.length>0){const u=h.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ji extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],a=[],r=[],c=[],h=new F,d=new Ct;a.push(0,0,0),r.push(0,0,1),c.push(.5,.5);for(let u=0,l=3;u<=e;u++,l+=3){const f=n+u/e*i;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),r.push(0,0,1),d.x=(a[l]/t+1)/2,d.y=(a[l+1]/t+1)/2,c.push(d.x,d.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new le(a,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ji(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class dt extends De{constructor(t=1,e=1,n=1,i=32,o=1,a=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:c};const h=this;i=Math.floor(i),o=Math.floor(o);const d=[],u=[],l=[],f=[];let _=0;const v=[],m=n/2;let p=0;x(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(d),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(f,2));function x(){const w=new F,I=new F;let C=0;const L=(e-t)/n;for(let B=0;B<=o;B++){const y=[],E=B/o,T=E*(e-t)+t;for(let U=0;U<=i;U++){const it=U/i,O=it*c+r,z=Math.sin(O),H=Math.cos(O);I.x=T*z,I.y=-E*n+m,I.z=T*H,u.push(I.x,I.y,I.z),w.set(z,L,H).normalize(),l.push(w.x,w.y,w.z),f.push(it,1-E),y.push(_++)}v.push(y)}for(let B=0;B<i;B++)for(let y=0;y<o;y++){const E=v[y][B],T=v[y+1][B],U=v[y+1][B+1],it=v[y][B+1];d.push(E,T,it),d.push(T,U,it),C+=6}h.addGroup(p,C,0),p+=C}function g(w){const I=_,C=new Ct,L=new F;let B=0;const y=w===!0?t:e,E=w===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*E,0),l.push(0,E,0),f.push(.5,.5),_++;const T=_;for(let U=0;U<=i;U++){const O=U/i*c+r,z=Math.cos(O),H=Math.sin(O);L.x=y*H,L.y=m*E,L.z=y*z,u.push(L.x,L.y,L.z),l.push(0,E,0),C.x=z*.5+.5,C.y=H*.5*E+.5,f.push(C.x,C.y),_++}for(let U=0;U<i;U++){const it=I+U,O=T+U;w===!0?d.push(O,O+1,it):d.push(O+1,O,it),B+=3}h.addGroup(p,B,w===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Me extends dt{constructor(t=1,e=1,n=32,i=1,o=!1,a=0,r=Math.PI*2){super(0,t,e,n,i,o,a,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:r}}static fromJSON(t){return new Me(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xo extends De{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],a=[];r(i),h(n),d(),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(o.slice(),3)),this.setAttribute("uv",new le(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(x){const g=new F,w=new F,I=new F;for(let C=0;C<e.length;C+=3)f(e[C+0],g),f(e[C+1],w),f(e[C+2],I),c(g,w,I,x)}function c(x,g,w,I){const C=I+1,L=[];for(let B=0;B<=C;B++){L[B]=[];const y=x.clone().lerp(w,B/C),E=g.clone().lerp(w,B/C),T=C-B;for(let U=0;U<=T;U++)U===0&&B===C?L[B][U]=y:L[B][U]=y.clone().lerp(E,U/T)}for(let B=0;B<C;B++)for(let y=0;y<2*(C-B)-1;y++){const E=Math.floor(y/2);y%2===0?(l(L[B][E+1]),l(L[B+1][E]),l(L[B][E])):(l(L[B][E+1]),l(L[B+1][E+1]),l(L[B+1][E]))}}function h(x){const g=new F;for(let w=0;w<o.length;w+=3)g.x=o[w+0],g.y=o[w+1],g.z=o[w+2],g.normalize().multiplyScalar(x),o[w+0]=g.x,o[w+1]=g.y,o[w+2]=g.z}function d(){const x=new F;for(let g=0;g<o.length;g+=3){x.x=o[g+0],x.y=o[g+1],x.z=o[g+2];const w=m(x)/2/Math.PI+.5,I=p(x)/Math.PI+.5;a.push(w,1-I)}_(),u()}function u(){for(let x=0;x<a.length;x+=6){const g=a[x+0],w=a[x+2],I=a[x+4],C=Math.max(g,w,I),L=Math.min(g,w,I);C>.9&&L<.1&&(g<.2&&(a[x+0]+=1),w<.2&&(a[x+2]+=1),I<.2&&(a[x+4]+=1))}}function l(x){o.push(x.x,x.y,x.z)}function f(x,g){const w=x*3;g.x=t[w+0],g.y=t[w+1],g.z=t[w+2]}function _(){const x=new F,g=new F,w=new F,I=new F,C=new Ct,L=new Ct,B=new Ct;for(let y=0,E=0;y<o.length;y+=9,E+=6){x.set(o[y+0],o[y+1],o[y+2]),g.set(o[y+3],o[y+4],o[y+5]),w.set(o[y+6],o[y+7],o[y+8]),C.set(a[E+0],a[E+1]),L.set(a[E+2],a[E+3]),B.set(a[E+4],a[E+5]),I.copy(x).add(g).add(w).divideScalar(3);const T=m(I);v(C,E+0,x,T),v(L,E+2,g,T),v(B,E+4,w,T)}}function v(x,g,w,I){I<0&&x.x===1&&(a[g]=x.x-1),w.x===0&&w.z===0&&(a[g]=I/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.vertices,t.indices,t.radius,t.details)}}class qo extends Xo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new qo(t.radius,t.detail)}}class vc extends Sa{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Sa().fromJSON(i))}return this}}const t0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=Mc(s,0,i,e,!0);const a=[];if(!o||o.next===o.prev)return a;let r,c,h,d,u,l,f;if(n&&(o=o0(s,t,o,e)),s.length>80*e){r=h=s[0],c=d=s[1];for(let _=e;_<i;_+=e)u=s[_],l=s[_+1],u<r&&(r=u),l<c&&(c=l),u>h&&(h=u),l>d&&(d=l);f=Math.max(h-r,d-c),f=f!==0?32767/f:0}return Xi(o,a,e,r,c,f,0),a}};function Mc(s,t,e,n,i){let o,a;if(i===g0(s,t,e,n)>0)for(o=t;o<e;o+=n)a=ya(o,s[o],s[o+1],a);else for(o=e-n;o>=t;o-=n)a=ya(o,s[o],s[o+1],a);return a&&Bs(a,a.next)&&(Yi(a),a=a.next),a}function Jn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Bs(e,e.next)||me(e.prev,e,e.next)===0)){if(Yi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Xi(s,t,e,n,i,o,a){if(!s)return;!a&&o&&h0(s,n,i,o);let r=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,o?n0(s,n,i,o):e0(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),Yi(s),s=h.next,r=h.next;continue}if(s=h,s===r){a?a===1?(s=i0(Jn(s),t,e),Xi(s,t,e,n,i,o,2)):a===2&&s0(s,t,e,n,i,o):Xi(Jn(s),t,e,n,i,o,1);break}}}function e0(s){const t=s.prev,e=s,n=s.next;if(me(t,e,n)>=0)return!1;const i=t.x,o=e.x,a=n.x,r=t.y,c=e.y,h=n.y,d=i<o?i<a?i:a:o<a?o:a,u=r<c?r<h?r:h:c<h?c:h,l=i>o?i>a?i:a:o>a?o:a,f=r>c?r>h?r:h:c>h?c:h;let _=n.next;for(;_!==t;){if(_.x>=d&&_.x<=l&&_.y>=u&&_.y<=f&&Mi(i,r,o,c,a,h,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function n0(s,t,e,n){const i=s.prev,o=s,a=s.next;if(me(i,o,a)>=0)return!1;const r=i.x,c=o.x,h=a.x,d=i.y,u=o.y,l=a.y,f=r<c?r<h?r:h:c<h?c:h,_=d<u?d<l?d:l:u<l?u:l,v=r>c?r>h?r:h:c>h?c:h,m=d>u?d>l?d:l:u>l?u:l,p=Uo(f,_,t,e,n),x=Uo(v,m,t,e,n);let g=s.prevZ,w=s.nextZ;for(;g&&g.z>=p&&w&&w.z<=x;){if(g.x>=f&&g.x<=v&&g.y>=_&&g.y<=m&&g!==i&&g!==a&&Mi(r,d,c,u,h,l,g.x,g.y)&&me(g.prev,g,g.next)>=0||(g=g.prevZ,w.x>=f&&w.x<=v&&w.y>=_&&w.y<=m&&w!==i&&w!==a&&Mi(r,d,c,u,h,l,w.x,w.y)&&me(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;g&&g.z>=p;){if(g.x>=f&&g.x<=v&&g.y>=_&&g.y<=m&&g!==i&&g!==a&&Mi(r,d,c,u,h,l,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;w&&w.z<=x;){if(w.x>=f&&w.x<=v&&w.y>=_&&w.y<=m&&w!==i&&w!==a&&Mi(r,d,c,u,h,l,w.x,w.y)&&me(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function i0(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Bs(i,o)&&xc(i,n,n.next,o)&&qi(i,o)&&qi(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Yi(n),Yi(n.next),n=s=o),n=n.next}while(n!==s);return Jn(n)}function s0(s,t,e,n,i,o){let a=s;do{let r=a.next.next;for(;r!==a.prev;){if(a.i!==r.i&&f0(a,r)){let c=wc(a,r);a=Jn(a,a.next),c=Jn(c,c.next),Xi(a,t,e,n,i,o,0),Xi(c,t,e,n,i,o,0);return}r=r.next}a=a.next}while(a!==s)}function o0(s,t,e,n){const i=[];let o,a,r,c,h;for(o=0,a=t.length;o<a;o++)r=t[o]*n,c=o<a-1?t[o+1]*n:s.length,h=Mc(s,r,c,n,!1),h===h.next&&(h.steiner=!0),i.push(u0(h));for(i.sort(r0),o=0;o<i.length;o++)e=a0(i[o],e);return e}function r0(s,t){return s.x-t.x}function a0(s,t){const e=c0(s,t);if(!e)return t;const n=wc(e,s);return Jn(n,n.next),Jn(e,e.next)}function c0(s,t){let e=t,n=-1/0,i;const o=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const l=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=o&&l>n&&(n=l,i=e.x<e.next.x?e:e.next,l===o))return i}e=e.next}while(e!==t);if(!i)return null;const r=i,c=i.x,h=i.y;let d=1/0,u;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&Mi(a<h?o:n,a,c,h,a<h?n:o,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(o-e.x),qi(e,s)&&(u<d||u===d&&(e.x>i.x||e.x===i.x&&l0(i,e)))&&(i=e,d=u)),e=e.next;while(e!==r);return i}function l0(s,t){return me(s.prev,s,t.prev)<0&&me(t.next,s,s.next)<0}function h0(s,t,e,n){let i=s;do i.z===0&&(i.z=Uo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,d0(i)}function d0(s){let t,e,n,i,o,a,r,c,h=1;do{for(e=s,s=null,o=null,a=0;e;){for(a++,n=e,r=0,t=0;t<h&&(r++,n=n.nextZ,!!n);t++);for(c=h;r>0||c>0&&n;)r!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,r--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,h*=2}while(a>1);return s}function Uo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function u0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Mi(s,t,e,n,i,o,a,r){return(i-a)*(t-r)>=(s-a)*(o-r)&&(s-a)*(n-r)>=(e-a)*(t-r)&&(e-a)*(o-r)>=(i-a)*(n-r)}function f0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!p0(s,t)&&(qi(s,t)&&qi(t,s)&&m0(s,t)&&(me(s.prev,s,t.prev)||me(s,t.prev,t))||Bs(s,t)&&me(s.prev,s,s.next)>0&&me(t.prev,t,t.next)>0)}function me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Bs(s,t){return s.x===t.x&&s.y===t.y}function xc(s,t,e,n){const i=Ss(me(s,t,e)),o=Ss(me(s,t,n)),a=Ss(me(e,n,s)),r=Ss(me(e,n,t));return!!(i!==o&&a!==r||i===0&&ws(s,e,t)||o===0&&ws(s,n,t)||a===0&&ws(e,s,n)||r===0&&ws(e,t,n))}function ws(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ss(s){return s>0?1:s<0?-1:0}function p0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&xc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function qi(s,t){return me(s.prev,s,s.next)<0?me(s,t,s.next)>=0&&me(s,s.prev,t)>=0:me(s,t,s.prev)<0||me(s,s.next,t)<0}function m0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function wc(s,t){const e=new No(s.i,s.x,s.y),n=new No(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function ya(s,t,e,n){const i=new No(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Yi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function No(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function g0(s,t,e,n){let i=0;for(let o=t,a=e-n;o<e;o+=n)i+=(s[a]-s[o])*(s[o+1]+s[a+1]),a=o;return i}class Vi{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Vi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Ea(t),ba(n,t);let a=t.length;e.forEach(Ea);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,ba(n,e[c]);const r=t0.triangulate(n,i);for(let c=0;c<r.length;c+=3)o.push(r.slice(c,c+3));return o}}function Ea(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ba(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Yo extends De{constructor(t=new vc([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let r=0,c=t.length;r<c;r++){const h=t[r];a(h)}this.setAttribute("position",new le(i,3)),this.setAttribute("uv",new le(o,2)),this.computeVertexNormals();function a(r){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let l=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:_0;let g,w=!1,I,C,L,B;p&&(g=p.getSpacedPoints(d),w=!0,l=!1,I=p.computeFrenetFrames(d,!1),C=new F,L=new F,B=new F),l||(m=0,f=0,_=0,v=0);const y=r.extractPoints(h);let E=y.shape;const T=y.holes;if(!Vi.isClockWise(E)){E=E.reverse();for(let D=0,nt=T.length;D<nt;D++){const tt=T[D];Vi.isClockWise(tt)&&(T[D]=tt.reverse())}}const it=Vi.triangulateShape(E,T),O=E;for(let D=0,nt=T.length;D<nt;D++){const tt=T[D];E=E.concat(tt)}function z(D,nt,tt){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(nt,tt)}const H=E.length,Q=it.length;function V(D,nt,tt){let mt,st,Ft;const Et=D.x-nt.x,R=D.y-nt.y,b=tt.x-D.x,q=tt.y-D.y,pt=Et*Et+R*R,ht=Et*q-R*b;if(Math.abs(ht)>Number.EPSILON){const ct=Math.sqrt(pt),Bt=Math.sqrt(b*b+q*q),At=nt.x-R/ct,It=nt.y+Et/ct,Gt=tt.x-q/Bt,Nt=tt.y+b/Bt,lt=((Gt-At)*q-(Nt-It)*b)/(Et*q-R*b);mt=At+Et*lt-D.x,st=It+R*lt-D.y;const Kt=mt*mt+st*st;if(Kt<=2)return new Ct(mt,st);Ft=Math.sqrt(Kt/2)}else{let ct=!1;Et>Number.EPSILON?b>Number.EPSILON&&(ct=!0):Et<-Number.EPSILON?b<-Number.EPSILON&&(ct=!0):Math.sign(R)===Math.sign(q)&&(ct=!0),ct?(mt=-R,st=Et,Ft=Math.sqrt(pt)):(mt=Et,st=R,Ft=Math.sqrt(pt/2))}return new Ct(mt/Ft,st/Ft)}const K=[];for(let D=0,nt=O.length,tt=nt-1,mt=D+1;D<nt;D++,tt++,mt++)tt===nt&&(tt=0),mt===nt&&(mt=0),K[D]=V(O[D],O[tt],O[mt]);const ot=[];let J,rt=K.concat();for(let D=0,nt=T.length;D<nt;D++){const tt=T[D];J=[];for(let mt=0,st=tt.length,Ft=st-1,Et=mt+1;mt<st;mt++,Ft++,Et++)Ft===st&&(Ft=0),Et===st&&(Et=0),J[mt]=V(tt[mt],tt[Ft],tt[Et]);ot.push(J),rt=rt.concat(J)}for(let D=0;D<m;D++){const nt=D/m,tt=f*Math.cos(nt*Math.PI/2),mt=_*Math.sin(nt*Math.PI/2)+v;for(let st=0,Ft=O.length;st<Ft;st++){const Et=z(O[st],K[st],mt);$(Et.x,Et.y,-tt)}for(let st=0,Ft=T.length;st<Ft;st++){const Et=T[st];J=ot[st];for(let R=0,b=Et.length;R<b;R++){const q=z(Et[R],J[R],mt);$(q.x,q.y,-tt)}}}const X=_+v;for(let D=0;D<H;D++){const nt=l?z(E[D],rt[D],X):E[D];w?(L.copy(I.normals[0]).multiplyScalar(nt.x),C.copy(I.binormals[0]).multiplyScalar(nt.y),B.copy(g[0]).add(L).add(C),$(B.x,B.y,B.z)):$(nt.x,nt.y,0)}for(let D=1;D<=d;D++)for(let nt=0;nt<H;nt++){const tt=l?z(E[nt],rt[nt],X):E[nt];w?(L.copy(I.normals[D]).multiplyScalar(tt.x),C.copy(I.binormals[D]).multiplyScalar(tt.y),B.copy(g[D]).add(L).add(C),$(B.x,B.y,B.z)):$(tt.x,tt.y,u/d*D)}for(let D=m-1;D>=0;D--){const nt=D/m,tt=f*Math.cos(nt*Math.PI/2),mt=_*Math.sin(nt*Math.PI/2)+v;for(let st=0,Ft=O.length;st<Ft;st++){const Et=z(O[st],K[st],mt);$(Et.x,Et.y,u+tt)}for(let st=0,Ft=T.length;st<Ft;st++){const Et=T[st];J=ot[st];for(let R=0,b=Et.length;R<b;R++){const q=z(Et[R],J[R],mt);w?$(q.x,q.y+g[d-1].y,g[d-1].x+tt):$(q.x,q.y,u+tt)}}}at(),St();function at(){const D=i.length/3;if(l){let nt=0,tt=H*nt;for(let mt=0;mt<Q;mt++){const st=it[mt];_t(st[2]+tt,st[1]+tt,st[0]+tt)}nt=d+m*2,tt=H*nt;for(let mt=0;mt<Q;mt++){const st=it[mt];_t(st[0]+tt,st[1]+tt,st[2]+tt)}}else{for(let nt=0;nt<Q;nt++){const tt=it[nt];_t(tt[2],tt[1],tt[0])}for(let nt=0;nt<Q;nt++){const tt=it[nt];_t(tt[0]+H*d,tt[1]+H*d,tt[2]+H*d)}}n.addGroup(D,i.length/3-D,0)}function St(){const D=i.length/3;let nt=0;vt(O,nt),nt+=O.length;for(let tt=0,mt=T.length;tt<mt;tt++){const st=T[tt];vt(st,nt),nt+=st.length}n.addGroup(D,i.length/3-D,1)}function vt(D,nt){let tt=D.length;for(;--tt>=0;){const mt=tt;let st=tt-1;st<0&&(st=D.length-1);for(let Ft=0,Et=d+m*2;Ft<Et;Ft++){const R=H*Ft,b=H*(Ft+1),q=nt+mt+R,pt=nt+st+R,ht=nt+st+b,ct=nt+mt+b;Rt(q,pt,ht,ct)}}}function $(D,nt,tt){c.push(D),c.push(nt),c.push(tt)}function _t(D,nt,tt){yt(D),yt(nt),yt(tt);const mt=i.length/3,st=x.generateTopUV(n,i,mt-3,mt-2,mt-1);Mt(st[0]),Mt(st[1]),Mt(st[2])}function Rt(D,nt,tt,mt){yt(D),yt(nt),yt(mt),yt(nt),yt(tt),yt(mt);const st=i.length/3,Ft=x.generateSideWallUV(n,i,st-6,st-3,st-2,st-1);Mt(Ft[0]),Mt(Ft[1]),Mt(Ft[3]),Mt(Ft[1]),Mt(Ft[2]),Mt(Ft[3])}function yt(D){i.push(c[D*3+0]),i.push(c[D*3+1]),i.push(c[D*3+2])}function Mt(D){o.push(D.x),o.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return v0(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,a=t.shapes.length;o<a;o++){const r=e[t.shapes[o]];n.push(r)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Is[i.type]().fromJSON(i)),new Yo(n,t.options)}}const _0={generateTopUV:function(s,t,e,n,i){const o=t[e*3],a=t[e*3+1],r=t[n*3],c=t[n*3+1],h=t[i*3],d=t[i*3+1];return[new Ct(o,a),new Ct(r,c),new Ct(h,d)]},generateSideWallUV:function(s,t,e,n,i,o){const a=t[e*3],r=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],u=t[n*3+2],l=t[i*3],f=t[i*3+1],_=t[i*3+2],v=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(r-d)<Math.abs(a-h)?[new Ct(a,1-c),new Ct(h,1-u),new Ct(l,1-_),new Ct(v,1-p)]:[new Ct(r,1-c),new Ct(d,1-u),new Ct(f,1-_),new Ct(m,1-p)]}};function v0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Vt extends De{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+r,Math.PI);let h=0;const d=[],u=new F,l=new F,f=[],_=[],v=[],m=[];for(let p=0;p<=n;p++){const x=[],g=p/n;let w=0;p===0&&a===0?w=.5/e:p===n&&c===Math.PI&&(w=-.5/e);for(let I=0;I<=e;I++){const C=I/e;u.x=-t*Math.cos(i+C*o)*Math.sin(a+g*r),u.y=t*Math.cos(a+g*r),u.z=t*Math.sin(i+C*o)*Math.sin(a+g*r),_.push(u.x,u.y,u.z),l.copy(u).normalize(),v.push(l.x,l.y,l.z),m.push(C+w,1-g),x.push(h++)}d.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const g=d[p][x+1],w=d[p][x],I=d[p+1][x],C=d[p+1][x+1];(p!==0||a>0)&&f.push(g,w,C),(p!==n-1||c<Math.PI)&&f.push(w,I,C)}this.setIndex(f),this.setAttribute("position",new le(_,3)),this.setAttribute("normal",new le(v,3)),this.setAttribute("uv",new le(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nn extends De{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],c=[],h=[],d=new F,u=new F,l=new F;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const v=_/i*o,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),r.push(u.x,u.y,u.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),l.subVectors(u,d).normalize(),c.push(l.x,l.y,l.z),h.push(_/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const v=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,x=(i+1)*f+_;a.push(v,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new le(r,3)),this.setAttribute("normal",new le(c,3)),this.setAttribute("uv",new le(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Zi extends De{constructor(t=new gc(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const a=t.computeFrenetFrames(e,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const r=new F,c=new F,h=new Ct;let d=new F;const u=[],l=[],f=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new le(u,3)),this.setAttribute("normal",new le(l,3)),this.setAttribute("uv",new le(f,2));function v(){for(let g=0;g<e;g++)m(g);m(o===!1?e:0),x(),p()}function m(g){d=t.getPointAt(g/e,d);const w=a.normals[g],I=a.binormals[g];for(let C=0;C<=i;C++){const L=C/i*Math.PI*2,B=Math.sin(L),y=-Math.cos(L);c.x=y*w.x+B*I.x,c.y=y*w.y+B*I.y,c.z=y*w.z+B*I.z,c.normalize(),l.push(c.x,c.y,c.z),r.x=d.x+n*c.x,r.y=d.y+n*c.y,r.z=d.z+n*c.z,u.push(r.x,r.y,r.z)}}function p(){for(let g=1;g<=e;g++)for(let w=1;w<=i;w++){const I=(i+1)*(g-1)+(w-1),C=(i+1)*g+(w-1),L=(i+1)*g+w,B=(i+1)*(g-1)+w;_.push(I,C,B),_.push(C,L,B)}}function x(){for(let g=0;g<=e;g++)for(let w=0;w<=i;w++)h.x=g/e,h.y=w/i,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Zi(new Is[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class k extends Ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ha,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zo extends k{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Gs extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class M0 extends Gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Eo=new _e,Ta=new F,Aa=new F;class Ko{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ta.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ta),Aa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Aa),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class x0 extends Ko{constructor(){super(new Ge(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=bi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class w0 extends Gs{constructor(t,e,n=0,i=Math.PI/3,o=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=i,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new x0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ra=new _e,Oi=new F,bo=new F;class S0 extends Ko{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Oi),bo.copy(n.position),bo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(bo),n.updateMatrixWorld(),i.makeTranslation(-Oi.x,-Oi.y,-Oi.z),Ra.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra)}}class mi extends Gs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new S0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class y0 extends Ko{constructor(){super(new sc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E0 extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new y0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class b0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pa(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const Wt={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:8,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},he={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class T0{constructor(){this.state=he.MENU,this.speedKmh=Wt.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Wt.LANES[1],this.targetLaneX=Wt.LANES[1],this.crashTimer=0}startNewGame(){this.state=he.PLAYING,this.speedKmh=Wt.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Wt.LANES[1],this.targetLaneX=Wt.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==he.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<Wt.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=Wt.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min(Wt.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=Wt.SCORING.COMBO_TIMEOUT;const t=Wt.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min(Wt.NITRO.MAX,this.nitro+Wt.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==he.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*Wt.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,o=e.keys.accelerate,a=e.keys.boost,r=this.distanceMeters/1e3,c=Math.min(Wt.SPEED.MAX_PROGRESSIVE_BONUS,r*Wt.SPEED.PROGRESSIVE_RATE),h=Wt.SPEED.BASE_START+c,d=h+45,u=Wt.SPEED.BOOST+c*.4;a&&this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-Wt.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(u,this.speedKmh+Wt.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.nitro=Math.min(Wt.NITRO.MAX,this.nitro+Wt.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max(Wt.SPEED.MIN,this.speedKmh-Wt.SPEED.BRAKING*t):o?this.speedKmh=Math.min(d,this.speedKmh+Wt.SPEED.ACCELERATION*1.6*t):this.speedKmh<h?this.speedKmh=Math.min(h,this.speedKmh+Wt.SPEED.ACCELERATION*t):this.speedKmh>h&&(this.speedKmh=Math.max(h,this.speedKmh-Wt.SPEED.NATURAL_DECEL*t)));const f=this.speedKmh*1e3/3600*t;this.distanceMeters+=f,this.score+=Math.round(f*Wt.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=he.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class A0{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.touchStartX=0,this.touchStartY=0,this.touchStartTime=0,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)&&t.preventDefault(),t.code){case"ArrowLeft":case"KeyA":this.keys.left||(this.laneChangeRequested=-1),this.keys.left=!0;break;case"ArrowRight":case"KeyD":this.keys.right||(this.laneChangeRequested=1),this.keys.right=!0;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!0;break;case"Space":this.keys.boost=!0;break;case"ArrowDown":case"KeyS":this.keys.brake=!0;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!0,this.onHorn&&this.onHorn();break;case"KeyP":case"Escape":this.onPauseToggle&&this.onPauseToggle();break;case"KeyR":this.onRestart&&this.onRestart();break}}),window.addEventListener("keyup",t=>{switch(t.code){case"ArrowLeft":case"KeyA":this.keys.left=!1;break;case"ArrowRight":case"KeyD":this.keys.right=!1;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!1;break;case"Space":this.keys.boost=!1;break;case"ArrowDown":case"KeyS":this.keys.brake=!1;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!1;break}}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0,t.touches.length>0&&(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=Date.now())},{passive:!0}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;Date.now()-this.touchStartTime<350&&Math.abs(e)>40&&Math.abs(e)>Math.abs(n)*1.3&&(e<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}triggerSteerLeft(){this.laneChangeRequested=-1}triggerSteerRight(){this.laneChangeRequested=1}setBrake(t){this.keys.brake=t}setAccelerate(t){this.keys.accelerate=t}setNitro(t){this.keys.boost=t}setBoost(t){this.keys.boost=t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0}}class R0{constructor(t){this.camera=t,this.defaultOffset=new F(Wt.CAMERA.DEFAULT_OFFSET.x,Wt.CAMERA.DEFAULT_OFFSET.y,Wt.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new F(Wt.CAMERA.LOOK_OFFSET.x,Wt.CAMERA.LOOK_OFFSET.y,Wt.CAMERA.LOOK_OFFSET.z),this.currentPos=new F,this.currentLook=new F,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=Wt.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.1,6.2),this.lookOffset.set(0,1.25,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=Wt.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const o=t.group.position,a=Math.min(1,e/Wt.SPEED.MAX_NORMAL),r=this.camera.aspect,c=r<1?Math.min(24,(1-r)*36):0;this.targetFOV=Wt.CAMERA.BASE_FOV+c+a*10+(n?8:0),this.camera.fov+=(this.targetFOV-this.camera.fov)*Math.min(1,i*Wt.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix();const h=o.x+this.defaultOffset.x,d=o.y+this.defaultOffset.y,u=o.z+this.defaultOffset.z+(n?.8:0),l=Math.min(1,i*10),f=Math.min(1,i*12);this.currentPos.x+=(h-this.currentPos.x)*l,this.currentPos.y+=(d-this.currentPos.y)*f,this.currentPos.z=u;const _=o.x+this.lookOffset.x,v=o.y+this.lookOffset.y,m=o.z+this.lookOffset.z;this.currentLook.x+=(_-this.currentLook.x)*l,this.currentLook.y+=(v-this.currentLook.y)*f,this.currentLook.z=m;let p=0,x=0;if(e>70){const C=e/280*.03;p=(Math.random()-.5)*C,x=(Math.random()-.5)*C}let g=0,w=0,I=0;if(this.shakeDuration>0){this.shakeDuration-=i;const C=Math.max(0,this.shakeDuration/.6),L=this.shakeIntensity*C;g=(Math.random()-.5)*L,w=(Math.random()-.5)*L,I=(Math.random()-.5)*L}this.camera.position.set(this.currentPos.x+p+g,this.currentPos.y+x+w,this.currentPos.z+I),this.camera.lookAt(this.currentLook.x+p*.5,this.currentLook.y+x*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,o=(e?4.8:8.2)*i,a=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),r=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*o,a,Math.cos(c)*o),this.camera.lookAt(0,r,0)}}class P0{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){this.ctx&&fetch("/audio/eta_ki_korli_mama.mp3").then(t=>{if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.arrayBuffer()}).then(t=>this.ctx.decodeAudioData(t)).then(t=>{this.crashVoiceBuffer=t}).catch(t=>{console.warn("Could not decode crash voice buffer:",t)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.04,t),this.highOsc.connect(o),o.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,o=0,a=0;for(let c=0;c<t;c++){const h=Math.random()*2-1;i=.98*i+h*.055,o=.95*o+h*.075,a=.85*a+h*.15,n[c]=(i+o+a)*.45}const r=this.ctx.createBufferSource();r.buffer=e,r.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),r.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),r.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const o=this.ctx.createBufferSource();o.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(500,t),a.frequency.exponentialRampToValueAtTime(180,t+.35);const r=this.ctx.createGain();r.gain.setValueAtTime(.001,t),r.gain.linearRampToValueAtTime(.07,t+.05),r.gain.exponentialRampToValueAtTime(.001,t+.35),o.connect(a),a.connect(r),r.connect(this.masterGain),o.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const o=[2093,2637];[0,.09].forEach(a=>{o.forEach(r=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(r,n+a),h.gain.setValueAtTime(0,n+a),h.gain.linearRampToValueAtTime(.22,n+a+.008),h.gain.exponentialRampToValueAtTime(1e-4,n+a+.18),c.connect(h),h.connect(this.masterGain),c.start(n+a),c.stop(n+a+.2)})});return}if(e==="cng"){[620,780].forEach(a=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(a,n);const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),r.connect(h),h.connect(c),c.connect(this.masterGain),r.start(n),r.stop(n+.35)});return}[330,415.3,523.25].forEach((o,a)=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();r.type=a===0?"sine":"triangle",r.frequency.setValueAtTime(o,n),h.type="lowpass",h.frequency.setValueAtTime(1400,n);const d=a===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(d,n+.02),c.gain.setValueAtTime(d,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),r.connect(h),h.connect(c),c.connect(this.masterGain),r.start(n),r.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n*.8,t),o.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.08,t+.06),a.gain.exponentialRampToValueAtTime(1e-4,t+.45),o.connect(a),a.connect(this.masterGain),o.start(t),o.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const o=this.ctx.currentTime,a=Math.min(1,Math.max(0,t/200)),r=a*5%1,c=900+a*1800+r*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const h=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,h),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,o,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,o,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,o,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,o,.05);const d=300+a*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(d,o,.06);const u=.16+a*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,u),o,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+a*350,o,.08),this.turboGain.gain.setTargetAtTime(.05,o,.08)):this.turboGain.gain.setTargetAtTime(1e-4,o,.15);const l=Math.pow(a,1.3)*.06;this.roadGain.gain.setTargetAtTime(l,o,.08),this.roadFilter.frequency.setTargetAtTime(180+a*250,o,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((o,a)=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime((a===0?n:n*1.25)*i,e+o),c.gain.setValueAtTime(.001,e+o),c.gain.linearRampToValueAtTime(.12,e+o+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+o+.28),r.connect(c),c.connect(this.masterGain),r.start(e+o),r.stop(e+o+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),o=this.ctx.createBuffer(1,i,this.ctx.sampleRate),a=o.getChannelData(0);for(let d=0;d<i;d++)a[d]=(Math.random()*2-1)*Math.exp(-d/(this.ctx.sampleRate*.12));const r=this.ctx.createBufferSource();r.buffer=o;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const h=this.ctx.createGain();h.gain.setValueAtTime(.3,t),h.gain.exponentialRampToValueAtTime(.001,t+.45),r.connect(c),c.connect(h),h.connect(this.masterGain),r.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(o=>o.lang.includes("bn")||o.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(e,t+i),a.gain.setValueAtTime(.001,t+i),a.gain.linearRampToValueAtTime(.12,t+i+.02),a.gain.exponentialRampToValueAtTime(.001,t+i+.32),o.connect(a),a.connect(this.masterGain),o.start(t+i),o.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class C0{constructor(){this.group=new wt,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new F(2.1,2.8,5.5),this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new ae(t),i=document.createElement("canvas");i.width=1024,i.height=384;const o=i.getContext("2d");o.fillStyle="#f8fafc",o.fillRect(0,0,1024,384),o.fillStyle="#dc2626",o.fillRect(0,0,1024,36),o.fillRect(0,348,1024,36),o.fillStyle="#16a34a",o.beginPath(),o.arc(512,180,110,Math.PI,0),o.fill(),o.fillStyle="#f59e0b",o.fillRect(472,80,80,100),o.beginPath(),o.moveTo(512,20),o.lineTo(460,80),o.lineTo(564,80),o.fill();const a=(S,G)=>{o.fillStyle="#dc2626";for(let et=0;et<Math.PI*2;et+=Math.PI/3)o.beginPath(),o.arc(S+Math.cos(et)*35,G+Math.sin(et)*35,24,0,Math.PI*2),o.fill();o.fillStyle="#fbbf24",o.beginPath(),o.arc(S,G,22,0,Math.PI*2),o.fill()};a(220,180),a(804,180),o.fillStyle="#1e293b",o.font="bold 54px serif",o.textAlign="center",o.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const r=new ae(i),c=document.createElement("canvas");c.width=1024,c.height=512;const h=c.getContext("2d");h.fillStyle="#f59e0b",h.fillRect(0,0,1024,140);for(let S=60;S<1024;S+=110)h.fillStyle="#dc2626",h.beginPath(),h.arc(S,70,32,0,Math.PI*2),h.fill(),h.fillStyle="#22c55e",h.beginPath(),h.arc(S,70,16,0,Math.PI*2),h.fill();h.fillStyle="#15803d",h.fillRect(0,140,1024,372),h.strokeStyle="#f8fafc",h.lineWidth=8;for(let S=30;S<1024;S+=138)h.strokeRect(S,160,116,320);h.fillStyle="#ffffff",h.font="900 80px sans-serif",h.textAlign="center",h.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),h.fillStyle="#dc2626",h.fillRect(0,140,30,372),h.fillRect(994,140,30,372);const d=new ae(c),u=document.createElement("canvas");u.width=1024,u.height=680;const l=u.getContext("2d");l.fillStyle="#4a90e2",l.fillRect(0,0,1024,680),l.fillStyle="#172554",l.beginPath(),l.moveTo(0,0),l.lineTo(110,0),l.lineTo(0,85),l.closePath(),l.fill(),l.beginPath(),l.moveTo(1024,0),l.lineTo(914,0),l.lineTo(1024,85),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.beginPath(),l.moveTo(0,85),l.lineTo(110,0),l.lineTo(914,0),l.lineTo(1024,85),l.stroke(),l.fillStyle="#2563eb",l.fillRect(100,35,824,45),l.strokeStyle="#18181b",l.lineWidth=3,l.strokeRect(100,35,824,45),l.fillStyle="#1e3a8a";for(let S=110;S<=900;S+=32)l.beginPath(),l.moveTo(S,80),l.lineTo(S+16,45),l.lineTo(S+32,80),l.closePath(),l.fill();const f=S=>{l.fillStyle="#facc15",l.fillRect(S,85,54,345),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(S,85,54,345);for(let G=104;G<=415;G+=26)l.fillStyle="#dc2626",l.beginPath(),l.arc(S+27,G,9.5,0,Math.PI*2),l.fill(),l.fillStyle="#fde047",l.beginPath(),l.arc(S+27,G,4.5,0,Math.PI*2),l.fill()};f(36),f(934);const _=90,v=335,m=_+v,p=104,x=252;l.fillStyle="#78aee6",l.fillRect(p,_,x,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(p,_,x,v);const g=386;l.fillStyle="#78aee6",l.fillRect(g,_,x,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(g,_,x,v);const w=668;l.fillStyle="#78aee6",l.fillRect(w,_,x,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(w,_,x,v);const I=(S,G)=>{[{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:0},{dx:-1,dy:0}].forEach(({dx:ut,dy:Pt})=>{l.fillStyle="#15803d",l.beginPath();const Xt=S+ut*72,oe=G+Pt*72,se=-Pt*16,Jt=ut*16;l.moveTo(S+ut*24,G+Pt*24),l.quadraticCurveTo(S+ut*46+se,G+Pt*46+Jt,Xt,oe),l.quadraticCurveTo(S+ut*46-se,G+Pt*46-Jt,S+ut*24,G+Pt*24),l.fill(),l.fillStyle="#166534",l.beginPath();const fe=S+ut*52+se*1.5,be=G+Pt*52+Jt*1.5;l.moveTo(S+ut*22,G+Pt*22),l.quadraticCurveTo(S+ut*34+se*1.8,G+Pt*34+Jt*1.8,fe,be),l.quadraticCurveTo(S+ut*38+se*.8,G+Pt*38+Jt*.8,S+ut*22,G+Pt*22),l.fill(),l.beginPath();const sn=S+ut*52-se*1.5,ze=G+Pt*52-Jt*1.5;l.moveTo(S+ut*22,G+Pt*22),l.quadraticCurveTo(S+ut*34-se*1.8,G+Pt*34-Jt*1.8,sn,ze),l.quadraticCurveTo(S+ut*38-se*.8,G+Pt*38-Jt*.8,S+ut*22,G+Pt*22),l.fill(),l.strokeStyle="#4ade80",l.lineWidth=1.8,l.beginPath(),l.moveTo(S+ut*26,G+Pt*26),l.lineTo(Xt*.95+S*.05,oe*.95+G*.05),l.stroke()}),[{dx:.707,dy:-.707},{dx:-.707,dy:-.707},{dx:.707,dy:.707},{dx:-.707,dy:.707}].forEach(({dx:ut,dy:Pt})=>{l.fillStyle="#16a34a",l.beginPath();const Xt=S+ut*46,oe=G+Pt*46,se=-Pt*10,Jt=ut*10;l.moveTo(S+ut*22,G+Pt*22),l.quadraticCurveTo(S+ut*32+se,G+Pt*32+Jt,Xt,oe),l.quadraticCurveTo(S+ut*32-se,G+Pt*32-Jt,S+ut*22,G+Pt*22),l.fill()}),l.fillStyle="#facc15";for(let ut=0;ut<Math.PI*2;ut+=Math.PI/8)l.beginPath(),l.arc(S+Math.cos(ut)*27,G+Math.sin(ut)*27,4.5,0,Math.PI*2),l.fill();l.fillStyle="#facc15",l.beginPath(),l.arc(S,G,25,0,Math.PI*2),l.fill(),l.strokeStyle="#ca8a04",l.lineWidth=2,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.arc(S,G,14,0,Math.PI*2),l.fill(),l.fillStyle="#fef08a",l.beginPath(),l.arc(S,G,6,0,Math.PI*2),l.fill()};I(p+x*.5,_+v*.5),I(w+x*.5,_+v*.5),((S,G,et)=>{l.strokeStyle="#18181b",l.lineWidth=3.5,l.lineCap="round",l.beginPath(),l.moveTo(S-24,et),l.lineTo(S-30,et-5),l.moveTo(S-24,et),l.lineTo(S-18,et-5),l.moveTo(S-24,et),l.lineTo(S-22,et-22),l.lineTo(S-32,et-52),l.lineTo(S-18,et-80),l.stroke(),l.beginPath(),l.moveTo(S+12,et),l.lineTo(S+6,et-5),l.moveTo(S+12,et),l.lineTo(S+18,et-5),l.moveTo(S+12,et),l.lineTo(S+14,et-22),l.lineTo(S+24,et-52),l.lineTo(S+8,et-84),l.stroke(),[{tipX:S+72,tipY:G-25,midX:S+45,midY:G-8},{tipX:S+95,tipY:G-2,midX:S+56,midY:G+12},{tipX:S+104,tipY:G+24,midX:S+58,midY:G+32},{tipX:S+82,tipY:G+50,midX:S+48,midY:G+46}].forEach(({tipX:Pt,tipY:Xt,midX:oe,midY:se})=>{l.fillStyle="#facc15",l.beginPath(),l.moveTo(S+16,G+30),l.quadraticCurveTo(oe,se-12,Pt,Xt),l.quadraticCurveTo(Pt+6,Xt+12,Pt-12,Xt+18),l.quadraticCurveTo(oe,se+12,S+16,G+38),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(Pt-18,Xt+4),l.quadraticCurveTo(Pt-4,Xt-8,Pt,Xt),l.quadraticCurveTo(Pt+6,Xt+12,Pt-12,Xt+18),l.quadraticCurveTo(Pt-12,Xt+10,Pt-18,Xt+4),l.closePath(),l.fill()}),l.fillStyle="#facc15",l.beginPath(),l.moveTo(S-36,G+44),l.quadraticCurveTo(S-2,G+72,S+34,G+46),l.quadraticCurveTo(S+8,G+22,S-36,G+44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(S-16,G-42),l.quadraticCurveTo(S-62,G-2,S-42,G+46),l.quadraticCurveTo(S+12,G+34,S+4,G-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(S-18,G-28),l.quadraticCurveTo(S+24,G-35,S+58,G-14),l.lineTo(S+52,G+12),l.quadraticCurveTo(S+14,G+18,S-22,G+12),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#38bdf8",[{x:S+58,y:G-14},{x:S+64,y:G+4},{x:S+52,y:G+18}].forEach(({x:Pt,y:Xt})=>{l.beginPath(),l.ellipse(Pt,Xt,9,6,-Math.PI/4,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=1.8,l.stroke()}),l.strokeStyle="#1e3a8a",l.lineWidth=2,l.beginPath(),l.moveTo(S-4,G-18),l.lineTo(S+42,G-8),l.moveTo(S-2,G-6),l.lineTo(S+44,G+4),l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(S-24,G-32),l.quadraticCurveTo(S-28,G-68,S-2,G-78),l.quadraticCurveTo(S+24,G-74,S+22,G-48),l.quadraticCurveTo(S+8,G-28,S-16,G-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.moveTo(S+20,G-58),l.quadraticCurveTo(S+36,G-54,S+44,G-42),l.quadraticCurveTo(S+28,G-42,S+18,G-44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.2,l.stroke(),l.beginPath(),l.moveTo(S+20,G-50),l.lineTo(S+42,G-43),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(S+6,G-58,8.5,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2,l.stroke(),l.fillStyle="#18181b",l.beginPath(),l.arc(S+8,G-58,4.2,0,Math.PI*2),l.fill(),l.fillStyle="#ffffff",l.beginPath(),l.arc(S+7,G-60,1.8,0,Math.PI*2),l.fill()})(g+x*.5,_+v*.52,m),l.fillStyle="#3b82f6",l.fillRect(20,m,984,45),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(20,m,984,45);const L=S=>{l.fillStyle="#94a3b8",l.fillRect(S,m+8,54,28),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(S,m+8,54,28),l.fillStyle="#334155",l.fillRect(S+22,m+4,10,36),l.fillStyle="#f8fafc",l.fillRect(S+6,m+18,6,8),l.fillRect(S+42,m+18,6,8)};L(205),L(485),L(765);const B=470;l.fillStyle="#4a90e2",l.beginPath(),l.moveTo(20,B),l.lineTo(20,580),l.lineTo(315,580),l.lineTo(365,635),l.lineTo(659,635),l.lineTo(709,580),l.lineTo(1004,580),l.lineTo(1004,B),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.stroke();const y=(S,G)=>{l.fillStyle="#18181b",l.fillRect(S-4,498,172,64),l.strokeStyle="#facc15",l.lineWidth=3,l.strokeRect(S-4,498,172,64),(G?["#f59e0b","#ef4444","#f8fafc"]:["#f8fafc","#ef4444","#f59e0b"]).forEach((Ut,ut)=>{l.fillStyle=Ut,l.fillRect(S+ut*54+2,504,50,52),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(S+ut*54+2,504,50,52),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(S+ut*54+6,508,42,6)})};y(118,!0),y(742,!1);const E=new ae(u);this.yellowPaint=new k({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new k({color:165063,roughness:.4,metalness:.3}),this.redPaint=new k({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new k({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new k({color:2040877,roughness:.8}),this.woodPlankMat=new k({color:7877903,roughness:.9}),this.tireMat=new k({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new k({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new Zo({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new re({color:16777215}),this.taillightMat=new k({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new k({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new k({color:16119280,roughness:.65}),this.cowBrownMat=new k({color:9262372,roughness:.7}),this.cowBlackMat=new k({color:2236962,roughness:.75}),this.cowFawnMat=new k({color:12088115,roughness:.68}),this.hornMat=new k({color:3621201,roughness:.4}),this.snoutMat=new k({color:1974308,roughness:.8});const T=new wt;T.name="truckBody",this.bodyGroup=T;const U=new Z(1.9,.4,6),it=new M(U,this.chassisMat);it.position.set(0,.65,.2),it.castShadow=!0,T.add(it);const O=new wt;O.position.set(0,.6,-2.85),[-.3,0,.3].forEach(S=>{const G=new dt(.06,.06,2.3,8);G.rotateZ(Math.PI/2);const et=new M(G,this.tealBumperMat);et.position.y=S,et.castShadow=!0,O.add(et)}),[-.95,-.45,.45,.95].forEach(S=>{const G=new Z(.08,.72,.08),et=new M(G,this.tealBumperMat);et.position.x=S,O.add(et)}),[-1.08,1.08].forEach(S=>{const G=new dt(.03,.03,.9,6),et=new M(G,this.tealBumperMat);et.position.set(S,.35,0),O.add(et);const Ut=new Vt(.07,8,8),ut=new M(Ut,this.redPaint);ut.position.set(S,.8,0),O.add(ut)});const z=document.createElement("canvas");z.width=256,z.height=80;const H=z.getContext("2d");H.fillStyle="#006633",H.fillRect(0,0,256,80),H.strokeStyle="#ffffff",H.lineWidth=4,H.strokeRect(4,4,248,72),H.fillStyle="#ffffff",H.font="bold 26px sans-serif",H.textAlign="center",H.fillText("যশোর-ট",128,34),H.fillText("০২-০৯৬৯",128,64);const Q=new ae(z),V=new Yt(.65,.22),K=new re({map:Q}),ot=new M(V,K);ot.position.set(0,-.15,.08),O.add(ot),T.add(O);const J=new Z(1.85,.95,1.6),rt=new M(J,this.yellowPaint);rt.position.set(0,1.25,-2.05),rt.castShadow=!0,T.add(rt);const X=new Yt(1.65,.85),at=new k({map:n}),St=new M(X,at);St.position.set(0,1.25,-2.86),T.add(St),[-.68,.68].forEach(S=>{const G=new dt(.16,.16,.06,16);G.rotateX(Math.PI/2);const et=new M(G,this.chassisMat);et.position.set(S,1.15,-2.87),T.add(et);const Ut=new Ji(.13,16),ut=new M(Ut,this.headlightMat);ut.position.set(S,1.15,-2.89),T.add(ut),this.headlights.push(ut);const Pt=new w0(16772829,2.5,60,Math.PI/5,.5,1.2);Pt.position.set(S,1.15,-2.9),Pt.target.position.set(S*1.5,0,-35),T.add(Pt),T.add(Pt.target)}),[-.98,.98].forEach(S=>{const G=new Z(.24,.55,1.4),et=new M(G,this.chassisMat);et.position.set(S,.95,-1.95),et.castShadow=!0,T.add(et)});const vt=new Z(2.1,1.45,1.55),$=new M(vt,this.yellowPaint);$.position.set(0,1.75,-.6),$.castShadow=!0,T.add($),[-1.06,1.06].forEach(S=>{const G=new Z(.04,1.35,1.4),et=new M(G,this.cyanBluePaint);et.position.set(S,1.75,-.6),T.add(et);const Ut=new Yt(.65,.55),ut=new M(Ut,this.glassMat);ut.position.set(S>0?S+.03:S-.03,1.95,-.65),ut.rotation.y=S>0?Math.PI/2:-Math.PI/2,T.add(ut)});const _t=new Yt(1.85,.72),Rt=new M(_t,this.glassMat);Rt.position.set(0,1.92,-1.39),T.add(Rt);const yt=new wt;yt.position.set(0,2.65,-.85);const Mt=new Yt(2.15,.85),D=new k({map:r,roughness:.4}),nt=new M(Mt,D);nt.position.set(0,0,-.55),yt.add(nt);const tt=new Z(2.2,.15,1.4),mt=new M(tt,this.redPaint);mt.position.set(0,.45,.1),mt.castShadow=!0,yt.add(mt);const st=new Z(2.24,.18,.08),Ft=new M(st,this.yellowPaint);Ft.position.set(0,.38,-.58),yt.add(Ft),T.add(yt);const Et=new wt;Et.position.set(0,1.6,1.6);const R=new Z(2.2,.12,3.4),b=new M(R,this.woodPlankMat);b.position.set(0,-.4,0),b.receiveShadow=!0,Et.add(b);const q=new k({map:d,roughness:.45});[-1.12,1.12].forEach(S=>{const G=new Yt(3.4,1.15),et=new M(G,q);et.position.set(S,.25,0),et.rotation.y=S>0?Math.PI/2:-Math.PI/2,et.castShadow=!0,Et.add(et);const Ut=new Z(.12,.12,3.4),ut=new M(Ut,this.redPaint);ut.position.set(S,.85,0),Et.add(ut)});const pt=new Z(2.2,1.15,.1),ht=new M(pt,this.redPaint);ht.position.set(0,.25,-1.68),Et.add(ht);const ct=new wt;ct.position.set(0,0,1.68);const Bt=new Z(2.28,1.45,.08),At=new k({color:4886754,roughness:.45}),It=new M(Bt,At);It.position.set(0,.08,0),It.castShadow=!0,ct.add(It);const Gt=new Yt(2.28,1.45),Nt=new k({map:E,roughness:.35,metalness:.15}),lt=new M(Gt,Nt);lt.position.set(0,.08,.045),ct.add(lt),[-1,1].forEach(S=>{const G=new vc;G.moveTo(0,0),G.lineTo(S*.18,.28),G.lineTo(0,.28),G.closePath();const et={depth:.08,bevelEnabled:!1},Ut=new Yo(G,et),ut=new k({color:1516884,roughness:.4}),Pt=new M(Ut,ut);Pt.position.set(S*1.14,.68,-.04),ct.add(Pt)}),[-.78,.78].forEach((S,G)=>{const et=G===0,Ut=new M(new Z(.42,.16,.05),this.chassisMat);Ut.position.set(S,-.42,.08),ct.add(Ut);const ut=new M(new Z(.12,.12,.03),new k({color:16096779,emissive:14251782,emissiveIntensity:.3}));ut.position.set(et?S-.13:S+.13,-.42,.1),ct.add(ut);const Pt=new M(new Z(.12,.12,.03),this.taillightMat);Pt.position.set(S,-.42,.1),ct.add(Pt),this.brakeLights.push(Pt);const Xt=new M(new Z(.12,.12,.03),new k({color:16317180,roughness:.3}));Xt.position.set(et?S+.13:S-.13,-.42,.1),ct.add(Xt)}),[-.85,.85].forEach(S=>{const G=new M(new Z(.42,.44,.03),this.tireMat);G.position.set(S,-.8,.06),ct.add(G)}),Et.add(ct),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((S,G)=>{const et=this.createBedCow(S.mat,S.scale);et.position.set(S.x,.35,S.z),et.rotation.y=S.rotY,Et.add(et),this.cows.push({group:et,head:et.userData.head,baseRotX:et.userData.head.rotation.x,seed:G*1.5})}),T.add(Et);const qt=this.createTruckWheel(.48,.26,!1);qt.position.set(0,.42,.4),qt.rotation.x=Math.PI/2,T.add(qt);const bt=new dt(.08,.08,.6,8);bt.rotateZ(Math.PI/2);const gt=new M(bt,this.chassisMat);gt.position.set(1.05,.48,-.8),T.add(gt);const Tt=new Me(.22,1.2,12);Tt.rotateZ(-Math.PI/2);const Ot=new re({color:16755200,transparent:!0,opacity:0}),Ht=new M(Tt,Ot);Ht.position.set(1.65,.48,-.8),T.add(Ht),this.exhaustFires.push(Ht),this.group.add(T);const te=.48,kt=.52,xt=.32;[-1.02,1.02].forEach(S=>{const G=this.createTruckWheelAssembly(kt,xt,S>0,!1);G.position.set(S,te,-1.95),this.group.add(G),this.wheels.push(G.userData.spinner),this.frontWheels.push(G)}),[-1.02,1.02].forEach(S=>{const G=this.createTruckWheelAssembly(kt,xt,S>0,!0);G.position.set(S,te,1.85),this.group.add(G),this.wheels.push(G.userData.spinner)})}createBedCow(t,e=1){const n=new wt;n.scale.set(e,e,e);const i=new Z(.85,.85,1.35),o=new M(i,t);o.position.set(0,.45,0),o.castShadow=!0,n.add(o);const a=new Me(.24,.38,8),r=new M(a,t);r.position.set(0,.95,-.32),r.rotation.x=-.2,n.add(r);const c=new wt;c.position.set(0,.75,-.6),n.userData.head=c;const h=new Z(.42,.46,.62),d=new M(h,t);d.position.set(0,.22,-.35),c.add(d);const u=new Z(.32,.25,.25),l=new M(u,this.snoutMat);return l.position.set(0,.12,-.68),c.add(l),[-.18,.18].forEach(f=>{const _=new Me(.05,.3,6),v=new M(_,this.hornMat);v.position.set(f,.46,-.28),v.rotation.z=f>0?-.38:.38,v.rotation.x=.25,c.add(v);const m=new Z(.18,.07,.08),p=new M(m,t);p.position.set(f>0?.26:-.26,.32,-.25),p.rotation.z=f>0?-.35:.35,c.add(p)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const o=new wt,a=new wt;if(o.userData.spinner=a,o.add(a),i){const r=this.createTruckWheel(t,e*.75,n);r.position.x=n?.08:-.08,a.add(r);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,a.add(c)}else{const r=this.createTruckWheel(t,e,n);a.add(r)}return o}createTruckWheel(t,e,n){const i=new wt,o=new dt(t,t,e,24);o.rotateZ(Math.PI/2);const a=new M(o,this.tireMat);i.add(a);const r=new dt(t*.65,t*.65,e+.02,18);r.rotateZ(Math.PI/2);const c=new M(r,this.rimMat);i.add(c);const h=new dt(t*.28,t*.28,e+.05,12);h.rotateZ(Math.PI/2);const d=new M(h,this.chassisMat);return i.add(d),i}update(t,e,n,i,o,a){const r=t*1e3/3600,c=2*Math.PI*.52,h=r/c*(2*Math.PI)*a;this.wheelRotation-=h,this.wheels.forEach(p=>{p.rotation.x=this.wheelRotation});const d=n-this.group.position.x,u=-Math.max(-.35,Math.min(Wt.STEERING.WHEEL_TURN_ANGLE,d*.35));this.frontWheels.forEach(p=>{p.rotation.y+=(u-p.rotation.y)*Math.min(1,a*12)});const l=Math.max(-.065,Math.min(.065,d*.065));this.currentRoll+=(l-this.currentRoll)*Math.min(1,a*10),this.bodyGroup.rotation.z=this.currentRoll;const f=Math.max(-.05,Math.min(.05,d*.05));this.currentYaw+=(f-this.currentYaw)*Math.min(1,a*10),this.bodyGroup.rotation.y=this.currentYaw;let _=0;i?_=.045:o&&(_=-.035),this.currentPitch+=(_-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const v=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(p=>{p.material=v}),this.exhaustFires.forEach(p=>{o?(p.material.opacity=.95,p.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),p.material.color.setHex(Math.random()>.4?16759552:16729088)):p.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(p=>{p.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(p=>{p.scale.set(1,1,1)});const m=performance.now()*.001;this.cows.forEach(p=>{const x=Math.sin(m*6.5+p.seed)*.08+(o?Math.sin(m*14+p.seed)*.05:0);p.head.rotation.x=p.baseRotX+x,p.head.rotation.y=Math.sin(m*2.2+p.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.45,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class L0{constructor(){this.group=new wt,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new wt,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new F(1.5,2.1,3.2),this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new wt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=640;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,360);n.addColorStop(0,"#7dd3fc"),n.addColorStop(1,"#e0f2fe"),e.fillStyle=n,e.fillRect(0,0,1024,640);const i=(A,N,j)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(A,N,38*j,0,Math.PI*2),e.arc(A+42*j,N-14*j,48*j,0,Math.PI*2),e.arc(A+95*j,N-8*j,42*j,0,Math.PI*2),e.arc(A+135*j,N+8*j,32*j,0,Math.PI*2),e.fill()};i(80,120,1.1),i(720,100,.95);const o=512,a=270;for(let A=-Math.PI;A<=0;A+=Math.PI/18)e.beginPath(),e.moveTo(o,a),e.lineTo(o+Math.cos(A)*380,a+Math.sin(A)*380),e.lineTo(o+Math.cos(A+Math.PI/36)*380,a+Math.sin(A+Math.PI/36)*380),e.closePath(),e.fillStyle="rgba(245, 158, 11, 0.45)",e.fill();e.beginPath(),e.arc(o,a,78,Math.PI,0),e.fillStyle="#f59e0b",e.fill(),e.beginPath(),e.arc(o,a,52,Math.PI,0),e.fillStyle="#fde047",e.fill();const r=e.createLinearGradient(0,270,0,520);r.addColorStop(0,"#0284c7"),r.addColorStop(1,"#0369a1"),e.fillStyle=r,e.beginPath(),e.moveTo(0,270),e.lineTo(512,270),e.lineTo(470,520),e.lineTo(0,520),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=3.5;for(let A=290;A<510;A+=24)for(let j=20;j<440;j+=38*2)e.beginPath(),e.moveTo(j,A),e.quadraticCurveTo(j+38/2,A-5,j+38,A),e.stroke();e.fillStyle="#fde68a",e.beginPath(),e.moveTo(470,520),e.lineTo(512,270),e.lineTo(560,270),e.lineTo(530,520),e.closePath(),e.fill(),e.fillStyle="#16a34a",e.beginPath(),e.moveTo(520,270),e.lineTo(1024,270),e.lineTo(1024,520),e.lineTo(485,520),e.closePath(),e.fill();const c=(A,N)=>{e.strokeStyle="#854d0e",e.lineWidth=6,e.beginPath(),e.moveTo(A,N),e.quadraticCurveTo(A-15,N-60,A-25,N-110),e.stroke(),e.strokeStyle="#15803d",e.lineWidth=4;for(let j=0;j<Math.PI*2;j+=Math.PI/4)e.beginPath(),e.moveTo(A-25,N-110),e.quadraticCurveTo(A-25+Math.cos(j)*45,N-110+Math.sin(j)*40-15,A-25+Math.cos(j)*65,N-110+Math.sin(j)*40),e.stroke()};c(640,360),c(720,350),c(940,360),e.fillStyle="#fce7f3",e.fillRect(720,370,190,85),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(720,370,190,85),e.fillStyle="#dc2626",e.beginPath(),e.moveTo(705,370),e.lineTo(815,310),e.lineTo(925,370),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let A=720;A<910;A+=18)e.beginPath(),e.moveTo(A,370),e.lineTo(815,310),e.stroke();e.fillStyle="#374151",e.fillRect(785,395,35,60),e.fillRect(850,390,30,30),e.fillStyle="#f8fafc",e.fillRect(570,385,140,70),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(570,385,140,70),e.fillStyle="#2563eb",e.beginPath(),e.moveTo(555,385),e.lineTo(640,335),e.lineTo(725,385),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let A=570;A<710;A+=18)e.beginPath(),e.moveTo(A,385),e.lineTo(640,335),e.stroke();e.fillStyle="#1e3a8a",e.fillRect(620,405,30,50),e.fillStyle="#ea580c",e.fillRect(0,510,1024,45),e.fillStyle="#fde047";for(let A=20;A<1024;A+=40)e.beginPath(),e.arc(A,510,16,0,Math.PI),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2,e.stroke();e.fillStyle="#18181b",e.fillRect(0,555,1024,35);const h=["#dc2626","#ffffff","#16a34a","#fde047"];for(let A=0;A<48;A++)e.fillStyle=h[A%h.length],e.fillRect(A*22,558,14,29);const d=(A,N)=>{e.strokeStyle="#94a3b8",e.lineWidth=3,e.beginPath(),e.arc(A,N,8,0,Math.PI*2),e.stroke(),e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(A,N+8),e.bezierCurveTo(A+28,N+8,A+44,N+28,A,N+64),e.bezierCurveTo(A-44,N+28,A-28,N+8,A,N+8),e.closePath(),e.fill(),e.strokeStyle="#64748b",e.lineWidth=2.5,e.stroke(),e.fillStyle="#94a3b8",[[0,24],[-14,28],[14,28],[-8,42],[8,42],[0,52]].forEach(([j,ft])=>{e.beginPath(),e.arc(A+j,N+ft,3.2,0,Math.PI*2),e.fill()})};d(220,570),d(512,570),d(804,570);const u=new ae(t),l=document.createElement("canvas");l.width=1024,l.height=260;const f=l.getContext("2d"),_=f.createLinearGradient(0,0,0,260);_.addColorStop(0,"#f8fafc"),_.addColorStop(.5,"#e2e8f0"),_.addColorStop(1,"#94a3b8"),f.fillStyle=_,f.fillRect(0,0,1024,260),f.fillStyle="#475569";for(let A=30;A<1e3;A+=45)f.beginPath(),f.arc(A,24,7,0,Math.PI*2),f.fill(),f.beginPath(),f.arc(A-2,22,2.5,0,Math.PI*2),f.fillStyle="#ffffff",f.fill(),f.fillStyle="#475569",f.beginPath(),f.arc(A,236,7,0,Math.PI*2),f.fill(),f.beginPath(),f.arc(A-2,234,2.5,0,Math.PI*2),f.fillStyle="#ffffff",f.fill(),f.fillStyle="#475569";f.fillStyle="#f59e0b",f.strokeStyle="#dc2626",f.lineWidth=7,f.font="bold 82px sans-serif",f.textAlign="center",f.textBaseline="middle",f.strokeText("বাংলাদেশ",512,115),f.fillText("বাংলাদেশ",512,115),f.fillStyle="#16a34a",f.font="bold 78px sans-serif",f.fillText("বাংলাদেশ",512,113),f.fillStyle="#fef08a",f.font="bold 74px sans-serif",f.fillText("বাংলাদেশ",512,111);const v=["#dc2626","#16a34a","#f59e0b","#06b6d4","#ec4899"];for(let A=0;A<18;A++)f.beginPath(),f.arc(310+A*24,185,7.5,0,Math.PI*2),f.fillStyle=v[A%v.length],f.fill(),f.strokeStyle="#18181b",f.lineWidth=1.8,f.stroke();const m=(A,N)=>{f.beginPath(),f.arc(A,N,62,0,Math.PI*2),f.fillStyle="#cbd5e1",f.fill(),f.strokeStyle="#64748b",f.lineWidth=4,f.stroke(),f.beginPath(),f.arc(A,N,48,0,Math.PI*2),f.fillStyle="#dc2626",f.fill(),f.strokeStyle="#fde047",f.lineWidth=3,f.stroke(),f.fillStyle="#ffffff",f.font="bold 50px sans-serif",f.textAlign="center",f.textBaseline="middle",f.fillText("মা",A,N)};m(140,125),m(884,125);const p=new ae(l),x=document.createElement("canvas");x.width=1024,x.height=1024;const g=x.getContext("2d");g.beginPath(),g.moveTo(40,1024),g.lineTo(40,520),g.bezierCurveTo(40,60,984,60,984,520),g.lineTo(984,1024),g.closePath(),g.fillStyle="#dc2626",g.fill(),g.strokeStyle="#881337",g.lineWidth=12,g.stroke(),g.strokeStyle="#fde047",g.lineWidth=5,g.stroke(),g.fillStyle="#1d4ed8",g.fillRect(456,120,112,680),g.strokeStyle="#18181b",g.lineWidth=3,g.strokeRect(456,120,112,680),g.fillStyle="#ffffff",g.fillRect(498,120,28,680),g.beginPath(),g.arc(512,780,42,0,Math.PI*2),g.fillStyle="#dc2626",g.fill(),g.strokeStyle="#fde047",g.lineWidth=5,g.stroke(),g.fillStyle="#ffffff",g.font="bold 44px sans-serif",g.textAlign="center",g.textBaseline="middle",g.fillText("১",512,780);const w=(A,N,j,ft)=>{g.save(),g.translate(N,j),g.rotate(ft),g.font="bold 88px sans-serif",g.textAlign="center",g.textBaseline="middle",g.strokeStyle="#18181b",g.lineWidth=12,g.strokeText(A,0,0),g.fillStyle="#ffffff",g.fillText(A,0,0),g.restore()};w("মায়ের",310,240,-.22),w("দোয়া",714,240,.22);const I=(A,N)=>{g.save(),g.translate(A,500),N&&g.scale(-1,1),g.beginPath(),g.arc(70,-160,36,0,Math.PI*2),g.fillStyle="#fde047",g.fill(),g.strokeStyle="#18181b",g.lineWidth=3,g.stroke(),g.beginPath(),g.arc(70,-160,16,0,Math.PI*2),g.fillStyle="#ea580c",g.fill();for(let ft=0;ft<7;ft++){const Dt=-Math.PI/2+(ft-3)*.35;g.beginPath(),g.ellipse(80+Math.cos(Dt)*45,-50+Math.sin(Dt)*35,18,38,Dt,0,Math.PI*2),g.fillStyle="#ec4899",g.fill(),g.strokeStyle="#18181b",g.lineWidth=2.5,g.stroke()}g.beginPath(),g.arc(80,-50,24,0,Math.PI*2),g.fillStyle="#fef08a",g.fill(),g.stroke(),((ft,Dt)=>{g.fillStyle="#16a34a",g.beginPath(),g.ellipse(ft-30,Dt+20,16,32,.6,0,Math.PI*2),g.ellipse(ft+30,Dt+20,16,32,-.6,0,Math.PI*2),g.fill(),g.stroke(),g.fillStyle="#1d4ed8",g.beginPath(),g.arc(ft,Dt,55,0,Math.PI*2),g.fill(),g.strokeStyle="#18181b",g.lineWidth=3,g.stroke(),g.strokeStyle="#38bdf8",g.lineWidth=4,g.beginPath(),g.arc(ft,Dt,36,.4,Math.PI*1.6),g.stroke(),g.beginPath(),g.arc(ft,Dt,20,Math.PI,Math.PI*2.2),g.stroke(),g.fillStyle="#ffffff",g.beginPath(),g.arc(ft,Dt,10,0,Math.PI*2),g.fill()})(85,110),g.restore()};I(260,!1),I(764,!0);const C=new ae(x),L=document.createElement("canvas");L.width=512,L.height=128;const B=L.getContext("2d");B.fillStyle="#ffffff",B.fillRect(0,0,512,128),B.fillStyle="#dc2626";for(let A=-128;A<640;A+=36)B.beginPath(),B.moveTo(A,0),B.lineTo(A+18,0),B.lineTo(A+18+128,128),B.lineTo(A+128,128),B.closePath(),B.fill();const y=new ae(L),E=document.createElement("canvas");E.width=1024,E.height=1024;const T=E.getContext("2d");T.fillStyle="#f59e0b",T.fillRect(0,0,1024,1024),T.strokeStyle="rgba(234, 88, 12, 0.18)",T.lineWidth=3;for(let A=-1024;A<2048;A+=64)T.beginPath(),T.moveTo(A,0),T.lineTo(A+1024,1024),T.stroke(),T.beginPath(),T.moveTo(A,1024),T.lineTo(A+1024,0),T.stroke();T.fillStyle="#881337",T.fillRect(0,0,1024,140),T.fillRect(0,884,1024,140),T.fillStyle="#06b6d4",T.fillRect(0,140,1024,28),T.fillRect(0,856,1024,28),T.fillStyle="#10b981",T.fillRect(0,168,1024,16),T.fillRect(0,840,1024,16);for(let A=32;A<1024;A+=64)T.beginPath(),T.arc(A,140,16,0,Math.PI),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(A,884,16,Math.PI,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke();[70,954].forEach(A=>{T.fillStyle="#ffffff",T.font="bold 44px sans-serif",T.textAlign="center",T.textBaseline="middle",T.shadowColor="rgba(0,0,0,0.8)",T.shadowBlur=8,T.fillText("মা বাবার দোয়া",512,A),T.shadowBlur=0}),((A,N)=>{T.strokeStyle="#ea580c",T.lineWidth=4;for(let j=0;j<Math.PI*2;j+=Math.PI/16)T.beginPath(),T.moveTo(A,N),T.lineTo(A+Math.cos(j)*260,N+Math.sin(j)*260),T.stroke();for(let j=0;j<16;j++){const ft=j*Math.PI/8,Dt=A+Math.cos(ft)*175,zt=N+Math.sin(ft)*175;T.beginPath(),T.ellipse(Dt,zt,42,65,ft+Math.PI/2,0,Math.PI*2),T.fillStyle=j%2===0?"#dc2626":"#0284c7",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke()}for(let j=0;j<12;j++){const ft=j*Math.PI/6,Dt=A+Math.cos(ft)*115,zt=N+Math.sin(ft)*115;T.beginPath(),T.ellipse(Dt,zt,34,52,ft+Math.PI/2,0,Math.PI*2),T.fillStyle=j%2===0?"#ec4899":"#10b981",T.fill(),T.strokeStyle="#18181b",T.lineWidth=3.5,T.stroke()}T.beginPath(),T.arc(A,N,62,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(A,N,32,0,Math.PI*2),T.fillStyle="#b91c1c",T.fill(),[-1,1].forEach(j=>{T.beginPath(),T.moveTo(A+j*160,N-60),T.bezierCurveTo(A+j*320,N-140,A+j*420,N-40,A+j*340,N+50),T.bezierCurveTo(A+j*280,N+120,A+j*200,N+60,A+j*180,N),T.fillStyle="#0d9488",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(A+j*320,N-30,28,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.beginPath(),T.arc(A+j*320,N-30,16,0,Math.PI*2),T.fillStyle="#1e3a8a",T.fill()})})(512,512);const it=(A,N)=>{const j=["#dc2626","#ec4899","#f59e0b","#10b981"];for(let ft=0;ft<8;ft++){const Dt=ft*Math.PI/4,zt=A+Math.cos(Dt)*48,Zt=N+Math.sin(Dt)*48;T.beginPath(),T.arc(zt,Zt,22,0,Math.PI*2),T.fillStyle=j[ft%j.length],T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke()}T.beginPath(),T.arc(A,N,26,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(A,N,12,0,Math.PI*2),T.fillStyle="#991b1b",T.fill()};[120,904].forEach(A=>{it(A,320),it(A,704)});const O=new ae(E),z=document.createElement("canvas");z.width=256,z.height=256;const H=z.getContext("2d");H.fillStyle="#b91c1c",H.fillRect(0,0,256,256),H.strokeStyle="#fde047",H.lineWidth=3;for(let A=0;A<256;A+=32)H.beginPath(),H.moveTo(A,0),H.lineTo(A+32,256),H.stroke(),H.beginPath(),H.moveTo(256-A,0),H.lineTo(256-A-32,256),H.stroke();const Q=new ae(z),V=document.createElement("canvas");V.width=512,V.height=256;const K=V.getContext("2d");K.fillStyle="#f59e0b",K.fillRect(0,0,512,256),K.fillStyle="#ea580c",K.beginPath(),K.arc(256,105,45,0,Math.PI*2),K.fill();for(let A=0;A<Math.PI*2;A+=Math.PI/8)K.fillStyle="#dc2626",K.beginPath(),K.arc(256+Math.cos(A)*62,105+Math.sin(A)*62,14,0,Math.PI*2),K.fill();K.fillStyle="#fde047",K.beginPath(),K.arc(256,105,26,0,Math.PI*2),K.fill(),K.fillStyle="#0d9488",K.fillRect(0,185,512,71),K.strokeStyle="#fde047",K.lineWidth=5;for(let A=-20;A<=530;A+=32)K.beginPath(),K.moveTo(A,185),K.lineTo(A+32,256),K.stroke(),K.beginPath(),K.moveTo(A+32,185),K.lineTo(A,256),K.stroke();const ot=new ae(V),J=new k({color:14427686,metalness:.6,roughness:.3}),rt=new k({color:15658734,metalness:.9,roughness:.15}),X=new k({color:2040865,roughness:.9}),at=new k({color:165063,metalness:.5,roughness:.4}),St=new k({color:1409085,roughness:.6}),vt=new k({map:u,roughness:.4}),$=new k({map:p,roughness:.35,metalness:.1}),_t=new k({map:C,roughness:.6,transparent:!0,side:we}),Rt=new k({map:y,roughness:.45,metalness:.1}),yt=new k({map:ot,roughness:.5,side:we}),Mt=new k({map:O,roughness:.7,side:we}),D=new k({map:Q,roughness:.6}),nt=new wt,tt=new dt(.045,.045,1.8,12);tt.rotateX(Math.PI/2);const mt=new M(tt,J);mt.position.set(0,.65,.1),nt.add(mt);const st=new dt(.04,.04,.95,12);st.rotateX(-.18);const Ft=new M(st,J);Ft.position.set(0,.95,-.9),nt.add(Ft),[-.1,.1].forEach(A=>{const N=new dt(.025,.02,.7,8);N.rotateX(.15);const j=new M(N,rt);j.position.set(A,.48,-1.02),nt.add(j)});const Et=new dt(.025,.025,.75,12);Et.rotateZ(Math.PI/2);const R=new M(Et,rt);R.position.set(0,1.35,-.85),nt.add(R),[-.38,.38].forEach(A=>{const N=new dt(.032,.032,.14,12);N.rotateZ(Math.PI/2);const j=new M(N,X);j.position.set(A,1.35,-.85),nt.add(j)});const b=new Vt(.09,14,14);b.scale(1,1,.7);const q=new M(b,new re({color:16777215}));q.position.set(0,1.05,-1.08),nt.add(q),this.headlights.push(q);const pt=new Vt(.05,12,12);this.bellMesh=new M(pt,rt),this.bellMesh.position.set(-.24,1.4,-.85),nt.add(this.bellMesh);const ht=new Z(.26,.08,.32),ct=new M(ht,X);ct.position.set(0,1.08,-.15),nt.add(ct),[-.08,.08].forEach(A=>{const N=new dt(.02,.02,.12,8),j=new M(N,rt);j.position.set(A,.98,-.15),nt.add(j)});const Bt=new dt(.06,.06,.28,12);Bt.rotateZ(Math.PI/2);const At=new M(Bt,rt);At.position.set(0,.52,-.15),nt.add(At),this.bodyGroup.add(nt),this.frontWheel=this.createRickshawWheel(.42,J,rt,X),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const It=new dt(.46,.46,.12,16,1,!0,0,Math.PI*.8);It.rotateZ(Math.PI/2);const Gt=new M(It,at);Gt.position.set(0,.44,-1.05),this.bodyGroup.add(Gt),[-.78,.78].forEach(A=>{const N=this.createRickshawWheel(.48,J,rt,X);N.position.set(A,.48,.95),this.bodyGroup.add(N),this.wheels.push(N);const j=new dt(.53,.53,.16,20,1,!0,0,Math.PI);j.rotateZ(Math.PI/2);const ft=new M(j,Rt);ft.position.set(A,.48,.95),this.bodyGroup.add(ft)});const Nt=new wt,lt=new Z(1.25,.08,1.25),Kt=new M(lt,St);Kt.position.set(0,.65,.75),Nt.add(Kt);const qt=new Z(.9,.05,.5),bt=new M(qt,St);bt.position.set(0,.48,.35),Nt.add(bt);const gt=new Z(1.2,.38,.58),Tt=new M(gt,St);Tt.position.set(0,.86,.88),Nt.add(Tt),[-.62,.62].forEach((A,N)=>{const j=new Yt(1.15,.52),ft=new M(j,yt);ft.position.set(A,.96,.75),ft.rotation.y=N===0?-Math.PI/2:Math.PI/2,Nt.add(ft)});const Ot=new Z(1.18,.14,.56),Ht=new M(Ot,D);Ht.position.set(0,1.08,.88),Nt.add(Ht);const te=new Z(1.16,.22,.1),kt=new M(te,D);kt.position.set(0,1.15,1.08),Nt.add(kt),[-.58,.58].forEach(A=>{const N=new Z(.08,.28,.6),j=new M(N,at);j.position.set(A,1.22,.88),Nt.add(j)});const xt=new Yt(1.06,.54),S=new M(xt,vt);S.position.set(0,.66,1.18),S.rotation.y=Math.PI,Nt.add(S);const G=new Yt(1.08,.19),et=new M(G,$);et.position.set(0,.96,1.185),et.rotation.y=Math.PI,Nt.add(et);const Ut=new Yt(1.22,.82),ut=new M(Ut,_t);ut.position.set(0,1.5,1.11),ut.rotation.y=Math.PI,Nt.add(ut),[-.78,.78].forEach(A=>{const N=new M(new dt(.055,.055,.035,12),rt);N.rotateX(Math.PI/2),N.position.set(A,.62,1.16),Nt.add(N);const j=new Vt(.048,12,12),ft=new M(j,new re({color:15680580}));ft.position.set(A,.62,1.18),Nt.add(ft),this.brakeLights.push(ft)});const Pt=new dt(.7,.7,.96,24,1,!0,-Math.PI/2,Math.PI);Pt.rotateX(-Math.PI/2);const Xt=new M(Pt,Mt);Xt.position.set(0,1.5,.62),Nt.add(Xt);const oe=new nn(.7,.022,8,24,Math.PI),se=new M(oe,J);se.position.set(0,1.5,.14),Nt.add(se);for(let A=0;A<=14;A++){const N=A*Math.PI/14,j=Math.cos(N)*.7,ft=1.5+Math.sin(N)*.7,Dt=new M(new Vt(.022,6,6),new k({color:14427686,roughness:.8}));Dt.position.set(j,ft-.02,.14),Nt.add(Dt)}const Jt=new nn(.7,.025,8,24,Math.PI),fe=new M(Jt,J);fe.position.set(0,1.5,1.1),Nt.add(fe);for(let A=0;A<=14;A++){const N=A*Math.PI/14,j=Math.cos(N)*.7,ft=1.5+Math.sin(N)*.7,Dt=new M(new Vt(.022,6,6),new k({color:14427686,roughness:.8}));Dt.position.set(j,ft-.02,1.1),Nt.add(Dt)}const be=new dt(.7,.7,.12,24,1,!0,-Math.PI/2,Math.PI);be.rotateX(-Math.PI/2);const sn=new M(be,Mt);sn.position.set(0,1.5,1.04),Nt.add(sn),[-.7,.7].forEach((A,N)=>{const j=new Yt(.82,.36),ft=new M(j,Mt);ft.position.set(A,1.34,.65),ft.rotation.y=N===0?-Math.PI/2:Math.PI/2,Nt.add(ft);const Dt=new M(new dt(.012,.012,.78,8),rt);Dt.position.set(A+(N===0?-.015:.015),1.34,.65),Dt.rotation.x=.45,Nt.add(Dt);const zt=new M(new dt(.012,.012,.78,8),rt);zt.position.set(A+(N===0?-.015:.015),1.34,.65),zt.rotation.x=-.45,Nt.add(zt);const Zt=new M(new Vt(.022,8,8),J);Zt.position.set(A+(N===0?-.025:.025),1.34,.65),Nt.add(Zt)}),[-.64,.64].forEach(A=>{const N=new dt(.016,.016,1.15,8);N.rotateX(.42);const j=new M(N,J);j.position.set(A,1.4,.6),Nt.add(j)}),this.bodyGroup.add(Nt);const ze=new wt,hn=new k({color:165063,roughness:.8}),wn=new k({color:9262372,roughness:.7}),on=new k({color:1409085,roughness:.9}),Ke=new Z(.36,.48,.22),rn=new M(Ke,hn);rn.position.set(0,1.42,-.25),rn.rotation.x=.22,ze.add(rn);const $n=new Vt(.12,14,14),Dn=new M($n,wn);Dn.position.set(0,1.74,-.32),ze.add(Dn);const Un=new nn(.11,.035,8,16);Un.rotateX(Math.PI/2);const P=new M(Un,new k({color:14427686}));P.position.set(0,1.68,-.32),ze.add(P),[-.18,.18].forEach(A=>{const N=new dt(.04,.035,.52,8);N.rotateX(.75);const j=new M(N,wn);j.position.set(A,1.42,-.52),ze.add(j)});const W=new Z(.38,.44,.32),Y=new M(W,on);Y.position.set(0,1.05,-.18),ze.add(Y),this.bodyGroup.add(ze),this.buildCuteRomanticCouple(),[-.32,.32].forEach(A=>{const N=new Me(.12,.65,8);N.rotateX(-Math.PI/2);const j=new re({color:16759552,transparent:!0,opacity:0}),ft=new M(N,j);ft.position.set(A,.58,1.25),this.bodyGroup.add(ft),this.exhaustFires.push(ft)})}createRickshawWheel(t,e,n,i){const o=new wt,a=new nn(t,.038,14,36);a.rotateY(Math.PI/2);const r=new M(a,i);o.add(r);const c=new nn(t*.92,.02,10,36);c.rotateY(Math.PI/2);const h=new M(c,n);o.add(h);const d=new dt(.06,.06,.14,14);d.rotateZ(Math.PI/2);const u=new M(d,e);o.add(u);for(let l=0;l<14;l++){const f=l*Math.PI/7,_=new dt(.005,.005,t*1.84,4);_.rotateX(f);const v=new M(_,n);o.add(v)}return o}buildCuteRomanticCouple(){this.coupleGroup=new wt,this.coupleGroup.position.set(0,0,0);const t=new k({color:16106390,roughness:.6}),e=new k({color:1841431,roughness:.5}),n=new k({color:986638,roughness:.4}),i=new k({color:15680580,roughness:.7}),o=new k({color:1976635,roughness:.8}),a=new k({color:15485081,roughness:.6}),r=new k({color:16638023,roughness:.7}),c=new k({color:16777215,roughness:.8}),h=new wt;h.position.set(-.25,1.18,.82);const d=new Z(.32,.42,.24),u=new M(d,i);u.position.set(0,.22,0),u.rotation.y=.16,u.rotation.z=-.06,h.add(u);const l=new Vt(.12,14,14),f=new M(l,t);f.position.set(.02,.52,.02),f.rotation.y=.26,f.rotation.z=-.08,h.add(f);const _=new Vt(.13,14,14);_.scale(1.02,1.05,1.02);const v=new M(_,e);v.position.set(.02,.55,.01),h.add(v);const m=new Z(.28,.18,.48),p=new M(m,o);p.position.set(0,-.05,-.16),h.add(p);const x=new dt(.04,.035,.38,8);x.rotateZ(.25);const g=new M(x,i);g.position.set(-.22,.18,0),h.add(g);const w=new dt(.04,.035,.34,8);w.rotateZ(-Math.PI/4),w.rotateX(-.18);const I=new M(w,i);I.position.set(.18,.14,-.07),h.add(I),this.coupleGroup.add(h);const C=new wt;C.position.set(.25,1.18,.82);const L=new Z(.28,.38,.22),B=new M(L,a);B.position.set(0,.2,0),B.rotation.y=-.18,B.rotation.z=.08,C.add(B);const y=new Z(.32,.35,.24),E=new M(y,r);E.position.set(0,.22,.02),C.add(E);const T=new Vt(.11,14,14),U=new M(T,t);U.position.set(-.02,.48,.02),U.rotation.y=-.3,U.rotation.z=.1,C.add(U);const it=new Vt(.12,14,14);it.scale(1.04,1.06,1.08);const O=new M(it,n);O.position.set(-.02,.51,0),C.add(O);const z=new dt(.04,.02,.32,8);z.rotateX(-.4);const H=new M(z,n);H.position.set(-.01,.38,.15),C.add(H);const Q=new Z(.26,.16,.46),V=new M(Q,c);V.position.set(0,-.05,-.16),C.add(V);const K=new dt(.035,.03,.35,8);K.rotateZ(-.25),K.rotateX(-.25);const ot=new M(K,a);ot.position.set(.2,.16,-.05),C.add(ot);const J=new wt,rt=new dt(.007,.007,.32,6),X=new k({color:1409085,roughness:.8}),at=new M(rt,X);at.position.set(0,.14,0),J.add(at);const St=new Z(.07,.012,.035),vt=new M(St,X);vt.position.set(.035,.12,0),vt.rotation.z=.3,J.add(vt);const $=new M(St,X);$.position.set(-.035,.18,0),$.rotation.z=-.3,J.add($);const _t=new k({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Rt=new M(new qo(.055,1),_t);Rt.position.set(0,.3,0),Rt.scale.set(1.1,1.25,1.1),J.add(Rt);const yt=new M(new Vt(.038,8,8),new k({color:10033947,roughness:.3}));yt.position.set(0,.32,0),J.add(yt),J.position.set(.22,.22,-.15),J.rotation.x=-.35,J.rotation.z=-.22,C.add(J);const Mt=new dt(.035,.03,.32,8);Mt.rotateZ(Math.PI/4),Mt.rotateX(-.18);const D=new M(Mt,a);D.position.set(-.17,.14,-.07),C.add(D),this.coupleGroup.add(C);const nt=new wt;nt.position.set(0,1.28,.74);const tt=new M(new Vt(.045,10,10),t);tt.scale.set(1.3,.9,1.1),tt.position.set(-.02,0,0),nt.add(tt);const mt=new M(new Vt(.042,10,10),t);mt.scale.set(1.2,.85,1.05),mt.position.set(.02,.01,.01),nt.add(mt),this.coupleGroup.add(nt),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,o,a){const c=t*1e3/3600/.42*a;this.wheelRotation-=c,this.wheels.forEach(m=>{m.rotation.x=this.wheelRotation});const h=n-e,d=-h*.12;this.currentRoll+=(d-this.currentRoll)*Math.min(1,a*7),this.bodyGroup.rotation.z=this.currentRoll;const u=-h*.08;this.currentYaw+=(u-this.currentYaw)*Math.min(1,a*6),this.bodyGroup.rotation.y=this.currentYaw;let l=0;i?l=.04:o&&(l=-.05),this.currentPitch+=(l-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const f=performance.now()*.001,_=Math.min(1,t/80),v=Math.sin(f*8.5)*.025*_;this.coupleGroup.position.y=v,this.coupleGroup.rotation.z=Math.sin(f*4.2)*.015*_,this.exhaustFires.forEach(m=>{o?(m.material.opacity=.9,m.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):m.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(m=>m.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(m=>m.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.15,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class I0{constructor(){this.group=new wt,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new F(1.32,1.74,2.58),this.buildCNG(),this.group.scale.set(.96,.96,.96)}buildCNG(){this.bodyGroup=new wt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.fillStyle="#1c1917",e.fillRect(0,0,1024,420),e.fillStyle="rgba(255, 255, 255, 0.025)";for(let bt=0;bt<1024;bt+=4)e.fillRect(bt,0,2,420);for(let bt=0;bt<420;bt+=4)e.fillRect(0,bt,1024,2);const n=262,i=135,o=500,a=220;e.fillStyle="#09090b",e.beginPath(),e.roundRect(n-14,i-14,o+28,a+28,28),e.fill();const r=e.createLinearGradient(n,i,n,i+a);r.addColorStop(0,"#0f172a"),r.addColorStop(.4,"#1e293b"),r.addColorStop(1,"#090d16"),e.fillStyle=r,e.beginPath(),e.roundRect(n,i,o,a,20),e.fill(),e.fillStyle="#2563eb",e.beginPath(),e.roundRect(n+25,i+65,o-50,a-75,14),e.fill(),e.strokeStyle="#1d4ed8",e.lineWidth=4,e.beginPath(),e.moveTo(n+o*.5,i+65),e.lineTo(n+o*.5,i+a-10),e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.12)",e.beginPath(),e.moveTo(n+40,i+a),e.lineTo(n+160,i),e.lineTo(n+220,i),e.lineTo(n+100,i+a),e.closePath(),e.fill(),e.fillStyle="#facc15",e.fillRect(0,420,1024,105),e.fillStyle="#18181b",e.fillRect(0,416,1024,6),e.fillRect(0,523,1024,6),e.fillStyle="#15803d",e.fillRect(0,525,1024,499),e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(0,529,1024,4);const c=230,h=565,d=564,u=345;e.fillStyle="#14532d",e.beginPath(),e.roundRect(c-6,h-6,d+12,u+12,12),e.fill(),e.fillStyle="#166534",e.beginPath(),e.roundRect(c,h,d,u,8),e.fill(),e.strokeStyle="#22c55e",e.lineWidth=3,e.stroke();for(let bt=0;bt<4;bt++){const gt=h+38+bt*68;e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+28,gt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+32,gt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+32,gt+4,227,4),e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+301,gt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+305,gt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+305,gt+4,227,4)}e.fillStyle="#cbd5e1",e.beginPath(),e.roundRect(c+d*.5-28,h+u-36,56,18,4),e.fill(),e.fillStyle="#09090b",e.beginPath(),e.arc(c+d*.5,h+u-27,4,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="900 64px sans-serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.7)",e.shadowBlur=6,e.fillText("CNG",120,715),e.shadowBlur=0;const l=810,f=665,_=165,v=95;e.fillStyle="#facc15",e.beginPath(),e.roundRect(l,f,_,v,8),e.fill(),e.strokeStyle="#18181b",e.lineWidth=4,e.stroke(),e.fillStyle="#18181b",e.font="900 32px sans-serif",e.fillText("HR 26",l+_*.5,f+34),e.font="900 36px monospace",e.fillText("0123",l+_*.5,f+70),e.fillStyle="#18181b",e.fillRect(0,955,1024,69),e.fillStyle="#3f3f46",e.fillRect(0,955,1024,6);const m=new ae(t),p=document.createElement("canvas");p.width=1024,p.height=1024;const x=p.getContext("2d");x.fillStyle="#facc15",x.fillRect(0,0,1024,480),x.fillStyle="#09090b",x.beginPath(),x.roundRect(75,55,874,340,24),x.fill(),x.fillStyle="#1e293b",x.fillRect(265,75,494,300),x.fillStyle="#1e293b",x.fillRect(95,75,150,300),x.fillStyle="#1e293b",x.fillRect(779,75,150,300),x.fillStyle="#09090b",x.fillRect(245,70,20,310),x.fillRect(759,70,20,310),x.strokeStyle="#09090b",x.lineWidth=10,x.beginPath(),x.moveTo(420,370),x.lineTo(610,205),x.stroke(),x.strokeStyle="#18181b",x.lineWidth=6,x.beginPath(),x.moveTo(560,245),x.lineTo(660,160),x.stroke(),x.fillStyle="#f59e0b",x.beginPath(),x.roundRect(115,420,95,34,6),x.fill(),x.beginPath(),x.roundRect(814,420,95,34,6),x.fill(),x.fillStyle="#15803d",x.fillRect(0,480,1024,544),x.fillStyle="#18181b",x.beginPath(),x.moveTo(310,480),x.lineTo(714,480),x.lineTo(650,880),x.lineTo(374,880),x.closePath(),x.fill(),x.fillStyle="#facc15",x.beginPath(),x.roundRect(432,590,160,80,6),x.fill(),x.strokeStyle="#18181b",x.lineWidth=3,x.stroke(),x.fillStyle="#18181b",x.font="900 26px sans-serif",x.textAlign="center",x.fillText("HR 26",512,622),x.font="900 28px monospace",x.fillText("0123",512,654),x.fillStyle="#ffffff",x.font="900 52px sans-serif",x.fillText("CNG",200,680);const g=new ae(p),w=document.createElement("canvas");w.width=1024,w.height=512;const I=w.getContext("2d");I.fillStyle="#1c1917",I.fillRect(0,0,1024,210),I.fillStyle="#facc15",I.fillRect(0,210,1024,60),I.fillStyle="#18181b",I.fillRect(0,206,1024,4),I.fillRect(0,270,1024,4),I.fillStyle="#15803d",I.fillRect(0,270,1024,242),I.fillStyle="#0f172a",I.beginPath(),I.roundRect(240,75,480,310,18),I.fill(),I.fillStyle="#2563eb",I.beginPath(),I.roundRect(460,230,240,110,12),I.fill(),I.strokeStyle="#09090b",I.lineWidth=14,I.beginPath(),I.roundRect(240,75,480,310,18),I.stroke();const C=new ae(w),L=new k({color:1409085,metalness:.25,roughness:.35});new k({color:16436245,metalness:.15,roughness:.38});const B=new k({color:1841431,roughness:.85,metalness:.05}),y=new k({color:2450411,roughness:.55}),E=new k({color:1579035,roughness:.92}),T=new k({color:15857145,metalness:.45,roughness:.35}),U=new k({color:16317180,metalness:.92,roughness:.12}),it=new k({map:m,roughness:.4,metalness:.1,side:we}),O=new k({map:g,roughness:.4,metalness:.1,side:we}),z=new k({map:C,roughness:.42,metalness:.1,side:we}),H=new Z(1.24,.24,2.38),Q=new M(H,L);Q.position.set(0,.34,0),Q.receiveShadow=!0,this.bodyGroup.add(Q);const V=new Z(.85,.22,.65),K=new M(V,L);K.position.set(0,.33,-1.05),this.bodyGroup.add(K);const ot=new wt,J=new dt(.72,.72,2.12,24,1,!1,Math.PI*.15,Math.PI*.7);J.rotateZ(Math.PI/2);const rt=new M(J,B);rt.position.set(0,1.62,-.05),rt.castShadow=!0,ot.add(rt);const X=new Z(1.26,.12,.32),at=new M(X,B);at.position.set(0,1.66,-1.05),at.rotation.x=.12,ot.add(at);const St=new Z(1.26,.12,.22),vt=new M(St,B);vt.position.set(0,1.66,.98),vt.rotation.x=-.1,ot.add(vt),this.bodyGroup.add(ot),[-.63,.63].forEach((bt,gt)=>{const Tt=new M(new Yt(2.18,1.28),z);Tt.position.set(bt,1.05,-.05),Tt.rotation.y=gt===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(Tt);const Ot=new Z(.04,.32,1.15),Ht=new M(Ot,L);Ht.position.set(bt*.98,.58,-.05),this.bodyGroup.add(Ht);const te=new M(new dt(.022,.022,1.05,8),new k({color:1579035,roughness:.5}));te.position.set(bt*.96,1.18,-1),te.rotation.x=.22,this.bodyGroup.add(te);const kt=new M(new dt(.022,.022,1.12,8),new k({color:1579035,roughness:.5}));kt.position.set(bt*.96,1.12,-.15),this.bodyGroup.add(kt);const xt=new M(new dt(.022,.022,1.12,8),new k({color:1579035,roughness:.5}));xt.position.set(bt*.96,1.12,1.02),this.bodyGroup.add(xt)});const $=new wt;$.position.set(0,0,1.08);const _t=new M(new Yt(1.28,1.34),it);_t.position.set(0,1.02,.01),_t.rotation.y=0,$.add(_t),[-.54,.54].forEach(bt=>{const gt=new wt;gt.position.set(bt,.74,.035);const Tt=new M(new Z(.12,.24,.04),new k({color:1579035,roughness:.6}));gt.add(Tt);const Ot=new M(new Z(.1,.1,.025),new re({color:16096779}));Ot.position.set(0,.055,.018),gt.add(Ot);const Ht=new M(new Z(.1,.1,.025),new re({color:14427686}));Ht.position.set(0,-.055,.018),gt.add(Ht),this.brakeLights.push(Ht),$.add(gt)});const Rt=new Z(1.32,.12,.08),yt=new M(Rt,new k({color:1579035,roughness:.85}));yt.position.set(0,.32,.06),$.add(yt),[-.52,.52].forEach(bt=>{const gt=new M(new Z(.18,.22,.02),E);gt.position.set(bt,.18,.04),gt.rotation.x=.08,$.add(gt)});const Mt=new dt(.032,.032,.55,10);Mt.rotateZ(Math.PI/2);const D=new M(Mt,U);D.position.set(.22,.18,.02),$.add(D);const nt=new Me(.075,.45,10);nt.rotateX(-Math.PI/2);const tt=new re({color:440020,transparent:!0,opacity:0}),mt=new M(nt,tt);mt.position.set(.48,.18,.28),$.add(mt),this.exhaustFires.push(mt),this.bodyGroup.add($);const st=new wt;st.position.set(0,0,-1.14);const Ft=new M(new Yt(1.18,1.34),O);Ft.position.set(0,1.02,0),Ft.rotation.y=Math.PI,st.add(Ft),[-.32,.32].forEach(bt=>{const gt=new wt;gt.position.set(bt,.68,-.04);const Tt=new M(new dt(.085,.085,.04,16),U);Tt.rotateX(Math.PI/2),gt.add(Tt);const Ot=new M(new Vt(.075,12,12,0,Math.PI*2,0,Math.PI*.5),new re({color:16777215}));Ot.rotateX(Math.PI),Ot.position.z=-.015,gt.add(Ot),this.headlights.push(Ot),st.add(gt)}),this.bodyGroup.add(st),[-1,1].forEach(bt=>{const gt=new wt,Tt=(.64+.14)*bt;gt.position.set(Tt,1.15,-.72);const Ot=new dt(.012,.012,.28,8);Ot.rotateZ(bt>0?-Math.PI*.35:Math.PI*.35);const Ht=new M(Ot,new k({color:1579035}));gt.add(Ht);const te=new dt(.075,.075,.03,16);te.rotateX(Math.PI/2);const kt=new M(te,new k({color:1579035,roughness:.5}));kt.position.set(bt*.12,.08,0),gt.add(kt);const xt=new M(new Ji(.068,16),U);xt.position.set(bt*.12,.08,.018),gt.add(xt),this.bodyGroup.add(gt)});const Et=new wt,R=new M(new Z(.48,.12,.44),new k({color:1981066,roughness:.7}));R.position.set(0,.52,-.32),Et.add(R);const b=new M(new Z(.48,.42,.1),new k({color:1981066,roughness:.7}));b.position.set(0,.76,-.12),Et.add(b);const q=new M(new Z(1.16,.16,.48),y);q.position.set(0,.54,.55),Et.add(q);const pt=new M(new Z(1.16,.48,.12),y);pt.position.set(0,.84,.82),Et.add(pt);const ht=new wt;ht.position.set(0,.78,-.85);const ct=new dt(.016,.016,.62,10);ct.rotateZ(Math.PI/2);const Bt=new M(ct,U);ht.add(Bt),[-.28,.28].forEach(bt=>{const gt=new M(new dt(.024,.024,.12,8),E);gt.rotateZ(Math.PI/2),gt.position.x=bt,ht.add(gt)});const At=new M(new dt(.045,.045,.04,12),new k({color:1579035}));At.position.set(0,.04,-.04),ht.add(At),Et.add(ht),this.bodyGroup.add(Et);const It=(bt=!1)=>{const gt=new wt,Tt=new dt(.24,.24,.14,20);Tt.rotateZ(Math.PI/2);const Ot=new M(Tt,E);Ot.castShadow=!0,gt.add(Ot);const Ht=new dt(.14,.14,.145,16);Ht.rotateZ(Math.PI/2);const te=new M(Ht,T);gt.add(te);const kt=new M(new dt(.05,.05,.155,12),U);kt.rotateZ(Math.PI/2),gt.add(kt);for(let xt=0;xt<4;xt++){const S=xt/4*Math.PI*2,G=new M(new dt(.012,.012,.16,6),U);G.rotateZ(Math.PI/2),G.position.set(0,Math.sin(S)*.08,Math.cos(S)*.08),gt.add(G)}return gt},Gt=new wt;Gt.position.set(0,.24,-1.18);const Nt=It(!0);Gt.add(Nt),this.wheels.push(Nt),this.frontWheel=Gt;const lt=new M(new dt(.024,.028,.52,8),U);lt.position.set(-.1,.22,0),lt.rotation.x=-.18,Gt.add(lt);const Kt=new dt(.28,.28,.18,16,1,!1,Math.PI*.2,Math.PI*.65);Kt.rotateZ(Math.PI/2);const qt=new M(Kt,L);qt.position.set(0,.05,0),Gt.add(qt),this.bodyGroup.add(Gt),[-.56,.56].forEach(bt=>{const gt=It(!1);gt.position.set(bt,.24,.64),this.wheels.push(gt),this.bodyGroup.add(gt)})}update(t,e,n,i,o,a){const r=t*1e3/3600,c=2*Math.PI*.24,h=r/c*a*Math.PI*2;this.wheelRotation+=h,this.wheels.forEach(_=>{_.rotation.x=this.wheelRotation});const d=n-e,u=d*.045;this.currentRoll+=(u-this.currentRoll)*Math.min(1,a*9),this.bodyGroup.rotation.z=this.currentRoll,this.frontWheel&&(this.frontWheel.rotation.y=-d*.18);const l=-d*.08;this.currentYaw+=(l-this.currentYaw)*Math.min(1,a*8),this.bodyGroup.rotation.y=this.currentYaw;let f=0;i?f=.04:o&&(f=-.035),this.currentPitch+=(f-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch,this.brakeLights.forEach(_=>{_.material.color.setHex(i?16711680:14427686)}),this.exhaustFires.forEach(_=>{o?(_.material.opacity=.95,_.scale.set(1.2+Math.random()*.4,1.2+Math.random()*.5,1.2+Math.random()*.4),_.material.color.setHex(Math.random()>.4?440020:3718648)):_.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(_=>_.scale.set(1.4,1.4,1.4))):this.headlights.forEach(_=>_.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=.88,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.45,this.bodyGroup.rotation.y=.5,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class D0{constructor(){this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[]}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let _=0;_<128;_+=8)e.fillStyle="#6b7280",e.fillRect(_,0,4,128),e.fillStyle="#d1d5db",e.fillRect(_+4,0,4,128);const n=new ae(t);n.wrapS=Oe,n.wrapT=Oe,n.repeat.set(4,4),this.tinRoofMat=new k({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new k({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const o=i.getContext("2d");o.fillStyle="#c8a165",o.fillRect(0,0,128,128),o.strokeStyle="#8c6239",o.lineWidth=3;for(let _=0;_<=128;_+=16)o.beginPath(),o.moveTo(0,_),o.lineTo(128,_),o.stroke(),o.beginPath(),o.moveTo(_,0),o.lineTo(_,128),o.stroke();const a=new ae(i);a.wrapS=Oe,a.wrapT=Oe,a.repeat.set(2,2),this.bambooWallMat=new k({map:a,roughness:.85,color:13935475}),this.woodMat=new k({color:6045747,roughness:.85}),this.mudPlinthMat=new k({color:8150594,roughness:.95}),this.brickMat=new k({color:10239278,roughness:.9}),this.palmLeafMat=new k({color:3046706,roughness:.6,side:we}),this.bananaLeafMat=new k({color:4431943,roughness:.5,side:we}),this.treeCrownMat=new k({color:1793568,roughness:.85}),this.bambooTrunkMat=new k({color:6732650,roughness:.4}),this.palmTrunkMat=new k({color:7162945,roughness:.9}),this.hayMat=new k({color:13934615,roughness:.95}),this.paddyFieldMat=new k({color:3706428,roughness:.8}),this.waterMat=new k({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new k({color:10395294,roughness:.7}),this.cowWhiteMat=new k({color:16119280,roughness:.6}),this.cowBrownMat=new k({color:9262372,roughness:.65}),this.cowBlackPatchMat=new k({color:2171169,roughness:.7}),this.hornMat=new k({color:3621201,roughness:.4}),this.ropeMat=new re({color:12756553}),this.duckMat=new k({color:16777215,roughness:.5}),this.beakMat=new k({color:16750592,roughness:.4}),this.smokeMat=new re({color:16777215,transparent:!0,opacity:.35}),this.bridgeRedMat=new k({color:14427686,roughness:.55}),this.bridgeWhiteMat=new k({color:16317180,roughness:.5});const r=document.createElement("canvas");r.width=256,r.height=128;const c=r.getContext("2d");c.fillStyle="#ffffff",c.fillRect(0,0,256,128),c.fillStyle="#dc2626";const h=32;for(let _=-128;_<384;_+=h*2)c.beginPath(),c.moveTo(_,0),c.lineTo(_+h,0),c.lineTo(_+h-128,128),c.lineTo(_-128,128),c.closePath(),c.fill();const d=new ae(r);d.wrapS=Oe,d.wrapT=Oe,d.repeat.set(24,1),this.bridgeCurbMat=new k({map:d,roughness:.6}),this.pipelineMat=new k({color:9741240,metalness:.8,roughness:.25}),this.riverWaterMat=new k({color:1400437,roughness:.12,metalness:.35,transparent:!0,opacity:.92});const u=document.createElement("canvas");u.width=64,u.height=128;const l=u.getContext("2d");l.fillStyle="#dc2626",l.fillRect(0,0,64,128),l.fillStyle="#ffffff",l.fillRect(0,24,64,30),l.fillRect(0,78,64,30);const f=new ae(u);this.bollardMat=new k({map:f,roughness:.5})}createCow(t="brown"){const e=new wt;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new Z(.9,.95,1.7),o=new M(i,n);o.position.set(0,1.05,0),o.castShadow=!0,e.add(o);const a=new Me(.3,.45,8),r=new M(a,n);r.position.set(0,1.62,-.45),r.rotation.x=-.2,r.castShadow=!0,e.add(r);const c=new Z(.12,.45,.5),h=new M(c,n);h.position.set(0,.85,-.85),e.add(h);const d=new wt;d.position.set(0,1.25,-.85);const u=new Z(.45,.55,.6),l=new M(u,n);l.position.set(0,.15,-.2),l.rotation.x=.35,d.add(l);const f=new Z(.48,.52,.7),_=new M(f,n);_.position.set(0,.28,-.55),d.add(_);const v=new k({color:2236962,roughness:.8}),m=new Z(.36,.3,.3),p=new M(m,v);p.position.set(0,.18,-.92),d.add(p),[-.22,.22].forEach(z=>{const H=new Me(.06,.35,6),Q=new M(H,this.hornMat);Q.position.set(z,.56,-.48),Q.rotation.z=z>0?-.4:.4,Q.rotation.x=.3,d.add(Q);const V=new Z(.22,.08,.1),K=new M(V,n);K.position.set(z>0?.32:-.32,.38,-.45),K.rotation.z=z>0?-.35:.35,d.add(K)}),e.add(d),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(z=>{const H=new Z(.2,.75,.2),Q=new M(H,n);Q.position.set(z.x,.38,z.z),Q.castShadow=!0,e.add(Q);const V=new Z(.22,.1,.22),K=new M(V,this.hornMat);K.position.set(z.x,.05,z.z),e.add(K)});const g=new wt;g.position.set(0,1.35,.85);const w=new dt(.03,.03,.85,6);w.translate(0,-.42,0);const I=new M(w,n);g.add(I);const C=new Me(.08,.25,6);C.translate(0,-.9,0);const L=new M(C,this.hornMat);g.add(L),e.add(g);const B=new dt(.08,.1,1.2,8),y=new M(B,this.woodMat);y.position.set(.9,.6,-1.2),e.add(y);const E=[new F(0,1.2,-.8),new F(.45,.75,-1),new F(.9,.85,-1.2)],T=new Ls(E),U=new Zi(T,8,.02,4,!1),it=new M(U,this.ropeMat);e.add(it);const O={type:"cow",head:d,tail:g,seed:Math.random()*10};return this.animatedAnimals.push(O),e}createVillageHouse(t=!1){const e=new wt;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new Z(6.6,.45,5.2),o=new M(i,this.mudPlinthMat);o.position.set(0,.22,0),o.receiveShadow=!0,e.add(o);const a=new Z(5.8,2.6,3.8),r=new M(a,this.bambooWallMat);r.position.set(0,1.75,-.4),r.castShadow=!0,r.receiveShadow=!0,e.add(r);const c=new Z(.85,1.8,.08),h=new M(c,this.woodMat);h.position.set(.6,1.35,1.52),e.add(h),[-1.6,-.6].forEach(_=>{const v=new Z(.7,.8,.08),m=new M(v,this.woodMat);m.position.set(_,1.8,1.52),e.add(m)});const d=new Z(6.6,.1,2.8),u=new M(d,n);u.position.set(0,3.65,-.9),u.rotation.x=-.52,u.castShadow=!0,e.add(u);const l=new Z(6.6,.1,3.4),f=new M(l,n);return f.position.set(0,3.5,.8),f.rotation.x=.46,f.castShadow=!0,e.add(f),[-2.5,-.8,.8,2.5].forEach(_=>{const v=new dt(.08,.08,2.3,8),m=new M(v,this.woodMat);m.position.set(_,1.6,2.1),m.castShadow=!0,e.add(m)}),e}createTeaStall(){const t=new wt;t.name="cha_er_tong";const e=new Z(3.2,1,1.8),n=new M(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new Z(3.8,.08,2.8),o=new M(i,this.tinRoofMat);o.position.set(0,2.3,.2),o.rotation.x=.2,o.castShadow=!0,t.add(o),[-1.6,1.6].forEach(v=>{const m=new dt(.07,.07,2.2,6),p=new M(m,this.woodMat);p.position.set(v,1.1,1.2),t.add(p)});const a=new Z(3,.08,.45),r=new M(a,this.woodMat);r.position.set(0,.45,1.8),t.add(r),[-1.2,1.2].forEach(v=>{const m=new Z(.08,.45,.4),p=new M(m,this.woodMat);p.position.set(v,.22,1.8),t.add(p)});const c=new k({color:13421772,metalness:.9,roughness:.2}),h=new dt(.18,.22,.35,10),d=new M(h,c);d.position.set(-.6,1.18,.2),t.add(d);const u=new Zo({color:16777215,transmission:.7,roughness:.1}),l=new dt(.12,.12,.28,8),f=new M(l,u);f.position.set(.6,1.15,.1),t.add(f);const _=new wt;_.position.set(-.6,1.45,.2),t.add(_);for(let v=0;v<4;v++){const m=new Vt(.08,6,6),p=new M(m,this.smokeMat);p.position.y=v*.25,_.add(p)}return this.smokeEmitters.push(_),t}createHaystack(){const t=new wt;t.name="khorer_gada";const e=new dt(1.6,1.9,1.4,12),n=new M(e,this.hayMat);n.position.y=.7,n.castShadow=!0,t.add(n);const i=new dt(1,1.6,1.2,12),o=new M(i,this.hayMat);o.position.y=2,o.castShadow=!0,t.add(o);const a=new Me(1,1.5,12),r=new M(a,this.hayMat);r.position.y=3.35,r.castShadow=!0,t.add(r);const c=new dt(.04,.05,4.8,6),h=new M(c,this.bambooTrunkMat);return h.position.y=2.4,t.add(h),t}createJatriChawni(t=1){const e=new wt;e.name="jatri_chawni";const n=new Z(5,.35,2.3),i=new M(n,this.concreteMat);i.position.set(0,.175,0),i.receiveShadow=!0,e.add(i);const o=new Z(5.2,.14,.22),a=new M(o,this.brickMat);a.position.set(0,.07,-1.1),e.add(a);const r=new Z(4.8,2.5,.18),c=new M(r,this.brickMat);c.position.set(0,1.45,1.02),c.castShadow=!0,e.add(c);const h=new Yt(4.6,2.3),d=new M(h,this.culvertRailingMaterial);d.position.set(0,1.45,.92),e.add(d),[[-2.1,-.92],[2.1,-.92],[-2.1,.92],[2.1,.92]].forEach(([W,Y])=>{const A=new dt(.08,.09,2.6,12),N=new M(A,this.culvertRailingMaterial);N.position.set(W,1.45,Y),N.castShadow=!0,e.add(N);const j=new dt(.12,.12,.35,12),ft=new M(j,new k({color:1409085}));ft.position.set(W,.45,Y),e.add(ft)});const l=new dt(2.4,2.4,5.2,24,1,!0,Math.PI*.2,Math.PI*.6);l.rotateZ(Math.PI/2);const f=new M(l,this.tinRoofMat);f.position.set(0,2.75,.05),f.castShadow=!0,e.add(f),[-1.8,0,1.8].forEach(W=>{const Y=new Z(.06,.06,2.1),A=new M(Y,new k({color:3359061}));A.position.set(W,2.55,0),e.add(A)});const _=new mi(16772565,3.5,16);_.position.set(0,2.45,.25),e.add(_);const v=new dt(.14,.18,.28,8,1,!0),m=new M(v,new k({color:1976635,wireframe:!0}));m.position.set(0,2.48,.25),e.add(m);const p=new M(new Vt(.1,12,12),new re({color:16772565}));p.position.set(0,2.48,.25),e.add(p);const x=document.createElement("canvas");x.width=1024,x.height=256;const g=x.getContext("2d");g.fillStyle="#15803d",g.fillRect(0,0,1024,256),g.strokeStyle="#f59e0b",g.lineWidth=14,g.strokeRect(10,10,1004,236),g.strokeStyle="#fde047",g.lineWidth=4,g.strokeRect(24,24,976,208);const w=(W,Y)=>{g.fillStyle="#fde047",g.beginPath(),g.roundRect(W,Y,76,44,8),g.fill(),g.fillStyle="#0284c7",g.fillRect(W+8,Y+6,20,18),g.fillRect(W+34,Y+6,20,18),g.fillRect(W+58,Y+6,12,18),g.fillStyle="#18181b",g.beginPath(),g.arc(W+20,Y+44,9,0,Math.PI*2),g.arc(W+56,Y+44,9,0,Math.PI*2),g.fill()};w(42,105),w(906,105),g.fillStyle="#ffffff",g.font="900 86px sans-serif",g.textAlign="center",g.textBaseline="middle",g.shadowColor="rgba(0,0,0,0.9)",g.shadowBlur=12,g.fillText("BUS STOP",512,85),g.fillStyle="#fde047",g.font="bold 54px sans-serif",g.shadowColor="rgba(0,0,0,0.8)",g.shadowBlur=8,g.fillText("বাস স্টপ  |  যাত্রী ছাউনি",512,185),g.shadowBlur=0;const I=new ae(x),C=new wt;C.position.set(0,2.65,-1.02);const L=new Z(4.24,.84,.07),B=new k({color:1332013,roughness:.5}),y=new M(L,B);C.add(y);const E=new k({map:I,roughness:.35,emissive:1409085,emissiveIntensity:.15}),T=new Yt(4.18,.78);T.rotateY(Math.PI);const U=new M(T,E);U.position.set(0,0,-.038),C.add(U);const it=new Yt(4.18,.78),O=new M(it,E);O.position.set(0,0,.038),C.add(O),e.add(C);const z=new wt,H=t>0?-2.25:2.25;z.position.set(H,0,-1.15);const Q=new M(new dt(.18,.22,.3,12),this.concreteMat);Q.position.set(0,.15,0),z.add(Q);const V=new k({color:3359061,metalness:.8,roughness:.2}),K=new M(new dt(.045,.045,3.1,12),V);K.position.set(0,1.55,0),z.add(K);const ot=document.createElement("canvas");ot.width=512,ot.height=512;const J=ot.getContext("2d");J.fillStyle="#0284c7",J.beginPath(),J.roundRect(16,16,480,480,48),J.fill(),J.strokeStyle="#facc15",J.lineWidth=20,J.stroke(),J.strokeStyle="#ffffff",J.lineWidth=4,J.beginPath(),J.roundRect(36,36,440,440,36),J.stroke(),J.fillStyle="#ffffff",J.beginPath(),J.roundRect(135,75,242,130,24),J.fill(),J.fillStyle="#0284c7",J.fillRect(155,95,60,50),J.fillRect(230,95,60,50),J.fillRect(305,95,52,50),J.fillStyle="#18181b",J.beginPath(),J.arc(190,205,22,0,Math.PI*2),J.arc(320,205,22,0,Math.PI*2),J.fill(),J.fillStyle="#ffffff",J.font="900 72px sans-serif",J.textAlign="center",J.textBaseline="middle",J.shadowColor="rgba(0,0,0,0.85)",J.shadowBlur=8,J.fillText("BUS STOP",256,310),J.fillStyle="#fde047",J.font="bold 56px sans-serif",J.fillText("বাস স্টপ",256,405),J.shadowBlur=0;const rt=new ae(ot),X=new k({map:rt,roughness:.35,emissive:165063,emissiveIntensity:.12}),at=new wt;at.position.set(0,2.7,0);const St=new M(new Z(.96,.96,.06),new k({color:223649,roughness:.4}));at.add(St);const vt=new Yt(.92,.92);vt.rotateY(Math.PI);const $=new M(vt,X);$.position.set(0,0,-.032),at.add($);const _t=new Yt(.92,.92),Rt=new M(_t,X);Rt.position.set(0,0,.032),at.add(Rt),at.rotation.y=t>0?.35:-.35,z.add(at),e.add(z);const yt=document.createElement("canvas");yt.width=512,yt.height=320;const Mt=yt.getContext("2d");Mt.fillStyle="#f8fafc",Mt.fillRect(0,0,512,320),Mt.strokeStyle="#15803d",Mt.lineWidth=14,Mt.strokeRect(8,8,496,304),Mt.strokeStyle="#dc2626",Mt.lineWidth=4,Mt.strokeRect(22,22,468,276),Mt.fillStyle="#15803d",Mt.font="bold 30px sans-serif",Mt.textAlign="center",Mt.textBaseline="middle",Mt.fillText("বাংলাদেশ সড়ক পরিবহন (BRTC)",256,55),Mt.fillStyle="#dc2626",Mt.font="900 68px sans-serif",Mt.shadowColor="rgba(0,0,0,0.3)",Mt.shadowBlur=4,Mt.fillText("BUS STOP",256,140),Mt.fillStyle="#1e293b",Mt.font="bold 50px sans-serif",Mt.shadowBlur=0,Mt.fillText("বাস স্টপ",256,220),Mt.fillStyle="#64748b",Mt.font="bold 24px sans-serif",Mt.fillText("HIGHWAY PASSENGER SHELTER",256,275);const D=new ae(yt),nt=new k({map:D,roughness:.35,emissive:16777215,emissiveIntensity:.08}),tt=new M(new Yt(1.2,.75),nt),mt=t>0?-2.12:2.12;tt.position.set(mt,1.85,0),tt.rotation.y=t>0?-Math.PI/2:Math.PI/2,e.add(tt);const st=new wt;st.position.set(0,0,0);const Ft=new Z(4.4,.12,.7),Et=new M(Ft,this.woodMat);Et.position.set(0,.65,.5),Et.castShadow=!0,st.add(Et);const R=new Z(4.4,.42,.1),b=new M(R,this.woodMat);b.position.set(0,1.12,.82),b.castShadow=!0,st.add(b),[-1.9,0,1.9].forEach(W=>{const Y=new Z(.12,.35,.58),A=new M(Y,this.concreteMat);A.position.set(W,.45,.5),st.add(A);const N=new Z(.08,.55,.08),j=new M(N,new k({color:3359061}));j.position.set(W,.95,.82),st.add(j)}),e.add(st);const q=new wt;q.scale.set(1.35,1.35,1.35),q.position.set(0,.72,.48);const pt=new k({color:16106390,roughness:.6}),ht=new k({color:959977,roughness:.7}),ct=new k({color:1976635,roughness:.8}),Bt=new k({color:1579035,roughness:.5}),At=new k({color:14362487,roughness:.6}),It=new k({color:16436245,roughness:.7}),Gt=new k({color:16777215,roughness:.8}),Nt=new k({color:986638,roughness:.4}),lt=new wt;lt.position.set(-.26,0,0);const Kt=new M(new Z(.36,.46,.24),ht);Kt.position.set(0,.25,0),Kt.rotation.y=.35,Kt.rotation.z=-.12,lt.add(Kt);const qt=new M(new Vt(.12,14,14),pt);qt.position.set(.04,.58,.02),qt.rotation.y=.45,qt.rotation.z=-.12,lt.add(qt);const bt=new M(new Vt(.13,14,14),Bt);bt.scale.set(1.02,1.05,1.02),bt.position.set(.04,.61,.01),lt.add(bt);const gt=new M(new Z(.34,.16,.44),ct);gt.position.set(0,-.02,-.15),lt.add(gt),[-.1,.1].forEach(W=>{const Y=new M(new dt(.05,.045,.38,8),ct);Y.position.set(W,-.22,-.32),lt.add(Y)});const Tt=new M(new dt(.045,.04,.34,8),ht);Tt.position.set(.18,.14,-.05),Tt.rotation.z=-Math.PI/4,Tt.rotation.x=-.18,lt.add(Tt),q.add(lt);const Ot=new wt;Ot.position.set(.26,0,0);const Ht=new M(new Z(.32,.42,.22),At);Ht.position.set(0,.23,0),Ht.rotation.y=-.32,Ht.rotation.z=.14,Ot.add(Ht);const te=new M(new Z(.34,.36,.24),It);te.position.set(0,.24,.02),Ot.add(te);const kt=new M(new Vt(.115,14,14),pt);kt.position.set(-.06,.54,.02),kt.rotation.y=-.38,kt.rotation.z=.22,Ot.add(kt);const xt=new M(new Vt(.125,14,14),Nt);xt.scale.set(1.04,1.06,1.08),xt.position.set(-.06,.57,0),Ot.add(xt);const S=new M(new dt(.04,.02,.36,8),Nt);S.position.set(-.04,.42,.16),S.rotation.x=-.35,Ot.add(S);const G=new M(new Z(.3,.15,.42),Gt);G.position.set(0,-.02,-.15),Ot.add(G),[-.08,.08].forEach(W=>{const Y=new M(new dt(.042,.038,.38,8),Gt);Y.position.set(W,-.22,-.32),Ot.add(Y)});const et=new M(new dt(.04,.035,.32,8),At);et.position.set(-.16,.14,-.05),et.rotation.z=Math.PI/4,et.rotation.x=-.18,Ot.add(et);const Ut=new wt;Ut.position.set(.22,.22,-.2),Ut.rotation.x=-.25,Ut.rotation.z=-.15;const ut=new dt(.016,.018,.38,8),Pt=new k({color:1409085,roughness:.8}),Xt=new M(ut,Pt);Ut.add(Xt);const oe=new Yt(.12,.06),se=new k({color:1483594,roughness:.6,side:we});[-1,1].forEach(W=>{const Y=new M(oe,se);Y.position.set(W*.06,-.04,0),Y.rotation.z=W*.55,Ut.add(Y)});const Jt=new Me(.07,.09,5);Jt.rotateX(Math.PI);const fe=new M(Jt,se);fe.position.set(0,.18,0),Ut.add(fe);const be=new k({color:14427686,roughness:.35,metalness:.1}),sn=new Vt(.09,14,14);sn.scale(1.15,1.35,1.15);const ze=new M(sn,be);ze.position.set(0,.26,0),Ut.add(ze);const hn=new nn(.08,.035,8,16);hn.rotateX(Math.PI/2);const wn=new M(hn,be);wn.position.set(0,.23,0),Ut.add(wn),Ot.add(Ut),q.add(Ot);const on=new M(new Vt(.065,12,12),pt);on.scale.set(1.6,.95,1.2),on.position.set(0,.1,-.06),q.add(on);const Ke=new wt;Ke.position.set(0,1.38,.05);const rn=new re({color:16723285}),$n=new M(new Vt(.075,10,10),rn);$n.position.set(-.05,.04,0),Ke.add($n);const Dn=new M(new Vt(.075,10,10),rn);Dn.position.set(.05,.04,0),Ke.add(Dn);const Un=new Me(.11,.14,12);Un.rotateZ(Math.PI);const P=new M(Un,rn);return P.position.set(0,-.04,0),Ke.add(P),q.add(Ke),e.add(q),this.animatedAnimals.push({type:"couple",mesh:q,heart:Ke,seed:Math.random()*10}),e}createCoconutTree(){const t=new wt;t.name="coconut_tree";const e=new Ls([new F(0,0,0),new F(.4,3.5,.2),new F(.9,7.5,.5),new F(1.1,10.5,.7)]),n=new Zi(e,12,.24,8,!1),i=new M(n,this.palmTrunkMat);i.castShadow=!0,t.add(i);const o=new F(1.1,10.5,.7),a=10;for(let r=0;r<a;r++){const c=r*Math.PI*2/a,h=new Yt(.8,3.4);h.translate(0,1.7,0);const d=new M(h,this.palmLeafMat);d.position.copy(o),d.rotation.y=c,d.rotation.x=.85,d.castShadow=!0,t.add(d)}for(let r=0;r<5;r++){const c=new Vt(.2,8,8),h=new M(c,this.palmLeafMat);h.position.set(o.x+(Math.random()-.5)*.4,o.y-.25,o.z+(Math.random()-.5)*.4),t.add(h)}return t}createBananaTree(){const t=new wt;t.name="banana_tree";const e=new dt(.18,.28,2.8,8),n=new M(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let o=0;o<i;o++){const a=o*Math.PI*2/i,r=new Yt(.75,2.4);r.translate(0,1.2,0);const c=new M(r,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=a,c.rotation.x=.95,c.castShadow=!0,t.add(c)}return t}createBambooGrove(){const t=new wt;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,o=new dt(.06,.08,i,6),a=new M(o,this.bambooTrunkMat);a.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),a.rotation.z=(Math.random()-.5)*.15,a.rotation.x=(Math.random()-.5)*.15,t.add(a);const r=new Vt(.8+Math.random()*.5,6,6),c=new M(r,this.palmLeafMat);c.position.set(a.position.x,i-.3,a.position.z),t.add(c)}return t}createElectricPole(){const t=new wt;t.name="electric_pole";const e=new dt(.14,.18,8.5,8),n=new M(e,this.concreteMat);n.position.y=4.25,n.castShadow=!0,t.add(n);const i=new Z(2.2,.12,.12),o=new M(i,this.concreteMat);return o.position.y=7.8,t.add(o),[-.9,0,.9].forEach(a=>{const r=new dt(.04,.05,.2,6),c=new M(r,this.tinRoofMat);c.position.set(a,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new wt;n.name="village_pond";const i=new Yt(t,e);i.rotateX(-Math.PI/2);const o=new M(i,this.waterMat);o.position.y=.05,n.add(o),this.mudPlinthMat;const a=3;for(let r=0;r<a;r++){const c=new wt;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const h=new Vt(.24,8,8);h.scale(1,.7,1.4);const d=new M(h,this.duckMat);c.add(d);const u=new Vt(.14,8,8),l=new M(u,this.duckMat);l.position.set(0,.22,-.22),c.add(l);const f=new Me(.06,.16,6);f.rotateX(-Math.PI/2);const _=new M(f,this.beakMat);_.position.set(0,.2,-.34),c.add(_),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new wt;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const o=new dt(.04,.04,t,6);o.rotateX(Math.PI/2);const a=new M(o,this.bambooTrunkMat);a.position.y=i,e.add(a)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const o=-t*.5+i*1.4,a=new dt(.05,.06,1.25,6),r=new M(a,this.woodMat);r.position.set(0,.62,o),r.castShadow=!0,e.add(r)}return e}createHighwayCafe(t=1){const e=new wt;e.name="highway_cafe";const n=new Z(6.6,.28,4.4),i=new k({color:9268835,roughness:.85}),o=new M(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const a=new Z(6.8,.14,.25),r=new M(a,this.concreteMat);r.position.set(0,.07,-2.15),e.add(r);const c=new Z(5.6,3.2,3),h=new k({color:6111287,roughness:.8}),d=new M(c,h);d.position.set(0,1.74,.6),d.castShadow=!0,e.add(d);const u=new Z(5.9,.22,3.3),l=new k({color:4073251,roughness:.6}),f=new M(u,l);f.position.set(0,3.42,.6),e.add(f);const _=new k({color:1976635,metalness:.8,roughness:.15,transparent:!0,opacity:.65}),v=new M(new Z(1.9,1.8,.1),_);v.position.set(-1.6,1.7,-.92),e.add(v);const m=new M(new Z(1.9,1.8,.1),_);m.position.set(1.6,1.7,-.92),e.add(m);const p=new M(new Z(1.2,2.3,.1),_);p.position.set(0,1.45,-.92),e.add(p);const x=new k({color:16096779,metalness:.9,roughness:.2}),g=new M(new dt(.025,.025,.7,8),x);g.position.set(.42,1.35,-.98),e.add(g);const w=new mi(16772565,3.2,9);w.position.set(0,2.2,.2),e.add(w);const I=new Z(3.6,1,.8),C=new M(I,new k({color:2561548}));C.position.set(0,.8,.4),e.add(C);const L=document.createElement("canvas");L.width=256,L.height=256;const B=L.getContext("2d"),y=32;for(let $=0;$<256;$+=y*2)B.fillStyle="#831843",B.fillRect($,0,y,256),B.fillStyle="#fef3c7",B.fillRect($+y,0,y,256);const E=new ae(L);E.wrapS=Oe,E.wrapT=Oe,E.repeat.set(4,1);const T=new k({map:E,roughness:.7,side:we}),U=new wt;U.position.set(0,2.65,-.9);const it=new Yt(4.8,1.5);it.rotateX(Math.PI*.4);const O=new M(it,T);O.position.set(0,-.22,-.65),U.add(O);const z=new Yt(4.8,.26),H=new M(z,T);H.position.set(0,-.55,-1.25),U.add(H),[-2.2,2.2].forEach($=>{const _t=new dt(.02,.02,1.4,6);_t.rotateX(-Math.PI*.25);const Rt=new M(_t,new k({color:1976635}));Rt.position.set($,-.35,-.6),U.add(Rt)}),e.add(U);const Q=document.createElement("canvas");Q.width=1024,Q.height=256;const V=Q.getContext("2d");V.fillStyle="#1c120c",V.fillRect(0,0,1024,256),V.strokeStyle="#d97706",V.lineWidth=12,V.strokeRect(10,10,1004,236),V.strokeStyle="#fde047",V.lineWidth=4,V.strokeRect(22,22,980,212);const K=($,_t)=>{V.fillStyle="#fde047",V.beginPath(),V.ellipse($,_t+32,42,12,0,0,Math.PI*2),V.fill(),V.fillStyle="#ffffff",V.beginPath(),V.moveTo($-30,_t-18),V.lineTo($+30,_t-18),V.quadraticCurveTo($+28,_t+24,$+18,_t+28),V.lineTo($-18,_t+28),V.quadraticCurveTo($-28,_t+24,$-30,_t-18),V.closePath(),V.fill(),V.strokeStyle="#ffffff",V.lineWidth=8,V.beginPath(),V.arc($+32,_t+4,14,-Math.PI*.4,Math.PI*.6),V.stroke(),V.strokeStyle="#fef08a",V.lineWidth=4,V.beginPath(),V.moveTo($-12,_t-24),V.quadraticCurveTo($-18,_t-38,$-10,_t-48),V.moveTo($+8,_t-24),V.quadraticCurveTo($+2,_t-38,$+12,_t-50),V.stroke()};K(70,128),K(954,128),V.fillStyle="#fef08a",V.font="900 82px sans-serif",V.textAlign="center",V.textBaseline="middle",V.shadowColor="rgba(0,0,0,0.95)",V.shadowBlur=14,V.fillText("HIGHWAY CAFE",512,80),V.fillStyle="#ffffff",V.font="bold 54px sans-serif",V.shadowColor="rgba(0,0,0,0.85)",V.shadowBlur=8,V.fillText("ক্যাফে ও রেস্তোরাঁ",512,172),V.fillStyle="#f59e0b",V.font="bold 26px sans-serif",V.shadowBlur=0,V.fillText("FRESH COFFEE • TEA • BURGERS & SNACKS",512,226);const ot=new ae(Q),J=new k({map:ot,roughness:.35,emissive:4005904,emissiveIntensity:.18}),rt=new wt;rt.position.set(0,3.4,-.95);const X=new M(new Z(4.7,.92,.08),new k({color:2561548,roughness:.5}));rt.add(X);const at=new Yt(4.62,.84);at.rotateY(Math.PI);const St=new M(at,J);return St.position.set(0,0,-.045),rt.add(St),[-1.6,1.6].forEach($=>{const _t=new M(new dt(.02,.02,.35,6),x);_t.position.set($,.52,-.15),_t.rotation.x=Math.PI*.3,rt.add(_t);const Rt=new M(new Me(.08,.14,8),x);Rt.position.set($,.42,-.28),Rt.rotation.x=Math.PI*.8,rt.add(Rt);const yt=new M(new Vt(.04,6,6),new re({color:16772565}));yt.position.set($,.38,-.28),rt.add(yt)}),e.add(rt),[-1.7,1.7].forEach($=>{const _t=new wt;_t.position.set($,.28,-1.35);const Rt=new M(new dt(.035,.22,.75,12),new k({color:1976635,metalness:.8}));Rt.position.y=.375,_t.add(Rt);const yt=new M(new dt(.55,.55,.05,16),this.woodMat);yt.position.y=.75,_t.add(yt),[-.18,.18].forEach((Mt,D)=>{const nt=new M(new dt(.05,.045,.08,8),new k({color:16777215,roughness:.2}));nt.position.set(Mt,.81,D===0?.1:-.1),_t.add(nt);const tt=new M(new Ji(.04,8),new re({color:2561548}));tt.rotation.x=-Math.PI/2,tt.position.set(Mt,.85,D===0?.1:-.1),_t.add(tt)}),[-.65,.65].forEach(Mt=>{const D=new wt;D.position.set(Mt,0,0),[-.14,.14].forEach(mt=>{[-.14,.14].forEach(st=>{const Ft=new M(new dt(.02,.02,.45,6),this.woodMat);Ft.position.set(mt,.225,st),D.add(Ft)})});const nt=new M(new Z(.36,.04,.36),this.woodMat);nt.position.y=.45,D.add(nt);const tt=new M(new Z(.36,.35,.04),this.woodMat);tt.position.set(0,.68,Mt>0?.16:-.16),D.add(tt),_t.add(D)}),e.add(_t)}),[-2.9,2.9].forEach($=>{const _t=new M(new Z(.45,.42,1.6),this.woodMat);_t.position.set($,.49,-1.2),e.add(_t);for(let Rt=-.55;Rt<=.55;Rt+=.5){const yt=new M(new Vt(.24,8,8),this.palmLeafMat);yt.position.set($,.8,-1.2+Rt),e.add(yt);const Mt=new M(new Vt(.06,6,6),new re({color:Rt<0?14427686:16096779}));Mt.position.set($,.95,-1.2+Rt),e.add(Mt)}}),e}createHighwayBar(t=-1){const e=new wt;e.name="highway_bar";const n=new Z(6.6,.28,4.4),i=new k({color:1976635,roughness:.8}),o=new M(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const a=new Z(6.8,.14,.25),r=new M(a,new k({color:988970}));r.position.set(0,.07,-2.15),e.add(r);const c=new Z(5.6,3.2,3),h=new k({color:988970,roughness:.7}),d=new M(c,h);d.position.set(0,1.74,.6),d.castShadow=!0,e.add(d),[-2.5,2.5].forEach(vt=>{const $=new M(new Z(.55,3.2,.2),new k({color:4073251,roughness:.6}));$.position.set(vt,1.74,-.9),e.add($)});const u=new Z(5.9,.22,3.3),l=new M(u,new k({color:132631,roughness:.4}));l.position.set(0,3.42,.6),e.add(l);const f=new Z(3.6,.12,.7),_=new k({color:1120295,roughness:.15,metalness:.8}),v=new M(f,_);v.position.set(0,1.05,-.6),e.add(v);const m=new Z(3.4,.98,.6),p=new k({color:1976635,roughness:.5}),x=new M(m,p);x.position.set(0,.5,-.6),e.add(x);const g=new Z(3.4,.04,.04),w=new re({color:440020}),I=new M(g,w);I.position.set(0,.98,-.93),e.add(I);const C=new Z(3.4,1.6,.2),L=new M(C,new k({color:1973807,roughness:.3}));L.position.set(0,1.8,.6),e.add(L);const B=[1483594,14251782,440020,10033947,16436245];[1.25,1.7,2.15].forEach((vt,$)=>{const _t=new M(new Z(3.2,.04,.3),new k({color:3718648,roughness:.1,transparent:!0,opacity:.8}));_t.position.set(0,vt,.45),e.add(_t);for(let Rt=-1.4;Rt<=1.4;Rt+=.28){const yt=B[(Math.abs(Math.round(Rt*10))+$)%B.length],Mt=new wt;Mt.position.set(Rt,vt+.02,.45);const D=new M(new dt(.045,.045,.22,8),new k({color:yt,roughness:.2,metalness:.3,transparent:!0,opacity:.9}));D.position.y=.11,Mt.add(D);const nt=new M(new dt(.016,.022,.1,8),new k({color:yt,roughness:.2}));nt.position.y=.25,Mt.add(nt);const tt=new M(new dt(.018,.018,.02,6),new re({color:16638023}));tt.position.y=.31,Mt.add(tt),e.add(Mt)}}),[-1,0,1].forEach(vt=>{const $=new wt;$.position.set(vt,.28,-1.25);const _t=new M(new dt(.03,.24,.72,12),new k({color:9741240,metalness:.9,roughness:.15}));_t.position.y=.36,$.add(_t);const Rt=new M(new nn(.16,.02,8,16),new k({color:9741240,metalness:.9,roughness:.15}));Rt.rotation.x=Math.PI/2,Rt.position.y=.24,$.add(Rt);const yt=new M(new dt(.22,.22,.08,16),new k({color:10033947,roughness:.5}));yt.position.y=.74,$.add(yt),e.add($)});const y=new mi(440020,3.2,9);y.position.set(-1.2,2.3,.2),e.add(y);const E=new mi(14239471,2.8,8);E.position.set(1.2,2.3,.2),e.add(E);const T=document.createElement("canvas");T.width=1024,T.height=256;const U=T.getContext("2d");U.fillStyle="#030712",U.fillRect(0,0,1024,256),U.strokeStyle="#ec4899",U.lineWidth=10,U.shadowColor="#ec4899",U.shadowBlur=18,U.strokeRect(12,12,1e3,232),U.strokeStyle="#06b6d4",U.lineWidth=4,U.shadowColor="#06b6d4",U.shadowBlur=12,U.strokeRect(26,26,972,204);const it=(vt,$)=>{U.shadowColor="#facc15",U.shadowBlur=14,U.fillStyle="#facc15",U.beginPath(),U.roundRect(vt,$+18,48,56,[0,0,8,8]),U.fill(),U.fillStyle="#ffffff",U.beginPath(),U.arc(vt+10,$+14,14,0,Math.PI*2),U.arc(vt+24,$+8,16,0,Math.PI*2),U.arc(vt+38,$+14,14,0,Math.PI*2),U.fill(),U.strokeStyle="#facc15",U.lineWidth=6,U.beginPath(),U.arc(vt+52,$+46,16,-Math.PI*.45,Math.PI*.45),U.stroke()},O=(vt,$)=>{U.shadowColor="#06b6d4",U.shadowBlur=14,U.strokeStyle="#38bdf8",U.lineWidth=5,U.beginPath(),U.moveTo(vt-30,$+10),U.lineTo(vt+30,$+10),U.lineTo(vt,$+50),U.closePath(),U.stroke(),U.fillStyle="#f43f5e",U.beginPath(),U.moveTo(vt-20,$+22),U.lineTo(vt+20,$+22),U.lineTo(vt,$+50),U.closePath(),U.fill(),U.strokeStyle="#38bdf8",U.lineWidth=5,U.beginPath(),U.moveTo(vt,$+50),U.lineTo(vt,$+80),U.moveTo(vt-22,$+80),U.lineTo(vt+22,$+80),U.stroke(),U.fillStyle="#84cc16",U.beginPath(),U.arc(vt-6,$+16,7,0,Math.PI*2),U.fill()};it(52,85),O(940,80),U.fillStyle="#38bdf8",U.font="900 84px sans-serif",U.textAlign="center",U.textBaseline="middle",U.shadowColor="#06b6d4",U.shadowBlur=24,U.fillText("HIGHWAY BAR",512,78),U.fillStyle="#fde047",U.font="bold 62px sans-serif",U.shadowColor="#f59e0b",U.shadowBlur=20,U.fillText("মদের বার",512,168),U.fillStyle="#a3e635",U.font="bold 25px sans-serif",U.shadowColor="#84cc16",U.shadowBlur=8,U.fillText("IMPORTED LIQUOR • CHILLED BEER • WINE LOUNGE",512,224);const z=new ae(T),H=new k({map:z,roughness:.25,emissive:440020,emissiveIntensity:.35}),Q=new wt;Q.position.set(0,3.4,-.95);const V=new M(new Z(4.7,.95,.08),new k({color:132631,roughness:.4}));Q.add(V);const K=new Yt(4.62,.88);K.rotateY(Math.PI);const ot=new M(K,H);ot.position.set(0,0,-.045),Q.add(ot);const J=new Yt(.8,1.2),rt=document.createElement("canvas");rt.width=256,rt.height=384;const X=rt.getContext("2d");X.fillStyle="#030712",X.fillRect(0,0,256,384),X.strokeStyle="#ec4899",X.lineWidth=6,X.strokeRect(6,6,244,372),X.fillStyle="#facc15",X.font="900 46px sans-serif",X.textAlign="center",X.shadowColor="#f59e0b",X.shadowBlur=12,X.fillText("BAR",128,70),X.fillStyle="#38bdf8",X.font="bold 36px sans-serif",X.shadowColor="#06b6d4",X.fillText("OPEN",128,130),X.fillStyle="#ec4899",X.font="900 44px sans-serif",X.shadowColor="#ec4899",X.fillText("24/7",128,200),X.fillStyle="#fde047",X.font="bold 32px sans-serif",X.shadowColor="#f59e0b",X.fillText("মদ ও বিয়ার",128,280),X.fillStyle="#a3e635",X.font="bold 22px sans-serif",X.fillText("CHILLED BEER",128,340);const at=new ae(rt),St=new M(J,new k({map:at,emissive:15485081,emissiveIntensity:.35}));return St.position.set(-2.82,2,-.6),St.rotation.y=-Math.PI/2,e.add(St),e}createSmokingGuysGroup(t=1){const e=new wt;e.name="smoking_guys_group",e.scale.set(1.25,1.25,1.25);const n=new k({color:16106390,roughness:.65}),i=new k({color:1579035,roughness:.45}),o=new k({color:16317180,roughness:.7}),a=new k({color:1976635,roughness:.7}),r=new wt;r.position.set(-.42,0,0);const c=new k({color:14427686,roughness:.7}),h=new k({color:1976635,roughness:.8}),d=new M(new Z(.38,.58,.24),c);d.position.set(0,1.15,0),d.rotation.y=.25,r.add(d);const u=new M(new Z(.3,.24,.16),c);u.position.set(0,1.38,.12),r.add(u);const l=new wt;l.position.set(0,1.54,0),l.rotation.x=-.12,l.rotation.y=.25;const f=new M(new Vt(.125,12,12),n);l.add(f);const _=new M(new Vt(.132,12,12),i);_.scale.set(1.02,1.08,1.04),_.position.set(0,.03,-.01),l.add(_),r.add(l),[-.1,.1].forEach(D=>{const nt=new M(new dt(.06,.05,.84,8),h);nt.position.set(D,.44,0),r.add(nt);const tt=new M(new Z(.12,.08,.22),o);tt.position.set(D,.04,-.04),r.add(tt)});const v=new M(new dt(.045,.04,.52,8),c);v.position.set(-.24,1.1,0),v.rotation.z=.15,r.add(v);const m=new M(new dt(.048,.044,.32,8),c);m.position.set(.23,1.25,-.06),m.rotation.z=-Math.PI*.35,m.rotation.x=-Math.PI*.25,r.add(m);const p=new M(new dt(.042,.038,.32,8),c);p.position.set(.14,1.44,-.12),p.rotation.z=Math.PI*.32,p.rotation.x=-Math.PI*.45,r.add(p);const x=new M(new Vt(.045,8,8),n);x.position.set(.04,1.5,-.16),r.add(x);const g=new wt;g.position.set(.02,1.51,-.18),g.rotation.x=-Math.PI*.15,g.rotation.y=.28;const w=new M(new dt(.012,.012,.028,8),new k({color:14251782,roughness:.9}));w.rotation.x=Math.PI/2,g.add(w);const I=new M(new dt(.012,.012,.065,8),new k({color:16317180,roughness:.5}));I.rotation.x=Math.PI/2,I.position.z=-.046,g.add(I);const C=new M(new Vt(.014,8,8),new re({color:16720384}));C.position.z=-.082,g.add(C);const L=new mi(16726784,1.2,1.2);L.position.z=-.082,g.add(L);const B=new wt;B.position.set(.02,1.51,-.26),B.userData={type:"cigarette",maxH:.5,spd:.007,drift:.004,light:L,seed:Math.random()*5};for(let D=0;D<5;D++){const nt=new M(new Vt(.022+D*.006,6,6),this.smokeMat);nt.position.y=D*.1,B.add(nt)}this.smokeEmitters.push(B),r.add(B),r.add(g),e.add(r),this.animatedAnimals.push({type:"smoker",head:l,seed:Math.random()*10});const y=new wt;y.position.set(.48,0,-.15);const E=new k({color:1981066,roughness:.7}),T=new k({color:4153874,roughness:.8}),U=new M(new Z(.36,.56,.22),E);U.position.set(0,1.14,0),U.rotation.y=-.7,y.add(U);const it=new M(new Vt(.12,12,12),n);it.position.set(0,1.54,0),it.rotation.y=-.7,y.add(it);const O=new M(new Vt(.128,12,12),i);O.scale.set(1.02,1.06,1.04),O.position.set(0,1.57,-.01),y.add(O),[-.09,.09].forEach(D=>{const nt=new M(new dt(.058,.05,.84,8),T);nt.position.set(D,.44,0),y.add(nt);const tt=new M(new Z(.12,.08,.22),a);tt.position.set(D,.04,-.04),y.add(tt)});const z=new M(new dt(.042,.038,.48,8),E);z.position.set(.22,1.16,.06),z.rotation.z=-Math.PI*.22,z.rotation.x=-Math.PI*.25,y.add(z);const H=new M(new dt(.042,.038,.48,8),E);H.position.set(-.21,1.08,.04),H.rotation.z=Math.PI*.16,H.rotation.x=-Math.PI*.12,y.add(H);const Q=new M(new Vt(.042,8,8),n);Q.position.set(-.28,.85,.1),y.add(Q);const V=new wt;V.position.set(-.32,.85,.12),V.rotation.x=-Math.PI*.35,V.rotation.y=-.4;const K=new M(new dt(.012,.012,.08,8),new k({color:16317180,roughness:.5}));K.rotation.x=Math.PI/2,V.add(K);const ot=new M(new Vt(.014,8,8),new re({color:16720384}));ot.position.z=-.045,V.add(ot);const J=new mi(16726784,.9,1);J.position.z=-.045,V.add(J);const rt=new wt;rt.position.set(-.32,.88,.1),rt.userData={type:"cigarette",maxH:.45,spd:.006,drift:.003,light:J,seed:Math.random()*5};for(let D=0;D<4;D++){const nt=new M(new Vt(.02+D*.005,6,6),this.smokeMat);nt.position.y=D*.1,rt.add(nt)}this.smokeEmitters.push(rt),y.add(rt),y.add(V),e.add(y);const X=new wt;X.position.set(.02,0,.52);const at=new k({color:3359061,roughness:.7}),St=new k({color:13935475,roughness:.8}),vt=new M(new Z(.38,.58,.24),at);vt.position.set(0,1.15,0),vt.rotation.y=Math.PI*.9,X.add(vt);const $=new M(new Vt(.125,12,12),n);$.position.set(0,1.54,0),$.rotation.y=Math.PI*.9,X.add($);const _t=new M(new Vt(.132,12,12),i);_t.scale.set(1.02,1.08,1.04),_t.position.set(0,1.57,.01),X.add(_t),[-.1,.1].forEach(D=>{const nt=new M(new dt(.058,.05,.84,8),St);nt.position.set(D,.44,0),X.add(nt);const tt=new M(new Z(.12,.08,.22),new k({color:7877903}));tt.position.set(D,.04,.04),X.add(tt)}),[-.22,.22].forEach(D=>{const nt=new M(new dt(.045,.04,.48,8),at);nt.position.set(D,1.12,-.06),nt.rotation.z=D>0?-.25:.25,nt.rotation.x=Math.PI*.18,X.add(nt)}),e.add(X);const Rt=new M(new Z(.35,.2,.5),this.brickMat);Rt.position.set(-.1,.1,-.15),e.add(Rt);const yt=new M(new Z(.1,.05,.16),new k({color:1981066,metalness:.5,roughness:.3}));yt.position.set(-.1,.225,-.15),e.add(yt);const Mt=new M(new Z(.07,.035,.11),new k({color:16096779,roughness:.8}));return Mt.position.set(.02,.218,-.22),e.add(Mt),e}createDingiBoat(){const t=new wt;t.name="dingi_nouka";const e=new k({color:4073251,roughness:.8}),n=new Z(1.1,.12,3.8),i=new M(n,e);i.position.y=.06,t.add(i),[-.55,.55].forEach(w=>{const I=new Z(.08,.45,3.8),C=new M(I,e);C.position.set(w,.28,0),C.rotation.z=w>0?.25:-.25,t.add(C)}),[-1,1].forEach(w=>{const I=new Me(.55,1.2,5);I.rotateX(w>0?-Math.PI/3:Math.PI/3);const C=new M(I,e);C.position.set(0,.35,w*2.3),C.scale.set(.9,.5,1.1),t.add(C);const L=new M(new Vt(.08,8,8),new k({color:16096779,metalness:.8,roughness:.3}));L.position.set(0,.65,w*2.7),t.add(L)});const o=new dt(.68,.68,1.9,16,1,!0,0,Math.PI);o.rotateZ(Math.PI/2),o.rotateY(Math.PI/2);const a=new M(o,this.bambooWallMat);a.position.set(0,.48,-.2),t.add(a),[-.8,0,.8].forEach(w=>{const I=new nn(.69,.025,6,16,Math.PI);I.rotateZ(Math.PI/2),I.rotateY(Math.PI/2);const C=new M(I,this.woodMat);C.position.set(0,.48,-.2+w),t.add(C)});const r=new wt;r.position.set(0,.22,1.35);const c=new k({color:13935475,roughness:.7}),h=new k({color:165063,roughness:.8}),d=new k({color:1579035,roughness:.5}),u=new M(new Z(.38,.28,.42),h);u.position.y=.14,r.add(u);const l=new M(new Z(.32,.42,.2),c);l.position.set(0,.46,-.05),l.rotation.x=-.15,r.add(l);const f=new M(new Vt(.11,10,10),c);f.position.set(0,.74,-.1),r.add(f);const _=new M(new Vt(.115,10,10),d);_.position.set(0,.77,-.1),_.scale.set(1.02,1.05,1.02),r.add(_);const v=new Me(.24,.12,12),m=new M(v,this.bambooWallMat);m.position.set(0,.86,-.1),r.add(m);const p=new wt;p.position.set(.32,.4,0),p.rotation.z=-Math.PI*.32,p.rotation.x=Math.PI*.25;const x=new M(new dt(.025,.025,2.2,8),this.woodMat);x.position.y=-.5,p.add(x);const g=new M(new Z(.18,.55,.02),this.woodMat);return g.position.y=-1.4,p.add(g),r.add(p),t.add(r),t}createWaterHyacinthCluster(){const t=new wt;t.name="kochuripana_cluster";const e=new k({color:1409085,roughness:.5}),n=new re({color:12616956});for(let i=0;i<7;i++){const o=i/7*Math.PI*2+Math.random()*.4,a=.25+Math.random()*.45,r=Math.cos(o)*a,c=Math.sin(o)*a,h=new Vt(.12,8,6);h.scale(1.3,.2,1);const d=new M(h,e);if(d.position.set(r,.02,c),t.add(d),i%2===0){const u=new M(new Me(.04,.12,6),n);u.position.set(r*.8,.08,c*.8),t.add(u)}}return t}createBangladeshiRiverBridge(t=13,e=60){const n=new wt;n.name="bangladeshi_river_bridge";const i=t*.5,o=.45,a=new Z(t+.8,.45,e),r=new k({color:4674921,roughness:.8}),c=new M(a,r);c.position.set(0,-.225,0),c.receiveShadow=!0,n.add(c),[-e*.5+.3,e*.5-.3].forEach(B=>{const y=new Z(t+.4,.04,.35),E=new M(y,new k({color:988970,roughness:.9}));E.position.set(0,.01,B),n.add(E)}),[-1,1].forEach(B=>{const y=(i+.3)*B,E=new Z(.38,.85,e),T=new M(E,this.bridgeRedMat);T.position.set(y,-.45,0),T.castShadow=!0,n.add(T);const U=new Z(.44,.12,e),it=new M(U,this.bridgeWhiteMat);it.position.set(y,-.85,0),n.add(it)}),[-18,-6,6,18].forEach(B=>{const y=new wt;y.position.set(0,0,B);const E=new Z(t+1.2,.45,.95),T=new M(E,this.bridgeRedMat);T.position.y=-.55,y.add(T),[-5.2,-1.8,1.8,5.2].forEach(O=>{const z=new dt(.24,.28,3.2,10),H=new M(z,this.bridgeRedMat);H.position.set(O,-1.95,0),H.rotation.z=O>0?-.06:.06,y.add(H);const Q=new M(new dt(.29,.29,.28,10),new k({color:993570,roughness:.9}));Q.position.set(O,-1.35,0),y.add(Q)});const U=new Z(t+.6,.22,.3),it=new M(U,this.bridgeRedMat);it.position.y=-1.6,y.add(it),n.add(y)}),[-1,1].forEach(B=>{const y=(i+.16)*B,E=new Z(.34,.28,e),T=new M(E,this.bridgeCurbMat);T.position.set(y,.14,0),T.receiveShadow=!0,n.add(T)});const d=[];for(let B=-28.5;B<=28.51;B+=1.5)d.push(B);[-1,1].forEach(B=>{const y=(i+.16)*B;d.forEach(E=>{const T=Math.sin((E+28.5)/57*Math.PI)*o,U=new Z(.22,.96,.22),it=new M(U,this.bridgeRedMat);it.position.set(y,.28+.48+T,E),it.castShadow=!0,n.add(it);const O=new Me(.18,.08,4);O.rotateY(Math.PI/4);const z=new M(O,this.bridgeRedMat);if(z.position.set(y,.28+.96+.04+T,E),n.add(z),B===-1){const H=new nn(.075,.016,8,16),Q=new M(H,this.bridgeRedMat);Q.position.set(y+.09,.28+.32+T,E),n.add(Q)}});for(let E=0;E<d.length-1;E++){const T=d[E],U=d[E+1],it=(T+U)*.5,O=U-T,z=Math.sin((it+28.5)/57*Math.PI)*o,H=new Z(.14,.12,O),Q=new M(H,this.bridgeWhiteMat);Q.position.set(y,.28+.44+z,it),n.add(Q);const V=new Z(.2,.12,O),K=new M(V,this.bridgeWhiteMat);if(K.position.set(y,.28+.92+z,it),n.add(K),B===-1){const ot=new dt(.065,.065,O,10);ot.rotateX(Math.PI/2);const J=new M(ot,this.pipelineMat);J.position.set(y+.09,.28+.32+z,it),n.add(J)}}});const u=new Yt(180,48);u.rotateX(-Math.PI/2);const l=new M(u,this.riverWaterMat);l.position.set(0,-1.35,0),l.receiveShadow=!0,n.add(l);const f=new Yt(180,48);f.rotateX(-Math.PI/2);const _=new M(f,new k({color:1841431,roughness:.95}));_.position.set(0,-3.2,0),n.add(_),[-1,1].forEach(B=>{const y=B*26.5;[-1,1].forEach(E=>{const T=new Yt(75,7);T.rotateX(B>0?-Math.PI*.38:Math.PI*.38);const U=new M(T,this.mudPlinthMat);U.position.set(E*48,-.7,y),n.add(U)})});const v=this.createDingiBoat();v.position.set(16.5,-1.35,3.5),v.rotation.y=.45,n.add(v),this.animatedAnimals.push({type:"dingi",mesh:v,startY:-1.35,seed:Math.random()*10}),[[14.5,-1.34,1.5],[19,-1.34,5.5],[-15,-1.34,-4],[-7.5,-1.34,6],[7.5,-1.34,-6]].forEach(([B,y,E])=>{const T=this.createWaterHyacinthCluster();T.position.set(B,y,E),n.add(T)});const p=new wt;p.position.set(i+.95,0,-28.8);const x=new M(new Z(.35,1.2,.35),this.bridgeCurbMat);x.position.y=.6,p.add(x);const g=document.createElement("canvas");g.width=512,g.height=320;const w=g.getContext("2d");w.fillStyle="#15803d",w.fillRect(0,0,512,320),w.strokeStyle="#facc15",w.lineWidth=12,w.strokeRect(8,8,496,304),w.strokeStyle="#ffffff",w.lineWidth=4,w.strokeRect(22,22,468,276),w.fillStyle="#ffffff",w.font="bold 56px sans-serif",w.textAlign="center",w.textBaseline="middle",w.fillText("মেঘনা নদী সেতু",256,85),w.fillStyle="#facc15",w.font="900 44px sans-serif",w.fillText("MEGHNA RIVER BRIDGE",256,160),w.fillStyle="#e2e8f0",w.font="bold 28px sans-serif",w.fillText("দৈর্ঘ্য: ৬০ মিটার | LENGTH: 60M",256,225),w.fillStyle="#86efac",w.font="bold 22px sans-serif",w.fillText("সড়ক ও জনপথ অধিদপ্তর (RHD)",256,275);const I=new ae(g),C=new k({map:I,roughness:.4}),L=new M(new Yt(1.2,.75),C);return L.position.set(0,1.35,-.05),L.rotation.y=-Math.PI/4,p.add(L),n.add(p),[-1,1].forEach(B=>{const y=(i+.38)*B;for(let E=-29.2;E<=-23.5;E+=1.4){const T=new M(new dt(.1,.1,.85,12),this.bollardMat);T.position.set(y,.425,E),T.castShadow=!0,n.add(T);const U=new M(new Vt(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);U.position.set(y,.85,E),n.add(U)}for(let E=23.5;E<=29.2;E+=1.4){const T=new M(new dt(.1,.1,.85,12),this.bollardMat);T.position.set(y,.425,E),T.castShadow=!0,n.add(T);const U=new M(new Vt(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);U.position.set(y,.85,E),n.add(U)}}),n}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}else if(e.type==="smoker"){if(e.head){const n=Math.sin(t*1.8+e.seed)*.04;e.head.rotation.x=-.12+Math.max(0,n)}}else e.type==="dingi"&&(e.mesh.position.y=e.startY+Math.sin(t*2.2+e.seed)*.035,e.mesh.rotation.z=Math.sin(t*1.8+e.seed)*.04,e.mesh.rotation.x=Math.cos(t*1.4+e.seed)*.025)}),this.smokeEmitters.forEach(e=>{const n=e.userData&&e.userData.type==="cigarette",i=e.userData&&e.userData.maxH||(n?.5:1.4),o=e.userData&&e.userData.spd||(n?.007:.015),a=e.userData&&e.userData.drift||(n?.004:.005);if(e.children.forEach((r,c)=>{r.position.y+=o,r.position.x+=Math.sin(t*3+c)*a,r.position.z+=Math.cos(t*2.6+c)*(a*.6),r.position.y>i&&(r.position.y=0,r.position.x=0,r.position.z=0)}),e.userData&&e.userData.light){const r=e.userData.seed||0;e.userData.light.intensity=.85+Math.sin(t*7.5+r)*.35}})}}class U0{constructor(t){this.scene=t,this.segments=[],this.segmentLength=Wt.ROAD_SEGMENT_LENGTH,this.segmentCount=Wt.ROAD_SEGMENT_COUNT,this.roadWidth=Wt.ROAD_WIDTH,this.props=new D0,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let d=0;d<i.length;d+=4){const u=(Math.random()-.5)*12;i[d]=Math.min(255,Math.max(0,i[d]+u)),i[d+1]=Math.min(255,Math.max(0,i[d+1]+u)),i[d+2]=Math.min(255,Math.max(0,i[d+2]+u))}e.putImageData(n,0,0);const o=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",o.forEach(d=>{e.fillRect(d-50,0,36,t.height),e.fillRect(d+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const a=new ae(t);a.wrapS=Oe,a.wrapT=Oe,a.repeat.set(1,1),a.anisotropy=8,this.roadMaterial=new k({map:a,roughness:.82,metalness:.12});const r=document.createElement("canvas");r.width=512,r.height=512;const c=r.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let d=0;d<512;d+=24)c.beginPath(),c.moveTo(0,d),c.lineTo(512,d),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const h=new ae(r);h.wrapS=Oe,h.wrapT=Oe,h.repeat.set(4,8),this.paddyFieldMaterial=new k({map:h,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new k({color:7032635,roughness:.95}),this.culvertRailingMaterial=new k({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new wt;n.position.z=t;const i=e%4===3,o=new Yt(this.roadWidth,this.segmentLength);o.rotateX(-Math.PI/2);const a=new M(o,this.roadMaterial);if(a.receiveShadow=!0,n.add(a),i){[-1,1].forEach(d=>{[-1,1].forEach(u=>{const l=new Yt(3.5,6);l.rotateX(-Math.PI/2);const f=new M(l,this.dirtVergeMaterial);f.position.set((this.roadWidth*.5+3.5*.5)*d,-.01,u*27),n.add(f);const _=new Yt(60,6);_.rotateX(-Math.PI/2);const v=new M(_,this.paddyFieldMaterial);v.position.set((this.roadWidth*.5+3.5+30)*d,-.05,u*27),n.add(v)})});const h=this.props.createBangladeshiRiverBridge(this.roadWidth,this.segmentLength);n.add(h)}else{[-1,1].forEach(h=>{const d=new Yt(3.5,this.segmentLength);d.rotateX(-Math.PI/2);const u=new M(d,this.dirtVergeMaterial);u.position.set((this.roadWidth*.5+3.5*.5)*h,-.01,0),u.receiveShadow=!0,n.add(u)});const c=60;[-1,1].forEach(h=>{const d=new Yt(c,this.segmentLength);d.rotateX(-Math.PI/2);const u=new M(d,this.paddyFieldMaterial),l=(this.roadWidth*.5+3.5+c*.5)*h;u.position.set(l,-.05,0),u.receiveShadow=!0,n.add(u)})}return this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=e%4===3,o=n.createElectricPole();o.position.set(this.roadWidth*.5+2.4,0,0),t.add(o);const a=[new F(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new F(this.roadWidth*.5+2.4,7.1,0),new F(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],r=new Ls(a),c=new Zi(r,8,.02,4,!1),h=new re({color:2040865}),d=new M(c,h);if(t.add(d),!i){const u=e%2===0?-1:1,l=e%3===0?"white":e%3===1?"brown":"black",f=n.createCow(l),_=(this.roadWidth*.5+2.8+Math.random()*1.5)*u,v=6+Math.random()*14;if(f.position.set(_,0,v),f.rotation.y=u>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(f),e%2===1){const m=n.createCow("brown");m.scale.set(.75,.75,.75),m.position.set(_+(u>0?3:-3),0,v+3.5),m.rotation.y=f.rotation.y+.5,t.add(m)}}if(e%2===0){const l=n.createVillageHouse(e%4===0),f=(this.roadWidth*.5+11.5)*-1;l.position.set(f,0,-10),l.rotation.y=Math.PI/2,t.add(l);const _=n.createHaystack();_.position.set(f-5.5,0,4),t.add(_);const v=n.createBambooFence(24);v.position.set((this.roadWidth*.5+5.5)*-1,0,-5),t.add(v)}if(e%3===1){const l=n.createTeaStall();l.position.set((this.roadWidth*.5+5.8)*1,0,12),l.rotation.y=-Math.PI/2,t.add(l);const f=n.createCoconutTree();f.position.set((this.roadWidth*.5+9)*1,0,16),t.add(f)}if(e%3===2){const l=n.createPond(14,22);l.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(l);for(let f=0;f<3;f++){const _=n.createBananaTree();_.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+f*6),t.add(_)}}if(i)[-1,1].forEach(u=>{const l=n.createCoconutTree();l.position.set(this.roadWidth*.5+9,0,u*26),t.add(l);const f=n.createBambooGrove();f.position.set(-this.roadWidth*.5-10,0,u*26),t.add(f)});else{const u=e%2===0?1:-1,l=n.createCoconutTree();l.position.set((this.roadWidth*.5+7.5+Math.random()*5)*u,0,-22),t.add(l);const f=n.createBambooGrove();f.position.set((this.roadWidth*.5+9+Math.random()*6)*-u,0,18),t.add(f);const _=n.createBananaTree();_.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*u,0,4),t.add(_)}if(!i){const u=e%2===0?1:-1,l=n.createJatriChawni(u),f=(this.roadWidth*.5+3.4)*u,_=e===0?-14:-18;l.position.set(f,0,_),l.rotation.y=u>0?Math.PI*.5+.32:-Math.PI*.5-.32,t.add(l)}if(e%4===1||e%4===2){const u=e%4===2?1:-1,l=n.createHighwayCafe(u),f=(this.roadWidth*.5+5.6)*u,_=e%4===2?14:12;l.position.set(f,0,_),l.rotation.y=u>0?Math.PI*.5+.28:-Math.PI*.5-.28,t.add(l);const v=u,m=n.createSmokingGuysGroup(v),p=(this.roadWidth*.5+2.5)*v,x=_-6;m.position.set(p,0,x),m.rotation.y=v>0?-.4:.4,t.add(m)}else if(e%4===0){const l=n.createHighwayBar(1),f=(this.roadWidth*.5+5.6)*1,_=12;l.position.set(f,0,_),l.rotation.y=Math.PI*.5+.28,t.add(l);const v=1,m=n.createSmokingGuysGroup(v),p=(this.roadWidth*.5+2.5)*v,x=_-6;m.position.set(p,0,x),m.rotation.y=-.4,t.add(m)}if(e%3===1&&!i){const u=n.createSmokingGuysGroup(1);u.position.set(this.roadWidth*.5+2.6,0,7),u.rotation.y=-.3,t.add(u)}}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const o=this.segments[i];if(o.group.position.z>n){let a=0;for(let r=0;r<this.segments.length;r++)this.segments[r].group.position.z<a&&(a=this.segments[r].group.position.z);o.group.position.z=a-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class N0{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new Vo(11722715,.0038),this.scene.background=new ie(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(h,d,u)=>{e.beginPath(),e.arc(h,d,u,0,Math.PI*2),e.arc(h+u*.7,d-u*.2,u*.8,0,Math.PI*2),e.arc(h-u*.7,d-u*.1,u*.7,0,Math.PI*2),e.arc(h+u*1.3,d+u*.1,u*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const o=e.createRadialGradient(256,380,15,256,380,120);o.addColorStop(0,"rgba(255, 255, 240, 1.0)"),o.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),o.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),o.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=o,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const a=new ae(t),r=new Vt(480,32,16),c=new re({map:a,side:Be});this.skyDome=new M(r,c),this.scene.add(this.skyDome)}initLighting(){this.hemiLight=new M0(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new E0(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=170,this.dirLight.shadow.camera.left=-28,this.dirLight.shadow.camera.right=28,this.dirLight.shadow.camera.top=28,this.dirLight.shadow.camera.bottom=-28,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new k({color:1793568,roughness:.9,flatShading:!0});[-1,1].forEach(e=>{const n=new wt,i=28;for(let o=0;o<i;o++){const a=12+Math.random()*18,r=6+Math.random()*8,c=new Me(r,a,6),h=new M(c,t),d=(55+Math.random()*30)*e,u=-o*18;h.position.set(d,a*.5-2,u),h.rotation.y=Math.random()*Math.PI,n.add(h)}this.scene.add(n),this.treeLines.push(n)})}initFlyingBirds(){this.birdsGroup=new wt;const t=new re({color:16777215,side:we}),e=8;for(let n=0;n<e;n++){const i=new wt,o=new Yt(.8,.35);o.translate(-.4,0,0);const a=new M(o,t);i.add(a);const r=new Yt(.8,.35);r.translate(.4,0,0);const c=new M(r,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:a,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class O0{constructor(t="sedan"){this.type=t,this.group=new wt,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new xn,this.collisionSize=new F(1.8,1.4,4.5),this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new k({color:t,metalness:.5,roughness:.35}),darkTrim:new k({color:1974308,roughness:.7}),wood:new k({color:8736014,roughness:.9}),glass:new Zo({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new k({color:14671839,metalness:.9,roughness:.2}),headlight:new re({color:16777215}),taillight:new k({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new k({color:1973792,metalness:.1,roughness:.85}),rim:new k({color:12131356,metalness:.5,roughness:.4}),cowFawn:new k({color:9262372,roughness:.7}),cowWhite:new k({color:16119280,roughness:.6}),cowBlack:new k({color:2236962,roughness:.7}),horn:new k({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new Z(2,.4,6.2),o=new M(i,n.darkTrim);o.position.set(0,.6,0),this.group.add(o);const a=new Z(2.3,.4,.25),r=new M(a,n.darkTrim);r.position.set(0,.6,-3.15),this.group.add(r);const c=new Z(1.8,.9,1.5),h=new M(c,n.body);h.position.set(0,1.25,-2.2),this.group.add(h);const d=new Z(2.1,1.5,1.5),u=new M(d,n.body);u.position.set(0,1.8,-.7),this.group.add(u);const l=new Yt(1.85,.7),f=new M(l,n.glass);f.position.set(0,1.95,-1.46),this.group.add(f),[-.7,.7].forEach(w=>{const I=new M(new Z(.24,.2,.05),n.headlight);I.position.set(w,1.15,-3.18),this.group.add(I)});const _=new Z(2.25,.12,3.6),v=new M(_,n.wood);v.position.set(0,1.05,1.5),this.group.add(v),[-1.12,1.12].forEach(w=>{const I=new Z(.08,1.3,3.6),C=new M(I,n.wood);C.position.set(w,1.7,1.5),this.group.add(C)});const m=new Z(2.25,1.2,.08),p=new M(m,n.wood);p.position.set(0,1.65,3.3),this.group.add(p),[-.85,.85].forEach(w=>{const I=new M(new Z(.28,.16,.05),n.taillight);I.position.set(w,.75,3.32),this.group.add(I)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(w=>{const I=new wt;I.position.set(w.x,2.2,w.z);const C=new Z(.42,.45,.6),L=new M(C,w.mat);I.add(L);const B=new Z(.3,.25,.25),y=new M(B,n.darkTrim);y.position.set(0,-.08,.38),I.add(y),[-.18,.18].forEach(E=>{const T=new Me(.05,.28,6),U=new M(T,n.horn);U.position.set(E,.26,.05),U.rotation.z=E>0?-.35:.35,I.add(U)}),this.group.add(I)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(w=>{const I=this.createSimpleWheel(n,.5,.3);I.position.set(w.x,.5,w.z),this.group.add(I),this.wheels.push(I)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new Z(2,.4,6.2),n=new M(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new Z(2.1,1.6,1.8),o=new M(i,t.body);o.position.set(0,1.7,-1.8),this.group.add(o);const a=new Z(2.3,2.1,3.8),r=new M(a,t.wood);r.position.set(0,1.85,1.2),this.group.add(r),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new Z(2.35,2.5,10.2),n=new M(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new Yt(2.15,1.2),o=new M(i,t.glass);o.position.set(0,1.95,-5.12),this.group.add(o),[-1.19,1.19].forEach(r=>{const c=new Yt(9,.9),h=new M(c,t.glass);h.position.set(r,1.9,.2),h.rotation.y=r>0?Math.PI/2:-Math.PI/2,this.group.add(h)}),[-.85,.85].forEach(r=>{const c=new M(new Z(.3,.16,.05),t.headlight);c.position.set(r,.75,-5.12),this.group.add(c);const h=new M(new Z(.24,.35,.05),t.taillight);h.position.set(r,1.3,5.12),this.group.add(h)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(r=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(r.x,.48,r.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new Z(1.88,.4,4.65),o=new M(i,n.darkTrim);o.position.set(0,.42,0),this.group.add(o);const a=new Z(1.84,.6,4.6),r=new M(a,n.body);r.position.set(0,.78,0),this.group.add(r);const c=new Z(1.58,.65,2.9),h=new M(c,n.body);h.position.set(0,1.3,.2),this.group.add(h),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new Z(1.76,.32,4.5),o=new M(i,n.darkTrim);o.position.set(0,.32,0),this.group.add(o);const a=new Z(1.72,.44,4.4),r=new M(a,n.body);r.position.set(0,.58,0),this.group.add(r);const c=new Z(1.44,.46,2.2),h=new M(c,n.body);h.position.set(0,.92,-.05),this.group.add(h),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,o,a){[-e,e].forEach(r=>{const c=new Z(.3,.1,.05),h=new M(c,t.headlight);h.position.set(r,i,n),this.group.add(h)}),[-e,e].forEach(r=>{const c=new Z(.32,.12,.05),h=new M(c,t.taillight);h.position.set(r,a,o),this.group.add(h)})}addStandardWheels(t,e,n,i,o){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(r=>{const c=this.createSimpleWheel(t,o,.24);c.position.set(r.x,r.y,r.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new wt,o=new dt(e,e,n,18);o.rotateZ(Math.PI/2);const a=new M(o,t.tire);i.add(a);const r=new dt(e*.7,e*.7,n+.02,14);r.rotateZ(Math.PI/2);const c=new M(r,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=Wt.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<Wt.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=Wt.LANES[n];if(!t.some(a=>{if(a===this||!a.active)return!1;const r=Math.abs(a.group.position.z-this.group.position.z),c=Math.abs(a.group.position.x-i);return r<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const o=this.targetX-this.group.position.x;Math.abs(o)>.04?this.group.position.x+=Math.sign(o)*Math.min(Math.abs(o),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(o=>{o.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(t,this.collisionSize)}}class F0{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"];for(let n=0;n<25;n++){const i=t[n%t.length],o=new O0(i);o.despawn(),this.pool.push(o),this.scene.add(o.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,o){const a=t.group.position.z,r=t.group.position.x,c=Math.min(1,n/4500),h=Li.lerp(1.3,.8,c),d=Li.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=Li.lerp(h,d,Math.random()),this.trySpawnTraffic(a,c));for(let u=this.activeVehicles.length-1;u>=0;u--){const l=this.activeVehicles[u];if(l.update(e,i),l.group.position.z>a+Wt.TRAFFIC.DESPAWN_DISTANCE){l.despawn(),this.activeVehicles.splice(u,1);continue}if(!l.hasBeenOvertaken){const f=Math.abs(l.group.position.z-a),_=Math.abs(l.group.position.x-r);f<Wt.SCORING.NEAR_MISS_DIST_Z&&_<Wt.SCORING.NEAR_MISS_DIST_X&&_>.5&&e>l.speed+12?(l.hasBeenOvertaken=!0,o&&o(l)):a<l.group.position.z-4&&(l.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-Wt.TRAFFIC.SPAWN_DISTANCE,i=34,o=new Set;this.activeVehicles.forEach(_=>{Math.abs(_.group.position.z-n)<i&&o.add(_.lane)});const a=[0,1,2].filter(_=>!o.has(_));if(a.length===0||a.length===1&&o.size>=2)return;const r=a[Math.floor(Math.random()*a.length)];let c="cow_truck";const h=Math.random();r===0?c=h>.45?"cow_truck":"truck":r===1?c=h>.5?"bus":h>.25?"cow_truck":"suv":c=h>.45?"bus":"sedan";const d=this.getInactiveVehicle(c);if(!d)return;const u=Wt.TRAFFIC.SPEEDS[c]||[65,85],l=e*35,f=Li.lerp(u[0],u[1],Math.random())+l;if(d.spawn(r,n,f),this.activeVehicles.push(d),e>.5&&Math.random()<.35&&a.length>=2){const _=a.filter(v=>v!==r);if(_.length>0){const v=_[Math.floor(Math.random()*_.length)],m=Math.random()>.5?"cow_truck":"bus",p=this.getInactiveVehicle(m);if(p){const x=n-(28+Math.random()*20),g=Wt.TRAFFIC.SPEEDS[m]||[65,80],w=Li.lerp(g[0],g[1],Math.random())+l;p.spawn(v,x,w),this.activeVehicles.push(p)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const o=this.activeVehicles[i],a=e-o.group.position.z,r=Math.abs(o.group.position.x-n);if(a>4&&a<65&&r<2.4&&!o.isYielding){o.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class B0{constructor(t){this.scene=t,this.particles=[],this.poolSize=180,this.smokeMat=new re({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new re({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new k({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new Z(.14,.14,.14),n=new M(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new F,rotVel:new F,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){for(let e=0;e<35;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="spark",n.mesh.material=this.sparkMat,n.mesh.visible=!0,n.mesh.scale.set(.12,.12,.12),n.mesh.position.copy(t);const i=Math.random()*Math.PI*2,o=6+Math.random()*14;n.vel.set(Math.cos(i)*o,3+Math.random()*10,Math.sin(i)*o),n.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),n.life=0,n.maxLife=.7+Math.random()*.5,n.scaleSpeed=-.5}for(let e=0;e<20;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="debris",n.mesh.material=this.debrisMat,n.mesh.visible=!0,n.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),n.mesh.position.copy(t),n.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),n.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),n.life=0,n.maxLife=1.2,n.scaleSpeed=0}for(let e=0;e<25;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="smoke",n.mesh.material=this.smokeMat,n.mesh.visible=!0,n.mesh.scale.set(.8,.8,.8),n.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),n.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),n.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),n.life=0,n.maxLife=1.4,n.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class G0{constructor(t){this.scene=t,this.linesCount=60,this.group=new wt;const e=new uc({color:10083839,transparent:!0,opacity:0});this.lineMat=e,this.lines=[];for(let n=0;n<this.linesCount;n++){const i=[new F(0,0,0),new F(0,0,6+Math.random()*8)],o=new De().setFromPoints(i),a=new Vp(o,e);this.resetLinePos(a),this.group.add(a),this.lines.push(a)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const o=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=o*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const a=t.group.position.z,r=t.group.position.x;this.group.position.set(r,0,a);const c=e/60*i*50;this.lines.forEach(h=>{h.position.z+=c,h.position.z>5&&this.resetLinePos(h)})}}class k0{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),o=document.getElementById("btn-gameover-restart");[i,o].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const a=document.getElementById("btn-pause-menu"),r=document.getElementById("btn-gameover-menu");[a,r].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(l=>{l.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),h=document.getElementById("btn-how-to-play"),d=document.getElementById("btn-modal-close");h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),d&&c&&d.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")});const u=document.querySelectorAll(".veh-btn");u.forEach(l=>{l.addEventListener("click",()=>{u.forEach(f=>f.classList.remove("active")),l.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(l.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(l=>{l.addEventListener("click",f=>{f.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),o=document.getElementById("btn-touch-nitro"),a=document.getElementById("btn-touch-horn");if(document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(r=>{r.addEventListener("contextmenu",c=>c.preventDefault())}),t&&t.addEventListener("pointerdown",r=>{r.preventDefault(),document.body.classList.add("touch-active"),this.onSteerLeft&&this.onSteerLeft()}),e&&e.addEventListener("pointerdown",r=>{r.preventDefault(),document.body.classList.add("touch-active"),this.onSteerRight&&this.onSteerRight()}),n){const r=c=>{document.body.classList.add("touch-active"),this.onBrake&&this.onBrake(c),c&&this.soundManager.playAirBrake()};n.addEventListener("pointerdown",c=>{c.preventDefault(),r(!0)}),n.addEventListener("pointerup",()=>r(!1)),n.addEventListener("pointerleave",()=>r(!1)),n.addEventListener("pointercancel",()=>r(!1))}if(i){const r=c=>{document.body.classList.add("touch-active"),this.onAccelerate&&this.onAccelerate(c)};i.addEventListener("pointerdown",c=>{c.preventDefault(),r(!0)}),i.addEventListener("pointerup",()=>r(!1)),i.addEventListener("pointerleave",()=>r(!1)),i.addEventListener("pointercancel",()=>r(!1))}if(o){const r=c=>{document.body.classList.add("touch-active"),this.onNitro&&this.onNitro(c)};o.addEventListener("pointerdown",c=>{c.preventDefault(),r(!0)}),o.addEventListener("pointerup",()=>r(!1)),o.addEventListener("pointerleave",()=>r(!1)),o.addEventListener("pointercancel",()=>r(!1))}a&&a.addEventListener("pointerdown",r=>{r.preventDefault(),this.onHorn?this.onHorn():this.soundManager.playTruckHorn()}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===he.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case he.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case he.PLAYING:this.hudLayer.classList.remove("hidden");break;case he.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case he.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){if(this.scoreVal&&(this.scoreVal.innerText=t.score.toLocaleString()),this.distVal&&(this.distVal.innerText=`${(t.distanceMeters/1e3).toFixed(2)} km`),this.speedVal&&(this.speedVal.innerText=Math.round(t.speedKmh)),this.nitroBar){const e=t.nitro/100*100;this.nitroBar.style.width=`${e}%`,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting")}}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class z0{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new T0,this.inputManager=new A0,this.soundManager=new P0,this.uiManager=new k0(this.soundManager),this.scene=new zp,this.camera=new Ge(Wt.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.renderer=new dc({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=La,this.renderer.toneMapping=Da,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new N0(this.scene),this.roadManager=new U0(this.scene),this.vehicles={truck:new C0,rickshaw:new L0,cng:new I0},Object.values(this.vehicles).forEach(t=>{this.scene.add(t.group),t.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new F0(this.scene),this.particleSystem=new B0(this.scene),this.speedLines=new G0(this.scene),this.cameraController=new R0(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new b0,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(he.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=e=>this.setVehicle(e);const t=()=>{this.gameState.state===he.PLAYING?(this.gameState.state=he.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(he.PAUSED,this.gameState)):this.gameState.state===he.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=t,this.inputManager.onPauseToggle=t,this.inputManager.onRestart=()=>{(this.gameState.state===he.GAMEOVER||this.gameState.state===he.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=()=>this.inputManager.triggerSteerLeft(),this.uiManager.onSteerRight=()=>this.inputManager.triggerSteerRight(),this.uiManager.onAccelerate=e=>this.inputManager.setAccelerate(e),this.uiManager.onBrake=e=>this.inputManager.setBrake(e),this.uiManager.onNitro=e=>this.inputManager.setNitro(e)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(he.PLAYING,this.gameState)}resumeGame(){this.gameState.state===he.PAUSED&&(this.gameState.state=he.PLAYING,this.uiManager.setScreen(he.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=he.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(he.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(he.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===he.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===he.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const o=this.inputManager.keys.brake;o&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=o,this.gameState.update(e,this.inputManager);const a=this.gameState.speedKmh*1e3/3600;if(this.playerVehicle.group.position.z-=a*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,o,this.gameState.isBoosting,e),o&&this.gameState.speedKmh>50){const c=this.playerVehicle.group.position.clone();c.x-=.85,c.z+=1.6;const h=this.playerVehicle.group.position.clone();h.x+=.85,h.z+=1.6,this.particleSystem.emitTireSmoke(c),this.particleSystem.emitTireSmoke(h)}this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const h=this.gameState.addNearMiss();this.soundManager.playNearMiss(h.combo),this.uiManager.showNearMiss(h.bonus,h.combo)});const r=this.trafficManager.checkCollision(this.playerVehicle);r&&this.onCrash(r),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,o,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===he.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new z0});
//# sourceMappingURL=index-CjJSWMH1.js.map
