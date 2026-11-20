(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nr="160",yc=0,Jr=1,wc=2,Pa=1,Ca=2,gn=3,In=0,Fe=1,Re=2,Pn=0,Mi=1,jr=2,$r=3,Qr=4,Ec=5,Hn=100,Tc=101,bc=102,to=103,eo=104,Ac=200,Rc=201,Pc=202,Cc=203,Tr=204,br=205,Lc=206,Ic=207,Dc=208,Uc=209,Nc=210,Oc=211,Fc=212,Bc=213,Gc=214,kc=0,zc=1,Vc=2,ws=3,Hc=4,Wc=5,Xc=6,qc=7,La=0,Yc=1,Zc=2,Cn=0,Kc=1,Jc=2,jc=3,Ia=4,$c=5,Qc=6,Da=300,Si=301,yi=302,Ar=303,Rr=304,Is=306,en=1e3,Qe=1001,Pr=1002,Oe=1003,no=1004,Ws=1005,qe=1006,tl=1007,Vi=1008,Ln=1009,el=1010,nl=1011,Or=1012,Ua=1013,An=1014,Rn=1015,Hi=1016,Na=1017,Oa=1018,Xn=1020,il=1021,tn=1023,sl=1024,rl=1025,qn=1026,wi=1027,ol=1028,Fa=1029,al=1030,Ba=1031,Ga=1033,Xs=33776,qs=33777,Ys=33778,Zs=33779,io=35840,so=35841,ro=35842,oo=35843,ka=36196,ao=37492,co=37496,lo=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,vo=37816,Mo=37817,xo=37818,So=37819,yo=37820,wo=37821,Ks=36492,Eo=36494,To=36495,cl=36283,bo=36284,Ao=36285,Ro=36286,za=3e3,Yn=3001,ll=3200,hl=3201,Va=0,ul=1,Ye="",Ae="srgb",Mn="srgb-linear",Fr="display-p3",Ds="display-p3-linear",Es="linear",he="srgb",Ts="rec709",bs="p3",Qn=7680,Po=519,dl=512,fl=513,pl=514,Ha=515,ml=516,gl=517,_l=518,vl=519,Co=35044,Lo="300 es",Cr=1035,vn=2e3,As=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Io=1234567;const Oi=Math.PI/180,Ei=180/Math.PI;function jn(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[s&255]+Ce[s>>8&255]+Ce[s>>16&255]+Ce[s>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function Br(s,t){return(s%t+t)%t}function Ml(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function xl(s,t,e){return s!==t?(e-s)/(t-s):0}function Fi(s,t,e){return(1-e)*s+e*t}function Sl(s,t,e,n){return Fi(s,t,1-Math.exp(-e*n))}function yl(s,t=1){return t-Math.abs(Br(s,t*2)-t)}function wl(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function El(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Tl(s,t){return s+Math.floor(Math.random()*(t-s+1))}function bl(s,t){return s+Math.random()*(t-s)}function Al(s){return s*(.5-Math.random())}function Rl(s){s!==void 0&&(Io=s);let t=Io+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Pl(s){return s*Oi}function Cl(s){return s*Ei}function Lr(s){return(s&s-1)===0&&s!==0}function Ll(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Rs(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Il(s,t,e,n,i){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),h=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),l=a((t-n)/2),f=r((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":s.set(o*u,c*d,c*l,o*h);break;case"YZY":s.set(c*l,o*u,c*d,o*h);break;case"ZXZ":s.set(c*d,c*l,o*u,o*h);break;case"XZX":s.set(o*u,c*_,c*f,o*h);break;case"YXY":s.set(c*f,o*u,c*_,o*h);break;case"ZYZ":s.set(c*_,c*f,o*u,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function mi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ue(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Ci={DEG2RAD:Oi,RAD2DEG:Ei,generateUUID:jn,clamp:be,euclideanModulo:Br,mapLinear:Ml,inverseLerp:xl,lerp:Fi,damp:Sl,pingpong:yl,smoothstep:wl,smootherstep:El,randInt:Tl,randFloat:bl,randFloatSpread:Al,seededRandom:Rl,degToRad:Pl,radToDeg:Cl,isPowerOfTwo:Lr,ceilPowerOfTwo:Ll,floorPowerOfTwo:Rs,setQuaternionFromProperEuler:Il,normalize:Ue,denormalize:mi};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*i+t.x,this.y=r*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,n,i,r,a,o,c,h){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h)}set(t,e,n,i,r,a,o,c,h){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],u=n[4],d=n[7],l=n[2],f=n[5],_=n[8],M=i[0],m=i[3],p=i[6],w=i[1],g=i[4],v=i[7],D=i[2],C=i[5],L=i[8];return r[0]=a*M+o*w+c*D,r[3]=a*m+o*g+c*C,r[6]=a*p+o*v+c*L,r[1]=h*M+u*w+d*D,r[4]=h*m+u*g+d*C,r[7]=h*p+u*v+d*L,r[2]=l*M+f*w+_*D,r[5]=l*m+f*g+_*C,r[8]=l*p+f*v+_*L,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8];return e*a*u-e*o*h-n*r*u+n*o*c+i*r*h-i*a*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=u*a-o*h,l=o*c-u*r,f=h*r-a*c,_=e*d+n*l+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return t[0]=d*M,t[1]=(i*h-u*n)*M,t[2]=(o*n-i*a)*M,t[3]=l*M,t[4]=(u*e-i*c)*M,t[5]=(i*r-o*e)*M,t[6]=f*M,t[7]=(n*c-h*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-i*h,i*c,-i*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Js.makeScale(t,e)),this}rotate(t){return this.premultiply(Js.makeRotation(-t)),this}translate(t,e){return this.premultiply(Js.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Js=new ne;function Wa(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Ps(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dl(){const s=Ps("canvas");return s.style.display="block",s}const Do={};function Bi(s){s in Do||(Do[s]=!0,console.warn(s))}const Uo=new ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),No=new ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ji={[Mn]:{transfer:Es,primaries:Ts,toReference:s=>s,fromReference:s=>s},[Ae]:{transfer:he,primaries:Ts,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ds]:{transfer:Es,primaries:bs,toReference:s=>s.applyMatrix3(No),fromReference:s=>s.applyMatrix3(Uo)},[Fr]:{transfer:he,primaries:bs,toReference:s=>s.convertSRGBToLinear().applyMatrix3(No),fromReference:s=>s.applyMatrix3(Uo).convertLinearToSRGB()}},Ul=new Set([Mn,Ds]),oe={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Ul.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Ji[t].toReference,i=Ji[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Ji[s].primaries},getTransfer:function(s){return s===Ye?Es:Ji[s].transfer}};function xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ti;class Xa{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ti===void 0&&(ti=Ps("canvas")),ti.width=t.width,ti.height=t.height;const n=ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ps("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=xi(r[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Nl=0;class qa{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nl++}),this.uuid=jn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push($s(i[a].image)):r.push($s(i[a]))}else r=$s(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function $s(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ol=0;class Ge extends bi{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=Qe,i=Qe,r=qe,a=Vi,o=tn,c=Ln,h=Ge.DEFAULT_ANISOTROPY,u=Ye){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=jn(),this.name="",this.source=new qa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Yn?Ae:Ye),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Da)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case en:t.x=t.x-Math.floor(t.x);break;case Qe:t.x=t.x<0?0:1;break;case Pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case en:t.y=t.y-Math.floor(t.y);break;case Qe:t.y=t.y<0?0:1;break;case Pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ae?Yn:za}set encoding(t){Bi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Yn?Ae:Ye}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=Da;Ge.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,h=c[0],u=c[4],d=c[8],l=c[1],f=c[5],_=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(u-l)<.01&&Math.abs(d-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+l)<.1&&Math.abs(d+M)<.1&&Math.abs(_+m)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(h+1)/2,v=(f+1)/2,D=(p+1)/2,C=(u+l)/4,L=(d+M)/4,B=(_+m)/4;return g>v&&g>D?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=C/n,r=L/n):v>D?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=C/i,r=B/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=L/r,i=B/r),this.set(n,i,r,e),this}let w=Math.sqrt((m-_)*(m-_)+(d-M)*(d-M)+(l-u)*(l-u));return Math.abs(w)<.001&&(w=1),this.x=(m-_)/w,this.y=(d-M)/w,this.z=(l-u)/w,this.w=Math.acos((h+f+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fl extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(Bi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Yn?Ae:Ye),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ge(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new qa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Fl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ya extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bl extends Ge{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Qe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ki{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,a,o){let c=n[i+0],h=n[i+1],u=n[i+2],d=n[i+3];const l=r[a+0],f=r[a+1],_=r[a+2],M=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=l,t[e+1]=f,t[e+2]=_,t[e+3]=M;return}if(d!==M||c!==l||h!==f||u!==_){let m=1-o;const p=c*l+h*f+u*_+d*M,w=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){const D=Math.sqrt(g),C=Math.atan2(D,p*w);m=Math.sin(m*C)/D,o=Math.sin(o*C)/D}const v=o*w;if(c=c*m+l*v,h=h*m+f*v,u=u*m+_*v,d=d*m+M*v,m===1-o){const D=1/Math.sqrt(c*c+h*h+u*u+d*d);c*=D,h*=D,u*=D,d*=D}}t[e]=c,t[e+1]=h,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,a){const o=n[i],c=n[i+1],h=n[i+2],u=n[i+3],d=r[a],l=r[a+1],f=r[a+2],_=r[a+3];return t[e]=o*_+u*d+c*f-h*l,t[e+1]=c*_+u*l+h*d-o*f,t[e+2]=h*_+u*f+o*l-c*d,t[e+3]=u*_-o*d-c*l-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),u=o(i/2),d=o(r/2),l=c(n/2),f=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=l*u*d+h*f*_,this._y=h*f*d-l*u*_,this._z=h*u*_+l*f*d,this._w=h*u*d-l*f*_;break;case"YXZ":this._x=l*u*d+h*f*_,this._y=h*f*d-l*u*_,this._z=h*u*_-l*f*d,this._w=h*u*d+l*f*_;break;case"ZXY":this._x=l*u*d-h*f*_,this._y=h*f*d+l*u*_,this._z=h*u*_+l*f*d,this._w=h*u*d-l*f*_;break;case"ZYX":this._x=l*u*d-h*f*_,this._y=h*f*d+l*u*_,this._z=h*u*_-l*f*d,this._w=h*u*d+l*f*_;break;case"YZX":this._x=l*u*d+h*f*_,this._y=h*f*d+l*u*_,this._z=h*u*_-l*f*d,this._w=h*u*d-l*f*_;break;case"XZY":this._x=l*u*d-h*f*_,this._y=h*f*d-l*u*_,this._z=h*u*_+l*f*d,this._w=h*u*d+l*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],u=e[6],d=e[10],l=n+o+d;if(l>0){const f=.5/Math.sqrt(l+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-h)*f,this._z=(a-i)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(r+h)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-h)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(r+h)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,u=e._w;return this._x=n*u+a*o+i*h-r*c,this._y=i*u+a*c+r*o-n*h,this._z=r*u+a*h+n*c-i*o,this._w=a*u-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),u=Math.atan2(h,o),d=Math.sin((1-e)*u)/h,l=Math.sin(e*u)/h;return this._w=a*d+this._w*l,this._x=n*d+this._x*l,this._y=i*d+this._y*l,this._z=r*d+this._z*l,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,n=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Oo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Oo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*i-o*n),u=2*(o*e-r*i),d=2*(r*n-a*e);return this.x=e+c*h+a*d-o*u,this.y=n+c*u+o*h-r*d,this.z=i+c*d+r*u-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new N,Oo=new Ki;class xn{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ke.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ke.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ke.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ke):Ke.fromBufferAttribute(r,a),Ke.applyMatrix4(t.matrixWorld),this.expandByPoint(Ke);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ji.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ji.copy(n.boundingBox)),ji.applyMatrix4(t.matrixWorld),this.union(ji)}const i=t.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ke),Ke.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),$i.subVectors(this.max,Li),ei.subVectors(t.a,Li),ni.subVectors(t.b,Li),ii.subVectors(t.c,Li),yn.subVectors(ni,ei),wn.subVectors(ii,ni),Fn.subVectors(ei,ii);let e=[0,-yn.z,yn.y,0,-wn.z,wn.y,0,-Fn.z,Fn.y,yn.z,0,-yn.x,wn.z,0,-wn.x,Fn.z,0,-Fn.x,-yn.y,yn.x,0,-wn.y,wn.x,0,-Fn.y,Fn.x,0];return!tr(e,ei,ni,ii,$i)||(e=[1,0,0,0,1,0,0,0,1],!tr(e,ei,ni,ii,$i))?!1:(Qi.crossVectors(yn,wn),e=[Qi.x,Qi.y,Qi.z],tr(e,ei,ni,ii,$i))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ke).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ke).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new N,new N,new N,new N,new N,new N,new N,new N],Ke=new N,ji=new xn,ei=new N,ni=new N,ii=new N,yn=new N,wn=new N,Fn=new N,Li=new N,$i=new N,Qi=new N,Bn=new N;function tr(s,t,e,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),c=t.dot(Bn),h=e.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(c,h,u),Math.min(c,h,u))>o)return!1}return!0}const Gl=new xn,Ii=new N,er=new N;class Us{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gl.setFromPoints(t).getCenter(n);let i=0;for(let r=0,a=t.length;r<a;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ii.subVectors(t,this.center);const e=Ii.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(er.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ii.copy(t.center).add(er)),this.expandByPoint(Ii.copy(t.center).sub(er))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new N,nr=new N,ts=new N,En=new N,ir=new N,es=new N,sr=new N;class Za{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){nr.copy(t).add(e).multiplyScalar(.5),ts.copy(e).sub(t).normalize(),En.copy(this.origin).sub(nr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(ts),o=En.dot(this.direction),c=-En.dot(ts),h=En.lengthSq(),u=Math.abs(1-a*a);let d,l,f,_;if(u>0)if(d=a*c-o,l=a*o-c,_=r*u,d>=0)if(l>=-_)if(l<=_){const M=1/u;d*=M,l*=M,f=d*(d+a*l+2*o)+l*(a*d+l+2*c)+h}else l=r,d=Math.max(0,-(a*l+o)),f=-d*d+l*(l+2*c)+h;else l=-r,d=Math.max(0,-(a*l+o)),f=-d*d+l*(l+2*c)+h;else l<=-_?(d=Math.max(0,-(-a*r+o)),l=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+l*(l+2*c)+h):l<=_?(d=0,l=Math.min(Math.max(-r,-c),r),f=l*(l+2*c)+h):(d=Math.max(0,-(a*r+o)),l=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+l*(l+2*c)+h);else l=a>0?-r:r,d=Math.max(0,-(a*l+o)),f=-d*d+l*(l+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(nr).addScaledVector(ts,l),f}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,r=t.radius*t.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,a,o,c;const h=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,l=this.origin;return h>=0?(n=(t.min.x-l.x)*h,i=(t.max.x-l.x)*h):(n=(t.max.x-l.x)*h,i=(t.min.x-l.x)*h),u>=0?(r=(t.min.y-l.y)*u,a=(t.max.y-l.y)*u):(r=(t.max.y-l.y)*u,a=(t.min.y-l.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-l.z)*d,c=(t.max.z-l.z)*d):(o=(t.max.z-l.z)*d,c=(t.min.z-l.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,r){ir.subVectors(e,t),es.subVectors(n,t),sr.crossVectors(ir,es);let a=this.direction.dot(sr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,t);const c=o*this.direction.dot(es.crossVectors(En,es));if(c<0)return null;const h=o*this.direction.dot(ir.cross(En));if(h<0||c+h>a)return null;const u=-o*En.dot(sr);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(t,e,n,i,r,a,o,c,h,u,d,l,f,_,M,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,a,o,c,h,u,d,l,f,_,M,m)}set(t,e,n,i,r,a,o,c,h,u,d,l,f,_,M,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=u,p[10]=d,p[14]=l,p[3]=f,p[7]=_,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/si.setFromMatrixColumn(t,0).length(),r=1/si.setFromMatrixColumn(t,1).length(),a=1/si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const l=a*u,f=a*d,_=o*u,M=o*d;e[0]=c*u,e[4]=-c*d,e[8]=h,e[1]=f+_*h,e[5]=l-M*h,e[9]=-o*c,e[2]=M-l*h,e[6]=_+f*h,e[10]=a*c}else if(t.order==="YXZ"){const l=c*u,f=c*d,_=h*u,M=h*d;e[0]=l+M*o,e[4]=_*o-f,e[8]=a*h,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-_,e[6]=M+l*o,e[10]=a*c}else if(t.order==="ZXY"){const l=c*u,f=c*d,_=h*u,M=h*d;e[0]=l-M*o,e[4]=-a*d,e[8]=_+f*o,e[1]=f+_*o,e[5]=a*u,e[9]=M-l*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const l=a*u,f=a*d,_=o*u,M=o*d;e[0]=c*u,e[4]=_*h-f,e[8]=l*h+M,e[1]=c*d,e[5]=M*h+l,e[9]=f*h-_,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const l=a*c,f=a*h,_=o*c,M=o*h;e[0]=c*u,e[4]=M-l*d,e[8]=_*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-h*u,e[6]=f*d+_,e[10]=l-M*d}else if(t.order==="XZY"){const l=a*c,f=a*h,_=o*c,M=o*h;e[0]=c*u,e[4]=-d,e[8]=h*u,e[1]=l*d+M,e[5]=a*u,e[9]=f*d-_,e[2]=_*d-f,e[6]=o*u,e[10]=M*d+l}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kl,t,zl)}lookAt(t,e,n){const i=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Tn.crossVectors(n,Ve),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Tn.crossVectors(n,Ve)),Tn.normalize(),ns.crossVectors(Ve,Tn),i[0]=Tn.x,i[4]=ns.x,i[8]=Ve.x,i[1]=Tn.y,i[5]=ns.y,i[9]=Ve.y,i[2]=Tn.z,i[6]=ns.z,i[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],u=n[1],d=n[5],l=n[9],f=n[13],_=n[2],M=n[6],m=n[10],p=n[14],w=n[3],g=n[7],v=n[11],D=n[15],C=i[0],L=i[4],B=i[8],y=i[12],E=i[1],P=i[5],Z=i[9],at=i[13],O=i[2],z=i[6],H=i[10],it=i[14],nt=i[3],Y=i[7],ot=i[11],K=i[15];return r[0]=a*C+o*E+c*O+h*nt,r[4]=a*L+o*P+c*z+h*Y,r[8]=a*B+o*Z+c*H+h*ot,r[12]=a*y+o*at+c*it+h*K,r[1]=u*C+d*E+l*O+f*nt,r[5]=u*L+d*P+l*z+f*Y,r[9]=u*B+d*Z+l*H+f*ot,r[13]=u*y+d*at+l*it+f*K,r[2]=_*C+M*E+m*O+p*nt,r[6]=_*L+M*P+m*z+p*Y,r[10]=_*B+M*Z+m*H+p*ot,r[14]=_*y+M*at+m*it+p*K,r[3]=w*C+g*E+v*O+D*nt,r[7]=w*L+g*P+v*z+D*Y,r[11]=w*B+g*Z+v*H+D*ot,r[15]=w*y+g*at+v*it+D*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],u=t[2],d=t[6],l=t[10],f=t[14],_=t[3],M=t[7],m=t[11],p=t[15];return _*(+r*c*d-i*h*d-r*o*l+n*h*l+i*o*f-n*c*f)+M*(+e*c*f-e*h*l+r*a*l-i*a*f+i*h*u-r*c*u)+m*(+e*h*d-e*o*f-r*a*d+n*a*f+r*o*u-n*h*u)+p*(-i*o*u-e*c*d+e*o*l+i*a*d-n*a*l+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],u=t[8],d=t[9],l=t[10],f=t[11],_=t[12],M=t[13],m=t[14],p=t[15],w=d*m*h-M*l*h+M*c*f-o*m*f-d*c*p+o*l*p,g=_*l*h-u*m*h-_*c*f+a*m*f+u*c*p-a*l*p,v=u*M*h-_*d*h+_*o*f-a*M*f-u*o*p+a*d*p,D=_*d*c-u*M*c-_*o*l+a*M*l+u*o*m-a*d*m,C=e*w+n*g+i*v+r*D;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/C;return t[0]=w*L,t[1]=(M*l*r-d*m*r-M*i*f+n*m*f+d*i*p-n*l*p)*L,t[2]=(o*m*r-M*c*r+M*i*h-n*m*h-o*i*p+n*c*p)*L,t[3]=(d*c*r-o*l*r-d*i*h+n*l*h+o*i*f-n*c*f)*L,t[4]=g*L,t[5]=(u*m*r-_*l*r+_*i*f-e*m*f-u*i*p+e*l*p)*L,t[6]=(_*c*r-a*m*r-_*i*h+e*m*h+a*i*p-e*c*p)*L,t[7]=(a*l*r-u*c*r+u*i*h-e*l*h-a*i*f+e*c*f)*L,t[8]=v*L,t[9]=(_*d*r-u*M*r-_*n*f+e*M*f+u*n*p-e*d*p)*L,t[10]=(a*M*r-_*o*r+_*n*h-e*M*h-a*n*p+e*o*p)*L,t[11]=(u*o*r-a*d*r-u*n*h+e*d*h+a*n*f-e*o*f)*L,t[12]=D*L,t[13]=(u*M*i-_*d*i+_*n*l-e*M*l-u*n*m+e*d*m)*L,t[14]=(_*o*i-a*M*i-_*n*c+e*M*c+a*n*m-e*o*m)*L,t[15]=(a*d*i-u*o*i+u*n*c-e*d*c-a*n*l+e*o*l)*L,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,u=r*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,u*o+n,u*c-i*a,0,h*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,a){return this.set(1,n,r,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,u=a+a,d=o+o,l=r*h,f=r*u,_=r*d,M=a*u,m=a*d,p=o*d,w=c*h,g=c*u,v=c*d,D=n.x,C=n.y,L=n.z;return i[0]=(1-(M+p))*D,i[1]=(f+v)*D,i[2]=(_-g)*D,i[3]=0,i[4]=(f-v)*C,i[5]=(1-(l+p))*C,i[6]=(m+w)*C,i[7]=0,i[8]=(_+g)*L,i[9]=(m-w)*L,i[10]=(1-(l+M))*L,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=si.set(i[0],i[1],i[2]).length();const a=si.set(i[4],i[5],i[6]).length(),o=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const h=1/r,u=1/a,d=1/o;return Je.elements[0]*=h,Je.elements[1]*=h,Je.elements[2]*=h,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=d,Je.elements[9]*=d,Je.elements[10]*=d,e.setFromRotationMatrix(Je),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,i,r,a,o=vn){const c=this.elements,h=2*r/(e-t),u=2*r/(n-i),d=(e+t)/(e-t),l=(n+i)/(n-i);let f,_;if(o===vn)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===As)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=l,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,a,o=vn){const c=this.elements,h=1/(e-t),u=1/(n-i),d=1/(a-r),l=(e+t)*h,f=(n+i)*u;let _,M;if(o===vn)_=(a+r)*d,M=-2*d;else if(o===As)_=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-l,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=M,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const si=new N,Je=new _e,kl=new N(0,0,0),zl=new N(1,1,1),Tn=new N,ns=new N,Ve=new N,Fo=new _e,Bo=new Ki;class Ns{constructor(t=0,e=0,n=0,i=Ns.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],a=i[4],o=i[8],c=i[1],h=i[5],u=i[9],d=i[2],l=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(l,h),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(l,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(l,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fo.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fo,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bo.setFromEuler(this),this.setFromQuaternion(Bo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ns.DEFAULT_ORDER="XYZ";class Ka{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vl=0;const Go=new N,ri=new Ki,fn=new _e,is=new N,Di=new N,Hl=new N,Wl=new Ki,ko=new N(1,0,0),zo=new N(0,1,0),Vo=new N(0,0,1),Xl={type:"added"},ql={type:"removed"};class xe extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new N,e=new Ns,n=new Ki,i=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _e},normalMatrix:{value:new ne}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.multiply(ri),this}rotateOnWorldAxis(t,e){return ri.setFromAxisAngle(t,e),this.quaternion.premultiply(ri),this}rotateX(t){return this.rotateOnAxis(ko,t)}rotateY(t){return this.rotateOnAxis(zo,t)}rotateZ(t){return this.rotateOnAxis(Vo,t)}translateOnAxis(t,e){return Go.copy(t).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ko,t)}translateY(t){return this.translateOnAxis(zo,t)}translateZ(t){return this.translateOnAxis(Vo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?is.copy(t):is.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Di,is,this.up):fn.lookAt(is,Di,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(fn),this.quaternion.premultiply(ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Xl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ql)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,t,Hl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Wl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,u=c.length;h<u;h++){const d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));i.material=o}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),u=a(t.images),d=a(t.shapes),l=a(t.skeletons),f=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),l.length>0&&(n.skeletons=l),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const h in o){const u=o[h];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new N(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const je=new N,pn=new N,rr=new N,mn=new N,oi=new N,ai=new N,Ho=new N,or=new N,ar=new N,cr=new N;let ss=!1;class $e{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),je.subVectors(t,e),i.cross(je);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){je.subVectors(i,e),pn.subVectors(n,e),rr.subVectors(t,e);const a=je.dot(je),o=je.dot(pn),c=je.dot(rr),h=pn.dot(pn),u=pn.dot(rr),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const l=1/d,f=(h*c-o*u)*l,_=(a*u-o*c)*l;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn)===null?!1:mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(t,e,n,i,r,a,o,c){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),this.getInterpolation(t,e,n,i,r,a,o,c)}static getInterpolation(t,e,n,i,r,a,o,c){return this.getBarycoord(t,e,n,i,mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,mn.x),c.addScaledVector(a,mn.y),c.addScaledVector(o,mn.z),c)}static isFrontFacing(t,e,n,i){return je.subVectors(n,e),pn.subVectors(t,e),je.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return je.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),je.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return $e.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return $e.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return ss===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ss=!0),$e.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return $e.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return $e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return $e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let a,o;oi.subVectors(i,n),ai.subVectors(r,n),or.subVectors(t,n);const c=oi.dot(or),h=ai.dot(or);if(c<=0&&h<=0)return e.copy(n);ar.subVectors(t,i);const u=oi.dot(ar),d=ai.dot(ar);if(u>=0&&d<=u)return e.copy(i);const l=c*d-u*h;if(l<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(oi,a);cr.subVectors(t,r);const f=oi.dot(cr),_=ai.dot(cr);if(_>=0&&f<=_)return e.copy(r);const M=f*h-c*_;if(M<=0&&h>=0&&_<=0)return o=h/(h-_),e.copy(n).addScaledVector(ai,o);const m=u*_-f*d;if(m<=0&&d-u>=0&&f-_>=0)return Ho.subVectors(r,i),o=(d-u)/(d-u+(f-_)),e.copy(i).addScaledVector(Ho,o);const p=1/(m+M+l);return a=M*p,o=l*p,e.copy(n).addScaledVector(oi,a).addScaledVector(ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ja={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function lr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class ie{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Br(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=lr(a,r,t+1/3),this.g=lr(a,r,t),this.b=lr(a,r,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){const n=Ja[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return oe.fromWorkingColorSpace(Le.copy(this),t),Math.round(be(Le.r*255,0,255))*65536+Math.round(be(Le.g*255,0,255))*256+Math.round(be(Le.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Le.copy(this),e);const n=Le.r,i=Le.g,r=Le.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,h;const u=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=u,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Le.copy(this),e),t.r=Le.r,t.g=Le.g,t.b=Le.b,t}getStyle(t=Ae){oe.fromWorkingColorSpace(Le.copy(this),t);const e=Le.r,n=Le.g,i=Le.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(bn),this.setHSL(bn.h+t,bn.s+e,bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(bn),t.getHSL(rs);const n=Fi(bn.h,rs.h,e),i=Fi(bn.s,rs.s,e),r=Fi(bn.l,rs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Le=new ie;ie.NAMES=Ja;let Yl=0;class Ai extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Mi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tr,this.blendDst=br,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ie(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Tr&&(n.blendSrc=this.blendSrc),this.blendDst!==br&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=i(t.textures),a=i(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class pe extends Ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=La,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new N,os=new Tt;class an{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Co,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.applyMatrix3(t),this.setXY(e,os.x,os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),i=Ue(i,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Co&&(t.usage=this.usage),t}}class ja extends an{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class $a extends an{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ae extends an{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Zl=0;const Xe=new _e,hr=new xe,ci=new N,He=new xn,Ui=new xn,Te=new N;class De extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wa(t)?$a:ja)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return hr.lookAt(t),hr.updateMatrix(),this.applyMatrix4(hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];He.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(Te.addVectors(He.min,Ui.min),He.expandByPoint(Te),Te.addVectors(He.max,Ui.max),He.expandByPoint(Te)):(He.expandByPoint(Ui.min),He.expandByPoint(Ui.max))}He.getCenter(n);let i=0;for(let r=0,a=t.count;r<a;r++)Te.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Te));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)Te.fromBufferAttribute(o,h),c&&(ci.fromBufferAttribute(t,h),Te.add(ci)),i=Math.max(i,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,a=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*o),4));const c=this.getAttribute("tangent").array,h=[],u=[];for(let E=0;E<o;E++)h[E]=new N,u[E]=new N;const d=new N,l=new N,f=new N,_=new Tt,M=new Tt,m=new Tt,p=new N,w=new N;function g(E,P,Z){d.fromArray(i,E*3),l.fromArray(i,P*3),f.fromArray(i,Z*3),_.fromArray(a,E*2),M.fromArray(a,P*2),m.fromArray(a,Z*2),l.sub(d),f.sub(d),M.sub(_),m.sub(_);const at=1/(M.x*m.y-m.x*M.y);isFinite(at)&&(p.copy(l).multiplyScalar(m.y).addScaledVector(f,-M.y).multiplyScalar(at),w.copy(f).multiplyScalar(M.x).addScaledVector(l,-m.x).multiplyScalar(at),h[E].add(p),h[P].add(p),h[Z].add(p),u[E].add(w),u[P].add(w),u[Z].add(w))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let E=0,P=v.length;E<P;++E){const Z=v[E],at=Z.start,O=Z.count;for(let z=at,H=at+O;z<H;z+=3)g(n[z+0],n[z+1],n[z+2])}const D=new N,C=new N,L=new N,B=new N;function y(E){L.fromArray(r,E*3),B.copy(L);const P=h[E];D.copy(P),D.sub(L.multiplyScalar(L.dot(P))).normalize(),C.crossVectors(B,P);const at=C.dot(u[E])<0?-1:1;c[E*4]=D.x,c[E*4+1]=D.y,c[E*4+2]=D.z,c[E*4+3]=at}for(let E=0,P=v.length;E<P;++E){const Z=v[E],at=Z.start,O=Z.count;for(let z=at,H=at+O;z<H;z+=3)y(n[z+0]),y(n[z+1]),y(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let l=0,f=n.count;l<f;l++)n.setXYZ(l,0,0,0);const i=new N,r=new N,a=new N,o=new N,c=new N,h=new N,u=new N,d=new N;if(t)for(let l=0,f=t.count;l<f;l+=3){const _=t.getX(l+0),M=t.getX(l+1),m=t.getX(l+2);i.fromBufferAttribute(e,_),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,m),o.add(u),c.add(u),h.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,h.x,h.y,h.z)}else for(let l=0,f=e.count;l<f;l+=3)i.fromBufferAttribute(e,l+0),r.fromBufferAttribute(e,l+1),a.fromBufferAttribute(e,l+2),u.subVectors(a,r),d.subVectors(i,r),u.cross(d),n.setXYZ(l+0,u.x,u.y,u.z),n.setXYZ(l+1,u.x,u.y,u.z),n.setXYZ(l+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(o,c){const h=o.array,u=o.itemSize,d=o.normalized,l=new h.constructor(c.length*u);let f=0,_=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?f=c[M]*o.data.stride+o.offset:f=c[M]*u;for(let p=0;p<u;p++)l[_++]=h[f++]}return new an(l,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=t(c,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let u=0,d=h.length;u<d;u++){const l=h[u],f=t(l,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],u=[];for(let d=0,l=h.length;d<l;d++){const f=h[d];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const h in i){const u=i[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],d=r[h];for(let l=0,f=d.length;l<f;l++)u.push(d[l].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,u=a.length;h<u;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wo=new _e,Gn=new Za,as=new Us,Xo=new N,li=new N,hi=new N,ui=new N,ur=new N,cs=new N,ls=new Tt,hs=new Tt,us=new Tt,qo=new N,Yo=new N,Zo=new N,ds=new N,fs=new N;class A extends xe{constructor(t=new De,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(r&&o){cs.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const u=o[c],d=r[c];u!==0&&(ur.fromBufferAttribute(d,t),a?cs.addScaledVector(ur,u):cs.addScaledVector(ur.sub(e),u))}e.add(cs)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(r),Gn.copy(t.ray).recast(t.near),!(as.containsPoint(Gn.origin)===!1&&(Gn.intersectSphere(as,Xo)===null||Gn.origin.distanceToSquared(Xo)>(t.far-t.near)**2))&&(Wo.copy(r).invert(),Gn.copy(t.ray).applyMatrix4(Wo),!(n.boundingBox!==null&&Gn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Gn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,l=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=l.length;_<M;_++){const m=l[_],p=a[m.materialIndex],w=Math.max(m.start,f.start),g=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,D=g;v<D;v+=3){const C=o.getX(v),L=o.getX(v+1),B=o.getX(v+2);i=ps(this,p,t,n,h,u,d,C,L,B),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const w=o.getX(m),g=o.getX(m+1),v=o.getX(m+2);i=ps(this,a,t,n,h,u,d,w,g,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=l.length;_<M;_++){const m=l[_],p=a[m.materialIndex],w=Math.max(m.start,f.start),g=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,D=g;v<D;v+=3){const C=v,L=v+1,B=v+2;i=ps(this,p,t,n,h,u,d,C,L,B),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),M=Math.min(c.count,f.start+f.count);for(let m=_,p=M;m<p;m+=3){const w=m,g=m+1,v=m+2;i=ps(this,a,t,n,h,u,d,w,g,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Kl(s,t,e,n,i,r,a,o){let c;if(t.side===Fe?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,t.side===In,o),c===null)return null;fs.copy(o),fs.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(fs);return h<e.near||h>e.far?null:{distance:h,point:fs.clone(),object:s}}function ps(s,t,e,n,i,r,a,o,c,h){s.getVertexPosition(o,li),s.getVertexPosition(c,hi),s.getVertexPosition(h,ui);const u=Kl(s,t,e,n,li,hi,ui,ds);if(u){i&&(ls.fromBufferAttribute(i,o),hs.fromBufferAttribute(i,c),us.fromBufferAttribute(i,h),u.uv=$e.getInterpolation(ds,li,hi,ui,ls,hs,us,new Tt)),r&&(ls.fromBufferAttribute(r,o),hs.fromBufferAttribute(r,c),us.fromBufferAttribute(r,h),u.uv1=$e.getInterpolation(ds,li,hi,ui,ls,hs,us,new Tt),u.uv2=u.uv1),a&&(qo.fromBufferAttribute(a,o),Yo.fromBufferAttribute(a,c),Zo.fromBufferAttribute(a,h),u.normal=$e.getInterpolation(ds,li,hi,ui,qo,Yo,Zo,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new N,materialIndex:0};$e.getNormal(li,hi,ui,d.normal),u.face=d}return u}class st extends De{constructor(t=1,e=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],u=[],d=[];let l=0,f=0;_("z","y","x",-1,-1,n,e,t,a,r,0),_("z","y","x",1,-1,n,e,-t,a,r,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,r,4),_("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ae(h,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(d,2));function _(M,m,p,w,g,v,D,C,L,B,y){const E=v/L,P=D/B,Z=v/2,at=D/2,O=C/2,z=L+1,H=B+1;let it=0,nt=0;const Y=new N;for(let ot=0;ot<H;ot++){const K=ot*P-at;for(let pt=0;pt<z;pt++){const j=pt*E-Z;Y[M]=j*w,Y[m]=K*g,Y[p]=O,h.push(Y.x,Y.y,Y.z),Y[M]=0,Y[m]=0,Y[p]=C>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(pt/L),d.push(1-ot/B),it+=1}}for(let ot=0;ot<B;ot++)for(let K=0;K<L;K++){const pt=l+K+z*ot,j=l+K+z*(ot+1),lt=l+(K+1)+z*(ot+1),xt=l+(K+1)+z*ot;c.push(pt,j,xt),c.push(j,lt,xt),nt+=6}o.addGroup(f,nt,y),f+=nt,l+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new st(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ti(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(s){const t={};for(let e=0;e<s.length;e++){const n=Ti(s[e]);for(const i in n)t[i]=n[i]}return t}function Jl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Qa(s){return s.getRenderTarget()===null?s.outputColorSpace:oe.workingColorSpace}const jl={clone:Ti,merge:Ne};var $l=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ql=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$l,this.fragmentShader=Ql,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ti(t.uniforms),this.uniformsGroups=Jl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class tc extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Be extends tc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ei*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(Oi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Oi*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,e-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const di=-90,fi=1;class th extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Be(di,fi,t,e);i.layers=this.layers,this.add(i);const r=new Be(di,fi,t,e);r.layers=this.layers,this.add(r);const a=new Be(di,fi,t,e);a.layers=this.layers,this.add(a);const o=new Be(di,fi,t,e);o.layers=this.layers,this.add(o);const c=new Be(di,fi,t,e);c.layers=this.layers,this.add(c);const h=new Be(di,fi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,a,o,c]=e;for(const h of e)this.remove(h);if(t===vn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,u]=this.children,d=t.getRenderTarget(),l=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,h),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,l,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ec extends Ge{constructor(t,e,n,i,r,a,o,c,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Si,super(t,e,n,i,r,a,o,c,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class eh extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(Bi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Yn?Ae:Ye),this.texture=new ec(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new st(5,5,5),r=new Kn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Pn});r.uniforms.tEquirect.value=e;const a=new A(i,r),o=e.minFilter;return e.minFilter===Vi&&(e.minFilter=qe),new th(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(r)}}const dr=new N,nh=new N,ih=new ne;class zn{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=dr.subVectors(n,e).cross(nh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(dr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ih.getNormalMatrix(t),i=this.coplanarPoint(dr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new Us,ms=new N;class Gr{constructor(t=new zn,e=new zn,n=new zn,i=new zn,r=new zn,a=new zn){this.planes=[t,e,n,i,r,a]}set(t,e,n,i,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vn){const n=this.planes,i=t.elements,r=i[0],a=i[1],o=i[2],c=i[3],h=i[4],u=i[5],d=i[6],l=i[7],f=i[8],_=i[9],M=i[10],m=i[11],p=i[12],w=i[13],g=i[14],v=i[15];if(n[0].setComponents(c-r,l-h,m-f,v-p).normalize(),n[1].setComponents(c+r,l+h,m+f,v+p).normalize(),n[2].setComponents(c+a,l+u,m+_,v+w).normalize(),n[3].setComponents(c-a,l-u,m-_,v-w).normalize(),n[4].setComponents(c-o,l-d,m-M,v-g).normalize(),e===vn)n[5].setComponents(c+o,l+d,m+M,v+g).normalize();else if(e===As)n[5].setComponents(o,d,M,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(t){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(t.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let s=null,t=!1,e=null,n=null;function i(r,a){e(r,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function sh(s,t){const e=t.isWebGL2,n=new WeakMap;function i(h,u){const d=h.array,l=h.usage,f=d.byteLength,_=s.createBuffer();s.bindBuffer(u,_),s.bufferData(u,d,l),h.onUploadCallback();let M;if(d instanceof Float32Array)M=s.FLOAT;else if(d instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)M=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=s.SHORT;else if(d instanceof Uint32Array)M=s.UNSIGNED_INT;else if(d instanceof Int32Array)M=s.INT;else if(d instanceof Int8Array)M=s.BYTE;else if(d instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:f}}function r(h,u,d){const l=u.array,f=u._updateRange,_=u.updateRanges;if(s.bindBuffer(d,h),f.count===-1&&_.length===0&&s.bufferSubData(d,0,l),_.length!==0){for(let M=0,m=_.length;M<m;M++){const p=_[M];e?s.bufferSubData(d,p.start*l.BYTES_PER_ELEMENT,l,p.start,p.count):s.bufferSubData(d,p.start*l.BYTES_PER_ELEMENT,l.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}f.count!==-1&&(e?s.bufferSubData(d,f.offset*l.BYTES_PER_ELEMENT,l,f.offset,f.count):s.bufferSubData(d,f.offset*l.BYTES_PER_ELEMENT,l.subarray(f.offset,f.offset+f.count)),f.count=-1),u.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function o(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=n.get(h);u&&(s.deleteBuffer(u.buffer),n.delete(h))}function c(h,u){if(h.isGLBufferAttribute){const l=n.get(h);(!l||l.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);if(d===void 0)n.set(h,i(h,u));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,u),d.version=h.version}}return{get:a,remove:o,update:c}}class jt extends De{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),h=o+1,u=c+1,d=t/o,l=e/c,f=[],_=[],M=[],m=[];for(let p=0;p<u;p++){const w=p*l-a;for(let g=0;g<h;g++){const v=g*d-r;_.push(v,-w,0),M.push(0,0,1),m.push(g/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<o;w++){const g=w+h*p,v=w+h*(p+1),D=w+1+h*(p+1),C=w+1+h*p;f.push(g,v,C),f.push(v,D,C)}this.setIndex(f),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(M,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jt(t.width,t.height,t.widthSegments,t.heightSegments)}}var rh=`#ifdef USE_ALPHAHASH
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
}`,te={alphahash_fragment:rh,alphahash_pars_fragment:oh,alphamap_fragment:ah,alphamap_pars_fragment:ch,alphatest_fragment:lh,alphatest_pars_fragment:hh,aomap_fragment:uh,aomap_pars_fragment:dh,batching_pars_vertex:fh,batching_vertex:ph,begin_vertex:mh,beginnormal_vertex:gh,bsdfs:_h,iridescence_fragment:vh,bumpmap_pars_fragment:Mh,clipping_planes_fragment:xh,clipping_planes_pars_fragment:Sh,clipping_planes_pars_vertex:yh,clipping_planes_vertex:wh,color_fragment:Eh,color_pars_fragment:Th,color_pars_vertex:bh,color_vertex:Ah,common:Rh,cube_uv_reflection_fragment:Ph,defaultnormal_vertex:Ch,displacementmap_pars_vertex:Lh,displacementmap_vertex:Ih,emissivemap_fragment:Dh,emissivemap_pars_fragment:Uh,colorspace_fragment:Nh,colorspace_pars_fragment:Oh,envmap_fragment:Fh,envmap_common_pars_fragment:Bh,envmap_pars_fragment:Gh,envmap_pars_vertex:kh,envmap_physical_pars_fragment:$h,envmap_vertex:zh,fog_vertex:Vh,fog_pars_vertex:Hh,fog_fragment:Wh,fog_pars_fragment:Xh,gradientmap_pars_fragment:qh,lightmap_fragment:Yh,lightmap_pars_fragment:Zh,lights_lambert_fragment:Kh,lights_lambert_pars_fragment:Jh,lights_pars_begin:jh,lights_toon_fragment:Qh,lights_toon_pars_fragment:tu,lights_phong_fragment:eu,lights_phong_pars_fragment:nu,lights_physical_fragment:iu,lights_physical_pars_fragment:su,lights_fragment_begin:ru,lights_fragment_maps:ou,lights_fragment_end:au,logdepthbuf_fragment:cu,logdepthbuf_pars_fragment:lu,logdepthbuf_pars_vertex:hu,logdepthbuf_vertex:uu,map_fragment:du,map_pars_fragment:fu,map_particle_fragment:pu,map_particle_pars_fragment:mu,metalnessmap_fragment:gu,metalnessmap_pars_fragment:_u,morphcolor_vertex:vu,morphnormal_vertex:Mu,morphtarget_pars_vertex:xu,morphtarget_vertex:Su,normal_fragment_begin:yu,normal_fragment_maps:wu,normal_pars_fragment:Eu,normal_pars_vertex:Tu,normal_vertex:bu,normalmap_pars_fragment:Au,clearcoat_normal_fragment_begin:Ru,clearcoat_normal_fragment_maps:Pu,clearcoat_pars_fragment:Cu,iridescence_pars_fragment:Lu,opaque_fragment:Iu,packing:Du,premultiplied_alpha_fragment:Uu,project_vertex:Nu,dithering_fragment:Ou,dithering_pars_fragment:Fu,roughnessmap_fragment:Bu,roughnessmap_pars_fragment:Gu,shadowmap_pars_fragment:ku,shadowmap_pars_vertex:zu,shadowmap_vertex:Vu,shadowmask_pars_fragment:Hu,skinbase_vertex:Wu,skinning_pars_vertex:Xu,skinning_vertex:qu,skinnormal_vertex:Yu,specularmap_fragment:Zu,specularmap_pars_fragment:Ku,tonemapping_fragment:Ju,tonemapping_pars_fragment:ju,transmission_fragment:$u,transmission_pars_fragment:Qu,uv_pars_fragment:td,uv_pars_vertex:ed,uv_vertex:nd,worldpos_vertex:id,background_vert:sd,background_frag:rd,backgroundCube_vert:od,backgroundCube_frag:ad,cube_vert:cd,cube_frag:ld,depth_vert:hd,depth_frag:ud,distanceRGBA_vert:dd,distanceRGBA_frag:fd,equirect_vert:pd,equirect_frag:md,linedashed_vert:gd,linedashed_frag:_d,meshbasic_vert:vd,meshbasic_frag:Md,meshlambert_vert:xd,meshlambert_frag:Sd,meshmatcap_vert:yd,meshmatcap_frag:wd,meshnormal_vert:Ed,meshnormal_frag:Td,meshphong_vert:bd,meshphong_frag:Ad,meshphysical_vert:Rd,meshphysical_frag:Pd,meshtoon_vert:Cd,meshtoon_frag:Ld,points_vert:Id,points_frag:Dd,shadow_vert:Ud,shadow_frag:Nd,sprite_vert:Od,sprite_frag:Fd},bt={common:{diffuse:{value:new ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new ie(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},on={basic:{uniforms:Ne([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ne([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ie(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ne([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new ie(0)},specular:{value:new ie(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ne([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ne([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new ie(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ne([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ne([bt.points,bt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ne([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ne([bt.common,bt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ne([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ne([bt.sprite,bt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:Ne([bt.common,bt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:Ne([bt.lights,bt.fog,{color:{value:new ie(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};on.physical={uniforms:Ne([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new ie(0)},specularColor:{value:new ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const gs={r:0,b:0,g:0};function Bd(s,t,e,n,i,r,a){const o=new ie(0);let c=r===!0?0:1,h,u,d=null,l=0,f=null;function _(m,p){let w=!1,g=p.isScene===!0?p.background:null;g&&g.isTexture&&(g=(p.backgroundBlurriness>0?e:t).get(g)),g===null?M(o,c):g&&g.isColor&&(M(g,1),w=!0);const v=s.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||w)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Is)?(u===void 0&&(u=new A(new st(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Ti(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=oe.getTransfer(g.colorSpace)!==he,(d!==g||l!==g.version||f!==s.toneMapping)&&(u.material.needsUpdate=!0,d=g,l=g.version,f=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(h===void 0&&(h=new A(new jt(2,2),new Kn({name:"BackgroundMaterial",uniforms:Ti(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=g,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=oe.getTransfer(g.colorSpace)!==he,g.matrixAutoUpdate===!0&&g.updateMatrix(),h.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||l!==g.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,d=g,l=g.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null))}function M(m,p){m.getRGB(gs,Qa(s)),n.buffers.color.setClear(gs.r,gs.g,gs.b,p,a)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),c=p,M(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,M(o,c)},render:_}}function Gd(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},c=m(null);let h=c,u=!1;function d(O,z,H,it,nt){let Y=!1;if(a){const ot=M(it,H,z);h!==ot&&(h=ot,f(h.object)),Y=p(O,it,H,nt),Y&&w(O,it,H,nt)}else{const ot=z.wireframe===!0;(h.geometry!==it.id||h.program!==H.id||h.wireframe!==ot)&&(h.geometry=it.id,h.program=H.id,h.wireframe=ot,Y=!0)}nt!==null&&e.update(nt,s.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,B(O,z,H,it),nt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(nt).buffer))}function l(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function f(O){return n.isWebGL2?s.bindVertexArray(O):r.bindVertexArrayOES(O)}function _(O){return n.isWebGL2?s.deleteVertexArray(O):r.deleteVertexArrayOES(O)}function M(O,z,H){const it=H.wireframe===!0;let nt=o[O.id];nt===void 0&&(nt={},o[O.id]=nt);let Y=nt[z.id];Y===void 0&&(Y={},nt[z.id]=Y);let ot=Y[it];return ot===void 0&&(ot=m(l()),Y[it]=ot),ot}function m(O){const z=[],H=[],it=[];for(let nt=0;nt<i;nt++)z[nt]=0,H[nt]=0,it[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:H,attributeDivisors:it,object:O,attributes:{},index:null}}function p(O,z,H,it){const nt=h.attributes,Y=z.attributes;let ot=0;const K=H.getAttributes();for(const pt in K)if(K[pt].location>=0){const lt=nt[pt];let xt=Y[pt];if(xt===void 0&&(pt==="instanceMatrix"&&O.instanceMatrix&&(xt=O.instanceMatrix),pt==="instanceColor"&&O.instanceColor&&(xt=O.instanceColor)),lt===void 0||lt.attribute!==xt||xt&&lt.data!==xt.data)return!0;ot++}return h.attributesNum!==ot||h.index!==it}function w(O,z,H,it){const nt={},Y=z.attributes;let ot=0;const K=H.getAttributes();for(const pt in K)if(K[pt].location>=0){let lt=Y[pt];lt===void 0&&(pt==="instanceMatrix"&&O.instanceMatrix&&(lt=O.instanceMatrix),pt==="instanceColor"&&O.instanceColor&&(lt=O.instanceColor));const xt={};xt.attribute=lt,lt&&lt.data&&(xt.data=lt.data),nt[pt]=xt,ot++}h.attributes=nt,h.attributesNum=ot,h.index=it}function g(){const O=h.newAttributes;for(let z=0,H=O.length;z<H;z++)O[z]=0}function v(O){D(O,0)}function D(O,z){const H=h.newAttributes,it=h.enabledAttributes,nt=h.attributeDivisors;H[O]=1,it[O]===0&&(s.enableVertexAttribArray(O),it[O]=1),nt[O]!==z&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,z),nt[O]=z)}function C(){const O=h.newAttributes,z=h.enabledAttributes;for(let H=0,it=z.length;H<it;H++)z[H]!==O[H]&&(s.disableVertexAttribArray(H),z[H]=0)}function L(O,z,H,it,nt,Y,ot){ot===!0?s.vertexAttribIPointer(O,z,H,nt,Y):s.vertexAttribPointer(O,z,H,it,nt,Y)}function B(O,z,H,it){if(n.isWebGL2===!1&&(O.isInstancedMesh||it.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const nt=it.attributes,Y=H.getAttributes(),ot=z.defaultAttributeValues;for(const K in Y){const pt=Y[K];if(pt.location>=0){let j=nt[K];if(j===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(j=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(j=O.instanceColor)),j!==void 0){const lt=j.normalized,xt=j.itemSize,Lt=e.get(j);if(Lt===void 0)continue;const yt=Lt.buffer,Ot=Lt.type,Gt=Lt.bytesPerElement,Pt=n.isWebGL2===!0&&(Ot===s.INT||Ot===s.UNSIGNED_INT||j.gpuType===Ua);if(j.isInterleavedBufferAttribute){const St=j.data,U=St.stride,ft=j.offset;if(St.isInstancedInterleavedBuffer){for(let tt=0;tt<pt.locationSize;tt++)D(pt.location+tt,St.meshPerAttribute);O.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let tt=0;tt<pt.locationSize;tt++)v(pt.location+tt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let tt=0;tt<pt.locationSize;tt++)L(pt.location+tt,xt/pt.locationSize,Ot,lt,U*Gt,(ft+xt/pt.locationSize*tt)*Gt,Pt)}else{if(j.isInstancedBufferAttribute){for(let St=0;St<pt.locationSize;St++)D(pt.location+St,j.meshPerAttribute);O.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let St=0;St<pt.locationSize;St++)v(pt.location+St);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let St=0;St<pt.locationSize;St++)L(pt.location+St,xt/pt.locationSize,Ot,lt,xt*Gt,xt/pt.locationSize*St*Gt,Pt)}}else if(ot!==void 0){const lt=ot[K];if(lt!==void 0)switch(lt.length){case 2:s.vertexAttrib2fv(pt.location,lt);break;case 3:s.vertexAttrib3fv(pt.location,lt);break;case 4:s.vertexAttrib4fv(pt.location,lt);break;default:s.vertexAttrib1fv(pt.location,lt)}}}}C()}function y(){Z();for(const O in o){const z=o[O];for(const H in z){const it=z[H];for(const nt in it)_(it[nt].object),delete it[nt];delete z[H]}delete o[O]}}function E(O){if(o[O.id]===void 0)return;const z=o[O.id];for(const H in z){const it=z[H];for(const nt in it)_(it[nt].object),delete it[nt];delete z[H]}delete o[O.id]}function P(O){for(const z in o){const H=o[z];if(H[O.id]===void 0)continue;const it=H[O.id];for(const nt in it)_(it[nt].object),delete it[nt];delete H[O.id]}}function Z(){at(),u=!0,h!==c&&(h=c,f(h.object))}function at(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:at,dispose:y,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:v,disableUnusedAttributes:C}}function kd(s,t,e,n){const i=n.isWebGL2;let r;function a(u){r=u}function o(u,d){s.drawArrays(r,u,d),e.update(d,r,1)}function c(u,d,l){if(l===0)return;let f,_;if(i)f=s,_="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[_](r,u,d,l),e.update(d,r,l)}function h(u,d,l){if(l===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<l;_++)this.render(u[_],d[_]);else{f.multiDrawArraysWEBGL(r,u,0,d,0,l);let _=0;for(let M=0;M<l;M++)_+=d[M];e.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=h}function zd(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(L){if(L==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const c=r(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const h=a||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),g=l>0,v=a||t.has("OES_texture_float"),D=g&&v,C=a?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:i,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:l,maxTextureSize:f,maxCubemapSize:_,maxAttributes:M,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:w,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:D,maxSamples:C}}function Vd(s){const t=this;let e=null,n=0,i=!1,r=!1;const a=new zn,o=new ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,l){const f=d.length!==0||l||n!==0||i;return i=l,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,l){e=u(d,l,0)},this.setState=function(d,l,f){const _=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!i||_===null||_.length===0||r&&!m)r?u(null):h();else{const w=r?0:n,g=w*4;let v=p.clippingState||null;c.value=v,v=u(_,l,g,f);for(let D=0;D!==g;++D)v[D]=e[D];p.clippingState=v,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=w}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,l,f,_){const M=d!==null?d.length:0;let m=null;if(M!==0){if(m=c.value,_!==!0||m===null){const p=f+M*4,w=l.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let g=0,v=f;g!==M;++g,v+=4)a.copy(d[g]).applyMatrix4(w,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}function Hd(s){let t=new WeakMap;function e(a,o){return o===Ar?a.mapping=Si:o===Rr&&(a.mapping=yi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ar||o===Rr)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new eh(c.height/2);return h.fromEquirectangularTexture(s,a),t.set(a,h),a.addEventListener("dispose",i),e(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class ic extends tc{constructor(t=-1,e=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const gi=4,Ko=[.125,.215,.35,.446,.526,.582],Wn=20,fr=new ic,Jo=new ie;let pr=null,mr=0,gr=0;const Vn=(1+Math.sqrt(5))/2,pi=1/Vn,jo=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Vn,pi),new N(0,Vn,-pi),new N(pi,0,Vn),new N(-pi,0,Vn),new N(Vn,pi,0),new N(-Vn,pi,0)];class $o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){pr=this._renderer.getRenderTarget(),mr=this._renderer.getActiveCubeFace(),gr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ea(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ta(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pr,mr,gr),t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pr=this._renderer.getRenderTarget(),mr=this._renderer.getActiveCubeFace(),gr=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:Hi,format:tn,colorSpace:Mn,depthBuffer:!1},i=Qo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qo(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wd(r)),this._blurMaterial=Xd(r,t,e)}return i}_compileMaterial(t){const e=new A(this._lodPlanes[0],t);this._renderer.compile(e,fr)}_sceneToCubeUV(t,e,n,i){const o=new Be(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,l=u.toneMapping;u.getClearColor(Jo),u.toneMapping=Cn,u.autoClear=!1;const f=new pe({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),_=new A(new st,f);let M=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,M=!0):(f.color.copy(Jo),M=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):w===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));const g=this._cubeSize;_s(i,w*g,p>2?g:0,g,g),u.setRenderTarget(i),M&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=l,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Si||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ea()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ta());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new A(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;_s(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=jo[(i-1)%jo.length];this._blur(t,i-1,i,r,a)}e.autoClear=n}_blur(t,e,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",r),this._halfBlur(a,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new A(this._lodPlanes[i],h),l=h.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Wn-1),M=r/_,m=isFinite(r)?1+Math.floor(u*M):Wn;m>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wn}`);const p=[];let w=0;for(let L=0;L<Wn;++L){const B=L/M,y=Math.exp(-B*B/2);p.push(y),L===0?w+=y:L<m&&(w+=2*y)}for(let L=0;L<p.length;L++)p[L]=p[L]/w;l.envMap.value=t.texture,l.samples.value=m,l.weights.value=p,l.latitudinal.value=a==="latitudinal",o&&(l.poleAxis.value=o);const{_lodMax:g}=this;l.dTheta.value=_,l.mipInt.value=g-n;const v=this._sizeLods[i],D=3*v*(i>g-gi?i-g+gi:0),C=4*(this._cubeSize-v);_s(e,D,C,3*v,2*v),c.setRenderTarget(e),c.render(d,fr)}}function Wd(s){const t=[],e=[],n=[];let i=s;const r=s-gi+1+Ko.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);let c=1/o;a>s-gi?c=Ko[a-s+gi-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),u=-h,d=1+h,l=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,M=3,m=2,p=1,w=new Float32Array(M*_*f),g=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let C=0;C<f;C++){const L=C%3*2/3-1,B=C>2?0:-1,y=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];w.set(y,M*_*C),g.set(l,m*_*C);const E=[C,C,C,C,C,C];v.set(E,p*_*C)}const D=new De;D.setAttribute("position",new an(w,M)),D.setAttribute("uv",new an(g,m)),D.setAttribute("faceIndex",new an(v,p)),t.push(D),i>gi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qo(s,t,e){const n=new Zn(s,t,e);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Xd(s,t,e){const n=new Float32Array(Wn),i=new N(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ta(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function ea(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function kr(){return`

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
	`}function qd(s){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===Ar||c===Rr,u=c===Si||c===yi;if(h||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new $o(s)),d=h?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{const d=o.image;if(h&&d&&d.height>0||u&&d&&i(d)){e===null&&(e=new $o(s));const l=h?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,l),o.addEventListener("dispose",r),l.texture}else return null}}}return o}function i(o){let c=0;const h=6;for(let u=0;u<h;u++)o[u]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Yd(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Zd(s,t,e,n){const i={},r=new WeakMap;function a(d){const l=d.target;l.index!==null&&t.remove(l.index);for(const _ in l.attributes)t.remove(l.attributes[_]);for(const _ in l.morphAttributes){const M=l.morphAttributes[_];for(let m=0,p=M.length;m<p;m++)t.remove(M[m])}l.removeEventListener("dispose",a),delete i[l.id];const f=r.get(l);f&&(t.remove(f),r.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,e.memory.geometries--}function o(d,l){return i[l.id]===!0||(l.addEventListener("dispose",a),i[l.id]=!0,e.memory.geometries++),l}function c(d){const l=d.attributes;for(const _ in l)t.update(l[_],s.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const M=f[_];for(let m=0,p=M.length;m<p;m++)t.update(M[m],s.ARRAY_BUFFER)}}function h(d){const l=[],f=d.index,_=d.attributes.position;let M=0;if(f!==null){const w=f.array;M=f.version;for(let g=0,v=w.length;g<v;g+=3){const D=w[g+0],C=w[g+1],L=w[g+2];l.push(D,C,C,L,L,D)}}else if(_!==void 0){const w=_.array;M=_.version;for(let g=0,v=w.length/3-1;g<v;g+=3){const D=g+0,C=g+1,L=g+2;l.push(D,C,C,L,L,D)}}else return;const m=new(Wa(l)?$a:ja)(l,1);m.version=M;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const l=r.get(d);if(l){const f=d.index;f!==null&&l.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function Kd(s,t,e,n){const i=n.isWebGL2;let r;function a(f){r=f}let o,c;function h(f){o=f.type,c=f.bytesPerElement}function u(f,_){s.drawElements(r,_,o,f*c),e.update(_,r,1)}function d(f,_,M){if(M===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,_,o,f*c,M),e.update(_,r,M)}function l(f,_,M){if(M===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<M;p++)this.render(f[p]/c,_[p]);else{m.multiDrawElementsWEBGL(r,_,0,o,f,0,M);let p=0;for(let w=0;w<M;w++)p+=_[w];e.update(p,r,1)}}this.setMode=a,this.setIndex=h,this.render=u,this.renderInstances=d,this.renderMultiDraw=l}function Jd(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=o*(r/3);break;case s.LINES:e.lines+=o*(r/2);break;case s.LINE_STRIP:e.lines+=o*(r-1);break;case s.LINE_LOOP:e.lines+=o*r;break;case s.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function jd(s,t){return s[0]-t[0]}function $d(s,t){return Math.abs(t[1])-Math.abs(s[1])}function Qd(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,a=new ue,o=[];for(let h=0;h<8;h++)o[h]=[h,0];function c(h,u,d){const l=h.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,M=_!==void 0?_.length:0;let m=r.get(u);if(m===void 0||m.count!==M){let z=function(){at.dispose(),r.delete(u),u.removeEventListener("dispose",z)};var f=z;m!==void 0&&m.texture.dispose();const g=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,D=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],L=u.morphAttributes.normal||[],B=u.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),D===!0&&(y=3);let E=u.attributes.position.count*y,P=1;E>t.maxTextureSize&&(P=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const Z=new Float32Array(E*P*4*M),at=new Ya(Z,E,P,M);at.type=Rn,at.needsUpdate=!0;const O=y*4;for(let H=0;H<M;H++){const it=C[H],nt=L[H],Y=B[H],ot=E*P*4*H;for(let K=0;K<it.count;K++){const pt=K*O;g===!0&&(a.fromBufferAttribute(it,K),Z[ot+pt+0]=a.x,Z[ot+pt+1]=a.y,Z[ot+pt+2]=a.z,Z[ot+pt+3]=0),v===!0&&(a.fromBufferAttribute(nt,K),Z[ot+pt+4]=a.x,Z[ot+pt+5]=a.y,Z[ot+pt+6]=a.z,Z[ot+pt+7]=0),D===!0&&(a.fromBufferAttribute(Y,K),Z[ot+pt+8]=a.x,Z[ot+pt+9]=a.y,Z[ot+pt+10]=a.z,Z[ot+pt+11]=Y.itemSize===4?a.w:1)}}m={count:M,texture:at,size:new Tt(E,P)},r.set(u,m),u.addEventListener("dispose",z)}let p=0;for(let g=0;g<l.length;g++)p+=l[g];const w=u.morphTargetsRelative?1:1-p;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",l),d.getUniforms().setValue(s,"morphTargetsTexture",m.texture,e),d.getUniforms().setValue(s,"morphTargetsTextureSize",m.size)}else{const _=l===void 0?0:l.length;let M=n[u.id];if(M===void 0||M.length!==_){M=[];for(let v=0;v<_;v++)M[v]=[v,0];n[u.id]=M}for(let v=0;v<_;v++){const D=M[v];D[0]=v,D[1]=l[v]}M.sort($d);for(let v=0;v<8;v++)v<_&&M[v][1]?(o[v][0]=M[v][0],o[v][1]=M[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(jd);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let w=0;for(let v=0;v<8;v++){const D=o[v],C=D[0],L=D[1];C!==Number.MAX_SAFE_INTEGER&&L?(m&&u.getAttribute("morphTarget"+v)!==m[C]&&u.setAttribute("morphTarget"+v,m[C]),p&&u.getAttribute("morphNormal"+v)!==p[C]&&u.setAttribute("morphNormal"+v,p[C]),i[v]=L,w+=L):(m&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),i[v]=0)}const g=u.morphTargetsRelative?1:1-w;d.getUniforms().setValue(s,"morphTargetBaseInfluence",g),d.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function tf(s,t,e,n){let i=new WeakMap;function r(c){const h=n.render.frame,u=c.geometry,d=t.get(c,u);if(i.get(d)!==h&&(t.update(d),i.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const l=c.skeleton;i.get(l)!==h&&(l.update(),i.set(l,h))}return d}function a(){i=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class sc extends Ge{constructor(t,e,n,i,r,a,o,c,h,u){if(u=u!==void 0?u:qn,u!==qn&&u!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===qn&&(n=An),n===void 0&&u===wi&&(n=Xn),super(null,i,r,a,o,c,u,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=c!==void 0?c:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rc=new Ge,oc=new sc(1,1);oc.compareFunction=Ha;const ac=new Ya,cc=new Bl,lc=new ec,na=[],ia=[],sa=new Float32Array(16),ra=new Float32Array(9),oa=new Float32Array(4);function Ri(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=na[i];if(r===void 0&&(r=new Float32Array(i),na[i]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,s[a].toArray(r,o)}return r}function Se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Os(s,t){let e=ia[t];e===void 0&&(e=new Int32Array(t),ia[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ef(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function nf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function sf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function rf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function of(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;oa.set(n),s.uniformMatrix2fv(this.addr,!1,oa),ye(e,n)}}function af(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;ra.set(n),s.uniformMatrix3fv(this.addr,!1,ra),ye(e,n)}}function cf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;sa.set(n),s.uniformMatrix4fv(this.addr,!1,sa),ye(e,n)}}function lf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function df(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function ff(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function pf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function mf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function _f(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?oc:rc;e.setTexture2D(t||r,i)}function vf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cc,i)}function Mf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lc,i)}function xf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ac,i)}function Sf(s){switch(s){case 5126:return ef;case 35664:return nf;case 35665:return sf;case 35666:return rf;case 35674:return of;case 35675:return af;case 35676:return cf;case 5124:case 35670:return lf;case 35667:case 35671:return hf;case 35668:case 35672:return uf;case 35669:case 35673:return df;case 5125:return ff;case 36294:return pf;case 36295:return mf;case 36296:return gf;case 35678:case 36198:case 36298:case 36306:case 35682:return _f;case 35679:case 36299:case 36307:return vf;case 35680:case 36300:case 36308:case 36293:return Mf;case 36289:case 36303:case 36311:case 36292:return xf}}function yf(s,t){s.uniform1fv(this.addr,t)}function wf(s,t){const e=Ri(t,this.size,2);s.uniform2fv(this.addr,e)}function Ef(s,t){const e=Ri(t,this.size,3);s.uniform3fv(this.addr,e)}function Tf(s,t){const e=Ri(t,this.size,4);s.uniform4fv(this.addr,e)}function bf(s,t){const e=Ri(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Af(s,t){const e=Ri(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Rf(s,t){const e=Ri(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Pf(s,t){s.uniform1iv(this.addr,t)}function Cf(s,t){s.uniform2iv(this.addr,t)}function Lf(s,t){s.uniform3iv(this.addr,t)}function If(s,t){s.uniform4iv(this.addr,t)}function Df(s,t){s.uniform1uiv(this.addr,t)}function Uf(s,t){s.uniform2uiv(this.addr,t)}function Nf(s,t){s.uniform3uiv(this.addr,t)}function Of(s,t){s.uniform4uiv(this.addr,t)}function Ff(s,t,e){const n=this.cache,i=t.length,r=Os(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||rc,r[a])}function Bf(s,t,e){const n=this.cache,i=t.length,r=Os(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||cc,r[a])}function Gf(s,t,e){const n=this.cache,i=t.length,r=Os(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||lc,r[a])}function kf(s,t,e){const n=this.cache,i=t.length,r=Os(e,i);Se(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||ac,r[a])}function zf(s){switch(s){case 5126:return yf;case 35664:return wf;case 35665:return Ef;case 35666:return Tf;case 35674:return bf;case 35675:return Af;case 35676:return Rf;case 5124:case 35670:return Pf;case 35667:case 35671:return Cf;case 35668:case 35672:return Lf;case 35669:case 35673:return If;case 5125:return Df;case 36294:return Uf;case 36295:return Nf;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Ff;case 35679:case 36299:case 36307:return Bf;case 35680:case 36300:case 36308:case 36293:return Gf;case 36289:case 36303:case 36311:case 36292:return kf}}class Vf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sf(e.type)}}class Hf{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zf(e.type)}}class Wf{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(t,e[o.id],n)}}}const _r=/(\w+)(\])?(\[|\.)?/g;function aa(s,t){s.seq.push(t),s.map[t.id]=t}function Xf(s,t,e){const n=s.name,i=n.length;for(_r.lastIndex=0;;){const r=_r.exec(n),a=_r.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){aa(e,h===void 0?new Vf(o,s,t):new Hf(o,s,t));break}else{let d=e.map[o];d===void 0&&(d=new Wf(o),aa(e,d)),e=d}}}class ys{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),a=t.getUniformLocation(e,r.name);Xf(r,a,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function ca(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const qf=37297;let Yf=0;function Zf(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Kf(s){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(s);let n;switch(t===e?n="":t===bs&&e===Ts?n="LinearDisplayP3ToLinearSRGB":t===Ts&&e===bs&&(n="LinearSRGBToLinearDisplayP3"),s){case Mn:case Ds:return[n,"LinearTransferOETF"];case Ae:case Fr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function la(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Zf(s.getShaderSource(t),a)}else return i}function Jf(s,t){const e=Kf(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function jf(s,t){let e;switch(t){case Kc:e="Linear";break;case Jc:e="Reinhard";break;case jc:e="OptimizedCineon";break;case Ia:e="ACESFilmic";break;case Qc:e="AgX";break;case $c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $f(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_i).join(`
`)}function Qf(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(_i).join(`
`)}function tp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ep(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:s.getAttribLocation(t,a),locationSize:o}}return e}function _i(s){return s!==""}function ha(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ua(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ir(s){return s.replace(np,sp)}const ip=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sp(s,t){let e=te[t];if(e===void 0){const n=ip.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ir(e)}const rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function da(s){return s.replace(rp,op)}function op(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fa(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ap(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pa?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ca?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===gn&&(t="SHADOWMAP_TYPE_VSM"),t}function cp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Si:case yi:t="ENVMAP_TYPE_CUBE";break;case Is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function hp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case La:t="ENVMAP_BLENDING_MULTIPLY";break;case Yc:t="ENVMAP_BLENDING_MIX";break;case Zc:t="ENVMAP_BLENDING_ADD";break}return t}function up(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dp(s,t,e,n){const i=s.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=ap(e),h=cp(e),u=lp(e),d=hp(e),l=up(e),f=e.isWebGL2?"":$f(e),_=Qf(e),M=tp(r),m=i.createProgram();let p,w,g=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(_i).join(`
`),p.length>0&&(p+=`
`),w=[f,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(_i).join(`
`),w.length>0&&(w+=`
`)):(p=[fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_i).join(`
`),w=[f,fa(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",l?"#define CUBEUV_TEXEL_WIDTH "+l.texelWidth:"",l?"#define CUBEUV_TEXEL_HEIGHT "+l.texelHeight:"",l?"#define CUBEUV_MAX_MIP "+l.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Cn?"#define TONE_MAPPING":"",e.toneMapping!==Cn?te.tonemapping_pars_fragment:"",e.toneMapping!==Cn?jf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,Jf("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_i).join(`
`)),a=Ir(a),a=ha(a,e),a=ua(a,e),o=Ir(o),o=ha(o,e),o=ua(o,e),a=da(a),o=da(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,w=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Lo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const v=g+p+a,D=g+w+o,C=ca(i,i.VERTEX_SHADER,v),L=ca(i,i.FRAGMENT_SHADER,D);i.attachShader(m,C),i.attachShader(m,L),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function B(Z){if(s.debug.checkShaderErrors){const at=i.getProgramInfoLog(m).trim(),O=i.getShaderInfoLog(C).trim(),z=i.getShaderInfoLog(L).trim();let H=!0,it=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,C,L);else{const nt=la(i,C,"vertex"),Y=la(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+at+`
`+nt+`
`+Y)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(O===""||z==="")&&(it=!1);it&&(Z.diagnostics={runnable:H,programLog:at,vertexShader:{log:O,prefix:p},fragmentShader:{log:z,prefix:w}})}i.deleteShader(C),i.deleteShader(L),y=new ys(i,m),E=ep(i,m)}let y;this.getUniforms=function(){return y===void 0&&B(this),y};let E;this.getAttributes=function(){return E===void 0&&B(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(m,qf)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Yf++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=C,this.fragmentShader=L,this}let fp=0;class pp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mp(t),e.set(t,n)),n}}class mp{constructor(t){this.id=fp++,this.code=t,this.usedTimes=0}}function gp(s,t,e,n,i,r,a){const o=new Ka,c=new pp,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,l=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return y===0?"uv":`uv${y}`}function m(y,E,P,Z,at){const O=Z.fog,z=at.geometry,H=y.isMeshStandardMaterial?Z.environment:null,it=(y.isMeshStandardMaterial?e:t).get(y.envMap||H),nt=it&&it.mapping===Is?it.image.height:null,Y=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ot=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,K=ot!==void 0?ot.length:0;let pt=0;z.morphAttributes.position!==void 0&&(pt=1),z.morphAttributes.normal!==void 0&&(pt=2),z.morphAttributes.color!==void 0&&(pt=3);let j,lt,xt,Lt;if(Y){const Xt=on[Y];j=Xt.vertexShader,lt=Xt.fragmentShader}else j=y.vertexShader,lt=y.fragmentShader,c.update(y),xt=c.getVertexShaderID(y),Lt=c.getFragmentShaderID(y);const yt=s.getRenderTarget(),Ot=at.isInstancedMesh===!0,Gt=at.isBatchedMesh===!0,Pt=!!y.map,St=!!y.matcap,U=!!it,ft=!!y.aoMap,tt=!!y.lightMap,mt=!!y.bumpMap,Q=!!y.normalMap,Nt=!!y.displacementMap,vt=!!y.emissiveMap,b=!!y.metalnessMap,S=!!y.roughnessMap,V=y.anisotropy>0,ht=y.clearcoat>0,dt=y.iridescence>0,rt=y.sheen>0,Dt=y.transmission>0,Mt=V&&!!y.anisotropyMap,At=ht&&!!y.clearcoatMap,Ft=ht&&!!y.clearcoatNormalMap,wt=ht&&!!y.clearcoatRoughnessMap,ct=dt&&!!y.iridescenceMap,Jt=dt&&!!y.iridescenceThicknessMap,Ht=rt&&!!y.sheenColorMap,kt=rt&&!!y.sheenRoughnessMap,Ut=!!y.specularMap,Ct=!!y.specularColorMap,Bt=!!y.specularIntensityMap,Yt=Dt&&!!y.transmissionMap,re=Dt&&!!y.thicknessMap,Wt=!!y.gradientMap,gt=!!y.alphaMap,x=y.alphaTest>0,F=!!y.alphaHash,J=!!y.extensions,k=!!z.attributes.uv1,q=!!z.attributes.uv2,et=!!z.attributes.uv3;let _t=Cn;return y.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(_t=s.toneMapping),{isWebGL2:u,shaderID:Y,shaderType:y.type,shaderName:y.name,vertexShader:j,fragmentShader:lt,defines:y.defines,customVertexShaderID:xt,customFragmentShaderID:Lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Gt,instancing:Ot,instancingColor:Ot&&at.instanceColor!==null,supportsVertexTextures:l,outputColorSpace:yt===null?s.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Mn,map:Pt,matcap:St,envMap:U,envMapMode:U&&it.mapping,envMapCubeUVHeight:nt,aoMap:ft,lightMap:tt,bumpMap:mt,normalMap:Q,displacementMap:l&&Nt,emissiveMap:vt,normalMapObjectSpace:Q&&y.normalMapType===ul,normalMapTangentSpace:Q&&y.normalMapType===Va,metalnessMap:b,roughnessMap:S,anisotropy:V,anisotropyMap:Mt,clearcoat:ht,clearcoatMap:At,clearcoatNormalMap:Ft,clearcoatRoughnessMap:wt,iridescence:dt,iridescenceMap:ct,iridescenceThicknessMap:Jt,sheen:rt,sheenColorMap:Ht,sheenRoughnessMap:kt,specularMap:Ut,specularColorMap:Ct,specularIntensityMap:Bt,transmission:Dt,transmissionMap:Yt,thicknessMap:re,gradientMap:Wt,opaque:y.transparent===!1&&y.blending===Mi,alphaMap:gt,alphaTest:x,alphaHash:F,combine:y.combine,mapUv:Pt&&M(y.map.channel),aoMapUv:ft&&M(y.aoMap.channel),lightMapUv:tt&&M(y.lightMap.channel),bumpMapUv:mt&&M(y.bumpMap.channel),normalMapUv:Q&&M(y.normalMap.channel),displacementMapUv:Nt&&M(y.displacementMap.channel),emissiveMapUv:vt&&M(y.emissiveMap.channel),metalnessMapUv:b&&M(y.metalnessMap.channel),roughnessMapUv:S&&M(y.roughnessMap.channel),anisotropyMapUv:Mt&&M(y.anisotropyMap.channel),clearcoatMapUv:At&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:wt&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:kt&&M(y.sheenRoughnessMap.channel),specularMapUv:Ut&&M(y.specularMap.channel),specularColorMapUv:Ct&&M(y.specularColorMap.channel),specularIntensityMapUv:Bt&&M(y.specularIntensityMap.channel),transmissionMapUv:Yt&&M(y.transmissionMap.channel),thicknessMapUv:re&&M(y.thicknessMap.channel),alphaMapUv:gt&&M(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Q||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:k,vertexUv2s:q,vertexUv3s:et,pointsUvs:at.isPoints===!0&&!!z.attributes.uv&&(Pt||gt),fog:!!O,useFog:y.fog===!0,fogExp2:O&&O.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:at.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:pt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:_t,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Pt&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Re,flipSided:y.side===Fe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:J&&y.extensions.derivatives===!0,extensionFragDepth:J&&y.extensions.fragDepth===!0,extensionDrawBuffers:J&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:J&&y.extensions.shaderTextureLOD===!0,extensionClipCullDistance:J&&y.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)E.push(P),E.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(w(E,y),g(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function w(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function g(y,E){o.disableAll(),E.isWebGL2&&o.enable(0),E.supportsVertexTextures&&o.enable(1),E.instancing&&o.enable(2),E.instancingColor&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.skinning&&o.enable(4),E.morphTargets&&o.enable(5),E.morphNormals&&o.enable(6),E.morphColors&&o.enable(7),E.premultipliedAlpha&&o.enable(8),E.shadowMapEnabled&&o.enable(9),E.useLegacyLights&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),y.push(o.mask)}function v(y){const E=_[y.type];let P;if(E){const Z=on[E];P=jl.clone(Z.uniforms)}else P=y.uniforms;return P}function D(y,E){let P;for(let Z=0,at=h.length;Z<at;Z++){const O=h[Z];if(O.cacheKey===E){P=O,++P.usedTimes;break}}return P===void 0&&(P=new dp(s,E,y,r),h.push(P)),P}function C(y){if(--y.usedTimes===0){const E=h.indexOf(y);h[E]=h[h.length-1],h.pop(),y.destroy()}}function L(y){c.remove(y)}function B(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:B}}function _p(){let s=new WeakMap;function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function e(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function vp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function pa(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function ma(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function a(d,l,f,_,M,m){let p=s[t];return p===void 0?(p={id:d.id,object:d,geometry:l,material:f,groupOrder:_,renderOrder:d.renderOrder,z:M,group:m},s[t]=p):(p.id=d.id,p.object=d,p.geometry=l,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=M,p.group=m),t++,p}function o(d,l,f,_,M,m){const p=a(d,l,f,_,M,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(d,l,f,_,M,m){const p=a(d,l,f,_,M,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function h(d,l){e.length>1&&e.sort(d||vp),n.length>1&&n.sort(l||pa),i.length>1&&i.sort(l||pa)}function u(){for(let d=t,l=s.length;d<l;d++){const f=s[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:h}}function Mp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let a;return r===void 0?(a=new ma,s.set(n,[a])):i>=r.length?(a=new ma,r.push(a)):a=r[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function xp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ie};break;case"SpotLight":e={position:new N,direction:new N,color:new ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ie,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ie,groundColor:new ie};break;case"RectAreaLight":e={color:new ie,position:new N,halfWidth:new N,halfHeight:new N};break}return s[t.id]=e,e}}}function Sp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let yp=0;function wp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ep(s,t){const e=new xp,n=Sp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,a=new _e,o=new _e;function c(u,d){let l=0,f=0,_=0;for(let Z=0;Z<9;Z++)i.probe[Z].set(0,0,0);let M=0,m=0,p=0,w=0,g=0,v=0,D=0,C=0,L=0,B=0,y=0;u.sort(wp);const E=d===!0?Math.PI:1;for(let Z=0,at=u.length;Z<at;Z++){const O=u[Z],z=O.color,H=O.intensity,it=O.distance,nt=O.shadow&&O.shadow.map?O.shadow.map.texture:null;if(O.isAmbientLight)l+=z.r*H*E,f+=z.g*H*E,_+=z.b*H*E;else if(O.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(O.sh.coefficients[Y],H);y++}else if(O.isDirectionalLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*E),O.castShadow){const ot=O.shadow,K=n.get(O);K.shadowBias=ot.bias,K.shadowNormalBias=ot.normalBias,K.shadowRadius=ot.radius,K.shadowMapSize=ot.mapSize,i.directionalShadow[M]=K,i.directionalShadowMap[M]=nt,i.directionalShadowMatrix[M]=O.shadow.matrix,v++}i.directional[M]=Y,M++}else if(O.isSpotLight){const Y=e.get(O);Y.position.setFromMatrixPosition(O.matrixWorld),Y.color.copy(z).multiplyScalar(H*E),Y.distance=it,Y.coneCos=Math.cos(O.angle),Y.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),Y.decay=O.decay,i.spot[p]=Y;const ot=O.shadow;if(O.map&&(i.spotLightMap[L]=O.map,L++,ot.updateMatrices(O),O.castShadow&&B++),i.spotLightMatrix[p]=ot.matrix,O.castShadow){const K=n.get(O);K.shadowBias=ot.bias,K.shadowNormalBias=ot.normalBias,K.shadowRadius=ot.radius,K.shadowMapSize=ot.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=nt,C++}p++}else if(O.isRectAreaLight){const Y=e.get(O);Y.color.copy(z).multiplyScalar(H),Y.halfWidth.set(O.width*.5,0,0),Y.halfHeight.set(0,O.height*.5,0),i.rectArea[w]=Y,w++}else if(O.isPointLight){const Y=e.get(O);if(Y.color.copy(O.color).multiplyScalar(O.intensity*E),Y.distance=O.distance,Y.decay=O.decay,O.castShadow){const ot=O.shadow,K=n.get(O);K.shadowBias=ot.bias,K.shadowNormalBias=ot.normalBias,K.shadowRadius=ot.radius,K.shadowMapSize=ot.mapSize,K.shadowCameraNear=ot.camera.near,K.shadowCameraFar=ot.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=nt,i.pointShadowMatrix[m]=O.shadow.matrix,D++}i.point[m]=Y,m++}else if(O.isHemisphereLight){const Y=e.get(O);Y.skyColor.copy(O.color).multiplyScalar(H*E),Y.groundColor.copy(O.groundColor).multiplyScalar(H*E),i.hemi[g]=Y,g++}}w>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=l,i.ambient[1]=f,i.ambient[2]=_;const P=i.hash;(P.directionalLength!==M||P.pointLength!==m||P.spotLength!==p||P.rectAreaLength!==w||P.hemiLength!==g||P.numDirectionalShadows!==v||P.numPointShadows!==D||P.numSpotShadows!==C||P.numSpotMaps!==L||P.numLightProbes!==y)&&(i.directional.length=M,i.spot.length=p,i.rectArea.length=w,i.point.length=m,i.hemi.length=g,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=D,i.pointShadowMap.length=D,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=D,i.spotLightMatrix.length=C+L-B,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=y,P.directionalLength=M,P.pointLength=m,P.spotLength=p,P.rectAreaLength=w,P.hemiLength=g,P.numDirectionalShadows=v,P.numPointShadows=D,P.numSpotShadows=C,P.numSpotMaps=L,P.numLightProbes=y,i.version=yp++)}function h(u,d){let l=0,f=0,_=0,M=0,m=0;const p=d.matrixWorldInverse;for(let w=0,g=u.length;w<g;w++){const v=u[w];if(v.isDirectionalLight){const D=i.directional[l];D.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),l++}else if(v.isSpotLight){const D=i.spot[_];D.position.setFromMatrixPosition(v.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),_++}else if(v.isRectAreaLight){const D=i.rectArea[M];D.position.setFromMatrixPosition(v.matrixWorld),D.position.applyMatrix4(p),o.identity(),a.copy(v.matrixWorld),a.premultiply(p),o.extractRotation(a),D.halfWidth.set(v.width*.5,0,0),D.halfHeight.set(0,v.height*.5,0),D.halfWidth.applyMatrix4(o),D.halfHeight.applyMatrix4(o),M++}else if(v.isPointLight){const D=i.point[f];D.position.setFromMatrixPosition(v.matrixWorld),D.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const D=i.hemi[m];D.direction.setFromMatrixPosition(v.matrixWorld),D.direction.transformDirection(p),m++}}}return{setup:c,setupView:h,state:i}}function ga(s,t){const e=new Ep(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){e.setup(n,d)}function h(d){e.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o}}function Tp(s,t){let e=new WeakMap;function n(r,a=0){const o=e.get(r);let c;return o===void 0?(c=new ga(s,t),e.set(r,[c])):a>=o.length?(c=new ga(s,t),o.push(c)):c=o[a],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class bp extends Ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ll,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ap extends Ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rp=`void main() {
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
}`;function Cp(s,t,e){let n=new Gr;const i=new Tt,r=new Tt,a=new ue,o=new bp({depthPacking:hl}),c=new Ap,h={},u=e.maxTextureSize,d={[In]:Fe,[Fe]:In,[Re]:Re},l=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:Rp,fragmentShader:Pp}),f=l.clone();f.defines.HORIZONTAL_PASS=1;const _=new De;_.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new A(_,l),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let p=this.type;this.render=function(C,L,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const y=s.getRenderTarget(),E=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Pn),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const at=p!==gn&&this.type===gn,O=p===gn&&this.type!==gn;for(let z=0,H=C.length;z<H;z++){const it=C[z],nt=it.shadow;if(nt===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(nt.autoUpdate===!1&&nt.needsUpdate===!1)continue;i.copy(nt.mapSize);const Y=nt.getFrameExtents();if(i.multiply(Y),r.copy(nt.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/Y.x),i.x=r.x*Y.x,nt.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/Y.y),i.y=r.y*Y.y,nt.mapSize.y=r.y)),nt.map===null||at===!0||O===!0){const K=this.type!==gn?{minFilter:Oe,magFilter:Oe}:{};nt.map!==null&&nt.map.dispose(),nt.map=new Zn(i.x,i.y,K),nt.map.texture.name=it.name+".shadowMap",nt.camera.updateProjectionMatrix()}s.setRenderTarget(nt.map),s.clear();const ot=nt.getViewportCount();for(let K=0;K<ot;K++){const pt=nt.getViewport(K);a.set(r.x*pt.x,r.y*pt.y,r.x*pt.z,r.y*pt.w),Z.viewport(a),nt.updateMatrices(it,K),n=nt.getFrustum(),v(L,B,nt.camera,it,this.type)}nt.isPointLightShadow!==!0&&this.type===gn&&w(nt,B),nt.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(y,E,P)};function w(C,L){const B=t.update(M);l.defines.VSM_SAMPLES!==C.blurSamples&&(l.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,l.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Zn(i.x,i.y)),l.uniforms.shadow_pass.value=C.map.texture,l.uniforms.resolution.value=C.mapSize,l.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(L,null,B,l,M,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(L,null,B,f,M,null)}function g(C,L,B,y){let E=null;const P=B.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)E=P;else if(E=B.isPointLight===!0?c:o,s.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const Z=E.uuid,at=L.uuid;let O=h[Z];O===void 0&&(O={},h[Z]=O);let z=O[at];z===void 0&&(z=E.clone(),O[at]=z,L.addEventListener("dispose",D)),E=z}if(E.visible=L.visible,E.wireframe=L.wireframe,y===gn?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:d[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,B.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Z=s.properties.get(E);Z.light=B}return E}function v(C,L,B,y,E){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===gn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,C.matrixWorld);const at=t.update(C),O=C.material;if(Array.isArray(O)){const z=at.groups;for(let H=0,it=z.length;H<it;H++){const nt=z[H],Y=O[nt.materialIndex];if(Y&&Y.visible){const ot=g(C,Y,y,E);C.onBeforeShadow(s,C,L,B,at,ot,nt),s.renderBufferDirect(B,null,at,ot,C,nt),C.onAfterShadow(s,C,L,B,at,ot,nt)}}}else if(O.visible){const z=g(C,O,y,E);C.onBeforeShadow(s,C,L,B,at,z,null),s.renderBufferDirect(B,null,at,z,C,null),C.onAfterShadow(s,C,L,B,at,z,null)}}const Z=C.children;for(let at=0,O=Z.length;at<O;at++)v(Z[at],L,B,y,E)}function D(C){C.target.removeEventListener("dispose",D);for(const B in h){const y=h[B],E=C.target.uuid;E in y&&(y[E].dispose(),delete y[E])}}}function Lp(s,t,e){const n=e.isWebGL2;function i(){let x=!1;const F=new ue;let J=null;const k=new ue(0,0,0,0);return{setMask:function(q){J!==q&&!x&&(s.colorMask(q,q,q,q),J=q)},setLocked:function(q){x=q},setClear:function(q,et,_t,Zt,Xt){Xt===!0&&(q*=Zt,et*=Zt,_t*=Zt),F.set(q,et,_t,Zt),k.equals(F)===!1&&(s.clearColor(q,et,_t,Zt),k.copy(F))},reset:function(){x=!1,J=null,k.set(-1,0,0,0)}}}function r(){let x=!1,F=null,J=null,k=null;return{setTest:function(q){q?Gt(s.DEPTH_TEST):Pt(s.DEPTH_TEST)},setMask:function(q){F!==q&&!x&&(s.depthMask(q),F=q)},setFunc:function(q){if(J!==q){switch(q){case kc:s.depthFunc(s.NEVER);break;case zc:s.depthFunc(s.ALWAYS);break;case Vc:s.depthFunc(s.LESS);break;case ws:s.depthFunc(s.LEQUAL);break;case Hc:s.depthFunc(s.EQUAL);break;case Wc:s.depthFunc(s.GEQUAL);break;case Xc:s.depthFunc(s.GREATER);break;case qc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=q}},setLocked:function(q){x=q},setClear:function(q){k!==q&&(s.clearDepth(q),k=q)},reset:function(){x=!1,F=null,J=null,k=null}}}function a(){let x=!1,F=null,J=null,k=null,q=null,et=null,_t=null,Zt=null,Xt=null;return{setTest:function(qt){x||(qt?Gt(s.STENCIL_TEST):Pt(s.STENCIL_TEST))},setMask:function(qt){F!==qt&&!x&&(s.stencilMask(qt),F=qt)},setFunc:function(qt,de,we){(J!==qt||k!==de||q!==we)&&(s.stencilFunc(qt,de,we),J=qt,k=de,q=we)},setOp:function(qt,de,we){(et!==qt||_t!==de||Zt!==we)&&(s.stencilOp(qt,de,we),et=qt,_t=de,Zt=we)},setLocked:function(qt){x=qt},setClear:function(qt){Xt!==qt&&(s.clearStencil(qt),Xt=qt)},reset:function(){x=!1,F=null,J=null,k=null,q=null,et=null,_t=null,Zt=null,Xt=null}}}const o=new i,c=new r,h=new a,u=new WeakMap,d=new WeakMap;let l={},f={},_=new WeakMap,M=[],m=null,p=!1,w=null,g=null,v=null,D=null,C=null,L=null,B=null,y=new ie(0,0,0),E=0,P=!1,Z=null,at=null,O=null,z=null,H=null;const it=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let nt=!1,Y=0;const ot=s.getParameter(s.VERSION);ot.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ot)[1]),nt=Y>=1):ot.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),nt=Y>=2);let K=null,pt={};const j=s.getParameter(s.SCISSOR_BOX),lt=s.getParameter(s.VIEWPORT),xt=new ue().fromArray(j),Lt=new ue().fromArray(lt);function yt(x,F,J,k){const q=new Uint8Array(4),et=s.createTexture();s.bindTexture(x,et),s.texParameteri(x,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(x,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let _t=0;_t<J;_t++)n&&(x===s.TEXTURE_3D||x===s.TEXTURE_2D_ARRAY)?s.texImage3D(F,0,s.RGBA,1,1,k,0,s.RGBA,s.UNSIGNED_BYTE,q):s.texImage2D(F+_t,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,q);return et}const Ot={};Ot[s.TEXTURE_2D]=yt(s.TEXTURE_2D,s.TEXTURE_2D,1),Ot[s.TEXTURE_CUBE_MAP]=yt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Ot[s.TEXTURE_2D_ARRAY]=yt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ot[s.TEXTURE_3D]=yt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),h.setClear(0),Gt(s.DEPTH_TEST),c.setFunc(ws),vt(!1),b(Jr),Gt(s.CULL_FACE),Q(Pn);function Gt(x){l[x]!==!0&&(s.enable(x),l[x]=!0)}function Pt(x){l[x]!==!1&&(s.disable(x),l[x]=!1)}function St(x,F){return f[x]!==F?(s.bindFramebuffer(x,F),f[x]=F,n&&(x===s.DRAW_FRAMEBUFFER&&(f[s.FRAMEBUFFER]=F),x===s.FRAMEBUFFER&&(f[s.DRAW_FRAMEBUFFER]=F)),!0):!1}function U(x,F){let J=M,k=!1;if(x)if(J=_.get(F),J===void 0&&(J=[],_.set(F,J)),x.isWebGLMultipleRenderTargets){const q=x.texture;if(J.length!==q.length||J[0]!==s.COLOR_ATTACHMENT0){for(let et=0,_t=q.length;et<_t;et++)J[et]=s.COLOR_ATTACHMENT0+et;J.length=q.length,k=!0}}else J[0]!==s.COLOR_ATTACHMENT0&&(J[0]=s.COLOR_ATTACHMENT0,k=!0);else J[0]!==s.BACK&&(J[0]=s.BACK,k=!0);k&&(e.isWebGL2?s.drawBuffers(J):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function ft(x){return m!==x?(s.useProgram(x),m=x,!0):!1}const tt={[Hn]:s.FUNC_ADD,[Tc]:s.FUNC_SUBTRACT,[bc]:s.FUNC_REVERSE_SUBTRACT};if(n)tt[to]=s.MIN,tt[eo]=s.MAX;else{const x=t.get("EXT_blend_minmax");x!==null&&(tt[to]=x.MIN_EXT,tt[eo]=x.MAX_EXT)}const mt={[Ac]:s.ZERO,[Rc]:s.ONE,[Pc]:s.SRC_COLOR,[Tr]:s.SRC_ALPHA,[Nc]:s.SRC_ALPHA_SATURATE,[Dc]:s.DST_COLOR,[Lc]:s.DST_ALPHA,[Cc]:s.ONE_MINUS_SRC_COLOR,[br]:s.ONE_MINUS_SRC_ALPHA,[Uc]:s.ONE_MINUS_DST_COLOR,[Ic]:s.ONE_MINUS_DST_ALPHA,[Oc]:s.CONSTANT_COLOR,[Fc]:s.ONE_MINUS_CONSTANT_COLOR,[Bc]:s.CONSTANT_ALPHA,[Gc]:s.ONE_MINUS_CONSTANT_ALPHA};function Q(x,F,J,k,q,et,_t,Zt,Xt,qt){if(x===Pn){p===!0&&(Pt(s.BLEND),p=!1);return}if(p===!1&&(Gt(s.BLEND),p=!0),x!==Ec){if(x!==w||qt!==P){if((g!==Hn||C!==Hn)&&(s.blendEquation(s.FUNC_ADD),g=Hn,C=Hn),qt)switch(x){case Mi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jr:s.blendFunc(s.ONE,s.ONE);break;case $r:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}else switch(x){case Mi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case $r:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",x);break}v=null,D=null,L=null,B=null,y.set(0,0,0),E=0,w=x,P=qt}return}q=q||F,et=et||J,_t=_t||k,(F!==g||q!==C)&&(s.blendEquationSeparate(tt[F],tt[q]),g=F,C=q),(J!==v||k!==D||et!==L||_t!==B)&&(s.blendFuncSeparate(mt[J],mt[k],mt[et],mt[_t]),v=J,D=k,L=et,B=_t),(Zt.equals(y)===!1||Xt!==E)&&(s.blendColor(Zt.r,Zt.g,Zt.b,Xt),y.copy(Zt),E=Xt),w=x,P=!1}function Nt(x,F){x.side===Re?Pt(s.CULL_FACE):Gt(s.CULL_FACE);let J=x.side===Fe;F&&(J=!J),vt(J),x.blending===Mi&&x.transparent===!1?Q(Pn):Q(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),c.setFunc(x.depthFunc),c.setTest(x.depthTest),c.setMask(x.depthWrite),o.setMask(x.colorWrite);const k=x.stencilWrite;h.setTest(k),k&&(h.setMask(x.stencilWriteMask),h.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),h.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),V(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?Gt(s.SAMPLE_ALPHA_TO_COVERAGE):Pt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(x){Z!==x&&(x?s.frontFace(s.CW):s.frontFace(s.CCW),Z=x)}function b(x){x!==yc?(Gt(s.CULL_FACE),x!==at&&(x===Jr?s.cullFace(s.BACK):x===wc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Pt(s.CULL_FACE),at=x}function S(x){x!==O&&(nt&&s.lineWidth(x),O=x)}function V(x,F,J){x?(Gt(s.POLYGON_OFFSET_FILL),(z!==F||H!==J)&&(s.polygonOffset(F,J),z=F,H=J)):Pt(s.POLYGON_OFFSET_FILL)}function ht(x){x?Gt(s.SCISSOR_TEST):Pt(s.SCISSOR_TEST)}function dt(x){x===void 0&&(x=s.TEXTURE0+it-1),K!==x&&(s.activeTexture(x),K=x)}function rt(x,F,J){J===void 0&&(K===null?J=s.TEXTURE0+it-1:J=K);let k=pt[J];k===void 0&&(k={type:void 0,texture:void 0},pt[J]=k),(k.type!==x||k.texture!==F)&&(K!==J&&(s.activeTexture(J),K=J),s.bindTexture(x,F||Ot[x]),k.type=x,k.texture=F)}function Dt(){const x=pt[K];x!==void 0&&x.type!==void 0&&(s.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)}function Mt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function At(){try{s.compressedTexImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ft(){try{s.texSubImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Jt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ht(){try{s.texStorage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function kt(){try{s.texStorage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ut(){try{s.texImage2D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Ct(){try{s.texImage3D.apply(s,arguments)}catch(x){console.error("THREE.WebGLState:",x)}}function Bt(x){xt.equals(x)===!1&&(s.scissor(x.x,x.y,x.z,x.w),xt.copy(x))}function Yt(x){Lt.equals(x)===!1&&(s.viewport(x.x,x.y,x.z,x.w),Lt.copy(x))}function re(x,F){let J=d.get(F);J===void 0&&(J=new WeakMap,d.set(F,J));let k=J.get(x);k===void 0&&(k=s.getUniformBlockIndex(F,x.name),J.set(x,k))}function Wt(x,F){const k=d.get(F).get(x);u.get(F)!==k&&(s.uniformBlockBinding(F,k,x.__bindingPointIndex),u.set(F,k))}function gt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},K=null,pt={},f={},_=new WeakMap,M=[],m=null,p=!1,w=null,g=null,v=null,D=null,C=null,L=null,B=null,y=new ie(0,0,0),E=0,P=!1,Z=null,at=null,O=null,z=null,H=null,xt.set(0,0,s.canvas.width,s.canvas.height),Lt.set(0,0,s.canvas.width,s.canvas.height),o.reset(),c.reset(),h.reset()}return{buffers:{color:o,depth:c,stencil:h},enable:Gt,disable:Pt,bindFramebuffer:St,drawBuffers:U,useProgram:ft,setBlending:Q,setMaterial:Nt,setFlipSided:vt,setCullFace:b,setLineWidth:S,setPolygonOffset:V,setScissorTest:ht,activeTexture:dt,bindTexture:rt,unbindTexture:Dt,compressedTexImage2D:Mt,compressedTexImage3D:At,texImage2D:Ut,texImage3D:Ct,updateUBOMapping:re,uniformBlockBinding:Wt,texStorage2D:Ht,texStorage3D:kt,texSubImage2D:Ft,texSubImage3D:wt,compressedTexSubImage2D:ct,compressedTexSubImage3D:Jt,scissor:Bt,viewport:Yt,reset:gt}}function Ip(s,t,e,n,i,r,a){const o=i.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const l=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,S){return f?new OffscreenCanvas(b,S):Ps("canvas")}function M(b,S,V,ht){let dt=1;if((b.width>ht||b.height>ht)&&(dt=ht/Math.max(b.width,b.height)),dt<1||S===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const rt=S?Rs:Math.floor,Dt=rt(dt*b.width),Mt=rt(dt*b.height);d===void 0&&(d=_(Dt,Mt));const At=V?_(Dt,Mt):d;return At.width=Dt,At.height=Mt,At.getContext("2d").drawImage(b,0,0,Dt,Mt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Dt+"x"+Mt+")."),At}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return Lr(b.width)&&Lr(b.height)}function p(b){return o?!1:b.wrapS!==Qe||b.wrapT!==Qe||b.minFilter!==Oe&&b.minFilter!==qe}function w(b,S){return b.generateMipmaps&&S&&b.minFilter!==Oe&&b.minFilter!==qe}function g(b){s.generateMipmap(b)}function v(b,S,V,ht,dt=!1){if(o===!1)return S;if(b!==null){if(s[b]!==void 0)return s[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let rt=S;if(S===s.RED&&(V===s.FLOAT&&(rt=s.R32F),V===s.HALF_FLOAT&&(rt=s.R16F),V===s.UNSIGNED_BYTE&&(rt=s.R8)),S===s.RED_INTEGER&&(V===s.UNSIGNED_BYTE&&(rt=s.R8UI),V===s.UNSIGNED_SHORT&&(rt=s.R16UI),V===s.UNSIGNED_INT&&(rt=s.R32UI),V===s.BYTE&&(rt=s.R8I),V===s.SHORT&&(rt=s.R16I),V===s.INT&&(rt=s.R32I)),S===s.RG&&(V===s.FLOAT&&(rt=s.RG32F),V===s.HALF_FLOAT&&(rt=s.RG16F),V===s.UNSIGNED_BYTE&&(rt=s.RG8)),S===s.RGBA){const Dt=dt?Es:oe.getTransfer(ht);V===s.FLOAT&&(rt=s.RGBA32F),V===s.HALF_FLOAT&&(rt=s.RGBA16F),V===s.UNSIGNED_BYTE&&(rt=Dt===he?s.SRGB8_ALPHA8:s.RGBA8),V===s.UNSIGNED_SHORT_4_4_4_4&&(rt=s.RGBA4),V===s.UNSIGNED_SHORT_5_5_5_1&&(rt=s.RGB5_A1)}return(rt===s.R16F||rt===s.R32F||rt===s.RG16F||rt===s.RG32F||rt===s.RGBA16F||rt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function D(b,S,V){return w(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==Oe&&b.minFilter!==qe?Math.log2(Math.max(S.width,S.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?S.mipmaps.length:1}function C(b){return b===Oe||b===no||b===Ws?s.NEAREST:s.LINEAR}function L(b){const S=b.target;S.removeEventListener("dispose",L),y(S),S.isVideoTexture&&u.delete(S)}function B(b){const S=b.target;S.removeEventListener("dispose",B),P(S)}function y(b){const S=n.get(b);if(S.__webglInit===void 0)return;const V=b.source,ht=l.get(V);if(ht){const dt=ht[S.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&E(b),Object.keys(ht).length===0&&l.delete(V)}n.remove(b)}function E(b){const S=n.get(b);s.deleteTexture(S.__webglTexture);const V=b.source,ht=l.get(V);delete ht[S.__cacheKey],a.memory.textures--}function P(b){const S=b.texture,V=n.get(b),ht=n.get(S);if(ht.__webglTexture!==void 0&&(s.deleteTexture(ht.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(V.__webglFramebuffer[dt]))for(let rt=0;rt<V.__webglFramebuffer[dt].length;rt++)s.deleteFramebuffer(V.__webglFramebuffer[dt][rt]);else s.deleteFramebuffer(V.__webglFramebuffer[dt]);V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer[dt])}else{if(Array.isArray(V.__webglFramebuffer))for(let dt=0;dt<V.__webglFramebuffer.length;dt++)s.deleteFramebuffer(V.__webglFramebuffer[dt]);else s.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&s.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&s.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let dt=0;dt<V.__webglColorRenderbuffer.length;dt++)V.__webglColorRenderbuffer[dt]&&s.deleteRenderbuffer(V.__webglColorRenderbuffer[dt]);V.__webglDepthRenderbuffer&&s.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let dt=0,rt=S.length;dt<rt;dt++){const Dt=n.get(S[dt]);Dt.__webglTexture&&(s.deleteTexture(Dt.__webglTexture),a.memory.textures--),n.remove(S[dt])}n.remove(S),n.remove(b)}let Z=0;function at(){Z=0}function O(){const b=Z;return b>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+i.maxTextures),Z+=1,b}function z(b){const S=[];return S.push(b.wrapS),S.push(b.wrapT),S.push(b.wrapR||0),S.push(b.magFilter),S.push(b.minFilter),S.push(b.anisotropy),S.push(b.internalFormat),S.push(b.format),S.push(b.type),S.push(b.generateMipmaps),S.push(b.premultiplyAlpha),S.push(b.flipY),S.push(b.unpackAlignment),S.push(b.colorSpace),S.join()}function H(b,S){const V=n.get(b);if(b.isVideoTexture&&Nt(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){const ht=b.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(V,b,S);return}}e.bindTexture(s.TEXTURE_2D,V.__webglTexture,s.TEXTURE0+S)}function it(b,S){const V=n.get(b);if(b.version>0&&V.__version!==b.version){xt(V,b,S);return}e.bindTexture(s.TEXTURE_2D_ARRAY,V.__webglTexture,s.TEXTURE0+S)}function nt(b,S){const V=n.get(b);if(b.version>0&&V.__version!==b.version){xt(V,b,S);return}e.bindTexture(s.TEXTURE_3D,V.__webglTexture,s.TEXTURE0+S)}function Y(b,S){const V=n.get(b);if(b.version>0&&V.__version!==b.version){Lt(V,b,S);return}e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture,s.TEXTURE0+S)}const ot={[en]:s.REPEAT,[Qe]:s.CLAMP_TO_EDGE,[Pr]:s.MIRRORED_REPEAT},K={[Oe]:s.NEAREST,[no]:s.NEAREST_MIPMAP_NEAREST,[Ws]:s.NEAREST_MIPMAP_LINEAR,[qe]:s.LINEAR,[tl]:s.LINEAR_MIPMAP_NEAREST,[Vi]:s.LINEAR_MIPMAP_LINEAR},pt={[dl]:s.NEVER,[vl]:s.ALWAYS,[fl]:s.LESS,[Ha]:s.LEQUAL,[pl]:s.EQUAL,[_l]:s.GEQUAL,[ml]:s.GREATER,[gl]:s.NOTEQUAL};function j(b,S,V){if(V?(s.texParameteri(b,s.TEXTURE_WRAP_S,ot[S.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,ot[S.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,ot[S.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,K[S.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,K[S.minFilter])):(s.texParameteri(b,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(b,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(S.wrapS!==Qe||S.wrapT!==Qe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(b,s.TEXTURE_MAG_FILTER,C(S.magFilter)),s.texParameteri(b,s.TEXTURE_MIN_FILTER,C(S.minFilter)),S.minFilter!==Oe&&S.minFilter!==qe&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,pt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const ht=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===Oe||S.minFilter!==Ws&&S.minFilter!==Vi||S.type===Rn&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===Hi&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(s.texParameterf(b,ht.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function lt(b,S){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,S.addEventListener("dispose",L));const ht=S.source;let dt=l.get(ht);dt===void 0&&(dt={},l.set(ht,dt));const rt=z(S);if(rt!==b.__cacheKey){dt[rt]===void 0&&(dt[rt]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,V=!0),dt[rt].usedTimes++;const Dt=dt[b.__cacheKey];Dt!==void 0&&(dt[b.__cacheKey].usedTimes--,Dt.usedTimes===0&&E(S)),b.__cacheKey=rt,b.__webglTexture=dt[rt].texture}return V}function xt(b,S,V){let ht=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ht=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ht=s.TEXTURE_3D);const dt=lt(b,S),rt=S.source;e.bindTexture(ht,b.__webglTexture,s.TEXTURE0+V);const Dt=n.get(rt);if(rt.version!==Dt.__version||dt===!0){e.activeTexture(s.TEXTURE0+V);const Mt=oe.getPrimaries(oe.workingColorSpace),At=S.colorSpace===Ye?null:oe.getPrimaries(S.colorSpace),Ft=S.colorSpace===Ye||Mt===At?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const wt=p(S)&&m(S.image)===!1;let ct=M(S.image,wt,!1,i.maxTextureSize);ct=vt(S,ct);const Jt=m(ct)||o,Ht=r.convert(S.format,S.colorSpace);let kt=r.convert(S.type),Ut=v(S.internalFormat,Ht,kt,S.colorSpace,S.isVideoTexture);j(ht,S,Jt);let Ct;const Bt=S.mipmaps,Yt=o&&S.isVideoTexture!==!0&&Ut!==ka,re=Dt.__version===void 0||dt===!0,Wt=D(S,ct,Jt);if(S.isDepthTexture)Ut=s.DEPTH_COMPONENT,o?S.type===Rn?Ut=s.DEPTH_COMPONENT32F:S.type===An?Ut=s.DEPTH_COMPONENT24:S.type===Xn?Ut=s.DEPTH24_STENCIL8:Ut=s.DEPTH_COMPONENT16:S.type===Rn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===qn&&Ut===s.DEPTH_COMPONENT&&S.type!==Or&&S.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=An,kt=r.convert(S.type)),S.format===wi&&Ut===s.DEPTH_COMPONENT&&(Ut=s.DEPTH_STENCIL,S.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Xn,kt=r.convert(S.type))),re&&(Yt?e.texStorage2D(s.TEXTURE_2D,1,Ut,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,Ut,ct.width,ct.height,0,Ht,kt,null));else if(S.isDataTexture)if(Bt.length>0&&Jt){Yt&&re&&e.texStorage2D(s.TEXTURE_2D,Wt,Ut,Bt[0].width,Bt[0].height);for(let gt=0,x=Bt.length;gt<x;gt++)Ct=Bt[gt],Yt?e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,Ht,kt,Ct.data):e.texImage2D(s.TEXTURE_2D,gt,Ut,Ct.width,Ct.height,0,Ht,kt,Ct.data);S.generateMipmaps=!1}else Yt?(re&&e.texStorage2D(s.TEXTURE_2D,Wt,Ut,ct.width,ct.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,Ht,kt,ct.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,ct.width,ct.height,0,Ht,kt,ct.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Wt,Ut,Bt[0].width,Bt[0].height,ct.depth);for(let gt=0,x=Bt.length;gt<x;gt++)Ct=Bt[gt],S.format!==tn?Ht!==null?Yt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Ct.width,Ct.height,ct.depth,Ht,Ct.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,gt,Ut,Ct.width,Ct.height,ct.depth,0,Ct.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,gt,0,0,0,Ct.width,Ct.height,ct.depth,Ht,kt,Ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,gt,Ut,Ct.width,Ct.height,ct.depth,0,Ht,kt,Ct.data)}else{Yt&&re&&e.texStorage2D(s.TEXTURE_2D,Wt,Ut,Bt[0].width,Bt[0].height);for(let gt=0,x=Bt.length;gt<x;gt++)Ct=Bt[gt],S.format!==tn?Ht!==null?Yt?e.compressedTexSubImage2D(s.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,Ht,Ct.data):e.compressedTexImage2D(s.TEXTURE_2D,gt,Ut,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Ct.width,Ct.height,Ht,kt,Ct.data):e.texImage2D(s.TEXTURE_2D,gt,Ut,Ct.width,Ct.height,0,Ht,kt,Ct.data)}else if(S.isDataArrayTexture)Yt?(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,Wt,Ut,ct.width,ct.height,ct.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Ht,kt,ct.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,ct.width,ct.height,ct.depth,0,Ht,kt,ct.data);else if(S.isData3DTexture)Yt?(re&&e.texStorage3D(s.TEXTURE_3D,Wt,Ut,ct.width,ct.height,ct.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Ht,kt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,ct.width,ct.height,ct.depth,0,Ht,kt,ct.data);else if(S.isFramebufferTexture){if(re)if(Yt)e.texStorage2D(s.TEXTURE_2D,Wt,Ut,ct.width,ct.height);else{let gt=ct.width,x=ct.height;for(let F=0;F<Wt;F++)e.texImage2D(s.TEXTURE_2D,F,Ut,gt,x,0,Ht,kt,null),gt>>=1,x>>=1}}else if(Bt.length>0&&Jt){Yt&&re&&e.texStorage2D(s.TEXTURE_2D,Wt,Ut,Bt[0].width,Bt[0].height);for(let gt=0,x=Bt.length;gt<x;gt++)Ct=Bt[gt],Yt?e.texSubImage2D(s.TEXTURE_2D,gt,0,0,Ht,kt,Ct):e.texImage2D(s.TEXTURE_2D,gt,Ut,Ht,kt,Ct);S.generateMipmaps=!1}else Yt?(re&&e.texStorage2D(s.TEXTURE_2D,Wt,Ut,ct.width,ct.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ht,kt,ct)):e.texImage2D(s.TEXTURE_2D,0,Ut,Ht,kt,ct);w(S,Jt)&&g(ht),Dt.__version=rt.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function Lt(b,S,V){if(S.image.length!==6)return;const ht=lt(b,S),dt=S.source;e.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+V);const rt=n.get(dt);if(dt.version!==rt.__version||ht===!0){e.activeTexture(s.TEXTURE0+V);const Dt=oe.getPrimaries(oe.workingColorSpace),Mt=S.colorSpace===Ye?null:oe.getPrimaries(S.colorSpace),At=S.colorSpace===Ye||Dt===Mt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);const Ft=S.isCompressedTexture||S.image[0].isCompressedTexture,wt=S.image[0]&&S.image[0].isDataTexture,ct=[];for(let gt=0;gt<6;gt++)!Ft&&!wt?ct[gt]=M(S.image[gt],!1,!0,i.maxCubemapSize):ct[gt]=wt?S.image[gt].image:S.image[gt],ct[gt]=vt(S,ct[gt]);const Jt=ct[0],Ht=m(Jt)||o,kt=r.convert(S.format,S.colorSpace),Ut=r.convert(S.type),Ct=v(S.internalFormat,kt,Ut,S.colorSpace),Bt=o&&S.isVideoTexture!==!0,Yt=rt.__version===void 0||ht===!0;let re=D(S,Jt,Ht);j(s.TEXTURE_CUBE_MAP,S,Ht);let Wt;if(Ft){Bt&&Yt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,re,Ct,Jt.width,Jt.height);for(let gt=0;gt<6;gt++){Wt=ct[gt].mipmaps;for(let x=0;x<Wt.length;x++){const F=Wt[x];S.format!==tn?kt!==null?Bt?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,x,0,0,F.width,F.height,kt,F.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,x,Ct,F.width,F.height,0,F.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,x,0,0,F.width,F.height,kt,Ut,F.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,x,Ct,F.width,F.height,0,kt,Ut,F.data)}}}else{Wt=S.mipmaps,Bt&&Yt&&(Wt.length>0&&re++,e.texStorage2D(s.TEXTURE_CUBE_MAP,re,Ct,ct[0].width,ct[0].height));for(let gt=0;gt<6;gt++)if(wt){Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,ct[gt].width,ct[gt].height,kt,Ut,ct[gt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Ct,ct[gt].width,ct[gt].height,0,kt,Ut,ct[gt].data);for(let x=0;x<Wt.length;x++){const J=Wt[x].image[gt].image;Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,x+1,0,0,J.width,J.height,kt,Ut,J.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,x+1,Ct,J.width,J.height,0,kt,Ut,J.data)}}else{Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,kt,Ut,ct[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,Ct,kt,Ut,ct[gt]);for(let x=0;x<Wt.length;x++){const F=Wt[x];Bt?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,x+1,0,0,kt,Ut,F.image[gt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,x+1,Ct,kt,Ut,F.image[gt])}}}w(S,Ht)&&g(s.TEXTURE_CUBE_MAP),rt.__version=dt.version,S.onUpdate&&S.onUpdate(S)}b.__version=S.version}function yt(b,S,V,ht,dt,rt){const Dt=r.convert(V.format,V.colorSpace),Mt=r.convert(V.type),At=v(V.internalFormat,Dt,Mt,V.colorSpace);if(!n.get(S).__hasExternalTextures){const wt=Math.max(1,S.width>>rt),ct=Math.max(1,S.height>>rt);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?e.texImage3D(dt,rt,At,wt,ct,S.depth,0,Dt,Mt,null):e.texImage2D(dt,rt,At,wt,ct,0,Dt,Mt,null)}e.bindFramebuffer(s.FRAMEBUFFER,b),Q(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ht,dt,n.get(V).__webglTexture,0,mt(S)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ht,dt,n.get(V).__webglTexture,rt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ot(b,S,V){if(s.bindRenderbuffer(s.RENDERBUFFER,b),S.depthBuffer&&!S.stencilBuffer){let ht=o===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(V||Q(S)){const dt=S.depthTexture;dt&&dt.isDepthTexture&&(dt.type===Rn?ht=s.DEPTH_COMPONENT32F:dt.type===An&&(ht=s.DEPTH_COMPONENT24));const rt=mt(S);Q(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,rt,ht,S.width,S.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,ht,S.width,S.height)}else s.renderbufferStorage(s.RENDERBUFFER,ht,S.width,S.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,b)}else if(S.depthBuffer&&S.stencilBuffer){const ht=mt(S);V&&Q(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,S.width,S.height):Q(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,s.DEPTH24_STENCIL8,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,b)}else{const ht=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let dt=0;dt<ht.length;dt++){const rt=ht[dt],Dt=r.convert(rt.format,rt.colorSpace),Mt=r.convert(rt.type),At=v(rt.internalFormat,Dt,Mt,rt.colorSpace),Ft=mt(S);V&&Q(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft,At,S.width,S.height):Q(S)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft,At,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,At,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Gt(b,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,b),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const ht=n.get(S.depthTexture).__webglTexture,dt=mt(S);if(S.depthTexture.format===qn)Q(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ht,0);else if(S.depthTexture.format===wi)Q(S)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0,dt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Pt(b){const S=n.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Gt(S.__webglFramebuffer,b)}else if(V){S.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[ht]),S.__webglDepthbuffer[ht]=s.createRenderbuffer(),Ot(S.__webglDepthbuffer[ht],b,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=s.createRenderbuffer(),Ot(S.__webglDepthbuffer,b,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function St(b,S,V){const ht=n.get(b);S!==void 0&&yt(ht.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),V!==void 0&&Pt(b)}function U(b){const S=b.texture,V=n.get(b),ht=n.get(S);b.addEventListener("dispose",B),b.isWebGLMultipleRenderTargets!==!0&&(ht.__webglTexture===void 0&&(ht.__webglTexture=s.createTexture()),ht.__version=S.version,a.memory.textures++);const dt=b.isWebGLCubeRenderTarget===!0,rt=b.isWebGLMultipleRenderTargets===!0,Dt=m(b)||o;if(dt){V.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(o&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[Mt]=[];for(let At=0;At<S.mipmaps.length;At++)V.__webglFramebuffer[Mt][At]=s.createFramebuffer()}else V.__webglFramebuffer[Mt]=s.createFramebuffer()}else{if(o&&S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let Mt=0;Mt<S.mipmaps.length;Mt++)V.__webglFramebuffer[Mt]=s.createFramebuffer()}else V.__webglFramebuffer=s.createFramebuffer();if(rt)if(i.drawBuffers){const Mt=b.texture;for(let At=0,Ft=Mt.length;At<Ft;At++){const wt=n.get(Mt[At]);wt.__webglTexture===void 0&&(wt.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Q(b)===!1){const Mt=rt?S:[S];V.__webglMultisampledFramebuffer=s.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let At=0;At<Mt.length;At++){const Ft=Mt[At];V.__webglColorRenderbuffer[At]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,V.__webglColorRenderbuffer[At]);const wt=r.convert(Ft.format,Ft.colorSpace),ct=r.convert(Ft.type),Jt=v(Ft.internalFormat,wt,ct,Ft.colorSpace,b.isXRRenderTarget===!0),Ht=mt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht,Jt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+At,s.RENDERBUFFER,V.__webglColorRenderbuffer[At])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=s.createRenderbuffer(),Ot(V.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(dt){e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),j(s.TEXTURE_CUBE_MAP,S,Dt);for(let Mt=0;Mt<6;Mt++)if(o&&S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)yt(V.__webglFramebuffer[Mt][At],b,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,At);else yt(V.__webglFramebuffer[Mt],b,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);w(S,Dt)&&g(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){const Mt=b.texture;for(let At=0,Ft=Mt.length;At<Ft;At++){const wt=Mt[At],ct=n.get(wt);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),j(s.TEXTURE_2D,wt,Dt),yt(V.__webglFramebuffer,b,wt,s.COLOR_ATTACHMENT0+At,s.TEXTURE_2D,0),w(wt,Dt)&&g(s.TEXTURE_2D)}e.unbindTexture()}else{let Mt=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?Mt=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(Mt,ht.__webglTexture),j(Mt,S,Dt),o&&S.mipmaps&&S.mipmaps.length>0)for(let At=0;At<S.mipmaps.length;At++)yt(V.__webglFramebuffer[At],b,S,s.COLOR_ATTACHMENT0,Mt,At);else yt(V.__webglFramebuffer,b,S,s.COLOR_ATTACHMENT0,Mt,0);w(S,Dt)&&g(Mt),e.unbindTexture()}b.depthBuffer&&Pt(b)}function ft(b){const S=m(b)||o,V=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ht=0,dt=V.length;ht<dt;ht++){const rt=V[ht];if(w(rt,S)){const Dt=b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Mt=n.get(rt).__webglTexture;e.bindTexture(Dt,Mt),g(Dt),e.unbindTexture()}}}function tt(b){if(o&&b.samples>0&&Q(b)===!1){const S=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],V=b.width,ht=b.height;let dt=s.COLOR_BUFFER_BIT;const rt=[],Dt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(b),At=b.isWebGLMultipleRenderTargets===!0;if(At)for(let Ft=0;Ft<S.length;Ft++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Ft=0;Ft<S.length;Ft++){rt.push(s.COLOR_ATTACHMENT0+Ft),b.depthBuffer&&rt.push(Dt);const wt=Mt.__ignoreDepthValues!==void 0?Mt.__ignoreDepthValues:!1;if(wt===!1&&(b.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),At&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[Ft]),wt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[Dt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[Dt])),At){const ct=n.get(S[Ft]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,V,ht,0,0,V,ht,dt,s.NEAREST),h&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,rt)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),At)for(let Ft=0;Ft<S.length;Ft++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[Ft]);const wt=n.get(S[Ft]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ft,s.TEXTURE_2D,wt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}}function mt(b){return Math.min(i.maxSamples,b.samples)}function Q(b){const S=n.get(b);return o&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Nt(b){const S=a.render.frame;u.get(b)!==S&&(u.set(b,S),b.update())}function vt(b,S){const V=b.colorSpace,ht=b.format,dt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Cr||V!==Mn&&V!==Ye&&(oe.getTransfer(V)===he?o===!1?t.has("EXT_sRGB")===!0&&ht===tn?(b.format=Cr,b.minFilter=qe,b.generateMipmaps=!1):S=Xa.sRGBToLinear(S):(ht!==tn||dt!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),S}this.allocateTextureUnit=O,this.resetTextureUnits=at,this.setTexture2D=H,this.setTexture2DArray=it,this.setTexture3D=nt,this.setTextureCube=Y,this.rebindTextures=St,this.setupRenderTarget=U,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=Pt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Q}function Dp(s,t,e){const n=e.isWebGL2;function i(r,a=Ye){let o;const c=oe.getTransfer(a);if(r===Ln)return s.UNSIGNED_BYTE;if(r===Na)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Oa)return s.UNSIGNED_SHORT_5_5_5_1;if(r===el)return s.BYTE;if(r===nl)return s.SHORT;if(r===Or)return s.UNSIGNED_SHORT;if(r===Ua)return s.INT;if(r===An)return s.UNSIGNED_INT;if(r===Rn)return s.FLOAT;if(r===Hi)return n?s.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===il)return s.ALPHA;if(r===tn)return s.RGBA;if(r===sl)return s.LUMINANCE;if(r===rl)return s.LUMINANCE_ALPHA;if(r===qn)return s.DEPTH_COMPONENT;if(r===wi)return s.DEPTH_STENCIL;if(r===Cr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===ol)return s.RED;if(r===Fa)return s.RED_INTEGER;if(r===al)return s.RG;if(r===Ba)return s.RG_INTEGER;if(r===Ga)return s.RGBA_INTEGER;if(r===Xs||r===qs||r===Ys||r===Zs)if(c===he)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Xs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ys)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Xs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ys)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===io||r===so||r===ro||r===oo)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===io)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===so)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ro)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===oo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ka)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===ao||r===co)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===ao)return c===he?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===co)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===lo||r===ho||r===uo||r===fo||r===po||r===mo||r===go||r===_o||r===vo||r===Mo||r===xo||r===So||r===yo||r===wo)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===lo)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ho)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===uo)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fo)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===po)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mo)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===go)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_o)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vo)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mo)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xo)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===So)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===yo)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wo)return c===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ks||r===Eo||r===To)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Ks)return c===he?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Eo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===To)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cl||r===bo||r===Ao||r===Ro)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Ks)return o.COMPRESSED_RED_RGTC1_EXT;if(r===bo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ao)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ro)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Xn?n?s.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Up extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class It extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Np={type:"move"};class vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const M of t.hand.values()){const m=e.getJointPose(M,n),p=this._getHandJoint(h,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],l=u.position.distanceTo(d.position),f=.02,_=.005;h.inputState.pinching&&l>f+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&l<=f-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Np)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Op extends bi{constructor(t,e){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,h=null,u=null,d=null,l=null,f=null,_=null;const M=e.getContextAttributes();let m=null,p=null;const w=[],g=[],v=new Tt;let D=null;const C=new Be;C.layers.enable(1),C.viewport=new ue;const L=new Be;L.layers.enable(2),L.viewport=new ue;const B=[C,L],y=new Up;y.layers.enable(1),y.layers.enable(2);let E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=w[j];return lt===void 0&&(lt=new vr,w[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=w[j];return lt===void 0&&(lt=new vr,w[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=w[j];return lt===void 0&&(lt=new vr,w[j]=lt),lt.getHandSpace()};function Z(j){const lt=g.indexOf(j.inputSource);if(lt===-1)return;const xt=w[lt];xt!==void 0&&(xt.update(j.inputSource,j.frame,h||a),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function at(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",at),i.removeEventListener("inputsourceschange",O);for(let j=0;j<w.length;j++){const lt=g[j];lt!==null&&(g[j]=null,w[j].disconnect(lt))}E=null,P=null,t.setRenderTarget(m),f=null,l=null,d=null,i=null,p=null,pt.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(v.width,v.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return l!==null?l:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",at),i.addEventListener("inputsourceschange",O),M.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(v),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const lt={antialias:i.renderState.layers===void 0?M.antialias:!0,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,lt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),p=new Zn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil})}else{let lt=null,xt=null,Lt=null;M.depth&&(Lt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=M.stencil?wi:qn,xt=M.stencil?Xn:An);const yt={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:r};d=new XRWebGLBinding(i,e),l=d.createProjectionLayer(yt),i.updateRenderState({layers:[l]}),t.setPixelRatio(1),t.setSize(l.textureWidth,l.textureHeight,!1),p=new Zn(l.textureWidth,l.textureHeight,{format:tn,type:Ln,depthTexture:new sc(l.textureWidth,l.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0});const Ot=t.properties.get(p);Ot.__ignoreDepthValues=l.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),pt.setContext(i),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function O(j){for(let lt=0;lt<j.removed.length;lt++){const xt=j.removed[lt],Lt=g.indexOf(xt);Lt>=0&&(g[Lt]=null,w[Lt].disconnect(xt))}for(let lt=0;lt<j.added.length;lt++){const xt=j.added[lt];let Lt=g.indexOf(xt);if(Lt===-1){for(let Ot=0;Ot<w.length;Ot++)if(Ot>=g.length){g.push(xt),Lt=Ot;break}else if(g[Ot]===null){g[Ot]=xt,Lt=Ot;break}if(Lt===-1)break}const yt=w[Lt];yt&&yt.connect(xt)}}const z=new N,H=new N;function it(j,lt,xt){z.setFromMatrixPosition(lt.matrixWorld),H.setFromMatrixPosition(xt.matrixWorld);const Lt=z.distanceTo(H),yt=lt.projectionMatrix.elements,Ot=xt.projectionMatrix.elements,Gt=yt[14]/(yt[10]-1),Pt=yt[14]/(yt[10]+1),St=(yt[9]+1)/yt[5],U=(yt[9]-1)/yt[5],ft=(yt[8]-1)/yt[0],tt=(Ot[8]+1)/Ot[0],mt=Gt*ft,Q=Gt*tt,Nt=Lt/(-ft+tt),vt=Nt*-ft;lt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(vt),j.translateZ(Nt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const b=Gt+Nt,S=Pt+Nt,V=mt-vt,ht=Q+(Lt-vt),dt=St*Pt/S*b,rt=U*Pt/S*b;j.projectionMatrix.makePerspective(V,ht,dt,rt,b,S),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function nt(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;y.near=L.near=C.near=j.near,y.far=L.far=C.far=j.far,(E!==y.near||P!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,P=y.far);const lt=j.parent,xt=y.cameras;nt(y,lt);for(let Lt=0;Lt<xt.length;Lt++)nt(xt[Lt],lt);xt.length===2?it(y,C,L):y.projectionMatrix.copy(C.projectionMatrix),Y(j,y,lt)};function Y(j,lt,xt){xt===null?j.matrix.copy(lt.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply(lt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ei*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(l===null&&f===null))return c},this.setFoveation=function(j){c=j,l!==null&&(l.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)};let ot=null;function K(j,lt){if(u=lt.getViewerPose(h||a),_=lt,u!==null){const xt=u.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let Lt=!1;xt.length!==y.cameras.length&&(y.cameras.length=0,Lt=!0);for(let yt=0;yt<xt.length;yt++){const Ot=xt[yt];let Gt=null;if(f!==null)Gt=f.getViewport(Ot);else{const St=d.getViewSubImage(l,Ot);Gt=St.viewport,yt===0&&(t.setRenderTargetTextures(p,St.colorTexture,l.ignoreDepthValues?void 0:St.depthStencilTexture),t.setRenderTarget(p))}let Pt=B[yt];Pt===void 0&&(Pt=new Be,Pt.layers.enable(yt),Pt.viewport=new ue,B[yt]=Pt),Pt.matrix.fromArray(Ot.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Ot.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),yt===0&&(y.matrix.copy(Pt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Lt===!0&&y.cameras.push(Pt)}}for(let xt=0;xt<w.length;xt++){const Lt=g[xt],yt=w[xt];Lt!==null&&yt!==void 0&&yt.update(Lt,lt,h||a)}ot&&ot(j,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),_=null}const pt=new nc;pt.setAnimationLoop(K),this.setAnimationLoop=function(j){ot=j},this.dispose=function(){}}}function Fp(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Qa(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,g,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),l(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,w,g):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p).envMap;if(w&&(m.envMap.value=w,m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const g=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*g,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,g){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=g*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function l(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bp(s,t,e,n){let i={},r={},a=[];const o=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(w,g){const v=g.program;n.uniformBlockBinding(w,v)}function h(w,g){let v=i[w.id];v===void 0&&(_(w),v=u(w),i[w.id]=v,w.addEventListener("dispose",m));const D=g.program;n.updateUBOMapping(w,D);const C=t.render.frame;r[w.id]!==C&&(l(w),r[w.id]=C)}function u(w){const g=d();w.__bindingPointIndex=g;const v=s.createBuffer(),D=w.__size,C=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,D,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,v),v}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function l(w){const g=i[w.id],v=w.uniforms,D=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let C=0,L=v.length;C<L;C++){const B=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,E=B.length;y<E;y++){const P=B[y];if(f(P,C,y,D)===!0){const Z=P.__offset,at=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let z=0;z<at.length;z++){const H=at[z],it=M(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,Z+O,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,O),O+=it.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Z,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(w,g,v,D){const C=w.value,L=g+"_"+v;if(D[L]===void 0)return typeof C=="number"||typeof C=="boolean"?D[L]=C:D[L]=C.clone(),!0;{const B=D[L];if(typeof C=="number"||typeof C=="boolean"){if(B!==C)return D[L]=C,!0}else if(B.equals(C)===!1)return B.copy(C),!0}return!1}function _(w){const g=w.uniforms;let v=0;const D=16;for(let L=0,B=g.length;L<B;L++){const y=Array.isArray(g[L])?g[L]:[g[L]];for(let E=0,P=y.length;E<P;E++){const Z=y[E],at=Array.isArray(Z.value)?Z.value:[Z.value];for(let O=0,z=at.length;O<z;O++){const H=at[O],it=M(H),nt=v%D;nt!==0&&D-nt<it.boundary&&(v+=D-nt),Z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=v,v+=it.storage}}}const C=v%D;return C>0&&(v+=D-C),w.__size=v,w.__cache={},this}function M(w){const g={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(g.boundary=4,g.storage=4):w.isVector2?(g.boundary=8,g.storage=8):w.isVector3||w.isColor?(g.boundary=16,g.storage=12):w.isVector4?(g.boundary=16,g.storage=16):w.isMatrix3?(g.boundary=48,g.storage=48):w.isMatrix4?(g.boundary=64,g.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),g}function m(w){const g=w.target;g.removeEventListener("dispose",m);const v=a.indexOf(g.__bindingPointIndex);a.splice(v,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function p(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},r={}}return{bind:c,update:h,dispose:p}}class hc{constructor(t={}){const{canvas:e=Dl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let l;n!==null?l=n.getContextAttributes().alpha:l=a;const f=new Uint32Array(4),_=new Int32Array(4);let M=null,m=null;const p=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ae,this._useLegacyLights=!1,this.toneMapping=Cn,this.toneMappingExposure=1;const g=this;let v=!1,D=0,C=0,L=null,B=-1,y=null;const E=new ue,P=new ue;let Z=null;const at=new ie(0);let O=0,z=e.width,H=e.height,it=1,nt=null,Y=null;const ot=new ue(0,0,z,H),K=new ue(0,0,z,H);let pt=!1;const j=new Gr;let lt=!1,xt=!1,Lt=null;const yt=new _e,Ot=new Tt,Gt=new N,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return L===null?it:1}let U=n;function ft(R,G){for(let W=0;W<R.length;W++){const T=R[W],I=e.getContext(T,G);if(I!==null)return I}return null}try{const R={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Nr}`),e.addEventListener("webglcontextlost",gt,!1),e.addEventListener("webglcontextrestored",x,!1),e.addEventListener("webglcontextcreationerror",F,!1),U===null){const G=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&G.shift(),U=ft(G,R),U===null)throw ft(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let tt,mt,Q,Nt,vt,b,S,V,ht,dt,rt,Dt,Mt,At,Ft,wt,ct,Jt,Ht,kt,Ut,Ct,Bt,Yt;function re(){tt=new Yd(U),mt=new zd(U,tt,t),tt.init(mt),Ct=new Dp(U,tt,mt),Q=new Lp(U,tt,mt),Nt=new Jd(U),vt=new _p,b=new Ip(U,tt,Q,vt,mt,Ct,Nt),S=new Hd(g),V=new qd(g),ht=new sh(U,mt),Bt=new Gd(U,tt,ht,mt),dt=new Zd(U,ht,Nt,Bt),rt=new tf(U,dt,ht,Nt),Ht=new Qd(U,mt,b),wt=new Vd(vt),Dt=new gp(g,S,V,tt,mt,Bt,wt),Mt=new Fp(g,vt),At=new Mp,Ft=new Tp(tt,mt),Jt=new Bd(g,S,V,Q,rt,l,c),ct=new Cp(g,rt,mt),Yt=new Bp(U,Nt,mt,Q),kt=new kd(U,tt,Nt,mt),Ut=new Kd(U,tt,Nt,mt),Nt.programs=Dt.programs,g.capabilities=mt,g.extensions=tt,g.properties=vt,g.renderLists=At,g.shadowMap=ct,g.state=Q,g.info=Nt}re();const Wt=new Op(g,U);this.xr=Wt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=tt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=tt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(R){R!==void 0&&(it=R,this.setSize(z,H,!1))},this.getSize=function(R){return R.set(z,H)},this.setSize=function(R,G,W=!0){if(Wt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,H=G,e.width=Math.floor(R*it),e.height=Math.floor(G*it),W===!0&&(e.style.width=R+"px",e.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(z*it,H*it).floor()},this.setDrawingBufferSize=function(R,G,W){z=R,H=G,it=W,e.width=Math.floor(R*W),e.height=Math.floor(G*W),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy(ot)},this.setViewport=function(R,G,W,T){R.isVector4?ot.set(R.x,R.y,R.z,R.w):ot.set(R,G,W,T),Q.viewport(E.copy(ot).multiplyScalar(it).floor())},this.getScissor=function(R){return R.copy(K)},this.setScissor=function(R,G,W,T){R.isVector4?K.set(R.x,R.y,R.z,R.w):K.set(R,G,W,T),Q.scissor(P.copy(K).multiplyScalar(it).floor())},this.getScissorTest=function(){return pt},this.setScissorTest=function(R){Q.setScissorTest(pt=R)},this.setOpaqueSort=function(R){nt=R},this.setTransparentSort=function(R){Y=R},this.getClearColor=function(R){return R.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor.apply(Jt,arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha.apply(Jt,arguments)},this.clear=function(R=!0,G=!0,W=!0){let T=0;if(R){let I=!1;if(L!==null){const X=L.texture.format;I=X===Ga||X===Ba||X===Fa}if(I){const X=L.texture.type,ut=X===Ln||X===An||X===Or||X===Xn||X===Na||X===Oa,Rt=Jt.getClearColor(),zt=Jt.getClearAlpha(),Kt=Rt.r,$t=Rt.g,Qt=Rt.b;ut?(f[0]=Kt,f[1]=$t,f[2]=Qt,f[3]=zt,U.clearBufferuiv(U.COLOR,0,f)):(_[0]=Kt,_[1]=$t,_[2]=Qt,_[3]=zt,U.clearBufferiv(U.COLOR,0,_))}else T|=U.COLOR_BUFFER_BIT}G&&(T|=U.DEPTH_BUFFER_BIT),W&&(T|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",gt,!1),e.removeEventListener("webglcontextrestored",x,!1),e.removeEventListener("webglcontextcreationerror",F,!1),At.dispose(),Ft.dispose(),vt.dispose(),S.dispose(),V.dispose(),rt.dispose(),Bt.dispose(),Yt.dispose(),Dt.dispose(),Wt.dispose(),Wt.removeEventListener("sessionstart",Xt),Wt.removeEventListener("sessionend",qt),Lt&&(Lt.dispose(),Lt=null),de.stop()};function gt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function x(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const R=Nt.autoReset,G=ct.enabled,W=ct.autoUpdate,T=ct.needsUpdate,I=ct.type;re(),Nt.autoReset=R,ct.enabled=G,ct.autoUpdate=W,ct.needsUpdate=T,ct.type=I}function F(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function J(R){const G=R.target;G.removeEventListener("dispose",J),k(G)}function k(R){q(R),vt.remove(R)}function q(R){const G=vt.get(R).programs;G!==void 0&&(G.forEach(function(W){Dt.releaseProgram(W)}),R.isShaderMaterial&&Dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,W,T,I,X){G===null&&(G=Pt);const ut=I.isMesh&&I.matrixWorld.determinant()<0,Rt=$n(R,G,W,T,I);Q.setMaterial(T,ut);let zt=W.index,Kt=1;if(T.wireframe===!0){if(zt=dt.getWireframeAttribute(W),zt===void 0)return;Kt=2}const $t=W.drawRange,Qt=W.attributes.position;let ve=$t.start*Kt,ze=($t.start+$t.count)*Kt;X!==null&&(ve=Math.max(ve,X.start*Kt),ze=Math.min(ze,(X.start+X.count)*Kt)),zt!==null?(ve=Math.max(ve,0),ze=Math.min(ze,zt.count)):Qt!=null&&(ve=Math.max(ve,0),ze=Math.min(ze,Qt.count));const Ee=ze-ve;if(Ee<0||Ee===1/0)return;Bt.setup(I,T,Rt,W,zt);let hn,fe=kt;if(zt!==null&&(hn=ht.get(zt),fe=Ut,fe.setIndex(hn)),I.isMesh)T.wireframe===!0?(Q.setLineWidth(T.wireframeLinewidth*St()),fe.setMode(U.LINES)):fe.setMode(U.TRIANGLES);else if(I.isLine){let ee=T.linewidth;ee===void 0&&(ee=1),Q.setLineWidth(ee*St()),I.isLineSegments?fe.setMode(U.LINES):I.isLineLoop?fe.setMode(U.LINE_LOOP):fe.setMode(U.LINE_STRIP)}else I.isPoints?fe.setMode(U.POINTS):I.isSprite&&fe.setMode(U.TRIANGLES);if(I.isBatchedMesh)fe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else if(I.isInstancedMesh)fe.renderInstances(ve,Ee,I.count);else if(W.isInstancedBufferGeometry){const ee=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ks=Math.min(W.instanceCount,ee);fe.renderInstances(ve,Ee,ks)}else fe.render(ve,Ee)};function et(R,G,W){R.transparent===!0&&R.side===Re&&R.forceSinglePass===!1?(R.side=Fe,R.needsUpdate=!0,sn(R,G,W),R.side=In,R.needsUpdate=!0,sn(R,G,W),R.side=Re):sn(R,G,W)}this.compile=function(R,G,W=null){W===null&&(W=R),m=Ft.get(W),m.init(),w.push(m),W.traverseVisible(function(I){I.isLight&&I.layers.test(G.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),R!==W&&R.traverseVisible(function(I){I.isLight&&I.layers.test(G.layers)&&(m.pushLight(I),I.castShadow&&m.pushShadow(I))}),m.setupLights(g._useLegacyLights);const T=new Set;return R.traverse(function(I){const X=I.material;if(X)if(Array.isArray(X))for(let ut=0;ut<X.length;ut++){const Rt=X[ut];et(Rt,W,I),T.add(Rt)}else et(X,W,I),T.add(X)}),w.pop(),m=null,T},this.compileAsync=function(R,G,W=null){const T=this.compile(R,G,W);return new Promise(I=>{function X(){if(T.forEach(function(ut){vt.get(ut).currentProgram.isReady()&&T.delete(ut)}),T.size===0){I(R);return}setTimeout(X,10)}tt.get("KHR_parallel_shader_compile")!==null?X():setTimeout(X,10)})};let _t=null;function Zt(R){_t&&_t(R)}function Xt(){de.stop()}function qt(){de.start()}const de=new nc;de.setAnimationLoop(Zt),typeof self<"u"&&de.setContext(self),this.setAnimationLoop=function(R){_t=R,Wt.setAnimationLoop(R),R===null?de.stop():de.start()},Wt.addEventListener("sessionstart",Xt),Wt.addEventListener("sessionend",qt),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Wt.enabled===!0&&Wt.isPresenting===!0&&(Wt.cameraAutoUpdate===!0&&Wt.updateCamera(G),G=Wt.getCamera()),R.isScene===!0&&R.onBeforeRender(g,R,G,L),m=Ft.get(R,w.length),m.init(),w.push(m),yt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),j.setFromProjectionMatrix(yt),xt=this.localClippingEnabled,lt=wt.init(this.clippingPlanes,xt),M=At.get(R,p.length),M.init(),p.push(M),we(R,G,0,g.sortObjects),M.finish(),g.sortObjects===!0&&M.sort(nt,Y),this.info.render.frame++,lt===!0&&wt.beginShadows();const W=m.state.shadowsArray;if(ct.render(W,R,G),lt===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Jt.render(M,R),m.setupLights(g._useLegacyLights),G.isArrayCamera){const T=G.cameras;for(let I=0,X=T.length;I<X;I++){const ut=T[I];nn(M,R,ut,ut.viewport)}}else nn(M,R,G);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(g,R,G),Bt.resetDefaultState(),B=-1,y=null,w.pop(),w.length>0?m=w[w.length-1]:m=null,p.pop(),p.length>0?M=p[p.length-1]:M=null};function we(R,G,W,T){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||j.intersectsSprite(R)){T&&Gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(yt);const ut=rt.update(R),Rt=R.material;Rt.visible&&M.push(R,ut,Rt,W,Gt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||j.intersectsObject(R))){const ut=rt.update(R),Rt=R.material;if(T&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Gt.copy(R.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Gt.copy(ut.boundingSphere.center)),Gt.applyMatrix4(R.matrixWorld).applyMatrix4(yt)),Array.isArray(Rt)){const zt=ut.groups;for(let Kt=0,$t=zt.length;Kt<$t;Kt++){const Qt=zt[Kt],ve=Rt[Qt.materialIndex];ve&&ve.visible&&M.push(R,ut,ve,W,Gt.z,Qt)}}else Rt.visible&&M.push(R,ut,Rt,W,Gt.z,null)}}const X=R.children;for(let ut=0,Rt=X.length;ut<Rt;ut++)we(X[ut],G,W,T)}function nn(R,G,W,T){const I=R.opaque,X=R.transmissive,ut=R.transparent;m.setupLightsView(W),lt===!0&&wt.setGlobalState(g.clippingPlanes,W),X.length>0&&ke(I,X,G,W),T&&Q.viewport(E.copy(T)),I.length>0&&ln(I,G,W),X.length>0&&ln(X,G,W),ut.length>0&&ln(ut,G,W),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function ke(R,G,W,T){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const X=mt.isWebGL2;Lt===null&&(Lt=new Zn(1,1,{generateMipmaps:!0,type:tt.has("EXT_color_buffer_half_float")?Hi:Ln,minFilter:Vi,samples:X?4:0})),g.getDrawingBufferSize(Ot),X?Lt.setSize(Ot.x,Ot.y):Lt.setSize(Rs(Ot.x),Rs(Ot.y));const ut=g.getRenderTarget();g.setRenderTarget(Lt),g.getClearColor(at),O=g.getClearAlpha(),O<1&&g.setClearColor(16777215,.5),g.clear();const Rt=g.toneMapping;g.toneMapping=Cn,ln(R,W,T),b.updateMultisampleRenderTarget(Lt),b.updateRenderTargetMipmap(Lt);let zt=!1;for(let Kt=0,$t=G.length;Kt<$t;Kt++){const Qt=G[Kt],ve=Qt.object,ze=Qt.geometry,Ee=Qt.material,hn=Qt.group;if(Ee.side===Re&&ve.layers.test(T.layers)){const fe=Ee.side;Ee.side=Fe,Ee.needsUpdate=!0,Sn(ve,W,T,ze,Ee,hn),Ee.side=fe,Ee.needsUpdate=!0,zt=!0}}zt===!0&&(b.updateMultisampleRenderTarget(Lt),b.updateRenderTargetMipmap(Lt)),g.setRenderTarget(ut),g.setClearColor(at,O),g.toneMapping=Rt}function ln(R,G,W){const T=G.isScene===!0?G.overrideMaterial:null;for(let I=0,X=R.length;I<X;I++){const ut=R[I],Rt=ut.object,zt=ut.geometry,Kt=T===null?ut.material:T,$t=ut.group;Rt.layers.test(W.layers)&&Sn(Rt,G,W,zt,Kt,$t)}}function Sn(R,G,W,T,I,X){R.onBeforeRender(g,G,W,T,I,X),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),I.onBeforeRender(g,G,W,T,R,X),I.transparent===!0&&I.side===Re&&I.forceSinglePass===!1?(I.side=Fe,I.needsUpdate=!0,g.renderBufferDirect(W,G,T,I,R,X),I.side=In,I.needsUpdate=!0,g.renderBufferDirect(W,G,T,I,R,X),I.side=Re):g.renderBufferDirect(W,G,T,I,R,X),R.onAfterRender(g,G,W,T,I,X)}function sn(R,G,W){G.isScene!==!0&&(G=Pt);const T=vt.get(R),I=m.state.lights,X=m.state.shadowsArray,ut=I.state.version,Rt=Dt.getParameters(R,I.state,X,G,W),zt=Dt.getProgramCacheKey(Rt);let Kt=T.programs;T.environment=R.isMeshStandardMaterial?G.environment:null,T.fog=G.fog,T.envMap=(R.isMeshStandardMaterial?V:S).get(R.envMap||T.environment),Kt===void 0&&(R.addEventListener("dispose",J),Kt=new Map,T.programs=Kt);let $t=Kt.get(zt);if($t!==void 0){if(T.currentProgram===$t&&T.lightsStateVersion===ut)return rn(R,Rt),$t}else Rt.uniforms=Dt.getUniforms(R),R.onBuild(W,Rt,g),R.onBeforeCompile(Rt,g),$t=Dt.acquireProgram(Rt,zt),Kt.set(zt,$t),T.uniforms=Rt.uniforms;const Qt=T.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Qt.clippingPlanes=wt.uniform),rn(R,Rt),T.needsLights=Un(R),T.lightsStateVersion=ut,T.needsLights&&(Qt.ambientLightColor.value=I.state.ambient,Qt.lightProbe.value=I.state.probe,Qt.directionalLights.value=I.state.directional,Qt.directionalLightShadows.value=I.state.directionalShadow,Qt.spotLights.value=I.state.spot,Qt.spotLightShadows.value=I.state.spotShadow,Qt.rectAreaLights.value=I.state.rectArea,Qt.ltc_1.value=I.state.rectAreaLTC1,Qt.ltc_2.value=I.state.rectAreaLTC2,Qt.pointLights.value=I.state.point,Qt.pointLightShadows.value=I.state.pointShadow,Qt.hemisphereLights.value=I.state.hemi,Qt.directionalShadowMap.value=I.state.directionalShadowMap,Qt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Qt.spotShadowMap.value=I.state.spotShadowMap,Qt.spotLightMatrix.value=I.state.spotLightMatrix,Qt.spotLightMap.value=I.state.spotLightMap,Qt.pointShadowMap.value=I.state.pointShadowMap,Qt.pointShadowMatrix.value=I.state.pointShadowMatrix),T.currentProgram=$t,T.uniformsList=null,$t}function Ze(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=ys.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function rn(R,G){const W=vt.get(R);W.outputColorSpace=G.outputColorSpace,W.batching=G.batching,W.instancing=G.instancing,W.instancingColor=G.instancingColor,W.skinning=G.skinning,W.morphTargets=G.morphTargets,W.morphNormals=G.morphNormals,W.morphColors=G.morphColors,W.morphTargetsCount=G.morphTargetsCount,W.numClippingPlanes=G.numClippingPlanes,W.numIntersection=G.numClipIntersection,W.vertexAlphas=G.vertexAlphas,W.vertexTangents=G.vertexTangents,W.toneMapping=G.toneMapping}function $n(R,G,W,T,I){G.isScene!==!0&&(G=Pt),b.resetTextureUnits();const X=G.fog,ut=T.isMeshStandardMaterial?G.environment:null,Rt=L===null?g.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Mn,zt=(T.isMeshStandardMaterial?V:S).get(T.envMap||ut),Kt=T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,$t=!!W.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),Qt=!!W.morphAttributes.position,ve=!!W.morphAttributes.normal,ze=!!W.morphAttributes.color;let Ee=Cn;T.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Ee=g.toneMapping);const hn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=hn!==void 0?hn.length:0,ee=vt.get(T),ks=m.state.lights;if(lt===!0&&(xt===!0||R!==y)){const We=R===y&&T.id===B;wt.setState(T,R,We)}let ge=!1;T.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==ks.state.version||ee.outputColorSpace!==Rt||I.isBatchedMesh&&ee.batching===!1||!I.isBatchedMesh&&ee.batching===!0||I.isInstancedMesh&&ee.instancing===!1||!I.isInstancedMesh&&ee.instancing===!0||I.isSkinnedMesh&&ee.skinning===!1||!I.isSkinnedMesh&&ee.skinning===!0||I.isInstancedMesh&&ee.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&ee.instancingColor===!1&&I.instanceColor!==null||ee.envMap!==zt||T.fog===!0&&ee.fog!==X||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==wt.numPlanes||ee.numIntersection!==wt.numIntersection)||ee.vertexAlphas!==Kt||ee.vertexTangents!==$t||ee.morphTargets!==Qt||ee.morphNormals!==ve||ee.morphColors!==ze||ee.toneMapping!==Ee||mt.isWebGL2===!0&&ee.morphTargetsCount!==fe)&&(ge=!0):(ge=!0,ee.__version=T.version);let Nn=ee.currentProgram;ge===!0&&(Nn=sn(T,G,I));let Zr=!1,Pi=!1,zs=!1;const Pe=Nn.getUniforms(),On=ee.uniforms;if(Q.useProgram(Nn.program)&&(Zr=!0,Pi=!0,zs=!0),T.id!==B&&(B=T.id,Pi=!0),Zr||y!==R){Pe.setValue(U,"projectionMatrix",R.projectionMatrix),Pe.setValue(U,"viewMatrix",R.matrixWorldInverse);const We=Pe.map.cameraPosition;We!==void 0&&We.setValue(U,Gt.setFromMatrixPosition(R.matrixWorld)),mt.logarithmicDepthBuffer&&Pe.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&Pe.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),y!==R&&(y=R,Pi=!0,zs=!0)}if(I.isSkinnedMesh){Pe.setOptional(U,I,"bindMatrix"),Pe.setOptional(U,I,"bindMatrixInverse");const We=I.skeleton;We&&(mt.floatVertexTextures?(We.boneTexture===null&&We.computeBoneTexture(),Pe.setValue(U,"boneTexture",We.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}I.isBatchedMesh&&(Pe.setOptional(U,I,"batchingTexture"),Pe.setValue(U,"batchingTexture",I._matricesTexture,b));const Vs=W.morphAttributes;if((Vs.position!==void 0||Vs.normal!==void 0||Vs.color!==void 0&&mt.isWebGL2===!0)&&Ht.update(I,W,Nn),(Pi||ee.receiveShadow!==I.receiveShadow)&&(ee.receiveShadow=I.receiveShadow,Pe.setValue(U,"receiveShadow",I.receiveShadow)),T.isMeshGouraudMaterial&&T.envMap!==null&&(On.envMap.value=zt,On.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Pi&&(Pe.setValue(U,"toneMappingExposure",g.toneMappingExposure),ee.needsLights&&Dn(On,zs),X&&T.fog===!0&&Mt.refreshFogUniforms(On,X),Mt.refreshMaterialUniforms(On,T,it,H,Lt),ys.upload(U,Ze(ee),On,b)),T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(ys.upload(U,Ze(ee),On,b),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&Pe.setValue(U,"center",I.center),Pe.setValue(U,"modelViewMatrix",I.modelViewMatrix),Pe.setValue(U,"normalMatrix",I.normalMatrix),Pe.setValue(U,"modelMatrix",I.matrixWorld),T.isShaderMaterial||T.isRawShaderMaterial){const We=T.uniformsGroups;for(let Hs=0,Sc=We.length;Hs<Sc;Hs++)if(mt.isWebGL2){const Kr=We[Hs];Yt.update(Kr,Nn),Yt.bind(Kr,Nn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Nn}function Dn(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function Un(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,G,W){vt.get(R.texture).__webglTexture=G,vt.get(R.depthTexture).__webglTexture=W;const T=vt.get(R);T.__hasExternalTextures=!0,T.__hasExternalTextures&&(T.__autoAllocateDepthBuffer=W===void 0,T.__autoAllocateDepthBuffer||tt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,G){const W=vt.get(R);W.__webglFramebuffer=G,W.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,W=0){L=R,D=G,C=W;let T=!0,I=null,X=!1,ut=!1;if(R){const zt=vt.get(R);zt.__useDefaultFramebuffer!==void 0?(Q.bindFramebuffer(U.FRAMEBUFFER,null),T=!1):zt.__webglFramebuffer===void 0?b.setupRenderTarget(R):zt.__hasExternalTextures&&b.rebindTextures(R,vt.get(R.texture).__webglTexture,vt.get(R.depthTexture).__webglTexture);const Kt=R.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(ut=!0);const $t=vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray($t[G])?I=$t[G][W]:I=$t[G],X=!0):mt.isWebGL2&&R.samples>0&&b.useMultisampledRTT(R)===!1?I=vt.get(R).__webglMultisampledFramebuffer:Array.isArray($t)?I=$t[W]:I=$t,E.copy(R.viewport),P.copy(R.scissor),Z=R.scissorTest}else E.copy(ot).multiplyScalar(it).floor(),P.copy(K).multiplyScalar(it).floor(),Z=pt;if(Q.bindFramebuffer(U.FRAMEBUFFER,I)&&mt.drawBuffers&&T&&Q.drawBuffers(R,I),Q.viewport(E),Q.scissor(P),Q.setScissorTest(Z),X){const zt=vt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+G,zt.__webglTexture,W)}else if(ut){const zt=vt.get(R.texture),Kt=G||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,zt.__webglTexture,W||0,Kt)}B=-1},this.readRenderTargetPixels=function(R,G,W,T,I,X,ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ut!==void 0&&(Rt=Rt[ut]),Rt){Q.bindFramebuffer(U.FRAMEBUFFER,Rt);try{const zt=R.texture,Kt=zt.format,$t=zt.type;if(Kt!==tn&&Ct.convert(Kt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Qt=$t===Hi&&(tt.has("EXT_color_buffer_half_float")||mt.isWebGL2&&tt.has("EXT_color_buffer_float"));if($t!==Ln&&Ct.convert($t)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!($t===Rn&&(mt.isWebGL2||tt.has("OES_texture_float")||tt.has("WEBGL_color_buffer_float")))&&!Qt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-T&&W>=0&&W<=R.height-I&&U.readPixels(G,W,T,I,Ct.convert(Kt),Ct.convert($t),X)}finally{const zt=L!==null?vt.get(L).__webglFramebuffer:null;Q.bindFramebuffer(U.FRAMEBUFFER,zt)}}},this.copyFramebufferToTexture=function(R,G,W=0){const T=Math.pow(2,-W),I=Math.floor(G.image.width*T),X=Math.floor(G.image.height*T);b.setTexture2D(G,0),U.copyTexSubImage2D(U.TEXTURE_2D,W,0,0,R.x,R.y,I,X),Q.unbindTexture()},this.copyTextureToTexture=function(R,G,W,T=0){const I=G.image.width,X=G.image.height,ut=Ct.convert(W.format),Rt=Ct.convert(W.type);b.setTexture2D(W,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment),G.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,T,R.x,R.y,I,X,ut,Rt,G.image.data):G.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,T,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,ut,G.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,T,R.x,R.y,ut,Rt,G.image),T===0&&W.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Q.unbindTexture()},this.copyTextureToTexture3D=function(R,G,W,T,I=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const X=R.max.x-R.min.x+1,ut=R.max.y-R.min.y+1,Rt=R.max.z-R.min.z+1,zt=Ct.convert(T.format),Kt=Ct.convert(T.type);let $t;if(T.isData3DTexture)b.setTexture3D(T,0),$t=U.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)b.setTexture2DArray(T,0),$t=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,T.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,T.unpackAlignment);const Qt=U.getParameter(U.UNPACK_ROW_LENGTH),ve=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ze=U.getParameter(U.UNPACK_SKIP_PIXELS),Ee=U.getParameter(U.UNPACK_SKIP_ROWS),hn=U.getParameter(U.UNPACK_SKIP_IMAGES),fe=W.isCompressedTexture?W.mipmaps[I]:W.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,fe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,fe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,R.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,R.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,R.min.z),W.isDataTexture||W.isData3DTexture?U.texSubImage3D($t,I,G.x,G.y,G.z,X,ut,Rt,zt,Kt,fe.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D($t,I,G.x,G.y,G.z,X,ut,Rt,zt,fe.data)):U.texSubImage3D($t,I,G.x,G.y,G.z,X,ut,Rt,zt,Kt,fe),U.pixelStorei(U.UNPACK_ROW_LENGTH,Qt),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ze),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ee),U.pixelStorei(U.UNPACK_SKIP_IMAGES,hn),I===0&&T.generateMipmaps&&U.generateMipmap($t),Q.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),Q.unbindTexture()},this.resetState=function(){D=0,C=0,L=null,Q.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Fr?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Ds?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ae?Yn:za}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Yn?Ae:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Gp extends hc{}Gp.prototype.isWebGL1Renderer=!0;class zr{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new ie(t),this.density=e}clone(){return new zr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class kp extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class uc extends Ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _a=new N,va=new N,Ma=new _e,Mr=new Za,vs=new Us;class zp extends xe{constructor(t=new De,e=new uc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)_a.fromBufferAttribute(e,i-1),va.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=_a.distanceTo(va);t.setAttribute("lineDistance",new ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(i),vs.radius+=r,t.ray.intersectsSphere(vs)===!1)return;Ma.copy(i).invert(),Mr.copy(t.ray).applyMatrix4(Ma);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new N,u=new N,d=new N,l=new N,f=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const p=Math.max(0,a.start),w=Math.min(_.count,a.start+a.count);for(let g=p,v=w-1;g<v;g+=f){const D=_.getX(g),C=_.getX(g+1);if(h.fromBufferAttribute(m,D),u.fromBufferAttribute(m,C),Mr.distanceSqToSegment(h,u,l,d)>c)continue;l.applyMatrix4(this.matrixWorld);const B=t.ray.origin.distanceTo(l);B<t.near||B>t.far||e.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,a.start),w=Math.min(m.count,a.start+a.count);for(let g=p,v=w-1;g<v;g+=f){if(h.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),Mr.distanceSqToSegment(h,u,l,d)>c)continue;l.applyMatrix4(this.matrixWorld);const C=t.ray.origin.distanceTo(l);C<t.near||C>t.far||e.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}class le extends Ge{constructor(t,e,n,i,r,a,o,c,h){super(t,e,n,i,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(i=Math.floor(o+(c-o)/2),h=n[i]-a,h<0)o=i+1;else if(h>0)c=i-1;else{c=i;break}if(i=c,n[i]===a)return i/(r-1);const u=n[i],l=n[i+1]-u,f=(a-u)/l;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const a=this.getPoint(i),o=this.getPoint(r),c=e||(a.isVector2?new Tt:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new N,i=[],r=[],a=[],o=new N,c=new _e;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new N)}r[0]=new N,a[0]=new N;let h=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),l=Math.abs(i[0].z);u<=h&&(h=u,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),l<=h&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],o),a[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(i[f-1],i[f]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(be(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,_))}a[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(i[_],f*_)),a[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Vr extends cn{constructor(t=0,e=0,n=1,i=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e){const n=e||new Tt,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(a?r=0:r=i),this.aClockwise===!0&&!a&&(r===i?r=-i:r=r-i);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),l=c-this.aX,f=h-this.aY;c=l*u-f*d+this.aX,h=l*d+f*u+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Vp extends Vr{constructor(t,e,n,i,r,a){super(t,e,n,n,i,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Hr(){let s=0,t=0,e=0,n=0;function i(r,a,o,c){s=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){i(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,u,d){let l=(a-r)/h-(o-r)/(h+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;l*=u,f*=u,i(a,o,l,f)},calc:function(r){const a=r*r,o=a*r;return s+t*r+e*a+n*o}}}const Ms=new N,xr=new Hr,Sr=new Hr,yr=new Hr;class Cs extends cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){const n=e,i=this.points,r=i.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,u;this.closed||o>0?h=i[(o-1)%r]:(Ms.subVectors(i[0],i[1]).add(i[0]),h=Ms);const d=i[o%r],l=i[(o+1)%r];if(this.closed||o+2<r?u=i[(o+2)%r]:(Ms.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Ms),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(h.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(l),f),m=Math.pow(l.distanceToSquared(u),f);M<1e-4&&(M=1),_<1e-4&&(_=M),m<1e-4&&(m=M),xr.initNonuniformCatmullRom(h.x,d.x,l.x,u.x,_,M,m),Sr.initNonuniformCatmullRom(h.y,d.y,l.y,u.y,_,M,m),yr.initNonuniformCatmullRom(h.z,d.z,l.z,u.z,_,M,m)}else this.curveType==="catmullrom"&&(xr.initCatmullRom(h.x,d.x,l.x,u.x,this.tension),Sr.initCatmullRom(h.y,d.y,l.y,u.y,this.tension),yr.initCatmullRom(h.z,d.z,l.z,u.z,this.tension));return n.set(xr.calc(c),Sr.calc(c),yr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xa(s,t,e,n,i){const r=(n-t)*.5,a=(i-e)*.5,o=s*s,c=s*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*s+e}function Hp(s,t){const e=1-s;return e*e*t}function Wp(s,t){return 2*(1-s)*s*t}function Xp(s,t){return s*s*t}function Gi(s,t,e,n){return Hp(s,t)+Wp(s,e)+Xp(s,n)}function qp(s,t){const e=1-s;return e*e*e*t}function Yp(s,t){const e=1-s;return 3*e*e*s*t}function Zp(s,t){return 3*(1-s)*s*s*t}function Kp(s,t){return s*s*s*t}function ki(s,t,e,n,i){return qp(s,t)+Yp(s,e)+Zp(s,n)+Kp(s,i)}class dc extends cn{constructor(t=new Tt,e=new Tt,n=new Tt,i=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Tt){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ki(t,i.x,r.x,a.x,o.x),ki(t,i.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jp extends cn{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){const n=e,i=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ki(t,i.x,r.x,a.x,o.x),ki(t,i.y,r.y,a.y,o.y),ki(t,i.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fc extends cn{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class jp extends cn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class pc extends cn{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Gi(t,i.x,r.x,a.x),Gi(t,i.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mc extends cn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){const n=e,i=this.v0,r=this.v1,a=this.v2;return n.set(Gi(t,i.x,r.x,a.x),Gi(t,i.y,r.y,a.y),Gi(t,i.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gc extends cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,i=this.points,r=(i.length-1)*t,a=Math.floor(r),o=r-a,c=i[a===0?a:a-1],h=i[a],u=i[a>i.length-2?i.length-1:a+1],d=i[a>i.length-3?i.length-1:a+2];return n.set(xa(o,c.x,h.x,u.x,d.x),xa(o,c.y,h.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Tt().fromArray(i))}return this}}var Ls=Object.freeze({__proto__:null,ArcCurve:Vp,CatmullRomCurve3:Cs,CubicBezierCurve:dc,CubicBezierCurve3:Jp,EllipseCurve:Vr,LineCurve:fc,LineCurve3:jp,QuadraticBezierCurve:pc,QuadraticBezierCurve3:mc,SplineCurve:gc});class $p extends cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ls[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const a=i[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const a=r[i],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){const u=c[h];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Ls[i.type]().fromJSON(i))}return this}}class Sa extends $p{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new fc(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new pc(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,a){const o=new dc(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i),new Tt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new gc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,i,r,a),this}absarc(t,e,n,i,r,a){return this.absellipse(t,e,n,n,i,r,a),this}ellipse(t,e,n,i,r,a,o,c){const h=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+h,e+u,n,i,r,a,o,c),this}absellipse(t,e,n,i,r,a,o,c){const h=new Vr(t,e,n,i,r,a,o,c);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const u=h.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Fs extends De{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],a=[],o=[],c=[],h=new N,u=new Tt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,l=3;d<=e;d++,l+=3){const f=n+d/e*i;h.x=t*Math.cos(f),h.y=t*Math.sin(f),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[l]/t+1)/2,u.y=(a[l+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Et extends De{constructor(t=1,e=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;i=Math.floor(i),r=Math.floor(r);const u=[],d=[],l=[],f=[];let _=0;const M=[],m=n/2;let p=0;w(),a===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(u),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(f,2));function w(){const v=new N,D=new N;let C=0;const L=(e-t)/n;for(let B=0;B<=r;B++){const y=[],E=B/r,P=E*(e-t)+t;for(let Z=0;Z<=i;Z++){const at=Z/i,O=at*c+o,z=Math.sin(O),H=Math.cos(O);D.x=P*z,D.y=-E*n+m,D.z=P*H,d.push(D.x,D.y,D.z),v.set(z,L,H).normalize(),l.push(v.x,v.y,v.z),f.push(at,1-E),y.push(_++)}M.push(y)}for(let B=0;B<i;B++)for(let y=0;y<r;y++){const E=M[y][B],P=M[y+1][B],Z=M[y+1][B+1],at=M[y][B+1];u.push(E,P,at),u.push(P,Z,at),C+=6}h.addGroup(p,C,0),p+=C}function g(v){const D=_,C=new Tt,L=new N;let B=0;const y=v===!0?t:e,E=v===!0?1:-1;for(let Z=1;Z<=i;Z++)d.push(0,m*E,0),l.push(0,E,0),f.push(.5,.5),_++;const P=_;for(let Z=0;Z<=i;Z++){const O=Z/i*c+o,z=Math.cos(O),H=Math.sin(O);L.x=y*H,L.y=m*E,L.z=y*z,d.push(L.x,L.y,L.z),l.push(0,E,0),C.x=z*.5+.5,C.y=H*.5*E+.5,f.push(C.x,C.y),_++}for(let Z=0;Z<i;Z++){const at=D+Z,O=P+Z;v===!0?u.push(O,O+1,at):u.push(O+1,O,at),B+=3}h.addGroup(p,B,v===!0?1:2),p+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ie extends Et{constructor(t=1,e=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ie(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Wr extends De{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],a=[];o(i),h(n),u(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(w){const g=new N,v=new N,D=new N;for(let C=0;C<e.length;C+=3)f(e[C+0],g),f(e[C+1],v),f(e[C+2],D),c(g,v,D,w)}function c(w,g,v,D){const C=D+1,L=[];for(let B=0;B<=C;B++){L[B]=[];const y=w.clone().lerp(v,B/C),E=g.clone().lerp(v,B/C),P=C-B;for(let Z=0;Z<=P;Z++)Z===0&&B===C?L[B][Z]=y:L[B][Z]=y.clone().lerp(E,Z/P)}for(let B=0;B<C;B++)for(let y=0;y<2*(C-B)-1;y++){const E=Math.floor(y/2);y%2===0?(l(L[B][E+1]),l(L[B+1][E]),l(L[B][E])):(l(L[B][E+1]),l(L[B+1][E+1]),l(L[B+1][E]))}}function h(w){const g=new N;for(let v=0;v<r.length;v+=3)g.x=r[v+0],g.y=r[v+1],g.z=r[v+2],g.normalize().multiplyScalar(w),r[v+0]=g.x,r[v+1]=g.y,r[v+2]=g.z}function u(){const w=new N;for(let g=0;g<r.length;g+=3){w.x=r[g+0],w.y=r[g+1],w.z=r[g+2];const v=m(w)/2/Math.PI+.5,D=p(w)/Math.PI+.5;a.push(v,1-D)}_(),d()}function d(){for(let w=0;w<a.length;w+=6){const g=a[w+0],v=a[w+2],D=a[w+4],C=Math.max(g,v,D),L=Math.min(g,v,D);C>.9&&L<.1&&(g<.2&&(a[w+0]+=1),v<.2&&(a[w+2]+=1),D<.2&&(a[w+4]+=1))}}function l(w){r.push(w.x,w.y,w.z)}function f(w,g){const v=w*3;g.x=t[v+0],g.y=t[v+1],g.z=t[v+2]}function _(){const w=new N,g=new N,v=new N,D=new N,C=new Tt,L=new Tt,B=new Tt;for(let y=0,E=0;y<r.length;y+=9,E+=6){w.set(r[y+0],r[y+1],r[y+2]),g.set(r[y+3],r[y+4],r[y+5]),v.set(r[y+6],r[y+7],r[y+8]),C.set(a[E+0],a[E+1]),L.set(a[E+2],a[E+3]),B.set(a[E+4],a[E+5]),D.copy(w).add(g).add(v).divideScalar(3);const P=m(D);M(C,E+0,w,P),M(L,E+2,g,P),M(B,E+4,v,P)}}function M(w,g,v,D){D<0&&w.x===1&&(a[g]=w.x-1),v.x===0&&v.z===0&&(a[g]=D/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wr(t.vertices,t.indices,t.radius,t.details)}}class Xr extends Wr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xr(t.radius,t.detail)}}class _c extends Sa{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Sa().fromJSON(i))}return this}}const Qp={triangulate:function(s,t,e=2){const n=t&&t.length,i=n?t[0]*e:s.length;let r=vc(s,0,i,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,h,u,d,l,f;if(n&&(r=s0(s,t,r,e)),s.length>80*e){o=h=s[0],c=u=s[1];for(let _=e;_<i;_+=e)d=s[_],l=s[_+1],d<o&&(o=d),l<c&&(c=l),d>h&&(h=d),l>u&&(u=l);f=Math.max(h-o,u-c),f=f!==0?32767/f:0}return Wi(r,a,e,o,c,f,0),a}};function vc(s,t,e,n,i){let r,a;if(i===m0(s,t,e,n)>0)for(r=t;r<e;r+=n)a=ya(r,s[r],s[r+1],a);else for(r=e-n;r>=t;r-=n)a=ya(r,s[r],s[r+1],a);return a&&Bs(a,a.next)&&(qi(a),a=a.next),a}function Jn(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Bs(e,e.next)||me(e.prev,e,e.next)===0)){if(qi(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Wi(s,t,e,n,i,r,a){if(!s)return;!a&&r&&l0(s,n,i,r);let o=s,c,h;for(;s.prev!==s.next;){if(c=s.prev,h=s.next,r?e0(s,n,i,r):t0(s)){t.push(c.i/e|0),t.push(s.i/e|0),t.push(h.i/e|0),qi(s),s=h.next,o=h.next;continue}if(s=h,s===o){a?a===1?(s=n0(Jn(s),t,e),Wi(s,t,e,n,i,r,2)):a===2&&i0(s,t,e,n,i,r):Wi(Jn(s),t,e,n,i,r,1);break}}}function t0(s){const t=s.prev,e=s,n=s.next;if(me(t,e,n)>=0)return!1;const i=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,u=i<r?i<a?i:a:r<a?r:a,d=o<c?o<h?o:h:c<h?c:h,l=i>r?i>a?i:a:r>a?r:a,f=o>c?o>h?o:h:c>h?c:h;let _=n.next;for(;_!==t;){if(_.x>=u&&_.x<=l&&_.y>=d&&_.y<=f&&vi(i,o,r,c,a,h,_.x,_.y)&&me(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function e0(s,t,e,n){const i=s.prev,r=s,a=s.next;if(me(i,r,a)>=0)return!1;const o=i.x,c=r.x,h=a.x,u=i.y,d=r.y,l=a.y,f=o<c?o<h?o:h:c<h?c:h,_=u<d?u<l?u:l:d<l?d:l,M=o>c?o>h?o:h:c>h?c:h,m=u>d?u>l?u:l:d>l?d:l,p=Dr(f,_,t,e,n),w=Dr(M,m,t,e,n);let g=s.prevZ,v=s.nextZ;for(;g&&g.z>=p&&v&&v.z<=w;){if(g.x>=f&&g.x<=M&&g.y>=_&&g.y<=m&&g!==i&&g!==a&&vi(o,u,c,d,h,l,g.x,g.y)&&me(g.prev,g,g.next)>=0||(g=g.prevZ,v.x>=f&&v.x<=M&&v.y>=_&&v.y<=m&&v!==i&&v!==a&&vi(o,u,c,d,h,l,v.x,v.y)&&me(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;g&&g.z>=p;){if(g.x>=f&&g.x<=M&&g.y>=_&&g.y<=m&&g!==i&&g!==a&&vi(o,u,c,d,h,l,g.x,g.y)&&me(g.prev,g,g.next)>=0)return!1;g=g.prevZ}for(;v&&v.z<=w;){if(v.x>=f&&v.x<=M&&v.y>=_&&v.y<=m&&v!==i&&v!==a&&vi(o,u,c,d,h,l,v.x,v.y)&&me(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function n0(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!Bs(i,r)&&Mc(i,n,n.next,r)&&Xi(i,r)&&Xi(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),qi(n),qi(n.next),n=s=r),n=n.next}while(n!==s);return Jn(n)}function i0(s,t,e,n,i,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&d0(a,o)){let c=xc(a,o);a=Jn(a,a.next),c=Jn(c,c.next),Wi(a,t,e,n,i,r,0),Wi(c,t,e,n,i,r,0);return}o=o.next}a=a.next}while(a!==s)}function s0(s,t,e,n){const i=[];let r,a,o,c,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:s.length,h=vc(s,o,c,n,!1),h===h.next&&(h.steiner=!0),i.push(u0(h));for(i.sort(r0),r=0;r<i.length;r++)e=o0(i[r],e);return e}function r0(s,t){return s.x-t.x}function o0(s,t){const e=a0(s,t);if(!e)return t;const n=xc(e,s);return Jn(n,n.next),Jn(e,e.next)}function a0(s,t){let e=t,n=-1/0,i;const r=s.x,a=s.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const l=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(l<=r&&l>n&&(n=l,i=e.x<e.next.x?e:e.next,l===r))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,c=i.x,h=i.y;let u=1/0,d;e=i;do r>=e.x&&e.x>=c&&r!==e.x&&vi(a<h?r:n,a,c,h,a<h?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),Xi(e,s)&&(d<u||d===u&&(e.x>i.x||e.x===i.x&&c0(i,e)))&&(i=e,u=d)),e=e.next;while(e!==o);return i}function c0(s,t){return me(s.prev,s,t.prev)<0&&me(t.next,s,s.next)<0}function l0(s,t,e,n){let i=s;do i.z===0&&(i.z=Dr(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,h0(i)}function h0(s){let t,e,n,i,r,a,o,c,h=1;do{for(e=s,s=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,h*=2}while(a>1);return s}function Dr(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function u0(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function vi(s,t,e,n,i,r,a,o){return(i-a)*(t-o)>=(s-a)*(r-o)&&(s-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(i-a)*(n-o)}function d0(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!f0(s,t)&&(Xi(s,t)&&Xi(t,s)&&p0(s,t)&&(me(s.prev,s,t.prev)||me(s,t.prev,t))||Bs(s,t)&&me(s.prev,s,s.next)>0&&me(t.prev,t,t.next)>0)}function me(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Bs(s,t){return s.x===t.x&&s.y===t.y}function Mc(s,t,e,n){const i=Ss(me(s,t,e)),r=Ss(me(s,t,n)),a=Ss(me(e,n,s)),o=Ss(me(e,n,t));return!!(i!==r&&a!==o||i===0&&xs(s,e,t)||r===0&&xs(s,n,t)||a===0&&xs(e,s,n)||o===0&&xs(e,t,n))}function xs(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Ss(s){return s>0?1:s<0?-1:0}function f0(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Mc(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Xi(s,t){return me(s.prev,s,s.next)<0?me(s,t,s.next)>=0&&me(s,s.prev,t)>=0:me(s,t,s.prev)<0||me(s,s.next,t)<0}function p0(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function xc(s,t){const e=new Ur(s.i,s.x,s.y),n=new Ur(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ya(s,t,e,n){const i=new Ur(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function qi(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ur(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function m0(s,t,e,n){let i=0;for(let r=t,a=e-n;r<e;r+=n)i+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return i}class zi{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return zi.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];wa(t),Ea(n,t);let a=t.length;e.forEach(wa);for(let c=0;c<e.length;c++)i.push(a),a+=e[c].length,Ea(n,e[c]);const o=Qp.triangulate(n,i);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function wa(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ea(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class qr extends De{constructor(t=new _c([new Tt(.5,.5),new Tt(-.5,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],r=[];for(let o=0,c=t.length;o<c;o++){const h=t[o];a(h)}this.setAttribute("position",new ae(i,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let l=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,_=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:g0;let g,v=!1,D,C,L,B;p&&(g=p.getSpacedPoints(u),v=!0,l=!1,D=p.computeFrenetFrames(u,!1),C=new N,L=new N,B=new N),l||(m=0,f=0,_=0,M=0);const y=o.extractPoints(h);let E=y.shape;const P=y.holes;if(!zi.isClockWise(E)){E=E.reverse();for(let U=0,ft=P.length;U<ft;U++){const tt=P[U];zi.isClockWise(tt)&&(P[U]=tt.reverse())}}const at=zi.triangulateShape(E,P),O=E;for(let U=0,ft=P.length;U<ft;U++){const tt=P[U];E=E.concat(tt)}function z(U,ft,tt){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(ft,tt)}const H=E.length,it=at.length;function nt(U,ft,tt){let mt,Q,Nt;const vt=U.x-ft.x,b=U.y-ft.y,S=tt.x-U.x,V=tt.y-U.y,ht=vt*vt+b*b,dt=vt*V-b*S;if(Math.abs(dt)>Number.EPSILON){const rt=Math.sqrt(ht),Dt=Math.sqrt(S*S+V*V),Mt=ft.x-b/rt,At=ft.y+vt/rt,Ft=tt.x-V/Dt,wt=tt.y+S/Dt,ct=((Ft-Mt)*V-(wt-At)*S)/(vt*V-b*S);mt=Mt+vt*ct-U.x,Q=At+b*ct-U.y;const Jt=mt*mt+Q*Q;if(Jt<=2)return new Tt(mt,Q);Nt=Math.sqrt(Jt/2)}else{let rt=!1;vt>Number.EPSILON?S>Number.EPSILON&&(rt=!0):vt<-Number.EPSILON?S<-Number.EPSILON&&(rt=!0):Math.sign(b)===Math.sign(V)&&(rt=!0),rt?(mt=-b,Q=vt,Nt=Math.sqrt(ht)):(mt=vt,Q=b,Nt=Math.sqrt(ht/2))}return new Tt(mt/Nt,Q/Nt)}const Y=[];for(let U=0,ft=O.length,tt=ft-1,mt=U+1;U<ft;U++,tt++,mt++)tt===ft&&(tt=0),mt===ft&&(mt=0),Y[U]=nt(O[U],O[tt],O[mt]);const ot=[];let K,pt=Y.concat();for(let U=0,ft=P.length;U<ft;U++){const tt=P[U];K=[];for(let mt=0,Q=tt.length,Nt=Q-1,vt=mt+1;mt<Q;mt++,Nt++,vt++)Nt===Q&&(Nt=0),vt===Q&&(vt=0),K[mt]=nt(tt[mt],tt[Nt],tt[vt]);ot.push(K),pt=pt.concat(K)}for(let U=0;U<m;U++){const ft=U/m,tt=f*Math.cos(ft*Math.PI/2),mt=_*Math.sin(ft*Math.PI/2)+M;for(let Q=0,Nt=O.length;Q<Nt;Q++){const vt=z(O[Q],Y[Q],mt);yt(vt.x,vt.y,-tt)}for(let Q=0,Nt=P.length;Q<Nt;Q++){const vt=P[Q];K=ot[Q];for(let b=0,S=vt.length;b<S;b++){const V=z(vt[b],K[b],mt);yt(V.x,V.y,-tt)}}}const j=_+M;for(let U=0;U<H;U++){const ft=l?z(E[U],pt[U],j):E[U];v?(L.copy(D.normals[0]).multiplyScalar(ft.x),C.copy(D.binormals[0]).multiplyScalar(ft.y),B.copy(g[0]).add(L).add(C),yt(B.x,B.y,B.z)):yt(ft.x,ft.y,0)}for(let U=1;U<=u;U++)for(let ft=0;ft<H;ft++){const tt=l?z(E[ft],pt[ft],j):E[ft];v?(L.copy(D.normals[U]).multiplyScalar(tt.x),C.copy(D.binormals[U]).multiplyScalar(tt.y),B.copy(g[U]).add(L).add(C),yt(B.x,B.y,B.z)):yt(tt.x,tt.y,d/u*U)}for(let U=m-1;U>=0;U--){const ft=U/m,tt=f*Math.cos(ft*Math.PI/2),mt=_*Math.sin(ft*Math.PI/2)+M;for(let Q=0,Nt=O.length;Q<Nt;Q++){const vt=z(O[Q],Y[Q],mt);yt(vt.x,vt.y,d+tt)}for(let Q=0,Nt=P.length;Q<Nt;Q++){const vt=P[Q];K=ot[Q];for(let b=0,S=vt.length;b<S;b++){const V=z(vt[b],K[b],mt);v?yt(V.x,V.y+g[u-1].y,g[u-1].x+tt):yt(V.x,V.y,d+tt)}}}lt(),xt();function lt(){const U=i.length/3;if(l){let ft=0,tt=H*ft;for(let mt=0;mt<it;mt++){const Q=at[mt];Ot(Q[2]+tt,Q[1]+tt,Q[0]+tt)}ft=u+m*2,tt=H*ft;for(let mt=0;mt<it;mt++){const Q=at[mt];Ot(Q[0]+tt,Q[1]+tt,Q[2]+tt)}}else{for(let ft=0;ft<it;ft++){const tt=at[ft];Ot(tt[2],tt[1],tt[0])}for(let ft=0;ft<it;ft++){const tt=at[ft];Ot(tt[0]+H*u,tt[1]+H*u,tt[2]+H*u)}}n.addGroup(U,i.length/3-U,0)}function xt(){const U=i.length/3;let ft=0;Lt(O,ft),ft+=O.length;for(let tt=0,mt=P.length;tt<mt;tt++){const Q=P[tt];Lt(Q,ft),ft+=Q.length}n.addGroup(U,i.length/3-U,1)}function Lt(U,ft){let tt=U.length;for(;--tt>=0;){const mt=tt;let Q=tt-1;Q<0&&(Q=U.length-1);for(let Nt=0,vt=u+m*2;Nt<vt;Nt++){const b=H*Nt,S=H*(Nt+1),V=ft+mt+b,ht=ft+Q+b,dt=ft+Q+S,rt=ft+mt+S;Gt(V,ht,dt,rt)}}}function yt(U,ft,tt){c.push(U),c.push(ft),c.push(tt)}function Ot(U,ft,tt){Pt(U),Pt(ft),Pt(tt);const mt=i.length/3,Q=w.generateTopUV(n,i,mt-3,mt-2,mt-1);St(Q[0]),St(Q[1]),St(Q[2])}function Gt(U,ft,tt,mt){Pt(U),Pt(ft),Pt(mt),Pt(ft),Pt(tt),Pt(mt);const Q=i.length/3,Nt=w.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);St(Nt[0]),St(Nt[1]),St(Nt[3]),St(Nt[1]),St(Nt[2]),St(Nt[3])}function Pt(U){i.push(c[U*3+0]),i.push(c[U*3+1]),i.push(c[U*3+2])}function St(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _0(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Ls[i.type]().fromJSON(i)),new qr(n,t.options)}}const g0={generateTopUV:function(s,t,e,n,i){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[i*3],u=t[i*3+1];return[new Tt(r,a),new Tt(o,c),new Tt(h,u)]},generateSideWallUV:function(s,t,e,n,i,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],u=t[n*3+1],d=t[n*3+2],l=t[i*3],f=t[i*3+1],_=t[i*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new Tt(a,1-c),new Tt(h,1-d),new Tt(l,1-_),new Tt(M,1-p)]:[new Tt(o,1-c),new Tt(u,1-d),new Tt(f,1-_),new Tt(m,1-p)]}};function _0(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){const r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class se extends De{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const u=[],d=new N,l=new N,f=[],_=[],M=[],m=[];for(let p=0;p<=n;p++){const w=[],g=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const C=D/e;d.x=-t*Math.cos(i+C*r)*Math.sin(a+g*o),d.y=t*Math.cos(a+g*o),d.z=t*Math.sin(i+C*r)*Math.sin(a+g*o),_.push(d.x,d.y,d.z),l.copy(d).normalize(),M.push(l.x,l.y,l.z),m.push(C+v,1-g),w.push(h++)}u.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const g=u[p][w+1],v=u[p][w],D=u[p+1][w],C=u[p+1][w+1];(p!==0||a>0)&&f.push(g,v,C),(p!==n-1||c<Math.PI)&&f.push(v,D,C)}this.setIndex(f),this.setAttribute("position",new ae(_,3)),this.setAttribute("normal",new ae(M,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new se(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _n extends De{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],h=[],u=new N,d=new N,l=new N;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const M=_/i*r,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(M),d.y=(t+e*Math.cos(m))*Math.sin(M),d.z=e*Math.sin(m),o.push(d.x,d.y,d.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),l.subVectors(d,u).normalize(),c.push(l.x,l.y,l.z),h.push(_/i),h.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const M=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,w=(i+1)*f+_;a.push(M,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Yi extends De{constructor(t=new mc(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new N,c=new N,h=new Tt;let u=new N;const d=[],l=[],f=[],_=[];M(),this.setIndex(_),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(f,2));function M(){for(let g=0;g<e;g++)m(g);m(r===!1?e:0),w(),p()}function m(g){u=t.getPointAt(g/e,u);const v=a.normals[g],D=a.binormals[g];for(let C=0;C<=i;C++){const L=C/i*Math.PI*2,B=Math.sin(L),y=-Math.cos(L);c.x=y*v.x+B*D.x,c.y=y*v.y+B*D.y,c.z=y*v.z+B*D.z,c.normalize(),l.push(c.x,c.y,c.z),o.x=u.x+n*c.x,o.y=u.y+n*c.y,o.z=u.z+n*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let g=1;g<=e;g++)for(let v=1;v<=i;v++){const D=(i+1)*(g-1)+(v-1),C=(i+1)*g+(v-1),L=(i+1)*g+v,B=(i+1)*(g-1)+v;_.push(D,C,B),_.push(C,L,B)}}function w(){for(let g=0;g<=e;g++)for(let v=0;v<=i;v++)h.x=g/e,h.y=v/i,f.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Yi(new Ls[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class $ extends Ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Va,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zi extends ${constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Gs extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ie(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class v0 extends Gs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ie(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wr=new _e,Ta=new N,ba=new N;class Yr{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ta.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ta),ba.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ba),e.updateMatrixWorld(),wr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class M0 extends Yr{constructor(){super(new Be(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ei*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||i!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=i,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class x0 extends Gs{constructor(t,e,n=0,i=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new M0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Aa=new _e,Ni=new N,Er=new N;class S0 extends Yr{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Tt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ni.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ni),Er.copy(n.position),Er.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Er),n.updateMatrixWorld(),i.makeTranslation(-Ni.x,-Ni.y,-Ni.z),Aa.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Aa)}}class y0 extends Gs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new S0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class w0 extends Yr{constructor(){super(new ic(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E0 extends Gs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new w0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class T0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ra(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ra();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ra(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nr);const Vt={LANES:[-3.7,0,3.7],ROAD_WIDTH:13,ROAD_SEGMENT_LENGTH:60,ROAD_SEGMENT_COUNT:8,SPEED:{MIN:45,BASE_START:82,PROGRESSIVE_RATE:16,MAX_PROGRESSIVE_BONUS:90,BASE:85,MAX_NORMAL:145,BOOST:225,ACCELERATION:28,BRAKING:95,NATURAL_DECEL:22,BOOST_ACCEL:115},STEERING:{LANE_CHANGE_SPEED:9,WHEEL_TURN_ANGLE:.35},NITRO:{MAX:100,CONSUMPTION_RATE:24,RECHARGE_RATE:8,NEAR_MISS_BONUS:28},TRAFFIC:{SPAWN_DISTANCE:190,DESPAWN_DISTANCE:45,SPEEDS:{cow_truck:[60,75],truck:[65,80],bus:[75,90],suv:[80,100],sedan:[90,115]}},SCORING:{DISTANCE_MULTIPLIER:1,NEAR_MISS_POINTS:300,NEAR_MISS_DIST_X:2.1,NEAR_MISS_DIST_Z:5.5,COMBO_TIMEOUT:3.8,MAX_COMBO:5},CAMERA:{DEFAULT_OFFSET:{x:0,y:4.4,z:9.2},LOOK_OFFSET:{x:0,y:1.8,z:-15},BASE_FOV:65,FOV_LERP_SPEED:3.5}},ce={MENU:"MENU",PLAYING:"PLAYING",PAUSED:"PAUSED",GAMEOVER:"GAMEOVER"};class b0{constructor(){this.state=ce.MENU,this.speedKmh=Vt.SPEED.BASE,this.distanceMeters=0,this.score=0,this.bestScore=parseInt(localStorage.getItem("supra_rush_best_score")||"0",10),this.bestDistance=parseInt(localStorage.getItem("supra_rush_best_dist")||"0",10),this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=70,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Vt.LANES[1],this.targetLaneX=Vt.LANES[1],this.crashTimer=0}startNewGame(){this.state=ce.PLAYING,this.speedKmh=Vt.SPEED.BASE_START,this.distanceMeters=0,this.score=0,this.nearMissCount=0,this.combo=1,this.comboTimer=0,this.nitro=60,this.isBoosting=!1,this.currentLaneIndex=1,this.currentLaneX=Vt.LANES[1],this.targetLaneX=Vt.LANES[1],this.crashTimer=0}switchLane(t){if(this.state!==ce.PLAYING)return;const e=this.currentLaneIndex+t;e>=0&&e<Vt.LANES.length&&(this.currentLaneIndex=e,this.targetLaneX=Vt.LANES[e])}addNearMiss(){this.nearMissCount++,this.combo=Math.min(Vt.SCORING.MAX_COMBO,this.combo+1),this.comboTimer=Vt.SCORING.COMBO_TIMEOUT;const t=Vt.SCORING.NEAR_MISS_POINTS*this.combo;return this.score+=t,this.nitro=Math.min(Vt.NITRO.MAX,this.nitro+Vt.NITRO.NEAR_MISS_BONUS),{bonus:t,combo:this.combo}}update(t,e){if(this.state!==ce.PLAYING)return;const n=e.consumeLaneChange();n!==0&&this.switchLane(n),this.currentLaneX+=(this.targetLaneX-this.currentLaneX)*Math.min(1,t*Vt.STEERING.LANE_CHANGE_SPEED),this.comboTimer>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.combo=1));const i=e.keys.brake,r=e.keys.accelerate,a=e.keys.boost,o=this.distanceMeters/1e3,c=Math.min(Vt.SPEED.MAX_PROGRESSIVE_BONUS,o*Vt.SPEED.PROGRESSIVE_RATE),h=Vt.SPEED.BASE_START+c,u=h+45,d=Vt.SPEED.BOOST+c*.4;a&&this.nitro>5?(this.isBoosting=!0,this.nitro=Math.max(0,this.nitro-Vt.NITRO.CONSUMPTION_RATE*t),this.speedKmh=Math.min(d,this.speedKmh+Vt.SPEED.BOOST_ACCEL*t)):(this.isBoosting=!1,this.nitro=Math.min(Vt.NITRO.MAX,this.nitro+Vt.NITRO.RECHARGE_RATE*t),i?this.speedKmh=Math.max(Vt.SPEED.MIN,this.speedKmh-Vt.SPEED.BRAKING*t):r?this.speedKmh=Math.min(u,this.speedKmh+Vt.SPEED.ACCELERATION*1.6*t):this.speedKmh<h?this.speedKmh=Math.min(h,this.speedKmh+Vt.SPEED.ACCELERATION*t):this.speedKmh>h&&(this.speedKmh=Math.max(h,this.speedKmh-Vt.SPEED.NATURAL_DECEL*t)));const f=this.speedKmh*1e3/3600*t;this.distanceMeters+=f,this.score+=Math.round(f*Vt.SCORING.DISTANCE_MULTIPLIER*this.combo),this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}triggerGameOver(){this.state=ce.GAMEOVER,this.isBoosting=!1,this.score>this.bestScore&&(this.bestScore=this.score,localStorage.setItem("supra_rush_best_score",this.bestScore)),this.distanceMeters>this.bestDistance&&(this.bestDistance=Math.floor(this.distanceMeters),localStorage.setItem("supra_rush_best_dist",this.bestDistance))}}class A0{constructor(){this.keys={left:!1,right:!1,brake:!1,accelerate:!1,boost:!1,horn:!1,pause:!1,restart:!1},this.laneChangeRequested=0,this.touchStartX=0,this.touchStartY=0,this.touchStartTime=0,this.isTouchDevice=!1,this.onPauseToggle=null,this.onRestart=null,this.onHorn=null,this.bindEvents()}bindEvents(){window.addEventListener("keydown",t=>{switch(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key)&&t.preventDefault(),t.code){case"ArrowLeft":case"KeyA":this.keys.left||(this.laneChangeRequested=-1),this.keys.left=!0;break;case"ArrowRight":case"KeyD":this.keys.right||(this.laneChangeRequested=1),this.keys.right=!0;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!0;break;case"Space":this.keys.boost=!0;break;case"ArrowDown":case"KeyS":this.keys.brake=!0;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!0,this.onHorn&&this.onHorn();break;case"KeyP":case"Escape":this.onPauseToggle&&this.onPauseToggle();break;case"KeyR":this.onRestart&&this.onRestart();break}}),window.addEventListener("keyup",t=>{switch(t.code){case"ArrowLeft":case"KeyA":this.keys.left=!1;break;case"ArrowRight":case"KeyD":this.keys.right=!1;break;case"ArrowUp":case"KeyW":this.keys.accelerate=!1;break;case"Space":this.keys.boost=!1;break;case"ArrowDown":case"KeyS":this.keys.brake=!1;break;case"KeyH":case"KeyE":case"KeyF":case"KeyB":this.keys.horn=!1;break}}),window.addEventListener("touchstart",t=>{this.isTouchDevice=!0,t.touches.length>0&&(this.touchStartX=t.touches[0].clientX,this.touchStartY=t.touches[0].clientY,this.touchStartTime=Date.now())},{passive:!0}),window.addEventListener("touchend",t=>{if(t.changedTouches.length>0){const e=t.changedTouches[0].clientX-this.touchStartX,n=t.changedTouches[0].clientY-this.touchStartY;Date.now()-this.touchStartTime<350&&Math.abs(e)>40&&Math.abs(e)>Math.abs(n)*1.3&&(e<0?this.laneChangeRequested=-1:this.laneChangeRequested=1)}},{passive:!0})}consumeLaneChange(){const t=this.laneChangeRequested;return this.laneChangeRequested=0,t}triggerSteerLeft(){this.laneChangeRequested=-1}triggerSteerRight(){this.laneChangeRequested=1}setBrake(t){this.keys.brake=t}setAccelerate(t){this.keys.accelerate=t}setNitro(t){this.keys.boost=t}setBoost(t){this.keys.boost=t}reset(){this.keys.left=!1,this.keys.right=!1,this.keys.brake=!1,this.keys.accelerate=!1,this.keys.boost=!1,this.keys.horn=!1,this.laneChangeRequested=0}}class R0{constructor(t){this.camera=t,this.defaultOffset=new N(Vt.CAMERA.DEFAULT_OFFSET.x,Vt.CAMERA.DEFAULT_OFFSET.y,Vt.CAMERA.DEFAULT_OFFSET.z),this.lookOffset=new N(Vt.CAMERA.LOOK_OFFSET.x,Vt.CAMERA.LOOK_OFFSET.y,Vt.CAMERA.LOOK_OFFSET.z),this.currentPos=new N,this.currentLook=new N,this.shakeIntensity=0,this.shakeDuration=0,this.targetFOV=Vt.CAMERA.BASE_FOV,this.currentVehicleType="truck"}setVehicleType(t){this.currentVehicleType=t,t==="rickshaw"?(this.defaultOffset.set(0,3.5,7.6),this.lookOffset.set(0,1.25,-16)):t==="cng"?(this.defaultOffset.set(0,3.8,8.2),this.lookOffset.set(0,1.3,-16)):(this.defaultOffset.set(0,4.4,9.4),this.lookOffset.set(0,1.4,-18))}init(t){const e=t.group.position;this.currentPos.set(e.x+this.defaultOffset.x,e.y+this.defaultOffset.y,e.z+this.defaultOffset.z),this.currentLook.set(e.x+this.lookOffset.x,e.y+this.lookOffset.y,e.z+this.lookOffset.z),this.camera.position.copy(this.currentPos),this.camera.lookAt(this.currentLook),this.camera.fov=Vt.CAMERA.BASE_FOV,this.camera.updateProjectionMatrix()}shake(t=.5,e=.6){this.shakeIntensity=t,this.shakeDuration=e}update(t,e,n,i){const r=t.group.position,a=Math.min(1,e/Vt.SPEED.MAX_NORMAL),o=this.camera.aspect,c=o<1?Math.min(24,(1-o)*36):0;this.targetFOV=Vt.CAMERA.BASE_FOV+c+a*10+(n?8:0),this.camera.fov+=(this.targetFOV-this.camera.fov)*Math.min(1,i*Vt.CAMERA.FOV_LERP_SPEED),this.camera.updateProjectionMatrix();const h=r.x+this.defaultOffset.x,u=r.y+this.defaultOffset.y,d=r.z+this.defaultOffset.z+(n?.8:0),l=Math.min(1,i*10),f=Math.min(1,i*12);this.currentPos.x+=(h-this.currentPos.x)*l,this.currentPos.y+=(u-this.currentPos.y)*f,this.currentPos.z=d;const _=r.x+this.lookOffset.x,M=r.y+this.lookOffset.y,m=r.z+this.lookOffset.z;this.currentLook.x+=(_-this.currentLook.x)*l,this.currentLook.y+=(M-this.currentLook.y)*f,this.currentLook.z=m;let p=0,w=0;if(e>70){const C=e/280*.03;p=(Math.random()-.5)*C,w=(Math.random()-.5)*C}let g=0,v=0,D=0;if(this.shakeDuration>0){this.shakeDuration-=i;const C=Math.max(0,this.shakeDuration/.6),L=this.shakeIntensity*C;g=(Math.random()-.5)*L,v=(Math.random()-.5)*L,D=(Math.random()-.5)*L}this.camera.position.set(this.currentPos.x+p+g,this.currentPos.y+w+v,this.currentPos.z+D),this.camera.lookAt(this.currentLook.x+p*.5,this.currentLook.y+w*.5,this.currentLook.z)}orbitMenu(t){const e=this.currentVehicleType==="rickshaw"||this.currentVehicleType==="cng",n=this.camera.aspect,i=n<1?1.35:1,r=(e?4.8:8.2)*i,a=(e?1.65+Math.sin(t*.5)*.22:2.7+Math.sin(t*.5)*.35)*(n<1?1.15:1),o=e?1.05:1.35,c=t*.35;this.camera.position.set(Math.sin(c)*r,a,Math.cos(c)*r),this.camera.lookAt(0,o,0)}}class P0{constructor(){this.ctx=null,this.isMuted=localStorage.getItem("og_race_muted")==="true"||localStorage.getItem("truck_rush_muted")==="true",this.isInitialized=!1,this.masterGain=null,this.engineGain=null,this.engineFilter=null,this.baseOsc=null,this.subOsc=null,this.midOsc=null,this.highOsc=null,this.turboOsc=null,this.turboGain=null,this.roadGain=null,this.roadFilter=null,this.currentRPM=900,this.targetPitch=60,this.currentPitch=60,this.vehicleType="truck",this.crashVoiceBuffer=null,this.bindUnlock()}setVehicleType(t){this.vehicleType=t}bindUnlock(){const t=()=>{this.ctx?this.ctx.state==="suspended"&&this.ctx.resume():this.initAudio(),this.ctx&&!this.crashVoiceBuffer&&this.loadCrashVoice(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t),window.removeEventListener("touchstart",t)};window.addEventListener("pointerdown",t),window.addEventListener("keydown",t),window.addEventListener("touchstart",t)}initAudio(){try{const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.setupSmoothCarSynth(),this.setupRoadNoise(),this.loadCrashVoice(),this.isInitialized=!0}catch(t){console.warn("Web Audio not supported or blocked:",t)}}loadCrashVoice(){this.ctx&&fetch("/audio/eta_ki_korli_mama.mp3").then(t=>{if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.arrayBuffer()}).then(t=>this.ctx.decodeAudioData(t)).then(t=>{this.crashVoiceBuffer=t}).catch(t=>{console.warn("Could not decode crash voice buffer:",t)})}setupSmoothCarSynth(){const t=this.ctx.currentTime;this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.001,t),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(320,t),this.engineFilter.Q.setValueAtTime(.7,t),this.baseOsc=this.ctx.createOscillator(),this.baseOsc.type="triangle",this.baseOsc.frequency.setValueAtTime(58,t);const e=this.ctx.createGain();e.gain.setValueAtTime(.42,t),this.baseOsc.connect(e),e.connect(this.engineFilter),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.setValueAtTime(29,t);const n=this.ctx.createGain();n.gain.setValueAtTime(.24,t),this.subOsc.connect(n),n.connect(this.engineFilter),this.midOsc=this.ctx.createOscillator(),this.midOsc.type="sine",this.midOsc.frequency.setValueAtTime(116,t);const i=this.ctx.createGain();i.gain.setValueAtTime(.14,t),this.midOsc.connect(i),i.connect(this.engineFilter),this.highOsc=this.ctx.createOscillator(),this.highOsc.type="sine",this.highOsc.frequency.setValueAtTime(174,t);const r=this.ctx.createGain();r.gain.setValueAtTime(.04,t),this.highOsc.connect(r),r.connect(this.engineFilter),this.turboOsc=this.ctx.createOscillator(),this.turboOsc.type="sine",this.turboOsc.frequency.setValueAtTime(280,t),this.turboGain=this.ctx.createGain(),this.turboGain.gain.setValueAtTime(.001,t),this.turboOsc.connect(this.turboGain),this.turboGain.connect(this.engineGain),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.baseOsc.start(),this.subOsc.start(),this.midOsc.start(),this.highOsc.start(),this.turboOsc.start()}setupRoadNoise(){const t=this.ctx.sampleRate*2,e=this.ctx.createBuffer(1,t,this.ctx.sampleRate),n=e.getChannelData(0);let i=0,r=0,a=0;for(let c=0;c<t;c++){const h=Math.random()*2-1;i=.98*i+h*.055,r=.95*r+h*.075,a=.85*a+h*.15,n[c]=(i+r+a)*.45}const o=this.ctx.createBufferSource();o.buffer=e,o.loop=!0,this.roadFilter=this.ctx.createBiquadFilter(),this.roadFilter.type="lowpass",this.roadFilter.frequency.setValueAtTime(220,this.ctx.currentTime),this.roadFilter.Q.setValueAtTime(.6,this.ctx.currentTime),this.roadGain=this.ctx.createGain(),this.roadGain.gain.setValueAtTime(.001,this.ctx.currentTime),o.connect(this.roadFilter),this.roadFilter.connect(this.roadGain),this.roadGain.connect(this.masterGain),o.start()}playAirBrake(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=Math.floor(this.ctx.sampleRate*.35),n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);for(let c=0;c<e;c++)i[c]=(Math.random()*2-1)*(1-c/e);const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(500,t),a.frequency.exponentialRampToValueAtTime(180,t+.35);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,t),o.gain.linearRampToValueAtTime(.07,t+.05),o.gain.exponentialRampToValueAtTime(.001,t+.35),r.connect(a),a.connect(o),o.connect(this.masterGain),r.start(t)}playTruckHorn(t=null){if(!this.ctx||this.isMuted)return;const e=t||this.vehicleType||"truck",n=this.ctx.currentTime;if(e==="rickshaw"){const r=[2093,2637];[0,.09].forEach(a=>{r.forEach(o=>{const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.type="sine",c.frequency.setValueAtTime(o,n+a),h.gain.setValueAtTime(0,n+a),h.gain.linearRampToValueAtTime(.22,n+a+.008),h.gain.exponentialRampToValueAtTime(1e-4,n+a+.18),c.connect(h),h.connect(this.masterGain),c.start(n+a),c.stop(n+a+.2)})});return}if(e==="cng"){[620,780].forEach(a=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sawtooth",o.frequency.setValueAtTime(a,n);const h=this.ctx.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(1200,n),c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(.2,n+.02),c.gain.setValueAtTime(.2,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.32),o.connect(h),h.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.35)});return}[330,415.3,523.25].forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain(),h=this.ctx.createBiquadFilter();o.type=a===0?"sine":"triangle",o.frequency.setValueAtTime(r,n),h.type="lowpass",h.frequency.setValueAtTime(1400,n);const u=a===0?.18:.26;c.gain.setValueAtTime(0,n),c.gain.linearRampToValueAtTime(u,n+.02),c.gain.setValueAtTime(u,n+.22),c.gain.exponentialRampToValueAtTime(1e-4,n+.38),o.connect(h),h.connect(c),c.connect(this.masterGain),o.start(n),o.stop(n+.4)})}shoutTanDeMama(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[440,554.37,659.25].forEach((n,i)=>{const r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n*.8,t),r.frequency.exponentialRampToValueAtTime(n*1.25,t+.35),a.gain.setValueAtTime(.001,t),a.gain.linearRampToValueAtTime(.08,t+.06),a.gain.exponentialRampToValueAtTime(1e-4,t+.45),r.connect(a),a.connect(this.masterGain),r.start(t),r.stop(t+.5)})}update(t,e,n,i){if(!this.isInitialized||!this.ctx||this.isMuted)return;const r=this.ctx.currentTime,a=Math.min(1,Math.max(0,t/200)),o=a*5%1,c=900+a*1800+o*600+(n?500:0);this.currentRPM+=(c-this.currentRPM)*Math.min(1,i*5);const h=52+this.currentRPM/3200*110;this.targetPitch=Math.max(45,h),this.currentPitch+=(this.targetPitch-this.currentPitch)*Math.min(1,i*7),this.baseOsc.frequency.setTargetAtTime(this.currentPitch,r,.05),this.subOsc.frequency.setTargetAtTime(this.currentPitch*.5,r,.05),this.midOsc.frequency.setTargetAtTime(this.currentPitch*2,r,.05),this.highOsc.frequency.setTargetAtTime(this.currentPitch*3,r,.05);const u=300+a*280+(n?120:0);this.engineFilter.frequency.setTargetAtTime(u,r,.06);const d=.16+a*.12+(n?.06:0)-(e?.04:0);this.engineGain.gain.setTargetAtTime(Math.max(.08,d),r,.06),n?(this.turboOsc.frequency.setTargetAtTime(380+a*350,r,.08),this.turboGain.gain.setTargetAtTime(.05,r,.08)):this.turboGain.gain.setTargetAtTime(1e-4,r,.15);const l=Math.pow(a,1.3)*.06;this.roadGain.gain.setTargetAtTime(l,r,.08),this.roadFilter.frequency.setTargetAtTime(180+a*250,r,.08)}playNearMiss(t=1){if(!this.ctx||this.isMuted)return;const e=this.ctx.currentTime,n=880,i=1+(t-1)*.08;[0,.06].forEach((r,a)=>{const o=this.ctx.createOscillator(),c=this.ctx.createGain();o.type="sine",o.frequency.setValueAtTime((a===0?n:n*1.25)*i,e+r),c.gain.setValueAtTime(.001,e+r),c.gain.linearRampToValueAtTime(.12,e+r+.015),c.gain.exponentialRampToValueAtTime(1e-4,e+r+.28),o.connect(c),c.connect(this.masterGain),o.start(e+r),o.stop(e+r+.3)})}playCrash(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(110,t),e.frequency.exponentialRampToValueAtTime(28,t+.55),n.gain.setValueAtTime(.45,t),n.gain.exponentialRampToValueAtTime(.001,t+.6),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.65);const i=Math.floor(this.ctx.sampleRate*.45),r=this.ctx.createBuffer(1,i,this.ctx.sampleRate),a=r.getChannelData(0);for(let u=0;u<i;u++)a[u]=(Math.random()*2-1)*Math.exp(-u/(this.ctx.sampleRate*.12));const o=this.ctx.createBufferSource();o.buffer=r;const c=this.ctx.createBiquadFilter();c.type="lowpass",c.frequency.setValueAtTime(450,t),c.frequency.exponentialRampToValueAtTime(120,t+.4);const h=this.ctx.createGain();h.gain.setValueAtTime(.3,t),h.gain.exponentialRampToValueAtTime(.001,t+.45),o.connect(c),c.connect(h),h.connect(this.masterGain),o.start(t)}playCrashVoice(){if(!this.isMuted){if(this.crashVoiceBuffer&&this.ctx)try{const t=this.ctx.createBufferSource();t.buffer=this.crashVoiceBuffer;const e=this.ctx.createGain();e.gain.setValueAtTime(1,this.ctx.currentTime),t.connect(e),e.connect(this.masterGain),t.start(this.ctx.currentTime+.18);return}catch(t){console.warn("Web Audio crash voice playback error:",t)}try{const t=new Audio("/audio/eta_ki_korli_mama.mp3");t.volume=1,setTimeout(()=>{t.play().catch(()=>{})},180);return}catch{if("speechSynthesis"in window)try{window.speechSynthesis.cancel();const e=new SpeechSynthesisUtterance("এটা কি করলি মামা!");e.rate=1.15,e.pitch=1.05,e.volume=1;const i=window.speechSynthesis.getVoices().find(r=>r.lang.includes("bn")||r.lang.includes("hi"));i&&(e.voice=i),window.speechSynthesis.speak(e)}catch{}}}}playClick(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime,e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(520,t),e.frequency.exponentialRampToValueAtTime(260,t+.035),n.gain.setValueAtTime(.09,t),n.gain.exponentialRampToValueAtTime(.001,t+.04),e.connect(n),n.connect(this.masterGain),e.start(t),e.stop(t+.045)}playGameOver(){if(!this.ctx||this.isMuted)return;const t=this.ctx.currentTime;[261.63,220,196,164.81].forEach((e,n)=>{const i=n*.18,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle",r.frequency.setValueAtTime(e,t+i),a.gain.setValueAtTime(.001,t+i),a.gain.linearRampToValueAtTime(.12,t+i+.02),a.gain.exponentialRampToValueAtTime(.001,t+i+.32),r.connect(a),a.connect(this.masterGain),r.start(t+i),r.stop(t+i+.35)})}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("og_race_muted",this.isMuted),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.isMuted?0:.45,this.ctx.currentTime),this.isMuted}stopAll(){this.engineGain&&this.ctx&&this.engineGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.roadGain&&this.ctx&&this.roadGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08),this.turboGain&&this.ctx&&this.turboGain.gain.setTargetAtTime(1e-4,this.ctx.currentTime,.08)}}class C0{constructor(){this.group=new It,this.group.name="og_deshi_truck",this.wheels=[],this.frontWheels=[],this.cows=[],this.brakeLights=[],this.headlights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new N(2.1,2.8,5.5),this.buildTruck(),this.group.scale.set(.88,.88,.88)}buildTruck(){const t=document.createElement("canvas");t.width=512,t.height=384;const e=t.getContext("2d");e.fillStyle="#f5b002",e.fillRect(0,0,512,384),e.fillStyle="#1e293b",e.fillRect(80,50,352,280),e.strokeStyle="#e2e8f0",e.lineWidth=6,e.strokeRect(80,50,352,280),e.fillStyle="#3b82f6",e.beginPath(),e.ellipse(190,180,65,90,-Math.PI/6,0,Math.PI*2),e.fill(),e.strokeStyle="#ef4444",e.lineWidth=8,e.stroke(),e.beginPath(),e.ellipse(322,180,65,90,Math.PI/6,0,Math.PI*2),e.fill(),e.stroke(),e.fillStyle="#fbbf24",e.beginPath(),e.arc(180,160,20,0,Math.PI*2),e.arc(332,160,20,0,Math.PI*2),e.fill(),e.fillStyle="#ffffff",e.fillRect(246,110,20,140),e.beginPath(),e.arc(256,100,16,0,Math.PI*2),e.fill();const n=new le(t),i=document.createElement("canvas");i.width=1024,i.height=384;const r=i.getContext("2d");r.fillStyle="#f8fafc",r.fillRect(0,0,1024,384),r.fillStyle="#dc2626",r.fillRect(0,0,1024,36),r.fillRect(0,348,1024,36),r.fillStyle="#16a34a",r.beginPath(),r.arc(512,180,110,Math.PI,0),r.fill(),r.fillStyle="#f59e0b",r.fillRect(472,80,80,100),r.beginPath(),r.moveTo(512,20),r.lineTo(460,80),r.lineTo(564,80),r.fill();const a=(x,F)=>{r.fillStyle="#dc2626";for(let J=0;J<Math.PI*2;J+=Math.PI/3)r.beginPath(),r.arc(x+Math.cos(J)*35,F+Math.sin(J)*35,24,0,Math.PI*2),r.fill();r.fillStyle="#fbbf24",r.beginPath(),r.arc(x,F,22,0,Math.PI*2),r.fill()};a(220,180),a(804,180),r.fillStyle="#1e293b",r.font="bold 54px serif",r.textAlign="center",r.fillText("মা বাবার দোয়া ★ OG_RACE",512,320);const o=new le(i),c=document.createElement("canvas");c.width=1024,c.height=512;const h=c.getContext("2d");h.fillStyle="#f59e0b",h.fillRect(0,0,1024,140);for(let x=60;x<1024;x+=110)h.fillStyle="#dc2626",h.beginPath(),h.arc(x,70,32,0,Math.PI*2),h.fill(),h.fillStyle="#22c55e",h.beginPath(),h.arc(x,70,16,0,Math.PI*2),h.fill();h.fillStyle="#15803d",h.fillRect(0,140,1024,372),h.strokeStyle="#f8fafc",h.lineWidth=8;for(let x=30;x<1024;x+=138)h.strokeRect(x,160,116,320);h.fillStyle="#ffffff",h.font="900 80px sans-serif",h.textAlign="center",h.fillText("OG_RACE ★ মা বাবার দোয়া",512,340),h.fillStyle="#dc2626",h.fillRect(0,140,30,372),h.fillRect(994,140,30,372);const u=new le(c),d=document.createElement("canvas");d.width=1024,d.height=680;const l=d.getContext("2d");l.fillStyle="#4a90e2",l.fillRect(0,0,1024,680),l.fillStyle="#172554",l.beginPath(),l.moveTo(0,0),l.lineTo(110,0),l.lineTo(0,85),l.closePath(),l.fill(),l.beginPath(),l.moveTo(1024,0),l.lineTo(914,0),l.lineTo(1024,85),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.beginPath(),l.moveTo(0,85),l.lineTo(110,0),l.lineTo(914,0),l.lineTo(1024,85),l.stroke(),l.fillStyle="#2563eb",l.fillRect(100,35,824,45),l.strokeStyle="#18181b",l.lineWidth=3,l.strokeRect(100,35,824,45),l.fillStyle="#1e3a8a";for(let x=110;x<=900;x+=32)l.beginPath(),l.moveTo(x,80),l.lineTo(x+16,45),l.lineTo(x+32,80),l.closePath(),l.fill();const f=x=>{l.fillStyle="#facc15",l.fillRect(x,85,54,345),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(x,85,54,345);for(let F=104;F<=415;F+=26)l.fillStyle="#dc2626",l.beginPath(),l.arc(x+27,F,9.5,0,Math.PI*2),l.fill(),l.fillStyle="#fde047",l.beginPath(),l.arc(x+27,F,4.5,0,Math.PI*2),l.fill()};f(36),f(934);const _=90,M=335,m=_+M,p=104,w=252;l.fillStyle="#78aee6",l.fillRect(p,_,w,M),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(p,_,w,M);const g=386;l.fillStyle="#78aee6",l.fillRect(g,_,w,M),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(g,_,w,M);const v=668;l.fillStyle="#78aee6",l.fillRect(v,_,w,M),l.strokeStyle="#18181b",l.lineWidth=6,l.strokeRect(v,_,w,M);const D=(x,F)=>{[{dx:0,dy:-1},{dx:0,dy:1},{dx:1,dy:0},{dx:-1,dy:0}].forEach(({dx:q,dy:et})=>{l.fillStyle="#15803d",l.beginPath();const _t=x+q*72,Zt=F+et*72,Xt=-et*16,qt=q*16;l.moveTo(x+q*24,F+et*24),l.quadraticCurveTo(x+q*46+Xt,F+et*46+qt,_t,Zt),l.quadraticCurveTo(x+q*46-Xt,F+et*46-qt,x+q*24,F+et*24),l.fill(),l.fillStyle="#166534",l.beginPath();const de=x+q*52+Xt*1.5,we=F+et*52+qt*1.5;l.moveTo(x+q*22,F+et*22),l.quadraticCurveTo(x+q*34+Xt*1.8,F+et*34+qt*1.8,de,we),l.quadraticCurveTo(x+q*38+Xt*.8,F+et*38+qt*.8,x+q*22,F+et*22),l.fill(),l.beginPath();const nn=x+q*52-Xt*1.5,ke=F+et*52-qt*1.5;l.moveTo(x+q*22,F+et*22),l.quadraticCurveTo(x+q*34-Xt*1.8,F+et*34-qt*1.8,nn,ke),l.quadraticCurveTo(x+q*38-Xt*.8,F+et*38-qt*.8,x+q*22,F+et*22),l.fill(),l.strokeStyle="#4ade80",l.lineWidth=1.8,l.beginPath(),l.moveTo(x+q*26,F+et*26),l.lineTo(_t*.95+x*.05,Zt*.95+F*.05),l.stroke()}),[{dx:.707,dy:-.707},{dx:-.707,dy:-.707},{dx:.707,dy:.707},{dx:-.707,dy:.707}].forEach(({dx:q,dy:et})=>{l.fillStyle="#16a34a",l.beginPath();const _t=x+q*46,Zt=F+et*46,Xt=-et*10,qt=q*10;l.moveTo(x+q*22,F+et*22),l.quadraticCurveTo(x+q*32+Xt,F+et*32+qt,_t,Zt),l.quadraticCurveTo(x+q*32-Xt,F+et*32-qt,x+q*22,F+et*22),l.fill()}),l.fillStyle="#facc15";for(let q=0;q<Math.PI*2;q+=Math.PI/8)l.beginPath(),l.arc(x+Math.cos(q)*27,F+Math.sin(q)*27,4.5,0,Math.PI*2),l.fill();l.fillStyle="#facc15",l.beginPath(),l.arc(x,F,25,0,Math.PI*2),l.fill(),l.strokeStyle="#ca8a04",l.lineWidth=2,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.arc(x,F,14,0,Math.PI*2),l.fill(),l.fillStyle="#fef08a",l.beginPath(),l.arc(x,F,6,0,Math.PI*2),l.fill()};D(p+w*.5,_+M*.5),D(v+w*.5,_+M*.5),((x,F,J)=>{l.strokeStyle="#18181b",l.lineWidth=3.5,l.lineCap="round",l.beginPath(),l.moveTo(x-24,J),l.lineTo(x-30,J-5),l.moveTo(x-24,J),l.lineTo(x-18,J-5),l.moveTo(x-24,J),l.lineTo(x-22,J-22),l.lineTo(x-32,J-52),l.lineTo(x-18,J-80),l.stroke(),l.beginPath(),l.moveTo(x+12,J),l.lineTo(x+6,J-5),l.moveTo(x+12,J),l.lineTo(x+18,J-5),l.moveTo(x+12,J),l.lineTo(x+14,J-22),l.lineTo(x+24,J-52),l.lineTo(x+8,J-84),l.stroke(),[{tipX:x+72,tipY:F-25,midX:x+45,midY:F-8},{tipX:x+95,tipY:F-2,midX:x+56,midY:F+12},{tipX:x+104,tipY:F+24,midX:x+58,midY:F+32},{tipX:x+82,tipY:F+50,midX:x+48,midY:F+46}].forEach(({tipX:et,tipY:_t,midX:Zt,midY:Xt})=>{l.fillStyle="#facc15",l.beginPath(),l.moveTo(x+16,F+30),l.quadraticCurveTo(Zt,Xt-12,et,_t),l.quadraticCurveTo(et+6,_t+12,et-12,_t+18),l.quadraticCurveTo(Zt,Xt+12,x+16,F+38),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(et-18,_t+4),l.quadraticCurveTo(et-4,_t-8,et,_t),l.quadraticCurveTo(et+6,_t+12,et-12,_t+18),l.quadraticCurveTo(et-12,_t+10,et-18,_t+4),l.closePath(),l.fill()}),l.fillStyle="#facc15",l.beginPath(),l.moveTo(x-36,F+44),l.quadraticCurveTo(x-2,F+72,x+34,F+46),l.quadraticCurveTo(x+8,F+22,x-36,F+44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#dc2626",l.beginPath(),l.moveTo(x-16,F-42),l.quadraticCurveTo(x-62,F-2,x-42,F+46),l.quadraticCurveTo(x+12,F+34,x+4,F-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(x-18,F-28),l.quadraticCurveTo(x+24,F-35,x+58,F-14),l.lineTo(x+52,F+12),l.quadraticCurveTo(x+14,F+18,x-22,F+12),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#38bdf8",[{x:x+58,y:F-14},{x:x+64,y:F+4},{x:x+52,y:F+18}].forEach(({x:et,y:_t})=>{l.beginPath(),l.ellipse(et,_t,9,6,-Math.PI/4,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=1.8,l.stroke()}),l.strokeStyle="#1e3a8a",l.lineWidth=2,l.beginPath(),l.moveTo(x-4,F-18),l.lineTo(x+42,F-8),l.moveTo(x-2,F-6),l.lineTo(x+44,F+4),l.stroke(),l.fillStyle="#0284c7",l.beginPath(),l.moveTo(x-24,F-32),l.quadraticCurveTo(x-28,F-68,x-2,F-78),l.quadraticCurveTo(x+24,F-74,x+22,F-48),l.quadraticCurveTo(x+8,F-28,x-16,F-22),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.5,l.stroke(),l.fillStyle="#ea580c",l.beginPath(),l.moveTo(x+20,F-58),l.quadraticCurveTo(x+36,F-54,x+44,F-42),l.quadraticCurveTo(x+28,F-42,x+18,F-44),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2.2,l.stroke(),l.beginPath(),l.moveTo(x+20,F-50),l.lineTo(x+42,F-43),l.stroke(),l.fillStyle="#ffffff",l.beginPath(),l.arc(x+6,F-58,8.5,0,Math.PI*2),l.fill(),l.strokeStyle="#18181b",l.lineWidth=2,l.stroke(),l.fillStyle="#18181b",l.beginPath(),l.arc(x+8,F-58,4.2,0,Math.PI*2),l.fill(),l.fillStyle="#ffffff",l.beginPath(),l.arc(x+7,F-60,1.8,0,Math.PI*2),l.fill()})(g+w*.5,_+M*.52,m),l.fillStyle="#3b82f6",l.fillRect(20,m,984,45),l.strokeStyle="#18181b",l.lineWidth=4,l.strokeRect(20,m,984,45);const L=x=>{l.fillStyle="#94a3b8",l.fillRect(x,m+8,54,28),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(x,m+8,54,28),l.fillStyle="#334155",l.fillRect(x+22,m+4,10,36),l.fillStyle="#f8fafc",l.fillRect(x+6,m+18,6,8),l.fillRect(x+42,m+18,6,8)};L(205),L(485),L(765);const B=470;l.fillStyle="#4a90e2",l.beginPath(),l.moveTo(20,B),l.lineTo(20,580),l.lineTo(315,580),l.lineTo(365,635),l.lineTo(659,635),l.lineTo(709,580),l.lineTo(1004,580),l.lineTo(1004,B),l.closePath(),l.fill(),l.strokeStyle="#18181b",l.lineWidth=5,l.stroke();const y=(x,F)=>{l.fillStyle="#18181b",l.fillRect(x-4,498,172,64),l.strokeStyle="#facc15",l.lineWidth=3,l.strokeRect(x-4,498,172,64),(F?["#f59e0b","#ef4444","#f8fafc"]:["#f8fafc","#ef4444","#f59e0b"]).forEach((k,q)=>{l.fillStyle=k,l.fillRect(x+q*54+2,504,50,52),l.strokeStyle="#18181b",l.lineWidth=2.5,l.strokeRect(x+q*54+2,504,50,52),l.fillStyle="rgba(255,255,255,0.25)",l.fillRect(x+q*54+6,508,42,6)})};y(118,!0),y(742,!1);const E=new le(d);this.yellowPaint=new $({color:16101378,roughness:.35,metalness:.4}),this.cyanBluePaint=new $({color:165063,roughness:.4,metalness:.3}),this.redPaint=new $({color:14427686,roughness:.4,metalness:.3}),this.tealBumperMat=new $({color:1013358,roughness:.5,metalness:.6}),this.chassisMat=new $({color:2040877,roughness:.8}),this.woodPlankMat=new $({color:7877903,roughness:.9}),this.tireMat=new $({color:1974308,roughness:.9,metalness:.1}),this.rimMat=new $({color:12131356,roughness:.35,metalness:.5}),this.glassMat=new Zi({color:1976635,roughness:.1,metalness:.9,transmission:.4,transparent:!0,opacity:.85}),this.headlightMat=new pe({color:16777215}),this.taillightMat=new $({color:13369344,emissive:13369344,emissiveIntensity:.8}),this.brakeActiveMat=new $({color:16716049,emissive:16711680,emissiveIntensity:3.8}),this.cowWhiteMat=new $({color:16119280,roughness:.65}),this.cowBrownMat=new $({color:9262372,roughness:.7}),this.cowBlackMat=new $({color:2236962,roughness:.75}),this.cowFawnMat=new $({color:12088115,roughness:.68}),this.hornMat=new $({color:3621201,roughness:.4}),this.snoutMat=new $({color:1974308,roughness:.8});const P=new It;P.name="truckBody",this.bodyGroup=P;const Z=new st(1.9,.4,6),at=new A(Z,this.chassisMat);at.position.set(0,.65,.2),at.castShadow=!0,P.add(at);const O=new It;O.position.set(0,.6,-2.85),[-.3,0,.3].forEach(x=>{const F=new Et(.06,.06,2.3,8);F.rotateZ(Math.PI/2);const J=new A(F,this.tealBumperMat);J.position.y=x,J.castShadow=!0,O.add(J)}),[-.95,-.45,.45,.95].forEach(x=>{const F=new st(.08,.72,.08),J=new A(F,this.tealBumperMat);J.position.x=x,O.add(J)}),[-1.08,1.08].forEach(x=>{const F=new Et(.03,.03,.9,6),J=new A(F,this.tealBumperMat);J.position.set(x,.35,0),O.add(J);const k=new se(.07,8,8),q=new A(k,this.redPaint);q.position.set(x,.8,0),O.add(q)});const z=document.createElement("canvas");z.width=256,z.height=80;const H=z.getContext("2d");H.fillStyle="#006633",H.fillRect(0,0,256,80),H.strokeStyle="#ffffff",H.lineWidth=4,H.strokeRect(4,4,248,72),H.fillStyle="#ffffff",H.font="bold 26px sans-serif",H.textAlign="center",H.fillText("যশোর-ট",128,34),H.fillText("০২-০৯৬৯",128,64);const it=new le(z),nt=new jt(.65,.22),Y=new pe({map:it}),ot=new A(nt,Y);ot.position.set(0,-.15,.08),O.add(ot),P.add(O);const K=new st(1.85,.95,1.6),pt=new A(K,this.yellowPaint);pt.position.set(0,1.25,-2.05),pt.castShadow=!0,P.add(pt);const j=new jt(1.65,.85),lt=new $({map:n}),xt=new A(j,lt);xt.position.set(0,1.25,-2.86),P.add(xt),[-.68,.68].forEach(x=>{const F=new Et(.16,.16,.06,16);F.rotateX(Math.PI/2);const J=new A(F,this.chassisMat);J.position.set(x,1.15,-2.87),P.add(J);const k=new Fs(.13,16),q=new A(k,this.headlightMat);q.position.set(x,1.15,-2.89),P.add(q),this.headlights.push(q);const et=new x0(16772829,2.5,60,Math.PI/5,.5,1.2);et.position.set(x,1.15,-2.9),et.target.position.set(x*1.5,0,-35),P.add(et),P.add(et.target)}),[-.98,.98].forEach(x=>{const F=new st(.24,.55,1.4),J=new A(F,this.chassisMat);J.position.set(x,.95,-1.95),J.castShadow=!0,P.add(J)});const Lt=new st(2.1,1.45,1.55),yt=new A(Lt,this.yellowPaint);yt.position.set(0,1.75,-.6),yt.castShadow=!0,P.add(yt),[-1.06,1.06].forEach(x=>{const F=new st(.04,1.35,1.4),J=new A(F,this.cyanBluePaint);J.position.set(x,1.75,-.6),P.add(J);const k=new jt(.65,.55),q=new A(k,this.glassMat);q.position.set(x>0?x+.03:x-.03,1.95,-.65),q.rotation.y=x>0?Math.PI/2:-Math.PI/2,P.add(q)});const Ot=new jt(1.85,.72),Gt=new A(Ot,this.glassMat);Gt.position.set(0,1.92,-1.39),P.add(Gt);const Pt=new It;Pt.position.set(0,2.65,-.85);const St=new jt(2.15,.85),U=new $({map:o,roughness:.4}),ft=new A(St,U);ft.position.set(0,0,-.55),Pt.add(ft);const tt=new st(2.2,.15,1.4),mt=new A(tt,this.redPaint);mt.position.set(0,.45,.1),mt.castShadow=!0,Pt.add(mt);const Q=new st(2.24,.18,.08),Nt=new A(Q,this.yellowPaint);Nt.position.set(0,.38,-.58),Pt.add(Nt),P.add(Pt);const vt=new It;vt.position.set(0,1.6,1.6);const b=new st(2.2,.12,3.4),S=new A(b,this.woodPlankMat);S.position.set(0,-.4,0),S.receiveShadow=!0,vt.add(S);const V=new $({map:u,roughness:.45});[-1.12,1.12].forEach(x=>{const F=new jt(3.4,1.15),J=new A(F,V);J.position.set(x,.25,0),J.rotation.y=x>0?Math.PI/2:-Math.PI/2,J.castShadow=!0,vt.add(J);const k=new st(.12,.12,3.4),q=new A(k,this.redPaint);q.position.set(x,.85,0),vt.add(q)});const ht=new st(2.2,1.15,.1),dt=new A(ht,this.redPaint);dt.position.set(0,.25,-1.68),vt.add(dt);const rt=new It;rt.position.set(0,0,1.68);const Dt=new st(2.28,1.45,.08),Mt=new $({color:4886754,roughness:.45}),At=new A(Dt,Mt);At.position.set(0,.08,0),At.castShadow=!0,rt.add(At);const Ft=new jt(2.28,1.45),wt=new $({map:E,roughness:.35,metalness:.15}),ct=new A(Ft,wt);ct.position.set(0,.08,.045),rt.add(ct),[-1,1].forEach(x=>{const F=new _c;F.moveTo(0,0),F.lineTo(x*.18,.28),F.lineTo(0,.28),F.closePath();const J={depth:.08,bevelEnabled:!1},k=new qr(F,J),q=new $({color:1516884,roughness:.4}),et=new A(k,q);et.position.set(x*1.14,.68,-.04),rt.add(et)}),[-.78,.78].forEach((x,F)=>{const J=F===0,k=new A(new st(.42,.16,.05),this.chassisMat);k.position.set(x,-.42,.08),rt.add(k);const q=new A(new st(.12,.12,.03),new $({color:16096779,emissive:14251782,emissiveIntensity:.3}));q.position.set(J?x-.13:x+.13,-.42,.1),rt.add(q);const et=new A(new st(.12,.12,.03),this.taillightMat);et.position.set(x,-.42,.1),rt.add(et),this.brakeLights.push(et);const _t=new A(new st(.12,.12,.03),new $({color:16317180,roughness:.3}));_t.position.set(J?x+.13:x-.13,-.42,.1),rt.add(_t)}),[-.85,.85].forEach(x=>{const F=new A(new st(.42,.44,.03),this.tireMat);F.position.set(x,-.8,.06),rt.add(F)}),vt.add(rt),[{x:-.55,z:-.85,rotY:-.25,mat:this.cowWhiteMat,scale:.95},{x:.55,z:-.75,rotY:.35,mat:this.cowBrownMat,scale:.92},{x:0,z:.05,rotY:.1,mat:this.cowBlackMat,scale:1},{x:-.55,z:.85,rotY:.4,mat:this.cowFawnMat,scale:.9},{x:.55,z:.85,rotY:-.35,mat:this.cowWhiteMat,scale:.94}].forEach((x,F)=>{const J=this.createBedCow(x.mat,x.scale);J.position.set(x.x,.35,x.z),J.rotation.y=x.rotY,vt.add(J),this.cows.push({group:J,head:J.userData.head,baseRotX:J.userData.head.rotation.x,seed:F*1.5})}),P.add(vt);const Ht=this.createTruckWheel(.48,.26,!1);Ht.position.set(0,.42,.4),Ht.rotation.x=Math.PI/2,P.add(Ht);const kt=new Et(.08,.08,.6,8);kt.rotateZ(Math.PI/2);const Ut=new A(kt,this.chassisMat);Ut.position.set(1.05,.48,-.8),P.add(Ut);const Ct=new Ie(.22,1.2,12);Ct.rotateZ(-Math.PI/2);const Bt=new pe({color:16755200,transparent:!0,opacity:0}),Yt=new A(Ct,Bt);Yt.position.set(1.65,.48,-.8),P.add(Yt),this.exhaustFires.push(Yt),this.group.add(P);const re=.48,Wt=.52,gt=.32;[-1.02,1.02].forEach(x=>{const F=this.createTruckWheelAssembly(Wt,gt,x>0,!1);F.position.set(x,re,-1.95),this.group.add(F),this.wheels.push(F.userData.spinner),this.frontWheels.push(F)}),[-1.02,1.02].forEach(x=>{const F=this.createTruckWheelAssembly(Wt,gt,x>0,!0);F.position.set(x,re,1.85),this.group.add(F),this.wheels.push(F.userData.spinner)})}createBedCow(t,e=1){const n=new It;n.scale.set(e,e,e);const i=new st(.85,.85,1.35),r=new A(i,t);r.position.set(0,.45,0),r.castShadow=!0,n.add(r);const a=new Ie(.24,.38,8),o=new A(a,t);o.position.set(0,.95,-.32),o.rotation.x=-.2,n.add(o);const c=new It;c.position.set(0,.75,-.6),n.userData.head=c;const h=new st(.42,.46,.62),u=new A(h,t);u.position.set(0,.22,-.35),c.add(u);const d=new st(.32,.25,.25),l=new A(d,this.snoutMat);return l.position.set(0,.12,-.68),c.add(l),[-.18,.18].forEach(f=>{const _=new Ie(.05,.3,6),M=new A(_,this.hornMat);M.position.set(f,.46,-.28),M.rotation.z=f>0?-.38:.38,M.rotation.x=.25,c.add(M);const m=new st(.18,.07,.08),p=new A(m,t);p.position.set(f>0?.26:-.26,.32,-.25),p.rotation.z=f>0?-.35:.35,c.add(p)}),n.add(c),n}createTruckWheelAssembly(t,e,n,i){const r=new It,a=new It;if(r.userData.spinner=a,r.add(a),i){const o=this.createTruckWheel(t,e*.75,n);o.position.x=n?.08:-.08,a.add(o);const c=this.createTruckWheel(t,e*.75,n);c.position.x=n?-.16:.16,a.add(c)}else{const o=this.createTruckWheel(t,e,n);a.add(o)}return r}createTruckWheel(t,e,n){const i=new It,r=new Et(t,t,e,24);r.rotateZ(Math.PI/2);const a=new A(r,this.tireMat);i.add(a);const o=new Et(t*.65,t*.65,e+.02,18);o.rotateZ(Math.PI/2);const c=new A(o,this.rimMat);i.add(c);const h=new Et(t*.28,t*.28,e+.05,12);h.rotateZ(Math.PI/2);const u=new A(h,this.chassisMat);return i.add(u),i}update(t,e,n,i,r,a){const o=t*1e3/3600,c=2*Math.PI*.52,h=o/c*(2*Math.PI)*a;this.wheelRotation-=h,this.wheels.forEach(p=>{p.rotation.x=this.wheelRotation});const u=n-this.group.position.x,d=-Math.max(-.35,Math.min(Vt.STEERING.WHEEL_TURN_ANGLE,u*.35));this.frontWheels.forEach(p=>{p.rotation.y+=(d-p.rotation.y)*Math.min(1,a*12)});const l=Math.max(-.065,Math.min(.065,u*.065));this.currentRoll+=(l-this.currentRoll)*Math.min(1,a*10),this.bodyGroup.rotation.z=this.currentRoll;const f=Math.max(-.05,Math.min(.05,u*.05));this.currentYaw+=(f-this.currentYaw)*Math.min(1,a*10),this.bodyGroup.rotation.y=this.currentYaw;let _=0;i?_=.045:r&&(_=-.035),this.currentPitch+=(_-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const M=i?this.brakeActiveMat:this.taillightMat;this.brakeLights.forEach(p=>{p.material=M}),this.exhaustFires.forEach(p=>{r?(p.material.opacity=.95,p.scale.set(1.2+Math.random()*.5,1.2+Math.random()*.6,1.2+Math.random()*.5),p.material.color.setHex(Math.random()>.4?16759552:16729088)):p.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(p=>{p.scale.set(1.4,1.4,1.4)})):this.headlights.forEach(p=>{p.scale.set(1,1,1)});const m=performance.now()*.001;this.cows.forEach(p=>{const w=Math.sin(m*6.5+p.seed)*.08+(r?Math.sin(m*14+p.seed)*.05:0);p.head.rotation.x=p.baseRotX+w,p.head.rotation.y=Math.sin(m*2.2+p.seed)*.12}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.45,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.28,this.bodyGroup.rotation.y=.38,this.bodyGroup.rotation.x=-.14,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class L0{constructor(){this.group=new It,this.group.name="og_deshi_rickshaw",this.wheels=[],this.frontWheel=null,this.coupleGroup=new It,this.pullerLegs=[],this.pullerPedalAngle=0,this.headlights=[],this.brakeLights=[],this.exhaustFires=[],this.bellMesh=null,this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new N(1.5,2.1,3.2),this.buildRickshaw(),this.group.scale.set(.85,.85,.85)}buildRickshaw(){this.bodyGroup=new It,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=1024,t.height=640;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,360);n.addColorStop(0,"#7dd3fc"),n.addColorStop(1,"#e0f2fe"),e.fillStyle=n,e.fillRect(0,0,1024,640);const i=(T,I,X)=>{e.fillStyle="#ffffff",e.beginPath(),e.arc(T,I,38*X,0,Math.PI*2),e.arc(T+42*X,I-14*X,48*X,0,Math.PI*2),e.arc(T+95*X,I-8*X,42*X,0,Math.PI*2),e.arc(T+135*X,I+8*X,32*X,0,Math.PI*2),e.fill()};i(80,120,1.1),i(720,100,.95);const r=512,a=270;for(let T=-Math.PI;T<=0;T+=Math.PI/18)e.beginPath(),e.moveTo(r,a),e.lineTo(r+Math.cos(T)*380,a+Math.sin(T)*380),e.lineTo(r+Math.cos(T+Math.PI/36)*380,a+Math.sin(T+Math.PI/36)*380),e.closePath(),e.fillStyle="rgba(245, 158, 11, 0.45)",e.fill();e.beginPath(),e.arc(r,a,78,Math.PI,0),e.fillStyle="#f59e0b",e.fill(),e.beginPath(),e.arc(r,a,52,Math.PI,0),e.fillStyle="#fde047",e.fill();const o=e.createLinearGradient(0,270,0,520);o.addColorStop(0,"#0284c7"),o.addColorStop(1,"#0369a1"),e.fillStyle=o,e.beginPath(),e.moveTo(0,270),e.lineTo(512,270),e.lineTo(470,520),e.lineTo(0,520),e.closePath(),e.fill(),e.strokeStyle="rgba(255, 255, 255, 0.85)",e.lineWidth=3.5;for(let T=290;T<510;T+=24)for(let X=20;X<440;X+=38*2)e.beginPath(),e.moveTo(X,T),e.quadraticCurveTo(X+38/2,T-5,X+38,T),e.stroke();e.fillStyle="#fde68a",e.beginPath(),e.moveTo(470,520),e.lineTo(512,270),e.lineTo(560,270),e.lineTo(530,520),e.closePath(),e.fill(),e.fillStyle="#16a34a",e.beginPath(),e.moveTo(520,270),e.lineTo(1024,270),e.lineTo(1024,520),e.lineTo(485,520),e.closePath(),e.fill();const c=(T,I)=>{e.strokeStyle="#854d0e",e.lineWidth=6,e.beginPath(),e.moveTo(T,I),e.quadraticCurveTo(T-15,I-60,T-25,I-110),e.stroke(),e.strokeStyle="#15803d",e.lineWidth=4;for(let X=0;X<Math.PI*2;X+=Math.PI/4)e.beginPath(),e.moveTo(T-25,I-110),e.quadraticCurveTo(T-25+Math.cos(X)*45,I-110+Math.sin(X)*40-15,T-25+Math.cos(X)*65,I-110+Math.sin(X)*40),e.stroke()};c(640,360),c(720,350),c(940,360),e.fillStyle="#fce7f3",e.fillRect(720,370,190,85),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(720,370,190,85),e.fillStyle="#dc2626",e.beginPath(),e.moveTo(705,370),e.lineTo(815,310),e.lineTo(925,370),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let T=720;T<910;T+=18)e.beginPath(),e.moveTo(T,370),e.lineTo(815,310),e.stroke();e.fillStyle="#374151",e.fillRect(785,395,35,60),e.fillRect(850,390,30,30),e.fillStyle="#f8fafc",e.fillRect(570,385,140,70),e.strokeStyle="#18181b",e.lineWidth=3,e.strokeRect(570,385,140,70),e.fillStyle="#2563eb",e.beginPath(),e.moveTo(555,385),e.lineTo(640,335),e.lineTo(725,385),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=2.5;for(let T=570;T<710;T+=18)e.beginPath(),e.moveTo(T,385),e.lineTo(640,335),e.stroke();e.fillStyle="#1e3a8a",e.fillRect(620,405,30,50),e.fillStyle="#ea580c",e.fillRect(0,510,1024,45),e.fillStyle="#fde047";for(let T=20;T<1024;T+=40)e.beginPath(),e.arc(T,510,16,0,Math.PI),e.fill(),e.strokeStyle="#18181b",e.lineWidth=2,e.stroke();e.fillStyle="#18181b",e.fillRect(0,555,1024,35);const h=["#dc2626","#ffffff","#16a34a","#fde047"];for(let T=0;T<48;T++)e.fillStyle=h[T%h.length],e.fillRect(T*22,558,14,29);const u=(T,I)=>{e.strokeStyle="#94a3b8",e.lineWidth=3,e.beginPath(),e.arc(T,I,8,0,Math.PI*2),e.stroke(),e.fillStyle="#e2e8f0",e.beginPath(),e.moveTo(T,I+8),e.bezierCurveTo(T+28,I+8,T+44,I+28,T,I+64),e.bezierCurveTo(T-44,I+28,T-28,I+8,T,I+8),e.closePath(),e.fill(),e.strokeStyle="#64748b",e.lineWidth=2.5,e.stroke(),e.fillStyle="#94a3b8",[[0,24],[-14,28],[14,28],[-8,42],[8,42],[0,52]].forEach(([X,ut])=>{e.beginPath(),e.arc(T+X,I+ut,3.2,0,Math.PI*2),e.fill()})};u(220,570),u(512,570),u(804,570);const d=new le(t),l=document.createElement("canvas");l.width=1024,l.height=260;const f=l.getContext("2d"),_=f.createLinearGradient(0,0,0,260);_.addColorStop(0,"#f8fafc"),_.addColorStop(.5,"#e2e8f0"),_.addColorStop(1,"#94a3b8"),f.fillStyle=_,f.fillRect(0,0,1024,260),f.fillStyle="#475569";for(let T=30;T<1e3;T+=45)f.beginPath(),f.arc(T,24,7,0,Math.PI*2),f.fill(),f.beginPath(),f.arc(T-2,22,2.5,0,Math.PI*2),f.fillStyle="#ffffff",f.fill(),f.fillStyle="#475569",f.beginPath(),f.arc(T,236,7,0,Math.PI*2),f.fill(),f.beginPath(),f.arc(T-2,234,2.5,0,Math.PI*2),f.fillStyle="#ffffff",f.fill(),f.fillStyle="#475569";f.fillStyle="#f59e0b",f.strokeStyle="#dc2626",f.lineWidth=7,f.font="bold 82px sans-serif",f.textAlign="center",f.textBaseline="middle",f.strokeText("বাংলাদেশ",512,115),f.fillText("বাংলাদেশ",512,115),f.fillStyle="#16a34a",f.font="bold 78px sans-serif",f.fillText("বাংলাদেশ",512,113),f.fillStyle="#fef08a",f.font="bold 74px sans-serif",f.fillText("বাংলাদেশ",512,111);const M=["#dc2626","#16a34a","#f59e0b","#06b6d4","#ec4899"];for(let T=0;T<18;T++)f.beginPath(),f.arc(310+T*24,185,7.5,0,Math.PI*2),f.fillStyle=M[T%M.length],f.fill(),f.strokeStyle="#18181b",f.lineWidth=1.8,f.stroke();const m=(T,I)=>{f.beginPath(),f.arc(T,I,62,0,Math.PI*2),f.fillStyle="#cbd5e1",f.fill(),f.strokeStyle="#64748b",f.lineWidth=4,f.stroke(),f.beginPath(),f.arc(T,I,48,0,Math.PI*2),f.fillStyle="#dc2626",f.fill(),f.strokeStyle="#fde047",f.lineWidth=3,f.stroke(),f.fillStyle="#ffffff",f.font="bold 50px sans-serif",f.textAlign="center",f.textBaseline="middle",f.fillText("মা",T,I)};m(140,125),m(884,125);const p=new le(l),w=document.createElement("canvas");w.width=1024,w.height=1024;const g=w.getContext("2d");g.beginPath(),g.moveTo(40,1024),g.lineTo(40,520),g.bezierCurveTo(40,60,984,60,984,520),g.lineTo(984,1024),g.closePath(),g.fillStyle="#dc2626",g.fill(),g.strokeStyle="#881337",g.lineWidth=12,g.stroke(),g.strokeStyle="#fde047",g.lineWidth=5,g.stroke(),g.fillStyle="#1d4ed8",g.fillRect(456,120,112,680),g.strokeStyle="#18181b",g.lineWidth=3,g.strokeRect(456,120,112,680),g.fillStyle="#ffffff",g.fillRect(498,120,28,680),g.beginPath(),g.arc(512,780,42,0,Math.PI*2),g.fillStyle="#dc2626",g.fill(),g.strokeStyle="#fde047",g.lineWidth=5,g.stroke(),g.fillStyle="#ffffff",g.font="bold 44px sans-serif",g.textAlign="center",g.textBaseline="middle",g.fillText("১",512,780);const v=(T,I,X,ut)=>{g.save(),g.translate(I,X),g.rotate(ut),g.font="bold 88px sans-serif",g.textAlign="center",g.textBaseline="middle",g.strokeStyle="#18181b",g.lineWidth=12,g.strokeText(T,0,0),g.fillStyle="#ffffff",g.fillText(T,0,0),g.restore()};v("মায়ের",310,240,-.22),v("দোয়া",714,240,.22);const D=(T,I)=>{g.save(),g.translate(T,500),I&&g.scale(-1,1),g.beginPath(),g.arc(70,-160,36,0,Math.PI*2),g.fillStyle="#fde047",g.fill(),g.strokeStyle="#18181b",g.lineWidth=3,g.stroke(),g.beginPath(),g.arc(70,-160,16,0,Math.PI*2),g.fillStyle="#ea580c",g.fill();for(let ut=0;ut<7;ut++){const Rt=-Math.PI/2+(ut-3)*.35;g.beginPath(),g.ellipse(80+Math.cos(Rt)*45,-50+Math.sin(Rt)*35,18,38,Rt,0,Math.PI*2),g.fillStyle="#ec4899",g.fill(),g.strokeStyle="#18181b",g.lineWidth=2.5,g.stroke()}g.beginPath(),g.arc(80,-50,24,0,Math.PI*2),g.fillStyle="#fef08a",g.fill(),g.stroke(),((ut,Rt)=>{g.fillStyle="#16a34a",g.beginPath(),g.ellipse(ut-30,Rt+20,16,32,.6,0,Math.PI*2),g.ellipse(ut+30,Rt+20,16,32,-.6,0,Math.PI*2),g.fill(),g.stroke(),g.fillStyle="#1d4ed8",g.beginPath(),g.arc(ut,Rt,55,0,Math.PI*2),g.fill(),g.strokeStyle="#18181b",g.lineWidth=3,g.stroke(),g.strokeStyle="#38bdf8",g.lineWidth=4,g.beginPath(),g.arc(ut,Rt,36,.4,Math.PI*1.6),g.stroke(),g.beginPath(),g.arc(ut,Rt,20,Math.PI,Math.PI*2.2),g.stroke(),g.fillStyle="#ffffff",g.beginPath(),g.arc(ut,Rt,10,0,Math.PI*2),g.fill()})(85,110),g.restore()};D(260,!1),D(764,!0);const C=new le(w),L=document.createElement("canvas");L.width=512,L.height=128;const B=L.getContext("2d");B.fillStyle="#ffffff",B.fillRect(0,0,512,128),B.fillStyle="#dc2626";for(let T=-128;T<640;T+=36)B.beginPath(),B.moveTo(T,0),B.lineTo(T+18,0),B.lineTo(T+18+128,128),B.lineTo(T+128,128),B.closePath(),B.fill();const y=new le(L),E=document.createElement("canvas");E.width=1024,E.height=1024;const P=E.getContext("2d");P.fillStyle="#f59e0b",P.fillRect(0,0,1024,1024),P.strokeStyle="rgba(234, 88, 12, 0.18)",P.lineWidth=3;for(let T=-1024;T<2048;T+=64)P.beginPath(),P.moveTo(T,0),P.lineTo(T+1024,1024),P.stroke(),P.beginPath(),P.moveTo(T,1024),P.lineTo(T+1024,0),P.stroke();P.fillStyle="#881337",P.fillRect(0,0,1024,140),P.fillRect(0,884,1024,140),P.fillStyle="#06b6d4",P.fillRect(0,140,1024,28),P.fillRect(0,856,1024,28),P.fillStyle="#10b981",P.fillRect(0,168,1024,16),P.fillRect(0,840,1024,16);for(let T=32;T<1024;T+=64)P.beginPath(),P.arc(T,140,16,0,Math.PI),P.fillStyle="#fde047",P.fill(),P.strokeStyle="#18181b",P.lineWidth=2.5,P.stroke(),P.beginPath(),P.arc(T,884,16,Math.PI,Math.PI*2),P.fillStyle="#fde047",P.fill(),P.strokeStyle="#18181b",P.lineWidth=2.5,P.stroke();[70,954].forEach(T=>{P.fillStyle="#ffffff",P.font="bold 44px sans-serif",P.textAlign="center",P.textBaseline="middle",P.shadowColor="rgba(0,0,0,0.8)",P.shadowBlur=8,P.fillText("মা বাবার দোয়া",512,T),P.shadowBlur=0}),((T,I)=>{P.strokeStyle="#ea580c",P.lineWidth=4;for(let X=0;X<Math.PI*2;X+=Math.PI/16)P.beginPath(),P.moveTo(T,I),P.lineTo(T+Math.cos(X)*260,I+Math.sin(X)*260),P.stroke();for(let X=0;X<16;X++){const ut=X*Math.PI/8,Rt=T+Math.cos(ut)*175,zt=I+Math.sin(ut)*175;P.beginPath(),P.ellipse(Rt,zt,42,65,ut+Math.PI/2,0,Math.PI*2),P.fillStyle=X%2===0?"#dc2626":"#0284c7",P.fill(),P.strokeStyle="#18181b",P.lineWidth=4,P.stroke()}for(let X=0;X<12;X++){const ut=X*Math.PI/6,Rt=T+Math.cos(ut)*115,zt=I+Math.sin(ut)*115;P.beginPath(),P.ellipse(Rt,zt,34,52,ut+Math.PI/2,0,Math.PI*2),P.fillStyle=X%2===0?"#ec4899":"#10b981",P.fill(),P.strokeStyle="#18181b",P.lineWidth=3.5,P.stroke()}P.beginPath(),P.arc(T,I,62,0,Math.PI*2),P.fillStyle="#fde047",P.fill(),P.strokeStyle="#18181b",P.lineWidth=4,P.stroke(),P.beginPath(),P.arc(T,I,32,0,Math.PI*2),P.fillStyle="#b91c1c",P.fill(),[-1,1].forEach(X=>{P.beginPath(),P.moveTo(T+X*160,I-60),P.bezierCurveTo(T+X*320,I-140,T+X*420,I-40,T+X*340,I+50),P.bezierCurveTo(T+X*280,I+120,T+X*200,I+60,T+X*180,I),P.fillStyle="#0d9488",P.fill(),P.strokeStyle="#18181b",P.lineWidth=4,P.stroke(),P.beginPath(),P.arc(T+X*320,I-30,28,0,Math.PI*2),P.fillStyle="#fde047",P.fill(),P.beginPath(),P.arc(T+X*320,I-30,16,0,Math.PI*2),P.fillStyle="#1e3a8a",P.fill()})})(512,512);const at=(T,I)=>{const X=["#dc2626","#ec4899","#f59e0b","#10b981"];for(let ut=0;ut<8;ut++){const Rt=ut*Math.PI/4,zt=T+Math.cos(Rt)*48,Kt=I+Math.sin(Rt)*48;P.beginPath(),P.arc(zt,Kt,22,0,Math.PI*2),P.fillStyle=X[ut%X.length],P.fill(),P.strokeStyle="#18181b",P.lineWidth=2.5,P.stroke()}P.beginPath(),P.arc(T,I,26,0,Math.PI*2),P.fillStyle="#fde047",P.fill(),P.strokeStyle="#18181b",P.lineWidth=2.5,P.stroke(),P.beginPath(),P.arc(T,I,12,0,Math.PI*2),P.fillStyle="#991b1b",P.fill()};[120,904].forEach(T=>{at(T,320),at(T,704)});const O=new le(E),z=document.createElement("canvas");z.width=256,z.height=256;const H=z.getContext("2d");H.fillStyle="#b91c1c",H.fillRect(0,0,256,256),H.strokeStyle="#fde047",H.lineWidth=3;for(let T=0;T<256;T+=32)H.beginPath(),H.moveTo(T,0),H.lineTo(T+32,256),H.stroke(),H.beginPath(),H.moveTo(256-T,0),H.lineTo(256-T-32,256),H.stroke();const it=new le(z),nt=document.createElement("canvas");nt.width=512,nt.height=256;const Y=nt.getContext("2d");Y.fillStyle="#f59e0b",Y.fillRect(0,0,512,256),Y.fillStyle="#ea580c",Y.beginPath(),Y.arc(256,105,45,0,Math.PI*2),Y.fill();for(let T=0;T<Math.PI*2;T+=Math.PI/8)Y.fillStyle="#dc2626",Y.beginPath(),Y.arc(256+Math.cos(T)*62,105+Math.sin(T)*62,14,0,Math.PI*2),Y.fill();Y.fillStyle="#fde047",Y.beginPath(),Y.arc(256,105,26,0,Math.PI*2),Y.fill(),Y.fillStyle="#0d9488",Y.fillRect(0,185,512,71),Y.strokeStyle="#fde047",Y.lineWidth=5;for(let T=-20;T<=530;T+=32)Y.beginPath(),Y.moveTo(T,185),Y.lineTo(T+32,256),Y.stroke(),Y.beginPath(),Y.moveTo(T+32,185),Y.lineTo(T,256),Y.stroke();const ot=new le(nt),K=new $({color:14427686,metalness:.6,roughness:.3}),pt=new $({color:15658734,metalness:.9,roughness:.15}),j=new $({color:2040865,roughness:.9}),lt=new $({color:165063,metalness:.5,roughness:.4}),xt=new $({color:1409085,roughness:.6}),Lt=new $({map:d,roughness:.4}),yt=new $({map:p,roughness:.35,metalness:.1}),Ot=new $({map:C,roughness:.6,transparent:!0,side:Re}),Gt=new $({map:y,roughness:.45,metalness:.1}),Pt=new $({map:ot,roughness:.5,side:Re}),St=new $({map:O,roughness:.7,side:Re}),U=new $({map:it,roughness:.6}),ft=new It,tt=new Et(.045,.045,1.8,12);tt.rotateX(Math.PI/2);const mt=new A(tt,K);mt.position.set(0,.65,.1),ft.add(mt);const Q=new Et(.04,.04,.95,12);Q.rotateX(-.18);const Nt=new A(Q,K);Nt.position.set(0,.95,-.9),ft.add(Nt),[-.1,.1].forEach(T=>{const I=new Et(.025,.02,.7,8);I.rotateX(.15);const X=new A(I,pt);X.position.set(T,.48,-1.02),ft.add(X)});const vt=new Et(.025,.025,.75,12);vt.rotateZ(Math.PI/2);const b=new A(vt,pt);b.position.set(0,1.35,-.85),ft.add(b),[-.38,.38].forEach(T=>{const I=new Et(.032,.032,.14,12);I.rotateZ(Math.PI/2);const X=new A(I,j);X.position.set(T,1.35,-.85),ft.add(X)});const S=new se(.09,14,14);S.scale(1,1,.7);const V=new A(S,new pe({color:16777215}));V.position.set(0,1.05,-1.08),ft.add(V),this.headlights.push(V);const ht=new se(.05,12,12);this.bellMesh=new A(ht,pt),this.bellMesh.position.set(-.24,1.4,-.85),ft.add(this.bellMesh);const dt=new st(.26,.08,.32),rt=new A(dt,j);rt.position.set(0,1.08,-.15),ft.add(rt),[-.08,.08].forEach(T=>{const I=new Et(.02,.02,.12,8),X=new A(I,pt);X.position.set(T,.98,-.15),ft.add(X)});const Dt=new Et(.06,.06,.28,12);Dt.rotateZ(Math.PI/2);const Mt=new A(Dt,pt);Mt.position.set(0,.52,-.15),ft.add(Mt),this.bodyGroup.add(ft),this.frontWheel=this.createRickshawWheel(.42,K,pt,j),this.frontWheel.position.set(0,.42,-1.05),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const At=new Et(.46,.46,.12,16,1,!0,0,Math.PI*.8);At.rotateZ(Math.PI/2);const Ft=new A(At,lt);Ft.position.set(0,.44,-1.05),this.bodyGroup.add(Ft),[-.78,.78].forEach(T=>{const I=this.createRickshawWheel(.48,K,pt,j);I.position.set(T,.48,.95),this.bodyGroup.add(I),this.wheels.push(I);const X=new Et(.53,.53,.16,20,1,!0,0,Math.PI);X.rotateZ(Math.PI/2);const ut=new A(X,Gt);ut.position.set(T,.48,.95),this.bodyGroup.add(ut)});const wt=new It,ct=new st(1.25,.08,1.25),Jt=new A(ct,xt);Jt.position.set(0,.65,.75),wt.add(Jt);const Ht=new st(.9,.05,.5),kt=new A(Ht,xt);kt.position.set(0,.48,.35),wt.add(kt);const Ut=new st(1.2,.38,.58),Ct=new A(Ut,xt);Ct.position.set(0,.86,.88),wt.add(Ct),[-.62,.62].forEach((T,I)=>{const X=new jt(1.15,.52),ut=new A(X,Pt);ut.position.set(T,.96,.75),ut.rotation.y=I===0?-Math.PI/2:Math.PI/2,wt.add(ut)});const Bt=new st(1.18,.14,.56),Yt=new A(Bt,U);Yt.position.set(0,1.08,.88),wt.add(Yt);const re=new st(1.16,.22,.1),Wt=new A(re,U);Wt.position.set(0,1.15,1.08),wt.add(Wt),[-.58,.58].forEach(T=>{const I=new st(.08,.28,.6),X=new A(I,lt);X.position.set(T,1.22,.88),wt.add(X)});const gt=new jt(1.06,.54),x=new A(gt,Lt);x.position.set(0,.66,1.18),x.rotation.y=Math.PI,wt.add(x);const F=new jt(1.08,.19),J=new A(F,yt);J.position.set(0,.96,1.185),J.rotation.y=Math.PI,wt.add(J);const k=new jt(1.22,.82),q=new A(k,Ot);q.position.set(0,1.5,1.11),q.rotation.y=Math.PI,wt.add(q),[-.78,.78].forEach(T=>{const I=new A(new Et(.055,.055,.035,12),pt);I.rotateX(Math.PI/2),I.position.set(T,.62,1.16),wt.add(I);const X=new se(.048,12,12),ut=new A(X,new pe({color:15680580}));ut.position.set(T,.62,1.18),wt.add(ut),this.brakeLights.push(ut)});const et=new Et(.7,.7,.96,24,1,!0,-Math.PI/2,Math.PI);et.rotateX(-Math.PI/2);const _t=new A(et,St);_t.position.set(0,1.5,.62),wt.add(_t);const Zt=new _n(.7,.022,8,24,Math.PI),Xt=new A(Zt,K);Xt.position.set(0,1.5,.14),wt.add(Xt);for(let T=0;T<=14;T++){const I=T*Math.PI/14,X=Math.cos(I)*.7,ut=1.5+Math.sin(I)*.7,Rt=new A(new se(.022,6,6),new $({color:14427686,roughness:.8}));Rt.position.set(X,ut-.02,.14),wt.add(Rt)}const qt=new _n(.7,.025,8,24,Math.PI),de=new A(qt,K);de.position.set(0,1.5,1.1),wt.add(de);for(let T=0;T<=14;T++){const I=T*Math.PI/14,X=Math.cos(I)*.7,ut=1.5+Math.sin(I)*.7,Rt=new A(new se(.022,6,6),new $({color:14427686,roughness:.8}));Rt.position.set(X,ut-.02,1.1),wt.add(Rt)}const we=new Et(.7,.7,.12,24,1,!0,-Math.PI/2,Math.PI);we.rotateX(-Math.PI/2);const nn=new A(we,St);nn.position.set(0,1.5,1.04),wt.add(nn),[-.7,.7].forEach((T,I)=>{const X=new jt(.82,.36),ut=new A(X,St);ut.position.set(T,1.34,.65),ut.rotation.y=I===0?-Math.PI/2:Math.PI/2,wt.add(ut);const Rt=new A(new Et(.012,.012,.78,8),pt);Rt.position.set(T+(I===0?-.015:.015),1.34,.65),Rt.rotation.x=.45,wt.add(Rt);const zt=new A(new Et(.012,.012,.78,8),pt);zt.position.set(T+(I===0?-.015:.015),1.34,.65),zt.rotation.x=-.45,wt.add(zt);const Kt=new A(new se(.022,8,8),K);Kt.position.set(T+(I===0?-.025:.025),1.34,.65),wt.add(Kt)}),[-.64,.64].forEach(T=>{const I=new Et(.016,.016,1.15,8);I.rotateX(.42);const X=new A(I,K);X.position.set(T,1.4,.6),wt.add(X)}),this.bodyGroup.add(wt);const ke=new It,ln=new $({color:165063,roughness:.8}),Sn=new $({color:9262372,roughness:.7}),sn=new $({color:1409085,roughness:.9}),Ze=new st(.36,.48,.22),rn=new A(Ze,ln);rn.position.set(0,1.42,-.25),rn.rotation.x=.22,ke.add(rn);const $n=new se(.12,14,14),Dn=new A($n,Sn);Dn.position.set(0,1.74,-.32),ke.add(Dn);const Un=new _n(.11,.035,8,16);Un.rotateX(Math.PI/2);const R=new A(Un,new $({color:14427686}));R.position.set(0,1.68,-.32),ke.add(R),[-.18,.18].forEach(T=>{const I=new Et(.04,.035,.52,8);I.rotateX(.75);const X=new A(I,Sn);X.position.set(T,1.42,-.52),ke.add(X)});const G=new st(.38,.44,.32),W=new A(G,sn);W.position.set(0,1.05,-.18),ke.add(W),this.bodyGroup.add(ke),this.buildCuteRomanticCouple(),[-.32,.32].forEach(T=>{const I=new Ie(.12,.65,8);I.rotateX(-Math.PI/2);const X=new pe({color:16759552,transparent:!0,opacity:0}),ut=new A(I,X);ut.position.set(T,.58,1.25),this.bodyGroup.add(ut),this.exhaustFires.push(ut)})}createRickshawWheel(t,e,n,i){const r=new It,a=new _n(t,.038,14,36);a.rotateY(Math.PI/2);const o=new A(a,i);r.add(o);const c=new _n(t*.92,.02,10,36);c.rotateY(Math.PI/2);const h=new A(c,n);r.add(h);const u=new Et(.06,.06,.14,14);u.rotateZ(Math.PI/2);const d=new A(u,e);r.add(d);for(let l=0;l<14;l++){const f=l*Math.PI/7,_=new Et(.005,.005,t*1.84,4);_.rotateX(f);const M=new A(_,n);r.add(M)}return r}buildCuteRomanticCouple(){this.coupleGroup=new It,this.coupleGroup.position.set(0,0,0);const t=new $({color:16106390,roughness:.6}),e=new $({color:1841431,roughness:.5}),n=new $({color:986638,roughness:.4}),i=new $({color:15680580,roughness:.7}),r=new $({color:1976635,roughness:.8}),a=new $({color:15485081,roughness:.6}),o=new $({color:16638023,roughness:.7}),c=new $({color:16777215,roughness:.8}),h=new It;h.position.set(-.25,1.18,.82);const u=new st(.32,.42,.24),d=new A(u,i);d.position.set(0,.22,0),d.rotation.y=.16,d.rotation.z=-.06,h.add(d);const l=new se(.12,14,14),f=new A(l,t);f.position.set(.02,.52,.02),f.rotation.y=.26,f.rotation.z=-.08,h.add(f);const _=new se(.13,14,14);_.scale(1.02,1.05,1.02);const M=new A(_,e);M.position.set(.02,.55,.01),h.add(M);const m=new st(.28,.18,.48),p=new A(m,r);p.position.set(0,-.05,-.16),h.add(p);const w=new Et(.04,.035,.38,8);w.rotateZ(.25);const g=new A(w,i);g.position.set(-.22,.18,0),h.add(g);const v=new Et(.04,.035,.34,8);v.rotateZ(-Math.PI/4),v.rotateX(-.18);const D=new A(v,i);D.position.set(.18,.14,-.07),h.add(D),this.coupleGroup.add(h);const C=new It;C.position.set(.25,1.18,.82);const L=new st(.28,.38,.22),B=new A(L,a);B.position.set(0,.2,0),B.rotation.y=-.18,B.rotation.z=.08,C.add(B);const y=new st(.32,.35,.24),E=new A(y,o);E.position.set(0,.22,.02),C.add(E);const P=new se(.11,14,14),Z=new A(P,t);Z.position.set(-.02,.48,.02),Z.rotation.y=-.3,Z.rotation.z=.1,C.add(Z);const at=new se(.12,14,14);at.scale(1.04,1.06,1.08);const O=new A(at,n);O.position.set(-.02,.51,0),C.add(O);const z=new Et(.04,.02,.32,8);z.rotateX(-.4);const H=new A(z,n);H.position.set(-.01,.38,.15),C.add(H);const it=new st(.26,.16,.46),nt=new A(it,c);nt.position.set(0,-.05,-.16),C.add(nt);const Y=new Et(.035,.03,.35,8);Y.rotateZ(-.25),Y.rotateX(-.25);const ot=new A(Y,a);ot.position.set(.2,.16,-.05),C.add(ot);const K=new It,pt=new Et(.007,.007,.32,6),j=new $({color:1409085,roughness:.8}),lt=new A(pt,j);lt.position.set(0,.14,0),K.add(lt);const xt=new st(.07,.012,.035),Lt=new A(xt,j);Lt.position.set(.035,.12,0),Lt.rotation.z=.3,K.add(Lt);const yt=new A(xt,j);yt.position.set(-.035,.18,0),yt.rotation.z=-.3,K.add(yt);const Ot=new $({color:14427686,roughness:.35,metalness:.1,emissive:8330525,emissiveIntensity:.3}),Gt=new A(new Xr(.055,1),Ot);Gt.position.set(0,.3,0),Gt.scale.set(1.1,1.25,1.1),K.add(Gt);const Pt=new A(new se(.038,8,8),new $({color:10033947,roughness:.3}));Pt.position.set(0,.32,0),K.add(Pt),K.position.set(.22,.22,-.15),K.rotation.x=-.35,K.rotation.z=-.22,C.add(K);const St=new Et(.035,.03,.32,8);St.rotateZ(Math.PI/4),St.rotateX(-.18);const U=new A(St,a);U.position.set(-.17,.14,-.07),C.add(U),this.coupleGroup.add(C);const ft=new It;ft.position.set(0,1.28,.74);const tt=new A(new se(.045,10,10),t);tt.scale.set(1.3,.9,1.1),tt.position.set(-.02,0,0),ft.add(tt);const mt=new A(new se(.042,10,10),t);mt.scale.set(1.2,.85,1.05),mt.position.set(.02,.01,.01),ft.add(mt),this.coupleGroup.add(ft),this.bodyGroup.add(this.coupleGroup)}update(t,e,n,i,r,a){const c=t*1e3/3600/.42*a;this.wheelRotation-=c,this.wheels.forEach(m=>{m.rotation.x=this.wheelRotation});const h=n-e,u=-h*.12;this.currentRoll+=(u-this.currentRoll)*Math.min(1,a*7),this.bodyGroup.rotation.z=this.currentRoll;const d=-h*.08;this.currentYaw+=(d-this.currentYaw)*Math.min(1,a*6),this.bodyGroup.rotation.y=this.currentYaw;let l=0;i?l=.04:r&&(l=-.05),this.currentPitch+=(l-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch;const f=performance.now()*.001,_=Math.min(1,t/80),M=Math.sin(f*8.5)*.025*_;this.coupleGroup.position.y=M,this.coupleGroup.rotation.z=Math.sin(f*4.2)*.015*_,this.exhaustFires.forEach(m=>{r?(m.material.opacity=.9,m.scale.set(1.1+Math.random()*.4,1.1+Math.random()*.5,1.1+Math.random()*.4)):m.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.bellMesh&&this.bellMesh.scale.set(1.3,1.3,1.3),this.headlights.forEach(m=>m.scale.set(1.4,1.4,1.4))):(this.bellMesh&&this.bellMesh.scale.set(1,1,1),this.headlights.forEach(m=>m.scale.set(1,1,1))),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=1.15,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.35,this.bodyGroup.rotation.y=.45,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.25}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class I0{constructor(){this.group=new It,this.group.name="og_deshi_cng",this.wheels=[],this.frontWheel=null,this.headlights=[],this.headlightRays=[],this.brakeLights=[],this.exhaustFires=[],this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.wheelRotation=0,this.hornTimer=0,this.box=new xn,this.collisionSize=new N(1.55,1.9,2.9),this.buildCNG(),this.group.scale.set(.85,.85,.85)}buildCNG(){this.bodyGroup=new It,this.group.add(this.bodyGroup);const t=document.createElement("canvas");t.width=512,t.height=256;const e=t.getContext("2d");e.fillStyle="#181a1b",e.fillRect(0,0,512,256),e.fillStyle="rgba(255, 255, 255, 0.03)";for(let k=0;k<512;k+=4)e.fillRect(k,0,2,256);for(let k=0;k<256;k+=4)e.fillRect(0,k,512,2);e.fillStyle="#f1f5f9",e.strokeStyle="#94a3b8",e.lineWidth=1.5;for(let k=0;k<512;k+=32)e.beginPath(),e.arc(k+16,238,14,0,Math.PI,!1),e.fill(),e.stroke();e.fillStyle="#dc2626";for(let k=0;k<512;k+=32)e.beginPath(),e.arc(k+16,244,3,0,Math.PI*2),e.fill();const n=320,i=110;e.fillStyle="#b91c1c",e.beginPath(),e.roundRect(n-120,i-45,240,80,16),e.fill(),e.strokeStyle="#facc15",e.lineWidth=4,e.stroke(),e.strokeStyle="#fde047",e.lineWidth=2,e.strokeRect(n-112,i-38,224,66),e.fillStyle="#ffffff",e.font="900 38px sans-serif",e.textAlign="center",e.textBaseline="middle",e.shadowColor="rgba(0,0,0,0.85)",e.shadowBlur=6,e.fillText("মায়ের দোয়া",n,i-4),e.shadowBlur=0;const r=(k,q)=>{for(let _t=0;_t<6;_t++){const Zt=_t*Math.PI*2/6;e.fillStyle="#facc15",e.beginPath(),e.arc(k+Math.cos(Zt)*12,q+Math.sin(Zt)*12,7,0,Math.PI*2),e.fill()}e.fillStyle="#dc2626",e.beginPath(),e.arc(k,q,6,0,Math.PI*2),e.fill()};r(n-145,i-5),r(n+145,i-5);const a=new le(t),o=document.createElement("canvas");o.width=512,o.height=512;const c=o.getContext("2d");c.clearRect(0,0,512,512),c.fillStyle="#166534",c.fillRect(10,10,492,260),c.clearRect(22,22,468,236),c.strokeStyle="#15803d",c.lineWidth=3.5;const h=28;for(let k=-260;k<=772;k+=h)c.beginPath(),c.moveTo(k,22),c.lineTo(k+236,258),c.stroke(),c.beginPath(),c.moveTo(k,258),c.lineTo(k+236,22),c.stroke();c.strokeStyle="#166534",c.lineWidth=7;for(let k=60;k<=460;k+=70)c.beginPath(),c.moveTo(k,15),c.lineTo(k,265),c.stroke();c.fillStyle="#334155",c.fillRect(15,135,482,12),c.fillStyle="#facc15",c.fillRect(235,128,42,26),c.fillStyle="#0f172a",c.fillRect(248,135,16,12),c.fillStyle="#16a34a",c.fillRect(10,270,492,236),c.strokeStyle="#14532d",c.lineWidth=5,c.strokeRect(12,272,488,232),c.fillStyle="#ffffff",c.beginPath(),c.roundRect(24,288,464,95,8),c.fill(),c.strokeStyle="#0284c7",c.lineWidth=4,c.stroke(),c.fillStyle="#dc2626",c.font="bold 28px sans-serif",c.fillText("★",42,342),c.fillText("★",470,342),c.fillStyle="#0284c7",c.font="900 48px sans-serif",c.textAlign="center",c.textBaseline="middle",c.fillText("সি এন জি চালিত",256,335),c.fillStyle="#f59e0b",c.beginPath(),c.roundRect(24,396,464,98,8),c.fill(),c.strokeStyle="#b91c1c",c.lineWidth=4,c.stroke(),c.strokeStyle="#dc2626",c.lineWidth=2,c.strokeRect(32,404,448,82),c.fillStyle="#b91c1c",c.font="900 46px sans-serif",c.fillText("ভাই বোন পরিবহন",256,445);const u=new le(o),d=document.createElement("canvas");d.width=256,d.height=160;const l=d.getContext("2d");l.fillStyle="#16a34a",l.fillRect(0,0,256,160);const f=["#0284c7","#facc15","#dc2626"];for(let k=0;k<3;k++)l.fillStyle=f[k],l.beginPath(),l.roundRect(15,20+k*24,226,18,4),l.fill();l.fillStyle="#ffffff",l.font="900 48px sans-serif",l.textAlign="center",l.textBaseline="middle",l.shadowColor="rgba(0,0,0,0.5)",l.shadowBlur=6,l.fillText("CNG",128,122),l.shadowBlur=0;const _=new le(d),M=document.createElement("canvas");M.width=512,M.height=256;const m=M.getContext("2d");m.fillStyle="#1e293b",m.fillRect(0,0,512,256);const p=(k,q,et)=>{m.fillStyle="#94a3b8",m.beginPath(),m.arc(k,q,et+6,0,Math.PI*2),m.fill();const _t=m.createRadialGradient(k,q,4,k,q,et);_t.addColorStop(0,"#ffffff"),_t.addColorStop(.4,"#e2e8f0"),_t.addColorStop(.85,"#94a3b8"),_t.addColorStop(1,"#475569"),m.fillStyle=_t,m.beginPath(),m.arc(k,q,et,0,Math.PI*2),m.fill(),m.strokeStyle="rgba(255,255,255,0.6)",m.lineWidth=1.8;for(let Zt=10;Zt<et;Zt+=10)m.beginPath(),m.arc(k,q,Zt,0,Math.PI*2),m.stroke();m.fillStyle="#fef08a",m.beginPath(),m.arc(k,q,6,0,Math.PI*2),m.fill()};p(105,140,52),p(407,140,52),m.fillStyle="#0f172a";for(let k=200;k<=312;k+=16)m.fillRect(k,105,7,75);m.fillStyle="#047857",m.beginPath(),m.roundRect(165,20,182,54,6),m.fill(),m.strokeStyle="#ffffff",m.lineWidth=2.5,m.stroke(),m.fillStyle="#ffffff",m.font="bold 22px sans-serif",m.textAlign="center",m.textBaseline="middle",m.fillText("ঢাকা মেট্রো",256,47),m.fillStyle="#ef4444",m.fillRect(75,30,48,22),m.fillStyle="#f59e0b",m.fillRect(389,30,48,22);const w=new le(M),g=document.createElement("canvas");g.width=512,g.height=360;const v=g.getContext("2d");v.fillStyle="#16a34a",v.fillRect(0,0,512,360),v.strokeStyle="#14532d",v.lineWidth=4,v.strokeRect(6,6,500,348);for(let k=55;k<=220;k+=22)v.fillStyle="#14532d",v.fillRect(25,k,105,8),v.fillStyle="#22c55e",v.fillRect(25,k+8,105,2),v.fillStyle="#14532d",v.fillRect(382,k,105,8),v.fillStyle="#22c55e",v.fillRect(382,k+8,105,2),k>=165&&(v.fillStyle="#14532d",v.fillRect(145,k,222,7),v.fillStyle="#22c55e",v.fillRect(145,k+7,222,2));v.fillStyle="#b91c1c",v.beginPath(),v.roundRect(24,18,95,26,6),v.fill(),v.strokeStyle="#fde047",v.lineWidth=2,v.stroke(),v.fillStyle="#ffffff",v.font="bold 16px sans-serif",v.textAlign="center",v.textBaseline="middle",v.fillText("উত্তরা",71,31),v.fillStyle="#065f46",v.beginPath(),v.roundRect(390,18,98,26,6),v.fill(),v.strokeStyle="#fde047",v.lineWidth=2,v.stroke(),v.fillStyle="#fde047",v.font="bold 12px sans-serif",v.fillText("RE CNG",439,26),v.fillStyle="#ffffff",v.font="9px sans-serif",v.fillText("FOUR STROKE",439,37),v.fillStyle="#047857",v.beginPath(),v.roundRect(176,18,160,72,8),v.fill(),v.strokeStyle="#ffffff",v.lineWidth=3,v.stroke(),v.fillStyle="#ffffff",v.font="bold 19px sans-serif",v.fillText("ঢাকা মেট্রো-থ",256,40),v.font="bold 24px sans-serif",v.fillText("১১-৫০৫১",256,70),v.fillStyle="#facc15",v.beginPath(),v.roundRect(138,104,236,44,6),v.fill(),v.strokeStyle="#dc2626",v.lineWidth=3,v.stroke(),v.fillStyle="#dc2626",v.beginPath(),v.arc(158,126,9,0,Math.PI*2),v.arc(354,126,9,0,Math.PI*2),v.fill(),v.fillStyle="#1c1917",v.font="900 24px sans-serif",v.fillText("UTTARA",256,126);const D=(k,q,et)=>{const _t=["#0284c7","#10b981","#f59e0b","#ef4444","#ec4899"],Zt=Math.PI/_t.length;for(let Xt=0;Xt<_t.length;Xt++)v.fillStyle=_t[Xt],v.beginPath(),v.moveTo(k,q),v.arc(k,q,et,Math.PI+Xt*Zt,Math.PI+(Xt+1)*Zt),v.closePath(),v.fill();v.strokeStyle="#ffffff",v.lineWidth=2,v.stroke()};D(65,305,46),D(447,305,46);const C=new le(g),L=document.createElement("canvas");L.width=128,L.height=64;const B=L.getContext("2d");B.fillStyle="#facc15",B.fillRect(0,0,128,64),B.strokeStyle="#1c1917",B.lineWidth=4;for(let k=-64;k<192;k+=16)B.beginPath(),B.moveTo(k,0),B.lineTo(k+32,64),B.stroke(),B.beginPath(),B.moveTo(k+32,0),B.lineTo(k,64),B.stroke();const y=new le(L),E=new $({color:1483594,metalness:.25,roughness:.35}),P=new $({color:1409085,roughness:.45}),Z=new $({color:1579547,roughness:.9,metalness:.05}),at=new $({color:1976635,roughness:.7}),O=new $({color:15857145,metalness:.92,roughness:.12}),z=new $({color:2040865,roughness:.92}),H=new $({color:9741240,metalness:.65,roughness:.28}),it=new Zi({color:988970,transparent:!0,opacity:.52,roughness:.08,transmission:.6}),nt=new Zi({color:3718648,transparent:!0,opacity:.45,roughness:.08,transmission:.7}),Y=new $({color:1579035,roughness:.85}),ot=new $({map:a,roughness:.85}),K=new $({map:u,transparent:!0,opacity:.96,side:Re}),pt=new $({map:_,roughness:.35}),j=new $({map:w,roughness:.4}),lt=new $({map:C,roughness:.4,metalness:.1}),xt=new st(1.52,.36,2.65),Lt=new A(xt,E);Lt.position.set(0,.44,0),Lt.receiveShadow=!0,this.bodyGroup.add(Lt);const yt=new A(new st(1.35,.18,2.4),at);yt.position.set(0,.22,.05),this.bodyGroup.add(yt);const Ot=new It;Ot.position.set(0,0,0);const Gt=new Et(.52,.78,.85,18,1,!1,-Math.PI/2,Math.PI);Gt.rotateX(Math.PI/2);const Pt=new A(Gt,E);Pt.position.set(0,.7,-1.22),Ot.add(Pt),[-.72,.72].forEach((k,q)=>{const et=new jt(.72,.42),_t=new A(et,pt);_t.position.set(k,.68,-.92),_t.rotation.y=q===0?-Math.PI/2:Math.PI/2,Ot.add(_t)});const St=new A(new jt(.96,.48),j);St.position.set(0,.82,-1.58),Ot.add(St),[-.28,.28].forEach(k=>{const q=new _n(.12,.022,10,24),et=new A(q,O);et.position.set(k,.76,-1.59),Ot.add(et);const _t=new se(.11,14,14,0,Math.PI*2,0,Math.PI*.4);_t.rotateX(-Math.PI/2);const Zt=new pe({color:16777215}),Xt=new A(_t,Zt);Xt.position.set(k,.76,-1.59),Ot.add(Xt),this.headlights.push(Xt)}),[-.42,.42].forEach(k=>{const q=new st(.12,.05,.03),et=new pe({color:16096779}),_t=new A(q,et);_t.position.set(k,.98,-1.52),Ot.add(_t)}),this.bodyGroup.add(Ot);const U=new It,ft=new A(new st(1.48,.72,.04),Y);ft.position.set(0,1.42,-.9),ft.rotation.x=-.26,U.add(ft);const tt=new A(new jt(1.38,.64),it);tt.position.set(0,1.42,-.92),tt.rotation.x=-.26,U.add(tt);const mt=new A(new st(.02,.42,.015),at);mt.position.set(.12,1.42,-.94),mt.rotation.x=-.26,mt.rotation.z=.52,U.add(mt),[-.72,.72].forEach(k=>{const q=new Et(.035,.04,.82,8),et=new A(q,E);et.position.set(k,1.4,-.9),et.rotation.x=-.26,U.add(et)}),[-.78,.78].forEach((k,q)=>{const et=new Et(.014,.014,.32,6);et.rotateZ(q===0?.65:-.65);const _t=new A(et,at);_t.position.set(k,1.58,-.86),U.add(_t);const Zt=new Et(.08,.08,.025,14);Zt.rotateX(Math.PI/2);const Xt=new A(Zt,at);Xt.position.set(q===0?k-.16:k+.16,1.66,-.86),U.add(Xt);const qt=new A(new Fs(.072,14),new $({color:9741240,metalness:.9,roughness:.1}));qt.position.set(q===0?k-.16:k+.16,1.66,-.84),U.add(qt)}),this.bodyGroup.add(U);const Q=new It,Nt=new Et(.82,.82,2.22,24,1,!0,Math.PI*.12,Math.PI*.76);Nt.rotateZ(Math.PI/2);const vt=new A(Nt,Z);vt.position.set(0,1.8,.16),Q.add(vt),[-.78,.78].forEach((k,q)=>{const et=new A(new jt(1.65,.52),ot);et.position.set(k,1.66,.42),et.rotation.y=q===0?-Math.PI/2:Math.PI/2,Q.add(et)}),[-.75,.75].forEach(k=>{const q=new A(new st(.05,.92,.05),E);q.position.set(k,1.15,-.22),Q.add(q);const et=new A(new st(.05,.92,.05),E);et.position.set(k,1.15,1.2),Q.add(et)}),this.bodyGroup.add(Q),[-.77,.77].forEach((k,q)=>{const et=new A(new jt(1.36,1.05),K);et.position.set(k,1.08,.28),et.rotation.y=q===0?-Math.PI/2:Math.PI/2,this.bodyGroup.add(et)});const b=new It,S=new A(new jt(1.42,2.2),new $({color:1579035,roughness:.95}));S.rotation.x=-Math.PI/2,S.position.set(0,.63,.1),b.add(S);const V=new A(new st(.55,.25,.45),at);V.position.set(0,.85,-.42),b.add(V);const ht=new It;ht.position.set(0,1.08,-.68);const dt=new A(new Et(.02,.02,.64,8),O);dt.rotateZ(Math.PI/2),ht.add(dt),[-.3,.3].forEach(k=>{const q=new A(new Et(.028,.028,.12,8),at);q.rotateZ(Math.PI/2),q.position.set(k,0,0),ht.add(q)});const rt=new A(new st(.18,.08,.12),at);rt.position.set(0,.04,.02),ht.add(rt),b.add(ht);const Dt=new A(new st(.38,.48,.24),new $({color:165063,roughness:.8}));Dt.position.set(0,1.2,-.4),b.add(Dt);const Mt=new A(new se(.12,12,12),new $({color:9262372,roughness:.7}));Mt.position.set(0,1.54,-.4),b.add(Mt);const At=new A(new st(1.38,.26,.58),new $({color:2042167,roughness:.65}));At.position.set(0,.85,.72),b.add(At);const Ft=new A(new st(1.38,.48,.12),new $({color:2042167,roughness:.65}));Ft.position.set(0,1.18,.98),b.add(Ft),this.bodyGroup.add(b);const wt=new It,ct=new A(new jt(1.52,.72),Z);ct.position.set(0,1.62,1.26),ct.rotation.y=Math.PI,wt.add(ct);const Jt=new A(new st(1.18,.52,.04),Y);Jt.position.set(0,1.62,1.28),wt.add(Jt);const Ht=new A(new jt(1.1,.44),nt);Ht.position.set(0,1.62,1.305),Ht.rotation.y=Math.PI,wt.add(Ht);const kt=new A(new jt(1.52,.94),lt);kt.position.set(0,.88,1.33),kt.rotation.y=Math.PI,wt.add(kt),[-.64,.64].forEach(k=>{const q=new A(new st(.12,.28,.05),Y);q.position.set(k,.82,1.35),wt.add(q);const et=new A(new st(.1,.12,.04),new pe({color:15680580}));et.position.set(k,.88,1.37),wt.add(et),this.brakeLights.push(et);const _t=new A(new st(.1,.08,.04),new pe({color:16317180}));_t.position.set(k,.76,1.37),wt.add(_t)}),this.bodyGroup.add(wt);const Ut=new It,Ct=new Et(.035,.035,1.65,12);Ct.rotateZ(Math.PI/2);const Bt=new A(Ct,E);Bt.position.set(0,.38,1.42),Ut.add(Bt),[-.81,.81].forEach(k=>{const q=new Et(.035,.035,.24,10);q.rotateX(Math.PI/2);const et=new A(q,E);et.position.set(k,.38,1.32),Ut.add(et)});const Yt=new A(new jt(.42,.12),new $({map:y,roughness:.4}));Yt.position.set(0,.38,1.46),Yt.rotation.y=Math.PI,Ut.add(Yt);const re=new Et(.022,.022,1.42,10);re.rotateZ(Math.PI/2);const Wt=new A(re,O);Wt.position.set(0,.26,1.41),Ut.add(Wt),[-.64,.64].forEach(k=>{const q=new A(new st(.24,.18,.02),z);q.position.set(k,.22,1.34),Ut.add(q)}),this.bodyGroup.add(Ut),this.frontWheel=this.createCNGWheel(.3,z,H),this.frontWheel.position.set(0,.3,-1.35),this.bodyGroup.add(this.frontWheel),this.wheels.push(this.frontWheel);const gt=new Et(.36,.36,.22,16,1,!0,0,Math.PI);gt.rotateZ(Math.PI/2);const x=new A(gt,E);x.position.set(0,.34,-1.35),this.bodyGroup.add(x);const F=new Et(.04,.04,.52,8),J=new A(F,O);J.position.set(0,.62,-1.35),this.bodyGroup.add(J),[-.7,.7].forEach(k=>{const q=this.createCNGWheel(.33,z,H);q.position.set(k,.33,.82),this.bodyGroup.add(q),this.wheels.push(q);const et=new Et(.39,.39,.24,16,1,!0,0,Math.PI);et.rotateZ(Math.PI/2);const _t=new A(et,P);_t.position.set(k,.36,.82),this.bodyGroup.add(_t)}),[-.32,.32].forEach(k=>{const q=new Ie(.12,.75,8);q.rotateX(-Math.PI/2);const et=new pe({color:440020,transparent:!0,opacity:0}),_t=new A(q,et);_t.position.set(k,.4,1.46),this.bodyGroup.add(_t),this.exhaustFires.push(_t)})}createCNGWheel(t,e,n){const i=new It,r=new Et(t,t,.2,20);r.rotateZ(Math.PI/2);const a=new A(r,e);i.add(a);const o=new Et(t*.65,t*.65,.21,16);o.rotateZ(Math.PI/2);const c=new A(o,n);i.add(c);const h=new Et(t*.28,t*.28,.22,10);h.rotateZ(Math.PI/2);const u=new A(h,new $({color:1579035,roughness:.6}));i.add(u);const d=new Et(t*.12,t*.12,.23,8);d.rotateZ(Math.PI/2);const l=new A(d,new $({color:15857145,metalness:.9}));return i.add(l),i}update(t,e,n,i,r,a){const c=t*1e3/3600/.3*a;this.wheelRotation-=c,this.wheels.forEach(f=>{f.rotation.x=this.wheelRotation});const h=n-e,u=-h*.15;this.currentRoll+=(u-this.currentRoll)*Math.min(1,a*8.5),this.bodyGroup.rotation.z=this.currentRoll;const d=-h*.1;this.currentYaw+=(d-this.currentYaw)*Math.min(1,a*7.5),this.bodyGroup.rotation.y=this.currentYaw;let l=0;i?l=.05:r&&(l=-.045),this.currentPitch+=(l-this.currentPitch)*Math.min(1,a*8),this.bodyGroup.rotation.x=this.currentPitch,this.brakeLights.forEach(f=>{f.material.color.setHex(i?16711680:15680580)}),this.exhaustFires.forEach(f=>{r?(f.material.opacity=.95,f.scale.set(1.2+Math.random()*.4,1.2+Math.random()*.5,1.2+Math.random()*.4),f.material.color.setHex(Math.random()>.4?440020:3718648)):f.material.opacity=0}),this.hornTimer>0?(this.hornTimer-=a,this.headlights.forEach(f=>f.scale.set(1.4,1.4,1.4))):this.headlights.forEach(f=>f.scale.set(1,1,1)),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=.95,this.box.setFromCenterAndSize(t,this.collisionSize)}triggerCrash(){this.bodyGroup.rotation.z=.45,this.bodyGroup.rotation.y=.5,this.bodyGroup.rotation.x=-.18,this.bodyGroup.position.y=.35}flashHorn(){this.hornTimer=.35}reset(){this.group.position.set(0,0,0),this.bodyGroup.rotation.set(0,0,0),this.bodyGroup.position.set(0,0,0),this.currentRoll=0,this.currentPitch=0,this.currentYaw=0,this.updateBoundingBox()}}class D0{constructor(){this.initMaterials(),this.animatedAnimals=[],this.smokeEmitters=[]}initMaterials(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#9ca3af",e.fillRect(0,0,128,128);for(let o=0;o<128;o+=8)e.fillStyle="#6b7280",e.fillRect(o,0,4,128),e.fillStyle="#d1d5db",e.fillRect(o+4,0,4,128);const n=new le(t);n.wrapS=en,n.wrapT=en,n.repeat.set(4,4),this.tinRoofMat=new $({map:n,metalness:.8,roughness:.35,color:10265519}),this.rustedTinMat=new $({map:n,metalness:.65,roughness:.6,color:9065018});const i=document.createElement("canvas");i.width=128,i.height=128;const r=i.getContext("2d");r.fillStyle="#c8a165",r.fillRect(0,0,128,128),r.strokeStyle="#8c6239",r.lineWidth=3;for(let o=0;o<=128;o+=16)r.beginPath(),r.moveTo(0,o),r.lineTo(128,o),r.stroke(),r.beginPath(),r.moveTo(o,0),r.lineTo(o,128),r.stroke();const a=new le(i);a.wrapS=en,a.wrapT=en,a.repeat.set(2,2),this.bambooWallMat=new $({map:a,roughness:.85,color:13935475}),this.woodMat=new $({color:6045747,roughness:.85}),this.mudPlinthMat=new $({color:8150594,roughness:.95}),this.brickMat=new $({color:10239278,roughness:.9}),this.palmLeafMat=new $({color:3046706,roughness:.6,side:Re}),this.bananaLeafMat=new $({color:4431943,roughness:.5,side:Re}),this.treeCrownMat=new $({color:1793568,roughness:.85}),this.bambooTrunkMat=new $({color:6732650,roughness:.4}),this.palmTrunkMat=new $({color:7162945,roughness:.9}),this.hayMat=new $({color:13934615,roughness:.95}),this.paddyFieldMat=new $({color:3706428,roughness:.8}),this.waterMat=new $({color:1994588,metalness:.2,roughness:.15,transparent:!0,opacity:.88}),this.concreteMat=new $({color:10395294,roughness:.7}),this.cowWhiteMat=new $({color:16119280,roughness:.6}),this.cowBrownMat=new $({color:9262372,roughness:.65}),this.cowBlackPatchMat=new $({color:2171169,roughness:.7}),this.hornMat=new $({color:3621201,roughness:.4}),this.ropeMat=new pe({color:12756553}),this.duckMat=new $({color:16777215,roughness:.5}),this.beakMat=new $({color:16750592,roughness:.4}),this.smokeMat=new pe({color:16777215,transparent:!0,opacity:.35})}createCow(t="brown"){const e=new It;e.name="deshi_cow";const n=t==="white"?this.cowWhiteMat:t==="black"?this.cowBlackPatchMat:this.cowBrownMat,i=new st(.9,.95,1.7),r=new A(i,n);r.position.set(0,1.05,0),r.castShadow=!0,e.add(r);const a=new Ie(.3,.45,8),o=new A(a,n);o.position.set(0,1.62,-.45),o.rotation.x=-.2,o.castShadow=!0,e.add(o);const c=new st(.12,.45,.5),h=new A(c,n);h.position.set(0,.85,-.85),e.add(h);const u=new It;u.position.set(0,1.25,-.85);const d=new st(.45,.55,.6),l=new A(d,n);l.position.set(0,.15,-.2),l.rotation.x=.35,u.add(l);const f=new st(.48,.52,.7),_=new A(f,n);_.position.set(0,.28,-.55),u.add(_);const M=new $({color:2236962,roughness:.8}),m=new st(.36,.3,.3),p=new A(m,M);p.position.set(0,.18,-.92),u.add(p),[-.22,.22].forEach(z=>{const H=new Ie(.06,.35,6),it=new A(H,this.hornMat);it.position.set(z,.56,-.48),it.rotation.z=z>0?-.4:.4,it.rotation.x=.3,u.add(it);const nt=new st(.22,.08,.1),Y=new A(nt,n);Y.position.set(z>0?.32:-.32,.38,-.45),Y.rotation.z=z>0?-.35:.35,u.add(Y)}),e.add(u),[{x:-.32,z:-.55},{x:.32,z:-.55},{x:-.32,z:.55},{x:.32,z:.55}].forEach(z=>{const H=new st(.2,.75,.2),it=new A(H,n);it.position.set(z.x,.38,z.z),it.castShadow=!0,e.add(it);const nt=new st(.22,.1,.22),Y=new A(nt,this.hornMat);Y.position.set(z.x,.05,z.z),e.add(Y)});const g=new It;g.position.set(0,1.35,.85);const v=new Et(.03,.03,.85,6);v.translate(0,-.42,0);const D=new A(v,n);g.add(D);const C=new Ie(.08,.25,6);C.translate(0,-.9,0);const L=new A(C,this.hornMat);g.add(L),e.add(g);const B=new Et(.08,.1,1.2,8),y=new A(B,this.woodMat);y.position.set(.9,.6,-1.2),e.add(y);const E=[new N(0,1.2,-.8),new N(.45,.75,-1),new N(.9,.85,-1.2)],P=new Cs(E),Z=new Yi(P,8,.02,4,!1),at=new A(Z,this.ropeMat);e.add(at);const O={type:"cow",head:u,tail:g,seed:Math.random()*10};return this.animatedAnimals.push(O),e}createVillageHouse(t=!1){const e=new It;e.name="village_house";const n=t?this.rustedTinMat:this.tinRoofMat,i=new st(6.6,.45,5.2),r=new A(i,this.mudPlinthMat);r.position.set(0,.22,0),r.receiveShadow=!0,e.add(r);const a=new st(5.8,2.6,3.8),o=new A(a,this.bambooWallMat);o.position.set(0,1.75,-.4),o.castShadow=!0,o.receiveShadow=!0,e.add(o);const c=new st(.85,1.8,.08),h=new A(c,this.woodMat);h.position.set(.6,1.35,1.52),e.add(h),[-1.6,-.6].forEach(_=>{const M=new st(.7,.8,.08),m=new A(M,this.woodMat);m.position.set(_,1.8,1.52),e.add(m)});const u=new st(6.6,.1,2.8),d=new A(u,n);d.position.set(0,3.65,-.9),d.rotation.x=-.52,d.castShadow=!0,e.add(d);const l=new st(6.6,.1,3.4),f=new A(l,n);return f.position.set(0,3.5,.8),f.rotation.x=.46,f.castShadow=!0,e.add(f),[-2.5,-.8,.8,2.5].forEach(_=>{const M=new Et(.08,.08,2.3,8),m=new A(M,this.woodMat);m.position.set(_,1.6,2.1),m.castShadow=!0,e.add(m)}),e}createTeaStall(){const t=new It;t.name="cha_er_tong";const e=new st(3.2,1,1.8),n=new A(e,this.woodMat);n.position.set(0,.5,0),t.add(n);const i=new st(3.8,.08,2.8),r=new A(i,this.tinRoofMat);r.position.set(0,2.3,.2),r.rotation.x=.2,r.castShadow=!0,t.add(r),[-1.6,1.6].forEach(M=>{const m=new Et(.07,.07,2.2,6),p=new A(m,this.woodMat);p.position.set(M,1.1,1.2),t.add(p)});const a=new st(3,.08,.45),o=new A(a,this.woodMat);o.position.set(0,.45,1.8),t.add(o),[-1.2,1.2].forEach(M=>{const m=new st(.08,.45,.4),p=new A(m,this.woodMat);p.position.set(M,.22,1.8),t.add(p)});const c=new $({color:13421772,metalness:.9,roughness:.2}),h=new Et(.18,.22,.35,10),u=new A(h,c);u.position.set(-.6,1.18,.2),t.add(u);const d=new Zi({color:16777215,transmission:.7,roughness:.1}),l=new Et(.12,.12,.28,8),f=new A(l,d);f.position.set(.6,1.15,.1),t.add(f);const _=new It;_.position.set(-.6,1.45,.2),t.add(_);for(let M=0;M<4;M++){const m=new se(.08,6,6),p=new A(m,this.smokeMat);p.position.y=M*.25,_.add(p)}return this.smokeEmitters.push(_),t}createHaystack(){const t=new It;t.name="khorer_gada";const e=new Et(1.6,1.9,1.4,12),n=new A(e,this.hayMat);n.position.y=.7,n.castShadow=!0,t.add(n);const i=new Et(1,1.6,1.2,12),r=new A(i,this.hayMat);r.position.y=2,r.castShadow=!0,t.add(r);const a=new Ie(1,1.5,12),o=new A(a,this.hayMat);o.position.y=3.35,o.castShadow=!0,t.add(o);const c=new Et(.04,.05,4.8,6),h=new A(c,this.bambooTrunkMat);return h.position.y=2.4,t.add(h),t}createJatriChawni(t=1){const e=new It;e.name="jatri_chawni";const n=new st(5,.35,2.3),i=new A(n,this.concreteMat);i.position.set(0,.175,0),i.receiveShadow=!0,e.add(i);const r=new st(5.2,.14,.22),a=new A(r,this.brickMat);a.position.set(0,.07,-1.1),e.add(a);const o=new st(4.8,2.5,.18),c=new A(o,this.brickMat);c.position.set(0,1.45,1.02),c.castShadow=!0,e.add(c);const h=new jt(4.6,2.3),u=new A(h,this.culvertRailingMaterial);u.position.set(0,1.45,.92),e.add(u),[[-2.1,-.92],[2.1,-.92],[-2.1,.92],[2.1,.92]].forEach(([G,W])=>{const T=new Et(.08,.09,2.6,12),I=new A(T,this.culvertRailingMaterial);I.position.set(G,1.45,W),I.castShadow=!0,e.add(I);const X=new Et(.12,.12,.35,12),ut=new A(X,new $({color:1409085}));ut.position.set(G,.45,W),e.add(ut)});const l=new Et(2.4,2.4,5.2,24,1,!0,Math.PI*.2,Math.PI*.6);l.rotateZ(Math.PI/2);const f=new A(l,this.tinRoofMat);f.position.set(0,2.75,.05),f.castShadow=!0,e.add(f),[-1.8,0,1.8].forEach(G=>{const W=new st(.06,.06,2.1),T=new A(W,new $({color:3359061}));T.position.set(G,2.55,0),e.add(T)});const _=new y0(16772565,3.5,16);_.position.set(0,2.45,.25),e.add(_);const M=new Et(.14,.18,.28,8,1,!0),m=new A(M,new $({color:1976635,wireframe:!0}));m.position.set(0,2.48,.25),e.add(m);const p=new A(new se(.1,12,12),new pe({color:16772565}));p.position.set(0,2.48,.25),e.add(p);const w=document.createElement("canvas");w.width=1024,w.height=256;const g=w.getContext("2d");g.fillStyle="#15803d",g.fillRect(0,0,1024,256),g.strokeStyle="#f59e0b",g.lineWidth=14,g.strokeRect(10,10,1004,236),g.strokeStyle="#fde047",g.lineWidth=4,g.strokeRect(24,24,976,208);const v=(G,W)=>{g.fillStyle="#fde047",g.beginPath(),g.roundRect(G,W,76,44,8),g.fill(),g.fillStyle="#0284c7",g.fillRect(G+8,W+6,20,18),g.fillRect(G+34,W+6,20,18),g.fillRect(G+58,W+6,12,18),g.fillStyle="#18181b",g.beginPath(),g.arc(G+20,W+44,9,0,Math.PI*2),g.arc(G+56,W+44,9,0,Math.PI*2),g.fill()};v(42,105),v(906,105),g.fillStyle="#ffffff",g.font="900 86px sans-serif",g.textAlign="center",g.textBaseline="middle",g.shadowColor="rgba(0,0,0,0.9)",g.shadowBlur=12,g.fillText("BUS STOP",512,85),g.fillStyle="#fde047",g.font="bold 54px sans-serif",g.shadowColor="rgba(0,0,0,0.8)",g.shadowBlur=8,g.fillText("বাস স্টপ  |  যাত্রী ছাউনি",512,185),g.shadowBlur=0;const D=new le(w),C=new It;C.position.set(0,2.65,-1.02);const L=new st(4.24,.84,.07),B=new $({color:1332013,roughness:.5}),y=new A(L,B);C.add(y);const E=new $({map:D,roughness:.35,emissive:1409085,emissiveIntensity:.15}),P=new jt(4.18,.78);P.rotateY(Math.PI);const Z=new A(P,E);Z.position.set(0,0,-.038),C.add(Z);const at=new jt(4.18,.78),O=new A(at,E);O.position.set(0,0,.038),C.add(O),e.add(C);const z=new It,H=t>0?-2.25:2.25;z.position.set(H,0,-1.15);const it=new A(new Et(.18,.22,.3,12),this.concreteMat);it.position.set(0,.15,0),z.add(it);const nt=new $({color:3359061,metalness:.8,roughness:.2}),Y=new A(new Et(.045,.045,3.1,12),nt);Y.position.set(0,1.55,0),z.add(Y);const ot=document.createElement("canvas");ot.width=512,ot.height=512;const K=ot.getContext("2d");K.fillStyle="#0284c7",K.beginPath(),K.roundRect(16,16,480,480,48),K.fill(),K.strokeStyle="#facc15",K.lineWidth=20,K.stroke(),K.strokeStyle="#ffffff",K.lineWidth=4,K.beginPath(),K.roundRect(36,36,440,440,36),K.stroke(),K.fillStyle="#ffffff",K.beginPath(),K.roundRect(135,75,242,130,24),K.fill(),K.fillStyle="#0284c7",K.fillRect(155,95,60,50),K.fillRect(230,95,60,50),K.fillRect(305,95,52,50),K.fillStyle="#18181b",K.beginPath(),K.arc(190,205,22,0,Math.PI*2),K.arc(320,205,22,0,Math.PI*2),K.fill(),K.fillStyle="#ffffff",K.font="900 72px sans-serif",K.textAlign="center",K.textBaseline="middle",K.shadowColor="rgba(0,0,0,0.85)",K.shadowBlur=8,K.fillText("BUS STOP",256,310),K.fillStyle="#fde047",K.font="bold 56px sans-serif",K.fillText("বাস স্টপ",256,405),K.shadowBlur=0;const pt=new le(ot),j=new $({map:pt,roughness:.35,emissive:165063,emissiveIntensity:.12}),lt=new It;lt.position.set(0,2.7,0);const xt=new A(new st(.96,.96,.06),new $({color:223649,roughness:.4}));lt.add(xt);const Lt=new jt(.92,.92);Lt.rotateY(Math.PI);const yt=new A(Lt,j);yt.position.set(0,0,-.032),lt.add(yt);const Ot=new jt(.92,.92),Gt=new A(Ot,j);Gt.position.set(0,0,.032),lt.add(Gt),lt.rotation.y=t>0?.35:-.35,z.add(lt),e.add(z);const Pt=document.createElement("canvas");Pt.width=512,Pt.height=320;const St=Pt.getContext("2d");St.fillStyle="#f8fafc",St.fillRect(0,0,512,320),St.strokeStyle="#15803d",St.lineWidth=14,St.strokeRect(8,8,496,304),St.strokeStyle="#dc2626",St.lineWidth=4,St.strokeRect(22,22,468,276),St.fillStyle="#15803d",St.font="bold 30px sans-serif",St.textAlign="center",St.textBaseline="middle",St.fillText("বাংলাদেশ সড়ক পরিবহন (BRTC)",256,55),St.fillStyle="#dc2626",St.font="900 68px sans-serif",St.shadowColor="rgba(0,0,0,0.3)",St.shadowBlur=4,St.fillText("BUS STOP",256,140),St.fillStyle="#1e293b",St.font="bold 50px sans-serif",St.shadowBlur=0,St.fillText("বাস স্টপ",256,220),St.fillStyle="#64748b",St.font="bold 24px sans-serif",St.fillText("HIGHWAY PASSENGER SHELTER",256,275);const U=new le(Pt),ft=new $({map:U,roughness:.35,emissive:16777215,emissiveIntensity:.08}),tt=new A(new jt(1.2,.75),ft),mt=t>0?-2.12:2.12;tt.position.set(mt,1.85,0),tt.rotation.y=t>0?-Math.PI/2:Math.PI/2,e.add(tt);const Q=new It;Q.position.set(0,0,0);const Nt=new st(4.4,.12,.7),vt=new A(Nt,this.woodMat);vt.position.set(0,.65,.5),vt.castShadow=!0,Q.add(vt);const b=new st(4.4,.42,.1),S=new A(b,this.woodMat);S.position.set(0,1.12,.82),S.castShadow=!0,Q.add(S),[-1.9,0,1.9].forEach(G=>{const W=new st(.12,.35,.58),T=new A(W,this.concreteMat);T.position.set(G,.45,.5),Q.add(T);const I=new st(.08,.55,.08),X=new A(I,new $({color:3359061}));X.position.set(G,.95,.82),Q.add(X)}),e.add(Q);const V=new It;V.scale.set(1.35,1.35,1.35),V.position.set(0,.72,.48);const ht=new $({color:16106390,roughness:.6}),dt=new $({color:959977,roughness:.7}),rt=new $({color:1976635,roughness:.8}),Dt=new $({color:1579035,roughness:.5}),Mt=new $({color:14362487,roughness:.6}),At=new $({color:16436245,roughness:.7}),Ft=new $({color:16777215,roughness:.8}),wt=new $({color:986638,roughness:.4}),ct=new It;ct.position.set(-.26,0,0);const Jt=new A(new st(.36,.46,.24),dt);Jt.position.set(0,.25,0),Jt.rotation.y=.35,Jt.rotation.z=-.12,ct.add(Jt);const Ht=new A(new se(.12,14,14),ht);Ht.position.set(.04,.58,.02),Ht.rotation.y=.45,Ht.rotation.z=-.12,ct.add(Ht);const kt=new A(new se(.13,14,14),Dt);kt.scale.set(1.02,1.05,1.02),kt.position.set(.04,.61,.01),ct.add(kt);const Ut=new A(new st(.34,.16,.44),rt);Ut.position.set(0,-.02,-.15),ct.add(Ut),[-.1,.1].forEach(G=>{const W=new A(new Et(.05,.045,.38,8),rt);W.position.set(G,-.22,-.32),ct.add(W)});const Ct=new A(new Et(.045,.04,.34,8),dt);Ct.position.set(.18,.14,-.05),Ct.rotation.z=-Math.PI/4,Ct.rotation.x=-.18,ct.add(Ct),V.add(ct);const Bt=new It;Bt.position.set(.26,0,0);const Yt=new A(new st(.32,.42,.22),Mt);Yt.position.set(0,.23,0),Yt.rotation.y=-.32,Yt.rotation.z=.14,Bt.add(Yt);const re=new A(new st(.34,.36,.24),At);re.position.set(0,.24,.02),Bt.add(re);const Wt=new A(new se(.115,14,14),ht);Wt.position.set(-.06,.54,.02),Wt.rotation.y=-.38,Wt.rotation.z=.22,Bt.add(Wt);const gt=new A(new se(.125,14,14),wt);gt.scale.set(1.04,1.06,1.08),gt.position.set(-.06,.57,0),Bt.add(gt);const x=new A(new Et(.04,.02,.36,8),wt);x.position.set(-.04,.42,.16),x.rotation.x=-.35,Bt.add(x);const F=new A(new st(.3,.15,.42),Ft);F.position.set(0,-.02,-.15),Bt.add(F),[-.08,.08].forEach(G=>{const W=new A(new Et(.042,.038,.38,8),Ft);W.position.set(G,-.22,-.32),Bt.add(W)});const J=new A(new Et(.04,.035,.32,8),Mt);J.position.set(-.16,.14,-.05),J.rotation.z=Math.PI/4,J.rotation.x=-.18,Bt.add(J);const k=new It;k.position.set(.22,.22,-.2),k.rotation.x=-.25,k.rotation.z=-.15;const q=new Et(.016,.018,.38,8),et=new $({color:1409085,roughness:.8}),_t=new A(q,et);k.add(_t);const Zt=new jt(.12,.06),Xt=new $({color:1483594,roughness:.6,side:Re});[-1,1].forEach(G=>{const W=new A(Zt,Xt);W.position.set(G*.06,-.04,0),W.rotation.z=G*.55,k.add(W)});const qt=new Ie(.07,.09,5);qt.rotateX(Math.PI);const de=new A(qt,Xt);de.position.set(0,.18,0),k.add(de);const we=new $({color:14427686,roughness:.35,metalness:.1}),nn=new se(.09,14,14);nn.scale(1.15,1.35,1.15);const ke=new A(nn,we);ke.position.set(0,.26,0),k.add(ke);const ln=new _n(.08,.035,8,16);ln.rotateX(Math.PI/2);const Sn=new A(ln,we);Sn.position.set(0,.23,0),k.add(Sn),Bt.add(k),V.add(Bt);const sn=new A(new se(.065,12,12),ht);sn.scale.set(1.6,.95,1.2),sn.position.set(0,.1,-.06),V.add(sn);const Ze=new It;Ze.position.set(0,1.38,.05);const rn=new pe({color:16723285}),$n=new A(new se(.075,10,10),rn);$n.position.set(-.05,.04,0),Ze.add($n);const Dn=new A(new se(.075,10,10),rn);Dn.position.set(.05,.04,0),Ze.add(Dn);const Un=new Ie(.11,.14,12);Un.rotateZ(Math.PI);const R=new A(Un,rn);return R.position.set(0,-.04,0),Ze.add(R),V.add(Ze),e.add(V),this.animatedAnimals.push({type:"couple",mesh:V,heart:Ze,seed:Math.random()*10}),e}createCoconutTree(){const t=new It;t.name="coconut_tree";const e=new Cs([new N(0,0,0),new N(.4,3.5,.2),new N(.9,7.5,.5),new N(1.1,10.5,.7)]),n=new Yi(e,12,.24,8,!1),i=new A(n,this.palmTrunkMat);i.castShadow=!0,t.add(i);const r=new N(1.1,10.5,.7),a=10;for(let o=0;o<a;o++){const c=o*Math.PI*2/a,h=new jt(.8,3.4);h.translate(0,1.7,0);const u=new A(h,this.palmLeafMat);u.position.copy(r),u.rotation.y=c,u.rotation.x=.85,u.castShadow=!0,t.add(u)}for(let o=0;o<5;o++){const c=new se(.2,8,8),h=new A(c,this.palmLeafMat);h.position.set(r.x+(Math.random()-.5)*.4,r.y-.25,r.z+(Math.random()-.5)*.4),t.add(h)}return t}createBananaTree(){const t=new It;t.name="banana_tree";const e=new Et(.18,.28,2.8,8),n=new A(e,this.bambooTrunkMat);n.position.y=1.4,t.add(n);const i=6;for(let r=0;r<i;r++){const a=r*Math.PI*2/i,o=new jt(.75,2.4);o.translate(0,1.2,0);const c=new A(o,this.bananaLeafMat);c.position.set(0,2.7,0),c.rotation.y=a,c.rotation.x=.95,c.castShadow=!0,t.add(c)}return t}createBambooGrove(){const t=new It;t.name="bamboo_grove";const e=8;for(let n=0;n<e;n++){const i=5.5+Math.random()*3.5,r=new Et(.06,.08,i,6),a=new A(r,this.bambooTrunkMat);a.position.set((Math.random()-.5)*1.5,i*.5,(Math.random()-.5)*1.5),a.rotation.z=(Math.random()-.5)*.15,a.rotation.x=(Math.random()-.5)*.15,t.add(a);const o=new se(.8+Math.random()*.5,6,6),c=new A(o,this.palmLeafMat);c.position.set(a.position.x,i-.3,a.position.z),t.add(c)}return t}createElectricPole(){const t=new It;t.name="electric_pole";const e=new Et(.14,.18,8.5,8),n=new A(e,this.concreteMat);n.position.y=4.25,n.castShadow=!0,t.add(n);const i=new st(2.2,.12,.12),r=new A(i,this.concreteMat);return r.position.y=7.8,t.add(r),[-.9,0,.9].forEach(a=>{const o=new Et(.04,.05,.2,6),c=new A(o,this.tinRoofMat);c.position.set(a,7.95,0),t.add(c)}),t}createPond(t=14,e=24){const n=new It;n.name="village_pond";const i=new jt(t,e);i.rotateX(-Math.PI/2);const r=new A(i,this.waterMat);r.position.y=.05,n.add(r),this.mudPlinthMat;const a=3;for(let o=0;o<a;o++){const c=new It;c.position.set((Math.random()-.5)*(t*.6),.1,(Math.random()-.5)*(e*.6));const h=new se(.24,8,8);h.scale(1,.7,1.4);const u=new A(h,this.duckMat);c.add(u);const d=new se(.14,8,8),l=new A(d,this.duckMat);l.position.set(0,.22,-.22),c.add(l);const f=new Ie(.06,.16,6);f.rotateX(-Math.PI/2);const _=new A(f,this.beakMat);_.position.set(0,.2,-.34),c.add(_),n.add(c),this.animatedAnimals.push({type:"duck",mesh:c,startX:c.position.x,startZ:c.position.z,seed:Math.random()*10})}return n}createBambooFence(t=20){const e=new It;e.name="bamboo_fence",[.3,.65,1].forEach(i=>{const r=new Et(.04,.04,t,6);r.rotateX(Math.PI/2);const a=new A(r,this.bambooTrunkMat);a.position.y=i,e.add(a)});const n=Math.floor(t/1.4);for(let i=0;i<=n;i++){const r=-t*.5+i*1.4,a=new Et(.05,.06,1.25,6),o=new A(a,this.woodMat);o.position.set(0,.62,r),o.castShadow=!0,e.add(o)}return e}update(t){this.animatedAnimals.forEach(e=>{if(e.type==="cow"){const n=Math.sin(t*1.8+e.seed)*.15;e.head.rotation.x=.2+Math.max(0,n);const i=Math.sin(t*4.2+e.seed);e.tail.rotation.z=Math.abs(i)>.4?i*.35:0}else if(e.type==="duck")e.mesh.position.y=.1+Math.sin(t*2.5+e.seed)*.03,e.mesh.position.x=e.startX+Math.sin(t*.8+e.seed)*.6,e.mesh.position.z=e.startZ+Math.cos(t*.8+e.seed)*.6,e.mesh.rotation.y=t*.8+e.seed;else if(e.type==="couple"){const n=Math.sin(t*2.2+e.seed)*.015;if(e.mesh.position.y=.72+n,e.heart){const i=1+Math.sin(t*3.8+e.seed)*.14;e.heart.scale.set(i,i,i)}}}),this.smokeEmitters.forEach(e=>{e.children.forEach((n,i)=>{n.position.y+=.015,n.position.x+=Math.sin(t*3+i)*.005,n.position.y>1.4&&(n.position.y=0)})})}}class U0{constructor(t){this.scene=t,this.segments=[],this.segmentLength=Vt.ROAD_SEGMENT_LENGTH,this.segmentCount=Vt.ROAD_SEGMENT_COUNT,this.roadWidth=Vt.ROAD_WIDTH,this.props=new D0,this.roadMaterial=null,this.paddyFieldMaterial=null,this.dirtVergeMaterial=null,this.culvertRailingMaterial=null,this.initMaterials(),this.buildSegments()}initMaterials(){const t=document.createElement("canvas");t.width=1024,t.height=2048;const e=t.getContext("2d");e.fillStyle="#222329",e.fillRect(0,0,t.width,t.height);const n=e.getImageData(0,0,t.width,t.height),i=n.data;for(let u=0;u<i.length;u+=4){const d=(Math.random()-.5)*12;i[u]=Math.min(255,Math.max(0,i[u]+d)),i[u+1]=Math.min(255,Math.max(0,i[u+1]+d)),i[u+2]=Math.min(255,Math.max(0,i[u+2]+d))}e.putImageData(n,0,0);const r=[t.width*.23,t.width*.5,t.width*.77];e.fillStyle="rgba(16, 17, 22, 0.22)",r.forEach(u=>{e.fillRect(u-50,0,36,t.height),e.fillRect(u+15,0,36,t.height)}),e.strokeStyle="#ffffff",e.lineWidth=14,e.beginPath(),e.moveTo(t.width*.08,0),e.lineTo(t.width*.08,t.height),e.moveTo(t.width*.92,0),e.lineTo(t.width*.92,t.height),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=12,e.setLineDash([120,140]),e.beginPath(),e.moveTo(t.width*.36,0),e.lineTo(t.width*.36,t.height),e.moveTo(t.width*.64,0),e.lineTo(t.width*.64,t.height),e.stroke();const a=new le(t);a.wrapS=en,a.wrapT=en,a.repeat.set(1,1),a.anisotropy=8,this.roadMaterial=new $({map:a,roughness:.82,metalness:.12});const o=document.createElement("canvas");o.width=512,o.height=512;const c=o.getContext("2d");c.fillStyle="#2e7d32",c.fillRect(0,0,512,512),c.strokeStyle="#388e3c",c.lineWidth=8;for(let u=0;u<512;u+=24)c.beginPath(),c.moveTo(0,u),c.lineTo(512,u),c.stroke();c.strokeStyle="#6d4c41",c.lineWidth=14,c.strokeRect(0,0,512,512);const h=new le(o);h.wrapS=en,h.wrapT=en,h.repeat.set(4,8),this.paddyFieldMaterial=new $({map:h,roughness:.88,metalness:.05}),this.dirtVergeMaterial=new $({color:7032635,roughness:.95}),this.culvertRailingMaterial=new $({color:15724527,roughness:.7})}buildSegments(){for(let t=0;t<this.segmentCount;t++){const e=-t*this.segmentLength,n=this.createSegment(e,t);this.segments.push(n),this.scene.add(n.group)}}createSegment(t,e){const n=new It;n.position.z=t;const i=new jt(this.roadWidth,this.segmentLength);i.rotateX(-Math.PI/2);const r=new A(i,this.roadMaterial);r.receiveShadow=!0,n.add(r);const a=3.5;[-1,1].forEach(c=>{const h=new jt(a,this.segmentLength);h.rotateX(-Math.PI/2);const u=new A(h,this.dirtVergeMaterial);u.position.set((this.roadWidth*.5+a*.5)*c,-.01,0),u.receiveShadow=!0,n.add(u)});const o=60;return[-1,1].forEach(c=>{const h=new jt(o,this.segmentLength);h.rotateX(-Math.PI/2);const u=new A(h,this.paddyFieldMaterial),d=(this.roadWidth*.5+a+o*.5)*c;u.position.set(d,-.05,0),u.receiveShadow=!0,n.add(u)}),this.populateBangladeshiScenery(n,e),{group:n,z:t}}populateBangladeshiScenery(t,e){const n=this.props,i=n.createElectricPole();i.position.set(this.roadWidth*.5+2.4,0,0),t.add(i);const r=[new N(this.roadWidth*.5+2.4,7.8,-this.segmentLength*.5),new N(this.roadWidth*.5+2.4,7.1,0),new N(this.roadWidth*.5+2.4,7.8,this.segmentLength*.5)],a=new Cs(r),o=new Yi(a,8,.02,4,!1),c=new pe({color:2040865}),h=new A(o,c);t.add(h);const u=e%2===0?-1:1,d=e%3===0?"white":e%3===1?"brown":"black",l=n.createCow(d),f=(this.roadWidth*.5+2.8+Math.random()*1.5)*u,_=6+Math.random()*14;if(l.position.set(f,0,_),l.rotation.y=u>0?-Math.PI/2+(Math.random()-.5)*.6:Math.PI/2+(Math.random()-.5)*.6,t.add(l),e%2===1){const L=n.createCow("brown");L.scale.set(.75,.75,.75),L.position.set(f+(u>0?3:-3),0,_+3.5),L.rotation.y=l.rotation.y+.5,t.add(L)}if(e%2===0){const B=n.createVillageHouse(e%4===0),y=(this.roadWidth*.5+11.5)*-1;B.position.set(y,0,-10),B.rotation.y=Math.PI/2,t.add(B);const E=n.createHaystack();E.position.set(y-5.5,0,4),t.add(E);const P=n.createBambooFence(24);P.position.set((this.roadWidth*.5+5.5)*-1,0,-5),t.add(P)}if(e%3===1){const B=n.createTeaStall();B.position.set((this.roadWidth*.5+5.8)*1,0,12),B.rotation.y=-Math.PI/2,t.add(B);const y=n.createCoconutTree();y.position.set((this.roadWidth*.5+9)*1,0,16),t.add(y)}if(e%3===2){const B=n.createPond(14,22);B.position.set((this.roadWidth*.5+13)*-1,0,5),t.add(B);for(let y=0;y<3;y++){const E=n.createBananaTree();E.position.set((this.roadWidth*.5+5.6+Math.random()*1.5)*-1,0,-4+y*6),t.add(E)}}e%4===3&&[-this.roadWidth*.5-.4,this.roadWidth*.5+.4].forEach(L=>{const B=new st(.35,.75,14),y=new A(B,this.culvertRailingMaterial);y.position.set(L,.38,0),y.castShadow=!0,t.add(y),[-7,7].forEach(E=>{const P=new st(.45,.9,.45),Z=new A(P,this.culvertRailingMaterial);Z.position.set(L,.45,E),t.add(Z)})});const M=e%2===0?1:-1,m=n.createCoconutTree();m.position.set((this.roadWidth*.5+7.5+Math.random()*5)*M,0,-22),t.add(m);const p=n.createBambooGrove();p.position.set((this.roadWidth*.5+9+Math.random()*6)*-M,0,18),t.add(p);const w=n.createBananaTree();w.position.set((this.roadWidth*.5+5.8+Math.random()*2.5)*M,0,4),t.add(w);const g=e%2===0?1:-1,v=n.createJatriChawni(g),D=(this.roadWidth*.5+3.4)*g,C=e===0?-14:-18;v.position.set(D,0,C),v.rotation.y=g>0?Math.PI*.5+.32:-Math.PI*.5-.32,t.add(v)}update(t,e){this.props.update(e);const n=t+this.segmentLength;for(let i=0;i<this.segments.length;i++){const r=this.segments[i];if(r.group.position.z>n){let a=0;for(let o=0;o<this.segments.length;o++)this.segments[o].group.position.z<a&&(a=this.segments[o].group.position.z);r.group.position.z=a-this.segmentLength}}}reset(){for(let t=0;t<this.segments.length;t++)this.segments[t].group.position.z=-t*this.segmentLength}}class N0{constructor(t){this.scene=t,this.dirLight=null,this.hemiLight=null,this.skyDome=null,this.treeLines=[],this.birdsGroup=null,this.birds=[],this.initAtmosphere(),this.initLighting(),this.initDistantTreeLine(),this.initFlyingBirds()}initAtmosphere(){this.scene.fog=new zr(11722715,.0038),this.scene.background=new ie(11722715);const t=document.createElement("canvas");t.width=512,t.height=512;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,0,t.height);n.addColorStop(0,"#1565c0"),n.addColorStop(.35,"#42a5f5"),n.addColorStop(.7,"#80deea"),n.addColorStop(.9,"#fff9c4"),n.addColorStop(1,"#ffe082"),e.fillStyle=n,e.fillRect(0,0,t.width,t.height),e.fillStyle="rgba(255, 255, 255, 0.55)";const i=(h,u,d)=>{e.beginPath(),e.arc(h,u,d,0,Math.PI*2),e.arc(h+d*.7,u-d*.2,d*.8,0,Math.PI*2),e.arc(h-d*.7,u-d*.1,d*.7,0,Math.PI*2),e.arc(h+d*1.3,u+d*.1,d*.6,0,Math.PI*2),e.fill()};i(140,240,45),i(380,280,55),i(260,200,38);const r=e.createRadialGradient(256,380,15,256,380,120);r.addColorStop(0,"rgba(255, 255, 240, 1.0)"),r.addColorStop(.2,"rgba(255, 235, 140, 0.9)"),r.addColorStop(.6,"rgba(255, 200, 80, 0.35)"),r.addColorStop(1,"rgba(255, 180, 50, 0.0)"),e.fillStyle=r,e.beginPath(),e.arc(256,380,120,0,Math.PI*2),e.fill();const a=new le(t),o=new se(480,32,16),c=new pe({map:a,side:Fe});this.skyDome=new A(o,c),this.scene.add(this.skyDome)}initLighting(){this.hemiLight=new v0(16775654,3046706,.85),this.scene.add(this.hemiLight),this.dirLight=new E0(16774102,1.35),this.dirLight.position.set(40,55,-60),this.dirLight.castShadow=!0,this.dirLight.shadow.mapSize.width=2048,this.dirLight.shadow.mapSize.height=2048,this.dirLight.shadow.camera.near=10,this.dirLight.shadow.camera.far=170,this.dirLight.shadow.camera.left=-28,this.dirLight.shadow.camera.right=28,this.dirLight.shadow.camera.top=28,this.dirLight.shadow.camera.bottom=-28,this.dirLight.shadow.bias=-5e-4,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target)}initDistantTreeLine(){const t=new $({color:1793568,roughness:.9,flatShading:!0});[-1,1].forEach(e=>{const n=new It,i=28;for(let r=0;r<i;r++){const a=12+Math.random()*18,o=6+Math.random()*8,c=new Ie(o,a,6),h=new A(c,t),u=(55+Math.random()*30)*e,d=-r*18;h.position.set(u,a*.5-2,d),h.rotation.y=Math.random()*Math.PI,n.add(h)}this.scene.add(n),this.treeLines.push(n)})}initFlyingBirds(){this.birdsGroup=new It;const t=new pe({color:16777215,side:Re}),e=8;for(let n=0;n<e;n++){const i=new It,r=new jt(.8,.35);r.translate(-.4,0,0);const a=new A(r,t);i.add(a);const o=new jt(.8,.35);o.translate(.4,0,0);const c=new A(o,t);i.add(c),i.position.set(-25+Math.random()*50,18+Math.random()*12,-40-n*8),this.birdsGroup.add(i),this.birds.push({mesh:i,wingL:a,wingR:c,seed:Math.random()*10,speed:14+Math.random()*6})}this.scene.add(this.birdsGroup)}update(t,e){this.skyDome&&(this.skyDome.position.z=t-80),this.dirLight&&(this.dirLight.position.z=t-60,this.dirLight.target.position.z=t),this.treeLines.forEach(n=>{n.position.z=t}),this.birdsGroup&&(this.birdsGroup.position.z=t-30,this.birds.forEach(n=>{const i=Math.sin(e*8+n.seed)*.55;n.wingL.rotation.z=i,n.wingR.rotation.z=-i,n.mesh.position.x+=Math.sin(e*.4+n.seed)*.05}))}}class O0{constructor(t="sedan"){this.type=t,this.group=new It,this.group.name=`traffic_${t}`,this.speed=75,this.lane=0,this.active=!1,this.hasBeenOvertaken=!1,this.wheels=[],this.wheelRotation=0,this.box=new xn,this.collisionSize=new N(1.8,1.4,4.5),this.buildModel()}buildModel(){switch(this.type){case"cow_truck":this.buildCowLoadedTruck();break;case"truck":this.buildCommercialTruck();break;case"bus":this.buildDeshiBus();break;case"suv":this.buildSUV();break;case"sedan":default:this.buildSedan()}}getVehicleMaterials(t){return{body:new $({color:t,metalness:.5,roughness:.35}),darkTrim:new $({color:1974308,roughness:.7}),wood:new $({color:8736014,roughness:.9}),glass:new Zi({color:1119778,metalness:.9,roughness:.1,transparent:!0,opacity:.88}),chrome:new $({color:14671839,metalness:.9,roughness:.2}),headlight:new pe({color:16777215}),taillight:new $({color:13369344,emissive:13369344,emissiveIntensity:1.2}),tire:new $({color:1973792,metalness:.1,roughness:.85}),rim:new $({color:12131356,metalness:.5,roughness:.4}),cowFawn:new $({color:9262372,roughness:.7}),cowWhite:new $({color:16119280,roughness:.6}),cowBlack:new $({color:2236962,roughness:.7}),horn:new $({color:3621201,roughness:.4})}}buildCowLoadedTruck(){const t=[165063,1483594,14251782,14427686],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(2.35,2.9,6.4);const i=new st(2,.4,6.2),r=new A(i,n.darkTrim);r.position.set(0,.6,0),this.group.add(r);const a=new st(2.3,.4,.25),o=new A(a,n.darkTrim);o.position.set(0,.6,-3.15),this.group.add(o);const c=new st(1.8,.9,1.5),h=new A(c,n.body);h.position.set(0,1.25,-2.2),this.group.add(h);const u=new st(2.1,1.5,1.5),d=new A(u,n.body);d.position.set(0,1.8,-.7),this.group.add(d);const l=new jt(1.85,.7),f=new A(l,n.glass);f.position.set(0,1.95,-1.46),this.group.add(f),[-.7,.7].forEach(v=>{const D=new A(new st(.24,.2,.05),n.headlight);D.position.set(v,1.15,-3.18),this.group.add(D)});const _=new st(2.25,.12,3.6),M=new A(_,n.wood);M.position.set(0,1.05,1.5),this.group.add(M),[-1.12,1.12].forEach(v=>{const D=new st(.08,1.3,3.6),C=new A(D,n.wood);C.position.set(v,1.7,1.5),this.group.add(C)});const m=new st(2.25,1.2,.08),p=new A(m,n.wood);p.position.set(0,1.65,3.3),this.group.add(p),[-.85,.85].forEach(v=>{const D=new A(new st(.28,.16,.05),n.taillight);D.position.set(v,.75,3.32),this.group.add(D)}),[{x:-.45,z:.5,mat:n.cowWhite},{x:.45,z:1.5,mat:n.cowFawn},{x:-.35,z:2.4,mat:n.cowBlack}].forEach(v=>{const D=new It;D.position.set(v.x,2.2,v.z);const C=new st(.42,.45,.6),L=new A(C,v.mat);D.add(L);const B=new st(.3,.25,.25),y=new A(B,n.darkTrim);y.position.set(0,-.08,.38),D.add(y),[-.18,.18].forEach(E=>{const P=new Ie(.05,.28,6),Z=new A(P,n.horn);Z.position.set(E,.26,.05),Z.rotation.z=E>0?-.35:.35,D.add(Z)}),this.group.add(D)}),[{x:-1.05,z:-2.1},{x:1.05,z:-2.1},{x:-1.05,z:1.8},{x:1.05,z:1.8}].forEach(v=>{const D=this.createSimpleWheel(n,.5,.3);D.position.set(v.x,.5,v.z),this.group.add(D),this.wheels.push(D)})}buildCommercialTruck(){const t=this.getVehicleMaterials(14251782);this.collisionSize.set(2.35,2.9,6.4);const e=new st(2,.4,6.2),n=new A(e,t.darkTrim);n.position.set(0,.6,0),this.group.add(n);const i=new st(2.1,1.6,1.8),r=new A(i,t.body);r.position.set(0,1.7,-1.8),this.group.add(r);const a=new st(2.3,2.1,3.8),o=new A(a,t.wood);o.position.set(0,1.85,1.2),this.group.add(o),this.addStandardLights(t,.75,-2.75,.8,3.12,.8),this.addStandardWheels(t,1.05,.5,1.8,.5)}buildDeshiBus(){const t=this.getVehicleMaterials(1483594);this.collisionSize.set(2.4,3.2,10.5);const e=new st(2.35,2.5,10.2),n=new A(e,t.body);n.position.set(0,1.65,0),this.group.add(n);const i=new jt(2.15,1.2),r=new A(i,t.glass);r.position.set(0,1.95,-5.12),this.group.add(r),[-1.19,1.19].forEach(o=>{const c=new jt(9,.9),h=new A(c,t.glass);h.position.set(o,1.9,.2),h.rotation.y=o>0?Math.PI/2:-Math.PI/2,this.group.add(h)}),[-.85,.85].forEach(o=>{const c=new A(new st(.3,.16,.05),t.headlight);c.position.set(o,.75,-5.12),this.group.add(c);const h=new A(new st(.24,.35,.05),t.taillight);h.position.set(o,1.3,5.12),this.group.add(h)}),[{x:-1.05,z:-3.5},{x:1.05,z:-3.5},{x:-1.05,z:3.3},{x:1.05,z:3.3}].forEach(o=>{const c=this.createSimpleWheel(t,.48,.3);c.position.set(o.x,.48,o.z),this.group.add(c),this.wheels.push(c)})}buildSUV(){const t=[13920288,2040619,5530223,15790322],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.95,1.76,4.75);const i=new st(1.88,.4,4.65),r=new A(i,n.darkTrim);r.position.set(0,.42,0),this.group.add(r);const a=new st(1.84,.6,4.6),o=new A(a,n.body);o.position.set(0,.78,0),this.group.add(o);const c=new st(1.58,.65,2.9),h=new A(c,n.body);h.position.set(0,1.3,.2),this.group.add(h),this.addStandardLights(n,.68,-2.33,.75,2.33,.75),this.addStandardWheels(n,.9,.38,1.4,.38)}buildSedan(){const t=[2245768,1118483,11580860,14606046],e=t[Math.floor(Math.random()*t.length)],n=this.getVehicleMaterials(e);this.collisionSize.set(1.82,1.38,4.6);const i=new st(1.76,.32,4.5),r=new A(i,n.darkTrim);r.position.set(0,.32,0),this.group.add(r);const a=new st(1.72,.44,4.4),o=new A(a,n.body);o.position.set(0,.58,0),this.group.add(o);const c=new st(1.44,.46,2.2),h=new A(c,n.body);h.position.set(0,.92,-.05),this.group.add(h),this.addStandardLights(n,.62,-2.2,.58,2.21,.62),this.addStandardWheels(n,.84,.32,1.35,.32)}addStandardLights(t,e,n,i,r,a){[-e,e].forEach(o=>{const c=new st(.3,.1,.05),h=new A(c,t.headlight);h.position.set(o,i,n),this.group.add(h)}),[-e,e].forEach(o=>{const c=new st(.32,.12,.05),h=new A(c,t.taillight);h.position.set(o,a,r),this.group.add(h)})}addStandardWheels(t,e,n,i,r){[{x:-e,y:n,z:-i},{x:e,y:n,z:-i},{x:-e,y:n,z:i},{x:e,y:n,z:i}].forEach(o=>{const c=this.createSimpleWheel(t,r,.24);c.position.set(o.x,o.y,o.z),this.group.add(c),this.wheels.push(c)})}createSimpleWheel(t,e,n){const i=new It,r=new Et(e,e,n,18);r.rotateZ(Math.PI/2);const a=new A(r,t.tire);i.add(a);const o=new Et(e*.7,e*.7,n+.02,14);o.rotateZ(Math.PI/2);const c=new A(o,t.rim);return i.add(c),i}spawn(t,e,n){this.lane=t,this.speed=n,this.active=!0,this.hasBeenOvertaken=!1,this.isYielding=!1;const i=Vt.LANES[t];this.targetX=i,this.group.position.set(i,0,e),this.group.visible=!0,this.updateBoundingBox()}yieldLane(t){if(this.isYielding)return;const e=[];this.lane>0&&e.push(this.lane-1),this.lane<Vt.LANES.length-1&&e.push(this.lane+1);for(const n of e){const i=Vt.LANES[n];if(!t.some(a=>{if(a===this||!a.active)return!1;const o=Math.abs(a.group.position.z-this.group.position.z),c=Math.abs(a.group.position.x-i);return o<20&&c<2})){this.lane=n,this.targetX=i,this.isYielding=!0,this.speed=Math.min(130,this.speed+8);break}}}despawn(){this.active=!1,this.isYielding=!1,this.group.visible=!1,this.group.position.set(0,-100,0)}update(t,e){if(!this.active)return;const n=this.speed*1e3/3600;if(this.group.position.z-=n*e,this.targetX!==void 0){const r=this.targetX-this.group.position.x;Math.abs(r)>.04?this.group.position.x+=Math.sign(r)*Math.min(Math.abs(r),e*4.4):(this.group.position.x=this.targetX,this.isYielding=!1)}const i=n/.45*e;this.wheelRotation-=i,this.wheels.forEach(r=>{r.rotation.x=this.wheelRotation}),this.updateBoundingBox()}updateBoundingBox(){const t=this.group.position.clone();t.y+=this.collisionSize.y*.5,this.box.setFromCenterAndSize(t,this.collisionSize)}}class F0{constructor(t){this.scene=t,this.pool=[],this.activeVehicles=[],this.spawnTimer=0,this.nextSpawnInterval=1.4,this.initPool()}initPool(){const t=["cow_truck","truck","bus","sedan","suv"];for(let n=0;n<25;n++){const i=t[n%t.length],r=new O0(i);r.despawn(),this.pool.push(r),this.scene.add(r.group)}}getInactiveVehicle(t=null){if(t){const e=this.pool.find(n=>!n.active&&n.type===t);if(e)return e}return this.pool.find(e=>!e.active)||null}update(t,e,n,i,r){const a=t.group.position.z,o=t.group.position.x,c=Math.min(1,n/4500),h=Ci.lerp(1.3,.8,c),u=Ci.lerp(2.2,1.4,c);this.spawnTimer+=i,this.spawnTimer>=this.nextSpawnInterval&&(this.spawnTimer=0,this.nextSpawnInterval=Ci.lerp(h,u,Math.random()),this.trySpawnTraffic(a,c));for(let d=this.activeVehicles.length-1;d>=0;d--){const l=this.activeVehicles[d];if(l.update(e,i),l.group.position.z>a+Vt.TRAFFIC.DESPAWN_DISTANCE){l.despawn(),this.activeVehicles.splice(d,1);continue}if(!l.hasBeenOvertaken){const f=Math.abs(l.group.position.z-a),_=Math.abs(l.group.position.x-o);f<Vt.SCORING.NEAR_MISS_DIST_Z&&_<Vt.SCORING.NEAR_MISS_DIST_X&&_>.5&&e>l.speed+12?(l.hasBeenOvertaken=!0,r&&r(l)):a<l.group.position.z-4&&(l.hasBeenOvertaken=!0)}}}trySpawnTraffic(t,e){const n=t-Vt.TRAFFIC.SPAWN_DISTANCE,i=34,r=new Set;this.activeVehicles.forEach(_=>{Math.abs(_.group.position.z-n)<i&&r.add(_.lane)});const a=[0,1,2].filter(_=>!r.has(_));if(a.length===0||a.length===1&&r.size>=2)return;const o=a[Math.floor(Math.random()*a.length)];let c="cow_truck";const h=Math.random();o===0?c=h>.45?"cow_truck":"truck":o===1?c=h>.5?"bus":h>.25?"cow_truck":"suv":c=h>.45?"bus":"sedan";const u=this.getInactiveVehicle(c);if(!u)return;const d=Vt.TRAFFIC.SPEEDS[c]||[65,85],l=e*35,f=Ci.lerp(d[0],d[1],Math.random())+l;if(u.spawn(o,n,f),this.activeVehicles.push(u),e>.5&&Math.random()<.35&&a.length>=2){const _=a.filter(M=>M!==o);if(_.length>0){const M=_[Math.floor(Math.random()*_.length)],m=Math.random()>.5?"cow_truck":"bus",p=this.getInactiveVehicle(m);if(p){const w=n-(28+Math.random()*20),g=Vt.TRAFFIC.SPEEDS[m]||[65,80],v=Ci.lerp(g[0],g[1],Math.random())+l;p.spawn(M,w,v),this.activeVehicles.push(p)}}}}onPlayerHorn(t){const e=t.group.position.z,n=t.group.position.x;for(let i=0;i<this.activeVehicles.length;i++){const r=this.activeVehicles[i],a=e-r.group.position.z,o=Math.abs(r.group.position.x-n);if(a>4&&a<65&&o<2.4&&!r.isYielding){r.yieldLane(this.activeVehicles);break}}}checkCollision(t){for(let e=0;e<this.activeVehicles.length;e++){const n=this.activeVehicles[e];if(t.box.intersectsBox(n.box))return n}return null}reset(){this.activeVehicles.forEach(t=>t.despawn()),this.activeVehicles.length=0,this.spawnTimer=0}}class B0{constructor(t){this.scene=t,this.particles=[],this.poolSize=180,this.smokeMat=new pe({color:14540253,transparent:!0,opacity:.45}),this.sparkMat=new pe({color:16755234,transparent:!0,opacity:.95}),this.debrisMat=new $({color:2236968,roughness:.7}),this.initPool()}initPool(){for(let t=0;t<this.poolSize;t++){const e=new st(.14,.14,.14),n=new A(e,this.smokeMat);n.visible=!1,this.scene.add(n),this.particles.push({mesh:n,active:!1,vel:new N,rotVel:new N,life:0,maxLife:1,scaleSpeed:1,type:"smoke"})}}getFreeParticle(){return this.particles.find(t=>!t.active)||null}emitTireSmoke(t){const e=this.getFreeParticle();e&&(e.active=!0,e.type="smoke",e.mesh.material=this.smokeMat,e.mesh.visible=!0,e.mesh.scale.set(.6,.6,.6),e.mesh.position.copy(t),e.mesh.position.y=.2,e.vel.set((Math.random()-.5)*1.5,.8+Math.random()*.8,2+Math.random()*2),e.rotVel.set(Math.random()*2,Math.random()*2,Math.random()*2),e.life=0,e.maxLife=.45,e.scaleSpeed=3.5)}emitCrashEffect(t){for(let e=0;e<35;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="spark",n.mesh.material=this.sparkMat,n.mesh.visible=!0,n.mesh.scale.set(.12,.12,.12),n.mesh.position.copy(t);const i=Math.random()*Math.PI*2,r=6+Math.random()*14;n.vel.set(Math.cos(i)*r,3+Math.random()*10,Math.sin(i)*r),n.rotVel.set(Math.random()*8,Math.random()*8,Math.random()*8),n.life=0,n.maxLife=.7+Math.random()*.5,n.scaleSpeed=-.5}for(let e=0;e<20;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="debris",n.mesh.material=this.debrisMat,n.mesh.visible=!0,n.mesh.scale.set(.25+Math.random()*.3,.15,.3+Math.random()*.3),n.mesh.position.copy(t),n.vel.set((Math.random()-.5)*16,4+Math.random()*8,(Math.random()-.5)*16),n.rotVel.set(Math.random()*12,Math.random()*12,Math.random()*12),n.life=0,n.maxLife=1.2,n.scaleSpeed=0}for(let e=0;e<25;e++){const n=this.getFreeParticle();if(!n)break;n.active=!0,n.type="smoke",n.mesh.material=this.smokeMat,n.mesh.visible=!0,n.mesh.scale.set(.8,.8,.8),n.mesh.position.set(t.x+(Math.random()-.5)*1.5,t.y+.5,t.z+(Math.random()-.5)*1.5),n.vel.set((Math.random()-.5)*2,2.5+Math.random()*3,(Math.random()-.5)*2),n.rotVel.set(Math.random()*3,Math.random()*3,Math.random()*3),n.life=0,n.maxLife=1.4,n.scaleSpeed=4}}update(t){this.particles.forEach(e=>{if(e.active){if(e.life+=t,e.life>=e.maxLife){e.active=!1,e.mesh.visible=!1;return}if(e.mesh.position.addScaledVector(e.vel,t),e.mesh.rotation.x+=e.rotVel.x*t,e.mesh.rotation.y+=e.rotVel.y*t,e.mesh.rotation.z+=e.rotVel.z*t,(e.type==="spark"||e.type==="debris")&&(e.vel.y-=16*t,e.mesh.position.y<.1&&(e.mesh.position.y=.1,e.vel.y=-e.vel.y*.35,e.vel.x*=.65,e.vel.z*=.65)),e.scaleSpeed!==0){const n=Math.max(.01,e.mesh.scale.x+e.scaleSpeed*t);e.mesh.scale.set(n,n,n)}}})}reset(){this.particles.forEach(t=>{t.active=!1,t.mesh.visible=!1})}}class G0{constructor(t){this.scene=t,this.linesCount=60,this.group=new It;const e=new uc({color:10083839,transparent:!0,opacity:0});this.lineMat=e,this.lines=[];for(let n=0;n<this.linesCount;n++){const i=[new N(0,0,0),new N(0,0,6+Math.random()*8)],r=new De().setFromPoints(i),a=new zp(r,e);this.resetLinePos(a),this.group.add(a),this.lines.push(a)}this.scene.add(this.group)}resetLinePos(t){const e=Math.random()*Math.PI*2,n=3.5+Math.random()*6.5;t.position.set(Math.cos(e)*n,1.5+Math.sin(e)*(n*.6),-10-Math.random()*35)}update(t,e,n,i){const r=n?1:Math.max(0,(e-160)/100);if(this.lineMat.opacity=r*.65,this.lineMat.opacity<=.01){this.group.visible=!1;return}this.group.visible=!0;const a=t.group.position.z,o=t.group.position.x;this.group.position.set(o,0,a);const c=e/60*i*50;this.lines.forEach(h=>{h.position.z+=c,h.position.z>5&&this.resetLinePos(h)})}}class k0{constructor(t){this.soundManager=t,this.menuScreen=document.getElementById("menu-screen"),this.pauseScreen=document.getElementById("pause-screen"),this.gameOverScreen=document.getElementById("gameover-screen"),this.hudLayer=document.getElementById("hud-layer"),this.mobileControls=document.getElementById("mobile-controls"),this.scoreVal=document.getElementById("hud-score"),this.distVal=document.getElementById("hud-dist"),this.speedVal=document.getElementById("hud-speed"),this.nitroBar=document.getElementById("nitro-bar-fill"),this.menuBestScore=document.getElementById("menu-best-score"),this.nearMissBanner=document.getElementById("near-miss-banner"),this.nearMissCombo=document.getElementById("near-miss-combo"),this.tanDeBanner=document.getElementById("tan-de-banner"),this.tanDeTimeout=null,this.goScore=document.getElementById("go-score"),this.goDist=document.getElementById("go-dist"),this.goBest=document.getElementById("go-best"),this.goNearMiss=document.getElementById("go-near-miss"),this.goNewRecord=document.getElementById("go-new-record"),this.soundToggles=document.querySelectorAll(".sound-toggle-btn"),this.fullscreenBtn=document.getElementById("btn-fullscreen"),this.hornBtn=document.getElementById("btn-hud-horn"),this.bannerTimeout=null,this.onStart=null,this.onResume=null,this.onRestart=null,this.onMainMenu=null,this.onSteerLeft=null,this.onSteerRight=null,this.onAccelerate=null,this.onBrake=null,this.onNitro=null,this.onHorn=null,this.onSelectVehicle=null,this.initListeners(),this.updateSoundButtons()}initListeners(){const t=document.getElementById("btn-start");t&&t.addEventListener("click",()=>{this.soundManager.playClick(),this.onStart&&this.onStart()});const e=document.getElementById("btn-resume");e&&e.addEventListener("click",()=>{this.soundManager.playClick(),this.onResume&&this.onResume()});const n=document.getElementById("btn-hud-pause");n&&n.addEventListener("click",()=>{this.soundManager.playClick(),this.onPauseToggle&&this.onPauseToggle()}),this.hornBtn&&this.hornBtn.addEventListener("click",()=>{this.onHorn?this.onHorn():this.soundManager.playTruckHorn()});const i=document.getElementById("btn-restart"),r=document.getElementById("btn-gameover-restart");[i,r].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onRestart&&this.onRestart()})});const a=document.getElementById("btn-pause-menu"),o=document.getElementById("btn-gameover-menu");[a,o].forEach(l=>{l&&l.addEventListener("click",()=>{this.soundManager.playClick(),this.onMainMenu&&this.onMainMenu()})}),this.soundToggles.forEach(l=>{l.addEventListener("click",()=>{this.soundManager.toggleMute(),this.soundManager.playClick(),this.updateSoundButtons()})}),this.fullscreenBtn&&this.fullscreenBtn.addEventListener("click",()=>{this.toggleFullscreen()});const c=document.getElementById("modal-how-to-play"),h=document.getElementById("btn-how-to-play"),u=document.getElementById("btn-modal-close");h&&c&&h.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.add("active")}),u&&c&&u.addEventListener("click",()=>{this.soundManager.playClick(),c.classList.remove("active")}),c&&c.addEventListener("click",l=>{l.target===c&&c.classList.remove("active")});const d=document.querySelectorAll(".veh-btn");d.forEach(l=>{l.addEventListener("click",()=>{d.forEach(f=>f.classList.remove("active")),l.classList.add("active"),this.soundManager.playClick(),this.onSelectVehicle&&this.onSelectVehicle(l.dataset.veh)})}),document.querySelectorAll(".developer-link").forEach(l=>{l.addEventListener("click",f=>{f.stopPropagation()})}),this.setupMobileTouchButtons()}setSelectedVehicle(t){document.querySelectorAll(".veh-btn").forEach(n=>{n.dataset.veh===t?n.classList.add("active"):n.classList.remove("active")})}setupMobileTouchButtons(){const t=document.getElementById("btn-touch-left"),e=document.getElementById("btn-touch-right"),n=document.getElementById("btn-touch-brake"),i=document.getElementById("btn-touch-accel"),r=document.getElementById("btn-touch-nitro"),a=document.getElementById("btn-touch-horn");if(document.querySelectorAll(".touch-btn, .hud-icon-btn").forEach(o=>{o.addEventListener("contextmenu",c=>c.preventDefault())}),t&&t.addEventListener("pointerdown",o=>{o.preventDefault(),document.body.classList.add("touch-active"),this.onSteerLeft&&this.onSteerLeft()}),e&&e.addEventListener("pointerdown",o=>{o.preventDefault(),document.body.classList.add("touch-active"),this.onSteerRight&&this.onSteerRight()}),n){const o=c=>{document.body.classList.add("touch-active"),this.onBrake&&this.onBrake(c),c&&this.soundManager.playAirBrake()};n.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),n.addEventListener("pointerup",()=>o(!1)),n.addEventListener("pointerleave",()=>o(!1)),n.addEventListener("pointercancel",()=>o(!1))}if(i){const o=c=>{document.body.classList.add("touch-active"),this.onAccelerate&&this.onAccelerate(c)};i.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),i.addEventListener("pointerup",()=>o(!1)),i.addEventListener("pointerleave",()=>o(!1)),i.addEventListener("pointercancel",()=>o(!1))}if(r){const o=c=>{document.body.classList.add("touch-active"),this.onNitro&&this.onNitro(c)};r.addEventListener("pointerdown",c=>{c.preventDefault(),o(!0)}),r.addEventListener("pointerup",()=>o(!1)),r.addEventListener("pointerleave",()=>o(!1)),r.addEventListener("pointercancel",()=>o(!1))}a&&a.addEventListener("pointerdown",o=>{o.preventDefault(),this.onHorn?this.onHorn():this.soundManager.playTruckHorn()}),("ontouchstart"in window||navigator.maxTouchPoints>0)&&document.body.classList.add("touch-active"),window.addEventListener("touchstart",()=>document.body.classList.add("touch-active"),{once:!0,passive:!0}),window.addEventListener("pointerdown",o=>{o.pointerType==="touch"&&document.body.classList.add("touch-active")},{once:!0,passive:!0})}showHornEffect(){this.hornBtn&&(this.hornBtn.classList.add("honking"),setTimeout(()=>this.hornBtn.classList.remove("honking"),300));const t=document.getElementById("btn-touch-horn");t&&(t.classList.add("honking"),setTimeout(()=>t.classList.remove("honking"),300))}showTanDeMama(){this.tanDeBanner&&(this.tanDeBanner.classList.add("active"),this.tanDeTimeout&&clearTimeout(this.tanDeTimeout),this.tanDeTimeout=setTimeout(()=>{this.tanDeBanner.classList.remove("active")},1100))}updateSoundButtons(){const t=this.soundManager.isMuted;this.soundToggles.forEach(e=>{e.innerHTML=t?"🔇":"🔊",e.title=t?"Unmute Sound":"Mute Sound"})}toggleFullscreen(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(t=>console.log(t))}setScreen(t,e=null){this.menuScreen.classList.add("hidden"),this.pauseScreen.classList.add("hidden"),this.gameOverScreen.classList.add("hidden"),this.hudLayer.classList.add("hidden"),this.mobileControls&&(t===ce.PLAYING?(this.mobileControls.classList.remove("hidden"),document.body.classList.add("game-playing")):(this.mobileControls.classList.add("hidden"),document.body.classList.remove("game-playing")));const n=document.getElementById("modal-how-to-play");switch(n&&n.classList.remove("active"),this.tanDeBanner&&this.tanDeBanner.classList.remove("active"),t){case ce.MENU:this.menuScreen.classList.remove("hidden"),e&&this.menuBestScore&&(this.menuBestScore.innerText=e.bestScore.toLocaleString());break;case ce.PLAYING:this.hudLayer.classList.remove("hidden");break;case ce.PAUSED:this.hudLayer.classList.remove("hidden"),this.pauseScreen.classList.remove("hidden");break;case ce.GAMEOVER:this.gameOverScreen.classList.remove("hidden"),e&&(this.goScore.innerText=e.score.toLocaleString(),this.goDist.innerText=`${Math.floor(e.distanceMeters)} m`,this.goBest.innerText=e.bestScore.toLocaleString(),this.goNearMiss.innerText=e.nearMissCount,e.score>=e.bestScore&&e.score>0?this.goNewRecord.classList.remove("hidden"):this.goNewRecord.classList.add("hidden"));break}}updateHUD(t){if(this.scoreVal&&(this.scoreVal.innerText=t.score.toLocaleString()),this.distVal&&(this.distVal.innerText=`${(t.distanceMeters/1e3).toFixed(2)} km`),this.speedVal&&(this.speedVal.innerText=Math.round(t.speedKmh)),this.nitroBar){const e=t.nitro/100*100;this.nitroBar.style.width=`${e}%`,t.isBoosting?this.nitroBar.classList.add("boosting"):this.nitroBar.classList.remove("boosting")}}showNearMiss(t,e){this.nearMissBanner&&(this.nearMissCombo&&(this.nearMissCombo.innerText=`x${e}`),this.nearMissBanner.classList.add("active"),this.bannerTimeout&&clearTimeout(this.bannerTimeout),this.bannerTimeout=setTimeout(()=>{this.nearMissBanner.classList.remove("active")},1200))}}class z0{constructor(){this.container=document.getElementById("canvas-container"),this.gameState=new b0,this.inputManager=new A0,this.soundManager=new P0,this.uiManager=new k0(this.soundManager),this.scene=new kp,this.camera=new Be(Vt.CAMERA.BASE_FOV,window.innerWidth/window.innerHeight,.1,900),this.renderer=new hc({antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ca,this.renderer.toneMapping=Ia,this.renderer.toneMappingExposure=1.08,this.container.appendChild(this.renderer.domElement),this.environment=new N0(this.scene),this.roadManager=new U0(this.scene),this.vehicles={truck:new C0,rickshaw:new L0,cng:new I0},Object.values(this.vehicles).forEach(t=>{this.scene.add(t.group),t.group.visible=!1}),this.currentVehicleType=localStorage.getItem("og_race_vehicle")||"truck",this.vehicles[this.currentVehicleType]||(this.currentVehicleType="truck"),this.playerVehicle=this.vehicles[this.currentVehicleType],this.playerVehicle.group.visible=!0,this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(this.currentVehicleType),this.uiManager.setSelectedVehicle(this.currentVehicleType),this.trafficManager=new F0(this.scene),this.particleSystem=new B0(this.scene),this.speedLines=new G0(this.scene),this.cameraController=new R0(this.camera),this.cameraController.setVehicleType(this.currentVehicleType),this.clock=new T0,this.menuTime=0,this.wasBoosting=!1,this.wasBraking=!1,this.bindEvents(),this.initGame()}setVehicle(t){this.vehicles[t]&&(this.currentVehicleType=t,localStorage.setItem("og_race_vehicle",t),Object.entries(this.vehicles).forEach(([e,n])=>{n.group.visible=e===t}),this.playerVehicle=this.vehicles[t],this.playerTruck=this.playerVehicle,this.soundManager.setVehicleType(t),this.cameraController.setVehicleType(t),this.cameraController.init(this.playerVehicle))}initGame(){this.cameraController.init(this.playerVehicle),this.uiManager.setScreen(ce.MENU,this.gameState),this.animate=this.animate.bind(this),requestAnimationFrame(this.animate)}bindEvents(){window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.uiManager.onStart=()=>this.startGame(),this.uiManager.onResume=()=>this.resumeGame(),this.uiManager.onRestart=()=>this.restartGame(),this.uiManager.onMainMenu=()=>this.returnToMenu(),this.uiManager.onSelectVehicle=e=>this.setVehicle(e);const t=()=>{this.gameState.state===ce.PLAYING?(this.gameState.state=ce.PAUSED,this.soundManager.stopAll(),this.uiManager.setScreen(ce.PAUSED,this.gameState)):this.gameState.state===ce.PAUSED&&this.resumeGame()};this.uiManager.onPauseToggle=t,this.inputManager.onPauseToggle=t,this.inputManager.onRestart=()=>{(this.gameState.state===ce.GAMEOVER||this.gameState.state===ce.PAUSED)&&this.restartGame()},this.inputManager.onHorn=()=>this.triggerHorn(),this.uiManager.onHorn=()=>this.triggerHorn(),this.uiManager.onSteerLeft=()=>this.inputManager.triggerSteerLeft(),this.uiManager.onSteerRight=()=>this.inputManager.triggerSteerRight(),this.uiManager.onAccelerate=e=>this.inputManager.setAccelerate(e),this.uiManager.onBrake=e=>this.inputManager.setBrake(e),this.uiManager.onNitro=e=>this.inputManager.setNitro(e)}startGame(){this.gameState.startNewGame(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.cameraController.init(this.playerVehicle),this.wasBoosting=!1,this.wasBraking=!1,this.uiManager.setScreen(ce.PLAYING,this.gameState)}resumeGame(){this.gameState.state===ce.PAUSED&&(this.gameState.state=ce.PLAYING,this.uiManager.setScreen(ce.PLAYING,this.gameState))}restartGame(){this.startGame()}returnToMenu(){this.gameState.state=ce.MENU,this.soundManager.stopAll(),this.playerVehicle.reset(),this.roadManager.reset(),this.trafficManager.reset(),this.particleSystem.reset(),this.uiManager.setScreen(ce.MENU,this.gameState)}triggerHorn(){this.soundManager.playTruckHorn(),this.playerVehicle.flashHorn(),this.trafficManager.onPlayerHorn(this.playerVehicle),this.uiManager.showHornEffect()}onCrash(t){this.gameState.triggerGameOver(),this.soundManager.playCrash(),this.soundManager.playCrashVoice(),this.soundManager.stopAll(),this.cameraController.shake(1.3,.95);const e=this.playerVehicle.group.position.clone();e.z-=1.5,this.particleSystem.emitCrashEffect(e),this.playerVehicle.triggerCrash(),setTimeout(()=>{this.uiManager.setScreen(ce.GAMEOVER,this.gameState)},750)}animate(){requestAnimationFrame(this.animate);const t=this.clock.getDelta(),e=Math.min(t,.08),n=this.clock.getElapsedTime();if(this.gameState.state===ce.MENU)this.menuTime+=e,this.cameraController.orbitMenu(this.menuTime),this.playerVehicle.update(0,0,0,!1,!1,e),this.roadManager.props.update(n),this.environment.update(0,n);else if(this.gameState.state===ce.PLAYING){const i=this.gameState.isBoosting;i&&!this.wasBoosting&&(this.uiManager.showTanDeMama(),this.soundManager.shoutTanDeMama()),this.wasBoosting=i;const r=this.inputManager.keys.brake;r&&!this.wasBraking&&this.soundManager.playAirBrake(),this.wasBraking=r,this.gameState.update(e,this.inputManager);const a=this.gameState.speedKmh*1e3/3600;if(this.playerVehicle.group.position.z-=a*e,this.playerVehicle.group.position.x=this.gameState.currentLaneX,this.playerVehicle.update(this.gameState.speedKmh,this.gameState.currentLaneX,this.gameState.targetLaneX,r,this.gameState.isBoosting,e),r&&this.gameState.speedKmh>50){const c=this.playerVehicle.group.position.clone();c.x-=.85,c.z+=1.6;const h=this.playerVehicle.group.position.clone();h.x+=.85,h.z+=1.6,this.particleSystem.emitTireSmoke(c),this.particleSystem.emitTireSmoke(h)}this.roadManager.update(this.playerVehicle.group.position.z,n),this.environment.update(this.playerVehicle.group.position.z,n),this.trafficManager.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.distanceMeters,e,c=>{const h=this.gameState.addNearMiss();this.soundManager.playNearMiss(h.combo),this.uiManager.showNearMiss(h.bonus,h.combo)});const o=this.trafficManager.checkCollision(this.playerVehicle);o&&this.onCrash(o),this.speedLines.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.cameraController.update(this.playerVehicle,this.gameState.speedKmh,this.gameState.isBoosting,e),this.soundManager.update(this.gameState.speedKmh,r,this.gameState.isBoosting,e),this.uiManager.updateHUD(this.gameState)}else this.gameState.state===ce.GAMEOVER&&(this.cameraController.update(this.playerVehicle,0,!1,e),this.roadManager.props.update(n),this.environment.update(this.playerVehicle.group.position.z,n));this.particleSystem.update(e),this.renderer.render(this.scene,this.camera)}}window.addEventListener("DOMContentLoaded",()=>{new z0});
//# sourceMappingURL=index-CRJjPqIw.js.map
