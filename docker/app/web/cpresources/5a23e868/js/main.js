!function(e){function t(t){for(var s,i,c=t[0],a=t[1],l=t[2],d=0,h=[];d<c.length;d++)i=c[d],o[i]&&h.push(o[i][0]),o[i]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);for(u&&u(t);h.length;)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],s=!0,c=1;c<n.length;c++){var a=n[c];0!==o[a]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},o={main:0},r=[];function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp=window.webpackJsonp||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=a;r.push([0,"vendor"]),n()}({"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */function(e,t,n){},"./resources/js/RelatedEntryTypesField.ts":
/*!************************************************!*\
  !*** ./resources/js/RelatedEntryTypesField.ts ***!
  \************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var s=n(/*! ./components/ChannelGroup */"./resources/js/components/ChannelGroup.ts"),o=function(){function e(){var e=this;this.activeSections=[],this.fieldContainer=document.querySelector("#types-unionco-relatedentrytypes-fields-RelatedEntryType-sources-field");var t=document.querySelector("[data-related-entry-types-channels]");if(t){this.channelGroup=new s.default(t);var n=JSON.parse(t.dataset.relatedEntryTypesChannels);this.sectionMap=n}this.updateActiveSections=this.updateActiveSections.bind(this),this.fieldContainer.addEventListener("channelChange",function(t){var n=t.detail,s=n.sectionUid,o=n.active;console.log(n),e.updateActiveSections(s,o)}),console.log(this)}return e.prototype.updateActiveSections=function(e,t){t?this.activeSections.includes(e)||this.activeSections.push(e):this.activeSections.includes(e)&&this.activeSections.remove(e),console.log(this.activeSections)},e.fetchTemplates=function(e,t){var n={credentials:"same-origin",headers:{"X-Requested-With":"XMLHttpRequest"},method:"post",body:JSON.stringify({sectionUids:e,entryTypes:t})};return console.log(n),fetch("/admin/related-entry-types/types",n)},e}();t.default=o,new o},"./resources/js/components/Channel.ts":
/*!********************************************!*\
  !*** ./resources/js/components/Channel.ts ***!
  \********************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var s=function(){function e(e){this.checkbox=e;var t=e.value.match(/section\:(.*)/);t&&t.length&&(this.uid=t[0]),this.name=this.checkbox.value;var n=document.querySelector('label[for="'+this.checkbox.id+'"]');n&&(this.label=n.innerText),this.checkboxChangeHandler=this.checkboxChangeHandler.bind(this),this.checkbox.addEventListener("change",this.checkboxChangeHandler)}return e.prototype.checkboxChangeHandler=function(e){var t=e.target,n=new CustomEvent("channelChange",{detail:{sectionUid:this.uid,active:t.checked},bubbles:!0});return this.checkbox.dispatchEvent(n)},e}();t.default=s},"./resources/js/components/ChannelGroup.ts":
/*!*************************************************!*\
  !*** ./resources/js/components/ChannelGroup.ts ***!
  \*************************************************/
/*! exports provided: default */function(e,t,n){"use strict";n.r(t);var s=n(/*! ./Channel */"./resources/js/components/Channel.ts"),o=function(){function e(e){this.node=e;var t=e.querySelectorAll('input[type="checkbox"]');this.channels=Array.from(t).map(function(e){return new s.default(e)}),console.log(this)}return e.prototype.getChannels=function(){return[]},e}();t.default=o},"./resources/scss/field.scss":
/*!***********************************!*\
  !*** ./resources/scss/field.scss ***!
  \***********************************/
