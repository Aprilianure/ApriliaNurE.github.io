// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Swipe/utils":function(){define(["dojo/_base/lang","dojo/_base/array","dojo/_base/Color","dojo/_base/html"],function(q,p,e,h){var b={defaultColor:"#dadada",handlerPosition:{top:null,bottom:null,left:null,right:null},_isNewAddedLayer:function(a,b){b=b.getLayerInfoArrayOfWebmap();for(var d=0,e=b.length;d<e;d++)if(b[d].id===a.id)return!1;return!0},zoomToCurrentLayer:function(a){var b=a.config.isZoom,d=a.layerInfosObj;a=a.getSelection();var e;a&&a[0]&&(e=a[0]);b&&e&&(b=d.getLayerInfoById(e))&&
b.zoomTo&&b.zoomTo()},shouldHideInfoWindow:function(a,b){if(!b.map.infoWindow.isShowing)return!1;var d=b.map.infoWindow.getSelectedFeature();return a&&p.some(a,function(a){var e=d&&d.getLayer&&d.getLayer(),k=b.layerInfosObj.getLayerInfoById(a.id),k=e&&k&&k.traversal(function(a){return a.id===e.id});return e===a||k},b)},getVisibleLayerInfos:function(a,b){a=a.getLayerInfoArray();if(b){for(var d=[],e=0,h=a.length;e<h;e++){var k=a[e];if(k.isShowInMap())d.push(k);else for(var r=0,t=b.length;r<t;r++)b[r]===
k.id&&d.push(k)}return d}return p.filter(a,function(a){return a.isShowInMap()})},isTherePreconfiguredLayer:function(a,b){if(b)return!0;if(a&&a.layerState){a=a.layerState;for(var d in a)if(a.hasOwnProperty(d)&&!0===a[d].selected)return!0}return!1},processColor:function(a){return a?new e(a):new e(b.defaultColor)},getScreenMiddle:function(a){var b=0,d=0;a&&(a.root?(a=h.getMarginBox(a.root),b=a.w/2,d=a.h/2):a.width&&a.height&&(b=a.width/2,d=a.height/2));return{left:b,top:d}},hideSelectorPopup:function(a){h.addClass(a,
"hide")},showSelectorPopup:function(a){h.removeClass(a,"hide")},hackToRefreshSwipe:function(a){setTimeout(q.hitch(a,function(){a.swipeDijit.swipe&&a.swipeDijit.swipe()}),200)},cleanHandlerPosition:function(){b.handlerPosition={top:null,bottom:null,left:null,right:null}},isCacheHandlerPosition:function(){return b.handlerPosition.top||b.handlerPosition.bottom||b.handlerPosition.left||b.handlerPosition.right?!0:!1},saveHandlerPosition:function(a){a&&(b.handlerPosition.top=a.top,b.handlerPosition.bottom=
a.bottom,b.handlerPosition.left=a.left,b.handlerPosition.right=a.right)},setHandlerPosition:function(a,e,d){e.style&&"scope"===e.style?(b.handlerPosition.top&&(a.top=b.handlerPosition.top-9),b.handlerPosition.bottom&&(a.bottom=b.handlerPosition.bottom),b.handlerPosition.left&&(a.left=b.handlerPosition.left-9),b.handlerPosition.right&&(a.right=b.handlerPosition.right)):e.invertPlacement?(b.handlerPosition.right&&(a.right=b.handlerPosition.right),b.handlerPosition.left&&(a.left=b.handlerPosition.left),
b.handlerPosition.bottom&&(a.bottom=b.handlerPosition.bottom),b.handlerPosition.top&&(a.top=b.handlerPosition.top)):(b.handlerPosition.right&&(a.left=b.handlerPosition.right),b.handlerPosition.left&&(a.right=b.handlerPosition.left),b.handlerPosition.bottom&&(a.top=b.handlerPosition.bottom),b.handlerPosition.top&&(a.bottom=b.handlerPosition.top));0>a.top&&(a.top=0);a.top>d.height&&(a.top=d.height);0>a.left&&(a.left=0);a.left>d.width&&(a.left=d.width)},getLayerNode:function(a){return a._heatmapManager&&
a._heatmapManager.imageLayer&&a._heatmapManager.imageLayer._div||a._div},getLayerTransform:function(a,e){var d=a.layer;a={dx:0,dy:0};if(d.getNavigationTransform)a=d.getNavigationTransform();else if(d._getTransform){if(e=d._getTransform())a.dx=e.dx,a.dy=e.dy}else(d=b.getLayerNode(d).style)&&"css-transforms"===e.map.navigationMode&&(d=e._getTransformValue(d))&&(e=e._parseTransformValue(d),a.dx=e.x,a.dy=e.y);return a}};return b})},"widgets/Swipe/MultSelector/MultSelector":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/on dojo/query dojo/_base/html dojo/text!./MultSelector.html jimu/dijit/CheckBox dijit/form/Select dojox/form/CheckedMultiSelect dijit/form/ValidationTextBox xstyle/css!dojox/form/resources/CheckedMultiSelect.css".split(" "),
function(q,p,e,h,b,a,t,d,n,u){return p([h,b,a,q],{templateString:u,_LAST_VALUEL:"",postCreate:function(){this.inherited(arguments)},startup:function(){this.own(t(this.selector,"click",e.hitch(this,function(a){"INPUT"===a.target.nodeName&&this.selector.dropDownButton.toggleDropDown();a=d(".dijitReset.dijitMenuItemLabel",this.selector.dropDown.domNode);for(var b=0,e=a.length;b<e;b++){var k=a[b];n.attr(k,"title",k.innerText)}})));this.own(t(this.selector,"change",e.hitch(this,function(a){this._updateMultSelectorLabel(this._getOptionsLabelsByValues(a));
this._LAST_VALUEL.toString()!==a.toString()&&(this.selector.dropDownButton.toggleDropDown(),this.selector.dropDownButton.toggleDropDown(),this.emit("change",a),this._LAST_VALUEL=a)})));this.inherited(arguments)},initOptions:function(a,b){this.disable();this._initMultSelectorLabel();var d=null;b&&(d=this.selector.getOptions());this.selector.removeOption(this.selector.getOptions());for(var e=[],f=0,m=a.length;f<m;f++){var l=a[f];this.selector.addOption(l);this._hasOptionMultSelected(l,b?d:a)&&e.push(l.value)}this.selector.set("value",
e);this._updateMultSelectorLabel(this._getOptionsLabelsByValues(e));this.enable()},setOptions:function(a){this.selector.set("options",a)},getOptions:function(){return this.selector.get("options")},reset:function(){this.selector.set("options",[{value:"",label:""}]);this.selector.reset()},setValue:function(a){this.setConfig(a)},setConfig:function(a){this._setMultSelectorEmpty();this.selector.set("value",a)},getConfig:function(){return this.selector.getValue()},disable:function(){this.selector.set("disabled",
!0);this._DISABLED=!0},enable:function(){this.selector.set("disabled",!1);this._DISABLED=!1},_initMultSelectorLabel:function(){this.selector.labelDiv&&(n.empty(this.selector.labelDiv),n.destroy(this.selector.labelDiv),this.selector.labelDiv=null);var a=d(".dijitButtonText",this.selector.dropDownButton.buttonNode)[0];n.addClass(a,"hide");this.selector.labelDiv=n.create("div",{"class":"dijitReset dijitInline dijitButtonText multselector-label-container"},a,"after");n.addClass(this.selector.labelDiv,
"label-max-height");n.addClass(this.selector.dropDownMenu.domNode,"mult-selector-dropdown-max-height");this._updateMultSelectorLabel([this.nls.defaultLayerHolder])},_setMultSelectorEmpty:function(){this.selector.set("value",[]);this._updateMultSelectorLabel([this.nls.defaultLayerHolder])},_updateMultSelectorLabel:function(a){n.empty(this.selector.labelDiv);a&&0!==a.length||this._setMultSelectorEmpty();for(var b=0,d=a.length;b<d;b++)n.create("div",{"class":"dijitReset dijitButtonText multselector-label",
innerHTML:a[b]},this.selector.labelDiv)},_getOptionsLabelsByValues:function(a){for(var b=this.getOptions(),d=[],e=0,f=b.length;e<f;e++)for(var m=b[e],l=0,h=a.length;l<h;l++)m.value===a[l]&&d.push(m.label);return d},_hasOptionMultSelected:function(a,b){for(var d=0,e=b.length;d<e;d++){var f=b[d];if(f.value===a.value&&!0===f.selected)return!0}return!1}})})},"esri/dijit/LayerSwipe":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel dijit/_WidgetBase dijit/_TemplatedMixin dojo/on dojo/text!./templates/LayerSwipe.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style dojo/dnd/move dojo/dnd/Mover dojo/sniff dojo/dom-geometry ../geometry/Point dojo/Deferred dojo/promise/all".split(" "),
function(q,p,e,h,b,a,t,d,n,u,k,r,v,w,f,m,l,x,y){var B=p([w],{onFirstMove:function(c){var a=this.node.style,f,b=this.host;switch(a.position){case "relative":case "absolute":f=Math.round(parseFloat(a.left))||0;a=Math.round(parseFloat(a.top))||0;break;default:a.position="absolute",a=m.getMarginBox(this.node),f=a.l,a=a.t}this.marginBox.l=f-this.marginBox.l;this.marginBox.t=a-this.marginBox.t;if(b&&b.onFirstMove)b.onFirstMove(this,c);this.events.shift().remove()}});q=p("esri.dijit.LayerSwipe",[a,t,q],
{templateString:n,options:{theme:"LayerSwipe",layers:[],enabled:!0,type:"vertical",invertPlacement:!1,clip:9},constructor:function(c,a){c=e.mixin({},this.options,c);this.domNode=a;this._i18n=u;this.set("map",c.map);this.set("layers",c.layers);this.set("top",c.top);this.set("left",c.left);this.set("theme",c.theme);this.set("enabled",c.enabled);this.set("type",c.type);this.set("clip",c.clip);this.set("invertPlacement",c.invertPlacement);this.watch("theme",this._updateThemeWatch);this.watch("enabled",
this._enabled);this.watch("type",this._type);this.watch("invertPlacement",this._invertPlacement);this._css={handleContainer:"handleContainer",handle:"handle"};this._listeners=[]},startup:function(){this.inherited(arguments);this.map||(this.destroy(),console.log("LayerSwipe::map required"));this.set("layers",this.layers);this.layers.length||(this.destroy(),console.log("LayerSwipe::layer required"));this._allLoaded().then(e.hitch(this,function(){this._init()}),function(c){console.log("LayerSwipe::"+
c.message)})},destroy:function(){this._removeEvents();this._unclipLayers();this.inherited(arguments)},swipe:function(){this._swipe()},enable:function(){this.set("enabled",!0)},disable:function(){this.set("enabled",!1)},_allLoaded:function(){for(var c=[],a=0;a<this.layers.length;a++){"string"===typeof this.layers[a]&&(this.layers[a]=this.map.getLayer(this.layers[a]),this.layers[a]||console.log("LayerSwipe::Could not get layer by ID"));var f=new x;this.layers[a].loaded?f.resolve("layer loaded"):this._layerLoadedPromise(a,
f);c.push(f.promise)}var b=new x;if(this.map.loaded)b.resolve("map loaded");else d.once(this.map,"load",e.hitch(this,function(){b.resolve("map loaded")}));c.push(b.promise);return y(c)},_layerLoadedPromise:function(c,a){d.once(this.layers[c],"load",function(){a.resolve("layer loaded")})},_mb:function(){var c=m.getMarginBox(this.map.root);return{t:0,l:0,w:c.l+c.w,h:c.h+c.t}},_setInitialPosition:function(){var c,a,f,b,d,e,l;a=c=0;b=m.getMarginBox(this._moveableNode);f=this.get("type");d=this.get("top");
e=this.get("left");l=this.get("invertPlacement");"scope"===f?(a="undefined"!==typeof d?d:this.map.height/2-b.h/2,c="undefined"!==typeof e?e:this.map.width/2-b.w/2):"horizontal"===f?(a=this.map.height/4-b.h/2,a="undefined"!==typeof d?d:l?this.map.height-a:a):(c=this.map.width/4-b.w/2,c="undefined"!==typeof e?e:l?this.map.width-c:c);r.set(this._moveableNode,{top:a+"px",left:c+"px"})},_setSwipeType:function(){var c=this.get("moveable"),a=this.get("type");a&&(c&&c.destroy(),k.add(this._moveableNode,a),
c=new v.parentConstrainedMoveable(this._moveableNode,{area:"content",within:!0,handle:this._moveableNode,constraints:e.hitch(this,this._mb),mover:B}),this.set("moveable",c),this._setInitialPosition())},_init:function(){this._setSwipeType();this._setupEvents();this._enabled();this.set("loaded",!0);this.emit("load",{});this.swipe()},_removeEvents:function(){if(this._listeners&&this._listeners.length)for(var c=0;c<this._listeners.length;c++)this._listeners[c]&&this._listeners[c].remove();this._listeners=
[]},_repositionMover:function(){var c=m.getMarginBox(this._moveableNode);c&&(c.t>this.map.height||0>c.t||c.l>this.map.width||0>c.l)&&this._setInitialPosition()},_setupEvents:function(){this._removeEvents();this._mapResize=d.pausable(this.map,"resize",e.hitch(this,function(){this._repositionMover()}));this._listeners.push(this._mapResize);this._swipeMove=d.pausable(this.moveable,"Move",e.hitch(this,function(){this.swipe()}));this._listeners.push(this._swipeMove);this._swipePanEnd=d.pausable(this.map,
"pan-end",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._swipePanEnd);this._mapUpdateStart=d.pausable(this.map,"update-start",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._mapUpdateStart);this._mapUpdateEnd=d.pausable(this.map,"update-end",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._mapUpdateEnd);this._swipePan=d.pausable(this.map,"pan",e.hitch(this,function(){this._swipe()}));this._listeners.push(this._swipePan);this._toolClick=d.pausable(this._moveableNode,
"click",e.hitch(this,function(c){if("scope"===this.get("type")){c=this._clickPosition(c);try{this.map.onClick(c,"other")}catch(z){console.log("LayerSwipe::scope click error")}this._clickCoords=null}}));this._listeners.push(this._toolClick);this._toolDblClick=d.pausable(this._moveableNode,"dblclick",e.hitch(this,function(c){if("scope"===this.get("type")){c=this._clickPosition(c);try{this.map.navigationManager.mouseEvents.onDblClick(c,"other")}catch(z){console.log("LayerSwipe::scope dblclick error")}this._clickCoords=
null}}));this._listeners.push(this._toolDblClick);this._evtCoords=d.pausable(this.moveable,"MouseDown",e.hitch(this,function(c){"scope"===this.get("type")&&(this._clickCoords={x:c.x,y:c.y})}));this._listeners.push(this._evtCoords)},_clickPosition:function(c){if(this._clickCoords&&this._clickCoords.x===c.x&&this._clickCoords.y===c.y){var a=m.position(this.map.root,!0),f=c.pageX-a.x,a=c.pageY-a.y;c.x=f;c.y=a;c.screenPoint={x:f,y:a};c.mapPoint=this.map.toMap(new l(f,a,this.map.spatialReference))}return c},
_getLayerNode:function(c){return c._heatmapManager&&c._heatmapManager.imageLayer&&c._heatmapManager.imageLayer._div||c._div},_positionValues:function(c){var a,f,b,d,e,l,g={layer:c,layerNode:this._getLayerNode(c),layerGraphics:c._heatmapManager?null:c.graphics,swipeType:this.get("type"),l:0,r:0,t:0,b:0};b=this.get("clip");l=this.get("invertPlacement");c=m.getMarginBox(this._moveableNode);if("vertical"===g.swipeType||"horizontal"===g.swipeType)g.layerNode&&(a=m.getMarginBox(g.layerNode),d=Math.abs(a.t),
e=Math.abs(a.l)),f=m.getMarginBox(this.map.root);"vertical"===g.swipeType?(l?a&&0<a.l?(g.l=c.l-e,g.r=this.map.width-e):a&&0>a.l?(g.l=c.l+e,g.r=this.map.width+e):(g.l=c.l,g.r=this.map.width):a&&0<a.l?(g.l=0-e,g.r=c.l-e):a&&0>a.l?(g.l=0+e,g.r=c.l+e):(g.l=0,g.r=c.l),a&&0<a.t?(g.t=0-d,g.b=f.h-d):a&&0>a.t?(g.t=0+d,g.b=f.h+d):(g.t=0,g.b=f.h)):"horizontal"===g.swipeType?(l?a&&0<a.t?(g.t=c.t-d,g.b=this.map.height-d):a&&0>a.t?(g.t=c.t+d,g.b=this.map.height+d):(g.t=c.t,g.b=this.map.height):a&&0<a.t?(g.t=0-
d,g.b=c.t-d):a&&0>a.t?(g.t=0+d,g.b=c.t+d):(g.t=0,g.b=c.t),a&&0<a.l?(g.l=0-e,g.r=f.w-e):a&&0>a.l?(g.l=0+e,g.r=f.w+e):(g.l=0,g.r=f.w)):"scope"===g.swipeType&&(g.layerGraphics?(g.l=c.l,g.r=c.w,g.t=c.t,g.b=c.h,"undefined"!==typeof b&&(g.l+=b,g.r+=-(2*b),g.t+=b,g.b+=-(2*b))):(g.l=c.l,g.r=g.l+c.w,g.t=c.t,g.b=g.t+c.h,"undefined"!==typeof b&&(g.l+=b,g.r+=-b,g.t+=b,g.b+=-b)));return g},_clipLayer:function(a){if(a.layerNode)if(a.layerGraphics){var c=a.layer.getNavigationTransform();c&&(c.hasOwnProperty("dx")&&
(a.l+=-c.dx),c.hasOwnProperty("dy")&&(a.t+=-c.dy));a.layerNode.setClip({x:a.l,y:a.t,width:a.r,height:a.b})}else{if(c=a.layerNode.style,a&&c&&a.hasOwnProperty("r")&&a.hasOwnProperty("l")&&a.hasOwnProperty("t")&&a.hasOwnProperty("b"))"css-transforms"===this.map.navigationMode?c&&(c=this._getTransformValue(c))&&(c=this._parseTransformValue(c),a.l-=c.x,a.r-=c.x,a.t-=c.y,a.b-=c.y):c&&"scope"===a.swipeType&&(c=this._parseScopeStyle(c),a.l-=c.x,a.r-=c.x,a.t-=c.y,a.b-=c.y),c=f("ie"),r.set(a.layerNode,"clip",
c&&8>c?"rect("+a.t+"px "+a.r+"px "+a.b+"px "+a.l+"px)":"rect("+a.t+"px, "+a.r+"px, "+a.b+"px, "+a.l+"px)")}else console.log("LayerSwipe::Invalid layer type")},_swipe:function(){if(this.get("loaded")&&this.get("enabled")){var a={layers:[]};if(this.layers&&this.layers.length)for(var f=0;f<this.layers.length;f++){var b=this._positionValues(this.layers[f]);this._clipLayer(b);a.layers.push({layer:this.layers[f],left:b.l,right:b.r,top:b.t,bottom:b.b})}this.emit("swipe",a)}},_getTransformValue:function(a){var c,
f;if(a){f=["transform","-webkit-transform","-ms-transform","-moz-transform","-o-transform"];for(var b=0;b<f.length&&!(c=a[f[b]]);b++){try{c=a.getPropertyValue(f[b])}catch(C){}if(c)break}}return c},_parseTransformValue:function(a){var c={x:0,y:0};-1!==a.toLowerCase().indexOf("translate3d")?a=a.replace("translate3d(","").replace(")","").replace(/px/ig,"").replace(/\s/i,"").split(","):-1!==a.toLowerCase().indexOf("translate")&&(a=a.replace("translate(","").replace(")","").replace(/px/ig,"").replace(/\s/i,
"").split(","));try{c.x=parseFloat(a[0]),c.y=parseFloat(a[1])}catch(A){console.log("LayerSwipe::Error parsing transform number")}return c},_parseScopeStyle:function(a){var c={x:0,y:0};try{c.x=parseFloat(a.left.replace(/px/ig,"").replace(/\s/i,"")),c.y=parseFloat(a.top.replace(/px/ig,"").replace(/\s/i,""))}catch(A){console.log("LayerSwipe::Error parsing div style float")}return c},_updateThemeWatch:function(a,f,b){k.remove(this.domNode,f);k.add(this.domNode,b)},_type:function(a,f){f&&k.remove(this._moveableNode,
f);this._setSwipeType();this._setupEvents();this.swipe()},_pauseEvents:function(){if(this._listeners&&this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a].pause()},_resumeEvents:function(){if(this._listeners&&this._listeners.length)for(var a=0;a<this._listeners.length;a++)this._listeners[a].resume()},_unclipLayers:function(){if(this.get("loaded")&&this.layers&&this.layers.length)for(var a=0;a<this.layers.length;a++){var b=this._getLayerNode(this.layers[a]),d=this.layers[a].graphics;
b&&(d?(b.setClip&&b.setClip(null),r.set(b.rawNode||b,"clip","")):(d=f("ie"),r.set(b,"clip",d&&8>d?"rect(auto auto auto auto)":"auto")))}},_invertPlacement:function(){this.swipe()},_enabled:function(){this.get("enabled")?(r.set(this.domNode,"display","block"),this._resumeEvents(),this.swipe()):(this._pauseEvents(),r.set(this.domNode,"display","none"),this._unclipLayers())}});h("extend-esri")&&e.setObject("dijit.LayerSwipe",q,b);return q})},"widgets/Swipe/_build-generate_module":function(){define(["dojo/text!./Widget.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Swipe/MultSelector/MultSelector.html":'\x3cdiv class\x3d"mult-selector"\x3e\r\n\t\x3cdiv data-dojo-type\x3d"dojox/form/CheckedMultiSelect" multiple\x3d"true" dropDown\x3d"true"\r\n\t\tdata-dojo-attach-point\x3d"selector"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',"url:esri/dijit/templates/LayerSwipe.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv title\x3d"${_i18n.widgets.layerSwipe.title}" data-dojo-attach-point\x3d"_moveableNode"\x3e\r\n        \x3cdiv class\x3d"${_css.handleContainer}"\x3e\r\n            \x3cdiv class\x3d"${_css.handle}"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Swipe/Widget.html":'\x3cdiv class\x3d"jimu-widget-swipe"\x3e\r\n\t\x3cdiv class\x3d"swipe-layer-menu" data-dojo-attach-point\x3d"swipeLayersMenu"\x3e\r\n\t\t\x3cdiv class\x3d"swipe-icon jimu-float-trailing" data-dojo-attach-point\x3d"swipeIcon"\x3e\r\n\t\t\t\x3cdiv class\x3d"swipe-icon-inner" data-dojo-attach-point\x3d"swipeImg"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"titles" data-dojo-attach-point\x3d"titlesNode "\x3e\r\n\t\t\t\x3cdiv class\x3d"hint" data-dojo-attach-point\x3d"hintNode"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"show-detail-icon" data-dojo-attach-point\x3d"showDetailIcon" title\x3d"${nls.hideList}"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"selectors" data-dojo-attach-point\x3d"selectorsContainer"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"singleLayersContainer"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"singleSelectorContainer"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"multLayersContainer" class\x3d"hide mult-layers-container"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"multSelectorContainer"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"layerSwipe"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Swipe/css/style.css":'.mult-selector .dojoxCheckedMultiSelect{width: 100%;}.mult-selector .label-max-height{max-height: 84px; overflow-y: auto;}.mult-selector .dojoxCheckedMultiSelect .dojoxCheckedMultiSelectButton{width: 100%; border: none !important; background-color: transparent !important; table-layout: fixed;}.mult-selector .dojoxCheckedMultiSelect .dojoxCheckedMultiSelectButton .multselector-label-container{width: 100%; overflow-x: hidden;}.mult-selector .dojoxCheckedMultiSelect .dojoxCheckedMultiSelectButton .multselector-label-container::-webkit-scrollbar{background:#000;} .mult-selector .dojoxCheckedMultiSelect .dojoxCheckedMultiSelectButton .dijitButtonNode .dijitButtonContents .multselector-label-container .multselector-label{width: 100%; height: 26px; text-align: left !important; padding: 4px 10px; text-overflow: ellipsis; white-space: nowrap; table-layout: fixed; overflow: hidden;}.jimu-rtl .mult-selector .dojoxCheckedMultiSelect .dojoxCheckedMultiSelectButton .dijitButtonNode .dijitButtonContents .multselector-label-container .multselector-label{text-align: right !important;}.mult-selector .dojoxCheckedMultiSelect .dojoxCheckedMultiSelectButton .dijitArrowButton {width: 16px; background-color: transparent;}.mult-selector .dojoxCheckedMultiSelectHover .dijitDownArrowButtonHover,.mult-selector .dojoxCheckedMultiSelectButtonFocused .dijitArrowButton{background-color: transparent !important;}.mult-selector .dojoxCheckedMultiSelect .dojoxCheckedMultiSelectButton .dijitButtonContents {border: none;}.dijitMenuPopup .dojoxCheckedMultiSelectMenu.mult-selector-dropdown-max-height{max-height: 260px; overflow-y: auto;}.dijitMenuPopup .dojoxCheckedMultiSelectMenu .dijitMenuTable {background-color: transparent; table-layout: fixed;}.dijitMenuPopup .dojoxCheckedMultiSelectMenu .dijitMenuTable .dijitMenuItem{height: 26px;}.dijitMenuPopup .dojoxCheckedMultiSelectMenu .dijitMenuTable .dijitMenuItem,.dijitMenuPopup .dojoxCheckedMultiSelectMenu .dijitMenuTable .dijitMenuItem td{border: none;}.dijitMenuPopup .dojoxCheckedMultiSelectMenu .dijitReset .dijitMenuItemIconCell{width: 36px; padding: 0 10px; padding: 3px 10px; border: none;}.dijitMenuPopup .dojoxCheckedMultiSelectMenu .dojoxCheckedMultiSelectSelectedOption{height: 26px;}.dijitMenuPopup .dojoxCheckedMultiSelectMenu .dojoxCheckedMultiSelectCheckBoxInput{display: none;} .claro .LaunchpadTheme .mult-selector .dijitDropDownButton .dijitArrowButtonInner:before,.claro .LaunchpadTheme .mult-selector .dijitArrowButton:before {content: "n"; display: none;}.claro .LaunchpadTheme .jimu-widget-swipe .mult-selector .dijitArrowButton {padding: 0;}.jimu-widget-swipe {border-radius: 5px; transition: all 0.6s;}.jimu-widget-swipe.hide,.jimu-widget-swipe .hide{display: none;}.jimu-widget-swipe.transparent{opacity: 0.5;}.jimu-widget-swipe .swipe-icon{width: 30px; height: 100%; padding: 5px; cursor: pointer;}.jimu-widget-swipe .swipe-icon .swipe-icon-inner{width: 20px; height: 20px; background-position: center; background-repeat: no-repeat; background-image: url("images/loading.gif");}.jimu-widget-swipe .swipe-icon.swipe-icon-loaded{width: 50px; height: 18px; padding: 0; display: none;}.jimu-widget-swipe .swipe-layer-menu{width: 315px; font-size: 14px; padding: 14px; z-index: 50; color: #fff; background: #474747;}.jimu-rtl .jimu-widget-swipe .swipe-layer-menu{right: 32px; left: auto;}.jimu-widget-swipe .swipe-layer-menu .hint{display: inline-block; font-weight: bold; width: 100%;}.jimu-widget-swipe .swipe-layer-menu .show-detail-icon{width: 12px; height: 16px; background-position: center; background-repeat: no-repeat; background-image: url("images/up.svg");}.jimu-widget-swipe .swipe-layer-menu .show-detail-icon:hover{background-image: url("images/up_hover.svg");}.jimu-widget-swipe .swipe-layer-menu .show-detail-icon.fold{background-image: url("images/down.svg");}.jimu-widget-swipe .swipe-layer-menu .show-detail-icon.fold:hover{background-image: url("images/down_hover.svg");}.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelect {color: #FFF; background-color:transparent !important; table-layout: fixed;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelect .dijitInputField {padding: 1px 10px; overflow: hidden; width: 100%;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelect .dijitInputField .dijitSelectLabel.dijitValidationTextBoxLabel{text-overflow: ellipsis; white-space: nowrap; overflow: hidden; text-align: initial; width: 100%;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelectHover,.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelectFocused {border-color:#b5bcc7;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitArrowButton{padding: 0; border: none; background-image: none;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelect .dijitButtonContents {border-style: none; border-width: 0; background: transparent !important;}.claro .jimu-widget-swipe .swipe-layer-menu .dijitSelect .dijitArrowButton {border-style: none; border-width: 0; background: transparent; width: 16px !important;}.jimu-widget-swipe .titles{display: flex; justify-content: center; align-items: center;}.jimu-widget-swipe .selectors{padding-top: 10px;}.jimu-widget-swipe .mult-layers-container{border: 1px solid #b5bcc7; width: 287px;}.jimu-widget-swipe-popup{width: 287px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; table-layout: fixed;}.jimu-widget-swipe-popup::-webkit-scrollbar-thumb{-webkit-border-radius:4px; border-radius:4px; background:#666;}.jimu-widget-swipe-popup::-webkit-scrollbar{background:#000;} .jimu-widget-swipe-popup.dijitMenu .dijitMenuItemSelected{border: none; background-image: none; background: transparent;}.jimu-widget-swipe-popup.dijitMenu .dijitMenuItemSelected td {color: #FFF; background-color: transparent; background-image: none;}.jimu-widget-swipe-popup.dijitMenu .dijitReset {color: #FFF; width: 100%; background-color: transparent;}.jimu-widget-swipe-popup.dijitMenu.dojoxCheckedMultiSelectMenu,.jimu-widget-swipe-popup.dijitMenuTable.dijitSelectMenu {background: #2A2A2A; height: 100%; height: calc(100% + 4px); overflow: hidden auto !important;}.jimu-widget-swipe-popup.dijitMenu .dijitMenuItem td{border-width: 0; border: none; overflow-x: hidden; text-overflow: ellipsis; white-space: nowrap; table-layout: fixed; padding: 4px;}.jimu-widget-swipe-popup.dijitMenu .dijitMenuItemHover td{background: #4A4A4A; color: #FFF;}',
"*now":function(q){q(['dojo/i18n!*preload*widgets/Swipe/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/html dojo/query dojo/on dojo/Deferred ./utils ./MultSelector/MultSelector jimu/BaseWidget jimu/LayerInfos/LayerInfos dijit/_WidgetsInTemplateMixin esri/dijit/LayerSwipe dijit/form/Select".split(" "),function(q,p,e,h,b,a,t,d,n,u,k,r,v,w){return q([u,r],{baseClass:"jimu-widget-swipe",swipeDijit:null,layerInfosObj:null,_loadDef:null,_obtainedLabelLayers:[],_LAST_SELECTED:null,getSwipeModeByConfig:function(){this._SWIPE_MODE="";this.config.layerMode&&
"mult"===this.config.layerMode?(this._SWIPE_MODE="mult",h.addClass(this.singleLayersContainer,"hide"),h.removeClass(this.multLayersContainer,"hide")):(this._SWIPE_MODE="single",h.removeClass(this.singleLayersContainer,"hide"),h.addClass(this.multLayersContainer,"hide"));return this._SWIPE_MODE},createSelector:function(){"mult"===this._SWIPE_MODE?(this.multLayersSelector=new n({nls:this.nls},this.multSelectorContainer),this.multLayersSelector.startup(),this.own(a(this.multLayersSelector,"change",e.hitch(this,
this.onSwipeLayersChange)))):(this.singleSelector=new w({style:"width:100%"},this.singleSelectorContainer),this.own(a(this.singleSelector,"Change",e.hitch(this,this.onSwipeLayersChange))),this.own(a(this.singleSelector,"Click",e.hitch(this,this.onSwipeLayersClick))),this.own(a(this.singleSelector.dropDown.domNode,"mouseenter",e.hitch(this,this.onDropMouseEnter))),this.own(a(this.singleSelector.dropDown.domNode,"mouseleave",e.hitch(this,this.onDropMouseLeave))),this.own(a(this.swipeLayersMenu,"mouseleave",
e.hitch(this,this.onMenuMouseLeave))))},setDefaultOptions:function(a,b){var f=[];if(this.config.layerState){if(d.isTherePreconfiguredLayer(this.config)){var m=this.config.layerState,h;for(h in m)if(m.hasOwnProperty(h)&&!0===m[h].selected){var k=this.layerInfosObj.getLayerInfoById(h);k&&k.isShowInMap()&&f.push({value:h,label:k.title})}}m=0;for(h=a.length;m<h;m++)k=a[m],d._isNewAddedLayer(k,this.layerInfosObj)&&k.isShowInMap()&&f.push({value:k.id,label:k.title})}else f=p.map(a,e.hitch(this,function(a){return{label:a.title,
value:a.id}}));var c;a=0;for(m=f.length;a<m;a++)if(h=f[a],this._LAST_SELECTED&&this._LAST_SELECTED.mode===this.config.layerMode)for(var k=0,n=this._LAST_SELECTED.selected.length;k<n;k++)h.value===this._LAST_SELECTED.selected[k]&&(h.selected=!0,c=h.value);else this._isDefaultSelectedOption(h)&&(h.selected=!0,c=h.value);b&&"mult"!==this._SWIPE_MODE&&(c=this.singleSelector.get("value"));"mult"===this._SWIPE_MODE?this.multLayersSelector.initOptions(f,b):this.singleSelector.set("options",f);this.disableSelectors();
b=this.getSelection();"mult"===this._SWIPE_MODE?b&&b.length&&0===b.length&&(c=this.multLayersSelector.getOptions())&&"undefined"!==c.length&&0<c.length&&c[0].value&&this.multLayersSelector.setValue(c[0].value):c?this.singleSelector.set("value",c):b&&b.length&&1===b.length&&this.singleSelector.options&&"undefined"!==this.singleSelector.options.length&&0<this.singleSelector.options.length&&this.singleSelector.options[0].value?this.singleSelector.set("value",this.singleSelector.options[0].value):this.singleSelector.set("value",
null);this._LAST_SELECTED={mode:this._SWIPE_MODE,selected:this.getSelection()};this.enableSelectors();this.toggleSelectorPopup()},_isSwipeBaseMap:function(){var a=this.getSelection();if(a&&a.length)for(var b=0,d=a.length;b<d;b++){var e=this.layerInfosObj.getLayerInfoById(a[b]);if(e&&e.isShowInMap())return!1}return!0},_isDefaultSelectedOption:function(a){var f=[];"mult"===this._SWIPE_MODE?f=this.config.defaultLayers:f.push(this.config.layer);for(var b=0,d=f.length;b<d;b++)if(f[b]===a.value)return!0;
return!1},toggleSelectorPopup:function(){d.showSelectorPopup(this.domNode);var a=this.getOptions();a&&("mult"===this._SWIPE_MODE?0===a.length&&d.hideSelectorPopup(this.domNode):0!==a.length&&1!==a.length||d.hideSelectorPopup(this.domNode))},disableSelectors:function(){"mult"===this._SWIPE_MODE?this.multLayersSelector.disable():this.singleSelector.set("disabled",!0)},enableSelectors:function(){"mult"===this._SWIPE_MODE?this.multLayersSelector.enable():this.singleSelector.set("disabled",!1)},getSelection:function(){var a=
[];"mult"===this._SWIPE_MODE?a=this.multLayersSelector.getConfig():a.push(this.singleSelector.get("value"));return a},isSelected:function(a,b){b||(b=this.getSelection());for(var f=0,d=b.length;f<d;f++)if(a===b[f])return!0;return!1},getOptions:function(){var a=[];return a="mult"===this._SWIPE_MODE?this.multLayersSelector.getOptions():this.singleSelector.getOptions()},setSelection:function(){},onSelectorChange:function(){},_removeSingleSelectorOption:function(a){this.singleSelector.removeOption(a);
0===this.singleSelector.getOptions().length&&(this.singleSelector.set("options",[{value:"",label:""}]),this.singleSelector.reset())},postCreate:function(){this.inherited(arguments);this.config.style||(this.config.style="vertical");this.config.defaultLayers||(this.config.defaultLayers=[]);d.cleanHandlerPosition();this.getSwipeModeByConfig();this.createSelector();this.own(a(this.map,"layer-add",e.hitch(this,this._onMainMapBasemapChange)));this.own(a(this.showDetailIcon,"click",e.hitch(this,this._onShowDetailIconClick)))},
_enableSwipe:function(){this._obtainedLabelLayers&&this._obtainedLabelLayers.length&&0<this._obtainedLabelLayers.length&&(this._obtainedLabelLayers=[]);this.swipeDijit.enable()},_disableSwipe:function(){this.swipeDijit&&this.swipeDijit.disable&&(this.swipeDijit.disable(),p.forEach(this._obtainedLabelLayers,e.hitch(this,function(a){a.restoreLabelControl()})))},onOpen:function(){!0!==this._isTestSizeFlag&&this._loadLayerInfos().then(e.hitch(this,function(){var a=d.getVisibleLayerInfos(this.layerInfosObj);
this.setDefaultOptions(a);this.createSwipeDijit()}))},onClose:function(){!0!==this._isTestSizeFlag&&(this._LAST_SELECTED={mode:this._SWIPE_MODE,selected:this.getSelection()},this._loadDef.isResolved()?this._disableSwipe():this._loadDef.isFulfilled()||this._loadDef.cancel())},createSwipeDijit:function(){this.destroySwipeDijit();var a=[],b=this.getSelection();if(0===b.length)a=this._getLayerParams(null);else if("mult"===this._SWIPE_MODE)for(var l=0,k=b.length;l<k;l++)a=a.concat(this._getLayerParams(b[l]));
else a=this._getLayerParams(b[0]);b={type:this.config.style||"vertical",map:this.map,layers:a,invertPlacement:this.config.invertPlacement};d.isCacheHandlerPosition()?d.setHandlerPosition(b,this.config,this.map):(l=d.getScreenMiddle(this.map),b.top=l.top,b.left=l.left,"scope"===this.config.style&&(b.top-=130,b.left-=130));this.swipeDijit=new v(b,this.layerSwipe);this.swipeDijit.startup();this._setHandleColor();this._enableSwipe();h.place(this.swipeDijit.domNode,this.map.root,"before");this._autoHideInfoWindow(a);
this.swipeDijit.on("swipe",e.hitch(this,function(a){var b=p.map(a.layers,function(a){return a.layer});if(a&&a.layers[0]){var c=d.getLayerNode(a.layers[0].layer);this.config.invertPlacement?(c=d.getLayerTransform(a.layers[0],this.swipeDijit),a.layers[0].left+=c.dx,a.layers[0].top+=c.dy):c&&c.style&&"css-transforms"===this.map.navigationMode&&(a.layers[0].right-=a.layers[0].left,a.layers[0].left=0,a.layers[0].bottom-=a.layers[0].top,a.layers[0].top=0)}d.saveHandlerPosition(a.layers[0]);this._autoHideInfoWindow(b)}));
d.hackToRefreshSwipe(this);this._initPopupStyle()},_getLayerParams:function(a){var b=[];this._isSwipeBaseMap()?(a=this.layerInfosObj.getBasemapLayers(),p.forEach(a,e.hitch(this,function(a){b.push(this.map.getLayer(a.id))}))):(a=this.layerInfosObj.getLayerInfoById(a))&&a.traversal?a.traversal(e.hitch(this,function(a){var f=this.map.getLayer(a.id);f&&(b.push(f),this._obtainLabelControl(a,b))})):(a=this.layerInfosObj.getBasemapLayers(),p.forEach(a,e.hitch(this,function(a){b.push(this.map.getLayer(a.id))})));
return b},destroySwipeDijit:function(){if(this.swipeDijit&&this.swipeDijit.destroy){try{this.swipeDijit.destroy()}catch(f){console.log(f)}this.swipeDijit=null;this._restoreAllLabelControl();this.layerSwipe=h.create("div",{},this.swipeLayersMenu,"after")}},onSwipeLayersChange:function(){this.swipeDijit&&("mult"===this._SWIPE_MODE?this.createSwipeDijit():(this.createSwipeDijit(),d.zoomToCurrentLayer(this)),this.toggleSelectorPopup(),this.initSwipeLayersUi())},onLayerInfosIsShowInMapChanged:function(){if(this.swipeDijit&&
this.swipeDijit.enabled){var a=this.getSelection();if("mult"!==this._SWIPE_MODE){if(a&&a[0]&&""!==a[0]){var a=a[0],b=this.layerInfosObj.getLayerInfoById(a);b&&!b.isShowInMap()&&this._removeSingleSelectorOption(a)}a=this.getSelection()}a=d.getVisibleLayerInfos(this.layerInfosObj,a);this.setDefaultOptions(a,!0)}},_onMainMapBasemapChange:function(a){a.layer&&a.layer._basemapGalleryLayerType&&(a=this.getOptions(),a&&0<a.length||!this._loadDef.isResolved()||(a=d.getVisibleLayerInfos(this.layerInfosObj),
this.setDefaultOptions(a),this.createSwipeDijit()))},onLayerInfosChanged:function(a,b,e){if(this.swipeDijit&&this.swipeDijit.enabled){var f=this.getSelection();a=d.getVisibleLayerInfos(this.layerInfosObj);var h=!1;f&&f[0]&&(h=!0);"added"===b?(b=e.id,this._LAST_SELECTED.selected=[],this._LAST_SELECTED.selected.push(b),this.setDefaultOptions(a,!0),!1===h&&("mult"!==this._SWIPE_MODE?this.singleSelector.set("value",b):this.multLayersSelector.setValue(b))):"removed"===b&&(b=e.id,e=this.isSelected(b),a=
d.getVisibleLayerInfos(this.layerInfosObj),e?(this._LAST_SELECTED=null,"mult"!==this._SWIPE_MODE?(this._removeSingleSelectorOption(b),this.setDefaultOptions(a),this.createSwipeDijit()):this.setDefaultOptions(a)):"mult"!==this._SWIPE_MODE?this._removeSingleSelectorOption(b):this.setDefaultOptions(a))}},destroy:function(){this.destroySwipeDijit();this.inherited(arguments)},_loadLayerInfos:function(){var b=new t;this._loadDef=b;this._loadDef.isResolved()?b.resolve():k.getInstance(this.map,this.map.itemInfo).then(e.hitch(this,
function(d){b.isCanceled()||(this.layerInfosObj=d,this.own(a(d,"layerInfosChanged",e.hitch(this,this.onLayerInfosChanged))),this.own(a(d,"layerInfosIsShowInMapChanged",e.hitch(this,this.onLayerInfosIsShowInMapChanged))),this._setHintStr(),h.addClass(this.swipeIcon,"swipe-icon-loaded"),b.resolve())}));return b},_autoHideInfoWindow:function(a){d.shouldHideInfoWindow(a,this)&&this.map.infoWindow.hide()},_obtainLabelControl:function(a,b){var d=a.obtainLabelControl();d&&(b.push(d),this._obtainedLabelLayers.push(a))},
_restoreAllLabelControl:function(){p.forEach(this._obtainedLabelLayers,e.hitch(this,function(a){a.restoreLabelControl()}));this._obtainedLabelLayers=[]},_setHandleColor:function(){if(this.swipeDijit&&"scope"!==this.config.style){var a=this.swipeDijit.moveable.node,e=b(".handleContainer",this.esriTimeSlider)[0],k=b(".handle",e)[0];a&&h.setStyle(a,"backgroundColor",d.processColor(this.config.handleColor).toHex());e&&h.setStyle(e,"backgroundColor",d.processColor(this.config.handleColor).toHex());k&&
h.setStyle(k,"backgroundColor",d.processColor(this.config.handleColor).toHex())}},_getSelectorDom:function(){return"mult"===this._SWIPE_MODE?b(".dojoxCheckedMultiSelect\x3etable",this.multLayersSelector.domNode)[0]:this.singleSelector.domNode},initSwipeLayersUi:function(){var a=this._getSelectorDom(),d=h.getMarginBox(a);350<d.w+28?h.setStyle(this.domNode,"maxWidth",d.w+28+"px"):h.setStyle(this.domNode,"maxWidth","");if("mult"===this._SWIPE_MODE)for(var a=b(".multselector-label",a),d=0,e=a.length;d<
e;d++){var k=a[d];h.attr(k,"title",k.innerText)}else a=b(".dijitSelectLabel.dijitValidationTextBoxLabel",a)[0],h.attr(a,"title",a.innerText)},onDropMouseEnter:function(){this._mouseOnDropDown=!0},onDropMouseLeave:function(){this._mouseOnDropDown=!1;this.singleSelector.dropDown.onCancel()},onMenuMouseLeave:function(){setTimeout(e.hitch(this,function(){if(!this._mouseOnDropDown)this.singleSelector.dropDown.onCancel()}),10)},onSwipeLayersClick:function(){for(var a=b(".dijitReset.dijitMenuItemLabel",
this.singleSelector.dropDown.domNode),d=0,e=a.length;d<e;d++){var k=a[d];h.attr(k,"title",k.innerText)}},_initPopupStyle:function(){"mult"===this._SWIPE_MODE?h.addClass(this.multLayersSelector.selector.dropDownMenu.domNode,"jimu-widget-swipe-popup"):h.addClass(this.singleSelector.dropDown.domNode,"jimu-widget-swipe-popup")},_onShowDetailIconClick:function(){h.toggleClass(this.showDetailIcon,"fold");h.hasClass(this.showDetailIcon,"fold")?(h.addClass(this.selectorsContainer,"hide"),h.setAttr(this.showDetailIcon,
"title",this.nls.showList),h.addClass(this.domNode,"transparent")):(h.removeClass(this.selectorsContainer,"hide"),h.setAttr(this.showDetailIcon,"title",this.nls.hideList),h.removeClass(this.domNode,"transparent"));this._setHintStr()},_setHintStr:function(){if(h.hasClass(this.showDetailIcon,"fold")){var a=0,a="mult"===this._SWIPE_MODE?this.multLayersSelector.getConfig().length:""===this.singleSelector.getValue()?0:1;this.hintNode.innerHTML=a+" "+this.nls.nItemsSelected}else this.hintNode.innerHTML=
"scope"===this.config.style?this.nls.spyglassText:this.nls.swipeText}})});