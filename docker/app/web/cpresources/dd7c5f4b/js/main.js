!function(e){function n(n){for(var r,l,u=n[0],c=n[1],i=n[2],d=0,f=[];d<u.length;d++)l=u[d],t[l]&&f.push(t[l][0]),t[l]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(a&&a(n);f.length;)f.shift()();return o.push.apply(o,i||[]),s()}function s(){for(var e,n=0;n<o.length;n++){for(var s=o[n],r=!0,u=1;u<s.length;u++){var c=s[u];0!==t[c]&&(r=!1)}r&&(o.splice(n--,1),e=l(l.s=s[0]))}return e}var r={},t={main:0},o=[];function l(n){if(r[n])return r[n].exports;var s=r[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=e,l.c=r,l.d=function(e,n,s){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:s})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)l.d(s,r,function(n){return e[n]}.bind(null,r));return s},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var u=window.webpackJsonp=window.webpackJsonp||[],c=u.push.bind(u);u.push=n,u=u.slice();for(var i=0;i<u.length;i++)n(u[i]);var a=c;o.push([0,"vendor"]),s()}({"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,n,s){},"./resources/js/RelatedEntryTypesField.ts":
/*!************************************************!*\
  !*** ./resources/js/RelatedEntryTypesField.ts ***!
  \************************************************/
/*! exports provided: default */function(e,n,s){"use strict";s.r(n);var r=s(/*! ./components/ChannelGroup */"./resources/js/components/ChannelGroup.ts"),t=function(){return function(){var e=document.querySelector("[data-related-entry-types-channels]");e&&(this.channelGroup=new r.default(e))}}();n.default=t,new t},"./resources/js/components/Channel.ts":
/*!********************************************!*\
  !*** ./resources/js/components/Channel.ts ***!
  \********************************************/
/*! exports provided: default */function(e,n,s){"use strict";s.r(n);var r=function(){return function(e){this.checkbox=e,this.name=this.checkbox.value;var n=document.querySelector('label[for="'+this.checkbox.id+'"]');n&&(this.label=n.nodeValue),console.log(this)}}();n.default=r},"./resources/js/components/ChannelGroup.ts":
/*!*************************************************!*\
  !*** ./resources/js/components/ChannelGroup.ts ***!
  \*************************************************/
/*! exports provided: default */function(e,n,s){"use strict";s.r(n);var r=s(/*! ./Channel */"./resources/js/components/Channel.ts"),t=function(){function e(e){this.node=e;var n=e.querySelectorAll('input[type="checkbox"]');this.channels=Array.from(n).map(function(e){return new r.default(e)}),console.log(this)}return e.prototype.getChannels=function(){return[]},e}();n.default=t},"./resources/scss/field.scss":
/*!***********************************!*\
  !*** ./resources/scss/field.scss ***!
  \***********************************/
/*! no static exports found */function(e,n,s){var r=s(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js!./field.scss */"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss");"string"==typeof r&&(r=[[e.i,r,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};s(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(r,t);r.locals&&(e.exports=r.locals)},0:
/*!**********************************************************************************!*\
  !*** multi ./resources/js/RelatedEntryTypesField.ts ./resources/scss/field.scss ***!
  \**********************************************************************************/
/*! no static exports found */function(e,n,s){s(/*! /Users/abryrath/Union/Library/relatedentrytypes/resources/js/RelatedEntryTypesField.ts */"./resources/js/RelatedEntryTypesField.ts"),e.exports=s(/*! /Users/abryrath/Union/Library/relatedentrytypes/resources/scss/field.scss */"./resources/scss/field.scss")}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL1JlbGF0ZWRFbnRyeVR5cGVzRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ2hhbm5lbC50cyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9DaGFubmVsR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Njc3MvZmllbGQuc2NzcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiZXhlY3V0ZU1vZHVsZXMiLCJpIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIm1haW4iLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwianNvbnBBcnJheSIsIndpbmRvdyIsIm9sZEpzb25wRnVuY3Rpb24iLCJzbGljZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfY29tcG9uZW50c19DaGFubmVsR3JvdXBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIlJlbGF0ZWRFbnRyeVR5cGVzRmllbGQiLCJjaGFubmVsR3JvdXBDb250YWluZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGlzIiwiY2hhbm5lbEdyb3VwIiwiQ2hhbm5lbCIsIm5vZGUiLCJjaGVja2JveCIsImxhYmVsIiwiaWQiLCJub2RlVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiX0NoYW5uZWxfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIkNoYW5uZWxHcm91cCIsImNoZWNrYm94ZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hhbm5lbHMiLCJBcnJheSIsImZyb20iLCJtYXAiLCJnZXRDaGFubmVscyIsImNvbnRlbnQiLCJvcHRpb25zIiwiaG1yIiwidHJhbnNmb3JtIiwiaW5zZXJ0SW50byIsInVuZGVmaW5lZCIsImxvY2FscyJdLCJtYXBwaW5ncyI6ImFBQ0EsU0FBQUEsRUFBQUMsR0FRQSxJQVBBLElBTUFDLEVBQUFDLEVBTkFDLEVBQUFILEVBQUEsR0FDQUksRUFBQUosRUFBQSxHQUNBSyxFQUFBTCxFQUFBLEdBSUFNLEVBQUEsRUFBQUMsRUFBQSxHQUNRRCxFQUFBSCxFQUFBSyxPQUFvQkYsSUFDNUJKLEVBQUFDLEVBQUFHLEdBQ0FHLEVBQUFQLElBQ0FLLEVBQUFHLEtBQUFELEVBQUFQLEdBQUEsSUFFQU8sRUFBQVAsR0FBQSxFQUVBLElBQUFELEtBQUFHLEVBQ0FPLE9BQUFDLFVBQUFDLGVBQUFDLEtBQUFWLEVBQUFILEtBQ0FjLEVBQUFkLEdBQUFHLEVBQUFILElBS0EsSUFGQWUsS0FBQWhCLEdBRUFPLEVBQUFDLFFBQ0FELEVBQUFVLE9BQUFWLEdBT0EsT0FIQVcsRUFBQVIsS0FBQVMsTUFBQUQsRUFBQWIsR0FBQSxJQUdBZSxJQUVBLFNBQUFBLElBRUEsSUFEQSxJQUFBQyxFQUNBZixFQUFBLEVBQWlCQSxFQUFBWSxFQUFBVixPQUE0QkYsSUFBQSxDQUc3QyxJQUZBLElBQUFnQixFQUFBSixFQUFBWixHQUNBaUIsR0FBQSxFQUNBQyxFQUFBLEVBQWtCQSxFQUFBRixFQUFBZCxPQUEyQmdCLElBQUEsQ0FDN0MsSUFBQUMsRUFBQUgsRUFBQUUsR0FDQSxJQUFBZixFQUFBZ0IsS0FBQUYsR0FBQSxHQUVBQSxJQUNBTCxFQUFBUSxPQUFBcEIsSUFBQSxHQUNBZSxFQUFBTSxJQUFBQyxFQUFBTixFQUFBLEtBR0EsT0FBQUQsRUFJQSxJQUFBUSxFQUFBLEdBS0FwQixFQUFBLENBQ0FxQixLQUFBLEdBR0FaLEVBQUEsR0FHQSxTQUFBUyxFQUFBMUIsR0FHQSxHQUFBNEIsRUFBQTVCLEdBQ0EsT0FBQTRCLEVBQUE1QixHQUFBOEIsUUFHQSxJQUFBQyxFQUFBSCxFQUFBNUIsR0FBQSxDQUNBSyxFQUFBTCxFQUNBZ0MsR0FBQSxFQUNBRixRQUFBLElBVUEsT0FOQWhCLEVBQUFkLEdBQUFhLEtBQUFrQixFQUFBRCxRQUFBQyxJQUFBRCxRQUFBSixHQUdBSyxFQUFBQyxHQUFBLEVBR0FELEVBQUFELFFBS0FKLEVBQUFPLEVBQUFuQixFQUdBWSxFQUFBUSxFQUFBTixFQUdBRixFQUFBUyxFQUFBLFNBQUFMLEVBQUFNLEVBQUFDLEdBQ0FYLEVBQUFZLEVBQUFSLEVBQUFNLElBQ0ExQixPQUFBNkIsZUFBQVQsRUFBQU0sRUFBQSxDQUEwQ0ksWUFBQSxFQUFBQyxJQUFBSixLQUsxQ1gsRUFBQWdCLEVBQUEsU0FBQVosR0FDQSxvQkFBQWEsZUFBQUMsYUFDQWxDLE9BQUE2QixlQUFBVCxFQUFBYSxPQUFBQyxZQUFBLENBQXdEQyxNQUFBLFdBRXhEbkMsT0FBQTZCLGVBQUFULEVBQUEsY0FBaURlLE9BQUEsS0FRakRuQixFQUFBb0IsRUFBQSxTQUFBRCxFQUFBRSxHQUVBLEdBREEsRUFBQUEsSUFBQUYsRUFBQW5CLEVBQUFtQixJQUNBLEVBQUFFLEVBQUEsT0FBQUYsRUFDQSxLQUFBRSxHQUFBLGlCQUFBRixRQUFBRyxXQUFBLE9BQUFILEVBQ0EsSUFBQUksRUFBQXZDLE9BQUF3QyxPQUFBLE1BR0EsR0FGQXhCLEVBQUFnQixFQUFBTyxHQUNBdkMsT0FBQTZCLGVBQUFVLEVBQUEsV0FBeUNULFlBQUEsRUFBQUssVUFDekMsRUFBQUUsR0FBQSxpQkFBQUYsRUFBQSxRQUFBTSxLQUFBTixFQUFBbkIsRUFBQVMsRUFBQWMsRUFBQUUsRUFBQSxTQUFBQSxHQUFnSCxPQUFBTixFQUFBTSxJQUFxQkMsS0FBQSxLQUFBRCxJQUNySSxPQUFBRixHQUlBdkIsRUFBQTJCLEVBQUEsU0FBQXRCLEdBQ0EsSUFBQU0sRUFBQU4sS0FBQWlCLFdBQ0EsV0FBMkIsT0FBQWpCLEVBQUEsU0FDM0IsV0FBaUMsT0FBQUEsR0FFakMsT0FEQUwsRUFBQVMsRUFBQUUsRUFBQSxJQUFBQSxHQUNBQSxHQUlBWCxFQUFBWSxFQUFBLFNBQUFnQixFQUFBQyxHQUFzRCxPQUFBN0MsT0FBQUMsVUFBQUMsZUFBQUMsS0FBQXlDLEVBQUFDLElBR3REN0IsRUFBQThCLEVBQUEsR0FFQSxJQUFBQyxFQUFBQyxPQUFBLGFBQUFBLE9BQUEsaUJBQ0FDLEVBQUFGLEVBQUFoRCxLQUFBMkMsS0FBQUssR0FDQUEsRUFBQWhELEtBQUFYLEVBQ0EyRCxJQUFBRyxRQUNBLFFBQUF2RCxFQUFBLEVBQWdCQSxFQUFBb0QsRUFBQWxELE9BQXVCRixJQUFBUCxFQUFBMkQsRUFBQXBELElBQ3ZDLElBQUFVLEVBQUE0QyxFQUlBMUMsRUFBQVIsS0FBQSxjQUVBVTs7Ozs7Ozs7NkRDckpBTyxFQUFBZ0IsRUFBQW1CLEdBQUEsSUFBQUMsRUFBQXBDLGtDQUFBLDZDQUVBcUMsRUFBQSxXQVNBLE9BTkksV0FDSSxJQUFNQyxFQUF3Q0MsU0FBU0MsY0FBYyx1Q0FDakVGLElBQ0FHLEtBQUtDLGFBQWUsSUFBSU4sRUFBQSxRQUFhRSxLQU5qRCxlQVdBLElBQUlEOzs7OzZEQ1pKckMsRUFBQWdCLEVBQUFtQixHQUFBLElBQUFRLEVBQUEsV0FlQSxPQVRJLFNBQVlDLEdBQ1JILEtBQUtJLFNBQVdELEVBQ2hCSCxLQUFLL0IsS0FBTytCLEtBQUtJLFNBQVMxQixNQUMxQixJQUFNMkIsRUFBUVAsU0FBU0MsY0FBYyxjQUFjQyxLQUFLSSxTQUFTRSxHQUFFLE1BQy9ERCxJQUNBTCxLQUFLSyxNQUFRQSxFQUFNRSxXQUV2QkMsUUFBUUMsSUFBSVQsT0FicEI7Ozs7NkRDQUF6QyxFQUFBZ0IsRUFBQW1CLEdBQUEsSUFBQWdCLEVBQUFuRCxrQkFBQSx3Q0FFQW9ELEVBQUEsV0FJSSxTQUFBQSxFQUFZUixHQUNSSCxLQUFLRyxLQUFPQSxFQUNaLElBQU1TLEVBQTJDVCxFQUFLVSxpQkFBaUIsMEJBQ3ZFYixLQUFLYyxTQUFXQyxNQUFNQyxLQUFLSixHQUFZSyxJQUFJLFNBQUNiLEdBQStCLFdBQUlNLEVBQUEsUUFBUU4sS0FDdkZJLFFBQVFDLElBQUlULE1BTXBCLE9BSFdXLEVBQUFuRSxVQUFBMEUsWUFBUCxXQUNJLE1BQU8sSUFFZlAsRUFkQTs7Ozs4Q0NIQSxJQUFBUSxFQUFjNUQsMk1BQVEsNk1BRXRCLGlCQUFBNEQsTUFBQSxFQUE0Q3ZELEVBQUExQixFQUFTaUYsRUFBQSxNQU9yRCxJQUFBQyxFQUFBLENBQWVDLEtBQUEsRUFFZkMsZUFQQUEsRUFRQUMsZ0JBQUFDLEdBRWFqRSx5REFBUSwrQ0FBUkEsQ0FBMkQ0RCxFQUFBQyxHQUV4RUQsRUFBQU0sU0FBQTdELEVBQUFELFFBQUF3RCxFQUFBTSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzAsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgSUNoYW5uZWxHcm91cCBmcm9tICcuL2ludGVyZmFjZXMvSUNoYW5uZWxHcm91cCc7XG5pbXBvcnQgQ2hhbm5lbEdyb3VwIGZyb20gJy4vY29tcG9uZW50cy9DaGFubmVsR3JvdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWxhdGVkRW50cnlUeXBlc0ZpZWxkIHtcbiAgICBwdWJsaWMgY2hhbm5lbEdyb3VwOiBJQ2hhbm5lbEdyb3VwO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IGNoYW5uZWxHcm91cENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yZWxhdGVkLWVudHJ5LXR5cGVzLWNoYW5uZWxzXScpO1xuICAgICAgICBpZiAoY2hhbm5lbEdyb3VwQ29udGFpbmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5uZWxHcm91cCA9IG5ldyBDaGFubmVsR3JvdXAoY2hhbm5lbEdyb3VwQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cbn0gXG5cbm5ldyBSZWxhdGVkRW50cnlUeXBlc0ZpZWxkKCk7XG5cbi8vIGNvbnN0IGFqYXhPcHRzID0ge1xuLy8gICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuLy8gICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuLy8gICAgIH1cbi8vIH07XG5cbi8vIGNsYXNzIEVudHJ5VHlwZSB7XG4vLyAgICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgICAgIHRoaXMuZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZXMtdW5pb25jby1yZWxhdGVkZW50cnl0eXBlcy1maWVsZHMtRW50cnlUeXBlLXNvdXJjZXMtZmllbGQnKTtcbi8vICAgICAgICAgaWYgKHRoaXMuZmllbGRDb250YWluZXIpIHtcbi8vICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMgPSB0aGlzLmZpZWxkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWN0aW9uQ2hlY2tib3hlcyk7XG4vLyAgICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uQ2hlY2tib3hlcykge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVNvdXJjZXNDaGFuZ2UuYmluZCh0aGlzKSkpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdGhpcy5lbnRyeVR5cGVzU2VsZWN0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVudHJ5LXR5cGVzLXNlbGVjdC1hcmVhXScpO1xuLy8gICAgICAgICB0aGlzLmdldFNlbGVjdGVkU2VjdGlvbnMgPSB0aGlzLmdldFNlbGVjdGVkU2VjdGlvbnMuYmluZCh0aGlzKTtcbi8vICAgICB9XG5cbi8vICAgICBnZXRTZWxlY3RlZFNlY3Rpb25zKCkge1xuLy8gICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMsIGNoZWNrYm94ID0+IHtcbi8vICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hlY2tib3gpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrZWQgfHwgZmFsc2U7XG4vLyAgICAgICAgIH0pLm1hcChjaGVja2JveCA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3gudmFsdWU7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cblxuLy8gICAgIGdldFNlbGVjdGVkRW50cnlUeXBlcygpIHtcbi8vICAgICAgICAgY29uc3QgZW50cnlUeXBlc1NlY3Rpb24gPSB0aGlzLmVudHJ5VHlwZXNTZWxlY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuLy8gICAgICAgICBpZiAoZW50cnlUeXBlc1NlY3Rpb24pIHtcbi8vICAgICAgICAgICAgIGNvbnN0IGVudHJ5VHlwZUNoZWNrYm94ZXMgPSBlbnRyeVR5cGVzU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVudHJ5VHlwZUNoZWNrYm94ZXMpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbnRyeVR5cGVDaGVja2JveGVzLCBjaGVja2JveCA9PiB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrZWQ7XG4vLyAgICAgICAgICAgICB9KS5tYXAoY2hlY2tib3ggPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2JveC52YWx1ZTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgcmV0dXJuIG51bGw7XG4vLyAgICAgfVxuXG4vLyAgICAgaGFuZGxlU291cmNlc0NoYW5nZShlKSB7XG4vLyAgICAgICAgIGNvbnN0IHNlbGVjdGVkU2VjdGlvbnMgPSB0aGlzLmdldFNlbGVjdGVkU2VjdGlvbnMoKTtcbi8vICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbnRyeVR5cGVzID0gdGhpcy5nZXRTZWxlY3RlZEVudHJ5VHlwZXMoKTtcblxuLy8gICAgICAgICBpZiAoc2VsZWN0ZWRTZWN0aW9ucy5sZW5ndGggPCAxKSB7XG4vLyAgICAgICAgICAgICB0aGlzLmVudHJ5VHlwZXNTZWxlY3RBcmVhLmlubmVySFRNTCA9ICcnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIEFwaUNsaWVudC5nZXRUZW1wbGF0ZShzZWxlY3RlZFNlY3Rpb25zLCBzZWxlY3RlZEVudHJ5VHlwZXMpXG4vLyAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmVudHJ5VHlwZXNTZWxlY3RBcmVhLmlubmVySFRNTCA9IGRhdGE7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGNsYXNzIEFwaUNsaWVudCB7XG4vLyAgICAgc3RhdGljIGdldFRlbXBsYXRlKHNlY3Rpb25VaWRzLCBlbnRyeVR5cGVzKSB7XG4vLyAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICAgICAgICBsZXQgb3B0cyA9IHtcbi8vICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0Jyxcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICAgICAgICAgICAgXCJzZWN0aW9uVWlkc1wiOiBzZWN0aW9uVWlkcyxcbi8vICAgICAgICAgICAgICAgICAgICAgXCJlbnRyeVR5cGVzXCI6IGVudHJ5VHlwZXNcbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdHMpO1xuLy8gICAgICAgICAgICAgZmV0Y2goJy9hZG1pbi9yZWxhdGVkLWVudHJ5LXR5cGVzL3R5cGVzJywgb3B0cylcbi8vICAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHJlc3AudGV4dCgpKVxuLy8gICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gKGZ1bmN0aW9uICgkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuLy8gICAgIHZhciBwbHVnaW5OYW1lID0gXCJSZWxhdGVkRW50cnlUeXBlc1wiLFxuLy8gICAgICAgICBkZWZhdWx0cyA9IHt9O1xuXG4vLyAgICAgLy8gUGx1Z2luIGNvbnN0cnVjdG9yXG4vLyAgICAgZnVuY3Rpb24gUGx1Z2luKGVsZW1lbnQsIG9wdGlvbnMpIHtcbi8vICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuLy8gICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4vLyAgICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG4vLyAgICAgICAgIHRoaXMuX25hbWUgPSBwbHVnaW5OYW1lO1xuXG4vLyAgICAgICAgIHRoaXMuaW5pdCgpO1xuLy8gICAgIH1cblxuLy8gICAgIFBsdWdpbi5wcm90b3R5cGUgPSB7XG5cbi8vICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGlkKSB7XG4vLyAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4vLyAgICAgICAgICAgICAkKGZ1bmN0aW9uICgpIHtcblxuLy8gICAgICAgICAgICAgICAgIC8qIC0tIF90aGlzLm9wdGlvbnMgZ2l2ZXMgdXMgYWNjZXNzIHRvIHRoZSAkanNvblZhcnMgdGhhdCBvdXIgRmllbGRUeXBlIHBhc3NlZCBkb3duIHRvIHVzICovXG5cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcblxuLy8gICAgIC8vIEEgcmVhbGx5IGxpZ2h0d2VpZ2h0IHBsdWdpbiB3cmFwcGVyIGFyb3VuZCB0aGUgY29uc3RydWN0b3IsXG4vLyAgICAgLy8gcHJldmVudGluZyBhZ2FpbnN0IG11bHRpcGxlIGluc3RhbnRpYXRpb25zXG4vLyAgICAgJC5mbltwbHVnaW5OYW1lXSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgXCJwbHVnaW5fXCIgKyBwbHVnaW5OYW1lKSkge1xuLy8gICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCBcInBsdWdpbl9cIiArIHBsdWdpbk5hbWUsXG4vLyAgICAgICAgICAgICAgICAgICAgIG5ldyBQbHVnaW4odGhpcywgb3B0aW9ucykpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KTtcbi8vICAgICB9O1xuXG4vLyB9KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vLyB3aW5kb3cuUmVsYXRlZEVudHJ5VHlwZXNGaWVsZCA9IFJlbGF0ZWRFbnRyeVR5cGVzRmllbGQ7IiwiaW1wb3J0IElDaGFubmVsIGZyb20gXCIuLi9pbnRlcmZhY2VzL0lDaGFubmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWwgaW1wbGVtZW50cyBJQ2hhbm5lbCB7XG4gICAgcHJpdmF0ZSBjaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmNoZWNrYm94ID0gbm9kZTtcbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5jaGVja2JveC52YWx1ZTtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3RoaXMuY2hlY2tib3guaWR9XCJdYCk7XG4gICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsLm5vZGVWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB9XG59IiwiaW1wb3J0IElDaGFubmVsR3JvdXAgZnJvbSAnLi4vaW50ZXJmYWNlcy9JQ2hhbm5lbEdyb3VwJztcbmltcG9ydCBJQ2hhbm5lbCBmcm9tICcuLi9pbnRlcmZhY2VzL0lDaGFubmVsJztcbmltcG9ydCBDaGFubmVsIGZyb20gJy4vQ2hhbm5lbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWxHcm91cCBpbXBsZW1lbnRzIElDaGFubmVsR3JvdXAge1xuICAgIHByaXZhdGUgY2hhbm5lbHM6IElDaGFubmVsW107XG4gICAgcHJpdmF0ZSBub2RlOiBIVE1MRGl2RWxlbWVudDtcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ZXM6IE5vZGVMaXN0T2Y8SFRNTElucHV0RWxlbWVudD4gPSBub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuICAgICAgICB0aGlzLmNoYW5uZWxzID0gQXJyYXkuZnJvbShjaGVja2JveGVzKS5tYXAoKGNoZWNrYm94OiBIVE1MSW5wdXRFbGVtZW50KSA9PiBuZXcgQ2hhbm5lbChjaGVja2JveCkpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q2hhbm5lbHMoKTogSUNoYW5uZWxbXSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ZpZWxkLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ZpZWxkLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/ZW1iZWRkZWQhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9maWVsZC5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==