(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd13fe8a"],{2297:function(e,t,n){"use strict";n("b64b");var a=n("7a23"),o=Object(a["m"])("hr",null,null,-1),r=Object(a["l"])("Save");function l(e,t,n,l,i,c){var s=Object(a["K"])("FileUpload"),u=Object(a["K"])("TreeSelect"),d=Object(a["K"])("Chips"),f=Object(a["K"])("Button");return Object(a["C"])(),Object(a["h"])(a["a"],null,[Object(a["m"])(s,{ref:"upload",disabled:e.disabled,name:"file",mode:"basic","choose-label":e.title,uploadLabel:e.title,auto:"",customUpload:!0,onUploader:e.onUpload},null,8,["disabled","choose-label","uploadLabel","onUploader"]),(Object(a["C"])(!0),Object(a["h"])(a["a"],null,Object(a["I"])(e.files,(function(t){return Object(a["C"])(),Object(a["h"])("div",{key:t.id},[o,Object(a["m"])(u,{modelValue:t._folder,"onUpdate:modelValue":function(e){return t._folder=e},onChange:function(e){return t.folder=Object.keys(e)[0]},options:e.folders},null,8,["modelValue","onUpdate:modelValue","onChange","options"]),Object(a["V"])(Object(a["m"])("textarea",{"onUpdate:modelValue":function(e){return t.comment=e}},null,8,["onUpdate:modelValue"]),[[a["R"],t.comment]]),Object(a["m"])(d,{modelValue:t.tagss,"onUpdate:modelValue":function(e){return t.tagss=e}},null,8,["modelValue","onUpdate:modelValue"]),Object(a["m"])(f,{onClick:function(n){return e.onSave(t)}},{default:Object(a["U"])((function(){return[r]})),_:2},1032,["onClick"])])})),128))],64)}var i=n("ade3"),c=n("1da1"),s=(n("159b"),n("2ca0"),n("d3b7"),n("96cf"),n("be3b")),u=Object(a["n"])({props:{module:{type:String}},data:function(){return{disabled:!1,title:"Choose",files:[],folders:[]}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.filecloud.folders.tree.get();case 2:n=t.sent,n.success&&(e.folders=n.data.folders);case 4:case"end":return t.stop()}}),t)})))()},methods:{onSave:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=Object.assign({},e),"undefined"===typeof a.tagss&&(a.tagss=[]),Object.keys(a).forEach((function(e){e.startsWith("_")&&delete a[e]})),n.next=5,t.$api.filecloud.update.file_id.put(a,{file_id:a.id});case 5:o=n.sent,alert(JSON.stringify(o));case 7:case"end":return n.stop()}}),n)})))()},onUpload:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.disabled=!0,t.title="Check space ...",n.next=4,t.$api.filecloud.storage.check.post({filesize:e.files[0].size});case 4:a=n.sent,a.fail||a.error?(t.title="Choose",t.$toast.add({severity:"error",summary:"Upload",detail:a.data.message,life:5e3}),t.$emit("onerror")):a.success&&(t.title="Uploading ...",o=new FormData,o.append("file",e.files[0]),o.append("module",t.module),s["a"].post("/filecloud/upload/",o,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){var t=parseInt(Math.round(e.loaded/e.total*100));this.title="Uploading ... ".concat(t,"%")}.bind(t)}).then((function(e){e.success?(e.data._folder=Object(i["a"])({},e.data.folder,!0),t.files.push(e.data),t.$emit("onupload",e.data.id)):t.$emit("onerror")})).catch((function(){t.$emit("onerror")})).finally((function(){t.title="Choose"}))),t.title="Choose",t.$refs.upload.clear(),t.disabled=!1;case 9:case"end":return n.stop()}}),n)})))()}}}),d=n("6b0d"),f=n.n(d);const p=f()(u,[["render",l]]);t["a"]=p},"2ca0":function(e,t,n){"use strict";var a=n("23e7"),o=n("06cf").f,r=n("50c4"),l=n("5a34"),i=n("1d80"),c=n("ab13"),s=n("c430"),u="".startsWith,d=Math.min,f=c("startsWith"),p=!s&&!f&&!!function(){var e=o(String.prototype,"startsWith");return e&&!e.writable}();a({target:"String",proto:!0,forced:!p&&!f},{startsWith:function(e){var t=String(i(this));l(e);var n=r(d(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return u?u.call(t,a,n):t.slice(n,n+a.length)===a}})},5350:function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={class:"p-p-5"},r=Object(a["m"])("hr",null,null,-1);function l(e,t,n,l,i,c){var s=Object(a["K"])("UploadButton");return Object(a["C"])(),Object(a["h"])("div",o,[Object(a["m"])(s,{module:"info",onOnupload:e.onUpload},null,8,["onOnupload"]),r,Object(a["l"])(" "+Object(a["O"])(e.files),1)])}var i=n("2297"),c=Object(a["n"])({components:{UploadButton:i["a"]},data:function(){return{files:[]}},methods:{onUpload:function(e){this.files.push(e)}}}),s=n("6b0d"),u=n.n(s);const d=u()(c,[["render",l]]);t["default"]=d}}]);
//# sourceMappingURL=chunk-cd13fe8a.ccfd48d4.js.map