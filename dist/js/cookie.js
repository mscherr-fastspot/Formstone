/*! formstone v1.4.4 [cookie.js] 2018-03-15 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,n){"use strict";function t(n,t,i){var r=!1,u=new Date;i.expires&&"number"===e.type(i.expires)&&(u.setTime(u.getTime()+i.expires),r=u.toGMTString());var l=i.domain?"; domain="+i.domain:"",s=r?"; expires="+r:"",f=r?"; max-age="+i.expires/1e3:"",a=i.path?"; path="+i.path:"",c=i.secure?"; secure":"";o.cookie=n+"="+t+s+f+l+a+c}function i(e){for(var n=e+"=",t=o.cookie.split(";"),i=0;i<t.length;i++){for(var r=t[i];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(n))return r.substring(n.length,r.length)}return null}function r(n,i){t(n,"",e.extend({},i,{expires:-6048e5}))}n.Plugin("cookie",{utilities:{_delegate:function(n,o,l){if("object"===e.type(n))u=e.extend(u,n);else if(l=e.extend({},u,l||{}),"undefined"!==e.type(n)){if("undefined"===e.type(o))return i(n);null===o?r(n,l):t(n,o,l)}return null}}});var u={domain:null,expires:6048e5,path:null,secure:null},o=n.document});