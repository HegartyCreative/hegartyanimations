(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"retail_336x280_atlas_", frames: [[0,208,70,212],[302,96,70,262],[0,0,403,94],[72,208,70,204],[0,96,300,110],[374,96,70,217]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.A = function() {
	this.spriteSheet = ss["retail_336x280_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.E = function() {
	this.spriteSheet = ss["retail_336x280_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.JohnLewis = function() {
	this.spriteSheet = ss["retail_336x280_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.L = function() {
	this.spriteSheet = ss["retail_336x280_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Road = function() {
	this.spriteSheet = ss["retail_336x280_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.S = function() {
	this.spriteSheet = ss["retail_336x280_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.S();
	this.instance.parent = this;
	this.instance.setTransform(-35,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-108.5,70,217);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.S();
	this.instance.parent = this;
	this.instance.setTransform(-35,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-108.5,70,217);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.S();
	this.instance.parent = this;
	this.instance.setTransform(-35,-108.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-108.5,70,217);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.L();
	this.instance.parent = this;
	this.instance.setTransform(-35,-102);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-102,70,204);


(lib.road = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Road();
	this.instance.parent = this;
	this.instance.setTransform(-150,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.road, new cjs.Rectangle(-150,-55,300,110), null);


(lib.RedJL = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JohnLewis();
	this.instance.parent = this;
	this.instance.setTransform(-51,-10,0.246,0.246);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5F0500","#D70B00"],[0,1],80,0,-80,0).s().p("AsfEsIAApXIY/AAIAAJXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.RedJL, new cjs.Rectangle(-80,-30,160.1,60.1), null);


(lib.Rays = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(253,253,253,0)","#FFFFFF"],[0,1],-95.8,0,95.8,0).s().p("EAJPAhxIgsAAMgXgg/3QIjitI3hXMAGRAi4MAGQAhDIgUAAIlRAZg");
	this.shape.setTransform(-32.2,-26.3,0.253,0.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(253,253,253,0)","#FFFFFF"],[0,1],-148,0,148,0).s().p("A3H4DQH7kxImjcMAduA+yIl9Bwg");
	this.shape_1.setTransform(-58.5,-18.2,0.253,0.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(253,253,253,0)","#FFFFFF"],[0,1],-189.4,0,189.5,0).s().p("A9mwUQGymzHxllMAsqA1mIkCDyg");
	this.shape_2.setTransform(-84.2,-2.4,0.253,0.253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["rgba(253,253,253,0)","#FFFFFF"],[0,1],-229.9,0,229.9,0).s().p("Egj6gHGQE9oeGXniMA8hAqMIjPECg");
	this.shape_3.setTransform(-102.8,20.1,0.253,0.253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["rgba(253,253,253,0)","#FFFFFF"],[0,1],-250,0,250.1,0).s().p("EgnDACxQCvpeEUo3MBHFAbEIiAEFg");
	this.shape_4.setTransform(-115.9,46.4,0.253,0.253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(253,253,253,0)","#FFFFFF"],[0,1],-255.7,0,255.8,0).s().p("Egn9AFzIAArlMBONAHKIBtEbg");
	this.shape_5.setTransform(-115.8,74.4,0.253,0.253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#FFFFFF","rgba(253,253,253,0)"],[0,1],-52.8,6,86.3,-16).s().p("EgC5AioMgFjhE6QEVgVETAAQEOAAEDATMgG1BE8g");
	this.shape_6.setTransform(-0.3,-27.7,0.253,0.253);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","rgba(253,253,253,0)"],[0,1],-94.7,0,94.7,0).s().p("EgOyAh4MAMshDvQIkBZIVCsMgXNA/qg");
	this.shape_7.setTransform(33.5,-26.5,0.253,0.253);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#FFFFFF","rgba(253,253,253,0)"],[0,1],-146.2,0,146.3,0).s().p("A22ecMAdXg+mQIeDcH3ExMgnyA4Ig");
	this.shape_8.setTransform(59.5,-18.1,0.253,0.253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","rgba(253,253,253,0)"],[0,1],-187.3,0,187.3,0).s().p("A9QY0MAsHg1aQHuFlGsGvMg2hAs5g");
	this.shape_9.setTransform(84.9,-2.3,0.253,0.253);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#FFFFFF","rgba(253,253,253,0)"],[0,1],-227.5,0,227.6,0).s().p("EgjjATDMA73gqHQGUHiE8IcMhD5AeLg");
	this.shape_10.setTransform(103.4,20.1,0.253,0.253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#FFFFFF","rgba(253,253,253,0)"],[0,1],-247.7,0,247.8,0).s().p("EgmtALfMBGYgbCQEUI3CvJcMhLdAM0g");
	this.shape_11.setTransform(116.5,46.4,0.253,0.253);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#FFFFFF","rgba(253,253,253,0)"],[0,1],-253.4,0,253.5,0).s().p("EgnlAFzIBskbMBNfgHKIAALlg");
	this.shape_12.setTransform(116.4,74.4,0.253,0.253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Rays, new cjs.Rectangle(-180.4,-83.7,360.9,167.5), null);


(lib.play = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20B2AA").s().p("AhyiEIDlCEIjlCFg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#157872").s().p("AhyiEIDlCEIjlCFg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#20B2AA").s().p("AkwEsIAApXIJhAAIAAJXg");
	this.shape_2.setTransform(0,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.5,-13.2,23,26.6);


(lib.Night = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A91d1QsWsWAAxfQAAxdMWsYQMYsWRdAAQRfAAMWMWQMXMYAARdQAARfsXMWQsWMXxfAAQxdAAsYsXg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Night, new cjs.Rectangle(-270,-270,540,540), null);


(lib.JL_logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.JohnLewis();
	this.instance.parent = this;
	this.instance.setTransform(-88,-20.5,0.437,0.437);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.JL_logo, new cjs.Rectangle(-88,-20.5,176,41.1), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FEEF35","#FEF03A","#FEF356","#FFF89B","#FFFFFF"],[0,0.106,0.322,0.631,1],0,56.8,0,-56.8).s().p("AK7I0QgngEkTg4QjhguigAAQifAAjgAuQkUA4gmAEQiTAQhBg4QhOhDAAi+QAAmFEijlQEQjYGpAAQGqAAERDYQEhDlAAGFQAAC+hOBDQgzAshkAAQgcAAgggEg");
	this.shape.setTransform(98.8,56.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,197.6,113.6), null);


(lib.E_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.E();
	this.instance.parent = this;
	this.instance.setTransform(-30.5,-114.4,0.874,0.874);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.E_1, new cjs.Rectangle(-30.5,-114.4,61.2,229), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#5F0500","#D70B00"],[0,1],-70,0,70,0).s().p("Aq7CWIAAkrIV3AAIAAErg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(-70,-15,140,30), null);


(lib.A_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.A();
	this.instance.parent = this;
	this.instance.setTransform(-35,-106);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.A_1, new cjs.Rectangle(-35,-106,70,212), null);


(lib.Sun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,-24.4,0.524,0.524,0,0,0,98.8,56.9);
	this.instance.alpha = 0.262;

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#F8EA47","#F5D941","#F5D640","#F4CD3E","#F4BD3C","#F2A638","#F2A438"],[0,0.404,0.596,0.741,0.871,0.992,1],3.7,-52.3,0,3.7,-52.3,140).s().p("AnQQpQjWhZikifQilighcjQQhdjWAAjrQAAjqBdjXQBcjPClifQCkihDWhXQDehbDyAAQDzAADdBbQDXBXCkChQCmCfBbDPQBdDXAADqQAADrhdDWQhbDQimCgQikCfjXBZQjdBajzAAQjyAAjehag");
	this.shape.setTransform(0,0,0.524,0.524);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Sun, new cjs.Rectangle(-62.5,-60.5,125.1,121.2), null);


(lib.sale = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAgQgHgCgEgFQgEgFgDgGQgCgHAAgHQAAgGACgHQADgGAFgFQAEgEAGgDQAGgDAHAAIAIABIAHACQAGADAEAFQAEAFACAHQABAGAAAFIAAAFIg0AAQAAAEACAEIAFAGIAHAEQAEABAEAAQAFAAAFgDQAEgCAEgFIAJAHQgLAOgSAAQgHAAgGgDgAAUgEIgCgIQAAgEgDgCIgGgEQgDgCgGAAQgDAAgEACQgDACgDADIgFAGIgBAHIAnAAIAAAAg");
	this.shape.setTransform(49.3,1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFA1IAAhpIALAAIAABpg");
	this.shape_1.setTransform(43.7,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAiIgIgEIgEgGQgCgEAAgFQAAgGADgFQACgEAGgCQAFgDAGgBIANgBIAJAAIAAgDIgBgFIgDgEIgEgDQgDgCgEAAIgGABIgFACIgEACIgDADIgHgIQAFgFAGgCQAIgDAGAAQAHAAAFACQAFACAEADIAFAHQACAEAAAEIAAAhIAAAHIAAAFIgLAAIAAgKIgBAAQgEAHgGACQgGADgGAAIgJgBgAABACIgIACIgGAEQgDACABAEQAAAGADACQAEADAGAAQAFAAADgCIAGgEIADgHIABgHIAAgEIgGAAg");
	this.shape_2.setTransform(38.4,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAgQgGgCgFgHIAJgIIAHAGQAEACAFAAIAEAAIAEgCIAEgDIABgDQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgEgDIgFgBIgEgBIgIgDQgEgBgCgBQgDgCgCgDQgCgEAAgEQAAgGADgDQACgEADgDQAEgCAFgCIAIgBQAGAAAHADQAGACADAGIgJAIIgGgFQgDgCgFAAQgEAAgDACQgDACAAADQAAADACACIAEADIAFACIAFABIAHACIAHADIAEAFQABADAAAFQAAAGgCAEQgDAEgDACQgEADgFABIgJABQgIAAgGgDg");
	this.shape_3.setTransform(31.6,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSAiIAAhBIAMAAIAAAKIABAAQABgDACgCIAEgDIAFgDIAGgBIAGABIAAANIgEAAIgDAAIgIAAIgFAEQgCADgBAEQgCAEAAAEIAAAig");
	this.shape_4.setTransform(22.5,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAgQgGgCgEgFQgEgFgDgGQgDgHABgHQgBgGADgHQADgGAFgFQAEgEAGgDQAHgDAGAAIAIABIAHACQAGADAEAFQAEAFABAHQACAGAAAFIAAAFIg0AAQAAAEACAEIAFAGIAHAEQAEABAEAAQAGAAAEgDQAEgCAEgFIAJAHQgKAOgTAAQgHAAgHgDgAAUgEIgBgIQgCgEgCgCIgGgEQgDgCgFAAQgEAAgEACQgDACgDADIgFAGIgBAHIAnAAIAAAAg");
	this.shape_5.setTransform(15.8,1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlAiIAAgkIAAgHIgCgHIgEgDQgDgCgFAAQgEAAgEABQgDABgCADQgEAGAAAJIAAAjIgLAAIAAgiIgBgJIgCgGQgBgDgDgBQgDgCgEAAQgEAAgDABQgDABgCADQgDACgBAFQgCAEAAAFIAAAiIgMAAIAAhBIAMAAIAAAKIACgEIAEgDIAHgDQAEgCAEAAQAHAAAGADQAEADADAHQADgHAGgDQAGgDAGAAQAIAAAEADQAFACADAEQADAEABAFIABAMIAAAlg");
	this.shape_6.setTransform(5.9,1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAlAiIAAgkIAAgHIgCgHIgEgDQgDgCgFAAQgEAAgEABQgDABgCADQgEAGAAAJIAAAjIgLAAIAAgiIgBgJIgCgGQgBgDgDgBQgDgCgEAAQgEAAgDABQgDABgCADQgDACgBAFQgCAEAAAFIAAAiIgMAAIAAhBIAMAAIAAAKIACgEIAEgDIAHgDQAEgCAEAAQAHAAAGADQAEADADAHQADgHAGgDQAGgDAGAAQAIAAAEADQAFACADAEQADAEABAFIABAMIAAAlg");
	this.shape_7.setTransform(-6,1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgOAgQgEAAgEgEQgDgDgBgFQgCgEAAgHIAAgqIAMAAIAAAmQAAAFABADQABAEADACIAEACIAHABIAGgBQADgBACgDQADgCACgFIABgJIAAgiIAMAAIAABBIgMAAIAAgKQgBADgDACIgFAEIgGADIgHAAQgEAAgFgCg");
	this.shape_8.setTransform(-15.8,1.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgOAgQgGgCgFgHIAJgIIAHAGQAEACAFAAIAEAAIAEgCIAEgDIABgDQAAgBAAgBQAAAAgBgBQAAAAAAgBQgBAAAAgBIgEgDIgFgBIgEgBIgIgDQgEgBgCgBQgDgCgCgDQgCgEAAgEQAAgGADgDQACgEADgDQAEgCAFgCIAIgBQAGAAAHADQAGACADAGIgJAIIgGgFQgDgCgFAAQgEAAgDACQgDACAAADQAAADACACIAEADIAFACIAFABIAHACIAHADIAEAFQABADAAAFQAAAGgCAEQgDAEgDACQgEADgFABIgJABQgIAAgGgDg");
	this.shape_9.setTransform(-22.9,1.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMAgQgHgCgEgFQgFgFgCgGQgDgHAAgHQAAgGADgHQADgGAFgFQAEgEAGgDQAHgDAGAAIAIABIAHACQAGADAEAFQAEAFACAHQACAGAAAFIAAAFIg1AAQAAAEACAEIAFAGIAHAEQAEABADAAQAGAAAFgDQAEgCADgFIAKAHQgLAOgSAAQgHAAgGgDgAAUgEIgCgIQAAgEgDgCIgGgEQgEgCgFAAQgDAAgEACQgDACgDADIgFAGIgBAHIAnAAIAAAAg");
	this.shape_10.setTransform(-33.6,1.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AARA1IAAgnIgBgIIgEgGIgEgBIgHgBQgCAAgEABIgFADQgDACgCAFQgBAEAAAGIAAAiIgMAAIAAhpIAMAAIAAAyIAAAAQADgFAFgDQADgCAEgBIAGgBQAFAAAFACQAEABADADQADADACAFQACAEAAAGIAAArg");
	this.shape_11.setTransform(-41.3,-0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgGAxIAAhVIggAAIAAgNIBNAAIAAANIggAAIAABVg");
	this.shape_12.setTransform(-49.2,-0.5);

	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-58.9,0.1,0.843,0.732,0,0,0,-69.9,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sale, new cjs.Rectangle(-59,-11.5,118,23.1), null);


(lib.L_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.L_1, new cjs.Rectangle(-35,-102,70,204), null);


(lib.date = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgRAnIAehEIgkAAIAAgJIAvAAIAAAJIgdBEg");
	this.shape.setTransform(20.4,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAFAnIAAhBIgNANIgHgHIAVgSIAKAAIAABNg");
	this.shape_1.setTransform(13.8,-0.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgHAnIgGgDQgFgEgDgGIgEgNIgBgNIAAgIIACgJIADgJIAFgHIAHgFQAEgBAFAAQAFAAAEABQAFACADADIAFAHIADAJIABAJIABAIIgBANIgEANIgEAGIgFAEQgFAEgIAAIgHgBgAgFgdQgDACgCACIgDAGIgBAHIgBAHIAAAFIAAAJIACAKQACAFADADQADAEAFAAQAFAAAEgEQADgDABgFQACgFABgFIAAgJIAAgFIgBgHIgCgHIgCgGIgFgEQgDgBgDAAQgDAAgCABg");
	this.shape_2.setTransform(8.3,-0.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAoIAAgLIAfgeIADgDIACgFIACgDIACgFIgCgFIgDgEQgCgCgCgBIgFgBQgFAAgDADIgDAFIgCAEIgMgBQABgFADgEQABgEAEgCQAEgCAEgCQAEgBAEAAQAFAAAEABIAIAFQAEADACADQACAFAAAEIgBAIIgEAGIgEAFIgFAFIgZAZIAnAAIAAAJg");
	this.shape_3.setTransform(2.2,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgUAnIgEgBIABgJIAGABIAEgBIACgBIACgDIACgEIADgIIgVgzIALAAIAOAnIABAAIAOgnIALAAIgZA+IgBAGIgEAFIgFADIgGABg");
	this.shape_4.setTransform(-6.6,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgEApIAAhSIAJAAIAABSg");
	this.shape_5.setTransform(-10.7,-0.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAZQgDgBgDgCIgDgGQgCgEAAgFIAAghIAKAAIAAAeIABAGIACAEIAFADIAEAAIAFgBIAEgDQACgCABgDQABgEABgEIAAgaIAJAAIAAAzIgJAAIAAgIIgBAAIgDAEIgEADIgFACIgEABQgEAAgEgCg");
	this.shape_6.setTransform(-15,0.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIAnQgDgBgDgCIgEgFIgDgIIALgCQAAAEADADQADACAEAAQADAAADgBQACgCABgDIACgFIAAgHIAAgzIALAAIAAA3QAAAHgDAFQgCAFgDACQgDADgEABIgHABIgIgBg");
	this.shape_7.setTransform(-21.1,-0.3);

	this.instance = new lib.box();
	this.instance.parent = this;
	this.instance.setTransform(-30.5,0.1,0.436,0.667,0,0,0,-70,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.date, new cjs.Rectangle(-30.5,-10,61,20), null);


// stage content:
(lib.retail_336x280 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.play_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(2);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(236));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32AFA1").ss(1,1,1).p("A6P4/MA0fAAAMAAAAx/Mg0fAAAg");
	this.shape.setTransform(168,140,1,0.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(236));

	// Start
	this.instance = new lib.JL_logo();
	this.instance.parent = this;
	this.instance.setTransform(168,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({alpha:0},10).wait(196));

	// Size
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#20B2AA").s().p("AgWApQgJgNgBgcQABgRADgKQAEgLAHgGQAHgGAKAAQAIAAAGADQAGADAEAGQAEAGACAJQACAJAAAOQABASgEALQgDAKgIAHQgHAFgLAAQgOAAgIgKgAgNghQgGAJAAAYQAAAZAGAIQAFAIAIAAQAJAAAFgIQAGgJAAgYQAAgYgGgIQgFgIgJAAQgIAAgFAHg");
	this.shape_1.setTransform(320.5,299.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#20B2AA").s().p("AgWAqQgKgIAAgOQAAgKAFgGQAFgGAJgCQgIgDgDgFQgEgFAAgHQAAgLAIgHQAIgIAMAAQANAAAIAIQAIAHAAALQAAAHgEAFQgDAFgIADQAJADAGAGQAEAGAAAKQAAAMgJAJQgJAJgPAAQgNAAgJgJgAgNAGQgGAGAAAIQAAAGADAFQACAFAEADQAGACAFAAQAIAAAGgFQAFgHABgIQgBgJgFgGQgGgFgJAAQgIgBgFAGgAgLgjQgEAEAAAHQAAAGAEAFQAFAFAHAAQAGAAAFgFQAFgFgBgGQABgHgFgEQgFgFgHAAQgGAAgFAFg");
	this.shape_2.setTransform(312.8,299.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#20B2AA").s().p("AggAyQAAgEABgEQADgHAGgHQAFgGALgJQAPgNAGgHQAFgIAAgHQAAgHgFgFQgFgFgIAAQgIAAgGAFQgFAFAAAKIgNgBQACgPAIgHQAJgHANAAQAOAAAJAIQAIAIAAALQAAAGgCAGQgDAGgGAGIgTARIgNANIgFAGIAwAAIAAAMg");
	this.shape_3.setTransform(304.9,299.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#20B2AA").s().p("AATAkIgPgWIgEgGIgSAcIgPAAIAagkIgYgjIAPAAIALARIAFAIIAFgIIANgRIAOAAIgZAiIAbAlg");
	this.shape_4.setTransform(293.8,301.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#20B2AA").s().p("AgXAoQgJgLAAgbQAAgcAKgNQAKgLAOAAQAMAAAIAHQAHAGACAMIgMABQgCgHgCgDQgGgGgHAAQgFAAgFAEQgFADgEAJQgDAIAAAPQAEgHAHgDQAHgDAFAAQAMgBAKAKQAIAIAAAOQAAAKgEAIQgEAHgHAFQgIAEgJAAQgOAAgKgLgAgNACQgFAFAAAKQAAAHACAFQADAGAFADQAFADAEAAQAIAAAGgGQAFgHAAgKQAAgLgFgFQgGgGgIAAQgHAAgHAGg");
	this.shape_5.setTransform(282.6,299.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#20B2AA").s().p("AgWArQgJgIgBgMIAMgCQADALAFAEQAFAFAHAAQAIAAAGgGQAGgGAAgJQAAgJgGgFQgFgGgJAAIgIACIACgKIACAAQAHAAAGgEQAGgEAAgJQAAgGgEgFQgFgEgGAAQgHAAgFAEQgFAFgBAJIgNgCQADgNAIgHQAIgGAMAAQAHAAAHADQAHAEADAGQAEAGAAAHQAAAGgEAFQgDAGgHADQAJACAFAGQAFAGAAAKQAAANgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_6.setTransform(274.8,299.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#20B2AA").s().p("AgWArQgJgIgBgMIAMgCQADALAFAEQAFAFAHAAQAIAAAGgGQAGgGAAgJQAAgJgGgFQgFgGgJAAIgIACIACgKIACAAQAHAAAGgEQAGgEAAgJQAAgGgEgFQgFgEgGAAQgHAAgFAEQgFAFgBAJIgNgCQADgNAIgHQAIgGAMAAQAHAAAHADQAHAEADAGQAEAGAAAHQAAAGgEAFQgDAGgHADQAJACAFAGQAFAGAAAKQAAANgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_7.setTransform(267.1,299.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(236));

	// Control
	this.play_btn = new lib.play();
	this.play_btn.parent = this;
	this.play_btn.setTransform(21,300,0.774,0.774);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(236));

	// Band
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("A6PDIIAAmPMA0fAAAIAAGPg");
	this.shape_8.setTransform(168,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(236));

	// date
	this.instance_1 = new lib.date();
	this.instance_1.parent = this;
	this.instance_1.setTransform(200,279);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(182).to({_off:false},0).to({x:198.5,y:253,alpha:1},10,cjs.Ease.get(-1)).wait(44));

	// sale
	this.instance_2 = new lib.sale();
	this.instance_2.parent = this;
	this.instance_2.setTransform(175,150);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(178).to({_off:false},0).to({x:177.5,y:196.5,alpha:1},9,cjs.Ease.get(-1)).wait(49));

	// logo
	this.instance_3 = new lib.RedJL();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10,224);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(192).to({_off:false},0).to({x:176.5,alpha:1},14).wait(30));

	// E
	this.instance_4 = new lib.E_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(281,-118.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(151).to({_off:false},0).to({x:282,y:31.7},14).to({y:22},6).wait(65));

	// L
	this.instance_5 = new lib.L_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(209.5,-105.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(141).to({_off:false},0).to({x:210.5,y:49.1},20).to({x:211,y:36},4).wait(71));

	// A
	this.instance_6 = new lib.A_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(135.5,-112.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(132).to({_off:false},0).to({x:134.5,y:44.1},19).to({x:137,y:32},4).wait(81));

	// S
	this.instance_7 = new lib.Tween7("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(57,-114.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.Tween5("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(56,41.5);
	this.instance_8._off = true;

	this.instance_9 = new lib.Tween6("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(55,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},122).to({state:[{t:this.instance_8}]},19).to({state:[{t:this.instance_9}]},4).wait(91));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(122).to({_off:false},0).to({_off:true,x:56,y:41.5},19).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(122).to({_off:false},19).to({_off:true,x:55,y:28.5},4).wait(91));

	// Night
	this.instance_10 = new lib.Night();
	this.instance_10.parent = this;
	this.instance_10.setTransform(168,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(41).to({alpha:0},78).wait(117));

	// Road
	this.instance_11 = new lib.road();
	this.instance_11.parent = this;
	this.instance_11.setTransform(168,226,1.12,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(236));

	// Sun
	this.instance_12 = new lib.Sun();
	this.instance_12.parent = this;
	this.instance_12.setTransform(171,220.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(41).to({_off:false},0).to({x:169,y:111.2},84).wait(111));

	// Rays
	this.instance_13 = new lib.Rays();
	this.instance_13.parent = this;
	this.instance_13.setTransform(150,186,0.185,0.185,0,0,0,0.6,84.1);
	this.instance_13.alpha = 0.191;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(41).to({_off:false},0).to({regX:0.8,regY:84.4,scaleX:0.96,scaleY:0.96,x:168.8,y:174.3,alpha:0.48},84).wait(111));

	// Background
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#DFF9D5","#D8F7D3","#C7F0CE","#ABE4C6","#84D3BA","#53BEAB","#33AFA1"],[0.008,0.298,0.376,0.486,0.616,0.757,0.906,1],10.3,192.2,0,10.3,192.2,491.3).s().p("Eg86AqvMAAAhVdMB51AAAMAAABVdg");
	this.shape_9.setTransform(170,0,0.431,0.511,0,0,0,4.3,-274.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(236));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(66,50,540,540);
// library properties:
lib.properties = {
	width: 336,
	height: 320,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/retail_336x280_atlas_.png", id:"retail_336x280_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;