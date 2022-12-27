(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{624:function(e,t,n){"use strict";n.r(t);var o=n(0),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"building-an-authentication-module"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#building-an-authentication-module"}},[e._v("#")]),e._v(" Building an authentication module")]),e._v(" "),n("p",{attrs:{synopsis:""}},[e._v("Authentication modules enable application developers to perform custom logic when interacting with the Interchain Accounts controller sumbmodule's "),n("code",[e._v("MsgServer")]),e._v(".")]),e._v(" "),n("p",[e._v("The controller submodule is used for account registration and packet sending. It executes only logic required of all controllers of interchain accounts. The type of authentication used to manage the interchain accounts remains unspecified. There may exist many different types of authentication which are desirable for different use cases. Thus the purpose of the authentication module is to wrap the controller submodule with custom authentication logic.")]),e._v(" "),n("p",[e._v("In ibc-go, authentication modules can communicate with the controller submodule by passing messages through "),n("code",[e._v("baseapp")]),e._v("'s "),n("code",[e._v("MsgServiceRouter")]),e._v(". To implement an authentication module, the "),n("code",[e._v("IBCModule")]),e._v(" interface need not be fulfilled; it is only required to fulfill Cosmos SDK's "),n("code",[e._v("AppModuleBasic")]),e._v(" interface, just like any regular Cosmos SDK application module.")]),e._v(" "),n("p",[e._v("The authentication module must:")]),e._v(" "),n("ul",[n("li",[e._v("Authenticate interchain account owners.")]),e._v(" "),n("li",[e._v("Track the associated interchain account address for an owner.")]),e._v(" "),n("li",[e._v("Send packets on behalf of an owner (after authentication).")])]),e._v(" "),n("h2",{attrs:{id:"integration-into-app-go-file"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#integration-into-app-go-file"}},[e._v("#")]),e._v(" Integration into "),n("code",[e._v("app.go")]),e._v(" file")]),e._v(" "),n("p",[e._v("To integrate the authentication module into your chain, please follow the steps outlined in "),n("RouterLink",{attrs:{to:"/apps/interchain-accounts/integration.html#example-integration"}},[n("code",[e._v("app.go")]),e._v(" integration")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);