(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="160",bc=0,tr=1,Ec=2,Go=1,Ia=2,vn=3,Nn=0,He=1,Ee=2,In=0,Si=1,er=2,nr=3,ir=4,Tc=5,Xn=100,Ac=101,Rc=102,sr=103,or=104,Pc=200,Cc=201,Lc=202,Ic=203,Ao=204,Ro=205,Dc=206,Uc=207,Nc=208,Fc=209,Oc=210,Gc=211,Bc=212,kc=213,zc=214,Vc=0,Hc=1,Wc=2,Ts=3,Xc=4,qc=5,Yc=6,Zc=7,Da=0,Kc=1,Jc=2,Dn=0,jc=1,$c=2,Qc=3,Ua=4,tl=5,el=6,Na=300,bi=301,Ei=302,Po=303,Co=304,Us=306,Re=1e3,sn=1001,Lo=1002,Ve=1003,rr=1004,Xs=1005,je=1006,nl=1007,Xi=1008,Un=1009,il=1010,sl=1011,Bo=1012,Fa=1013,Pn=1014,Cn=1015,qi=1016,Oa=1017,Ga=1018,Zn=1020,ol=1021,on=1023,rl=1024,al=1025,Kn=1026,Ti=1027,cl=1028,Ba=1029,ll=1030,ka=1031,za=1033,qs=33776,Ys=33777,Zs=33778,Ks=33779,ar=35840,cr=35841,lr=35842,hr=35843,Va=36196,dr=37492,ur=37496,fr=37808,pr=37809,mr=37810,gr=37811,_r=37812,Mr=37813,vr=37814,xr=37815,wr=37816,Sr=37817,yr=37818,br=37819,Er=37820,Tr=37821,Js=36492,Ar=36494,Rr=36495,hl=36283,Pr=36284,Cr=36285,Lr=36286,Ha=3e3,Jn=3001,dl=3200,ul=3201,Wa=0,fl=1,$e="",Ne="srgb",wn="srgb-linear",ko="display-p3",Ns="display-p3-linear",As="linear",Me="srgb",Rs="rec709",Ps="p3",ni=7680,Ir=519,pl=512,ml=513,gl=514,Xa=515,_l=516,Ml=517,vl=518,xl=519,Dr=35044,Ur="300 es",Io=1035,xn=2e3,Cs=2001;class Pi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nr=1234567;const Bi=Math.PI/180,Ai=180/Math.PI;function ei(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function zo(s,t){return(s%t+t)%t}function wl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Sl(s,t,e){return s!==t?(e-s)/(t-s):0}function ki(s,t,e){return(1-e)*s+e*t}function yl(s,t,e,n){return ki(s,t,1-Math.exp(-e*n))}function bl(s,t=1){return t-Math.abs(zo(s,t*2)-t)}function El(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Tl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Al(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Rl(s,t){return s+Math.random()*(t-s)}function Pl(s){return s*(.5-Math.random())}function Cl(s){s!==void 0&&(Nr=s);let t=Nr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ll(s){return s*Bi}function Il(s){return s*Ai}function Do(s){return(s&s-1)===0&&s!==0}function Dl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ls(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ul(s,t,e,n,i){const o=Math.cos,r=Math.sin,a=o(e/2),c=r(e/2),h=o((t+n)/2),d=r((t+n)/2),f=o((t-n)/2),l=r((t-n)/2),u=o((n-t)/2),g=r((n-t)/2);switch(i){case"XYX":s.set(a*d,c*f,c*l,a*h);break;case"YZY":s.set(c*l,a*d,c*f,a*h);break;case"ZXZ":s.set(c*f,c*l,a*d,a*h);break;case"XZX":s.set(a*d,c*g,c*u,a*h);break;case"YXY":s.set(c*u,a*d,c*g,a*h);break;case"ZYZ":s.set(c*g,c*u,a*d,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Di={DEG2RAD:Bi,RAD2DEG:Ai,generateUUID:ei,clamp:Ue,euclideanModulo:zo,mapLinear:wl,inverseLerp:Sl,lerp:ki,damp:yl,pingpong:bl,smoothstep:El,smootherstep:Tl,randInt:Al,randFloat:Rl,randFloatSpread:Pl,seededRandom:Cl,degToRad:Ll,radToDeg:Il,isPowerOfTwo:Do,ceilPowerOfTwo:Dl,floorPowerOfTwo:Ls,setQuaternionFromProperEuler:Ul,normalize:ke,denormalize:Mi};class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(t,e,n,i,o,r,a,c,h){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,h)}set(t,e,n,i,o,r,a,c,h){const d=this.elements;return d[0]=t,d[1]=i,d[2]=a,d[3]=e,d[4]=o,d[5]=c,d[6]=n,d[7]=r,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],h=n[1],d=n[4],f=n[7],l=n[2],u=n[5],g=n[8],x=i[0],m=i[3],p=i[6],v=i[1],_=i[4],y=i[7],P=i[2],L=i[5],I=i[8];return o[0]=r*x+a*v+c*P,o[3]=r*m+a*_+c*L,o[6]=r*p+a*y+c*I,o[1]=h*x+d*v+f*P,o[4]=h*m+d*_+f*L,o[7]=h*p+d*y+f*I,o[2]=l*x+u*v+g*P,o[5]=l*m+u*_+g*L,o[8]=l*p+u*y+g*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],d=t[8];return e*r*d-e*a*h-n*o*d+n*a*c+i*o*h-i*r*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],d=t[8],f=d*r-a*h,l=a*c-d*o,u=h*o-r*c,g=e*f+n*l+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=f*x,t[1]=(i*h-d*n)*x,t[2]=(a*n-i*r)*x,t[3]=l*x,t[4]=(d*e-i*c)*x,t[5]=(i*o-a*e)*x,t[6]=u*x,t[7]=(n*c-h*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*r+h*a)+r+t,-i*h,i*c,-i*(-h*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(js.makeScale(t,e)),this}rotate(t){return this.premultiply(js.makeRotation(-t)),this}translate(t,e){return this.premultiply(js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const js=new ae;function qa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nl(){const s=Is("canvas");return s.style.display="block",s}const Fr={};function zi(s){s in Fr||(Fr[s]=!0,console.warn(s))}const Or=new ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gr=new ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$i={[wn]:{transfer:As,primaries:Rs,toReference:s=>s,fromReference:s=>s},[Ne]:{transfer:Me,primaries:Rs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ns]:{transfer:As,primaries:Ps,toReference:s=>s.applyMatrix3(Gr),fromReference:s=>s.applyMatrix3(Or)},[ko]:{transfer:Me,primaries:Ps,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Gr),fromReference:s=>s.applyMatrix3(Or).convertLinearToSRGB()}},Fl=new Set([wn,Ns]),me={enabled:!0,_workingColorSpace:wn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Fl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=$i[t].toReference,i=$i[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return $i[s].primaries},getTransfer:function(s){return s===$e?As:$i[s].transfer}};function yi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ii;class Ya{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ii===void 0&&(ii=Is("canvas")),ii.width=t.width,ii.height=t.height;const n=ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=yi(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(yi(e[n]/255)*255):e[n]=yi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ol=0;class Za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=ei(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Qs(i[r].image)):o.push(Qs(i[r]))}else o=Qs(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Qs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ya.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gl=0;class Xe extends Pi{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=sn,i=sn,o=je,r=Xi,a=on,c=Un,h=Xe.DEFAULT_ANISOTROPY,d=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=ei(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Jn?Ne:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Na)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Re:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Re:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?Jn:Ha}set encoding(t){zi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Jn?Ne:$e}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Na;Xe.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,h=c[0],d=c[4],f=c[8],l=c[1],u=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(d-l)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+l)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(h+1)/2,y=(u+1)/2,P=(p+1)/2,L=(d+l)/4,I=(f+x)/4,k=(g+m)/4;return _>y&&_>P?_<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(_),i=L/n,o=I/n):y>P?y<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(y),n=L/i,o=k/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=I/o,i=k/o),this.set(n,i,o,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(l-d)*(l-d));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(l-d)/v,this.w=Math.acos((h+u+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bl extends Pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(zi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?Ne:$e),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ka extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let c=n[i+0],h=n[i+1],d=n[i+2],f=n[i+3];const l=o[r+0],u=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=l,t[e+1]=u,t[e+2]=g,t[e+3]=x;return}if(f!==x||c!==l||h!==u||d!==g){let m=1-a;const p=c*l+h*u+d*g+f*x,v=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const P=Math.sqrt(_),L=Math.atan2(P,p*v);m=Math.sin(m*L)/P,a=Math.sin(a*L)/P}const y=a*v;if(c=c*m+l*y,h=h*m+u*y,d=d*m+g*y,f=f*m+x*y,m===1-a){const P=1/Math.sqrt(c*c+h*h+d*d+f*f);c*=P,h*=P,d*=P,f*=P}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],c=n[i+1],h=n[i+2],d=n[i+3],f=o[r],l=o[r+1],u=o[r+2],g=o[r+3];return t[e]=a*g+d*f+c*u-h*l,t[e+1]=c*g+d*l+h*f-a*u,t[e+2]=h*g+d*u+a*l-c*f,t[e+3]=d*g-a*f-c*l-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,h=a(n/2),d=a(i/2),f=a(o/2),l=c(n/2),u=c(i/2),g=c(o/2);switch(r){case"XYZ":this._x=l*d*f+h*u*g,this._y=h*u*f-l*d*g,this._z=h*d*g+l*u*f,this._w=h*d*f-l*u*g;break;case"YXZ":this._x=l*d*f+h*u*g,this._y=h*u*f-l*d*g,this._z=h*d*g-l*u*f,this._w=h*d*f+l*u*g;break;case"ZXY":this._x=l*d*f-h*u*g,this._y=h*u*f+l*d*g,this._z=h*d*g+l*u*f,this._w=h*d*f-l*u*g;break;case"ZYX":this._x=l*d*f-h*u*g,this._y=h*u*f+l*d*g,this._z=h*d*g-l*u*f,this._w=h*d*f+l*u*g;break;case"YZX":this._x=l*d*f+h*u*g,this._y=h*u*f+l*d*g,this._z=h*d*g-l*u*f,this._w=h*d*f-l*u*g;break;case"XZY":this._x=l*d*f-h*u*g,this._y=h*u*f-l*d*g,this._z=h*d*g+l*u*f,this._w=h*d*f+l*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],c=e[9],h=e[2],d=e[6],f=e[10],l=n+a+f;if(l>0){const u=.5/Math.sqrt(l+1);this._w=.25/u,this._x=(d-c)*u,this._y=(o-h)*u,this._z=(r-i)*u}else if(n>a&&n>f){const u=2*Math.sqrt(1+n-a-f);this._w=(d-c)/u,this._x=.25*u,this._y=(i+r)/u,this._z=(o+h)/u}else if(a>f){const u=2*Math.sqrt(1+a-n-f);this._w=(o-h)/u,this._x=(i+r)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+f-n-a);this._w=(r-i)/u,this._x=(o+h)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+r*a+i*h-o*c,this._y=i*d+r*c+o*a-n*h,this._z=o*d+r*h+n*c-i*a,this._w=r*d-n*a-i*c-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const u=1-e;return this._w=u*r+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,a),f=Math.sin((1-e)*d)/h,l=Math.sin(e*d)/h;return this._w=r*f+this._w*l,this._x=n*f+this._x*l,this._y=i*f+this._y*l,this._z=o*f+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(o),n*Math.cos(o),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Br.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Br.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,c=t.w,h=2*(r*i-a*n),d=2*(a*e-o*i),f=2*(o*n-r*e);return this.x=e+c*h+r*f-a*d,this.y=n+c*d+a*h-o*f,this.z=i+c*f+o*d-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=i*c-o*a,this.y=o*r-n*c,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new N,Br=new Ji;class Sn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,Qe):Qe.fromBufferAttribute(o,r),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(t.matrixWorld),this.union(Qi)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),ts.subVectors(this.max,Ui),si.subVectors(t.a,Ui),oi.subVectors(t.b,Ui),ri.subVectors(t.c,Ui),bn.subVectors(oi,si),En.subVectors(ri,oi),Bn.subVectors(si,ri);let e=[0,-bn.z,bn.y,0,-En.z,En.y,0,-Bn.z,Bn.y,bn.z,0,-bn.x,En.z,0,-En.x,Bn.z,0,-Bn.x,-bn.y,bn.x,0,-En.y,En.x,0,-Bn.y,Bn.x,0];return!eo(e,si,oi,ri,ts)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,si,oi,ri,ts))?!1:(es.crossVectors(bn,En),e=[es.x,es.y,es.z],eo(e,si,oi,ri,ts))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new N,new N,new N,new N,new N,new N,new N,new N],Qe=new N,Qi=new Sn,si=new N,oi=new N,ri=new N,bn=new N,En=new N,Bn=new N,Ui=new N,ts=new N,es=new N,kn=new N;function eo(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){kn.fromArray(s,o);const a=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),c=t.dot(kn),h=e.dot(kn),d=n.dot(kn);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>a)return!1}return!0}const zl=new Sn,Ni=new N,no=new N;class Fs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zl.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ni.subVectors(t,this.center);const e=Ni.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ni.copy(t.center).add(no)),this.expandByPoint(Ni.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new N,io=new N,ns=new N,Tn=new N,so=new N,is=new N,oo=new N;class Ja{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){io.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),Tn.copy(this.origin).sub(io);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ns),a=Tn.dot(this.direction),c=-Tn.dot(ns),h=Tn.lengthSq(),d=Math.abs(1-r*r);let f,l,u,g;if(d>0)if(f=r*c-a,l=r*a-c,g=o*d,f>=0)if(l>=-g)if(l<=g){const x=1/d;f*=x,l*=x,u=f*(f+r*l+2*a)+l*(r*f+l+2*c)+h}else l=o,f=Math.max(0,-(r*l+a)),u=-f*f+l*(l+2*c)+h;else l=-o,f=Math.max(0,-(r*l+a)),u=-f*f+l*(l+2*c)+h;else l<=-g?(f=Math.max(0,-(-r*o+a)),l=f>0?-o:Math.min(Math.max(-o,-c),o),u=-f*f+l*(l+2*c)+h):l<=g?(f=0,l=Math.min(Math.max(-o,-c),o),u=l*(l+2*c)+h):(f=Math.max(0,-(r*o+a)),l=f>0?o:Math.min(Math.max(-o,-c),o),u=-f*f+l*(l+2*c)+h);else l=r>0?-o:o,f=Math.max(0,-(r*l+a)),u=-f*f+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(io).addScaledVector(ns,l),u}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,c;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,l=this.origin;return h>=0?(n=(t.min.x-l.x)*h,i=(t.max.x-l.x)*h):(n=(t.max.x-l.x)*h,i=(t.min.x-l.x)*h),d>=0?(o=(t.min.y-l.y)*d,r=(t.max.y-l.y)*d):(o=(t.max.y-l.y)*d,r=(t.min.y-l.y)*d),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),f>=0?(a=(t.min.z-l.z)*f,c=(t.max.z-l.z)*f):(a=(t.max.z-l.z)*f,c=(t.min.z-l.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,o){so.subVectors(e,t),is.subVectors(n,t),oo.crossVectors(so,is);let r=this.direction.dot(oo),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Tn.subVectors(this.origin,t);const c=a*this.direction.dot(is.crossVectors(Tn,is));if(c<0)return null;const h=a*this.direction.dot(so.cross(Tn));if(h<0||c+h>r)return null;const d=-a*Tn.dot(oo);return d<0?null:this.at(d/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,i,o,r,a,c,h,d,f,l,u,g,x,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,c,h,d,f,l,u,g,x,m)}set(t,e,n,i,o,r,a,c,h,d,f,l,u,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=h,p[6]=d,p[10]=f,p[14]=l,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ai.setFromMatrixColumn(t,0).length(),o=1/ai.setFromMatrixColumn(t,1).length(),r=1/ai.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(i),h=Math.sin(i),d=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const l=r*d,u=r*f,g=a*d,x=a*f;e[0]=c*d,e[4]=-c*f,e[8]=h,e[1]=u+g*h,e[5]=l-x*h,e[9]=-a*c,e[2]=x-l*h,e[6]=g+u*h,e[10]=r*c}else if(t.order==="YXZ"){const l=c*d,u=c*f,g=h*d,x=h*f;e[0]=l+x*a,e[4]=g*a-u,e[8]=r*h,e[1]=r*f,e[5]=r*d,e[9]=-a,e[2]=u*a-g,e[6]=x+l*a,e[10]=r*c}else if(t.order==="ZXY"){const l=c*d,u=c*f,g=h*d,x=h*f;e[0]=l-x*a,e[4]=-r*f,e[8]=g+u*a,e[1]=u+g*a,e[5]=r*d,e[9]=x-l*a,e[2]=-r*h,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const l=r*d,u=r*f,g=a*d,x=a*f;e[0]=c*d,e[4]=g*h-u,e[8]=l*h+x,e[1]=c*f,e[5]=x*h+l,e[9]=u*h-g,e[2]=-h,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const l=r*c,u=r*h,g=a*c,x=a*h;e[0]=c*d,e[4]=x-l*f,e[8]=g*f+u,e[1]=f,e[5]=r*d,e[9]=-a*d,e[2]=-h*d,e[6]=u*f+g,e[10]=l-x*f}else if(t.order==="XZY"){const l=r*c,u=r*h,g=a*c,x=a*h;e[0]=c*d,e[4]=-f,e[8]=h*d,e[1]=l*f+x,e[5]=r*d,e[9]=u*f-g,e[2]=g*f-u,e[6]=a*d,e[10]=x*f+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vl,t,Hl)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),An.crossVectors(n,Ye),An.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),An.crossVectors(n,Ye)),An.normalize(),ss.crossVectors(Ye,An),i[0]=An.x,i[4]=ss.x,i[8]=Ye.x,i[1]=An.y,i[5]=ss.y,i[9]=Ye.y,i[2]=An.z,i[6]=ss.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],h=n[12],d=n[1],f=n[5],l=n[9],u=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],_=n[7],y=n[11],P=n[15],L=i[0],I=i[4],k=i[8],b=i[12],w=i[1],T=i[5],O=i[9],st=i[13],U=i[2],V=i[6],W=i[10],z=i[14],it=i[3],Z=i[7],H=i[11],$=i[15];return o[0]=r*L+a*w+c*U+h*it,o[4]=r*I+a*T+c*V+h*Z,o[8]=r*k+a*O+c*W+h*H,o[12]=r*b+a*st+c*z+h*$,o[1]=d*L+f*w+l*U+u*it,o[5]=d*I+f*T+l*V+u*Z,o[9]=d*k+f*O+l*W+u*H,o[13]=d*b+f*st+l*z+u*$,o[2]=g*L+x*w+m*U+p*it,o[6]=g*I+x*T+m*V+p*Z,o[10]=g*k+x*O+m*W+p*H,o[14]=g*b+x*st+m*z+p*$,o[3]=v*L+_*w+y*U+P*it,o[7]=v*I+_*T+y*V+P*Z,o[11]=v*k+_*O+y*W+P*H,o[15]=v*b+_*st+y*z+P*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],c=t[9],h=t[13],d=t[2],f=t[6],l=t[10],u=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+o*c*f-i*h*f-o*a*l+n*h*l+i*a*u-n*c*u)+x*(+e*c*u-e*h*l+o*r*l-i*r*u+i*h*d-o*c*d)+m*(+e*h*f-e*a*u-o*r*f+n*r*u+o*a*d-n*h*d)+p*(-i*a*d-e*c*f+e*a*l+i*r*f-n*r*l+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],c=t[6],h=t[7],d=t[8],f=t[9],l=t[10],u=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=f*m*h-x*l*h+x*c*u-a*m*u-f*c*p+a*l*p,_=g*l*h-d*m*h-g*c*u+r*m*u+d*c*p-r*l*p,y=d*x*h-g*f*h+g*a*u-r*x*u-d*a*p+r*f*p,P=g*f*c-d*x*c-g*a*l+r*x*l+d*a*m-r*f*m,L=e*v+n*_+i*y+o*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=v*I,t[1]=(x*l*o-f*m*o-x*i*u+n*m*u+f*i*p-n*l*p)*I,t[2]=(a*m*o-x*c*o+x*i*h-n*m*h-a*i*p+n*c*p)*I,t[3]=(f*c*o-a*l*o-f*i*h+n*l*h+a*i*u-n*c*u)*I,t[4]=_*I,t[5]=(d*m*o-g*l*o+g*i*u-e*m*u-d*i*p+e*l*p)*I,t[6]=(g*c*o-r*m*o-g*i*h+e*m*h+r*i*p-e*c*p)*I,t[7]=(r*l*o-d*c*o+d*i*h-e*l*h-r*i*u+e*c*u)*I,t[8]=y*I,t[9]=(g*f*o-d*x*o-g*n*u+e*x*u+d*n*p-e*f*p)*I,t[10]=(r*x*o-g*a*o+g*n*h-e*x*h-r*n*p+e*a*p)*I,t[11]=(d*a*o-r*f*o-d*n*h+e*f*h+r*n*u-e*a*u)*I,t[12]=P*I,t[13]=(d*x*i-g*f*i+g*n*l-e*x*l-d*n*m+e*f*m)*I,t[14]=(g*a*i-r*x*i-g*n*c+e*x*c+r*n*m-e*a*m)*I,t[15]=(r*f*i-d*a*i+d*n*c-e*f*c-r*n*l+e*a*l)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,h=o*r,d=o*a;return this.set(h*r+n,h*a-i*c,h*c+i*a,0,h*a+i*c,d*a+n,d*c-i*r,0,h*c-i*a,d*c+i*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,h=o+o,d=r+r,f=a+a,l=o*h,u=o*d,g=o*f,x=r*d,m=r*f,p=a*f,v=c*h,_=c*d,y=c*f,P=n.x,L=n.y,I=n.z;return i[0]=(1-(x+p))*P,i[1]=(u+y)*P,i[2]=(g-_)*P,i[3]=0,i[4]=(u-y)*L,i[5]=(1-(l+p))*L,i[6]=(m+v)*L,i[7]=0,i[8]=(g+_)*I,i[9]=(m-v)*I,i[10]=(1-(l+x))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=ai.set(i[0],i[1],i[2]).length();const r=ai.set(i[4],i[5],i[6]).length(),a=ai.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const h=1/o,d=1/r,f=1/a;return tn.elements[0]*=h,tn.elements[1]*=h,tn.elements[2]*=h,tn.elements[4]*=d,tn.elements[5]*=d,tn.elements[6]*=d,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,e.setFromRotationMatrix(tn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=xn){const c=this.elements,h=2*o/(e-t),d=2*o/(n-i),f=(e+t)/(e-t),l=(n+i)/(n-i);let u,g;if(a===xn)u=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Cs)u=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=xn){const c=this.elements,h=1/(e-t),d=1/(n-i),f=1/(r-o),l=(e+t)*h,u=(n+i)*d;let g,x;if(a===xn)g=(r+o)*f,x=-2*f;else if(a===Cs)g=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ai=new N,tn=new ye,Vl=new N(0,0,0),Hl=new N(1,1,1),An=new N,ss=new N,Ye=new N,kr=new ye,zr=new Ji;class Os{constructor(t=0,e=0,n=0,i=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],c=i[1],h=i[5],d=i[9],f=i[2],l=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(l,u),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zr.setFromEuler(this),this.setFromQuaternion(zr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wl=0;const Vr=new N,ci=new Ji,gn=new ye,os=new N,Fi=new N,Xl=new N,ql=new Ji,Hr=new N(1,0,0),Wr=new N(0,1,0),Xr=new N(0,0,1),Yl={type:"added"},Zl={type:"removed"};class Ae extends Pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=ei(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new N,e=new Os,n=new Ji,i=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ye},normalMatrix:{value:new ae}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(Hr,t)}rotateY(t){return this.rotateOnAxis(Wr,t)}rotateZ(t){return this.rotateOnAxis(Xr,t)}translateOnAxis(t,e){return Vr.copy(t).applyQuaternion(this.quaternion),this.position.add(Vr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hr,t)}translateY(t){return this.translateOnAxis(Wr,t)}translateZ(t){return this.translateOnAxis(Xr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?os.copy(t):os.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Fi,os,this.up):gn.lookAt(os,Fi,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(gn),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,Xl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++){const a=i[o];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,h=this.material.length;c<h;c++)a.push(o(t.materials,this.material[c]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),h=r(t.textures),d=r(t.images),f=r(t.shapes),l=r(t.skeletons),u=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),l.length>0&&(n.skeletons=l),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const c=[];for(const h in a){const d=a[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ae.DEFAULT_UP=new N(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new N,_n=new N,ro=new N,Mn=new N,li=new N,hi=new N,qr=new N,ao=new N,co=new N,lo=new N;let rs=!1;class nn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){en.subVectors(i,e),_n.subVectors(n,e),ro.subVectors(t,e);const r=en.dot(en),a=en.dot(_n),c=en.dot(ro),h=_n.dot(_n),d=_n.dot(ro),f=r*h-a*a;if(f===0)return o.set(0,0,0),null;const l=1/f,u=(h*c-a*d)*l,g=(r*d-a*c)*l;return o.set(1-u-g,g,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,i,o,r,a,c){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),this.getInterpolation(t,e,n,i,o,r,a,c)}static getInterpolation(t,e,n,i,o,r,a,c){return this.getBarycoord(t,e,n,i,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Mn.x),c.addScaledVector(r,Mn.y),c.addScaledVector(a,Mn.z),c)}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),_n.subVectors(t,e),en.cross(_n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),en.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,o){return rs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),rs=!0),nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}getInterpolation(t,e,n,i,o){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;li.subVectors(i,n),hi.subVectors(o,n),ao.subVectors(t,n);const c=li.dot(ao),h=hi.dot(ao);if(c<=0&&h<=0)return e.copy(n);co.subVectors(t,i);const d=li.dot(co),f=hi.dot(co);if(d>=0&&f<=d)return e.copy(i);const l=c*f-d*h;if(l<=0&&c>=0&&d<=0)return r=c/(c-d),e.copy(n).addScaledVector(li,r);lo.subVectors(t,o);const u=li.dot(lo),g=hi.dot(lo);if(g>=0&&u<=g)return e.copy(o);const x=u*h-c*g;if(x<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(hi,a);const m=d*g-u*f;if(m<=0&&f-d>=0&&u-g>=0)return qr.subVectors(o,i),a=(f-d)/(f-d+(u-g)),e.copy(i).addScaledVector(qr,a);const p=1/(m+x+l);return r=x*p,a=l*p,e.copy(n).addScaledVector(li,r).addScaledVector(hi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $a={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},as={h:0,s:0,l:0};function ho(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=zo(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ho(r,o,t+1/3),this.g=ho(r,o,t),this.b=ho(r,o,t-1/3)}return me.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=$a[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yi(t.r),this.g=yi(t.g),this.b=yi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return me.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ue(Be.r*255,0,255))*65536+Math.round(Ue(Be.g*255,0,255))*256+Math.round(Ue(Be.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,o=Be.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let c,h;const d=(a+r)/2;if(a===r)c=0,h=0;else{const f=r-a;switch(h=d<=.5?f/(r+a):f/(2-r-a),r){case n:c=(i-o)/f+(i<o?6:0);break;case i:c=(o-n)/f+2;break;case o:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ne){me.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(as);const n=ki(Rn.h,as.h,e),i=ki(Rn.s,as.s,e),o=ki(Rn.l,as.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new ce;ce.NAMES=$a;let Kl=0;class Ci extends Pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ei(),this.name="",this.type="Material",this.blending=Si,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Ro,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ir,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ir&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class he extends Ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new N,cs=new It;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)cs.fromBufferAttribute(this,e),cs.applyMatrix3(t),this.setXY(e,cs.x,cs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),o=ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dr&&(t.usage=this.usage),t}}class Qa extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tc extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jl=0;const Je=new ye,uo=new Ae,di=new N,Ze=new Sn,Oi=new Sn,De=new N;class Fe extends Pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=ei(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qa(t)?tc:Qa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ae().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Ze.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Oi.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(Ze.min,Oi.min),Ze.expandByPoint(De),De.addVectors(Ze.max,Oi.max),Ze.expandByPoint(De)):(Ze.expandByPoint(Oi.min),Ze.expandByPoint(Oi.max))}Ze.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)De.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(De));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)De.fromBufferAttribute(a,h),c&&(di.fromBufferAttribute(t,h),De.add(di)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,o=e.normal.array,r=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,h=[],d=[];for(let w=0;w<a;w++)h[w]=new N,d[w]=new N;const f=new N,l=new N,u=new N,g=new It,x=new It,m=new It,p=new N,v=new N;function _(w,T,O){f.fromArray(i,w*3),l.fromArray(i,T*3),u.fromArray(i,O*3),g.fromArray(r,w*2),x.fromArray(r,T*2),m.fromArray(r,O*2),l.sub(f),u.sub(f),x.sub(g),m.sub(g);const st=1/(x.x*m.y-m.x*x.y);isFinite(st)&&(p.copy(l).multiplyScalar(m.y).addScaledVector(u,-x.y).multiplyScalar(st),v.copy(u).multiplyScalar(x.x).addScaledVector(l,-m.x).multiplyScalar(st),h[w].add(p),h[T].add(p),h[O].add(p),d[w].add(v),d[T].add(v),d[O].add(v))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let w=0,T=y.length;w<T;++w){const O=y[w],st=O.start,U=O.count;for(let V=st,W=st+U;V<W;V+=3)_(n[V+0],n[V+1],n[V+2])}const P=new N,L=new N,I=new N,k=new N;function b(w){I.fromArray(o,w*3),k.copy(I);const T=h[w];P.copy(T),P.sub(I.multiplyScalar(I.dot(T))).normalize(),L.crossVectors(k,T);const st=L.dot(d[w])<0?-1:1;c[w*4]=P.x,c[w*4+1]=P.y,c[w*4+2]=P.z,c[w*4+3]=st}for(let w=0,T=y.length;w<T;++w){const O=y[w],st=O.start,U=O.count;for(let V=st,W=st+U;V<W;V+=3)b(n[V+0]),b(n[V+1]),b(n[V+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,u=n.count;l<u;l++)n.setXYZ(l,0,0,0);const i=new N,o=new N,r=new N,a=new N,c=new N,h=new N,d=new N,f=new N;if(t)for(let l=0,u=t.count;l<u;l+=3){const g=t.getX(l+0),x=t.getX(l+1),m=t.getX(l+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),d.subVectors(r,o),f.subVectors(i,o),d.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,m),a.add(d),c.add(d),h.add(d),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,u=e.count;l<u;l+=3)i.fromBufferAttribute(e,l+0),o.fromBufferAttribute(e,l+1),r.fromBufferAttribute(e,l+2),d.subVectors(r,o),f.subVectors(i,o),d.cross(f),n.setXYZ(l+0,d.x,d.y,d.z),n.setXYZ(l+1,d.x,d.y,d.z),n.setXYZ(l+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,c){const h=a.array,d=a.itemSize,f=a.normalized,l=new h.constructor(c.length*d);let u=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*d;for(let p=0;p<d;p++)l[g++]=h[u++]}return new hn(l,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],h=t(c,n);e.setAttribute(a,h)}const o=this.morphAttributes;for(const a in o){const c=[],h=o[a];for(let d=0,f=h.length;d<f;d++){const l=h[d],u=t(l,n);c.push(u)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const h=r[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let f=0,l=h.length;f<l;f++){const u=h[f];d.push(u.toJSON(t.data))}d.length>0&&(i[c]=d,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(e))}const o=t.morphAttributes;for(const h in o){const d=[],f=o[h];for(let l=0,u=f.length;l<u;l++)d.push(f[l].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,d=r.length;h<d;h++){const f=r[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yr=new ye,zn=new Ja,ls=new Fs,Zr=new N,ui=new N,fi=new N,pi=new N,fo=new N,hs=new N,ds=new It,us=new It,fs=new It,Kr=new N,Jr=new N,jr=new N,ps=new N,ms=new N;class M extends Ae{constructor(t=new Fe,e=new he){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){hs.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const d=a[c],f=o[c];d!==0&&(fo.fromBufferAttribute(f,t),r?hs.addScaledVector(fo,d):hs.addScaledVector(fo.sub(e),d))}e.add(hs)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(o),zn.copy(t.ray).recast(t.near),!(ls.containsPoint(zn.origin)===!1&&(zn.intersectSphere(ls,Zr)===null||zn.origin.distanceToSquared(Zr)>(t.far-t.near)**2))&&(Yr.copy(o).invert(),zn.copy(t.ray).applyMatrix4(Yr),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,zn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,h=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,l=o.groups,u=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=l.length;g<x;g++){const m=l[g],p=r[m.materialIndex],v=Math.max(m.start,u.start),_=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,P=_;y<P;y+=3){const L=a.getX(y),I=a.getX(y+1),k=a.getX(y+2);i=gs(this,p,t,n,h,d,f,L,I,k),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);i=gs(this,r,t,n,h,d,f,v,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,x=l.length;g<x;g++){const m=l[g],p=r[m.materialIndex],v=Math.max(m.start,u.start),_=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let y=v,P=_;y<P;y+=3){const L=y,I=y+1,k=y+2;i=gs(this,p,t,n,h,d,f,L,I,k),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){const v=m,_=m+1,y=m+2;i=gs(this,r,t,n,h,d,f,v,_,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function jl(s,t,e,n,i,o,r,a){let c;if(t.side===He?c=n.intersectTriangle(r,o,i,!0,a):c=n.intersectTriangle(i,o,r,t.side===Nn,a),c===null)return null;ms.copy(a),ms.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(ms);return h<e.near||h>e.far?null:{distance:h,point:ms.clone(),object:s}}function gs(s,t,e,n,i,o,r,a,c,h){s.getVertexPosition(a,ui),s.getVertexPosition(c,fi),s.getVertexPosition(h,pi);const d=jl(s,t,e,n,ui,fi,pi,ps);if(d){i&&(ds.fromBufferAttribute(i,a),us.fromBufferAttribute(i,c),fs.fromBufferAttribute(i,h),d.uv=nn.getInterpolation(ps,ui,fi,pi,ds,us,fs,new It)),o&&(ds.fromBufferAttribute(o,a),us.fromBufferAttribute(o,c),fs.fromBufferAttribute(o,h),d.uv1=nn.getInterpolation(ps,ui,fi,pi,ds,us,fs,new It),d.uv2=d.uv1),r&&(Kr.fromBufferAttribute(r,a),Jr.fromBufferAttribute(r,c),jr.fromBufferAttribute(r,h),d.normal=nn.getInterpolation(ps,ui,fi,pi,Kr,Jr,jr,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:c,c:h,normal:new N,materialIndex:0};nn.getNormal(ui,fi,pi,f.normal),d.face=f}return d}class X extends Fe{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const c=[],h=[],d=[],f=[];let l=0,u=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function g(x,m,p,v,_,y,P,L,I,k,b){const w=y/I,T=P/k,O=y/2,st=P/2,U=L/2,V=I+1,W=k+1;let z=0,it=0;const Z=new N;for(let H=0;H<W;H++){const $=H*T-st;for(let J=0;J<V;J++){const K=J*w-O;Z[x]=K*v,Z[m]=$*_,Z[p]=U,h.push(Z.x,Z.y,Z.z),Z[x]=0,Z[m]=0,Z[p]=L>0?1:-1,d.push(Z.x,Z.y,Z.z),f.push(J/I),f.push(1-H/k),z+=1}}for(let H=0;H<k;H++)for(let $=0;$<I;$++){const J=l+$+V*H,K=l+$+V*(H+1),j=l+($+1)+V*(H+1),rt=l+($+1)+V*H;c.push(J,K,rt),c.push(K,j,rt),it+=6}a.addGroup(u,it,b),u+=it,l+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new X(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const n=Ri(s[e]);for(const i in n)t[i]=n[i]}return t}function $l(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ec(s){return s.getRenderTarget()===null?s.outputColorSpace:me.workingColorSpace}const Ql={clone:Ri,merge:ze};var th=`void main() {
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
			`},i=new X(5,5,5),o=new $n({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:In});o.uniforms.tEquirect.value=e;const r=new M(i,o),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=je),new nh(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const po=new N,sh=new N,oh=new ae;class Hn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=po.subVectors(n,e).cross(sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oh.getNormalMatrix(t),i=this.coplanarPoint(po).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vn=new Fs,_s=new N;class Vo{constructor(t=new Hn,e=new Hn,n=new Hn,i=new Hn,o=new Hn,r=new Hn){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],c=i[3],h=i[4],d=i[5],f=i[6],l=i[7],u=i[8],g=i[9],x=i[10],m=i[11],p=i[12],v=i[13],_=i[14],y=i[15];if(n[0].setComponents(c-o,l-h,m-u,y-p).normalize(),n[1].setComponents(c+o,l+h,m+u,y+p).normalize(),n[2].setComponents(c+r,l+d,m+g,y+v).normalize(),n[3].setComponents(c-r,l-d,m-g,y-v).normalize(),n[4].setComponents(c-a,l-f,m-x,y-_).normalize(),e===xn)n[5].setComponents(c+a,l+f,m+x,y+_).normalize();else if(e===Cs)n[5].setComponents(a,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vn)}intersectsSprite(t){return Vn.center.set(0,0,0),Vn.radius=.7071067811865476,Vn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(_s.x=i.normal.x>0?t.max.x:t.min.x,_s.y=i.normal.y>0?t.max.y:t.min.y,_s.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sc(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function rh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(h,d){const f=h.array,l=h.usage,u=f.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,f,l),h.onUploadCallback();let x;if(f instanceof Float32Array)x=s.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)x=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)x=s.SHORT;else if(f instanceof Uint32Array)x=s.UNSIGNED_INT;else if(f instanceof Int32Array)x=s.INT;else if(f instanceof Int8Array)x=s.BYTE;else if(f instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:x,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:u}}function o(h,d,f){const l=d.array,u=d._updateRange,g=d.updateRanges;if(s.bindBuffer(f,h),u.count===-1&&g.length===0&&s.bufferSubData(f,0,l),g.length!==0){for(let x=0,m=g.length;x<m;x++){const p=g[x];e?s.bufferSubData(f,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count):s.bufferSubData(f,p.start*l.BYTES_PER_ELEMENT,l.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}u.count!==-1&&(e?s.bufferSubData(f,u.offset*l.BYTES_PER_ELEMENT,l,u.offset,u.count):s.bufferSubData(f,u.offset*l.BYTES_PER_ELEMENT,l.subarray(u.offset,u.offset+u.count)),u.count=-1),d.onUploadCallback()}function r(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(s.deleteBuffer(d.buffer),n.delete(h))}function c(h,d){if(h.isGLBufferAttribute){const l=n.get(h);(!l||l.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,i(h,d));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,h,d),f.version=h.version}}return{get:r,remove:a,update:c}}class Kt extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(i),h=a+1,d=c+1,f=t/a,l=e/c,u=[],g=[],x=[],m=[];for(let p=0;p<d;p++){const v=p*l-r;for(let _=0;_<h;_++){const y=_*f-o;g.push(y,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){const _=v+h*p,y=v+h*(p+1),P=v+1+h*(p+1),L=v+1+h*p;u.push(_,y,L),u.push(y,P,L)}this.setIndex(u),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.widthSegments,t.heightSegments)}}var ah=`#ifdef USE_ALPHAHASH
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
}`,se={alphahash_fragment:ah,alphahash_pars_fragment:ch,alphamap_fragment:lh,alphamap_pars_fragment:hh,alphatest_fragment:dh,alphatest_pars_fragment:uh,aomap_fragment:fh,aomap_pars_fragment:ph,batching_pars_vertex:mh,batching_vertex:gh,begin_vertex:_h,beginnormal_vertex:Mh,bsdfs:vh,iridescence_fragment:xh,bumpmap_pars_fragment:wh,clipping_planes_fragment:Sh,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:Eh,color_fragment:Th,color_pars_fragment:Ah,color_pars_vertex:Rh,color_vertex:Ph,common:Ch,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Dh,displacementmap_vertex:Uh,emissivemap_fragment:Nh,emissivemap_pars_fragment:Fh,colorspace_fragment:Oh,colorspace_pars_fragment:Gh,envmap_fragment:Bh,envmap_common_pars_fragment:kh,envmap_pars_fragment:zh,envmap_pars_vertex:Vh,envmap_physical_pars_fragment:td,envmap_vertex:Hh,fog_vertex:Wh,fog_pars_vertex:Xh,fog_fragment:qh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Zh,lightmap_fragment:Kh,lightmap_pars_fragment:Jh,lights_lambert_fragment:jh,lights_lambert_pars_fragment:$h,lights_pars_begin:Qh,lights_toon_fragment:ed,lights_toon_pars_fragment:nd,lights_phong_fragment:id,lights_phong_pars_fragment:sd,lights_physical_fragment:od,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:cd,lights_fragment_end:ld,logdepthbuf_fragment:hd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:pd,map_pars_fragment:md,map_particle_fragment:gd,map_particle_pars_fragment:_d,metalnessmap_fragment:Md,metalnessmap_pars_fragment:vd,morphcolor_vertex:xd,morphnormal_vertex:wd,morphtarget_pars_vertex:Sd,morphtarget_vertex:yd,normal_fragment_begin:bd,normal_fragment_maps:Ed,normal_pars_fragment:Td,normal_pars_vertex:Ad,normal_vertex:Rd,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Dd,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Gd,dithering_pars_fragment:Bd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:Zd,skinnormal_vertex:Kd,specularmap_fragment:Jd,specularmap_pars_fragment:jd,tonemapping_fragment:$d,tonemapping_pars_fragment:Qd,transmission_fragment:tu,transmission_pars_fragment:eu,uv_pars_fragment:nu,uv_pars_vertex:iu,uv_vertex:su,worldpos_vertex:ou,background_vert:ru,background_frag:au,backgroundCube_vert:cu,backgroundCube_frag:lu,cube_vert:hu,cube_frag:du,depth_vert:uu,depth_frag:fu,distanceRGBA_vert:pu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:_u,linedashed_vert:Mu,linedashed_frag:vu,meshbasic_vert:xu,meshbasic_frag:wu,meshlambert_vert:Su,meshlambert_frag:yu,meshmatcap_vert:bu,meshmatcap_frag:Eu,meshnormal_vert:Tu,meshnormal_frag:Au,meshphong_vert:Ru,meshphong_frag:Pu,meshphysical_vert:Cu,meshphysical_frag:Lu,meshtoon_vert:Iu,meshtoon_frag:Du,points_vert:Uu,points_frag:Nu,shadow_vert:Fu,shadow_frag:Ou,sprite_vert:Gu,sprite_frag:Bu},Dt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},cn={basic:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ce(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:ze([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:ze([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:ze([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new ce(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:ze([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:ze([Dt.points,Dt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:ze([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:ze([Dt.common,Dt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:ze([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:ze([Dt.sprite,Dt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:ze([Dt.common,Dt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:ze([Dt.lights,Dt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};cn.physical={uniforms:ze([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Ms={r:0,b:0,g:0};function ku(s,t,e,n,i,o,r){const a=new ce(0);let c=o===!0?0:1,h,d,f=null,l=0,u=null;function g(m,p){let v=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?x(a,c):_&&_.isColor&&(x(_,1),v=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,r):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Us)?(d===void 0&&(d=new M(new X(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ri(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=me.getTransfer(_.colorSpace)!==Me,(f!==_||l!==_.version||u!==s.toneMapping)&&(d.material.needsUpdate=!0,f=_,l=_.version,u=s.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new M(new Kt(2,2),new $n({name:"BackgroundMaterial",uniforms:Ri(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=me.getTransfer(_.colorSpace)!==Me,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||l!==_.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=_,l=_.version,u=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function x(m,p){m.getRGB(Ms,ec(s)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,p,r)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function zu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||o!==null,a={},c=m(null);let h=c,d=!1;function f(U,V,W,z,it){let Z=!1;if(r){const H=x(z,W,V);h!==H&&(h=H,u(h.object)),Z=p(U,z,W,it),Z&&v(U,z,W,it)}else{const H=V.wireframe===!0;(h.geometry!==z.id||h.program!==W.id||h.wireframe!==H)&&(h.geometry=z.id,h.program=W.id,h.wireframe=H,Z=!0)}it!==null&&e.update(it,s.ELEMENT_ARRAY_BUFFER),(Z||d)&&(d=!1,k(U,V,W,z),it!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(it).buffer))}function l(){return n.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function u(U){return n.isWebGL2?s.bindVertexArray(U):o.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?s.deleteVertexArray(U):o.deleteVertexArrayOES(U)}function x(U,V,W){const z=W.wireframe===!0;let it=a[U.id];it===void 0&&(it={},a[U.id]=it);let Z=it[V.id];Z===void 0&&(Z={},it[V.id]=Z);let H=Z[z];return H===void 0&&(H=m(l()),Z[z]=H),H}function m(U){const V=[],W=[],z=[];for(let it=0;it<i;it++)V[it]=0,W[it]=0,z[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:z,object:U,attributes:{},index:null}}function p(U,V,W,z){const it=h.attributes,Z=V.attributes;let H=0;const $=W.getAttributes();for(const J in $)if($[J].location>=0){const j=it[J];let rt=Z[J];if(rt===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(rt=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(rt=U.instanceColor)),j===void 0||j.attribute!==rt||rt&&j.data!==rt.data)return!0;H++}return h.attributesNum!==H||h.index!==z}function v(U,V,W,z){const it={},Z=V.attributes;let H=0;const $=W.getAttributes();for(const J in $)if($[J].location>=0){let j=Z[J];j===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(j=U.instanceColor));const rt={};rt.attribute=j,j&&j.data&&(rt.data=j.data),it[J]=rt,H++}h.attributes=it,h.attributesNum=H,h.index=z}function _(){const U=h.newAttributes;for(let V=0,W=U.length;V<W;V++)U[V]=0}function y(U){P(U,0)}function P(U,V){const W=h.newAttributes,z=h.enabledAttributes,it=h.attributeDivisors;W[U]=1,z[U]===0&&(s.enableVertexAttribArray(U),z[U]=1),it[U]!==V&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,V),it[U]=V)}function L(){const U=h.newAttributes,V=h.enabledAttributes;for(let W=0,z=V.length;W<z;W++)V[W]!==U[W]&&(s.disableVertexAttribArray(W),V[W]=0)}function I(U,V,W,z,it,Z,H){H===!0?s.vertexAttribIPointer(U,V,W,it,Z):s.vertexAttribPointer(U,V,W,z,it,Z)}function k(U,V,W,z){if(n.isWebGL2===!1&&(U.isInstancedMesh||z.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const it=z.attributes,Z=W.getAttributes(),H=V.defaultAttributeValues;for(const $ in Z){const J=Z[$];if(J.location>=0){let K=it[$];if(K===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(K=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(K=U.instanceColor)),K!==void 0){const j=K.normalized,rt=K.itemSize,dt=e.get(K);if(dt===void 0)continue;const at=dt.buffer,yt=dt.type,Pt=dt.bytesPerElement,Q=n.isWebGL2===!0&&(yt===s.INT||yt===s.UNSIGNED_INT||K.gpuType===Fa);if(K.isInterleavedBufferAttribute){const ht=K.data,D=ht.stride,ft=K.offset;if(ht.isInstancedInterleavedBuffer){for(let ot=0;ot<J.locationSize;ot++)P(J.location+ot,ht.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let ot=0;ot<J.locationSize;ot++)y(J.location+ot);s.bindBuffer(s.ARRAY_BUFFER,at);for(let ot=0;ot<J.locationSize;ot++)I(J.location+ot,rt/J.locationSize,yt,j,D*Pt,(ft+rt/J.locationSize*ot)*Pt,Q)}else{if(K.isInstancedBufferAttribute){for(let ht=0;ht<J.locationSize;ht++)P(J.location+ht,K.meshPerAttribute);U.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ht=0;ht<J.locationSize;ht++)y(J.location+ht);s.bindBuffer(s.ARRAY_BUFFER,at);for(let ht=0;ht<J.locationSize;ht++)I(J.location+ht,rt/J.locationSize,yt,j,rt*Pt,rt/J.locationSize*ht*Pt,Q)}}else if(H!==void 0){const j=H[$];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(J.location,j);break;case 3:s.vertexAttrib3fv(J.location,j);break;case 4:s.vertexAttrib4fv(J.location,j);break;default:s.vertexAttrib1fv(J.location,j)}}}}L()}function b(){O();for(const U in a){const V=a[U];for(const W in V){const z=V[W];for(const it in z)g(z[it].object),delete z[it];delete V[W]}delete a[U]}}function w(U){if(a[U.id]===void 0)return;const V=a[U.id];for(const W in V){const z=V[W];for(const it in z)g(z[it].object),delete z[it];delete V[W]}delete a[U.id]}function T(U){for(const V in a){const W=a[V];if(W[U.id]===void 0)continue;const z=W[U.id];for(const it in z)g(z[it].object),delete z[it];delete W[U.id]}}function O(){st(),d=!0,h!==c&&(h=c,u(h.object))}function st(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:O,resetDefaultState:st,dispose:b,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:y,disableUnusedAttributes:L}}function Vu(s,t,e,n){const i=n.isWebGL2;let o;function r(d){o=d}function a(d,f){s.drawArrays(o,d,f),e.update(f,o,1)}function c(d,f,l){if(l===0)return;let u,g;if(i)u=s,g="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[g](o,d,f,l),e.update(f,o,l)}function h(d,f,l){if(l===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l;g++)this.render(d[g],f[g]);else{u.multiDrawArraysWEBGL(o,d,0,f,0,l);let g=0;for(let x=0;x<l;x++)g+=f[x];e.update(g,o,1)}}this.setMode=r,this.render=a,this.renderInstances=c,this.renderMultiDraw=h}function Hu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const c=o(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const h=r||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=l>0,y=r||t.has("OES_texture_float"),P=_&&y,L=r?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:r,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:o,precision:a,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:l,maxTextureSize:u,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:L}}function Wu(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new Hn,a=new ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,l){const u=f.length!==0||l||n!==0||i;return i=l,n=f.length,u},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,l){e=d(f,l,0)},this.setState=function(f,l,u){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||g===null||g.length===0||o&&!m)o?d(null):h();else{const v=o?0:n,_=v*4;let y=p.clippingState||null;c.value=y,y=d(g,l,_,u);for(let P=0;P!==_;++P)y[P]=e[P];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,l,u,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=u+x*4,v=l.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,y=u;_!==x;++_,y+=4)r.copy(f[_]).applyMatrix4(v,a),r.normal.toArray(m,y),m[y+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Xu(s){let t=new WeakMap;function e(r,a){return a===Po?r.mapping=bi:a===Co&&(r.mapping=Ei),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Po||a===Co)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const h=new ih(c.height/2);return h.fromEquirectangularTexture(s,r),t.set(r,h),r.addEventListener("dispose",i),e(h.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class oc extends nc{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,r=o+h*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vi=4,$r=[.125,.215,.35,.446,.526,.582],qn=20,mo=new oc,Qr=new ce;let go=null,_o=0,Mo=0;const Wn=(1+Math.sqrt(5))/2,_i=1/Wn,ta=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Wn,_i),new N(0,Wn,-_i),new N(_i,0,Wn),new N(-_i,0,Wn),new N(Wn,_i,0),new N(-Wn,_i,0)];class ea{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,_o,Mo),t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===Ei?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:qi,format:on,colorSpace:wn,depthBuffer:!1},i=na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=na(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qu(o)),this._blurMaterial=Yu(o,t,e)}return i}_compileMaterial(t){const e=new M(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,i){const a=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,l=d.toneMapping;d.getClearColor(Qr),d.toneMapping=Dn,d.autoClear=!1;const u=new he({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),g=new M(new X,u);let x=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,x=!0):(u.color.copy(Qr),x=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(h[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,h[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,h[p]));const _=this._cubeSize;vs(i,v*_,p>2?_:0,_,_),d.setRenderTarget(i),x&&d.render(g,a),d.render(t,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=l,d.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===bi||t.mapping===Ei;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ia());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new M(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;vs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=ta[(i-1)%ta.length];this._blur(t,i-1,i,o,r)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const c=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new M(this._lodPlanes[i],h),l=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*qn-1),x=o/g,m=isFinite(o)?1+Math.floor(d*x):qn;m>qn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const p=[];let v=0;for(let I=0;I<qn;++I){const k=I/x,b=Math.exp(-k*k/2);p.push(b),I===0?v+=b:I<m&&(v+=2*b)}for(let I=0;I<p.length;I++)p[I]=p[I]/v;l.envMap.value=t.texture,l.samples.value=m,l.weights.value=p,l.latitudinal.value=r==="latitudinal",a&&(l.poleAxis.value=a);const{_lodMax:_}=this;l.dTheta.value=g,l.mipInt.value=_-n;const y=this._sizeLods[i],P=3*y*(i>_-vi?i-_+vi:0),L=4*(this._cubeSize-y);vs(e,P,L,3*y,2*y),c.setRenderTarget(e),c.render(f,mo)}}function qu(s){const t=[],e=[],n=[];let i=s;const o=s-vi+1+$r.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let c=1/a;r>s-vi?c=$r[r-s+vi-1]:r===0&&(c=0),n.push(c);const h=1/(a-2),d=-h,f=1+h,l=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,g=6,x=3,m=2,p=1,v=new Float32Array(x*g*u),_=new Float32Array(m*g*u),y=new Float32Array(p*g*u);for(let L=0;L<u;L++){const I=L%3*2/3-1,k=L>2?0:-1,b=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];v.set(b,x*g*L),_.set(l,m*g*L);const w=[L,L,L,L,L,L];y.set(w,p*g*L)}const P=new Fe;P.setAttribute("position",new hn(v,x)),P.setAttribute("uv",new hn(_,m)),P.setAttribute("faceIndex",new hn(y,p)),t.push(P),i>vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function na(s,t,e){const n=new jn(s,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Yu(s,t,e){const n=new Float32Array(qn),i=new N(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ho(),fragmentShader:`

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
	`}function Zu(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,h=c===Po||c===Co,d=c===bi||c===Ei;if(h||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new ea(s)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(h&&f&&f.height>0||d&&f&&i(f)){e===null&&(e=new ea(s));const l=h?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,l),a.addEventListener("dispose",o),l.texture}else return null}}}return a}function i(a){let c=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&c++;return c===h}function o(a){const c=a.target;c.removeEventListener("dispose",o);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Ku(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ju(s,t,e,n){const i={},o=new WeakMap;function r(f){const l=f.target;l.index!==null&&t.remove(l.index);for(const g in l.attributes)t.remove(l.attributes[g]);for(const g in l.morphAttributes){const x=l.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}l.removeEventListener("dispose",r),delete i[l.id];const u=o.get(l);u&&(t.remove(u),o.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function a(f,l){return i[l.id]===!0||(l.addEventListener("dispose",r),i[l.id]=!0,e.memory.geometries++),l}function c(f){const l=f.attributes;for(const g in l)t.update(l[g],s.ARRAY_BUFFER);const u=f.morphAttributes;for(const g in u){const x=u[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],s.ARRAY_BUFFER)}}function h(f){const l=[],u=f.index,g=f.attributes.position;let x=0;if(u!==null){const v=u.array;x=u.version;for(let _=0,y=v.length;_<y;_+=3){const P=v[_+0],L=v[_+1],I=v[_+2];l.push(P,L,L,I,I,P)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const P=_+0,L=_+1,I=_+2;l.push(P,L,L,I,I,P)}}else return;const m=new(qa(l)?tc:Qa)(l,1);m.version=x;const p=o.get(f);p&&t.remove(p),o.set(f,m)}function d(f){const l=o.get(f);if(l){const u=f.index;u!==null&&l.version<u.version&&h(f)}else h(f);return o.get(f)}return{get:a,update:c,getWireframeAttribute:d}}function ju(s,t,e,n){const i=n.isWebGL2;let o;function r(u){o=u}let a,c;function h(u){a=u.type,c=u.bytesPerElement}function d(u,g){s.drawElements(o,g,a,u*c),e.update(g,o,1)}function f(u,g,x){if(x===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](o,g,a,u*c,x),e.update(g,o,x)}function l(u,g,x){if(x===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(u[p]/c,g[p]);else{m.multiDrawElementsWEBGL(o,g,0,a,u,0,x);let p=0;for(let v=0;v<x;v++)p+=g[v];e.update(p,o,1)}}this.setMode=r,this.setIndex=h,this.render=d,this.renderInstances=f,this.renderMultiDraw=l}function $u(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qu(s,t){return s[0]-t[0]}function tf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ef(s,t,e){const n={},i=new Float32Array(8),o=new WeakMap,r=new ve,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function c(h,d,f){const l=h.morphTargetInfluences;if(t.isWebGL2===!0){const g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let m=o.get(d);if(m===void 0||m.count!==x){let V=function(){st.dispose(),o.delete(d),d.removeEventListener("dispose",V)};var u=V;m!==void 0&&m.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let b=0;_===!0&&(b=1),y===!0&&(b=2),P===!0&&(b=3);let w=d.attributes.position.count*b,T=1;w>t.maxTextureSize&&(T=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const O=new Float32Array(w*T*4*x),st=new Ka(O,w,T,x);st.type=Cn,st.needsUpdate=!0;const U=b*4;for(let W=0;W<x;W++){const z=L[W],it=I[W],Z=k[W],H=w*T*4*W;for(let $=0;$<z.count;$++){const J=$*U;_===!0&&(r.fromBufferAttribute(z,$),O[H+J+0]=r.x,O[H+J+1]=r.y,O[H+J+2]=r.z,O[H+J+3]=0),y===!0&&(r.fromBufferAttribute(it,$),O[H+J+4]=r.x,O[H+J+5]=r.y,O[H+J+6]=r.z,O[H+J+7]=0),P===!0&&(r.fromBufferAttribute(Z,$),O[H+J+8]=r.x,O[H+J+9]=r.y,O[H+J+10]=r.z,O[H+J+11]=Z.itemSize===4?r.w:1)}}m={count:x,texture:st,size:new It(w,T)},o.set(d,m),d.addEventListener("dispose",V)}let p=0;for(let _=0;_<l.length;_++)p+=l[_];const v=d.morphTargetsRelative?1:1-p;f.getUniforms().setValue(s,"morphTargetBaseInfluence",v),f.getUniforms().setValue(s,"morphTargetInfluences",l),f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const g=l===void 0?0:l.length;let x=n[d.id];if(x===void 0||x.length!==g){x=[];for(let y=0;y<g;y++)x[y]=[y,0];n[d.id]=x}for(let y=0;y<g;y++){const P=x[y];P[0]=y,P[1]=l[y]}x.sort(tf);for(let y=0;y<8;y++)y<g&&x[y][1]?(a[y][0]=x[y][0],a[y][1]=x[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Qu);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let v=0;for(let y=0;y<8;y++){const P=a[y],L=P[0],I=P[1];L!==Number.MAX_SAFE_INTEGER&&I?(m&&d.getAttribute("morphTarget"+y)!==m[L]&&d.setAttribute("morphTarget"+y,m[L]),p&&d.getAttribute("morphNormal"+y)!==p[L]&&d.setAttribute("morphNormal"+y,p[L]),i[y]=I,v+=I):(m&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),p&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),i[y]=0)}const _=d.morphTargetsRelative?1:1-v;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function nf(s,t,e,n){let i=new WeakMap;function o(c){const h=n.render.frame,d=c.geometry,f=t.get(c,d);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return f}function r(){i=new WeakMap}function a(c){const h=c.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:r}}class rc extends Xe{constructor(t,e,n,i,o,r,a,c,h,d){if(d=d!==void 0?d:Kn,d!==Kn&&d!==Ti)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Kn&&(n=Pn),n===void 0&&d===Ti&&(n=Zn),super(null,i,o,r,a,c,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ac=new Xe,cc=new rc(1,1);cc.compareFunction=Xa;const lc=new Ka,hc=new kl,dc=new ic,oa=[],ra=[],aa=new Float32Array(16),ca=new Float32Array(9),la=new Float32Array(4);function Li(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=oa[i];if(o===void 0&&(o=new Float32Array(i),oa[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gs(s,t){let e=ra[t];e===void 0&&(e=new Int32Array(t),ra[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function cf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;la.set(n),s.uniformMatrix2fv(this.addr,!1,la),Ce(e,n)}}function lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;ca.set(n),s.uniformMatrix3fv(this.addr,!1,ca),Ce(e,n)}}function hf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Pe(e,n))return;aa.set(n),s.uniformMatrix4fv(this.addr,!1,aa),Ce(e,n)}}function df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function mf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const o=this.type===s.SAMPLER_2D_SHADOW?cc:ac;e.setTexture2D(t||o,i)}function xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hc,i)}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dc,i)}function Sf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lc,i)}function yf(s){switch(s){case 5126:return sf;case 35664:return of;case 35665:return rf;case 35666:return af;case 35674:return cf;case 35675:return lf;case 35676:return hf;case 5124:case 35670:return df;case 35667:case 35671:return uf;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return _f;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Sf}}function bf(s,t){s.uniform1fv(this.addr,t)}function Ef(s,t){const e=Li(t,this.size,2);s.uniform2fv(this.addr,e)}function Tf(s,t){const e=Li(t,this.size,3);s.uniform3fv(this.addr,e)}function Af(s,t){const e=Li(t,this.size,4);s.uniform4fv(this.addr,e)}function Rf(s,t){const e=Li(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pf(s,t){const e=Li(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cf(s,t){const e=Li(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Lf(s,t){s.uniform1iv(this.addr,t)}function If(s,t){s.uniform2iv(this.addr,t)}function Df(s,t){s.uniform3iv(this.addr,t)}function Uf(s,t){s.uniform4iv(this.addr,t)}function Nf(s,t){s.uniform1uiv(this.addr,t)}function Ff(s,t){s.uniform2uiv(this.addr,t)}function Of(s,t){s.uniform3uiv(this.addr,t)}function Gf(s,t){s.uniform4uiv(this.addr,t)}function Bf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||ac,o[r])}function kf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||hc,o[r])}function zf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||dc,o[r])}function Vf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Pe(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||lc,o[r])}function Hf(s){switch(s){case 5126:return bf;case 35664:return Ef;case 35665:return Tf;case 35666:return Af;case 35674:return Rf;case 35675:return Pf;case 35676:return Cf;case 5124:case 35670:return Lf;case 35667:case 35671:return If;case 35668:case 35672:return Df;case 35669:case 35673:return Uf;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Vf}}class Wf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class Xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hf(e.type)}}class qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function ha(s,t){s.seq.push(t),s.map[t.id]=t}function Yf(s,t,e){const n=s.name,i=n.length;for(vo.lastIndex=0;;){const o=vo.exec(n),r=vo.lastIndex;let a=o[1];const c=o[2]==="]",h=o[3];if(c&&(a=a|0),h===void 0||h==="["&&r+2===i){ha(e,h===void 0?new Wf(a,s,t):new Xf(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new qf(a),ha(e,f)),e=f}}}class Es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);Yf(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function da(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Zf=37297;let Kf=0;function Jf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}function jf(s){const t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(s);let n;switch(t===e?n="":t===Ps&&e===Rs?n="LinearDisplayP3ToLinearSRGB":t===Rs&&e===Ps&&(n="LinearSRGBToLinearDisplayP3"),s){case wn:case Ns:return[n,"LinearTransferOETF"];case Ne:case ko:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ua(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Jf(s.getShaderSource(t),r)}else return i}function $f(s,t){const e=jf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qf(s,t){let e;switch(t){case jc:e="Linear";break;case $c:e="Reinhard";break;case Qc:e="OptimizedCineon";break;case Ua:e="ACESFilmic";break;case el:e="AgX";break;case tl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function t0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xi).join(`
`)}function e0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xi).join(`
`)}function n0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function xi(s){return s!==""}function fa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(s){return s.replace(s0,r0)}const o0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function r0(s,t){let e=se[t];if(e===void 0){const n=o0.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uo(e)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ma(s){return s.replace(a0,c0)}function c0(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function ga(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function l0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Go?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ia?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function h0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case bi:case Ei:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ei:t="ENVMAP_MODE_REFRACTION";break}return t}function u0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Da:t="ENVMAP_BLENDING_MULTIPLY";break;case Kc:t="ENVMAP_BLENDING_MIX";break;case Jc:t="ENVMAP_BLENDING_ADD";break}return t}function f0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function p0(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=l0(e),h=h0(e),d=d0(e),f=u0(e),l=f0(e),u=e.isWebGL2?"":t0(e),g=e0(e),x=n0(o),m=i.createProgram();let p,v,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xi).join(`
`),p.length>0&&(p+=`
`),v=[u,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(xi).join(`
`),v.length>0&&(v+=`
`)):(p=[ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),v=[u,ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?se.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,$f("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xi).join(`
`)),r=Uo(r),r=fa(r,e),r=pa(r,e),a=Uo(a),a=fa(a,e),a=pa(a,e),r=ma(r),a=ma(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ur?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ur?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=_+p+r,P=_+v+a,L=da(i,i.VERTEX_SHADER,y),I=da(i,i.FRAGMENT_SHADER,P);i.attachShader(m,L),i.attachShader(m,I),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function k(O){if(s.debug.checkShaderErrors){const st=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(L).trim(),V=i.getShaderInfoLog(I).trim();let W=!0,z=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,L,I);else{const it=ua(i,L,"vertex"),Z=ua(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+st+`
`+it+`
`+Z)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(U===""||V==="")&&(z=!1);z&&(O.diagnostics={runnable:W,programLog:st,vertexShader:{log:U,prefix:p},fragmentShader:{log:V,prefix:v}})}i.deleteShader(L),i.deleteShader(I),b=new Es(i,m),w=i0(i,m)}let b;this.getUniforms=function(){return b===void 0&&k(this),b};let w;this.getAttributes=function(){return w===void 0&&k(this),w};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Zf)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=I,this}let m0=0;class g0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _0(t),e.set(t,n)),n}}class _0{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}}function M0(s,t,e,n,i,o,r){const a=new ja,c=new g0,h=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,l=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return b===0?"uv":`uv${b}`}function m(b,w,T,O,st){const U=O.fog,V=st.geometry,W=b.isMeshStandardMaterial?O.environment:null,z=(b.isMeshStandardMaterial?e:t).get(b.envMap||W),it=z&&z.mapping===Us?z.image.height:null,Z=g[b.type];b.precision!==null&&(u=i.getMaxPrecision(b.precision),u!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const H=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$=H!==void 0?H.length:0;let J=0;V.morphAttributes.position!==void 0&&(J=1),V.morphAttributes.normal!==void 0&&(J=2),V.morphAttributes.color!==void 0&&(J=3);let K,j,rt,dt;if(Z){const ne=cn[Z];K=ne.vertexShader,j=ne.fragmentShader}else K=b.vertexShader,j=b.fragmentShader,c.update(b),rt=c.getVertexShaderID(b),dt=c.getFragmentShaderID(b);const at=s.getRenderTarget(),yt=st.isInstancedMesh===!0,Pt=st.isBatchedMesh===!0,Q=!!b.map,ht=!!b.matcap,D=!!z,ft=!!b.aoMap,ot=!!b.lightMap,_t=!!b.bumpMap,ct=!!b.normalMap,Ft=!!b.displacementMap,vt=!!b.emissiveMap,A=!!b.metalnessMap,E=!!b.roughnessMap,Y=b.anisotropy>0,Mt=b.clearcoat>0,pt=b.iridescence>0,mt=b.sheen>0,Ot=b.transmission>0,At=Y&&!!b.anisotropyMap,Ut=Mt&&!!b.clearcoatMap,Vt=Mt&&!!b.clearcoatNormalMap,Lt=Mt&&!!b.clearcoatRoughnessMap,xt=pt&&!!b.iridescenceMap,$t=pt&&!!b.iridescenceThicknessMap,Jt=mt&&!!b.sheenColorMap,Xt=mt&&!!b.sheenRoughnessMap,Bt=!!b.specularMap,Rt=!!b.specularColorMap,Zt=!!b.specularIntensityMap,te=Ot&&!!b.transmissionMap,Gt=Ot&&!!b.thicknessMap,bt=!!b.gradientMap,wt=!!b.alphaMap,S=b.alphaTest>0,B=!!b.alphaHash,tt=!!b.extensions,Tt=!!V.attributes.uv1,lt=!!V.attributes.uv2,Et=!!V.attributes.uv3;let kt=Dn;return b.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(kt=s.toneMapping),{isWebGL2:d,shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:K,fragmentShader:j,defines:b.defines,customVertexShaderID:rt,customFragmentShaderID:dt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Pt,instancing:yt,instancingColor:yt&&st.instanceColor!==null,supportsVertexTextures:l,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:wn,map:Q,matcap:ht,envMap:D,envMapMode:D&&z.mapping,envMapCubeUVHeight:it,aoMap:ft,lightMap:ot,bumpMap:_t,normalMap:ct,displacementMap:l&&Ft,emissiveMap:vt,normalMapObjectSpace:ct&&b.normalMapType===fl,normalMapTangentSpace:ct&&b.normalMapType===Wa,metalnessMap:A,roughnessMap:E,anisotropy:Y,anisotropyMap:At,clearcoat:Mt,clearcoatMap:Ut,clearcoatNormalMap:Vt,clearcoatRoughnessMap:Lt,iridescence:pt,iridescenceMap:xt,iridescenceThicknessMap:$t,sheen:mt,sheenColorMap:Jt,sheenRoughnessMap:Xt,specularMap:Bt,specularColorMap:Rt,specularIntensityMap:Zt,transmission:Ot,transmissionMap:te,thicknessMap:Gt,gradientMap:bt,opaque:b.transparent===!1&&b.blending===Si,alphaMap:wt,alphaTest:S,alphaHash:B,combine:b.combine,mapUv:Q&&x(b.map.channel),aoMapUv:ft&&x(b.aoMap.channel),lightMapUv:ot&&x(b.lightMap.channel),bumpMapUv:_t&&x(b.bumpMap.channel),normalMapUv:ct&&x(b.normalMap.channel),displacementMapUv:Ft&&x(b.displacementMap.channel),emissiveMapUv:vt&&x(b.emissiveMap.channel),metalnessMapUv:A&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:At&&x(b.anisotropyMap.channel),clearcoatMapUv:Ut&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Vt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&x(b.sheenRoughnessMap.channel),specularMapUv:Bt&&x(b.specularMap.channel),specularColorMapUv:Rt&&x(b.specularColorMap.channel),specularIntensityMapUv:Zt&&x(b.specularIntensityMap.channel),transmissionMapUv:te&&x(b.transmissionMap.channel),thicknessMapUv:Gt&&x(b.thicknessMap.channel),alphaMapUv:wt&&x(b.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ct||Y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Tt,vertexUv2s:lt,vertexUv3s:Et,pointsUvs:st.isPoints===!0&&!!V.attributes.uv&&(Q||wt),fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:st.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:kt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Q&&b.map.isVideoTexture===!0&&me.getTransfer(b.map.colorSpace)===Me,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ee,flipSided:b.side===He,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:tt&&b.extensions.derivatives===!0,extensionFragDepth:tt&&b.extensions.fragDepth===!0,extensionDrawBuffers:tt&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:tt&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:tt&&b.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const T in b.defines)w.push(T),w.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(v(w,b),_(w,b),w.push(s.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function v(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function _(b,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),b.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function y(b){const w=g[b.type];let T;if(w){const O=cn[w];T=Ql.clone(O.uniforms)}else T=b.uniforms;return T}function P(b,w){let T;for(let O=0,st=h.length;O<st;O++){const U=h[O];if(U.cacheKey===w){T=U,++T.usedTimes;break}}return T===void 0&&(T=new p0(s,w,b,o),h.push(T)),T}function L(b){if(--b.usedTimes===0){const w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),b.destroy()}}function I(b){c.remove(b)}function k(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:k}}function v0(){let s=new WeakMap;function t(o){let r=s.get(o);return r===void 0&&(r={},s.set(o,r)),r}function e(o){s.delete(o)}function n(o,r,a){s.get(o)[r]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function x0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _a(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ma(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(f,l,u,g,x,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:l,material:u,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=l,p.material=u,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),t++,p}function a(f,l,u,g,x,m){const p=r(f,l,u,g,x,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,l,u,g,x,m){const p=r(f,l,u,g,x,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,l){e.length>1&&e.sort(f||x0),n.length>1&&n.sort(l||_a),i.length>1&&i.sort(l||_a)}function d(){for(let f=t,l=s.length;f<l;f++){const u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:c,finish:d,sort:h}}function w0(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Ma,s.set(n,[r])):i>=o.length?(r=new Ma,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function S0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ce};break;case"SpotLight":e={position:new N,direction:new N,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function y0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let b0=0;function E0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function T0(s,t){const e=new S0,n=y0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new N);const o=new N,r=new ye,a=new ye;function c(d,f){let l=0,u=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let x=0,m=0,p=0,v=0,_=0,y=0,P=0,L=0,I=0,k=0,b=0;d.sort(E0);const w=f===!0?Math.PI:1;for(let O=0,st=d.length;O<st;O++){const U=d[O],V=U.color,W=U.intensity,z=U.distance,it=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)l+=V.r*W*w,u+=V.g*W*w,g+=V.b*W*w;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(U.sh.coefficients[Z],W);b++}else if(U.isDirectionalLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const H=U.shadow,$=n.get(U);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,i.directionalShadow[x]=$,i.directionalShadowMap[x]=it,i.directionalShadowMatrix[x]=U.shadow.matrix,y++}i.directional[x]=Z,x++}else if(U.isSpotLight){const Z=e.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(V).multiplyScalar(W*w),Z.distance=z,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,i.spot[p]=Z;const H=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,H.updateMatrices(U),U.castShadow&&k++),i.spotLightMatrix[p]=H.matrix,U.castShadow){const $=n.get(U);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,i.spotShadow[p]=$,i.spotShadowMap[p]=it,L++}p++}else if(U.isRectAreaLight){const Z=e.get(U);Z.color.copy(V).multiplyScalar(W),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),i.rectArea[v]=Z,v++}else if(U.isPointLight){const Z=e.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity*w),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){const H=U.shadow,$=n.get(U);$.shadowBias=H.bias,$.shadowNormalBias=H.normalBias,$.shadowRadius=H.radius,$.shadowMapSize=H.mapSize,$.shadowCameraNear=H.camera.near,$.shadowCameraFar=H.camera.far,i.pointShadow[m]=$,i.pointShadowMap[m]=it,i.pointShadowMatrix[m]=U.shadow.matrix,P++}i.point[m]=Z,m++}else if(U.isHemisphereLight){const Z=e.get(U);Z.skyColor.copy(U.color).multiplyScalar(W*w),Z.groundColor.copy(U.groundColor).multiplyScalar(W*w),i.hemi[_]=Z,_++}}v>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_FLOAT_1,i.rectAreaLTC2=Dt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Dt.LTC_HALF_1,i.rectAreaLTC2=Dt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=g;const T=i.hash;(T.directionalLength!==x||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==v||T.hemiLength!==_||T.numDirectionalShadows!==y||T.numPointShadows!==P||T.numSpotShadows!==L||T.numSpotMaps!==I||T.numLightProbes!==b)&&(i.directional.length=x,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=L+I-k,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=b,T.directionalLength=x,T.pointLength=m,T.spotLength=p,T.rectAreaLength=v,T.hemiLength=_,T.numDirectionalShadows=y,T.numPointShadows=P,T.numSpotShadows=L,T.numSpotMaps=I,T.numLightProbes=b,i.version=b0++)}function h(d,f){let l=0,u=0,g=0,x=0,m=0;const p=f.matrixWorldInverse;for(let v=0,_=d.length;v<_;v++){const y=d[v];if(y.isDirectionalLight){const P=i.directional[l];P.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),l++}else if(y.isSpotLight){const P=i.spot[g];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const P=i.rectArea[x];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const P=i.point[u];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const P=i.hemi[m];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:i}}function va(s,t){const e=new T0(s,t),n=[],i=[];function o(){n.length=0,i.length=0}function r(f){n.push(f)}function a(f){i.push(f)}function c(f){e.setup(n,f)}function h(f){e.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:h,pushLight:r,pushShadow:a}}function A0(s,t){let e=new WeakMap;function n(o,r=0){const a=e.get(o);let c;return a===void 0?(c=new va(s,t),e.set(o,[c])):r>=a.length?(c=new va(s,t),a.push(c)):c=a[r],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class R0 extends Ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P0 extends Ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C0=`void main() {
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
}`;function I0(s,t,e){let n=new Vo;const i=new It,o=new It,r=new ve,a=new R0({depthPacking:ul}),c=new P0,h={},d=e.maxTextureSize,f={[Nn]:He,[He]:Nn,[Ee]:Ee},l=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:C0,fragmentShader:L0}),u=l.clone();u.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new M(g,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let p=this.type;this.render=function(L,I,k){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const b=s.getRenderTarget(),w=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),O=s.state;O.setBlending(In),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const st=p!==vn&&this.type===vn,U=p===vn&&this.type!==vn;for(let V=0,W=L.length;V<W;V++){const z=L[V],it=z.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;i.copy(it.mapSize);const Z=it.getFrameExtents();if(i.multiply(Z),o.copy(it.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/Z.x),i.x=o.x*Z.x,it.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/Z.y),i.y=o.y*Z.y,it.mapSize.y=o.y)),it.map===null||st===!0||U===!0){const $=this.type!==vn?{minFilter:Ve,magFilter:Ve}:{};it.map!==null&&it.map.dispose(),it.map=new jn(i.x,i.y,$),it.map.texture.name=z.name+".shadowMap",it.camera.updateProjectionMatrix()}s.setRenderTarget(it.map),s.clear();const H=it.getViewportCount();for(let $=0;$<H;$++){const J=it.getViewport($);r.set(o.x*J.x,o.y*J.y,o.x*J.z,o.y*J.w),O.viewport(r),it.updateMatrices(z,$),n=it.getFrustum(),y(I,k,it.camera,z,this.type)}it.isPointLightShadow!==!0&&this.type===vn&&v(it,k),it.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(b,w,T)};function v(L,I){const k=t.update(x);l.defines.VSM_SAMPLES!==L.blurSamples&&(l.defines.VSM_SAMPLES=L.blurSamples,u.defines.VSM_SAMPLES=L.blurSamples,l.needsUpdate=!0,u.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new jn(i.x,i.y)),l.uniforms.shadow_pass.value=L.map.texture,l.uniforms.resolution.value=L.mapSize,l.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(I,null,k,l,x,null),u.uniforms.shadow_pass.value=L.mapPass.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(I,null,k,u,x,null)}function _(L,I,k,b){let w=null;const T=k.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(T!==void 0)w=T;else if(w=k.isPointLight===!0?c:a,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const O=w.uuid,st=I.uuid;let U=h[O];U===void 0&&(U={},h[O]=U);let V=U[st];V===void 0&&(V=w.clone(),U[st]=V,I.addEventListener("dispose",P)),w=V}if(w.visible=I.visible,w.wireframe=I.wireframe,b===vn?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:f[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,k.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const O=s.properties.get(w);O.light=k}return w}function y(L,I,k,b,w){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&w===vn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,L.matrixWorld);const st=t.update(L),U=L.material;if(Array.isArray(U)){const V=st.groups;for(let W=0,z=V.length;W<z;W++){const it=V[W],Z=U[it.materialIndex];if(Z&&Z.visible){const H=_(L,Z,b,w);L.onBeforeShadow(s,L,I,k,st,H,it),s.renderBufferDirect(k,null,st,H,L,it),L.onAfterShadow(s,L,I,k,st,H,it)}}}else if(U.visible){const V=_(L,U,b,w);L.onBeforeShadow(s,L,I,k,st,V,null),s.renderBufferDirect(k,null,st,V,L,null),L.onAfterShadow(s,L,I,k,st,V,null)}}const O=L.children;for(let st=0,U=O.length;st<U;st++)y(O[st],I,k,b,w)}function P(L){L.target.removeEventListener("dispose",P);for(const k in h){const b=h[k],w=L.target.uuid;w in b&&(b[w].dispose(),delete b[w])}}}function D0(s,t,e){const n=e.isWebGL2;function i(){let S=!1;const B=new ve;let tt=null;const Tt=new ve(0,0,0,0);return{setMask:function(lt){tt!==lt&&!S&&(s.colorMask(lt,lt,lt,lt),tt=lt)},setLocked:function(lt){S=lt},setClear:function(lt,Et,kt,oe,ne){ne===!0&&(lt*=oe,Et*=oe,kt*=oe),B.set(lt,Et,kt,oe),Tt.equals(B)===!1&&(s.clearColor(lt,Et,kt,oe),Tt.copy(B))},reset:function(){S=!1,tt=null,Tt.set(-1,0,0,0)}}}function o(){let S=!1,B=null,tt=null,Tt=null;return{setTest:function(lt){lt?Pt(s.DEPTH_TEST):Q(s.DEPTH_TEST)},setMask:function(lt){B!==lt&&!S&&(s.depthMask(lt),B=lt)},setFunc:function(lt){if(tt!==lt){switch(lt){case Vc:s.depthFunc(s.NEVER);break;case Hc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Xc:s.depthFunc(s.EQUAL);break;case qc:s.depthFunc(s.GEQUAL);break;case Yc:s.depthFunc(s.GREATER);break;case Zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=lt}},setLocked:function(lt){S=lt},setClear:function(lt){Tt!==lt&&(s.clearDepth(lt),Tt=lt)},reset:function(){S=!1,B=null,tt=null,Tt=null}}}function r(){let S=!1,B=null,tt=null,Tt=null,lt=null,Et=null,kt=null,oe=null,ne=null;return{setTest:function(Ht){S||(Ht?Pt(s.STENCIL_TEST):Q(s.STENCIL_TEST))},setMask:function(Ht){B!==Ht&&!S&&(s.stencilMask(Ht),B=Ht)},setFunc:function(Ht,ue,Ct){(tt!==Ht||Tt!==ue||lt!==Ct)&&(s.stencilFunc(Ht,ue,Ct),tt=Ht,Tt=ue,lt=Ct)},setOp:function(Ht,ue,Ct){(Et!==Ht||kt!==ue||oe!==Ct)&&(s.stencilOp(Ht,ue,Ct),Et=Ht,kt=ue,oe=Ct)},setLocked:function(Ht){S=Ht},setClear:function(Ht){ne!==Ht&&(s.clearStencil(Ht),ne=Ht)},reset:function(){S=!1,B=null,tt=null,Tt=null,lt=null,Et=null,kt=null,oe=null,ne=null}}}const a=new i,c=new o,h=new r,d=new WeakMap,f=new WeakMap;let l={},u={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,y=null,P=null,L=null,I=null,k=null,b=new ce(0,0,0),w=0,T=!1,O=null,st=null,U=null,V=null,W=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,Z=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),it=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),it=Z>=2);let $=null,J={};const K=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),rt=new ve().fromArray(K),dt=new ve().fromArray(j);function at(S,B,tt,Tt){const lt=new Uint8Array(4),Et=s.createTexture();s.bindTexture(S,Et),s.texParameteri(S,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(S,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<tt;kt++)n&&(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)?s.texImage3D(B,0,s.RGBA,1,1,Tt,0,s.RGBA,s.UNSIGNED_BYTE,lt):s.texImage2D(B+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,lt);return Et}const yt={};yt[s.TEXTURE_2D]=at(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=at(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(yt[s.TEXTURE_2D_ARRAY]=at(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=at(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Pt(s.DEPTH_TEST),c.setFunc(Ts),vt(!1),A(tr),Pt(s.CULL_FACE),ct(In);function Pt(S){l[S]!==!0&&(s.enable(S),l[S]=!0)}function Q(S){l[S]!==!1&&(s.disable(S),l[S]=!1)}function ht(S,B){return u[S]!==B?(s.bindFramebuffer(S,B),u[S]=B,n&&(S===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=B),S===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=B)),!0):!1}function D(S,B){let tt=x,Tt=!1;if(S)if(tt=g.get(B),tt===void 0&&(tt=[],g.set(B,tt)),S.isWebGLMultipleRenderTargets){const lt=S.texture;if(tt.length!==lt.length||tt[0]!==s.COLOR_ATTACHMENT0){for(let Et=0,kt=lt.length;Et<kt;Et++)tt[Et]=s.COLOR_ATTACHMENT0+Et;tt.length=lt.length,Tt=!0}}else tt[0]!==s.COLOR_ATTACHMENT0&&(tt[0]=s.COLOR_ATTACHMENT0,Tt=!0);else tt[0]!==s.BACK&&(tt[0]=s.BACK,Tt=!0);Tt&&(e.isWebGL2?s.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function ft(S){return m!==S?(s.useProgram(S),m=S,!0):!1}const ot={[Xn]:s.FUNC_ADD,[Ac]:s.FUNC_SUBTRACT,[Rc]:s.FUNC_REVERSE_SUBTRACT};if(n)ot[sr]=s.MIN,ot[or]=s.MAX;else{const S=t.get("EXT_blend_minmax");S!==null&&(ot[sr]=S.MIN_EXT,ot[or]=S.MAX_EXT)}const _t={[Pc]:s.ZERO,[Cc]:s.ONE,[Lc]:s.SRC_COLOR,[Ao]:s.SRC_ALPHA,[Oc]:s.SRC_ALPHA_SATURATE,[Nc]:s.DST_COLOR,[Dc]:s.DST_ALPHA,[Ic]:s.ONE_MINUS_SRC_COLOR,[Ro]:s.ONE_MINUS_SRC_ALPHA,[Fc]:s.ONE_MINUS_DST_COLOR,[Uc]:s.ONE_MINUS_DST_ALPHA,[Gc]:s.CONSTANT_COLOR,[Bc]:s.ONE_MINUS_CONSTANT_COLOR,[kc]:s.CONSTANT_ALPHA,[zc]:s.ONE_MINUS_CONSTANT_ALPHA};function ct(S,B,tt,Tt,lt,Et,kt,oe,ne,Ht){if(S===In){p===!0&&(Q(s.BLEND),p=!1);return}if(p===!1&&(Pt(s.BLEND),p=!0),S!==Tc){if(S!==v||Ht!==T){if((_!==Xn||L!==Xn)&&(s.blendEquation(s.FUNC_ADD),_=Xn,L=Xn),Ht)switch(S){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.ONE,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}y=null,P=null,I=null,k=null,b.set(0,0,0),w=0,v=S,T=Ht}return}lt=lt||B,Et=Et||tt,kt=kt||Tt,(B!==_||lt!==L)&&(s.blendEquationSeparate(ot[B],ot[lt]),_=B,L=lt),(tt!==y||Tt!==P||Et!==I||kt!==k)&&(s.blendFuncSeparate(_t[tt],_t[Tt],_t[Et],_t[kt]),y=tt,P=Tt,I=Et,k=kt),(oe.equals(b)===!1||ne!==w)&&(s.blendColor(oe.r,oe.g,oe.b,ne),b.copy(oe),w=ne),v=S,T=!1}function Ft(S,B){S.side===Ee?Q(s.CULL_FACE):Pt(s.CULL_FACE);let tt=S.side===He;B&&(tt=!tt),vt(tt),S.blending===Si&&S.transparent===!1?ct(In):ct(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),c.setFunc(S.depthFunc),c.setTest(S.depthTest),c.setMask(S.depthWrite),a.setMask(S.colorWrite);const Tt=S.stencilWrite;h.setTest(Tt),Tt&&(h.setMask(S.stencilWriteMask),h.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),h.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),Y(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?Pt(s.SAMPLE_ALPHA_TO_COVERAGE):Q(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(S){O!==S&&(S?s.frontFace(s.CW):s.frontFace(s.CCW),O=S)}function A(S){S!==bc?(Pt(s.CULL_FACE),S!==st&&(S===tr?s.cullFace(s.BACK):S===Ec?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Q(s.CULL_FACE),st=S}function E(S){S!==U&&(it&&s.lineWidth(S),U=S)}function Y(S,B,tt){S?(Pt(s.POLYGON_OFFSET_FILL),(V!==B||W!==tt)&&(s.polygonOffset(B,tt),V=B,W=tt)):Q(s.POLYGON_OFFSET_FILL)}function Mt(S){S?Pt(s.SCISSOR_TEST):Q(s.SCISSOR_TEST)}function pt(S){S===void 0&&(S=s.TEXTURE0+z-1),$!==S&&(s.activeTexture(S),$=S)}function mt(S,B,tt){tt===void 0&&($===null?tt=s.TEXTURE0+z-1:tt=$);let Tt=J[tt];Tt===void 0&&(Tt={type:void 0,texture:void 0},J[tt]=Tt),(Tt.type!==S||Tt.texture!==B)&&($!==tt&&(s.activeTexture(tt),$=tt),s.bindTexture(S,B||yt[S]),Tt.type=S,Tt.texture=B)}function Ot(){const S=J[$];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function At(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ut(){try{s.compressedTexImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Vt(){try{s.texSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Lt(){try{s.texSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function xt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function $t(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Xt(){try{s.texStorage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Bt(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Zt(S){rt.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),rt.copy(S))}function te(S){dt.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),dt.copy(S))}function Gt(S,B){let tt=f.get(B);tt===void 0&&(tt=new WeakMap,f.set(B,tt));let Tt=tt.get(S);Tt===void 0&&(Tt=s.getUniformBlockIndex(B,S.name),tt.set(S,Tt))}function bt(S,B){const Tt=f.get(B).get(S);d.get(B)!==Tt&&(s.uniformBlockBinding(B,Tt,S.__bindingPointIndex),d.set(B,Tt))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},$=null,J={},u={},g=new WeakMap,x=[],m=null,p=!1,v=null,_=null,y=null,P=null,L=null,I=null,k=null,b=new ce(0,0,0),w=0,T=!1,O=null,st=null,U=null,V=null,W=null,rt.set(0,0,s.canvas.width,s.canvas.height),dt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),h.reset()}return{buffers:{color:a,depth:c,stencil:h},enable:Pt,disable:Q,bindFramebuffer:ht,drawBuffers:D,useProgram:ft,setBlending:ct,setMaterial:Ft,setFlipSided:vt,setCullFace:A,setLineWidth:E,setPolygonOffset:Y,setScissorTest:Mt,activeTexture:pt,bindTexture:mt,unbindTexture:Ot,compressedTexImage2D:At,compressedTexImage3D:Ut,texImage2D:Bt,texImage3D:Rt,updateUBOMapping:Gt,uniformBlockBinding:bt,texStorage2D:Jt,texStorage3D:Xt,texSubImage2D:Vt,texSubImage3D:Lt,compressedTexSubImage2D:xt,compressedTexSubImage3D:$t,scissor:Zt,viewport:te,reset:wt}}function U0(s,t,e,n,i,o,r){const a=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const l=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,E){return u?new OffscreenCanvas(A,E):Is("canvas")}function x(A,E,Y,Mt){let pt=1;if((A.width>Mt||A.height>Mt)&&(pt=Mt/Math.max(A.width,A.height)),pt<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const mt=E?Ls:Math.floor,Ot=mt(pt*A.width),At=mt(pt*A.height);f===void 0&&(f=g(Ot,At));const Ut=Y?g(Ot,At):f;return Ut.width=Ot,Ut.height=At,Ut.getContext("2d").drawImage(A,0,0,Ot,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+Ot+"x"+At+")."),Ut}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Do(A.width)&&Do(A.height)}function p(A){return a?!1:A.wrapS!==sn||A.wrapT!==sn||A.minFilter!==Ve&&A.minFilter!==je}function v(A,E){return A.generateMipmaps&&E&&A.minFilter!==Ve&&A.minFilter!==je}function _(A){s.generateMipmap(A)}function y(A,E,Y,Mt,pt=!1){if(a===!1)return E;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt=E;if(E===s.RED&&(Y===s.FLOAT&&(mt=s.R32F),Y===s.HALF_FLOAT&&(mt=s.R16F),Y===s.UNSIGNED_BYTE&&(mt=s.R8)),E===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(mt=s.R8UI),Y===s.UNSIGNED_SHORT&&(mt=s.R16UI),Y===s.UNSIGNED_INT&&(mt=s.R32UI),Y===s.BYTE&&(mt=s.R8I),Y===s.SHORT&&(mt=s.R16I),Y===s.INT&&(mt=s.R32I)),E===s.RG&&(Y===s.FLOAT&&(mt=s.RG32F),Y===s.HALF_FLOAT&&(mt=s.RG16F),Y===s.UNSIGNED_BYTE&&(mt=s.RG8)),E===s.RGBA){const Ot=pt?As:me.getTransfer(Mt);Y===s.FLOAT&&(mt=s.RGBA32F),Y===s.HALF_FLOAT&&(mt=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(mt=Ot===Me?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function P(A,E,Y){return v(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==je?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function L(A){return A===Ve||A===rr||A===Xs?s.NEAREST:s.LINEAR}function I(A){const E=A.target;E.removeEventListener("dispose",I),b(E),E.isVideoTexture&&d.delete(E)}function k(A){const E=A.target;E.removeEventListener("dispose",k),T(E)}function b(A){const E=n.get(A);if(E.__webglInit===void 0)return;const Y=A.source,Mt=l.get(Y);if(Mt){const pt=Mt[E.__cacheKey];pt.usedTimes--,pt.usedTimes===0&&w(A),Object.keys(Mt).length===0&&l.delete(Y)}n.remove(A)}function w(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const Y=A.source,Mt=l.get(Y);delete Mt[E.__cacheKey],r.memory.textures--}function T(A){const E=A.texture,Y=n.get(A),Mt=n.get(E);if(Mt.__webglTexture!==void 0&&(s.deleteTexture(Mt.__webglTexture),r.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(Y.__webglFramebuffer[pt]))for(let mt=0;mt<Y.__webglFramebuffer[pt].length;mt++)s.deleteFramebuffer(Y.__webglFramebuffer[pt][mt]);else s.deleteFramebuffer(Y.__webglFramebuffer[pt]);Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[pt])}else{if(Array.isArray(Y.__webglFramebuffer))for(let pt=0;pt<Y.__webglFramebuffer.length;pt++)s.deleteFramebuffer(Y.__webglFramebuffer[pt]);else s.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let pt=0;pt<Y.__webglColorRenderbuffer.length;pt++)Y.__webglColorRenderbuffer[pt]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[pt]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let pt=0,mt=E.length;pt<mt;pt++){const Ot=n.get(E[pt]);Ot.__webglTexture&&(s.deleteTexture(Ot.__webglTexture),r.memory.textures--),n.remove(E[pt])}n.remove(E),n.remove(A)}let O=0;function st(){O=0}function U(){const A=O;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),O+=1,A}function V(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function W(A,E){const Y=n.get(A);if(A.isVideoTexture&&Ft(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const Mt=A.image;if(Mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(Y,A,E);return}}e.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+E)}function z(A,E){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){rt(Y,A,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+E)}function it(A,E){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){rt(Y,A,E);return}e.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+E)}function Z(A,E){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){dt(Y,A,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+E)}const H={[Re]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},$={[Ve]:s.NEAREST,[rr]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[nl]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},J={[pl]:s.NEVER,[xl]:s.ALWAYS,[ml]:s.LESS,[Xa]:s.LEQUAL,[gl]:s.EQUAL,[vl]:s.GEQUAL,[_l]:s.GREATER,[Ml]:s.NOTEQUAL};function K(A,E,Y){if(Y?(s.texParameteri(A,s.TEXTURE_WRAP_S,H[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,H[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,H[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,$[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,$[E.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==sn||E.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,L(E.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==Ve&&E.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,J[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Mt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ve||E.minFilter!==Xs&&E.minFilter!==Xi||E.type===Cn&&t.has("OES_texture_float_linear")===!1||a===!1&&E.type===qi&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(A,Mt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function j(A,E){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",I));const Mt=E.source;let pt=l.get(Mt);pt===void 0&&(pt={},l.set(Mt,pt));const mt=V(E);if(mt!==A.__cacheKey){pt[mt]===void 0&&(pt[mt]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,Y=!0),pt[mt].usedTimes++;const Ot=pt[A.__cacheKey];Ot!==void 0&&(pt[A.__cacheKey].usedTimes--,Ot.usedTimes===0&&w(E)),A.__cacheKey=mt,A.__webglTexture=pt[mt].texture}return Y}function rt(A,E,Y){let Mt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Mt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Mt=s.TEXTURE_3D);const pt=j(A,E),mt=E.source;e.bindTexture(Mt,A.__webglTexture,s.TEXTURE0+Y);const Ot=n.get(mt);if(mt.version!==Ot.__version||pt===!0){e.activeTexture(s.TEXTURE0+Y);const At=me.getPrimaries(me.workingColorSpace),Ut=E.colorSpace===$e?null:me.getPrimaries(E.colorSpace),Vt=E.colorSpace===$e||At===Ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const Lt=p(E)&&m(E.image)===!1;let xt=x(E.image,Lt,!1,i.maxTextureSize);xt=vt(E,xt);const $t=m(xt)||a,Jt=o.convert(E.format,E.colorSpace);let Xt=o.convert(E.type),Bt=y(E.internalFormat,Jt,Xt,E.colorSpace,E.isVideoTexture);K(Mt,E,$t);let Rt;const Zt=E.mipmaps,te=a&&E.isVideoTexture!==!0&&Bt!==Va,Gt=Ot.__version===void 0||pt===!0,bt=P(E,xt,$t);if(E.isDepthTexture)Bt=s.DEPTH_COMPONENT,a?E.type===Cn?Bt=s.DEPTH_COMPONENT32F:E.type===Pn?Bt=s.DEPTH_COMPONENT24:E.type===Zn?Bt=s.DEPTH24_STENCIL8:Bt=s.DEPTH_COMPONENT16:E.type===Cn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Kn&&Bt===s.DEPTH_COMPONENT&&E.type!==Bo&&E.type!==Pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Pn,Xt=o.convert(E.type)),E.format===Ti&&Bt===s.DEPTH_COMPONENT&&(Bt=s.DEPTH_STENCIL,E.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Zn,Xt=o.convert(E.type))),Gt&&(te?e.texStorage2D(s.TEXTURE_2D,1,Bt,xt.width,xt.height):e.texImage2D(s.TEXTURE_2D,0,Bt,xt.width,xt.height,0,Jt,Xt,null));else if(E.isDataTexture)if(Zt.length>0&&$t){te&&Gt&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,Zt[0].width,Zt[0].height);for(let wt=0,S=Zt.length;wt<S;wt++)Rt=Zt[wt],te?e.texSubImage2D(s.TEXTURE_2D,wt,0,0,Rt.width,Rt.height,Jt,Xt,Rt.data):e.texImage2D(s.TEXTURE_2D,wt,Bt,Rt.width,Rt.height,0,Jt,Xt,Rt.data);E.generateMipmaps=!1}else te?(Gt&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,xt.width,xt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt.width,xt.height,Jt,Xt,xt.data)):e.texImage2D(s.TEXTURE_2D,0,Bt,xt.width,xt.height,0,Jt,Xt,xt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){te&&Gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Bt,Zt[0].width,Zt[0].height,xt.depth);for(let wt=0,S=Zt.length;wt<S;wt++)Rt=Zt[wt],E.format!==on?Jt!==null?te?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,wt,0,0,0,Rt.width,Rt.height,xt.depth,Jt,Rt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,wt,Bt,Rt.width,Rt.height,xt.depth,0,Rt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage3D(s.TEXTURE_2D_ARRAY,wt,0,0,0,Rt.width,Rt.height,xt.depth,Jt,Xt,Rt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,wt,Bt,Rt.width,Rt.height,xt.depth,0,Jt,Xt,Rt.data)}else{te&&Gt&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,Zt[0].width,Zt[0].height);for(let wt=0,S=Zt.length;wt<S;wt++)Rt=Zt[wt],E.format!==on?Jt!==null?te?e.compressedTexSubImage2D(s.TEXTURE_2D,wt,0,0,Rt.width,Rt.height,Jt,Rt.data):e.compressedTexImage2D(s.TEXTURE_2D,wt,Bt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?e.texSubImage2D(s.TEXTURE_2D,wt,0,0,Rt.width,Rt.height,Jt,Xt,Rt.data):e.texImage2D(s.TEXTURE_2D,wt,Bt,Rt.width,Rt.height,0,Jt,Xt,Rt.data)}else if(E.isDataArrayTexture)te?(Gt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,bt,Bt,xt.width,xt.height,xt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Jt,Xt,xt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Bt,xt.width,xt.height,xt.depth,0,Jt,Xt,xt.data);else if(E.isData3DTexture)te?(Gt&&e.texStorage3D(s.TEXTURE_3D,bt,Bt,xt.width,xt.height,xt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Jt,Xt,xt.data)):e.texImage3D(s.TEXTURE_3D,0,Bt,xt.width,xt.height,xt.depth,0,Jt,Xt,xt.data);else if(E.isFramebufferTexture){if(Gt)if(te)e.texStorage2D(s.TEXTURE_2D,bt,Bt,xt.width,xt.height);else{let wt=xt.width,S=xt.height;for(let B=0;B<bt;B++)e.texImage2D(s.TEXTURE_2D,B,Bt,wt,S,0,Jt,Xt,null),wt>>=1,S>>=1}}else if(Zt.length>0&&$t){te&&Gt&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,Zt[0].width,Zt[0].height);for(let wt=0,S=Zt.length;wt<S;wt++)Rt=Zt[wt],te?e.texSubImage2D(s.TEXTURE_2D,wt,0,0,Jt,Xt,Rt):e.texImage2D(s.TEXTURE_2D,wt,Bt,Jt,Xt,Rt);E.generateMipmaps=!1}else te?(Gt&&e.texStorage2D(s.TEXTURE_2D,bt,Bt,xt.width,xt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Jt,Xt,xt)):e.texImage2D(s.TEXTURE_2D,0,Bt,Jt,Xt,xt);v(E,$t)&&_(Mt),Ot.__version=mt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function dt(A,E,Y){if(E.image.length!==6)return;const Mt=j(A,E),pt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+Y);const mt=n.get(pt);if(pt.version!==mt.__version||Mt===!0){e.activeTexture(s.TEXTURE0+Y);const Ot=me.getPrimaries(me.workingColorSpace),At=E.colorSpace===$e?null:me.getPrimaries(E.colorSpace),Ut=E.colorSpace===$e||Ot===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const Vt=E.isCompressedTexture||E.image[0].isCompressedTexture,Lt=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let wt=0;wt<6;wt++)!Vt&&!Lt?xt[wt]=x(E.image[wt],!1,!0,i.maxCubemapSize):xt[wt]=Lt?E.image[wt].image:E.image[wt],xt[wt]=vt(E,xt[wt]);const $t=xt[0],Jt=m($t)||a,Xt=o.convert(E.format,E.colorSpace),Bt=o.convert(E.type),Rt=y(E.internalFormat,Xt,Bt,E.colorSpace),Zt=a&&E.isVideoTexture!==!0,te=mt.__version===void 0||Mt===!0;let Gt=P(E,$t,Jt);K(s.TEXTURE_CUBE_MAP,E,Jt);let bt;if(Vt){Zt&&te&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,Rt,$t.width,$t.height);for(let wt=0;wt<6;wt++){bt=xt[wt].mipmaps;for(let S=0;S<bt.length;S++){const B=bt[S];E.format!==on?Xt!==null?Zt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,S,0,0,B.width,B.height,Xt,B.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,S,Rt,B.width,B.height,0,B.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,S,0,0,B.width,B.height,Xt,Bt,B.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,S,Rt,B.width,B.height,0,Xt,Bt,B.data)}}}else{bt=E.mipmaps,Zt&&te&&(bt.length>0&&Gt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,Rt,xt[0].width,xt[0].height));for(let wt=0;wt<6;wt++)if(Lt){Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,xt[wt].width,xt[wt].height,Xt,Bt,xt[wt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Rt,xt[wt].width,xt[wt].height,0,Xt,Bt,xt[wt].data);for(let S=0;S<bt.length;S++){const tt=bt[S].image[wt].image;Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,S+1,0,0,tt.width,tt.height,Xt,Bt,tt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,S+1,Rt,tt.width,tt.height,0,Xt,Bt,tt.data)}}else{Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Xt,Bt,xt[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,Rt,Xt,Bt,xt[wt]);for(let S=0;S<bt.length;S++){const B=bt[S];Zt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,S+1,0,0,Xt,Bt,B.image[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,S+1,Rt,Xt,Bt,B.image[wt])}}}v(E,Jt)&&_(s.TEXTURE_CUBE_MAP),mt.__version=pt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function at(A,E,Y,Mt,pt,mt){const Ot=o.convert(Y.format,Y.colorSpace),At=o.convert(Y.type),Ut=y(Y.internalFormat,Ot,At,Y.colorSpace);if(!n.get(E).__hasExternalTextures){const Lt=Math.max(1,E.width>>mt),xt=Math.max(1,E.height>>mt);pt===s.TEXTURE_3D||pt===s.TEXTURE_2D_ARRAY?e.texImage3D(pt,mt,Ut,Lt,xt,E.depth,0,Ot,At,null):e.texImage2D(pt,mt,Ut,Lt,xt,0,Ot,At,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ct(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Mt,pt,n.get(Y).__webglTexture,0,_t(E)):(pt===s.TEXTURE_2D||pt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Mt,pt,n.get(Y).__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(A,E,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let Mt=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Y||ct(E)){const pt=E.depthTexture;pt&&pt.isDepthTexture&&(pt.type===Cn?Mt=s.DEPTH_COMPONENT32F:pt.type===Pn&&(Mt=s.DEPTH_COMPONENT24));const mt=_t(E);ct(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,Mt,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,Mt,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,Mt,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const Mt=_t(E);Y&&ct(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt,s.DEPTH24_STENCIL8,E.width,E.height):ct(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const Mt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let pt=0;pt<Mt.length;pt++){const mt=Mt[pt],Ot=o.convert(mt.format,mt.colorSpace),At=o.convert(mt.type),Ut=y(mt.internalFormat,Ot,At,mt.colorSpace),Vt=_t(E);Y&&ct(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Ut,E.width,E.height):ct(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Vt,Ut,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ut,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pt(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const Mt=n.get(E.depthTexture).__webglTexture,pt=_t(E);if(E.depthTexture.format===Kn)ct(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Mt,0);else if(E.depthTexture.format===Ti)ct(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Mt,0);else throw new Error("Unknown depthTexture format")}function Q(A){const E=n.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Pt(E.__webglFramebuffer,A)}else if(Y){E.__webglDepthbuffer=[];for(let Mt=0;Mt<6;Mt++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Mt]),E.__webglDepthbuffer[Mt]=s.createRenderbuffer(),yt(E.__webglDepthbuffer[Mt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),yt(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function ht(A,E,Y){const Mt=n.get(A);E!==void 0&&at(Mt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&Q(A)}function D(A){const E=A.texture,Y=n.get(A),Mt=n.get(E);A.addEventListener("dispose",k),A.isWebGLMultipleRenderTargets!==!0&&(Mt.__webglTexture===void 0&&(Mt.__webglTexture=s.createTexture()),Mt.__version=E.version,r.memory.textures++);const pt=A.isWebGLCubeRenderTarget===!0,mt=A.isWebGLMultipleRenderTargets===!0,Ot=m(A)||a;if(pt){Y.__webglFramebuffer=[];for(let At=0;At<6;At++)if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[At]=[];for(let Ut=0;Ut<E.mipmaps.length;Ut++)Y.__webglFramebuffer[At][Ut]=s.createFramebuffer()}else Y.__webglFramebuffer[At]=s.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let At=0;At<E.mipmaps.length;At++)Y.__webglFramebuffer[At]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(mt)if(i.drawBuffers){const At=A.texture;for(let Ut=0,Vt=At.length;Ut<Vt;Ut++){const Lt=n.get(At[Ut]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=s.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ct(A)===!1){const At=mt?E:[E];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ut=0;Ut<At.length;Ut++){const Vt=At[Ut];Y.__webglColorRenderbuffer[Ut]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut]);const Lt=o.convert(Vt.format,Vt.colorSpace),xt=o.convert(Vt.type),$t=y(Vt.internalFormat,Lt,xt,Vt.colorSpace,A.isXRRenderTarget===!0),Jt=_t(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,$t,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ut,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Ut])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),yt(Y.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,Mt.__webglTexture),K(s.TEXTURE_CUBE_MAP,E,Ot);for(let At=0;At<6;At++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let Ut=0;Ut<E.mipmaps.length;Ut++)at(Y.__webglFramebuffer[At][Ut],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,Ut);else at(Y.__webglFramebuffer[At],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);v(E,Ot)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){const At=A.texture;for(let Ut=0,Vt=At.length;Ut<Vt;Ut++){const Lt=At[Ut],xt=n.get(Lt);e.bindTexture(s.TEXTURE_2D,xt.__webglTexture),K(s.TEXTURE_2D,Lt,Ot),at(Y.__webglFramebuffer,A,Lt,s.COLOR_ATTACHMENT0+Ut,s.TEXTURE_2D,0),v(Lt,Ot)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let At=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?At=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(At,Mt.__webglTexture),K(At,E,Ot),a&&E.mipmaps&&E.mipmaps.length>0)for(let Ut=0;Ut<E.mipmaps.length;Ut++)at(Y.__webglFramebuffer[Ut],A,E,s.COLOR_ATTACHMENT0,At,Ut);else at(Y.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,At,0);v(E,Ot)&&_(At),e.unbindTexture()}A.depthBuffer&&Q(A)}function ft(A){const E=m(A)||a,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let Mt=0,pt=Y.length;Mt<pt;Mt++){const mt=Y[Mt];if(v(mt,E)){const Ot=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,At=n.get(mt).__webglTexture;e.bindTexture(Ot,At),_(Ot),e.unbindTexture()}}}function ot(A){if(a&&A.samples>0&&ct(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Y=A.width,Mt=A.height;let pt=s.COLOR_BUFFER_BIT;const mt=[],Ot=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(A),Ut=A.isWebGLMultipleRenderTargets===!0;if(Ut)for(let Vt=0;Vt<E.length;Vt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let Vt=0;Vt<E.length;Vt++){mt.push(s.COLOR_ATTACHMENT0+Vt),A.depthBuffer&&mt.push(Ot);const Lt=At.__ignoreDepthValues!==void 0?At.__ignoreDepthValues:!1;if(Lt===!1&&(A.depthBuffer&&(pt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(pt|=s.STENCIL_BUFFER_BIT)),Ut&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[Vt]),Lt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Ot]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Ot])),Ut){const xt=n.get(E[Vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xt,0)}s.blitFramebuffer(0,0,Y,Mt,0,0,Y,Mt,pt,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ut)for(let Vt=0;Vt<E.length;Vt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.RENDERBUFFER,At.__webglColorRenderbuffer[Vt]);const Lt=n.get(E[Vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Vt,s.TEXTURE_2D,Lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}}function _t(A){return Math.min(i.maxSamples,A.samples)}function ct(A){const E=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ft(A){const E=r.render.frame;d.get(A)!==E&&(d.set(A,E),A.update())}function vt(A,E){const Y=A.colorSpace,Mt=A.format,pt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Io||Y!==wn&&Y!==$e&&(me.getTransfer(Y)===Me?a===!1?t.has("EXT_sRGB")===!0&&Mt===on?(A.format=Io,A.minFilter=je,A.generateMipmaps=!1):E=Ya.sRGBToLinear(E):(Mt!==on||pt!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}this.allocateTextureUnit=U,this.resetTextureUnits=st,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=it,this.setTextureCube=Z,this.rebindTextures=ht,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=at,this.useMultisampledRTT=ct}function N0(s,t,e){const n=e.isWebGL2;function i(o,r=$e){let a;const c=me.getTransfer(r);if(o===Un)return s.UNSIGNED_BYTE;if(o===Oa)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Ga)return s.UNSIGNED_SHORT_5_5_5_1;if(o===il)return s.BYTE;if(o===sl)return s.SHORT;if(o===Bo)return s.UNSIGNED_SHORT;if(o===Fa)return s.INT;if(o===Pn)return s.UNSIGNED_INT;if(o===Cn)return s.FLOAT;if(o===qi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(o===ol)return s.ALPHA;if(o===on)return s.RGBA;if(o===rl)return s.LUMINANCE;if(o===al)return s.LUMINANCE_ALPHA;if(o===Kn)return s.DEPTH_COMPONENT;if(o===Ti)return s.DEPTH_STENCIL;if(o===Io)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(o===cl)return s.RED;if(o===Ba)return s.RED_INTEGER;if(o===ll)return s.RG;if(o===ka)return s.RG_INTEGER;if(o===za)return s.RGBA_INTEGER;if(o===qs||o===Ys||o===Zs||o===Ks)if(c===Me)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(o===qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(o===qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Zs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ks)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ar||o===cr||o===lr||o===hr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(o===ar)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===cr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===lr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===hr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Va)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===dr||o===ur)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(o===dr)return c===Me?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(o===ur)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fr||o===pr||o===mr||o===gr||o===_r||o===Mr||o===vr||o===xr||o===wr||o===Sr||o===yr||o===br||o===Er||o===Tr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(o===fr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===pr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===mr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===gr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===_r)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Mr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===vr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===xr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===wr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Sr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===yr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===br)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Er)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Tr)return c===Me?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Js||o===Ar||o===Rr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(o===Js)return c===Me?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ar)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Rr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===hl||o===Pr||o===Cr||o===Lr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(o===Js)return a.COMPRESSED_RED_RGTC1_EXT;if(o===Pr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Cr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Lr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Zn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:i}}class F0 extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],l=d.position.distanceTo(f.position),u=.02,g=.005;h.inputState.pinching&&l>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&l<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class G0 extends Pi{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",c=1,h=null,d=null,f=null,l=null,u=null,g=null;const x=e.getContextAttributes();let m=null,p=null;const v=[],_=[],y=new It;let P=null;const L=new We;L.layers.enable(1),L.viewport=new ve;const I=new We;I.layers.enable(2),I.viewport=new ve;const k=[L,I],b=new F0;b.layers.enable(1),b.layers.enable(2);let w=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=v[K];return j===void 0&&(j=new xo,v[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=v[K];return j===void 0&&(j=new xo,v[K]=j),j.getGripSpace()},this.getHand=function(K){let j=v[K];return j===void 0&&(j=new xo,v[K]=j),j.getHandSpace()};function O(K){const j=_.indexOf(K.inputSource);if(j===-1)return;const rt=v[j];rt!==void 0&&(rt.update(K.inputSource,K.frame,h||r),rt.dispatchEvent({type:K.type,data:K.inputSource}))}function st(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",st),i.removeEventListener("inputsourceschange",U);for(let K=0;K<v.length;K++){const j=_[K];j!==null&&(_[K]=null,v[K].disconnect(j))}w=null,T=null,t.setRenderTarget(m),u=null,l=null,f=null,i=null,p=null,J.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(K){h=K},this.getBaseLayer=function(){return l!==null?l:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",st),i.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(i,e,j),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new jn(u.framebufferWidth,u.framebufferHeight,{format:on,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let j=null,rt=null,dt=null;x.depth&&(dt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,j=x.stencil?Ti:Kn,rt=x.stencil?Zn:Pn);const at={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:o};f=new XRWebGLBinding(i,e),l=f.createProjectionLayer(at),i.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),p=new jn(l.textureWidth,l.textureHeight,{format:on,type:Un,depthTexture:new rc(l.textureWidth,l.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});const yt=t.properties.get(p);yt.__ignoreDepthValues=l.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,r=await i.requestReferenceSpace(a),J.setContext(i),J.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(K){for(let j=0;j<K.removed.length;j++){const rt=K.removed[j],dt=_.indexOf(rt);dt>=0&&(_[dt]=null,v[dt].disconnect(rt))}for(let j=0;j<K.added.length;j++){const rt=K.added[j];let dt=_.indexOf(rt);if(dt===-1){for(let yt=0;yt<v.length;yt++)if(yt>=_.length){_.push(rt),dt=yt;break}else if(_[yt]===null){_[yt]=rt,dt=yt;break}if(dt===-1)break}const at=v[dt];at&&at.connect(rt)}}const V=new N,W=new N;function z(K,j,rt){V.setFromMatrixPosition(j.matrixWorld),W.setFromMatrixPosition(rt.matrixWorld);const dt=V.distanceTo(W),at=j.projectionMatrix.elements,yt=rt.projectionMatrix.elements,Pt=at[14]/(at[10]-1),Q=at[14]/(at[10]+1),ht=(at[9]+1)/at[5],D=(at[9]-1)/at[5],ft=(at[8]-1)/at[0],ot=(yt[8]+1)/yt[0],_t=Pt*ft,ct=Pt*ot,Ft=dt/(-ft+ot),vt=Ft*-ft;j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(vt),K.translateZ(Ft),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const A=Pt+Ft,E=Q+Ft,Y=_t-vt,Mt=ct+(dt-vt),pt=ht*Q/E*A,mt=D*Q/E*A;K.projectionMatrix.makePerspective(Y,Mt,pt,mt,A,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function it(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;b.near=I.near=L.near=K.near,b.far=I.far=L.far=K.far,(w!==b.near||T!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),w=b.near,T=b.far);const j=K.parent,rt=b.cameras;it(b,j);for(let dt=0;dt<rt.length;dt++)it(rt[dt],j);rt.length===2?z(b,L,I):b.projectionMatrix.copy(L.projectionMatrix),Z(K,b,j)};function Z(K,j,rt){rt===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(rt.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ai*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(l===null&&u===null))return c},this.setFoveation=function(K){c=K,l!==null&&(l.fixedFoveation=K),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=K)};let H=null;function $(K,j){if(d=j.getViewerPose(h||r),g=j,d!==null){const rt=d.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let dt=!1;rt.length!==b.cameras.length&&(b.cameras.length=0,dt=!0);for(let at=0;at<rt.length;at++){const yt=rt[at];let Pt=null;if(u!==null)Pt=u.getViewport(yt);else{const ht=f.getViewSubImage(l,yt);Pt=ht.viewport,at===0&&(t.setRenderTargetTextures(p,ht.colorTexture,l.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(p))}let Q=k[at];Q===void 0&&(Q=new We,Q.layers.enable(at),Q.viewport=new ve,k[at]=Q),Q.matrix.fromArray(yt.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(yt.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),at===0&&(b.matrix.copy(Q.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),dt===!0&&b.cameras.push(Q)}}for(let rt=0;rt<v.length;rt++){const dt=_[rt],at=v[rt];dt!==null&&at!==void 0&&at.update(dt,j,h||r)}H&&H(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),g=null}const J=new sc;J.setAnimationLoop($),this.setAnimationLoop=function(K){H=K},this.dispose=function(){}}}function B0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ec(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),f(m,p)):p.isMeshPhongMaterial?(o(m,p),d(m,p)):p.isMeshStandardMaterial?(o(m,p),l(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,_):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=_*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function l(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k0(s,t,e,n){let i={},o={},r=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,_){const y=_.program;n.uniformBlockBinding(v,y)}function h(v,_){let y=i[v.id];y===void 0&&(g(v),y=d(v),i[v.id]=y,v.addEventListener("dispose",m));const P=_.program;n.updateUBOMapping(v,P);const L=t.render.frame;o[v.id]!==L&&(l(v),o[v.id]=L)}function d(v){const _=f();v.__bindingPointIndex=_;const y=s.createBuffer(),P=v.__size,L=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,P,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function f(){for(let v=0;v<a;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(v){const _=i[v.id],y=v.uniforms,P=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let L=0,I=y.length;L<I;L++){const k=Array.isArray(y[L])?y[L]:[y[L]];for(let b=0,w=k.length;b<w;b++){const T=k[b];if(u(T,L,b,P)===!0){const O=T.__offset,st=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let V=0;V<st.length;V++){const W=st[V],z=x(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,O+U,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,U),U+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(v,_,y,P){const L=v.value,I=_+"_"+y;if(P[I]===void 0)return typeof L=="number"||typeof L=="boolean"?P[I]=L:P[I]=L.clone(),!0;{const k=P[I];if(typeof L=="number"||typeof L=="boolean"){if(k!==L)return P[I]=L,!0}else if(k.equals(L)===!1)return k.copy(L),!0}return!1}function g(v){const _=v.uniforms;let y=0;const P=16;for(let I=0,k=_.length;I<k;I++){const b=Array.isArray(_[I])?_[I]:[_[I]];for(let w=0,T=b.length;w<T;w++){const O=b[w],st=Array.isArray(O.value)?O.value:[O.value];for(let U=0,V=st.length;U<V;U++){const W=st[U],z=x(W),it=y%P;it!==0&&P-it<z.boundary&&(y+=P-it),O.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=y,y+=z.storage}}}const L=y%P;return L>0&&(y+=P-L),v.__size=y,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=r.indexOf(_.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete o[_.id]}function p(){for(const v in i)s.deleteBuffer(i[v]);r=[],i={},o={}}return{bind:c,update:h,dispose:p}}class uc{constructor(t={}){const{canvas:e=Nl(),context:n=null,depth:i=!0,stencil:o=!0,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let l;n!==null?l=n.getContextAttributes().alpha:l=r;const u=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const p=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;const _=this;let y=!1,P=0,L=0,I=null,k=-1,b=null;const w=new ve,T=new ve;let O=null;const st=new ce(0);let U=0,V=e.width,W=e.height,z=1,it=null,Z=null;const H=new ve(0,0,V,W),$=new ve(0,0,V,W);let J=!1;const K=new Vo;let j=!1,rt=!1,dt=null;const at=new ye,yt=new It,Pt=new N,Q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ht(){return I===null?z:1}let D=n;function ft(R,q){for(let nt=0;nt<R.length;nt++){const C=R[nt],F=e.getContext(C,q);if(F!==null)return F}return null}try{const R={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",S,!1),e.addEventListener("webglcontextcreationerror",B,!1),D===null){const q=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&q.shift(),D=ft(q,R),D===null)throw ft(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ot,_t,ct,Ft,vt,A,E,Y,Mt,pt,mt,Ot,At,Ut,Vt,Lt,xt,$t,Jt,Xt,Bt,Rt,Zt,te;function Gt(){ot=new Ku(D),_t=new Hu(D,ot,t),ot.init(_t),Rt=new N0(D,ot,_t),ct=new D0(D,ot,_t),Ft=new $u(D),vt=new v0,A=new U0(D,ot,ct,vt,_t,Rt,Ft),E=new Xu(_),Y=new Zu(_),Mt=new rh(D,_t),Zt=new zu(D,ot,Mt,_t),pt=new Ju(D,Mt,Ft,Zt),mt=new nf(D,pt,Mt,Ft),Jt=new ef(D,_t,A),Lt=new Wu(vt),Ot=new M0(_,E,Y,ot,_t,Zt,Lt),At=new B0(_,vt),Ut=new w0,Vt=new A0(ot,_t),$t=new ku(_,E,Y,ct,mt,l,c),xt=new I0(_,mt,_t),te=new k0(D,Ft,_t,ct),Xt=new Vu(D,ot,Ft,_t),Bt=new ju(D,ot,Ft,_t),Ft.programs=Ot.programs,_.capabilities=_t,_.extensions=ot,_.properties=vt,_.renderLists=Ut,_.shadowMap=xt,_.state=ct,_.info=Ft}Gt();const bt=new G0(_,D);this.xr=bt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(R){R!==void 0&&(z=R,this.setSize(V,W,!1))},this.getSize=function(R){return R.set(V,W)},this.setSize=function(R,q,nt=!0){if(bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,W=q,e.width=Math.floor(R*z),e.height=Math.floor(q*z),nt===!0&&(e.style.width=R+"px",e.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(V*z,W*z).floor()},this.setDrawingBufferSize=function(R,q,nt){V=R,W=q,z=nt,e.width=Math.floor(R*nt),e.height=Math.floor(q*nt),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(H)},this.setViewport=function(R,q,nt,C){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,q,nt,C),ct.viewport(w.copy(H).multiplyScalar(z).floor())},this.getScissor=function(R){return R.copy($)},this.setScissor=function(R,q,nt,C){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,q,nt,C),ct.scissor(T.copy($).multiplyScalar(z).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(R){ct.setScissorTest(J=R)},this.setOpaqueSort=function(R){it=R},this.setTransparentSort=function(R){Z=R},this.getClearColor=function(R){return R.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor.apply($t,arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha.apply($t,arguments)},this.clear=function(R=!0,q=!0,nt=!0){let C=0;if(R){let F=!1;if(I!==null){const et=I.texture.format;F=et===za||et===ka||et===Ba}if(F){const et=I.texture.type,St=et===Un||et===Pn||et===Bo||et===Zn||et===Oa||et===Ga,Nt=$t.getClearColor(),qt=$t.getClearAlpha(),jt=Nt.r,ee=Nt.g,ie=Nt.b;St?(u[0]=jt,u[1]=ee,u[2]=ie,u[3]=qt,D.clearBufferuiv(D.COLOR,0,u)):(g[0]=jt,g[1]=ee,g[2]=ie,g[3]=qt,D.clearBufferiv(D.COLOR,0,g))}else C|=D.COLOR_BUFFER_BIT}q&&(C|=D.DEPTH_BUFFER_BIT),nt&&(C|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",S,!1),e.removeEventListener("webglcontextcreationerror",B,!1),Ut.dispose(),Vt.dispose(),vt.dispose(),E.dispose(),Y.dispose(),mt.dispose(),Zt.dispose(),te.dispose(),Ot.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",ne),bt.removeEventListener("sessionend",Ht),dt&&(dt.dispose(),dt=null),ue.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function S(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Ft.autoReset,q=xt.enabled,nt=xt.autoUpdate,C=xt.needsUpdate,F=xt.type;Gt(),Ft.autoReset=R,xt.enabled=q,xt.autoUpdate=nt,xt.needsUpdate=C,xt.type=F}function B(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function tt(R){const q=R.target;q.removeEventListener("dispose",tt),Tt(q)}function Tt(R){lt(R),vt.remove(R)}function lt(R){const q=vt.get(R).programs;q!==void 0&&(q.forEach(function(nt){Ot.releaseProgram(nt)}),R.isShaderMaterial&&Ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,nt,C,F,et){q===null&&(q=Q);const St=F.isMesh&&F.matrixWorld.determinant()<0,Nt=yn(R,q,nt,C,F);ct.setMaterial(C,St);let qt=nt.index,jt=1;if(C.wireframe===!0){if(qt=pt.getWireframeAttribute(nt),qt===void 0)return;jt=2}const ee=nt.drawRange,ie=nt.attributes.position;let be=ee.start*jt,qe=(ee.start+ee.count)*jt;et!==null&&(be=Math.max(be,et.start*jt),qe=Math.min(qe,(et.start+et.count)*jt)),qt!==null?(be=Math.max(be,0),qe=Math.min(qe,qt.count)):ie!=null&&(be=Math.max(be,0),qe=Math.min(qe,ie.count));const Ie=qe-be;if(Ie<0||Ie===1/0)return;Zt.setup(F,C,Nt,nt,qt);let fn,xe=Xt;if(qt!==null&&(fn=Mt.get(qt),xe=Bt,xe.setIndex(fn)),F.isMesh)C.wireframe===!0?(ct.setLineWidth(C.wireframeLinewidth*ht()),xe.setMode(D.LINES)):xe.setMode(D.TRIANGLES);else if(F.isLine){let re=C.linewidth;re===void 0&&(re=1),ct.setLineWidth(re*ht()),F.isLineSegments?xe.setMode(D.LINES):F.isLineLoop?xe.setMode(D.LINE_LOOP):xe.setMode(D.LINE_STRIP)}else F.isPoints?xe.setMode(D.POINTS):F.isSprite&&xe.setMode(D.TRIANGLES);if(F.isBatchedMesh)xe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)xe.renderInstances(be,Ie,F.count);else if(nt.isInstancedBufferGeometry){const re=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,zs=Math.min(nt.instanceCount,re);xe.renderInstances(be,Ie,zs)}else xe.render(be,Ie)};function Et(R,q,nt){R.transparent===!0&&R.side===Ee&&R.forceSinglePass===!1?(R.side=He,R.needsUpdate=!0,Le(R,q,nt),R.side=Nn,R.needsUpdate=!0,Le(R,q,nt),R.side=Ee):Le(R,q,nt)}this.compile=function(R,q,nt=null){nt===null&&(nt=R),m=Vt.get(nt),m.init(),v.push(m),nt.traverseVisible(function(F){F.isLight&&F.layers.test(q.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),R!==nt&&R.traverseVisible(function(F){F.isLight&&F.layers.test(q.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights(_._useLegacyLights);const C=new Set;return R.traverse(function(F){const et=F.material;if(et)if(Array.isArray(et))for(let St=0;St<et.length;St++){const Nt=et[St];Et(Nt,nt,F),C.add(Nt)}else Et(et,nt,F),C.add(et)}),v.pop(),m=null,C},this.compileAsync=function(R,q,nt=null){const C=this.compile(R,q,nt);return new Promise(F=>{function et(){if(C.forEach(function(St){vt.get(St).currentProgram.isReady()&&C.delete(St)}),C.size===0){F(R);return}setTimeout(et,10)}ot.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let kt=null;function oe(R){kt&&kt(R)}function ne(){ue.stop()}function Ht(){ue.start()}const ue=new sc;ue.setAnimationLoop(oe),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(R){kt=R,bt.setAnimationLoop(R),R===null?ue.stop():ue.start()},bt.addEventListener("sessionstart",ne),bt.addEventListener("sessionend",Ht),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(q),q=bt.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,q,I),m=Vt.get(R,v.length),m.init(),v.push(m),at.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K.setFromProjectionMatrix(at),rt=this.localClippingEnabled,j=Lt.init(this.clippingPlanes,rt),x=Ut.get(R,p.length),x.init(),p.push(x),Ct(R,q,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(it,Z),this.info.render.frame++,j===!0&&Lt.beginShadows();const nt=m.state.shadowsArray;if(xt.render(nt,R,q),j===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset(),$t.render(x,R),m.setupLights(_._useLegacyLights),q.isArrayCamera){const C=q.cameras;for(let F=0,et=C.length;F<et;F++){const St=C[F];Qt(x,R,St,St.viewport)}}else Qt(x,R,q);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(_,R,q),Zt.resetDefaultState(),k=-1,b=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function Ct(R,q,nt,C){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)nt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){C&&Pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(at);const St=mt.update(R),Nt=R.material;Nt.visible&&x.push(R,St,Nt,nt,Pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const St=mt.update(R),Nt=R.material;if(C&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pt.copy(R.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Pt.copy(St.boundingSphere.center)),Pt.applyMatrix4(R.matrixWorld).applyMatrix4(at)),Array.isArray(Nt)){const qt=St.groups;for(let jt=0,ee=qt.length;jt<ee;jt++){const ie=qt[jt],be=Nt[ie.materialIndex];be&&be.visible&&x.push(R,St,be,nt,Pt.z,ie)}}else Nt.visible&&x.push(R,St,Nt,nt,Pt.z,null)}}const et=R.children;for(let St=0,Nt=et.length;St<Nt;St++)Ct(et[St],q,nt,C)}function Qt(R,q,nt,C){const F=R.opaque,et=R.transmissive,St=R.transparent;m.setupLightsView(nt),j===!0&&Lt.setGlobalState(_.clippingPlanes,nt),et.length>0&&zt(F,et,q,nt),C&&ct.viewport(w.copy(C)),F.length>0&&pe(F,q,nt),et.length>0&&pe(et,q,nt),St.length>0&&pe(St,q,nt),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function zt(R,q,nt,C){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;const et=_t.isWebGL2;dt===null&&(dt=new jn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")?qi:Un,minFilter:Xi,samples:et?4:0})),_.getDrawingBufferSize(yt),et?dt.setSize(yt.x,yt.y):dt.setSize(Ls(yt.x),Ls(yt.y));const St=_.getRenderTarget();_.setRenderTarget(dt),_.getClearColor(st),U=_.getClearAlpha(),U<1&&_.setClearColor(16777215,.5),_.clear();const Nt=_.toneMapping;_.toneMapping=Dn,pe(R,nt,C),A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt);let qt=!1;for(let jt=0,ee=q.length;jt<ee;jt++){const ie=q[jt],be=ie.object,qe=ie.geometry,Ie=ie.material,fn=ie.group;if(Ie.side===Ee&&be.layers.test(C.layers)){const xe=Ie.side;Ie.side=He,Ie.needsUpdate=!0,fe(be,nt,C,qe,Ie,fn),Ie.side=xe,Ie.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt)),_.setRenderTarget(St),_.setClearColor(st,U),_.toneMapping=Nt}function pe(R,q,nt){const C=q.isScene===!0?q.overrideMaterial:null;for(let F=0,et=R.length;F<et;F++){const St=R[F],Nt=St.object,qt=St.geometry,jt=C===null?St.material:C,ee=St.group;Nt.layers.test(nt.layers)&&fe(Nt,q,nt,qt,jt,ee)}}function fe(R,q,nt,C,F,et){R.onBeforeRender(_,q,nt,C,F,et),R.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),F.onBeforeRender(_,q,nt,C,R,et),F.transparent===!0&&F.side===Ee&&F.forceSinglePass===!1?(F.side=He,F.needsUpdate=!0,_.renderBufferDirect(nt,q,C,F,R,et),F.side=Nn,F.needsUpdate=!0,_.renderBufferDirect(nt,q,C,F,R,et),F.side=Ee):_.renderBufferDirect(nt,q,C,F,R,et),R.onAfterRender(_,q,nt,C,F,et)}function Le(R,q,nt){q.isScene!==!0&&(q=Q);const C=vt.get(R),F=m.state.lights,et=m.state.shadowsArray,St=F.state.version,Nt=Ot.getParameters(R,F.state,et,q,nt),qt=Ot.getProgramCacheKey(Nt);let jt=C.programs;C.environment=R.isMeshStandardMaterial?q.environment:null,C.fog=q.fog,C.envMap=(R.isMeshStandardMaterial?Y:E).get(R.envMap||C.environment),jt===void 0&&(R.addEventListener("dispose",tt),jt=new Map,C.programs=jt);let ee=jt.get(qt);if(ee!==void 0){if(C.currentProgram===ee&&C.lightsStateVersion===St)return an(R,Nt),ee}else Nt.uniforms=Ot.getUniforms(R),R.onBuild(nt,Nt,_),R.onBeforeCompile(Nt,_),ee=Ot.acquireProgram(Nt,qt),jt.set(qt,ee),C.uniforms=Nt.uniforms;const ie=C.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ie.clippingPlanes=Lt.uniform),an(R,Nt),C.needsLights=Fn(R),C.lightsStateVersion=St,C.needsLights&&(ie.ambientLightColor.value=F.state.ambient,ie.lightProbe.value=F.state.probe,ie.directionalLights.value=F.state.directional,ie.directionalLightShadows.value=F.state.directionalShadow,ie.spotLights.value=F.state.spot,ie.spotLightShadows.value=F.state.spotShadow,ie.rectAreaLights.value=F.state.rectArea,ie.ltc_1.value=F.state.rectAreaLTC1,ie.ltc_2.value=F.state.rectAreaLTC2,ie.pointLights.value=F.state.point,ie.pointLightShadows.value=F.state.pointShadow,ie.hemisphereLights.value=F.state.hemi,ie.directionalShadowMap.value=F.state.directionalShadowMap,ie.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ie.spotShadowMap.value=F.state.spotShadowMap,ie.spotLightMatrix.value=F.state.spotLightMatrix,ie.spotLightMap.value=F.state.spotLightMap,ie.pointShadowMap.value=F.state.pointShadowMap,ie.pointShadowMatrix.value=F.state.pointShadowMatrix),C.currentProgram=ee,C.uniformsList=null,ee}function rn(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Es.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function an(R,q){const nt=vt.get(R);nt.outputColorSpace=q.outputColorSpace,nt.batching=q.batching,nt.instancing=q.instancing,nt.instancingColor=q.instancingColor,nt.skinning=q.skinning,nt.morphTargets=q.morphTargets,nt.morphNormals=q.morphNormals,nt.morphColors=q.morphColors,nt.morphTargetsCount=q.morphTargetsCount,nt.numClippingPlanes=q.numClippingPlanes,nt.numIntersection=q.numClipIntersection,nt.vertexAlphas=q.vertexAlphas,nt.vertexTangents=q.vertexTangents,nt.toneMapping=q.toneMapping}function yn(R,q,nt,C,F){q.isScene!==!0&&(q=Q),A.resetTextureUnits();const et=q.fog,St=C.isMeshStandardMaterial?q.environment:null,Nt=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:wn,qt=(C.isMeshStandardMaterial?Y:E).get(C.envMap||St),jt=C.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ee=!!nt.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),ie=!!nt.morphAttributes.position,be=!!nt.morphAttributes.normal,qe=!!nt.morphAttributes.color;let Ie=Dn;C.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ie=_.toneMapping);const fn=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,xe=fn!==void 0?fn.length:0,re=vt.get(C),zs=m.state.lights;if(j===!0&&(rt===!0||R!==b)){const Ke=R===b&&C.id===k;Lt.setState(C,R,Ke)}let Se=!1;C.version===re.__version?(re.needsLights&&re.lightsStateVersion!==zs.state.version||re.outputColorSpace!==Nt||F.isBatchedMesh&&re.batching===!1||!F.isBatchedMesh&&re.batching===!0||F.isInstancedMesh&&re.instancing===!1||!F.isInstancedMesh&&re.instancing===!0||F.isSkinnedMesh&&re.skinning===!1||!F.isSkinnedMesh&&re.skinning===!0||F.isInstancedMesh&&re.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&re.instancingColor===!1&&F.instanceColor!==null||re.envMap!==qt||C.fog===!0&&re.fog!==et||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Lt.numPlanes||re.numIntersection!==Lt.numIntersection)||re.vertexAlphas!==jt||re.vertexTangents!==ee||re.morphTargets!==ie||re.morphNormals!==be||re.morphColors!==qe||re.toneMapping!==Ie||_t.isWebGL2===!0&&re.morphTargetsCount!==xe)&&(Se=!0):(Se=!0,re.__version=C.version);let On=re.currentProgram;Se===!0&&(On=Le(C,q,F));let $o=!1,Ii=!1,Vs=!1;const Oe=On.getUniforms(),Gn=re.uniforms;if(ct.useProgram(On.program)&&($o=!0,Ii=!0,Vs=!0),C.id!==k&&(k=C.id,Ii=!0),$o||b!==R){Oe.setValue(D,"projectionMatrix",R.projectionMatrix),Oe.setValue(D,"viewMatrix",R.matrixWorldInverse);const Ke=Oe.map.cameraPosition;Ke!==void 0&&Ke.setValue(D,Pt.setFromMatrixPosition(R.matrixWorld)),_t.logarithmicDepthBuffer&&Oe.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&Oe.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Ii=!0,Vs=!0)}if(F.isSkinnedMesh){Oe.setOptional(D,F,"bindMatrix"),Oe.setOptional(D,F,"bindMatrixInverse");const Ke=F.skeleton;Ke&&(_t.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Oe.setValue(D,"boneTexture",Ke.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}F.isBatchedMesh&&(Oe.setOptional(D,F,"batchingTexture"),Oe.setValue(D,"batchingTexture",F._matricesTexture,A));const Hs=nt.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0&&_t.isWebGL2===!0)&&Jt.update(F,nt,On),(Ii||re.receiveShadow!==F.receiveShadow)&&(re.receiveShadow=F.receiveShadow,Oe.setValue(D,"receiveShadow",F.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(Gn.envMap.value=qt,Gn.flipEnvMap.value=qt.isCubeTexture&&qt.isRenderTargetTexture===!1?-1:1),Ii&&(Oe.setValue(D,"toneMappingExposure",_.toneMappingExposure),re.needsLights&&un(Gn,Vs),et&&C.fog===!0&&At.refreshFogUniforms(Gn,et),At.refreshMaterialUniforms(Gn,C,z,W,dt),Es.upload(D,rn(re),Gn,A)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Es.upload(D,rn(re),Gn,A),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&Oe.setValue(D,"center",F.center),Oe.setValue(D,"modelViewMatrix",F.modelViewMatrix),Oe.setValue(D,"normalMatrix",F.normalMatrix),Oe.setValue(D,"modelMatrix",F.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){const Ke=C.uniformsGroups;for(let Ws=0,yc=Ke.length;Ws<yc;Ws++)if(_t.isWebGL2){const Qo=Ke[Ws];te.update(Qo,On),te.bind(Qo,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function un(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Fn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,q,nt){vt.get(R.texture).__webglTexture=q,vt.get(R.depthTexture).__webglTexture=nt;const C=vt.get(R);C.__hasExternalTextures=!0,C.__hasExternalTextures&&(C.__autoAllocateDepthBuffer=nt===void 0,C.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),C.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,q){const nt=vt.get(R);nt.__webglFramebuffer=q,nt.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(R,q=0,nt=0){I=R,P=q,L=nt;let C=!0,F=null,et=!1,St=!1;if(R){const qt=vt.get(R);qt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(D.FRAMEBUFFER,null),C=!1):qt.__webglFramebuffer===void 0?A.setupRenderTarget(R):qt.__hasExternalTextures&&A.rebindTextures(R,vt.get(R.texture).__webglTexture,vt.get(R.depthTexture).__webglTexture);const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(St=!0);const ee=vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?F=ee[q][nt]:F=ee[q],et=!0):_t.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?F=vt.get(R).__webglMultisampledFramebuffer:Array.isArray(ee)?F=ee[nt]:F=ee,w.copy(R.viewport),T.copy(R.scissor),O=R.scissorTest}else w.copy(H).multiplyScalar(z).floor(),T.copy($).multiplyScalar(z).floor(),O=J;if(ct.bindFramebuffer(D.FRAMEBUFFER,F)&&_t.drawBuffers&&C&&ct.drawBuffers(R,F),ct.viewport(w),ct.scissor(T),ct.setScissorTest(O),et){const qt=vt.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+q,qt.__webglTexture,nt)}else if(St){const qt=vt.get(R.texture),jt=q||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,qt.__webglTexture,nt||0,jt)}k=-1},this.readRenderTargetPixels=function(R,q,nt,C,F,et,St){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&St!==void 0&&(Nt=Nt[St]),Nt){ct.bindFramebuffer(D.FRAMEBUFFER,Nt);try{const qt=R.texture,jt=qt.format,ee=qt.type;if(jt!==on&&Rt.convert(jt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ie=ee===qi&&(ot.has("EXT_color_buffer_half_float")||_t.isWebGL2&&ot.has("EXT_color_buffer_float"));if(ee!==Un&&Rt.convert(ee)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ee===Cn&&(_t.isWebGL2||ot.has("OES_texture_float")||ot.has("WEBGL_color_buffer_float")))&&!ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-C&&nt>=0&&nt<=R.height-F&&D.readPixels(q,nt,C,F,Rt.convert(jt),Rt.convert(ee),et)}finally{const qt=I!==null?vt.get(I).__webglFramebuffer:null;ct.bindFramebuffer(D.FRAMEBUFFER,qt)}}},this.copyFramebufferToTexture=function(R,q,nt=0){const C=Math.pow(2,-nt),F=Math.floor(q.image.width*C),et=Math.floor(q.image.height*C);A.setTexture2D(q,0),D.copyTexSubImage2D(D.TEXTURE_2D,nt,0,0,R.x,R.y,F,et),ct.unbindTexture()},this.copyTextureToTexture=function(R,q,nt,C=0){const F=q.image.width,et=q.image.height,St=Rt.convert(nt.format),Nt=Rt.convert(nt.type);A.setTexture2D(nt,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,nt.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,nt.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,nt.unpackAlignment),q.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,C,R.x,R.y,F,et,St,Nt,q.image.data):q.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,C,R.x,R.y,q.mipmaps[0].width,q.mipmaps[0].height,St,q.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,C,R.x,R.y,St,Nt,q.image),C===0&&nt.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ct.unbindTexture()},this.copyTextureToTexture3D=function(R,q,nt,C,F=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const et=R.max.x-R.min.x+1,St=R.max.y-R.min.y+1,Nt=R.max.z-R.min.z+1,qt=Rt.convert(C.format),jt=Rt.convert(C.type);let ee;if(C.isData3DTexture)A.setTexture3D(C,0),ee=D.TEXTURE_3D;else if(C.isDataArrayTexture||C.isCompressedArrayTexture)A.setTexture2DArray(C,0),ee=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const ie=D.getParameter(D.UNPACK_ROW_LENGTH),be=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qe=D.getParameter(D.UNPACK_SKIP_PIXELS),Ie=D.getParameter(D.UNPACK_SKIP_ROWS),fn=D.getParameter(D.UNPACK_SKIP_IMAGES),xe=nt.isCompressedTexture?nt.mipmaps[F]:nt.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,R.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,R.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,R.min.z),nt.isDataTexture||nt.isData3DTexture?D.texSubImage3D(ee,F,q.x,q.y,q.z,et,St,Nt,qt,jt,xe.data):nt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(ee,F,q.x,q.y,q.z,et,St,Nt,qt,xe.data)):D.texSubImage3D(ee,F,q.x,q.y,q.z,et,St,Nt,qt,jt,xe),D.pixelStorei(D.UNPACK_ROW_LENGTH,ie),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,be),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fn),F===0&&C.generateMipmaps&&D.generateMipmap(ee),ct.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),ct.unbindTexture()},this.resetState=function(){P=0,L=0,I=null,ct.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ko?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===Ns?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?Jn:Ha}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Jn?Ne:wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class z0 extends uc{}z0.prototype.isWebGL1Renderer=!0;class Wo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(t),this.density=e}clone(){return new Wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class V0 extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class fc extends Ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xa=new N,wa=new N,Sa=new ye,wo=new Ja,xs=new Fs;class H0 extends Ae{constructor(t=new Fe,e=new fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)xa.fromBufferAttribute(e,i-1),wa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=xa.distanceTo(wa);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=o,t.ray.intersectsSphere(xs)===!1)return;Sa.copy(i).invert(),wo.copy(t.ray).applyMatrix4(Sa);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,h=new N,d=new N,f=new N,l=new N,u=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const p=Math.max(0,r.start),v=Math.min(g.count,r.start+r.count);for(let _=p,y=v-1;_<y;_+=u){const P=g.getX(_),L=g.getX(_+1);if(h.fromBufferAttribute(m,P),d.fromBufferAttribute(m,L),wo.distanceSqToSegment(h,d,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(l);k<t.near||k>t.far||e.push({distance:k,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,r.start),v=Math.min(m.count,r.start+r.count);for(let _=p,y=v-1;_<y;_+=u){if(h.fromBufferAttribute(m,_),d.fromBufferAttribute(m,_+1),wo.distanceSqToSegment(h,d,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(l);L<t.near||L>t.far||e.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}class le extends Xe{constructor(t,e,n,i,o,r,a,c,h){super(t,e,n,i,o,r,a,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,h;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),h=n[i]-r,h<0)a=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===r)return i/(o-1);const d=n[i],l=n[i+1]-d,u=(r-d)/l;return(i+u)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const r=this.getPoint(i),a=this.getPoint(o),c=e||(r.isVector2?new It:new N);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],o=[],r=[],a=new N,c=new ye;for(let u=0;u<=t;u++){const g=u/t;i[u]=this.getTangentAt(g,new N)}o[0]=new N,r[0]=new N;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),f=Math.abs(i[0].y),l=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),l<=h&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],a),r[0].crossVectors(i[0],o[0]);for(let u=1;u<=t;u++){if(o[u]=o[u-1].clone(),r[u]=r[u-1].clone(),a.crossVectors(i[u-1],i[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ue(i[u-1].dot(i[u]),-1,1));o[u].applyMatrix4(c.makeRotationAxis(a,g))}r[u].crossVectors(i[u],o[u])}if(e===!0){let u=Math.acos(Ue(o[0].dot(o[t]),-1,1));u/=t,i[0].dot(a.crossVectors(o[0],o[t]))>0&&(u=-u);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(i[g],u*g)),r[g].crossVectors(i[g],o[g])}return{tangents:i,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xo extends dn{constructor(t=0,e=0,n=1,i=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e){const n=e||new It,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(r?o=0:o=i),this.aClockwise===!0&&!r&&(o===i?o=-i:o=o-i);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),l=c-this.aX,u=h-this.aY;c=l*d-u*f+this.aX,h=l*f+u*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class W0 extends Xo{constructor(t,e,n,i,o,r){super(t,e,n,n,i,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function qo(){let s=0,t=0,e=0,n=0;function i(o,r,a,c){s=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,h){i(r,a,h*(a-o),h*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,h,d,f){let l=(r-o)/h-(a-o)/(h+d)+(a-r)/d,u=(a-r)/d-(c-r)/(d+f)+(c-a)/f;l*=d,u*=d,i(r,a,l,u)},calc:function(o){const r=o*o,a=r*o;return s+t*o+e*r+n*a}}}const ws=new N,So=new qo,yo=new qo,bo=new qo;class Yn extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,o=i.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let h,d;this.closed||a>0?h=i[(a-1)%o]:(ws.subVectors(i[0],i[1]).add(i[0]),h=ws);const f=i[a%o],l=i[(a+1)%o];if(this.closed||a+2<o?d=i[(a+2)%o]:(ws.subVectors(i[o-1],i[o-2]).add(i[o-1]),d=ws),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(l),u),m=Math.pow(l.distanceToSquared(d),u);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),So.initNonuniformCatmullRom(h.x,f.x,l.x,d.x,g,x,m),yo.initNonuniformCatmullRom(h.y,f.y,l.y,d.y,g,x,m),bo.initNonuniformCatmullRom(h.z,f.z,l.z,d.z,g,x,m)}else this.curveType==="catmullrom"&&(So.initCatmullRom(h.x,f.x,l.x,d.x,this.tension),yo.initCatmullRom(h.y,f.y,l.y,d.y,this.tension),bo.initCatmullRom(h.z,f.z,l.z,d.z,this.tension));return n.set(So.calc(c),yo.calc(c),bo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ya(s,t,e,n,i){const o=(n-t)*.5,r=(i-e)*.5,a=s*s,c=s*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*s+e}function X0(s,t){const e=1-s;return e*e*t}function q0(s,t){return 2*(1-s)*s*t}function Y0(s,t){return s*s*t}function Vi(s,t,e,n){return X0(s,t)+q0(s,e)+Y0(s,n)}function Z0(s,t){const e=1-s;return e*e*e*t}function K0(s,t){const e=1-s;return 3*e*e*s*t}function J0(s,t){return 3*(1-s)*s*s*t}function j0(s,t){return s*s*s*t}function Hi(s,t,e,n,i){return Z0(s,t)+K0(s,e)+J0(s,n)+j0(s,i)}class pc extends dn{constructor(t=new It,e=new It,n=new It,i=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new It){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Hi(t,i.x,o.x,r.x,a.x),Hi(t,i.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $0 extends dn{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Hi(t,i.x,o.x,r.x,a.x),Hi(t,i.y,o.y,r.y,a.y),Hi(t,i.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mc extends dn{constructor(t=new It,e=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new It){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new It){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q0 extends dn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends dn{constructor(t=new It,e=new It,n=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new It){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Vi(t,i.x,o.x,r.x),Vi(t,i.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends dn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,r=this.v2;return n.set(Vi(t,i.x,o.x,r.x),Vi(t,i.y,o.y,r.y),Vi(t,i.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new It){const n=e,i=this.points,o=(i.length-1)*t,r=Math.floor(o),a=o-r,c=i[r===0?r:r-1],h=i[r],d=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(ya(a,c.x,h.x,d.x,f.x),ya(a,c.y,h.y,d.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new It().fromArray(i))}return this}}var Ds=Object.freeze({__proto__:null,ArcCurve:W0,CatmullRomCurve3:Yn,CubicBezierCurve:pc,CubicBezierCurve3:$0,EllipseCurve:Xo,LineCurve:mc,LineCurve3:Q0,QuadraticBezierCurve:gc,QuadraticBezierCurve3:_c,SplineCurve:Mc});class tp extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ds[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const r=i[o]-n,a=this.curves[o],c=a.getLength(),h=c===0?0:1-r/c;return a.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const r=o[i],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let h=0;h<c.length;h++){const d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ds[i.type]().fromJSON(i))}return this}}class ba extends tp{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mc(this.currentPoint.clone(),new It(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new gc(this.currentPoint.clone(),new It(t,e),new It(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,r){const a=new pc(this.currentPoint.clone(),new It(t,e),new It(n,i),new It(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,o,r),this}absarc(t,e,n,i,o,r){return this.absellipse(t,e,n,n,i,o,r),this}ellipse(t,e,n,i,o,r,a,c){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,i,o,r,a,c),this}absellipse(t,e,n,i,o,r,a,c){const h=new Xo(t,e,n,i,o,r,a,c);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class ji extends Fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],c=[],h=new N,d=new It;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,l=3;f<=e;f++,l+=3){const u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),r.push(h.x,h.y,h.z),a.push(0,0,1),d.x=(r[l]/t+1)/2,d.y=(r[l+1]/t+1)/2,c.push(d.x,d.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ji(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ut extends Fe{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const h=this;i=Math.floor(i),o=Math.floor(o);const d=[],f=[],l=[],u=[];let g=0;const x=[],m=n/2;let p=0;v(),r===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(u,2));function v(){const y=new N,P=new N;let L=0;const I=(e-t)/n;for(let k=0;k<=o;k++){const b=[],w=k/o,T=w*(e-t)+t;for(let O=0;O<=i;O++){const st=O/i,U=st*c+a,V=Math.sin(U),W=Math.cos(U);P.x=T*V,P.y=-w*n+m,P.z=T*W,f.push(P.x,P.y,P.z),y.set(V,I,W).normalize(),l.push(y.x,y.y,y.z),u.push(st,1-w),b.push(g++)}x.push(b)}for(let k=0;k<i;k++)for(let b=0;b<o;b++){const w=x[b][k],T=x[b+1][k],O=x[b+1][k+1],st=x[b][k+1];d.push(w,T,st),d.push(T,O,st),L+=6}h.addGroup(p,L,0),p+=L}function _(y){const P=g,L=new It,I=new N;let k=0;const b=y===!0?t:e,w=y===!0?1:-1;for(let O=1;O<=i;O++)f.push(0,m*w,0),l.push(0,w,0),u.push(.5,.5),g++;const T=g;for(let O=0;O<=i;O++){const U=O/i*c+a,V=Math.cos(U),W=Math.sin(U);I.x=b*W,I.y=m*w,I.z=b*V,f.push(I.x,I.y,I.z),l.push(0,w,0),L.x=V*.5+.5,L.y=W*.5*w+.5,u.push(L.x,L.y),g++}for(let O=0;O<i;O++){const st=P+O,U=T+O;y===!0?d.push(U,U+1,st):d.push(U+1,U,st),k+=3}h.addGroup(p,k,y===!0?1:2),p+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ut(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class _e extends ut{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new _e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yo extends Fe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),h(n),d(),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(o.slice(),3)),this.setAttribute("uv",new de(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new N,y=new N,P=new N;for(let L=0;L<e.length;L+=3)u(e[L+0],_),u(e[L+1],y),u(e[L+2],P),c(_,y,P,v)}function c(v,_,y,P){const L=P+1,I=[];for(let k=0;k<=L;k++){I[k]=[];const b=v.clone().lerp(y,k/L),w=_.clone().lerp(y,k/L),T=L-k;for(let O=0;O<=T;O++)O===0&&k===L?I[k][O]=b:I[k][O]=b.clone().lerp(w,O/T)}for(let k=0;k<L;k++)for(let b=0;b<2*(L-k)-1;b++){const w=Math.floor(b/2);b%2===0?(l(I[k][w+1]),l(I[k+1][w]),l(I[k][w])):(l(I[k][w+1]),l(I[k+1][w+1]),l(I[k+1][w]))}}function h(v){const _=new N;for(let y=0;y<o.length;y+=3)_.x=o[y+0],_.y=o[y+1],_.z=o[y+2],_.normalize().multiplyScalar(v),o[y+0]=_.x,o[y+1]=_.y,o[y+2]=_.z}function d(){const v=new N;for(let _=0;_<o.length;_+=3){v.x=o[_+0],v.y=o[_+1],v.z=o[_+2];const y=m(v)/2/Math.PI+.5,P=p(v)/Math.PI+.5;r.push(y,1-P)}g(),f()}function f(){for(let v=0;v<r.length;v+=6){const _=r[v+0],y=r[v+2],P=r[v+4],L=Math.max(_,y,P),I=Math.min(_,y,P);L>.9&&I<.1&&(_<.2&&(r[v+0]+=1),y<.2&&(r[v+2]+=1),P<.2&&(r[v+4]+=1))}}function l(v){o.push(v.x,v.y,v.z)}function u(v,_){const y=v*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function g(){const v=new N,_=new N,y=new N,P=new N,L=new It,I=new It,k=new It;for(let b=0,w=0;b<o.length;b+=9,w+=6){v.set(o[b+0],o[b+1],o[b+2]),_.set(o[b+3],o[b+4],o[b+5]),y.set(o[b+6],o[b+7],o[b+8]),L.set(r[w+0],r[w+1]),I.set(r[w+2],r[w+3]),k.set(r[w+4],r[w+5]),P.copy(v).add(_).add(y).divideScalar(3);const T=m(P);x(L,w+0,v,T),x(I,w+2,_,T),x(k,w+4,y,T)}}function x(v,_,y,P){P<0&&v.x===1&&(r[_]=v.x-1),y.x===0&&y.z===0&&(r[_]=P/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.vertices,t.indices,t.radius,t.details)}}class Zo extends Yo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zo(t.radius,t.detail)}}class vc extends ba{constructor(t){super(t),this.uuid=ei(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ba().fromJSON(i))}return this}}const ep={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=xc(s,0,i,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,h,d,f,l,u;if(n&&(o=rp(s,t,o,e)),s.length>80*e){a=h=s[0],c=d=s[1];for(let g=e;g<i;g+=e)f=s[g],l=s[g+1],f<a&&(a=f),l<c&&(c=l),f>h&&(h=f),l>d&&(d=l);u=Math.max(h-a,d-c),u=u!==0?32767/u:0}return Yi(o,r,e,a,c,u,0),r}};function xc(s,t,e,n,i){let o,r;if(i===_p(s,t,e,n)>0)for(o=t;o<e;o+=n)r=Ea(o,s[o],s[o+1],r);else for(o=e-n;o>=t;o-=n)r=Ea(o,s[o],s[o+1],r);return r&&Bs(r,r.next)&&(Ki(r),r=r.next),r}function Qn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Bs(e,e.next)||we(e.prev,e,e.next)===0)){if(Ki(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Yi(s,t,e,n,i,o,r){if(!s)return;!r&&o&&dp(s,n,i,o);let a=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,o?ip(s,n,i,o):np(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),Ki(s),s=h.next,a=h.next;continue}if(s=h,s===a){r?r===1?(s=sp(Qn(s),t,e),Yi(s,t,e,n,i,o,2)):r===2&&op(s,t,e,n,i,o):Yi(Qn(s),t,e,n,i,o,1);break}}}function np(s){const t=s.prev,e=s,n=s.next;if(we(t,e,n)>=0)return!1;const i=t.x,o=e.x,r=n.x,a=t.y,c=e.y,h=n.y,d=i<o?i<r?i:r:o<r?o:r,f=a<c?a<h?a:h:c<h?c:h,l=i>o?i>r?i:r:o>r?o:r,u=a>c?a>h?a:h:c>h?c:h;let g=n.next;for(;g!==t;){if(g.x>=d&&g.x<=l&&g.y>=f&&g.y<=u&&wi(i,a,o,c,r,h,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ip(s,t,e,n){const i=s.prev,o=s,r=s.next;if(we(i,o,r)>=0)return!1;const a=i.x,c=o.x,h=r.x,d=i.y,f=o.y,l=r.y,u=a<c?a<h?a:h:c<h?c:h,g=d<f?d<l?d:l:f<l?f:l,x=a>c?a>h?a:h:c>h?c:h,m=d>f?d>l?d:l:f>l?f:l,p=No(u,g,t,e,n),v=No(x,m,t,e,n);let _=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=v;){if(_.x>=u&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==r&&wi(a,d,c,f,h,l,_.x,_.y)&&we(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=u&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==r&&wi(a,d,c,f,h,l,y.x,y.y)&&we(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=u&&_.x<=x&&_.y>=g&&_.y<=m&&_!==i&&_!==r&&wi(a,d,c,f,h,l,_.x,_.y)&&we(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=u&&y.x<=x&&y.y>=g&&y.y<=m&&y!==i&&y!==r&&wi(a,d,c,f,h,l,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function sp(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Bs(i,o)&&wc(i,n,n.next,o)&&Zi(i,o)&&Zi(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Ki(n),Ki(n.next),n=s=o),n=n.next}while(n!==s);return Qn(n)}function op(s,t,e,n,i,o){let r=s;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&pp(r,a)){let c=Sc(r,a);r=Qn(r,r.next),c=Qn(c,c.next),Yi(r,t,e,n,i,o,0),Yi(c,t,e,n,i,o,0);return}a=a.next}r=r.next}while(r!==s)}function rp(s,t,e,n){const i=[];let o,r,a,c,h;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:s.length,h=xc(s,a,c,n,!1),h===h.next&&(h.steiner=!0),i.push(fp(h));for(i.sort(ap),o=0;o<i.length;o++)e=cp(i[o],e);return e}function ap(s,t){return s.x-t.x}function cp(s,t){const e=lp(s,t);if(!e)return t;const n=Sc(e,s);return Qn(n,n.next),Qn(e,e.next)}function lp(s,t){let e=t,n=-1/0,i;const o=s.x,r=s.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const l=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=o&&l>n&&(n=l,i=e.x<e.next.x?e:e.next,l===o))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,c=i.x,h=i.y;let d=1/0,f;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&wi(r<h?o:n,r,c,h,r<h?n:o,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(o-e.x),Zi(e,s)&&(f<d||f===d&&(e.x>i.x||e.x===i.x&&hp(i,e)))&&(i=e,d=f)),e=e.next;while(e!==a);return i}function hp(s,t){return we(s.prev,s,t.prev)<0&&we(t.next,s,s.next)<0}function dp(s,t,e,n){let i=s;do i.z===0&&(i.z=No(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,up(i)}function up(s){let t,e,n,i,o,r,a,c,h=1;do{for(e=s,s=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(c=h;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,h*=2}while(r>1);return s}function No(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function fp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function wi(s,t,e,n,i,o,r,a){return(i-r)*(t-a)>=(s-r)*(o-a)&&(s-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(i-r)*(n-a)}function pp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!mp(s,t)&&(Zi(s,t)&&Zi(t,s)&&gp(s,t)&&(we(s.prev,s,t.prev)||we(s,t.prev,t))||Bs(s,t)&&we(s.prev,s,s.next)>0&&we(t.prev,t,t.next)>0)}function we(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Bs(s,t){return s.x===t.x&&s.y===t.y}function wc(s,t,e,n){const i=ys(we(s,t,e)),o=ys(we(s,t,n)),r=ys(we(e,n,s)),a=ys(we(e,n,t));return!!(i!==o&&r!==a||i===0&&Ss(s,e,t)||o===0&&Ss(s,n,t)||r===0&&Ss(e,s,n)||a===0&&Ss(e,t,n))}function Ss(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ys(s){return s>0?1:s<0?-1:0}function mp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&wc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Zi(s,t){return we(s.prev,s,s.next)<0?we(s,t,s.next)>=0&&we(s,s.prev,t)>=0:we(s,t,s.prev)<0||we(s,s.next,t)<0}function gp(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Sc(s,t){const e=new Fo(s.i,s.x,s.y),n=new Fo(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ea(s,t,e,n){const i=new Fo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ki(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _p(s,t,e,n){let i=0;for(let o=t,r=e-n;o<e;o+=n)i+=(s[r]-s[o])*(s[o+1]+s[r+1]),r=o;return i}class Wi{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Wi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Ta(t),Aa(n,t);let r=t.length;e.forEach(Ta);for(let c=0;c<e.length;c++)i.push(r),r+=e[c].length,Aa(n,e[c]);const a=ep.triangulate(n,i);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Ta(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Aa(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ko extends Fe{constructor(t=new vc([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let a=0,c=t.length;a<c;a++){const h=t[a];r(h)}this.setAttribute("position",new de(i,3)),this.setAttribute("uv",new de(o,2)),this.computeVertexNormals();function r(a){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let l=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Mp;let _,y=!1,P,L,I,k;p&&(_=p.getSpacedPoints(d),y=!0,l=!1,P=p.computeFrenetFrames(d,!1),L=new N,I=new N,k=new N),l||(m=0,u=0,g=0,x=0);const b=a.extractPoints(h);let w=b.shape;const T=b.holes;if(!Wi.isClockWise(w)){w=w.reverse();for(let D=0,ft=T.length;D<ft;D++){const ot=T[D];Wi.isClockWise(ot)&&(T[D]=ot.reverse())}}const st=Wi.triangulateShape(w,T),U=w;for(let D=0,ft=T.length;D<ft;D++){const ot=T[D];w=w.concat(ot)}function V(D,ft,ot){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(ft,ot)}const W=w.length,z=st.length;function it(D,ft,ot){let _t,ct,Ft;const vt=D.x-ft.x,A=D.y-ft.y,E=ot.x-D.x,Y=ot.y-D.y,Mt=vt*vt+A*A,pt=vt*Y-A*E;if(Math.abs(pt)>Number.EPSILON){const mt=Math.sqrt(Mt),Ot=Math.sqrt(E*E+Y*Y),At=ft.x-A/mt,Ut=ft.y+vt/mt,Vt=ot.x-Y/Ot,Lt=ot.y+E/Ot,xt=((Vt-At)*Y-(Lt-Ut)*E)/(vt*Y-A*E);_t=At+vt*xt-D.x,ct=Ut+A*xt-D.y;const $t=_t*_t+ct*ct;if($t<=2)return new It(_t,ct);Ft=Math.sqrt($t/2)}else{let mt=!1;vt>Number.EPSILON?E>Number.EPSILON&&(mt=!0):vt<-Number.EPSILON?E<-Number.EPSILON&&(mt=!0):Math.sign(A)===Math.sign(Y)&&(mt=!0),mt?(_t=-A,ct=vt,Ft=Math.sqrt(Mt)):(_t=vt,ct=A,Ft=Math.sqrt(Mt/2))}return new It(_t/Ft,ct/Ft)}const Z=[];for(let D=0,ft=U.length,ot=ft-1,_t=D+1;D<ft;D++,ot++,_t++)ot===ft&&(ot=0),_t===ft&&(_t=0),Z[D]=it(U[D],U[ot],U[_t]);const H=[];let $,J=Z.concat();for(let D=0,ft=T.length;D<ft;D++){const ot=T[D];$=[];for(let _t=0,ct=ot.length,Ft=ct-1,vt=_t+1;_t<ct;_t++,Ft++,vt++)Ft===ct&&(Ft=0),vt===ct&&(vt=0),$[_t]=it(ot[_t],ot[Ft],ot[vt]);H.push($),J=J.concat($)}for(let D=0;D<m;D++){const ft=D/m,ot=u*Math.cos(ft*Math.PI/2),_t=g*Math.sin(ft*Math.PI/2)+x;for(let ct=0,Ft=U.length;ct<Ft;ct++){const vt=V(U[ct],Z[ct],_t);at(vt.x,vt.y,-ot)}for(let ct=0,Ft=T.length;ct<Ft;ct++){const vt=T[ct];$=H[ct];for(let A=0,E=vt.length;A<E;A++){const Y=V(vt[A],$[A],_t);at(Y.x,Y.y,-ot)}}}const K=g+x;for(let D=0;D<W;D++){const ft=l?V(w[D],J[D],K):w[D];y?(I.copy(P.normals[0]).multiplyScalar(ft.x),L.copy(P.binormals[0]).multiplyScalar(ft.y),k.copy(_[0]).add(I).add(L),at(k.x,k.y,k.z)):at(ft.x,ft.y,0)}for(let D=1;D<=d;D++)for(let ft=0;ft<W;ft++){const ot=l?V(w[ft],J[ft],K):w[ft];y?(I.copy(P.normals[D]).multiplyScalar(ot.x),L.copy(P.binormals[D]).multiplyScalar(ot.y),k.copy(_[D]).add(I).add(L),at(k.x,k.y,k.z)):at(ot.x,ot.y,f/d*D)}for(let D=m-1;D>=0;D--){const ft=D/m,ot=u*Math.cos(ft*Math.PI/2),_t=g*Math.sin(ft*Math.PI/2)+x;for(let ct=0,Ft=U.length;ct<Ft;ct++){const vt=V(U[ct],Z[ct],_t);at(vt.x,vt.y,f+ot)}for(let ct=0,Ft=T.length;ct<Ft;ct++){const vt=T[ct];$=H[ct];for(let A=0,E=vt.length;A<E;A++){const Y=V(vt[A],$[A],_t);y?at(Y.x,Y.y+_[d-1].y,_[d-1].x+ot):at(Y.x,Y.y,f+ot)}}}j(),rt();function j(){const D=i.length/3;if(l){let ft=0,ot=W*ft;for(let _t=0;_t<z;_t++){const ct=st[_t];yt(ct[2]+ot,ct[1]+ot,ct[0]+ot)}ft=d+m*2,ot=W*ft;for(let _t=0;_t<z;_t++){const ct=st[_t];yt(ct[0]+ot,ct[1]+ot,ct[2]+ot)}}else{for(let ft=0;ft<z;ft++){const ot=st[ft];yt(ot[2],ot[1],ot[0])}for(let ft=0;ft<z;ft++){const ot=st[ft];yt(ot[0]+W*d,ot[1]+W*d,ot[2]+W*d)}}n.addGroup(D,i.length/3-D,0)}function rt(){const D=i.length/3;let ft=0;dt(U,ft),ft+=U.length;for(let ot=0,_t=T.length;ot<_t;ot++){const ct=T[ot];dt(ct,ft),ft+=ct.length}n.addGroup(D,i.length/3-D,1)}function dt(D,ft){let ot=D.length;for(;--ot>=0;){const _t=ot;let ct=ot-1;ct<0&&(ct=D.length-1);for(let Ft=0,vt=d+m*2;Ft<vt;Ft++){const A=W*Ft,E=W*(Ft+1),Y=ft+_t+A,Mt=ft+ct+A,pt=ft+ct+E,mt=ft+_t+E;Pt(Y,Mt,pt,mt)}}}function at(D,ft,ot){c.push(D),c.push(ft),c.push(ot)}function yt(D,ft,ot){Q(D),Q(ft),Q(ot);const _t=i.length/3,ct=v.generateTopUV(n,i,_t-3,_t-2,_t-1);ht(ct[0]),ht(ct[1]),ht(ct[2])}function Pt(D,ft,ot,_t){Q(D),Q(ft),Q(_t),Q(ft),Q(ot),Q(_t);const ct=i.length/3,Ft=v.generateSideWallUV(n,i,ct-6,ct-3,ct-2,ct-1);ht(Ft[0]),ht(Ft[1]),ht(Ft[3]),ht(Ft[1]),ht(Ft[2]),ht(Ft[3])}function Q(D){i.push(c[D*3+0]),i.push(c[D*3+1]),i.push(c[D*3+2])}function ht(D){o.push(D.x),o.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return vp(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ds[i.type]().fromJSON(i)),new Ko(n,t.options)}}const Mp={generateTopUV:function(s,t,e,n,i){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],h=t[i*3],d=t[i*3+1];return[new It(o,r),new It(a,c),new It(h,d)]},generateSideWallUV:function(s,t,e,n,i,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],f=t[n*3+2],l=t[i*3],u=t[i*3+1],g=t[i*3+2],x=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(a-d)<Math.abs(r-h)?[new It(r,1-c),new It(h,1-f),new It(l,1-g),new It(x,1-p)]:[new It(a,1-c),new It(d,1-f),new It(u,1-g),new It(m,1-p)]}};function vp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Wt extends Fe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let h=0;const d=[],f=new N,l=new N,u=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const v=[],_=p/n;let y=0;p===0&&r===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){const L=P/e;f.x=-t*Math.cos(i+L*o)*Math.sin(r+_*a),f.y=t*Math.cos(r+_*a),f.z=t*Math.sin(i+L*o)*Math.sin(r+_*a),g.push(f.x,f.y,f.z),l.copy(f).normalize(),x.push(l.x,l.y,l.z),m.push(L+y,1-_),v.push(h++)}d.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const _=d[p][v+1],y=d[p][v],P=d[p+1][v],L=d[p+1][v+1];(p!==0||r>0)&&u.push(_,y,L),(p!==n-1||c<Math.PI)&&u.push(y,P,L)}this.setIndex(u),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ln extends Fe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],c=[],h=[],d=new N,f=new N,l=new N;for(let u=0;u<=n;u++)for(let g=0;g<=i;g++){const x=g/i*o,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(x),f.y=(t+e*Math.cos(m))*Math.sin(x),f.z=e*Math.sin(m),a.push(f.x,f.y,f.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),l.subVectors(f,d).normalize(),c.push(l.x,l.y,l.z),h.push(g/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=i;g++){const x=(i+1)*u+g-1,m=(i+1)*(u-1)+g-1,p=(i+1)*(u-1)+g,v=(i+1)*u+g;r.push(x,m,v),r.push(m,p,v)}this.setIndex(r),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ln extends Fe{constructor(t=new _c(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new N,c=new N,h=new It;let d=new N;const f=[],l=[],u=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(u,2));function x(){for(let _=0;_<e;_++)m(_);m(o===!1?e:0),v(),p()}function m(_){d=t.getPointAt(_/e,d);const y=r.normals[_],P=r.binormals[_];for(let L=0;L<=i;L++){const I=L/i*Math.PI*2,k=Math.sin(I),b=-Math.cos(I);c.x=b*y.x+k*P.x,c.y=b*y.y+k*P.y,c.z=b*y.z+k*P.z,c.normalize(),l.push(c.x,c.y,c.z),a.x=d.x+n*c.x,a.y=d.y+n*c.y,a.z=d.z+n*c.z,f.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=i;y++){const P=(i+1)*(_-1)+(y-1),L=(i+1)*_+(y-1),I=(i+1)*_+y,k=(i+1)*(_-1)+y;g.push(P,L,k),g.push(L,I,k)}}function v(){for(let _=0;_<=e;_++)for(let y=0;y<=i;y++)h.x=_/e,h.y=y/i,u.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ln(new Ds[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class G extends Ci{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jo extends G{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ks extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class xp extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Eo=new ye,Ra=new N,Pa=new N;class jo{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ra.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ra),Pa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pa),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class wp extends jo{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ai*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Sp extends ks{constructor(t,e,n=0,i=Math.PI/3,o=0,r=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.distance=n,this.angle=i,this.penumbra=o,this.decay=r,this.map=null,this.shadow=new wp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ca=new ye,Gi=new N,To=new N;class yp extends jo{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Gi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gi),To.copy(n.position),To.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(To),n.updateMatrixWorld(),i.makeTranslation(-Gi.x,-Gi.y,-Gi.z),Ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca)}}class bs extends ks{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bp extends jo{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ep extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new bp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=La(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=La();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function La(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const ti=()=>{if(typeof window>"u")return!1;const s=navigator.userAgent||navigator.vendor||window.opera||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(s),e="ontouchstart"in window||navigator.maxTouchPoints>0,n=Math.min(window.innerWidth,window.innerHeight)<=768||window.innerWidth<=1024;return t||e&&n},Yt={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:5,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},ge={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class Ap{constructor(){this.state=ge.MENU,this.speedKmh=Yt.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Yt.LANES[1],this.targetLaneX=Yt.LANES[1],this.crashTimer=0}startNewGame(){this.state=ge.PLAYING,this.speedKmh=Yt.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Yt.LANES[1],this.targetLaneX=Yt.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==ge.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<Yt.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=Yt.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min(Yt.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=Yt.SCORING.COMBO_TIMEOUT;const t=Yt.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min(Yt.NITRO.MAX,this.nitro+Yt.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==ge.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),e.keys.left&&!e.keys.right?(this.steerHoldTimer=(this.steerHoldTimer||0)+t,this.steerHoldTimer>.22&&(this.switchLane(-1),this.steerHoldTimer=.08)):e.keys.right&&!e.keys.left?(this.steerHoldTimer=(this.steerHoldTimer||0)+t,this.steerHoldTimer>.22&&(this.switchLane(1),this.steerHoldTimer=.08)):this.steerHoldTimer=0,this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*Yt.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,o=e.keys.accelerate,r=e.keys.boost,a=this.distanceMeters/1e3,c=Math.min(Yt.SPEED.MAX_PROGRESSIVE_BONUS,a*Yt.SPEED.PROGRESSIVE_RATE),h=Yt.SPEED.BASE_START+c,d=h+45,f=Yt.SPEED.BOOST+c*.4;r&&this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-Yt.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(f,this.speedKmh+Yt.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.nitro=Math.min(Yt.NITRO.MAX,this.nitro+Yt.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max(Yt.SPEED.MIN,this.speedKmh-Yt.SPEED.BRAKING*t):o?this.speedKmh=Math.min(d,this.speedKmh+Yt.SPEED.ACCELERATION*1.6*t):this.speedKmh<h?this.speedKmh=Math.min(h,this.speedKmh+Yt.SPEED.ACCELERATION*t):this.speedKmh>h&&(this.speedKmh=Math.max(h,this.speedKmh-Yt.SPEED.NATURAL_DECEL*t)));const u=this.speedKmh*1e3/3600*t;this.distanceMeters+=u,this.score+=Math.round(u*Yt.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=ge.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class Rp{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.touchStartX=0,this.touchStartY=0,this.touchStartTime=0,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Space"].includes(t.key)||t.code==="Space")&&t.preventDefault();const e=t.code,n=t.key;e==="ArrowLeft"||e==="KeyA"||n==="ArrowLeft"||n==="a"||n==="A"?((!this.keys.left||t.repeat)&&(this.laneChangeRequested=-1),this.keys.left=!0):(e==="ArrowRight"||e==="KeyD"||n==="ArrowRight"||n==="d"||n==="D")&&((!this.keys.right||t.repeat)&&(this.laneChangeRequested=1),this.keys.right=!0),(e==="ArrowUp"||e==="KeyW"||n==="ArrowUp"||n==="w"||n==="W")&&(this.keys.accelerate=!0),(e==="Space"||e==="ShiftLeft"||e==="ShiftRight"||e==="KeyN"||e==="KeyX"||n===" "||n==="Shift"||n==="n"||n==="N"||n==="x"||n==="X")&&(this.keys.boost=!0),(e==="ArrowDown"||e==="KeyS"||n==="ArrowDown"||n==="s"||n==="S")&&(this.keys.brake=!0),(e==="KeyH"||e==="KeyE"||e==="KeyF"||n==="h"||n==="H"||n==="e"||n==="E"||n==="f"||n==="F")&&(this.keys.horn=!0,this.onHorn&&this.onHorn()),(e==="KeyP"||e==="Escape"||n==="p"||n==="P"||n==="Escape")&&this.onPauseToggle&&this.onPauseToggle(),(e==="KeyR"||n==="r"||n==="R")&&this.onRestart&&this.onRestart()}),window.addEventListener("keyup",t=>{const e=t.code,n=t.key;(e==="ArrowLeft"||e==="KeyA"||n==="ArrowLeft"||n==="a"||n==="A")&&(this.keys.left=!1),(e==="ArrowRight"||e==="KeyD"||n==="ArrowRight"||n==="d"||n==="D")&&(this.keys.right=!1),(e==="ArrowUp"||e==="KeyW"||n==="ArrowUp"||n==="w"||n==="W")&&(this.keys.accelerate=!1),(e==="Space"||e==="ShiftLeft"||e==="ShiftRight"||e==="KeyN"||e==="KeyX"||n===" "||n==="Shift"||n==="n"||n==="N"||n==="x"||n==="X")&&(this.keys.boost=!1),(e==="ArrowDown"||e==="KeyS"||n==="ArrowDown"||n==="s"||n==="S")&&(this.keys.brake=!1),(e==="KeyH"||e==="KeyE"||e==="KeyF"||n==="h"||n==="H"||n==="e"||n==="E"||n==="f"||n==="F")&&(this.keys.horn=!1)}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0,t.touches.length>0&&(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=Date.now())},{passive:!0}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;Date.now()-this.touchStartTime<350&&Math.abs(e)>40&&Math.abs(e)>Math.abs(n)*1.3&&(e<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}triggerSteerLeft(){this.laneChangeRequested=-1}triggerSteerRight(){this.laneChangeRequested=1}setBrake(t){this.keys.brake=t}setAccelerate(t){this.keys.accelerate=t}setNitro(t){this.keys.boost=t}setBoost(t){this.keys.boost=t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0}}class Pp{constructor(t){this.camera=t,this.defaultOffset=new N(Yt.CAMERA.DEFAULT_OFFSET.x,Yt.CAMERA.DEFAULT_OFFSET.y,Yt.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new N(Yt.CAMERA.LOOK_OFFSET.x,Yt.CAMERA.LOOK_OFFSET.y,Yt.CAMERA.LOOK_OFFSET.z),this.currentPos=new N,this.currentLook=new N,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=Yt.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.1,6.2),this.lookOffset.set(0,1.25,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=Yt.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const o=t.group.position,r=Math.min(1,e/Yt.SPEED.MAX_NORMAL),a=this.camera.aspect,c=a<1?Math.min(24,(1-a)*36):0;this.targetFOV=Yt.CAMERA.BASE_FOV+c+r*10+(n?8:0);const h=this.targetFOV-this.camera.fov;Math.abs(h)>.04&&(this.camera.fov+=h*Math.min(1,i*Yt.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix());const d=o.x+this.defaultOffset.x,f=o.y+this.defaultOffset.y,l=o.z+this.defaultOffset.z+(n?.8:0),u=Math.min(1,i*10),g=Math.min(1,i*12);this.currentPos.x+=(d-this.currentPos.x)*u,this.currentPos.y+=(f-this.currentPos.y)*g,this.currentPos.z=l;const x=o.x+this.lookOffset.x,m=o.y+this.lookOffset.y,p=o.z+this.lookOffset.z;this.currentLook.x+=(x-this.currentLook.x)*u,this.currentLook.y+=(m-this.currentLook.y)*g,this.currentLook.z=p;let v=0,_=0;if(e>70){const I=e/280*.03;v=(Math.random()-.5)*I,_=(Math.random()-.5)*I}let y=0,P=0,L=0;if(this.shakeDuration>0){this.shakeDuration-=i;const I=Math.max(0,this.shakeDuration/.6),k=this.shakeIntensity*I;y=(Math.random()-.5)*k,P=(Math.random()-.5)*k,L=(Math.random()-.5)*k}this.camera.position.set(this.currentPos.x+v+y,this.currentPos.y+_+P,this.currentPos.z+L),this.camera.lookAt(this.currentLook.x+v*.5,this.currentLook.y+_*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,o=(e?4.8:8.2)*i,r=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),a=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*o,r,Math.cos(c)*o),this.camera.lookAt(0,a,0)}}const Cp={};class Lp{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){if(!this.ctx)return;const t="./",e=`${t.endsWith("/")?t:t+"/"}audio/eta_ki_korli_mama.mp3`;fetch(e).then(n=>{if(!n.ok)throw new Error(`HTTP ${n.status}`);return n.arrayBuffer()}).then(n=>this.ctx.decodeAudioData(n)).then(n=>{this.crashVoiceBuffer=n}).catch(n=>{console.warn("Could not decode crash voice buffer:",n)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.04,t),this.highOsc.connect(o),o.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,o=0,r=0;for(let c=0;c<t;c++){const h=Math.random()*2-1;i=.98*i+h*.055,o=.95*o+h*.075,r=.85*r+h*.15,n[c]=(i+o+r)*.45}const a=this.ctx.createBufferSource();a.buffer=e,a.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),a.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),a.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const o=this.ctx.createBufferSource();o.buffer=n;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(500,t),r.frequency.exponentialRampToValueAtTime(180,t+.35);const a=this.ctx.createGain();a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.07,t+.05),a.gain.exponentialRampToValueAtTime(.001,t+.35),o.connect(r),r.connect(a),a.connect(this.masterGain),o.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const o=[2093,2637];[0,.09].forEach(r=>{o.forEach(a=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(a,n+r),h.gain.setValueAtTime(0,n+r),h.gain.linearRampToValueAtTime(.22,n+r+.008),h.gain.exponentialRampToValueAtTime(1e-4,n+r+.18),c.connect(h),h.connect(this.masterGain),c.start(n+r),c.stop(n+r+.2)})});return}if(e==="cng"){[620,780].forEach(r=>{const a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type="sawtooth",a.frequency.setValueAtTime(r,n);const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),a.connect(h),h.connect(c),c.connect(this.masterGain),a.start(n),a.stop(n+.35)});return}[330,415.3,523.25].forEach((o,r)=>{const a=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();a.type=r===0?"sine":"triangle",a.frequency.setValueAtTime(o,n),h.type="lowpass",h.frequency.setValueAtTime(1400,n);const d=r===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(d,n+.02),c.gain.setValueAtTime(d,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),a.connect(h),h.connect(c),c.connect(this.masterGain),a.start(n),a.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n*.8,t),o.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),r.gain.setValueAtTime(.001,t),r.gain.linearRampToValueAtTime(.08,t+.06),r.gain.exponentialRampToValueAtTime(1e-4,t+.45),o.connect(r),r.connect(this.masterGain),o.start(t),o.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const o=this.ctx.currentTime,r=Math.min(1,Math.max(0,t/200)),a=r*5%1,c=900+r*1800+a*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const h=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,h),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,o,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,o,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,o,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,o,.05);const d=300+r*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(d,o,.06);const f=.16+r*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,f),o,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+r*350,o,.08),this.turboGain.gain.setTargetAtTime(.05,o,.08)):this.turboGain.gain.setTargetAtTime(1e-4,o,.15);const l=Math.pow(r,1.3)*.06;this.roadGain.gain.setTargetAtTime(l,o,.08),this.roadFilter.frequency.setTargetAtTime(180+r*250,o,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((o,r)=>{const a=this.ctx.createOscillator(),c=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime((r===0?n:n*1.25)*i,e+o),c.gain.setValueAtTime(.001,e+o),c.gain.linearRampToValueAtTime(.12,e+o+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+o+.28),a.connect(c),c.connect(this.masterGain),a.start(e+o),a.stop(e+o+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),o=this.ctx.createBuffer(1,i,this.ctx.sampleRate),r=o.getChannelData(0);for(let d=0;d<i;d++)r[d]=(Math.random()*2-1)*Math.exp(-d/(this.ctx.sampleRate*.12));const a=this.ctx.createBufferSource();a.buffer=o;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const h=this.ctx.createGain();h.gain.setValueAtTime(.3,t),h.gain.exponentialRampToValueAtTime(.001,t+.45),a.connect(c),c.connect(h),h.connect(this.masterGain),a.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(o=>o.lang.includes("bn")||o.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,o=this.ctx.createOscillator(),r=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(e,t+i),r.gain.setValueAtTime(.001,t+i),r.gain.linearRampToValueAtTime(.12,t+i+.02),r.gain.exponentialRampToValueAtTime(.001,t+i+.32),o.connect(r),r.connect(this.masterGain),o.start(t+i),o.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class Ip{constructor(){this.group=new gt,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new Sn,this.collisionSize=new N(2.1,2.8,5.5),this._boxCenter=new N,this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new le(t),i=document.createElement("canvas");i.width=1024,i.height=384;const o=i.getContext("2d");o.fillStyle="#f8fafc",o.fillRect(0,0,1024,384),o.fillStyle="#dc2626",o.fillRect(0,0,1024,36),o.fillRect(0,348,1024,36),o.fillStyle="#16a34a",o.beginPath(),o.arc(512,180,110,Math.PI,0),o.fill(),o.fillStyle="#f59e0b",o.fillRect(472,80,80,100),o.beginPath(),o.moveTo(512,20),o.lineTo(460,80),o.lineTo(564,80),o.fill();const r=(S,B)=>{o.fillStyle="#dc2626";for(let tt=0;tt<Math.PI*2;tt+=Math.PI/3)o.beginPath(),o.arc(S+Math.cos(tt)*35,B+Math.sin(tt)*35,24,0,Math.PI*2),o.fill();o.fillStyle="#fbbf24",o.beginPath(),o.arc(S,B,22,0,Math.PI*2),o.fill()};r(220,180),r(804,180),o.fillStyle="#1e293b",o.font="bold 54px serif",o.textAlign="center",o.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const a=new le(i),c=document.createElement("canvas");c.width=1024,c.height=512;const h=c.getContext("2d");h.fillStyle="#f59e0b",h.fillRect(0,0,1024,140);for(let S=60;S<1024;S+=110)h.fillStyle="#dc2626",h.beginPath(),h.arc(S,70,32,0,Math.PI*2),h.fill(),h.fillStyle="#22c55e",h.beginPath(),h.arc(S,70,16,0,Math.PI*2),h.fill();h.fillStyle="#15803d",h.fillRect(0,140,1024,372),h.strokeStyle="#f8fafc",h.lineWidth=8;for(let S=30;S<1024;S+=138)h.strokeRect(S,160,116,320);h.fillStyle="#ffffff",h.font="900 80px sans-serif",h.textAlign="center",h.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),h.fillStyle="#dc2626",h.fillRect(0,140,30,372),h.fillRect(994,140,30,372);const d=new le(c),f=document.createElement("canvas");f.width=1024,f.height=680;const l=f.getContext("2d");l.fillStyle="#4a90e2",l.fillRect(0,0,1024,680),l.fillStyle="#172554",l.beginPath(),l.moveTo(0,0),l.lineTo(110,0),l.lineTo(0,85),l.closePath(),l.fill(),l.beginPath(),l.moveTo(1024,0),l.lineTo(914,0),l.lineTo(1024,85),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.beginPath(),l.moveTo(0,85),l.lineTo(110,0),l.lineTo(914,0),l.lineTo(1024,85),l.stroke(),l.fillStyle="#2563eb",l.fillRect(100,35,824,45),l.strokeStyle="#18181b",l.lineWidth=3,l.strokeRect(100,35,824,45),l.fillStyle="#1e3a8a";for(let S=110;S<=900;S+=32)l.beginPath(),l.moveTo(S,80),l.lineTo(S+16,45),l.lineTo(S+32,80),l.closePath(),l.fill();const u=S=>{l.fillStyle="#facc15",l.fillRect(S,85,54,345),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(S,85,54,345);for(let B=104;B<=415;B+=26)l.fillStyle="#dc2626",l.beginPath(),l.arc(S+27,B,9.5,0,Math.PI*2),l.fill(),l.fillStyle="#fde047",l.beginPath(),l.arc(S+27,B,4.5,0,Math.PI*2),l.fill()};u(36),u(934);const g=90,x=335,m=g+x,p=104,v=252;l.fillStyle="#78aee6",l.fillRect(p,g,v,x),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(p,g,v,x);const _=386;l.fillStyle="#78aee6",l.fillRect(_,g,v,x),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(_,g,v,x);const y=668;l.fillStyle="#78aee6",l.fillRect(y,g,v,x),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(y,g,v,x);const P=(S,B)=>{[{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:0},{dx:-1,dy:0}].forEach(({dx:lt,dy:Et})=>{l.fillStyle="#15803d",l.beginPath();const kt=S+lt*72,oe=B+Et*72,ne=-Et*16,Ht=lt*16;l.moveTo(S+lt*24,B+Et*24),l.quadraticCurveTo(S+lt*46+ne,B+Et*46+Ht,kt,oe),l.quadraticCurveTo(S+lt*46-ne,B+Et*46-Ht,S+lt*24,B+Et*24),l.fill(),l.fillStyle="#166534",l.beginPath();const ue=S+lt*52+ne*1.5,Ct=B+Et*52+Ht*1.5;l.moveTo(S+lt*22,B+Et*22),l.quadraticCurveTo(S+lt*34+ne*1.8,B+Et*34+Ht*1.8,ue,Ct),l.quadraticCurveTo(S+lt*38+ne*.8,B+Et*38+Ht*.8,S+lt*22,B+Et*22),l.fill(),l.beginPath();const Qt=S+lt*52-ne*1.5,zt=B+Et*52-Ht*1.5;l.moveTo(S+lt*22,B+Et*22),l.quadraticCurveTo(S+lt*34-ne*1.8,B+Et*34-Ht*1.8,Qt,zt),l.quadraticCurveTo(S+lt*38-ne*.8,B+Et*38-Ht*.8,S+lt*22,B+Et*22),l.fill(),l.strokeStyle="#4ade80",l.lineWidth=1.8,l.beginPath(),l.moveTo(S+lt*26,B+Et*26),l.lineTo(kt*.95+S*.05,oe*.95+B*.05),l.stroke()}),[{dx:.707,dy:-.707},{dx:-.707,dy:-.707},{dx:.707,dy:.707},{dx:-.707,dy:.707}].forEach(({dx:lt,dy:Et})=>{l.fillStyle="#16a34a",l.beginPath();const kt=S+lt*46,oe=B+Et*46,ne=-Et*10,Ht=lt*10;l.moveTo(S+lt*22,B+Et*22),l.quadraticCurveTo(S+lt*32+ne,B+Et*32+Ht,kt,oe),l.quadraticCurveTo(S+lt*32-ne,B+Et*32-Ht,S+lt*22,B+Et*22),l.fill()}),l.fillStyle="#facc15";for(let lt=0;lt<Math.PI*2;lt+=Math.PI/8)l.beginPath(),l.arc(S+Math.cos(lt)*27,B+Math.sin(lt)*27,4.5,0,Math.PI*2),l.fill();l.fillStyle="#facc15",l.beginPath(),l.arc(S,B,25,0,Math.PI*2),l.fill(),l.strokeStyle="#ca8a04",l.lineWidth=2,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.arc(S,B,14,0,Math.PI*2),l.fill(),l.fillStyle="#fef08a",l.beginPath(),l.arc(S,B,6,0,Math.PI*2),l.fill()};P(p+v*.5,g+x*.5),P(y+v*.5,g+x*.5),((S,B,tt)=>{l.strokeStyle="#18181b",l.lineWidth=3.5,l.lineCap="round",l.beginPath(),l.moveTo(S-24,tt),l.lineTo(S-30,tt-5),l.moveTo(S-24,tt),l.lineTo(S-18,tt-5),l.moveTo(S-24,tt),l.lineTo(S-22,tt-22),l.lineTo(S-32,tt-52),l.lineTo(S-18,tt-80),l.stroke(),l.beginPath(),l.moveTo(S+12,tt),l.lineTo(S+6,tt-5),l.moveTo(S+12,tt),l.lineTo(S+18,tt-5),l.moveTo(S+12,tt),l.lineTo(S+14,tt-22),l.lineTo(S+24,tt-52),l.lineTo(S+8,tt-84),l.stroke(),[{tipX:S+72,tipY:B-25,midX:S+45,midY:B-8},{tipX:S+95,tipY:B-2,midX:S+56,midY:B+12},{tipX:S+104,tipY:B+24,midX:S+58,midY:B+32},{tipX:S+82,tipY:B+50,midX:S+48,midY:B+46}].forEach(({tipX:Et,tipY:kt,midX:oe,midY:ne})=>{l.fillStyle="#facc15",l.beginPath(),l.moveTo(S+16,B+30),l.quadraticCurveTo(oe,ne-12,Et,kt),l.quadraticCurveTo(Et+6,kt+12,Et-12,kt+18),l.quadraticCurveTo(oe,ne+12,S+16,B+38),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(Et-18,kt+4),l.quadraticCurveTo(Et-4,kt-8,Et,kt),l.quadraticCurveTo(Et+6,kt+12,Et-12,kt+18),l.quadraticCurveTo(Et-12,kt+10,Et-18,kt+4),l.closePath(),l.fill()}),l.fillStyle="#facc15",l.beginPath(),l.moveTo(S-36,B+44),l.quadraticCurveTo(S-2,B+72,S+34,B+46),l.quadraticCurveTo(S+8,B+22,S-36,B+44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(S-16,B-42),l.quadraticCurveTo(S-62,B-2,S-42,B+46),l.quadraticCurveTo(S+12,B+34,S+4,B-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(S-18,B-28),l.quadraticCurveTo(S+24,B-35,S+58,B-14),l.lineTo(S+52,B+12),l.quadraticCurveTo(S+14,B+18,S-22,B+12),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#38bdf8",[{x:S+58,y:B-14},{x:S+64,y:B+4},{x:S+52,y:B+18}].forEach(({x:Et,y:kt})=>{l.beginPath(),l.ellipse(Et,kt,9,6,-Math.PI/4,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=1.8,l.stroke()}),l.strokeStyle="#1e3a8a",l.lineWidth=2,l.beginPath(),l.moveTo(S-4,B-18),l.lineTo(S+42,B-8),l.moveTo(S-2,B-6),l.lineTo(S+44,B+4),l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(S-24,B-32),l.quadraticCurveTo(S-28,B-68,S-2,B-78),l.quadraticCurveTo(S+24,B-74,S+22,B-48),l.quadraticCurveTo(S+8,B-28,S-16,B-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.moveTo(S+20,B-58),l.quadraticCurveTo(S+36,B-54,S+44,B-42),l.quadraticCurveTo(S+28,B-42,S+18,B-44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.2,l.stroke(),l.beginPath(),l.moveTo(S+20,B-50),l.lineTo(S+42,B-43),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(S+6,B-58,8.5,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2,l.stroke(),l.fillStyle="#18181b",l.beginPath(),l.arc(S+8,B-58,4.2,0,Math.PI*2),l.fill(),l.fillStyle="#ffffff",l.beginPath(),l.arc(S+7,B-60,1.8,0,Math.PI*2),l.fill()})(_+v*.5,g+x*.52,m),l.fillStyle="#3b82f6",l.fillRect(20,m,984,45),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(20,m,984,45);const I=S=>{l.fillStyle="#94a3b8",l.fillRect(S,m+8,54,28),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(S,m+8,54,28),l.fillStyle="#334155",l.fillRect(S+22,m+4,10,36),l.fillStyle="#f8fafc",l.fillRect(S+6,m+18,6,8),l.fillRect(S+42,m+18,6,8)};I(205),I(485),I(765);const k=470;l.fillStyle="#4a90e2",l.beginPath(),l.moveTo(20,k),l.lineTo(20,580),l.lineTo(315,580),l.lineTo(365,635),l.lineTo(659,635),l.lineTo(709,580),l.lineTo(1004,580),l.lineTo(1004,k),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.stroke();const b=(S,B)=>{l.fillStyle="#18181b",l.fillRect(S-4,498,172,64),l.strokeStyle="#facc15",l.lineWidth=3,l.strokeRect(S-4,498,172,64),(B?["#f59e0b","#ef4444","#f8fafc"]:["#f8fafc","#ef4444","#f59e0b"]).forEach((Tt,lt)=>{l.fillStyle=Tt,l.fillRect(S+lt*54+2,504,50,52),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(S+lt*54+2,504,50,52),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(S+lt*54+6,508,42,6)})};b(118,!0),b(742,!1);const w=new le(f);this.yellowPaint=new G({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new G({color:165063,roughness:.4,metalness:.3}),this.redPaint=new G({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new G({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new G({color:2040877,roughness:.8}),this.woodPlankMat=new G({color:7877903,roughness:.9}),this.tireMat=new G({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new G({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new Jo({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new he({color:16777215}),this.taillightMat=new G({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new G({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new G({color:16119280,roughness:.65}),this.cowBrownMat=new G({color:9262372,roughness:.7}),this.cowBlackMat=new G({color:2236962,roughness:.75}),this.cowFawnMat=new G({color:12088115,roughness:.68}),this.hornMat=new G({color:3621201,roughness:.4}),this.snoutMat=new G({color:1974308,roughness:.8});const T=new gt;T.name="truckBody",this.bodyGroup=T;const O=new X(1.9,.4,6),st=new M(O,this.chassisMat);st.position.set(0,.65,.2),st.castShadow=!0,T.add(st);const U=new gt;U.position.set(0,.6,-2.85),[-.3,0,.3].forEach(S=>{const B=new ut(.06,.06,2.3,8);B.rotateZ(Math.PI/2);const tt=new M(B,this.tealBumperMat);tt.position.y=S,tt.castShadow=!0,U.add(tt)}),[-.95,-.45,.45,.95].forEach(S=>{const B=new X(.08,.72,.08),tt=new M(B,this.tealBumperMat);tt.position.x=S,U.add(tt)}),[-1.08,1.08].forEach(S=>{const B=new ut(.03,.03,.9,6),tt=new M(B,this.tealBumperMat);tt.position.set(S,.35,0),U.add(tt);const Tt=new Wt(.07,8,8),lt=new M(Tt,this.redPaint);lt.position.set(S,.8,0),U.add(lt)});const V=document.createElement("canvas");V.width=256,V.height=80;const W=V.getContext("2d");W.fillStyle="#006633",W.fillRect(0,0,256,80),W.strokeStyle="#ffffff",W.lineWidth=4,W.strokeRect(4,4,248,72),W.fillStyle="#ffffff",W.font="bold 26px sans-serif",W.textAlign="center",W.fillText("যশোর-ট",128,34),W.fillText("০২-০৯৬৯",128,64);const z=new le(V),it=new Kt(.65,.22),Z=new he({map:z}),H=new M(it,Z);H.position.set(0,-.15,.08),U.add(H),T.add(U);const $=new X(1.85,.95,1.6),J=new M($,this.yellowPaint);J.position.set(0,1.25,-2.05),J.castShadow=!0,T.add(J);const K=new Kt(1.65,.85),j=new G({map:n}),rt=new M(K,j);rt.position.set(0,1.25,-2.86),T.add(rt),[-.68,.68].forEach(S=>{const B=new ut(.16,.16,.06,16);B.rotateX(Math.PI/2);const tt=new M(B,this.chassisMat);tt.position.set(S,1.15,-2.87),T.add(tt);const Tt=new ji(.13,16),lt=new M(Tt,this.headlightMat);lt.position.set(S,1.15,-2.89),T.add(lt),this.headlights.push(lt);const Et=new Sp(16772829,2.5,60,Math.PI/5,.5,1.2);Et.position.set(S,1.15,-2.9),Et.target.position.set(S*1.5,0,-35),T.add(Et),T.add(Et.target)}),[-.98,.98].forEach(S=>{const B=new X(.24,.55,1.4),tt=new M(B,this.chassisMat);tt.position.set(S,.95,-1.95),tt.castShadow=!0,T.add(tt)});const dt=new X(2.1,1.45,1.55),at=new M(dt,this.yellowPaint);at.position.set(0,1.75,-.6),at.castShadow=!0,T.add(at),[-1.06,1.06].forEach(S=>{const B=new X(.04,1.35,1.4),tt=new M(B,this.cyanBluePaint);tt.position.set(S,1.75,-.6),T.add(tt);const Tt=new Kt(.65,.55),lt=new M(Tt,this.glassMat);lt.position.set(S>0?S+.03:S-.03,1.95,-.65),lt.rotation.y=S>0?Math.PI/2:-Math.PI/2,T.add(lt)});const yt=new Kt(1.85,.72),Pt=new M(yt,this.glassMat);Pt.position.set(0,1.92,-1.39),T.add(Pt);const Q=new gt;Q.position.set(0,2.65,-.85);const ht=new Kt(2.15,.85),D=new G({map:a,roughness:.4}),ft=new M(ht,D);ft.position.set(0,0,-.55),Q.add(ft);const ot=new X(2.2,.15,1.4),_t=new M(ot,this.redPaint);_t.position.set(0,.45,.1),_t.castShadow=!0,Q.add(_t);const ct=new X(2.24,.18,.08),Ft=new M(ct,this.yellowPaint);Ft.position.set(0,.38,-.58),Q.add(Ft),T.add(Q);const vt=new gt;vt.position.set(0,1.6,1.6);const A=new X(2.2,.12,3.4),E=new M(A,this.woodPlankMat);E.position.set(0,-.4,0),E.receiveShadow=!0,vt.add(E);const Y=new G({map:d,roughness:.45});[-1.12,1.12].forEach(S=>{const B=new Kt(3.4,1.15),tt=new M(B,Y);tt.position.set(S,.25,0),tt.rotation.y=S>0?Math.PI/2:-Math.PI/2,tt.castShadow=!0,vt.add(tt);const Tt=new X(.12,.12,3.4),lt=new M(Tt,this.redPaint);lt.position.set(S,.85,0),vt.add(lt)});const Mt=new X(2.2,1.15,.1),pt=new M(Mt,this.redPaint);pt.position.set(0,.25,-1.68),vt.add(pt);const mt=new gt;mt.position.set(0,0,1.68);const Ot=new X(2.28,1.45,.08),At=new G({color:4886754,roughness:.45}),Ut=new M(Ot,At);Ut.position.set(0,.08,0),Ut.castShadow=!0,mt.add(Ut);const Vt=new Kt(2.28,1.45),Lt=new G({map:w,roughness:.35,metalness:.15}),xt=new M(Vt,Lt);xt.position.set(0,.08,.045),mt.add(xt),[-1,1].forEach(S=>{const B=new vc;B.moveTo(0,0),B.lineTo(S*.18,.28),B.lineTo(0,.28),B.closePath();const tt={depth:.08,bevelEnabled:!1},Tt=new Ko(B,tt),lt=new G({color:1516884,roughness:.4}),Et=new M(Tt,lt);Et.position.set(S*1.14,.68,-.04),mt.add(Et)}),[-.78,.78].forEach((S,B)=>{const tt=B===0,Tt=new M(new X(.42,.16,.05),this.chassisMat);Tt.position.set(S,-.42,.08),mt.add(Tt);const lt=new M(new X(.12,.12,.03),new G({color:16096779,emissive:14251782,emissiveIntensity:.3}));lt.position.set(tt?S-.13:S+.13,-.42,.1),mt.add(lt);const Et=new M(new X(.12,.12,.03),this.taillightMat);Et.position.set(S,-.42,.1),mt.add(Et),this.brakeLights.push(Et);const kt=new M(new X(.12,.12,.03),new G({color:16317180,roughness:.3}));kt.position.set(tt?S+.13:S-.13,-.42,.1),mt.add(kt)}),[-.85,.85].forEach(S=>{const B=new M(new X(.42,.44,.03),this.tireMat);B.position.set(S,-.8,.06),mt.add(B)}),vt.add(mt),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((S,B)=>{const tt=this.createBedCow(S.mat,S.scale);tt.position.set(S.x,.35,S.z),tt.rotation.y=S.rotY,vt.add(tt),this.cows.push({group:tt,head:tt.userData.head,baseRotX:tt.userData.head.rotation.x,seed:B*1.5})}),T.add(vt);const Jt=this.createTruckWheel(.48,.26,!1);Jt.position.set(0,.42,.4),Jt.rotation.x=Math.PI/2,T.add(Jt);const Xt=new ut(.08,.08,.6,8);Xt.rotateZ(Math.PI/2);const Bt=new M(Xt,this.chassisMat);Bt.position.set(1.05,.48,-.8),T.add(Bt);const Rt=new _e(.22,1.2,12);Rt.rotateZ(-Math.PI/2);const Zt=new he({color:16755200,transparent:!0,opacity:0}),te=new M(Rt,Zt);te.position.set(1.65,.48,-.8),T.add(te),this.exhaustFires.push(te),this.group.add(T);const Gt=.48,bt=.52,wt=.32;[-1.02,1.02].forEach(S=>{const B=this.createTruckWheelAssembly(bt,wt,S>0,!1);B.position.set(S,Gt,-1.95),this.group.add(B),this.wheels.push(B.userData.spinner),this.frontWheels.push(B)}),[-1.02,1.02].forEach(S=>{const B=this.createTruckWheelAssembly(bt,wt,S>0,!0);B.position.set(S,Gt,1.85),this.group.add(B),this.wheels.push(B.userData.spinner)})}createBedCow(t,e=1){const n=new gt;n.scale.set(e,e,e);const i=new X(.85,.85,1.35),o=new M(i,t);o.position.set(0,.45,0),o.castShadow=!0,n.add(o);const r=new _e(.24,.38,8),a=new M(r,t);a.position.set(0,.95,-.32),a.rotation.x=-.2,n.add(a);const c=new gt;c.position.set(0,.75,-.6),n.userData.head=c;const h=new X(.42,.46,.62),d=new M(h,t);d.position.set(0,.22,-.35),c.add(d);const f=new X(.32,.25,.25),l=new M(f,this.snoutMat);return l.position.set(0,.12,-.68),c.add(l),[-.18,.18].forEach(u=>{const g=new _e(.05,.3,6),x=new M(g,this.hornMat);x.position.set(u,.46,-.28),x.rotation.z=u>0?-.38:.38,x.rotation.x=.25,c.add(x);const m=new X(.18,.07,.08),p=new M(m,t);p.position.set(u>0?.26:-.26,.32,-.25),p.rotation.z=u>0?-.35:.35,c.add(p)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const o=new gt,r=new gt;if(o.userData.spinner=r,o.add(r),i){const a=this.createTruckWheel(t,e*.75,n);a.position.x=n?.08:-.08,r.add(a);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,r.add(c)}else{const a=this.createTruckWheel(t,e,n);r.add(a)}return o}createTruckWheel(t,e,n){const i=new gt,o=new ut(t,t,e,24);o.rotateZ(Math.PI/2);const r=new M(o,this.tireMat);i.add(r);const a=new ut(t*.65,t*.65,e+.02,18);a.rotateZ(Math.PI/2);const c=new M(a,this.rimMat);i.add(c);const h=new ut(t*.28,t*.28,e+.05,12);h.rotateZ(Math.PI/2);const d=new M(h,this.chassisMat);return i.add(d),i}update(t,e,n,i,o,r){const a=t*1e3/3600,c=2*Math.PI*.52,h=a/c*(2*Math.PI)*r;this.wheelRotation-=h,this.wheels.forEach(p=>{p.rotation.x=this.wheelRotation});const d=n-this.group.position.x,f=-Math.max(-.35,Math.min(Yt.STEERING.WHEEL_TURN_ANGLE,d*.35));this.frontWheels.forEach(p=>{p.rotation.y+=(f-p.rotation.y)*Math.min(1,r*12)});const l=Math.max(-.065,Math.min(.065,d*.065));this.currentRoll+=(l-this.currentRoll)*Math.min(1,r*10),this.bodyGroup.rotation.z=this.currentRoll;const u=Math.max(-.05,Math.min(.05,d*.05));this.currentYaw+=(u-this.currentYaw)*Math.min(1,r*10),this.bodyGroup.rotation.y=this.currentYaw;let g=0;i?g=.045:o&&(g=-.035),this.currentPitch+=(g-this.currentPitch)*Math.min(1,r*8),this.bodyGroup.rotation.x=this.currentPitch;const x=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(p=>{p.material=x}),this.exhaustFires.forEach(p=>{o?(p.material.opacity=.95,p.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),p.material.color.setHex(Math.random()>.4?16759552:16729088)):p.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=r,this.headlights.forEach(p=>{p.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(p=>{p.scale.set(1,1,1)});const m=performance.now()*.001;this.cows.forEach(p=>{const v=Math.sin(m*6.5+p.seed)*.08+(o?Math.sin(m*14+p.seed)*.05:0);p.head.rotation.x=p.baseRotX+v,p.head.rotation.y=Math.sin(m*2.2+p.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=1.45,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Dp{constructor(){this.group=new gt,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new gt,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new Sn,this.collisionSize=new N(1.5,2.1,3.2),this._boxCenter=new N,this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new gt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=640;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,360);n.addColorStop(0,"#7dd3fc"),n.addColorStop(1,"#e0f2fe"),e.fillStyle=n,e.fillRect(0,0,1024,640);const i=(C,F,et)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(C,F,38*et,0,Math.PI*2),e.arc(C+42*et,F-14*et,48*et,0,Math.PI*2),e.arc(C+95*et,F-8*et,42*et,0,Math.PI*2),e.arc(C+135*et,F+8*et,32*et,0,Math.PI*2),e.fill()};i(80,120,1.1),i(720,100,.95);const o=512,r=270;for(let C=-Math.PI;C<=0;C+=Math.PI/18)e.beginPath(),e.moveTo(o,r),e.lineTo(o+Math.cos(C)*380,r+Math.sin(C)*380),e.lineTo(o+Math.cos(C+Math.PI/36)*380,r+Math.sin(C+Math.PI/36)*380),e.closePath(),e.fillStyle="rgba(245, 158, 11, 0.45)",e.fill();e.beginPath(),e.arc(o,r,78,Math.PI,0),e.fillStyle="#f59e0b",e.fill(),e.beginPath(),e.arc(o,r,52,Math.PI,0),e.fillStyle="#fde047",e.fill();const a=e.createLinearGradient(0,270,0,520);a.addColorStop(0,"#0284c7"),a.addColorStop(1,"#0369a1"),e.fillStyle=a,e.beginPath(),e.moveTo(0,270),e.lineTo(512,270),e.lineTo(470,520),e.lineTo(0,520),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=3.5;for(let C=290;C<510;C+=24)for(let et=20;et<440;et+=38*2)e.beginPath(),e.moveTo(et,C),e.quadraticCurveTo(et+38/2,C-5,et+38,C),e.stroke();e.fillStyle="#fde68a",e.beginPath(),e.moveTo(470,520),e.lineTo(512,270),e.lineTo(560,270),e.lineTo(530,520),e.closePath(),e.fill(),e.fillStyle="#16a34a",e.beginPath(),e.moveTo(520,270),e.lineTo(1024,270),e.lineTo(1024,520),e.lineTo(485,520),e.closePath(),e.fill();const c=(C,F)=>{e.strokeStyle="#854d0e",e.lineWidth=6,e.beginPath(),e.moveTo(C,F),e.quadraticCurveTo(C-15,F-60,C-25,F-110),e.stroke(),e.strokeStyle="#15803d",e.lineWidth=4;for(let et=0;et<Math.PI*2;et+=Math.PI/4)e.beginPath(),e.moveTo(C-25,F-110),e.quadraticCurveTo(C-25+Math.cos(et)*45,F-110+Math.sin(et)*40-15,C-25+Math.cos(et)*65,F-110+Math.sin(et)*40),e.stroke()};c(640,360),c(720,350),c(940,360),e.fillStyle="#fce7f3",e.fillRect(720,370,190,85),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(720,370,190,85),e.fillStyle="#dc2626",e.beginPath(),e.moveTo(705,370),e.lineTo(815,310),e.lineTo(925,370),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let C=720;C<910;C+=18)e.beginPath(),e.moveTo(C,370),e.lineTo(815,310),e.stroke();e.fillStyle="#374151",e.fillRect(785,395,35,60),e.fillRect(850,390,30,30),e.fillStyle="#f8fafc",e.fillRect(570,385,140,70),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(570,385,140,70),e.fillStyle="#2563eb",e.beginPath(),e.moveTo(555,385),e.lineTo(640,335),e.lineTo(725,385),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let C=570;C<710;C+=18)e.beginPath(),e.moveTo(C,385),e.lineTo(640,335),e.stroke();e.fillStyle="#1e3a8a",e.fillRect(620,405,30,50),e.fillStyle="#ea580c",e.fillRect(0,510,1024,45),e.fillStyle="#fde047";for(let C=20;C<1024;C+=40)e.beginPath(),e.arc(C,510,16,0,Math.PI),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2,e.stroke();e.fillStyle="#18181b",e.fillRect(0,555,1024,35);const h=["#dc2626","#ffffff","#16a34a","#fde047"];for(let C=0;C<48;C++)e.fillStyle=h[C%h.length],e.fillRect(C*22,558,14,29);const d=(C,F)=>{e.strokeStyle="#94a3b8",e.lineWidth=3,e.beginPath(),e.arc(C,F,8,0,Math.PI*2),e.stroke(),e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(C,F+8),e.bezierCurveTo(C+28,F+8,C+44,F+28,C,F+64),e.bezierCurveTo(C-44,F+28,C-28,F+8,C,F+8),e.closePath(),e.fill(),e.strokeStyle="#64748b",e.lineWidth=2.5,e.stroke(),e.fillStyle="#94a3b8",[[0,24],[-14,28],[14,28],[-8,42],[8,42],[0,52]].forEach(([et,St])=>{e.beginPath(),e.arc(C+et,F+St,3.2,0,Math.PI*2),e.fill()})};d(220,570),d(512,570),d(804,570);const f=new le(t),l=document.createElement("canvas");l.width=1024,l.height=260;const u=l.getContext("2d"),g=u.createLinearGradient(0,0,0,260);g.addColorStop(0,"#f8fafc"),g.addColorStop(.5,"#e2e8f0"),g.addColorStop(1,"#94a3b8"),u.fillStyle=g,u.fillRect(0,0,1024,260),u.fillStyle="#475569";for(let C=30;C<1e3;C+=45)u.beginPath(),u.arc(C,24,7,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(C-2,22,2.5,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.fillStyle="#475569",u.beginPath(),u.arc(C,236,7,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(C-2,234,2.5,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.fillStyle="#475569";u.fillStyle="#f59e0b",u.strokeStyle="#dc2626",u.lineWidth=7,u.font="bold 82px sans-serif",u.textAlign="center",u.textBaseline="middle",u.strokeText("বাংলাদেশ",512,115),u.fillText("বাংলাদেশ",512,115),u.fillStyle="#16a34a",u.font="bold 78px sans-serif",u.fillText("বাংলাদেশ",512,113),u.fillStyle="#fef08a",u.font="bold 74px sans-serif",u.fillText("বাংলাদেশ",512,111);const x=["#dc2626","#16a34a","#f59e0b","#06b6d4","#ec4899"];for(let C=0;C<18;C++)u.beginPath(),u.arc(310+C*24,185,7.5,0,Math.PI*2),u.fillStyle=x[C%x.length],u.fill(),u.strokeStyle="#18181b",u.lineWidth=1.8,u.stroke();const m=(C,F)=>{u.beginPath(),u.arc(C,F,62,0,Math.PI*2),u.fillStyle="#cbd5e1",u.fill(),u.strokeStyle="#64748b",u.lineWidth=4,u.stroke(),u.beginPath(),u.arc(C,F,48,0,Math.PI*2),u.fillStyle="#dc2626",u.fill(),u.strokeStyle="#fde047",u.lineWidth=3,u.stroke(),u.fillStyle="#ffffff",u.font="bold 50px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText("মা",C,F)};m(140,125),m(884,125);const p=new le(l),v=document.createElement("canvas");v.width=1024,v.height=1024;const _=v.getContext("2d");_.beginPath(),_.moveTo(40,1024),_.lineTo(40,520),_.bezierCurveTo(40,60,984,60,984,520),_.lineTo(984,1024),_.closePath(),_.fillStyle="#dc2626",_.fill(),_.strokeStyle="#881337",_.lineWidth=12,_.stroke(),_.strokeStyle="#fde047",_.lineWidth=5,_.stroke(),_.fillStyle="#1d4ed8",_.fillRect(456,120,112,680),_.strokeStyle="#18181b",_.lineWidth=3,_.strokeRect(456,120,112,680),_.fillStyle="#ffffff",_.fillRect(498,120,28,680),_.beginPath(),_.arc(512,780,42,0,Math.PI*2),_.fillStyle="#dc2626",_.fill(),_.strokeStyle="#fde047",_.lineWidth=5,_.stroke(),_.fillStyle="#ffffff",_.font="bold 44px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("১",512,780);const y=(C,F,et,St)=>{_.save(),_.translate(F,et),_.rotate(St),_.font="bold 88px sans-serif",_.textAlign="center",_.textBaseline="middle",_.strokeStyle="#18181b",_.lineWidth=12,_.strokeText(C,0,0),_.fillStyle="#ffffff",_.fillText(C,0,0),_.restore()};y("মায়ের",310,240,-.22),y("দোয়া",714,240,.22);const P=(C,F)=>{_.save(),_.translate(C,500),F&&_.scale(-1,1),_.beginPath(),_.arc(70,-160,36,0,Math.PI*2),_.fillStyle="#fde047",_.fill(),_.strokeStyle="#18181b",_.lineWidth=3,_.stroke(),_.beginPath(),_.arc(70,-160,16,0,Math.PI*2),_.fillStyle="#ea580c",_.fill();for(let St=0;St<7;St++){const Nt=-Math.PI/2+(St-3)*.35;_.beginPath(),_.ellipse(80+Math.cos(Nt)*45,-50+Math.sin(Nt)*35,18,38,Nt,0,Math.PI*2),_.fillStyle="#ec4899",_.fill(),_.strokeStyle="#18181b",_.lineWidth=2.5,_.stroke()}_.beginPath(),_.arc(80,-50,24,0,Math.PI*2),_.fillStyle="#fef08a",_.fill(),_.stroke(),((St,Nt)=>{_.fillStyle="#16a34a",_.beginPath(),_.ellipse(St-30,Nt+20,16,32,.6,0,Math.PI*2),_.ellipse(St+30,Nt+20,16,32,-.6,0,Math.PI*2),_.fill(),_.stroke(),_.fillStyle="#1d4ed8",_.beginPath(),_.arc(St,Nt,55,0,Math.PI*2),_.fill(),_.strokeStyle="#18181b",_.lineWidth=3,_.stroke(),_.strokeStyle="#38bdf8",_.lineWidth=4,_.beginPath(),_.arc(St,Nt,36,.4,Math.PI*1.6),_.stroke(),_.beginPath(),_.arc(St,Nt,20,Math.PI,Math.PI*2.2),_.stroke(),_.fillStyle="#ffffff",_.beginPath(),_.arc(St,Nt,10,0,Math.PI*2),_.fill()})(85,110),_.restore()};P(260,!1),P(764,!0);const L=new le(v),I=document.createElement("canvas");I.width=512,I.height=128;const k=I.getContext("2d");k.fillStyle="#ffffff",k.fillRect(0,0,512,128),k.fillStyle="#dc2626";for(let C=-128;C<640;C+=36)k.beginPath(),k.moveTo(C,0),k.lineTo(C+18,0),k.lineTo(C+18+128,128),k.lineTo(C+128,128),k.closePath(),k.fill();const b=new le(I),w=document.createElement("canvas");w.width=1024,w.height=1024;const T=w.getContext("2d");T.fillStyle="#f59e0b",T.fillRect(0,0,1024,1024),T.strokeStyle="rgba(234, 88, 12, 0.18)",T.lineWidth=3;for(let C=-1024;C<2048;C+=64)T.beginPath(),T.moveTo(C,0),T.lineTo(C+1024,1024),T.stroke(),T.beginPath(),T.moveTo(C,1024),T.lineTo(C+1024,0),T.stroke();T.fillStyle="#881337",T.fillRect(0,0,1024,140),T.fillRect(0,884,1024,140),T.fillStyle="#06b6d4",T.fillRect(0,140,1024,28),T.fillRect(0,856,1024,28),T.fillStyle="#10b981",T.fillRect(0,168,1024,16),T.fillRect(0,840,1024,16);for(let C=32;C<1024;C+=64)T.beginPath(),T.arc(C,140,16,0,Math.PI),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(C,884,16,Math.PI,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke();[70,954].forEach(C=>{T.fillStyle="#ffffff",T.font="bold 44px sans-serif",T.textAlign="center",T.textBaseline="middle",T.shadowColor="rgba(0,0,0,0.8)",T.shadowBlur=8,T.fillText("মা বাবার দোয়া",512,C),T.shadowBlur=0}),((C,F)=>{T.strokeStyle="#ea580c",T.lineWidth=4;for(let et=0;et<Math.PI*2;et+=Math.PI/16)T.beginPath(),T.moveTo(C,F),T.lineTo(C+Math.cos(et)*260,F+Math.sin(et)*260),T.stroke();for(let et=0;et<16;et++){const St=et*Math.PI/8,Nt=C+Math.cos(St)*175,qt=F+Math.sin(St)*175;T.beginPath(),T.ellipse(Nt,qt,42,65,St+Math.PI/2,0,Math.PI*2),T.fillStyle=et%2===0?"#dc2626":"#0284c7",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke()}for(let et=0;et<12;et++){const St=et*Math.PI/6,Nt=C+Math.cos(St)*115,qt=F+Math.sin(St)*115;T.beginPath(),T.ellipse(Nt,qt,34,52,St+Math.PI/2,0,Math.PI*2),T.fillStyle=et%2===0?"#ec4899":"#10b981",T.fill(),T.strokeStyle="#18181b",T.lineWidth=3.5,T.stroke()}T.beginPath(),T.arc(C,F,62,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(C,F,32,0,Math.PI*2),T.fillStyle="#b91c1c",T.fill(),[-1,1].forEach(et=>{T.beginPath(),T.moveTo(C+et*160,F-60),T.bezierCurveTo(C+et*320,F-140,C+et*420,F-40,C+et*340,F+50),T.bezierCurveTo(C+et*280,F+120,C+et*200,F+60,C+et*180,F),T.fillStyle="#0d9488",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(C+et*320,F-30,28,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.beginPath(),T.arc(C+et*320,F-30,16,0,Math.PI*2),T.fillStyle="#1e3a8a",T.fill()})})(512,512);const st=(C,F)=>{const et=["#dc2626","#ec4899","#f59e0b","#10b981"];for(let St=0;St<8;St++){const Nt=St*Math.PI/4,qt=C+Math.cos(Nt)*48,jt=F+Math.sin(Nt)*48;T.beginPath(),T.arc(qt,jt,22,0,Math.PI*2),T.fillStyle=et[St%et.length],T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke()}T.beginPath(),T.arc(C,F,26,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(C,F,12,0,Math.PI*2),T.fillStyle="#991b1b",T.fill()};[120,904].forEach(C=>{st(C,320),st(C,704)});const U=new le(w),V=document.createElement("canvas");V.width=256,V.height=256;const W=V.getContext("2d");W.fillStyle="#b91c1c",W.fillRect(0,0,256,256),W.strokeStyle="#fde047",W.lineWidth=3;for(let C=0;C<256;C+=32)W.beginPath(),W.moveTo(C,0),W.lineTo(C+32,256),W.stroke(),W.beginPath(),W.moveTo(256-C,0),W.lineTo(256-C-32,256),W.stroke();const z=new le(V),it=document.createElement("canvas");it.width=512,it.height=256;const Z=it.getContext("2d");Z.fillStyle="#f59e0b",Z.fillRect(0,0,512,256),Z.fillStyle="#ea580c",Z.beginPath(),Z.arc(256,105,45,0,Math.PI*2),Z.fill();for(let C=0;C<Math.PI*2;C+=Math.PI/8)Z.fillStyle="#dc2626",Z.beginPath(),Z.arc(256+Math.cos(C)*62,105+Math.sin(C)*62,14,0,Math.PI*2),Z.fill();Z.fillStyle="#fde047",Z.beginPath(),Z.arc(256,105,26,0,Math.PI*2),Z.fill(),Z.fillStyle="#0d9488",Z.fillRect(0,185,512,71),Z.strokeStyle="#fde047",Z.lineWidth=5;for(let C=-20;C<=530;C+=32)Z.beginPath(),Z.moveTo(C,185),Z.lineTo(C+32,256),Z.stroke(),Z.beginPath(),Z.moveTo(C+32,185),Z.lineTo(C,256),Z.stroke();const H=new le(it),$=new G({color:14427686,metalness:.6,roughness:.3}),J=new G({color:15658734,metalness:.9,roughness:.15}),K=new G({color:2040865,roughness:.9}),j=new G({color:165063,metalness:.5,roughness:.4}),rt=new G({color:1409085,roughness:.6}),dt=new G({map:f,roughness:.4}),at=new G({map:p,roughness:.35,metalness:.1}),yt=new G({map:L,roughness:.6,transparent:!0,side:Ee}),Pt=new G({map:b,roughness:.45,metalness:.1}),Q=new G({map:H,roughness:.5,side:Ee}),ht=new G({map:U,roughness:.7,side:Ee}),D=new G({map:z,roughness:.6}),ft=new gt,ot=new ut(.045,.045,1.8,12);ot.rotateX(Math.PI/2);const _t=new M(ot,$);_t.position.set(0,.65,.1),ft.add(_t);const ct=new ut(.04,.04,.95,12);ct.rotateX(-.18);const Ft=new M(ct,$);Ft.position.set(0,.95,-.9),ft.add(Ft),[-.1,.1].forEach(C=>{const F=new ut(.025,.02,.7,8);F.rotateX(.15);const et=new M(F,J);et.position.set(C,.48,-1.02),ft.add(et)});const vt=new ut(.025,.025,.75,12);vt.rotateZ(Math.PI/2);const A=new M(vt,J);A.position.set(0,1.35,-.85),ft.add(A),[-.38,.38].forEach(C=>{const F=new ut(.032,.032,.14,12);F.rotateZ(Math.PI/2);const et=new M(F,K);et.position.set(C,1.35,-.85),ft.add(et)});const E=new Wt(.09,14,14);E.scale(1,1,.7);const Y=new M(E,new he({color:16777215}));Y.position.set(0,1.05,-1.08),ft.add(Y),this.headlights.push(Y);const Mt=new Wt(.05,12,12);this.bellMesh=new M(Mt,J),this.bellMesh.position.set(-.24,1.4,-.85),ft.add(this.bellMesh);const pt=new X(.26,.08,.32),mt=new M(pt,K);mt.position.set(0,1.08,-.15),ft.add(mt),[-.08,.08].forEach(C=>{const F=new ut(.02,.02,.12,8),et=new M(F,J);et.position.set(C,.98,-.15),ft.add(et)});const Ot=new ut(.06,.06,.28,12);Ot.rotateZ(Math.PI/2);const At=new M(Ot,J);At.position.set(0,.52,-.15),ft.add(At),this.bodyGroup.add(ft),this.frontWheel=this.createRickshawWheel(.42,$,J,K),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const Ut=new ut(.46,.46,.12,16,1,!0,0,Math.PI*.8);Ut.rotateZ(Math.PI/2);const Vt=new M(Ut,j);Vt.position.set(0,.44,-1.05),this.bodyGroup.add(Vt),[-.78,.78].forEach(C=>{const F=this.createRickshawWheel(.48,$,J,K);F.position.set(C,.48,.95),this.bodyGroup.add(F),this.wheels.push(F);const et=new ut(.53,.53,.16,20,1,!0,0,Math.PI);et.rotateZ(Math.PI/2);const St=new M(et,Pt);St.position.set(C,.48,.95),this.bodyGroup.add(St)});const Lt=new gt,xt=new X(1.25,.08,1.25),$t=new M(xt,rt);$t.position.set(0,.65,.75),Lt.add($t);const Jt=new X(.9,.05,.5),Xt=new M(Jt,rt);Xt.position.set(0,.48,.35),Lt.add(Xt);const Bt=new X(1.2,.38,.58),Rt=new M(Bt,rt);Rt.position.set(0,.86,.88),Lt.add(Rt),[-.62,.62].forEach((C,F)=>{const et=new Kt(1.15,.52),St=new M(et,Q);St.position.set(C,.96,.75),St.rotation.y=F===0?-Math.PI/2:Math.PI/2,Lt.add(St)});const Zt=new X(1.18,.14,.56),te=new M(Zt,D);te.position.set(0,1.08,.88),Lt.add(te);const Gt=new X(1.16,.22,.1),bt=new M(Gt,D);bt.position.set(0,1.15,1.08),Lt.add(bt),[-.58,.58].forEach(C=>{const F=new X(.08,.28,.6),et=new M(F,j);et.position.set(C,1.22,.88),Lt.add(et)});const wt=new Kt(1.06,.54),S=new M(wt,dt);S.position.set(0,.66,1.18),S.rotation.y=Math.PI,Lt.add(S);const B=new Kt(1.08,.19),tt=new M(B,at);tt.position.set(0,.96,1.185),tt.rotation.y=Math.PI,Lt.add(tt);const Tt=new Kt(1.22,.82),lt=new M(Tt,yt);lt.position.set(0,1.5,1.11),lt.rotation.y=Math.PI,Lt.add(lt),[-.78,.78].forEach(C=>{const F=new M(new ut(.055,.055,.035,12),J);F.rotateX(Math.PI/2),F.position.set(C,.62,1.16),Lt.add(F);const et=new Wt(.048,12,12),St=new M(et,new he({color:15680580}));St.position.set(C,.62,1.18),Lt.add(St),this.brakeLights.push(St)});const Et=new ut(.7,.7,.96,24,1,!0,-Math.PI/2,Math.PI);Et.rotateX(-Math.PI/2);const kt=new M(Et,ht);kt.position.set(0,1.5,.62),Lt.add(kt);const oe=new ln(.7,.022,8,24,Math.PI),ne=new M(oe,$);ne.position.set(0,1.5,.14),Lt.add(ne);for(let C=0;C<=14;C++){const F=C*Math.PI/14,et=Math.cos(F)*.7,St=1.5+Math.sin(F)*.7,Nt=new M(new Wt(.022,6,6),new G({color:14427686,roughness:.8}));Nt.position.set(et,St-.02,.14),Lt.add(Nt)}const Ht=new ln(.7,.025,8,24,Math.PI),ue=new M(Ht,$);ue.position.set(0,1.5,1.1),Lt.add(ue);for(let C=0;C<=14;C++){const F=C*Math.PI/14,et=Math.cos(F)*.7,St=1.5+Math.sin(F)*.7,Nt=new M(new Wt(.022,6,6),new G({color:14427686,roughness:.8}));Nt.position.set(et,St-.02,1.1),Lt.add(Nt)}const Ct=new ut(.7,.7,.12,24,1,!0,-Math.PI/2,Math.PI);Ct.rotateX(-Math.PI/2);const Qt=new M(Ct,ht);Qt.position.set(0,1.5,1.04),Lt.add(Qt),[-.7,.7].forEach((C,F)=>{const et=new Kt(.82,.36),St=new M(et,ht);St.position.set(C,1.34,.65),St.rotation.y=F===0?-Math.PI/2:Math.PI/2,Lt.add(St);const Nt=new M(new ut(.012,.012,.78,8),J);Nt.position.set(C+(F===0?-.015:.015),1.34,.65),Nt.rotation.x=.45,Lt.add(Nt);const qt=new M(new ut(.012,.012,.78,8),J);qt.position.set(C+(F===0?-.015:.015),1.34,.65),qt.rotation.x=-.45,Lt.add(qt);const jt=new M(new Wt(.022,8,8),$);jt.position.set(C+(F===0?-.025:.025),1.34,.65),Lt.add(jt)}),[-.64,.64].forEach(C=>{const F=new ut(.016,.016,1.15,8);F.rotateX(.42);const et=new M(F,$);et.position.set(C,1.4,.6),Lt.add(et)}),this.bodyGroup.add(Lt);const zt=new gt,pe=new G({color:165063,roughness:.8}),fe=new G({color:9262372,roughness:.7}),Le=new G({color:1409085,roughness:.9}),rn=new X(.36,.48,.22),an=new M(rn,pe);an.position.set(0,1.42,-.25),an.rotation.x=.22,zt.add(an);const yn=new Wt(.12,14,14),un=new M(yn,fe);un.position.set(0,1.74,-.32),zt.add(un);const Fn=new ln(.11,.035,8,16);Fn.rotateX(Math.PI/2);const R=new M(Fn,new G({color:14427686}));R.position.set(0,1.68,-.32),zt.add(R),[-.18,.18].forEach(C=>{const F=new ut(.04,.035,.52,8);F.rotateX(.75);const et=new M(F,fe);et.position.set(C,1.42,-.52),zt.add(et)});const q=new X(.38,.44,.32),nt=new M(q,Le);nt.position.set(0,1.05,-.18),zt.add(nt),this.bodyGroup.add(zt),this.buildCuteRomanticCouple(),[-.32,.32].forEach(C=>{const F=new _e(.12,.65,8);F.rotateX(-Math.PI/2);const et=new he({color:16759552,transparent:!0,opacity:0}),St=new M(F,et);St.position.set(C,.58,1.25),this.bodyGroup.add(St),this.exhaustFires.push(St)})}createRickshawWheel(t,e,n,i){const o=new gt,r=new ln(t,.038,14,36);r.rotateY(Math.PI/2);const a=new M(r,i);o.add(a);const c=new ln(t*.92,.02,10,36);c.rotateY(Math.PI/2);const h=new M(c,n);o.add(h);const d=new ut(.06,.06,.14,14);d.rotateZ(Math.PI/2);const f=new M(d,e);o.add(f);for(let l=0;l<14;l++){const u=l*Math.PI/7,g=new ut(.005,.005,t*1.84,4);g.rotateX(u);const x=new M(g,n);o.add(x)}return o}buildCuteRomanticCouple(){this.coupleGroup=new gt,this.coupleGroup.position.set(0,0,0);const t=new G({color:16106390,roughness:.6}),e=new G({color:1841431,roughness:.5}),n=new G({color:986638,roughness:.4}),i=new G({color:15680580,roughness:.7}),o=new G({color:1976635,roughness:.8}),r=new G({color:15485081,roughness:.6}),a=new G({color:16638023,roughness:.7}),c=new G({color:16777215,roughness:.8}),h=new gt;h.position.set(-.25,1.18,.82);const d=new X(.32,.42,.24),f=new M(d,i);f.position.set(0,.22,0),f.rotation.y=.16,f.rotation.z=-.06,h.add(f);const l=new Wt(.12,14,14),u=new M(l,t);u.position.set(.02,.52,.02),u.rotation.y=.26,u.rotation.z=-.08,h.add(u);const g=new Wt(.13,14,14);g.scale(1.02,1.05,1.02);const x=new M(g,e);x.position.set(.02,.55,.01),h.add(x);const m=new X(.28,.18,.48),p=new M(m,o);p.position.set(0,-.05,-.16),h.add(p);const v=new ut(.04,.035,.38,8);v.rotateZ(.25);const _=new M(v,i);_.position.set(-.22,.18,0),h.add(_);const y=new ut(.04,.035,.34,8);y.rotateZ(-Math.PI/4),y.rotateX(-.18);const P=new M(y,i);P.position.set(.18,.14,-.07),h.add(P),this.coupleGroup.add(h);const L=new gt;L.position.set(.25,1.18,.82);const I=new X(.28,.38,.22),k=new M(I,r);k.position.set(0,.2,0),k.rotation.y=-.18,k.rotation.z=.08,L.add(k);const b=new X(.32,.35,.24),w=new M(b,a);w.position.set(0,.22,.02),L.add(w);const T=new Wt(.11,14,14),O=new M(T,t);O.position.set(-.02,.48,.02),O.rotation.y=-.3,O.rotation.z=.1,L.add(O);const st=new Wt(.12,14,14);st.scale(1.04,1.06,1.08);const U=new M(st,n);U.position.set(-.02,.51,0),L.add(U);const V=new ut(.04,.02,.32,8);V.rotateX(-.4);const W=new M(V,n);W.position.set(-.01,.38,.15),L.add(W);const z=new X(.26,.16,.46),it=new M(z,c);it.position.set(0,-.05,-.16),L.add(it);const Z=new ut(.035,.03,.35,8);Z.rotateZ(-.25),Z.rotateX(-.25);const H=new M(Z,r);H.position.set(.2,.16,-.05),L.add(H);const $=new gt,J=new ut(.007,.007,.32,6),K=new G({color:1409085,roughness:.8}),j=new M(J,K);j.position.set(0,.14,0),$.add(j);const rt=new X(.07,.012,.035),dt=new M(rt,K);dt.position.set(.035,.12,0),dt.rotation.z=.3,$.add(dt);const at=new M(rt,K);at.position.set(-.035,.18,0),at.rotation.z=-.3,$.add(at);const yt=new G({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Pt=new M(new Zo(.055,1),yt);Pt.position.set(0,.3,0),Pt.scale.set(1.1,1.25,1.1),$.add(Pt);const Q=new M(new Wt(.038,8,8),new G({color:10033947,roughness:.3}));Q.position.set(0,.32,0),$.add(Q),$.position.set(.22,.22,-.15),$.rotation.x=-.35,$.rotation.z=-.22,L.add($);const ht=new ut(.035,.03,.32,8);ht.rotateZ(Math.PI/4),ht.rotateX(-.18);const D=new M(ht,r);D.position.set(-.17,.14,-.07),L.add(D),this.coupleGroup.add(L);const ft=new gt;ft.position.set(0,1.28,.74);const ot=new M(new Wt(.045,10,10),t);ot.scale.set(1.3,.9,1.1),ot.position.set(-.02,0,0),ft.add(ot);const _t=new M(new Wt(.042,10,10),t);_t.scale.set(1.2,.85,1.05),_t.position.set(.02,.01,.01),ft.add(_t),this.coupleGroup.add(ft),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,o,r){const c=t*1e3/3600/.42*r;this.wheelRotation-=c,this.wheels.forEach(m=>{m.rotation.x=this.wheelRotation});const h=n-e,d=-h*.12;this.currentRoll+=(d-this.currentRoll)*Math.min(1,r*7),this.bodyGroup.rotation.z=this.currentRoll;const f=-h*.08;this.currentYaw+=(f-this.currentYaw)*Math.min(1,r*6),this.bodyGroup.rotation.y=this.currentYaw;let l=0;i?l=.04:o&&(l=-.05),this.currentPitch+=(l-this.currentPitch)*Math.min(1,r*8),this.bodyGroup.rotation.x=this.currentPitch;const u=performance.now()*.001,g=Math.min(1,t/80),x=Math.sin(u*8.5)*.025*g;this.coupleGroup.position.y=x,this.coupleGroup.rotation.z=Math.sin(u*4.2)*.015*g,this.exhaustFires.forEach(m=>{o?(m.material.opacity=.9,m.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):m.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=r,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(m=>m.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(m=>m.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=1.15,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Up{constructor(){this.group=new gt,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new Sn,this.collisionSize=new N(1.32,1.74,2.58),this._boxCenter=new N,this.buildCNG(),this.group.scale.set(.96,.96,.96)}buildCNG(){this.bodyGroup=new gt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.clearRect(0,0,1024,1024),e.beginPath(),e.moveTo(0,420),e.lineTo(0,150),e.quadraticCurveTo(0,18,175,18),e.lineTo(849,18),e.quadraticCurveTo(1024,18,1024,150),e.lineTo(1024,420),e.closePath(),e.fillStyle="#1c1917",e.fill(),e.fillStyle="rgba(255, 255, 255, 0.025)";for(let Gt=0;Gt<1024;Gt+=4)e.fillRect(Gt,0,2,420);for(let Gt=0;Gt<420;Gt+=4)e.fillRect(0,Gt,1024,2);const n=262,i=135,o=500,r=220;e.fillStyle="#09090b",e.beginPath(),e.roundRect(n-14,i-14,o+28,r+28,28),e.fill();const a=e.createLinearGradient(n,i,n,i+r);a.addColorStop(0,"#0f172a"),a.addColorStop(.4,"#1e293b"),a.addColorStop(1,"#090d16"),e.fillStyle=a,e.beginPath(),e.roundRect(n,i,o,r,20),e.fill(),e.fillStyle="#2563eb",e.beginPath(),e.roundRect(n+25,i+65,o-50,r-75,14),e.fill(),e.strokeStyle="#1d4ed8",e.lineWidth=4,e.beginPath(),e.moveTo(n+o*.5,i+65),e.lineTo(n+o*.5,i+r-10),e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.12)",e.beginPath(),e.moveTo(n+40,i+r),e.lineTo(n+160,i),e.lineTo(n+220,i),e.lineTo(n+100,i+r),e.closePath(),e.fill(),e.fillStyle="#facc15",e.fillRect(0,420,1024,105),e.fillStyle="#18181b",e.fillRect(0,416,1024,6),e.fillRect(0,523,1024,6),e.fillStyle="#15803d",e.fillRect(0,525,1024,499),e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(0,529,1024,4);const c=230,h=565,d=564,f=345;e.fillStyle="#14532d",e.beginPath(),e.roundRect(c-6,h-6,d+12,f+12,12),e.fill(),e.fillStyle="#166534",e.beginPath(),e.roundRect(c,h,d,f,8),e.fill(),e.strokeStyle="#22c55e",e.lineWidth=3,e.stroke();for(let Gt=0;Gt<4;Gt++){const bt=h+38+Gt*68;e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+28,bt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+32,bt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+32,bt+4,227,4),e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+301,bt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+305,bt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+305,bt+4,227,4)}e.fillStyle="#cbd5e1",e.beginPath(),e.roundRect(c+d*.5-28,h+f-36,56,18,4),e.fill(),e.fillStyle="#09090b",e.beginPath(),e.arc(c+d*.5,h+f-27,4,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="900 64px sans-serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.7)",e.shadowBlur=6,e.fillText("CNG",120,715),e.shadowBlur=0;const l=810,u=665,g=165,x=95;e.fillStyle="#facc15",e.beginPath(),e.roundRect(l,u,g,x,8),e.fill(),e.strokeStyle="#18181b",e.lineWidth=4,e.stroke(),e.fillStyle="#18181b",e.font="900 32px sans-serif",e.fillText("HR 26",l+g*.5,u+34),e.font="900 36px monospace",e.fillText("0123",l+g*.5,u+70),e.fillStyle="#18181b",e.fillRect(0,955,1024,69),e.fillStyle="#3f3f46",e.fillRect(0,955,1024,6);const m=new le(t),p=document.createElement("canvas");p.width=1024,p.height=1024;const v=p.getContext("2d");v.clearRect(0,0,1024,1024),v.beginPath(),v.moveTo(0,480),v.lineTo(0,140),v.quadraticCurveTo(0,18,175,18),v.lineTo(849,18),v.quadraticCurveTo(1024,18,1024,140),v.lineTo(1024,480),v.closePath(),v.fillStyle="#facc15",v.fill(),v.fillStyle="#09090b",v.beginPath(),v.roundRect(75,55,874,340,24),v.fill(),v.fillStyle="#1e293b",v.fillRect(265,75,494,300),v.fillStyle="#1e293b",v.fillRect(95,75,150,300),v.fillStyle="#1e293b",v.fillRect(779,75,150,300),v.fillStyle="#09090b",v.fillRect(245,70,20,310),v.fillRect(759,70,20,310),v.strokeStyle="#09090b",v.lineWidth=10,v.beginPath(),v.moveTo(420,370),v.lineTo(610,205),v.stroke(),v.strokeStyle="#18181b",v.lineWidth=6,v.beginPath(),v.moveTo(560,245),v.lineTo(660,160),v.stroke(),v.fillStyle="#f59e0b",v.beginPath(),v.roundRect(115,420,95,34,6),v.fill(),v.beginPath(),v.roundRect(814,420,95,34,6),v.fill(),v.fillStyle="#15803d",v.fillRect(0,480,1024,544),v.fillStyle="#18181b",v.beginPath(),v.moveTo(310,480),v.lineTo(714,480),v.lineTo(650,880),v.lineTo(374,880),v.closePath(),v.fill(),v.fillStyle="#facc15",v.beginPath(),v.roundRect(432,590,160,80,6),v.fill(),v.strokeStyle="#18181b",v.lineWidth=3,v.stroke(),v.fillStyle="#18181b",v.font="900 26px sans-serif",v.textAlign="center",v.fillText("HR 26",512,622),v.font="900 28px monospace",v.fillText("0123",512,654),v.fillStyle="#ffffff",v.font="900 52px sans-serif",v.fillText("CNG",200,680);const _=new le(p),y=document.createElement("canvas");y.width=1024,y.height=512;const P=y.getContext("2d");P.fillStyle="#1c1917",P.fillRect(0,0,1024,210),P.fillStyle="#facc15",P.fillRect(0,210,1024,60),P.fillStyle="#18181b",P.fillRect(0,206,1024,4),P.fillRect(0,270,1024,4),P.fillStyle="#15803d",P.fillRect(0,270,1024,242),P.fillStyle="#0f172a",P.beginPath(),P.roundRect(240,75,480,310,18),P.fill(),P.fillStyle="#2563eb",P.beginPath(),P.roundRect(460,230,240,110,12),P.fill(),P.strokeStyle="#09090b",P.lineWidth=14,P.beginPath(),P.roundRect(240,75,480,310,18),P.stroke();const L=new le(y),I=new G({color:1409085,metalness:.25,roughness:.35});new G({color:16436245,metalness:.15,roughness:.38});const k=new G({color:1841431,roughness:.85,metalness:.05}),b=new G({color:2450411,roughness:.55}),w=new G({color:1579035,roughness:.92}),T=new G({color:15857145,metalness:.45,roughness:.35}),O=new G({color:16317180,metalness:.92,roughness:.12}),st=new G({map:m,roughness:.4,metalness:.1,side:Ee,transparent:!0,alphaTest:.2}),U=new G({map:_,roughness:.4,metalness:.1,side:Ee,transparent:!0,alphaTest:.2}),V=new G({map:L,roughness:.42,metalness:.1,side:Ee}),W=new X(1.24,.24,2.38),z=new M(W,I);z.position.set(0,.34,0),z.castShadow=!0,z.receiveShadow=!0,this.bodyGroup.add(z);const it=new X(.85,.22,.65),Z=new M(it,I);Z.position.set(0,.33,-1.05),Z.castShadow=!0,this.bodyGroup.add(Z);const H=new gt,$=()=>{const Tt=[],lt=[],Et=[],kt=(Ct,Qt)=>{let zt=.635;const pe=-1.18+Qt*2.27;pe<-.88?zt=.635-(-.88-pe)/.3*.05:pe>.85&&(zt=.635-(pe-.85)/.24*.035);const fe=Ct*zt,Le=Math.max(0,1-Math.pow(Math.abs(Ct),2.2)),rn=Math.sin(Math.PI*(.12+.76*Qt)),yn=1.54-.012*Math.pow(Qt-.5,2)*4+.13*Le*rn;return new N(fe,yn,pe)};for(let Ct=0;Ct<=32;Ct++){const Qt=Ct/32;for(let zt=0;zt<=24;zt++){const pe=zt/24*2-1,fe=kt(pe,Qt);Tt.push(fe.x,fe.y,fe.z),lt.push(zt/24,Ct/32)}}const oe=25;for(let Ct=0;Ct<32;Ct++)for(let Qt=0;Qt<24;Qt++){const zt=Ct*oe+Qt,pe=(Ct+1)*oe+Qt,fe=(Ct+1)*oe+(Qt+1),Le=Ct*oe+(Qt+1);Et.push(zt,pe,Le),Et.push(pe,fe,Le)}const ne=.065;let Ht=Tt.length/3;for(let Ct=0;Ct<=32;Ct++){const Qt=Ct/32,zt=kt(-1,Qt);Tt.push(zt.x,zt.y,zt.z),lt.push(0,Qt),Tt.push(zt.x,zt.y-ne,zt.z),lt.push(1,Qt)}for(let Ct=0;Ct<32;Ct++){const Qt=Ht+Ct*2,zt=Ht+(Ct+1)*2,pe=Ht+(Ct+1)*2+1,fe=Ht+Ct*2+1;Et.push(Qt,fe,zt),Et.push(zt,fe,pe)}Ht=Tt.length/3;for(let Ct=0;Ct<=32;Ct++){const Qt=Ct/32,zt=kt(1,Qt);Tt.push(zt.x,zt.y,zt.z),lt.push(0,Qt),Tt.push(zt.x,zt.y-ne,zt.z),lt.push(1,Qt)}for(let Ct=0;Ct<32;Ct++){const Qt=Ht+Ct*2,zt=Ht+(Ct+1)*2,pe=Ht+(Ct+1)*2+1,fe=Ht+Ct*2+1;Et.push(Qt,zt,fe),Et.push(zt,fe,pe)}Ht=Tt.length/3;for(let Ct=0;Ct<=24;Ct++){const Qt=Ct/24*2-1,zt=kt(Qt,0);Tt.push(zt.x,zt.y,zt.z),lt.push(Ct/24,0),Tt.push(zt.x,zt.y-ne,zt.z),lt.push(Ct/24,1)}for(let Ct=0;Ct<24;Ct++){const Qt=Ht+Ct*2,zt=Ht+(Ct+1)*2,pe=Ht+(Ct+1)*2+1,fe=Ht+Ct*2+1;Et.push(Qt,fe,zt),Et.push(zt,fe,pe)}Ht=Tt.length/3;for(let Ct=0;Ct<=24;Ct++){const Qt=Ct/24*2-1,zt=kt(Qt,1);Tt.push(zt.x,zt.y,zt.z),lt.push(Ct/24,0),Tt.push(zt.x,zt.y-ne,zt.z),lt.push(Ct/24,1)}for(let Ct=0;Ct<24;Ct++){const Qt=Ht+Ct*2,zt=Ht+(Ct+1)*2,pe=Ht+(Ct+1)*2+1,fe=Ht+Ct*2+1;Et.push(Qt,zt,fe),Et.push(zt,fe,pe)}const ue=new Fe;return ue.setAttribute("position",new de(Tt,3)),ue.setAttribute("uv",new de(lt,2)),ue.setIndex(Et),ue.computeVertexNormals(),ue},J=new M($(),k);J.castShadow=!0,J.receiveShadow=!0,H.add(J);const K=[-.68,-.18,.32,.76],j=new G({color:2565930,roughness:.65});K.forEach(Gt=>{const bt=(Gt- -1.18)/2.27,wt=[];for(let Tt=0;Tt<=16;Tt++){const lt=Tt/16*2-1,Et=Math.max(0,1-Math.pow(Math.abs(lt),2.2)),kt=Math.sin(Math.PI*(.12+.76*bt)),oe=1.54+.13*Et*kt+.005;wt.push(new N(lt*.63,oe,Gt))}const S=new Yn(wt),B=new Ln(S,16,.012,6,!1),tt=new M(B,j);H.add(tt)}),[-.635,.635].forEach(Gt=>{const bt=new ut(.012,.012,2.22,8);bt.rotateX(Math.PI/2);const wt=new M(bt,j);wt.position.set(Gt,1.53,-.04),H.add(wt)});const rt=new X(1.22,.035,.08),dt=new M(rt,j);dt.position.set(0,1.54,-1.17),H.add(dt);const at=new X(1.24,.035,.07),yt=new M(at,j);yt.position.set(0,1.54,1.08),H.add(yt);const Pt=new Kt(1.24,2.22);Pt.rotateX(Math.PI/2);const Q=new G({color:1579035,roughness:.95}),ht=new M(Pt,Q);ht.position.set(0,1.48,-.04),H.add(ht),this.bodyGroup.add(H),[-.635,.635].forEach((Gt,bt)=>{const wt=new M(new Kt(2.2,1.16),V);wt.position.set(Gt,.95,-.04),wt.rotation.y=bt===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(wt);const S=new X(.04,.32,1.15),B=new M(S,I);B.position.set(Gt*.98,.58,-.05),this.bodyGroup.add(B);const tt=new M(new ut(.022,.022,1.02,8),new G({color:1579035,roughness:.5}));tt.position.set(Gt*.96,1.16,-1),tt.rotation.x=.2,this.bodyGroup.add(tt);const Tt=new M(new ut(.022,.022,1.08,8),new G({color:1579035,roughness:.5}));Tt.position.set(Gt*.96,1.1,-.15),this.bodyGroup.add(Tt);const lt=new M(new ut(.022,.022,1.08,8),new G({color:1579035,roughness:.5}));lt.position.set(Gt*.96,1.1,1.02),this.bodyGroup.add(lt)});const D=new gt;D.position.set(0,0,1.075);const ft=new M(new Kt(1.26,1.18),st);ft.position.set(0,.95,.01),ft.rotation.y=0,D.add(ft),[-.54,.54].forEach(Gt=>{const bt=new gt;bt.position.set(Gt,.74,.035);const wt=new M(new X(.12,.24,.04),new G({color:1579035,roughness:.6}));bt.add(wt);const S=new M(new X(.1,.1,.025),new he({color:16096779}));S.position.set(0,.055,.018),bt.add(S);const B=new M(new X(.1,.1,.025),new he({color:14427686}));B.position.set(0,-.055,.018),bt.add(B),this.brakeLights.push(B),D.add(bt)});const ot=new X(1.32,.12,.08),_t=new M(ot,new G({color:1579035,roughness:.85}));_t.position.set(0,.32,.06),D.add(_t),[-.52,.52].forEach(Gt=>{const bt=new M(new X(.18,.22,.02),w);bt.position.set(Gt,.18,.04),bt.rotation.x=.08,D.add(bt)});const ct=new ut(.032,.032,.55,10);ct.rotateZ(Math.PI/2);const Ft=new M(ct,O);Ft.position.set(.22,.18,.02),D.add(Ft);const vt=new _e(.075,.45,10);vt.rotateX(-Math.PI/2);const A=new he({color:440020,transparent:!0,opacity:0}),E=new M(vt,A);E.position.set(.48,.18,.28),D.add(E),this.exhaustFires.push(E),this.bodyGroup.add(D);const Y=new gt;Y.position.set(0,0,-1.15);const Mt=new M(new Kt(1.22,1.18),U);Mt.position.set(0,.95,0),Mt.rotation.y=Math.PI,Y.add(Mt),[-.32,.32].forEach(Gt=>{const bt=new gt;bt.position.set(Gt,.68,-.04);const wt=new M(new ut(.085,.085,.04,16),O);wt.rotateX(Math.PI/2),bt.add(wt);const S=new M(new Wt(.075,12,12,0,Math.PI*2,0,Math.PI*.5),new he({color:16777215}));S.rotateX(Math.PI),S.position.z=-.015,bt.add(S),this.headlights.push(S),Y.add(bt)}),this.bodyGroup.add(Y),[-1,1].forEach(Gt=>{const bt=new gt,wt=(.64+.14)*Gt;bt.position.set(wt,1.15,-.72);const S=new ut(.012,.012,.28,8);S.rotateZ(Gt>0?-Math.PI*.35:Math.PI*.35);const B=new M(S,new G({color:1579035}));bt.add(B);const tt=new ut(.075,.075,.03,16);tt.rotateX(Math.PI/2);const Tt=new M(tt,new G({color:1579035,roughness:.5}));Tt.position.set(Gt*.12,.08,0),bt.add(Tt);const lt=new M(new ji(.068,16),O);lt.position.set(Gt*.12,.08,.018),bt.add(lt),this.bodyGroup.add(bt)});const pt=new gt,mt=new M(new X(.48,.12,.44),new G({color:1981066,roughness:.7}));mt.position.set(0,.52,-.32),pt.add(mt);const Ot=new M(new X(.48,.42,.1),new G({color:1981066,roughness:.7}));Ot.position.set(0,.76,-.12),pt.add(Ot);const At=new M(new X(1.16,.16,.48),b);At.position.set(0,.54,.55),pt.add(At);const Ut=new M(new X(1.16,.48,.12),b);Ut.position.set(0,.84,.82),pt.add(Ut);const Vt=new gt;Vt.position.set(0,.78,-.85);const Lt=new ut(.016,.016,.62,10);Lt.rotateZ(Math.PI/2);const xt=new M(Lt,O);Vt.add(xt),[-.28,.28].forEach(Gt=>{const bt=new M(new ut(.024,.024,.12,8),w);bt.rotateZ(Math.PI/2),bt.position.x=Gt,Vt.add(bt)});const $t=new M(new ut(.045,.045,.04,12),new G({color:1579035}));$t.position.set(0,.04,-.04),Vt.add($t),pt.add(Vt),this.bodyGroup.add(pt);const Jt=(Gt=!1)=>{const bt=new gt,wt=new ut(.24,.24,.14,20);wt.rotateZ(Math.PI/2);const S=new M(wt,w);S.castShadow=!0,bt.add(S);const B=new ut(.14,.14,.145,16);B.rotateZ(Math.PI/2);const tt=new M(B,T);bt.add(tt);const Tt=new M(new ut(.05,.05,.155,12),O);Tt.rotateZ(Math.PI/2),bt.add(Tt);for(let lt=0;lt<4;lt++){const Et=lt/4*Math.PI*2,kt=new M(new ut(.012,.012,.16,6),O);kt.rotateZ(Math.PI/2),kt.position.set(0,Math.sin(Et)*.08,Math.cos(Et)*.08),bt.add(kt)}return bt},Xt=new gt;Xt.position.set(0,.24,-1.18);const Bt=Jt(!0);Xt.add(Bt),this.wheels.push(Bt),this.frontWheel=Xt;const Rt=new M(new ut(.024,.028,.52,8),O);Rt.position.set(-.1,.22,0),Rt.rotation.x=-.18,Xt.add(Rt);const Zt=new ut(.28,.28,.18,16,1,!0,Math.PI*.2,Math.PI*.65);Zt.rotateZ(Math.PI/2);const te=new M(Zt,I);te.position.set(0,.05,0),Xt.add(te),this.bodyGroup.add(Xt),[-.56,.56].forEach(Gt=>{const bt=Jt(!1);bt.position.set(Gt,.24,.64),this.wheels.push(bt),this.bodyGroup.add(bt)})}update(t,e,n,i,o,r){const a=t*1e3/3600,c=2*Math.PI*.24,h=a/c*r*Math.PI*2;this.wheelRotation+=h,this.wheels.forEach(g=>{g.rotation.x=this.wheelRotation});const d=n-e,f=d*.045;this.currentRoll+=(f-this.currentRoll)*Math.min(1,r*9),this.bodyGroup.rotation.z=this.currentRoll,this.frontWheel&&(this.frontWheel.rotation.y=-d*.18);const l=-d*.08;this.currentYaw+=(l-this.currentYaw)*Math.min(1,r*8),this.bodyGroup.rotation.y=this.currentYaw;let u=0;i?u=.04:o&&(u=-.035),this.currentPitch+=(u-this.currentPitch)*Math.min(1,r*8),this.bodyGroup.rotation.x=this.currentPitch,this.brakeLights.forEach(g=>{g.material.color.setHex(i?16711680:14427686)}),this.exhaustFires.forEach(g=>{o?(g.material.opacity=.95,g.scale.set(1.2+Math.random()*.4,1.2+Math.random()*.5,1.2+Math.random()*.4),g.material.color.setHex(Math.random()>.4?440020:3718648)):g.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=r,this.headlights.forEach(g=>g.scale.set(1.4,1.4,1.4))):this.headlights.forEach(g=>g.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=.88,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.45,this.bodyGroup.rotation.y=.5,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Np{constructor(){this.isMobile=ti(),this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[]}applyShadow(t){this.isMobile||(t.castShadow=!0)}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let J=0;J<128;J+=8)e.fillStyle="#6b7280",e.fillRect(J,0,4,128),e.fillStyle="#d1d5db",e.fillRect(J+4,0,4,128);const n=new le(t);n.wrapS=Re,n.wrapT=Re,n.repeat.set(4,4),this.tinRoofMat=new G({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new G({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const o=i.getContext("2d");o.fillStyle="#c8a165",o.fillRect(0,0,128,128),o.strokeStyle="#8c6239",o.lineWidth=3;for(let J=0;J<=128;J+=16)o.beginPath(),o.moveTo(0,J),o.lineTo(128,J),o.stroke(),o.beginPath(),o.moveTo(J,0),o.lineTo(J,128),o.stroke();const r=new le(i);r.wrapS=Re,r.wrapT=Re,r.repeat.set(2,2),this.bambooWallMat=new G({map:r,roughness:.85,color:13935475}),this.woodMat=new G({color:6045747,roughness:.85}),this.mudPlinthMat=new G({color:8150594,roughness:.95}),this.brickMat=new G({color:10239278,roughness:.9}),this.palmLeafMat=new G({color:3046706,roughness:.6,side:Ee}),this.bananaLeafMat=new G({color:4431943,roughness:.5,side:Ee}),this.treeCrownMat=new G({color:1793568,roughness:.85}),this.bambooTrunkMat=new G({color:6732650,roughness:.4}),this.palmTrunkMat=new G({color:7162945,roughness:.9}),this.hayMat=new G({color:13934615,roughness:.95}),this.paddyFieldMat=new G({color:3706428,roughness:.8}),this.waterMat=new G({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new G({color:10395294,roughness:.7}),this.cowWhiteMat=new G({color:16119280,roughness:.6}),this.cowBrownMat=new G({color:9262372,roughness:.65}),this.cowBlackPatchMat=new G({color:2171169,roughness:.7}),this.hornMat=new G({color:3621201,roughness:.4}),this.ropeMat=new he({color:12756553}),this.duckMat=new G({color:16777215,roughness:.5}),this.beakMat=new G({color:16750592,roughness:.4}),this.smokeMat=new he({color:16777215,transparent:!0,opacity:.35}),this.bridgeRedMat=new G({color:14427686,roughness:.55}),this.bridgeWhiteMat=new G({color:16317180,roughness:.5});const a=document.createElement("canvas");a.width=256,a.height=128;const c=a.getContext("2d");c.fillStyle="#ffffff",c.fillRect(0,0,256,128),c.fillStyle="#dc2626";const h=32;for(let J=-128;J<384;J+=h*2)c.beginPath(),c.moveTo(J,0),c.lineTo(J+h,0),c.lineTo(J+h-128,128),c.lineTo(J-128,128),c.closePath(),c.fill();const d=new le(a);d.wrapS=Re,d.wrapT=Re,d.repeat.set(24,1),this.bridgeCurbMat=new G({map:d,roughness:.6}),this.pipelineMat=new G({color:9741240,metalness:.8,roughness:.25}),this.riverWaterMat=new G({color:1400437,roughness:.12,metalness:.35,transparent:!0,opacity:.92});const f=document.createElement("canvas");f.width=64,f.height=128;const l=f.getContext("2d");l.fillStyle="#dc2626",l.fillRect(0,0,64,128),l.fillStyle="#ffffff",l.fillRect(0,24,64,30),l.fillRect(0,78,64,30);const u=new le(f);this.bollardMat=new G({map:u,roughness:.5});const g=document.createElement("canvas");g.width=128,g.height=128;const x=g.getContext("2d");x.fillStyle="#1e40af",x.fillRect(0,0,128,128);for(let J=0;J<128;J+=8)x.fillStyle="#1d4ed8",x.fillRect(J,0,4,128),x.fillStyle="#3b82f6",x.fillRect(J+4,0,4,128);const m=new le(g);m.wrapS=Re,m.wrapT=Re,m.repeat.set(6,2),this.stageBlueRoofMat=new G({map:m,metalness:.4,roughness:.45,color:1920728,side:Ee}),this.stageTrussMat=new G({color:3359061,metalness:.75,roughness:.35}),this.stageBaseYellowMat=new G({color:16436245,roughness:.65}),this.stageBorderBlueMat=new G({color:165063,roughness:.45}),this.stageFloorMat=new G({color:10265519,roughness:.7}),this.stageTerracottaMat=new G({color:12730636,roughness:.85}),this.stageGoldEmblemMat=new G({color:16498468,metalness:.65,roughness:.25}),this.hillGreenMat=new G({color:3046706,roughness:.92,flatShading:!0}),this.hillDarkGreenMat=new G({color:1332013,roughness:.95,flatShading:!0}),this.pavingPlazaMat=new G({color:14078929,roughness:.9});const p=document.createElement("canvas");p.width=512,p.height=512;const v=p.getContext("2d");v.fillStyle="#8c867e",v.fillRect(0,0,512,512);const _=8,y=6,P=512/_,L=512/y;for(let J=0;J<_;J++)for(let K=0;K<y;K++){const j=K*L+8,rt=J*P+12,dt=L-16,at=P-18;v.fillStyle="#1e293b",v.fillRect(j,rt,dt,at);const yt=v.createLinearGradient(j,rt,j,rt+at);yt.addColorStop(0,"#38bdf8"),yt.addColorStop(.35,"#1e293b"),yt.addColorStop(1,"#090d16"),v.fillStyle=yt,v.fillRect(j+2,rt+4,dt-4,at-6),v.strokeStyle="rgba(255, 255, 255, 0.2)",v.lineWidth=1.2,v.beginPath(),v.moveTo(j+dt*.5,rt+4),v.lineTo(j+dt*.5,rt+at-2),v.stroke(),v.fillStyle="#f8fafc",v.fillRect(j-2,rt-3,dt+4,5),v.fillStyle="rgba(0, 0, 0, 0.25)",v.fillRect(j-2,rt+2,dt+4,2)}const I=new le(p);I.wrapS=Re,I.wrapT=Re,I.repeat.set(2,4),this.uiuFacadeMat=new G({map:I,metalness:.25,roughness:.55});const k=document.createElement("canvas");k.width=512,k.height=512;const b=k.getContext("2d");b.drawImage(p,0,0),b.fillStyle="#1c1917",b.fillRect(24,16,464,160),b.strokeStyle="#8c867e",b.lineWidth=6,b.strokeRect(20,12,472,168),b.strokeStyle="rgba(239, 68, 68, 0.9)",b.lineWidth=26,b.lineCap="round",b.lineJoin="round",b.font="900 125px Arial, sans-serif",b.textAlign="center",b.textBaseline="middle",b.shadowColor="#ef4444",b.shadowBlur=28,b.strokeText("UIU",256,96),b.strokeStyle="#f97316",b.lineWidth=14,b.strokeText("UIU",256,96),b.fillStyle="#fee2e2",b.shadowBlur=0,b.fillText("UIU",256,96);const w=new le(k);this.uiuLogoMat=new G({map:w,metalness:.25,roughness:.45,emissive:4460808});const T=document.createElement("canvas");T.width=512,T.height=512;const O=T.getContext("2d");O.fillStyle="#0f172a",O.fillRect(0,0,512,512);for(let J=0;J<512;J+=64)O.strokeStyle="rgba(255, 255, 255, 0.12)",O.lineWidth=1.5,O.beginPath(),O.moveTo(0,J),O.lineTo(512,J),O.stroke();for(let J=0;J<512;J+=64)O.strokeStyle="rgba(255, 255, 255, 0.12)",O.lineWidth=1.5,O.beginPath(),O.moveTo(J,0),O.lineTo(J,512),O.stroke();O.strokeStyle="#cbd5e1",O.lineWidth=10,O.lineCap="square";const st=4,U=512/st;for(let J=0;J<st;J++){const K=J*U,j=(J+1)*U;O.beginPath(),O.moveTo(16,K),O.lineTo(496,j),O.stroke(),O.beginPath(),O.moveTo(496,K),O.lineTo(16,j),O.stroke(),O.lineWidth=14,O.strokeStyle="#8c867e",O.beginPath(),O.moveTo(0,j),O.lineTo(512,j),O.stroke(),O.lineWidth=10,O.strokeStyle="#cbd5e1"}const V=new le(T);this.uiuAtriumMat=new G({map:V,metalness:.6,roughness:.25}),this.uiuBrickFlankMat=new G({color:11817737,roughness:.8}),this.uiuRoofGardenMat=new G({color:1409085,roughness:.9}),this.uiuTentMat=new G({color:16317180,roughness:.45});const W=document.createElement("canvas");W.width=512,W.height=128;const z=W.getContext("2d");z.fillStyle="#0f172a",z.fillRect(0,0,512,128),z.strokeStyle="#f59e0b",z.lineWidth=6,z.strokeRect(8,8,496,112),z.fillStyle="#ef4444",z.font="900 48px sans-serif",z.textAlign="center",z.textBaseline="middle",z.fillText("UIU",256,42),z.fillStyle="#ffffff",z.font="bold 18px sans-serif",z.fillText("UNITED INTERNATIONAL UNIVERSITY",256,90);const it=new le(W);this.uiuGateSignMat=new G({map:it,roughness:.4});const Z=document.createElement("canvas");Z.width=512,Z.height=512;const H=Z.getContext("2d");H.fillStyle="#15803d",H.fillRect(0,0,512,512),H.fillStyle="#65a30d";for(let J=0;J<512;J+=40)H.fillRect(0,J,512,20);H.strokeStyle="#ffffff",H.lineWidth=7,H.strokeRect(24,20,464,472),H.beginPath(),H.moveTo(24,256),H.lineTo(488,256),H.stroke(),H.beginPath(),H.arc(256,256,68,0,Math.PI*2),H.stroke(),H.fillStyle="#ffffff",H.beginPath(),H.arc(256,256,8,0,Math.PI*2),H.fill(),H.strokeRect(146,20,220,92),H.strokeRect(146,400,220,92),H.beginPath(),H.arc(256,85,36,0,Math.PI),H.stroke(),H.beginPath(),H.arc(256,427,36,Math.PI,0),H.stroke(),H.strokeRect(196,20,120,38),H.strokeRect(196,454,120,38);const $=new le(Z);this.uiuLawnMat=new G({map:$,roughness:.85}),this.uiuConcreteMat=new G({color:9209470,roughness:.7}),this.uiuGlassMat=new G({color:988970,metalness:.8,roughness:.15}),this.goalPostMat=new G({color:16317180,roughness:.4}),this.skinMat=new G({color:16106390,roughness:.65}),this.hairMat=new G({color:1579035,roughness:.45}),this.panjabiMat=new G({color:16317180,roughness:.7}),this.lungiPlaidMat=new G({color:165063,roughness:.8}),this.shirtTealMat=new G({color:889992,roughness:.7}),this.shirtRedMat=new G({color:14427686,roughness:.7})}createCow(t="brown"){const e=new gt;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new X(.9,.95,1.7),o=new M(i,n);o.position.set(0,1.05,0),this.applyShadow(o),e.add(o);const r=new _e(.3,.45,8),a=new M(r,n);a.position.set(0,1.62,-.45),a.rotation.x=-.2,this.applyShadow(a),e.add(a);const c=new X(.12,.45,.5),h=new M(c,n);h.position.set(0,.85,-.85),e.add(h);const d=new gt;d.position.set(0,1.25,-.85);const f=new X(.45,.55,.6),l=new M(f,n);l.position.set(0,.15,-.2),l.rotation.x=.35,d.add(l);const u=new X(.48,.52,.7),g=new M(u,n);g.position.set(0,.28,-.55),d.add(g);const x=new G({color:2236962,roughness:.8}),m=new X(.36,.3,.3),p=new M(m,x);p.position.set(0,.18,-.92),d.add(p),[-.22,.22].forEach(V=>{const W=new _e(.06,.35,6),z=new M(W,this.hornMat);z.position.set(V,.56,-.48),z.rotation.z=V>0?-.4:.4,z.rotation.x=.3,d.add(z);const it=new X(.22,.08,.1),Z=new M(it,n);Z.position.set(V>0?.32:-.32,.38,-.45),Z.rotation.z=V>0?-.35:.35,d.add(Z)}),e.add(d),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(V=>{const W=new X(.2,.75,.2),z=new M(W,n);z.position.set(V.x,.38,V.z),this.applyShadow(z),e.add(z);const it=new X(.22,.1,.22),Z=new M(it,this.hornMat);Z.position.set(V.x,.05,V.z),e.add(Z)});const _=new gt;_.position.set(0,1.35,.85);const y=new ut(.03,.03,.85,6);y.translate(0,-.42,0);const P=new M(y,n);_.add(P);const L=new _e(.08,.25,6);L.translate(0,-.9,0);const I=new M(L,this.hornMat);_.add(I),e.add(_);const k=new ut(.08,.1,1.2,8),b=new M(k,this.woodMat);b.position.set(.9,.6,-1.2),e.add(b);const w=[new N(0,1.2,-.8),new N(.45,.75,-1),new N(.9,.85,-1.2)],T=new Yn(w),O=new Ln(T,8,.02,4,!1),st=new M(O,this.ropeMat);e.add(st);const U={type:"cow",head:d,tail:_,seed:Math.random()*10};return this.animatedAnimals.push(U),e}createVillageHouse(t=!1){const e=new gt;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new X(6.6,.45,5.2),o=new M(i,this.mudPlinthMat);o.position.set(0,.22,0),o.receiveShadow=!0,e.add(o);const r=new X(5.8,2.6,3.8),a=new M(r,this.bambooWallMat);a.position.set(0,1.75,-.4),this.applyShadow(a),a.receiveShadow=!0,e.add(a);const c=new X(.85,1.8,.08),h=new M(c,this.woodMat);h.position.set(.6,1.35,1.52),e.add(h),[-1.6,-.6].forEach(g=>{const x=new X(.7,.8,.08),m=new M(x,this.woodMat);m.position.set(g,1.8,1.52),e.add(m)});const d=new X(6.6,.1,2.8),f=new M(d,n);f.position.set(0,3.65,-.9),f.rotation.x=-.52,this.applyShadow(f),e.add(f);const l=new X(6.6,.1,3.4),u=new M(l,n);return u.position.set(0,3.5,.8),u.rotation.x=.46,this.applyShadow(u),e.add(u),[-2.5,-.8,.8,2.5].forEach(g=>{const x=new ut(.08,.08,2.3,8),m=new M(x,this.woodMat);m.position.set(g,1.6,2.1),this.applyShadow(m),e.add(m)}),e}createTeaStall(){const t=new gt;t.name="cha_er_tong";const e=new X(3.2,1,1.8),n=new M(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new X(3.8,.08,2.8),o=new M(i,this.tinRoofMat);o.position.set(0,2.3,.2),o.rotation.x=.2,this.applyShadow(o),t.add(o),[-1.6,1.6].forEach(x=>{const m=new ut(.07,.07,2.2,6),p=new M(m,this.woodMat);p.position.set(x,1.1,1.2),t.add(p)});const r=new X(3,.08,.45),a=new M(r,this.woodMat);a.position.set(0,.45,1.8),t.add(a),[-1.2,1.2].forEach(x=>{const m=new X(.08,.45,.4),p=new M(m,this.woodMat);p.position.set(x,.22,1.8),t.add(p)});const c=new G({color:13421772,metalness:.9,roughness:.2}),h=new ut(.18,.22,.35,10),d=new M(h,c);d.position.set(-.6,1.18,.2),t.add(d);const f=new Jo({color:16777215,transmission:.7,roughness:.1}),l=new ut(.12,.12,.28,8),u=new M(l,f);u.position.set(.6,1.15,.1),t.add(u);const g=new gt;g.position.set(-.6,1.45,.2),t.add(g);for(let x=0;x<4;x++){const m=new Wt(.08,6,6),p=new M(m,this.smokeMat);p.position.y=x*.25,g.add(p)}return this.smokeEmitters.push(g),t}createHaystack(){const t=new gt;t.name="khorer_gada";const e=new ut(1.6,1.9,1.4,12),n=new M(e,this.hayMat);n.position.y=.7,this.applyShadow(n),t.add(n);const i=new ut(1,1.6,1.2,12),o=new M(i,this.hayMat);o.position.y=2,this.applyShadow(o),t.add(o);const r=new _e(1,1.5,12),a=new M(r,this.hayMat);a.position.y=3.35,this.applyShadow(a),t.add(a);const c=new ut(.04,.05,4.8,6),h=new M(c,this.bambooTrunkMat);return h.position.y=2.4,t.add(h),t}createJatriChawni(t=1){const e=new gt;e.name="jatri_chawni";const n=new X(5,.35,2.3),i=new M(n,this.concreteMat);i.position.set(0,.175,0),i.receiveShadow=!0,e.add(i);const o=new X(5.2,.14,.22),r=new M(o,this.brickMat);r.position.set(0,.07,-1.1),e.add(r);const a=new X(4.8,2.5,.18),c=new M(a,this.brickMat);c.position.set(0,1.45,1.02),this.applyShadow(c),e.add(c);const h=new Kt(4.6,2.3),d=new M(h,this.culvertRailingMaterial);d.position.set(0,1.45,.92),e.add(d),[[-2.1,-.92],[2.1,-.92],[-2.1,.92],[2.1,.92]].forEach(([R,q])=>{const nt=new ut(.08,.09,2.6,12),C=new M(nt,this.culvertRailingMaterial);C.position.set(R,1.45,q),this.applyShadow(C),e.add(C);const F=new ut(.12,.12,.35,12),et=new M(F,new G({color:1409085}));et.position.set(R,.45,q),e.add(et)});const l=new ut(2.4,2.4,5.2,24,1,!0,Math.PI*.2,Math.PI*.6);l.rotateZ(Math.PI/2);const u=new M(l,this.tinRoofMat);if(u.position.set(0,2.75,.05),this.applyShadow(u),e.add(u),[-1.8,0,1.8].forEach(R=>{const q=new X(.06,.06,2.1),nt=new M(q,new G({color:3359061}));nt.position.set(R,2.55,0),e.add(nt)}),!this.isMobile){const R=new bs(16772565,3,14);R.position.set(0,2.45,.25),e.add(R)}const g=new ut(.14,.18,.28,8,1,!0),x=new M(g,new G({color:1976635,wireframe:!0}));x.position.set(0,2.48,.25),e.add(x);const m=new M(new Wt(.1,12,12),new he({color:16772565}));m.position.set(0,2.48,.25),e.add(m);const p=document.createElement("canvas");p.width=1024,p.height=256;const v=p.getContext("2d");v.fillStyle="#15803d",v.fillRect(0,0,1024,256),v.strokeStyle="#f59e0b",v.lineWidth=14,v.strokeRect(10,10,1004,236),v.strokeStyle="#fde047",v.lineWidth=4,v.strokeRect(24,24,976,208);const _=(R,q)=>{v.fillStyle="#fde047",v.beginPath(),v.roundRect(R,q,76,44,8),v.fill(),v.fillStyle="#0284c7",v.fillRect(R+8,q+6,20,18),v.fillRect(R+34,q+6,20,18),v.fillRect(R+58,q+6,12,18),v.fillStyle="#18181b",v.beginPath(),v.arc(R+20,q+44,9,0,Math.PI*2),v.arc(R+56,q+44,9,0,Math.PI*2),v.fill()};_(42,105),_(906,105),v.fillStyle="#ffffff",v.font="900 86px sans-serif",v.textAlign="center",v.textBaseline="middle",v.shadowColor="rgba(0,0,0,0.9)",v.shadowBlur=12,v.fillText("BUS STOP",512,85),v.fillStyle="#fde047",v.font="bold 54px sans-serif",v.shadowColor="rgba(0,0,0,0.8)",v.shadowBlur=8,v.fillText("বাস স্টপ  |  যাত্রী ছাউনি",512,185),v.shadowBlur=0;const y=new le(p),P=new gt;P.position.set(0,2.65,-1.02);const L=new X(4.24,.84,.07),I=new G({color:1332013,roughness:.5}),k=new M(L,I);P.add(k);const b=new G({map:y,roughness:.35,emissive:1409085,emissiveIntensity:.15}),w=new Kt(4.18,.78);w.rotateY(Math.PI);const T=new M(w,b);T.position.set(0,0,-.038),P.add(T);const O=new Kt(4.18,.78),st=new M(O,b);st.position.set(0,0,.038),P.add(st),e.add(P);const U=new gt,V=t>0?-2.25:2.25;U.position.set(V,0,-1.15);const W=new M(new ut(.18,.22,.3,12),this.concreteMat);W.position.set(0,.15,0),U.add(W);const z=new G({color:3359061,metalness:.8,roughness:.2}),it=new M(new ut(.045,.045,3.1,12),z);it.position.set(0,1.55,0),U.add(it);const Z=document.createElement("canvas");Z.width=512,Z.height=512;const H=Z.getContext("2d");H.fillStyle="#0284c7",H.beginPath(),H.roundRect(16,16,480,480,48),H.fill(),H.strokeStyle="#facc15",H.lineWidth=20,H.stroke(),H.strokeStyle="#ffffff",H.lineWidth=4,H.beginPath(),H.roundRect(36,36,440,440,36),H.stroke(),H.fillStyle="#ffffff",H.beginPath(),H.roundRect(135,75,242,130,24),H.fill(),H.fillStyle="#0284c7",H.fillRect(155,95,60,50),H.fillRect(230,95,60,50),H.fillRect(305,95,52,50),H.fillStyle="#18181b",H.beginPath(),H.arc(190,205,22,0,Math.PI*2),H.arc(320,205,22,0,Math.PI*2),H.fill(),H.fillStyle="#ffffff",H.font="900 72px sans-serif",H.textAlign="center",H.textBaseline="middle",H.shadowColor="rgba(0,0,0,0.85)",H.shadowBlur=8,H.fillText("BUS STOP",256,310),H.fillStyle="#fde047",H.font="bold 56px sans-serif",H.fillText("বাস স্টপ",256,405),H.shadowBlur=0;const $=new le(Z),J=new G({map:$,roughness:.35,emissive:165063,emissiveIntensity:.12}),K=new gt;K.position.set(0,2.7,0);const j=new M(new X(.96,.96,.06),new G({color:223649,roughness:.4}));K.add(j);const rt=new Kt(.92,.92);rt.rotateY(Math.PI);const dt=new M(rt,J);dt.position.set(0,0,-.032),K.add(dt);const at=new Kt(.92,.92),yt=new M(at,J);yt.position.set(0,0,.032),K.add(yt),K.rotation.y=t>0?.35:-.35,U.add(K),e.add(U);const Pt=document.createElement("canvas");Pt.width=512,Pt.height=320;const Q=Pt.getContext("2d");Q.fillStyle="#f8fafc",Q.fillRect(0,0,512,320),Q.strokeStyle="#15803d",Q.lineWidth=14,Q.strokeRect(8,8,496,304),Q.strokeStyle="#dc2626",Q.lineWidth=4,Q.strokeRect(22,22,468,276),Q.fillStyle="#15803d",Q.font="bold 30px sans-serif",Q.textAlign="center",Q.textBaseline="middle",Q.fillText("বাংলাদেশ সড়ক পরিবহন (BRTC)",256,55),Q.fillStyle="#dc2626",Q.font="900 68px sans-serif",Q.shadowColor="rgba(0,0,0,0.3)",Q.shadowBlur=4,Q.fillText("BUS STOP",256,140),Q.fillStyle="#1e293b",Q.font="bold 50px sans-serif",Q.shadowBlur=0,Q.fillText("বাস স্টপ",256,220),Q.fillStyle="#64748b",Q.font="bold 24px sans-serif",Q.fillText("HIGHWAY PASSENGER SHELTER",256,275);const ht=new le(Pt),D=new G({map:ht,roughness:.35,emissive:16777215,emissiveIntensity:.08}),ft=new M(new Kt(1.2,.75),D),ot=t>0?-2.12:2.12;ft.position.set(ot,1.85,0),ft.rotation.y=t>0?-Math.PI/2:Math.PI/2,e.add(ft);const _t=new gt;_t.position.set(0,0,0);const ct=new X(4.4,.12,.7),Ft=new M(ct,this.woodMat);Ft.position.set(0,.65,.5),this.applyShadow(Ft),_t.add(Ft);const vt=new X(4.4,.42,.1),A=new M(vt,this.woodMat);A.position.set(0,1.12,.82),this.applyShadow(A),_t.add(A),[-1.9,0,1.9].forEach(R=>{const q=new X(.12,.35,.58),nt=new M(q,this.concreteMat);nt.position.set(R,.45,.5),_t.add(nt);const C=new X(.08,.55,.08),F=new M(C,new G({color:3359061}));F.position.set(R,.95,.82),_t.add(F)}),e.add(_t);const E=new gt;E.scale.set(1.35,1.35,1.35),E.position.set(0,.72,.48);const Y=new G({color:16106390,roughness:.6}),Mt=new G({color:959977,roughness:.7}),pt=new G({color:1976635,roughness:.8}),mt=new G({color:1579035,roughness:.5}),Ot=new G({color:14362487,roughness:.6}),At=new G({color:16436245,roughness:.7}),Ut=new G({color:16777215,roughness:.8}),Vt=new G({color:986638,roughness:.4}),Lt=new gt;Lt.position.set(-.26,0,0);const xt=new M(new X(.36,.46,.24),Mt);xt.position.set(0,.25,0),xt.rotation.y=.35,xt.rotation.z=-.12,Lt.add(xt);const $t=new M(new Wt(.12,14,14),Y);$t.position.set(.04,.58,.02),$t.rotation.y=.45,$t.rotation.z=-.12,Lt.add($t);const Jt=new M(new Wt(.13,14,14),mt);Jt.scale.set(1.02,1.05,1.02),Jt.position.set(.04,.61,.01),Lt.add(Jt);const Xt=new M(new X(.34,.16,.44),pt);Xt.position.set(0,-.02,-.15),Lt.add(Xt),[-.1,.1].forEach(R=>{const q=new M(new ut(.05,.045,.38,8),pt);q.position.set(R,-.22,-.32),Lt.add(q)});const Bt=new M(new ut(.045,.04,.34,8),Mt);Bt.position.set(.18,.14,-.05),Bt.rotation.z=-Math.PI/4,Bt.rotation.x=-.18,Lt.add(Bt),E.add(Lt);const Rt=new gt;Rt.position.set(.26,0,0);const Zt=new M(new X(.32,.42,.22),Ot);Zt.position.set(0,.23,0),Zt.rotation.y=-.32,Zt.rotation.z=.14,Rt.add(Zt);const te=new M(new X(.34,.36,.24),At);te.position.set(0,.24,.02),Rt.add(te);const Gt=new M(new Wt(.115,14,14),Y);Gt.position.set(-.06,.54,.02),Gt.rotation.y=-.38,Gt.rotation.z=.22,Rt.add(Gt);const bt=new M(new Wt(.125,14,14),Vt);bt.scale.set(1.04,1.06,1.08),bt.position.set(-.06,.57,0),Rt.add(bt);const wt=new M(new ut(.04,.02,.36,8),Vt);wt.position.set(-.04,.42,.16),wt.rotation.x=-.35,Rt.add(wt);const S=new M(new X(.3,.15,.42),Ut);S.position.set(0,-.02,-.15),Rt.add(S),[-.08,.08].forEach(R=>{const q=new M(new ut(.042,.038,.38,8),Ut);q.position.set(R,-.22,-.32),Rt.add(q)});const B=new M(new ut(.04,.035,.32,8),Ot);B.position.set(-.16,.14,-.05),B.rotation.z=Math.PI/4,B.rotation.x=-.18,Rt.add(B);const tt=new gt;tt.position.set(.22,.22,-.2),tt.rotation.x=-.25,tt.rotation.z=-.15;const Tt=new ut(.016,.018,.38,8),lt=new G({color:1409085,roughness:.8}),Et=new M(Tt,lt);tt.add(Et);const kt=new Kt(.12,.06),oe=new G({color:1483594,roughness:.6,side:Ee});[-1,1].forEach(R=>{const q=new M(kt,oe);q.position.set(R*.06,-.04,0),q.rotation.z=R*.55,tt.add(q)});const ne=new _e(.07,.09,5);ne.rotateX(Math.PI);const Ht=new M(ne,oe);Ht.position.set(0,.18,0),tt.add(Ht);const ue=new G({color:14427686,roughness:.35,metalness:.1}),Ct=new Wt(.09,14,14);Ct.scale(1.15,1.35,1.15);const Qt=new M(Ct,ue);Qt.position.set(0,.26,0),tt.add(Qt);const zt=new ln(.08,.035,8,16);zt.rotateX(Math.PI/2);const pe=new M(zt,ue);pe.position.set(0,.23,0),tt.add(pe),Rt.add(tt),E.add(Rt);const fe=new M(new Wt(.065,12,12),Y);fe.scale.set(1.6,.95,1.2),fe.position.set(0,.1,-.06),E.add(fe);const Le=new gt;Le.position.set(0,1.38,.05);const rn=new he({color:16723285}),an=new M(new Wt(.075,10,10),rn);an.position.set(-.05,.04,0),Le.add(an);const yn=new M(new Wt(.075,10,10),rn);yn.position.set(.05,.04,0),Le.add(yn);const un=new _e(.11,.14,12);un.rotateZ(Math.PI);const Fn=new M(un,rn);return Fn.position.set(0,-.04,0),Le.add(Fn),E.add(Le),e.add(E),this.animatedAnimals.push({type:"couple",mesh:E,heart:Le,seed:Math.random()*10}),e}createCoconutTree(){const t=new gt;t.name="coconut_tree";const e=new Yn([new N(0,0,0),new N(.4,3.5,.2),new N(.9,7.5,.5),new N(1.1,10.5,.7)]),n=new Ln(e,12,.24,8,!1),i=new M(n,this.palmTrunkMat);this.applyShadow(i),t.add(i);const o=new N(1.1,10.5,.7),r=10;for(let a=0;a<r;a++){const c=a*Math.PI*2/r,h=new Kt(.8,3.4);h.translate(0,1.7,0);const d=new M(h,this.palmLeafMat);d.position.copy(o),d.rotation.y=c,d.rotation.x=.85,this.applyShadow(d),t.add(d)}for(let a=0;a<5;a++){const c=new Wt(.2,8,8),h=new M(c,this.palmLeafMat);h.position.set(o.x+(Math.random()-.5)*.4,o.y-.25,o.z+(Math.random()-.5)*.4),t.add(h)}return t}createBananaTree(){const t=new gt;t.name="banana_tree";const e=new ut(.18,.28,2.8,8),n=new M(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let o=0;o<i;o++){const r=o*Math.PI*2/i,a=new Kt(.75,2.4);a.translate(0,1.2,0);const c=new M(a,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=r,c.rotation.x=.95,this.applyShadow(c),t.add(c)}return t}createBambooGrove(){const t=new gt;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,o=new ut(.06,.08,i,6),r=new M(o,this.bambooTrunkMat);r.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),r.rotation.z=(Math.random()-.5)*.15,r.rotation.x=(Math.random()-.5)*.15,t.add(r);const a=new Wt(.8+Math.random()*.5,6,6),c=new M(a,this.palmLeafMat);c.position.set(r.position.x,i-.3,r.position.z),t.add(c)}return t}createElectricPole(){const t=new gt;t.name="electric_pole";const e=new ut(.14,.18,8.5,8),n=new M(e,this.concreteMat);n.position.y=4.25,this.applyShadow(n),t.add(n);const i=new X(2.2,.12,.12),o=new M(i,this.concreteMat);return o.position.y=7.8,t.add(o),[-.9,0,.9].forEach(r=>{const a=new ut(.04,.05,.2,6),c=new M(a,this.tinRoofMat);c.position.set(r,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new gt;n.name="village_pond";const i=new Kt(t,e);i.rotateX(-Math.PI/2);const o=new M(i,this.waterMat);o.position.y=.05,n.add(o),this.mudPlinthMat;const r=3;for(let a=0;a<r;a++){const c=new gt;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const h=new Wt(.24,8,8);h.scale(1,.7,1.4);const d=new M(h,this.duckMat);c.add(d);const f=new Wt(.14,8,8),l=new M(f,this.duckMat);l.position.set(0,.22,-.22),c.add(l);const u=new _e(.06,.16,6);u.rotateX(-Math.PI/2);const g=new M(u,this.beakMat);g.position.set(0,.2,-.34),c.add(g),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new gt;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const o=new ut(.04,.04,t,6);o.rotateX(Math.PI/2);const r=new M(o,this.bambooTrunkMat);r.position.y=i,e.add(r)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const o=-t*.5+i*1.4,r=new ut(.05,.06,1.25,6),a=new M(r,this.woodMat);a.position.set(0,.62,o),this.applyShadow(a),e.add(a)}return e}createHighwayCafe(t=1){const e=new gt;e.name="highway_cafe";const n=new X(6.6,.28,4.4),i=new G({color:9268835,roughness:.85}),o=new M(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const r=new X(6.8,.14,.25),a=new M(r,this.concreteMat);a.position.set(0,.07,-2.15),e.add(a);const c=new X(5.6,3.2,3),h=new G({color:6111287,roughness:.8}),d=new M(c,h);d.position.set(0,1.74,.6),this.applyShadow(d),e.add(d);const f=new X(5.9,.22,3.3),l=new G({color:4073251,roughness:.6}),u=new M(f,l);u.position.set(0,3.42,.6),e.add(u);const g=new G({color:1976635,metalness:.8,roughness:.15,transparent:!0,opacity:.65}),x=new M(new X(1.9,1.8,.1),g);x.position.set(-1.6,1.7,-.92),e.add(x);const m=new M(new X(1.9,1.8,.1),g);m.position.set(1.6,1.7,-.92),e.add(m);const p=new M(new X(1.2,2.3,.1),g);p.position.set(0,1.45,-.92),e.add(p);const v=new G({color:16096779,metalness:.9,roughness:.2}),_=new M(new ut(.025,.025,.7,8),v);if(_.position.set(.42,1.35,-.98),e.add(_),!this.isMobile){const dt=new bs(16772565,3.2,9);dt.position.set(0,2.2,.2),e.add(dt)}const y=new X(3.6,1,.8),P=new M(y,new G({color:2561548}));P.position.set(0,.8,.4),e.add(P);const L=document.createElement("canvas");L.width=256,L.height=256;const I=L.getContext("2d"),k=32;for(let dt=0;dt<256;dt+=k*2)I.fillStyle="#831843",I.fillRect(dt,0,k,256),I.fillStyle="#fef3c7",I.fillRect(dt+k,0,k,256);const b=new le(L);b.wrapS=Re,b.wrapT=Re,b.repeat.set(4,1);const w=new G({map:b,roughness:.7,side:Ee}),T=new gt;T.position.set(0,2.65,-.9);const O=new Kt(4.8,1.5);O.rotateX(Math.PI*.4);const st=new M(O,w);st.position.set(0,-.22,-.65),T.add(st);const U=new Kt(4.8,.26),V=new M(U,w);V.position.set(0,-.55,-1.25),T.add(V),[-2.2,2.2].forEach(dt=>{const at=new ut(.02,.02,1.4,6);at.rotateX(-Math.PI*.25);const yt=new M(at,new G({color:1976635}));yt.position.set(dt,-.35,-.6),T.add(yt)}),e.add(T);const W=document.createElement("canvas");W.width=1024,W.height=256;const z=W.getContext("2d");z.fillStyle="#1c120c",z.fillRect(0,0,1024,256),z.strokeStyle="#d97706",z.lineWidth=12,z.strokeRect(10,10,1004,236),z.strokeStyle="#fde047",z.lineWidth=4,z.strokeRect(22,22,980,212);const it=(dt,at)=>{z.fillStyle="#fde047",z.beginPath(),z.ellipse(dt,at+32,42,12,0,0,Math.PI*2),z.fill(),z.fillStyle="#ffffff",z.beginPath(),z.moveTo(dt-30,at-18),z.lineTo(dt+30,at-18),z.quadraticCurveTo(dt+28,at+24,dt+18,at+28),z.lineTo(dt-18,at+28),z.quadraticCurveTo(dt-28,at+24,dt-30,at-18),z.closePath(),z.fill(),z.strokeStyle="#ffffff",z.lineWidth=8,z.beginPath(),z.arc(dt+32,at+4,14,-Math.PI*.4,Math.PI*.6),z.stroke(),z.strokeStyle="#fef08a",z.lineWidth=4,z.beginPath(),z.moveTo(dt-12,at-24),z.quadraticCurveTo(dt-18,at-38,dt-10,at-48),z.moveTo(dt+8,at-24),z.quadraticCurveTo(dt+2,at-38,dt+12,at-50),z.stroke()};it(70,128),it(954,128),z.fillStyle="#fef08a",z.font="900 82px sans-serif",z.textAlign="center",z.textBaseline="middle",z.shadowColor="rgba(0,0,0,0.95)",z.shadowBlur=14,z.fillText("HIGHWAY CAFE",512,80),z.fillStyle="#ffffff",z.font="bold 54px sans-serif",z.shadowColor="rgba(0,0,0,0.85)",z.shadowBlur=8,z.fillText("ক্যাফে ও রেস্তোরাঁ",512,172),z.fillStyle="#f59e0b",z.font="bold 26px sans-serif",z.shadowBlur=0,z.fillText("FRESH COFFEE • TEA • BURGERS & SNACKS",512,226);const Z=new le(W),H=new G({map:Z,roughness:.35,emissive:4005904,emissiveIntensity:.18}),$=new gt;$.position.set(0,3.4,-.95);const J=new M(new X(4.7,.92,.08),new G({color:2561548,roughness:.5}));$.add(J);const K=new Kt(4.62,.84);K.rotateY(Math.PI);const j=new M(K,H);return j.position.set(0,0,-.045),$.add(j),[-1.6,1.6].forEach(dt=>{const at=new M(new ut(.02,.02,.35,6),v);at.position.set(dt,.52,-.15),at.rotation.x=Math.PI*.3,$.add(at);const yt=new M(new _e(.08,.14,8),v);yt.position.set(dt,.42,-.28),yt.rotation.x=Math.PI*.8,$.add(yt);const Pt=new M(new Wt(.04,6,6),new he({color:16772565}));Pt.position.set(dt,.38,-.28),$.add(Pt)}),e.add($),[-1.7,1.7].forEach(dt=>{const at=new gt;at.position.set(dt,.28,-1.35);const yt=new M(new ut(.035,.22,.75,12),new G({color:1976635,metalness:.8}));yt.position.y=.375,at.add(yt);const Pt=new M(new ut(.55,.55,.05,16),this.woodMat);Pt.position.y=.75,at.add(Pt),[-.18,.18].forEach((Q,ht)=>{const D=new M(new ut(.05,.045,.08,8),new G({color:16777215,roughness:.2}));D.position.set(Q,.81,ht===0?.1:-.1),at.add(D);const ft=new M(new ji(.04,8),new he({color:2561548}));ft.rotation.x=-Math.PI/2,ft.position.set(Q,.85,ht===0?.1:-.1),at.add(ft)}),[-.65,.65].forEach(Q=>{const ht=new gt;ht.position.set(Q,0,0),[-.14,.14].forEach(ot=>{[-.14,.14].forEach(_t=>{const ct=new M(new ut(.02,.02,.45,6),this.woodMat);ct.position.set(ot,.225,_t),ht.add(ct)})});const D=new M(new X(.36,.04,.36),this.woodMat);D.position.y=.45,ht.add(D);const ft=new M(new X(.36,.35,.04),this.woodMat);ft.position.set(0,.68,Q>0?.16:-.16),ht.add(ft),at.add(ht)}),e.add(at)}),[-2.9,2.9].forEach(dt=>{const at=new M(new X(.45,.42,1.6),this.woodMat);at.position.set(dt,.49,-1.2),e.add(at);for(let yt=-.55;yt<=.55;yt+=.5){const Pt=new M(new Wt(.24,8,8),this.palmLeafMat);Pt.position.set(dt,.8,-1.2+yt),e.add(Pt);const Q=new M(new Wt(.06,6,6),new he({color:yt<0?14427686:16096779}));Q.position.set(dt,.95,-1.2+yt),e.add(Q)}}),e}createHighwayBar(t=-1){const e=new gt;e.name="highway_bar";const n=new X(6.6,.28,4.4),i=new G({color:1976635,roughness:.8}),o=new M(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const r=new X(6.8,.14,.25),a=new M(r,new G({color:988970}));a.position.set(0,.07,-2.15),e.add(a);const c=new X(5.6,3.2,3),h=new G({color:988970,roughness:.7}),d=new M(c,h);d.position.set(0,1.74,.6),this.applyShadow(d),e.add(d),[-2.5,2.5].forEach(j=>{const rt=new M(new X(.55,3.2,.2),new G({color:4073251,roughness:.6}));rt.position.set(j,1.74,-.9),e.add(rt)});const f=new X(5.9,.22,3.3),l=new M(f,new G({color:132631,roughness:.4}));l.position.set(0,3.42,.6),e.add(l);const u=new X(3.6,.12,.7),g=new G({color:1120295,roughness:.15,metalness:.8}),x=new M(u,g);x.position.set(0,1.05,-.6),e.add(x);const m=new X(3.4,.98,.6),p=new G({color:1976635,roughness:.5}),v=new M(m,p);v.position.set(0,.5,-.6),e.add(v);const _=new X(3.4,.04,.04),y=new he({color:440020}),P=new M(_,y);P.position.set(0,.98,-.93),e.add(P);const L=new X(3.4,1.6,.2),I=new M(L,new G({color:1973807,roughness:.3}));I.position.set(0,1.8,.6),e.add(I);const k=[1483594,14251782,440020,10033947,16436245];if([1.25,1.7,2.15].forEach((j,rt)=>{const dt=new M(new X(3.2,.04,.3),new G({color:3718648,roughness:.1,transparent:!0,opacity:.8}));dt.position.set(0,j,.45),e.add(dt);for(let at=-1.4;at<=1.4;at+=.28){const yt=k[(Math.abs(Math.round(at*10))+rt)%k.length],Pt=new gt;Pt.position.set(at,j+.02,.45);const Q=new M(new ut(.045,.045,.22,8),new G({color:yt,roughness:.2,metalness:.3,transparent:!0,opacity:.9}));Q.position.y=.11,Pt.add(Q);const ht=new M(new ut(.016,.022,.1,8),new G({color:yt,roughness:.2}));ht.position.y=.25,Pt.add(ht);const D=new M(new ut(.018,.018,.02,6),new he({color:16638023}));D.position.y=.31,Pt.add(D),e.add(Pt)}}),[-1,0,1].forEach(j=>{const rt=new gt;rt.position.set(j,.28,-1.25);const dt=new M(new ut(.03,.24,.72,12),new G({color:9741240,metalness:.9,roughness:.15}));dt.position.y=.36,rt.add(dt);const at=new M(new ln(.16,.02,8,16),new G({color:9741240,metalness:.9,roughness:.15}));at.rotation.x=Math.PI/2,at.position.y=.24,rt.add(at);const yt=new M(new ut(.22,.22,.08,16),new G({color:10033947,roughness:.5}));yt.position.y=.74,rt.add(yt),e.add(rt)}),!this.isMobile){const j=new bs(440020,3.2,9);j.position.set(-1.2,2.3,.2),e.add(j);const rt=new bs(14239471,2.8,8);rt.position.set(1.2,2.3,.2),e.add(rt)}const b=document.createElement("canvas");b.width=1024,b.height=256;const w=b.getContext("2d");w.fillStyle="#030712",w.fillRect(0,0,1024,256),w.strokeStyle="#ec4899",w.lineWidth=10,w.shadowColor="#ec4899",w.shadowBlur=18,w.strokeRect(12,12,1e3,232),w.strokeStyle="#06b6d4",w.lineWidth=4,w.shadowColor="#06b6d4",w.shadowBlur=12,w.strokeRect(26,26,972,204);const T=(j,rt)=>{w.shadowColor="#facc15",w.shadowBlur=14,w.fillStyle="#facc15",w.beginPath(),w.roundRect(j,rt+18,48,56,[0,0,8,8]),w.fill(),w.fillStyle="#ffffff",w.beginPath(),w.arc(j+10,rt+14,14,0,Math.PI*2),w.arc(j+24,rt+8,16,0,Math.PI*2),w.arc(j+38,rt+14,14,0,Math.PI*2),w.fill(),w.strokeStyle="#facc15",w.lineWidth=6,w.beginPath(),w.arc(j+52,rt+46,16,-Math.PI*.45,Math.PI*.45),w.stroke()},O=(j,rt)=>{w.shadowColor="#06b6d4",w.shadowBlur=14,w.strokeStyle="#38bdf8",w.lineWidth=5,w.beginPath(),w.moveTo(j-30,rt+10),w.lineTo(j+30,rt+10),w.lineTo(j,rt+50),w.closePath(),w.stroke(),w.fillStyle="#f43f5e",w.beginPath(),w.moveTo(j-20,rt+22),w.lineTo(j+20,rt+22),w.lineTo(j,rt+50),w.closePath(),w.fill(),w.strokeStyle="#38bdf8",w.lineWidth=5,w.beginPath(),w.moveTo(j,rt+50),w.lineTo(j,rt+80),w.moveTo(j-22,rt+80),w.lineTo(j+22,rt+80),w.stroke(),w.fillStyle="#84cc16",w.beginPath(),w.arc(j-6,rt+16,7,0,Math.PI*2),w.fill()};T(52,85),O(940,80),w.fillStyle="#38bdf8",w.font="900 84px sans-serif",w.textAlign="center",w.textBaseline="middle",w.shadowColor="#06b6d4",w.shadowBlur=24,w.fillText("HIGHWAY BAR",512,78),w.fillStyle="#fde047",w.font="bold 62px sans-serif",w.shadowColor="#f59e0b",w.shadowBlur=20,w.fillText("মদের বার",512,168),w.fillStyle="#a3e635",w.font="bold 25px sans-serif",w.shadowColor="#84cc16",w.shadowBlur=8,w.fillText("IMPORTED LIQUOR • CHILLED BEER • WINE LOUNGE",512,224);const st=new le(b),U=new G({map:st,roughness:.25,emissive:440020,emissiveIntensity:.35}),V=new gt;V.position.set(0,3.4,-.95);const W=new M(new X(4.7,.95,.08),new G({color:132631,roughness:.4}));V.add(W);const z=new Kt(4.62,.88);z.rotateY(Math.PI);const it=new M(z,U);it.position.set(0,0,-.045),V.add(it);const Z=new Kt(.8,1.2),H=document.createElement("canvas");H.width=256,H.height=384;const $=H.getContext("2d");$.fillStyle="#030712",$.fillRect(0,0,256,384),$.strokeStyle="#ec4899",$.lineWidth=6,$.strokeRect(6,6,244,372),$.fillStyle="#facc15",$.font="900 46px sans-serif",$.textAlign="center",$.shadowColor="#f59e0b",$.shadowBlur=12,$.fillText("BAR",128,70),$.fillStyle="#38bdf8",$.font="bold 36px sans-serif",$.shadowColor="#06b6d4",$.fillText("OPEN",128,130),$.fillStyle="#ec4899",$.font="900 44px sans-serif",$.shadowColor="#ec4899",$.fillText("24/7",128,200),$.fillStyle="#fde047",$.font="bold 32px sans-serif",$.shadowColor="#f59e0b",$.fillText("মদ ও বিয়ার",128,280),$.fillStyle="#a3e635",$.font="bold 22px sans-serif",$.fillText("CHILLED BEER",128,340);const J=new le(H),K=new M(Z,new G({map:J,emissive:15485081,emissiveIntensity:.35}));return K.position.set(-2.82,2,-.6),K.rotation.y=-Math.PI/2,e.add(K),e}createSmokingGuysGroup(t=1){const e=new gt;e.name="smoking_guys_group",e.scale.set(1.25,1.25,1.25);const n=new G({color:16106390,roughness:.65}),i=new G({color:1579035,roughness:.45}),o=new G({color:16317180,roughness:.7}),r=new G({color:1976635,roughness:.7}),a=new gt;a.position.set(-.42,0,0);const c=new G({color:14427686,roughness:.7}),h=new G({color:1976635,roughness:.8}),d=new M(new X(.38,.58,.24),c);d.position.set(0,1.15,0),d.rotation.y=.25,a.add(d);const f=new M(new X(.3,.24,.16),c);f.position.set(0,1.38,.12),a.add(f);const l=new gt;l.position.set(0,1.54,0),l.rotation.x=-.12,l.rotation.y=.25;const u=new M(new Wt(.125,12,12),n);l.add(u);const g=new M(new Wt(.132,12,12),i);g.scale.set(1.02,1.08,1.04),g.position.set(0,.03,-.01),l.add(g),a.add(l),[-.1,.1].forEach(Q=>{const ht=new M(new ut(.06,.05,.84,8),h);ht.position.set(Q,.44,0),a.add(ht);const D=new M(new X(.12,.08,.22),o);D.position.set(Q,.04,-.04),a.add(D)});const x=new M(new ut(.045,.04,.52,8),c);x.position.set(-.24,1.1,0),x.rotation.z=.15,a.add(x);const m=new M(new ut(.048,.044,.32,8),c);m.position.set(.23,1.25,-.06),m.rotation.z=-Math.PI*.35,m.rotation.x=-Math.PI*.25,a.add(m);const p=new M(new ut(.042,.038,.32,8),c);p.position.set(.14,1.44,-.12),p.rotation.z=Math.PI*.32,p.rotation.x=-Math.PI*.45,a.add(p);const v=new M(new Wt(.045,8,8),n);v.position.set(.04,1.5,-.16),a.add(v);const _=new gt;_.position.set(.02,1.51,-.18),_.rotation.x=-Math.PI*.15,_.rotation.y=.28;const y=new M(new ut(.012,.012,.028,8),new G({color:14251782,roughness:.9}));y.rotation.x=Math.PI/2,_.add(y);const P=new M(new ut(.012,.012,.065,8),new G({color:16317180,roughness:.5}));P.rotation.x=Math.PI/2,P.position.z=-.046,_.add(P);const L=new M(new Wt(.014,8,8),new he({color:16726784}));L.position.z=-.082,_.add(L);const I=new gt;I.position.set(.02,1.51,-.26),I.userData={type:"cigarette",maxH:.5,spd:.007,drift:.004,light:null,seed:Math.random()*5};for(let Q=0;Q<5;Q++){const ht=new M(new Wt(.022+Q*.006,6,6),this.smokeMat);ht.position.y=Q*.1,I.add(ht)}this.smokeEmitters.push(I),a.add(I),a.add(_),e.add(a),this.animatedAnimals.push({type:"smoker",head:l,seed:Math.random()*10});const k=new gt;k.position.set(.48,0,-.15);const b=new G({color:1981066,roughness:.7}),w=new G({color:4153874,roughness:.8}),T=new M(new X(.36,.56,.22),b);T.position.set(0,1.14,0),T.rotation.y=-.7,k.add(T);const O=new M(new Wt(.12,12,12),n);O.position.set(0,1.54,0),O.rotation.y=-.7,k.add(O);const st=new M(new Wt(.128,12,12),i);st.scale.set(1.02,1.06,1.04),st.position.set(0,1.57,-.01),k.add(st),[-.09,.09].forEach(Q=>{const ht=new M(new ut(.058,.05,.84,8),w);ht.position.set(Q,.44,0),k.add(ht);const D=new M(new X(.12,.08,.22),r);D.position.set(Q,.04,-.04),k.add(D)});const U=new M(new ut(.042,.038,.48,8),b);U.position.set(.22,1.16,.06),U.rotation.z=-Math.PI*.22,U.rotation.x=-Math.PI*.25,k.add(U);const V=new M(new ut(.042,.038,.48,8),b);V.position.set(-.21,1.08,.04),V.rotation.z=Math.PI*.16,V.rotation.x=-Math.PI*.12,k.add(V);const W=new M(new Wt(.042,8,8),n);W.position.set(-.28,.85,.1),k.add(W);const z=new gt;z.position.set(-.32,.85,.12),z.rotation.x=-Math.PI*.35,z.rotation.y=-.4;const it=new M(new ut(.012,.012,.08,8),new G({color:16317180,roughness:.5}));it.rotation.x=Math.PI/2,z.add(it);const Z=new M(new Wt(.014,8,8),new he({color:16726784}));Z.position.z=-.045,z.add(Z);const H=new gt;H.position.set(-.32,.88,.1),H.userData={type:"cigarette",maxH:.45,spd:.006,drift:.003,light:null,seed:Math.random()*5};for(let Q=0;Q<4;Q++){const ht=new M(new Wt(.02+Q*.005,6,6),this.smokeMat);ht.position.y=Q*.1,H.add(ht)}this.smokeEmitters.push(H),k.add(H),k.add(z),e.add(k);const $=new gt;$.position.set(.02,0,.52);const J=new G({color:3359061,roughness:.7}),K=new G({color:13935475,roughness:.8}),j=new M(new X(.38,.58,.24),J);j.position.set(0,1.15,0),j.rotation.y=Math.PI*.9,$.add(j);const rt=new M(new Wt(.125,12,12),n);rt.position.set(0,1.54,0),rt.rotation.y=Math.PI*.9,$.add(rt);const dt=new M(new Wt(.132,12,12),i);dt.scale.set(1.02,1.08,1.04),dt.position.set(0,1.57,.01),$.add(dt),[-.1,.1].forEach(Q=>{const ht=new M(new ut(.058,.05,.84,8),K);ht.position.set(Q,.44,0),$.add(ht);const D=new M(new X(.12,.08,.22),new G({color:7877903}));D.position.set(Q,.04,.04),$.add(D)}),[-.22,.22].forEach(Q=>{const ht=new M(new ut(.045,.04,.48,8),J);ht.position.set(Q,1.12,-.06),ht.rotation.z=Q>0?-.25:.25,ht.rotation.x=Math.PI*.18,$.add(ht)}),e.add($);const at=new M(new X(.35,.2,.5),this.brickMat);at.position.set(-.1,.1,-.15),e.add(at);const yt=new M(new X(.1,.05,.16),new G({color:1981066,metalness:.5,roughness:.3}));yt.position.set(-.1,.225,-.15),e.add(yt);const Pt=new M(new X(.07,.035,.11),new G({color:16096779,roughness:.8}));return Pt.position.set(.02,.218,-.22),e.add(Pt),e}createDingiBoat(){const t=new gt;t.name="dingi_nouka";const e=new G({color:4073251,roughness:.8}),n=new X(1.1,.12,3.8),i=new M(n,e);i.position.y=.06,t.add(i),[-.55,.55].forEach(y=>{const P=new X(.08,.45,3.8),L=new M(P,e);L.position.set(y,.28,0),L.rotation.z=y>0?.25:-.25,t.add(L)}),[-1,1].forEach(y=>{const P=new _e(.55,1.2,5);P.rotateX(y>0?-Math.PI/3:Math.PI/3);const L=new M(P,e);L.position.set(0,.35,y*2.3),L.scale.set(.9,.5,1.1),t.add(L);const I=new M(new Wt(.08,8,8),new G({color:16096779,metalness:.8,roughness:.3}));I.position.set(0,.65,y*2.7),t.add(I)});const o=new ut(.68,.68,1.9,16,1,!0,0,Math.PI);o.rotateZ(Math.PI/2),o.rotateY(Math.PI/2);const r=new M(o,this.bambooWallMat);r.position.set(0,.48,-.2),t.add(r),[-.8,0,.8].forEach(y=>{const P=new ln(.69,.025,6,16,Math.PI);P.rotateZ(Math.PI/2),P.rotateY(Math.PI/2);const L=new M(P,this.woodMat);L.position.set(0,.48,-.2+y),t.add(L)});const a=new gt;a.position.set(0,.22,1.35);const c=new G({color:13935475,roughness:.7}),h=new G({color:165063,roughness:.8}),d=new G({color:1579035,roughness:.5}),f=new M(new X(.38,.28,.42),h);f.position.y=.14,a.add(f);const l=new M(new X(.32,.42,.2),c);l.position.set(0,.46,-.05),l.rotation.x=-.15,a.add(l);const u=new M(new Wt(.11,10,10),c);u.position.set(0,.74,-.1),a.add(u);const g=new M(new Wt(.115,10,10),d);g.position.set(0,.77,-.1),g.scale.set(1.02,1.05,1.02),a.add(g);const x=new _e(.24,.12,12),m=new M(x,this.bambooWallMat);m.position.set(0,.86,-.1),a.add(m);const p=new gt;p.position.set(.32,.4,0),p.rotation.z=-Math.PI*.32,p.rotation.x=Math.PI*.25;const v=new M(new ut(.025,.025,2.2,8),this.woodMat);v.position.y=-.5,p.add(v);const _=new M(new X(.18,.55,.02),this.woodMat);return _.position.y=-1.4,p.add(_),a.add(p),t.add(a),t}createWaterHyacinthCluster(){const t=new gt;t.name="kochuripana_cluster";const e=new G({color:1409085,roughness:.5}),n=new he({color:12616956});for(let i=0;i<7;i++){const o=i/7*Math.PI*2+Math.random()*.4,r=.25+Math.random()*.45,a=Math.cos(o)*r,c=Math.sin(o)*r,h=new Wt(.12,8,6);h.scale(1.3,.2,1);const d=new M(h,e);if(d.position.set(a,.02,c),t.add(d),i%2===0){const f=new M(new _e(.04,.12,6),n);f.position.set(a*.8,.08,c*.8),t.add(f)}}return t}createBangladeshiRiverBridge(t=13,e=60){const n=new gt;n.name="bangladeshi_river_bridge";const i=t*.5,o=.45,r=new X(t+.8,.45,e),a=new G({color:4674921,roughness:.8}),c=new M(r,a);c.position.set(0,-.28,0),c.receiveShadow=!0,n.add(c),[-e*.5+.3,e*.5-.3].forEach(b=>{const w=new X(t+.2,.012,.35),T=new M(w,new G({color:988970,roughness:.9}));T.position.set(0,.006,b),n.add(T)}),[-1,1].forEach(b=>{const w=(i+.3)*b,T=new X(.38,.85,e),O=new M(T,this.bridgeRedMat);O.position.set(w,-.45,0),this.applyShadow(O),n.add(O);const st=new X(.44,.12,e),U=new M(st,this.bridgeWhiteMat);U.position.set(w,-.85,0),n.add(U)}),[-18,-6,6,18].forEach(b=>{const w=new gt;w.position.set(0,0,b);const T=new X(t+1.2,.45,.95),O=new M(T,this.bridgeRedMat);O.position.y=-.55,w.add(O),[-5.2,-1.8,1.8,5.2].forEach(V=>{const W=new ut(.24,.28,3.2,8),z=new M(W,this.bridgeRedMat);z.position.set(V,-1.95,0),z.rotation.z=V>0?-.06:.06,w.add(z);const it=new M(new ut(.29,.29,.28,8),new G({color:993570,roughness:.9}));it.position.set(V,-1.35,0),w.add(it)});const st=new X(t+.6,.22,.3),U=new M(st,this.bridgeRedMat);U.position.y=-1.6,w.add(U),n.add(w)}),[-1,1].forEach(b=>{const w=(i+.16)*b,T=new X(.34,.28,e),O=new M(T,this.bridgeCurbMat);O.position.set(w,.14,0),O.receiveShadow=!0,n.add(O)});const d=16,f=[];for(let b=0;b<d;b++)f.push(-28.5+b/(d-1)*57);[-1,1].forEach(b=>{const w=(i+.16)*b;f.forEach(T=>{const O=Math.sin((T+28.5)/57*Math.PI)*o,st=new X(.22,.96,.22),U=new M(st,this.bridgeRedMat);U.position.set(w,.28+.48+O,T),this.applyShadow(U),n.add(U);const V=new _e(.18,.08,4);V.rotateY(Math.PI/4);const W=new M(V,this.bridgeRedMat);W.position.set(w,.28+.96+.04+O,T),n.add(W)});for(let T=0;T<f.length-1;T++){const O=f[T],st=f[T+1],U=(O+st)*.5,V=st-O,W=Math.sin((U+28.5)/57*Math.PI)*o,z=new M(new X(.14,.12,V),this.bridgeWhiteMat);z.position.set(w,.28+.44+W,U),n.add(z);const it=new M(new X(.2,.12,V),this.bridgeWhiteMat);if(it.position.set(w,.28+.92+W,U),n.add(it),b===-1){const Z=new ut(.065,.065,V,8);Z.rotateX(Math.PI/2);const H=new M(Z,this.pipelineMat);H.position.set(w+.09,.28+.32+W,U),n.add(H)}}});const l=new Kt(180,48);l.rotateX(-Math.PI/2);const u=new M(l,this.riverWaterMat);u.position.set(0,-1.35,0),u.receiveShadow=!0,n.add(u);const g=new Kt(180,48);g.rotateX(-Math.PI/2);const x=new M(g,new G({color:1841431,roughness:.95}));x.position.set(0,-3.2,0),n.add(x),[-1,1].forEach(b=>{const w=b*26.5;[-1,1].forEach(T=>{const O=new Kt(75,7);O.rotateX(b>0?-Math.PI*.38:Math.PI*.38);const st=new M(O,this.mudPlinthMat);st.position.set(T*48,-.7,w),n.add(st)})});const m=this.createDingiBoat();m.position.set(16.5,-1.35,3.5),m.rotation.y=.45,n.add(m),this.animatedAnimals.push({type:"dingi",mesh:m,startY:-1.35,seed:Math.random()*10}),[[14.5,-1.34,1.5],[19,-1.34,5.5],[-15,-1.34,-4],[-7.5,-1.34,6],[7.5,-1.34,-6]].forEach(([b,w,T])=>{const O=this.createWaterHyacinthCluster();O.position.set(b,w,T),n.add(O)});const v=new gt;v.position.set(i+.95,0,-28.8);const _=new M(new X(.35,1.2,.35),this.bridgeCurbMat);_.position.y=.6,v.add(_);const y=document.createElement("canvas");y.width=512,y.height=320;const P=y.getContext("2d");P.fillStyle="#15803d",P.fillRect(0,0,512,320),P.strokeStyle="#facc15",P.lineWidth=12,P.strokeRect(8,8,496,304),P.strokeStyle="#ffffff",P.lineWidth=4,P.strokeRect(22,22,468,276),P.fillStyle="#ffffff",P.font="bold 56px sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillText("মেঘনা নদী সেতু",256,85),P.fillStyle="#facc15",P.font="900 44px sans-serif",P.fillText("MEGHNA RIVER BRIDGE",256,160),P.fillStyle="#e2e8f0",P.font="bold 28px sans-serif",P.fillText("দৈর্ঘ্য: ৬০ মিটার | LENGTH: 60M",256,225),P.fillStyle="#86efac",P.font="bold 22px sans-serif",P.fillText("সড়ক ও জনপথ অধিদপ্তর (RHD)",256,275);const L=new le(y),I=new G({map:L,roughness:.4}),k=new M(new Kt(1.2,.75),I);return k.position.set(0,1.35,-.05),k.rotation.y=-Math.PI/4,v.add(k),n.add(v),[-1,1].forEach(b=>{const w=(i+.38)*b;for(let T=-29.2;T<=-23.5;T+=1.4){const O=new M(new ut(.1,.1,.85,12),this.bollardMat);O.position.set(w,.425,T),this.applyShadow(O),n.add(O);const st=new M(new Wt(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);st.position.set(w,.85,T),n.add(st)}for(let T=23.5;T<=29.2;T+=1.4){const O=new M(new ut(.1,.1,.85,12),this.bollardMat);O.position.set(w,.425,T),this.applyShadow(O),n.add(O);const st=new M(new Wt(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);st.position.set(w,.85,T),n.add(st)}}),n}createFigure({shirtMat:t,pantsMat:e,isSitting:n=!1,isSmoking:i=!1}){const o=new gt;o.name="human_figure",o.scale.set(1.15,1.15,1.15);const r=new X(.36,.52,.22),a=new M(r,t||this.shirtTealMat);a.position.y=n?.72:1.12,o.add(a);const c=new Wt(.12,8,8),h=new M(c,this.skinMat);h.position.y=n?1.08:1.48,o.add(h);const d=new Wt(.126,8,8);d.scale(1.02,1.05,1.02);const f=new M(d,this.hairMat);f.position.set(0,(n?1.08:1.48)+.02,-.01),o.add(f),[-.22,.22].forEach((u,g)=>{const x=new ut(.045,.04,.48,6),m=new M(x,t||this.shirtTealMat);if(n)m.position.set(u,.7,.1),m.rotation.x=.35;else if(i&&g===1){m.position.set(u*.8,1.25,-.08),m.rotation.z=-.6,m.rotation.x=-.5;const p=new ut(.01,.01,.12,4);p.rotateX(Math.PI/2);const v=new M(p,this.panjabiMat);v.position.set(0,.24,-.08),m.add(v);const _=new Wt(.015,4,4),y=new M(_,new he({color:16729088}));y.position.set(0,0,-.06),v.add(y)}else m.position.set(u,1.08,0),m.rotation.z=u>0?-.1:.1;o.add(m)});const l=e||this.stageTrussMat;return n?[-.1,.1].forEach(u=>{const g=new X(.11,.12,.42),x=new M(g,l);x.position.set(u,.48,.22),o.add(x);const m=new X(.1,.44,.1),p=new M(m,l);p.position.set(u,.22,.4),o.add(p)}):[-.09,.09].forEach(u=>{const g=new ut(.055,.048,.82,6),x=new M(g,l);x.position.set(u,.41,0),o.add(x)}),o}createUddanOpenStageWithTong(t=1){const e=new gt;e.name="uddan_open_stage_complex";const n=new gt;n.position.set(33*t,0,-4);const i=new _e(18,22,14),o=new M(i,this.hillDarkGreenMat);o.position.set(0,11,0),n.add(o);const r=new _e(15,17,12),a=new M(r,this.hillGreenMat);a.position.set(2*t,8.5,-18),n.add(a);const c=new _e(16,18,12),h=new M(c,this.hillGreenMat);h.position.set(2*t,9,15),n.add(h),[-14,-6,6,14].forEach(vt=>{const A=new _e(2,5,6),E=new M(A,this.treeCrownMat);E.position.set(-3*t,15,vt),n.add(E)}),e.add(n);const d=new gt;d.position.set(20*t,0,-4);const f=new Kt(20,42);f.rotateX(-Math.PI/2);const l=new M(f,this.pavingPlazaMat);l.position.set(0,.015,0),l.receiveShadow=!0,d.add(l),[-16,12].forEach(vt=>{const A=new gt;A.position.set(0,0,vt);const E=new ut(.35,.45,4.5,8),Y=new M(E,this.palmTrunkMat);Y.position.y=2.25,A.add(Y);const Mt=new Wt(3.8,8,8);Mt.scale(1.25,.85,1.25);const pt=new M(Mt,this.treeCrownMat);pt.position.y=5.4,A.add(pt),d.add(A)}),e.add(d);const u=new gt;u.position.set(21*t,0,-4),u.rotation.y=t>0?-Math.PI/2:Math.PI/2;const g=new X(14,.9,8),x=new M(g,this.stageBaseYellowMat);x.position.set(0,.45,0),this.applyShadow(x),u.add(x);const m=new X(14.2,.08,8.2),p=new M(m,this.stageFloorMat);p.position.set(0,.94,0),u.add(p);const v=new X(14.3,.08,.2),_=new M(v,this.stageBorderBlueMat);_.position.set(0,.94,4.1),u.add(_);const y=new M(new X(11,.3,1.4),this.stageBaseYellowMat);y.position.set(0,.3,4.7),u.add(y);const P=new M(new X(9,.3,1.2),this.stageBaseYellowMat);P.position.set(0,.15,5.6),u.add(P);const L=new X(8,.35,.5),I=new M(L,this.brickMat);I.position.set(0,.18,6.4),u.add(I);for(let vt=-3.2;vt<=3.2;vt+=1.6){const A=new Wt(.3,6,6);A.scale(1.3,.9,1.3);const E=new M(A,this.bananaLeafMat);E.position.set(vt,.42,6.4),u.add(E)}[-7.4,7.4].forEach(vt=>{const A=new gt;A.position.set(vt,0,2.2);const E=new X(1.6,.8,4.8),Y=new M(E,this.stageBaseYellowMat);Y.position.set(0,.4,0),Y.rotation.x=.18,A.add(Y);const Mt=new X(.1,.7,4.8),pt=new M(Mt,this.stageBorderBlueMat);pt.position.set(vt>0?.75:-.75,.75,0),pt.rotation.x=.18,A.add(pt),u.add(A)});const k=new gt;k.position.set(0,.9,-3.8);const b=new X(11.5,4.5,.3),w=new M(b,this.stageTerracottaMat);w.position.set(0,2.25,0),this.applyShadow(w),k.add(w);const T=new X(7.5,3.4,.38),O=new M(T,this.stageGoldEmblemMat);O.position.set(0,2,.05),k.add(O);const st=new ut(2.8,2.8,.4,16,1,!1,0,Math.PI);st.rotateZ(Math.PI/2);const U=new M(st,this.stageGoldEmblemMat);U.position.set(0,4,.05),k.add(U),[-5.2,5.2].forEach(vt=>{const A=new X(1.8,4.2,.35),E=new M(A,this.woodMat);E.position.set(vt,2.1,.02),k.add(E)}),u.add(k);const V=new gt;V.position.set(0,.9,0);const W=7.5,z=8.5,it=new ut(W,W,z,24,1,!0,Math.PI*.12,Math.PI*.76);it.rotateX(Math.PI/2);const Z=new M(it,this.stageBlueRoofMat);Z.position.set(0,0,0),this.applyShadow(Z),V.add(Z),[-z*.5,z*.5].forEach(vt=>{const A=[];for(let pt=0;pt<=20;pt++){const mt=Math.PI*.12+pt/20*(Math.PI*.76),Ot=Math.cos(mt)*W,At=Math.sin(mt)*W;A.push(new N(Ot,At,vt))}const E=new Yn(A),Y=new Ln(E,20,.14,8,!1),Mt=new M(Y,this.stageTrussMat);V.add(Mt)}),[-z*.5+.1,z*.5-.1].forEach(vt=>{[.25,.4,.5,.6,.75].forEach(A=>{const E=Math.PI*.12+A*(Math.PI*.76),Y=Math.cos(E)*W,Mt=Math.sin(E)*W,pt=[new N(0,0,vt),new N(Y,Mt,vt)],mt=new Yn(pt),Ot=new Ln(mt,2,.06,6,!1),At=new M(Ot,this.stageTrussMat);V.add(At)})});const H=new X(12,.75,.25),$=new M(H,this.stageTrussMat);$.position.set(0,5.8,z*.5+.1),V.add($);const J=new ut(.55,.55,.12,16);J.rotateX(Math.PI/2);const K=new M(J,this.stageGoldEmblemMat);K.position.set(0,6.4,z*.5+.15),V.add(K),u.add(V);const j=this.createFigure({shirtMat:this.panjabiMat,pantsMat:this.panjabiMat,isSitting:!1});j.position.set(-1.2,.94,-.6),u.add(j);const rt=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});rt.position.set(-.4,.94,-.6),rt.rotation.y=-Math.PI*.4,u.add(rt);const dt=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.stageTrussMat,isSitting:!0});dt.position.set(2.4,.3,4.9),u.add(dt);const at=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.lungiPlaidMat,isSitting:!0});at.position.set(3.4,.3,4.9),u.add(at),e.add(u);const yt=new gt;yt.position.set(11.3*t,0,8),yt.rotation.y=t>0?-Math.PI*.5-.25:Math.PI*.5+.25;const Pt=this.createTeaStall();yt.add(Pt);const Q=new X(2.4,.45,.08),ht=new G({color:14427686,roughness:.5}),D=new M(Q,ht);D.position.set(0,2.55,.85),yt.add(D);const ft=new gt;ft.position.set(1.4,1.9,.9);for(let vt=0;vt<6;vt++){const A=new ut(.025,.025,.22,6);A.rotateZ(.2+vt%2*.2);const E=new M(A,this.stageGoldEmblemMat);E.position.set(vt%3*.06-.06,-Math.floor(vt/3)*.15,0),ft.add(E)}yt.add(ft);const ot=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.lungiPlaidMat,isSitting:!1});ot.position.set(.2,0,-.4),ot.rotation.y=Math.PI,yt.add(ot);const _t=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!0});_t.position.set(-.6,.45,1.8),_t.rotation.y=0,yt.add(_t);const ct=this.createFigure({shirtMat:this.panjabiMat,pantsMat:this.panjabiMat,isSitting:!0});ct.position.set(.6,.45,1.8),ct.rotation.y=-.3,yt.add(ct);const Ft=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.stageTrussMat,isSitting:!1,isSmoking:!0});return Ft.position.set(1.65,0,1.5),Ft.rotation.y=-Math.PI*.4,yt.add(Ft),e.add(yt),e}createUIUCampus(t=1){const e=new gt;e.name="uiu_permanent_campus";const n=new gt;n.position.set(48*t,0,0);const i=new Kt(38,68);i.rotateX(-Math.PI/2);const o=new M(i,this.uiuLawnMat);o.position.set(0,.02,0),o.receiveShadow=!0,n.add(o);const r=new Kt(46,76);r.rotateX(-Math.PI/2);const a=new M(r,this.paddyFieldMaterial);a.position.set(0,.01,0),n.add(a),[-30,30].forEach(Q=>{const ht=new gt;ht.position.set(0,0,Q),[-3.2,3.2].forEach(ft=>{const ot=new M(new ut(.08,.08,3.2,8),this.goalPostMat);ot.position.set(ft,1.6,0),ht.add(ot)});const D=new M(new ut(.08,.08,6.56,8),this.goalPostMat);D.rotateZ(Math.PI/2),D.position.set(0,3.2,0),ht.add(D),[-3.2,3.2].forEach(ft=>{const ot=new M(new ut(.04,.04,2.2,6),this.goalPostMat);ot.position.set(ft,1.1,Q>0?1:-1),ot.rotation.x=Q>0?.72:-.72,ht.add(ot)}),n.add(ht)});const c=new M(new Wt(.28,8,8),new G({color:16777215,roughness:.3}));c.position.set(0,.28,0),n.add(c);const h=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});h.position.set(-2.2,0,1.8),h.rotation.y=-.6,n.add(h);const d=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.panjabiMat,isSitting:!1});d.position.set(2.4,0,-1.6),d.rotation.y=2.4,n.add(d);const f=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});f.position.set(8.5,0,12),f.rotation.y=-1.2,n.add(f);const l=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.panjabiMat,isSitting:!1});l.position.set(-9,0,-14),l.rotation.y=1.1,n.add(l),[-14,14].forEach(Q=>{const ht=new gt;ht.position.set(-18*t,0,Q);const D=new _e(3.2,2.2,4);D.rotateY(Math.PI/4);const ft=new M(D,this.uiuTentMat);ft.position.set(0,3.1,0),ht.add(ft),[-1.8,1.8].forEach(ct=>{[-1.8,1.8].forEach(Ft=>{const vt=new M(new ut(.04,.04,2.2,6),this.stageTrussMat);vt.position.set(ct,1.1,Ft),ht.add(vt)})});const ot=new M(new X(.6,.45,3.2),this.uiuConcreteMat);ot.position.set(0,.225,0),ht.add(ot);const _t=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.stageTrussMat,isSitting:!0});_t.position.set(0,0,0),ht.add(_t),n.add(ht)}),[-24,-8,8,24].forEach(Q=>{const ht=new M(new ut(.025,.025,2.4,6),this.goalPostMat);ht.position.set(-18*t,1.2,Q),n.add(ht);const D=new M(new X(.02,.45,.7),Q>0?this.shirtRedMat:this.stageBaseYellowMat);D.position.set(-18*t,2.1,Q+.35),n.add(D)}),[-16,-8,0,8,16].forEach(Q=>{const ht=this.createCoconutTree();ht.position.set(Q,0,36),n.add(ht)}),[-16,-8,0,8,16].forEach(Q=>{const ht=this.createCoconutTree();ht.position.set(Q,0,-36),n.add(ht)}),[-32,-22,22,32].forEach(Q=>{const ht=this.createCoconutTree();ht.position.set(-20*t,0,Q),n.add(ht)}),[-28,-14,14,28].forEach(Q=>{const ht=this.createCoconutTree();ht.position.set(20*t,0,Q),n.add(ht)});const u=new gt,g=-24*t,x=new M(new X(.35,.45,72),this.concreteMat);x.position.set(g,.225,0),u.add(x);for(let Q=-34;Q<=34;Q+=3.2){const ht=new M(new ut(.04,.04,1.6,6),this.stageTrussMat);ht.position.set(g,1,Q),u.add(ht)}const m=new M(new X(.08,.08,72),this.stageTrussMat);m.position.set(g,1.75,0),u.add(m);const p=new gt;p.position.set(g,0,0),[-3.2,3.2].forEach(Q=>{const ht=new M(new X(.8,5,.8),this.brickMat);ht.position.set(0,2.5,Q),p.add(ht)});const v=new M(new X(.45,1,7.2),this.stageTrussMat);v.position.set(0,4.6,0),p.add(v);const _=new M(new X(.12,.9,6.4),this.uiuGateSignMat);_.position.set(t>0?-.1:.1,4.6,0),p.add(_),u.add(p),n.add(u),e.add(n);const y=new gt;y.position.set(78*t,0,0),y.rotation.y=t>0?-Math.PI/2:Math.PI/2;const P=new gt;P.position.set(-19,19,0);const L=new X(18,38,16),I=[this.uiuFacadeMat,this.uiuFacadeMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuLogoMat,this.uiuFacadeMat],k=new M(L,I);this.applyShadow(k),P.add(k);const b=new M(new X(2.4,38,16.2),this.uiuBrickFlankMat);b.position.set(-9.2,0,0),P.add(b);const w=new M(new X(7,3.8,8),this.uiuConcreteMat);w.position.set(-2,20.9,0),P.add(w);const T=new M(new X(16.5,.8,14.5),this.uiuRoofGardenMat);T.position.set(0,19.4,0),P.add(T);const O=new ut(.06,.08,7.5,6),st=new M(O,this.goalPostMat);st.position.set(-2,25.5,1.5),P.add(st);const U=new M(new X(18.1,1.1,16.1),this.stageTrussMat);U.position.set(0,19.55,0),P.add(U),y.add(P);const V=new gt;V.position.set(0,16,0);const W=new X(16,32,13),z=[this.uiuConcreteMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuAtriumMat,this.uiuConcreteMat],it=new M(W,z);V.add(it),[7,14,21,28].forEach(Q=>{const ht=new M(new X(16.2,1.2,13.4),this.uiuConcreteMat);ht.position.set(0,Q-16,0),V.add(ht)});const Z=new M(new X(15.5,.6,12.5),this.uiuRoofGardenMat);Z.position.set(0,16.3,0),V.add(Z),y.add(V);const H=new gt;H.position.set(19,17,0);const $=new X(18,34,16),J=[this.uiuFacadeMat,this.uiuFacadeMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuFacadeMat,this.uiuFacadeMat],K=new M($,J);this.applyShadow(K),H.add(K);const j=new M(new X(2.4,34,16.2),this.uiuBrickFlankMat);j.position.set(9.2,0,0),H.add(j);const rt=new M(new X(16.5,.8,14.5),this.uiuRoofGardenMat);rt.position.set(0,17.4,0),H.add(rt);const dt=new M(new X(18.1,1.1,16.1),this.stageTrussMat);dt.position.set(0,17.55,0),H.add(dt),y.add(H);const at=new gt;for(let Q=-26;Q<=26;Q+=5.2){const ht=new M(new ut(.45,.5,5,8),this.uiuConcreteMat);ht.position.set(Q,2.5,8.2),at.add(ht)}const yt=new M(new X(32,5,2),this.uiuGlassMat);yt.position.set(0,2.5,7.5),at.add(yt);const Pt=new M(new X(36,.6,6),this.concreteMat);return Pt.position.set(0,.3,11),at.add(Pt),y.add(at),e.add(y),e}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}else if(e.type==="smoker"){if(e.head){const n=Math.sin(t*1.8+e.seed)*.04;e.head.rotation.x=-.12+Math.max(0,n)}}else e.type==="dingi"&&(e.mesh.position.y=e.startY+Math.sin(t*2.2+e.seed)*.035,e.mesh.rotation.z=Math.sin(t*1.8+e.seed)*.04,e.mesh.rotation.x=Math.cos(t*1.4+e.seed)*.025)}),this.smokeEmitters.forEach(e=>{const n=e.userData&&e.userData.type==="cigarette",i=e.userData&&e.userData.maxH||(n?.5:1.4),o=e.userData&&e.userData.spd||(n?.007:.015),r=e.userData&&e.userData.drift||(n?.004:.005);if(e.children.forEach((a,c)=>{a.position.y+=o,a.position.x+=Math.sin(t*3+c)*r,a.position.z+=Math.cos(t*2.6+c)*(r*.6),a.position.y>i&&(a.position.y=0,a.position.x=0,a.position.z=0)}),e.userData&&e.userData.light){const a=e.userData.seed||0;e.userData.light.intensity=.85+Math.sin(t*7.5+a)*.35}})}}class Fp{constructor(t){this.scene=t,this.segments=[],this.segmentLength=Yt.ROAD_SEGMENT_LENGTH,this.segmentCount=Yt.ROAD_SEGMENT_COUNT,this.roadWidth=Yt.ROAD_WIDTH,this.props=new Np,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let d=0;d<i.length;d+=4){const f=(Math.random()-.5)*12;i[d]=Math.min(255,Math.max(0,i[d]+f)),i[d+1]=Math.min(255,Math.max(0,i[d+1]+f)),i[d+2]=Math.min(255,Math.max(0,i[d+2]+f))}e.putImageData(n,0,0);const o=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",o.forEach(d=>{e.fillRect(d-50,0,36,t.height),e.fillRect(d+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const r=new le(t);r.wrapS=Re,r.wrapT=Re,r.repeat.set(1,1),r.anisotropy=8,this.roadMaterial=new G({map:r,roughness:.82,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});const a=document.createElement("canvas");a.width=512,a.height=512;const c=a.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let d=0;d<512;d+=24)c.beginPath(),c.moveTo(0,d),c.lineTo(512,d),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const h=new le(a);h.wrapS=Re,h.wrapT=Re,h.repeat.set(4,8),this.paddyFieldMaterial=new G({map:h,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new G({color:7032635,roughness:.95}),this.culvertRailingMaterial=new G({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new gt;n.position.z=t;const i=e%4===3,o=new Kt(this.roadWidth,this.segmentLength);o.rotateX(-Math.PI/2);const r=new M(o,this.roadMaterial);if(r.position.y=i?.003:0,r.receiveShadow=!0,n.add(r),i){[-1,1].forEach(d=>{[-1,1].forEach(f=>{const l=new Kt(3.5,6);l.rotateX(-Math.PI/2);const u=new M(l,this.dirtVergeMaterial);u.position.set((this.roadWidth*.5+3.5*.5)*d,-.01,f*27),n.add(u);const g=new Kt(60,6);g.rotateX(-Math.PI/2);const x=new M(g,this.paddyFieldMaterial);x.position.set((this.roadWidth*.5+3.5+30)*d,-.05,f*27),n.add(x)})});const h=this.props.createBangladeshiRiverBridge(this.roadWidth,this.segmentLength);n.add(h)}else{[-1,1].forEach(h=>{const d=new Kt(3.5,this.segmentLength);d.rotateX(-Math.PI/2);const f=new M(d,this.dirtVergeMaterial);f.position.set((this.roadWidth*.5+3.5*.5)*h,-.01,0),f.receiveShadow=!0,n.add(f)});const c=160;[-1,1].forEach(h=>{const d=new Kt(c,this.segmentLength);d.rotateX(-Math.PI/2);const f=new M(d,this.paddyFieldMaterial),l=(this.roadWidth*.5+3.5+c*.5)*h;f.position.set(l,-.05,0),f.receiveShadow=!0,n.add(f)})}return this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=e%4===3,o=!i&&e%5===1,r=n.createElectricPole();r.position.set(this.roadWidth*.5+2.4,0,0),t.add(r);const a=[new N(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new N(this.roadWidth*.5+2.4,7.1,0),new N(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],c=new Yn(a),h=new Ln(c,8,.02,4,!1),d=new he({color:2040865}),f=new M(h,d);if(t.add(f),!i){const l=e%2===0?-1:1,u=e%3===0?"white":e%3===1?"brown":"black",g=n.createCow(u),x=(this.roadWidth*.5+2.8+Math.random()*1.5)*l,m=6+Math.random()*14;if(g.position.set(x,0,m),g.rotation.y=l>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(g),e%2===1){const p=n.createCow("brown");p.scale.set(.75,.75,.75),p.position.set(x+(l>0?3:-3),0,m+3.5),p.rotation.y=g.rotation.y+.5,t.add(p)}}if(e%2===0&&!o){const u=n.createVillageHouse(e%4===0),g=(this.roadWidth*.5+11.5)*-1;u.position.set(g,0,-10),u.rotation.y=Math.PI/2,t.add(u);const x=n.createHaystack();x.position.set(g-5.5,0,4),t.add(x);const m=n.createBambooFence(24);m.position.set((this.roadWidth*.5+5.5)*-1,0,-5),t.add(m)}if(e%3===1){const u=n.createTeaStall();u.position.set((this.roadWidth*.5+5.8)*1,0,12),u.rotation.y=-Math.PI/2,t.add(u);const g=n.createCoconutTree();g.position.set((this.roadWidth*.5+9)*1,0,16),t.add(g)}if(e%3===2&&!o){const u=n.createPond(14,22);u.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(u);for(let g=0;g<3;g++){const x=n.createBananaTree();x.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+g*6),t.add(x)}}if(!i&&!o){const l=e%2===0?1:-1,u=n.createCoconutTree();u.position.set((this.roadWidth*.5+7.5+Math.random()*5)*l,0,-22),t.add(u);const g=n.createBambooGrove();g.position.set((this.roadWidth*.5+9+Math.random()*6)*-l,0,18),t.add(g);const x=n.createBananaTree();x.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*l,0,4),t.add(x)}else i&&[-1,1].forEach(l=>{const u=n.createCoconutTree();u.position.set(this.roadWidth*.5+9,0,l*26),t.add(u);const g=n.createBambooGrove();g.position.set(-this.roadWidth*.5-10,0,l*26),t.add(g)});if(!i){const l=o||e%2===0?1:-1,u=n.createJatriChawni(l),g=(this.roadWidth*.5+3.4)*l,x=e===0?-14:-18;u.position.set(g,0,x),u.rotation.y=l>0?Math.PI*.5+.32:-Math.PI*.5-.32,t.add(u)}if(!i&&e%3===0&&!o){const u=n.createUddanOpenStageWithTong(1);u.position.set(0,0,0),t.add(u)}if(e%4===1||e%4===2){const l=e%4===2||o?1:-1,u=n.createHighwayCafe(l),g=(this.roadWidth*.5+5.6)*l,x=e%4===2?14:12;u.position.set(g,0,x),u.rotation.y=l>0?Math.PI*.5+.28:-Math.PI*.5-.28,t.add(u);const m=l,p=n.createSmokingGuysGroup(m),v=(this.roadWidth*.5+2.5)*m,_=x-6;p.position.set(v,0,_),p.rotation.y=m>0?-.4:.4,t.add(p)}else if(e%4===0&&e%3!==0&&!i){const u=n.createHighwayBar(1),g=(this.roadWidth*.5+5.6)*1,x=12;u.position.set(g,0,x),u.rotation.y=Math.PI*.5+.28,t.add(u);const m=1,p=n.createSmokingGuysGroup(m),v=(this.roadWidth*.5+2.5)*m,_=x-6;p.position.set(v,0,_),p.rotation.y=-.4,t.add(p)}if(o){const u=n.createUIUCampus(-1);u.position.set(0,0,0),t.add(u)}}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const o=this.segments[i];if(o.group.position.z>n){let r=0;for(let a=0;a<this.segments.length;a++)this.segments[a].group.position.z<r&&(r=this.segments[a].group.position.z);o.group.position.z=r-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class Op{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new Wo(11722715,.0038),this.scene.background=new ce(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(h,d,f)=>{e.beginPath(),e.arc(h,d,f,0,Math.PI*2),e.arc(h+f*.7,d-f*.2,f*.8,0,Math.PI*2),e.arc(h-f*.7,d-f*.1,f*.7,0,Math.PI*2),e.arc(h+f*1.3,d+f*.1,f*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const o=e.createRadialGradient(256,380,15,256,380,120);o.addColorStop(0,"rgba(255, 255, 240, 1.0)"),o.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),o.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),o.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=o,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const r=new le(t),a=new Wt(480,32,16),c=new he({map:r,side:He});this.skyDome=new M(a,c),this.scene.add(this.skyDome)}initLighting(){const t=ti();this.hemiLight=new xp(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new Ep(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0;const e=t?1024:2048;this.dirLight.shadow.mapSize.width=e,this.dirLight.shadow.mapSize.height=e,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=t?120:160,this.dirLight.shadow.camera.left=-16,this.dirLight.shadow.camera.right=16,this.dirLight.shadow.camera.top=22,this.dirLight.shadow.camera.bottom=-22,this.dirLight.shadow.bias=-6e-4,this.dirLight.shadow.normalBias=.02,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new G({color:1793568,roughness:.9,flatShading:!0});[-1,1].forEach(e=>{const n=new gt,i=28;for(let o=0;o<i;o++){const r=12+Math.random()*18,a=6+Math.random()*8,c=new _e(a,r,6),h=new M(c,t),d=(55+Math.random()*30)*e,f=-o*18;h.position.set(d,r*.5-2,f),h.rotation.y=Math.random()*Math.PI,n.add(h)}this.scene.add(n),this.treeLines.push(n)})}initFlyingBirds(){this.birdsGroup=new gt;const t=new he({color:16777215,side:Ee}),e=8;for(let n=0;n<e;n++){const i=new gt,o=new Kt(.8,.35);o.translate(-.4,0,0);const r=new M(o,t);i.add(r);const a=new Kt(.8,.35);a.translate(.4,0,0);const c=new M(a,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:r,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class Gp{constructor(t="sedan"){this.type=t,this.group=new gt,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new Sn,this.collisionSize=new N(1.8,1.4,4.5),this._boxCenter=new N,this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new G({color:t,metalness:.5,roughness:.35}),darkTrim:new G({color:1974308,roughness:.7}),wood:new G({color:8736014,roughness:.9}),glass:new Jo({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new G({color:14671839,metalness:.9,roughness:.2}),headlight:new he({color:16777215}),taillight:new G({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new G({color:1973792,metalness:.1,roughness:.85}),rim:new G({color:12131356,metalness:.5,roughness:.4}),cowFawn:new G({color:9262372,roughness:.7}),cowWhite:new G({color:16119280,roughness:.6}),cowBlack:new G({color:2236962,roughness:.7}),horn:new G({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new X(2,.4,6.2),o=new M(i,n.darkTrim);o.position.set(0,.6,0),this.group.add(o);const r=new X(2.3,.4,.25),a=new M(r,n.darkTrim);a.position.set(0,.6,-3.15),this.group.add(a);const c=new X(1.8,.9,1.5),h=new M(c,n.body);h.position.set(0,1.25,-2.2),this.group.add(h);const d=new X(2.1,1.5,1.5),f=new M(d,n.body);f.position.set(0,1.8,-.7),this.group.add(f);const l=new Kt(1.85,.7),u=new M(l,n.glass);u.position.set(0,1.95,-1.46),this.group.add(u),[-.7,.7].forEach(y=>{const P=new M(new X(.24,.2,.05),n.headlight);P.position.set(y,1.15,-3.18),this.group.add(P)});const g=new X(2.25,.12,3.6),x=new M(g,n.wood);x.position.set(0,1.05,1.5),this.group.add(x),[-1.12,1.12].forEach(y=>{const P=new X(.08,1.3,3.6),L=new M(P,n.wood);L.position.set(y,1.7,1.5),this.group.add(L)});const m=new X(2.25,1.2,.08),p=new M(m,n.wood);p.position.set(0,1.65,3.3),this.group.add(p),[-.85,.85].forEach(y=>{const P=new M(new X(.28,.16,.05),n.taillight);P.position.set(y,.75,3.32),this.group.add(P)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(y=>{const P=new gt;P.position.set(y.x,2.2,y.z);const L=new X(.42,.45,.6),I=new M(L,y.mat);P.add(I);const k=new X(.3,.25,.25),b=new M(k,n.darkTrim);b.position.set(0,-.08,.38),P.add(b),[-.18,.18].forEach(w=>{const T=new _e(.05,.28,6),O=new M(T,n.horn);O.position.set(w,.26,.05),O.rotation.z=w>0?-.35:.35,P.add(O)}),this.group.add(P)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(y=>{const P=this.createSimpleWheel(n,.5,.3);P.position.set(y.x,.5,y.z),this.group.add(P),this.wheels.push(P)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new X(2,.4,6.2),n=new M(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new X(2.1,1.6,1.8),o=new M(i,t.body);o.position.set(0,1.7,-1.8),this.group.add(o);const r=new X(2.3,2.1,3.8),a=new M(r,t.wood);a.position.set(0,1.85,1.2),this.group.add(a),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new X(2.35,2.5,10.2),n=new M(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new Kt(2.15,1.2),o=new M(i,t.glass);o.position.set(0,1.95,-5.12),this.group.add(o),[-1.19,1.19].forEach(a=>{const c=new Kt(9,.9),h=new M(c,t.glass);h.position.set(a,1.9,.2),h.rotation.y=a>0?Math.PI/2:-Math.PI/2,this.group.add(h)}),[-.85,.85].forEach(a=>{const c=new M(new X(.3,.16,.05),t.headlight);c.position.set(a,.75,-5.12),this.group.add(c);const h=new M(new X(.24,.35,.05),t.taillight);h.position.set(a,1.3,5.12),this.group.add(h)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(a=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(a.x,.48,a.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new X(1.88,.4,4.65),o=new M(i,n.darkTrim);o.position.set(0,.42,0),this.group.add(o);const r=new X(1.84,.6,4.6),a=new M(r,n.body);a.position.set(0,.78,0),this.group.add(a);const c=new X(1.58,.65,2.9),h=new M(c,n.body);h.position.set(0,1.3,.2),this.group.add(h),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new X(1.76,.32,4.5),o=new M(i,n.darkTrim);o.position.set(0,.32,0),this.group.add(o);const r=new X(1.72,.44,4.4),a=new M(r,n.body);a.position.set(0,.58,0),this.group.add(a);const c=new X(1.44,.46,2.2),h=new M(c,n.body);h.position.set(0,.92,-.05),this.group.add(h),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,o,r){[-e,e].forEach(a=>{const c=new X(.3,.1,.05),h=new M(c,t.headlight);h.position.set(a,i,n),this.group.add(h)}),[-e,e].forEach(a=>{const c=new X(.32,.12,.05),h=new M(c,t.taillight);h.position.set(a,r,o),this.group.add(h)})}addStandardWheels(t,e,n,i,o){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(a=>{const c=this.createSimpleWheel(t,o,.24);c.position.set(a.x,a.y,a.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new gt,o=new ut(e,e,n,18);o.rotateZ(Math.PI/2);const r=new M(o,t.tire);i.add(r);const a=new ut(e*.7,e*.7,n+.02,14);a.rotateZ(Math.PI/2);const c=new M(a,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=Yt.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<Yt.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=Yt.LANES[n];if(!t.some(r=>{if(r===this||!r.active)return!1;const a=Math.abs(r.group.position.z-this.group.position.z),c=Math.abs(r.group.position.x-i);return a<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const o=this.targetX-this.group.position.x;Math.abs(o)>.04?this.group.position.x+=Math.sign(o)*Math.min(Math.abs(o),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(o=>{o.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}}class Bp{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"],n=ti()?14:25;for(let i=0;i<n;i++){const o=t[i%t.length],r=new Gp(o);r.despawn(),this.pool.push(r),this.scene.add(r.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,o){const r=t.group.position.z,a=t.group.position.x,c=Math.min(1,n/4500),h=Di.lerp(1.3,.8,c),d=Di.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=Di.lerp(h,d,Math.random()),this.trySpawnTraffic(r,c));for(let f=this.activeVehicles.length-1;f>=0;f--){const l=this.activeVehicles[f];if(l.update(e,i),l.group.position.z>r+Yt.TRAFFIC.DESPAWN_DISTANCE){l.despawn(),this.activeVehicles.splice(f,1);continue}if(!l.hasBeenOvertaken){const u=Math.abs(l.group.position.z-r),g=Math.abs(l.group.position.x-a);u<Yt.SCORING.NEAR_MISS_DIST_Z&&g<Yt.SCORING.NEAR_MISS_DIST_X&&g>.5&&e>l.speed+12?(l.hasBeenOvertaken=!0,o&&o(l)):r<l.group.position.z-4&&(l.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-Yt.TRAFFIC.SPAWN_DISTANCE,i=34,o=new Set;this.activeVehicles.forEach(g=>{Math.abs(g.group.position.z-n)<i&&o.add(g.lane)});const r=[0,1,2].filter(g=>!o.has(g));if(r.length===0||r.length===1&&o.size>=2)return;const a=r[Math.floor(Math.random()*r.length)];let c="cow_truck";const h=Math.random();a===0?c=h>.45?"cow_truck":"truck":a===1?c=h>.5?"bus":h>.25?"cow_truck":"suv":c=h>.45?"bus":"sedan";const d=this.getInactiveVehicle(c);if(!d)return;const f=Yt.TRAFFIC.SPEEDS[c]||[65,85],l=e*35,u=Di.lerp(f[0],f[1],Math.random())+l;if(d.spawn(a,n,u),this.activeVehicles.push(d),e>.5&&Math.random()<.35&&r.length>=2){const g=r.filter(x=>x!==a);if(g.length>0){const x=g[Math.floor(Math.random()*g.length)],m=Math.random()>.5?"cow_truck":"bus",p=this.getInactiveVehicle(m);if(p){const v=n-(28+Math.random()*20),_=Yt.TRAFFIC.SPEEDS[m]||[65,80],y=Di.lerp(_[0],_[1],Math.random())+l;p.spawn(x,v,y),this.activeVehicles.push(p)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const o=this.activeVehicles[i],r=e-o.group.position.z,a=Math.abs(o.group.position.x-n);if(r>4&&r<65&&a<2.4&&!o.isYielding){o.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class kp{constructor(t){this.scene=t,this.isMobile=ti(),this.particles=[],this.poolSize=this.isMobile?70:180,this._smokeThrottle=!1,this.smokeMat=new he({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new he({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new G({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new X(.14,.14,.14),n=new M(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new N,rotVel:new N,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){if(this.isMobile&&(this._smokeThrottle=!this._smokeThrottle,this._smokeThrottle))return;const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){const e=this.isMobile?18:35,n=this.isMobile?10:20,i=this.isMobile?14:25;for(let o=0;o<e;o++){const r=this.getFreeParticle();if(!r)break;r.active=!0,r.type="spark",r.mesh.material=this.sparkMat,r.mesh.visible=!0,r.mesh.scale.set(.12,.12,.12),r.mesh.position.copy(t);const a=Math.random()*Math.PI*2,c=6+Math.random()*14;r.vel.set(Math.cos(a)*c,3+Math.random()*10,Math.sin(a)*c),r.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),r.life=0,r.maxLife=.7+Math.random()*.5,r.scaleSpeed=-.5}for(let o=0;o<n;o++){const r=this.getFreeParticle();if(!r)break;r.active=!0,r.type="debris",r.mesh.material=this.debrisMat,r.mesh.visible=!0,r.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),r.mesh.position.copy(t),r.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),r.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),r.life=0,r.maxLife=1.2,r.scaleSpeed=0}for(let o=0;o<i;o++){const r=this.getFreeParticle();if(!r)break;r.active=!0,r.type="smoke",r.mesh.material=this.smokeMat,r.mesh.visible=!0,r.mesh.scale.set(.8,.8,.8),r.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),r.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),r.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),r.life=0,r.maxLife=1.4,r.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class zp{constructor(t){this.scene=t;const e=ti();this.linesCount=e?25:60,this.group=new gt;const n=new fc({color:10083839,transparent:!0,opacity:0});this.lineMat=n,this.lines=[];for(let i=0;i<this.linesCount;i++){const o=[new N(0,0,0),new N(0,0,6+Math.random()*8)],r=new Fe().setFromPoints(o),a=new H0(r,n);this.resetLinePos(a),this.group.add(a),this.lines.push(a)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const o=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=o*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const r=t.group.position.z,a=t.group.position.x;this.group.position.set(a,0,r);const c=e/60*i*50;this.lines.forEach(h=>{h.position.z+=c,h.position.z>5&&this.resetLinePos(h)})}}class Vp{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this._lastScore=-1,this._lastDistKm="",this._lastSpeed=-1,this._lastNitro=-1,this._lastBoosting=null,this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),o=document.getElementById("btn-gameover-restart");[i,o].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const r=document.getElementById("btn-pause-menu"),a=document.getElementById("btn-gameover-menu");[r,a].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(l=>{l.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),h=document.getElementById("btn-how-to-play"),d=document.getElementById("btn-modal-close");h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),d&&c&&d.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")});const f=document.querySelectorAll(".veh-btn");f.forEach(l=>{l.addEventListener("click",()=>{f.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(l.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(l=>{l.addEventListener("click",u=>{u.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),o=document.getElementById("btn-touch-nitro");document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(c=>{c.addEventListener("contextmenu",h=>h.preventDefault())});const r=(c,h,d=null)=>{if(!c)return;const f=(l,u)=>{document.body.classList.add("touch-active"),h(l),l&&d&&d()};c.addEventListener("pointerdown",l=>{if(l.preventDefault(),c.setPointerCapture)try{c.setPointerCapture(l.pointerId)}catch{}f(!0)}),c.addEventListener("pointerup",l=>{if(c.releasePointerCapture)try{c.releasePointerCapture(l.pointerId)}catch{}f(!1)}),c.addEventListener("pointercancel",l=>{if(c.releasePointerCapture)try{c.releasePointerCapture(l.pointerId)}catch{}f(!1)})},a=(c,h)=>{if(!c)return;let d=null,f=null;const l=g=>{if(g&&g.preventDefault(),document.body.classList.add("touch-active"),c.setPointerCapture&&g&&g.pointerId!==void 0)try{c.setPointerCapture(g.pointerId)}catch{}h(),clearTimeout(f),clearInterval(d),f=setTimeout(()=>{d=setInterval(()=>{h()},210)},260)},u=g=>{if(clearTimeout(f),clearInterval(d),c.releasePointerCapture&&g&&g.pointerId!==void 0)try{c.releasePointerCapture(g.pointerId)}catch{}};c.addEventListener("pointerdown",l),c.addEventListener("pointerup",u),c.addEventListener("pointercancel",u),c.addEventListener("pointerleave",u)};a(t,()=>{this.onSteerLeft&&this.onSteerLeft()}),a(e,()=>{this.onSteerRight&&this.onSteerRight()}),r(n,c=>{this.onBrake&&this.onBrake(c)},()=>this.soundManager.playAirBrake()),r(i,c=>{this.onAccelerate&&this.onAccelerate(c)}),r(o,c=>{this.onNitro&&this.onNitro(c)}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",c=>{c.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===ge.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case ge.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case ge.PLAYING:this.hudLayer.classList.remove("hidden");break;case ge.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case ge.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){const e=Math.floor(t.score);this._lastScore!==e&&this.scoreVal&&(this._lastScore=e,this.scoreVal.textContent=e.toLocaleString());const n=`${(t.distanceMeters/1e3).toFixed(2)} km`;this._lastDistKm!==n&&this.distVal&&(this._lastDistKm=n,this.distVal.textContent=n);const i=Math.round(t.speedKmh);this._lastSpeed!==i&&this.speedVal&&(this._lastSpeed=i,this.speedVal.textContent=i);const o=Math.round(t.nitro);this._lastNitro!==o&&this.nitroBar&&(this._lastNitro=o,this.nitroBar.style.width=`${o}%`),this._lastBoosting!==t.isBoosting&&this.nitroBar&&(this._lastBoosting=t.isBoosting,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting"))}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class Hp{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new Ap,this.inputManager=new Rp,this.soundManager=new Lp,this.uiManager=new Vp(this.soundManager),this.scene=new V0,this.camera=new We(Yt.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.isMobile=ti(),this.renderer=new uc({antialias:!this.isMobile,powerPreference:"high-performance",precision:this.isMobile?"mediump":"highp",stencil:!1,depth:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight);const t=this.isMobile?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.isMobile?Go:Ia,this.renderer.toneMapping=Ua,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new Op(this.scene),this.roadManager=new Fp(this.scene),this.vehicles={truck:new Ip,rickshaw:new Dp,cng:new Up},Object.values(this.vehicles).forEach(e=>{this.scene.add(e.group),e.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new Bp(this.scene),this.particleSystem=new kp(this.scene),this.speedLines=new zp(this.scene),this.cameraController=new Pp(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new Tp,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this._leftRearPos=new N,this._rightRearPos=new N,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(ge.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){const t=()=>{const n=window.innerWidth,i=window.innerHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i),this.isMobile=ti();const o=this.isMobile?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(o)};window.addEventListener("resize",t),window.addEventListener("orientationchange",()=>{setTimeout(t,120)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=n=>this.setVehicle(n);const e=()=>{this.gameState.state===ge.PLAYING?(this.gameState.state=ge.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(ge.PAUSED,this.gameState)):this.gameState.state===ge.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=e,this.inputManager.onPauseToggle=e,this.inputManager.onRestart=()=>{(this.gameState.state===ge.GAMEOVER||this.gameState.state===ge.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=()=>this.inputManager.triggerSteerLeft(),this.uiManager.onSteerRight=()=>this.inputManager.triggerSteerRight(),this.uiManager.onAccelerate=n=>this.inputManager.setAccelerate(n),this.uiManager.onBrake=n=>this.inputManager.setBrake(n),this.uiManager.onNitro=n=>this.inputManager.setNitro(n)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(ge.PLAYING,this.gameState)}resumeGame(){this.gameState.state===ge.PAUSED&&(this.gameState.state=ge.PLAYING,this.uiManager.setScreen(ge.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=ge.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(ge.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(ge.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===ge.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===ge.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const o=this.inputManager.keys.brake;o&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=o,this.gameState.update(e,this.inputManager);const r=this.gameState.speedKmh*1e3/3600;this.playerVehicle.group.position.z-=r*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,o,this.gameState.isBoosting,e),o&&this.gameState.speedKmh>50&&(this._leftRearPos.copy(this.playerVehicle.group.position),this._leftRearPos.x-=.85,this._leftRearPos.z+=1.6,this._rightRearPos.copy(this.playerVehicle.group.position),this._rightRearPos.x+=.85,this._rightRearPos.z+=1.6,this.particleSystem.emitTireSmoke(this._leftRearPos),this.particleSystem.emitTireSmoke(this._rightRearPos)),this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const h=this.gameState.addNearMiss();this.soundManager.playNearMiss(h.combo),this.uiManager.showNearMiss(h.bonus,h.combo)});const a=this.trafficManager.checkCollision(this.playerVehicle);a&&this.onCrash(a),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,o,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===ge.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Hp});
//# sourceMappingURL=index-hLVMl1_L.js.map
