webpackJsonp([1],[function(e,t,a){e.exports=a(4)},,function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),c=n(s),l=a(5),u=n(l),h=a(7),f=n(h),p=a(6),d=n(p),g=function(e){function t(){r(this,t);var e=400,a=734,n=o(this,Object.getPrototypeOf(t).call(this,{width:e,height:a,renderer:c["default"].AUTO,parent:"content",resolution:window.devicePixelRatio}));return n.state.add("Boot",u["default"],!1),n.state.add("Splash",f["default"],!1),n.state.add("Main",d["default"],!1),n.state.start("Boot"),n}return i(t,e),t}(c["default"].Game);t["default"]=g},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.totalSections=3},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r=a(2),o=n(r);new o["default"]},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(1),c=function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"create",value:function(){this.game.scale.scaleMode=s.ScaleManager.SHOW_ALL,this.game.scale.pageAlignHorizontally=!0,this.game.scale.pageAlignVertically=!0}},{key:"preload",value:function(){this.state.start("Splash")}}]),t}(s.State);t["default"]=c},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}Object.defineProperty(t,"__esModule",{value:!0});var s,c=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=function O(e,t,a){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var r=Object.getPrototypeOf(e);return null===r?void 0:O(r,t,a)}if("value"in n)return n.value;var o=n.get;if(void 0!==o)return o.call(a)},u=a(1),h=Symbol["for"]("+"),f=Symbol["for"]("o"),p=(s={},i(s,h,"cross"),i(s,f,"circle"),s),d="#63D1F4",g="#4CBB17",y="#992D2D",m=function(e){function t(){var e;n(this,t);for(var a=arguments.length,o=Array(a),i=0;a>i;i++)o[i]=arguments[i];var s=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(o)));return s.scale.setTo(.5),s.anchor.setTo(.5),s.shape=h,s.game.physics.enable(s,u.Physics.ARCADE),s.text=new u.Text(s.game,s.body.centerX,s.body.centerY,Symbol.keyFor(s.shape)),s.addChild(s.text),s}return o(t,e),c(t,[{key:"update",value:function(){l(Object.getPrototypeOf(t.prototype),"update",this).call(this),this.text.setText(Symbol.keyFor(this.shape))}}]),t}(u.Sprite),b=function(e){function t(e,a,o,i,s){var c;n(this,t);for(var l=arguments.length,h=Array(l>5?l-5:0),f=5;l>f;f++)h[f-5]=arguments[f];var d=r(this,(c=Object.getPrototypeOf(t)).call.apply(c,[this,a,o,i,p[e]].concat(h)));return d.scale.setTo(.33),d.anchor.setTo(.5),d.shape=e,d.strength=100,d.game.physics.enable(d,u.Physics.ARCADE),d.body.immovable=!0,d}return o(t,e),t}(u.Sprite),v=function(e){function t(){var e;n(this,t);for(var a=arguments.length,o=Array(a),i=0;a>i;i++)o[i]=arguments[i];var s=r(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(o)));return s.scale.setTo(.5),s.anchor.setTo(.5),s.game.physics.enable(s,u.Physics.ARCADE),s.body.immovable=!0,s}return o(t,e),t}(u.Sprite),w=function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),c(t,[{key:"create",value:function(){var e=this;this.game.physics.startSystem(u.Physics.ARCADE),this.game.time.advancedTiming=!0,this.stage.backgroundColor=d,this._addDistanceMarkers(this.game);var t=this.game.world.centerX,a=this.game.world.height/10*9;this.boat=this.game.add.existing(new m(this.game,t,a,"boat")),this.game.camera.follow(this.boat,u.Camera.FOLLOW_LOCKON),this.attractors=[this.game.add.existing(new b(h,this.game,.1*this.game.world.width,450)),this.game.add.existing(new b(f,this.game,.9*this.game.world.width,250))],this.obstacles=[this.game.add.existing(new v(this.game,this.game.world.centerX,150,"volcano")),this.game.add.existing(new v(this.game,this.game.world.centerX/4,150,"volcano"))];var n=this.game.add.text(this.game.world.centerX,this.game.world.height-33,"the shapes attract you!\ntap to shift active shape",{align:"center",fill:"white",fontSize:18});n.anchor.setTo(.5),this.game.input.onTap.add(this._toggleShape,this),this.game.paused=!0,this.game.input.onTap.addOnce(function(){return e.game.paused=!1},this)}},{key:"_addDistanceMarkers",value:function(e){for(var t=0;t<e.world.height;t+=100)e.add.text(1,t,t,{fill:"lightgray",fontSize:16})}},{key:"_closestAttractor",value:function(e,t){if(0==t.length)return null;var a=t.filter(function(t){return t.y<e.y}).filter(function(t){return t.shape===e.shape});if(0==a.length)return null;if(1==a.length)return a[0];var n=t.map(function(t){return{distance:e.body.center.distance(t),attractor:t}}).sort(function(e,t){var a=e.distance,n=t.distance;return a-n}).map(function(e){var t=e.attractor;return t});return n[0]}},{key:"_restart",value:function(e){this.game.paused=!1,this.state.start("Main")}},{key:"_collisionHandler",value:function(){console.log("_collisionHandler"),this._GameOverMessage(y,"DESTROYED BY IMPACT :(")}},{key:"_winHandler",value:function(){console.log("_winHandler"),this._GameOverMessage(g,"YOU ARE A WINNER :)")}},{key:"_GameOverMessage",value:function(e,t){this.game.paused=!0,this.game.physics.arcade.isPaused=!0,this.game.stage.backgroundColor=e;var a=this.game.add.text(this.game.world.centerY,this.game.world.centerY,t+"\n- tap anywhere to restart -",{align:"center"});a.anchor.x=1,this.game.input.onTap.addOnce(this._restart,this)}},{key:"_toggleShape",value:function(){this.boat.shape===h?this.boat.shape=f:this.boat.shape=h}},{key:"update",value:function(){this.game.physics.arcade.collide(this.boat,this.attractors,this._collisionHandler,null,this),this.game.physics.arcade.collide(this.boat,this.obstacles,this._collisionHandler,null,this);var e=this._closestAttractor(this.boat,this.attractors);e?(console.log(e.shape),this.game.physics.arcade.moveToXY(this.boat,e.x,e.y,e.strength)):this.boat.y>10?this.game.physics.arcade.moveToXY(this.boat,this.boat.x,0,100):this._winHandler()}},{key:"render",value:function(){this.game.debug.text(this.game.time.fps+"fps",this.game.width-50,32)}}]),t}(u.State);t["default"]=w},function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=a(1),c=a(3),l=function(e){function t(){return n(this,t),r(this,Object.getPrototypeOf(t).apply(this,arguments))}return o(t,e),i(t,[{key:"preload",value:function(){this.load.tilemap("start","maps/start.json",null,s.Tilemap.TILED_JSON),this.load.image("roguelikeSheet_transparent","images/roguelikeSheet_transparent.png");for(var e=1;e<=c.totalSections;e++)this.load.tilemap("section-"+e,"maps/section-"+e+".json",null,s.Tilemap.TILED_JSON);this.load.image("boat","images/boat.png"),this.load.image("circle","images/circle.png"),this.load.image("cross","images/cross.png"),this.load.image("mountain","images/mountain.png"),this.load.image("plus","images/plus.png"),this.load.image("poo","images/poo.png"),this.load.image("restart","images/restart.png"),this.load.image("volcano","images/volcano.png")}},{key:"create",value:function(){this.state.start("Main")}}]),t}(s.State);t["default"]=l}]);