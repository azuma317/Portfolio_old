(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var i=n("q1tI"),o=r(i),a=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function d(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var c=i.prototype;return c.shouldComponentUpdate=function(e){return!a(e,this.props)},c.componentWillMount=function(){u.push(this),d()},c.componentDidUpdate=function(){d()},c.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),d()},c.render=function(){return o.createElement(r,this.props)},i}(i.Component);return c(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(f,"canUseDOM",l),f}}},"9Dj+":function(e,t,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("qKvR"),a=function(){if("undefined"!=typeof window&&window.localStorage){var e=window.localStorage.getItem("color-theme");if("string"==typeof e)return e;if(window.matchMedia("(prefers-color-scheme: light)").matches)return"light"}return"light"},c=i.a.createContext({}),l=function(e){var t=e.initialTheme,n=e.children,r=i.a.useState(a),l=r[0],s=r[1],u=function(e){var t=window.document.documentElement,n="dark"===e;t.classList.remove(n?"light":"dark"),t.classList.add(e),localStorage.setItem("color-theme",e)};return t&&u(t),i.a.useEffect((function(){u(l)}),[l]),Object(o.c)(c.Provider,{value:{theme:l,setTheme:s}},n)},s=n("Wbzz"),u=n("iYmT"),d=function(e){var t=e.to,n=e.children,r=e.title,i=void 0===r?"Link":r,a=e.selected,c=void 0!==a&&a,l=Object(o.b)("color:",c?"var(--color-text-accent)":"var(--color-text-secondary)",";");return Object(o.c)(s.Link,{to:t,title:i,css:f.nav_link},Object(o.c)("span",{css:Object(u.a)([f.nav_span,l])},n))},f={nav_link:{name:"gokeqi",styles:"box-shadow:none;"},nav_span:{name:"q908l3",styles:"font-weight:400;font-size:1rem;:hover{color:var(--color-text-accent);}"}},p=function(e){var t=e.activePage;return Object(o.c)("header",{css:T.header},Object(o.c)("nav",{"aria-label":"Main Navigation",css:T.header_nav},Object(o.c)(s.Link,{to:"/","aria-label":"Website logo, go back to homepage."}),Object(o.c)("span",{css:T.header_link},Object(o.c)(d,{to:"/",title:"Home",selected:"/"===t},"Home"),Object(o.c)(d,{to:"/blog/",title:"Blog",selected:"/blog/"===t},"Blog"),Object(o.c)(d,{to:"/projects/",title:"Projects",selected:"/projects/"===t},"Projects"),Object(o.c)(d,{to:"/portfolio/",title:"Portfolio",selected:"/portfolio/"===t},"Portfolio"))))},T={header:{name:"e4mbh2",styles:"center:true;margin:auto;max-width:1280px;width:100%;height:8rem;overflow:hidden;@media (max-width:640px){padding-left:1.25rem;padding-right:1.25rem;height:0rem;}@media (min-width:640px) and (max-width:768px){max-width:640px;padding-left:3rem;padding-right:3rem;}@media (min-width:768px){max-width:768px;padding-left:5rem;padding-right:5rem;}@media (min-width:1024px){max-width:1024px;}"},header_nav:{name:"sbjls5",styles:"display:flex;align-items:center;margin-top:auto;font-size:0.875rem;height:100%;justify-content:center;@media (min-width:768px){justify-content:flex-start;}"},header_link:{name:"17nncqs",styles:"display:none;align-items:center;flex-grow:1;@media (min-width:640px){display:flex;}a:nth-of-type(n + 2){margin-left:1.5rem;}"}},m=n("33Fu"),h=function(e){var t=e.activePage,n=Object(s.useStaticQuery)("1096143047").site.siteMetadata,r=n.author,i=n.social;return Object(o.c)("footer",{css:E.footer},Object(o.c)("div",{css:E.footer_container},Object(o.c)("div",null,Object(o.c)("nav",{css:E.footer_nav},Object(o.c)(d,{to:"/",title:"Home",selected:"/"===t},"Home"),Object(o.c)(d,{to:"/blog/",title:"Blog",selected:"/blog/"===t},"Blog"),Object(o.c)(d,{to:"/projects/",title:"Projects",selected:"/projects/"===t},"Projects"),Object(o.c)(d,{to:"/portfolio/",title:"Portfolio",selected:"/portfolio/"===t},"Portfolio")),Object(o.c)("div",{css:E.footer_info},Object(o.c)("span",{css:E.footer_copyright,"aria-label":"Copyright"},"© 2020 ",r.blogAuthor,". All Right Reserved."),Object(o.c)("div",{css:E.footer_sns},Object(o.c)("span",null,Object(o.c)("a",{href:"https://github.com/"+i.github,css:E.footer_icon,"aria-label":"Visit Github profile",title:"Visit Github profile",target:"_blank",rel:"noopener noreferrer"},Object(o.c)(m.a,null))),Object(o.c)("span",null,Object(o.c)("a",{href:"https://twitter.com/"+i.twitter,css:E.footer_icon,"aria-label":"Visit Twitter profile",title:"Visit Twitter profile",target:"_blank",rel:"noopener noreferrer"},Object(o.c)(m.c,null))),Object(o.c)("span",null,Object(o.c)("a",{href:"https://www.instagram.com/"+i.github,css:E.footer_icon,"aria-label":"Visit Instagram profile",title:"Visit Instagram profile",target:"_blank",rel:"noopener noreferrer"},Object(o.c)(m.b,null))))))))},E={footer:{name:"p7tvjs",styles:"display:block;position:relative;overflow:hidden;width:100%;height:12rem;"},footer_container:{name:"1xsed4d",styles:"display:block;padding-top:3rem;padding-bottom:3rem;margin:auto;height:100%;width:100%;@media (max-width:640px){padding-left:1.25rem;padding-right:1.25rem;}@media (min-width:640px) and (max-width:768px){max-width:640px;padding-left:3rem;padding-right:3rem;}@media (min-width:768px){max-width:768px;padding-left:5rem;padding-right:5rem;}@media (min-width:1024px){max-width:1024px;}"},footer_nav:{name:"138i2hc",styles:"display:none;font-size:0.875rem;justify-content:center;align-items:center;flex-direction:row;@media (max-width:640px){padding-left:1.25rem;padding-right:1.25rem;}@media (min-width:640px) and (max-width:768px){max-width:640px;padding-left:3rem;padding-right:3rem;}@media (min-width:768px){justify-content:flex-end;}@media (min-width:1024px){display:flex;}a:nth-of-type(n + 2){margin-left:1rem;}"},footer_info:{name:"d0gynk",styles:"display:flex;flex-direction:column-reverse;@media (min-width:768px){justify-content:space-between;flex-direction:row;margin-top:2rem;}"},footer_copyright:{name:"t612ro",styles:"letter-spacing:0.05em;font-size:0.75rem;align-self:center;@media (min-width:768px){align-self:flex-end;}"},footer_sns:{name:"16m3ufc",styles:"display:flex;align-items:center;flex-direction:row;justify-content:center;@media (min-width:768px){justify-content:flex-end;}span{margin-left:1rem;}"},footer_icon:{name:"3y1djn",styles:"svg{display:block;vertical-align:middle;width:2rem;height:2rem;color:var(--color-text-secondary);}"}},A=(t.a=function(e){var t=e.location,n=e.children;return Object(o.c)(l,null,Object(o.c)(p,{activePage:t.pathname}),Object(o.c)("main",{css:A.main},n),Object(o.c)(h,{activePage:t.pathname}))},{main:{name:"1qe2n2o",styles:"display:block;margin:auto;max-width:1280px;width:100%;overflow:hidden;@media (max-width:640px){padding-left:1.25rem;padding-right:1.25rem;margin-top:4rem;}@media (min-width:640px) and (max-width:768px){max-width:640px;padding-left:3rem;padding-right:3rem;}@media (min-width:768px){max-width:768px;padding-left:5rem;padding-right:5rem;}@media (min-width:1024px){max-width:1024px;}"}})},Gytx:function(e,t){e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),a=Object.keys(t);if(o.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<o.length;l++){var s=o[l];if(!c(s))return!1;var u=e[s],d=t[s];if(!1===(i=n?n.call(r,u,d,s):void 0)||void 0===i&&u!==d)return!1}return!0}},H8eV:function(e,t,n){"use strict";n("q1tI");var r=n("TJpk"),i=n("Wbzz"),o=n("qKvR");t.a=function(e){var t=e.title,n=e.description,a=Object(i.useStaticQuery)("2841359383").site,c=t||a.siteMetadata.title,l=n||a.siteMetadata.description;return Object(o.c)(r.Helmet,{meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.social.twitter},{name:"twitter:title",content:c},{name:"twitter:description",content:l}]})}},Lnxd:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n};function l(e){return function(t){return r.createElement(s,a({attr:a({},e.attr)},t),function e(t){return t&&t.map((function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))}))}(e.child))}}function s(e){var t=function(t){var n,i=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,l=e.title,s=c(e,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:a({color:e.color||t.color},t.style,e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(e){return t(e)})):t(i)}},TJpk:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=d(n("q1tI")),a=d(n("17x9")),c=d(n("8+s/")),l=d(n("bmMU")),s=n("v1p5"),u=n("hFT/");function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var m,h,E,A=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(m=A,E=h=function(e){function t(){return p(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case u.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,i=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return r({},i,((t={})[n.type]=[].concat(i[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,i=e.child,o=e.newProps,a=e.newChildProps,c=e.nestedChildren;switch(i.type){case u.TAG_NAMES.TITLE:return r({},o,((t={})[i.type]=c,t.titleAttributes=r({},a),t));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},a)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},a)})}return r({},o,((n={})[i.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var i;n=r({},n,((i={})[t]=e[t],i))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=f(i,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,o),e.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),i=r({},n);return t&&(i=this.mapChildrenToProps(t,i)),o.default.createElement(m,i)},i(t,null,[{key:"canUseDOM",set:function(e){m.canUseDOM=e}}]),t}(o.default.Component),h.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=m.peek,h.rewind=function(){var e=m.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},bmMU:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,s,u=r(t),d=r(n);if(u&&d){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(u!=d)return!1;var f=t instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return t.getTime()==n.getTime();var T=t instanceof RegExp,m=n instanceof RegExp;if(T!=m)return!1;if(T&&m)return t.toString()==n.toString();var h=i(t);if((l=h.length)!==i(n).length)return!1;for(c=l;0!=c--;)if(!o.call(n,h[c]))return!1;if(a&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(s=h[c])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map((function(e){return n[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce((function(e,t){return e[r[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},v1p5:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=l(n("q1tI")),a=l(n("YVoz")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var s,u=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=h(e,c.TAG_NAMES.TITLE),n=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return i({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},m=function(e,t,n){var i={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var l=o[a],s=l.toLowerCase();-1===t.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),l=0;l<o.length;l++){var s=o[l],u=(0,a.default)({},i[s],r[s]);i[s]=u}return e}),[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},E=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout((function(){E(e)}),0)}),A=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:e.requestAnimationFrame||E,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},v=null,S=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,d=e.styleTags,f=e.title,p=e.titleAttributes;O(c.TAG_NAMES.BODY,r),O(c.TAG_NAMES.HTML,i),w(f,p);var T={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,o),metaTags:P(c.TAG_NAMES.META,a),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,l),scriptTags:P(c.TAG_NAMES.SCRIPT,u),styleTags:P(c.TAG_NAMES.STYLE,d)},m={},h={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=T[e].oldTags)})),t&&t(),s(e,m,h)},_=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),O(c.TAG_NAMES.TITLE,t)},O=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),l=0;l<a.length;l++){var s=a[l],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===i.indexOf(s)&&i.push(s);var d=o.indexOf(s);-1!==d&&o.splice(d,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},P=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},R=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},x=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,i=M(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=R(n),o=_(t);return i?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+i+">"+u(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(t)},toString:function(){return R(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),o.default.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+u(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){v&&b(v),e.defer?v=y((function(){S(e,(function(){v=null}))})):(S(e),v=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,l=e.noscriptTags,s=e.scriptTags,u=e.styleTags,d=e.title,f=void 0===d?"":d,p=e.titleAttributes;return{base:x(c.TAG_NAMES.BASE,t,r),bodyAttributes:x(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(c.ATTRIBUTE_NAMES.HTML,i,r),link:x(c.TAG_NAMES.LINK,o,r),meta:x(c.TAG_NAMES.META,a,r),noscript:x(c.TAG_NAMES.NOSCRIPT,l,r),script:x(c.TAG_NAMES.SCRIPT,s,r),style:x(c.TAG_NAMES.STYLE,u,r),title:x(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,e),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=g}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=78628b4c7fd2cbe50e04fdf3bd12f57cfd9896b0-0ee9093439eb44c55eac.js.map