!function(e){var o={};function n(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}n.m=e,n.c=o,n.d=function(e,o,r){n.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,o){if(1&o&&(e=n(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)n.d(r,t,function(o){return e[o]}.bind(null,t));return r},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},n.p="",n(n.s=0)}([function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});const r=n(1);var t;!function(e){const o={Logging:{BrowserConsoleLogger:new r.BrowserConsoleLogger}};e.initialize=()=>{"undefined"==typeof window||window.BlazorExtensions?window.BlazorExtensions=Object.assign(Object.assign({},window.BlazorExtensions),o):window.BlazorExtensions=Object.assign({},o)}}(t||(t={})),t.initialize()},function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});const r=n(2);o.BrowserConsoleLogger=class{Log(e){const o=JSON.parse(e);let n=console.log;if(o.Type===r.LogObjectType.Table)n=console.table;else switch(o.LogLevel){case r.LogLevel.Trace:n=console.trace;break;case r.LogLevel.Debug:n=console.debug;break;case r.LogLevel.Warning:n=console.warn;break;case r.LogLevel.Error:case r.LogLevel.Critical:n=console.error}o.Type==r.LogObjectType.Table?n(o.Payload):n(`[${o.Category}]`,o.Payload),o.Exception&&n(`[${o.Category}] Exception: `,o.Exception)}}},function(e,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),function(e){e[e.Trace=0]="Trace",e[e.Debug=1]="Debug",e[e.Information=2]="Information",e[e.Warning=3]="Warning",e[e.Error=4]="Error",e[e.Critical=5]="Critical",e[e.None=6]="None"}(o.LogLevel||(o.LogLevel={})),function(e){e[e.String=0]="String",e[e.Object=1]="Object",e[e.Table=2]="Table"}(o.LogObjectType||(o.LogObjectType={}))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0luaXRpYWxpemVMb2dnaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9Ccm93c2VyQ29uc29sZUxvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvTG9nT2JqZWN0LnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiTG9nZ2luZyIsImV4dGVuc2lvbk9iamVjdCIsIkJyb3dzZXJDb25zb2xlTG9nZ2VyIiwiaW5pdGlhbGl6ZSIsIndpbmRvdyIsImxvZ09iamVjdFZhbHVlIiwibG9nT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwibG9nTWV0aG9kIiwiY29uc29sZSIsImxvZyIsIlR5cGUiLCJMb2dPYmplY3RUeXBlIiwiVGFibGUiLCJ0YWJsZSIsIkxvZ0xldmVsIiwiVHJhY2UiLCJ0cmFjZSIsIkRlYnVnIiwiZGVidWciLCJXYXJuaW5nIiwid2FybiIsIkVycm9yIiwiQ3JpdGljYWwiLCJlcnJvciIsIlBheWxvYWQiLCJDYXRlZ29yeSIsIkV4Y2VwdGlvbiJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFH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QVVzQixXQUNabkIsRUFBVSxJQUFJSCxFQUFVcUIsd0JBQXlCckIsRUFBVXNCLGMsOEVDN0JqRSxTQUFZWixHQUNWLHFCQUNBLHFCQUNBLGlDQUNBLHlCQUNBLHFCQUNBLDJCQUNBLG1CQVBGLENBQVksRUFBQUEsV0FBQSxFQUFBQSxTQUFRLEtBVXBCLFNBQVlILEdBQ1YsdUJBQ0EsdUJBQ0EscUJBSEYsQ0FBWSxFQUFBQSxnQkFBQSxFQUFBQSxjQUFhIiwiZmlsZSI6ImJsYXpvci5leHRlbnNpb25zLmxvZ2dpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBCcm93c2VyQ29uc29sZUxvZ2dlciB9IGZyb20gJy4vQnJvd3NlckNvbnNvbGVMb2dnZXInO1xyXG5cclxubmFtZXNwYWNlIExvZ2dpbmcge1xyXG4gIGNvbnN0IGJsYXpvckV4dGVuc2lvbnMgPSAnQmxhem9yRXh0ZW5zaW9ucyc7XHJcbiAgLy8gZGVmaW5lIHdoYXQgdGhpcyBleHRlbnNpb24gYWRkcyB0byB0aGUgd2luZG93IG9iamVjdCBpbnNpZGUgQmxhem9yRXh0ZW5zaW9uc1xyXG4gIGNvbnN0IGV4dGVuc2lvbk9iamVjdCA9IHtcclxuICAgIExvZ2dpbmc6IHtcclxuICAgICAgQnJvd3NlckNvbnNvbGVMb2dnZXI6IG5ldyBCcm93c2VyQ29uc29sZUxvZ2dlcigpLFxyXG4gICAgfSxcclxuICB9O1xyXG5cclxuICBleHBvcnQgY29uc3QgaW5pdGlhbGl6ZSA9ICgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAhKHdpbmRvdyBhcyBhbnkpW2JsYXpvckV4dGVuc2lvbnNdKSB7XHJcbiAgICAgIC8vIHdoZW4gdGhlIGxpYnJhcnkgaXMgbG9hZGVkIGluIGEgYnJvd3NlciB2aWEgYSA8c2NyaXB0PiBlbGVtZW50LCBtYWtlIHRoZVxyXG4gICAgICAvLyBmb2xsb3dpbmcgQVBJcyBhdmFpbGFibGUgaW4gZ2xvYmFsIHNjb3BlIGZvciBpbnZvY2F0aW9uIGZyb20gSlNcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpW2JsYXpvckV4dGVuc2lvbnNdID0ge1xyXG4gICAgICAgIC4uLmV4dGVuc2lvbk9iamVjdCxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICh3aW5kb3cgYXMgYW55KVtibGF6b3JFeHRlbnNpb25zXSA9IHtcclxuICAgICAgICAuLi4od2luZG93IGFzIGFueSlbYmxhem9yRXh0ZW5zaW9uc10sXHJcbiAgICAgICAgLi4uZXh0ZW5zaW9uT2JqZWN0LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbkxvZ2dpbmcuaW5pdGlhbGl6ZSgpO1xyXG4iLCJpbXBvcnQgeyBMb2dPYmplY3QsIExvZ09iamVjdFR5cGUsIExvZ0xldmVsIH0gZnJvbSAnLi9Mb2dPYmplY3QnO1xuXG5pbnRlcmZhY2UgSUJyb3dzZXJDb25zb2xlTG9nZ2VyIHtcbiAgTG9nKGxvZ09iamVjdFZhbHVlOiBzdHJpbmcpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgQnJvd3NlckNvbnNvbGVMb2dnZXIgaW1wbGVtZW50cyBJQnJvd3NlckNvbnNvbGVMb2dnZXIge1xuICBMb2cobG9nT2JqZWN0VmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGxvZ09iamVjdDogTG9nT2JqZWN0ID0gSlNPTi5wYXJzZShsb2dPYmplY3RWYWx1ZSk7XG4gICAgbGV0IGxvZ01ldGhvZDogRnVuY3Rpb24gPSBjb25zb2xlLmxvZztcblxuICAgIC8vIGlmIHdlJ3ZlIGEgdGFibGUsIHdlJ2xsIHByaW50IGl0IGFzIGEgdGFibGUgYW55d2F5LCBpdCBpcyB1bmxpa2VseSB0aGF0IHRoZSBkZXZlbG9wZXIgd2FudCB0byBsb2cgZXJyb3Jub3VzIGRhdGEgYXMgYSB0YWJsZS5cbiAgICBpZiAobG9nT2JqZWN0LlR5cGUgPT09IExvZ09iamVjdFR5cGUuVGFibGUpIHtcbiAgICAgIGxvZ01ldGhvZCA9IGNvbnNvbGUudGFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAobG9nT2JqZWN0LkxvZ0xldmVsKSB7XG4gICAgICAgIGNhc2UgTG9nTGV2ZWwuVHJhY2U6XG4gICAgICAgICAgbG9nTWV0aG9kID0gY29uc29sZS50cmFjZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBMb2dMZXZlbC5EZWJ1ZzpcbiAgICAgICAgICBsb2dNZXRob2QgPSBjb25zb2xlLmRlYnVnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIExvZ0xldmVsLldhcm5pbmc6XG4gICAgICAgICAgbG9nTWV0aG9kID0gY29uc29sZS53YXJuO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIExvZ0xldmVsLkVycm9yOlxuICAgICAgICBjYXNlIExvZ0xldmVsLkNyaXRpY2FsOlxuICAgICAgICAgIGxvZ01ldGhvZCA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsb2dPYmplY3QuVHlwZSA9PSBMb2dPYmplY3RUeXBlLlRhYmxlKSB7XG4gICAgICBsb2dNZXRob2QobG9nT2JqZWN0LlBheWxvYWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dNZXRob2QoYFske2xvZ09iamVjdC5DYXRlZ29yeX1dYCwgbG9nT2JqZWN0LlBheWxvYWQpO1xuICAgIH1cblxuICAgIGlmIChsb2dPYmplY3QuRXhjZXB0aW9uKSB7XG4gICAgICBsb2dNZXRob2QoYFske2xvZ09iamVjdC5DYXRlZ29yeX1dIEV4Y2VwdGlvbjogYCwgbG9nT2JqZWN0LkV4Y2VwdGlvbik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgdHlwZSBMb2dPYmplY3QgPSB7XG4gIENhdGVnb3J5OiBzdHJpbmc7XG4gIExvZ0xldmVsOiBMb2dMZXZlbDtcbiAgVHlwZTogTG9nT2JqZWN0VHlwZTtcbiAgUGF5bG9hZDogdW5rbm93bjtcbiAgRXhjZXB0aW9uOiBzdHJpbmc7XG59XG5cbi8vIGVudW0gY29taW5nIGZyb20gTWljcm9zb2Z0LkV4dGVuc2lvbnMuTG9nZ2luZ1xuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xuICBUcmFjZSA9IDAsXG4gIERlYnVnID0gMSxcbiAgSW5mb3JtYXRpb24gPSAyLFxuICBXYXJuaW5nID0gMyxcbiAgRXJyb3IgPSA0LFxuICBDcml0aWNhbCA9IDUsXG4gIE5vbmUgPSA2XG59XG5cbmV4cG9ydCBlbnVtIExvZ09iamVjdFR5cGUge1xuICBTdHJpbmcgPSAwLFxuICBPYmplY3QgPSAxLFxuICBUYWJsZSA9IDJcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=