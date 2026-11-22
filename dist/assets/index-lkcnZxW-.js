(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="160",bc=0,tr=1,Ec=2,Go=1,Ia=2,vn=3,Fn=0,He=1,Te=2,Dn=0,Si=1,er=2,nr=3,ir=4,Tc=5,qn=100,Ac=101,Rc=102,sr=103,or=104,Pc=200,Cc=201,Lc=202,Ic=203,Ao=204,Ro=205,Dc=206,Uc=207,Nc=208,Fc=209,Oc=210,Gc=211,Bc=212,kc=213,zc=214,Vc=0,Hc=1,Wc=2,Ts=3,Xc=4,qc=5,Yc=6,Zc=7,Da=0,Kc=1,Jc=2,Un=0,jc=1,$c=2,Qc=3,Ua=4,tl=5,el=6,Na=300,bi=301,Ei=302,Po=303,Co=304,Us=306,ve=1e3,sn=1001,Lo=1002,Ve=1003,rr=1004,Xs=1005,je=1006,nl=1007,Xi=1008,Nn=1009,il=1010,sl=1011,Bo=1012,Fa=1013,Ln=1014,In=1015,qi=1016,Oa=1017,Ga=1018,Zn=1020,ol=1021,on=1023,rl=1024,al=1025,Kn=1026,Ti=1027,cl=1028,Ba=1029,ll=1030,ka=1031,za=1033,qs=33776,Ys=33777,Zs=33778,Ks=33779,ar=35840,cr=35841,lr=35842,hr=35843,Va=36196,dr=37492,ur=37496,fr=37808,pr=37809,mr=37810,gr=37811,_r=37812,Mr=37813,vr=37814,wr=37815,xr=37816,Sr=37817,yr=37818,br=37819,Er=37820,Tr=37821,Js=36492,Ar=36494,Rr=36495,hl=36283,Pr=36284,Cr=36285,Lr=36286,Ha=3e3,Jn=3001,dl=3200,ul=3201,Wa=0,fl=1,$e="",Ne="srgb",Sn="srgb-linear",ko="display-p3",Ns="display-p3-linear",As="linear",Me="srgb",Rs="rec709",Ps="p3",ni=7680,Ir=519,pl=512,ml=513,gl=514,Xa=515,_l=516,Ml=517,vl=518,wl=519,Dr=35044,Ur="300 es",Io=1035,xn=2e3,Cs=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nr=1234567;const Bi=Math.PI/180,Ai=180/Math.PI;function ei(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function zo(s,t){return(s%t+t)%t}function xl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Sl(s,t,e){return s!==t?(e-s)/(t-s):0}function ki(s,t,e){return(1-e)*s+e*t}function yl(s,t,e,n){return ki(s,t,1-Math.exp(-e*n))}function bl(s,t=1){return t-Math.abs(zo(s,t*2)-t)}function El(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Tl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Al(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Rl(s,t){return s+Math.random()*(t-s)}function Pl(s){return s*(.5-Math.random())}function Cl(s){s!==void 0&&(Nr=s);let t=Nr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ll(s){return s*Bi}function Il(s){return s*Ai}function Do(s){return(s&s-1)===0&&s!==0}function Dl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ls(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ul(s,t,e,n,i){const o=Math.cos,a=Math.sin,r=o(e/2),c=a(e/2),h=o((t+n)/2),d=a((t+n)/2),f=o((t-n)/2),l=a((t-n)/2),u=o((n-t)/2),g=a((n-t)/2);switch(i){case"XYX":s.set(r*d,c*f,c*l,r*h);break;case"YZY":s.set(c*l,r*d,c*f,r*h);break;case"ZXZ":s.set(c*f,c*l,r*d,r*h);break;case"XZX":s.set(r*d,c*g,c*u,r*h);break;case"YXY":s.set(c*u,r*d,c*g,r*h);break;case"ZYZ":s.set(c*g,c*u,r*d,r*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Di={DEG2RAD:Bi,RAD2DEG:Ai,generateUUID:ei,clamp:Ue,euclideanModulo:zo,mapLinear:xl,inverseLerp:Sl,lerp:ki,damp:yl,pingpong:bl,smoothstep:El,smootherstep:Tl,randInt:Al,randFloat:Rl,randFloatSpread:Pl,seededRandom:Cl,degToRad:Ll,radToDeg:Il,isPowerOfTwo:Do,ceilPowerOfTwo:Dl,floorPowerOfTwo:Ls,setQuaternionFromProperEuler:Ul,normalize:ke,denormalize:Mi};class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*i+t.x,this.y=o*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,n,i,o,a,r,c,h){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,h)}set(t,e,n,i,o,a,r,c,h){const d=this.elements;return d[0]=t,d[1]=i,d[2]=r,d[3]=e,d[4]=o,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[3],c=n[6],h=n[1],d=n[4],f=n[7],l=n[2],u=n[5],g=n[8],w=i[0],m=i[3],p=i[6],v=i[1],_=i[4],S=i[7],P=i[2],L=i[5],I=i[8];return o[0]=a*w+r*v+c*P,o[3]=a*m+r*_+c*L,o[6]=a*p+r*S+c*I,o[1]=h*w+d*v+f*P,o[4]=h*m+d*_+f*L,o[7]=h*p+d*S+f*I,o[2]=l*w+u*v+g*P,o[5]=l*m+u*_+g*L,o[8]=l*p+u*S+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*r*h-n*o*d+n*r*c+i*o*h-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8],f=d*a-r*h,l=r*c-d*o,u=h*o-a*c,g=e*f+n*l+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/g;return t[0]=f*w,t[1]=(i*h-d*n)*w,t[2]=(r*n-i*a)*w,t[3]=l*w,t[4]=(d*e-i*c)*w,t[5]=(i*o-r*e)*w,t[6]=u*w,t[7]=(n*c-h*e)*w,t[8]=(a*e-n*o)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,a,r){const c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*a+h*r)+a+t,-i*h,i*c,-i*(-h*a+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(js.makeScale(t,e)),this}rotate(t){return this.premultiply(js.makeRotation(-t)),this}translate(t,e){return this.premultiply(js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const js=new ce;function qa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nl(){const s=Is("canvas");return s.style.display="block",s}const Fr={};function zi(s){s in Fr||(Fr[s]=!0,console.warn(s))}const Or=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gr=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$i={[Sn]:{transfer:As,primaries:Rs,toReference:s=>s,fromReference:s=>s},[Ne]:{transfer:Me,primaries:Rs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ns]:{transfer:As,primaries:Ps,toReference:s=>s.applyMatrix3(Gr),fromReference:s=>s.applyMatrix3(Or)},[ko]:{transfer:Me,primaries:Ps,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Gr),fromReference:s=>s.applyMatrix3(Or).convertLinearToSRGB()}},Fl=new Set([Sn,Ns]),ge={enabled:!0,_workingColorSpace:Sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Fl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=$i[t].toReference,i=$i[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return $i[s].primaries},getTransfer:function(s){return s===$e?As:$i[s].transfer}};function yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ii;class Ya{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Is("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=yi(o[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ol=0;class Za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push(Qs(i[a].image)):o.push(Qs(i[a]))}else o=Qs(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Qs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ya.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gl=0;class Xe extends Pi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=sn,i=sn,o=je,a=Xi,r=on,c=Nn,h=Xe.DEFAULT_ANISOTROPY,d=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=ei(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Jn?Ne:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Na)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ve:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ve:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?Jn:Ha}set encoding(t){zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Jn?Ne:$e}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Na;Xe.DEFAULT_ANISOTROPY=1;class we{constructor(t=0,e=0,n=0,i=1){we.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,h=c[0],d=c[4],f=c[8],l=c[1],u=c[5],g=c[9],w=c[2],m=c[6],p=c[10];if(Math.abs(d-l)<.01&&Math.abs(f-w)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+l)<.1&&Math.abs(f+w)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(h+1)/2,S=(u+1)/2,P=(p+1)/2,L=(d+l)/4,I=(f+w)/4,B=(g+m)/4;return _>S&&_>P?_<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(_),i=L/n,o=I/n):S>P?S<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(S),n=L/i,o=B/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=I/o,i=B/o),this.set(n,i,o,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-w)*(f-w)+(l-d)*(l-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-w)/v,this.z=(l-d)/v,this.w=Math.acos((h+u+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bl extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new we(0,0,t,e),this.scissorTest=!1,this.viewport=new we(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?Ne:$e),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ka extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,a,r){let c=n[i+0],h=n[i+1],d=n[i+2],f=n[i+3];const l=o[a+0],u=o[a+1],g=o[a+2],w=o[a+3];if(r===0){t[e+0]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f;return}if(r===1){t[e+0]=l,t[e+1]=u,t[e+2]=g,t[e+3]=w;return}if(f!==w||c!==l||h!==u||d!==g){let m=1-r;const p=c*l+h*u+d*g+f*w,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const P=Math.sqrt(_),L=Math.atan2(P,p*v);m=Math.sin(m*L)/P,r=Math.sin(r*L)/P}const S=r*v;if(c=c*m+l*S,h=h*m+u*S,d=d*m+g*S,f=f*m+w*S,m===1-r){const P=1/Math.sqrt(c*c+h*h+d*d+f*f);c*=P,h*=P,d*=P,f*=P}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,a){const r=n[i],c=n[i+1],h=n[i+2],d=n[i+3],f=o[a],l=o[a+1],u=o[a+2],g=o[a+3];return t[e]=r*g+d*f+c*u-h*l,t[e+1]=c*g+d*l+h*f-r*u,t[e+2]=h*g+d*u+r*l-c*f,t[e+3]=d*g-r*f-c*l-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,a=t._order,r=Math.cos,c=Math.sin,h=r(n/2),d=r(i/2),f=r(o/2),l=c(n/2),u=c(i/2),g=c(o/2);switch(a){case"XYZ":this._x=l*d*f+h*u*g,this._y=h*u*f-l*d*g,this._z=h*d*g+l*u*f,this._w=h*d*f-l*u*g;break;case"YXZ":this._x=l*d*f+h*u*g,this._y=h*u*f-l*d*g,this._z=h*d*g-l*u*f,this._w=h*d*f+l*u*g;break;case"ZXY":this._x=l*d*f-h*u*g,this._y=h*u*f+l*d*g,this._z=h*d*g+l*u*f,this._w=h*d*f-l*u*g;break;case"ZYX":this._x=l*d*f-h*u*g,this._y=h*u*f+l*d*g,this._z=h*d*g-l*u*f,this._w=h*d*f+l*u*g;break;case"YZX":this._x=l*d*f+h*u*g,this._y=h*u*f+l*d*g,this._z=h*d*g-l*u*f,this._w=h*d*f-l*u*g;break;case"XZY":this._x=l*d*f-h*u*g,this._y=h*u*f-l*d*g,this._z=h*d*g+l*u*f,this._w=h*d*f+l*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],a=e[1],r=e[5],c=e[9],h=e[2],d=e[6],f=e[10],l=n+r+f;if(l>0){const u=.5/Math.sqrt(l+1);this._w=.25/u,this._x=(d-c)*u,this._y=(o-h)*u,this._z=(a-i)*u}else if(n>r&&n>f){const u=2*Math.sqrt(1+n-r-f);this._w=(d-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(o+h)/u}else if(r>f){const u=2*Math.sqrt(1+r-n-f);this._w=(o-h)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+f-n-r);this._w=(a-i)/u,this._x=(o+h)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,a=t._w,r=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+a*r+i*h-o*c,this._y=i*d+a*c+o*r-n*h,this._z=o*d+a*h+n*c-i*r,this._w=a*d-n*r-i*c-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const c=1-r*r;if(c<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,r),f=Math.sin((1-e)*d)/h,l=Math.sin(e*d)/h;return this._w=a*f+this._w*l,this._x=n*f+this._x*l,this._y=i*f+this._y*l,this._z=o*f+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(o),n*Math.cos(o),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Br.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Br.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,a=t.y,r=t.z,c=t.w,h=2*(a*i-r*n),d=2*(r*e-o*i),f=2*(o*n-a*e);return this.x=e+c*h+a*f-r*d,this.y=n+c*d+r*h-o*f,this.z=i+c*f+o*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,a=e.x,r=e.y,c=e.z;return this.x=i*c-o*r,this.y=o*a-n*c,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new U,Br=new Ji;class yn{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(o,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}const i=t.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),ts.subVectors(this.max,Ui),si.subVectors(t.a,Ui),oi.subVectors(t.b,Ui),ri.subVectors(t.c,Ui),En.subVectors(oi,si),Tn.subVectors(ri,oi),kn.subVectors(si,ri);let e=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-kn.z,kn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,kn.z,0,-kn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-kn.y,kn.x,0];return!eo(e,si,oi,ri,ts)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,si,oi,ri,ts))?!1:(es.crossVectors(En,Tn),e=[es.x,es.y,es.z],eo(e,si,oi,ri,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new U,new U,new U,new U,new U,new U,new U,new U],Qe=new U,Qi=new yn,si=new U,oi=new U,ri=new U,En=new U,Tn=new U,kn=new U,Ui=new U,ts=new U,es=new U,zn=new U;function eo(s,t,e,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){zn.fromArray(s,o);const r=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),c=t.dot(zn),h=e.dot(zn),d=n.dot(zn);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>r)return!1}return!0}const zl=new yn,Ni=new U,no=new U;class Fs{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zl.setFromPoints(t).getCenter(n);let i=0;for(let o=0,a=t.length;o<a;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);const e=Ni.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(no)),this.expandByPoint(Ni.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new U,io=new U,ns=new U,An=new U,so=new U,is=new U,oo=new U;class Ja{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){io.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),An.copy(this.origin).sub(io);const o=t.distanceTo(e)*.5,a=-this.direction.dot(ns),r=An.dot(this.direction),c=-An.dot(ns),h=An.lengthSq(),d=Math.abs(1-a*a);let f,l,u,g;if(d>0)if(f=a*c-r,l=a*r-c,g=o*d,f>=0)if(l>=-g)if(l<=g){const w=1/d;f*=w,l*=w,u=f*(f+a*l+2*r)+l*(a*f+l+2*c)+h}else l=o,f=Math.max(0,-(a*l+r)),u=-f*f+l*(l+2*c)+h;else l=-o,f=Math.max(0,-(a*l+r)),u=-f*f+l*(l+2*c)+h;else l<=-g?(f=Math.max(0,-(-a*o+r)),l=f>0?-o:Math.min(Math.max(-o,-c),o),u=-f*f+l*(l+2*c)+h):l<=g?(f=0,l=Math.min(Math.max(-o,-c),o),u=l*(l+2*c)+h):(f=Math.max(0,-(a*o+r)),l=f>0?o:Math.min(Math.max(-o,-c),o),u=-f*f+l*(l+2*c)+h);else l=a>0?-o:o,f=Math.max(0,-(a*l+r)),u=-f*f+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(io).addScaledVector(ns,l),u}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,o=t.radius*t.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,c=n+a;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,a,r,c;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,l=this.origin;return h>=0?(n=(t.min.x-l.x)*h,i=(t.max.x-l.x)*h):(n=(t.max.x-l.x)*h,i=(t.min.x-l.x)*h),d>=0?(o=(t.min.y-l.y)*d,a=(t.max.y-l.y)*d):(o=(t.max.y-l.y)*d,a=(t.min.y-l.y)*d),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),f>=0?(r=(t.min.z-l.z)*f,c=(t.max.z-l.z)*f):(r=(t.max.z-l.z)*f,c=(t.min.z-l.z)*f),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,o){so.subVectors(e,t),is.subVectors(n,t),oo.crossVectors(so,is);let a=this.direction.dot(oo),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;An.subVectors(this.origin,t);const c=r*this.direction.dot(is.crossVectors(An,is));if(c<0)return null;const h=r*this.direction.dot(so.cross(An));if(h<0||c+h>a)return null;const d=-r*An.dot(oo);return d<0?null:this.at(d/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,i,o,a,r,c,h,d,f,l,u,g,w,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,h,d,f,l,u,g,w,m)}set(t,e,n,i,o,a,r,c,h,d,f,l,u,g,w,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=a,p[9]=r,p[13]=c,p[2]=h,p[6]=d,p[10]=f,p[14]=l,p[3]=u,p[7]=g,p[11]=w,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ai.setFromMatrixColumn(t,0).length(),o=1/ai.setFromMatrixColumn(t,1).length(),a=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),c=Math.cos(i),h=Math.sin(i),d=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const l=a*d,u=a*f,g=r*d,w=r*f;e[0]=c*d,e[4]=-c*f,e[8]=h,e[1]=u+g*h,e[5]=l-w*h,e[9]=-r*c,e[2]=w-l*h,e[6]=g+u*h,e[10]=a*c}else if(t.order==="YXZ"){const l=c*d,u=c*f,g=h*d,w=h*f;e[0]=l+w*r,e[4]=g*r-u,e[8]=a*h,e[1]=a*f,e[5]=a*d,e[9]=-r,e[2]=u*r-g,e[6]=w+l*r,e[10]=a*c}else if(t.order==="ZXY"){const l=c*d,u=c*f,g=h*d,w=h*f;e[0]=l-w*r,e[4]=-a*f,e[8]=g+u*r,e[1]=u+g*r,e[5]=a*d,e[9]=w-l*r,e[2]=-a*h,e[6]=r,e[10]=a*c}else if(t.order==="ZYX"){const l=a*d,u=a*f,g=r*d,w=r*f;e[0]=c*d,e[4]=g*h-u,e[8]=l*h+w,e[1]=c*f,e[5]=w*h+l,e[9]=u*h-g,e[2]=-h,e[6]=r*c,e[10]=a*c}else if(t.order==="YZX"){const l=a*c,u=a*h,g=r*c,w=r*h;e[0]=c*d,e[4]=w-l*f,e[8]=g*f+u,e[1]=f,e[5]=a*d,e[9]=-r*d,e[2]=-h*d,e[6]=u*f+g,e[10]=l-w*f}else if(t.order==="XZY"){const l=a*c,u=a*h,g=r*c,w=r*h;e[0]=c*d,e[4]=-f,e[8]=h*d,e[1]=l*f+w,e[5]=a*d,e[9]=u*f-g,e[2]=g*f-u,e[6]=r*d,e[10]=w*f+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vl,t,Hl)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Rn.crossVectors(n,Ye),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Rn.crossVectors(n,Ye)),Rn.normalize(),ss.crossVectors(Ye,Rn),i[0]=Rn.x,i[4]=ss.x,i[8]=Ye.x,i[1]=Rn.y,i[5]=ss.y,i[9]=Ye.y,i[2]=Rn.z,i[6]=ss.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[4],c=n[8],h=n[12],d=n[1],f=n[5],l=n[9],u=n[13],g=n[2],w=n[6],m=n[10],p=n[14],v=n[3],_=n[7],S=n[11],P=n[15],L=i[0],I=i[4],B=i[8],y=i[12],x=i[1],T=i[5],F=i[9],nt=i[13],N=i[2],W=i[6],Y=i[10],z=i[14],st=i[3],j=i[7],X=i[11],$=i[15];return o[0]=a*L+r*x+c*N+h*st,o[4]=a*I+r*T+c*W+h*j,o[8]=a*B+r*F+c*Y+h*X,o[12]=a*y+r*nt+c*z+h*$,o[1]=d*L+f*x+l*N+u*st,o[5]=d*I+f*T+l*W+u*j,o[9]=d*B+f*F+l*Y+u*X,o[13]=d*y+f*nt+l*z+u*$,o[2]=g*L+w*x+m*N+p*st,o[6]=g*I+w*T+m*W+p*j,o[10]=g*B+w*F+m*Y+p*X,o[14]=g*y+w*nt+m*z+p*$,o[3]=v*L+_*x+S*N+P*st,o[7]=v*I+_*T+S*W+P*j,o[11]=v*B+_*F+S*Y+P*X,o[15]=v*y+_*nt+S*z+P*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],a=t[1],r=t[5],c=t[9],h=t[13],d=t[2],f=t[6],l=t[10],u=t[14],g=t[3],w=t[7],m=t[11],p=t[15];return g*(+o*c*f-i*h*f-o*r*l+n*h*l+i*r*u-n*c*u)+w*(+e*c*u-e*h*l+o*a*l-i*a*u+i*h*d-o*c*d)+m*(+e*h*f-e*r*u-o*a*f+n*a*u+o*r*d-n*h*d)+p*(-i*r*d-e*c*f+e*r*l+i*a*f-n*a*l+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8],f=t[9],l=t[10],u=t[11],g=t[12],w=t[13],m=t[14],p=t[15],v=f*m*h-w*l*h+w*c*u-r*m*u-f*c*p+r*l*p,_=g*l*h-d*m*h-g*c*u+a*m*u+d*c*p-a*l*p,S=d*w*h-g*f*h+g*r*u-a*w*u-d*r*p+a*f*p,P=g*f*c-d*w*c-g*r*l+a*w*l+d*r*m-a*f*m,L=e*v+n*_+i*S+o*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=v*I,t[1]=(w*l*o-f*m*o-w*i*u+n*m*u+f*i*p-n*l*p)*I,t[2]=(r*m*o-w*c*o+w*i*h-n*m*h-r*i*p+n*c*p)*I,t[3]=(f*c*o-r*l*o-f*i*h+n*l*h+r*i*u-n*c*u)*I,t[4]=_*I,t[5]=(d*m*o-g*l*o+g*i*u-e*m*u-d*i*p+e*l*p)*I,t[6]=(g*c*o-a*m*o-g*i*h+e*m*h+a*i*p-e*c*p)*I,t[7]=(a*l*o-d*c*o+d*i*h-e*l*h-a*i*u+e*c*u)*I,t[8]=S*I,t[9]=(g*f*o-d*w*o-g*n*u+e*w*u+d*n*p-e*f*p)*I,t[10]=(a*w*o-g*r*o+g*n*h-e*w*h-a*n*p+e*r*p)*I,t[11]=(d*r*o-a*f*o-d*n*h+e*f*h+a*n*u-e*r*u)*I,t[12]=P*I,t[13]=(d*w*i-g*f*i+g*n*l-e*w*l-d*n*m+e*f*m)*I,t[14]=(g*r*i-a*w*i-g*n*c+e*w*c+a*n*m-e*r*m)*I,t[15]=(a*f*i-d*r*i+d*n*c-e*f*c-a*n*l+e*r*l)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,a=t.x,r=t.y,c=t.z,h=o*a,d=o*r;return this.set(h*a+n,h*r-i*c,h*c+i*r,0,h*r+i*c,d*r+n,d*c-i*a,0,h*c-i*r,d*c+i*a,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,a){return this.set(1,n,o,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,a=e._y,r=e._z,c=e._w,h=o+o,d=a+a,f=r+r,l=o*h,u=o*d,g=o*f,w=a*d,m=a*f,p=r*f,v=c*h,_=c*d,S=c*f,P=n.x,L=n.y,I=n.z;return i[0]=(1-(w+p))*P,i[1]=(u+S)*P,i[2]=(g-_)*P,i[3]=0,i[4]=(u-S)*L,i[5]=(1-(l+p))*L,i[6]=(m+v)*L,i[7]=0,i[8]=(g+_)*I,i[9]=(m-v)*I,i[10]=(1-(l+w))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=ai.set(i[0],i[1],i[2]).length();const a=ai.set(i[4],i[5],i[6]).length(),r=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const h=1/o,d=1/a,f=1/r;return tn.elements[0]*=h,tn.elements[1]*=h,tn.elements[2]*=h,tn.elements[4]*=d,tn.elements[5]*=d,tn.elements[6]*=d,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,e.setFromRotationMatrix(tn),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,i,o,a,r=xn){const c=this.elements,h=2*o/(e-t),d=2*o/(n-i),f=(e+t)/(e-t),l=(n+i)/(n-i);let u,g;if(r===xn)u=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===Cs)u=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,a,r=xn){const c=this.elements,h=1/(e-t),d=1/(n-i),f=1/(a-o),l=(e+t)*h,u=(n+i)*d;let g,w;if(r===xn)g=(a+o)*f,w=-2*f;else if(r===Cs)g=o*f,w=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=w,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ai=new U,tn=new be,Vl=new U(0,0,0),Hl=new U(1,1,1),Rn=new U,ss=new U,Ye=new U,kr=new be,zr=new Ji;class Os{constructor(t=0,e=0,n=0,i=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],a=i[4],r=i[8],c=i[1],h=i[5],d=i[9],f=i[2],l=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(l,u),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(r,u));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zr.setFromEuler(this),this.setFromQuaternion(zr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wl=0;const Vr=new U,ci=new Ji,gn=new be,os=new U,Fi=new U,Xl=new U,ql=new Ji,Hr=new U(1,0,0),Wr=new U(0,1,0),Xr=new U(0,0,1),Yl={type:"added"},Zl={type:"removed"};class Re extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new U,e=new Os,n=new Ji,i=new U(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new ce}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Hr,t)}rotateY(t){return this.rotateOnAxis(Wr,t)}rotateZ(t){return this.rotateOnAxis(Xr,t)}translateOnAxis(t,e){return Vr.copy(t).applyQuaternion(this.quaternion),this.position.add(Vr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hr,t)}translateY(t){return this.translateOnAxis(Wr,t)}translateZ(t){return this.translateOnAxis(Xr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?os.copy(t):os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Fi,os,this.up):gn.lookAt(os,Fi,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(gn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,Xl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++){const r=i[o];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,h=this.material.length;c<h;c++)r.push(o(t.materials,this.material[c]));i.material=r}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(o(t.animations,c))}}if(e){const r=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),f=a(t.shapes),l=a(t.skeletons),u=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),l.length>0&&(n.skeletons=l),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(r){const c=[];for(const h in r){const d=r[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Re.DEFAULT_UP=new U(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new U,_n=new U,ro=new U,Mn=new U,li=new U,hi=new U,qr=new U,ao=new U,co=new U,lo=new U;let rs=!1;class nn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){en.subVectors(i,e),_n.subVectors(n,e),ro.subVectors(t,e);const a=en.dot(en),r=en.dot(_n),c=en.dot(ro),h=_n.dot(_n),d=_n.dot(ro),f=a*h-r*r;if(f===0)return o.set(0,0,0),null;const l=1/f,u=(h*c-r*d)*l,g=(a*d-r*c)*l;return o.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,i,o,a,r,c){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),this.getInterpolation(t,e,n,i,o,a,r,c)}static getInterpolation(t,e,n,i,o,a,r,c){return this.getBarycoord(t,e,n,i,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(r,Mn.z),c)}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),_n.subVectors(t,e),en.cross(_n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),en.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,o){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}getInterpolation(t,e,n,i,o){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let a,r;li.subVectors(i,n),hi.subVectors(o,n),ao.subVectors(t,n);const c=li.dot(ao),h=hi.dot(ao);if(c<=0&&h<=0)return e.copy(n);co.subVectors(t,i);const d=li.dot(co),f=hi.dot(co);if(d>=0&&f<=d)return e.copy(i);const l=c*f-d*h;if(l<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(li,a);lo.subVectors(t,o);const u=li.dot(lo),g=hi.dot(lo);if(g>=0&&u<=g)return e.copy(o);const w=u*h-c*g;if(w<=0&&h>=0&&g<=0)return r=h/(h-g),e.copy(n).addScaledVector(hi,r);const m=d*g-u*f;if(m<=0&&f-d>=0&&u-g>=0)return qr.subVectors(o,i),r=(f-d)/(f-d+(u-g)),e.copy(i).addScaledVector(qr,r);const p=1/(m+w+l);return a=w*p,r=l*p,e.copy(n).addScaledVector(li,a).addScaledVector(hi,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $a={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},as={h:0,s:0,l:0};function ho(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=zo(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=ho(a,o,t+1/3),this.g=ho(a,o,t),this.b=ho(a,o,t-1/3)}return ge.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=$a[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ge.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ue(Be.r*255,0,255))*65536+Math.round(Ue(Be.g*255,0,255))*256+Math.round(Ue(Be.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,o=Be.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let c,h;const d=(r+a)/2;if(r===a)c=0,h=0;else{const f=a-r;switch(h=d<=.5?f/(a+r):f/(2-a-r),a){case n:c=(i-o)/f+(i<o?6:0);break;case i:c=(o-n)/f+2;break;case o:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ne){ge.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(as);const n=ki(Pn.h,as.h,e),i=ki(Pn.s,as.s,e),o=ki(Pn.l,as.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new le;le.NAMES=$a;let Kl=0;class Ci extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Si,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Ro,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ir,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ir&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const c=o[r];delete c.metadata,a.push(c)}return a}if(e){const o=i(t.textures),a=i(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class he extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new U,cs=new Dt;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix3(t),this.setXY(e,cs.x,cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),o=ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dr&&(t.usage=this.usage),t}}class Qa extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tc extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jl=0;const Je=new be,uo=new Re,di=new U,Ze=new yn,Oi=new yn,De=new U;class Fe extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qa(t)?tc:Qa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ce().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Ze.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Oi.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(Ze.min,Oi.min),Ze.expandByPoint(De),De.addVectors(Ze.max,Oi.max),Ze.expandByPoint(De)):(Ze.expandByPoint(Oi.min),Ze.expandByPoint(Oi.max))}Ze.getCenter(n);let i=0;for(let o=0,a=t.count;o<a;o++)De.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(De));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],c=this.morphTargetsRelative;for(let h=0,d=r.count;h<d;h++)De.fromBufferAttribute(r,h),c&&(di.fromBufferAttribute(t,h),De.add(di)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,o=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,h=[],d=[];for(let x=0;x<r;x++)h[x]=new U,d[x]=new U;const f=new U,l=new U,u=new U,g=new Dt,w=new Dt,m=new Dt,p=new U,v=new U;function _(x,T,F){f.fromArray(i,x*3),l.fromArray(i,T*3),u.fromArray(i,F*3),g.fromArray(a,x*2),w.fromArray(a,T*2),m.fromArray(a,F*2),l.sub(f),u.sub(f),w.sub(g),m.sub(g);const nt=1/(w.x*m.y-m.x*w.y);isFinite(nt)&&(p.copy(l).multiplyScalar(m.y).addScaledVector(u,-w.y).multiplyScalar(nt),v.copy(u).multiplyScalar(w.x).addScaledVector(l,-m.x).multiplyScalar(nt),h[x].add(p),h[T].add(p),h[F].add(p),d[x].add(v),d[T].add(v),d[F].add(v))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let x=0,T=S.length;x<T;++x){const F=S[x],nt=F.start,N=F.count;for(let W=nt,Y=nt+N;W<Y;W+=3)_(n[W+0],n[W+1],n[W+2])}const P=new U,L=new U,I=new U,B=new U;function y(x){I.fromArray(o,x*3),B.copy(I);const T=h[x];P.copy(T),P.sub(I.multiplyScalar(I.dot(T))).normalize(),L.crossVectors(B,T);const nt=L.dot(d[x])<0?-1:1;c[x*4]=P.x,c[x*4+1]=P.y,c[x*4+2]=P.z,c[x*4+3]=nt}for(let x=0,T=S.length;x<T;++x){const F=S[x],nt=F.start,N=F.count;for(let W=nt,Y=nt+N;W<Y;W+=3)y(n[W+0]),y(n[W+1]),y(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,u=n.count;l<u;l++)n.setXYZ(l,0,0,0);const i=new U,o=new U,a=new U,r=new U,c=new U,h=new U,d=new U,f=new U;if(t)for(let l=0,u=t.count;l<u;l+=3){const g=t.getX(l+0),w=t.getX(l+1),m=t.getX(l+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,w),a.fromBufferAttribute(e,m),d.subVectors(a,o),f.subVectors(i,o),d.cross(f),r.fromBufferAttribute(n,g),c.fromBufferAttribute(n,w),h.fromBufferAttribute(n,m),r.add(d),c.add(d),h.add(d),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(w,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,u=e.count;l<u;l+=3)i.fromBufferAttribute(e,l+0),o.fromBufferAttribute(e,l+1),a.fromBufferAttribute(e,l+2),d.subVectors(a,o),f.subVectors(i,o),d.cross(f),n.setXYZ(l+0,d.x,d.y,d.z),n.setXYZ(l+1,d.x,d.y,d.z),n.setXYZ(l+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(r,c){const h=r.array,d=r.itemSize,f=r.normalized,l=new h.constructor(c.length*d);let u=0,g=0;for(let w=0,m=c.length;w<m;w++){r.isInterleavedBufferAttribute?u=c[w]*r.data.stride+r.offset:u=c[w]*d;for(let p=0;p<d;p++)l[g++]=h[u++]}return new hn(l,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],h=t(c,n);e.setAttribute(r,h)}const o=this.morphAttributes;for(const r in o){const c=[],h=o[r];for(let d=0,f=h.length;d<f;d++){const l=h[d],u=t(l,n);c.push(u)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,c=a.length;r<c;r++){const h=a[r];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let f=0,l=h.length;f<l;f++){const u=h[f];d.push(u.toJSON(t.data))}d.length>0&&(i[c]=d,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(e))}const o=t.morphAttributes;for(const h in o){const d=[],f=o[h];for(let l=0,u=f.length;l<u;l++)d.push(f[l].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yr=new be,Vn=new Ja,ls=new Fs,Zr=new U,ui=new U,fi=new U,pi=new U,fo=new U,hs=new U,ds=new Dt,us=new Dt,fs=new Dt,Kr=new U,Jr=new U,jr=new U,ps=new U,ms=new U;class M extends Re{constructor(t=new Fe,e=new he){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(o&&r){hs.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const d=r[c],f=o[c];d!==0&&(fo.fromBufferAttribute(f,t),a?hs.addScaledVector(fo,d):hs.addScaledVector(fo.sub(e),d))}e.add(hs)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(o),Vn.copy(t.ray).recast(t.near),!(ls.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ls,Zr)===null||Vn.origin.distanceToSquared(Zr)>(t.far-t.near)**2))&&(Yr.copy(o).invert(),Vn.copy(t.ray).applyMatrix4(Yr),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,a=this.material,r=o.index,c=o.attributes.position,h=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,l=o.groups,u=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,w=l.length;g<w;g++){const m=l[g],p=a[m.materialIndex],v=Math.max(m.start,u.start),_=Math.min(r.count,Math.min(m.start+m.count,u.start+u.count));for(let S=v,P=_;S<P;S+=3){const L=r.getX(S),I=r.getX(S+1),B=r.getX(S+2);i=gs(this,p,t,n,h,d,f,L,I,B),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),w=Math.min(r.count,u.start+u.count);for(let m=g,p=w;m<p;m+=3){const v=r.getX(m),_=r.getX(m+1),S=r.getX(m+2);i=gs(this,a,t,n,h,d,f,v,_,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,w=l.length;g<w;g++){const m=l[g],p=a[m.materialIndex],v=Math.max(m.start,u.start),_=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let S=v,P=_;S<P;S+=3){const L=S,I=S+1,B=S+2;i=gs(this,p,t,n,h,d,f,L,I,B),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),w=Math.min(c.count,u.start+u.count);for(let m=g,p=w;m<p;m+=3){const v=m,_=m+1,S=m+2;i=gs(this,a,t,n,h,d,f,v,_,S),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function jl(s,t,e,n,i,o,a,r){let c;if(t.side===He?c=n.intersectTriangle(a,o,i,!0,r):c=n.intersectTriangle(i,o,a,t.side===Fn,r),c===null)return null;ms.copy(r),ms.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(ms);return h<e.near||h>e.far?null:{distance:h,point:ms.clone(),object:s}}function gs(s,t,e,n,i,o,a,r,c,h){s.getVertexPosition(r,ui),s.getVertexPosition(c,fi),s.getVertexPosition(h,pi);const d=jl(s,t,e,n,ui,fi,pi,ps);if(d){i&&(ds.fromBufferAttribute(i,r),us.fromBufferAttribute(i,c),fs.fromBufferAttribute(i,h),d.uv=nn.getInterpolation(ps,ui,fi,pi,ds,us,fs,new Dt)),o&&(ds.fromBufferAttribute(o,r),us.fromBufferAttribute(o,c),fs.fromBufferAttribute(o,h),d.uv1=nn.getInterpolation(ps,ui,fi,pi,ds,us,fs,new Dt),d.uv2=d.uv1),a&&(Kr.fromBufferAttribute(a,r),Jr.fromBufferAttribute(a,c),jr.fromBufferAttribute(a,h),d.normal=nn.getInterpolation(ps,ui,fi,pi,Kr,Jr,jr,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:r,b:c,c:h,normal:new U,materialIndex:0};nn.getNormal(ui,fi,pi,f.normal),d.face=f}return d}class H extends Fe{constructor(t=1,e=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const c=[],h=[],d=[],f=[];let l=0,u=0;g("z","y","x",-1,-1,n,e,t,a,o,0),g("z","y","x",1,-1,n,e,-t,a,o,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function g(w,m,p,v,_,S,P,L,I,B,y){const x=S/I,T=P/B,F=S/2,nt=P/2,N=L/2,W=I+1,Y=B+1;let z=0,st=0;const j=new U;for(let X=0;X<Y;X++){const $=X*T-nt;for(let pt=0;pt<W;pt++){const q=pt*x-F;j[w]=q*v,j[m]=$*_,j[p]=N,h.push(j.x,j.y,j.z),j[w]=0,j[m]=0,j[p]=L>0?1:-1,d.push(j.x,j.y,j.z),f.push(pt/I),f.push(1-X/B),z+=1}}for(let X=0;X<B;X++)for(let $=0;$<I;$++){const pt=l+$+W*X,q=l+$+W*(X+1),et=l+($+1)+W*(X+1),ut=l+($+1)+W*X;c.push(pt,q,ut),c.push(q,et,ut),st+=6}r.addGroup(u,st,y),u+=st,l+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new H(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const n=Ri(s[e]);for(const i in n)t[i]=n[i]}return t}function $l(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ec(s){return s.getRenderTarget()===null?s.outputColorSpace:ge.workingColorSpace}const Ql={clone:Ri,merge:ze};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=$l(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nc extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class We extends nc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ai*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;o+=a.offsetX*i/c,e-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class nh extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(mi,gi,t,e);i.layers=this.layers,this.add(i);const o=new We(mi,gi,t,e);o.layers=this.layers,this.add(o);const a=new We(mi,gi,t,e);a.layers=this.layers,this.add(a);const r=new We(mi,gi,t,e);r.layers=this.layers,this.add(r);const c=new We(mi,gi,t,e);c.layers=this.layers,this.add(c);const h=new We(mi,gi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,a,r,c]=e;for(const h of e)this.remove(h);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,c,h,d]=this.children,f=t.getRenderTarget(),l=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(f,l,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ic extends Xe{constructor(t,e,n,i,o,a,r,c,h,d){t=t!==void 0?t:[],e=e!==void 0?e:bi,super(t,e,n,i,o,a,r,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ih extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Jn?Ne:$e),this.texture=new ic(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new H(5,5,5),o=new $n({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Dn});o.uniforms.tEquirect.value=e;const a=new M(i,o),r=e.minFilter;return e.minFilter===Xi&&(e.minFilter=je),new nh(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(o)}}const po=new U,sh=new U,oh=new ce;class Wn{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=po.subVectors(n,e).cross(sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oh.getNormalMatrix(t),i=this.coplanarPoint(po).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Fs,_s=new U;class Vo{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,o=new Wn,a=new Wn){this.planes=[t,e,n,i,o,a]}set(t,e,n,i,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,i=t.elements,o=i[0],a=i[1],r=i[2],c=i[3],h=i[4],d=i[5],f=i[6],l=i[7],u=i[8],g=i[9],w=i[10],m=i[11],p=i[12],v=i[13],_=i[14],S=i[15];if(n[0].setComponents(c-o,l-h,m-u,S-p).normalize(),n[1].setComponents(c+o,l+h,m+u,S+p).normalize(),n[2].setComponents(c+a,l+d,m+g,S+v).normalize(),n[3].setComponents(c-a,l-d,m-g,S-v).normalize(),n[4].setComponents(c-r,l-f,m-w,S-_).normalize(),e===xn)n[5].setComponents(c+r,l+f,m+w,S+_).normalize();else if(e===Cs)n[5].setComponents(r,f,w,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(_s.x=i.normal.x>0?t.max.x:t.min.x,_s.y=i.normal.y>0?t.max.y:t.min.y,_s.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sc(){let s=null,t=!1,e=null,n=null;function i(o,a){e(o,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function rh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(h,d){const f=h.array,l=h.usage,u=f.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,f,l),h.onUploadCallback();let w;if(f instanceof Float32Array)w=s.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)w=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)w=s.SHORT;else if(f instanceof Uint32Array)w=s.UNSIGNED_INT;else if(f instanceof Int32Array)w=s.INT;else if(f instanceof Int8Array)w=s.BYTE;else if(f instanceof Uint8Array)w=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)w=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:w,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:u}}function o(h,d,f){const l=d.array,u=d._updateRange,g=d.updateRanges;if(s.bindBuffer(f,h),u.count===-1&&g.length===0&&s.bufferSubData(f,0,l),g.length!==0){for(let w=0,m=g.length;w<m;w++){const p=g[w];e?s.bufferSubData(f,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count):s.bufferSubData(f,p.start*l.BYTES_PER_ELEMENT,l.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}u.count!==-1&&(e?s.bufferSubData(f,u.offset*l.BYTES_PER_ELEMENT,l,u.offset,u.count):s.bufferSubData(f,u.offset*l.BYTES_PER_ELEMENT,l.subarray(u.offset,u.offset+u.count)),u.count=-1),d.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(s.deleteBuffer(d.buffer),n.delete(h))}function c(h,d){if(h.isGLBufferAttribute){const l=n.get(h);(!l||l.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,i(h,d));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,h,d),f.version=h.version}}return{get:a,remove:r,update:c}}class Kt extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,a=e/2,r=Math.floor(n),c=Math.floor(i),h=r+1,d=c+1,f=t/r,l=e/c,u=[],g=[],w=[],m=[];for(let p=0;p<d;p++){const v=p*l-a;for(let _=0;_<h;_++){const S=_*f-o;g.push(S,-v,0),w.push(0,0,1),m.push(_/r),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<r;v++){const _=v+h*p,S=v+h*(p+1),P=v+1+h*(p+1),L=v+1+h*p;u.push(_,S,L),u.push(S,P,L)}this.setIndex(u),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(w,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.widthSegments,t.heightSegments)}}var ah=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ch=`#ifdef USE_ALPHAHASH
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
#endif`,lh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fh=`#ifdef USE_AOMAP
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
#endif`,ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mh=`#ifdef USE_BATCHING
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
#endif`,gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,_h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mh=`vec3 objectNormal = vec3( normal );
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
} // validated`,wh=`#ifdef USE_IRIDESCENCE
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
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ch=`#define PI 3.141592653589793
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
} // validated`,Lh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ih=`vec3 transformedNormal = objectNormal;
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
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gh=`
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
#endif`,kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zh=`#ifdef USE_ENVMAP
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
#endif`,Vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hh=`#ifdef USE_ENVMAP
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
#endif`,Wh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
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
}`,Kh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Jh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qh=`uniform bool receiveShadow;
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
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,id=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
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
#endif`,rd=`struct PhysicalMaterial {
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
}`,ad=`
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
#endif`,cd=`#if defined( RE_IndirectDiffuse )
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
#endif`,ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,pd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,md=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_d=`#if defined( USE_POINTS_UV )
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
#endif`,Md=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,Sd=`#ifdef USE_MORPHTARGETS
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
#endif`,yd=`#ifdef USE_MORPHTARGETS
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
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,Td=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pd=`#ifdef USE_NORMALMAP
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
#endif`,Cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xd=`float getShadowMask() {
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
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,Zd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
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
#endif`,Jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$d=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tu=`#ifdef USE_TRANSMISSION
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
#endif`,eu=`#ifdef USE_TRANSMISSION
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
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ou=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ru=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,au=`uniform sampler2D t2D;
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
}`,cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,du=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uu=`#include <common>
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
}`,fu=`#if DEPTH_PACKING == 3200
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
}`,pu=`#define DISTANCE
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
}`,mu=`#define DISTANCE
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
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mu=`uniform float scale;
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
}`,wu=`#include <common>
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
}`,Su=`#define LAMBERT
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
}`,yu=`#define LAMBERT
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
}`,bu=`#define MATCAP
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
}`,Tu=`#define NORMAL
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
}`,Au=`#define NORMAL
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
}`,Ru=`#define PHONG
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
}`,Pu=`#define PHONG
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
}`,Cu=`#define STANDARD
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
}`,Lu=`#define STANDARD
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
}`,Iu=`#define TOON
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
}`,Du=`#define TOON
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
}`,Uu=`uniform float size;
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
}`,Nu=`uniform vec3 diffuse;
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
}`,Fu=`#include <common>
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
}`,Gu=`uniform float rotation;
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
}`,se={alphahash_fragment:ah,alphahash_pars_fragment:ch,alphamap_fragment:lh,alphamap_pars_fragment:hh,alphatest_fragment:dh,alphatest_pars_fragment:uh,aomap_fragment:fh,aomap_pars_fragment:ph,batching_pars_vertex:mh,batching_vertex:gh,begin_vertex:_h,beginnormal_vertex:Mh,bsdfs:vh,iridescence_fragment:wh,bumpmap_pars_fragment:xh,clipping_planes_fragment:Sh,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:Eh,color_fragment:Th,color_pars_fragment:Ah,color_pars_vertex:Rh,color_vertex:Ph,common:Ch,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Dh,displacementmap_vertex:Uh,emissivemap_fragment:Nh,emissivemap_pars_fragment:Fh,colorspace_fragment:Oh,colorspace_pars_fragment:Gh,envmap_fragment:Bh,envmap_common_pars_fragment:kh,envmap_pars_fragment:zh,envmap_pars_vertex:Vh,envmap_physical_pars_fragment:td,envmap_vertex:Hh,fog_vertex:Wh,fog_pars_vertex:Xh,fog_fragment:qh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Zh,lightmap_fragment:Kh,lightmap_pars_fragment:Jh,lights_lambert_fragment:jh,lights_lambert_pars_fragment:$h,lights_pars_begin:Qh,lights_toon_fragment:ed,lights_toon_pars_fragment:nd,lights_phong_fragment:id,lights_phong_pars_fragment:sd,lights_physical_fragment:od,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:cd,lights_fragment_end:ld,logdepthbuf_fragment:hd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:pd,map_pars_fragment:md,map_particle_fragment:gd,map_particle_pars_fragment:_d,metalnessmap_fragment:Md,metalnessmap_pars_fragment:vd,morphcolor_vertex:wd,morphnormal_vertex:xd,morphtarget_pars_vertex:Sd,morphtarget_vertex:yd,normal_fragment_begin:bd,normal_fragment_maps:Ed,normal_pars_fragment:Td,normal_pars_vertex:Ad,normal_vertex:Rd,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Dd,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Gd,dithering_pars_fragment:Bd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:Zd,skinnormal_vertex:Kd,specularmap_fragment:Jd,specularmap_pars_fragment:jd,tonemapping_fragment:$d,tonemapping_pars_fragment:Qd,transmission_fragment:tu,transmission_pars_fragment:eu,uv_pars_fragment:nu,uv_pars_vertex:iu,uv_vertex:su,worldpos_vertex:ou,background_vert:ru,background_frag:au,backgroundCube_vert:cu,backgroundCube_frag:lu,cube_vert:hu,cube_frag:du,depth_vert:uu,depth_frag:fu,distanceRGBA_vert:pu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:_u,linedashed_vert:Mu,linedashed_frag:vu,meshbasic_vert:wu,meshbasic_frag:xu,meshlambert_vert:Su,meshlambert_frag:yu,meshmatcap_vert:bu,meshmatcap_frag:Eu,meshnormal_vert:Tu,meshnormal_frag:Au,meshphong_vert:Ru,meshphong_frag:Pu,meshphysical_vert:Cu,meshphysical_frag:Lu,meshtoon_vert:Iu,meshtoon_frag:Du,points_vert:Uu,points_frag:Nu,shadow_vert:Fu,shadow_frag:Ou,sprite_vert:Gu,sprite_frag:Bu},Ut={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},cn={basic:{uniforms:ze([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:ze([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:ze([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:ze([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:ze([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new le(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:ze([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:ze([Ut.points,Ut.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:ze([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:ze([Ut.common,Ut.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:ze([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:ze([Ut.sprite,Ut.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:ze([Ut.common,Ut.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:ze([Ut.lights,Ut.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};cn.physical={uniforms:ze([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Ms={r:0,b:0,g:0};function ku(s,t,e,n,i,o,a){const r=new le(0);let c=o===!0?0:1,h,d,f=null,l=0,u=null;function g(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?w(r,c):_&&_.isColor&&(w(_,1),v=!0);const S=s.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Us)?(d===void 0&&(d=new M(new H(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ri(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=ge.getTransfer(_.colorSpace)!==Me,(f!==_||l!==_.version||u!==s.toneMapping)&&(d.material.needsUpdate=!0,f=_,l=_.version,u=s.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new M(new Kt(2,2),new $n({name:"BackgroundMaterial",uniforms:Ri(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ge.getTransfer(_.colorSpace)!==Me,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||l!==_.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=_,l=_.version,u=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function w(m,p){m.getRGB(Ms,ec(s)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,p,a)}return{getClearColor:function(){return r},setClearColor:function(m,p=1){r.set(m),c=p,w(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,w(r,c)},render:g}}function zu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,r={},c=m(null);let h=c,d=!1;function f(N,W,Y,z,st){let j=!1;if(a){const X=w(z,Y,W);h!==X&&(h=X,u(h.object)),j=p(N,z,Y,st),j&&v(N,z,Y,st)}else{const X=W.wireframe===!0;(h.geometry!==z.id||h.program!==Y.id||h.wireframe!==X)&&(h.geometry=z.id,h.program=Y.id,h.wireframe=X,j=!0)}st!==null&&e.update(st,s.ELEMENT_ARRAY_BUFFER),(j||d)&&(d=!1,B(N,W,Y,z),st!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(st).buffer))}function l(){return n.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function u(N){return n.isWebGL2?s.bindVertexArray(N):o.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?s.deleteVertexArray(N):o.deleteVertexArrayOES(N)}function w(N,W,Y){const z=Y.wireframe===!0;let st=r[N.id];st===void 0&&(st={},r[N.id]=st);let j=st[W.id];j===void 0&&(j={},st[W.id]=j);let X=j[z];return X===void 0&&(X=m(l()),j[z]=X),X}function m(N){const W=[],Y=[],z=[];for(let st=0;st<i;st++)W[st]=0,Y[st]=0,z[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:Y,attributeDivisors:z,object:N,attributes:{},index:null}}function p(N,W,Y,z){const st=h.attributes,j=W.attributes;let X=0;const $=Y.getAttributes();for(const pt in $)if($[pt].location>=0){const et=st[pt];let ut=j[pt];if(ut===void 0&&(pt==="instanceMatrix"&&N.instanceMatrix&&(ut=N.instanceMatrix),pt==="instanceColor"&&N.instanceColor&&(ut=N.instanceColor)),et===void 0||et.attribute!==ut||ut&&et.data!==ut.data)return!0;X++}return h.attributesNum!==X||h.index!==z}function v(N,W,Y,z){const st={},j=W.attributes;let X=0;const $=Y.getAttributes();for(const pt in $)if($[pt].location>=0){let et=j[pt];et===void 0&&(pt==="instanceMatrix"&&N.instanceMatrix&&(et=N.instanceMatrix),pt==="instanceColor"&&N.instanceColor&&(et=N.instanceColor));const ut={};ut.attribute=et,et&&et.data&&(ut.data=et.data),st[pt]=ut,X++}h.attributes=st,h.attributesNum=X,h.index=z}function _(){const N=h.newAttributes;for(let W=0,Y=N.length;W<Y;W++)N[W]=0}function S(N){P(N,0)}function P(N,W){const Y=h.newAttributes,z=h.enabledAttributes,st=h.attributeDivisors;Y[N]=1,z[N]===0&&(s.enableVertexAttribArray(N),z[N]=1),st[N]!==W&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,W),st[N]=W)}function L(){const N=h.newAttributes,W=h.enabledAttributes;for(let Y=0,z=W.length;Y<z;Y++)W[Y]!==N[Y]&&(s.disableVertexAttribArray(Y),W[Y]=0)}function I(N,W,Y,z,st,j,X){X===!0?s.vertexAttribIPointer(N,W,Y,st,j):s.vertexAttribPointer(N,W,Y,z,st,j)}function B(N,W,Y,z){if(n.isWebGL2===!1&&(N.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const st=z.attributes,j=Y.getAttributes(),X=W.defaultAttributeValues;for(const $ in j){const pt=j[$];if(pt.location>=0){let q=st[$];if(q===void 0&&($==="instanceMatrix"&&N.instanceMatrix&&(q=N.instanceMatrix),$==="instanceColor"&&N.instanceColor&&(q=N.instanceColor)),q!==void 0){const et=q.normalized,ut=q.itemSize,ft=e.get(q);if(ft===void 0)continue;const at=ft.buffer,yt=ft.type,Rt=ft.bytesPerElement,Z=n.isWebGL2===!0&&(yt===s.INT||yt===s.UNSIGNED_INT||q.gpuType===Fa);if(q.isInterleavedBufferAttribute){const lt=q.data,D=lt.stride,ht=q.offset;if(lt.isInstancedInterleavedBuffer){for(let rt=0;rt<pt.locationSize;rt++)P(pt.location+rt,lt.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let rt=0;rt<pt.locationSize;rt++)S(pt.location+rt);s.bindBuffer(s.ARRAY_BUFFER,at);for(let rt=0;rt<pt.locationSize;rt++)I(pt.location+rt,ut/pt.locationSize,yt,et,D*Rt,(ht+ut/pt.locationSize*rt)*Rt,Z)}else{if(q.isInstancedBufferAttribute){for(let lt=0;lt<pt.locationSize;lt++)P(pt.location+lt,q.meshPerAttribute);N.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let lt=0;lt<pt.locationSize;lt++)S(pt.location+lt);s.bindBuffer(s.ARRAY_BUFFER,at);for(let lt=0;lt<pt.locationSize;lt++)I(pt.location+lt,ut/pt.locationSize,yt,et,ut*Rt,ut/pt.locationSize*lt*Rt,Z)}}else if(X!==void 0){const et=X[$];if(et!==void 0)switch(et.length){case 2:s.vertexAttrib2fv(pt.location,et);break;case 3:s.vertexAttrib3fv(pt.location,et);break;case 4:s.vertexAttrib4fv(pt.location,et);break;default:s.vertexAttrib1fv(pt.location,et)}}}}L()}function y(){F();for(const N in r){const W=r[N];for(const Y in W){const z=W[Y];for(const st in z)g(z[st].object),delete z[st];delete W[Y]}delete r[N]}}function x(N){if(r[N.id]===void 0)return;const W=r[N.id];for(const Y in W){const z=W[Y];for(const st in z)g(z[st].object),delete z[st];delete W[Y]}delete r[N.id]}function T(N){for(const W in r){const Y=r[W];if(Y[N.id]===void 0)continue;const z=Y[N.id];for(const st in z)g(z[st].object),delete z[st];delete Y[N.id]}}function F(){nt(),d=!0,h!==c&&(h=c,u(h.object))}function nt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:F,resetDefaultState:nt,dispose:y,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:S,disableUnusedAttributes:L}}function Vu(s,t,e,n){const i=n.isWebGL2;let o;function a(d){o=d}function r(d,f){s.drawArrays(o,d,f),e.update(f,o,1)}function c(d,f,l){if(l===0)return;let u,g;if(i)u=s,g="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](o,d,f,l),e.update(f,o,l)}function h(d,f,l){if(l===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l;g++)this.render(d[g],f[g]);else{u.multiDrawArraysWEBGL(o,d,0,f,0,l);let g=0;for(let w=0;w<l;w++)g+=f[w];e.update(g,o,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=h}function Hu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=o(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const h=a||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),w=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=l>0,S=a||t.has("OES_texture_float"),P=_&&S,L=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:o,precision:r,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:l,maxTextureSize:u,maxCubemapSize:g,maxAttributes:w,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:P,maxSamples:L}}function Wu(s){const t=this;let e=null,n=0,i=!1,o=!1;const a=new Wn,r=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,l){const u=f.length!==0||l||n!==0||i;return i=l,n=f.length,u},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,l){e=d(f,l,0)},this.setState=function(f,l,u){const g=f.clippingPlanes,w=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||o&&!m)o?d(null):h();else{const v=o?0:n,_=v*4;let S=p.clippingState||null;c.value=S,S=d(g,l,_,u);for(let P=0;P!==_;++P)S[P]=e[P];p.clippingState=S,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,l,u,g){const w=f!==null?f.length:0;let m=null;if(w!==0){if(m=c.value,g!==!0||m===null){const p=u+w*4,v=l.matrixWorldInverse;r.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=u;_!==w;++_,S+=4)a.copy(f[_]).applyMatrix4(v,r),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,m}}function Xu(s){let t=new WeakMap;function e(a,r){return r===Po?a.mapping=bi:r===Co&&(a.mapping=Ei),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===Po||r===Co)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new ih(c.height/2);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class oc extends nc{constructor(t=-1,e=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,r-=d*this.view.offsetY,c=r-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vi=4,$r=[.125,.215,.35,.446,.526,.582],Yn=20,mo=new oc,Qr=new le;let go=null,_o=0,Mo=0;const Xn=(1+Math.sqrt(5))/2,_i=1/Xn,ta=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Xn,_i),new U(0,Xn,-_i),new U(_i,0,Xn),new U(-_i,0,Xn),new U(Xn,_i,0),new U(-Xn,_i,0)];class ea{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,_o,Mo),t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:qi,format:on,colorSpace:Sn,depthBuffer:!1},i=na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=na(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qu(o)),this._blurMaterial=Yu(o,t,e)}return i}_compileMaterial(t){const e=new M(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,i){const r=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,l=d.toneMapping;d.getClearColor(Qr),d.toneMapping=Un,d.autoClear=!1;const u=new he({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new M(new H,u);let w=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,w=!0):(u.color.copy(Qr),w=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(r.up.set(0,c[p],0),r.lookAt(h[p],0,0)):v===1?(r.up.set(0,0,c[p]),r.lookAt(0,h[p],0)):(r.up.set(0,c[p],0),r.lookAt(0,0,h[p]));const _=this._cubeSize;vs(i,v*_,p>2?_:0,_,_),d.setRenderTarget(i),w&&d.render(g,r),d.render(t,r)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=l,d.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bi||t.mapping===Ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ia());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new M(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const c=this._cubeSize;vs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ta[(i-1)%ta.length];this._blur(t,i-1,i,o,a)}e.autoClear=n}_blur(t,e,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",o),this._halfBlur(a,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,a,r){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new M(this._lodPlanes[i],h),l=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*Yn-1),w=o/g,m=isFinite(o)?1+Math.floor(d*w):Yn;m>Yn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const p=[];let v=0;for(let I=0;I<Yn;++I){const B=I/w,y=Math.exp(-B*B/2);p.push(y),I===0?v+=y:I<m&&(v+=2*y)}for(let I=0;I<p.length;I++)p[I]=p[I]/v;l.envMap.value=t.texture,l.samples.value=m,l.weights.value=p,l.latitudinal.value=a==="latitudinal",r&&(l.poleAxis.value=r);const{_lodMax:_}=this;l.dTheta.value=g,l.mipInt.value=_-n;const S=this._sizeLods[i],P=3*S*(i>_-vi?i-_+vi:0),L=4*(this._cubeSize-S);vs(e,P,L,3*S,2*S),c.setRenderTarget(e),c.render(f,mo)}}function qu(s){const t=[],e=[],n=[];let i=s;const o=s-vi+1+$r.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);e.push(r);let c=1/r;a>s-vi?c=$r[a-s+vi-1]:a===0&&(c=0),n.push(c);const h=1/(r-2),d=-h,f=1+h,l=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,g=6,w=3,m=2,p=1,v=new Float32Array(w*g*u),_=new Float32Array(m*g*u),S=new Float32Array(p*g*u);for(let L=0;L<u;L++){const I=L%3*2/3-1,B=L>2?0:-1,y=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];v.set(y,w*g*L),_.set(l,m*g*L);const x=[L,L,L,L,L,L];S.set(x,p*g*L)}const P=new Fe;P.setAttribute("position",new hn(v,w)),P.setAttribute("uv",new hn(_,m)),P.setAttribute("faceIndex",new hn(S,p)),t.push(P),i>vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function na(s,t,e){const n=new jn(s,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Yu(s,t,e){const n=new Float32Array(Yn),i=new U(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ia(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function sa(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function Zu(s){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,h=c===Po||c===Co,d=c===bi||c===Ei;if(h||d)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new ea(s)),f=h?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(h&&f&&f.height>0||d&&f&&i(f)){e===null&&(e=new ea(s));const l=h?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,l),r.addEventListener("dispose",o),l.texture}else return null}}}return r}function i(r){let c=0;const h=6;for(let d=0;d<h;d++)r[d]!==void 0&&c++;return c===h}function o(r){const c=r.target;c.removeEventListener("dispose",o);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ku(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ju(s,t,e,n){const i={},o=new WeakMap;function a(f){const l=f.target;l.index!==null&&t.remove(l.index);for(const g in l.attributes)t.remove(l.attributes[g]);for(const g in l.morphAttributes){const w=l.morphAttributes[g];for(let m=0,p=w.length;m<p;m++)t.remove(w[m])}l.removeEventListener("dispose",a),delete i[l.id];const u=o.get(l);u&&(t.remove(u),o.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function r(f,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,e.memory.geometries++),l}function c(f){const l=f.attributes;for(const g in l)t.update(l[g],s.ARRAY_BUFFER);const u=f.morphAttributes;for(const g in u){const w=u[g];for(let m=0,p=w.length;m<p;m++)t.update(w[m],s.ARRAY_BUFFER)}}function h(f){const l=[],u=f.index,g=f.attributes.position;let w=0;if(u!==null){const v=u.array;w=u.version;for(let _=0,S=v.length;_<S;_+=3){const P=v[_+0],L=v[_+1],I=v[_+2];l.push(P,L,L,I,I,P)}}else if(g!==void 0){const v=g.array;w=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const P=_+0,L=_+1,I=_+2;l.push(P,L,L,I,I,P)}}else return;const m=new(qa(l)?tc:Qa)(l,1);m.version=w;const p=o.get(f);p&&t.remove(p),o.set(f,m)}function d(f){const l=o.get(f);if(l){const u=f.index;u!==null&&l.version<u.version&&h(f)}else h(f);return o.get(f)}return{get:r,update:c,getWireframeAttribute:d}}function ju(s,t,e,n){const i=n.isWebGL2;let o;function a(u){o=u}let r,c;function h(u){r=u.type,c=u.bytesPerElement}function d(u,g){s.drawElements(o,g,r,u*c),e.update(g,o,1)}function f(u,g,w){if(w===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](o,g,r,u*c,w),e.update(g,o,w)}function l(u,g,w){if(w===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<w;p++)this.render(u[p]/c,g[p]);else{m.multiDrawElementsWEBGL(o,g,0,r,u,0,w);let p=0;for(let v=0;v<w;v++)p+=g[v];e.update(p,o,1)}}this.setMode=a,this.setIndex=h,this.render=d,this.renderInstances=f,this.renderMultiDraw=l}function $u(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=r*(o/3);break;case s.LINES:e.lines+=r*(o/2);break;case s.LINE_STRIP:e.lines+=r*(o-1);break;case s.LINE_LOOP:e.lines+=r*o;break;case s.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qu(s,t){return s[0]-t[0]}function tf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ef(s,t,e){const n={},i=new Float32Array(8),o=new WeakMap,a=new we,r=[];for(let h=0;h<8;h++)r[h]=[h,0];function c(h,d,f){const l=h.morphTargetInfluences;if(t.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,w=g!==void 0?g.length:0;let m=o.get(d);if(m===void 0||m.count!==w){let W=function(){nt.dispose(),o.delete(d),d.removeEventListener("dispose",W)};var u=W;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let y=0;_===!0&&(y=1),S===!0&&(y=2),P===!0&&(y=3);let x=d.attributes.position.count*y,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const F=new Float32Array(x*T*4*w),nt=new Ka(F,x,T,w);nt.type=In,nt.needsUpdate=!0;const N=y*4;for(let Y=0;Y<w;Y++){const z=L[Y],st=I[Y],j=B[Y],X=x*T*4*Y;for(let $=0;$<z.count;$++){const pt=$*N;_===!0&&(a.fromBufferAttribute(z,$),F[X+pt+0]=a.x,F[X+pt+1]=a.y,F[X+pt+2]=a.z,F[X+pt+3]=0),S===!0&&(a.fromBufferAttribute(st,$),F[X+pt+4]=a.x,F[X+pt+5]=a.y,F[X+pt+6]=a.z,F[X+pt+7]=0),P===!0&&(a.fromBufferAttribute(j,$),F[X+pt+8]=a.x,F[X+pt+9]=a.y,F[X+pt+10]=a.z,F[X+pt+11]=j.itemSize===4?a.w:1)}}m={count:w,texture:nt,size:new Dt(x,T)},o.set(d,m),d.addEventListener("dispose",W)}let p=0;for(let _=0;_<l.length;_++)p+=l[_];const v=d.morphTargetsRelative?1:1-p;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",l),f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=l===void 0?0:l.length;let w=n[d.id];if(w===void 0||w.length!==g){w=[];for(let S=0;S<g;S++)w[S]=[S,0];n[d.id]=w}for(let S=0;S<g;S++){const P=w[S];P[0]=S,P[1]=l[S]}w.sort(tf);for(let S=0;S<8;S++)S<g&&w[S][1]?(r[S][0]=w[S][0],r[S][1]=w[S][1]):(r[S][0]=Number.MAX_SAFE_INTEGER,r[S][1]=0);r.sort(Qu);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const P=r[S],L=P[0],I=P[1];L!==Number.MAX_SAFE_INTEGER&&I?(m&&d.getAttribute("morphTarget"+S)!==m[L]&&d.setAttribute("morphTarget"+S,m[L]),p&&d.getAttribute("morphNormal"+S)!==p[L]&&d.setAttribute("morphNormal"+S,p[L]),i[S]=I,v+=I):(m&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),p&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),i[S]=0)}const _=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function nf(s,t,e,n){let i=new WeakMap;function o(c){const h=n.render.frame,d=c.geometry,f=t.get(c,d);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return f}function a(){i=new WeakMap}function r(c){const h=c.target;h.removeEventListener("dispose",r),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}class rc extends Xe{constructor(t,e,n,i,o,a,r,c,h,d){if(d=d!==void 0?d:Kn,d!==Kn&&d!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Kn&&(n=Ln),n===void 0&&d===Ti&&(n=Zn),super(null,i,o,a,r,c,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ac=new Xe,cc=new rc(1,1);cc.compareFunction=Xa;const lc=new Ka,hc=new kl,dc=new ic,oa=[],ra=[],aa=new Float32Array(16),ca=new Float32Array(9),la=new Float32Array(4);function Li(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=oa[i];if(o===void 0&&(o=new Float32Array(i),oa[i]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,s[a].toArray(o,r)}return o}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gs(s,t){let e=ra[t];e===void 0&&(e=new Int32Array(t),ra[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function cf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;la.set(n),s.uniformMatrix2fv(this.addr,!1,la),Ce(e,n)}}function lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;ca.set(n),s.uniformMatrix3fv(this.addr,!1,ca),Ce(e,n)}}function hf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;aa.set(n),s.uniformMatrix4fv(this.addr,!1,aa),Ce(e,n)}}function df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function mf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const o=this.type===s.SAMPLER_2D_SHADOW?cc:ac;e.setTexture2D(t||o,i)}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hc,i)}function xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dc,i)}function Sf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lc,i)}function yf(s){switch(s){case 5126:return sf;case 35664:return of;case 35665:return rf;case 35666:return af;case 35674:return cf;case 35675:return lf;case 35676:return hf;case 5124:case 35670:return df;case 35667:case 35671:return uf;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return _f;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return wf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return Sf}}function bf(s,t){s.uniform1fv(this.addr,t)}function Ef(s,t){const e=Li(t,this.size,2);s.uniform2fv(this.addr,e)}function Tf(s,t){const e=Li(t,this.size,3);s.uniform3fv(this.addr,e)}function Af(s,t){const e=Li(t,this.size,4);s.uniform4fv(this.addr,e)}function Rf(s,t){const e=Li(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pf(s,t){const e=Li(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cf(s,t){const e=Li(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Lf(s,t){s.uniform1iv(this.addr,t)}function If(s,t){s.uniform2iv(this.addr,t)}function Df(s,t){s.uniform3iv(this.addr,t)}function Uf(s,t){s.uniform4iv(this.addr,t)}function Nf(s,t){s.uniform1uiv(this.addr,t)}function Ff(s,t){s.uniform2uiv(this.addr,t)}function Of(s,t){s.uniform3uiv(this.addr,t)}function Gf(s,t){s.uniform4uiv(this.addr,t)}function Bf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ac,o[a])}function kf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||hc,o[a])}function zf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||dc,o[a])}function Vf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||lc,o[a])}function Hf(s){switch(s){case 5126:return bf;case 35664:return Ef;case 35665:return Tf;case 35666:return Af;case 35674:return Rf;case 35675:return Pf;case 35676:return Cf;case 5124:case 35670:return Lf;case 35667:case 35671:return If;case 35668:case 35672:return Df;case 35669:case 35673:return Uf;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Vf}}class Wf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class Xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hf(e.type)}}class qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(t,e[r.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function ha(s,t){s.seq.push(t),s.map[t.id]=t}function Yf(s,t,e){const n=s.name,i=n.length;for(vo.lastIndex=0;;){const o=vo.exec(n),a=vo.lastIndex;let r=o[1];const c=o[2]==="]",h=o[3];if(c&&(r=r|0),h===void 0||h==="["&&a+2===i){ha(e,h===void 0?new Wf(r,s,t):new Xf(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new qf(r),ha(e,f)),e=f}}}class Es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),a=t.getUniformLocation(e,o.name);Yf(o,a,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,a=e.length;o!==a;++o){const r=e[o],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function da(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Zf=37297;let Kf=0;function Jf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function jf(s){const t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(s);let n;switch(t===e?n="":t===Ps&&e===Rs?n="LinearDisplayP3ToLinearSRGB":t===Rs&&e===Ps&&(n="LinearSRGBToLinearDisplayP3"),s){case Sn:case Ns:return[n,"LinearTransferOETF"];case Ne:case ko:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ua(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Jf(s.getShaderSource(t),a)}else return i}function $f(s,t){const e=jf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qf(s,t){let e;switch(t){case jc:e="Linear";break;case $c:e="Reinhard";break;case Qc:e="OptimizedCineon";break;case Ua:e="ACESFilmic";break;case el:e="AgX";break;case tl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function t0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(wi).join(`
`)}function e0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(wi).join(`
`)}function n0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:r}}return e}function wi(s){return s!==""}function fa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(s){return s.replace(s0,r0)}const o0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function r0(s,t){let e=se[t];if(e===void 0){const n=o0.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uo(e)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ma(s){return s.replace(a0,c0)}function c0(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function ga(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function l0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Go?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ia?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function h0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bi:case Ei:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function u0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Da:t="ENVMAP_BLENDING_MULTIPLY";break;case Kc:t="ENVMAP_BLENDING_MIX";break;case Jc:t="ENVMAP_BLENDING_ADD";break}return t}function f0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function p0(s,t,e,n){const i=s.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const c=l0(e),h=h0(e),d=d0(e),f=u0(e),l=f0(e),u=e.isWebGL2?"":t0(e),g=e0(e),w=n0(o),m=i.createProgram();let p,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(wi).join(`
`),p.length>0&&(p+=`
`),v=[u,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w].filter(wi).join(`
`),v.length>0&&(v+=`
`)):(p=[ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wi).join(`
`),v=[u,ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,w,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?se.tonemapping_pars_fragment:"",e.toneMapping!==Un?Qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,$f("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(wi).join(`
`)),a=Uo(a),a=fa(a,e),a=pa(a,e),r=Uo(r),r=fa(r,e),r=pa(r,e),a=ma(a),r=ma(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ur?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ur?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=_+p+a,P=_+v+r,L=da(i,i.VERTEX_SHADER,S),I=da(i,i.FRAGMENT_SHADER,P);i.attachShader(m,L),i.attachShader(m,I),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function B(F){if(s.debug.checkShaderErrors){const nt=i.getProgramInfoLog(m).trim(),N=i.getShaderInfoLog(L).trim(),W=i.getShaderInfoLog(I).trim();let Y=!0,z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,L,I);else{const st=ua(i,L,"vertex"),j=ua(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+nt+`
`+st+`
`+j)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(N===""||W==="")&&(z=!1);z&&(F.diagnostics={runnable:Y,programLog:nt,vertexShader:{log:N,prefix:p},fragmentShader:{log:W,prefix:v}})}i.deleteShader(L),i.deleteShader(I),y=new Es(i,m),x=i0(i,m)}let y;this.getUniforms=function(){return y===void 0&&B(this),y};let x;this.getAttributes=function(){return x===void 0&&B(this),x};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Zf)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=I,this}let m0=0;class g0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _0(t),e.set(t,n)),n}}class _0{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}}function M0(s,t,e,n,i,o,a){const r=new ja,c=new g0,h=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,l=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(y){return y===0?"uv":`uv${y}`}function m(y,x,T,F,nt){const N=F.fog,W=nt.geometry,Y=y.isMeshStandardMaterial?F.environment:null,z=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),st=z&&z.mapping===Us?z.image.height:null,j=g[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const X=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,$=X!==void 0?X.length:0;let pt=0;W.morphAttributes.position!==void 0&&(pt=1),W.morphAttributes.normal!==void 0&&(pt=2),W.morphAttributes.color!==void 0&&(pt=3);let q,et,ut,ft;if(j){const ne=cn[j];q=ne.vertexShader,et=ne.fragmentShader}else q=y.vertexShader,et=y.fragmentShader,c.update(y),ut=c.getVertexShaderID(y),ft=c.getFragmentShaderID(y);const at=s.getRenderTarget(),yt=nt.isInstancedMesh===!0,Rt=nt.isBatchedMesh===!0,Z=!!y.map,lt=!!y.matcap,D=!!z,ht=!!y.aoMap,rt=!!y.lightMap,V=!!y.bumpMap,ot=!!y.normalMap,Pt=!!y.displacementMap,_t=!!y.emissiveMap,A=!!y.metalnessMap,E=!!y.roughnessMap,K=y.anisotropy>0,vt=y.clearcoat>0,mt=y.iridescence>0,gt=y.sheen>0,Ot=y.transmission>0,At=K&&!!y.anisotropyMap,Nt=vt&&!!y.clearcoatMap,Vt=vt&&!!y.clearcoatNormalMap,It=vt&&!!y.clearcoatRoughnessMap,wt=mt&&!!y.iridescenceMap,$t=mt&&!!y.iridescenceThicknessMap,Jt=gt&&!!y.sheenColorMap,Xt=gt&&!!y.sheenRoughnessMap,Bt=!!y.specularMap,Ct=!!y.specularColorMap,Zt=!!y.specularIntensityMap,te=Ot&&!!y.transmissionMap,Gt=Ot&&!!y.thicknessMap,bt=!!y.gradientMap,xt=!!y.alphaMap,b=y.alphaTest>0,k=!!y.alphaHash,Q=!!y.extensions,Tt=!!W.attributes.uv1,dt=!!W.attributes.uv2,Et=!!W.attributes.uv3;let kt=Un;return y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(kt=s.toneMapping),{isWebGL2:d,shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:q,fragmentShader:et,defines:y.defines,customVertexShaderID:ut,customFragmentShaderID:ft,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Rt,instancing:yt,instancingColor:yt&&nt.instanceColor!==null,supportsVertexTextures:l,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Sn,map:Z,matcap:lt,envMap:D,envMapMode:D&&z.mapping,envMapCubeUVHeight:st,aoMap:ht,lightMap:rt,bumpMap:V,normalMap:ot,displacementMap:l&&Pt,emissiveMap:_t,normalMapObjectSpace:ot&&y.normalMapType===fl,normalMapTangentSpace:ot&&y.normalMapType===Wa,metalnessMap:A,roughnessMap:E,anisotropy:K,anisotropyMap:At,clearcoat:vt,clearcoatMap:Nt,clearcoatNormalMap:Vt,clearcoatRoughnessMap:It,iridescence:mt,iridescenceMap:wt,iridescenceThicknessMap:$t,sheen:gt,sheenColorMap:Jt,sheenRoughnessMap:Xt,specularMap:Bt,specularColorMap:Ct,specularIntensityMap:Zt,transmission:Ot,transmissionMap:te,thicknessMap:Gt,gradientMap:bt,opaque:y.transparent===!1&&y.blending===Si,alphaMap:xt,alphaTest:b,alphaHash:k,combine:y.combine,mapUv:Z&&w(y.map.channel),aoMapUv:ht&&w(y.aoMap.channel),lightMapUv:rt&&w(y.lightMap.channel),bumpMapUv:V&&w(y.bumpMap.channel),normalMapUv:ot&&w(y.normalMap.channel),displacementMapUv:Pt&&w(y.displacementMap.channel),emissiveMapUv:_t&&w(y.emissiveMap.channel),metalnessMapUv:A&&w(y.metalnessMap.channel),roughnessMapUv:E&&w(y.roughnessMap.channel),anisotropyMapUv:At&&w(y.anisotropyMap.channel),clearcoatMapUv:Nt&&w(y.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&w(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&w(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&w(y.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&w(y.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&w(y.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&w(y.sheenRoughnessMap.channel),specularMapUv:Bt&&w(y.specularMap.channel),specularColorMapUv:Ct&&w(y.specularColorMap.channel),specularIntensityMapUv:Zt&&w(y.specularIntensityMap.channel),transmissionMapUv:te&&w(y.transmissionMap.channel),thicknessMapUv:Gt&&w(y.thicknessMap.channel),alphaMapUv:xt&&w(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ot||K),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Tt,vertexUv2s:dt,vertexUv3s:Et,pointsUvs:nt.isPoints===!0&&!!W.attributes.uv&&(Z||xt),fog:!!N,useFog:y.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:nt.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:pt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Z&&y.map.isVideoTexture===!0&&ge.getTransfer(y.map.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Te,flipSided:y.side===He,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Q&&y.extensions.derivatives===!0,extensionFragDepth:Q&&y.extensions.fragDepth===!0,extensionDrawBuffers:Q&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Q&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Q&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)x.push(T),x.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(v(x,y),_(x,y),x.push(s.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function v(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function _(y,x){r.disableAll(),x.isWebGL2&&r.enable(0),x.supportsVertexTextures&&r.enable(1),x.instancing&&r.enable(2),x.instancingColor&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),y.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.skinning&&r.enable(4),x.morphTargets&&r.enable(5),x.morphNormals&&r.enable(6),x.morphColors&&r.enable(7),x.premultipliedAlpha&&r.enable(8),x.shadowMapEnabled&&r.enable(9),x.useLegacyLights&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),y.push(r.mask)}function S(y){const x=g[y.type];let T;if(x){const F=cn[x];T=Ql.clone(F.uniforms)}else T=y.uniforms;return T}function P(y,x){let T;for(let F=0,nt=h.length;F<nt;F++){const N=h[F];if(N.cacheKey===x){T=N,++T.usedTimes;break}}return T===void 0&&(T=new p0(s,x,y,o),h.push(T)),T}function L(y){if(--y.usedTimes===0){const x=h.indexOf(y);h[x]=h[h.length-1],h.pop(),y.destroy()}}function I(y){c.remove(y)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:P,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:B}}function v0(){let s=new WeakMap;function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function e(o){s.delete(o)}function n(o,a,r){s.get(o)[a]=r}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function w0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _a(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ma(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function a(f,l,u,g,w,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:l,material:u,groupOrder:g,renderOrder:f.renderOrder,z:w,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=l,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=w,p.group=m),t++,p}function r(f,l,u,g,w,m){const p=a(f,l,u,g,w,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,l,u,g,w,m){const p=a(f,l,u,g,w,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,l){e.length>1&&e.sort(f||w0),n.length>1&&n.sort(l||_a),i.length>1&&i.sort(l||_a)}function d(){for(let f=t,l=s.length;f<l;f++){const u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:r,unshift:c,finish:d,sort:h}}function x0(){let s=new WeakMap;function t(n,i){const o=s.get(n);let a;return o===void 0?(a=new Ma,s.set(n,[a])):i>=o.length?(a=new Ma,o.push(a)):a=o[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function S0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new le};break;case"SpotLight":e={position:new U,direction:new U,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new U,halfWidth:new U,halfHeight:new U};break}return s[t.id]=e,e}}}function y0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let b0=0;function E0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function T0(s,t){const e=new S0,n=y0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new U);const o=new U,a=new be,r=new be;function c(d,f){let l=0,u=0,g=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let w=0,m=0,p=0,v=0,_=0,S=0,P=0,L=0,I=0,B=0,y=0;d.sort(E0);const x=f===!0?Math.PI:1;for(let F=0,nt=d.length;F<nt;F++){const N=d[F],W=N.color,Y=N.intensity,z=N.distance,st=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)l+=W.r*Y*x,u+=W.g*Y*x,g+=W.b*Y*x;else if(N.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(N.sh.coefficients[j],Y);y++}else if(N.isDirectionalLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*x),N.castShadow){const X=N.shadow,$=n.get(N);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,i.directionalShadow[w]=$,i.directionalShadowMap[w]=st,i.directionalShadowMatrix[w]=N.shadow.matrix,S++}i.directional[w]=j,w++}else if(N.isSpotLight){const j=e.get(N);j.position.setFromMatrixPosition(N.matrixWorld),j.color.copy(W).multiplyScalar(Y*x),j.distance=z,j.coneCos=Math.cos(N.angle),j.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),j.decay=N.decay,i.spot[p]=j;const X=N.shadow;if(N.map&&(i.spotLightMap[I]=N.map,I++,X.updateMatrices(N),N.castShadow&&B++),i.spotLightMatrix[p]=X.matrix,N.castShadow){const $=n.get(N);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,i.spotShadow[p]=$,i.spotShadowMap[p]=st,L++}p++}else if(N.isRectAreaLight){const j=e.get(N);j.color.copy(W).multiplyScalar(Y),j.halfWidth.set(N.width*.5,0,0),j.halfHeight.set(0,N.height*.5,0),i.rectArea[v]=j,v++}else if(N.isPointLight){const j=e.get(N);if(j.color.copy(N.color).multiplyScalar(N.intensity*x),j.distance=N.distance,j.decay=N.decay,N.castShadow){const X=N.shadow,$=n.get(N);$.shadowBias=X.bias,$.shadowNormalBias=X.normalBias,$.shadowRadius=X.radius,$.shadowMapSize=X.mapSize,$.shadowCameraNear=X.camera.near,$.shadowCameraFar=X.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=st,i.pointShadowMatrix[m]=N.shadow.matrix,P++}i.point[m]=j,m++}else if(N.isHemisphereLight){const j=e.get(N);j.skyColor.copy(N.color).multiplyScalar(Y*x),j.groundColor.copy(N.groundColor).multiplyScalar(Y*x),i.hemi[_]=j,_++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_FLOAT_1,i.rectAreaLTC2=Ut.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ut.LTC_HALF_1,i.rectAreaLTC2=Ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==w||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==v||T.hemiLength!==_||T.numDirectionalShadows!==S||T.numPointShadows!==P||T.numSpotShadows!==L||T.numSpotMaps!==I||T.numLightProbes!==y)&&(i.directional.length=w,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=L+I-B,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=y,T.directionalLength=w,T.pointLength=m,T.spotLength=p,T.rectAreaLength=v,T.hemiLength=_,T.numDirectionalShadows=S,T.numPointShadows=P,T.numSpotShadows=L,T.numSpotMaps=I,T.numLightProbes=y,i.version=b0++)}function h(d,f){let l=0,u=0,g=0,w=0,m=0;const p=f.matrixWorldInverse;for(let v=0,_=d.length;v<_;v++){const S=d[v];if(S.isDirectionalLight){const P=i.directional[l];P.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),l++}else if(S.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const P=i.rectArea[w];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),r.identity(),a.copy(S.matrixWorld),a.premultiply(p),r.extractRotation(a),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(r),P.halfHeight.applyMatrix4(r),w++}else if(S.isPointLight){const P=i.point[u];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){const P=i.hemi[m];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:i}}function va(s,t){const e=new T0(s,t),n=[],i=[];function o(){n.length=0,i.length=0}function a(f){n.push(f)}function r(f){i.push(f)}function c(f){e.setup(n,f)}function h(f){e.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:r}}function A0(s,t){let e=new WeakMap;function n(o,a=0){const r=e.get(o);let c;return r===void 0?(c=new va(s,t),e.set(o,[c])):a>=r.length?(c=new va(s,t),r.push(c)):c=r[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class R0 extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P0 extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,L0=`uniform sampler2D shadow_pass;
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
}`;function I0(s,t,e){let n=new Vo;const i=new Dt,o=new Dt,a=new we,r=new R0({depthPacking:ul}),c=new P0,h={},d=e.maxTextureSize,f={[Fn]:He,[He]:Fn,[Te]:Te},l=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:C0,fragmentShader:L0}),u=l.clone();u.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new M(g,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let p=this.type;this.render=function(L,I,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const y=s.getRenderTarget(),x=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Dn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const nt=p!==vn&&this.type===vn,N=p===vn&&this.type!==vn;for(let W=0,Y=L.length;W<Y;W++){const z=L[W],st=z.shadow;if(st===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(st.autoUpdate===!1&&st.needsUpdate===!1)continue;i.copy(st.mapSize);const j=st.getFrameExtents();if(i.multiply(j),o.copy(st.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/j.x),i.x=o.x*j.x,st.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/j.y),i.y=o.y*j.y,st.mapSize.y=o.y)),st.map===null||nt===!0||N===!0){const $=this.type!==vn?{minFilter:Ve,magFilter:Ve}:{};st.map!==null&&st.map.dispose(),st.map=new jn(i.x,i.y,$),st.map.texture.name=z.name+".shadowMap",st.camera.updateProjectionMatrix()}s.setRenderTarget(st.map),s.clear();const X=st.getViewportCount();for(let $=0;$<X;$++){const pt=st.getViewport($);a.set(o.x*pt.x,o.y*pt.y,o.x*pt.z,o.y*pt.w),F.viewport(a),st.updateMatrices(z,$),n=st.getFrustum(),S(I,B,st.camera,z,this.type)}st.isPointLightShadow!==!0&&this.type===vn&&v(st,B),st.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,x,T)};function v(L,I){const B=t.update(w);l.defines.VSM_SAMPLES!==L.blurSamples&&(l.defines.VSM_SAMPLES=L.blurSamples,u.defines.VSM_SAMPLES=L.blurSamples,l.needsUpdate=!0,u.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new jn(i.x,i.y)),l.uniforms.shadow_pass.value=L.map.texture,l.uniforms.resolution.value=L.mapSize,l.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(I,null,B,l,w,null),u.uniforms.shadow_pass.value=L.mapPass.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(I,null,B,u,w,null)}function _(L,I,B,y){let x=null;const T=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(T!==void 0)x=T;else if(x=B.isPointLight===!0?c:r,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const F=x.uuid,nt=I.uuid;let N=h[F];N===void 0&&(N={},h[F]=N);let W=N[nt];W===void 0&&(W=x.clone(),N[nt]=W,I.addEventListener("dispose",P)),x=W}if(x.visible=I.visible,x.wireframe=I.wireframe,y===vn?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:f[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,B.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=s.properties.get(x);F.light=B}return x}function S(L,I,B,y,x){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&x===vn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const nt=t.update(L),N=L.material;if(Array.isArray(N)){const W=nt.groups;for(let Y=0,z=W.length;Y<z;Y++){const st=W[Y],j=N[st.materialIndex];if(j&&j.visible){const X=_(L,j,y,x);L.onBeforeShadow(s,L,I,B,nt,X,st),s.renderBufferDirect(B,null,nt,X,L,st),L.onAfterShadow(s,L,I,B,nt,X,st)}}}else if(N.visible){const W=_(L,N,y,x);L.onBeforeShadow(s,L,I,B,nt,W,null),s.renderBufferDirect(B,null,nt,W,L,null),L.onAfterShadow(s,L,I,B,nt,W,null)}}const F=L.children;for(let nt=0,N=F.length;nt<N;nt++)S(F[nt],I,B,y,x)}function P(L){L.target.removeEventListener("dispose",P);for(const B in h){const y=h[B],x=L.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function D0(s,t,e){const n=e.isWebGL2;function i(){let b=!1;const k=new we;let Q=null;const Tt=new we(0,0,0,0);return{setMask:function(dt){Q!==dt&&!b&&(s.colorMask(dt,dt,dt,dt),Q=dt)},setLocked:function(dt){b=dt},setClear:function(dt,Et,kt,re,ne){ne===!0&&(dt*=re,Et*=re,kt*=re),k.set(dt,Et,kt,re),Tt.equals(k)===!1&&(s.clearColor(dt,Et,kt,re),Tt.copy(k))},reset:function(){b=!1,Q=null,Tt.set(-1,0,0,0)}}}function o(){let b=!1,k=null,Q=null,Tt=null;return{setTest:function(dt){dt?Rt(s.DEPTH_TEST):Z(s.DEPTH_TEST)},setMask:function(dt){k!==dt&&!b&&(s.depthMask(dt),k=dt)},setFunc:function(dt){if(Q!==dt){switch(dt){case Vc:s.depthFunc(s.NEVER);break;case Hc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Xc:s.depthFunc(s.EQUAL);break;case qc:s.depthFunc(s.GEQUAL);break;case Yc:s.depthFunc(s.GREATER);break;case Zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=dt}},setLocked:function(dt){b=dt},setClear:function(dt){Tt!==dt&&(s.clearDepth(dt),Tt=dt)},reset:function(){b=!1,k=null,Q=null,Tt=null}}}function a(){let b=!1,k=null,Q=null,Tt=null,dt=null,Et=null,kt=null,re=null,ne=null;return{setTest:function(Ht){b||(Ht?Rt(s.STENCIL_TEST):Z(s.STENCIL_TEST))},setMask:function(Ht){k!==Ht&&!b&&(s.stencilMask(Ht),k=Ht)},setFunc:function(Ht,ue,Lt){(Q!==Ht||Tt!==ue||dt!==Lt)&&(s.stencilFunc(Ht,ue,Lt),Q=Ht,Tt=ue,dt=Lt)},setOp:function(Ht,ue,Lt){(Et!==Ht||kt!==ue||re!==Lt)&&(s.stencilOp(Ht,ue,Lt),Et=Ht,kt=ue,re=Lt)},setLocked:function(Ht){b=Ht},setClear:function(Ht){ne!==Ht&&(s.clearStencil(Ht),ne=Ht)},reset:function(){b=!1,k=null,Q=null,Tt=null,dt=null,Et=null,kt=null,re=null,ne=null}}}const r=new i,c=new o,h=new a,d=new WeakMap,f=new WeakMap;let l={},u={},g=new WeakMap,w=[],m=null,p=!1,v=null,_=null,S=null,P=null,L=null,I=null,B=null,y=new le(0,0,0),x=0,T=!1,F=null,nt=null,N=null,W=null,Y=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,j=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(X)[1]),st=j>=1):X.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),st=j>=2);let $=null,pt={};const q=s.getParameter(s.SCISSOR_BOX),et=s.getParameter(s.VIEWPORT),ut=new we().fromArray(q),ft=new we().fromArray(et);function at(b,k,Q,Tt){const dt=new Uint8Array(4),Et=s.createTexture();s.bindTexture(b,Et),s.texParameteri(b,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(b,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<Q;kt++)n&&(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)?s.texImage3D(k,0,s.RGBA,1,1,Tt,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(k+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return Et}const yt={};yt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(yt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Rt(s.DEPTH_TEST),c.setFunc(Ts),_t(!1),A(tr),Rt(s.CULL_FACE),ot(Dn);function Rt(b){l[b]!==!0&&(s.enable(b),l[b]=!0)}function Z(b){l[b]!==!1&&(s.disable(b),l[b]=!1)}function lt(b,k){return u[b]!==k?(s.bindFramebuffer(b,k),u[b]=k,n&&(b===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=k),b===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=k)),!0):!1}function D(b,k){let Q=w,Tt=!1;if(b)if(Q=g.get(k),Q===void 0&&(Q=[],g.set(k,Q)),b.isWebGLMultipleRenderTargets){const dt=b.texture;if(Q.length!==dt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,kt=dt.length;Et<kt;Et++)Q[Et]=s.COLOR_ATTACHMENT0+Et;Q.length=dt.length,Tt=!0}}else Q[0]!==s.COLOR_ATTACHMENT0&&(Q[0]=s.COLOR_ATTACHMENT0,Tt=!0);else Q[0]!==s.BACK&&(Q[0]=s.BACK,Tt=!0);Tt&&(e.isWebGL2?s.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function ht(b){return m!==b?(s.useProgram(b),m=b,!0):!1}const rt={[qn]:s.FUNC_ADD,[Ac]:s.FUNC_SUBTRACT,[Rc]:s.FUNC_REVERSE_SUBTRACT};if(n)rt[sr]=s.MIN,rt[or]=s.MAX;else{const b=t.get("EXT_blend_minmax");b!==null&&(rt[sr]=b.MIN_EXT,rt[or]=b.MAX_EXT)}const V={[Pc]:s.ZERO,[Cc]:s.ONE,[Lc]:s.SRC_COLOR,[Ao]:s.SRC_ALPHA,[Oc]:s.SRC_ALPHA_SATURATE,[Nc]:s.DST_COLOR,[Dc]:s.DST_ALPHA,[Ic]:s.ONE_MINUS_SRC_COLOR,[Ro]:s.ONE_MINUS_SRC_ALPHA,[Fc]:s.ONE_MINUS_DST_COLOR,[Uc]:s.ONE_MINUS_DST_ALPHA,[Gc]:s.CONSTANT_COLOR,[Bc]:s.ONE_MINUS_CONSTANT_COLOR,[kc]:s.CONSTANT_ALPHA,[zc]:s.ONE_MINUS_CONSTANT_ALPHA};function ot(b,k,Q,Tt,dt,Et,kt,re,ne,Ht){if(b===Dn){p===!0&&(Z(s.BLEND),p=!1);return}if(p===!1&&(Rt(s.BLEND),p=!0),b!==Tc){if(b!==v||Ht!==T){if((_!==qn||L!==qn)&&(s.blendEquation(s.FUNC_ADD),_=qn,L=qn),Ht)switch(b){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.ONE,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}S=null,P=null,I=null,B=null,y.set(0,0,0),x=0,v=b,T=Ht}return}dt=dt||k,Et=Et||Q,kt=kt||Tt,(k!==_||dt!==L)&&(s.blendEquationSeparate(rt[k],rt[dt]),_=k,L=dt),(Q!==S||Tt!==P||Et!==I||kt!==B)&&(s.blendFuncSeparate(V[Q],V[Tt],V[Et],V[kt]),S=Q,P=Tt,I=Et,B=kt),(re.equals(y)===!1||ne!==x)&&(s.blendColor(re.r,re.g,re.b,ne),y.copy(re),x=ne),v=b,T=!1}function Pt(b,k){b.side===Te?Z(s.CULL_FACE):Rt(s.CULL_FACE);let Q=b.side===He;k&&(Q=!Q),_t(Q),b.blending===Si&&b.transparent===!1?ot(Dn):ot(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),c.setFunc(b.depthFunc),c.setTest(b.depthTest),c.setMask(b.depthWrite),r.setMask(b.colorWrite);const Tt=b.stencilWrite;h.setTest(Tt),Tt&&(h.setMask(b.stencilWriteMask),h.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),h.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),K(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Z(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(b){F!==b&&(b?s.frontFace(s.CW):s.frontFace(s.CCW),F=b)}function A(b){b!==bc?(Rt(s.CULL_FACE),b!==nt&&(b===tr?s.cullFace(s.BACK):b===Ec?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Z(s.CULL_FACE),nt=b}function E(b){b!==N&&(st&&s.lineWidth(b),N=b)}function K(b,k,Q){b?(Rt(s.POLYGON_OFFSET_FILL),(W!==k||Y!==Q)&&(s.polygonOffset(k,Q),W=k,Y=Q)):Z(s.POLYGON_OFFSET_FILL)}function vt(b){b?Rt(s.SCISSOR_TEST):Z(s.SCISSOR_TEST)}function mt(b){b===void 0&&(b=s.TEXTURE0+z-1),$!==b&&(s.activeTexture(b),$=b)}function gt(b,k,Q){Q===void 0&&($===null?Q=s.TEXTURE0+z-1:Q=$);let Tt=pt[Q];Tt===void 0&&(Tt={type:void 0,texture:void 0},pt[Q]=Tt),(Tt.type!==b||Tt.texture!==k)&&($!==Q&&(s.activeTexture(Q),$=Q),s.bindTexture(b,k||yt[b]),Tt.type=b,Tt.texture=k)}function Ot(){const b=pt[$];b!==void 0&&b.type!==void 0&&(s.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function At(){try{s.compressedTexImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Vt(){try{s.texSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function It(){try{s.texSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function wt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function $t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Xt(){try{s.texStorage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Bt(){try{s.texImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Zt(b){ut.equals(b)===!1&&(s.scissor(b.x,b.y,b.z,b.w),ut.copy(b))}function te(b){ft.equals(b)===!1&&(s.viewport(b.x,b.y,b.z,b.w),ft.copy(b))}function Gt(b,k){let Q=f.get(k);Q===void 0&&(Q=new WeakMap,f.set(k,Q));let Tt=Q.get(b);Tt===void 0&&(Tt=s.getUniformBlockIndex(k,b.name),Q.set(b,Tt))}function bt(b,k){const Tt=f.get(k).get(b);d.get(k)!==Tt&&(s.uniformBlockBinding(k,Tt,b.__bindingPointIndex),d.set(k,Tt))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},$=null,pt={},u={},g=new WeakMap,w=[],m=null,p=!1,v=null,_=null,S=null,P=null,L=null,I=null,B=null,y=new le(0,0,0),x=0,T=!1,F=null,nt=null,N=null,W=null,Y=null,ut.set(0,0,s.canvas.width,s.canvas.height),ft.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),h.reset()}return{buffers:{color:r,depth:c,stencil:h},enable:Rt,disable:Z,bindFramebuffer:lt,drawBuffers:D,useProgram:ht,setBlending:ot,setMaterial:Pt,setFlipSided:_t,setCullFace:A,setLineWidth:E,setPolygonOffset:K,setScissorTest:vt,activeTexture:mt,bindTexture:gt,unbindTexture:Ot,compressedTexImage2D:At,compressedTexImage3D:Nt,texImage2D:Bt,texImage3D:Ct,updateUBOMapping:Gt,uniformBlockBinding:bt,texStorage2D:Jt,texStorage3D:Xt,texSubImage2D:Vt,texSubImage3D:It,compressedTexSubImage2D:wt,compressedTexSubImage3D:$t,scissor:Zt,viewport:te,reset:xt}}function U0(s,t,e,n,i,o,a){const r=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const l=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return u?new OffscreenCanvas(A,E):Is("canvas")}function w(A,E,K,vt){let mt=1;if((A.width>vt||A.height>vt)&&(mt=vt/Math.max(A.width,A.height)),mt<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const gt=E?Ls:Math.floor,Ot=gt(mt*A.width),At=gt(mt*A.height);f===void 0&&(f=g(Ot,At));const Nt=K?g(Ot,At):f;return Nt.width=Ot,Nt.height=At,Nt.getContext("2d").drawImage(A,0,0,Ot,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ot+"x"+At+")."),Nt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Do(A.width)&&Do(A.height)}function p(A){return r?!1:A.wrapS!==sn||A.wrapT!==sn||A.minFilter!==Ve&&A.minFilter!==je}function v(A,E){return A.generateMipmaps&&E&&A.minFilter!==Ve&&A.minFilter!==je}function _(A){s.generateMipmap(A)}function S(A,E,K,vt,mt=!1){if(r===!1)return E;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let gt=E;if(E===s.RED&&(K===s.FLOAT&&(gt=s.R32F),K===s.HALF_FLOAT&&(gt=s.R16F),K===s.UNSIGNED_BYTE&&(gt=s.R8)),E===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(gt=s.R8UI),K===s.UNSIGNED_SHORT&&(gt=s.R16UI),K===s.UNSIGNED_INT&&(gt=s.R32UI),K===s.BYTE&&(gt=s.R8I),K===s.SHORT&&(gt=s.R16I),K===s.INT&&(gt=s.R32I)),E===s.RG&&(K===s.FLOAT&&(gt=s.RG32F),K===s.HALF_FLOAT&&(gt=s.RG16F),K===s.UNSIGNED_BYTE&&(gt=s.RG8)),E===s.RGBA){const Ot=mt?As:ge.getTransfer(vt);K===s.FLOAT&&(gt=s.RGBA32F),K===s.HALF_FLOAT&&(gt=s.RGBA16F),K===s.UNSIGNED_BYTE&&(gt=Ot===Me?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT_4_4_4_4&&(gt=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(gt=s.RGB5_A1)}return(gt===s.R16F||gt===s.R32F||gt===s.RG16F||gt===s.RG32F||gt===s.RGBA16F||gt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),gt}function P(A,E,K){return v(A,K)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==je?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function L(A){return A===Ve||A===rr||A===Xs?s.NEAREST:s.LINEAR}function I(A){const E=A.target;E.removeEventListener("dispose",I),y(E),E.isVideoTexture&&d.delete(E)}function B(A){const E=A.target;E.removeEventListener("dispose",B),T(E)}function y(A){const E=n.get(A);if(E.__webglInit===void 0)return;const K=A.source,vt=l.get(K);if(vt){const mt=vt[E.__cacheKey];mt.usedTimes--,mt.usedTimes===0&&x(A),Object.keys(vt).length===0&&l.delete(K)}n.remove(A)}function x(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const K=A.source,vt=l.get(K);delete vt[E.__cacheKey],a.memory.textures--}function T(A){const E=A.texture,K=n.get(A),vt=n.get(E);if(vt.__webglTexture!==void 0&&(s.deleteTexture(vt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(K.__webglFramebuffer[mt]))for(let gt=0;gt<K.__webglFramebuffer[mt].length;gt++)s.deleteFramebuffer(K.__webglFramebuffer[mt][gt]);else s.deleteFramebuffer(K.__webglFramebuffer[mt]);K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer[mt])}else{if(Array.isArray(K.__webglFramebuffer))for(let mt=0;mt<K.__webglFramebuffer.length;mt++)s.deleteFramebuffer(K.__webglFramebuffer[mt]);else s.deleteFramebuffer(K.__webglFramebuffer);if(K.__webglDepthbuffer&&s.deleteRenderbuffer(K.__webglDepthbuffer),K.__webglMultisampledFramebuffer&&s.deleteFramebuffer(K.__webglMultisampledFramebuffer),K.__webglColorRenderbuffer)for(let mt=0;mt<K.__webglColorRenderbuffer.length;mt++)K.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(K.__webglColorRenderbuffer[mt]);K.__webglDepthRenderbuffer&&s.deleteRenderbuffer(K.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let mt=0,gt=E.length;mt<gt;mt++){const Ot=n.get(E[mt]);Ot.__webglTexture&&(s.deleteTexture(Ot.__webglTexture),a.memory.textures--),n.remove(E[mt])}n.remove(E),n.remove(A)}let F=0;function nt(){F=0}function N(){const A=F;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),F+=1,A}function W(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function Y(A,E){const K=n.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&K.__version!==A.version){const vt=A.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ut(K,A,E);return}}e.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+E)}function z(A,E){const K=n.get(A);if(A.version>0&&K.__version!==A.version){ut(K,A,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+E)}function st(A,E){const K=n.get(A);if(A.version>0&&K.__version!==A.version){ut(K,A,E);return}e.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+E)}function j(A,E){const K=n.get(A);if(A.version>0&&K.__version!==A.version){ft(K,A,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+E)}const X={[ve]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},$={[Ve]:s.NEAREST,[rr]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[nl]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},pt={[pl]:s.NEVER,[wl]:s.ALWAYS,[ml]:s.LESS,[Xa]:s.LEQUAL,[gl]:s.EQUAL,[vl]:s.GEQUAL,[_l]:s.GREATER,[Ml]:s.NOTEQUAL};function q(A,E,K){if(K?(s.texParameteri(A,s.TEXTURE_WRAP_S,X[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,X[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,X[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,$[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,$[E.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==sn||E.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,L(E.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==Ve&&E.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,pt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const vt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ve||E.minFilter!==Xs&&E.minFilter!==Xi||E.type===In&&t.has("OES_texture_float_linear")===!1||r===!1&&E.type===qi&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(A,vt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function et(A,E){let K=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",I));const vt=E.source;let mt=l.get(vt);mt===void 0&&(mt={},l.set(vt,mt));const gt=W(E);if(gt!==A.__cacheKey){mt[gt]===void 0&&(mt[gt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,K=!0),mt[gt].usedTimes++;const Ot=mt[A.__cacheKey];Ot!==void 0&&(mt[A.__cacheKey].usedTimes--,Ot.usedTimes===0&&x(E)),A.__cacheKey=gt,A.__webglTexture=mt[gt].texture}return K}function ut(A,E,K){let vt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(vt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(vt=s.TEXTURE_3D);const mt=et(A,E),gt=E.source;e.bindTexture(vt,A.__webglTexture,s.TEXTURE0+K);const Ot=n.get(gt);if(gt.version!==Ot.__version||mt===!0){e.activeTexture(s.TEXTURE0+K);const At=ge.getPrimaries(ge.workingColorSpace),Nt=E.colorSpace===$e?null:ge.getPrimaries(E.colorSpace),Vt=E.colorSpace===$e||At===Nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const It=p(E)&&m(E.image)===!1;let wt=w(E.image,It,!1,i.maxTextureSize);wt=_t(E,wt);const $t=m(wt)||r,Jt=o.convert(E.format,E.colorSpace);let Xt=o.convert(E.type),Bt=S(E.internalFormat,Jt,Xt,E.colorSpace,E.isVideoTexture);q(vt,E,$t);let Ct;const Zt=E.mipmaps,te=r&&E.isVideoTexture!==!0&&Bt!==Va,Gt=Ot.__version===void 0||mt===!0,bt=P(E,wt,$t);if(E.isDepthTexture)Bt=s.DEPTH_COMPONENT,r?E.type===In?Bt=s.DEPTH_COMPONENT32F:E.type===Ln?Bt=s.DEPTH_COMPONENT24:E.type===Zn?Bt=s.DEPTH24_STENCIL8:Bt=s.DEPTH_COMPONENT16:E.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Kn&&Bt===s.DEPTH_COMPONENT&&E.type!==Bo&&E.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ln,Xt=o.convert(E.type)),E.format===Ti&&Bt===s.DEPTH_COMPONENT&&(Bt=s.DEPTH_STENCIL,E.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Zn,Xt=o.convert(E.type))),Gt&&(te?e.texStorage2D(s.TEXTURE_2D,1,Bt,wt.width,wt.height):e.texImage2D(s.TEXTURE_2D,0,Bt,wt.width,wt.height,0,Jt,Xt,null));else if(E.isDataTexture)if(Zt.length>0&&$t){te&&Gt&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,Zt[0].width,Zt[0].height);for(let xt=0,b=Zt.length;xt<b;xt++)Ct=Zt[xt],te?e.texSubImage2D(s.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,Jt,Xt,Ct.data):e.texImage2D(s.TEXTURE_2D,xt,Bt,Ct.width,Ct.height,0,Jt,Xt,Ct.data);E.generateMipmaps=!1}else te?(Gt&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,wt.width,wt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,wt.width,wt.height,Jt,Xt,wt.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,wt.width,wt.height,0,Jt,Xt,wt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){te&&Gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Bt,Zt[0].width,Zt[0].height,wt.depth);for(let xt=0,b=Zt.length;xt<b;xt++)Ct=Zt[xt],E.format!==on?Jt!==null?te?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,Ct.width,Ct.height,wt.depth,Jt,Ct.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xt,Bt,Ct.width,Ct.height,wt.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,Ct.width,Ct.height,wt.depth,Jt,Xt,Ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,xt,Bt,Ct.width,Ct.height,wt.depth,0,Jt,Xt,Ct.data)}else{te&&Gt&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,Zt[0].width,Zt[0].height);for(let xt=0,b=Zt.length;xt<b;xt++)Ct=Zt[xt],E.format!==on?Jt!==null?te?e.compressedTexSubImage2D(s.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,Jt,Ct.data):e.compressedTexImage2D(s.TEXTURE_2D,xt,Bt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(s.TEXTURE_2D,xt,0,0,Ct.width,Ct.height,Jt,Xt,Ct.data):e.texImage2D(s.TEXTURE_2D,xt,Bt,Ct.width,Ct.height,0,Jt,Xt,Ct.data)}else if(E.isDataArrayTexture)te?(Gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Bt,wt.width,wt.height,wt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Jt,Xt,wt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,wt.width,wt.height,wt.depth,0,Jt,Xt,wt.data);else if(E.isData3DTexture)te?(Gt&&e.texStorage3D(s.TEXTURE_3D,bt,Bt,wt.width,wt.height,wt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Jt,Xt,wt.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,wt.width,wt.height,wt.depth,0,Jt,Xt,wt.data);else if(E.isFramebufferTexture){if(Gt)if(te)e.texStorage2D(s.TEXTURE_2D,bt,Bt,wt.width,wt.height);else{let xt=wt.width,b=wt.height;for(let k=0;k<bt;k++)e.texImage2D(s.TEXTURE_2D,k,Bt,xt,b,0,Jt,Xt,null),xt>>=1,b>>=1}}else if(Zt.length>0&&$t){te&&Gt&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,Zt[0].width,Zt[0].height);for(let xt=0,b=Zt.length;xt<b;xt++)Ct=Zt[xt],te?e.texSubImage2D(s.TEXTURE_2D,xt,0,0,Jt,Xt,Ct):e.texImage2D(s.TEXTURE_2D,xt,Bt,Jt,Xt,Ct);E.generateMipmaps=!1}else te?(Gt&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,wt.width,wt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Jt,Xt,wt)):e.texImage2D(s.TEXTURE_2D,0,Bt,Jt,Xt,wt);v(E,$t)&&_(vt),Ot.__version=gt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ft(A,E,K){if(E.image.length!==6)return;const vt=et(A,E),mt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+K);const gt=n.get(mt);if(mt.version!==gt.__version||vt===!0){e.activeTexture(s.TEXTURE0+K);const Ot=ge.getPrimaries(ge.workingColorSpace),At=E.colorSpace===$e?null:ge.getPrimaries(E.colorSpace),Nt=E.colorSpace===$e||Ot===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,It=E.image[0]&&E.image[0].isDataTexture,wt=[];for(let xt=0;xt<6;xt++)!Vt&&!It?wt[xt]=w(E.image[xt],!1,!0,i.maxCubemapSize):wt[xt]=It?E.image[xt].image:E.image[xt],wt[xt]=_t(E,wt[xt]);const $t=wt[0],Jt=m($t)||r,Xt=o.convert(E.format,E.colorSpace),Bt=o.convert(E.type),Ct=S(E.internalFormat,Xt,Bt,E.colorSpace),Zt=r&&E.isVideoTexture!==!0,te=gt.__version===void 0||vt===!0;let Gt=P(E,$t,Jt);q(s.TEXTURE_CUBE_MAP,E,Jt);let bt;if(Vt){Zt&&te&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,Ct,$t.width,$t.height);for(let xt=0;xt<6;xt++){bt=wt[xt].mipmaps;for(let b=0;b<bt.length;b++){const k=bt[b];E.format!==on?Xt!==null?Zt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,b,0,0,k.width,k.height,Xt,k.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,b,Ct,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,b,0,0,k.width,k.height,Xt,Bt,k.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,b,Ct,k.width,k.height,0,Xt,Bt,k.data)}}}else{bt=E.mipmaps,Zt&&te&&(bt.length>0&&Gt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,Ct,wt[0].width,wt[0].height));for(let xt=0;xt<6;xt++)if(It){Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,wt[xt].width,wt[xt].height,Xt,Bt,wt[xt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Ct,wt[xt].width,wt[xt].height,0,Xt,Bt,wt[xt].data);for(let b=0;b<bt.length;b++){const Q=bt[b].image[xt].image;Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,b+1,0,0,Q.width,Q.height,Xt,Bt,Q.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,b+1,Ct,Q.width,Q.height,0,Xt,Bt,Q.data)}}else{Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Xt,Bt,wt[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Ct,Xt,Bt,wt[xt]);for(let b=0;b<bt.length;b++){const k=bt[b];Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,b+1,0,0,Xt,Bt,k.image[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,b+1,Ct,Xt,Bt,k.image[xt])}}}v(E,Jt)&&_(s.TEXTURE_CUBE_MAP),gt.__version=mt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function at(A,E,K,vt,mt,gt){const Ot=o.convert(K.format,K.colorSpace),At=o.convert(K.type),Nt=S(K.internalFormat,Ot,At,K.colorSpace);if(!n.get(E).__hasExternalTextures){const It=Math.max(1,E.width>>gt),wt=Math.max(1,E.height>>gt);mt===s.TEXTURE_3D||mt===s.TEXTURE_2D_ARRAY?e.texImage3D(mt,gt,Nt,It,wt,E.depth,0,Ot,At,null):e.texImage2D(mt,gt,Nt,It,wt,0,Ot,At,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ot(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,mt,n.get(K).__webglTexture,0,V(E)):(mt===s.TEXTURE_2D||mt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&mt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,vt,mt,n.get(K).__webglTexture,gt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(A,E,K){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let vt=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(K||ot(E)){const mt=E.depthTexture;mt&&mt.isDepthTexture&&(mt.type===In?vt=s.DEPTH_COMPONENT32F:mt.type===Ln&&(vt=s.DEPTH_COMPONENT24));const gt=V(E);ot(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,vt,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,vt,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,vt,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const vt=V(E);K&&ot(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,vt,s.DEPTH24_STENCIL8,E.width,E.height):ot(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,vt,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const vt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let mt=0;mt<vt.length;mt++){const gt=vt[mt],Ot=o.convert(gt.format,gt.colorSpace),At=o.convert(gt.type),Nt=S(gt.internalFormat,Ot,At,gt.colorSpace),Vt=V(E);K&&ot(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Nt,E.width,E.height):ot(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,Nt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Nt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y(E.depthTexture,0);const vt=n.get(E.depthTexture).__webglTexture,mt=V(E);if(E.depthTexture.format===Kn)ot(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,vt,0);else if(E.depthTexture.format===Ti)ot(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0,mt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Z(A){const E=n.get(A),K=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,A)}else if(K){E.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[vt]),E.__webglDepthbuffer[vt]=s.createRenderbuffer(),yt(E.__webglDepthbuffer[vt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),yt(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(A,E,K){const vt=n.get(A);E!==void 0&&at(vt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&Z(A)}function D(A){const E=A.texture,K=n.get(A),vt=n.get(E);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture()),vt.__version=E.version,a.memory.textures++);const mt=A.isWebGLCubeRenderTarget===!0,gt=A.isWebGLMultipleRenderTargets===!0,Ot=m(A)||r;if(mt){K.__webglFramebuffer=[];for(let At=0;At<6;At++)if(r&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[At]=[];for(let Nt=0;Nt<E.mipmaps.length;Nt++)K.__webglFramebuffer[At][Nt]=s.createFramebuffer()}else K.__webglFramebuffer[At]=s.createFramebuffer()}else{if(r&&E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)K.__webglFramebuffer[At]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(gt)if(i.drawBuffers){const At=A.texture;for(let Nt=0,Vt=At.length;Nt<Vt;Nt++){const It=n.get(At[Nt]);It.__webglTexture===void 0&&(It.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&A.samples>0&&ot(A)===!1){const At=gt?E:[E];K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Nt=0;Nt<At.length;Nt++){const Vt=At[Nt];K.__webglColorRenderbuffer[Nt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[Nt]);const It=o.convert(Vt.format,Vt.colorSpace),wt=o.convert(Vt.type),$t=S(Vt.internalFormat,It,wt,Vt.colorSpace,A.isXRRenderTarget===!0),Jt=V(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,$t,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,K.__webglColorRenderbuffer[Nt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),yt(K.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(mt){e.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),q(s.TEXTURE_CUBE_MAP,E,Ot);for(let At=0;At<6;At++)if(r&&E.mipmaps&&E.mipmaps.length>0)for(let Nt=0;Nt<E.mipmaps.length;Nt++)at(K.__webglFramebuffer[At][Nt],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,Nt);else at(K.__webglFramebuffer[At],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);v(E,Ot)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){const At=A.texture;for(let Nt=0,Vt=At.length;Nt<Vt;Nt++){const It=At[Nt],wt=n.get(It);e.bindTexture(s.TEXTURE_2D,wt.__webglTexture),q(s.TEXTURE_2D,It,Ot),at(K.__webglFramebuffer,A,It,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,0),v(It,Ot)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let At=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(r?At=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(At,vt.__webglTexture),q(At,E,Ot),r&&E.mipmaps&&E.mipmaps.length>0)for(let Nt=0;Nt<E.mipmaps.length;Nt++)at(K.__webglFramebuffer[Nt],A,E,s.COLOR_ATTACHMENT0,At,Nt);else at(K.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,At,0);v(E,Ot)&&_(At),e.unbindTexture()}A.depthBuffer&&Z(A)}function ht(A){const E=m(A)||r,K=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let vt=0,mt=K.length;vt<mt;vt++){const gt=K[vt];if(v(gt,E)){const Ot=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,At=n.get(gt).__webglTexture;e.bindTexture(Ot,At),_(Ot),e.unbindTexture()}}}function rt(A){if(r&&A.samples>0&&ot(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],K=A.width,vt=A.height;let mt=s.COLOR_BUFFER_BIT;const gt=[],Ot=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(A),Nt=A.isWebGLMultipleRenderTargets===!0;if(Nt)for(let Vt=0;Vt<E.length;Vt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Vt=0;Vt<E.length;Vt++){gt.push(s.COLOR_ATTACHMENT0+Vt),A.depthBuffer&&gt.push(Ot);const It=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(It===!1&&(A.depthBuffer&&(mt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(mt|=s.STENCIL_BUFFER_BIT)),Nt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[Vt]),It===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ot]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ot])),Nt){const wt=n.get(E[Vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,wt,0)}s.blitFramebuffer(0,0,K,vt,0,0,K,vt,mt,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,gt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Nt)for(let Vt=0;Vt<E.length;Vt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.RENDERBUFFER,At.__webglColorRenderbuffer[Vt]);const It=n.get(E[Vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.TEXTURE_2D,It,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function V(A){return Math.min(i.maxSamples,A.samples)}function ot(A){const E=n.get(A);return r&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Pt(A){const E=a.render.frame;d.get(A)!==E&&(d.set(A,E),A.update())}function _t(A,E){const K=A.colorSpace,vt=A.format,mt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Io||K!==Sn&&K!==$e&&(ge.getTransfer(K)===Me?r===!1?t.has("EXT_sRGB")===!0&&vt===on?(A.format=Io,A.minFilter=je,A.generateMipmaps=!1):E=Ya.sRGBToLinear(E):(vt!==on||mt!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}this.allocateTextureUnit=N,this.resetTextureUnits=nt,this.setTexture2D=Y,this.setTexture2DArray=z,this.setTexture3D=st,this.setTextureCube=j,this.rebindTextures=lt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=at,this.useMultisampledRTT=ot}function N0(s,t,e){const n=e.isWebGL2;function i(o,a=$e){let r;const c=ge.getTransfer(a);if(o===Nn)return s.UNSIGNED_BYTE;if(o===Oa)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Ga)return s.UNSIGNED_SHORT_5_5_5_1;if(o===il)return s.BYTE;if(o===sl)return s.SHORT;if(o===Bo)return s.UNSIGNED_SHORT;if(o===Fa)return s.INT;if(o===Ln)return s.UNSIGNED_INT;if(o===In)return s.FLOAT;if(o===qi)return n?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(o===ol)return s.ALPHA;if(o===on)return s.RGBA;if(o===rl)return s.LUMINANCE;if(o===al)return s.LUMINANCE_ALPHA;if(o===Kn)return s.DEPTH_COMPONENT;if(o===Ti)return s.DEPTH_STENCIL;if(o===Io)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(o===cl)return s.RED;if(o===Ba)return s.RED_INTEGER;if(o===ll)return s.RG;if(o===ka)return s.RG_INTEGER;if(o===za)return s.RGBA_INTEGER;if(o===qs||o===Ys||o===Zs||o===Ks)if(c===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ar||o===cr||o===lr||o===hr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===ar)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===lr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===hr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Va)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===dr||o===ur)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(o===dr)return c===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===ur)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fr||o===pr||o===mr||o===gr||o===_r||o===Mr||o===vr||o===wr||o===xr||o===Sr||o===yr||o===br||o===Er||o===Tr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(o===fr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===pr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===mr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===gr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===_r)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Mr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===vr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===wr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===xr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Sr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===yr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===br)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Er)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Tr)return c===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Js||o===Ar||o===Rr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(o===Js)return c===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ar)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Rr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===hl||o===Pr||o===Cr||o===Lr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(o===Js)return r.COMPRESSED_RED_RGTC1_EXT;if(o===Pr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Lr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Zn?n?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:i}}class F0 extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Mt extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class wo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,a=null;const r=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const w of t.hand.values()){const m=e.getJointPose(w,n),p=this._getHandJoint(h,w);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],l=d.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&l>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&l<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Mt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class G0 extends Pi{constructor(t,e){super();const n=this;let i=null,o=1,a=null,r="local-floor",c=1,h=null,d=null,f=null,l=null,u=null,g=null;const w=e.getContextAttributes();let m=null,p=null;const v=[],_=[],S=new Dt;let P=null;const L=new We;L.layers.enable(1),L.viewport=new we;const I=new We;I.layers.enable(2),I.viewport=new we;const B=[L,I],y=new F0;y.layers.enable(1),y.layers.enable(2);let x=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=v[q];return et===void 0&&(et=new wo,v[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=v[q];return et===void 0&&(et=new wo,v[q]=et),et.getGripSpace()},this.getHand=function(q){let et=v[q];return et===void 0&&(et=new wo,v[q]=et),et.getHandSpace()};function F(q){const et=_.indexOf(q.inputSource);if(et===-1)return;const ut=v[et];ut!==void 0&&(ut.update(q.inputSource,q.frame,h||a),ut.dispatchEvent({type:q.type,data:q.inputSource}))}function nt(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",nt),i.removeEventListener("inputsourceschange",N);for(let q=0;q<v.length;q++){const et=_[q];et!==null&&(_[q]=null,v[q].disconnect(et))}x=null,T=null,t.setRenderTarget(m),u=null,l=null,f=null,i=null,p=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return l!==null?l:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",nt),i.addEventListener("inputsourceschange",N),w.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const et={antialias:i.renderState.layers===void 0?w.antialias:!0,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(i,e,et),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new jn(u.framebufferWidth,u.framebufferHeight,{format:on,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil})}else{let et=null,ut=null,ft=null;w.depth&&(ft=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=w.stencil?Ti:Kn,ut=w.stencil?Zn:Ln);const at={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:o};f=new XRWebGLBinding(i,e),l=f.createProjectionLayer(at),i.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),p=new jn(l.textureWidth,l.textureHeight,{format:on,type:Nn,depthTexture:new rc(l.textureWidth,l.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0});const yt=t.properties.get(p);yt.__ignoreDepthValues=l.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(r),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function N(q){for(let et=0;et<q.removed.length;et++){const ut=q.removed[et],ft=_.indexOf(ut);ft>=0&&(_[ft]=null,v[ft].disconnect(ut))}for(let et=0;et<q.added.length;et++){const ut=q.added[et];let ft=_.indexOf(ut);if(ft===-1){for(let yt=0;yt<v.length;yt++)if(yt>=_.length){_.push(ut),ft=yt;break}else if(_[yt]===null){_[yt]=ut,ft=yt;break}if(ft===-1)break}const at=v[ft];at&&at.connect(ut)}}const W=new U,Y=new U;function z(q,et,ut){W.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(ut.matrixWorld);const ft=W.distanceTo(Y),at=et.projectionMatrix.elements,yt=ut.projectionMatrix.elements,Rt=at[14]/(at[10]-1),Z=at[14]/(at[10]+1),lt=(at[9]+1)/at[5],D=(at[9]-1)/at[5],ht=(at[8]-1)/at[0],rt=(yt[8]+1)/yt[0],V=Rt*ht,ot=Rt*rt,Pt=ft/(-ht+rt),_t=Pt*-ht;et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(_t),q.translateZ(Pt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const A=Rt+Pt,E=Z+Pt,K=V-_t,vt=ot+(ft-_t),mt=lt*Z/E*A,gt=D*Z/E*A;q.projectionMatrix.makePerspective(K,vt,mt,gt,A,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function st(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;y.near=I.near=L.near=q.near,y.far=I.far=L.far=q.far,(x!==y.near||T!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),x=y.near,T=y.far);const et=q.parent,ut=y.cameras;st(y,et);for(let ft=0;ft<ut.length;ft++)st(ut[ft],et);ut.length===2?z(y,L,I):y.projectionMatrix.copy(L.projectionMatrix),j(q,y,et)};function j(q,et,ut){ut===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(ut.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ai*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(l===null&&u===null))return c},this.setFoveation=function(q){c=q,l!==null&&(l.fixedFoveation=q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=q)};let X=null;function $(q,et){if(d=et.getViewerPose(h||a),g=et,d!==null){const ut=d.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let ft=!1;ut.length!==y.cameras.length&&(y.cameras.length=0,ft=!0);for(let at=0;at<ut.length;at++){const yt=ut[at];let Rt=null;if(u!==null)Rt=u.getViewport(yt);else{const lt=f.getViewSubImage(l,yt);Rt=lt.viewport,at===0&&(t.setRenderTargetTextures(p,lt.colorTexture,l.ignoreDepthValues?void 0:lt.depthStencilTexture),t.setRenderTarget(p))}let Z=B[at];Z===void 0&&(Z=new We,Z.layers.enable(at),Z.viewport=new we,B[at]=Z),Z.matrix.fromArray(yt.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(yt.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),at===0&&(y.matrix.copy(Z.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ft===!0&&y.cameras.push(Z)}}for(let ut=0;ut<v.length;ut++){const ft=_[ut],at=v[ut];ft!==null&&at!==void 0&&at.update(ft,et,h||a)}X&&X(q,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const pt=new sc;pt.setAnimationLoop($),this.setAnimationLoop=function(q){X=q},this.dispose=function(){}}}function B0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ec(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),f(m,p)):p.isMeshPhongMaterial?(o(m,p),d(m,p)):p.isMeshStandardMaterial?(o(m,p),l(m,p),p.isMeshPhysicalMaterial&&u(m,p,S)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),w(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function l(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function w(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k0(s,t,e,n){let i={},o={},a=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){const S=_.program;n.uniformBlockBinding(v,S)}function h(v,_){let S=i[v.id];S===void 0&&(g(v),S=d(v),i[v.id]=S,v.addEventListener("dispose",m));const P=_.program;n.updateUBOMapping(v,P);const L=t.render.frame;o[v.id]!==L&&(l(v),o[v.id]=L)}function d(v){const _=f();v.__bindingPointIndex=_;const S=s.createBuffer(),P=v.__size,L=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,P,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,S),S}function f(){for(let v=0;v<r;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(v){const _=i[v.id],S=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let L=0,I=S.length;L<I;L++){const B=Array.isArray(S[L])?S[L]:[S[L]];for(let y=0,x=B.length;y<x;y++){const T=B[y];if(u(T,L,y,P)===!0){const F=T.__offset,nt=Array.isArray(T.value)?T.value:[T.value];let N=0;for(let W=0;W<nt.length;W++){const Y=nt[W],z=w(Y);typeof Y=="number"||typeof Y=="boolean"?(T.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,F+N,T.__data)):Y.isMatrix3?(T.__data[0]=Y.elements[0],T.__data[1]=Y.elements[1],T.__data[2]=Y.elements[2],T.__data[3]=0,T.__data[4]=Y.elements[3],T.__data[5]=Y.elements[4],T.__data[6]=Y.elements[5],T.__data[7]=0,T.__data[8]=Y.elements[6],T.__data[9]=Y.elements[7],T.__data[10]=Y.elements[8],T.__data[11]=0):(Y.toArray(T.__data,N),N+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,_,S,P){const L=v.value,I=_+"_"+S;if(P[I]===void 0)return typeof L=="number"||typeof L=="boolean"?P[I]=L:P[I]=L.clone(),!0;{const B=P[I];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return P[I]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function g(v){const _=v.uniforms;let S=0;const P=16;for(let I=0,B=_.length;I<B;I++){const y=Array.isArray(_[I])?_[I]:[_[I]];for(let x=0,T=y.length;x<T;x++){const F=y[x],nt=Array.isArray(F.value)?F.value:[F.value];for(let N=0,W=nt.length;N<W;N++){const Y=nt[N],z=w(Y),st=S%P;st!==0&&P-st<z.boundary&&(S+=P-st),F.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=z.storage}}}const L=S%P;return L>0&&(S+=P-L),v.__size=S,v.__cache={},this}function w(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=a.indexOf(_.__bindingPointIndex);a.splice(S,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete o[_.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);a=[],i={},o={}}return{bind:c,update:h,dispose:p}}class uc{constructor(t={}){const{canvas:e=Nl(),context:n=null,depth:i=!0,stencil:o=!0,alpha:a=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let l;n!==null?l=n.getContextAttributes().alpha:l=a;const u=new Uint32Array(4),g=new Int32Array(4);let w=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const _=this;let S=!1,P=0,L=0,I=null,B=-1,y=null;const x=new we,T=new we;let F=null;const nt=new le(0);let N=0,W=e.width,Y=e.height,z=1,st=null,j=null;const X=new we(0,0,W,Y),$=new we(0,0,W,Y);let pt=!1;const q=new Vo;let et=!1,ut=!1,ft=null;const at=new be,yt=new Dt,Rt=new U,Z={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function lt(){return I===null?z:1}let D=n;function ht(R,J){for(let it=0;it<R.length;it++){const C=R[it],O=e.getContext(C,J);if(O!==null)return O}return null}try{const R={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",b,!1),e.addEventListener("webglcontextcreationerror",k,!1),D===null){const J=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&J.shift(),D=ht(J,R),D===null)throw ht(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let rt,V,ot,Pt,_t,A,E,K,vt,mt,gt,Ot,At,Nt,Vt,It,wt,$t,Jt,Xt,Bt,Ct,Zt,te;function Gt(){rt=new Ku(D),V=new Hu(D,rt,t),rt.init(V),Ct=new N0(D,rt,V),ot=new D0(D,rt,V),Pt=new $u(D),_t=new v0,A=new U0(D,rt,ot,_t,V,Ct,Pt),E=new Xu(_),K=new Zu(_),vt=new rh(D,V),Zt=new zu(D,rt,vt,V),mt=new Ju(D,vt,Pt,Zt),gt=new nf(D,mt,vt,Pt),Jt=new ef(D,V,A),It=new Wu(_t),Ot=new M0(_,E,K,rt,V,Zt,It),At=new B0(_,_t),Nt=new x0,Vt=new A0(rt,V),$t=new ku(_,E,K,ot,gt,l,c),wt=new I0(_,gt,V),te=new k0(D,Pt,V,ot),Xt=new Vu(D,rt,Pt,V),Bt=new ju(D,rt,Pt,V),Pt.programs=Ot.programs,_.capabilities=V,_.extensions=rt,_.properties=_t,_.renderLists=Nt,_.shadowMap=wt,_.state=ot,_.info=Pt}Gt();const bt=new G0(_,D);this.xr=bt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=rt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=rt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(W,Y,!1))},this.getSize=function(R){return R.set(W,Y)},this.setSize=function(R,J,it=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,Y=J,e.width=Math.floor(R*z),e.height=Math.floor(J*z),it===!0&&(e.style.width=R+"px",e.style.height=J+"px"),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(W*z,Y*z).floor()},this.setDrawingBufferSize=function(R,J,it){W=R,Y=J,z=it,e.width=Math.floor(R*it),e.height=Math.floor(J*it),this.setViewport(0,0,R,J)},this.getCurrentViewport=function(R){return R.copy(x)},this.getViewport=function(R){return R.copy(X)},this.setViewport=function(R,J,it,C){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,J,it,C),ot.viewport(x.copy(X).multiplyScalar(z).floor())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,J,it,C){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,J,it,C),ot.scissor(T.copy($).multiplyScalar(z).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){ot.setScissorTest(pt=R)},this.setOpaqueSort=function(R){st=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(R=!0,J=!0,it=!0){let C=0;if(R){let O=!1;if(I!==null){const tt=I.texture.format;O=tt===za||tt===ka||tt===Ba}if(O){const tt=I.texture.type,St=tt===Nn||tt===Ln||tt===Bo||tt===Zn||tt===Oa||tt===Ga,Ft=$t.getClearColor(),qt=$t.getClearAlpha(),jt=Ft.r,ee=Ft.g,ie=Ft.b;St?(u[0]=jt,u[1]=ee,u[2]=ie,u[3]=qt,D.clearBufferuiv(D.COLOR,0,u)):(g[0]=jt,g[1]=ee,g[2]=ie,g[3]=qt,D.clearBufferiv(D.COLOR,0,g))}else C|=D.COLOR_BUFFER_BIT}J&&(C|=D.DEPTH_BUFFER_BIT),it&&(C|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",b,!1),e.removeEventListener("webglcontextcreationerror",k,!1),Nt.dispose(),Vt.dispose(),_t.dispose(),E.dispose(),K.dispose(),gt.dispose(),Zt.dispose(),te.dispose(),Ot.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ne),bt.removeEventListener("sessionend",Ht),ft&&(ft.dispose(),ft=null),ue.stop()};function xt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=Pt.autoReset,J=wt.enabled,it=wt.autoUpdate,C=wt.needsUpdate,O=wt.type;Gt(),Pt.autoReset=R,wt.enabled=J,wt.autoUpdate=it,wt.needsUpdate=C,wt.type=O}function k(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Q(R){const J=R.target;J.removeEventListener("dispose",Q),Tt(J)}function Tt(R){dt(R),_t.remove(R)}function dt(R){const J=_t.get(R).programs;J!==void 0&&(J.forEach(function(it){Ot.releaseProgram(it)}),R.isShaderMaterial&&Ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,it,C,O,tt){J===null&&(J=Z);const St=O.isMesh&&O.matrixWorld.determinant()<0,Ft=bn(R,J,it,C,O);ot.setMaterial(C,St);let qt=it.index,jt=1;if(C.wireframe===!0){if(qt=mt.getWireframeAttribute(it),qt===void 0)return;jt=2}const ee=it.drawRange,ie=it.attributes.position;let Ee=ee.start*jt,qe=(ee.start+ee.count)*jt;tt!==null&&(Ee=Math.max(Ee,tt.start*jt),qe=Math.min(qe,(tt.start+tt.count)*jt)),qt!==null?(Ee=Math.max(Ee,0),qe=Math.min(qe,qt.count)):ie!=null&&(Ee=Math.max(Ee,0),qe=Math.min(qe,ie.count));const Ie=qe-Ee;if(Ie<0||Ie===1/0)return;Zt.setup(O,C,Ft,it,qt);let fn,xe=Xt;if(qt!==null&&(fn=vt.get(qt),xe=Bt,xe.setIndex(fn)),O.isMesh)C.wireframe===!0?(ot.setLineWidth(C.wireframeLinewidth*lt()),xe.setMode(D.LINES)):xe.setMode(D.TRIANGLES);else if(O.isLine){let ae=C.linewidth;ae===void 0&&(ae=1),ot.setLineWidth(ae*lt()),O.isLineSegments?xe.setMode(D.LINES):O.isLineLoop?xe.setMode(D.LINE_LOOP):xe.setMode(D.LINE_STRIP)}else O.isPoints?xe.setMode(D.POINTS):O.isSprite&&xe.setMode(D.TRIANGLES);if(O.isBatchedMesh)xe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)xe.renderInstances(Ee,Ie,O.count);else if(it.isInstancedBufferGeometry){const ae=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,zs=Math.min(it.instanceCount,ae);xe.renderInstances(Ee,Ie,zs)}else xe.render(Ee,Ie)};function Et(R,J,it){R.transparent===!0&&R.side===Te&&R.forceSinglePass===!1?(R.side=He,R.needsUpdate=!0,Le(R,J,it),R.side=Fn,R.needsUpdate=!0,Le(R,J,it),R.side=Te):Le(R,J,it)}this.compile=function(R,J,it=null){it===null&&(it=R),m=Vt.get(it),m.init(),v.push(m),it.traverseVisible(function(O){O.isLight&&O.layers.test(J.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),R!==it&&R.traverseVisible(function(O){O.isLight&&O.layers.test(J.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(_._useLegacyLights);const C=new Set;return R.traverse(function(O){const tt=O.material;if(tt)if(Array.isArray(tt))for(let St=0;St<tt.length;St++){const Ft=tt[St];Et(Ft,it,O),C.add(Ft)}else Et(tt,it,O),C.add(tt)}),v.pop(),m=null,C},this.compileAsync=function(R,J,it=null){const C=this.compile(R,J,it);return new Promise(O=>{function tt(){if(C.forEach(function(St){_t.get(St).currentProgram.isReady()&&C.delete(St)}),C.size===0){O(R);return}setTimeout(tt,10)}rt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let kt=null;function re(R){kt&&kt(R)}function ne(){ue.stop()}function Ht(){ue.start()}const ue=new sc;ue.setAnimationLoop(re),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(R){kt=R,bt.setAnimationLoop(R),R===null?ue.stop():ue.start()},bt.addEventListener("sessionstart",ne),bt.addEventListener("sessionend",Ht),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(J),J=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,J,I),m=Vt.get(R,v.length),m.init(),v.push(m),at.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),q.setFromProjectionMatrix(at),ut=this.localClippingEnabled,et=It.init(this.clippingPlanes,ut),w=Nt.get(R,p.length),w.init(),p.push(w),Lt(R,J,0,_.sortObjects),w.finish(),_.sortObjects===!0&&w.sort(st,j),this.info.render.frame++,et===!0&&It.beginShadows();const it=m.state.shadowsArray;if(wt.render(it,R,J),et===!0&&It.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(w,R),m.setupLights(_._useLegacyLights),J.isArrayCamera){const C=J.cameras;for(let O=0,tt=C.length;O<tt;O++){const St=C[O];Qt(w,R,St,St.viewport)}}else Qt(w,R,J);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(_,R,J),Zt.resetDefaultState(),B=-1,y=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?w=p[p.length-1]:w=null};function Lt(R,J,it,C){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||q.intersectsSprite(R)){C&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(at);const St=gt.update(R),Ft=R.material;Ft.visible&&w.push(R,St,Ft,it,Rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||q.intersectsObject(R))){const St=gt.update(R),Ft=R.material;if(C&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Rt.copy(St.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(at)),Array.isArray(Ft)){const qt=St.groups;for(let jt=0,ee=qt.length;jt<ee;jt++){const ie=qt[jt],Ee=Ft[ie.materialIndex];Ee&&Ee.visible&&w.push(R,St,Ee,it,Rt.z,ie)}}else Ft.visible&&w.push(R,St,Ft,it,Rt.z,null)}}const tt=R.children;for(let St=0,Ft=tt.length;St<Ft;St++)Lt(tt[St],J,it,C)}function Qt(R,J,it,C){const O=R.opaque,tt=R.transmissive,St=R.transparent;m.setupLightsView(it),et===!0&&It.setGlobalState(_.clippingPlanes,it),tt.length>0&&zt(O,tt,J,it),C&&ot.viewport(x.copy(C)),O.length>0&&pe(O,J,it),tt.length>0&&pe(tt,J,it),St.length>0&&pe(St,J,it),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function zt(R,J,it,C){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;const tt=V.isWebGL2;ft===null&&(ft=new jn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")?qi:Nn,minFilter:Xi,samples:tt?4:0})),_.getDrawingBufferSize(yt),tt?ft.setSize(yt.x,yt.y):ft.setSize(Ls(yt.x),Ls(yt.y));const St=_.getRenderTarget();_.setRenderTarget(ft),_.getClearColor(nt),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();const Ft=_.toneMapping;_.toneMapping=Un,pe(R,it,C),A.updateMultisampleRenderTarget(ft),A.updateRenderTargetMipmap(ft);let qt=!1;for(let jt=0,ee=J.length;jt<ee;jt++){const ie=J[jt],Ee=ie.object,qe=ie.geometry,Ie=ie.material,fn=ie.group;if(Ie.side===Te&&Ee.layers.test(C.layers)){const xe=Ie.side;Ie.side=He,Ie.needsUpdate=!0,fe(Ee,it,C,qe,Ie,fn),Ie.side=xe,Ie.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(ft),A.updateRenderTargetMipmap(ft)),_.setRenderTarget(St),_.setClearColor(nt,N),_.toneMapping=Ft}function pe(R,J,it){const C=J.isScene===!0?J.overrideMaterial:null;for(let O=0,tt=R.length;O<tt;O++){const St=R[O],Ft=St.object,qt=St.geometry,jt=C===null?St.material:C,ee=St.group;Ft.layers.test(it.layers)&&fe(Ft,J,it,qt,jt,ee)}}function fe(R,J,it,C,O,tt){R.onBeforeRender(_,J,it,C,O,tt),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),O.onBeforeRender(_,J,it,C,R,tt),O.transparent===!0&&O.side===Te&&O.forceSinglePass===!1?(O.side=He,O.needsUpdate=!0,_.renderBufferDirect(it,J,C,O,R,tt),O.side=Fn,O.needsUpdate=!0,_.renderBufferDirect(it,J,C,O,R,tt),O.side=Te):_.renderBufferDirect(it,J,C,O,R,tt),R.onAfterRender(_,J,it,C,O,tt)}function Le(R,J,it){J.isScene!==!0&&(J=Z);const C=_t.get(R),O=m.state.lights,tt=m.state.shadowsArray,St=O.state.version,Ft=Ot.getParameters(R,O.state,tt,J,it),qt=Ot.getProgramCacheKey(Ft);let jt=C.programs;C.environment=R.isMeshStandardMaterial?J.environment:null,C.fog=J.fog,C.envMap=(R.isMeshStandardMaterial?K:E).get(R.envMap||C.environment),jt===void 0&&(R.addEventListener("dispose",Q),jt=new Map,C.programs=jt);let ee=jt.get(qt);if(ee!==void 0){if(C.currentProgram===ee&&C.lightsStateVersion===St)return an(R,Ft),ee}else Ft.uniforms=Ot.getUniforms(R),R.onBuild(it,Ft,_),R.onBeforeCompile(Ft,_),ee=Ot.acquireProgram(Ft,qt),jt.set(qt,ee),C.uniforms=Ft.uniforms;const ie=C.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ie.clippingPlanes=It.uniform),an(R,Ft),C.needsLights=On(R),C.lightsStateVersion=St,C.needsLights&&(ie.ambientLightColor.value=O.state.ambient,ie.lightProbe.value=O.state.probe,ie.directionalLights.value=O.state.directional,ie.directionalLightShadows.value=O.state.directionalShadow,ie.spotLights.value=O.state.spot,ie.spotLightShadows.value=O.state.spotShadow,ie.rectAreaLights.value=O.state.rectArea,ie.ltc_1.value=O.state.rectAreaLTC1,ie.ltc_2.value=O.state.rectAreaLTC2,ie.pointLights.value=O.state.point,ie.pointLightShadows.value=O.state.pointShadow,ie.hemisphereLights.value=O.state.hemi,ie.directionalShadowMap.value=O.state.directionalShadowMap,ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ie.spotShadowMap.value=O.state.spotShadowMap,ie.spotLightMatrix.value=O.state.spotLightMatrix,ie.spotLightMap.value=O.state.spotLightMap,ie.pointShadowMap.value=O.state.pointShadowMap,ie.pointShadowMatrix.value=O.state.pointShadowMatrix),C.currentProgram=ee,C.uniformsList=null,ee}function rn(R){if(R.uniformsList===null){const J=R.currentProgram.getUniforms();R.uniformsList=Es.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function an(R,J){const it=_t.get(R);it.outputColorSpace=J.outputColorSpace,it.batching=J.batching,it.instancing=J.instancing,it.instancingColor=J.instancingColor,it.skinning=J.skinning,it.morphTargets=J.morphTargets,it.morphNormals=J.morphNormals,it.morphColors=J.morphColors,it.morphTargetsCount=J.morphTargetsCount,it.numClippingPlanes=J.numClippingPlanes,it.numIntersection=J.numClipIntersection,it.vertexAlphas=J.vertexAlphas,it.vertexTangents=J.vertexTangents,it.toneMapping=J.toneMapping}function bn(R,J,it,C,O){J.isScene!==!0&&(J=Z),A.resetTextureUnits();const tt=J.fog,St=C.isMeshStandardMaterial?J.environment:null,Ft=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Sn,qt=(C.isMeshStandardMaterial?K:E).get(C.envMap||St),jt=C.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ee=!!it.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),ie=!!it.morphAttributes.position,Ee=!!it.morphAttributes.normal,qe=!!it.morphAttributes.color;let Ie=Un;C.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ie=_.toneMapping);const fn=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,xe=fn!==void 0?fn.length:0,ae=_t.get(C),zs=m.state.lights;if(et===!0&&(ut===!0||R!==y)){const Ke=R===y&&C.id===B;It.setState(C,R,Ke)}let ye=!1;C.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==zs.state.version||ae.outputColorSpace!==Ft||O.isBatchedMesh&&ae.batching===!1||!O.isBatchedMesh&&ae.batching===!0||O.isInstancedMesh&&ae.instancing===!1||!O.isInstancedMesh&&ae.instancing===!0||O.isSkinnedMesh&&ae.skinning===!1||!O.isSkinnedMesh&&ae.skinning===!0||O.isInstancedMesh&&ae.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&ae.instancingColor===!1&&O.instanceColor!==null||ae.envMap!==qt||C.fog===!0&&ae.fog!==tt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==It.numPlanes||ae.numIntersection!==It.numIntersection)||ae.vertexAlphas!==jt||ae.vertexTangents!==ee||ae.morphTargets!==ie||ae.morphNormals!==Ee||ae.morphColors!==qe||ae.toneMapping!==Ie||V.isWebGL2===!0&&ae.morphTargetsCount!==xe)&&(ye=!0):(ye=!0,ae.__version=C.version);let Gn=ae.currentProgram;ye===!0&&(Gn=Le(C,J,O));let $o=!1,Ii=!1,Vs=!1;const Oe=Gn.getUniforms(),Bn=ae.uniforms;if(ot.useProgram(Gn.program)&&($o=!0,Ii=!0,Vs=!0),C.id!==B&&(B=C.id,Ii=!0),$o||y!==R){Oe.setValue(D,"projectionMatrix",R.projectionMatrix),Oe.setValue(D,"viewMatrix",R.matrixWorldInverse);const Ke=Oe.map.cameraPosition;Ke!==void 0&&Ke.setValue(D,Rt.setFromMatrixPosition(R.matrixWorld)),V.logarithmicDepthBuffer&&Oe.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&Oe.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Ii=!0,Vs=!0)}if(O.isSkinnedMesh){Oe.setOptional(D,O,"bindMatrix"),Oe.setOptional(D,O,"bindMatrixInverse");const Ke=O.skeleton;Ke&&(V.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Oe.setValue(D,"boneTexture",Ke.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Oe.setOptional(D,O,"batchingTexture"),Oe.setValue(D,"batchingTexture",O._matricesTexture,A));const Hs=it.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0&&V.isWebGL2===!0)&&Jt.update(O,it,Gn),(Ii||ae.receiveShadow!==O.receiveShadow)&&(ae.receiveShadow=O.receiveShadow,Oe.setValue(D,"receiveShadow",O.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(Bn.envMap.value=qt,Bn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),Ii&&(Oe.setValue(D,"toneMappingExposure",_.toneMappingExposure),ae.needsLights&&un(Bn,Vs),tt&&C.fog===!0&&At.refreshFogUniforms(Bn,tt),At.refreshMaterialUniforms(Bn,C,z,Y,ft),Es.upload(D,rn(ae),Bn,A)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Es.upload(D,rn(ae),Bn,A),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&Oe.setValue(D,"center",O.center),Oe.setValue(D,"modelViewMatrix",O.modelViewMatrix),Oe.setValue(D,"normalMatrix",O.normalMatrix),Oe.setValue(D,"modelMatrix",O.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){const Ke=C.uniformsGroups;for(let Ws=0,yc=Ke.length;Ws<yc;Ws++)if(V.isWebGL2){const Qo=Ke[Ws];te.update(Qo,Gn),te.bind(Qo,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function un(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function On(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,J,it){_t.get(R.texture).__webglTexture=J,_t.get(R.depthTexture).__webglTexture=it;const C=_t.get(R);C.__hasExternalTextures=!0,C.__hasExternalTextures&&(C.__autoAllocateDepthBuffer=it===void 0,C.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),C.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,J){const it=_t.get(R);it.__webglFramebuffer=J,it.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(R,J=0,it=0){I=R,P=J,L=it;let C=!0,O=null,tt=!1,St=!1;if(R){const qt=_t.get(R);qt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(D.FRAMEBUFFER,null),C=!1):qt.__webglFramebuffer===void 0?A.setupRenderTarget(R):qt.__hasExternalTextures&&A.rebindTextures(R,_t.get(R.texture).__webglTexture,_t.get(R.depthTexture).__webglTexture);const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(St=!0);const ee=_t.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[J])?O=ee[J][it]:O=ee[J],tt=!0):V.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?O=_t.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?O=ee[it]:O=ee,x.copy(R.viewport),T.copy(R.scissor),F=R.scissorTest}else x.copy(X).multiplyScalar(z).floor(),T.copy($).multiplyScalar(z).floor(),F=pt;if(ot.bindFramebuffer(D.FRAMEBUFFER,O)&&V.drawBuffers&&C&&ot.drawBuffers(R,O),ot.viewport(x),ot.scissor(T),ot.setScissorTest(F),tt){const qt=_t.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+J,qt.__webglTexture,it)}else if(St){const qt=_t.get(R.texture),jt=J||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.__webglTexture,it||0,jt)}B=-1},this.readRenderTargetPixels=function(R,J,it,C,O,tt,St){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=_t.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(Ft=Ft[St]),Ft){ot.bindFramebuffer(D.FRAMEBUFFER,Ft);try{const qt=R.texture,jt=qt.format,ee=qt.type;if(jt!==on&&Ct.convert(jt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ie=ee===qi&&(rt.has("EXT_color_buffer_half_float")||V.isWebGL2&&rt.has("EXT_color_buffer_float"));if(ee!==Nn&&Ct.convert(ee)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ee===In&&(V.isWebGL2||rt.has("OES_texture_float")||rt.has("WEBGL_color_buffer_float")))&&!ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-C&&it>=0&&it<=R.height-O&&D.readPixels(J,it,C,O,Ct.convert(jt),Ct.convert(ee),tt)}finally{const qt=I!==null?_t.get(I).__webglFramebuffer:null;ot.bindFramebuffer(D.FRAMEBUFFER,qt)}}},this.copyFramebufferToTexture=function(R,J,it=0){const C=Math.pow(2,-it),O=Math.floor(J.image.width*C),tt=Math.floor(J.image.height*C);A.setTexture2D(J,0),D.copyTexSubImage2D(D.TEXTURE_2D,it,0,0,R.x,R.y,O,tt),ot.unbindTexture()},this.copyTextureToTexture=function(R,J,it,C=0){const O=J.image.width,tt=J.image.height,St=Ct.convert(it.format),Ft=Ct.convert(it.type);A.setTexture2D(it,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,it.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,it.unpackAlignment),J.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,C,R.x,R.y,O,tt,St,Ft,J.image.data):J.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,C,R.x,R.y,J.mipmaps[0].width,J.mipmaps[0].height,St,J.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,C,R.x,R.y,St,Ft,J.image),C===0&&it.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ot.unbindTexture()},this.copyTextureToTexture3D=function(R,J,it,C,O=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const tt=R.max.x-R.min.x+1,St=R.max.y-R.min.y+1,Ft=R.max.z-R.min.z+1,qt=Ct.convert(C.format),jt=Ct.convert(C.type);let ee;if(C.isData3DTexture)A.setTexture3D(C,0),ee=D.TEXTURE_3D;else if(C.isDataArrayTexture||C.isCompressedArrayTexture)A.setTexture2DArray(C,0),ee=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const ie=D.getParameter(D.UNPACK_ROW_LENGTH),Ee=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qe=D.getParameter(D.UNPACK_SKIP_PIXELS),Ie=D.getParameter(D.UNPACK_SKIP_ROWS),fn=D.getParameter(D.UNPACK_SKIP_IMAGES),xe=it.isCompressedTexture?it.mipmaps[O]:it.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,R.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,R.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,R.min.z),it.isDataTexture||it.isData3DTexture?D.texSubImage3D(ee,O,J.x,J.y,J.z,tt,St,Ft,qt,jt,xe.data):it.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(ee,O,J.x,J.y,J.z,tt,St,Ft,qt,xe.data)):D.texSubImage3D(ee,O,J.x,J.y,J.z,tt,St,Ft,qt,jt,xe),D.pixelStorei(D.UNPACK_ROW_LENGTH,ie),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fn),O===0&&C.generateMipmaps&&D.generateMipmap(ee),ot.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),ot.unbindTexture()},this.resetState=function(){P=0,L=0,I=null,ot.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ko?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===Ns?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?Jn:Ha}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Jn?Ne:Sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class z0 extends uc{}z0.prototype.isWebGL1Renderer=!0;class Wo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(t),this.density=e}clone(){return new Wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class V0 extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class fc extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const wa=new U,xa=new U,Sa=new be,xo=new Ja,ws=new Fs;class H0 extends Re{constructor(t=new Fe,e=new fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)wa.fromBufferAttribute(e,i-1),xa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=wa.distanceTo(xa);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(i),ws.radius+=o,t.ray.intersectsSphere(ws)===!1)return;Sa.copy(i).invert(),xo.copy(t.ray).applyMatrix4(Sa);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,h=new U,d=new U,f=new U,l=new U,u=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,a.start),v=Math.min(g.count,a.start+a.count);for(let _=p,S=v-1;_<S;_+=u){const P=g.getX(_),L=g.getX(_+1);if(h.fromBufferAttribute(m,P),d.fromBufferAttribute(m,L),xo.distanceSqToSegment(h,d,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const B=t.ray.origin.distanceTo(l);B<t.near||B>t.far||e.push({distance:B,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),v=Math.min(m.count,a.start+a.count);for(let _=p,S=v-1;_<S;_+=u){if(h.fromBufferAttribute(m,_),d.fromBufferAttribute(m,_+1),xo.distanceSqToSegment(h,d,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(l);L<t.near||L>t.far||e.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}class oe extends Xe{constructor(t,e,n,i,o,a,r,c,h){super(t,e,n,i,o,a,r,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,c=o-1,h;for(;r<=c;)if(i=Math.floor(r+(c-r)/2),h=n[i]-a,h<0)r=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(o-1);const d=n[i],l=n[i+1]-d,u=(a-d)/l;return(i+u)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const a=this.getPoint(i),r=this.getPoint(o),c=e||(a.isVector2?new Dt:new U);return c.copy(r).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,i=[],o=[],a=[],r=new U,c=new be;for(let u=0;u<=t;u++){const g=u/t;i[u]=this.getTangentAt(g,new U)}o[0]=new U,a[0]=new U;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),f=Math.abs(i[0].y),l=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),l<=h&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],r),a[0].crossVectors(i[0],o[0]);for(let u=1;u<=t;u++){if(o[u]=o[u-1].clone(),a[u]=a[u-1].clone(),r.crossVectors(i[u-1],i[u]),r.length()>Number.EPSILON){r.normalize();const g=Math.acos(Ue(i[u-1].dot(i[u]),-1,1));o[u].applyMatrix4(c.makeRotationAxis(r,g))}a[u].crossVectors(i[u],o[u])}if(e===!0){let u=Math.acos(Ue(o[0].dot(o[t]),-1,1));u/=t,i[0].dot(r.crossVectors(o[0],o[t]))>0&&(u=-u);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],u*g)),a[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xo extends dn{constructor(t=0,e=0,n=1,i=1,o=0,a=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=r,this.aRotation=c}getPoint(t,e){const n=e||new Dt,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(a?o=0:o=i),this.aClockwise===!0&&!a&&(o===i?o=-i:o=o-i);const r=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(r),h=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),l=c-this.aX,u=h-this.aY;c=l*d-u*f+this.aX,h=l*f+u*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class W0 extends Xo{constructor(t,e,n,i,o,a){super(t,e,n,n,i,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function qo(){let s=0,t=0,e=0,n=0;function i(o,a,r,c){s=o,t=r,e=-3*o+3*a-2*r-c,n=2*o-2*a+r+c}return{initCatmullRom:function(o,a,r,c,h){i(a,r,h*(r-o),h*(c-a))},initNonuniformCatmullRom:function(o,a,r,c,h,d,f){let l=(a-o)/h-(r-o)/(h+d)+(r-a)/d,u=(r-a)/d-(c-a)/(d+f)+(c-r)/f;l*=d,u*=d,i(a,r,l,u)},calc:function(o){const a=o*o,r=a*o;return s+t*o+e*a+n*r}}}const xs=new U,So=new qo,yo=new qo,bo=new qo;class Cn extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,o=i.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),c=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:c===0&&r===o-1&&(r=o-2,c=1);let h,d;this.closed||r>0?h=i[(r-1)%o]:(xs.subVectors(i[0],i[1]).add(i[0]),h=xs);const f=i[r%o],l=i[(r+1)%o];if(this.closed||r+2<o?d=i[(r+2)%o]:(xs.subVectors(i[o-1],i[o-2]).add(i[o-1]),d=xs),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(f),u),w=Math.pow(f.distanceToSquared(l),u),m=Math.pow(l.distanceToSquared(d),u);w<1e-4&&(w=1),g<1e-4&&(g=w),m<1e-4&&(m=w),So.initNonuniformCatmullRom(h.x,f.x,l.x,d.x,g,w,m),yo.initNonuniformCatmullRom(h.y,f.y,l.y,d.y,g,w,m),bo.initNonuniformCatmullRom(h.z,f.z,l.z,d.z,g,w,m)}else this.curveType==="catmullrom"&&(So.initCatmullRom(h.x,f.x,l.x,d.x,this.tension),yo.initCatmullRom(h.y,f.y,l.y,d.y,this.tension),bo.initCatmullRom(h.z,f.z,l.z,d.z,this.tension));return n.set(So.calc(c),yo.calc(c),bo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ya(s,t,e,n,i){const o=(n-t)*.5,a=(i-e)*.5,r=s*s,c=s*r;return(2*e-2*n+o+a)*c+(-3*e+3*n-2*o-a)*r+o*s+e}function X0(s,t){const e=1-s;return e*e*t}function q0(s,t){return 2*(1-s)*s*t}function Y0(s,t){return s*s*t}function Vi(s,t,e,n){return X0(s,t)+q0(s,e)+Y0(s,n)}function Z0(s,t){const e=1-s;return e*e*e*t}function K0(s,t){const e=1-s;return 3*e*e*s*t}function J0(s,t){return 3*(1-s)*s*s*t}function j0(s,t){return s*s*s*t}function Hi(s,t,e,n,i){return Z0(s,t)+K0(s,e)+J0(s,n)+j0(s,i)}class pc extends dn{constructor(t=new Dt,e=new Dt,n=new Dt,i=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Dt){const n=e,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(Hi(t,i.x,o.x,a.x,r.x),Hi(t,i.y,o.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $0 extends dn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(Hi(t,i.x,o.x,a.x,r.x),Hi(t,i.y,o.y,a.y,r.y),Hi(t,i.z,o.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mc extends dn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q0 extends dn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends dn{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){const n=e,i=this.v0,o=this.v1,a=this.v2;return n.set(Vi(t,i.x,o.x,a.x),Vi(t,i.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends dn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,o=this.v1,a=this.v2;return n.set(Vi(t,i.x,o.x,a.x),Vi(t,i.y,o.y,a.y),Vi(t,i.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){const n=e,i=this.points,o=(i.length-1)*t,a=Math.floor(o),r=o-a,c=i[a===0?a:a-1],h=i[a],d=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(ya(r,c.x,h.x,d.x,f.x),ya(r,c.y,h.y,d.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Dt().fromArray(i))}return this}}var Ds=Object.freeze({__proto__:null,ArcCurve:W0,CatmullRomCurve3:Cn,CubicBezierCurve:pc,CubicBezierCurve3:$0,EllipseCurve:Xo,LineCurve:mc,LineCurve3:Q0,QuadraticBezierCurve:gc,QuadraticBezierCurve3:_c,SplineCurve:Mc});class tp extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ds[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const a=i[o]-n,r=this.curves[o],c=r.getLength(),h=c===0?0:1-a/c;return r.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const a=o[i],r=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(r);for(let h=0;h<c.length;h++){const d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ds[i.type]().fromJSON(i))}return this}}class ba extends tp{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mc(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new gc(this.currentPoint.clone(),new Dt(t,e),new Dt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,a){const r=new pc(this.currentPoint.clone(),new Dt(t,e),new Dt(n,i),new Dt(o,a));return this.curves.push(r),this.currentPoint.set(o,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,a){const r=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+r,e+c,n,i,o,a),this}absarc(t,e,n,i,o,a){return this.absellipse(t,e,n,n,i,o,a),this}ellipse(t,e,n,i,o,a,r,c){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,i,o,a,r,c),this}absellipse(t,e,n,i,o,a,r,c){const h=new Xo(t,e,n,i,o,a,r,c);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ji extends Fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],a=[],r=[],c=[],h=new U,d=new Dt;a.push(0,0,0),r.push(0,0,1),c.push(.5,.5);for(let f=0,l=3;f<=e;f++,l+=3){const u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),a.push(h.x,h.y,h.z),r.push(0,0,1),d.x=(a[l]/t+1)/2,d.y=(a[l+1]/t+1)/2,c.push(d.x,d.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(r,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ct extends Fe{constructor(t=1,e=1,n=1,i=32,o=1,a=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:c};const h=this;i=Math.floor(i),o=Math.floor(o);const d=[],f=[],l=[],u=[];let g=0;const w=[],m=n/2;let p=0;v(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(u,2));function v(){const S=new U,P=new U;let L=0;const I=(e-t)/n;for(let B=0;B<=o;B++){const y=[],x=B/o,T=x*(e-t)+t;for(let F=0;F<=i;F++){const nt=F/i,N=nt*c+r,W=Math.sin(N),Y=Math.cos(N);P.x=T*W,P.y=-x*n+m,P.z=T*Y,f.push(P.x,P.y,P.z),S.set(W,I,Y).normalize(),l.push(S.x,S.y,S.z),u.push(nt,1-x),y.push(g++)}w.push(y)}for(let B=0;B<i;B++)for(let y=0;y<o;y++){const x=w[y][B],T=w[y+1][B],F=w[y+1][B+1],nt=w[y][B+1];d.push(x,T,nt),d.push(T,F,nt),L+=6}h.addGroup(p,L,0),p+=L}function _(S){const P=g,L=new Dt,I=new U;let B=0;const y=S===!0?t:e,x=S===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,m*x,0),l.push(0,x,0),u.push(.5,.5),g++;const T=g;for(let F=0;F<=i;F++){const N=F/i*c+r,W=Math.cos(N),Y=Math.sin(N);I.x=y*Y,I.y=m*x,I.z=y*W,f.push(I.x,I.y,I.z),l.push(0,x,0),L.x=W*.5+.5,L.y=Y*.5*x+.5,u.push(L.x,L.y),g++}for(let F=0;F<i;F++){const nt=P+F,N=T+F;S===!0?d.push(N,N+1,nt):d.push(N+1,N,nt),B+=3}h.addGroup(p,B,S===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ct(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class me extends ct{constructor(t=1,e=1,n=32,i=1,o=!1,a=0,r=Math.PI*2){super(0,t,e,n,i,o,a,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:r}}static fromJSON(t){return new me(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yo extends Fe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],a=[];r(i),h(n),d(),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(o.slice(),3)),this.setAttribute("uv",new de(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(v){const _=new U,S=new U,P=new U;for(let L=0;L<e.length;L+=3)u(e[L+0],_),u(e[L+1],S),u(e[L+2],P),c(_,S,P,v)}function c(v,_,S,P){const L=P+1,I=[];for(let B=0;B<=L;B++){I[B]=[];const y=v.clone().lerp(S,B/L),x=_.clone().lerp(S,B/L),T=L-B;for(let F=0;F<=T;F++)F===0&&B===L?I[B][F]=y:I[B][F]=y.clone().lerp(x,F/T)}for(let B=0;B<L;B++)for(let y=0;y<2*(L-B)-1;y++){const x=Math.floor(y/2);y%2===0?(l(I[B][x+1]),l(I[B+1][x]),l(I[B][x])):(l(I[B][x+1]),l(I[B+1][x+1]),l(I[B+1][x]))}}function h(v){const _=new U;for(let S=0;S<o.length;S+=3)_.x=o[S+0],_.y=o[S+1],_.z=o[S+2],_.normalize().multiplyScalar(v),o[S+0]=_.x,o[S+1]=_.y,o[S+2]=_.z}function d(){const v=new U;for(let _=0;_<o.length;_+=3){v.x=o[_+0],v.y=o[_+1],v.z=o[_+2];const S=m(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;a.push(S,1-P)}g(),f()}function f(){for(let v=0;v<a.length;v+=6){const _=a[v+0],S=a[v+2],P=a[v+4],L=Math.max(_,S,P),I=Math.min(_,S,P);L>.9&&I<.1&&(_<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),P<.2&&(a[v+4]+=1))}}function l(v){o.push(v.x,v.y,v.z)}function u(v,_){const S=v*3;_.x=t[S+0],_.y=t[S+1],_.z=t[S+2]}function g(){const v=new U,_=new U,S=new U,P=new U,L=new Dt,I=new Dt,B=new Dt;for(let y=0,x=0;y<o.length;y+=9,x+=6){v.set(o[y+0],o[y+1],o[y+2]),_.set(o[y+3],o[y+4],o[y+5]),S.set(o[y+6],o[y+7],o[y+8]),L.set(a[x+0],a[x+1]),I.set(a[x+2],a[x+3]),B.set(a[x+4],a[x+5]),P.copy(v).add(_).add(S).divideScalar(3);const T=m(P);w(L,x+0,v,T),w(I,x+2,_,T),w(B,x+4,S,T)}}function w(v,_,S,P){P<0&&v.x===1&&(a[_]=v.x-1),S.x===0&&S.z===0&&(a[_]=P/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.vertices,t.indices,t.radius,t.details)}}class Zo extends Yo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zo(t.radius,t.detail)}}class vc extends ba{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ba().fromJSON(i))}return this}}const ep={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=wc(s,0,i,e,!0);const a=[];if(!o||o.next===o.prev)return a;let r,c,h,d,f,l,u;if(n&&(o=rp(s,t,o,e)),s.length>80*e){r=h=s[0],c=d=s[1];for(let g=e;g<i;g+=e)f=s[g],l=s[g+1],f<r&&(r=f),l<c&&(c=l),f>h&&(h=f),l>d&&(d=l);u=Math.max(h-r,d-c),u=u!==0?32767/u:0}return Yi(o,a,e,r,c,u,0),a}};function wc(s,t,e,n,i){let o,a;if(i===_p(s,t,e,n)>0)for(o=t;o<e;o+=n)a=Ea(o,s[o],s[o+1],a);else for(o=e-n;o>=t;o-=n)a=Ea(o,s[o],s[o+1],a);return a&&Bs(a,a.next)&&(Ki(a),a=a.next),a}function Qn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Bs(e,e.next)||Se(e.prev,e,e.next)===0)){if(Ki(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Yi(s,t,e,n,i,o,a){if(!s)return;!a&&o&&dp(s,n,i,o);let r=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,o?ip(s,n,i,o):np(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),Ki(s),s=h.next,r=h.next;continue}if(s=h,s===r){a?a===1?(s=sp(Qn(s),t,e),Yi(s,t,e,n,i,o,2)):a===2&&op(s,t,e,n,i,o):Yi(Qn(s),t,e,n,i,o,1);break}}}function np(s){const t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;const i=t.x,o=e.x,a=n.x,r=t.y,c=e.y,h=n.y,d=i<o?i<a?i:a:o<a?o:a,f=r<c?r<h?r:h:c<h?c:h,l=i>o?i>a?i:a:o>a?o:a,u=r>c?r>h?r:h:c>h?c:h;let g=n.next;for(;g!==t;){if(g.x>=d&&g.x<=l&&g.y>=f&&g.y<=u&&xi(i,r,o,c,a,h,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ip(s,t,e,n){const i=s.prev,o=s,a=s.next;if(Se(i,o,a)>=0)return!1;const r=i.x,c=o.x,h=a.x,d=i.y,f=o.y,l=a.y,u=r<c?r<h?r:h:c<h?c:h,g=d<f?d<l?d:l:f<l?f:l,w=r>c?r>h?r:h:c>h?c:h,m=d>f?d>l?d:l:f>l?f:l,p=No(u,g,t,e,n),v=No(w,m,t,e,n);let _=s.prevZ,S=s.nextZ;for(;_&&_.z>=p&&S&&S.z<=v;){if(_.x>=u&&_.x<=w&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&xi(r,d,c,f,h,l,_.x,_.y)&&Se(_.prev,_,_.next)>=0||(_=_.prevZ,S.x>=u&&S.x<=w&&S.y>=g&&S.y<=m&&S!==i&&S!==a&&xi(r,d,c,f,h,l,S.x,S.y)&&Se(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;_&&_.z>=p;){if(_.x>=u&&_.x<=w&&_.y>=g&&_.y<=m&&_!==i&&_!==a&&xi(r,d,c,f,h,l,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;S&&S.z<=v;){if(S.x>=u&&S.x<=w&&S.y>=g&&S.y<=m&&S!==i&&S!==a&&xi(r,d,c,f,h,l,S.x,S.y)&&Se(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function sp(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Bs(i,o)&&xc(i,n,n.next,o)&&Zi(i,o)&&Zi(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Ki(n),Ki(n.next),n=s=o),n=n.next}while(n!==s);return Qn(n)}function op(s,t,e,n,i,o){let a=s;do{let r=a.next.next;for(;r!==a.prev;){if(a.i!==r.i&&pp(a,r)){let c=Sc(a,r);a=Qn(a,a.next),c=Qn(c,c.next),Yi(a,t,e,n,i,o,0),Yi(c,t,e,n,i,o,0);return}r=r.next}a=a.next}while(a!==s)}function rp(s,t,e,n){const i=[];let o,a,r,c,h;for(o=0,a=t.length;o<a;o++)r=t[o]*n,c=o<a-1?t[o+1]*n:s.length,h=wc(s,r,c,n,!1),h===h.next&&(h.steiner=!0),i.push(fp(h));for(i.sort(ap),o=0;o<i.length;o++)e=cp(i[o],e);return e}function ap(s,t){return s.x-t.x}function cp(s,t){const e=lp(s,t);if(!e)return t;const n=Sc(e,s);return Qn(n,n.next),Qn(e,e.next)}function lp(s,t){let e=t,n=-1/0,i;const o=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const l=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=o&&l>n&&(n=l,i=e.x<e.next.x?e:e.next,l===o))return i}e=e.next}while(e!==t);if(!i)return null;const r=i,c=i.x,h=i.y;let d=1/0,f;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&xi(a<h?o:n,a,c,h,a<h?n:o,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(o-e.x),Zi(e,s)&&(f<d||f===d&&(e.x>i.x||e.x===i.x&&hp(i,e)))&&(i=e,d=f)),e=e.next;while(e!==r);return i}function hp(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function dp(s,t,e,n){let i=s;do i.z===0&&(i.z=No(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,up(i)}function up(s){let t,e,n,i,o,a,r,c,h=1;do{for(e=s,s=null,o=null,a=0;e;){for(a++,n=e,r=0,t=0;t<h&&(r++,n=n.nextZ,!!n);t++);for(c=h;r>0||c>0&&n;)r!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,r--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,h*=2}while(a>1);return s}function No(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function fp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function xi(s,t,e,n,i,o,a,r){return(i-a)*(t-r)>=(s-a)*(o-r)&&(s-a)*(n-r)>=(e-a)*(t-r)&&(e-a)*(o-r)>=(i-a)*(n-r)}function pp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!mp(s,t)&&(Zi(s,t)&&Zi(t,s)&&gp(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||Bs(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Bs(s,t){return s.x===t.x&&s.y===t.y}function xc(s,t,e,n){const i=ys(Se(s,t,e)),o=ys(Se(s,t,n)),a=ys(Se(e,n,s)),r=ys(Se(e,n,t));return!!(i!==o&&a!==r||i===0&&Ss(s,e,t)||o===0&&Ss(s,n,t)||a===0&&Ss(e,s,n)||r===0&&Ss(e,t,n))}function Ss(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ys(s){return s>0?1:s<0?-1:0}function mp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&xc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Zi(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function gp(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Sc(s,t){const e=new Fo(s.i,s.x,s.y),n=new Fo(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ea(s,t,e,n){const i=new Fo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ki(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _p(s,t,e,n){let i=0;for(let o=t,a=e-n;o<e;o+=n)i+=(s[a]-s[o])*(s[o+1]+s[a+1]),a=o;return i}class Wi{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Wi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Ta(t),Aa(n,t);let a=t.length;e.forEach(Ta);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Aa(n,e[c]);const r=ep.triangulate(n,i);for(let c=0;c<r.length;c+=3)o.push(r.slice(c,c+3));return o}}function Ta(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Aa(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ko extends Fe{constructor(t=new vc([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let r=0,c=t.length;r<c;r++){const h=t[r];a(h)}this.setAttribute("position",new de(i,3)),this.setAttribute("uv",new de(o,2)),this.computeVertexNormals();function a(r){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let l=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,w=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Mp;let _,S=!1,P,L,I,B;p&&(_=p.getSpacedPoints(d),S=!0,l=!1,P=p.computeFrenetFrames(d,!1),L=new U,I=new U,B=new U),l||(m=0,u=0,g=0,w=0);const y=r.extractPoints(h);let x=y.shape;const T=y.holes;if(!Wi.isClockWise(x)){x=x.reverse();for(let D=0,ht=T.length;D<ht;D++){const rt=T[D];Wi.isClockWise(rt)&&(T[D]=rt.reverse())}}const nt=Wi.triangulateShape(x,T),N=x;for(let D=0,ht=T.length;D<ht;D++){const rt=T[D];x=x.concat(rt)}function W(D,ht,rt){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(ht,rt)}const Y=x.length,z=nt.length;function st(D,ht,rt){let V,ot,Pt;const _t=D.x-ht.x,A=D.y-ht.y,E=rt.x-D.x,K=rt.y-D.y,vt=_t*_t+A*A,mt=_t*K-A*E;if(Math.abs(mt)>Number.EPSILON){const gt=Math.sqrt(vt),Ot=Math.sqrt(E*E+K*K),At=ht.x-A/gt,Nt=ht.y+_t/gt,Vt=rt.x-K/Ot,It=rt.y+E/Ot,wt=((Vt-At)*K-(It-Nt)*E)/(_t*K-A*E);V=At+_t*wt-D.x,ot=Nt+A*wt-D.y;const $t=V*V+ot*ot;if($t<=2)return new Dt(V,ot);Pt=Math.sqrt($t/2)}else{let gt=!1;_t>Number.EPSILON?E>Number.EPSILON&&(gt=!0):_t<-Number.EPSILON?E<-Number.EPSILON&&(gt=!0):Math.sign(A)===Math.sign(K)&&(gt=!0),gt?(V=-A,ot=_t,Pt=Math.sqrt(vt)):(V=_t,ot=A,Pt=Math.sqrt(vt/2))}return new Dt(V/Pt,ot/Pt)}const j=[];for(let D=0,ht=N.length,rt=ht-1,V=D+1;D<ht;D++,rt++,V++)rt===ht&&(rt=0),V===ht&&(V=0),j[D]=st(N[D],N[rt],N[V]);const X=[];let $,pt=j.concat();for(let D=0,ht=T.length;D<ht;D++){const rt=T[D];$=[];for(let V=0,ot=rt.length,Pt=ot-1,_t=V+1;V<ot;V++,Pt++,_t++)Pt===ot&&(Pt=0),_t===ot&&(_t=0),$[V]=st(rt[V],rt[Pt],rt[_t]);X.push($),pt=pt.concat($)}for(let D=0;D<m;D++){const ht=D/m,rt=u*Math.cos(ht*Math.PI/2),V=g*Math.sin(ht*Math.PI/2)+w;for(let ot=0,Pt=N.length;ot<Pt;ot++){const _t=W(N[ot],j[ot],V);at(_t.x,_t.y,-rt)}for(let ot=0,Pt=T.length;ot<Pt;ot++){const _t=T[ot];$=X[ot];for(let A=0,E=_t.length;A<E;A++){const K=W(_t[A],$[A],V);at(K.x,K.y,-rt)}}}const q=g+w;for(let D=0;D<Y;D++){const ht=l?W(x[D],pt[D],q):x[D];S?(I.copy(P.normals[0]).multiplyScalar(ht.x),L.copy(P.binormals[0]).multiplyScalar(ht.y),B.copy(_[0]).add(I).add(L),at(B.x,B.y,B.z)):at(ht.x,ht.y,0)}for(let D=1;D<=d;D++)for(let ht=0;ht<Y;ht++){const rt=l?W(x[ht],pt[ht],q):x[ht];S?(I.copy(P.normals[D]).multiplyScalar(rt.x),L.copy(P.binormals[D]).multiplyScalar(rt.y),B.copy(_[D]).add(I).add(L),at(B.x,B.y,B.z)):at(rt.x,rt.y,f/d*D)}for(let D=m-1;D>=0;D--){const ht=D/m,rt=u*Math.cos(ht*Math.PI/2),V=g*Math.sin(ht*Math.PI/2)+w;for(let ot=0,Pt=N.length;ot<Pt;ot++){const _t=W(N[ot],j[ot],V);at(_t.x,_t.y,f+rt)}for(let ot=0,Pt=T.length;ot<Pt;ot++){const _t=T[ot];$=X[ot];for(let A=0,E=_t.length;A<E;A++){const K=W(_t[A],$[A],V);S?at(K.x,K.y+_[d-1].y,_[d-1].x+rt):at(K.x,K.y,f+rt)}}}et(),ut();function et(){const D=i.length/3;if(l){let ht=0,rt=Y*ht;for(let V=0;V<z;V++){const ot=nt[V];yt(ot[2]+rt,ot[1]+rt,ot[0]+rt)}ht=d+m*2,rt=Y*ht;for(let V=0;V<z;V++){const ot=nt[V];yt(ot[0]+rt,ot[1]+rt,ot[2]+rt)}}else{for(let ht=0;ht<z;ht++){const rt=nt[ht];yt(rt[2],rt[1],rt[0])}for(let ht=0;ht<z;ht++){const rt=nt[ht];yt(rt[0]+Y*d,rt[1]+Y*d,rt[2]+Y*d)}}n.addGroup(D,i.length/3-D,0)}function ut(){const D=i.length/3;let ht=0;ft(N,ht),ht+=N.length;for(let rt=0,V=T.length;rt<V;rt++){const ot=T[rt];ft(ot,ht),ht+=ot.length}n.addGroup(D,i.length/3-D,1)}function ft(D,ht){let rt=D.length;for(;--rt>=0;){const V=rt;let ot=rt-1;ot<0&&(ot=D.length-1);for(let Pt=0,_t=d+m*2;Pt<_t;Pt++){const A=Y*Pt,E=Y*(Pt+1),K=ht+V+A,vt=ht+ot+A,mt=ht+ot+E,gt=ht+V+E;Rt(K,vt,mt,gt)}}}function at(D,ht,rt){c.push(D),c.push(ht),c.push(rt)}function yt(D,ht,rt){Z(D),Z(ht),Z(rt);const V=i.length/3,ot=v.generateTopUV(n,i,V-3,V-2,V-1);lt(ot[0]),lt(ot[1]),lt(ot[2])}function Rt(D,ht,rt,V){Z(D),Z(ht),Z(V),Z(ht),Z(rt),Z(V);const ot=i.length/3,Pt=v.generateSideWallUV(n,i,ot-6,ot-3,ot-2,ot-1);lt(Pt[0]),lt(Pt[1]),lt(Pt[3]),lt(Pt[1]),lt(Pt[2]),lt(Pt[3])}function Z(D){i.push(c[D*3+0]),i.push(c[D*3+1]),i.push(c[D*3+2])}function lt(D){o.push(D.x),o.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vp(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,a=t.shapes.length;o<a;o++){const r=e[t.shapes[o]];n.push(r)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ds[i.type]().fromJSON(i)),new Ko(n,t.options)}}const Mp={generateTopUV:function(s,t,e,n,i){const o=t[e*3],a=t[e*3+1],r=t[n*3],c=t[n*3+1],h=t[i*3],d=t[i*3+1];return[new Dt(o,a),new Dt(r,c),new Dt(h,d)]},generateSideWallUV:function(s,t,e,n,i,o){const a=t[e*3],r=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],f=t[n*3+2],l=t[i*3],u=t[i*3+1],g=t[i*3+2],w=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(r-d)<Math.abs(a-h)?[new Dt(a,1-c),new Dt(h,1-f),new Dt(l,1-g),new Dt(w,1-p)]:[new Dt(r,1-c),new Dt(d,1-f),new Dt(u,1-g),new Dt(m,1-p)]}};function vp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wt extends Fe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+r,Math.PI);let h=0;const d=[],f=new U,l=new U,u=[],g=[],w=[],m=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let S=0;p===0&&a===0?S=.5/e:p===n&&c===Math.PI&&(S=-.5/e);for(let P=0;P<=e;P++){const L=P/e;f.x=-t*Math.cos(i+L*o)*Math.sin(a+_*r),f.y=t*Math.cos(a+_*r),f.z=t*Math.sin(i+L*o)*Math.sin(a+_*r),g.push(f.x,f.y,f.z),l.copy(f).normalize(),w.push(l.x,l.y,l.z),m.push(L+S,1-_),v.push(h++)}d.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const _=d[p][v+1],S=d[p][v],P=d[p+1][v],L=d[p+1][v+1];(p!==0||a>0)&&u.push(_,S,L),(p!==n-1||c<Math.PI)&&u.push(S,P,L)}this.setIndex(u),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(w,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ln extends Fe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],c=[],h=[],d=new U,f=new U,l=new U;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){const w=g/i*o,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(w),f.y=(t+e*Math.cos(m))*Math.sin(w),f.z=e*Math.sin(m),r.push(f.x,f.y,f.z),d.x=t*Math.cos(w),d.y=t*Math.sin(w),l.subVectors(f,d).normalize(),c.push(l.x,l.y,l.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){const w=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,v=(i+1)*u+g;a.push(w,m,v),a.push(m,p,v)}this.setIndex(a),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class wn extends Fe{constructor(t=new _c(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const a=t.computeFrenetFrames(e,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const r=new U,c=new U,h=new Dt;let d=new U;const f=[],l=[],u=[],g=[];w(),this.setIndex(g),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(u,2));function w(){for(let _=0;_<e;_++)m(_);m(o===!1?e:0),v(),p()}function m(_){d=t.getPointAt(_/e,d);const S=a.normals[_],P=a.binormals[_];for(let L=0;L<=i;L++){const I=L/i*Math.PI*2,B=Math.sin(I),y=-Math.cos(I);c.x=y*S.x+B*P.x,c.y=y*S.y+B*P.y,c.z=y*S.z+B*P.z,c.normalize(),l.push(c.x,c.y,c.z),r.x=d.x+n*c.x,r.y=d.y+n*c.y,r.z=d.z+n*c.z,f.push(r.x,r.y,r.z)}}function p(){for(let _=1;_<=e;_++)for(let S=1;S<=i;S++){const P=(i+1)*(_-1)+(S-1),L=(i+1)*_+(S-1),I=(i+1)*_+S,B=(i+1)*(_-1)+S;g.push(P,L,B),g.push(L,I,B)}}function v(){for(let _=0;_<=e;_++)for(let S=0;S<=i;S++)h.x=_/e,h.y=S/i,u.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new wn(new Ds[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class G extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jo extends G{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ks extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class wp extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Eo=new be,Ra=new U,Pa=new U;class jo{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new we(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ra.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ra),Pa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pa),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xp extends jo{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ai*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Sp extends ks{constructor(t,e,n=0,i=Math.PI/3,o=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.distance=n,this.angle=i,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new xp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ca=new be,Gi=new U,To=new U;class yp extends jo{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new we(2,1,1,1),new we(0,1,1,1),new we(3,1,1,1),new we(1,1,1,1),new we(3,0,1,1),new we(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gi),To.copy(n.position),To.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(To),n.updateMatrixWorld(),i.makeTranslation(-Gi.x,-Gi.y,-Gi.z),Ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca)}}class bs extends ks{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bp extends jo{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ep extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new bp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=La(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=La();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function La(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const ti=()=>{if(typeof window>"u")return!1;const s=navigator.userAgent||navigator.vendor||window.opera||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(s),e="ontouchstart"in window||navigator.maxTouchPoints>0,n=Math.min(window.innerWidth,window.innerHeight)<=768||window.innerWidth<=1024;return t||e&&n},Yt={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:5,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},_e={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class Ap{constructor(){this.state=_e.MENU,this.speedKmh=Yt.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Yt.LANES[1],this.targetLaneX=Yt.LANES[1],this.crashTimer=0}startNewGame(){this.state=_e.PLAYING,this.speedKmh=Yt.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Yt.LANES[1],this.targetLaneX=Yt.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==_e.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<Yt.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=Yt.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min(Yt.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=Yt.SCORING.COMBO_TIMEOUT;const t=Yt.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min(Yt.NITRO.MAX,this.nitro+Yt.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==_e.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),e.keys.left&&!e.keys.right?(this.steerHoldTimer=(this.steerHoldTimer||0)+t,this.steerHoldTimer>.22&&(this.switchLane(-1),this.steerHoldTimer=.08)):e.keys.right&&!e.keys.left?(this.steerHoldTimer=(this.steerHoldTimer||0)+t,this.steerHoldTimer>.22&&(this.switchLane(1),this.steerHoldTimer=.08)):this.steerHoldTimer=0,this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*Yt.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,o=e.keys.accelerate,a=e.keys.boost,r=this.distanceMeters/1e3,c=Math.min(Yt.SPEED.MAX_PROGRESSIVE_BONUS,r*Yt.SPEED.PROGRESSIVE_RATE),h=Yt.SPEED.BASE_START+c,d=h+45,f=Yt.SPEED.BOOST+c*.4;a&&this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-Yt.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(f,this.speedKmh+Yt.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.nitro=Math.min(Yt.NITRO.MAX,this.nitro+Yt.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max(Yt.SPEED.MIN,this.speedKmh-Yt.SPEED.BRAKING*t):o?this.speedKmh=Math.min(d,this.speedKmh+Yt.SPEED.ACCELERATION*1.6*t):this.speedKmh<h?this.speedKmh=Math.min(h,this.speedKmh+Yt.SPEED.ACCELERATION*t):this.speedKmh>h&&(this.speedKmh=Math.max(h,this.speedKmh-Yt.SPEED.NATURAL_DECEL*t)));const u=this.speedKmh*1e3/3600*t;this.distanceMeters+=u,this.score+=Math.round(u*Yt.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=_e.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class Rp{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.activeSwipes=new Map,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Space"].includes(t.key)||t.code==="Space")&&t.preventDefault();const e=t.code,n=t.key;e==="ArrowLeft"||e==="KeyA"||n==="ArrowLeft"||n==="a"||n==="A"?((!this.keys.left||t.repeat)&&(this.laneChangeRequested=-1),this.keys.left=!0):(e==="ArrowRight"||e==="KeyD"||n==="ArrowRight"||n==="d"||n==="D")&&((!this.keys.right||t.repeat)&&(this.laneChangeRequested=1),this.keys.right=!0),(e==="ArrowUp"||e==="KeyW"||n==="ArrowUp"||n==="w"||n==="W")&&(this.keys.accelerate=!0),(e==="Space"||e==="ShiftLeft"||e==="ShiftRight"||e==="KeyN"||e==="KeyX"||n===" "||n==="Shift"||n==="n"||n==="N"||n==="x"||n==="X")&&(this.keys.boost=!0),(e==="ArrowDown"||e==="KeyS"||n==="ArrowDown"||n==="s"||n==="S")&&(this.keys.brake=!0),(e==="KeyH"||e==="KeyE"||e==="KeyF"||n==="h"||n==="H"||n==="e"||n==="E"||n==="f"||n==="F")&&(this.keys.horn=!0,this.onHorn&&this.onHorn()),(e==="KeyP"||e==="Escape"||n==="p"||n==="P"||n==="Escape")&&this.onPauseToggle&&this.onPauseToggle(),(e==="KeyR"||n==="r"||n==="R")&&this.onRestart&&this.onRestart()}),window.addEventListener("keyup",t=>{const e=t.code,n=t.key;(e==="ArrowLeft"||e==="KeyA"||n==="ArrowLeft"||n==="a"||n==="A")&&(this.keys.left=!1),(e==="ArrowRight"||e==="KeyD"||n==="ArrowRight"||n==="d"||n==="D")&&(this.keys.right=!1),(e==="ArrowUp"||e==="KeyW"||n==="ArrowUp"||n==="w"||n==="W")&&(this.keys.accelerate=!1),(e==="Space"||e==="ShiftLeft"||e==="ShiftRight"||e==="KeyN"||e==="KeyX"||n===" "||n==="Shift"||n==="n"||n==="N"||n==="x"||n==="X")&&(this.keys.boost=!1),(e==="ArrowDown"||e==="KeyS"||n==="ArrowDown"||n==="s"||n==="S")&&(this.keys.brake=!1),(e==="KeyH"||e==="KeyE"||e==="KeyF"||n==="h"||n==="H"||n==="e"||n==="E"||n==="f"||n==="F")&&(this.keys.horn=!1)}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0;for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e];n.target&&n.target.closest&&n.target.closest("#mobile-controls, #hud-layer, .screen, button, .touch-btn, .hud-icon-btn, .modal-overlay")||this.activeSwipes.set(n.identifier,{startX:n.clientX,startY:n.clientY,startTime:Date.now()})}},{passive:!0}),window.addEventListener("touchend",t=>{for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e],i=this.activeSwipes.get(n.identifier);if(!i)continue;this.activeSwipes.delete(n.identifier);const o=n.clientX-i.startX,a=n.clientY-i.startY;Date.now()-i.startTime<350&&Math.abs(o)>40&&Math.abs(o)>Math.abs(a)*1.3&&(o<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0}),window.addEventListener("touchcancel",t=>{for(let e=0;e<t.changedTouches.length;e++)this.activeSwipes.delete(t.changedTouches[e].identifier)},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}setSteerLeft(t){t&&!this.keys.left&&(this.laneChangeRequested=-1),this.keys.left=!!t}setSteerRight(t){t&&!this.keys.right&&(this.laneChangeRequested=1),this.keys.right=!!t}triggerSteerLeft(){this.setSteerLeft(!0),setTimeout(()=>{this.keys.left&&this.setSteerLeft(!1)},120)}triggerSteerRight(){this.setSteerRight(!0),setTimeout(()=>{this.keys.right&&this.setSteerRight(!1)},120)}setBrake(t){this.keys.brake=!!t}setAccelerate(t){this.keys.accelerate=!!t}setNitro(t){this.keys.boost=!!t}setBoost(t){this.keys.boost=!!t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0,this.activeSwipes.clear()}}class Pp{constructor(t){this.camera=t,this.defaultOffset=new U(Yt.CAMERA.DEFAULT_OFFSET.x,Yt.CAMERA.DEFAULT_OFFSET.y,Yt.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new U(Yt.CAMERA.LOOK_OFFSET.x,Yt.CAMERA.LOOK_OFFSET.y,Yt.CAMERA.LOOK_OFFSET.z),this.currentPos=new U,this.currentLook=new U,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=Yt.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.1,6.2),this.lookOffset.set(0,1.25,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=Yt.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const o=t.group.position,a=Math.min(1,e/Yt.SPEED.MAX_NORMAL),r=this.camera.aspect,c=r<1?Math.min(24,(1-r)*36):0;this.targetFOV=Yt.CAMERA.BASE_FOV+c+a*10+(n?8:0);const h=this.targetFOV-this.camera.fov;Math.abs(h)>.04&&(this.camera.fov+=h*Math.min(1,i*Yt.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix());const d=o.x+this.defaultOffset.x,f=o.y+this.defaultOffset.y,l=o.z+this.defaultOffset.z+(n?.8:0),u=Math.min(1,i*10),g=Math.min(1,i*12);this.currentPos.x+=(d-this.currentPos.x)*u,this.currentPos.y+=(f-this.currentPos.y)*g,this.currentPos.z=l;const w=o.x+this.lookOffset.x,m=o.y+this.lookOffset.y,p=o.z+this.lookOffset.z;this.currentLook.x+=(w-this.currentLook.x)*u,this.currentLook.y+=(m-this.currentLook.y)*g,this.currentLook.z=p;let v=0,_=0;if(e>70){const I=e/280*.03;v=(Math.random()-.5)*I,_=(Math.random()-.5)*I}let S=0,P=0,L=0;if(this.shakeDuration>0){this.shakeDuration-=i;const I=Math.max(0,this.shakeDuration/.6),B=this.shakeIntensity*I;S=(Math.random()-.5)*B,P=(Math.random()-.5)*B,L=(Math.random()-.5)*B}this.camera.position.set(this.currentPos.x+v+S,this.currentPos.y+_+P,this.currentPos.z+L),this.camera.lookAt(this.currentLook.x+v*.5,this.currentLook.y+_*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,o=(e?4.8:8.2)*i,a=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),r=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*o,a,Math.cos(c)*o),this.camera.lookAt(0,r,0)}}const Cp={};class Lp{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){if(!this.ctx)return;const t="./",e=`${t.endsWith("/")?t:t+"/"}audio/eta_ki_korli_mama.mp3`;fetch(e).then(n=>{if(!n.ok)throw new Error(`HTTP ${n.status}`);return n.arrayBuffer()}).then(n=>this.ctx.decodeAudioData(n)).then(n=>{this.crashVoiceBuffer=n}).catch(n=>{console.warn("Could not decode crash voice buffer:",n)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.04,t),this.highOsc.connect(o),o.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,o=0,a=0;for(let c=0;c<t;c++){const h=Math.random()*2-1;i=.98*i+h*.055,o=.95*o+h*.075,a=.85*a+h*.15,n[c]=(i+o+a)*.45}const r=this.ctx.createBufferSource();r.buffer=e,r.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),r.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),r.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const o=this.ctx.createBufferSource();o.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(500,t),a.frequency.exponentialRampToValueAtTime(180,t+.35);const r=this.ctx.createGain();r.gain.setValueAtTime(.001,t),r.gain.linearRampToValueAtTime(.07,t+.05),r.gain.exponentialRampToValueAtTime(.001,t+.35),o.connect(a),a.connect(r),r.connect(this.masterGain),o.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const o=[2093,2637];[0,.09].forEach(a=>{o.forEach(r=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(r,n+a),h.gain.setValueAtTime(0,n+a),h.gain.linearRampToValueAtTime(.22,n+a+.008),h.gain.exponentialRampToValueAtTime(1e-4,n+a+.18),c.connect(h),h.connect(this.masterGain),c.start(n+a),c.stop(n+a+.2)})});return}if(e==="cng"){[620,780].forEach(a=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(a,n);const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),r.connect(h),h.connect(c),c.connect(this.masterGain),r.start(n),r.stop(n+.35)});return}[330,415.3,523.25].forEach((o,a)=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();r.type=a===0?"sine":"triangle",r.frequency.setValueAtTime(o,n),h.type="lowpass",h.frequency.setValueAtTime(1400,n);const d=a===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(d,n+.02),c.gain.setValueAtTime(d,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),r.connect(h),h.connect(c),c.connect(this.masterGain),r.start(n),r.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n*.8,t),o.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.08,t+.06),a.gain.exponentialRampToValueAtTime(1e-4,t+.45),o.connect(a),a.connect(this.masterGain),o.start(t),o.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const o=this.ctx.currentTime,a=Math.min(1,Math.max(0,t/200)),r=a*5%1,c=900+a*1800+r*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const h=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,h),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,o,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,o,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,o,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,o,.05);const d=300+a*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(d,o,.06);const f=.16+a*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,f),o,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+a*350,o,.08),this.turboGain.gain.setTargetAtTime(.05,o,.08)):this.turboGain.gain.setTargetAtTime(1e-4,o,.15);const l=Math.pow(a,1.3)*.06;this.roadGain.gain.setTargetAtTime(l,o,.08),this.roadFilter.frequency.setTargetAtTime(180+a*250,o,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((o,a)=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime((a===0?n:n*1.25)*i,e+o),c.gain.setValueAtTime(.001,e+o),c.gain.linearRampToValueAtTime(.12,e+o+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+o+.28),r.connect(c),c.connect(this.masterGain),r.start(e+o),r.stop(e+o+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),o=this.ctx.createBuffer(1,i,this.ctx.sampleRate),a=o.getChannelData(0);for(let d=0;d<i;d++)a[d]=(Math.random()*2-1)*Math.exp(-d/(this.ctx.sampleRate*.12));const r=this.ctx.createBufferSource();r.buffer=o;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const h=this.ctx.createGain();h.gain.setValueAtTime(.3,t),h.gain.exponentialRampToValueAtTime(.001,t+.45),r.connect(c),c.connect(h),h.connect(this.masterGain),r.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(o=>o.lang.includes("bn")||o.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(e,t+i),a.gain.setValueAtTime(.001,t+i),a.gain.linearRampToValueAtTime(.12,t+i+.02),a.gain.exponentialRampToValueAtTime(.001,t+i+.32),o.connect(a),a.connect(this.masterGain),o.start(t+i),o.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class Ip{constructor(){this.group=new Mt,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new yn,this.collisionSize=new U(2.1,2.8,5.5),this._boxCenter=new U,this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new oe(t),i=document.createElement("canvas");i.width=1024,i.height=384;const o=i.getContext("2d");o.fillStyle="#f8fafc",o.fillRect(0,0,1024,384),o.fillStyle="#dc2626",o.fillRect(0,0,1024,36),o.fillRect(0,348,1024,36),o.fillStyle="#16a34a",o.beginPath(),o.arc(512,180,110,Math.PI,0),o.fill(),o.fillStyle="#f59e0b",o.fillRect(472,80,80,100),o.beginPath(),o.moveTo(512,20),o.lineTo(460,80),o.lineTo(564,80),o.fill();const a=(b,k)=>{o.fillStyle="#dc2626";for(let Q=0;Q<Math.PI*2;Q+=Math.PI/3)o.beginPath(),o.arc(b+Math.cos(Q)*35,k+Math.sin(Q)*35,24,0,Math.PI*2),o.fill();o.fillStyle="#fbbf24",o.beginPath(),o.arc(b,k,22,0,Math.PI*2),o.fill()};a(220,180),a(804,180),o.fillStyle="#1e293b",o.font="bold 54px serif",o.textAlign="center",o.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const r=new oe(i),c=document.createElement("canvas");c.width=1024,c.height=512;const h=c.getContext("2d");h.fillStyle="#f59e0b",h.fillRect(0,0,1024,140);for(let b=60;b<1024;b+=110)h.fillStyle="#dc2626",h.beginPath(),h.arc(b,70,32,0,Math.PI*2),h.fill(),h.fillStyle="#22c55e",h.beginPath(),h.arc(b,70,16,0,Math.PI*2),h.fill();h.fillStyle="#15803d",h.fillRect(0,140,1024,372),h.strokeStyle="#f8fafc",h.lineWidth=8;for(let b=30;b<1024;b+=138)h.strokeRect(b,160,116,320);h.fillStyle="#ffffff",h.font="900 80px sans-serif",h.textAlign="center",h.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),h.fillStyle="#dc2626",h.fillRect(0,140,30,372),h.fillRect(994,140,30,372);const d=new oe(c),f=document.createElement("canvas");f.width=1024,f.height=680;const l=f.getContext("2d");l.fillStyle="#4a90e2",l.fillRect(0,0,1024,680),l.fillStyle="#172554",l.beginPath(),l.moveTo(0,0),l.lineTo(110,0),l.lineTo(0,85),l.closePath(),l.fill(),l.beginPath(),l.moveTo(1024,0),l.lineTo(914,0),l.lineTo(1024,85),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.beginPath(),l.moveTo(0,85),l.lineTo(110,0),l.lineTo(914,0),l.lineTo(1024,85),l.stroke(),l.fillStyle="#2563eb",l.fillRect(100,35,824,45),l.strokeStyle="#18181b",l.lineWidth=3,l.strokeRect(100,35,824,45),l.fillStyle="#1e3a8a";for(let b=110;b<=900;b+=32)l.beginPath(),l.moveTo(b,80),l.lineTo(b+16,45),l.lineTo(b+32,80),l.closePath(),l.fill();const u=b=>{l.fillStyle="#facc15",l.fillRect(b,85,54,345),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(b,85,54,345);for(let k=104;k<=415;k+=26)l.fillStyle="#dc2626",l.beginPath(),l.arc(b+27,k,9.5,0,Math.PI*2),l.fill(),l.fillStyle="#fde047",l.beginPath(),l.arc(b+27,k,4.5,0,Math.PI*2),l.fill()};u(36),u(934);const g=90,w=335,m=g+w,p=104,v=252;l.fillStyle="#78aee6",l.fillRect(p,g,v,w),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(p,g,v,w);const _=386;l.fillStyle="#78aee6",l.fillRect(_,g,v,w),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(_,g,v,w);const S=668;l.fillStyle="#78aee6",l.fillRect(S,g,v,w),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(S,g,v,w);const P=(b,k)=>{[{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:0},{dx:-1,dy:0}].forEach(({dx:dt,dy:Et})=>{l.fillStyle="#15803d",l.beginPath();const kt=b+dt*72,re=k+Et*72,ne=-Et*16,Ht=dt*16;l.moveTo(b+dt*24,k+Et*24),l.quadraticCurveTo(b+dt*46+ne,k+Et*46+Ht,kt,re),l.quadraticCurveTo(b+dt*46-ne,k+Et*46-Ht,b+dt*24,k+Et*24),l.fill(),l.fillStyle="#166534",l.beginPath();const ue=b+dt*52+ne*1.5,Lt=k+Et*52+Ht*1.5;l.moveTo(b+dt*22,k+Et*22),l.quadraticCurveTo(b+dt*34+ne*1.8,k+Et*34+Ht*1.8,ue,Lt),l.quadraticCurveTo(b+dt*38+ne*.8,k+Et*38+Ht*.8,b+dt*22,k+Et*22),l.fill(),l.beginPath();const Qt=b+dt*52-ne*1.5,zt=k+Et*52-Ht*1.5;l.moveTo(b+dt*22,k+Et*22),l.quadraticCurveTo(b+dt*34-ne*1.8,k+Et*34-Ht*1.8,Qt,zt),l.quadraticCurveTo(b+dt*38-ne*.8,k+Et*38-Ht*.8,b+dt*22,k+Et*22),l.fill(),l.strokeStyle="#4ade80",l.lineWidth=1.8,l.beginPath(),l.moveTo(b+dt*26,k+Et*26),l.lineTo(kt*.95+b*.05,re*.95+k*.05),l.stroke()}),[{dx:.707,dy:-.707},{dx:-.707,dy:-.707},{dx:.707,dy:.707},{dx:-.707,dy:.707}].forEach(({dx:dt,dy:Et})=>{l.fillStyle="#16a34a",l.beginPath();const kt=b+dt*46,re=k+Et*46,ne=-Et*10,Ht=dt*10;l.moveTo(b+dt*22,k+Et*22),l.quadraticCurveTo(b+dt*32+ne,k+Et*32+Ht,kt,re),l.quadraticCurveTo(b+dt*32-ne,k+Et*32-Ht,b+dt*22,k+Et*22),l.fill()}),l.fillStyle="#facc15";for(let dt=0;dt<Math.PI*2;dt+=Math.PI/8)l.beginPath(),l.arc(b+Math.cos(dt)*27,k+Math.sin(dt)*27,4.5,0,Math.PI*2),l.fill();l.fillStyle="#facc15",l.beginPath(),l.arc(b,k,25,0,Math.PI*2),l.fill(),l.strokeStyle="#ca8a04",l.lineWidth=2,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.arc(b,k,14,0,Math.PI*2),l.fill(),l.fillStyle="#fef08a",l.beginPath(),l.arc(b,k,6,0,Math.PI*2),l.fill()};P(p+v*.5,g+w*.5),P(S+v*.5,g+w*.5),((b,k,Q)=>{l.strokeStyle="#18181b",l.lineWidth=3.5,l.lineCap="round",l.beginPath(),l.moveTo(b-24,Q),l.lineTo(b-30,Q-5),l.moveTo(b-24,Q),l.lineTo(b-18,Q-5),l.moveTo(b-24,Q),l.lineTo(b-22,Q-22),l.lineTo(b-32,Q-52),l.lineTo(b-18,Q-80),l.stroke(),l.beginPath(),l.moveTo(b+12,Q),l.lineTo(b+6,Q-5),l.moveTo(b+12,Q),l.lineTo(b+18,Q-5),l.moveTo(b+12,Q),l.lineTo(b+14,Q-22),l.lineTo(b+24,Q-52),l.lineTo(b+8,Q-84),l.stroke(),[{tipX:b+72,tipY:k-25,midX:b+45,midY:k-8},{tipX:b+95,tipY:k-2,midX:b+56,midY:k+12},{tipX:b+104,tipY:k+24,midX:b+58,midY:k+32},{tipX:b+82,tipY:k+50,midX:b+48,midY:k+46}].forEach(({tipX:Et,tipY:kt,midX:re,midY:ne})=>{l.fillStyle="#facc15",l.beginPath(),l.moveTo(b+16,k+30),l.quadraticCurveTo(re,ne-12,Et,kt),l.quadraticCurveTo(Et+6,kt+12,Et-12,kt+18),l.quadraticCurveTo(re,ne+12,b+16,k+38),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(Et-18,kt+4),l.quadraticCurveTo(Et-4,kt-8,Et,kt),l.quadraticCurveTo(Et+6,kt+12,Et-12,kt+18),l.quadraticCurveTo(Et-12,kt+10,Et-18,kt+4),l.closePath(),l.fill()}),l.fillStyle="#facc15",l.beginPath(),l.moveTo(b-36,k+44),l.quadraticCurveTo(b-2,k+72,b+34,k+46),l.quadraticCurveTo(b+8,k+22,b-36,k+44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(b-16,k-42),l.quadraticCurveTo(b-62,k-2,b-42,k+46),l.quadraticCurveTo(b+12,k+34,b+4,k-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(b-18,k-28),l.quadraticCurveTo(b+24,k-35,b+58,k-14),l.lineTo(b+52,k+12),l.quadraticCurveTo(b+14,k+18,b-22,k+12),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#38bdf8",[{x:b+58,y:k-14},{x:b+64,y:k+4},{x:b+52,y:k+18}].forEach(({x:Et,y:kt})=>{l.beginPath(),l.ellipse(Et,kt,9,6,-Math.PI/4,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=1.8,l.stroke()}),l.strokeStyle="#1e3a8a",l.lineWidth=2,l.beginPath(),l.moveTo(b-4,k-18),l.lineTo(b+42,k-8),l.moveTo(b-2,k-6),l.lineTo(b+44,k+4),l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(b-24,k-32),l.quadraticCurveTo(b-28,k-68,b-2,k-78),l.quadraticCurveTo(b+24,k-74,b+22,k-48),l.quadraticCurveTo(b+8,k-28,b-16,k-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.moveTo(b+20,k-58),l.quadraticCurveTo(b+36,k-54,b+44,k-42),l.quadraticCurveTo(b+28,k-42,b+18,k-44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.2,l.stroke(),l.beginPath(),l.moveTo(b+20,k-50),l.lineTo(b+42,k-43),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(b+6,k-58,8.5,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2,l.stroke(),l.fillStyle="#18181b",l.beginPath(),l.arc(b+8,k-58,4.2,0,Math.PI*2),l.fill(),l.fillStyle="#ffffff",l.beginPath(),l.arc(b+7,k-60,1.8,0,Math.PI*2),l.fill()})(_+v*.5,g+w*.52,m),l.fillStyle="#3b82f6",l.fillRect(20,m,984,45),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(20,m,984,45);const I=b=>{l.fillStyle="#94a3b8",l.fillRect(b,m+8,54,28),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(b,m+8,54,28),l.fillStyle="#334155",l.fillRect(b+22,m+4,10,36),l.fillStyle="#f8fafc",l.fillRect(b+6,m+18,6,8),l.fillRect(b+42,m+18,6,8)};I(205),I(485),I(765);const B=470;l.fillStyle="#4a90e2",l.beginPath(),l.moveTo(20,B),l.lineTo(20,580),l.lineTo(315,580),l.lineTo(365,635),l.lineTo(659,635),l.lineTo(709,580),l.lineTo(1004,580),l.lineTo(1004,B),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.stroke();const y=(b,k)=>{l.fillStyle="#18181b",l.fillRect(b-4,498,172,64),l.strokeStyle="#facc15",l.lineWidth=3,l.strokeRect(b-4,498,172,64),(k?["#f59e0b","#ef4444","#f8fafc"]:["#f8fafc","#ef4444","#f59e0b"]).forEach((Tt,dt)=>{l.fillStyle=Tt,l.fillRect(b+dt*54+2,504,50,52),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(b+dt*54+2,504,50,52),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(b+dt*54+6,508,42,6)})};y(118,!0),y(742,!1);const x=new oe(f);this.yellowPaint=new G({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new G({color:165063,roughness:.4,metalness:.3}),this.redPaint=new G({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new G({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new G({color:2040877,roughness:.8}),this.woodPlankMat=new G({color:7877903,roughness:.9}),this.tireMat=new G({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new G({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new Jo({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new he({color:16777215}),this.taillightMat=new G({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new G({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new G({color:16119280,roughness:.65}),this.cowBrownMat=new G({color:9262372,roughness:.7}),this.cowBlackMat=new G({color:2236962,roughness:.75}),this.cowFawnMat=new G({color:12088115,roughness:.68}),this.hornMat=new G({color:3621201,roughness:.4}),this.snoutMat=new G({color:1974308,roughness:.8});const T=new Mt;T.name="truckBody",this.bodyGroup=T;const F=new H(1.9,.4,6),nt=new M(F,this.chassisMat);nt.position.set(0,.65,.2),nt.castShadow=!0,T.add(nt);const N=new Mt;N.position.set(0,.6,-2.85),[-.3,0,.3].forEach(b=>{const k=new ct(.06,.06,2.3,8);k.rotateZ(Math.PI/2);const Q=new M(k,this.tealBumperMat);Q.position.y=b,Q.castShadow=!0,N.add(Q)}),[-.95,-.45,.45,.95].forEach(b=>{const k=new H(.08,.72,.08),Q=new M(k,this.tealBumperMat);Q.position.x=b,N.add(Q)}),[-1.08,1.08].forEach(b=>{const k=new ct(.03,.03,.9,6),Q=new M(k,this.tealBumperMat);Q.position.set(b,.35,0),N.add(Q);const Tt=new Wt(.07,8,8),dt=new M(Tt,this.redPaint);dt.position.set(b,.8,0),N.add(dt)});const W=document.createElement("canvas");W.width=256,W.height=80;const Y=W.getContext("2d");Y.fillStyle="#006633",Y.fillRect(0,0,256,80),Y.strokeStyle="#ffffff",Y.lineWidth=4,Y.strokeRect(4,4,248,72),Y.fillStyle="#ffffff",Y.font="bold 26px sans-serif",Y.textAlign="center",Y.fillText("যশোর-ট",128,34),Y.fillText("০২-০৯৬৯",128,64);const z=new oe(W),st=new Kt(.65,.22),j=new he({map:z}),X=new M(st,j);X.position.set(0,-.15,.08),N.add(X),T.add(N);const $=new H(1.85,.95,1.6),pt=new M($,this.yellowPaint);pt.position.set(0,1.25,-2.05),pt.castShadow=!0,T.add(pt);const q=new Kt(1.65,.85),et=new G({map:n}),ut=new M(q,et);ut.position.set(0,1.25,-2.86),T.add(ut),[-.68,.68].forEach(b=>{const k=new ct(.16,.16,.06,16);k.rotateX(Math.PI/2);const Q=new M(k,this.chassisMat);Q.position.set(b,1.15,-2.87),T.add(Q);const Tt=new ji(.13,16),dt=new M(Tt,this.headlightMat);dt.position.set(b,1.15,-2.89),T.add(dt),this.headlights.push(dt);const Et=new Sp(16772829,2.5,60,Math.PI/5,.5,1.2);Et.position.set(b,1.15,-2.9),Et.target.position.set(b*1.5,0,-35),T.add(Et),T.add(Et.target)}),[-.98,.98].forEach(b=>{const k=new H(.24,.55,1.4),Q=new M(k,this.chassisMat);Q.position.set(b,.95,-1.95),Q.castShadow=!0,T.add(Q)});const ft=new H(2.1,1.45,1.55),at=new M(ft,this.yellowPaint);at.position.set(0,1.75,-.6),at.castShadow=!0,T.add(at),[-1.06,1.06].forEach(b=>{const k=new H(.04,1.35,1.4),Q=new M(k,this.cyanBluePaint);Q.position.set(b,1.75,-.6),T.add(Q);const Tt=new Kt(.65,.55),dt=new M(Tt,this.glassMat);dt.position.set(b>0?b+.03:b-.03,1.95,-.65),dt.rotation.y=b>0?Math.PI/2:-Math.PI/2,T.add(dt)});const yt=new Kt(1.85,.72),Rt=new M(yt,this.glassMat);Rt.position.set(0,1.92,-1.39),T.add(Rt);const Z=new Mt;Z.position.set(0,2.65,-.85);const lt=new Kt(2.15,.85),D=new G({map:r,roughness:.4}),ht=new M(lt,D);ht.position.set(0,0,-.55),Z.add(ht);const rt=new H(2.2,.15,1.4),V=new M(rt,this.redPaint);V.position.set(0,.45,.1),V.castShadow=!0,Z.add(V);const ot=new H(2.24,.18,.08),Pt=new M(ot,this.yellowPaint);Pt.position.set(0,.38,-.58),Z.add(Pt),T.add(Z);const _t=new Mt;_t.position.set(0,1.6,1.6);const A=new H(2.2,.12,3.4),E=new M(A,this.woodPlankMat);E.position.set(0,-.4,0),E.receiveShadow=!0,_t.add(E);const K=new G({map:d,roughness:.45});[-1.12,1.12].forEach(b=>{const k=new Kt(3.4,1.15),Q=new M(k,K);Q.position.set(b,.25,0),Q.rotation.y=b>0?Math.PI/2:-Math.PI/2,Q.castShadow=!0,_t.add(Q);const Tt=new H(.12,.12,3.4),dt=new M(Tt,this.redPaint);dt.position.set(b,.85,0),_t.add(dt)});const vt=new H(2.2,1.15,.1),mt=new M(vt,this.redPaint);mt.position.set(0,.25,-1.68),_t.add(mt);const gt=new Mt;gt.position.set(0,0,1.68);const Ot=new H(2.28,1.45,.08),At=new G({color:4886754,roughness:.45}),Nt=new M(Ot,At);Nt.position.set(0,.08,0),Nt.castShadow=!0,gt.add(Nt);const Vt=new Kt(2.28,1.45),It=new G({map:x,roughness:.35,metalness:.15}),wt=new M(Vt,It);wt.position.set(0,.08,.045),gt.add(wt),[-1,1].forEach(b=>{const k=new vc;k.moveTo(0,0),k.lineTo(b*.18,.28),k.lineTo(0,.28),k.closePath();const Q={depth:.08,bevelEnabled:!1},Tt=new Ko(k,Q),dt=new G({color:1516884,roughness:.4}),Et=new M(Tt,dt);Et.position.set(b*1.14,.68,-.04),gt.add(Et)}),[-.78,.78].forEach((b,k)=>{const Q=k===0,Tt=new M(new H(.42,.16,.05),this.chassisMat);Tt.position.set(b,-.42,.08),gt.add(Tt);const dt=new M(new H(.12,.12,.03),new G({color:16096779,emissive:14251782,emissiveIntensity:.3}));dt.position.set(Q?b-.13:b+.13,-.42,.1),gt.add(dt);const Et=new M(new H(.12,.12,.03),this.taillightMat);Et.position.set(b,-.42,.1),gt.add(Et),this.brakeLights.push(Et);const kt=new M(new H(.12,.12,.03),new G({color:16317180,roughness:.3}));kt.position.set(Q?b+.13:b-.13,-.42,.1),gt.add(kt)}),[-.85,.85].forEach(b=>{const k=new M(new H(.42,.44,.03),this.tireMat);k.position.set(b,-.8,.06),gt.add(k)}),_t.add(gt),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((b,k)=>{const Q=this.createBedCow(b.mat,b.scale);Q.position.set(b.x,.35,b.z),Q.rotation.y=b.rotY,_t.add(Q),this.cows.push({group:Q,head:Q.userData.head,baseRotX:Q.userData.head.rotation.x,seed:k*1.5})}),T.add(_t);const Jt=this.createTruckWheel(.48,.26,!1);Jt.position.set(0,.42,.4),Jt.rotation.x=Math.PI/2,T.add(Jt);const Xt=new ct(.08,.08,.6,8);Xt.rotateZ(Math.PI/2);const Bt=new M(Xt,this.chassisMat);Bt.position.set(1.05,.48,-.8),T.add(Bt);const Ct=new me(.22,1.2,12);Ct.rotateZ(-Math.PI/2);const Zt=new he({color:16755200,transparent:!0,opacity:0}),te=new M(Ct,Zt);te.position.set(1.65,.48,-.8),T.add(te),this.exhaustFires.push(te),this.group.add(T);const Gt=.48,bt=.52,xt=.32;[-1.02,1.02].forEach(b=>{const k=this.createTruckWheelAssembly(bt,xt,b>0,!1);k.position.set(b,Gt,-1.95),this.group.add(k),this.wheels.push(k.userData.spinner),this.frontWheels.push(k)}),[-1.02,1.02].forEach(b=>{const k=this.createTruckWheelAssembly(bt,xt,b>0,!0);k.position.set(b,Gt,1.85),this.group.add(k),this.wheels.push(k.userData.spinner)})}createBedCow(t,e=1){const n=new Mt;n.scale.set(e,e,e);const i=new H(.85,.85,1.35),o=new M(i,t);o.position.set(0,.45,0),o.castShadow=!0,n.add(o);const a=new me(.24,.38,8),r=new M(a,t);r.position.set(0,.95,-.32),r.rotation.x=-.2,n.add(r);const c=new Mt;c.position.set(0,.75,-.6),n.userData.head=c;const h=new H(.42,.46,.62),d=new M(h,t);d.position.set(0,.22,-.35),c.add(d);const f=new H(.32,.25,.25),l=new M(f,this.snoutMat);return l.position.set(0,.12,-.68),c.add(l),[-.18,.18].forEach(u=>{const g=new me(.05,.3,6),w=new M(g,this.hornMat);w.position.set(u,.46,-.28),w.rotation.z=u>0?-.38:.38,w.rotation.x=.25,c.add(w);const m=new H(.18,.07,.08),p=new M(m,t);p.position.set(u>0?.26:-.26,.32,-.25),p.rotation.z=u>0?-.35:.35,c.add(p)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const o=new Mt,a=new Mt;if(o.userData.spinner=a,o.add(a),i){const r=this.createTruckWheel(t,e*.75,n);r.position.x=n?.08:-.08,a.add(r);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,a.add(c)}else{const r=this.createTruckWheel(t,e,n);a.add(r)}return o}createTruckWheel(t,e,n){const i=new Mt,o=new ct(t,t,e,24);o.rotateZ(Math.PI/2);const a=new M(o,this.tireMat);i.add(a);const r=new ct(t*.65,t*.65,e+.02,18);r.rotateZ(Math.PI/2);const c=new M(r,this.rimMat);i.add(c);const h=new ct(t*.28,t*.28,e+.05,12);h.rotateZ(Math.PI/2);const d=new M(h,this.chassisMat);return i.add(d),i}update(t,e,n,i,o,a){const r=t*1e3/3600,c=2*Math.PI*.52,h=r/c*(2*Math.PI)*a;this.wheelRotation-=h,this.wheels.forEach(p=>{p.rotation.x=this.wheelRotation});const d=n-this.group.position.x,f=-Math.max(-.35,Math.min(Yt.STEERING.WHEEL_TURN_ANGLE,d*.35));this.frontWheels.forEach(p=>{p.rotation.y+=(f-p.rotation.y)*Math.min(1,a*12)});const l=Math.max(-.065,Math.min(.065,d*.065));this.currentRoll+=(l-this.currentRoll)*Math.min(1,a*10),this.bodyGroup.rotation.z=this.currentRoll;const u=Math.max(-.05,Math.min(.05,d*.05));this.currentYaw+=(u-this.currentYaw)*Math.min(1,a*10),this.bodyGroup.rotation.y=this.currentYaw;let g=0;i?g=.045:o&&(g=-.035),this.currentPitch+=(g-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const w=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(p=>{p.material=w}),this.exhaustFires.forEach(p=>{o?(p.material.opacity=.95,p.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),p.material.color.setHex(Math.random()>.4?16759552:16729088)):p.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(p=>{p.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(p=>{p.scale.set(1,1,1)});const m=performance.now()*.001;this.cows.forEach(p=>{const v=Math.sin(m*6.5+p.seed)*.08+(o?Math.sin(m*14+p.seed)*.05:0);p.head.rotation.x=p.baseRotX+v,p.head.rotation.y=Math.sin(m*2.2+p.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=1.45,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Dp{constructor(){this.group=new Mt,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new Mt,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new yn,this.collisionSize=new U(1.5,2.1,3.2),this._boxCenter=new U,this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new Mt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=640;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,360);n.addColorStop(0,"#7dd3fc"),n.addColorStop(1,"#e0f2fe"),e.fillStyle=n,e.fillRect(0,0,1024,640);const i=(C,O,tt)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(C,O,38*tt,0,Math.PI*2),e.arc(C+42*tt,O-14*tt,48*tt,0,Math.PI*2),e.arc(C+95*tt,O-8*tt,42*tt,0,Math.PI*2),e.arc(C+135*tt,O+8*tt,32*tt,0,Math.PI*2),e.fill()};i(80,120,1.1),i(720,100,.95);const o=512,a=270;for(let C=-Math.PI;C<=0;C+=Math.PI/18)e.beginPath(),e.moveTo(o,a),e.lineTo(o+Math.cos(C)*380,a+Math.sin(C)*380),e.lineTo(o+Math.cos(C+Math.PI/36)*380,a+Math.sin(C+Math.PI/36)*380),e.closePath(),e.fillStyle="rgba(245, 158, 11, 0.45)",e.fill();e.beginPath(),e.arc(o,a,78,Math.PI,0),e.fillStyle="#f59e0b",e.fill(),e.beginPath(),e.arc(o,a,52,Math.PI,0),e.fillStyle="#fde047",e.fill();const r=e.createLinearGradient(0,270,0,520);r.addColorStop(0,"#0284c7"),r.addColorStop(1,"#0369a1"),e.fillStyle=r,e.beginPath(),e.moveTo(0,270),e.lineTo(512,270),e.lineTo(470,520),e.lineTo(0,520),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=3.5;for(let C=290;C<510;C+=24)for(let tt=20;tt<440;tt+=38*2)e.beginPath(),e.moveTo(tt,C),e.quadraticCurveTo(tt+38/2,C-5,tt+38,C),e.stroke();e.fillStyle="#fde68a",e.beginPath(),e.moveTo(470,520),e.lineTo(512,270),e.lineTo(560,270),e.lineTo(530,520),e.closePath(),e.fill(),e.fillStyle="#16a34a",e.beginPath(),e.moveTo(520,270),e.lineTo(1024,270),e.lineTo(1024,520),e.lineTo(485,520),e.closePath(),e.fill();const c=(C,O)=>{e.strokeStyle="#854d0e",e.lineWidth=6,e.beginPath(),e.moveTo(C,O),e.quadraticCurveTo(C-15,O-60,C-25,O-110),e.stroke(),e.strokeStyle="#15803d",e.lineWidth=4;for(let tt=0;tt<Math.PI*2;tt+=Math.PI/4)e.beginPath(),e.moveTo(C-25,O-110),e.quadraticCurveTo(C-25+Math.cos(tt)*45,O-110+Math.sin(tt)*40-15,C-25+Math.cos(tt)*65,O-110+Math.sin(tt)*40),e.stroke()};c(640,360),c(720,350),c(940,360),e.fillStyle="#fce7f3",e.fillRect(720,370,190,85),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(720,370,190,85),e.fillStyle="#dc2626",e.beginPath(),e.moveTo(705,370),e.lineTo(815,310),e.lineTo(925,370),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let C=720;C<910;C+=18)e.beginPath(),e.moveTo(C,370),e.lineTo(815,310),e.stroke();e.fillStyle="#374151",e.fillRect(785,395,35,60),e.fillRect(850,390,30,30),e.fillStyle="#f8fafc",e.fillRect(570,385,140,70),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(570,385,140,70),e.fillStyle="#2563eb",e.beginPath(),e.moveTo(555,385),e.lineTo(640,335),e.lineTo(725,385),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let C=570;C<710;C+=18)e.beginPath(),e.moveTo(C,385),e.lineTo(640,335),e.stroke();e.fillStyle="#1e3a8a",e.fillRect(620,405,30,50),e.fillStyle="#ea580c",e.fillRect(0,510,1024,45),e.fillStyle="#fde047";for(let C=20;C<1024;C+=40)e.beginPath(),e.arc(C,510,16,0,Math.PI),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2,e.stroke();e.fillStyle="#18181b",e.fillRect(0,555,1024,35);const h=["#dc2626","#ffffff","#16a34a","#fde047"];for(let C=0;C<48;C++)e.fillStyle=h[C%h.length],e.fillRect(C*22,558,14,29);const d=(C,O)=>{e.strokeStyle="#94a3b8",e.lineWidth=3,e.beginPath(),e.arc(C,O,8,0,Math.PI*2),e.stroke(),e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(C,O+8),e.bezierCurveTo(C+28,O+8,C+44,O+28,C,O+64),e.bezierCurveTo(C-44,O+28,C-28,O+8,C,O+8),e.closePath(),e.fill(),e.strokeStyle="#64748b",e.lineWidth=2.5,e.stroke(),e.fillStyle="#94a3b8",[[0,24],[-14,28],[14,28],[-8,42],[8,42],[0,52]].forEach(([tt,St])=>{e.beginPath(),e.arc(C+tt,O+St,3.2,0,Math.PI*2),e.fill()})};d(220,570),d(512,570),d(804,570);const f=new oe(t),l=document.createElement("canvas");l.width=1024,l.height=260;const u=l.getContext("2d"),g=u.createLinearGradient(0,0,0,260);g.addColorStop(0,"#f8fafc"),g.addColorStop(.5,"#e2e8f0"),g.addColorStop(1,"#94a3b8"),u.fillStyle=g,u.fillRect(0,0,1024,260),u.fillStyle="#475569";for(let C=30;C<1e3;C+=45)u.beginPath(),u.arc(C,24,7,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(C-2,22,2.5,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.fillStyle="#475569",u.beginPath(),u.arc(C,236,7,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(C-2,234,2.5,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.fillStyle="#475569";u.fillStyle="#f59e0b",u.strokeStyle="#dc2626",u.lineWidth=7,u.font="bold 82px sans-serif",u.textAlign="center",u.textBaseline="middle",u.strokeText("বাংলাদেশ",512,115),u.fillText("বাংলাদেশ",512,115),u.fillStyle="#16a34a",u.font="bold 78px sans-serif",u.fillText("বাংলাদেশ",512,113),u.fillStyle="#fef08a",u.font="bold 74px sans-serif",u.fillText("বাংলাদেশ",512,111);const w=["#dc2626","#16a34a","#f59e0b","#06b6d4","#ec4899"];for(let C=0;C<18;C++)u.beginPath(),u.arc(310+C*24,185,7.5,0,Math.PI*2),u.fillStyle=w[C%w.length],u.fill(),u.strokeStyle="#18181b",u.lineWidth=1.8,u.stroke();const m=(C,O)=>{u.beginPath(),u.arc(C,O,62,0,Math.PI*2),u.fillStyle="#cbd5e1",u.fill(),u.strokeStyle="#64748b",u.lineWidth=4,u.stroke(),u.beginPath(),u.arc(C,O,48,0,Math.PI*2),u.fillStyle="#dc2626",u.fill(),u.strokeStyle="#fde047",u.lineWidth=3,u.stroke(),u.fillStyle="#ffffff",u.font="bold 50px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText("মা",C,O)};m(140,125),m(884,125);const p=new oe(l),v=document.createElement("canvas");v.width=1024,v.height=1024;const _=v.getContext("2d");_.beginPath(),_.moveTo(40,1024),_.lineTo(40,520),_.bezierCurveTo(40,60,984,60,984,520),_.lineTo(984,1024),_.closePath(),_.fillStyle="#dc2626",_.fill(),_.strokeStyle="#881337",_.lineWidth=12,_.stroke(),_.strokeStyle="#fde047",_.lineWidth=5,_.stroke(),_.fillStyle="#1d4ed8",_.fillRect(456,120,112,680),_.strokeStyle="#18181b",_.lineWidth=3,_.strokeRect(456,120,112,680),_.fillStyle="#ffffff",_.fillRect(498,120,28,680),_.beginPath(),_.arc(512,780,42,0,Math.PI*2),_.fillStyle="#dc2626",_.fill(),_.strokeStyle="#fde047",_.lineWidth=5,_.stroke(),_.fillStyle="#ffffff",_.font="bold 44px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("১",512,780);const S=(C,O,tt,St)=>{_.save(),_.translate(O,tt),_.rotate(St),_.font="bold 88px sans-serif",_.textAlign="center",_.textBaseline="middle",_.strokeStyle="#18181b",_.lineWidth=12,_.strokeText(C,0,0),_.fillStyle="#ffffff",_.fillText(C,0,0),_.restore()};S("মায়ের",310,240,-.22),S("দোয়া",714,240,.22);const P=(C,O)=>{_.save(),_.translate(C,500),O&&_.scale(-1,1),_.beginPath(),_.arc(70,-160,36,0,Math.PI*2),_.fillStyle="#fde047",_.fill(),_.strokeStyle="#18181b",_.lineWidth=3,_.stroke(),_.beginPath(),_.arc(70,-160,16,0,Math.PI*2),_.fillStyle="#ea580c",_.fill();for(let St=0;St<7;St++){const Ft=-Math.PI/2+(St-3)*.35;_.beginPath(),_.ellipse(80+Math.cos(Ft)*45,-50+Math.sin(Ft)*35,18,38,Ft,0,Math.PI*2),_.fillStyle="#ec4899",_.fill(),_.strokeStyle="#18181b",_.lineWidth=2.5,_.stroke()}_.beginPath(),_.arc(80,-50,24,0,Math.PI*2),_.fillStyle="#fef08a",_.fill(),_.stroke(),((St,Ft)=>{_.fillStyle="#16a34a",_.beginPath(),_.ellipse(St-30,Ft+20,16,32,.6,0,Math.PI*2),_.ellipse(St+30,Ft+20,16,32,-.6,0,Math.PI*2),_.fill(),_.stroke(),_.fillStyle="#1d4ed8",_.beginPath(),_.arc(St,Ft,55,0,Math.PI*2),_.fill(),_.strokeStyle="#18181b",_.lineWidth=3,_.stroke(),_.strokeStyle="#38bdf8",_.lineWidth=4,_.beginPath(),_.arc(St,Ft,36,.4,Math.PI*1.6),_.stroke(),_.beginPath(),_.arc(St,Ft,20,Math.PI,Math.PI*2.2),_.stroke(),_.fillStyle="#ffffff",_.beginPath(),_.arc(St,Ft,10,0,Math.PI*2),_.fill()})(85,110),_.restore()};P(260,!1),P(764,!0);const L=new oe(v),I=document.createElement("canvas");I.width=512,I.height=128;const B=I.getContext("2d");B.fillStyle="#ffffff",B.fillRect(0,0,512,128),B.fillStyle="#dc2626";for(let C=-128;C<640;C+=36)B.beginPath(),B.moveTo(C,0),B.lineTo(C+18,0),B.lineTo(C+18+128,128),B.lineTo(C+128,128),B.closePath(),B.fill();const y=new oe(I),x=document.createElement("canvas");x.width=1024,x.height=1024;const T=x.getContext("2d");T.fillStyle="#f59e0b",T.fillRect(0,0,1024,1024),T.strokeStyle="rgba(234, 88, 12, 0.18)",T.lineWidth=3;for(let C=-1024;C<2048;C+=64)T.beginPath(),T.moveTo(C,0),T.lineTo(C+1024,1024),T.stroke(),T.beginPath(),T.moveTo(C,1024),T.lineTo(C+1024,0),T.stroke();T.fillStyle="#881337",T.fillRect(0,0,1024,140),T.fillRect(0,884,1024,140),T.fillStyle="#06b6d4",T.fillRect(0,140,1024,28),T.fillRect(0,856,1024,28),T.fillStyle="#10b981",T.fillRect(0,168,1024,16),T.fillRect(0,840,1024,16);for(let C=32;C<1024;C+=64)T.beginPath(),T.arc(C,140,16,0,Math.PI),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(C,884,16,Math.PI,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke();[70,954].forEach(C=>{T.fillStyle="#ffffff",T.font="bold 44px sans-serif",T.textAlign="center",T.textBaseline="middle",T.shadowColor="rgba(0,0,0,0.8)",T.shadowBlur=8,T.fillText("মা বাবার দোয়া",512,C),T.shadowBlur=0}),((C,O)=>{T.strokeStyle="#ea580c",T.lineWidth=4;for(let tt=0;tt<Math.PI*2;tt+=Math.PI/16)T.beginPath(),T.moveTo(C,O),T.lineTo(C+Math.cos(tt)*260,O+Math.sin(tt)*260),T.stroke();for(let tt=0;tt<16;tt++){const St=tt*Math.PI/8,Ft=C+Math.cos(St)*175,qt=O+Math.sin(St)*175;T.beginPath(),T.ellipse(Ft,qt,42,65,St+Math.PI/2,0,Math.PI*2),T.fillStyle=tt%2===0?"#dc2626":"#0284c7",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke()}for(let tt=0;tt<12;tt++){const St=tt*Math.PI/6,Ft=C+Math.cos(St)*115,qt=O+Math.sin(St)*115;T.beginPath(),T.ellipse(Ft,qt,34,52,St+Math.PI/2,0,Math.PI*2),T.fillStyle=tt%2===0?"#ec4899":"#10b981",T.fill(),T.strokeStyle="#18181b",T.lineWidth=3.5,T.stroke()}T.beginPath(),T.arc(C,O,62,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(C,O,32,0,Math.PI*2),T.fillStyle="#b91c1c",T.fill(),[-1,1].forEach(tt=>{T.beginPath(),T.moveTo(C+tt*160,O-60),T.bezierCurveTo(C+tt*320,O-140,C+tt*420,O-40,C+tt*340,O+50),T.bezierCurveTo(C+tt*280,O+120,C+tt*200,O+60,C+tt*180,O),T.fillStyle="#0d9488",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(C+tt*320,O-30,28,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.beginPath(),T.arc(C+tt*320,O-30,16,0,Math.PI*2),T.fillStyle="#1e3a8a",T.fill()})})(512,512);const nt=(C,O)=>{const tt=["#dc2626","#ec4899","#f59e0b","#10b981"];for(let St=0;St<8;St++){const Ft=St*Math.PI/4,qt=C+Math.cos(Ft)*48,jt=O+Math.sin(Ft)*48;T.beginPath(),T.arc(qt,jt,22,0,Math.PI*2),T.fillStyle=tt[St%tt.length],T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke()}T.beginPath(),T.arc(C,O,26,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(C,O,12,0,Math.PI*2),T.fillStyle="#991b1b",T.fill()};[120,904].forEach(C=>{nt(C,320),nt(C,704)});const N=new oe(x),W=document.createElement("canvas");W.width=256,W.height=256;const Y=W.getContext("2d");Y.fillStyle="#b91c1c",Y.fillRect(0,0,256,256),Y.strokeStyle="#fde047",Y.lineWidth=3;for(let C=0;C<256;C+=32)Y.beginPath(),Y.moveTo(C,0),Y.lineTo(C+32,256),Y.stroke(),Y.beginPath(),Y.moveTo(256-C,0),Y.lineTo(256-C-32,256),Y.stroke();const z=new oe(W),st=document.createElement("canvas");st.width=512,st.height=256;const j=st.getContext("2d");j.fillStyle="#f59e0b",j.fillRect(0,0,512,256),j.fillStyle="#ea580c",j.beginPath(),j.arc(256,105,45,0,Math.PI*2),j.fill();for(let C=0;C<Math.PI*2;C+=Math.PI/8)j.fillStyle="#dc2626",j.beginPath(),j.arc(256+Math.cos(C)*62,105+Math.sin(C)*62,14,0,Math.PI*2),j.fill();j.fillStyle="#fde047",j.beginPath(),j.arc(256,105,26,0,Math.PI*2),j.fill(),j.fillStyle="#0d9488",j.fillRect(0,185,512,71),j.strokeStyle="#fde047",j.lineWidth=5;for(let C=-20;C<=530;C+=32)j.beginPath(),j.moveTo(C,185),j.lineTo(C+32,256),j.stroke(),j.beginPath(),j.moveTo(C+32,185),j.lineTo(C,256),j.stroke();const X=new oe(st),$=new G({color:14427686,metalness:.6,roughness:.3}),pt=new G({color:15658734,metalness:.9,roughness:.15}),q=new G({color:2040865,roughness:.9}),et=new G({color:165063,metalness:.5,roughness:.4}),ut=new G({color:1409085,roughness:.6}),ft=new G({map:f,roughness:.4}),at=new G({map:p,roughness:.35,metalness:.1}),yt=new G({map:L,roughness:.6,transparent:!0,side:Te}),Rt=new G({map:y,roughness:.45,metalness:.1}),Z=new G({map:X,roughness:.5,side:Te}),lt=new G({map:N,roughness:.7,side:Te}),D=new G({map:z,roughness:.6}),ht=new Mt,rt=new ct(.045,.045,1.8,12);rt.rotateX(Math.PI/2);const V=new M(rt,$);V.position.set(0,.65,.1),ht.add(V);const ot=new ct(.04,.04,.95,12);ot.rotateX(-.18);const Pt=new M(ot,$);Pt.position.set(0,.95,-.9),ht.add(Pt),[-.1,.1].forEach(C=>{const O=new ct(.025,.02,.7,8);O.rotateX(.15);const tt=new M(O,pt);tt.position.set(C,.48,-1.02),ht.add(tt)});const _t=new ct(.025,.025,.75,12);_t.rotateZ(Math.PI/2);const A=new M(_t,pt);A.position.set(0,1.35,-.85),ht.add(A),[-.38,.38].forEach(C=>{const O=new ct(.032,.032,.14,12);O.rotateZ(Math.PI/2);const tt=new M(O,q);tt.position.set(C,1.35,-.85),ht.add(tt)});const E=new Wt(.09,14,14);E.scale(1,1,.7);const K=new M(E,new he({color:16777215}));K.position.set(0,1.05,-1.08),ht.add(K),this.headlights.push(K);const vt=new Wt(.05,12,12);this.bellMesh=new M(vt,pt),this.bellMesh.position.set(-.24,1.4,-.85),ht.add(this.bellMesh);const mt=new H(.26,.08,.32),gt=new M(mt,q);gt.position.set(0,1.08,-.15),ht.add(gt),[-.08,.08].forEach(C=>{const O=new ct(.02,.02,.12,8),tt=new M(O,pt);tt.position.set(C,.98,-.15),ht.add(tt)});const Ot=new ct(.06,.06,.28,12);Ot.rotateZ(Math.PI/2);const At=new M(Ot,pt);At.position.set(0,.52,-.15),ht.add(At),this.bodyGroup.add(ht),this.frontWheel=this.createRickshawWheel(.42,$,pt,q),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const Nt=new ct(.46,.46,.12,16,1,!0,0,Math.PI*.8);Nt.rotateZ(Math.PI/2);const Vt=new M(Nt,et);Vt.position.set(0,.44,-1.05),this.bodyGroup.add(Vt),[-.78,.78].forEach(C=>{const O=this.createRickshawWheel(.48,$,pt,q);O.position.set(C,.48,.95),this.bodyGroup.add(O),this.wheels.push(O);const tt=new ct(.53,.53,.16,20,1,!0,0,Math.PI);tt.rotateZ(Math.PI/2);const St=new M(tt,Rt);St.position.set(C,.48,.95),this.bodyGroup.add(St)});const It=new Mt,wt=new H(1.25,.08,1.25),$t=new M(wt,ut);$t.position.set(0,.65,.75),It.add($t);const Jt=new H(.9,.05,.5),Xt=new M(Jt,ut);Xt.position.set(0,.48,.35),It.add(Xt);const Bt=new H(1.2,.38,.58),Ct=new M(Bt,ut);Ct.position.set(0,.86,.88),It.add(Ct),[-.62,.62].forEach((C,O)=>{const tt=new Kt(1.15,.52),St=new M(tt,Z);St.position.set(C,.96,.75),St.rotation.y=O===0?-Math.PI/2:Math.PI/2,It.add(St)});const Zt=new H(1.18,.14,.56),te=new M(Zt,D);te.position.set(0,1.08,.88),It.add(te);const Gt=new H(1.16,.22,.1),bt=new M(Gt,D);bt.position.set(0,1.15,1.08),It.add(bt),[-.58,.58].forEach(C=>{const O=new H(.08,.28,.6),tt=new M(O,et);tt.position.set(C,1.22,.88),It.add(tt)});const xt=new Kt(1.06,.54),b=new M(xt,ft);b.position.set(0,.66,1.18),b.rotation.y=Math.PI,It.add(b);const k=new Kt(1.08,.19),Q=new M(k,at);Q.position.set(0,.96,1.185),Q.rotation.y=Math.PI,It.add(Q);const Tt=new Kt(1.22,.82),dt=new M(Tt,yt);dt.position.set(0,1.5,1.11),dt.rotation.y=Math.PI,It.add(dt),[-.78,.78].forEach(C=>{const O=new M(new ct(.055,.055,.035,12),pt);O.rotateX(Math.PI/2),O.position.set(C,.62,1.16),It.add(O);const tt=new Wt(.048,12,12),St=new M(tt,new he({color:15680580}));St.position.set(C,.62,1.18),It.add(St),this.brakeLights.push(St)});const Et=new ct(.7,.7,.96,24,1,!0,-Math.PI/2,Math.PI);Et.rotateX(-Math.PI/2);const kt=new M(Et,lt);kt.position.set(0,1.5,.62),It.add(kt);const re=new ln(.7,.022,8,24,Math.PI),ne=new M(re,$);ne.position.set(0,1.5,.14),It.add(ne);for(let C=0;C<=14;C++){const O=C*Math.PI/14,tt=Math.cos(O)*.7,St=1.5+Math.sin(O)*.7,Ft=new M(new Wt(.022,6,6),new G({color:14427686,roughness:.8}));Ft.position.set(tt,St-.02,.14),It.add(Ft)}const Ht=new ln(.7,.025,8,24,Math.PI),ue=new M(Ht,$);ue.position.set(0,1.5,1.1),It.add(ue);for(let C=0;C<=14;C++){const O=C*Math.PI/14,tt=Math.cos(O)*.7,St=1.5+Math.sin(O)*.7,Ft=new M(new Wt(.022,6,6),new G({color:14427686,roughness:.8}));Ft.position.set(tt,St-.02,1.1),It.add(Ft)}const Lt=new ct(.7,.7,.12,24,1,!0,-Math.PI/2,Math.PI);Lt.rotateX(-Math.PI/2);const Qt=new M(Lt,lt);Qt.position.set(0,1.5,1.04),It.add(Qt),[-.7,.7].forEach((C,O)=>{const tt=new Kt(.82,.36),St=new M(tt,lt);St.position.set(C,1.34,.65),St.rotation.y=O===0?-Math.PI/2:Math.PI/2,It.add(St);const Ft=new M(new ct(.012,.012,.78,8),pt);Ft.position.set(C+(O===0?-.015:.015),1.34,.65),Ft.rotation.x=.45,It.add(Ft);const qt=new M(new ct(.012,.012,.78,8),pt);qt.position.set(C+(O===0?-.015:.015),1.34,.65),qt.rotation.x=-.45,It.add(qt);const jt=new M(new Wt(.022,8,8),$);jt.position.set(C+(O===0?-.025:.025),1.34,.65),It.add(jt)}),[-.64,.64].forEach(C=>{const O=new ct(.016,.016,1.15,8);O.rotateX(.42);const tt=new M(O,$);tt.position.set(C,1.4,.6),It.add(tt)}),this.bodyGroup.add(It);const zt=new Mt,pe=new G({color:165063,roughness:.8}),fe=new G({color:9262372,roughness:.7}),Le=new G({color:1409085,roughness:.9}),rn=new H(.36,.48,.22),an=new M(rn,pe);an.position.set(0,1.42,-.25),an.rotation.x=.22,zt.add(an);const bn=new Wt(.12,14,14),un=new M(bn,fe);un.position.set(0,1.74,-.32),zt.add(un);const On=new ln(.11,.035,8,16);On.rotateX(Math.PI/2);const R=new M(On,new G({color:14427686}));R.position.set(0,1.68,-.32),zt.add(R),[-.18,.18].forEach(C=>{const O=new ct(.04,.035,.52,8);O.rotateX(.75);const tt=new M(O,fe);tt.position.set(C,1.42,-.52),zt.add(tt)});const J=new H(.38,.44,.32),it=new M(J,Le);it.position.set(0,1.05,-.18),zt.add(it),this.bodyGroup.add(zt),this.buildCuteRomanticCouple(),[-.32,.32].forEach(C=>{const O=new me(.12,.65,8);O.rotateX(-Math.PI/2);const tt=new he({color:16759552,transparent:!0,opacity:0}),St=new M(O,tt);St.position.set(C,.58,1.25),this.bodyGroup.add(St),this.exhaustFires.push(St)})}createRickshawWheel(t,e,n,i){const o=new Mt,a=new ln(t,.038,14,36);a.rotateY(Math.PI/2);const r=new M(a,i);o.add(r);const c=new ln(t*.92,.02,10,36);c.rotateY(Math.PI/2);const h=new M(c,n);o.add(h);const d=new ct(.06,.06,.14,14);d.rotateZ(Math.PI/2);const f=new M(d,e);o.add(f);for(let l=0;l<14;l++){const u=l*Math.PI/7,g=new ct(.005,.005,t*1.84,4);g.rotateX(u);const w=new M(g,n);o.add(w)}return o}buildCuteRomanticCouple(){this.coupleGroup=new Mt,this.coupleGroup.position.set(0,0,0);const t=new G({color:16106390,roughness:.6}),e=new G({color:1841431,roughness:.5}),n=new G({color:986638,roughness:.4}),i=new G({color:15680580,roughness:.7}),o=new G({color:1976635,roughness:.8}),a=new G({color:15485081,roughness:.6}),r=new G({color:16638023,roughness:.7}),c=new G({color:16777215,roughness:.8}),h=new Mt;h.position.set(-.25,1.18,.82);const d=new H(.32,.42,.24),f=new M(d,i);f.position.set(0,.22,0),f.rotation.y=.16,f.rotation.z=-.06,h.add(f);const l=new Wt(.12,14,14),u=new M(l,t);u.position.set(.02,.52,.02),u.rotation.y=.26,u.rotation.z=-.08,h.add(u);const g=new Wt(.13,14,14);g.scale(1.02,1.05,1.02);const w=new M(g,e);w.position.set(.02,.55,.01),h.add(w);const m=new H(.28,.18,.48),p=new M(m,o);p.position.set(0,-.05,-.16),h.add(p);const v=new ct(.04,.035,.38,8);v.rotateZ(.25);const _=new M(v,i);_.position.set(-.22,.18,0),h.add(_);const S=new ct(.04,.035,.34,8);S.rotateZ(-Math.PI/4),S.rotateX(-.18);const P=new M(S,i);P.position.set(.18,.14,-.07),h.add(P),this.coupleGroup.add(h);const L=new Mt;L.position.set(.25,1.18,.82);const I=new H(.28,.38,.22),B=new M(I,a);B.position.set(0,.2,0),B.rotation.y=-.18,B.rotation.z=.08,L.add(B);const y=new H(.32,.35,.24),x=new M(y,r);x.position.set(0,.22,.02),L.add(x);const T=new Wt(.11,14,14),F=new M(T,t);F.position.set(-.02,.48,.02),F.rotation.y=-.3,F.rotation.z=.1,L.add(F);const nt=new Wt(.12,14,14);nt.scale(1.04,1.06,1.08);const N=new M(nt,n);N.position.set(-.02,.51,0),L.add(N);const W=new ct(.04,.02,.32,8);W.rotateX(-.4);const Y=new M(W,n);Y.position.set(-.01,.38,.15),L.add(Y);const z=new H(.26,.16,.46),st=new M(z,c);st.position.set(0,-.05,-.16),L.add(st);const j=new ct(.035,.03,.35,8);j.rotateZ(-.25),j.rotateX(-.25);const X=new M(j,a);X.position.set(.2,.16,-.05),L.add(X);const $=new Mt,pt=new ct(.007,.007,.32,6),q=new G({color:1409085,roughness:.8}),et=new M(pt,q);et.position.set(0,.14,0),$.add(et);const ut=new H(.07,.012,.035),ft=new M(ut,q);ft.position.set(.035,.12,0),ft.rotation.z=.3,$.add(ft);const at=new M(ut,q);at.position.set(-.035,.18,0),at.rotation.z=-.3,$.add(at);const yt=new G({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Rt=new M(new Zo(.055,1),yt);Rt.position.set(0,.3,0),Rt.scale.set(1.1,1.25,1.1),$.add(Rt);const Z=new M(new Wt(.038,8,8),new G({color:10033947,roughness:.3}));Z.position.set(0,.32,0),$.add(Z),$.position.set(.22,.22,-.15),$.rotation.x=-.35,$.rotation.z=-.22,L.add($);const lt=new ct(.035,.03,.32,8);lt.rotateZ(Math.PI/4),lt.rotateX(-.18);const D=new M(lt,a);D.position.set(-.17,.14,-.07),L.add(D),this.coupleGroup.add(L);const ht=new Mt;ht.position.set(0,1.28,.74);const rt=new M(new Wt(.045,10,10),t);rt.scale.set(1.3,.9,1.1),rt.position.set(-.02,0,0),ht.add(rt);const V=new M(new Wt(.042,10,10),t);V.scale.set(1.2,.85,1.05),V.position.set(.02,.01,.01),ht.add(V),this.coupleGroup.add(ht),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,o,a){const c=t*1e3/3600/.42*a;this.wheelRotation-=c,this.wheels.forEach(m=>{m.rotation.x=this.wheelRotation});const h=n-e,d=-h*.12;this.currentRoll+=(d-this.currentRoll)*Math.min(1,a*7),this.bodyGroup.rotation.z=this.currentRoll;const f=-h*.08;this.currentYaw+=(f-this.currentYaw)*Math.min(1,a*6),this.bodyGroup.rotation.y=this.currentYaw;let l=0;i?l=.04:o&&(l=-.05),this.currentPitch+=(l-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const u=performance.now()*.001,g=Math.min(1,t/80),w=Math.sin(u*8.5)*.025*g;this.coupleGroup.position.y=w,this.coupleGroup.rotation.z=Math.sin(u*4.2)*.015*g,this.exhaustFires.forEach(m=>{o?(m.material.opacity=.9,m.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):m.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(m=>m.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(m=>m.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=1.15,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Up{constructor(){this.group=new Mt,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new yn,this.collisionSize=new U(1.32,1.74,2.58),this._boxCenter=new U,this.buildCNG(),this.group.scale.set(.96,.96,.96)}buildCNG(){this.bodyGroup=new Mt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.clearRect(0,0,1024,1024),e.beginPath(),e.moveTo(0,420),e.lineTo(0,150),e.quadraticCurveTo(0,18,175,18),e.lineTo(849,18),e.quadraticCurveTo(1024,18,1024,150),e.lineTo(1024,420),e.closePath(),e.fillStyle="#1c1917",e.fill(),e.fillStyle="rgba(255, 255, 255, 0.025)";for(let Gt=0;Gt<1024;Gt+=4)e.fillRect(Gt,0,2,420);for(let Gt=0;Gt<420;Gt+=4)e.fillRect(0,Gt,1024,2);const n=262,i=135,o=500,a=220;e.fillStyle="#09090b",e.beginPath(),e.roundRect(n-14,i-14,o+28,a+28,28),e.fill();const r=e.createLinearGradient(n,i,n,i+a);r.addColorStop(0,"#0f172a"),r.addColorStop(.4,"#1e293b"),r.addColorStop(1,"#090d16"),e.fillStyle=r,e.beginPath(),e.roundRect(n,i,o,a,20),e.fill(),e.fillStyle="#2563eb",e.beginPath(),e.roundRect(n+25,i+65,o-50,a-75,14),e.fill(),e.strokeStyle="#1d4ed8",e.lineWidth=4,e.beginPath(),e.moveTo(n+o*.5,i+65),e.lineTo(n+o*.5,i+a-10),e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.12)",e.beginPath(),e.moveTo(n+40,i+a),e.lineTo(n+160,i),e.lineTo(n+220,i),e.lineTo(n+100,i+a),e.closePath(),e.fill(),e.fillStyle="#facc15",e.fillRect(0,420,1024,105),e.fillStyle="#18181b",e.fillRect(0,416,1024,6),e.fillRect(0,523,1024,6),e.fillStyle="#15803d",e.fillRect(0,525,1024,499),e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(0,529,1024,4);const c=230,h=565,d=564,f=345;e.fillStyle="#14532d",e.beginPath(),e.roundRect(c-6,h-6,d+12,f+12,12),e.fill(),e.fillStyle="#166534",e.beginPath(),e.roundRect(c,h,d,f,8),e.fill(),e.strokeStyle="#22c55e",e.lineWidth=3,e.stroke();for(let Gt=0;Gt<4;Gt++){const bt=h+38+Gt*68;e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+28,bt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+32,bt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+32,bt+4,227,4),e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+301,bt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+305,bt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+305,bt+4,227,4)}e.fillStyle="#cbd5e1",e.beginPath(),e.roundRect(c+d*.5-28,h+f-36,56,18,4),e.fill(),e.fillStyle="#09090b",e.beginPath(),e.arc(c+d*.5,h+f-27,4,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="900 64px sans-serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.7)",e.shadowBlur=6,e.fillText("CNG",120,715),e.shadowBlur=0;const l=810,u=665,g=165,w=95;e.fillStyle="#facc15",e.beginPath(),e.roundRect(l,u,g,w,8),e.fill(),e.strokeStyle="#18181b",e.lineWidth=4,e.stroke(),e.fillStyle="#18181b",e.font="900 32px sans-serif",e.fillText("HR 26",l+g*.5,u+34),e.font="900 36px monospace",e.fillText("0123",l+g*.5,u+70),e.fillStyle="#18181b",e.fillRect(0,955,1024,69),e.fillStyle="#3f3f46",e.fillRect(0,955,1024,6);const m=new oe(t),p=document.createElement("canvas");p.width=1024,p.height=1024;const v=p.getContext("2d");v.clearRect(0,0,1024,1024),v.beginPath(),v.moveTo(0,480),v.lineTo(0,140),v.quadraticCurveTo(0,18,175,18),v.lineTo(849,18),v.quadraticCurveTo(1024,18,1024,140),v.lineTo(1024,480),v.closePath(),v.fillStyle="#facc15",v.fill(),v.fillStyle="#09090b",v.beginPath(),v.roundRect(75,55,874,340,24),v.fill(),v.fillStyle="#1e293b",v.fillRect(265,75,494,300),v.fillStyle="#1e293b",v.fillRect(95,75,150,300),v.fillStyle="#1e293b",v.fillRect(779,75,150,300),v.fillStyle="#09090b",v.fillRect(245,70,20,310),v.fillRect(759,70,20,310),v.strokeStyle="#09090b",v.lineWidth=10,v.beginPath(),v.moveTo(420,370),v.lineTo(610,205),v.stroke(),v.strokeStyle="#18181b",v.lineWidth=6,v.beginPath(),v.moveTo(560,245),v.lineTo(660,160),v.stroke(),v.fillStyle="#f59e0b",v.beginPath(),v.roundRect(115,420,95,34,6),v.fill(),v.beginPath(),v.roundRect(814,420,95,34,6),v.fill(),v.fillStyle="#15803d",v.fillRect(0,480,1024,544),v.fillStyle="#18181b",v.beginPath(),v.moveTo(310,480),v.lineTo(714,480),v.lineTo(650,880),v.lineTo(374,880),v.closePath(),v.fill(),v.fillStyle="#facc15",v.beginPath(),v.roundRect(432,590,160,80,6),v.fill(),v.strokeStyle="#18181b",v.lineWidth=3,v.stroke(),v.fillStyle="#18181b",v.font="900 26px sans-serif",v.textAlign="center",v.fillText("HR 26",512,622),v.font="900 28px monospace",v.fillText("0123",512,654),v.fillStyle="#ffffff",v.font="900 52px sans-serif",v.fillText("CNG",200,680);const _=new oe(p),S=document.createElement("canvas");S.width=1024,S.height=512;const P=S.getContext("2d");P.fillStyle="#1c1917",P.fillRect(0,0,1024,210),P.fillStyle="#facc15",P.fillRect(0,210,1024,60),P.fillStyle="#18181b",P.fillRect(0,206,1024,4),P.fillRect(0,270,1024,4),P.fillStyle="#15803d",P.fillRect(0,270,1024,242),P.fillStyle="#0f172a",P.beginPath(),P.roundRect(240,75,480,310,18),P.fill(),P.fillStyle="#2563eb",P.beginPath(),P.roundRect(460,230,240,110,12),P.fill(),P.strokeStyle="#09090b",P.lineWidth=14,P.beginPath(),P.roundRect(240,75,480,310,18),P.stroke();const L=new oe(S),I=new G({color:1409085,metalness:.25,roughness:.35});new G({color:16436245,metalness:.15,roughness:.38});const B=new G({color:1841431,roughness:.85,metalness:.05}),y=new G({color:2450411,roughness:.55}),x=new G({color:1579035,roughness:.92}),T=new G({color:15857145,metalness:.45,roughness:.35}),F=new G({color:16317180,metalness:.92,roughness:.12}),nt=new G({map:m,roughness:.4,metalness:.1,side:Te,transparent:!0,alphaTest:.2}),N=new G({map:_,roughness:.4,metalness:.1,side:Te,transparent:!0,alphaTest:.2}),W=new G({map:L,roughness:.42,metalness:.1,side:Te}),Y=new H(1.24,.24,2.38),z=new M(Y,I);z.position.set(0,.34,0),z.castShadow=!0,z.receiveShadow=!0,this.bodyGroup.add(z);const st=new H(.85,.22,.65),j=new M(st,I);j.position.set(0,.33,-1.05),j.castShadow=!0,this.bodyGroup.add(j);const X=new Mt,$=()=>{const Tt=[],dt=[],Et=[],kt=(Lt,Qt)=>{let zt=.635;const pe=-1.18+Qt*2.27;pe<-.88?zt=.635-(-.88-pe)/.3*.05:pe>.85&&(zt=.635-(pe-.85)/.24*.035);const fe=Lt*zt,Le=Math.max(0,1-Math.pow(Math.abs(Lt),2.2)),rn=Math.sin(Math.PI*(.12+.76*Qt)),bn=1.54-.012*Math.pow(Qt-.5,2)*4+.13*Le*rn;return new U(fe,bn,pe)};for(let Lt=0;Lt<=32;Lt++){const Qt=Lt/32;for(let zt=0;zt<=24;zt++){const pe=zt/24*2-1,fe=kt(pe,Qt);Tt.push(fe.x,fe.y,fe.z),dt.push(zt/24,Lt/32)}}const re=25;for(let Lt=0;Lt<32;Lt++)for(let Qt=0;Qt<24;Qt++){const zt=Lt*re+Qt,pe=(Lt+1)*re+Qt,fe=(Lt+1)*re+(Qt+1),Le=Lt*re+(Qt+1);Et.push(zt,pe,Le),Et.push(pe,fe,Le)}const ne=.065;let Ht=Tt.length/3;for(let Lt=0;Lt<=32;Lt++){const Qt=Lt/32,zt=kt(-1,Qt);Tt.push(zt.x,zt.y,zt.z),dt.push(0,Qt),Tt.push(zt.x,zt.y-ne,zt.z),dt.push(1,Qt)}for(let Lt=0;Lt<32;Lt++){const Qt=Ht+Lt*2,zt=Ht+(Lt+1)*2,pe=Ht+(Lt+1)*2+1,fe=Ht+Lt*2+1;Et.push(Qt,fe,zt),Et.push(zt,fe,pe)}Ht=Tt.length/3;for(let Lt=0;Lt<=32;Lt++){const Qt=Lt/32,zt=kt(1,Qt);Tt.push(zt.x,zt.y,zt.z),dt.push(0,Qt),Tt.push(zt.x,zt.y-ne,zt.z),dt.push(1,Qt)}for(let Lt=0;Lt<32;Lt++){const Qt=Ht+Lt*2,zt=Ht+(Lt+1)*2,pe=Ht+(Lt+1)*2+1,fe=Ht+Lt*2+1;Et.push(Qt,zt,fe),Et.push(zt,fe,pe)}Ht=Tt.length/3;for(let Lt=0;Lt<=24;Lt++){const Qt=Lt/24*2-1,zt=kt(Qt,0);Tt.push(zt.x,zt.y,zt.z),dt.push(Lt/24,0),Tt.push(zt.x,zt.y-ne,zt.z),dt.push(Lt/24,1)}for(let Lt=0;Lt<24;Lt++){const Qt=Ht+Lt*2,zt=Ht+(Lt+1)*2,pe=Ht+(Lt+1)*2+1,fe=Ht+Lt*2+1;Et.push(Qt,fe,zt),Et.push(zt,fe,pe)}Ht=Tt.length/3;for(let Lt=0;Lt<=24;Lt++){const Qt=Lt/24*2-1,zt=kt(Qt,1);Tt.push(zt.x,zt.y,zt.z),dt.push(Lt/24,0),Tt.push(zt.x,zt.y-ne,zt.z),dt.push(Lt/24,1)}for(let Lt=0;Lt<24;Lt++){const Qt=Ht+Lt*2,zt=Ht+(Lt+1)*2,pe=Ht+(Lt+1)*2+1,fe=Ht+Lt*2+1;Et.push(Qt,zt,fe),Et.push(zt,fe,pe)}const ue=new Fe;return ue.setAttribute("position",new de(Tt,3)),ue.setAttribute("uv",new de(dt,2)),ue.setIndex(Et),ue.computeVertexNormals(),ue},pt=new M($(),B);pt.castShadow=!0,pt.receiveShadow=!0,X.add(pt);const q=[-.68,-.18,.32,.76],et=new G({color:2565930,roughness:.65});q.forEach(Gt=>{const bt=(Gt- -1.18)/2.27,xt=[];for(let Tt=0;Tt<=16;Tt++){const dt=Tt/16*2-1,Et=Math.max(0,1-Math.pow(Math.abs(dt),2.2)),kt=Math.sin(Math.PI*(.12+.76*bt)),re=1.54+.13*Et*kt+.005;xt.push(new U(dt*.63,re,Gt))}const b=new Cn(xt),k=new wn(b,16,.012,6,!1),Q=new M(k,et);X.add(Q)}),[-.635,.635].forEach(Gt=>{const bt=new ct(.012,.012,2.22,8);bt.rotateX(Math.PI/2);const xt=new M(bt,et);xt.position.set(Gt,1.53,-.04),X.add(xt)});const ut=new H(1.22,.035,.08),ft=new M(ut,et);ft.position.set(0,1.54,-1.17),X.add(ft);const at=new H(1.24,.035,.07),yt=new M(at,et);yt.position.set(0,1.54,1.08),X.add(yt);const Rt=new Kt(1.24,2.22);Rt.rotateX(Math.PI/2);const Z=new G({color:1579035,roughness:.95}),lt=new M(Rt,Z);lt.position.set(0,1.48,-.04),X.add(lt),this.bodyGroup.add(X),[-.635,.635].forEach((Gt,bt)=>{const xt=new M(new Kt(2.2,1.16),W);xt.position.set(Gt,.95,-.04),xt.rotation.y=bt===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(xt);const b=new H(.04,.32,1.15),k=new M(b,I);k.position.set(Gt*.98,.58,-.05),this.bodyGroup.add(k);const Q=new M(new ct(.022,.022,1.02,8),new G({color:1579035,roughness:.5}));Q.position.set(Gt*.96,1.16,-1),Q.rotation.x=.2,this.bodyGroup.add(Q);const Tt=new M(new ct(.022,.022,1.08,8),new G({color:1579035,roughness:.5}));Tt.position.set(Gt*.96,1.1,-.15),this.bodyGroup.add(Tt);const dt=new M(new ct(.022,.022,1.08,8),new G({color:1579035,roughness:.5}));dt.position.set(Gt*.96,1.1,1.02),this.bodyGroup.add(dt)});const D=new Mt;D.position.set(0,0,1.075);const ht=new M(new Kt(1.26,1.18),nt);ht.position.set(0,.95,.01),ht.rotation.y=0,D.add(ht),[-.54,.54].forEach(Gt=>{const bt=new Mt;bt.position.set(Gt,.74,.035);const xt=new M(new H(.12,.24,.04),new G({color:1579035,roughness:.6}));bt.add(xt);const b=new M(new H(.1,.1,.025),new he({color:16096779}));b.position.set(0,.055,.018),bt.add(b);const k=new M(new H(.1,.1,.025),new he({color:14427686}));k.position.set(0,-.055,.018),bt.add(k),this.brakeLights.push(k),D.add(bt)});const rt=new H(1.32,.12,.08),V=new M(rt,new G({color:1579035,roughness:.85}));V.position.set(0,.32,.06),D.add(V),[-.52,.52].forEach(Gt=>{const bt=new M(new H(.18,.22,.02),x);bt.position.set(Gt,.18,.04),bt.rotation.x=.08,D.add(bt)});const ot=new ct(.032,.032,.55,10);ot.rotateZ(Math.PI/2);const Pt=new M(ot,F);Pt.position.set(.22,.18,.02),D.add(Pt);const _t=new me(.075,.45,10);_t.rotateX(-Math.PI/2);const A=new he({color:440020,transparent:!0,opacity:0}),E=new M(_t,A);E.position.set(.48,.18,.28),D.add(E),this.exhaustFires.push(E),this.bodyGroup.add(D);const K=new Mt;K.position.set(0,0,-1.15);const vt=new M(new Kt(1.22,1.18),N);vt.position.set(0,.95,0),vt.rotation.y=Math.PI,K.add(vt),[-.32,.32].forEach(Gt=>{const bt=new Mt;bt.position.set(Gt,.68,-.04);const xt=new M(new ct(.085,.085,.04,16),F);xt.rotateX(Math.PI/2),bt.add(xt);const b=new M(new Wt(.075,12,12,0,Math.PI*2,0,Math.PI*.5),new he({color:16777215}));b.rotateX(Math.PI),b.position.z=-.015,bt.add(b),this.headlights.push(b),K.add(bt)}),this.bodyGroup.add(K),[-1,1].forEach(Gt=>{const bt=new Mt,xt=(.64+.14)*Gt;bt.position.set(xt,1.15,-.72);const b=new ct(.012,.012,.28,8);b.rotateZ(Gt>0?-Math.PI*.35:Math.PI*.35);const k=new M(b,new G({color:1579035}));bt.add(k);const Q=new ct(.075,.075,.03,16);Q.rotateX(Math.PI/2);const Tt=new M(Q,new G({color:1579035,roughness:.5}));Tt.position.set(Gt*.12,.08,0),bt.add(Tt);const dt=new M(new ji(.068,16),F);dt.position.set(Gt*.12,.08,.018),bt.add(dt),this.bodyGroup.add(bt)});const mt=new Mt,gt=new M(new H(.48,.12,.44),new G({color:1981066,roughness:.7}));gt.position.set(0,.52,-.32),mt.add(gt);const Ot=new M(new H(.48,.42,.1),new G({color:1981066,roughness:.7}));Ot.position.set(0,.76,-.12),mt.add(Ot);const At=new M(new H(1.16,.16,.48),y);At.position.set(0,.54,.55),mt.add(At);const Nt=new M(new H(1.16,.48,.12),y);Nt.position.set(0,.84,.82),mt.add(Nt);const Vt=new Mt;Vt.position.set(0,.78,-.85);const It=new ct(.016,.016,.62,10);It.rotateZ(Math.PI/2);const wt=new M(It,F);Vt.add(wt),[-.28,.28].forEach(Gt=>{const bt=new M(new ct(.024,.024,.12,8),x);bt.rotateZ(Math.PI/2),bt.position.x=Gt,Vt.add(bt)});const $t=new M(new ct(.045,.045,.04,12),new G({color:1579035}));$t.position.set(0,.04,-.04),Vt.add($t),mt.add(Vt),this.bodyGroup.add(mt);const Jt=(Gt=!1)=>{const bt=new Mt,xt=new ct(.24,.24,.14,20);xt.rotateZ(Math.PI/2);const b=new M(xt,x);b.castShadow=!0,bt.add(b);const k=new ct(.14,.14,.145,16);k.rotateZ(Math.PI/2);const Q=new M(k,T);bt.add(Q);const Tt=new M(new ct(.05,.05,.155,12),F);Tt.rotateZ(Math.PI/2),bt.add(Tt);for(let dt=0;dt<4;dt++){const Et=dt/4*Math.PI*2,kt=new M(new ct(.012,.012,.16,6),F);kt.rotateZ(Math.PI/2),kt.position.set(0,Math.sin(Et)*.08,Math.cos(Et)*.08),bt.add(kt)}return bt},Xt=new Mt;Xt.position.set(0,.24,-1.18);const Bt=Jt(!0);Xt.add(Bt),this.wheels.push(Bt),this.frontWheel=Xt;const Ct=new M(new ct(.024,.028,.52,8),F);Ct.position.set(-.1,.22,0),Ct.rotation.x=-.18,Xt.add(Ct);const Zt=new ct(.28,.28,.18,16,1,!0,Math.PI*.2,Math.PI*.65);Zt.rotateZ(Math.PI/2);const te=new M(Zt,I);te.position.set(0,.05,0),Xt.add(te),this.bodyGroup.add(Xt),[-.56,.56].forEach(Gt=>{const bt=Jt(!1);bt.position.set(Gt,.24,.64),this.wheels.push(bt),this.bodyGroup.add(bt)})}update(t,e,n,i,o,a){const r=t*1e3/3600,c=2*Math.PI*.24,h=r/c*a*Math.PI*2;this.wheelRotation+=h,this.wheels.forEach(g=>{g.rotation.x=this.wheelRotation});const d=n-e,f=d*.045;this.currentRoll+=(f-this.currentRoll)*Math.min(1,a*9),this.bodyGroup.rotation.z=this.currentRoll,this.frontWheel&&(this.frontWheel.rotation.y=-d*.18);const l=-d*.08;this.currentYaw+=(l-this.currentYaw)*Math.min(1,a*8),this.bodyGroup.rotation.y=this.currentYaw;let u=0;i?u=.04:o&&(u=-.035),this.currentPitch+=(u-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch,this.brakeLights.forEach(g=>{g.material.color.setHex(i?16711680:14427686)}),this.exhaustFires.forEach(g=>{o?(g.material.opacity=.95,g.scale.set(1.2+Math.random()*.4,1.2+Math.random()*.5,1.2+Math.random()*.4),g.material.color.setHex(Math.random()>.4?440020:3718648)):g.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(g=>g.scale.set(1.4,1.4,1.4))):this.headlights.forEach(g=>g.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=.88,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.45,this.bodyGroup.rotation.y=.5,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Np{constructor(){this.isMobile=ti(),this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[]}applyShadow(t){this.isMobile||(t.castShadow=!0)}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let V=0;V<128;V+=8)e.fillStyle="#6b7280",e.fillRect(V,0,4,128),e.fillStyle="#d1d5db",e.fillRect(V+4,0,4,128);const n=new oe(t);n.wrapS=ve,n.wrapT=ve,n.repeat.set(4,4),this.tinRoofMat=new G({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new G({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const o=i.getContext("2d");o.fillStyle="#c8a165",o.fillRect(0,0,128,128),o.strokeStyle="#8c6239",o.lineWidth=3;for(let V=0;V<=128;V+=16)o.beginPath(),o.moveTo(0,V),o.lineTo(128,V),o.stroke(),o.beginPath(),o.moveTo(V,0),o.lineTo(V,128),o.stroke();const a=new oe(i);a.wrapS=ve,a.wrapT=ve,a.repeat.set(2,2),this.bambooWallMat=new G({map:a,roughness:.85,color:13935475}),this.woodMat=new G({color:6045747,roughness:.85}),this.mudPlinthMat=new G({color:8150594,roughness:.95}),this.brickMat=new G({color:10239278,roughness:.9}),this.palmLeafMat=new G({color:3046706,roughness:.6,side:Te}),this.bananaLeafMat=new G({color:4431943,roughness:.5,side:Te}),this.treeCrownMat=new G({color:1793568,roughness:.85}),this.bambooTrunkMat=new G({color:6732650,roughness:.4}),this.palmTrunkMat=new G({color:7162945,roughness:.9}),this.hayMat=new G({color:13934615,roughness:.95}),this.paddyFieldMat=new G({color:3706428,roughness:.8}),this.waterMat=new G({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new G({color:10395294,roughness:.7}),this.cowWhiteMat=new G({color:16119280,roughness:.6}),this.cowBrownMat=new G({color:9262372,roughness:.65}),this.cowBlackPatchMat=new G({color:2171169,roughness:.7}),this.hornMat=new G({color:3621201,roughness:.4}),this.ropeMat=new he({color:12756553}),this.duckMat=new G({color:16777215,roughness:.5}),this.beakMat=new G({color:16750592,roughness:.4}),this.smokeMat=new he({color:16777215,transparent:!0,opacity:.35}),this.bridgeRedMat=new G({color:14427686,roughness:.55}),this.bridgeWhiteMat=new G({color:16317180,roughness:.5});const r=document.createElement("canvas");r.width=256,r.height=128;const c=r.getContext("2d");c.fillStyle="#ffffff",c.fillRect(0,0,256,128),c.fillStyle="#dc2626";const h=32;for(let V=-128;V<384;V+=h*2)c.beginPath(),c.moveTo(V,0),c.lineTo(V+h,0),c.lineTo(V+h-128,128),c.lineTo(V-128,128),c.closePath(),c.fill();const d=new oe(r);d.wrapS=ve,d.wrapT=ve,d.repeat.set(24,1),this.bridgeCurbMat=new G({map:d,roughness:.6}),this.pipelineMat=new G({color:9741240,metalness:.8,roughness:.25}),this.riverWaterMat=new G({color:1400437,roughness:.12,metalness:.35,transparent:!0,opacity:.92});const f=document.createElement("canvas");f.width=64,f.height=128;const l=f.getContext("2d");l.fillStyle="#dc2626",l.fillRect(0,0,64,128),l.fillStyle="#ffffff",l.fillRect(0,24,64,30),l.fillRect(0,78,64,30);const u=new oe(f);this.bollardMat=new G({map:u,roughness:.5});const g=document.createElement("canvas");g.width=128,g.height=128;const w=g.getContext("2d");w.fillStyle="#1e40af",w.fillRect(0,0,128,128);for(let V=0;V<128;V+=8)w.fillStyle="#1d4ed8",w.fillRect(V,0,4,128),w.fillStyle="#3b82f6",w.fillRect(V+4,0,4,128);const m=new oe(g);m.wrapS=ve,m.wrapT=ve,m.repeat.set(6,2),this.stageBlueRoofMat=new G({map:m,metalness:.4,roughness:.45,color:1920728,side:Te}),this.stageTrussMat=new G({color:3359061,metalness:.75,roughness:.35}),this.stageBaseYellowMat=new G({color:16436245,roughness:.65}),this.stageBorderBlueMat=new G({color:165063,roughness:.45}),this.stageFloorMat=new G({color:10265519,roughness:.7}),this.stageTerracottaMat=new G({color:12730636,roughness:.85}),this.stageGoldEmblemMat=new G({color:16498468,metalness:.65,roughness:.25}),this.hillGreenMat=new G({color:3046706,roughness:.92,flatShading:!0}),this.hillDarkGreenMat=new G({color:1332013,roughness:.95,flatShading:!0}),this.pavingPlazaMat=new G({color:14078929,roughness:.9});const p=document.createElement("canvas");p.width=512,p.height=512;const v=p.getContext("2d");v.fillStyle="#8c867e",v.fillRect(0,0,512,512);const _=8,S=6,P=512/_,L=512/S;for(let V=0;V<_;V++)for(let ot=0;ot<S;ot++){const Pt=ot*L+8,_t=V*P+12,A=L-16,E=P-18;v.fillStyle="#1e293b",v.fillRect(Pt,_t,A,E);const K=v.createLinearGradient(Pt,_t,Pt,_t+E);K.addColorStop(0,"#38bdf8"),K.addColorStop(.35,"#1e293b"),K.addColorStop(1,"#090d16"),v.fillStyle=K,v.fillRect(Pt+2,_t+4,A-4,E-6),v.strokeStyle="rgba(255, 255, 255, 0.2)",v.lineWidth=1.2,v.beginPath(),v.moveTo(Pt+A*.5,_t+4),v.lineTo(Pt+A*.5,_t+E-2),v.stroke(),v.fillStyle="#f8fafc",v.fillRect(Pt-2,_t-3,A+4,5),v.fillStyle="rgba(0, 0, 0, 0.25)",v.fillRect(Pt-2,_t+2,A+4,2)}const I=new oe(p);I.wrapS=ve,I.wrapT=ve,I.repeat.set(2,4),this.uiuFacadeMat=new G({map:I,metalness:.25,roughness:.55});const B=document.createElement("canvas");B.width=512,B.height=512;const y=B.getContext("2d");y.drawImage(p,0,0),y.fillStyle="#1c1917",y.fillRect(24,16,464,160),y.strokeStyle="#8c867e",y.lineWidth=6,y.strokeRect(20,12,472,168),y.strokeStyle="rgba(239, 68, 68, 0.9)",y.lineWidth=26,y.lineCap="round",y.lineJoin="round",y.font="900 125px Arial, sans-serif",y.textAlign="center",y.textBaseline="middle",y.shadowColor="#ef4444",y.shadowBlur=28,y.strokeText("UIU",256,96),y.strokeStyle="#f97316",y.lineWidth=14,y.strokeText("UIU",256,96),y.fillStyle="#fee2e2",y.shadowBlur=0,y.fillText("UIU",256,96);const x=new oe(B);this.uiuLogoMat=new G({map:x,metalness:.25,roughness:.45,emissive:4460808});const T=document.createElement("canvas");T.width=512,T.height=512;const F=T.getContext("2d");F.fillStyle="#0f172a",F.fillRect(0,0,512,512);for(let V=0;V<512;V+=64)F.strokeStyle="rgba(255, 255, 255, 0.12)",F.lineWidth=1.5,F.beginPath(),F.moveTo(0,V),F.lineTo(512,V),F.stroke();for(let V=0;V<512;V+=64)F.strokeStyle="rgba(255, 255, 255, 0.12)",F.lineWidth=1.5,F.beginPath(),F.moveTo(V,0),F.lineTo(V,512),F.stroke();F.strokeStyle="#cbd5e1",F.lineWidth=10,F.lineCap="square";const nt=4,N=512/nt;for(let V=0;V<nt;V++){const ot=V*N,Pt=(V+1)*N;F.beginPath(),F.moveTo(16,ot),F.lineTo(496,Pt),F.stroke(),F.beginPath(),F.moveTo(496,ot),F.lineTo(16,Pt),F.stroke(),F.lineWidth=14,F.strokeStyle="#8c867e",F.beginPath(),F.moveTo(0,Pt),F.lineTo(512,Pt),F.stroke(),F.lineWidth=10,F.strokeStyle="#cbd5e1"}const W=new oe(T);this.uiuAtriumMat=new G({map:W,metalness:.6,roughness:.25}),this.uiuBrickFlankMat=new G({color:11817737,roughness:.8}),this.uiuRoofGardenMat=new G({color:1409085,roughness:.9}),this.uiuTentMat=new G({color:16317180,roughness:.45});const Y=document.createElement("canvas");Y.width=512,Y.height=128;const z=Y.getContext("2d");z.fillStyle="#0f172a",z.fillRect(0,0,512,128),z.strokeStyle="#f59e0b",z.lineWidth=6,z.strokeRect(8,8,496,112),z.fillStyle="#ef4444",z.font="900 48px sans-serif",z.textAlign="center",z.textBaseline="middle",z.fillText("UIU",256,42),z.fillStyle="#ffffff",z.font="bold 18px sans-serif",z.fillText("UNITED INTERNATIONAL UNIVERSITY",256,90);const st=new oe(Y);this.uiuGateSignMat=new G({map:st,roughness:.4});const j=document.createElement("canvas");j.width=512,j.height=512;const X=j.getContext("2d");X.fillStyle="#15803d",X.fillRect(0,0,512,512),X.fillStyle="#65a30d";for(let V=0;V<512;V+=40)X.fillRect(0,V,512,20);X.strokeStyle="#ffffff",X.lineWidth=7,X.strokeRect(24,20,464,472),X.beginPath(),X.moveTo(24,256),X.lineTo(488,256),X.stroke(),X.beginPath(),X.arc(256,256,68,0,Math.PI*2),X.stroke(),X.fillStyle="#ffffff",X.beginPath(),X.arc(256,256,8,0,Math.PI*2),X.fill(),X.strokeRect(146,20,220,92),X.strokeRect(146,400,220,92),X.beginPath(),X.arc(256,85,36,0,Math.PI),X.stroke(),X.beginPath(),X.arc(256,427,36,Math.PI,0),X.stroke(),X.strokeRect(196,20,120,38),X.strokeRect(196,454,120,38);const $=new oe(j);this.uiuLawnMat=new G({map:$,roughness:.85}),this.uiuConcreteMat=new G({color:9209470,roughness:.7}),this.uiuGlassMat=new G({color:988970,metalness:.8,roughness:.15}),this.goalPostMat=new G({color:16317180,roughness:.4});const pt=document.createElement("canvas");pt.width=2048,pt.height=512;const q=pt.getContext("2d");q.fillStyle="#023c27",q.fillRect(0,0,2048,512),[{exit:"প্রস্থান ০১",bng:"টাঙ্গাইল",dist:"৯৮ কিমি",x:36,w:620},{exit:"প্রস্থান ০২",bng:"ইউআইইউ",dist:"১ কিমি",x:714,w:620},{exit:"প্রস্থান ∞",bng:"বিয়ে",dist:"∞ কিমি",x:1392,w:620}].forEach(V=>{q.strokeStyle="#ffffff",q.lineWidth=8,q.strokeRect(V.x,24,V.w,464),q.fillStyle="#045438",q.fillRect(V.x+8,32,V.w-16,84),q.strokeStyle="#ffffff",q.lineWidth=4,q.strokeRect(V.x+8,32,V.w-16,84),q.fillStyle="#ffffff",q.font='bold 36px "Montserrat", sans-serif',q.textAlign="center",q.textBaseline="middle",q.fillText(V.exit,V.x+V.w*.5,74),q.strokeStyle="rgba(255, 255, 255, 0.35)",q.lineWidth=3,q.strokeRect(V.x+16,128,V.w-32,350);const ot=V.x+80;q.fillStyle="#ffffff",q.beginPath(),q.moveTo(ot,200),q.lineTo(ot-36,255),q.lineTo(ot-16,255),q.lineTo(ot-16,400),q.lineTo(ot+16,400),q.lineTo(ot+16,255),q.lineTo(ot+36,255),q.closePath(),q.fill(),q.textAlign="left",q.fillStyle="#ffffff",q.font='900 76px "Montserrat", sans-serif',q.shadowColor="rgba(255, 255, 255, 0.4)",q.shadowBlur=8,q.fillText(V.bng,V.x+150,248),q.shadowBlur=0,q.fillStyle="#fde047",q.font='bold 58px "Montserrat", sans-serif',q.shadowColor="rgba(253, 224, 71, 0.35)",q.shadowBlur=6,q.fillText(V.dist,V.x+150,360),q.shadowBlur=0});const ut=new oe(pt);this.highwayGantrySignMat=new G({map:ut,roughness:.25,emissive:206872,emissiveIntensity:.4});const ft=document.createElement("canvas");ft.width=128,ft.height=128;const at=ft.getContext("2d");at.fillStyle="#dc2626",at.fillRect(0,0,128,128),at.fillStyle="#ffffff";for(let V=-128;V<256;V+=32)at.beginPath(),at.moveTo(V,0),at.lineTo(V+16,0),at.lineTo(V+16-128,128),at.lineTo(V-128,128),at.closePath(),at.fill();const yt=new oe(ft);yt.wrapS=ve,yt.wrapT=ve,yt.repeat.set(2,3),this.gantryHazardMat=new G({map:yt,roughness:.5});const Rt=document.createElement("canvas");Rt.width=512,Rt.height=512;const Z=Rt.getContext("2d");Z.fillStyle="#f1f5f9",Z.fillRect(0,0,512,512),Z.fillStyle="rgba(180, 83, 9, 0.15)";for(let V=0;V<512;V+=16)Z.fillRect(0,V,512,4);Z.strokeStyle="#64748b",Z.lineWidth=4;for(let V=64;V<512;V+=128)Z.beginPath(),Z.moveTo(V-44,460),Z.lineTo(V-44,280),Z.arc(V,280,44,Math.PI,0,!1),Z.lineTo(V+44,460),Z.stroke(),Z.fillStyle="#1e293b",Z.beginPath(),Z.moveTo(V-36,460),Z.lineTo(V-36,290),Z.arc(V,290,36,Math.PI,0,!1),Z.lineTo(V+36,460),Z.fill(),Z.fillStyle="#b45309",Z.beginPath(),Z.arc(V,235,14,0,Math.PI*2),Z.fill();Z.fillStyle="#cbd5e1",Z.fillRect(0,60,512,28),Z.fillStyle="#94a3b8";for(let V=0;V<512;V+=24)Z.fillRect(V,64,12,20);const lt=new oe(Rt);lt.wrapS=ve,lt.wrapT=ve,this.templeWallMat=new G({map:lt,roughness:.82});const D=document.createElement("canvas");D.width=256,D.height=512;const ht=D.getContext("2d");ht.fillStyle="#e2e8f0",ht.fillRect(0,0,256,512);for(let V=0;V<512;V+=14)ht.fillStyle=V%28===0?"#475569":"#94a3b8",ht.fillRect(0,V,256,4),ht.fillStyle="rgba(180, 83, 9, 0.2)",ht.fillRect(0,V+4,256,4);const rt=new oe(D);rt.wrapT=ve,rt.repeat.set(1,4),this.templeShikharaMat=new G({map:rt,roughness:.88}),this.marigoldOrangeMat=new G({color:15357964,roughness:.65}),this.marigoldYellowMat=new G({color:16436245,roughness:.65}),this.templeBrassMat=new G({color:14251782,metalness:.85,roughness:.25}),this.templePlinthMat=new G({color:14078929,roughness:.9}),this.skinMat=new G({color:16106390,roughness:.65}),this.hairMat=new G({color:1579035,roughness:.45}),this.panjabiMat=new G({color:16317180,roughness:.7}),this.lungiPlaidMat=new G({color:165063,roughness:.8}),this.shirtTealMat=new G({color:889992,roughness:.7}),this.shirtRedMat=new G({color:14427686,roughness:.7})}createCow(t="brown"){const e=new Mt;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new H(.9,.95,1.7),o=new M(i,n);o.position.set(0,1.05,0),this.applyShadow(o),e.add(o);const a=new me(.3,.45,8),r=new M(a,n);r.position.set(0,1.62,-.45),r.rotation.x=-.2,this.applyShadow(r),e.add(r);const c=new H(.12,.45,.5),h=new M(c,n);h.position.set(0,.85,-.85),e.add(h);const d=new Mt;d.position.set(0,1.25,-.85);const f=new H(.45,.55,.6),l=new M(f,n);l.position.set(0,.15,-.2),l.rotation.x=.35,d.add(l);const u=new H(.48,.52,.7),g=new M(u,n);g.position.set(0,.28,-.55),d.add(g);const w=new G({color:2236962,roughness:.8}),m=new H(.36,.3,.3),p=new M(m,w);p.position.set(0,.18,-.92),d.add(p),[-.22,.22].forEach(W=>{const Y=new me(.06,.35,6),z=new M(Y,this.hornMat);z.position.set(W,.56,-.48),z.rotation.z=W>0?-.4:.4,z.rotation.x=.3,d.add(z);const st=new H(.22,.08,.1),j=new M(st,n);j.position.set(W>0?.32:-.32,.38,-.45),j.rotation.z=W>0?-.35:.35,d.add(j)}),e.add(d),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(W=>{const Y=new H(.2,.75,.2),z=new M(Y,n);z.position.set(W.x,.38,W.z),this.applyShadow(z),e.add(z);const st=new H(.22,.1,.22),j=new M(st,this.hornMat);j.position.set(W.x,.05,W.z),e.add(j)});const _=new Mt;_.position.set(0,1.35,.85);const S=new ct(.03,.03,.85,6);S.translate(0,-.42,0);const P=new M(S,n);_.add(P);const L=new me(.08,.25,6);L.translate(0,-.9,0);const I=new M(L,this.hornMat);_.add(I),e.add(_);const B=new ct(.08,.1,1.2,8),y=new M(B,this.woodMat);y.position.set(.9,.6,-1.2),e.add(y);const x=[new U(0,1.2,-.8),new U(.45,.75,-1),new U(.9,.85,-1.2)],T=new Cn(x),F=new wn(T,8,.02,4,!1),nt=new M(F,this.ropeMat);e.add(nt);const N={type:"cow",head:d,tail:_,seed:Math.random()*10};return this.animatedAnimals.push(N),e}createVillageHouse(t=!1){const e=new Mt;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new H(6.6,.45,5.2),o=new M(i,this.mudPlinthMat);o.position.set(0,.22,0),o.receiveShadow=!0,e.add(o);const a=new H(5.8,2.6,3.8),r=new M(a,this.bambooWallMat);r.position.set(0,1.75,-.4),this.applyShadow(r),r.receiveShadow=!0,e.add(r);const c=new H(.85,1.8,.08),h=new M(c,this.woodMat);h.position.set(.6,1.35,1.52),e.add(h),[-1.6,-.6].forEach(g=>{const w=new H(.7,.8,.08),m=new M(w,this.woodMat);m.position.set(g,1.8,1.52),e.add(m)});const d=new H(6.6,.1,2.8),f=new M(d,n);f.position.set(0,3.65,-.9),f.rotation.x=-.52,this.applyShadow(f),e.add(f);const l=new H(6.6,.1,3.4),u=new M(l,n);return u.position.set(0,3.5,.8),u.rotation.x=.46,this.applyShadow(u),e.add(u),[-2.5,-.8,.8,2.5].forEach(g=>{const w=new ct(.08,.08,2.3,8),m=new M(w,this.woodMat);m.position.set(g,1.6,2.1),this.applyShadow(m),e.add(m)}),e}createTeaStall(){const t=new Mt;t.name="cha_er_tong";const e=new H(3.2,1,1.8),n=new M(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new H(3.8,.08,2.8),o=new M(i,this.tinRoofMat);o.position.set(0,2.3,.2),o.rotation.x=.2,this.applyShadow(o),t.add(o),[-1.6,1.6].forEach(w=>{const m=new ct(.07,.07,2.2,6),p=new M(m,this.woodMat);p.position.set(w,1.1,1.2),t.add(p)});const a=new H(3,.08,.45),r=new M(a,this.woodMat);r.position.set(0,.45,1.8),t.add(r),[-1.2,1.2].forEach(w=>{const m=new H(.08,.45,.4),p=new M(m,this.woodMat);p.position.set(w,.22,1.8),t.add(p)});const c=new G({color:13421772,metalness:.9,roughness:.2}),h=new ct(.18,.22,.35,10),d=new M(h,c);d.position.set(-.6,1.18,.2),t.add(d);const f=new Jo({color:16777215,transmission:.7,roughness:.1}),l=new ct(.12,.12,.28,8),u=new M(l,f);u.position.set(.6,1.15,.1),t.add(u);const g=new Mt;g.position.set(-.6,1.45,.2),t.add(g);for(let w=0;w<4;w++){const m=new Wt(.08,6,6),p=new M(m,this.smokeMat);p.position.y=w*.25,g.add(p)}return this.smokeEmitters.push(g),t}createHaystack(){const t=new Mt;t.name="khorer_gada";const e=new ct(1.6,1.9,1.4,12),n=new M(e,this.hayMat);n.position.y=.7,this.applyShadow(n),t.add(n);const i=new ct(1,1.6,1.2,12),o=new M(i,this.hayMat);o.position.y=2,this.applyShadow(o),t.add(o);const a=new me(1,1.5,12),r=new M(a,this.hayMat);r.position.y=3.35,this.applyShadow(r),t.add(r);const c=new ct(.04,.05,4.8,6),h=new M(c,this.bambooTrunkMat);return h.position.y=2.4,t.add(h),t}createJatriChawni(t=1){const e=new Mt;e.name="jatri_chawni";const n=new H(5,.35,2.3),i=new M(n,this.concreteMat);i.position.set(0,.175,0),i.receiveShadow=!0,e.add(i);const o=new H(5.2,.14,.22),a=new M(o,this.brickMat);a.position.set(0,.07,-1.1),e.add(a);const r=new H(4.8,2.5,.18),c=new M(r,this.brickMat);c.position.set(0,1.45,1.02),this.applyShadow(c),e.add(c);const h=new Kt(4.6,2.3),d=new M(h,this.culvertRailingMaterial);d.position.set(0,1.45,.92),e.add(d),[[-2.1,-.92],[2.1,-.92],[-2.1,.92],[2.1,.92]].forEach(([R,J])=>{const it=new ct(.08,.09,2.6,12),C=new M(it,this.culvertRailingMaterial);C.position.set(R,1.45,J),this.applyShadow(C),e.add(C);const O=new ct(.12,.12,.35,12),tt=new M(O,new G({color:1409085}));tt.position.set(R,.45,J),e.add(tt)});const l=new ct(2.4,2.4,5.2,24,1,!0,Math.PI*.2,Math.PI*.6);l.rotateZ(Math.PI/2);const u=new M(l,this.tinRoofMat);if(u.position.set(0,2.75,.05),this.applyShadow(u),e.add(u),[-1.8,0,1.8].forEach(R=>{const J=new H(.06,.06,2.1),it=new M(J,new G({color:3359061}));it.position.set(R,2.55,0),e.add(it)}),!this.isMobile){const R=new bs(16772565,3,14);R.position.set(0,2.45,.25),e.add(R)}const g=new ct(.14,.18,.28,8,1,!0),w=new M(g,new G({color:1976635,wireframe:!0}));w.position.set(0,2.48,.25),e.add(w);const m=new M(new Wt(.1,12,12),new he({color:16772565}));m.position.set(0,2.48,.25),e.add(m);const p=document.createElement("canvas");p.width=1024,p.height=256;const v=p.getContext("2d");v.fillStyle="#15803d",v.fillRect(0,0,1024,256),v.strokeStyle="#f59e0b",v.lineWidth=14,v.strokeRect(10,10,1004,236),v.strokeStyle="#fde047",v.lineWidth=4,v.strokeRect(24,24,976,208);const _=(R,J)=>{v.fillStyle="#fde047",v.beginPath(),v.roundRect(R,J,76,44,8),v.fill(),v.fillStyle="#0284c7",v.fillRect(R+8,J+6,20,18),v.fillRect(R+34,J+6,20,18),v.fillRect(R+58,J+6,12,18),v.fillStyle="#18181b",v.beginPath(),v.arc(R+20,J+44,9,0,Math.PI*2),v.arc(R+56,J+44,9,0,Math.PI*2),v.fill()};_(42,105),_(906,105),v.fillStyle="#ffffff",v.font="900 86px sans-serif",v.textAlign="center",v.textBaseline="middle",v.shadowColor="rgba(0,0,0,0.9)",v.shadowBlur=12,v.fillText("BUS STOP",512,85),v.fillStyle="#fde047",v.font="bold 54px sans-serif",v.shadowColor="rgba(0,0,0,0.8)",v.shadowBlur=8,v.fillText("বাস স্টপ  |  যাত্রী ছাউনি",512,185),v.shadowBlur=0;const S=new oe(p),P=new Mt;P.position.set(0,2.65,-1.02);const L=new H(4.24,.84,.07),I=new G({color:1332013,roughness:.5}),B=new M(L,I);P.add(B);const y=new G({map:S,roughness:.35,emissive:1409085,emissiveIntensity:.15}),x=new Kt(4.18,.78);x.rotateY(Math.PI);const T=new M(x,y);T.position.set(0,0,-.038),P.add(T);const F=new Kt(4.18,.78),nt=new M(F,y);nt.position.set(0,0,.038),P.add(nt),e.add(P);const N=new Mt,W=t>0?-2.25:2.25;N.position.set(W,0,-1.15);const Y=new M(new ct(.18,.22,.3,12),this.concreteMat);Y.position.set(0,.15,0),N.add(Y);const z=new G({color:3359061,metalness:.8,roughness:.2}),st=new M(new ct(.045,.045,3.1,12),z);st.position.set(0,1.55,0),N.add(st);const j=document.createElement("canvas");j.width=512,j.height=512;const X=j.getContext("2d");X.fillStyle="#0284c7",X.beginPath(),X.roundRect(16,16,480,480,48),X.fill(),X.strokeStyle="#facc15",X.lineWidth=20,X.stroke(),X.strokeStyle="#ffffff",X.lineWidth=4,X.beginPath(),X.roundRect(36,36,440,440,36),X.stroke(),X.fillStyle="#ffffff",X.beginPath(),X.roundRect(135,75,242,130,24),X.fill(),X.fillStyle="#0284c7",X.fillRect(155,95,60,50),X.fillRect(230,95,60,50),X.fillRect(305,95,52,50),X.fillStyle="#18181b",X.beginPath(),X.arc(190,205,22,0,Math.PI*2),X.arc(320,205,22,0,Math.PI*2),X.fill(),X.fillStyle="#ffffff",X.font="900 72px sans-serif",X.textAlign="center",X.textBaseline="middle",X.shadowColor="rgba(0,0,0,0.85)",X.shadowBlur=8,X.fillText("BUS STOP",256,310),X.fillStyle="#fde047",X.font="bold 56px sans-serif",X.fillText("বাস স্টপ",256,405),X.shadowBlur=0;const $=new oe(j),pt=new G({map:$,roughness:.35,emissive:165063,emissiveIntensity:.12}),q=new Mt;q.position.set(0,2.7,0);const et=new M(new H(.96,.96,.06),new G({color:223649,roughness:.4}));q.add(et);const ut=new Kt(.92,.92);ut.rotateY(Math.PI);const ft=new M(ut,pt);ft.position.set(0,0,-.032),q.add(ft);const at=new Kt(.92,.92),yt=new M(at,pt);yt.position.set(0,0,.032),q.add(yt),q.rotation.y=t>0?.35:-.35,N.add(q),e.add(N);const Rt=document.createElement("canvas");Rt.width=512,Rt.height=320;const Z=Rt.getContext("2d");Z.fillStyle="#f8fafc",Z.fillRect(0,0,512,320),Z.strokeStyle="#15803d",Z.lineWidth=14,Z.strokeRect(8,8,496,304),Z.strokeStyle="#dc2626",Z.lineWidth=4,Z.strokeRect(22,22,468,276),Z.fillStyle="#15803d",Z.font="bold 30px sans-serif",Z.textAlign="center",Z.textBaseline="middle",Z.fillText("বাংলাদেশ সড়ক পরিবহন (BRTC)",256,55),Z.fillStyle="#dc2626",Z.font="900 68px sans-serif",Z.shadowColor="rgba(0,0,0,0.3)",Z.shadowBlur=4,Z.fillText("BUS STOP",256,140),Z.fillStyle="#1e293b",Z.font="bold 50px sans-serif",Z.shadowBlur=0,Z.fillText("বাস স্টপ",256,220),Z.fillStyle="#64748b",Z.font="bold 24px sans-serif",Z.fillText("HIGHWAY PASSENGER SHELTER",256,275);const lt=new oe(Rt),D=new G({map:lt,roughness:.35,emissive:16777215,emissiveIntensity:.08}),ht=new M(new Kt(1.2,.75),D),rt=t>0?-2.12:2.12;ht.position.set(rt,1.85,0),ht.rotation.y=t>0?-Math.PI/2:Math.PI/2,e.add(ht);const V=new Mt;V.position.set(0,0,0);const ot=new H(4.4,.12,.7),Pt=new M(ot,this.woodMat);Pt.position.set(0,.65,.5),this.applyShadow(Pt),V.add(Pt);const _t=new H(4.4,.42,.1),A=new M(_t,this.woodMat);A.position.set(0,1.12,.82),this.applyShadow(A),V.add(A),[-1.9,0,1.9].forEach(R=>{const J=new H(.12,.35,.58),it=new M(J,this.concreteMat);it.position.set(R,.45,.5),V.add(it);const C=new H(.08,.55,.08),O=new M(C,new G({color:3359061}));O.position.set(R,.95,.82),V.add(O)}),e.add(V);const E=new Mt;E.scale.set(1.35,1.35,1.35),E.position.set(0,.72,.48);const K=new G({color:16106390,roughness:.6}),vt=new G({color:959977,roughness:.7}),mt=new G({color:1976635,roughness:.8}),gt=new G({color:1579035,roughness:.5}),Ot=new G({color:14362487,roughness:.6}),At=new G({color:16436245,roughness:.7}),Nt=new G({color:16777215,roughness:.8}),Vt=new G({color:986638,roughness:.4}),It=new Mt;It.position.set(-.26,0,0);const wt=new M(new H(.36,.46,.24),vt);wt.position.set(0,.25,0),wt.rotation.y=.35,wt.rotation.z=-.12,It.add(wt);const $t=new M(new Wt(.12,14,14),K);$t.position.set(.04,.58,.02),$t.rotation.y=.45,$t.rotation.z=-.12,It.add($t);const Jt=new M(new Wt(.13,14,14),gt);Jt.scale.set(1.02,1.05,1.02),Jt.position.set(.04,.61,.01),It.add(Jt);const Xt=new M(new H(.34,.16,.44),mt);Xt.position.set(0,-.02,-.15),It.add(Xt),[-.1,.1].forEach(R=>{const J=new M(new ct(.05,.045,.38,8),mt);J.position.set(R,-.22,-.32),It.add(J)});const Bt=new M(new ct(.045,.04,.34,8),vt);Bt.position.set(.18,.14,-.05),Bt.rotation.z=-Math.PI/4,Bt.rotation.x=-.18,It.add(Bt),E.add(It);const Ct=new Mt;Ct.position.set(.26,0,0);const Zt=new M(new H(.32,.42,.22),Ot);Zt.position.set(0,.23,0),Zt.rotation.y=-.32,Zt.rotation.z=.14,Ct.add(Zt);const te=new M(new H(.34,.36,.24),At);te.position.set(0,.24,.02),Ct.add(te);const Gt=new M(new Wt(.115,14,14),K);Gt.position.set(-.06,.54,.02),Gt.rotation.y=-.38,Gt.rotation.z=.22,Ct.add(Gt);const bt=new M(new Wt(.125,14,14),Vt);bt.scale.set(1.04,1.06,1.08),bt.position.set(-.06,.57,0),Ct.add(bt);const xt=new M(new ct(.04,.02,.36,8),Vt);xt.position.set(-.04,.42,.16),xt.rotation.x=-.35,Ct.add(xt);const b=new M(new H(.3,.15,.42),Nt);b.position.set(0,-.02,-.15),Ct.add(b),[-.08,.08].forEach(R=>{const J=new M(new ct(.042,.038,.38,8),Nt);J.position.set(R,-.22,-.32),Ct.add(J)});const k=new M(new ct(.04,.035,.32,8),Ot);k.position.set(-.16,.14,-.05),k.rotation.z=Math.PI/4,k.rotation.x=-.18,Ct.add(k);const Q=new Mt;Q.position.set(.22,.22,-.2),Q.rotation.x=-.25,Q.rotation.z=-.15;const Tt=new ct(.016,.018,.38,8),dt=new G({color:1409085,roughness:.8}),Et=new M(Tt,dt);Q.add(Et);const kt=new Kt(.12,.06),re=new G({color:1483594,roughness:.6,side:Te});[-1,1].forEach(R=>{const J=new M(kt,re);J.position.set(R*.06,-.04,0),J.rotation.z=R*.55,Q.add(J)});const ne=new me(.07,.09,5);ne.rotateX(Math.PI);const Ht=new M(ne,re);Ht.position.set(0,.18,0),Q.add(Ht);const ue=new G({color:14427686,roughness:.35,metalness:.1}),Lt=new Wt(.09,14,14);Lt.scale(1.15,1.35,1.15);const Qt=new M(Lt,ue);Qt.position.set(0,.26,0),Q.add(Qt);const zt=new ln(.08,.035,8,16);zt.rotateX(Math.PI/2);const pe=new M(zt,ue);pe.position.set(0,.23,0),Q.add(pe),Ct.add(Q),E.add(Ct);const fe=new M(new Wt(.065,12,12),K);fe.scale.set(1.6,.95,1.2),fe.position.set(0,.1,-.06),E.add(fe);const Le=new Mt;Le.position.set(0,1.38,.05);const rn=new he({color:16723285}),an=new M(new Wt(.075,10,10),rn);an.position.set(-.05,.04,0),Le.add(an);const bn=new M(new Wt(.075,10,10),rn);bn.position.set(.05,.04,0),Le.add(bn);const un=new me(.11,.14,12);un.rotateZ(Math.PI);const On=new M(un,rn);return On.position.set(0,-.04,0),Le.add(On),E.add(Le),e.add(E),this.animatedAnimals.push({type:"couple",mesh:E,heart:Le,seed:Math.random()*10}),e}createCoconutTree(){const t=new Mt;t.name="coconut_tree";const e=new Cn([new U(0,0,0),new U(.4,3.5,.2),new U(.9,7.5,.5),new U(1.1,10.5,.7)]),n=new wn(e,12,.24,8,!1),i=new M(n,this.palmTrunkMat);this.applyShadow(i),t.add(i);const o=new U(1.1,10.5,.7),a=10;for(let r=0;r<a;r++){const c=r*Math.PI*2/a,h=new Kt(.8,3.4);h.translate(0,1.7,0);const d=new M(h,this.palmLeafMat);d.position.copy(o),d.rotation.y=c,d.rotation.x=.85,this.applyShadow(d),t.add(d)}for(let r=0;r<5;r++){const c=new Wt(.2,8,8),h=new M(c,this.palmLeafMat);h.position.set(o.x+(Math.random()-.5)*.4,o.y-.25,o.z+(Math.random()-.5)*.4),t.add(h)}return t}createBananaTree(){const t=new Mt;t.name="banana_tree";const e=new ct(.18,.28,2.8,8),n=new M(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let o=0;o<i;o++){const a=o*Math.PI*2/i,r=new Kt(.75,2.4);r.translate(0,1.2,0);const c=new M(r,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=a,c.rotation.x=.95,this.applyShadow(c),t.add(c)}return t}createBambooGrove(){const t=new Mt;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,o=new ct(.06,.08,i,6),a=new M(o,this.bambooTrunkMat);a.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),a.rotation.z=(Math.random()-.5)*.15,a.rotation.x=(Math.random()-.5)*.15,t.add(a);const r=new Wt(.8+Math.random()*.5,6,6),c=new M(r,this.palmLeafMat);c.position.set(a.position.x,i-.3,a.position.z),t.add(c)}return t}createElectricPole(){const t=new Mt;t.name="electric_pole";const e=new ct(.14,.18,8.5,8),n=new M(e,this.concreteMat);n.position.y=4.25,this.applyShadow(n),t.add(n);const i=new H(2.2,.12,.12),o=new M(i,this.concreteMat);return o.position.y=7.8,t.add(o),[-.9,0,.9].forEach(a=>{const r=new ct(.04,.05,.2,6),c=new M(r,this.tinRoofMat);c.position.set(a,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new Mt;n.name="village_pond";const i=new Kt(t,e);i.rotateX(-Math.PI/2);const o=new M(i,this.waterMat);o.position.y=.05,n.add(o),this.mudPlinthMat;const a=3;for(let r=0;r<a;r++){const c=new Mt;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const h=new Wt(.24,8,8);h.scale(1,.7,1.4);const d=new M(h,this.duckMat);c.add(d);const f=new Wt(.14,8,8),l=new M(f,this.duckMat);l.position.set(0,.22,-.22),c.add(l);const u=new me(.06,.16,6);u.rotateX(-Math.PI/2);const g=new M(u,this.beakMat);g.position.set(0,.2,-.34),c.add(g),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new Mt;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const o=new ct(.04,.04,t,6);o.rotateX(Math.PI/2);const a=new M(o,this.bambooTrunkMat);a.position.y=i,e.add(a)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const o=-t*.5+i*1.4,a=new ct(.05,.06,1.25,6),r=new M(a,this.woodMat);r.position.set(0,.62,o),this.applyShadow(r),e.add(r)}return e}createHighwayCafe(t=1){const e=new Mt;e.name="highway_cafe";const n=new H(6.6,.28,4.4),i=new G({color:9268835,roughness:.85}),o=new M(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const a=new H(6.8,.14,.25),r=new M(a,this.concreteMat);r.position.set(0,.07,-2.15),e.add(r);const c=new H(5.6,3.2,3),h=new G({color:6111287,roughness:.8}),d=new M(c,h);d.position.set(0,1.74,.6),this.applyShadow(d),e.add(d);const f=new H(5.9,.22,3.3),l=new G({color:4073251,roughness:.6}),u=new M(f,l);u.position.set(0,3.42,.6),e.add(u);const g=new G({color:1976635,metalness:.8,roughness:.15,transparent:!0,opacity:.65}),w=new M(new H(1.9,1.8,.1),g);w.position.set(-1.6,1.7,-.92),e.add(w);const m=new M(new H(1.9,1.8,.1),g);m.position.set(1.6,1.7,-.92),e.add(m);const p=new M(new H(1.2,2.3,.1),g);p.position.set(0,1.45,-.92),e.add(p);const v=new G({color:16096779,metalness:.9,roughness:.2}),_=new M(new ct(.025,.025,.7,8),v);if(_.position.set(.42,1.35,-.98),e.add(_),!this.isMobile){const ft=new bs(16772565,3.2,9);ft.position.set(0,2.2,.2),e.add(ft)}const S=new H(3.6,1,.8),P=new M(S,new G({color:2561548}));P.position.set(0,.8,.4),e.add(P);const L=document.createElement("canvas");L.width=256,L.height=256;const I=L.getContext("2d"),B=32;for(let ft=0;ft<256;ft+=B*2)I.fillStyle="#831843",I.fillRect(ft,0,B,256),I.fillStyle="#fef3c7",I.fillRect(ft+B,0,B,256);const y=new oe(L);y.wrapS=ve,y.wrapT=ve,y.repeat.set(4,1);const x=new G({map:y,roughness:.7,side:Te}),T=new Mt;T.position.set(0,2.65,-.9);const F=new Kt(4.8,1.5);F.rotateX(Math.PI*.4);const nt=new M(F,x);nt.position.set(0,-.22,-.65),T.add(nt);const N=new Kt(4.8,.26),W=new M(N,x);W.position.set(0,-.55,-1.25),T.add(W),[-2.2,2.2].forEach(ft=>{const at=new ct(.02,.02,1.4,6);at.rotateX(-Math.PI*.25);const yt=new M(at,new G({color:1976635}));yt.position.set(ft,-.35,-.6),T.add(yt)}),e.add(T);const Y=document.createElement("canvas");Y.width=1024,Y.height=256;const z=Y.getContext("2d");z.fillStyle="#1c120c",z.fillRect(0,0,1024,256),z.strokeStyle="#d97706",z.lineWidth=12,z.strokeRect(10,10,1004,236),z.strokeStyle="#fde047",z.lineWidth=4,z.strokeRect(22,22,980,212);const st=(ft,at)=>{z.fillStyle="#fde047",z.beginPath(),z.ellipse(ft,at+32,42,12,0,0,Math.PI*2),z.fill(),z.fillStyle="#ffffff",z.beginPath(),z.moveTo(ft-30,at-18),z.lineTo(ft+30,at-18),z.quadraticCurveTo(ft+28,at+24,ft+18,at+28),z.lineTo(ft-18,at+28),z.quadraticCurveTo(ft-28,at+24,ft-30,at-18),z.closePath(),z.fill(),z.strokeStyle="#ffffff",z.lineWidth=8,z.beginPath(),z.arc(ft+32,at+4,14,-Math.PI*.4,Math.PI*.6),z.stroke(),z.strokeStyle="#fef08a",z.lineWidth=4,z.beginPath(),z.moveTo(ft-12,at-24),z.quadraticCurveTo(ft-18,at-38,ft-10,at-48),z.moveTo(ft+8,at-24),z.quadraticCurveTo(ft+2,at-38,ft+12,at-50),z.stroke()};st(70,128),st(954,128),z.fillStyle="#fef08a",z.font="900 82px sans-serif",z.textAlign="center",z.textBaseline="middle",z.shadowColor="rgba(0,0,0,0.95)",z.shadowBlur=14,z.fillText("HIGHWAY CAFE",512,80),z.fillStyle="#ffffff",z.font="bold 54px sans-serif",z.shadowColor="rgba(0,0,0,0.85)",z.shadowBlur=8,z.fillText("ক্যাফে ও রেস্তোরাঁ",512,172),z.fillStyle="#f59e0b",z.font="bold 26px sans-serif",z.shadowBlur=0,z.fillText("FRESH COFFEE • TEA • BURGERS & SNACKS",512,226);const j=new oe(Y),X=new G({map:j,roughness:.35,emissive:4005904,emissiveIntensity:.18}),$=new Mt;$.position.set(0,3.4,-.95);const pt=new M(new H(4.7,.92,.08),new G({color:2561548,roughness:.5}));$.add(pt);const q=new Kt(4.62,.84);q.rotateY(Math.PI);const et=new M(q,X);return et.position.set(0,0,-.045),$.add(et),[-1.6,1.6].forEach(ft=>{const at=new M(new ct(.02,.02,.35,6),v);at.position.set(ft,.52,-.15),at.rotation.x=Math.PI*.3,$.add(at);const yt=new M(new me(.08,.14,8),v);yt.position.set(ft,.42,-.28),yt.rotation.x=Math.PI*.8,$.add(yt);const Rt=new M(new Wt(.04,6,6),new he({color:16772565}));Rt.position.set(ft,.38,-.28),$.add(Rt)}),e.add($),[-1.7,1.7].forEach(ft=>{const at=new Mt;at.position.set(ft,.28,-1.35);const yt=new M(new ct(.035,.22,.75,12),new G({color:1976635,metalness:.8}));yt.position.y=.375,at.add(yt);const Rt=new M(new ct(.55,.55,.05,16),this.woodMat);Rt.position.y=.75,at.add(Rt),[-.18,.18].forEach((Z,lt)=>{const D=new M(new ct(.05,.045,.08,8),new G({color:16777215,roughness:.2}));D.position.set(Z,.81,lt===0?.1:-.1),at.add(D);const ht=new M(new ji(.04,8),new he({color:2561548}));ht.rotation.x=-Math.PI/2,ht.position.set(Z,.85,lt===0?.1:-.1),at.add(ht)}),[-.65,.65].forEach(Z=>{const lt=new Mt;lt.position.set(Z,0,0),[-.14,.14].forEach(rt=>{[-.14,.14].forEach(V=>{const ot=new M(new ct(.02,.02,.45,6),this.woodMat);ot.position.set(rt,.225,V),lt.add(ot)})});const D=new M(new H(.36,.04,.36),this.woodMat);D.position.y=.45,lt.add(D);const ht=new M(new H(.36,.35,.04),this.woodMat);ht.position.set(0,.68,Z>0?.16:-.16),lt.add(ht),at.add(lt)}),e.add(at)}),[-2.9,2.9].forEach(ft=>{const at=new M(new H(.45,.42,1.6),this.woodMat);at.position.set(ft,.49,-1.2),e.add(at);for(let yt=-.55;yt<=.55;yt+=.5){const Rt=new M(new Wt(.24,8,8),this.palmLeafMat);Rt.position.set(ft,.8,-1.2+yt),e.add(Rt);const Z=new M(new Wt(.06,6,6),new he({color:yt<0?14427686:16096779}));Z.position.set(ft,.95,-1.2+yt),e.add(Z)}}),e}createHighwayBar(t=-1){const e=new Mt;e.name="highway_bar";const n=new H(6.6,.28,4.4),i=new G({color:1976635,roughness:.8}),o=new M(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const a=new H(6.8,.14,.25),r=new M(a,new G({color:988970}));r.position.set(0,.07,-2.15),e.add(r);const c=new H(5.6,3.2,3),h=new G({color:988970,roughness:.7}),d=new M(c,h);d.position.set(0,1.74,.6),this.applyShadow(d),e.add(d),[-2.5,2.5].forEach(et=>{const ut=new M(new H(.55,3.2,.2),new G({color:4073251,roughness:.6}));ut.position.set(et,1.74,-.9),e.add(ut)});const f=new H(5.9,.22,3.3),l=new M(f,new G({color:132631,roughness:.4}));l.position.set(0,3.42,.6),e.add(l);const u=new H(3.6,.12,.7),g=new G({color:1120295,roughness:.15,metalness:.8}),w=new M(u,g);w.position.set(0,1.05,-.6),e.add(w);const m=new H(3.4,.98,.6),p=new G({color:1976635,roughness:.5}),v=new M(m,p);v.position.set(0,.5,-.6),e.add(v);const _=new H(3.4,.04,.04),S=new he({color:440020}),P=new M(_,S);P.position.set(0,.98,-.93),e.add(P);const L=new H(3.4,1.6,.2),I=new M(L,new G({color:1973807,roughness:.3}));I.position.set(0,1.8,.6),e.add(I);const B=[1483594,14251782,440020,10033947,16436245];if([1.25,1.7,2.15].forEach((et,ut)=>{const ft=new M(new H(3.2,.04,.3),new G({color:3718648,roughness:.1,transparent:!0,opacity:.8}));ft.position.set(0,et,.45),e.add(ft);for(let at=-1.4;at<=1.4;at+=.28){const yt=B[(Math.abs(Math.round(at*10))+ut)%B.length],Rt=new Mt;Rt.position.set(at,et+.02,.45);const Z=new M(new ct(.045,.045,.22,8),new G({color:yt,roughness:.2,metalness:.3,transparent:!0,opacity:.9}));Z.position.y=.11,Rt.add(Z);const lt=new M(new ct(.016,.022,.1,8),new G({color:yt,roughness:.2}));lt.position.y=.25,Rt.add(lt);const D=new M(new ct(.018,.018,.02,6),new he({color:16638023}));D.position.y=.31,Rt.add(D),e.add(Rt)}}),[-1,0,1].forEach(et=>{const ut=new Mt;ut.position.set(et,.28,-1.25);const ft=new M(new ct(.03,.24,.72,12),new G({color:9741240,metalness:.9,roughness:.15}));ft.position.y=.36,ut.add(ft);const at=new M(new ln(.16,.02,8,16),new G({color:9741240,metalness:.9,roughness:.15}));at.rotation.x=Math.PI/2,at.position.y=.24,ut.add(at);const yt=new M(new ct(.22,.22,.08,16),new G({color:10033947,roughness:.5}));yt.position.y=.74,ut.add(yt),e.add(ut)}),!this.isMobile){const et=new bs(440020,3.2,9);et.position.set(-1.2,2.3,.2),e.add(et);const ut=new bs(14239471,2.8,8);ut.position.set(1.2,2.3,.2),e.add(ut)}const y=document.createElement("canvas");y.width=1024,y.height=256;const x=y.getContext("2d");x.fillStyle="#030712",x.fillRect(0,0,1024,256),x.strokeStyle="#ec4899",x.lineWidth=10,x.shadowColor="#ec4899",x.shadowBlur=18,x.strokeRect(12,12,1e3,232),x.strokeStyle="#06b6d4",x.lineWidth=4,x.shadowColor="#06b6d4",x.shadowBlur=12,x.strokeRect(26,26,972,204);const T=(et,ut)=>{x.shadowColor="#facc15",x.shadowBlur=14,x.fillStyle="#facc15",x.beginPath(),x.roundRect(et,ut+18,48,56,[0,0,8,8]),x.fill(),x.fillStyle="#ffffff",x.beginPath(),x.arc(et+10,ut+14,14,0,Math.PI*2),x.arc(et+24,ut+8,16,0,Math.PI*2),x.arc(et+38,ut+14,14,0,Math.PI*2),x.fill(),x.strokeStyle="#facc15",x.lineWidth=6,x.beginPath(),x.arc(et+52,ut+46,16,-Math.PI*.45,Math.PI*.45),x.stroke()},F=(et,ut)=>{x.shadowColor="#06b6d4",x.shadowBlur=14,x.strokeStyle="#38bdf8",x.lineWidth=5,x.beginPath(),x.moveTo(et-30,ut+10),x.lineTo(et+30,ut+10),x.lineTo(et,ut+50),x.closePath(),x.stroke(),x.fillStyle="#f43f5e",x.beginPath(),x.moveTo(et-20,ut+22),x.lineTo(et+20,ut+22),x.lineTo(et,ut+50),x.closePath(),x.fill(),x.strokeStyle="#38bdf8",x.lineWidth=5,x.beginPath(),x.moveTo(et,ut+50),x.lineTo(et,ut+80),x.moveTo(et-22,ut+80),x.lineTo(et+22,ut+80),x.stroke(),x.fillStyle="#84cc16",x.beginPath(),x.arc(et-6,ut+16,7,0,Math.PI*2),x.fill()};T(52,85),F(940,80),x.fillStyle="#38bdf8",x.font="900 84px sans-serif",x.textAlign="center",x.textBaseline="middle",x.shadowColor="#06b6d4",x.shadowBlur=24,x.fillText("HIGHWAY BAR",512,78),x.fillStyle="#fde047",x.font="bold 62px sans-serif",x.shadowColor="#f59e0b",x.shadowBlur=20,x.fillText("মদের বার",512,168),x.fillStyle="#a3e635",x.font="bold 25px sans-serif",x.shadowColor="#84cc16",x.shadowBlur=8,x.fillText("IMPORTED LIQUOR • CHILLED BEER • WINE LOUNGE",512,224);const nt=new oe(y),N=new G({map:nt,roughness:.25,emissive:440020,emissiveIntensity:.35}),W=new Mt;W.position.set(0,3.4,-.95);const Y=new M(new H(4.7,.95,.08),new G({color:132631,roughness:.4}));W.add(Y);const z=new Kt(4.62,.88);z.rotateY(Math.PI);const st=new M(z,N);st.position.set(0,0,-.045),W.add(st);const j=new Kt(.8,1.2),X=document.createElement("canvas");X.width=256,X.height=384;const $=X.getContext("2d");$.fillStyle="#030712",$.fillRect(0,0,256,384),$.strokeStyle="#ec4899",$.lineWidth=6,$.strokeRect(6,6,244,372),$.fillStyle="#facc15",$.font="900 46px sans-serif",$.textAlign="center",$.shadowColor="#f59e0b",$.shadowBlur=12,$.fillText("BAR",128,70),$.fillStyle="#38bdf8",$.font="bold 36px sans-serif",$.shadowColor="#06b6d4",$.fillText("OPEN",128,130),$.fillStyle="#ec4899",$.font="900 44px sans-serif",$.shadowColor="#ec4899",$.fillText("24/7",128,200),$.fillStyle="#fde047",$.font="bold 32px sans-serif",$.shadowColor="#f59e0b",$.fillText("মদ ও বিয়ার",128,280),$.fillStyle="#a3e635",$.font="bold 22px sans-serif",$.fillText("CHILLED BEER",128,340);const pt=new oe(X),q=new M(j,new G({map:pt,emissive:15485081,emissiveIntensity:.35}));return q.position.set(-2.82,2,-.6),q.rotation.y=-Math.PI/2,e.add(q),e}createSmokingGuysGroup(t=1){const e=new Mt;e.name="smoking_guys_group",e.scale.set(1.25,1.25,1.25);const n=new G({color:16106390,roughness:.65}),i=new G({color:1579035,roughness:.45}),o=new G({color:16317180,roughness:.7}),a=new G({color:1976635,roughness:.7}),r=new Mt;r.position.set(-.42,0,0);const c=new G({color:14427686,roughness:.7}),h=new G({color:1976635,roughness:.8}),d=new M(new H(.38,.58,.24),c);d.position.set(0,1.15,0),d.rotation.y=.25,r.add(d);const f=new M(new H(.3,.24,.16),c);f.position.set(0,1.38,.12),r.add(f);const l=new Mt;l.position.set(0,1.54,0),l.rotation.x=-.12,l.rotation.y=.25;const u=new M(new Wt(.125,12,12),n);l.add(u);const g=new M(new Wt(.132,12,12),i);g.scale.set(1.02,1.08,1.04),g.position.set(0,.03,-.01),l.add(g),r.add(l),[-.1,.1].forEach(Z=>{const lt=new M(new ct(.06,.05,.84,8),h);lt.position.set(Z,.44,0),r.add(lt);const D=new M(new H(.12,.08,.22),o);D.position.set(Z,.04,-.04),r.add(D)});const w=new M(new ct(.045,.04,.52,8),c);w.position.set(-.24,1.1,0),w.rotation.z=.15,r.add(w);const m=new M(new ct(.048,.044,.32,8),c);m.position.set(.23,1.25,-.06),m.rotation.z=-Math.PI*.35,m.rotation.x=-Math.PI*.25,r.add(m);const p=new M(new ct(.042,.038,.32,8),c);p.position.set(.14,1.44,-.12),p.rotation.z=Math.PI*.32,p.rotation.x=-Math.PI*.45,r.add(p);const v=new M(new Wt(.045,8,8),n);v.position.set(.04,1.5,-.16),r.add(v);const _=new Mt;_.position.set(.02,1.51,-.18),_.rotation.x=-Math.PI*.15,_.rotation.y=.28;const S=new M(new ct(.012,.012,.028,8),new G({color:14251782,roughness:.9}));S.rotation.x=Math.PI/2,_.add(S);const P=new M(new ct(.012,.012,.065,8),new G({color:16317180,roughness:.5}));P.rotation.x=Math.PI/2,P.position.z=-.046,_.add(P);const L=new M(new Wt(.014,8,8),new he({color:16726784}));L.position.z=-.082,_.add(L);const I=new Mt;I.position.set(.02,1.51,-.26),I.userData={type:"cigarette",maxH:.5,spd:.007,drift:.004,light:null,seed:Math.random()*5};for(let Z=0;Z<5;Z++){const lt=new M(new Wt(.022+Z*.006,6,6),this.smokeMat);lt.position.y=Z*.1,I.add(lt)}this.smokeEmitters.push(I),r.add(I),r.add(_),e.add(r),this.animatedAnimals.push({type:"smoker",head:l,seed:Math.random()*10});const B=new Mt;B.position.set(.48,0,-.15);const y=new G({color:1981066,roughness:.7}),x=new G({color:4153874,roughness:.8}),T=new M(new H(.36,.56,.22),y);T.position.set(0,1.14,0),T.rotation.y=-.7,B.add(T);const F=new M(new Wt(.12,12,12),n);F.position.set(0,1.54,0),F.rotation.y=-.7,B.add(F);const nt=new M(new Wt(.128,12,12),i);nt.scale.set(1.02,1.06,1.04),nt.position.set(0,1.57,-.01),B.add(nt),[-.09,.09].forEach(Z=>{const lt=new M(new ct(.058,.05,.84,8),x);lt.position.set(Z,.44,0),B.add(lt);const D=new M(new H(.12,.08,.22),a);D.position.set(Z,.04,-.04),B.add(D)});const N=new M(new ct(.042,.038,.48,8),y);N.position.set(.22,1.16,.06),N.rotation.z=-Math.PI*.22,N.rotation.x=-Math.PI*.25,B.add(N);const W=new M(new ct(.042,.038,.48,8),y);W.position.set(-.21,1.08,.04),W.rotation.z=Math.PI*.16,W.rotation.x=-Math.PI*.12,B.add(W);const Y=new M(new Wt(.042,8,8),n);Y.position.set(-.28,.85,.1),B.add(Y);const z=new Mt;z.position.set(-.32,.85,.12),z.rotation.x=-Math.PI*.35,z.rotation.y=-.4;const st=new M(new ct(.012,.012,.08,8),new G({color:16317180,roughness:.5}));st.rotation.x=Math.PI/2,z.add(st);const j=new M(new Wt(.014,8,8),new he({color:16726784}));j.position.z=-.045,z.add(j);const X=new Mt;X.position.set(-.32,.88,.1),X.userData={type:"cigarette",maxH:.45,spd:.006,drift:.003,light:null,seed:Math.random()*5};for(let Z=0;Z<4;Z++){const lt=new M(new Wt(.02+Z*.005,6,6),this.smokeMat);lt.position.y=Z*.1,X.add(lt)}this.smokeEmitters.push(X),B.add(X),B.add(z),e.add(B);const $=new Mt;$.position.set(.02,0,.52);const pt=new G({color:3359061,roughness:.7}),q=new G({color:13935475,roughness:.8}),et=new M(new H(.38,.58,.24),pt);et.position.set(0,1.15,0),et.rotation.y=Math.PI*.9,$.add(et);const ut=new M(new Wt(.125,12,12),n);ut.position.set(0,1.54,0),ut.rotation.y=Math.PI*.9,$.add(ut);const ft=new M(new Wt(.132,12,12),i);ft.scale.set(1.02,1.08,1.04),ft.position.set(0,1.57,.01),$.add(ft),[-.1,.1].forEach(Z=>{const lt=new M(new ct(.058,.05,.84,8),q);lt.position.set(Z,.44,0),$.add(lt);const D=new M(new H(.12,.08,.22),new G({color:7877903}));D.position.set(Z,.04,.04),$.add(D)}),[-.22,.22].forEach(Z=>{const lt=new M(new ct(.045,.04,.48,8),pt);lt.position.set(Z,1.12,-.06),lt.rotation.z=Z>0?-.25:.25,lt.rotation.x=Math.PI*.18,$.add(lt)}),e.add($);const at=new M(new H(.35,.2,.5),this.brickMat);at.position.set(-.1,.1,-.15),e.add(at);const yt=new M(new H(.1,.05,.16),new G({color:1981066,metalness:.5,roughness:.3}));yt.position.set(-.1,.225,-.15),e.add(yt);const Rt=new M(new H(.07,.035,.11),new G({color:16096779,roughness:.8}));return Rt.position.set(.02,.218,-.22),e.add(Rt),e}createDingiBoat(){const t=new Mt;t.name="dingi_nouka";const e=new G({color:4073251,roughness:.8}),n=new H(1.1,.12,3.8),i=new M(n,e);i.position.y=.06,t.add(i),[-.55,.55].forEach(S=>{const P=new H(.08,.45,3.8),L=new M(P,e);L.position.set(S,.28,0),L.rotation.z=S>0?.25:-.25,t.add(L)}),[-1,1].forEach(S=>{const P=new me(.55,1.2,5);P.rotateX(S>0?-Math.PI/3:Math.PI/3);const L=new M(P,e);L.position.set(0,.35,S*2.3),L.scale.set(.9,.5,1.1),t.add(L);const I=new M(new Wt(.08,8,8),new G({color:16096779,metalness:.8,roughness:.3}));I.position.set(0,.65,S*2.7),t.add(I)});const o=new ct(.68,.68,1.9,16,1,!0,0,Math.PI);o.rotateZ(Math.PI/2),o.rotateY(Math.PI/2);const a=new M(o,this.bambooWallMat);a.position.set(0,.48,-.2),t.add(a),[-.8,0,.8].forEach(S=>{const P=new ln(.69,.025,6,16,Math.PI);P.rotateZ(Math.PI/2),P.rotateY(Math.PI/2);const L=new M(P,this.woodMat);L.position.set(0,.48,-.2+S),t.add(L)});const r=new Mt;r.position.set(0,.22,1.35);const c=new G({color:13935475,roughness:.7}),h=new G({color:165063,roughness:.8}),d=new G({color:1579035,roughness:.5}),f=new M(new H(.38,.28,.42),h);f.position.y=.14,r.add(f);const l=new M(new H(.32,.42,.2),c);l.position.set(0,.46,-.05),l.rotation.x=-.15,r.add(l);const u=new M(new Wt(.11,10,10),c);u.position.set(0,.74,-.1),r.add(u);const g=new M(new Wt(.115,10,10),d);g.position.set(0,.77,-.1),g.scale.set(1.02,1.05,1.02),r.add(g);const w=new me(.24,.12,12),m=new M(w,this.bambooWallMat);m.position.set(0,.86,-.1),r.add(m);const p=new Mt;p.position.set(.32,.4,0),p.rotation.z=-Math.PI*.32,p.rotation.x=Math.PI*.25;const v=new M(new ct(.025,.025,2.2,8),this.woodMat);v.position.y=-.5,p.add(v);const _=new M(new H(.18,.55,.02),this.woodMat);return _.position.y=-1.4,p.add(_),r.add(p),t.add(r),t}createWaterHyacinthCluster(){const t=new Mt;t.name="kochuripana_cluster";const e=new G({color:1409085,roughness:.5}),n=new he({color:12616956});for(let i=0;i<7;i++){const o=i/7*Math.PI*2+Math.random()*.4,a=.25+Math.random()*.45,r=Math.cos(o)*a,c=Math.sin(o)*a,h=new Wt(.12,8,6);h.scale(1.3,.2,1);const d=new M(h,e);if(d.position.set(r,.02,c),t.add(d),i%2===0){const f=new M(new me(.04,.12,6),n);f.position.set(r*.8,.08,c*.8),t.add(f)}}return t}createBangladeshiRiverBridge(t=13,e=60){const n=new Mt;n.name="bangladeshi_river_bridge";const i=t*.5,o=.45,a=new H(t+.8,.45,e),r=new G({color:4674921,roughness:.8}),c=new M(a,r);c.position.set(0,-.28,0),c.receiveShadow=!0,n.add(c),[-e*.5+.3,e*.5-.3].forEach(y=>{const x=new H(t+.2,.012,.35),T=new M(x,new G({color:988970,roughness:.9}));T.position.set(0,.006,y),n.add(T)}),[-1,1].forEach(y=>{const x=(i+.3)*y,T=new H(.38,.85,e),F=new M(T,this.bridgeRedMat);F.position.set(x,-.45,0),this.applyShadow(F),n.add(F);const nt=new H(.44,.12,e),N=new M(nt,this.bridgeWhiteMat);N.position.set(x,-.85,0),n.add(N)}),[-18,-6,6,18].forEach(y=>{const x=new Mt;x.position.set(0,0,y);const T=new H(t+1.2,.45,.95),F=new M(T,this.bridgeRedMat);F.position.y=-.55,x.add(F),[-5.2,-1.8,1.8,5.2].forEach(W=>{const Y=new ct(.24,.28,3.2,8),z=new M(Y,this.bridgeRedMat);z.position.set(W,-1.95,0),z.rotation.z=W>0?-.06:.06,x.add(z);const st=new M(new ct(.29,.29,.28,8),new G({color:993570,roughness:.9}));st.position.set(W,-1.35,0),x.add(st)});const nt=new H(t+.6,.22,.3),N=new M(nt,this.bridgeRedMat);N.position.y=-1.6,x.add(N),n.add(x)}),[-1,1].forEach(y=>{const x=(i+.16)*y,T=new H(.34,.28,e),F=new M(T,this.bridgeCurbMat);F.position.set(x,.14,0),F.receiveShadow=!0,n.add(F)});const d=16,f=[];for(let y=0;y<d;y++)f.push(-28.5+y/(d-1)*57);[-1,1].forEach(y=>{const x=(i+.16)*y;f.forEach(T=>{const F=Math.sin((T+28.5)/57*Math.PI)*o,nt=new H(.22,.96,.22),N=new M(nt,this.bridgeRedMat);N.position.set(x,.28+.48+F,T),this.applyShadow(N),n.add(N);const W=new me(.18,.08,4);W.rotateY(Math.PI/4);const Y=new M(W,this.bridgeRedMat);Y.position.set(x,.28+.96+.04+F,T),n.add(Y)});for(let T=0;T<f.length-1;T++){const F=f[T],nt=f[T+1],N=(F+nt)*.5,W=nt-F,Y=Math.sin((N+28.5)/57*Math.PI)*o,z=new M(new H(.14,.12,W),this.bridgeWhiteMat);z.position.set(x,.28+.44+Y,N),n.add(z);const st=new M(new H(.2,.12,W),this.bridgeWhiteMat);if(st.position.set(x,.28+.92+Y,N),n.add(st),y===-1){const j=new ct(.065,.065,W,8);j.rotateX(Math.PI/2);const X=new M(j,this.pipelineMat);X.position.set(x+.09,.28+.32+Y,N),n.add(X)}}});const l=new Kt(180,48);l.rotateX(-Math.PI/2);const u=new M(l,this.riverWaterMat);u.position.set(0,-1.35,0),u.receiveShadow=!0,n.add(u);const g=new Kt(180,48);g.rotateX(-Math.PI/2);const w=new M(g,new G({color:1841431,roughness:.95}));w.position.set(0,-3.2,0),n.add(w),[-1,1].forEach(y=>{const x=y*26.5;[-1,1].forEach(T=>{const F=new Kt(75,7);F.rotateX(y>0?-Math.PI*.38:Math.PI*.38);const nt=new M(F,this.mudPlinthMat);nt.position.set(T*48,-.7,x),n.add(nt)})});const m=this.createDingiBoat();m.position.set(16.5,-1.35,3.5),m.rotation.y=.45,n.add(m),this.animatedAnimals.push({type:"dingi",mesh:m,startY:-1.35,seed:Math.random()*10}),[[14.5,-1.34,1.5],[19,-1.34,5.5],[-15,-1.34,-4],[-7.5,-1.34,6],[7.5,-1.34,-6]].forEach(([y,x,T])=>{const F=this.createWaterHyacinthCluster();F.position.set(y,x,T),n.add(F)});const v=new Mt;v.position.set(i+.95,0,-28.8);const _=new M(new H(.35,1.2,.35),this.bridgeCurbMat);_.position.y=.6,v.add(_);const S=document.createElement("canvas");S.width=512,S.height=320;const P=S.getContext("2d");P.fillStyle="#15803d",P.fillRect(0,0,512,320),P.strokeStyle="#facc15",P.lineWidth=12,P.strokeRect(8,8,496,304),P.strokeStyle="#ffffff",P.lineWidth=4,P.strokeRect(22,22,468,276),P.fillStyle="#ffffff",P.font="bold 56px sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillText("মেঘনা নদী সেতু",256,85),P.fillStyle="#facc15",P.font="900 44px sans-serif",P.fillText("MEGHNA RIVER BRIDGE",256,160),P.fillStyle="#e2e8f0",P.font="bold 28px sans-serif",P.fillText("দৈর্ঘ্য: ৬০ মিটার | LENGTH: 60M",256,225),P.fillStyle="#86efac",P.font="bold 22px sans-serif",P.fillText("সড়ক ও জনপথ অধিদপ্তর (RHD)",256,275);const L=new oe(S),I=new G({map:L,roughness:.4}),B=new M(new Kt(1.2,.75),I);return B.position.set(0,1.35,-.05),B.rotation.y=-Math.PI/4,v.add(B),n.add(v),[-1,1].forEach(y=>{const x=(i+.38)*y;for(let T=-29.2;T<=-23.5;T+=1.4){const F=new M(new ct(.1,.1,.85,12),this.bollardMat);F.position.set(x,.425,T),this.applyShadow(F),n.add(F);const nt=new M(new Wt(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);nt.position.set(x,.85,T),n.add(nt)}for(let T=23.5;T<=29.2;T+=1.4){const F=new M(new ct(.1,.1,.85,12),this.bollardMat);F.position.set(x,.425,T),this.applyShadow(F),n.add(F);const nt=new M(new Wt(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);nt.position.set(x,.85,T),n.add(nt)}}),n}createFigure({shirtMat:t,pantsMat:e,isSitting:n=!1,isSmoking:i=!1}){const o=new Mt;o.name="human_figure",o.scale.set(1.15,1.15,1.15);const a=new H(.36,.52,.22),r=new M(a,t||this.shirtTealMat);r.position.y=n?.72:1.12,o.add(r);const c=new Wt(.12,8,8),h=new M(c,this.skinMat);h.position.y=n?1.08:1.48,o.add(h);const d=new Wt(.126,8,8);d.scale(1.02,1.05,1.02);const f=new M(d,this.hairMat);f.position.set(0,(n?1.08:1.48)+.02,-.01),o.add(f),[-.22,.22].forEach((u,g)=>{const w=new ct(.045,.04,.48,6),m=new M(w,t||this.shirtTealMat);if(n)m.position.set(u,.7,.1),m.rotation.x=.35;else if(i&&g===1){m.position.set(u*.8,1.25,-.08),m.rotation.z=-.6,m.rotation.x=-.5;const p=new ct(.01,.01,.12,4);p.rotateX(Math.PI/2);const v=new M(p,this.panjabiMat);v.position.set(0,.24,-.08),m.add(v);const _=new Wt(.015,4,4),S=new M(_,new he({color:16729088}));S.position.set(0,0,-.06),v.add(S)}else m.position.set(u,1.08,0),m.rotation.z=u>0?-.1:.1;o.add(m)});const l=e||this.stageTrussMat;return n?[-.1,.1].forEach(u=>{const g=new H(.11,.12,.42),w=new M(g,l);w.position.set(u,.48,.22),o.add(w);const m=new H(.1,.44,.1),p=new M(m,l);p.position.set(u,.22,.4),o.add(p)}):[-.09,.09].forEach(u=>{const g=new ct(.055,.048,.82,6),w=new M(g,l);w.position.set(u,.41,0),o.add(w)}),o}createUddanOpenStageWithTong(t=1){const e=new Mt;e.name="uddan_open_stage_complex";const n=new Mt;n.position.set(33*t,0,-4);const i=new me(18,22,14),o=new M(i,this.hillDarkGreenMat);o.position.set(0,11,0),n.add(o);const a=new me(15,17,12),r=new M(a,this.hillGreenMat);r.position.set(2*t,8.5,-18),n.add(r);const c=new me(16,18,12),h=new M(c,this.hillGreenMat);h.position.set(2*t,9,15),n.add(h),[-14,-6,6,14].forEach(_t=>{const A=new me(2,5,6),E=new M(A,this.treeCrownMat);E.position.set(-3*t,15,_t),n.add(E)}),e.add(n);const d=new Mt;d.position.set(20*t,0,-4);const f=new Kt(20,42);f.rotateX(-Math.PI/2);const l=new M(f,this.pavingPlazaMat);l.position.set(0,.015,0),l.receiveShadow=!0,d.add(l),[-16,12].forEach(_t=>{const A=new Mt;A.position.set(0,0,_t);const E=new ct(.35,.45,4.5,8),K=new M(E,this.palmTrunkMat);K.position.y=2.25,A.add(K);const vt=new Wt(3.8,8,8);vt.scale(1.25,.85,1.25);const mt=new M(vt,this.treeCrownMat);mt.position.y=5.4,A.add(mt),d.add(A)}),e.add(d);const u=new Mt;u.position.set(21*t,0,-4),u.rotation.y=t>0?-Math.PI/2:Math.PI/2;const g=new H(14,.9,8),w=new M(g,this.stageBaseYellowMat);w.position.set(0,.45,0),this.applyShadow(w),u.add(w);const m=new H(14.2,.08,8.2),p=new M(m,this.stageFloorMat);p.position.set(0,.94,0),u.add(p);const v=new H(14.3,.08,.2),_=new M(v,this.stageBorderBlueMat);_.position.set(0,.94,4.1),u.add(_);const S=new M(new H(11,.3,1.4),this.stageBaseYellowMat);S.position.set(0,.3,4.7),u.add(S);const P=new M(new H(9,.3,1.2),this.stageBaseYellowMat);P.position.set(0,.15,5.6),u.add(P);const L=new H(8,.35,.5),I=new M(L,this.brickMat);I.position.set(0,.18,6.4),u.add(I);for(let _t=-3.2;_t<=3.2;_t+=1.6){const A=new Wt(.3,6,6);A.scale(1.3,.9,1.3);const E=new M(A,this.bananaLeafMat);E.position.set(_t,.42,6.4),u.add(E)}[-7.4,7.4].forEach(_t=>{const A=new Mt;A.position.set(_t,0,2.2);const E=new H(1.6,.8,4.8),K=new M(E,this.stageBaseYellowMat);K.position.set(0,.4,0),K.rotation.x=.18,A.add(K);const vt=new H(.1,.7,4.8),mt=new M(vt,this.stageBorderBlueMat);mt.position.set(_t>0?.75:-.75,.75,0),mt.rotation.x=.18,A.add(mt),u.add(A)});const B=new Mt;B.position.set(0,.9,-3.8);const y=new H(11.5,4.5,.3),x=new M(y,this.stageTerracottaMat);x.position.set(0,2.25,0),this.applyShadow(x),B.add(x);const T=new H(7.5,3.4,.38),F=new M(T,this.stageGoldEmblemMat);F.position.set(0,2,.05),B.add(F);const nt=new ct(2.8,2.8,.4,16,1,!1,0,Math.PI);nt.rotateZ(Math.PI/2);const N=new M(nt,this.stageGoldEmblemMat);N.position.set(0,4,.05),B.add(N),[-5.2,5.2].forEach(_t=>{const A=new H(1.8,4.2,.35),E=new M(A,this.woodMat);E.position.set(_t,2.1,.02),B.add(E)}),u.add(B);const W=new Mt;W.position.set(0,.9,0);const Y=7.5,z=8.5,st=new ct(Y,Y,z,24,1,!0,Math.PI*.12,Math.PI*.76);st.rotateX(Math.PI/2);const j=new M(st,this.stageBlueRoofMat);j.position.set(0,0,0),this.applyShadow(j),W.add(j),[-z*.5,z*.5].forEach(_t=>{const A=[];for(let mt=0;mt<=20;mt++){const gt=Math.PI*.12+mt/20*(Math.PI*.76),Ot=Math.cos(gt)*Y,At=Math.sin(gt)*Y;A.push(new U(Ot,At,_t))}const E=new Cn(A),K=new wn(E,20,.14,8,!1),vt=new M(K,this.stageTrussMat);W.add(vt)}),[-z*.5+.1,z*.5-.1].forEach(_t=>{[.25,.4,.5,.6,.75].forEach(A=>{const E=Math.PI*.12+A*(Math.PI*.76),K=Math.cos(E)*Y,vt=Math.sin(E)*Y,mt=[new U(0,0,_t),new U(K,vt,_t)],gt=new Cn(mt),Ot=new wn(gt,2,.06,6,!1),At=new M(Ot,this.stageTrussMat);W.add(At)})});const X=new H(12,.75,.25),$=new M(X,this.stageTrussMat);$.position.set(0,5.8,z*.5+.1),W.add($);const pt=new ct(.55,.55,.12,16);pt.rotateX(Math.PI/2);const q=new M(pt,this.stageGoldEmblemMat);q.position.set(0,6.4,z*.5+.15),W.add(q),u.add(W);const et=this.createFigure({shirtMat:this.panjabiMat,pantsMat:this.panjabiMat,isSitting:!1});et.position.set(-1.2,.94,-.6),u.add(et);const ut=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});ut.position.set(-.4,.94,-.6),ut.rotation.y=-Math.PI*.4,u.add(ut);const ft=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.stageTrussMat,isSitting:!0});ft.position.set(2.4,.3,4.9),u.add(ft);const at=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.lungiPlaidMat,isSitting:!0});at.position.set(3.4,.3,4.9),u.add(at),e.add(u);const yt=new Mt;yt.position.set(11.3*t,0,8),yt.rotation.y=t>0?-Math.PI*.5-.25:Math.PI*.5+.25;const Rt=this.createTeaStall();yt.add(Rt);const Z=new H(2.4,.45,.08),lt=new G({color:14427686,roughness:.5}),D=new M(Z,lt);D.position.set(0,2.55,.85),yt.add(D);const ht=new Mt;ht.position.set(1.4,1.9,.9);for(let _t=0;_t<6;_t++){const A=new ct(.025,.025,.22,6);A.rotateZ(.2+_t%2*.2);const E=new M(A,this.stageGoldEmblemMat);E.position.set(_t%3*.06-.06,-Math.floor(_t/3)*.15,0),ht.add(E)}yt.add(ht);const rt=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.lungiPlaidMat,isSitting:!1});rt.position.set(.2,0,-.4),rt.rotation.y=Math.PI,yt.add(rt);const V=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!0});V.position.set(-.6,.45,1.8),V.rotation.y=0,yt.add(V);const ot=this.createFigure({shirtMat:this.panjabiMat,pantsMat:this.panjabiMat,isSitting:!0});ot.position.set(.6,.45,1.8),ot.rotation.y=-.3,yt.add(ot);const Pt=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.stageTrussMat,isSitting:!1,isSmoking:!0});return Pt.position.set(1.65,0,1.5),Pt.rotation.y=-Math.PI*.4,yt.add(Pt),e.add(yt),e}createUIUCampus(t=1){const e=new Mt;e.name="uiu_permanent_campus";const n=new Mt;n.position.set(48*t,0,0);const i=new Kt(38,68);i.rotateX(-Math.PI/2);const o=new M(i,this.uiuLawnMat);o.position.set(0,.02,0),o.receiveShadow=!0,n.add(o);const a=new Kt(46,76);a.rotateX(-Math.PI/2);const r=new M(a,this.paddyFieldMaterial);r.position.set(0,.01,0),n.add(r),[-30,30].forEach(Z=>{const lt=new Mt;lt.position.set(0,0,Z),[-3.2,3.2].forEach(ht=>{const rt=new M(new ct(.08,.08,3.2,8),this.goalPostMat);rt.position.set(ht,1.6,0),lt.add(rt)});const D=new M(new ct(.08,.08,6.56,8),this.goalPostMat);D.rotateZ(Math.PI/2),D.position.set(0,3.2,0),lt.add(D),[-3.2,3.2].forEach(ht=>{const rt=new M(new ct(.04,.04,2.2,6),this.goalPostMat);rt.position.set(ht,1.1,Z>0?1:-1),rt.rotation.x=Z>0?.72:-.72,lt.add(rt)}),n.add(lt)});const c=new M(new Wt(.28,8,8),new G({color:16777215,roughness:.3}));c.position.set(0,.28,0),n.add(c);const h=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});h.position.set(-2.2,0,1.8),h.rotation.y=-.6,n.add(h);const d=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.panjabiMat,isSitting:!1});d.position.set(2.4,0,-1.6),d.rotation.y=2.4,n.add(d);const f=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});f.position.set(8.5,0,12),f.rotation.y=-1.2,n.add(f);const l=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.panjabiMat,isSitting:!1});l.position.set(-9,0,-14),l.rotation.y=1.1,n.add(l),[-14,14].forEach(Z=>{const lt=new Mt;lt.position.set(-18*t,0,Z);const D=new me(3.2,2.2,4);D.rotateY(Math.PI/4);const ht=new M(D,this.uiuTentMat);ht.position.set(0,3.1,0),lt.add(ht),[-1.8,1.8].forEach(ot=>{[-1.8,1.8].forEach(Pt=>{const _t=new M(new ct(.04,.04,2.2,6),this.stageTrussMat);_t.position.set(ot,1.1,Pt),lt.add(_t)})});const rt=new M(new H(.6,.45,3.2),this.uiuConcreteMat);rt.position.set(0,.225,0),lt.add(rt);const V=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.stageTrussMat,isSitting:!0});V.position.set(0,0,0),lt.add(V),n.add(lt)}),[-24,-8,8,24].forEach(Z=>{const lt=new M(new ct(.025,.025,2.4,6),this.goalPostMat);lt.position.set(-18*t,1.2,Z),n.add(lt);const D=new M(new H(.02,.45,.7),Z>0?this.shirtRedMat:this.stageBaseYellowMat);D.position.set(-18*t,2.1,Z+.35),n.add(D)}),[-16,-8,0,8,16].forEach(Z=>{const lt=this.createCoconutTree();lt.position.set(Z,0,36),n.add(lt)}),[-16,-8,0,8,16].forEach(Z=>{const lt=this.createCoconutTree();lt.position.set(Z,0,-36),n.add(lt)}),[-32,-22,22,32].forEach(Z=>{const lt=this.createCoconutTree();lt.position.set(-20*t,0,Z),n.add(lt)}),[-28,-14,14,28].forEach(Z=>{const lt=this.createCoconutTree();lt.position.set(20*t,0,Z),n.add(lt)});const u=new Mt,g=-24*t,w=new M(new H(.35,.45,72),this.concreteMat);w.position.set(g,.225,0),u.add(w);for(let Z=-34;Z<=34;Z+=3.2){const lt=new M(new ct(.04,.04,1.6,6),this.stageTrussMat);lt.position.set(g,1,Z),u.add(lt)}const m=new M(new H(.08,.08,72),this.stageTrussMat);m.position.set(g,1.75,0),u.add(m);const p=new Mt;p.position.set(g,0,0),[-3.2,3.2].forEach(Z=>{const lt=new M(new H(.8,5,.8),this.brickMat);lt.position.set(0,2.5,Z),p.add(lt)});const v=new M(new H(.45,1,7.2),this.stageTrussMat);v.position.set(0,4.6,0),p.add(v);const _=new M(new H(.12,.9,6.4),this.uiuGateSignMat);_.position.set(t>0?-.1:.1,4.6,0),p.add(_),u.add(p),n.add(u),e.add(n);const S=new Mt;S.position.set(78*t,0,0),S.rotation.y=t>0?-Math.PI/2:Math.PI/2;const P=new Mt;P.position.set(-19,19,0);const L=new H(18,38,16),I=[this.uiuFacadeMat,this.uiuFacadeMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuLogoMat,this.uiuFacadeMat],B=new M(L,I);this.applyShadow(B),P.add(B);const y=new M(new H(2.4,38,16.2),this.uiuBrickFlankMat);y.position.set(-9.2,0,0),P.add(y);const x=new M(new H(7,3.8,8),this.uiuConcreteMat);x.position.set(-2,20.9,0),P.add(x);const T=new M(new H(16.5,.8,14.5),this.uiuRoofGardenMat);T.position.set(0,19.4,0),P.add(T);const F=new ct(.06,.08,7.5,6),nt=new M(F,this.goalPostMat);nt.position.set(-2,25.5,1.5),P.add(nt);const N=new M(new H(18.1,1.1,16.1),this.stageTrussMat);N.position.set(0,19.55,0),P.add(N),S.add(P);const W=new Mt;W.position.set(0,16,0);const Y=new H(16,32,13),z=[this.uiuConcreteMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuAtriumMat,this.uiuConcreteMat],st=new M(Y,z);W.add(st),[7,14,21,28].forEach(Z=>{const lt=new M(new H(16.2,1.2,13.4),this.uiuConcreteMat);lt.position.set(0,Z-16,0),W.add(lt)});const j=new M(new H(15.5,.6,12.5),this.uiuRoofGardenMat);j.position.set(0,16.3,0),W.add(j),S.add(W);const X=new Mt;X.position.set(19,17,0);const $=new H(18,34,16),pt=[this.uiuFacadeMat,this.uiuFacadeMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuFacadeMat,this.uiuFacadeMat],q=new M($,pt);this.applyShadow(q),X.add(q);const et=new M(new H(2.4,34,16.2),this.uiuBrickFlankMat);et.position.set(9.2,0,0),X.add(et);const ut=new M(new H(16.5,.8,14.5),this.uiuRoofGardenMat);ut.position.set(0,17.4,0),X.add(ut);const ft=new M(new H(18.1,1.1,16.1),this.stageTrussMat);ft.position.set(0,17.55,0),X.add(ft),S.add(X);const at=new Mt;for(let Z=-26;Z<=26;Z+=5.2){const lt=new M(new ct(.45,.5,5,8),this.uiuConcreteMat);lt.position.set(Z,2.5,8.2),at.add(lt)}const yt=new M(new H(32,5,2),this.uiuGlassMat);yt.position.set(0,2.5,7.5),at.add(yt);const Rt=new M(new H(36,.6,6),this.concreteMat);return Rt.position.set(0,.3,11),at.add(Rt),S.add(at),e.add(S),e}createHighwaySignGantry(t=13){const e=new Mt;e.name="highway_sign_gantry";const n=t*.5+1.2,i=8.5;[-n,n].forEach(h=>{const d=new H(.9,1.8,.9),f=new M(d,this.gantryHazardMat);f.position.set(h,.9,0),e.add(f),[-.22,.22].forEach(u=>{const g=new M(new ct(.12,.12,i-1.8,8),this.stageTrussMat);g.position.set(h,1.8+(i-1.8)*.5,u),e.add(g)});for(let u=2.4;u<i-.5;u+=1.4){const g=new M(new ct(.04,.04,1.45,6),this.stageTrussMat);g.position.set(h,u+.6,0),g.rotation.x=Math.PI/4,e.add(g)}const l=new M(new ct(.06,.06,2.8,6),this.stageTrussMat);l.position.set(h>0?h-1:h+1,i-.9,0),l.rotation.z=h>0?-Math.PI/4:Math.PI/4,e.add(l)});const o=n*2+1.2;[-.35,.35].forEach(h=>{[-.22,.22].forEach(d=>{const f=new M(new ct(.09,.09,o,8),this.stageTrussMat);f.rotateZ(Math.PI/2),f.position.set(0,i+h,d),e.add(f)})});for(let h=-n+1.5;h<n-1;h+=1.8){const d=new M(new ct(.045,.045,.7,6),this.stageTrussMat);d.position.set(h,i,.22),e.add(d);const f=new M(new ct(.04,.04,1.9,6),this.stageTrussMat);f.position.set(h+.9,i,.22),f.rotation.z=Math.PI/4,e.add(f)}const a=new H(11.8,2.6,.16),r=[this.stageTrussMat,this.stageTrussMat,this.stageTrussMat,this.stageTrussMat,this.highwayGantrySignMat,this.stageTrussMat],c=new M(a,r);return c.position.set(0,7.6,.35),e.add(c),e}createPuthiaTemple(t=-1){const e=new Mt;e.name="puthia_shiva_temple";const n=new Mt;n.position.set(24*t,0,0),n.rotation.y=t>0?-Math.PI/2:Math.PI/2;const i=new H(15,1.8,16),o=new M(i,this.templePlinthMat);o.position.set(0,.9,0),o.receiveShadow=!0,n.add(o);const a=new H(13.5,.45,6.5),r=new M(a,this.templePlinthMat);r.position.set(0,1.8+.225,9.5),r.receiveShadow=!0,n.add(r),[-6.6,6.6].forEach(x=>{const T=new M(new H(.3,.85,6.5),this.templePlinthMat);T.position.set(x,2.45,9.5),n.add(T)});for(let x=0;x<5;x++){const T=new M(new H(9+x*.8,.28,.9),this.templePlinthMat);T.position.set(0,1.4-x*.28,13+x*.8),n.add(T)}const c=new Kt(28,16);c.rotateX(-Math.PI/2);const h=new M(c,this.riverWaterMat);h.position.set(0,.03,24),n.add(h),[-6,6].forEach(x=>{const T=this.createWaterHyacinthCluster();T.position.set(x,.04,20),n.add(T)});const d=new H(12.5,6.5,12.5),f=new M(d,this.templeWallMat);f.position.set(0,1.8+3.25,0),this.applyShadow(f),n.add(f);const l=new M(new H(3.6,4.8,.4),this.templePlinthMat);l.position.set(0,4.4,6.3),n.add(l);const u=new M(new H(2.2,3.8,.5),this.stageTrussMat);u.position.set(0,4,6.35),n.add(u);const g=new H(8.5,4.2,8.5),w=new M(g,this.templeWallMat);w.position.set(0,1.8+6.5+2.1,0),this.applyShadow(w),n.add(w);const m=new me(3.8,10.5,12),p=new M(m,this.templeShikharaMat);p.position.set(0,14.6+5.25,0),this.applyShadow(p),n.add(p);const v=new M(new ct(.12,.45,2.6,8),this.templeBrassMat);v.position.set(0,26.2,0),n.add(v);const _=new M(new H(.6,.8,.08),this.templeBrassMat);_.position.set(0,27.8,0),n.add(_),[-4.8,4.8].forEach(x=>{[-4.8,4.8].forEach(T=>{const F=new me(1.6,5.2,8),nt=new M(F,this.templeShikharaMat);nt.position.set(x,8.3+2.6,T),this.applyShadow(nt),n.add(nt);const N=new M(new ct(.06,.18,1.4,6),this.templeBrassMat);N.position.set(x,14,T),n.add(N)})});const S=new Mt;S.position.set(-13.5,0,4);const P=new M(new ct(3.2,3.4,1.2,8),this.templePlinthMat);P.position.set(0,.6,0),S.add(P);const L=new M(new ct(2.4,2.6,4.5,8),this.templeWallMat);L.position.set(0,3.45,0),S.add(L);const I=new M(new Wt(2.5,12,10,0,Math.PI*2,0,Math.PI*.5),this.templeShikharaMat);I.position.set(0,5.7,0),S.add(I);const B=new M(new ct(.08,.22,1.5,6),this.templeBrassMat);B.position.set(0,8.4,0),S.add(B),n.add(S);const y=(x,T)=>{const F=new Cn(x),nt=new wn(F,10,.08,6,!1),N=new M(nt,T);n.add(N)};return y([new U(-1.8,2.4,6.55),new U(-1.2,5.8,6.55),new U(0,6.4,6.55),new U(1.2,5.8,6.55),new U(1.8,2.4,6.55)],this.marigoldOrangeMat),y([new U(-1.6,2.2,6.58),new U(-1,5.5,6.58),new U(0,6.1,6.58),new U(1,5.5,6.58),new U(1.6,2.2,6.58)],this.marigoldYellowMat),y([new U(-6.6,2.7,6.5),new U(-6.6,2.2,9.5),new U(-6.6,2.7,12.5)],this.marigoldOrangeMat),y([new U(6.6,2.7,6.5),new U(6.6,2.2,9.5),new U(6.6,2.7,12.5)],this.marigoldYellowMat),y([new U(-6.6,2.7,12.5),new U(-3.2,2.1,12.5),new U(0,2.6,12.5),new U(3.2,2.1,12.5),new U(6.6,2.7,12.5)],this.marigoldOrangeMat),[-1.6,0,1.6].forEach(x=>{const T=new M(new ct(.08,.08,.65,6),this.marigoldYellowMat);T.position.set(x,5.8,6.6),n.add(T)}),[-7.8,7.8].forEach(x=>{const T=this.createBananaTree();T.position.set(x,0,6),n.add(T);const F=this.createBananaTree();F.position.set(x,0,11),n.add(F)}),[-8,0,8].forEach(x=>{const T=this.createCoconutTree();T.position.set(x,0,-10),n.add(T)}),e.add(n),e}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}else if(e.type==="smoker"){if(e.head){const n=Math.sin(t*1.8+e.seed)*.04;e.head.rotation.x=-.12+Math.max(0,n)}}else e.type==="dingi"&&(e.mesh.position.y=e.startY+Math.sin(t*2.2+e.seed)*.035,e.mesh.rotation.z=Math.sin(t*1.8+e.seed)*.04,e.mesh.rotation.x=Math.cos(t*1.4+e.seed)*.025)}),this.smokeEmitters.forEach(e=>{const n=e.userData&&e.userData.type==="cigarette",i=e.userData&&e.userData.maxH||(n?.5:1.4),o=e.userData&&e.userData.spd||(n?.007:.015),a=e.userData&&e.userData.drift||(n?.004:.005);if(e.children.forEach((r,c)=>{r.position.y+=o,r.position.x+=Math.sin(t*3+c)*a,r.position.z+=Math.cos(t*2.6+c)*(a*.6),r.position.y>i&&(r.position.y=0,r.position.x=0,r.position.z=0)}),e.userData&&e.userData.light){const r=e.userData.seed||0;e.userData.light.intensity=.85+Math.sin(t*7.5+r)*.35}})}}class Fp{constructor(t){this.scene=t,this.segments=[],this.segmentLength=Yt.ROAD_SEGMENT_LENGTH,this.segmentCount=Yt.ROAD_SEGMENT_COUNT,this.roadWidth=Yt.ROAD_WIDTH,this.props=new Np,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let d=0;d<i.length;d+=4){const f=(Math.random()-.5)*12;i[d]=Math.min(255,Math.max(0,i[d]+f)),i[d+1]=Math.min(255,Math.max(0,i[d+1]+f)),i[d+2]=Math.min(255,Math.max(0,i[d+2]+f))}e.putImageData(n,0,0);const o=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",o.forEach(d=>{e.fillRect(d-50,0,36,t.height),e.fillRect(d+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const a=new oe(t);a.wrapS=ve,a.wrapT=ve,a.repeat.set(1,1),a.anisotropy=8,this.roadMaterial=new G({map:a,roughness:.82,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});const r=document.createElement("canvas");r.width=512,r.height=512;const c=r.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let d=0;d<512;d+=24)c.beginPath(),c.moveTo(0,d),c.lineTo(512,d),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const h=new oe(r);h.wrapS=ve,h.wrapT=ve,h.repeat.set(4,8),this.paddyFieldMaterial=new G({map:h,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new G({color:7032635,roughness:.95}),this.culvertRailingMaterial=new G({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new Mt;n.position.z=t;const i=e%4===3,o=new Kt(this.roadWidth,this.segmentLength);o.rotateX(-Math.PI/2);const a=new M(o,this.roadMaterial);if(a.position.y=i?.003:0,a.receiveShadow=!0,n.add(a),i){[-1,1].forEach(d=>{[-1,1].forEach(f=>{const l=new Kt(3.5,6);l.rotateX(-Math.PI/2);const u=new M(l,this.dirtVergeMaterial);u.position.set((this.roadWidth*.5+3.5*.5)*d,-.01,f*27),n.add(u);const g=new Kt(60,6);g.rotateX(-Math.PI/2);const w=new M(g,this.paddyFieldMaterial);w.position.set((this.roadWidth*.5+3.5+30)*d,-.05,f*27),n.add(w)})});const h=this.props.createBangladeshiRiverBridge(this.roadWidth,this.segmentLength);n.add(h)}else{[-1,1].forEach(h=>{const d=new Kt(3.5,this.segmentLength);d.rotateX(-Math.PI/2);const f=new M(d,this.dirtVergeMaterial);f.position.set((this.roadWidth*.5+3.5*.5)*h,-.01,0),f.receiveShadow=!0,n.add(f)});const c=160;[-1,1].forEach(h=>{const d=new Kt(c,this.segmentLength);d.rotateX(-Math.PI/2);const f=new M(d,this.paddyFieldMaterial),l=(this.roadWidth*.5+3.5+c*.5)*h;f.position.set(l,-.05,0),f.receiveShadow=!0,n.add(f)})}return this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=e%4===3,o=!i&&e%5===1,a=n.createElectricPole();a.position.set(this.roadWidth*.5+2.4,0,0),t.add(a);const r=[new U(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new U(this.roadWidth*.5+2.4,7.1,0),new U(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],c=new Cn(r),h=new wn(c,8,.02,4,!1),d=new he({color:2040865}),f=new M(h,d);if(t.add(f),!i){const l=e%2===0?-1:1,u=e%3===0?"white":e%3===1?"brown":"black",g=n.createCow(u),w=(this.roadWidth*.5+2.8+Math.random()*1.5)*l,m=6+Math.random()*14;if(g.position.set(w,0,m),g.rotation.y=l>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(g),e%2===1){const p=n.createCow("brown");p.scale.set(.75,.75,.75),p.position.set(w+(l>0?3:-3),0,m+3.5),p.rotation.y=g.rotation.y+.5,t.add(p)}}if(!i&&!o&&e%16===8){const u=n.createPuthiaTemple(-1);u.position.set(0,0,-6),t.add(u)}if(e%3===1){const u=n.createTeaStall();u.position.set((this.roadWidth*.5+5.8)*1,0,12),u.rotation.y=-Math.PI/2,t.add(u);const g=n.createCoconutTree();g.position.set((this.roadWidth*.5+9)*1,0,16),t.add(g)}if(e%3===2&&!o){const u=n.createPond(14,22);u.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(u);for(let g=0;g<3;g++){const w=n.createBananaTree();w.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+g*6),t.add(w)}}if(!i&&!o){const l=e%2===0?1:-1,u=n.createCoconutTree();u.position.set((this.roadWidth*.5+7.5+Math.random()*5)*l,0,-22),t.add(u);const g=n.createBambooGrove();g.position.set((this.roadWidth*.5+9+Math.random()*6)*-l,0,18),t.add(g);const w=n.createBananaTree();w.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*l,0,4),t.add(w)}else i&&[-1,1].forEach(l=>{const u=n.createCoconutTree();u.position.set(this.roadWidth*.5+9,0,l*26),t.add(u);const g=n.createBambooGrove();g.position.set(-this.roadWidth*.5-10,0,l*26),t.add(g)});if(!i){const l=o||e%2===0?1:-1,u=n.createJatriChawni(l),g=(this.roadWidth*.5+3.4)*l,w=e===0?-14:-18;u.position.set(g,0,w),u.rotation.y=l>0?Math.PI*.5+.32:-Math.PI*.5-.32,t.add(u)}if(!i&&e%3===0&&!o){const u=n.createUddanOpenStageWithTong(1);u.position.set(0,0,0),t.add(u)}if(e%4===1||e%4===2){const l=e%4===2||o?1:-1,u=n.createHighwayCafe(l),g=(this.roadWidth*.5+5.6)*l,w=e%4===2?14:12;u.position.set(g,0,w),u.rotation.y=l>0?Math.PI*.5+.28:-Math.PI*.5-.28,t.add(u);const m=l,p=n.createSmokingGuysGroup(m),v=(this.roadWidth*.5+2.5)*m,_=w-6;p.position.set(v,0,_),p.rotation.y=m>0?-.4:.4,t.add(p)}else if(e%4===0&&e%3!==0&&!i){const u=n.createHighwayBar(1),g=(this.roadWidth*.5+5.6)*1,w=12;u.position.set(g,0,w),u.rotation.y=Math.PI*.5+.28,t.add(u);const m=1,p=n.createSmokingGuysGroup(m),v=(this.roadWidth*.5+2.5)*m,_=w-6;p.position.set(v,0,_),p.rotation.y=-.4,t.add(p)}if(o){const u=n.createUIUCampus(-1);u.position.set(0,0,0),t.add(u)}if(!i&&e%4===2){const l=n.createHighwaySignGantry(this.roadWidth);l.position.set(0,0,-20),t.add(l)}}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const o=this.segments[i];if(o.group.position.z>n){let a=0;for(let r=0;r<this.segments.length;r++)this.segments[r].group.position.z<a&&(a=this.segments[r].group.position.z);o.group.position.z=a-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class Op{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new Wo(11722715,.0038),this.scene.background=new le(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(h,d,f)=>{e.beginPath(),e.arc(h,d,f,0,Math.PI*2),e.arc(h+f*.7,d-f*.2,f*.8,0,Math.PI*2),e.arc(h-f*.7,d-f*.1,f*.7,0,Math.PI*2),e.arc(h+f*1.3,d+f*.1,f*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const o=e.createRadialGradient(256,380,15,256,380,120);o.addColorStop(0,"rgba(255, 255, 240, 1.0)"),o.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),o.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),o.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=o,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const a=new oe(t),r=new Wt(480,32,16),c=new he({map:a,side:He});this.skyDome=new M(r,c),this.scene.add(this.skyDome)}initLighting(){const t=ti();this.hemiLight=new wp(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new Ep(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0;const e=t?1024:2048;this.dirLight.shadow.mapSize.width=e,this.dirLight.shadow.mapSize.height=e,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=t?120:160,this.dirLight.shadow.camera.left=-16,this.dirLight.shadow.camera.right=16,this.dirLight.shadow.camera.top=22,this.dirLight.shadow.camera.bottom=-22,this.dirLight.shadow.bias=-6e-4,this.dirLight.shadow.normalBias=.02,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new G({color:1793568,roughness:.9,flatShading:!0});[-1,1].forEach(e=>{const n=new Mt,i=28;for(let o=0;o<i;o++){const a=12+Math.random()*18,r=6+Math.random()*8,c=new me(r,a,6),h=new M(c,t),d=(55+Math.random()*30)*e,f=-o*18;h.position.set(d,a*.5-2,f),h.rotation.y=Math.random()*Math.PI,n.add(h)}this.scene.add(n),this.treeLines.push(n)})}initFlyingBirds(){this.birdsGroup=new Mt;const t=new he({color:16777215,side:Te}),e=8;for(let n=0;n<e;n++){const i=new Mt,o=new Kt(.8,.35);o.translate(-.4,0,0);const a=new M(o,t);i.add(a);const r=new Kt(.8,.35);r.translate(.4,0,0);const c=new M(r,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:a,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class Gp{constructor(t="sedan"){this.type=t,this.group=new Mt,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new yn,this.collisionSize=new U(1.8,1.4,4.5),this._boxCenter=new U,this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new G({color:t,metalness:.5,roughness:.35}),darkTrim:new G({color:1974308,roughness:.7}),wood:new G({color:8736014,roughness:.9}),glass:new Jo({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new G({color:14671839,metalness:.9,roughness:.2}),headlight:new he({color:16777215}),taillight:new G({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new G({color:1973792,metalness:.1,roughness:.85}),rim:new G({color:12131356,metalness:.5,roughness:.4}),cowFawn:new G({color:9262372,roughness:.7}),cowWhite:new G({color:16119280,roughness:.6}),cowBlack:new G({color:2236962,roughness:.7}),horn:new G({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new H(2,.4,6.2),o=new M(i,n.darkTrim);o.position.set(0,.6,0),this.group.add(o);const a=new H(2.3,.4,.25),r=new M(a,n.darkTrim);r.position.set(0,.6,-3.15),this.group.add(r);const c=new H(1.8,.9,1.5),h=new M(c,n.body);h.position.set(0,1.25,-2.2),this.group.add(h);const d=new H(2.1,1.5,1.5),f=new M(d,n.body);f.position.set(0,1.8,-.7),this.group.add(f);const l=new Kt(1.85,.7),u=new M(l,n.glass);u.position.set(0,1.95,-1.46),this.group.add(u),[-.7,.7].forEach(S=>{const P=new M(new H(.24,.2,.05),n.headlight);P.position.set(S,1.15,-3.18),this.group.add(P)});const g=new H(2.25,.12,3.6),w=new M(g,n.wood);w.position.set(0,1.05,1.5),this.group.add(w),[-1.12,1.12].forEach(S=>{const P=new H(.08,1.3,3.6),L=new M(P,n.wood);L.position.set(S,1.7,1.5),this.group.add(L)});const m=new H(2.25,1.2,.08),p=new M(m,n.wood);p.position.set(0,1.65,3.3),this.group.add(p),[-.85,.85].forEach(S=>{const P=new M(new H(.28,.16,.05),n.taillight);P.position.set(S,.75,3.32),this.group.add(P)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(S=>{const P=new Mt;P.position.set(S.x,2.2,S.z);const L=new H(.42,.45,.6),I=new M(L,S.mat);P.add(I);const B=new H(.3,.25,.25),y=new M(B,n.darkTrim);y.position.set(0,-.08,.38),P.add(y),[-.18,.18].forEach(x=>{const T=new me(.05,.28,6),F=new M(T,n.horn);F.position.set(x,.26,.05),F.rotation.z=x>0?-.35:.35,P.add(F)}),this.group.add(P)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(S=>{const P=this.createSimpleWheel(n,.5,.3);P.position.set(S.x,.5,S.z),this.group.add(P),this.wheels.push(P)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new H(2,.4,6.2),n=new M(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new H(2.1,1.6,1.8),o=new M(i,t.body);o.position.set(0,1.7,-1.8),this.group.add(o);const a=new H(2.3,2.1,3.8),r=new M(a,t.wood);r.position.set(0,1.85,1.2),this.group.add(r),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new H(2.35,2.5,10.2),n=new M(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new Kt(2.15,1.2),o=new M(i,t.glass);o.position.set(0,1.95,-5.12),this.group.add(o),[-1.19,1.19].forEach(r=>{const c=new Kt(9,.9),h=new M(c,t.glass);h.position.set(r,1.9,.2),h.rotation.y=r>0?Math.PI/2:-Math.PI/2,this.group.add(h)}),[-.85,.85].forEach(r=>{const c=new M(new H(.3,.16,.05),t.headlight);c.position.set(r,.75,-5.12),this.group.add(c);const h=new M(new H(.24,.35,.05),t.taillight);h.position.set(r,1.3,5.12),this.group.add(h)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(r=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(r.x,.48,r.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new H(1.88,.4,4.65),o=new M(i,n.darkTrim);o.position.set(0,.42,0),this.group.add(o);const a=new H(1.84,.6,4.6),r=new M(a,n.body);r.position.set(0,.78,0),this.group.add(r);const c=new H(1.58,.65,2.9),h=new M(c,n.body);h.position.set(0,1.3,.2),this.group.add(h),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new H(1.76,.32,4.5),o=new M(i,n.darkTrim);o.position.set(0,.32,0),this.group.add(o);const a=new H(1.72,.44,4.4),r=new M(a,n.body);r.position.set(0,.58,0),this.group.add(r);const c=new H(1.44,.46,2.2),h=new M(c,n.body);h.position.set(0,.92,-.05),this.group.add(h),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,o,a){[-e,e].forEach(r=>{const c=new H(.3,.1,.05),h=new M(c,t.headlight);h.position.set(r,i,n),this.group.add(h)}),[-e,e].forEach(r=>{const c=new H(.32,.12,.05),h=new M(c,t.taillight);h.position.set(r,a,o),this.group.add(h)})}addStandardWheels(t,e,n,i,o){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(r=>{const c=this.createSimpleWheel(t,o,.24);c.position.set(r.x,r.y,r.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new Mt,o=new ct(e,e,n,18);o.rotateZ(Math.PI/2);const a=new M(o,t.tire);i.add(a);const r=new ct(e*.7,e*.7,n+.02,14);r.rotateZ(Math.PI/2);const c=new M(r,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=Yt.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<Yt.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=Yt.LANES[n];if(!t.some(a=>{if(a===this||!a.active)return!1;const r=Math.abs(a.group.position.z-this.group.position.z),c=Math.abs(a.group.position.x-i);return r<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const o=this.targetX-this.group.position.x;Math.abs(o)>.04?this.group.position.x+=Math.sign(o)*Math.min(Math.abs(o),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(o=>{o.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}}class Bp{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"],n=ti()?14:25;for(let i=0;i<n;i++){const o=t[i%t.length],a=new Gp(o);a.despawn(),this.pool.push(a),this.scene.add(a.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,o){const a=t.group.position.z,r=t.group.position.x,c=Math.min(1,n/4500),h=Di.lerp(1.3,.8,c),d=Di.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=Di.lerp(h,d,Math.random()),this.trySpawnTraffic(a,c));for(let f=this.activeVehicles.length-1;f>=0;f--){const l=this.activeVehicles[f];if(l.update(e,i),l.group.position.z>a+Yt.TRAFFIC.DESPAWN_DISTANCE){l.despawn(),this.activeVehicles.splice(f,1);continue}if(!l.hasBeenOvertaken){const u=Math.abs(l.group.position.z-a),g=Math.abs(l.group.position.x-r);u<Yt.SCORING.NEAR_MISS_DIST_Z&&g<Yt.SCORING.NEAR_MISS_DIST_X&&g>.5&&e>l.speed+12?(l.hasBeenOvertaken=!0,o&&o(l)):a<l.group.position.z-4&&(l.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-Yt.TRAFFIC.SPAWN_DISTANCE,i=34,o=new Set;this.activeVehicles.forEach(g=>{Math.abs(g.group.position.z-n)<i&&o.add(g.lane)});const a=[0,1,2].filter(g=>!o.has(g));if(a.length===0||a.length===1&&o.size>=2)return;const r=a[Math.floor(Math.random()*a.length)];let c="cow_truck";const h=Math.random();r===0?c=h>.45?"cow_truck":"truck":r===1?c=h>.5?"bus":h>.25?"cow_truck":"suv":c=h>.45?"bus":"sedan";const d=this.getInactiveVehicle(c);if(!d)return;const f=Yt.TRAFFIC.SPEEDS[c]||[65,85],l=e*35,u=Di.lerp(f[0],f[1],Math.random())+l;if(d.spawn(r,n,u),this.activeVehicles.push(d),e>.5&&Math.random()<.35&&a.length>=2){const g=a.filter(w=>w!==r);if(g.length>0){const w=g[Math.floor(Math.random()*g.length)],m=Math.random()>.5?"cow_truck":"bus",p=this.getInactiveVehicle(m);if(p){const v=n-(28+Math.random()*20),_=Yt.TRAFFIC.SPEEDS[m]||[65,80],S=Di.lerp(_[0],_[1],Math.random())+l;p.spawn(w,v,S),this.activeVehicles.push(p)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const o=this.activeVehicles[i],a=e-o.group.position.z,r=Math.abs(o.group.position.x-n);if(a>4&&a<65&&r<2.4&&!o.isYielding){o.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class kp{constructor(t){this.scene=t,this.isMobile=ti(),this.particles=[],this.poolSize=this.isMobile?70:180,this._smokeThrottle=!1,this.smokeMat=new he({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new he({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new G({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new H(.14,.14,.14),n=new M(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new U,rotVel:new U,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){if(this.isMobile&&(this._smokeThrottle=!this._smokeThrottle,this._smokeThrottle))return;const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){const e=this.isMobile?18:35,n=this.isMobile?10:20,i=this.isMobile?14:25;for(let o=0;o<e;o++){const a=this.getFreeParticle();if(!a)break;a.active=!0,a.type="spark",a.mesh.material=this.sparkMat,a.mesh.visible=!0,a.mesh.scale.set(.12,.12,.12),a.mesh.position.copy(t);const r=Math.random()*Math.PI*2,c=6+Math.random()*14;a.vel.set(Math.cos(r)*c,3+Math.random()*10,Math.sin(r)*c),a.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),a.life=0,a.maxLife=.7+Math.random()*.5,a.scaleSpeed=-.5}for(let o=0;o<n;o++){const a=this.getFreeParticle();if(!a)break;a.active=!0,a.type="debris",a.mesh.material=this.debrisMat,a.mesh.visible=!0,a.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),a.mesh.position.copy(t),a.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),a.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),a.life=0,a.maxLife=1.2,a.scaleSpeed=0}for(let o=0;o<i;o++){const a=this.getFreeParticle();if(!a)break;a.active=!0,a.type="smoke",a.mesh.material=this.smokeMat,a.mesh.visible=!0,a.mesh.scale.set(.8,.8,.8),a.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),a.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),a.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),a.life=0,a.maxLife=1.4,a.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class zp{constructor(t){this.scene=t;const e=ti();this.linesCount=e?25:60,this.group=new Mt;const n=new fc({color:10083839,transparent:!0,opacity:0});this.lineMat=n,this.lines=[];for(let i=0;i<this.linesCount;i++){const o=[new U(0,0,0),new U(0,0,6+Math.random()*8)],a=new Fe().setFromPoints(o),r=new H0(a,n);this.resetLinePos(r),this.group.add(r),this.lines.push(r)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const o=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=o*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const a=t.group.position.z,r=t.group.position.x;this.group.position.set(r,0,a);const c=e/60*i*50;this.lines.forEach(h=>{h.position.z+=c,h.position.z>5&&this.resetLinePos(h)})}}class Vp{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this._lastScore=-1,this._lastDistKm="",this._lastSpeed=-1,this._lastNitro=-1,this._lastBoosting=null,this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),o=document.getElementById("btn-gameover-restart");[i,o].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const a=document.getElementById("btn-pause-menu"),r=document.getElementById("btn-gameover-menu");[a,r].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(l=>{l.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),h=document.getElementById("btn-how-to-play"),d=document.getElementById("btn-modal-close");h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),d&&c&&d.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")});const f=document.querySelectorAll(".veh-btn");f.forEach(l=>{l.addEventListener("click",()=>{f.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(l.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(l=>{l.addEventListener("click",u=>{u.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),o=document.getElementById("btn-touch-nitro");document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(r=>{r.addEventListener("contextmenu",c=>c.preventDefault())});const a=(r,c,h=null)=>{if(!r)return;const d=new Set,f=(u,g)=>{g&&g.cancelable&&g.preventDefault(),g&&g.stopPropagation(),document.body.classList.add("touch-active");const w=d.size===0;d.add(u),r.classList.add("active"),w&&(c(!0),h&&h())},l=(u,g)=>{g&&g.cancelable&&g.preventDefault(),g&&g.stopPropagation(),d.has(u)&&(d.delete(u),d.size===0&&(r.classList.remove("active"),c(!1)))};window.PointerEvent?(r.addEventListener("pointerdown",u=>{f(u.pointerId,u);try{r.setPointerCapture&&r.setPointerCapture(u.pointerId)}catch{}},{passive:!1}),r.addEventListener("pointerup",u=>{try{r.releasePointerCapture&&r.releasePointerCapture(u.pointerId)}catch{}l(u.pointerId,u)},{passive:!1}),r.addEventListener("pointercancel",u=>{try{r.releasePointerCapture&&r.releasePointerCapture(u.pointerId)}catch{}l(u.pointerId,u)},{passive:!1}),r.addEventListener("lostpointercapture",u=>{l(u.pointerId,u)},{passive:!1}),window.addEventListener("pointerup",u=>{l(u.pointerId,u)},{passive:!0}),window.addEventListener("pointercancel",u=>{l(u.pointerId,u)},{passive:!0})):(r.addEventListener("touchstart",u=>{u.cancelable&&u.preventDefault(),u.stopPropagation();for(let g=0;g<u.changedTouches.length;g++)f(u.changedTouches[g].identifier,u)},{passive:!1}),r.addEventListener("touchend",u=>{u.cancelable&&u.preventDefault(),u.stopPropagation();for(let g=0;g<u.changedTouches.length;g++)l(u.changedTouches[g].identifier,u)},{passive:!1}),r.addEventListener("touchcancel",u=>{for(let g=0;g<u.changedTouches.length;g++)l(u.changedTouches[g].identifier,u)},{passive:!1}))};a(t,r=>{this.onSteerLeft&&this.onSteerLeft(r)}),a(e,r=>{this.onSteerRight&&this.onSteerRight(r)}),a(n,r=>{this.onBrake&&this.onBrake(r)},()=>this.soundManager.playAirBrake()),a(i,r=>{this.onAccelerate&&this.onAccelerate(r)}),a(o,r=>{this.onNitro&&this.onNitro(r)}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===_e.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case _e.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case _e.PLAYING:this.hudLayer.classList.remove("hidden");break;case _e.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case _e.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){const e=Math.floor(t.score);this._lastScore!==e&&this.scoreVal&&(this._lastScore=e,this.scoreVal.textContent=e.toLocaleString());const n=`${(t.distanceMeters/1e3).toFixed(2)} km`;this._lastDistKm!==n&&this.distVal&&(this._lastDistKm=n,this.distVal.textContent=n);const i=Math.round(t.speedKmh);this._lastSpeed!==i&&this.speedVal&&(this._lastSpeed=i,this.speedVal.textContent=i);const o=Math.round(t.nitro);this._lastNitro!==o&&this.nitroBar&&(this._lastNitro=o,this.nitroBar.style.width=`${o}%`),this._lastBoosting!==t.isBoosting&&this.nitroBar&&(this._lastBoosting=t.isBoosting,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting"))}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class Hp{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new Ap,this.inputManager=new Rp,this.soundManager=new Lp,this.uiManager=new Vp(this.soundManager),this.scene=new V0,this.camera=new We(Yt.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.isMobile=ti(),this.renderer=new uc({antialias:!this.isMobile,powerPreference:"high-performance",precision:this.isMobile?"mediump":"highp",stencil:!1,depth:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight);const t=this.isMobile?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.isMobile?Go:Ia,this.renderer.toneMapping=Ua,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new Op(this.scene),this.roadManager=new Fp(this.scene),this.vehicles={truck:new Ip,rickshaw:new Dp,cng:new Up},Object.values(this.vehicles).forEach(e=>{this.scene.add(e.group),e.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new Bp(this.scene),this.particleSystem=new kp(this.scene),this.speedLines=new zp(this.scene),this.cameraController=new Pp(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new Tp,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this._leftRearPos=new U,this._rightRearPos=new U,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(_e.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){const t=()=>{const n=window.innerWidth,i=window.innerHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i),this.isMobile=ti();const o=this.isMobile?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(o)};window.addEventListener("resize",t),window.addEventListener("orientationchange",()=>{setTimeout(t,120)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=n=>this.setVehicle(n);const e=()=>{this.gameState.state===_e.PLAYING?(this.gameState.state=_e.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(_e.PAUSED,this.gameState)):this.gameState.state===_e.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=e,this.inputManager.onPauseToggle=e,this.inputManager.onRestart=()=>{(this.gameState.state===_e.GAMEOVER||this.gameState.state===_e.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=n=>this.inputManager.setSteerLeft(n),this.uiManager.onSteerRight=n=>this.inputManager.setSteerRight(n),this.uiManager.onAccelerate=n=>this.inputManager.setAccelerate(n),this.uiManager.onBrake=n=>this.inputManager.setBrake(n),this.uiManager.onNitro=n=>this.inputManager.setNitro(n)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(_e.PLAYING,this.gameState)}resumeGame(){this.gameState.state===_e.PAUSED&&(this.gameState.state=_e.PLAYING,this.uiManager.setScreen(_e.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=_e.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(_e.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(_e.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===_e.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===_e.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const o=this.inputManager.keys.brake;o&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=o,this.gameState.update(e,this.inputManager);const a=this.gameState.speedKmh*1e3/3600;this.playerVehicle.group.position.z-=a*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,o,this.gameState.isBoosting,e),o&&this.gameState.speedKmh>50&&(this._leftRearPos.copy(this.playerVehicle.group.position),this._leftRearPos.x-=.85,this._leftRearPos.z+=1.6,this._rightRearPos.copy(this.playerVehicle.group.position),this._rightRearPos.x+=.85,this._rightRearPos.z+=1.6,this.particleSystem.emitTireSmoke(this._leftRearPos),this.particleSystem.emitTireSmoke(this._rightRearPos)),this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const h=this.gameState.addNearMiss();this.soundManager.playNearMiss(h.combo),this.uiManager.showNearMiss(h.bonus,h.combo)});const r=this.trafficManager.checkCollision(this.playerVehicle);r&&this.onCrash(r),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,o,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===_e.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Hp});
//# sourceMappingURL=index-lkcnZxW-.js.map
