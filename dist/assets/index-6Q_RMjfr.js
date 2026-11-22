(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="160",bc=0,tr=1,Ec=2,Go=1,Ia=2,vn=3,Nn=0,He=1,Ee=2,In=0,Si=1,er=2,nr=3,ir=4,Tc=5,Xn=100,Ac=101,Rc=102,sr=103,or=104,Pc=200,Cc=201,Lc=202,Ic=203,Ao=204,Ro=205,Dc=206,Uc=207,Nc=208,Fc=209,Oc=210,Gc=211,Bc=212,kc=213,zc=214,Vc=0,Hc=1,Wc=2,Ts=3,Xc=4,qc=5,Yc=6,Zc=7,Da=0,Kc=1,Jc=2,Dn=0,jc=1,$c=2,Qc=3,Ua=4,tl=5,el=6,Na=300,bi=301,Ei=302,Po=303,Co=304,Us=306,Re=1e3,sn=1001,Lo=1002,Ve=1003,rr=1004,Xs=1005,je=1006,nl=1007,Xi=1008,Un=1009,il=1010,sl=1011,Bo=1012,Fa=1013,Pn=1014,Cn=1015,qi=1016,Oa=1017,Ga=1018,Zn=1020,ol=1021,on=1023,rl=1024,al=1025,Kn=1026,Ti=1027,cl=1028,Ba=1029,ll=1030,ka=1031,za=1033,qs=33776,Ys=33777,Zs=33778,Ks=33779,ar=35840,cr=35841,lr=35842,hr=35843,Va=36196,dr=37492,ur=37496,fr=37808,pr=37809,mr=37810,gr=37811,_r=37812,Mr=37813,vr=37814,xr=37815,wr=37816,Sr=37817,yr=37818,br=37819,Er=37820,Tr=37821,Js=36492,Ar=36494,Rr=36495,hl=36283,Pr=36284,Cr=36285,Lr=36286,Ha=3e3,Jn=3001,dl=3200,ul=3201,Wa=0,fl=1,$e="",Ne="srgb",wn="srgb-linear",ko="display-p3",Ns="display-p3-linear",As="linear",_e="srgb",Rs="rec709",Ps="p3",ni=7680,Ir=519,pl=512,ml=513,gl=514,Xa=515,_l=516,Ml=517,vl=518,xl=519,Dr=35044,Ur="300 es",Io=1035,xn=2e3,Cs=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nr=1234567;const Bi=Math.PI/180,Ai=180/Math.PI;function ei(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function zo(s,t){return(s%t+t)%t}function wl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Sl(s,t,e){return s!==t?(e-s)/(t-s):0}function ki(s,t,e){return(1-e)*s+e*t}function yl(s,t,e,n){return ki(s,t,1-Math.exp(-e*n))}function bl(s,t=1){return t-Math.abs(zo(s,t*2)-t)}function El(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Tl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Al(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Rl(s,t){return s+Math.random()*(t-s)}function Pl(s){return s*(.5-Math.random())}function Cl(s){s!==void 0&&(Nr=s);let t=Nr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ll(s){return s*Bi}function Il(s){return s*Ai}function Do(s){return(s&s-1)===0&&s!==0}function Dl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ls(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ul(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),h=o((t+n)/2),d=r((t+n)/2),f=o((t-n)/2),l=r((t-n)/2),u=o((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(a*d,c*f,c*l,a*h);break;case"YZY":s.set(c*l,a*d,c*f,a*h);break;case"ZXZ":s.set(c*f,c*l,a*d,a*h);break;case"XZX":s.set(a*d,c*g,c*u,a*h);break;case"YXY":s.set(c*u,a*d,c*g,a*h);break;case"ZYZ":s.set(c*g,c*u,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Di={DEG2RAD:Bi,RAD2DEG:Ai,generateUUID:ei,clamp:Ue,euclideanModulo:zo,mapLinear:wl,inverseLerp:Sl,lerp:ki,damp:yl,pingpong:bl,smoothstep:El,smootherstep:Tl,randInt:Al,randFloat:Rl,randFloatSpread:Pl,seededRandom:Cl,degToRad:Ll,radToDeg:Il,isPowerOfTwo:Do,ceilPowerOfTwo:Dl,floorPowerOfTwo:Ls,setQuaternionFromProperEuler:Ul,normalize:ke,denormalize:Mi};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(t,e,n,i,o,r,a,c,h){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,h)}set(t,e,n,i,o,r,a,c,h){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=o,d[5]=c,d[6]=n,d[7]=r,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],h=n[1],d=n[4],f=n[7],l=n[2],u=n[5],g=n[8],x=i[0],m=i[3],p=i[6],M=i[1],_=i[4],b=i[7],C=i[2],L=i[5],I=i[8];return o[0]=r*x+a*M+c*C,o[3]=r*m+a*_+c*L,o[6]=r*p+a*b+c*I,o[1]=h*x+d*M+f*C,o[4]=h*m+d*_+f*L,o[7]=h*p+d*b+f*I,o[2]=l*x+u*M+g*C,o[5]=l*m+u*_+g*L,o[8]=l*p+u*b+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],d=t[8];return e*r*d-e*a*h-n*o*d+n*a*c+i*o*h-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],d=t[8],f=d*r-a*h,l=a*c-d*o,u=h*o-r*c,g=e*f+n*l+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(i*h-d*n)*x,t[2]=(a*n-i*r)*x,t[3]=l*x,t[4]=(d*e-i*c)*x,t[5]=(i*o-a*e)*x,t[6]=u*x,t[7]=(n*c-h*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*r+h*a)+r+t,-i*h,i*c,-i*(-h*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(js.makeScale(t,e)),this}rotate(t){return this.premultiply(js.makeRotation(-t)),this}translate(t,e){return this.premultiply(js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const js=new ae;function qa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nl(){const s=Is("canvas");return s.style.display="block",s}const Fr={};function zi(s){s in Fr||(Fr[s]=!0,console.warn(s))}const Or=new ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gr=new ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$i={[wn]:{transfer:As,primaries:Rs,toReference:s=>s,fromReference:s=>s},[Ne]:{transfer:_e,primaries:Rs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ns]:{transfer:As,primaries:Ps,toReference:s=>s.applyMatrix3(Gr),fromReference:s=>s.applyMatrix3(Or)},[ko]:{transfer:_e,primaries:Ps,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Gr),fromReference:s=>s.applyMatrix3(Or).convertLinearToSRGB()}},Fl=new Set([wn,Ns]),me={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Fl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=$i[t].toReference,i=$i[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return $i[s].primaries},getTransfer:function(s){return s===$e?As:$i[s].transfer}};function yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ii;class Ya{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Is("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=yi(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ol=0;class Za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Qs(i[r].image)):o.push(Qs(i[r]))}else o=Qs(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Qs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ya.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gl=0;class Xe extends Pi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=sn,i=sn,o=je,r=Xi,a=on,c=Un,h=Xe.DEFAULT_ANISOTROPY,d=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=ei(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Jn?Ne:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Na)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Re:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Re:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?Jn:Ha}set encoding(t){zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Jn?Ne:$e}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Na;Xe.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,h=c[0],d=c[4],f=c[8],l=c[1],u=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(d-l)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+l)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(h+1)/2,b=(u+1)/2,C=(p+1)/2,L=(d+l)/4,I=(f+x)/4,z=(g+m)/4;return _>b&&_>C?_<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(_),i=L/n,o=I/n):b>C?b<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(b),n=L/i,o=z/i):C<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(C),n=I/o,i=z/o),this.set(n,i,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(l-d)*(l-d));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-x)/M,this.z=(l-d)/M,this.w=Math.acos((h+u+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bl extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?Ne:$e),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ka extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],h=n[i+1],d=n[i+2],f=n[i+3];const l=o[r+0],u=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=l,t[e+1]=u,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==l||h!==u||d!==g){let m=1-a;const p=c*l+h*u+d*g+f*x,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const C=Math.sqrt(_),L=Math.atan2(C,p*M);m=Math.sin(m*L)/C,a=Math.sin(a*L)/C}const b=a*M;if(c=c*m+l*b,h=h*m+u*b,d=d*m+g*b,f=f*m+x*b,m===1-a){const C=1/Math.sqrt(c*c+h*h+d*d+f*f);c*=C,h*=C,d*=C,f*=C}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],h=n[i+2],d=n[i+3],f=o[r],l=o[r+1],u=o[r+2],g=o[r+3];return t[e]=a*g+d*f+c*u-h*l,t[e+1]=c*g+d*l+h*f-a*u,t[e+2]=h*g+d*u+a*l-c*f,t[e+3]=d*g-a*f-c*l-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,h=a(n/2),d=a(i/2),f=a(o/2),l=c(n/2),u=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=l*d*f+h*u*g,this._y=h*u*f-l*d*g,this._z=h*d*g+l*u*f,this._w=h*d*f-l*u*g;break;case"YXZ":this._x=l*d*f+h*u*g,this._y=h*u*f-l*d*g,this._z=h*d*g-l*u*f,this._w=h*d*f+l*u*g;break;case"ZXY":this._x=l*d*f-h*u*g,this._y=h*u*f+l*d*g,this._z=h*d*g+l*u*f,this._w=h*d*f-l*u*g;break;case"ZYX":this._x=l*d*f-h*u*g,this._y=h*u*f+l*d*g,this._z=h*d*g-l*u*f,this._w=h*d*f+l*u*g;break;case"YZX":this._x=l*d*f+h*u*g,this._y=h*u*f+l*d*g,this._z=h*d*g-l*u*f,this._w=h*d*f-l*u*g;break;case"XZY":this._x=l*d*f-h*u*g,this._y=h*u*f-l*d*g,this._z=h*d*g+l*u*f,this._w=h*d*f+l*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],h=e[2],d=e[6],f=e[10],l=n+a+f;if(l>0){const u=.5/Math.sqrt(l+1);this._w=.25/u,this._x=(d-c)*u,this._y=(o-h)*u,this._z=(r-i)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(d-c)/u,this._x=.25*u,this._y=(i+r)/u,this._z=(o+h)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(o-h)/u,this._x=(i+r)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(r-i)/u,this._x=(o+h)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+r*a+i*h-o*c,this._y=i*d+r*c+o*a-n*h,this._z=o*d+r*h+n*c-i*a,this._w=r*d-n*a-i*c-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-e;return this._w=u*r+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,a),f=Math.sin((1-e)*d)/h,l=Math.sin(e*d)/h;return this._w=r*f+this._w*l,this._x=n*f+this._x*l,this._y=i*f+this._y*l,this._z=o*f+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(o),n*Math.cos(o),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Br.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Br.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,h=2*(r*i-a*n),d=2*(a*e-o*i),f=2*(o*n-r*e);return this.x=e+c*h+r*f-a*d,this.y=n+c*d+a*h-o*f,this.z=i+c*f+o*d-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new N,Br=new Ji;class Sn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Qe):Qe.fromBufferAttribute(o,r),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),ts.subVectors(this.max,Ui),si.subVectors(t.a,Ui),oi.subVectors(t.b,Ui),ri.subVectors(t.c,Ui),bn.subVectors(oi,si),En.subVectors(ri,oi),Bn.subVectors(si,ri);let e=[0,-bn.z,bn.y,0,-En.z,En.y,0,-Bn.z,Bn.y,bn.z,0,-bn.x,En.z,0,-En.x,Bn.z,0,-Bn.x,-bn.y,bn.x,0,-En.y,En.x,0,-Bn.y,Bn.x,0];return!eo(e,si,oi,ri,ts)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,si,oi,ri,ts))?!1:(es.crossVectors(bn,En),e=[es.x,es.y,es.z],eo(e,si,oi,ri,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new N,new N,new N,new N,new N,new N,new N,new N],Qe=new N,Qi=new Sn,si=new N,oi=new N,ri=new N,bn=new N,En=new N,Bn=new N,Ui=new N,ts=new N,es=new N,kn=new N;function eo(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){kn.fromArray(s,o);const a=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),c=t.dot(kn),h=e.dot(kn),d=n.dot(kn);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>a)return!1}return!0}const zl=new Sn,Ni=new N,no=new N;class Fs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zl.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);const e=Ni.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(no)),this.expandByPoint(Ni.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new N,io=new N,ns=new N,Tn=new N,so=new N,is=new N,oo=new N;class Ja{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){io.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(io);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ns),a=Tn.dot(this.direction),c=-Tn.dot(ns),h=Tn.lengthSq(),d=Math.abs(1-r*r);let f,l,u,g;if(d>0)if(f=r*c-a,l=r*a-c,g=o*d,f>=0)if(l>=-g)if(l<=g){const x=1/d;f*=x,l*=x,u=f*(f+r*l+2*a)+l*(r*f+l+2*c)+h}else l=o,f=Math.max(0,-(r*l+a)),u=-f*f+l*(l+2*c)+h;else l=-o,f=Math.max(0,-(r*l+a)),u=-f*f+l*(l+2*c)+h;else l<=-g?(f=Math.max(0,-(-r*o+a)),l=f>0?-o:Math.min(Math.max(-o,-c),o),u=-f*f+l*(l+2*c)+h):l<=g?(f=0,l=Math.min(Math.max(-o,-c),o),u=l*(l+2*c)+h):(f=Math.max(0,-(r*o+a)),l=f>0?o:Math.min(Math.max(-o,-c),o),u=-f*f+l*(l+2*c)+h);else l=r>0?-o:o,f=Math.max(0,-(r*l+a)),u=-f*f+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(io).addScaledVector(ns,l),u}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,l=this.origin;return h>=0?(n=(t.min.x-l.x)*h,i=(t.max.x-l.x)*h):(n=(t.max.x-l.x)*h,i=(t.min.x-l.x)*h),d>=0?(o=(t.min.y-l.y)*d,r=(t.max.y-l.y)*d):(o=(t.max.y-l.y)*d,r=(t.min.y-l.y)*d),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),f>=0?(a=(t.min.z-l.z)*f,c=(t.max.z-l.z)*f):(a=(t.max.z-l.z)*f,c=(t.min.z-l.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,o){so.subVectors(e,t),is.subVectors(n,t),oo.crossVectors(so,is);let r=this.direction.dot(oo),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Tn.subVectors(this.origin,t);const c=a*this.direction.dot(is.crossVectors(Tn,is));if(c<0)return null;const h=a*this.direction.dot(so.cross(Tn));if(h<0||c+h>r)return null;const d=-a*Tn.dot(oo);return d<0?null:this.at(d/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,i,o,r,a,c,h,d,f,l,u,g,x,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,h,d,f,l,u,g,x,m)}set(t,e,n,i,o,r,a,c,h,d,f,l,u,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=h,p[6]=d,p[10]=f,p[14]=l,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ai.setFromMatrixColumn(t,0).length(),o=1/ai.setFromMatrixColumn(t,1).length(),r=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),d=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const l=r*d,u=r*f,g=a*d,x=a*f;e[0]=c*d,e[4]=-c*f,e[8]=h,e[1]=u+g*h,e[5]=l-x*h,e[9]=-a*c,e[2]=x-l*h,e[6]=g+u*h,e[10]=r*c}else if(t.order==="YXZ"){const l=c*d,u=c*f,g=h*d,x=h*f;e[0]=l+x*a,e[4]=g*a-u,e[8]=r*h,e[1]=r*f,e[5]=r*d,e[9]=-a,e[2]=u*a-g,e[6]=x+l*a,e[10]=r*c}else if(t.order==="ZXY"){const l=c*d,u=c*f,g=h*d,x=h*f;e[0]=l-x*a,e[4]=-r*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=r*d,e[9]=x-l*a,e[2]=-r*h,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const l=r*d,u=r*f,g=a*d,x=a*f;e[0]=c*d,e[4]=g*h-u,e[8]=l*h+x,e[1]=c*f,e[5]=x*h+l,e[9]=u*h-g,e[2]=-h,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const l=r*c,u=r*h,g=a*c,x=a*h;e[0]=c*d,e[4]=x-l*f,e[8]=g*f+u,e[1]=f,e[5]=r*d,e[9]=-a*d,e[2]=-h*d,e[6]=u*f+g,e[10]=l-x*f}else if(t.order==="XZY"){const l=r*c,u=r*h,g=a*c,x=a*h;e[0]=c*d,e[4]=-f,e[8]=h*d,e[1]=l*f+x,e[5]=r*d,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*d,e[10]=x*f+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vl,t,Hl)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),An.crossVectors(n,Ye),An.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),An.crossVectors(n,Ye)),An.normalize(),ss.crossVectors(Ye,An),i[0]=An.x,i[4]=ss.x,i[8]=Ye.x,i[1]=An.y,i[5]=ss.y,i[9]=Ye.y,i[2]=An.z,i[6]=ss.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],h=n[12],d=n[1],f=n[5],l=n[9],u=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],_=n[7],b=n[11],C=n[15],L=i[0],I=i[4],z=i[8],y=i[12],w=i[1],T=i[5],V=i[9],it=i[13],D=i[2],G=i[6],H=i[10],F=i[14],tt=i[3],Z=i[7],X=i[11],K=i[15];return o[0]=r*L+a*w+c*D+h*tt,o[4]=r*I+a*T+c*G+h*Z,o[8]=r*z+a*V+c*H+h*X,o[12]=r*y+a*it+c*F+h*K,o[1]=d*L+f*w+l*D+u*tt,o[5]=d*I+f*T+l*G+u*Z,o[9]=d*z+f*V+l*H+u*X,o[13]=d*y+f*it+l*F+u*K,o[2]=g*L+x*w+m*D+p*tt,o[6]=g*I+x*T+m*G+p*Z,o[10]=g*z+x*V+m*H+p*X,o[14]=g*y+x*it+m*F+p*K,o[3]=M*L+_*w+b*D+C*tt,o[7]=M*I+_*T+b*G+C*Z,o[11]=M*z+_*V+b*H+C*X,o[15]=M*y+_*it+b*F+C*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],h=t[13],d=t[2],f=t[6],l=t[10],u=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+o*c*f-i*h*f-o*a*l+n*h*l+i*a*u-n*c*u)+x*(+e*c*u-e*h*l+o*r*l-i*r*u+i*h*d-o*c*d)+m*(+e*h*f-e*a*u-o*r*f+n*r*u+o*a*d-n*h*d)+p*(-i*a*d-e*c*f+e*a*l+i*r*f-n*r*l+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],d=t[8],f=t[9],l=t[10],u=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=f*m*h-x*l*h+x*c*u-a*m*u-f*c*p+a*l*p,_=g*l*h-d*m*h-g*c*u+r*m*u+d*c*p-r*l*p,b=d*x*h-g*f*h+g*a*u-r*x*u-d*a*p+r*f*p,C=g*f*c-d*x*c-g*a*l+r*x*l+d*a*m-r*f*m,L=e*M+n*_+i*b+o*C;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=M*I,t[1]=(x*l*o-f*m*o-x*i*u+n*m*u+f*i*p-n*l*p)*I,t[2]=(a*m*o-x*c*o+x*i*h-n*m*h-a*i*p+n*c*p)*I,t[3]=(f*c*o-a*l*o-f*i*h+n*l*h+a*i*u-n*c*u)*I,t[4]=_*I,t[5]=(d*m*o-g*l*o+g*i*u-e*m*u-d*i*p+e*l*p)*I,t[6]=(g*c*o-r*m*o-g*i*h+e*m*h+r*i*p-e*c*p)*I,t[7]=(r*l*o-d*c*o+d*i*h-e*l*h-r*i*u+e*c*u)*I,t[8]=b*I,t[9]=(g*f*o-d*x*o-g*n*u+e*x*u+d*n*p-e*f*p)*I,t[10]=(r*x*o-g*a*o+g*n*h-e*x*h-r*n*p+e*a*p)*I,t[11]=(d*a*o-r*f*o-d*n*h+e*f*h+r*n*u-e*a*u)*I,t[12]=C*I,t[13]=(d*x*i-g*f*i+g*n*l-e*x*l-d*n*m+e*f*m)*I,t[14]=(g*a*i-r*x*i-g*n*c+e*x*c+r*n*m-e*a*m)*I,t[15]=(r*f*i-d*a*i+d*n*c-e*f*c-r*n*l+e*a*l)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,h=o*r,d=o*a;return this.set(h*r+n,h*a-i*c,h*c+i*a,0,h*a+i*c,d*a+n,d*c-i*r,0,h*c-i*a,d*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,h=o+o,d=r+r,f=a+a,l=o*h,u=o*d,g=o*f,x=r*d,m=r*f,p=a*f,M=c*h,_=c*d,b=c*f,C=n.x,L=n.y,I=n.z;return i[0]=(1-(x+p))*C,i[1]=(u+b)*C,i[2]=(g-_)*C,i[3]=0,i[4]=(u-b)*L,i[5]=(1-(l+p))*L,i[6]=(m+M)*L,i[7]=0,i[8]=(g+_)*I,i[9]=(m-M)*I,i[10]=(1-(l+x))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=ai.set(i[0],i[1],i[2]).length();const r=ai.set(i[4],i[5],i[6]).length(),a=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const h=1/o,d=1/r,f=1/a;return tn.elements[0]*=h,tn.elements[1]*=h,tn.elements[2]*=h,tn.elements[4]*=d,tn.elements[5]*=d,tn.elements[6]*=d,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,e.setFromRotationMatrix(tn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=xn){const c=this.elements,h=2*o/(e-t),d=2*o/(n-i),f=(e+t)/(e-t),l=(n+i)/(n-i);let u,g;if(a===xn)u=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Cs)u=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=xn){const c=this.elements,h=1/(e-t),d=1/(n-i),f=1/(r-o),l=(e+t)*h,u=(n+i)*d;let g,x;if(a===xn)g=(r+o)*f,x=-2*f;else if(a===Cs)g=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ai=new N,tn=new ye,Vl=new N(0,0,0),Hl=new N(1,1,1),An=new N,ss=new N,Ye=new N,kr=new ye,zr=new Ji;class Os{constructor(t=0,e=0,n=0,i=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],h=i[5],d=i[9],f=i[2],l=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(l,u),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zr.setFromEuler(this),this.setFromQuaternion(zr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wl=0;const Vr=new N,ci=new Ji,gn=new ye,os=new N,Fi=new N,Xl=new N,ql=new Ji,Hr=new N(1,0,0),Wr=new N(0,1,0),Xr=new N(0,0,1),Yl={type:"added"},Zl={type:"removed"};class Ae extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new N,e=new Os,n=new Ji,i=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new ae}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Hr,t)}rotateY(t){return this.rotateOnAxis(Wr,t)}rotateZ(t){return this.rotateOnAxis(Xr,t)}translateOnAxis(t,e){return Vr.copy(t).applyQuaternion(this.quaternion),this.position.add(Vr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hr,t)}translateY(t){return this.translateOnAxis(Wr,t)}translateZ(t){return this.translateOnAxis(Xr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?os.copy(t):os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Fi,os,this.up):gn.lookAt(os,Fi,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(gn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,Xl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++){const a=i[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),h=r(t.textures),d=r(t.images),f=r(t.shapes),l=r(t.skeletons),u=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),l.length>0&&(n.skeletons=l),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const h in a){const d=a[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new N(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new N,_n=new N,ro=new N,Mn=new N,li=new N,hi=new N,qr=new N,ao=new N,co=new N,lo=new N;let rs=!1;class nn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){en.subVectors(i,e),_n.subVectors(n,e),ro.subVectors(t,e);const r=en.dot(en),a=en.dot(_n),c=en.dot(ro),h=_n.dot(_n),d=_n.dot(ro),f=r*h-a*a;if(f===0)return o.set(0,0,0),null;const l=1/f,u=(h*c-a*d)*l,g=(r*d-a*c)*l;return o.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,i,o,r,a,c){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),this.getInterpolation(t,e,n,i,o,r,a,c)}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Mn.x),c.addScaledVector(r,Mn.y),c.addScaledVector(a,Mn.z),c)}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),_n.subVectors(t,e),en.cross(_n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),en.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,o){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}getInterpolation(t,e,n,i,o){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;li.subVectors(i,n),hi.subVectors(o,n),ao.subVectors(t,n);const c=li.dot(ao),h=hi.dot(ao);if(c<=0&&h<=0)return e.copy(n);co.subVectors(t,i);const d=li.dot(co),f=hi.dot(co);if(d>=0&&f<=d)return e.copy(i);const l=c*f-d*h;if(l<=0&&c>=0&&d<=0)return r=c/(c-d),e.copy(n).addScaledVector(li,r);lo.subVectors(t,o);const u=li.dot(lo),g=hi.dot(lo);if(g>=0&&u<=g)return e.copy(o);const x=u*h-c*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(hi,a);const m=d*g-u*f;if(m<=0&&f-d>=0&&u-g>=0)return qr.subVectors(o,i),a=(f-d)/(f-d+(u-g)),e.copy(i).addScaledVector(qr,a);const p=1/(m+x+l);return r=x*p,a=l*p,e.copy(n).addScaledVector(li,r).addScaledVector(hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $a={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},as={h:0,s:0,l:0};function ho(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=zo(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ho(r,o,t+1/3),this.g=ho(r,o,t),this.b=ho(r,o,t-1/3)}return me.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=$a[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return me.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ue(Be.r*255,0,255))*65536+Math.round(Ue(Be.g*255,0,255))*256+Math.round(Ue(Be.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,o=Be.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,h;const d=(a+r)/2;if(a===r)c=0,h=0;else{const f=r-a;switch(h=d<=.5?f/(r+a):f/(2-r-a),r){case n:c=(i-o)/f+(i<o?6:0);break;case i:c=(o-n)/f+2;break;case o:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ne){me.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(as);const n=ki(Rn.h,as.h,e),i=ki(Rn.s,as.s,e),o=ki(Rn.l,as.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new ce;ce.NAMES=$a;let Kl=0;class Ci extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Si,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Ro,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ir,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ir&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class he extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new N,cs=new It;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix3(t),this.setXY(e,cs.x,cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),o=ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dr&&(t.usage=this.usage),t}}class Qa extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tc extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jl=0;const Je=new ye,uo=new Ae,di=new N,Ze=new Sn,Oi=new Sn,De=new N;class Fe extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qa(t)?tc:Qa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ae().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Ze.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Oi.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(Ze.min,Oi.min),Ze.expandByPoint(De),De.addVectors(Ze.max,Oi.max),Ze.expandByPoint(De)):(Ze.expandByPoint(Oi.min),Ze.expandByPoint(Oi.max))}Ze.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)De.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(De));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)De.fromBufferAttribute(a,h),c&&(di.fromBufferAttribute(t,h),De.add(di)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,o=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,h=[],d=[];for(let w=0;w<a;w++)h[w]=new N,d[w]=new N;const f=new N,l=new N,u=new N,g=new It,x=new It,m=new It,p=new N,M=new N;function _(w,T,V){f.fromArray(i,w*3),l.fromArray(i,T*3),u.fromArray(i,V*3),g.fromArray(r,w*2),x.fromArray(r,T*2),m.fromArray(r,V*2),l.sub(f),u.sub(f),x.sub(g),m.sub(g);const it=1/(x.x*m.y-m.x*x.y);isFinite(it)&&(p.copy(l).multiplyScalar(m.y).addScaledVector(u,-x.y).multiplyScalar(it),M.copy(u).multiplyScalar(x.x).addScaledVector(l,-m.x).multiplyScalar(it),h[w].add(p),h[T].add(p),h[V].add(p),d[w].add(M),d[T].add(M),d[V].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let w=0,T=b.length;w<T;++w){const V=b[w],it=V.start,D=V.count;for(let G=it,H=it+D;G<H;G+=3)_(n[G+0],n[G+1],n[G+2])}const C=new N,L=new N,I=new N,z=new N;function y(w){I.fromArray(o,w*3),z.copy(I);const T=h[w];C.copy(T),C.sub(I.multiplyScalar(I.dot(T))).normalize(),L.crossVectors(z,T);const it=L.dot(d[w])<0?-1:1;c[w*4]=C.x,c[w*4+1]=C.y,c[w*4+2]=C.z,c[w*4+3]=it}for(let w=0,T=b.length;w<T;++w){const V=b[w],it=V.start,D=V.count;for(let G=it,H=it+D;G<H;G+=3)y(n[G+0]),y(n[G+1]),y(n[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,u=n.count;l<u;l++)n.setXYZ(l,0,0,0);const i=new N,o=new N,r=new N,a=new N,c=new N,h=new N,d=new N,f=new N;if(t)for(let l=0,u=t.count;l<u;l+=3){const g=t.getX(l+0),x=t.getX(l+1),m=t.getX(l+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),d.subVectors(r,o),f.subVectors(i,o),d.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(d),c.add(d),h.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,u=e.count;l<u;l+=3)i.fromBufferAttribute(e,l+0),o.fromBufferAttribute(e,l+1),r.fromBufferAttribute(e,l+2),d.subVectors(r,o),f.subVectors(i,o),d.cross(f),n.setXYZ(l+0,d.x,d.y,d.z),n.setXYZ(l+1,d.x,d.y,d.z),n.setXYZ(l+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,c){const h=a.array,d=a.itemSize,f=a.normalized,l=new h.constructor(c.length*d);let u=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*d;for(let p=0;p<d;p++)l[g++]=h[u++]}return new hn(l,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],h=t(c,n);e.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const c=[],h=o[a];for(let d=0,f=h.length;d<f;d++){const l=h[d],u=t(l,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const h=r[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let f=0,l=h.length;f<l;f++){const u=h[f];d.push(u.toJSON(t.data))}d.length>0&&(i[c]=d,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(e))}const o=t.morphAttributes;for(const h in o){const d=[],f=o[h];for(let l=0,u=f.length;l<u;l++)d.push(f[l].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,d=r.length;h<d;h++){const f=r[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yr=new ye,zn=new Ja,ls=new Fs,Zr=new N,ui=new N,fi=new N,pi=new N,fo=new N,hs=new N,ds=new It,us=new It,fs=new It,Kr=new N,Jr=new N,jr=new N,ps=new N,ms=new N;class v extends Ae{constructor(t=new Fe,e=new he){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){hs.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const d=a[c],f=o[c];d!==0&&(fo.fromBufferAttribute(f,t),r?hs.addScaledVector(fo,d):hs.addScaledVector(fo.sub(e),d))}e.add(hs)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(o),zn.copy(t.ray).recast(t.near),!(ls.containsPoint(zn.origin)===!1&&(zn.intersectSphere(ls,Zr)===null||zn.origin.distanceToSquared(Zr)>(t.far-t.near)**2))&&(Yr.copy(o).invert(),zn.copy(t.ray).applyMatrix4(Yr),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,h=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,l=o.groups,u=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=l.length;g<x;g++){const m=l[g],p=r[m.materialIndex],M=Math.max(m.start,u.start),_=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let b=M,C=_;b<C;b+=3){const L=a.getX(b),I=a.getX(b+1),z=a.getX(b+2);i=gs(this,p,t,n,h,d,f,L,I,z),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){const M=a.getX(m),_=a.getX(m+1),b=a.getX(m+2);i=gs(this,r,t,n,h,d,f,M,_,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=l.length;g<x;g++){const m=l[g],p=r[m.materialIndex],M=Math.max(m.start,u.start),_=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let b=M,C=_;b<C;b+=3){const L=b,I=b+1,z=b+2;i=gs(this,p,t,n,h,d,f,L,I,z),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){const M=m,_=m+1,b=m+2;i=gs(this,r,t,n,h,d,f,M,_,b),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function jl(s,t,e,n,i,o,r,a){let c;if(t.side===He?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Nn,a),c===null)return null;ms.copy(a),ms.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(ms);return h<e.near||h>e.far?null:{distance:h,point:ms.clone(),object:s}}function gs(s,t,e,n,i,o,r,a,c,h){s.getVertexPosition(a,ui),s.getVertexPosition(c,fi),s.getVertexPosition(h,pi);const d=jl(s,t,e,n,ui,fi,pi,ps);if(d){i&&(ds.fromBufferAttribute(i,a),us.fromBufferAttribute(i,c),fs.fromBufferAttribute(i,h),d.uv=nn.getInterpolation(ps,ui,fi,pi,ds,us,fs,new It)),o&&(ds.fromBufferAttribute(o,a),us.fromBufferAttribute(o,c),fs.fromBufferAttribute(o,h),d.uv1=nn.getInterpolation(ps,ui,fi,pi,ds,us,fs,new It),d.uv2=d.uv1),r&&(Kr.fromBufferAttribute(r,a),Jr.fromBufferAttribute(r,c),jr.fromBufferAttribute(r,h),d.normal=nn.getInterpolation(ps,ui,fi,pi,Kr,Jr,jr,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:h,normal:new N,materialIndex:0};nn.getNormal(ui,fi,pi,f.normal),d.face=f}return d}class W extends Fe{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],h=[],d=[],f=[];let l=0,u=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function g(x,m,p,M,_,b,C,L,I,z,y){const w=b/I,T=C/z,V=b/2,it=C/2,D=L/2,G=I+1,H=z+1;let F=0,tt=0;const Z=new N;for(let X=0;X<H;X++){const K=X*T-it;for(let ht=0;ht<G;ht++){const J=ht*w-V;Z[x]=J*M,Z[m]=K*_,Z[p]=D,h.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=L>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(ht/I),f.push(1-X/z),F+=1}}for(let X=0;X<z;X++)for(let K=0;K<I;K++){const ht=l+K+G*X,J=l+K+G*(X+1),Q=l+(K+1)+G*(X+1),lt=l+(K+1)+G*X;c.push(ht,J,lt),c.push(J,Q,lt),tt+=6}a.addGroup(u,tt,y),u+=tt,l+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new W(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const n=Ri(s[e]);for(const i in n)t[i]=n[i]}return t}function $l(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ec(s){return s.getRenderTarget()===null?s.outputColorSpace:me.workingColorSpace}const Ql={clone:Ri,merge:ze};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=$l(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nc extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class We extends nc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ai*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(Bi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,h=r.fullHeight;o+=r.offsetX*i/c,e-=r.offsetY*n/h,i*=r.width/c,n*=r.height/h}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class nh extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(mi,gi,t,e);i.layers=this.layers,this.add(i);const o=new We(mi,gi,t,e);o.layers=this.layers,this.add(o);const r=new We(mi,gi,t,e);r.layers=this.layers,this.add(r);const a=new We(mi,gi,t,e);a.layers=this.layers,this.add(a);const c=new We(mi,gi,t,e);c.layers=this.layers,this.add(c);const h=new We(mi,gi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,c]=e;for(const h of e)this.remove(h);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,h,d]=this.children,f=t.getRenderTarget(),l=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(f,l,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ic extends Xe{constructor(t,e,n,i,o,r,a,c,h,d){t=t!==void 0?t:[],e=e!==void 0?e:bi,super(t,e,n,i,o,r,a,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ih extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(zi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Jn?Ne:$e),this.texture=new ic(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new W(5,5,5),o=new $n({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:In});o.uniforms.tEquirect.value=e;const r=new v(i,o),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=je),new nh(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const po=new N,sh=new N,oh=new ae;class Hn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=po.subVectors(n,e).cross(sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oh.getNormalMatrix(t),i=this.coplanarPoint(po).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Fs,_s=new N;class Vo{constructor(t=new Hn,e=new Hn,n=new Hn,i=new Hn,o=new Hn,r=new Hn){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],h=i[4],d=i[5],f=i[6],l=i[7],u=i[8],g=i[9],x=i[10],m=i[11],p=i[12],M=i[13],_=i[14],b=i[15];if(n[0].setComponents(c-o,l-h,m-u,b-p).normalize(),n[1].setComponents(c+o,l+h,m+u,b+p).normalize(),n[2].setComponents(c+r,l+d,m+g,b+M).normalize(),n[3].setComponents(c-r,l-d,m-g,b-M).normalize(),n[4].setComponents(c-a,l-f,m-x,b-_).normalize(),e===xn)n[5].setComponents(c+a,l+f,m+x,b+_).normalize();else if(e===Cs)n[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(_s.x=i.normal.x>0?t.max.x:t.min.x,_s.y=i.normal.y>0?t.max.y:t.min.y,_s.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sc(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function rh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(h,d){const f=h.array,l=h.usage,u=f.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,f,l),h.onUploadCallback();let x;if(f instanceof Float32Array)x=s.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=s.SHORT;else if(f instanceof Uint32Array)x=s.UNSIGNED_INT;else if(f instanceof Int32Array)x=s.INT;else if(f instanceof Int8Array)x=s.BYTE;else if(f instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:u}}function o(h,d,f){const l=d.array,u=d._updateRange,g=d.updateRanges;if(s.bindBuffer(f,h),u.count===-1&&g.length===0&&s.bufferSubData(f,0,l),g.length!==0){for(let x=0,m=g.length;x<m;x++){const p=g[x];e?s.bufferSubData(f,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count):s.bufferSubData(f,p.start*l.BYTES_PER_ELEMENT,l.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}u.count!==-1&&(e?s.bufferSubData(f,u.offset*l.BYTES_PER_ELEMENT,l,u.offset,u.count):s.bufferSubData(f,u.offset*l.BYTES_PER_ELEMENT,l.subarray(u.offset,u.offset+u.count)),u.count=-1),d.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(s.deleteBuffer(d.buffer),n.delete(h))}function c(h,d){if(h.isGLBufferAttribute){const l=n.get(h);(!l||l.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,i(h,d));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,h,d),f.version=h.version}}return{get:r,remove:a,update:c}}class Jt extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),h=a+1,d=c+1,f=t/a,l=e/c,u=[],g=[],x=[],m=[];for(let p=0;p<d;p++){const M=p*l-r;for(let _=0;_<h;_++){const b=_*f-o;g.push(b,-M,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){const _=M+h*p,b=M+h*(p+1),C=M+1+h*(p+1),L=M+1+h*p;u.push(_,b,L),u.push(b,C,L)}this.setIndex(u),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.widthSegments,t.heightSegments)}}var ah=`#ifdef USE_ALPHAHASH
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
} // validated`,xh=`#ifdef USE_IRIDESCENCE
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
#endif`,wh=`#ifdef USE_BUMPMAP
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
#endif`,xd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wd=`#ifdef USE_MORPHNORMALS
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
}`,xu=`#include <common>
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
}`,wu=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:ah,alphahash_pars_fragment:ch,alphamap_fragment:lh,alphamap_pars_fragment:hh,alphatest_fragment:dh,alphatest_pars_fragment:uh,aomap_fragment:fh,aomap_pars_fragment:ph,batching_pars_vertex:mh,batching_vertex:gh,begin_vertex:_h,beginnormal_vertex:Mh,bsdfs:vh,iridescence_fragment:xh,bumpmap_pars_fragment:wh,clipping_planes_fragment:Sh,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:Eh,color_fragment:Th,color_pars_fragment:Ah,color_pars_vertex:Rh,color_vertex:Ph,common:Ch,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Dh,displacementmap_vertex:Uh,emissivemap_fragment:Nh,emissivemap_pars_fragment:Fh,colorspace_fragment:Oh,colorspace_pars_fragment:Gh,envmap_fragment:Bh,envmap_common_pars_fragment:kh,envmap_pars_fragment:zh,envmap_pars_vertex:Vh,envmap_physical_pars_fragment:td,envmap_vertex:Hh,fog_vertex:Wh,fog_pars_vertex:Xh,fog_fragment:qh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Zh,lightmap_fragment:Kh,lightmap_pars_fragment:Jh,lights_lambert_fragment:jh,lights_lambert_pars_fragment:$h,lights_pars_begin:Qh,lights_toon_fragment:ed,lights_toon_pars_fragment:nd,lights_phong_fragment:id,lights_phong_pars_fragment:sd,lights_physical_fragment:od,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:cd,lights_fragment_end:ld,logdepthbuf_fragment:hd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:pd,map_pars_fragment:md,map_particle_fragment:gd,map_particle_pars_fragment:_d,metalnessmap_fragment:Md,metalnessmap_pars_fragment:vd,morphcolor_vertex:xd,morphnormal_vertex:wd,morphtarget_pars_vertex:Sd,morphtarget_vertex:yd,normal_fragment_begin:bd,normal_fragment_maps:Ed,normal_pars_fragment:Td,normal_pars_vertex:Ad,normal_vertex:Rd,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Dd,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Gd,dithering_pars_fragment:Bd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:Zd,skinnormal_vertex:Kd,specularmap_fragment:Jd,specularmap_pars_fragment:jd,tonemapping_fragment:$d,tonemapping_pars_fragment:Qd,transmission_fragment:tu,transmission_pars_fragment:eu,uv_pars_fragment:nu,uv_pars_vertex:iu,uv_vertex:su,worldpos_vertex:ou,background_vert:ru,background_frag:au,backgroundCube_vert:cu,backgroundCube_frag:lu,cube_vert:hu,cube_frag:du,depth_vert:uu,depth_frag:fu,distanceRGBA_vert:pu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:_u,linedashed_vert:Mu,linedashed_frag:vu,meshbasic_vert:xu,meshbasic_frag:wu,meshlambert_vert:Su,meshlambert_frag:yu,meshmatcap_vert:bu,meshmatcap_frag:Eu,meshnormal_vert:Tu,meshnormal_frag:Au,meshphong_vert:Ru,meshphong_frag:Pu,meshphysical_vert:Cu,meshphysical_frag:Lu,meshtoon_vert:Iu,meshtoon_frag:Du,points_vert:Uu,points_frag:Nu,shadow_vert:Fu,shadow_frag:Ou,sprite_vert:Gu,sprite_frag:Bu},Dt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},cn={basic:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ce(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:ze([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:ze([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ce(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:ze([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:ze([Dt.points,Dt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:ze([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:ze([Dt.common,Dt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:ze([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:ze([Dt.sprite,Dt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:ze([Dt.common,Dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:ze([Dt.lights,Dt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};cn.physical={uniforms:ze([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Ms={r:0,b:0,g:0};function ku(s,t,e,n,i,o,r){const a=new ce(0);let c=o===!0?0:1,h,d,f=null,l=0,u=null;function g(m,p){let M=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),M=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||M)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Us)?(d===void 0&&(d=new v(new W(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ri(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=me.getTransfer(_.colorSpace)!==_e,(f!==_||l!==_.version||u!==s.toneMapping)&&(d.material.needsUpdate=!0,f=_,l=_.version,u=s.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new v(new Jt(2,2),new $n({name:"BackgroundMaterial",uniforms:Ri(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=me.getTransfer(_.colorSpace)!==_e,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||l!==_.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=_,l=_.version,u=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function x(m,p){m.getRGB(Ms,ec(s)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function zu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||o!==null,a={},c=m(null);let h=c,d=!1;function f(D,G,H,F,tt){let Z=!1;if(r){const X=x(F,H,G);h!==X&&(h=X,u(h.object)),Z=p(D,F,H,tt),Z&&M(D,F,H,tt)}else{const X=G.wireframe===!0;(h.geometry!==F.id||h.program!==H.id||h.wireframe!==X)&&(h.geometry=F.id,h.program=H.id,h.wireframe=X,Z=!0)}tt!==null&&e.update(tt,s.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,z(D,G,H,F),tt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(tt).buffer))}function l(){return n.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function u(D){return n.isWebGL2?s.bindVertexArray(D):o.bindVertexArrayOES(D)}function g(D){return n.isWebGL2?s.deleteVertexArray(D):o.deleteVertexArrayOES(D)}function x(D,G,H){const F=H.wireframe===!0;let tt=a[D.id];tt===void 0&&(tt={},a[D.id]=tt);let Z=tt[G.id];Z===void 0&&(Z={},tt[G.id]=Z);let X=Z[F];return X===void 0&&(X=m(l()),Z[F]=X),X}function m(D){const G=[],H=[],F=[];for(let tt=0;tt<i;tt++)G[tt]=0,H[tt]=0,F[tt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:H,attributeDivisors:F,object:D,attributes:{},index:null}}function p(D,G,H,F){const tt=h.attributes,Z=G.attributes;let X=0;const K=H.getAttributes();for(const ht in K)if(K[ht].location>=0){const Q=tt[ht];let lt=Z[ht];if(lt===void 0&&(ht==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),ht==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor)),Q===void 0||Q.attribute!==lt||lt&&Q.data!==lt.data)return!0;X++}return h.attributesNum!==X||h.index!==F}function M(D,G,H,F){const tt={},Z=G.attributes;let X=0;const K=H.getAttributes();for(const ht in K)if(K[ht].location>=0){let Q=Z[ht];Q===void 0&&(ht==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),ht==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor));const lt={};lt.attribute=Q,Q&&Q.data&&(lt.data=Q.data),tt[ht]=lt,X++}h.attributes=tt,h.attributesNum=X,h.index=F}function _(){const D=h.newAttributes;for(let G=0,H=D.length;G<H;G++)D[G]=0}function b(D){C(D,0)}function C(D,G){const H=h.newAttributes,F=h.enabledAttributes,tt=h.attributeDivisors;H[D]=1,F[D]===0&&(s.enableVertexAttribArray(D),F[D]=1),tt[D]!==G&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),tt[D]=G)}function L(){const D=h.newAttributes,G=h.enabledAttributes;for(let H=0,F=G.length;H<F;H++)G[H]!==D[H]&&(s.disableVertexAttribArray(H),G[H]=0)}function I(D,G,H,F,tt,Z,X){X===!0?s.vertexAttribIPointer(D,G,H,tt,Z):s.vertexAttribPointer(D,G,H,F,tt,Z)}function z(D,G,H,F){if(n.isWebGL2===!1&&(D.isInstancedMesh||F.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const tt=F.attributes,Z=H.getAttributes(),X=G.defaultAttributeValues;for(const K in Z){const ht=Z[K];if(ht.location>=0){let J=tt[K];if(J===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(J=D.instanceColor)),J!==void 0){const Q=J.normalized,lt=J.itemSize,ot=e.get(J);if(ot===void 0)continue;const nt=ot.buffer,St=ot.type,Rt=ot.bytesPerElement,st=n.isWebGL2===!0&&(St===s.INT||St===s.UNSIGNED_INT||J.gpuType===Fa);if(J.isInterleavedBufferAttribute){const Tt=J.data,U=Tt.stride,pt=J.offset;if(Tt.isInstancedInterleavedBuffer){for(let at=0;at<ht.locationSize;at++)C(ht.location+at,Tt.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Tt.meshPerAttribute*Tt.count)}else for(let at=0;at<ht.locationSize;at++)b(ht.location+at);s.bindBuffer(s.ARRAY_BUFFER,nt);for(let at=0;at<ht.locationSize;at++)I(ht.location+at,lt/ht.locationSize,St,Q,U*Rt,(pt+lt/ht.locationSize*at)*Rt,st)}else{if(J.isInstancedBufferAttribute){for(let Tt=0;Tt<ht.locationSize;Tt++)C(ht.location+Tt,J.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Tt=0;Tt<ht.locationSize;Tt++)b(ht.location+Tt);s.bindBuffer(s.ARRAY_BUFFER,nt);for(let Tt=0;Tt<ht.locationSize;Tt++)I(ht.location+Tt,lt/ht.locationSize,St,Q,lt*Rt,lt/ht.locationSize*Tt*Rt,st)}}else if(X!==void 0){const Q=X[K];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(ht.location,Q);break;case 3:s.vertexAttrib3fv(ht.location,Q);break;case 4:s.vertexAttrib4fv(ht.location,Q);break;default:s.vertexAttrib1fv(ht.location,Q)}}}}L()}function y(){V();for(const D in a){const G=a[D];for(const H in G){const F=G[H];for(const tt in F)g(F[tt].object),delete F[tt];delete G[H]}delete a[D]}}function w(D){if(a[D.id]===void 0)return;const G=a[D.id];for(const H in G){const F=G[H];for(const tt in F)g(F[tt].object),delete F[tt];delete G[H]}delete a[D.id]}function T(D){for(const G in a){const H=a[G];if(H[D.id]===void 0)continue;const F=H[D.id];for(const tt in F)g(F[tt].object),delete F[tt];delete H[D.id]}}function V(){it(),d=!0,h!==c&&(h=c,u(h.object))}function it(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:V,resetDefaultState:it,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:b,disableUnusedAttributes:L}}function Vu(s,t,e,n){const i=n.isWebGL2;let o;function r(d){o=d}function a(d,f){s.drawArrays(o,d,f),e.update(f,o,1)}function c(d,f,l){if(l===0)return;let u,g;if(i)u=s,g="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](o,d,f,l),e.update(f,o,l)}function h(d,f,l){if(l===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l;g++)this.render(d[g],f[g]);else{u.multiDrawArraysWEBGL(o,d,0,f,0,l);let g=0;for(let x=0;x<l;x++)g+=f[x];e.update(g,o,1)}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function Hu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=o(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const h=r||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=l>0,b=r||t.has("OES_texture_float"),C=_&&b,L=r?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:l,maxTextureSize:u,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:b,floatVertexTextures:C,maxSamples:L}}function Wu(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Hn,a=new ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,l){const u=f.length!==0||l||n!==0||i;return i=l,n=f.length,u},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,l){e=d(f,l,0)},this.setState=function(f,l,u){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||o&&!m)o?d(null):h();else{const M=o?0:n,_=M*4;let b=p.clippingState||null;c.value=b,b=d(g,l,_,u);for(let C=0;C!==_;++C)b[C]=e[C];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,l,u,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=u+x*4,M=l.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,b=u;_!==x;++_,b+=4)r.copy(f[_]).applyMatrix4(M,a),r.normal.toArray(m,b),m[b+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Xu(s){let t=new WeakMap;function e(r,a){return a===Po?r.mapping=bi:a===Co&&(r.mapping=Ei),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Po||a===Co)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const h=new ih(c.height/2);return h.fromEquirectangularTexture(s,r),t.set(r,h),r.addEventListener("dispose",i),e(h.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class oc extends nc{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,r=o+h*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vi=4,$r=[.125,.215,.35,.446,.526,.582],qn=20,mo=new oc,Qr=new ce;let go=null,_o=0,Mo=0;const Wn=(1+Math.sqrt(5))/2,_i=1/Wn,ta=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Wn,_i),new N(0,Wn,-_i),new N(_i,0,Wn),new N(-_i,0,Wn),new N(Wn,_i,0),new N(-Wn,_i,0)];class ea{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,_o,Mo),t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:qi,format:on,colorSpace:wn,depthBuffer:!1},i=na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=na(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qu(o)),this._blurMaterial=Yu(o,t,e)}return i}_compileMaterial(t){const e=new v(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,i){const a=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,l=d.toneMapping;d.getClearColor(Qr),d.toneMapping=Dn,d.autoClear=!1;const u=new he({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new v(new W,u);let x=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,x=!0):(u.color.copy(Qr),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,c[p],0),a.lookAt(h[p],0,0)):M===1?(a.up.set(0,0,c[p]),a.lookAt(0,h[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,h[p]));const _=this._cubeSize;vs(i,M*_,p>2?_:0,_,_),d.setRenderTarget(i),x&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=l,d.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bi||t.mapping===Ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ia());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new v(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;vs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=ta[(i-1)%ta.length];this._blur(t,i-1,i,o,r)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new v(this._lodPlanes[i],h),l=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*qn-1),x=o/g,m=isFinite(o)?1+Math.floor(d*x):qn;m>qn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const p=[];let M=0;for(let I=0;I<qn;++I){const z=I/x,y=Math.exp(-z*z/2);p.push(y),I===0?M+=y:I<m&&(M+=2*y)}for(let I=0;I<p.length;I++)p[I]=p[I]/M;l.envMap.value=t.texture,l.samples.value=m,l.weights.value=p,l.latitudinal.value=r==="latitudinal",a&&(l.poleAxis.value=a);const{_lodMax:_}=this;l.dTheta.value=g,l.mipInt.value=_-n;const b=this._sizeLods[i],C=3*b*(i>_-vi?i-_+vi:0),L=4*(this._cubeSize-b);vs(e,C,L,3*b,2*b),c.setRenderTarget(e),c.render(f,mo)}}function qu(s){const t=[],e=[],n=[];let i=s;const o=s-vi+1+$r.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-vi?c=$r[r-s+vi-1]:r===0&&(c=0),n.push(c);const h=1/(a-2),d=-h,f=1+h,l=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*u),_=new Float32Array(m*g*u),b=new Float32Array(p*g*u);for(let L=0;L<u;L++){const I=L%3*2/3-1,z=L>2?0:-1,y=[I,z,0,I+2/3,z,0,I+2/3,z+1,0,I,z,0,I+2/3,z+1,0,I,z+1,0];M.set(y,x*g*L),_.set(l,m*g*L);const w=[L,L,L,L,L,L];b.set(w,p*g*L)}const C=new Fe;C.setAttribute("position",new hn(M,x)),C.setAttribute("uv",new hn(_,m)),C.setAttribute("faceIndex",new hn(b,p)),t.push(C),i>vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function na(s,t,e){const n=new jn(s,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Yu(s,t,e){const n=new Float32Array(qn),i=new N(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function ia(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function sa(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function Zu(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===Po||c===Co,d=c===bi||c===Ei;if(h||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new ea(s)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(h&&f&&f.height>0||d&&f&&i(f)){e===null&&(e=new ea(s));const l=h?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,l),a.addEventListener("dispose",o),l.texture}else return null}}}return a}function i(a){let c=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&c++;return c===h}function o(a){const c=a.target;c.removeEventListener("dispose",o);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Ku(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ju(s,t,e,n){const i={},o=new WeakMap;function r(f){const l=f.target;l.index!==null&&t.remove(l.index);for(const g in l.attributes)t.remove(l.attributes[g]);for(const g in l.morphAttributes){const x=l.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}l.removeEventListener("dispose",r),delete i[l.id];const u=o.get(l);u&&(t.remove(u),o.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function a(f,l){return i[l.id]===!0||(l.addEventListener("dispose",r),i[l.id]=!0,e.memory.geometries++),l}function c(f){const l=f.attributes;for(const g in l)t.update(l[g],s.ARRAY_BUFFER);const u=f.morphAttributes;for(const g in u){const x=u[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function h(f){const l=[],u=f.index,g=f.attributes.position;let x=0;if(u!==null){const M=u.array;x=u.version;for(let _=0,b=M.length;_<b;_+=3){const C=M[_+0],L=M[_+1],I=M[_+2];l.push(C,L,L,I,I,C)}}else if(g!==void 0){const M=g.array;x=g.version;for(let _=0,b=M.length/3-1;_<b;_+=3){const C=_+0,L=_+1,I=_+2;l.push(C,L,L,I,I,C)}}else return;const m=new(qa(l)?tc:Qa)(l,1);m.version=x;const p=o.get(f);p&&t.remove(p),o.set(f,m)}function d(f){const l=o.get(f);if(l){const u=f.index;u!==null&&l.version<u.version&&h(f)}else h(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function ju(s,t,e,n){const i=n.isWebGL2;let o;function r(u){o=u}let a,c;function h(u){a=u.type,c=u.bytesPerElement}function d(u,g){s.drawElements(o,g,a,u*c),e.update(g,o,1)}function f(u,g,x){if(x===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](o,g,a,u*c,x),e.update(g,o,x)}function l(u,g,x){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(u[p]/c,g[p]);else{m.multiDrawElementsWEBGL(o,g,0,a,u,0,x);let p=0;for(let M=0;M<x;M++)p+=g[M];e.update(p,o,1)}}this.setMode=r,this.setIndex=h,this.render=d,this.renderInstances=f,this.renderMultiDraw=l}function $u(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qu(s,t){return s[0]-t[0]}function tf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ef(s,t,e){const n={},i=new Float32Array(8),o=new WeakMap,r=new ve,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function c(h,d,f){const l=h.morphTargetInfluences;if(t.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let m=o.get(d);if(m===void 0||m.count!==x){let G=function(){it.dispose(),o.delete(d),d.removeEventListener("dispose",G)};var u=G;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],z=d.morphAttributes.color||[];let y=0;_===!0&&(y=1),b===!0&&(y=2),C===!0&&(y=3);let w=d.attributes.position.count*y,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const V=new Float32Array(w*T*4*x),it=new Ka(V,w,T,x);it.type=Cn,it.needsUpdate=!0;const D=y*4;for(let H=0;H<x;H++){const F=L[H],tt=I[H],Z=z[H],X=w*T*4*H;for(let K=0;K<F.count;K++){const ht=K*D;_===!0&&(r.fromBufferAttribute(F,K),V[X+ht+0]=r.x,V[X+ht+1]=r.y,V[X+ht+2]=r.z,V[X+ht+3]=0),b===!0&&(r.fromBufferAttribute(tt,K),V[X+ht+4]=r.x,V[X+ht+5]=r.y,V[X+ht+6]=r.z,V[X+ht+7]=0),C===!0&&(r.fromBufferAttribute(Z,K),V[X+ht+8]=r.x,V[X+ht+9]=r.y,V[X+ht+10]=r.z,V[X+ht+11]=Z.itemSize===4?r.w:1)}}m={count:x,texture:it,size:new It(w,T)},o.set(d,m),d.addEventListener("dispose",G)}let p=0;for(let _=0;_<l.length;_++)p+=l[_];const M=d.morphTargetsRelative?1:1-p;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",l),f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=l===void 0?0:l.length;let x=n[d.id];if(x===void 0||x.length!==g){x=[];for(let b=0;b<g;b++)x[b]=[b,0];n[d.id]=x}for(let b=0;b<g;b++){const C=x[b];C[0]=b,C[1]=l[b]}x.sort(tf);for(let b=0;b<8;b++)b<g&&x[b][1]?(a[b][0]=x[b][0],a[b][1]=x[b][1]):(a[b][0]=Number.MAX_SAFE_INTEGER,a[b][1]=0);a.sort(Qu);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let M=0;for(let b=0;b<8;b++){const C=a[b],L=C[0],I=C[1];L!==Number.MAX_SAFE_INTEGER&&I?(m&&d.getAttribute("morphTarget"+b)!==m[L]&&d.setAttribute("morphTarget"+b,m[L]),p&&d.getAttribute("morphNormal"+b)!==p[L]&&d.setAttribute("morphNormal"+b,p[L]),i[b]=I,M+=I):(m&&d.hasAttribute("morphTarget"+b)===!0&&d.deleteAttribute("morphTarget"+b),p&&d.hasAttribute("morphNormal"+b)===!0&&d.deleteAttribute("morphNormal"+b),i[b]=0)}const _=d.morphTargetsRelative?1:1-M;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function nf(s,t,e,n){let i=new WeakMap;function o(c){const h=n.render.frame,d=c.geometry,f=t.get(c,d);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return f}function r(){i=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:r}}class rc extends Xe{constructor(t,e,n,i,o,r,a,c,h,d){if(d=d!==void 0?d:Kn,d!==Kn&&d!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Kn&&(n=Pn),n===void 0&&d===Ti&&(n=Zn),super(null,i,o,r,a,c,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ac=new Xe,cc=new rc(1,1);cc.compareFunction=Xa;const lc=new Ka,hc=new kl,dc=new ic,oa=[],ra=[],aa=new Float32Array(16),ca=new Float32Array(9),la=new Float32Array(4);function Li(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=oa[i];if(o===void 0&&(o=new Float32Array(i),oa[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gs(s,t){let e=ra[t];e===void 0&&(e=new Int32Array(t),ra[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function cf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;la.set(n),s.uniformMatrix2fv(this.addr,!1,la),Ce(e,n)}}function lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;ca.set(n),s.uniformMatrix3fv(this.addr,!1,ca),Ce(e,n)}}function hf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;aa.set(n),s.uniformMatrix4fv(this.addr,!1,aa),Ce(e,n)}}function df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function mf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const o=this.type===s.SAMPLER_2D_SHADOW?cc:ac;e.setTexture2D(t||o,i)}function xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hc,i)}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dc,i)}function Sf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lc,i)}function yf(s){switch(s){case 5126:return sf;case 35664:return of;case 35665:return rf;case 35666:return af;case 35674:return cf;case 35675:return lf;case 35676:return hf;case 5124:case 35670:return df;case 35667:case 35671:return uf;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return _f;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Sf}}function bf(s,t){s.uniform1fv(this.addr,t)}function Ef(s,t){const e=Li(t,this.size,2);s.uniform2fv(this.addr,e)}function Tf(s,t){const e=Li(t,this.size,3);s.uniform3fv(this.addr,e)}function Af(s,t){const e=Li(t,this.size,4);s.uniform4fv(this.addr,e)}function Rf(s,t){const e=Li(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pf(s,t){const e=Li(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cf(s,t){const e=Li(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Lf(s,t){s.uniform1iv(this.addr,t)}function If(s,t){s.uniform2iv(this.addr,t)}function Df(s,t){s.uniform3iv(this.addr,t)}function Uf(s,t){s.uniform4iv(this.addr,t)}function Nf(s,t){s.uniform1uiv(this.addr,t)}function Ff(s,t){s.uniform2uiv(this.addr,t)}function Of(s,t){s.uniform3uiv(this.addr,t)}function Gf(s,t){s.uniform4uiv(this.addr,t)}function Bf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||ac,o[r])}function kf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||hc,o[r])}function zf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||dc,o[r])}function Vf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||lc,o[r])}function Hf(s){switch(s){case 5126:return bf;case 35664:return Ef;case 35665:return Tf;case 35666:return Af;case 35674:return Rf;case 35675:return Pf;case 35676:return Cf;case 5124:case 35670:return Lf;case 35667:case 35671:return If;case 35668:case 35672:return Df;case 35669:case 35673:return Uf;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Vf}}class Wf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class Xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hf(e.type)}}class qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function ha(s,t){s.seq.push(t),s.map[t.id]=t}function Yf(s,t,e){const n=s.name,i=n.length;for(vo.lastIndex=0;;){const o=vo.exec(n),r=vo.lastIndex;let a=o[1];const c=o[2]==="]",h=o[3];if(c&&(a=a|0),h===void 0||h==="["&&r+2===i){ha(e,h===void 0?new Wf(a,s,t):new Xf(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new qf(a),ha(e,f)),e=f}}}class Es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);Yf(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function da(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Zf=37297;let Kf=0;function Jf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function jf(s){const t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(s);let n;switch(t===e?n="":t===Ps&&e===Rs?n="LinearDisplayP3ToLinearSRGB":t===Rs&&e===Ps&&(n="LinearSRGBToLinearDisplayP3"),s){case wn:case Ns:return[n,"LinearTransferOETF"];case Ne:case ko:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ua(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Jf(s.getShaderSource(t),r)}else return i}function $f(s,t){const e=jf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qf(s,t){let e;switch(t){case jc:e="Linear";break;case $c:e="Reinhard";break;case Qc:e="OptimizedCineon";break;case Ua:e="ACESFilmic";break;case el:e="AgX";break;case tl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function tp(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xi).join(`
`)}function ep(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xi).join(`
`)}function np(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ip(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function xi(s){return s!==""}function fa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(s){return s.replace(sp,rp)}const op=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function rp(s,t){let e=se[t];if(e===void 0){const n=op.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uo(e)}const ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ma(s){return s.replace(ap,cp)}function cp(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function ga(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function lp(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Go?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ia?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function hp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bi:case Ei:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function up(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Da:t="ENVMAP_BLENDING_MULTIPLY";break;case Kc:t="ENVMAP_BLENDING_MIX";break;case Jc:t="ENVMAP_BLENDING_ADD";break}return t}function fp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function pp(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=lp(e),h=hp(e),d=dp(e),f=up(e),l=fp(e),u=e.isWebGL2?"":tp(e),g=ep(e),x=np(o),m=i.createProgram();let p,M,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xi).join(`
`),p.length>0&&(p+=`
`),M=[u,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xi).join(`
`),M.length>0&&(M+=`
`)):(p=[ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),M=[u,ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?se.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,$f("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xi).join(`
`)),r=Uo(r),r=fa(r,e),r=pa(r,e),a=Uo(a),a=fa(a,e),a=pa(a,e),r=ma(r),a=ma(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,M=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ur?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ur?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const b=_+p+r,C=_+M+a,L=da(i,i.VERTEX_SHADER,b),I=da(i,i.FRAGMENT_SHADER,C);i.attachShader(m,L),i.attachShader(m,I),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function z(V){if(s.debug.checkShaderErrors){const it=i.getProgramInfoLog(m).trim(),D=i.getShaderInfoLog(L).trim(),G=i.getShaderInfoLog(I).trim();let H=!0,F=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,L,I);else{const tt=ua(i,L,"vertex"),Z=ua(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+it+`
`+tt+`
`+Z)}else it!==""?console.warn("THREE.WebGLProgram: Program Info Log:",it):(D===""||G==="")&&(F=!1);F&&(V.diagnostics={runnable:H,programLog:it,vertexShader:{log:D,prefix:p},fragmentShader:{log:G,prefix:M}})}i.deleteShader(L),i.deleteShader(I),y=new Es(i,m),w=ip(i,m)}let y;this.getUniforms=function(){return y===void 0&&z(this),y};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Zf)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=I,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _p(t),e.set(t,n)),n}}class _p{constructor(t){this.id=mp++,this.code=t,this.usedTimes=0}}function Mp(s,t,e,n,i,o,r){const a=new ja,c=new gp,h=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,l=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return y===0?"uv":`uv${y}`}function m(y,w,T,V,it){const D=V.fog,G=it.geometry,H=y.isMeshStandardMaterial?V.environment:null,F=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),tt=F&&F.mapping===Us?F.image.height:null,Z=g[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const X=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,K=X!==void 0?X.length:0;let ht=0;G.morphAttributes.position!==void 0&&(ht=1),G.morphAttributes.normal!==void 0&&(ht=2),G.morphAttributes.color!==void 0&&(ht=3);let J,Q,lt,ot;if(Z){const ne=cn[Z];J=ne.vertexShader,Q=ne.fragmentShader}else J=y.vertexShader,Q=y.fragmentShader,c.update(y),lt=c.getVertexShaderID(y),ot=c.getFragmentShaderID(y);const nt=s.getRenderTarget(),St=it.isInstancedMesh===!0,Rt=it.isBatchedMesh===!0,st=!!y.map,Tt=!!y.matcap,U=!!F,pt=!!y.aoMap,at=!!y.lightMap,_t=!!y.bumpMap,ct=!!y.normalMap,Gt=!!y.displacementMap,Mt=!!y.emissiveMap,A=!!y.metalnessMap,E=!!y.roughnessMap,Y=y.anisotropy>0,gt=y.clearcoat>0,dt=y.iridescence>0,ft=y.sheen>0,Ft=y.transmission>0,At=Y&&!!y.anisotropyMap,Ut=gt&&!!y.clearcoatMap,Vt=gt&&!!y.clearcoatNormalMap,Lt=gt&&!!y.clearcoatRoughnessMap,vt=dt&&!!y.iridescenceMap,$t=dt&&!!y.iridescenceThicknessMap,Kt=ft&&!!y.sheenColorMap,Xt=ft&&!!y.sheenRoughnessMap,Bt=!!y.specularMap,Pt=!!y.specularColorMap,Zt=!!y.specularIntensityMap,te=Ft&&!!y.transmissionMap,Ot=Ft&&!!y.thicknessMap,yt=!!y.gradientMap,xt=!!y.alphaMap,S=y.alphaTest>0,k=!!y.alphaHash,j=!!y.extensions,Et=!!G.attributes.uv1,rt=!!G.attributes.uv2,bt=!!G.attributes.uv3;let kt=Dn;return y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(kt=s.toneMapping),{isWebGL2:d,shaderID:Z,shaderType:y.type,shaderName:y.name,vertexShader:J,fragmentShader:Q,defines:y.defines,customVertexShaderID:lt,customFragmentShaderID:ot,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Rt,instancing:St,instancingColor:St&&it.instanceColor!==null,supportsVertexTextures:l,outputColorSpace:nt===null?s.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:wn,map:st,matcap:Tt,envMap:U,envMapMode:U&&F.mapping,envMapCubeUVHeight:tt,aoMap:pt,lightMap:at,bumpMap:_t,normalMap:ct,displacementMap:l&&Gt,emissiveMap:Mt,normalMapObjectSpace:ct&&y.normalMapType===fl,normalMapTangentSpace:ct&&y.normalMapType===Wa,metalnessMap:A,roughnessMap:E,anisotropy:Y,anisotropyMap:At,clearcoat:gt,clearcoatMap:Ut,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Lt,iridescence:dt,iridescenceMap:vt,iridescenceThicknessMap:$t,sheen:ft,sheenColorMap:Kt,sheenRoughnessMap:Xt,specularMap:Bt,specularColorMap:Pt,specularIntensityMap:Zt,transmission:Ft,transmissionMap:te,thicknessMap:Ot,gradientMap:yt,opaque:y.transparent===!1&&y.blending===Si,alphaMap:xt,alphaTest:S,alphaHash:k,combine:y.combine,mapUv:st&&x(y.map.channel),aoMapUv:pt&&x(y.aoMap.channel),lightMapUv:at&&x(y.lightMap.channel),bumpMapUv:_t&&x(y.bumpMap.channel),normalMapUv:ct&&x(y.normalMap.channel),displacementMapUv:Gt&&x(y.displacementMap.channel),emissiveMapUv:Mt&&x(y.emissiveMap.channel),metalnessMapUv:A&&x(y.metalnessMap.channel),roughnessMapUv:E&&x(y.roughnessMap.channel),anisotropyMapUv:At&&x(y.anisotropyMap.channel),clearcoatMapUv:Ut&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Kt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&x(y.sheenRoughnessMap.channel),specularMapUv:Bt&&x(y.specularMap.channel),specularColorMapUv:Pt&&x(y.specularColorMap.channel),specularIntensityMapUv:Zt&&x(y.specularIntensityMap.channel),transmissionMapUv:te&&x(y.transmissionMap.channel),thicknessMapUv:Ot&&x(y.thicknessMap.channel),alphaMapUv:xt&&x(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ct||Y),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Et,vertexUv2s:rt,vertexUv3s:bt,pointsUvs:it.isPoints===!0&&!!G.attributes.uv&&(st||xt),fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:it.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&me.getTransfer(y.map.colorSpace)===_e,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ee,flipSided:y.side===He,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:j&&y.extensions.derivatives===!0,extensionFragDepth:j&&y.extensions.fragDepth===!0,extensionDrawBuffers:j&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:j&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:j&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const T in y.defines)w.push(T),w.push(y.defines[T]);return y.isRawShaderMaterial===!1&&(M(w,y),_(w,y),w.push(s.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function M(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function _(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function b(y){const w=g[y.type];let T;if(w){const V=cn[w];T=Ql.clone(V.uniforms)}else T=y.uniforms;return T}function C(y,w){let T;for(let V=0,it=h.length;V<it;V++){const D=h[V];if(D.cacheKey===w){T=D,++T.usedTimes;break}}return T===void 0&&(T=new pp(s,w,y,o),h.push(T)),T}function L(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function I(y){c.remove(y)}function z(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:z}}function vp(){let s=new WeakMap;function t(o){let r=s.get(o);return r===void 0&&(r={},s.set(o,r)),r}function e(o){s.delete(o)}function n(o,r,a){s.get(o)[r]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function xp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _a(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ma(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(f,l,u,g,x,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:l,material:u,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=l,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,l,u,g,x,m){const p=r(f,l,u,g,x,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,l,u,g,x,m){const p=r(f,l,u,g,x,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,l){e.length>1&&e.sort(f||xp),n.length>1&&n.sort(l||_a),i.length>1&&i.sort(l||_a)}function d(){for(let f=t,l=s.length;f<l;f++){const u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:d,sort:h}}function wp(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Ma,s.set(n,[r])):i>=o.length?(r=new Ma,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function Sp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ce};break;case"SpotLight":e={position:new N,direction:new N,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function yp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let bp=0;function Ep(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Tp(s,t){const e=new Sp,n=yp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new N);const o=new N,r=new ye,a=new ye;function c(d,f){let l=0,u=0,g=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let x=0,m=0,p=0,M=0,_=0,b=0,C=0,L=0,I=0,z=0,y=0;d.sort(Ep);const w=f===!0?Math.PI:1;for(let V=0,it=d.length;V<it;V++){const D=d[V],G=D.color,H=D.intensity,F=D.distance,tt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)l+=G.r*H*w,u+=G.g*H*w,g+=G.b*H*w;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],H);y++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*w),D.castShadow){const X=D.shadow,K=n.get(D);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.directionalShadow[x]=K,i.directionalShadowMap[x]=tt,i.directionalShadowMatrix[x]=D.shadow.matrix,b++}i.directional[x]=Z,x++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(G).multiplyScalar(H*w),Z.distance=F,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[p]=Z;const X=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,X.updateMatrices(D),D.castShadow&&z++),i.spotLightMatrix[p]=X.matrix,D.castShadow){const K=n.get(D);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=tt,L++}p++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(G).multiplyScalar(H),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[M]=Z,M++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity*w),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const X=D.shadow,K=n.get(D);K.shadowBias=X.bias,K.shadowNormalBias=X.normalBias,K.shadowRadius=X.radius,K.shadowMapSize=X.mapSize,K.shadowCameraNear=X.camera.near,K.shadowCameraFar=X.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=tt,i.pointShadowMatrix[m]=D.shadow.matrix,C++}i.point[m]=Z,m++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar(H*w),Z.groundColor.copy(D.groundColor).multiplyScalar(H*w),i.hemi[_]=Z,_++}}M>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==x||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==M||T.hemiLength!==_||T.numDirectionalShadows!==b||T.numPointShadows!==C||T.numSpotShadows!==L||T.numSpotMaps!==I||T.numLightProbes!==y)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=M,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=L+I-z,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=y,T.directionalLength=x,T.pointLength=m,T.spotLength=p,T.rectAreaLength=M,T.hemiLength=_,T.numDirectionalShadows=b,T.numPointShadows=C,T.numSpotShadows=L,T.numSpotMaps=I,T.numLightProbes=y,i.version=bp++)}function h(d,f){let l=0,u=0,g=0,x=0,m=0;const p=f.matrixWorldInverse;for(let M=0,_=d.length;M<_;M++){const b=d[M];if(b.isDirectionalLight){const C=i.directional[l];C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(p),l++}else if(b.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(p),g++}else if(b.isRectAreaLight){const C=i.rectArea[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){const C=i.point[u];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(p),u++}else if(b.isHemisphereLight){const C=i.hemi[m];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:i}}function va(s,t){const e=new Tp(s,t),n=[],i=[];function o(){n.length=0,i.length=0}function r(f){n.push(f)}function a(f){i.push(f)}function c(f){e.setup(n,f)}function h(f){e.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a}}function Ap(s,t){let e=new WeakMap;function n(o,r=0){const a=e.get(o);let c;return a===void 0?(c=new va(s,t),e.set(o,[c])):r>=a.length?(c=new va(s,t),a.push(c)):c=a[r],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Rp extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Pp extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Cp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lp=`uniform sampler2D shadow_pass;
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
}`;function Ip(s,t,e){let n=new Vo;const i=new It,o=new It,r=new ve,a=new Rp({depthPacking:ul}),c=new Pp,h={},d=e.maxTextureSize,f={[Nn]:He,[He]:Nn,[Ee]:Ee},l=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:Cp,fragmentShader:Lp}),u=l.clone();u.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new v(g,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let p=this.type;this.render=function(L,I,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const y=s.getRenderTarget(),w=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),V=s.state;V.setBlending(In),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const it=p!==vn&&this.type===vn,D=p===vn&&this.type!==vn;for(let G=0,H=L.length;G<H;G++){const F=L[G],tt=F.shadow;if(tt===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(tt.autoUpdate===!1&&tt.needsUpdate===!1)continue;i.copy(tt.mapSize);const Z=tt.getFrameExtents();if(i.multiply(Z),o.copy(tt.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/Z.x),i.x=o.x*Z.x,tt.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/Z.y),i.y=o.y*Z.y,tt.mapSize.y=o.y)),tt.map===null||it===!0||D===!0){const K=this.type!==vn?{minFilter:Ve,magFilter:Ve}:{};tt.map!==null&&tt.map.dispose(),tt.map=new jn(i.x,i.y,K),tt.map.texture.name=F.name+".shadowMap",tt.camera.updateProjectionMatrix()}s.setRenderTarget(tt.map),s.clear();const X=tt.getViewportCount();for(let K=0;K<X;K++){const ht=tt.getViewport(K);r.set(o.x*ht.x,o.y*ht.y,o.x*ht.z,o.y*ht.w),V.viewport(r),tt.updateMatrices(F,K),n=tt.getFrustum(),b(I,z,tt.camera,F,this.type)}tt.isPointLightShadow!==!0&&this.type===vn&&M(tt,z),tt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,w,T)};function M(L,I){const z=t.update(x);l.defines.VSM_SAMPLES!==L.blurSamples&&(l.defines.VSM_SAMPLES=L.blurSamples,u.defines.VSM_SAMPLES=L.blurSamples,l.needsUpdate=!0,u.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new jn(i.x,i.y)),l.uniforms.shadow_pass.value=L.map.texture,l.uniforms.resolution.value=L.mapSize,l.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(I,null,z,l,x,null),u.uniforms.shadow_pass.value=L.mapPass.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(I,null,z,u,x,null)}function _(L,I,z,y){let w=null;const T=z.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(T!==void 0)w=T;else if(w=z.isPointLight===!0?c:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const V=w.uuid,it=I.uuid;let D=h[V];D===void 0&&(D={},h[V]=D);let G=D[it];G===void 0&&(G=w.clone(),D[it]=G,I.addEventListener("dispose",C)),w=G}if(w.visible=I.visible,w.wireframe=I.wireframe,y===vn?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:f[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,z.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const V=s.properties.get(w);V.light=z}return w}function b(L,I,z,y,w){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===vn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,L.matrixWorld);const it=t.update(L),D=L.material;if(Array.isArray(D)){const G=it.groups;for(let H=0,F=G.length;H<F;H++){const tt=G[H],Z=D[tt.materialIndex];if(Z&&Z.visible){const X=_(L,Z,y,w);L.onBeforeShadow(s,L,I,z,it,X,tt),s.renderBufferDirect(z,null,it,X,L,tt),L.onAfterShadow(s,L,I,z,it,X,tt)}}}else if(D.visible){const G=_(L,D,y,w);L.onBeforeShadow(s,L,I,z,it,G,null),s.renderBufferDirect(z,null,it,G,L,null),L.onAfterShadow(s,L,I,z,it,G,null)}}const V=L.children;for(let it=0,D=V.length;it<D;it++)b(V[it],I,z,y,w)}function C(L){L.target.removeEventListener("dispose",C);for(const z in h){const y=h[z],w=L.target.uuid;w in y&&(y[w].dispose(),delete y[w])}}}function Dp(s,t,e){const n=e.isWebGL2;function i(){let S=!1;const k=new ve;let j=null;const Et=new ve(0,0,0,0);return{setMask:function(rt){j!==rt&&!S&&(s.colorMask(rt,rt,rt,rt),j=rt)},setLocked:function(rt){S=rt},setClear:function(rt,bt,kt,oe,ne){ne===!0&&(rt*=oe,bt*=oe,kt*=oe),k.set(rt,bt,kt,oe),Et.equals(k)===!1&&(s.clearColor(rt,bt,kt,oe),Et.copy(k))},reset:function(){S=!1,j=null,Et.set(-1,0,0,0)}}}function o(){let S=!1,k=null,j=null,Et=null;return{setTest:function(rt){rt?Rt(s.DEPTH_TEST):st(s.DEPTH_TEST)},setMask:function(rt){k!==rt&&!S&&(s.depthMask(rt),k=rt)},setFunc:function(rt){if(j!==rt){switch(rt){case Vc:s.depthFunc(s.NEVER);break;case Hc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Xc:s.depthFunc(s.EQUAL);break;case qc:s.depthFunc(s.GEQUAL);break;case Yc:s.depthFunc(s.GREATER);break;case Zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=rt}},setLocked:function(rt){S=rt},setClear:function(rt){Et!==rt&&(s.clearDepth(rt),Et=rt)},reset:function(){S=!1,k=null,j=null,Et=null}}}function r(){let S=!1,k=null,j=null,Et=null,rt=null,bt=null,kt=null,oe=null,ne=null;return{setTest:function(Ht){S||(Ht?Rt(s.STENCIL_TEST):st(s.STENCIL_TEST))},setMask:function(Ht){k!==Ht&&!S&&(s.stencilMask(Ht),k=Ht)},setFunc:function(Ht,ue,Ct){(j!==Ht||Et!==ue||rt!==Ct)&&(s.stencilFunc(Ht,ue,Ct),j=Ht,Et=ue,rt=Ct)},setOp:function(Ht,ue,Ct){(bt!==Ht||kt!==ue||oe!==Ct)&&(s.stencilOp(Ht,ue,Ct),bt=Ht,kt=ue,oe=Ct)},setLocked:function(Ht){S=Ht},setClear:function(Ht){ne!==Ht&&(s.clearStencil(Ht),ne=Ht)},reset:function(){S=!1,k=null,j=null,Et=null,rt=null,bt=null,kt=null,oe=null,ne=null}}}const a=new i,c=new o,h=new r,d=new WeakMap,f=new WeakMap;let l={},u={},g=new WeakMap,x=[],m=null,p=!1,M=null,_=null,b=null,C=null,L=null,I=null,z=null,y=new ce(0,0,0),w=0,T=!1,V=null,it=null,D=null,G=null,H=null;const F=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,Z=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),tt=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),tt=Z>=2);let K=null,ht={};const J=s.getParameter(s.SCISSOR_BOX),Q=s.getParameter(s.VIEWPORT),lt=new ve().fromArray(J),ot=new ve().fromArray(Q);function nt(S,k,j,Et){const rt=new Uint8Array(4),bt=s.createTexture();s.bindTexture(S,bt),s.texParameteri(S,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(S,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<j;kt++)n&&(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)?s.texImage3D(k,0,s.RGBA,1,1,Et,0,s.RGBA,s.UNSIGNED_BYTE,rt):s.texImage2D(k+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,rt);return bt}const St={};St[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(St[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Rt(s.DEPTH_TEST),c.setFunc(Ts),Mt(!1),A(tr),Rt(s.CULL_FACE),ct(In);function Rt(S){l[S]!==!0&&(s.enable(S),l[S]=!0)}function st(S){l[S]!==!1&&(s.disable(S),l[S]=!1)}function Tt(S,k){return u[S]!==k?(s.bindFramebuffer(S,k),u[S]=k,n&&(S===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=k),S===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=k)),!0):!1}function U(S,k){let j=x,Et=!1;if(S)if(j=g.get(k),j===void 0&&(j=[],g.set(k,j)),S.isWebGLMultipleRenderTargets){const rt=S.texture;if(j.length!==rt.length||j[0]!==s.COLOR_ATTACHMENT0){for(let bt=0,kt=rt.length;bt<kt;bt++)j[bt]=s.COLOR_ATTACHMENT0+bt;j.length=rt.length,Et=!0}}else j[0]!==s.COLOR_ATTACHMENT0&&(j[0]=s.COLOR_ATTACHMENT0,Et=!0);else j[0]!==s.BACK&&(j[0]=s.BACK,Et=!0);Et&&(e.isWebGL2?s.drawBuffers(j):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function pt(S){return m!==S?(s.useProgram(S),m=S,!0):!1}const at={[Xn]:s.FUNC_ADD,[Ac]:s.FUNC_SUBTRACT,[Rc]:s.FUNC_REVERSE_SUBTRACT};if(n)at[sr]=s.MIN,at[or]=s.MAX;else{const S=t.get("EXT_blend_minmax");S!==null&&(at[sr]=S.MIN_EXT,at[or]=S.MAX_EXT)}const _t={[Pc]:s.ZERO,[Cc]:s.ONE,[Lc]:s.SRC_COLOR,[Ao]:s.SRC_ALPHA,[Oc]:s.SRC_ALPHA_SATURATE,[Nc]:s.DST_COLOR,[Dc]:s.DST_ALPHA,[Ic]:s.ONE_MINUS_SRC_COLOR,[Ro]:s.ONE_MINUS_SRC_ALPHA,[Fc]:s.ONE_MINUS_DST_COLOR,[Uc]:s.ONE_MINUS_DST_ALPHA,[Gc]:s.CONSTANT_COLOR,[Bc]:s.ONE_MINUS_CONSTANT_COLOR,[kc]:s.CONSTANT_ALPHA,[zc]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(S,k,j,Et,rt,bt,kt,oe,ne,Ht){if(S===In){p===!0&&(st(s.BLEND),p=!1);return}if(p===!1&&(Rt(s.BLEND),p=!0),S!==Tc){if(S!==M||Ht!==T){if((_!==Xn||L!==Xn)&&(s.blendEquation(s.FUNC_ADD),_=Xn,L=Xn),Ht)switch(S){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.ONE,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}b=null,C=null,I=null,z=null,y.set(0,0,0),w=0,M=S,T=Ht}return}rt=rt||k,bt=bt||j,kt=kt||Et,(k!==_||rt!==L)&&(s.blendEquationSeparate(at[k],at[rt]),_=k,L=rt),(j!==b||Et!==C||bt!==I||kt!==z)&&(s.blendFuncSeparate(_t[j],_t[Et],_t[bt],_t[kt]),b=j,C=Et,I=bt,z=kt),(oe.equals(y)===!1||ne!==w)&&(s.blendColor(oe.r,oe.g,oe.b,ne),y.copy(oe),w=ne),M=S,T=!1}function Gt(S,k){S.side===Ee?st(s.CULL_FACE):Rt(s.CULL_FACE);let j=S.side===He;k&&(j=!j),Mt(j),S.blending===Si&&S.transparent===!1?ct(In):ct(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),c.setFunc(S.depthFunc),c.setTest(S.depthTest),c.setMask(S.depthWrite),a.setMask(S.colorWrite);const Et=S.stencilWrite;h.setTest(Et),Et&&(h.setMask(S.stencilWriteMask),h.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),h.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Y(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):st(s.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(S){V!==S&&(S?s.frontFace(s.CW):s.frontFace(s.CCW),V=S)}function A(S){S!==bc?(Rt(s.CULL_FACE),S!==it&&(S===tr?s.cullFace(s.BACK):S===Ec?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):st(s.CULL_FACE),it=S}function E(S){S!==D&&(tt&&s.lineWidth(S),D=S)}function Y(S,k,j){S?(Rt(s.POLYGON_OFFSET_FILL),(G!==k||H!==j)&&(s.polygonOffset(k,j),G=k,H=j)):st(s.POLYGON_OFFSET_FILL)}function gt(S){S?Rt(s.SCISSOR_TEST):st(s.SCISSOR_TEST)}function dt(S){S===void 0&&(S=s.TEXTURE0+F-1),K!==S&&(s.activeTexture(S),K=S)}function ft(S,k,j){j===void 0&&(K===null?j=s.TEXTURE0+F-1:j=K);let Et=ht[j];Et===void 0&&(Et={type:void 0,texture:void 0},ht[j]=Et),(Et.type!==S||Et.texture!==k)&&(K!==j&&(s.activeTexture(j),K=j),s.bindTexture(S,k||St[S]),Et.type=S,Et.texture=k)}function Ft(){const S=ht[K];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function At(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ut(){try{s.compressedTexImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Vt(){try{s.texSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Lt(){try{s.texSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function $t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Kt(){try{s.texStorage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Xt(){try{s.texStorage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Bt(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Pt(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Zt(S){lt.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),lt.copy(S))}function te(S){ot.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),ot.copy(S))}function Ot(S,k){let j=f.get(k);j===void 0&&(j=new WeakMap,f.set(k,j));let Et=j.get(S);Et===void 0&&(Et=s.getUniformBlockIndex(k,S.name),j.set(S,Et))}function yt(S,k){const Et=f.get(k).get(S);d.get(k)!==Et&&(s.uniformBlockBinding(k,Et,S.__bindingPointIndex),d.set(k,Et))}function xt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},K=null,ht={},u={},g=new WeakMap,x=[],m=null,p=!1,M=null,_=null,b=null,C=null,L=null,I=null,z=null,y=new ce(0,0,0),w=0,T=!1,V=null,it=null,D=null,G=null,H=null,lt.set(0,0,s.canvas.width,s.canvas.height),ot.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:Rt,disable:st,bindFramebuffer:Tt,drawBuffers:U,useProgram:pt,setBlending:ct,setMaterial:Gt,setFlipSided:Mt,setCullFace:A,setLineWidth:E,setPolygonOffset:Y,setScissorTest:gt,activeTexture:dt,bindTexture:ft,unbindTexture:Ft,compressedTexImage2D:At,compressedTexImage3D:Ut,texImage2D:Bt,texImage3D:Pt,updateUBOMapping:Ot,uniformBlockBinding:yt,texStorage2D:Kt,texStorage3D:Xt,texSubImage2D:Vt,texSubImage3D:Lt,compressedTexSubImage2D:vt,compressedTexSubImage3D:$t,scissor:Zt,viewport:te,reset:xt}}function Up(s,t,e,n,i,o,r){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const l=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return u?new OffscreenCanvas(A,E):Is("canvas")}function x(A,E,Y,gt){let dt=1;if((A.width>gt||A.height>gt)&&(dt=gt/Math.max(A.width,A.height)),dt<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ft=E?Ls:Math.floor,Ft=ft(dt*A.width),At=ft(dt*A.height);f===void 0&&(f=g(Ft,At));const Ut=Y?g(Ft,At):f;return Ut.width=Ft,Ut.height=At,Ut.getContext("2d").drawImage(A,0,0,Ft,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ft+"x"+At+")."),Ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Do(A.width)&&Do(A.height)}function p(A){return a?!1:A.wrapS!==sn||A.wrapT!==sn||A.minFilter!==Ve&&A.minFilter!==je}function M(A,E){return A.generateMipmaps&&E&&A.minFilter!==Ve&&A.minFilter!==je}function _(A){s.generateMipmap(A)}function b(A,E,Y,gt,dt=!1){if(a===!1)return E;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ft=E;if(E===s.RED&&(Y===s.FLOAT&&(ft=s.R32F),Y===s.HALF_FLOAT&&(ft=s.R16F),Y===s.UNSIGNED_BYTE&&(ft=s.R8)),E===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(ft=s.R8UI),Y===s.UNSIGNED_SHORT&&(ft=s.R16UI),Y===s.UNSIGNED_INT&&(ft=s.R32UI),Y===s.BYTE&&(ft=s.R8I),Y===s.SHORT&&(ft=s.R16I),Y===s.INT&&(ft=s.R32I)),E===s.RG&&(Y===s.FLOAT&&(ft=s.RG32F),Y===s.HALF_FLOAT&&(ft=s.RG16F),Y===s.UNSIGNED_BYTE&&(ft=s.RG8)),E===s.RGBA){const Ft=dt?As:me.getTransfer(gt);Y===s.FLOAT&&(ft=s.RGBA32F),Y===s.HALF_FLOAT&&(ft=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(ft=Ft===_e?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(ft=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(ft=s.RGB5_A1)}return(ft===s.R16F||ft===s.R32F||ft===s.RG16F||ft===s.RG32F||ft===s.RGBA16F||ft===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function C(A,E,Y){return M(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==je?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function L(A){return A===Ve||A===rr||A===Xs?s.NEAREST:s.LINEAR}function I(A){const E=A.target;E.removeEventListener("dispose",I),y(E),E.isVideoTexture&&d.delete(E)}function z(A){const E=A.target;E.removeEventListener("dispose",z),T(E)}function y(A){const E=n.get(A);if(E.__webglInit===void 0)return;const Y=A.source,gt=l.get(Y);if(gt){const dt=gt[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&w(A),Object.keys(gt).length===0&&l.delete(Y)}n.remove(A)}function w(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const Y=A.source,gt=l.get(Y);delete gt[E.__cacheKey],r.memory.textures--}function T(A){const E=A.texture,Y=n.get(A),gt=n.get(E);if(gt.__webglTexture!==void 0&&(s.deleteTexture(gt.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(Y.__webglFramebuffer[dt]))for(let ft=0;ft<Y.__webglFramebuffer[dt].length;ft++)s.deleteFramebuffer(Y.__webglFramebuffer[dt][ft]);else s.deleteFramebuffer(Y.__webglFramebuffer[dt]);Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[dt])}else{if(Array.isArray(Y.__webglFramebuffer))for(let dt=0;dt<Y.__webglFramebuffer.length;dt++)s.deleteFramebuffer(Y.__webglFramebuffer[dt]);else s.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let dt=0;dt<Y.__webglColorRenderbuffer.length;dt++)Y.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[dt]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let dt=0,ft=E.length;dt<ft;dt++){const Ft=n.get(E[dt]);Ft.__webglTexture&&(s.deleteTexture(Ft.__webglTexture),r.memory.textures--),n.remove(E[dt])}n.remove(E),n.remove(A)}let V=0;function it(){V=0}function D(){const A=V;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),V+=1,A}function G(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function H(A,E){const Y=n.get(A);if(A.isVideoTexture&&Gt(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const gt=A.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(Y,A,E);return}}e.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+E)}function F(A,E){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){lt(Y,A,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+E)}function tt(A,E){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){lt(Y,A,E);return}e.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+E)}function Z(A,E){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){ot(Y,A,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+E)}const X={[Re]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},K={[Ve]:s.NEAREST,[rr]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[nl]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},ht={[pl]:s.NEVER,[xl]:s.ALWAYS,[ml]:s.LESS,[Xa]:s.LEQUAL,[gl]:s.EQUAL,[vl]:s.GEQUAL,[_l]:s.GREATER,[Ml]:s.NOTEQUAL};function J(A,E,Y){if(Y?(s.texParameteri(A,s.TEXTURE_WRAP_S,X[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,X[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,X[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,K[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,K[E.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==sn||E.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,L(E.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==Ve&&E.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ht[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const gt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ve||E.minFilter!==Xs&&E.minFilter!==Xi||E.type===Cn&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===qi&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(A,gt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function Q(A,E){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",I));const gt=E.source;let dt=l.get(gt);dt===void 0&&(dt={},l.set(gt,dt));const ft=G(E);if(ft!==A.__cacheKey){dt[ft]===void 0&&(dt[ft]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),dt[ft].usedTimes++;const Ft=dt[A.__cacheKey];Ft!==void 0&&(dt[A.__cacheKey].usedTimes--,Ft.usedTimes===0&&w(E)),A.__cacheKey=ft,A.__webglTexture=dt[ft].texture}return Y}function lt(A,E,Y){let gt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(gt=s.TEXTURE_3D);const dt=Q(A,E),ft=E.source;e.bindTexture(gt,A.__webglTexture,s.TEXTURE0+Y);const Ft=n.get(ft);if(ft.version!==Ft.__version||dt===!0){e.activeTexture(s.TEXTURE0+Y);const At=me.getPrimaries(me.workingColorSpace),Ut=E.colorSpace===$e?null:me.getPrimaries(E.colorSpace),Vt=E.colorSpace===$e||At===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const Lt=p(E)&&m(E.image)===!1;let vt=x(E.image,Lt,!1,i.maxTextureSize);vt=Mt(E,vt);const $t=m(vt)||a,Kt=o.convert(E.format,E.colorSpace);let Xt=o.convert(E.type),Bt=b(E.internalFormat,Kt,Xt,E.colorSpace,E.isVideoTexture);J(gt,E,$t);let Pt;const Zt=E.mipmaps,te=a&&E.isVideoTexture!==!0&&Bt!==Va,Ot=Ft.__version===void 0||dt===!0,yt=C(E,vt,$t);if(E.isDepthTexture)Bt=s.DEPTH_COMPONENT,a?E.type===Cn?Bt=s.DEPTH_COMPONENT32F:E.type===Pn?Bt=s.DEPTH_COMPONENT24:E.type===Zn?Bt=s.DEPTH24_STENCIL8:Bt=s.DEPTH_COMPONENT16:E.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Kn&&Bt===s.DEPTH_COMPONENT&&E.type!==Bo&&E.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Pn,Xt=o.convert(E.type)),E.format===Ti&&Bt===s.DEPTH_COMPONENT&&(Bt=s.DEPTH_STENCIL,E.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Zn,Xt=o.convert(E.type))),Ot&&(te?e.texStorage2D(s.TEXTURE_2D,1,Bt,vt.width,vt.height):e.texImage2D(s.TEXTURE_2D,0,Bt,vt.width,vt.height,0,Kt,Xt,null));else if(E.isDataTexture)if(Zt.length>0&&$t){te&&Ot&&e.texStorage2D(s.TEXTURE_2D,yt,Bt,Zt[0].width,Zt[0].height);for(let xt=0,S=Zt.length;xt<S;xt++)Pt=Zt[xt],te?e.texSubImage2D(s.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Kt,Xt,Pt.data):e.texImage2D(s.TEXTURE_2D,xt,Bt,Pt.width,Pt.height,0,Kt,Xt,Pt.data);E.generateMipmaps=!1}else te?(Ot&&e.texStorage2D(s.TEXTURE_2D,yt,Bt,vt.width,vt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt.width,vt.height,Kt,Xt,vt.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,vt.width,vt.height,0,Kt,Xt,vt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){te&&Ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,Bt,Zt[0].width,Zt[0].height,vt.depth);for(let xt=0,S=Zt.length;xt<S;xt++)Pt=Zt[xt],E.format!==on?Kt!==null?te?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,Pt.width,Pt.height,vt.depth,Kt,Pt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xt,Bt,Pt.width,Pt.height,vt.depth,0,Pt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(s.TEXTURE_2D_ARRAY,xt,0,0,0,Pt.width,Pt.height,vt.depth,Kt,Xt,Pt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,xt,Bt,Pt.width,Pt.height,vt.depth,0,Kt,Xt,Pt.data)}else{te&&Ot&&e.texStorage2D(s.TEXTURE_2D,yt,Bt,Zt[0].width,Zt[0].height);for(let xt=0,S=Zt.length;xt<S;xt++)Pt=Zt[xt],E.format!==on?Kt!==null?te?e.compressedTexSubImage2D(s.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Kt,Pt.data):e.compressedTexImage2D(s.TEXTURE_2D,xt,Bt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(s.TEXTURE_2D,xt,0,0,Pt.width,Pt.height,Kt,Xt,Pt.data):e.texImage2D(s.TEXTURE_2D,xt,Bt,Pt.width,Pt.height,0,Kt,Xt,Pt.data)}else if(E.isDataArrayTexture)te?(Ot&&e.texStorage3D(s.TEXTURE_2D_ARRAY,yt,Bt,vt.width,vt.height,vt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Kt,Xt,vt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,vt.width,vt.height,vt.depth,0,Kt,Xt,vt.data);else if(E.isData3DTexture)te?(Ot&&e.texStorage3D(s.TEXTURE_3D,yt,Bt,vt.width,vt.height,vt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Kt,Xt,vt.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,vt.width,vt.height,vt.depth,0,Kt,Xt,vt.data);else if(E.isFramebufferTexture){if(Ot)if(te)e.texStorage2D(s.TEXTURE_2D,yt,Bt,vt.width,vt.height);else{let xt=vt.width,S=vt.height;for(let k=0;k<yt;k++)e.texImage2D(s.TEXTURE_2D,k,Bt,xt,S,0,Kt,Xt,null),xt>>=1,S>>=1}}else if(Zt.length>0&&$t){te&&Ot&&e.texStorage2D(s.TEXTURE_2D,yt,Bt,Zt[0].width,Zt[0].height);for(let xt=0,S=Zt.length;xt<S;xt++)Pt=Zt[xt],te?e.texSubImage2D(s.TEXTURE_2D,xt,0,0,Kt,Xt,Pt):e.texImage2D(s.TEXTURE_2D,xt,Bt,Kt,Xt,Pt);E.generateMipmaps=!1}else te?(Ot&&e.texStorage2D(s.TEXTURE_2D,yt,Bt,vt.width,vt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Kt,Xt,vt)):e.texImage2D(s.TEXTURE_2D,0,Bt,Kt,Xt,vt);M(E,$t)&&_(gt),Ft.__version=ft.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function ot(A,E,Y){if(E.image.length!==6)return;const gt=Q(A,E),dt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+Y);const ft=n.get(dt);if(dt.version!==ft.__version||gt===!0){e.activeTexture(s.TEXTURE0+Y);const Ft=me.getPrimaries(me.workingColorSpace),At=E.colorSpace===$e?null:me.getPrimaries(E.colorSpace),Ut=E.colorSpace===$e||Ft===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,Lt=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let xt=0;xt<6;xt++)!Vt&&!Lt?vt[xt]=x(E.image[xt],!1,!0,i.maxCubemapSize):vt[xt]=Lt?E.image[xt].image:E.image[xt],vt[xt]=Mt(E,vt[xt]);const $t=vt[0],Kt=m($t)||a,Xt=o.convert(E.format,E.colorSpace),Bt=o.convert(E.type),Pt=b(E.internalFormat,Xt,Bt,E.colorSpace),Zt=a&&E.isVideoTexture!==!0,te=ft.__version===void 0||gt===!0;let Ot=C(E,$t,Kt);J(s.TEXTURE_CUBE_MAP,E,Kt);let yt;if(Vt){Zt&&te&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,Pt,$t.width,$t.height);for(let xt=0;xt<6;xt++){yt=vt[xt].mipmaps;for(let S=0;S<yt.length;S++){const k=yt[S];E.format!==on?Xt!==null?Zt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S,0,0,k.width,k.height,Xt,k.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S,Pt,k.width,k.height,0,k.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S,0,0,k.width,k.height,Xt,Bt,k.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S,Pt,k.width,k.height,0,Xt,Bt,k.data)}}}else{yt=E.mipmaps,Zt&&te&&(yt.length>0&&Ot++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Ot,Pt,vt[0].width,vt[0].height));for(let xt=0;xt<6;xt++)if(Lt){Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,vt[xt].width,vt[xt].height,Xt,Bt,vt[xt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Pt,vt[xt].width,vt[xt].height,0,Xt,Bt,vt[xt].data);for(let S=0;S<yt.length;S++){const j=yt[S].image[xt].image;Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S+1,0,0,j.width,j.height,Xt,Bt,j.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S+1,Pt,j.width,j.height,0,Xt,Bt,j.data)}}else{Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Xt,Bt,vt[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,Pt,Xt,Bt,vt[xt]);for(let S=0;S<yt.length;S++){const k=yt[S];Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S+1,0,0,Xt,Bt,k.image[xt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xt,S+1,Pt,Xt,Bt,k.image[xt])}}}M(E,Kt)&&_(s.TEXTURE_CUBE_MAP),ft.__version=dt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function nt(A,E,Y,gt,dt,ft){const Ft=o.convert(Y.format,Y.colorSpace),At=o.convert(Y.type),Ut=b(Y.internalFormat,Ft,At,Y.colorSpace);if(!n.get(E).__hasExternalTextures){const Lt=Math.max(1,E.width>>ft),vt=Math.max(1,E.height>>ft);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?e.texImage3D(dt,ft,Ut,Lt,vt,E.depth,0,Ft,At,null):e.texImage2D(dt,ft,Ut,Lt,vt,0,Ft,At,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ct(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,dt,n.get(Y).__webglTexture,0,_t(E)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,dt,n.get(Y).__webglTexture,ft),e.bindFramebuffer(s.FRAMEBUFFER,null)}function St(A,E,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let gt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Y||ct(E)){const dt=E.depthTexture;dt&&dt.isDepthTexture&&(dt.type===Cn?gt=s.DEPTH_COMPONENT32F:dt.type===Pn&&(gt=s.DEPTH_COMPONENT24));const ft=_t(E);ct(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,gt,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,gt,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,gt,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const gt=_t(E);Y&&ct(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,s.DEPTH24_STENCIL8,E.width,E.height):ct(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const gt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let dt=0;dt<gt.length;dt++){const ft=gt[dt],Ft=o.convert(ft.format,ft.colorSpace),At=o.convert(ft.type),Ut=b(ft.internalFormat,Ft,At,ft.colorSpace),Vt=_t(E);Y&&ct(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Ut,E.width,E.height):ct(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,Ut,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ut,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),H(E.depthTexture,0);const gt=n.get(E.depthTexture).__webglTexture,dt=_t(E);if(E.depthTexture.format===Kn)ct(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,gt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,gt,0);else if(E.depthTexture.format===Ti)ct(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,gt,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,gt,0);else throw new Error("Unknown depthTexture format")}function st(A){const E=n.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Rt(E.__webglFramebuffer,A)}else if(Y){E.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[gt]),E.__webglDepthbuffer[gt]=s.createRenderbuffer(),St(E.__webglDepthbuffer[gt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),St(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(A,E,Y){const gt=n.get(A);E!==void 0&&nt(gt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&st(A)}function U(A){const E=A.texture,Y=n.get(A),gt=n.get(E);A.addEventListener("dispose",z),A.isWebGLMultipleRenderTargets!==!0&&(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=E.version,r.memory.textures++);const dt=A.isWebGLCubeRenderTarget===!0,ft=A.isWebGLMultipleRenderTargets===!0,Ft=m(A)||a;if(dt){Y.__webglFramebuffer=[];for(let At=0;At<6;At++)if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[At]=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)Y.__webglFramebuffer[At][Ut]=s.createFramebuffer()}else Y.__webglFramebuffer[At]=s.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)Y.__webglFramebuffer[At]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(ft)if(i.drawBuffers){const At=A.texture;for(let Ut=0,Vt=At.length;Ut<Vt;Ut++){const Lt=n.get(At[Ut]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ct(A)===!1){const At=ft?E:[E];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ut=0;Ut<At.length;Ut++){const Vt=At[Ut];Y.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut]);const Lt=o.convert(Vt.format,Vt.colorSpace),vt=o.convert(Vt.type),$t=b(Vt.internalFormat,Lt,vt,Vt.colorSpace,A.isXRRenderTarget===!0),Kt=_t(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,$t,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),St(Y.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),J(s.TEXTURE_CUBE_MAP,E,Ft);for(let At=0;At<6;At++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Ut=0;Ut<E.mipmaps.length;Ut++)nt(Y.__webglFramebuffer[At][Ut],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ut);else nt(Y.__webglFramebuffer[At],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);M(E,Ft)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){const At=A.texture;for(let Ut=0,Vt=At.length;Ut<Vt;Ut++){const Lt=At[Ut],vt=n.get(Lt);e.bindTexture(s.TEXTURE_2D,vt.__webglTexture),J(s.TEXTURE_2D,Lt,Ft),nt(Y.__webglFramebuffer,A,Lt,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,0),M(Lt,Ft)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let At=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?At=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(At,gt.__webglTexture),J(At,E,Ft),a&&E.mipmaps&&E.mipmaps.length>0)for(let Ut=0;Ut<E.mipmaps.length;Ut++)nt(Y.__webglFramebuffer[Ut],A,E,s.COLOR_ATTACHMENT0,At,Ut);else nt(Y.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,At,0);M(E,Ft)&&_(At),e.unbindTexture()}A.depthBuffer&&st(A)}function pt(A){const E=m(A)||a,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let gt=0,dt=Y.length;gt<dt;gt++){const ft=Y[gt];if(M(ft,E)){const Ft=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,At=n.get(ft).__webglTexture;e.bindTexture(Ft,At),_(Ft),e.unbindTexture()}}}function at(A){if(a&&A.samples>0&&ct(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Y=A.width,gt=A.height;let dt=s.COLOR_BUFFER_BIT;const ft=[],Ft=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(A),Ut=A.isWebGLMultipleRenderTargets===!0;if(Ut)for(let Vt=0;Vt<E.length;Vt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Vt=0;Vt<E.length;Vt++){ft.push(s.COLOR_ATTACHMENT0+Vt),A.depthBuffer&&ft.push(Ft);const Lt=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(Lt===!1&&(A.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),Ut&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[Vt]),Lt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ft]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ft])),Ut){const vt=n.get(E[Vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,vt,0)}s.blitFramebuffer(0,0,Y,gt,0,0,Y,gt,dt,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let Vt=0;Vt<E.length;Vt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.RENDERBUFFER,At.__webglColorRenderbuffer[Vt]);const Lt=n.get(E[Vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.TEXTURE_2D,Lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function _t(A){return Math.min(i.maxSamples,A.samples)}function ct(A){const E=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Gt(A){const E=r.render.frame;d.get(A)!==E&&(d.set(A,E),A.update())}function Mt(A,E){const Y=A.colorSpace,gt=A.format,dt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Io||Y!==wn&&Y!==$e&&(me.getTransfer(Y)===_e?a===!1?t.has("EXT_sRGB")===!0&&gt===on?(A.format=Io,A.minFilter=je,A.generateMipmaps=!1):E=Ya.sRGBToLinear(E):(gt!==on||dt!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}this.allocateTextureUnit=D,this.resetTextureUnits=it,this.setTexture2D=H,this.setTexture2DArray=F,this.setTexture3D=tt,this.setTextureCube=Z,this.rebindTextures=Tt,this.setupRenderTarget=U,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=ct}function Np(s,t,e){const n=e.isWebGL2;function i(o,r=$e){let a;const c=me.getTransfer(r);if(o===Un)return s.UNSIGNED_BYTE;if(o===Oa)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Ga)return s.UNSIGNED_SHORT_5_5_5_1;if(o===il)return s.BYTE;if(o===sl)return s.SHORT;if(o===Bo)return s.UNSIGNED_SHORT;if(o===Fa)return s.INT;if(o===Pn)return s.UNSIGNED_INT;if(o===Cn)return s.FLOAT;if(o===qi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===ol)return s.ALPHA;if(o===on)return s.RGBA;if(o===rl)return s.LUMINANCE;if(o===al)return s.LUMINANCE_ALPHA;if(o===Kn)return s.DEPTH_COMPONENT;if(o===Ti)return s.DEPTH_STENCIL;if(o===Io)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===cl)return s.RED;if(o===Ba)return s.RED_INTEGER;if(o===ll)return s.RG;if(o===ka)return s.RG_INTEGER;if(o===za)return s.RGBA_INTEGER;if(o===qs||o===Ys||o===Zs||o===Ks)if(c===_e)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Zs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ar||o===cr||o===lr||o===hr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===ar)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===cr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===lr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===hr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Va)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===dr||o===ur)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(o===dr)return c===_e?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===ur)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fr||o===pr||o===mr||o===gr||o===_r||o===Mr||o===vr||o===xr||o===wr||o===Sr||o===yr||o===br||o===Er||o===Tr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(o===fr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===pr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===mr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===gr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===_r)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Mr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===vr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===xr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===wr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Sr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===yr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===br)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Er)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Tr)return c===_e?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Js||o===Ar||o===Rr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(o===Js)return c===_e?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ar)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Rr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===hl||o===Pr||o===Cr||o===Lr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(o===Js)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Pr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Cr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Lr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Zn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:i}}class Fp extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Op={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],l=d.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&l>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&l<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Op)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new mt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Gp extends Pi{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,h=null,d=null,f=null,l=null,u=null,g=null;const x=e.getContextAttributes();let m=null,p=null;const M=[],_=[],b=new It;let C=null;const L=new We;L.layers.enable(1),L.viewport=new ve;const I=new We;I.layers.enable(2),I.viewport=new ve;const z=[L,I],y=new Fp;y.layers.enable(1),y.layers.enable(2);let w=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=M[J];return Q===void 0&&(Q=new xo,M[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=M[J];return Q===void 0&&(Q=new xo,M[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=M[J];return Q===void 0&&(Q=new xo,M[J]=Q),Q.getHandSpace()};function V(J){const Q=_.indexOf(J.inputSource);if(Q===-1)return;const lt=M[Q];lt!==void 0&&(lt.update(J.inputSource,J.frame,h||r),lt.dispatchEvent({type:J.type,data:J.inputSource}))}function it(){i.removeEventListener("select",V),i.removeEventListener("selectstart",V),i.removeEventListener("selectend",V),i.removeEventListener("squeeze",V),i.removeEventListener("squeezestart",V),i.removeEventListener("squeezeend",V),i.removeEventListener("end",it),i.removeEventListener("inputsourceschange",D);for(let J=0;J<M.length;J++){const Q=_[J];Q!==null&&(_[J]=null,M[J].disconnect(Q))}w=null,T=null,t.setRenderTarget(m),u=null,l=null,f=null,i=null,p=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return l!==null?l:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",V),i.addEventListener("selectstart",V),i.addEventListener("selectend",V),i.addEventListener("squeeze",V),i.addEventListener("squeezestart",V),i.addEventListener("squeezeend",V),i.addEventListener("end",it),i.addEventListener("inputsourceschange",D),x.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(b),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new jn(u.framebufferWidth,u.framebufferHeight,{format:on,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,lt=null,ot=null;x.depth&&(ot=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=x.stencil?Ti:Kn,lt=x.stencil?Zn:Pn);const nt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:o};f=new XRWebGLBinding(i,e),l=f.createProjectionLayer(nt),i.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),p=new jn(l.textureWidth,l.textureHeight,{format:on,type:Un,depthTexture:new rc(l.textureWidth,l.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const St=t.properties.get(p);St.__ignoreDepthValues=l.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,r=await i.requestReferenceSpace(a),ht.setContext(i),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function D(J){for(let Q=0;Q<J.removed.length;Q++){const lt=J.removed[Q],ot=_.indexOf(lt);ot>=0&&(_[ot]=null,M[ot].disconnect(lt))}for(let Q=0;Q<J.added.length;Q++){const lt=J.added[Q];let ot=_.indexOf(lt);if(ot===-1){for(let St=0;St<M.length;St++)if(St>=_.length){_.push(lt),ot=St;break}else if(_[St]===null){_[St]=lt,ot=St;break}if(ot===-1)break}const nt=M[ot];nt&&nt.connect(lt)}}const G=new N,H=new N;function F(J,Q,lt){G.setFromMatrixPosition(Q.matrixWorld),H.setFromMatrixPosition(lt.matrixWorld);const ot=G.distanceTo(H),nt=Q.projectionMatrix.elements,St=lt.projectionMatrix.elements,Rt=nt[14]/(nt[10]-1),st=nt[14]/(nt[10]+1),Tt=(nt[9]+1)/nt[5],U=(nt[9]-1)/nt[5],pt=(nt[8]-1)/nt[0],at=(St[8]+1)/St[0],_t=Rt*pt,ct=Rt*at,Gt=ot/(-pt+at),Mt=Gt*-pt;Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Mt),J.translateZ(Gt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const A=Rt+Gt,E=st+Gt,Y=_t-Mt,gt=ct+(ot-Mt),dt=Tt*st/E*A,ft=U*st/E*A;J.projectionMatrix.makePerspective(Y,gt,dt,ft,A,E),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function tt(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;y.near=I.near=L.near=J.near,y.far=I.far=L.far=J.far,(w!==y.near||T!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,T=y.far);const Q=J.parent,lt=y.cameras;tt(y,Q);for(let ot=0;ot<lt.length;ot++)tt(lt[ot],Q);lt.length===2?F(y,L,I):y.projectionMatrix.copy(L.projectionMatrix),Z(J,y,Q)};function Z(J,Q,lt){lt===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(lt.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ai*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(l===null&&u===null))return c},this.setFoveation=function(J){c=J,l!==null&&(l.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)};let X=null;function K(J,Q){if(d=Q.getViewerPose(h||r),g=Q,d!==null){const lt=d.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let ot=!1;lt.length!==y.cameras.length&&(y.cameras.length=0,ot=!0);for(let nt=0;nt<lt.length;nt++){const St=lt[nt];let Rt=null;if(u!==null)Rt=u.getViewport(St);else{const Tt=f.getViewSubImage(l,St);Rt=Tt.viewport,nt===0&&(t.setRenderTargetTextures(p,Tt.colorTexture,l.ignoreDepthValues?void 0:Tt.depthStencilTexture),t.setRenderTarget(p))}let st=z[nt];st===void 0&&(st=new We,st.layers.enable(nt),st.viewport=new ve,z[nt]=st),st.matrix.fromArray(St.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(St.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),nt===0&&(y.matrix.copy(st.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ot===!0&&y.cameras.push(st)}}for(let lt=0;lt<M.length;lt++){const ot=_[lt],nt=M[lt];ot!==null&&nt!==void 0&&nt.update(ot,Q,h||r)}X&&X(J,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ht=new sc;ht.setAnimationLoop(K),this.setAnimationLoop=function(J){X=J},this.dispose=function(){}}}function Bp(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ec(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,_,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),f(m,p)):p.isMeshPhongMaterial?(o(m,p),d(m,p)):p.isMeshStandardMaterial?(o(m,p),l(m,p),p.isMeshPhysicalMaterial&&u(m,p,b)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,_):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function l(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kp(s,t,e,n){let i={},o={},r=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(M,_){const b=_.program;n.uniformBlockBinding(M,b)}function h(M,_){let b=i[M.id];b===void 0&&(g(M),b=d(M),i[M.id]=b,M.addEventListener("dispose",m));const C=_.program;n.updateUBOMapping(M,C);const L=t.render.frame;o[M.id]!==L&&(l(M),o[M.id]=L)}function d(M){const _=f();M.__bindingPointIndex=_;const b=s.createBuffer(),C=M.__size,L=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,C,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,b),b}function f(){for(let M=0;M<a;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(M){const _=i[M.id],b=M.uniforms,C=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let L=0,I=b.length;L<I;L++){const z=Array.isArray(b[L])?b[L]:[b[L]];for(let y=0,w=z.length;y<w;y++){const T=z[y];if(u(T,L,y,C)===!0){const V=T.__offset,it=Array.isArray(T.value)?T.value:[T.value];let D=0;for(let G=0;G<it.length;G++){const H=it[G],F=x(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,V+D,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):(H.toArray(T.__data,D),D+=F.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(M,_,b,C){const L=M.value,I=_+"_"+b;if(C[I]===void 0)return typeof L=="number"||typeof L=="boolean"?C[I]=L:C[I]=L.clone(),!0;{const z=C[I];if(typeof L=="number"||typeof L=="boolean"){if(z!==L)return C[I]=L,!0}else if(z.equals(L)===!1)return z.copy(L),!0}return!1}function g(M){const _=M.uniforms;let b=0;const C=16;for(let I=0,z=_.length;I<z;I++){const y=Array.isArray(_[I])?_[I]:[_[I]];for(let w=0,T=y.length;w<T;w++){const V=y[w],it=Array.isArray(V.value)?V.value:[V.value];for(let D=0,G=it.length;D<G;D++){const H=it[D],F=x(H),tt=b%C;tt!==0&&C-tt<F.boundary&&(b+=C-tt),V.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=F.storage}}}const L=b%C;return L>0&&(b+=C-L),M.__size=b,M.__cache={},this}function x(M){const _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const b=r.indexOf(_.__bindingPointIndex);r.splice(b,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete o[_.id]}function p(){for(const M in i)s.deleteBuffer(i[M]);r=[],i={},o={}}return{bind:c,update:h,dispose:p}}class uc{constructor(t={}){const{canvas:e=Nl(),context:n=null,depth:i=!0,stencil:o=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let l;n!==null?l=n.getContextAttributes().alpha:l=r;const u=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;const _=this;let b=!1,C=0,L=0,I=null,z=-1,y=null;const w=new ve,T=new ve;let V=null;const it=new ce(0);let D=0,G=e.width,H=e.height,F=1,tt=null,Z=null;const X=new ve(0,0,G,H),K=new ve(0,0,G,H);let ht=!1;const J=new Vo;let Q=!1,lt=!1,ot=null;const nt=new ye,St=new It,Rt=new N,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Tt(){return I===null?F:1}let U=n;function pt(R,q){for(let et=0;et<R.length;et++){const P=R[et],O=e.getContext(P,q);if(O!==null)return O}return null}try{const R={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",S,!1),e.addEventListener("webglcontextcreationerror",k,!1),U===null){const q=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&q.shift(),U=pt(q,R),U===null)throw pt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let at,_t,ct,Gt,Mt,A,E,Y,gt,dt,ft,Ft,At,Ut,Vt,Lt,vt,$t,Kt,Xt,Bt,Pt,Zt,te;function Ot(){at=new Ku(U),_t=new Hu(U,at,t),at.init(_t),Pt=new Np(U,at,_t),ct=new Dp(U,at,_t),Gt=new $u(U),Mt=new vp,A=new Up(U,at,ct,Mt,_t,Pt,Gt),E=new Xu(_),Y=new Zu(_),gt=new rh(U,_t),Zt=new zu(U,at,gt,_t),dt=new Ju(U,gt,Gt,Zt),ft=new nf(U,dt,gt,Gt),Kt=new ef(U,_t,A),Lt=new Wu(Mt),Ft=new Mp(_,E,Y,at,_t,Zt,Lt),At=new Bp(_,Mt),Ut=new wp,Vt=new Ap(at,_t),$t=new ku(_,E,Y,ct,ft,l,c),vt=new Ip(_,ft,_t),te=new kp(U,Gt,_t,ct),Xt=new Vu(U,at,Gt,_t),Bt=new ju(U,at,Gt,_t),Gt.programs=Ft.programs,_.capabilities=_t,_.extensions=at,_.properties=Mt,_.renderLists=Ut,_.shadowMap=vt,_.state=ct,_.info=Gt}Ot();const yt=new Gp(_,U);this.xr=yt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=at.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=at.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(R){R!==void 0&&(F=R,this.setSize(G,H,!1))},this.getSize=function(R){return R.set(G,H)},this.setSize=function(R,q,et=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=R,H=q,e.width=Math.floor(R*F),e.height=Math.floor(q*F),et===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(G*F,H*F).floor()},this.setDrawingBufferSize=function(R,q,et){G=R,H=q,F=et,e.width=Math.floor(R*et),e.height=Math.floor(q*et),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(X)},this.setViewport=function(R,q,et,P){R.isVector4?X.set(R.x,R.y,R.z,R.w):X.set(R,q,et,P),ct.viewport(w.copy(X).multiplyScalar(F).floor())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,q,et,P){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,q,et,P),ct.scissor(T.copy(K).multiplyScalar(F).floor())},this.getScissorTest=function(){return ht},this.setScissorTest=function(R){ct.setScissorTest(ht=R)},this.setOpaqueSort=function(R){tt=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(R=!0,q=!0,et=!0){let P=0;if(R){let O=!1;if(I!==null){const $=I.texture.format;O=$===za||$===ka||$===Ba}if(O){const $=I.texture.type,wt=$===Un||$===Pn||$===Bo||$===Zn||$===Oa||$===Ga,Nt=$t.getClearColor(),qt=$t.getClearAlpha(),jt=Nt.r,ee=Nt.g,ie=Nt.b;wt?(u[0]=jt,u[1]=ee,u[2]=ie,u[3]=qt,U.clearBufferuiv(U.COLOR,0,u)):(g[0]=jt,g[1]=ee,g[2]=ie,g[3]=qt,U.clearBufferiv(U.COLOR,0,g))}else P|=U.COLOR_BUFFER_BIT}q&&(P|=U.DEPTH_BUFFER_BIT),et&&(P|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(P)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",S,!1),e.removeEventListener("webglcontextcreationerror",k,!1),Ut.dispose(),Vt.dispose(),Mt.dispose(),E.dispose(),Y.dispose(),ft.dispose(),Zt.dispose(),te.dispose(),Ft.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",ne),yt.removeEventListener("sessionend",Ht),ot&&(ot.dispose(),ot=null),ue.stop()};function xt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function S(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const R=Gt.autoReset,q=vt.enabled,et=vt.autoUpdate,P=vt.needsUpdate,O=vt.type;Ot(),Gt.autoReset=R,vt.enabled=q,vt.autoUpdate=et,vt.needsUpdate=P,vt.type=O}function k(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function j(R){const q=R.target;q.removeEventListener("dispose",j),Et(q)}function Et(R){rt(R),Mt.remove(R)}function rt(R){const q=Mt.get(R).programs;q!==void 0&&(q.forEach(function(et){Ft.releaseProgram(et)}),R.isShaderMaterial&&Ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,et,P,O,$){q===null&&(q=st);const wt=O.isMesh&&O.matrixWorld.determinant()<0,Nt=yn(R,q,et,P,O);ct.setMaterial(P,wt);let qt=et.index,jt=1;if(P.wireframe===!0){if(qt=dt.getWireframeAttribute(et),qt===void 0)return;jt=2}const ee=et.drawRange,ie=et.attributes.position;let be=ee.start*jt,qe=(ee.start+ee.count)*jt;$!==null&&(be=Math.max(be,$.start*jt),qe=Math.min(qe,($.start+$.count)*jt)),qt!==null?(be=Math.max(be,0),qe=Math.min(qe,qt.count)):ie!=null&&(be=Math.max(be,0),qe=Math.min(qe,ie.count));const Ie=qe-be;if(Ie<0||Ie===1/0)return;Zt.setup(O,P,Nt,et,qt);let fn,xe=Xt;if(qt!==null&&(fn=gt.get(qt),xe=Bt,xe.setIndex(fn)),O.isMesh)P.wireframe===!0?(ct.setLineWidth(P.wireframeLinewidth*Tt()),xe.setMode(U.LINES)):xe.setMode(U.TRIANGLES);else if(O.isLine){let re=P.linewidth;re===void 0&&(re=1),ct.setLineWidth(re*Tt()),O.isLineSegments?xe.setMode(U.LINES):O.isLineLoop?xe.setMode(U.LINE_LOOP):xe.setMode(U.LINE_STRIP)}else O.isPoints?xe.setMode(U.POINTS):O.isSprite&&xe.setMode(U.TRIANGLES);if(O.isBatchedMesh)xe.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)xe.renderInstances(be,Ie,O.count);else if(et.isInstancedBufferGeometry){const re=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,zs=Math.min(et.instanceCount,re);xe.renderInstances(be,Ie,zs)}else xe.render(be,Ie)};function bt(R,q,et){R.transparent===!0&&R.side===Ee&&R.forceSinglePass===!1?(R.side=He,R.needsUpdate=!0,Le(R,q,et),R.side=Nn,R.needsUpdate=!0,Le(R,q,et),R.side=Ee):Le(R,q,et)}this.compile=function(R,q,et=null){et===null&&(et=R),m=Vt.get(et),m.init(),M.push(m),et.traverseVisible(function(O){O.isLight&&O.layers.test(q.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),R!==et&&R.traverseVisible(function(O){O.isLight&&O.layers.test(q.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(_._useLegacyLights);const P=new Set;return R.traverse(function(O){const $=O.material;if($)if(Array.isArray($))for(let wt=0;wt<$.length;wt++){const Nt=$[wt];bt(Nt,et,O),P.add(Nt)}else bt($,et,O),P.add($)}),M.pop(),m=null,P},this.compileAsync=function(R,q,et=null){const P=this.compile(R,q,et);return new Promise(O=>{function $(){if(P.forEach(function(wt){Mt.get(wt).currentProgram.isReady()&&P.delete(wt)}),P.size===0){O(R);return}setTimeout($,10)}at.get("KHR_parallel_shader_compile")!==null?$():setTimeout($,10)})};let kt=null;function oe(R){kt&&kt(R)}function ne(){ue.stop()}function Ht(){ue.start()}const ue=new sc;ue.setAnimationLoop(oe),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(R){kt=R,yt.setAnimationLoop(R),R===null?ue.stop():ue.start()},yt.addEventListener("sessionstart",ne),yt.addEventListener("sessionend",Ht),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(q),q=yt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,q,I),m=Vt.get(R,M.length),m.init(),M.push(m),nt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),J.setFromProjectionMatrix(nt),lt=this.localClippingEnabled,Q=Lt.init(this.clippingPlanes,lt),x=Ut.get(R,p.length),x.init(),p.push(x),Ct(R,q,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(tt,Z),this.info.render.frame++,Q===!0&&Lt.beginShadows();const et=m.state.shadowsArray;if(vt.render(et,R,q),Q===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(x,R),m.setupLights(_._useLegacyLights),q.isArrayCamera){const P=q.cameras;for(let O=0,$=P.length;O<$;O++){const wt=P[O];Qt(x,R,wt,wt.viewport)}}else Qt(x,R,q);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(_,R,q),Zt.resetDefaultState(),z=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Ct(R,q,et,P){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)et=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||J.intersectsSprite(R)){P&&Rt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(nt);const wt=ft.update(R),Nt=R.material;Nt.visible&&x.push(R,wt,Nt,et,Rt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||J.intersectsObject(R))){const wt=ft.update(R),Nt=R.material;if(P&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Rt.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Rt.copy(wt.boundingSphere.center)),Rt.applyMatrix4(R.matrixWorld).applyMatrix4(nt)),Array.isArray(Nt)){const qt=wt.groups;for(let jt=0,ee=qt.length;jt<ee;jt++){const ie=qt[jt],be=Nt[ie.materialIndex];be&&be.visible&&x.push(R,wt,be,et,Rt.z,ie)}}else Nt.visible&&x.push(R,wt,Nt,et,Rt.z,null)}}const $=R.children;for(let wt=0,Nt=$.length;wt<Nt;wt++)Ct($[wt],q,et,P)}function Qt(R,q,et,P){const O=R.opaque,$=R.transmissive,wt=R.transparent;m.setupLightsView(et),Q===!0&&Lt.setGlobalState(_.clippingPlanes,et),$.length>0&&zt(O,$,q,et),P&&ct.viewport(w.copy(P)),O.length>0&&pe(O,q,et),$.length>0&&pe($,q,et),wt.length>0&&pe(wt,q,et),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function zt(R,q,et,P){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;const $=_t.isWebGL2;ot===null&&(ot=new jn(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")?qi:Un,minFilter:Xi,samples:$?4:0})),_.getDrawingBufferSize(St),$?ot.setSize(St.x,St.y):ot.setSize(Ls(St.x),Ls(St.y));const wt=_.getRenderTarget();_.setRenderTarget(ot),_.getClearColor(it),D=_.getClearAlpha(),D<1&&_.setClearColor(16777215,.5),_.clear();const Nt=_.toneMapping;_.toneMapping=Dn,pe(R,et,P),A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot);let qt=!1;for(let jt=0,ee=q.length;jt<ee;jt++){const ie=q[jt],be=ie.object,qe=ie.geometry,Ie=ie.material,fn=ie.group;if(Ie.side===Ee&&be.layers.test(P.layers)){const xe=Ie.side;Ie.side=He,Ie.needsUpdate=!0,fe(be,et,P,qe,Ie,fn),Ie.side=xe,Ie.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(ot),A.updateRenderTargetMipmap(ot)),_.setRenderTarget(wt),_.setClearColor(it,D),_.toneMapping=Nt}function pe(R,q,et){const P=q.isScene===!0?q.overrideMaterial:null;for(let O=0,$=R.length;O<$;O++){const wt=R[O],Nt=wt.object,qt=wt.geometry,jt=P===null?wt.material:P,ee=wt.group;Nt.layers.test(et.layers)&&fe(Nt,q,et,qt,jt,ee)}}function fe(R,q,et,P,O,$){R.onBeforeRender(_,q,et,P,O,$),R.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),O.onBeforeRender(_,q,et,P,R,$),O.transparent===!0&&O.side===Ee&&O.forceSinglePass===!1?(O.side=He,O.needsUpdate=!0,_.renderBufferDirect(et,q,P,O,R,$),O.side=Nn,O.needsUpdate=!0,_.renderBufferDirect(et,q,P,O,R,$),O.side=Ee):_.renderBufferDirect(et,q,P,O,R,$),R.onAfterRender(_,q,et,P,O,$)}function Le(R,q,et){q.isScene!==!0&&(q=st);const P=Mt.get(R),O=m.state.lights,$=m.state.shadowsArray,wt=O.state.version,Nt=Ft.getParameters(R,O.state,$,q,et),qt=Ft.getProgramCacheKey(Nt);let jt=P.programs;P.environment=R.isMeshStandardMaterial?q.environment:null,P.fog=q.fog,P.envMap=(R.isMeshStandardMaterial?Y:E).get(R.envMap||P.environment),jt===void 0&&(R.addEventListener("dispose",j),jt=new Map,P.programs=jt);let ee=jt.get(qt);if(ee!==void 0){if(P.currentProgram===ee&&P.lightsStateVersion===wt)return an(R,Nt),ee}else Nt.uniforms=Ft.getUniforms(R),R.onBuild(et,Nt,_),R.onBeforeCompile(Nt,_),ee=Ft.acquireProgram(Nt,qt),jt.set(qt,ee),P.uniforms=Nt.uniforms;const ie=P.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ie.clippingPlanes=Lt.uniform),an(R,Nt),P.needsLights=Fn(R),P.lightsStateVersion=wt,P.needsLights&&(ie.ambientLightColor.value=O.state.ambient,ie.lightProbe.value=O.state.probe,ie.directionalLights.value=O.state.directional,ie.directionalLightShadows.value=O.state.directionalShadow,ie.spotLights.value=O.state.spot,ie.spotLightShadows.value=O.state.spotShadow,ie.rectAreaLights.value=O.state.rectArea,ie.ltc_1.value=O.state.rectAreaLTC1,ie.ltc_2.value=O.state.rectAreaLTC2,ie.pointLights.value=O.state.point,ie.pointLightShadows.value=O.state.pointShadow,ie.hemisphereLights.value=O.state.hemi,ie.directionalShadowMap.value=O.state.directionalShadowMap,ie.directionalShadowMatrix.value=O.state.directionalShadowMatrix,ie.spotShadowMap.value=O.state.spotShadowMap,ie.spotLightMatrix.value=O.state.spotLightMatrix,ie.spotLightMap.value=O.state.spotLightMap,ie.pointShadowMap.value=O.state.pointShadowMap,ie.pointShadowMatrix.value=O.state.pointShadowMatrix),P.currentProgram=ee,P.uniformsList=null,ee}function rn(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Es.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function an(R,q){const et=Mt.get(R);et.outputColorSpace=q.outputColorSpace,et.batching=q.batching,et.instancing=q.instancing,et.instancingColor=q.instancingColor,et.skinning=q.skinning,et.morphTargets=q.morphTargets,et.morphNormals=q.morphNormals,et.morphColors=q.morphColors,et.morphTargetsCount=q.morphTargetsCount,et.numClippingPlanes=q.numClippingPlanes,et.numIntersection=q.numClipIntersection,et.vertexAlphas=q.vertexAlphas,et.vertexTangents=q.vertexTangents,et.toneMapping=q.toneMapping}function yn(R,q,et,P,O){q.isScene!==!0&&(q=st),A.resetTextureUnits();const $=q.fog,wt=P.isMeshStandardMaterial?q.environment:null,Nt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wn,qt=(P.isMeshStandardMaterial?Y:E).get(P.envMap||wt),jt=P.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,ee=!!et.attributes.tangent&&(!!P.normalMap||P.anisotropy>0),ie=!!et.morphAttributes.position,be=!!et.morphAttributes.normal,qe=!!et.morphAttributes.color;let Ie=Dn;P.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ie=_.toneMapping);const fn=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,xe=fn!==void 0?fn.length:0,re=Mt.get(P),zs=m.state.lights;if(Q===!0&&(lt===!0||R!==y)){const Ke=R===y&&P.id===z;Lt.setState(P,R,Ke)}let Se=!1;P.version===re.__version?(re.needsLights&&re.lightsStateVersion!==zs.state.version||re.outputColorSpace!==Nt||O.isBatchedMesh&&re.batching===!1||!O.isBatchedMesh&&re.batching===!0||O.isInstancedMesh&&re.instancing===!1||!O.isInstancedMesh&&re.instancing===!0||O.isSkinnedMesh&&re.skinning===!1||!O.isSkinnedMesh&&re.skinning===!0||O.isInstancedMesh&&re.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&re.instancingColor===!1&&O.instanceColor!==null||re.envMap!==qt||P.fog===!0&&re.fog!==$||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Lt.numPlanes||re.numIntersection!==Lt.numIntersection)||re.vertexAlphas!==jt||re.vertexTangents!==ee||re.morphTargets!==ie||re.morphNormals!==be||re.morphColors!==qe||re.toneMapping!==Ie||_t.isWebGL2===!0&&re.morphTargetsCount!==xe)&&(Se=!0):(Se=!0,re.__version=P.version);let On=re.currentProgram;Se===!0&&(On=Le(P,q,O));let $o=!1,Ii=!1,Vs=!1;const Oe=On.getUniforms(),Gn=re.uniforms;if(ct.useProgram(On.program)&&($o=!0,Ii=!0,Vs=!0),P.id!==z&&(z=P.id,Ii=!0),$o||y!==R){Oe.setValue(U,"projectionMatrix",R.projectionMatrix),Oe.setValue(U,"viewMatrix",R.matrixWorldInverse);const Ke=Oe.map.cameraPosition;Ke!==void 0&&Ke.setValue(U,Rt.setFromMatrixPosition(R.matrixWorld)),_t.logarithmicDepthBuffer&&Oe.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(P.isMeshPhongMaterial||P.isMeshToonMaterial||P.isMeshLambertMaterial||P.isMeshBasicMaterial||P.isMeshStandardMaterial||P.isShaderMaterial)&&Oe.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Ii=!0,Vs=!0)}if(O.isSkinnedMesh){Oe.setOptional(U,O,"bindMatrix"),Oe.setOptional(U,O,"bindMatrixInverse");const Ke=O.skeleton;Ke&&(_t.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Oe.setValue(U,"boneTexture",Ke.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}O.isBatchedMesh&&(Oe.setOptional(U,O,"batchingTexture"),Oe.setValue(U,"batchingTexture",O._matricesTexture,A));const Hs=et.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0&&_t.isWebGL2===!0)&&Kt.update(O,et,On),(Ii||re.receiveShadow!==O.receiveShadow)&&(re.receiveShadow=O.receiveShadow,Oe.setValue(U,"receiveShadow",O.receiveShadow)),P.isMeshGouraudMaterial&&P.envMap!==null&&(Gn.envMap.value=qt,Gn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),Ii&&(Oe.setValue(U,"toneMappingExposure",_.toneMappingExposure),re.needsLights&&un(Gn,Vs),$&&P.fog===!0&&At.refreshFogUniforms(Gn,$),At.refreshMaterialUniforms(Gn,P,F,H,ot),Es.upload(U,rn(re),Gn,A)),P.isShaderMaterial&&P.uniformsNeedUpdate===!0&&(Es.upload(U,rn(re),Gn,A),P.uniformsNeedUpdate=!1),P.isSpriteMaterial&&Oe.setValue(U,"center",O.center),Oe.setValue(U,"modelViewMatrix",O.modelViewMatrix),Oe.setValue(U,"normalMatrix",O.normalMatrix),Oe.setValue(U,"modelMatrix",O.matrixWorld),P.isShaderMaterial||P.isRawShaderMaterial){const Ke=P.uniformsGroups;for(let Ws=0,yc=Ke.length;Ws<yc;Ws++)if(_t.isWebGL2){const Qo=Ke[Ws];te.update(Qo,On),te.bind(Qo,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function un(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Fn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,q,et){Mt.get(R.texture).__webglTexture=q,Mt.get(R.depthTexture).__webglTexture=et;const P=Mt.get(R);P.__hasExternalTextures=!0,P.__hasExternalTextures&&(P.__autoAllocateDepthBuffer=et===void 0,P.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),P.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,q){const et=Mt.get(R);et.__webglFramebuffer=q,et.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,et=0){I=R,C=q,L=et;let P=!0,O=null,$=!1,wt=!1;if(R){const qt=Mt.get(R);qt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(U.FRAMEBUFFER,null),P=!1):qt.__webglFramebuffer===void 0?A.setupRenderTarget(R):qt.__hasExternalTextures&&A.rebindTextures(R,Mt.get(R.texture).__webglTexture,Mt.get(R.depthTexture).__webglTexture);const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(wt=!0);const ee=Mt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?O=ee[q][et]:O=ee[q],$=!0):_t.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?O=Mt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?O=ee[et]:O=ee,w.copy(R.viewport),T.copy(R.scissor),V=R.scissorTest}else w.copy(X).multiplyScalar(F).floor(),T.copy(K).multiplyScalar(F).floor(),V=ht;if(ct.bindFramebuffer(U.FRAMEBUFFER,O)&&_t.drawBuffers&&P&&ct.drawBuffers(R,O),ct.viewport(w),ct.scissor(T),ct.setScissorTest(V),$){const qt=Mt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+q,qt.__webglTexture,et)}else if(wt){const qt=Mt.get(R.texture),jt=q||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,qt.__webglTexture,et||0,jt)}z=-1},this.readRenderTargetPixels=function(R,q,et,P,O,$,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Mt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Nt=Nt[wt]),Nt){ct.bindFramebuffer(U.FRAMEBUFFER,Nt);try{const qt=R.texture,jt=qt.format,ee=qt.type;if(jt!==on&&Pt.convert(jt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ie=ee===qi&&(at.has("EXT_color_buffer_half_float")||_t.isWebGL2&&at.has("EXT_color_buffer_float"));if(ee!==Un&&Pt.convert(ee)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ee===Cn&&(_t.isWebGL2||at.has("OES_texture_float")||at.has("WEBGL_color_buffer_float")))&&!ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-P&&et>=0&&et<=R.height-O&&U.readPixels(q,et,P,O,Pt.convert(jt),Pt.convert(ee),$)}finally{const qt=I!==null?Mt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(U.FRAMEBUFFER,qt)}}},this.copyFramebufferToTexture=function(R,q,et=0){const P=Math.pow(2,-et),O=Math.floor(q.image.width*P),$=Math.floor(q.image.height*P);A.setTexture2D(q,0),U.copyTexSubImage2D(U.TEXTURE_2D,et,0,0,R.x,R.y,O,$),ct.unbindTexture()},this.copyTextureToTexture=function(R,q,et,P=0){const O=q.image.width,$=q.image.height,wt=Pt.convert(et.format),Nt=Pt.convert(et.type);A.setTexture2D(et,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,et.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,et.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,et.unpackAlignment),q.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,P,R.x,R.y,O,$,wt,Nt,q.image.data):q.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,P,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,wt,q.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,P,R.x,R.y,wt,Nt,q.image),P===0&&et.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(R,q,et,P,O=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const $=R.max.x-R.min.x+1,wt=R.max.y-R.min.y+1,Nt=R.max.z-R.min.z+1,qt=Pt.convert(P.format),jt=Pt.convert(P.type);let ee;if(P.isData3DTexture)A.setTexture3D(P,0),ee=U.TEXTURE_3D;else if(P.isDataArrayTexture||P.isCompressedArrayTexture)A.setTexture2DArray(P,0),ee=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);const ie=U.getParameter(U.UNPACK_ROW_LENGTH),be=U.getParameter(U.UNPACK_IMAGE_HEIGHT),qe=U.getParameter(U.UNPACK_SKIP_PIXELS),Ie=U.getParameter(U.UNPACK_SKIP_ROWS),fn=U.getParameter(U.UNPACK_SKIP_IMAGES),xe=et.isCompressedTexture?et.mipmaps[O]:et.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,xe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,R.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,R.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,R.min.z),et.isDataTexture||et.isData3DTexture?U.texSubImage3D(ee,O,q.x,q.y,q.z,$,wt,Nt,qt,jt,xe.data):et.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(ee,O,q.x,q.y,q.z,$,wt,Nt,qt,xe.data)):U.texSubImage3D(ee,O,q.x,q.y,q.z,$,wt,Nt,qt,jt,xe),U.pixelStorei(U.UNPACK_ROW_LENGTH,ie),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,be),U.pixelStorei(U.UNPACK_SKIP_PIXELS,qe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ie),U.pixelStorei(U.UNPACK_SKIP_IMAGES,fn),O===0&&P.generateMipmaps&&U.generateMipmap(ee),ct.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),ct.unbindTexture()},this.resetState=function(){C=0,L=0,I=null,ct.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ko?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===Ns?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?Jn:Ha}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Jn?Ne:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class zp extends uc{}zp.prototype.isWebGL1Renderer=!0;class Wo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(t),this.density=e}clone(){return new Wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vp extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class fc extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xa=new N,wa=new N,Sa=new ye,wo=new Ja,xs=new Fs;class Hp extends Ae{constructor(t=new Fe,e=new fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)xa.fromBufferAttribute(e,i-1),wa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=xa.distanceTo(wa);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=o,t.ray.intersectsSphere(xs)===!1)return;Sa.copy(i).invert(),wo.copy(t.ray).applyMatrix4(Sa);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=new N,d=new N,f=new N,l=new N,u=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,r.start),M=Math.min(g.count,r.start+r.count);for(let _=p,b=M-1;_<b;_+=u){const C=g.getX(_),L=g.getX(_+1);if(h.fromBufferAttribute(m,C),d.fromBufferAttribute(m,L),wo.distanceSqToSegment(h,d,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const z=t.ray.origin.distanceTo(l);z<t.near||z>t.far||e.push({distance:z,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),M=Math.min(m.count,r.start+r.count);for(let _=p,b=M-1;_<b;_+=u){if(h.fromBufferAttribute(m,_),d.fromBufferAttribute(m,_+1),wo.distanceSqToSegment(h,d,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(l);L<t.near||L>t.far||e.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}class le extends Xe{constructor(t,e,n,i,o,r,a,c,h){super(t,e,n,i,o,r,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,h;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),h=n[i]-r,h<0)a=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const d=n[i],l=n[i+1]-d,u=(r-d)/l;return(i+u)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new It:new N);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],o=[],r=[],a=new N,c=new ye;for(let u=0;u<=t;u++){const g=u/t;i[u]=this.getTangentAt(g,new N)}o[0]=new N,r[0]=new N;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),f=Math.abs(i[0].y),l=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),l<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let u=1;u<=t;u++){if(o[u]=o[u-1].clone(),r[u]=r[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ue(i[u-1].dot(i[u]),-1,1));o[u].applyMatrix4(c.makeRotationAxis(a,g))}r[u].crossVectors(i[u],o[u])}if(e===!0){let u=Math.acos(Ue(o[0].dot(o[t]),-1,1));u/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(u=-u);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],u*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xo extends dn{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new It,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),l=c-this.aX,u=h-this.aY;c=l*d-u*f+this.aX,h=l*f+u*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Wp extends Xo{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function qo(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,h){i(r,a,h*(a-o),h*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,h,d,f){let l=(r-o)/h-(a-o)/(h+d)+(a-r)/d,u=(a-r)/d-(c-r)/(d+f)+(c-a)/f;l*=d,u*=d,i(r,a,l,u)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const ws=new N,So=new qo,yo=new qo,bo=new qo;class Yn extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let h,d;this.closed||a>0?h=i[(a-1)%o]:(ws.subVectors(i[0],i[1]).add(i[0]),h=ws);const f=i[a%o],l=i[(a+1)%o];if(this.closed||a+2<o?d=i[(a+2)%o]:(ws.subVectors(i[o-1],i[o-2]).add(i[o-1]),d=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(l),u),m=Math.pow(l.distanceToSquared(d),u);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),So.initNonuniformCatmullRom(h.x,f.x,l.x,d.x,g,x,m),yo.initNonuniformCatmullRom(h.y,f.y,l.y,d.y,g,x,m),bo.initNonuniformCatmullRom(h.z,f.z,l.z,d.z,g,x,m)}else this.curveType==="catmullrom"&&(So.initCatmullRom(h.x,f.x,l.x,d.x,this.tension),yo.initCatmullRom(h.y,f.y,l.y,d.y,this.tension),bo.initCatmullRom(h.z,f.z,l.z,d.z,this.tension));return n.set(So.calc(c),yo.calc(c),bo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ya(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function Xp(s,t){const e=1-s;return e*e*t}function qp(s,t){return 2*(1-s)*s*t}function Yp(s,t){return s*s*t}function Vi(s,t,e,n){return Xp(s,t)+qp(s,e)+Yp(s,n)}function Zp(s,t){const e=1-s;return e*e*e*t}function Kp(s,t){const e=1-s;return 3*e*e*s*t}function Jp(s,t){return 3*(1-s)*s*s*t}function jp(s,t){return s*s*s*t}function Hi(s,t,e,n,i){return Zp(s,t)+Kp(s,e)+Jp(s,n)+jp(s,i)}class pc extends dn{constructor(t=new It,e=new It,n=new It,i=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new It){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Hi(t,i.x,o.x,r.x,a.x),Hi(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $p extends dn{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Hi(t,i.x,o.x,r.x,a.x),Hi(t,i.y,o.y,r.y,a.y),Hi(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mc extends dn{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qp extends dn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends dn{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Vi(t,i.x,o.x,r.x),Vi(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends dn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Vi(t,i.x,o.x,r.x),Vi(t,i.y,o.y,r.y),Vi(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],h=i[r],d=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(ya(a,c.x,h.x,d.x,f.x),ya(a,c.y,h.y,d.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new It().fromArray(i))}return this}}var Ds=Object.freeze({__proto__:null,ArcCurve:Wp,CatmullRomCurve3:Yn,CubicBezierCurve:pc,CubicBezierCurve3:$p,EllipseCurve:Xo,LineCurve:mc,LineCurve3:Qp,QuadraticBezierCurve:gc,QuadraticBezierCurve3:_c,SplineCurve:Mc});class t0 extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ds[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),h=c===0?0:1-r/c;return a.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let h=0;h<c.length;h++){const d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ds[i.type]().fromJSON(i))}return this}}class ba extends t0{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mc(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new gc(this.currentPoint.clone(),new It(t,e),new It(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new pc(this.currentPoint.clone(),new It(t,e),new It(n,i),new It(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const h=new Xo(t,e,n,i,o,r,a,c);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ji extends Fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],h=new N,d=new It;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,l=3;f<=e;f++,l+=3){const u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),r.push(h.x,h.y,h.z),a.push(0,0,1),d.x=(r[l]/t+1)/2,d.y=(r[l+1]/t+1)/2,c.push(d.x,d.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ut extends Fe{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const h=this;i=Math.floor(i),o=Math.floor(o);const d=[],f=[],l=[],u=[];let g=0;const x=[],m=n/2;let p=0;M(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(u,2));function M(){const b=new N,C=new N;let L=0;const I=(e-t)/n;for(let z=0;z<=o;z++){const y=[],w=z/o,T=w*(e-t)+t;for(let V=0;V<=i;V++){const it=V/i,D=it*c+a,G=Math.sin(D),H=Math.cos(D);C.x=T*G,C.y=-w*n+m,C.z=T*H,f.push(C.x,C.y,C.z),b.set(G,I,H).normalize(),l.push(b.x,b.y,b.z),u.push(it,1-w),y.push(g++)}x.push(y)}for(let z=0;z<i;z++)for(let y=0;y<o;y++){const w=x[y][z],T=x[y+1][z],V=x[y+1][z+1],it=x[y][z+1];d.push(w,T,it),d.push(T,V,it),L+=6}h.addGroup(p,L,0),p+=L}function _(b){const C=g,L=new It,I=new N;let z=0;const y=b===!0?t:e,w=b===!0?1:-1;for(let V=1;V<=i;V++)f.push(0,m*w,0),l.push(0,w,0),u.push(.5,.5),g++;const T=g;for(let V=0;V<=i;V++){const D=V/i*c+a,G=Math.cos(D),H=Math.sin(D);I.x=y*H,I.y=m*w,I.z=y*G,f.push(I.x,I.y,I.z),l.push(0,w,0),L.x=G*.5+.5,L.y=H*.5*w+.5,u.push(L.x,L.y),g++}for(let V=0;V<i;V++){const it=C+V,D=T+V;b===!0?d.push(D,D+1,it):d.push(D+1,D,it),z+=3}h.addGroup(p,z,b===!0?1:2),p+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ut(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Me extends ut{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Me(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yo extends Fe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),h(n),d(),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(o.slice(),3)),this.setAttribute("uv",new de(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const _=new N,b=new N,C=new N;for(let L=0;L<e.length;L+=3)u(e[L+0],_),u(e[L+1],b),u(e[L+2],C),c(_,b,C,M)}function c(M,_,b,C){const L=C+1,I=[];for(let z=0;z<=L;z++){I[z]=[];const y=M.clone().lerp(b,z/L),w=_.clone().lerp(b,z/L),T=L-z;for(let V=0;V<=T;V++)V===0&&z===L?I[z][V]=y:I[z][V]=y.clone().lerp(w,V/T)}for(let z=0;z<L;z++)for(let y=0;y<2*(L-z)-1;y++){const w=Math.floor(y/2);y%2===0?(l(I[z][w+1]),l(I[z+1][w]),l(I[z][w])):(l(I[z][w+1]),l(I[z+1][w+1]),l(I[z+1][w]))}}function h(M){const _=new N;for(let b=0;b<o.length;b+=3)_.x=o[b+0],_.y=o[b+1],_.z=o[b+2],_.normalize().multiplyScalar(M),o[b+0]=_.x,o[b+1]=_.y,o[b+2]=_.z}function d(){const M=new N;for(let _=0;_<o.length;_+=3){M.x=o[_+0],M.y=o[_+1],M.z=o[_+2];const b=m(M)/2/Math.PI+.5,C=p(M)/Math.PI+.5;r.push(b,1-C)}g(),f()}function f(){for(let M=0;M<r.length;M+=6){const _=r[M+0],b=r[M+2],C=r[M+4],L=Math.max(_,b,C),I=Math.min(_,b,C);L>.9&&I<.1&&(_<.2&&(r[M+0]+=1),b<.2&&(r[M+2]+=1),C<.2&&(r[M+4]+=1))}}function l(M){o.push(M.x,M.y,M.z)}function u(M,_){const b=M*3;_.x=t[b+0],_.y=t[b+1],_.z=t[b+2]}function g(){const M=new N,_=new N,b=new N,C=new N,L=new It,I=new It,z=new It;for(let y=0,w=0;y<o.length;y+=9,w+=6){M.set(o[y+0],o[y+1],o[y+2]),_.set(o[y+3],o[y+4],o[y+5]),b.set(o[y+6],o[y+7],o[y+8]),L.set(r[w+0],r[w+1]),I.set(r[w+2],r[w+3]),z.set(r[w+4],r[w+5]),C.copy(M).add(_).add(b).divideScalar(3);const T=m(C);x(L,w+0,M,T),x(I,w+2,_,T),x(z,w+4,b,T)}}function x(M,_,b,C){C<0&&M.x===1&&(r[_]=M.x-1),b.x===0&&b.z===0&&(r[_]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.vertices,t.indices,t.radius,t.details)}}class Zo extends Yo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zo(t.radius,t.detail)}}class vc extends ba{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ba().fromJSON(i))}return this}}const e0={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=xc(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,h,d,f,l,u;if(n&&(o=r0(s,t,o,e)),s.length>80*e){a=h=s[0],c=d=s[1];for(let g=e;g<i;g+=e)f=s[g],l=s[g+1],f<a&&(a=f),l<c&&(c=l),f>h&&(h=f),l>d&&(d=l);u=Math.max(h-a,d-c),u=u!==0?32767/u:0}return Yi(o,r,e,a,c,u,0),r}};function xc(s,t,e,n,i){let o,r;if(i===_0(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Ea(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Ea(o,s[o],s[o+1],r);return r&&Bs(r,r.next)&&(Ki(r),r=r.next),r}function Qn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Bs(e,e.next)||we(e.prev,e,e.next)===0)){if(Ki(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Yi(s,t,e,n,i,o,r){if(!s)return;!r&&o&&d0(s,n,i,o);let a=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,o?i0(s,n,i,o):n0(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),Ki(s),s=h.next,a=h.next;continue}if(s=h,s===a){r?r===1?(s=s0(Qn(s),t,e),Yi(s,t,e,n,i,o,2)):r===2&&o0(s,t,e,n,i,o):Yi(Qn(s),t,e,n,i,o,1);break}}}function n0(s){const t=s.prev,e=s,n=s.next;if(we(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,h=n.y,d=i<o?i<r?i:r:o<r?o:r,f=a<c?a<h?a:h:c<h?c:h,l=i>o?i>r?i:r:o>r?o:r,u=a>c?a>h?a:h:c>h?c:h;let g=n.next;for(;g!==t;){if(g.x>=d&&g.x<=l&&g.y>=f&&g.y<=u&&wi(i,a,o,c,r,h,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function i0(s,t,e,n){const i=s.prev,o=s,r=s.next;if(we(i,o,r)>=0)return!1;const a=i.x,c=o.x,h=r.x,d=i.y,f=o.y,l=r.y,u=a<c?a<h?a:h:c<h?c:h,g=d<f?d<l?d:l:f<l?f:l,x=a>c?a>h?a:h:c>h?c:h,m=d>f?d>l?d:l:f>l?f:l,p=No(u,g,t,e,n),M=No(x,m,t,e,n);let _=s.prevZ,b=s.nextZ;for(;_&&_.z>=p&&b&&b.z<=M;){if(_.x>=u&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==r&&wi(a,d,c,f,h,l,_.x,_.y)&&we(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=u&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==r&&wi(a,d,c,f,h,l,b.x,b.y)&&we(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=p;){if(_.x>=u&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==r&&wi(a,d,c,f,h,l,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=M;){if(b.x>=u&&b.x<=x&&b.y>=g&&b.y<=m&&b!==i&&b!==r&&wi(a,d,c,f,h,l,b.x,b.y)&&we(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function s0(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Bs(i,o)&&wc(i,n,n.next,o)&&Zi(i,o)&&Zi(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Ki(n),Ki(n.next),n=s=o),n=n.next}while(n!==s);return Qn(n)}function o0(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&p0(r,a)){let c=Sc(r,a);r=Qn(r,r.next),c=Qn(c,c.next),Yi(r,t,e,n,i,o,0),Yi(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function r0(s,t,e,n){const i=[];let o,r,a,c,h;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,h=xc(s,a,c,n,!1),h===h.next&&(h.steiner=!0),i.push(f0(h));for(i.sort(a0),o=0;o<i.length;o++)e=c0(i[o],e);return e}function a0(s,t){return s.x-t.x}function c0(s,t){const e=l0(s,t);if(!e)return t;const n=Sc(e,s);return Qn(n,n.next),Qn(e,e.next)}function l0(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const l=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=o&&l>n&&(n=l,i=e.x<e.next.x?e:e.next,l===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,h=i.y;let d=1/0,f;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&wi(r<h?o:n,r,c,h,r<h?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),Zi(e,s)&&(f<d||f===d&&(e.x>i.x||e.x===i.x&&h0(i,e)))&&(i=e,d=f)),e=e.next;while(e!==a);return i}function h0(s,t){return we(s.prev,s,t.prev)<0&&we(t.next,s,s.next)<0}function d0(s,t,e,n){let i=s;do i.z===0&&(i.z=No(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,u0(i)}function u0(s){let t,e,n,i,o,r,a,c,h=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(c=h;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,h*=2}while(r>1);return s}function No(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function f0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function wi(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function p0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!m0(s,t)&&(Zi(s,t)&&Zi(t,s)&&g0(s,t)&&(we(s.prev,s,t.prev)||we(s,t.prev,t))||Bs(s,t)&&we(s.prev,s,s.next)>0&&we(t.prev,t,t.next)>0)}function we(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Bs(s,t){return s.x===t.x&&s.y===t.y}function wc(s,t,e,n){const i=ys(we(s,t,e)),o=ys(we(s,t,n)),r=ys(we(e,n,s)),a=ys(we(e,n,t));return!!(i!==o&&r!==a||i===0&&Ss(s,e,t)||o===0&&Ss(s,n,t)||r===0&&Ss(e,s,n)||a===0&&Ss(e,t,n))}function Ss(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ys(s){return s>0?1:s<0?-1:0}function m0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&wc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Zi(s,t){return we(s.prev,s,s.next)<0?we(s,t,s.next)>=0&&we(s,s.prev,t)>=0:we(s,t,s.prev)<0||we(s,s.next,t)<0}function g0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Sc(s,t){const e=new Fo(s.i,s.x,s.y),n=new Fo(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ea(s,t,e,n){const i=new Fo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ki(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _0(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class Wi{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Wi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Ta(t),Aa(n,t);let r=t.length;e.forEach(Ta);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Aa(n,e[c]);const a=e0.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Ta(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Aa(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ko extends Fe{constructor(t=new vc([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let a=0,c=t.length;a<c;a++){const h=t[a];r(h)}this.setAttribute("position",new de(i,3)),this.setAttribute("uv",new de(o,2)),this.computeVertexNormals();function r(a){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let l=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:M0;let _,b=!1,C,L,I,z;p&&(_=p.getSpacedPoints(d),b=!0,l=!1,C=p.computeFrenetFrames(d,!1),L=new N,I=new N,z=new N),l||(m=0,u=0,g=0,x=0);const y=a.extractPoints(h);let w=y.shape;const T=y.holes;if(!Wi.isClockWise(w)){w=w.reverse();for(let U=0,pt=T.length;U<pt;U++){const at=T[U];Wi.isClockWise(at)&&(T[U]=at.reverse())}}const it=Wi.triangulateShape(w,T),D=w;for(let U=0,pt=T.length;U<pt;U++){const at=T[U];w=w.concat(at)}function G(U,pt,at){return pt||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(pt,at)}const H=w.length,F=it.length;function tt(U,pt,at){let _t,ct,Gt;const Mt=U.x-pt.x,A=U.y-pt.y,E=at.x-U.x,Y=at.y-U.y,gt=Mt*Mt+A*A,dt=Mt*Y-A*E;if(Math.abs(dt)>Number.EPSILON){const ft=Math.sqrt(gt),Ft=Math.sqrt(E*E+Y*Y),At=pt.x-A/ft,Ut=pt.y+Mt/ft,Vt=at.x-Y/Ft,Lt=at.y+E/Ft,vt=((Vt-At)*Y-(Lt-Ut)*E)/(Mt*Y-A*E);_t=At+Mt*vt-U.x,ct=Ut+A*vt-U.y;const $t=_t*_t+ct*ct;if($t<=2)return new It(_t,ct);Gt=Math.sqrt($t/2)}else{let ft=!1;Mt>Number.EPSILON?E>Number.EPSILON&&(ft=!0):Mt<-Number.EPSILON?E<-Number.EPSILON&&(ft=!0):Math.sign(A)===Math.sign(Y)&&(ft=!0),ft?(_t=-A,ct=Mt,Gt=Math.sqrt(gt)):(_t=Mt,ct=A,Gt=Math.sqrt(gt/2))}return new It(_t/Gt,ct/Gt)}const Z=[];for(let U=0,pt=D.length,at=pt-1,_t=U+1;U<pt;U++,at++,_t++)at===pt&&(at=0),_t===pt&&(_t=0),Z[U]=tt(D[U],D[at],D[_t]);const X=[];let K,ht=Z.concat();for(let U=0,pt=T.length;U<pt;U++){const at=T[U];K=[];for(let _t=0,ct=at.length,Gt=ct-1,Mt=_t+1;_t<ct;_t++,Gt++,Mt++)Gt===ct&&(Gt=0),Mt===ct&&(Mt=0),K[_t]=tt(at[_t],at[Gt],at[Mt]);X.push(K),ht=ht.concat(K)}for(let U=0;U<m;U++){const pt=U/m,at=u*Math.cos(pt*Math.PI/2),_t=g*Math.sin(pt*Math.PI/2)+x;for(let ct=0,Gt=D.length;ct<Gt;ct++){const Mt=G(D[ct],Z[ct],_t);nt(Mt.x,Mt.y,-at)}for(let ct=0,Gt=T.length;ct<Gt;ct++){const Mt=T[ct];K=X[ct];for(let A=0,E=Mt.length;A<E;A++){const Y=G(Mt[A],K[A],_t);nt(Y.x,Y.y,-at)}}}const J=g+x;for(let U=0;U<H;U++){const pt=l?G(w[U],ht[U],J):w[U];b?(I.copy(C.normals[0]).multiplyScalar(pt.x),L.copy(C.binormals[0]).multiplyScalar(pt.y),z.copy(_[0]).add(I).add(L),nt(z.x,z.y,z.z)):nt(pt.x,pt.y,0)}for(let U=1;U<=d;U++)for(let pt=0;pt<H;pt++){const at=l?G(w[pt],ht[pt],J):w[pt];b?(I.copy(C.normals[U]).multiplyScalar(at.x),L.copy(C.binormals[U]).multiplyScalar(at.y),z.copy(_[U]).add(I).add(L),nt(z.x,z.y,z.z)):nt(at.x,at.y,f/d*U)}for(let U=m-1;U>=0;U--){const pt=U/m,at=u*Math.cos(pt*Math.PI/2),_t=g*Math.sin(pt*Math.PI/2)+x;for(let ct=0,Gt=D.length;ct<Gt;ct++){const Mt=G(D[ct],Z[ct],_t);nt(Mt.x,Mt.y,f+at)}for(let ct=0,Gt=T.length;ct<Gt;ct++){const Mt=T[ct];K=X[ct];for(let A=0,E=Mt.length;A<E;A++){const Y=G(Mt[A],K[A],_t);b?nt(Y.x,Y.y+_[d-1].y,_[d-1].x+at):nt(Y.x,Y.y,f+at)}}}Q(),lt();function Q(){const U=i.length/3;if(l){let pt=0,at=H*pt;for(let _t=0;_t<F;_t++){const ct=it[_t];St(ct[2]+at,ct[1]+at,ct[0]+at)}pt=d+m*2,at=H*pt;for(let _t=0;_t<F;_t++){const ct=it[_t];St(ct[0]+at,ct[1]+at,ct[2]+at)}}else{for(let pt=0;pt<F;pt++){const at=it[pt];St(at[2],at[1],at[0])}for(let pt=0;pt<F;pt++){const at=it[pt];St(at[0]+H*d,at[1]+H*d,at[2]+H*d)}}n.addGroup(U,i.length/3-U,0)}function lt(){const U=i.length/3;let pt=0;ot(D,pt),pt+=D.length;for(let at=0,_t=T.length;at<_t;at++){const ct=T[at];ot(ct,pt),pt+=ct.length}n.addGroup(U,i.length/3-U,1)}function ot(U,pt){let at=U.length;for(;--at>=0;){const _t=at;let ct=at-1;ct<0&&(ct=U.length-1);for(let Gt=0,Mt=d+m*2;Gt<Mt;Gt++){const A=H*Gt,E=H*(Gt+1),Y=pt+_t+A,gt=pt+ct+A,dt=pt+ct+E,ft=pt+_t+E;Rt(Y,gt,dt,ft)}}}function nt(U,pt,at){c.push(U),c.push(pt),c.push(at)}function St(U,pt,at){st(U),st(pt),st(at);const _t=i.length/3,ct=M.generateTopUV(n,i,_t-3,_t-2,_t-1);Tt(ct[0]),Tt(ct[1]),Tt(ct[2])}function Rt(U,pt,at,_t){st(U),st(pt),st(_t),st(pt),st(at),st(_t);const ct=i.length/3,Gt=M.generateSideWallUV(n,i,ct-6,ct-3,ct-2,ct-1);Tt(Gt[0]),Tt(Gt[1]),Tt(Gt[3]),Tt(Gt[1]),Tt(Gt[2]),Tt(Gt[3])}function st(U){i.push(c[U*3+0]),i.push(c[U*3+1]),i.push(c[U*3+2])}function Tt(U){o.push(U.x),o.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return v0(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ds[i.type]().fromJSON(i)),new Ko(n,t.options)}}const M0={generateTopUV:function(s,t,e,n,i){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[i*3],d=t[i*3+1];return[new It(o,r),new It(a,c),new It(h,d)]},generateSideWallUV:function(s,t,e,n,i,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],f=t[n*3+2],l=t[i*3],u=t[i*3+1],g=t[i*3+2],x=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-d)<Math.abs(r-h)?[new It(r,1-c),new It(h,1-f),new It(l,1-g),new It(x,1-p)]:[new It(a,1-c),new It(d,1-f),new It(u,1-g),new It(m,1-p)]}};function v0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wt extends Fe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let h=0;const d=[],f=new N,l=new N,u=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const M=[],_=p/n;let b=0;p===0&&r===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let C=0;C<=e;C++){const L=C/e;f.x=-t*Math.cos(i+L*o)*Math.sin(r+_*a),f.y=t*Math.cos(r+_*a),f.z=t*Math.sin(i+L*o)*Math.sin(r+_*a),g.push(f.x,f.y,f.z),l.copy(f).normalize(),x.push(l.x,l.y,l.z),m.push(L+b,1-_),M.push(h++)}d.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){const _=d[p][M+1],b=d[p][M],C=d[p+1][M],L=d[p+1][M+1];(p!==0||r>0)&&u.push(_,b,L),(p!==n-1||c<Math.PI)&&u.push(b,C,L)}this.setIndex(u),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ln extends Fe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],h=[],d=new N,f=new N,l=new N;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){const x=g/i*o,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),l.subVectors(f,d).normalize(),c.push(l.x,l.y,l.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){const x=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,M=(i+1)*u+g;r.push(x,m,M),r.push(m,p,M)}this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ln extends Fe{constructor(t=new _c(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,c=new N,h=new It;let d=new N;const f=[],l=[],u=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(u,2));function x(){for(let _=0;_<e;_++)m(_);m(o===!1?e:0),M(),p()}function m(_){d=t.getPointAt(_/e,d);const b=r.normals[_],C=r.binormals[_];for(let L=0;L<=i;L++){const I=L/i*Math.PI*2,z=Math.sin(I),y=-Math.cos(I);c.x=y*b.x+z*C.x,c.y=y*b.y+z*C.y,c.z=y*b.z+z*C.z,c.normalize(),l.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let b=1;b<=i;b++){const C=(i+1)*(_-1)+(b-1),L=(i+1)*_+(b-1),I=(i+1)*_+b,z=(i+1)*(_-1)+b;g.push(C,L,z),g.push(L,I,z)}}function M(){for(let _=0;_<=e;_++)for(let b=0;b<=i;b++)h.x=_/e,h.y=b/i,u.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ln(new Ds[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class B extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jo extends B{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ks extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class x0 extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Eo=new ye,Ra=new N,Pa=new N;class jo{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ra.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ra),Pa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pa),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class w0 extends jo{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ai*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class S0 extends ks{constructor(t,e,n=0,i=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=i,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new w0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ca=new ye,Gi=new N,To=new N;class y0 extends jo{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gi),To.copy(n.position),To.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(To),n.updateMatrixWorld(),i.makeTranslation(-Gi.x,-Gi.y,-Gi.z),Ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca)}}class bs extends ks{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new y0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class b0 extends jo{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E0 extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new b0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class T0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=La(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=La();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function La(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const ti=()=>{if(typeof window>"u")return!1;const s=navigator.userAgent||navigator.vendor||window.opera||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(s),e="ontouchstart"in window||navigator.maxTouchPoints>0,n=Math.min(window.innerWidth,window.innerHeight)<=768||window.innerWidth<=1024;return t||e&&n},Yt={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:5,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},ge={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class A0{constructor(){this.state=ge.MENU,this.speedKmh=Yt.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Yt.LANES[1],this.targetLaneX=Yt.LANES[1],this.crashTimer=0}startNewGame(){this.state=ge.PLAYING,this.speedKmh=Yt.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Yt.LANES[1],this.targetLaneX=Yt.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==ge.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<Yt.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=Yt.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min(Yt.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=Yt.SCORING.COMBO_TIMEOUT;const t=Yt.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min(Yt.NITRO.MAX,this.nitro+Yt.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==ge.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*Yt.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,o=e.keys.accelerate,r=e.keys.boost,a=this.distanceMeters/1e3,c=Math.min(Yt.SPEED.MAX_PROGRESSIVE_BONUS,a*Yt.SPEED.PROGRESSIVE_RATE),h=Yt.SPEED.BASE_START+c,d=h+45,f=Yt.SPEED.BOOST+c*.4;r&&this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-Yt.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(f,this.speedKmh+Yt.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.nitro=Math.min(Yt.NITRO.MAX,this.nitro+Yt.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max(Yt.SPEED.MIN,this.speedKmh-Yt.SPEED.BRAKING*t):o?this.speedKmh=Math.min(d,this.speedKmh+Yt.SPEED.ACCELERATION*1.6*t):this.speedKmh<h?this.speedKmh=Math.min(h,this.speedKmh+Yt.SPEED.ACCELERATION*t):this.speedKmh>h&&(this.speedKmh=Math.max(h,this.speedKmh-Yt.SPEED.NATURAL_DECEL*t)));const u=this.speedKmh*1e3/3600*t;this.distanceMeters+=u,this.score+=Math.round(u*Yt.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=ge.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class R0{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.touchStartX=0,this.touchStartY=0,this.touchStartTime=0,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)&&t.preventDefault(),t.code){case"ArrowLeft":case"KeyA":this.keys.left||(this.laneChangeRequested=-1),this.keys.left=!0;break;case"ArrowRight":case"KeyD":this.keys.right||(this.laneChangeRequested=1),this.keys.right=!0;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!0;break;case"Space":this.keys.boost=!0;break;case"ArrowDown":case"KeyS":this.keys.brake=!0;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!0,this.onHorn&&this.onHorn();break;case"KeyP":case"Escape":this.onPauseToggle&&this.onPauseToggle();break;case"KeyR":this.onRestart&&this.onRestart();break}}),window.addEventListener("keyup",t=>{switch(t.code){case"ArrowLeft":case"KeyA":this.keys.left=!1;break;case"ArrowRight":case"KeyD":this.keys.right=!1;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!1;break;case"Space":this.keys.boost=!1;break;case"ArrowDown":case"KeyS":this.keys.brake=!1;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!1;break}}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0,t.touches.length>0&&(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=Date.now())},{passive:!0}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;Date.now()-this.touchStartTime<350&&Math.abs(e)>40&&Math.abs(e)>Math.abs(n)*1.3&&(e<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}triggerSteerLeft(){this.laneChangeRequested=-1}triggerSteerRight(){this.laneChangeRequested=1}setBrake(t){this.keys.brake=t}setAccelerate(t){this.keys.accelerate=t}setNitro(t){this.keys.boost=t}setBoost(t){this.keys.boost=t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0}}class P0{constructor(t){this.camera=t,this.defaultOffset=new N(Yt.CAMERA.DEFAULT_OFFSET.x,Yt.CAMERA.DEFAULT_OFFSET.y,Yt.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new N(Yt.CAMERA.LOOK_OFFSET.x,Yt.CAMERA.LOOK_OFFSET.y,Yt.CAMERA.LOOK_OFFSET.z),this.currentPos=new N,this.currentLook=new N,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=Yt.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.1,6.2),this.lookOffset.set(0,1.25,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=Yt.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const o=t.group.position,r=Math.min(1,e/Yt.SPEED.MAX_NORMAL),a=this.camera.aspect,c=a<1?Math.min(24,(1-a)*36):0;this.targetFOV=Yt.CAMERA.BASE_FOV+c+r*10+(n?8:0);const h=this.targetFOV-this.camera.fov;Math.abs(h)>.04&&(this.camera.fov+=h*Math.min(1,i*Yt.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix());const d=o.x+this.defaultOffset.x,f=o.y+this.defaultOffset.y,l=o.z+this.defaultOffset.z+(n?.8:0),u=Math.min(1,i*10),g=Math.min(1,i*12);this.currentPos.x+=(d-this.currentPos.x)*u,this.currentPos.y+=(f-this.currentPos.y)*g,this.currentPos.z=l;const x=o.x+this.lookOffset.x,m=o.y+this.lookOffset.y,p=o.z+this.lookOffset.z;this.currentLook.x+=(x-this.currentLook.x)*u,this.currentLook.y+=(m-this.currentLook.y)*g,this.currentLook.z=p;let M=0,_=0;if(e>70){const I=e/280*.03;M=(Math.random()-.5)*I,_=(Math.random()-.5)*I}let b=0,C=0,L=0;if(this.shakeDuration>0){this.shakeDuration-=i;const I=Math.max(0,this.shakeDuration/.6),z=this.shakeIntensity*I;b=(Math.random()-.5)*z,C=(Math.random()-.5)*z,L=(Math.random()-.5)*z}this.camera.position.set(this.currentPos.x+M+b,this.currentPos.y+_+C,this.currentPos.z+L),this.camera.lookAt(this.currentLook.x+M*.5,this.currentLook.y+_*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,o=(e?4.8:8.2)*i,r=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),a=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*o,r,Math.cos(c)*o),this.camera.lookAt(0,a,0)}}const C0={};class L0{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){if(!this.ctx)return;const t="./",e=`${t.endsWith("/")?t:t+"/"}audio/eta_ki_korli_mama.mp3`;fetch(e).then(n=>{if(!n.ok)throw new Error(`HTTP ${n.status}`);return n.arrayBuffer()}).then(n=>this.ctx.decodeAudioData(n)).then(n=>{this.crashVoiceBuffer=n}).catch(n=>{console.warn("Could not decode crash voice buffer:",n)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.04,t),this.highOsc.connect(o),o.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,o=0,r=0;for(let c=0;c<t;c++){const h=Math.random()*2-1;i=.98*i+h*.055,o=.95*o+h*.075,r=.85*r+h*.15,n[c]=(i+o+r)*.45}const a=this.ctx.createBufferSource();a.buffer=e,a.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),a.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),a.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const o=this.ctx.createBufferSource();o.buffer=n;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(500,t),r.frequency.exponentialRampToValueAtTime(180,t+.35);const a=this.ctx.createGain();a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.07,t+.05),a.gain.exponentialRampToValueAtTime(.001,t+.35),o.connect(r),r.connect(a),a.connect(this.masterGain),o.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const o=[2093,2637];[0,.09].forEach(r=>{o.forEach(a=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(a,n+r),h.gain.setValueAtTime(0,n+r),h.gain.linearRampToValueAtTime(.22,n+r+.008),h.gain.exponentialRampToValueAtTime(1e-4,n+r+.18),c.connect(h),h.connect(this.masterGain),c.start(n+r),c.stop(n+r+.2)})});return}if(e==="cng"){[620,780].forEach(r=>{const a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type="sawtooth",a.frequency.setValueAtTime(r,n);const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),a.connect(h),h.connect(c),c.connect(this.masterGain),a.start(n),a.stop(n+.35)});return}[330,415.3,523.25].forEach((o,r)=>{const a=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();a.type=r===0?"sine":"triangle",a.frequency.setValueAtTime(o,n),h.type="lowpass",h.frequency.setValueAtTime(1400,n);const d=r===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(d,n+.02),c.gain.setValueAtTime(d,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),a.connect(h),h.connect(c),c.connect(this.masterGain),a.start(n),a.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n*.8,t),o.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),r.gain.setValueAtTime(.001,t),r.gain.linearRampToValueAtTime(.08,t+.06),r.gain.exponentialRampToValueAtTime(1e-4,t+.45),o.connect(r),r.connect(this.masterGain),o.start(t),o.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const o=this.ctx.currentTime,r=Math.min(1,Math.max(0,t/200)),a=r*5%1,c=900+r*1800+a*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const h=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,h),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,o,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,o,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,o,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,o,.05);const d=300+r*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(d,o,.06);const f=.16+r*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,f),o,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+r*350,o,.08),this.turboGain.gain.setTargetAtTime(.05,o,.08)):this.turboGain.gain.setTargetAtTime(1e-4,o,.15);const l=Math.pow(r,1.3)*.06;this.roadGain.gain.setTargetAtTime(l,o,.08),this.roadFilter.frequency.setTargetAtTime(180+r*250,o,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((o,r)=>{const a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime((r===0?n:n*1.25)*i,e+o),c.gain.setValueAtTime(.001,e+o),c.gain.linearRampToValueAtTime(.12,e+o+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+o+.28),a.connect(c),c.connect(this.masterGain),a.start(e+o),a.stop(e+o+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),o=this.ctx.createBuffer(1,i,this.ctx.sampleRate),r=o.getChannelData(0);for(let d=0;d<i;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(this.ctx.sampleRate*.12));const a=this.ctx.createBufferSource();a.buffer=o;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const h=this.ctx.createGain();h.gain.setValueAtTime(.3,t),h.gain.exponentialRampToValueAtTime(.001,t+.45),a.connect(c),c.connect(h),h.connect(this.masterGain),a.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(o=>o.lang.includes("bn")||o.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(e,t+i),r.gain.setValueAtTime(.001,t+i),r.gain.linearRampToValueAtTime(.12,t+i+.02),r.gain.exponentialRampToValueAtTime(.001,t+i+.32),o.connect(r),r.connect(this.masterGain),o.start(t+i),o.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class I0{constructor(){this.group=new mt,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new Sn,this.collisionSize=new N(2.1,2.8,5.5),this._boxCenter=new N,this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new le(t),i=document.createElement("canvas");i.width=1024,i.height=384;const o=i.getContext("2d");o.fillStyle="#f8fafc",o.fillRect(0,0,1024,384),o.fillStyle="#dc2626",o.fillRect(0,0,1024,36),o.fillRect(0,348,1024,36),o.fillStyle="#16a34a",o.beginPath(),o.arc(512,180,110,Math.PI,0),o.fill(),o.fillStyle="#f59e0b",o.fillRect(472,80,80,100),o.beginPath(),o.moveTo(512,20),o.lineTo(460,80),o.lineTo(564,80),o.fill();const r=(S,k)=>{o.fillStyle="#dc2626";for(let j=0;j<Math.PI*2;j+=Math.PI/3)o.beginPath(),o.arc(S+Math.cos(j)*35,k+Math.sin(j)*35,24,0,Math.PI*2),o.fill();o.fillStyle="#fbbf24",o.beginPath(),o.arc(S,k,22,0,Math.PI*2),o.fill()};r(220,180),r(804,180),o.fillStyle="#1e293b",o.font="bold 54px serif",o.textAlign="center",o.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const a=new le(i),c=document.createElement("canvas");c.width=1024,c.height=512;const h=c.getContext("2d");h.fillStyle="#f59e0b",h.fillRect(0,0,1024,140);for(let S=60;S<1024;S+=110)h.fillStyle="#dc2626",h.beginPath(),h.arc(S,70,32,0,Math.PI*2),h.fill(),h.fillStyle="#22c55e",h.beginPath(),h.arc(S,70,16,0,Math.PI*2),h.fill();h.fillStyle="#15803d",h.fillRect(0,140,1024,372),h.strokeStyle="#f8fafc",h.lineWidth=8;for(let S=30;S<1024;S+=138)h.strokeRect(S,160,116,320);h.fillStyle="#ffffff",h.font="900 80px sans-serif",h.textAlign="center",h.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),h.fillStyle="#dc2626",h.fillRect(0,140,30,372),h.fillRect(994,140,30,372);const d=new le(c),f=document.createElement("canvas");f.width=1024,f.height=680;const l=f.getContext("2d");l.fillStyle="#4a90e2",l.fillRect(0,0,1024,680),l.fillStyle="#172554",l.beginPath(),l.moveTo(0,0),l.lineTo(110,0),l.lineTo(0,85),l.closePath(),l.fill(),l.beginPath(),l.moveTo(1024,0),l.lineTo(914,0),l.lineTo(1024,85),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.beginPath(),l.moveTo(0,85),l.lineTo(110,0),l.lineTo(914,0),l.lineTo(1024,85),l.stroke(),l.fillStyle="#2563eb",l.fillRect(100,35,824,45),l.strokeStyle="#18181b",l.lineWidth=3,l.strokeRect(100,35,824,45),l.fillStyle="#1e3a8a";for(let S=110;S<=900;S+=32)l.beginPath(),l.moveTo(S,80),l.lineTo(S+16,45),l.lineTo(S+32,80),l.closePath(),l.fill();const u=S=>{l.fillStyle="#facc15",l.fillRect(S,85,54,345),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(S,85,54,345);for(let k=104;k<=415;k+=26)l.fillStyle="#dc2626",l.beginPath(),l.arc(S+27,k,9.5,0,Math.PI*2),l.fill(),l.fillStyle="#fde047",l.beginPath(),l.arc(S+27,k,4.5,0,Math.PI*2),l.fill()};u(36),u(934);const g=90,x=335,m=g+x,p=104,M=252;l.fillStyle="#78aee6",l.fillRect(p,g,M,x),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(p,g,M,x);const _=386;l.fillStyle="#78aee6",l.fillRect(_,g,M,x),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(_,g,M,x);const b=668;l.fillStyle="#78aee6",l.fillRect(b,g,M,x),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(b,g,M,x);const C=(S,k)=>{[{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:0},{dx:-1,dy:0}].forEach(({dx:rt,dy:bt})=>{l.fillStyle="#15803d",l.beginPath();const kt=S+rt*72,oe=k+bt*72,ne=-bt*16,Ht=rt*16;l.moveTo(S+rt*24,k+bt*24),l.quadraticCurveTo(S+rt*46+ne,k+bt*46+Ht,kt,oe),l.quadraticCurveTo(S+rt*46-ne,k+bt*46-Ht,S+rt*24,k+bt*24),l.fill(),l.fillStyle="#166534",l.beginPath();const ue=S+rt*52+ne*1.5,Ct=k+bt*52+Ht*1.5;l.moveTo(S+rt*22,k+bt*22),l.quadraticCurveTo(S+rt*34+ne*1.8,k+bt*34+Ht*1.8,ue,Ct),l.quadraticCurveTo(S+rt*38+ne*.8,k+bt*38+Ht*.8,S+rt*22,k+bt*22),l.fill(),l.beginPath();const Qt=S+rt*52-ne*1.5,zt=k+bt*52-Ht*1.5;l.moveTo(S+rt*22,k+bt*22),l.quadraticCurveTo(S+rt*34-ne*1.8,k+bt*34-Ht*1.8,Qt,zt),l.quadraticCurveTo(S+rt*38-ne*.8,k+bt*38-Ht*.8,S+rt*22,k+bt*22),l.fill(),l.strokeStyle="#4ade80",l.lineWidth=1.8,l.beginPath(),l.moveTo(S+rt*26,k+bt*26),l.lineTo(kt*.95+S*.05,oe*.95+k*.05),l.stroke()}),[{dx:.707,dy:-.707},{dx:-.707,dy:-.707},{dx:.707,dy:.707},{dx:-.707,dy:.707}].forEach(({dx:rt,dy:bt})=>{l.fillStyle="#16a34a",l.beginPath();const kt=S+rt*46,oe=k+bt*46,ne=-bt*10,Ht=rt*10;l.moveTo(S+rt*22,k+bt*22),l.quadraticCurveTo(S+rt*32+ne,k+bt*32+Ht,kt,oe),l.quadraticCurveTo(S+rt*32-ne,k+bt*32-Ht,S+rt*22,k+bt*22),l.fill()}),l.fillStyle="#facc15";for(let rt=0;rt<Math.PI*2;rt+=Math.PI/8)l.beginPath(),l.arc(S+Math.cos(rt)*27,k+Math.sin(rt)*27,4.5,0,Math.PI*2),l.fill();l.fillStyle="#facc15",l.beginPath(),l.arc(S,k,25,0,Math.PI*2),l.fill(),l.strokeStyle="#ca8a04",l.lineWidth=2,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.arc(S,k,14,0,Math.PI*2),l.fill(),l.fillStyle="#fef08a",l.beginPath(),l.arc(S,k,6,0,Math.PI*2),l.fill()};C(p+M*.5,g+x*.5),C(b+M*.5,g+x*.5),((S,k,j)=>{l.strokeStyle="#18181b",l.lineWidth=3.5,l.lineCap="round",l.beginPath(),l.moveTo(S-24,j),l.lineTo(S-30,j-5),l.moveTo(S-24,j),l.lineTo(S-18,j-5),l.moveTo(S-24,j),l.lineTo(S-22,j-22),l.lineTo(S-32,j-52),l.lineTo(S-18,j-80),l.stroke(),l.beginPath(),l.moveTo(S+12,j),l.lineTo(S+6,j-5),l.moveTo(S+12,j),l.lineTo(S+18,j-5),l.moveTo(S+12,j),l.lineTo(S+14,j-22),l.lineTo(S+24,j-52),l.lineTo(S+8,j-84),l.stroke(),[{tipX:S+72,tipY:k-25,midX:S+45,midY:k-8},{tipX:S+95,tipY:k-2,midX:S+56,midY:k+12},{tipX:S+104,tipY:k+24,midX:S+58,midY:k+32},{tipX:S+82,tipY:k+50,midX:S+48,midY:k+46}].forEach(({tipX:bt,tipY:kt,midX:oe,midY:ne})=>{l.fillStyle="#facc15",l.beginPath(),l.moveTo(S+16,k+30),l.quadraticCurveTo(oe,ne-12,bt,kt),l.quadraticCurveTo(bt+6,kt+12,bt-12,kt+18),l.quadraticCurveTo(oe,ne+12,S+16,k+38),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(bt-18,kt+4),l.quadraticCurveTo(bt-4,kt-8,bt,kt),l.quadraticCurveTo(bt+6,kt+12,bt-12,kt+18),l.quadraticCurveTo(bt-12,kt+10,bt-18,kt+4),l.closePath(),l.fill()}),l.fillStyle="#facc15",l.beginPath(),l.moveTo(S-36,k+44),l.quadraticCurveTo(S-2,k+72,S+34,k+46),l.quadraticCurveTo(S+8,k+22,S-36,k+44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(S-16,k-42),l.quadraticCurveTo(S-62,k-2,S-42,k+46),l.quadraticCurveTo(S+12,k+34,S+4,k-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(S-18,k-28),l.quadraticCurveTo(S+24,k-35,S+58,k-14),l.lineTo(S+52,k+12),l.quadraticCurveTo(S+14,k+18,S-22,k+12),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#38bdf8",[{x:S+58,y:k-14},{x:S+64,y:k+4},{x:S+52,y:k+18}].forEach(({x:bt,y:kt})=>{l.beginPath(),l.ellipse(bt,kt,9,6,-Math.PI/4,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=1.8,l.stroke()}),l.strokeStyle="#1e3a8a",l.lineWidth=2,l.beginPath(),l.moveTo(S-4,k-18),l.lineTo(S+42,k-8),l.moveTo(S-2,k-6),l.lineTo(S+44,k+4),l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(S-24,k-32),l.quadraticCurveTo(S-28,k-68,S-2,k-78),l.quadraticCurveTo(S+24,k-74,S+22,k-48),l.quadraticCurveTo(S+8,k-28,S-16,k-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.moveTo(S+20,k-58),l.quadraticCurveTo(S+36,k-54,S+44,k-42),l.quadraticCurveTo(S+28,k-42,S+18,k-44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.2,l.stroke(),l.beginPath(),l.moveTo(S+20,k-50),l.lineTo(S+42,k-43),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(S+6,k-58,8.5,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2,l.stroke(),l.fillStyle="#18181b",l.beginPath(),l.arc(S+8,k-58,4.2,0,Math.PI*2),l.fill(),l.fillStyle="#ffffff",l.beginPath(),l.arc(S+7,k-60,1.8,0,Math.PI*2),l.fill()})(_+M*.5,g+x*.52,m),l.fillStyle="#3b82f6",l.fillRect(20,m,984,45),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(20,m,984,45);const I=S=>{l.fillStyle="#94a3b8",l.fillRect(S,m+8,54,28),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(S,m+8,54,28),l.fillStyle="#334155",l.fillRect(S+22,m+4,10,36),l.fillStyle="#f8fafc",l.fillRect(S+6,m+18,6,8),l.fillRect(S+42,m+18,6,8)};I(205),I(485),I(765);const z=470;l.fillStyle="#4a90e2",l.beginPath(),l.moveTo(20,z),l.lineTo(20,580),l.lineTo(315,580),l.lineTo(365,635),l.lineTo(659,635),l.lineTo(709,580),l.lineTo(1004,580),l.lineTo(1004,z),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.stroke();const y=(S,k)=>{l.fillStyle="#18181b",l.fillRect(S-4,498,172,64),l.strokeStyle="#facc15",l.lineWidth=3,l.strokeRect(S-4,498,172,64),(k?["#f59e0b","#ef4444","#f8fafc"]:["#f8fafc","#ef4444","#f59e0b"]).forEach((Et,rt)=>{l.fillStyle=Et,l.fillRect(S+rt*54+2,504,50,52),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(S+rt*54+2,504,50,52),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(S+rt*54+6,508,42,6)})};y(118,!0),y(742,!1);const w=new le(f);this.yellowPaint=new B({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new B({color:165063,roughness:.4,metalness:.3}),this.redPaint=new B({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new B({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new B({color:2040877,roughness:.8}),this.woodPlankMat=new B({color:7877903,roughness:.9}),this.tireMat=new B({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new B({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new Jo({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new he({color:16777215}),this.taillightMat=new B({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new B({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new B({color:16119280,roughness:.65}),this.cowBrownMat=new B({color:9262372,roughness:.7}),this.cowBlackMat=new B({color:2236962,roughness:.75}),this.cowFawnMat=new B({color:12088115,roughness:.68}),this.hornMat=new B({color:3621201,roughness:.4}),this.snoutMat=new B({color:1974308,roughness:.8});const T=new mt;T.name="truckBody",this.bodyGroup=T;const V=new W(1.9,.4,6),it=new v(V,this.chassisMat);it.position.set(0,.65,.2),it.castShadow=!0,T.add(it);const D=new mt;D.position.set(0,.6,-2.85),[-.3,0,.3].forEach(S=>{const k=new ut(.06,.06,2.3,8);k.rotateZ(Math.PI/2);const j=new v(k,this.tealBumperMat);j.position.y=S,j.castShadow=!0,D.add(j)}),[-.95,-.45,.45,.95].forEach(S=>{const k=new W(.08,.72,.08),j=new v(k,this.tealBumperMat);j.position.x=S,D.add(j)}),[-1.08,1.08].forEach(S=>{const k=new ut(.03,.03,.9,6),j=new v(k,this.tealBumperMat);j.position.set(S,.35,0),D.add(j);const Et=new Wt(.07,8,8),rt=new v(Et,this.redPaint);rt.position.set(S,.8,0),D.add(rt)});const G=document.createElement("canvas");G.width=256,G.height=80;const H=G.getContext("2d");H.fillStyle="#006633",H.fillRect(0,0,256,80),H.strokeStyle="#ffffff",H.lineWidth=4,H.strokeRect(4,4,248,72),H.fillStyle="#ffffff",H.font="bold 26px sans-serif",H.textAlign="center",H.fillText("যশোর-ট",128,34),H.fillText("০২-০৯৬৯",128,64);const F=new le(G),tt=new Jt(.65,.22),Z=new he({map:F}),X=new v(tt,Z);X.position.set(0,-.15,.08),D.add(X),T.add(D);const K=new W(1.85,.95,1.6),ht=new v(K,this.yellowPaint);ht.position.set(0,1.25,-2.05),ht.castShadow=!0,T.add(ht);const J=new Jt(1.65,.85),Q=new B({map:n}),lt=new v(J,Q);lt.position.set(0,1.25,-2.86),T.add(lt),[-.68,.68].forEach(S=>{const k=new ut(.16,.16,.06,16);k.rotateX(Math.PI/2);const j=new v(k,this.chassisMat);j.position.set(S,1.15,-2.87),T.add(j);const Et=new ji(.13,16),rt=new v(Et,this.headlightMat);rt.position.set(S,1.15,-2.89),T.add(rt),this.headlights.push(rt);const bt=new S0(16772829,2.5,60,Math.PI/5,.5,1.2);bt.position.set(S,1.15,-2.9),bt.target.position.set(S*1.5,0,-35),T.add(bt),T.add(bt.target)}),[-.98,.98].forEach(S=>{const k=new W(.24,.55,1.4),j=new v(k,this.chassisMat);j.position.set(S,.95,-1.95),j.castShadow=!0,T.add(j)});const ot=new W(2.1,1.45,1.55),nt=new v(ot,this.yellowPaint);nt.position.set(0,1.75,-.6),nt.castShadow=!0,T.add(nt),[-1.06,1.06].forEach(S=>{const k=new W(.04,1.35,1.4),j=new v(k,this.cyanBluePaint);j.position.set(S,1.75,-.6),T.add(j);const Et=new Jt(.65,.55),rt=new v(Et,this.glassMat);rt.position.set(S>0?S+.03:S-.03,1.95,-.65),rt.rotation.y=S>0?Math.PI/2:-Math.PI/2,T.add(rt)});const St=new Jt(1.85,.72),Rt=new v(St,this.glassMat);Rt.position.set(0,1.92,-1.39),T.add(Rt);const st=new mt;st.position.set(0,2.65,-.85);const Tt=new Jt(2.15,.85),U=new B({map:a,roughness:.4}),pt=new v(Tt,U);pt.position.set(0,0,-.55),st.add(pt);const at=new W(2.2,.15,1.4),_t=new v(at,this.redPaint);_t.position.set(0,.45,.1),_t.castShadow=!0,st.add(_t);const ct=new W(2.24,.18,.08),Gt=new v(ct,this.yellowPaint);Gt.position.set(0,.38,-.58),st.add(Gt),T.add(st);const Mt=new mt;Mt.position.set(0,1.6,1.6);const A=new W(2.2,.12,3.4),E=new v(A,this.woodPlankMat);E.position.set(0,-.4,0),E.receiveShadow=!0,Mt.add(E);const Y=new B({map:d,roughness:.45});[-1.12,1.12].forEach(S=>{const k=new Jt(3.4,1.15),j=new v(k,Y);j.position.set(S,.25,0),j.rotation.y=S>0?Math.PI/2:-Math.PI/2,j.castShadow=!0,Mt.add(j);const Et=new W(.12,.12,3.4),rt=new v(Et,this.redPaint);rt.position.set(S,.85,0),Mt.add(rt)});const gt=new W(2.2,1.15,.1),dt=new v(gt,this.redPaint);dt.position.set(0,.25,-1.68),Mt.add(dt);const ft=new mt;ft.position.set(0,0,1.68);const Ft=new W(2.28,1.45,.08),At=new B({color:4886754,roughness:.45}),Ut=new v(Ft,At);Ut.position.set(0,.08,0),Ut.castShadow=!0,ft.add(Ut);const Vt=new Jt(2.28,1.45),Lt=new B({map:w,roughness:.35,metalness:.15}),vt=new v(Vt,Lt);vt.position.set(0,.08,.045),ft.add(vt),[-1,1].forEach(S=>{const k=new vc;k.moveTo(0,0),k.lineTo(S*.18,.28),k.lineTo(0,.28),k.closePath();const j={depth:.08,bevelEnabled:!1},Et=new Ko(k,j),rt=new B({color:1516884,roughness:.4}),bt=new v(Et,rt);bt.position.set(S*1.14,.68,-.04),ft.add(bt)}),[-.78,.78].forEach((S,k)=>{const j=k===0,Et=new v(new W(.42,.16,.05),this.chassisMat);Et.position.set(S,-.42,.08),ft.add(Et);const rt=new v(new W(.12,.12,.03),new B({color:16096779,emissive:14251782,emissiveIntensity:.3}));rt.position.set(j?S-.13:S+.13,-.42,.1),ft.add(rt);const bt=new v(new W(.12,.12,.03),this.taillightMat);bt.position.set(S,-.42,.1),ft.add(bt),this.brakeLights.push(bt);const kt=new v(new W(.12,.12,.03),new B({color:16317180,roughness:.3}));kt.position.set(j?S+.13:S-.13,-.42,.1),ft.add(kt)}),[-.85,.85].forEach(S=>{const k=new v(new W(.42,.44,.03),this.tireMat);k.position.set(S,-.8,.06),ft.add(k)}),Mt.add(ft),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((S,k)=>{const j=this.createBedCow(S.mat,S.scale);j.position.set(S.x,.35,S.z),j.rotation.y=S.rotY,Mt.add(j),this.cows.push({group:j,head:j.userData.head,baseRotX:j.userData.head.rotation.x,seed:k*1.5})}),T.add(Mt);const Kt=this.createTruckWheel(.48,.26,!1);Kt.position.set(0,.42,.4),Kt.rotation.x=Math.PI/2,T.add(Kt);const Xt=new ut(.08,.08,.6,8);Xt.rotateZ(Math.PI/2);const Bt=new v(Xt,this.chassisMat);Bt.position.set(1.05,.48,-.8),T.add(Bt);const Pt=new Me(.22,1.2,12);Pt.rotateZ(-Math.PI/2);const Zt=new he({color:16755200,transparent:!0,opacity:0}),te=new v(Pt,Zt);te.position.set(1.65,.48,-.8),T.add(te),this.exhaustFires.push(te),this.group.add(T);const Ot=.48,yt=.52,xt=.32;[-1.02,1.02].forEach(S=>{const k=this.createTruckWheelAssembly(yt,xt,S>0,!1);k.position.set(S,Ot,-1.95),this.group.add(k),this.wheels.push(k.userData.spinner),this.frontWheels.push(k)}),[-1.02,1.02].forEach(S=>{const k=this.createTruckWheelAssembly(yt,xt,S>0,!0);k.position.set(S,Ot,1.85),this.group.add(k),this.wheels.push(k.userData.spinner)})}createBedCow(t,e=1){const n=new mt;n.scale.set(e,e,e);const i=new W(.85,.85,1.35),o=new v(i,t);o.position.set(0,.45,0),o.castShadow=!0,n.add(o);const r=new Me(.24,.38,8),a=new v(r,t);a.position.set(0,.95,-.32),a.rotation.x=-.2,n.add(a);const c=new mt;c.position.set(0,.75,-.6),n.userData.head=c;const h=new W(.42,.46,.62),d=new v(h,t);d.position.set(0,.22,-.35),c.add(d);const f=new W(.32,.25,.25),l=new v(f,this.snoutMat);return l.position.set(0,.12,-.68),c.add(l),[-.18,.18].forEach(u=>{const g=new Me(.05,.3,6),x=new v(g,this.hornMat);x.position.set(u,.46,-.28),x.rotation.z=u>0?-.38:.38,x.rotation.x=.25,c.add(x);const m=new W(.18,.07,.08),p=new v(m,t);p.position.set(u>0?.26:-.26,.32,-.25),p.rotation.z=u>0?-.35:.35,c.add(p)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const o=new mt,r=new mt;if(o.userData.spinner=r,o.add(r),i){const a=this.createTruckWheel(t,e*.75,n);a.position.x=n?.08:-.08,r.add(a);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,r.add(c)}else{const a=this.createTruckWheel(t,e,n);r.add(a)}return o}createTruckWheel(t,e,n){const i=new mt,o=new ut(t,t,e,24);o.rotateZ(Math.PI/2);const r=new v(o,this.tireMat);i.add(r);const a=new ut(t*.65,t*.65,e+.02,18);a.rotateZ(Math.PI/2);const c=new v(a,this.rimMat);i.add(c);const h=new ut(t*.28,t*.28,e+.05,12);h.rotateZ(Math.PI/2);const d=new v(h,this.chassisMat);return i.add(d),i}update(t,e,n,i,o,r){const a=t*1e3/3600,c=2*Math.PI*.52,h=a/c*(2*Math.PI)*r;this.wheelRotation-=h,this.wheels.forEach(p=>{p.rotation.x=this.wheelRotation});const d=n-this.group.position.x,f=-Math.max(-.35,Math.min(Yt.STEERING.WHEEL_TURN_ANGLE,d*.35));this.frontWheels.forEach(p=>{p.rotation.y+=(f-p.rotation.y)*Math.min(1,r*12)});const l=Math.max(-.065,Math.min(.065,d*.065));this.currentRoll+=(l-this.currentRoll)*Math.min(1,r*10),this.bodyGroup.rotation.z=this.currentRoll;const u=Math.max(-.05,Math.min(.05,d*.05));this.currentYaw+=(u-this.currentYaw)*Math.min(1,r*10),this.bodyGroup.rotation.y=this.currentYaw;let g=0;i?g=.045:o&&(g=-.035),this.currentPitch+=(g-this.currentPitch)*Math.min(1,r*8),this.bodyGroup.rotation.x=this.currentPitch;const x=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(p=>{p.material=x}),this.exhaustFires.forEach(p=>{o?(p.material.opacity=.95,p.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),p.material.color.setHex(Math.random()>.4?16759552:16729088)):p.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=r,this.headlights.forEach(p=>{p.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(p=>{p.scale.set(1,1,1)});const m=performance.now()*.001;this.cows.forEach(p=>{const M=Math.sin(m*6.5+p.seed)*.08+(o?Math.sin(m*14+p.seed)*.05:0);p.head.rotation.x=p.baseRotX+M,p.head.rotation.y=Math.sin(m*2.2+p.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=1.45,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class D0{constructor(){this.group=new mt,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new mt,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new Sn,this.collisionSize=new N(1.5,2.1,3.2),this._boxCenter=new N,this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new mt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=640;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,360);n.addColorStop(0,"#7dd3fc"),n.addColorStop(1,"#e0f2fe"),e.fillStyle=n,e.fillRect(0,0,1024,640);const i=(P,O,$)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(P,O,38*$,0,Math.PI*2),e.arc(P+42*$,O-14*$,48*$,0,Math.PI*2),e.arc(P+95*$,O-8*$,42*$,0,Math.PI*2),e.arc(P+135*$,O+8*$,32*$,0,Math.PI*2),e.fill()};i(80,120,1.1),i(720,100,.95);const o=512,r=270;for(let P=-Math.PI;P<=0;P+=Math.PI/18)e.beginPath(),e.moveTo(o,r),e.lineTo(o+Math.cos(P)*380,r+Math.sin(P)*380),e.lineTo(o+Math.cos(P+Math.PI/36)*380,r+Math.sin(P+Math.PI/36)*380),e.closePath(),e.fillStyle="rgba(245, 158, 11, 0.45)",e.fill();e.beginPath(),e.arc(o,r,78,Math.PI,0),e.fillStyle="#f59e0b",e.fill(),e.beginPath(),e.arc(o,r,52,Math.PI,0),e.fillStyle="#fde047",e.fill();const a=e.createLinearGradient(0,270,0,520);a.addColorStop(0,"#0284c7"),a.addColorStop(1,"#0369a1"),e.fillStyle=a,e.beginPath(),e.moveTo(0,270),e.lineTo(512,270),e.lineTo(470,520),e.lineTo(0,520),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=3.5;for(let P=290;P<510;P+=24)for(let $=20;$<440;$+=38*2)e.beginPath(),e.moveTo($,P),e.quadraticCurveTo($+38/2,P-5,$+38,P),e.stroke();e.fillStyle="#fde68a",e.beginPath(),e.moveTo(470,520),e.lineTo(512,270),e.lineTo(560,270),e.lineTo(530,520),e.closePath(),e.fill(),e.fillStyle="#16a34a",e.beginPath(),e.moveTo(520,270),e.lineTo(1024,270),e.lineTo(1024,520),e.lineTo(485,520),e.closePath(),e.fill();const c=(P,O)=>{e.strokeStyle="#854d0e",e.lineWidth=6,e.beginPath(),e.moveTo(P,O),e.quadraticCurveTo(P-15,O-60,P-25,O-110),e.stroke(),e.strokeStyle="#15803d",e.lineWidth=4;for(let $=0;$<Math.PI*2;$+=Math.PI/4)e.beginPath(),e.moveTo(P-25,O-110),e.quadraticCurveTo(P-25+Math.cos($)*45,O-110+Math.sin($)*40-15,P-25+Math.cos($)*65,O-110+Math.sin($)*40),e.stroke()};c(640,360),c(720,350),c(940,360),e.fillStyle="#fce7f3",e.fillRect(720,370,190,85),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(720,370,190,85),e.fillStyle="#dc2626",e.beginPath(),e.moveTo(705,370),e.lineTo(815,310),e.lineTo(925,370),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let P=720;P<910;P+=18)e.beginPath(),e.moveTo(P,370),e.lineTo(815,310),e.stroke();e.fillStyle="#374151",e.fillRect(785,395,35,60),e.fillRect(850,390,30,30),e.fillStyle="#f8fafc",e.fillRect(570,385,140,70),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(570,385,140,70),e.fillStyle="#2563eb",e.beginPath(),e.moveTo(555,385),e.lineTo(640,335),e.lineTo(725,385),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let P=570;P<710;P+=18)e.beginPath(),e.moveTo(P,385),e.lineTo(640,335),e.stroke();e.fillStyle="#1e3a8a",e.fillRect(620,405,30,50),e.fillStyle="#ea580c",e.fillRect(0,510,1024,45),e.fillStyle="#fde047";for(let P=20;P<1024;P+=40)e.beginPath(),e.arc(P,510,16,0,Math.PI),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2,e.stroke();e.fillStyle="#18181b",e.fillRect(0,555,1024,35);const h=["#dc2626","#ffffff","#16a34a","#fde047"];for(let P=0;P<48;P++)e.fillStyle=h[P%h.length],e.fillRect(P*22,558,14,29);const d=(P,O)=>{e.strokeStyle="#94a3b8",e.lineWidth=3,e.beginPath(),e.arc(P,O,8,0,Math.PI*2),e.stroke(),e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(P,O+8),e.bezierCurveTo(P+28,O+8,P+44,O+28,P,O+64),e.bezierCurveTo(P-44,O+28,P-28,O+8,P,O+8),e.closePath(),e.fill(),e.strokeStyle="#64748b",e.lineWidth=2.5,e.stroke(),e.fillStyle="#94a3b8",[[0,24],[-14,28],[14,28],[-8,42],[8,42],[0,52]].forEach(([$,wt])=>{e.beginPath(),e.arc(P+$,O+wt,3.2,0,Math.PI*2),e.fill()})};d(220,570),d(512,570),d(804,570);const f=new le(t),l=document.createElement("canvas");l.width=1024,l.height=260;const u=l.getContext("2d"),g=u.createLinearGradient(0,0,0,260);g.addColorStop(0,"#f8fafc"),g.addColorStop(.5,"#e2e8f0"),g.addColorStop(1,"#94a3b8"),u.fillStyle=g,u.fillRect(0,0,1024,260),u.fillStyle="#475569";for(let P=30;P<1e3;P+=45)u.beginPath(),u.arc(P,24,7,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(P-2,22,2.5,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.fillStyle="#475569",u.beginPath(),u.arc(P,236,7,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(P-2,234,2.5,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.fillStyle="#475569";u.fillStyle="#f59e0b",u.strokeStyle="#dc2626",u.lineWidth=7,u.font="bold 82px sans-serif",u.textAlign="center",u.textBaseline="middle",u.strokeText("বাংলাদেশ",512,115),u.fillText("বাংলাদেশ",512,115),u.fillStyle="#16a34a",u.font="bold 78px sans-serif",u.fillText("বাংলাদেশ",512,113),u.fillStyle="#fef08a",u.font="bold 74px sans-serif",u.fillText("বাংলাদেশ",512,111);const x=["#dc2626","#16a34a","#f59e0b","#06b6d4","#ec4899"];for(let P=0;P<18;P++)u.beginPath(),u.arc(310+P*24,185,7.5,0,Math.PI*2),u.fillStyle=x[P%x.length],u.fill(),u.strokeStyle="#18181b",u.lineWidth=1.8,u.stroke();const m=(P,O)=>{u.beginPath(),u.arc(P,O,62,0,Math.PI*2),u.fillStyle="#cbd5e1",u.fill(),u.strokeStyle="#64748b",u.lineWidth=4,u.stroke(),u.beginPath(),u.arc(P,O,48,0,Math.PI*2),u.fillStyle="#dc2626",u.fill(),u.strokeStyle="#fde047",u.lineWidth=3,u.stroke(),u.fillStyle="#ffffff",u.font="bold 50px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText("মা",P,O)};m(140,125),m(884,125);const p=new le(l),M=document.createElement("canvas");M.width=1024,M.height=1024;const _=M.getContext("2d");_.beginPath(),_.moveTo(40,1024),_.lineTo(40,520),_.bezierCurveTo(40,60,984,60,984,520),_.lineTo(984,1024),_.closePath(),_.fillStyle="#dc2626",_.fill(),_.strokeStyle="#881337",_.lineWidth=12,_.stroke(),_.strokeStyle="#fde047",_.lineWidth=5,_.stroke(),_.fillStyle="#1d4ed8",_.fillRect(456,120,112,680),_.strokeStyle="#18181b",_.lineWidth=3,_.strokeRect(456,120,112,680),_.fillStyle="#ffffff",_.fillRect(498,120,28,680),_.beginPath(),_.arc(512,780,42,0,Math.PI*2),_.fillStyle="#dc2626",_.fill(),_.strokeStyle="#fde047",_.lineWidth=5,_.stroke(),_.fillStyle="#ffffff",_.font="bold 44px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("১",512,780);const b=(P,O,$,wt)=>{_.save(),_.translate(O,$),_.rotate(wt),_.font="bold 88px sans-serif",_.textAlign="center",_.textBaseline="middle",_.strokeStyle="#18181b",_.lineWidth=12,_.strokeText(P,0,0),_.fillStyle="#ffffff",_.fillText(P,0,0),_.restore()};b("মায়ের",310,240,-.22),b("দোয়া",714,240,.22);const C=(P,O)=>{_.save(),_.translate(P,500),O&&_.scale(-1,1),_.beginPath(),_.arc(70,-160,36,0,Math.PI*2),_.fillStyle="#fde047",_.fill(),_.strokeStyle="#18181b",_.lineWidth=3,_.stroke(),_.beginPath(),_.arc(70,-160,16,0,Math.PI*2),_.fillStyle="#ea580c",_.fill();for(let wt=0;wt<7;wt++){const Nt=-Math.PI/2+(wt-3)*.35;_.beginPath(),_.ellipse(80+Math.cos(Nt)*45,-50+Math.sin(Nt)*35,18,38,Nt,0,Math.PI*2),_.fillStyle="#ec4899",_.fill(),_.strokeStyle="#18181b",_.lineWidth=2.5,_.stroke()}_.beginPath(),_.arc(80,-50,24,0,Math.PI*2),_.fillStyle="#fef08a",_.fill(),_.stroke(),((wt,Nt)=>{_.fillStyle="#16a34a",_.beginPath(),_.ellipse(wt-30,Nt+20,16,32,.6,0,Math.PI*2),_.ellipse(wt+30,Nt+20,16,32,-.6,0,Math.PI*2),_.fill(),_.stroke(),_.fillStyle="#1d4ed8",_.beginPath(),_.arc(wt,Nt,55,0,Math.PI*2),_.fill(),_.strokeStyle="#18181b",_.lineWidth=3,_.stroke(),_.strokeStyle="#38bdf8",_.lineWidth=4,_.beginPath(),_.arc(wt,Nt,36,.4,Math.PI*1.6),_.stroke(),_.beginPath(),_.arc(wt,Nt,20,Math.PI,Math.PI*2.2),_.stroke(),_.fillStyle="#ffffff",_.beginPath(),_.arc(wt,Nt,10,0,Math.PI*2),_.fill()})(85,110),_.restore()};C(260,!1),C(764,!0);const L=new le(M),I=document.createElement("canvas");I.width=512,I.height=128;const z=I.getContext("2d");z.fillStyle="#ffffff",z.fillRect(0,0,512,128),z.fillStyle="#dc2626";for(let P=-128;P<640;P+=36)z.beginPath(),z.moveTo(P,0),z.lineTo(P+18,0),z.lineTo(P+18+128,128),z.lineTo(P+128,128),z.closePath(),z.fill();const y=new le(I),w=document.createElement("canvas");w.width=1024,w.height=1024;const T=w.getContext("2d");T.fillStyle="#f59e0b",T.fillRect(0,0,1024,1024),T.strokeStyle="rgba(234, 88, 12, 0.18)",T.lineWidth=3;for(let P=-1024;P<2048;P+=64)T.beginPath(),T.moveTo(P,0),T.lineTo(P+1024,1024),T.stroke(),T.beginPath(),T.moveTo(P,1024),T.lineTo(P+1024,0),T.stroke();T.fillStyle="#881337",T.fillRect(0,0,1024,140),T.fillRect(0,884,1024,140),T.fillStyle="#06b6d4",T.fillRect(0,140,1024,28),T.fillRect(0,856,1024,28),T.fillStyle="#10b981",T.fillRect(0,168,1024,16),T.fillRect(0,840,1024,16);for(let P=32;P<1024;P+=64)T.beginPath(),T.arc(P,140,16,0,Math.PI),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(P,884,16,Math.PI,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke();[70,954].forEach(P=>{T.fillStyle="#ffffff",T.font="bold 44px sans-serif",T.textAlign="center",T.textBaseline="middle",T.shadowColor="rgba(0,0,0,0.8)",T.shadowBlur=8,T.fillText("মা বাবার দোয়া",512,P),T.shadowBlur=0}),((P,O)=>{T.strokeStyle="#ea580c",T.lineWidth=4;for(let $=0;$<Math.PI*2;$+=Math.PI/16)T.beginPath(),T.moveTo(P,O),T.lineTo(P+Math.cos($)*260,O+Math.sin($)*260),T.stroke();for(let $=0;$<16;$++){const wt=$*Math.PI/8,Nt=P+Math.cos(wt)*175,qt=O+Math.sin(wt)*175;T.beginPath(),T.ellipse(Nt,qt,42,65,wt+Math.PI/2,0,Math.PI*2),T.fillStyle=$%2===0?"#dc2626":"#0284c7",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke()}for(let $=0;$<12;$++){const wt=$*Math.PI/6,Nt=P+Math.cos(wt)*115,qt=O+Math.sin(wt)*115;T.beginPath(),T.ellipse(Nt,qt,34,52,wt+Math.PI/2,0,Math.PI*2),T.fillStyle=$%2===0?"#ec4899":"#10b981",T.fill(),T.strokeStyle="#18181b",T.lineWidth=3.5,T.stroke()}T.beginPath(),T.arc(P,O,62,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(P,O,32,0,Math.PI*2),T.fillStyle="#b91c1c",T.fill(),[-1,1].forEach($=>{T.beginPath(),T.moveTo(P+$*160,O-60),T.bezierCurveTo(P+$*320,O-140,P+$*420,O-40,P+$*340,O+50),T.bezierCurveTo(P+$*280,O+120,P+$*200,O+60,P+$*180,O),T.fillStyle="#0d9488",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(P+$*320,O-30,28,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.beginPath(),T.arc(P+$*320,O-30,16,0,Math.PI*2),T.fillStyle="#1e3a8a",T.fill()})})(512,512);const it=(P,O)=>{const $=["#dc2626","#ec4899","#f59e0b","#10b981"];for(let wt=0;wt<8;wt++){const Nt=wt*Math.PI/4,qt=P+Math.cos(Nt)*48,jt=O+Math.sin(Nt)*48;T.beginPath(),T.arc(qt,jt,22,0,Math.PI*2),T.fillStyle=$[wt%$.length],T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke()}T.beginPath(),T.arc(P,O,26,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(P,O,12,0,Math.PI*2),T.fillStyle="#991b1b",T.fill()};[120,904].forEach(P=>{it(P,320),it(P,704)});const D=new le(w),G=document.createElement("canvas");G.width=256,G.height=256;const H=G.getContext("2d");H.fillStyle="#b91c1c",H.fillRect(0,0,256,256),H.strokeStyle="#fde047",H.lineWidth=3;for(let P=0;P<256;P+=32)H.beginPath(),H.moveTo(P,0),H.lineTo(P+32,256),H.stroke(),H.beginPath(),H.moveTo(256-P,0),H.lineTo(256-P-32,256),H.stroke();const F=new le(G),tt=document.createElement("canvas");tt.width=512,tt.height=256;const Z=tt.getContext("2d");Z.fillStyle="#f59e0b",Z.fillRect(0,0,512,256),Z.fillStyle="#ea580c",Z.beginPath(),Z.arc(256,105,45,0,Math.PI*2),Z.fill();for(let P=0;P<Math.PI*2;P+=Math.PI/8)Z.fillStyle="#dc2626",Z.beginPath(),Z.arc(256+Math.cos(P)*62,105+Math.sin(P)*62,14,0,Math.PI*2),Z.fill();Z.fillStyle="#fde047",Z.beginPath(),Z.arc(256,105,26,0,Math.PI*2),Z.fill(),Z.fillStyle="#0d9488",Z.fillRect(0,185,512,71),Z.strokeStyle="#fde047",Z.lineWidth=5;for(let P=-20;P<=530;P+=32)Z.beginPath(),Z.moveTo(P,185),Z.lineTo(P+32,256),Z.stroke(),Z.beginPath(),Z.moveTo(P+32,185),Z.lineTo(P,256),Z.stroke();const X=new le(tt),K=new B({color:14427686,metalness:.6,roughness:.3}),ht=new B({color:15658734,metalness:.9,roughness:.15}),J=new B({color:2040865,roughness:.9}),Q=new B({color:165063,metalness:.5,roughness:.4}),lt=new B({color:1409085,roughness:.6}),ot=new B({map:f,roughness:.4}),nt=new B({map:p,roughness:.35,metalness:.1}),St=new B({map:L,roughness:.6,transparent:!0,side:Ee}),Rt=new B({map:y,roughness:.45,metalness:.1}),st=new B({map:X,roughness:.5,side:Ee}),Tt=new B({map:D,roughness:.7,side:Ee}),U=new B({map:F,roughness:.6}),pt=new mt,at=new ut(.045,.045,1.8,12);at.rotateX(Math.PI/2);const _t=new v(at,K);_t.position.set(0,.65,.1),pt.add(_t);const ct=new ut(.04,.04,.95,12);ct.rotateX(-.18);const Gt=new v(ct,K);Gt.position.set(0,.95,-.9),pt.add(Gt),[-.1,.1].forEach(P=>{const O=new ut(.025,.02,.7,8);O.rotateX(.15);const $=new v(O,ht);$.position.set(P,.48,-1.02),pt.add($)});const Mt=new ut(.025,.025,.75,12);Mt.rotateZ(Math.PI/2);const A=new v(Mt,ht);A.position.set(0,1.35,-.85),pt.add(A),[-.38,.38].forEach(P=>{const O=new ut(.032,.032,.14,12);O.rotateZ(Math.PI/2);const $=new v(O,J);$.position.set(P,1.35,-.85),pt.add($)});const E=new Wt(.09,14,14);E.scale(1,1,.7);const Y=new v(E,new he({color:16777215}));Y.position.set(0,1.05,-1.08),pt.add(Y),this.headlights.push(Y);const gt=new Wt(.05,12,12);this.bellMesh=new v(gt,ht),this.bellMesh.position.set(-.24,1.4,-.85),pt.add(this.bellMesh);const dt=new W(.26,.08,.32),ft=new v(dt,J);ft.position.set(0,1.08,-.15),pt.add(ft),[-.08,.08].forEach(P=>{const O=new ut(.02,.02,.12,8),$=new v(O,ht);$.position.set(P,.98,-.15),pt.add($)});const Ft=new ut(.06,.06,.28,12);Ft.rotateZ(Math.PI/2);const At=new v(Ft,ht);At.position.set(0,.52,-.15),pt.add(At),this.bodyGroup.add(pt),this.frontWheel=this.createRickshawWheel(.42,K,ht,J),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const Ut=new ut(.46,.46,.12,16,1,!0,0,Math.PI*.8);Ut.rotateZ(Math.PI/2);const Vt=new v(Ut,Q);Vt.position.set(0,.44,-1.05),this.bodyGroup.add(Vt),[-.78,.78].forEach(P=>{const O=this.createRickshawWheel(.48,K,ht,J);O.position.set(P,.48,.95),this.bodyGroup.add(O),this.wheels.push(O);const $=new ut(.53,.53,.16,20,1,!0,0,Math.PI);$.rotateZ(Math.PI/2);const wt=new v($,Rt);wt.position.set(P,.48,.95),this.bodyGroup.add(wt)});const Lt=new mt,vt=new W(1.25,.08,1.25),$t=new v(vt,lt);$t.position.set(0,.65,.75),Lt.add($t);const Kt=new W(.9,.05,.5),Xt=new v(Kt,lt);Xt.position.set(0,.48,.35),Lt.add(Xt);const Bt=new W(1.2,.38,.58),Pt=new v(Bt,lt);Pt.position.set(0,.86,.88),Lt.add(Pt),[-.62,.62].forEach((P,O)=>{const $=new Jt(1.15,.52),wt=new v($,st);wt.position.set(P,.96,.75),wt.rotation.y=O===0?-Math.PI/2:Math.PI/2,Lt.add(wt)});const Zt=new W(1.18,.14,.56),te=new v(Zt,U);te.position.set(0,1.08,.88),Lt.add(te);const Ot=new W(1.16,.22,.1),yt=new v(Ot,U);yt.position.set(0,1.15,1.08),Lt.add(yt),[-.58,.58].forEach(P=>{const O=new W(.08,.28,.6),$=new v(O,Q);$.position.set(P,1.22,.88),Lt.add($)});const xt=new Jt(1.06,.54),S=new v(xt,ot);S.position.set(0,.66,1.18),S.rotation.y=Math.PI,Lt.add(S);const k=new Jt(1.08,.19),j=new v(k,nt);j.position.set(0,.96,1.185),j.rotation.y=Math.PI,Lt.add(j);const Et=new Jt(1.22,.82),rt=new v(Et,St);rt.position.set(0,1.5,1.11),rt.rotation.y=Math.PI,Lt.add(rt),[-.78,.78].forEach(P=>{const O=new v(new ut(.055,.055,.035,12),ht);O.rotateX(Math.PI/2),O.position.set(P,.62,1.16),Lt.add(O);const $=new Wt(.048,12,12),wt=new v($,new he({color:15680580}));wt.position.set(P,.62,1.18),Lt.add(wt),this.brakeLights.push(wt)});const bt=new ut(.7,.7,.96,24,1,!0,-Math.PI/2,Math.PI);bt.rotateX(-Math.PI/2);const kt=new v(bt,Tt);kt.position.set(0,1.5,.62),Lt.add(kt);const oe=new ln(.7,.022,8,24,Math.PI),ne=new v(oe,K);ne.position.set(0,1.5,.14),Lt.add(ne);for(let P=0;P<=14;P++){const O=P*Math.PI/14,$=Math.cos(O)*.7,wt=1.5+Math.sin(O)*.7,Nt=new v(new Wt(.022,6,6),new B({color:14427686,roughness:.8}));Nt.position.set($,wt-.02,.14),Lt.add(Nt)}const Ht=new ln(.7,.025,8,24,Math.PI),ue=new v(Ht,K);ue.position.set(0,1.5,1.1),Lt.add(ue);for(let P=0;P<=14;P++){const O=P*Math.PI/14,$=Math.cos(O)*.7,wt=1.5+Math.sin(O)*.7,Nt=new v(new Wt(.022,6,6),new B({color:14427686,roughness:.8}));Nt.position.set($,wt-.02,1.1),Lt.add(Nt)}const Ct=new ut(.7,.7,.12,24,1,!0,-Math.PI/2,Math.PI);Ct.rotateX(-Math.PI/2);const Qt=new v(Ct,Tt);Qt.position.set(0,1.5,1.04),Lt.add(Qt),[-.7,.7].forEach((P,O)=>{const $=new Jt(.82,.36),wt=new v($,Tt);wt.position.set(P,1.34,.65),wt.rotation.y=O===0?-Math.PI/2:Math.PI/2,Lt.add(wt);const Nt=new v(new ut(.012,.012,.78,8),ht);Nt.position.set(P+(O===0?-.015:.015),1.34,.65),Nt.rotation.x=.45,Lt.add(Nt);const qt=new v(new ut(.012,.012,.78,8),ht);qt.position.set(P+(O===0?-.015:.015),1.34,.65),qt.rotation.x=-.45,Lt.add(qt);const jt=new v(new Wt(.022,8,8),K);jt.position.set(P+(O===0?-.025:.025),1.34,.65),Lt.add(jt)}),[-.64,.64].forEach(P=>{const O=new ut(.016,.016,1.15,8);O.rotateX(.42);const $=new v(O,K);$.position.set(P,1.4,.6),Lt.add($)}),this.bodyGroup.add(Lt);const zt=new mt,pe=new B({color:165063,roughness:.8}),fe=new B({color:9262372,roughness:.7}),Le=new B({color:1409085,roughness:.9}),rn=new W(.36,.48,.22),an=new v(rn,pe);an.position.set(0,1.42,-.25),an.rotation.x=.22,zt.add(an);const yn=new Wt(.12,14,14),un=new v(yn,fe);un.position.set(0,1.74,-.32),zt.add(un);const Fn=new ln(.11,.035,8,16);Fn.rotateX(Math.PI/2);const R=new v(Fn,new B({color:14427686}));R.position.set(0,1.68,-.32),zt.add(R),[-.18,.18].forEach(P=>{const O=new ut(.04,.035,.52,8);O.rotateX(.75);const $=new v(O,fe);$.position.set(P,1.42,-.52),zt.add($)});const q=new W(.38,.44,.32),et=new v(q,Le);et.position.set(0,1.05,-.18),zt.add(et),this.bodyGroup.add(zt),this.buildCuteRomanticCouple(),[-.32,.32].forEach(P=>{const O=new Me(.12,.65,8);O.rotateX(-Math.PI/2);const $=new he({color:16759552,transparent:!0,opacity:0}),wt=new v(O,$);wt.position.set(P,.58,1.25),this.bodyGroup.add(wt),this.exhaustFires.push(wt)})}createRickshawWheel(t,e,n,i){const o=new mt,r=new ln(t,.038,14,36);r.rotateY(Math.PI/2);const a=new v(r,i);o.add(a);const c=new ln(t*.92,.02,10,36);c.rotateY(Math.PI/2);const h=new v(c,n);o.add(h);const d=new ut(.06,.06,.14,14);d.rotateZ(Math.PI/2);const f=new v(d,e);o.add(f);for(let l=0;l<14;l++){const u=l*Math.PI/7,g=new ut(.005,.005,t*1.84,4);g.rotateX(u);const x=new v(g,n);o.add(x)}return o}buildCuteRomanticCouple(){this.coupleGroup=new mt,this.coupleGroup.position.set(0,0,0);const t=new B({color:16106390,roughness:.6}),e=new B({color:1841431,roughness:.5}),n=new B({color:986638,roughness:.4}),i=new B({color:15680580,roughness:.7}),o=new B({color:1976635,roughness:.8}),r=new B({color:15485081,roughness:.6}),a=new B({color:16638023,roughness:.7}),c=new B({color:16777215,roughness:.8}),h=new mt;h.position.set(-.25,1.18,.82);const d=new W(.32,.42,.24),f=new v(d,i);f.position.set(0,.22,0),f.rotation.y=.16,f.rotation.z=-.06,h.add(f);const l=new Wt(.12,14,14),u=new v(l,t);u.position.set(.02,.52,.02),u.rotation.y=.26,u.rotation.z=-.08,h.add(u);const g=new Wt(.13,14,14);g.scale(1.02,1.05,1.02);const x=new v(g,e);x.position.set(.02,.55,.01),h.add(x);const m=new W(.28,.18,.48),p=new v(m,o);p.position.set(0,-.05,-.16),h.add(p);const M=new ut(.04,.035,.38,8);M.rotateZ(.25);const _=new v(M,i);_.position.set(-.22,.18,0),h.add(_);const b=new ut(.04,.035,.34,8);b.rotateZ(-Math.PI/4),b.rotateX(-.18);const C=new v(b,i);C.position.set(.18,.14,-.07),h.add(C),this.coupleGroup.add(h);const L=new mt;L.position.set(.25,1.18,.82);const I=new W(.28,.38,.22),z=new v(I,r);z.position.set(0,.2,0),z.rotation.y=-.18,z.rotation.z=.08,L.add(z);const y=new W(.32,.35,.24),w=new v(y,a);w.position.set(0,.22,.02),L.add(w);const T=new Wt(.11,14,14),V=new v(T,t);V.position.set(-.02,.48,.02),V.rotation.y=-.3,V.rotation.z=.1,L.add(V);const it=new Wt(.12,14,14);it.scale(1.04,1.06,1.08);const D=new v(it,n);D.position.set(-.02,.51,0),L.add(D);const G=new ut(.04,.02,.32,8);G.rotateX(-.4);const H=new v(G,n);H.position.set(-.01,.38,.15),L.add(H);const F=new W(.26,.16,.46),tt=new v(F,c);tt.position.set(0,-.05,-.16),L.add(tt);const Z=new ut(.035,.03,.35,8);Z.rotateZ(-.25),Z.rotateX(-.25);const X=new v(Z,r);X.position.set(.2,.16,-.05),L.add(X);const K=new mt,ht=new ut(.007,.007,.32,6),J=new B({color:1409085,roughness:.8}),Q=new v(ht,J);Q.position.set(0,.14,0),K.add(Q);const lt=new W(.07,.012,.035),ot=new v(lt,J);ot.position.set(.035,.12,0),ot.rotation.z=.3,K.add(ot);const nt=new v(lt,J);nt.position.set(-.035,.18,0),nt.rotation.z=-.3,K.add(nt);const St=new B({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Rt=new v(new Zo(.055,1),St);Rt.position.set(0,.3,0),Rt.scale.set(1.1,1.25,1.1),K.add(Rt);const st=new v(new Wt(.038,8,8),new B({color:10033947,roughness:.3}));st.position.set(0,.32,0),K.add(st),K.position.set(.22,.22,-.15),K.rotation.x=-.35,K.rotation.z=-.22,L.add(K);const Tt=new ut(.035,.03,.32,8);Tt.rotateZ(Math.PI/4),Tt.rotateX(-.18);const U=new v(Tt,r);U.position.set(-.17,.14,-.07),L.add(U),this.coupleGroup.add(L);const pt=new mt;pt.position.set(0,1.28,.74);const at=new v(new Wt(.045,10,10),t);at.scale.set(1.3,.9,1.1),at.position.set(-.02,0,0),pt.add(at);const _t=new v(new Wt(.042,10,10),t);_t.scale.set(1.2,.85,1.05),_t.position.set(.02,.01,.01),pt.add(_t),this.coupleGroup.add(pt),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,o,r){const c=t*1e3/3600/.42*r;this.wheelRotation-=c,this.wheels.forEach(m=>{m.rotation.x=this.wheelRotation});const h=n-e,d=-h*.12;this.currentRoll+=(d-this.currentRoll)*Math.min(1,r*7),this.bodyGroup.rotation.z=this.currentRoll;const f=-h*.08;this.currentYaw+=(f-this.currentYaw)*Math.min(1,r*6),this.bodyGroup.rotation.y=this.currentYaw;let l=0;i?l=.04:o&&(l=-.05),this.currentPitch+=(l-this.currentPitch)*Math.min(1,r*8),this.bodyGroup.rotation.x=this.currentPitch;const u=performance.now()*.001,g=Math.min(1,t/80),x=Math.sin(u*8.5)*.025*g;this.coupleGroup.position.y=x,this.coupleGroup.rotation.z=Math.sin(u*4.2)*.015*g,this.exhaustFires.forEach(m=>{o?(m.material.opacity=.9,m.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):m.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=r,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(m=>m.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(m=>m.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=1.15,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class U0{constructor(){this.group=new mt,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new Sn,this.collisionSize=new N(1.32,1.74,2.58),this._boxCenter=new N,this.buildCNG(),this.group.scale.set(.96,.96,.96)}buildCNG(){this.bodyGroup=new mt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.clearRect(0,0,1024,1024),e.beginPath(),e.moveTo(0,420),e.lineTo(0,150),e.quadraticCurveTo(0,18,175,18),e.lineTo(849,18),e.quadraticCurveTo(1024,18,1024,150),e.lineTo(1024,420),e.closePath(),e.fillStyle="#1c1917",e.fill(),e.fillStyle="rgba(255, 255, 255, 0.025)";for(let Ot=0;Ot<1024;Ot+=4)e.fillRect(Ot,0,2,420);for(let Ot=0;Ot<420;Ot+=4)e.fillRect(0,Ot,1024,2);const n=262,i=135,o=500,r=220;e.fillStyle="#09090b",e.beginPath(),e.roundRect(n-14,i-14,o+28,r+28,28),e.fill();const a=e.createLinearGradient(n,i,n,i+r);a.addColorStop(0,"#0f172a"),a.addColorStop(.4,"#1e293b"),a.addColorStop(1,"#090d16"),e.fillStyle=a,e.beginPath(),e.roundRect(n,i,o,r,20),e.fill(),e.fillStyle="#2563eb",e.beginPath(),e.roundRect(n+25,i+65,o-50,r-75,14),e.fill(),e.strokeStyle="#1d4ed8",e.lineWidth=4,e.beginPath(),e.moveTo(n+o*.5,i+65),e.lineTo(n+o*.5,i+r-10),e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.12)",e.beginPath(),e.moveTo(n+40,i+r),e.lineTo(n+160,i),e.lineTo(n+220,i),e.lineTo(n+100,i+r),e.closePath(),e.fill(),e.fillStyle="#facc15",e.fillRect(0,420,1024,105),e.fillStyle="#18181b",e.fillRect(0,416,1024,6),e.fillRect(0,523,1024,6),e.fillStyle="#15803d",e.fillRect(0,525,1024,499),e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(0,529,1024,4);const c=230,h=565,d=564,f=345;e.fillStyle="#14532d",e.beginPath(),e.roundRect(c-6,h-6,d+12,f+12,12),e.fill(),e.fillStyle="#166534",e.beginPath(),e.roundRect(c,h,d,f,8),e.fill(),e.strokeStyle="#22c55e",e.lineWidth=3,e.stroke();for(let Ot=0;Ot<4;Ot++){const yt=h+38+Ot*68;e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+28,yt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+32,yt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+32,yt+4,227,4),e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+301,yt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+305,yt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+305,yt+4,227,4)}e.fillStyle="#cbd5e1",e.beginPath(),e.roundRect(c+d*.5-28,h+f-36,56,18,4),e.fill(),e.fillStyle="#09090b",e.beginPath(),e.arc(c+d*.5,h+f-27,4,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="900 64px sans-serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.7)",e.shadowBlur=6,e.fillText("CNG",120,715),e.shadowBlur=0;const l=810,u=665,g=165,x=95;e.fillStyle="#facc15",e.beginPath(),e.roundRect(l,u,g,x,8),e.fill(),e.strokeStyle="#18181b",e.lineWidth=4,e.stroke(),e.fillStyle="#18181b",e.font="900 32px sans-serif",e.fillText("HR 26",l+g*.5,u+34),e.font="900 36px monospace",e.fillText("0123",l+g*.5,u+70),e.fillStyle="#18181b",e.fillRect(0,955,1024,69),e.fillStyle="#3f3f46",e.fillRect(0,955,1024,6);const m=new le(t),p=document.createElement("canvas");p.width=1024,p.height=1024;const M=p.getContext("2d");M.clearRect(0,0,1024,1024),M.beginPath(),M.moveTo(0,480),M.lineTo(0,140),M.quadraticCurveTo(0,18,175,18),M.lineTo(849,18),M.quadraticCurveTo(1024,18,1024,140),M.lineTo(1024,480),M.closePath(),M.fillStyle="#facc15",M.fill(),M.fillStyle="#09090b",M.beginPath(),M.roundRect(75,55,874,340,24),M.fill(),M.fillStyle="#1e293b",M.fillRect(265,75,494,300),M.fillStyle="#1e293b",M.fillRect(95,75,150,300),M.fillStyle="#1e293b",M.fillRect(779,75,150,300),M.fillStyle="#09090b",M.fillRect(245,70,20,310),M.fillRect(759,70,20,310),M.strokeStyle="#09090b",M.lineWidth=10,M.beginPath(),M.moveTo(420,370),M.lineTo(610,205),M.stroke(),M.strokeStyle="#18181b",M.lineWidth=6,M.beginPath(),M.moveTo(560,245),M.lineTo(660,160),M.stroke(),M.fillStyle="#f59e0b",M.beginPath(),M.roundRect(115,420,95,34,6),M.fill(),M.beginPath(),M.roundRect(814,420,95,34,6),M.fill(),M.fillStyle="#15803d",M.fillRect(0,480,1024,544),M.fillStyle="#18181b",M.beginPath(),M.moveTo(310,480),M.lineTo(714,480),M.lineTo(650,880),M.lineTo(374,880),M.closePath(),M.fill(),M.fillStyle="#facc15",M.beginPath(),M.roundRect(432,590,160,80,6),M.fill(),M.strokeStyle="#18181b",M.lineWidth=3,M.stroke(),M.fillStyle="#18181b",M.font="900 26px sans-serif",M.textAlign="center",M.fillText("HR 26",512,622),M.font="900 28px monospace",M.fillText("0123",512,654),M.fillStyle="#ffffff",M.font="900 52px sans-serif",M.fillText("CNG",200,680);const _=new le(p),b=document.createElement("canvas");b.width=1024,b.height=512;const C=b.getContext("2d");C.fillStyle="#1c1917",C.fillRect(0,0,1024,210),C.fillStyle="#facc15",C.fillRect(0,210,1024,60),C.fillStyle="#18181b",C.fillRect(0,206,1024,4),C.fillRect(0,270,1024,4),C.fillStyle="#15803d",C.fillRect(0,270,1024,242),C.fillStyle="#0f172a",C.beginPath(),C.roundRect(240,75,480,310,18),C.fill(),C.fillStyle="#2563eb",C.beginPath(),C.roundRect(460,230,240,110,12),C.fill(),C.strokeStyle="#09090b",C.lineWidth=14,C.beginPath(),C.roundRect(240,75,480,310,18),C.stroke();const L=new le(b),I=new B({color:1409085,metalness:.25,roughness:.35});new B({color:16436245,metalness:.15,roughness:.38});const z=new B({color:1841431,roughness:.85,metalness:.05}),y=new B({color:2450411,roughness:.55}),w=new B({color:1579035,roughness:.92}),T=new B({color:15857145,metalness:.45,roughness:.35}),V=new B({color:16317180,metalness:.92,roughness:.12}),it=new B({map:m,roughness:.4,metalness:.1,side:Ee,transparent:!0,alphaTest:.2}),D=new B({map:_,roughness:.4,metalness:.1,side:Ee,transparent:!0,alphaTest:.2}),G=new B({map:L,roughness:.42,metalness:.1,side:Ee}),H=new W(1.24,.24,2.38),F=new v(H,I);F.position.set(0,.34,0),F.castShadow=!0,F.receiveShadow=!0,this.bodyGroup.add(F);const tt=new W(.85,.22,.65),Z=new v(tt,I);Z.position.set(0,.33,-1.05),Z.castShadow=!0,this.bodyGroup.add(Z);const X=new mt,K=()=>{const Et=[],rt=[],bt=[],kt=(Ct,Qt)=>{let zt=.635;const pe=-1.18+Qt*2.27;pe<-.88?zt=.635-(-.88-pe)/.3*.05:pe>.85&&(zt=.635-(pe-.85)/.24*.035);const fe=Ct*zt,Le=Math.max(0,1-Math.pow(Math.abs(Ct),2.2)),rn=Math.sin(Math.PI*(.12+.76*Qt)),yn=1.54-.012*Math.pow(Qt-.5,2)*4+.13*Le*rn;return new N(fe,yn,pe)};for(let Ct=0;Ct<=32;Ct++){const Qt=Ct/32;for(let zt=0;zt<=24;zt++){const pe=zt/24*2-1,fe=kt(pe,Qt);Et.push(fe.x,fe.y,fe.z),rt.push(zt/24,Ct/32)}}const oe=25;for(let Ct=0;Ct<32;Ct++)for(let Qt=0;Qt<24;Qt++){const zt=Ct*oe+Qt,pe=(Ct+1)*oe+Qt,fe=(Ct+1)*oe+(Qt+1),Le=Ct*oe+(Qt+1);bt.push(zt,pe,Le),bt.push(pe,fe,Le)}const ne=.065;let Ht=Et.length/3;for(let Ct=0;Ct<=32;Ct++){const Qt=Ct/32,zt=kt(-1,Qt);Et.push(zt.x,zt.y,zt.z),rt.push(0,Qt),Et.push(zt.x,zt.y-ne,zt.z),rt.push(1,Qt)}for(let Ct=0;Ct<32;Ct++){const Qt=Ht+Ct*2,zt=Ht+(Ct+1)*2,pe=Ht+(Ct+1)*2+1,fe=Ht+Ct*2+1;bt.push(Qt,fe,zt),bt.push(zt,fe,pe)}Ht=Et.length/3;for(let Ct=0;Ct<=32;Ct++){const Qt=Ct/32,zt=kt(1,Qt);Et.push(zt.x,zt.y,zt.z),rt.push(0,Qt),Et.push(zt.x,zt.y-ne,zt.z),rt.push(1,Qt)}for(let Ct=0;Ct<32;Ct++){const Qt=Ht+Ct*2,zt=Ht+(Ct+1)*2,pe=Ht+(Ct+1)*2+1,fe=Ht+Ct*2+1;bt.push(Qt,zt,fe),bt.push(zt,fe,pe)}Ht=Et.length/3;for(let Ct=0;Ct<=24;Ct++){const Qt=Ct/24*2-1,zt=kt(Qt,0);Et.push(zt.x,zt.y,zt.z),rt.push(Ct/24,0),Et.push(zt.x,zt.y-ne,zt.z),rt.push(Ct/24,1)}for(let Ct=0;Ct<24;Ct++){const Qt=Ht+Ct*2,zt=Ht+(Ct+1)*2,pe=Ht+(Ct+1)*2+1,fe=Ht+Ct*2+1;bt.push(Qt,fe,zt),bt.push(zt,fe,pe)}Ht=Et.length/3;for(let Ct=0;Ct<=24;Ct++){const Qt=Ct/24*2-1,zt=kt(Qt,1);Et.push(zt.x,zt.y,zt.z),rt.push(Ct/24,0),Et.push(zt.x,zt.y-ne,zt.z),rt.push(Ct/24,1)}for(let Ct=0;Ct<24;Ct++){const Qt=Ht+Ct*2,zt=Ht+(Ct+1)*2,pe=Ht+(Ct+1)*2+1,fe=Ht+Ct*2+1;bt.push(Qt,zt,fe),bt.push(zt,fe,pe)}const ue=new Fe;return ue.setAttribute("position",new de(Et,3)),ue.setAttribute("uv",new de(rt,2)),ue.setIndex(bt),ue.computeVertexNormals(),ue},ht=new v(K(),z);ht.castShadow=!0,ht.receiveShadow=!0,X.add(ht);const J=[-.68,-.18,.32,.76],Q=new B({color:2565930,roughness:.65});J.forEach(Ot=>{const yt=(Ot- -1.18)/2.27,xt=[];for(let Et=0;Et<=16;Et++){const rt=Et/16*2-1,bt=Math.max(0,1-Math.pow(Math.abs(rt),2.2)),kt=Math.sin(Math.PI*(.12+.76*yt)),oe=1.54+.13*bt*kt+.005;xt.push(new N(rt*.63,oe,Ot))}const S=new Yn(xt),k=new Ln(S,16,.012,6,!1),j=new v(k,Q);X.add(j)}),[-.635,.635].forEach(Ot=>{const yt=new ut(.012,.012,2.22,8);yt.rotateX(Math.PI/2);const xt=new v(yt,Q);xt.position.set(Ot,1.53,-.04),X.add(xt)});const lt=new W(1.22,.035,.08),ot=new v(lt,Q);ot.position.set(0,1.54,-1.17),X.add(ot);const nt=new W(1.24,.035,.07),St=new v(nt,Q);St.position.set(0,1.54,1.08),X.add(St);const Rt=new Jt(1.24,2.22);Rt.rotateX(Math.PI/2);const st=new B({color:1579035,roughness:.95}),Tt=new v(Rt,st);Tt.position.set(0,1.48,-.04),X.add(Tt),this.bodyGroup.add(X),[-.635,.635].forEach((Ot,yt)=>{const xt=new v(new Jt(2.2,1.16),G);xt.position.set(Ot,.95,-.04),xt.rotation.y=yt===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(xt);const S=new W(.04,.32,1.15),k=new v(S,I);k.position.set(Ot*.98,.58,-.05),this.bodyGroup.add(k);const j=new v(new ut(.022,.022,1.02,8),new B({color:1579035,roughness:.5}));j.position.set(Ot*.96,1.16,-1),j.rotation.x=.2,this.bodyGroup.add(j);const Et=new v(new ut(.022,.022,1.08,8),new B({color:1579035,roughness:.5}));Et.position.set(Ot*.96,1.1,-.15),this.bodyGroup.add(Et);const rt=new v(new ut(.022,.022,1.08,8),new B({color:1579035,roughness:.5}));rt.position.set(Ot*.96,1.1,1.02),this.bodyGroup.add(rt)});const U=new mt;U.position.set(0,0,1.075);const pt=new v(new Jt(1.26,1.18),it);pt.position.set(0,.95,.01),pt.rotation.y=0,U.add(pt),[-.54,.54].forEach(Ot=>{const yt=new mt;yt.position.set(Ot,.74,.035);const xt=new v(new W(.12,.24,.04),new B({color:1579035,roughness:.6}));yt.add(xt);const S=new v(new W(.1,.1,.025),new he({color:16096779}));S.position.set(0,.055,.018),yt.add(S);const k=new v(new W(.1,.1,.025),new he({color:14427686}));k.position.set(0,-.055,.018),yt.add(k),this.brakeLights.push(k),U.add(yt)});const at=new W(1.32,.12,.08),_t=new v(at,new B({color:1579035,roughness:.85}));_t.position.set(0,.32,.06),U.add(_t),[-.52,.52].forEach(Ot=>{const yt=new v(new W(.18,.22,.02),w);yt.position.set(Ot,.18,.04),yt.rotation.x=.08,U.add(yt)});const ct=new ut(.032,.032,.55,10);ct.rotateZ(Math.PI/2);const Gt=new v(ct,V);Gt.position.set(.22,.18,.02),U.add(Gt);const Mt=new Me(.075,.45,10);Mt.rotateX(-Math.PI/2);const A=new he({color:440020,transparent:!0,opacity:0}),E=new v(Mt,A);E.position.set(.48,.18,.28),U.add(E),this.exhaustFires.push(E),this.bodyGroup.add(U);const Y=new mt;Y.position.set(0,0,-1.15);const gt=new v(new Jt(1.22,1.18),D);gt.position.set(0,.95,0),gt.rotation.y=Math.PI,Y.add(gt),[-.32,.32].forEach(Ot=>{const yt=new mt;yt.position.set(Ot,.68,-.04);const xt=new v(new ut(.085,.085,.04,16),V);xt.rotateX(Math.PI/2),yt.add(xt);const S=new v(new Wt(.075,12,12,0,Math.PI*2,0,Math.PI*.5),new he({color:16777215}));S.rotateX(Math.PI),S.position.z=-.015,yt.add(S),this.headlights.push(S),Y.add(yt)}),this.bodyGroup.add(Y),[-1,1].forEach(Ot=>{const yt=new mt,xt=(.64+.14)*Ot;yt.position.set(xt,1.15,-.72);const S=new ut(.012,.012,.28,8);S.rotateZ(Ot>0?-Math.PI*.35:Math.PI*.35);const k=new v(S,new B({color:1579035}));yt.add(k);const j=new ut(.075,.075,.03,16);j.rotateX(Math.PI/2);const Et=new v(j,new B({color:1579035,roughness:.5}));Et.position.set(Ot*.12,.08,0),yt.add(Et);const rt=new v(new ji(.068,16),V);rt.position.set(Ot*.12,.08,.018),yt.add(rt),this.bodyGroup.add(yt)});const dt=new mt,ft=new v(new W(.48,.12,.44),new B({color:1981066,roughness:.7}));ft.position.set(0,.52,-.32),dt.add(ft);const Ft=new v(new W(.48,.42,.1),new B({color:1981066,roughness:.7}));Ft.position.set(0,.76,-.12),dt.add(Ft);const At=new v(new W(1.16,.16,.48),y);At.position.set(0,.54,.55),dt.add(At);const Ut=new v(new W(1.16,.48,.12),y);Ut.position.set(0,.84,.82),dt.add(Ut);const Vt=new mt;Vt.position.set(0,.78,-.85);const Lt=new ut(.016,.016,.62,10);Lt.rotateZ(Math.PI/2);const vt=new v(Lt,V);Vt.add(vt),[-.28,.28].forEach(Ot=>{const yt=new v(new ut(.024,.024,.12,8),w);yt.rotateZ(Math.PI/2),yt.position.x=Ot,Vt.add(yt)});const $t=new v(new ut(.045,.045,.04,12),new B({color:1579035}));$t.position.set(0,.04,-.04),Vt.add($t),dt.add(Vt),this.bodyGroup.add(dt);const Kt=(Ot=!1)=>{const yt=new mt,xt=new ut(.24,.24,.14,20);xt.rotateZ(Math.PI/2);const S=new v(xt,w);S.castShadow=!0,yt.add(S);const k=new ut(.14,.14,.145,16);k.rotateZ(Math.PI/2);const j=new v(k,T);yt.add(j);const Et=new v(new ut(.05,.05,.155,12),V);Et.rotateZ(Math.PI/2),yt.add(Et);for(let rt=0;rt<4;rt++){const bt=rt/4*Math.PI*2,kt=new v(new ut(.012,.012,.16,6),V);kt.rotateZ(Math.PI/2),kt.position.set(0,Math.sin(bt)*.08,Math.cos(bt)*.08),yt.add(kt)}return yt},Xt=new mt;Xt.position.set(0,.24,-1.18);const Bt=Kt(!0);Xt.add(Bt),this.wheels.push(Bt),this.frontWheel=Xt;const Pt=new v(new ut(.024,.028,.52,8),V);Pt.position.set(-.1,.22,0),Pt.rotation.x=-.18,Xt.add(Pt);const Zt=new ut(.28,.28,.18,16,1,!0,Math.PI*.2,Math.PI*.65);Zt.rotateZ(Math.PI/2);const te=new v(Zt,I);te.position.set(0,.05,0),Xt.add(te),this.bodyGroup.add(Xt),[-.56,.56].forEach(Ot=>{const yt=Kt(!1);yt.position.set(Ot,.24,.64),this.wheels.push(yt),this.bodyGroup.add(yt)})}update(t,e,n,i,o,r){const a=t*1e3/3600,c=2*Math.PI*.24,h=a/c*r*Math.PI*2;this.wheelRotation+=h,this.wheels.forEach(g=>{g.rotation.x=this.wheelRotation});const d=n-e,f=d*.045;this.currentRoll+=(f-this.currentRoll)*Math.min(1,r*9),this.bodyGroup.rotation.z=this.currentRoll,this.frontWheel&&(this.frontWheel.rotation.y=-d*.18);const l=-d*.08;this.currentYaw+=(l-this.currentYaw)*Math.min(1,r*8),this.bodyGroup.rotation.y=this.currentYaw;let u=0;i?u=.04:o&&(u=-.035),this.currentPitch+=(u-this.currentPitch)*Math.min(1,r*8),this.bodyGroup.rotation.x=this.currentPitch,this.brakeLights.forEach(g=>{g.material.color.setHex(i?16711680:14427686)}),this.exhaustFires.forEach(g=>{o?(g.material.opacity=.95,g.scale.set(1.2+Math.random()*.4,1.2+Math.random()*.5,1.2+Math.random()*.4),g.material.color.setHex(Math.random()>.4?440020:3718648)):g.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=r,this.headlights.forEach(g=>g.scale.set(1.4,1.4,1.4))):this.headlights.forEach(g=>g.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=.88,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.45,this.bodyGroup.rotation.y=.5,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class N0{constructor(){this.isMobile=ti(),this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[]}applyShadow(t){this.isMobile||(t.castShadow=!0)}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let F=0;F<128;F+=8)e.fillStyle="#6b7280",e.fillRect(F,0,4,128),e.fillStyle="#d1d5db",e.fillRect(F+4,0,4,128);const n=new le(t);n.wrapS=Re,n.wrapT=Re,n.repeat.set(4,4),this.tinRoofMat=new B({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new B({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const o=i.getContext("2d");o.fillStyle="#c8a165",o.fillRect(0,0,128,128),o.strokeStyle="#8c6239",o.lineWidth=3;for(let F=0;F<=128;F+=16)o.beginPath(),o.moveTo(0,F),o.lineTo(128,F),o.stroke(),o.beginPath(),o.moveTo(F,0),o.lineTo(F,128),o.stroke();const r=new le(i);r.wrapS=Re,r.wrapT=Re,r.repeat.set(2,2),this.bambooWallMat=new B({map:r,roughness:.85,color:13935475}),this.woodMat=new B({color:6045747,roughness:.85}),this.mudPlinthMat=new B({color:8150594,roughness:.95}),this.brickMat=new B({color:10239278,roughness:.9}),this.palmLeafMat=new B({color:3046706,roughness:.6,side:Ee}),this.bananaLeafMat=new B({color:4431943,roughness:.5,side:Ee}),this.treeCrownMat=new B({color:1793568,roughness:.85}),this.bambooTrunkMat=new B({color:6732650,roughness:.4}),this.palmTrunkMat=new B({color:7162945,roughness:.9}),this.hayMat=new B({color:13934615,roughness:.95}),this.paddyFieldMat=new B({color:3706428,roughness:.8}),this.waterMat=new B({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new B({color:10395294,roughness:.7}),this.cowWhiteMat=new B({color:16119280,roughness:.6}),this.cowBrownMat=new B({color:9262372,roughness:.65}),this.cowBlackPatchMat=new B({color:2171169,roughness:.7}),this.hornMat=new B({color:3621201,roughness:.4}),this.ropeMat=new he({color:12756553}),this.duckMat=new B({color:16777215,roughness:.5}),this.beakMat=new B({color:16750592,roughness:.4}),this.smokeMat=new he({color:16777215,transparent:!0,opacity:.35}),this.bridgeRedMat=new B({color:14427686,roughness:.55}),this.bridgeWhiteMat=new B({color:16317180,roughness:.5});const a=document.createElement("canvas");a.width=256,a.height=128;const c=a.getContext("2d");c.fillStyle="#ffffff",c.fillRect(0,0,256,128),c.fillStyle="#dc2626";const h=32;for(let F=-128;F<384;F+=h*2)c.beginPath(),c.moveTo(F,0),c.lineTo(F+h,0),c.lineTo(F+h-128,128),c.lineTo(F-128,128),c.closePath(),c.fill();const d=new le(a);d.wrapS=Re,d.wrapT=Re,d.repeat.set(24,1),this.bridgeCurbMat=new B({map:d,roughness:.6}),this.pipelineMat=new B({color:9741240,metalness:.8,roughness:.25}),this.riverWaterMat=new B({color:1400437,roughness:.12,metalness:.35,transparent:!0,opacity:.92});const f=document.createElement("canvas");f.width=64,f.height=128;const l=f.getContext("2d");l.fillStyle="#dc2626",l.fillRect(0,0,64,128),l.fillStyle="#ffffff",l.fillRect(0,24,64,30),l.fillRect(0,78,64,30);const u=new le(f);this.bollardMat=new B({map:u,roughness:.5});const g=document.createElement("canvas");g.width=128,g.height=128;const x=g.getContext("2d");x.fillStyle="#1e40af",x.fillRect(0,0,128,128);for(let F=0;F<128;F+=8)x.fillStyle="#1d4ed8",x.fillRect(F,0,4,128),x.fillStyle="#3b82f6",x.fillRect(F+4,0,4,128);const m=new le(g);m.wrapS=Re,m.wrapT=Re,m.repeat.set(6,2),this.stageBlueRoofMat=new B({map:m,metalness:.4,roughness:.45,color:1920728,side:Ee}),this.stageTrussMat=new B({color:3359061,metalness:.75,roughness:.35}),this.stageBaseYellowMat=new B({color:16436245,roughness:.65}),this.stageBorderBlueMat=new B({color:165063,roughness:.45}),this.stageFloorMat=new B({color:10265519,roughness:.7}),this.stageTerracottaMat=new B({color:12730636,roughness:.85}),this.stageGoldEmblemMat=new B({color:16498468,metalness:.65,roughness:.25}),this.hillGreenMat=new B({color:3046706,roughness:.92,flatShading:!0}),this.hillDarkGreenMat=new B({color:1332013,roughness:.95,flatShading:!0}),this.pavingPlazaMat=new B({color:14078929,roughness:.9});const p=document.createElement("canvas");p.width=512,p.height=512;const M=p.getContext("2d");M.fillStyle="#64748b",M.fillRect(0,0,512,512);const _=8,b=6,C=512/_,L=512/b;for(let F=0;F<_;F++)for(let tt=0;tt<b;tt++){const Z=tt*L+8,X=F*C+8,K=L-16,ht=C-16;M.fillStyle="#0f172a",M.fillRect(Z,X,K,ht);const J=M.createLinearGradient(Z,X,Z,X+ht);J.addColorStop(0,"#38bdf8"),J.addColorStop(.35,"#1e293b"),J.addColorStop(1,"#090d16"),M.fillStyle=J,M.fillRect(Z+2,X+2,K-4,ht-4),M.strokeStyle="rgba(255, 255, 255, 0.25)",M.lineWidth=1.5,M.beginPath(),M.moveTo(Z+K*.5,X),M.lineTo(Z+K*.5,X+ht),M.moveTo(Z,X+ht*.5),M.lineTo(Z+K,X+ht*.5),M.stroke()}const I=new le(p);I.wrapS=Re,I.wrapT=Re,I.repeat.set(2,4),this.uiuFacadeMat=new B({map:I,metalness:.35,roughness:.5});const z=document.createElement("canvas");z.width=512,z.height=512;const y=z.getContext("2d");y.fillStyle="#1c1917",y.fillRect(0,0,512,220),y.strokeStyle="#f59e0b",y.lineWidth=4,y.strokeRect(16,16,480,188),y.fillStyle="#f59e0b",y.font="900 120px sans-serif",y.textAlign="center",y.textBaseline="middle",y.shadowColor="rgba(245, 158, 11, 0.85)",y.shadowBlur=22,y.fillText("UIU",256,100),y.shadowBlur=0,y.fillStyle="#f8fafc",y.font="bold 20px sans-serif",y.fillText("UNITED INTERNATIONAL UNIVERSITY",256,172),y.drawImage(p,0,0,512,292,0,220,512,292);const w=new le(z);this.uiuLogoMat=new B({map:w,metalness:.25,roughness:.45,emissive:2232581});const T=document.createElement("canvas");T.width=512,T.height=128;const V=T.getContext("2d");V.fillStyle="#0f172a",V.fillRect(0,0,512,128),V.strokeStyle="#f59e0b",V.lineWidth=6,V.strokeRect(8,8,496,112),V.fillStyle="#f59e0b",V.font="900 48px sans-serif",V.textAlign="center",V.textBaseline="middle",V.fillText("UIU",256,42),V.fillStyle="#ffffff",V.font="bold 18px sans-serif",V.fillText("UNITED INTERNATIONAL UNIVERSITY",256,90);const it=new le(T);this.uiuGateSignMat=new B({map:it,roughness:.4});const D=document.createElement("canvas");D.width=512,D.height=512;const G=D.getContext("2d");G.fillStyle="#15803d",G.fillRect(0,0,512,512),G.fillStyle="#16a34a";for(let F=0;F<512;F+=48)G.fillRect(0,F,512,24);G.strokeStyle="rgba(255, 255, 255, 0.75)",G.lineWidth=5,G.strokeRect(28,24,456,464),G.beginPath(),G.moveTo(28,256),G.lineTo(484,256),G.stroke(),G.beginPath(),G.arc(256,256,56,0,Math.PI*2),G.stroke(),G.fillStyle="#ffffff",G.beginPath(),G.arc(256,256,6,0,Math.PI*2),G.fill(),G.strokeRect(156,24,200,80),G.strokeRect(156,408,200,80),G.strokeRect(200,24,112,36),G.strokeRect(200,452,112,36);const H=new le(D);this.uiuLawnMat=new B({map:H,roughness:.85}),this.uiuConcreteMat=new B({color:9741240,roughness:.7}),this.uiuGlassMat=new B({color:988970,metalness:.8,roughness:.15}),this.goalPostMat=new B({color:16317180,roughness:.4}),this.skinMat=new B({color:16106390,roughness:.65}),this.hairMat=new B({color:1579035,roughness:.45}),this.panjabiMat=new B({color:16317180,roughness:.7}),this.lungiPlaidMat=new B({color:165063,roughness:.8}),this.shirtTealMat=new B({color:889992,roughness:.7}),this.shirtRedMat=new B({color:14427686,roughness:.7})}createCow(t="brown"){const e=new mt;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new W(.9,.95,1.7),o=new v(i,n);o.position.set(0,1.05,0),this.applyShadow(o),e.add(o);const r=new Me(.3,.45,8),a=new v(r,n);a.position.set(0,1.62,-.45),a.rotation.x=-.2,this.applyShadow(a),e.add(a);const c=new W(.12,.45,.5),h=new v(c,n);h.position.set(0,.85,-.85),e.add(h);const d=new mt;d.position.set(0,1.25,-.85);const f=new W(.45,.55,.6),l=new v(f,n);l.position.set(0,.15,-.2),l.rotation.x=.35,d.add(l);const u=new W(.48,.52,.7),g=new v(u,n);g.position.set(0,.28,-.55),d.add(g);const x=new B({color:2236962,roughness:.8}),m=new W(.36,.3,.3),p=new v(m,x);p.position.set(0,.18,-.92),d.add(p),[-.22,.22].forEach(G=>{const H=new Me(.06,.35,6),F=new v(H,this.hornMat);F.position.set(G,.56,-.48),F.rotation.z=G>0?-.4:.4,F.rotation.x=.3,d.add(F);const tt=new W(.22,.08,.1),Z=new v(tt,n);Z.position.set(G>0?.32:-.32,.38,-.45),Z.rotation.z=G>0?-.35:.35,d.add(Z)}),e.add(d),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(G=>{const H=new W(.2,.75,.2),F=new v(H,n);F.position.set(G.x,.38,G.z),this.applyShadow(F),e.add(F);const tt=new W(.22,.1,.22),Z=new v(tt,this.hornMat);Z.position.set(G.x,.05,G.z),e.add(Z)});const _=new mt;_.position.set(0,1.35,.85);const b=new ut(.03,.03,.85,6);b.translate(0,-.42,0);const C=new v(b,n);_.add(C);const L=new Me(.08,.25,6);L.translate(0,-.9,0);const I=new v(L,this.hornMat);_.add(I),e.add(_);const z=new ut(.08,.1,1.2,8),y=new v(z,this.woodMat);y.position.set(.9,.6,-1.2),e.add(y);const w=[new N(0,1.2,-.8),new N(.45,.75,-1),new N(.9,.85,-1.2)],T=new Yn(w),V=new Ln(T,8,.02,4,!1),it=new v(V,this.ropeMat);e.add(it);const D={type:"cow",head:d,tail:_,seed:Math.random()*10};return this.animatedAnimals.push(D),e}createVillageHouse(t=!1){const e=new mt;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new W(6.6,.45,5.2),o=new v(i,this.mudPlinthMat);o.position.set(0,.22,0),o.receiveShadow=!0,e.add(o);const r=new W(5.8,2.6,3.8),a=new v(r,this.bambooWallMat);a.position.set(0,1.75,-.4),this.applyShadow(a),a.receiveShadow=!0,e.add(a);const c=new W(.85,1.8,.08),h=new v(c,this.woodMat);h.position.set(.6,1.35,1.52),e.add(h),[-1.6,-.6].forEach(g=>{const x=new W(.7,.8,.08),m=new v(x,this.woodMat);m.position.set(g,1.8,1.52),e.add(m)});const d=new W(6.6,.1,2.8),f=new v(d,n);f.position.set(0,3.65,-.9),f.rotation.x=-.52,this.applyShadow(f),e.add(f);const l=new W(6.6,.1,3.4),u=new v(l,n);return u.position.set(0,3.5,.8),u.rotation.x=.46,this.applyShadow(u),e.add(u),[-2.5,-.8,.8,2.5].forEach(g=>{const x=new ut(.08,.08,2.3,8),m=new v(x,this.woodMat);m.position.set(g,1.6,2.1),this.applyShadow(m),e.add(m)}),e}createTeaStall(){const t=new mt;t.name="cha_er_tong";const e=new W(3.2,1,1.8),n=new v(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new W(3.8,.08,2.8),o=new v(i,this.tinRoofMat);o.position.set(0,2.3,.2),o.rotation.x=.2,this.applyShadow(o),t.add(o),[-1.6,1.6].forEach(x=>{const m=new ut(.07,.07,2.2,6),p=new v(m,this.woodMat);p.position.set(x,1.1,1.2),t.add(p)});const r=new W(3,.08,.45),a=new v(r,this.woodMat);a.position.set(0,.45,1.8),t.add(a),[-1.2,1.2].forEach(x=>{const m=new W(.08,.45,.4),p=new v(m,this.woodMat);p.position.set(x,.22,1.8),t.add(p)});const c=new B({color:13421772,metalness:.9,roughness:.2}),h=new ut(.18,.22,.35,10),d=new v(h,c);d.position.set(-.6,1.18,.2),t.add(d);const f=new Jo({color:16777215,transmission:.7,roughness:.1}),l=new ut(.12,.12,.28,8),u=new v(l,f);u.position.set(.6,1.15,.1),t.add(u);const g=new mt;g.position.set(-.6,1.45,.2),t.add(g);for(let x=0;x<4;x++){const m=new Wt(.08,6,6),p=new v(m,this.smokeMat);p.position.y=x*.25,g.add(p)}return this.smokeEmitters.push(g),t}createHaystack(){const t=new mt;t.name="khorer_gada";const e=new ut(1.6,1.9,1.4,12),n=new v(e,this.hayMat);n.position.y=.7,this.applyShadow(n),t.add(n);const i=new ut(1,1.6,1.2,12),o=new v(i,this.hayMat);o.position.y=2,this.applyShadow(o),t.add(o);const r=new Me(1,1.5,12),a=new v(r,this.hayMat);a.position.y=3.35,this.applyShadow(a),t.add(a);const c=new ut(.04,.05,4.8,6),h=new v(c,this.bambooTrunkMat);return h.position.y=2.4,t.add(h),t}createJatriChawni(t=1){const e=new mt;e.name="jatri_chawni";const n=new W(5,.35,2.3),i=new v(n,this.concreteMat);i.position.set(0,.175,0),i.receiveShadow=!0,e.add(i);const o=new W(5.2,.14,.22),r=new v(o,this.brickMat);r.position.set(0,.07,-1.1),e.add(r);const a=new W(4.8,2.5,.18),c=new v(a,this.brickMat);c.position.set(0,1.45,1.02),this.applyShadow(c),e.add(c);const h=new Jt(4.6,2.3),d=new v(h,this.culvertRailingMaterial);d.position.set(0,1.45,.92),e.add(d),[[-2.1,-.92],[2.1,-.92],[-2.1,.92],[2.1,.92]].forEach(([R,q])=>{const et=new ut(.08,.09,2.6,12),P=new v(et,this.culvertRailingMaterial);P.position.set(R,1.45,q),this.applyShadow(P),e.add(P);const O=new ut(.12,.12,.35,12),$=new v(O,new B({color:1409085}));$.position.set(R,.45,q),e.add($)});const l=new ut(2.4,2.4,5.2,24,1,!0,Math.PI*.2,Math.PI*.6);l.rotateZ(Math.PI/2);const u=new v(l,this.tinRoofMat);if(u.position.set(0,2.75,.05),this.applyShadow(u),e.add(u),[-1.8,0,1.8].forEach(R=>{const q=new W(.06,.06,2.1),et=new v(q,new B({color:3359061}));et.position.set(R,2.55,0),e.add(et)}),!this.isMobile){const R=new bs(16772565,3,14);R.position.set(0,2.45,.25),e.add(R)}const g=new ut(.14,.18,.28,8,1,!0),x=new v(g,new B({color:1976635,wireframe:!0}));x.position.set(0,2.48,.25),e.add(x);const m=new v(new Wt(.1,12,12),new he({color:16772565}));m.position.set(0,2.48,.25),e.add(m);const p=document.createElement("canvas");p.width=1024,p.height=256;const M=p.getContext("2d");M.fillStyle="#15803d",M.fillRect(0,0,1024,256),M.strokeStyle="#f59e0b",M.lineWidth=14,M.strokeRect(10,10,1004,236),M.strokeStyle="#fde047",M.lineWidth=4,M.strokeRect(24,24,976,208);const _=(R,q)=>{M.fillStyle="#fde047",M.beginPath(),M.roundRect(R,q,76,44,8),M.fill(),M.fillStyle="#0284c7",M.fillRect(R+8,q+6,20,18),M.fillRect(R+34,q+6,20,18),M.fillRect(R+58,q+6,12,18),M.fillStyle="#18181b",M.beginPath(),M.arc(R+20,q+44,9,0,Math.PI*2),M.arc(R+56,q+44,9,0,Math.PI*2),M.fill()};_(42,105),_(906,105),M.fillStyle="#ffffff",M.font="900 86px sans-serif",M.textAlign="center",M.textBaseline="middle",M.shadowColor="rgba(0,0,0,0.9)",M.shadowBlur=12,M.fillText("BUS STOP",512,85),M.fillStyle="#fde047",M.font="bold 54px sans-serif",M.shadowColor="rgba(0,0,0,0.8)",M.shadowBlur=8,M.fillText("বাস স্টপ  |  যাত্রী ছাউনি",512,185),M.shadowBlur=0;const b=new le(p),C=new mt;C.position.set(0,2.65,-1.02);const L=new W(4.24,.84,.07),I=new B({color:1332013,roughness:.5}),z=new v(L,I);C.add(z);const y=new B({map:b,roughness:.35,emissive:1409085,emissiveIntensity:.15}),w=new Jt(4.18,.78);w.rotateY(Math.PI);const T=new v(w,y);T.position.set(0,0,-.038),C.add(T);const V=new Jt(4.18,.78),it=new v(V,y);it.position.set(0,0,.038),C.add(it),e.add(C);const D=new mt,G=t>0?-2.25:2.25;D.position.set(G,0,-1.15);const H=new v(new ut(.18,.22,.3,12),this.concreteMat);H.position.set(0,.15,0),D.add(H);const F=new B({color:3359061,metalness:.8,roughness:.2}),tt=new v(new ut(.045,.045,3.1,12),F);tt.position.set(0,1.55,0),D.add(tt);const Z=document.createElement("canvas");Z.width=512,Z.height=512;const X=Z.getContext("2d");X.fillStyle="#0284c7",X.beginPath(),X.roundRect(16,16,480,480,48),X.fill(),X.strokeStyle="#facc15",X.lineWidth=20,X.stroke(),X.strokeStyle="#ffffff",X.lineWidth=4,X.beginPath(),X.roundRect(36,36,440,440,36),X.stroke(),X.fillStyle="#ffffff",X.beginPath(),X.roundRect(135,75,242,130,24),X.fill(),X.fillStyle="#0284c7",X.fillRect(155,95,60,50),X.fillRect(230,95,60,50),X.fillRect(305,95,52,50),X.fillStyle="#18181b",X.beginPath(),X.arc(190,205,22,0,Math.PI*2),X.arc(320,205,22,0,Math.PI*2),X.fill(),X.fillStyle="#ffffff",X.font="900 72px sans-serif",X.textAlign="center",X.textBaseline="middle",X.shadowColor="rgba(0,0,0,0.85)",X.shadowBlur=8,X.fillText("BUS STOP",256,310),X.fillStyle="#fde047",X.font="bold 56px sans-serif",X.fillText("বাস স্টপ",256,405),X.shadowBlur=0;const K=new le(Z),ht=new B({map:K,roughness:.35,emissive:165063,emissiveIntensity:.12}),J=new mt;J.position.set(0,2.7,0);const Q=new v(new W(.96,.96,.06),new B({color:223649,roughness:.4}));J.add(Q);const lt=new Jt(.92,.92);lt.rotateY(Math.PI);const ot=new v(lt,ht);ot.position.set(0,0,-.032),J.add(ot);const nt=new Jt(.92,.92),St=new v(nt,ht);St.position.set(0,0,.032),J.add(St),J.rotation.y=t>0?.35:-.35,D.add(J),e.add(D);const Rt=document.createElement("canvas");Rt.width=512,Rt.height=320;const st=Rt.getContext("2d");st.fillStyle="#f8fafc",st.fillRect(0,0,512,320),st.strokeStyle="#15803d",st.lineWidth=14,st.strokeRect(8,8,496,304),st.strokeStyle="#dc2626",st.lineWidth=4,st.strokeRect(22,22,468,276),st.fillStyle="#15803d",st.font="bold 30px sans-serif",st.textAlign="center",st.textBaseline="middle",st.fillText("বাংলাদেশ সড়ক পরিবহন (BRTC)",256,55),st.fillStyle="#dc2626",st.font="900 68px sans-serif",st.shadowColor="rgba(0,0,0,0.3)",st.shadowBlur=4,st.fillText("BUS STOP",256,140),st.fillStyle="#1e293b",st.font="bold 50px sans-serif",st.shadowBlur=0,st.fillText("বাস স্টপ",256,220),st.fillStyle="#64748b",st.font="bold 24px sans-serif",st.fillText("HIGHWAY PASSENGER SHELTER",256,275);const Tt=new le(Rt),U=new B({map:Tt,roughness:.35,emissive:16777215,emissiveIntensity:.08}),pt=new v(new Jt(1.2,.75),U),at=t>0?-2.12:2.12;pt.position.set(at,1.85,0),pt.rotation.y=t>0?-Math.PI/2:Math.PI/2,e.add(pt);const _t=new mt;_t.position.set(0,0,0);const ct=new W(4.4,.12,.7),Gt=new v(ct,this.woodMat);Gt.position.set(0,.65,.5),this.applyShadow(Gt),_t.add(Gt);const Mt=new W(4.4,.42,.1),A=new v(Mt,this.woodMat);A.position.set(0,1.12,.82),this.applyShadow(A),_t.add(A),[-1.9,0,1.9].forEach(R=>{const q=new W(.12,.35,.58),et=new v(q,this.concreteMat);et.position.set(R,.45,.5),_t.add(et);const P=new W(.08,.55,.08),O=new v(P,new B({color:3359061}));O.position.set(R,.95,.82),_t.add(O)}),e.add(_t);const E=new mt;E.scale.set(1.35,1.35,1.35),E.position.set(0,.72,.48);const Y=new B({color:16106390,roughness:.6}),gt=new B({color:959977,roughness:.7}),dt=new B({color:1976635,roughness:.8}),ft=new B({color:1579035,roughness:.5}),Ft=new B({color:14362487,roughness:.6}),At=new B({color:16436245,roughness:.7}),Ut=new B({color:16777215,roughness:.8}),Vt=new B({color:986638,roughness:.4}),Lt=new mt;Lt.position.set(-.26,0,0);const vt=new v(new W(.36,.46,.24),gt);vt.position.set(0,.25,0),vt.rotation.y=.35,vt.rotation.z=-.12,Lt.add(vt);const $t=new v(new Wt(.12,14,14),Y);$t.position.set(.04,.58,.02),$t.rotation.y=.45,$t.rotation.z=-.12,Lt.add($t);const Kt=new v(new Wt(.13,14,14),ft);Kt.scale.set(1.02,1.05,1.02),Kt.position.set(.04,.61,.01),Lt.add(Kt);const Xt=new v(new W(.34,.16,.44),dt);Xt.position.set(0,-.02,-.15),Lt.add(Xt),[-.1,.1].forEach(R=>{const q=new v(new ut(.05,.045,.38,8),dt);q.position.set(R,-.22,-.32),Lt.add(q)});const Bt=new v(new ut(.045,.04,.34,8),gt);Bt.position.set(.18,.14,-.05),Bt.rotation.z=-Math.PI/4,Bt.rotation.x=-.18,Lt.add(Bt),E.add(Lt);const Pt=new mt;Pt.position.set(.26,0,0);const Zt=new v(new W(.32,.42,.22),Ft);Zt.position.set(0,.23,0),Zt.rotation.y=-.32,Zt.rotation.z=.14,Pt.add(Zt);const te=new v(new W(.34,.36,.24),At);te.position.set(0,.24,.02),Pt.add(te);const Ot=new v(new Wt(.115,14,14),Y);Ot.position.set(-.06,.54,.02),Ot.rotation.y=-.38,Ot.rotation.z=.22,Pt.add(Ot);const yt=new v(new Wt(.125,14,14),Vt);yt.scale.set(1.04,1.06,1.08),yt.position.set(-.06,.57,0),Pt.add(yt);const xt=new v(new ut(.04,.02,.36,8),Vt);xt.position.set(-.04,.42,.16),xt.rotation.x=-.35,Pt.add(xt);const S=new v(new W(.3,.15,.42),Ut);S.position.set(0,-.02,-.15),Pt.add(S),[-.08,.08].forEach(R=>{const q=new v(new ut(.042,.038,.38,8),Ut);q.position.set(R,-.22,-.32),Pt.add(q)});const k=new v(new ut(.04,.035,.32,8),Ft);k.position.set(-.16,.14,-.05),k.rotation.z=Math.PI/4,k.rotation.x=-.18,Pt.add(k);const j=new mt;j.position.set(.22,.22,-.2),j.rotation.x=-.25,j.rotation.z=-.15;const Et=new ut(.016,.018,.38,8),rt=new B({color:1409085,roughness:.8}),bt=new v(Et,rt);j.add(bt);const kt=new Jt(.12,.06),oe=new B({color:1483594,roughness:.6,side:Ee});[-1,1].forEach(R=>{const q=new v(kt,oe);q.position.set(R*.06,-.04,0),q.rotation.z=R*.55,j.add(q)});const ne=new Me(.07,.09,5);ne.rotateX(Math.PI);const Ht=new v(ne,oe);Ht.position.set(0,.18,0),j.add(Ht);const ue=new B({color:14427686,roughness:.35,metalness:.1}),Ct=new Wt(.09,14,14);Ct.scale(1.15,1.35,1.15);const Qt=new v(Ct,ue);Qt.position.set(0,.26,0),j.add(Qt);const zt=new ln(.08,.035,8,16);zt.rotateX(Math.PI/2);const pe=new v(zt,ue);pe.position.set(0,.23,0),j.add(pe),Pt.add(j),E.add(Pt);const fe=new v(new Wt(.065,12,12),Y);fe.scale.set(1.6,.95,1.2),fe.position.set(0,.1,-.06),E.add(fe);const Le=new mt;Le.position.set(0,1.38,.05);const rn=new he({color:16723285}),an=new v(new Wt(.075,10,10),rn);an.position.set(-.05,.04,0),Le.add(an);const yn=new v(new Wt(.075,10,10),rn);yn.position.set(.05,.04,0),Le.add(yn);const un=new Me(.11,.14,12);un.rotateZ(Math.PI);const Fn=new v(un,rn);return Fn.position.set(0,-.04,0),Le.add(Fn),E.add(Le),e.add(E),this.animatedAnimals.push({type:"couple",mesh:E,heart:Le,seed:Math.random()*10}),e}createCoconutTree(){const t=new mt;t.name="coconut_tree";const e=new Yn([new N(0,0,0),new N(.4,3.5,.2),new N(.9,7.5,.5),new N(1.1,10.5,.7)]),n=new Ln(e,12,.24,8,!1),i=new v(n,this.palmTrunkMat);this.applyShadow(i),t.add(i);const o=new N(1.1,10.5,.7),r=10;for(let a=0;a<r;a++){const c=a*Math.PI*2/r,h=new Jt(.8,3.4);h.translate(0,1.7,0);const d=new v(h,this.palmLeafMat);d.position.copy(o),d.rotation.y=c,d.rotation.x=.85,this.applyShadow(d),t.add(d)}for(let a=0;a<5;a++){const c=new Wt(.2,8,8),h=new v(c,this.palmLeafMat);h.position.set(o.x+(Math.random()-.5)*.4,o.y-.25,o.z+(Math.random()-.5)*.4),t.add(h)}return t}createBananaTree(){const t=new mt;t.name="banana_tree";const e=new ut(.18,.28,2.8,8),n=new v(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let o=0;o<i;o++){const r=o*Math.PI*2/i,a=new Jt(.75,2.4);a.translate(0,1.2,0);const c=new v(a,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=r,c.rotation.x=.95,this.applyShadow(c),t.add(c)}return t}createBambooGrove(){const t=new mt;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,o=new ut(.06,.08,i,6),r=new v(o,this.bambooTrunkMat);r.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),r.rotation.z=(Math.random()-.5)*.15,r.rotation.x=(Math.random()-.5)*.15,t.add(r);const a=new Wt(.8+Math.random()*.5,6,6),c=new v(a,this.palmLeafMat);c.position.set(r.position.x,i-.3,r.position.z),t.add(c)}return t}createElectricPole(){const t=new mt;t.name="electric_pole";const e=new ut(.14,.18,8.5,8),n=new v(e,this.concreteMat);n.position.y=4.25,this.applyShadow(n),t.add(n);const i=new W(2.2,.12,.12),o=new v(i,this.concreteMat);return o.position.y=7.8,t.add(o),[-.9,0,.9].forEach(r=>{const a=new ut(.04,.05,.2,6),c=new v(a,this.tinRoofMat);c.position.set(r,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new mt;n.name="village_pond";const i=new Jt(t,e);i.rotateX(-Math.PI/2);const o=new v(i,this.waterMat);o.position.y=.05,n.add(o),this.mudPlinthMat;const r=3;for(let a=0;a<r;a++){const c=new mt;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const h=new Wt(.24,8,8);h.scale(1,.7,1.4);const d=new v(h,this.duckMat);c.add(d);const f=new Wt(.14,8,8),l=new v(f,this.duckMat);l.position.set(0,.22,-.22),c.add(l);const u=new Me(.06,.16,6);u.rotateX(-Math.PI/2);const g=new v(u,this.beakMat);g.position.set(0,.2,-.34),c.add(g),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new mt;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const o=new ut(.04,.04,t,6);o.rotateX(Math.PI/2);const r=new v(o,this.bambooTrunkMat);r.position.y=i,e.add(r)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const o=-t*.5+i*1.4,r=new ut(.05,.06,1.25,6),a=new v(r,this.woodMat);a.position.set(0,.62,o),this.applyShadow(a),e.add(a)}return e}createHighwayCafe(t=1){const e=new mt;e.name="highway_cafe";const n=new W(6.6,.28,4.4),i=new B({color:9268835,roughness:.85}),o=new v(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const r=new W(6.8,.14,.25),a=new v(r,this.concreteMat);a.position.set(0,.07,-2.15),e.add(a);const c=new W(5.6,3.2,3),h=new B({color:6111287,roughness:.8}),d=new v(c,h);d.position.set(0,1.74,.6),this.applyShadow(d),e.add(d);const f=new W(5.9,.22,3.3),l=new B({color:4073251,roughness:.6}),u=new v(f,l);u.position.set(0,3.42,.6),e.add(u);const g=new B({color:1976635,metalness:.8,roughness:.15,transparent:!0,opacity:.65}),x=new v(new W(1.9,1.8,.1),g);x.position.set(-1.6,1.7,-.92),e.add(x);const m=new v(new W(1.9,1.8,.1),g);m.position.set(1.6,1.7,-.92),e.add(m);const p=new v(new W(1.2,2.3,.1),g);p.position.set(0,1.45,-.92),e.add(p);const M=new B({color:16096779,metalness:.9,roughness:.2}),_=new v(new ut(.025,.025,.7,8),M);if(_.position.set(.42,1.35,-.98),e.add(_),!this.isMobile){const ot=new bs(16772565,3.2,9);ot.position.set(0,2.2,.2),e.add(ot)}const b=new W(3.6,1,.8),C=new v(b,new B({color:2561548}));C.position.set(0,.8,.4),e.add(C);const L=document.createElement("canvas");L.width=256,L.height=256;const I=L.getContext("2d"),z=32;for(let ot=0;ot<256;ot+=z*2)I.fillStyle="#831843",I.fillRect(ot,0,z,256),I.fillStyle="#fef3c7",I.fillRect(ot+z,0,z,256);const y=new le(L);y.wrapS=Re,y.wrapT=Re,y.repeat.set(4,1);const w=new B({map:y,roughness:.7,side:Ee}),T=new mt;T.position.set(0,2.65,-.9);const V=new Jt(4.8,1.5);V.rotateX(Math.PI*.4);const it=new v(V,w);it.position.set(0,-.22,-.65),T.add(it);const D=new Jt(4.8,.26),G=new v(D,w);G.position.set(0,-.55,-1.25),T.add(G),[-2.2,2.2].forEach(ot=>{const nt=new ut(.02,.02,1.4,6);nt.rotateX(-Math.PI*.25);const St=new v(nt,new B({color:1976635}));St.position.set(ot,-.35,-.6),T.add(St)}),e.add(T);const H=document.createElement("canvas");H.width=1024,H.height=256;const F=H.getContext("2d");F.fillStyle="#1c120c",F.fillRect(0,0,1024,256),F.strokeStyle="#d97706",F.lineWidth=12,F.strokeRect(10,10,1004,236),F.strokeStyle="#fde047",F.lineWidth=4,F.strokeRect(22,22,980,212);const tt=(ot,nt)=>{F.fillStyle="#fde047",F.beginPath(),F.ellipse(ot,nt+32,42,12,0,0,Math.PI*2),F.fill(),F.fillStyle="#ffffff",F.beginPath(),F.moveTo(ot-30,nt-18),F.lineTo(ot+30,nt-18),F.quadraticCurveTo(ot+28,nt+24,ot+18,nt+28),F.lineTo(ot-18,nt+28),F.quadraticCurveTo(ot-28,nt+24,ot-30,nt-18),F.closePath(),F.fill(),F.strokeStyle="#ffffff",F.lineWidth=8,F.beginPath(),F.arc(ot+32,nt+4,14,-Math.PI*.4,Math.PI*.6),F.stroke(),F.strokeStyle="#fef08a",F.lineWidth=4,F.beginPath(),F.moveTo(ot-12,nt-24),F.quadraticCurveTo(ot-18,nt-38,ot-10,nt-48),F.moveTo(ot+8,nt-24),F.quadraticCurveTo(ot+2,nt-38,ot+12,nt-50),F.stroke()};tt(70,128),tt(954,128),F.fillStyle="#fef08a",F.font="900 82px sans-serif",F.textAlign="center",F.textBaseline="middle",F.shadowColor="rgba(0,0,0,0.95)",F.shadowBlur=14,F.fillText("HIGHWAY CAFE",512,80),F.fillStyle="#ffffff",F.font="bold 54px sans-serif",F.shadowColor="rgba(0,0,0,0.85)",F.shadowBlur=8,F.fillText("ক্যাফে ও রেস্তোরাঁ",512,172),F.fillStyle="#f59e0b",F.font="bold 26px sans-serif",F.shadowBlur=0,F.fillText("FRESH COFFEE • TEA • BURGERS & SNACKS",512,226);const Z=new le(H),X=new B({map:Z,roughness:.35,emissive:4005904,emissiveIntensity:.18}),K=new mt;K.position.set(0,3.4,-.95);const ht=new v(new W(4.7,.92,.08),new B({color:2561548,roughness:.5}));K.add(ht);const J=new Jt(4.62,.84);J.rotateY(Math.PI);const Q=new v(J,X);return Q.position.set(0,0,-.045),K.add(Q),[-1.6,1.6].forEach(ot=>{const nt=new v(new ut(.02,.02,.35,6),M);nt.position.set(ot,.52,-.15),nt.rotation.x=Math.PI*.3,K.add(nt);const St=new v(new Me(.08,.14,8),M);St.position.set(ot,.42,-.28),St.rotation.x=Math.PI*.8,K.add(St);const Rt=new v(new Wt(.04,6,6),new he({color:16772565}));Rt.position.set(ot,.38,-.28),K.add(Rt)}),e.add(K),[-1.7,1.7].forEach(ot=>{const nt=new mt;nt.position.set(ot,.28,-1.35);const St=new v(new ut(.035,.22,.75,12),new B({color:1976635,metalness:.8}));St.position.y=.375,nt.add(St);const Rt=new v(new ut(.55,.55,.05,16),this.woodMat);Rt.position.y=.75,nt.add(Rt),[-.18,.18].forEach((st,Tt)=>{const U=new v(new ut(.05,.045,.08,8),new B({color:16777215,roughness:.2}));U.position.set(st,.81,Tt===0?.1:-.1),nt.add(U);const pt=new v(new ji(.04,8),new he({color:2561548}));pt.rotation.x=-Math.PI/2,pt.position.set(st,.85,Tt===0?.1:-.1),nt.add(pt)}),[-.65,.65].forEach(st=>{const Tt=new mt;Tt.position.set(st,0,0),[-.14,.14].forEach(at=>{[-.14,.14].forEach(_t=>{const ct=new v(new ut(.02,.02,.45,6),this.woodMat);ct.position.set(at,.225,_t),Tt.add(ct)})});const U=new v(new W(.36,.04,.36),this.woodMat);U.position.y=.45,Tt.add(U);const pt=new v(new W(.36,.35,.04),this.woodMat);pt.position.set(0,.68,st>0?.16:-.16),Tt.add(pt),nt.add(Tt)}),e.add(nt)}),[-2.9,2.9].forEach(ot=>{const nt=new v(new W(.45,.42,1.6),this.woodMat);nt.position.set(ot,.49,-1.2),e.add(nt);for(let St=-.55;St<=.55;St+=.5){const Rt=new v(new Wt(.24,8,8),this.palmLeafMat);Rt.position.set(ot,.8,-1.2+St),e.add(Rt);const st=new v(new Wt(.06,6,6),new he({color:St<0?14427686:16096779}));st.position.set(ot,.95,-1.2+St),e.add(st)}}),e}createHighwayBar(t=-1){const e=new mt;e.name="highway_bar";const n=new W(6.6,.28,4.4),i=new B({color:1976635,roughness:.8}),o=new v(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const r=new W(6.8,.14,.25),a=new v(r,new B({color:988970}));a.position.set(0,.07,-2.15),e.add(a);const c=new W(5.6,3.2,3),h=new B({color:988970,roughness:.7}),d=new v(c,h);d.position.set(0,1.74,.6),this.applyShadow(d),e.add(d),[-2.5,2.5].forEach(Q=>{const lt=new v(new W(.55,3.2,.2),new B({color:4073251,roughness:.6}));lt.position.set(Q,1.74,-.9),e.add(lt)});const f=new W(5.9,.22,3.3),l=new v(f,new B({color:132631,roughness:.4}));l.position.set(0,3.42,.6),e.add(l);const u=new W(3.6,.12,.7),g=new B({color:1120295,roughness:.15,metalness:.8}),x=new v(u,g);x.position.set(0,1.05,-.6),e.add(x);const m=new W(3.4,.98,.6),p=new B({color:1976635,roughness:.5}),M=new v(m,p);M.position.set(0,.5,-.6),e.add(M);const _=new W(3.4,.04,.04),b=new he({color:440020}),C=new v(_,b);C.position.set(0,.98,-.93),e.add(C);const L=new W(3.4,1.6,.2),I=new v(L,new B({color:1973807,roughness:.3}));I.position.set(0,1.8,.6),e.add(I);const z=[1483594,14251782,440020,10033947,16436245];if([1.25,1.7,2.15].forEach((Q,lt)=>{const ot=new v(new W(3.2,.04,.3),new B({color:3718648,roughness:.1,transparent:!0,opacity:.8}));ot.position.set(0,Q,.45),e.add(ot);for(let nt=-1.4;nt<=1.4;nt+=.28){const St=z[(Math.abs(Math.round(nt*10))+lt)%z.length],Rt=new mt;Rt.position.set(nt,Q+.02,.45);const st=new v(new ut(.045,.045,.22,8),new B({color:St,roughness:.2,metalness:.3,transparent:!0,opacity:.9}));st.position.y=.11,Rt.add(st);const Tt=new v(new ut(.016,.022,.1,8),new B({color:St,roughness:.2}));Tt.position.y=.25,Rt.add(Tt);const U=new v(new ut(.018,.018,.02,6),new he({color:16638023}));U.position.y=.31,Rt.add(U),e.add(Rt)}}),[-1,0,1].forEach(Q=>{const lt=new mt;lt.position.set(Q,.28,-1.25);const ot=new v(new ut(.03,.24,.72,12),new B({color:9741240,metalness:.9,roughness:.15}));ot.position.y=.36,lt.add(ot);const nt=new v(new ln(.16,.02,8,16),new B({color:9741240,metalness:.9,roughness:.15}));nt.rotation.x=Math.PI/2,nt.position.y=.24,lt.add(nt);const St=new v(new ut(.22,.22,.08,16),new B({color:10033947,roughness:.5}));St.position.y=.74,lt.add(St),e.add(lt)}),!this.isMobile){const Q=new bs(440020,3.2,9);Q.position.set(-1.2,2.3,.2),e.add(Q);const lt=new bs(14239471,2.8,8);lt.position.set(1.2,2.3,.2),e.add(lt)}const y=document.createElement("canvas");y.width=1024,y.height=256;const w=y.getContext("2d");w.fillStyle="#030712",w.fillRect(0,0,1024,256),w.strokeStyle="#ec4899",w.lineWidth=10,w.shadowColor="#ec4899",w.shadowBlur=18,w.strokeRect(12,12,1e3,232),w.strokeStyle="#06b6d4",w.lineWidth=4,w.shadowColor="#06b6d4",w.shadowBlur=12,w.strokeRect(26,26,972,204);const T=(Q,lt)=>{w.shadowColor="#facc15",w.shadowBlur=14,w.fillStyle="#facc15",w.beginPath(),w.roundRect(Q,lt+18,48,56,[0,0,8,8]),w.fill(),w.fillStyle="#ffffff",w.beginPath(),w.arc(Q+10,lt+14,14,0,Math.PI*2),w.arc(Q+24,lt+8,16,0,Math.PI*2),w.arc(Q+38,lt+14,14,0,Math.PI*2),w.fill(),w.strokeStyle="#facc15",w.lineWidth=6,w.beginPath(),w.arc(Q+52,lt+46,16,-Math.PI*.45,Math.PI*.45),w.stroke()},V=(Q,lt)=>{w.shadowColor="#06b6d4",w.shadowBlur=14,w.strokeStyle="#38bdf8",w.lineWidth=5,w.beginPath(),w.moveTo(Q-30,lt+10),w.lineTo(Q+30,lt+10),w.lineTo(Q,lt+50),w.closePath(),w.stroke(),w.fillStyle="#f43f5e",w.beginPath(),w.moveTo(Q-20,lt+22),w.lineTo(Q+20,lt+22),w.lineTo(Q,lt+50),w.closePath(),w.fill(),w.strokeStyle="#38bdf8",w.lineWidth=5,w.beginPath(),w.moveTo(Q,lt+50),w.lineTo(Q,lt+80),w.moveTo(Q-22,lt+80),w.lineTo(Q+22,lt+80),w.stroke(),w.fillStyle="#84cc16",w.beginPath(),w.arc(Q-6,lt+16,7,0,Math.PI*2),w.fill()};T(52,85),V(940,80),w.fillStyle="#38bdf8",w.font="900 84px sans-serif",w.textAlign="center",w.textBaseline="middle",w.shadowColor="#06b6d4",w.shadowBlur=24,w.fillText("HIGHWAY BAR",512,78),w.fillStyle="#fde047",w.font="bold 62px sans-serif",w.shadowColor="#f59e0b",w.shadowBlur=20,w.fillText("মদের বার",512,168),w.fillStyle="#a3e635",w.font="bold 25px sans-serif",w.shadowColor="#84cc16",w.shadowBlur=8,w.fillText("IMPORTED LIQUOR • CHILLED BEER • WINE LOUNGE",512,224);const it=new le(y),D=new B({map:it,roughness:.25,emissive:440020,emissiveIntensity:.35}),G=new mt;G.position.set(0,3.4,-.95);const H=new v(new W(4.7,.95,.08),new B({color:132631,roughness:.4}));G.add(H);const F=new Jt(4.62,.88);F.rotateY(Math.PI);const tt=new v(F,D);tt.position.set(0,0,-.045),G.add(tt);const Z=new Jt(.8,1.2),X=document.createElement("canvas");X.width=256,X.height=384;const K=X.getContext("2d");K.fillStyle="#030712",K.fillRect(0,0,256,384),K.strokeStyle="#ec4899",K.lineWidth=6,K.strokeRect(6,6,244,372),K.fillStyle="#facc15",K.font="900 46px sans-serif",K.textAlign="center",K.shadowColor="#f59e0b",K.shadowBlur=12,K.fillText("BAR",128,70),K.fillStyle="#38bdf8",K.font="bold 36px sans-serif",K.shadowColor="#06b6d4",K.fillText("OPEN",128,130),K.fillStyle="#ec4899",K.font="900 44px sans-serif",K.shadowColor="#ec4899",K.fillText("24/7",128,200),K.fillStyle="#fde047",K.font="bold 32px sans-serif",K.shadowColor="#f59e0b",K.fillText("মদ ও বিয়ার",128,280),K.fillStyle="#a3e635",K.font="bold 22px sans-serif",K.fillText("CHILLED BEER",128,340);const ht=new le(X),J=new v(Z,new B({map:ht,emissive:15485081,emissiveIntensity:.35}));return J.position.set(-2.82,2,-.6),J.rotation.y=-Math.PI/2,e.add(J),e}createSmokingGuysGroup(t=1){const e=new mt;e.name="smoking_guys_group",e.scale.set(1.25,1.25,1.25);const n=new B({color:16106390,roughness:.65}),i=new B({color:1579035,roughness:.45}),o=new B({color:16317180,roughness:.7}),r=new B({color:1976635,roughness:.7}),a=new mt;a.position.set(-.42,0,0);const c=new B({color:14427686,roughness:.7}),h=new B({color:1976635,roughness:.8}),d=new v(new W(.38,.58,.24),c);d.position.set(0,1.15,0),d.rotation.y=.25,a.add(d);const f=new v(new W(.3,.24,.16),c);f.position.set(0,1.38,.12),a.add(f);const l=new mt;l.position.set(0,1.54,0),l.rotation.x=-.12,l.rotation.y=.25;const u=new v(new Wt(.125,12,12),n);l.add(u);const g=new v(new Wt(.132,12,12),i);g.scale.set(1.02,1.08,1.04),g.position.set(0,.03,-.01),l.add(g),a.add(l),[-.1,.1].forEach(st=>{const Tt=new v(new ut(.06,.05,.84,8),h);Tt.position.set(st,.44,0),a.add(Tt);const U=new v(new W(.12,.08,.22),o);U.position.set(st,.04,-.04),a.add(U)});const x=new v(new ut(.045,.04,.52,8),c);x.position.set(-.24,1.1,0),x.rotation.z=.15,a.add(x);const m=new v(new ut(.048,.044,.32,8),c);m.position.set(.23,1.25,-.06),m.rotation.z=-Math.PI*.35,m.rotation.x=-Math.PI*.25,a.add(m);const p=new v(new ut(.042,.038,.32,8),c);p.position.set(.14,1.44,-.12),p.rotation.z=Math.PI*.32,p.rotation.x=-Math.PI*.45,a.add(p);const M=new v(new Wt(.045,8,8),n);M.position.set(.04,1.5,-.16),a.add(M);const _=new mt;_.position.set(.02,1.51,-.18),_.rotation.x=-Math.PI*.15,_.rotation.y=.28;const b=new v(new ut(.012,.012,.028,8),new B({color:14251782,roughness:.9}));b.rotation.x=Math.PI/2,_.add(b);const C=new v(new ut(.012,.012,.065,8),new B({color:16317180,roughness:.5}));C.rotation.x=Math.PI/2,C.position.z=-.046,_.add(C);const L=new v(new Wt(.014,8,8),new he({color:16726784}));L.position.z=-.082,_.add(L);const I=new mt;I.position.set(.02,1.51,-.26),I.userData={type:"cigarette",maxH:.5,spd:.007,drift:.004,light:null,seed:Math.random()*5};for(let st=0;st<5;st++){const Tt=new v(new Wt(.022+st*.006,6,6),this.smokeMat);Tt.position.y=st*.1,I.add(Tt)}this.smokeEmitters.push(I),a.add(I),a.add(_),e.add(a),this.animatedAnimals.push({type:"smoker",head:l,seed:Math.random()*10});const z=new mt;z.position.set(.48,0,-.15);const y=new B({color:1981066,roughness:.7}),w=new B({color:4153874,roughness:.8}),T=new v(new W(.36,.56,.22),y);T.position.set(0,1.14,0),T.rotation.y=-.7,z.add(T);const V=new v(new Wt(.12,12,12),n);V.position.set(0,1.54,0),V.rotation.y=-.7,z.add(V);const it=new v(new Wt(.128,12,12),i);it.scale.set(1.02,1.06,1.04),it.position.set(0,1.57,-.01),z.add(it),[-.09,.09].forEach(st=>{const Tt=new v(new ut(.058,.05,.84,8),w);Tt.position.set(st,.44,0),z.add(Tt);const U=new v(new W(.12,.08,.22),r);U.position.set(st,.04,-.04),z.add(U)});const D=new v(new ut(.042,.038,.48,8),y);D.position.set(.22,1.16,.06),D.rotation.z=-Math.PI*.22,D.rotation.x=-Math.PI*.25,z.add(D);const G=new v(new ut(.042,.038,.48,8),y);G.position.set(-.21,1.08,.04),G.rotation.z=Math.PI*.16,G.rotation.x=-Math.PI*.12,z.add(G);const H=new v(new Wt(.042,8,8),n);H.position.set(-.28,.85,.1),z.add(H);const F=new mt;F.position.set(-.32,.85,.12),F.rotation.x=-Math.PI*.35,F.rotation.y=-.4;const tt=new v(new ut(.012,.012,.08,8),new B({color:16317180,roughness:.5}));tt.rotation.x=Math.PI/2,F.add(tt);const Z=new v(new Wt(.014,8,8),new he({color:16726784}));Z.position.z=-.045,F.add(Z);const X=new mt;X.position.set(-.32,.88,.1),X.userData={type:"cigarette",maxH:.45,spd:.006,drift:.003,light:null,seed:Math.random()*5};for(let st=0;st<4;st++){const Tt=new v(new Wt(.02+st*.005,6,6),this.smokeMat);Tt.position.y=st*.1,X.add(Tt)}this.smokeEmitters.push(X),z.add(X),z.add(F),e.add(z);const K=new mt;K.position.set(.02,0,.52);const ht=new B({color:3359061,roughness:.7}),J=new B({color:13935475,roughness:.8}),Q=new v(new W(.38,.58,.24),ht);Q.position.set(0,1.15,0),Q.rotation.y=Math.PI*.9,K.add(Q);const lt=new v(new Wt(.125,12,12),n);lt.position.set(0,1.54,0),lt.rotation.y=Math.PI*.9,K.add(lt);const ot=new v(new Wt(.132,12,12),i);ot.scale.set(1.02,1.08,1.04),ot.position.set(0,1.57,.01),K.add(ot),[-.1,.1].forEach(st=>{const Tt=new v(new ut(.058,.05,.84,8),J);Tt.position.set(st,.44,0),K.add(Tt);const U=new v(new W(.12,.08,.22),new B({color:7877903}));U.position.set(st,.04,.04),K.add(U)}),[-.22,.22].forEach(st=>{const Tt=new v(new ut(.045,.04,.48,8),ht);Tt.position.set(st,1.12,-.06),Tt.rotation.z=st>0?-.25:.25,Tt.rotation.x=Math.PI*.18,K.add(Tt)}),e.add(K);const nt=new v(new W(.35,.2,.5),this.brickMat);nt.position.set(-.1,.1,-.15),e.add(nt);const St=new v(new W(.1,.05,.16),new B({color:1981066,metalness:.5,roughness:.3}));St.position.set(-.1,.225,-.15),e.add(St);const Rt=new v(new W(.07,.035,.11),new B({color:16096779,roughness:.8}));return Rt.position.set(.02,.218,-.22),e.add(Rt),e}createDingiBoat(){const t=new mt;t.name="dingi_nouka";const e=new B({color:4073251,roughness:.8}),n=new W(1.1,.12,3.8),i=new v(n,e);i.position.y=.06,t.add(i),[-.55,.55].forEach(b=>{const C=new W(.08,.45,3.8),L=new v(C,e);L.position.set(b,.28,0),L.rotation.z=b>0?.25:-.25,t.add(L)}),[-1,1].forEach(b=>{const C=new Me(.55,1.2,5);C.rotateX(b>0?-Math.PI/3:Math.PI/3);const L=new v(C,e);L.position.set(0,.35,b*2.3),L.scale.set(.9,.5,1.1),t.add(L);const I=new v(new Wt(.08,8,8),new B({color:16096779,metalness:.8,roughness:.3}));I.position.set(0,.65,b*2.7),t.add(I)});const o=new ut(.68,.68,1.9,16,1,!0,0,Math.PI);o.rotateZ(Math.PI/2),o.rotateY(Math.PI/2);const r=new v(o,this.bambooWallMat);r.position.set(0,.48,-.2),t.add(r),[-.8,0,.8].forEach(b=>{const C=new ln(.69,.025,6,16,Math.PI);C.rotateZ(Math.PI/2),C.rotateY(Math.PI/2);const L=new v(C,this.woodMat);L.position.set(0,.48,-.2+b),t.add(L)});const a=new mt;a.position.set(0,.22,1.35);const c=new B({color:13935475,roughness:.7}),h=new B({color:165063,roughness:.8}),d=new B({color:1579035,roughness:.5}),f=new v(new W(.38,.28,.42),h);f.position.y=.14,a.add(f);const l=new v(new W(.32,.42,.2),c);l.position.set(0,.46,-.05),l.rotation.x=-.15,a.add(l);const u=new v(new Wt(.11,10,10),c);u.position.set(0,.74,-.1),a.add(u);const g=new v(new Wt(.115,10,10),d);g.position.set(0,.77,-.1),g.scale.set(1.02,1.05,1.02),a.add(g);const x=new Me(.24,.12,12),m=new v(x,this.bambooWallMat);m.position.set(0,.86,-.1),a.add(m);const p=new mt;p.position.set(.32,.4,0),p.rotation.z=-Math.PI*.32,p.rotation.x=Math.PI*.25;const M=new v(new ut(.025,.025,2.2,8),this.woodMat);M.position.y=-.5,p.add(M);const _=new v(new W(.18,.55,.02),this.woodMat);return _.position.y=-1.4,p.add(_),a.add(p),t.add(a),t}createWaterHyacinthCluster(){const t=new mt;t.name="kochuripana_cluster";const e=new B({color:1409085,roughness:.5}),n=new he({color:12616956});for(let i=0;i<7;i++){const o=i/7*Math.PI*2+Math.random()*.4,r=.25+Math.random()*.45,a=Math.cos(o)*r,c=Math.sin(o)*r,h=new Wt(.12,8,6);h.scale(1.3,.2,1);const d=new v(h,e);if(d.position.set(a,.02,c),t.add(d),i%2===0){const f=new v(new Me(.04,.12,6),n);f.position.set(a*.8,.08,c*.8),t.add(f)}}return t}createBangladeshiRiverBridge(t=13,e=60){const n=new mt;n.name="bangladeshi_river_bridge";const i=t*.5,o=.45,r=new W(t+.8,.45,e),a=new B({color:4674921,roughness:.8}),c=new v(r,a);c.position.set(0,-.28,0),c.receiveShadow=!0,n.add(c),[-e*.5+.3,e*.5-.3].forEach(y=>{const w=new W(t+.2,.012,.35),T=new v(w,new B({color:988970,roughness:.9}));T.position.set(0,.006,y),n.add(T)}),[-1,1].forEach(y=>{const w=(i+.3)*y,T=new W(.38,.85,e),V=new v(T,this.bridgeRedMat);V.position.set(w,-.45,0),this.applyShadow(V),n.add(V);const it=new W(.44,.12,e),D=new v(it,this.bridgeWhiteMat);D.position.set(w,-.85,0),n.add(D)}),[-18,-6,6,18].forEach(y=>{const w=new mt;w.position.set(0,0,y);const T=new W(t+1.2,.45,.95),V=new v(T,this.bridgeRedMat);V.position.y=-.55,w.add(V),[-5.2,-1.8,1.8,5.2].forEach(G=>{const H=new ut(.24,.28,3.2,8),F=new v(H,this.bridgeRedMat);F.position.set(G,-1.95,0),F.rotation.z=G>0?-.06:.06,w.add(F);const tt=new v(new ut(.29,.29,.28,8),new B({color:993570,roughness:.9}));tt.position.set(G,-1.35,0),w.add(tt)});const it=new W(t+.6,.22,.3),D=new v(it,this.bridgeRedMat);D.position.y=-1.6,w.add(D),n.add(w)}),[-1,1].forEach(y=>{const w=(i+.16)*y,T=new W(.34,.28,e),V=new v(T,this.bridgeCurbMat);V.position.set(w,.14,0),V.receiveShadow=!0,n.add(V)});const d=16,f=[];for(let y=0;y<d;y++)f.push(-28.5+y/(d-1)*57);[-1,1].forEach(y=>{const w=(i+.16)*y;f.forEach(T=>{const V=Math.sin((T+28.5)/57*Math.PI)*o,it=new W(.22,.96,.22),D=new v(it,this.bridgeRedMat);D.position.set(w,.28+.48+V,T),this.applyShadow(D),n.add(D);const G=new Me(.18,.08,4);G.rotateY(Math.PI/4);const H=new v(G,this.bridgeRedMat);H.position.set(w,.28+.96+.04+V,T),n.add(H)});for(let T=0;T<f.length-1;T++){const V=f[T],it=f[T+1],D=(V+it)*.5,G=it-V,H=Math.sin((D+28.5)/57*Math.PI)*o,F=new v(new W(.14,.12,G),this.bridgeWhiteMat);F.position.set(w,.28+.44+H,D),n.add(F);const tt=new v(new W(.2,.12,G),this.bridgeWhiteMat);if(tt.position.set(w,.28+.92+H,D),n.add(tt),y===-1){const Z=new ut(.065,.065,G,8);Z.rotateX(Math.PI/2);const X=new v(Z,this.pipelineMat);X.position.set(w+.09,.28+.32+H,D),n.add(X)}}});const l=new Jt(180,48);l.rotateX(-Math.PI/2);const u=new v(l,this.riverWaterMat);u.position.set(0,-1.35,0),u.receiveShadow=!0,n.add(u);const g=new Jt(180,48);g.rotateX(-Math.PI/2);const x=new v(g,new B({color:1841431,roughness:.95}));x.position.set(0,-3.2,0),n.add(x),[-1,1].forEach(y=>{const w=y*26.5;[-1,1].forEach(T=>{const V=new Jt(75,7);V.rotateX(y>0?-Math.PI*.38:Math.PI*.38);const it=new v(V,this.mudPlinthMat);it.position.set(T*48,-.7,w),n.add(it)})});const m=this.createDingiBoat();m.position.set(16.5,-1.35,3.5),m.rotation.y=.45,n.add(m),this.animatedAnimals.push({type:"dingi",mesh:m,startY:-1.35,seed:Math.random()*10}),[[14.5,-1.34,1.5],[19,-1.34,5.5],[-15,-1.34,-4],[-7.5,-1.34,6],[7.5,-1.34,-6]].forEach(([y,w,T])=>{const V=this.createWaterHyacinthCluster();V.position.set(y,w,T),n.add(V)});const M=new mt;M.position.set(i+.95,0,-28.8);const _=new v(new W(.35,1.2,.35),this.bridgeCurbMat);_.position.y=.6,M.add(_);const b=document.createElement("canvas");b.width=512,b.height=320;const C=b.getContext("2d");C.fillStyle="#15803d",C.fillRect(0,0,512,320),C.strokeStyle="#facc15",C.lineWidth=12,C.strokeRect(8,8,496,304),C.strokeStyle="#ffffff",C.lineWidth=4,C.strokeRect(22,22,468,276),C.fillStyle="#ffffff",C.font="bold 56px sans-serif",C.textAlign="center",C.textBaseline="middle",C.fillText("মেঘনা নদী সেতু",256,85),C.fillStyle="#facc15",C.font="900 44px sans-serif",C.fillText("MEGHNA RIVER BRIDGE",256,160),C.fillStyle="#e2e8f0",C.font="bold 28px sans-serif",C.fillText("দৈর্ঘ্য: ৬০ মিটার | LENGTH: 60M",256,225),C.fillStyle="#86efac",C.font="bold 22px sans-serif",C.fillText("সড়ক ও জনপথ অধিদপ্তর (RHD)",256,275);const L=new le(b),I=new B({map:L,roughness:.4}),z=new v(new Jt(1.2,.75),I);return z.position.set(0,1.35,-.05),z.rotation.y=-Math.PI/4,M.add(z),n.add(M),[-1,1].forEach(y=>{const w=(i+.38)*y;for(let T=-29.2;T<=-23.5;T+=1.4){const V=new v(new ut(.1,.1,.85,12),this.bollardMat);V.position.set(w,.425,T),this.applyShadow(V),n.add(V);const it=new v(new Wt(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);it.position.set(w,.85,T),n.add(it)}for(let T=23.5;T<=29.2;T+=1.4){const V=new v(new ut(.1,.1,.85,12),this.bollardMat);V.position.set(w,.425,T),this.applyShadow(V),n.add(V);const it=new v(new Wt(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);it.position.set(w,.85,T),n.add(it)}}),n}createFigure({shirtMat:t,pantsMat:e,isSitting:n=!1,isSmoking:i=!1}){const o=new mt;o.name="human_figure",o.scale.set(1.15,1.15,1.15);const r=new W(.36,.52,.22),a=new v(r,t||this.shirtTealMat);a.position.y=n?.72:1.12,o.add(a);const c=new Wt(.12,8,8),h=new v(c,this.skinMat);h.position.y=n?1.08:1.48,o.add(h);const d=new Wt(.126,8,8);d.scale(1.02,1.05,1.02);const f=new v(d,this.hairMat);f.position.set(0,(n?1.08:1.48)+.02,-.01),o.add(f),[-.22,.22].forEach((u,g)=>{const x=new ut(.045,.04,.48,6),m=new v(x,t||this.shirtTealMat);if(n)m.position.set(u,.7,.1),m.rotation.x=.35;else if(i&&g===1){m.position.set(u*.8,1.25,-.08),m.rotation.z=-.6,m.rotation.x=-.5;const p=new ut(.01,.01,.12,4);p.rotateX(Math.PI/2);const M=new v(p,this.panjabiMat);M.position.set(0,.24,-.08),m.add(M);const _=new Wt(.015,4,4),b=new v(_,new he({color:16729088}));b.position.set(0,0,-.06),M.add(b)}else m.position.set(u,1.08,0),m.rotation.z=u>0?-.1:.1;o.add(m)});const l=e||this.stageTrussMat;return n?[-.1,.1].forEach(u=>{const g=new W(.11,.12,.42),x=new v(g,l);x.position.set(u,.48,.22),o.add(x);const m=new W(.1,.44,.1),p=new v(m,l);p.position.set(u,.22,.4),o.add(p)}):[-.09,.09].forEach(u=>{const g=new ut(.055,.048,.82,6),x=new v(g,l);x.position.set(u,.41,0),o.add(x)}),o}createUddanOpenStageWithTong(t=1){const e=new mt;e.name="uddan_open_stage_complex";const n=new mt;n.position.set(33*t,0,-4);const i=new Me(18,22,14),o=new v(i,this.hillDarkGreenMat);o.position.set(0,11,0),n.add(o);const r=new Me(15,17,12),a=new v(r,this.hillGreenMat);a.position.set(2*t,8.5,-18),n.add(a);const c=new Me(16,18,12),h=new v(c,this.hillGreenMat);h.position.set(2*t,9,15),n.add(h),[-14,-6,6,14].forEach(Mt=>{const A=new Me(2,5,6),E=new v(A,this.treeCrownMat);E.position.set(-3*t,15,Mt),n.add(E)}),e.add(n);const d=new mt;d.position.set(20*t,0,-4);const f=new Jt(20,42);f.rotateX(-Math.PI/2);const l=new v(f,this.pavingPlazaMat);l.position.set(0,.015,0),l.receiveShadow=!0,d.add(l),[-16,12].forEach(Mt=>{const A=new mt;A.position.set(0,0,Mt);const E=new ut(.35,.45,4.5,8),Y=new v(E,this.palmTrunkMat);Y.position.y=2.25,A.add(Y);const gt=new Wt(3.8,8,8);gt.scale(1.25,.85,1.25);const dt=new v(gt,this.treeCrownMat);dt.position.y=5.4,A.add(dt),d.add(A)}),e.add(d);const u=new mt;u.position.set(21*t,0,-4),u.rotation.y=t>0?-Math.PI/2:Math.PI/2;const g=new W(14,.9,8),x=new v(g,this.stageBaseYellowMat);x.position.set(0,.45,0),this.applyShadow(x),u.add(x);const m=new W(14.2,.08,8.2),p=new v(m,this.stageFloorMat);p.position.set(0,.94,0),u.add(p);const M=new W(14.3,.08,.2),_=new v(M,this.stageBorderBlueMat);_.position.set(0,.94,4.1),u.add(_);const b=new v(new W(11,.3,1.4),this.stageBaseYellowMat);b.position.set(0,.3,4.7),u.add(b);const C=new v(new W(9,.3,1.2),this.stageBaseYellowMat);C.position.set(0,.15,5.6),u.add(C);const L=new W(8,.35,.5),I=new v(L,this.brickMat);I.position.set(0,.18,6.4),u.add(I);for(let Mt=-3.2;Mt<=3.2;Mt+=1.6){const A=new Wt(.3,6,6);A.scale(1.3,.9,1.3);const E=new v(A,this.bananaLeafMat);E.position.set(Mt,.42,6.4),u.add(E)}[-7.4,7.4].forEach(Mt=>{const A=new mt;A.position.set(Mt,0,2.2);const E=new W(1.6,.8,4.8),Y=new v(E,this.stageBaseYellowMat);Y.position.set(0,.4,0),Y.rotation.x=.18,A.add(Y);const gt=new W(.1,.7,4.8),dt=new v(gt,this.stageBorderBlueMat);dt.position.set(Mt>0?.75:-.75,.75,0),dt.rotation.x=.18,A.add(dt),u.add(A)});const z=new mt;z.position.set(0,.9,-3.8);const y=new W(11.5,4.5,.3),w=new v(y,this.stageTerracottaMat);w.position.set(0,2.25,0),this.applyShadow(w),z.add(w);const T=new W(7.5,3.4,.38),V=new v(T,this.stageGoldEmblemMat);V.position.set(0,2,.05),z.add(V);const it=new ut(2.8,2.8,.4,16,1,!1,0,Math.PI);it.rotateZ(Math.PI/2);const D=new v(it,this.stageGoldEmblemMat);D.position.set(0,4,.05),z.add(D),[-5.2,5.2].forEach(Mt=>{const A=new W(1.8,4.2,.35),E=new v(A,this.woodMat);E.position.set(Mt,2.1,.02),z.add(E)}),u.add(z);const G=new mt;G.position.set(0,.9,0);const H=7.5,F=8.5,tt=new ut(H,H,F,24,1,!0,Math.PI*.12,Math.PI*.76);tt.rotateX(Math.PI/2);const Z=new v(tt,this.stageBlueRoofMat);Z.position.set(0,0,0),this.applyShadow(Z),G.add(Z),[-F*.5,F*.5].forEach(Mt=>{const A=[];for(let dt=0;dt<=20;dt++){const ft=Math.PI*.12+dt/20*(Math.PI*.76),Ft=Math.cos(ft)*H,At=Math.sin(ft)*H;A.push(new N(Ft,At,Mt))}const E=new Yn(A),Y=new Ln(E,20,.14,8,!1),gt=new v(Y,this.stageTrussMat);G.add(gt)}),[-F*.5+.1,F*.5-.1].forEach(Mt=>{[.25,.4,.5,.6,.75].forEach(A=>{const E=Math.PI*.12+A*(Math.PI*.76),Y=Math.cos(E)*H,gt=Math.sin(E)*H,dt=[new N(0,0,Mt),new N(Y,gt,Mt)],ft=new Yn(dt),Ft=new Ln(ft,2,.06,6,!1),At=new v(Ft,this.stageTrussMat);G.add(At)})});const X=new W(12,.75,.25),K=new v(X,this.stageTrussMat);K.position.set(0,5.8,F*.5+.1),G.add(K);const ht=new ut(.55,.55,.12,16);ht.rotateX(Math.PI/2);const J=new v(ht,this.stageGoldEmblemMat);J.position.set(0,6.4,F*.5+.15),G.add(J),u.add(G);const Q=this.createFigure({shirtMat:this.panjabiMat,pantsMat:this.panjabiMat,isSitting:!1});Q.position.set(-1.2,.94,-.6),u.add(Q);const lt=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});lt.position.set(-.4,.94,-.6),lt.rotation.y=-Math.PI*.4,u.add(lt);const ot=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.stageTrussMat,isSitting:!0});ot.position.set(2.4,.3,4.9),u.add(ot);const nt=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.lungiPlaidMat,isSitting:!0});nt.position.set(3.4,.3,4.9),u.add(nt),e.add(u);const St=new mt;St.position.set(11.3*t,0,8),St.rotation.y=t>0?-Math.PI*.5-.25:Math.PI*.5+.25;const Rt=this.createTeaStall();St.add(Rt);const st=new W(2.4,.45,.08),Tt=new B({color:14427686,roughness:.5}),U=new v(st,Tt);U.position.set(0,2.55,.85),St.add(U);const pt=new mt;pt.position.set(1.4,1.9,.9);for(let Mt=0;Mt<6;Mt++){const A=new ut(.025,.025,.22,6);A.rotateZ(.2+Mt%2*.2);const E=new v(A,this.stageGoldEmblemMat);E.position.set(Mt%3*.06-.06,-Math.floor(Mt/3)*.15,0),pt.add(E)}St.add(pt);const at=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.lungiPlaidMat,isSitting:!1});at.position.set(.2,0,-.4),at.rotation.y=Math.PI,St.add(at);const _t=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!0});_t.position.set(-.6,.45,1.8),_t.rotation.y=0,St.add(_t);const ct=this.createFigure({shirtMat:this.panjabiMat,pantsMat:this.panjabiMat,isSitting:!0});ct.position.set(.6,.45,1.8),ct.rotation.y=-.3,St.add(ct);const Gt=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.stageTrussMat,isSitting:!1,isSmoking:!0});return Gt.position.set(1.65,0,1.5),Gt.rotation.y=-Math.PI*.4,St.add(Gt),e.add(St),e}createUIUCampus(t=1){const e=new mt;e.name="uiu_permanent_campus";const n=new mt;n.position.set(20*t,0,0);const i=new Jt(16,44);i.rotateX(-Math.PI/2);const o=new v(i,this.uiuLawnMat);o.position.set(0,.015,0),o.receiveShadow=!0,n.add(o),[-18,18].forEach(ot=>{const nt=new mt;nt.position.set(0,0,ot),[-2.4,2.4].forEach(Rt=>{const st=new v(new ut(.06,.06,2.44,6),this.goalPostMat);st.position.set(Rt,1.22,0),nt.add(st)});const St=new v(new ut(.06,.06,4.92,6),this.goalPostMat);St.rotateZ(Math.PI/2),St.position.set(0,2.44,0),nt.add(St),[-2.4,2.4].forEach(Rt=>{const st=new v(new ut(.035,.035,1.6,6),this.goalPostMat);st.position.set(Rt,.8,ot>0?.6:-.6),st.rotation.x=ot>0?.65:-.65,nt.add(st)}),n.add(nt)});const r=new mt,a=-7.5*t,c=new W(.35,.45,44),h=new v(c,this.concreteMat);h.position.set(a,.225,0),r.add(h);for(let ot=-21;ot<=21;ot+=2.8){const nt=new v(new ut(.04,.04,1.6,6),this.stageTrussMat);nt.position.set(a,1,ot),r.add(nt)}const d=new W(.08,.08,44),f=new v(d,this.stageTrussMat);f.position.set(a,1.75,0),r.add(f);const l=new mt;l.position.set(a,0,0),[-2.8,2.8].forEach(ot=>{const nt=new v(new W(.7,4.5,.7),this.brickMat);nt.position.set(0,2.25,ot),l.add(nt)});const u=new v(new W(.4,.9,6.4),this.stageTrussMat);u.position.set(0,4.2,0),l.add(u);const g=new v(new W(.12,.8,5.6),this.uiuGateSignMat);g.position.set(t>0?-.1:.1,4.2,0),l.add(g),r.add(l),n.add(r);const x=new v(new Wt(.25,8,8),new B({color:16777215,roughness:.3}));x.position.set(0,.25,0),n.add(x);const m=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});m.position.set(-1.2,0,1.5),m.rotation.y=-.5,n.add(m);const p=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.panjabiMat,isSitting:!1});p.position.set(1.4,0,-1.2),p.rotation.y=2.4,n.add(p),[-18,-10,-2,6,14,20].forEach(ot=>{const nt=this.createCoconutTree();nt.position.set(7.5*t,0,ot),n.add(nt)}),e.add(n);const M=new mt;M.position.set(32*t,0,0),M.rotation.y=t>0?-Math.PI/2:Math.PI/2;const _=new mt;_.position.set(-11.5,11.5,0);const b=new W(9.5,23,11),C=[this.uiuFacadeMat,this.uiuFacadeMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuLogoMat,this.uiuFacadeMat],L=new v(b,C);this.applyShadow(L),_.add(L);const I=new v(new W(4.5,2.8,5),this.uiuConcreteMat);I.position.set(0,12.9,0),_.add(I);const z=new ut(.04,.06,5.5,6),y=new v(z,this.goalPostMat);y.position.set(1.2,16.5,1.2),_.add(y);const w=new v(new W(9.6,.9,11.1),this.stageTrussMat);w.position.set(0,11.95,0),_.add(w),M.add(_);const T=new mt;T.position.set(-4.5,9.5,0);const V=new W(4.8,19,8.5),it=new v(V,this.uiuGlassMat);T.add(it),[4,8,12,16].forEach(ot=>{const nt=new v(new W(5,.8,8.7),this.uiuConcreteMat);nt.position.set(0,ot-9.5,0),T.add(nt)}),M.add(T);const D=new mt;D.position.set(3.5,10.75,0);const G=new W(10.5,21.5,11.5),H=[this.uiuFacadeMat,this.uiuFacadeMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuFacadeMat,this.uiuFacadeMat],F=new v(G,H);this.applyShadow(F),D.add(F);const tt=new v(new W(5.5,2.5,5.5),this.uiuConcreteMat);tt.position.set(0,12,0),D.add(tt);const Z=new v(new W(10.6,.9,11.6),this.stageTrussMat);Z.position.set(0,11.2,0),D.add(Z),M.add(D);const X=new mt;X.position.set(13.5,10,0);const K=new W(9.5,20,10.5),ht=new v(K,H);this.applyShadow(ht),X.add(ht);const J=new v(new W(9.6,.9,10.6),this.stageTrussMat);J.position.set(0,10.45,0),X.add(J),M.add(X);const Q=new mt;for(let ot=-17;ot<=15;ot+=3.8){const nt=new v(new ut(.32,.35,3.6,8),this.uiuConcreteMat);nt.position.set(ot,1.8,5.5),Q.add(nt)}const lt=new v(new W(12,.45,3),this.concreteMat);return lt.position.set(3.5,.225,6.8),Q.add(lt),M.add(Q),e.add(M),e}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}else if(e.type==="smoker"){if(e.head){const n=Math.sin(t*1.8+e.seed)*.04;e.head.rotation.x=-.12+Math.max(0,n)}}else e.type==="dingi"&&(e.mesh.position.y=e.startY+Math.sin(t*2.2+e.seed)*.035,e.mesh.rotation.z=Math.sin(t*1.8+e.seed)*.04,e.mesh.rotation.x=Math.cos(t*1.4+e.seed)*.025)}),this.smokeEmitters.forEach(e=>{const n=e.userData&&e.userData.type==="cigarette",i=e.userData&&e.userData.maxH||(n?.5:1.4),o=e.userData&&e.userData.spd||(n?.007:.015),r=e.userData&&e.userData.drift||(n?.004:.005);if(e.children.forEach((a,c)=>{a.position.y+=o,a.position.x+=Math.sin(t*3+c)*r,a.position.z+=Math.cos(t*2.6+c)*(r*.6),a.position.y>i&&(a.position.y=0,a.position.x=0,a.position.z=0)}),e.userData&&e.userData.light){const a=e.userData.seed||0;e.userData.light.intensity=.85+Math.sin(t*7.5+a)*.35}})}}class F0{constructor(t){this.scene=t,this.segments=[],this.segmentLength=Yt.ROAD_SEGMENT_LENGTH,this.segmentCount=Yt.ROAD_SEGMENT_COUNT,this.roadWidth=Yt.ROAD_WIDTH,this.props=new N0,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let d=0;d<i.length;d+=4){const f=(Math.random()-.5)*12;i[d]=Math.min(255,Math.max(0,i[d]+f)),i[d+1]=Math.min(255,Math.max(0,i[d+1]+f)),i[d+2]=Math.min(255,Math.max(0,i[d+2]+f))}e.putImageData(n,0,0);const o=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",o.forEach(d=>{e.fillRect(d-50,0,36,t.height),e.fillRect(d+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const r=new le(t);r.wrapS=Re,r.wrapT=Re,r.repeat.set(1,1),r.anisotropy=8,this.roadMaterial=new B({map:r,roughness:.82,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});const a=document.createElement("canvas");a.width=512,a.height=512;const c=a.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let d=0;d<512;d+=24)c.beginPath(),c.moveTo(0,d),c.lineTo(512,d),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const h=new le(a);h.wrapS=Re,h.wrapT=Re,h.repeat.set(4,8),this.paddyFieldMaterial=new B({map:h,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new B({color:7032635,roughness:.95}),this.culvertRailingMaterial=new B({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new mt;n.position.z=t;const i=e%4===3,o=new Jt(this.roadWidth,this.segmentLength);o.rotateX(-Math.PI/2);const r=new v(o,this.roadMaterial);if(r.position.y=i?.003:0,r.receiveShadow=!0,n.add(r),i){[-1,1].forEach(d=>{[-1,1].forEach(f=>{const l=new Jt(3.5,6);l.rotateX(-Math.PI/2);const u=new v(l,this.dirtVergeMaterial);u.position.set((this.roadWidth*.5+3.5*.5)*d,-.01,f*27),n.add(u);const g=new Jt(60,6);g.rotateX(-Math.PI/2);const x=new v(g,this.paddyFieldMaterial);x.position.set((this.roadWidth*.5+3.5+30)*d,-.05,f*27),n.add(x)})});const h=this.props.createBangladeshiRiverBridge(this.roadWidth,this.segmentLength);n.add(h)}else{[-1,1].forEach(h=>{const d=new Jt(3.5,this.segmentLength);d.rotateX(-Math.PI/2);const f=new v(d,this.dirtVergeMaterial);f.position.set((this.roadWidth*.5+3.5*.5)*h,-.01,0),f.receiveShadow=!0,n.add(f)});const c=60;[-1,1].forEach(h=>{const d=new Jt(c,this.segmentLength);d.rotateX(-Math.PI/2);const f=new v(d,this.paddyFieldMaterial),l=(this.roadWidth*.5+3.5+c*.5)*h;f.position.set(l,-.05,0),f.receiveShadow=!0,n.add(f)})}return this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=e%4===3,o=!i&&e%5===1,r=n.createElectricPole();r.position.set(this.roadWidth*.5+2.4,0,0),t.add(r);const a=[new N(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new N(this.roadWidth*.5+2.4,7.1,0),new N(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],c=new Yn(a),h=new Ln(c,8,.02,4,!1),d=new he({color:2040865}),f=new v(h,d);if(t.add(f),!i){const l=e%2===0?-1:1,u=e%3===0?"white":e%3===1?"brown":"black",g=n.createCow(u),x=(this.roadWidth*.5+2.8+Math.random()*1.5)*l,m=6+Math.random()*14;if(g.position.set(x,0,m),g.rotation.y=l>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(g),e%2===1){const p=n.createCow("brown");p.scale.set(.75,.75,.75),p.position.set(x+(l>0?3:-3),0,m+3.5),p.rotation.y=g.rotation.y+.5,t.add(p)}}if(e%2===0&&!o){const u=n.createVillageHouse(e%4===0),g=(this.roadWidth*.5+11.5)*-1;u.position.set(g,0,-10),u.rotation.y=Math.PI/2,t.add(u);const x=n.createHaystack();x.position.set(g-5.5,0,4),t.add(x);const m=n.createBambooFence(24);m.position.set((this.roadWidth*.5+5.5)*-1,0,-5),t.add(m)}if(e%3===1){const u=n.createTeaStall();u.position.set((this.roadWidth*.5+5.8)*1,0,12),u.rotation.y=-Math.PI/2,t.add(u);const g=n.createCoconutTree();g.position.set((this.roadWidth*.5+9)*1,0,16),t.add(g)}if(e%3===2&&!o){const u=n.createPond(14,22);u.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(u);for(let g=0;g<3;g++){const x=n.createBananaTree();x.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+g*6),t.add(x)}}if(!i&&!o){const l=e%2===0?1:-1,u=n.createCoconutTree();u.position.set((this.roadWidth*.5+7.5+Math.random()*5)*l,0,-22),t.add(u);const g=n.createBambooGrove();g.position.set((this.roadWidth*.5+9+Math.random()*6)*-l,0,18),t.add(g);const x=n.createBananaTree();x.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*l,0,4),t.add(x)}else i&&[-1,1].forEach(l=>{const u=n.createCoconutTree();u.position.set(this.roadWidth*.5+9,0,l*26),t.add(u);const g=n.createBambooGrove();g.position.set(-this.roadWidth*.5-10,0,l*26),t.add(g)});if(!i){const l=o||e%2===0?1:-1,u=n.createJatriChawni(l),g=(this.roadWidth*.5+3.4)*l,x=e===0?-14:-18;u.position.set(g,0,x),u.rotation.y=l>0?Math.PI*.5+.32:-Math.PI*.5-.32,t.add(u)}if(!i&&e%3===0&&!o){const u=n.createUddanOpenStageWithTong(1);u.position.set(0,0,0),t.add(u)}if(e%4===1||e%4===2){const l=e%4===2||o?1:-1,u=n.createHighwayCafe(l),g=(this.roadWidth*.5+5.6)*l,x=e%4===2?14:12;u.position.set(g,0,x),u.rotation.y=l>0?Math.PI*.5+.28:-Math.PI*.5-.28,t.add(u);const m=l,p=n.createSmokingGuysGroup(m),M=(this.roadWidth*.5+2.5)*m,_=x-6;p.position.set(M,0,_),p.rotation.y=m>0?-.4:.4,t.add(p)}else if(e%4===0&&e%3!==0&&!i){const u=n.createHighwayBar(1),g=(this.roadWidth*.5+5.6)*1,x=12;u.position.set(g,0,x),u.rotation.y=Math.PI*.5+.28,t.add(u);const m=1,p=n.createSmokingGuysGroup(m),M=(this.roadWidth*.5+2.5)*m,_=x-6;p.position.set(M,0,_),p.rotation.y=-.4,t.add(p)}if(o){const u=n.createUIUCampus(-1);u.position.set(0,0,0),t.add(u)}}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const o=this.segments[i];if(o.group.position.z>n){let r=0;for(let a=0;a<this.segments.length;a++)this.segments[a].group.position.z<r&&(r=this.segments[a].group.position.z);o.group.position.z=r-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class O0{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new Wo(11722715,.0038),this.scene.background=new ce(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(h,d,f)=>{e.beginPath(),e.arc(h,d,f,0,Math.PI*2),e.arc(h+f*.7,d-f*.2,f*.8,0,Math.PI*2),e.arc(h-f*.7,d-f*.1,f*.7,0,Math.PI*2),e.arc(h+f*1.3,d+f*.1,f*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const o=e.createRadialGradient(256,380,15,256,380,120);o.addColorStop(0,"rgba(255, 255, 240, 1.0)"),o.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),o.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),o.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=o,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const r=new le(t),a=new Wt(480,32,16),c=new he({map:r,side:He});this.skyDome=new v(a,c),this.scene.add(this.skyDome)}initLighting(){const t=ti();this.hemiLight=new x0(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new E0(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0;const e=t?1024:2048;this.dirLight.shadow.mapSize.width=e,this.dirLight.shadow.mapSize.height=e,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=t?120:160,this.dirLight.shadow.camera.left=-16,this.dirLight.shadow.camera.right=16,this.dirLight.shadow.camera.top=22,this.dirLight.shadow.camera.bottom=-22,this.dirLight.shadow.bias=-6e-4,this.dirLight.shadow.normalBias=.02,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new B({color:1793568,roughness:.9,flatShading:!0});[-1,1].forEach(e=>{const n=new mt,i=28;for(let o=0;o<i;o++){const r=12+Math.random()*18,a=6+Math.random()*8,c=new Me(a,r,6),h=new v(c,t),d=(55+Math.random()*30)*e,f=-o*18;h.position.set(d,r*.5-2,f),h.rotation.y=Math.random()*Math.PI,n.add(h)}this.scene.add(n),this.treeLines.push(n)})}initFlyingBirds(){this.birdsGroup=new mt;const t=new he({color:16777215,side:Ee}),e=8;for(let n=0;n<e;n++){const i=new mt,o=new Jt(.8,.35);o.translate(-.4,0,0);const r=new v(o,t);i.add(r);const a=new Jt(.8,.35);a.translate(.4,0,0);const c=new v(a,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:r,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class G0{constructor(t="sedan"){this.type=t,this.group=new mt,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new Sn,this.collisionSize=new N(1.8,1.4,4.5),this._boxCenter=new N,this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new B({color:t,metalness:.5,roughness:.35}),darkTrim:new B({color:1974308,roughness:.7}),wood:new B({color:8736014,roughness:.9}),glass:new Jo({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new B({color:14671839,metalness:.9,roughness:.2}),headlight:new he({color:16777215}),taillight:new B({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new B({color:1973792,metalness:.1,roughness:.85}),rim:new B({color:12131356,metalness:.5,roughness:.4}),cowFawn:new B({color:9262372,roughness:.7}),cowWhite:new B({color:16119280,roughness:.6}),cowBlack:new B({color:2236962,roughness:.7}),horn:new B({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new W(2,.4,6.2),o=new v(i,n.darkTrim);o.position.set(0,.6,0),this.group.add(o);const r=new W(2.3,.4,.25),a=new v(r,n.darkTrim);a.position.set(0,.6,-3.15),this.group.add(a);const c=new W(1.8,.9,1.5),h=new v(c,n.body);h.position.set(0,1.25,-2.2),this.group.add(h);const d=new W(2.1,1.5,1.5),f=new v(d,n.body);f.position.set(0,1.8,-.7),this.group.add(f);const l=new Jt(1.85,.7),u=new v(l,n.glass);u.position.set(0,1.95,-1.46),this.group.add(u),[-.7,.7].forEach(b=>{const C=new v(new W(.24,.2,.05),n.headlight);C.position.set(b,1.15,-3.18),this.group.add(C)});const g=new W(2.25,.12,3.6),x=new v(g,n.wood);x.position.set(0,1.05,1.5),this.group.add(x),[-1.12,1.12].forEach(b=>{const C=new W(.08,1.3,3.6),L=new v(C,n.wood);L.position.set(b,1.7,1.5),this.group.add(L)});const m=new W(2.25,1.2,.08),p=new v(m,n.wood);p.position.set(0,1.65,3.3),this.group.add(p),[-.85,.85].forEach(b=>{const C=new v(new W(.28,.16,.05),n.taillight);C.position.set(b,.75,3.32),this.group.add(C)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(b=>{const C=new mt;C.position.set(b.x,2.2,b.z);const L=new W(.42,.45,.6),I=new v(L,b.mat);C.add(I);const z=new W(.3,.25,.25),y=new v(z,n.darkTrim);y.position.set(0,-.08,.38),C.add(y),[-.18,.18].forEach(w=>{const T=new Me(.05,.28,6),V=new v(T,n.horn);V.position.set(w,.26,.05),V.rotation.z=w>0?-.35:.35,C.add(V)}),this.group.add(C)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(b=>{const C=this.createSimpleWheel(n,.5,.3);C.position.set(b.x,.5,b.z),this.group.add(C),this.wheels.push(C)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new W(2,.4,6.2),n=new v(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new W(2.1,1.6,1.8),o=new v(i,t.body);o.position.set(0,1.7,-1.8),this.group.add(o);const r=new W(2.3,2.1,3.8),a=new v(r,t.wood);a.position.set(0,1.85,1.2),this.group.add(a),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new W(2.35,2.5,10.2),n=new v(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new Jt(2.15,1.2),o=new v(i,t.glass);o.position.set(0,1.95,-5.12),this.group.add(o),[-1.19,1.19].forEach(a=>{const c=new Jt(9,.9),h=new v(c,t.glass);h.position.set(a,1.9,.2),h.rotation.y=a>0?Math.PI/2:-Math.PI/2,this.group.add(h)}),[-.85,.85].forEach(a=>{const c=new v(new W(.3,.16,.05),t.headlight);c.position.set(a,.75,-5.12),this.group.add(c);const h=new v(new W(.24,.35,.05),t.taillight);h.position.set(a,1.3,5.12),this.group.add(h)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(a=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(a.x,.48,a.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new W(1.88,.4,4.65),o=new v(i,n.darkTrim);o.position.set(0,.42,0),this.group.add(o);const r=new W(1.84,.6,4.6),a=new v(r,n.body);a.position.set(0,.78,0),this.group.add(a);const c=new W(1.58,.65,2.9),h=new v(c,n.body);h.position.set(0,1.3,.2),this.group.add(h),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new W(1.76,.32,4.5),o=new v(i,n.darkTrim);o.position.set(0,.32,0),this.group.add(o);const r=new W(1.72,.44,4.4),a=new v(r,n.body);a.position.set(0,.58,0),this.group.add(a);const c=new W(1.44,.46,2.2),h=new v(c,n.body);h.position.set(0,.92,-.05),this.group.add(h),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,o,r){[-e,e].forEach(a=>{const c=new W(.3,.1,.05),h=new v(c,t.headlight);h.position.set(a,i,n),this.group.add(h)}),[-e,e].forEach(a=>{const c=new W(.32,.12,.05),h=new v(c,t.taillight);h.position.set(a,r,o),this.group.add(h)})}addStandardWheels(t,e,n,i,o){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(a=>{const c=this.createSimpleWheel(t,o,.24);c.position.set(a.x,a.y,a.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new mt,o=new ut(e,e,n,18);o.rotateZ(Math.PI/2);const r=new v(o,t.tire);i.add(r);const a=new ut(e*.7,e*.7,n+.02,14);a.rotateZ(Math.PI/2);const c=new v(a,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=Yt.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<Yt.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=Yt.LANES[n];if(!t.some(r=>{if(r===this||!r.active)return!1;const a=Math.abs(r.group.position.z-this.group.position.z),c=Math.abs(r.group.position.x-i);return a<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const o=this.targetX-this.group.position.x;Math.abs(o)>.04?this.group.position.x+=Math.sign(o)*Math.min(Math.abs(o),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(o=>{o.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}}class B0{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"],n=ti()?14:25;for(let i=0;i<n;i++){const o=t[i%t.length],r=new G0(o);r.despawn(),this.pool.push(r),this.scene.add(r.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,o){const r=t.group.position.z,a=t.group.position.x,c=Math.min(1,n/4500),h=Di.lerp(1.3,.8,c),d=Di.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=Di.lerp(h,d,Math.random()),this.trySpawnTraffic(r,c));for(let f=this.activeVehicles.length-1;f>=0;f--){const l=this.activeVehicles[f];if(l.update(e,i),l.group.position.z>r+Yt.TRAFFIC.DESPAWN_DISTANCE){l.despawn(),this.activeVehicles.splice(f,1);continue}if(!l.hasBeenOvertaken){const u=Math.abs(l.group.position.z-r),g=Math.abs(l.group.position.x-a);u<Yt.SCORING.NEAR_MISS_DIST_Z&&g<Yt.SCORING.NEAR_MISS_DIST_X&&g>.5&&e>l.speed+12?(l.hasBeenOvertaken=!0,o&&o(l)):r<l.group.position.z-4&&(l.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-Yt.TRAFFIC.SPAWN_DISTANCE,i=34,o=new Set;this.activeVehicles.forEach(g=>{Math.abs(g.group.position.z-n)<i&&o.add(g.lane)});const r=[0,1,2].filter(g=>!o.has(g));if(r.length===0||r.length===1&&o.size>=2)return;const a=r[Math.floor(Math.random()*r.length)];let c="cow_truck";const h=Math.random();a===0?c=h>.45?"cow_truck":"truck":a===1?c=h>.5?"bus":h>.25?"cow_truck":"suv":c=h>.45?"bus":"sedan";const d=this.getInactiveVehicle(c);if(!d)return;const f=Yt.TRAFFIC.SPEEDS[c]||[65,85],l=e*35,u=Di.lerp(f[0],f[1],Math.random())+l;if(d.spawn(a,n,u),this.activeVehicles.push(d),e>.5&&Math.random()<.35&&r.length>=2){const g=r.filter(x=>x!==a);if(g.length>0){const x=g[Math.floor(Math.random()*g.length)],m=Math.random()>.5?"cow_truck":"bus",p=this.getInactiveVehicle(m);if(p){const M=n-(28+Math.random()*20),_=Yt.TRAFFIC.SPEEDS[m]||[65,80],b=Di.lerp(_[0],_[1],Math.random())+l;p.spawn(x,M,b),this.activeVehicles.push(p)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const o=this.activeVehicles[i],r=e-o.group.position.z,a=Math.abs(o.group.position.x-n);if(r>4&&r<65&&a<2.4&&!o.isYielding){o.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class k0{constructor(t){this.scene=t,this.isMobile=ti(),this.particles=[],this.poolSize=this.isMobile?70:180,this._smokeThrottle=!1,this.smokeMat=new he({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new he({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new B({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new W(.14,.14,.14),n=new v(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new N,rotVel:new N,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){if(this.isMobile&&(this._smokeThrottle=!this._smokeThrottle,this._smokeThrottle))return;const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){const e=this.isMobile?18:35,n=this.isMobile?10:20,i=this.isMobile?14:25;for(let o=0;o<e;o++){const r=this.getFreeParticle();if(!r)break;r.active=!0,r.type="spark",r.mesh.material=this.sparkMat,r.mesh.visible=!0,r.mesh.scale.set(.12,.12,.12),r.mesh.position.copy(t);const a=Math.random()*Math.PI*2,c=6+Math.random()*14;r.vel.set(Math.cos(a)*c,3+Math.random()*10,Math.sin(a)*c),r.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),r.life=0,r.maxLife=.7+Math.random()*.5,r.scaleSpeed=-.5}for(let o=0;o<n;o++){const r=this.getFreeParticle();if(!r)break;r.active=!0,r.type="debris",r.mesh.material=this.debrisMat,r.mesh.visible=!0,r.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),r.mesh.position.copy(t),r.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),r.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),r.life=0,r.maxLife=1.2,r.scaleSpeed=0}for(let o=0;o<i;o++){const r=this.getFreeParticle();if(!r)break;r.active=!0,r.type="smoke",r.mesh.material=this.smokeMat,r.mesh.visible=!0,r.mesh.scale.set(.8,.8,.8),r.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),r.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),r.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),r.life=0,r.maxLife=1.4,r.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class z0{constructor(t){this.scene=t;const e=ti();this.linesCount=e?25:60,this.group=new mt;const n=new fc({color:10083839,transparent:!0,opacity:0});this.lineMat=n,this.lines=[];for(let i=0;i<this.linesCount;i++){const o=[new N(0,0,0),new N(0,0,6+Math.random()*8)],r=new Fe().setFromPoints(o),a=new Hp(r,n);this.resetLinePos(a),this.group.add(a),this.lines.push(a)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const o=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=o*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const r=t.group.position.z,a=t.group.position.x;this.group.position.set(a,0,r);const c=e/60*i*50;this.lines.forEach(h=>{h.position.z+=c,h.position.z>5&&this.resetLinePos(h)})}}class V0{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this._lastScore=-1,this._lastDistKm="",this._lastSpeed=-1,this._lastNitro=-1,this._lastBoosting=null,this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),o=document.getElementById("btn-gameover-restart");[i,o].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const r=document.getElementById("btn-pause-menu"),a=document.getElementById("btn-gameover-menu");[r,a].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(l=>{l.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),h=document.getElementById("btn-how-to-play"),d=document.getElementById("btn-modal-close");h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),d&&c&&d.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")});const f=document.querySelectorAll(".veh-btn");f.forEach(l=>{l.addEventListener("click",()=>{f.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(l.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(l=>{l.addEventListener("click",u=>{u.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),o=document.getElementById("btn-touch-nitro");document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(c=>{c.addEventListener("contextmenu",h=>h.preventDefault())});const r=(c,h,d=null)=>{if(!c)return;const f=(l,u)=>{document.body.classList.add("touch-active"),h(l),l&&d&&d()};c.addEventListener("pointerdown",l=>{if(l.preventDefault(),c.setPointerCapture)try{c.setPointerCapture(l.pointerId)}catch{}f(!0)}),c.addEventListener("pointerup",l=>{if(c.releasePointerCapture)try{c.releasePointerCapture(l.pointerId)}catch{}f(!1)}),c.addEventListener("pointercancel",l=>{if(c.releasePointerCapture)try{c.releasePointerCapture(l.pointerId)}catch{}f(!1)})},a=(c,h)=>{if(!c)return;let d=null,f=null;const l=g=>{if(g&&g.preventDefault(),document.body.classList.add("touch-active"),c.setPointerCapture&&g&&g.pointerId!==void 0)try{c.setPointerCapture(g.pointerId)}catch{}h(),clearTimeout(f),clearInterval(d),f=setTimeout(()=>{d=setInterval(()=>{h()},210)},260)},u=g=>{if(clearTimeout(f),clearInterval(d),c.releasePointerCapture&&g&&g.pointerId!==void 0)try{c.releasePointerCapture(g.pointerId)}catch{}};c.addEventListener("pointerdown",l),c.addEventListener("pointerup",u),c.addEventListener("pointercancel",u),c.addEventListener("pointerleave",u)};a(t,()=>{this.onSteerLeft&&this.onSteerLeft()}),a(e,()=>{this.onSteerRight&&this.onSteerRight()}),r(n,c=>{this.onBrake&&this.onBrake(c)},()=>this.soundManager.playAirBrake()),r(i,c=>{this.onAccelerate&&this.onAccelerate(c)}),r(o,c=>{this.onNitro&&this.onNitro(c)}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",c=>{c.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===ge.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case ge.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case ge.PLAYING:this.hudLayer.classList.remove("hidden");break;case ge.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case ge.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){const e=Math.floor(t.score);this._lastScore!==e&&this.scoreVal&&(this._lastScore=e,this.scoreVal.textContent=e.toLocaleString());const n=`${(t.distanceMeters/1e3).toFixed(2)} km`;this._lastDistKm!==n&&this.distVal&&(this._lastDistKm=n,this.distVal.textContent=n);const i=Math.round(t.speedKmh);this._lastSpeed!==i&&this.speedVal&&(this._lastSpeed=i,this.speedVal.textContent=i);const o=Math.round(t.nitro);this._lastNitro!==o&&this.nitroBar&&(this._lastNitro=o,this.nitroBar.style.width=`${o}%`),this._lastBoosting!==t.isBoosting&&this.nitroBar&&(this._lastBoosting=t.isBoosting,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting"))}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class H0{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new A0,this.inputManager=new R0,this.soundManager=new L0,this.uiManager=new V0(this.soundManager),this.scene=new Vp,this.camera=new We(Yt.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.isMobile=ti(),this.renderer=new uc({antialias:!this.isMobile,powerPreference:"high-performance",precision:this.isMobile?"mediump":"highp",stencil:!1,depth:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight);const t=this.isMobile?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.isMobile?Go:Ia,this.renderer.toneMapping=Ua,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new O0(this.scene),this.roadManager=new F0(this.scene),this.vehicles={truck:new I0,rickshaw:new D0,cng:new U0},Object.values(this.vehicles).forEach(e=>{this.scene.add(e.group),e.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new B0(this.scene),this.particleSystem=new k0(this.scene),this.speedLines=new z0(this.scene),this.cameraController=new P0(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new T0,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this._leftRearPos=new N,this._rightRearPos=new N,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(ge.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){const t=()=>{const n=window.innerWidth,i=window.innerHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i),this.isMobile=ti();const o=this.isMobile?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(o)};window.addEventListener("resize",t),window.addEventListener("orientationchange",()=>{setTimeout(t,120)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=n=>this.setVehicle(n);const e=()=>{this.gameState.state===ge.PLAYING?(this.gameState.state=ge.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(ge.PAUSED,this.gameState)):this.gameState.state===ge.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=e,this.inputManager.onPauseToggle=e,this.inputManager.onRestart=()=>{(this.gameState.state===ge.GAMEOVER||this.gameState.state===ge.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=()=>this.inputManager.triggerSteerLeft(),this.uiManager.onSteerRight=()=>this.inputManager.triggerSteerRight(),this.uiManager.onAccelerate=n=>this.inputManager.setAccelerate(n),this.uiManager.onBrake=n=>this.inputManager.setBrake(n),this.uiManager.onNitro=n=>this.inputManager.setNitro(n)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(ge.PLAYING,this.gameState)}resumeGame(){this.gameState.state===ge.PAUSED&&(this.gameState.state=ge.PLAYING,this.uiManager.setScreen(ge.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=ge.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(ge.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(ge.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===ge.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===ge.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const o=this.inputManager.keys.brake;o&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=o,this.gameState.update(e,this.inputManager);const r=this.gameState.speedKmh*1e3/3600;this.playerVehicle.group.position.z-=r*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,o,this.gameState.isBoosting,e),o&&this.gameState.speedKmh>50&&(this._leftRearPos.copy(this.playerVehicle.group.position),this._leftRearPos.x-=.85,this._leftRearPos.z+=1.6,this._rightRearPos.copy(this.playerVehicle.group.position),this._rightRearPos.x+=.85,this._rightRearPos.z+=1.6,this.particleSystem.emitTireSmoke(this._leftRearPos),this.particleSystem.emitTireSmoke(this._rightRearPos)),this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const h=this.gameState.addNearMiss();this.soundManager.playNearMiss(h.combo),this.uiManager.showNearMiss(h.bonus,h.combo)});const a=this.trafficManager.checkCollision(this.playerVehicle);a&&this.onCrash(a),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,o,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===ge.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new H0});
//# sourceMappingURL=index-6Q_RMjfr.js.map
