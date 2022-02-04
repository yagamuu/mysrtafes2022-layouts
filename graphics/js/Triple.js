(()=>{"use strict";var t,e={491:(t,e,r)=>{var n,i=r(529),o=r(803),a=r(654),c=r(473),s=r(937),l=r(415),p=r(246),u=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),f=function(t,e,r,n){var i,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(o<3?i(a):o>3?i(e,r,a):i(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a};const v=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),Object.defineProperty(e.prototype,"name",{get:function(){var t,e;return this.runDataActiveRunReplicant&&(null===(t=this.runDataActiveRunReplicant)||void 0===t?void 0:t.teams[this.index])?null===(e=this.runDataActiveRunReplicant)||void 0===e?void 0:e.teams[this.index].players[0].name:""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"finishTime",{get:function(){var t,e;if(!this.runDataActiveRunReplicant||!(null===(t=this.runDataActiveRunReplicant)||void 0===t?void 0:t.teams[this.index]))return"";var r=null===(e=this.runDataActiveRunReplicant)||void 0===e?void 0:e.teams[this.index].id;if(!this.timerReplicant.teamFinishTimes[r])return"";var n=this.timerReplicant.teamFinishTimes[r];return"forfeit"===n.state?"リタイア":"completed"===n.state?p.Z(Math.trunc(n.milliseconds/1e3)):""},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isActive",{get:function(){var t,e;return!(!this.runDataActiveRunReplicant||!(null===(t=this.runDataActiveRunReplicant)||void 0===t?void 0:t.teams[this.index]))&&(null===(e=this.runDataActiveRunReplicant)||void 0===e?void 0:e.teams[this.index].players[0].id)===this.displaySoundReplicant.playerId},enumerable:!1,configurable:!0}),f([l.aD],e.prototype,"runDataActiveRunReplicant",void 0),f([l.aD],e.prototype,"timerReplicant",void 0),f([l.aD],e.prototype,"displaySoundReplicant",void 0),f([(0,a.fI)({type:Number,required:!0})],e.prototype,"index",void 0),f([a.wA],e)}(a.w3);var d=r(440);const y=(0,d.Z)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info_box",class:{active:t.isActive}},[n("div",{staticClass:"info_box_inner"},[n("div",{staticClass:"player_name"},[n("img",{staticClass:"icon_cont",attrs:{src:r(581),alt:"cont"}}),t._v(" "),n("span",{staticClass:"runner_area"},[t._v(t._s(t.name))])]),t._v(" "),n("div",{staticClass:"player_time"},[n("span",{staticClass:"player_time_area active",attrs:{id:"player1_time"}},[t._v(t._s(t.finishTime))]),t._v(" "),n("img",{staticClass:"icon_speaker",attrs:{src:r(711),alt:"speaker"}})]),t._v(" "),n("div",{attrs:{id:"player_"+(t.index+1)+"_end"}})])])}),[],!1,null,"8e292308",null).exports;var h=r(957),m=r(307),_=r(357),b=function(){var t=function(e,r){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},t(e,r)};return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();const g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return b(e,t),Object.defineProperty(e.prototype,"sdGamePosition",{get:function(){return[[677,1242,30,454],[97,662,593,1017],[1257,1822,593,1017]]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hdGamePosition",{get:function(){return[[610,1310,30,425],[30,730,605,1e3],[1190,1890,605,1e3]]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clipPath",{get:function(){var t=new URLSearchParams(location.search).get("isHD")?this.hdGamePosition:this.sdGamePosition;return(0,_.I)(t)},enumerable:!1,configurable:!0}),function(t,e,r,n){var i,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(a=(o<3?i(a):o>3?i(e,r,a):i(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a}([(0,a.wA)({components:{GameLayout:s.Z,GameInfo:c.Z,NameplateForTriple:y,Estimate:h.Z,TwitterNotification:m.Z}})],e)}(a.w3),O=(0,d.Z)(g,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("game-layout",{attrs:{clipPath:t.clipPath}},[r("div",{attrs:{id:"main"}},[r("game-info"),t._v(" "),r("div",{staticClass:"info_box"}),t._v(" "),r("twitter-notification"),t._v(" "),r("nameplate-for-triple",{attrs:{id:"player_1",index:0}}),t._v(" "),r("nameplate-for-triple",{attrs:{id:"player_2",index:1}}),t._v(" "),r("nameplate-for-triple",{attrs:{id:"player_3",index:2}}),t._v(" "),r("estimate",{attrs:{displayTimer:""}})],1)])}),[],!1,null,"1e2be145",null).exports;var R=r(229);(0,i.rl)(R.Z).then((function(){new o.Z({store:R.Z,el:"#App",render:function(t){return t(O)}})}))},581:(t,e,r)=>{t.exports=r.p+"img/icon_cont-f4b987d8392180a81bad.svg"},711:(t,e,r)=>{t.exports=r.p+"img/icon_speaker-7d2be5c72ffd73f50f13.svg"}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.m=e,t=[],n.O=(e,r,i,o)=>{if(!r){var a=1/0;for(p=0;p<t.length;p++){for(var[r,i,o]=t[p],c=!0,s=0;s<r.length;s++)(!1&o||a>=o)&&Object.keys(n.O).every((t=>n.O[t](r[s])))?r.splice(s--,1):(c=!1,o<a&&(a=o));if(c){t.splice(p--,1);var l=i();void 0!==l&&(e=l)}}return e}o=o||0;for(var p=t.length;p>0&&t[p-1][2]>o;p--)t[p]=t[p-1];t[p]=[r,i,o]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t+"../"})(),(()=>{var t={375:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var i,o,[a,c,s]=r,l=0;if(a.some((e=>0!==t[e]))){for(i in c)n.o(c,i)&&(n.m[i]=c[i]);if(s)var p=s(n)}for(e&&e(r);l<a.length;l++)o=a[l],n.o(t,o)&&t[o]&&t[o][0](),t[a[l]]=0;return n.O(p)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var i=n.O(void 0,[185,681],(()=>n(491)));i=n.O(i)})();