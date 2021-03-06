define([
        ]
     , function() {

// load sap.m and sap.me
var oCore = sap.ui.getCore();

// mark forced re-load of sap.m events bundle
oCfgData = window["sap-ui-config"]

if(oCfgData.libs.indexOf("sap.suite.ui.commons") == -1) {
	jQuery.sap.registerModulePath("sap.suite.ui.commons", sap.zen.createStaticSdkMimeUrl("org.scn.community.basics","os") + "/sapui5/suite");

	oCore.loadLibrary("sap.suite.ui.commons");
	oCfgData.libs = oCfgData.libs + ",sap.suite.ui.commons";
}

if(oCfgData.libs.indexOf("sap.suite.ui.microchart") == -1) {
//	jQuery.sap.registerModulePath("sap.suite.ui.microchart", sap.zen.createStaticSdkMimeUrl("org.scn.community.basics","os") + "/sapui5/suite");

	oCore.loadLibrary("sap.suite.ui.microchart");
	oCfgData.libs = oCfgData.libs + ",sap.suite.ui.microchart";
}

if(sap.suite.ui.commons.HarveyBallMicroChartItem == undefined) {
	/*!
	 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
	 */
	jQuery.sap.declare('sap.suite.ui.commons.HarveyBallMicroChartItem');jQuery.sap.require('sap.suite.ui.commons.library');jQuery.sap.require('sap.ui.core.Element');sap.ui.core.Element.extend('sap.suite.ui.commons.HarveyBallMicroChartItem',{metadata:{library:'sap.suite.ui.commons',properties:{'color':{type:'sap.suite.ui.commons.InfoTileValueColor',group:'Misc',defaultValue:sap.suite.ui.commons.InfoTileValueColor.Neutral},'fraction':{type:'float',group:'Misc',defaultValue:0},'fractionLabel':{type:'string',group:'Misc',defaultValue:null},'fractionScale':{type:'string',group:'Misc',defaultValue:null},'formattedLabel':{type:'boolean',group:'Misc',defaultValue:false}}}});
}

if(sap.suite.ui.commons.HarveyBallMicroChart == undefined) {
	/*!
	 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
	 */
	jQuery.sap.declare('sap.suite.ui.commons.HarveyBallMicroChart');jQuery.sap.require('sap.suite.ui.commons.library');jQuery.sap.require('sap.ui.core.Control');sap.ui.core.Control.extend('sap.suite.ui.commons.HarveyBallMicroChart',{metadata:{library:'sap.suite.ui.commons',properties:{'total':{type:'float',group:'Misc',defaultValue:0},'totalLabel':{type:'string',group:'Misc',defaultValue:null},'totalScale':{type:'string',group:'Misc',defaultValue:null},'formattedLabel':{type:'boolean',group:'Misc',defaultValue:false},'showTotal':{type:'boolean',group:'Misc',defaultValue:true},'showFractions':{type:'boolean',group:'Misc',defaultValue:true},'size':{type:'sap.suite.ui.commons.InfoTileSize',group:'Misc',defaultValue:sap.suite.ui.commons.InfoTileSize.Auto},'colorPalette':{type:'string[]',group:'Misc',defaultValue:[]},'width':{type:'sap.ui.core.CSSSize',group:'Misc',defaultValue:null}},aggregations:{'items':{type:'sap.suite.ui.commons.HarveyBallMicroChartItem',multiple:true,singularName:'item'}},events:{'press':{}}}});sap.suite.ui.commons.HarveyBallMicroChart.M_EVENTS={'press':'press'};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.getAltText=function(){var a='';var I=true;var b=this.getItems();for(var i=0;i<b.length;i++){var o=b[i];var c=(this.getColorPalette().length==0)?this._rb.getText(('SEMANTIC_COLOR_'+o.getColor()).toUpperCase()):'';var l=o.getFractionLabel();if(!l){l=o.getFormattedLabel()?o.getFraction():o.getFraction()+o.getFractionScale().substring(0,3);}else if(!o.getFormattedLabel()){l+=o.getFractionScale().substring(0,3);}a+=(I?'':'\n')+l+' '+c;I=false;}if(this.getTotal()){var t=this.getTotalLabel();if(!t){t=this.getFormattedLabel()?this.getTotal():this.getTotal()+this.getTotalScale().substring(0,3);}else if(!this.getFormattedLabel()){t+=this.getTotalScale().substring(0,3);}a+=(I?'':'\n')+this._rb.getText('HARVEYBALLMICROCHART_TOTAL_TOOLTIP')+' '+t;}return a;};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.getTooltip_AsString=function(){var t=this.getTooltip();var T=this.getAltText();if(typeof t==='string'||t instanceof String){T=t.split('{AltText}').join(T).split('((AltText))').join(T);return T;}return t?t:'';};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.init=function(){this._rb=sap.ui.getCore().getLibraryResourceBundle('sap.suite.ui.commons');this.setTooltip('{AltText}');sap.ui.Device.media.attachHandler(this.rerender,this,sap.ui.Device.media.RANGESETS.SAP_STANDARD);};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype._calculatePath=function(){var s=this.getSize();var t=this.getTotal();var f=0;if(this.getItems().length){f=this.getItems()[0].getFraction();}var i=false;if(s=='Auto'){i=jQuery('html').hasClass('sapUiMedia-Std-Phone');}if(s=='S'||s=='XS'){i=true;}var m=i?56:72;var c=m/2;var b=4;this._oPath={initial:{x:c,y:c,x1:c,y1:c},lineTo:{x:c,y:b},arc:{x1:c-b,y1:c-b,xArc:0,largeArc:0,sweep:1,x2:'',y2:''},size:m,border:b,center:c};var a=f/t*360;if(a<10){this._oPath.initial.x-=1.5;this._oPath.initial.x1+=1.5;this._oPath.arc.x2=this._oPath.initial.x1;this._oPath.arc.y2=this._oPath.lineTo.y;}else if(a>350&&a<360){this._oPath.initial.x+=1.5;this._oPath.initial.x1-=1.5;this._oPath.arc.x2=this._oPath.initial.x1;this._oPath.arc.y2=this._oPath.lineTo.y;}else{var r=Math.PI/180.0;var R=this._oPath.center-this._oPath.border;var d=R*Math.cos((a-90)*r)+this._oPath.center;var e=this._oPath.size-(R*Math.sin((a+90)*r)+this._oPath.center);this._oPath.arc.x2=d.toFixed(2);this._oPath.arc.y2=e.toFixed(2);}var l=t/f<2?1:0;this._oPath.arc.largeArc=l;};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.onBeforeRendering=function(){this._calculatePath();};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.serializePieChart=function(){var p=this._oPath;return['M',p.initial.x,',',p.initial.y,' L',p.initial.x,',',p.lineTo.y,' A',p.arc.x1,',',p.arc.y1,' ',p.arc.xArc,' ',p.arc.largeArc,',',p.arc.sweep,' ',p.arc.x2,',',p.arc.y2,' L',p.initial.x1,',',p.initial.y1,' z'].join('');};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype._parseFormattedValue=function(v){return{scale:v.replace(/.*?([^+-.,\d]*)$/g,'$1').trim(),value:v.replace(/(.*?)[^+-.,\d]*$/g,'$1').trim()};};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.ontap=function(e){if(sap.ui.Device.browser.internet_explorer){this.$().focus();}this.firePress();};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.onkeydown=function(e){if(e.which==jQuery.sap.KeyCodes.SPACE){e.preventDefault();}};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.onkeyup=function(e){if(e.which==jQuery.sap.KeyCodes.ENTER||e.which==jQuery.sap.KeyCodes.SPACE){this.firePress();e.preventDefault();}};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.attachEvent=function(e,d,f,l){sap.ui.core.Control.prototype.attachEvent.call(this,e,d,f,l);if(this.hasListeners('press')){this.$().attr('tabindex',0).addClass('sapSuiteUiCommonsPointer');}return this;};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.detachEvent=function(e,f,l){sap.ui.core.Control.prototype.detachEvent.call(this,e,f,l);if(!this.hasListeners('press')){this.$().removeAttr('tabindex').removeClass('sapSuiteUiCommonsPointer');}return this;};
	sap.suite.ui.commons.HarveyBallMicroChart.prototype.exit=function(e){sap.ui.Device.media.detachHandler(this.rerender,this,sap.ui.Device.media.RANGESETS.SAP_STANDARD);};
}

if(sap.suite.ui.commons.HarveyBallMicroChartRenderer == undefined) {
	/*!
	 * SAP UI development toolkit for HTML5 (SAPUI5) (c) Copyright 2009-2013 SAP AG. All rights reserved
	 */
	jQuery.sap.declare('sap.suite.ui.commons.HarveyBallMicroChartRenderer');sap.suite.ui.commons.HarveyBallMicroChartRenderer={};
	sap.suite.ui.commons.HarveyBallMicroChartRenderer.render=function(r,c){var R=sap.ui.getCore().getConfiguration().getRTL();var t=c.getTooltip_AsString();if(typeof t!=='string'){t='';}var v='';var V='';var f=false;var a=0;var C='';var s=false;if(c.getItems().length){var p=c.getItems()[0];a=p.getFraction();C=p.getColor();v=p.getFractionLabel()?p.getFractionLabel():''+p.getFraction();V=p.getFractionScale().substring(0,3);f=p.getFormattedLabel();}if(f){var F=c._parseFormattedValue(v);V=F.scale.substring(0,3);v=F.value;}var T=c.getTotal();var b=c.getTotalLabel()?c.getTotalLabel():''+c.getTotal();var d=c.getTotalScale().substring(0,3);if(c.getFormattedLabel()){var o=c._parseFormattedValue(b);d=o.scale.substring(0,3);b=o.value;}if(c.getColorPalette()){s=c.getColorPalette()[0];}var S=c.getSize();r.write('<div');r.writeControlData(c);r.writeAttributeEscaped('title',t);r.addClass('suiteHBMC');r.addClass(S);if(c.hasListeners('press')){r.addClass('sapSuiteUiCommonsPointer');r.writeAttribute('tabindex','0');}r.writeClasses();if(c.getWidth()){r.addStyle('width',c.getWidth());}r.writeStyles();r.write('>');r.write('<div');r.addClass('suiteHBMCChartCnt');r.addClass(S);r.writeClasses();r.addStyle('display','inline-block');r.writeStyles();r.writeAttribute('role','presentation');r.writeAttributeEscaped('aria-label',c.getAltText().replace(/\s/g,' ')+(sap.ui.Device.browser.firefox?'':' '+t));r.write('>');r.write('<svg');r.writeAttribute('id',c.getId()+'-harvey-ball');r.writeAttribute('width',c._oPath.size);r.writeAttribute('height',c._oPath.size);r.writeAttribute('focusable',false);r.write('>');r.write('<g>');r.write('<circle');r.writeAttribute('cx',c._oPath.center);r.writeAttribute('cy',c._oPath.center);r.writeAttribute('r',(sap.ui.getCore().getConfiguration().getTheme()==='sap_hcb')?c._oPath.center-1:c._oPath.center);r.addClass('suiteHBMCSBall');r.writeClasses();r.write('/>');if(!a){}else if(a>=T){r.write('<circle');r.writeAttribute('cx',c._oPath.center);r.writeAttribute('cy',c._oPath.center);r.writeAttribute('r',c._oPath.center-c._oPath.border);r.addClass('suiteHBMCSgmnt');r.addClass(C);r.writeClasses();if(c.getColorPalette()){r.addStyle('fill',c.getColorPalette()[0]);r.writeStyles();}r.write('/>');}else if(a>0){r.write('<path');r.writeAttribute('id',c.getId()+'-segment');r.addClass('suiteHBMCSgmnt');r.addClass(C);r.writeClasses();r.writeAttribute('d',c.serializePieChart());if(c.getColorPalette().length!=0){r.addStyle('fill',c.getColorPalette()[0]);r.writeStyles();}r.write('/>');}r.write('</g>');r.write('</svg>');r.write('</div>');r.write('<div');r.addClass('suiteHBMCValSclCnt');r.addClass(S);r.addClass(C);if(s){r.addClass('CP');}r.writeClasses();r.addStyle('display',c.getShowFractions()?'inline-block':'none');r.writeStyles();r.write('>');r.write('<p');r.write('>');this.renderLabel(r,c,[C,S,'suiteHBMCVal'],v,'-fraction');this.renderLabel(r,c,[C,S,'suiteHBMCValScale'],V,'-fraction-scale');r.write('</p>');r.write('</div>');r.write('<div');r.addClass('suiteHBMCTtlSclCnt');r.addClass(S);r.writeClasses();if(R){r.addStyle('left','0');}else{r.addStyle('right','0');}r.addStyle('display',c.getShowTotal()?'inline-block':'none');r.writeStyles();r.write('>');this.renderLabel(r,c,[C,S,'suiteHBMCTtl'],b,'-total');this.renderLabel(r,c,[C,S,'suiteHBMCTtlScale'],d,'-total-scale');r.write('</div>');r.write('</div>');};
	sap.suite.ui.commons.HarveyBallMicroChartRenderer.renderLabel=function(r,c,C,l,I){r.write('<span');r.writeAttribute('id',c.getId()+I);for(var i=0;i<C.length;i++){r.addClass(C[i]);}r.writeClasses();r.write('>');if(l){r.writeEscaped(l);}r.write('</span>');};
}

});// End of closure