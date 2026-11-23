(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="160",bc=0,er=1,Ec=2,Bo=1,Ia=2,Mn=3,Nn=0,ke=1,ye=2,In=0,bi=1,zi=2,nr=3,ir=4,Tc=5,qn=100,Ac=101,Pc=102,sr=103,or=104,Rc=200,Cc=201,Lc=202,Ic=203,Po=204,Ro=205,Dc=206,Uc=207,Nc=208,Fc=209,Oc=210,Gc=211,Bc=212,kc=213,zc=214,Vc=0,Hc=1,Wc=2,As=3,Xc=4,qc=5,Yc=6,Zc=7,Da=0,Kc=1,Jc=2,Dn=0,jc=1,$c=2,Qc=3,Ua=4,tl=5,el=6,Na=300,Ti=301,Ai=302,Co=303,Lo=304,Ns=306,pe=1e3,sn=1001,Io=1002,Be=1003,rr=1004,qs=1005,je=1006,nl=1007,Zi=1008,Un=1009,il=1010,sl=1011,ko=1012,Fa=1013,Cn=1014,Ln=1015,Ki=1016,Oa=1017,Ga=1018,Zn=1020,ol=1021,on=1023,rl=1024,al=1025,Kn=1026,Pi=1027,cl=1028,Ba=1029,ll=1030,ka=1031,za=1033,Ys=33776,Zs=33777,Ks=33778,Js=33779,ar=35840,cr=35841,lr=35842,hr=35843,Va=36196,dr=37492,ur=37496,fr=37808,pr=37809,mr=37810,gr=37811,Mr=37812,_r=37813,wr=37814,vr=37815,xr=37816,Sr=37817,yr=37818,br=37819,Er=37820,Tr=37821,js=36492,Ar=36494,Pr=36495,hl=36283,Rr=36284,Cr=36285,Lr=36286,Ha=3e3,Jn=3001,dl=3200,ul=3201,Wa=0,fl=1,$e="",Ie="srgb",vn="srgb-linear",zo="display-p3",Fs="display-p3-linear",Ps="linear",me="srgb",Rs="rec709",Cs="p3",si=7680,Ir=519,pl=512,ml=513,gl=514,Xa=515,Ml=516,_l=517,wl=518,vl=519,Dr=35044,Ur="300 es",Do=1035,wn=2e3,Ls=2001;class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Nr=1234567;const Vi=Math.PI/180,Ri=180/Math.PI;function ni(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[s&255]+Ne[s>>8&255]+Ne[s>>16&255]+Ne[s>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function Le(s,t,e){return Math.max(t,Math.min(e,s))}function Vo(s,t){return(s%t+t)%t}function xl(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Sl(s,t,e){return s!==t?(e-s)/(t-s):0}function Hi(s,t,e){return(1-e)*s+e*t}function yl(s,t,e,n){return Hi(s,t,1-Math.exp(-e*n))}function bl(s,t=1){return t-Math.abs(Vo(s,t*2)-t)}function El(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function Tl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Al(s,t){return s+Math.floor(Math.random()*(t-s+1))}function Pl(s,t){return s+Math.random()*(t-s)}function Rl(s){return s*(.5-Math.random())}function Cl(s){s!==void 0&&(Nr=s);let t=Nr+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ll(s){return s*Vi}function Il(s){return s*Ri}function Uo(s){return(s&s-1)===0&&s!==0}function Dl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Is(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Ul(s,t,e,n,i){const o=Math.cos,a=Math.sin,r=o(e/2),c=a(e/2),h=o((t+n)/2),d=a((t+n)/2),f=o((t-n)/2),l=a((t-n)/2),u=o((n-t)/2),M=a((n-t)/2);switch(i){case"XYX":s.set(r*d,c*f,c*l,r*h);break;case"YZY":s.set(c*l,r*d,c*f,r*h);break;case"ZXZ":s.set(c*f,c*l,r*d,r*h);break;case"XZX":s.set(r*d,c*M,c*u,r*h);break;case"YXY":s.set(c*u,r*d,c*M,r*h);break;case"ZYZ":s.set(c*M,c*u,r*d,r*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Oe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ni={DEG2RAD:Vi,RAD2DEG:Ri,generateUUID:ni,clamp:Le,euclideanModulo:Vo,mapLinear:xl,inverseLerp:Sl,lerp:Hi,damp:yl,pingpong:bl,smoothstep:El,smootherstep:Tl,randInt:Al,randFloat:Pl,randFloatSpread:Rl,seededRandom:Cl,degToRad:Ll,radToDeg:Il,isPowerOfTwo:Uo,ceilPowerOfTwo:Dl,floorPowerOfTwo:Is,setQuaternionFromProperEuler:Ul,normalize:Oe,denormalize:vi};class Bt{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*i+t.x,this.y=o*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ae{constructor(t,e,n,i,o,a,r,c,h){ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,h)}set(t,e,n,i,o,a,r,c,h){const d=this.elements;return d[0]=t,d[1]=i,d[2]=r,d[3]=e,d[4]=o,d[5]=c,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[3],c=n[6],h=n[1],d=n[4],f=n[7],l=n[2],u=n[5],M=n[8],v=i[0],g=i[3],p=i[6],w=i[1],_=i[4],y=i[7],P=i[2],C=i[5],L=i[8];return o[0]=a*v+r*w+c*P,o[3]=a*g+r*_+c*C,o[6]=a*p+r*y+c*L,o[1]=h*v+d*w+f*P,o[4]=h*g+d*_+f*C,o[7]=h*p+d*y+f*L,o[2]=l*v+u*w+M*P,o[5]=l*g+u*_+M*C,o[8]=l*p+u*y+M*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8];return e*a*d-e*r*h-n*o*d+n*r*c+i*o*h-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8],f=d*a-r*h,l=r*c-d*o,u=h*o-a*c,M=e*f+n*l+i*u;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/M;return t[0]=f*v,t[1]=(i*h-d*n)*v,t[2]=(r*n-i*a)*v,t[3]=l*v,t[4]=(d*e-i*c)*v,t[5]=(i*o-r*e)*v,t[6]=u*v,t[7]=(n*c-h*e)*v,t[8]=(a*e-n*o)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,a,r){const c=Math.cos(o),h=Math.sin(o);return this.set(n*c,n*h,-n*(c*a+h*r)+a+t,-i*h,i*c,-i*(-h*a+c*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply($s.makeScale(t,e)),this}rotate(t){return this.premultiply($s.makeRotation(-t)),this}translate(t,e){return this.premultiply($s.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $s=new ae;function qa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ds(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Nl(){const s=Ds("canvas");return s.style.display="block",s}const Fr={};function Wi(s){s in Fr||(Fr[s]=!0,console.warn(s))}const Or=new ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gr=new ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ts={[vn]:{transfer:Ps,primaries:Rs,toReference:s=>s,fromReference:s=>s},[Ie]:{transfer:me,primaries:Rs,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Fs]:{transfer:Ps,primaries:Cs,toReference:s=>s.applyMatrix3(Gr),fromReference:s=>s.applyMatrix3(Or)},[zo]:{transfer:me,primaries:Cs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Gr),fromReference:s=>s.applyMatrix3(Or).convertLinearToSRGB()}},Fl=new Set([vn,Fs]),ue={enabled:!0,_workingColorSpace:vn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Fl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=ts[t].toReference,i=ts[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return ts[s].primaries},getTransfer:function(s){return s===$e?Ps:ts[s].transfer}};function Ei(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let oi;class Ya{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{oi===void 0&&(oi=Ds("canvas")),oi.width=t.width,oi.height=t.height;const n=oi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=oi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ds("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=Ei(o[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ei(e[n]/255)*255):e[n]=Ei(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ol=0;class Za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=ni(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push(to(i[a].image)):o.push(to(i[a]))}else o=to(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function to(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ya.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gl=0;class He extends Li{constructor(t=He.DEFAULT_IMAGE,e=He.DEFAULT_MAPPING,n=sn,i=sn,o=je,a=Zi,r=on,c=Un,h=He.DEFAULT_ANISOTROPY,d=$e){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=ni(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=r,this.internalFormat=null,this.type=c,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Jn?Ie:$e),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Na)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pe:t.x=t.x-Math.floor(t.x);break;case sn:t.x=t.x<0?0:1;break;case Io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pe:t.y=t.y-Math.floor(t.y);break;case sn:t.y=t.y<0?0:1;break;case Io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ie?Jn:Ha}set encoding(t){Wi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Jn?Ie:$e}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=Na;He.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,i=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*o,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const c=t.elements,h=c[0],d=c[4],f=c[8],l=c[1],u=c[5],M=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(d-l)<.01&&Math.abs(f-v)<.01&&Math.abs(M-g)<.01){if(Math.abs(d+l)<.1&&Math.abs(f+v)<.1&&Math.abs(M+g)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(h+1)/2,y=(u+1)/2,P=(p+1)/2,C=(d+l)/4,L=(f+v)/4,k=(M+g)/4;return _>y&&_>P?_<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(_),i=C/n,o=L/n):y>P?y<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(y),n=C/i,o=k/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=L/o,i=k/o),this.set(n,i,o,e),this}let w=Math.sqrt((g-M)*(g-M)+(f-v)*(f-v)+(l-d)*(l-d));return Math.abs(w)<.001&&(w=1),this.x=(g-M)/w,this.y=(f-v)/w,this.z=(l-d)/w,this.w=Math.acos((h+u+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bl extends Li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Wi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?Ie:$e),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new He(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Za(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $n extends Bl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ka extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kl extends He{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Be,this.minFilter=Be,this.wrapR=sn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,a,r){let c=n[i+0],h=n[i+1],d=n[i+2],f=n[i+3];const l=o[a+0],u=o[a+1],M=o[a+2],v=o[a+3];if(r===0){t[e+0]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f;return}if(r===1){t[e+0]=l,t[e+1]=u,t[e+2]=M,t[e+3]=v;return}if(f!==v||c!==l||h!==u||d!==M){let g=1-r;const p=c*l+h*u+d*M+f*v,w=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const P=Math.sqrt(_),C=Math.atan2(P,p*w);g=Math.sin(g*C)/P,r=Math.sin(r*C)/P}const y=r*w;if(c=c*g+l*y,h=h*g+u*y,d=d*g+M*y,f=f*g+v*y,g===1-r){const P=1/Math.sqrt(c*c+h*h+d*d+f*f);c*=P,h*=P,d*=P,f*=P}}t[e]=c,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,o,a){const r=n[i],c=n[i+1],h=n[i+2],d=n[i+3],f=o[a],l=o[a+1],u=o[a+2],M=o[a+3];return t[e]=r*M+d*f+c*u-h*l,t[e+1]=c*M+d*l+h*f-r*u,t[e+2]=h*M+d*u+r*l-c*f,t[e+3]=d*M-r*f-c*l-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,a=t._order,r=Math.cos,c=Math.sin,h=r(n/2),d=r(i/2),f=r(o/2),l=c(n/2),u=c(i/2),M=c(o/2);switch(a){case"XYZ":this._x=l*d*f+h*u*M,this._y=h*u*f-l*d*M,this._z=h*d*M+l*u*f,this._w=h*d*f-l*u*M;break;case"YXZ":this._x=l*d*f+h*u*M,this._y=h*u*f-l*d*M,this._z=h*d*M-l*u*f,this._w=h*d*f+l*u*M;break;case"ZXY":this._x=l*d*f-h*u*M,this._y=h*u*f+l*d*M,this._z=h*d*M+l*u*f,this._w=h*d*f-l*u*M;break;case"ZYX":this._x=l*d*f-h*u*M,this._y=h*u*f+l*d*M,this._z=h*d*M-l*u*f,this._w=h*d*f+l*u*M;break;case"YZX":this._x=l*d*f+h*u*M,this._y=h*u*f+l*d*M,this._z=h*d*M-l*u*f,this._w=h*d*f-l*u*M;break;case"XZY":this._x=l*d*f-h*u*M,this._y=h*u*f-l*d*M,this._z=h*d*M+l*u*f,this._w=h*d*f+l*u*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],a=e[1],r=e[5],c=e[9],h=e[2],d=e[6],f=e[10],l=n+r+f;if(l>0){const u=.5/Math.sqrt(l+1);this._w=.25/u,this._x=(d-c)*u,this._y=(o-h)*u,this._z=(a-i)*u}else if(n>r&&n>f){const u=2*Math.sqrt(1+n-r-f);this._w=(d-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(o+h)/u}else if(r>f){const u=2*Math.sqrt(1+r-n-f);this._w=(o-h)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+d)/u}else{const u=2*Math.sqrt(1+f-n-r);this._w=(a-i)/u,this._x=(o+h)/u,this._y=(c+d)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Le(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,a=t._w,r=e._x,c=e._y,h=e._z,d=e._w;return this._x=n*d+a*r+i*h-o*c,this._y=i*d+a*c+o*r-n*h,this._z=o*d+a*h+n*c-i*r,this._w=a*d-n*r-i*c-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const c=1-r*r;if(c<=Number.EPSILON){const u=1-e;return this._w=u*a+e*this._w,this._x=u*n+e*this._x,this._y=u*i+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}const h=Math.sqrt(c),d=Math.atan2(h,r),f=Math.sin((1-e)*d)/h,l=Math.sin(e*d)/h;return this._w=a*f+this._w*l,this._x=n*f+this._x*l,this._y=i*f+this._y*l,this._z=o*f+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(o),n*Math.cos(o),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Br.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Br.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,a=t.y,r=t.z,c=t.w,h=2*(a*i-r*n),d=2*(r*e-o*i),f=2*(o*n-a*e);return this.x=e+c*h+a*f-r*d,this.y=n+c*d+r*h-o*f,this.z=i+c*f+o*d-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,a=e.x,r=e.y,c=e.z;return this.x=i*c-o*r,this.y=o*a-n*c,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return eo.copy(this).projectOnVector(t),this.sub(eo)}reflect(t){return this.sub(eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eo=new F,Br=new Qi;class xn{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,Qe):Qe.fromBufferAttribute(o,a),Qe.applyMatrix4(t.matrixWorld),this.expandByPoint(Qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),es.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(t.matrixWorld),this.union(es)}const i=t.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qe),Qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Fi),ns.subVectors(this.max,Fi),ri.subVectors(t.a,Fi),ai.subVectors(t.b,Fi),ci.subVectors(t.c,Fi),yn.subVectors(ai,ri),bn.subVectors(ci,ai),kn.subVectors(ri,ci);let e=[0,-yn.z,yn.y,0,-bn.z,bn.y,0,-kn.z,kn.y,yn.z,0,-yn.x,bn.z,0,-bn.x,kn.z,0,-kn.x,-yn.y,yn.x,0,-bn.y,bn.x,0,-kn.y,kn.x,0];return!no(e,ri,ai,ci,ns)||(e=[1,0,0,0,1,0,0,0,1],!no(e,ri,ai,ci,ns))?!1:(is.crossVectors(yn,bn),e=[is.x,is.y,is.z],no(e,ri,ai,ci,ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new F,new F,new F,new F,new F,new F,new F,new F],Qe=new F,es=new xn,ri=new F,ai=new F,ci=new F,yn=new F,bn=new F,kn=new F,Fi=new F,ns=new F,is=new F,zn=new F;function no(s,t,e,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){zn.fromArray(s,o);const r=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),c=t.dot(zn),h=e.dot(zn),d=n.dot(zn);if(Math.max(-Math.max(c,h,d),Math.min(c,h,d))>r)return!1}return!0}const zl=new xn,Oi=new F,io=new F;class Os{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zl.setFromPoints(t).getCenter(n);let i=0;for(let o=0,a=t.length;o<a;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Oi.subVectors(t,this.center);const e=Oi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Oi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(io.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Oi.copy(t.center).add(io)),this.expandByPoint(Oi.copy(t.center).sub(io))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new F,so=new F,ss=new F,En=new F,oo=new F,os=new F,ro=new F;class Ja{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){so.copy(t).add(e).multiplyScalar(.5),ss.copy(e).sub(t).normalize(),En.copy(this.origin).sub(so);const o=t.distanceTo(e)*.5,a=-this.direction.dot(ss),r=En.dot(this.direction),c=-En.dot(ss),h=En.lengthSq(),d=Math.abs(1-a*a);let f,l,u,M;if(d>0)if(f=a*c-r,l=a*r-c,M=o*d,f>=0)if(l>=-M)if(l<=M){const v=1/d;f*=v,l*=v,u=f*(f+a*l+2*r)+l*(a*f+l+2*c)+h}else l=o,f=Math.max(0,-(a*l+r)),u=-f*f+l*(l+2*c)+h;else l=-o,f=Math.max(0,-(a*l+r)),u=-f*f+l*(l+2*c)+h;else l<=-M?(f=Math.max(0,-(-a*o+r)),l=f>0?-o:Math.min(Math.max(-o,-c),o),u=-f*f+l*(l+2*c)+h):l<=M?(f=0,l=Math.min(Math.max(-o,-c),o),u=l*(l+2*c)+h):(f=Math.max(0,-(a*o+r)),l=f>0?o:Math.min(Math.max(-o,-c),o),u=-f*f+l*(l+2*c)+h);else l=a>0?-o:o,f=Math.max(0,-(a*l+r)),u=-f*f+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(so).addScaledVector(ss,l),u}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,o=t.radius*t.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,c=n+a;return c<0?null:r<0?this.at(c,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,a,r,c;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,l=this.origin;return h>=0?(n=(t.min.x-l.x)*h,i=(t.max.x-l.x)*h):(n=(t.max.x-l.x)*h,i=(t.min.x-l.x)*h),d>=0?(o=(t.min.y-l.y)*d,a=(t.max.y-l.y)*d):(o=(t.max.y-l.y)*d,a=(t.min.y-l.y)*d),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),f>=0?(r=(t.min.z-l.z)*f,c=(t.max.z-l.z)*f):(r=(t.max.z-l.z)*f,c=(t.min.z-l.z)*f),n>c||r>i)||((r>n||n!==n)&&(n=r),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,o){oo.subVectors(e,t),os.subVectors(n,t),ro.crossVectors(oo,os);let a=this.direction.dot(ro),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;En.subVectors(this.origin,t);const c=r*this.direction.dot(os.crossVectors(En,os));if(c<0)return null;const h=r*this.direction.dot(oo.cross(En));if(h<0||c+h>a)return null;const d=-r*En.dot(ro);return d<0?null:this.at(d/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xe{constructor(t,e,n,i,o,a,r,c,h,d,f,l,u,M,v,g){xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,c,h,d,f,l,u,M,v,g)}set(t,e,n,i,o,a,r,c,h,d,f,l,u,M,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=o,p[5]=a,p[9]=r,p[13]=c,p[2]=h,p[6]=d,p[10]=f,p[14]=l,p[3]=u,p[7]=M,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/li.setFromMatrixColumn(t,0).length(),o=1/li.setFromMatrixColumn(t,1).length(),a=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),c=Math.cos(i),h=Math.sin(i),d=Math.cos(o),f=Math.sin(o);if(t.order==="XYZ"){const l=a*d,u=a*f,M=r*d,v=r*f;e[0]=c*d,e[4]=-c*f,e[8]=h,e[1]=u+M*h,e[5]=l-v*h,e[9]=-r*c,e[2]=v-l*h,e[6]=M+u*h,e[10]=a*c}else if(t.order==="YXZ"){const l=c*d,u=c*f,M=h*d,v=h*f;e[0]=l+v*r,e[4]=M*r-u,e[8]=a*h,e[1]=a*f,e[5]=a*d,e[9]=-r,e[2]=u*r-M,e[6]=v+l*r,e[10]=a*c}else if(t.order==="ZXY"){const l=c*d,u=c*f,M=h*d,v=h*f;e[0]=l-v*r,e[4]=-a*f,e[8]=M+u*r,e[1]=u+M*r,e[5]=a*d,e[9]=v-l*r,e[2]=-a*h,e[6]=r,e[10]=a*c}else if(t.order==="ZYX"){const l=a*d,u=a*f,M=r*d,v=r*f;e[0]=c*d,e[4]=M*h-u,e[8]=l*h+v,e[1]=c*f,e[5]=v*h+l,e[9]=u*h-M,e[2]=-h,e[6]=r*c,e[10]=a*c}else if(t.order==="YZX"){const l=a*c,u=a*h,M=r*c,v=r*h;e[0]=c*d,e[4]=v-l*f,e[8]=M*f+u,e[1]=f,e[5]=a*d,e[9]=-r*d,e[2]=-h*d,e[6]=u*f+M,e[10]=l-v*f}else if(t.order==="XZY"){const l=a*c,u=a*h,M=r*c,v=r*h;e[0]=c*d,e[4]=-f,e[8]=h*d,e[1]=l*f+v,e[5]=a*d,e[9]=u*f-M,e[2]=M*f-u,e[6]=r*d,e[10]=v*f+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vl,t,Hl)}lookAt(t,e,n){const i=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Tn.crossVectors(n,Ye),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Tn.crossVectors(n,Ye)),Tn.normalize(),rs.crossVectors(Ye,Tn),i[0]=Tn.x,i[4]=rs.x,i[8]=Ye.x,i[1]=Tn.y,i[5]=rs.y,i[9]=Ye.y,i[2]=Tn.z,i[6]=rs.z,i[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[4],c=n[8],h=n[12],d=n[1],f=n[5],l=n[9],u=n[13],M=n[2],v=n[6],g=n[10],p=n[14],w=n[3],_=n[7],y=n[11],P=n[15],C=i[0],L=i[4],k=i[8],S=i[12],x=i[1],T=i[5],G=i[9],tt=i[13],O=i[2],V=i[6],W=i[10],X=i[14],nt=i[3],J=i[7],K=i[11],q=i[15];return o[0]=a*C+r*x+c*O+h*nt,o[4]=a*L+r*T+c*V+h*J,o[8]=a*k+r*G+c*W+h*K,o[12]=a*S+r*tt+c*X+h*q,o[1]=d*C+f*x+l*O+u*nt,o[5]=d*L+f*T+l*V+u*J,o[9]=d*k+f*G+l*W+u*K,o[13]=d*S+f*tt+l*X+u*q,o[2]=M*C+v*x+g*O+p*nt,o[6]=M*L+v*T+g*V+p*J,o[10]=M*k+v*G+g*W+p*K,o[14]=M*S+v*tt+g*X+p*q,o[3]=w*C+_*x+y*O+P*nt,o[7]=w*L+_*T+y*V+P*J,o[11]=w*k+_*G+y*W+P*K,o[15]=w*S+_*tt+y*X+P*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],a=t[1],r=t[5],c=t[9],h=t[13],d=t[2],f=t[6],l=t[10],u=t[14],M=t[3],v=t[7],g=t[11],p=t[15];return M*(+o*c*f-i*h*f-o*r*l+n*h*l+i*r*u-n*c*u)+v*(+e*c*u-e*h*l+o*a*l-i*a*u+i*h*d-o*c*d)+g*(+e*h*f-e*r*u-o*a*f+n*a*u+o*r*d-n*h*d)+p*(-i*r*d-e*c*f+e*r*l+i*a*f-n*a*l+n*c*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],c=t[6],h=t[7],d=t[8],f=t[9],l=t[10],u=t[11],M=t[12],v=t[13],g=t[14],p=t[15],w=f*g*h-v*l*h+v*c*u-r*g*u-f*c*p+r*l*p,_=M*l*h-d*g*h-M*c*u+a*g*u+d*c*p-a*l*p,y=d*v*h-M*f*h+M*r*u-a*v*u-d*r*p+a*f*p,P=M*f*c-d*v*c-M*r*l+a*v*l+d*r*g-a*f*g,C=e*w+n*_+i*y+o*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=w*L,t[1]=(v*l*o-f*g*o-v*i*u+n*g*u+f*i*p-n*l*p)*L,t[2]=(r*g*o-v*c*o+v*i*h-n*g*h-r*i*p+n*c*p)*L,t[3]=(f*c*o-r*l*o-f*i*h+n*l*h+r*i*u-n*c*u)*L,t[4]=_*L,t[5]=(d*g*o-M*l*o+M*i*u-e*g*u-d*i*p+e*l*p)*L,t[6]=(M*c*o-a*g*o-M*i*h+e*g*h+a*i*p-e*c*p)*L,t[7]=(a*l*o-d*c*o+d*i*h-e*l*h-a*i*u+e*c*u)*L,t[8]=y*L,t[9]=(M*f*o-d*v*o-M*n*u+e*v*u+d*n*p-e*f*p)*L,t[10]=(a*v*o-M*r*o+M*n*h-e*v*h-a*n*p+e*r*p)*L,t[11]=(d*r*o-a*f*o-d*n*h+e*f*h+a*n*u-e*r*u)*L,t[12]=P*L,t[13]=(d*v*i-M*f*i+M*n*l-e*v*l-d*n*g+e*f*g)*L,t[14]=(M*r*i-a*v*i-M*n*c+e*v*c+a*n*g-e*r*g)*L,t[15]=(a*f*i-d*r*i+d*n*c-e*f*c-a*n*l+e*r*l)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,a=t.x,r=t.y,c=t.z,h=o*a,d=o*r;return this.set(h*a+n,h*r-i*c,h*c+i*r,0,h*r+i*c,d*r+n,d*c-i*a,0,h*c-i*r,d*c+i*a,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,a){return this.set(1,n,o,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,a=e._y,r=e._z,c=e._w,h=o+o,d=a+a,f=r+r,l=o*h,u=o*d,M=o*f,v=a*d,g=a*f,p=r*f,w=c*h,_=c*d,y=c*f,P=n.x,C=n.y,L=n.z;return i[0]=(1-(v+p))*P,i[1]=(u+y)*P,i[2]=(M-_)*P,i[3]=0,i[4]=(u-y)*C,i[5]=(1-(l+p))*C,i[6]=(g+w)*C,i[7]=0,i[8]=(M+_)*L,i[9]=(g-w)*L,i[10]=(1-(l+v))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=li.set(i[0],i[1],i[2]).length();const a=li.set(i[4],i[5],i[6]).length(),r=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],tn.copy(this);const h=1/o,d=1/a,f=1/r;return tn.elements[0]*=h,tn.elements[1]*=h,tn.elements[2]*=h,tn.elements[4]*=d,tn.elements[5]*=d,tn.elements[6]*=d,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,e.setFromRotationMatrix(tn),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,i,o,a,r=wn){const c=this.elements,h=2*o/(e-t),d=2*o/(n-i),f=(e+t)/(e-t),l=(n+i)/(n-i);let u,M;if(r===wn)u=-(a+o)/(a-o),M=-2*a*o/(a-o);else if(r===Ls)u=-a/(a-o),M=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,o,a,r=wn){const c=this.elements,h=1/(e-t),d=1/(n-i),f=1/(a-o),l=(e+t)*h,u=(n+i)*d;let M,v;if(r===wn)M=(a+o)*f,v=-2*f;else if(r===Ls)M=o*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=v,c[14]=-M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const li=new F,tn=new xe,Vl=new F(0,0,0),Hl=new F(1,1,1),Tn=new F,rs=new F,Ye=new F,kr=new xe,zr=new Qi;class Gs{constructor(t=0,e=0,n=0,i=Gs.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],a=i[4],r=i[8],c=i[1],h=i[5],d=i[9],f=i[2],l=i[6],u=i[10];switch(e){case"XYZ":this._y=Math.asin(Le(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,u),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Le(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,u),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Le(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Le(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(l,u),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Le(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(r,u));break;case"XZY":this._z=Math.asin(-Le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-d,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return zr.setFromEuler(this),this.setFromQuaternion(zr,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gs.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wl=0;const Vr=new F,hi=new Qi,pn=new xe,as=new F,Gi=new F,Xl=new F,ql=new Qi,Hr=new F(1,0,0),Wr=new F(0,1,0),Xr=new F(0,0,1),Yl={type:"added"},Zl={type:"removed"};class Ee extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wl++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new F,e=new Gs,n=new Qi,i=new F(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xe},normalMatrix:{value:new ae}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Hr,t)}rotateY(t){return this.rotateOnAxis(Wr,t)}rotateZ(t){return this.rotateOnAxis(Xr,t)}translateOnAxis(t,e){return Vr.copy(t).applyQuaternion(this.quaternion),this.position.add(Vr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hr,t)}translateY(t){return this.translateOnAxis(Wr,t)}translateZ(t){return this.translateOnAxis(Xr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?as.copy(t):as.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Gi,as,this.up):pn.lookAt(as,Gi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(pn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Yl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,t,Xl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,ql,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const o=e[n];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++){const r=i[o];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,c){return r[c.uuid]===void 0&&(r[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const c=r.shapes;if(Array.isArray(c))for(let h=0,d=c.length;h<d;h++){const f=c[h];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let c=0,h=this.material.length;c<h;c++)r.push(o(t.materials,this.material[c]));i.material=r}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const c=this.animations[r];i.animations.push(o(t.animations,c))}}if(e){const r=a(t.geometries),c=a(t.materials),h=a(t.textures),d=a(t.images),f=a(t.shapes),l=a(t.skeletons),u=a(t.animations),M=a(t.nodes);r.length>0&&(n.geometries=r),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),l.length>0&&(n.skeletons=l),u.length>0&&(n.animations=u),M.length>0&&(n.nodes=M)}return n.object=i,n;function a(r){const c=[];for(const h in r){const d=r[h];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ee.DEFAULT_UP=new F(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const en=new F,mn=new F,ao=new F,gn=new F,di=new F,ui=new F,qr=new F,co=new F,lo=new F,ho=new F;let cs=!1;class nn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),en.subVectors(t,e),i.cross(en);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){en.subVectors(i,e),mn.subVectors(n,e),ao.subVectors(t,e);const a=en.dot(en),r=en.dot(mn),c=en.dot(ao),h=mn.dot(mn),d=mn.dot(ao),f=a*h-r*r;if(f===0)return o.set(0,0,0),null;const l=1/f,u=(h*c-r*d)*l,M=(a*d-r*c)*l;return o.set(1-u-M,M,u)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(t,e,n,i,o,a,r,c){return cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cs=!0),this.getInterpolation(t,e,n,i,o,a,r,c)}static getInterpolation(t,e,n,i,o,a,r,c){return this.getBarycoord(t,e,n,i,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,gn.x),c.addScaledVector(a,gn.y),c.addScaledVector(r,gn.z),c)}static isFrontFacing(t,e,n,i){return en.subVectors(n,e),mn.subVectors(t,e),en.cross(mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return en.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),en.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,o){return cs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),cs=!0),nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}getInterpolation(t,e,n,i,o){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let a,r;di.subVectors(i,n),ui.subVectors(o,n),co.subVectors(t,n);const c=di.dot(co),h=ui.dot(co);if(c<=0&&h<=0)return e.copy(n);lo.subVectors(t,i);const d=di.dot(lo),f=ui.dot(lo);if(d>=0&&f<=d)return e.copy(i);const l=c*f-d*h;if(l<=0&&c>=0&&d<=0)return a=c/(c-d),e.copy(n).addScaledVector(di,a);ho.subVectors(t,o);const u=di.dot(ho),M=ui.dot(ho);if(M>=0&&u<=M)return e.copy(o);const v=u*h-c*M;if(v<=0&&h>=0&&M<=0)return r=h/(h-M),e.copy(n).addScaledVector(ui,r);const g=d*M-u*f;if(g<=0&&f-d>=0&&u-M>=0)return qr.subVectors(o,i),r=(f-d)/(f-d+(u-M)),e.copy(i).addScaledVector(qr,r);const p=1/(g+v+l);return a=v*p,r=l*p,e.copy(n).addScaledVector(di,a).addScaledVector(ui,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const $a={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},ls={h:0,s:0,l:0};function uo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ce{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=Vo(t,1),e=Le(e,0,1),n=Le(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=uo(a,o,t+1/3),this.g=uo(a,o,t),this.b=uo(a,o,t-1/3)}return ue.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=$a[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ei(t.r),this.g=Ei(t.g),this.b=Ei(t.b),this}copyLinearToSRGB(t){return this.r=Qs(t.r),this.g=Qs(t.g),this.b=Qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return ue.fromWorkingColorSpace(Fe.copy(this),t),Math.round(Le(Fe.r*255,0,255))*65536+Math.round(Le(Fe.g*255,0,255))*256+Math.round(Le(Fe.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,i=Fe.g,o=Fe.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let c,h;const d=(r+a)/2;if(r===a)c=0,h=0;else{const f=a-r;switch(h=d<=.5?f/(a+r):f/(2-a-r),a){case n:c=(i-o)/f+(i<o?6:0);break;case i:c=(o-n)/f+2;break;case o:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=d,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ie){ue.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,i=Fe.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(An),this.setHSL(An.h+t,An.s+e,An.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(An),t.getHSL(ls);const n=Hi(An.h,ls.h,e),i=Hi(An.s,ls.s,e),o=Hi(An.l,ls.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new ce;ce.NAMES=$a;let Kl=0;class Ii extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=bi,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Ro,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ir,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Po&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ir&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const c=o[r];delete c.metadata,a.push(c)}return a}if(e){const o=i(t.textures),a=i(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class le extends Ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const be=new F,hs=new Bt;class cn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Dr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)hs.fromBufferAttribute(this,e),hs.applyMatrix3(t),this.setXY(e,hs.x,hs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix3(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyMatrix4(t),this.setXYZ(e,be.x,be.y,be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.applyNormalMatrix(t),this.setXYZ(e,be.x,be.y,be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)be.fromBufferAttribute(this,e),be.transformDirection(t),this.setXYZ(e,be.x,be.y,be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),i=Oe(i,this.array),o=Oe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Dr&&(t.usage=this.usage),t}}class Qa extends cn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tc extends cn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends cn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jl=0;const Je=new xe,fo=new Ee,fi=new F,Ze=new xn,Bi=new xn,Ce=new F;class De extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jl++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qa(t)?tc:Qa)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ae().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Je.makeRotationFromQuaternion(t),this.applyMatrix4(Je),this}rotateX(t){return Je.makeRotationX(t),this.applyMatrix4(Je),this}rotateY(t){return Je.makeRotationY(t),this.applyMatrix4(Je),this}rotateZ(t){return Je.makeRotationZ(t),this.applyMatrix4(Je),this}translate(t,e,n){return Je.makeTranslation(t,e,n),this.applyMatrix4(Je),this}scale(t,e,n){return Je.makeScale(t,e,n),this.applyMatrix4(Je),this}lookAt(t){return fo.lookAt(t),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const o=t[n];e.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new de(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];Ze.setFromBufferAttribute(o),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Os);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Bi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(Ze.min,Bi.min),Ze.expandByPoint(Ce),Ce.addVectors(Ze.max,Bi.max),Ze.expandByPoint(Ce)):(Ze.expandByPoint(Bi.min),Ze.expandByPoint(Bi.max))}Ze.getCenter(n);let i=0;for(let o=0,a=t.count;o<a;o++)Ce.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(Ce));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],c=this.morphTargetsRelative;for(let h=0,d=r.count;h<d;h++)Ce.fromBufferAttribute(r,h),c&&(fi.fromBufferAttribute(t,h),Ce.add(fi)),i=Math.max(i,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,o=e.normal.array,a=e.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*r),4));const c=this.getAttribute("tangent").array,h=[],d=[];for(let x=0;x<r;x++)h[x]=new F,d[x]=new F;const f=new F,l=new F,u=new F,M=new Bt,v=new Bt,g=new Bt,p=new F,w=new F;function _(x,T,G){f.fromArray(i,x*3),l.fromArray(i,T*3),u.fromArray(i,G*3),M.fromArray(a,x*2),v.fromArray(a,T*2),g.fromArray(a,G*2),l.sub(f),u.sub(f),v.sub(M),g.sub(M);const tt=1/(v.x*g.y-g.x*v.y);isFinite(tt)&&(p.copy(l).multiplyScalar(g.y).addScaledVector(u,-v.y).multiplyScalar(tt),w.copy(u).multiplyScalar(v.x).addScaledVector(l,-g.x).multiplyScalar(tt),h[x].add(p),h[T].add(p),h[G].add(p),d[x].add(w),d[T].add(w),d[G].add(w))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let x=0,T=y.length;x<T;++x){const G=y[x],tt=G.start,O=G.count;for(let V=tt,W=tt+O;V<W;V+=3)_(n[V+0],n[V+1],n[V+2])}const P=new F,C=new F,L=new F,k=new F;function S(x){L.fromArray(o,x*3),k.copy(L);const T=h[x];P.copy(T),P.sub(L.multiplyScalar(L.dot(T))).normalize(),C.crossVectors(k,T);const tt=C.dot(d[x])<0?-1:1;c[x*4]=P.x,c[x*4+1]=P.y,c[x*4+2]=P.z,c[x*4+3]=tt}for(let x=0,T=y.length;x<T;++x){const G=y[x],tt=G.start,O=G.count;for(let V=tt,W=tt+O;V<W;V+=3)S(n[V+0]),S(n[V+1]),S(n[V+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,u=n.count;l<u;l++)n.setXYZ(l,0,0,0);const i=new F,o=new F,a=new F,r=new F,c=new F,h=new F,d=new F,f=new F;if(t)for(let l=0,u=t.count;l<u;l+=3){const M=t.getX(l+0),v=t.getX(l+1),g=t.getX(l+2);i.fromBufferAttribute(e,M),o.fromBufferAttribute(e,v),a.fromBufferAttribute(e,g),d.subVectors(a,o),f.subVectors(i,o),d.cross(f),r.fromBufferAttribute(n,M),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,g),r.add(d),c.add(d),h.add(d),n.setXYZ(M,r.x,r.y,r.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,h.x,h.y,h.z)}else for(let l=0,u=e.count;l<u;l+=3)i.fromBufferAttribute(e,l+0),o.fromBufferAttribute(e,l+1),a.fromBufferAttribute(e,l+2),d.subVectors(a,o),f.subVectors(i,o),d.cross(f),n.setXYZ(l+0,d.x,d.y,d.z),n.setXYZ(l+1,d.x,d.y,d.z),n.setXYZ(l+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(r,c){const h=r.array,d=r.itemSize,f=r.normalized,l=new h.constructor(c.length*d);let u=0,M=0;for(let v=0,g=c.length;v<g;v++){r.isInterleavedBufferAttribute?u=c[v]*r.data.stride+r.offset:u=c[v]*d;for(let p=0;p<d;p++)l[M++]=h[u++]}return new cn(l,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const r in i){const c=i[r],h=t(c,n);e.setAttribute(r,h)}const o=this.morphAttributes;for(const r in o){const c=[],h=o[r];for(let d=0,f=h.length;d<f;d++){const l=h[d],u=t(l,n);c.push(u)}e.morphAttributes[r]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,c=a.length;r<c;r++){const h=a[r];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const i={};let o=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],d=[];for(let f=0,l=h.length;f<l;f++){const u=h[f];d.push(u.toJSON(t.data))}d.length>0&&(i[c]=d,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const d=i[h];this.setAttribute(h,d.clone(e))}const o=t.morphAttributes;for(const h in o){const d=[],f=o[h];for(let l=0,u=f.length;l<u;l++)d.push(f[l].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,d=a.length;h<d;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yr=new xe,Vn=new Ja,ds=new Os,Zr=new F,pi=new F,mi=new F,gi=new F,po=new F,us=new F,fs=new Bt,ps=new Bt,ms=new Bt,Kr=new F,Jr=new F,jr=new F,gs=new F,Ms=new F;class m extends Ee{constructor(t=new De,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(o&&r){us.set(0,0,0);for(let c=0,h=o.length;c<h;c++){const d=r[c],f=o[c];d!==0&&(po.fromBufferAttribute(f,t),a?us.addScaledVector(po,d):us.addScaledVector(po.sub(e),d))}e.add(us)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(o),Vn.copy(t.ray).recast(t.near),!(ds.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ds,Zr)===null||Vn.origin.distanceToSquared(Zr)>(t.far-t.near)**2))&&(Yr.copy(o).invert(),Vn.copy(t.ray).applyMatrix4(Yr),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,a=this.material,r=o.index,c=o.attributes.position,h=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,l=o.groups,u=o.drawRange;if(r!==null)if(Array.isArray(a))for(let M=0,v=l.length;M<v;M++){const g=l[M],p=a[g.materialIndex],w=Math.max(g.start,u.start),_=Math.min(r.count,Math.min(g.start+g.count,u.start+u.count));for(let y=w,P=_;y<P;y+=3){const C=r.getX(y),L=r.getX(y+1),k=r.getX(y+2);i=_s(this,p,t,n,h,d,f,C,L,k),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const M=Math.max(0,u.start),v=Math.min(r.count,u.start+u.count);for(let g=M,p=v;g<p;g+=3){const w=r.getX(g),_=r.getX(g+1),y=r.getX(g+2);i=_s(this,a,t,n,h,d,f,w,_,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let M=0,v=l.length;M<v;M++){const g=l[M],p=a[g.materialIndex],w=Math.max(g.start,u.start),_=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=w,P=_;y<P;y+=3){const C=y,L=y+1,k=y+2;i=_s(this,p,t,n,h,d,f,C,L,k),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const M=Math.max(0,u.start),v=Math.min(c.count,u.start+u.count);for(let g=M,p=v;g<p;g+=3){const w=g,_=g+1,y=g+2;i=_s(this,a,t,n,h,d,f,w,_,y),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function jl(s,t,e,n,i,o,a,r){let c;if(t.side===ke?c=n.intersectTriangle(a,o,i,!0,r):c=n.intersectTriangle(i,o,a,t.side===Nn,r),c===null)return null;Ms.copy(r),Ms.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Ms);return h<e.near||h>e.far?null:{distance:h,point:Ms.clone(),object:s}}function _s(s,t,e,n,i,o,a,r,c,h){s.getVertexPosition(r,pi),s.getVertexPosition(c,mi),s.getVertexPosition(h,gi);const d=jl(s,t,e,n,pi,mi,gi,gs);if(d){i&&(fs.fromBufferAttribute(i,r),ps.fromBufferAttribute(i,c),ms.fromBufferAttribute(i,h),d.uv=nn.getInterpolation(gs,pi,mi,gi,fs,ps,ms,new Bt)),o&&(fs.fromBufferAttribute(o,r),ps.fromBufferAttribute(o,c),ms.fromBufferAttribute(o,h),d.uv1=nn.getInterpolation(gs,pi,mi,gi,fs,ps,ms,new Bt),d.uv2=d.uv1),a&&(Kr.fromBufferAttribute(a,r),Jr.fromBufferAttribute(a,c),jr.fromBufferAttribute(a,h),d.normal=nn.getInterpolation(gs,pi,mi,gi,Kr,Jr,jr,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:r,b:c,c:h,normal:new F,materialIndex:0};nn.getNormal(pi,mi,gi,f.normal),d.face=f}return d}class U extends De{constructor(t=1,e=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const c=[],h=[],d=[],f=[];let l=0,u=0;M("z","y","x",-1,-1,n,e,t,a,o,0),M("z","y","x",1,-1,n,e,-t,a,o,1),M("x","z","y",1,1,t,n,e,i,a,2),M("x","z","y",1,-1,t,n,-e,i,a,3),M("x","y","z",1,-1,t,e,n,i,o,4),M("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(c),this.setAttribute("position",new de(h,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function M(v,g,p,w,_,y,P,C,L,k,S){const x=y/L,T=P/k,G=y/2,tt=P/2,O=C/2,V=L+1,W=k+1;let X=0,nt=0;const J=new F;for(let K=0;K<W;K++){const q=K*T-tt;for(let Mt=0;Mt<V;Mt++){const j=Mt*x-G;J[v]=j*w,J[g]=q*_,J[p]=O,h.push(J.x,J.y,J.z),J[v]=0,J[g]=0,J[p]=C>0?1:-1,d.push(J.x,J.y,J.z),f.push(Mt/L),f.push(1-K/k),X+=1}}for(let K=0;K<k;K++)for(let q=0;q<L;q++){const Mt=l+q+V*K,j=l+q+V*(K+1),st=l+(q+1)+V*(K+1),$=l+(q+1)+V*K;c.push(Mt,j,$),c.push(j,st,$),nt+=6}r.addGroup(u,nt,S),u+=nt,l+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new U(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){const t={};for(let e=0;e<s.length;e++){const n=Ci(s[e]);for(const i in n)t[i]=n[i]}return t}function $l(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ec(s){return s.getRenderTarget()===null?s.outputColorSpace:ue.workingColorSpace}const Ql={clone:Ci,merge:Ge};var th=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qn extends Ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=th,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=$l(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nc extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ve extends nc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ri*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Vi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(Vi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Vi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;o+=a.offsetX*i/c,e-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,_i=1;class nh extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(Mi,_i,t,e);i.layers=this.layers,this.add(i);const o=new Ve(Mi,_i,t,e);o.layers=this.layers,this.add(o);const a=new Ve(Mi,_i,t,e);a.layers=this.layers,this.add(a);const r=new Ve(Mi,_i,t,e);r.layers=this.layers,this.add(r);const c=new Ve(Mi,_i,t,e);c.layers=this.layers,this.add(c);const h=new Ve(Mi,_i,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,a,r,c]=e;for(const h of e)this.remove(h);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,c,h,d]=this.children,f=t.getRenderTarget(),l=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(f,l,u),t.xr.enabled=M,n.texture.needsPMREMUpdate=!0}}class ic extends He{constructor(t,e,n,i,o,a,r,c,h,d){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,n,i,o,a,r,c,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ih extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Wi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Jn?Ie:$e),this.texture=new ic(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new U(5,5,5),o=new Qn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:In});o.uniforms.tEquirect.value=e;const a=new m(i,o),r=e.minFilter;return e.minFilter===Zi&&(e.minFilter=je),new nh(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(o)}}const mo=new F,sh=new F,oh=new ae;class Wn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=mo.subVectors(n,e).cross(sh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(mo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||oh.getNormalMatrix(t),i=this.coplanarPoint(mo).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Os,ws=new F;class Ho{constructor(t=new Wn,e=new Wn,n=new Wn,i=new Wn,o=new Wn,a=new Wn){this.planes=[t,e,n,i,o,a]}set(t,e,n,i,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,i=t.elements,o=i[0],a=i[1],r=i[2],c=i[3],h=i[4],d=i[5],f=i[6],l=i[7],u=i[8],M=i[9],v=i[10],g=i[11],p=i[12],w=i[13],_=i[14],y=i[15];if(n[0].setComponents(c-o,l-h,g-u,y-p).normalize(),n[1].setComponents(c+o,l+h,g+u,y+p).normalize(),n[2].setComponents(c+a,l+d,g+M,y+w).normalize(),n[3].setComponents(c-a,l-d,g-M,y-w).normalize(),n[4].setComponents(c-r,l-f,g-v,y-_).normalize(),e===wn)n[5].setComponents(c+r,l+f,g+v,y+_).normalize();else if(e===Ls)n[5].setComponents(r,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ws.x=i.normal.x>0?t.max.x:t.min.x,ws.y=i.normal.y>0?t.max.y:t.min.y,ws.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ws)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sc(){let s=null,t=!1,e=null,n=null;function i(o,a){e(o,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function rh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(h,d){const f=h.array,l=h.usage,u=f.byteLength,M=s.createBuffer();s.bindBuffer(d,M),s.bufferData(d,f,l),h.onUploadCallback();let v;if(f instanceof Float32Array)v=s.FLOAT;else if(f instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)v=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=s.SHORT;else if(f instanceof Uint32Array)v=s.UNSIGNED_INT;else if(f instanceof Int32Array)v=s.INT;else if(f instanceof Int8Array)v=s.BYTE;else if(f instanceof Uint8Array)v=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:M,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:h.version,size:u}}function o(h,d,f){const l=d.array,u=d._updateRange,M=d.updateRanges;if(s.bindBuffer(f,h),u.count===-1&&M.length===0&&s.bufferSubData(f,0,l),M.length!==0){for(let v=0,g=M.length;v<g;v++){const p=M[v];e?s.bufferSubData(f,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count):s.bufferSubData(f,p.start*l.BYTES_PER_ELEMENT,l.subarray(p.start,p.start+p.count))}d.clearUpdateRanges()}u.count!==-1&&(e?s.bufferSubData(f,u.offset*l.BYTES_PER_ELEMENT,l,u.offset,u.count):s.bufferSubData(f,u.offset*l.BYTES_PER_ELEMENT,l.subarray(u.offset,u.offset+u.count)),u.count=-1),d.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function r(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(s.deleteBuffer(d.buffer),n.delete(h))}function c(h,d){if(h.isGLBufferAttribute){const l=n.get(h);(!l||l.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const f=n.get(h);if(f===void 0)n.set(h,i(h,d));else if(f.version<h.version){if(f.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");o(f.buffer,h,d),f.version=h.version}}return{get:a,remove:r,update:c}}class Kt extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,a=e/2,r=Math.floor(n),c=Math.floor(i),h=r+1,d=c+1,f=t/r,l=e/c,u=[],M=[],v=[],g=[];for(let p=0;p<d;p++){const w=p*l-a;for(let _=0;_<h;_++){const y=_*f-o;M.push(y,-w,0),v.push(0,0,1),g.push(_/r),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<r;w++){const _=w+h*p,y=w+h*(p+1),P=w+1+h*(p+1),C=w+1+h*p;u.push(_,y,C),u.push(y,P,C)}this.setIndex(u),this.setAttribute("position",new de(M,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.widthSegments,t.heightSegments)}}var ah=`#ifdef USE_ALPHAHASH
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
#endif`,Mh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_h=`vec3 objectNormal = vec3( normal );
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
#endif`,Md=`#if defined( USE_POINTS_UV )
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
}`,Mu=`uniform sampler2D tEquirect;
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
}`,oe={alphahash_fragment:ah,alphahash_pars_fragment:ch,alphamap_fragment:lh,alphamap_pars_fragment:hh,alphatest_fragment:dh,alphatest_pars_fragment:uh,aomap_fragment:fh,aomap_pars_fragment:ph,batching_pars_vertex:mh,batching_vertex:gh,begin_vertex:Mh,beginnormal_vertex:_h,bsdfs:wh,iridescence_fragment:vh,bumpmap_pars_fragment:xh,clipping_planes_fragment:Sh,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:Eh,color_fragment:Th,color_pars_fragment:Ah,color_pars_vertex:Ph,color_vertex:Rh,common:Ch,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Ih,displacementmap_pars_vertex:Dh,displacementmap_vertex:Uh,emissivemap_fragment:Nh,emissivemap_pars_fragment:Fh,colorspace_fragment:Oh,colorspace_pars_fragment:Gh,envmap_fragment:Bh,envmap_common_pars_fragment:kh,envmap_pars_fragment:zh,envmap_pars_vertex:Vh,envmap_physical_pars_fragment:td,envmap_vertex:Hh,fog_vertex:Wh,fog_pars_vertex:Xh,fog_fragment:qh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Zh,lightmap_fragment:Kh,lightmap_pars_fragment:Jh,lights_lambert_fragment:jh,lights_lambert_pars_fragment:$h,lights_pars_begin:Qh,lights_toon_fragment:ed,lights_toon_pars_fragment:nd,lights_phong_fragment:id,lights_phong_pars_fragment:sd,lights_physical_fragment:od,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:cd,lights_fragment_end:ld,logdepthbuf_fragment:hd,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:ud,logdepthbuf_vertex:fd,map_fragment:pd,map_pars_fragment:md,map_particle_fragment:gd,map_particle_pars_fragment:Md,metalnessmap_fragment:_d,metalnessmap_pars_fragment:wd,morphcolor_vertex:vd,morphnormal_vertex:xd,morphtarget_pars_vertex:Sd,morphtarget_vertex:yd,normal_fragment_begin:bd,normal_fragment_maps:Ed,normal_pars_fragment:Td,normal_pars_vertex:Ad,normal_vertex:Pd,normalmap_pars_fragment:Rd,clearcoat_normal_fragment_begin:Cd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Id,iridescence_pars_fragment:Dd,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Gd,dithering_pars_fragment:Bd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:zd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Hd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:Yd,skinning_vertex:Zd,skinnormal_vertex:Kd,specularmap_fragment:Jd,specularmap_pars_fragment:jd,tonemapping_fragment:$d,tonemapping_pars_fragment:Qd,transmission_fragment:tu,transmission_pars_fragment:eu,uv_pars_fragment:nu,uv_pars_vertex:iu,uv_vertex:su,worldpos_vertex:ou,background_vert:ru,background_frag:au,backgroundCube_vert:cu,backgroundCube_frag:lu,cube_vert:hu,cube_frag:du,depth_vert:uu,depth_frag:fu,distanceRGBA_vert:pu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:Mu,linedashed_vert:_u,linedashed_frag:wu,meshbasic_vert:vu,meshbasic_frag:xu,meshlambert_vert:Su,meshlambert_frag:yu,meshmatcap_vert:bu,meshmatcap_frag:Eu,meshnormal_vert:Tu,meshnormal_frag:Au,meshphong_vert:Pu,meshphong_frag:Ru,meshphysical_vert:Cu,meshphysical_frag:Lu,meshtoon_vert:Iu,meshtoon_frag:Du,points_vert:Uu,points_frag:Nu,shadow_vert:Fu,shadow_frag:Ou,sprite_vert:Gu,sprite_frag:Bu},zt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},rn={basic:{uniforms:Ge([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Ge([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ce(0)}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Ge([zt.common,zt.specularmap,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,zt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Ge([zt.common,zt.envmap,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.roughnessmap,zt.metalnessmap,zt.fog,zt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Ge([zt.common,zt.aomap,zt.lightmap,zt.emissivemap,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.gradientmap,zt.fog,zt.lights,{emissive:{value:new ce(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Ge([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,zt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Ge([zt.points,zt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Ge([zt.common,zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Ge([zt.common,zt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Ge([zt.common,zt.bumpmap,zt.normalmap,zt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Ge([zt.sprite,zt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distanceRGBA:{uniforms:Ge([zt.common,zt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distanceRGBA_vert,fragmentShader:oe.distanceRGBA_frag},shadow:{uniforms:Ge([zt.lights,zt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};rn.physical={uniforms:Ge([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const vs={r:0,b:0,g:0};function ku(s,t,e,n,i,o,a){const r=new ce(0);let c=o===!0?0:1,h,d,f=null,l=0,u=null;function M(g,p){let w=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?e:t).get(_)),_===null?v(r,c):_&&_.isColor&&(v(_,1),w=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Ns)?(d===void 0&&(d=new m(new U(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ci(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,d.material.toneMapped=ue.getTransfer(_.colorSpace)!==me,(f!==_||l!==_.version||u!==s.toneMapping)&&(d.material.needsUpdate=!0,f=_,l=_.version,u=s.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new m(new Kt(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ci(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=ue.getTransfer(_.colorSpace)!==me,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||l!==_.version||u!==s.toneMapping)&&(h.material.needsUpdate=!0,f=_,l=_.version,u=s.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null))}function v(g,p){g.getRGB(vs,ec(s)),n.buffers.color.setClear(vs.r,vs.g,vs.b,p,a)}return{getClearColor:function(){return r},setClearColor:function(g,p=1){r.set(g),c=p,v(r,c)},getClearAlpha:function(){return c},setClearAlpha:function(g){c=g,v(r,c)},render:M}}function zu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),o=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||o!==null,r={},c=g(null);let h=c,d=!1;function f(O,V,W,X,nt){let J=!1;if(a){const K=v(X,W,V);h!==K&&(h=K,u(h.object)),J=p(O,X,W,nt),J&&w(O,X,W,nt)}else{const K=V.wireframe===!0;(h.geometry!==X.id||h.program!==W.id||h.wireframe!==K)&&(h.geometry=X.id,h.program=W.id,h.wireframe=K,J=!0)}nt!==null&&e.update(nt,s.ELEMENT_ARRAY_BUFFER),(J||d)&&(d=!1,k(O,V,W,X),nt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function l(){return n.isWebGL2?s.createVertexArray():o.createVertexArrayOES()}function u(O){return n.isWebGL2?s.bindVertexArray(O):o.bindVertexArrayOES(O)}function M(O){return n.isWebGL2?s.deleteVertexArray(O):o.deleteVertexArrayOES(O)}function v(O,V,W){const X=W.wireframe===!0;let nt=r[O.id];nt===void 0&&(nt={},r[O.id]=nt);let J=nt[V.id];J===void 0&&(J={},nt[V.id]=J);let K=J[X];return K===void 0&&(K=g(l()),J[X]=K),K}function g(O){const V=[],W=[],X=[];for(let nt=0;nt<i;nt++)V[nt]=0,W[nt]=0,X[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:X,object:O,attributes:{},index:null}}function p(O,V,W,X){const nt=h.attributes,J=V.attributes;let K=0;const q=W.getAttributes();for(const Mt in q)if(q[Mt].location>=0){const st=nt[Mt];let $=J[Mt];if($===void 0&&(Mt==="instanceMatrix"&&O.instanceMatrix&&($=O.instanceMatrix),Mt==="instanceColor"&&O.instanceColor&&($=O.instanceColor)),st===void 0||st.attribute!==$||$&&st.data!==$.data)return!0;K++}return h.attributesNum!==K||h.index!==X}function w(O,V,W,X){const nt={},J=V.attributes;let K=0;const q=W.getAttributes();for(const Mt in q)if(q[Mt].location>=0){let st=J[Mt];st===void 0&&(Mt==="instanceMatrix"&&O.instanceMatrix&&(st=O.instanceMatrix),Mt==="instanceColor"&&O.instanceColor&&(st=O.instanceColor));const $={};$.attribute=st,st&&st.data&&($.data=st.data),nt[Mt]=$,K++}h.attributes=nt,h.attributesNum=K,h.index=X}function _(){const O=h.newAttributes;for(let V=0,W=O.length;V<W;V++)O[V]=0}function y(O){P(O,0)}function P(O,V){const W=h.newAttributes,X=h.enabledAttributes,nt=h.attributeDivisors;W[O]=1,X[O]===0&&(s.enableVertexAttribArray(O),X[O]=1),nt[O]!==V&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,V),nt[O]=V)}function C(){const O=h.newAttributes,V=h.enabledAttributes;for(let W=0,X=V.length;W<X;W++)V[W]!==O[W]&&(s.disableVertexAttribArray(W),V[W]=0)}function L(O,V,W,X,nt,J,K){K===!0?s.vertexAttribIPointer(O,V,W,nt,J):s.vertexAttribPointer(O,V,W,X,nt,J)}function k(O,V,W,X){if(n.isWebGL2===!1&&(O.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const nt=X.attributes,J=W.getAttributes(),K=V.defaultAttributeValues;for(const q in J){const Mt=J[q];if(Mt.location>=0){let j=nt[q];if(j===void 0&&(q==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),q==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){const st=j.normalized,$=j.itemSize,vt=e.get(j);if(vt===void 0)continue;const mt=vt.buffer,Rt=vt.type,Ut=vt.bytesPerElement,ut=n.isWebGL2===!0&&(Rt===s.INT||Rt===s.UNSIGNED_INT||j.gpuType===Fa);if(j.isInterleavedBufferAttribute){const Ct=j.data,D=Ct.stride,_t=j.offset;if(Ct.isInstancedInterleavedBuffer){for(let lt=0;lt<Mt.locationSize;lt++)P(Mt.location+lt,Ct.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let lt=0;lt<Mt.locationSize;lt++)y(Mt.location+lt);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let lt=0;lt<Mt.locationSize;lt++)L(Mt.location+lt,$/Mt.locationSize,Rt,st,D*Ut,(_t+$/Mt.locationSize*lt)*Ut,ut)}else{if(j.isInstancedBufferAttribute){for(let Ct=0;Ct<Mt.locationSize;Ct++)P(Mt.location+Ct,j.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Ct=0;Ct<Mt.locationSize;Ct++)y(Mt.location+Ct);s.bindBuffer(s.ARRAY_BUFFER,mt);for(let Ct=0;Ct<Mt.locationSize;Ct++)L(Mt.location+Ct,$/Mt.locationSize,Rt,st,$*Ut,$/Mt.locationSize*Ct*Ut,ut)}}else if(K!==void 0){const st=K[q];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(Mt.location,st);break;case 3:s.vertexAttrib3fv(Mt.location,st);break;case 4:s.vertexAttrib4fv(Mt.location,st);break;default:s.vertexAttrib1fv(Mt.location,st)}}}}C()}function S(){G();for(const O in r){const V=r[O];for(const W in V){const X=V[W];for(const nt in X)M(X[nt].object),delete X[nt];delete V[W]}delete r[O]}}function x(O){if(r[O.id]===void 0)return;const V=r[O.id];for(const W in V){const X=V[W];for(const nt in X)M(X[nt].object),delete X[nt];delete V[W]}delete r[O.id]}function T(O){for(const V in r){const W=r[V];if(W[O.id]===void 0)continue;const X=W[O.id];for(const nt in X)M(X[nt].object),delete X[nt];delete W[O.id]}}function G(){tt(),d=!0,h!==c&&(h=c,u(h.object))}function tt(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:G,resetDefaultState:tt,dispose:S,releaseStatesOfGeometry:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:y,disableUnusedAttributes:C}}function Vu(s,t,e,n){const i=n.isWebGL2;let o;function a(d){o=d}function r(d,f){s.drawArrays(o,d,f),e.update(f,o,1)}function c(d,f,l){if(l===0)return;let u,M;if(i)u=s,M="drawArraysInstanced";else if(u=t.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",u===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}u[M](o,d,f,l),e.update(f,o,l)}function h(d,f,l){if(l===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let M=0;M<l;M++)this.render(d[M],f[M]);else{u.multiDrawArraysWEBGL(o,d,0,f,0,l);let M=0;for(let v=0;v<l;v++)M+=f[v];e.update(M,o,1)}}this.setMode=a,this.render=r,this.renderInstances=c,this.renderMultiDraw=h}function Hu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let r=e.precision!==void 0?e.precision:"highp";const c=o(r);c!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",c,"instead."),r=c);const h=a||t.has("WEBGL_draw_buffers"),d=e.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),_=l>0,y=a||t.has("OES_texture_float"),P=_&&y,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:o,precision:r,logarithmicDepthBuffer:d,maxTextures:f,maxVertexTextures:l,maxTextureSize:u,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:g,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:P,maxSamples:C}}function Wu(s){const t=this;let e=null,n=0,i=!1,o=!1;const a=new Wn,r=new ae,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,l){const u=f.length!==0||l||n!==0||i;return i=l,n=f.length,u},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,l){e=d(f,l,0)},this.setState=function(f,l,u){const M=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,p=s.get(f);if(!i||M===null||M.length===0||o&&!g)o?d(null):h();else{const w=o?0:n,_=w*4;let y=p.clippingState||null;c.value=y,y=d(M,l,_,u);for(let P=0;P!==_;++P)y[P]=e[P];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,l,u,M){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=c.value,M!==!0||g===null){const p=u+v*4,w=l.matrixWorldInverse;r.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let _=0,y=u;_!==v;++_,y+=4)a.copy(f[_]).applyMatrix4(w,r),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function Xu(s){let t=new WeakMap;function e(a,r){return r===Co?a.mapping=Ti:r===Lo&&(a.mapping=Ai),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===Co||r===Lo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new ih(c.height/2);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class oc extends nc{constructor(t=-1,e=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,r-=d*this.view.offsetY,c=r-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xi=4,$r=[.125,.215,.35,.446,.526,.582],Yn=20,go=new oc,Qr=new ce;let Mo=null,_o=0,wo=0;const Xn=(1+Math.sqrt(5))/2,wi=1/Xn,ta=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,Xn,wi),new F(0,Xn,-wi),new F(wi,0,Xn),new F(-wi,0,Xn),new F(Xn,wi,0),new F(-Xn,wi,0)];class ea{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Mo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ia(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Mo,_o,wo),t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===Ai?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Mo=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:je,minFilter:je,generateMipmaps:!1,type:Ki,format:on,colorSpace:vn,depthBuffer:!1},i=na(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=na(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qu(o)),this._blurMaterial=Yu(o,t,e)}return i}_compileMaterial(t){const e=new m(this._lodPlanes[0],t);this._renderer.compile(e,go)}_sceneToCubeUV(t,e,n,i){const r=new Ve(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,l=d.toneMapping;d.getClearColor(Qr),d.toneMapping=Dn,d.autoClear=!1;const u=new le({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1}),M=new m(new U,u);let v=!1;const g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,v=!0):(u.color.copy(Qr),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(r.up.set(0,c[p],0),r.lookAt(h[p],0,0)):w===1?(r.up.set(0,0,c[p]),r.lookAt(0,h[p],0)):(r.up.set(0,c[p],0),r.lookAt(0,0,h[p]));const _=this._cubeSize;xs(i,w*_,p>2?_:0,_,_),d.setRenderTarget(i),v&&d.render(M,r),d.render(t,r)}M.geometry.dispose(),M.material.dispose(),d.toneMapping=l,d.autoClear=f,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ti||t.mapping===Ai;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=sa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ia());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new m(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const c=this._cubeSize;xs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const o=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=ta[(i-1)%ta.length];this._blur(t,i-1,i,o,a)}e.autoClear=n}_blur(t,e,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",o),this._halfBlur(a,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,a,r){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new m(this._lodPlanes[i],h),l=h.uniforms,u=this._sizeLods[n]-1,M=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*Yn-1),v=o/M,g=isFinite(o)?1+Math.floor(d*v):Yn;g>Yn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yn}`);const p=[];let w=0;for(let L=0;L<Yn;++L){const k=L/v,S=Math.exp(-k*k/2);p.push(S),L===0?w+=S:L<g&&(w+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/w;l.envMap.value=t.texture,l.samples.value=g,l.weights.value=p,l.latitudinal.value=a==="latitudinal",r&&(l.poleAxis.value=r);const{_lodMax:_}=this;l.dTheta.value=M,l.mipInt.value=_-n;const y=this._sizeLods[i],P=3*y*(i>_-xi?i-_+xi:0),C=4*(this._cubeSize-y);xs(e,P,C,3*y,2*y),c.setRenderTarget(e),c.render(f,go)}}function qu(s){const t=[],e=[],n=[];let i=s;const o=s-xi+1+$r.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);e.push(r);let c=1/r;a>s-xi?c=$r[a-s+xi-1]:a===0&&(c=0),n.push(c);const h=1/(r-2),d=-h,f=1+h,l=[d,d,f,d,f,f,d,d,f,f,d,f],u=6,M=6,v=3,g=2,p=1,w=new Float32Array(v*M*u),_=new Float32Array(g*M*u),y=new Float32Array(p*M*u);for(let C=0;C<u;C++){const L=C%3*2/3-1,k=C>2?0:-1,S=[L,k,0,L+2/3,k,0,L+2/3,k+1,0,L,k,0,L+2/3,k+1,0,L,k+1,0];w.set(S,v*M*C),_.set(l,g*M*C);const x=[C,C,C,C,C,C];y.set(x,p*M*C)}const P=new De;P.setAttribute("position",new cn(w,v)),P.setAttribute("uv",new cn(_,g)),P.setAttribute("faceIndex",new cn(y,p)),t.push(P),i>xi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function na(s,t,e){const n=new $n(s,t,e);return n.texture.mapping=Ns,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Yu(s,t,e){const n=new Float32Array(Yn),i=new F(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function ia(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

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
		`,blending:In,depthTest:!1,depthWrite:!1})}function sa(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Wo(){return`

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
	`}function Zu(s){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const c=r.mapping,h=c===Co||c===Lo,d=c===Ti||c===Ai;if(h||d)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let f=t.get(r);return e===null&&(e=new ea(s)),f=h?e.fromEquirectangular(r,f):e.fromCubemap(r,f),t.set(r,f),f.texture}else{if(t.has(r))return t.get(r).texture;{const f=r.image;if(h&&f&&f.height>0||d&&f&&i(f)){e===null&&(e=new ea(s));const l=h?e.fromEquirectangular(r):e.fromCubemap(r);return t.set(r,l),r.addEventListener("dispose",o),l.texture}else return null}}}return r}function i(r){let c=0;const h=6;for(let d=0;d<h;d++)r[d]!==void 0&&c++;return c===h}function o(r){const c=r.target;c.removeEventListener("dispose",o);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Ku(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ju(s,t,e,n){const i={},o=new WeakMap;function a(f){const l=f.target;l.index!==null&&t.remove(l.index);for(const M in l.attributes)t.remove(l.attributes[M]);for(const M in l.morphAttributes){const v=l.morphAttributes[M];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}l.removeEventListener("dispose",a),delete i[l.id];const u=o.get(l);u&&(t.remove(u),o.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function r(f,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,e.memory.geometries++),l}function c(f){const l=f.attributes;for(const M in l)t.update(l[M],s.ARRAY_BUFFER);const u=f.morphAttributes;for(const M in u){const v=u[M];for(let g=0,p=v.length;g<p;g++)t.update(v[g],s.ARRAY_BUFFER)}}function h(f){const l=[],u=f.index,M=f.attributes.position;let v=0;if(u!==null){const w=u.array;v=u.version;for(let _=0,y=w.length;_<y;_+=3){const P=w[_+0],C=w[_+1],L=w[_+2];l.push(P,C,C,L,L,P)}}else if(M!==void 0){const w=M.array;v=M.version;for(let _=0,y=w.length/3-1;_<y;_+=3){const P=_+0,C=_+1,L=_+2;l.push(P,C,C,L,L,P)}}else return;const g=new(qa(l)?tc:Qa)(l,1);g.version=v;const p=o.get(f);p&&t.remove(p),o.set(f,g)}function d(f){const l=o.get(f);if(l){const u=f.index;u!==null&&l.version<u.version&&h(f)}else h(f);return o.get(f)}return{get:r,update:c,getWireframeAttribute:d}}function ju(s,t,e,n){const i=n.isWebGL2;let o;function a(u){o=u}let r,c;function h(u){r=u.type,c=u.bytesPerElement}function d(u,M){s.drawElements(o,M,r,u*c),e.update(M,o,1)}function f(u,M,v){if(v===0)return;let g,p;if(i)g=s,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](o,M,r,u*c,v),e.update(M,o,v)}function l(u,M,v){if(v===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<v;p++)this.render(u[p]/c,M[p]);else{g.multiDrawElementsWEBGL(o,M,0,r,u,0,v);let p=0;for(let w=0;w<v;w++)p+=M[w];e.update(p,o,1)}}this.setMode=a,this.setIndex=h,this.render=d,this.renderInstances=f,this.renderMultiDraw=l}function $u(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=r*(o/3);break;case s.LINES:e.lines+=r*(o/2);break;case s.LINE_STRIP:e.lines+=r*(o-1);break;case s.LINE_LOOP:e.lines+=r*o;break;case s.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qu(s,t){return s[0]-t[0]}function tf(s,t){return Math.abs(t[1])-Math.abs(s[1])}function ef(s,t,e){const n={},i=new Float32Array(8),o=new WeakMap,a=new ge,r=[];for(let h=0;h<8;h++)r[h]=[h,0];function c(h,d,f){const l=h.morphTargetInfluences;if(t.isWebGL2===!0){const M=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=M!==void 0?M.length:0;let g=o.get(d);if(g===void 0||g.count!==v){let V=function(){tt.dispose(),o.delete(d),d.removeEventListener("dispose",V)};var u=V;g!==void 0&&g.texture.dispose();const _=d.morphAttributes.position!==void 0,y=d.morphAttributes.normal!==void 0,P=d.morphAttributes.color!==void 0,C=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],k=d.morphAttributes.color||[];let S=0;_===!0&&(S=1),y===!0&&(S=2),P===!0&&(S=3);let x=d.attributes.position.count*S,T=1;x>t.maxTextureSize&&(T=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const G=new Float32Array(x*T*4*v),tt=new Ka(G,x,T,v);tt.type=Ln,tt.needsUpdate=!0;const O=S*4;for(let W=0;W<v;W++){const X=C[W],nt=L[W],J=k[W],K=x*T*4*W;for(let q=0;q<X.count;q++){const Mt=q*O;_===!0&&(a.fromBufferAttribute(X,q),G[K+Mt+0]=a.x,G[K+Mt+1]=a.y,G[K+Mt+2]=a.z,G[K+Mt+3]=0),y===!0&&(a.fromBufferAttribute(nt,q),G[K+Mt+4]=a.x,G[K+Mt+5]=a.y,G[K+Mt+6]=a.z,G[K+Mt+7]=0),P===!0&&(a.fromBufferAttribute(J,q),G[K+Mt+8]=a.x,G[K+Mt+9]=a.y,G[K+Mt+10]=a.z,G[K+Mt+11]=J.itemSize===4?a.w:1)}}g={count:v,texture:tt,size:new Bt(x,T)},o.set(d,g),d.addEventListener("dispose",V)}let p=0;for(let _=0;_<l.length;_++)p+=l[_];const w=d.morphTargetsRelative?1:1-p;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",l),f.getUniforms().setValue(s,"morphTargetsTexture",g.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const M=l===void 0?0:l.length;let v=n[d.id];if(v===void 0||v.length!==M){v=[];for(let y=0;y<M;y++)v[y]=[y,0];n[d.id]=v}for(let y=0;y<M;y++){const P=v[y];P[0]=y,P[1]=l[y]}v.sort(tf);for(let y=0;y<8;y++)y<M&&v[y][1]?(r[y][0]=v[y][0],r[y][1]=v[y][1]):(r[y][0]=Number.MAX_SAFE_INTEGER,r[y][1]=0);r.sort(Qu);const g=d.morphAttributes.position,p=d.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const P=r[y],C=P[0],L=P[1];C!==Number.MAX_SAFE_INTEGER&&L?(g&&d.getAttribute("morphTarget"+y)!==g[C]&&d.setAttribute("morphTarget"+y,g[C]),p&&d.getAttribute("morphNormal"+y)!==p[C]&&d.setAttribute("morphNormal"+y,p[C]),i[y]=L,w+=L):(g&&d.hasAttribute("morphTarget"+y)===!0&&d.deleteAttribute("morphTarget"+y),p&&d.hasAttribute("morphNormal"+y)===!0&&d.deleteAttribute("morphNormal"+y),i[y]=0)}const _=d.morphTargetsRelative?1:1-w;f.getUniforms().setValue(s,"morphTargetBaseInfluence",_),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function nf(s,t,e,n){let i=new WeakMap;function o(c){const h=n.render.frame,d=c.geometry,f=t.get(c,d);if(i.get(f)!==h&&(t.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",r)===!1&&c.addEventListener("dispose",r),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return f}function a(){i=new WeakMap}function r(c){const h=c.target;h.removeEventListener("dispose",r),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}class rc extends He{constructor(t,e,n,i,o,a,r,c,h,d){if(d=d!==void 0?d:Kn,d!==Kn&&d!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Kn&&(n=Cn),n===void 0&&d===Pi&&(n=Zn),super(null,i,o,a,r,c,d,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:Be,this.minFilter=c!==void 0?c:Be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ac=new He,cc=new rc(1,1);cc.compareFunction=Xa;const lc=new Ka,hc=new kl,dc=new ic,oa=[],ra=[],aa=new Float32Array(16),ca=new Float32Array(9),la=new Float32Array(4);function Di(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=oa[i];if(o===void 0&&(o=new Float32Array(i),oa[i]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,s[a].toArray(o,r)}return o}function Ae(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Pe(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Bs(s,t){let e=ra[t];e===void 0&&(e=new Int32Array(t),ra[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function sf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function of(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2fv(this.addr,t),Pe(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;s.uniform3fv(this.addr,t),Pe(e,t)}}function af(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4fv(this.addr,t),Pe(e,t)}}function cf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,n))return;la.set(n),s.uniformMatrix2fv(this.addr,!1,la),Pe(e,n)}}function lf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,n))return;ca.set(n),s.uniformMatrix3fv(this.addr,!1,ca),Pe(e,n)}}function hf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ae(e,n))return;aa.set(n),s.uniformMatrix4fv(this.addr,!1,aa),Pe(e,n)}}function df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2iv(this.addr,t),Pe(e,t)}}function ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3iv(this.addr,t),Pe(e,t)}}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4iv(this.addr,t),Pe(e,t)}}function mf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;s.uniform2uiv(this.addr,t),Pe(e,t)}}function Mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;s.uniform3uiv(this.addr,t),Pe(e,t)}}function _f(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;s.uniform4uiv(this.addr,t),Pe(e,t)}}function wf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const o=this.type===s.SAMPLER_2D_SHADOW?cc:ac;e.setTexture2D(t||o,i)}function vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||hc,i)}function xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||dc,i)}function Sf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||lc,i)}function yf(s){switch(s){case 5126:return sf;case 35664:return of;case 35665:return rf;case 35666:return af;case 35674:return cf;case 35675:return lf;case 35676:return hf;case 5124:case 35670:return df;case 35667:case 35671:return uf;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return Mf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return wf;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return xf;case 36289:case 36303:case 36311:case 36292:return Sf}}function bf(s,t){s.uniform1fv(this.addr,t)}function Ef(s,t){const e=Di(t,this.size,2);s.uniform2fv(this.addr,e)}function Tf(s,t){const e=Di(t,this.size,3);s.uniform3fv(this.addr,e)}function Af(s,t){const e=Di(t,this.size,4);s.uniform4fv(this.addr,e)}function Pf(s,t){const e=Di(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Rf(s,t){const e=Di(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Cf(s,t){const e=Di(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Lf(s,t){s.uniform1iv(this.addr,t)}function If(s,t){s.uniform2iv(this.addr,t)}function Df(s,t){s.uniform3iv(this.addr,t)}function Uf(s,t){s.uniform4iv(this.addr,t)}function Nf(s,t){s.uniform1uiv(this.addr,t)}function Ff(s,t){s.uniform2uiv(this.addr,t)}function Of(s,t){s.uniform3uiv(this.addr,t)}function Gf(s,t){s.uniform4uiv(this.addr,t)}function Bf(s,t,e){const n=this.cache,i=t.length,o=Bs(e,i);Ae(n,o)||(s.uniform1iv(this.addr,o),Pe(n,o));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||ac,o[a])}function kf(s,t,e){const n=this.cache,i=t.length,o=Bs(e,i);Ae(n,o)||(s.uniform1iv(this.addr,o),Pe(n,o));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||hc,o[a])}function zf(s,t,e){const n=this.cache,i=t.length,o=Bs(e,i);Ae(n,o)||(s.uniform1iv(this.addr,o),Pe(n,o));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||dc,o[a])}function Vf(s,t,e){const n=this.cache,i=t.length,o=Bs(e,i);Ae(n,o)||(s.uniform1iv(this.addr,o),Pe(n,o));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||lc,o[a])}function Hf(s){switch(s){case 5126:return bf;case 35664:return Ef;case 35665:return Tf;case 35666:return Af;case 35674:return Pf;case 35675:return Rf;case 35676:return Cf;case 5124:case 35670:return Lf;case 35667:case 35671:return If;case 35668:case 35672:return Df;case 35669:case 35673:return Uf;case 5125:return Nf;case 36294:return Ff;case 36295:return Of;case 36296:return Gf;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return zf;case 36289:case 36303:case 36311:case 36292:return Vf}}class Wf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=yf(e.type)}}class Xf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hf(e.type)}}class qf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(t,e[r.id],n)}}}const vo=/(\w+)(\])?(\[|\.)?/g;function ha(s,t){s.seq.push(t),s.map[t.id]=t}function Yf(s,t,e){const n=s.name,i=n.length;for(vo.lastIndex=0;;){const o=vo.exec(n),a=vo.lastIndex;let r=o[1];const c=o[2]==="]",h=o[3];if(c&&(r=r|0),h===void 0||h==="["&&a+2===i){ha(e,h===void 0?new Wf(r,s,t):new Xf(r,s,t));break}else{let f=e.map[r];f===void 0&&(f=new qf(r),ha(e,f)),e=f}}}class Ts{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),a=t.getUniformLocation(e,o.name);Yf(o,a,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,a=e.length;o!==a;++o){const r=e[o],c=n[r.id];c.needsUpdate!==!1&&r.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function da(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Zf=37297;let Kf=0;function Jf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}function jf(s){const t=ue.getPrimaries(ue.workingColorSpace),e=ue.getPrimaries(s);let n;switch(t===e?n="":t===Cs&&e===Rs?n="LinearDisplayP3ToLinearSRGB":t===Rs&&e===Cs&&(n="LinearSRGBToLinearDisplayP3"),s){case vn:case Fs:return[n,"LinearTransferOETF"];case Ie:case zo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ua(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Jf(s.getShaderSource(t),a)}else return i}function $f(s,t){const e=jf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Qf(s,t){let e;switch(t){case jc:e="Linear";break;case $c:e="Reinhard";break;case Qc:e="OptimizedCineon";break;case Ua:e="ACESFilmic";break;case el:e="AgX";break;case tl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function t0(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Si).join(`
`)}function e0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Si).join(`
`)}function n0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function i0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:r}}return e}function Si(s){return s!==""}function fa(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const s0=/^[ \t]*#include +<([\w\d./]+)>/gm;function No(s){return s.replace(s0,r0)}const o0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function r0(s,t){let e=oe[t];if(e===void 0){const n=o0.get(t);if(n!==void 0)e=oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return No(e)}const a0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ma(s){return s.replace(a0,c0)}function c0(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function ga(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function l0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bo?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ia?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mn&&(t="SHADOWMAP_TYPE_VSM"),t}function h0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ti:case Ai:t="ENVMAP_TYPE_CUBE";break;case Ns:t="ENVMAP_TYPE_CUBE_UV";break}return t}function d0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ai:t="ENVMAP_MODE_REFRACTION";break}return t}function u0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Da:t="ENVMAP_BLENDING_MULTIPLY";break;case Kc:t="ENVMAP_BLENDING_MIX";break;case Jc:t="ENVMAP_BLENDING_ADD";break}return t}function f0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function p0(s,t,e,n){const i=s.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const c=l0(e),h=h0(e),d=d0(e),f=u0(e),l=f0(e),u=e.isWebGL2?"":t0(e),M=e0(e),v=n0(o),g=i.createProgram();let p,w,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Si).join(`
`),p.length>0&&(p+=`
`),w=[u,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Si).join(`
`),w.length>0&&(w+=`
`)):(p=[ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Si).join(`
`),w=[u,ga(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Dn?"#define TONE_MAPPING":"",e.toneMapping!==Dn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Dn?Qf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,$f("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Si).join(`
`)),a=No(a),a=fa(a,e),a=pa(a,e),r=No(r),r=fa(r,e),r=pa(r,e),a=ma(a),r=ma(r),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ur?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ur?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const y=_+p+a,P=_+w+r,C=da(i,i.VERTEX_SHADER,y),L=da(i,i.FRAGMENT_SHADER,P);i.attachShader(g,C),i.attachShader(g,L),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function k(G){if(s.debug.checkShaderErrors){const tt=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(C).trim(),V=i.getShaderInfoLog(L).trim();let W=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,C,L);else{const nt=ua(i,C,"vertex"),J=ua(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+nt+`
`+J)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(O===""||V==="")&&(X=!1);X&&(G.diagnostics={runnable:W,programLog:tt,vertexShader:{log:O,prefix:p},fragmentShader:{log:V,prefix:w}})}i.deleteShader(C),i.deleteShader(L),S=new Ts(i,g),x=i0(i,g)}let S;this.getUniforms=function(){return S===void 0&&k(this),S};let x;this.getAttributes=function(){return x===void 0&&k(this),x};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(g,Zf)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Kf++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=L,this}let m0=0;class g0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new M0(t),e.set(t,n)),n}}class M0{constructor(t){this.id=m0++,this.code=t,this.usedTimes=0}}function _0(s,t,e,n,i,o,a){const r=new ja,c=new g0,h=[],d=i.isWebGL2,f=i.logarithmicDepthBuffer,l=i.vertexTextures;let u=i.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return S===0?"uv":`uv${S}`}function g(S,x,T,G,tt){const O=G.fog,V=tt.geometry,W=S.isMeshStandardMaterial?G.environment:null,X=(S.isMeshStandardMaterial?e:t).get(S.envMap||W),nt=X&&X.mapping===Ns?X.image.height:null,J=M[S.type];S.precision!==null&&(u=i.getMaxPrecision(S.precision),u!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",u,"instead."));const K=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,q=K!==void 0?K.length:0;let Mt=0;V.morphAttributes.position!==void 0&&(Mt=1),V.morphAttributes.normal!==void 0&&(Mt=2),V.morphAttributes.color!==void 0&&(Mt=3);let j,st,$,vt;if(J){const ot=rn[J];j=ot.vertexShader,st=ot.fragmentShader}else j=S.vertexShader,st=S.fragmentShader,c.update(S),$=c.getVertexShaderID(S),vt=c.getFragmentShaderID(S);const mt=s.getRenderTarget(),Rt=tt.isInstancedMesh===!0,Ut=tt.isBatchedMesh===!0,ut=!!S.map,Ct=!!S.matcap,D=!!X,_t=!!S.aoMap,lt=!!S.lightMap,xt=!!S.bumpMap,dt=!!S.normalMap,Ot=!!S.displacementMap,ct=!!S.emissiveMap,A=!!S.metalnessMap,E=!!S.roughnessMap,Y=S.anisotropy>0,yt=S.clearcoat>0,gt=S.iridescence>0,at=S.sheen>0,kt=S.transmission>0,Lt=Y&&!!S.anisotropyMap,Pt=yt&&!!S.clearcoatMap,Xt=yt&&!!S.clearcoatNormalMap,Nt=yt&&!!S.clearcoatRoughnessMap,Tt=gt&&!!S.iridescenceMap,Qt=gt&&!!S.iridescenceThicknessMap,Jt=at&&!!S.sheenColorMap,ht=at&&!!S.sheenRoughnessMap,bt=!!S.specularMap,H=!!S.specularColorMap,Ft=!!S.specularIntensityMap,Wt=kt&&!!S.transmissionMap,Zt=kt&&!!S.thicknessMap,It=!!S.gradientMap,wt=!!S.alphaMap,b=S.alphaTest>0,z=!!S.alphaHash,et=!!S.extensions,Vt=!!V.attributes.uv1,ft=!!V.attributes.uv2,Dt=!!V.attributes.uv3;let St=Dn;return S.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(St=s.toneMapping),{isWebGL2:d,shaderID:J,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:st,defines:S.defines,customVertexShaderID:$,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:u,batching:Ut,instancing:Rt,instancingColor:Rt&&tt.instanceColor!==null,supportsVertexTextures:l,outputColorSpace:mt===null?s.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:vn,map:ut,matcap:Ct,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:nt,aoMap:_t,lightMap:lt,bumpMap:xt,normalMap:dt,displacementMap:l&&Ot,emissiveMap:ct,normalMapObjectSpace:dt&&S.normalMapType===fl,normalMapTangentSpace:dt&&S.normalMapType===Wa,metalnessMap:A,roughnessMap:E,anisotropy:Y,anisotropyMap:Lt,clearcoat:yt,clearcoatMap:Pt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:Nt,iridescence:gt,iridescenceMap:Tt,iridescenceThicknessMap:Qt,sheen:at,sheenColorMap:Jt,sheenRoughnessMap:ht,specularMap:bt,specularColorMap:H,specularIntensityMap:Ft,transmission:kt,transmissionMap:Wt,thicknessMap:Zt,gradientMap:It,opaque:S.transparent===!1&&S.blending===bi,alphaMap:wt,alphaTest:b,alphaHash:z,combine:S.combine,mapUv:ut&&v(S.map.channel),aoMapUv:_t&&v(S.aoMap.channel),lightMapUv:lt&&v(S.lightMap.channel),bumpMapUv:xt&&v(S.bumpMap.channel),normalMapUv:dt&&v(S.normalMap.channel),displacementMapUv:Ot&&v(S.displacementMap.channel),emissiveMapUv:ct&&v(S.emissiveMap.channel),metalnessMapUv:A&&v(S.metalnessMap.channel),roughnessMapUv:E&&v(S.roughnessMap.channel),anisotropyMapUv:Lt&&v(S.anisotropyMap.channel),clearcoatMapUv:Pt&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Nt&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:Qt&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:Jt&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:ht&&v(S.sheenRoughnessMap.channel),specularMapUv:bt&&v(S.specularMap.channel),specularColorMapUv:H&&v(S.specularColorMap.channel),specularIntensityMapUv:Ft&&v(S.specularIntensityMap.channel),transmissionMapUv:Wt&&v(S.transmissionMap.channel),thicknessMapUv:Zt&&v(S.thicknessMap.channel),alphaMapUv:wt&&v(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(dt||Y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUv1s:Vt,vertexUv2s:ft,vertexUv3s:Dt,pointsUvs:tt.isPoints===!0&&!!V.attributes.uv&&(ut||wt),fog:!!O,useFog:S.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:tt.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:Mt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:St,useLegacyLights:s._useLegacyLights,decodeVideoTexture:ut&&S.map.isVideoTexture===!0&&ue.getTransfer(S.map.colorSpace)===me,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ye,flipSided:S.side===ke,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:et&&S.extensions.derivatives===!0,extensionFragDepth:et&&S.extensions.fragDepth===!0,extensionDrawBuffers:et&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:et&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:et&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const T in S.defines)x.push(T),x.push(S.defines[T]);return S.isRawShaderMaterial===!1&&(w(x,S),_(x,S),x.push(s.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function _(S,x){r.disableAll(),x.isWebGL2&&r.enable(0),x.supportsVertexTextures&&r.enable(1),x.instancing&&r.enable(2),x.instancingColor&&r.enable(3),x.matcap&&r.enable(4),x.envMap&&r.enable(5),x.normalMapObjectSpace&&r.enable(6),x.normalMapTangentSpace&&r.enable(7),x.clearcoat&&r.enable(8),x.iridescence&&r.enable(9),x.alphaTest&&r.enable(10),x.vertexColors&&r.enable(11),x.vertexAlphas&&r.enable(12),x.vertexUv1s&&r.enable(13),x.vertexUv2s&&r.enable(14),x.vertexUv3s&&r.enable(15),x.vertexTangents&&r.enable(16),x.anisotropy&&r.enable(17),x.alphaHash&&r.enable(18),x.batching&&r.enable(19),S.push(r.mask),r.disableAll(),x.fog&&r.enable(0),x.useFog&&r.enable(1),x.flatShading&&r.enable(2),x.logarithmicDepthBuffer&&r.enable(3),x.skinning&&r.enable(4),x.morphTargets&&r.enable(5),x.morphNormals&&r.enable(6),x.morphColors&&r.enable(7),x.premultipliedAlpha&&r.enable(8),x.shadowMapEnabled&&r.enable(9),x.useLegacyLights&&r.enable(10),x.doubleSided&&r.enable(11),x.flipSided&&r.enable(12),x.useDepthPacking&&r.enable(13),x.dithering&&r.enable(14),x.transmission&&r.enable(15),x.sheen&&r.enable(16),x.opaque&&r.enable(17),x.pointsUvs&&r.enable(18),x.decodeVideoTexture&&r.enable(19),S.push(r.mask)}function y(S){const x=M[S.type];let T;if(x){const G=rn[x];T=Ql.clone(G.uniforms)}else T=S.uniforms;return T}function P(S,x){let T;for(let G=0,tt=h.length;G<tt;G++){const O=h[G];if(O.cacheKey===x){T=O,++T.usedTimes;break}}return T===void 0&&(T=new p0(s,x,S,o),h.push(T)),T}function C(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function L(S){c.remove(S)}function k(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:k}}function w0(){let s=new WeakMap;function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function e(o){s.delete(o)}function n(o,a,r){s.get(o)[a]=r}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function v0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ma(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function _a(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function a(f,l,u,M,v,g){let p=s[t];return p===void 0?(p={id:f.id,object:f,geometry:l,material:u,groupOrder:M,renderOrder:f.renderOrder,z:v,group:g},s[t]=p):(p.id=f.id,p.object=f,p.geometry=l,p.material=u,p.groupOrder=M,p.renderOrder=f.renderOrder,p.z=v,p.group=g),t++,p}function r(f,l,u,M,v,g){const p=a(f,l,u,M,v,g);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):e.push(p)}function c(f,l,u,M,v,g){const p=a(f,l,u,M,v,g);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):e.unshift(p)}function h(f,l){e.length>1&&e.sort(f||v0),n.length>1&&n.sort(l||Ma),i.length>1&&i.sort(l||Ma)}function d(){for(let f=t,l=s.length;f<l;f++){const u=s[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:r,unshift:c,finish:d,sort:h}}function x0(){let s=new WeakMap;function t(n,i){const o=s.get(n);let a;return o===void 0?(a=new _a,s.set(n,[a])):i>=o.length?(a=new _a,o.push(a)):a=o[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function S0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new ce};break;case"SpotLight":e={position:new F,direction:new F,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new ce,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":e={color:new ce,position:new F,halfWidth:new F,halfHeight:new F};break}return s[t.id]=e,e}}}function y0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let b0=0;function E0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function T0(s,t){const e=new S0,n=y0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new F);const o=new F,a=new xe,r=new xe;function c(d,f){let l=0,u=0,M=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let v=0,g=0,p=0,w=0,_=0,y=0,P=0,C=0,L=0,k=0,S=0;d.sort(E0);const x=f===!0?Math.PI:1;for(let G=0,tt=d.length;G<tt;G++){const O=d[G],V=O.color,W=O.intensity,X=O.distance,nt=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)l+=V.r*W*x,u+=V.g*W*x,M+=V.b*W*x;else if(O.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(O.sh.coefficients[J],W);S++}else if(O.isDirectionalLight){const J=e.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity*x),O.castShadow){const K=O.shadow,q=n.get(O);q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,i.directionalShadow[v]=q,i.directionalShadowMap[v]=nt,i.directionalShadowMatrix[v]=O.shadow.matrix,y++}i.directional[v]=J,v++}else if(O.isSpotLight){const J=e.get(O);J.position.setFromMatrixPosition(O.matrixWorld),J.color.copy(V).multiplyScalar(W*x),J.distance=X,J.coneCos=Math.cos(O.angle),J.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),J.decay=O.decay,i.spot[p]=J;const K=O.shadow;if(O.map&&(i.spotLightMap[L]=O.map,L++,K.updateMatrices(O),O.castShadow&&k++),i.spotLightMatrix[p]=K.matrix,O.castShadow){const q=n.get(O);q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,i.spotShadow[p]=q,i.spotShadowMap[p]=nt,C++}p++}else if(O.isRectAreaLight){const J=e.get(O);J.color.copy(V).multiplyScalar(W),J.halfWidth.set(O.width*.5,0,0),J.halfHeight.set(0,O.height*.5,0),i.rectArea[w]=J,w++}else if(O.isPointLight){const J=e.get(O);if(J.color.copy(O.color).multiplyScalar(O.intensity*x),J.distance=O.distance,J.decay=O.decay,O.castShadow){const K=O.shadow,q=n.get(O);q.shadowBias=K.bias,q.shadowNormalBias=K.normalBias,q.shadowRadius=K.radius,q.shadowMapSize=K.mapSize,q.shadowCameraNear=K.camera.near,q.shadowCameraFar=K.camera.far,i.pointShadow[g]=q,i.pointShadowMap[g]=nt,i.pointShadowMatrix[g]=O.shadow.matrix,P++}i.point[g]=J,g++}else if(O.isHemisphereLight){const J=e.get(O);J.skyColor.copy(O.color).multiplyScalar(W*x),J.groundColor.copy(O.groundColor).multiplyScalar(W*x),i.hemi[_]=J,_++}}w>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_FLOAT_1,i.rectAreaLTC2=zt.LTC_FLOAT_2):(i.rectAreaLTC1=zt.LTC_HALF_1,i.rectAreaLTC2=zt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_FLOAT_1,i.rectAreaLTC2=zt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=zt.LTC_HALF_1,i.rectAreaLTC2=zt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=u,i.ambient[2]=M;const T=i.hash;(T.directionalLength!==v||T.pointLength!==g||T.spotLength!==p||T.rectAreaLength!==w||T.hemiLength!==_||T.numDirectionalShadows!==y||T.numPointShadows!==P||T.numSpotShadows!==C||T.numSpotMaps!==L||T.numLightProbes!==S)&&(i.directional.length=v,i.spot.length=p,i.rectArea.length=w,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=P,i.pointShadowMap.length=P,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=P,i.spotLightMatrix.length=C+L-k,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=S,T.directionalLength=v,T.pointLength=g,T.spotLength=p,T.rectAreaLength=w,T.hemiLength=_,T.numDirectionalShadows=y,T.numPointShadows=P,T.numSpotShadows=C,T.numSpotMaps=L,T.numLightProbes=S,i.version=b0++)}function h(d,f){let l=0,u=0,M=0,v=0,g=0;const p=f.matrixWorldInverse;for(let w=0,_=d.length;w<_;w++){const y=d[w];if(y.isDirectionalLight){const P=i.directional[l];P.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),l++}else if(y.isSpotLight){const P=i.spot[M];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(p),P.direction.setFromMatrixPosition(y.matrixWorld),o.setFromMatrixPosition(y.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(p),M++}else if(y.isRectAreaLight){const P=i.rectArea[v];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(p),r.identity(),a.copy(y.matrixWorld),a.premultiply(p),r.extractRotation(a),P.halfWidth.set(y.width*.5,0,0),P.halfHeight.set(0,y.height*.5,0),P.halfWidth.applyMatrix4(r),P.halfHeight.applyMatrix4(r),v++}else if(y.isPointLight){const P=i.point[u];P.position.setFromMatrixPosition(y.matrixWorld),P.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const P=i.hemi[g];P.direction.setFromMatrixPosition(y.matrixWorld),P.direction.transformDirection(p),g++}}}return{setup:c,setupView:h,state:i}}function wa(s,t){const e=new T0(s,t),n=[],i=[];function o(){n.length=0,i.length=0}function a(f){n.push(f)}function r(f){i.push(f)}function c(f){e.setup(n,f)}function h(f){e.setupView(n,f)}return{init:o,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:r}}function A0(s,t){let e=new WeakMap;function n(o,a=0){const r=e.get(o);let c;return r===void 0?(c=new wa(s,t),e.set(o,[c])):a>=r.length?(c=new wa(s,t),r.push(c)):c=r[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class P0 extends Ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R0 extends Ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C0=`void main() {
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
}`;function I0(s,t,e){let n=new Ho;const i=new Bt,o=new Bt,a=new ge,r=new P0({depthPacking:ul}),c=new R0,h={},d=e.maxTextureSize,f={[Nn]:ke,[ke]:Nn,[ye]:ye},l=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:C0,fragmentShader:L0}),u=l.clone();u.defines.HORIZONTAL_PASS=1;const M=new De;M.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new m(M,l),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let p=this.type;this.render=function(C,L,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const S=s.getRenderTarget(),x=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),G=s.state;G.setBlending(In),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const tt=p!==Mn&&this.type===Mn,O=p===Mn&&this.type!==Mn;for(let V=0,W=C.length;V<W;V++){const X=C[V],nt=X.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;i.copy(nt.mapSize);const J=nt.getFrameExtents();if(i.multiply(J),o.copy(nt.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/J.x),i.x=o.x*J.x,nt.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/J.y),i.y=o.y*J.y,nt.mapSize.y=o.y)),nt.map===null||tt===!0||O===!0){const q=this.type!==Mn?{minFilter:Be,magFilter:Be}:{};nt.map!==null&&nt.map.dispose(),nt.map=new $n(i.x,i.y,q),nt.map.texture.name=X.name+".shadowMap",nt.camera.updateProjectionMatrix()}s.setRenderTarget(nt.map),s.clear();const K=nt.getViewportCount();for(let q=0;q<K;q++){const Mt=nt.getViewport(q);a.set(o.x*Mt.x,o.y*Mt.y,o.x*Mt.z,o.y*Mt.w),G.viewport(a),nt.updateMatrices(X,q),n=nt.getFrustum(),y(L,k,nt.camera,X,this.type)}nt.isPointLightShadow!==!0&&this.type===Mn&&w(nt,k),nt.needsUpdate=!1}p=this.type,g.needsUpdate=!1,s.setRenderTarget(S,x,T)};function w(C,L){const k=t.update(v);l.defines.VSM_SAMPLES!==C.blurSamples&&(l.defines.VSM_SAMPLES=C.blurSamples,u.defines.VSM_SAMPLES=C.blurSamples,l.needsUpdate=!0,u.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new $n(i.x,i.y)),l.uniforms.shadow_pass.value=C.map.texture,l.uniforms.resolution.value=C.mapSize,l.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(L,null,k,l,v,null),u.uniforms.shadow_pass.value=C.mapPass.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(L,null,k,u,v,null)}function _(C,L,k,S){let x=null;const T=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)x=T;else if(x=k.isPointLight===!0?c:r,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const G=x.uuid,tt=L.uuid;let O=h[G];O===void 0&&(O={},h[G]=O);let V=O[tt];V===void 0&&(V=x.clone(),O[tt]=V,L.addEventListener("dispose",P)),x=V}if(x.visible=L.visible,x.wireframe=L.wireframe,S===Mn?x.side=L.shadowSide!==null?L.shadowSide:L.side:x.side=L.shadowSide!==null?L.shadowSide:f[L.side],x.alphaMap=L.alphaMap,x.alphaTest=L.alphaTest,x.map=L.map,x.clipShadows=L.clipShadows,x.clippingPlanes=L.clippingPlanes,x.clipIntersection=L.clipIntersection,x.displacementMap=L.displacementMap,x.displacementScale=L.displacementScale,x.displacementBias=L.displacementBias,x.wireframeLinewidth=L.wireframeLinewidth,x.linewidth=L.linewidth,k.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=s.properties.get(x);G.light=k}return x}function y(C,L,k,S,x){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Mn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);const tt=t.update(C),O=C.material;if(Array.isArray(O)){const V=tt.groups;for(let W=0,X=V.length;W<X;W++){const nt=V[W],J=O[nt.materialIndex];if(J&&J.visible){const K=_(C,J,S,x);C.onBeforeShadow(s,C,L,k,tt,K,nt),s.renderBufferDirect(k,null,tt,K,C,nt),C.onAfterShadow(s,C,L,k,tt,K,nt)}}}else if(O.visible){const V=_(C,O,S,x);C.onBeforeShadow(s,C,L,k,tt,V,null),s.renderBufferDirect(k,null,tt,V,C,null),C.onAfterShadow(s,C,L,k,tt,V,null)}}const G=C.children;for(let tt=0,O=G.length;tt<O;tt++)y(G[tt],L,k,S,x)}function P(C){C.target.removeEventListener("dispose",P);for(const k in h){const S=h[k],x=C.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}function D0(s,t,e){const n=e.isWebGL2;function i(){let b=!1;const z=new ge;let et=null;const Vt=new ge(0,0,0,0);return{setMask:function(ft){et!==ft&&!b&&(s.colorMask(ft,ft,ft,ft),et=ft)},setLocked:function(ft){b=ft},setClear:function(ft,Dt,St,Et,ot){ot===!0&&(ft*=Et,Dt*=Et,St*=Et),z.set(ft,Dt,St,Et),Vt.equals(z)===!1&&(s.clearColor(ft,Dt,St,Et),Vt.copy(z))},reset:function(){b=!1,et=null,Vt.set(-1,0,0,0)}}}function o(){let b=!1,z=null,et=null,Vt=null;return{setTest:function(ft){ft?Ut(s.DEPTH_TEST):ut(s.DEPTH_TEST)},setMask:function(ft){z!==ft&&!b&&(s.depthMask(ft),z=ft)},setFunc:function(ft){if(et!==ft){switch(ft){case Vc:s.depthFunc(s.NEVER);break;case Hc:s.depthFunc(s.ALWAYS);break;case Wc:s.depthFunc(s.LESS);break;case As:s.depthFunc(s.LEQUAL);break;case Xc:s.depthFunc(s.EQUAL);break;case qc:s.depthFunc(s.GEQUAL);break;case Yc:s.depthFunc(s.GREATER);break;case Zc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=ft}},setLocked:function(ft){b=ft},setClear:function(ft){Vt!==ft&&(s.clearDepth(ft),Vt=ft)},reset:function(){b=!1,z=null,et=null,Vt=null}}}function a(){let b=!1,z=null,et=null,Vt=null,ft=null,Dt=null,St=null,Et=null,ot=null;return{setTest:function(Gt){b||(Gt?Ut(s.STENCIL_TEST):ut(s.STENCIL_TEST))},setMask:function(Gt){z!==Gt&&!b&&(s.stencilMask(Gt),z=Gt)},setFunc:function(Gt,Yt,ee){(et!==Gt||Vt!==Yt||ft!==ee)&&(s.stencilFunc(Gt,Yt,ee),et=Gt,Vt=Yt,ft=ee)},setOp:function(Gt,Yt,ee){(Dt!==Gt||St!==Yt||Et!==ee)&&(s.stencilOp(Gt,Yt,ee),Dt=Gt,St=Yt,Et=ee)},setLocked:function(Gt){b=Gt},setClear:function(Gt){ot!==Gt&&(s.clearStencil(Gt),ot=Gt)},reset:function(){b=!1,z=null,et=null,Vt=null,ft=null,Dt=null,St=null,Et=null,ot=null}}}const r=new i,c=new o,h=new a,d=new WeakMap,f=new WeakMap;let l={},u={},M=new WeakMap,v=[],g=null,p=!1,w=null,_=null,y=null,P=null,C=null,L=null,k=null,S=new ce(0,0,0),x=0,T=!1,G=null,tt=null,O=null,V=null,W=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,J=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(K)[1]),nt=J>=1):K.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),nt=J>=2);let q=null,Mt={};const j=s.getParameter(s.SCISSOR_BOX),st=s.getParameter(s.VIEWPORT),$=new ge().fromArray(j),vt=new ge().fromArray(st);function mt(b,z,et,Vt){const ft=new Uint8Array(4),Dt=s.createTexture();s.bindTexture(b,Dt),s.texParameteri(b,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(b,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let St=0;St<et;St++)n&&(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)?s.texImage3D(z,0,s.RGBA,1,1,Vt,0,s.RGBA,s.UNSIGNED_BYTE,ft):s.texImage2D(z+St,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ft);return Dt}const Rt={};Rt[s.TEXTURE_2D]=mt(s.TEXTURE_2D,s.TEXTURE_2D,1),Rt[s.TEXTURE_CUBE_MAP]=mt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Rt[s.TEXTURE_2D_ARRAY]=mt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Rt[s.TEXTURE_3D]=mt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),r.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Ut(s.DEPTH_TEST),c.setFunc(As),ct(!1),A(er),Ut(s.CULL_FACE),dt(In);function Ut(b){l[b]!==!0&&(s.enable(b),l[b]=!0)}function ut(b){l[b]!==!1&&(s.disable(b),l[b]=!1)}function Ct(b,z){return u[b]!==z?(s.bindFramebuffer(b,z),u[b]=z,n&&(b===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=z),b===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=z)),!0):!1}function D(b,z){let et=v,Vt=!1;if(b)if(et=M.get(z),et===void 0&&(et=[],M.set(z,et)),b.isWebGLMultipleRenderTargets){const ft=b.texture;if(et.length!==ft.length||et[0]!==s.COLOR_ATTACHMENT0){for(let Dt=0,St=ft.length;Dt<St;Dt++)et[Dt]=s.COLOR_ATTACHMENT0+Dt;et.length=ft.length,Vt=!0}}else et[0]!==s.COLOR_ATTACHMENT0&&(et[0]=s.COLOR_ATTACHMENT0,Vt=!0);else et[0]!==s.BACK&&(et[0]=s.BACK,Vt=!0);Vt&&(e.isWebGL2?s.drawBuffers(et):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(et))}function _t(b){return g!==b?(s.useProgram(b),g=b,!0):!1}const lt={[qn]:s.FUNC_ADD,[Ac]:s.FUNC_SUBTRACT,[Pc]:s.FUNC_REVERSE_SUBTRACT};if(n)lt[sr]=s.MIN,lt[or]=s.MAX;else{const b=t.get("EXT_blend_minmax");b!==null&&(lt[sr]=b.MIN_EXT,lt[or]=b.MAX_EXT)}const xt={[Rc]:s.ZERO,[Cc]:s.ONE,[Lc]:s.SRC_COLOR,[Po]:s.SRC_ALPHA,[Oc]:s.SRC_ALPHA_SATURATE,[Nc]:s.DST_COLOR,[Dc]:s.DST_ALPHA,[Ic]:s.ONE_MINUS_SRC_COLOR,[Ro]:s.ONE_MINUS_SRC_ALPHA,[Fc]:s.ONE_MINUS_DST_COLOR,[Uc]:s.ONE_MINUS_DST_ALPHA,[Gc]:s.CONSTANT_COLOR,[Bc]:s.ONE_MINUS_CONSTANT_COLOR,[kc]:s.CONSTANT_ALPHA,[zc]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(b,z,et,Vt,ft,Dt,St,Et,ot,Gt){if(b===In){p===!0&&(ut(s.BLEND),p=!1);return}if(p===!1&&(Ut(s.BLEND),p=!0),b!==Tc){if(b!==w||Gt!==T){if((_!==qn||C!==qn)&&(s.blendEquation(s.FUNC_ADD),_=qn,C=qn),Gt)switch(b){case bi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.ONE,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case nr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ir:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,P=null,L=null,k=null,S.set(0,0,0),x=0,w=b,T=Gt}return}ft=ft||z,Dt=Dt||et,St=St||Vt,(z!==_||ft!==C)&&(s.blendEquationSeparate(lt[z],lt[ft]),_=z,C=ft),(et!==y||Vt!==P||Dt!==L||St!==k)&&(s.blendFuncSeparate(xt[et],xt[Vt],xt[Dt],xt[St]),y=et,P=Vt,L=Dt,k=St),(Et.equals(S)===!1||ot!==x)&&(s.blendColor(Et.r,Et.g,Et.b,ot),S.copy(Et),x=ot),w=b,T=!1}function Ot(b,z){b.side===ye?ut(s.CULL_FACE):Ut(s.CULL_FACE);let et=b.side===ke;z&&(et=!et),ct(et),b.blending===bi&&b.transparent===!1?dt(In):dt(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),c.setFunc(b.depthFunc),c.setTest(b.depthTest),c.setMask(b.depthWrite),r.setMask(b.colorWrite);const Vt=b.stencilWrite;h.setTest(Vt),Vt&&(h.setMask(b.stencilWriteMask),h.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),h.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),Y(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?Ut(s.SAMPLE_ALPHA_TO_COVERAGE):ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function ct(b){G!==b&&(b?s.frontFace(s.CW):s.frontFace(s.CCW),G=b)}function A(b){b!==bc?(Ut(s.CULL_FACE),b!==tt&&(b===er?s.cullFace(s.BACK):b===Ec?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ut(s.CULL_FACE),tt=b}function E(b){b!==O&&(nt&&s.lineWidth(b),O=b)}function Y(b,z,et){b?(Ut(s.POLYGON_OFFSET_FILL),(V!==z||W!==et)&&(s.polygonOffset(z,et),V=z,W=et)):ut(s.POLYGON_OFFSET_FILL)}function yt(b){b?Ut(s.SCISSOR_TEST):ut(s.SCISSOR_TEST)}function gt(b){b===void 0&&(b=s.TEXTURE0+X-1),q!==b&&(s.activeTexture(b),q=b)}function at(b,z,et){et===void 0&&(q===null?et=s.TEXTURE0+X-1:et=q);let Vt=Mt[et];Vt===void 0&&(Vt={type:void 0,texture:void 0},Mt[et]=Vt),(Vt.type!==b||Vt.texture!==z)&&(q!==et&&(s.activeTexture(et),q=et),s.bindTexture(b,z||Rt[b]),Vt.type=b,Vt.texture=z)}function kt(){const b=Mt[q];b!==void 0&&b.type!==void 0&&(s.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function Lt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Pt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Xt(){try{s.texSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Nt(){try{s.texSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Tt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Qt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ht(){try{s.texStorage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function bt(){try{s.texImage2D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function H(){try{s.texImage3D.apply(s,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ft(b){$.equals(b)===!1&&(s.scissor(b.x,b.y,b.z,b.w),$.copy(b))}function Wt(b){vt.equals(b)===!1&&(s.viewport(b.x,b.y,b.z,b.w),vt.copy(b))}function Zt(b,z){let et=f.get(z);et===void 0&&(et=new WeakMap,f.set(z,et));let Vt=et.get(b);Vt===void 0&&(Vt=s.getUniformBlockIndex(z,b.name),et.set(b,Vt))}function It(b,z){const Vt=f.get(z).get(b);d.get(z)!==Vt&&(s.uniformBlockBinding(z,Vt,b.__bindingPointIndex),d.set(z,Vt))}function wt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},q=null,Mt={},u={},M=new WeakMap,v=[],g=null,p=!1,w=null,_=null,y=null,P=null,C=null,L=null,k=null,S=new ce(0,0,0),x=0,T=!1,G=null,tt=null,O=null,V=null,W=null,$.set(0,0,s.canvas.width,s.canvas.height),vt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),c.reset(),h.reset()}return{buffers:{color:r,depth:c,stencil:h},enable:Ut,disable:ut,bindFramebuffer:Ct,drawBuffers:D,useProgram:_t,setBlending:dt,setMaterial:Ot,setFlipSided:ct,setCullFace:A,setLineWidth:E,setPolygonOffset:Y,setScissorTest:yt,activeTexture:gt,bindTexture:at,unbindTexture:kt,compressedTexImage2D:Lt,compressedTexImage3D:Pt,texImage2D:bt,texImage3D:H,updateUBOMapping:Zt,uniformBlockBinding:It,texStorage2D:Jt,texStorage3D:ht,texSubImage2D:Xt,texSubImage3D:Nt,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Qt,scissor:Ft,viewport:Wt,reset:wt}}function U0(s,t,e,n,i,o,a){const r=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let f;const l=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,E){return u?new OffscreenCanvas(A,E):Ds("canvas")}function v(A,E,Y,yt){let gt=1;if((A.width>yt||A.height>yt)&&(gt=yt/Math.max(A.width,A.height)),gt<1||E===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const at=E?Is:Math.floor,kt=at(gt*A.width),Lt=at(gt*A.height);f===void 0&&(f=M(kt,Lt));const Pt=Y?M(kt,Lt):f;return Pt.width=kt,Pt.height=Lt,Pt.getContext("2d").drawImage(A,0,0,kt,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+kt+"x"+Lt+")."),Pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function g(A){return Uo(A.width)&&Uo(A.height)}function p(A){return r?!1:A.wrapS!==sn||A.wrapT!==sn||A.minFilter!==Be&&A.minFilter!==je}function w(A,E){return A.generateMipmaps&&E&&A.minFilter!==Be&&A.minFilter!==je}function _(A){s.generateMipmap(A)}function y(A,E,Y,yt,gt=!1){if(r===!1)return E;if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at=E;if(E===s.RED&&(Y===s.FLOAT&&(at=s.R32F),Y===s.HALF_FLOAT&&(at=s.R16F),Y===s.UNSIGNED_BYTE&&(at=s.R8)),E===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(at=s.R8UI),Y===s.UNSIGNED_SHORT&&(at=s.R16UI),Y===s.UNSIGNED_INT&&(at=s.R32UI),Y===s.BYTE&&(at=s.R8I),Y===s.SHORT&&(at=s.R16I),Y===s.INT&&(at=s.R32I)),E===s.RG&&(Y===s.FLOAT&&(at=s.RG32F),Y===s.HALF_FLOAT&&(at=s.RG16F),Y===s.UNSIGNED_BYTE&&(at=s.RG8)),E===s.RGBA){const kt=gt?Ps:ue.getTransfer(yt);Y===s.FLOAT&&(at=s.RGBA32F),Y===s.HALF_FLOAT&&(at=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(at=kt===me?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(at=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(at=s.RGB5_A1)}return(at===s.R16F||at===s.R32F||at===s.RG16F||at===s.RG32F||at===s.RGBA16F||at===s.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function P(A,E,Y){return w(A,Y)===!0||A.isFramebufferTexture&&A.minFilter!==Be&&A.minFilter!==je?Math.log2(Math.max(E.width,E.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?E.mipmaps.length:1}function C(A){return A===Be||A===rr||A===qs?s.NEAREST:s.LINEAR}function L(A){const E=A.target;E.removeEventListener("dispose",L),S(E),E.isVideoTexture&&d.delete(E)}function k(A){const E=A.target;E.removeEventListener("dispose",k),T(E)}function S(A){const E=n.get(A);if(E.__webglInit===void 0)return;const Y=A.source,yt=l.get(Y);if(yt){const gt=yt[E.__cacheKey];gt.usedTimes--,gt.usedTimes===0&&x(A),Object.keys(yt).length===0&&l.delete(Y)}n.remove(A)}function x(A){const E=n.get(A);s.deleteTexture(E.__webglTexture);const Y=A.source,yt=l.get(Y);delete yt[E.__cacheKey],a.memory.textures--}function T(A){const E=A.texture,Y=n.get(A),yt=n.get(E);if(yt.__webglTexture!==void 0&&(s.deleteTexture(yt.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(Y.__webglFramebuffer[gt]))for(let at=0;at<Y.__webglFramebuffer[gt].length;at++)s.deleteFramebuffer(Y.__webglFramebuffer[gt][at]);else s.deleteFramebuffer(Y.__webglFramebuffer[gt]);Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[gt])}else{if(Array.isArray(Y.__webglFramebuffer))for(let gt=0;gt<Y.__webglFramebuffer.length;gt++)s.deleteFramebuffer(Y.__webglFramebuffer[gt]);else s.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let gt=0;gt<Y.__webglColorRenderbuffer.length;gt++)Y.__webglColorRenderbuffer[gt]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[gt]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let gt=0,at=E.length;gt<at;gt++){const kt=n.get(E[gt]);kt.__webglTexture&&(s.deleteTexture(kt.__webglTexture),a.memory.textures--),n.remove(E[gt])}n.remove(E),n.remove(A)}let G=0;function tt(){G=0}function O(){const A=G;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),G+=1,A}function V(A){const E=[];return E.push(A.wrapS),E.push(A.wrapT),E.push(A.wrapR||0),E.push(A.magFilter),E.push(A.minFilter),E.push(A.anisotropy),E.push(A.internalFormat),E.push(A.format),E.push(A.type),E.push(A.generateMipmaps),E.push(A.premultiplyAlpha),E.push(A.flipY),E.push(A.unpackAlignment),E.push(A.colorSpace),E.join()}function W(A,E){const Y=n.get(A);if(A.isVideoTexture&&Ot(A),A.isRenderTargetTexture===!1&&A.version>0&&Y.__version!==A.version){const yt=A.image;if(yt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(yt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(Y,A,E);return}}e.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+E)}function X(A,E){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){$(Y,A,E);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+E)}function nt(A,E){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){$(Y,A,E);return}e.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+E)}function J(A,E){const Y=n.get(A);if(A.version>0&&Y.__version!==A.version){vt(Y,A,E);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+E)}const K={[pe]:s.REPEAT,[sn]:s.CLAMP_TO_EDGE,[Io]:s.MIRRORED_REPEAT},q={[Be]:s.NEAREST,[rr]:s.NEAREST_MIPMAP_NEAREST,[qs]:s.NEAREST_MIPMAP_LINEAR,[je]:s.LINEAR,[nl]:s.LINEAR_MIPMAP_NEAREST,[Zi]:s.LINEAR_MIPMAP_LINEAR},Mt={[pl]:s.NEVER,[vl]:s.ALWAYS,[ml]:s.LESS,[Xa]:s.LEQUAL,[gl]:s.EQUAL,[wl]:s.GEQUAL,[Ml]:s.GREATER,[_l]:s.NOTEQUAL};function j(A,E,Y){if(Y?(s.texParameteri(A,s.TEXTURE_WRAP_S,K[E.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,K[E.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,K[E.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,q[E.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,q[E.minFilter])):(s.texParameteri(A,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(A,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(E.wrapS!==sn||E.wrapT!==sn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(A,s.TEXTURE_MAG_FILTER,C(E.magFilter)),s.texParameteri(A,s.TEXTURE_MIN_FILTER,C(E.minFilter)),E.minFilter!==Be&&E.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Mt[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const yt=t.get("EXT_texture_filter_anisotropic");if(E.magFilter===Be||E.minFilter!==qs&&E.minFilter!==Zi||E.type===Ln&&t.has("OES_texture_float_linear")===!1||r===!1&&E.type===Ki&&t.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(s.texParameterf(A,yt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function st(A,E){let Y=!1;A.__webglInit===void 0&&(A.__webglInit=!0,E.addEventListener("dispose",L));const yt=E.source;let gt=l.get(yt);gt===void 0&&(gt={},l.set(yt,gt));const at=V(E);if(at!==A.__cacheKey){gt[at]===void 0&&(gt[at]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),gt[at].usedTimes++;const kt=gt[A.__cacheKey];kt!==void 0&&(gt[A.__cacheKey].usedTimes--,kt.usedTimes===0&&x(E)),A.__cacheKey=at,A.__webglTexture=gt[at].texture}return Y}function $(A,E,Y){let yt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(yt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(yt=s.TEXTURE_3D);const gt=st(A,E),at=E.source;e.bindTexture(yt,A.__webglTexture,s.TEXTURE0+Y);const kt=n.get(at);if(at.version!==kt.__version||gt===!0){e.activeTexture(s.TEXTURE0+Y);const Lt=ue.getPrimaries(ue.workingColorSpace),Pt=E.colorSpace===$e?null:ue.getPrimaries(E.colorSpace),Xt=E.colorSpace===$e||Lt===Pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const Nt=p(E)&&g(E.image)===!1;let Tt=v(E.image,Nt,!1,i.maxTextureSize);Tt=ct(E,Tt);const Qt=g(Tt)||r,Jt=o.convert(E.format,E.colorSpace);let ht=o.convert(E.type),bt=y(E.internalFormat,Jt,ht,E.colorSpace,E.isVideoTexture);j(yt,E,Qt);let H;const Ft=E.mipmaps,Wt=r&&E.isVideoTexture!==!0&&bt!==Va,Zt=kt.__version===void 0||gt===!0,It=P(E,Tt,Qt);if(E.isDepthTexture)bt=s.DEPTH_COMPONENT,r?E.type===Ln?bt=s.DEPTH_COMPONENT32F:E.type===Cn?bt=s.DEPTH_COMPONENT24:E.type===Zn?bt=s.DEPTH24_STENCIL8:bt=s.DEPTH_COMPONENT16:E.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Kn&&bt===s.DEPTH_COMPONENT&&E.type!==ko&&E.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Cn,ht=o.convert(E.type)),E.format===Pi&&bt===s.DEPTH_COMPONENT&&(bt=s.DEPTH_STENCIL,E.type!==Zn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Zn,ht=o.convert(E.type))),Zt&&(Wt?e.texStorage2D(s.TEXTURE_2D,1,bt,Tt.width,Tt.height):e.texImage2D(s.TEXTURE_2D,0,bt,Tt.width,Tt.height,0,Jt,ht,null));else if(E.isDataTexture)if(Ft.length>0&&Qt){Wt&&Zt&&e.texStorage2D(s.TEXTURE_2D,It,bt,Ft[0].width,Ft[0].height);for(let wt=0,b=Ft.length;wt<b;wt++)H=Ft[wt],Wt?e.texSubImage2D(s.TEXTURE_2D,wt,0,0,H.width,H.height,Jt,ht,H.data):e.texImage2D(s.TEXTURE_2D,wt,bt,H.width,H.height,0,Jt,ht,H.data);E.generateMipmaps=!1}else Wt?(Zt&&e.texStorage2D(s.TEXTURE_2D,It,bt,Tt.width,Tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Jt,ht,Tt.data)):e.texImage2D(s.TEXTURE_2D,0,bt,Tt.width,Tt.height,0,Jt,ht,Tt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Wt&&Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,bt,Ft[0].width,Ft[0].height,Tt.depth);for(let wt=0,b=Ft.length;wt<b;wt++)H=Ft[wt],E.format!==on?Jt!==null?Wt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,wt,0,0,0,H.width,H.height,Tt.depth,Jt,H.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,wt,bt,H.width,H.height,Tt.depth,0,H.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,wt,0,0,0,H.width,H.height,Tt.depth,Jt,ht,H.data):e.texImage3D(s.TEXTURE_2D_ARRAY,wt,bt,H.width,H.height,Tt.depth,0,Jt,ht,H.data)}else{Wt&&Zt&&e.texStorage2D(s.TEXTURE_2D,It,bt,Ft[0].width,Ft[0].height);for(let wt=0,b=Ft.length;wt<b;wt++)H=Ft[wt],E.format!==on?Jt!==null?Wt?e.compressedTexSubImage2D(s.TEXTURE_2D,wt,0,0,H.width,H.height,Jt,H.data):e.compressedTexImage2D(s.TEXTURE_2D,wt,bt,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(s.TEXTURE_2D,wt,0,0,H.width,H.height,Jt,ht,H.data):e.texImage2D(s.TEXTURE_2D,wt,bt,H.width,H.height,0,Jt,ht,H.data)}else if(E.isDataArrayTexture)Wt?(Zt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,bt,Tt.width,Tt.height,Tt.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Jt,ht,Tt.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,bt,Tt.width,Tt.height,Tt.depth,0,Jt,ht,Tt.data);else if(E.isData3DTexture)Wt?(Zt&&e.texStorage3D(s.TEXTURE_3D,It,bt,Tt.width,Tt.height,Tt.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Jt,ht,Tt.data)):e.texImage3D(s.TEXTURE_3D,0,bt,Tt.width,Tt.height,Tt.depth,0,Jt,ht,Tt.data);else if(E.isFramebufferTexture){if(Zt)if(Wt)e.texStorage2D(s.TEXTURE_2D,It,bt,Tt.width,Tt.height);else{let wt=Tt.width,b=Tt.height;for(let z=0;z<It;z++)e.texImage2D(s.TEXTURE_2D,z,bt,wt,b,0,Jt,ht,null),wt>>=1,b>>=1}}else if(Ft.length>0&&Qt){Wt&&Zt&&e.texStorage2D(s.TEXTURE_2D,It,bt,Ft[0].width,Ft[0].height);for(let wt=0,b=Ft.length;wt<b;wt++)H=Ft[wt],Wt?e.texSubImage2D(s.TEXTURE_2D,wt,0,0,Jt,ht,H):e.texImage2D(s.TEXTURE_2D,wt,bt,Jt,ht,H);E.generateMipmaps=!1}else Wt?(Zt&&e.texStorage2D(s.TEXTURE_2D,It,bt,Tt.width,Tt.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Jt,ht,Tt)):e.texImage2D(s.TEXTURE_2D,0,bt,Jt,ht,Tt);w(E,Qt)&&_(yt),kt.__version=at.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function vt(A,E,Y){if(E.image.length!==6)return;const yt=st(A,E),gt=E.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+Y);const at=n.get(gt);if(gt.version!==at.__version||yt===!0){e.activeTexture(s.TEXTURE0+Y);const kt=ue.getPrimaries(ue.workingColorSpace),Lt=E.colorSpace===$e?null:ue.getPrimaries(E.colorSpace),Pt=E.colorSpace===$e||kt===Lt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Xt=E.isCompressedTexture||E.image[0].isCompressedTexture,Nt=E.image[0]&&E.image[0].isDataTexture,Tt=[];for(let wt=0;wt<6;wt++)!Xt&&!Nt?Tt[wt]=v(E.image[wt],!1,!0,i.maxCubemapSize):Tt[wt]=Nt?E.image[wt].image:E.image[wt],Tt[wt]=ct(E,Tt[wt]);const Qt=Tt[0],Jt=g(Qt)||r,ht=o.convert(E.format,E.colorSpace),bt=o.convert(E.type),H=y(E.internalFormat,ht,bt,E.colorSpace),Ft=r&&E.isVideoTexture!==!0,Wt=at.__version===void 0||yt===!0;let Zt=P(E,Qt,Jt);j(s.TEXTURE_CUBE_MAP,E,Jt);let It;if(Xt){Ft&&Wt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Zt,H,Qt.width,Qt.height);for(let wt=0;wt<6;wt++){It=Tt[wt].mipmaps;for(let b=0;b<It.length;b++){const z=It[b];E.format!==on?ht!==null?Ft?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,b,0,0,z.width,z.height,ht,z.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,b,H,z.width,z.height,0,z.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,b,0,0,z.width,z.height,ht,bt,z.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,b,H,z.width,z.height,0,ht,bt,z.data)}}}else{It=E.mipmaps,Ft&&Wt&&(It.length>0&&Zt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Zt,H,Tt[0].width,Tt[0].height));for(let wt=0;wt<6;wt++)if(Nt){Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,Tt[wt].width,Tt[wt].height,ht,bt,Tt[wt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,H,Tt[wt].width,Tt[wt].height,0,ht,bt,Tt[wt].data);for(let b=0;b<It.length;b++){const et=It[b].image[wt].image;Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,b+1,0,0,et.width,et.height,ht,bt,et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,b+1,H,et.width,et.height,0,ht,bt,et.data)}}else{Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,0,0,ht,bt,Tt[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,H,ht,bt,Tt[wt]);for(let b=0;b<It.length;b++){const z=It[b];Ft?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,b+1,0,0,ht,bt,z.image[wt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+wt,b+1,H,ht,bt,z.image[wt])}}}w(E,Jt)&&_(s.TEXTURE_CUBE_MAP),at.__version=gt.version,E.onUpdate&&E.onUpdate(E)}A.__version=E.version}function mt(A,E,Y,yt,gt,at){const kt=o.convert(Y.format,Y.colorSpace),Lt=o.convert(Y.type),Pt=y(Y.internalFormat,kt,Lt,Y.colorSpace);if(!n.get(E).__hasExternalTextures){const Nt=Math.max(1,E.width>>at),Tt=Math.max(1,E.height>>at);gt===s.TEXTURE_3D||gt===s.TEXTURE_2D_ARRAY?e.texImage3D(gt,at,Pt,Nt,Tt,E.depth,0,kt,Lt,null):e.texImage2D(gt,at,Pt,Nt,Tt,0,kt,Lt,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),dt(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,yt,gt,n.get(Y).__webglTexture,0,xt(E)):(gt===s.TEXTURE_2D||gt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&gt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,yt,gt,n.get(Y).__webglTexture,at),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(A,E,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,A),E.depthBuffer&&!E.stencilBuffer){let yt=r===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Y||dt(E)){const gt=E.depthTexture;gt&&gt.isDepthTexture&&(gt.type===Ln?yt=s.DEPTH_COMPONENT32F:gt.type===Cn&&(yt=s.DEPTH_COMPONENT24));const at=xt(E);dt(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,at,yt,E.width,E.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,at,yt,E.width,E.height)}else s.renderbufferStorage(s.RENDERBUFFER,yt,E.width,E.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,A)}else if(E.depthBuffer&&E.stencilBuffer){const yt=xt(E);Y&&dt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,yt,s.DEPTH24_STENCIL8,E.width,E.height):dt(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,yt,s.DEPTH24_STENCIL8,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,A)}else{const yt=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let gt=0;gt<yt.length;gt++){const at=yt[gt],kt=o.convert(at.format,at.colorSpace),Lt=o.convert(at.type),Pt=y(at.internalFormat,kt,Lt,at.colorSpace),Xt=xt(E);Y&&dt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,Pt,E.width,E.height):dt(E)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,Pt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Pt,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(A,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const yt=n.get(E.depthTexture).__webglTexture,gt=xt(E);if(E.depthTexture.format===Kn)dt(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,yt,0);else if(E.depthTexture.format===Pi)dt(E)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0,gt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function ut(A){const E=n.get(A),Y=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ut(E.__webglFramebuffer,A)}else if(Y){E.__webglDepthbuffer=[];for(let yt=0;yt<6;yt++)e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[yt]),E.__webglDepthbuffer[yt]=s.createRenderbuffer(),Rt(E.__webglDepthbuffer[yt],A,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=s.createRenderbuffer(),Rt(E.__webglDepthbuffer,A,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(A,E,Y){const yt=n.get(A);E!==void 0&&mt(yt.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&ut(A)}function D(A){const E=A.texture,Y=n.get(A),yt=n.get(E);A.addEventListener("dispose",k),A.isWebGLMultipleRenderTargets!==!0&&(yt.__webglTexture===void 0&&(yt.__webglTexture=s.createTexture()),yt.__version=E.version,a.memory.textures++);const gt=A.isWebGLCubeRenderTarget===!0,at=A.isWebGLMultipleRenderTargets===!0,kt=g(A)||r;if(gt){Y.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(r&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Lt]=[];for(let Pt=0;Pt<E.mipmaps.length;Pt++)Y.__webglFramebuffer[Lt][Pt]=s.createFramebuffer()}else Y.__webglFramebuffer[Lt]=s.createFramebuffer()}else{if(r&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Lt=0;Lt<E.mipmaps.length;Lt++)Y.__webglFramebuffer[Lt]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(at)if(i.drawBuffers){const Lt=A.texture;for(let Pt=0,Xt=Lt.length;Pt<Xt;Pt++){const Nt=n.get(Lt[Pt]);Nt.__webglTexture===void 0&&(Nt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&A.samples>0&&dt(A)===!1){const Lt=at?E:[E];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Pt=0;Pt<Lt.length;Pt++){const Xt=Lt[Pt];Y.__webglColorRenderbuffer[Pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Pt]);const Nt=o.convert(Xt.format,Xt.colorSpace),Tt=o.convert(Xt.type),Qt=y(Xt.internalFormat,Nt,Tt,Xt.colorSpace,A.isXRRenderTarget===!0),Jt=xt(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,Qt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pt,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(Y.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(gt){e.bindTexture(s.TEXTURE_CUBE_MAP,yt.__webglTexture),j(s.TEXTURE_CUBE_MAP,E,kt);for(let Lt=0;Lt<6;Lt++)if(r&&E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)mt(Y.__webglFramebuffer[Lt][Pt],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Pt);else mt(Y.__webglFramebuffer[Lt],A,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);w(E,kt)&&_(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){const Lt=A.texture;for(let Pt=0,Xt=Lt.length;Pt<Xt;Pt++){const Nt=Lt[Pt],Tt=n.get(Nt);e.bindTexture(s.TEXTURE_2D,Tt.__webglTexture),j(s.TEXTURE_2D,Nt,kt),mt(Y.__webglFramebuffer,A,Nt,s.COLOR_ATTACHMENT0+Pt,s.TEXTURE_2D,0),w(Nt,kt)&&_(s.TEXTURE_2D)}e.unbindTexture()}else{let Lt=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(r?Lt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Lt,yt.__webglTexture),j(Lt,E,kt),r&&E.mipmaps&&E.mipmaps.length>0)for(let Pt=0;Pt<E.mipmaps.length;Pt++)mt(Y.__webglFramebuffer[Pt],A,E,s.COLOR_ATTACHMENT0,Lt,Pt);else mt(Y.__webglFramebuffer,A,E,s.COLOR_ATTACHMENT0,Lt,0);w(E,kt)&&_(Lt),e.unbindTexture()}A.depthBuffer&&ut(A)}function _t(A){const E=g(A)||r,Y=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let yt=0,gt=Y.length;yt<gt;yt++){const at=Y[yt];if(w(at,E)){const kt=A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Lt=n.get(at).__webglTexture;e.bindTexture(kt,Lt),_(kt),e.unbindTexture()}}}function lt(A){if(r&&A.samples>0&&dt(A)===!1){const E=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],Y=A.width,yt=A.height;let gt=s.COLOR_BUFFER_BIT;const at=[],kt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Lt=n.get(A),Pt=A.isWebGLMultipleRenderTargets===!0;if(Pt)for(let Xt=0;Xt<E.length;Xt++)e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let Xt=0;Xt<E.length;Xt++){at.push(s.COLOR_ATTACHMENT0+Xt),A.depthBuffer&&at.push(kt);const Nt=Lt.__ignoreDepthValues!==void 0?Lt.__ignoreDepthValues:!1;if(Nt===!1&&(A.depthBuffer&&(gt|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&(gt|=s.STENCIL_BUFFER_BIT)),Pt&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Xt]),Nt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[kt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[kt])),Pt){const Tt=n.get(E[Xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Tt,0)}s.blitFramebuffer(0,0,Y,yt,0,0,Y,yt,gt,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Pt)for(let Xt=0;Xt<E.length;Xt++){e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.RENDERBUFFER,Lt.__webglColorRenderbuffer[Xt]);const Nt=n.get(E[Xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Lt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Xt,s.TEXTURE_2D,Nt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}}function xt(A){return Math.min(i.maxSamples,A.samples)}function dt(A){const E=n.get(A);return r&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ot(A){const E=a.render.frame;d.get(A)!==E&&(d.set(A,E),A.update())}function ct(A,E){const Y=A.colorSpace,yt=A.format,gt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Do||Y!==vn&&Y!==$e&&(ue.getTransfer(Y)===me?r===!1?t.has("EXT_sRGB")===!0&&yt===on?(A.format=Do,A.minFilter=je,A.generateMipmaps=!1):E=Ya.sRGBToLinear(E):(yt!==on||gt!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}this.allocateTextureUnit=O,this.resetTextureUnits=tt,this.setTexture2D=W,this.setTexture2DArray=X,this.setTexture3D=nt,this.setTextureCube=J,this.rebindTextures=Ct,this.setupRenderTarget=D,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=lt,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=dt}function N0(s,t,e){const n=e.isWebGL2;function i(o,a=$e){let r;const c=ue.getTransfer(a);if(o===Un)return s.UNSIGNED_BYTE;if(o===Oa)return s.UNSIGNED_SHORT_4_4_4_4;if(o===Ga)return s.UNSIGNED_SHORT_5_5_5_1;if(o===il)return s.BYTE;if(o===sl)return s.SHORT;if(o===ko)return s.UNSIGNED_SHORT;if(o===Fa)return s.INT;if(o===Cn)return s.UNSIGNED_INT;if(o===Ln)return s.FLOAT;if(o===Ki)return n?s.HALF_FLOAT:(r=t.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(o===ol)return s.ALPHA;if(o===on)return s.RGBA;if(o===rl)return s.LUMINANCE;if(o===al)return s.LUMINANCE_ALPHA;if(o===Kn)return s.DEPTH_COMPONENT;if(o===Pi)return s.DEPTH_STENCIL;if(o===Do)return r=t.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(o===cl)return s.RED;if(o===Ba)return s.RED_INTEGER;if(o===ll)return s.RG;if(o===ka)return s.RG_INTEGER;if(o===za)return s.RGBA_INTEGER;if(o===Ys||o===Zs||o===Ks||o===Js)if(c===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(o===Ys)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(o===Ys)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===Zs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===Js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===ar||o===cr||o===lr||o===hr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(o===ar)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===cr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===lr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===hr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===Va)return r=t.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===dr||o===ur)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(o===dr)return c===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(o===ur)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===fr||o===pr||o===mr||o===gr||o===Mr||o===_r||o===wr||o===vr||o===xr||o===Sr||o===yr||o===br||o===Er||o===Tr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(o===fr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===pr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===mr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===gr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===Mr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===_r)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===wr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===vr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===xr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===Sr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===yr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===br)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===Er)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===Tr)return c===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===js||o===Ar||o===Pr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(o===js)return c===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===Ar)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===Pr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===hl||o===Rr||o===Cr||o===Lr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(o===js)return r.COMPRESSED_RED_RGTC1_EXT;if(o===Rr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===Cr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===Lr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Zn?n?s.UNSIGNED_INT_24_8:(r=t.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):s[o]!==void 0?s[o]:null}return{convert:i}}class F0 extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class pt extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,a=null;const r=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(h,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],l=d.position.distanceTo(f.position),u=.02,M=.005;h.inputState.pinching&&l>u+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&l<=u-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return r!==null&&(r.visible=i!==null),c!==null&&(c.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new pt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class G0 extends Li{constructor(t,e){super();const n=this;let i=null,o=1,a=null,r="local-floor",c=1,h=null,d=null,f=null,l=null,u=null,M=null;const v=e.getContextAttributes();let g=null,p=null;const w=[],_=[],y=new Bt;let P=null;const C=new Ve;C.layers.enable(1),C.viewport=new ge;const L=new Ve;L.layers.enable(2),L.viewport=new ge;const k=[C,L],S=new F0;S.layers.enable(1),S.layers.enable(2);let x=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=w[j];return st===void 0&&(st=new xo,w[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=w[j];return st===void 0&&(st=new xo,w[j]=st),st.getGripSpace()},this.getHand=function(j){let st=w[j];return st===void 0&&(st=new xo,w[j]=st),st.getHandSpace()};function G(j){const st=_.indexOf(j.inputSource);if(st===-1)return;const $=w[st];$!==void 0&&($.update(j.inputSource,j.frame,h||a),$.dispatchEvent({type:j.type,data:j.inputSource}))}function tt(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",O);for(let j=0;j<w.length;j++){const st=_[j];st!==null&&(_[j]=null,w[j].disconnect(st))}x=null,T=null,t.setRenderTarget(g),u=null,l=null,f=null,i=null,p=null,Mt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return l!==null?l:u},this.getBinding=function(){return f},this.getFrame=function(){return M},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(y),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const st={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),p=new $n(u.framebufferWidth,u.framebufferHeight,{format:on,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let st=null,$=null,vt=null;v.depth&&(vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=v.stencil?Pi:Kn,$=v.stencil?Zn:Cn);const mt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:o};f=new XRWebGLBinding(i,e),l=f.createProjectionLayer(mt),i.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),p=new $n(l.textureWidth,l.textureHeight,{format:on,type:Un,depthTexture:new rc(l.textureWidth,l.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Rt=t.properties.get(p);Rt.__ignoreDepthValues=l.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(r),Mt.setContext(i),Mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(j){for(let st=0;st<j.removed.length;st++){const $=j.removed[st],vt=_.indexOf($);vt>=0&&(_[vt]=null,w[vt].disconnect($))}for(let st=0;st<j.added.length;st++){const $=j.added[st];let vt=_.indexOf($);if(vt===-1){for(let Rt=0;Rt<w.length;Rt++)if(Rt>=_.length){_.push($),vt=Rt;break}else if(_[Rt]===null){_[Rt]=$,vt=Rt;break}if(vt===-1)break}const mt=w[vt];mt&&mt.connect($)}}const V=new F,W=new F;function X(j,st,$){V.setFromMatrixPosition(st.matrixWorld),W.setFromMatrixPosition($.matrixWorld);const vt=V.distanceTo(W),mt=st.projectionMatrix.elements,Rt=$.projectionMatrix.elements,Ut=mt[14]/(mt[10]-1),ut=mt[14]/(mt[10]+1),Ct=(mt[9]+1)/mt[5],D=(mt[9]-1)/mt[5],_t=(mt[8]-1)/mt[0],lt=(Rt[8]+1)/Rt[0],xt=Ut*_t,dt=Ut*lt,Ot=vt/(-_t+lt),ct=Ot*-_t;st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ct),j.translateZ(Ot),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const A=Ut+Ot,E=ut+Ot,Y=xt-ct,yt=dt+(vt-ct),gt=Ct*ut/E*A,at=D*ut/E*A;j.projectionMatrix.makePerspective(Y,yt,gt,at,A,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function nt(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;S.near=L.near=C.near=j.near,S.far=L.far=C.far=j.far,(x!==S.near||T!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),x=S.near,T=S.far);const st=j.parent,$=S.cameras;nt(S,st);for(let vt=0;vt<$.length;vt++)nt($[vt],st);$.length===2?X(S,C,L):S.projectionMatrix.copy(C.projectionMatrix),J(j,S,st)};function J(j,st,$){$===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy($.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ri*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(l===null&&u===null))return c},this.setFoveation=function(j){c=j,l!==null&&(l.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)};let K=null;function q(j,st){if(d=st.getViewerPose(h||a),M=st,d!==null){const $=d.views;u!==null&&(t.setRenderTargetFramebuffer(p,u.framebuffer),t.setRenderTarget(p));let vt=!1;$.length!==S.cameras.length&&(S.cameras.length=0,vt=!0);for(let mt=0;mt<$.length;mt++){const Rt=$[mt];let Ut=null;if(u!==null)Ut=u.getViewport(Rt);else{const Ct=f.getViewSubImage(l,Rt);Ut=Ct.viewport,mt===0&&(t.setRenderTargetTextures(p,Ct.colorTexture,l.ignoreDepthValues?void 0:Ct.depthStencilTexture),t.setRenderTarget(p))}let ut=k[mt];ut===void 0&&(ut=new Ve,ut.layers.enable(mt),ut.viewport=new ge,k[mt]=ut),ut.matrix.fromArray(Rt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(Rt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),mt===0&&(S.matrix.copy(ut.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),vt===!0&&S.cameras.push(ut)}}for(let $=0;$<w.length;$++){const vt=_[$],mt=w[$];vt!==null&&mt!==void 0&&mt.update(vt,st,h||a)}K&&K(j,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),M=null}const Mt=new sc;Mt.setAnimationLoop(q),this.setAnimationLoop=function(j){K=j},this.dispose=function(){}}}function B0(s,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ec(s)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,w,_,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),f(g,p)):p.isMeshPhongMaterial?(o(g,p),d(g,p)):p.isMeshStandardMaterial?(o(g,p),l(g,p),p.isMeshPhysicalMaterial&&u(g,p,y)):p.isMeshMatcapMaterial?(o(g,p),M(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),v(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&r(g,p)):p.isPointsMaterial?c(g,p,w,_):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===ke&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===ke&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=t.get(p).envMap;if(w&&(g.envMap.value=w,g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const _=s._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*_,e(p.lightMap,g.lightMapTransform)}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function r(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,_){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=_*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function d(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function l(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ke&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function M(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function k0(s,t,e,n){let i={},o={},a=[];const r=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,_){const y=_.program;n.uniformBlockBinding(w,y)}function h(w,_){let y=i[w.id];y===void 0&&(M(w),y=d(w),i[w.id]=y,w.addEventListener("dispose",g));const P=_.program;n.updateUBOMapping(w,P);const C=t.render.frame;o[w.id]!==C&&(l(w),o[w.id]=C)}function d(w){const _=f();w.__bindingPointIndex=_;const y=s.createBuffer(),P=w.__size,C=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,P,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,_,y),y}function f(){for(let w=0;w<r;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(w){const _=i[w.id],y=w.uniforms,P=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,_);for(let C=0,L=y.length;C<L;C++){const k=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,x=k.length;S<x;S++){const T=k[S];if(u(T,C,S,P)===!0){const G=T.__offset,tt=Array.isArray(T.value)?T.value:[T.value];let O=0;for(let V=0;V<tt.length;V++){const W=tt[V],X=v(W);typeof W=="number"||typeof W=="boolean"?(T.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,G+O,T.__data)):W.isMatrix3?(T.__data[0]=W.elements[0],T.__data[1]=W.elements[1],T.__data[2]=W.elements[2],T.__data[3]=0,T.__data[4]=W.elements[3],T.__data[5]=W.elements[4],T.__data[6]=W.elements[5],T.__data[7]=0,T.__data[8]=W.elements[6],T.__data[9]=W.elements[7],T.__data[10]=W.elements[8],T.__data[11]=0):(W.toArray(T.__data,O),O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function u(w,_,y,P){const C=w.value,L=_+"_"+y;if(P[L]===void 0)return typeof C=="number"||typeof C=="boolean"?P[L]=C:P[L]=C.clone(),!0;{const k=P[L];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return P[L]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function M(w){const _=w.uniforms;let y=0;const P=16;for(let L=0,k=_.length;L<k;L++){const S=Array.isArray(_[L])?_[L]:[_[L]];for(let x=0,T=S.length;x<T;x++){const G=S[x],tt=Array.isArray(G.value)?G.value:[G.value];for(let O=0,V=tt.length;O<V;O++){const W=tt[O],X=v(W),nt=y%P;nt!==0&&P-nt<X.boundary&&(y+=P-nt),G.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=X.storage}}}const C=y%P;return C>0&&(y+=P-C),w.__size=y,w.__cache={},this}function v(w){const _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function g(w){const _=w.target;_.removeEventListener("dispose",g);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),s.deleteBuffer(i[_.id]),delete i[_.id],delete o[_.id]}function p(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},o={}}return{bind:c,update:h,dispose:p}}class uc{constructor(t={}){const{canvas:e=Nl(),context:n=null,depth:i=!0,stencil:o=!0,alpha:a=!1,antialias:r=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let l;n!==null?l=n.getContextAttributes().alpha:l=a;const u=new Uint32Array(4),M=new Int32Array(4);let v=null,g=null;const p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this._useLegacyLights=!1,this.toneMapping=Dn,this.toneMappingExposure=1;const _=this;let y=!1,P=0,C=0,L=null,k=-1,S=null;const x=new ge,T=new ge;let G=null;const tt=new ce(0);let O=0,V=e.width,W=e.height,X=1,nt=null,J=null;const K=new ge(0,0,V,W),q=new ge(0,0,V,W);let Mt=!1;const j=new Ho;let st=!1,$=!1,vt=null;const mt=new xe,Rt=new Bt,Ut=new F,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ct(){return L===null?X:1}let D=n;function _t(R,Z){for(let rt=0;rt<R.length;rt++){const I=R[rt],B=e.getContext(I,Z);if(B!==null)return B}return null}try{const R={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Go}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",b,!1),e.addEventListener("webglcontextcreationerror",z,!1),D===null){const Z=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Z.shift(),D=_t(Z,R),D===null)throw _t(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let lt,xt,dt,Ot,ct,A,E,Y,yt,gt,at,kt,Lt,Pt,Xt,Nt,Tt,Qt,Jt,ht,bt,H,Ft,Wt;function Zt(){lt=new Ku(D),xt=new Hu(D,lt,t),lt.init(xt),H=new N0(D,lt,xt),dt=new D0(D,lt,xt),Ot=new $u(D),ct=new w0,A=new U0(D,lt,dt,ct,xt,H,Ot),E=new Xu(_),Y=new Zu(_),yt=new rh(D,xt),Ft=new zu(D,lt,yt,xt),gt=new Ju(D,yt,Ot,Ft),at=new nf(D,gt,yt,Ot),Jt=new ef(D,xt,A),Nt=new Wu(ct),kt=new _0(_,E,Y,lt,xt,Ft,Nt),Lt=new B0(_,ct),Pt=new x0,Xt=new A0(lt,xt),Qt=new ku(_,E,Y,dt,at,l,c),Tt=new I0(_,at,xt),Wt=new k0(D,Ot,xt,dt),ht=new Vu(D,lt,Ot,xt),bt=new ju(D,lt,Ot,xt),Ot.programs=kt.programs,_.capabilities=xt,_.extensions=lt,_.properties=ct,_.renderLists=Pt,_.shadowMap=Tt,_.state=dt,_.info=Ot}Zt();const It=new G0(_,D);this.xr=It,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=lt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=lt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(R){R!==void 0&&(X=R,this.setSize(V,W,!1))},this.getSize=function(R){return R.set(V,W)},this.setSize=function(R,Z,rt=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=R,W=Z,e.width=Math.floor(R*X),e.height=Math.floor(Z*X),rt===!0&&(e.style.width=R+"px",e.style.height=Z+"px"),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(V*X,W*X).floor()},this.setDrawingBufferSize=function(R,Z,rt){V=R,W=Z,X=rt,e.width=Math.floor(R*rt),e.height=Math.floor(Z*rt),this.setViewport(0,0,R,Z)},this.getCurrentViewport=function(R){return R.copy(x)},this.getViewport=function(R){return R.copy(K)},this.setViewport=function(R,Z,rt,I){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,Z,rt,I),dt.viewport(x.copy(K).multiplyScalar(X).floor())},this.getScissor=function(R){return R.copy(q)},this.setScissor=function(R,Z,rt,I){R.isVector4?q.set(R.x,R.y,R.z,R.w):q.set(R,Z,rt,I),dt.scissor(T.copy(q).multiplyScalar(X).floor())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){dt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){nt=R},this.setTransparentSort=function(R){J=R},this.getClearColor=function(R){return R.copy(Qt.getClearColor())},this.setClearColor=function(){Qt.setClearColor.apply(Qt,arguments)},this.getClearAlpha=function(){return Qt.getClearAlpha()},this.setClearAlpha=function(){Qt.setClearAlpha.apply(Qt,arguments)},this.clear=function(R=!0,Z=!0,rt=!0){let I=0;if(R){let B=!1;if(L!==null){const it=L.texture.format;B=it===za||it===ka||it===Ba}if(B){const it=L.texture.type,At=it===Un||it===Cn||it===ko||it===Zn||it===Oa||it===Ga,Ht=Qt.getClearColor(),jt=Qt.getClearAlpha(),ne=Ht.r,ie=Ht.g,se=Ht.b;At?(u[0]=ne,u[1]=ie,u[2]=se,u[3]=jt,D.clearBufferuiv(D.COLOR,0,u)):(M[0]=ne,M[1]=ie,M[2]=se,M[3]=jt,D.clearBufferiv(D.COLOR,0,M))}else I|=D.COLOR_BUFFER_BIT}Z&&(I|=D.DEPTH_BUFFER_BIT),rt&&(I|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",b,!1),e.removeEventListener("webglcontextcreationerror",z,!1),Pt.dispose(),Xt.dispose(),ct.dispose(),E.dispose(),Y.dispose(),at.dispose(),Ft.dispose(),Wt.dispose(),kt.dispose(),It.dispose(),It.removeEventListener("sessionstart",ot),It.removeEventListener("sessionend",Gt),vt&&(vt.dispose(),vt=null),Yt.stop()};function wt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Ot.autoReset,Z=Tt.enabled,rt=Tt.autoUpdate,I=Tt.needsUpdate,B=Tt.type;Zt(),Ot.autoReset=R,Tt.enabled=Z,Tt.autoUpdate=rt,Tt.needsUpdate=I,Tt.type=B}function z(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function et(R){const Z=R.target;Z.removeEventListener("dispose",et),Vt(Z)}function Vt(R){ft(R),ct.remove(R)}function ft(R){const Z=ct.get(R).programs;Z!==void 0&&(Z.forEach(function(rt){kt.releaseProgram(rt)}),R.isShaderMaterial&&kt.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,rt,I,B,it){Z===null&&(Z=ut);const At=B.isMesh&&B.matrixWorld.determinant()<0,Ht=ii(R,Z,rt,I,B);dt.setMaterial(I,At);let jt=rt.index,ne=1;if(I.wireframe===!0){if(jt=gt.getWireframeAttribute(rt),jt===void 0)return;ne=2}const ie=rt.drawRange,se=rt.attributes.position;let Se=ie.start*ne,qe=(ie.start+ie.count)*ne;it!==null&&(Se=Math.max(Se,it.start*ne),qe=Math.min(qe,(it.start+it.count)*ne)),jt!==null?(Se=Math.max(Se,0),qe=Math.min(qe,jt.count)):se!=null&&(Se=Math.max(Se,0),qe=Math.min(qe,se.count));const Re=qe-Se;if(Re<0||Re===1/0)return;Ft.setup(B,I,Ht,rt,jt);let dn,Me=ht;if(jt!==null&&(dn=yt.get(jt),Me=bt,Me.setIndex(dn)),B.isMesh)I.wireframe===!0?(dt.setLineWidth(I.wireframeLinewidth*Ct()),Me.setMode(D.LINES)):Me.setMode(D.TRIANGLES);else if(B.isLine){let re=I.linewidth;re===void 0&&(re=1),dt.setLineWidth(re*Ct()),B.isLineSegments?Me.setMode(D.LINES):B.isLineLoop?Me.setMode(D.LINE_LOOP):Me.setMode(D.LINE_STRIP)}else B.isPoints?Me.setMode(D.POINTS):B.isSprite&&Me.setMode(D.TRIANGLES);if(B.isBatchedMesh)Me.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)Me.renderInstances(Se,Re,B.count);else if(rt.isInstancedBufferGeometry){const re=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Vs=Math.min(rt.instanceCount,re);Me.renderInstances(Se,Re,Vs)}else Me.render(Se,Re)};function Dt(R,Z,rt){R.transparent===!0&&R.side===ye&&R.forceSinglePass===!1?(R.side=ke,R.needsUpdate=!0,Xe(R,Z,rt),R.side=Nn,R.needsUpdate=!0,Xe(R,Z,rt),R.side=ye):Xe(R,Z,rt)}this.compile=function(R,Z,rt=null){rt===null&&(rt=R),g=Xt.get(rt),g.init(),w.push(g),rt.traverseVisible(function(B){B.isLight&&B.layers.test(Z.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),R!==rt&&R.traverseVisible(function(B){B.isLight&&B.layers.test(Z.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights(_._useLegacyLights);const I=new Set;return R.traverse(function(B){const it=B.material;if(it)if(Array.isArray(it))for(let At=0;At<it.length;At++){const Ht=it[At];Dt(Ht,rt,B),I.add(Ht)}else Dt(it,rt,B),I.add(it)}),w.pop(),g=null,I},this.compileAsync=function(R,Z,rt=null){const I=this.compile(R,Z,rt);return new Promise(B=>{function it(){if(I.forEach(function(At){ct.get(At).currentProgram.isReady()&&I.delete(At)}),I.size===0){B(R);return}setTimeout(it,10)}lt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let St=null;function Et(R){St&&St(R)}function ot(){Yt.stop()}function Gt(){Yt.start()}const Yt=new sc;Yt.setAnimationLoop(Et),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(R){St=R,It.setAnimationLoop(R),R===null?Yt.stop():Yt.start()},It.addEventListener("sessionstart",ot),It.addEventListener("sessionend",Gt),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(Z),Z=It.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,Z,L),g=Xt.get(R,w.length),g.init(),w.push(g),mt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),j.setFromProjectionMatrix(mt),$=this.localClippingEnabled,st=Nt.init(this.clippingPlanes,$),v=Pt.get(R,p.length),v.init(),p.push(v),ee(R,Z,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(nt,J),this.info.render.frame++,st===!0&&Nt.beginShadows();const rt=g.state.shadowsArray;if(Tt.render(rt,R,Z),st===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Qt.render(v,R),g.setupLights(_._useLegacyLights),Z.isArrayCamera){const I=Z.cameras;for(let B=0,it=I.length;B<it;B++){const At=I[B];Te(v,R,At,At.viewport)}}else Te(v,R,Z);L!==null&&(A.updateMultisampleRenderTarget(L),A.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(_,R,Z),Ft.resetDefaultState(),k=-1,S=null,w.pop(),w.length>0?g=w[w.length-1]:g=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ee(R,Z,rt,I){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){I&&Ut.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);const At=at.update(R),Ht=R.material;Ht.visible&&v.push(R,At,Ht,rt,Ut.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||j.intersectsObject(R))){const At=at.update(R),Ht=R.material;if(I&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ut.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ut.copy(At.boundingSphere.center)),Ut.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(Ht)){const jt=At.groups;for(let ne=0,ie=jt.length;ne<ie;ne++){const se=jt[ne],Se=Ht[se.materialIndex];Se&&Se.visible&&v.push(R,At,Se,rt,Ut.z,se)}}else Ht.visible&&v.push(R,At,Ht,rt,Ut.z,null)}}const it=R.children;for(let At=0,Ht=it.length;At<Ht;At++)ee(it[At],Z,rt,I)}function Te(R,Z,rt,I){const B=R.opaque,it=R.transmissive,At=R.transparent;g.setupLightsView(rt),st===!0&&Nt.setGlobalState(_.clippingPlanes,rt),it.length>0&&we(B,it,Z,rt),I&&dt.viewport(x.copy(I)),B.length>0&&We(B,Z,rt),it.length>0&&We(it,Z,rt),At.length>0&&We(At,Z,rt),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function we(R,Z,rt,I){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;const it=xt.isWebGL2;vt===null&&(vt=new $n(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")?Ki:Un,minFilter:Zi,samples:it?4:0})),_.getDrawingBufferSize(Rt),it?vt.setSize(Rt.x,Rt.y):vt.setSize(Is(Rt.x),Is(Rt.y));const At=_.getRenderTarget();_.setRenderTarget(vt),_.getClearColor(tt),O=_.getClearAlpha(),O<1&&_.setClearColor(16777215,.5),_.clear();const Ht=_.toneMapping;_.toneMapping=Dn,We(R,rt,I),A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt);let jt=!1;for(let ne=0,ie=Z.length;ne<ie;ne++){const se=Z[ne],Se=se.object,qe=se.geometry,Re=se.material,dn=se.group;if(Re.side===ye&&Se.layers.test(I.layers)){const Me=Re.side;Re.side=ke,Re.needsUpdate=!0,ze(Se,rt,I,qe,Re,dn),Re.side=Me,Re.needsUpdate=!0,jt=!0}}jt===!0&&(A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt)),_.setRenderTarget(At),_.setClearColor(tt,O),_.toneMapping=Ht}function We(R,Z,rt){const I=Z.isScene===!0?Z.overrideMaterial:null;for(let B=0,it=R.length;B<it;B++){const At=R[B],Ht=At.object,jt=At.geometry,ne=I===null?At.material:I,ie=At.group;Ht.layers.test(rt.layers)&&ze(Ht,Z,rt,jt,ne,ie)}}function ze(R,Z,rt,I,B,it){R.onBeforeRender(_,Z,rt,I,B,it),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),B.onBeforeRender(_,Z,rt,I,R,it),B.transparent===!0&&B.side===ye&&B.forceSinglePass===!1?(B.side=ke,B.needsUpdate=!0,_.renderBufferDirect(rt,Z,I,B,R,it),B.side=Nn,B.needsUpdate=!0,_.renderBufferDirect(rt,Z,I,B,R,it),B.side=ye):_.renderBufferDirect(rt,Z,I,B,R,it),R.onAfterRender(_,Z,rt,I,B,it)}function Xe(R,Z,rt){Z.isScene!==!0&&(Z=ut);const I=ct.get(R),B=g.state.lights,it=g.state.shadowsArray,At=B.state.version,Ht=kt.getParameters(R,B.state,it,Z,rt),jt=kt.getProgramCacheKey(Ht);let ne=I.programs;I.environment=R.isMeshStandardMaterial?Z.environment:null,I.fog=Z.fog,I.envMap=(R.isMeshStandardMaterial?Y:E).get(R.envMap||I.environment),ne===void 0&&(R.addEventListener("dispose",et),ne=new Map,I.programs=ne);let ie=ne.get(jt);if(ie!==void 0){if(I.currentProgram===ie&&I.lightsStateVersion===At)return hn(R,Ht),ie}else Ht.uniforms=kt.getUniforms(R),R.onBuild(rt,Ht,_),R.onBeforeCompile(Ht,_),ie=kt.acquireProgram(Ht,jt),ne.set(jt,ie),I.uniforms=Ht.uniforms;const se=I.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(se.clippingPlanes=Nt.uniform),hn(R,Ht),I.needsLights=On(R),I.lightsStateVersion=At,I.needsLights&&(se.ambientLightColor.value=B.state.ambient,se.lightProbe.value=B.state.probe,se.directionalLights.value=B.state.directional,se.directionalLightShadows.value=B.state.directionalShadow,se.spotLights.value=B.state.spot,se.spotLightShadows.value=B.state.spotShadow,se.rectAreaLights.value=B.state.rectArea,se.ltc_1.value=B.state.rectAreaLTC1,se.ltc_2.value=B.state.rectAreaLTC2,se.pointLights.value=B.state.point,se.pointLightShadows.value=B.state.pointShadow,se.hemisphereLights.value=B.state.hemi,se.directionalShadowMap.value=B.state.directionalShadowMap,se.directionalShadowMatrix.value=B.state.directionalShadowMatrix,se.spotShadowMap.value=B.state.spotShadowMap,se.spotLightMatrix.value=B.state.spotLightMatrix,se.spotLightMap.value=B.state.spotLightMap,se.pointShadowMap.value=B.state.pointShadowMap,se.pointShadowMatrix.value=B.state.pointShadowMatrix),I.currentProgram=ie,I.uniformsList=null,ie}function Sn(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=Ts.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function hn(R,Z){const rt=ct.get(R);rt.outputColorSpace=Z.outputColorSpace,rt.batching=Z.batching,rt.instancing=Z.instancing,rt.instancingColor=Z.instancingColor,rt.skinning=Z.skinning,rt.morphTargets=Z.morphTargets,rt.morphNormals=Z.morphNormals,rt.morphColors=Z.morphColors,rt.morphTargetsCount=Z.morphTargetsCount,rt.numClippingPlanes=Z.numClippingPlanes,rt.numIntersection=Z.numClipIntersection,rt.vertexAlphas=Z.vertexAlphas,rt.vertexTangents=Z.vertexTangents,rt.toneMapping=Z.toneMapping}function ii(R,Z,rt,I,B){Z.isScene!==!0&&(Z=ut),A.resetTextureUnits();const it=Z.fog,At=I.isMeshStandardMaterial?Z.environment:null,Ht=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:vn,jt=(I.isMeshStandardMaterial?Y:E).get(I.envMap||At),ne=I.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,ie=!!rt.attributes.tangent&&(!!I.normalMap||I.anisotropy>0),se=!!rt.morphAttributes.position,Se=!!rt.morphAttributes.normal,qe=!!rt.morphAttributes.color;let Re=Dn;I.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Re=_.toneMapping);const dn=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Me=dn!==void 0?dn.length:0,re=ct.get(I),Vs=g.state.lights;if(st===!0&&($===!0||R!==S)){const Ke=R===S&&I.id===k;Nt.setState(I,R,Ke)}let ve=!1;I.version===re.__version?(re.needsLights&&re.lightsStateVersion!==Vs.state.version||re.outputColorSpace!==Ht||B.isBatchedMesh&&re.batching===!1||!B.isBatchedMesh&&re.batching===!0||B.isInstancedMesh&&re.instancing===!1||!B.isInstancedMesh&&re.instancing===!0||B.isSkinnedMesh&&re.skinning===!1||!B.isSkinnedMesh&&re.skinning===!0||B.isInstancedMesh&&re.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&re.instancingColor===!1&&B.instanceColor!==null||re.envMap!==jt||I.fog===!0&&re.fog!==it||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Nt.numPlanes||re.numIntersection!==Nt.numIntersection)||re.vertexAlphas!==ne||re.vertexTangents!==ie||re.morphTargets!==se||re.morphNormals!==Se||re.morphColors!==qe||re.toneMapping!==Re||xt.isWebGL2===!0&&re.morphTargetsCount!==Me)&&(ve=!0):(ve=!0,re.__version=I.version);let Gn=re.currentProgram;ve===!0&&(Gn=Xe(I,Z,B));let Qo=!1,Ui=!1,Hs=!1;const Ue=Gn.getUniforms(),Bn=re.uniforms;if(dt.useProgram(Gn.program)&&(Qo=!0,Ui=!0,Hs=!0),I.id!==k&&(k=I.id,Ui=!0),Qo||S!==R){Ue.setValue(D,"projectionMatrix",R.projectionMatrix),Ue.setValue(D,"viewMatrix",R.matrixWorldInverse);const Ke=Ue.map.cameraPosition;Ke!==void 0&&Ke.setValue(D,Ut.setFromMatrixPosition(R.matrixWorld)),xt.logarithmicDepthBuffer&&Ue.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&Ue.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,Ui=!0,Hs=!0)}if(B.isSkinnedMesh){Ue.setOptional(D,B,"bindMatrix"),Ue.setOptional(D,B,"bindMatrixInverse");const Ke=B.skeleton;Ke&&(xt.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ue.setValue(D,"boneTexture",Ke.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(Ue.setOptional(D,B,"batchingTexture"),Ue.setValue(D,"batchingTexture",B._matricesTexture,A));const Ws=rt.morphAttributes;if((Ws.position!==void 0||Ws.normal!==void 0||Ws.color!==void 0&&xt.isWebGL2===!0)&&Jt.update(B,rt,Gn),(Ui||re.receiveShadow!==B.receiveShadow)&&(re.receiveShadow=B.receiveShadow,Ue.setValue(D,"receiveShadow",B.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Bn.envMap.value=jt,Bn.flipEnvMap.value=jt.isCubeTexture&&jt.isRenderTargetTexture===!1?-1:1),Ui&&(Ue.setValue(D,"toneMappingExposure",_.toneMappingExposure),re.needsLights&&Fn(Bn,Hs),it&&I.fog===!0&&Lt.refreshFogUniforms(Bn,it),Lt.refreshMaterialUniforms(Bn,I,X,W,vt),Ts.upload(D,Sn(re),Bn,A)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Ts.upload(D,Sn(re),Bn,A),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&Ue.setValue(D,"center",B.center),Ue.setValue(D,"modelViewMatrix",B.modelViewMatrix),Ue.setValue(D,"normalMatrix",B.normalMatrix),Ue.setValue(D,"modelMatrix",B.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const Ke=I.uniformsGroups;for(let Xs=0,yc=Ke.length;Xs<yc;Xs++)if(xt.isWebGL2){const tr=Ke[Xs];Wt.update(tr,Gn),Wt.bind(tr,Gn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gn}function Fn(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function On(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,Z,rt){ct.get(R.texture).__webglTexture=Z,ct.get(R.depthTexture).__webglTexture=rt;const I=ct.get(R);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=rt===void 0,I.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,Z){const rt=ct.get(R);rt.__webglFramebuffer=Z,rt.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,rt=0){L=R,P=Z,C=rt;let I=!0,B=null,it=!1,At=!1;if(R){const jt=ct.get(R);jt.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(D.FRAMEBUFFER,null),I=!1):jt.__webglFramebuffer===void 0?A.setupRenderTarget(R):jt.__hasExternalTextures&&A.rebindTextures(R,ct.get(R.texture).__webglTexture,ct.get(R.depthTexture).__webglTexture);const ne=R.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(At=!0);const ie=ct.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ie[Z])?B=ie[Z][rt]:B=ie[Z],it=!0):xt.isWebGL2&&R.samples>0&&A.useMultisampledRTT(R)===!1?B=ct.get(R).__webglMultisampledFramebuffer:Array.isArray(ie)?B=ie[rt]:B=ie,x.copy(R.viewport),T.copy(R.scissor),G=R.scissorTest}else x.copy(K).multiplyScalar(X).floor(),T.copy(q).multiplyScalar(X).floor(),G=Mt;if(dt.bindFramebuffer(D.FRAMEBUFFER,B)&&xt.drawBuffers&&I&&dt.drawBuffers(R,B),dt.viewport(x),dt.scissor(T),dt.setScissorTest(G),it){const jt=ct.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Z,jt.__webglTexture,rt)}else if(At){const jt=ct.get(R.texture),ne=Z||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,jt.__webglTexture,rt||0,ne)}k=-1},this.readRenderTargetPixels=function(R,Z,rt,I,B,it,At){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Ht=Ht[At]),Ht){dt.bindFramebuffer(D.FRAMEBUFFER,Ht);try{const jt=R.texture,ne=jt.format,ie=jt.type;if(ne!==on&&H.convert(ne)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const se=ie===Ki&&(lt.has("EXT_color_buffer_half_float")||xt.isWebGL2&&lt.has("EXT_color_buffer_float"));if(ie!==Un&&H.convert(ie)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ie===Ln&&(xt.isWebGL2||lt.has("OES_texture_float")||lt.has("WEBGL_color_buffer_float")))&&!se){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-I&&rt>=0&&rt<=R.height-B&&D.readPixels(Z,rt,I,B,H.convert(ne),H.convert(ie),it)}finally{const jt=L!==null?ct.get(L).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,jt)}}},this.copyFramebufferToTexture=function(R,Z,rt=0){const I=Math.pow(2,-rt),B=Math.floor(Z.image.width*I),it=Math.floor(Z.image.height*I);A.setTexture2D(Z,0),D.copyTexSubImage2D(D.TEXTURE_2D,rt,0,0,R.x,R.y,B,it),dt.unbindTexture()},this.copyTextureToTexture=function(R,Z,rt,I=0){const B=Z.image.width,it=Z.image.height,At=H.convert(rt.format),Ht=H.convert(rt.type);A.setTexture2D(rt,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,rt.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,rt.unpackAlignment),Z.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,I,R.x,R.y,B,it,At,Ht,Z.image.data):Z.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,I,R.x,R.y,Z.mipmaps[0].width,Z.mipmaps[0].height,At,Z.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,I,R.x,R.y,At,Ht,Z.image),I===0&&rt.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(R,Z,rt,I,B=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const it=R.max.x-R.min.x+1,At=R.max.y-R.min.y+1,Ht=R.max.z-R.min.z+1,jt=H.convert(I.format),ne=H.convert(I.type);let ie;if(I.isData3DTexture)A.setTexture3D(I,0),ie=D.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),ie=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const se=D.getParameter(D.UNPACK_ROW_LENGTH),Se=D.getParameter(D.UNPACK_IMAGE_HEIGHT),qe=D.getParameter(D.UNPACK_SKIP_PIXELS),Re=D.getParameter(D.UNPACK_SKIP_ROWS),dn=D.getParameter(D.UNPACK_SKIP_IMAGES),Me=rt.isCompressedTexture?rt.mipmaps[B]:rt.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,R.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,R.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,R.min.z),rt.isDataTexture||rt.isData3DTexture?D.texSubImage3D(ie,B,Z.x,Z.y,Z.z,it,At,Ht,jt,ne,Me.data):rt.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(ie,B,Z.x,Z.y,Z.z,it,At,Ht,jt,Me.data)):D.texSubImage3D(ie,B,Z.x,Z.y,Z.z,it,At,Ht,jt,ne,Me),D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Se),D.pixelStorei(D.UNPACK_SKIP_PIXELS,qe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Re),D.pixelStorei(D.UNPACK_SKIP_IMAGES,dn),B===0&&I.generateMipmaps&&D.generateMipmap(ie),dt.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),dt.unbindTexture()},this.resetState=function(){P=0,C=0,L=null,dt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zo?"display-p3":"srgb",e.unpackColorSpace=ue.workingColorSpace===Fs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ie?Jn:Ha}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Jn?Ie:vn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class z0 extends uc{}z0.prototype.isWebGL1Renderer=!0;class Xo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(t),this.density=e}clone(){return new Xo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class V0 extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class fc extends Ii{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const va=new F,xa=new F,Sa=new xe,So=new Ja,Ss=new Os;class H0 extends Ee{constructor(t=new De,e=new fc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)va.fromBufferAttribute(e,i-1),xa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=va.distanceTo(xa);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(i),Ss.radius+=o,t.ray.intersectsSphere(Ss)===!1)return;Sa.copy(i).invert(),So.copy(t.ray).applyMatrix4(Sa);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=r*r,h=new F,d=new F,f=new F,l=new F,u=this.isLineSegments?2:1,M=n.index,g=n.attributes.position;if(M!==null){const p=Math.max(0,a.start),w=Math.min(M.count,a.start+a.count);for(let _=p,y=w-1;_<y;_+=u){const P=M.getX(_),C=M.getX(_+1);if(h.fromBufferAttribute(g,P),d.fromBufferAttribute(g,C),So.distanceSqToSegment(h,d,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const k=t.ray.origin.distanceTo(l);k<t.near||k>t.far||e.push({distance:k,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),w=Math.min(g.count,a.start+a.count);for(let _=p,y=w-1;_<y;_+=u){if(h.fromBufferAttribute(g,_),d.fromBufferAttribute(g,_+1),So.distanceSqToSegment(h,d,l,f)>c)continue;l.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(l);C<t.near||C>t.far||e.push({distance:C,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}class te extends He{constructor(t,e,n,i,o,a,r,c,h){super(t,e,n,i,o,a,r,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ln{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),o=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),o+=n.distanceTo(i),e.push(o),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const o=n.length;let a;e?a=e:a=t*n[o-1];let r=0,c=o-1,h;for(;r<=c;)if(i=Math.floor(r+(c-r)/2),h=n[i]-a,h<0)r=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(o-1);const d=n[i],l=n[i+1]-d,u=(a-d)/l;return(i+u)/(o-1)}getTangent(t,e){let i=t-1e-4,o=t+1e-4;i<0&&(i=0),o>1&&(o=1);const a=this.getPoint(i),r=this.getPoint(o),c=e||(a.isVector2?new Bt:new F);return c.copy(r).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new F,i=[],o=[],a=[],r=new F,c=new xe;for(let u=0;u<=t;u++){const M=u/t;i[u]=this.getTangentAt(M,new F)}o[0]=new F,a[0]=new F;let h=Number.MAX_VALUE;const d=Math.abs(i[0].x),f=Math.abs(i[0].y),l=Math.abs(i[0].z);d<=h&&(h=d,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),l<=h&&n.set(0,0,1),r.crossVectors(i[0],n).normalize(),o[0].crossVectors(i[0],r),a[0].crossVectors(i[0],o[0]);for(let u=1;u<=t;u++){if(o[u]=o[u-1].clone(),a[u]=a[u-1].clone(),r.crossVectors(i[u-1],i[u]),r.length()>Number.EPSILON){r.normalize();const M=Math.acos(Le(i[u-1].dot(i[u]),-1,1));o[u].applyMatrix4(c.makeRotationAxis(r,M))}a[u].crossVectors(i[u],o[u])}if(e===!0){let u=Math.acos(Le(o[0].dot(o[t]),-1,1));u/=t,i[0].dot(r.crossVectors(o[0],o[t]))>0&&(u=-u);for(let M=1;M<=t;M++)o[M].applyMatrix4(c.makeRotationAxis(i[M],u*M)),a[M].crossVectors(i[M],o[M])}return{tangents:i,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class qo extends ln{constructor(t=0,e=0,n=1,i=1,o=0,a=Math.PI*2,r=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=r,this.aRotation=c}getPoint(t,e){const n=e||new Bt,i=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=i;for(;o>i;)o-=i;o<Number.EPSILON&&(a?o=0:o=i),this.aClockwise===!0&&!a&&(o===i?o=-i:o=o-i);const r=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(r),h=this.aY+this.yRadius*Math.sin(r);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),l=c-this.aX,u=h-this.aY;c=l*d-u*f+this.aX,h=l*f+u*d+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class W0 extends qo{constructor(t,e,n,i,o,a){super(t,e,n,n,i,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Yo(){let s=0,t=0,e=0,n=0;function i(o,a,r,c){s=o,t=r,e=-3*o+3*a-2*r-c,n=2*o-2*a+r+c}return{initCatmullRom:function(o,a,r,c,h){i(a,r,h*(r-o),h*(c-a))},initNonuniformCatmullRom:function(o,a,r,c,h,d,f){let l=(a-o)/h-(r-o)/(h+d)+(r-a)/d,u=(r-a)/d-(c-a)/(d+f)+(c-r)/f;l*=d,u*=d,i(a,r,l,u)},calc:function(o){const a=o*o,r=a*o;return s+t*o+e*a+n*r}}}const ys=new F,yo=new Yo,bo=new Yo,Eo=new Yo;class Rn extends ln{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new F){const n=e,i=this.points,o=i.length,a=(o-(this.closed?0:1))*t;let r=Math.floor(a),c=a-r;this.closed?r+=r>0?0:(Math.floor(Math.abs(r)/o)+1)*o:c===0&&r===o-1&&(r=o-2,c=1);let h,d;this.closed||r>0?h=i[(r-1)%o]:(ys.subVectors(i[0],i[1]).add(i[0]),h=ys);const f=i[r%o],l=i[(r+1)%o];if(this.closed||r+2<o?d=i[(r+2)%o]:(ys.subVectors(i[o-1],i[o-2]).add(i[o-1]),d=ys),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let M=Math.pow(h.distanceToSquared(f),u),v=Math.pow(f.distanceToSquared(l),u),g=Math.pow(l.distanceToSquared(d),u);v<1e-4&&(v=1),M<1e-4&&(M=v),g<1e-4&&(g=v),yo.initNonuniformCatmullRom(h.x,f.x,l.x,d.x,M,v,g),bo.initNonuniformCatmullRom(h.y,f.y,l.y,d.y,M,v,g),Eo.initNonuniformCatmullRom(h.z,f.z,l.z,d.z,M,v,g)}else this.curveType==="catmullrom"&&(yo.initCatmullRom(h.x,f.x,l.x,d.x,this.tension),bo.initCatmullRom(h.y,f.y,l.y,d.y,this.tension),Eo.initCatmullRom(h.z,f.z,l.z,d.z,this.tension));return n.set(yo.calc(c),bo.calc(c),Eo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new F().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ya(s,t,e,n,i){const o=(n-t)*.5,a=(i-e)*.5,r=s*s,c=s*r;return(2*e-2*n+o+a)*c+(-3*e+3*n-2*o-a)*r+o*s+e}function X0(s,t){const e=1-s;return e*e*t}function q0(s,t){return 2*(1-s)*s*t}function Y0(s,t){return s*s*t}function Xi(s,t,e,n){return X0(s,t)+q0(s,e)+Y0(s,n)}function Z0(s,t){const e=1-s;return e*e*e*t}function K0(s,t){const e=1-s;return 3*e*e*s*t}function J0(s,t){return 3*(1-s)*s*s*t}function j0(s,t){return s*s*s*t}function qi(s,t,e,n,i){return Z0(s,t)+K0(s,e)+J0(s,n)+j0(s,i)}class pc extends ln{constructor(t=new Bt,e=new Bt,n=new Bt,i=new Bt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Bt){const n=e,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(qi(t,i.x,o.x,a.x,r.x),qi(t,i.y,o.y,a.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class $0 extends ln{constructor(t=new F,e=new F,n=new F,i=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new F){const n=e,i=this.v0,o=this.v1,a=this.v2,r=this.v3;return n.set(qi(t,i.x,o.x,a.x,r.x),qi(t,i.y,o.y,a.y,r.y),qi(t,i.z,o.z,a.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mc extends ln{constructor(t=new Bt,e=new Bt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Bt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Bt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Q0 extends ln{constructor(t=new F,e=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new F){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new F){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends ln{constructor(t=new Bt,e=new Bt,n=new Bt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Bt){const n=e,i=this.v0,o=this.v1,a=this.v2;return n.set(Xi(t,i.x,o.x,a.x),Xi(t,i.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mc extends ln{constructor(t=new F,e=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new F){const n=e,i=this.v0,o=this.v1,a=this.v2;return n.set(Xi(t,i.x,o.x,a.x),Xi(t,i.y,o.y,a.y),Xi(t,i.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _c extends ln{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Bt){const n=e,i=this.points,o=(i.length-1)*t,a=Math.floor(o),r=o-a,c=i[a===0?a:a-1],h=i[a],d=i[a>i.length-2?i.length-1:a+1],f=i[a>i.length-3?i.length-1:a+2];return n.set(ya(r,c.x,h.x,d.x,f.x),ya(r,c.y,h.y,d.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Bt().fromArray(i))}return this}}var Us=Object.freeze({__proto__:null,ArcCurve:W0,CatmullRomCurve3:Rn,CubicBezierCurve:pc,CubicBezierCurve3:$0,EllipseCurve:qo,LineCurve:mc,LineCurve3:Q0,QuadraticBezierCurve:gc,QuadraticBezierCurve3:Mc,SplineCurve:_c});class tp extends ln{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Us[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let o=0;for(;o<i.length;){if(i[o]>=n){const a=i[o]-n,r=this.curves[o],c=r.getLength(),h=c===0?0:1-a/c;return r.getPointAt(h,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,o=this.curves;i<o.length;i++){const a=o[i],r=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(r);for(let h=0;h<c.length;h++){const d=c[h];n&&n.equals(d)||(e.push(d),n=d)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Us[i.type]().fromJSON(i))}return this}}class ba extends tp{constructor(t){super(),this.type="Path",this.currentPoint=new Bt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new mc(this.currentPoint.clone(),new Bt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const o=new gc(this.currentPoint.clone(),new Bt(t,e),new Bt(n,i));return this.curves.push(o),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,o,a){const r=new pc(this.currentPoint.clone(),new Bt(t,e),new Bt(n,i),new Bt(o,a));return this.curves.push(r),this.currentPoint.set(o,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new _c(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,o,a){const r=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+r,e+c,n,i,o,a),this}absarc(t,e,n,i,o,a){return this.absellipse(t,e,n,n,i,o,a),this}ellipse(t,e,n,i,o,a,r,c){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(t+h,e+d,n,i,o,a,r,c),this}absellipse(t,e,n,i,o,a,r,c){const h=new qo(t,e,n,i,o,a,r,c);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const d=h.getPoint(1);return this.currentPoint.copy(d),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class jn extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],a=[],r=[],c=[],h=new F,d=new Bt;a.push(0,0,0),r.push(0,0,1),c.push(.5,.5);for(let f=0,l=3;f<=e;f++,l+=3){const u=n+f/e*i;h.x=t*Math.cos(u),h.y=t*Math.sin(u),a.push(h.x,h.y,h.z),r.push(0,0,1),d.x=(a[l]/t+1)/2,d.y=(a[l+1]/t+1)/2,c.push(d.x,d.y)}for(let f=1;f<=e;f++)o.push(f,f+1,0);this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(r,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Q extends De{constructor(t=1,e=1,n=1,i=32,o=1,a=!1,r=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:c};const h=this;i=Math.floor(i),o=Math.floor(o);const d=[],f=[],l=[],u=[];let M=0;const v=[],g=n/2;let p=0;w(),a===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(d),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(u,2));function w(){const y=new F,P=new F;let C=0;const L=(e-t)/n;for(let k=0;k<=o;k++){const S=[],x=k/o,T=x*(e-t)+t;for(let G=0;G<=i;G++){const tt=G/i,O=tt*c+r,V=Math.sin(O),W=Math.cos(O);P.x=T*V,P.y=-x*n+g,P.z=T*W,f.push(P.x,P.y,P.z),y.set(V,L,W).normalize(),l.push(y.x,y.y,y.z),u.push(tt,1-x),S.push(M++)}v.push(S)}for(let k=0;k<i;k++)for(let S=0;S<o;S++){const x=v[S][k],T=v[S+1][k],G=v[S+1][k+1],tt=v[S][k+1];d.push(x,T,tt),d.push(T,G,tt),C+=6}h.addGroup(p,C,0),p+=C}function _(y){const P=M,C=new Bt,L=new F;let k=0;const S=y===!0?t:e,x=y===!0?1:-1;for(let G=1;G<=i;G++)f.push(0,g*x,0),l.push(0,x,0),u.push(.5,.5),M++;const T=M;for(let G=0;G<=i;G++){const O=G/i*c+r,V=Math.cos(O),W=Math.sin(O);L.x=S*W,L.y=g*x,L.z=S*V,f.push(L.x,L.y,L.z),l.push(0,x,0),C.x=V*.5+.5,C.y=W*.5*x+.5,u.push(C.x,C.y),M++}for(let G=0;G<i;G++){const tt=P+G,O=T+G;y===!0?d.push(O,O+1,tt):d.push(O+1,O,tt),k+=3}h.addGroup(p,k,y===!0?1:2),p+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Q(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class he extends Q{constructor(t=1,e=1,n=32,i=1,o=!1,a=0,r=Math.PI*2){super(0,t,e,n,i,o,a,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:r}}static fromJSON(t){return new he(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zo extends De{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],a=[];r(i),h(n),d(),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(o.slice(),3)),this.setAttribute("uv",new de(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(w){const _=new F,y=new F,P=new F;for(let C=0;C<e.length;C+=3)u(e[C+0],_),u(e[C+1],y),u(e[C+2],P),c(_,y,P,w)}function c(w,_,y,P){const C=P+1,L=[];for(let k=0;k<=C;k++){L[k]=[];const S=w.clone().lerp(y,k/C),x=_.clone().lerp(y,k/C),T=C-k;for(let G=0;G<=T;G++)G===0&&k===C?L[k][G]=S:L[k][G]=S.clone().lerp(x,G/T)}for(let k=0;k<C;k++)for(let S=0;S<2*(C-k)-1;S++){const x=Math.floor(S/2);S%2===0?(l(L[k][x+1]),l(L[k+1][x]),l(L[k][x])):(l(L[k][x+1]),l(L[k+1][x+1]),l(L[k+1][x]))}}function h(w){const _=new F;for(let y=0;y<o.length;y+=3)_.x=o[y+0],_.y=o[y+1],_.z=o[y+2],_.normalize().multiplyScalar(w),o[y+0]=_.x,o[y+1]=_.y,o[y+2]=_.z}function d(){const w=new F;for(let _=0;_<o.length;_+=3){w.x=o[_+0],w.y=o[_+1],w.z=o[_+2];const y=g(w)/2/Math.PI+.5,P=p(w)/Math.PI+.5;a.push(y,1-P)}M(),f()}function f(){for(let w=0;w<a.length;w+=6){const _=a[w+0],y=a[w+2],P=a[w+4],C=Math.max(_,y,P),L=Math.min(_,y,P);C>.9&&L<.1&&(_<.2&&(a[w+0]+=1),y<.2&&(a[w+2]+=1),P<.2&&(a[w+4]+=1))}}function l(w){o.push(w.x,w.y,w.z)}function u(w,_){const y=w*3;_.x=t[y+0],_.y=t[y+1],_.z=t[y+2]}function M(){const w=new F,_=new F,y=new F,P=new F,C=new Bt,L=new Bt,k=new Bt;for(let S=0,x=0;S<o.length;S+=9,x+=6){w.set(o[S+0],o[S+1],o[S+2]),_.set(o[S+3],o[S+4],o[S+5]),y.set(o[S+6],o[S+7],o[S+8]),C.set(a[x+0],a[x+1]),L.set(a[x+2],a[x+3]),k.set(a[x+4],a[x+5]),P.copy(w).add(_).add(y).divideScalar(3);const T=g(P);v(C,x+0,w,T),v(L,x+2,_,T),v(k,x+4,y,T)}}function v(w,_,y,P){P<0&&w.x===1&&(a[_]=w.x-1),y.x===0&&y.z===0&&(a[_]=P/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.vertices,t.indices,t.radius,t.details)}}class Ko extends Zo{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Ko(t.radius,t.detail)}}class wc extends ba{constructor(t){super(t),this.uuid=ni(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new ba().fromJSON(i))}return this}}const ep={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let o=vc(s,0,i,e,!0);const a=[];if(!o||o.next===o.prev)return a;let r,c,h,d,f,l,u;if(n&&(o=rp(s,t,o,e)),s.length>80*e){r=h=s[0],c=d=s[1];for(let M=e;M<i;M+=e)f=s[M],l=s[M+1],f<r&&(r=f),l<c&&(c=l),f>h&&(h=f),l>d&&(d=l);u=Math.max(h-r,d-c),u=u!==0?32767/u:0}return Ji(o,a,e,r,c,u,0),a}};function vc(s,t,e,n,i){let o,a;if(i===Mp(s,t,e,n)>0)for(o=t;o<e;o+=n)a=Ea(o,s[o],s[o+1],a);else for(o=e-n;o>=t;o-=n)a=Ea(o,s[o],s[o+1],a);return a&&ks(a,a.next)&&($i(a),a=a.next),a}function ti(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(ks(e,e.next)||_e(e.prev,e,e.next)===0)){if($i(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ji(s,t,e,n,i,o,a){if(!s)return;!a&&o&&dp(s,n,i,o);let r=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,o?ip(s,n,i,o):np(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),$i(s),s=h.next,r=h.next;continue}if(s=h,s===r){a?a===1?(s=sp(ti(s),t,e),Ji(s,t,e,n,i,o,2)):a===2&&op(s,t,e,n,i,o):Ji(ti(s),t,e,n,i,o,1);break}}}function np(s){const t=s.prev,e=s,n=s.next;if(_e(t,e,n)>=0)return!1;const i=t.x,o=e.x,a=n.x,r=t.y,c=e.y,h=n.y,d=i<o?i<a?i:a:o<a?o:a,f=r<c?r<h?r:h:c<h?c:h,l=i>o?i>a?i:a:o>a?o:a,u=r>c?r>h?r:h:c>h?c:h;let M=n.next;for(;M!==t;){if(M.x>=d&&M.x<=l&&M.y>=f&&M.y<=u&&yi(i,r,o,c,a,h,M.x,M.y)&&_e(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function ip(s,t,e,n){const i=s.prev,o=s,a=s.next;if(_e(i,o,a)>=0)return!1;const r=i.x,c=o.x,h=a.x,d=i.y,f=o.y,l=a.y,u=r<c?r<h?r:h:c<h?c:h,M=d<f?d<l?d:l:f<l?f:l,v=r>c?r>h?r:h:c>h?c:h,g=d>f?d>l?d:l:f>l?f:l,p=Fo(u,M,t,e,n),w=Fo(v,g,t,e,n);let _=s.prevZ,y=s.nextZ;for(;_&&_.z>=p&&y&&y.z<=w;){if(_.x>=u&&_.x<=v&&_.y>=M&&_.y<=g&&_!==i&&_!==a&&yi(r,d,c,f,h,l,_.x,_.y)&&_e(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=u&&y.x<=v&&y.y>=M&&y.y<=g&&y!==i&&y!==a&&yi(r,d,c,f,h,l,y.x,y.y)&&_e(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=p;){if(_.x>=u&&_.x<=v&&_.y>=M&&_.y<=g&&_!==i&&_!==a&&yi(r,d,c,f,h,l,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=w;){if(y.x>=u&&y.x<=v&&y.y>=M&&y.y<=g&&y!==i&&y!==a&&yi(r,d,c,f,h,l,y.x,y.y)&&_e(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function sp(s,t,e){let n=s;do{const i=n.prev,o=n.next.next;!ks(i,o)&&xc(i,n,n.next,o)&&ji(i,o)&&ji(o,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),$i(n),$i(n.next),n=s=o),n=n.next}while(n!==s);return ti(n)}function op(s,t,e,n,i,o){let a=s;do{let r=a.next.next;for(;r!==a.prev;){if(a.i!==r.i&&pp(a,r)){let c=Sc(a,r);a=ti(a,a.next),c=ti(c,c.next),Ji(a,t,e,n,i,o,0),Ji(c,t,e,n,i,o,0);return}r=r.next}a=a.next}while(a!==s)}function rp(s,t,e,n){const i=[];let o,a,r,c,h;for(o=0,a=t.length;o<a;o++)r=t[o]*n,c=o<a-1?t[o+1]*n:s.length,h=vc(s,r,c,n,!1),h===h.next&&(h.steiner=!0),i.push(fp(h));for(i.sort(ap),o=0;o<i.length;o++)e=cp(i[o],e);return e}function ap(s,t){return s.x-t.x}function cp(s,t){const e=lp(s,t);if(!e)return t;const n=Sc(e,s);return ti(n,n.next),ti(e,e.next)}function lp(s,t){let e=t,n=-1/0,i;const o=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const l=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=o&&l>n&&(n=l,i=e.x<e.next.x?e:e.next,l===o))return i}e=e.next}while(e!==t);if(!i)return null;const r=i,c=i.x,h=i.y;let d=1/0,f;e=i;do o>=e.x&&e.x>=c&&o!==e.x&&yi(a<h?o:n,a,c,h,a<h?n:o,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(o-e.x),ji(e,s)&&(f<d||f===d&&(e.x>i.x||e.x===i.x&&hp(i,e)))&&(i=e,d=f)),e=e.next;while(e!==r);return i}function hp(s,t){return _e(s.prev,s,t.prev)<0&&_e(t.next,s,s.next)<0}function dp(s,t,e,n){let i=s;do i.z===0&&(i.z=Fo(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,up(i)}function up(s){let t,e,n,i,o,a,r,c,h=1;do{for(e=s,s=null,o=null,a=0;e;){for(a++,n=e,r=0,t=0;t<h&&(r++,n=n.nextZ,!!n);t++);for(c=h;r>0||c>0&&n;)r!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,r--):(i=n,n=n.nextZ,c--),o?o.nextZ=i:s=i,i.prevZ=o,o=i;e=n}o.nextZ=null,h*=2}while(a>1);return s}function Fo(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function fp(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function yi(s,t,e,n,i,o,a,r){return(i-a)*(t-r)>=(s-a)*(o-r)&&(s-a)*(n-r)>=(e-a)*(t-r)&&(e-a)*(o-r)>=(i-a)*(n-r)}function pp(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!mp(s,t)&&(ji(s,t)&&ji(t,s)&&gp(s,t)&&(_e(s.prev,s,t.prev)||_e(s,t.prev,t))||ks(s,t)&&_e(s.prev,s,s.next)>0&&_e(t.prev,t,t.next)>0)}function _e(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function ks(s,t){return s.x===t.x&&s.y===t.y}function xc(s,t,e,n){const i=Es(_e(s,t,e)),o=Es(_e(s,t,n)),a=Es(_e(e,n,s)),r=Es(_e(e,n,t));return!!(i!==o&&a!==r||i===0&&bs(s,e,t)||o===0&&bs(s,n,t)||a===0&&bs(e,s,n)||r===0&&bs(e,t,n))}function bs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Es(s){return s>0?1:s<0?-1:0}function mp(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&xc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function ji(s,t){return _e(s.prev,s,s.next)<0?_e(s,t,s.next)>=0&&_e(s,s.prev,t)>=0:_e(s,t,s.prev)<0||_e(s,s.next,t)<0}function gp(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,o=(s.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&i<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Sc(s,t){const e=new Oo(s.i,s.x,s.y),n=new Oo(t.i,t.x,t.y),i=s.next,o=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Ea(s,t,e,n){const i=new Oo(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function $i(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Oo(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mp(s,t,e,n){let i=0;for(let o=t,a=e-n;o<e;o+=n)i+=(s[a]-s[o])*(s[o+1]+s[a+1]),a=o;return i}class Yi{static area(t){const e=t.length;let n=0;for(let i=e-1,o=0;o<e;i=o++)n+=t[i].x*t[o].y-t[o].x*t[i].y;return n*.5}static isClockWise(t){return Yi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],o=[];Ta(t),Aa(n,t);let a=t.length;e.forEach(Ta);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Aa(n,e[c]);const r=ep.triangulate(n,i);for(let c=0;c<r.length;c+=3)o.push(r.slice(c,c+3));return o}}function Ta(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Aa(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class Jo extends De{constructor(t=new wc([new Bt(.5,.5),new Bt(-.5,.5),new Bt(-.5,-.5),new Bt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],o=[];for(let r=0,c=t.length;r<c;r++){const h=t[r];a(h)}this.setAttribute("position",new de(i,3)),this.setAttribute("uv",new de(o,2)),this.computeVertexNormals();function a(r){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,d=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let l=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,M=e.bevelSize!==void 0?e.bevelSize:u-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:_p;let _,y=!1,P,C,L,k;p&&(_=p.getSpacedPoints(d),y=!0,l=!1,P=p.computeFrenetFrames(d,!1),C=new F,L=new F,k=new F),l||(g=0,u=0,M=0,v=0);const S=r.extractPoints(h);let x=S.shape;const T=S.holes;if(!Yi.isClockWise(x)){x=x.reverse();for(let D=0,_t=T.length;D<_t;D++){const lt=T[D];Yi.isClockWise(lt)&&(T[D]=lt.reverse())}}const tt=Yi.triangulateShape(x,T),O=x;for(let D=0,_t=T.length;D<_t;D++){const lt=T[D];x=x.concat(lt)}function V(D,_t,lt){return _t||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(_t,lt)}const W=x.length,X=tt.length;function nt(D,_t,lt){let xt,dt,Ot;const ct=D.x-_t.x,A=D.y-_t.y,E=lt.x-D.x,Y=lt.y-D.y,yt=ct*ct+A*A,gt=ct*Y-A*E;if(Math.abs(gt)>Number.EPSILON){const at=Math.sqrt(yt),kt=Math.sqrt(E*E+Y*Y),Lt=_t.x-A/at,Pt=_t.y+ct/at,Xt=lt.x-Y/kt,Nt=lt.y+E/kt,Tt=((Xt-Lt)*Y-(Nt-Pt)*E)/(ct*Y-A*E);xt=Lt+ct*Tt-D.x,dt=Pt+A*Tt-D.y;const Qt=xt*xt+dt*dt;if(Qt<=2)return new Bt(xt,dt);Ot=Math.sqrt(Qt/2)}else{let at=!1;ct>Number.EPSILON?E>Number.EPSILON&&(at=!0):ct<-Number.EPSILON?E<-Number.EPSILON&&(at=!0):Math.sign(A)===Math.sign(Y)&&(at=!0),at?(xt=-A,dt=ct,Ot=Math.sqrt(yt)):(xt=ct,dt=A,Ot=Math.sqrt(yt/2))}return new Bt(xt/Ot,dt/Ot)}const J=[];for(let D=0,_t=O.length,lt=_t-1,xt=D+1;D<_t;D++,lt++,xt++)lt===_t&&(lt=0),xt===_t&&(xt=0),J[D]=nt(O[D],O[lt],O[xt]);const K=[];let q,Mt=J.concat();for(let D=0,_t=T.length;D<_t;D++){const lt=T[D];q=[];for(let xt=0,dt=lt.length,Ot=dt-1,ct=xt+1;xt<dt;xt++,Ot++,ct++)Ot===dt&&(Ot=0),ct===dt&&(ct=0),q[xt]=nt(lt[xt],lt[Ot],lt[ct]);K.push(q),Mt=Mt.concat(q)}for(let D=0;D<g;D++){const _t=D/g,lt=u*Math.cos(_t*Math.PI/2),xt=M*Math.sin(_t*Math.PI/2)+v;for(let dt=0,Ot=O.length;dt<Ot;dt++){const ct=V(O[dt],J[dt],xt);mt(ct.x,ct.y,-lt)}for(let dt=0,Ot=T.length;dt<Ot;dt++){const ct=T[dt];q=K[dt];for(let A=0,E=ct.length;A<E;A++){const Y=V(ct[A],q[A],xt);mt(Y.x,Y.y,-lt)}}}const j=M+v;for(let D=0;D<W;D++){const _t=l?V(x[D],Mt[D],j):x[D];y?(L.copy(P.normals[0]).multiplyScalar(_t.x),C.copy(P.binormals[0]).multiplyScalar(_t.y),k.copy(_[0]).add(L).add(C),mt(k.x,k.y,k.z)):mt(_t.x,_t.y,0)}for(let D=1;D<=d;D++)for(let _t=0;_t<W;_t++){const lt=l?V(x[_t],Mt[_t],j):x[_t];y?(L.copy(P.normals[D]).multiplyScalar(lt.x),C.copy(P.binormals[D]).multiplyScalar(lt.y),k.copy(_[D]).add(L).add(C),mt(k.x,k.y,k.z)):mt(lt.x,lt.y,f/d*D)}for(let D=g-1;D>=0;D--){const _t=D/g,lt=u*Math.cos(_t*Math.PI/2),xt=M*Math.sin(_t*Math.PI/2)+v;for(let dt=0,Ot=O.length;dt<Ot;dt++){const ct=V(O[dt],J[dt],xt);mt(ct.x,ct.y,f+lt)}for(let dt=0,Ot=T.length;dt<Ot;dt++){const ct=T[dt];q=K[dt];for(let A=0,E=ct.length;A<E;A++){const Y=V(ct[A],q[A],xt);y?mt(Y.x,Y.y+_[d-1].y,_[d-1].x+lt):mt(Y.x,Y.y,f+lt)}}}st(),$();function st(){const D=i.length/3;if(l){let _t=0,lt=W*_t;for(let xt=0;xt<X;xt++){const dt=tt[xt];Rt(dt[2]+lt,dt[1]+lt,dt[0]+lt)}_t=d+g*2,lt=W*_t;for(let xt=0;xt<X;xt++){const dt=tt[xt];Rt(dt[0]+lt,dt[1]+lt,dt[2]+lt)}}else{for(let _t=0;_t<X;_t++){const lt=tt[_t];Rt(lt[2],lt[1],lt[0])}for(let _t=0;_t<X;_t++){const lt=tt[_t];Rt(lt[0]+W*d,lt[1]+W*d,lt[2]+W*d)}}n.addGroup(D,i.length/3-D,0)}function $(){const D=i.length/3;let _t=0;vt(O,_t),_t+=O.length;for(let lt=0,xt=T.length;lt<xt;lt++){const dt=T[lt];vt(dt,_t),_t+=dt.length}n.addGroup(D,i.length/3-D,1)}function vt(D,_t){let lt=D.length;for(;--lt>=0;){const xt=lt;let dt=lt-1;dt<0&&(dt=D.length-1);for(let Ot=0,ct=d+g*2;Ot<ct;Ot++){const A=W*Ot,E=W*(Ot+1),Y=_t+xt+A,yt=_t+dt+A,gt=_t+dt+E,at=_t+xt+E;Ut(Y,yt,gt,at)}}}function mt(D,_t,lt){c.push(D),c.push(_t),c.push(lt)}function Rt(D,_t,lt){ut(D),ut(_t),ut(lt);const xt=i.length/3,dt=w.generateTopUV(n,i,xt-3,xt-2,xt-1);Ct(dt[0]),Ct(dt[1]),Ct(dt[2])}function Ut(D,_t,lt,xt){ut(D),ut(_t),ut(xt),ut(_t),ut(lt),ut(xt);const dt=i.length/3,Ot=w.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);Ct(Ot[0]),Ct(Ot[1]),Ct(Ot[3]),Ct(Ot[1]),Ct(Ot[2]),Ct(Ot[3])}function ut(D){i.push(c[D*3+0]),i.push(c[D*3+1]),i.push(c[D*3+2])}function Ct(D){o.push(D.x),o.push(D.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return wp(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,a=t.shapes.length;o<a;o++){const r=e[t.shapes[o]];n.push(r)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Us[i.type]().fromJSON(i)),new Jo(n,t.options)}}const _p={generateTopUV:function(s,t,e,n,i){const o=t[e*3],a=t[e*3+1],r=t[n*3],c=t[n*3+1],h=t[i*3],d=t[i*3+1];return[new Bt(o,a),new Bt(r,c),new Bt(h,d)]},generateSideWallUV:function(s,t,e,n,i,o){const a=t[e*3],r=t[e*3+1],c=t[e*3+2],h=t[n*3],d=t[n*3+1],f=t[n*3+2],l=t[i*3],u=t[i*3+1],M=t[i*3+2],v=t[o*3],g=t[o*3+1],p=t[o*3+2];return Math.abs(r-d)<Math.abs(a-h)?[new Bt(a,1-c),new Bt(h,1-f),new Bt(l,1-M),new Bt(v,1-p)]:[new Bt(r,1-c),new Bt(d,1-f),new Bt(u,1-M),new Bt(g,1-p)]}};function wp(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const o=s[n];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class qt extends De{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+r,Math.PI);let h=0;const d=[],f=new F,l=new F,u=[],M=[],v=[],g=[];for(let p=0;p<=n;p++){const w=[],_=p/n;let y=0;p===0&&a===0?y=.5/e:p===n&&c===Math.PI&&(y=-.5/e);for(let P=0;P<=e;P++){const C=P/e;f.x=-t*Math.cos(i+C*o)*Math.sin(a+_*r),f.y=t*Math.cos(a+_*r),f.z=t*Math.sin(i+C*o)*Math.sin(a+_*r),M.push(f.x,f.y,f.z),l.copy(f).normalize(),v.push(l.x,l.y,l.z),g.push(C+y,1-_),w.push(h++)}d.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const _=d[p][w+1],y=d[p][w],P=d[p+1][w],C=d[p+1][w+1];(p!==0||a>0)&&u.push(_,y,C),(p!==n-1||c<Math.PI)&&u.push(y,P,C)}this.setIndex(u),this.setAttribute("position",new de(M,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class an extends De{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],c=[],h=[],d=new F,f=new F,l=new F;for(let u=0;u<=n;u++)for(let M=0;M<=i;M++){const v=M/i*o,g=u/n*Math.PI*2;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),r.push(f.x,f.y,f.z),d.x=t*Math.cos(v),d.y=t*Math.sin(v),l.subVectors(f,d).normalize(),c.push(l.x,l.y,l.z),h.push(M/i),h.push(u/n)}for(let u=1;u<=n;u++)for(let M=1;M<=i;M++){const v=(i+1)*u+M-1,g=(i+1)*(u-1)+M-1,p=(i+1)*(u-1)+M,w=(i+1)*u+M;a.push(v,g,w),a.push(g,p,w)}this.setIndex(a),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new an(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class _n extends De{constructor(t=new Mc(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),e=64,n=1,i=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:o};const a=t.computeFrenetFrames(e,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const r=new F,c=new F,h=new Bt;let d=new F;const f=[],l=[],u=[],M=[];v(),this.setIndex(M),this.setAttribute("position",new de(f,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(u,2));function v(){for(let _=0;_<e;_++)g(_);g(o===!1?e:0),w(),p()}function g(_){d=t.getPointAt(_/e,d);const y=a.normals[_],P=a.binormals[_];for(let C=0;C<=i;C++){const L=C/i*Math.PI*2,k=Math.sin(L),S=-Math.cos(L);c.x=S*y.x+k*P.x,c.y=S*y.y+k*P.y,c.z=S*y.z+k*P.z,c.normalize(),l.push(c.x,c.y,c.z),r.x=d.x+n*c.x,r.y=d.y+n*c.y,r.z=d.z+n*c.z,f.push(r.x,r.y,r.z)}}function p(){for(let _=1;_<=e;_++)for(let y=1;y<=i;y++){const P=(i+1)*(_-1)+(y-1),C=(i+1)*_+(y-1),L=(i+1)*_+y,k=(i+1)*(_-1)+y;M.push(P,C,k),M.push(C,L,k)}}function w(){for(let _=0;_<=e;_++)for(let y=0;y<=i;y++)h.x=_/e,h.y=y/i,u.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new _n(new Us[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class N extends Ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jo extends N{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Bt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Le(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class zs extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class vp extends zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ce(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const To=new xe,Pa=new F,Ra=new F;class $o{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Bt(512,512),this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ho,this._frameExtents=new Bt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Pa.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pa),Ra.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ra),e.updateMatrixWorld(),To.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class xp extends $o{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ri*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,o=t.distance||e.far;(n!==e.fov||i!==e.aspect||o!==e.far)&&(e.fov=n,e.aspect=i,e.far=o,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Sp extends zs{constructor(t,e,n=0,i=Math.PI/3,o=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=i,this.penumbra=o,this.decay=a,this.map=null,this.shadow=new xp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Ca=new xe,ki=new F,Ao=new F;class yp extends $o{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Bt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ki.setFromMatrixPosition(t.matrixWorld),n.position.copy(ki),Ao.copy(n.position),Ao.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ao),n.updateMatrixWorld(),i.makeTranslation(-ki.x,-ki.y,-ki.z),Ca.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca)}}class Pn extends zs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new yp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bp extends $o{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ep extends zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new bp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Tp{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=La(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=La();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function La(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);const ei=()=>{if(typeof window>"u")return!1;const s=navigator.userAgent||navigator.vendor||window.opera||"",t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(s),e="ontouchstart"in window||navigator.maxTouchPoints>0,n=Math.min(window.innerWidth,window.innerHeight)<=768||window.innerWidth<=1024;return t||e&&n},$t={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:5,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},fe={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class Ap{constructor(){this.state=fe.MENU,this.speedKmh=$t.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=$t.LANES[1],this.targetLaneX=$t.LANES[1],this.crashTimer=0}startNewGame(){this.state=fe.PLAYING,this.speedKmh=$t.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=$t.LANES[1],this.targetLaneX=$t.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==fe.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<$t.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=$t.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min($t.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=$t.SCORING.COMBO_TIMEOUT;const t=$t.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min($t.NITRO.MAX,this.nitro+$t.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==fe.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),e.keys.left&&!e.keys.right?(this.steerHoldTimer=(this.steerHoldTimer||0)+t,this.steerHoldTimer>.22&&(this.switchLane(-1),this.steerHoldTimer=.08)):e.keys.right&&!e.keys.left?(this.steerHoldTimer=(this.steerHoldTimer||0)+t,this.steerHoldTimer>.22&&(this.switchLane(1),this.steerHoldTimer=.08)):this.steerHoldTimer=0,this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*$t.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,o=e.keys.accelerate,a=e.keys.boost,r=this.distanceMeters/1e3,c=Math.min($t.SPEED.MAX_PROGRESSIVE_BONUS,r*$t.SPEED.PROGRESSIVE_RATE),h=$t.SPEED.BASE_START+c,d=h+45,f=$t.SPEED.BOOST+c*.4;a?this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-$t.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(f,this.speedKmh+$t.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.speedKmh=Math.min(d,this.speedKmh+$t.SPEED.ACCELERATION*1.6*t)):(this.isBoosting=!1,this.nitro=Math.min($t.NITRO.MAX,this.nitro+$t.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max($t.SPEED.MIN,this.speedKmh-$t.SPEED.BRAKING*t):o?this.speedKmh=Math.min(d,this.speedKmh+$t.SPEED.ACCELERATION*1.6*t):this.speedKmh<h?this.speedKmh=Math.min(h,this.speedKmh+$t.SPEED.ACCELERATION*t):this.speedKmh>h&&(this.speedKmh=Math.max(h,this.speedKmh-$t.SPEED.NATURAL_DECEL*t)));const u=this.speedKmh*1e3/3600*t;this.distanceMeters+=u,this.score+=Math.round(u*$t.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=fe.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class Pp{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.activeSwipes=new Map,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","Space"].includes(t.key)||t.code==="Space")&&t.preventDefault();const e=t.code,n=t.key;e==="ArrowLeft"||e==="KeyA"||n==="ArrowLeft"||n==="a"||n==="A"?((!this.keys.left||t.repeat)&&(this.laneChangeRequested=-1),this.keys.left=!0):(e==="ArrowRight"||e==="KeyD"||n==="ArrowRight"||n==="d"||n==="D")&&((!this.keys.right||t.repeat)&&(this.laneChangeRequested=1),this.keys.right=!0),(e==="ArrowUp"||e==="KeyW"||n==="ArrowUp"||n==="w"||n==="W")&&(this.keys.accelerate=!0),(e==="Space"||e==="ShiftLeft"||e==="ShiftRight"||e==="KeyN"||e==="KeyX"||n===" "||n==="Shift"||n==="n"||n==="N"||n==="x"||n==="X")&&(this.keys.boost=!0),(e==="ArrowDown"||e==="KeyS"||n==="ArrowDown"||n==="s"||n==="S")&&(this.keys.brake=!0),(e==="KeyH"||e==="KeyE"||e==="KeyF"||n==="h"||n==="H"||n==="e"||n==="E"||n==="f"||n==="F")&&(this.keys.horn=!0,this.onHorn&&this.onHorn()),(e==="KeyP"||e==="Escape"||n==="p"||n==="P"||n==="Escape")&&this.onPauseToggle&&this.onPauseToggle(),(e==="KeyR"||n==="r"||n==="R")&&this.onRestart&&this.onRestart()}),window.addEventListener("keyup",t=>{const e=t.code,n=t.key;(e==="ArrowLeft"||e==="KeyA"||n==="ArrowLeft"||n==="a"||n==="A")&&(this.keys.left=!1),(e==="ArrowRight"||e==="KeyD"||n==="ArrowRight"||n==="d"||n==="D")&&(this.keys.right=!1),(e==="ArrowUp"||e==="KeyW"||n==="ArrowUp"||n==="w"||n==="W")&&(this.keys.accelerate=!1),(e==="Space"||e==="ShiftLeft"||e==="ShiftRight"||e==="KeyN"||e==="KeyX"||n===" "||n==="Shift"||n==="n"||n==="N"||n==="x"||n==="X")&&(this.keys.boost=!1),(e==="ArrowDown"||e==="KeyS"||n==="ArrowDown"||n==="s"||n==="S")&&(this.keys.brake=!1),(e==="KeyH"||e==="KeyE"||e==="KeyF"||n==="h"||n==="H"||n==="e"||n==="E"||n==="f"||n==="F")&&(this.keys.horn=!1)}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0;for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e];n.target&&n.target.closest&&n.target.closest("#mobile-controls, #hud-layer, .screen, button, .touch-btn, .hud-icon-btn, .modal-overlay")||this.activeSwipes.set(n.identifier,{startX:n.clientX,startY:n.clientY,startTime:Date.now()})}},{passive:!0}),window.addEventListener("touchend",t=>{for(let e=0;e<t.changedTouches.length;e++){const n=t.changedTouches[e],i=this.activeSwipes.get(n.identifier);if(!i)continue;this.activeSwipes.delete(n.identifier);const o=n.clientX-i.startX,a=n.clientY-i.startY;Date.now()-i.startTime<350&&Math.abs(o)>40&&Math.abs(o)>Math.abs(a)*1.3&&(o<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0}),window.addEventListener("touchcancel",t=>{for(let e=0;e<t.changedTouches.length;e++)this.activeSwipes.delete(t.changedTouches[e].identifier)},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}setSteerLeft(t){t&&!this.keys.left&&(this.laneChangeRequested=-1),this.keys.left=!!t}setSteerRight(t){t&&!this.keys.right&&(this.laneChangeRequested=1),this.keys.right=!!t}triggerSteerLeft(){this.setSteerLeft(!0),setTimeout(()=>{this.keys.left&&this.setSteerLeft(!1)},120)}triggerSteerRight(){this.setSteerRight(!0),setTimeout(()=>{this.keys.right&&this.setSteerRight(!1)},120)}setBrake(t){this.keys.brake=!!t}setAccelerate(t){this.keys.accelerate=!!t}setNitro(t){this.keys.boost=!!t}setBoost(t){this.keys.boost=!!t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0,this.activeSwipes.clear()}}class Rp{constructor(t){this.camera=t,this.defaultOffset=new F($t.CAMERA.DEFAULT_OFFSET.x,$t.CAMERA.DEFAULT_OFFSET.y,$t.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new F($t.CAMERA.LOOK_OFFSET.x,$t.CAMERA.LOOK_OFFSET.y,$t.CAMERA.LOOK_OFFSET.z),this.currentPos=new F,this.currentLook=new F,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=$t.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.1,6.2),this.lookOffset.set(0,1.25,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=$t.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const o=t.group.position,a=Math.min(1,e/$t.SPEED.MAX_NORMAL),r=this.camera.aspect,c=r<1?Math.min(24,(1-r)*36):0;this.targetFOV=$t.CAMERA.BASE_FOV+c+a*10+(n?8:0);const h=this.targetFOV-this.camera.fov;Math.abs(h)>.04&&(this.camera.fov+=h*Math.min(1,i*$t.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix());const d=o.x+this.defaultOffset.x,f=o.y+this.defaultOffset.y,l=o.z+this.defaultOffset.z+(n?.8:0),u=Math.min(1,i*10),M=Math.min(1,i*12);this.currentPos.x+=(d-this.currentPos.x)*u,this.currentPos.y+=(f-this.currentPos.y)*M,this.currentPos.z=l;const v=o.x+this.lookOffset.x,g=o.y+this.lookOffset.y,p=o.z+this.lookOffset.z;this.currentLook.x+=(v-this.currentLook.x)*u,this.currentLook.y+=(g-this.currentLook.y)*M,this.currentLook.z=p;let w=0,_=0;if(e>70){const L=e/280*.03;w=(Math.random()-.5)*L,_=(Math.random()-.5)*L}let y=0,P=0,C=0;if(this.shakeDuration>0){this.shakeDuration-=i;const L=Math.max(0,this.shakeDuration/.6),k=this.shakeIntensity*L;y=(Math.random()-.5)*k,P=(Math.random()-.5)*k,C=(Math.random()-.5)*k}this.camera.position.set(this.currentPos.x+w+y,this.currentPos.y+_+P,this.currentPos.z+C),this.camera.lookAt(this.currentLook.x+w*.5,this.currentLook.y+_*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,o=(e?4.8:8.2)*i,a=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),r=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*o,a,Math.cos(c)*o),this.camera.lookAt(0,r,0)}}const Cp={};class Lp{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){if(!this.ctx)return;const t="./",e=`${t.endsWith("/")?t:t+"/"}audio/eta_ki_korli_mama.mp3`;fetch(e).then(n=>{if(!n.ok)throw new Error(`HTTP ${n.status}`);return n.arrayBuffer()}).then(n=>this.ctx.decodeAudioData(n)).then(n=>{this.crashVoiceBuffer=n}).catch(n=>{console.warn("Could not decode crash voice buffer:",n)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const o=this.ctx.createGain();o.gain.setValueAtTime(.04,t),this.highOsc.connect(o),o.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,o=0,a=0;for(let c=0;c<t;c++){const h=Math.random()*2-1;i=.98*i+h*.055,o=.95*o+h*.075,a=.85*a+h*.15,n[c]=(i+o+a)*.45}const r=this.ctx.createBufferSource();r.buffer=e,r.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),r.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),r.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const o=this.ctx.createBufferSource();o.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(500,t),a.frequency.exponentialRampToValueAtTime(180,t+.35);const r=this.ctx.createGain();r.gain.setValueAtTime(.001,t),r.gain.linearRampToValueAtTime(.07,t+.05),r.gain.exponentialRampToValueAtTime(.001,t+.35),o.connect(a),a.connect(r),r.connect(this.masterGain),o.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const o=[2093,2637];[0,.09].forEach(a=>{o.forEach(r=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(r,n+a),h.gain.setValueAtTime(0,n+a),h.gain.linearRampToValueAtTime(.22,n+a+.008),h.gain.exponentialRampToValueAtTime(1e-4,n+a+.18),c.connect(h),h.connect(this.masterGain),c.start(n+a),c.stop(n+a+.2)})});return}if(e==="cng"){[620,780].forEach(a=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain();r.type="sawtooth",r.frequency.setValueAtTime(a,n);const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),r.connect(h),h.connect(c),c.connect(this.masterGain),r.start(n),r.stop(n+.35)});return}[330,415.3,523.25].forEach((o,a)=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();r.type=a===0?"sine":"triangle",r.frequency.setValueAtTime(o,n),h.type="lowpass",h.frequency.setValueAtTime(1400,n);const d=a===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(d,n+.02),c.gain.setValueAtTime(d,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),r.connect(h),h.connect(c),c.connect(this.masterGain),r.start(n),r.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime(n*.8,t),o.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.08,t+.06),a.gain.exponentialRampToValueAtTime(1e-4,t+.45),o.connect(a),a.connect(this.masterGain),o.start(t),o.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const o=this.ctx.currentTime,a=Math.min(1,Math.max(0,t/200)),r=a*5%1,c=900+a*1800+r*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const h=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,h),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,o,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,o,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,o,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,o,.05);const d=300+a*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(d,o,.06);const f=.16+a*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,f),o,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+a*350,o,.08),this.turboGain.gain.setTargetAtTime(.05,o,.08)):this.turboGain.gain.setTargetAtTime(1e-4,o,.15);const l=Math.pow(a,1.3)*.06;this.roadGain.gain.setTargetAtTime(l,o,.08),this.roadFilter.frequency.setTargetAtTime(180+a*250,o,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((o,a)=>{const r=this.ctx.createOscillator(),c=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime((a===0?n:n*1.25)*i,e+o),c.gain.setValueAtTime(.001,e+o),c.gain.linearRampToValueAtTime(.12,e+o+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+o+.28),r.connect(c),c.connect(this.masterGain),r.start(e+o),r.stop(e+o+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),o=this.ctx.createBuffer(1,i,this.ctx.sampleRate),a=o.getChannelData(0);for(let d=0;d<i;d++)a[d]=(Math.random()*2-1)*Math.exp(-d/(this.ctx.sampleRate*.12));const r=this.ctx.createBufferSource();r.buffer=o;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const h=this.ctx.createGain();h.gain.setValueAtTime(.3,t),h.gain.exponentialRampToValueAtTime(.001,t+.45),r.connect(c),c.connect(h),h.connect(this.masterGain),r.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(o=>o.lang.includes("bn")||o.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,o=this.ctx.createOscillator(),a=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(e,t+i),a.gain.setValueAtTime(.001,t+i),a.gain.linearRampToValueAtTime(.12,t+i+.02),a.gain.exponentialRampToValueAtTime(.001,t+i+.32),o.connect(a),a.connect(this.masterGain),o.start(t+i),o.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class Ip{constructor(){this.group=new pt,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new F(2.1,2.8,5.5),this._boxCenter=new F,this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new te(t),i=document.createElement("canvas");i.width=1024,i.height=384;const o=i.getContext("2d");o.fillStyle="#f8fafc",o.fillRect(0,0,1024,384),o.fillStyle="#dc2626",o.fillRect(0,0,1024,36),o.fillRect(0,348,1024,36),o.fillStyle="#16a34a",o.beginPath(),o.arc(512,180,110,Math.PI,0),o.fill(),o.fillStyle="#f59e0b",o.fillRect(472,80,80,100),o.beginPath(),o.moveTo(512,20),o.lineTo(460,80),o.lineTo(564,80),o.fill();const a=(b,z)=>{o.fillStyle="#dc2626";for(let et=0;et<Math.PI*2;et+=Math.PI/3)o.beginPath(),o.arc(b+Math.cos(et)*35,z+Math.sin(et)*35,24,0,Math.PI*2),o.fill();o.fillStyle="#fbbf24",o.beginPath(),o.arc(b,z,22,0,Math.PI*2),o.fill()};a(220,180),a(804,180),o.fillStyle="#1e293b",o.font="bold 54px serif",o.textAlign="center",o.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const r=new te(i),c=document.createElement("canvas");c.width=1024,c.height=512;const h=c.getContext("2d");h.fillStyle="#f59e0b",h.fillRect(0,0,1024,140);for(let b=60;b<1024;b+=110)h.fillStyle="#dc2626",h.beginPath(),h.arc(b,70,32,0,Math.PI*2),h.fill(),h.fillStyle="#22c55e",h.beginPath(),h.arc(b,70,16,0,Math.PI*2),h.fill();h.fillStyle="#15803d",h.fillRect(0,140,1024,372),h.strokeStyle="#f8fafc",h.lineWidth=8;for(let b=30;b<1024;b+=138)h.strokeRect(b,160,116,320);h.fillStyle="#ffffff",h.font="900 80px sans-serif",h.textAlign="center",h.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),h.fillStyle="#dc2626",h.fillRect(0,140,30,372),h.fillRect(994,140,30,372);const d=new te(c),f=document.createElement("canvas");f.width=1024,f.height=680;const l=f.getContext("2d");l.fillStyle="#4a90e2",l.fillRect(0,0,1024,680),l.fillStyle="#172554",l.beginPath(),l.moveTo(0,0),l.lineTo(110,0),l.lineTo(0,85),l.closePath(),l.fill(),l.beginPath(),l.moveTo(1024,0),l.lineTo(914,0),l.lineTo(1024,85),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.beginPath(),l.moveTo(0,85),l.lineTo(110,0),l.lineTo(914,0),l.lineTo(1024,85),l.stroke(),l.fillStyle="#2563eb",l.fillRect(100,35,824,45),l.strokeStyle="#18181b",l.lineWidth=3,l.strokeRect(100,35,824,45),l.fillStyle="#1e3a8a";for(let b=110;b<=900;b+=32)l.beginPath(),l.moveTo(b,80),l.lineTo(b+16,45),l.lineTo(b+32,80),l.closePath(),l.fill();const u=b=>{l.fillStyle="#facc15",l.fillRect(b,85,54,345),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(b,85,54,345);for(let z=104;z<=415;z+=26)l.fillStyle="#dc2626",l.beginPath(),l.arc(b+27,z,9.5,0,Math.PI*2),l.fill(),l.fillStyle="#fde047",l.beginPath(),l.arc(b+27,z,4.5,0,Math.PI*2),l.fill()};u(36),u(934);const M=90,v=335,g=M+v,p=104,w=252;l.fillStyle="#78aee6",l.fillRect(p,M,w,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(p,M,w,v);const _=386;l.fillStyle="#78aee6",l.fillRect(_,M,w,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(_,M,w,v);const y=668;l.fillStyle="#78aee6",l.fillRect(y,M,w,v),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(y,M,w,v);const P=(b,z)=>{[{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:0},{dx:-1,dy:0}].forEach(({dx:ft,dy:Dt})=>{l.fillStyle="#15803d",l.beginPath();const St=b+ft*72,Et=z+Dt*72,ot=-Dt*16,Gt=ft*16;l.moveTo(b+ft*24,z+Dt*24),l.quadraticCurveTo(b+ft*46+ot,z+Dt*46+Gt,St,Et),l.quadraticCurveTo(b+ft*46-ot,z+Dt*46-Gt,b+ft*24,z+Dt*24),l.fill(),l.fillStyle="#166534",l.beginPath();const Yt=b+ft*52+ot*1.5,ee=z+Dt*52+Gt*1.5;l.moveTo(b+ft*22,z+Dt*22),l.quadraticCurveTo(b+ft*34+ot*1.8,z+Dt*34+Gt*1.8,Yt,ee),l.quadraticCurveTo(b+ft*38+ot*.8,z+Dt*38+Gt*.8,b+ft*22,z+Dt*22),l.fill(),l.beginPath();const Te=b+ft*52-ot*1.5,we=z+Dt*52-Gt*1.5;l.moveTo(b+ft*22,z+Dt*22),l.quadraticCurveTo(b+ft*34-ot*1.8,z+Dt*34-Gt*1.8,Te,we),l.quadraticCurveTo(b+ft*38-ot*.8,z+Dt*38-Gt*.8,b+ft*22,z+Dt*22),l.fill(),l.strokeStyle="#4ade80",l.lineWidth=1.8,l.beginPath(),l.moveTo(b+ft*26,z+Dt*26),l.lineTo(St*.95+b*.05,Et*.95+z*.05),l.stroke()}),[{dx:.707,dy:-.707},{dx:-.707,dy:-.707},{dx:.707,dy:.707},{dx:-.707,dy:.707}].forEach(({dx:ft,dy:Dt})=>{l.fillStyle="#16a34a",l.beginPath();const St=b+ft*46,Et=z+Dt*46,ot=-Dt*10,Gt=ft*10;l.moveTo(b+ft*22,z+Dt*22),l.quadraticCurveTo(b+ft*32+ot,z+Dt*32+Gt,St,Et),l.quadraticCurveTo(b+ft*32-ot,z+Dt*32-Gt,b+ft*22,z+Dt*22),l.fill()}),l.fillStyle="#facc15";for(let ft=0;ft<Math.PI*2;ft+=Math.PI/8)l.beginPath(),l.arc(b+Math.cos(ft)*27,z+Math.sin(ft)*27,4.5,0,Math.PI*2),l.fill();l.fillStyle="#facc15",l.beginPath(),l.arc(b,z,25,0,Math.PI*2),l.fill(),l.strokeStyle="#ca8a04",l.lineWidth=2,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.arc(b,z,14,0,Math.PI*2),l.fill(),l.fillStyle="#fef08a",l.beginPath(),l.arc(b,z,6,0,Math.PI*2),l.fill()};P(p+w*.5,M+v*.5),P(y+w*.5,M+v*.5),((b,z,et)=>{l.strokeStyle="#18181b",l.lineWidth=3.5,l.lineCap="round",l.beginPath(),l.moveTo(b-24,et),l.lineTo(b-30,et-5),l.moveTo(b-24,et),l.lineTo(b-18,et-5),l.moveTo(b-24,et),l.lineTo(b-22,et-22),l.lineTo(b-32,et-52),l.lineTo(b-18,et-80),l.stroke(),l.beginPath(),l.moveTo(b+12,et),l.lineTo(b+6,et-5),l.moveTo(b+12,et),l.lineTo(b+18,et-5),l.moveTo(b+12,et),l.lineTo(b+14,et-22),l.lineTo(b+24,et-52),l.lineTo(b+8,et-84),l.stroke(),[{tipX:b+72,tipY:z-25,midX:b+45,midY:z-8},{tipX:b+95,tipY:z-2,midX:b+56,midY:z+12},{tipX:b+104,tipY:z+24,midX:b+58,midY:z+32},{tipX:b+82,tipY:z+50,midX:b+48,midY:z+46}].forEach(({tipX:Dt,tipY:St,midX:Et,midY:ot})=>{l.fillStyle="#facc15",l.beginPath(),l.moveTo(b+16,z+30),l.quadraticCurveTo(Et,ot-12,Dt,St),l.quadraticCurveTo(Dt+6,St+12,Dt-12,St+18),l.quadraticCurveTo(Et,ot+12,b+16,z+38),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(Dt-18,St+4),l.quadraticCurveTo(Dt-4,St-8,Dt,St),l.quadraticCurveTo(Dt+6,St+12,Dt-12,St+18),l.quadraticCurveTo(Dt-12,St+10,Dt-18,St+4),l.closePath(),l.fill()}),l.fillStyle="#facc15",l.beginPath(),l.moveTo(b-36,z+44),l.quadraticCurveTo(b-2,z+72,b+34,z+46),l.quadraticCurveTo(b+8,z+22,b-36,z+44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(b-16,z-42),l.quadraticCurveTo(b-62,z-2,b-42,z+46),l.quadraticCurveTo(b+12,z+34,b+4,z-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(b-18,z-28),l.quadraticCurveTo(b+24,z-35,b+58,z-14),l.lineTo(b+52,z+12),l.quadraticCurveTo(b+14,z+18,b-22,z+12),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#38bdf8",[{x:b+58,y:z-14},{x:b+64,y:z+4},{x:b+52,y:z+18}].forEach(({x:Dt,y:St})=>{l.beginPath(),l.ellipse(Dt,St,9,6,-Math.PI/4,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=1.8,l.stroke()}),l.strokeStyle="#1e3a8a",l.lineWidth=2,l.beginPath(),l.moveTo(b-4,z-18),l.lineTo(b+42,z-8),l.moveTo(b-2,z-6),l.lineTo(b+44,z+4),l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(b-24,z-32),l.quadraticCurveTo(b-28,z-68,b-2,z-78),l.quadraticCurveTo(b+24,z-74,b+22,z-48),l.quadraticCurveTo(b+8,z-28,b-16,z-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.moveTo(b+20,z-58),l.quadraticCurveTo(b+36,z-54,b+44,z-42),l.quadraticCurveTo(b+28,z-42,b+18,z-44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.2,l.stroke(),l.beginPath(),l.moveTo(b+20,z-50),l.lineTo(b+42,z-43),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(b+6,z-58,8.5,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2,l.stroke(),l.fillStyle="#18181b",l.beginPath(),l.arc(b+8,z-58,4.2,0,Math.PI*2),l.fill(),l.fillStyle="#ffffff",l.beginPath(),l.arc(b+7,z-60,1.8,0,Math.PI*2),l.fill()})(_+w*.5,M+v*.52,g),l.fillStyle="#3b82f6",l.fillRect(20,g,984,45),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(20,g,984,45);const L=b=>{l.fillStyle="#94a3b8",l.fillRect(b,g+8,54,28),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(b,g+8,54,28),l.fillStyle="#334155",l.fillRect(b+22,g+4,10,36),l.fillStyle="#f8fafc",l.fillRect(b+6,g+18,6,8),l.fillRect(b+42,g+18,6,8)};L(205),L(485),L(765);const k=470;l.fillStyle="#4a90e2",l.beginPath(),l.moveTo(20,k),l.lineTo(20,580),l.lineTo(315,580),l.lineTo(365,635),l.lineTo(659,635),l.lineTo(709,580),l.lineTo(1004,580),l.lineTo(1004,k),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.stroke();const S=(b,z)=>{l.fillStyle="#18181b",l.fillRect(b-4,498,172,64),l.strokeStyle="#facc15",l.lineWidth=3,l.strokeRect(b-4,498,172,64),(z?["#f59e0b","#ef4444","#f8fafc"]:["#f8fafc","#ef4444","#f59e0b"]).forEach((Vt,ft)=>{l.fillStyle=Vt,l.fillRect(b+ft*54+2,504,50,52),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(b+ft*54+2,504,50,52),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(b+ft*54+6,508,42,6)})};S(118,!0),S(742,!1);const x=new te(f);this.yellowPaint=new N({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new N({color:165063,roughness:.4,metalness:.3}),this.redPaint=new N({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new N({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new N({color:2040877,roughness:.8}),this.woodPlankMat=new N({color:7877903,roughness:.9}),this.tireMat=new N({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new N({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new jo({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new le({color:16777215}),this.taillightMat=new N({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new N({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new N({color:16119280,roughness:.65}),this.cowBrownMat=new N({color:9262372,roughness:.7}),this.cowBlackMat=new N({color:2236962,roughness:.75}),this.cowFawnMat=new N({color:12088115,roughness:.68}),this.hornMat=new N({color:3621201,roughness:.4}),this.snoutMat=new N({color:1974308,roughness:.8});const T=new pt;T.name="truckBody",this.bodyGroup=T;const G=new U(1.9,.4,6),tt=new m(G,this.chassisMat);tt.position.set(0,.65,.2),tt.castShadow=!0,T.add(tt);const O=new pt;O.position.set(0,.6,-2.85),[-.3,0,.3].forEach(b=>{const z=new Q(.06,.06,2.3,8);z.rotateZ(Math.PI/2);const et=new m(z,this.tealBumperMat);et.position.y=b,et.castShadow=!0,O.add(et)}),[-.95,-.45,.45,.95].forEach(b=>{const z=new U(.08,.72,.08),et=new m(z,this.tealBumperMat);et.position.x=b,O.add(et)}),[-1.08,1.08].forEach(b=>{const z=new Q(.03,.03,.9,6),et=new m(z,this.tealBumperMat);et.position.set(b,.35,0),O.add(et);const Vt=new qt(.07,8,8),ft=new m(Vt,this.redPaint);ft.position.set(b,.8,0),O.add(ft)});const V=document.createElement("canvas");V.width=256,V.height=80;const W=V.getContext("2d");W.fillStyle="#006633",W.fillRect(0,0,256,80),W.strokeStyle="#ffffff",W.lineWidth=4,W.strokeRect(4,4,248,72),W.fillStyle="#ffffff",W.font="bold 26px sans-serif",W.textAlign="center",W.fillText("যশোর-ট",128,34),W.fillText("০২-০৯৬৯",128,64);const X=new te(V),nt=new Kt(.65,.22),J=new le({map:X}),K=new m(nt,J);K.position.set(0,-.15,.08),O.add(K),T.add(O);const q=new U(1.85,.95,1.6),Mt=new m(q,this.yellowPaint);Mt.position.set(0,1.25,-2.05),Mt.castShadow=!0,T.add(Mt);const j=new Kt(1.65,.85),st=new N({map:n}),$=new m(j,st);$.position.set(0,1.25,-2.86),T.add($),[-.68,.68].forEach(b=>{const z=new Q(.16,.16,.06,16);z.rotateX(Math.PI/2);const et=new m(z,this.chassisMat);et.position.set(b,1.15,-2.87),T.add(et);const Vt=new jn(.13,16),ft=new m(Vt,this.headlightMat);ft.position.set(b,1.15,-2.89),T.add(ft),this.headlights.push(ft);const Dt=new Sp(16772829,2.5,60,Math.PI/5,.5,1.2);Dt.position.set(b,1.15,-2.9),Dt.target.position.set(b*1.5,0,-35),T.add(Dt),T.add(Dt.target)}),[-.98,.98].forEach(b=>{const z=new U(.24,.55,1.4),et=new m(z,this.chassisMat);et.position.set(b,.95,-1.95),et.castShadow=!0,T.add(et)});const vt=new U(2.1,1.45,1.55),mt=new m(vt,this.yellowPaint);mt.position.set(0,1.75,-.6),mt.castShadow=!0,T.add(mt),[-1.06,1.06].forEach(b=>{const z=new U(.04,1.35,1.4),et=new m(z,this.cyanBluePaint);et.position.set(b,1.75,-.6),T.add(et);const Vt=new Kt(.65,.55),ft=new m(Vt,this.glassMat);ft.position.set(b>0?b+.03:b-.03,1.95,-.65),ft.rotation.y=b>0?Math.PI/2:-Math.PI/2,T.add(ft)});const Rt=new Kt(1.85,.72),Ut=new m(Rt,this.glassMat);Ut.position.set(0,1.92,-1.39),T.add(Ut);const ut=new pt;ut.position.set(0,2.65,-.85);const Ct=new Kt(2.15,.85),D=new N({map:r,roughness:.4}),_t=new m(Ct,D);_t.position.set(0,0,-.55),ut.add(_t);const lt=new U(2.2,.15,1.4),xt=new m(lt,this.redPaint);xt.position.set(0,.45,.1),xt.castShadow=!0,ut.add(xt);const dt=new U(2.24,.18,.08),Ot=new m(dt,this.yellowPaint);Ot.position.set(0,.38,-.58),ut.add(Ot),T.add(ut);const ct=new pt;ct.position.set(0,1.6,1.6);const A=new U(2.2,.12,3.4),E=new m(A,this.woodPlankMat);E.position.set(0,-.4,0),E.receiveShadow=!0,ct.add(E);const Y=new N({map:d,roughness:.45});[-1.12,1.12].forEach(b=>{const z=new Kt(3.4,1.15),et=new m(z,Y);et.position.set(b,.25,0),et.rotation.y=b>0?Math.PI/2:-Math.PI/2,et.castShadow=!0,ct.add(et);const Vt=new U(.12,.12,3.4),ft=new m(Vt,this.redPaint);ft.position.set(b,.85,0),ct.add(ft)});const yt=new U(2.2,1.15,.1),gt=new m(yt,this.redPaint);gt.position.set(0,.25,-1.68),ct.add(gt);const at=new pt;at.position.set(0,0,1.68);const kt=new U(2.28,1.45,.08),Lt=new N({color:4886754,roughness:.45}),Pt=new m(kt,Lt);Pt.position.set(0,.08,0),Pt.castShadow=!0,at.add(Pt);const Xt=new Kt(2.28,1.45),Nt=new N({map:x,roughness:.35,metalness:.15}),Tt=new m(Xt,Nt);Tt.position.set(0,.08,.045),at.add(Tt),[-1,1].forEach(b=>{const z=new wc;z.moveTo(0,0),z.lineTo(b*.18,.28),z.lineTo(0,.28),z.closePath();const et={depth:.08,bevelEnabled:!1},Vt=new Jo(z,et),ft=new N({color:1516884,roughness:.4}),Dt=new m(Vt,ft);Dt.position.set(b*1.14,.68,-.04),at.add(Dt)}),[-.78,.78].forEach((b,z)=>{const et=z===0,Vt=new m(new U(.42,.16,.05),this.chassisMat);Vt.position.set(b,-.42,.08),at.add(Vt);const ft=new m(new U(.12,.12,.03),new N({color:16096779,emissive:14251782,emissiveIntensity:.3}));ft.position.set(et?b-.13:b+.13,-.42,.1),at.add(ft);const Dt=new m(new U(.12,.12,.03),this.taillightMat);Dt.position.set(b,-.42,.1),at.add(Dt),this.brakeLights.push(Dt);const St=new m(new U(.12,.12,.03),new N({color:16317180,roughness:.3}));St.position.set(et?b+.13:b-.13,-.42,.1),at.add(St)}),[-.85,.85].forEach(b=>{const z=new m(new U(.42,.44,.03),this.tireMat);z.position.set(b,-.8,.06),at.add(z)}),ct.add(at),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((b,z)=>{const et=this.createBedCow(b.mat,b.scale);et.position.set(b.x,.35,b.z),et.rotation.y=b.rotY,ct.add(et),this.cows.push({group:et,head:et.userData.head,baseRotX:et.userData.head.rotation.x,seed:z*1.5})}),T.add(ct);const Jt=this.createTruckWheel(.48,.26,!1);Jt.position.set(0,.42,.4),Jt.rotation.x=Math.PI/2,T.add(Jt);const ht=new Q(.08,.08,.6,8);ht.rotateZ(Math.PI/2);const bt=new m(ht,this.chassisMat);bt.position.set(1.05,.48,-.8),T.add(bt);const H=new he(.22,1.2,12);H.rotateZ(-Math.PI/2);const Ft=new le({color:16755200,transparent:!0,opacity:0}),Wt=new m(H,Ft);Wt.position.set(1.65,.48,-.8),T.add(Wt),this.exhaustFires.push(Wt),this.group.add(T);const Zt=.48,It=.52,wt=.32;[-1.02,1.02].forEach(b=>{const z=this.createTruckWheelAssembly(It,wt,b>0,!1);z.position.set(b,Zt,-1.95),this.group.add(z),this.wheels.push(z.userData.spinner),this.frontWheels.push(z)}),[-1.02,1.02].forEach(b=>{const z=this.createTruckWheelAssembly(It,wt,b>0,!0);z.position.set(b,Zt,1.85),this.group.add(z),this.wheels.push(z.userData.spinner)})}createBedCow(t,e=1){const n=new pt;n.scale.set(e,e,e);const i=new U(.85,.85,1.35),o=new m(i,t);o.position.set(0,.45,0),o.castShadow=!0,n.add(o);const a=new he(.24,.38,8),r=new m(a,t);r.position.set(0,.95,-.32),r.rotation.x=-.2,n.add(r);const c=new pt;c.position.set(0,.75,-.6),n.userData.head=c;const h=new U(.42,.46,.62),d=new m(h,t);d.position.set(0,.22,-.35),c.add(d);const f=new U(.32,.25,.25),l=new m(f,this.snoutMat);return l.position.set(0,.12,-.68),c.add(l),[-.18,.18].forEach(u=>{const M=new he(.05,.3,6),v=new m(M,this.hornMat);v.position.set(u,.46,-.28),v.rotation.z=u>0?-.38:.38,v.rotation.x=.25,c.add(v);const g=new U(.18,.07,.08),p=new m(g,t);p.position.set(u>0?.26:-.26,.32,-.25),p.rotation.z=u>0?-.35:.35,c.add(p)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const o=new pt,a=new pt;if(o.userData.spinner=a,o.add(a),i){const r=this.createTruckWheel(t,e*.75,n);r.position.x=n?.08:-.08,a.add(r);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,a.add(c)}else{const r=this.createTruckWheel(t,e,n);a.add(r)}return o}createTruckWheel(t,e,n){const i=new pt,o=new Q(t,t,e,24);o.rotateZ(Math.PI/2);const a=new m(o,this.tireMat);i.add(a);const r=new Q(t*.65,t*.65,e+.02,18);r.rotateZ(Math.PI/2);const c=new m(r,this.rimMat);i.add(c);const h=new Q(t*.28,t*.28,e+.05,12);h.rotateZ(Math.PI/2);const d=new m(h,this.chassisMat);return i.add(d),i}update(t,e,n,i,o,a){const r=t*1e3/3600,c=2*Math.PI*.52,h=r/c*(2*Math.PI)*a;this.wheelRotation-=h,this.wheels.forEach(p=>{p.rotation.x=this.wheelRotation});const d=n-this.group.position.x,f=-Math.max(-.35,Math.min($t.STEERING.WHEEL_TURN_ANGLE,d*.35));this.frontWheels.forEach(p=>{p.rotation.y+=(f-p.rotation.y)*Math.min(1,a*12)});const l=Math.max(-.065,Math.min(.065,d*.065));this.currentRoll+=(l-this.currentRoll)*Math.min(1,a*10),this.bodyGroup.rotation.z=this.currentRoll;const u=Math.max(-.05,Math.min(.05,d*.05));this.currentYaw+=(u-this.currentYaw)*Math.min(1,a*10),this.bodyGroup.rotation.y=this.currentYaw;let M=0;i?M=.045:o&&(M=-.035),this.currentPitch+=(M-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const v=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(p=>{p.material=v}),this.exhaustFires.forEach(p=>{o?(p.material.opacity=.95,p.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),p.material.color.setHex(Math.random()>.4?16759552:16729088)):p.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(p=>{p.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(p=>{p.scale.set(1,1,1)});const g=performance.now()*.001;this.cows.forEach(p=>{const w=Math.sin(g*6.5+p.seed)*.08+(o?Math.sin(g*14+p.seed)*.05:0);p.head.rotation.x=p.baseRotX+w,p.head.rotation.y=Math.sin(g*2.2+p.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=1.45,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Dp{constructor(){this.group=new pt,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new pt,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new F(1.5,2.1,3.2),this._boxCenter=new F,this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new pt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=640;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,360);n.addColorStop(0,"#7dd3fc"),n.addColorStop(1,"#e0f2fe"),e.fillStyle=n,e.fillRect(0,0,1024,640);const i=(I,B,it)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(I,B,38*it,0,Math.PI*2),e.arc(I+42*it,B-14*it,48*it,0,Math.PI*2),e.arc(I+95*it,B-8*it,42*it,0,Math.PI*2),e.arc(I+135*it,B+8*it,32*it,0,Math.PI*2),e.fill()};i(80,120,1.1),i(720,100,.95);const o=512,a=270;for(let I=-Math.PI;I<=0;I+=Math.PI/18)e.beginPath(),e.moveTo(o,a),e.lineTo(o+Math.cos(I)*380,a+Math.sin(I)*380),e.lineTo(o+Math.cos(I+Math.PI/36)*380,a+Math.sin(I+Math.PI/36)*380),e.closePath(),e.fillStyle="rgba(245, 158, 11, 0.45)",e.fill();e.beginPath(),e.arc(o,a,78,Math.PI,0),e.fillStyle="#f59e0b",e.fill(),e.beginPath(),e.arc(o,a,52,Math.PI,0),e.fillStyle="#fde047",e.fill();const r=e.createLinearGradient(0,270,0,520);r.addColorStop(0,"#0284c7"),r.addColorStop(1,"#0369a1"),e.fillStyle=r,e.beginPath(),e.moveTo(0,270),e.lineTo(512,270),e.lineTo(470,520),e.lineTo(0,520),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=3.5;for(let I=290;I<510;I+=24)for(let it=20;it<440;it+=38*2)e.beginPath(),e.moveTo(it,I),e.quadraticCurveTo(it+38/2,I-5,it+38,I),e.stroke();e.fillStyle="#fde68a",e.beginPath(),e.moveTo(470,520),e.lineTo(512,270),e.lineTo(560,270),e.lineTo(530,520),e.closePath(),e.fill(),e.fillStyle="#16a34a",e.beginPath(),e.moveTo(520,270),e.lineTo(1024,270),e.lineTo(1024,520),e.lineTo(485,520),e.closePath(),e.fill();const c=(I,B)=>{e.strokeStyle="#854d0e",e.lineWidth=6,e.beginPath(),e.moveTo(I,B),e.quadraticCurveTo(I-15,B-60,I-25,B-110),e.stroke(),e.strokeStyle="#15803d",e.lineWidth=4;for(let it=0;it<Math.PI*2;it+=Math.PI/4)e.beginPath(),e.moveTo(I-25,B-110),e.quadraticCurveTo(I-25+Math.cos(it)*45,B-110+Math.sin(it)*40-15,I-25+Math.cos(it)*65,B-110+Math.sin(it)*40),e.stroke()};c(640,360),c(720,350),c(940,360),e.fillStyle="#fce7f3",e.fillRect(720,370,190,85),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(720,370,190,85),e.fillStyle="#dc2626",e.beginPath(),e.moveTo(705,370),e.lineTo(815,310),e.lineTo(925,370),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let I=720;I<910;I+=18)e.beginPath(),e.moveTo(I,370),e.lineTo(815,310),e.stroke();e.fillStyle="#374151",e.fillRect(785,395,35,60),e.fillRect(850,390,30,30),e.fillStyle="#f8fafc",e.fillRect(570,385,140,70),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(570,385,140,70),e.fillStyle="#2563eb",e.beginPath(),e.moveTo(555,385),e.lineTo(640,335),e.lineTo(725,385),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let I=570;I<710;I+=18)e.beginPath(),e.moveTo(I,385),e.lineTo(640,335),e.stroke();e.fillStyle="#1e3a8a",e.fillRect(620,405,30,50),e.fillStyle="#ea580c",e.fillRect(0,510,1024,45),e.fillStyle="#fde047";for(let I=20;I<1024;I+=40)e.beginPath(),e.arc(I,510,16,0,Math.PI),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2,e.stroke();e.fillStyle="#18181b",e.fillRect(0,555,1024,35);const h=["#dc2626","#ffffff","#16a34a","#fde047"];for(let I=0;I<48;I++)e.fillStyle=h[I%h.length],e.fillRect(I*22,558,14,29);const d=(I,B)=>{e.strokeStyle="#94a3b8",e.lineWidth=3,e.beginPath(),e.arc(I,B,8,0,Math.PI*2),e.stroke(),e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(I,B+8),e.bezierCurveTo(I+28,B+8,I+44,B+28,I,B+64),e.bezierCurveTo(I-44,B+28,I-28,B+8,I,B+8),e.closePath(),e.fill(),e.strokeStyle="#64748b",e.lineWidth=2.5,e.stroke(),e.fillStyle="#94a3b8",[[0,24],[-14,28],[14,28],[-8,42],[8,42],[0,52]].forEach(([it,At])=>{e.beginPath(),e.arc(I+it,B+At,3.2,0,Math.PI*2),e.fill()})};d(220,570),d(512,570),d(804,570);const f=new te(t),l=document.createElement("canvas");l.width=1024,l.height=260;const u=l.getContext("2d"),M=u.createLinearGradient(0,0,0,260);M.addColorStop(0,"#f8fafc"),M.addColorStop(.5,"#e2e8f0"),M.addColorStop(1,"#94a3b8"),u.fillStyle=M,u.fillRect(0,0,1024,260),u.fillStyle="#475569";for(let I=30;I<1e3;I+=45)u.beginPath(),u.arc(I,24,7,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(I-2,22,2.5,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.fillStyle="#475569",u.beginPath(),u.arc(I,236,7,0,Math.PI*2),u.fill(),u.beginPath(),u.arc(I-2,234,2.5,0,Math.PI*2),u.fillStyle="#ffffff",u.fill(),u.fillStyle="#475569";u.fillStyle="#f59e0b",u.strokeStyle="#dc2626",u.lineWidth=7,u.font="bold 82px sans-serif",u.textAlign="center",u.textBaseline="middle",u.strokeText("বাংলাদেশ",512,115),u.fillText("বাংলাদেশ",512,115),u.fillStyle="#16a34a",u.font="bold 78px sans-serif",u.fillText("বাংলাদেশ",512,113),u.fillStyle="#fef08a",u.font="bold 74px sans-serif",u.fillText("বাংলাদেশ",512,111);const v=["#dc2626","#16a34a","#f59e0b","#06b6d4","#ec4899"];for(let I=0;I<18;I++)u.beginPath(),u.arc(310+I*24,185,7.5,0,Math.PI*2),u.fillStyle=v[I%v.length],u.fill(),u.strokeStyle="#18181b",u.lineWidth=1.8,u.stroke();const g=(I,B)=>{u.beginPath(),u.arc(I,B,62,0,Math.PI*2),u.fillStyle="#cbd5e1",u.fill(),u.strokeStyle="#64748b",u.lineWidth=4,u.stroke(),u.beginPath(),u.arc(I,B,48,0,Math.PI*2),u.fillStyle="#dc2626",u.fill(),u.strokeStyle="#fde047",u.lineWidth=3,u.stroke(),u.fillStyle="#ffffff",u.font="bold 50px sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText("মা",I,B)};g(140,125),g(884,125);const p=new te(l),w=document.createElement("canvas");w.width=1024,w.height=1024;const _=w.getContext("2d");_.beginPath(),_.moveTo(40,1024),_.lineTo(40,520),_.bezierCurveTo(40,60,984,60,984,520),_.lineTo(984,1024),_.closePath(),_.fillStyle="#dc2626",_.fill(),_.strokeStyle="#881337",_.lineWidth=12,_.stroke(),_.strokeStyle="#fde047",_.lineWidth=5,_.stroke(),_.fillStyle="#1d4ed8",_.fillRect(456,120,112,680),_.strokeStyle="#18181b",_.lineWidth=3,_.strokeRect(456,120,112,680),_.fillStyle="#ffffff",_.fillRect(498,120,28,680),_.beginPath(),_.arc(512,780,42,0,Math.PI*2),_.fillStyle="#dc2626",_.fill(),_.strokeStyle="#fde047",_.lineWidth=5,_.stroke(),_.fillStyle="#ffffff",_.font="bold 44px sans-serif",_.textAlign="center",_.textBaseline="middle",_.fillText("১",512,780);const y=(I,B,it,At)=>{_.save(),_.translate(B,it),_.rotate(At),_.font="bold 88px sans-serif",_.textAlign="center",_.textBaseline="middle",_.strokeStyle="#18181b",_.lineWidth=12,_.strokeText(I,0,0),_.fillStyle="#ffffff",_.fillText(I,0,0),_.restore()};y("মায়ের",310,240,-.22),y("দোয়া",714,240,.22);const P=(I,B)=>{_.save(),_.translate(I,500),B&&_.scale(-1,1),_.beginPath(),_.arc(70,-160,36,0,Math.PI*2),_.fillStyle="#fde047",_.fill(),_.strokeStyle="#18181b",_.lineWidth=3,_.stroke(),_.beginPath(),_.arc(70,-160,16,0,Math.PI*2),_.fillStyle="#ea580c",_.fill();for(let At=0;At<7;At++){const Ht=-Math.PI/2+(At-3)*.35;_.beginPath(),_.ellipse(80+Math.cos(Ht)*45,-50+Math.sin(Ht)*35,18,38,Ht,0,Math.PI*2),_.fillStyle="#ec4899",_.fill(),_.strokeStyle="#18181b",_.lineWidth=2.5,_.stroke()}_.beginPath(),_.arc(80,-50,24,0,Math.PI*2),_.fillStyle="#fef08a",_.fill(),_.stroke(),((At,Ht)=>{_.fillStyle="#16a34a",_.beginPath(),_.ellipse(At-30,Ht+20,16,32,.6,0,Math.PI*2),_.ellipse(At+30,Ht+20,16,32,-.6,0,Math.PI*2),_.fill(),_.stroke(),_.fillStyle="#1d4ed8",_.beginPath(),_.arc(At,Ht,55,0,Math.PI*2),_.fill(),_.strokeStyle="#18181b",_.lineWidth=3,_.stroke(),_.strokeStyle="#38bdf8",_.lineWidth=4,_.beginPath(),_.arc(At,Ht,36,.4,Math.PI*1.6),_.stroke(),_.beginPath(),_.arc(At,Ht,20,Math.PI,Math.PI*2.2),_.stroke(),_.fillStyle="#ffffff",_.beginPath(),_.arc(At,Ht,10,0,Math.PI*2),_.fill()})(85,110),_.restore()};P(260,!1),P(764,!0);const C=new te(w),L=document.createElement("canvas");L.width=512,L.height=128;const k=L.getContext("2d");k.fillStyle="#ffffff",k.fillRect(0,0,512,128),k.fillStyle="#dc2626";for(let I=-128;I<640;I+=36)k.beginPath(),k.moveTo(I,0),k.lineTo(I+18,0),k.lineTo(I+18+128,128),k.lineTo(I+128,128),k.closePath(),k.fill();const S=new te(L),x=document.createElement("canvas");x.width=1024,x.height=1024;const T=x.getContext("2d");T.fillStyle="#f59e0b",T.fillRect(0,0,1024,1024),T.strokeStyle="rgba(234, 88, 12, 0.18)",T.lineWidth=3;for(let I=-1024;I<2048;I+=64)T.beginPath(),T.moveTo(I,0),T.lineTo(I+1024,1024),T.stroke(),T.beginPath(),T.moveTo(I,1024),T.lineTo(I+1024,0),T.stroke();T.fillStyle="#881337",T.fillRect(0,0,1024,140),T.fillRect(0,884,1024,140),T.fillStyle="#06b6d4",T.fillRect(0,140,1024,28),T.fillRect(0,856,1024,28),T.fillStyle="#10b981",T.fillRect(0,168,1024,16),T.fillRect(0,840,1024,16);for(let I=32;I<1024;I+=64)T.beginPath(),T.arc(I,140,16,0,Math.PI),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(I,884,16,Math.PI,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke();[70,954].forEach(I=>{T.fillStyle="#ffffff",T.font="bold 44px sans-serif",T.textAlign="center",T.textBaseline="middle",T.shadowColor="rgba(0,0,0,0.8)",T.shadowBlur=8,T.fillText("মা বাবার দোয়া",512,I),T.shadowBlur=0}),((I,B)=>{T.strokeStyle="#ea580c",T.lineWidth=4;for(let it=0;it<Math.PI*2;it+=Math.PI/16)T.beginPath(),T.moveTo(I,B),T.lineTo(I+Math.cos(it)*260,B+Math.sin(it)*260),T.stroke();for(let it=0;it<16;it++){const At=it*Math.PI/8,Ht=I+Math.cos(At)*175,jt=B+Math.sin(At)*175;T.beginPath(),T.ellipse(Ht,jt,42,65,At+Math.PI/2,0,Math.PI*2),T.fillStyle=it%2===0?"#dc2626":"#0284c7",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke()}for(let it=0;it<12;it++){const At=it*Math.PI/6,Ht=I+Math.cos(At)*115,jt=B+Math.sin(At)*115;T.beginPath(),T.ellipse(Ht,jt,34,52,At+Math.PI/2,0,Math.PI*2),T.fillStyle=it%2===0?"#ec4899":"#10b981",T.fill(),T.strokeStyle="#18181b",T.lineWidth=3.5,T.stroke()}T.beginPath(),T.arc(I,B,62,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(I,B,32,0,Math.PI*2),T.fillStyle="#b91c1c",T.fill(),[-1,1].forEach(it=>{T.beginPath(),T.moveTo(I+it*160,B-60),T.bezierCurveTo(I+it*320,B-140,I+it*420,B-40,I+it*340,B+50),T.bezierCurveTo(I+it*280,B+120,I+it*200,B+60,I+it*180,B),T.fillStyle="#0d9488",T.fill(),T.strokeStyle="#18181b",T.lineWidth=4,T.stroke(),T.beginPath(),T.arc(I+it*320,B-30,28,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.beginPath(),T.arc(I+it*320,B-30,16,0,Math.PI*2),T.fillStyle="#1e3a8a",T.fill()})})(512,512);const tt=(I,B)=>{const it=["#dc2626","#ec4899","#f59e0b","#10b981"];for(let At=0;At<8;At++){const Ht=At*Math.PI/4,jt=I+Math.cos(Ht)*48,ne=B+Math.sin(Ht)*48;T.beginPath(),T.arc(jt,ne,22,0,Math.PI*2),T.fillStyle=it[At%it.length],T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke()}T.beginPath(),T.arc(I,B,26,0,Math.PI*2),T.fillStyle="#fde047",T.fill(),T.strokeStyle="#18181b",T.lineWidth=2.5,T.stroke(),T.beginPath(),T.arc(I,B,12,0,Math.PI*2),T.fillStyle="#991b1b",T.fill()};[120,904].forEach(I=>{tt(I,320),tt(I,704)});const O=new te(x),V=document.createElement("canvas");V.width=256,V.height=256;const W=V.getContext("2d");W.fillStyle="#b91c1c",W.fillRect(0,0,256,256),W.strokeStyle="#fde047",W.lineWidth=3;for(let I=0;I<256;I+=32)W.beginPath(),W.moveTo(I,0),W.lineTo(I+32,256),W.stroke(),W.beginPath(),W.moveTo(256-I,0),W.lineTo(256-I-32,256),W.stroke();const X=new te(V),nt=document.createElement("canvas");nt.width=512,nt.height=256;const J=nt.getContext("2d");J.fillStyle="#f59e0b",J.fillRect(0,0,512,256),J.fillStyle="#ea580c",J.beginPath(),J.arc(256,105,45,0,Math.PI*2),J.fill();for(let I=0;I<Math.PI*2;I+=Math.PI/8)J.fillStyle="#dc2626",J.beginPath(),J.arc(256+Math.cos(I)*62,105+Math.sin(I)*62,14,0,Math.PI*2),J.fill();J.fillStyle="#fde047",J.beginPath(),J.arc(256,105,26,0,Math.PI*2),J.fill(),J.fillStyle="#0d9488",J.fillRect(0,185,512,71),J.strokeStyle="#fde047",J.lineWidth=5;for(let I=-20;I<=530;I+=32)J.beginPath(),J.moveTo(I,185),J.lineTo(I+32,256),J.stroke(),J.beginPath(),J.moveTo(I+32,185),J.lineTo(I,256),J.stroke();const K=new te(nt),q=new N({color:14427686,metalness:.6,roughness:.3}),Mt=new N({color:15658734,metalness:.9,roughness:.15}),j=new N({color:2040865,roughness:.9}),st=new N({color:165063,metalness:.5,roughness:.4}),$=new N({color:1409085,roughness:.6}),vt=new N({map:f,roughness:.4}),mt=new N({map:p,roughness:.35,metalness:.1}),Rt=new N({map:C,roughness:.6,transparent:!0,side:ye}),Ut=new N({map:S,roughness:.45,metalness:.1}),ut=new N({map:K,roughness:.5,side:ye}),Ct=new N({map:O,roughness:.7,side:ye}),D=new N({map:X,roughness:.6}),_t=new pt,lt=new Q(.045,.045,1.8,12);lt.rotateX(Math.PI/2);const xt=new m(lt,q);xt.position.set(0,.65,.1),_t.add(xt);const dt=new Q(.04,.04,.95,12);dt.rotateX(-.18);const Ot=new m(dt,q);Ot.position.set(0,.95,-.9),_t.add(Ot),[-.1,.1].forEach(I=>{const B=new Q(.025,.02,.7,8);B.rotateX(.15);const it=new m(B,Mt);it.position.set(I,.48,-1.02),_t.add(it)});const ct=new Q(.025,.025,.75,12);ct.rotateZ(Math.PI/2);const A=new m(ct,Mt);A.position.set(0,1.35,-.85),_t.add(A),[-.38,.38].forEach(I=>{const B=new Q(.032,.032,.14,12);B.rotateZ(Math.PI/2);const it=new m(B,j);it.position.set(I,1.35,-.85),_t.add(it)});const E=new qt(.09,14,14);E.scale(1,1,.7);const Y=new m(E,new le({color:16777215}));Y.position.set(0,1.05,-1.08),_t.add(Y),this.headlights.push(Y);const yt=new qt(.05,12,12);this.bellMesh=new m(yt,Mt),this.bellMesh.position.set(-.24,1.4,-.85),_t.add(this.bellMesh);const gt=new U(.26,.08,.32),at=new m(gt,j);at.position.set(0,1.08,-.15),_t.add(at),[-.08,.08].forEach(I=>{const B=new Q(.02,.02,.12,8),it=new m(B,Mt);it.position.set(I,.98,-.15),_t.add(it)});const kt=new Q(.06,.06,.28,12);kt.rotateZ(Math.PI/2);const Lt=new m(kt,Mt);Lt.position.set(0,.52,-.15),_t.add(Lt),this.bodyGroup.add(_t),this.frontWheel=this.createRickshawWheel(.42,q,Mt,j),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const Pt=new Q(.46,.46,.12,16,1,!0,0,Math.PI*.8);Pt.rotateZ(Math.PI/2);const Xt=new m(Pt,st);Xt.position.set(0,.44,-1.05),this.bodyGroup.add(Xt),[-.78,.78].forEach(I=>{const B=this.createRickshawWheel(.48,q,Mt,j);B.position.set(I,.48,.95),this.bodyGroup.add(B),this.wheels.push(B);const it=new Q(.53,.53,.16,20,1,!0,0,Math.PI);it.rotateZ(Math.PI/2);const At=new m(it,Ut);At.position.set(I,.48,.95),this.bodyGroup.add(At)});const Nt=new pt,Tt=new U(1.25,.08,1.25),Qt=new m(Tt,$);Qt.position.set(0,.65,.75),Nt.add(Qt);const Jt=new U(.9,.05,.5),ht=new m(Jt,$);ht.position.set(0,.48,.35),Nt.add(ht);const bt=new U(1.2,.38,.58),H=new m(bt,$);H.position.set(0,.86,.88),Nt.add(H),[-.62,.62].forEach((I,B)=>{const it=new Kt(1.15,.52),At=new m(it,ut);At.position.set(I,.96,.75),At.rotation.y=B===0?-Math.PI/2:Math.PI/2,Nt.add(At)});const Ft=new U(1.18,.14,.56),Wt=new m(Ft,D);Wt.position.set(0,1.08,.88),Nt.add(Wt);const Zt=new U(1.16,.22,.1),It=new m(Zt,D);It.position.set(0,1.15,1.08),Nt.add(It),[-.58,.58].forEach(I=>{const B=new U(.08,.28,.6),it=new m(B,st);it.position.set(I,1.22,.88),Nt.add(it)});const wt=new Kt(1.06,.54),b=new m(wt,vt);b.position.set(0,.66,1.18),b.rotation.y=Math.PI,Nt.add(b);const z=new Kt(1.08,.19),et=new m(z,mt);et.position.set(0,.96,1.185),et.rotation.y=Math.PI,Nt.add(et);const Vt=new Kt(1.22,.82),ft=new m(Vt,Rt);ft.position.set(0,1.5,1.11),ft.rotation.y=Math.PI,Nt.add(ft),[-.78,.78].forEach(I=>{const B=new m(new Q(.055,.055,.035,12),Mt);B.rotateX(Math.PI/2),B.position.set(I,.62,1.16),Nt.add(B);const it=new qt(.048,12,12),At=new m(it,new le({color:15680580}));At.position.set(I,.62,1.18),Nt.add(At),this.brakeLights.push(At)});const Dt=new Q(.7,.7,.96,24,1,!0,-Math.PI/2,Math.PI);Dt.rotateX(-Math.PI/2);const St=new m(Dt,Ct);St.position.set(0,1.5,.62),Nt.add(St);const Et=new an(.7,.022,8,24,Math.PI),ot=new m(Et,q);ot.position.set(0,1.5,.14),Nt.add(ot);for(let I=0;I<=14;I++){const B=I*Math.PI/14,it=Math.cos(B)*.7,At=1.5+Math.sin(B)*.7,Ht=new m(new qt(.022,6,6),new N({color:14427686,roughness:.8}));Ht.position.set(it,At-.02,.14),Nt.add(Ht)}const Gt=new an(.7,.025,8,24,Math.PI),Yt=new m(Gt,q);Yt.position.set(0,1.5,1.1),Nt.add(Yt);for(let I=0;I<=14;I++){const B=I*Math.PI/14,it=Math.cos(B)*.7,At=1.5+Math.sin(B)*.7,Ht=new m(new qt(.022,6,6),new N({color:14427686,roughness:.8}));Ht.position.set(it,At-.02,1.1),Nt.add(Ht)}const ee=new Q(.7,.7,.12,24,1,!0,-Math.PI/2,Math.PI);ee.rotateX(-Math.PI/2);const Te=new m(ee,Ct);Te.position.set(0,1.5,1.04),Nt.add(Te),[-.7,.7].forEach((I,B)=>{const it=new Kt(.82,.36),At=new m(it,Ct);At.position.set(I,1.34,.65),At.rotation.y=B===0?-Math.PI/2:Math.PI/2,Nt.add(At);const Ht=new m(new Q(.012,.012,.78,8),Mt);Ht.position.set(I+(B===0?-.015:.015),1.34,.65),Ht.rotation.x=.45,Nt.add(Ht);const jt=new m(new Q(.012,.012,.78,8),Mt);jt.position.set(I+(B===0?-.015:.015),1.34,.65),jt.rotation.x=-.45,Nt.add(jt);const ne=new m(new qt(.022,8,8),q);ne.position.set(I+(B===0?-.025:.025),1.34,.65),Nt.add(ne)}),[-.64,.64].forEach(I=>{const B=new Q(.016,.016,1.15,8);B.rotateX(.42);const it=new m(B,q);it.position.set(I,1.4,.6),Nt.add(it)}),this.bodyGroup.add(Nt);const we=new pt,We=new N({color:165063,roughness:.8}),ze=new N({color:9262372,roughness:.7}),Xe=new N({color:1409085,roughness:.9}),Sn=new U(.36,.48,.22),hn=new m(Sn,We);hn.position.set(0,1.42,-.25),hn.rotation.x=.22,we.add(hn);const ii=new qt(.12,14,14),Fn=new m(ii,ze);Fn.position.set(0,1.74,-.32),we.add(Fn);const On=new an(.11,.035,8,16);On.rotateX(Math.PI/2);const R=new m(On,new N({color:14427686}));R.position.set(0,1.68,-.32),we.add(R),[-.18,.18].forEach(I=>{const B=new Q(.04,.035,.52,8);B.rotateX(.75);const it=new m(B,ze);it.position.set(I,1.42,-.52),we.add(it)});const Z=new U(.38,.44,.32),rt=new m(Z,Xe);rt.position.set(0,1.05,-.18),we.add(rt),this.bodyGroup.add(we),this.buildCuteRomanticCouple(),[-.32,.32].forEach(I=>{const B=new he(.12,.65,8);B.rotateX(-Math.PI/2);const it=new le({color:16759552,transparent:!0,opacity:0}),At=new m(B,it);At.position.set(I,.58,1.25),this.bodyGroup.add(At),this.exhaustFires.push(At)})}createRickshawWheel(t,e,n,i){const o=new pt,a=new an(t,.038,14,36);a.rotateY(Math.PI/2);const r=new m(a,i);o.add(r);const c=new an(t*.92,.02,10,36);c.rotateY(Math.PI/2);const h=new m(c,n);o.add(h);const d=new Q(.06,.06,.14,14);d.rotateZ(Math.PI/2);const f=new m(d,e);o.add(f);for(let l=0;l<14;l++){const u=l*Math.PI/7,M=new Q(.005,.005,t*1.84,4);M.rotateX(u);const v=new m(M,n);o.add(v)}return o}buildCuteRomanticCouple(){this.coupleGroup=new pt,this.coupleGroup.position.set(0,0,0);const t=new N({color:16106390,roughness:.6}),e=new N({color:1841431,roughness:.5}),n=new N({color:986638,roughness:.4}),i=new N({color:15680580,roughness:.7}),o=new N({color:1976635,roughness:.8}),a=new N({color:15485081,roughness:.6}),r=new N({color:16638023,roughness:.7}),c=new N({color:16777215,roughness:.8}),h=new pt;h.position.set(-.25,1.18,.82);const d=new U(.32,.42,.24),f=new m(d,i);f.position.set(0,.22,0),f.rotation.y=.16,f.rotation.z=-.06,h.add(f);const l=new qt(.12,14,14),u=new m(l,t);u.position.set(.02,.52,.02),u.rotation.y=.26,u.rotation.z=-.08,h.add(u);const M=new qt(.13,14,14);M.scale(1.02,1.05,1.02);const v=new m(M,e);v.position.set(.02,.55,.01),h.add(v);const g=new U(.28,.18,.48),p=new m(g,o);p.position.set(0,-.05,-.16),h.add(p);const w=new Q(.04,.035,.38,8);w.rotateZ(.25);const _=new m(w,i);_.position.set(-.22,.18,0),h.add(_);const y=new Q(.04,.035,.34,8);y.rotateZ(-Math.PI/4),y.rotateX(-.18);const P=new m(y,i);P.position.set(.18,.14,-.07),h.add(P),this.coupleGroup.add(h);const C=new pt;C.position.set(.25,1.18,.82);const L=new U(.28,.38,.22),k=new m(L,a);k.position.set(0,.2,0),k.rotation.y=-.18,k.rotation.z=.08,C.add(k);const S=new U(.32,.35,.24),x=new m(S,r);x.position.set(0,.22,.02),C.add(x);const T=new qt(.11,14,14),G=new m(T,t);G.position.set(-.02,.48,.02),G.rotation.y=-.3,G.rotation.z=.1,C.add(G);const tt=new qt(.12,14,14);tt.scale(1.04,1.06,1.08);const O=new m(tt,n);O.position.set(-.02,.51,0),C.add(O);const V=new Q(.04,.02,.32,8);V.rotateX(-.4);const W=new m(V,n);W.position.set(-.01,.38,.15),C.add(W);const X=new U(.26,.16,.46),nt=new m(X,c);nt.position.set(0,-.05,-.16),C.add(nt);const J=new Q(.035,.03,.35,8);J.rotateZ(-.25),J.rotateX(-.25);const K=new m(J,a);K.position.set(.2,.16,-.05),C.add(K);const q=new pt,Mt=new Q(.007,.007,.32,6),j=new N({color:1409085,roughness:.8}),st=new m(Mt,j);st.position.set(0,.14,0),q.add(st);const $=new U(.07,.012,.035),vt=new m($,j);vt.position.set(.035,.12,0),vt.rotation.z=.3,q.add(vt);const mt=new m($,j);mt.position.set(-.035,.18,0),mt.rotation.z=-.3,q.add(mt);const Rt=new N({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Ut=new m(new Ko(.055,1),Rt);Ut.position.set(0,.3,0),Ut.scale.set(1.1,1.25,1.1),q.add(Ut);const ut=new m(new qt(.038,8,8),new N({color:10033947,roughness:.3}));ut.position.set(0,.32,0),q.add(ut),q.position.set(.22,.22,-.15),q.rotation.x=-.35,q.rotation.z=-.22,C.add(q);const Ct=new Q(.035,.03,.32,8);Ct.rotateZ(Math.PI/4),Ct.rotateX(-.18);const D=new m(Ct,a);D.position.set(-.17,.14,-.07),C.add(D),this.coupleGroup.add(C);const _t=new pt;_t.position.set(0,1.28,.74);const lt=new m(new qt(.045,10,10),t);lt.scale.set(1.3,.9,1.1),lt.position.set(-.02,0,0),_t.add(lt);const xt=new m(new qt(.042,10,10),t);xt.scale.set(1.2,.85,1.05),xt.position.set(.02,.01,.01),_t.add(xt),this.coupleGroup.add(_t),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,o,a){const c=t*1e3/3600/.42*a;this.wheelRotation-=c,this.wheels.forEach(g=>{g.rotation.x=this.wheelRotation});const h=n-e,d=-h*.12;this.currentRoll+=(d-this.currentRoll)*Math.min(1,a*7),this.bodyGroup.rotation.z=this.currentRoll;const f=-h*.08;this.currentYaw+=(f-this.currentYaw)*Math.min(1,a*6),this.bodyGroup.rotation.y=this.currentYaw;let l=0;i?l=.04:o&&(l=-.05),this.currentPitch+=(l-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const u=performance.now()*.001,M=Math.min(1,t/80),v=Math.sin(u*8.5)*.025*M;this.coupleGroup.position.y=v,this.coupleGroup.rotation.z=Math.sin(u*4.2)*.015*M,this.exhaustFires.forEach(g=>{o?(g.material.opacity=.9,g.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):g.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(g=>g.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(g=>g.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=1.15,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class Up{constructor(){this.group=new pt,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new F(1.32,1.74,2.58),this._boxCenter=new F,this.buildCNG(),this.group.scale.set(.96,.96,.96)}buildCNG(){this.bodyGroup=new pt,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=1024;const e=t.getContext("2d");e.clearRect(0,0,1024,1024),e.beginPath(),e.moveTo(0,420),e.lineTo(0,150),e.quadraticCurveTo(0,18,175,18),e.lineTo(849,18),e.quadraticCurveTo(1024,18,1024,150),e.lineTo(1024,420),e.closePath(),e.fillStyle="#1c1917",e.fill(),e.fillStyle="rgba(255, 255, 255, 0.025)";for(let ht=0;ht<1024;ht+=4)e.fillRect(ht,0,2,420);for(let ht=0;ht<420;ht+=4)e.fillRect(0,ht,1024,2);const n=262,i=135,o=500,a=220;e.fillStyle="#09090b",e.beginPath(),e.roundRect(n-14,i-14,o+28,a+28,28),e.fill();const r=e.createLinearGradient(n,i,n,i+a);r.addColorStop(0,"#0f172a"),r.addColorStop(.4,"#1e293b"),r.addColorStop(1,"#090d16"),e.fillStyle=r,e.beginPath(),e.roundRect(n,i,o,a,20),e.fill(),e.fillStyle="#2563eb",e.beginPath(),e.roundRect(n+25,i+65,o-50,a-75,14),e.fill(),e.strokeStyle="#1d4ed8",e.lineWidth=4,e.beginPath(),e.moveTo(n+o*.5,i+65),e.lineTo(n+o*.5,i+a-10),e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.12)",e.beginPath(),e.moveTo(n+40,i+a),e.lineTo(n+160,i),e.lineTo(n+220,i),e.lineTo(n+100,i+a),e.closePath(),e.fill(),e.fillStyle="#facc15",e.fillRect(0,420,1024,105),e.fillStyle="#18181b",e.fillRect(0,416,1024,6),e.fillRect(0,523,1024,6),e.fillStyle="#15803d",e.fillRect(0,525,1024,499),e.fillStyle="rgba(255, 255, 255, 0.08)",e.fillRect(0,529,1024,4);const c=230,h=565,d=564,f=345;e.fillStyle="#14532d",e.beginPath(),e.roundRect(c-6,h-6,d+12,f+12,12),e.fill(),e.fillStyle="#166534",e.beginPath(),e.roundRect(c,h,d,f,8),e.fill(),e.strokeStyle="#22c55e",e.lineWidth=3,e.stroke();for(let ht=0;ht<4;ht++){const bt=h+38+ht*68;e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+28,bt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+32,bt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+32,bt+4,227,4),e.fillStyle="#0f291e",e.beginPath(),e.roundRect(c+301,bt,235,42,6),e.fill(),e.fillStyle="#15803d",e.beginPath(),e.roundRect(c+305,bt+4,227,34,4),e.fill(),e.fillStyle="rgba(255, 255, 255, 0.25)",e.fillRect(c+305,bt+4,227,4)}e.fillStyle="#cbd5e1",e.beginPath(),e.roundRect(c+d*.5-28,h+f-36,56,18,4),e.fill(),e.fillStyle="#09090b",e.beginPath(),e.arc(c+d*.5,h+f-27,4,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.font="900 64px sans-serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.7)",e.shadowBlur=6,e.fillText("CNG",120,715),e.shadowBlur=0;const l=810,u=665,M=165,v=95;e.fillStyle="#facc15",e.beginPath(),e.roundRect(l,u,M,v,8),e.fill(),e.strokeStyle="#18181b",e.lineWidth=4,e.stroke(),e.fillStyle="#18181b",e.font="900 32px sans-serif",e.fillText("HR 26",l+M*.5,u+34),e.font="900 36px monospace",e.fillText("0123",l+M*.5,u+70),e.fillStyle="#18181b",e.fillRect(0,955,1024,69),e.fillStyle="#3f3f46",e.fillRect(0,955,1024,6);const g=new te(t),p=document.createElement("canvas");p.width=1024,p.height=1024;const w=p.getContext("2d");w.clearRect(0,0,1024,1024),w.beginPath(),w.moveTo(0,480),w.lineTo(0,140),w.quadraticCurveTo(0,18,175,18),w.lineTo(849,18),w.quadraticCurveTo(1024,18,1024,140),w.lineTo(1024,480),w.closePath(),w.fillStyle="#facc15",w.fill(),w.fillStyle="#09090b",w.beginPath(),w.roundRect(75,55,874,340,24),w.fill(),w.fillStyle="#1e293b",w.fillRect(265,75,494,300),w.fillStyle="#1e293b",w.fillRect(95,75,150,300),w.fillStyle="#1e293b",w.fillRect(779,75,150,300),w.fillStyle="#09090b",w.fillRect(245,70,20,310),w.fillRect(759,70,20,310),w.strokeStyle="#09090b",w.lineWidth=10,w.beginPath(),w.moveTo(420,370),w.lineTo(610,205),w.stroke(),w.strokeStyle="#18181b",w.lineWidth=6,w.beginPath(),w.moveTo(560,245),w.lineTo(660,160),w.stroke(),w.fillStyle="#f59e0b",w.beginPath(),w.roundRect(115,420,95,34,6),w.fill(),w.beginPath(),w.roundRect(814,420,95,34,6),w.fill(),w.fillStyle="#15803d",w.fillRect(0,480,1024,544),w.fillStyle="#18181b",w.beginPath(),w.moveTo(310,480),w.lineTo(714,480),w.lineTo(650,880),w.lineTo(374,880),w.closePath(),w.fill(),w.fillStyle="#facc15",w.beginPath(),w.roundRect(432,590,160,80,6),w.fill(),w.strokeStyle="#18181b",w.lineWidth=3,w.stroke(),w.fillStyle="#18181b",w.font="900 26px sans-serif",w.textAlign="center",w.fillText("HR 26",512,622),w.font="900 28px monospace",w.fillText("0123",512,654),w.fillStyle="#ffffff",w.font="900 52px sans-serif",w.fillText("CNG",200,680);const _=new te(p),y=document.createElement("canvas");y.width=1024,y.height=512;const P=y.getContext("2d");P.fillStyle="#1c1917",P.fillRect(0,0,1024,210),P.fillStyle="#facc15",P.fillRect(0,210,1024,60),P.fillStyle="#18181b",P.fillRect(0,206,1024,4),P.fillRect(0,270,1024,4),P.fillStyle="#15803d",P.fillRect(0,270,1024,242),P.fillStyle="#0f172a",P.beginPath(),P.roundRect(240,75,480,310,18),P.fill(),P.fillStyle="#2563eb",P.beginPath(),P.roundRect(460,230,240,110,12),P.fill(),P.strokeStyle="#09090b",P.lineWidth=14,P.beginPath(),P.roundRect(240,75,480,310,18),P.stroke();const C=new te(y),L=new N({color:1409085,metalness:.25,roughness:.35});new N({color:16436245,metalness:.15,roughness:.38});const k=new N({color:1841431,roughness:.85,metalness:.05}),S=new N({color:2450411,roughness:.55}),x=new N({color:1579035,roughness:.92}),T=new N({color:15857145,metalness:.45,roughness:.35}),G=new N({color:16317180,metalness:.92,roughness:.12}),tt=new N({map:g,roughness:.4,metalness:.1,side:ye,transparent:!0,alphaTest:.2}),O=new N({map:_,roughness:.4,metalness:.1,side:ye,transparent:!0,alphaTest:.2}),V=new N({map:C,roughness:.42,metalness:.1,side:ye}),W=new U(1.24,.24,2.38),X=new m(W,L);X.position.set(0,.34,0),X.castShadow=!0,X.receiveShadow=!0,this.bodyGroup.add(X);const nt=new U(.85,.22,.65),J=new m(nt,L);J.position.set(0,.33,-1.05),J.castShadow=!0,this.bodyGroup.add(J);const K=new pt,q=()=>{const It=[],wt=[],b=[],z=(St,Et)=>{let ot=.635;const Gt=-1.18+Et*2.27;Gt<-.88?ot=.635-(-.88-Gt)/.3*.05:Gt>.85&&(ot=.635-(Gt-.85)/.24*.035);const Yt=St*ot,ee=Math.max(0,1-Math.pow(Math.abs(St),2.2)),Te=Math.sin(Math.PI*(.12+.76*Et)),We=1.54-.012*Math.pow(Et-.5,2)*4+.13*ee*Te;return new F(Yt,We,Gt)};for(let St=0;St<=32;St++){const Et=St/32;for(let ot=0;ot<=24;ot++){const Gt=ot/24*2-1,Yt=z(Gt,Et);It.push(Yt.x,Yt.y,Yt.z),wt.push(ot/24,St/32)}}const et=25;for(let St=0;St<32;St++)for(let Et=0;Et<24;Et++){const ot=St*et+Et,Gt=(St+1)*et+Et,Yt=(St+1)*et+(Et+1),ee=St*et+(Et+1);b.push(ot,Gt,ee),b.push(Gt,Yt,ee)}const Vt=.065;let ft=It.length/3;for(let St=0;St<=32;St++){const Et=St/32,ot=z(-1,Et);It.push(ot.x,ot.y,ot.z),wt.push(0,Et),It.push(ot.x,ot.y-Vt,ot.z),wt.push(1,Et)}for(let St=0;St<32;St++){const Et=ft+St*2,ot=ft+(St+1)*2,Gt=ft+(St+1)*2+1,Yt=ft+St*2+1;b.push(Et,Yt,ot),b.push(ot,Yt,Gt)}ft=It.length/3;for(let St=0;St<=32;St++){const Et=St/32,ot=z(1,Et);It.push(ot.x,ot.y,ot.z),wt.push(0,Et),It.push(ot.x,ot.y-Vt,ot.z),wt.push(1,Et)}for(let St=0;St<32;St++){const Et=ft+St*2,ot=ft+(St+1)*2,Gt=ft+(St+1)*2+1,Yt=ft+St*2+1;b.push(Et,ot,Yt),b.push(ot,Yt,Gt)}ft=It.length/3;for(let St=0;St<=24;St++){const Et=St/24*2-1,ot=z(Et,0);It.push(ot.x,ot.y,ot.z),wt.push(St/24,0),It.push(ot.x,ot.y-Vt,ot.z),wt.push(St/24,1)}for(let St=0;St<24;St++){const Et=ft+St*2,ot=ft+(St+1)*2,Gt=ft+(St+1)*2+1,Yt=ft+St*2+1;b.push(Et,Yt,ot),b.push(ot,Yt,Gt)}ft=It.length/3;for(let St=0;St<=24;St++){const Et=St/24*2-1,ot=z(Et,1);It.push(ot.x,ot.y,ot.z),wt.push(St/24,0),It.push(ot.x,ot.y-Vt,ot.z),wt.push(St/24,1)}for(let St=0;St<24;St++){const Et=ft+St*2,ot=ft+(St+1)*2,Gt=ft+(St+1)*2+1,Yt=ft+St*2+1;b.push(Et,ot,Yt),b.push(ot,Yt,Gt)}const Dt=new De;return Dt.setAttribute("position",new de(It,3)),Dt.setAttribute("uv",new de(wt,2)),Dt.setIndex(b),Dt.computeVertexNormals(),Dt},Mt=new m(q(),k);Mt.castShadow=!0,Mt.receiveShadow=!0,K.add(Mt);const j=[-.68,-.18,.32,.76],st=new N({color:2565930,roughness:.65});j.forEach(ht=>{const bt=(ht- -1.18)/2.27,H=[];for(let It=0;It<=16;It++){const wt=It/16*2-1,b=Math.max(0,1-Math.pow(Math.abs(wt),2.2)),z=Math.sin(Math.PI*(.12+.76*bt)),et=1.54+.13*b*z+.005;H.push(new F(wt*.63,et,ht))}const Ft=new Rn(H),Wt=new _n(Ft,16,.012,6,!1),Zt=new m(Wt,st);K.add(Zt)}),[-.635,.635].forEach(ht=>{const bt=new Q(.012,.012,2.22,8);bt.rotateX(Math.PI/2);const H=new m(bt,st);H.position.set(ht,1.53,-.04),K.add(H)});const $=new U(1.22,.035,.08),vt=new m($,st);vt.position.set(0,1.54,-1.17),K.add(vt);const mt=new U(1.24,.035,.07),Rt=new m(mt,st);Rt.position.set(0,1.54,1.08),K.add(Rt);const Ut=new Kt(1.24,2.22);Ut.rotateX(Math.PI/2);const ut=new N({color:1579035,roughness:.95}),Ct=new m(Ut,ut);Ct.position.set(0,1.48,-.04),K.add(Ct),this.bodyGroup.add(K),[-.635,.635].forEach((ht,bt)=>{const H=new m(new Kt(2.2,1.16),V);H.position.set(ht,.95,-.04),H.rotation.y=bt===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(H);const Ft=new U(.04,.32,1.15),Wt=new m(Ft,L);Wt.position.set(ht*.98,.58,-.05),this.bodyGroup.add(Wt);const Zt=new m(new Q(.022,.022,1.02,8),new N({color:1579035,roughness:.5}));Zt.position.set(ht*.96,1.16,-1),Zt.rotation.x=.2,this.bodyGroup.add(Zt);const It=new m(new Q(.022,.022,1.08,8),new N({color:1579035,roughness:.5}));It.position.set(ht*.96,1.1,-.15),this.bodyGroup.add(It);const wt=new m(new Q(.022,.022,1.08,8),new N({color:1579035,roughness:.5}));wt.position.set(ht*.96,1.1,1.02),this.bodyGroup.add(wt)});const D=new pt;D.position.set(0,0,1.075);const _t=new m(new Kt(1.26,1.18),tt);_t.position.set(0,.95,.01),_t.rotation.y=0,D.add(_t),[-.54,.54].forEach(ht=>{const bt=new pt;bt.position.set(ht,.74,.035);const H=new m(new U(.12,.24,.04),new N({color:1579035,roughness:.6}));bt.add(H);const Ft=new m(new U(.1,.1,.025),new le({color:16096779}));Ft.position.set(0,.055,.018),bt.add(Ft);const Wt=new m(new U(.1,.1,.025),new le({color:14427686}));Wt.position.set(0,-.055,.018),bt.add(Wt),this.brakeLights.push(Wt),D.add(bt)});const lt=new U(1.32,.12,.08),xt=new m(lt,new N({color:1579035,roughness:.85}));xt.position.set(0,.32,.06),D.add(xt),[-.52,.52].forEach(ht=>{const bt=new m(new U(.18,.22,.02),x);bt.position.set(ht,.18,.04),bt.rotation.x=.08,D.add(bt)}),[-.34,.34].forEach(ht=>{const bt=new Q(.042,.046,.28,12);bt.rotateX(Math.PI/2);const H=new m(bt,G);H.position.set(ht,.21,.04),D.add(H);const Ft=new jn(.038,12),Wt=new le({color:526344}),Zt=new m(Ft,Wt);Zt.position.set(ht,.21,.181),D.add(Zt);const It=new U(.02,.09,.04),wt=new N({color:2565930,roughness:.8}),b=new m(It,wt);b.position.set(ht,.265,.04),D.add(b);const z=.95,et=new he(.14,z,12);et.rotateX(Math.PI/2),et.translate(0,0,z*.5);const Vt=new le({color:16729344,transparent:!0,opacity:0,blending:zi,depthWrite:!1}),ft=new m(et,Vt);ft.position.set(ht,.21,.182),ft.userData={isCore:!1,isGlow:!1},D.add(ft),this.exhaustFires.push(ft);const Dt=.55,St=new he(.075,Dt,10);St.rotateX(Math.PI/2),St.translate(0,0,Dt*.5);const Et=new le({color:16771584,transparent:!0,opacity:0,blending:zi,depthWrite:!1}),ot=new m(St,Et);ot.position.set(ht,.21,.183),ot.userData={isCore:!0,isGlow:!1},D.add(ot),this.exhaustFires.push(ot);const Gt=new jn(.18,12),Yt=new le({color:16737792,transparent:!0,opacity:0,blending:zi,depthWrite:!1}),ee=new m(Gt,Yt);ee.position.set(ht,.21,.184),ee.userData={isCore:!1,isGlow:!0},D.add(ee),this.exhaustFires.push(ee)}),this.bodyGroup.add(D);const dt=new pt;dt.position.set(0,0,-1.15);const Ot=new m(new Kt(1.22,1.18),O);Ot.position.set(0,.95,0),Ot.rotation.y=Math.PI,dt.add(Ot),[-.32,.32].forEach(ht=>{const bt=new pt;bt.position.set(ht,.68,-.04);const H=new m(new Q(.085,.085,.04,16),G);H.rotateX(Math.PI/2),bt.add(H);const Ft=new m(new qt(.075,12,12,0,Math.PI*2,0,Math.PI*.5),new le({color:16777215}));Ft.rotateX(Math.PI),Ft.position.z=-.015,bt.add(Ft),this.headlights.push(Ft),dt.add(bt)}),this.bodyGroup.add(dt),[-1,1].forEach(ht=>{const bt=new pt,H=(.64+.14)*ht;bt.position.set(H,1.15,-.72);const Ft=new Q(.012,.012,.28,8);Ft.rotateZ(ht>0?-Math.PI*.35:Math.PI*.35);const Wt=new m(Ft,new N({color:1579035}));bt.add(Wt);const Zt=new Q(.075,.075,.03,16);Zt.rotateX(Math.PI/2);const It=new m(Zt,new N({color:1579035,roughness:.5}));It.position.set(ht*.12,.08,0),bt.add(It);const wt=new m(new jn(.068,16),G);wt.position.set(ht*.12,.08,.018),bt.add(wt),this.bodyGroup.add(bt)});const ct=new pt,A=new m(new U(.48,.12,.44),new N({color:1981066,roughness:.7}));A.position.set(0,.52,-.32),ct.add(A);const E=new m(new U(.48,.42,.1),new N({color:1981066,roughness:.7}));E.position.set(0,.76,-.12),ct.add(E);const Y=new m(new U(1.16,.16,.48),S);Y.position.set(0,.54,.55),ct.add(Y);const yt=new m(new U(1.16,.48,.12),S);yt.position.set(0,.84,.82),ct.add(yt);const gt=new pt;gt.position.set(0,.78,-.85);const at=new Q(.016,.016,.62,10);at.rotateZ(Math.PI/2);const kt=new m(at,G);gt.add(kt),[-.28,.28].forEach(ht=>{const bt=new m(new Q(.024,.024,.12,8),x);bt.rotateZ(Math.PI/2),bt.position.x=ht,gt.add(bt)});const Lt=new m(new Q(.045,.045,.04,12),new N({color:1579035}));Lt.position.set(0,.04,-.04),gt.add(Lt),ct.add(gt),this.bodyGroup.add(ct);const Pt=(ht=!1)=>{const bt=new pt,H=new Q(.24,.24,.14,20);H.rotateZ(Math.PI/2);const Ft=new m(H,x);Ft.castShadow=!0,bt.add(Ft);const Wt=new Q(.14,.14,.145,16);Wt.rotateZ(Math.PI/2);const Zt=new m(Wt,T);bt.add(Zt);const It=new m(new Q(.05,.05,.155,12),G);It.rotateZ(Math.PI/2),bt.add(It);for(let wt=0;wt<4;wt++){const b=wt/4*Math.PI*2,z=new m(new Q(.012,.012,.16,6),G);z.rotateZ(Math.PI/2),z.position.set(0,Math.sin(b)*.08,Math.cos(b)*.08),bt.add(z)}return bt},Xt=new pt;Xt.position.set(0,.24,-1.18);const Nt=Pt(!0);Xt.add(Nt),this.wheels.push(Nt),this.frontWheel=Xt;const Tt=new m(new Q(.024,.028,.52,8),G);Tt.position.set(-.1,.22,0),Tt.rotation.x=-.18,Xt.add(Tt);const Qt=new Q(.28,.28,.18,16,1,!0,Math.PI*.2,Math.PI*.65);Qt.rotateZ(Math.PI/2);const Jt=new m(Qt,L);Jt.position.set(0,.05,0),Xt.add(Jt),this.bodyGroup.add(Xt),[-.56,.56].forEach(ht=>{const bt=Pt(!1);bt.position.set(ht,.24,.64),this.wheels.push(bt),this.bodyGroup.add(bt)})}update(t,e,n,i,o,a){const r=t*1e3/3600,c=2*Math.PI*.24,h=r/c*a*Math.PI*2;this.wheelRotation+=h,this.wheels.forEach(M=>{M.rotation.x=this.wheelRotation});const d=n-e,f=d*.045;this.currentRoll+=(f-this.currentRoll)*Math.min(1,a*9),this.bodyGroup.rotation.z=this.currentRoll,this.frontWheel&&(this.frontWheel.rotation.y=-d*.18);const l=-d*.08;this.currentYaw+=(l-this.currentYaw)*Math.min(1,a*8),this.bodyGroup.rotation.y=this.currentYaw;let u=0;i?u=.04:o&&(u=-.035),this.currentPitch+=(u-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch,this.brakeLights.forEach(M=>{M.material.color.setHex(i?16711680:14427686)}),this.exhaustFires.forEach(M=>{if(o)if(M.userData.isGlow){M.material.opacity=.75+Math.random()*.25;const v=1+Math.random()*.45;M.scale.set(v,v,1),M.material.color.setHex(Math.random()>.35?16733440:16755200)}else if(M.userData.isCore){M.material.opacity=.98;const v=1+Math.random()*.55,g=.85+Math.random()*.3;M.scale.set(g,g,v),M.material.color.setHex(Math.random()>.45?16771584:16777215)}else{M.material.opacity=.9+Math.random()*.1;const v=1+Math.random()*.7,g=.9+Math.random()*.35;M.scale.set(g,g,v);const p=Math.random();M.material.color.setHex(p>.6?16724736:p>.25?16737792:16750848)}else M.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(M=>M.scale.set(1.4,1.4,1.4))):this.headlights.forEach(M=>M.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=.88,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.45,this.bodyGroup.rotation.y=.5,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.exhaustFires.forEach(t=>{t.material.opacity=0}),this.updateBoundingBox()}}class Np{constructor(){this.isMobile=ei(),this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[],this.policeStrobes=[]}applyShadow(t){this.isMobile||(t.castShadow=!0)}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let H=0;H<128;H+=8)e.fillStyle="#6b7280",e.fillRect(H,0,4,128),e.fillStyle="#d1d5db",e.fillRect(H+4,0,4,128);const n=new te(t);n.wrapS=pe,n.wrapT=pe,n.repeat.set(4,4),this.tinRoofMat=new N({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new N({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const o=i.getContext("2d");o.fillStyle="#c8a165",o.fillRect(0,0,128,128),o.strokeStyle="#8c6239",o.lineWidth=3;for(let H=0;H<=128;H+=16)o.beginPath(),o.moveTo(0,H),o.lineTo(128,H),o.stroke(),o.beginPath(),o.moveTo(H,0),o.lineTo(H,128),o.stroke();const a=new te(i);a.wrapS=pe,a.wrapT=pe,a.repeat.set(2,2),this.bambooWallMat=new N({map:a,roughness:.85,color:13935475}),this.woodMat=new N({color:6045747,roughness:.85}),this.mudPlinthMat=new N({color:8150594,roughness:.95}),this.brickMat=new N({color:10239278,roughness:.9}),this.palmLeafMat=new N({color:3046706,roughness:.6,side:ye}),this.bananaLeafMat=new N({color:4431943,roughness:.5,side:ye}),this.treeCrownMat=new N({color:1793568,roughness:.85}),this.bambooTrunkMat=new N({color:6732650,roughness:.4}),this.palmTrunkMat=new N({color:7162945,roughness:.9}),this.hayMat=new N({color:13934615,roughness:.95}),this.paddyFieldMat=new N({color:3706428,roughness:.8}),this.waterMat=new N({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new N({color:10395294,roughness:.7}),this.cowWhiteMat=new N({color:16119280,roughness:.6}),this.cowBrownMat=new N({color:9262372,roughness:.65}),this.cowBlackPatchMat=new N({color:2171169,roughness:.7}),this.hornMat=new N({color:3621201,roughness:.4}),this.ropeMat=new le({color:12756553}),this.duckMat=new N({color:16777215,roughness:.5}),this.beakMat=new N({color:16750592,roughness:.4}),this.smokeMat=new le({color:16777215,transparent:!0,opacity:.35}),this.bridgeRedMat=new N({color:14427686,roughness:.55}),this.bridgeWhiteMat=new N({color:16317180,roughness:.5});const r=document.createElement("canvas");r.width=256,r.height=128;const c=r.getContext("2d");c.fillStyle="#ffffff",c.fillRect(0,0,256,128),c.fillStyle="#dc2626";const h=32;for(let H=-128;H<384;H+=h*2)c.beginPath(),c.moveTo(H,0),c.lineTo(H+h,0),c.lineTo(H+h-128,128),c.lineTo(H-128,128),c.closePath(),c.fill();const d=new te(r);d.wrapS=pe,d.wrapT=pe,d.repeat.set(24,1),this.bridgeCurbMat=new N({map:d,roughness:.6}),this.pipelineMat=new N({color:9741240,metalness:.8,roughness:.25}),this.riverWaterMat=new N({color:1400437,roughness:.12,metalness:.35,transparent:!0,opacity:.92});const f=document.createElement("canvas");f.width=64,f.height=128;const l=f.getContext("2d");l.fillStyle="#dc2626",l.fillRect(0,0,64,128),l.fillStyle="#ffffff",l.fillRect(0,24,64,30),l.fillRect(0,78,64,30);const u=new te(f);this.bollardMat=new N({map:u,roughness:.5});const M=document.createElement("canvas");M.width=128,M.height=128;const v=M.getContext("2d");v.fillStyle="#1e40af",v.fillRect(0,0,128,128);for(let H=0;H<128;H+=8)v.fillStyle="#1d4ed8",v.fillRect(H,0,4,128),v.fillStyle="#3b82f6",v.fillRect(H+4,0,4,128);const g=new te(M);g.wrapS=pe,g.wrapT=pe,g.repeat.set(6,2),this.stageBlueRoofMat=new N({map:g,metalness:.4,roughness:.45,color:1920728,side:ye}),this.stageTrussMat=new N({color:3359061,metalness:.75,roughness:.35}),this.stageBaseYellowMat=new N({color:16436245,roughness:.65}),this.stageBorderBlueMat=new N({color:165063,roughness:.45}),this.stageFloorMat=new N({color:10265519,roughness:.7}),this.stageTerracottaMat=new N({color:12730636,roughness:.85}),this.stageGoldEmblemMat=new N({color:16498468,metalness:.65,roughness:.25}),this.hillGreenMat=new N({color:3046706,roughness:.92,flatShading:!0}),this.hillDarkGreenMat=new N({color:1332013,roughness:.95,flatShading:!0}),this.pavingPlazaMat=new N({color:14078929,roughness:.9});const p=document.createElement("canvas");p.width=1024,p.height=1024;const w=p.getContext("2d");w.fillStyle="#8c867e",w.fillRect(0,0,1024,1024);const _=10,y=8,P=1024/_,C=1024/y;for(let H=0;H<_;H++)for(let Ft=0;Ft<y;Ft++){const Wt=Ft*C+12,Zt=H*P+18,It=C-24,wt=P-26;w.fillStyle="#0f172a",w.fillRect(Wt,Zt,It,wt);const b=w.createLinearGradient(Wt,Zt,Wt,Zt+wt);b.addColorStop(0,"#38bdf8"),b.addColorStop(.35,"#1e293b"),b.addColorStop(1,"#090d16"),w.fillStyle=b,w.fillRect(Wt+3,Zt+6,It-6,wt-9),w.strokeStyle="rgba(226, 232, 240, 0.45)",w.lineWidth=2,w.beginPath(),w.moveTo(Wt+It*.5,Zt+6),w.lineTo(Wt+It*.5,Zt+wt-3),w.moveTo(Wt+3,Zt+wt*.5),w.lineTo(Wt+It-3,Zt+wt*.5),w.stroke(),w.fillStyle="#ffffff",w.fillRect(Wt-4,Zt-5,It+8,8),w.fillStyle="rgba(0, 0, 0, 0.35)",w.fillRect(Wt-4,Zt+3,It+8,3)}const L=new te(p);L.wrapS=pe,L.wrapT=pe,L.repeat.set(2,4),this.uiuFacadeMat=new N({map:L,metalness:.25,roughness:.55});const k=document.createElement("canvas");k.width=1024,k.height=1024;const S=k.getContext("2d");S.drawImage(p,0,0),S.fillStyle="#141416",S.fillRect(40,30,944,320),S.strokeStyle="#8c867e",S.lineWidth=12,S.strokeRect(36,24,952,332),S.font='900 240px "Montserrat", sans-serif',S.textAlign="center",S.textBaseline="middle",S.shadowColor="#ef4444",S.shadowBlur=48,S.strokeStyle="rgba(239, 68, 68, 0.95)",S.lineWidth=44,S.lineCap="round",S.lineJoin="round",S.strokeText("UIU",512,190),S.strokeStyle="#dc2626",S.lineWidth=26,S.strokeText("UIU",512,190),S.strokeStyle="#f97316",S.lineWidth=14,S.strokeText("UIU",512,190),S.shadowBlur=0,S.fillStyle="#fff1f2",S.fillText("UIU",512,190);const x=new te(k);this.uiuLogoMat=new N({map:x,metalness:.2,roughness:.35,emissive:14427686,emissiveIntensity:.9});const T=document.createElement("canvas");T.width=1024,T.height=1024;const G=T.getContext("2d");G.fillStyle="#090d16",G.fillRect(0,0,1024,1024);const tt=G.createLinearGradient(0,0,0,1024);tt.addColorStop(0,"#1e293b"),tt.addColorStop(.3,"#0f172a"),tt.addColorStop(1,"#020617"),G.fillStyle=tt,G.fillRect(0,0,1024,1024);for(let H=0;H<1024;H+=64)G.strokeStyle="rgba(255, 255, 255, 0.14)",G.lineWidth=2,G.beginPath(),G.moveTo(0,H),G.lineTo(1024,H),G.stroke();for(let H=0;H<1024;H+=64)G.strokeStyle="rgba(255, 255, 255, 0.14)",G.lineWidth=2,G.beginPath(),G.moveTo(H,0),G.lineTo(H,1024),G.stroke();G.strokeStyle="#cbd5e1",G.lineWidth=14,G.lineCap="square";const O=4,V=1024/O;for(let H=0;H<O;H++){const Ft=H*V,Wt=(H+1)*V;G.beginPath(),G.moveTo(32,Ft),G.lineTo(992,Wt),G.stroke(),G.beginPath(),G.moveTo(992,Ft),G.lineTo(32,Wt),G.stroke(),G.lineWidth=18,G.strokeStyle="#94a3b8",G.beginPath(),G.moveTo(0,Wt),G.lineTo(1024,Wt),G.stroke(),G.lineWidth=14,G.strokeStyle="#cbd5e1"}const W=new te(T);this.uiuAtriumMat=new N({map:W,metalness:.6,roughness:.25}),this.uiuBrickFlankMat=new N({color:11817737,roughness:.8}),this.uiuRoofGardenMat=new N({color:1409085,roughness:.9}),this.uiuTentMat=new N({color:16317180,roughness:.45});const X=document.createElement("canvas");X.width=512,X.height=128;const nt=X.getContext("2d");nt.fillStyle="#0f172a",nt.fillRect(0,0,512,128),nt.strokeStyle="#f59e0b",nt.lineWidth=6,nt.strokeRect(8,8,496,112),nt.fillStyle="#ef4444",nt.font="900 48px sans-serif",nt.textAlign="center",nt.textBaseline="middle",nt.fillText("UIU",256,42),nt.fillStyle="#ffffff",nt.font="bold 18px sans-serif",nt.fillText("UNITED INTERNATIONAL UNIVERSITY",256,90);const J=new te(X);this.uiuGateSignMat=new N({map:J,roughness:.4});const K=document.createElement("canvas");K.width=1024,K.height=1024;const q=K.getContext("2d");q.fillStyle="#15803d",q.fillRect(0,0,1024,1024),q.fillStyle="#65a30d";for(let H=0;H<1024;H+=80)q.fillRect(0,H,1024,40);q.strokeStyle="#ffffff",q.lineWidth=12,q.strokeRect(48,40,928,944),q.beginPath(),q.moveTo(48,512),q.lineTo(976,512),q.stroke(),q.beginPath(),q.arc(512,512,136,0,Math.PI*2),q.stroke(),q.fillStyle="#ffffff",q.beginPath(),q.arc(512,512,16,0,Math.PI*2),q.fill(),q.strokeRect(292,40,440,184),q.strokeRect(292,800,440,184),q.strokeRect(392,40,240,76),q.strokeRect(392,908,240,76),q.beginPath(),q.arc(512,170,72,0,Math.PI),q.stroke(),q.beginPath(),q.arc(512,854,72,Math.PI,0),q.stroke();const Mt=32;q.beginPath(),q.arc(48,40,Mt,0,Math.PI*.5),q.stroke(),q.beginPath(),q.arc(976,40,Mt,Math.PI*.5,Math.PI),q.stroke(),q.beginPath(),q.arc(48,984,Mt,Math.PI*1.5,Math.PI*2),q.stroke(),q.beginPath(),q.arc(976,984,Mt,Math.PI,Math.PI*1.5),q.stroke();const j=new te(K);j.anisotropy=4,this.uiuLawnMat=new N({map:j,roughness:.85}),this.uiuConcreteMat=new N({color:9209470,roughness:.7}),this.uiuGlassMat=new N({color:988970,metalness:.8,roughness:.15}),this.goalPostMat=new N({color:16317180,roughness:.4});const st=document.createElement("canvas");st.width=2048,st.height=512;const $=st.getContext("2d");$.fillStyle="#023c27",$.fillRect(0,0,2048,512),[{exit:"প্রস্থান ০১",bng:"টাঙ্গাইল",dist:"৯৮ কিমি",x:36,w:620},{exit:"প্রস্থান ০২",bng:"ইউআইইউ",dist:"১ কিমি",x:714,w:620},{exit:"প্রস্থান ∞",bng:"বিয়ে",dist:"∞ কিমি",x:1392,w:620}].forEach(H=>{$.strokeStyle="#ffffff",$.lineWidth=8,$.strokeRect(H.x,24,H.w,464),$.fillStyle="#045438",$.fillRect(H.x+8,32,H.w-16,84),$.strokeStyle="#ffffff",$.lineWidth=4,$.strokeRect(H.x+8,32,H.w-16,84),$.fillStyle="#ffffff",$.font='bold 36px "Montserrat", sans-serif',$.textAlign="center",$.textBaseline="middle",$.fillText(H.exit,H.x+H.w*.5,74),$.strokeStyle="rgba(255, 255, 255, 0.35)",$.lineWidth=3,$.strokeRect(H.x+16,128,H.w-32,350);const Ft=H.x+80;$.fillStyle="#ffffff",$.beginPath(),$.moveTo(Ft,200),$.lineTo(Ft-36,255),$.lineTo(Ft-16,255),$.lineTo(Ft-16,400),$.lineTo(Ft+16,400),$.lineTo(Ft+16,255),$.lineTo(Ft+36,255),$.closePath(),$.fill(),$.textAlign="left",$.fillStyle="#ffffff",$.font='900 76px "Montserrat", sans-serif',$.shadowColor="rgba(255, 255, 255, 0.4)",$.shadowBlur=8,$.fillText(H.bng,H.x+150,248),$.shadowBlur=0,$.fillStyle="#fde047",$.font='bold 58px "Montserrat", sans-serif',$.shadowColor="rgba(253, 224, 71, 0.35)",$.shadowBlur=6,$.fillText(H.dist,H.x+150,360),$.shadowBlur=0});const mt=new te(st);this.highwayGantrySignMat=new N({map:mt,roughness:.25,emissive:206872,emissiveIntensity:.4});const Rt=document.createElement("canvas");Rt.width=128,Rt.height=128;const Ut=Rt.getContext("2d");Ut.fillStyle="#dc2626",Ut.fillRect(0,0,128,128),Ut.fillStyle="#ffffff";for(let H=-128;H<256;H+=32)Ut.beginPath(),Ut.moveTo(H,0),Ut.lineTo(H+16,0),Ut.lineTo(H+16-128,128),Ut.lineTo(H-128,128),Ut.closePath(),Ut.fill();const ut=new te(Rt);ut.wrapS=pe,ut.wrapT=pe,ut.repeat.set(2,3),this.gantryHazardMat=new N({map:ut,roughness:.5});const Ct=document.createElement("canvas");Ct.width=512,Ct.height=512;const D=Ct.getContext("2d");D.fillStyle="#f1f5f9",D.fillRect(0,0,512,512),D.fillStyle="rgba(180, 83, 9, 0.15)";for(let H=0;H<512;H+=16)D.fillRect(0,H,512,4);D.strokeStyle="#64748b",D.lineWidth=4;for(let H=64;H<512;H+=128)D.beginPath(),D.moveTo(H-44,460),D.lineTo(H-44,280),D.arc(H,280,44,Math.PI,0,!1),D.lineTo(H+44,460),D.stroke(),D.fillStyle="#1e293b",D.beginPath(),D.moveTo(H-36,460),D.lineTo(H-36,290),D.arc(H,290,36,Math.PI,0,!1),D.lineTo(H+36,460),D.fill(),D.fillStyle="#b45309",D.beginPath(),D.arc(H,235,14,0,Math.PI*2),D.fill();D.fillStyle="#cbd5e1",D.fillRect(0,60,512,28),D.fillStyle="#94a3b8";for(let H=0;H<512;H+=24)D.fillRect(H,64,12,20);const _t=new te(Ct);_t.wrapS=pe,_t.wrapT=pe,this.templeWallMat=new N({map:_t,roughness:.82});const lt=document.createElement("canvas");lt.width=256,lt.height=512;const xt=lt.getContext("2d");xt.fillStyle="#e2e8f0",xt.fillRect(0,0,256,512);for(let H=0;H<512;H+=14)xt.fillStyle=H%28===0?"#475569":"#94a3b8",xt.fillRect(0,H,256,4),xt.fillStyle="rgba(180, 83, 9, 0.2)",xt.fillRect(0,H+4,256,4);const dt=new te(lt);dt.wrapT=pe,dt.repeat.set(1,4),this.templeShikharaMat=new N({map:dt,roughness:.88}),this.marigoldOrangeMat=new N({color:15357964,roughness:.65}),this.marigoldYellowMat=new N({color:16436245,roughness:.65}),this.templeBrassMat=new N({color:14251782,metalness:.85,roughness:.25}),this.templePlinthMat=new N({color:14078929,roughness:.9}),this.skinMat=new N({color:16106390,roughness:.65}),this.hairMat=new N({color:1579035,roughness:.45}),this.panjabiMat=new N({color:16317180,roughness:.7}),this.lungiPlaidMat=new N({color:165063,roughness:.8}),this.shirtTealMat=new N({color:889992,roughness:.7}),this.shirtRedMat=new N({color:14427686,roughness:.7}),this.policePantsMat=new N({color:988970,roughness:.8}),this.policeVestMat=new N({color:8702998,roughness:.45}),this.policeShirtMat=new N({color:4674921,roughness:.7}),this.policeSilverMat=new N({color:15857145,roughness:.2}),this.policeCapMat=new N({color:593174,roughness:.5}),this.goldBadgeMat=new N({color:16096779,metalness:.85,roughness:.2}),this.gunMetalMat=new N({color:1976635,metalness:.85,roughness:.25}),this.gunWoodMat=new N({color:7877903,roughness:.6}),this.strobeRedMat=new N({color:15680580,emissive:16711680,emissiveIntensity:2.2,roughness:.2}),this.strobeBlueMat=new N({color:3900150,emissive:26367,emissiveIntensity:2.2,roughness:.2});const Ot=document.createElement("canvas");Ot.width=512,Ot.height=320;const ct=Ot.getContext("2d");ct.fillStyle="#0b192c",ct.fillRect(0,0,512,320),ct.strokeStyle="#f59e0b",ct.lineWidth=14,ct.strokeRect(10,10,492,300),ct.strokeStyle="#ffffff",ct.lineWidth=3,ct.strokeRect(22,22,468,276),ct.fillStyle="#1e3a8a",ct.fillRect(26,26,460,56),ct.fillStyle="#f59e0b",ct.font="bold 24px sans-serif",ct.textAlign="center",ct.textBaseline="middle",ct.fillText("★ বাংলাদেশ পুলিশ ★",256,54),ct.fillStyle="#ffffff",ct.font="900 52px sans-serif",ct.fillText("পুলিশ চেকপোস্ট",256,146),ct.fillStyle="#38bdf8",ct.font="bold 22px sans-serif",ct.fillText("POLICE CHECK POST",256,202),ct.fillStyle="#dc2626",ct.fillRect(26,235,460,58),ct.fillStyle="#ffffff",ct.font="900 24px sans-serif",ct.fillText("গতি কমান • SLOW DOWN",256,264);const A=new te(Ot);A.anisotropy=4,this.policeSignMat=new N({map:A,roughness:.35});const E=document.createElement("canvas");E.width=512,E.height=192;const Y=E.getContext("2d");Y.fillStyle="#0b192c",Y.fillRect(0,0,512,192),Y.strokeStyle="#f59e0b",Y.lineWidth=10,Y.strokeRect(6,6,500,180),Y.fillStyle="#fde047",Y.font="bold 20px sans-serif",Y.textAlign="center",Y.textBaseline="middle",Y.fillText("★ বাংলাদেশ পুলিশ ★",256,36),Y.fillStyle="#ffffff",Y.font="900 48px sans-serif",Y.fillText("পুলিশ বক্স",256,96),Y.fillStyle="#38bdf8",Y.font="bold 22px sans-serif",Y.fillText("HIGHWAY POLICE BOX",256,150);const yt=new te(E);yt.anisotropy=4,this.policeBoxSignMat=new N({map:yt,roughness:.35});const gt=document.createElement("canvas");gt.width=512,gt.height=192;const at=gt.getContext("2d");at.fillStyle="#ea580c",at.fillRect(0,0,512,192),at.strokeStyle="#ffffff",at.lineWidth=8,at.strokeRect(6,6,500,180),at.fillStyle="#0b192c",at.fillRect(16,16,480,50),at.fillStyle="#fde047",at.font="bold 22px sans-serif",at.textAlign="center",at.textBaseline="middle",at.fillText("UNITED INTERNATIONAL UNIVERSITY",256,41),at.fillStyle="#ffffff",at.font="900 36px sans-serif",at.fillText("UIU SHUTTLE BUS STAND",256,105),at.fillStyle="#0b192c",at.font="bold 20px sans-serif",at.fillText("ছাত্র-ছাত্রী পরিবহন • QUEST FOR EXCELLENCE",256,155);const kt=new te(gt);kt.anisotropy=4,this.uiuBusStandSignMat=new N({map:kt,roughness:.35});const Lt=document.createElement("canvas");Lt.width=512,Lt.height=128;const Pt=Lt.getContext("2d");Pt.fillStyle="#ffffff",Pt.fillRect(0,0,512,128),Pt.fillStyle="#dc2626";for(let H=-128;H<640;H+=64)Pt.beginPath(),Pt.moveTo(H,0),Pt.lineTo(H+40,0),Pt.lineTo(H-24,128),Pt.lineTo(H-64,128),Pt.fill();Pt.fillStyle="#0f172a",Pt.fillRect(160,24,192,80),Pt.strokeStyle="#f59e0b",Pt.lineWidth=4,Pt.strokeRect(164,28,184,72),Pt.fillStyle="#ffffff",Pt.font="900 28px sans-serif",Pt.textAlign="center",Pt.textBaseline="middle",Pt.fillText("POLICE",256,52),Pt.fillStyle="#f59e0b",Pt.font="bold 20px sans-serif",Pt.fillText("থামুন",256,82);const Xt=new te(Lt);this.policeBarricadeMat=new N({map:Xt,roughness:.5});const Nt=document.createElement("canvas");Nt.width=256,Nt.height=64;const Tt=Nt.getContext("2d");Tt.fillStyle="#ffffff",Tt.fillRect(0,0,256,64),Tt.fillStyle="#1e293b";for(let H=0;H<256;H+=64)Tt.fillRect(H,0,32,64);const Qt=new te(Nt);Qt.wrapS=pe,Qt.repeat.set(8,1),this.curbStripeMat=new N({map:Qt,roughness:.8}),this.uiuBusOrangeMat=new N({color:15357964,roughness:.35,metalness:.1}),this.uiuBusGlassMat=new N({color:593174,roughness:.12,metalness:.85}),this.uiuBusBumperMat=new N({color:2042167,roughness:.65}),this.tireMat=new N({color:1120295,roughness:.9}),this.rimMat=new N({color:9741240,metalness:.8,roughness:.3});const Jt=document.createElement("canvas");Jt.width=1024,Jt.height=256;const ht=Jt.getContext("2d");ht.fillStyle="#ea580c",ht.fillRect(0,0,1024,256),ht.fillStyle="#ffffff",ht.beginPath(),ht.moveTo(0,190),ht.bezierCurveTo(300,190,600,160,1024,130),ht.lineTo(1024,150),ht.bezierCurveTo(600,180,300,210,0,210),ht.closePath(),ht.fill(),ht.fillStyle="#cbd5e1",ht.beginPath(),ht.moveTo(0,205),ht.bezierCurveTo(320,205,620,175,1024,145),ht.lineTo(1024,162),ht.bezierCurveTo(620,192,320,222,0,222),ht.closePath(),ht.fill(),ht.fillStyle="#ffffff",ht.beginPath(),ht.arc(440,136,22,0,Math.PI*2),ht.fill(),ht.strokeStyle="#dc2626",ht.lineWidth=4,ht.stroke(),ht.fillStyle="#dc2626",ht.font="900 16px sans-serif",ht.textAlign="center",ht.textBaseline="middle",ht.fillText("UIU",440,136),ht.fillStyle="#ffffff",ht.font="bold 24px sans-serif",ht.textAlign="left",ht.fillText("UNITED INTERNATIONAL UNIVERSITY",475,130),ht.fillStyle="#fde047",ht.font="bold 15px sans-serif",ht.fillText("QUEST FOR EXCELLENCE • UIU SHUTTLE BUS",475,154);const bt=new te(Jt);bt.anisotropy=4,this.uiuBusSideMat=new N({map:bt,roughness:.35})}createCow(t="brown"){const e=new pt;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new U(.9,.95,1.7),o=new m(i,n);o.position.set(0,1.05,0),this.applyShadow(o),e.add(o);const a=new he(.3,.45,8),r=new m(a,n);r.position.set(0,1.62,-.45),r.rotation.x=-.2,this.applyShadow(r),e.add(r);const c=new U(.12,.45,.5),h=new m(c,n);h.position.set(0,.85,-.85),e.add(h);const d=new pt;d.position.set(0,1.25,-.85);const f=new U(.45,.55,.6),l=new m(f,n);l.position.set(0,.15,-.2),l.rotation.x=.35,d.add(l);const u=new U(.48,.52,.7),M=new m(u,n);M.position.set(0,.28,-.55),d.add(M);const v=new N({color:2236962,roughness:.8}),g=new U(.36,.3,.3),p=new m(g,v);p.position.set(0,.18,-.92),d.add(p),[-.22,.22].forEach(V=>{const W=new he(.06,.35,6),X=new m(W,this.hornMat);X.position.set(V,.56,-.48),X.rotation.z=V>0?-.4:.4,X.rotation.x=.3,d.add(X);const nt=new U(.22,.08,.1),J=new m(nt,n);J.position.set(V>0?.32:-.32,.38,-.45),J.rotation.z=V>0?-.35:.35,d.add(J)}),e.add(d),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(V=>{const W=new U(.2,.75,.2),X=new m(W,n);X.position.set(V.x,.38,V.z),this.applyShadow(X),e.add(X);const nt=new U(.22,.1,.22),J=new m(nt,this.hornMat);J.position.set(V.x,.05,V.z),e.add(J)});const _=new pt;_.position.set(0,1.35,.85);const y=new Q(.03,.03,.85,6);y.translate(0,-.42,0);const P=new m(y,n);_.add(P);const C=new he(.08,.25,6);C.translate(0,-.9,0);const L=new m(C,this.hornMat);_.add(L),e.add(_);const k=new Q(.08,.1,1.2,8),S=new m(k,this.woodMat);S.position.set(.9,.6,-1.2),e.add(S);const x=[new F(0,1.2,-.8),new F(.45,.75,-1),new F(.9,.85,-1.2)],T=new Rn(x),G=new _n(T,8,.02,4,!1),tt=new m(G,this.ropeMat);e.add(tt);const O={type:"cow",head:d,tail:_,seed:Math.random()*10};return this.animatedAnimals.push(O),e}createVillageHouse(t=!1){const e=new pt;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new U(6.6,.45,5.2),o=new m(i,this.mudPlinthMat);o.position.set(0,.22,0),o.receiveShadow=!0,e.add(o);const a=new U(5.8,2.6,3.8),r=new m(a,this.bambooWallMat);r.position.set(0,1.75,-.4),this.applyShadow(r),r.receiveShadow=!0,e.add(r);const c=new U(.85,1.8,.08),h=new m(c,this.woodMat);h.position.set(.6,1.35,1.52),e.add(h),[-1.6,-.6].forEach(M=>{const v=new U(.7,.8,.08),g=new m(v,this.woodMat);g.position.set(M,1.8,1.52),e.add(g)});const d=new U(6.6,.1,2.8),f=new m(d,n);f.position.set(0,3.65,-.9),f.rotation.x=-.52,this.applyShadow(f),e.add(f);const l=new U(6.6,.1,3.4),u=new m(l,n);return u.position.set(0,3.5,.8),u.rotation.x=.46,this.applyShadow(u),e.add(u),[-2.5,-.8,.8,2.5].forEach(M=>{const v=new Q(.08,.08,2.3,8),g=new m(v,this.woodMat);g.position.set(M,1.6,2.1),this.applyShadow(g),e.add(g)}),e}createTeaStall(){const t=new pt;t.name="cha_er_tong";const e=new U(3.2,1,1.8),n=new m(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new U(3.8,.08,2.8),o=new m(i,this.tinRoofMat);o.position.set(0,2.3,.2),o.rotation.x=.2,this.applyShadow(o),t.add(o),[-1.6,1.6].forEach(v=>{const g=new Q(.07,.07,2.2,6),p=new m(g,this.woodMat);p.position.set(v,1.1,1.2),t.add(p)});const a=new U(3,.08,.45),r=new m(a,this.woodMat);r.position.set(0,.45,1.8),t.add(r),[-1.2,1.2].forEach(v=>{const g=new U(.08,.45,.4),p=new m(g,this.woodMat);p.position.set(v,.22,1.8),t.add(p)});const c=new N({color:13421772,metalness:.9,roughness:.2}),h=new Q(.18,.22,.35,10),d=new m(h,c);d.position.set(-.6,1.18,.2),t.add(d);const f=new jo({color:16777215,transmission:.7,roughness:.1}),l=new Q(.12,.12,.28,8),u=new m(l,f);u.position.set(.6,1.15,.1),t.add(u);const M=new pt;M.position.set(-.6,1.45,.2),t.add(M);for(let v=0;v<4;v++){const g=new qt(.08,6,6),p=new m(g,this.smokeMat);p.position.y=v*.25,M.add(p)}return this.smokeEmitters.push(M),t}createHaystack(){const t=new pt;t.name="khorer_gada";const e=new Q(1.6,1.9,1.4,12),n=new m(e,this.hayMat);n.position.y=.7,this.applyShadow(n),t.add(n);const i=new Q(1,1.6,1.2,12),o=new m(i,this.hayMat);o.position.y=2,this.applyShadow(o),t.add(o);const a=new he(1,1.5,12),r=new m(a,this.hayMat);r.position.y=3.35,this.applyShadow(r),t.add(r);const c=new Q(.04,.05,4.8,6),h=new m(c,this.bambooTrunkMat);return h.position.y=2.4,t.add(h),t}createJatriChawni(t=1){const e=new pt;e.name="jatri_chawni";const n=new U(5,.35,2.3),i=new m(n,this.concreteMat);i.position.set(0,.175,0),i.receiveShadow=!0,e.add(i);const o=new U(5.2,.14,.22),a=new m(o,this.brickMat);a.position.set(0,.07,-1.1),e.add(a);const r=new U(4.8,2.5,.18),c=new m(r,this.brickMat);c.position.set(0,1.45,1.02),this.applyShadow(c),e.add(c);const h=new Kt(4.6,2.3),d=new m(h,this.culvertRailingMaterial);d.position.set(0,1.45,.92),e.add(d),[[-2.1,-.92],[2.1,-.92],[-2.1,.92],[2.1,.92]].forEach(([R,Z])=>{const rt=new Q(.08,.09,2.6,12),I=new m(rt,this.culvertRailingMaterial);I.position.set(R,1.45,Z),this.applyShadow(I),e.add(I);const B=new Q(.12,.12,.35,12),it=new m(B,new N({color:1409085}));it.position.set(R,.45,Z),e.add(it)});const l=new Q(2.4,2.4,5.2,24,1,!0,Math.PI*.2,Math.PI*.6);l.rotateZ(Math.PI/2);const u=new m(l,this.tinRoofMat);if(u.position.set(0,2.75,.05),this.applyShadow(u),e.add(u),[-1.8,0,1.8].forEach(R=>{const Z=new U(.06,.06,2.1),rt=new m(Z,new N({color:3359061}));rt.position.set(R,2.55,0),e.add(rt)}),!this.isMobile){const R=new Pn(16772565,3,14);R.position.set(0,2.45,.25),e.add(R)}const M=new Q(.14,.18,.28,8,1,!0),v=new m(M,new N({color:1976635,wireframe:!0}));v.position.set(0,2.48,.25),e.add(v);const g=new m(new qt(.1,12,12),new le({color:16772565}));g.position.set(0,2.48,.25),e.add(g);const p=document.createElement("canvas");p.width=1024,p.height=256;const w=p.getContext("2d");w.fillStyle="#15803d",w.fillRect(0,0,1024,256),w.strokeStyle="#f59e0b",w.lineWidth=14,w.strokeRect(10,10,1004,236),w.strokeStyle="#fde047",w.lineWidth=4,w.strokeRect(24,24,976,208);const _=(R,Z)=>{w.fillStyle="#fde047",w.beginPath(),w.roundRect(R,Z,76,44,8),w.fill(),w.fillStyle="#0284c7",w.fillRect(R+8,Z+6,20,18),w.fillRect(R+34,Z+6,20,18),w.fillRect(R+58,Z+6,12,18),w.fillStyle="#18181b",w.beginPath(),w.arc(R+20,Z+44,9,0,Math.PI*2),w.arc(R+56,Z+44,9,0,Math.PI*2),w.fill()};_(42,105),_(906,105),w.fillStyle="#ffffff",w.font="900 86px sans-serif",w.textAlign="center",w.textBaseline="middle",w.shadowColor="rgba(0,0,0,0.9)",w.shadowBlur=12,w.fillText("BUS STOP",512,85),w.fillStyle="#fde047",w.font="bold 54px sans-serif",w.shadowColor="rgba(0,0,0,0.8)",w.shadowBlur=8,w.fillText("বাস স্টপ  |  যাত্রী ছাউনি",512,185),w.shadowBlur=0;const y=new te(p),P=new pt;P.position.set(0,2.65,-1.02);const C=new U(4.24,.84,.07),L=new N({color:1332013,roughness:.5}),k=new m(C,L);P.add(k);const S=new N({map:y,roughness:.35,emissive:1409085,emissiveIntensity:.15}),x=new Kt(4.18,.78);x.rotateY(Math.PI);const T=new m(x,S);T.position.set(0,0,-.038),P.add(T);const G=new Kt(4.18,.78),tt=new m(G,S);tt.position.set(0,0,.038),P.add(tt),e.add(P);const O=new pt,V=t>0?-2.25:2.25;O.position.set(V,0,-1.15);const W=new m(new Q(.18,.22,.3,12),this.concreteMat);W.position.set(0,.15,0),O.add(W);const X=new N({color:3359061,metalness:.8,roughness:.2}),nt=new m(new Q(.045,.045,3.1,12),X);nt.position.set(0,1.55,0),O.add(nt);const J=document.createElement("canvas");J.width=512,J.height=512;const K=J.getContext("2d");K.fillStyle="#0284c7",K.beginPath(),K.roundRect(16,16,480,480,48),K.fill(),K.strokeStyle="#facc15",K.lineWidth=20,K.stroke(),K.strokeStyle="#ffffff",K.lineWidth=4,K.beginPath(),K.roundRect(36,36,440,440,36),K.stroke(),K.fillStyle="#ffffff",K.beginPath(),K.roundRect(135,75,242,130,24),K.fill(),K.fillStyle="#0284c7",K.fillRect(155,95,60,50),K.fillRect(230,95,60,50),K.fillRect(305,95,52,50),K.fillStyle="#18181b",K.beginPath(),K.arc(190,205,22,0,Math.PI*2),K.arc(320,205,22,0,Math.PI*2),K.fill(),K.fillStyle="#ffffff",K.font="900 72px sans-serif",K.textAlign="center",K.textBaseline="middle",K.shadowColor="rgba(0,0,0,0.85)",K.shadowBlur=8,K.fillText("BUS STOP",256,310),K.fillStyle="#fde047",K.font="bold 56px sans-serif",K.fillText("বাস স্টপ",256,405),K.shadowBlur=0;const q=new te(J),Mt=new N({map:q,roughness:.35,emissive:165063,emissiveIntensity:.12}),j=new pt;j.position.set(0,2.7,0);const st=new m(new U(.96,.96,.06),new N({color:223649,roughness:.4}));j.add(st);const $=new Kt(.92,.92);$.rotateY(Math.PI);const vt=new m($,Mt);vt.position.set(0,0,-.032),j.add(vt);const mt=new Kt(.92,.92),Rt=new m(mt,Mt);Rt.position.set(0,0,.032),j.add(Rt),j.rotation.y=t>0?.35:-.35,O.add(j),e.add(O);const Ut=document.createElement("canvas");Ut.width=512,Ut.height=320;const ut=Ut.getContext("2d");ut.fillStyle="#f8fafc",ut.fillRect(0,0,512,320),ut.strokeStyle="#15803d",ut.lineWidth=14,ut.strokeRect(8,8,496,304),ut.strokeStyle="#dc2626",ut.lineWidth=4,ut.strokeRect(22,22,468,276),ut.fillStyle="#15803d",ut.font="bold 30px sans-serif",ut.textAlign="center",ut.textBaseline="middle",ut.fillText("বাংলাদেশ সড়ক পরিবহন (BRTC)",256,55),ut.fillStyle="#dc2626",ut.font="900 68px sans-serif",ut.shadowColor="rgba(0,0,0,0.3)",ut.shadowBlur=4,ut.fillText("BUS STOP",256,140),ut.fillStyle="#1e293b",ut.font="bold 50px sans-serif",ut.shadowBlur=0,ut.fillText("বাস স্টপ",256,220),ut.fillStyle="#64748b",ut.font="bold 24px sans-serif",ut.fillText("HIGHWAY PASSENGER SHELTER",256,275);const Ct=new te(Ut),D=new N({map:Ct,roughness:.35,emissive:16777215,emissiveIntensity:.08}),_t=new m(new Kt(1.2,.75),D),lt=t>0?-2.12:2.12;_t.position.set(lt,1.85,0),_t.rotation.y=t>0?-Math.PI/2:Math.PI/2,e.add(_t);const xt=new pt;xt.position.set(0,0,0);const dt=new U(4.4,.12,.7),Ot=new m(dt,this.woodMat);Ot.position.set(0,.65,.5),this.applyShadow(Ot),xt.add(Ot);const ct=new U(4.4,.42,.1),A=new m(ct,this.woodMat);A.position.set(0,1.12,.82),this.applyShadow(A),xt.add(A),[-1.9,0,1.9].forEach(R=>{const Z=new U(.12,.35,.58),rt=new m(Z,this.concreteMat);rt.position.set(R,.45,.5),xt.add(rt);const I=new U(.08,.55,.08),B=new m(I,new N({color:3359061}));B.position.set(R,.95,.82),xt.add(B)}),e.add(xt);const E=new pt;E.scale.set(1.35,1.35,1.35),E.position.set(0,.72,.48);const Y=new N({color:16106390,roughness:.6}),yt=new N({color:959977,roughness:.7}),gt=new N({color:1976635,roughness:.8}),at=new N({color:1579035,roughness:.5}),kt=new N({color:14362487,roughness:.6}),Lt=new N({color:16436245,roughness:.7}),Pt=new N({color:16777215,roughness:.8}),Xt=new N({color:986638,roughness:.4}),Nt=new pt;Nt.position.set(-.26,0,0);const Tt=new m(new U(.36,.46,.24),yt);Tt.position.set(0,.25,0),Tt.rotation.y=.35,Tt.rotation.z=-.12,Nt.add(Tt);const Qt=new m(new qt(.12,14,14),Y);Qt.position.set(.04,.58,.02),Qt.rotation.y=.45,Qt.rotation.z=-.12,Nt.add(Qt);const Jt=new m(new qt(.13,14,14),at);Jt.scale.set(1.02,1.05,1.02),Jt.position.set(.04,.61,.01),Nt.add(Jt);const ht=new m(new U(.34,.16,.44),gt);ht.position.set(0,-.02,-.15),Nt.add(ht),[-.1,.1].forEach(R=>{const Z=new m(new Q(.05,.045,.38,8),gt);Z.position.set(R,-.22,-.32),Nt.add(Z)});const bt=new m(new Q(.045,.04,.34,8),yt);bt.position.set(.18,.14,-.05),bt.rotation.z=-Math.PI/4,bt.rotation.x=-.18,Nt.add(bt),E.add(Nt);const H=new pt;H.position.set(.26,0,0);const Ft=new m(new U(.32,.42,.22),kt);Ft.position.set(0,.23,0),Ft.rotation.y=-.32,Ft.rotation.z=.14,H.add(Ft);const Wt=new m(new U(.34,.36,.24),Lt);Wt.position.set(0,.24,.02),H.add(Wt);const Zt=new m(new qt(.115,14,14),Y);Zt.position.set(-.06,.54,.02),Zt.rotation.y=-.38,Zt.rotation.z=.22,H.add(Zt);const It=new m(new qt(.125,14,14),Xt);It.scale.set(1.04,1.06,1.08),It.position.set(-.06,.57,0),H.add(It);const wt=new m(new Q(.04,.02,.36,8),Xt);wt.position.set(-.04,.42,.16),wt.rotation.x=-.35,H.add(wt);const b=new m(new U(.3,.15,.42),Pt);b.position.set(0,-.02,-.15),H.add(b),[-.08,.08].forEach(R=>{const Z=new m(new Q(.042,.038,.38,8),Pt);Z.position.set(R,-.22,-.32),H.add(Z)});const z=new m(new Q(.04,.035,.32,8),kt);z.position.set(-.16,.14,-.05),z.rotation.z=Math.PI/4,z.rotation.x=-.18,H.add(z);const et=new pt;et.position.set(.22,.22,-.2),et.rotation.x=-.25,et.rotation.z=-.15;const Vt=new Q(.016,.018,.38,8),ft=new N({color:1409085,roughness:.8}),Dt=new m(Vt,ft);et.add(Dt);const St=new Kt(.12,.06),Et=new N({color:1483594,roughness:.6,side:ye});[-1,1].forEach(R=>{const Z=new m(St,Et);Z.position.set(R*.06,-.04,0),Z.rotation.z=R*.55,et.add(Z)});const ot=new he(.07,.09,5);ot.rotateX(Math.PI);const Gt=new m(ot,Et);Gt.position.set(0,.18,0),et.add(Gt);const Yt=new N({color:14427686,roughness:.35,metalness:.1}),ee=new qt(.09,14,14);ee.scale(1.15,1.35,1.15);const Te=new m(ee,Yt);Te.position.set(0,.26,0),et.add(Te);const we=new an(.08,.035,8,16);we.rotateX(Math.PI/2);const We=new m(we,Yt);We.position.set(0,.23,0),et.add(We),H.add(et),E.add(H);const ze=new m(new qt(.065,12,12),Y);ze.scale.set(1.6,.95,1.2),ze.position.set(0,.1,-.06),E.add(ze);const Xe=new pt;Xe.position.set(0,1.38,.05);const Sn=new le({color:16723285}),hn=new m(new qt(.075,10,10),Sn);hn.position.set(-.05,.04,0),Xe.add(hn);const ii=new m(new qt(.075,10,10),Sn);ii.position.set(.05,.04,0),Xe.add(ii);const Fn=new he(.11,.14,12);Fn.rotateZ(Math.PI);const On=new m(Fn,Sn);return On.position.set(0,-.04,0),Xe.add(On),E.add(Xe),e.add(E),this.animatedAnimals.push({type:"couple",mesh:E,heart:Xe,seed:Math.random()*10}),e}createCoconutTree(){const t=new pt;t.name="coconut_tree";const e=new Rn([new F(0,0,0),new F(.4,3.5,.2),new F(.9,7.5,.5),new F(1.1,10.5,.7)]),n=new _n(e,12,.24,8,!1),i=new m(n,this.palmTrunkMat);this.applyShadow(i),t.add(i);const o=new F(1.1,10.5,.7),a=10;for(let r=0;r<a;r++){const c=r*Math.PI*2/a,h=new Kt(.8,3.4);h.translate(0,1.7,0);const d=new m(h,this.palmLeafMat);d.position.copy(o),d.rotation.y=c,d.rotation.x=.85,this.applyShadow(d),t.add(d)}for(let r=0;r<5;r++){const c=new qt(.2,8,8),h=new m(c,this.palmLeafMat);h.position.set(o.x+(Math.random()-.5)*.4,o.y-.25,o.z+(Math.random()-.5)*.4),t.add(h)}return t}createBananaTree(){const t=new pt;t.name="banana_tree";const e=new Q(.18,.28,2.8,8),n=new m(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let o=0;o<i;o++){const a=o*Math.PI*2/i,r=new Kt(.75,2.4);r.translate(0,1.2,0);const c=new m(r,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=a,c.rotation.x=.95,this.applyShadow(c),t.add(c)}return t}createBambooGrove(){const t=new pt;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,o=new Q(.06,.08,i,6),a=new m(o,this.bambooTrunkMat);a.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),a.rotation.z=(Math.random()-.5)*.15,a.rotation.x=(Math.random()-.5)*.15,t.add(a);const r=new qt(.8+Math.random()*.5,6,6),c=new m(r,this.palmLeafMat);c.position.set(a.position.x,i-.3,a.position.z),t.add(c)}return t}createElectricPole(){const t=new pt;t.name="electric_pole";const e=new Q(.14,.18,8.5,8),n=new m(e,this.concreteMat);n.position.y=4.25,this.applyShadow(n),t.add(n);const i=new U(2.2,.12,.12),o=new m(i,this.concreteMat);return o.position.y=7.8,t.add(o),[-.9,0,.9].forEach(a=>{const r=new Q(.04,.05,.2,6),c=new m(r,this.tinRoofMat);c.position.set(a,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new pt;n.name="village_pond";const i=new Kt(t,e);i.rotateX(-Math.PI/2);const o=new m(i,this.waterMat);o.position.y=.05,n.add(o),this.mudPlinthMat;const a=3;for(let r=0;r<a;r++){const c=new pt;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const h=new qt(.24,8,8);h.scale(1,.7,1.4);const d=new m(h,this.duckMat);c.add(d);const f=new qt(.14,8,8),l=new m(f,this.duckMat);l.position.set(0,.22,-.22),c.add(l);const u=new he(.06,.16,6);u.rotateX(-Math.PI/2);const M=new m(u,this.beakMat);M.position.set(0,.2,-.34),c.add(M),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new pt;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const o=new Q(.04,.04,t,6);o.rotateX(Math.PI/2);const a=new m(o,this.bambooTrunkMat);a.position.y=i,e.add(a)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const o=-t*.5+i*1.4,a=new Q(.05,.06,1.25,6),r=new m(a,this.woodMat);r.position.set(0,.62,o),this.applyShadow(r),e.add(r)}return e}createHighwayCafe(t=1){const e=new pt;e.name="highway_cafe";const n=new U(6.6,.28,4.4),i=new N({color:9268835,roughness:.85}),o=new m(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const a=new U(6.8,.14,.25),r=new m(a,this.concreteMat);r.position.set(0,.07,-2.15),e.add(r);const c=new U(5.6,3.2,3),h=new N({color:6111287,roughness:.8}),d=new m(c,h);d.position.set(0,1.74,.6),this.applyShadow(d),e.add(d);const f=new U(5.9,.22,3.3),l=new N({color:4073251,roughness:.6}),u=new m(f,l);u.position.set(0,3.42,.6),e.add(u);const M=new N({color:1976635,metalness:.8,roughness:.15,transparent:!0,opacity:.65}),v=new m(new U(1.9,1.8,.1),M);v.position.set(-1.6,1.7,-.92),e.add(v);const g=new m(new U(1.9,1.8,.1),M);g.position.set(1.6,1.7,-.92),e.add(g);const p=new m(new U(1.2,2.3,.1),M);p.position.set(0,1.45,-.92),e.add(p);const w=new N({color:16096779,metalness:.9,roughness:.2}),_=new m(new Q(.025,.025,.7,8),w);if(_.position.set(.42,1.35,-.98),e.add(_),!this.isMobile){const vt=new Pn(16772565,3.2,9);vt.position.set(0,2.2,.2),e.add(vt)}const y=new U(3.6,1,.8),P=new m(y,new N({color:2561548}));P.position.set(0,.8,.4),e.add(P);const C=document.createElement("canvas");C.width=256,C.height=256;const L=C.getContext("2d"),k=32;for(let vt=0;vt<256;vt+=k*2)L.fillStyle="#831843",L.fillRect(vt,0,k,256),L.fillStyle="#fef3c7",L.fillRect(vt+k,0,k,256);const S=new te(C);S.wrapS=pe,S.wrapT=pe,S.repeat.set(4,1);const x=new N({map:S,roughness:.7,side:ye}),T=new pt;T.position.set(0,2.65,-.9);const G=new Kt(4.8,1.5);G.rotateX(Math.PI*.4);const tt=new m(G,x);tt.position.set(0,-.22,-.65),T.add(tt);const O=new Kt(4.8,.26),V=new m(O,x);V.position.set(0,-.55,-1.25),T.add(V),[-2.2,2.2].forEach(vt=>{const mt=new Q(.02,.02,1.4,6);mt.rotateX(-Math.PI*.25);const Rt=new m(mt,new N({color:1976635}));Rt.position.set(vt,-.35,-.6),T.add(Rt)}),e.add(T);const W=document.createElement("canvas");W.width=1024,W.height=256;const X=W.getContext("2d");X.fillStyle="#1c120c",X.fillRect(0,0,1024,256),X.strokeStyle="#d97706",X.lineWidth=12,X.strokeRect(10,10,1004,236),X.strokeStyle="#fde047",X.lineWidth=4,X.strokeRect(22,22,980,212);const nt=(vt,mt)=>{X.fillStyle="#fde047",X.beginPath(),X.ellipse(vt,mt+32,42,12,0,0,Math.PI*2),X.fill(),X.fillStyle="#ffffff",X.beginPath(),X.moveTo(vt-30,mt-18),X.lineTo(vt+30,mt-18),X.quadraticCurveTo(vt+28,mt+24,vt+18,mt+28),X.lineTo(vt-18,mt+28),X.quadraticCurveTo(vt-28,mt+24,vt-30,mt-18),X.closePath(),X.fill(),X.strokeStyle="#ffffff",X.lineWidth=8,X.beginPath(),X.arc(vt+32,mt+4,14,-Math.PI*.4,Math.PI*.6),X.stroke(),X.strokeStyle="#fef08a",X.lineWidth=4,X.beginPath(),X.moveTo(vt-12,mt-24),X.quadraticCurveTo(vt-18,mt-38,vt-10,mt-48),X.moveTo(vt+8,mt-24),X.quadraticCurveTo(vt+2,mt-38,vt+12,mt-50),X.stroke()};nt(70,128),nt(954,128),X.fillStyle="#fef08a",X.font="900 82px sans-serif",X.textAlign="center",X.textBaseline="middle",X.shadowColor="rgba(0,0,0,0.95)",X.shadowBlur=14,X.fillText("HIGHWAY CAFE",512,80),X.fillStyle="#ffffff",X.font="bold 54px sans-serif",X.shadowColor="rgba(0,0,0,0.85)",X.shadowBlur=8,X.fillText("ক্যাফে ও রেস্তোরাঁ",512,172),X.fillStyle="#f59e0b",X.font="bold 26px sans-serif",X.shadowBlur=0,X.fillText("FRESH COFFEE • TEA • BURGERS & SNACKS",512,226);const J=new te(W),K=new N({map:J,roughness:.35,emissive:4005904,emissiveIntensity:.18}),q=new pt;q.position.set(0,3.4,-.95);const Mt=new m(new U(4.7,.92,.08),new N({color:2561548,roughness:.5}));q.add(Mt);const j=new Kt(4.62,.84);j.rotateY(Math.PI);const st=new m(j,K);return st.position.set(0,0,-.045),q.add(st),[-1.6,1.6].forEach(vt=>{const mt=new m(new Q(.02,.02,.35,6),w);mt.position.set(vt,.52,-.15),mt.rotation.x=Math.PI*.3,q.add(mt);const Rt=new m(new he(.08,.14,8),w);Rt.position.set(vt,.42,-.28),Rt.rotation.x=Math.PI*.8,q.add(Rt);const Ut=new m(new qt(.04,6,6),new le({color:16772565}));Ut.position.set(vt,.38,-.28),q.add(Ut)}),e.add(q),[-1.7,1.7].forEach(vt=>{const mt=new pt;mt.position.set(vt,.28,-1.35);const Rt=new m(new Q(.035,.22,.75,12),new N({color:1976635,metalness:.8}));Rt.position.y=.375,mt.add(Rt);const Ut=new m(new Q(.55,.55,.05,16),this.woodMat);Ut.position.y=.75,mt.add(Ut),[-.18,.18].forEach((ut,Ct)=>{const D=new m(new Q(.05,.045,.08,8),new N({color:16777215,roughness:.2}));D.position.set(ut,.81,Ct===0?.1:-.1),mt.add(D);const _t=new m(new jn(.04,8),new le({color:2561548}));_t.rotation.x=-Math.PI/2,_t.position.set(ut,.85,Ct===0?.1:-.1),mt.add(_t)}),[-.65,.65].forEach(ut=>{const Ct=new pt;Ct.position.set(ut,0,0),[-.14,.14].forEach(lt=>{[-.14,.14].forEach(xt=>{const dt=new m(new Q(.02,.02,.45,6),this.woodMat);dt.position.set(lt,.225,xt),Ct.add(dt)})});const D=new m(new U(.36,.04,.36),this.woodMat);D.position.y=.45,Ct.add(D);const _t=new m(new U(.36,.35,.04),this.woodMat);_t.position.set(0,.68,ut>0?.16:-.16),Ct.add(_t),mt.add(Ct)}),e.add(mt)}),[-2.9,2.9].forEach(vt=>{const mt=new m(new U(.45,.42,1.6),this.woodMat);mt.position.set(vt,.49,-1.2),e.add(mt);for(let Rt=-.55;Rt<=.55;Rt+=.5){const Ut=new m(new qt(.24,8,8),this.palmLeafMat);Ut.position.set(vt,.8,-1.2+Rt),e.add(Ut);const ut=new m(new qt(.06,6,6),new le({color:Rt<0?14427686:16096779}));ut.position.set(vt,.95,-1.2+Rt),e.add(ut)}}),e}createHighwayBar(t=-1){const e=new pt;e.name="highway_bar";const n=new U(6.6,.28,4.4),i=new N({color:1976635,roughness:.8}),o=new m(n,i);o.position.set(0,.14,0),o.receiveShadow=!0,e.add(o);const a=new U(6.8,.14,.25),r=new m(a,new N({color:988970}));r.position.set(0,.07,-2.15),e.add(r);const c=new U(5.6,3.2,3),h=new N({color:988970,roughness:.7}),d=new m(c,h);d.position.set(0,1.74,.6),this.applyShadow(d),e.add(d),[-2.5,2.5].forEach(st=>{const $=new m(new U(.55,3.2,.2),new N({color:4073251,roughness:.6}));$.position.set(st,1.74,-.9),e.add($)});const f=new U(5.9,.22,3.3),l=new m(f,new N({color:132631,roughness:.4}));l.position.set(0,3.42,.6),e.add(l);const u=new U(3.6,.12,.7),M=new N({color:1120295,roughness:.15,metalness:.8}),v=new m(u,M);v.position.set(0,1.05,-.6),e.add(v);const g=new U(3.4,.98,.6),p=new N({color:1976635,roughness:.5}),w=new m(g,p);w.position.set(0,.5,-.6),e.add(w);const _=new U(3.4,.04,.04),y=new le({color:440020}),P=new m(_,y);P.position.set(0,.98,-.93),e.add(P);const C=new U(3.4,1.6,.2),L=new m(C,new N({color:1973807,roughness:.3}));L.position.set(0,1.8,.6),e.add(L);const k=[1483594,14251782,440020,10033947,16436245];if([1.25,1.7,2.15].forEach((st,$)=>{const vt=new m(new U(3.2,.04,.3),new N({color:3718648,roughness:.1,transparent:!0,opacity:.8}));vt.position.set(0,st,.45),e.add(vt);for(let mt=-1.4;mt<=1.4;mt+=.28){const Rt=k[(Math.abs(Math.round(mt*10))+$)%k.length],Ut=new pt;Ut.position.set(mt,st+.02,.45);const ut=new m(new Q(.045,.045,.22,8),new N({color:Rt,roughness:.2,metalness:.3,transparent:!0,opacity:.9}));ut.position.y=.11,Ut.add(ut);const Ct=new m(new Q(.016,.022,.1,8),new N({color:Rt,roughness:.2}));Ct.position.y=.25,Ut.add(Ct);const D=new m(new Q(.018,.018,.02,6),new le({color:16638023}));D.position.y=.31,Ut.add(D),e.add(Ut)}}),[-1,0,1].forEach(st=>{const $=new pt;$.position.set(st,.28,-1.25);const vt=new m(new Q(.03,.24,.72,12),new N({color:9741240,metalness:.9,roughness:.15}));vt.position.y=.36,$.add(vt);const mt=new m(new an(.16,.02,8,16),new N({color:9741240,metalness:.9,roughness:.15}));mt.rotation.x=Math.PI/2,mt.position.y=.24,$.add(mt);const Rt=new m(new Q(.22,.22,.08,16),new N({color:10033947,roughness:.5}));Rt.position.y=.74,$.add(Rt),e.add($)}),!this.isMobile){const st=new Pn(440020,3.2,9);st.position.set(-1.2,2.3,.2),e.add(st);const $=new Pn(14239471,2.8,8);$.position.set(1.2,2.3,.2),e.add($)}const S=document.createElement("canvas");S.width=1024,S.height=256;const x=S.getContext("2d");x.fillStyle="#030712",x.fillRect(0,0,1024,256),x.strokeStyle="#ec4899",x.lineWidth=10,x.shadowColor="#ec4899",x.shadowBlur=18,x.strokeRect(12,12,1e3,232),x.strokeStyle="#06b6d4",x.lineWidth=4,x.shadowColor="#06b6d4",x.shadowBlur=12,x.strokeRect(26,26,972,204);const T=(st,$)=>{x.shadowColor="#facc15",x.shadowBlur=14,x.fillStyle="#facc15",x.beginPath(),x.roundRect(st,$+18,48,56,[0,0,8,8]),x.fill(),x.fillStyle="#ffffff",x.beginPath(),x.arc(st+10,$+14,14,0,Math.PI*2),x.arc(st+24,$+8,16,0,Math.PI*2),x.arc(st+38,$+14,14,0,Math.PI*2),x.fill(),x.strokeStyle="#facc15",x.lineWidth=6,x.beginPath(),x.arc(st+52,$+46,16,-Math.PI*.45,Math.PI*.45),x.stroke()},G=(st,$)=>{x.shadowColor="#06b6d4",x.shadowBlur=14,x.strokeStyle="#38bdf8",x.lineWidth=5,x.beginPath(),x.moveTo(st-30,$+10),x.lineTo(st+30,$+10),x.lineTo(st,$+50),x.closePath(),x.stroke(),x.fillStyle="#f43f5e",x.beginPath(),x.moveTo(st-20,$+22),x.lineTo(st+20,$+22),x.lineTo(st,$+50),x.closePath(),x.fill(),x.strokeStyle="#38bdf8",x.lineWidth=5,x.beginPath(),x.moveTo(st,$+50),x.lineTo(st,$+80),x.moveTo(st-22,$+80),x.lineTo(st+22,$+80),x.stroke(),x.fillStyle="#84cc16",x.beginPath(),x.arc(st-6,$+16,7,0,Math.PI*2),x.fill()};T(52,85),G(940,80),x.fillStyle="#38bdf8",x.font="900 84px sans-serif",x.textAlign="center",x.textBaseline="middle",x.shadowColor="#06b6d4",x.shadowBlur=24,x.fillText("HIGHWAY BAR",512,78),x.fillStyle="#fde047",x.font="bold 62px sans-serif",x.shadowColor="#f59e0b",x.shadowBlur=20,x.fillText("মদের বার",512,168),x.fillStyle="#a3e635",x.font="bold 25px sans-serif",x.shadowColor="#84cc16",x.shadowBlur=8,x.fillText("IMPORTED LIQUOR • CHILLED BEER • WINE LOUNGE",512,224);const tt=new te(S),O=new N({map:tt,roughness:.25,emissive:440020,emissiveIntensity:.35}),V=new pt;V.position.set(0,3.4,-.95);const W=new m(new U(4.7,.95,.08),new N({color:132631,roughness:.4}));V.add(W);const X=new Kt(4.62,.88);X.rotateY(Math.PI);const nt=new m(X,O);nt.position.set(0,0,-.045),V.add(nt);const J=new Kt(.8,1.2),K=document.createElement("canvas");K.width=256,K.height=384;const q=K.getContext("2d");q.fillStyle="#030712",q.fillRect(0,0,256,384),q.strokeStyle="#ec4899",q.lineWidth=6,q.strokeRect(6,6,244,372),q.fillStyle="#facc15",q.font="900 46px sans-serif",q.textAlign="center",q.shadowColor="#f59e0b",q.shadowBlur=12,q.fillText("BAR",128,70),q.fillStyle="#38bdf8",q.font="bold 36px sans-serif",q.shadowColor="#06b6d4",q.fillText("OPEN",128,130),q.fillStyle="#ec4899",q.font="900 44px sans-serif",q.shadowColor="#ec4899",q.fillText("24/7",128,200),q.fillStyle="#fde047",q.font="bold 32px sans-serif",q.shadowColor="#f59e0b",q.fillText("মদ ও বিয়ার",128,280),q.fillStyle="#a3e635",q.font="bold 22px sans-serif",q.fillText("CHILLED BEER",128,340);const Mt=new te(K),j=new m(J,new N({map:Mt,emissive:15485081,emissiveIntensity:.35}));return j.position.set(-2.82,2,-.6),j.rotation.y=-Math.PI/2,e.add(j),e}createSmokingGuysGroup(t=1){const e=new pt;e.name="smoking_guys_group",e.scale.set(1.25,1.25,1.25);const n=new N({color:16106390,roughness:.65}),i=new N({color:1579035,roughness:.45}),o=new N({color:16317180,roughness:.7}),a=new N({color:1976635,roughness:.7}),r=new pt;r.position.set(-.42,0,0);const c=new N({color:14427686,roughness:.7}),h=new N({color:1976635,roughness:.8}),d=new m(new U(.38,.58,.24),c);d.position.set(0,1.15,0),d.rotation.y=.25,r.add(d);const f=new m(new U(.3,.24,.16),c);f.position.set(0,1.38,.12),r.add(f);const l=new pt;l.position.set(0,1.54,0),l.rotation.x=-.12,l.rotation.y=.25;const u=new m(new qt(.125,12,12),n);l.add(u);const M=new m(new qt(.132,12,12),i);M.scale.set(1.02,1.08,1.04),M.position.set(0,.03,-.01),l.add(M),r.add(l),[-.1,.1].forEach(ut=>{const Ct=new m(new Q(.06,.05,.84,8),h);Ct.position.set(ut,.44,0),r.add(Ct);const D=new m(new U(.12,.08,.22),o);D.position.set(ut,.04,-.04),r.add(D)});const v=new m(new Q(.045,.04,.52,8),c);v.position.set(-.24,1.1,0),v.rotation.z=.15,r.add(v);const g=new m(new Q(.048,.044,.32,8),c);g.position.set(.23,1.25,-.06),g.rotation.z=-Math.PI*.35,g.rotation.x=-Math.PI*.25,r.add(g);const p=new m(new Q(.042,.038,.32,8),c);p.position.set(.14,1.44,-.12),p.rotation.z=Math.PI*.32,p.rotation.x=-Math.PI*.45,r.add(p);const w=new m(new qt(.045,8,8),n);w.position.set(.04,1.5,-.16),r.add(w);const _=new pt;_.position.set(.02,1.51,-.18),_.rotation.x=-Math.PI*.15,_.rotation.y=.28;const y=new m(new Q(.012,.012,.028,8),new N({color:14251782,roughness:.9}));y.rotation.x=Math.PI/2,_.add(y);const P=new m(new Q(.012,.012,.065,8),new N({color:16317180,roughness:.5}));P.rotation.x=Math.PI/2,P.position.z=-.046,_.add(P);const C=new m(new qt(.014,8,8),new le({color:16726784}));C.position.z=-.082,_.add(C);const L=new pt;L.position.set(.02,1.51,-.26),L.userData={type:"cigarette",maxH:.5,spd:.007,drift:.004,light:null,seed:Math.random()*5};for(let ut=0;ut<5;ut++){const Ct=new m(new qt(.022+ut*.006,6,6),this.smokeMat);Ct.position.y=ut*.1,L.add(Ct)}this.smokeEmitters.push(L),r.add(L),r.add(_),e.add(r),this.animatedAnimals.push({type:"smoker",head:l,seed:Math.random()*10});const k=new pt;k.position.set(.48,0,-.15);const S=new N({color:1981066,roughness:.7}),x=new N({color:4153874,roughness:.8}),T=new m(new U(.36,.56,.22),S);T.position.set(0,1.14,0),T.rotation.y=-.7,k.add(T);const G=new m(new qt(.12,12,12),n);G.position.set(0,1.54,0),G.rotation.y=-.7,k.add(G);const tt=new m(new qt(.128,12,12),i);tt.scale.set(1.02,1.06,1.04),tt.position.set(0,1.57,-.01),k.add(tt),[-.09,.09].forEach(ut=>{const Ct=new m(new Q(.058,.05,.84,8),x);Ct.position.set(ut,.44,0),k.add(Ct);const D=new m(new U(.12,.08,.22),a);D.position.set(ut,.04,-.04),k.add(D)});const O=new m(new Q(.042,.038,.48,8),S);O.position.set(.22,1.16,.06),O.rotation.z=-Math.PI*.22,O.rotation.x=-Math.PI*.25,k.add(O);const V=new m(new Q(.042,.038,.48,8),S);V.position.set(-.21,1.08,.04),V.rotation.z=Math.PI*.16,V.rotation.x=-Math.PI*.12,k.add(V);const W=new m(new qt(.042,8,8),n);W.position.set(-.28,.85,.1),k.add(W);const X=new pt;X.position.set(-.32,.85,.12),X.rotation.x=-Math.PI*.35,X.rotation.y=-.4;const nt=new m(new Q(.012,.012,.08,8),new N({color:16317180,roughness:.5}));nt.rotation.x=Math.PI/2,X.add(nt);const J=new m(new qt(.014,8,8),new le({color:16726784}));J.position.z=-.045,X.add(J);const K=new pt;K.position.set(-.32,.88,.1),K.userData={type:"cigarette",maxH:.45,spd:.006,drift:.003,light:null,seed:Math.random()*5};for(let ut=0;ut<4;ut++){const Ct=new m(new qt(.02+ut*.005,6,6),this.smokeMat);Ct.position.y=ut*.1,K.add(Ct)}this.smokeEmitters.push(K),k.add(K),k.add(X),e.add(k);const q=new pt;q.position.set(.02,0,.52);const Mt=new N({color:3359061,roughness:.7}),j=new N({color:13935475,roughness:.8}),st=new m(new U(.38,.58,.24),Mt);st.position.set(0,1.15,0),st.rotation.y=Math.PI*.9,q.add(st);const $=new m(new qt(.125,12,12),n);$.position.set(0,1.54,0),$.rotation.y=Math.PI*.9,q.add($);const vt=new m(new qt(.132,12,12),i);vt.scale.set(1.02,1.08,1.04),vt.position.set(0,1.57,.01),q.add(vt),[-.1,.1].forEach(ut=>{const Ct=new m(new Q(.058,.05,.84,8),j);Ct.position.set(ut,.44,0),q.add(Ct);const D=new m(new U(.12,.08,.22),new N({color:7877903}));D.position.set(ut,.04,.04),q.add(D)}),[-.22,.22].forEach(ut=>{const Ct=new m(new Q(.045,.04,.48,8),Mt);Ct.position.set(ut,1.12,-.06),Ct.rotation.z=ut>0?-.25:.25,Ct.rotation.x=Math.PI*.18,q.add(Ct)}),e.add(q);const mt=new m(new U(.35,.2,.5),this.brickMat);mt.position.set(-.1,.1,-.15),e.add(mt);const Rt=new m(new U(.1,.05,.16),new N({color:1981066,metalness:.5,roughness:.3}));Rt.position.set(-.1,.225,-.15),e.add(Rt);const Ut=new m(new U(.07,.035,.11),new N({color:16096779,roughness:.8}));return Ut.position.set(.02,.218,-.22),e.add(Ut),e}createDingiBoat(){const t=new pt;t.name="dingi_nouka";const e=new N({color:4073251,roughness:.8}),n=new U(1.1,.12,3.8),i=new m(n,e);i.position.y=.06,t.add(i),[-.55,.55].forEach(y=>{const P=new U(.08,.45,3.8),C=new m(P,e);C.position.set(y,.28,0),C.rotation.z=y>0?.25:-.25,t.add(C)}),[-1,1].forEach(y=>{const P=new he(.55,1.2,5);P.rotateX(y>0?-Math.PI/3:Math.PI/3);const C=new m(P,e);C.position.set(0,.35,y*2.3),C.scale.set(.9,.5,1.1),t.add(C);const L=new m(new qt(.08,8,8),new N({color:16096779,metalness:.8,roughness:.3}));L.position.set(0,.65,y*2.7),t.add(L)});const o=new Q(.68,.68,1.9,16,1,!0,0,Math.PI);o.rotateZ(Math.PI/2),o.rotateY(Math.PI/2);const a=new m(o,this.bambooWallMat);a.position.set(0,.48,-.2),t.add(a),[-.8,0,.8].forEach(y=>{const P=new an(.69,.025,6,16,Math.PI);P.rotateZ(Math.PI/2),P.rotateY(Math.PI/2);const C=new m(P,this.woodMat);C.position.set(0,.48,-.2+y),t.add(C)});const r=new pt;r.position.set(0,.22,1.35);const c=new N({color:13935475,roughness:.7}),h=new N({color:165063,roughness:.8}),d=new N({color:1579035,roughness:.5}),f=new m(new U(.38,.28,.42),h);f.position.y=.14,r.add(f);const l=new m(new U(.32,.42,.2),c);l.position.set(0,.46,-.05),l.rotation.x=-.15,r.add(l);const u=new m(new qt(.11,10,10),c);u.position.set(0,.74,-.1),r.add(u);const M=new m(new qt(.115,10,10),d);M.position.set(0,.77,-.1),M.scale.set(1.02,1.05,1.02),r.add(M);const v=new he(.24,.12,12),g=new m(v,this.bambooWallMat);g.position.set(0,.86,-.1),r.add(g);const p=new pt;p.position.set(.32,.4,0),p.rotation.z=-Math.PI*.32,p.rotation.x=Math.PI*.25;const w=new m(new Q(.025,.025,2.2,8),this.woodMat);w.position.y=-.5,p.add(w);const _=new m(new U(.18,.55,.02),this.woodMat);return _.position.y=-1.4,p.add(_),r.add(p),t.add(r),t}createWaterHyacinthCluster(){const t=new pt;t.name="kochuripana_cluster";const e=new N({color:1409085,roughness:.5}),n=new le({color:12616956});for(let i=0;i<7;i++){const o=i/7*Math.PI*2+Math.random()*.4,a=.25+Math.random()*.45,r=Math.cos(o)*a,c=Math.sin(o)*a,h=new qt(.12,8,6);h.scale(1.3,.2,1);const d=new m(h,e);if(d.position.set(r,.02,c),t.add(d),i%2===0){const f=new m(new he(.04,.12,6),n);f.position.set(r*.8,.08,c*.8),t.add(f)}}return t}createBangladeshiRiverBridge(t=13,e=60){const n=new pt;n.name="bangladeshi_river_bridge";const i=t*.5,o=.45,a=new U(t+.8,.45,e),r=new N({color:4674921,roughness:.8}),c=new m(a,r);c.position.set(0,-.28,0),c.receiveShadow=!0,n.add(c),[-e*.5+.3,e*.5-.3].forEach(S=>{const x=new U(t+.2,.012,.35),T=new m(x,new N({color:988970,roughness:.9}));T.position.set(0,.006,S),n.add(T)}),[-1,1].forEach(S=>{const x=(i+.3)*S,T=new U(.38,.85,e),G=new m(T,this.bridgeRedMat);G.position.set(x,-.45,0),this.applyShadow(G),n.add(G);const tt=new U(.44,.12,e),O=new m(tt,this.bridgeWhiteMat);O.position.set(x,-.85,0),n.add(O)}),[-18,-6,6,18].forEach(S=>{const x=new pt;x.position.set(0,0,S);const T=new U(t+1.2,.45,.95),G=new m(T,this.bridgeRedMat);G.position.y=-.55,x.add(G),[-5.2,-1.8,1.8,5.2].forEach(V=>{const W=new Q(.24,.28,3.2,8),X=new m(W,this.bridgeRedMat);X.position.set(V,-1.95,0),X.rotation.z=V>0?-.06:.06,x.add(X);const nt=new m(new Q(.29,.29,.28,8),new N({color:993570,roughness:.9}));nt.position.set(V,-1.35,0),x.add(nt)});const tt=new U(t+.6,.22,.3),O=new m(tt,this.bridgeRedMat);O.position.y=-1.6,x.add(O),n.add(x)}),[-1,1].forEach(S=>{const x=(i+.16)*S,T=new U(.34,.28,e),G=new m(T,this.bridgeCurbMat);G.position.set(x,.14,0),G.receiveShadow=!0,n.add(G)});const d=16,f=[];for(let S=0;S<d;S++)f.push(-28.5+S/(d-1)*57);[-1,1].forEach(S=>{const x=(i+.16)*S;f.forEach(T=>{const G=Math.sin((T+28.5)/57*Math.PI)*o,tt=new U(.22,.96,.22),O=new m(tt,this.bridgeRedMat);O.position.set(x,.28+.48+G,T),this.applyShadow(O),n.add(O);const V=new he(.18,.08,4);V.rotateY(Math.PI/4);const W=new m(V,this.bridgeRedMat);W.position.set(x,.28+.96+.04+G,T),n.add(W)});for(let T=0;T<f.length-1;T++){const G=f[T],tt=f[T+1],O=(G+tt)*.5,V=tt-G,W=Math.sin((O+28.5)/57*Math.PI)*o,X=new m(new U(.14,.12,V),this.bridgeWhiteMat);X.position.set(x,.28+.44+W,O),n.add(X);const nt=new m(new U(.2,.12,V),this.bridgeWhiteMat);if(nt.position.set(x,.28+.92+W,O),n.add(nt),S===-1){const J=new Q(.065,.065,V,8);J.rotateX(Math.PI/2);const K=new m(J,this.pipelineMat);K.position.set(x+.09,.28+.32+W,O),n.add(K)}}});const l=new Kt(180,48);l.rotateX(-Math.PI/2);const u=new m(l,this.riverWaterMat);u.position.set(0,-1.35,0),u.receiveShadow=!0,n.add(u);const M=new Kt(180,48);M.rotateX(-Math.PI/2);const v=new m(M,new N({color:1841431,roughness:.95}));v.position.set(0,-3.2,0),n.add(v),[-1,1].forEach(S=>{const x=S*26.5;[-1,1].forEach(T=>{const G=new Kt(75,7);G.rotateX(S>0?-Math.PI*.38:Math.PI*.38);const tt=new m(G,this.mudPlinthMat);tt.position.set(T*48,-.7,x),n.add(tt)})});const g=this.createDingiBoat();g.position.set(16.5,-1.35,3.5),g.rotation.y=.45,n.add(g),this.animatedAnimals.push({type:"dingi",mesh:g,startY:-1.35,seed:Math.random()*10}),[[14.5,-1.34,1.5],[19,-1.34,5.5],[-15,-1.34,-4],[-7.5,-1.34,6],[7.5,-1.34,-6]].forEach(([S,x,T])=>{const G=this.createWaterHyacinthCluster();G.position.set(S,x,T),n.add(G)});const w=new pt;w.position.set(i+.95,0,-28.8);const _=new m(new U(.35,1.2,.35),this.bridgeCurbMat);_.position.y=.6,w.add(_);const y=document.createElement("canvas");y.width=512,y.height=320;const P=y.getContext("2d");P.fillStyle="#15803d",P.fillRect(0,0,512,320),P.strokeStyle="#facc15",P.lineWidth=12,P.strokeRect(8,8,496,304),P.strokeStyle="#ffffff",P.lineWidth=4,P.strokeRect(22,22,468,276),P.fillStyle="#ffffff",P.font="bold 56px sans-serif",P.textAlign="center",P.textBaseline="middle",P.fillText("মেঘনা নদী সেতু",256,85),P.fillStyle="#facc15",P.font="900 44px sans-serif",P.fillText("MEGHNA RIVER BRIDGE",256,160),P.fillStyle="#e2e8f0",P.font="bold 28px sans-serif",P.fillText("দৈর্ঘ্য: ৬০ মিটার | LENGTH: 60M",256,225),P.fillStyle="#86efac",P.font="bold 22px sans-serif",P.fillText("সড়ক ও জনপথ অধিদপ্তর (RHD)",256,275);const C=new te(y),L=new N({map:C,roughness:.4}),k=new m(new Kt(1.2,.75),L);return k.position.set(0,1.35,-.05),k.rotation.y=-Math.PI/4,w.add(k),n.add(w),[-1,1].forEach(S=>{const x=(i+.38)*S;for(let T=-29.2;T<=-23.5;T+=1.4){const G=new m(new Q(.1,.1,.85,12),this.bollardMat);G.position.set(x,.425,T),this.applyShadow(G),n.add(G);const tt=new m(new qt(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);tt.position.set(x,.85,T),n.add(tt)}for(let T=23.5;T<=29.2;T+=1.4){const G=new m(new Q(.1,.1,.85,12),this.bollardMat);G.position.set(x,.425,T),this.applyShadow(G),n.add(G);const tt=new m(new qt(.1,12,8,0,Math.PI*2,0,Math.PI*.5),this.bridgeRedMat);tt.position.set(x,.85,T),n.add(tt)}}),n}createFigure({shirtMat:t,pantsMat:e,isSitting:n=!1,isSmoking:i=!1}){const o=new pt;o.name="human_figure",o.scale.set(1.15,1.15,1.15);const a=new U(.36,.52,.22),r=new m(a,t||this.shirtTealMat);r.position.y=n?.72:1.12,o.add(r);const c=new qt(.12,8,8),h=new m(c,this.skinMat);h.position.y=n?1.08:1.48,o.add(h);const d=new qt(.126,8,8);d.scale(1.02,1.05,1.02);const f=new m(d,this.hairMat);f.position.set(0,(n?1.08:1.48)+.02,-.01),o.add(f),[-.22,.22].forEach((u,M)=>{const v=new Q(.045,.04,.48,6),g=new m(v,t||this.shirtTealMat);if(n)g.position.set(u,.7,.1),g.rotation.x=.35;else if(i&&M===1){g.position.set(u*.8,1.25,-.08),g.rotation.z=-.6,g.rotation.x=-.5;const p=new Q(.01,.01,.12,4);p.rotateX(Math.PI/2);const w=new m(p,this.panjabiMat);w.position.set(0,.24,-.08),g.add(w);const _=new qt(.015,4,4),y=new m(_,new le({color:16729088}));y.position.set(0,0,-.06),w.add(y)}else g.position.set(u,1.08,0),g.rotation.z=u>0?-.1:.1;o.add(g)});const l=e||this.stageTrussMat;return n?[-.1,.1].forEach(u=>{const M=new U(.11,.12,.42),v=new m(M,l);v.position.set(u,.48,.22),o.add(v);const g=new U(.1,.44,.1),p=new m(g,l);p.position.set(u,.22,.4),o.add(p)}):[-.09,.09].forEach(u=>{const M=new Q(.055,.048,.82,6),v=new m(M,l);v.position.set(u,.41,0),o.add(v)}),o}createUddanOpenStageWithTong(t=1){const e=new pt;e.name="uddan_open_stage_complex";const n=new pt;n.position.set(33*t,0,-4);const i=new he(18,22,14),o=new m(i,this.hillDarkGreenMat);o.position.set(0,11,0),n.add(o);const a=new he(15,17,12),r=new m(a,this.hillGreenMat);r.position.set(2*t,8.5,-18),n.add(r);const c=new he(16,18,12),h=new m(c,this.hillGreenMat);h.position.set(2*t,9,15),n.add(h),[-14,-6,6,14].forEach(ct=>{const A=new he(2,5,6),E=new m(A,this.treeCrownMat);E.position.set(-3*t,15,ct),n.add(E)}),e.add(n);const d=new pt;d.position.set(20*t,0,-4);const f=new Kt(20,42);f.rotateX(-Math.PI/2);const l=new m(f,this.pavingPlazaMat);l.position.set(0,.015,0),l.receiveShadow=!0,d.add(l),[-16,12].forEach(ct=>{const A=new pt;A.position.set(0,0,ct);const E=new Q(.35,.45,4.5,8),Y=new m(E,this.palmTrunkMat);Y.position.y=2.25,A.add(Y);const yt=new qt(3.8,8,8);yt.scale(1.25,.85,1.25);const gt=new m(yt,this.treeCrownMat);gt.position.y=5.4,A.add(gt),d.add(A)}),e.add(d);const u=new pt;u.position.set(21*t,0,-4),u.rotation.y=t>0?-Math.PI/2:Math.PI/2;const M=new U(14,.9,8),v=new m(M,this.stageBaseYellowMat);v.position.set(0,.45,0),this.applyShadow(v),u.add(v);const g=new U(14.2,.08,8.2),p=new m(g,this.stageFloorMat);p.position.set(0,.94,0),u.add(p);const w=new U(14.3,.08,.2),_=new m(w,this.stageBorderBlueMat);_.position.set(0,.94,4.1),u.add(_);const y=new m(new U(11,.3,1.4),this.stageBaseYellowMat);y.position.set(0,.3,4.7),u.add(y);const P=new m(new U(9,.3,1.2),this.stageBaseYellowMat);P.position.set(0,.15,5.6),u.add(P);const C=new U(8,.35,.5),L=new m(C,this.brickMat);L.position.set(0,.18,6.4),u.add(L);for(let ct=-3.2;ct<=3.2;ct+=1.6){const A=new qt(.3,6,6);A.scale(1.3,.9,1.3);const E=new m(A,this.bananaLeafMat);E.position.set(ct,.42,6.4),u.add(E)}[-7.4,7.4].forEach(ct=>{const A=new pt;A.position.set(ct,0,2.2);const E=new U(1.6,.8,4.8),Y=new m(E,this.stageBaseYellowMat);Y.position.set(0,.4,0),Y.rotation.x=.18,A.add(Y);const yt=new U(.1,.7,4.8),gt=new m(yt,this.stageBorderBlueMat);gt.position.set(ct>0?.75:-.75,.75,0),gt.rotation.x=.18,A.add(gt),u.add(A)});const k=new pt;k.position.set(0,.9,-3.8);const S=new U(11.5,4.5,.3),x=new m(S,this.stageTerracottaMat);x.position.set(0,2.25,0),this.applyShadow(x),k.add(x);const T=new U(7.5,3.4,.38),G=new m(T,this.stageGoldEmblemMat);G.position.set(0,2,.05),k.add(G);const tt=new Q(2.8,2.8,.4,16,1,!1,0,Math.PI);tt.rotateZ(Math.PI/2);const O=new m(tt,this.stageGoldEmblemMat);O.position.set(0,4,.05),k.add(O),[-5.2,5.2].forEach(ct=>{const A=new U(1.8,4.2,.35),E=new m(A,this.woodMat);E.position.set(ct,2.1,.02),k.add(E)}),u.add(k);const V=new pt;V.position.set(0,.9,0);const W=7.5,X=8.5,nt=new Q(W,W,X,24,1,!0,Math.PI*.12,Math.PI*.76);nt.rotateX(Math.PI/2);const J=new m(nt,this.stageBlueRoofMat);J.position.set(0,0,0),this.applyShadow(J),V.add(J),[-X*.5,X*.5].forEach(ct=>{const A=[];for(let gt=0;gt<=20;gt++){const at=Math.PI*.12+gt/20*(Math.PI*.76),kt=Math.cos(at)*W,Lt=Math.sin(at)*W;A.push(new F(kt,Lt,ct))}const E=new Rn(A),Y=new _n(E,20,.14,8,!1),yt=new m(Y,this.stageTrussMat);V.add(yt)}),[-X*.5+.1,X*.5-.1].forEach(ct=>{[.25,.4,.5,.6,.75].forEach(A=>{const E=Math.PI*.12+A*(Math.PI*.76),Y=Math.cos(E)*W,yt=Math.sin(E)*W,gt=[new F(0,0,ct),new F(Y,yt,ct)],at=new Rn(gt),kt=new _n(at,2,.06,6,!1),Lt=new m(kt,this.stageTrussMat);V.add(Lt)})});const K=new U(12,.75,.25),q=new m(K,this.stageTrussMat);q.position.set(0,5.8,X*.5+.1),V.add(q);const Mt=new Q(.55,.55,.12,16);Mt.rotateX(Math.PI/2);const j=new m(Mt,this.stageGoldEmblemMat);j.position.set(0,6.4,X*.5+.15),V.add(j),u.add(V);const st=this.createFigure({shirtMat:this.panjabiMat,pantsMat:this.panjabiMat,isSitting:!1});st.position.set(-1.2,.94,-.6),u.add(st);const $=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});$.position.set(-.4,.94,-.6),$.rotation.y=-Math.PI*.4,u.add($);const vt=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.stageTrussMat,isSitting:!0});vt.position.set(2.4,.3,4.9),u.add(vt);const mt=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.lungiPlaidMat,isSitting:!0});mt.position.set(3.4,.3,4.9),u.add(mt),e.add(u);const Rt=new pt;Rt.position.set(11.3*t,0,8),Rt.rotation.y=t>0?-Math.PI*.5-.25:Math.PI*.5+.25;const Ut=this.createTeaStall();Rt.add(Ut);const ut=new U(2.4,.45,.08),Ct=new N({color:14427686,roughness:.5}),D=new m(ut,Ct);D.position.set(0,2.55,.85),Rt.add(D);const _t=new pt;_t.position.set(1.4,1.9,.9);for(let ct=0;ct<6;ct++){const A=new Q(.025,.025,.22,6);A.rotateZ(.2+ct%2*.2);const E=new m(A,this.stageGoldEmblemMat);E.position.set(ct%3*.06-.06,-Math.floor(ct/3)*.15,0),_t.add(E)}Rt.add(_t);const lt=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.lungiPlaidMat,isSitting:!1});lt.position.set(.2,0,-.4),lt.rotation.y=Math.PI,Rt.add(lt);const xt=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!0});xt.position.set(-.6,.45,1.8),xt.rotation.y=0,Rt.add(xt);const dt=this.createFigure({shirtMat:this.panjabiMat,pantsMat:this.panjabiMat,isSitting:!0});dt.position.set(.6,.45,1.8),dt.rotation.y=-.3,Rt.add(dt);const Ot=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.stageTrussMat,isSitting:!1,isSmoking:!0});return Ot.position.set(1.65,0,1.5),Ot.rotation.y=-Math.PI*.4,Rt.add(Ot),e.add(Rt),e}createUIUCampus(t=1){const e=new pt;e.name="uiu_permanent_campus";const n=new Kt(88,112);n.rotateX(-Math.PI/2);const i=new m(n,this.paddyFieldMat);i.position.set(60*t,.005,0),i.receiveShadow=!0,e.add(i);const o=new pt;o.position.set(48*t,0,0);const a=new Kt(38,68);a.rotateX(-Math.PI/2);const r=new m(a,this.uiuLawnMat);r.position.set(0,.02,0),r.receiveShadow=!0,o.add(r);const c=new Kt(46,76);c.rotateX(-Math.PI/2);const h=new m(c,this.paddyFieldMat);h.position.set(0,.01,0),o.add(h);const d=new Kt(16,76);d.rotateX(-Math.PI/2);const f=new m(d,this.pavingPlazaMat);f.position.set(27*t,.015,0),o.add(f),[-30,30].forEach(Et=>{const ot=new pt;ot.position.set(0,0,Et),[-3.2,3.2].forEach(Yt=>{const ee=new m(new Q(.08,.08,3.2,8),this.goalPostMat);ee.position.set(Yt,1.6,0),ot.add(ee)});const Gt=new m(new Q(.08,.08,6.56,8),this.goalPostMat);Gt.rotateZ(Math.PI/2),Gt.position.set(0,3.2,0),ot.add(Gt),[-3.2,3.2].forEach(Yt=>{const ee=new m(new Q(.04,.04,2.2,6),this.goalPostMat);ee.position.set(Yt,1.1,Et>0?1:-1),ee.rotation.x=Et>0?.72:-.72,ot.add(ee)}),o.add(ot)});const l=new m(new qt(.28,8,8),new N({color:16777215,roughness:.3}));l.position.set(0,.28,0),o.add(l);const u=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});u.position.set(-2.2,0,1.8),u.rotation.y=-.6,o.add(u);const M=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.panjabiMat,isSitting:!1});M.position.set(2.4,0,-1.6),M.rotation.y=2.4,o.add(M);const v=this.createFigure({shirtMat:this.shirtRedMat,pantsMat:this.stageTrussMat,isSitting:!1});v.position.set(8.5,0,12),v.rotation.y=-1.2,o.add(v);const g=this.createFigure({shirtMat:this.shirtTealMat,pantsMat:this.panjabiMat,isSitting:!1});g.position.set(-9,0,-14),g.rotation.y=1.1,o.add(g),[-14,14].forEach(Et=>{const ot=new pt;ot.position.set(-18*t,0,Et);const Gt=new he(3.2,2.2,4);Gt.rotateY(Math.PI/4);const Yt=new m(Gt,this.uiuTentMat);Yt.position.set(0,3.1,0),ot.add(Yt),[-1.8,1.8].forEach(we=>{[-1.8,1.8].forEach(We=>{const ze=new m(new Q(.04,.04,2.2,6),this.stageTrussMat);ze.position.set(we,1.1,We),ot.add(ze)})});const ee=new m(new U(.6,.45,3.2),this.uiuConcreteMat);ee.position.set(0,.225,0),ot.add(ee);const Te=this.createFigure({shirtMat:this.stageBaseYellowMat,pantsMat:this.stageTrussMat,isSitting:!0});Te.position.set(0,0,0),ot.add(Te),o.add(ot)}),[-24,-8,8,24].forEach(Et=>{const ot=new m(new Q(.025,.025,2.4,6),this.goalPostMat);ot.position.set(-18*t,1.2,Et),o.add(ot);const Gt=new m(new U(.02,.45,.7),Et>0?this.shirtRedMat:this.stageBaseYellowMat);Gt.position.set(-18*t,2.1,Et+.35),o.add(Gt)}),[-16,-8,0,8,16].forEach(Et=>{const ot=this.createCoconutTree();ot.position.set(Et,0,37),o.add(ot)}),[-16,-8,0,8,16].forEach(Et=>{const ot=this.createCoconutTree();ot.position.set(Et,0,-37),o.add(ot)}),[-34,34].forEach(Et=>{const ot=this.createCoconutTree();ot.position.set(-20*t,0,Et),o.add(ot)}),[-28,-14,14,28].forEach(Et=>{const ot=this.createCoconutTree();ot.position.set(20*t,0,Et),o.add(ot)});const p=new pt,w=-24*t,_=new m(new U(.35,.45,31.2),this.concreteMat);_.position.set(w,.225,-19.4),p.add(_);for(let Et=-35;Et<=-4;Et+=3.5){const ot=new m(new Q(.04,.04,1.6,6),this.stageTrussMat);ot.position.set(w,1,Et),p.add(ot)}const y=new m(new U(.08,.08,31.2),this.stageTrussMat);y.position.set(w,1.75,-19.4),p.add(y);const P=new m(new U(.35,.45,31.2),this.concreteMat);P.position.set(w,.225,19.4),p.add(P);for(let Et=4;Et<=35;Et+=3.5){const ot=new m(new Q(.04,.04,1.6,6),this.stageTrussMat);ot.position.set(w,1,Et),p.add(ot)}const C=new m(new U(.08,.08,31.2),this.stageTrussMat);C.position.set(w,1.75,19.4),p.add(C);const L=new pt;L.position.set(w,0,0);const k=new m(new U(1.2,.12,7),this.concreteMat);k.position.set(0,.06,0),L.add(k),[-3.5,3.5].forEach(Et=>{const ot=new m(new U(1,5.4,1),this.brickMat);ot.position.set(0,2.7,Et),L.add(ot);const Gt=new m(new U(1.25,.8,1.25),this.concreteMat);Gt.position.set(0,.4,Et),L.add(Gt);const Yt=new m(new U(1.2,.35,1.2),this.concreteMat);Yt.position.set(0,5.5,Et),L.add(Yt)});const S=new m(new U(.55,1,7.8),this.stageTrussMat);S.position.set(0,4.8,0),L.add(S);const x=new m(new U(.14,.95,6.8),this.uiuGateSignMat);x.position.set(t>0?-.1:.1,4.8,0),L.add(x);const T=new pt;T.position.set(0,5.9,0);const G=new m(new U(.35,1.4,4.4),new N({color:593174,roughness:.3}));T.add(G);const tt=new m(new U(.38,1.48,4.48),this.goldBadgeMat);tt.position.set(0,0,0),T.add(tt);const O=new N({color:16717636,emissive:16717636,emissiveIntensity:1.8,roughness:.2}),V=(Et,ot,Gt,Yt,ee,Te)=>{const we=new m(new U(Et,ot,Gt),O);we.position.set(Yt,ee,Te),T.add(we)},W=t>0?-.22:.22;V(.12,.85,.14,W,0,-1.65),V(.12,.85,.14,W,0,-.95),V(.12,.14,.84,W,-.38,-1.3),V(.12,.85,.16,W,0,0),V(.12,.14,.55,W,.38,0),V(.12,.14,.55,W,-.38,0),V(.12,.85,.14,W,0,.95),V(.12,.85,.14,W,0,1.65),V(.12,.14,.84,W,-.38,1.3);const X=new Pn(16717636,1.4,12);X.position.set(W*2,0,0),T.add(X),L.add(T);const nt=new m(new U(1.8,2.5,1.8),this.concreteMat);nt.position.set(1.5,1.25,-4.5),L.add(nt);const J=new m(new U(.1,.9,1.2),this.uiuGlassMat);J.position.set(W,1.4,-4.5),L.add(J);const K=new m(new Q(.045,.045,4,6),this.policeBarricadeMat);K.rotateX(Math.PI/2),K.position.set(.6,.95,-1.2),L.add(K);const q=this.createFigure({shirtMat:this.policeShirtMat,pantsMat:this.policePantsMat,isSitting:!1});q.position.set(.8,0,-3.2),q.rotation.y=t>0?-Math.PI/2:Math.PI/2,L.add(q),p.add(L),o.add(p),e.add(o);const Mt=new pt;Mt.position.set(78*t,0,0),Mt.rotation.y=t>0?-Math.PI/2:Math.PI/2;const j=new pt;j.position.set(-19,19,0);const st=new U(18,38,16),$=[this.uiuFacadeMat,this.uiuFacadeMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuLogoMat,this.uiuFacadeMat],vt=new m(st,$);this.applyShadow(vt),j.add(vt);const mt=new m(new U(2.4,38,16.2),this.uiuBrickFlankMat);mt.position.set(-9.2,0,0),j.add(mt);const Rt=new m(new U(7,3.8,8),this.uiuConcreteMat);Rt.position.set(-2,20.9,0),j.add(Rt);const Ut=new m(new U(16.5,.8,14.5),this.uiuRoofGardenMat);Ut.position.set(0,19.4,0),j.add(Ut);const ut=new Q(.06,.08,7.5,6),Ct=new m(ut,this.goalPostMat);Ct.position.set(-2,25.5,1.5),j.add(Ct);const D=new m(new qt(.32,8,8),new N({color:16711680,emissive:16711680,emissiveIntensity:2.2}));D.position.set(-2,29.5,1.5),j.add(D);const _t=new m(new U(18.1,1.1,16.1),this.stageTrussMat);_t.position.set(0,19.55,0),j.add(_t);const lt=new pt;lt.position.set(0,11.5,8.1);const xt=new m(new U(11.2,5,.25),new N({color:593174,roughness:.3}));lt.add(xt);const dt=new N({color:16717636,emissive:16717636,emissiveIntensity:1.8,roughness:.2}),Ot=(Et,ot,Gt,Yt,ee,Te)=>{const we=new m(new U(Et,ot,Gt),dt);we.position.set(Yt,ee,Te),lt.add(we)};Ot(.38,2.6,.25,-4,0,.2),Ot(.38,2.6,.25,-2.4,0,.2),Ot(1.98,.38,.25,-3.2,-1.15,.2),Ot(.44,2.6,.25,0,0,.2),Ot(1.4,.35,.25,0,1.15,.2),Ot(1.4,.35,.25,0,-1.15,.2),Ot(.38,2.6,.25,2.4,0,.2),Ot(.38,2.6,.25,4,0,.2),Ot(1.98,.38,.25,3.2,-1.15,.2);const ct=new Pn(16717636,1.6,18);ct.position.set(0,0,2),lt.add(ct),j.add(lt),Mt.add(j);const A=new pt;A.position.set(0,16,0);const E=new U(16,32,13),Y=[this.uiuConcreteMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuAtriumMat,this.uiuConcreteMat],yt=new m(E,Y);A.add(yt),[7,14,21,28].forEach(Et=>{const ot=new m(new U(16.2,1.2,13.4),this.uiuConcreteMat);ot.position.set(0,Et-16,0),A.add(ot)});const gt=new m(new U(15.5,.6,12.5),this.uiuRoofGardenMat);gt.position.set(0,16.3,0),A.add(gt);const at=6.9,kt=13,Lt=Math.sqrt(at*at+kt*kt),Pt=Math.atan2(at,kt),Xt=6.6;[-3.95,3.95].forEach(Et=>{[-4.5,8.5].forEach(ot=>{const Gt=new m(new Q(.24,.24,Lt,8),this.stageTrussMat);Gt.position.set(Et,ot,Xt),Gt.rotation.z=-Pt,A.add(Gt);const Yt=new m(new Q(.24,.24,Lt,8),this.stageTrussMat);Yt.position.set(Et,ot,Xt),Yt.rotation.z=Pt,A.add(Yt);const ee=new m(new U(.85,.85,.45),this.stageTrussMat);ee.position.set(Et,ot,Xt+.05),A.add(ee)})}),[-11,2,15].forEach(Et=>{const ot=new m(new U(16.3,.65,.5),this.stageTrussMat);ot.position.set(0,Et,Xt),A.add(ot)}),[-7.4,0,7.4].forEach(Et=>{const ot=new m(new Q(.24,.24,26,8),this.stageTrussMat);ot.position.set(Et,2,Xt),A.add(ot)}),Mt.add(A);const Nt=new pt;Nt.position.set(19,17,0);const Tt=new U(18,34,16),Qt=[this.uiuFacadeMat,this.uiuFacadeMat,this.uiuConcreteMat,this.uiuConcreteMat,this.uiuFacadeMat,this.uiuFacadeMat],Jt=new m(Tt,Qt);this.applyShadow(Jt),Nt.add(Jt);const ht=new m(new U(2.4,34,16.2),this.uiuBrickFlankMat);ht.position.set(9.2,0,0),Nt.add(ht);for(let Et=-12;Et<=12;Et+=3.5){const ot=new m(new U(18.2,.35,1.2),this.uiuConcreteMat);ot.position.set(0,Et,8.4),Nt.add(ot)}const bt=new m(new U(16.5,.8,14.5),this.uiuRoofGardenMat);bt.position.set(0,17.4,0),Nt.add(bt);const H=new m(new U(18.1,1.1,16.1),this.stageTrussMat);H.position.set(0,17.55,0),Nt.add(H),Mt.add(Nt);const Ft=new pt;for(let Et=-26;Et<=26;Et+=5.2){const ot=new m(new Q(.45,.5,5,8),this.uiuConcreteMat);ot.position.set(Et,2.5,8.2),Ft.add(ot)}const Wt=new m(new U(32,5,2),this.uiuGlassMat);Wt.position.set(0,2.5,7.5),Ft.add(Wt);const Zt=new m(new U(36,.6,6),this.concreteMat);Zt.position.set(0,.3,11),Ft.add(Zt),Mt.add(Ft),e.add(Mt);const It=new pt;It.position.set(13.5*t,0,0);const wt=new Kt(8.5,34);wt.rotateX(-Math.PI/2);const b=new m(wt,this.pavingPlazaMat);b.position.set(0,.015,21.5),b.receiveShadow=!0,It.add(b);const z=new U(.35,.22,34),et=new m(z,this.bwCurbMat);et.position.set(t>0?4.25:-4.25,.11,21.5),It.add(et),[5.5,21.5,37.5].forEach(Et=>{const ot=new m(new Kt(8,.24),this.policeSilverMat);ot.rotateX(-Math.PI/2),ot.position.set(0,.02,Et),It.add(ot)});const Vt=new m(new U(.08,.85,2.2),this.uiuBusStandSignMat);Vt.position.set(t>0?3.8:-3.8,2.2,5.5),It.add(Vt);const ft=new m(new Q(.04,.04,2.4,6),this.stageTrussMat);ft.position.set(t>0?3.8:-3.8,1.2,5.5),It.add(ft);const Dt=this.createUIUShuttleBus();Dt.position.set(0,0,13.5),Dt.rotation.y=Math.PI,It.add(Dt);const St=this.createUIUShuttleBus();return St.position.set(0,0,29.5),St.rotation.y=Math.PI,It.add(St),e.add(It),e}createUIUShuttleBus(){const t=new pt;t.name="uiu_shuttle_bus";const e=10.6,n=2.6,i=new U(n,1.35,e),o=new m(i,this.uiuBusOrangeMat);o.position.y=1.15,this.applyShadow(o),t.add(o),[-n*.5-.01,n*.5+.01].forEach(p=>{const w=new Kt(e*.94,1.25),_=new m(w,this.uiuBusSideMat);_.position.set(p,1.15,0),_.rotation.y=p>0?Math.PI/2:-Math.PI/2,t.add(_)});const a=new U(n*.98,1.05,e*.98),r=new m(a,this.uiuBusGlassMat);r.position.y=2.25,t.add(r);for(let p=-4.5;p<=4.5;p+=1.5)[-n*.5-.005,n*.5+.005].forEach(w=>{const _=new m(new U(.04,1.05,.08),this.uiuBusOrangeMat);_.position.set(w,2.25,p),t.add(_)});const c=new m(new U(n,.22,e),this.uiuBusOrangeMat);c.position.y=2.86,t.add(c);const h=new m(new U(1.6,.38,3.2),this.uiuBusOrangeMat);h.position.set(0,3.08,-.6),t.add(h);const d=new m(new U(1.3,.06,2.6),this.uiuBusGlassMat);d.position.set(0,3.28,-.6),t.add(d);const f=new m(new U(1.8,.3,.1),this.policeCapMat);f.position.set(0,2.65,e*.5+.02),t.add(f),[-.45,.45].forEach(p=>{const w=new m(new Q(.012,.012,.48,4),this.policeCapMat);w.position.set(p,1.95,e*.5+.03),w.rotation.z=.35,t.add(w)});const l=new m(new U(n+.05,.44,.35),this.uiuBusBumperMat);l.position.set(0,.52,e*.5+.12),t.add(l);const u=new m(new U(n+.05,.44,.35),this.uiuBusBumperMat);u.position.set(0,.52,-e*.5-.12),t.add(u),[-.95,.95].forEach(p=>{const w=new m(new U(.38,.18,.06),new le({color:16777215}));w.position.set(p,.88,e*.5+.04),t.add(w);const _=new m(new U(.12,.18,.06),new le({color:16096779}));_.position.set(p>0?p+.26:p-.26,.88,e*.5+.04),t.add(_)});const M=new m(new U(1.2,.32,.06),this.uiuBusBumperMat);M.position.set(0,.85,e*.5+.04),t.add(M);const v=new m(new qt(.08,6,6),this.goldBadgeMat);return v.position.set(0,.85,e*.5+.08),t.add(v),[-1,1].forEach(p=>{const w=new m(new U(.2,.52,.06),this.shirtRedMat);w.position.set(p,1.15,-e*.5-.04),t.add(w)}),[-n*.5-.22,n*.5+.22].forEach(p=>{const w=new m(new Q(.02,.02,.35,4),this.policeCapMat);w.rotateZ(p>0?-Math.PI/4:Math.PI/4),w.position.set(p>0?p-.1:p+.1,2.3,e*.5-.2),t.add(w);const _=new m(new U(.06,.42,.2),this.policeCapMat);_.position.set(p,2.2,e*.5-.05),t.add(_)}),[e*.5-2,-e*.5+2.2].forEach(p=>{[-n*.5-.02,n*.5+.02].forEach(w=>{const _=new pt;_.position.set(w,.52,p);const y=new Q(.5,.5,.28,12);y.rotateZ(Math.PI/2);const P=new m(y,this.tireMat);_.add(P);const C=new Q(.32,.32,.3,8);C.rotateZ(Math.PI/2);const L=new m(C,this.rimMat);_.add(L);const k=new Q(.1,.1,.32,6);k.rotateZ(Math.PI/2);const S=new m(k,this.policeCapMat);_.add(S),t.add(_)})}),this.applyShadow(t),t}createHighwaySignGantry(t=13){const e=new pt;e.name="highway_sign_gantry";const n=t*.5+1.2,i=8.5;[-n,n].forEach(h=>{const d=new U(.9,1.8,.9),f=new m(d,this.gantryHazardMat);f.position.set(h,.9,0),e.add(f),[-.22,.22].forEach(u=>{const M=new m(new Q(.12,.12,i-1.8,8),this.stageTrussMat);M.position.set(h,1.8+(i-1.8)*.5,u),e.add(M)});for(let u=2.4;u<i-.5;u+=1.4){const M=new m(new Q(.04,.04,1.45,6),this.stageTrussMat);M.position.set(h,u+.6,0),M.rotation.x=Math.PI/4,e.add(M)}const l=new m(new Q(.06,.06,2.8,6),this.stageTrussMat);l.position.set(h>0?h-1:h+1,i-.9,0),l.rotation.z=h>0?-Math.PI/4:Math.PI/4,e.add(l)});const o=n*2+1.2;[-.35,.35].forEach(h=>{[-.22,.22].forEach(d=>{const f=new m(new Q(.09,.09,o,8),this.stageTrussMat);f.rotateZ(Math.PI/2),f.position.set(0,i+h,d),e.add(f)})});for(let h=-n+1.5;h<n-1;h+=1.8){const d=new m(new Q(.045,.045,.7,6),this.stageTrussMat);d.position.set(h,i,.22),e.add(d);const f=new m(new Q(.04,.04,1.9,6),this.stageTrussMat);f.position.set(h+.9,i,.22),f.rotation.z=Math.PI/4,e.add(f)}const a=new U(11.8,2.6,.16),r=[this.stageTrussMat,this.stageTrussMat,this.stageTrussMat,this.stageTrussMat,this.highwayGantrySignMat,this.stageTrussMat],c=new m(a,r);return c.position.set(0,7.6,.35),e.add(c),e}createPuthiaTemple(t=-1){const e=new pt;e.name="puthia_shiva_temple";const n=new pt;n.position.set(24*t,0,0),n.rotation.y=t>0?-Math.PI/2:Math.PI/2;const i=new U(15,1.8,16),o=new m(i,this.templePlinthMat);o.position.set(0,.9,0),o.receiveShadow=!0,n.add(o);const a=new U(13.5,.45,6.5),r=new m(a,this.templePlinthMat);r.position.set(0,1.8+.225,9.5),r.receiveShadow=!0,n.add(r),[-6.6,6.6].forEach(x=>{const T=new m(new U(.3,.85,6.5),this.templePlinthMat);T.position.set(x,2.45,9.5),n.add(T)});for(let x=0;x<5;x++){const T=new m(new U(9+x*.8,.28,.9),this.templePlinthMat);T.position.set(0,1.4-x*.28,13+x*.8),n.add(T)}const c=new Kt(28,16);c.rotateX(-Math.PI/2);const h=new m(c,this.riverWaterMat);h.position.set(0,.03,24),n.add(h),[-6,6].forEach(x=>{const T=this.createWaterHyacinthCluster();T.position.set(x,.04,20),n.add(T)});const d=new U(12.5,6.5,12.5),f=new m(d,this.templeWallMat);f.position.set(0,1.8+3.25,0),this.applyShadow(f),n.add(f);const l=new m(new U(3.6,4.8,.4),this.templePlinthMat);l.position.set(0,4.4,6.3),n.add(l);const u=new m(new U(2.2,3.8,.5),this.stageTrussMat);u.position.set(0,4,6.35),n.add(u);const M=new U(8.5,4.2,8.5),v=new m(M,this.templeWallMat);v.position.set(0,1.8+6.5+2.1,0),this.applyShadow(v),n.add(v);const g=new he(3.8,10.5,12),p=new m(g,this.templeShikharaMat);p.position.set(0,14.6+5.25,0),this.applyShadow(p),n.add(p);const w=new m(new Q(.12,.45,2.6,8),this.templeBrassMat);w.position.set(0,26.2,0),n.add(w);const _=new m(new U(.6,.8,.08),this.templeBrassMat);_.position.set(0,27.8,0),n.add(_),[-4.8,4.8].forEach(x=>{[-4.8,4.8].forEach(T=>{const G=new he(1.6,5.2,8),tt=new m(G,this.templeShikharaMat);tt.position.set(x,8.3+2.6,T),this.applyShadow(tt),n.add(tt);const O=new m(new Q(.06,.18,1.4,6),this.templeBrassMat);O.position.set(x,14,T),n.add(O)})});const y=new pt;y.position.set(-13.5,0,4);const P=new m(new Q(3.2,3.4,1.2,8),this.templePlinthMat);P.position.set(0,.6,0),y.add(P);const C=new m(new Q(2.4,2.6,4.5,8),this.templeWallMat);C.position.set(0,3.45,0),y.add(C);const L=new m(new qt(2.5,12,10,0,Math.PI*2,0,Math.PI*.5),this.templeShikharaMat);L.position.set(0,5.7,0),y.add(L);const k=new m(new Q(.08,.22,1.5,6),this.templeBrassMat);k.position.set(0,8.4,0),y.add(k),n.add(y);const S=(x,T)=>{const G=new Rn(x),tt=new _n(G,10,.08,6,!1),O=new m(tt,T);n.add(O)};return S([new F(-1.8,2.4,6.55),new F(-1.2,5.8,6.55),new F(0,6.4,6.55),new F(1.2,5.8,6.55),new F(1.8,2.4,6.55)],this.marigoldOrangeMat),S([new F(-1.6,2.2,6.58),new F(-1,5.5,6.58),new F(0,6.1,6.58),new F(1,5.5,6.58),new F(1.6,2.2,6.58)],this.marigoldYellowMat),S([new F(-6.6,2.7,6.5),new F(-6.6,2.2,9.5),new F(-6.6,2.7,12.5)],this.marigoldOrangeMat),S([new F(6.6,2.7,6.5),new F(6.6,2.2,9.5),new F(6.6,2.7,12.5)],this.marigoldYellowMat),S([new F(-6.6,2.7,12.5),new F(-3.2,2.1,12.5),new F(0,2.6,12.5),new F(3.2,2.1,12.5),new F(6.6,2.7,12.5)],this.marigoldOrangeMat),[-1.6,0,1.6].forEach(x=>{const T=new m(new Q(.08,.08,.65,6),this.marigoldYellowMat);T.position.set(x,5.8,6.6),n.add(T)}),[-7.8,7.8].forEach(x=>{const T=this.createBananaTree();T.position.set(x,0,6),n.add(T);const G=this.createBananaTree();G.position.set(x,0,11),n.add(G)}),[-8,0,8].forEach(x=>{const T=this.createCoconutTree();T.position.set(x,0,-10),n.add(T)}),e.add(n),e}createTrafficPoliceOfficer(){const t=new pt;t.name="bangladeshi_police_officer",t.scale.set(1.15,1.15,1.15),[-.1,.1].forEach(S=>{const x=new m(new U(.12,.16,.24),this.policeCapMat);x.position.set(S,.08,.02),t.add(x)}),[-.09,.09].forEach(S=>{const x=new m(new Q(.065,.055,.8,6),this.policePantsMat);x.position.set(S,.52,0),t.add(x)});const e=new m(new U(.38,.08,.24),this.policeCapMat);e.position.set(0,.94,0),t.add(e);const n=new m(new U(.08,.07,.02),this.goldBadgeMat);n.position.set(0,.94,.125),t.add(n);const i=new m(new U(.07,.18,.09),this.policeCapMat);i.position.set(.2,.88,0),t.add(i);const o=new m(new U(.06,.1,.08),this.policeCapMat);o.position.set(-.2,.92,0),t.add(o);const a=new m(new U(.38,.52,.23),this.policeShirtMat);a.position.set(0,1.2,0),t.add(a);const r=new m(new U(.39,.44,.24),this.policeVestMat);r.position.set(0,1.18,0),t.add(r),[1.1,1.28].forEach(S=>{const x=new m(new U(.4,.045,.245),this.policeSilverMat);x.position.set(0,S,0),t.add(x)}),[-.18,.18].forEach(S=>{const x=new m(new U(.08,.02,.14),this.policePantsMat);x.position.set(S,1.45,0),t.add(x);const T=new m(new qt(.015,4,4),this.goldBadgeMat);T.position.set(S,1.465,0),t.add(T)});const c=new m(new qt(.12,8,8),this.skinMat);c.position.set(0,1.54,0),t.add(c);const h=new m(new U(.16,.04,.06),this.policeCapMat);h.position.set(0,1.56,.1),t.add(h);const d=new m(new Q(.135,.13,.07,8),this.policeCapMat);d.position.set(0,1.63,0),t.add(d);const f=new m(new U(.16,.02,.09),this.policeCapMat);f.position.set(0,1.6,.13),f.rotation.x=.25,t.add(f);const l=new m(new U(.04,.05,.015),this.goldBadgeMat);l.position.set(0,1.65,.125),t.add(l);const u=new pt;u.position.set(0,1.15,.22),u.rotation.set(-.25,.25,-.45);const M=new m(new U(.06,.1,.44),this.gunMetalMat);u.add(M);const v=new m(new U(.05,.09,.24),this.gunWoodMat);v.position.set(0,-.01,.32),u.add(v);const g=new m(new Q(.016,.016,.4,6),this.gunMetalMat);g.rotateX(Math.PI/2),g.position.set(0,.015,-.4),u.add(g);const p=new m(new U(.012,.04,.02),this.gunMetalMat);p.position.set(0,.04,-.52),u.add(p);const w=new m(new U(.055,.07,.22),this.gunWoodMat);w.position.set(0,-.01,-.2),u.add(w);const _=new m(new U(.04,.16,.08),this.gunMetalMat);_.position.set(0,-.11,-.06),_.rotation.x=-.25,u.add(_);const y=new m(new U(.02,.02,.6),this.policePantsMat);y.position.set(0,-.06,.05),u.add(y),t.add(u);const P=new m(new Q(.045,.04,.42,6),this.policeShirtMat);P.position.set(.18,1.18,.1),P.rotation.set(-.85,.2,-.4),t.add(P);const C=new m(new qt(.04,6,6),this.skinMat);C.position.set(.08,1.08,.24),t.add(C);const L=new m(new Q(.045,.04,.44,6),this.policeShirtMat);L.position.set(-.16,1.14,.12),L.rotation.set(-.75,-.35,.7),t.add(L);const k=new m(new qt(.04,6,6),this.skinMat);return k.position.set(-.06,1.2,.28),t.add(k),this.applyShadow(t),t}createPoliceBox(){const t=new pt;t.name="police_box_booth";const e=new m(new U(2.4,.22,2.4),this.concreteMat);e.position.y=.11,t.add(e);const n=new m(new U(2.5,.08,2.5),this.bwCurbMat);n.position.y=.04,t.add(n);const i=new m(new U(2,1.15,2),this.policePantsMat);i.position.y=.795,t.add(i);const o=new m(new U(2.04,.12,2.04),this.policeSilverMat);o.position.y=1.32,t.add(o),[-.95,.95].forEach(_=>{[-.95,.95].forEach(y=>{const P=new m(new Q(.04,.04,1.25,6),this.stageTrussMat);P.position.set(_,1.95,y),t.add(P)})});const a=new m(new U(1.82,.92,.04),this.uiuGlassMat);a.position.set(0,1.85,.95),t.add(a),[-.95,.95].forEach(_=>{const y=new m(new U(.04,.92,1.82),this.uiuGlassMat);y.position.set(_,1.85,0),t.add(y)});const r=new m(new U(1.82,.92,.04),this.uiuGlassMat);r.position.set(0,1.85,-.95),t.add(r);const c=new m(new U(1.6,.08,.6),this.gunWoodMat);c.position.set(0,1.35,.55),t.add(c);const h=new m(new U(.28,.18,.22),this.gunMetalMat);h.position.set(-.4,1.48,.55),t.add(h);const d=new m(new U(1.9,.52,.06),this.policeBoxSignMat);d.position.set(0,2.56,1.01),t.add(d);const f=new m(new U(2.08,.52,2.08),this.policePantsMat);f.position.y=2.56,t.add(f);const l=new m(new U(2.45,.12,2.45),this.gunMetalMat);l.position.y=2.88,t.add(l);const u=new he(1.75,.65,4);u.rotateY(Math.PI/4);const M=new m(u,this.policePantsMat);M.position.y=3.24,t.add(M);const v=new m(new Q(.015,.02,1.6,6),this.gunMetalMat);v.position.set(.7,3.8,.7),t.add(v);const g=new m(new Q(.12,.14,.1,8),this.stageTrussMat);g.position.y=3.6,t.add(g);const p=new m(new Q(.09,.09,.22,8),this.strobeRedMat);p.position.set(-.12,3.74,0),t.add(p);const w=new m(new Q(.09,.09,.22,8),this.strobeBlueMat);return w.position.set(.12,3.74,0),t.add(w),this.policeStrobes.push({red:p,blue:w,light:null,seed:Math.random()*10}),this.applyShadow(t),t}createPoliceCheckpost(t=1,e=13){const n=new pt;n.name="bangladesh_police_checkpost";const i=new Kt(6.4,15);i.rotateX(-Math.PI/2);const o=new m(i,this.concreteMat);o.position.set((e*.5+3.8)*t,.015,-.5),o.receiveShadow=!0,n.add(o);const a=new U(.35,.2,15),r=new m(a,this.bwCurbMat);r.position.set((e*.5+.6)*t,.1,-.5),n.add(r);const c=this.createPoliceBox();c.position.set((e*.5+4.4)*t,0,1.4),c.rotation.y=t>0?0:Math.PI,n.add(c);const h=this.createTrafficPoliceOfficer();h.position.set((e*.5+1.8)*t,0,-.6),h.rotation.y=t>0?Math.PI:0,n.add(h);const d=(e*.5+3)*t,f=new pt;f.position.set(d,0,-2.4);const l=new m(new Q(.32,.38,.55,8),this.concreteMat);l.position.y=.275,f.add(l);const u=new m(new Q(.07,.1,4.8,8),this.stageTrussMat);u.position.y=2.6,f.add(u);const M=new Q(.04,.04,1.8,6);M.rotateZ(t>0?-Math.PI/3:Math.PI/3);const v=new m(M,this.stageTrussMat);v.position.set(t>0?-.75:.75,5,0),f.add(v);const g=new m(new U(.38,.14,.64),this.stageTrussMat);g.position.set(t>0?-1.45:1.45,5.15,0),f.add(g);const p=new m(new Kt(.34,.56),new le({color:16776171}));p.rotateX(Math.PI/2),p.position.set(t>0?-1.45:1.45,5.07,0),f.add(p);const w=new Pn(16775149,1.8,14);w.position.set(t>0?-1.45:1.45,4.8,0),f.add(w);const _=new m(new U(1.05,.06,.06),this.stageTrussMat);_.position.set(0,4.65,0),f.add(_);const y=new m(new Q(.09,.09,.2,8),this.strobeRedMat);y.position.set(-.38,4.77,0),f.add(y);const P=new m(new Q(.09,.09,.2,8),this.strobeBlueMat);P.position.set(.38,4.77,0),f.add(P);const C=new Pn(3900150,1.4,12);C.position.set(0,4.6,0),f.add(C),this.policeStrobes.push({red:y,blue:P,light:C,seed:Math.random()*10});const L=new m(new U(2.35,1.4,.08),this.policeSignMat);L.position.set(0,2.45,0),L.rotation.y=t>0?0:Math.PI,f.add(L),[-.45,.45].forEach(G=>{const tt=new m(new U(.24,.06,.18),this.stageTrussMat);tt.position.set(0,2.45+G,0),f.add(tt)}),n.add(f);const k=(e*.5+1.2)*t,S=new pt;S.position.set(k,0,-4.6),S.rotation.y=t>0?-.15:.15,[-1,1].forEach(G=>{const tt=new m(new Q(.03,.03,1.05,6),this.stageTrussMat);tt.position.set(0,.52,G),S.add(tt);const O=new m(new U(.4,.04,.08),this.stageTrussMat);O.position.set(0,.02,G),S.add(O)});const x=new m(new U(.06,.38,2.2),this.policeBarricadeMat);x.position.set(0,.72,0),S.add(x);const T=new m(new U(.05,.22,2.2),this.policeBarricadeMat);return T.position.set(0,.34,0),S.add(T),n.add(S),[-5.8,-4.2,-2.6,-1].forEach(G=>{const tt=new pt;tt.position.set((e*.5+.5)*t,0,G);const O=new m(new U(.36,.03,.36),this.marigoldOrangeMat);O.position.y=.015,tt.add(O);const V=new m(new he(.14,.62,8),this.marigoldOrangeMat);V.position.y=.32,tt.add(V);const W=new m(new Q(.085,.105,.15,8),this.policeSilverMat);W.position.y=.32,tt.add(W),n.add(tt)}),n}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}else if(e.type==="smoker"){if(e.head){const n=Math.sin(t*1.8+e.seed)*.04;e.head.rotation.x=-.12+Math.max(0,n)}}else e.type==="dingi"&&(e.mesh.position.y=e.startY+Math.sin(t*2.2+e.seed)*.035,e.mesh.rotation.z=Math.sin(t*1.8+e.seed)*.04,e.mesh.rotation.x=Math.cos(t*1.4+e.seed)*.025)}),this.smokeEmitters.forEach(e=>{const n=e.userData&&e.userData.type==="cigarette",i=e.userData&&e.userData.maxH||(n?.5:1.4),o=e.userData&&e.userData.spd||(n?.007:.015),a=e.userData&&e.userData.drift||(n?.004:.005);if(e.children.forEach((r,c)=>{r.position.y+=o,r.position.x+=Math.sin(t*3+c)*a,r.position.z+=Math.cos(t*2.6+c)*(a*.6),r.position.y>i&&(r.position.y=0,r.position.x=0,r.position.z=0)}),e.userData&&e.userData.light){const r=e.userData.seed||0;e.userData.light.intensity=.85+Math.sin(t*7.5+r)*.35}}),this.policeStrobes.forEach(e=>{const n=Math.sin(t*12+e.seed);e.red&&e.blue&&(e.red.material.emissiveIntensity=n>0?2.5:.2,e.blue.material.emissiveIntensity=n<=0?2.5:.2),e.light&&(e.light.color.setHex(n>0?15680580:3900150),e.light.intensity=.8+Math.abs(n)*.8)})}}class Fp{constructor(t){this.scene=t,this.segments=[],this.segmentLength=$t.ROAD_SEGMENT_LENGTH,this.segmentCount=$t.ROAD_SEGMENT_COUNT,this.roadWidth=$t.ROAD_WIDTH,this.props=new Np,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let d=0;d<i.length;d+=4){const f=(Math.random()-.5)*12;i[d]=Math.min(255,Math.max(0,i[d]+f)),i[d+1]=Math.min(255,Math.max(0,i[d+1]+f)),i[d+2]=Math.min(255,Math.max(0,i[d+2]+f))}e.putImageData(n,0,0);const o=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",o.forEach(d=>{e.fillRect(d-50,0,36,t.height),e.fillRect(d+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const a=new te(t);a.wrapS=pe,a.wrapT=pe,a.repeat.set(1,1),a.anisotropy=8,this.roadMaterial=new N({map:a,roughness:.82,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});const r=document.createElement("canvas");r.width=512,r.height=512;const c=r.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let d=0;d<512;d+=24)c.beginPath(),c.moveTo(0,d),c.lineTo(512,d),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const h=new te(r);h.wrapS=pe,h.wrapT=pe,h.repeat.set(4,8),this.paddyFieldMaterial=new N({map:h,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new N({color:7032635,roughness:.95}),this.culvertRailingMaterial=new N({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new pt;n.position.z=t;const i=e%4===3,o=new Kt(this.roadWidth,this.segmentLength);o.rotateX(-Math.PI/2);const a=new m(o,this.roadMaterial);if(a.position.y=i?.003:0,a.receiveShadow=!0,n.add(a),i){[-1,1].forEach(d=>{[-1,1].forEach(f=>{const l=new Kt(3.5,6);l.rotateX(-Math.PI/2);const u=new m(l,this.dirtVergeMaterial);u.position.set((this.roadWidth*.5+3.5*.5)*d,-.01,f*27),n.add(u);const M=new Kt(60,6);M.rotateX(-Math.PI/2);const v=new m(M,this.paddyFieldMaterial);v.position.set((this.roadWidth*.5+3.5+30)*d,-.05,f*27),n.add(v)})});const h=this.props.createBangladeshiRiverBridge(this.roadWidth,this.segmentLength);n.add(h)}else{[-1,1].forEach(h=>{const d=new Kt(3.5,this.segmentLength);d.rotateX(-Math.PI/2);const f=new m(d,this.dirtVergeMaterial);f.position.set((this.roadWidth*.5+3.5*.5)*h,-.01,0),f.receiveShadow=!0,n.add(f)});const c=160;[-1,1].forEach(h=>{const d=new Kt(c,this.segmentLength);d.rotateX(-Math.PI/2);const f=new m(d,this.paddyFieldMaterial),l=(this.roadWidth*.5+3.5+c*.5)*h;f.position.set(l,-.05,0),f.receiveShadow=!0,n.add(f)})}return this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=e%4===3,o=!i&&e%5===1,a=!i&&(e%5===0||e%5===1||e%5===2),r=n.createElectricPole();r.position.set(this.roadWidth*.5+2.4,0,0),t.add(r);const c=[new F(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new F(this.roadWidth*.5+2.4,7.1,0),new F(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],h=new Rn(c),d=new _n(h,8,.02,4,!1),f=new le({color:2040865}),l=new m(d,f);if(t.add(l),!i){const u=a?1:e%2===0?-1:1,M=e%3===0?"white":e%3===1?"brown":"black",v=n.createCow(M),g=(this.roadWidth*.5+2.8+Math.random()*1.5)*u,p=6+Math.random()*14;if(v.position.set(g,0,p),v.rotation.y=u>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(v),e%2===1){const w=n.createCow("brown");w.scale.set(.75,.75,.75),w.position.set(g+(u>0?3:-3),0,p+3.5),w.rotation.y=v.rotation.y+.5,t.add(w)}}if(!i&&!a&&e%16===8){const M=n.createPuthiaTemple(-1);M.position.set(0,0,-6),t.add(M)}if(e%3===1){const M=n.createTeaStall();M.position.set((this.roadWidth*.5+5.8)*1,0,12),M.rotation.y=-Math.PI/2,t.add(M);const v=n.createCoconutTree();v.position.set((this.roadWidth*.5+9)*1,0,16),t.add(v)}if(e%3===2&&!a){const M=n.createPond(14,22);M.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(M);for(let v=0;v<3;v++){const g=n.createBananaTree();g.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+v*6),t.add(g)}}if(!i&&!a&&e%4!==2){const u=e%2===0?1:-1,M=n.createCoconutTree();M.position.set((this.roadWidth*.5+7.5+Math.random()*5)*u,0,-22),t.add(M);const v=n.createBambooGrove();v.position.set((this.roadWidth*.5+9+Math.random()*6)*-u,0,18),t.add(v);const g=n.createBananaTree();g.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*u,0,4),t.add(g)}else i&&[-1,1].forEach(u=>{const M=n.createCoconutTree();M.position.set(this.roadWidth*.5+9,0,u*26),t.add(M);const v=n.createBambooGrove();v.position.set(-this.roadWidth*.5-10,0,u*26),t.add(v)});if(!i&&e%4!==2){const u=a||e%2===0?1:-1,M=n.createJatriChawni(u),v=(this.roadWidth*.5+3.4)*u,g=e===0?-14:-18;M.position.set(v,0,g),M.rotation.y=u>0?Math.PI*.5+.32:-Math.PI*.5-.32,t.add(M)}if(!i&&e%3===0&&!a&&e%4!==2){const M=n.createUddanOpenStageWithTong(1);M.position.set(0,0,0),t.add(M)}if(e%4===1){const u=a?1:-1,M=n.createHighwayCafe(u),v=(this.roadWidth*.5+5.6)*u,g=12;M.position.set(v,0,g),M.rotation.y=u>0?Math.PI*.5+.28:-Math.PI*.5-.28,t.add(M);const p=u,w=n.createSmokingGuysGroup(p),_=(this.roadWidth*.5+2.5)*p,y=g-6;w.position.set(_,0,y),w.rotation.y=p>0?-.4:.4,t.add(w)}else if(e%4===0&&e%3!==0&&!i){const M=n.createHighwayBar(1),v=(this.roadWidth*.5+5.6)*1,g=12;M.position.set(v,0,g),M.rotation.y=Math.PI*.5+.28,t.add(M);const p=1,w=n.createSmokingGuysGroup(p),_=(this.roadWidth*.5+2.5)*p,y=g-6;w.position.set(_,0,y),w.rotation.y=-.4,t.add(w)}if(o){const M=n.createUIUCampus(-1);M.position.set(0,0,0),t.add(M)}if(!i&&e%4===2){const u=n.createHighwaySignGantry(this.roadWidth);u.position.set(0,0,-20),t.add(u)}if(!i&&e%4===2){const M=n.createPoliceCheckpost(1,this.roadWidth);M.position.set(0,0,-6),t.add(M)}}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const o=this.segments[i];if(o.group.position.z>n){let a=0;for(let r=0;r<this.segments.length;r++)this.segments[r].group.position.z<a&&(a=this.segments[r].group.position.z);o.group.position.z=a-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class Op{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new Xo(11722715,.0038),this.scene.background=new ce(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(h,d,f)=>{e.beginPath(),e.arc(h,d,f,0,Math.PI*2),e.arc(h+f*.7,d-f*.2,f*.8,0,Math.PI*2),e.arc(h-f*.7,d-f*.1,f*.7,0,Math.PI*2),e.arc(h+f*1.3,d+f*.1,f*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const o=e.createRadialGradient(256,380,15,256,380,120);o.addColorStop(0,"rgba(255, 255, 240, 1.0)"),o.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),o.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),o.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=o,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const a=new te(t),r=new qt(480,32,16),c=new le({map:a,side:ke});this.skyDome=new m(r,c),this.scene.add(this.skyDome)}initLighting(){const t=ei();this.hemiLight=new vp(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new Ep(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0;const e=t?1024:2048;this.dirLight.shadow.mapSize.width=e,this.dirLight.shadow.mapSize.height=e,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=t?120:160,this.dirLight.shadow.camera.left=-16,this.dirLight.shadow.camera.right=16,this.dirLight.shadow.camera.top=22,this.dirLight.shadow.camera.bottom=-22,this.dirLight.shadow.bias=-6e-4,this.dirLight.shadow.normalBias=.02,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new N({color:1793568,roughness:.9,flatShading:!0}),e=new pt,n=24;for(let i=0;i<n;i++){const o=4.5+Math.random()*3.5,a=3+Math.random()*2,r=new he(a,o,6),c=new m(r,t),h=150+Math.random()*25,d=-i*22;c.position.set(h,o*.5-.5,d),c.rotation.y=Math.random()*Math.PI,e.add(c)}this.scene.add(e),this.treeLines.push(e)}initFlyingBirds(){this.birdsGroup=new pt;const t=new le({color:16777215,side:ye}),e=8;for(let n=0;n<e;n++){const i=new pt,o=new Kt(.8,.35);o.translate(-.4,0,0);const a=new m(o,t);i.add(a);const r=new Kt(.8,.35);r.translate(.4,0,0);const c=new m(r,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:a,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class Gp{constructor(t="sedan"){this.type=t,this.group=new pt,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new xn,this.collisionSize=new F(1.8,1.4,4.5),this._boxCenter=new F,this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new N({color:t,metalness:.5,roughness:.35}),darkTrim:new N({color:1974308,roughness:.7}),wood:new N({color:8736014,roughness:.9}),glass:new jo({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new N({color:14671839,metalness:.9,roughness:.2}),headlight:new le({color:16777215}),taillight:new N({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new N({color:1973792,metalness:.1,roughness:.85}),rim:new N({color:12131356,metalness:.5,roughness:.4}),cowFawn:new N({color:9262372,roughness:.7}),cowWhite:new N({color:16119280,roughness:.6}),cowBlack:new N({color:2236962,roughness:.7}),horn:new N({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new U(2,.4,6.2),o=new m(i,n.darkTrim);o.position.set(0,.6,0),this.group.add(o);const a=new U(2.3,.4,.25),r=new m(a,n.darkTrim);r.position.set(0,.6,-3.15),this.group.add(r);const c=new U(1.8,.9,1.5),h=new m(c,n.body);h.position.set(0,1.25,-2.2),this.group.add(h);const d=new U(2.1,1.5,1.5),f=new m(d,n.body);f.position.set(0,1.8,-.7),this.group.add(f);const l=new Kt(1.85,.7),u=new m(l,n.glass);u.position.set(0,1.95,-1.46),this.group.add(u),[-.7,.7].forEach(y=>{const P=new m(new U(.24,.2,.05),n.headlight);P.position.set(y,1.15,-3.18),this.group.add(P)});const M=new U(2.25,.12,3.6),v=new m(M,n.wood);v.position.set(0,1.05,1.5),this.group.add(v),[-1.12,1.12].forEach(y=>{const P=new U(.08,1.3,3.6),C=new m(P,n.wood);C.position.set(y,1.7,1.5),this.group.add(C)});const g=new U(2.25,1.2,.08),p=new m(g,n.wood);p.position.set(0,1.65,3.3),this.group.add(p),[-.85,.85].forEach(y=>{const P=new m(new U(.28,.16,.05),n.taillight);P.position.set(y,.75,3.32),this.group.add(P)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(y=>{const P=new pt;P.position.set(y.x,2.2,y.z);const C=new U(.42,.45,.6),L=new m(C,y.mat);P.add(L);const k=new U(.3,.25,.25),S=new m(k,n.darkTrim);S.position.set(0,-.08,.38),P.add(S),[-.18,.18].forEach(x=>{const T=new he(.05,.28,6),G=new m(T,n.horn);G.position.set(x,.26,.05),G.rotation.z=x>0?-.35:.35,P.add(G)}),this.group.add(P)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(y=>{const P=this.createSimpleWheel(n,.5,.3);P.position.set(y.x,.5,y.z),this.group.add(P),this.wheels.push(P)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new U(2,.4,6.2),n=new m(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new U(2.1,1.6,1.8),o=new m(i,t.body);o.position.set(0,1.7,-1.8),this.group.add(o);const a=new U(2.3,2.1,3.8),r=new m(a,t.wood);r.position.set(0,1.85,1.2),this.group.add(r),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new U(2.35,2.5,10.2),n=new m(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new Kt(2.15,1.2),o=new m(i,t.glass);o.position.set(0,1.95,-5.12),this.group.add(o),[-1.19,1.19].forEach(r=>{const c=new Kt(9,.9),h=new m(c,t.glass);h.position.set(r,1.9,.2),h.rotation.y=r>0?Math.PI/2:-Math.PI/2,this.group.add(h)}),[-.85,.85].forEach(r=>{const c=new m(new U(.3,.16,.05),t.headlight);c.position.set(r,.75,-5.12),this.group.add(c);const h=new m(new U(.24,.35,.05),t.taillight);h.position.set(r,1.3,5.12),this.group.add(h)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(r=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(r.x,.48,r.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new U(1.88,.4,4.65),o=new m(i,n.darkTrim);o.position.set(0,.42,0),this.group.add(o);const a=new U(1.84,.6,4.6),r=new m(a,n.body);r.position.set(0,.78,0),this.group.add(r);const c=new U(1.58,.65,2.9),h=new m(c,n.body);h.position.set(0,1.3,.2),this.group.add(h),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new U(1.76,.32,4.5),o=new m(i,n.darkTrim);o.position.set(0,.32,0),this.group.add(o);const a=new U(1.72,.44,4.4),r=new m(a,n.body);r.position.set(0,.58,0),this.group.add(r);const c=new U(1.44,.46,2.2),h=new m(c,n.body);h.position.set(0,.92,-.05),this.group.add(h),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,o,a){[-e,e].forEach(r=>{const c=new U(.3,.1,.05),h=new m(c,t.headlight);h.position.set(r,i,n),this.group.add(h)}),[-e,e].forEach(r=>{const c=new U(.32,.12,.05),h=new m(c,t.taillight);h.position.set(r,a,o),this.group.add(h)})}addStandardWheels(t,e,n,i,o){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(r=>{const c=this.createSimpleWheel(t,o,.24);c.position.set(r.x,r.y,r.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new pt,o=new Q(e,e,n,18);o.rotateZ(Math.PI/2);const a=new m(o,t.tire);i.add(a);const r=new Q(e*.7,e*.7,n+.02,14);r.rotateZ(Math.PI/2);const c=new m(r,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=$t.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<$t.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=$t.LANES[n];if(!t.some(a=>{if(a===this||!a.active)return!1;const r=Math.abs(a.group.position.z-this.group.position.z),c=Math.abs(a.group.position.x-i);return r<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const o=this.targetX-this.group.position.x;Math.abs(o)>.04?this.group.position.x+=Math.sign(o)*Math.min(Math.abs(o),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(o=>{o.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){this._boxCenter.copy(this.group.position),this._boxCenter.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(this._boxCenter,this.collisionSize)}}class Bp{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"],n=ei()?14:25;for(let i=0;i<n;i++){const o=t[i%t.length],a=new Gp(o);a.despawn(),this.pool.push(a),this.scene.add(a.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,o){const a=t.group.position.z,r=t.group.position.x,c=Math.min(1,n/4500),h=Ni.lerp(1.3,.8,c),d=Ni.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=Ni.lerp(h,d,Math.random()),this.trySpawnTraffic(a,c));for(let f=this.activeVehicles.length-1;f>=0;f--){const l=this.activeVehicles[f];if(l.update(e,i),l.group.position.z>a+$t.TRAFFIC.DESPAWN_DISTANCE){l.despawn(),this.activeVehicles.splice(f,1);continue}if(!l.hasBeenOvertaken){const u=Math.abs(l.group.position.z-a),M=Math.abs(l.group.position.x-r);u<$t.SCORING.NEAR_MISS_DIST_Z&&M<$t.SCORING.NEAR_MISS_DIST_X&&M>.5&&e>l.speed+12?(l.hasBeenOvertaken=!0,o&&o(l)):a<l.group.position.z-4&&(l.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-$t.TRAFFIC.SPAWN_DISTANCE,i=34,o=new Set;this.activeVehicles.forEach(M=>{Math.abs(M.group.position.z-n)<i&&o.add(M.lane)});const a=[0,1,2].filter(M=>!o.has(M));if(a.length===0||a.length===1&&o.size>=2)return;const r=a[Math.floor(Math.random()*a.length)];let c="cow_truck";const h=Math.random();r===0?c=h>.45?"cow_truck":"truck":r===1?c=h>.5?"bus":h>.25?"cow_truck":"suv":c=h>.45?"bus":"sedan";const d=this.getInactiveVehicle(c);if(!d)return;const f=$t.TRAFFIC.SPEEDS[c]||[65,85],l=e*35,u=Ni.lerp(f[0],f[1],Math.random())+l;if(d.spawn(r,n,u),this.activeVehicles.push(d),e>.5&&Math.random()<.35&&a.length>=2){const M=a.filter(v=>v!==r);if(M.length>0){const v=M[Math.floor(Math.random()*M.length)],g=Math.random()>.5?"cow_truck":"bus",p=this.getInactiveVehicle(g);if(p){const w=n-(28+Math.random()*20),_=$t.TRAFFIC.SPEEDS[g]||[65,80],y=Ni.lerp(_[0],_[1],Math.random())+l;p.spawn(v,w,y),this.activeVehicles.push(p)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const o=this.activeVehicles[i],a=e-o.group.position.z,r=Math.abs(o.group.position.x-n);if(a>4&&a<65&&r<2.4&&!o.isYielding){o.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class kp{constructor(t){this.scene=t,this.isMobile=ei(),this.particles=[],this.poolSize=this.isMobile?70:180,this._smokeThrottle=!1,this.smokeMat=new le({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new le({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new N({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new U(.14,.14,.14),n=new m(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new F,rotVel:new F,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){if(this.isMobile&&(this._smokeThrottle=!this._smokeThrottle,this._smokeThrottle))return;const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){const e=this.isMobile?18:35,n=this.isMobile?10:20,i=this.isMobile?14:25;for(let o=0;o<e;o++){const a=this.getFreeParticle();if(!a)break;a.active=!0,a.type="spark",a.mesh.material=this.sparkMat,a.mesh.visible=!0,a.mesh.scale.set(.12,.12,.12),a.mesh.position.copy(t);const r=Math.random()*Math.PI*2,c=6+Math.random()*14;a.vel.set(Math.cos(r)*c,3+Math.random()*10,Math.sin(r)*c),a.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),a.life=0,a.maxLife=.7+Math.random()*.5,a.scaleSpeed=-.5}for(let o=0;o<n;o++){const a=this.getFreeParticle();if(!a)break;a.active=!0,a.type="debris",a.mesh.material=this.debrisMat,a.mesh.visible=!0,a.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),a.mesh.position.copy(t),a.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),a.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),a.life=0,a.maxLife=1.2,a.scaleSpeed=0}for(let o=0;o<i;o++){const a=this.getFreeParticle();if(!a)break;a.active=!0,a.type="smoke",a.mesh.material=this.smokeMat,a.mesh.visible=!0,a.mesh.scale.set(.8,.8,.8),a.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),a.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),a.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),a.life=0,a.maxLife=1.4,a.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class zp{constructor(t){this.scene=t;const e=ei();this.linesCount=e?25:60,this.group=new pt;const n=new fc({color:10083839,transparent:!0,opacity:0});this.lineMat=n,this.lines=[];for(let i=0;i<this.linesCount;i++){const o=[new F(0,0,0),new F(0,0,6+Math.random()*8)],a=new De().setFromPoints(o),r=new H0(a,n);this.resetLinePos(r),this.group.add(r),this.lines.push(r)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const o=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=o*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const a=t.group.position.z,r=t.group.position.x;this.group.position.set(r,0,a);const c=e/60*i*50;this.lines.forEach(h=>{h.position.z+=c,h.position.z>5&&this.resetLinePos(h)})}}class Vp{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this._lastScore=-1,this._lastDistKm="",this._lastSpeed=-1,this._lastNitro=-1,this._lastBoosting=null,this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),o=document.getElementById("btn-gameover-restart");[i,o].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const a=document.getElementById("btn-pause-menu"),r=document.getElementById("btn-gameover-menu");[a,r].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(l=>{l.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),h=document.getElementById("btn-how-to-play"),d=document.getElementById("btn-modal-close");h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),d&&c&&d.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")});const f=document.querySelectorAll(".veh-btn");f.forEach(l=>{l.addEventListener("click",()=>{f.forEach(u=>u.classList.remove("active")),l.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(l.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(l=>{l.addEventListener("click",u=>{u.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),o=document.getElementById("btn-touch-nitro");document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(r=>{r.addEventListener("contextmenu",c=>c.preventDefault())});const a=(r,c,h=null)=>{if(!r)return;const d=new Set,f=(u,M)=>{M&&M.cancelable&&M.preventDefault(),M&&M.stopPropagation(),document.body.classList.add("touch-active");const v=d.size===0;d.add(u),r.classList.add("active"),v&&(c(!0),h&&h())},l=(u,M)=>{M&&M.cancelable&&M.preventDefault(),M&&M.stopPropagation(),d.has(u)&&(d.delete(u),d.size===0&&(r.classList.remove("active"),c(!1)))};window.PointerEvent?(r.addEventListener("pointerdown",u=>{f(u.pointerId,u);try{r.setPointerCapture&&r.setPointerCapture(u.pointerId)}catch{}},{passive:!1}),r.addEventListener("pointerup",u=>{try{r.releasePointerCapture&&r.releasePointerCapture(u.pointerId)}catch{}l(u.pointerId,u)},{passive:!1}),r.addEventListener("pointercancel",u=>{try{r.releasePointerCapture&&r.releasePointerCapture(u.pointerId)}catch{}l(u.pointerId,u)},{passive:!1}),r.addEventListener("lostpointercapture",u=>{l(u.pointerId,u)},{passive:!1}),window.addEventListener("pointerup",u=>{l(u.pointerId,u)},{passive:!0}),window.addEventListener("pointercancel",u=>{l(u.pointerId,u)},{passive:!0})):(r.addEventListener("touchstart",u=>{u.cancelable&&u.preventDefault(),u.stopPropagation();for(let M=0;M<u.changedTouches.length;M++)f(u.changedTouches[M].identifier,u)},{passive:!1}),r.addEventListener("touchend",u=>{u.cancelable&&u.preventDefault(),u.stopPropagation();for(let M=0;M<u.changedTouches.length;M++)l(u.changedTouches[M].identifier,u)},{passive:!1}),r.addEventListener("touchcancel",u=>{for(let M=0;M<u.changedTouches.length;M++)l(u.changedTouches[M].identifier,u)},{passive:!1}))};t&&a(t,r=>{this.onSteerLeft&&this.onSteerLeft(r)}),e&&a(e,r=>{this.onSteerRight&&this.onSteerRight(r)}),n&&a(n,r=>{this.onBrake&&this.onBrake(r)},()=>this.soundManager.playAirBrake()),i&&a(i,r=>{this.onAccelerate&&this.onAccelerate(r)}),o&&a(o,r=>{this.onNitro&&this.onNitro(r)}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",r=>{r.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===fe.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case fe.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case fe.PLAYING:this.hudLayer.classList.remove("hidden");break;case fe.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case fe.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){const e=Math.floor(t.score);this._lastScore!==e&&this.scoreVal&&(this._lastScore=e,this.scoreVal.textContent=e.toLocaleString());const n=`${(t.distanceMeters/1e3).toFixed(2)} km`;this._lastDistKm!==n&&this.distVal&&(this._lastDistKm=n,this.distVal.textContent=n);const i=Math.round(t.speedKmh);this._lastSpeed!==i&&this.speedVal&&(this._lastSpeed=i,this.speedVal.textContent=i);const o=Math.round(t.nitro);this._lastNitro!==o&&this.nitroBar&&(this._lastNitro=o,this.nitroBar.style.width=`${o}%`),this._lastBoosting!==t.isBoosting&&this.nitroBar&&(this._lastBoosting=t.isBoosting,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting"))}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class Hp{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new Ap,this.inputManager=new Pp,this.soundManager=new Lp,this.uiManager=new Vp(this.soundManager),this.scene=new V0,this.camera=new Ve($t.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.isMobile=ei(),this.renderer=new uc({antialias:!this.isMobile,powerPreference:"high-performance",precision:this.isMobile?"mediump":"highp",stencil:!1,depth:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight);const t=this.isMobile?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(t),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=this.isMobile?Bo:Ia,this.renderer.toneMapping=Ua,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new Op(this.scene),this.roadManager=new Fp(this.scene),this.vehicles={truck:new Ip,rickshaw:new Dp,cng:new Up},Object.values(this.vehicles).forEach(e=>{this.scene.add(e.group),e.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new Bp(this.scene),this.particleSystem=new kp(this.scene),this.speedLines=new zp(this.scene),this.cameraController=new Rp(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new Tp,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this._leftRearPos=new F,this._rightRearPos=new F,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(fe.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){const t=()=>{const n=window.innerWidth,i=window.innerHeight;this.camera.aspect=n/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(n,i),this.isMobile=ei();const o=this.isMobile?Math.min(window.devicePixelRatio,1.35):Math.min(window.devicePixelRatio,2);this.renderer.setPixelRatio(o)};window.addEventListener("resize",t),window.addEventListener("orientationchange",()=>{setTimeout(t,120)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=n=>this.setVehicle(n);const e=()=>{this.gameState.state===fe.PLAYING?(this.gameState.state=fe.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(fe.PAUSED,this.gameState)):this.gameState.state===fe.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=e,this.inputManager.onPauseToggle=e,this.inputManager.onRestart=()=>{(this.gameState.state===fe.GAMEOVER||this.gameState.state===fe.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=n=>this.inputManager.setSteerLeft(n),this.uiManager.onSteerRight=n=>this.inputManager.setSteerRight(n),this.uiManager.onAccelerate=n=>this.inputManager.setAccelerate(n),this.uiManager.onBrake=n=>this.inputManager.setBrake(n),this.uiManager.onNitro=n=>this.inputManager.setNitro(n)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(fe.PLAYING,this.gameState)}resumeGame(){this.gameState.state===fe.PAUSED&&(this.gameState.state=fe.PLAYING,this.uiManager.setScreen(fe.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=fe.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(fe.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(fe.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===fe.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===fe.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const o=this.inputManager.keys.brake;o&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=o,this.gameState.update(e,this.inputManager);const a=this.gameState.speedKmh*1e3/3600;this.playerVehicle.group.position.z-=a*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,o,this.gameState.isBoosting,e),o&&this.gameState.speedKmh>50&&(this._leftRearPos.copy(this.playerVehicle.group.position),this._leftRearPos.x-=.85,this._leftRearPos.z+=1.6,this._rightRearPos.copy(this.playerVehicle.group.position),this._rightRearPos.x+=.85,this._rightRearPos.z+=1.6,this.particleSystem.emitTireSmoke(this._leftRearPos),this.particleSystem.emitTireSmoke(this._rightRearPos)),this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const h=this.gameState.addNearMiss();this.soundManager.playNearMiss(h.combo),this.uiManager.showNearMiss(h.bonus,h.combo)});const r=this.trafficManager.checkCollision(this.playerVehicle);r&&this.onCrash(r),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,o,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===fe.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new Hp});
//# sourceMappingURL=index-Cx2Qk2GO.js.map