/*! no static exports found */function(e,t,n){var s=n(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js!./field.scss */"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./resources/scss/field.scss");"string"==typeof s&&(s=[[e.i,s,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(/*! ../../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(s,o);s.locals&&(e.exports=s.locals)},0:
/*!**********************************************************************************!*\
  !*** multi ./resources/js/RelatedEntryTypesField.ts ./resources/scss/field.scss ***!
  \**********************************************************************************/
/*! no static exports found */function(e,t,n){n(/*! /Users/abryrath/Union/Library/relatedentrytypes/resources/js/RelatedEntryTypesField.ts */"./resources/js/RelatedEntryTypesField.ts"),e.exports=n(/*! /Users/abryrath/Union/Library/relatedentrytypes/resources/scss/field.scss */"./resources/scss/field.scss")}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL1JlbGF0ZWRFbnRyeVR5cGVzRmllbGQudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQ2hhbm5lbC50cyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9DaGFubmVsR3JvdXAudHMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3Njc3MvZmllbGQuc2NzcyJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnBDYWxsYmFjayIsImRhdGEiLCJtb2R1bGVJZCIsImNodW5rSWQiLCJjaHVua0lkcyIsIm1vcmVNb2R1bGVzIiwiZXhlY3V0ZU1vZHVsZXMiLCJpIiwicmVzb2x2ZXMiLCJsZW5ndGgiLCJpbnN0YWxsZWRDaHVua3MiLCJwdXNoIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwibW9kdWxlcyIsInBhcmVudEpzb25wRnVuY3Rpb24iLCJzaGlmdCIsImRlZmVycmVkTW9kdWxlcyIsImFwcGx5IiwiY2hlY2tEZWZlcnJlZE1vZHVsZXMiLCJyZXN1bHQiLCJkZWZlcnJlZE1vZHVsZSIsImZ1bGZpbGxlZCIsImoiLCJkZXBJZCIsInNwbGljZSIsIl9fd2VicGFja19yZXF1aXJlX18iLCJzIiwiaW5zdGFsbGVkTW9kdWxlcyIsIm1haW4iLCJleHBvcnRzIiwibW9kdWxlIiwibCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwIiwianNvbnBBcnJheSIsIndpbmRvdyIsIm9sZEpzb25wRnVuY3Rpb24iLCJzbGljZSIsIl9fd2VicGFja19leHBvcnRzX18iLCJfY29tcG9uZW50c19DaGFubmVsR3JvdXBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyIsIlJlbGF0ZWRFbnRyeVR5cGVzRmllbGQiLCJfdGhpcyIsInRoaXMiLCJhY3RpdmVTZWN0aW9ucyIsImZpZWxkQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2hhbm5lbEdyb3VwQ29udGFpbmVyIiwiY2hhbm5lbEdyb3VwIiwic2VjdGlvbk1hcERhdGEiLCJKU09OIiwicGFyc2UiLCJkYXRhc2V0IiwicmVsYXRlZEVudHJ5VHlwZXNDaGFubmVscyIsInNlY3Rpb25NYXAiLCJ1cGRhdGVBY3RpdmVTZWN0aW9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiZXZlbnREZXRhaWwiLCJkZXRhaWwiLCJzZWN0aW9uVWlkIiwiYWN0aXZlIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwicmVtb3ZlIiwiZmV0Y2hUZW1wbGF0ZXMiLCJzZWN0aW9uVWlkcyIsImVudHJ5VHlwZXMiLCJvcHRzIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiWC1SZXF1ZXN0ZWQtV2l0aCIsIm1ldGhvZCIsImJvZHkiLCJzdHJpbmdpZnkiLCJmZXRjaCIsIkNoYW5uZWwiLCJub2RlIiwiY2hlY2tib3giLCJ1aWRNYXRjaCIsIm1hdGNoIiwidWlkIiwibGFiZWwiLCJpZCIsImlubmVyVGV4dCIsImNoZWNrYm94Q2hhbmdlSGFuZGxlciIsImNoYW5nZUV2ZW50IiwidGFyZ2V0IiwiZXZlbnQiLCJDdXN0b21FdmVudCIsImNoZWNrZWQiLCJidWJibGVzIiwiZGlzcGF0Y2hFdmVudCIsIl9DaGFubmVsX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18iLCJDaGFubmVsR3JvdXAiLCJjaGVja2JveGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImNoYW5uZWxzIiwiQXJyYXkiLCJmcm9tIiwibWFwIiwiZ2V0Q2hhbm5lbHMiLCJjb250ZW50Iiwib3B0aW9ucyIs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RixFQUFBLFdBSUksU0FBQUEsRUFBWWpCLEdBQ1JwQyxLQUFLb0MsS0FBT0EsRUFDWixJQUFNa0IsRUFBMkNsQixFQUFLbUIsaUJBQWlCLDBCQUN2RXZELEtBQUt3RCxTQUFXQyxNQUFNQyxLQUFLSixHQUFZSyxJQUFJLFNBQUN0QixHQUErQixXQUFJZSxFQUFBLFFBQVFmLEtBQ3ZGakIsUUFBUUMsSUFBSXJCLE1BTXBCLE9BSFdxRCxFQUFBM0csVUFBQWtILFlBQVAsV0FDSSxNQUFPLElBRWZQLEVBZEE7Ozs7OENDSEEsSUFBQVEsRUFBY3BHLDJNQUFRLDZNQUV0QixpQkFBQW9HLE1BQUEsRUFBNEMvRixFQUFBMUIsRUFBU3lILEVBQUEsTUFPckQsSUFBQUMsRUFBQSxDQUFlQyxLQUFBLEVBRWZDLGVBUEFBLEVBUUFDLGdCQUFBQyxHQUVhekcseURBQVEsK0NBQVJBLENBQTJEb0csRUFBQUMsR0FFeEVELEVBQUFNLFNBQUFyRyxFQUFBRCxRQUFBZ0csRUFBQU0iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IElDaGFubmVsR3JvdXAgZnJvbSAnLi9pbnRlcmZhY2VzL0lDaGFubmVsR3JvdXAnO1xuaW1wb3J0IENoYW5uZWxHcm91cCBmcm9tICcuL2NvbXBvbmVudHMvQ2hhbm5lbEdyb3VwJztcbmltcG9ydCBJU2VjdGlvbk1hcCBmcm9tICcuL2ludGVyZmFjZXMvSVNlY3Rpb25NYXAnO1xuaW1wb3J0IElDaGFubmVsIGZyb20gJy4vaW50ZXJmYWNlcy9JQ2hhbm5lbCc7XG5pbXBvcnQgU2VjdGlvbk1hcCBmcm9tICcuL2NvbXBvbmVudHMvU2VjdGlvbk1hcCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbGF0ZWRFbnRyeVR5cGVzRmllbGQge1xuICAgIHB1YmxpYyBjaGFubmVsR3JvdXA6IElDaGFubmVsR3JvdXA7XG4gICAgcHVibGljIGZpZWxkQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcbiAgICAvLyBwdWJsaWMgZW50cnlUeXBlR3JvdXA6IElFbnRyeVR5cGVHcm91cDtcbiAgICBwcml2YXRlIHNlY3Rpb25NYXA6IElTZWN0aW9uTWFwO1xuICAgIHB1YmxpYyBhY3RpdmVTZWN0aW9uczogc3RyaW5nW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlU2VjdGlvbnMgPSBbXTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0eXBlcy11bmlvbmNvLXJlbGF0ZWRlbnRyeXR5cGVzLWZpZWxkcy1SZWxhdGVkRW50cnlUeXBlLXNvdXJjZXMtZmllbGQnKTtcblxuICAgICAgICAvLyBJbml0aWFsaXplIHRoZSBjaGFubmVscyBzZWxlY3QgYXJlYVxuICAgICAgICBjb25zdCBjaGFubmVsR3JvdXBDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVsYXRlZC1lbnRyeS10eXBlcy1jaGFubmVsc10nKTtcbiAgICAgICAgaWYgKGNoYW5uZWxHcm91cENvbnRhaW5lcikge1xuICAgICAgICAgICAgdGhpcy5jaGFubmVsR3JvdXAgPSBuZXcgQ2hhbm5lbEdyb3VwKGNoYW5uZWxHcm91cENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25NYXBEYXRhOiBJU2VjdGlvbk1hcCA9IEpTT04ucGFyc2UoY2hhbm5lbEdyb3VwQ29udGFpbmVyLmRhdGFzZXQucmVsYXRlZEVudHJ5VHlwZXNDaGFubmVscyk7XG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25NYXAgPSBzZWN0aW9uTWFwRGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnN0IGVudHJ5VHlwZUdyb3VwQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IHRoaXMuZmllbGRDb250YWluZXIucXVlcnlTZWxlY3RvcignW2RhdGEtZW50cnktdHlwZXMtc2VsZWN0LWFyZWFdJyk7XG4gICAgICAgIC8vIGlmIChlbnRyeVR5cGVzR3JvdXBDb250YWluZXIpIHtcbiAgICAgICAgLy8gICAgIHRoaXMuZW50eVR5cGVHcm91cCA9IG5ldyBFbnR5VHlwZUdyb3VwXG4gICAgICAgIC8vIH1cblxuICAgICAgICAvLyBNZXRob2QgYmluZGluZ1xuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVNlY3Rpb25zID0gdGhpcy51cGRhdGVBY3RpdmVTZWN0aW9ucy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIEV2ZW50IExpc3RlbmVyc1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5uZWxDaGFuZ2UnLCAoZTogQ3VzdG9tRXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RGV0YWlsID0gZS5kZXRhaWw7XG4gICAgICAgICAgICBjb25zdCB7IHNlY3Rpb25VaWQsIGFjdGl2ZSB9ID0gZXZlbnREZXRhaWw7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudERldGFpbCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2ZVNlY3Rpb25zKHNlY3Rpb25VaWQsIGFjdGl2ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUFjdGl2ZVNlY3Rpb25zKHNlY3Rpb25VaWQ6IHN0cmluZywgYWN0aXZlOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5hY3RpdmVTZWN0aW9ucy5pbmNsdWRlcyhzZWN0aW9uVWlkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VjdGlvbnMucHVzaChzZWN0aW9uVWlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZVNlY3Rpb25zLmluY2x1ZGVzKHNlY3Rpb25VaWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVTZWN0aW9ucy5yZW1vdmUoc2VjdGlvblVpZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hY3RpdmVTZWN0aW9ucyk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBmZXRjaFRlbXBsYXRlcyhzZWN0aW9uVWlkczogc3RyaW5nW10sIGVudHJ5VHlwZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxSZXNwb25zZT4ge1xuICAgICAgICBjb25zdCBvcHRzOiBSZXF1ZXN0SW5pdCA9IHtcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBcInNlY3Rpb25VaWRzXCI6IHNlY3Rpb25VaWRzLFxuICAgICAgICAgICAgICAgIFwiZW50cnlUeXBlc1wiOiBlbnRyeVR5cGVzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyhvcHRzKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKCcvYWRtaW4vcmVsYXRlZC1lbnRyeS10eXBlcy90eXBlcycsIG9wdHMpO1xuICAgICAgICAvLyAudGhlbihyZXNwID0+eiByZXNwLnRleHQoKSlcbiAgICAgICAgLy8gLnRoZW4oZGF0YSA9PiByZXNvbHZlKGRhdGEpKTtcbiAgICB9XG59XG5cbm5ldyBSZWxhdGVkRW50cnlUeXBlc0ZpZWxkKCk7XG5cbi8vIGNvbnN0IGFqYXhPcHRzID0ge1xuLy8gICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuLy8gICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnLFxuLy8gICAgIH1cbi8vIH07XG5cbi8vIGNsYXNzIEVudHJ5VHlwZSB7XG4vLyAgICAgY29uc3RydWN0b3IoKSB7XG4vLyAgICAgICAgIHRoaXMuZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHlwZXMtdW5pb25jby1yZWxhdGVkZW50cnl0eXBlcy1maWVsZHMtRW50cnlUeXBlLXNvdXJjZXMtZmllbGQnKTtcbi8vICAgICAgICAgaWYgKHRoaXMuZmllbGRDb250YWluZXIpIHtcbi8vICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMgPSB0aGlzLmZpZWxkQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpO1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWN0aW9uQ2hlY2tib3hlcyk7XG4vLyAgICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uQ2hlY2tib3hlcykge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMuZm9yRWFjaChjaGVja2JveCA9PiBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVNvdXJjZXNDaGFuZ2UuYmluZCh0aGlzKSkpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgdGhpcy5lbnRyeVR5cGVzU2VsZWN0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWVudHJ5LXR5cGVzLXNlbGVjdC1hcmVhXScpO1xuLy8gICAgICAgICB0aGlzLmdldFNlbGVjdGVkU2VjdGlvbnMgPSB0aGlzLmdldFNlbGVjdGVkU2VjdGlvbnMuYmluZCh0aGlzKTtcbi8vICAgICB9XG5cbi8vICAgICBnZXRTZWxlY3RlZFNlY3Rpb25zKCkge1xuLy8gICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMuc2VjdGlvbkNoZWNrYm94ZXMsIGNoZWNrYm94ID0+IHtcbi8vICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hlY2tib3gpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrZWQgfHwgZmFsc2U7XG4vLyAgICAgICAgIH0pLm1hcChjaGVja2JveCA9PiB7XG4vLyAgICAgICAgICAgICByZXR1cm4gY2hlY2tib3gudmFsdWU7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cblxuLy8gICAgIGdldFNlbGVjdGVkRW50cnlUeXBlcygpIHtcbi8vICAgICAgICAgY29uc3QgZW50cnlUeXBlc1NlY3Rpb24gPSB0aGlzLmVudHJ5VHlwZXNTZWxlY3RBcmVhLnF1ZXJ5U2VsZWN0b3IoJ2RpdicpO1xuLy8gICAgICAgICBpZiAoZW50cnlUeXBlc1NlY3Rpb24pIHtcbi8vICAgICAgICAgICAgIGNvbnN0IGVudHJ5VHlwZUNoZWNrYm94ZXMgPSBlbnRyeVR5cGVzU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVudHJ5VHlwZUNoZWNrYm94ZXMpO1xuLy8gICAgICAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChlbnRyeVR5cGVDaGVja2JveGVzLCBjaGVja2JveCA9PiB7XG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrYm94LmNoZWNrZWQ7XG4vLyAgICAgICAgICAgICB9KS5tYXAoY2hlY2tib3ggPT4ge1xuLy8gICAgICAgICAgICAgICAgIHJldHVybiBjaGVja2JveC52YWx1ZTtcbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG5cbi8vICAgICAgICAgcmV0dXJuIG51bGw7XG4vLyAgICAgfVxuXG4vLyAgICAgaGFuZGxlU291cmNlc0NoYW5nZShlKSB7XG4vLyAgICAgICAgIGNvbnN0IHNlbGVjdGVkU2VjdGlvbnMgPSB0aGlzLmdldFNlbGVjdGVkU2VjdGlvbnMoKTtcbi8vICAgICAgICAgY29uc3Qgc2VsZWN0ZWRFbnRyeVR5cGVzID0gdGhpcy5nZXRTZWxlY3RlZEVudHJ5VHlwZXMoKTtcblxuLy8gICAgICAgICBpZiAoc2VsZWN0ZWRTZWN0aW9ucy5sZW5ndGggPCAxKSB7XG4vLyAgICAgICAgICAgICB0aGlzLmVudHJ5VHlwZXNTZWxlY3RBcmVhLmlubmVySFRNTCA9ICcnO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIEFwaUNsaWVudC5nZXRUZW1wbGF0ZShzZWxlY3RlZFNlY3Rpb25zLCBzZWxlY3RlZEVudHJ5VHlwZXMpXG4vLyAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLmVudHJ5VHlwZXNTZWxlY3RBcmVhLmlubmVySFRNTCA9IGRhdGE7XG4vLyAgICAgICAgICAgICB9KTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGNsYXNzIEFwaUNsaWVudCB7XG4vLyAgICAgc3RhdGljIGdldFRlbXBsYXRlKHNlY3Rpb25VaWRzLCBlbnRyeVR5cGVzKSB7XG4vLyAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICAgICAgICBsZXQgb3B0cyA9IHtcbi8vICAgICAgICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbi8vICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0Jyxcbi8vICAgICAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuLy8gICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbi8vICAgICAgICAgICAgICAgICAgICAgXCJzZWN0aW9uVWlkc1wiOiBzZWN0aW9uVWlkcyxcbi8vICAgICAgICAgICAgICAgICAgICAgXCJlbnRyeVR5cGVzXCI6IGVudHJ5VHlwZXNcbi8vICAgICAgICAgICAgICAgICB9KVxuLy8gICAgICAgICAgICAgfTtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9wdHMpO1xuLy8gICAgICAgICAgICAgZmV0Y2goJy9hZG1pbi9yZWxhdGVkLWVudHJ5LXR5cGVzL3R5cGVzJywgb3B0cylcbi8vICAgICAgICAgICAgICAgICAudGhlbihyZXNwID0+IHJlc3AudGV4dCgpKVxuLy8gICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4gcmVzb2x2ZShkYXRhKSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gKGZ1bmN0aW9uICgkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpIHtcblxuLy8gICAgIHZhciBwbHVnaW5OYW1lID0gXCJSZWxhdGVkRW50cnlUeXBlc1wiLFxuLy8gICAgICAgICBkZWZhdWx0cyA9IHt9O1xuXG4vLyAgICAgLy8gUGx1Z2luIGNvbnN0cnVjdG9yXG4vLyAgICAgZnVuY3Rpb24gUGx1Z2luKGVsZW1lbnQsIG9wdGlvbnMpIHtcbi8vICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuLy8gICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4vLyAgICAgICAgIHRoaXMuX2RlZmF1bHRzID0gZGVmYXVsdHM7XG4vLyAgICAgICAgIHRoaXMuX25hbWUgPSBwbHVnaW5OYW1lO1xuXG4vLyAgICAgICAgIHRoaXMuaW5pdCgpO1xuLy8gICAgIH1cblxuLy8gICAgIFBsdWdpbi5wcm90b3R5cGUgPSB7XG5cbi8vICAgICAgICAgaW5pdDogZnVuY3Rpb24gKGlkKSB7XG4vLyAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4vLyAgICAgICAgICAgICAkKGZ1bmN0aW9uICgpIHtcblxuLy8gICAgICAgICAgICAgICAgIC8qIC0tIF90aGlzLm9wdGlvbnMgZ2l2ZXMgdXMgYWNjZXNzIHRvIHRoZSAkanNvblZhcnMgdGhhdCBvdXIgRmllbGRUeXBlIHBhc3NlZCBkb3duIHRvIHVzICovXG5cbi8vICAgICAgICAgICAgIH0pO1xuLy8gICAgICAgICB9XG4vLyAgICAgfTtcblxuLy8gICAgIC8vIEEgcmVhbGx5IGxpZ2h0d2VpZ2h0IHBsdWdpbiB3cmFwcGVyIGFyb3VuZCB0aGUgY29uc3RydWN0b3IsXG4vLyAgICAgLy8gcHJldmVudGluZyBhZ2FpbnN0IG11bHRpcGxlIGluc3RhbnRpYXRpb25zXG4vLyAgICAgJC5mbltwbHVnaW5OYW1lXSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4vLyAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICAgICAgaWYgKCEkLmRhdGEodGhpcywgXCJwbHVnaW5fXCIgKyBwbHVnaW5OYW1lKSkge1xuLy8gICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCBcInBsdWdpbl9cIiArIHBsdWdpbk5hbWUsXG4vLyAgICAgICAgICAgICAgICAgICAgIG5ldyBQbHVnaW4odGhpcywgb3B0aW9ucykpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KTtcbi8vICAgICB9O1xuXG4vLyB9KShqUXVlcnksIHdpbmRvdywgZG9jdW1lbnQpO1xuXG4vLyB3aW5kb3cuUmVsYXRlZEVudHJ5VHlwZXNGaWVsZCA9IFJlbGF0ZWRFbnRyeVR5cGVzRmllbGQ7IiwiaW1wb3J0IElDaGFubmVsIGZyb20gXCIuLi9pbnRlcmZhY2VzL0lDaGFubmVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWwgaW1wbGVtZW50cyBJQ2hhbm5lbCB7XG4gICAgcHJpdmF0ZSBjaGVja2JveDogSFRNTElucHV0RWxlbWVudDtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICAgIHB1YmxpYyB1aWQ6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG5vZGU6IEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jaGVja2JveCA9IG5vZGU7XG4gICAgICAgIGNvbnN0IHVpZE1hdGNoID0gbm9kZS52YWx1ZS5tYXRjaCgvc2VjdGlvblxcOiguKikvKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh1aWRNYXRjaCAmJiB1aWRNYXRjaC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMudWlkID0gdWlkTWF0Y2hbMF07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5uYW1lID0gdGhpcy5jaGVja2JveC52YWx1ZTtcbiAgICAgICAgY29uc3QgbGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsYWJlbFtmb3I9XCIke3RoaXMuY2hlY2tib3guaWR9XCJdYCk7XG4gICAgICAgIFxuICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgIHRoaXMubGFiZWwgPSBsYWJlbC5pbm5lclRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoZWNrYm94Q2hhbmdlSGFuZGxlciA9IHRoaXMuY2hlY2tib3hDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5jaGVja2JveENoYW5nZUhhbmRsZXIpO1xuICAgIH1cblxuICAgIGNoZWNrYm94Q2hhbmdlSGFuZGxlcihjaGFuZ2VFdmVudDogRXZlbnQpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0OiBIVE1MSW5wdXRFbGVtZW50ID0gY2hhbmdlRXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2hhbm5lbENoYW5nZScsIHtcbiAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgIHNlY3Rpb25VaWQ6IHRoaXMudWlkLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogdGFyZ2V0LmNoZWNrZWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBidWJibGVzOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrYm94LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbn0iLCJpbXBvcnQgSUNoYW5uZWxHcm91cCBmcm9tICcuLi9pbnRlcmZhY2VzL0lDaGFubmVsR3JvdXAnO1xuaW1wb3J0IElDaGFubmVsIGZyb20gJy4uL2ludGVyZmFjZXMvSUNoYW5uZWwnO1xuaW1wb3J0IENoYW5uZWwgZnJvbSAnLi9DaGFubmVsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbm5lbEdyb3VwIGltcGxlbWVudHMgSUNoYW5uZWxHcm91cCB7XG4gICAgcHJpdmF0ZSBjaGFubmVsczogSUNoYW5uZWxbXTtcbiAgICBwcml2YXRlIG5vZGU6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgY29uc3RydWN0b3Iobm9kZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICAgICAgY29uc3QgY2hlY2tib3hlczogTm9kZUxpc3RPZjxIVE1MSW5wdXRFbGVtZW50PiA9IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJyk7XG4gICAgICAgIHRoaXMuY2hhbm5lbHMgPSBBcnJheS5mcm9tKGNoZWNrYm94ZXMpLm1hcCgoY2hlY2tib3g6IEhUTUxJbnB1dEVsZW1lbnQpID0+IG5ldyBDaGFubmVsKGNoZWNrYm94KSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRDaGFubmVscygpOiBJQ2hhbm5lbFtdIHtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P2VtYmVkZGVkIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZmllbGQuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P2VtYmVkZGVkIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vZmllbGQuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9lbWJlZGRlZCEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2ZpZWxkLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9