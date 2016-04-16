webpackJsonp([1],[function(t,e,n){t.exports=n(4)},,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.totalSections=3},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),u=r(s),c=n(5),l=r(c),f=n(7),p=r(f),h=n(6),y=r(h),b=function(t){function e(){o(this,e);var t=400,n=734,r=a(this,Object.getPrototypeOf(e).call(this,{width:t,height:n,renderer:u["default"].AUTO,parent:"content",resolution:window.devicePixelRatio}));return r.state.add("Boot",l["default"],!1),r.state.add("Splash",p["default"],!1),r.state.add("Main",y["default"],!1),r.state.start("Boot"),r}return i(e,t),e}(u["default"].Game);e["default"]=b},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}var o=n(3),a=r(o);new a["default"]},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(1),u=function(t){function e(){return r(this,e),o(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),i(e,[{key:"create",value:function(){this.game.scale.scaleMode=s.ScaleManager.SHOW_ALL,this.game.scale.pageAlignHorizontally=!0,this.game.scale.pageAlignVertically=!0}},{key:"preload",value:function(){this.state.start("Splash")}}]),e}(s.State);e["default"]=u},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=function b(t,e,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,e);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:b(o,e,n)}if("value"in r)return r.value;var a=r.get;if(void 0!==a)return a.call(n)},u=n(1),c=n(2),l=Symbol["for"]("+"),f=Symbol["for"]("o"),p=function(t){function e(){var t;r(this,e);for(var n=arguments.length,a=Array(n),i=0;n>i;i++)a[i]=arguments[i];var s=o(this,(t=Object.getPrototypeOf(e)).call.apply(t,[this].concat(a)));return s.speed=0,s.shape=l,s.game.physics.enable(s,u.Physics.ARCADE),s}return a(e,t),i(e,[{key:"update",value:function(){s(Object.getPrototypeOf(e.prototype),"update",this).call(this),this.setText("B\n"+Symbol.keyFor(this.shape)+"\nB")}}]),e}(u.Text),h=function(t){function e(t){var n;r(this,e);for(var a=arguments.length,i=Array(a>1?a-1:0),s=1;a>s;s++)i[s-1]=arguments[s];var u=o(this,(n=Object.getPrototypeOf(e)).call.apply(n,[this].concat(i)));return u.shape=t,u.setText(Symbol.keyFor(t)),u.strength=100,u}return a(e,t),e}(u.Text),y=function(t){function e(){return r(this,e),o(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),i(e,[{key:"create",value:function(){this.game.physics.startSystem(u.Physics.ARCADE),this.stage.backgroundColor="#63D1F4";for(var t=0;t<this.game.world.height;t+=100)this.game.add.text(1,t,t,{fill:"lightgray"});var e=this.game.world.centerX,n=this.game.world.height/10*9;this.boat=this.game.add.existing(new p(this.game,e,n,"B")),this.boat.anchor.x=.5,this.game.camera.follow(this.boat,u.Camera.FOLLOW_LOCKON),this.cursors=this.game.input.keyboard.createCursorKeys(),this.spaceBar=this.game.input.keyboard.addKey(u.Keyboard.SPACEBAR),this.debounceUp=!1,this.debounceSpace=!1,this.attractors=[this.game.add.existing(new h(l,this.game,32,450,"?")),this.game.add.existing(new h(f,this.game,368,250,"?"))]}},{key:"_generateSectionList",value:function(){for(var t=arguments.length<=0||void 0===arguments[0]?1:arguments[0],e=["start"];e.length<=t;){var n=this.rnd.integerInRange(1,c.totalSections);e.unshift("section-"+n)}return e}},{key:"_loadSectionList",value:function(t){var e=0,n=!0,r=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done);n=!0){var s=a.value,u=this.game.add.tilemap(s);u.addTilesetImage("roguelikeSheet_transparent","roguelikeSheet_transparent");var c=u.createLayer(u.layer.name);c.fixedToCamera=!1,c.y=e,e+=16*u.height-1}}catch(l){r=!0,o=l}finally{try{!n&&i["return"]&&i["return"]()}finally{if(r)throw o}}}},{key:"_closestAttractor",value:function(t,e){if(0==e.length)return null;var n=e.filter(function(e){return e.y<t.y}).filter(function(e){return e.shape===t.shape});if(0==n.length)return null;if(1==n.length)return n[0];var r=e.map(function(e){return{distance:t.body.center.distance(e),attractor:e}}).sort(function(t,e){var n=t.distance,r=e.distance;return n-r}).map(function(t){var e=t.attractor;return e});return r[0]}},{key:"update",value:function(){this.spaceBar.isDown&&!this.debounceSpace?(console.log("SHIFT"),this.boat.shape===l?this.boat.shape=f:this.boat.shape=l,this.debounceSpace=!0):this.spaceBar.isUp&&this.debounceSpace&&(this.debounceSpace=!1);var t=this._closestAttractor(this.boat,this.attractors);t?(console.log(t.shape),this.game.physics.arcade.moveToXY(this.boat,t.x,t.y,t.strength)):this.boat.y>10?this.game.physics.arcade.moveToXY(this.boat,this.boat.x,0,100):(this.boat.body.velocity.x=0,this.boat.body.velocity.y=0)}},{key:"render",value:function(){this.game.debug.text("space bar to shift shape",32,32)}}]),e}(u.State);e["default"]=y},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(1),u=n(2),c=function(t){function e(){return r(this,e),o(this,Object.getPrototypeOf(e).apply(this,arguments))}return a(e,t),i(e,[{key:"preload",value:function(){this.load.tilemap("start","maps/start.json",null,s.Tilemap.TILED_JSON),this.load.image("roguelikeSheet_transparent","images/roguelikeSheet_transparent.png");for(var t=1;t<=u.totalSections;t++)this.load.tilemap("section-"+t,"maps/section-"+t+".json",null,s.Tilemap.TILED_JSON)}},{key:"create",value:function(){this.state.start("Main")}}]),e}(s.State);e["default"]=c}]);