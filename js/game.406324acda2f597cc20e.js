webpackJsonp([1],[function(e,t,r){e.exports=r(5)},,function(e,t){"use strict";function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0});var n,o=t.SHAPE_CROSS=Symbol["for"]("+"),a=t.SHAPE_CIRCLE=Symbol["for"]("o");t.SHAPE_MAP=(n={},r(n,o,"cross"),r(n,a,"circle"),n)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),u=n(s),c=r(10),l=n(c),f=r(12),h=n(f),p=r(11),d=n(p),y=function(e){function t(){o(this,t);var e=400,r=734,n=a(this,Object.getPrototypeOf(t).call(this,{width:e,height:r,renderer:u["default"].AUTO,parent:"content",resolution:window.devicePixelRatio}));return n.state.add("Boot",l["default"],!1),n.state.add("Splash",h["default"],!1),n.state.add("Main",d["default"],!1),n.state.start("Boot"),n}return i(t,e),t}(u["default"].Game);t["default"]=y},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.totalSections=3},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=r(3),a=n(o);new a["default"]},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=r(1),u=r(2),c=n(u),l=function(e){function t(e,r,n,i,u){var l;o(this,t);for(var f=arguments.length,h=Array(f>5?f-5:0),p=5;f>p;p++)h[p-5]=arguments[p];var d=a(this,(l=Object.getPrototypeOf(t)).call.apply(l,[this,r,n,i,c.SHAPE_MAP[e]].concat(h)));return d.scale.setTo(.33),d.anchor.setTo(.5),d.shape=e,d.strength=100,d.game.physics.enable(d,s.Physics.ARCADE),d.body.immovable=!0,d}return i(t,e),t}(s.Sprite);t["default"]=l},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function p(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:p(o,t,r)}if("value"in n)return n.value;var a=n.get;if(void 0!==a)return a.call(r)},c=r(1),l=r(2),f=n(l),h=function(e){function t(){var e;o(this,t);for(var r=arguments.length,n=Array(r),i=0;r>i;i++)n[i]=arguments[i];var s=a(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(n)));return s.scale.setTo(.5),s.anchor.setTo(.5),s.treasure=0,s.shape=f.SHAPE_CIRCLE,s.game.physics.enable(s,c.Physics.ARCADE),s.text=new c.Text(s.game,s.body.centerX,s.body.centerY,Symbol.keyFor(s.shape)),s.addChild(s.text),s}return i(t,e),s(t,[{key:"update",value:function(){u(Object.getPrototypeOf(t.prototype),"update",this).call(this),this.text.setText(Symbol.keyFor(this.shape))}}]),t}(c.Sprite);t["default"]=h},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=function(e){function t(){var e;n(this,t);for(var r=arguments.length,a=Array(r),s=0;r>s;s++)a[s]=arguments[s];var u=o(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return u.scale.setTo(.5),u.anchor.setTo(.5),u.game.physics.enable(u,i.Physics.ARCADE),u.body.immovable=!0,u}return a(t,e),t}(i.Sprite);t["default"]=s},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(1),s=function(e){function t(){var e;n(this,t);for(var r=arguments.length,a=Array(r),s=0;r>s;s++)a[s]=arguments[s];var u=o(this,(e=Object.getPrototypeOf(t)).call.apply(e,[this].concat(a)));return u.scale.setTo(.33),u.anchor.setTo(.5),u.game.physics.enable(u,i.Physics.ARCADE),u.body.immovable=!0,u}return a(t,e),t}(i.Sprite);t["default"]=s},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),u=function(e){function t(){return n(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"create",value:function(){this.game.scale.scaleMode=s.ScaleManager.SHOW_ALL,this.game.scale.pageAlignHorizontally=!0,this.game.scale.pageAlignVertically=!0}},{key:"preload",value:function(){this.state.start("Splash")}}]),t}(s.State);t["default"]=u},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t["default"]=e,t}function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(1),l=r(6),f=o(l),h=r(7),p=o(h),d=r(8),y=o(d),b=r(2),g=n(b),m=r(9),v=o(m),O="#63D1F4",w="#4CBB17",_="#992D2D",P=function(e){function t(){return a(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),u(t,[{key:"create",value:function(){var e=this;this.game.physics.startSystem(c.Physics.ARCADE),this.game.time.advancedTiming=!0,this.stage.backgroundColor=O;for(var t=0;t<this.game.world.height;t+=100)this.game.add.text(1,t,t,{fill:"lightgray",fontSize:16});var r=this.game.world.centerX,n=.9*this.game.world.height;this.boat=this.game.add.existing(new p["default"](this.game,r,n,"boat")),this.game.camera.follow(this.boat,c.Camera.FOLLOW_LOCKON),this.attractors=[this.game.add.existing(new f["default"](g.SHAPE_CROSS,this.game,.1*this.game.world.width,450)),this.game.add.existing(new f["default"](g.SHAPE_CIRCLE,this.game,.9*this.game.world.width,250))],this.obstacles=[this.game.add.existing(new y["default"](this.game,this.game.world.centerX,150,"volcano")),this.game.add.existing(new y["default"](this.game,this.game.world.centerX/4,150,"volcano"))],this.treasures=[this.game.add.existing(new v["default"](this.game,.7*this.game.world.width,200,"treasure")),this.game.add.existing(new v["default"](this.game,this.game.world.centerX,480,"treasure"))],this.treasureCount=this.game.add.text(.75*this.game.width,.95*this.game.height,""+this.boat.treasure),this.treasureCount.anchor.setTo(.5);var o=this.game.add.sprite(50,0,"treasure");o.scale.setTo(.33),o.anchor.setTo(.5),this.treasureCount.addChild(o),this.helpText=this.game.add.text(.1*this.game.world.width,.92*this.game.world.height,"the shapes attract you!\ntap to shift active shape",{align:"left",fill:"white",fontSize:18}),this.game.input.onTap.add(this._toggleShape.bind(this)),this.game.paused=!0,this.game.input.onTap.addOnce(function(){return e.game.paused=!1},this)}},{key:"_addDistanceMarkers",value:function(e){for(var t=0;t<e.world.height;t+=100)e.add.text(1,t,t,{fill:"lightgray",fontSize:16})}},{key:"_closestAttractor",value:function(e,t){if(0==t.length)return null;var r=t.filter(function(t){return t.y<e.y}).filter(function(t){return t.shape===e.shape});if(0==r.length)return null;if(1==r.length)return r[0];var n=t.map(function(t){return{distance:e.body.center.distance(t),attractor:t}}).sort(function(e,t){var r=e.distance,n=t.distance;return r-n}).map(function(e){var t=e.attractor;return t});return n[0]}},{key:"_GameOver",value:function(e,t){var r;this.game.physics.arcade.isPaused=!0,this.game.stage.backgroundColor=e;var n=this.game.add.text(this.game.world.centerY,this.game.world.centerY,t+"\n- tap anywhere to restart -",{align:"center"});n.anchor.x=1,this.game.input.onTap.addOnce((r=this.game.state).restart.bind(r))}},{key:"_toggleShape",value:function(){this.boat.shape===g.SHAPE_CROSS?this.boat.shape=g.SHAPE_CIRCLE:this.boat.shape=g.SHAPE_CROSS}},{key:"update",value:function(){var e=this,t=this.game.physics.arcade.collide(this.boat,this.attractors),r=this.game.physics.arcade.collide(this.boat,this.obstacles);(t||r)&&this._GameOver(_,"DESTROYED BY IMPACT :("),this.game.physics.arcade.collide(this.boat,this.treasures,function(t,r){t.treasure+=1,r.kill(),e.treasureCount.setText(e.boat.treasure)});var n=this._closestAttractor(this.boat,this.attractors);n?this.game.physics.arcade.moveToXY(this.boat,n.x,n.y,n.strength):this.boat.y>10?this.game.physics.arcade.moveToXY(this.boat,this.boat.x,0,100):this._GameOver(w,"YOU ARE A WINNER :)")}},{key:"render",value:function(){this.game.debug.text(this.game.time.fps+"fps",this.game.width-50,32)}}]),t}(c.State);t["default"]=P},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(1),u=r(4),c=function(e){function t(){return n(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),i(t,[{key:"preload",value:function(){this.load.tilemap("start","maps/start.json",null,s.Tilemap.TILED_JSON),this.load.image("roguelikeSheet_transparent","images/roguelikeSheet_transparent.png");for(var e=1;e<=u.totalSections;e++)this.load.tilemap("section-"+e,"maps/section-"+e+".json",null,s.Tilemap.TILED_JSON);this.load.image("boat","images/boat.png"),this.load.image("circle","images/circle.png"),this.load.image("cross","images/cross.png"),this.load.image("mountain","images/mountain.png"),this.load.image("plus","images/plus.png"),this.load.image("poo","images/poo.png"),this.load.image("restart","images/restart.png"),this.load.image("treasure","images/treasure.png"),this.load.image("volcano","images/volcano.png")}},{key:"create",value:function(){this.state.start("Main")}}]),t}(s.State);t["default"]=c}]);