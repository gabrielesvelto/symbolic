var __BUNDLE_START_TIME__=this.nativePerformanceNow?nativePerformanceNow():Date.now(),__DEV__=false,process=this.process||{};process.env=process.env||{};process.env.NODE_ENV=process.env.NODE_ENV||"production";
!(function(r){"use strict";r.__r=o,r.__d=function(r,i,n){if(null!=e[i])return;var o={dependencyMap:n,factory:r,hasError:!1,importedAll:t,importedDefault:t,isInitialized:!1,publicModule:{exports:{}}};e[i]=o},r.__c=n,r.__registerSegment=function(r,e){s[r]=e};var e=n(),t={},i={}.hasOwnProperty;function n(){return e=Object.create(null)}function o(r){var t=r,i=e[t];return i&&i.isInitialized?i.publicModule.exports:d(t,i)}function l(r){var i=r;if(e[i]&&e[i].importedDefault!==t)return e[i].importedDefault;var n=o(i),l=n&&n.__esModule?n.default:n;return e[i].importedDefault=l}function u(r){var n=r;if(e[n]&&e[n].importedAll!==t)return e[n].importedAll;var l,u=o(n);if(u&&u.__esModule)l=u;else{if(l={},u)for(var a in u)i.call(u,a)&&(l[a]=u[a]);l.default=u}return e[n].importedAll=l}o.importDefault=l,o.importAll=u;var a=!1;function d(e,t){if(!a&&r.ErrorUtils){var i;a=!0;try{i=v(e,t)}catch(e){r.ErrorUtils.reportFatalError(e)}return a=!1,i}return v(e,t)}var c=16,f=65535;function p(r){return{segmentId:r>>>c,localId:r&f}}o.unpackModuleId=p,o.packModuleId=function(r){return(r.segmentId<<c)+r.localId};var s=[];function v(t,i){if(!i&&s.length>0){var n=p(t),a=n.segmentId,d=n.localId,c=s[a];null!=c&&(c(d),i=e[t])}var f=r.nativeRequire;if(!i&&f){var v=p(t),h=v.segmentId;f(v.localId,h),i=e[t]}if(!i)throw Error('Requiring unknown module "'+t+'".');if(i.hasError)throw m(t,i.error);i.isInitialized=!0;var I=i,g=I.factory,y=I.dependencyMap;try{var _=i.publicModule;return _.id=t,g(r,o,l,u,_,_.exports,y),i.factory=void 0,i.dependencyMap=void 0,_.exports}catch(r){throw i.hasError=!0,i.error=r,i.isInitialized=!1,i.publicModule.exports=void 0,r}}function m(r,e){return Error('Requiring module "'+r+'", which threw an exception: '+e)}})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
!(function(n){var e=(function(){function n(n,e){return n}function e(n){var e={};return n.forEach(function(n,r){e[n]=!0}),e}function r(n,r,u){if(n.formatValueCalls++,n.formatValueCalls>200)return"[TOO BIG formatValueCalls "+n.formatValueCalls+" exceeded limit of 200]";var f=t(n,r);if(f)return f;var c=Object.keys(r),s=e(c);if(d(r)&&(c.indexOf('message')>=0||c.indexOf('description')>=0))return o(r);if(0===c.length){if(v(r)){var p=r.name?': '+r.name:'';return n.stylize('[Function'+p+']','special')}if(g(r))return n.stylize(RegExp.prototype.toString.call(r),'regexp');if(y(r))return n.stylize(Date.prototype.toString.call(r),'date');if(d(r))return o(r)}var h,b,m='',j=!1,O=['{','}'];(h=r,Array.isArray(h)&&(j=!0,O=['[',']']),v(r))&&(m=' [Function'+(r.name?': '+r.name:'')+']');return g(r)&&(m=' '+RegExp.prototype.toString.call(r)),y(r)&&(m=' '+Date.prototype.toUTCString.call(r)),d(r)&&(m=' '+o(r)),0!==c.length||j&&0!=r.length?u<0?g(r)?n.stylize(RegExp.prototype.toString.call(r),'regexp'):n.stylize('[Object]','special'):(n.seen.push(r),b=j?i(n,r,u,s,c):c.map(function(e){return a(n,r,u,s,e,j)}),n.seen.pop(),l(b,m,O)):O[0]+m+O[1]}function t(n,e){if(s(e))return n.stylize('undefined','undefined');if('string'==typeof e){var r="'"+JSON.stringify(e).replace(/^"|"$/g,'').replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return n.stylize(r,'string')}return c(e)?n.stylize(''+e,'number'):u(e)?n.stylize(''+e,'boolean'):f(e)?n.stylize('null','null'):void 0}function o(n){return'['+Error.prototype.toString.call(n)+']'}function i(n,e,r,t,o){for(var i=[],l=0,u=e.length;l<u;++l)b(e,String(l))?i.push(a(n,e,r,t,String(l),!0)):i.push('');return o.forEach(function(o){o.match(/^\d+$/)||i.push(a(n,e,r,t,o,!0))}),i}function a(n,e,t,o,i,a){var l,u,c;if((c=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?u=c.set?n.stylize('[Getter/Setter]','special'):n.stylize('[Getter]','special'):c.set&&(u=n.stylize('[Setter]','special')),b(o,i)||(l='['+i+']'),u||(n.seen.indexOf(c.value)<0?(u=f(t)?r(n,c.value,null):r(n,c.value,t-1)).indexOf('\n')>-1&&(u=a?u.split('\n').map(function(n){return'  '+n}).join('\n').substr(2):'\n'+u.split('\n').map(function(n){return'   '+n}).join('\n')):u=n.stylize('[Circular]','special')),s(l)){if(a&&i.match(/^\d+$/))return u;(l=JSON.stringify(''+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(l=l.substr(1,l.length-2),l=n.stylize(l,'name')):(l=l.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),l=n.stylize(l,'string'))}return l+': '+u}function l(n,e,r){return n.reduce(function(n,e){return 0,e.indexOf('\n')>=0&&0,n+e.replace(/\u001b\[\d\d?m/g,'').length+1},0)>60?r[0]+(''===e?'':e+'\n ')+' '+n.join(',\n  ')+' '+r[1]:r[0]+e+' '+n.join(', ')+' '+r[1]}function u(n){return'boolean'==typeof n}function f(n){return null===n}function c(n){return'number'==typeof n}function s(n){return void 0===n}function g(n){return p(n)&&'[object RegExp]'===h(n)}function p(n){return'object'==typeof n&&null!==n}function y(n){return p(n)&&'[object Date]'===h(n)}function d(n){return p(n)&&('[object Error]'===h(n)||n instanceof Error)}function v(n){return'function'==typeof n}function h(n){return Object.prototype.toString.call(n)}function b(n,e){return Object.prototype.hasOwnProperty.call(n,e)}return function(e,t){return r({seen:[],formatValueCalls:0,stylize:n},e,t.depth)}})(),r='(index)',t={trace:0,info:1,warn:2,error:3},o=[];o[t.trace]='debug',o[t.info]='log',o[t.warn]='warning',o[t.error]='error';var i=1;function a(r){return function(){var a;a=1===arguments.length&&'string'==typeof arguments[0]?arguments[0]:Array.prototype.map.call(arguments,function(n){return e(n,{depth:10})}).join(', ');var l=r;'Warning: '===a.slice(0,9)&&l>=t.error&&(l=t.warn),n.__inspectorLog&&n.__inspectorLog(o[l],a,[].slice.call(arguments),i),s.length&&(a=g('',a)),n.nativeLoggingHook(a,l)}}function l(n,e){return Array.apply(null,Array(e)).map(function(){return n})}var u="\u2502",f="\u2510",c="\u2518",s=[];function g(n,e){return s.join('')+n+' '+(e||'')}if(n.nativeLoggingHook){n.console;n.console={error:a(t.error),info:a(t.info),log:a(t.info),warn:a(t.warn),trace:a(t.trace),debug:a(t.trace),table:function(e){if(!Array.isArray(e)){var o=e;for(var i in e=[],o)if(o.hasOwnProperty(i)){var a=o[i];a[r]=i,e.push(a)}}if(0!==e.length){var u=Object.keys(e[0]).sort(),f=[],c=[];u.forEach(function(n,r){c[r]=n.length;for(var t=0;t<e.length;t++){var o=(e[t][n]||'?').toString();f[t]=f[t]||[],f[t][r]=o,c[r]=Math.max(c[r],o.length)}});for(var s=y(c.map(function(n){return l('-',n).join('')}),'-'),g=[y(u),s],p=0;p<e.length;p++)g.push(y(f[p]));n.nativeLoggingHook('\n'+g.join('\n'),t.info)}else n.nativeLoggingHook('',t.info);function y(n,e){var r=n.map(function(n,e){return n+l(' ',c[e]-n.length).join('')});return e=e||' ',r.join(e+'|'+e)}},group:function(e){n.nativeLoggingHook(g(f,e),t.info),s.push(u)},groupEnd:function(){s.pop(),n.nativeLoggingHook(g(c),t.info)},groupCollapsed:function(e){n.nativeLoggingHook(g(c,e),t.info),s.push(u)},assert:function(e,r){e||n.nativeLoggingHook('Assertion failed: '+r,t.error)}},Object.defineProperty(console,'_isPolyfilled',{value:!0,enumerable:!1})}else if(!n.console){var p=n.print||function(){};n.console={error:p,info:p,log:p,warn:p,trace:p,debug:p,table:p},Object.defineProperty(console,'_isPolyfilled',{value:!0,enumerable:!1})}})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
!(function(n){var r=0,t=function(n,r){throw n},l={setGlobalHandler:function(n){t=n},getGlobalHandler:function(){return t},reportError:function(n){t&&t(n,!1)},reportFatalError:function(n){t&&t(n,!0)},applyWithGuard:function(n,t,u,o,e){try{return r++,n.apply(t,u)}catch(n){l.reportError(n)}finally{r--}return null},applyWithGuardIfNeeded:function(n,r,t){return l.inGuard()?n.apply(r,t):(l.applyWithGuard(n,r,t),null)},inGuard:function(){return!!r},guard:function(n,r,t){var u;if('function'!=typeof n)return console.warn('A function must be passed to ErrorUtils.guard, got ',n),null;var o=null!=(u=null!=r?r:n.name)?u:'<generated guard>';return function(){for(var r=arguments.length,u=new Array(r),e=0;e<r;e++)u[e]=arguments[e];return l.applyWithGuard(n,null!=t?t:this,u,null,o)}}};n.ErrorUtils=l})('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window?window:this);
'undefined'!=typeof globalThis?globalThis:'undefined'!=typeof global?global:'undefined'!=typeof window&&window,(function(){'use strict';var e=Object.prototype.hasOwnProperty;'function'!=typeof Object.entries&&(Object.entries=function(n){if(null==n)throw new TypeError('Object.entries called on non-object');var o=[];for(var t in n)e.call(n,t)&&o.push([t,n[t]]);return o}),'function'!=typeof Object.values&&(Object.values=function(n){if(null==n)throw new TypeError('Object.values called on non-object');var o=[];for(var t in n)e.call(n,t)&&o.push(n[t]);return o})})();
__d(function(g,r,i,a,m,e,d){(0,r(d[0]).foo)()},0,[1]);
__d(function(g,r,i,a,m,e,d){Object.defineProperty(e,"__esModule",{value:!0}),e.foo=function(){throw new Error("lets throw!")}},1,[]);
__r(0);
//# sourceMappingURL=react-native-metro.js.map