/*! formstone v1.4.16-1 [sticky.js] 2020-09-21 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mediaquery"],e):e(jQuery,Formstone)}(function(n,e){"use strict";function t(){f.iterate.call(p,o)}function s(){p=n(l.base),t()}function a(e){e.enabled=!0,e.$el.addClass(m.enabled),o(e)}function i(e){e.enabled=!1,e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""}).removeClass(m.enabled),e.$stickys.removeClass([m.passed,m.stuck].join(" "))}function o(e){if(e.enabled){if(c(e),e.$container.length){var t=e.$container.offset();e.min=t.top-e.margin,e.max=e.min+e.$container.outerHeight(!1)-e.height}else{var n=(e.stuck?e.$clone:e.$el).offset();e.min=n.top-e.margin,e.max=!1}d(e)}}function c(e){var t;t=e.stuck?e.$clone:e.$el,e.margin=parseInt(t.css("margin-top"),10),e.$container.length?e.containerMargin=parseInt(e.$container.css("margin-top"),10):e.containerMargin=0,e.height=t.outerHeight(),e.width=t.outerWidth()}function d(e){if(e.enabled){var t=h+e.offset;if(t>=e.min){e.stuck=!0,e.$stickys.addClass(m.stuck),e.stuck||(e.$el.trigger(u.stuck),c(e));var n=e.offset,s="";e.max&&t>e.max?(e.passed||e.$el.trigger(u.passed),e.passed=!0,e.$stickys.addClass(m.passed),n="",s=0):(e.passed=!1,e.$stickys.removeClass(m.passed)),e.$el.css({height:e.height,width:e.width,top:n,bottom:s,marginBottom:0})}else e.stuck=!1,e.$stickys.removeClass(m.stuck).removeClass(m.passed),e.stuck&&e.$el.trigger(u.unstuck),e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""})}}var r=e.Plugin("sticky",{widget:!0,defaults:{maxWidth:1/0,minWidth:"0px",offset:0},classes:["enabled","sticky","stuck","clone","container","passed"],events:{passed:"passed",stuck:"stuck",unstuck:"unstuck"},methods:{_construct:function(e){e.enabled=!1,e.stuck=!1,e.passed=!0,e.$clone=e.$el.clone(),e.container=e.$el.data("sticky-container"),e.$container=n(e.container),e.$el.addClass(m.base),e.$clone.removeClass(m.element).addClass(m.clone),e.$container.addClass(m.container),e.$stickys=n().add(e.$el).add(e.$clone),e.$el.after(e.$clone);var t=n().add(e.$el.find("img")).add(e.$container.find("img"));t.length&&t.on(u.load,e,o),e.maxWidth=e.maxWidth===1/0?"100000px":e.maxWidth,e.mq="(min-width:"+e.minWidth+") and (max-width:"+e.maxWidth+")",n.fsMediaquery("bind",e.rawGuid,e.mq,{enter:function(){a.call(e.$el,e)},leave:function(){i.call(e.$el,e)}})},_postConstruct:function(e){s(),t()},_destruct:function(e){e.$clone.remove(),e.$container.removeClass(m.container),e.$el.css({height:"",width:"",top:"",bottom:"",marginBottom:""}).removeClass(m.base),s()},_resize:t,_raf:function(){(h=$.scrollTop())<0&&(h=0),h!==g&&(f.iterate.call(p,d),g=h)},disable:i,enable:a,reset:o,resize:o}}),l=(r.namespace,r.classes),m=l.raw,u=r.events,f=r.functions,$=(e.window,e.$window),h=0,g=0,p=[]});