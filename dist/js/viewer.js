/*! formstone v1.2.2 [viewer.js] 2016-09-06 | GPL-3.0 License | formstone.it */

!function(a){"function"==typeof define&&define.amd?define(["jquery","./core","./transition"],a):a(jQuery,Formstone)}(function(a,b){"use strict";function c(){e(),W.on("scroll",e)}function d(){V.iterate.call(Y,M),V.iterate.call(Z,O),V.iterate.call(Z,P)}function e(){X=W.scrollTop()+b.windowHeight,X<0&&(X=0),V.iterate.call(Z,P)}function f(){V.iterate.call(Y,I)}function g(){Y=a(S.base),Z=a(S.lazy),V.iterate.call(Z,O)}function h(a){var b,c="";console.log(a),a.thisClasses=[T.base,T.loading,a.customClass,a.theme],a.images=[],a.source=!1,a.gallery=!1,a.tapTimer=null,a.action=!1,a.loaded=!1,a.render=!1,a.zooming=!1,a.keyDownTime=1,a.$images=this.find("img").addClass(T.source),a.index=0,a.total=a.$images.length-1,a.$images.length>1&&(a.gallery=!0,a.thisClasses.push(T.gallery));for(var d=0;d<a.$images.length;d++)b=a.$images.eq(d),a.images.push(b.attr("src"));c+='<div class="'+T.wrapper+'">',c+='<div class="'+T.loading_icon+'"></div>',c+='<div class="'+T.viewport+'"></div>',c+="</div>",c+='<div class="'+T.controls+'">',c+='<button type="button" class="'+[T.control,T.control_previous].join(" ")+'">'+a.labels.previous+"</button>",c+='<button type="button" class="'+[T.control,T.zoom_out].join(" ")+'">'+a.labels.zoom_out+"</button>",c+='<button type="button" class="'+[T.control,T.zoom_in].join(" ")+'">'+a.labels.zoom_in+"</button>",c+='<button type="button" class="'+[T.control,T.control_next].join(" ")+'">'+a.labels.next+"</button>",c+="</div>",this.addClass(a.thisClasses.join(" ")).prepend(c),a.$wrapper=this.find(S.wrapper),a.$viewport=this.find(S.viewport),a.$controlBox=this.find(S.controls),a.$controls=this.find(S.control),g(),a.$controlBox.on(U.click,[S.control_previous,S.control_next].join(", "),a,L).on([U.touchStart,U.mouseDown].join(" "),S.zoom_out,a,G).on([U.touchStart,U.mouseDown].join(" "),S.zoom_in,a,F).on([U.touchEnd,U.mouseUp].join(" "),[S.zoom_out,S.zoom_in].join(", "),a,H),a.lazy?P(a):l(a,a.images[a.index],!0)}function i(a){a.$wrapper.remove(),a.$image.removeClass(T.source),this.removeClass(a.thisClasses.join(" ")).off(U.namespace),g()}function j(a,b){a.index=0,"string"==typeof b?(a.total=0,a.images=[b],a.gallery=!1,a.$el.removeClass(T.gallery)):(a.total=b.length-1,a.images=b,b.length>1&&(a.gallery=!0,a.$el.addClass(T.gallery)),b=a.images[a.index]),K(a,function(){l(a,b)})}function k(a){l(a,a.images[a.index])}function l(b,c,d){b.$container=a('<div class="'+T.container+'"><img></div>'),b.$image=b.$container.find("img"),b.$viewport.append(b.$container),b.$image.one(U.load,function(){n(b),b.loaded=!0,b.$container.fsTransition({property:"opacity"},function(){}),b.$el.removeClass(T.loading),b.$container.fsTouch({pan:!0,scale:!0}).on(U.scaleStart,b,B).on(U.scaleEnd,b,D).on(U.scale,b,C),b.$el.trigger(U.loaded)}).one(U.error,b,m).attr("src",c).addClass(T.image),(b.$image[0].complete||4===b.$image[0].readyState)&&b.$image.trigger(U.load),b.source=c}function m(a){var b=a.data;b.$el.trigger(U.error)}function n(a){o(a),p(a),a.containerTop=a.viewportHeight/2,a.containerLeft=a.viewportWidth/2,r(a),a.imageHeight=a.naturalHeight,a.imageWidth=a.naturalWidth,v(a),q(a),s(a),t(a),u(a);var b={containerTop:a.containerTop,containerLeft:a.containerLeft,imageHeight:a.imageHeight,imageWidth:a.imageWidth,imageTop:a.imageTop,imageLeft:a.imageLeft};A(a,b),a.render=!0}function o(a){var b=Q(a.$image);a.naturalHeight=b.naturalHeight,a.naturalWidth=b.naturalWidth,a.ratioHorizontal=a.naturalHeight/a.naturalWidth,a.ratioVertical=a.naturalWidth/a.naturalHeight,a.isWide=a.naturalWidth>a.naturalHeight}function p(a){a.viewportHeight=a.$viewport.outerHeight(),a.viewportWidth=a.$viewport.outerWidth()}function q(a){a.imageHeight<=a.viewportHeight?(a.containerMinTop=a.viewportHeight/2,a.containerMaxTop=a.viewportHeight/2):(a.containerMinTop=a.viewportHeight-a.imageHeight/2,a.containerMaxTop=a.imageHeight/2),a.imageWidth<=a.viewportWidth?(a.containerMinLeft=a.viewportWidth/2,a.containerMaxLeft=a.viewportWidth/2):(a.containerMinLeft=a.viewportWidth-a.imageWidth/2,a.containerMaxLeft=a.imageWidth/2)}function r(a){a.isWide?(a.imageMinWidth=a.viewportWidth,a.imageMinHeight=a.imageMinWidth*a.ratioHorizontal,a.imageMinHeight>a.viewportHeight&&(a.imageMinHeight=a.viewportHeight,a.imageMinWidth=a.imageMinHeight*a.ratioVertical)):(a.imageMinHeight=a.viewportHeight,a.imageMinWidth=a.imageMinHeight*a.ratioVertical,a.imageMinWidth>a.viewportWidth&&(a.imageMinWidth=a.viewportWidth,a.imageMinHeight=a.imageMinWidth*a.ratioHorizontal)),(a.imageMinWidth>a.naturalWidth||a.imageMinHeight>a.naturalHeight)&&(a.imageMinHeight=a.naturalHeight,a.imageMinWidth=a.naturalWidth),a.imageMaxHeight=a.naturalHeight,a.imageMaxWidth=a.naturalWidth}function s(a){a.imageTop=-(a.imageHeight/2),a.imageLeft=-(a.imageWidth/2)}function t(a){a.lastContainerTop=a.containerTop,a.lastContainerLeft=a.containerLeft,a.lastImageHeight=a.imageHeight,a.lastImageWidth=a.imageWidth,a.lastImageTop=a.imageTop,a.lastImageLeft=a.imageLeft}function u(a){a.renderContainerTop=a.lastContainerTop,a.renderContainerLeft=a.lastContainerLeft,a.renderImageTop=a.lastImageTop,a.renderImageLeft=a.lastImageLeft,a.renderImageHeight=a.lastImageHeight,a.renderImageWidth=a.lastImageWidth}function v(a){a.imageHeight=a.imageMinHeight,a.imageWidth=a.imageMinWidth}function w(a){a.imageHeight<a.imageMinHeight&&(a.imageHeight=a.imageMinHeight),a.imageHeight>a.imageMaxHeight&&(a.imageHeight=a.imageMaxHeight),a.imageWidth<a.imageMinWidth&&(a.imageWidth=a.imageMinWidth),a.imageWidth>a.imageMaxWidth&&(a.imageWidth=a.imageMaxWidth)}function x(a){a.containerTop<a.containerMinTop&&(a.containerTop=a.containerMinTop),a.containerTop>a.containerMaxTop&&(a.containerTop=a.containerMaxTop),a.containerLeft<a.containerMinLeft&&(a.containerLeft=a.containerMinLeft),a.containerLeft>a.containerMaxLeft&&(a.containerLeft=a.containerMaxLeft)}function y(a){null===a.tapTimer?a.tapTimer=V.startTimer(a.tapTimer,500,function(){z(a)}):(z(a),E(a))}function z(a){V.clearTimer(a.tapTimer),a.tapTimer=null}function A(a,c){if(b.transform){var d=c.imageWidth/a.naturalWidth,e=c.imageHeight/a.naturalHeight;a.$container.css(b.transform,"translate3d("+c.containerLeft+"px, "+c.containerTop+"px, 0)"),a.$image.css(b.transform,"translate3d(-50%, -50%, 0) scale("+d+","+e+")")}else a.$container.css({top:c.containerTop,left:c.containerLeft}),a.$image.css({height:c.imageHeight,width:c.imageWidth,top:c.imageTop,left:c.imageLeft})}function B(a){var b=a.data;y(b),t(b)}function C(a){var b=a.data;z(b),b.render=!1,b.zooming=!1;b.imageHeight>b.imageMinHeight+1;b.containerTop=b.lastContainerTop+a.deltaY,b.containerLeft=b.lastContainerLeft+a.deltaX,b.imageHeight=b.lastImageHeight*a.scale,b.imageWidth=b.lastImageWidth*a.scale,q(b),x(b),w(b),s(b);var c={containerTop:b.containerTop,containerLeft:b.containerLeft,imageHeight:b.imageHeight,imageWidth:b.imageWidth,imageTop:b.imageTop,imageLeft:b.imageLeft};A(b,c)}function D(a){var b=a.data;b.zooming||(t(b),u(b),b.render=!0)}function E(a){var b=a.imageHeight>a.imageMinHeight+1;a.zooming=!0,t(a),u(a),b?(a.imageHeight=a.imageMinHeight,a.imageWidth=a.imageMinWidth):(a.imageHeight=a.imageMaxHeight,a.imageWidth=a.imageMaxWidth),q(a),x(a),s(a),a.render=!0}function F(a){V.killEvent(a);var b=a.data;b.keyDownTime=1,b.action="zoom_in"}function G(a){V.killEvent(a);var b=a.data;b.keyDownTime=1,b.action="zoom_out"}function H(a){var b=a.data;b.action=!1}function I(a){if(a.render){if(a.action){a.keyDownTime+=a.zoomIncrement;var b=("zoom_out"===a.action?-1:1)*Math.round(a.imageWidth*a.keyDownTime-a.imageWidth);b>a.zoomDelta&&(b=a.zoomDelta),a.isWide?(a.imageWidth+=b,a.imageHeight=Math.round(a.imageWidth/a.ratioVertical)):(a.imageHeight+=b,a.imageWidth=Math.round(a.imageHeight/a.ratioHorizontal)),w(a),s(a),q(a),x(a)}a.renderContainerTop+=Math.round((a.containerTop-a.renderContainerTop)*a.zoomEnertia),a.renderContainerLeft+=Math.round((a.containerLeft-a.renderContainerLeft)*a.zoomEnertia),a.renderImageTop+=Math.round((a.imageTop-a.renderImageTop)*a.zoomEnertia),a.renderImageLeft+=Math.round((a.imageLeft-a.renderImageLeft)*a.zoomEnertia),a.renderImageHeight+=Math.round((a.imageHeight-a.renderImageHeight)*a.zoomEnertia),a.renderImageWidth+=Math.round((a.imageWidth-a.renderImageWidth)*a.zoomEnertia);var c={containerTop:a.renderContainerTop,containerLeft:a.renderContainerLeft,imageHeight:a.renderImageHeight,imageWidth:a.renderImageWidth,imageTop:a.renderImageTop,imageLeft:a.renderImageLeft};A(a,c)}}function J(a){K(a)}function K(a,b){z(a),a.render=!1,a.zooming=!1,N(a),a.$container.fsTransition({property:"opacity"},function(){a.$container.remove(),"function"==typeof b&&b.call(window,a)}),a.$el.addClass(T.loading)}function L(b){var c=a(b.currentTarget),d=b.data,e=d.index+(c.hasClass(T.control_next)?1:-1);e<0&&(e=0),e>d.total&&(e=d.total),e!==d.index&&(d.index=e,K(d,function(){l(d,d.images[d.index])}))}function M(a){p(a),q(a),r(a),s(a),q(a),x(a),w(a)}function N(a){a.$container&&a.$container.length&&a.$container.fsTouch("destroy").off(U.scaleStart,B).off(U.scaleEnd,D).off(U.scale,C)}function O(a){a.scrollTop=a.$el.offset().top}function P(a){!a.visible&&a.scrollTop<X+a.lazyEdge&&(a.visible=!0,k(a))}function Q(a){var b=a[0],c=new Image;return"undefined"!=typeof b.naturalHeight?{naturalHeight:b.naturalHeight,naturalWidth:b.naturalWidth}:"img"===b.tagName.toLowerCase()&&(c.src=b.src,{naturalHeight:c.height,naturalWidth:c.width})}var R=b.Plugin("viewer",{widget:!0,defaults:{customClass:"",lazy:!1,lazyEdge:100,labels:{count:"of",next:"Next",previous:"Previous",zoom_in:"Zoom In",zoom_out:"Zoom Out"},theme:"fs-light",zoomDelta:100,zoomEnertia:.2,zoomIncrement:.01},classes:["source","wrapper","viewport","container","image","gallery","loading_icon","controls","control","control_previous","control_next","zoom_in","zoom_out","loading"],events:{loaded:"loaded",ready:"ready"},methods:{_setup:c,_construct:h,_destruct:i,_resize:d,_raf:f,resize:M,load:j,unload:J}}),S=R.classes,T=S.raw,U=R.events,V=R.functions,W=(b.window,b.$window),X=0,Y=[],Z=[]});