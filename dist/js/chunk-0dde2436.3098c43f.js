(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0dde2436"],{"057f":function(t,e,r){var n=r("fc6a"),a=r("241c").f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return a(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?o(t):a(n(t))}},"270c":function(t,e,r){},5770:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"detail"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:17}},[r("el-card",{staticClass:"left-card"},[r("el-row",{staticClass:"card-top"},[r("el-col",{attrs:{span:7}},[r("el-image",{staticClass:"top-left-img",attrs:{src:(t.detail||{}).coverImgUrl,fit:"cover"}},[r("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"}),r("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"})])],1),r("el-col",{attrs:{span:17}},[r("div",{staticClass:"top-right"},[r("h2",{staticClass:"top-right-title"},[t._v(t._s(t.detail.name))]),r("div",{staticClass:"top-right-userInfo"},[r("el-image",{staticClass:"userInfo-avatar",attrs:{src:(t.detail.creator||{}).avatarUrl,fit:"cover"}},[r("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"}),r("div",{staticClass:"image-slot",attrs:{slot:"error"},slot:"error"})]),r("div",{staticClass:"userInfo-name"},[t._v(t._s((t.detail.creator||{}).nickname))]),r("div",{staticClass:"userInfo-time"},[t._v("更新时间："+t._s(t._f("timeStamp")(t.detail.updateTime)))])],1),r("div",{staticClass:"top-right-tag"},[t._v(" 标签： "),(t.detail.tags||{}).length?r("span",t._l(t.detail.tags,(function(e,n){return r("el-tag",{key:n},[t._v(t._s(e))])})),1):r("el-tag",[t._v("暂无标签")])],1),t.detail.description?r("div",{staticClass:"top-right-description"},[t._v(t._s(t.detail.description))]):r("div",{staticClass:"top-right-description"},[t._v("暂无描述")]),r("el-link",{attrs:{type:"danger",underline:!1},on:{click:function(e){t.descriptionDialog=!0}}},[t._v(" 全部"),r("i",{staticClass:"el-icon-arrow-right"})])],1)])],1),r("div",{staticClass:"card-bottom"},[r("div",{staticClass:"bottom-button"},[r("el-button",{attrs:{type:"primary",round:"",size:"medium",icon:"el-icon-caret-right"},on:{click:t.allPlay}},[t._v("播放全部")]),r("el-button",{attrs:{round:"",size:"medium",icon:t.iconFavorite},on:{click:t.favorite}},[t._v(" "+t._s(t.ifFavorite?"已收藏":"收藏")+" ")])],1),r("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.songDetail.length,expression:"!songDetail.length"}],staticClass:"bottom-song"},[r("PlayList",{attrs:{songDetail:t.songDetail}})],1)])],1)],1),r("el-col",{attrs:{span:7}},[r("el-card",{staticClass:"right-card",attrs:{shadow:"hover"}},[r("div",{staticClass:"card-title"},[t._v("喜欢这个歌单的伙伴")]),t.subscribers.length?r("el-row",{directives:[{name:"loading",rawName:"v-loading",value:!t.subscribers.length,expression:"!subscribers.length"}],staticClass:"card-users",attrs:{gutter:15,type:"flex"}},t._l(t.subscribers,(function(e,n){return r("el-col",{key:n,attrs:{span:4}},[r("el-tooltip",{attrs:{effect:"dark",content:e.nickname,placement:"top","open-delay":260}},[r("el-image",{staticClass:"users-avatar",attrs:{src:e.avatarUrl,fit:"cover"},on:{click:function(r){return t.goPersonal(e.userId)}}})],1)],1)})),1):r("div",{staticClass:"noMore"},[t._v("还没有人喜欢")])],1),r("el-card",{directives:[{name:"loading",rawName:"v-loading",value:!t.recommend.length,expression:"!recommend.length"}],staticClass:"right-card",attrs:{shadow:"hover"}},[r("div",{staticClass:"card-title"},[t._v("相关推荐")]),t._l(t.recommend,(function(e,n){return r("div",{key:n,staticClass:"card-recommend",on:{click:function(r){return t.reload(e.id)}}},[r("div",{staticClass:"recommend-left"},[r("el-image",{staticClass:"recommend-avatar",attrs:{src:e.coverImgUrl,fit:"cover"}})],1),r("div",{staticClass:"recommend-right"},[r("div",{staticClass:"recommend-title"},[t._v(t._s(e.name))]),r("div",{staticClass:"recommend-name"},[t._v("By. "+t._s(e.creator.nickname))])])])}))],2),r("el-card",{staticClass:"right-card",attrs:{shadow:"hover"}},[r("div",{staticClass:"card-title"},[t._v("精彩评论")]),t.hotComments.length?r("div",t._l(t.hotComments,(function(e,n){return r("div",{key:n,staticClass:"card-comments"},[r("div",{staticClass:"comments-left"},[r("el-avatar",{attrs:{size:40,src:e.user.avatarUrl}})],1),r("div",{staticClass:"comments-right"},[r("div",{staticClass:"right-name"},[t._v(" "+t._s(e.user.nickname)+" "),r("span",[t._v(t._s(t._f("time")(e.time)))])]),r("div",{staticClass:"right-content"},[t._v(t._s(e.content))])])])})),0):r("div",{staticClass:"noMore"},[t._v("还没有人评论")])])],1),r("el-dialog",{attrs:{title:t.detail.name,visible:t.descriptionDialog,width:"30%"},on:{"update:visible":function(e){t.descriptionDialog=e}}},[r("pre",{staticClass:"dialog-content"},[t._v(t._s(t.detail.description))])])],1)],1)},a=[];r("4160"),r("a15b"),r("d81d"),r("a434"),r("b0c0"),r("159b"),r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("3ca3"),r("ddb0"),r("a630"),r("fb6a"),r("25f0");function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t,e){if(t){if("string"===typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function o(t,e){var r;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=s(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,i=t},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(c)throw i}}}}r("96cf");var c=r("1da1"),l=r("da49"),u={components:{PlayList:l["a"]},computed:{iconFavorite:function(){return this.ifFavorite?"el-icon-star-on":"el-icon-star-off"}},data:function(){return{songListId:"",detail:{},subscribers:[],recommend:[],hotComments:[],songDetail:[],musicURL:[],ifFavorite:!1,songLyrics:[],userId:0,descriptionDialog:!1,indexMethod:function(t){return t+1<10?"0"+(t+1):t+1}}},created:function(){var t=localStorage.getItem("cookie");this.songListId=this.$route.query.id,this.loadDetail(),this.loadSubscribers(),this.loadFeatured(),this.loadComments(),this.loadUserSong(t,this.userId),this.getUserId(t)},methods:{getUserId:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(t){r.next=2;break}return r.abrupt("return");case 2:return r.next=4,e.$axios.post("/login/status",{cookie:t});case 4:if(n=r.sent,a=n.data,200===a.code){r.next=8;break}return r.abrupt("return",e.$message.error(a.msg));case 8:e.userId=a.profile.userId;case 9:case"end":return r.stop()}}),r)})))()},loadDetail:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/playlist/detail?id=".concat(t.songListId));case 2:if(r=e.sent,n=r.data,200===n.code){e.next=6;break}return e.abrupt("return",t.$message.error("歌单详情请求失败"));case 6:t.detail=n.playlist,a=n.playlist.trackIds.map((function(t){return t.id})),t.loadSongDetail(a);case 9:case"end":return e.stop()}}),e)})))()},loadSubscribers:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/playlist/subscribers",{params:{id:t.songListId,limit:30}});case 2:if(r=e.sent,n=r.data,200===n.code){e.next=6;break}return e.abrupt("return",t.$message.error("歌单收藏的用户请求失败"));case 6:t.subscribers=n.subscribers;case 7:case"end":return e.stop()}}),e)})))()},loadFeatured:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/related/playlist?id=".concat(t.songListId));case 2:if(r=e.sent,n=r.data,200===n.code){e.next=6;break}return e.abrupt("return",t.$message.error("相关推荐请求失败"));case 6:t.recommend=n.playlists;case 7:case"end":return e.stop()}}),e)})))()},loadComments:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/comment/playlist?id=".concat(t.songListId));case 2:if(r=e.sent,n=r.data,200===n.code){e.next=6;break}return e.abrupt("return",t.$message.error("精彩评论请求失败"));case 6:t.hotComments=0===n.hotComments.length?n.comments.splice(0,12):n.hotComments;case 7:case"end":return e.stop()}}),e)})))()},loadSongDetail:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.length>=200&&(t.length=200),r.next=3,e.$axios.get("/song/detail?ids=".concat(t.join(",")));case 3:if(n=r.sent,a=n.data,200===a.code){r.next=7;break}return r.abrupt("return",e.$message.error("歌曲详情请求失败"));case 7:e.songDetail=a.songs,e.loadMusicURL(t);case 9:case"end":return r.stop()}}),r)})))()},loadMusicURL:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n,a,i,s,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.length>=200&&(t.length=200),r.next=3,e.$axios.get("/song/url?id=".concat(t.join(",")));case 3:if(n=r.sent,a=n.data,200===a.code){r.next=7;break}return r.abrupt("return",e.$message.error("音乐URL请求失败"));case 7:for(s in i=a.data.map((function(t){return{url:t.url,id:t.id}})),i)for(o in e.songDetail)e.songDetail[o].id===i[s].id&&e.$set(e.songDetail[o],"url",i[s].url);case 9:case"end":return r.stop()}}),r)})))()},allPlay:function(){var t=this.songDetail.map((function(t){var e,r=o(t.ar);try{for(r.s();!(e=r.n()).done;){var n=e.value;return{name:t.name,artist:n.name,url:t.url,cover:t.al.picUrl}}}catch(a){r.e(a)}finally{r.f()}}));this.$root.$emit("updata:getAllSong",t)},favorite:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=localStorage.getItem("cookie"),r){e.next=3;break}return e.abrupt("return",t.$notify({title:"消息",message:"请先登录再进行收藏",type:"warning",position:"top-left"}));case 3:return t.ifFavorite=!t.ifFavorite,e.next=6,t.$axios.get("/playlist/subscribe",{params:{t:t.ifFavorite?1:2,id:t.songListId,cookie:r,timestamp:Date.now()}});case 6:if(n=e.sent,a=n.data,200===a.code){e.next=10;break}return e.abrupt("return",t.$message.error("请求失败"));case 10:return t.loadUserSong(),e.abrupt("return",t.$notify({title:"消息",message:t.ifFavorite?"已收藏，可在个人主页中查看":"已取消收藏",type:"success",position:"top-left"}));case 12:case"end":return e.stop()}}),e)})))()},loadUserSong:function(t,e){var r=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:return n.next=4,r.$axios.get("/user/playlist",{params:{uid:e,cookie:t,timestamp:Date.now()}});case 4:if(a=n.sent,i=a.data,200===i.code){n.next=8;break}return n.abrupt("return",r.$message.error("请求失败"));case 8:i.playlist.forEach((function(t){r.songListId==t.id&&(r.ifFavorite=!0)}));case 9:case"end":return n.stop()}}),n)})))()},goPersonal:function(t){if("/personal"!==this.$route.path){var e=localStorage.getItem("cookie");if(!e)return this.$notify({title:"消息",message:"请先登录",type:"warning",position:"top-left"});this.$router.push({path:"/personal",query:{userId:t}})}},reload:function(t){this.songListId!==t&&(this.songListId=t,this.$router.push({path:"/songdetail",query:{id:t}}),this.loadDetail(),this.loadSubscribers(),this.loadFeatured(),this.loadComments())}}},d=u,f=(r("8842"),r("2877")),m=Object(f["a"])(d,n,a,!1,null,"a3528522",null);e["default"]=m.exports},"746f":function(t,e,r){var n=r("428f"),a=r("5135"),i=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});a(e,t)||s(e,t,{value:i.f(t)})}},8842:function(t,e,r){"use strict";r("270c")},a4d3:function(t,e,r){"use strict";var n=r("23e7"),a=r("da84"),i=r("d066"),s=r("c430"),o=r("83ab"),c=r("4930"),l=r("fdbf"),u=r("d039"),d=r("5135"),f=r("e8b5"),m=r("861d"),g=r("825a"),v=r("7b0b"),p=r("fc6a"),h=r("c04e"),b=r("5c6c"),y=r("7c73"),w=r("df75"),C=r("241c"),x=r("057f"),k=r("7418"),S=r("06cf"),_=r("9bf2"),I=r("d1e7"),O=r("9112"),$=r("6eeb"),j=r("5692"),R=r("f772"),D=r("d012"),L=r("90e3"),U=r("b622"),F=r("e538"),P=r("746f"),A=r("d44e"),E=r("69f3"),N=r("b727").forEach,M=R("hidden"),J="Symbol",T="prototype",q=U("toPrimitive"),z=E.set,B=E.getterFor(J),Q=Object[T],W=a.Symbol,G=i("JSON","stringify"),H=S.f,K=_.f,V=x.f,X=I.f,Y=j("symbols"),Z=j("op-symbols"),tt=j("string-to-symbol-registry"),et=j("symbol-to-string-registry"),rt=j("wks"),nt=a.QObject,at=!nt||!nt[T]||!nt[T].findChild,it=o&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=H(Q,e);n&&delete Q[e],K(t,e,r),n&&t!==Q&&K(Q,e,n)}:K,st=function(t,e){var r=Y[t]=y(W[T]);return z(r,{type:J,tag:t,description:e}),o||(r.description=e),r},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,r){t===Q&&ct(Z,e,r),g(t);var n=h(e,!0);return g(r),d(Y,n)?(r.enumerable?(d(t,M)&&t[M][n]&&(t[M][n]=!1),r=y(r,{enumerable:b(0,!1)})):(d(t,M)||K(t,M,b(1,{})),t[M][n]=!0),it(t,n,r)):K(t,n,r)},lt=function(t,e){g(t);var r=p(e),n=w(r).concat(gt(r));return N(n,(function(e){o&&!dt.call(r,e)||ct(t,e,r[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=h(t,!0),r=X.call(this,e);return!(this===Q&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,M)&&this[M][e])||r)},ft=function(t,e){var r=p(t),n=h(e,!0);if(r!==Q||!d(Y,n)||d(Z,n)){var a=H(r,n);return!a||!d(Y,n)||d(r,M)&&r[M][n]||(a.enumerable=!0),a}},mt=function(t){var e=V(p(t)),r=[];return N(e,(function(t){d(Y,t)||d(D,t)||r.push(t)})),r},gt=function(t){var e=t===Q,r=V(e?Z:p(t)),n=[];return N(r,(function(t){!d(Y,t)||e&&!d(Q,t)||n.push(Y[t])})),n};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),r=function(t){this===Q&&r.call(Z,t),d(this,M)&&d(this[M],e)&&(this[M][e]=!1),it(this,e,b(1,t))};return o&&at&&it(Q,e,{configurable:!0,set:r}),st(e,t)},$(W[T],"toString",(function(){return B(this).tag})),$(W,"withoutSetter",(function(t){return st(L(t),t)})),I.f=dt,_.f=ct,S.f=ft,C.f=x.f=mt,k.f=gt,F.f=function(t){return st(U(t),t)},o&&(K(W[T],"description",{configurable:!0,get:function(){return B(this).description}}),s||$(Q,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),N(w(rt),(function(t){P(t)})),n({target:J,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=W(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:mt,getOwnPropertySymbols:gt}),n({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(v(t))}}),G){var vt=!c||u((function(){var t=W();return"[null]"!=G([t])||"{}"!=G({a:t})||"{}"!=G(Object(t))}));n({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,r){var n,a=[t],i=1;while(arguments.length>i)a.push(arguments[i++]);if(n=e,(m(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ot(e))return e}),a[1]=e,G.apply(null,a)}})}W[T][q]||O(W[T],q,W[T].valueOf),A(W,J),D[M]=!0},a630:function(t,e,r){var n=r("23e7"),a=r("4df4"),i=r("1c7e"),s=!i((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:s},{from:a})},d28b:function(t,e,r){var n=r("746f");n("iterator")},e01a:function(t,e,r){"use strict";var n=r("23e7"),a=r("83ab"),i=r("da84"),s=r("5135"),o=r("861d"),c=r("9bf2").f,l=r("e893"),u=i.Symbol;if(a&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};l(f,u);var m=f.prototype=u.prototype;m.constructor=f;var g=m.toString,v="Symbol(test)"==String(u("test")),p=/^Symbol\((.*)\)[^)]+$/;c(m,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=g.call(t);if(s(d,t))return"";var r=v?e.slice(7,-1):e.replace(p,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,r){var n=r("b622");e.f=n},fb6a:function(t,e,r){"use strict";var n=r("23e7"),a=r("861d"),i=r("e8b5"),s=r("23cb"),o=r("50c4"),c=r("fc6a"),l=r("8418"),u=r("b622"),d=r("1dde"),f=r("ae40"),m=d("slice"),g=f("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),p=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!m||!g},{slice:function(t,e){var r,n,u,d=c(this),f=o(d.length),m=s(t,f),g=s(void 0===e?f:e,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?a(r)&&(r=r[v],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return p.call(d,m,g);for(n=new(void 0===r?Array:r)(h(g-m,0)),u=0;m<g;m++,u++)m in d&&l(n,u,d[m]);return n.length=u,n}})}}]);