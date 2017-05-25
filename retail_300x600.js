(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"retail_300x600_atlas_", frames: [[0,208,70,212],[302,96,70,262],[0,0,403,94],[72,208,70,204],[0,96,300,110],[374,96,70,217]]}
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
	this.spriteSheet = ss["retail_300x600_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.E = function() {
	this.spriteSheet = ss["retail_300x600_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.JohnLewis = function() {
	this.spriteSheet = ss["retail_300x600_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.L = function() {
	this.spriteSheet = ss["retail_300x600_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Road = function() {
	this.spriteSheet = ss["retail_300x600_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.S = function() {
	this.spriteSheet = ss["retail_300x600_atlas_"];
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


(lib.Tween6 = function(mode,startPosition,loop) {
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
(lib.retail_300x600 = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(240));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#32AFA1").ss(1,1,1).p("A7VAAMA2rAAA");
	this.shape.setTransform(150,600,0.857,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#32AFA1").ss(1,1,1).p("A7VAAMA2rAAA");
	this.shape_1.setTransform(150,0,0.857,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#32AFA1").ss(1,1,1).p("EgXbgu3MAAABdvEAXcgu3MAAABdv");
	this.shape_2.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(240));

	// start
	this.instance = new lib.JL_logo();
	this.instance.parent = this;
	this.instance.setTransform(150,320);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30).to({alpha:0},9).wait(201));

	// size
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#20B2AA").s().p("AgWApQgKgNABgcQAAgRADgLQAEgLAHgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAGACAKQACAIAAAOQABASgEAKQgDAMgIAFQgHAGgLAAQgOAAgIgKgAgNghQgGAKAAAXQAAAZAGAIQAFAIAIAAQAJAAAFgIQAGgIAAgZQAAgXgGgJQgFgIgJAAQgIAAgFAHg");
	this.shape_3.setTransform(283.6,619.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#20B2AA").s().p("AgWApQgJgNAAgcQAAgRADgLQADgLAIgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAGADAKQABAIAAAOQAAASgDAKQgDAMgIAFQgHAGgLAAQgNAAgJgKgAgNghQgGAKAAAXQAAAZAGAIQAFAIAIAAQAJAAAFgIQAGgIAAgZQAAgXgGgJQgFgIgJAAQgIAAgFAHg");
	this.shape_4.setTransform(275.9,619.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#20B2AA").s().p("AgWArQgJgIgBgMIAMgCQADALAFAEQAFAFAHAAQAIAAAGgGQAGgGAAgJQAAgJgGgFQgFgGgJAAIgIACIACgKIACAAQAHAAAGgEQAGgEAAgJQAAgGgEgFQgFgEgGAAQgHAAgFAEQgFAFgBAJIgNgCQADgNAIgHQAIgGAMAAQAHAAAHADQAHAEADAGQAEAGAAAHQAAAGgEAFQgDAGgHADQAJACAFAGQAFAGAAAKQAAANgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_5.setTransform(268.1,619.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#20B2AA").s().p("AATAkIgPgWIgEgGIgSAcIgPAAIAagkIgYgjIAPAAIALARIAFAIIAFgIIANgRIAOAAIgZAiIAbAlg");
	this.shape_6.setTransform(256.9,621.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#20B2AA").s().p("AgWApQgKgNAAgcQAAgRAEgLQADgLAIgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAGACAKQACAIABAOQAAASgEAKQgEAMgHAFQgHAGgLAAQgNAAgJgKgAgNghQgGAKAAAXQAAAZAGAIQAFAIAIAAQAIAAAHgIQAFgIAAgZQAAgXgFgJQgHgIgIAAQgHAAgGAHg");
	this.shape_7.setTransform(245.7,619.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#20B2AA").s().p("AgWApQgKgNAAgcQABgRADgLQAEgLAHgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAGACAKQACAIAAAOQAAASgDAKQgEAMgHAFQgHAGgLAAQgOAAgIgKgAgNghQgGAKAAAXQAAAZAGAIQAGAIAHAAQAJAAAFgIQAGgIAAgZQAAgXgGgJQgFgIgJAAQgHAAgGAHg");
	this.shape_8.setTransform(237.9,619.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#20B2AA").s().p("AgXAoQgJgMAAgZQAAgdAKgMQAKgMAOAAQAMAAAIAGQAHAHACAMIgMABQgBgHgEgEQgEgFgIAAQgFAAgEADQgGAEgDAIQgEAJAAAPQAFgHAGgDQAHgDAFAAQANAAAIAJQAJAHAAAPQAAAJgEAIQgEAJgHAEQgHAEgJAAQgPAAgKgLgAgNABQgFAHAAAJQAAAHADAFQADAGAEADQAFADAFAAQAHAAAGgGQAFgHAAgLQAAgKgFgGQgGgEgIAAQgHAAgHAEg");
	this.shape_9.setTransform(230.2,619.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(240));

	// control
	this.play_btn = new lib.play();
	this.play_btn.parent = this;
	this.play_btn.setTransform(21,620,0.774,0.774);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(240));

	// band
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("A3bDIIAAmPMAu3AAAIAAGPg");
	this.shape_10.setTransform(150,620);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(240));

	// date
	this.instance_1 = new lib.date();
	this.instance_1.parent = this;
	this.instance_1.setTransform(186.3,350,1.5,1.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(190).to({_off:false},0).to({x:183.3,y:320.4,alpha:1},10).wait(40));

	// sale
	this.instance_2 = new lib.sale();
	this.instance_2.parent = this;
	this.instance_2.setTransform(151.8,198.6,1.5,1.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(185).to({_off:false},0).to({y:235.6,alpha:1},10).wait(45));

	// logo
	this.instance_3 = new lib.RedJL();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-70,277,1.5,1.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(200).to({_off:false},0).to({x:150.3,alpha:1},10).wait(30));

	// E
	this.instance_4 = new lib.E_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(262,-119.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(150).to({_off:false},0).to({y:70.5},20).to({y:50.5},10).wait(60));

	// L
	this.instance_5 = new lib.L_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(191,-108.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(141).to({_off:false},0).to({y:85.5},19).to({y:64.5},10).wait(70));

	// A
	this.instance_6 = new lib.A_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(121,-110);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(131).to({_off:false},0).to({x:116,y:79.5},19).to({y:60.5},10).wait(80));

	// S
	this.instance_7 = new lib.Tween6("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(35,-120.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(120).to({_off:false},0).to({y:80.5},20).to({x:40,y:56.5},10).wait(90));

	// night
	this.instance_8 = new lib.Night();
	this.instance_8.parent = this;
	this.instance_8.setTransform(147.2,465.2,1.833,1.833,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(39).to({alpha:0},80).wait(121));

	// road
	this.instance_9 = new lib.road();
	this.instance_9.parent = this;
	this.instance_9.setTransform(300.2,545,1,1,0,0,0,150.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(240));

	// sun
	this.instance_10 = new lib.Sun();
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,558);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(40).to({_off:false},0).to({y:432},79).wait(121));

	// rays
	this.instance_11 = new lib.Rays();
	this.instance_11.parent = this;
	this.instance_11.setTransform(150.9,492.1,0.131,0.131,0,0,0,0.8,84.3);
	this.instance_11.alpha = 0.48;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(40).to({_off:false},0).to({regY:84.4,scaleX:0.96,scaleY:0.96,x:150.8},79).wait(121));

	// background
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","#DFF9D5","#D8F7D3","#C7F0CE","#ABE4C6","#84D3BA","#53BEAB","#33AFA1"],[0.008,0.298,0.376,0.486,0.616,0.757,0.906,1],10.3,192.2,0,10.3,192.2,491.3).s().p("Eg86AqvMAAAhVdMB51AAAMAAABVdg");
	this.shape_11.setTransform(299.9,279.9,0.385,1.028,0,0,0,389.7,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198,290,990,990);
// library properties:
lib.properties = {
	width: 300,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/retail_300x600_atlas_.png", id:"retail_300x600_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;