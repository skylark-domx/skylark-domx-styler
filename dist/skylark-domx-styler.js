/**
 * skylark-domx-styler - The skylark style library for dom api extension.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,r){var s=r.define,t=r.require,a="function"==typeof s&&s.amd,n=!a&&"undefined"!=typeof exports;if(!a&&!s){var o={};s=r.define=function(e,r,s){"function"==typeof s?(o[e]={factory:s,deps:r.map(function(r){return function(e,r){if("."!==e[0])return e;var s=r.split("/"),t=e.split("/");s.pop();for(var a=0;a<t.length;a++)"."!=t[a]&&(".."==t[a]?s.pop():s.push(t[a]));return s.join("/")}(r,e)}),resolved:!1,exports:null},t(e)):o[e]={factory:null,resolved:!0,exports:s}},t=r.require=function(e){if(!o.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var s=o[e];if(!s.resolved){var a=[];s.deps.forEach(function(e){a.push(t(e))}),s.exports=s.factory.apply(r,a)||null,s.resolved=!0}return s.exports}}if(!s)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(e,r){e("skylark-domx-styler/styler",["skylark-langx/skylark","skylark-langx/langx"],function(e,r){Array.prototype.every;var s=Array.prototype.forEach,t=r.camelCase,a=r.dasherize;function n(e,r){return"number"!=typeof r||o[a(e)]?r:r+"px"}var o={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},i={};function l(e){return e in i?i[e]:i[e]=new RegExp("(^|\\s)"+e+"(\\s|$)")}function u(e,r){var s=e.className||"",t=s&&void 0!==s.baseVal;if(void 0===r)return t?s.baseVal:s;t?s.baseVal=r:e.className=r}var c={};function d(e){var r=e.ownerDocument.defaultView;return r&&r.opener||(r=window),r.getComputedStyle(e)}var f=function(){return f};return r.mixin(f,{autocssfix:!1,cssHooks:{},addClass:function(e,s){if(!s)return this;var t,a=u(e);t=r.isString(s)?s.split(/\s+/g):s;return t.forEach(function(e){var r=l(e);a.match(r)||(a+=(a?" ":"")+e)}),u(e,a),this},className:u,css:function(e,o,i){if(arguments.length<3){var l=d(e);if(r.isString(o))return e.style[t(o)]||l.getPropertyValue(a(o));if(r.isArrayLike(o)){var u={};return s.call(o,function(r){u[r]=e.style[t(r)]||l.getPropertyValue(a(r))}),u}}var c="";if("string"==typeof o)i||0===i?c=a(o)+":"+n(o,i):e.style.removeProperty(a(o));else for(key in o)void 0!==o[key]&&(o[key]||0===o[key]?c+=a(key)+":"+n(key,o[key])+";":e.style.removeProperty(a(key)));return e.style.cssText+=";"+c,this},disabled:function(e,r){if(arguments.length<2)return!!this.dom.disabled;return e.disabled=r,this},hasClass:function(e,r){var s=l(r);return e.className&&e.className.match(s)},hide:function(e){return f.css(e,"display","none"),this},isInvisible:function(e){return"none"==f.css(e,"display")||0==f.css(e,"opacity")},removeClass:function(e,s){if(s){var t=u(e);(r.isString(s)?s.split(/\s+/g):s).forEach(function(e){var r=l(e);t.match(r)&&(t=t.replace(r," "))}),u(e,t.trim())}else u(e,"");return this},show:function(e){f.css(e,"display",""),"none"==f.css(e,"display")&&f.css(e,"display",function(e){var r,s;c[e]||(r=document.createElement(e),document.body.appendChild(r),s=d(r).getPropertyValue("display"),r.parentNode.removeChild(r),"none"==s&&(s="block"),c[e]=s);return c[e]}(e.nodeName));return this},toggleClass:function(e,r,s){var t=this;return r.split(/\s+/g).forEach(function(r){void 0===s&&(s=!t.hasClass(e,r)),s?t.addClass(e,r):t.removeClass(e,r)}),t}}),e.attach("domx.styler",f)}),e("skylark-domx-styler/main",["./styler","skylark-domx-velm","skylark-domx-query"],function(e,r,s){r.delegate(["addClass","className","css","hasClass","hide","isInvisible","removeClass","show","toggleClass"],e);return["position","left","top","right","bottom","width","height","border","borderLeft","borderTop","borderRight","borderBottom","borderColor","display","overflow","margin","marginLeft","marginTop","marginRight","marginBottom","padding","paddingLeft","paddingTop","paddingRight","paddingBottom","color","background","backgroundColor","opacity","fontSize","fontWeight","textAlign","textDecoration","textTransform","cursor","zIndex"].forEach(function(e){var s=e;r.VisualElement.prototype[s]=function(r){return this.css(e,r),this}}),s.fn.style=s.wraps.wrapper_name_value(e.css,e),s.fn.css=s.wraps.wrapper_name_value(e.css,e),s.fn.hasClass=s.wraps.wrapper_some_chk(e.hasClass,e),s.fn.addClass=s.wraps.wrapper_every_act_firstArgFunc(e.addClass,e,e.className),s.fn.removeClass=s.wraps.wrapper_every_act_firstArgFunc(e.removeClass,e,e.className),s.fn.toggleClass=s.wraps.wrapper_every_act_firstArgFunc(e.toggleClass,e,e.className),s.fn.replaceClass=function(e,r){return this.removeClass(r),this.addClass(e),this},s.fn.replaceClass=function(e,r){return this.removeClass(r),this.addClass(e),this},e}),e("skylark-domx-styler",["skylark-domx-styler/main"],function(e){return e})}(s),!a){var i=t("skylark-langx/skylark");n?module.exports=i:r.skylarkjs=i}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-domx-styler.js.map
