// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Visibility/templates/VisibilityControl.html":'\x3cdiv data-dojo-attach-point\x3d"visibiltyWidget"\x3e\r\n  \x3clabel data-dojo-attach-point\x3d"errorText" style\x3d"display: none"\x3e\x3c/label\x3e\r\n  \x3cdiv class\x3d"controls" data-dojo-attach-point\x3d"controls"\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel class\x3d"titleLabel" data-dojo-attach-point\x3d"coordInputLabel"\x3e${nls.observerLocation}\x3c/label\x3e\r\n      \x3cdiv\x3e\r\n        \x3cinput class\x3d"jimu-input textInput" data-dojo-attach-point\x3d"observerCoords" /\x3e\r\n        \x3cdiv title\x3d"${nls.formatIconTooltip}" class\x3d"jimu-icon settingBtn" data-dojo-attach-point\x3d"coordinateFormatButton"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.addPointToolTip}" class\x3d"jimu-icon editBtn" data-dojo-attach-point\x3d"addPointBtn"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel class\x3d"titleLabel" data-dojo-attach-point\x3d"FOVLabel"\x3e${nls.fieldOfView}\x3c/label\x3e\r\n      \x3cdiv class\x3d"center" data-dojo-attach-point\x3d"FOVGroup"\x3e\r\n        \x3cinput type\x3d"text" value\x3d"360" class\x3d"fov" data-displayInput\x3d"true" data-cursor\x3d"true" disabled\x3d"true"\r\n          data-dojo-attach-point\x3d"FOVInput" /\x3e\r\n        \x3cp class\x3d"cursortooltip" id\x3d"tooltip" data-dojo-attach-point\x3d"tooltip" hidden\x3d\'true\'\x3e\x3c/p\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3cinput class\x3d"switch-toggle" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"angleUnits" checked\x3d"false" /\x3e\r\n      \x3clabel class\x3d"titleLabel"\x3e${nls.useMilsText}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel class\x3d"titleLabel"\x3e${nls.observerHeight}\x3c/label\x3e\r\n      \x3cdiv\x3e\r\n        \x3cinput class\x3d"inputNumberTextbox" data-dojo-type\x3d\'dijit/form/NumberTextBox\' required\x3d"true" value\x3d"2"\r\n          data-dojo-props\x3d\'\r\n          constraints: {min: 0},\r\n          invalidMessage: "${nls.invalidMessage}",\r\n          rangeMessage: "${nls.observerRangeMessage}"\'\r\n          data-dojo-attach-point\x3d"observerHeight"\x3e\r\n        \x3cselect style\x3d"width: 100px" class\x3d"controlSpace noResize" data-dojo-type\x3d"dijit/form/Select"\r\n          data-dojo-attach-point\x3d"observerHeightDD"\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel class\x3d"titleLabel"\x3e${nls.minObsDistance}\x3c/label\x3e\r\n      \x3cdiv\x3e\r\n        \x3cinput class\x3d"inputNumberTextbox" data-dojo-type\x3d\'dijit/form/NumberTextBox\' required\x3d"true" value\x3d"3"\r\n          data-dojo-props\x3d\'constraints: {min: 0}\' data-dojo-attach-point\x3d"minObsRange"\x3e\r\n        \x3cselect style\x3d"width: 100px" class\x3d"controlSpace noResize" data-dojo-type\x3d"dijit/form/Select"\r\n          data-dojo-attach-point\x3d"distanceUnitDD"\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"controlGroup"\x3e\r\n      \x3clabel class\x3d"titleLabel"\x3e${nls.maxObsDistance}\x3c/label\x3e\r\n      \x3cdiv\x3e\r\n        \x3cinput class\x3d"inputNumberTextbox" data-dojo-type\x3d\'dijit/form/NumberTextBox\' required\x3d"true" value\x3d"5"\r\n          data-dojo-props\x3d\'constraints: {min: 0}\' data-dojo-attach-point\x3d"maxObsRange"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"buttonContainer" data-dojo-attach-point\x3d"buttonContainer"\x3e\r\n      \x3cdiv class\x3d"btnContainer HalfWidthLeft"\x3e\r\n        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"btnCreate"\x3e${nls.createBtn}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"btnContainer HalfWidthRight"\x3e\r\n        \x3cdiv class\x3d"jimu-btn controlSpace" data-dojo-attach-point\x3d"btnClear"\x3e${nls.clearBtn}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/kernel dojo/_base/event dojo/Deferred dojo/_base/lang dojo/_base/array dojo/on dojo/keys dojo/number dojo/string dojo/topic dojo/dom-class dojo/dom-style dojo/mouse dojo/promise/all dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/TooltipDialog dijit/popup dojo/text!../templates/VisibilityControl.html jimu/dijit/Message ./DrawFeedBack esri/dijit/util/busyIndicator esri/graphic esri/layers/GraphicsLayer esri/tasks/FeatureSet esri/graphicsUtils esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleMarkerSymbol esri/Color esri/dijit/analysis/CreateViewshed esri/layers/FeatureLayer esri/geometry/Polygon esri/geometry/geometryEngine esri/SpatialReference ./geometryUtils ./CoordinateInput ./EditOutputCoordinate dijit/form/NumberTextBox jimu/dijit/CheckBox ./jquery.knob.min".split(" "),
function(A,E,F,v,b,k,e,G,H,B,C,q,w,r,I,J,K,L,M,x,N,t,O,P,n,Q,R,D,u,f,S,h,T,U,y,p,V,l,W,X){return A([J,K,L],{templateString:N,baseClass:"jimu-widget-visibility-control",FOV:180,LA:180,map:null,constructor:function(a){A.safeMixin(this,a);this.nls=a.nls},postCreate:function(){var a=[],c;k.forEach("meters kilometers miles feet yards nauticalMiles".split(" "),b.hitch(this,function(d){c={value:d,label:window.jimuNls.units[d]};a.push(c)}));this.observerHeightDD.addOption(a);this.distanceUnitDD.addOption(b.clone(a));
this.observerHeightDD.set("value","meters");this.distanceUnitDD.set("value","kilometers");this.portalUrl?(this._setUpSymbology(),this.distanceUnit=this.distanceUnitDD.get("value"),this.observerHeightUnit=this.observerHeightDD.get("value"),this.coordTool=new W({nls:this.nls,appConfig:this.appConfig,style:"width: calc(100% - 44px)"},this.observerCoords),this.coordTool.inputCoordinate.formatType="DD",this.coordinateFormat=new M({content:new X({nls:this.nls}),style:"width: 400px"}),"DartTheme"===this.appConfig.theme.name&&
q.add(this.coordinateFormat.domNode,"dartThemeClaroDijitTooltipContainerOverride"),this._initGL(),this.dt=new O(this.map,this.coordTool.inputCoordinate.util),this._syncEvents(),this.minObsRange.invalidMessage=this.nls.invalidMessage,this.minObsRange.rangeMessage=this.nls.minimumRangeMessage,this.maxObsRange.invalidMessage=this.nls.invalidMessage,this.maxObsRange.rangeMessage=this.nls.maximumRangeMessage):this._showPortalURLError(this.nls.portalURLError)},startup:function(){this.busyIndicator=P.create({target:this.domNode.parentNode.parentNode.parentNode,
backgroundOpacity:0});var a=b.hitch(this,function(a,d,b){this.LA=this.angleUnits.checked?a/17.777777777778:a;this.FOV=Math.round(d);this.tooltip.innerHTML=360===b&&this.angleUnits.checked?$("input.fov").val()+" "+this.nls.milsLabel:this.angleUnits.checked?b+" "+this.nls.milsLabel:b+" "+this.nls.degreesLabel});$("input.fov").knob({min:0,max:360,cursor:360,inputColor:"#ccc",width:160,height:160,draw:function(){a(this.v,this.o.cursor,this.cv);window.isRTL&&this.i.css({"margin-right":"-"+(3*this.w/4+
2>>0)+"px","margin-left":"auto"})}})},_showPortalURLError:function(a){w.set(this.controls,"display","none");w.set(this.buttonContainer,"display","none");this.errorText.innerHTML=a;w.set(this.errorText,"display","")},_setUpSymbology:function(){this._ptSym=new S(this.pointSymbol);this.visibleArea=new u;this.visibleArea.setOutline(new f(f.STYLE_SOLID,new h([0,0,0,0]),1));this.visibleArea.setColor(new h([0,255,0,.5]));this.notVisibleArea=new u;this.notVisibleArea.setOutline(new f(f.STYLE_SOLID,new h([0,
0,0,0]),1));this.notVisibleArea.setColor(new h([255,0,0,.5]));this.fullWedge=new u;this.fullWedge.setOutline(new f(f.STYLE_DASH,new h([0,0,0,1]),1));this.fullWedge.setColor(new h([0,0,0,0]));this.wedge=new u;this.wedge.setOutline(new f(f.STYLE_SOLID,new h([255,0,0,1]),1));this.wedge.setColor(new h([0,0,0,0]))},_initGL:function(){this.graphicsLayer=new Q;this.graphicsLayer.name="Viewshed Layer";this.map.addLayer(this.graphicsLayer)},_syncEvents:function(){this.own(this.coordTool.inputCoordinate.watch("outputString",
b.hitch(this,function(a,c,d){this.coordTool.manualInput||this.coordTool.set("value",d)})),this.dt.watch("startPoint",b.hitch(this,function(a,c,d){l.getProjectedGeometry(d,new V(4326),this.coordTool.inputCoordinate.util.geomService).then(b.hitch(this,function(a){this.coordTool.inputCoordinate.set("coordinateEsriGeometry",a);this.dt.addStartGraphic(d,this._ptSym)}))})),e(this.coordTool,"keyup",b.hitch(this,this.coordToolKeyWasPressed)),this.dt.on("draw-complete",b.hitch(this,this.feedbackDidComplete)),
e(this.coordinateFormatButton,"click",b.hitch(this,this.coordinateFormatButtonWasClicked)),e(this.addPointBtn,"click",b.hitch(this,this.pointButtonWasClicked)),e(this.btnCreate,"click",b.hitch(this,this.createButtonWasClicked)),e(this.btnClear,"click",b.hitch(this,this.onClearBtnClicked)),e(this.minObsRange,"keyup",b.hitch(this,this.minObsRangeKeyWasPressed)),e(this.FOVInput,"mousemove",b.hitch(this,this.mouseMoveOverFOVInput)),e(this.FOVInput,r.leave,b.hitch(this,this.mouseMoveOutFOVInput)),e(this.FOVGroup,
r.leave,b.hitch(this,function(){this.tooltip.hidden=!0})),e(this.FOVGroup,r.enter,b.hitch(this,this.mouseMoveOverFOVGroup)),e(this.FOVInput,r.enter,b.hitch(this,function(){this.tooltip.hidden=!0})),e(this.FOVInput,"keypress",b.hitch(this,function(a){isNaN(a.key)&&13!==a.charCode&&F.stop(a)})),this.angleUnits.on("change",b.hitch(this,this.angleUnitsDidChange)),this.observerHeightDD.on("change",b.hitch(this,this.distanceUnitDDDidChange)),this.distanceUnitDD.on("change",b.hitch(this,this.distanceUnitDDDidChange)),
e(this.coordinateFormat.content.applyButton,"click",b.hitch(this,function(){var a=this.coordinateFormat.content.formats[this.coordinateFormat.content.ct],c=a.defaultFormat,d=this.coordinateFormat.content.frmtSelect.value;a.useCustom&&(c=a.customFormat);this.coordTool.inputCoordinate.set("formatPrefix",this.coordinateFormat.content.addSignChkBox.checked);this.coordTool.inputCoordinate.set("formatString",c);this.coordTool.inputCoordinate.set("formatType",d);this.setCoordLabel(d);x.close(this.coordinateFormat)})),
e(this.coordinateFormat.content.cancelButton,"click",b.hitch(this,function(){x.close(this.coordinateFormat)})))},coordToolKeyWasPressed:function(a){this.coordTool.manualInput=!0;a.keyCode===G.ENTER&&this.coordTool.inputCoordinate.getInputType().then(b.hitch(this,function(a){"UNKNOWN"===a.inputType?new t({message:this.nls.parseCoordinatesError}):(C.publish("visibility-observer-point-input",this.coordTool.inputCoordinate.coordinateEsriGeometry),this.setCoordLabel(a.inputType),this.coordTool.inputCoordinate.set("formatString",
this.coordinateFormat.content.formats[a.inputType].defaultFormat),this.coordTool.inputCoordinate.set("formatType",a.inputType),this.dt.addStartGraphic(a.coordinateEsriGeometry,this._ptSym),this.enableFOVDial())}))},minObsRangeKeyWasPressed:function(){this.minObsRange.isValid()&&(this.maxObsRange.constraints.min=Number(this.minObsRange.displayedValue)+.001,this.maxObsRange.set("value",Number(this.minObsRange.displayedValue)+1))},mouseMoveOverFOVGroup:function(){!1===this.FOVInput.disabled&&(this.tooltip.hidden=
!1)},mouseMoveOverFOVInput:function(){!1===this.FOVInput.disabled&&$(document).ready(function(){$(document).mousemove(function(a){a={top:a.pageY+10,left:a.pageX+10};$("#tooltip").offset(a)})})},mouseMoveOutFOVInput:function(){this.tooltip.hidden=!1;this.FOVInput.blur()},angleUnitsDidChange:function(){this.angleUnits.checked?($("input.fov").trigger("configure",{max:6400,units:"mils",milsValue:6400}),$("input.fov").val(6400).trigger("change")):($("input.fov").trigger("configure",{max:360,units:"degrees",
milsValue:6400}),$("input.fov").val(360).trigger("change"))},distanceUnitDDDidChange:function(){var a="",c={};this.distanceUnit=this.distanceUnitDD.get("value");this.observerHeightUnit=this.observerHeightDD.get("value");if(this.distanceUnit){switch(this.distanceUnit){case "miles":c.max=31;break;case "nauticalMiles":c.max=26.9383;break;case "kilometers":c.max=50;break;case "yards":c.max=54680;break;case "feet":c.max=164041;break;case "meters":c.max=5E4}a=B.substitute(this.nls.maximumRangeMessage,{units:window.jimuNls.units[this.distanceUnit],
limit:H.format(c.max,{places:4,locale:E.locale})});c.min=Number(this.minObsRange.displayedValue)+.001;this.maxObsRange.set("constraints",c);this.maxObsRange.set("rangeMessage",a)}},setCoordLabel:function(a){this.coordInputLabel.innerHTML=B.substitute(this.nls.observerLocation+" (${crdType})",{crdType:a})},feedbackDidComplete:function(){q.remove(this.addPointBtn,"jimu-edit-active");this.dt.deactivate();this.map.enableMapNavigation();this.enableFOVDial()},enableFOVDial:function(){this.FOVInput.disabled&&
(this.FOVInput.disabled=!1,$("input.fov").trigger("configure",{fgColor:"#00ff66",bgColor:"#f37371",inputColor:"#ccc"}))},coordinateFormatButtonWasClicked:function(){this.coordinateFormat.content.set("ct",this.coordTool.inputCoordinate.formatType);this.coordinateFormat.content.set("prefixChecked",this.coordTool.inputCoordinate.get("formatPrefix"));x.open({popup:this.coordinateFormat,around:this.coordinateFormatButton})},pointButtonWasClicked:function(){if(q.contains(this.addPointBtn,"jimu-edit-active"))this.dt.deactivate(),
this.map.enableMapNavigation();else{this.coordTool.manualInput=!1;C.publish("clear-points");this.dt._setTooltipMessage(0);this.map.disableMapNavigation();this.dt.activate("point");var a=this.dt._tooltip;a&&(a.innerHTML=this.nls.pointToolTooltip)}q.toggle(this.addPointBtn,"jimu-edit-active")},_createWedgesUsingBuffers:function(a,c,d,b){c=D.getGeometries(c);b=p.geodesicBuffer(c,[b],"meters",!0);0<d?(d=p.geodesicBuffer(c,[d],"meters",!0),b=p.difference(b[0],d[0])):b=b[0];a.resolve([b,b])},_createWedgesUsingAngles:function(a,
c,d,b,z,g){var e,m,f;c=c.geometry;e=[];m=[];d=d>b?d-360:d;g=l.getPointsForArc(d,b,c,g);m.push([c.x,c.y]);k.forEach(g,function(a){m.push([a.x,a.y])});m.push([c.x,c.y]);0<z?(f=l.getDestinationPoint(c,d,z),d=l.getPointsForArc(d,b,c,z),e.push([f.x,f.y]),k.forEach(g,function(a){e.push([a.x,a.y])}),d.reverse(),k.forEach(d,function(a){e.push([a.x,a.y])}),e.push([f.x,f.y])):e=m;d=new y(e);d.setSpatialReference(c.spatialReference);b=new y(m);b.setSpatialReference(c.spatialReference);a.resolve([d,b])},_createWedges:function(a,
c,d){var b=new v,e=parseInt(this.LA-this.FOV/2,10);0>e&&(e+=360);var g=parseInt(this.LA+this.FOV/2,10);360<g&&(g-=360);360===this.FOV?(e=0,g=360,this._createWedgesUsingBuffers(b,a,c,d)):this._createWedgesUsingAngles(b,a[0],e,g,c,d);return b.promise},_getFeatureCollectionLayer:function(a){k.forEach(a,b.hitch(this,function(a,b){a.attributes={};a.attributes.ObjectID=b}));return new U({featureSet:{features:a,geometryType:"esriGeometryPoint"},layerDefinition:{name:"InputLayer",geometryType:"esriGeometryPoint",
objectIdField:"ObjectID",fields:[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"}]}})},_initAnalysisProcess:function(a){this._createWedges(a.InputObserver.features,a.MinimumRadius,a.MaximumRadius).then(b.hitch(this,function(c){var d,e=[],f;c&&2===c.length&&(f=this.coordTool.inputCoordinate.util.geomService,d=l.getProjectedGeometry(c[0],this.map.spatialReference,f).then(b.hitch(this,function(a){this._wedgeGeometry=a})),e.push(d),c=l.getProjectedGeometry(c[1],this.map.spatialReference,f).then(b.hitch(this,
function(a){this._fullWedgeGeometry=a})),e.push(c),I(e).then(b.hitch(this,function(){this._createViewShed(a)})))}))},_createViewShed:function(a){a={portalUrl:this.portalUrl,inputLayer:this._getFeatureCollectionLayer(a.InputObserver.features),maxDistanceUnits:"Meters",maximumDistance:a.MaximumRadius,observerHeightUnits:"Meters",observerHeight:a.ObserverHeight,showSelectAnalysisLayer:!1,targetHeightUnits:"Meters",map:this.map,showChooseExtent:!1,returnFeatureCollection:!0,outputLayerName:"inputLayer"};
a=new T(a);a.startup();a.on("job-result",b.hitch(this,this._onViewShedCreated));a.on("job-status",b.hitch(this,function(a){"esriJobFailed"===a.jobStatus&&this._showJobError(a)}));a.on("job-fail",b.hitch(this,this._showJobError));a._form.validate()?(this.busyIndicator.show(),a._handleSaveBtnClick()):new t({message:this.nls.validationError})},_showJobError:function(a){new t({message:a.message});this.busyIndicator.hide()},_onViewShedCreated:function(a){var c=[];k.forEach(a.value.featureSet.features,
b.hitch(this,function(a){a=new y(a.geometry);a.setSpatialReference(this.map.spatialReference);(a=p.difference(this._wedgeGeometry,a))&&(a=p.difference(this._wedgeGeometry,a));a=new n(a,this.visibleArea);c.push(a)}));this._showGraphicsOnMap(c)},_drawWedge:function(a,b){for(var c=new v,e=0,f=a.length;e<f;e++){var g=a[e];g&&g.geometry&&(g.setSymbol(b),this.graphicsLayer.add(g))}c.resolve("success");return c.promise},_drawViewshed:function(a){var b=new v;this.graphicsLayer.add(new n(this._wedgeGeometry,
this.notVisibleArea));for(var d=0,e=a.length;d<e;d++){var f=a[d];f&&f.geometry&&(f.setSymbol(this.visibleArea),this.graphicsLayer.add(f))}b.resolve("success");return b.promise},_showGraphicsOnMap:function(a){this._drawWedge([new n(this._fullWedgeGeometry)],this.fullWedge);this._drawWedge([new n(this._wedgeGeometry)],this.wedge);this._drawViewshed(a).then(b.hitch(this,function(){this.map.setExtent(D.graphicsExtent(this.graphicsLayer.graphics),!0);this.busyIndicator.hide()}))},createButtonWasClicked:function(){if(this.dt.startGraphic&&
this.minObsRange.isValid()&&this.maxObsRange.isValid()&&this.observerHeight.isValid()&&0!==parseInt(this.FOVInput.value,10)){var a=new n(this.coordTool.inputCoordinate.coordinateEsriGeometry),b=new R;b.features=[a];a={InputObserver:b,MinimumRadius:this.coordTool.inputCoordinate.util.convertToMeters(this.minObsRange.value,this.distanceUnit),MaximumRadius:this.coordTool.inputCoordinate.util.convertToMeters(this.maxObsRange.value,this.distanceUnit),ObserverHeight:this.coordTool.inputCoordinate.util.convertToMeters(this.observerHeight.value,
this.observerHeightUnit)};this._initAnalysisProcess(a)}else new t({message:this.nls.validationError})},onClearBtnClicked:function(){this.angleUnits.setValue(!1);this.coordTool.clear();this.graphicsLayer.clear();this.dt.removeStartGraphic();this.FOVInput.disabled=!0;$("input.fov").val(360).trigger("change");$("input.fov").trigger("configure",{fgColor:"#ccc",bgColor:"#ccc",inputColor:"#ccc"});this.tooltip.hidden=!0}})});