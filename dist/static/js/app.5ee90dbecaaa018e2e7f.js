webpackJsonp([10],{"6eYd":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("fZjL"),a=t.n(o),i=t("7+uW"),u=function(e){Promise.all([t.e(0),t.e(4)]).then(function(){e(t("8hXn"))}.bind(null,t)).catch(t.oe)},c=function(e){Promise.all([t.e(0),t.e(2)]).then(function(){e(t("80bi"))}.bind(null,t)).catch(t.oe)},s=[{path:"/",name:"home",component:u},{path:"/cnodevue",name:"cnodevue",component:u},{path:"/list",name:"list",component:c},{path:"/topic/:id",name:"topic",component:function(e){Promise.all([t.e(0),t.e(1)]).then(function(){e(t("cOqS"))}.bind(null,t)).catch(t.oe)}},{path:"/add",name:"add",component:function(e){Promise.all([t.e(0),t.e(7)]).then(function(){e(t("Kimp"))}.bind(null,t)).catch(t.oe)},meta:{requiresAuth:!0}},{path:"/user/:loginname",name:"user",component:function(e){Promise.all([t.e(0),t.e(5)]).then(function(){e(t("nXOw"))}.bind(null,t)).catch(t.oe)}},{path:"/about",name:"about",component:function(e){Promise.all([t.e(0),t.e(8)]).then(function(){e(t("FBzZ"))}.bind(null,t)).catch(t.oe)}},{path:"/login",name:"login",component:function(e){Promise.all([t.e(0),t.e(3)]).then(function(){e(t("Quw4"))}.bind(null,t)).catch(t.oe)}},{path:"/message",name:"message",component:function(e){Promise.all([t.e(0),t.e(6)]).then(function(){e(t("J4Wv"))}.bind(null,t)).catch(t.oe)},meta:{requiresAuth:!0}},{path:"*",component:u}],r=s,l=t("DWsy"),m=t.n(l),f=t("/ocq"),h=t("lviy"),d=t.n(h),p={install:function(){var e=null;i.a.prototype.$alert=function(n){m()("#alertWeek").remove();var t=m()('<div class="week-alert" id="alertWeek"></div>');m()("body").append(t),t.html(n),t.addClass("alert-show"),clearTimeout(e),e=setTimeout(function(){t.remove()},2e3)}}},b=t("NYxO");i.a.use(b.a);var v=new b.a.Store({state:{userinfo:{}},getters:{getUserInfo:function(e){return e.userInfo}},mutations:{setUserInfo:function(e,n){i.a.set(e,"userInfo",n)}},actions:{setUserInfo:function(e,n){(0,e.commit)("setUserInfo",n)}}}),w=v,g=t("v5o6"),y=t.n(g);t("6eYd");i.a.use(f.a),i.a.use(p),m.a.ajaxSettings.crossDomain=!0;var I=new f.a({mode:"history",routes:r});a()(d.a).forEach(function(e){return i.a.filter(e,d.a[e])}),y.a.attach(document.body),window.sessionStorage.user&&w.dispatch("setUserInfo",JSON.parse(window.sessionStorage.user)),I.beforeEach(function(e,n,t){m()("body").css("overflow","auto"),e.matched.some(function(e){return e.meta.requiresAuth})?w&&w.state&&w.state.userInfo&&w.state.userInfo.userId?t():t({path:"/login",query:{redirect:e.fullPath}}):t()}),new i.a({router:I,store:w}).$mount("#app")},lviy:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.5ee90dbecaaa018e2e7f.js.map