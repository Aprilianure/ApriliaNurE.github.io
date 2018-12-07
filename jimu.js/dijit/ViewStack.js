// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dojo/_base/array","dijit/_WidgetBase"],function(g,e,c,f,h){return g(h,{baseClass:"jimu-viewstack",declaredClass:"jimu.dijit.ViewStack",_currentView:null,postCreate:function(){this.inherited(arguments);this.views||(this.views=[]);f.forEach(this.views,e.hitch(this,function(a){1===a.nodeType?(c.place(a,this.domNode),c.addClass(a,"view"),c.setStyle(a,"display","none")):a.domNode&&(c.place(a.domNode,this.domNode),c.addClass(a.domNode,"view"),
c.setStyle(a.domNode,"display","none"))}))},startup:function(){this.inherited(arguments);0<this.views.length&&this.switchView(0)},getSelectedView:function(){return this._currentView},getSelectedLabel:function(){var a="",b=this.getSelectedView();b&&(a=b.label);return a},getViewByLabel:function(a){for(var b=0;b<this.views.length;b++)if(a===this.views[b].label)return this.views[b];return null},addView:function(a){this.views.push(a);1===a.nodeType?(c.place(a,this.domNode),c.addClass(a,"view")):a.domNode&&
(c.place(a.domNode,this.domNode),c.addClass(a.domNode,"view"))},removeView:function(a){var b=this.views.length;this.views=f.filter(this.views,function(b){return a!==b});b!==this.views.length&&(1===a.nodeType?c.destroy(a):a.domNode&&a.destroyRecursive())},switchView:function(a){var b,d;b="number"===typeof a?this.views[a]:"string"===typeof a?this.getViewByLabel(a):a;this.views.forEach(e.hitch(this,function(a){if(a)if(1===a.nodeType?d=a:a.domNode&&(d=a.domNode),a===b){if(c.setStyle(d,"display","block"),
a.domNode)if(!a._started)a.startup(),a._started=!0;else if("function"===typeof a.onShown)a.onShown()}else if(c.setStyle(d,"display","none"),a.domNode&&"function"===typeof a.onHidden)a.onHidden()}));this._currentView=b;this.onViewSwitch(b)},onViewSwitch:function(){}})});