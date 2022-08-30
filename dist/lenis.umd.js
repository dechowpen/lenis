!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("tiny-emitter"),require("virtual-scroll")):"function"==typeof define&&define.amd?define(["tiny-emitter","virtual-scroll"],e):(t||self).lenis=e(t.tinyEmitter,t.virtualScroll)}(this,function(t,e){function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=/*#__PURE__*/r(t),i=/*#__PURE__*/r(e);function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}/*#__PURE__*/
return function(t){var e,r;function o(e){var r,o,n,l,s=void 0===e?{}:e,c=s.lerp,p=void 0===c?.1:c,a=s.smooth,h=void 0===a||a,d=s.direction,f=void 0===d?"vertical":d,u=s.wrapper,v=void 0===u?window:u,w=s.content,g=void 0===w?document.body:w;(l=t.call(this)||this).onWindowResize=function(){l.wrapperWidth=window.innerWidth,l.wrapperHeight=window.innerHeight},l.onWrapperResize=function(t){var e=t[0];if(e){var r=e.contentRect;l.wrapperWidth=r.width,l.wrapperHeight=r.height}},l.onContentResize=function(t){var e=t[0];if(e){var r=e.contentRect;l.contentWidth=r.width,l.contentHeight=r.height}},l.onVirtualScroll=function(t){var e=t.deltaY,r=t.originalEvent;r.ctrlKey||(l.stopped?r.preventDefault():(l.smooth&&r.preventDefault(),l.targetScroll-=e,l.targetScroll=Math.max(0,Math.min(l.targetScroll,l.limit))))},l.onScroll=function(){l.isScrolling&&l.smooth||(l.targetScroll=l.scroll=l.wrapperNode[l.scrollProperty],l.velocity=0,l.notify())},l.wrapperNode=v,l.contentNode=g,l.lerp=p,l.smooth=h,l.direction=f,l.wrapperNode.addEventListener("scroll",l.onScroll);var y=(null==(r=navigator)||null==(o=r.userAgentData)?void 0:o.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";return l.virtualScroll=new i.default({el:l.wrapperNode,firefoxMultiplier:50,mouseMultiplier:y.indexOf("Win")>-1?1:.4,useKeyboard:!1,useTouch:!1,passive:!1}),l.virtualScroll.on(l.onVirtualScroll),l.wrapperNode===window?(l.wrapperNode.addEventListener("resize",l.onWindowResize),l.onWindowResize()):(l.wrapperHeight=l.wrapperNode.offsetHeight,l.wrapperWidth=l.wrapperNode.offsetWidth,l.wrapperObserver=new ResizeObserver(l.onWrapperResize),l.wrapperObserver.observe(l.wrapperNode)),l.contentHeight=l.contentNode.offsetHeight,l.contentWidth=l.contentNode.offsetWidth,l.contentObserver=new ResizeObserver(l.onContentResize),l.contentObserver.observe(l.contentNode),l.targetScroll=l.scroll=l.wrapperNode[l.scrollProperty],l.velocity=0,l}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,n(e,r);var l,s,c=o.prototype;return c.start=function(){this.stopped=!1},c.stop=function(){this.stopped=!0},c.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()},c.raf=function(){if(!this.stopped&&this.smooth){var t,e=this.scroll;this.scroll=(1-(t=this.lerp))*this.scroll+t*this.targetScroll,Math.round(this.scroll)===Math.round(this.targetScroll)&&(this.scroll=e=this.targetScroll),this.velocity=this.scroll-e,this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll}},c.setScroll=function(t){"horizontal"===this.direction?this.wrapperNode.scrollTo(t,0):this.wrapperNode.scrollTo(0,t)},c.notify=function(){this.emit("scroll",{scroll:this.scroll,limit:this.limit,velocity:this.velocity,direction:this.direction,progress:this.scroll/this.limit})},c.scrollTo=function(t,e){var r,o=void 0===e?{}:e,i=o.offset,n=void 0===i?0:i,l=o.immediate,s=void 0!==l&&l;if("number"==typeof t)r=t;else if("top"===t)r=0;else if("bottom"===t)r=this.limit;else{var c;if("string"==typeof t)c=document.querySelector(t);else{if(null==t||!t.nodeType)return;c=t}if(!t)return;var p=0;if(this.wrapperNode!==window){var a=this.wrapperNode.getBoundingClientRect();p="horizontal"===this.direction?a.left:a.top}var h=c.getBoundingClientRect();r=("horizontal"===this.direction?h.left:h.top)+this.scroll-p}this.targetScroll=r+=n,this.isScrolling=!0,this.smooth&&!s||(this.scroll=r,this.setScroll(this.scroll))},l=o,(s=[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}}])&&function(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(l.prototype,s),Object.defineProperty(l,"prototype",{writable:!1}),o}(o.default)});
//# sourceMappingURL=lenis.umd.js.map
