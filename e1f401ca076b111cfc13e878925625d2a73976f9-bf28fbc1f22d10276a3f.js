(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8+s/":function(t,e,n){"use strict";function r(t){return t&&"object"==typeof t&&"default"in t?t.default:t}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var i=n("q1tI"),o=r(i),a=r(n("Gytx"));function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function d(){s=t(u.map((function(t){return t.props}))),f.canUseDOM?e(s):n&&(s=n(s))}var f=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=s;return s=void 0,u=[],t};var c=i.prototype;return c.shouldComponentUpdate=function(t){return!a(t,this.props)},c.componentWillMount=function(){u.push(this),d()},c.componentDidUpdate=function(){d()},c.componentWillUnmount=function(){var t=u.indexOf(this);u.splice(t,1),d()},c.render=function(){return o.createElement(r,this.props)},i}(i.Component);return c(f,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),c(f,"canUseDOM",l),f}}},"9Dj+":function(t,e,n){"use strict";var r=n("q1tI"),i=n.n(r),o=n("qKvR"),a=function(){if("undefined"!=typeof window&&window.localStorage){var t=window.localStorage.getItem("color-theme");if("string"==typeof t)return t;if(window.matchMedia("(prefers-color-scheme: dark)").matches)return"dark"}return"dark"},c=i.a.createContext({}),l=function(t){var e=t.initialTheme,n=t.children,r=i.a.useState(a),l=r[0],s=r[1],u=function(t){var e=window.document.documentElement,n="dark"===t;e.classList.remove(n?"light":"dark"),e.classList.add(t),localStorage.setItem("color-theme",t)};return e&&u(e),i.a.useEffect((function(){u(l)}),[l]),Object(o.c)(c.Provider,{value:{theme:l,setTheme:s}},n)},s=n("Wbzz"),u=n("iYmT"),d=function(t){var e=t.to,n=t.children,r=t.title,i=void 0===r?"Link":r,a=t.selected,c=void 0!==a&&a,l=Object(o.b)("color:",c?"var(--color-text-accent)":"var(--color-text-secondary)",";");return Object(o.c)(s.Link,{to:e,title:i,css:f.nav_link},Object(o.c)("span",{css:Object(u.a)([f.nav_span,l])},n))},f={nav_link:{name:"gokeqi",styles:"box-shadow:none;"},nav_span:{name:"q908l3",styles:"font-weight:400;font-size:1rem;:hover{color:var(--color-text-accent);}"}},p=n("33Fu"),T=function(){var t=i.a.useContext(c),e=t.theme,n=t.setTheme;function r(){return"light"===e}return Object(o.c)(i.a.Fragment,null,Object(o.c)("button",{"aria-label":r()?"Activate Dark Mode":"Activate Light Mode",title:r()?"Activate Dark Mode":"Activate Light Mode",onClick:function(){void 0!==n&&n(r()?"dark":"light")},css:m.button},Object(o.c)(p.a,null)))},m={button:{name:"1j0tvml",styles:"background:transparent;background-color:transparent;background-image:none;border:none;outline:none;svg{width:1.5rem;height:1.5rem;color:var(--color-text-secondary);}"}},h=function(t){var e=t.activePage;return Object(o.c)("header",{css:E.header},Object(o.c)("nav",{"aria-label":"Main Navigation",css:E.header_nav},Object(o.c)(s.Link,{to:"/","aria-label":"Website logo, go back to homepage."}),Object(o.c)("span",{css:E.header_link},Object(o.c)(d,{to:"/",title:"Home",selected:"/"===e},"Home"),Object(o.c)(d,{to:"/projects/",title:"Projects",selected:"/projects/"===e},"Projects"),Object(o.c)(d,{to:"/portfolio/",title:"Portfolio",selected:"/portfolio/"===e},"Portfolio")),Object(o.c)(T,null)))},E={header:{name:"e4mbh2",styles:"center:true;margin:auto;max-width:1280px;width:100%;height:8rem;overflow:hidden;@media (max-width:640px){padding-left:1.25rem;padding-right:1.25rem;height:0rem;}@media (min-width:640px) and (max-width:768px){max-width:640px;padding-left:3rem;padding-right:3rem;}@media (min-width:768px){max-width:768px;padding-left:5rem;padding-right:5rem;}@media (min-width:1024px){max-width:1024px;}"},header_nav:{name:"sbjls5",styles:"display:flex;align-items:center;margin-top:auto;font-size:0.875rem;height:100%;justify-content:center;@media (min-width:768px){justify-content:flex-start;}"},header_link:{name:"17nncqs",styles:"display:none;align-items:center;flex-grow:1;@media (min-width:640px){display:flex;}a:nth-of-type(n + 2){margin-left:1.5rem;}"}},A=n("ok0K"),y=function(){var t=A.data.site.siteMetadata,e=t.author,n=t.social;return Object(o.c)("footer",{css:b.footer},Object(o.c)("div",{css:b.footer_container},Object(o.c)("div",null,Object(o.c)("nav",{css:b.footer_nav},Object(o.c)(d,{to:"/",title:"Home"},"Home"),Object(o.c)(d,{to:"/projects",title:"Projects"},"Projects"),Object(o.c)(d,{to:"/portfolio",title:"Portfolio"},"Portfolio")),Object(o.c)("div",{css:b.footer_info},Object(o.c)("span",{css:b.footer_copyright,"aria-label":"Copyright"},"© 2020 ",e.blogAuthor,". All Right Reserved."),Object(o.c)("div",{css:b.footer_sns},Object(o.c)("span",null,Object(o.c)("a",{href:"https://github.com/"+n.github,css:b.footer_icon,"aria-label":"Visit Github profile",title:"Visit Github profile",target:"_blank",rel:"noopener noreferrer"},Object(o.c)(p.b,null))),Object(o.c)("span",null,Object(o.c)("a",{href:"https://twitter.com/"+n.twitter,css:b.footer_icon,"aria-label":"Visit Twitter profile",title:"Visit Twitter profile",target:"_blank",rel:"noopener noreferrer"},Object(o.c)(p.d,null))),Object(o.c)("span",null,Object(o.c)("a",{href:"https://www.instagram.com/"+n.github,css:b.footer_icon,"aria-label":"Visit Instagram profile",title:"Visit Instagram profile",target:"_blank",rel:"noopener noreferrer"},Object(o.c)(p.c,null))))))))},b={footer:{name:"p7tvjs",styles:"display:block;position:relative;overflow:hidden;width:100%;height:12rem;"},footer_container:{name:"1xsed4d",styles:"display:block;padding-top:3rem;padding-bottom:3rem;margin:auto;height:100%;width:100%;@media (max-width:640px){padding-left:1.25rem;padding-right:1.25rem;}@media (min-width:640px) and (max-width:768px){max-width:640px;padding-left:3rem;padding-right:3rem;}@media (min-width:768px){max-width:768px;padding-left:5rem;padding-right:5rem;}@media (min-width:1024px){max-width:1024px;}"},footer_nav:{name:"138i2hc",styles:"display:none;font-size:0.875rem;justify-content:center;align-items:center;flex-direction:row;@media (max-width:640px){padding-left:1.25rem;padding-right:1.25rem;}@media (min-width:640px) and (max-width:768px){max-width:640px;padding-left:3rem;padding-right:3rem;}@media (min-width:768px){justify-content:flex-end;}@media (min-width:1024px){display:flex;}a:nth-of-type(n + 2){margin-left:1rem;}"},footer_info:{name:"d0gynk",styles:"display:flex;flex-direction:column-reverse;@media (min-width:768px){justify-content:space-between;flex-direction:row;margin-top:2rem;}"},footer_copyright:{name:"t612ro",styles:"letter-spacing:0.05em;font-size:0.75rem;align-self:center;@media (min-width:768px){align-self:flex-end;}"},footer_sns:{name:"16m3ufc",styles:"display:flex;align-items:center;flex-direction:row;justify-content:center;@media (min-width:768px){justify-content:flex-end;}span{margin-left:1rem;}"},footer_icon:{name:"3y1djn",styles:"svg{display:block;vertical-align:middle;width:2rem;height:2rem;color:var(--color-text-secondary);}"}},g=(e.a=function(t){var e=t.location,n=t.children;return Object(o.c)(l,null,Object(o.c)(h,{activePage:e.pathname}),Object(o.c)("main",{css:g.main},n),Object(o.c)(y,null))},{main:{name:"1qe2n2o",styles:"display:block;margin:auto;max-width:1280px;width:100%;overflow:hidden;@media (max-width:640px){padding-left:1.25rem;padding-right:1.25rem;margin-top:4rem;}@media (min-width:640px) and (max-width:768px){max-width:640px;padding-left:3rem;padding-right:3rem;}@media (min-width:768px){max-width:768px;padding-left:5rem;padding-right:5rem;}@media (min-width:1024px){max-width:1024px;}"}})},Gytx:function(t,e,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),t.exports=function(t,e,n,r){var i=n?n.call(r,t,e):void 0;if(void 0!==i)return!!i;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var o=Object.keys(t),a=Object.keys(e);if(o.length!==a.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(e),l=0;l<o.length;l++){var s=o[l];if(!c(s))return!1;var u=t[s],d=e[s];if(!1===(i=n?n.call(r,u,d,s):void 0)||void 0===i&&u!==d)return!1}return!0}},H8eV:function(t,e,n){"use strict";var r=n("cq81"),i=(n("q1tI"),n("TJpk")),o=n("qKvR");e.a=function(t){var e=t.title,n=t.description,a=r.data.site,c=e||a.siteMetadata.title,l=n||a.siteMetadata.description;return Object(o.c)(i.Helmet,{meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:a.siteMetadata.social.twitter},{name:"twitter:title",content:c},{name:"twitter:description",content:l}]})}},"HAE/":function(t,e,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},Lnxd:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n("bWfx"),n("ioFf"),n("V+eJ"),n("91GP");var r=n("q1tI"),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return(a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n};function l(t){return function(e){return r.createElement(s,a({attr:a({},t.attr)},e),function t(e){return e&&e.map((function(e,n){return r.createElement(e.tag,a({key:n},e.attr),t(e.child))}))}(t.child))}}function s(t){var e=function(e){var n,i=t.size||e.size||"1em";e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className);var o=t.attr,l=t.title,s=c(t,["attr","title"]);return r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,o,s,{className:n,style:a({color:t.color||e.color},e.style,t.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),t.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}},TJpk:function(t,e,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),e.__esModule=!0,e.Helmet=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=d(n("q1tI")),a=d(n("17x9")),c=d(n("8+s/")),l=d(n("bmMU")),s=n("v1p5"),u=n("hFT/");function d(t){return t&&t.__esModule?t:{default:t}}function f(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var m,h,E,A=(0,c.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)((function(){return null})),y=(m=A,E=h=function(t){function e(){return p(this,e),T(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!(0,l.default)(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.NOSCRIPT:return{innerHTML:e};case u.TAG_NAMES.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,i=t.arrayTypeChildren,o=t.newChildProps,a=t.nestedChildren;return r({},i,((e={})[n.type]=[].concat(i[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,a))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,i=t.child,o=t.newProps,a=t.newChildProps,c=t.nestedChildren;switch(i.type){case u.TAG_NAMES.TITLE:return r({},o,((e={})[i.type]=c,e.titleAttributes=r({},a),e));case u.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},a)});case u.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},a)})}return r({},o,((n={})[i.type]=r({},a),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=r({},e);return Object.keys(t).forEach((function(e){var i;n=r({},n,((i={})[e]=t[e],i))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return o.default.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=f(i,["children"]),c=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(t,o),t.type){case u.TAG_NAMES.LINK:case u.TAG_NAMES.META:case u.TAG_NAMES.NOSCRIPT:case u.TAG_NAMES.SCRIPT:case u.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:c,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=f(t,["children"]),i=r({},n);return e&&(i=this.mapChildrenToProps(e,i)),o.default.createElement(m,i)},i(e,null,[{key:"canUseDOM",set:function(t){m.canUseDOM=t}}]),e}(o.default.Component),h.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=m.peek,h.rewind=function(){var t=m.rewind();return t||(t=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},E);y.renderStatic=y.rewind,e.Helmet=y,e.default=y},bmMU:function(t,e,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty,a="undefined"!=typeof Element;t.exports=function(t,e){try{return function t(e,n){if(e===n)return!0;if(e&&n&&"object"==typeof e&&"object"==typeof n){var c,l,s,u=r(e),d=r(n);if(u&&d){if((l=e.length)!=n.length)return!1;for(c=l;0!=c--;)if(!t(e[c],n[c]))return!1;return!0}if(u!=d)return!1;var f=e instanceof Date,p=n instanceof Date;if(f!=p)return!1;if(f&&p)return e.getTime()==n.getTime();var T=e instanceof RegExp,m=n instanceof RegExp;if(T!=m)return!1;if(T&&m)return e.toString()==n.toString();var h=i(e);if((l=h.length)!==i(n).length)return!1;for(c=l;0!=c--;)if(!o.call(n,h[c]))return!1;if(a&&e instanceof Element&&n instanceof Element)return e===n;for(c=l;0!=c--;)if(!("_owner"===(s=h[c])&&e.$$typeof||t(e[s],n[s])))return!1;return!0}return e!=e&&n!=n}(t,e)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},cq81:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Azuma Blog","description":"インフラやiOSアプリ開発についての個人的な知見をためておく場所です。","social":{"twitter":"azumax_develop"}}}}}')},"dZ+Y":function(t,e,n){"use strict";var r=n("XKFU"),i=n("CkkT")(3);r(r.P+r.F*!n("LyE8")([].some,!0),"Array",{some:function(t){return i(this,t,arguments[1])}})},"hFT/":function(t,e,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),e.__esModule=!0;e.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=e.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},i=(e.VALID_TAG_NAMES=Object.keys(r).map((function(t){return r[t]})),e.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},e.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});e.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},e.HTML_TAG_MAP=Object.keys(i).reduce((function(t,e){return t[i[e]]=e,t}),{}),e.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],e.HELMET_ATTRIBUTE="data-react-helmet"},ok0K:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"author":{"blogAuthor":"Azuma Sato"},"social":{"twitter":"azumax_develop","github":"azuma317","instagram":"azuma317"}}}}}')},v1p5:function(t,e,n){(function(t){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),e.__esModule=!0,e.warn=e.requestAnimationFrame=e.reducePropsToState=e.mapStateOnServer=e.handleClientStateChange=e.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=l(n("q1tI")),a=l(n("MgzW")),c=n("hFT/");function l(t){return t&&t.__esModule?t:{default:t}}var s,u=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(t){var e=h(t,c.TAG_NAMES.TITLE),n=h(t,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&e)return n.replace(/%s/g,(function(){return e}));var r=h(t,c.HELMET_PROPS.DEFAULT_TITLE);return e||r||void 0},f=function(t){return h(t,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},p=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return i({},t,e)}),{})},T=function(t,e){return e.filter((function(t){return void 0!==t[c.TAG_NAMES.BASE]})).map((function(t){return t[c.TAG_NAMES.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},m=function(t,e,n){var i={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&g("Helmet: "+t+' should be of type "Array". Instead found type "'+r(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var r={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var l=o[a],s=l.toLowerCase();-1===e.indexOf(s)||n===c.TAG_PROPERTIES.REL&&"canonical"===t[n].toLowerCase()||s===c.TAG_PROPERTIES.REL&&"stylesheet"===t[s].toLowerCase()||(n=s),-1===e.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!t[n])return!1;var u=t[n].toLowerCase();return i[n]||(i[n]={}),r[n]||(r[n]={}),!i[n][u]&&(r[n][u]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(r),l=0;l<o.length;l++){var s=o[l],u=(0,a.default)({},i[s],r[s]);i[s]=u}return t}),[]).reverse()},h=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},E=(s=Date.now(),function(t){var e=Date.now();e-s>16?(s=e,t(e)):setTimeout((function(){E(t)}),0)}),A=function(t){return clearTimeout(t)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||E:t.requestAnimationFrame||E,b="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:t.cancelAnimationFrame||A,g=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},v=null,S=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,l=t.noscriptTags,s=t.onChangeClientState,u=t.scriptTags,d=t.styleTags,f=t.title,p=t.titleAttributes;_(c.TAG_NAMES.BODY,r),_(c.TAG_NAMES.HTML,i),O(f,p);var T={baseTag:P(c.TAG_NAMES.BASE,n),linkTags:P(c.TAG_NAMES.LINK,o),metaTags:P(c.TAG_NAMES.META,a),noscriptTags:P(c.TAG_NAMES.NOSCRIPT,l),scriptTags:P(c.TAG_NAMES.SCRIPT,u),styleTags:P(c.TAG_NAMES.STYLE,d)},m={},h={};Object.keys(T).forEach((function(t){var e=T[t],n=e.newTags,r=e.oldTags;n.length&&(m[t]=n),r.length&&(h[t]=T[t].oldTags)})),e&&e(),s(t,m,h)},w=function(t){return Array.isArray(t)?t.join(""):t},O=function(t,e){void 0!==t&&document.title!==t&&(document.title=w(t)),_(c.TAG_NAMES.TITLE,e)},_=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),l=0;l<a.length;l++){var s=a[l],u=e[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===i.indexOf(s)&&i.push(s);var d=o.indexOf(s);-1!==d&&o.splice(d,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,a.join(","))}},P=function(t,e){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(t+"["+c.HELMET_ATTRIBUTE+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=e.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var l=void 0===e[r]?"":e[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},R=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.REACT_TAG_MAP[n]||n]=t[n],e}),e)},x=function(t,e,n){switch(t){case c.TAG_NAMES.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[c.HELMET_ATTRIBUTE]=!0,i=M(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=R(n),o=w(e);return i?"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+i+">"+u(o,r)+"</"+t+">":"<"+t+" "+c.HELMET_ATTRIBUTE+'="true">'+u(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return M(e)},toString:function(){return R(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(e).forEach((function(t){var n=c.REACT_TAG_MAP[t]||t;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),o.default.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===c.TAG_PROPERTIES.INNER_HTML||t===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+u(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===c.SELF_CLOSING_TAGS.indexOf(t);return e+"<"+t+" "+c.HELMET_ATTRIBUTE+'="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}};e.convertReactPropstoHtmlAttributes=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[c.HTML_TAG_MAP[n]||n]=t[n],e}),e)},e.handleClientStateChange=function(t){v&&b(v),t.defer?v=y((function(){S(t,(function(){v=null}))})):(S(t),v=null)},e.mapStateOnServer=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,l=t.noscriptTags,s=t.scriptTags,u=t.styleTags,d=t.title,f=void 0===d?"":d,p=t.titleAttributes;return{base:x(c.TAG_NAMES.BASE,e,r),bodyAttributes:x(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:x(c.ATTRIBUTE_NAMES.HTML,i,r),link:x(c.TAG_NAMES.LINK,o,r),meta:x(c.TAG_NAMES.META,a,r),noscript:x(c.TAG_NAMES.NOSCRIPT,l,r),script:x(c.TAG_NAMES.SCRIPT,s,r),style:x(c.TAG_NAMES.STYLE,u,r),title:x(c.TAG_NAMES.TITLE,{title:f,titleAttributes:p},r)}},e.reducePropsToState=function(t){return{baseTag:T([c.TAG_PROPERTIES.HREF],t),bodyAttributes:p(c.ATTRIBUTE_NAMES.BODY,t),defer:h(t,c.HELMET_PROPS.DEFER),encode:h(t,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:p(c.ATTRIBUTE_NAMES.HTML,t),linkTags:m(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],t),metaTags:m(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],t),noscriptTags:m(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],t),onChangeClientState:f(t),scriptTags:m(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],t),styleTags:m(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],t),title:d(t),titleAttributes:p(c.ATTRIBUTE_NAMES.TITLE,t)}},e.requestAnimationFrame=y,e.warn=g}).call(this,n("yLpj"))},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}t.exports=n}}]);
//# sourceMappingURL=e1f401ca076b111cfc13e878925625d2a73976f9-bf28fbc1f22d10276a3f.js.map