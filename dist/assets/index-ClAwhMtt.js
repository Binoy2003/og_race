(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oo="160",bc=0,tr=1,Ec=2,Go=1,Ia=2,wn=3,Fn=0,He=1,Te=2,Dn=0,yi=1,er=2,nr=3,ir=4,Tc=5,Yn=100,Ac=101,Pc=102,sr=103,or=104,Rc=200,Cc=201,Lc=202,Ic=203,Ao=204,Po=205,Dc=206,Uc=207,Nc=208,Fc=209,Oc=210,Gc=211,Bc=212,kc=213,zc=214,Vc=0,Hc=1,Wc=2,Ts=3,Xc=4,qc=5,Yc=6,Zc=7,Da=0,Kc=1,Jc=2,Un=0,jc=1,$c=2,Qc=3,Ua=4,tl=5,el=6,Na=300,Ei=301,Ti=302,Ro=303,Co=304,Us=306,Me=1e3,sn=1001,Lo=1002,Ve=1003,rr=1004,Xs=1005,je=1006,nl=1007,qi=1008,Nn=1009,il=1010,sl=1011,Bo=1012,Fa=1013,Ln=1014,In=1015,Yi=1016,Oa=1017,Ga=1018,Kn=1020,ol=1021,on=1023,rl=1024,al=1025,Jn=1026,Ai=1027,cl=1028,Ba=1029,ll=1030,ka=1031,za=1033,qs=33776,Ys=33777,Zs=33778,Ks=33779,ar=35840,cr=35841,lr=35842,hr=35843,Va=36196,dr=37492,ur=37496,fr=37808,pr=37809,mr=37810,gr=37811,_r=37812,Mr=37813,wr=37814,vr=37815,xr=37816,Sr=37817,yr=37818,br=37819,Er=37820,Tr=37821,Js=36492,Ar=36494,Pr=36495,hl=36283,Rr=36284,Cr=36285,Lr=36286,Ha=3e3,jn=3001,dl=3200,ul=3201,Wa=0,fl=1,$e="",Ne="srgb",Sn="srgb-linear",ko="display-p3",Ns="display-p3-linear",As="linear",we="srgb",Ps="rec709",Rs="p3",ii=7680,Ir=519,pl=512,ml=513,gl=514,Xa=515,_l=516,Ml=517,wl=518,vl=519,Dr=35044,Ur="300 es",Io=1035,xn=2e3,Cs=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nr=1234567;const ki=Math.PI/180,Pi=180/Math.PI;function ni(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[s&255]+Ge[s>>8&255]+Ge[s>>16&255]+Ge[s>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function zo(s,t){return(s%t+t)%t}function xl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Sl(s,t,e){return s!==t?(e-s)/(t-s):0}function zi(s,t,e){return(1-e)*s+e*t}function yl(s,t,e,n){return zi(s,t,1-Math.exp(-e*n))}function bl(s,t=1){return t-Math.abs(zo(s,t*2)-t)}function El(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Tl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Al(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Pl(s,t){return s+Math.random()*(t-s)}function Rl(s){return s*(.5-Math.random())}function Cl(s){s!==void 0&&(Nr=s);let t=Nr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ll(s){return s*ki}function Il(s){return s*Pi}function Do(s){return(s&s-1)===0&&s!==0}function Dl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Ls(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ul(s,t,e,n,i){const o=Math.cos,a=Math.sin,r=o(e/2),c=a(e/2),h=o((t+n)/2),d=a((t+n)/2),f=o((t-n)/2),l=a((t-n)/2),u=o((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(r*d,c*f,c*l,r*h);break;case"YZY":s.set(c*l,r*d,c*f,r*h);break;case"ZXZ":s.set(c*f,c*l,r*d,r*h);break;case"XZX":s.set(r*d,c*_,c*u,r*h);break;case"YXY":s.set(c*u,r*d,c*_,r*h);break;case"ZYZ":s.set(c*_,c*u,r*d,r*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function wi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ke(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ui={DEG2RAD:ki,RAD2DEG:Pi,generateUUID:ni,clamp:Ue,euclideanModulo:zo,mapLinear:xl,inverseLerp:Sl,lerp:zi,damp:yl,pingpong:bl,smoothstep:El,smootherstep:Tl,randInt:Al,randFloat:Pl,randFloatSpread:Rl,seededRandom:Cl,degToRad:Ll,radToDeg:Il,isPowerOfTwo:Do,ceilPowerOfTwo:Dl,floorPowerOfTwo:Ls,setQuaternionFromProperEuler:Ul,normalize:ke,denormalize:wi};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*i+t.x,this.y=o*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ce{constructor(t,e,n,i,o,a,r,c,h){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,h)}set(t,e,n,i,o,a,r,c,h){const d=this.elements;return d[0]=t,d[1]=i,d[2]=r,d[3]=e,d[4]=o,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[3],c=n[6],h=n[1],d=n[4],f=n[7],l=n[2],u=n[5],_=n[8],v=i[0],m=i[3],p=i[6],w=i[1],M=i[4],y=i[7],P=i[2],L=i[5],I=i[8];return o[0]=a*v+r*w+c*P,o[3]=a*m+r*M+c*L,o[6]=a*p+r*y+c*I,o[1]=h*v+d*w+f*P,o[4]=h*m+d*M+f*L,o[7]=h*p+d*y+f*I,o[2]=l*v+u*w+_*P,o[5]=l*m+u*M+_*L,o[8]=l*p+u*y+_*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*r*h-n*o*d+n*r*c+i*o*h-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8],f=d*a-r*h,l=r*c-d*o,u=h*o-a*c,_=e*f+n*l+i*u;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return t[0]=f*v,t[1]=(i*h-d*n)*v,t[2]=(r*n-i*a)*v,t[3]=l*v,t[4]=(d*e-i*c)*v,t[5]=(i*o-r*e)*v,t[6]=u*v,t[7]=(n*c-h*e)*v,t[8]=(a*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,a,r){const c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*a+h*r)+a+t,-i*h,i*c,-i*(-h*a+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(js.makeScale(t,e)),this}rotate(t){return this.premultiply(js.makeRotation(-t)),this}translate(t,e){return this.premultiply(js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const js=new ce;function qa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Is(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nl(){const s=Is("canvas");return s.style.display="block",s}const Fr={};function Vi(s){s in Fr||(Fr[s]=!0,console.warn(s))}const Or=new ce().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gr=new ce().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qi={[Sn]:{transfer:As,primaries:Ps,toReference:s=>s,fromReference:s=>s},[Ne]:{transfer:we,primaries:Ps,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ns]:{transfer:As,primaries:Rs,toReference:s=>s.applyMatrix3(Gr),fromReference:s=>s.applyMatrix3(Or)},[ko]:{transfer:we,primaries:Rs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Gr),fromReference:s=>s.applyMatrix3(Or).convertLinearToSRGB()}},Fl=new Set([Sn,Ns]),ge={enabled:!0,_workingColorSpace:Sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Fl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Qi[t].toReference,i=Qi[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Qi[s].primaries},getTransfer:function(s){return s===$e?As:Qi[s].transfer}};function bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let si;class Ya{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{si===void 0&&(si=Is("canvas")),si.width=t.width,si.height=t.height;const n=si.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=si}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=bi(o[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ol=0;class Za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=ni(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push(Qs(i[a].image)):o.push(Qs(i[a]))}else o=Qs(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Qs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ya.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gl=0;class Xe extends Ci{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=sn,i=sn,o=je,a=qi,r=on,c=Nn,h=Xe.DEFAULT_ANISOTROPY,d=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=ni(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===jn?Ne:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Na)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Me:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Me:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ne?jn:Ha}set encoding(t){Vi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===jn?Ne:$e}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Na;Xe.DEFAULT_ANISOTROPY=1;class ve{constructor(t=0,e=0,n=0,i=1){ve.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,h=c[0],d=c[4],f=c[8],l=c[1],u=c[5],_=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(d-l)<.01&&Math.abs(f-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(d+l)<.1&&Math.abs(f+v)<.1&&Math.abs(_+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,y=(u+1)/2,P=(p+1)/2,L=(d+l)/4,I=(f+v)/4,B=(_+m)/4;return M>y&&M>P?M<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(M),i=L/n,o=I/n):y>P?y<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(y),n=L/i,o=B/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=I/o,i=B/o),this.set(n,i,o,e),this}let w=Math.sqrt((m-_)*(m-_)+(f-v)*(f-v)+(l-d)*(l-d));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(f-v)/w,this.z=(l-d)/w,this.w=Math.acos((h+u+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bl extends Ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Vi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===jn?Ne:$e),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ka extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Ve,this.minFilter=Ve,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ji{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,a,r){let c=n[i+0],h=n[i+1],d=n[i+2],f=n[i+3];const l=o[a+0],u=o[a+1],_=o[a+2],v=o[a+3];if(r===0){t[e+0]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f;return}if(r===1){t[e+0]=l,t[e+1]=u,t[e+2]=_,t[e+3]=v;return}if(f!==v||c!==l||h!==u||d!==_){let m=1-r;const p=c*l+h*u+d*_+f*v,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const P=Math.sqrt(M),L=Math.atan2(P,p*w);m=Math.sin(m*L)/P,r=Math.sin(r*L)/P}const y=r*w;if(c=c*m+l*y,h=h*m+u*y,d=d*m+_*y,f=f*m+v*y,m===1-r){const P=1/Math.sqrt(c*c+h*h+d*d+f*f);c*=P,h*=P,d*=P,f*=P}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,a){const r=n[i],c=n[i+1],h=n[i+2],d=n[i+3],f=o[a],l=o[a+1],u=o[a+2],_=o[a+3];return t[e]=r*_+d*f+c*u-h*l,t[e+1]=c*_+d*l+h*f-r*u,t[e+2]=h*_+d*u+r*l-c*f,t[e+3]=d*_-r*f-c*l-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,a=t._order,r=Math.cos,c=Math.sin,h=r(n/2),d=r(i/2),f=r(o/2),l=c(n/2),u=c(i/2),_=c(o/2);switch(a){case"XYZ":this._x=l*d*f+h*u*_,this._y=h*u*f-l*d*_,this._z=h*d*_+l*u*f,this._w=h*d*f-l*u*_;break;case"YXZ":this._x=l*d*f+h*u*_,this._y=h*u*f-l*d*_,this._z=h*d*_-l*u*f,this._w=h*d*f+l*u*_;break;case"ZXY":this._x=l*d*f-h*u*_,this._y=h*u*f+l*d*_,this._z=h*d*_+l*u*f,this._w=h*d*f-l*u*_;break;case"ZYX":this._x=l*d*f-h*u*_,this._y=h*u*f+l*d*_,this._z=h*d*_-l*u*f,this._w=h*d*f+l*u*_;break;case"YZX":this._x=l*d*f+h*u*_,this._y=h*u*f+l*d*_,this._z=h*d*_-l*u*f,this._w=h*d*f-l*u*_;break;case"XZY":this._x=l*d*f-h*u*_,this._y=h*u*f-l*d*_,this._z=h*d*_+l*u*f,this._w=h*d*f+l*u*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],a=e[1],r=e[5],c=e[9],h=e[2],d=e[6],f=e[10],l=n+r+f;if(l>0){const u=.5/Math.sqrt(l+1);this._w=.25/u,this._x=(d-c)*u,this._y=(o-h)*u,this._z=(a-i)*u}else if(n>r&&n>f){const u=2*Math.sqrt(1+n-r-f);this._w=(d-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(o+h)/u}else if(r>f){const u=2*Math.sqrt(1+r-n-f);this._w=(o-h)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+f-n-r);this._w=(a-i)/u,this._x=(o+h)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,a=t._w,r=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+a*r+i*h-o*c,this._y=i*d+a*c+o*r-n*h,this._z=o*d+a*h+n*c-i*r,this._w=a*d-n*r-i*c-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const c=1-r*r;if(c<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,r),f=Math.sin((1-e)*d)/h,l=Math.sin(e*d)/h;return this._w=a*f+this._w*l,this._x=n*f+this._x*l,this._y=i*f+this._y*l,this._z=o*f+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(o),n*Math.cos(o),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Br.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Br.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,a=t.y,r=t.z,c=t.w,h=2*(a*i-r*n),d=2*(r*e-o*i),f=2*(o*n-a*e);return this.x=e+c*h+a*f-r*d,this.y=n+c*d+r*h-o*f,this.z=i+c*f+o*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,a=e.x,r=e.y,c=e.z;return this.x=i*c-o*r,this.y=o*a-n*c,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new N,Br=new ji;class yn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(o,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}const i=t.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ni),es.subVectors(this.max,Ni),oi.subVectors(t.a,Ni),ri.subVectors(t.b,Ni),ai.subVectors(t.c,Ni),En.subVectors(ri,oi),Tn.subVectors(ai,ri),kn.subVectors(oi,ai);let e=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-kn.z,kn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,kn.z,0,-kn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-kn.y,kn.x,0];return!eo(e,oi,ri,ai,es)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,oi,ri,ai,es))?!1:(ns.crossVectors(En,Tn),e=[ns.x,ns.y,ns.z],eo(e,oi,ri,ai,es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const pn=[new N,new N,new N,new N,new N,new N,new N,new N],Qe=new N,ts=new yn,oi=new N,ri=new N,ai=new N,En=new N,Tn=new N,kn=new N,Ni=new N,es=new N,ns=new N,zn=new N;function eo(s,t,e,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){zn.fromArray(s,o);const r=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),c=t.dot(zn),h=e.dot(zn),d=n.dot(zn);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>r)return!1}return!0}const zl=new yn,Fi=new N,no=new N;class Fs{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zl.setFromPoints(t).getCenter(n);let i=0;for(let o=0,a=t.length;o<a;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fi.subVectors(t,this.center);const e=Fi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Fi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fi.copy(t.center).add(no)),this.expandByPoint(Fi.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const mn=new N,io=new N,is=new N,An=new N,so=new N,ss=new N,oo=new N;class Ja{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(mn.copy(this.origin).addScaledVector(this.direction,e),mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){io.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),An.copy(this.origin).sub(io);const o=t.distanceTo(e)*.5,a=-this.direction.dot(is),r=An.dot(this.direction),c=-An.dot(is),h=An.lengthSq(),d=Math.abs(1-a*a);let f,l,u,_;if(d>0)if(f=a*c-r,l=a*r-c,_=o*d,f>=0)if(l>=-_)if(l<=_){const v=1/d;f*=v,l*=v,u=f*(f+a*l+2*r)+l*(a*f+l+2*c)+h}else l=o,f=Math.max(0,-(a*l+r)),u=-f*f+l*(l+2*c)+h;else l=-o,f=Math.max(0,-(a*l+r)),u=-f*f+l*(l+2*c)+h;else l<=-_?(f=Math.max(0,-(-a*o+r)),l=f>0?-o:Math.min(Math.max(-o,-c),o),u=-f*f+l*(l+2*c)+h):l<=_?(f=0,l=Math.min(Math.max(-o,-c),o),u=l*(l+2*c)+h):(f=Math.max(0,-(a*o+r)),l=f>0?o:Math.min(Math.max(-o,-c),o),u=-f*f+l*(l+2*c)+h);else l=a>0?-o:o,f=Math.max(0,-(a*l+r)),u=-f*f+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(io).addScaledVector(is,l),u}intersectSphere(t,e){mn.subVectors(t.center,this.origin);const n=mn.dot(this.direction),i=mn.dot(mn)-n*n,o=t.radius*t.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,c=n+a;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,a,r,c;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,l=this.origin;return h>=0?(n=(t.min.x-l.x)*h,i=(t.max.x-l.x)*h):(n=(t.max.x-l.x)*h,i=(t.min.x-l.x)*h),d>=0?(o=(t.min.y-l.y)*d,a=(t.max.y-l.y)*d):(o=(t.max.y-l.y)*d,a=(t.min.y-l.y)*d),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),f>=0?(r=(t.min.z-l.z)*f,c=(t.max.z-l.z)*f):(r=(t.max.z-l.z)*f,c=(t.min.z-l.z)*f),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,mn)!==null}intersectTriangle(t,e,n,i,o){so.subVectors(e,t),ss.subVectors(n,t),oo.crossVectors(so,ss);let a=this.direction.dot(oo),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;An.subVectors(this.origin,t);const c=r*this.direction.dot(ss.crossVectors(An,ss));if(c<0)return null;const h=r*this.direction.dot(so.cross(An));if(h<0||c+h>a)return null;const d=-r*An.dot(oo);return d<0?null:this.at(d/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,n,i,o,a,r,c,h,d,f,l,u,_,v,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,h,d,f,l,u,_,v,m)}set(t,e,n,i,o,a,r,c,h,d,f,l,u,_,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=a,p[9]=r,p[13]=c,p[2]=h,p[6]=d,p[10]=f,p[14]=l,p[3]=u,p[7]=_,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ci.setFromMatrixColumn(t,0).length(),o=1/ci.setFromMatrixColumn(t,1).length(),a=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),c=Math.cos(i),h=Math.sin(i),d=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const l=a*d,u=a*f,_=r*d,v=r*f;e[0]=c*d,e[4]=-c*f,e[8]=h,e[1]=u+_*h,e[5]=l-v*h,e[9]=-r*c,e[2]=v-l*h,e[6]=_+u*h,e[10]=a*c}else if(t.order==="YXZ"){const l=c*d,u=c*f,_=h*d,v=h*f;e[0]=l+v*r,e[4]=_*r-u,e[8]=a*h,e[1]=a*f,e[5]=a*d,e[9]=-r,e[2]=u*r-_,e[6]=v+l*r,e[10]=a*c}else if(t.order==="ZXY"){const l=c*d,u=c*f,_=h*d,v=h*f;e[0]=l-v*r,e[4]=-a*f,e[8]=_+u*r,e[1]=u+_*r,e[5]=a*d,e[9]=v-l*r,e[2]=-a*h,e[6]=r,e[10]=a*c}else if(t.order==="ZYX"){const l=a*d,u=a*f,_=r*d,v=r*f;e[0]=c*d,e[4]=_*h-u,e[8]=l*h+v,e[1]=c*f,e[5]=v*h+l,e[9]=u*h-_,e[2]=-h,e[6]=r*c,e[10]=a*c}else if(t.order==="YZX"){const l=a*c,u=a*h,_=r*c,v=r*h;e[0]=c*d,e[4]=v-l*f,e[8]=_*f+u,e[1]=f,e[5]=a*d,e[9]=-r*d,e[2]=-h*d,e[6]=u*f+_,e[10]=l-v*f}else if(t.order==="XZY"){const l=a*c,u=a*h,_=r*c,v=r*h;e[0]=c*d,e[4]=-f,e[8]=h*d,e[1]=l*f+v,e[5]=a*d,e[9]=u*f-_,e[2]=_*f-u,e[6]=r*d,e[10]=v*f+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vl,t,Hl)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Pn.crossVectors(n,Ye),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Pn.crossVectors(n,Ye)),Pn.normalize(),os.crossVectors(Ye,Pn),i[0]=Pn.x,i[4]=os.x,i[8]=Ye.x,i[1]=Pn.y,i[5]=os.y,i[9]=Ye.y,i[2]=Pn.z,i[6]=os.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[4],c=n[8],h=n[12],d=n[1],f=n[5],l=n[9],u=n[13],_=n[2],v=n[6],m=n[10],p=n[14],w=n[3],M=n[7],y=n[11],P=n[15],L=i[0],I=i[4],B=i[8],S=i[12],x=i[1],T=i[5],G=i[9],rt=i[13],U=i[2],W=i[6],q=i[10],V=i[14],nt=i[3],j=i[7],J=i[11],H=i[15];return o[0]=a*L+r*x+c*U+h*nt,o[4]=a*I+r*T+c*W+h*j,o[8]=a*B+r*G+c*q+h*J,o[12]=a*S+r*rt+c*V+h*H,o[1]=d*L+f*x+l*U+u*nt,o[5]=d*I+f*T+l*W+u*j,o[9]=d*B+f*G+l*q+u*J,o[13]=d*S+f*rt+l*V+u*H,o[2]=_*L+v*x+m*U+p*nt,o[6]=_*I+v*T+m*W+p*j,o[10]=_*B+v*G+m*q+p*J,o[14]=_*S+v*rt+m*V+p*H,o[3]=w*L+M*x+y*U+P*nt,o[7]=w*I+M*T+y*W+P*j,o[11]=w*B+M*G+y*q+P*J,o[15]=w*S+M*rt+y*V+P*H,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],a=t[1],r=t[5],c=t[9],h=t[13],d=t[2],f=t[6],l=t[10],u=t[14],_=t[3],v=t[7],m=t[11],p=t[15];return _*(+o*c*f-i*h*f-o*r*l+n*h*l+i*r*u-n*c*u)+v*(+e*c*u-e*h*l+o*a*l-i*a*u+i*h*d-o*c*d)+m*(+e*h*f-e*r*u-o*a*f+n*a*u+o*r*d-n*h*d)+p*(-i*r*d-e*c*f+e*r*l+i*a*f-n*a*l+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8],f=t[9],l=t[10],u=t[11],_=t[12],v=t[13],m=t[14],p=t[15],w=f*m*h-v*l*h+v*c*u-r*m*u-f*c*p+r*l*p,M=_*l*h-d*m*h-_*c*u+a*m*u+d*c*p-a*l*p,y=d*v*h-_*f*h+_*r*u-a*v*u-d*r*p+a*f*p,P=_*f*c-d*v*c-_*r*l+a*v*l+d*r*m-a*f*m,L=e*w+n*M+i*y+o*P;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return t[0]=w*I,t[1]=(v*l*o-f*m*o-v*i*u+n*m*u+f*i*p-n*l*p)*I,t[2]=(r*m*o-v*c*o+v*i*h-n*m*h-r*i*p+n*c*p)*I,t[3]=(f*c*o-r*l*o-f*i*h+n*l*h+r*i*u-n*c*u)*I,t[4]=M*I,t[5]=(d*m*o-_*l*o+_*i*u-e*m*u-d*i*p+e*l*p)*I,t[6]=(_*c*o-a*m*o-_*i*h+e*m*h+a*i*p-e*c*p)*I,t[7]=(a*l*o-d*c*o+d*i*h-e*l*h-a*i*u+e*c*u)*I,t[8]=y*I,t[9]=(_*f*o-d*v*o-_*n*u+e*v*u+d*n*p-e*f*p)*I,t[10]=(a*v*o-_*r*o+_*n*h-e*v*h-a*n*p+e*r*p)*I,t[11]=(d*r*o-a*f*o-d*n*h+e*f*h+a*n*u-e*r*u)*I,t[12]=P*I,t[13]=(d*v*i-_*f*i+_*n*l-e*v*l-d*n*m+e*f*m)*I,t[14]=(_*r*i-a*v*i-_*n*c+e*v*c+a*n*m-e*r*m)*I,t[15]=(a*f*i-d*r*i+d*n*c-e*f*c-a*n*l+e*r*l)*I,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,a=t.x,r=t.y,c=t.z,h=o*a,d=o*r;return this.set(h*a+n,h*r-i*c,h*c+i*r,0,h*r+i*c,d*r+n,d*c-i*a,0,h*c-i*r,d*c+i*a,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,a){return this.set(1,n,o,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,a=e._y,r=e._z,c=e._w,h=o+o,d=a+a,f=r+r,l=o*h,u=o*d,_=o*f,v=a*d,m=a*f,p=r*f,w=c*h,M=c*d,y=c*f,P=n.x,L=n.y,I=n.z;return i[0]=(1-(v+p))*P,i[1]=(u+y)*P,i[2]=(_-M)*P,i[3]=0,i[4]=(u-y)*L,i[5]=(1-(l+p))*L,i[6]=(m+w)*L,i[7]=0,i[8]=(_+M)*I,i[9]=(m-w)*I,i[10]=(1-(l+v))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=ci.set(i[0],i[1],i[2]).length();const a=ci.set(i[4],i[5],i[6]).length(),r=ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const h=1/o,d=1/a,f=1/r;return tn.elements[0]*=h,tn.elements[1]*=h,tn.elements[2]*=h,tn.elements[4]*=d,tn.elements[5]*=d,tn.elements[6]*=d,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,e.setFromRotationMatrix(tn),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,i,o,a,r=xn){const c=this.elements,h=2*o/(e-t),d=2*o/(n-i),f=(e+t)/(e-t),l=(n+i)/(n-i);let u,_;if(r===xn)u=-(a+o)/(a-o),_=-2*a*o/(a-o);else if(r===Cs)u=-a/(a-o),_=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,a,r=xn){const c=this.elements,h=1/(e-t),d=1/(n-i),f=1/(a-o),l=(e+t)*h,u=(n+i)*d;let _,v;if(r===xn)_=(a+o)*f,v=-2*f;else if(r===Cs)_=o*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=v,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new N,tn=new be,Vl=new N(0,0,0),Hl=new N(1,1,1),Pn=new N,os=new N,Ye=new N,kr=new be,zr=new ji;class Os{constructor(t=0,e=0,n=0,i=Os.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],a=i[4],r=i[8],c=i[1],h=i[5],d=i[9],f=i[2],l=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ue(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(l,u),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ue(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(r,u));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zr.setFromEuler(this),this.setFromQuaternion(zr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Os.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wl=0;const Vr=new N,li=new ji,gn=new be,rs=new N,Oi=new N,Xl=new N,ql=new ji,Hr=new N(1,0,0),Wr=new N(0,1,0),Xr=new N(0,0,1),Yl={type:"added"},Zl={type:"removed"};class Pe extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pe.DEFAULT_UP.clone();const t=new N,e=new Os,n=new ji,i=new N(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new be},normalMatrix:{value:new ce}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=Pe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.multiply(li),this}rotateOnWorldAxis(t,e){return li.setFromAxisAngle(t,e),this.quaternion.premultiply(li),this}rotateX(t){return this.rotateOnAxis(Hr,t)}rotateY(t){return this.rotateOnAxis(Wr,t)}rotateZ(t){return this.rotateOnAxis(Xr,t)}translateOnAxis(t,e){return Vr.copy(t).applyQuaternion(this.quaternion),this.position.add(Vr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hr,t)}translateY(t){return this.translateOnAxis(Wr,t)}translateZ(t){return this.translateOnAxis(Xr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Oi,rs,this.up):gn.lookAt(rs,Oi,this.up),this.quaternion.setFromRotationMatrix(gn),i&&(gn.extractRotation(i.matrixWorld),li.setFromRotationMatrix(gn),this.quaternion.premultiply(li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,t,Xl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++){const r=i[o];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,h=this.material.length;c<h;c++)r.push(o(t.materials,this.material[c]));i.material=r}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(o(t.animations,c))}}if(e){const r=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),f=a(t.shapes),l=a(t.skeletons),u=a(t.animations),_=a(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),l.length>0&&(n.skeletons=l),u.length>0&&(n.animations=u),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(r){const c=[];for(const h in r){const d=r[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Pe.DEFAULT_UP=new N(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new N,_n=new N,ro=new N,Mn=new N,hi=new N,di=new N,qr=new N,ao=new N,co=new N,lo=new N;let as=!1;class nn{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){en.subVectors(i,e),_n.subVectors(n,e),ro.subVectors(t,e);const a=en.dot(en),r=en.dot(_n),c=en.dot(ro),h=_n.dot(_n),d=_n.dot(ro),f=a*h-r*r;if(f===0)return o.set(0,0,0),null;const l=1/f,u=(h*c-r*d)*l,_=(a*d-r*c)*l;return o.set(1-u-_,_,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getUV(t,e,n,i,o,a,r,c){return as===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),as=!0),this.getInterpolation(t,e,n,i,o,a,r,c)}static getInterpolation(t,e,n,i,o,a,r,c){return this.getBarycoord(t,e,n,i,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Mn.x),c.addScaledVector(a,Mn.y),c.addScaledVector(r,Mn.z),c)}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),_n.subVectors(t,e),en.cross(_n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),en.cross(_n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,o){return as===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),as=!0),nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}getInterpolation(t,e,n,i,o){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let a,r;hi.subVectors(i,n),di.subVectors(o,n),ao.subVectors(t,n);const c=hi.dot(ao),h=di.dot(ao);if(c<=0&&h<=0)return e.copy(n);co.subVectors(t,i);const d=hi.dot(co),f=di.dot(co);if(d>=0&&f<=d)return e.copy(i);const l=c*f-d*h;if(l<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(hi,a);lo.subVectors(t,o);const u=hi.dot(lo),_=di.dot(lo);if(_>=0&&u<=_)return e.copy(o);const v=u*h-c*_;if(v<=0&&h>=0&&_<=0)return r=h/(h-_),e.copy(n).addScaledVector(di,r);const m=d*_-u*f;if(m<=0&&f-d>=0&&u-_>=0)return qr.subVectors(o,i),r=(f-d)/(f-d+(u-_)),e.copy(i).addScaledVector(qr,r);const p=1/(m+v+l);return a=v*p,r=l*p,e.copy(n).addScaledVector(hi,a).addScaledVector(di,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $a={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},cs={h:0,s:0,l:0};function ho(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class le{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=zo(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=ho(a,o,t+1/3),this.g=ho(a,o,t),this.b=ho(a,o,t-1/3)}return ge.toWorkingColorSpace(this,i),this}setStyle(t,e=Ne){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=$a[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ge.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ue(Be.r*255,0,255))*65536+Math.round(Ue(Be.g*255,0,255))*256+Math.round(Ue(Be.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,i=Be.g,o=Be.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let c,h;const d=(r+a)/2;if(r===a)c=0,h=0;else{const f=a-r;switch(h=d<=.5?f/(a+r):f/(2-a-r),a){case n:c=(i-o)/f+(i<o?6:0);break;case i:c=(o-n)/f+2;break;case o:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=ge.workingColorSpace){return ge.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ne){ge.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,i=Be.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Rn),this.setHSL(Rn.h+t,Rn.s+e,Rn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Rn),t.getHSL(cs);const n=zi(Rn.h,cs.h,e),i=zi(Rn.s,cs.s,e),o=zi(Rn.l,cs.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new le;le.NAMES=$a;let Kl=0;class Li extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=yi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=Po,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ir,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ao&&(n.blendSrc=this.blendSrc),this.blendDst!==Po&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ir&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const c=o[r];delete c.metadata,a.push(c)}return a}if(e){const o=i(t.textures),a=i(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class de extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ae=new N,ls=new Ft;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=wi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wi(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wi(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wi(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),i=ke(i,this.array),o=ke(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dr&&(t.usage=this.usage),t}}class Qa extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tc extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jl=0;const Je=new be,uo=new Pe,ui=new N,Ze=new yn,Gi=new yn,De=new N;class Fe extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qa(t)?tc:Qa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ce().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Ze.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Gi.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(Ze.min,Gi.min),Ze.expandByPoint(De),De.addVectors(Ze.max,Gi.max),Ze.expandByPoint(De)):(Ze.expandByPoint(Gi.min),Ze.expandByPoint(Gi.max))}Ze.getCenter(n);let i=0;for(let o=0,a=t.count;o<a;o++)De.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(De));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],c=this.morphTargetsRelative;for(let h=0,d=r.count;h<d;h++)De.fromBufferAttribute(r,h),c&&(ui.fromBufferAttribute(t,h),De.add(ui)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,o=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,h=[],d=[];for(let x=0;x<r;x++)h[x]=new N,d[x]=new N;const f=new N,l=new N,u=new N,_=new Ft,v=new Ft,m=new Ft,p=new N,w=new N;function M(x,T,G){f.fromArray(i,x*3),l.fromArray(i,T*3),u.fromArray(i,G*3),_.fromArray(a,x*2),v.fromArray(a,T*2),m.fromArray(a,G*2),l.sub(f),u.sub(f),v.sub(_),m.sub(_);const rt=1/(v.x*m.y-m.x*v.y);isFinite(rt)&&(p.copy(l).multiplyScalar(m.y).addScaledVector(u,-v.y).multiplyScalar(rt),w.copy(u).multiplyScalar(v.x).addScaledVector(l,-m.x).multiplyScalar(rt),h[x].add(p),h[T].add(p),h[G].add(p),d[x].add(w),d[T].add(w),d[G].add(w))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let x=0,T=y.length;x<T;++x){const G=y[x],rt=G.start,U=G.count;for(let W=rt,q=rt+U;W<q;W+=3)M(n[W+0],n[W+1],n[W+2])}const P=new N,L=new N,I=new N,B=new N;function S(x){I.fromArray(o,x*3),B.copy(I);const T=h[x];P.copy(T),P.sub(I.multiplyScalar(I.dot(T))).normalize(),L.crossVectors(B,T);const rt=L.dot(d[x])<0?-1:1;c[x*4]=P.x,c[x*4+1]=P.y,c[x*4+2]=P.z,c[x*4+3]=rt}for(let x=0,T=y.length;x<T;++x){const G=y[x],rt=G.start,U=G.count;for(let W=rt,q=rt+U;W<q;W+=3)S(n[W+0]),S(n[W+1]),S(n[W+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,u=n.count;l<u;l++)n.setXYZ(l,0,0,0);const i=new N,o=new N,a=new N,r=new N,c=new N,h=new N,d=new N,f=new N;if(t)for(let l=0,u=t.count;l<u;l+=3){const _=t.getX(l+0),v=t.getX(l+1),m=t.getX(l+2);i.fromBufferAttribute(e,_),o.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),d.subVectors(a,o),f.subVectors(i,o),d.cross(f),r.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,m),r.add(d),c.add(d),h.add(d),n.setXYZ(_,r.x,r.y,r.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,u=e.count;l<u;l+=3)i.fromBufferAttribute(e,l+0),o.fromBufferAttribute(e,l+1),a.fromBufferAttribute(e,l+2),d.subVectors(a,o),f.subVectors(i,o),d.cross(f),n.setXYZ(l+0,d.x,d.y,d.z),n.setXYZ(l+1,d.x,d.y,d.z),n.setXYZ(l+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(r,c){const h=r.array,d=r.itemSize,f=r.normalized,l=new h.constructor(c.length*d);let u=0,_=0;for(let v=0,m=c.length;v<m;v++){r.isInterleavedBufferAttribute?u=c[v]*r.data.stride+r.offset:u=c[v]*d;for(let p=0;p<d;p++)l[_++]=h[u++]}return new hn(l,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],h=t(c,n);e.setAttribute(r,h)}const o=this.morphAttributes;for(const r in o){const c=[],h=o[r];for(let d=0,f=h.length;d<f;d++){const l=h[d],u=t(l,n);c.push(u)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,c=a.length;r<c;r++){const h=a[r];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let f=0,l=h.length;f<l;f++){const u=h[f];d.push(u.toJSON(t.data))}d.length>0&&(i[c]=d,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(e))}const o=t.morphAttributes;for(const h in o){const d=[],f=o[h];for(let l=0,u=f.length;l<u;l++)d.push(f[l].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yr=new be,Vn=new Ja,hs=new Fs,Zr=new N,fi=new N,pi=new N,mi=new N,fo=new N,ds=new N,us=new Ft,fs=new Ft,ps=new Ft,Kr=new N,Jr=new N,jr=new N,ms=new N,gs=new N;class g extends Pe{constructor(t=new Fe,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(o&&r){ds.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const d=r[c],f=o[c];d!==0&&(fo.fromBufferAttribute(f,t),a?ds.addScaledVector(fo,d):ds.addScaledVector(fo.sub(e),d))}e.add(ds)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),hs.copy(n.boundingSphere),hs.applyMatrix4(o),Vn.copy(t.ray).recast(t.near),!(hs.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(hs,Zr)===null||Vn.origin.distanceToSquared(Zr)>(t.far-t.near)**2))&&(Yr.copy(o).invert(),Vn.copy(t.ray).applyMatrix4(Yr),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,a=this.material,r=o.index,c=o.attributes.position,h=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,l=o.groups,u=o.drawRange;if(r!==null)if(Array.isArray(a))for(let _=0,v=l.length;_<v;_++){const m=l[_],p=a[m.materialIndex],w=Math.max(m.start,u.start),M=Math.min(r.count,Math.min(m.start+m.count,u.start+u.count));for(let y=w,P=M;y<P;y+=3){const L=r.getX(y),I=r.getX(y+1),B=r.getX(y+2);i=_s(this,p,t,n,h,d,f,L,I,B),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,u.start),v=Math.min(r.count,u.start+u.count);for(let m=_,p=v;m<p;m+=3){const w=r.getX(m),M=r.getX(m+1),y=r.getX(m+2);i=_s(this,a,t,n,h,d,f,w,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,v=l.length;_<v;_++){const m=l[_],p=a[m.materialIndex],w=Math.max(m.start,u.start),M=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let y=w,P=M;y<P;y+=3){const L=y,I=y+1,B=y+2;i=_s(this,p,t,n,h,d,f,L,I,B),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let m=_,p=v;m<p;m+=3){const w=m,M=m+1,y=m+2;i=_s(this,a,t,n,h,d,f,w,M,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function jl(s,t,e,n,i,o,a,r){let c;if(t.side===He?c=n.intersectTriangle(a,o,i,!0,r):c=n.intersectTriangle(i,o,a,t.side===Fn,r),c===null)return null;gs.copy(r),gs.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(gs);return h<e.near||h>e.far?null:{distance:h,point:gs.clone(),object:s}}function _s(s,t,e,n,i,o,a,r,c,h){s.getVertexPosition(r,fi),s.getVertexPosition(c,pi),s.getVertexPosition(h,mi);const d=jl(s,t,e,n,fi,pi,mi,ms);if(d){i&&(us.fromBufferAttribute(i,r),fs.fromBufferAttribute(i,c),ps.fromBufferAttribute(i,h),d.uv=nn.getInterpolation(ms,fi,pi,mi,us,fs,ps,new Ft)),o&&(us.fromBufferAttribute(o,r),fs.fromBufferAttribute(o,c),ps.fromBufferAttribute(o,h),d.uv1=nn.getInterpolation(ms,fi,pi,mi,us,fs,ps,new Ft),d.uv2=d.uv1),a&&(Kr.fromBufferAttribute(a,r),Jr.fromBufferAttribute(a,c),jr.fromBufferAttribute(a,h),d.normal=nn.getInterpolation(ms,fi,pi,mi,Kr,Jr,jr,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:r,b:c,c:h,normal:new N,materialIndex:0};nn.getNormal(fi,pi,mi,f.normal),d.face=f}return d}class O extends Fe{constructor(t=1,e=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const c=[],h=[],d=[],f=[];let l=0,u=0;_("z","y","x",-1,-1,n,e,t,a,o,0),_("z","y","x",1,-1,n,e,-t,a,o,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,o,4),_("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(f,2));function _(v,m,p,w,M,y,P,L,I,B,S){const x=y/I,T=P/B,G=y/2,rt=P/2,U=L/2,W=I+1,q=B+1;let V=0,nt=0;const j=new N;for(let J=0;J<q;J++){const H=J*T-rt;for(let ft=0;ft<W;ft++){const Q=ft*x-G;j[v]=Q*w,j[m]=H*M,j[p]=U,h.push(j.x,j.y,j.z),j[v]=0,j[m]=0,j[p]=L>0?1:-1,d.push(j.x,j.y,j.z),f.push(ft/I),f.push(1-J/B),V+=1}}for(let J=0;J<B;J++)for(let H=0;H<I;H++){const ft=l+H+W*J,Q=l+H+W*(J+1),st=l+(H+1)+W*(J+1),$=l+(H+1)+W*J;c.push(ft,Q,$),c.push(Q,st,$),nt+=6}r.addGroup(u,nt,S),u+=nt,l+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new O(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ri(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ze(s){const t={};for(let e=0;e<s.length;e++){const n=Ri(s[e]);for(const i in n)t[i]=n[i]}return t}function $l(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ec(s){return s.getRenderTarget()===null?s.outputColorSpace:ge.workingColorSpace}const Ql={clone:Ri,merge:ze};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ri(t.uniforms),this.uniformsGroups=$l(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nc extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=xn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class We extends nc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ki*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pi*2*Math.atan(Math.tan(ki*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ki*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;o+=a.offsetX*i/c,e-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class nh extends Pe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new We(gi,_i,t,e);i.layers=this.layers,this.add(i);const o=new We(gi,_i,t,e);o.layers=this.layers,this.add(o);const a=new We(gi,_i,t,e);a.layers=this.layers,this.add(a);const r=new We(gi,_i,t,e);r.layers=this.layers,this.add(r);const c=new We(gi,_i,t,e);c.layers=this.layers,this.add(c);const h=new We(gi,_i,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,a,r,c]=e;for(const h of e)this.remove(h);if(t===xn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,c,h,d]=this.children,f=t.getRenderTarget(),l=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(f,l,u),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ic extends Xe{constructor(t,e,n,i,o,a,r,c,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Ei,super(t,e,n,i,o,a,r,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ih extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Vi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===jn?Ne:$e),this.texture=new ic(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new O(5,5,5),o=new Qn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Dn});o.uniforms.tEquirect.value=e;const a=new g(i,o),r=e.minFilter;return e.minFilter===qi&&(e.minFilter=je),new nh(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(o)}}const po=new N,sh=new N,oh=new ce;class Xn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=po.subVectors(n,e).cross(sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oh.getNormalMatrix(t),i=this.coplanarPoint(po).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Fs,Ms=new N;class Vo{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,o=new Xn,a=new Xn){this.planes=[t,e,n,i,o,a]}set(t,e,n,i,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=xn){const n=this.planes,i=t.elements,o=i[0],a=i[1],r=i[2],c=i[3],h=i[4],d=i[5],f=i[6],l=i[7],u=i[8],_=i[9],v=i[10],m=i[11],p=i[12],w=i[13],M=i[14],y=i[15];if(n[0].setComponents(c-o,l-h,m-u,y-p).normalize(),n[1].setComponents(c+o,l+h,m+u,y+p).normalize(),n[2].setComponents(c+a,l+d,m+_,y+w).normalize(),n[3].setComponents(c-a,l-d,m-_,y-w).normalize(),n[4].setComponents(c-r,l-f,m-v,y-M).normalize(),e===xn)n[5].setComponents(c+r,l+f,m+v,y+M).normalize();else if(e===Cs)n[5].setComponents(r,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ms.x=i.normal.x>0?t.max.x:t.min.x,Ms.y=i.normal.y>0?t.max.y:t.min.y,Ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sc(){let s=null,t=!1,e=null,n=null;function i(o,a){e(o,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function rh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(h,d){const f=h.array,l=h.usage,u=f.byteLength,_=s.createBuffer();s.bindBuffer(d,_),s.bufferData(d,f,l),h.onUploadCallback();let v;if(f instanceof Float32Array)v=s.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=s.SHORT;else if(f instanceof Uint32Array)v=s.UNSIGNED_INT;else if(f instanceof Int32Array)v=s.INT;else if(f instanceof Int8Array)v=s.BYTE;else if(f instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:u}}function o(h,d,f){const l=d.array,u=d._updateRange,_=d.updateRanges;if(s.bindBuffer(f,h),u.count===-1&&_.length===0&&s.bufferSubData(f,0,l),_.length!==0){for(let v=0,m=_.length;v<m;v++){const p=_[v];e?s.bufferSubData(f,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count):s.bufferSubData(f,p.start*l.BYTES_PER_ELEMENT,l.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}u.count!==-1&&(e?s.bufferSubData(f,u.offset*l.BYTES_PER_ELEMENT,l,u.offset,u.count):s.bufferSubData(f,u.offset*l.BYTES_PER_ELEMENT,l.subarray(u.offset,u.offset+u.count)),u.count=-1),d.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(s.deleteBuffer(d.buffer),n.delete(h))}function c(h,d){if(h.isGLBufferAttribute){const l=n.get(h);(!l||l.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,i(h,d));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,h,d),f.version=h.version}}return{get:a,remove:r,update:c}}class qt extends Fe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,a=e/2,r=Math.floor(n),c=Math.floor(i),h=r+1,d=c+1,f=t/r,l=e/c,u=[],_=[],v=[],m=[];for(let p=0;p<d;p++){const w=p*l-a;for(let M=0;M<h;M++){const y=M*f-o;_.push(y,-w,0),v.push(0,0,1),m.push(M/r),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<r;w++){const M=w+h*p,y=w+h*(p+1),P=w+1+h*(p+1),L=w+1+h*p;u.push(M,y,L),u.push(y,P,L)}this.setIndex(u),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.widthSegments,t.heightSegments)}}var ah=`#ifdef USE_ALPHAHASH
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
#endif`,wh=`float G_BlinnPhong_Implicit( ) {
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
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,Pd=`#ifndef FLAT_SHADED
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
}`,wu=`uniform vec3 diffuse;
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
}`,vu=`#include <common>
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
}`,Pu=`#define PHONG
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
}`,re={alphahash_fragment:ah,alphahash_pars_fragment:ch,alphamap_fragment:lh,alphamap_pars_fragment:hh,alphatest_fragment:dh,alphatest_pars_fragment:uh,aomap_fragment:fh,aomap_pars_fragment:ph,batching_pars_vertex:mh,batching_vertex:gh,begin_vertex:_h,beginnormal_vertex:Mh,bsdfs:wh,iridescence_fragment:vh,bumpmap_pars_fragment:xh,clipping_planes_fragment:Sh,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:Eh,color_fragment:Th,color_pars_fragment:Ah,color_pars_vertex:Ph,color_vertex:Rh,common:Ch,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Dh,displacementmap_vertex:Uh,emissivemap_fragment:Nh,emissivemap_pars_fragment:Fh,colorspace_fragment:Oh,colorspace_pars_fragment:Gh,envmap_fragment:Bh,envmap_common_pars_fragment:kh,envmap_pars_fragment:zh,envmap_pars_vertex:Vh,envmap_physical_pars_fragment:td,envmap_vertex:Hh,fog_vertex:Wh,fog_pars_vertex:Xh,fog_fragment:qh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Zh,lightmap_fragment:Kh,lightmap_pars_fragment:Jh,lights_lambert_fragment:jh,lights_lambert_pars_fragment:$h,lights_pars_begin:Qh,lights_toon_fragment:ed,lights_toon_pars_fragment:nd,lights_phong_fragment:id,lights_phong_pars_fragment:sd,lights_physical_fragment:od,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:cd,lights_fragment_end:ld,logdepthbuf_fragment:hd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:pd,map_pars_fragment:md,map_particle_fragment:gd,map_particle_pars_fragment:_d,metalnessmap_fragment:Md,metalnessmap_pars_fragment:wd,morphcolor_vertex:vd,morphnormal_vertex:xd,morphtarget_pars_vertex:Sd,morphtarget_vertex:yd,normal_fragment_begin:bd,normal_fragment_maps:Ed,normal_pars_fragment:Td,normal_pars_vertex:Ad,normal_vertex:Pd,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Dd,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Gd,dithering_pars_fragment:Bd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:Zd,skinnormal_vertex:Kd,specularmap_fragment:Jd,specularmap_pars_fragment:jd,tonemapping_fragment:$d,tonemapping_pars_fragment:Qd,transmission_fragment:tu,transmission_pars_fragment:eu,uv_pars_fragment:nu,uv_pars_vertex:iu,uv_vertex:su,worldpos_vertex:ou,background_vert:ru,background_frag:au,backgroundCube_vert:cu,backgroundCube_frag:lu,cube_vert:hu,cube_frag:du,depth_vert:uu,depth_frag:fu,distanceRGBA_vert:pu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:_u,linedashed_vert:Mu,linedashed_frag:wu,meshbasic_vert:vu,meshbasic_frag:xu,meshlambert_vert:Su,meshlambert_frag:yu,meshmatcap_vert:bu,meshmatcap_frag:Eu,meshnormal_vert:Tu,meshnormal_frag:Au,meshphong_vert:Pu,meshphong_frag:Ru,meshphysical_vert:Cu,meshphysical_frag:Lu,meshtoon_vert:Iu,meshtoon_frag:Du,points_vert:Uu,points_frag:Nu,shadow_vert:Fu,shadow_frag:Ou,sprite_vert:Gu,sprite_frag:Bu},Gt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},cn={basic:{uniforms:ze([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:re.meshbasic_vert,fragmentShader:re.meshbasic_frag},lambert:{uniforms:ze([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new le(0)}}]),vertexShader:re.meshlambert_vert,fragmentShader:re.meshlambert_frag},phong:{uniforms:ze([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:re.meshphong_vert,fragmentShader:re.meshphong_frag},standard:{uniforms:ze([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag},toon:{uniforms:ze([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new le(0)}}]),vertexShader:re.meshtoon_vert,fragmentShader:re.meshtoon_frag},matcap:{uniforms:ze([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:re.meshmatcap_vert,fragmentShader:re.meshmatcap_frag},points:{uniforms:ze([Gt.points,Gt.fog]),vertexShader:re.points_vert,fragmentShader:re.points_frag},dashed:{uniforms:ze([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:re.linedashed_vert,fragmentShader:re.linedashed_frag},depth:{uniforms:ze([Gt.common,Gt.displacementmap]),vertexShader:re.depth_vert,fragmentShader:re.depth_frag},normal:{uniforms:ze([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:re.meshnormal_vert,fragmentShader:re.meshnormal_frag},sprite:{uniforms:ze([Gt.sprite,Gt.fog]),vertexShader:re.sprite_vert,fragmentShader:re.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:re.background_vert,fragmentShader:re.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:re.backgroundCube_vert,fragmentShader:re.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:re.cube_vert,fragmentShader:re.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:re.equirect_vert,fragmentShader:re.equirect_frag},distanceRGBA:{uniforms:ze([Gt.common,Gt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:re.distanceRGBA_vert,fragmentShader:re.distanceRGBA_frag},shadow:{uniforms:ze([Gt.lights,Gt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:re.shadow_vert,fragmentShader:re.shadow_frag}};cn.physical={uniforms:ze([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:re.meshphysical_vert,fragmentShader:re.meshphysical_frag};const ws={r:0,b:0,g:0};function ku(s,t,e,n,i,o,a){const r=new le(0);let c=o===!0?0:1,h,d,f=null,l=0,u=null;function _(m,p){let w=!1,M=p.isScene===!0?p.background:null;M&&M.isTexture&&(M=(p.backgroundBlurriness>0?e:t).get(M)),M===null?v(r,c):M&&M.isColor&&(v(M,1),w=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===Us)?(d===void 0&&(d=new g(new O(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ri(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=ge.getTransfer(M.colorSpace)!==we,(f!==M||l!==M.version||u!==s.toneMapping)&&(d.material.needsUpdate=!0,f=M,l=M.version,u=s.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new g(new qt(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ri(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ge.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||l!==M.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=M,l=M.version,u=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function v(m,p){m.getRGB(ws,ec(s)),n.buffers.color.setClear(ws.r,ws.g,ws.b,p,a)}return{getClearColor:function(){return r},setClearColor:function(m,p=1){r.set(m),c=p,v(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,v(r,c)},render:_}}function zu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,r={},c=m(null);let h=c,d=!1;function f(U,W,q,V,nt){let j=!1;if(a){const J=v(V,q,W);h!==J&&(h=J,u(h.object)),j=p(U,V,q,nt),j&&w(U,V,q,nt)}else{const J=W.wireframe===!0;(h.geometry!==V.id||h.program!==q.id||h.wireframe!==J)&&(h.geometry=V.id,h.program=q.id,h.wireframe=J,j=!0)}nt!==null&&e.update(nt,s.ELEMENT_ARRAY_BUFFER),(j||d)&&(d=!1,B(U,W,q,V),nt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function l(){return n.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function u(U){return n.isWebGL2?s.bindVertexArray(U):o.bindVertexArrayOES(U)}function _(U){return n.isWebGL2?s.deleteVertexArray(U):o.deleteVertexArrayOES(U)}function v(U,W,q){const V=q.wireframe===!0;let nt=r[U.id];nt===void 0&&(nt={},r[U.id]=nt);let j=nt[W.id];j===void 0&&(j={},nt[W.id]=j);let J=j[V];return J===void 0&&(J=m(l()),j[V]=J),J}function m(U){const W=[],q=[],V=[];for(let nt=0;nt<i;nt++)W[nt]=0,q[nt]=0,V[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:q,attributeDivisors:V,object:U,attributes:{},index:null}}function p(U,W,q,V){const nt=h.attributes,j=W.attributes;let J=0;const H=q.getAttributes();for(const ft in H)if(H[ft].location>=0){const st=nt[ft];let $=j[ft];if($===void 0&&(ft==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),ft==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),st===void 0||st.attribute!==$||$&&st.data!==$.data)return!0;J++}return h.attributesNum!==J||h.index!==V}function w(U,W,q,V){const nt={},j=W.attributes;let J=0;const H=q.getAttributes();for(const ft in H)if(H[ft].location>=0){let st=j[ft];st===void 0&&(ft==="instanceMatrix"&&U.instanceMatrix&&(st=U.instanceMatrix),ft==="instanceColor"&&U.instanceColor&&(st=U.instanceColor));const $={};$.attribute=st,st&&st.data&&($.data=st.data),nt[ft]=$,J++}h.attributes=nt,h.attributesNum=J,h.index=V}function M(){const U=h.newAttributes;for(let W=0,q=U.length;W<q;W++)U[W]=0}function y(U){P(U,0)}function P(U,W){const q=h.newAttributes,V=h.enabledAttributes,nt=h.attributeDivisors;q[U]=1,V[U]===0&&(s.enableVertexAttribArray(U),V[U]=1),nt[U]!==W&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,W),nt[U]=W)}function L(){const U=h.newAttributes,W=h.enabledAttributes;for(let q=0,V=W.length;q<V;q++)W[q]!==U[q]&&(s.disableVertexAttribArray(q),W[q]=0)}function I(U,W,q,V,nt,j,J){J===!0?s.vertexAttribIPointer(U,W,q,nt,j):s.vertexAttribPointer(U,W,q,V,nt,j)}function B(U,W,q,V){if(n.isWebGL2===!1&&(U.isInstancedMesh||V.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const nt=V.attributes,j=q.getAttributes(),J=W.defaultAttributeValues;for(const H in j){const ft=j[H];if(ft.location>=0){let Q=nt[H];if(Q===void 0&&(H==="instanceMatrix"&&U.instanceMatrix&&(Q=U.instanceMatrix),H==="instanceColor"&&U.instanceColor&&(Q=U.instanceColor)),Q!==void 0){const st=Q.normalized,$=Q.itemSize,Mt=e.get(Q);if(Mt===void 0)continue;const pt=Mt.buffer,yt=Mt.type,Et=Mt.bytesPerElement,dt=n.isWebGL2===!0&&(yt===s.INT||yt===s.UNSIGNED_INT||Q.gpuType===Fa);if(Q.isInterleavedBufferAttribute){const At=Q.data,D=At.stride,_t=Q.offset;if(At.isInstancedInterleavedBuffer){for(let ct=0;ct<ft.locationSize;ct++)P(ft.location+ct,At.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let ct=0;ct<ft.locationSize;ct++)y(ft.location+ct);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let ct=0;ct<ft.locationSize;ct++)I(ft.location+ct,$/ft.locationSize,yt,st,D*Et,(_t+$/ft.locationSize*ct)*Et,dt)}else{if(Q.isInstancedBufferAttribute){for(let At=0;At<ft.locationSize;At++)P(ft.location+At,Q.meshPerAttribute);U.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let At=0;At<ft.locationSize;At++)y(ft.location+At);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let At=0;At<ft.locationSize;At++)I(ft.location+At,$/ft.locationSize,yt,st,$*Et,$/ft.locationSize*At*Et,dt)}}else if(J!==void 0){const st=J[H];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(ft.location,st);break;case 3:s.vertexAttrib3fv(ft.location,st);break;case 4:s.vertexAttrib4fv(ft.location,st);break;default:s.vertexAttrib1fv(ft.location,st)}}}}L()}function S(){G();for(const U in r){const W=r[U];for(const q in W){const V=W[q];for(const nt in V)_(V[nt].object),delete V[nt];delete W[q]}delete r[U]}}function x(U){if(r[U.id]===void 0)return;const W=r[U.id];for(const q in W){const V=W[q];for(const nt in V)_(V[nt].object),delete V[nt];delete W[q]}delete r[U.id]}function T(U){for(const W in r){const q=r[W];if(q[U.id]===void 0)continue;const V=q[U.id];for(const nt in V)_(V[nt].object),delete V[nt];delete q[U.id]}}function G(){rt(),d=!0,h!==c&&(h=c,u(h.object))}function rt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:G,resetDefaultState:rt,dispose:S,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:y,disableUnusedAttributes:L}}function Vu(s,t,e,n){const i=n.isWebGL2;let o;function a(d){o=d}function r(d,f){s.drawArrays(o,d,f),e.update(f,o,1)}function c(d,f,l){if(l===0)return;let u,_;if(i)u=s,_="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[_](o,d,f,l),e.update(f,o,l)}function h(d,f,l){if(l===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let _=0;_<l;_++)this.render(d[_],f[_]);else{u.multiDrawArraysWEBGL(o,d,0,f,0,l);let _=0;for(let v=0;v<l;v++)_+=f[v];e.update(_,o,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=h}function Hu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=o(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const h=a||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=l>0,y=a||t.has("OES_texture_float"),P=M&&y,L=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:o,precision:r,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:l,maxTextureSize:u,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:M,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:L}}function Wu(s){const t=this;let e=null,n=0,i=!1,o=!1;const a=new Xn,r=new ce,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,l){const u=f.length!==0||l||n!==0||i;return i=l,n=f.length,u},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,l){e=d(f,l,0)},this.setState=function(f,l,u){const _=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=s.get(f);if(!i||_===null||_.length===0||o&&!m)o?d(null):h();else{const w=o?0:n,M=w*4;let y=p.clippingState||null;c.value=y,y=d(_,l,M,u);for(let P=0;P!==M;++P)y[P]=e[P];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,l,u,_){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const p=u+v*4,w=l.matrixWorldInverse;r.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=u;M!==v;++M,y+=4)a.copy(f[M]).applyMatrix4(w,r),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Xu(s){let t=new WeakMap;function e(a,r){return r===Ro?a.mapping=Ei:r===Co&&(a.mapping=Ti),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===Ro||r===Co)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new ih(c.height/2);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class oc extends nc{constructor(t=-1,e=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,r-=d*this.view.offsetY,c=r-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vi=4,$r=[.125,.215,.35,.446,.526,.582],Zn=20,mo=new oc,Qr=new le;let go=null,_o=0,Mo=0;const qn=(1+Math.sqrt(5))/2,Mi=1/qn,ta=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,qn,Mi),new N(0,qn,-Mi),new N(Mi,0,qn),new N(-Mi,0,qn),new N(qn,Mi,0),new N(-qn,Mi,0)];class ea{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,_o,Mo),t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ei||t.mapping===Ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),Mo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Yi,format:on,colorSpace:Sn,depthBuffer:!1},i=na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=na(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qu(o)),this._blurMaterial=Yu(o,t,e)}return i}_compileMaterial(t){const e=new g(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,i){const r=new We(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,l=d.toneMapping;d.getClearColor(Qr),d.toneMapping=Un,d.autoClear=!1;const u=new de({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),_=new g(new O,u);let v=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,v=!0):(u.color.copy(Qr),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(r.up.set(0,c[p],0),r.lookAt(h[p],0,0)):w===1?(r.up.set(0,0,c[p]),r.lookAt(0,h[p],0)):(r.up.set(0,c[p],0),r.lookAt(0,0,h[p]));const M=this._cubeSize;vs(i,w*M,p>2?M:0,M,M),d.setRenderTarget(i),v&&d.render(_,r),d.render(t,r)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=l,d.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ei||t.mapping===Ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ia());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new g(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const c=this._cubeSize;vs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ta[(i-1)%ta.length];this._blur(t,i-1,i,o,a)}e.autoClear=n}_blur(t,e,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",o),this._halfBlur(a,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,a,r){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new g(this._lodPlanes[i],h),l=h.uniforms,u=this._sizeLods[n]-1,_=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*Zn-1),v=o/_,m=isFinite(o)?1+Math.floor(d*v):Zn;m>Zn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zn}`);const p=[];let w=0;for(let I=0;I<Zn;++I){const B=I/v,S=Math.exp(-B*B/2);p.push(S),I===0?w+=S:I<m&&(w+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;l.envMap.value=t.texture,l.samples.value=m,l.weights.value=p,l.latitudinal.value=a==="latitudinal",r&&(l.poleAxis.value=r);const{_lodMax:M}=this;l.dTheta.value=_,l.mipInt.value=M-n;const y=this._sizeLods[i],P=3*y*(i>M-vi?i-M+vi:0),L=4*(this._cubeSize-y);vs(e,P,L,3*y,2*y),c.setRenderTarget(e),c.render(f,mo)}}function qu(s){const t=[],e=[],n=[];let i=s;const o=s-vi+1+$r.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);e.push(r);let c=1/r;a>s-vi?c=$r[a-s+vi-1]:a===0&&(c=0),n.push(c);const h=1/(r-2),d=-h,f=1+h,l=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,_=6,v=3,m=2,p=1,w=new Float32Array(v*_*u),M=new Float32Array(m*_*u),y=new Float32Array(p*_*u);for(let L=0;L<u;L++){const I=L%3*2/3-1,B=L>2?0:-1,S=[I,B,0,I+2/3,B,0,I+2/3,B+1,0,I,B,0,I+2/3,B+1,0,I,B+1,0];w.set(S,v*_*L),M.set(l,m*_*L);const x=[L,L,L,L,L,L];y.set(x,p*_*L)}const P=new Fe;P.setAttribute("position",new hn(w,v)),P.setAttribute("uv",new hn(M,m)),P.setAttribute("faceIndex",new hn(y,p)),t.push(P),i>vi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function na(s,t,e){const n=new $n(s,t,e);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Yu(s,t,e){const n=new Float32Array(Zn),i=new N(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function ia(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function sa(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

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
	`}function Zu(s){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,h=c===Ro||c===Co,d=c===Ei||c===Ti;if(h||d)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new ea(s)),f=h?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(h&&f&&f.height>0||d&&f&&i(f)){e===null&&(e=new ea(s));const l=h?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,l),r.addEventListener("dispose",o),l.texture}else return null}}}return r}function i(r){let c=0;const h=6;for(let d=0;d<h;d++)r[d]!==void 0&&c++;return c===h}function o(r){const c=r.target;c.removeEventListener("dispose",o);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ku(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ju(s,t,e,n){const i={},o=new WeakMap;function a(f){const l=f.target;l.index!==null&&t.remove(l.index);for(const _ in l.attributes)t.remove(l.attributes[_]);for(const _ in l.morphAttributes){const v=l.morphAttributes[_];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}l.removeEventListener("dispose",a),delete i[l.id];const u=o.get(l);u&&(t.remove(u),o.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function r(f,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,e.memory.geometries++),l}function c(f){const l=f.attributes;for(const _ in l)t.update(l[_],s.ARRAY_BUFFER);const u=f.morphAttributes;for(const _ in u){const v=u[_];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function h(f){const l=[],u=f.index,_=f.attributes.position;let v=0;if(u!==null){const w=u.array;v=u.version;for(let M=0,y=w.length;M<y;M+=3){const P=w[M+0],L=w[M+1],I=w[M+2];l.push(P,L,L,I,I,P)}}else if(_!==void 0){const w=_.array;v=_.version;for(let M=0,y=w.length/3-1;M<y;M+=3){const P=M+0,L=M+1,I=M+2;l.push(P,L,L,I,I,P)}}else return;const m=new(qa(l)?tc:Qa)(l,1);m.version=v;const p=o.get(f);p&&t.remove(p),o.set(f,m)}function d(f){const l=o.get(f);if(l){const u=f.index;u!==null&&l.version<u.version&&h(f)}else h(f);return o.get(f)}return{get:r,update:c,getWireframeAttribute:d}}function ju(s,t,e,n){const i=n.isWebGL2;let o;function a(u){o=u}let r,c;function h(u){r=u.type,c=u.bytesPerElement}function d(u,_){s.drawElements(o,_,r,u*c),e.update(_,o,1)}function f(u,_,v){if(v===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](o,_,r,u*c,v),e.update(_,o,v)}function l(u,_,v){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<v;p++)this.render(u[p]/c,_[p]);else{m.multiDrawElementsWEBGL(o,_,0,r,u,0,v);let p=0;for(let w=0;w<v;w++)p+=_[w];e.update(p,o,1)}}this.setMode=a,this.setIndex=h,this.render=d,this.renderInstances=f,this.renderMultiDraw=l}function $u(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=r*(o/3);break;case s.LINES:e.lines+=r*(o/2);break;case s.LINE_STRIP:e.lines+=r*(o-1);break;case s.LINE_LOOP:e.lines+=r*o;break;case s.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qu(s,t){return s[0]-t[0]}function tf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ef(s,t,e){const n={},i=new Float32Array(8),o=new WeakMap,a=new ve,r=[];for(let h=0;h<8;h++)r[h]=[h,0];function c(h,d,f){const l=h.morphTargetInfluences;if(t.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=_!==void 0?_.length:0;let m=o.get(d);if(m===void 0||m.count!==v){let W=function(){rt.dispose(),o.delete(d),d.removeEventListener("dispose",W)};var u=W;m!==void 0&&m.texture.dispose();const M=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let S=0;M===!0&&(S=1),y===!0&&(S=2),P===!0&&(S=3);let x=d.attributes.position.count*S,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const G=new Float32Array(x*T*4*v),rt=new Ka(G,x,T,v);rt.type=In,rt.needsUpdate=!0;const U=S*4;for(let q=0;q<v;q++){const V=L[q],nt=I[q],j=B[q],J=x*T*4*q;for(let H=0;H<V.count;H++){const ft=H*U;M===!0&&(a.fromBufferAttribute(V,H),G[J+ft+0]=a.x,G[J+ft+1]=a.y,G[J+ft+2]=a.z,G[J+ft+3]=0),y===!0&&(a.fromBufferAttribute(nt,H),G[J+ft+4]=a.x,G[J+ft+5]=a.y,G[J+ft+6]=a.z,G[J+ft+7]=0),P===!0&&(a.fromBufferAttribute(j,H),G[J+ft+8]=a.x,G[J+ft+9]=a.y,G[J+ft+10]=a.z,G[J+ft+11]=j.itemSize===4?a.w:1)}}m={count:v,texture:rt,size:new Ft(x,T)},o.set(d,m),d.addEventListener("dispose",W)}let p=0;for(let M=0;M<l.length;M++)p+=l[M];const w=d.morphTargetsRelative?1:1-p;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",l),f.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=l===void 0?0:l.length;let v=n[d.id];if(v===void 0||v.length!==_){v=[];for(let y=0;y<_;y++)v[y]=[y,0];n[d.id]=v}for(let y=0;y<_;y++){const P=v[y];P[0]=y,P[1]=l[y]}v.sort(tf);for(let y=0;y<8;y++)y<_&&v[y][1]?(r[y][0]=v[y][0],r[y][1]=v[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(Qu);const m=d.morphAttributes.position,p=d.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const P=r[y],L=P[0],I=P[1];L!==Number.MAX_SAFE_INTEGER&&I?(m&&d.getAttribute("morphTarget"+y)!==m[L]&&d.setAttribute("morphTarget"+y,m[L]),p&&d.getAttribute("morphNormal"+y)!==p[L]&&d.setAttribute("morphNormal"+y,p[L]),i[y]=I,w+=I):(m&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),p&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),i[y]=0)}const M=d.morphTargetsRelative?1:1-w;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function nf(s,t,e,n){let i=new WeakMap;function o(c){const h=n.render.frame,d=c.geometry,f=t.get(c,d);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return f}function a(){i=new WeakMap}function r(c){const h=c.target;h.removeEventListener("dispose",r),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}class rc extends Xe{constructor(t,e,n,i,o,a,r,c,h,d){if(d=d!==void 0?d:Jn,d!==Jn&&d!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Jn&&(n=Ln),n===void 0&&d===Ai&&(n=Kn),super(null,i,o,a,r,c,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Ve,this.minFilter=c!==void 0?c:Ve,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ac=new Xe,cc=new rc(1,1);cc.compareFunction=Xa;const lc=new Ka,hc=new kl,dc=new ic,oa=[],ra=[],aa=new Float32Array(16),ca=new Float32Array(9),la=new Float32Array(4);function Ii(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=oa[i];if(o===void 0&&(o=new Float32Array(i),oa[i]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,s[a].toArray(o,r)}return o}function Re(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ce(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Gs(s,t){let e=ra[t];e===void 0&&(e=new Int32Array(t),ra[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2fv(this.addr,t),Ce(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;s.uniform3fv(this.addr,t),Ce(e,t)}}function af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4fv(this.addr,t),Ce(e,t)}}function cf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;la.set(n),s.uniformMatrix2fv(this.addr,!1,la),Ce(e,n)}}function lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;ca.set(n),s.uniformMatrix3fv(this.addr,!1,ca),Ce(e,n)}}function hf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;aa.set(n),s.uniformMatrix4fv(this.addr,!1,aa),Ce(e,n)}}function df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2iv(this.addr,t),Ce(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3iv(this.addr,t),Ce(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4iv(this.addr,t),Ce(e,t)}}function mf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;s.uniform2uiv(this.addr,t),Ce(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;s.uniform3uiv(this.addr,t),Ce(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;s.uniform4uiv(this.addr,t),Ce(e,t)}}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const o=this.type===s.SAMPLER_2D_SHADOW?cc:ac;e.setTexture2D(t||o,i)}function vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hc,i)}function xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dc,i)}function Sf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lc,i)}function yf(s){switch(s){case 5126:return sf;case 35664:return of;case 35665:return rf;case 35666:return af;case 35674:return cf;case 35675:return lf;case 35676:return hf;case 5124:case 35670:return df;case 35667:case 35671:return uf;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return _f;case 36296:return Mf;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return Sf}}function bf(s,t){s.uniform1fv(this.addr,t)}function Ef(s,t){const e=Ii(t,this.size,2);s.uniform2fv(this.addr,e)}function Tf(s,t){const e=Ii(t,this.size,3);s.uniform3fv(this.addr,e)}function Af(s,t){const e=Ii(t,this.size,4);s.uniform4fv(this.addr,e)}function Pf(s,t){const e=Ii(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Rf(s,t){const e=Ii(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cf(s,t){const e=Ii(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Lf(s,t){s.uniform1iv(this.addr,t)}function If(s,t){s.uniform2iv(this.addr,t)}function Df(s,t){s.uniform3iv(this.addr,t)}function Uf(s,t){s.uniform4iv(this.addr,t)}function Nf(s,t){s.uniform1uiv(this.addr,t)}function Ff(s,t){s.uniform2uiv(this.addr,t)}function Of(s,t){s.uniform3uiv(this.addr,t)}function Gf(s,t){s.uniform4uiv(this.addr,t)}function Bf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ac,o[a])}function kf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||hc,o[a])}function zf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||dc,o[a])}function Vf(s,t,e){const n=this.cache,i=t.length,o=Gs(e,i);Re(n,o)||(s.uniform1iv(this.addr,o),Ce(n,o));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||lc,o[a])}function Hf(s){switch(s){case 5126:return bf;case 35664:return Ef;case 35665:return Tf;case 35666:return Af;case 35674:return Pf;case 35675:return Rf;case 35676:return Cf;case 5124:case 35670:return Lf;case 35667:case 35671:return If;case 35668:case 35672:return Df;case 35669:case 35673:return Uf;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Vf}}class Wf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class Xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hf(e.type)}}class qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(t,e[r.id],n)}}}const wo=/(\w+)(\])?(\[|\.)?/g;function ha(s,t){s.seq.push(t),s.map[t.id]=t}function Yf(s,t,e){const n=s.name,i=n.length;for(wo.lastIndex=0;;){const o=wo.exec(n),a=wo.lastIndex;let r=o[1];const c=o[2]==="]",h=o[3];if(c&&(r=r|0),h===void 0||h==="["&&a+2===i){ha(e,h===void 0?new Wf(r,s,t):new Xf(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new qf(r),ha(e,f)),e=f}}}class Es{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),a=t.getUniformLocation(e,o.name);Yf(o,a,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,a=e.length;o!==a;++o){const r=e[o],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function da(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Zf=37297;let Kf=0;function Jf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function jf(s){const t=ge.getPrimaries(ge.workingColorSpace),e=ge.getPrimaries(s);let n;switch(t===e?n="":t===Rs&&e===Ps?n="LinearDisplayP3ToLinearSRGB":t===Ps&&e===Rs&&(n="LinearSRGBToLinearDisplayP3"),s){case Sn:case Ns:return[n,"LinearTransferOETF"];case Ne:case ko:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ua(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Jf(s.getShaderSource(t),a)}else return i}function $f(s,t){const e=jf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qf(s,t){let e;switch(t){case jc:e="Linear";break;case $c:e="Reinhard";break;case Qc:e="OptimizedCineon";break;case Ua:e="ACESFilmic";break;case el:e="AgX";break;case tl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function t0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(xi).join(`
`)}function e0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(xi).join(`
`)}function n0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:r}}return e}function xi(s){return s!==""}function fa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(s){return s.replace(s0,r0)}const o0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function r0(s,t){let e=re[t];if(e===void 0){const n=o0.get(t);if(n!==void 0)e=re[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Uo(e)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ma(s){return s.replace(a0,c0)}function c0(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function ga(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function l0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Go?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ia?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function h0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ei:case Ti:t="ENVMAP_TYPE_CUBE";break;case Us:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ti:t="ENVMAP_MODE_REFRACTION";break}return t}function u0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Da:t="ENVMAP_BLENDING_MULTIPLY";break;case Kc:t="ENVMAP_BLENDING_MIX";break;case Jc:t="ENVMAP_BLENDING_ADD";break}return t}function f0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function p0(s,t,e,n){const i=s.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const c=l0(e),h=h0(e),d=d0(e),f=u0(e),l=f0(e),u=e.isWebGL2?"":t0(e),_=e0(e),v=n0(o),m=i.createProgram();let p,w,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(xi).join(`
`),p.length>0&&(p+=`
`),w=[u,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(xi).join(`
`),w.length>0&&(w+=`
`)):(p=[ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xi).join(`
`),w=[u,ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?re.tonemapping_pars_fragment:"",e.toneMapping!==Un?Qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",re.colorspace_pars_fragment,$f("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xi).join(`
`)),a=Uo(a),a=fa(a,e),a=pa(a,e),r=Uo(r),r=fa(r,e),r=pa(r,e),a=ma(a),r=ma(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ur?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ur?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const y=M+p+a,P=M+w+r,L=da(i,i.VERTEX_SHADER,y),I=da(i,i.FRAGMENT_SHADER,P);i.attachShader(m,L),i.attachShader(m,I),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function B(G){if(s.debug.checkShaderErrors){const rt=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(L).trim(),W=i.getShaderInfoLog(I).trim();let q=!0,V=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,L,I);else{const nt=ua(i,L,"vertex"),j=ua(i,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+rt+`
`+nt+`
`+j)}else rt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",rt):(U===""||W==="")&&(V=!1);V&&(G.diagnostics={runnable:q,programLog:rt,vertexShader:{log:U,prefix:p},fragmentShader:{log:W,prefix:w}})}i.deleteShader(L),i.deleteShader(I),S=new Es(i,m),x=i0(i,m)}let S;this.getUniforms=function(){return S===void 0&&B(this),S};let x;this.getAttributes=function(){return x===void 0&&B(this),x};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,Zf)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=L,this.fragmentShader=I,this}let m0=0;class g0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _0(t),e.set(t,n)),n}}class _0{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}}function M0(s,t,e,n,i,o,a){const r=new ja,c=new g0,h=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,l=i.vertexTextures;let u=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function m(S,x,T,G,rt){const U=G.fog,W=rt.geometry,q=S.isMeshStandardMaterial?G.environment:null,V=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),nt=V&&V.mapping===Us?V.image.height:null,j=_[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const J=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,H=J!==void 0?J.length:0;let ft=0;W.morphAttributes.position!==void 0&&(ft=1),W.morphAttributes.normal!==void 0&&(ft=2),W.morphAttributes.color!==void 0&&(ft=3);let Q,st,$,Mt;if(j){const Zt=cn[j];Q=Zt.vertexShader,st=Zt.fragmentShader}else Q=S.vertexShader,st=S.fragmentShader,c.update(S),$=c.getVertexShaderID(S),Mt=c.getFragmentShaderID(S);const pt=s.getRenderTarget(),yt=rt.isInstancedMesh===!0,Et=rt.isBatchedMesh===!0,dt=!!S.map,At=!!S.matcap,D=!!V,_t=!!S.aoMap,ct=!!S.lightMap,wt=!!S.bumpMap,ut=!!S.normalMap,Ot=!!S.displacementMap,lt=!!S.emissiveMap,A=!!S.metalnessMap,E=!!S.roughnessMap,X=S.anisotropy>0,xt=S.clearcoat>0,ht=S.iridescence>0,mt=S.sheen>0,It=S.transmission>0,Y=X&&!!S.anisotropyMap,Rt=xt&&!!S.clearcoatMap,Nt=xt&&!!S.clearcoatNormalMap,Ct=xt&&!!S.clearcoatRoughnessMap,vt=ht&&!!S.iridescenceMap,jt=ht&&!!S.iridescenceThicknessMap,Yt=mt&&!!S.sheenColorMap,Xt=mt&&!!S.sheenRoughnessMap,zt=!!S.specularMap,Lt=!!S.specularColorMap,$t=!!S.specularIntensityMap,ee=It&&!!S.transmissionMap,kt=It&&!!S.thicknessMap,Tt=!!S.gradientMap,St=!!S.alphaMap,b=S.alphaTest>0,z=!!S.alphaHash,et=!!S.extensions,Pt=!!W.attributes.uv1,Z=!!W.attributes.uv2,tt=!!W.attributes.uv3;let Dt=Un;return S.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Dt=s.toneMapping),{isWebGL2:d,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:Q,fragmentShader:st,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Et,instancing:yt,instancingColor:yt&&rt.instanceColor!==null,supportsVertexTextures:l,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Sn,map:dt,matcap:At,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:nt,aoMap:_t,lightMap:ct,bumpMap:wt,normalMap:ut,displacementMap:l&&Ot,emissiveMap:lt,normalMapObjectSpace:ut&&S.normalMapType===fl,normalMapTangentSpace:ut&&S.normalMapType===Wa,metalnessMap:A,roughnessMap:E,anisotropy:X,anisotropyMap:Y,clearcoat:xt,clearcoatMap:Rt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Ct,iridescence:ht,iridescenceMap:vt,iridescenceThicknessMap:jt,sheen:mt,sheenColorMap:Yt,sheenRoughnessMap:Xt,specularMap:zt,specularColorMap:Lt,specularIntensityMap:$t,transmission:It,transmissionMap:ee,thicknessMap:kt,gradientMap:Tt,opaque:S.transparent===!1&&S.blending===yi,alphaMap:St,alphaTest:b,alphaHash:z,combine:S.combine,mapUv:dt&&v(S.map.channel),aoMapUv:_t&&v(S.aoMap.channel),lightMapUv:ct&&v(S.lightMap.channel),bumpMapUv:wt&&v(S.bumpMap.channel),normalMapUv:ut&&v(S.normalMap.channel),displacementMapUv:Ot&&v(S.displacementMap.channel),emissiveMapUv:lt&&v(S.emissiveMap.channel),metalnessMapUv:A&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:Y&&v(S.anisotropyMap.channel),clearcoatMapUv:Rt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ct&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Xt&&v(S.sheenRoughnessMap.channel),specularMapUv:zt&&v(S.specularMap.channel),specularColorMapUv:Lt&&v(S.specularColorMap.channel),specularIntensityMapUv:$t&&v(S.specularIntensityMap.channel),transmissionMapUv:ee&&v(S.transmissionMap.channel),thicknessMapUv:kt&&v(S.thicknessMap.channel),alphaMapUv:St&&v(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(ut||X),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,vertexUv1s:Pt,vertexUv2s:Z,vertexUv3s:tt,pointsUvs:rt.isPoints===!0&&!!W.attributes.uv&&(dt||St),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:rt.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:ft,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:dt&&S.map.isVideoTexture===!0&&ge.getTransfer(S.map.colorSpace)===we,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Te,flipSided:S.side===He,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:et&&S.extensions.derivatives===!0,extensionFragDepth:et&&S.extensions.fragDepth===!0,extensionDrawBuffers:et&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:et&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:et&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)x.push(T),x.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(w(x,S),M(x,S),x.push(s.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){r.disableAll(),x.isWebGL2&&r.enable(0),x.supportsVertexTextures&&r.enable(1),x.instancing&&r.enable(2),x.instancingColor&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),S.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.skinning&&r.enable(4),x.morphTargets&&r.enable(5),x.morphNormals&&r.enable(6),x.morphColors&&r.enable(7),x.premultipliedAlpha&&r.enable(8),x.shadowMapEnabled&&r.enable(9),x.useLegacyLights&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),S.push(r.mask)}function y(S){const x=_[S.type];let T;if(x){const G=cn[x];T=Ql.clone(G.uniforms)}else T=S.uniforms;return T}function P(S,x){let T;for(let G=0,rt=h.length;G<rt;G++){const U=h[G];if(U.cacheKey===x){T=U,++T.usedTimes;break}}return T===void 0&&(T=new p0(s,x,S,o),h.push(T)),T}function L(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function I(S){c.remove(S)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:L,releaseShaderCache:I,programs:h,dispose:B}}function w0(){let s=new WeakMap;function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function e(o){s.delete(o)}function n(o,a,r){s.get(o)[a]=r}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function v0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _a(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ma(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function a(f,l,u,_,v,m){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:l,material:u,groupOrder:_,renderOrder:f.renderOrder,z:v,group:m},s[t]=p):(p.id=f.id,p.object=f,p.geometry=l,p.material=u,p.groupOrder=_,p.renderOrder=f.renderOrder,p.z=v,p.group=m),t++,p}function r(f,l,u,_,v,m){const p=a(f,l,u,_,v,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,l,u,_,v,m){const p=a(f,l,u,_,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,l){e.length>1&&e.sort(f||v0),n.length>1&&n.sort(l||_a),i.length>1&&i.sort(l||_a)}function d(){for(let f=t,l=s.length;f<l;f++){const u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:r,unshift:c,finish:d,sort:h}}function x0(){let s=new WeakMap;function t(n,i){const o=s.get(n);let a;return o===void 0?(a=new Ma,s.set(n,[a])):i>=o.length?(a=new Ma,o.push(a)):a=o[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function S0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new le};break;case"SpotLight":e={position:new N,direction:new N,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new le,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new le,groundColor:new le};break;case"RectAreaLight":e={color:new le,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function y0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let b0=0;function E0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function T0(s,t){const e=new S0,n=y0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new N);const o=new N,a=new be,r=new be;function c(d,f){let l=0,u=0,_=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let v=0,m=0,p=0,w=0,M=0,y=0,P=0,L=0,I=0,B=0,S=0;d.sort(E0);const x=f===!0?Math.PI:1;for(let G=0,rt=d.length;G<rt;G++){const U=d[G],W=U.color,q=U.intensity,V=U.distance,nt=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)l+=W.r*q*x,u+=W.g*q*x,_+=W.b*q*x;else if(U.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],q);S++}else if(U.isDirectionalLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const J=U.shadow,H=n.get(U);H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[v]=H,i.directionalShadowMap[v]=nt,i.directionalShadowMatrix[v]=U.shadow.matrix,y++}i.directional[v]=j,v++}else if(U.isSpotLight){const j=e.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(W).multiplyScalar(q*x),j.distance=V,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[p]=j;const J=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,J.updateMatrices(U),U.castShadow&&B++),i.spotLightMatrix[p]=J.matrix,U.castShadow){const H=n.get(U);H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[p]=H,i.spotShadowMap[p]=nt,L++}p++}else if(U.isRectAreaLight){const j=e.get(U);j.color.copy(W).multiplyScalar(q),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[w]=j,w++}else if(U.isPointLight){const j=e.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*x),j.distance=U.distance,j.decay=U.decay,U.castShadow){const J=U.shadow,H=n.get(U);H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[m]=H,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=U.shadow.matrix,P++}i.point[m]=j,m++}else if(U.isHemisphereLight){const j=e.get(U);j.skyColor.copy(U.color).multiplyScalar(q*x),j.groundColor.copy(U.groundColor).multiplyScalar(q*x),i.hemi[M]=j,M++}}w>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Gt.LTC_FLOAT_1,i.rectAreaLTC2=Gt.LTC_FLOAT_2):(i.rectAreaLTC1=Gt.LTC_HALF_1,i.rectAreaLTC2=Gt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Gt.LTC_FLOAT_1,i.rectAreaLTC2=Gt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Gt.LTC_HALF_1,i.rectAreaLTC2=Gt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==v||T.pointLength!==m||T.spotLength!==p||T.rectAreaLength!==w||T.hemiLength!==M||T.numDirectionalShadows!==y||T.numPointShadows!==P||T.numSpotShadows!==L||T.numSpotMaps!==I||T.numLightProbes!==S)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=w,i.point.length=m,i.hemi.length=M,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=L+I-B,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=S,T.directionalLength=v,T.pointLength=m,T.spotLength=p,T.rectAreaLength=w,T.hemiLength=M,T.numDirectionalShadows=y,T.numPointShadows=P,T.numSpotShadows=L,T.numSpotMaps=I,T.numLightProbes=S,i.version=b0++)}function h(d,f){let l=0,u=0,_=0,v=0,m=0;const p=f.matrixWorldInverse;for(let w=0,M=d.length;w<M;w++){const y=d[w];if(y.isDirectionalLight){const P=i.directional[l];P.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),l++}else if(y.isSpotLight){const P=i.spot[_];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),_++}else if(y.isRectAreaLight){const P=i.rectArea[v];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(p),r.identity(),a.copy(y.matrixWorld),a.premultiply(p),r.extractRotation(a),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(r),P.halfHeight.applyMatrix4(r),v++}else if(y.isPointLight){const P=i.point[u];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const P=i.hemi[m];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:i}}function wa(s,t){const e=new T0(s,t),n=[],i=[];function o(){n.length=0,i.length=0}function a(f){n.push(f)}function r(f){i.push(f)}function c(f){e.setup(n,f)}function h(f){e.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:r}}function A0(s,t){let e=new WeakMap;function n(o,a=0){const r=e.get(o);let c;return r===void 0?(c=new wa(s,t),e.set(o,[c])):a>=r.length?(c=new wa(s,t),r.push(c)):c=r[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class P0 extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R0 extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C0=`void main() {
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
}`;function I0(s,t,e){let n=new Vo;const i=new Ft,o=new Ft,a=new ve,r=new P0({depthPacking:ul}),c=new R0,h={},d=e.maxTextureSize,f={[Fn]:He,[He]:Fn,[Te]:Te},l=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:C0,fragmentShader:L0}),u=l.clone();u.defines.HORIZONTAL_PASS=1;const _=new Fe;_.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new g(_,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Go;let p=this.type;this.render=function(L,I,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const S=s.getRenderTarget(),x=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Dn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const rt=p!==wn&&this.type===wn,U=p===wn&&this.type!==wn;for(let W=0,q=L.length;W<q;W++){const V=L[W],nt=V.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;i.copy(nt.mapSize);const j=nt.getFrameExtents();if(i.multiply(j),o.copy(nt.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/j.x),i.x=o.x*j.x,nt.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/j.y),i.y=o.y*j.y,nt.mapSize.y=o.y)),nt.map===null||rt===!0||U===!0){const H=this.type!==wn?{minFilter:Ve,magFilter:Ve}:{};nt.map!==null&&nt.map.dispose(),nt.map=new $n(i.x,i.y,H),nt.map.texture.name=V.name+".shadowMap",nt.camera.updateProjectionMatrix()}s.setRenderTarget(nt.map),s.clear();const J=nt.getViewportCount();for(let H=0;H<J;H++){const ft=nt.getViewport(H);a.set(o.x*ft.x,o.y*ft.y,o.x*ft.z,o.y*ft.w),G.viewport(a),nt.updateMatrices(V,H),n=nt.getFrustum(),y(I,B,nt.camera,V,this.type)}nt.isPointLightShadow!==!0&&this.type===wn&&w(nt,B),nt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,x,T)};function w(L,I){const B=t.update(v);l.defines.VSM_SAMPLES!==L.blurSamples&&(l.defines.VSM_SAMPLES=L.blurSamples,u.defines.VSM_SAMPLES=L.blurSamples,l.needsUpdate=!0,u.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new $n(i.x,i.y)),l.uniforms.shadow_pass.value=L.map.texture,l.uniforms.resolution.value=L.mapSize,l.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(I,null,B,l,v,null),u.uniforms.shadow_pass.value=L.mapPass.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(I,null,B,u,v,null)}function M(L,I,B,S){let x=null;const T=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(T!==void 0)x=T;else if(x=B.isPointLight===!0?c:r,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const G=x.uuid,rt=I.uuid;let U=h[G];U===void 0&&(U={},h[G]=U);let W=U[rt];W===void 0&&(W=x.clone(),U[rt]=W,I.addEventListener("dispose",P)),x=W}if(x.visible=I.visible,x.wireframe=I.wireframe,S===wn?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:f[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,B.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=s.properties.get(x);G.light=B}return x}function y(L,I,B,S,x){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&x===wn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const rt=t.update(L),U=L.material;if(Array.isArray(U)){const W=rt.groups;for(let q=0,V=W.length;q<V;q++){const nt=W[q],j=U[nt.materialIndex];if(j&&j.visible){const J=M(L,j,S,x);L.onBeforeShadow(s,L,I,B,rt,J,nt),s.renderBufferDirect(B,null,rt,J,L,nt),L.onAfterShadow(s,L,I,B,rt,J,nt)}}}else if(U.visible){const W=M(L,U,S,x);L.onBeforeShadow(s,L,I,B,rt,W,null),s.renderBufferDirect(B,null,rt,W,L,null),L.onAfterShadow(s,L,I,B,rt,W,null)}}const G=L.children;for(let rt=0,U=G.length;rt<U;rt++)y(G[rt],I,B,S,x)}function P(L){L.target.removeEventListener("dispose",P);for(const B in h){const S=h[B],x=L.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function D0(s,t,e){const n=e.isWebGL2;function i(){let b=!1;const z=new ve;let et=null;const Pt=new ve(0,0,0,0);return{setMask:function(Z){et!==Z&&!b&&(s.colorMask(Z,Z,Z,Z),et=Z)},setLocked:function(Z){b=Z},setClear:function(Z,tt,Dt,Kt,Zt){Zt===!0&&(Z*=Kt,tt*=Kt,Dt*=Kt),z.set(Z,tt,Dt,Kt),Pt.equals(z)===!1&&(s.clearColor(Z,tt,Dt,Kt),Pt.copy(z))},reset:function(){b=!1,et=null,Pt.set(-1,0,0,0)}}}function o(){let b=!1,z=null,et=null,Pt=null;return{setTest:function(Z){Z?Et(s.DEPTH_TEST):dt(s.DEPTH_TEST)},setMask:function(Z){z!==Z&&!b&&(s.depthMask(Z),z=Z)},setFunc:function(Z){if(et!==Z){switch(Z){case Vc:s.depthFunc(s.NEVER);break;case Hc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case Ts:s.depthFunc(s.LEQUAL);break;case Xc:s.depthFunc(s.EQUAL);break;case qc:s.depthFunc(s.GEQUAL);break;case Yc:s.depthFunc(s.GREATER);break;case Zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=Z}},setLocked:function(Z){b=Z},setClear:function(Z){Pt!==Z&&(s.clearDepth(Z),Pt=Z)},reset:function(){b=!1,z=null,et=null,Pt=null}}}function a(){let b=!1,z=null,et=null,Pt=null,Z=null,tt=null,Dt=null,Kt=null,Zt=null;return{setTest:function(Vt){b||(Vt?Et(s.STENCIL_TEST):dt(s.STENCIL_TEST))},setMask:function(Vt){z!==Vt&&!b&&(s.stencilMask(Vt),z=Vt)},setFunc:function(Vt,he,Ut){(et!==Vt||Pt!==he||Z!==Ut)&&(s.stencilFunc(Vt,he,Ut),et=Vt,Pt=he,Z=Ut)},setOp:function(Vt,he,Ut){(tt!==Vt||Dt!==he||Kt!==Ut)&&(s.stencilOp(Vt,he,Ut),tt=Vt,Dt=he,Kt=Ut)},setLocked:function(Vt){b=Vt},setClear:function(Vt){Zt!==Vt&&(s.clearStencil(Vt),Zt=Vt)},reset:function(){b=!1,z=null,et=null,Pt=null,Z=null,tt=null,Dt=null,Kt=null,Zt=null}}}const r=new i,c=new o,h=new a,d=new WeakMap,f=new WeakMap;let l={},u={},_=new WeakMap,v=[],m=null,p=!1,w=null,M=null,y=null,P=null,L=null,I=null,B=null,S=new le(0,0,0),x=0,T=!1,G=null,rt=null,U=null,W=null,q=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,j=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(J)[1]),nt=j>=1):J.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),nt=j>=2);let H=null,ft={};const Q=s.getParameter(s.SCISSOR_BOX),st=s.getParameter(s.VIEWPORT),$=new ve().fromArray(Q),Mt=new ve().fromArray(st);function pt(b,z,et,Pt){const Z=new Uint8Array(4),tt=s.createTexture();s.bindTexture(b,tt),s.texParameteri(b,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(b,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<et;Dt++)n&&(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)?s.texImage3D(z,0,s.RGBA,1,1,Pt,0,s.RGBA,s.UNSIGNED_BYTE,Z):s.texImage2D(z+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Z);return tt}const yt={};yt[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(yt[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Et(s.DEPTH_TEST),c.setFunc(Ts),lt(!1),A(tr),Et(s.CULL_FACE),ut(Dn);function Et(b){l[b]!==!0&&(s.enable(b),l[b]=!0)}function dt(b){l[b]!==!1&&(s.disable(b),l[b]=!1)}function At(b,z){return u[b]!==z?(s.bindFramebuffer(b,z),u[b]=z,n&&(b===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=z),b===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=z)),!0):!1}function D(b,z){let et=v,Pt=!1;if(b)if(et=_.get(z),et===void 0&&(et=[],_.set(z,et)),b.isWebGLMultipleRenderTargets){const Z=b.texture;if(et.length!==Z.length||et[0]!==s.COLOR_ATTACHMENT0){for(let tt=0,Dt=Z.length;tt<Dt;tt++)et[tt]=s.COLOR_ATTACHMENT0+tt;et.length=Z.length,Pt=!0}}else et[0]!==s.COLOR_ATTACHMENT0&&(et[0]=s.COLOR_ATTACHMENT0,Pt=!0);else et[0]!==s.BACK&&(et[0]=s.BACK,Pt=!0);Pt&&(e.isWebGL2?s.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function _t(b){return m!==b?(s.useProgram(b),m=b,!0):!1}const ct={[Yn]:s.FUNC_ADD,[Ac]:s.FUNC_SUBTRACT,[Pc]:s.FUNC_REVERSE_SUBTRACT};if(n)ct[sr]=s.MIN,ct[or]=s.MAX;else{const b=t.get("EXT_blend_minmax");b!==null&&(ct[sr]=b.MIN_EXT,ct[or]=b.MAX_EXT)}const wt={[Rc]:s.ZERO,[Cc]:s.ONE,[Lc]:s.SRC_COLOR,[Ao]:s.SRC_ALPHA,[Oc]:s.SRC_ALPHA_SATURATE,[Nc]:s.DST_COLOR,[Dc]:s.DST_ALPHA,[Ic]:s.ONE_MINUS_SRC_COLOR,[Po]:s.ONE_MINUS_SRC_ALPHA,[Fc]:s.ONE_MINUS_DST_COLOR,[Uc]:s.ONE_MINUS_DST_ALPHA,[Gc]:s.CONSTANT_COLOR,[Bc]:s.ONE_MINUS_CONSTANT_COLOR,[kc]:s.CONSTANT_ALPHA,[zc]:s.ONE_MINUS_CONSTANT_ALPHA};function ut(b,z,et,Pt,Z,tt,Dt,Kt,Zt,Vt){if(b===Dn){p===!0&&(dt(s.BLEND),p=!1);return}if(p===!1&&(Et(s.BLEND),p=!0),b!==Tc){if(b!==w||Vt!==T){if((M!==Yn||L!==Yn)&&(s.blendEquation(s.FUNC_ADD),M=Yn,L=Yn),Vt)switch(b){case yi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.ONE,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case yi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,P=null,I=null,B=null,S.set(0,0,0),x=0,w=b,T=Vt}return}Z=Z||z,tt=tt||et,Dt=Dt||Pt,(z!==M||Z!==L)&&(s.blendEquationSeparate(ct[z],ct[Z]),M=z,L=Z),(et!==y||Pt!==P||tt!==I||Dt!==B)&&(s.blendFuncSeparate(wt[et],wt[Pt],wt[tt],wt[Dt]),y=et,P=Pt,I=tt,B=Dt),(Kt.equals(S)===!1||Zt!==x)&&(s.blendColor(Kt.r,Kt.g,Kt.b,Zt),S.copy(Kt),x=Zt),w=b,T=!1}function Ot(b,z){b.side===Te?dt(s.CULL_FACE):Et(s.CULL_FACE);let et=b.side===He;z&&(et=!et),lt(et),b.blending===yi&&b.transparent===!1?ut(Dn):ut(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),c.setFunc(b.depthFunc),c.setTest(b.depthTest),c.setMask(b.depthWrite),r.setMask(b.colorWrite);const Pt=b.stencilWrite;h.setTest(Pt),Pt&&(h.setMask(b.stencilWriteMask),h.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),h.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),X(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Et(s.SAMPLE_ALPHA_TO_COVERAGE):dt(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(b){G!==b&&(b?s.frontFace(s.CW):s.frontFace(s.CCW),G=b)}function A(b){b!==bc?(Et(s.CULL_FACE),b!==rt&&(b===tr?s.cullFace(s.BACK):b===Ec?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):dt(s.CULL_FACE),rt=b}function E(b){b!==U&&(nt&&s.lineWidth(b),U=b)}function X(b,z,et){b?(Et(s.POLYGON_OFFSET_FILL),(W!==z||q!==et)&&(s.polygonOffset(z,et),W=z,q=et)):dt(s.POLYGON_OFFSET_FILL)}function xt(b){b?Et(s.SCISSOR_TEST):dt(s.SCISSOR_TEST)}function ht(b){b===void 0&&(b=s.TEXTURE0+V-1),H!==b&&(s.activeTexture(b),H=b)}function mt(b,z,et){et===void 0&&(H===null?et=s.TEXTURE0+V-1:et=H);let Pt=ft[et];Pt===void 0&&(Pt={type:void 0,texture:void 0},ft[et]=Pt),(Pt.type!==b||Pt.texture!==z)&&(H!==et&&(s.activeTexture(et),H=et),s.bindTexture(b,z||yt[b]),Pt.type=b,Pt.texture=z)}function It(){const b=ft[H];b!==void 0&&b.type!==void 0&&(s.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function Y(){try{s.compressedTexImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Rt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Nt(){try{s.texSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ct(){try{s.texSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function vt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function jt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Yt(){try{s.texStorage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Xt(){try{s.texStorage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function zt(){try{s.texImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Lt(){try{s.texImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function $t(b){$.equals(b)===!1&&(s.scissor(b.x,b.y,b.z,b.w),$.copy(b))}function ee(b){Mt.equals(b)===!1&&(s.viewport(b.x,b.y,b.z,b.w),Mt.copy(b))}function kt(b,z){let et=f.get(z);et===void 0&&(et=new WeakMap,f.set(z,et));let Pt=et.get(b);Pt===void 0&&(Pt=s.getUniformBlockIndex(z,b.name),et.set(b,Pt))}function Tt(b,z){const Pt=f.get(z).get(b);d.get(z)!==Pt&&(s.uniformBlockBinding(z,Pt,b.__bindingPointIndex),d.set(z,Pt))}function St(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},H=null,ft={},u={},_=new WeakMap,v=[],m=null,p=!1,w=null,M=null,y=null,P=null,L=null,I=null,B=null,S=new le(0,0,0),x=0,T=!1,G=null,rt=null,U=null,W=null,q=null,$.set(0,0,s.canvas.width,s.canvas.height),Mt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),h.reset()}return{buffers:{color:r,depth:c,stencil:h},enable:Et,disable:dt,bindFramebuffer:At,drawBuffers:D,useProgram:_t,setBlending:ut,setMaterial:Ot,setFlipSided:lt,setCullFace:A,setLineWidth:E,setPolygonOffset:X,setScissorTest:xt,activeTexture:ht,bindTexture:mt,unbindTexture:It,compressedTexImage2D:Y,compressedTexImage3D:Rt,texImage2D:zt,texImage3D:Lt,updateUBOMapping:kt,uniformBlockBinding:Tt,texStorage2D:Yt,texStorage3D:Xt,texSubImage2D:Nt,texSubImage3D:Ct,compressedTexSubImage2D:vt,compressedTexSubImage3D:jt,scissor:$t,viewport:ee,reset:St}}function U0(s,t,e,n,i,o,a){const r=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const l=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,E){return u?new OffscreenCanvas(A,E):Is("canvas")}function v(A,E,X,xt){let ht=1;if((A.width>xt||A.height>xt)&&(ht=xt/Math.max(A.width,A.height)),ht<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const mt=E?Ls:Math.floor,It=mt(ht*A.width),Y=mt(ht*A.height);f===void 0&&(f=_(It,Y));const Rt=X?_(It,Y):f;return Rt.width=It,Rt.height=Y,Rt.getContext("2d").drawImage(A,0,0,It,Y),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+It+"x"+Y+")."),Rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return Do(A.width)&&Do(A.height)}function p(A){return r?!1:A.wrapS!==sn||A.wrapT!==sn||A.minFilter!==Ve&&A.minFilter!==je}function w(A,E){return A.generateMipmaps&&E&&A.minFilter!==Ve&&A.minFilter!==je}function M(A){s.generateMipmap(A)}function y(A,E,X,xt,ht=!1){if(r===!1)return E;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt=E;if(E===s.RED&&(X===s.FLOAT&&(mt=s.R32F),X===s.HALF_FLOAT&&(mt=s.R16F),X===s.UNSIGNED_BYTE&&(mt=s.R8)),E===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(mt=s.R8UI),X===s.UNSIGNED_SHORT&&(mt=s.R16UI),X===s.UNSIGNED_INT&&(mt=s.R32UI),X===s.BYTE&&(mt=s.R8I),X===s.SHORT&&(mt=s.R16I),X===s.INT&&(mt=s.R32I)),E===s.RG&&(X===s.FLOAT&&(mt=s.RG32F),X===s.HALF_FLOAT&&(mt=s.RG16F),X===s.UNSIGNED_BYTE&&(mt=s.RG8)),E===s.RGBA){const It=ht?As:ge.getTransfer(xt);X===s.FLOAT&&(mt=s.RGBA32F),X===s.HALF_FLOAT&&(mt=s.RGBA16F),X===s.UNSIGNED_BYTE&&(mt=It===we?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(mt=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(mt=s.RGB5_A1)}return(mt===s.R16F||mt===s.R32F||mt===s.RG16F||mt===s.RG32F||mt===s.RGBA16F||mt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),mt}function P(A,E,X){return w(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==Ve&&A.minFilter!==je?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function L(A){return A===Ve||A===rr||A===Xs?s.NEAREST:s.LINEAR}function I(A){const E=A.target;E.removeEventListener("dispose",I),S(E),E.isVideoTexture&&d.delete(E)}function B(A){const E=A.target;E.removeEventListener("dispose",B),T(E)}function S(A){const E=n.get(A);if(E.__webglInit===void 0)return;const X=A.source,xt=l.get(X);if(xt){const ht=xt[E.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&x(A),Object.keys(xt).length===0&&l.delete(X)}n.remove(A)}function x(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const X=A.source,xt=l.get(X);delete xt[E.__cacheKey],a.memory.textures--}function T(A){const E=A.texture,X=n.get(A),xt=n.get(E);if(xt.__webglTexture!==void 0&&(s.deleteTexture(xt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(X.__webglFramebuffer[ht]))for(let mt=0;mt<X.__webglFramebuffer[ht].length;mt++)s.deleteFramebuffer(X.__webglFramebuffer[ht][mt]);else s.deleteFramebuffer(X.__webglFramebuffer[ht]);X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer[ht])}else{if(Array.isArray(X.__webglFramebuffer))for(let ht=0;ht<X.__webglFramebuffer.length;ht++)s.deleteFramebuffer(X.__webglFramebuffer[ht]);else s.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&s.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&s.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ht=0;ht<X.__webglColorRenderbuffer.length;ht++)X.__webglColorRenderbuffer[ht]&&s.deleteRenderbuffer(X.__webglColorRenderbuffer[ht]);X.__webglDepthRenderbuffer&&s.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ht=0,mt=E.length;ht<mt;ht++){const It=n.get(E[ht]);It.__webglTexture&&(s.deleteTexture(It.__webglTexture),a.memory.textures--),n.remove(E[ht])}n.remove(E),n.remove(A)}let G=0;function rt(){G=0}function U(){const A=G;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),G+=1,A}function W(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function q(A,E){const X=n.get(A);if(A.isVideoTexture&&Ot(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const xt=A.image;if(xt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,A,E);return}}e.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+E)}function V(A,E){const X=n.get(A);if(A.version>0&&X.__version!==A.version){$(X,A,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+E)}function nt(A,E){const X=n.get(A);if(A.version>0&&X.__version!==A.version){$(X,A,E);return}e.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+E)}function j(A,E){const X=n.get(A);if(A.version>0&&X.__version!==A.version){Mt(X,A,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+E)}const J={[Me]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[Lo]:s.MIRRORED_REPEAT},H={[Ve]:s.NEAREST,[rr]:s.NEAREST_MIPMAP_NEAREST,[Xs]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[nl]:s.LINEAR_MIPMAP_NEAREST,[qi]:s.LINEAR_MIPMAP_LINEAR},ft={[pl]:s.NEVER,[vl]:s.ALWAYS,[ml]:s.LESS,[Xa]:s.LEQUAL,[gl]:s.EQUAL,[wl]:s.GEQUAL,[_l]:s.GREATER,[Ml]:s.NOTEQUAL};function Q(A,E,X){if(X?(s.texParameteri(A,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,J[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,H[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,H[E.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==sn||E.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,L(E.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==Ve&&E.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,ft[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const xt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Ve||E.minFilter!==Xs&&E.minFilter!==qi||E.type===In&&t.has("OES_texture_float_linear")===!1||r===!1&&E.type===Yi&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(A,xt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function st(A,E){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",I));const xt=E.source;let ht=l.get(xt);ht===void 0&&(ht={},l.set(xt,ht));const mt=W(E);if(mt!==A.__cacheKey){ht[mt]===void 0&&(ht[mt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,X=!0),ht[mt].usedTimes++;const It=ht[A.__cacheKey];It!==void 0&&(ht[A.__cacheKey].usedTimes--,It.usedTimes===0&&x(E)),A.__cacheKey=mt,A.__webglTexture=ht[mt].texture}return X}function $(A,E,X){let xt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(xt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(xt=s.TEXTURE_3D);const ht=st(A,E),mt=E.source;e.bindTexture(xt,A.__webglTexture,s.TEXTURE0+X);const It=n.get(mt);if(mt.version!==It.__version||ht===!0){e.activeTexture(s.TEXTURE0+X);const Y=ge.getPrimaries(ge.workingColorSpace),Rt=E.colorSpace===$e?null:ge.getPrimaries(E.colorSpace),Nt=E.colorSpace===$e||Y===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Ct=p(E)&&m(E.image)===!1;let vt=v(E.image,Ct,!1,i.maxTextureSize);vt=lt(E,vt);const jt=m(vt)||r,Yt=o.convert(E.format,E.colorSpace);let Xt=o.convert(E.type),zt=y(E.internalFormat,Yt,Xt,E.colorSpace,E.isVideoTexture);Q(xt,E,jt);let Lt;const $t=E.mipmaps,ee=r&&E.isVideoTexture!==!0&&zt!==Va,kt=It.__version===void 0||ht===!0,Tt=P(E,vt,jt);if(E.isDepthTexture)zt=s.DEPTH_COMPONENT,r?E.type===In?zt=s.DEPTH_COMPONENT32F:E.type===Ln?zt=s.DEPTH_COMPONENT24:E.type===Kn?zt=s.DEPTH24_STENCIL8:zt=s.DEPTH_COMPONENT16:E.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Jn&&zt===s.DEPTH_COMPONENT&&E.type!==Bo&&E.type!==Ln&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Ln,Xt=o.convert(E.type)),E.format===Ai&&zt===s.DEPTH_COMPONENT&&(zt=s.DEPTH_STENCIL,E.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Kn,Xt=o.convert(E.type))),kt&&(ee?e.texStorage2D(s.TEXTURE_2D,1,zt,vt.width,vt.height):e.texImage2D(s.TEXTURE_2D,0,zt,vt.width,vt.height,0,Yt,Xt,null));else if(E.isDataTexture)if($t.length>0&&jt){ee&&kt&&e.texStorage2D(s.TEXTURE_2D,Tt,zt,$t[0].width,$t[0].height);for(let St=0,b=$t.length;St<b;St++)Lt=$t[St],ee?e.texSubImage2D(s.TEXTURE_2D,St,0,0,Lt.width,Lt.height,Yt,Xt,Lt.data):e.texImage2D(s.TEXTURE_2D,St,zt,Lt.width,Lt.height,0,Yt,Xt,Lt.data);E.generateMipmaps=!1}else ee?(kt&&e.texStorage2D(s.TEXTURE_2D,Tt,zt,vt.width,vt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt.width,vt.height,Yt,Xt,vt.data)):e.texImage2D(s.TEXTURE_2D,0,zt,vt.width,vt.height,0,Yt,Xt,vt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ee&&kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,zt,$t[0].width,$t[0].height,vt.depth);for(let St=0,b=$t.length;St<b;St++)Lt=$t[St],E.format!==on?Yt!==null?ee?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,0,Lt.width,Lt.height,vt.depth,Yt,Lt.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,St,zt,Lt.width,Lt.height,vt.depth,0,Lt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage3D(s.TEXTURE_2D_ARRAY,St,0,0,0,Lt.width,Lt.height,vt.depth,Yt,Xt,Lt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,St,zt,Lt.width,Lt.height,vt.depth,0,Yt,Xt,Lt.data)}else{ee&&kt&&e.texStorage2D(s.TEXTURE_2D,Tt,zt,$t[0].width,$t[0].height);for(let St=0,b=$t.length;St<b;St++)Lt=$t[St],E.format!==on?Yt!==null?ee?e.compressedTexSubImage2D(s.TEXTURE_2D,St,0,0,Lt.width,Lt.height,Yt,Lt.data):e.compressedTexImage2D(s.TEXTURE_2D,St,zt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?e.texSubImage2D(s.TEXTURE_2D,St,0,0,Lt.width,Lt.height,Yt,Xt,Lt.data):e.texImage2D(s.TEXTURE_2D,St,zt,Lt.width,Lt.height,0,Yt,Xt,Lt.data)}else if(E.isDataArrayTexture)ee?(kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Tt,zt,vt.width,vt.height,vt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Yt,Xt,vt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,vt.width,vt.height,vt.depth,0,Yt,Xt,vt.data);else if(E.isData3DTexture)ee?(kt&&e.texStorage3D(s.TEXTURE_3D,Tt,zt,vt.width,vt.height,vt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Yt,Xt,vt.data)):e.texImage3D(s.TEXTURE_3D,0,zt,vt.width,vt.height,vt.depth,0,Yt,Xt,vt.data);else if(E.isFramebufferTexture){if(kt)if(ee)e.texStorage2D(s.TEXTURE_2D,Tt,zt,vt.width,vt.height);else{let St=vt.width,b=vt.height;for(let z=0;z<Tt;z++)e.texImage2D(s.TEXTURE_2D,z,zt,St,b,0,Yt,Xt,null),St>>=1,b>>=1}}else if($t.length>0&&jt){ee&&kt&&e.texStorage2D(s.TEXTURE_2D,Tt,zt,$t[0].width,$t[0].height);for(let St=0,b=$t.length;St<b;St++)Lt=$t[St],ee?e.texSubImage2D(s.TEXTURE_2D,St,0,0,Yt,Xt,Lt):e.texImage2D(s.TEXTURE_2D,St,zt,Yt,Xt,Lt);E.generateMipmaps=!1}else ee?(kt&&e.texStorage2D(s.TEXTURE_2D,Tt,zt,vt.width,vt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Yt,Xt,vt)):e.texImage2D(s.TEXTURE_2D,0,zt,Yt,Xt,vt);w(E,jt)&&M(xt),It.__version=mt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function Mt(A,E,X){if(E.image.length!==6)return;const xt=st(A,E),ht=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+X);const mt=n.get(ht);if(ht.version!==mt.__version||xt===!0){e.activeTexture(s.TEXTURE0+X);const It=ge.getPrimaries(ge.workingColorSpace),Y=E.colorSpace===$e?null:ge.getPrimaries(E.colorSpace),Rt=E.colorSpace===$e||It===Y?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const Nt=E.isCompressedTexture||E.image[0].isCompressedTexture,Ct=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let St=0;St<6;St++)!Nt&&!Ct?vt[St]=v(E.image[St],!1,!0,i.maxCubemapSize):vt[St]=Ct?E.image[St].image:E.image[St],vt[St]=lt(E,vt[St]);const jt=vt[0],Yt=m(jt)||r,Xt=o.convert(E.format,E.colorSpace),zt=o.convert(E.type),Lt=y(E.internalFormat,Xt,zt,E.colorSpace),$t=r&&E.isVideoTexture!==!0,ee=mt.__version===void 0||xt===!0;let kt=P(E,jt,Yt);Q(s.TEXTURE_CUBE_MAP,E,Yt);let Tt;if(Nt){$t&&ee&&e.texStorage2D(s.TEXTURE_CUBE_MAP,kt,Lt,jt.width,jt.height);for(let St=0;St<6;St++){Tt=vt[St].mipmaps;for(let b=0;b<Tt.length;b++){const z=Tt[b];E.format!==on?Xt!==null?$t?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,b,0,0,z.width,z.height,Xt,z.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,b,Lt,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,b,0,0,z.width,z.height,Xt,zt,z.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,b,Lt,z.width,z.height,0,Xt,zt,z.data)}}}else{Tt=E.mipmaps,$t&&ee&&(Tt.length>0&&kt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,kt,Lt,vt[0].width,vt[0].height));for(let St=0;St<6;St++)if(Ct){$t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,vt[St].width,vt[St].height,Xt,zt,vt[St].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Lt,vt[St].width,vt[St].height,0,Xt,zt,vt[St].data);for(let b=0;b<Tt.length;b++){const et=Tt[b].image[St].image;$t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,b+1,0,0,et.width,et.height,Xt,zt,et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,b+1,Lt,et.width,et.height,0,Xt,zt,et.data)}}else{$t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Xt,zt,vt[St]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,Lt,Xt,zt,vt[St]);for(let b=0;b<Tt.length;b++){const z=Tt[b];$t?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,b+1,0,0,Xt,zt,z.image[St]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+St,b+1,Lt,Xt,zt,z.image[St])}}}w(E,Yt)&&M(s.TEXTURE_CUBE_MAP),mt.__version=ht.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function pt(A,E,X,xt,ht,mt){const It=o.convert(X.format,X.colorSpace),Y=o.convert(X.type),Rt=y(X.internalFormat,It,Y,X.colorSpace);if(!n.get(E).__hasExternalTextures){const Ct=Math.max(1,E.width>>mt),vt=Math.max(1,E.height>>mt);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,mt,Rt,Ct,vt,E.depth,0,It,Y,null):e.texImage2D(ht,mt,Rt,Ct,vt,0,It,Y,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),ut(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xt,ht,n.get(X).__webglTexture,0,wt(E)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xt,ht,n.get(X).__webglTexture,mt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function yt(A,E,X){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let xt=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(X||ut(E)){const ht=E.depthTexture;ht&&ht.isDepthTexture&&(ht.type===In?xt=s.DEPTH_COMPONENT32F:ht.type===Ln&&(xt=s.DEPTH_COMPONENT24));const mt=wt(E);ut(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,mt,xt,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,mt,xt,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,xt,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const xt=wt(E);X&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,s.DEPTH24_STENCIL8,E.width,E.height):ut(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const xt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ht=0;ht<xt.length;ht++){const mt=xt[ht],It=o.convert(mt.format,mt.colorSpace),Y=o.convert(mt.type),Rt=y(mt.internalFormat,It,Y,mt.colorSpace),Nt=wt(E);X&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Nt,Rt,E.width,E.height):ut(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Nt,Rt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Rt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const xt=n.get(E.depthTexture).__webglTexture,ht=wt(E);if(E.depthTexture.format===Jn)ut(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0);else if(E.depthTexture.format===Ai)ut(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function dt(A){const E=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Et(E.__webglFramebuffer,A)}else if(X){E.__webglDepthbuffer=[];for(let xt=0;xt<6;xt++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[xt]),E.__webglDepthbuffer[xt]=s.createRenderbuffer(),yt(E.__webglDepthbuffer[xt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),yt(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function At(A,E,X){const xt=n.get(A);E!==void 0&&pt(xt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&dt(A)}function D(A){const E=A.texture,X=n.get(A),xt=n.get(E);A.addEventListener("dispose",B),A.isWebGLMultipleRenderTargets!==!0&&(xt.__webglTexture===void 0&&(xt.__webglTexture=s.createTexture()),xt.__version=E.version,a.memory.textures++);const ht=A.isWebGLCubeRenderTarget===!0,mt=A.isWebGLMultipleRenderTargets===!0,It=m(A)||r;if(ht){X.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(r&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[Y]=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)X.__webglFramebuffer[Y][Rt]=s.createFramebuffer()}else X.__webglFramebuffer[Y]=s.createFramebuffer()}else{if(r&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let Y=0;Y<E.mipmaps.length;Y++)X.__webglFramebuffer[Y]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(mt)if(i.drawBuffers){const Y=A.texture;for(let Rt=0,Nt=Y.length;Rt<Nt;Rt++){const Ct=n.get(Y[Rt]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&A.samples>0&&ut(A)===!1){const Y=mt?E:[E];X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Y.length;Rt++){const Nt=Y[Rt];X.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Rt]);const Ct=o.convert(Nt.format,Nt.colorSpace),vt=o.convert(Nt.type),jt=y(Nt.internalFormat,Ct,vt,Nt.colorSpace,A.isXRRenderTarget===!0),Yt=wt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Yt,jt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,X.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),yt(X.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){e.bindTexture(s.TEXTURE_CUBE_MAP,xt.__webglTexture),Q(s.TEXTURE_CUBE_MAP,E,It);for(let Y=0;Y<6;Y++)if(r&&E.mipmaps&&E.mipmaps.length>0)for(let Rt=0;Rt<E.mipmaps.length;Rt++)pt(X.__webglFramebuffer[Y][Rt],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Rt);else pt(X.__webglFramebuffer[Y],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);w(E,It)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){const Y=A.texture;for(let Rt=0,Nt=Y.length;Rt<Nt;Rt++){const Ct=Y[Rt],vt=n.get(Ct);e.bindTexture(s.TEXTURE_2D,vt.__webglTexture),Q(s.TEXTURE_2D,Ct,It),pt(X.__webglFramebuffer,A,Ct,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,0),w(Ct,It)&&M(s.TEXTURE_2D)}e.unbindTexture()}else{let Y=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(r?Y=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Y,xt.__webglTexture),Q(Y,E,It),r&&E.mipmaps&&E.mipmaps.length>0)for(let Rt=0;Rt<E.mipmaps.length;Rt++)pt(X.__webglFramebuffer[Rt],A,E,s.COLOR_ATTACHMENT0,Y,Rt);else pt(X.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,Y,0);w(E,It)&&M(Y),e.unbindTexture()}A.depthBuffer&&dt(A)}function _t(A){const E=m(A)||r,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let xt=0,ht=X.length;xt<ht;xt++){const mt=X[xt];if(w(mt,E)){const It=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Y=n.get(mt).__webglTexture;e.bindTexture(It,Y),M(It),e.unbindTexture()}}}function ct(A){if(r&&A.samples>0&&ut(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,xt=A.height;let ht=s.COLOR_BUFFER_BIT;const mt=[],It=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Y=n.get(A),Rt=A.isWebGLMultipleRenderTargets===!0;if(Rt)for(let Nt=0;Nt<E.length;Nt++)e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Y.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Y.__webglFramebuffer);for(let Nt=0;Nt<E.length;Nt++){mt.push(s.COLOR_ATTACHMENT0+Nt),A.depthBuffer&&mt.push(It);const Ct=Y.__ignoreDepthValues!==void 0?Y.__ignoreDepthValues:!1;if(Ct===!1&&(A.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),Rt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Nt]),Ct===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[It]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[It])),Rt){const vt=n.get(E[Nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,vt,0)}s.blitFramebuffer(0,0,X,xt,0,0,X,xt,ht,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,mt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let Nt=0;Nt<E.length;Nt++){e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Nt]);const Ct=n.get(E[Nt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Nt,s.TEXTURE_2D,Ct,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Y.__webglMultisampledFramebuffer)}}function wt(A){return Math.min(i.maxSamples,A.samples)}function ut(A){const E=n.get(A);return r&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ot(A){const E=a.render.frame;d.get(A)!==E&&(d.set(A,E),A.update())}function lt(A,E){const X=A.colorSpace,xt=A.format,ht=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Io||X!==Sn&&X!==$e&&(ge.getTransfer(X)===we?r===!1?t.has("EXT_sRGB")===!0&&xt===on?(A.format=Io,A.minFilter=je,A.generateMipmaps=!1):E=Ya.sRGBToLinear(E):(xt!==on||ht!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}this.allocateTextureUnit=U,this.resetTextureUnits=rt,this.setTexture2D=q,this.setTexture2DArray=V,this.setTexture3D=nt,this.setTextureCube=j,this.rebindTextures=At,this.setupRenderTarget=D,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ut}function N0(s,t,e){const n=e.isWebGL2;function i(o,a=$e){let r;const c=ge.getTransfer(a);if(o===Nn)return s.UNSIGNED_BYTE;if(o===Oa)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Ga)return s.UNSIGNED_SHORT_5_5_5_1;if(o===il)return s.BYTE;if(o===sl)return s.SHORT;if(o===Bo)return s.UNSIGNED_SHORT;if(o===Fa)return s.INT;if(o===Ln)return s.UNSIGNED_INT;if(o===In)return s.FLOAT;if(o===Yi)return n?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(o===ol)return s.ALPHA;if(o===on)return s.RGBA;if(o===rl)return s.LUMINANCE;if(o===al)return s.LUMINANCE_ALPHA;if(o===Jn)return s.DEPTH_COMPONENT;if(o===Ai)return s.DEPTH_STENCIL;if(o===Io)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(o===cl)return s.RED;if(o===Ba)return s.RED_INTEGER;if(o===ll)return s.RG;if(o===ka)return s.RG_INTEGER;if(o===za)return s.RGBA_INTEGER;if(o===qs||o===Ys||o===Zs||o===Ks)if(c===we)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Zs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Ks)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ar||o===cr||o===lr||o===hr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===ar)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===lr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===hr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Va)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===dr||o===ur)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(o===dr)return c===we?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===ur)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fr||o===pr||o===mr||o===gr||o===_r||o===Mr||o===wr||o===vr||o===xr||o===Sr||o===yr||o===br||o===Er||o===Tr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(o===fr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===pr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===mr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===gr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===_r)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Mr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===wr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===vr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===xr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Sr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===yr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===br)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Er)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Tr)return c===we?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===Js||o===Ar||o===Pr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(o===Js)return c===we?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ar)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Pr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===hl||o===Rr||o===Cr||o===Lr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(o===Js)return r.COMPRESSED_RED_RGTC1_EXT;if(o===Rr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Lr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Kn?n?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:i}}class F0 extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gt extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,a=null;const r=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(h,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],l=d.position.distanceTo(f.position),u=.02,_=.005;h.inputState.pinching&&l>u+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&l<=u-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new gt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class G0 extends Ci{constructor(t,e){super();const n=this;let i=null,o=1,a=null,r="local-floor",c=1,h=null,d=null,f=null,l=null,u=null,_=null;const v=e.getContextAttributes();let m=null,p=null;const w=[],M=[],y=new Ft;let P=null;const L=new We;L.layers.enable(1),L.viewport=new ve;const I=new We;I.layers.enable(2),I.viewport=new ve;const B=[L,I],S=new F0;S.layers.enable(1),S.layers.enable(2);let x=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let st=w[Q];return st===void 0&&(st=new vo,w[Q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Q){let st=w[Q];return st===void 0&&(st=new vo,w[Q]=st),st.getGripSpace()},this.getHand=function(Q){let st=w[Q];return st===void 0&&(st=new vo,w[Q]=st),st.getHandSpace()};function G(Q){const st=M.indexOf(Q.inputSource);if(st===-1)return;const $=w[st];$!==void 0&&($.update(Q.inputSource,Q.frame,h||a),$.dispatchEvent({type:Q.type,data:Q.inputSource}))}function rt(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",rt),i.removeEventListener("inputsourceschange",U);for(let Q=0;Q<w.length;Q++){const st=M[Q];st!==null&&(M[Q]=null,w[Q].disconnect(st))}x=null,T=null,t.setRenderTarget(m),u=null,l=null,f=null,i=null,p=null,ft.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Q){h=Q},this.getBaseLayer=function(){return l!==null?l:u},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",rt),i.addEventListener("inputsourceschange",U),v.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const st={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new $n(u.framebufferWidth,u.framebufferHeight,{format:on,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let st=null,$=null,Mt=null;v.depth&&(Mt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=v.stencil?Ai:Jn,$=v.stencil?Kn:Ln);const pt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:o};f=new XRWebGLBinding(i,e),l=f.createProjectionLayer(pt),i.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),p=new $n(l.textureWidth,l.textureHeight,{format:on,type:Nn,depthTexture:new rc(l.textureWidth,l.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const yt=t.properties.get(p);yt.__ignoreDepthValues=l.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(r),ft.setContext(i),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(Q){for(let st=0;st<Q.removed.length;st++){const $=Q.removed[st],Mt=M.indexOf($);Mt>=0&&(M[Mt]=null,w[Mt].disconnect($))}for(let st=0;st<Q.added.length;st++){const $=Q.added[st];let Mt=M.indexOf($);if(Mt===-1){for(let yt=0;yt<w.length;yt++)if(yt>=M.length){M.push($),Mt=yt;break}else if(M[yt]===null){M[yt]=$,Mt=yt;break}if(Mt===-1)break}const pt=w[Mt];pt&&pt.connect($)}}const W=new N,q=new N;function V(Q,st,$){W.setFromMatrixPosition(st.matrixWorld),q.setFromMatrixPosition($.matrixWorld);const Mt=W.distanceTo(q),pt=st.projectionMatrix.elements,yt=$.projectionMatrix.elements,Et=pt[14]/(pt[10]-1),dt=pt[14]/(pt[10]+1),At=(pt[9]+1)/pt[5],D=(pt[9]-1)/pt[5],_t=(pt[8]-1)/pt[0],ct=(yt[8]+1)/yt[0],wt=Et*_t,ut=Et*ct,Ot=Mt/(-_t+ct),lt=Ot*-_t;st.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(lt),Q.translateZ(Ot),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const A=Et+Ot,E=dt+Ot,X=wt-lt,xt=ut+(Mt-lt),ht=At*dt/E*A,mt=D*dt/E*A;Q.projectionMatrix.makePerspective(X,xt,ht,mt,A,E),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function nt(Q,st){st===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(st.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;S.near=I.near=L.near=Q.near,S.far=I.far=L.far=Q.far,(x!==S.near||T!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),x=S.near,T=S.far);const st=Q.parent,$=S.cameras;nt(S,st);for(let Mt=0;Mt<$.length;Mt++)nt($[Mt],st);$.length===2?V(S,L,I):S.projectionMatrix.copy(L.projectionMatrix),j(Q,S,st)};function j(Q,st,$){$===null?Q.matrix.copy(st.matrixWorld):(Q.matrix.copy($.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(st.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Pi*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(l===null&&u===null))return c},this.setFoveation=function(Q){c=Q,l!==null&&(l.fixedFoveation=Q),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Q)};let J=null;function H(Q,st){if(d=st.getViewerPose(h||a),_=st,d!==null){const $=d.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let Mt=!1;$.length!==S.cameras.length&&(S.cameras.length=0,Mt=!0);for(let pt=0;pt<$.length;pt++){const yt=$[pt];let Et=null;if(u!==null)Et=u.getViewport(yt);else{const At=f.getViewSubImage(l,yt);Et=At.viewport,pt===0&&(t.setRenderTargetTextures(p,At.colorTexture,l.ignoreDepthValues?void 0:At.depthStencilTexture),t.setRenderTarget(p))}let dt=B[pt];dt===void 0&&(dt=new We,dt.layers.enable(pt),dt.viewport=new ve,B[pt]=dt),dt.matrix.fromArray(yt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(yt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Et.x,Et.y,Et.width,Et.height),pt===0&&(S.matrix.copy(dt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Mt===!0&&S.cameras.push(dt)}}for(let $=0;$<w.length;$++){const Mt=M[$],pt=w[$];Mt!==null&&pt!==void 0&&pt.update(Mt,st,h||a)}J&&J(Q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),_=null}const ft=new sc;ft.setAnimationLoop(H),this.setAnimationLoop=function(Q){J=Q},this.dispose=function(){}}}function B0(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ec(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),f(m,p)):p.isMeshPhongMaterial?(o(m,p),d(m,p)):p.isMeshStandardMaterial?(o(m,p),l(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(o(m,p),_(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),v(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?c(m,p,w,M):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===He&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===He&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*M,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function l(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k0(s,t,e,n){let i={},o={},a=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,M){const y=M.program;n.uniformBlockBinding(w,y)}function h(w,M){let y=i[w.id];y===void 0&&(_(w),y=d(w),i[w.id]=y,w.addEventListener("dispose",m));const P=M.program;n.updateUBOMapping(w,P);const L=t.render.frame;o[w.id]!==L&&(l(w),o[w.id]=L)}function d(w){const M=f();w.__bindingPointIndex=M;const y=s.createBuffer(),P=w.__size,L=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,P,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,y),y}function f(){for(let w=0;w<r;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(w){const M=i[w.id],y=w.uniforms,P=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let L=0,I=y.length;L<I;L++){const B=Array.isArray(y[L])?y[L]:[y[L]];for(let S=0,x=B.length;S<x;S++){const T=B[S];if(u(T,L,S,P)===!0){const G=T.__offset,rt=Array.isArray(T.value)?T.value:[T.value];let U=0;for(let W=0;W<rt.length;W++){const q=rt[W],V=v(q);typeof q=="number"||typeof q=="boolean"?(T.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,G+U,T.__data)):q.isMatrix3?(T.__data[0]=q.elements[0],T.__data[1]=q.elements[1],T.__data[2]=q.elements[2],T.__data[3]=0,T.__data[4]=q.elements[3],T.__data[5]=q.elements[4],T.__data[6]=q.elements[5],T.__data[7]=0,T.__data[8]=q.elements[6],T.__data[9]=q.elements[7],T.__data[10]=q.elements[8],T.__data[11]=0):(q.toArray(T.__data,U),U+=V.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(w,M,y,P){const L=w.value,I=M+"_"+y;if(P[I]===void 0)return typeof L=="number"||typeof L=="boolean"?P[I]=L:P[I]=L.clone(),!0;{const B=P[I];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return P[I]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function _(w){const M=w.uniforms;let y=0;const P=16;for(let I=0,B=M.length;I<B;I++){const S=Array.isArray(M[I])?M[I]:[M[I]];for(let x=0,T=S.length;x<T;x++){const G=S[x],rt=Array.isArray(G.value)?G.value:[G.value];for(let U=0,W=rt.length;U<W;U++){const q=rt[U],V=v(q),nt=y%P;nt!==0&&P-nt<V.boundary&&(y+=P-nt),G.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=V.storage}}}const L=y%P;return L>0&&(y+=P-L),w.__size=y,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete o[M.id]}function p(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},o={}}return{bind:c,update:h,dispose:p}}class uc{constructor(t={}){const{canvas:e=Nl(),context:n=null,depth:i=!0,stencil:o=!0,alpha:a=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let l;n!==null?l=n.getContextAttributes().alpha:l=a;const u=new Uint32Array(4),_=new Int32Array(4);let v=null,m=null;const p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const M=this;let y=!1,P=0,L=0,I=null,B=-1,S=null;const x=new ve,T=new ve;let G=null;const rt=new le(0);let U=0,W=e.width,q=e.height,V=1,nt=null,j=null;const J=new ve(0,0,W,q),H=new ve(0,0,W,q);let ft=!1;const Q=new Vo;let st=!1,$=!1,Mt=null;const pt=new be,yt=new Ft,Et=new N,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function At(){return I===null?V:1}let D=n;function _t(R,K){for(let at=0;at<R.length;at++){const C=R[at],k=e.getContext(C,K);if(k!==null)return k}return null}try{const R={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Oo}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",b,!1),e.addEventListener("webglcontextcreationerror",z,!1),D===null){const K=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&K.shift(),D=_t(K,R),D===null)throw _t(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ct,wt,ut,Ot,lt,A,E,X,xt,ht,mt,It,Y,Rt,Nt,Ct,vt,jt,Yt,Xt,zt,Lt,$t,ee;function kt(){ct=new Ku(D),wt=new Hu(D,ct,t),ct.init(wt),Lt=new N0(D,ct,wt),ut=new D0(D,ct,wt),Ot=new $u(D),lt=new w0,A=new U0(D,ct,ut,lt,wt,Lt,Ot),E=new Xu(M),X=new Zu(M),xt=new rh(D,wt),$t=new zu(D,ct,xt,wt),ht=new Ju(D,xt,Ot,$t),mt=new nf(D,ht,xt,Ot),Yt=new ef(D,wt,A),Ct=new Wu(lt),It=new M0(M,E,X,ct,wt,$t,Ct),Y=new B0(M,lt),Rt=new x0,Nt=new A0(ct,wt),jt=new ku(M,E,X,ut,mt,l,c),vt=new I0(M,mt,wt),ee=new k0(D,Ot,wt,ut),Xt=new Vu(D,ct,Ot,wt),zt=new ju(D,ct,Ot,wt),Ot.programs=It.programs,M.capabilities=wt,M.extensions=ct,M.properties=lt,M.renderLists=Rt,M.shadowMap=vt,M.state=ut,M.info=Ot}kt();const Tt=new G0(M,D);this.xr=Tt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(R){R!==void 0&&(V=R,this.setSize(W,q,!1))},this.getSize=function(R){return R.set(W,q)},this.setSize=function(R,K,at=!0){if(Tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,q=K,e.width=Math.floor(R*V),e.height=Math.floor(K*V),at===!0&&(e.style.width=R+"px",e.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(W*V,q*V).floor()},this.setDrawingBufferSize=function(R,K,at){W=R,q=K,V=at,e.width=Math.floor(R*at),e.height=Math.floor(K*at),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(x)},this.getViewport=function(R){return R.copy(J)},this.setViewport=function(R,K,at,C){R.isVector4?J.set(R.x,R.y,R.z,R.w):J.set(R,K,at,C),ut.viewport(x.copy(J).multiplyScalar(V).floor())},this.getScissor=function(R){return R.copy(H)},this.setScissor=function(R,K,at,C){R.isVector4?H.set(R.x,R.y,R.z,R.w):H.set(R,K,at,C),ut.scissor(T.copy(H).multiplyScalar(V).floor())},this.getScissorTest=function(){return ft},this.setScissorTest=function(R){ut.setScissorTest(ft=R)},this.setOpaqueSort=function(R){nt=R},this.setTransparentSort=function(R){j=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(R=!0,K=!0,at=!0){let C=0;if(R){let k=!1;if(I!==null){const it=I.texture.format;k=it===za||it===ka||it===Ba}if(k){const it=I.texture.type,bt=it===Nn||it===Ln||it===Bo||it===Kn||it===Oa||it===Ga,Bt=jt.getClearColor(),Jt=jt.getClearAlpha(),ne=Bt.r,se=Bt.g,oe=Bt.b;bt?(u[0]=ne,u[1]=se,u[2]=oe,u[3]=Jt,D.clearBufferuiv(D.COLOR,0,u)):(_[0]=ne,_[1]=se,_[2]=oe,_[3]=Jt,D.clearBufferiv(D.COLOR,0,_))}else C|=D.COLOR_BUFFER_BIT}K&&(C|=D.DEPTH_BUFFER_BIT),at&&(C|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(C)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",b,!1),e.removeEventListener("webglcontextcreationerror",z,!1),Rt.dispose(),Nt.dispose(),lt.dispose(),E.dispose(),X.dispose(),mt.dispose(),$t.dispose(),ee.dispose(),It.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Zt),Tt.removeEventListener("sessionend",Vt),Mt&&(Mt.dispose(),Mt=null),he.stop()};function St(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Ot.autoReset,K=vt.enabled,at=vt.autoUpdate,C=vt.needsUpdate,k=vt.type;kt(),Ot.autoReset=R,vt.enabled=K,vt.autoUpdate=at,vt.needsUpdate=C,vt.type=k}function z(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function et(R){const K=R.target;K.removeEventListener("dispose",et),Pt(K)}function Pt(R){Z(R),lt.remove(R)}function Z(R){const K=lt.get(R).programs;K!==void 0&&(K.forEach(function(at){It.releaseProgram(at)}),R.isShaderMaterial&&It.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,at,C,k,it){K===null&&(K=dt);const bt=k.isMesh&&k.matrixWorld.determinant()<0,Bt=bn(R,K,at,C,k);ut.setMaterial(C,bt);let Jt=at.index,ne=1;if(C.wireframe===!0){if(Jt=ht.getWireframeAttribute(at),Jt===void 0)return;ne=2}const se=at.drawRange,oe=at.attributes.position;let Ee=se.start*ne,qe=(se.start+se.count)*ne;it!==null&&(Ee=Math.max(Ee,it.start*ne),qe=Math.min(qe,(it.start+it.count)*ne)),Jt!==null?(Ee=Math.max(Ee,0),qe=Math.min(qe,Jt.count)):oe!=null&&(Ee=Math.max(Ee,0),qe=Math.min(qe,oe.count));const Ie=qe-Ee;if(Ie<0||Ie===1/0)return;$t.setup(k,C,Bt,at,Jt);let fn,xe=Xt;if(Jt!==null&&(fn=xt.get(Jt),xe=zt,xe.setIndex(fn)),k.isMesh)C.wireframe===!0?(ut.setLineWidth(C.wireframeLinewidth*At()),xe.setMode(D.LINES)):xe.setMode(D.TRIANGLES);else if(k.isLine){let ae=C.linewidth;ae===void 0&&(ae=1),ut.setLineWidth(ae*At()),k.isLineSegments?xe.setMode(D.LINES):k.isLineLoop?xe.setMode(D.LINE_LOOP):xe.setMode(D.LINE_STRIP)}else k.isPoints?xe.setMode(D.POINTS):k.isSprite&&xe.setMode(D.TRIANGLES);if(k.isBatchedMesh)xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)xe.renderInstances(Ee,Ie,k.count);else if(at.isInstancedBufferGeometry){const ae=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,zs=Math.min(at.instanceCount,ae);xe.renderInstances(Ee,Ie,zs)}else xe.render(Ee,Ie)};function tt(R,K,at){R.transparent===!0&&R.side===Te&&R.forceSinglePass===!1?(R.side=He,R.needsUpdate=!0,Le(R,K,at),R.side=Fn,R.needsUpdate=!0,Le(R,K,at),R.side=Te):Le(R,K,at)}this.compile=function(R,K,at=null){at===null&&(at=R),m=Nt.get(at),m.init(),w.push(m),at.traverseVisible(function(k){k.isLight&&k.layers.test(K.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),R!==at&&R.traverseVisible(function(k){k.isLight&&k.layers.test(K.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights(M._useLegacyLights);const C=new Set;return R.traverse(function(k){const it=k.material;if(it)if(Array.isArray(it))for(let bt=0;bt<it.length;bt++){const Bt=it[bt];tt(Bt,at,k),C.add(Bt)}else tt(it,at,k),C.add(it)}),w.pop(),m=null,C},this.compileAsync=function(R,K,at=null){const C=this.compile(R,K,at);return new Promise(k=>{function it(){if(C.forEach(function(bt){lt.get(bt).currentProgram.isReady()&&C.delete(bt)}),C.size===0){k(R);return}setTimeout(it,10)}ct.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Dt=null;function Kt(R){Dt&&Dt(R)}function Zt(){he.stop()}function Vt(){he.start()}const he=new sc;he.setAnimationLoop(Kt),typeof self<"u"&&he.setContext(self),this.setAnimationLoop=function(R){Dt=R,Tt.setAnimationLoop(R),R===null?he.stop():he.start()},Tt.addEventListener("sessionstart",Zt),Tt.addEventListener("sessionend",Vt),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(K),K=Tt.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,K,I),m=Nt.get(R,w.length),m.init(),w.push(m),pt.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Q.setFromProjectionMatrix(pt),$=this.localClippingEnabled,st=Ct.init(this.clippingPlanes,$),v=Rt.get(R,p.length),v.init(),p.push(v),Ut(R,K,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(nt,j),this.info.render.frame++,st===!0&&Ct.beginShadows();const at=m.state.shadowsArray;if(vt.render(at,R,K),st===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(v,R),m.setupLights(M._useLegacyLights),K.isArrayCamera){const C=K.cameras;for(let k=0,it=C.length;k<it;k++){const bt=C[k];te(v,R,bt,bt.viewport)}}else te(v,R,K);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),R.isScene===!0&&R.onAfterRender(M,R,K),$t.resetDefaultState(),B=-1,S=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Ut(R,K,at,C){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){C&&Et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);const bt=mt.update(R),Bt=R.material;Bt.visible&&v.push(R,bt,Bt,at,Et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const bt=mt.update(R),Bt=R.material;if(C&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Et.copy(R.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Et.copy(bt.boundingSphere.center)),Et.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(Bt)){const Jt=bt.groups;for(let ne=0,se=Jt.length;ne<se;ne++){const oe=Jt[ne],Ee=Bt[oe.materialIndex];Ee&&Ee.visible&&v.push(R,bt,Ee,at,Et.z,oe)}}else Bt.visible&&v.push(R,bt,Bt,at,Et.z,null)}}const it=R.children;for(let bt=0,Bt=it.length;bt<Bt;bt++)Ut(it[bt],K,at,C)}function te(R,K,at,C){const k=R.opaque,it=R.transmissive,bt=R.transparent;m.setupLightsView(at),st===!0&&Ct.setGlobalState(M.clippingPlanes,at),it.length>0&&Wt(k,it,K,at),C&&ut.viewport(x.copy(C)),k.length>0&&me(k,K,at),it.length>0&&me(it,K,at),bt.length>0&&me(bt,K,at),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Wt(R,K,at,C){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;const it=wt.isWebGL2;Mt===null&&(Mt=new $n(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")?Yi:Nn,minFilter:qi,samples:it?4:0})),M.getDrawingBufferSize(yt),it?Mt.setSize(yt.x,yt.y):Mt.setSize(Ls(yt.x),Ls(yt.y));const bt=M.getRenderTarget();M.setRenderTarget(Mt),M.getClearColor(rt),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear();const Bt=M.toneMapping;M.toneMapping=Un,me(R,at,C),A.updateMultisampleRenderTarget(Mt),A.updateRenderTargetMipmap(Mt);let Jt=!1;for(let ne=0,se=K.length;ne<se;ne++){const oe=K[ne],Ee=oe.object,qe=oe.geometry,Ie=oe.material,fn=oe.group;if(Ie.side===Te&&Ee.layers.test(C.layers)){const xe=Ie.side;Ie.side=He,Ie.needsUpdate=!0,fe(Ee,at,C,qe,Ie,fn),Ie.side=xe,Ie.needsUpdate=!0,Jt=!0}}Jt===!0&&(A.updateMultisampleRenderTarget(Mt),A.updateRenderTargetMipmap(Mt)),M.setRenderTarget(bt),M.setClearColor(rt,U),M.toneMapping=Bt}function me(R,K,at){const C=K.isScene===!0?K.overrideMaterial:null;for(let k=0,it=R.length;k<it;k++){const bt=R[k],Bt=bt.object,Jt=bt.geometry,ne=C===null?bt.material:C,se=bt.group;Bt.layers.test(at.layers)&&fe(Bt,K,at,Jt,ne,se)}}function fe(R,K,at,C,k,it){R.onBeforeRender(M,K,at,C,k,it),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),k.onBeforeRender(M,K,at,C,R,it),k.transparent===!0&&k.side===Te&&k.forceSinglePass===!1?(k.side=He,k.needsUpdate=!0,M.renderBufferDirect(at,K,C,k,R,it),k.side=Fn,k.needsUpdate=!0,M.renderBufferDirect(at,K,C,k,R,it),k.side=Te):M.renderBufferDirect(at,K,C,k,R,it),R.onAfterRender(M,K,at,C,k,it)}function Le(R,K,at){K.isScene!==!0&&(K=dt);const C=lt.get(R),k=m.state.lights,it=m.state.shadowsArray,bt=k.state.version,Bt=It.getParameters(R,k.state,it,K,at),Jt=It.getProgramCacheKey(Bt);let ne=C.programs;C.environment=R.isMeshStandardMaterial?K.environment:null,C.fog=K.fog,C.envMap=(R.isMeshStandardMaterial?X:E).get(R.envMap||C.environment),ne===void 0&&(R.addEventListener("dispose",et),ne=new Map,C.programs=ne);let se=ne.get(Jt);if(se!==void 0){if(C.currentProgram===se&&C.lightsStateVersion===bt)return an(R,Bt),se}else Bt.uniforms=It.getUniforms(R),R.onBuild(at,Bt,M),R.onBeforeCompile(Bt,M),se=It.acquireProgram(Bt,Jt),ne.set(Jt,se),C.uniforms=Bt.uniforms;const oe=C.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(oe.clippingPlanes=Ct.uniform),an(R,Bt),C.needsLights=On(R),C.lightsStateVersion=bt,C.needsLights&&(oe.ambientLightColor.value=k.state.ambient,oe.lightProbe.value=k.state.probe,oe.directionalLights.value=k.state.directional,oe.directionalLightShadows.value=k.state.directionalShadow,oe.spotLights.value=k.state.spot,oe.spotLightShadows.value=k.state.spotShadow,oe.rectAreaLights.value=k.state.rectArea,oe.ltc_1.value=k.state.rectAreaLTC1,oe.ltc_2.value=k.state.rectAreaLTC2,oe.pointLights.value=k.state.point,oe.pointLightShadows.value=k.state.pointShadow,oe.hemisphereLights.value=k.state.hemi,oe.directionalShadowMap.value=k.state.directionalShadowMap,oe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,oe.spotShadowMap.value=k.state.spotShadowMap,oe.spotLightMatrix.value=k.state.spotLightMatrix,oe.spotLightMap.value=k.state.spotLightMap,oe.pointShadowMap.value=k.state.pointShadowMap,oe.pointShadowMatrix.value=k.state.pointShadowMatrix),C.currentProgram=se,C.uniformsList=null,se}function rn(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=Es.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function an(R,K){const at=lt.get(R);at.outputColorSpace=K.outputColorSpace,at.batching=K.batching,at.instancing=K.instancing,at.instancingColor=K.instancingColor,at.skinning=K.skinning,at.morphTargets=K.morphTargets,at.morphNormals=K.morphNormals,at.morphColors=K.morphColors,at.morphTargetsCount=K.morphTargetsCount,at.numClippingPlanes=K.numClippingPlanes,at.numIntersection=K.numClipIntersection,at.vertexAlphas=K.vertexAlphas,at.vertexTangents=K.vertexTangents,at.toneMapping=K.toneMapping}function bn(R,K,at,C,k){K.isScene!==!0&&(K=dt),A.resetTextureUnits();const it=K.fog,bt=C.isMeshStandardMaterial?K.environment:null,Bt=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Sn,Jt=(C.isMeshStandardMaterial?X:E).get(C.envMap||bt),ne=C.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,se=!!at.attributes.tangent&&(!!C.normalMap||C.anisotropy>0),oe=!!at.morphAttributes.position,Ee=!!at.morphAttributes.normal,qe=!!at.morphAttributes.color;let Ie=Un;C.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ie=M.toneMapping);const fn=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,xe=fn!==void 0?fn.length:0,ae=lt.get(C),zs=m.state.lights;if(st===!0&&($===!0||R!==S)){const Ke=R===S&&C.id===B;Ct.setState(C,R,Ke)}let ye=!1;C.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==zs.state.version||ae.outputColorSpace!==Bt||k.isBatchedMesh&&ae.batching===!1||!k.isBatchedMesh&&ae.batching===!0||k.isInstancedMesh&&ae.instancing===!1||!k.isInstancedMesh&&ae.instancing===!0||k.isSkinnedMesh&&ae.skinning===!1||!k.isSkinnedMesh&&ae.skinning===!0||k.isInstancedMesh&&ae.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&ae.instancingColor===!1&&k.instanceColor!==null||ae.envMap!==Jt||C.fog===!0&&ae.fog!==it||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Ct.numPlanes||ae.numIntersection!==Ct.numIntersection)||ae.vertexAlphas!==ne||ae.vertexTangents!==se||ae.morphTargets!==oe||ae.morphNormals!==Ee||ae.morphColors!==qe||ae.toneMapping!==Ie||wt.isWebGL2===!0&&ae.morphTargetsCount!==xe)&&(ye=!0):(ye=!0,ae.__version=C.version);let Gn=ae.currentProgram;ye===!0&&(Gn=Le(C,K,k));let $o=!1,Di=!1,Vs=!1;const Oe=Gn.getUniforms(),Bn=ae.uniforms;if(ut.useProgram(Gn.program)&&($o=!0,Di=!0,Vs=!0),C.id!==B&&(B=C.id,Di=!0),$o||S!==R){Oe.setValue(D,"projectionMatrix",R.projectionMatrix),Oe.setValue(D,"viewMatrix",R.matrixWorldInverse);const Ke=Oe.map.cameraPosition;Ke!==void 0&&Ke.setValue(D,Et.setFromMatrixPosition(R.matrixWorld)),wt.logarithmicDepthBuffer&&Oe.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(C.isMeshPhongMaterial||C.isMeshToonMaterial||C.isMeshLambertMaterial||C.isMeshBasicMaterial||C.isMeshStandardMaterial||C.isShaderMaterial)&&Oe.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Di=!0,Vs=!0)}if(k.isSkinnedMesh){Oe.setOptional(D,k,"bindMatrix"),Oe.setOptional(D,k,"bindMatrixInverse");const Ke=k.skeleton;Ke&&(wt.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Oe.setValue(D,"boneTexture",Ke.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(Oe.setOptional(D,k,"batchingTexture"),Oe.setValue(D,"batchingTexture",k._matricesTexture,A));const Hs=at.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0&&wt.isWebGL2===!0)&&Yt.update(k,at,Gn),(Di||ae.receiveShadow!==k.receiveShadow)&&(ae.receiveShadow=k.receiveShadow,Oe.setValue(D,"receiveShadow",k.receiveShadow)),C.isMeshGouraudMaterial&&C.envMap!==null&&(Bn.envMap.value=Jt,Bn.flipEnvMap.value=Jt.isCubeTexture&&Jt.isRenderTargetTexture===!1?-1:1),Di&&(Oe.setValue(D,"toneMappingExposure",M.toneMappingExposure),ae.needsLights&&un(Bn,Vs),it&&C.fog===!0&&Y.refreshFogUniforms(Bn,it),Y.refreshMaterialUniforms(Bn,C,V,q,Mt),Es.upload(D,rn(ae),Bn,A)),C.isShaderMaterial&&C.uniformsNeedUpdate===!0&&(Es.upload(D,rn(ae),Bn,A),C.uniformsNeedUpdate=!1),C.isSpriteMaterial&&Oe.setValue(D,"center",k.center),Oe.setValue(D,"modelViewMatrix",k.modelViewMatrix),Oe.setValue(D,"normalMatrix",k.normalMatrix),Oe.setValue(D,"modelMatrix",k.matrixWorld),C.isShaderMaterial||C.isRawShaderMaterial){const Ke=C.uniformsGroups;for(let Ws=0,yc=Ke.length;Ws<yc;Ws++)if(wt.isWebGL2){const Qo=Ke[Ws];ee.update(Qo,Gn),ee.bind(Qo,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function un(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function On(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(R,K,at){lt.get(R.texture).__webglTexture=K,lt.get(R.depthTexture).__webglTexture=at;const C=lt.get(R);C.__hasExternalTextures=!0,C.__hasExternalTextures&&(C.__autoAllocateDepthBuffer=at===void 0,C.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),C.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,K){const at=lt.get(R);at.__webglFramebuffer=K,at.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(R,K=0,at=0){I=R,P=K,L=at;let C=!0,k=null,it=!1,bt=!1;if(R){const Jt=lt.get(R);Jt.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(D.FRAMEBUFFER,null),C=!1):Jt.__webglFramebuffer===void 0?A.setupRenderTarget(R):Jt.__hasExternalTextures&&A.rebindTextures(R,lt.get(R.texture).__webglTexture,lt.get(R.depthTexture).__webglTexture);const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(bt=!0);const se=lt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(se[K])?k=se[K][at]:k=se[K],it=!0):wt.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?k=lt.get(R).__webglMultisampledFramebuffer:Array.isArray(se)?k=se[at]:k=se,x.copy(R.viewport),T.copy(R.scissor),G=R.scissorTest}else x.copy(J).multiplyScalar(V).floor(),T.copy(H).multiplyScalar(V).floor(),G=ft;if(ut.bindFramebuffer(D.FRAMEBUFFER,k)&&wt.drawBuffers&&C&&ut.drawBuffers(R,k),ut.viewport(x),ut.scissor(T),ut.setScissorTest(G),it){const Jt=lt.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+K,Jt.__webglTexture,at)}else if(bt){const Jt=lt.get(R.texture),ne=K||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Jt.__webglTexture,at||0,ne)}B=-1},this.readRenderTargetPixels=function(R,K,at,C,k,it,bt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=lt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&bt!==void 0&&(Bt=Bt[bt]),Bt){ut.bindFramebuffer(D.FRAMEBUFFER,Bt);try{const Jt=R.texture,ne=Jt.format,se=Jt.type;if(ne!==on&&Lt.convert(ne)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const oe=se===Yi&&(ct.has("EXT_color_buffer_half_float")||wt.isWebGL2&&ct.has("EXT_color_buffer_float"));if(se!==Nn&&Lt.convert(se)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(se===In&&(wt.isWebGL2||ct.has("OES_texture_float")||ct.has("WEBGL_color_buffer_float")))&&!oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-C&&at>=0&&at<=R.height-k&&D.readPixels(K,at,C,k,Lt.convert(ne),Lt.convert(se),it)}finally{const Jt=I!==null?lt.get(I).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,Jt)}}},this.copyFramebufferToTexture=function(R,K,at=0){const C=Math.pow(2,-at),k=Math.floor(K.image.width*C),it=Math.floor(K.image.height*C);A.setTexture2D(K,0),D.copyTexSubImage2D(D.TEXTURE_2D,at,0,0,R.x,R.y,k,it),ut.unbindTexture()},this.copyTextureToTexture=function(R,K,at,C=0){const k=K.image.width,it=K.image.height,bt=Lt.convert(at.format),Bt=Lt.convert(at.type);A.setTexture2D(at,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,at.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,at.unpackAlignment),K.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,C,R.x,R.y,k,it,bt,Bt,K.image.data):K.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,C,R.x,R.y,K.mipmaps[0].width,K.mipmaps[0].height,bt,K.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,C,R.x,R.y,bt,Bt,K.image),C===0&&at.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(R,K,at,C,k=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const it=R.max.x-R.min.x+1,bt=R.max.y-R.min.y+1,Bt=R.max.z-R.min.z+1,Jt=Lt.convert(C.format),ne=Lt.convert(C.type);let se;if(C.isData3DTexture)A.setTexture3D(C,0),se=D.TEXTURE_3D;else if(C.isDataArrayTexture||C.isCompressedArrayTexture)A.setTexture2DArray(C,0),se=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,C.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,C.unpackAlignment);const oe=D.getParameter(D.UNPACK_ROW_LENGTH),Ee=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qe=D.getParameter(D.UNPACK_SKIP_PIXELS),Ie=D.getParameter(D.UNPACK_SKIP_ROWS),fn=D.getParameter(D.UNPACK_SKIP_IMAGES),xe=at.isCompressedTexture?at.mipmaps[k]:at.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,xe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,R.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,R.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,R.min.z),at.isDataTexture||at.isData3DTexture?D.texSubImage3D(se,k,K.x,K.y,K.z,it,bt,Bt,Jt,ne,xe.data):at.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(se,k,K.x,K.y,K.z,it,bt,Bt,Jt,xe.data)):D.texSubImage3D(se,k,K.x,K.y,K.z,it,bt,Bt,Jt,ne,xe),D.pixelStorei(D.UNPACK_ROW_LENGTH,oe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,fn),k===0&&C.generateMipmaps&&D.generateMipmap(se),ut.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),ut.unbindTexture()},this.resetState=function(){P=0,L=0,I=null,ut.reset(),$t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ko?"display-p3":"srgb",e.unpackColorSpace=ge.workingColorSpace===Ns?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ne?jn:Ha}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===jn?Ne:Sn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class z0 extends uc{}z0.prototype.isWebGL1Renderer=!0;class Wo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new le(t),this.density=e}clone(){return new Wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class V0 extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class fc extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const va=new N,xa=new N,Sa=new be,xo=new Ja,xs=new Fs;class H0 extends Pe{constructor(t=new Fe,e=new fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)va.fromBufferAttribute(e,i-1),xa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=va.distanceTo(xa);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=o,t.ray.intersectsSphere(xs)===!1)return;Sa.copy(i).invert(),xo.copy(t.ray).applyMatrix4(Sa);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,h=new N,d=new N,f=new N,l=new N,u=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),w=Math.min(_.count,a.start+a.count);for(let M=p,y=w-1;M<y;M+=u){const P=_.getX(M),L=_.getX(M+1);if(h.fromBufferAttribute(m,P),d.fromBufferAttribute(m,L),xo.distanceSqToSegment(h,d,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const B=t.ray.origin.distanceTo(l);B<t.near||B>t.far||e.push({distance:B,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),w=Math.min(m.count,a.start+a.count);for(let M=p,y=w-1;M<y;M+=u){if(h.fromBufferAttribute(m,M),d.fromBufferAttribute(m,M+1),xo.distanceSqToSegment(h,d,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(l);L<t.near||L>t.far||e.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}class ie extends Xe{constructor(t,e,n,i,o,a,r,c,h){super(t,e,n,i,o,a,r,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,c=o-1,h;for(;r<=c;)if(i=Math.floor(r+(c-r)/2),h=n[i]-a,h<0)r=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(o-1);const d=n[i],l=n[i+1]-d,u=(a-d)/l;return(i+u)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const a=this.getPoint(i),r=this.getPoint(o),c=e||(a.isVector2?new Ft:new N);return c.copy(r).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],o=[],a=[],r=new N,c=new be;for(let u=0;u<=t;u++){const _=u/t;i[u]=this.getTangentAt(_,new N)}o[0]=new N,a[0]=new N;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),f=Math.abs(i[0].y),l=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),l<=h&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],r),a[0].crossVectors(i[0],o[0]);for(let u=1;u<=t;u++){if(o[u]=o[u-1].clone(),a[u]=a[u-1].clone(),r.crossVectors(i[u-1],i[u]),r.length()>Number.EPSILON){r.normalize();const _=Math.acos(Ue(i[u-1].dot(i[u]),-1,1));o[u].applyMatrix4(c.makeRotationAxis(r,_))}a[u].crossVectors(i[u],o[u])}if(e===!0){let u=Math.acos(Ue(o[0].dot(o[t]),-1,1));u/=t,i[0].dot(r.crossVectors(o[0],o[t]))>0&&(u=-u);for(let _=1;_<=t;_++)o[_].applyMatrix4(c.makeRotationAxis(i[_],u*_)),a[_].crossVectors(i[_],o[_])}return{tangents:i,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Xo extends dn{constructor(t=0,e=0,n=1,i=1,o=0,a=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=r,this.aRotation=c}getPoint(t,e){const n=e||new Ft,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(a?o=0:o=i),this.aClockwise===!0&&!a&&(o===i?o=-i:o=o-i);const r=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(r),h=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),l=c-this.aX,u=h-this.aY;c=l*d-u*f+this.aX,h=l*f+u*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class W0 extends Xo{constructor(t,e,n,i,o,a){super(t,e,n,n,i,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function qo(){let s=0,t=0,e=0,n=0;function i(o,a,r,c){s=o,t=r,e=-3*o+3*a-2*r-c,n=2*o-2*a+r+c}return{initCatmullRom:function(o,a,r,c,h){i(a,r,h*(r-o),h*(c-a))},initNonuniformCatmullRom:function(o,a,r,c,h,d,f){let l=(a-o)/h-(r-o)/(h+d)+(r-a)/d,u=(r-a)/d-(c-a)/(d+f)+(c-r)/f;l*=d,u*=d,i(a,r,l,u)},calc:function(o){const a=o*o,r=a*o;return s+t*o+e*a+n*r}}}const Ss=new N,So=new qo,yo=new qo,bo=new qo;class Cn extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,o=i.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),c=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:c===0&&r===o-1&&(r=o-2,c=1);let h,d;this.closed||r>0?h=i[(r-1)%o]:(Ss.subVectors(i[0],i[1]).add(i[0]),h=Ss);const f=i[r%o],l=i[(r+1)%o];if(this.closed||r+2<o?d=i[(r+2)%o]:(Ss.subVectors(i[o-1],i[o-2]).add(i[o-1]),d=Ss),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(l),u),m=Math.pow(l.distanceToSquared(d),u);v<1e-4&&(v=1),_<1e-4&&(_=v),m<1e-4&&(m=v),So.initNonuniformCatmullRom(h.x,f.x,l.x,d.x,_,v,m),yo.initNonuniformCatmullRom(h.y,f.y,l.y,d.y,_,v,m),bo.initNonuniformCatmullRom(h.z,f.z,l.z,d.z,_,v,m)}else this.curveType==="catmullrom"&&(So.initCatmullRom(h.x,f.x,l.x,d.x,this.tension),yo.initCatmullRom(h.y,f.y,l.y,d.y,this.tension),bo.initCatmullRom(h.z,f.z,l.z,d.z,this.tension));return n.set(So.calc(c),yo.calc(c),bo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ya(s,t,e,n,i){const o=(n-t)*.5,a=(i-e)*.5,r=s*s,c=s*r;return(2*e-2*n+o+a)*c+(-3*e+3*n-2*o-a)*r+o*s+e}function X0(s,t){const e=1-s;return e*e*t}function q0(s,t){return 2*(1-s)*s*t}function Y0(s,t){return s*s*t}function Hi(s,t,e,n){return X0(s,t)+q0(s,e)+Y0(s,n)}function Z0(s,t){const e=1-s;return e*e*e*t}function K0(s,t){const e=1-s;return 3*e*e*s*t}function J0(s,t){return 3*(1-s)*s*s*t}function j0(s,t){return s*s*s*t}function Wi(s,t,e,n,i){return Z0(s,t)+K0(s,e)+J0(s,n)+j0(s,i)}class pc extends dn{constructor(t=new Ft,e=new Ft,n=new Ft,i=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Ft){const n=e,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(Wi(t,i.x,o.x,a.x,r.x),Wi(t,i.y,o.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $0 extends dn{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(Wi(t,i.x,o.x,a.x,r.x),Wi(t,i.y,o.y,a.y,r.y),Wi(t,i.z,o.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mc extends dn{constructor(t=new Ft,e=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ft){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ft){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q0 extends dn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends dn{constructor(t=new Ft,e=new Ft,n=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ft){const n=e,i=this.v0,o=this.v1,a=this.v2;return n.set(Hi(t,i.x,o.x,a.x),Hi(t,i.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends dn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,o=this.v1,a=this.v2;return n.set(Hi(t,i.x,o.x,a.x),Hi(t,i.y,o.y,a.y),Hi(t,i.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ft){const n=e,i=this.points,o=(i.length-1)*t,a=Math.floor(o),r=o-a,c=i[a===0?a:a-1],h=i[a],d=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(ya(r,c.x,h.x,d.x,f.x),ya(r,c.y,h.y,d.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Ft().fromArray(i))}return this}}var Ds=Object.freeze({__proto__:null,ArcCurve:W0,CatmullRomCurve3:Cn,CubicBezierCurve:pc,CubicBezierCurve3:$0,EllipseCurve:Xo,LineCurve:mc,LineCurve3:Q0,QuadraticBezierCurve:gc,QuadraticBezierCurve3:_c,SplineCurve:Mc});class tp extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ds[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const a=i[o]-n,r=this.curves[o],c=r.getLength(),h=c===0?0:1-a/c;return r.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const a=o[i],r=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(r);for(let h=0;h<c.length;h++){const d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ds[i.type]().fromJSON(i))}return this}}class ba extends tp{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mc(this.currentPoint.clone(),new Ft(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new gc(this.currentPoint.clone(),new Ft(t,e),new Ft(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,a){const r=new pc(this.currentPoint.clone(),new Ft(t,e),new Ft(n,i),new Ft(o,a));return this.curves.push(r),this.currentPoint.set(o,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Mc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,a){const r=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+r,e+c,n,i,o,a),this}absarc(t,e,n,i,o,a){return this.absellipse(t,e,n,n,i,o,a),this}ellipse(t,e,n,i,o,a,r,c){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,i,o,a,r,c),this}absellipse(t,e,n,i,o,a,r,c){const h=new Xo(t,e,n,i,o,a,r,c);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $i extends Fe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],a=[],r=[],c=[],h=new N,d=new Ft;a.push(0,0,0),r.push(0,0,1),c.push(.5,.5);for(let f=0,l=3;f<=e;f++,l+=3){const u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),a.push(h.x,h.y,h.z),r.push(0,0,1),d.x=(a[l]/t+1)/2,d.y=(a[l+1]/t+1)/2,c.push(d.x,d.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new ue(a,3)),this.setAttribute("normal",new ue(r,3)),this.setAttribute("uv",new ue(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $i(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ot extends Fe{constructor(t=1,e=1,n=1,i=32,o=1,a=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:c};const h=this;i=Math.floor(i),o=Math.floor(o);const d=[],f=[],l=[],u=[];let _=0;const v=[],m=n/2;let p=0;w(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(u,2));function w(){const y=new N,P=new N;let L=0;const I=(e-t)/n;for(let B=0;B<=o;B++){const S=[],x=B/o,T=x*(e-t)+t;for(let G=0;G<=i;G++){const rt=G/i,U=rt*c+r,W=Math.sin(U),q=Math.cos(U);P.x=T*W,P.y=-x*n+m,P.z=T*q,f.push(P.x,P.y,P.z),y.set(W,I,q).normalize(),l.push(y.x,y.y,y.z),u.push(rt,1-x),S.push(_++)}v.push(S)}for(let B=0;B<i;B++)for(let S=0;S<o;S++){const x=v[S][B],T=v[S+1][B],G=v[S+1][B+1],rt=v[S][B+1];d.push(x,T,rt),d.push(T,G,rt),L+=6}h.addGroup(p,L,0),p+=L}function M(y){const P=_,L=new Ft,I=new N;let B=0;const S=y===!0?t:e,x=y===!0?1:-1;for(let G=1;G<=i;G++)f.push(0,m*x,0),l.push(0,x,0),u.push(.5,.5),_++;const T=_;for(let G=0;G<=i;G++){const U=G/i*c+r,W=Math.cos(U),q=Math.sin(U);I.x=S*q,I.y=m*x,I.z=S*W,f.push(I.x,I.y,I.z),l.push(0,x,0),L.x=W*.5+.5,L.y=q*.5*x+.5,u.push(L.x,L.y),_++}for(let G=0;G<i;G++){const rt=P+G,U=T+G;y===!0?d.push(U,U+1,rt):d.push(U+1,U,rt),B+=3}h.addGroup(p,B,y===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ot(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pe extends ot{constructor(t=1,e=1,n=32,i=1,o=!1,a=0,r=Math.PI*2){super(0,t,e,n,i,o,a,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:r}}static fromJSON(t){return new pe(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yo extends Fe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],a=[];r(i),h(n),d(),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(o.slice(),3)),this.setAttribute("uv",new ue(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(w){const M=new N,y=new N,P=new N;for(let L=0;L<e.length;L+=3)u(e[L+0],M),u(e[L+1],y),u(e[L+2],P),c(M,y,P,w)}function c(w,M,y,P){const L=P+1,I=[];for(let B=0;B<=L;B++){I[B]=[];const S=w.clone().lerp(y,B/L),x=M.clone().lerp(y,B/L),T=L-B;for(let G=0;G<=T;G++)G===0&&B===L?I[B][G]=S:I[B][G]=S.clone().lerp(x,G/T)}for(let B=0;B<L;B++)for(let S=0;S<2*(L-B)-1;S++){const x=Math.floor(S/2);S%2===0?(l(I[B][x+1]),l(I[B+1][x]),l(I[B][x])):(l(I[B][x+1]),l(I[B+1][x+1]),l(I[B+1][x]))}}function h(w){const M=new N;for(let y=0;y<o.length;y+=3)M.x=o[y+0],M.y=o[y+1],M.z=o[y+2],M.normalize().multiplyScalar(w),o[y+0]=M.x,o[y+1]=M.y,o[y+2]=M.z}function d(){const w=new N;for(let M=0;M<o.length;M+=3){w.x=o[M+0],w.y=o[M+1],w.z=o[M+2];const y=m(w)/2/Math.PI+.5,P=p(w)/Math.PI+.5;a.push(y,1-P)}_(),f()}function f(){for(let w=0;w<a.length;w+=6){const M=a[w+0],y=a[w+2],P=a[w+4],L=Math.max(M,y,P),I=Math.min(M,y,P);L>.9&&I<.1&&(M<.2&&(a[w+0]+=1),y<.2&&(a[w+2]+=1),P<.2&&(a[w+4]+=1))}}function l(w){o.push(w.x,w.y,w.z)}function u(w,M){const y=w*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function _(){const w=new N,M=new N,y=new N,P=new N,L=new Ft,I=new Ft,B=new Ft;for(let S=0,x=0;S<o.length;S+=9,x+=6){w.set(o[S+0],o[S+1],o[S+2]),M.set(o[S+3],o[S+4],o[S+5]),y.set(o[S+6],o[S+7],o[S+8]),L.set(a[x+0],a[x+1]),I.set(a[x+2],a[x+3]),B.set(a[x+4],a[x+5]),P.copy(w).add(M).add(y).divideScalar(3);const T=m(P);v(L,x+0,w,T),v(I,x+2,M,T),v(B,x+4,y,T)}}function v(w,M,y,P){P<0&&w.x===1&&(a[M]=w.x-1),y.x===0&&y.z===0&&(a[M]=P/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.vertices,t.indices,t.radius,t.details)}}class Zo extends Yo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zo(t.radius,t.detail)}}class wc extends ba{constructor(t){super(t),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ba().fromJSON(i))}return this}}const ep={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=vc(s,0,i,e,!0);const a=[];if(!o||o.next===o.prev)return a;let r,c,h,d,f,l,u;if(n&&(o=rp(s,t,o,e)),s.length>80*e){r=h=s[0],c=d=s[1];for(let _=e;_<i;_+=e)f=s[_],l=s[_+1],f<r&&(r=f),l<c&&(c=l),f>h&&(h=f),l>d&&(d=l);u=Math.max(h-r,d-c),u=u!==0?32767/u:0}return Zi(o,a,e,r,c,u,0),a}};function vc(s,t,e,n,i){let o,a;if(i===_p(s,t,e,n)>0)for(o=t;o<e;o+=n)a=Ea(o,s[o],s[o+1],a);else for(o=e-n;o>=t;o-=n)a=Ea(o,s[o],s[o+1],a);return a&&Bs(a,a.next)&&(Ji(a),a=a.next),a}function ti(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Bs(e,e.next)||Se(e.prev,e,e.next)===0)){if(Ji(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zi(s,t,e,n,i,o,a){if(!s)return;!a&&o&&dp(s,n,i,o);let r=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,o?ip(s,n,i,o):np(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),Ji(s),s=h.next,r=h.next;continue}if(s=h,s===r){a?a===1?(s=sp(ti(s),t,e),Zi(s,t,e,n,i,o,2)):a===2&&op(s,t,e,n,i,o):Zi(ti(s),t,e,n,i,o,1);break}}}function np(s){const t=s.prev,e=s,n=s.next;if(Se(t,e,n)>=0)return!1;const i=t.x,o=e.x,a=n.x,r=t.y,c=e.y,h=n.y,d=i<o?i<a?i:a:o<a?o:a,f=r<c?r<h?r:h:c<h?c:h,l=i>o?i>a?i:a:o>a?o:a,u=r>c?r>h?r:h:c>h?c:h;let _=n.next;for(;_!==t;){if(_.x>=d&&_.x<=l&&_.y>=f&&_.y<=u&&Si(i,r,o,c,a,h,_.x,_.y)&&Se(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function ip(s,t,e,n){const i=s.prev,o=s,a=s.next;if(Se(i,o,a)>=0)return!1;const r=i.x,c=o.x,h=a.x,d=i.y,f=o.y,l=a.y,u=r<c?r<h?r:h:c<h?c:h,_=d<f?d<l?d:l:f<l?f:l,v=r>c?r>h?r:h:c>h?c:h,m=d>f?d>l?d:l:f>l?f:l,p=No(u,_,t,e,n),w=No(v,m,t,e,n);let M=s.prevZ,y=s.nextZ;for(;M&&M.z>=p&&y&&y.z<=w;){if(M.x>=u&&M.x<=v&&M.y>=_&&M.y<=m&&M!==i&&M!==a&&Si(r,d,c,f,h,l,M.x,M.y)&&Se(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=u&&y.x<=v&&y.y>=_&&y.y<=m&&y!==i&&y!==a&&Si(r,d,c,f,h,l,y.x,y.y)&&Se(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=u&&M.x<=v&&M.y>=_&&M.y<=m&&M!==i&&M!==a&&Si(r,d,c,f,h,l,M.x,M.y)&&Se(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=w;){if(y.x>=u&&y.x<=v&&y.y>=_&&y.y<=m&&y!==i&&y!==a&&Si(r,d,c,f,h,l,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function sp(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!Bs(i,o)&&xc(i,n,n.next,o)&&Ki(i,o)&&Ki(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Ji(n),Ji(n.next),n=s=o),n=n.next}while(n!==s);return ti(n)}function op(s,t,e,n,i,o){let a=s;do{let r=a.next.next;for(;r!==a.prev;){if(a.i!==r.i&&pp(a,r)){let c=Sc(a,r);a=ti(a,a.next),c=ti(c,c.next),Zi(a,t,e,n,i,o,0),Zi(c,t,e,n,i,o,0);return}r=r.next}a=a.next}while(a!==s)}function rp(s,t,e,n){const i=[];let o,a,r,c,h;for(o=0,a=t.length;o<a;o++)r=t[o]*n,c=o<a-1?t[o+1]*n:s.length,h=vc(s,r,c,n,!1),h===h.next&&(h.steiner=!0),i.push(fp(h));for(i.sort(ap),o=0;o<i.length;o++)e=cp(i[o],e);return e}function ap(s,t){return s.x-t.x}function cp(s,t){const e=lp(s,t);if(!e)return t;const n=Sc(e,s);return ti(n,n.next),ti(e,e.next)}function lp(s,t){let e=t,n=-1/0,i;const o=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const l=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=o&&l>n&&(n=l,i=e.x<e.next.x?e:e.next,l===o))return i}e=e.next}while(e!==t);if(!i)return null;const r=i,c=i.x,h=i.y;let d=1/0,f;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&Si(a<h?o:n,a,c,h,a<h?n:o,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(o-e.x),Ki(e,s)&&(f<d||f===d&&(e.x>i.x||e.x===i.x&&hp(i,e)))&&(i=e,d=f)),e=e.next;while(e!==r);return i}function hp(s,t){return Se(s.prev,s,t.prev)<0&&Se(t.next,s,s.next)<0}function dp(s,t,e,n){let i=s;do i.z===0&&(i.z=No(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,up(i)}function up(s){let t,e,n,i,o,a,r,c,h=1;do{for(e=s,s=null,o=null,a=0;e;){for(a++,n=e,r=0,t=0;t<h&&(r++,n=n.nextZ,!!n);t++);for(c=h;r>0||c>0&&n;)r!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,r--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,h*=2}while(a>1);return s}function No(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function fp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Si(s,t,e,n,i,o,a,r){return(i-a)*(t-r)>=(s-a)*(o-r)&&(s-a)*(n-r)>=(e-a)*(t-r)&&(e-a)*(o-r)>=(i-a)*(n-r)}function pp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!mp(s,t)&&(Ki(s,t)&&Ki(t,s)&&gp(s,t)&&(Se(s.prev,s,t.prev)||Se(s,t.prev,t))||Bs(s,t)&&Se(s.prev,s,s.next)>0&&Se(t.prev,t,t.next)>0)}function Se(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Bs(s,t){return s.x===t.x&&s.y===t.y}function xc(s,t,e,n){const i=bs(Se(s,t,e)),o=bs(Se(s,t,n)),a=bs(Se(e,n,s)),r=bs(Se(e,n,t));return!!(i!==o&&a!==r||i===0&&ys(s,e,t)||o===0&&ys(s,n,t)||a===0&&ys(e,s,n)||r===0&&ys(e,t,n))}function ys(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function bs(s){return s>0?1:s<0?-1:0}function mp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&xc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ki(s,t){return Se(s.prev,s,s.next)<0?Se(s,t,s.next)>=0&&Se(s,s.prev,t)>=0:Se(s,t,s.prev)<0||Se(s,s.next,t)<0}function gp(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Sc(s,t){const e=new Fo(s.i,s.x,s.y),n=new Fo(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ea(s,t,e,n){const i=new Fo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ji(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Fo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _p(s,t,e,n){let i=0;for(let o=t,a=e-n;o<e;o+=n)i+=(s[a]-s[o])*(s[o+1]+s[a+1]),a=o;return i}class Xi{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Xi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Ta(t),Aa(n,t);let a=t.length;e.forEach(Ta);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Aa(n,e[c]);const r=ep.triangulate(n,i);for(let c=0;c<r.length;c+=3)o.push(r.slice(c,c+3));return o}}function Ta(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Aa(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Ko extends Fe{constructor(t=new wc([new Ft(.5,.5),new Ft(-.5,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let r=0,c=t.length;r<c;r++){const h=t[r];a(h)}this.setAttribute("position",new ue(i,3)),this.setAttribute("uv",new ue(o,2)),this.computeVertexNormals();function a(r){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let l=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:u-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Mp;let M,y=!1,P,L,I,B;p&&(M=p.getSpacedPoints(d),y=!0,l=!1,P=p.computeFrenetFrames(d,!1),L=new N,I=new N,B=new N),l||(m=0,u=0,_=0,v=0);const S=r.extractPoints(h);let x=S.shape;const T=S.holes;if(!Xi.isClockWise(x)){x=x.reverse();for(let D=0,_t=T.length;D<_t;D++){const ct=T[D];Xi.isClockWise(ct)&&(T[D]=ct.reverse())}}const rt=Xi.triangulateShape(x,T),U=x;for(let D=0,_t=T.length;D<_t;D++){const ct=T[D];x=x.concat(ct)}function W(D,_t,ct){return _t||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(_t,ct)}const q=x.length,V=rt.length;function nt(D,_t,ct){let wt,ut,Ot;const lt=D.x-_t.x,A=D.y-_t.y,E=ct.x-D.x,X=ct.y-D.y,xt=lt*lt+A*A,ht=lt*X-A*E;if(Math.abs(ht)>Number.EPSILON){const mt=Math.sqrt(xt),It=Math.sqrt(E*E+X*X),Y=_t.x-A/mt,Rt=_t.y+lt/mt,Nt=ct.x-X/It,Ct=ct.y+E/It,vt=((Nt-Y)*X-(Ct-Rt)*E)/(lt*X-A*E);wt=Y+lt*vt-D.x,ut=Rt+A*vt-D.y;const jt=wt*wt+ut*ut;if(jt<=2)return new Ft(wt,ut);Ot=Math.sqrt(jt/2)}else{let mt=!1;lt>Number.EPSILON?E>Number.EPSILON&&(mt=!0):lt<-Number.EPSILON?E<-Number.EPSILON&&(mt=!0):Math.sign(A)===Math.sign(X)&&(mt=!0),mt?(wt=-A,ut=lt,Ot=Math.sqrt(xt)):(wt=lt,ut=A,Ot=Math.sqrt(xt/2))}return new Ft(wt/Ot,ut/Ot)}const j=[];for(let D=0,_t=U.length,ct=_t-1,wt=D+1;D<_t;D++,ct++,wt++)ct===_t&&(ct=0),wt===_t&&(wt=0),j[D]=nt(U[D],U[ct],U[wt]);const J=[];let H,ft=j.concat();for(let D=0,_t=T.length;D<_t;D++){const ct=T[D];H=[];for(let wt=0,ut=ct.length,Ot=ut-1,lt=wt+1;wt<ut;wt++,Ot++,lt++)Ot===ut&&(Ot=0),lt===ut&&(lt=0),H[wt]=nt(ct[wt],ct[Ot],ct[lt]);J.push(H),ft=ft.concat(H)}for(let D=0;D<m;D++){const _t=D/m,ct=u*Math.cos(_t*Math.PI/2),wt=_*Math.sin(_t*Math.PI/2)+v;for(let ut=0,Ot=U.length;ut<Ot;ut++){const lt=W(U[ut],j[ut],wt);pt(lt.x,lt.y,-ct)}for(let ut=0,Ot=T.length;ut<Ot;ut++){const lt=T[ut];H=J[ut];for(let A=0,E=lt.length;A<E;A++){const X=W(lt[A],H[A],wt);pt(X.x,X.y,-ct)}}}const Q=_+v;for(let D=0;D<q;D++){const _t=l?W(x[D],ft[D],Q):x[D];y?(I.copy(P.normals[0]).multiplyScalar(_t.x),L.copy(P.binormals[0]).multiplyScalar(_t.y),B.copy(M[0]).add(I).add(L),pt(B.x,B.y,B.z)):pt(_t.x,_t.y,0)}for(let D=1;D<=d;D++)for(let _t=0;_t<q;_t++){const ct=l?W(x[_t],ft[_t],Q):x[_t];y?(I.copy(P.normals[D]).multiplyScalar(ct.x),L.copy(P.binormals[D]).multiplyScalar(ct.y),B.copy(M[D]).add(I).add(L),pt(B.x,B.y,B.z)):pt(ct.x,ct.y,f/d*D)}for(let D=m-1;D>=0;D--){const _t=D/m,ct=u*Math.cos(_t*Math.PI/2),wt=_*Math.sin(_t*Math.PI/2)+v;for(let ut=0,Ot=U.length;ut<Ot;ut++){const lt=W(U[ut],j[ut],wt);pt(lt.x,lt.y,f+ct)}for(let ut=0,Ot=T.length;ut<Ot;ut++){const lt=T[ut];H=J[ut];for(let A=0,E=lt.length;A<E;A++){const X=W(lt[A],H[A],wt);y?pt(X.x,X.y+M[d-1].y,M[d-1].x+ct):pt(X.x,X.y,f+ct)}}}st(),$();function st(){const D=i.length/3;if(l){let _t=0,ct=q*_t;for(let wt=0;wt<V;wt++){const ut=rt[wt];yt(ut[2]+ct,ut[1]+ct,ut[0]+ct)}_t=d+m*2,ct=q*_t;for(let wt=0;wt<V;wt++){const ut=rt[wt];yt(ut[0]+ct,ut[1]+ct,ut[2]+ct)}}else{for(let _t=0;_t<V;_t++){const ct=rt[_t];yt(ct[2],ct[1],ct[0])}for(let _t=0;_t<V;_t++){const ct=rt[_t];yt(ct[0]+q*d,ct[1]+q*d,ct[2]+q*d)}}n.addGroup(D,i.length/3-D,0)}function $(){const D=i.length/3;let _t=0;Mt(U,_t),_t+=U.length;for(let ct=0,wt=T.length;ct<wt;ct++){const ut=T[ct];Mt(ut,_t),_t+=ut.length}n.addGroup(D,i.length/3-D,1)}function Mt(D,_t){let ct=D.length;for(;--ct>=0;){const wt=ct;let ut=ct-1;ut<0&&(ut=D.length-1);for(let Ot=0,lt=d+m*2;Ot<lt;Ot++){const A=q*Ot,E=q*(Ot+1),X=_t+wt+A,xt=_t+ut+A,ht=_t+ut+E,mt=_t+wt+E;Et(X,xt,ht,mt)}}}function pt(D,_t,ct){c.push(D),c.push(_t),c.push(ct)}function yt(D,_t,ct){dt(D),dt(_t),dt(ct);const wt=i.length/3,ut=w.generateTopUV(n,i,wt-3,wt-2,wt-1);At(ut[0]),At(ut[1]),At(ut[2])}function Et(D,_t,ct,wt){dt(D),dt(_t),dt(wt),dt(_t),dt(ct),dt(wt);const ut=i.length/3,Ot=w.generateSideWallUV(n,i,ut-6,ut-3,ut-2,ut-1);At(Ot[0]),At(Ot[1]),At(Ot[3]),At(Ot[1]),At(Ot[2]),At(Ot[3])}function dt(D){i.push(c[D*3+0]),i.push(c[D*3+1]),i.push(c[D*3+2])}function At(D){o.push(D.x),o.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return wp(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,a=t.shapes.length;o<a;o++){const r=e[t.shapes[o]];n.push(r)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ds[i.type]().fromJSON(i)),new Ko(n,t.options)}}const Mp={generateTopUV:function(s,t,e,n,i){const o=t[e*3],a=t[e*3+1],r=t[n*3],c=t[n*3+1],h=t[i*3],d=t[i*3+1];return[new Ft(o,a),new Ft(r,c),new Ft(h,d)]},generateSideWallUV:function(s,t,e,n,i,o){const a=t[e*3],r=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],f=t[n*3+2],l=t[i*3],u=t[i*3+1],_=t[i*3+2],v=t[o*3],m=t[o*3+1],p=t[o*3+2];return Math.abs(r-d)<Math.abs(a-h)?[new Ft(a,1-c),new Ft(h,1-f),new Ft(l,1-_),new Ft(v,1-p)]:[new Ft(r,1-c),new Ft(d,1-f),new Ft(u,1-_),new Ft(m,1-p)]}};function wp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Ht extends Fe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+r,Math.PI);let h=0;const d=[],f=new N,l=new N,u=[],_=[],v=[],m=[];for(let p=0;p<=n;p++){const w=[],M=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){const L=P/e;f.x=-t*Math.cos(i+L*o)*Math.sin(a+M*r),f.y=t*Math.cos(a+M*r),f.z=t*Math.sin(i+L*o)*Math.sin(a+M*r),_.push(f.x,f.y,f.z),l.copy(f).normalize(),v.push(l.x,l.y,l.z),m.push(L+y,1-M),w.push(h++)}d.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const M=d[p][w+1],y=d[p][w],P=d[p+1][w],L=d[p+1][w+1];(p!==0||a>0)&&u.push(M,y,L),(p!==n-1||c<Math.PI)&&u.push(y,P,L)}this.setIndex(u),this.setAttribute("position",new ue(_,3)),this.setAttribute("normal",new ue(v,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ht(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ln extends Fe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],c=[],h=[],d=new N,f=new N,l=new N;for(let u=0;u<=n;u++)for(let _=0;_<=i;_++){const v=_/i*o,m=u/n*Math.PI*2;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),r.push(f.x,f.y,f.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),l.subVectors(f,d).normalize(),c.push(l.x,l.y,l.z),h.push(_/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let _=1;_<=i;_++){const v=(i+1)*u+_-1,m=(i+1)*(u-1)+_-1,p=(i+1)*(u-1)+_,w=(i+1)*u+_;a.push(v,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ln(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class vn extends Fe{constructor(t=new _c(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const a=t.computeFrenetFrames(e,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const r=new N,c=new N,h=new Ft;let d=new N;const f=[],l=[],u=[],_=[];v(),this.setIndex(_),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(l,3)),this.setAttribute("uv",new ue(u,2));function v(){for(let M=0;M<e;M++)m(M);m(o===!1?e:0),w(),p()}function m(M){d=t.getPointAt(M/e,d);const y=a.normals[M],P=a.binormals[M];for(let L=0;L<=i;L++){const I=L/i*Math.PI*2,B=Math.sin(I),S=-Math.cos(I);c.x=S*y.x+B*P.x,c.y=S*y.y+B*P.y,c.z=S*y.z+B*P.z,c.normalize(),l.push(c.x,c.y,c.z),r.x=d.x+n*c.x,r.y=d.y+n*c.y,r.z=d.z+n*c.z,f.push(r.x,r.y,r.z)}}function p(){for(let M=1;M<=e;M++)for(let y=1;y<=i;y++){const P=(i+1)*(M-1)+(y-1),L=(i+1)*M+(y-1),I=(i+1)*M+y,B=(i+1)*(M-1)+y;_.push(P,L,B),_.push(L,I,B)}}function w(){for(let M=0;M<=e;M++)for(let y=0;y<=i;y++)h.x=M/e,h.y=y/i,u.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new vn(new Ds[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class F extends Li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jo extends F{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ft(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class ks extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class vp extends ks{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Eo=new be,Pa=new N,Ra=new N;class jo{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pa),Ra.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ra),e.updateMatrixWorld(),Eo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Eo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xp extends jo{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Pi*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Sp extends ks{constructor(t,e,n=0,i=Math.PI/3,o=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.distance=n,this.angle=i,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new xp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ca=new be,Bi=new N,To=new N;class yp extends jo{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new ve(2,1,1,1),new ve(0,1,1,1),new ve(3,1,1,1),new ve(1,1,1,1),new ve(3,0,1,1),new ve(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Bi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Bi),To.copy(n.position),To.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(To),n.updateMatrixWorld(),i.makeTranslation(-Bi.x,-Bi.y,-Bi.z),Ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca)}}class Wn extends ks{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bp extends jo{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ep extends ks{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new bp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=La(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=La();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function La(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oo);const ei=()=>{if(typeof window>"u")return!1;const s=navigator.userAgent||navigator.vendor||window.opera||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(s),e="ontouchstart"in window||navigator.maxTouchPoints>0,n=Math.min(window.innerWidth,window.innerHeight)<=768||window.innerWidth<=1024;return t||e&&n},Qt={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:5,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},_e={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class Ap{constructor(){this.state=_e.MENU,this.speedKmh=Qt.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Qt.LANES[1],this.targetLaneX=Qt.LANES[1],this.crashTimer=0}startNewGame(){this.state=_e.PLAYING,this.speedKmh=Qt.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Qt.LANES[1],this.targetLaneX=Qt.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==_e.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<Qt.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=Qt.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min(Qt.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=Qt.SCORING.COMBO_TIMEOUT;const t=Qt.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min(Qt.NITRO.MAX,this.nitro+Qt.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==_e.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),e.keys.left&&!e.keys.right?(this.steerHoldTimer=(this.steerHoldTimer||0)+t,this.steerHoldTimer>.22&&(this.switchLane(-1),this.steerHoldTimer=.08)):e.keys.right&&!e.keys.left?(this.steerHoldTimer=(this.steerHoldTimer||0)+t,this.steerHoldTimer>.22&&(this.switchLane(1),this.steerHoldTimer=.08)):this.steerHoldTimer=0,this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*Qt.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,o=e.keys.accelerate,a=e.keys.boost,r=this.distanceMeters/1e3,c=Math.min(Qt.SPEED.MAX_PROGRESSIVE_BONUS,r*Qt.SPEED.PROGRESSIVE_RATE),h=Qt.SPEED.BASE_START+c,d=h+45,f=Qt.SPEED.BOOST+c*.4;a?this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-Qt.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(f,this.speedKmh+Qt.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.speedKmh=Math.min(d,this.speedKmh+Qt.SPEED.ACCELERATION*1.6*t)):(this.isBoosting=!1,this.nitro=Math.min(Qt.NITRO.MAX,this.nitro+Qt.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max(Qt.SPEED.MIN,this.speedKmh-Qt.SPEED.BRAKING*t):o?this.speedKmh=Math.min(d,this.speedKmh+Qt.SPEED.ACCELERATION*1.6*t):this.speedKmh<h?this.speedKmh=Math.min(h,this.speedKmh+Qt.SPEED.ACCELERATION*t):this.speedKmh>h&&(this.speedKmh=Math.max(h,this.speedKmh-Qt.SPEED.NATURAL_DECEL*t)));const u=this.speedKmh*1e3/3600*t;this.distanceMeters+=u,this.score+=Math.round(u*Qt.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=_e.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class Pp{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.activeSwipes=new Map,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Space"].includes(t.key)||t.code==="Space")&&t.preventDefault();const e=t.code,n=t.key;e==="ArrowLeft"||e==="KeyA"||n==="ArrowLeft"||n==="a"||n==="A"?((!this.keys.left||t.repeat)&&(this.laneChangeRequested=-1),this.keys.left=!0):(e==="ArrowRight"||e==="KeyD"||n==="ArrowRight"||n==="d"||n==="D")&&((!this.keys.right||t.repeat)&&(this.laneChangeRequested=1),this.keys.right=!0),(e==="ArrowUp"||e==="KeyW"||n==="ArrowUp"||n==="w"||n==="W")&&(this.keys.accelerate=!0),(e==="Space"||e==="ShiftLeft"||e==="ShiftRight"||e==="KeyN"||e==="KeyX"||n===" "||n==="Shift"||n==="n"||n==="N"||n==="x"||n==="X")&&(this.keys.boost=!0),(e==="ArrowDown"||e==="KeyS"||n==="ArrowDown"||n==="s"||n==="S")&&(this.keys.brake=!0),(e==="KeyH"||e==="KeyE"||e==="KeyF"||n==="h"||n==="H"||n==="e"||n==="E"||n==="f"||n==="F")&&(this.keys.horn=!0,this.onHorn&&this.onHorn()),(e==="KeyP"||e==="Escape"||n==="p"||n==="P"||n==="Escape")&&this.onPauseToggle&&this.onPauseToggle(),(e==="KeyR"||n==="r"||n==="R")&&this.onRestart&&this.onRestart()}),window.addEventListener("keyup",t=>{const e=t.code,n=t.key;(e==="ArrowLeft"||e==="KeyA"||n==="ArrowLeft"||n==="a"||n==="A")&&(this.keys.left=!1),(e==="ArrowRight"||e==="KeyD"||n==="ArrowRight"||n==="d"||n==="D")&&(this.keys.right=!1),(e==="ArrowUp"||e==="KeyW"||n==="ArrowUp"||n==="w"||n==="W")&&(this.keys.accelerate=!1),(e==="Space"||e==="ShiftLeft"||e==="ShiftRight"||e==="KeyN"||e==="KeyX"||n===" "||n==="Shift"||n==="n"||n==="N"||n==="x"||n==="X")&&(this.keys.boost=!1),(e==="ArrowDown"||e==="KeyS"||n==="ArrowDown"||n==="s"||n==="S")&&(this.keys.brake=!1),(e==="KeyH"||e==="KeyE"||e==="KeyF"||n==="h"||n==="H"||n==="e"||n==="E"||n==="f"||n==="F")&&(this.keys.horn=!1)}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0;for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e];n.target&&n.target.closest&&n.target.closest("#mobile-controls, #hud-layer, .screen, button, .touch-btn, .hud-icon-btn, .modal-overlay")||this.activeSwipes.set(n.identifier,{startX:n.clientX,startY:n.clientY,startTime:Date.now()})}},{passive:!0}),window.addEventListener("touchend",t=>{for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e],i=this.activeSwipes.get(n.identifier);if(!i)continue;this.activeSwipes.delete(n.identifier);const o=n.clientX-i.startX,a=n.clientY-i.startY;Date.now()-i.startTime<350&&Math.abs(o)>40&&Math.abs(o)>Math.abs(a)*1.3&&(o<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0}),window.addEventListener("touchcancel",t=>{for(let e=0;e<t.changedTouches.length;e++)this.activeSwipes.delete(t.changedTouches[e].identifier)},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}setSteerLeft(t){t&&!this.keys.left&&(this.laneChangeRequested=-1),this.keys.left=!!t}setSteerRight(t){t&&!this.keys.right&&(this.laneChangeRequested=1),this.keys.right=!!t}triggerSteerLeft(){this.setSteerLeft(!0),setTimeout(()=>{this.keys.left&&this.setSteerLeft(!1)},120)}triggerSteerRight(){this.setSteerRight(!0),setTimeout(()=>{this.keys.right&&this.setSteerRight(!1)},120)}setBrake(t){this.keys.brake=!!t}setAccelerate(t){this.keys.accelerate=!!t}setNitro(t){this.keys.boost=!!t}setBoost(t){this.keys.boost=!!t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0,this.activeSwipes.clear()}}class Rp{constructor(t){this.camera=t,this.defaultOffset=new N(Qt.CAMERA.DEFAULT_OFFSET.x,Qt.CAMERA.DEFAULT_OFFSET.y,Qt.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new N(Qt.CAMERA.LOOK_OFFSET.x,Qt.CAMERA.LOOK_OFFSET.y,Qt.CAMERA.LOOK_OFFSET.z),this.currentPos=new N,this.currentLook=new N,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=Qt.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.1,6.2),this.lookOffset.set(0,1.25,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=Qt.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const o=t.group.position,a=Math.min(1,e/Qt.SPEED.MAX_NORMAL),r=this.camera.aspect,c=r<1?Math.min(24,(1-r)*36):0;this.targetFOV=Qt.CAMERA.BASE_FOV+c+a*10+(n?8:0);const h=this.targetFOV-this.camera.fov;Math.abs(h)>.04&&(this.camera.fov+=h*Math.min(1,i*Qt.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix());const d=o.x+this.defaultOffset.x,f=o.y+this.defaultOffset.y,l=o.z+this.defaultOffset.z+(n?.8:0),u=Math.min(1,i*10),_=Math.min(1,i*12);this.currentPos.x+=(d-this.currentPos.x)*u,this.currentPos.y+=(f-this.currentPos.y)*_,this.currentPos.z=l;const v=o.x+this.lookOffset.x,m=o.y+this.lookOffset.y,p=o.z+this.lookOffset.z;this.currentLook.x+=(v-this.currentLook.x)*u,this.currentLook.y+=(m-this.currentLook.y)*_,this.currentLook.z=p;let w=0,M=0;if(e>70){const I=e/280*.03;w=(Math.random()-.5)*I,M=(Math.random()-.5)*I}let y=0,P=0,L=0;if(this.shakeDuration>0){this.shakeDuration-=i;const I=Math.max(0,this.shakeDuration/.6),B=this.shakeIntensity*I;y=(Math.random()-.5)*B,P=(Math.random()-.5)*B,L=(Math.random()-.5)*B}this.camera.position.set(this.currentPos.x+w+y,this.currentPos.y+M+P,this.currentPos.z+L),this.camera.lookAt(this.currentLook.x+w*.5,this.currentLook.y+M*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,o=(e?4.8:8.2)*i,a=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),r=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*o,a,Math.cos(c)*o),this.camera.lookAt(0,r,0)}}const Cp={};class Lp{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){if(!this.ctx)return;const t="./",e=`${t.endsWith("/")?t:t+"/"}audio/eta_ki_korli_mama.mp3`;fetch(e).then(n=>{if(!n.ok)throw new Error(`HTTP ${n.status}`);return n.arrayBuffer()}).then(n=>this.ctx.decodeAudioData(n)).then(n=>{this.crashVoiceBuffer=n}).catch(n=>{console.warn("Could not decode crash voice buffer:",n)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.04,t),this.highOsc.connect(o),o.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,o=0,a=0;for(let c=0;c<t;c++){const h=Math.random()*2-1;i=.98*i+h*.055,o=.95*o+h*.075,a=.85*a+h*.15,n[c]=(i+o+a)*.45}const r=this.ctx.createBufferSource();r.buffer=e,r.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),r.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),r.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const o=this.ctx.createBufferSource();o.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(500,t),a.frequency.exponentialRampToValueAtTime(180,t+.35);const r=this.ctx.createGain();r.gain.setValueAtTime(.001,t),r.gain.linearRampToValueAtTime(.07,t+.05),r.gain.exponentialRampToValueAtTime(.001,t+.35),o.connect(a),a.connect(r),r.connect(this.masterGain),o.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const o=[2093,2637];[0,.09].forEach(a=>{o.forEach(r=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(r,n+a),h.gain.setValueAtTime(0,n+a),h.gain.linearRampToValueAtTime(.22,n+a+.008),h.gain.exponentialRampToValueAtTime(1e-4,n+a+.18),c.connect(h),h.connect(this.masterGain),c.start(n+a),c.stop(n+a+.2)})});return}if(e==="cng"){[620,780].forEach(a=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(a,n);const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),r.connect(h),h.connect(c),c.connect(this.masterGain),r.start(n),r.stop(n+.35)});return}[330,415.3,523.25].forEach((o,a)=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();r.type=a===0?"sine":"triangle",r.frequency.setValueAtTime(o,n),h.type="lowpass",h.frequency.setValueAtTime(1400,n);const d=a===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(d,n+.02),c.gain.setValueAtTime(d,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),r.connect(h),h.connect(c),c.connect(this.masterGain),r.start(n),r.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n*.8,t),o.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.08,t+.06),a.gain.exponentialRampToValueAtTime(1e-4,t+.45),o.connect(a),a.connect(this.masterGain),o.start(t),o.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const o=this.ctx.currentTime,a=Math.min(1,Math.max(0,t/200)),r=a*5%1,c=900+a*1800+r*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const h=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,h),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,o,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,o,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,o,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,o,.05);const d=300+a*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(d,o,.06);const f=.16+a*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,f),o,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+a*350,o,.08),this.turboGain.gain.setTargetAtTime(.05,o,.08)):this.turboGain.gain.setTargetAtTime(1e-4,o,.15);const l=Math.pow(a,1.3)*.06;this.roadGain.gain.setTargetAtTime(l,o,.08),this.roadFilter.frequency.setTargetAtTime(180+a*250,o,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((o,a)=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime((a===0?n:n*1.25)*i,e+o),c.gain.setValueAtTime(.001,e+o),c.gain.linearRampToValueAtTime(.12,e+o+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+o+.28),r.connect(c),c.connect(this.masterGain),r.start(e+o),r.stop(e+o+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),o=this.ctx.createBuffer(1,i,this.ctx.sampleRate),a=o.getChannelData(0);for(let d=0;d<i;d++)a[d]=(Math.random()*2-1)*Math.exp(-d/(this.ctx.sampleRate*.12));const r=this.ctx.createBufferSource();r.buffer=o;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const h=this.ctx.createGain();h.gain.setValueAtTime(.3,t),h.gain.exponentialRampToValueAtTime(.001,t+.45),r.connect(c),c.connect(h),h.connect(this.masterGain),r.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(o=>o.lang.includes("bn")||o.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(e,t+i),a.gain.setValueAtTime(.001,t+i),a.gain.linearRampToValueAtTime(.12,t+i+.02),a.gain.exponentialRampToValueAtTime(.001,t+i+.32),o.connect(a),a.connect(this.masterGain),o.start(t+i),o.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class Ip{constructor(){this.group=new gt,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new yn,this.collisionSize=new N(2.1,2.8,5.5),this._boxCenter=new N,this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new ie(t),i=document.createElement("canvas");i.width=1024,i.height=384;const o=i.getContext("2d");o.fillStyle="#f8fafc",o.fillRect(0,0,1024,384),o.fillStyle="#dc2626",o.fillRect(0,0,1024,36),o.fillRect(0,348,1024,36),o.fillStyle="#16a34a",o.beginPath(),o.arc(512,180,110,Math.PI,0),o.fill(),o.fillStyle="#f59e0b",o.fillRect(472,80,80,100),o.beginPath(),o.moveTo(512,20),o.lineTo(460,80),o.lineTo(564,80),o.fill();const a=(b,z)=>{o.fillStyle="#dc2626";for(let et=0;et<Math.PI*2;et+=Math.PI/3)o.beginPath(),o.arc(b+Math.cos(et)*35,z+Math.sin(et)*35,24,0,Math.PI*2),o.fill();o.fillStyle="#fbbf24",o.beginPath(),o.arc(b,z,22,0,Math.PI*2),o.fill()};a(220,180),a(804,180),o.fillStyle="#1e293b",o.font="bold 54px serif",o.textAlign="center",o.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const r=new ie(i),c=document.createElement("canvas");c.width=1024,c.height=512;const h=c.getContext("2d");h.fillStyle="#f59e0b",h.fillRect(0,0,1024,140);for(let b=60;b<1024;b+=110)h.fillStyle="#dc2626",h.beginPath(),h.arc(b,70,32,0,Math.PI*2),h.fill(),h.fillStyle="#22c55e",h.beginPath(),h.arc(b,70,16,0,Math.PI*2),h.fill();h.fillStyle="#15803d",h.fillRect(0,140,1024,372),h.strokeStyle="#f8fafc",h.lineWidth=8;for(let b=30;b<1024;b+=138)h.strokeRect(b,160,116,320);h.fillStyle="#ffffff",h.font="900 80px sans-serif",h.textAlign="center",h.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),h.fillStyle="#dc2626",h.fillRect(0,140,30,372),h.fillRect(994,140,30,372);const d=new ie(c),f=document.createElement("canvas");f.width=1024,f.height=680;const l=f.getContext("2d");l.fillStyle="#4a90e2",l.fillRect(0,0,1024,680),l.fillStyle="#172554",l.beginPath(),l.moveTo(0,0),l.lineTo(110,0),l.lineTo(0,85),l.closePath(),l.fill(),l.beginPath(),l.moveTo(1024,0),l.lineTo(914,0),l.lineTo(1024,85),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.beginPath(),l.moveTo(0,85),l.lineTo(110,0),l.lineTo(914,0),l.lineTo(1024,85),l.stroke(),l.fillStyle="#2563eb",l.fillRect(100,35,824,45),l.strokeStyle="#18181b",l.lineWidth=3,l.strokeRect(100,35,824,45),l.fillStyle="#1e3a8a";for(let b=110;b<=900;b+=32)l.beginPath(),l.moveTo(b,80),l.lineTo(b+16,45),l.lineTo(b+32,80),l.closePath(),l.fill();const u=b=>{l.fillStyle="#facc15",l.fillRect(b,85,54,345),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(b,85,54,345);for(let z=104;z<=415;z+=26)l.fillStyle="#dc2626",l.beginPath(),l.arc(b+27,z,9.5,0,Math.PI*2),l.fill(),l.fillStyle="#fde047",l.beginPath(),l.arc(b+27,z,4.5,0,Math.PI*2),l.fill()};u(36),u(934);const _=90,v=335,m=_+v,p=104,w=252;l.fillStyle="#78aee6",l.fillRect(p,_,w,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(p,_,w,v);const M=386;l.fillStyle="#78aee6",l.fillRect(M,_,w,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(M,_,w,v);const y=668;l.fillStyle="#78aee6",l.fillRect(y,_,w,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(y,_,w,v);const P=(b,z)=>{[{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:0},{dx:-1,dy:0}].forEach(({dx:Z,dy:tt})=>{l.fillStyle="#15803d",l.beginPath();const Dt=b+Z*72,Kt=z+tt*72,Zt=-tt*16,Vt=Z*16;l.moveTo(b+Z*24,z+tt*24),l.quadraticCurveTo(b+Z*46+Zt,z+tt*46+Vt,Dt,Kt),l.quadraticCurveTo(b+Z*46-Zt,z+tt*46-Vt,b+Z*24,z+tt*24),l.fill(),l.fillStyle="#166534",l.beginPath();const he=b+Z*52+Zt*1.5,Ut=z+tt*52+Vt*1.5;l.moveTo(b+Z*22,z+tt*22),l.quadraticCurveTo(b+Z*34+Zt*1.8,z+tt*34+Vt*1.8,he,Ut),l.quadraticCurveTo(b+Z*38+Zt*.8,z+tt*38+Vt*.8,b+Z*22,z+tt*22),l.fill(),l.beginPath();const te=b+Z*52-Zt*1.5,Wt=z+tt*52-Vt*1.5;l.moveTo(b+Z*22,z+tt*22),l.quadraticCurveTo(b+Z*34-Zt*1.8,z+tt*34-Vt*1.8,te,Wt),l.quadraticCurveTo(b+Z*38-Zt*.8,z+tt*38-Vt*.8,b+Z*22,z+tt*22),l.fill(),l.strokeStyle="#4ade80",l.lineWidth=1.8,l.beginPath(),l.moveTo(b+Z*26,z+tt*26),l.lineTo(Dt*.95+b*.05,Kt*.95+z*.05),l.stroke()}),[{dx:.707,dy:-.707},{dx:-.707,dy:-.707},{dx:.707,dy:.707},{dx:-.707,dy:.707}].forEach(({dx:Z,dy:tt})=>{l.fillStyle="#16a34a",l.beginPath();const Dt=b+Z*46,Kt=z+tt*46,Zt=-tt*10,Vt=Z*10;l.moveTo(b+Z*22,z+tt*22),l.quadraticCurveTo(b+Z*32+Zt,z+tt*32+Vt,Dt,Kt),l.quadraticCurveTo(b+Z*32-Zt,z+tt*32-Vt,b+Z*22,z+tt*22),l.fill()}),l.fillStyle="#facc15";for(let Z=0;Z<Math.PI*2;Z+=Math.PI/8)l.beginPath(),l.arc(b+Math.cos(Z)*27,z+Math.sin(Z)*27,4.5,0,Math.PI*2),l.fill();l.fillStyle="#facc15",l.beginPath(),l.arc(b,z,25,0,Math.PI*2),l.fill(),l.strokeStyle="#ca8a04",l.lineWidth=2,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.arc(b,z,14,0,Math.PI*2),l.fill(),l.fillStyle="#fef08a",l.beginPath(),l.arc(b,z,6,0,Math.PI*2),l.fill()};P(p+w*.5,_+v*.5),P(y+w*.5,_+v*.5),((b,z,et)=>{l.strokeStyle="#18181b",l.lineWidth=3.5,l.lineCap="round",l.beginPath(),l.moveTo(b-24,et),l.lineTo(b-30,et-5),l.moveTo(b-24,et),l.lineTo(b-18,et-5),l.moveTo(b-24,et),l.lineTo(b-22,et-22),l.lineTo(b-32,et-52),l.lineTo(b-18,et-80),l.stroke(),l.beginPath(),l.moveTo(b+12,et),l.lineTo(b+6,et-5),l.moveTo(b+12,et),l.lineTo(b+18,et-5),l.moveTo(b+12,et),l.lineTo(b+14,et-22),l.lineTo(b+24,et-52),l.lineTo(b+8,et-84),l.stroke(),[{tipX:b+72,tipY:z-25,midX:b+45,midY:z-8},{tipX:b+95,tipY:z-2,midX:b+56,midY:z+12},{tipX:b+104,tipY:z+24,midX:b+58,midY:z+32},{tipX:b+82,tipY:z+50,midX:b+48,midY:z+46}].forEach(({tipX:tt,tipY:Dt,midX:Kt,midY:Zt})=>{l.fillStyle="#facc15",l.beginPath(),l.moveTo(b+16,z+30),l.quadraticCurveTo(Kt,Zt-12,tt,Dt),l.quadraticCurveTo(tt+6,Dt+12,tt-12,Dt+18),l.quadraticCurveTo(Kt,Zt+12,b+16,z+38),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(tt-18,Dt+4),l.quadraticCurveTo(tt-4,Dt-8,tt,Dt),l.quadraticCurveTo(tt+6,Dt+12,tt-12,Dt+18),l.quadraticCurveTo(tt-12,Dt+10,tt-18,Dt+4),l.closePath(),l.fill()}),l.fillStyle="#facc15",l.beginPath(),l.moveTo(b-36,z+44),l.quadraticCurveTo(b-2,z+72,b+34,z+46),l.quadraticCurveTo(b+8,z+22,b-36,z+44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(b-16,z-42),l.quadraticCurveTo(b-62,z-2,b-42,z+46),l.quadraticCurveTo(b+12,z+34,b+4,z-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(b-18,z-28),l.quadraticCurveTo(b+24,z-35,b+58,z-14),l.lineTo(b+52,z+12),l.quadraticCurveTo(b+14,z+18,b-22,z+12),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#38bdf8",[{x:b+58,y:z-14},{x:b+64,y:z+4},{x:b+52,y:z+18}].forEach(({x:tt,y:Dt})=>{l.beginPath(),l.ellipse(tt,Dt,9,6,-Math.PI/4,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=1.8,l.stroke()}),l.strokeStyle="#1e3a8a",l.lineWidth=2,l.beginPath(),l.moveTo(b-4,z-18),l.lineTo(b+42,z-8),l.moveTo(b-2,z-6),l.lineTo(b+44,z+4),l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(b-24,z-32),l.quadraticCurveTo(b-28,z-68,b-2,z-78),l.quadraticCurveTo(b+24,z-74,b+22,z-48),l.quadraticCurveTo(b+8,z-28,b-16,z-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.moveTo(b+20,z-58),l.quadraticCurveTo(b+36,z-54,b+44,z-42),l.quadraticCurveTo(b+28,z-42,b+18,z-44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.2,l.stroke(),l.beginPath(),l.moveTo(b+20,z-50),l.lineTo(b+42,z-43),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(b+6,z-58,8.5,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2,l.stroke(),l.fillStyle="#18181b",l.beginPath(),l.arc(b+8,z-58,4.2,0,Math.PI*2),l.fill(),l.fillStyle="#ffffff",l.beginPath(),l.arc(b+7,z-60,1.8,0,Math.PI*2),l.fill()})(M+w*.5,_+v*.52,m),l.fillStyle="#3b82f6",l.fillRect(20,m,984,45),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(20,m,984,45);const I=b=>{l.fillStyle="#94a3b8",l.fillRect(b,m+8,54,28),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(b,m+8,54,28),l.fillStyle="#334155",l.fillRect(b+22,m+4,10,36),l.fillStyle="#f8fafc",l.fillRect(b+6,m+18,6,8),l.fillRect(b+42,m+18,6,8)};I(205),I(485),I(765);const B=470;l.fillStyle="#4a90e2",l.beginPath(),l.moveTo(20,B),l.lineTo(20,580),l.lineTo(315,580),l.lineTo(365,635),l.lineTo(659,635),l.lineTo(709,580),l.lineTo(1004,580),l.lineTo(1004,B),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.stroke();const S=(b,z)=>{l.fillStyle="#18181b",l.fillRect(b-4,498,172,64),l.strokeStyle="#facc15",l.lineWidth=3,l.strokeRect(b-4,498,172,64),(z?["#f59e0b","#ef4444","#f8fafc"]:["#f8fafc","#ef4444","#f59e0b"]).forEach((Pt,Z)=>{l.fillStyle=Pt,l.fillRect(b+Z*54+2,504,50,52),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(b+Z*54+2,504,50,52),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(b+Z*54+6,508,42,6)})};S(118,!0),S(742,!1);const x=new ie(f);this.yellowPaint=new F({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new F({color:165063,roughness:.4,metalness:.3}),this.redPaint=new F({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new F({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new F({color:2040877,roughness:.8}),this.woodPlankMat=new F({color:7877903,roughness:.9}),this.tireMat=new F({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new F({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new Jo({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new de({color:16777215}),this.taillightMat=new F({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new F({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new F({color:16119280,roughness:.65}),this.cowBrownMat=new F({color:9262372,roughness:.7}),this.cowBlackMat=new F({color:2236962,roughness:.75}),this.cowFawnMat=new F({color:12088115,roughness:.68}),this.hornMat=new F({color:3621201,roughness:.4}),this.snoutMat=new F({color:1974308,roughness:.8});const T=new gt;T.name="truckBody",this.bodyGroup=T;const G=new O(1.9,.4,6),rt=new g(G,this.chassisMat);rt.position.set(0,.65,.2),rt.castShadow=!0,T.add(rt);const U=new gt;U.position.set(0,.6,-2.85),[-.3,0,.3].forEach(b=>{const z=new ot(.06,.06,2.3,8);z.rotateZ(Math.PI/2);const et=new g(z,this.tealBumperMat);et.position.y=b,et.castShadow=!0,U.add(et)}),[-.95,-.45,.45,.95].forEach(b=>{const z=new O(.08,.72,.08),et=new g(z,this.tealBumperMat);et.position.x=b,U.add(et)}),[-1.08,1.08].forEach(b=>{const z=new ot(.03,.03,.9,6),et=new g(z,this.tealBumperMat);et.position.set(b,.35,0),U.add(et);const Pt=new Ht(.07,8,8),Z=new g(Pt,this.redPaint);Z.position.set(b,.8,0),U.add(Z)});const W=document.createElement("canvas");W.width=256,W.height=80;const q=W.getContext("2d");q.fillStyle="#006633",q.fillRect(0,0,256,80),q.strokeStyle="#ffffff",q.lineWidth=4,q.strokeRect(4,4,248,72),q.fillStyle="#ffffff",q.font="bold 26px sans-serif",q.textAlign="center",q.fillText("যশোর-ট",128,34),q.fillText("০২-০৯৬৯",128,64);const V=new ie(W),nt=new qt(.65,.22),j=new de({map:V}),J=new g(nt,j);J.position.set(0,-.15,.08),U.add(J),T.add(U);const H=new O(1.85,.95,1.6),ft=new g(H,this.yellowPaint);ft.position.set(0,1.25,-2.05),ft.castShadow=!0,T.add(ft);const Q=new qt(1.65,.85),st=new F({map:n}),$=new g(Q,st);$.position.set(0,1.25,-2.86),T.add($),[-.68,.68].forEach(b=>{const z=new ot(.16,.16,.06,16);z.rotateX(Math.PI/2);const et=new g(z,this.chassisMat);et.position.set(b,1.15,-2.87),T.add(et);const Pt=new $i(.13,16),Z=new g(Pt,this.headlightMat);Z.position.set(b,1.15,-2.89),T.add(Z),this.headlights.push(Z);const tt=new Sp(16772829,2.5,60,Math.PI/5,.5,1.2);tt.position.set(b,1.15,-2.9),tt.target.position.set(b*1.5,0,-35),T.add(tt),T.add(tt.target)}),[-.98,.98].forEach(b=>{const z=new O(.24,.55,1.4),et=new g(z,this.chassisMat);et.position.set(b,.95,-1.95),et.castShadow=!0,T.add(et)});const Mt=new O(2.1,1.45,1.55),pt=new g(Mt,this.yellowPaint);pt.position.set(0,1.75,-.6),pt.castShadow=!0,T.add(pt),[-1.06,1.06].forEach(b=>{const z=new O(.04,1.35,1.4),et=new g(z,this.cyanBluePaint);et.position.set(b,1.75,-.6),T.add(et);const Pt=new qt(.65,.55),Z=new g(Pt,this.glassMat);Z.position.set(b>0?b+.03:b-.03,1.95,-.65),Z.rotation.y=b>0?Math.PI/2:-Math.PI/2,T.add(Z)});const yt=new qt(1.85,.72),Et=new g(yt,this.glassMat);Et.position.set(0,1.92,-1.39),T.add(Et);const dt=new gt;dt.position.set(0,2.65,-.85);const At=new qt(2.15,.85),D=new F({map:r,roughness:.4}),_t=new g(At,D);_t.position.set(0,0,-.55),dt.add(_t);const ct=new O(2.2,.15,1.4),wt=new g(ct,this.redPaint);wt.position.set(0,.45,.1),wt.castShadow=!0,dt.add(wt);const ut=new O(2.24,.18,.08),Ot=new g(ut,this.yellowPaint);Ot.position.set(0,.38,-.58),dt.add(Ot),T.add(dt);const lt=new gt;lt.position.set(0,1.6,1.6);const A=new O(2.2,.12,3.4),E=new g(A,this.woodPlankMat);E.position.set(0,-.4,0),E.receiveShadow=!0,lt.add(E);const X=new F({map:d,roughness:.45});[-1.12,1.12].forEach(b=>{const z=new qt(3.4,1.15),et=new g(z,X);et.position.set(b,.25,0),et.rotation.y=b>0?Math.PI/2:-Math.PI/2,et.castShadow=!0,lt.add(et);const Pt=new O(.12,.12,3.4),Z=new g(Pt,this.redPaint);Z.position.set(b,.85,0),lt.add(Z)});const xt=new O(2.2,1.15,.1),ht=new g(xt,this.redPaint);ht.position.set(0,.25,-1.68),lt.add(ht);const mt=new gt;mt.position.set(0,0,1.68);const It=new O(2.28,1.45,.08),Y=new F({color:4886754,roughness:.45}),Rt=new g(It,Y);Rt.position.set(0,.08,0),Rt.castShadow=!0,mt.add(Rt);const Nt=new qt(2.28,1.45),Ct=new F({map:x,roughness:.35,metalness:.15}),vt=new g(Nt,Ct);vt.position.set(0,.08,.045),mt.add(vt),[-1,1].forEach(b=>{const z=new wc;z.moveTo(0,0),z.lineTo(b*.18,.28),z.lineTo(0,.28),z.closePath();const et={depth:.08,bevelEnabled:!1},Pt=new Ko(z,et),Z=new F({color:1516884,roughness:.4}),tt=new g(Pt,Z);tt.position.set(b*1.14,.68,-.04),mt.add(tt)}),[-.78,.78].forEach((b,z)=>{const et=z===0,Pt=new g(new O(.42,.16,.05),this.chassisMat);Pt.position.set(b,-.42,.08),mt.add(Pt);const Z=new g(new O(.12,.12,.03),new F({color:16096779,emissive:14251782,emissiveIntensity:.3}));Z.position.set(et?b-.13:b+.13,-.42,.1),mt.add(Z);const tt=new g(new O(.12,.12,.03),this.taillightMat);tt.position.set(b,-.42,.1),mt.add(tt),this.brakeLights.push(tt);const Dt=new g(new O(.12,.12,.03),new F({color:16317180,roughness:.3}));Dt.position.set(et?b+.13:b-.13,-.42,.1),mt.add(Dt)}),[-.85,.85].forEach(b=>{const z=new g(new O(.42,.44,.03),this.tireMat);z.position.set(b,-.8,.06),mt.add(z)}),lt.add(mt),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((b,z)=>{const et=this.createBedCow(b.mat,b.scale);et.position.set(b.x,.35,b.z),et.rotation.y=b.rotY,lt.add(et),this.cows.push({group:et,head:et.userData.head,baseRotX:et.userData.head.rotation.x,seed:z*1.5})}),T.add(lt);const Yt=this.createTruckWheel(.48,.26,!1);Yt.position.set(0,.42,.4),Yt.rotation.x=Math.PI/2,T.add(Yt);const Xt=new ot(.08,.08,.6,8);Xt.rotateZ(Math.PI/2);const zt=new g(Xt,this.chassisMat);zt.position.set(1.05,.48,-.8),T.add(zt);const Lt=new pe(.22,1.2,12);Lt.rotateZ(-Math.PI/2);const $t=new de({color:16755200,transparent:!0,opacity:0}),ee=new g(Lt,$t);ee.position.set(1.65,.48,-.8),T.add(ee),this.exhaustFires.push(ee),this.group.add(T);const kt=.48,Tt=.52,St=.32;[-1.02,1.02].forEach(b=>{const z=this.createTruckWheelAssembly(Tt,St,b>0,!1);z.position.set(b,kt,-1.95),this.group.add(z),this.wheels.push(z.userData.spinner),this.frontWheels.push(z)}),[-1.02,1.02].forEach(b=>{const z=this.createTruckWheelAssembly(Tt,St,b>0,!0);z.position.set(b,kt,1.85),this.group.add(z),this.wheels.push(z.userData.spinner)})}createBedCow(t,e=1){const n=new gt;n.scale.set(e,e,e);const i=new O(.85,.85,1.35),o=new g(i,t);o.position.set(0,.45,0),o.castShadow=!0,n.add(o);const a=new pe(.24,.38,8),r=new g(a,t);r.position.set(0,.95,-.32),r.rotation.x=-.2,n.add(r);const c=new gt;c.position.set(0,.75,-.6),n.userData.head=c;const h=new O(.42,.46,.62),d=new g(h,t);d.position.set(0,.22,-.35),c.add(d);const f=new O(.32,.25,.25),l=new g(f,this.snoutMat);return l.position.set(0,.12,-.68),c.add(l),[-.18,.18].forEach(u=>{const _=new pe(.05,.3,6),v=new g(_,this.hornMat);v.position.set(u,.46,-.28),v.rotation.z=u>0?-.38:.38,v.rotation.x=.25,c.add(v);const m=new O(.18,.07,.08),p=new g(m,t);p.position.set(u>0?.26:-.26,.32,-.25),p.rotation.z=u>0?-.35:.35,c.add(p)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const o=new gt,a=new gt;if(o.userData.spinner=a,o.add(a),i){const r=this.createTruckWheel(t,e*.75,n);r.position.x=n?.08:-.08,a.add(r);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,a.add(c)}else{const r=this.createTruckWheel(t,e,n);a.add(r)}return o}createTruckWheel(t,e,n){const i=new gt,o=new ot(t,t,e,24);o.rotateZ(Math.PI/2);const a=new g(o,this.tireMat);i.add(a);const r=new ot(t*.65,t*.65,e+.02,18);r.rotateZ(Math.PI/2);const c=new g(r,this.rimMat);i.add(c);const h=new ot(t*.28,t*.28,e+.05,12);h.rotateZ(Math.PI/2);const d=new g(h,this.chassisMat);return i.add(d),i}update(t,e,n,i,o,a){const r=t*1e3/3600,c=2*Math.PI*.52,h=r/c*(2*Math.PI)*a;this.wheelRotation-=h,this.wheels.forEach(p=>{p.rotation.x=this.wheelRotation});const d=n-this.group.position.x,f=-Math.max(-.35,Math.min(Qt.STEERING.WHEEL_TURN_ANGLE,d*.35));this.frontWheels.forEach(p=>{p.rotation.y+=(f-p.rotation.y)*Math.min(1,a*12)});const l=Math.max(-.065,Math.min(.065,d*.065));this.currentRoll+=(l-this.currentRoll)*Math.min(1,a*10),this.bodyGroup.rotation.z=this.currentRoll;const u=Math.max(-.05,Math.min(.05,d*.05));this.currentYaw+=(u-this.currentYaw)*Math.min(1,a*10),this.bodyGroup.rotation.y=this.currentYaw;let _=0;i?_=.045:o&&(_=-.035),this.currentPitch+=(_-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const v=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(p=>{p.material=v}),this.exhaustFires.forEach(p=>{o?(p.material.opacity=.95,p.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),p.material.color.setHex(Math.random()>.4?16759552:16729088)):p.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(p=>{p.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(p=>{p.scale.set(1,1,1)});const m=performance.now()*.001;this.cows.forEach(p=>{const w=Math.sin(m*6.5+p.seed)*.08+(o?Math.sin(m*14+p.seed)*.05:0);p.head.rotation.x=p.baseRotX+w,p.head.rotation.y=Math.sin(m*2.2+p.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=1.45,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Dp{constructor(){this.group=new gt,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new gt,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new yn,this.collisionSize=new N(1.5,2.1,3.2),this._boxCenter=new N,this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new gt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=640;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,360);n.addColorStop(0,"#7dd3fc"),n.addColorStop(1,"#e0f2fe"),e.fillStyle=n,e.fillRect(0,0,1024,640);const i=(C,k,it)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(C,k,38*it,0,Math.PI*2),e.arc(C+42*it,k-14*it,48*it,0,Math.PI*2),e.arc(C+95*it,k-8*it,42*it,0,Math.PI*2),e.arc(C+135*it,k+8*it,32*it,0,Math.PI*2),e.fill()};i(80,120,1.1),i(720,100,.95);const o=512,a=270;for(let C=-Math.PI;C<=0;C+=Math.PI/18)e.beginPath(),e.moveTo(o,a),e.lineTo(o+Math.cos(C)*380,a+Math.sin(C)*380),e.lineTo(o+Math.cos(C+Math.PI/36)*380,a+Math.sin(C+Math.PI/36)*380),e.closePath(),e.fillStyle="rgba(245, 158, 11, 0.45)",e.fill();e.beginPath(),e.arc(o,a,78,Math.PI,0),e.fillStyle="#f59e0b",e.fill(),e.beginPath(),e.arc(o,a,52,Math.PI,0),e.fillStyle="#fde047",e.fill();const r=e.createLinearGradient(0,270,0,520);r.addColorStop(0,"#0284c7"),r.addColorStop(1,"#0369a1"),e.fillStyle=r,e.beginPath(),e.moveTo(0,270),e.lineTo(512,270),e.lineTo(470,520),e.lineTo(0,520),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=3.5;for(let C=290;C<510;C+=24)for(let it=20;it<440;it+=38*2)e.beginPath(),e.moveTo(it,C),e.quadraticCurveTo(it+38/2,C-5,it+38,C),e.stroke();e.fillStyle="#fde68a",e.beginPath(),e.moveTo(470,520),e.lineTo(512,270),e.lineTo(560,270),e.lineTo(530,520),e.closePath(),e.fill(),e.fillStyle="#16a34a",e.beginPath(),e.moveTo(520,270),e.lineTo(1024,270),e.lineTo(1024,520),e.lineTo(485,520),e.closePath(),e.fill();const c=(C,k)=>{e.strokeStyle="#854d0e",e.lineWidth=6,e.beginPath(),e.moveTo(C,k),e.quadraticCurveTo(C-15,k-60,C-25,k-110),e.stroke(),e.strokeStyle="#15803d",e.lineWidth=4;for(let it=0;it<Math.PI*2;it+=Math.PI/4)e.beginPath(),e.moveTo(C-25,k-110),e.quadraticCurveTo(C-25+Math.cos(it)*45,k-110+Math.sin(it)*40-15,C-25+Math.cos(it)*65,k-110+Math.sin(it)*40),e.stroke()};c(640,360),c(720,350),c(940,360),e.fillStyle="#fce7f3",e.fillRect(720,370,190,85),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(720,370,190,85),e.fillStyle="#dc2626",e.beginPath(),e.moveTo(705,370),e.lineTo(815,310),e.lineTo(925,370),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let C=720;C<910;C+=18)e.beginPath(),e.moveTo(C,370),e.lineTo(815,310),e.stroke();e.fillStyle="#374151",e.fillRect(785,395,35,60),e.fillRect(850,390,30,30),e.fillStyle="#f8fafc",e.fillRect(570,385,140,70),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(570,385,140,70),e.fillStyle="#2563eb",e.beginPath(),e.moveTo(555,385),e.lineTo(640,335),e.lineTo(725,385),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let C=570;C<710;C+=18)e.beginPath(),e.moveTo(C,385),e.lineTo(640,335),e.stroke();e.fillStyle="#1e3a8a",e.fillRect(620,405,30,50),e.fillStyle="#ea580c",e.fillRect(0,510,1024,45),e.fillStyle="#fde047";for(let C=20;C<1024;C+=40)e.beginPath(),e.arc(C,510,16,0,Math.PI),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2,e.stroke();e.fillStyle="#18181b",e.fillRect(0,555,1024,35);const h=["#dc2626","#ffffff","#16a34a","#fde047"];for(let C=0;C<48;C++)e.fillStyle=h[C%h.length],e.fillRect(C*22,558,14,29);const d=(C,k)=>{e.strokeStyle="#94a3b8",e.lineWidth=3,e.beginPath(),e.arc(C,k,8,0,Math.PI*2),e.stroke(),e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(C,k+8),e.bezierCurveTo(C+28,k+8,C+44,k+28,C,k+64),e.bezierCurveTo(C-44,k+28,C-28,k+8,C,k+8),e.closePath(),e.fill(),e.strokeStyle="#64748b",e.lineWidth=2.5,e.stroke(),e.fillStyle="#94a3b8",[[0,24],[-14,28],[14,28],[-8,42],[8,42],[0,52]].forEach(([it,bt])=>{e.beginPath(),e.arc(C+it,k+bt,3.2,0,Math.PI*2),e.fill()})};d(220,570),d(512,570),d(804,570);const f=new ie(t),l=document.createElement("canvas");l.width=1024,l.height=260;const u=l.getContext("2d"),_=u.createLinearGradient(0,0,0,260);_.addColorStop(0,"#f8fafc"),_.addColorStop(.5,"#e2e8f0"),_.addColorStop(1,"#94a3b8"),u.fillStyle=_,u.fillRect(0,0,1024,260),u.fillStyle="#475569";for(let C=30;C<1e3;C+=45)u.beginPath(),u.arc(C,24,7,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(C-2,22,2.5,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.fillStyle="#475569",u.beginPath(),u.arc(C,236,7,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(C-2,234,2.5,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.fillStyle="#475569";u.fillStyle="#f59e0b",u.strokeStyle="#dc2626",u.lineWidth=7,u.font="bold 82px sans-serif",u.textAlign="center",u.textBaseline="middle",u.strokeText("বাংলাদেশ",512,115),u.fillText("বাংলাদেশ",512,115),u.fillStyle="#16a34a",u.font="bold 78px sans-serif",u.fillText("বাংলাদেশ",512,113),u.fillStyle="#fef08a",u.font="bold 74px sans-serif",u.fillText("বাংলাদেশ",512,111);const v=["#dc2626","#16a34a","#f59e0b","#06b6d4","#ec4899"];for(let C=0;C<18;C++)u.beginPath(),u.arc(310+C*24,185,7.5,0,Math.PI*2),u.fillStyle=v[C%v.length],u.fill(),u.strokeStyle="#18181b",u.lineWidth=1.8,u.stroke();const m=(C,k)=>{u.beginPath(),u.arc(C,k,62,0,Math.PI*2),u.fillStyle="#cbd5e1",u.fill(),u.strokeStyle="#64748b",u.lineWidth=4,u.stroke(),u.beginPath(),u.arc(C,k,48,0,Math.PI*2),u.fillStyle="#dc2626",u.fill(),u.strokeStyle="#fde047",u.lineWidth=3,u.stroke(),u.fillStyle="#ffffff",u.font="bold 50px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText("মা",C,k)};m(140,125),m(884,125);const p=new ie(l),w=document.createElement("canvas");w.width=1024,w.height=1024;const M=w.getContext("2d");M.beginPath(),M.moveTo(40,1024),M.lineTo(40,520),M.bezierCurveTo(40,60,984,60,984,520),M.lineTo(984,1024),M.closePath(),M.fillStyle="#dc2626",M.fill(),M.strokeStyle="#881337",M.lineWidth=12,M.stroke(),M.strokeStyle="#fde047",M.lineWidth=5,M.stroke(),M.fillStyle="#1d4ed8",M.fillRect(456,120,112,680),M.strokeStyle="#18181b",M.lineWidth=3,M.strokeRect(456,120,112,680),M.fillStyle="#ffffff",M.fillRect(498,120,28,680),M.beginPath(),M.arc(512,780,42,0,Math.PI*2),M.fillStyle="#dc2626",M.fill(),M.strokeStyle="#fde047",M.lineWidth=5,M.stroke(),M.fillStyle="#ffffff",M.font="bold 44px sans-serif",M.textAlign="center",M.textBaseline="middle",M.fillText("১",512,780);const y=(C,k,it,bt)=>{M.save(),M.translate(k,it),M.rotate(bt),M.font="bold 88px sans-serif",M.textAlign="center",M.textBaseline="middle",M.strokeStyle="#18181b",M.lineWidth=12,M.strokeText(C,0,0),M.fillStyle="#ffffff",M.fillText(C,0,0),M.restore()};y("মায়ের",310,240,-.22),y("দোয়া",714,240,.22);const P=(C,k)=>{M.save(),M.translate(C,500),k&&M.scale(-1,1),M.beginPath(),M.arc(70,-160,36,0,Math.PI*2),M.fillStyle="#fde047",M.fill(),M.strokeStyle="#18181b",M.lineWidth=3,M.stroke(),M.beginPath(),M.arc(70,-160,16,0,Math.PI*2),M.fillStyle="#ea580c",M.fill();for(let bt=0;bt<7;bt++){const Bt=-Math.PI/2+(bt-3)*.35;M.beginPath(),M.ellipse(80+Math.cos(Bt)*45,-50+Math.sin(Bt)*35,18,38,Bt,0,Math.PI*2),M.fillStyle="#ec4899",M.fill(),M.strokeStyle="#18181b",M.lineWidth=2.5,M.stroke()}M.beginPath(),M.arc(80,-50,24,0,Math.PI*2),M.fillStyle="#fef08a",M.fill(),M.stroke(),((bt,Bt)=>{M.fillStyle="#16a34a",M.beginPath(),M.ellipse(bt-30,Bt+20,16,32,.6,0,Math.PI*2),M.ellipse(bt+30,Bt+20,16,32,-.6,0,Math.PI*2),M.fill(),M.stroke(),M.fillStyle="#1d4ed8",M.beginPath(),M.arc(bt,Bt,55,0,Math.PI*2),M.fill(),M.strokeStyle="#18181b",M.lineWidth=3,M.stroke(),M.strokeStyle="#38bdf8",M.lineWidth=4,M.beginPath(),M.arc(bt,Bt,36,.4,Math.PI*1.6),M.stroke(),M.beginPath(),M.arc(bt,Bt,20,Math.PI,Math.PI*2.2),M.stroke(),M.fillStyle="#ffffff",M.beginPath(),M.arc(bt,Bt,10,0,Math.PI*2),M.fill()})(85,110),M.restore()};P(260,!1),P(764,!0);const L=new ie(w),I=document.createElement("canvas");I.width=512,I.height=128;const B=I.getContext("2d");B.fillStyle="#ffffff",B.fillRect(0,0,512,128),B.fillStyle="#dc2626";for(let C=-128;C<640;C+=36)B.beginPath(),B.moveTo(C,0),B.lineTo(C+18,0),B.lineTo(C+18+128,128),B.lineTo(C+128,128),B.closePath(),B.fill();const S=new ie(I),x=document.createElement("canvas");x.width=1024,x.height=1024;const T=x.getContext("2d");T.fillStyle="#f59e0b",T.fillRect(0,0,1024,1024),T.strokeStyle="rgba(234, 88, 12, 0.18)",T.lineWidth=3;for(let C=-1024;C<2048;C+=64)T.beginPath(),T.moveTo(C,0),T.lineTo(C+1024,1024),T.stroke(),T.beginPath(),T.moveTo(C,1024),T.lineTo(C+1024,0),T.stroke();T.fillStyle="#881337",T.fillRect(0,0,1024,140),T.fillRect(0,884,1024,140),T.fillStyle="#06b6d4",T.fillRect(0,140,1024,28),T.fillRect(0,856,1024,28),T.fillStyle="#10b981",T.fillRect(0,168,1024,16),T.fillRect(0,840,1024,16);for(let C=32;C<1024;C+=64)T.beginPath(),T.arc(C,140,16,0,Math.PI),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(C,884,16,Math.PI,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke();[70,954].forEach(C=>{T.fillStyle="#ffffff",T.font="bold 44px sans-serif",T.textAlign="center",T.textBaseline="middle",T.shadowColor="rgba(0,0,0,0.8)",T.shadowBlur=8,T.fillText("মা বাবার দোয়া",512,C),T.shadowBlur=0}),((C,k)=>{T.strokeStyle="#ea580c",T.lineWidth=4;for(let it=0;it<Math.PI*2;it+=Math.PI/16)T.beginPath(),T.moveTo(C,k),T.lineTo(C+Math.cos(it)*260,k+Math.sin(it)*260),T.stroke();for(let it=0;it<16;it++){const bt=it*Math.PI/8,Bt=C+Math.cos(bt)*175,Jt=k+Math.sin(bt)*175;T.beginPath(),T.ellipse(Bt,Jt,42,65,bt+Math.PI/2,0,Math.PI*2),T.fillStyle=it%2===0?"#dc2626":"#0284c7",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke()}for(let it=0;it<12;it++){const bt=it*Math.PI/6,Bt=C+Math.cos(bt)*115,Jt=k+Math.sin(bt)*115;T.beginPath(),T.ellipse(Bt,Jt,34,52,bt+Math.PI/2,0,Math.PI*2),T.fillStyle=it%2===0?"#ec4899":"#10b981",T.fill(),T.strokeStyle="#18181b",T.lineWidth=3.5,T.stroke()}T.beginPath(),T.arc(C,k,62,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(C,k,32,0,Math.PI*2),T.fillStyle="#b91c1c",T.fill(),[-1,1].forEach(it=>{T.beginPath(),T.moveTo(C+it*160,k-60),T.bezierCurveTo(C+it*320,k-140,C+it*420,k-40,C+it*340,k+50),T.bezierCurveTo(C+it*280,k+120,C+it*200,k+60,C+it*180,k),T.fillStyle="#0d9488",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(C+it*320,k-30,28,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.beginPath(),T.arc(C+it*320,k-30,16,0,Math.PI*2),T.fillStyle="#1e3a8a",T.fill()})})(512,512);const rt=(C,k)=>{const it=["#dc2626","#ec4899","#f59e0b","#10b981"];for(let bt=0;bt<8;bt++){const Bt=bt*Math.PI/4,Jt=C+Math.cos(Bt)*48,ne=k+Math.sin(Bt)*48;T.beginPath(),T.arc(Jt,ne,22,0,Math.PI*2),T.fillStyle=it[bt%it.length],T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke()}T.beginPath(),T.arc(C,k,26,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(C,k,12,0,Math.PI*2),T.fillStyle="#991b1b",T.fill()};[120,904].forEach(C=>{rt(C,320),rt(C,704)});const U=new ie(x),W=document.createElement("canvas");W.width=256,W.height=256;const q=W.getContext("2d");q.fillStyle="#b91c1c",q.fillRect(0,0,256,256),q.strokeStyle="#fde047",q.lineWidth=3;for(let C=0;C<256;C+=32)q.beginPath(),q.moveTo(C,0),q.lineTo(C+32,256),q.stroke(),q.beginPath(),q.moveTo(256-C,0),q.lineTo(256-C-32,256),q.stroke();const V=new ie(W),nt=document.createElement("canvas");nt.width=512,nt.height=256;const j=nt.getContext("2d");j.fillStyle="#f59e0b",j.fillRect(0,0,512,256),j.fillStyle="#ea580c",j.beginPath(),j.arc(256,105,45,0,Math.PI*2),j.fill();for(let C=0;C<Math.PI*2;C+=Math.PI/8)j.fillStyle="#dc2626",j.beginPath(),j.arc(256+Math.cos(C)*62,105+Math.sin(C)*62,14,0,Math.PI*2),j.fill();j.fillStyle="#fde047",j.beginPath(),j.arc(256,105,26,0,Math.PI*2),j.fill(),j.fillStyle="#0d9488",j.fillRect(0,185,512,71),j.strokeStyle="#fde047",j.lineWidth=5;for(let C=-20;C<=530;C+=32)j.beginPath(),j.moveTo(C,185),j.lineTo(C+32,256),j.stroke(),j.beginPath(),j.moveTo(C+32,185),j.lineTo(C,256),j.stroke();const J=new ie(nt),H=new F({color:14427686,metalness:.6,roughness:.3}),ft=new F({color:15658734,metalness:.9,roughness:.15}),Q=new F({color:2040865,roughness:.9}),st=new F({color:165063,metalness:.5,roughness:.4}),$=new F({color:1409085,roughness:.6}),Mt=new F({map:f,roughness:.4}),pt=new F({map:p,roughness:.35,metalness:.1}),yt=new F({map:L,roughness:.6,transparent:!0,side:Te}),Et=new F({map:S,roughness:.45,metalness:.1}),dt=new F({map:J,roughness:.5,side:Te}),At=new F({map:U,roughness:.7,side:Te}),D=new F({map:V,roughness:.6}),_t=new gt,ct=new ot(.045,.045,1.8,12);ct.rotateX(Math.PI/2);const wt=new g(ct,H);wt.position.set(0,.65,.1),_t.add(wt);const ut=new ot(.04,.04,.95,12);ut.rotateX(-.18);const Ot=new g(ut,H);Ot.position.set(0,.95,-.9),_t.add(Ot),[-.1,.1].forEach(C=>{const k=new ot(.025,.02,.7,8);k.rotateX(.15);const it=new g(k,ft);it.position.set(C,.48,-1.02),_t.add(it)});const lt=new ot(.025,.025,.75,12);lt.rotateZ(Math.PI/2);const A=new g(lt,ft);A.position.set(0,1.35,-.85),_t.add(A),[-.38,.38].forEach(C=>{const k=new ot(.032,.032,.14,12);k.rotateZ(Math.PI/2);const it=new g(k,Q);it.position.set(C,1.35,-.85),_t.add(it)});const E=new Ht(.09,14,14);E.scale(1,1,.7);const X=new g(E,new de({color:16777215}));X.position.set(0,1.05,-1.08),_t.add(X),this.headlights.push(X);const xt=new Ht(.05,12,12);this.bellMesh=new g(xt,ft),this.bellMesh.position.set(-.24,1.4,-.85),_t.add(this.bellMesh);const ht=new O(.26,.08,.32),mt=new g(ht,Q);mt.position.set(0,1.08,-.15),_t.add(mt),[-.08,.08].forEach(C=>{const k=new ot(.02,.02,.12,8),it=new g(k,ft);it.position.set(C,.98,-.15),_t.add(it)});const It=new ot(.06,.06,.28,12);It.rotateZ(Math.PI/2);const Y=new g(It,ft);Y.position.set(0,.52,-.15),_t.add(Y),this.bodyGroup.add(_t),this.frontWheel=this.createRickshawWheel(.42,H,ft,Q),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const Rt=new ot(.46,.46,.12,16,1,!0,0,Math.PI*.8);Rt.rotateZ(Math.PI/2);const Nt=new g(Rt,st);Nt.position.set(0,.44,-1.05),this.bodyGroup.add(Nt),[-.78,.78].forEach(C=>{const k=this.createRickshawWheel(.48,H,ft,Q);k.position.set(C,.48,.95),this.bodyGroup.add(k),this.wheels.push(k);const it=new ot(.53,.53,.16,20,1,!0,0,Math.PI);it.rotateZ(Math.PI/2);const bt=new g(it,Et);bt.position.set(C,.48,.95),this.bodyGroup.add(bt)});const Ct=new gt,vt=new O(1.25,.08,1.25),jt=new g(vt,$);jt.position.set(0,.65,.75),Ct.add(jt);const Yt=new O(.9,.05,.5),Xt=new g(Yt,$);Xt.position.set(0,.48,.35),Ct.add(Xt);const zt=new O(1.2,.38,.58),Lt=new g(zt,$);Lt.position.set(0,.86,.88),Ct.add(Lt),[-.62,.62].forEach((C,k)=>{const it=new qt(1.15,.52),bt=new g(it,dt);bt.position.set(C,.96,.75),bt.rotation.y=k===0?-Math.PI/2:Math.PI/2,Ct.add(bt)});const $t=new O(1.18,.14,.56),ee=new g($t,D);ee.position.set(0,1.08,.88),Ct.add(ee);const kt=new O(1.16,.22,.1),Tt=new g(kt,D);Tt.position.set(0,1.15,1.08),Ct.add(Tt),[-.58,.58].forEach(C=>{const k=new O(.08,.28,.6),it=new g(k,st);it.position.set(C,1.22,.88),Ct.add(it)});const St=new qt(1.06,.54),b=new g(St,Mt);b.position.set(0,.66,1.18),b.rotation.y=Math.PI,Ct.add(b);const z=new qt(1.08,.19),et=new g(z,pt);et.position.set(0,.96,1.185),et.rotation.y=Math.PI,Ct.add(et);const Pt=new qt(1.22,.82),Z=new g(Pt,yt);Z.position.set(0,1.5,1.11),Z.rotation.y=Math.PI,Ct.add(Z),[-.78,.78].forEach(C=>{const k=new g(new ot(.055,.055,.035,12),ft);k.rotateX(Math.PI/2),k.position.set(C,.62,1.16),Ct.add(k);const it=new Ht(.048,12,12),bt=new g(it,new de({color:15680580}));bt.position.set(C,.62,1.18),Ct.add(bt),this.brakeLights.push(bt)});const tt=new ot(.7,.7,.96,24,1,!0,-Math.PI/2,Math.PI);tt.rotateX(-Math.PI/2);const Dt=new g(tt,At);Dt.position.set(0,1.5,.62),Ct.add(Dt);const Kt=new ln(.7,.022,8,24,Math.PI),Zt=new g(Kt,H);Zt.position.set(0,1.5,.14),Ct.add(Zt);for(let C=0;C<=14;C++){const k=C*Math.PI/14,it=Math.cos(k)*.7,bt=1.5+Math.sin(k)*.7,Bt=new g(new Ht(.022,6,6),new F({color:14427686,roughness:.8}));Bt.position.set(it,bt-.02,.14),Ct.add(Bt)}const Vt=new ln(.7,.025,8,24,Math.PI),he=new g(Vt,H);he.position.set(0,1.5,1.1),Ct.add(he);for(let C=0;C<=14;C++){const k=C*Math.PI/14,it=Math.cos(k)*.7,bt=1.5+Math.sin(k)*.7,Bt=new g(new Ht(.022,6,6),new F({color:14427686,roughness:.8}));Bt.position.set(it,bt-.02,1.1),Ct.add(Bt)}const Ut=new ot(.7,.7,.12,24,1,!0,-Math.PI/2,Math.PI);Ut.rotateX(-Math.PI/2);const te=new g(Ut,At);te.position.set(0,1.5,1.04),Ct.add(te),[-.7,.7].forEach((C,k)=>{const it=new qt(.82,.36),bt=new g(it,At);bt.position.set(C,1.34,.65),bt.rotation.y=k===0?-Math.PI/2:Math.PI/2,Ct.add(bt);const Bt=new g(new ot(.012,.012,.78,8),ft);Bt.position.set(C+(k===0?-.015:.015),1.34,.65),Bt.rotation.x=.45,Ct.add(Bt);const Jt=new g(new ot(.012,.012,.78,8),ft);Jt.position.set(C+(k===0?-.015:.015),1.34,.65),Jt.rotation.x=-.45,Ct.add(Jt);const ne=new g(new Ht(.022,8,8),H);ne.position.set(C+(k===0?-.025:.025),1.34,.65),Ct.add(ne)}),[-.64,.64].forEach(C=>{const k=new ot(.016,.016,1.15,8);k.rotateX(.42);const it=new g(k,H);it.position.set(C,1.4,.6),Ct.add(it)}),this.bodyGroup.add(Ct);const Wt=new gt,me=new F({color:165063,roughness:.8}),fe=new F({color:9262372,roughness:.7}),Le=new F({color:1409085,roughness:.9}),rn=new O(.36,.48,.22),an=new g(rn,me);an.position.set(0,1.42,-.25),an.rotation.x=.22,Wt.add(an);const bn=new Ht(.12,14,14),un=new g(bn,fe);un.position.set(0,1.74,-.32),Wt.add(un);const On=new ln(.11,.035,8,16);On.rotateX(Math.PI/2);const R=new g(On,new F({color:14427686}));R.position.set(0,1.68,-.32),Wt.add(R),[-.18,.18].forEach(C=>{const k=new ot(.04,.035,.52,8);k.rotateX(.75);const it=new g(k,fe);it.position.set(C,1.42,-.52),Wt.add(it)});const K=new O(.38,.44,.32),at=new g(K,Le);at.position.set(0,1.05,-.18),Wt.add(at),this.bodyGroup.add(Wt),this.buildCuteRomanticCouple(),[-.32,.32].forEach(C=>{const k=new pe(.12,.65,8);k.rotateX(-Math.PI/2);const it=new de({color:16759552,transparent:!0,opacity:0}),bt=new g(k,it);bt.position.set(C,.58,1.25),this.bodyGroup.add(bt),this.exhaustFires.push(bt)})}createRickshawWheel(t,e,n,i){const o=new gt,a=new ln(t,.038,14,36);a.rotateY(Math.PI/2);const r=new g(a,i);o.add(r);const c=new ln(t*.92,.02,10,36);c.rotateY(Math.PI/2);const h=new g(c,n);o.add(h);const d=new ot(.06,.06,.14,14);d.rotateZ(Math.PI/2);const f=new g(d,e);o.add(f);for(let l=0;l<14;l++){const u=l*Math.PI/7,_=new ot(.005,.005,t*1.84,4);_.rotateX(u);const v=new g(_,n);o.add(v)}return o}buildCuteRomanticCouple(){this.coupleGroup=new gt,this.coupleGroup.position.set(0,0,0);const t=new F({color:16106390,roughness:.6}),e=new F({color:1841431,roughness:.5}),n=new F({color:986638,roughness:.4}),i=new F({color:15680580,roughness:.7}),o=new F({color:1976635,roughness:.8}),a=new F({color:15485081,roughness:.6}),r=new F({color:16638023,roughness:.7}),c=new F({color:16777215,roughness:.8}),h=new gt;h.position.set(-.25,1.18,.82);const d=new O(.32,.42,.24),f=new g(d,i);f.position.set(0,.22,0),f.rotation.y=.16,f.rotation.z=-.06,h.add(f);const l=new Ht(.12,14,14),u=new g(l,t);u.position.set(.02,.52,.02),u.rotation.y=.26,u.rotation.z=-.08,h.add(u);const _=new Ht(.13,14,14);_.scale(1.02,1.05,1.02);const v=new g(_,e);v.position.set(.02,.55,.01),h.add(v);const m=new O(.28,.18,.48),p=new g(m,o);p.position.set(0,-.05,-.16),h.add(p);const w=new ot(.04,.035,.38,8);w.rotateZ(.25);const M=new g(w,i);M.position.set(-.22,.18,0),h.add(M);const y=new ot(.04,.035,.34,8);y.rotateZ(-Math.PI/4),y.rotateX(-.18);const P=new g(y,i);P.position.set(.18,.14,-.07),h.add(P),this.coupleGroup.add(h);const L=new gt;L.position.set(.25,1.18,.82);const I=new O(.28,.38,.22),B=new g(I,a);B.position.set(0,.2,0),B.rotation.y=-.18,B.rotation.z=.08,L.add(B);const S=new O(.32,.35,.24),x=new g(S,r);x.position.set(0,.22,.02),L.add(x);const T=new Ht(.11,14,14),G=new g(T,t);G.position.set(-.02,.48,.02),G.rotation.y=-.3,G.rotation.z=.1,L.add(G);const rt=new Ht(.12,14,14);rt.scale(1.04,1.06,1.08);const U=new g(rt,n);U.position.set(-.02,.51,0),L.add(U);const W=new ot(.04,.02,.32,8);W.rotateX(-.4);const q=new g(W,n);q.position.set(-.01,.38,.15),L.add(q);const V=new O(.26,.16,.46),nt=new g(V,c);nt.position.set(0,-.05,-.16),L.add(nt);const j=new ot(.035,.03,.35,8);j.rotateZ(-.25),j.rotateX(-.25);const J=new g(j,a);J.position.set(.2,.16,-.05),L.add(J);const H=new gt,ft=new ot(.007,.007,.32,6),Q=new F({color:1409085,roughness:.8}),st=new g(ft,Q);st.position.set(0,.14,0),H.add(st);const $=new O(.07,.012,.035),Mt=new g($,Q);Mt.position.set(.035,.12,0),Mt.rotation.z=.3,H.add(Mt);const pt=new g($,Q);pt.position.set(-.035,.18,0),pt.rotation.z=-.3,H.add(pt);const yt=new F({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Et=new g(new Zo(.055,1),yt);Et.position.set(0,.3,0),Et.scale.set(1.1,1.25,1.1),H.add(Et);const dt=new g(new Ht(.038,8,8),new F({color:10033947,roughness:.3}));dt.position.set(0,.32,0),H.add(dt),H.position.set(.22,.22,-.15),H.rotation.x=-.35,H.rotation.z=-.22,L.add(H);const At=new ot(.035,.03,.32,8);At.rotateZ(Math.PI/4),At.rotateX(-.18);const D=new g(At,a);D.position.set(-.17,.14,-.07),L.add(D),this.coupleGroup.add(L);const _t=new gt;_t.position.set(0,1.28,.74);const ct=new g(new Ht(.045,10,10),t);ct.scale.set(1.3,.9,1.1),ct.position.set(-.02,0,0),_t.add(ct);const wt=new g(new Ht(.042,10,10),t);wt.scale.set(1.2,.85,1.05),wt.position.set(.02,.01,.01),_t.add(wt),this.coupleGroup.add(_t),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,o,a){const c=t*1e3/3600/.42*a;this.wheelRotation-=c,this.wheels.forEach(m=>{m.rotation.x=this.wheelRotation});const h=n-e,d=-h*.12;this.currentRoll+=(d-this.currentRoll)*Math.min(1,a*7),this.bodyGroup.rotation.z=this.currentRoll;const f=-h*.08;this.currentYaw+=(f-this.currentYaw)*Math.min(1,a*6),this.bodyGroup.rotation.y=this.currentYaw;let l=0;i?l=.04:o&&(l=-.05),this.currentPitch+=(l-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const u=performance.now()*.001,_=Math.min(1,t/80),v=Math.sin(u*8.5)*.025*_;this.coupleGroup.position.y=v,this.coupleGroup.rotation.z=Math.sin(u*4.2)*.015*_,this.exhaustFires.forEach(m=>{o?(m.material.opacity=.9,m.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):m.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(m=>m.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(m=>m.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=1.15,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Up{constructor(){this.group=new gt,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new yn,this.collisionSize=new N(1.32,1.74,2.58),this._boxCenter=new N,this.buildCNG(),this.group.scale.set(.96,.96,.96)}buildCNG(){this.bodyGroup=new gt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.clearRect(0,0,1024,1024),e.beginPath(),e.moveTo(0,420),e.lineTo(0,150),e.quadraticCurveTo(0,18,175,18),e.lineTo(849,18),e.quadraticCurveTo(1024,18,1024,150),e.lineTo(1024,420),e.closePath(),e.fillStyle="#1c1917",e.fill(),e.fillStyle="rgba(255, 255, 255, 0.025)";for(let kt=0;kt<1024;kt+=4)e.fillRect(kt,0,2,420);for(let kt=0;kt<420;kt+=4)e.fillRect(0,kt,1024,2);const n=262,i=135,o=500,a=220;e.fillStyle="#09090b",e.beginPath(),e.roundRect(n-14,i-14,o+28,a+28,28),e.fill();const r=e.createLinearGradient(n,i,n,i+a);r.addColorStop(0,"#0f172a"),r.addColorStop(.4,"#1e293b"),r.addColorStop(1,"#090d16"),e.fillStyle=r,e.beginPath(),e.roundRect(n,i,o,a,20),e.fill(),e.fillStyle="#2563eb",e.beginPath(),e.roundRect(n+25,i+65,o-50,a-75,14),e.fill(),e.strokeStyle="#1d4ed8",e.lineWidth=4,e.beginPath(),e.moveTo(n+o*.5,i+65),e.lineTo(n+o*.5,i+a-10),e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.12)",e.beginPath(),e.moveTo(n+40,i+a),e.lineTo(n+160,i),e.lineTo(n+220,i),e.lineTo(n+100,i+a),e.closePath(),e.fill(),e.fillStyle="#facc15",e.fillRect(0,420,1024,105),e.fillStyle="#18181b",e.fillRect(0,416,1024,6),e.fillRect(0,523,1024,6),e.fillStyle="#15803d",e.fillRect(0,525,1024,499),e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(0,529,1024,4);const c=230,h=565,d=564,f=345;e.fillStyle="#14532d",e.beginPath(),e.roundRect(c-6,h-6,d+12,f+12,12),e.fill(),e.fillStyle="#166534",e.beginPath(),e.roundRect(c,h,d,f,8),e.fill(),e.strokeStyle="#22c55e",e.lineWidth=3,e.stroke();for(let kt=0;kt<4;kt++){const Tt=h+38+kt*68;e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+28,Tt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+32,Tt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+32,Tt+4,227,4),e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+301,Tt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+305,Tt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+305,Tt+4,227,4)}e.fillStyle="#cbd5e1",e.beginPath(),e.roundRect(c+d*.5-28,h+f-36,56,18,4),e.fill(),e.fillStyle="#09090b",e.beginPath(),e.arc(c+d*.5,h+f-27,4,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="900 64px sans-serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.7)",e.shadowBlur=6,e.fillText("CNG",120,715),e.shadowBlur=0;const l=810,u=665,_=165,v=95;e.fillStyle="#facc15",e.beginPath(),e.roundRect(l,u,_,v,8),e.fill(),e.strokeStyle="#18181b",e.lineWidth=4,e.stroke(),e.fillStyle="#18181b",e.font="900 32px sans-serif",e.fillText("HR 26",l+_*.5,u+34),e.font="900 36px monospace",e.fillText("0123",l+_*.5,u+70),e.fillStyle="#18181b",e.fillRect(0,955,1024,69),e.fillStyle="#3f3f46",e.fillRect(0,955,1024,6);const m=new ie(t),p=document.createElement("canvas");p.width=1024,p.height=1024;const w=p.getContext("2d");w.clearRect(0,0,1024,1024),w.beginPath(),w.moveTo(0,480),w.lineTo(0,140),w.quadraticCurveTo(0,18,175,18),w.lineTo(849,18),w.quadraticCurveTo(1024,18,1024,140),w.lineTo(1024,480),w.closePath(),w.fillStyle="#facc15",w.fill(),w.fillStyle="#09090b",w.beginPath(),w.roundRect(75,55,874,340,24),w.fill(),w.fillStyle="#1e293b",w.fillRect(265,75,494,300),w.fillStyle="#1e293b",w.fillRect(95,75,150,300),w.fillStyle="#1e293b",w.fillRect(779,75,150,300),w.fillStyle="#09090b",w.fillRect(245,70,20,310),w.fillRect(759,70,20,310),w.strokeStyle="#09090b",w.lineWidth=10,w.beginPath(),w.moveTo(420,370),w.lineTo(610,205),w.stroke(),w.strokeStyle="#18181b",w.lineWidth=6,w.beginPath(),w.moveTo(560,245),w.lineTo(660,160),w.stroke(),w.fillStyle="#f59e0b",w.beginPath(),w.roundRect(115,420,95,34,6),w.fill(),w.beginPath(),w.roundRect(814,420,95,34,6),w.fill(),w.fillStyle="#15803d",w.fillRect(0,480,1024,544),w.fillStyle="#18181b",w.beginPath(),w.moveTo(310,480),w.lineTo(714,480),w.lineTo(650,880),w.lineTo(374,880),w.closePath(),w.fill(),w.fillStyle="#facc15",w.beginPath(),w.roundRect(432,590,160,80,6),w.fill(),w.strokeStyle="#18181b",w.lineWidth=3,w.stroke(),w.fillStyle="#18181b",w.font="900 26px sans-serif",w.textAlign="center",w.fillText("HR 26",512,622),w.font="900 28px monospace",w.fillText("0123",512,654),w.fillStyle="#ffffff",w.font="900 52px sans-serif",w.fillText("CNG",200,680);const M=new ie(p),y=document.createElement("canvas");y.width=1024,y.height=512;const P=y.getContext("2d");P.fillStyle="#1c1917",P.fillRect(0,0,1024,210),P.fillStyle="#facc15",P.fillRect(0,210,1024,60),P.fillStyle="#18181b",P.fillRect(0,206,1024,4),P.fillRect(0,270,1024,4),P.fillStyle="#15803d",P.fillRect(0,270,1024,242),P.fillStyle="#0f172a",P.beginPath(),P.roundRect(240,75,480,310,18),P.fill(),P.fillStyle="#2563eb",P.beginPath(),P.roundRect(460,230,240,110,12),P.fill(),P.strokeStyle="#09090b",P.lineWidth=14,P.beginPath(),P.roundRect(240,75,480,310,18),P.stroke();const L=new ie(y),I=new F({color:1409085,metalness:.25,roughness:.35});new F({color:16436245,metalness:.15,roughness:.38});const B=new F({color:1841431,roughness:.85,metalness:.05}),S=new F({color:2450411,roughness:.55}),x=new F({color:1579035,roughness:.92}),T=new F({color:15857145,metalness:.45,roughness:.35}),G=new F({color:16317180,metalness:.92,roughness:.12}),rt=new F({map:m,roughness:.4,metalness:.1,side:Te,transparent:!0,alphaTest:.2}),U=new F({map:M,roughness:.4,metalness:.1,side:Te,transparent:!0,alphaTest:.2}),W=new F({map:L,roughness:.42,metalness:.1,side:Te}),q=new O(1.24,.24,2.38),V=new g(q,I);V.position.set(0,.34,0),V.castShadow=!0,V.receiveShadow=!0,this.bodyGroup.add(V);const nt=new O(.85,.22,.65),j=new g(nt,I);j.position.set(0,.33,-1.05),j.castShadow=!0,this.bodyGroup.add(j);const J=new gt,H=()=>{const Pt=[],Z=[],tt=[],Dt=(Ut,te)=>{let Wt=.635;const me=-1.18+te*2.27;me<-.88?Wt=.635-(-.88-me)/.3*.05:me>.85&&(Wt=.635-(me-.85)/.24*.035);const fe=Ut*Wt,Le=Math.max(0,1-Math.pow(Math.abs(Ut),2.2)),rn=Math.sin(Math.PI*(.12+.76*te)),bn=1.54-.012*Math.pow(te-.5,2)*4+.13*Le*rn;return new N(fe,bn,me)};for(let Ut=0;Ut<=32;Ut++){const te=Ut/32;for(let Wt=0;Wt<=24;Wt++){const me=Wt/24*2-1,fe=Dt(me,te);Pt.push(fe.x,fe.y,fe.z),Z.push(Wt/24,Ut/32)}}const Kt=25;for(let Ut=0;Ut<32;Ut++)for(let te=0;te<24;te++){const Wt=Ut*Kt+te,me=(Ut+1)*Kt+te,fe=(Ut+1)*Kt+(te+1),Le=Ut*Kt+(te+1);tt.push(Wt,me,Le),tt.push(me,fe,Le)}const Zt=.065;let Vt=Pt.length/3;for(let Ut=0;Ut<=32;Ut++){const te=Ut/32,Wt=Dt(-1,te);Pt.push(Wt.x,Wt.y,Wt.z),Z.push(0,te),Pt.push(Wt.x,Wt.y-Zt,Wt.z),Z.push(1,te)}for(let Ut=0;Ut<32;Ut++){const te=Vt+Ut*2,Wt=Vt+(Ut+1)*2,me=Vt+(Ut+1)*2+1,fe=Vt+Ut*2+1;tt.push(te,fe,Wt),tt.push(Wt,fe,me)}Vt=Pt.length/3;for(let Ut=0;Ut<=32;Ut++){const te=Ut/32,Wt=Dt(1,te);Pt.push(Wt.x,Wt.y,Wt.z),Z.push(0,te),Pt.push(Wt.x,Wt.y-Zt,Wt.z),Z.push(1,te)}for(let Ut=0;Ut<32;Ut++){const te=Vt+Ut*2,Wt=Vt+(Ut+1)*2,me=Vt+(Ut+1)*2+1,fe=Vt+Ut*2+1;tt.push(te,Wt,fe),tt.push(Wt,fe,me)}Vt=Pt.length/3;for(let Ut=0;Ut<=24;Ut++){const te=Ut/24*2-1,Wt=Dt(te,0);Pt.push(Wt.x,Wt.y,Wt.z),Z.push(Ut/24,0),Pt.push(Wt.x,Wt.y-Zt,Wt.z),Z.push(Ut/24,1)}for(let Ut=0;Ut<24;Ut++){const te=Vt+Ut*2,Wt=Vt+(Ut+1)*2,me=Vt+(Ut+1)*2+1,fe=Vt+Ut*2+1;tt.push(te,fe,Wt),tt.push(Wt,fe,me)}Vt=Pt.length/3;for(let Ut=0;Ut<=24;Ut++){const te=Ut/24*2-1,Wt=Dt(te,1);Pt.push(Wt.x,Wt.y,Wt.z),Z.push(Ut/24,0),Pt.push(Wt.x,Wt.y-Zt,Wt.z),Z.push(Ut/24,1)}for(let Ut=0;Ut<24;Ut++){const te=Vt+Ut*2,Wt=Vt+(Ut+1)*2,me=Vt+(Ut+1)*2+1,fe=Vt+Ut*2+1;tt.push(te,Wt,fe),tt.push(Wt,fe,me)}const he=new Fe;return he.setAttribute("position",new ue(Pt,3)),he.setAttribute("uv",new ue(Z,2)),he.setIndex(tt),he.computeVertexNormals(),he},ft=new g(H(),B);ft.castShadow=!0,ft.receiveShadow=!0,J.add(ft);const Q=[-.68,-.18,.32,.76],st=new F({color:2565930,roughness:.65});Q.forEach(kt=>{const Tt=(kt- -1.18)/2.27,St=[];for(let Pt=0;Pt<=16;Pt++){const Z=Pt/16*2-1,tt=Math.max(0,1-Math.pow(Math.abs(Z),2.2)),Dt=Math.sin(Math.PI*(.12+.76*Tt)),Kt=1.54+.13*tt*Dt+.005;St.push(new N(Z*.63,Kt,kt))}const b=new Cn(St),z=new vn(b,16,.012,6,!1),et=new g(z,st);J.add(et)}),[-.635,.635].forEach(kt=>{const Tt=new ot(.012,.012,2.22,8);Tt.rotateX(Math.PI/2);const St=new g(Tt,st);St.position.set(kt,1.53,-.04),J.add(St)});const $=new O(1.22,.035,.08),Mt=new g($,st);Mt.position.set(0,1.54,-1.17),J.add(Mt);const pt=new O(1.24,.035,.07),yt=new g(pt,st);yt.position.set(0,1.54,1.08),J.add(yt);const Et=new qt(1.24,2.22);Et.rotateX(Math.PI/2);const dt=new F({color:1579035,roughness:.95}),At=new g(Et,dt);At.position.set(0,1.48,-.04),J.add(At),this.bodyGroup.add(J),[-.635,.635].forEach((kt,Tt)=>{const St=new g(new qt(2.2,1.16),W);St.position.set(kt,.95,-.04),St.rotation.y=Tt===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(St);const b=new O(.04,.32,1.15),z=new g(b,I);z.position.set(kt*.98,.58,-.05),this.bodyGroup.add(z);const et=new g(new ot(.022,.022,1.02,8),new F({color:1579035,roughness:.5}));et.position.set(kt*.96,1.16,-1),et.rotation.x=.2,this.bodyGroup.add(et);const Pt=new g(new ot(.022,.022,1.08,8),new F({color:1579035,roughness:.5}));Pt.position.set(kt*.96,1.1,-.15),this.bodyGroup.add(Pt);const Z=new g(new ot(.022,.022,1.08,8),new F({color:1579035,roughness:.5}));Z.position.set(kt*.96,1.1,1.02),this.bodyGroup.add(Z)});const D=new gt;D.position.set(0,0,1.075);const _t=new g(new qt(1.26,1.18),rt);_t.position.set(0,.95,.01),_t.rotation.y=0,D.add(_t),[-.54,.54].forEach(kt=>{const Tt=new gt;Tt.position.set(kt,.74,.035);const St=new g(new O(.12,.24,.04),new F({color:1579035,roughness:.6}));Tt.add(St);const b=new g(new O(.1,.1,.025),new de({color:16096779}));b.position.set(0,.055,.018),Tt.add(b);const z=new g(new O(.1,.1,.025),new de({color:14427686}));z.position.set(0,-.055,.018),Tt.add(z),this.brakeLights.push(z),D.add(Tt)});const ct=new O(1.32,.12,.08),wt=new g(ct,new F({color:1579035,roughness:.85}));wt.position.set(0,.32,.06),D.add(wt),[-.52,.52].forEach(kt=>{const Tt=new g(new O(.18,.22,.02),x);Tt.position.set(kt,.18,.04),Tt.rotation.x=.08,D.add(Tt)});const ut=new ot(.032,.032,.55,10);ut.rotateZ(Math.PI/2);const Ot=new g(ut,G);Ot.position.set(.22,.18,.02),D.add(Ot);const lt=new pe(.075,.45,10);lt.rotateX(-Math.PI/2);const A=new de({color:440020,transparent:!0,opacity:0}),E=new g(lt,A);E.position.set(.48,.18,.28),D.add(E),this.exhaustFires.push(E),this.bodyGroup.add(D);const X=new gt;X.position.set(0,0,-1.15);const xt=new g(new qt(1.22,1.18),U);xt.position.set(0,.95,0),xt.rotation.y=Math.PI,X.add(xt),[-.32,.32].forEach(kt=>{const Tt=new gt;Tt.position.set(kt,.68,-.04);const St=new g(new ot(.085,.085,.04,16),G);St.rotateX(Math.PI/2),Tt.add(St);const b=new g(new Ht(.075,12,12,0,Math.PI*2,0,Math.PI*.5),new de({color:16777215}));b.rotateX(Math.PI),b.position.z=-.015,Tt.add(b),this.headlights.push(b),X.add(Tt)}),this.bodyGroup.add(X),[-1,1].forEach(kt=>{const Tt=new gt,St=(.64+.14)*kt;Tt.position.set(St,1.15,-.72);const b=new ot(.012,.012,.28,8);b.rotateZ(kt>0?-Math.PI*.35:Math.PI*.35);const z=new g(b,new F({color:1579035}));Tt.add(z);const et=new ot(.075,.075,.03,16);et.rotateX(Math.PI/2);const Pt=new g(et,new F({color:1579035,roughness:.5}));Pt.position.set(kt*.12,.08,0),Tt.add(Pt);const Z=new g(new $i(.068,16),G);Z.position.set(kt*.12,.08,.018),Tt.add(Z),this.bodyGroup.add(Tt)});const ht=new gt,mt=new g(new O(.48,.12,.44),new F({color:1981066,roughness:.7}));mt.position.set(0,.52,-.32),ht.add(mt);const It=new g(new O(.48,.42,.1),new F({color:1981066,roughness:.7}));It.position.set(0,.76,-.12),ht.add(It);const Y=new g(new O(1.16,.16,.48),S);Y.position.set(0,.54,.55),ht.add(Y);const Rt=new g(new O(1.16,.48,.12),S);Rt.position.set(0,.84,.82),ht.add(Rt);const Nt=new gt;Nt.position.set(0,.78,-.85);const Ct=new ot(.016,.016,.62,10);Ct.rotateZ(Math.PI/2);const vt=new g(Ct,G);Nt.add(vt),[-.28,.28].forEach(kt=>{const Tt=new g(new ot(.024,.024,.12,8),x);Tt.rotateZ(Math.PI/2),Tt.position.x=kt,Nt.add(Tt)});const jt=new g(new ot(.045,.045,.04,12),new F({color:1579035}));jt.position.set(0,.04,-.04),Nt.add(jt),ht.add(Nt),this.bodyGroup.add(ht);const Yt=(kt=!1)=>{const Tt=new gt,St=new ot(.24,.24,.14,20);St.rotateZ(Math.PI/2);const b=new g(St,x);b.castShadow=!0,Tt.add(b);const z=new ot(.14,.14,.145,16);z.rotateZ(Math.PI/2);const et=new g(z,T);Tt.add(et);const Pt=new g(new ot(.05,.05,.155,12),G);Pt.rotateZ(Math.PI/2),Tt.add(Pt);for(let Z=0;Z<4;Z++){const tt=Z/4*Math.PI*2,Dt=new g(new ot(.012,.012,.16,6),G);Dt.rotateZ(Math.PI/2),Dt.position.set(0,Math.sin(tt)*.08,Math.cos(tt)*.08),Tt.add(Dt)}return Tt},Xt=new gt;Xt.position.set(0,.24,-1.18);const zt=Yt(!0);Xt.add(zt),this.wheels.push(zt),this.frontWheel=Xt;const Lt=new g(new ot(.024,.028,.52,8),G);Lt.position.set(-.1,.22,0),Lt.rotation.x=-.18,Xt.add(Lt);const $t=new ot(.28,.28,.18,16,1,!0,Math.PI*.2,Math.PI*.65);$t.rotateZ(Math.PI/2);const ee=new g($t,I);ee.position.set(0,.05,0),Xt.add(ee),this.bodyGroup.add(Xt),[-.56,.56].forEach(kt=>{const Tt=Yt(!1);Tt.position.set(kt,.24,.64),this.wheels.push(Tt),this.bodyGroup.add(Tt)})}update(t,e,n,i,o,a){const r=t*1e3/3600,c=2*Math.PI*.24,h=r/c*a*Math.PI*2;this.wheelRotation+=h,this.wheels.forEach(_=>{_.rotation.x=this.wheelRotation});const d=n-e,f=d*.045;this.currentRoll+=(f-this.currentRoll)*Math.min(1,a*9),this.bodyGroup.rotation.z=this.currentRoll,this.frontWheel&&(this.frontWheel.rotation.y=-d*.18);const l=-d*.08;this.currentYaw+=(l-this.currentYaw)*Math.min(1,a*8),this.bodyGroup.rotation.y=this.currentYaw;let u=0;i?u=.04:o&&(u=-.035),this.currentPitch+=(u-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch,this.brakeLights.forEach(_=>{_.material.color.setHex(i?16711680:14427686)}),this.exhaustFires.forEach(_=>{o?(_.material.opacity=.95,_.scale.set(1.2+Math.random()*.4,1.2+Math.random()*.5,1.2+Math.random()*.4),_.material.color.setHex(Math.random()>.4?440020:3718648)):_.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(_=>_.scale.set(1.4,1.4,1.4))):this.headlights.forEach(_=>_.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=.88,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.45,this.bodyGroup.rotation.y=.5,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Np{constructor(){this.isMobile=ei(),this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[],this.policeStrobes=[]}applyShadow(t){this.isMobile||(t.castShadow=!0)}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let Y=0;Y<128;Y+=8)e.fillStyle="#6b7280",e.fillRect(Y,0,4,128),e.fillStyle="#d1d5db",e.fillRect(Y+4,0,4,128);const n=new ie(t);n.wrapS=Me,n.wrapT=Me,n.repeat.set(4,4),this.tinRoofMat=new F({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new F({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const o=i.getContext("2d");o.fillStyle="#c8a165",o.fillRect(0,0,128,128),o.strokeStyle="#8c6239",o.lineWidth=3;for(let Y=0;Y<=128;Y+=16)o.beginPath(),o.moveTo(0,Y),o.lineTo(128,Y),o.stroke(),o.beginPath(),o.moveTo(Y,0),o.lineTo(Y,128),o.stroke();const a=new ie(i);a.wrapS=Me,a.wrapT=Me,a.repeat.set(2,2),this.bambooWallMat=new F({map:a,roughness:.85,color:13935475}),this.woodMat=new F({color:6045747,roughness:.85}),this.mudPlinthMat=new F({color:8150594,roughness:.95}),this.brickMat=new F({color:10239278,roughness:.9}),this.palmLeafMat=new F({color:3046706,roughness:.6,side:Te}),this.bananaLeafMat=new F({color:4431943,roughness:.5,side:Te}),this.treeCrownMat=new F({color:1793568,roughness:.85}),this.bambooTrunkMat=new F({color:6732650,roughness:.4}),this.palmTrunkMat=new F({color:7162945,roughness:.9}),this.hayMat=new F({color:13934615,roughness:.95}),this.paddyFieldMat=new F({color:3706428,roughness:.8}),this.waterMat=new F({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new F({color:10395294,roughness:.7}),this.cowWhiteMat=new F({color:16119280,roughness:.6}),this.cowBrownMat=new F({color:9262372,roughness:.65}),this.cowBlackPatchMat=new F({color:2171169,roughness:.7}),this.hornMat=new F({color:3621201,roughness:.4}),this.ropeMat=new de({color:12756553}),this.duckMat=new F({color:16777215,roughness:.5}),this.beakMat=new F({color:16750592,roughness:.4}),this.smokeMat=new de({color:16777215,transparent:!0,opacity:.35}),this.bridgeRedMat=new F({color:14427686,roughness:.55}),this.bridgeWhiteMat=new F({color:16317180,roughness:.5});const r=document.createElement("canvas");r.width=256,r.height=128;const c=r.getContext("2d");c.fillStyle="#ffffff",c.fillRect(0,0,256,128),c.fillStyle="#dc2626";const h=32;for(let Y=-128;Y<384;Y+=h*2)c.beginPath(),c.moveTo(Y,0),c.lineTo(Y+h,0),c.lineTo(Y+h-128,128),c.lineTo(Y-128,128),c.closePath(),c.fill();const d=new ie(r);d.wrapS=Me,d.wrapT=Me,d.repeat.set(24,1),this.bridgeCurbMat=new F({map:d,roughness:.6}),this.pipelineMat=new F({color:9741240,metalness:.8,roughness:.25}),this.riverWaterMat=new F({color:1400437,roughness:.12,metalness:.35,transparent:!0,opacity:.92});const f=document.createElement("canvas");f.width=64,f.height=128;const l=f.getContext("2d");l.fillStyle="#dc2626",l.fillRect(0,0,64,128),l.fillStyle="#ffffff",l.fillRect(0,24,64,30),l.fillRect(0,78,64,30);const u=new ie(f);this.bollardMat=new F({map:u,roughness:.5});const _=document.createElement("canvas");_.width=128,_.height=128;const v=_.getContext("2d");v.fillStyle="#1e40af",v.fillRect(0,0,128,128);for(let Y=0;Y<128;Y+=8)v.fillStyle="#1d4ed8",v.fillRect(Y,0,4,128),v.fillStyle="#3b82f6",v.fillRect(Y+4,0,4,128);const m=new ie(_);m.wrapS=Me,m.wrapT=Me,m.repeat.set(6,2),this.stageBlueRoofMat=new F({map:m,metalness:.4,roughness:.45,color:1920728,side:Te}),this.stageTrussMat=new F({color:3359061,metalness:.75,roughness:.35}),this.stageBaseYellowMat=new F({color:16436245,roughness:.65}),this.stageBorderBlueMat=new F({color:165063,roughness:.45}),this.stageFloorMat=new F({color:10265519,roughness:.7}),this.stageTerracottaMat=new F({color:12730636,roughness:.85}),this.stageGoldEmblemMat=new F({color:16498468,metalness:.65,roughness:.25}),this.hillGreenMat=new F({color:3046706,roughness:.92,flatShading:!0}),this.hillDarkGreenMat=new F({color:1332013,roughness:.95,flatShading:!0}),this.pavingPlazaMat=new F({color:14078929,roughness:.9});const p=document.createElement("canvas");p.width=1024,p.height=1024;const w=p.getContext("2d");w.fillStyle="#8c867e",w.fillRect(0,0,1024,1024);const M=10,y=8,P=1024/M,L=1024/y;for(let Y=0;Y<M;Y++)for(let Rt=0;Rt<y;Rt++){const Nt=Rt*L+12,Ct=Y*P+18,vt=L-24,jt=P-26;w.fillStyle="#0f172a",w.fillRect(Nt,Ct,vt,jt);const Yt=w.createLinearGradient(Nt,Ct,Nt,Ct+jt);Yt.addColorStop(0,"#38bdf8"),Yt.addColorStop(.35,"#1e293b"),Yt.addColorStop(1,"#090d16"),w.fillStyle=Yt,w.fillRect(Nt+3,Ct+6,vt-6,jt-9),w.strokeStyle="rgba(226, 232, 240, 0.45)",w.lineWidth=2,w.beginPath(),w.moveTo(Nt+vt*.5,Ct+6),w.lineTo(Nt+vt*.5,Ct+jt-3),w.moveTo(Nt+3,Ct+jt*.5),w.lineTo(Nt+vt-3,Ct+jt*.5),w.stroke(),w.fillStyle="#ffffff",w.fillRect(Nt-4,Ct-5,vt+8,8),w.fillStyle="rgba(0, 0, 0, 0.35)",w.fillRect(Nt-4,Ct+3,vt+8,3)}const I=new ie(p);I.wrapS=Me,I.wrapT=Me,I.repeat.set(2,4),this.uiuFacadeMat=new F({map:I,metalness:.25,roughness:.55});const B=document.createElement("canvas");B.width=1024,B.height=1024;const S=B.getContext("2d");S.drawImage(p,0,0),S.fillStyle="#141416",S.fillRect(40,30,944,320),S.strokeStyle="#8c867e",S.lineWidth=12,S.strokeRect(36,24,952,332),S.font='900 240px "Montserrat", sans-serif',S.textAlign="center",S.textBaseline="middle",S.shadowColor="#ef4444",S.shadowBlur=48,S.strokeStyle="rgba(239, 68, 68, 0.95)",S.lineWidth=44,S.lineCap="round",S.lineJoin="round",S.strokeText("UIU",512,190),S.strokeStyle="#dc2626",S.lineWidth=26,S.strokeText("UIU",512,190),S.strokeStyle="#f97316",S.lineWidth=14,S.strokeText("UIU",512,190),S.shadowBlur=0,S.fillStyle="#fff1f2",S.fillText("UIU",512,190);const x=new ie(B);this.uiuLogoMat=new F({map:x,metalness:.2,roughness:.35,emissive:14427686,emissiveIntensity:.9});const T=document.createElement("canvas");T.width=1024,T.height=1024;const G=T.getContext("2d");G.fillStyle="#090d16",G.fillRect(0,0,1024,1024);const rt=G.createLinearGradient(0,0,0,1024);rt.addColorStop(0,"#1e293b"),rt.addColorStop(.3,"#0f172a"),rt.addColorStop(1,"#020617"),G.fillStyle=rt,G.fillRect(0,0,1024,1024);for(let Y=0;Y<1024;Y+=64)G.strokeStyle="rgba(255, 255, 255, 0.14)",G.lineWidth=2,G.beginPath(),G.moveTo(0,Y),G.lineTo(1024,Y),G.stroke();for(let Y=0;Y<1024;Y+=64)G.strokeStyle="rgba(255, 255, 255, 0.14)",G.lineWidth=2,G.beginPath(),G.moveTo(Y,0),G.lineTo(Y,1024),G.stroke();G.strokeStyle="#cbd5e1",G.lineWidth=14,G.lineCap="square";const U=4,W=1024/U;for(let Y=0;Y<U;Y++){const Rt=Y*W,Nt=(Y+1)*W;G.beginPath(),G.moveTo(32,Rt),G.lineTo(992,Nt),G.stroke(),G.beginPath(),G.moveTo(992,Rt),G.lineTo(32,Nt),G.stroke(),G.lineWidth=18,G.strokeStyle="#94a3b8",G.beginPath(),G.moveTo(0,Nt),G.lineTo(1024,Nt),G.stroke(),G.lineWidth=14,G.strokeStyle="#cbd5e1"}const q=new ie(T);this.uiuAtriumMat=new F({map:q,metalness:.6,roughness:.25}),this.uiuBrickFlankMat=new F({color:11817737,roughness:.8}),this.uiuRoofGardenMat=new F({color:1409085,roughness:.9}),this.uiuTentMat=new F({color:16317180,roughness:.45});const V=document.createElement("canvas");V.width=512,V.height=128;const nt=V.getContext("2d");nt.fillStyle="#0f172a",nt.fillRect(0,0,512,128),nt.strokeStyle="#f59e0b",nt.lineWidth=6,nt.strokeRect(8,8,496,112),nt.fillStyle="#ef4444",nt.font="900 48px sans-serif",nt.textAlign="center",nt.textBaseline="middle",nt.fillText("UIU",256,42),nt.fillStyle="#ffffff",nt.font="bold 18px sans-serif",nt.fillText("UNITED INTERNATIONAL UNIVERSITY",256,90);const j=new ie(V);this.uiuGateSignMat=new F({map:j,roughness:.4});const J=document.createElement("canvas");J.width=1024,J.height=1024;const H=J.getContext("2d");H.fillStyle="#15803d",H.fillRect(0,0,1024,1024),H.fillStyle="#65a30d";for(let Y=0;Y<1024;Y+=80)H.fillRect(0,Y,1024,40);H.strokeStyle="#ffffff",H.lineWidth=12,H.strokeRect(48,40,928,944),H.beginPath(),H.moveTo(48,512),H.lineTo(976,512),H.stroke(),H.beginPath(),H.arc(512,512,136,0,Math.PI*2),H.stroke(),H.fillStyle="#ffffff",H.beginPath(),H.arc(512,512,16,0,Math.PI*2),H.fill(),H.strokeRect(292,40,440,184),H.strokeRect(292,800,440,184),H.strokeRect(392,40,240,76),H.strokeRect(392,908,240,76),H.beginPath(),H.arc(512,170,72,0,Math.PI),H.stroke(),H.beginPath(),H.arc(512,854,72,Math.PI,0),H.stroke();const ft=32;H.beginPath(),H.arc(48,40,ft,0,Math.PI*.5),H.stroke(),H.beginPath(),H.arc(976,40,ft,Math.PI*.5,Math.PI),H.stroke(),H.beginPath(),H.arc(48,984,ft,Math.PI*1.5,Math.PI*2),H.stroke(),H.beginPath(),H.arc(976,984,ft,Math.PI,Math.PI*1.5),H.stroke();const Q=new ie(J);Q.anisotropy=4,this.uiuLawnMat=new F({map:Q,roughness:.85}),this.uiuConcreteMat=new F({color:9209470,roughness:.7}),this.uiuGlassMat=new F({color:988970,metalness:.8,roughness:.15}),this.goalPostMat=new F({color:16317180,roughness:.4});const st=document.createElement("canvas");st.width=2048,st.height=512;const $=st.getContext("2d");$.fillStyle="#023c27",$.fillRect(0,0,2048,512),[{exit:"প্রস্থান ০১",bng:"টাঙ্গাইল",dist:"৯৮ কিমি",x:36,w:620},{exit:"প্রস্থান ০২",bng:"ইউআইইউ",dist:"১ কিমি",x:714,w:620},{exit:"প্রস্থান ∞",bng:"বিয়ে",dist:"∞ কিমি",x:1392,w:620}].forEach(Y=>{$.strokeStyle="#ffffff",$.lineWidth=8,$.strokeRect(Y.x,24,Y.w,464),$.fillStyle="#045438",$.fillRect(Y.x+8,32,Y.w-16,84),$.strokeStyle="#ffffff",$.lineWidth=4,$.strokeRect(Y.x+8,32,Y.w-16,84),$.fillStyle="#ffffff",$.font='bold 36px "Montserrat", sans-serif',$.textAlign="center",$.textBaseline="middle",$.fillText(Y.exit,Y.x+Y.w*.5,74),$.strokeStyle="rgba(255, 255, 255, 0.35)",$.lineWidth=3,$.strokeRect(Y.x+16,128,Y.w-32,350);const Rt=Y.x+80;$.fillStyle="#ffffff",$.beginPath(),$.moveTo(Rt,200),$.lineTo(Rt-36,255),$.lineTo(Rt-16,255),$.lineTo(Rt-16,400),$.lineTo(Rt+16,400),$.lineTo(Rt+16,255),$.lineTo(Rt+36,255),$.closePath(),$.fill(),$.textAlign="left",$.fillStyle="#ffffff",$.font='900 76px "Montserrat", sans-serif',$.shadowColor="rgba(255, 255, 255, 0.4)",$.shadowBlur=8,$.fillText(Y.bng,Y.x+150,248),$.shadowBlur=0,$.fillStyle="#fde047",$.font='bold 58px "Montserrat", sans-serif',$.shadowColor="rgba(253, 224, 71, 0.35)",$.shadowBlur=6,$.fillText(Y.dist,Y.x+150,360),$.shadowBlur=0});const pt=new ie(st);this.highwayGantrySignMat=new F({map:pt,roughness:.25,emissive:206872,emissiveIntensity:.4});const yt=document.createElement("canvas");yt.width=128,yt.height=128;const Et=yt.getContext("2d");Et.fillStyle="#dc2626",Et.fillRect(0,0,128,128),Et.fillStyle="#ffffff";for(let Y=-128;Y<256;Y+=32)Et.beginPath(),Et.moveTo(Y,0),Et.lineTo(Y+16,0),Et.lineTo(Y+16-128,128),Et.lineTo(Y-128,128),Et.closePath(),Et.fill();const dt=new ie(yt);dt.wrapS=Me,dt.wrapT=Me,dt.repeat.set(2,3),this.gantryHazardMat=new F({map:dt,roughness:.5});const At=document.createElement("canvas");At.width=512,At.height=512;const D=At.getContext("2d");D.fillStyle="#f1f5f9",D.fillRect(0,0,512,512),D.fillStyle="rgba(180, 83, 9, 0.15)";for(let Y=0;Y<512;Y+=16)D.fillRect(0,Y,512,4);D.strokeStyle="#64748b",D.lineWidth=4;for(let Y=64;Y<512;Y+=128)D.beginPath(),D.moveTo(Y-44,460),D.lineTo(Y-44,280),D.arc(Y,280,44,Math.PI,0,!1),D.lineTo(Y+44,460),D.stroke(),D.fillStyle="#1e293b",D.beginPath(),D.moveTo(Y-36,460),D.lineTo(Y-36,290),D.arc(Y,290,36,Math.PI,0,!1),D.lineTo(Y+36,460),D.fill(),D.fillStyle="#b45309",D.beginPath(),D.arc(Y,235,14,0,Math.PI*2),D.fill();D.fillStyle="#cbd5e1",D.fillRect(0,60,512,28),D.fillStyle="#94a3b8";for(let Y=0;Y<512;Y+=24)D.fillRect(Y,64,12,20);const _t=new ie(At);_t.wrapS=Me,_t.wrapT=Me,this.templeWallMat=new F({map:_t,roughness:.82});const ct=document.createElement("canvas");ct.width=256,ct.height=512;const wt=ct.getContext("2d");wt.fillStyle="#e2e8f0",wt.fillRect(0,0,256,512);for(let Y=0;Y<512;Y+=14)wt.fillStyle=Y%28===0?"#475569":"#94a3b8",wt.fillRect(0,Y,256,4),wt.fillStyle="rgba(180, 83, 9, 0.2)",wt.fillRect(0,Y+4,256,4);const ut=new ie(ct);ut.wrapT=Me,ut.repeat.set(1,4),this.templeShikharaMat=new F({map:ut,roughness:.88}),this.marigoldOrangeMat=new F({color:15357964,roughness:.65}),this.marigoldYellowMat=new F({color:16436245,roughness:.65}),this.templeBrassMat=new F({color:14251782,metalness:.85,roughness:.25}),this.templePlinthMat=new F({color:14078929,roughness:.9}),this.skinMat=new F({color:16106390,roughness:.65}),this.hairMat=new F({color:1579035,roughness:.45}),this.panjabiMat=new F({color:16317180,roughness:.7}),this.lungiPlaidMat=new F({color:165063,roughness:.8}),this.shirtTealMat=new F({color:889992,roughness:.7}),this.shirtRedMat=new F({color:14427686,roughness:.7}),this.policePantsMat=new F({color:988970,roughness:.8}),this.policeVestMat=new F({color:8702998,roughness:.45}),this.policeShirtMat=new F({color:4674921,roughness:.7}),this.policeSilverMat=new F({color:15857145,roughness:.2}),this.policeCapMat=new F({color:593174,roughness:.5}),this.goldBadgeMat=new F({color:16096779,metalness:.85,roughness:.2}),this.gunMetalMat=new F({color:1976635,metalness:.85,roughness:.25}),this.gunWoodMat=new F({color:7877903,roughness:.6}),this.strobeRedMat=new F({color:15680580,emissive:16711680,emissiveIntensity:2.2,roughness:.2}),this.strobeBlueMat=new F({color:3900150,emissive:26367,emissiveIntensity:2.2,roughness:.2});const Ot=document.createElement("canvas");Ot.width=512,Ot.height=320;const lt=Ot.getContext("2d");lt.fillStyle="#0b192c",lt.fillRect(0,0,512,320),lt.strokeStyle="#f59e0b",lt.lineWidth=14,lt.strokeRect(10,10,492,300),lt.strokeStyle="#ffffff",lt.lineWidth=3,lt.strokeRect(22,22,468,276),lt.fillStyle="#1e3a8a",lt.fillRect(26,26,460,56),lt.fillStyle="#f59e0b",lt.font="bold 24px sans-serif",lt.textAlign="center",lt.textBaseline="middle",lt.fillText("★ বাংলাদেশ পুলিশ ★",256,54),lt.fillStyle="#ffffff",lt.font="900 52px sans-serif",lt.fillText("পুলিশ চেকপোস্ট",256,146),lt.fillStyle="#38bdf8",lt.font="bold 22px sans-serif",lt.fillText("POLICE CHECK POST",256,202),lt.fillStyle="#dc2626",lt.fillRect(26,235,460,58),lt.fillStyle="#ffffff",lt.font="900 24px sans-serif",lt.fillText("গতি কমান • SLOW DOWN",256,264);const A=new ie(Ot);A.anisotropy=4,this.policeSignMat=new F({map:A,roughness:.35});const E=document.createElement("canvas");E.width=512,E.height=128;const X=E.getContext("2d");X.fillStyle="#ffffff",X.fillRect(0,0,512,128),X.fillStyle="#dc2626";for(let Y=-128;Y<640;Y+=64)X.beginPath(),X.moveTo(Y,0),X.lineTo(Y+40,0),X.lineTo(Y-24,128),X.lineTo(Y-64,128),X.fill();X.fillStyle="#0f172a",X.fillRect(160,24,192,80),X.strokeStyle="#f59e0b",X.lineWidth=4,X.strokeRect(164,28,184,72),X.fillStyle="#ffffff",X.font="900 28px sans-serif",X.textAlign="center",X.textBaseline="middle",X.fillText("POLICE",256,52),X.fillStyle="#f59e0b",X.font="bold 20px sans-serif",X.fillText("থামুন",256,82);const xt=new ie(E);this.policeBarricadeMat=new F({map:xt,roughness:.5});const ht=document.createElement("canvas");ht.width=256,ht.height=64;const mt=ht.getContext("2d");mt.fillStyle="#ffffff",mt.fillRect(0,0,256,64),mt.fillStyle="#1e293b";for(let Y=0;Y<256;Y+=64)mt.fillRect(Y,0,32,64);const It=new ie(ht);It.wrapS=Me,It.repeat.set(8,1),this.curbStripeMat=new F({map:It,roughness:.8})}createCow(t="brown"){const e=new gt;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new O(.9,.95,1.7),o=new g(i,n);o.position.set(0,1.05,0),this.applyShadow(o),e.add(o);const a=new pe(.3,.45,8),r=new g(a,n);r.position.set(0,1.62,-.45),r.rotation.x=-.2,this.applyShadow(r),e.add(r);const c=new O(.12,.45,.5),h=new g(c,n);h.position.set(0,.85,-.85),e.add(h);const d=new gt;d.position.set(0,1.25,-.85);const f=new O(.45,.55,.6),l=new g(f,n);l.position.set(0,.15,-.2),l.rotation.x=.35,d.add(l);const u=new O(.48,.52,.7),_=new g(u,n);_.position.set(0,.28,-.55),d.add(_);const v=new F({color:2236962,roughness:.8}),m=new O(.36,.3,.3),p=new g(m,v);p.position.set(0,.18,-.92),d.add(p),[-.22,.22].forEach(W=>{const q=new pe(.06,.35,6),V=new g(q,this.hornMat);V.position.set(W,.56,-.48),V.rotation.z=W>0?-.4:.4,V.rotation.x=.3,d.add(V);const nt=new O(.22,.08,.1),j=new g(nt,n);j.position.set(W>0?.32:-.32,.38,-.45),j.rotation.z=W>0?-.35:.35,d.add(j)}),e.add(d),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(W=>{const q=new O(.2,.75,.2),V=new g(q,n);V.position.set(W.x,.38,W.z),this.applyShadow(V),e.add(V);const nt=new O(.22,.1,.22),j=new g(nt,this.hornMat);j.position.set(W.x,.05,W.z),e.add(j)});const M=new gt;M.position.set(0,1.35,.85);const y=new ot(.03,.03,.85,6);y.translate(0,-.42,0);const P=new g(y,n);M.add(P);const L=new pe(.08,.25,6);L.translate(0,-.9,0);const I=new g(L,this.hornMat);M.add(I),e.add(M);const B=new ot(.08,.1,1.2,8),S=new g(B,this.woodMat);S.position.set(.9,.6,-1.2),e.add(S);const x=[new N(0,1.2,-.8),new N(.45,.75,-1),new N(.9,.85,-1.2)],T=new Cn(x),G=new vn(T,8,.02,4,!1),rt=new g(G,this.ropeMat);e.add(rt);const U={type:"cow",head:d,tail:M,seed:Math.random()*10};return this.animatedAnimals.push(U),e}createVillageHouse(t=!1){const e=new gt;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new O(6.6,.45,5.2),o=new g(i,this.mudPlinthMat);o.position.set(0,.22,0),o.receiveShadow=!0,e.add(o);const a=new O(5.8,2.6,3.8),r=new g(a,this.bambooWallMat);r.position.set(0,1.75,-.4),this.applyShadow(r),r.receiveShadow=!0,e.add(r);const c=new O(.85,1.8,.08),h=new g(c,this.woodMat);h.position.set(.6,1.35,1.52),e.add(h),[-1.6,-.6].forEach(_=>{const v=new O(.7,.8,.08),m=new g(v,this.woodMat);m.position.set(_,1.8,1.52),e.add(m)});const d=new O(6.6,.1,2.8),f=new g(d,n);f.position.set(0,3.65,-.9),f.rotation.x=-.52,this.applyShadow(f),e.add(f);const l=new O(6.6,.1,3.4),u=new g(l,n);return u.position.set(0,3.5,.8),u.rotation.x=.46,this.applyShadow(u),e.add(u),[-2.5,-.8,.8,2.5].forEach(_=>{const v=new ot(.08,.08,2.3,8),m=new g(v,this.woodMat);m.position.set(_,1.6,2.1),this.applyShadow(m),e.add(m)}),e}createTeaStall(){const t=new gt;t.name="cha_er_tong";const e=new O(3.2,1,1.8),n=new g(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new O(3.8,.08,2.8),o=new g(i,this.tinRoofMat);o.position.set(0,2.3,.2),o.rotation.x=.2,this.applyShadow(o),t.add(o),[-1.6,1.6].forEach(v=>{const m=new ot(.07,.07,2.2,6),p=new g(m,this.woodMat);p.position.set(v,1.1,1.2),t.add(p)});const a=new O(3,.08,.45),r=new g(a,this.woodMat);r.position.set(0,.45,1.8),t.add(r),[-1.2,1.2].forEach(v=>{const m=new O(.08,.45,.4),p=new g(m,this.woodMat);p.position.set(v,.22,1.8),t.add(p)});const c=new F({color:13421772,metalness:.9,roughness:.2}),h=new ot(.18,.22,.35,10),d=new g(h,c);d.position.set(-.6,1.18,.2),t.add(d);const f=new Jo({color:16777215,transmission:.7,roughness:.1}),l=new ot(.12,.12,.28,8),u=new g(l,f);u.position.set(.6,1.15,.1),t.add(u);const _=new gt;_.position.set(-.6,1.45,.2),t.add(_);for(let v=0;v<4;v++){const m=new Ht(.08,6,6),p=new g(m,this.smokeMat);p.position.y=v*.25,_.add(p)}return this.smokeEmitters.push(_),t}createHaystack(){const t=new gt;t.name="khorer_gada";const e=new ot(1.6,1.9,1.4,12),n=new g(e,this.hayMat);n.position.y=.7,this.applyShadow(n),t.add(n);const i=new ot(1,1.6,1.2,12),o=new g(i,this.hayMat);o.position.y=2,this.applyShadow(o),t.add(o);const a=new pe(1,1.5,12),r=new g(a,this.hayMat);r.position.y=3.35,this.applyShadow(r),t.add(r);const c=new ot(.04,.05,4.8,6),h=new g(c,this.bambooTrunkMat);return h.position.y=2.4,t.add(h),t}createJatriChawni(t=1){const e=new gt;e.name="jatri_chawni";const n=new O(5,.35,2.3),i=new g(n,this.concreteMat);i.position.set(0,.175,0),i.receiveShadow=!0,e.add(i);const o=new O(5.2,.14,.22),a=new g(o,this.brickMat);a.position.set(0,.07,-1.1),e.add(a);const r=new O(4.8,2.5,.18),c=new g(r,this.brickMat);c.position.set(0,1.45,1.02),this.applyShadow(c),e.add(c);const h=new qt(4.6,2.3),d=new g(h,this.culvertRailingMaterial);d.position.set(0,1.45,.92),e.add(d),[[-2.1,-.92],[2.1,-.92],[-2.1,.92],[2.1,.92]].forEach(([R,K])=>{const at=new ot(.08,.09,2.6,12),C=new g(at,this.culvertRailingMaterial);C.position.set(R,1.45,K),this.applyShadow(C),e.add(C);const k=new ot(.12,.12,.35,12),it=new g(k,new F({color:1409085}));it.position.set(R,.45,K),e.add(it)});const l=new ot(2.4,2.4,5.2,24,1,!0,Math.PI*.2,Math.PI*.6);l.rotateZ(Math.PI/2);const u=new g(l,this.tinRoofMat);if(u.position.set(0,2.75,.05),this.applyShadow(u),e.add(u),[-1.8,0,1.8].forEach(R=>{const K=new O(.06,.06,2.1),at=new g(K,new F({color:3359061}));at.position.set(R,2.55,0),e.add(at)}),!this.isMobile){const R=new Wn(16772565,3,14);R.position.set(0,2.45,.25),e.add(R)}const _=new ot(.14,.18,.28,8,1,!0),v=new g(_,new F({color:1976635,wireframe:!0}));v.position.set(0,2.48,.25),e.add(v);const m=new g(new Ht(.1,12,12),new de({color:16772565}));m.position.set(0,2.48,.25),e.add(m);const p=document.createElement("canvas");p.width=1024,p.height=256;const w=p.getContext("2d");w.fillStyle="#15803d",w.fillRect(0,0,1024,256),w.strokeStyle="#f59e0b",w.lineWidth=14,w.strokeRect(10,10,1004,236),w.strokeStyle="#fde047",w.lineWidth=4,w.strokeRect(24,24,976,208);const M=(R,K)=>{w.fillStyle="#fde047",w.beginPath(),w.roundRect(R,K,76,44,8),w.fill(),w.fillStyle="#0284c7",w.fillRect(R+8,K+6,20,18),w.fillRect(R+34,K+6,20,18),w.fillRect(R+58,K+6,12,18),w.fillStyle="#18181b",w.beginPath(),w.arc(R+20,K+44,9,0,Math.PI*2),w.arc(R+56,K+44,9,0,Math.PI*2),w.fill()};M(42,105),M(906,105),w.fillStyle="#ffffff",w.font="900 86px sans-serif",w.textAlign="center",w.textBaseline="middle",w.shadowColor="rgba(0,0,0,0.9)",w.shadowBlur=12,w.fillText("BUS STOP",512,85),w.fillStyle="#fde047",w.font="bold 54px sans-serif",w.shadowColor="rgba(0,0,0,0.8)",w.shadowBlur=8,w.fillText("বাস স্টপ  |  যাত্রী ছাউনি",512,185),w.shadowBlur=0;const y=new ie(p),P=new gt;P.position.set(0,2.65,-1.02);const L=new O(4.24,.84,.07),I=new F({color:1332013,roughness:.5}),B=new g(L,I);P.add(B);const S=new F({map:y,roughness:.35,emissive:1409085,emissiveIntensity:.15}),x=new qt(4.18,.78);x.rotateY(Math.PI);const T=new g(x,S);T.position.set(0,0,-.038),P.add(T);const G=new qt(4.18,.78),rt=new g(G,S);rt.position.set(0,0,.038),P.add(rt),e.add(P);const U=new gt,W=t>0?-2.25:2.25;U.position.set(W,0,-1.15);const q=new g(new ot(.18,.22,.3,12),this.concreteMat);q.position.set(0,.15,0),U.add(q);const V=new F({color:3359061,metalness:.8,roughness:.2}),nt=new g(new ot(.045,.045,3.1,12),V);nt.position.set(0,1.55,0),U.add(nt);const j=document.createElement("canvas");j.width=512,j.height=512;const J=j.getContext("2d");J.fillStyle="#0284c7",J.beginPath(),J.roundRect(16,16,480,480,48),J.fill(),J.strokeStyle="#facc15",J.lineWidth=20,J.stroke(),J.strokeStyle="#ffffff",J.lineWidth=4,J.beginPath(),J.roundRect(36,36,440,440,36),J.stroke(),J.fillStyle="#ffffff",J.beginPath(),J.roundRect(135,75,242,130,24),J.fill(),J.fillStyle="#0284c7",J.fillRect(155,95,60,50),J.fillRect(230,95,60,50),J.fillRect(305,95,52,50),J.fillStyle="#18181b",J.beginPath(),J.arc(190,205,22,0,Math.PI*2),J.arc(320,205,22,0,Math.PI*2),J.fill(),J.fillStyle="#ffffff",J.font="900 72px sans-serif",J.textAlign="center",J.textBaseline="middle",J.shadowColor="rgba(0,0,0,0.85)",J.shadowBlur=8,J.fillText("BUS STOP",256,310),J.fillStyle="#fde047",J.font="bold 56px sans-serif",J.fillText("বাস স্টপ",256,405),J.shadowBlur=0;const H=new ie(j),ft=new F({map:H,roughness:.35,emissive:165063,emissiveIntensity:.12}),Q=new gt;Q.position.set(0,2.7,0);const st=new g(new O(.96,.96,.06),new F({color:223649,roughness:.4}));Q.add(st);const $=new qt(.92,.92);$.rotateY(Math.PI);const Mt=new g($,ft);Mt.position.set(0,0,-.032),Q.add(Mt);const pt=new qt(.92,.92),yt=new g(pt,ft);yt.position.set(0,0,.032),Q.add(yt),Q.rotation.y=t>0?.35:-.35,U.add(Q),e.add(U);const Et=document.createElement("canvas");Et.width=512,Et.height=320;const dt=Et.getContext("2d");dt.fillStyle="#f8fafc",dt.fillRect(0,0,512,320),dt.strokeStyle="#15803d",dt.lineWidth=14,dt.strokeRect(8,8,496,304),dt.strokeStyle="#dc2626",dt.lineWidth=4,dt.strokeRect(22,22,468,276),dt.fillStyle="#15803d",dt.font="bold 30px sans-serif",dt.textAlign="center",dt.textBaseline="middle",dt.fillText("বাংলাদেশ সড়ক পরিবহন (BRTC)",256,55),dt.fillStyle="#dc2626",dt.font="900 68px sans-serif",dt.shadowColor="rgba(0,0,0,0.3)",dt.shadowBlur=4,dt.fillText("BUS STOP",256,140),dt.fillStyle="#1e293b",dt.font="bold 50px sans-serif",dt.shadowBlur=0,dt.fillText("বাস স্টপ",256,220),dt.fillStyle="#64748b",dt.font="bold 24px sans-serif",dt.fillText("HIGHWAY PASSENGER SHELTER",256,275);const At=new ie(Et),D=new F({map:At,roughness:.35,emissive:16777215,emissiveIntensity:.08}),_t=new g(new qt(1.2,.75),D),ct=t>0?-2.12:2.12;_t.position.set(ct,1.85,0),_t.rotation.y=t>0?-Math.PI/2:Math.PI/2,e.add(_t);const wt=new gt;wt.position.set(0,0,0);const ut=new O(4.4,.12,.7),Ot=new g(ut,this.woodMat);Ot.position.set(0,.65,.5),this.applyShadow(Ot),wt.add(Ot);const lt=new O(4.4,.42,.1),A=new g(lt,this.woodMat);A.position.set(0,1.12,.82),this.applyShadow(A),wt.add(A),[-1.9,0,1.9].forEach(R=>{const K=new O(.12,.35,.58),at=new g(K,this.concreteMat);at.position.set(R,.45,.5),wt.add(at);const C=new O(.08,.55,.08),k=new g(C,new F({color:3359061}));k.position.set(R,.95,.82),wt.add(k)}),e.add(wt);const E=new gt;E.scale.set(1.35,1.35,1.35),E.position.set(0,.72,.48);const X=new F({color:16106390,roughness:.6}),xt=new F({color:959977,roughness:.7}),ht=new F({color:1976635,roughness:.8}),mt=new F({color:1579035,roughness:.5}),It=new F({color:14362487,roughness:.6}),Y=new F({color:16436245,roughness:.7}),Rt=new F({color:16777215,roughness:.8}),Nt=new F({color:986638,roughness:.4}),Ct=new gt;Ct.position.set(-.26,0,0);const vt=new g(new O(.36,.46,.24),xt);vt.position.set(0,.25,0),vt.rotation.y=.35,vt.rotation.z=-.12,Ct.add(vt);const jt=new g(new Ht(.12,14,14),X);jt.position.set(.04,.58,.02),jt.rotation.y=.45,jt.rotation.z=-.12,Ct.add(jt);const Yt=new g(new Ht(.13,14,14),mt);Yt.scale.set(1.02,1.05,1.02),Yt.position.set(.04,.61,.01),Ct.add(Yt);const Xt=new g(new O(.34,.16,.44),ht);Xt.position.set(0,-.02,-.15),Ct.add(Xt),[-.1,.1].forEach(R=>{const K=new g(new ot(.05,.045,.38,8),ht);K.position.set(R,-.22,-.32),Ct.add(K)});const zt=new g(new ot(.045,.04,.34,8),xt);zt.position.set(.18,.14,-.05),zt.rotation.z=-Math.PI/4,zt.rotation.x=-.18,Ct.add(zt),E.add(Ct);const Lt=new gt;Lt.position.set(.26,0,0);const $t=new g(new O(.32,.42,.22),It);$t.position.set(0,.23,0),$t.rotation.y=-.32,$t.rotation.z=.14,Lt.add($t);const ee=new g(new O(.34,.36,.24),Y);ee.position.set(0,.24,.02),Lt.add(ee);const kt=new g(new Ht(.115,14,14),X);kt.position.set(-.06,.54,.02),kt.rotation.y=-.38,kt.rotation.z=.22,Lt.add(kt);const Tt=new g(new Ht(.125,14,14),Nt);Tt.scale.set(1.04,1.06,1.08),Tt.position.set(-.06,.57,0),Lt.add(Tt);const St=new g(new ot(.04,.02,.36,8),Nt);St.position.set(-.04,.42,.16),St.rotation.x=-.35,Lt.add(St);const b=new g(new O(.3,.15,.42),Rt);b.position.set(0,-.02,-.15),Lt.add(b),[-.08,.08].forEach(R=>{const K=new g(new ot(.042,.038,.38,8),Rt);K.position.set(R,-.22,-.32),Lt.add(K)});const z=new g(new ot(.04,.035,.32,8),It);z.position.set(-.16,.14,-.05),z.rotation.z=Math.PI/4,z.rotation.x=-.18,Lt.add(z);const et=new gt;et.position.set(.22,.22,-.2),et.rotation.x=-.25,et.rotation.z=-.15;const Pt=new ot(.016,.018,.38,8),Z=new F({color:1409085,roughness:.8}),tt=new g(Pt,Z);et.add(tt);const Dt=new qt(.12,.06),Kt=new F({color:1483594,roughness:.6,side:Te});[-1,1].forEach(R=>{const K=new g(Dt,Kt);K.position.set(R*.06,-.04,0),K.rotation.z=R*.55,et.add(K)});const Zt=new pe(.07,.09,5);Zt.rotateX(Math.PI);const Vt=new g(Zt,Kt);Vt.position.set(0,.18,0),et.add(Vt);const he=new F({color:14427686,roughness:.35,metalness:.1}),Ut=new Ht(.09,14,14);Ut.scale(1.15,1.35,1.15);const te=new g(Ut,he);te.position.set(0,.26,0),et.add(te);const Wt=new ln(.08,.035,8,16);Wt.rotateX(Math.PI/2);const me=new g(Wt,he);me.position.set(0,.23,0),et.add(me),Lt.add(et),E.add(Lt);const fe=new g(new Ht(.065,12,12),X);fe.scale.set(1.6,.95,1.2),fe.position.set(0,.1,-.06),E.add(fe);const Le=new gt;Le.position.set(0,1.38,.05);const rn=new de({color:16723285}),an=new g(new Ht(.075,10,10),rn);an.position.set(-.05,.04,0),Le.add(an);const bn=new g(new Ht(.075,10,10),rn);bn.position.set(.05,.04,0),Le.add(bn);const un=new pe(.11,.14,12);un.rotateZ(Math.PI);const On=new g(un,rn);return On.position.set(0,-.04,0),Le.add(On),E.add(Le),e.add(E),this.animatedAnimals.push({type:"couple",mesh:E,heart:Le,seed:Math.random()*10}),e}createCoconutTree(){const t=new gt;t.name="coconut_tree";const e=new Cn([new N(0,0,0),new N(.4,3.5,.2),new N(.9,7.5,.5),new N(1.1,10.5,.7)]),n=new vn(e,12,.24,8,!1),i=new g(n,this.palmTrunkMat);this.applyShadow(i),t.add(i);const o=new N(1.1,10.5,.7),a=10;for(let r=0;r<a;r++){const c=r*Math.PI*2/a,h=new qt(.8,3.4);h.translate(0,1.7,0);const d=new g(h,this.palmLeafMat);d.position.copy(o),d.rotation.y=c,d.rotation.x=.85,this.applyShadow(d),t.add(d)}for(let r=0;r<5;r++){const c=new Ht(.2,8,8),h=new g(c,this.palmLeafMat);h.position.set(o.x+(Math.random()-.5)*.4,o.y-.25,o.z+(Math.random()-.5)*.4),t.add(h)}return t}createBananaTree(){const t=new gt;t.name="banana_tree";const e=new ot(.18,.28,2.8,8),n=new g(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let o=0;o<i;o++){const a=o*Math.PI*2/i,r=new qt(.75,2.4);r.translate(0,1.2,0);const c=new g(r,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=a,c.rotation.x=.95,this.applyShadow(c),t.add(c)}return t}createBambooGrove(){const t=new gt;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,o=new ot(.06,.08,i,6),a=new g(o,this.bambooTrunkMat);a.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),a.rotation.z=(Math.random()-.5)*.15,a.rotation.x=(Math.random()-.5)*.15,t.add(a);const r=new Ht(.8+Math.random()*.5,6,6),c=new g(r,this.palmLeafMat);c.position.set(a.position.x,i-.3,a.position.z),t.add(c)}return t}createElectricPole(){const t=new gt;t.name="electric_pole";const e=new ot(.14,.18,8.5,8),n=new g(e,this.concreteMat);n.position.y=4.25,this.applyShadow(n),t.add(n);const i=new O(2.2,.12,.12),o=new g(i,this.concreteMat);return o.position.y=7.8,t.add(o),[-.9,0,.9].forEach(a=>{const r=new ot(.04,.05,.2,6),c=new g(r,this.tinRoofMat);c.position.set(a,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new gt;n.name="village_pond";const i=new qt(t,e);i.rotateX(-Math.PI/2);const o=new g(i,this.waterMat);o.position.y=.05,n.add(o),this.mudPlinthMat;const a=3;for(let r=0;r<a;r++){const c=new gt;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const h=new Ht(.24,8,8);h.scale(1,.7,1.4);const d=new g(h,this.duckMat);c.add(d);const f=new Ht(.14,8,8),l=new g(f,this.duckMat);l.position.set(0,.22,-.22),c.add(l);const u=new pe(.06,.16,6);u.rotateX(-Math.PI/2);const _=new g(u,this.beakMat);_.position.set(0,.2,-.34),c.add(_),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new gt;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const o=new ot(.04,.04,t,6);o.rotateX(Math.PI/2);const a=new g(o,this.bambooTrunkMat);a.position.y=i,e.add(a)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const o=-t*.5+i*1.4,a=new ot(.05,.06,1.25,6),r=new g(a,this.woodMat);r.position.set(0,.62,o),this.applyShadow(r),e.add(r)}return e}createHighwayCafe(t=1){const e=new gt;e.name="highway_cafe";const n=new O(6.6,.28,4.4),i=new F({color:9268835,roughness:.85}),o=new g(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const a=new O(6.8,.14,.25),r=new g(a,this.concreteMat);r.position.set(0,.07,-2.15),e.add(r);const c=new O(5.6,3.2,3),h=new F({color:6111287,roughness:.8}),d=new g(c,h);d.position.set(0,1.74,.6),this.applyShadow(d),e.add(d);const f=new O(5.9,.22,3.3),l=new F({color:4073251,roughness:.6}),u=new g(f,l);u.position.set(0,3.42,.6),e.add(u);const _=new F({color:1976635,metalness:.8,roughness:.15,transparent:!0,opacity:.65}),v=new g(new O(1.9,1.8,.1),_);v.position.set(-1.6,1.7,-.92),e.add(v);const m=new g(new O(1.9,1.8,.1),_);m.position.set(1.6,1.7,-.92),e.add(m);const p=new g(new O(1.2,2.3,.1),_);p.position.set(0,1.45,-.92),e.add(p);const w=new F({color:16096779,metalness:.9,roughness:.2}),M=new g(new ot(.025,.025,.7,8),w);if(M.position.set(.42,1.35,-.98),e.add(M),!this.isMobile){const Mt=new Wn(16772565,3.2,9);Mt.position.set(0,2.2,.2),e.add(Mt)}const y=new O(3.6,1,.8),P=new g(y,new F({color:2561548}));P.position.set(0,.8,.4),e.add(P);const L=document.createElement("canvas");L.width=256,L.height=256;const I=L.getContext("2d"),B=32;for(let Mt=0;Mt<256;Mt+=B*2)I.fillStyle="#831843",I.fillRect(Mt,0,B,256),I.fillStyle="#fef3c7",I.fillRect(Mt+B,0,B,256);const S=new ie(L);S.wrapS=Me,S.wrapT=Me,S.repeat.set(4,1);const x=new F({map:S,roughness:.7,side:Te}),T=new gt;T.position.set(0,2.65,-.9);const G=new qt(4.8,1.5);G.rotateX(Math.PI*.4);const rt=new g(G,x);rt.position.set(0,-.22,-.65),T.add(rt);const U=new qt(4.8,.26),W=new g(U,x);W.position.set(0,-.55,-1.25),T.add(W),[-2.2,2.2].forEach(Mt=>{const pt=new ot(.02,.02,1.4,6);pt.rotateX(-Math.PI*.25);const yt=new g(pt,new F({color:1976635}));yt.position.set(Mt,-.35,-.6),T.add(yt)}),e.add(T);const q=document.createElement("canvas");q.width=1024,q.height=256;const V=q.getContext("2d");V.fillStyle="#1c120c",V.fillRect(0,0,1024,256),V.strokeStyle="#d97706",V.lineWidth=12,V.strokeRect(10,10,1004,236),V.strokeStyle="#fde047",V.lineWidth=4,V.strokeRect(22,22,980,212);const nt=(Mt,pt)=>{V.fillStyle="#fde047",V.beginPath(),V.ellipse(Mt,pt+32,42,12,0,0,Math.PI*2),V.fill(),V.fillStyle="#ffffff",V.beginPath(),V.moveTo(Mt-30,pt-18),V.lineTo(Mt+30,pt-18),V.quadraticCurveTo(Mt+28,pt+24,Mt+18,pt+28),V.lineTo(Mt-18,pt+28),V.quadraticCurveTo(Mt-28,pt+24,Mt-30,pt-18),V.closePath(),V.fill(),V.strokeStyle="#ffffff",V.lineWidth=8,V.beginPath(),V.arc(Mt+32,pt+4,14,-Math.PI*.4,Math.PI*.6),V.stroke(),V.strokeStyle="#fef08a",V.lineWidth=4,V.beginPath(),V.moveTo(Mt-12,pt-24),V.quadraticCurveTo(Mt-18,pt-38,Mt-10,pt-48),V.moveTo(Mt+8,pt-24),V.quadraticCurveTo(Mt+2,pt-38,Mt+12,pt-50),V.stroke()};nt(70,128),nt(954,128),V.fillStyle="#fef08a",V.font="900 82px sans-serif",V.textAlign="center",V.textBaseline="middle",V.shadowColor="rgba(0,0,0,0.95)",V.shadowBlur=14,V.fillText("HIGHWAY CAFE",512,80),V.fillStyle="#ffffff",V.font="bold 54px sans-serif",V.shadowColor="rgba(0,0,0,0.85)",V.shadowBlur=8,V.fillText("ক্যাফে ও রেস্তোরাঁ",512,172),V.fillStyle="#f59e0b",V.font="bold 26px sans-serif",V.shadowBlur=0,V.fillText("FRESH COFFEE • TEA • BURGERS & SNACKS",512,226);const j=new ie(q),J=new F({map:j,roughness:.35,emissive:4005904,emissiveIntensity:.18}),H=new gt;H.position.set(0,3.4,-.95);const ft=new g(new O(4.7,.92,.08),new F({color:2561548,roughness:.5}));H.add(ft);const Q=new qt(4.62,.84);Q.rotateY(Math.PI);const st=new g(Q,J);return st.position.set(0,0,-.045),H.add(st),[-1.6,1.6].forEach(Mt=>{const pt=new g(new ot(.02,.02,.35,6),w);pt.position.set(Mt,.52,-.15),pt.rotation.x=Math.PI*.3,H.add(pt);const yt=new g(new pe(.08,.14,8),w);yt.position.set(Mt,.42,-.28),yt.rotation.x=Math.PI*.8,H.add(yt);const Et=new g(new Ht(.04,6,6),new de({color:16772565}));Et.position.set(Mt,.38,-.28),H.add(Et)}),e.add(H),[-1.7,1.7].forEach(Mt=>{const pt=new gt;pt.position.set(Mt,.28,-1.35);const yt=new g(new ot(.035,.22,.75,12),new F({color:1976635,metalness:.8}));yt.position.y=.375,pt.add(yt);const Et=new g(new ot(.55,.55,.05,16),this.woodMat);Et.position.y=.75,pt.add(Et),[-.18,.18].forEach((dt,At)=>{const D=new g(new ot(.05,.045,.08,8),new F({color:16777215,roughness:.2}));D.position.set(dt,.81,At===0?.1:-.1),pt.add(D);const _t=new g(new $i(.04,8),new de({color:2561548}));_t.rotation.x=-Math.PI/2,_t.position.set(dt,.85,At===0?.1:-.1),pt.add(_t)}),[-.65,.65].forEach(dt=>{const At=new gt;At.position.set(dt,0,0),[-.14,.14].forEach(ct=>{[-.14,.14].forEach(wt=>{const ut=new g(new ot(.02,.02,.45,6),this.woodMat);ut.position.set(ct,.225,wt),At.add(ut)})});const D=new g(new O(.36,.04,.36),this.woodMat);D.position.y=.45,At.add(D);const _t=new g(new O(.36,.35,.04),this.woodMat);_t.position.set(0,.68,dt>0?.16:-.16),At.add(_t),pt.add(At)}),e.add(pt)}),[-2.9,2.9].forEach(Mt=>{const pt=new g(new O(.45,.42,1.6),this.woodMat);pt.position.set(Mt,.49,-1.2),e.add(pt);for(let yt=-.55;yt<=.55;yt+=.5){const Et=new g(new Ht(.24,8,8),this.palmLeafMat);Et.position.set(Mt,.8,-1.2+yt),e.add(Et);const dt=new g(new Ht(.06,6,6),new de({color:yt<0?14427686:16096779}));dt.position.set(Mt,.95,-1.2+yt),e.add(dt)}}),e}createHighwayBar(t=-1){const e=new gt;e.name="highway_bar";const n=new O(6.6,.28,4.4),i=new F({color:1976635,roughness:.8}),o=new g(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const a=new O(6.8,.14,.25),r=new g(a,new F({color:988970}));r.position.set(0,.07,-2.15),e.add(r);const c=new O(5.6,3.2,3),h=new F({color:988970,roughness:.7}),d=new g(c,h);d.position.set(0,1.74,.6),this.applyShadow(d),e.add(d),[-2.5,2.5].forEach(st=>{const $=new g(new O(.55,3.2,.2),new F({color:4073251,roughness:.6}));$.position.set(st,1.74,-.9),e.add($)});const f=new O(5.9,.22,3.3),l=new g(f,new F({color:132631,roughness:.4}));l.position.set(0,3.42,.6),e.add(l);const u=new O(3.6,.12,.7),_=new F({color:1120295,roughness:.15,metalness:.8}),v=new g(u,_);v.position.set(0,1.05,-.6),e.add(v);const m=new O(3.4,.98,.6),p=new F({color:1976635,roughness:.5}),w=new g(m,p);w.position.set(0,.5,-.6),e.add(w);const M=new O(3.4,.04,.04),y=new de({color:440020}),P=new g(M,y);P.position.set(0,.98,-.93),e.add(P);const L=new O(3.4,1.6,.2),I=new g(L,new F({color:1973807,roughness:.3}));I.position.set(0,1.8,.6),e.add(I);const B=[1483594,14251782,440020,10033947,16436245];if([1.25,1.7,2.15].forEach((st,$)=>{const Mt=new g(new O(3.2,.04,.3),new F({color:3718648,roughness:.1,transparent:!0,opacity:.8}));Mt.position.set(0,st,.45),e.add(Mt);for(let pt=-1.4;pt<=1.4;pt+=.28){const yt=B[(Math.abs(Math.round(pt*10))+$)%B.length],Et=new gt;Et.position.set(pt,st+.02,.45);const dt=new g(new ot(.045,.045,.22,8),new F({color:yt,roughness:.2,metalness:.3,transparent:!0,opacity:.9}));dt.position.y=.11,Et.add(dt);const At=new g(new ot(.016,.022,.1,8),new F({color:yt,roughness:.2}));At.position.y=.25,Et.add(At);const D=new g(new ot(.018,.018,.02,6),new de({color:16638023}));D.position.y=.31,Et.add(D),e.add(Et)}}),[-1,0,1].forEach(st=>{const $=new gt;$.position.set(st,.28,-1.25);const Mt=new g(new ot(.03,.24,.72,12),new F({color:9741240,metalness:.9,roughness:.15}));Mt.position.y=.36,$.add(Mt);const pt=new g(new ln(.16,.02,8,16),new F({color:9741240,metalness:.9,roughness:.15}));pt.rotation.x=Math.PI/2,pt.position.y=.24,$.add(pt);const yt=new g(new ot(.22,.22,.08,16),new F({color:10033947,roughness:.5}));yt.position.y=.74,$.add(yt),e.add($)}),!this.isMobile){const st=new Wn(440020,3.2,9);st.position.set(-1.2,2.3,.2),e.add(st);const $=new Wn(14239471,2.8,8);$.position.set(1.2,2.3,.2),e.add($)}const S=document.createElement("canvas");S.width=1024,S.height=256;const x=S.getContext("2d");x.fillStyle="#030712",x.fillRect(0,0,1024,256),x.strokeStyle="#ec4899",x.lineWidth=10,x.shadowColor="#ec4899",x.shadowBlur=18,x.strokeRect(12,12,1e3,232),x.strokeStyle="#06b6d4",x.lineWidth=4,x.shadowColor="#06b6d4",x.shadowBlur=12,x.strokeRect(26,26,972,204);const T=(st,$)=>{x.shadowColor="#facc15",x.shadowBlur=14,x.fillStyle="#facc15",x.beginPath(),x.roundRect(st,$+18,48,56,[0,0,8,8]),x.fill(),x.fillStyle="#ffffff",x.beginPath(),x.arc(st+10,$+14,14,0,Math.PI*2),x.arc(st+24,$+8,16,0,Math.PI*2),x.arc(st+38,$+14,14,0,Math.PI*2),x.fill(),x.strokeStyle="#facc15",x.lineWidth=6,x.beginPath(),x.arc(st+52,$+46,16,-Math.PI*.45,Math.PI*.45),x.stroke()},G=(st,$)=>{x.shadowColor="#06b6d4",x.shadowBlur=14,x.strokeStyle="#38bdf8",x.lineWidth=5,x.beginPath(),x.moveTo(st-30,$+10),x.lineTo(st+30,$+10),x.lineTo(st,$+50),x.closePath(),x.stroke(),x.fillStyle="#f43f5e",x.beginPath(),x.moveTo(st-20,$+22),x.lineTo(st+20,$+22),x.lineTo(st,$+50),x.closePath(),x.fill(),x.strokeStyle="#38bdf8",x.lineWidth=5,x.beginPath(),x.moveTo(st,$+50),x.lineTo(st,$+80),x.moveTo(st-22,$+80),x.lineTo(st+22,$+80),x.stroke(),x.fillStyle="#84cc16",x.beginPath(),x.arc(st-6,$+16,7,0,Math.PI*2),x.fill()};T(52,85),G(940,80),x.fillStyle="#38bdf8",x.font="900 84px sans-serif",x.textAlign="center",x.textBaseline="middle",x.shadowColor="#06b6d4",x.shadowBlur=24,x.fillText("HIGHWAY BAR",512,78),x.fillStyle="#fde047",x.font="bold 62px sans-serif",x.shadowColor="#f59e0b",x.shadowBlur=20,x.fillText("মদের বার",512,168),x.fillStyle="#a3e635",x.font="bold 25px sans-serif",x.shadowColor="#84cc16",x.shadowBlur=8,x.fillText("IMPORTED LIQUOR • CHILLED BEER • WINE LOUNGE",512,224);const rt=new ie(S),U=new F({map:rt,roughness:.25,emissive:440020,emissiveIntensity:.35}),W=new gt;W.position.set(0,3.4,-.95);const q=new g(new O(4.7,.95,.08),new F({color:132631,roughness:.4}));W.add(q);const V=new qt(4.62,.88);V.rotateY(Math.PI);const nt=new g(V,U);nt.position.set(0,0,-.045),W.add(nt);const j=new qt(.8,1.2),J=document.createElement("canvas");J.width=256,J.height=384;const H=J.getContext("2d");H.fillStyle="#030712",H.fillRect(0,0,256,384),H.strokeStyle="#ec4899",H.lineWidth=6,H.strokeRect(6,6,244,372),H.fillStyle="#facc15",H.font="900 46px sans-serif",H.textAlign="center",H.shadowColor="#f59e0b",H.shadowBlur=12,H.fillText("BAR",128,70),H.fillStyle="#38bdf8",H.font="bold 36px sans-serif",H.shadowColor="#06b6d4",H.fillText("OPEN",128,130),H.fillStyle="#ec4899",H.font="900 44px sans-serif",H.shadowColor="#ec4899",H.fillText("24/7",128,200),H.fillStyle="#fde047",H.font="bold 32px sans-serif",H.shadowColor="#f59e0b",H.fillText("মদ ও বিয়ার",128,280),H.fillStyle="#a3e635",H.font="bold 22px sans-serif",H.fillText("CHILLED BEER",128,340);const ft=new ie(J),Q=new g(j,new F({map:ft,emissive:15485081,emissiveIntensity:.35}));return Q.position.set(-2.82,2,-.6),Q.rotation.y=-Math.PI/2,e.add(Q),e}createSmokingGuysGroup(t=1){const e=new gt;e.name="smoking_guys_group",e.scale.set(1.25,1.25,1.25);const n=new F({color:16106390,roughness:.65}),i=new F({color:1579035,roughness:.45}),o=new F({color:16317180,roughness:.7}),a=new F({color:1976635,roughness:.7}),r=new gt;r.position.set(-.42,0,0);const c=new F({color:14427686,roughness:.7}),h=new F({color:1976635,roughness:.8}),d=new g(new O(.38,.58,.24),c);d.position.set(0,1.15,0),d.rotation.y=.25,r.add(d);const f=new g(new O(.3,.24,.16),c);f.position.set(0,1.38,.12),r.add(f);const l=new gt;l.position.set(0,1.54,0),l.rotation.x=-.12,l.rotation.y=.25;const u=new g(new Ht(.125,12,12),n);l.add(u);const _=new g(new Ht(.132,12,12),i);_.scale.set(1.02,1.08,1.04),_.position.set(0,.03,-.01),l.add(_),r.add(l),[-.1,.1].forEach(dt=>{const At=new g(new ot(.06,.05,.84,8),h);At.position.set(dt,.44,0),r.add(At);const D=new g(new O(.12,.08,.22),o);D.position.set(dt,.04,-.04),r.add(D)});const v=new g(new ot(.045,.04,.52,8),c);v.position.set(-.24,1.1,0),v.rotation.z=.15,r.add(v);const m=new g(new ot(.048,.044,.32,8),c);m.position.set(.23,1.25,-.06),m.rotation.z=-Math.PI*.35,m.rotation.x=-Math.PI*.25,r.add(m);const p=new g(new ot(.042,.038,.32,8),c);p.position.set(.14,1.44,-.12),p.rotation.z=Math.PI*.32,p.rotation.x=-Math.PI*.45,r.add(p);const w=new g(new Ht(.045,8,8),n);w.position.set(.04,1.5,-.16),r.add(w);const M=new gt;M.position.set(.02,1.51,-.18),M.rotation.x=-Math.PI*.15,M.rotation.y=.28;const y=new g(new ot(.012,.012,.028,8),new F({color:14251782,roughness:.9}));y.rotation.x=Math.PI/2,M.add(y);const P=new g(new ot(.012,.012,.065,8),new F({color:16317180,roughness:.5}));P.rotation.x=Math.PI/2,P.position.z=-.046,M.add(P);const L=new g(new Ht(.014,8,8),new de({color:16726784}));L.position.z=-.082,M.add(L);const I=new gt;I.position.set(.02,1.51,-.26),I.userData={type:"cigarette",maxH:.5,spd:.007,drift:.004,light:null,seed:Math.random()*5};for(let dt=0;dt<5;dt++){const At=new g(new Ht(.022+dt*.006,6,6),this.smokeMat);At.position.y=dt*.1,I.add(At)}this.smokeEmitters.push(I),r.add(I),r.add(M),e.add(r),this.animatedAnimals.push({type:"smoker",head:l,seed:Math.random()*10});const B=new gt;B.position.set(.48,0,-.15);const S=new F({color:1981066,roughness:.7}),x=new F({color:4153874,roughness:.8}),T=new g(new O(.36,.56,.22),S);T.position.set(0,1.14,0),T.rotation.y=-.7,B.add(T);const G=new g(new Ht(.12,12,12),n);G.position.set(0,1.54,0),G.rotation.y=-.7,B.add(G);const rt=new g(new Ht(.128,12,12),i);rt.scale.set(1.02,1.06,1.04),rt.position.set(0,1.57,-.01),B.add(rt),[-.09,.09].forEach(dt=>{const At=new g(new ot(.058,.05,.84,8),x);At.position.set(dt,.44,0),B.add(At);const D=new g(new O(.12,.08,.22),a);D.position.set(dt,.04,-.04),B.add(D)});const U=new g(new ot(.042,.038,.48,8),S);U.position.set(.22,1.16,.06),U.rotation.z=-Math.PI*.22,U.rotation.x=-Math.PI*.25,B.add(U);const W=new g(new ot(.042,.038,.48,8),S);W.position.set(-.21,1.08,.04),W.rotation.z=Math.PI*.16,W.rotation.x=-Math.PI*.12,B.add(W);const q=new g(new Ht(.042,8,8),n);q.position.set(-.28,.85,.1),B.add(q);const V=new gt;V.position.set(-.32,.85,.12),V.rotation.x=-Math.PI*.35,V.rotation.y=-.4;const nt=new g(new ot(.012,.012,.08,8),new F({color:16317180,roughness:.5}));nt.rotation.x=Math.PI/2,V.add(nt);const j=new g(new Ht(.014,8,8),new de({color:16726784}));j.position.z=-.045,V.add(j);const J=new gt;J.position.set(-.32,.88,.1),J.userData={type:"cigarette",maxH:.45,spd:.006,drift:.003,light:null,seed:Math.random()*5};for(let dt=0;dt<4;dt++){const At=new g(new Ht(.02+dt*.005,6,6),this.smokeMat);At.position.y=dt*.1,J.add(At)}this.smokeEmitters.push(J),B.add(J),B.add(V),e.add(B);const H=new gt;H.position.set(.02,0,.52);const ft=new F({color:3359061,roughness:.7}),Q=new F({color:13935475,roughness:.8}),st=new g(new O(.38,.58,.24),ft);st.position.set(0,1.15,0),st.rotation.y=Math.PI*.9,H.add(st);const $=new g(new Ht(.125,12,12),n);$.position.set(0,1.54,0),$.rotation.y=Math.PI*.9,H.add($);const Mt=new g(new Ht(.132,12,12),i);Mt.scale.set(1.02,1.08,1.04),Mt.position.set(0,1.57,.01),H.add(Mt),[-.1,.1].forEach(dt=>{const At=new g(new ot(.058,.05,.84,8),Q);At.position.set(dt,.44,0),H.add(At);const D=new g(new O(.12,.08,.22),new F({color:7877903}));D.position.set(dt,.04,.04),H.add(D)}),[-.22,.22].forEach(dt=>{const At=new g(new ot(.045,.04,.48,8),ft);At.position.set(dt,1.12,-.06),At.rotation.z=dt>0?-.25:.25,At.rotation.x=Math.PI*.18,H.add(At)}),e.add(H);const pt=new g(new O(.35,.2,.5),this.brickMat);pt.position.set(-.1,.1,-.15),e.add(pt);const yt=new g(new O(.1,.05,.16),new F({color:1981066,metalness:.5,roughness:.3}));yt.position.set(-.1,.225,-.15),e.add(yt);const Et=new g(new O(.07,.035,.11),new F({color:16096779,roughness:.8}));return Et.position.set(.02,.218,-.22),e.add(Et),e}createDingiBoat(){const t=new gt;t.name="dingi_nouka";const e=new F({color:4073251,roughness:.8}),n=new O(1.1,.12,3.8),i=new g(n,e);i.position.y=.06,t.add(i),[-.55,.55].forEach(y=>{const P=new O(.08,.45,3.8),L=new g(P,e);L.position.set(y,.28,0),L.rotation.z=y>0?.25:-.25,t.add(L)}),[-1,1].forEach(y=>{const P=new pe(.55,1.2,5);P.rotateX(y>0?-Math.PI/3:Math.PI/3);const L=new g(P,e);L.position.set(0,.35,y*2.3),L.scale.set(.9,.5,1.1),t.add(L);const I=new g(new Ht(.08,8,8),new F({color:16096779,metalness:.8,roughness:.3}));I.position.set(0,.65,y*2.7),t.add(I)});const o=new ot(.68,.68,1.9,16,1,!0,0,Math.PI);o.rotateZ(Math.PI/2),o.rotateY(Math.PI/2);const a=new g(o,this.bambooWallMat);a.position.set(0,.48,-.2),t.add(a),[-.8,0,.8].forEach(y=>{const P=new ln(.69,.025,6,16,Math.PI);P.rotateZ(Math.PI/2),P.rotateY(Math.PI/2);const L=new g(P,this.woodMat);L.position.set(0,.48,-.2+y),t.add(L)});const r=new gt;r.position.set(0,.22,1.35);const c=new F({color:13935475,roughness:.7}),h=new F({color:165063,roughness:.8}),d=new F({color:1579035,roughness:.5}),f=new g(new O(.38,.28,.42),h);f.position.y=.14,r.add(f);const l=new g(new O(.32,.42,.2),c);l.position.set(0,.46,-.05),l.rotation.x=-.15,r.add(l);const u=new g(new Ht(.11,10,10),c);u.position.set(0,.74,-.1),r.add(u);const _=new g(new Ht(.115,10,10),d);_.position.set(0,.77,-.1),_.scale.set(1.02,1.05,1.02),r.add(_);const v=new pe(.24,.12,12),m=new g(v,this.bambooWallMat);m.position.set(0,.86,-.1),r.add(m);const p=new gt;p.position.set(.32,.4,0),p.rotation.z=-Math.PI*.32,p.rotation.x=Math.PI*.25;const w=new g(new ot(.025,.025,2.2,8),this.woodMat);w.position.y=-.5,p.add(w);const M=new g(new O(.18,.55,.02),this.woodMat);return M.position.y=-1.4,p.add(M),r.add(p),t.add(r),t}createWaterHyacinthCluster(){const t=new gt;t.name="kochuripana_cluster";const e=new F({color:1409085,roughness:.5}),n=new de({color:12616956});for(let i=0;i<7;i++){const o=i/7*Math.PI*2+Math.random()*.4,a=.25+Math.random()*.45,r=Math.cos(o)*a,c=Math.sin(o)*a,h=new Ht(.12,8,6);h.scale(1.3,.2,1);const d=new g(h,e);if(d.position.set(r,.02,c),t.add(d),i%2===0){const f=new g(new pe(.04,.12,6),n);f.position.set(r*.8,.08,c*.8),t.add(f)}}return t}createBangladeshiRiverBridge(t=13,e=60){const n=new gt;n.name="bangladeshi_river_bridge";const i=t*.5,o=.45,a=new O(t+.8,.45,e),r=new F({color:4674921,roughness:.8}),c=new g(a,r);c.position.set(0,-.28,0),c.receiveShadow=!0,n.add(c),[-e*.5+.3,e*.5-.3].forEach(S=>{const x=new O(t+.2,.012,.35),T=new g(x,new F({color:988970,roughness:.9}));T.position.set(0,.006,S),n.add(T)}),[-1,1].forEach(S=>{const x=(i+.3)*S,T=new O(.38,.85,e),G=new g(T,this.bridgeRedMat);G.position.set(x,-.45,0),this.applyShadow(G),n.add(G);const rt=new O(.44,.12,e),U=new g(rt,this.bridgeWhiteMat);U.position.set(x,-.85,0),n.add(U)}),[-18,-6,6,18].forEach(S=>{const x=new gt;x.position.set(0,0,S);const T=new O(t+1.2,.45,.95),G=new g(T,this.bridgeRedMat);G.position.y=-.55,x.add(G),[-5.2,-1.8,1.8,5.2].forEach(W=>{const q=new ot(.24,.28,3.2,8),V=new g(q,this.bridgeRedMat);V.position.set(W,-1.95,0),V.rotation.z=W>0?-.06:.06,x.add(V);const nt=new g(new ot(.29,.29,.28,8),new F({color:993570,roughness:.9}));nt.position.set(W,-1.35,0),x.add(nt)});const rt=new O(t+.6,.22,.3),U=new g(rt,this.bridgeRedMat);U.position.y=-1.6,x.add(U),n.add(x)}),[-1,1].forEach(S=>{const x=(i+.16)*S,T=new O(.34,.28,e),G=new g(T,this.bridgeCurbMat);G.position.set(x,.14,0),G.receiveShadow=!0,n.add(G)});const d=16,f=[];for(let S=0;S<d;S++)f.push(-28.5+S/(d-1)*57);[-1,1].forEach(S=>{const x=(i+.16)*S;f.forEach(T=>{const G=Math.sin((T+28.5)/57*Math.PI)*o,rt=new O(.22,.96,.22),U=new g(rt,this.bridgeRedMat);U.position.set(x,.28+.48+G,T),this.applyShadow(U),n.add(U);const W=new pe(.18,.08,4);W.rotateY(Math.PI/4);const q=new g(W,this.bridgeRedMat);q.position.set(x,.28+.96+.04+G,T),n.add(q)});for(let T=0;T<f.length-1;T++){const G=f[T],rt=f[T+1],U=(G+rt)*.5,W=rt-G,q=Math.sin((U+28.5)/57*Math.PI)*o,V=new g(new O(.14,.12,W),this.bridgeWhiteMat);V.position.set(x,.28+.44+q,U),n.add(V);const nt=new g(new O(.2,.12,W),this.bridgeWhiteMat);if(nt.position.set(x,.28+.92+q,U),n.add(nt),S===-1){const j=new ot(.065,.065,W,8);j.rotateX(Math.PI/2);const J=new g(j,this.pipelineMat);J.position.set(x+.09,.28+.32+q,U),n.add(J)}}});const l=new qt(180,48);l.rotateX(-Math.PI/2);const u=new g(l,this.riverWaterMat);u.position.set(0,-1.35,0),u.receiveShadow=!0,n.add(u);const _=new qt(180,48);_.rotateX(-Math.PI/2);const v=new g(_,new F({color:1841431,roughness:.95}));v.position.set(0,-3.2,0),n.add(v),[-1,1].forEach(S=>{const x=S*26.5;[-1,1].forEach(T=>{const G=new qt(75,7);G.rotateX(S>0?-Math.PI*.38:Math.PI*.38);const rt=new g(G,this.mudPlinthMat);rt.position.set(T*48,-.7,x),n.add(rt)})});const m=this.createDingiBoat();m.position.set(16.5,-1.35,3.5),m.rotation.y=.45,n.add(m),this.animatedAnimals.push({type:"dingi",mesh:m,startY:-1.35,seed:Math.random()*10}),[[14.5,-1.34,1.5],[19,-1.34,5.5],[-15,-1.34,-4],[-7.5,-1.34,6],[7.5,-1.34,-6]].forEach(([S,x,T])=>{const G=this.createWaterHyacinthCluster();G.position.set(S,x,T),n.add(G)});const w=new gt;w.position.set(i+.95,0,-28.8);const M=new g(new O(.35,1.2,.35),this.bridgeCurbMat);M.position.y=.6,w.add(M);const y=document.createElement("canvas");y.width=512,y.height=320;const P=y.getContext("2d");P.fillStyle="#15803d",P.fillRect(0,0,512,320),P.strokeStyle="#facc15",P.lineWidth=12,P.strokeRect(8,8,496,304),P.strokeStyle="#ffffff",P.lineWidth=4,P.strokeRect(22,22,468,276),P.fillStyle="#ffffff",P.font="bold 56px sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillText("মেঘনা নদী সেতু",256,85),P.fillStyle="#facc15",P.font="900 44px sans-serif",P.fillText("MEGHNA RIVER BRIDGE",256,160),P.fillStyle="#e2e8f0",P.font="bold 28px sans-serif",P.fillText("দৈর্ঘ্য: ৬০ মিটার | LENGTH: 60M",256,225),P.fillStyle="#86efac",P.font="bold 22px sans-serif",P.fillText("সড়ক ও জনপথ অধিদপ্তর (RHD)",256,275);const L=new ie(y),I=new F({map:L,roughness:.4}),B=new g(new qt(1.2,.75),I);return B.position.set(0,1.35,-.05),B.rotation.y=-Math.PI/4,w.add(B),n.add(w),[-1,1].forEach(S=>{const x=(i+.38)*S;for(let T=-29.2;T<=-23.5;T+=1.4){const G=new g(new ot(.1,.1,.85,12),this.bollardMat);G.position.set(x,.425,T),this.applyShadow(G),n.add(G);const rt=new g(new Ht(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);rt.position.set(x,.85,T),n.add(rt)}for(let T=23.5;T<=29.2;T+=1.4){const G=new g(new ot(.1,.1,.85,12),this.bollardMat);G.position.set(x,.425,T),this.applyShadow(G),n.add(G);const rt=new g(new Ht(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);rt.position.set(x,.85,T),n.add(rt)}}),n}createFigure({shirtMat:t,pantsMat:e,isSitting:n=!1,isSmoking:i=!1}){const o=new gt;o.name="human_figure",o.scale.set(1.15,1.15,1.15);const a=new O(.36,.52,.22),r=new g(a,t||this.shirtTealMat);r.position.y=n?.72:1.12,o.add(r);const c=new Ht(.12,8,8),h=new g(c,this.skinMat);h.position.y=n?1.08:1.48,o.add(h);const d=new Ht(.126,8,8);d.scale(1.02,1.05,1.02);const f=new g(d,this.hairMat);f.position.set(0,(n?1.08:1.48)+.02,-.01),o.add(f),[-.22,.22].forEach((u,_)=>{const v=new ot(.045,.04,.48,6),m=new g(v,t||this.shirtTealMat);if(n)m.position.set(u,.7,.1),m.rotation.x=.35;else if(i&&_===1){m.position.set(u*.8,1.25,-.08),m.rotation.z=-.6,m.rotation.x=-.5;const p=new ot(.01,.01,.12,4);p.rotateX(Math.PI/2);const w=new g(p,this.panjabiMat);w.position.set(0,.24,-.08),m.add(w);const M=new Ht(.015,4,4),y=new g(M,new de({color:16729088}));y.position.set(0,0,-.06),w.add(y)}else m.position.set(u,1.08,0),m.rotation.z=u>0?-.1:.1;o.add(m)});const l=e||this.stageTrussMat;return n?[-.1,.1].forEach(u=>{const _=new O(.11,.12,.42),v=new g(_,l);v.position.set(u,.48,.22),o.add(v);const m=new O(.1,.44,.1),p=new g(m,l);p.position.set(u,.22,.4),o.add(p)}):[-.09,.09].forEach(u=>{const _=new ot(.055,.048,.82,6),v=new g(_,l);v.position.set(u,.41,0),o.add(v)}),o}createUddanOpenStageWithTong(t=1){const e=new gt;e.name="uddan_open_stage_complex";const n=new gt;n.position.set(33*t,0,-4);const i=new pe(18,22,14),o=new g(i,this.hillDarkGreenMat);o.position.set(0,11,0),n.add(o);const a=new pe(15,17,12),r=new g(a,this.hillGreenMat);r.position.set(2*t,8.5,-18),n.add(r);const c=new pe(16,18,12),h=new g(c,this.hillGreenMat);h.position.set(2*t,9,15),n.add(h),[-14,-6,6,14].forEach(lt=>{const A=new pe(2,5,6),E=new g(A,this.treeCrownMat);E.position.set(-3*t,15,lt),n.add(E)}),e.add(n);const d=new gt;d.position.set(20*t,0,-4);const f=new qt(20,42);f.rotateX(-Math.PI/2);const l=new g(f,this.pavingPlazaMat);l.position.set(0,.015,0),l.receiveShadow=!0,d.add(l),[-16,12].forEach(lt=>{const A=new gt;A.position.set(0,0,lt);const E=new ot(.35,.45,4.5,8),X=new g(E,this.palmTrunkMat);X.position.y=2.25,A.add(X);const xt=new Ht(3.8,8,8);xt.scale(1.25,.85,1.25);const ht=new g(xt,this.treeCrownMat);ht.position.y=5.4,A.add(ht),d.add(A)}),e.add(d);const u=new gt;u.position.set(21*t,0,-4),u.rotation.y=t>0?-Math.PI/2:Math.PI/2;const _=new O(14,.9,8),v=new g(_,this.stageBaseYellowMat);v.position.set(0,.45,0),this.applyShadow(v),u.add(v);const m=new O(14.2,.08,8.2),p=new g(m,this.stageFloorMat);p.position.set(0,.94,0),u.add(p);const w=new O(14.3,.08,.2),M=new g(w,this.stageBorderBlueMat);M.position.set(0,.94,4.1),u.add(M);const y=new g(new O(11,.3,1.4),this.stageBaseYellowMat);y.position.set(0,.3,4.7),u.add(y);const P=new g(new O(9,.3,1.2),this.stageBaseYellowMat);P.position.set(0,.15,5.6),u.add(P);const L=new O(8,.35,.5),I=new g(L,this.brickMat);I.position.set(0,.18,6.4),u.add(I);for(let lt=-3.2;lt<=3.2;lt+=1.6){const A=new Ht(.3,6,6);A.scale(1.3,.9,1.3);const E=new g(A,this.bananaLeafMat);E.position.set(lt,.42,6.4),u.add(E)}[-7.4,7.4].forEach(lt=>{const A=new gt;A.position.set(lt,0,2.2);const E=new O(1.6,.8,4.8),X=new g(E,this.stageBaseYellowMat);X.position.set(0,.4,0),X.rotation.x=.18,A.add(X);const xt=new O(.1,.7,4.8),ht=new g(xt,this.stageBorderBlueMat);ht.position.set(lt>0?.75:-.75,.75,0),ht.rotation.x=.18,A.add(ht),u.add(A)});const B=new gt;B.position.set(0,.9,-3.8);const S=new O(11.5,4.5,.3),x=new g(S,this.stageTerracottaMat);x.position.set(0,2.25,0),this.applyShadow(x),B.add(x);const T=new O(7.5,3.4,.38),G=new g(T,this.stageGoldEmblemMat);G.position.set(0,2,.05),B.add(G);const rt=new ot(2.8,2.8,.4,16,1,!1,0,Math.PI);rt.rotateZ(Math.PI/2);const U=new g(rt,this.stageGoldEmblemMat);U.position.set(0,4,.05),B.add(U),[-5.2,5.2].forEach(lt=>{const A=new O(1.8,4.2,.35),E=new g(A,this.woodMat);E.position.set(lt,2.1,.02),B.add(E)}),u.add(B);const W=new gt;W.position.set(0,.9,0);const q=7.5,V=8.5,nt=new ot(q,q,V,24,1,!0,Math.PI*.12,Math.PI*.76);nt.rotateX(Math.PI/2);const j=new g(nt,this.stageBlueRoofMat);j.position.set(0,0,0),this.applyShadow(j),W.add(j),[-V*.5,V*.5].forEach(lt=>{const A=[];for(let ht=0;ht<=20;ht++){const mt=Math.PI*.12+ht/20*(Math.PI*.76),It=Math.cos(mt)*q,Y=Math.sin(mt)*q;A.push(new N(It,Y,lt))}const E=new Cn(A),X=new vn(E,20,.14,8,!1),xt=new g(X,this.stageTrussMat);W.add(xt)}),[-V*.5+.1,V*.5-.1].forEach(lt=>{[.25,.4,.5,.6,.75].forEach(A=>{const E=Math.PI*.12+A*(Math.PI*.76),X=Math.cos(E)*q,xt=Math.sin(E)*q,ht=[new N(0,0,lt),new N(X,xt,lt)],mt=new Cn(ht),It=new vn(mt,2,.06,6,!1),Y=new g(It,this.stageTrussMat);W.add(Y)})});const J=new O(12,.75,.25),H=new g(J,this.stageTrussMat);H.position.set(0,5.8,V*.5+.1),W.add(H);const ft=new ot(.55,.55,.12,16);ft.rotateX(Math.PI/2);const Q=new g(ft,this.stageGoldEmblemMat);Q.position.set(0,6.4,V*.5+.15),W.add(Q),u.add(W);const st=this.createFigure({shirtMat:this.panjabiMat,pantsMat:this.panjabiMat,isSitting:!1});st.position.set(-1.2,.94,-.6),u.add(st);const $=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});$.position.set(-.4,.94,-.6),$.rotation.y=-Math.PI*.4,u.add($);const Mt=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.stageTrussMat,isSitting:!0});Mt.position.set(2.4,.3,4.9),u.add(Mt);const pt=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.lungiPlaidMat,isSitting:!0});pt.position.set(3.4,.3,4.9),u.add(pt),e.add(u);const yt=new gt;yt.position.set(11.3*t,0,8),yt.rotation.y=t>0?-Math.PI*.5-.25:Math.PI*.5+.25;const Et=this.createTeaStall();yt.add(Et);const dt=new O(2.4,.45,.08),At=new F({color:14427686,roughness:.5}),D=new g(dt,At);D.position.set(0,2.55,.85),yt.add(D);const _t=new gt;_t.position.set(1.4,1.9,.9);for(let lt=0;lt<6;lt++){const A=new ot(.025,.025,.22,6);A.rotateZ(.2+lt%2*.2);const E=new g(A,this.stageGoldEmblemMat);E.position.set(lt%3*.06-.06,-Math.floor(lt/3)*.15,0),_t.add(E)}yt.add(_t);const ct=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.lungiPlaidMat,isSitting:!1});ct.position.set(.2,0,-.4),ct.rotation.y=Math.PI,yt.add(ct);const wt=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!0});wt.position.set(-.6,.45,1.8),wt.rotation.y=0,yt.add(wt);const ut=this.createFigure({shirtMat:this.panjabiMat,pantsMat:this.panjabiMat,isSitting:!0});ut.position.set(.6,.45,1.8),ut.rotation.y=-.3,yt.add(ut);const Ot=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.stageTrussMat,isSitting:!1,isSmoking:!0});return Ot.position.set(1.65,0,1.5),Ot.rotation.y=-Math.PI*.4,yt.add(Ot),e.add(yt),e}createUIUCampus(t=1){const e=new gt;e.name="uiu_permanent_campus";const n=new qt(88,112);n.rotateX(-Math.PI/2);const i=new g(n,this.paddyFieldMat);i.position.set(60*t,.005,0),i.receiveShadow=!0,e.add(i);const o=new gt;o.position.set(48*t,0,0);const a=new qt(38,68);a.rotateX(-Math.PI/2);const r=new g(a,this.uiuLawnMat);r.position.set(0,.02,0),r.receiveShadow=!0,o.add(r);const c=new qt(46,76);c.rotateX(-Math.PI/2);const h=new g(c,this.paddyFieldMat);h.position.set(0,.01,0),o.add(h);const d=new qt(16,76);d.rotateX(-Math.PI/2);const f=new g(d,this.pavingPlazaMat);f.position.set(27*t,.015,0),o.add(f),[-30,30].forEach(Z=>{const tt=new gt;tt.position.set(0,0,Z),[-3.2,3.2].forEach(Kt=>{const Zt=new g(new ot(.08,.08,3.2,8),this.goalPostMat);Zt.position.set(Kt,1.6,0),tt.add(Zt)});const Dt=new g(new ot(.08,.08,6.56,8),this.goalPostMat);Dt.rotateZ(Math.PI/2),Dt.position.set(0,3.2,0),tt.add(Dt),[-3.2,3.2].forEach(Kt=>{const Zt=new g(new ot(.04,.04,2.2,6),this.goalPostMat);Zt.position.set(Kt,1.1,Z>0?1:-1),Zt.rotation.x=Z>0?.72:-.72,tt.add(Zt)}),o.add(tt)});const l=new g(new Ht(.28,8,8),new F({color:16777215,roughness:.3}));l.position.set(0,.28,0),o.add(l);const u=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});u.position.set(-2.2,0,1.8),u.rotation.y=-.6,o.add(u);const _=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.panjabiMat,isSitting:!1});_.position.set(2.4,0,-1.6),_.rotation.y=2.4,o.add(_);const v=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});v.position.set(8.5,0,12),v.rotation.y=-1.2,o.add(v);const m=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.panjabiMat,isSitting:!1});m.position.set(-9,0,-14),m.rotation.y=1.1,o.add(m),[-14,14].forEach(Z=>{const tt=new gt;tt.position.set(-18*t,0,Z);const Dt=new pe(3.2,2.2,4);Dt.rotateY(Math.PI/4);const Kt=new g(Dt,this.uiuTentMat);Kt.position.set(0,3.1,0),tt.add(Kt),[-1.8,1.8].forEach(he=>{[-1.8,1.8].forEach(Ut=>{const te=new g(new ot(.04,.04,2.2,6),this.stageTrussMat);te.position.set(he,1.1,Ut),tt.add(te)})});const Zt=new g(new O(.6,.45,3.2),this.uiuConcreteMat);Zt.position.set(0,.225,0),tt.add(Zt);const Vt=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.stageTrussMat,isSitting:!0});Vt.position.set(0,0,0),tt.add(Vt),o.add(tt)}),[-24,-8,8,24].forEach(Z=>{const tt=new g(new ot(.025,.025,2.4,6),this.goalPostMat);tt.position.set(-18*t,1.2,Z),o.add(tt);const Dt=new g(new O(.02,.45,.7),Z>0?this.shirtRedMat:this.stageBaseYellowMat);Dt.position.set(-18*t,2.1,Z+.35),o.add(Dt)}),[-16,-8,0,8,16].forEach(Z=>{const tt=this.createCoconutTree();tt.position.set(Z,0,37),o.add(tt)}),[-16,-8,0,8,16].forEach(Z=>{const tt=this.createCoconutTree();tt.position.set(Z,0,-37),o.add(tt)}),[-34,34].forEach(Z=>{const tt=this.createCoconutTree();tt.position.set(-20*t,0,Z),o.add(tt)}),[-28,-14,14,28].forEach(Z=>{const tt=this.createCoconutTree();tt.position.set(20*t,0,Z),o.add(tt)});const p=new gt,w=-24*t,M=new g(new O(.35,.45,31.2),this.concreteMat);M.position.set(w,.225,-19.4),p.add(M);for(let Z=-35;Z<=-4;Z+=3.5){const tt=new g(new ot(.04,.04,1.6,6),this.stageTrussMat);tt.position.set(w,1,Z),p.add(tt)}const y=new g(new O(.08,.08,31.2),this.stageTrussMat);y.position.set(w,1.75,-19.4),p.add(y);const P=new g(new O(.35,.45,31.2),this.concreteMat);P.position.set(w,.225,19.4),p.add(P);for(let Z=4;Z<=35;Z+=3.5){const tt=new g(new ot(.04,.04,1.6,6),this.stageTrussMat);tt.position.set(w,1,Z),p.add(tt)}const L=new g(new O(.08,.08,31.2),this.stageTrussMat);L.position.set(w,1.75,19.4),p.add(L);const I=new gt,B=new qt(23.5,6.4);B.rotateX(-Math.PI/2);const S=new g(B,this.roadMaterial);S.position.set(29.75,.012,0),S.receiveShadow=!0,I.add(S);const x=new qt(22,.2);x.rotateX(-Math.PI/2);const T=new g(x,this.stageBaseYellowMat);T.position.set(29.75,.015,0),I.add(T),[-3.8,3.8].forEach(Z=>{const tt=new qt(4,1.8);tt.rotateX(-Math.PI/2);const Dt=new g(tt,this.roadMaterial);Dt.position.set(40,.011,Z),I.add(Dt)}),[-3.3,3.3].forEach(Z=>{const tt=new g(new O(23.5,.25,.25),this.curbStripeMat);tt.position.set(29.75,.125,Z),I.add(tt)});const G=new qt(.4,5.8);G.rotateX(-Math.PI/2);const rt=new g(G,this.policeSilverMat);rt.position.set(24.8,.015,0),I.add(rt),o.add(I);const U=new gt;U.position.set(w,0,0),[-3.5,3.5].forEach(Z=>{const tt=new g(new O(1,5.4,1),this.brickMat);tt.position.set(0,2.7,Z),U.add(tt);const Dt=new g(new O(1.25,.8,1.25),this.concreteMat);Dt.position.set(0,.4,Z),U.add(Dt);const Kt=new g(new O(1.2,.35,1.2),this.concreteMat);Kt.position.set(0,5.5,Z),U.add(Kt)});const W=new g(new O(.55,1,7.8),this.stageTrussMat);W.position.set(0,4.8,0),U.add(W);const q=new g(new O(.14,.95,6.8),this.uiuGateSignMat);q.position.set(t>0?-.1:.1,4.8,0),U.add(q);const V=new gt;V.position.set(0,5.9,0);const nt=new g(new O(.35,1.4,4.4),new F({color:593174,roughness:.3}));V.add(nt);const j=new g(new O(.38,1.48,4.48),this.goldBadgeMat);j.position.set(0,0,0),V.add(j);const J=new F({color:16717636,emissive:16717636,emissiveIntensity:1.8,roughness:.2}),H=(Z,tt,Dt,Kt,Zt,Vt)=>{const he=new g(new O(Z,tt,Dt),J);he.position.set(Kt,Zt,Vt),V.add(he)},ft=t>0?-.22:.22;H(.12,.85,.14,ft,0,-1.65),H(.12,.85,.14,ft,0,-.95),H(.12,.14,.84,ft,-.38,-1.3),H(.12,.85,.16,ft,0,0),H(.12,.14,.55,ft,.38,0),H(.12,.14,.55,ft,-.38,0),H(.12,.85,.14,ft,0,.95),H(.12,.85,.14,ft,0,1.65),H(.12,.14,.84,ft,-.38,1.3);const Q=new Wn(16717636,1.4,12);Q.position.set(ft*2,0,0),V.add(Q),U.add(V);const st=new g(new O(1.8,2.5,1.8),this.concreteMat);st.position.set(1.5,1.25,-4.5),U.add(st);const $=new g(new O(.1,.9,1.2),this.uiuGlassMat);$.position.set(ft,1.4,-4.5),U.add($);const Mt=new g(new ot(.045,.045,4,6),this.policeBarricadeMat);Mt.rotateX(Math.PI/2),Mt.position.set(.6,.95,-1.2),U.add(Mt);const pt=this.createFigure({shirtMat:this.policeShirtMat,pantsMat:this.policePantsMat,isSitting:!1});pt.position.set(.8,0,-3.2),pt.rotation.y=t>0?-Math.PI/2:Math.PI/2,U.add(pt),p.add(U),o.add(p),e.add(o);const yt=new gt;yt.position.set(78*t,0,0),yt.rotation.y=t>0?-Math.PI/2:Math.PI/2;const Et=new gt;Et.position.set(-19,19,0);const dt=new O(18,38,16),At=[this.uiuFacadeMat,this.uiuFacadeMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuLogoMat,this.uiuFacadeMat],D=new g(dt,At);this.applyShadow(D),Et.add(D);const _t=new g(new O(2.4,38,16.2),this.uiuBrickFlankMat);_t.position.set(-9.2,0,0),Et.add(_t);const ct=new g(new O(7,3.8,8),this.uiuConcreteMat);ct.position.set(-2,20.9,0),Et.add(ct);const wt=new g(new O(16.5,.8,14.5),this.uiuRoofGardenMat);wt.position.set(0,19.4,0),Et.add(wt);const ut=new ot(.06,.08,7.5,6),Ot=new g(ut,this.goalPostMat);Ot.position.set(-2,25.5,1.5),Et.add(Ot);const lt=new g(new Ht(.32,8,8),new F({color:16711680,emissive:16711680,emissiveIntensity:2.2}));lt.position.set(-2,29.5,1.5),Et.add(lt);const A=new g(new O(18.1,1.1,16.1),this.stageTrussMat);A.position.set(0,19.55,0),Et.add(A);const E=new gt;E.position.set(0,11.5,8.1);const X=new g(new O(11.2,5,.25),new F({color:593174,roughness:.3}));E.add(X);const xt=new F({color:16717636,emissive:16717636,emissiveIntensity:1.8,roughness:.2}),ht=(Z,tt,Dt,Kt,Zt,Vt)=>{const he=new g(new O(Z,tt,Dt),xt);he.position.set(Kt,Zt,Vt),E.add(he)};ht(.38,2.6,.25,-4,0,.2),ht(.38,2.6,.25,-2.4,0,.2),ht(1.98,.38,.25,-3.2,-1.15,.2),ht(.44,2.6,.25,0,0,.2),ht(1.4,.35,.25,0,1.15,.2),ht(1.4,.35,.25,0,-1.15,.2),ht(.38,2.6,.25,2.4,0,.2),ht(.38,2.6,.25,4,0,.2),ht(1.98,.38,.25,3.2,-1.15,.2);const mt=new Wn(16717636,1.6,18);mt.position.set(0,0,2),E.add(mt),Et.add(E),yt.add(Et);const It=new gt;It.position.set(0,16,0);const Y=new O(16,32,13),Rt=[this.uiuConcreteMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuAtriumMat,this.uiuConcreteMat],Nt=new g(Y,Rt);It.add(Nt),[7,14,21,28].forEach(Z=>{const tt=new g(new O(16.2,1.2,13.4),this.uiuConcreteMat);tt.position.set(0,Z-16,0),It.add(tt)});const Ct=new g(new O(15.5,.6,12.5),this.uiuRoofGardenMat);Ct.position.set(0,16.3,0),It.add(Ct);const vt=6.9,jt=13,Yt=Math.sqrt(vt*vt+jt*jt),Xt=Math.atan2(vt,jt),zt=6.6;[-3.95,3.95].forEach(Z=>{[-4.5,8.5].forEach(tt=>{const Dt=new g(new ot(.24,.24,Yt,8),this.stageTrussMat);Dt.position.set(Z,tt,zt),Dt.rotation.z=-Xt,It.add(Dt);const Kt=new g(new ot(.24,.24,Yt,8),this.stageTrussMat);Kt.position.set(Z,tt,zt),Kt.rotation.z=Xt,It.add(Kt);const Zt=new g(new O(.85,.85,.45),this.stageTrussMat);Zt.position.set(Z,tt,zt+.05),It.add(Zt)})}),[-11,2,15].forEach(Z=>{const tt=new g(new O(16.3,.65,.5),this.stageTrussMat);tt.position.set(0,Z,zt),It.add(tt)}),[-7.4,0,7.4].forEach(Z=>{const tt=new g(new ot(.24,.24,26,8),this.stageTrussMat);tt.position.set(Z,2,zt),It.add(tt)}),yt.add(It);const Lt=new gt;Lt.position.set(19,17,0);const $t=new O(18,34,16),ee=[this.uiuFacadeMat,this.uiuFacadeMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuFacadeMat,this.uiuFacadeMat],kt=new g($t,ee);this.applyShadow(kt),Lt.add(kt);const Tt=new g(new O(2.4,34,16.2),this.uiuBrickFlankMat);Tt.position.set(9.2,0,0),Lt.add(Tt);for(let Z=-12;Z<=12;Z+=3.5){const tt=new g(new O(18.2,.35,1.2),this.uiuConcreteMat);tt.position.set(0,Z,8.4),Lt.add(tt)}const St=new g(new O(16.5,.8,14.5),this.uiuRoofGardenMat);St.position.set(0,17.4,0),Lt.add(St);const b=new g(new O(18.1,1.1,16.1),this.stageTrussMat);b.position.set(0,17.55,0),Lt.add(b),yt.add(Lt);const z=new gt;for(let Z=-26;Z<=26;Z+=5.2){const tt=new g(new ot(.45,.5,5,8),this.uiuConcreteMat);tt.position.set(Z,2.5,8.2),z.add(tt)}const et=new g(new O(32,5,2),this.uiuGlassMat);et.position.set(0,2.5,7.5),z.add(et);const Pt=new g(new O(36,.6,6),this.concreteMat);return Pt.position.set(0,.3,11),z.add(Pt),yt.add(z),e.add(yt),e}createHighwaySignGantry(t=13){const e=new gt;e.name="highway_sign_gantry";const n=t*.5+1.2,i=8.5;[-n,n].forEach(h=>{const d=new O(.9,1.8,.9),f=new g(d,this.gantryHazardMat);f.position.set(h,.9,0),e.add(f),[-.22,.22].forEach(u=>{const _=new g(new ot(.12,.12,i-1.8,8),this.stageTrussMat);_.position.set(h,1.8+(i-1.8)*.5,u),e.add(_)});for(let u=2.4;u<i-.5;u+=1.4){const _=new g(new ot(.04,.04,1.45,6),this.stageTrussMat);_.position.set(h,u+.6,0),_.rotation.x=Math.PI/4,e.add(_)}const l=new g(new ot(.06,.06,2.8,6),this.stageTrussMat);l.position.set(h>0?h-1:h+1,i-.9,0),l.rotation.z=h>0?-Math.PI/4:Math.PI/4,e.add(l)});const o=n*2+1.2;[-.35,.35].forEach(h=>{[-.22,.22].forEach(d=>{const f=new g(new ot(.09,.09,o,8),this.stageTrussMat);f.rotateZ(Math.PI/2),f.position.set(0,i+h,d),e.add(f)})});for(let h=-n+1.5;h<n-1;h+=1.8){const d=new g(new ot(.045,.045,.7,6),this.stageTrussMat);d.position.set(h,i,.22),e.add(d);const f=new g(new ot(.04,.04,1.9,6),this.stageTrussMat);f.position.set(h+.9,i,.22),f.rotation.z=Math.PI/4,e.add(f)}const a=new O(11.8,2.6,.16),r=[this.stageTrussMat,this.stageTrussMat,this.stageTrussMat,this.stageTrussMat,this.highwayGantrySignMat,this.stageTrussMat],c=new g(a,r);return c.position.set(0,7.6,.35),e.add(c),e}createPuthiaTemple(t=-1){const e=new gt;e.name="puthia_shiva_temple";const n=new gt;n.position.set(24*t,0,0),n.rotation.y=t>0?-Math.PI/2:Math.PI/2;const i=new O(15,1.8,16),o=new g(i,this.templePlinthMat);o.position.set(0,.9,0),o.receiveShadow=!0,n.add(o);const a=new O(13.5,.45,6.5),r=new g(a,this.templePlinthMat);r.position.set(0,1.8+.225,9.5),r.receiveShadow=!0,n.add(r),[-6.6,6.6].forEach(x=>{const T=new g(new O(.3,.85,6.5),this.templePlinthMat);T.position.set(x,2.45,9.5),n.add(T)});for(let x=0;x<5;x++){const T=new g(new O(9+x*.8,.28,.9),this.templePlinthMat);T.position.set(0,1.4-x*.28,13+x*.8),n.add(T)}const c=new qt(28,16);c.rotateX(-Math.PI/2);const h=new g(c,this.riverWaterMat);h.position.set(0,.03,24),n.add(h),[-6,6].forEach(x=>{const T=this.createWaterHyacinthCluster();T.position.set(x,.04,20),n.add(T)});const d=new O(12.5,6.5,12.5),f=new g(d,this.templeWallMat);f.position.set(0,1.8+3.25,0),this.applyShadow(f),n.add(f);const l=new g(new O(3.6,4.8,.4),this.templePlinthMat);l.position.set(0,4.4,6.3),n.add(l);const u=new g(new O(2.2,3.8,.5),this.stageTrussMat);u.position.set(0,4,6.35),n.add(u);const _=new O(8.5,4.2,8.5),v=new g(_,this.templeWallMat);v.position.set(0,1.8+6.5+2.1,0),this.applyShadow(v),n.add(v);const m=new pe(3.8,10.5,12),p=new g(m,this.templeShikharaMat);p.position.set(0,14.6+5.25,0),this.applyShadow(p),n.add(p);const w=new g(new ot(.12,.45,2.6,8),this.templeBrassMat);w.position.set(0,26.2,0),n.add(w);const M=new g(new O(.6,.8,.08),this.templeBrassMat);M.position.set(0,27.8,0),n.add(M),[-4.8,4.8].forEach(x=>{[-4.8,4.8].forEach(T=>{const G=new pe(1.6,5.2,8),rt=new g(G,this.templeShikharaMat);rt.position.set(x,8.3+2.6,T),this.applyShadow(rt),n.add(rt);const U=new g(new ot(.06,.18,1.4,6),this.templeBrassMat);U.position.set(x,14,T),n.add(U)})});const y=new gt;y.position.set(-13.5,0,4);const P=new g(new ot(3.2,3.4,1.2,8),this.templePlinthMat);P.position.set(0,.6,0),y.add(P);const L=new g(new ot(2.4,2.6,4.5,8),this.templeWallMat);L.position.set(0,3.45,0),y.add(L);const I=new g(new Ht(2.5,12,10,0,Math.PI*2,0,Math.PI*.5),this.templeShikharaMat);I.position.set(0,5.7,0),y.add(I);const B=new g(new ot(.08,.22,1.5,6),this.templeBrassMat);B.position.set(0,8.4,0),y.add(B),n.add(y);const S=(x,T)=>{const G=new Cn(x),rt=new vn(G,10,.08,6,!1),U=new g(rt,T);n.add(U)};return S([new N(-1.8,2.4,6.55),new N(-1.2,5.8,6.55),new N(0,6.4,6.55),new N(1.2,5.8,6.55),new N(1.8,2.4,6.55)],this.marigoldOrangeMat),S([new N(-1.6,2.2,6.58),new N(-1,5.5,6.58),new N(0,6.1,6.58),new N(1,5.5,6.58),new N(1.6,2.2,6.58)],this.marigoldYellowMat),S([new N(-6.6,2.7,6.5),new N(-6.6,2.2,9.5),new N(-6.6,2.7,12.5)],this.marigoldOrangeMat),S([new N(6.6,2.7,6.5),new N(6.6,2.2,9.5),new N(6.6,2.7,12.5)],this.marigoldYellowMat),S([new N(-6.6,2.7,12.5),new N(-3.2,2.1,12.5),new N(0,2.6,12.5),new N(3.2,2.1,12.5),new N(6.6,2.7,12.5)],this.marigoldOrangeMat),[-1.6,0,1.6].forEach(x=>{const T=new g(new ot(.08,.08,.65,6),this.marigoldYellowMat);T.position.set(x,5.8,6.6),n.add(T)}),[-7.8,7.8].forEach(x=>{const T=this.createBananaTree();T.position.set(x,0,6),n.add(T);const G=this.createBananaTree();G.position.set(x,0,11),n.add(G)}),[-8,0,8].forEach(x=>{const T=this.createCoconutTree();T.position.set(x,0,-10),n.add(T)}),e.add(n),e}createTrafficPoliceOfficer(){const t=new gt;t.name="bangladeshi_police_officer",t.scale.set(1.15,1.15,1.15),[-.1,.1].forEach(S=>{const x=new g(new O(.12,.16,.24),this.policeCapMat);x.position.set(S,.08,.02),t.add(x)}),[-.09,.09].forEach(S=>{const x=new g(new ot(.065,.055,.8,6),this.policePantsMat);x.position.set(S,.52,0),t.add(x)});const e=new g(new O(.38,.08,.24),this.policeCapMat);e.position.set(0,.94,0),t.add(e);const n=new g(new O(.08,.07,.02),this.goldBadgeMat);n.position.set(0,.94,.125),t.add(n);const i=new g(new O(.07,.18,.09),this.policeCapMat);i.position.set(.2,.88,0),t.add(i);const o=new g(new O(.06,.1,.08),this.policeCapMat);o.position.set(-.2,.92,0),t.add(o);const a=new g(new O(.38,.52,.23),this.policeShirtMat);a.position.set(0,1.2,0),t.add(a);const r=new g(new O(.39,.44,.24),this.policeVestMat);r.position.set(0,1.18,0),t.add(r),[1.1,1.28].forEach(S=>{const x=new g(new O(.4,.045,.245),this.policeSilverMat);x.position.set(0,S,0),t.add(x)}),[-.18,.18].forEach(S=>{const x=new g(new O(.08,.02,.14),this.policePantsMat);x.position.set(S,1.45,0),t.add(x);const T=new g(new Ht(.015,4,4),this.goldBadgeMat);T.position.set(S,1.465,0),t.add(T)});const c=new g(new Ht(.12,8,8),this.skinMat);c.position.set(0,1.54,0),t.add(c);const h=new g(new O(.16,.04,.06),this.policeCapMat);h.position.set(0,1.56,.1),t.add(h);const d=new g(new ot(.135,.13,.07,8),this.policeCapMat);d.position.set(0,1.63,0),t.add(d);const f=new g(new O(.16,.02,.09),this.policeCapMat);f.position.set(0,1.6,.13),f.rotation.x=.25,t.add(f);const l=new g(new O(.04,.05,.015),this.goldBadgeMat);l.position.set(0,1.65,.125),t.add(l);const u=new gt;u.position.set(0,1.15,.22),u.rotation.set(-.25,.25,-.45);const _=new g(new O(.06,.1,.44),this.gunMetalMat);u.add(_);const v=new g(new O(.05,.09,.24),this.gunWoodMat);v.position.set(0,-.01,.32),u.add(v);const m=new g(new ot(.016,.016,.4,6),this.gunMetalMat);m.rotateX(Math.PI/2),m.position.set(0,.015,-.4),u.add(m);const p=new g(new O(.012,.04,.02),this.gunMetalMat);p.position.set(0,.04,-.52),u.add(p);const w=new g(new O(.055,.07,.22),this.gunWoodMat);w.position.set(0,-.01,-.2),u.add(w);const M=new g(new O(.04,.16,.08),this.gunMetalMat);M.position.set(0,-.11,-.06),M.rotation.x=-.25,u.add(M);const y=new g(new O(.02,.02,.6),this.policePantsMat);y.position.set(0,-.06,.05),u.add(y),t.add(u);const P=new g(new ot(.045,.04,.42,6),this.policeShirtMat);P.position.set(.18,1.18,.1),P.rotation.set(-.85,.2,-.4),t.add(P);const L=new g(new Ht(.04,6,6),this.skinMat);L.position.set(.08,1.08,.24),t.add(L);const I=new g(new ot(.045,.04,.44,6),this.policeShirtMat);I.position.set(-.16,1.14,.12),I.rotation.set(-.75,-.35,.7),t.add(I);const B=new g(new Ht(.04,6,6),this.skinMat);return B.position.set(-.06,1.2,.28),t.add(B),this.applyShadow(t),t}createPoliceCheckpost(t=1,e=13){const n=new gt;n.name="bangladesh_police_checkpost";const i=(e*.5+1.8)*t,o=this.createTrafficPoliceOfficer();o.position.set(i,0,0),o.rotation.y=t>0?Math.PI*.88:Math.PI*.12,n.add(o);const a=(e*.5+3.2)*t,r=new gt;r.position.set(a,0,1.8);const c=new g(new ot(.32,.38,.55,8),this.concreteMat);c.position.y=.275,r.add(c);const h=new g(new ot(.07,.1,4.5,8),this.stageTrussMat);h.position.y=2.45,r.add(h);const d=new ot(.04,.04,1.6,6);d.rotateZ(t>0?-Math.PI/3:Math.PI/3);const f=new g(d,this.stageTrussMat);f.position.set(t>0?-.65:.65,4.8,0),r.add(f);const l=new g(new O(.35,.12,.6),this.stageTrussMat);l.position.set(t>0?-1.3:1.3,4.95,0),r.add(l);const u=new g(new qt(.3,.52),new de({color:16776171}));u.rotateX(Math.PI/2),u.position.set(t>0?-1.3:1.3,4.88,0),r.add(u);const _=new g(new O(.95,.06,.06),this.stageTrussMat);_.position.set(0,4.45,0),r.add(_);const v=new g(new ot(.08,.08,.18,8),this.strobeRedMat);v.position.set(-.35,4.56,0),r.add(v);const m=new g(new ot(.08,.08,.18,8),this.strobeBlueMat);m.position.set(.35,4.56,0),r.add(m);const p=new Wn(3900150,1.2,10);p.position.set(0,4.4,0),r.add(p),this.policeStrobes.push({red:v,blue:m,light:p,seed:Math.random()*10});const w=new g(new O(.08,1.25,2),this.policeSignMat);w.position.set(t>0?-.25:.25,2.35,0),w.rotation.y=t>0?-Math.PI/2:Math.PI/2,r.add(w),[-.4,.4].forEach(I=>{const B=new g(new O(.24,.06,.18),this.stageTrussMat);B.position.set(0,2.35+I,0),r.add(B)}),n.add(r);const M=(e*.5+1.2)*t,y=new gt;y.position.set(M,0,-3.2),[-1,1].forEach(I=>{const B=new g(new ot(.03,.03,1.05,6),this.stageTrussMat);B.position.set(0,.52,I),y.add(B);const S=new g(new O(.4,.04,.08),this.stageTrussMat);S.position.set(0,.02,I),y.add(S)});const P=new g(new O(.06,.38,2.2),this.policeBarricadeMat);P.position.set(0,.72,0),y.add(P);const L=new g(new O(.05,.22,2.2),this.policeBarricadeMat);return L.position.set(0,.34,0),y.add(L),n.add(y),[-1.4,1.4].forEach(I=>{const B=new gt;B.position.set((e*.5+.6)*t,0,-1.8+I);const S=new g(new O(.36,.03,.36),this.marigoldOrangeMat);S.position.y=.015,B.add(S);const x=new g(new pe(.14,.62,8),this.marigoldOrangeMat);x.position.y=.32,B.add(x);const T=new g(new ot(.085,.105,.15,8),this.policeSilverMat);T.position.y=.32,B.add(T),n.add(B)}),n}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}else if(e.type==="smoker"){if(e.head){const n=Math.sin(t*1.8+e.seed)*.04;e.head.rotation.x=-.12+Math.max(0,n)}}else e.type==="dingi"&&(e.mesh.position.y=e.startY+Math.sin(t*2.2+e.seed)*.035,e.mesh.rotation.z=Math.sin(t*1.8+e.seed)*.04,e.mesh.rotation.x=Math.cos(t*1.4+e.seed)*.025)}),this.smokeEmitters.forEach(e=>{const n=e.userData&&e.userData.type==="cigarette",i=e.userData&&e.userData.maxH||(n?.5:1.4),o=e.userData&&e.userData.spd||(n?.007:.015),a=e.userData&&e.userData.drift||(n?.004:.005);if(e.children.forEach((r,c)=>{r.position.y+=o,r.position.x+=Math.sin(t*3+c)*a,r.position.z+=Math.cos(t*2.6+c)*(a*.6),r.position.y>i&&(r.position.y=0,r.position.x=0,r.position.z=0)}),e.userData&&e.userData.light){const r=e.userData.seed||0;e.userData.light.intensity=.85+Math.sin(t*7.5+r)*.35}}),this.policeStrobes.forEach(e=>{const n=Math.sin(t*12+e.seed);e.red&&e.blue&&(e.red.material.emissiveIntensity=n>0?2.5:.2,e.blue.material.emissiveIntensity=n<=0?2.5:.2),e.light&&(e.light.color.setHex(n>0?15680580:3900150),e.light.intensity=.8+Math.abs(n)*.8)})}}class Fp{constructor(t){this.scene=t,this.segments=[],this.segmentLength=Qt.ROAD_SEGMENT_LENGTH,this.segmentCount=Qt.ROAD_SEGMENT_COUNT,this.roadWidth=Qt.ROAD_WIDTH,this.props=new Np,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let d=0;d<i.length;d+=4){const f=(Math.random()-.5)*12;i[d]=Math.min(255,Math.max(0,i[d]+f)),i[d+1]=Math.min(255,Math.max(0,i[d+1]+f)),i[d+2]=Math.min(255,Math.max(0,i[d+2]+f))}e.putImageData(n,0,0);const o=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",o.forEach(d=>{e.fillRect(d-50,0,36,t.height),e.fillRect(d+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const a=new ie(t);a.wrapS=Me,a.wrapT=Me,a.repeat.set(1,1),a.anisotropy=8,this.roadMaterial=new F({map:a,roughness:.82,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});const r=document.createElement("canvas");r.width=512,r.height=512;const c=r.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let d=0;d<512;d+=24)c.beginPath(),c.moveTo(0,d),c.lineTo(512,d),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const h=new ie(r);h.wrapS=Me,h.wrapT=Me,h.repeat.set(4,8),this.paddyFieldMaterial=new F({map:h,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new F({color:7032635,roughness:.95}),this.culvertRailingMaterial=new F({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new gt;n.position.z=t;const i=e%4===3,o=new qt(this.roadWidth,this.segmentLength);o.rotateX(-Math.PI/2);const a=new g(o,this.roadMaterial);if(a.position.y=i?.003:0,a.receiveShadow=!0,n.add(a),i){[-1,1].forEach(d=>{[-1,1].forEach(f=>{const l=new qt(3.5,6);l.rotateX(-Math.PI/2);const u=new g(l,this.dirtVergeMaterial);u.position.set((this.roadWidth*.5+3.5*.5)*d,-.01,f*27),n.add(u);const _=new qt(60,6);_.rotateX(-Math.PI/2);const v=new g(_,this.paddyFieldMaterial);v.position.set((this.roadWidth*.5+3.5+30)*d,-.05,f*27),n.add(v)})});const h=this.props.createBangladeshiRiverBridge(this.roadWidth,this.segmentLength);n.add(h)}else{[-1,1].forEach(h=>{const d=new qt(3.5,this.segmentLength);d.rotateX(-Math.PI/2);const f=new g(d,this.dirtVergeMaterial);f.position.set((this.roadWidth*.5+3.5*.5)*h,-.01,0),f.receiveShadow=!0,n.add(f)});const c=160;[-1,1].forEach(h=>{const d=new qt(c,this.segmentLength);d.rotateX(-Math.PI/2);const f=new g(d,this.paddyFieldMaterial),l=(this.roadWidth*.5+3.5+c*.5)*h;f.position.set(l,-.05,0),f.receiveShadow=!0,n.add(f)})}return this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=e%4===3,o=!i&&e%5===1,a=!i&&(e%5===0||e%5===1||e%5===2),r=n.createElectricPole();r.position.set(this.roadWidth*.5+2.4,0,0),t.add(r);const c=[new N(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new N(this.roadWidth*.5+2.4,7.1,0),new N(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],h=new Cn(c),d=new vn(h,8,.02,4,!1),f=new de({color:2040865}),l=new g(d,f);if(t.add(l),!i){const u=a?1:e%2===0?-1:1,_=e%3===0?"white":e%3===1?"brown":"black",v=n.createCow(_),m=(this.roadWidth*.5+2.8+Math.random()*1.5)*u,p=6+Math.random()*14;if(v.position.set(m,0,p),v.rotation.y=u>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(v),e%2===1){const w=n.createCow("brown");w.scale.set(.75,.75,.75),w.position.set(m+(u>0?3:-3),0,p+3.5),w.rotation.y=v.rotation.y+.5,t.add(w)}}if(!i&&!a&&e%16===8){const _=n.createPuthiaTemple(-1);_.position.set(0,0,-6),t.add(_)}if(e%3===1){const _=n.createTeaStall();_.position.set((this.roadWidth*.5+5.8)*1,0,12),_.rotation.y=-Math.PI/2,t.add(_);const v=n.createCoconutTree();v.position.set((this.roadWidth*.5+9)*1,0,16),t.add(v)}if(e%3===2&&!a){const _=n.createPond(14,22);_.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(_);for(let v=0;v<3;v++){const m=n.createBananaTree();m.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+v*6),t.add(m)}}if(!i&&!a){const u=e%2===0?1:-1,_=n.createCoconutTree();_.position.set((this.roadWidth*.5+7.5+Math.random()*5)*u,0,-22),t.add(_);const v=n.createBambooGrove();v.position.set((this.roadWidth*.5+9+Math.random()*6)*-u,0,18),t.add(v);const m=n.createBananaTree();m.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*u,0,4),t.add(m)}else i&&[-1,1].forEach(u=>{const _=n.createCoconutTree();_.position.set(this.roadWidth*.5+9,0,u*26),t.add(_);const v=n.createBambooGrove();v.position.set(-this.roadWidth*.5-10,0,u*26),t.add(v)});if(!i){const u=a||e%2===0?1:-1,_=n.createJatriChawni(u),v=(this.roadWidth*.5+3.4)*u,m=e===0?-14:-18;_.position.set(v,0,m),_.rotation.y=u>0?Math.PI*.5+.32:-Math.PI*.5-.32,t.add(_)}if(!i&&e%3===0&&!a){const _=n.createUddanOpenStageWithTong(1);_.position.set(0,0,0),t.add(_)}if(e%4===1||e%4===2){const u=e%4===2||a?1:-1,_=n.createHighwayCafe(u),v=(this.roadWidth*.5+5.6)*u,m=e%4===2?14:12;_.position.set(v,0,m),_.rotation.y=u>0?Math.PI*.5+.28:-Math.PI*.5-.28,t.add(_);const p=u,w=n.createSmokingGuysGroup(p),M=(this.roadWidth*.5+2.5)*p,y=m-6;w.position.set(M,0,y),w.rotation.y=p>0?-.4:.4,t.add(w)}else if(e%4===0&&e%3!==0&&!i){const _=n.createHighwayBar(1),v=(this.roadWidth*.5+5.6)*1,m=12;_.position.set(v,0,m),_.rotation.y=Math.PI*.5+.28,t.add(_);const p=1,w=n.createSmokingGuysGroup(p),M=(this.roadWidth*.5+2.5)*p,y=m-6;w.position.set(M,0,y),w.rotation.y=-.4,t.add(w)}if(o){const _=n.createUIUCampus(-1);_.position.set(0,0,0),t.add(_)}if(!i&&e%4===2){const u=n.createHighwaySignGantry(this.roadWidth);u.position.set(0,0,-20),t.add(u)}if(!i&&e%4===2){const _=n.createPoliceCheckpost(1,this.roadWidth);_.position.set(0,0,-8),t.add(_)}}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const o=this.segments[i];if(o.group.position.z>n){let a=0;for(let r=0;r<this.segments.length;r++)this.segments[r].group.position.z<a&&(a=this.segments[r].group.position.z);o.group.position.z=a-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class Op{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new Wo(11722715,.0038),this.scene.background=new le(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(h,d,f)=>{e.beginPath(),e.arc(h,d,f,0,Math.PI*2),e.arc(h+f*.7,d-f*.2,f*.8,0,Math.PI*2),e.arc(h-f*.7,d-f*.1,f*.7,0,Math.PI*2),e.arc(h+f*1.3,d+f*.1,f*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const o=e.createRadialGradient(256,380,15,256,380,120);o.addColorStop(0,"rgba(255, 255, 240, 1.0)"),o.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),o.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),o.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=o,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const a=new ie(t),r=new Ht(480,32,16),c=new de({map:a,side:He});this.skyDome=new g(r,c),this.scene.add(this.skyDome)}initLighting(){const t=ei();this.hemiLight=new vp(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new Ep(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0;const e=t?1024:2048;this.dirLight.shadow.mapSize.width=e,this.dirLight.shadow.mapSize.height=e,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=t?120:160,this.dirLight.shadow.camera.left=-16,this.dirLight.shadow.camera.right=16,this.dirLight.shadow.camera.top=22,this.dirLight.shadow.camera.bottom=-22,this.dirLight.shadow.bias=-6e-4,this.dirLight.shadow.normalBias=.02,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new F({color:1793568,roughness:.9,flatShading:!0}),e=new gt,n=24;for(let i=0;i<n;i++){const o=4.5+Math.random()*3.5,a=3+Math.random()*2,r=new pe(a,o,6),c=new g(r,t),h=150+Math.random()*25,d=-i*22;c.position.set(h,o*.5-.5,d),c.rotation.y=Math.random()*Math.PI,e.add(c)}this.scene.add(e),this.treeLines.push(e)}initFlyingBirds(){this.birdsGroup=new gt;const t=new de({color:16777215,side:Te}),e=8;for(let n=0;n<e;n++){const i=new gt,o=new qt(.8,.35);o.translate(-.4,0,0);const a=new g(o,t);i.add(a);const r=new qt(.8,.35);r.translate(.4,0,0);const c=new g(r,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:a,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class Gp{constructor(t="sedan"){this.type=t,this.group=new gt,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new yn,this.collisionSize=new N(1.8,1.4,4.5),this._boxCenter=new N,this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new F({color:t,metalness:.5,roughness:.35}),darkTrim:new F({color:1974308,roughness:.7}),wood:new F({color:8736014,roughness:.9}),glass:new Jo({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new F({color:14671839,metalness:.9,roughness:.2}),headlight:new de({color:16777215}),taillight:new F({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new F({color:1973792,metalness:.1,roughness:.85}),rim:new F({color:12131356,metalness:.5,roughness:.4}),cowFawn:new F({color:9262372,roughness:.7}),cowWhite:new F({color:16119280,roughness:.6}),cowBlack:new F({color:2236962,roughness:.7}),horn:new F({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new O(2,.4,6.2),o=new g(i,n.darkTrim);o.position.set(0,.6,0),this.group.add(o);const a=new O(2.3,.4,.25),r=new g(a,n.darkTrim);r.position.set(0,.6,-3.15),this.group.add(r);const c=new O(1.8,.9,1.5),h=new g(c,n.body);h.position.set(0,1.25,-2.2),this.group.add(h);const d=new O(2.1,1.5,1.5),f=new g(d,n.body);f.position.set(0,1.8,-.7),this.group.add(f);const l=new qt(1.85,.7),u=new g(l,n.glass);u.position.set(0,1.95,-1.46),this.group.add(u),[-.7,.7].forEach(y=>{const P=new g(new O(.24,.2,.05),n.headlight);P.position.set(y,1.15,-3.18),this.group.add(P)});const _=new O(2.25,.12,3.6),v=new g(_,n.wood);v.position.set(0,1.05,1.5),this.group.add(v),[-1.12,1.12].forEach(y=>{const P=new O(.08,1.3,3.6),L=new g(P,n.wood);L.position.set(y,1.7,1.5),this.group.add(L)});const m=new O(2.25,1.2,.08),p=new g(m,n.wood);p.position.set(0,1.65,3.3),this.group.add(p),[-.85,.85].forEach(y=>{const P=new g(new O(.28,.16,.05),n.taillight);P.position.set(y,.75,3.32),this.group.add(P)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(y=>{const P=new gt;P.position.set(y.x,2.2,y.z);const L=new O(.42,.45,.6),I=new g(L,y.mat);P.add(I);const B=new O(.3,.25,.25),S=new g(B,n.darkTrim);S.position.set(0,-.08,.38),P.add(S),[-.18,.18].forEach(x=>{const T=new pe(.05,.28,6),G=new g(T,n.horn);G.position.set(x,.26,.05),G.rotation.z=x>0?-.35:.35,P.add(G)}),this.group.add(P)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(y=>{const P=this.createSimpleWheel(n,.5,.3);P.position.set(y.x,.5,y.z),this.group.add(P),this.wheels.push(P)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new O(2,.4,6.2),n=new g(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new O(2.1,1.6,1.8),o=new g(i,t.body);o.position.set(0,1.7,-1.8),this.group.add(o);const a=new O(2.3,2.1,3.8),r=new g(a,t.wood);r.position.set(0,1.85,1.2),this.group.add(r),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new O(2.35,2.5,10.2),n=new g(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new qt(2.15,1.2),o=new g(i,t.glass);o.position.set(0,1.95,-5.12),this.group.add(o),[-1.19,1.19].forEach(r=>{const c=new qt(9,.9),h=new g(c,t.glass);h.position.set(r,1.9,.2),h.rotation.y=r>0?Math.PI/2:-Math.PI/2,this.group.add(h)}),[-.85,.85].forEach(r=>{const c=new g(new O(.3,.16,.05),t.headlight);c.position.set(r,.75,-5.12),this.group.add(c);const h=new g(new O(.24,.35,.05),t.taillight);h.position.set(r,1.3,5.12),this.group.add(h)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(r=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(r.x,.48,r.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new O(1.88,.4,4.65),o=new g(i,n.darkTrim);o.position.set(0,.42,0),this.group.add(o);const a=new O(1.84,.6,4.6),r=new g(a,n.body);r.position.set(0,.78,0),this.group.add(r);const c=new O(1.58,.65,2.9),h=new g(c,n.body);h.position.set(0,1.3,.2),this.group.add(h),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new O(1.76,.32,4.5),o=new g(i,n.darkTrim);o.position.set(0,.32,0),this.group.add(o);const a=new O(1.72,.44,4.4),r=new g(a,n.body);r.position.set(0,.58,0),this.group.add(r);const c=new O(1.44,.46,2.2),h=new g(c,n.body);h.position.set(0,.92,-.05),this.group.add(h),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,o,a){[-e,e].forEach(r=>{const c=new O(.3,.1,.05),h=new g(c,t.headlight);h.position.set(r,i,n),this.group.add(h)}),[-e,e].forEach(r=>{const c=new O(.32,.12,.05),h=new g(c,t.taillight);h.position.set(r,a,o),this.group.add(h)})}addStandardWheels(t,e,n,i,o){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(r=>{const c=this.createSimpleWheel(t,o,.24);c.position.set(r.x,r.y,r.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new gt,o=new ot(e,e,n,18);o.rotateZ(Math.PI/2);const a=new g(o,t.tire);i.add(a);const r=new ot(e*.7,e*.7,n+.02,14);r.rotateZ(Math.PI/2);const c=new g(r,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=Qt.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<Qt.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=Qt.LANES[n];if(!t.some(a=>{if(a===this||!a.active)return!1;const r=Math.abs(a.group.position.z-this.group.position.z),c=Math.abs(a.group.position.x-i);return r<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const o=this.targetX-this.group.position.x;Math.abs(o)>.04?this.group.position.x+=Math.sign(o)*Math.min(Math.abs(o),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(o=>{o.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}}class Bp{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"],n=ei()?14:25;for(let i=0;i<n;i++){const o=t[i%t.length],a=new Gp(o);a.despawn(),this.pool.push(a),this.scene.add(a.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,o){const a=t.group.position.z,r=t.group.position.x,c=Math.min(1,n/4500),h=Ui.lerp(1.3,.8,c),d=Ui.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=Ui.lerp(h,d,Math.random()),this.trySpawnTraffic(a,c));for(let f=this.activeVehicles.length-1;f>=0;f--){const l=this.activeVehicles[f];if(l.update(e,i),l.group.position.z>a+Qt.TRAFFIC.DESPAWN_DISTANCE){l.despawn(),this.activeVehicles.splice(f,1);continue}if(!l.hasBeenOvertaken){const u=Math.abs(l.group.position.z-a),_=Math.abs(l.group.position.x-r);u<Qt.SCORING.NEAR_MISS_DIST_Z&&_<Qt.SCORING.NEAR_MISS_DIST_X&&_>.5&&e>l.speed+12?(l.hasBeenOvertaken=!0,o&&o(l)):a<l.group.position.z-4&&(l.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-Qt.TRAFFIC.SPAWN_DISTANCE,i=34,o=new Set;this.activeVehicles.forEach(_=>{Math.abs(_.group.position.z-n)<i&&o.add(_.lane)});const a=[0,1,2].filter(_=>!o.has(_));if(a.length===0||a.length===1&&o.size>=2)return;const r=a[Math.floor(Math.random()*a.length)];let c="cow_truck";const h=Math.random();r===0?c=h>.45?"cow_truck":"truck":r===1?c=h>.5?"bus":h>.25?"cow_truck":"suv":c=h>.45?"bus":"sedan";const d=this.getInactiveVehicle(c);if(!d)return;const f=Qt.TRAFFIC.SPEEDS[c]||[65,85],l=e*35,u=Ui.lerp(f[0],f[1],Math.random())+l;if(d.spawn(r,n,u),this.activeVehicles.push(d),e>.5&&Math.random()<.35&&a.length>=2){const _=a.filter(v=>v!==r);if(_.length>0){const v=_[Math.floor(Math.random()*_.length)],m=Math.random()>.5?"cow_truck":"bus",p=this.getInactiveVehicle(m);if(p){const w=n-(28+Math.random()*20),M=Qt.TRAFFIC.SPEEDS[m]||[65,80],y=Ui.lerp(M[0],M[1],Math.random())+l;p.spawn(v,w,y),this.activeVehicles.push(p)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const o=this.activeVehicles[i],a=e-o.group.position.z,r=Math.abs(o.group.position.x-n);if(a>4&&a<65&&r<2.4&&!o.isYielding){o.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class kp{constructor(t){this.scene=t,this.isMobile=ei(),this.particles=[],this.poolSize=this.isMobile?70:180,this._smokeThrottle=!1,this.smokeMat=new de({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new de({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new F({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new O(.14,.14,.14),n=new g(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new N,rotVel:new N,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){if(this.isMobile&&(this._smokeThrottle=!this._smokeThrottle,this._smokeThrottle))return;const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){const e=this.isMobile?18:35,n=this.isMobile?10:20,i=this.isMobile?14:25;for(let o=0;o<e;o++){const a=this.getFreeParticle();if(!a)break;a.active=!0,a.type="spark",a.mesh.material=this.sparkMat,a.mesh.visible=!0,a.mesh.scale.set(.12,.12,.12),a.mesh.position.copy(t);const r=Math.random()*Math.PI*2,c=6+Math.random()*14;a.vel.set(Math.cos(r)*c,3+Math.random()*10,Math.sin(r)*c),a.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),a.life=0,a.maxLife=.7+Math.random()*.5,a.scaleSpeed=-.5}for(let o=0;o<n;o++){const a=this.getFreeParticle();if(!a)break;a.active=!0,a.type="debris",a.mesh.material=this.debrisMat,a.mesh.visible=!0,a.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),a.mesh.position.copy(t),a.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),a.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),a.life=0,a.maxLife=1.2,a.scaleSpeed=0}for(let o=0;o<i;o++){const a=this.getFreeParticle();if(!a)break;a.active=!0,a.type="smoke",a.mesh.material=this.smokeMat,a.mesh.visible=!0,a.mesh.scale.set(.8,.8,.8),a.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),a.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),a.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),a.life=0,a.maxLife=1.4,a.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class zp{constructor(t){this.scene=t;const e=ei();this.linesCount=e?25:60,this.group=new gt;const n=new fc({color:10083839,transparent:!0,opacity:0});this.lineMat=n,this.lines=[];for(let i=0;i<this.linesCount;i++){const o=[new N(0,0,0),new N(0,0,6+Math.random()*8)],a=new Fe().setFromPoints(o),r=new H0(a,n);this.resetLinePos(r),this.group.add(r),this.lines.push(r)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const o=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=o*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const a=t.group.position.z,r=t.group.position.x;this.group.position.set(r,0,a);const c=e/60*i*50;this.lines.forEach(h=>{h.position.z+=c,h.position.z>5&&this.resetLinePos(h)})}}class Vp{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this._lastScore=-1,this._lastDistKm="",this._lastSpeed=-1,this._lastNitro=-1,this._lastBoosting=null,this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),o=document.getElementById("btn-gameover-restart");[i,o].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const a=document.getElementById("btn-pause-menu"),r=document.getElementById("btn-gameover-menu");[a,r].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(l=>{l.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),h=document.getElementById("btn-how-to-play"),d=document.getElementById("btn-modal-close");h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),d&&c&&d.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")});const f=document.querySelectorAll(".veh-btn");f.forEach(l=>{l.addEventListener("click",()=>{f.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(l.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(l=>{l.addEventListener("click",u=>{u.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),o=document.getElementById("btn-touch-nitro");document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(r=>{r.addEventListener("contextmenu",c=>c.preventDefault())});const a=(r,c,h=null)=>{if(!r)return;const d=new Set,f=(u,_)=>{_&&_.cancelable&&_.preventDefault(),_&&_.stopPropagation(),document.body.classList.add("touch-active");const v=d.size===0;d.add(u),r.classList.add("active"),v&&(c(!0),h&&h())},l=(u,_)=>{_&&_.cancelable&&_.preventDefault(),_&&_.stopPropagation(),d.has(u)&&(d.delete(u),d.size===0&&(r.classList.remove("active"),c(!1)))};window.PointerEvent?(r.addEventListener("pointerdown",u=>{f(u.pointerId,u);try{r.setPointerCapture&&r.setPointerCapture(u.pointerId)}catch{}},{passive:!1}),r.addEventListener("pointerup",u=>{try{r.releasePointerCapture&&r.releasePointerCapture(u.pointerId)}catch{}l(u.pointerId,u)},{passive:!1}),r.addEventListener("pointercancel",u=>{try{r.releasePointerCapture&&r.releasePointerCapture(u.pointerId)}catch{}l(u.pointerId,u)},{passive:!1}),r.addEventListener("lostpointercapture",u=>{l(u.pointerId,u)},{passive:!1}),window.addEventListener("pointerup",u=>{l(u.pointerId,u)},{passive:!0}),window.addEventListener("pointercancel",u=>{l(u.pointerId,u)},{passive:!0})):(r.addEventListener("touchstart",u=>{u.cancelable&&u.preventDefault(),u.stopPropagation();for(let _=0;_<u.changedTouches.length;_++)f(u.changedTouches[_].identifier,u)},{passive:!1}),r.addEventListener("touchend",u=>{u.cancelable&&u.preventDefault(),u.stopPropagation();for(let _=0;_<u.changedTouches.length;_++)l(u.changedTouches[_].identifier,u)},{passive:!1}),r.addEventListener("touchcancel",u=>{for(let _=0;_<u.changedTouches.length;_++)l(u.changedTouches[_].identifier,u)},{passive:!1}))};t&&a(t,r=>{this.onSteerLeft&&this.onSteerLeft(r)}),e&&a(e,r=>{this.onSteerRight&&this.onSteerRight(r)}),n&&a(n,r=>{this.onBrake&&this.onBrake(r)},()=>this.soundManager.playAirBrake()),i&&a(i,r=>{this.onAccelerate&&this.onAccelerate(r)}),o&&a(o,r=>{this.onNitro&&this.onNitro(r)}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===_e.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case _e.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case _e.PLAYING:this.hudLayer.classList.remove("hidden");break;case _e.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case _e.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){const e=Math.floor(t.score);this._lastScore!==e&&this.scoreVal&&(this._lastScore=e,this.scoreVal.textContent=e.toLocaleString());const n=`${(t.distanceMeters/1e3).toFixed(2)} km`;this._lastDistKm!==n&&this.distVal&&(this._lastDistKm=n,this.distVal.textContent=n);const i=Math.round(t.speedKmh);this._lastSpeed!==i&&this.speedVal&&(this._lastSpeed=i,this.speedVal.textContent=i);const o=Math.round(t.nitro);this._lastNitro!==o&&this.nitroBar&&(this._lastNitro=o,this.nitroBar.style.width=`${o}%`),this._lastBoosting!==t.isBoosting&&this.nitroBar&&(this._lastBoosting=t.isBoosting,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting"))}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class Hp{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new Ap,this.inputManager=new Pp,this.soundManager=new Lp,this.uiManager=new Vp(this.soundManager),this.scene=new V0,this.camera=new We(Qt.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.isMobile=ei(),this.renderer=new uc({antialias:!this.isMobile,powerPreference:"high-performance",precision:this.isMobile?"mediump":"highp",stencil:!1,depth:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight);const t=this.isMobile?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.isMobile?Go:Ia,this.renderer.toneMapping=Ua,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new Op(this.scene),this.roadManager=new Fp(this.scene),this.vehicles={truck:new Ip,rickshaw:new Dp,cng:new Up},Object.values(this.vehicles).forEach(e=>{this.scene.add(e.group),e.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new Bp(this.scene),this.particleSystem=new kp(this.scene),this.speedLines=new zp(this.scene),this.cameraController=new Rp(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new Tp,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this._leftRearPos=new N,this._rightRearPos=new N,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(_e.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){const t=()=>{const n=window.innerWidth,i=window.innerHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i),this.isMobile=ei();const o=this.isMobile?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(o)};window.addEventListener("resize",t),window.addEventListener("orientationchange",()=>{setTimeout(t,120)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=n=>this.setVehicle(n);const e=()=>{this.gameState.state===_e.PLAYING?(this.gameState.state=_e.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(_e.PAUSED,this.gameState)):this.gameState.state===_e.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=e,this.inputManager.onPauseToggle=e,this.inputManager.onRestart=()=>{(this.gameState.state===_e.GAMEOVER||this.gameState.state===_e.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=n=>this.inputManager.setSteerLeft(n),this.uiManager.onSteerRight=n=>this.inputManager.setSteerRight(n),this.uiManager.onAccelerate=n=>this.inputManager.setAccelerate(n),this.uiManager.onBrake=n=>this.inputManager.setBrake(n),this.uiManager.onNitro=n=>this.inputManager.setNitro(n)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(_e.PLAYING,this.gameState)}resumeGame(){this.gameState.state===_e.PAUSED&&(this.gameState.state=_e.PLAYING,this.uiManager.setScreen(_e.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=_e.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(_e.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(_e.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===_e.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===_e.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const o=this.inputManager.keys.brake;o&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=o,this.gameState.update(e,this.inputManager);const a=this.gameState.speedKmh*1e3/3600;this.playerVehicle.group.position.z-=a*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,o,this.gameState.isBoosting,e),o&&this.gameState.speedKmh>50&&(this._leftRearPos.copy(this.playerVehicle.group.position),this._leftRearPos.x-=.85,this._leftRearPos.z+=1.6,this._rightRearPos.copy(this.playerVehicle.group.position),this._rightRearPos.x+=.85,this._rightRearPos.z+=1.6,this.particleSystem.emitTireSmoke(this._leftRearPos),this.particleSystem.emitTireSmoke(this._rightRearPos)),this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const h=this.gameState.addNearMiss();this.soundManager.playNearMiss(h.combo),this.uiManager.showNearMiss(h.bonus,h.combo)});const r=this.trafficManager.checkCollision(this.playerVehicle);r&&this.onCrash(r),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,o,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===_e.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Hp});
//# sourceMappingURL=index-ClAwhMtt.js.map
