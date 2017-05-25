(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"travel_336x280_atlas_", frames: [[0,282,300,300],[0,0,336,280]]}
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



(lib.flag = function() {
	this.spriteSheet = ss["travel_336x280_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.travel_336x280_1 = function() {
	this.spriteSheet = ss["travel_336x280_atlas_"];
	this.gotoAndStop(1);
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


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#159B3F").ss(6,1,1).p("ALu0TMgXbAon");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-133,156,266);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEDE32").ss(6,1,1).p("ALu0TMgXbAon");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-133,156,266);


(lib.text_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgPAsQgJgDgGgGQgHgHgDgJIgDgJIgBgJIAAgBQAAgIAEgJQADgJAGgHQAGgGAIgEIAJgCIAIgBQAGAAAFABIAJADQAEABAEAEIAGAFQAFAHADAJQADAJAAAJIgBAHIg+AAIADAIQACADADACIAGAEQAEABADAAQAHAAAFgCQAFgCAFgFIAPAMIgHAHQgEAEgEACIgKADIgMABQgMAAgGgDgAAUgGIgCgIIgEgGQgDgDgDgBQgEgBgEgBQgDABgDABQgDABgDADIgEAGQgCADAAAFIAmAAIAAAAg");
	this.shape.setTransform(54,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_1.setTransform(46.3,19.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgCA+IgIgDQgGgDgFgHIAAAMIgaAAIAAh7IAaAAIAAAuQAFgHAHgDIAHgDQAEgCAFAAQAIAAAHAEQAHADAGAGQAGAGAEAIQADAMAAAIIgBALIgCAJQgEAJgGAGQgFAGgIADQgHADgIAAIgJgBgAgIgHQgEACgDADQgDADgBAEQgCAFAAAGQAAAFACAFQABAFADADIAHAFQAEACAEAAQAEAAAEgCQAFgBADgEQADgDABgFQACgFAAgFQAAgGgCgFQgBgEgDgDQgDgDgFgCQgEgCgEAAQgEAAgEACg");
	this.shape_2.setTransform(38.2,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgWAtQgGgCgDgDQgFgEgDgFQgCgFAAgHIAAAAQAAgIADgFQADgGAFgCQAEgEAHgCQAHgBAIAAQAIAAANADIAAgBIgBgHIgEgFQgDgDgDgBIgIgBQgGAAgGACIgNADIgGgUQAIgDAHgCQAKgCAKAAQAJAAAJADQAHACAFAFQAFAFADAIQACAHAAAJIAAA0IgZAAIAAgKQgFAGgHADQgFADgKAAQgGAAgGgCgAgLAIQgFAEAAAGIAAAAQAAAFAEADQAEADAGAAQAEAAADgBIAHgDIAEgFQABgDAAgEIAAgEQgHgEgJAAQgIAAgEADg");
	this.shape_3.setTransform(27,21.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_4.setTransform(19.7,19.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_5.setTransform(14.6,19.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgWAtQgGgCgDgDQgFgEgDgFQgCgFAAgHIAAAAQAAgIADgFQADgGAEgCQAFgEAHgCQAGgBAJAAQAIAAANADIAAgBIgBgHIgEgFQgDgDgDgBIgIgBQgGAAgGACIgNADIgGgUQAIgDAHgCQAKgCAKAAQAJAAAJADQAHACAFAFQAFAFADAIQACAHAAAJIAAA0IgZAAIAAgKQgFAGgHADQgFADgKAAQgGAAgGgCgAgLAIQgFAEAAAGIAAAAQAAAFAEADQAEADAGAAQAEAAADgBIAHgDIAEgFQABgDAAgEIAAgEQgHgEgJAAQgIAAgEADg");
	this.shape_6.setTransform(6.8,21.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgLAuIgkhbIAcAAIATA8IAVg8IAbAAIgkBbg");
	this.shape_7.setTransform(-3.1,21.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgWAtQgGgCgDgDQgFgEgDgFQgCgFAAgHIAAAAQAAgIADgFQADgGAEgCQAFgEAHgCQAGgBAJAAQAIAAANADIAAgBIgBgHIgEgFQgDgDgDgBIgIgBQgGAAgGACIgNADIgGgUQAIgDAHgCQAKgCAKAAQAJAAAJADQAHACAFAFQAFAFADAIQACAHAAAJIAAA0IgZAAIAAgKQgFAGgHADQgFADgKAAQgGAAgGgCgAgLAIQgFAEAAAGIAAAAQAAAFAEADQAEADAGAAQAEAAADgBIAHgDIAEgFQABgDAAgEIAAgEQgHgEgJAAQgIAAgEADg");
	this.shape_8.setTransform(-13.5,21.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AARAuIgRg3IgRA3IgXAAIgchaIAaAAIAPA2IARg3IAVAAIARA3IAPg2IAaAAIgcBag");
	this.shape_9.setTransform(-30.7,21.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgJAuIgKgCQgLgGgFgEQgGgHgEgIIgCgJIgBgJIAAgBQAAgFADgMQAEgJAHgHQAEgDAMgHIAJgCIAJgBQAHAAAMADQAHADAJAHQAHAHADAJQAEALABAGIgCAJIgDAJQgDAJgHAHQgJAHgHADQgMAEgHgBgAgJgWQgFACgDADQgDADgBAFQgCAFAAAEQAAAFACAEQABAFAEAEQADADAEADQAFABAEAAQAFAAAFgBQAFgDACgDQADgEACgEQACgFAAgEIAAgBQAAgEgCgEQgBgFgEgEQgDgDgFgCQgEgCgFAAQgEAAgFACg");
	this.shape_10.setTransform(-43.6,21.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AAQAvIAAgzIgBgIQgBgDgCgCQgCgCgDgCQgDgBgEAAQgCAAgDABQgDACgCACQgDACgBADIgBAIIAAAzIgaAAIAAhaIAaAAIAAAMQAFgGAGgEIAGgDIAJgBQAHAAAGACQAGADAEAEQAEAEACAHQACAFAAAIIAAA7g");
	this.shape_11.setTransform(-54.5,21.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AghA5IAAhvIAgAAIAAAWQABgGAEgEIAHgIQAFgEAFgBQAGgCAHABIAAAhIgCAAQgIAAgGACQgGADgFAFQgEAFgDAHQgBAHAAAKIAAApg");
	this.shape_12.setTransform(55.7,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgTA2QgLgEgIgIQgIgIgEgKIgDgLIgBgNIAAAAQAAgLAEgKQAEgMAHgHQAIgJAKgEIAKgDIALgBIANABIAMADQAFACAEAEIAIAIQAGAIAEALQADALAAAMIAAAIIhOAAQABAFADAFIAGAGIAIAFQAEABAFAAQAIAAAGgDQAGgDAHgFIASAPIgIAJQgFAEgGADIgMAEQgHABgIABQgPgCgHgDgAAYgIQgBgGgCgEQgCgEgDgEIgHgEQgEgCgFAAQgEAAgEACIgHAEQgDAEgCAEIgDAKIAvAAIAAAAg");
	this.shape_13.setTransform(44.4,0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgVBNIAAhUIgNAAIAAgaIANAAIAAgHQAAgKACgGQACgHAFgFQAIgIARAAQANAAAJADIAAAaQgHgDgHAAQgGAAgDADQgCADAAAHIAAAEIAZAAIAAAaIgZAAIAABUg");
	this.shape_14.setTransform(34.2,-1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgVBNIAAhUIgNAAIAAgaIANAAIAAgHQAAgKACgGQACgHAFgFQAIgIAQAAQAOAAAKADIAAAaQgIgDgHAAQgGAAgDADQgCADAAAHIAAAEIAZAAIAAAaIgZAAIAABUg");
	this.shape_15.setTransform(26.2,-1.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgMA6IgLgEQgOgHgGgFQgIgJgEgKIgEgLIgBgMIAAAAQAAgHAFgPQAEgLAJgHQAFgGAOgHIALgDIAMgBQAJgBAPAFQAIADAMAKQAIAHAEALQAFAPAAAHIAAAAIgBAMIgEALQgEAKgJAJQgMAJgHADQgQAEgIABgAgMgcQgFACgEAFQgDAEgCAGQgCAFAAAGIAAAAQAAAGACAGQACAGAEAEQAEAEAFACQAGADAFAAQAHAAAFgDQAGgBAEgFQADgEACgGQACgFAAgHIAAAAQAAgFgCgGQgCgFgEgFQgEgEgFgDQgGgCgGAAQgGAAgGACg");
	this.shape_16.setTransform(15.1,0.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgPBNIAAiZIAfAAIAACZg");
	this.shape_17.setTransform(-1.3,-1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgTA2QgLgEgIgIQgIgIgEgKIgDgLIgBgNIAAAAQAAgLAEgKQAEgMAHgHQAIgJAKgEIAKgDIALgBIANABIAMADQAFACAEAEIAIAIQAGAIAEALQADALAAAMIAAAIIhOAAQABAFADAFIAGAGIAIAFQAEABAFAAQAIAAAGgDQAGgDAHgFIASAPIgIAJQgFAEgGADIgMAEQgHABgIABQgPgCgHgDgAAYgIQgBgGgCgEQgCgEgDgEIgHgEQgEgCgFAAQgEAAgEACIgHAEQgDAEgCAEIgDAKIAvAAIAAAAg");
	this.shape_18.setTransform(-10.9,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgOA5IgshxIAiAAIAYBLIAahLIAhAAIgtBxg");
	this.shape_19.setTransform(-23.6,0.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgbA4QgHgCgFgFQgGgEgDgGQgDgHAAgIQAAgJAEgIQADgGAGgEQAGgFAIgCQAJgBAKAAQAKAAAQAEIAAgCQAAgFgBgEQgCgEgDgCQgDgDgEgBQgFgCgFABQgJgBgHACIgPAFIgIgZQAKgFAJgCQALgCANAAQAMAAAKADQAKADAGAHQAGAGADAJQADAJAAALIAABBIgfAAIAAgMQgGAHgIADQgIAEgLAAQgIAAgHgCgAgOAKQgGAFAAAHIAAABQAAAGAFAEQAFADAIAAQAEAAAFgCIAIgDQADgDACgEQACgEAAgEIAAgGQgJgEgMABQgJgBgGAEg");
	this.shape_20.setTransform(-36.4,0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AghA5IAAhvIAgAAIAAAWQABgGAEgEIAHgIQAFgEAFgBQAGgCAHABIAAAhIgCAAQgIAAgGACQgGADgFAFQgEAFgDAHQgBAHAAAKIAAApg");
	this.shape_21.setTransform(-46.3,0.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgCBGQgGgCgFgDQgEgEgCgHQgCgHgBgJIAAg0IgNAAIAAgcIANAAIAAgdIAgAAIAAAdIAaAAIAAAcIgaAAIAAAvQgBAFADADQADADAFAAQAIAAAIgEIAAAZIgMAFQgGACgHAAQgJAAgEgCg");
	this.shape_22.setTransform(-55.6,-0.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgXA6QgKgDgJgEIAJgUQAHAFAHACQAIACAIAAQAGAAAFgCQAFgBADgEQADgDACgEQABgFAAgGIAAgEQgGAHgGADIgIADIgIABQgIAAgIgDQgHgCgFgGQgGgFgDgIQgEgHAAgKIAAgBQAAgGAEgMQADgHAGgGQAFgFAIgDQAHgDAIAAIAIABIAIADQAGADAGAHIAAgMIAaAAIAABFQgBAPgCAGIgEAJIgFAGIgHAGIgJADQgOADgIAAQgLAAgKgCgAgIgkQgEABgDADQgDADgBAEQgCAEAAAEIAAABQAAAEACAEQABAEADADIAHADQAEACAEAAQAFAAAEgCQAEgBADgCQADgDACgEQABgEAAgEIAAgBQAAgEgBgEQgCgEgDgDQgDgDgEgBQgEgCgFAAQgEAAgEACg");
	this.shape_23.setTransform(53.3,-19.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AAQAuIAAgxIgBgIQgBgEgCgCQgCgDgDAAQgDgCgEAAQgCAAgDACQgDAAgCADQgDACgBAEIgBAIIAAAxIgaAAIAAhaIAaAAIAAAOQAFgIAGgDIAGgDIAJgCQAHABAGACQAGADAEADQAEAFACAGQACAHAAAIIAAA5g");
	this.shape_24.setTransform(42.6,-20.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgMA+IAAhaIAZAAIAABagAgNgmIAAgXIAbAAIAAAXg");
	this.shape_25.setTransform(34.7,-22.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgmAtIAAgSIAugyIgtAAIAAgWIBMAAIAAASIguAzIAuAAIAAAVg");
	this.shape_26.setTransform(27.4,-20.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgWAtQgFgCgEgDQgFgEgCgFQgDgFAAgHIAAAAQAAgIADgFQADgGAFgCQAEgEAHgCQAHgBAIAAQAIAAANADIAAgBIgBgHIgEgFQgCgDgEgBIgHgBQgIAAgFACIgNADIgGgUQAIgDAHgCQAKgCAJAAQALAAAHADQAIACAFAFQAFAFADAIQACAHAAAJIAAA0IgZAAIAAgKQgFAGgGADQgHADgJAAQgGAAgGgCgAgLAIQgFAEAAAGIAAAAQAAAFAEADQAEADAGAAQAEAAAEgBIAGgDIAEgFQACgDgBgEIAAgEQgHgEgJAAQgHAAgFADg");
	this.shape_27.setTransform(17.4,-20.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AAsAuIAAgxIgBgIQgBgEgCgCQgCgDgDAAQgCgCgEAAQgEAAgDACQgDAAgCADQgCACgBAEIgBAIIAAAxIgZAAIAAgxIgBgIQgBgEgCgCQgCgDgDAAQgDgCgDAAQgDAAgDACQgEAAgCADQgBACgBAEIgBAIIAAAxIgaAAIAAhaIAaAAIAAAOQAFgIAFgDIAIgDQAEgBAEgBQAJAAAHAEQAFAEAEAHQAGgHAIgEIAHgDIAJgBQAHABAFACQAHACADAEQAFAFACAFQABAHAAAIIAAA6g");
	this.shape_28.setTransform(4.5,-20.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgWAtQgFgCgEgDQgFgEgCgFQgDgFAAgHIAAAAQAAgIADgFQADgGAFgCQAEgEAHgCQAGgBAJAAQAIAAANADIAAgBIgBgHIgEgFQgCgDgEgBIgHgBQgIAAgGACIgMADIgGgUQAIgDAHgCQAKgCAJAAQALAAAHADQAIACAFAFQAFAFADAIQACAHAAAJIAAA0IgZAAIAAgKQgFAGgGADQgHADgJAAQgGAAgGgCgAgLAIQgFAEAAAGIAAAAQAAAFAEADQAEADAGAAQADAAAFgBIAGgDIAEgFQACgDgBgEIAAgEQgHgEgJAAQgHAAgFADg");
	this.shape_29.setTransform(-8.8,-20.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgaAuIAAhaIAZAAIAAASIAEgIIAGgGQAEgDAEgBQAFgBAGgBIAAAbIgCAAQgGAAgGACQgEADgEAEQgEAEgBAFQgBAFgBAJIAAAhg");
	this.shape_30.setTransform(-21.9,-20.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgXAsQgGgCgEgFQgEgEgCgGQgCgHAAgHIAAg6IAaAAIAAAxQAAAFABAEIADAFIAFAEQADABADAAQADAAADgBQADgBACgDIAEgFIABgJIAAgxIAaAAIAABaIgaAAIAAgNQgFAHgGADIgGADIgJABQgHAAgGgCg");
	this.shape_31.setTransform(-31.1,-20.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgJAuIgKgCQgLgGgEgEQgHgGgDgJIgEgJIgBgKIAAAAQAAgGAFgMQADgIAHgGQAEgFAMgGIAJgDIAJgBQAHAAAMAEQAHADAJAIQAHAGAEAIQADAMAAAGIgBAJIgCAJQgEAJgHAGQgJAIgHADQgMAEgHAAgAgJgWQgEACgDADQgDAEgCAEQgCAEAAAFQAAAFACAEQABAGAEACQADAFAFACQAEABAEAAQAGAAAEgBQAFgCADgEQADgDABgFQACgEAAgGIAAAAQAAgEgCgFQgCgEgDgEQgDgDgEgCQgFgCgFAAQgEAAgFACg");
	this.shape_32.setTransform(-42,-20.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgMA7IAAgvIguhHIAfAAIAbAwIAdgwIAeAAIguBHIAAAvg");
	this.shape_33.setTransform(-53.7,-21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_main, new cjs.Rectangle(-61.8,-31.5,123.6,63), null);


(lib.text_body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AgTAlIgGgCIAEgKQAEABAEAAIAFgBIADgFIgYg5IAOAAIAQAqIAPgqIAOAAIgXA7IgEAHQgCADgBACIgFADIgHABIgHgBg");
	this.shape.setTransform(32.8,7.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgNAdQgDgBgDgDQgDgCgCgDQgBgDAAgEIAAgBQAAgEABgEIAFgFIAIgEIAJgBQAGAAAJADIAAgBIgBgGIgCgEIgFgCIgFgBIgJABIgIADIgDgLIAKgEQAFgBAGAAQAGAAAFABIAIAGQADADACAEQABAEAAAHIAAAhIgNAAIAAgHIgHAGQgGACgFAAIgIgBgAgEADIgFACIgCADIgBADQAAAEADADQADACAFAAIAFgBIAFgCIADgEIABgFIAAgDQgIgCgFgBIgEABg");
	this.shape_1.setTransform(26.1,6.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AANAdIgNgnIgMAnIgMAAIgTg5IAOAAIAMAmIAMgmIALAAIANAmIAMgmIANAAIgTA5g");
	this.shape_2.setTransform(18.3,6.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgNAdQgDgBgDgDQgDgCgCgDQgBgDAAgEIAAgBQAAgEABgEIAFgFIAIgEIAJgBQAGAAAJADIAAgBIgBgGIgCgEIgFgCIgFgBIgJABIgIADIgDgLIAKgEQAFgBAGAAQAGAAAFABIAIAGQADADACAEQABAEAAAHIAAAhIgNAAIAAgHIgHAGQgGACgFAAIgIgBgAgEADIgFACIgCADIgBADQAAAEADADQADACAFAAIAFgBIAFgCIADgEIABgFIAAgDQgIgCgFgBIgEABg");
	this.shape_3.setTransform(10.2,6.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AAMAoIgRgZIgIAJIAAAQIgNAAIAAhPIANAAIAAAvIAYgZIAQAAIgXAXIAXAig");
	this.shape_4.setTransform(1,5.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgCAdIgGgBQgFgCgFgEQgDgFgCgFQgDgFAAgHIAAAAQAAgFADgFQACgGADgEQAFgFAFgCIAGgBIAGgBIAHABIAGABQAEADAFAFIgIAJQgDgEgDgCQgEgCgFAAQgDABgCABIgGAEIgDAFIgBAHQgBAEACAEIADAGQACACAEABQACACAEAAQAFAAADgCIAHgGIAIAIQgGAHgEABIgGACIgIACg");
	this.shape_5.setTransform(-5.6,6.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgGAoIAAg5IANAAIAAA5gAgGgaIAAgNIANAAIAAANg");
	this.shape_6.setTransform(-10.3,5.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgGAoIAAhPIANAAIAABPg");
	this.shape_7.setTransform(-13.4,5.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AgCAdIgGgBQgFgCgEgEQgEgFgDgFQgCgFAAgHIAAAAQAAgFACgFQADgGAEgEQAEgFAFgCIAGgBIAFgBIAIABIAGABQAEADAGAFIgJAJQgDgEgEgCQgDgCgFAAQgDABgCABIgGAEIgDAFIgCAHQAAAEACAEIADAGQADACADABQACACAEAAQAFAAADgCIAHgGIAIAIQgGAHgEABIgGACIgIACg");
	this.shape_8.setTransform(-18,6.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgJAcQgFgCgEgEQgFgEgCgFIgCgGIAAgHQAAgFACgGQACgFAEgEQAEgFAFgCIAFgBIAFgBIAHABIAFABIAJAHQAEAFABAFQACAFAAAGIAAAEIgqAAIACAGIAEAFIAFACIAFABQAFAAAEgCQADgBAEgDIAIAGIgFAFIgFADIgHACIgHACQgGAAgFgDgAAPgDQAAgDgCgDIgCgFIgFgDIgGgCIgEABIgFAEIgDAEIgCAHIAdAAIAAAAg");
	this.shape_9.setTransform(-27.8,6.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AANAeIAAggIgBgGIgDgFQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgGgBIgEABIgEACIgDAFIgBAGIAAAgIgNAAIAAg5IANAAIAAAJQADgFAFgCIAEgDIAGgBQAEAAAEACQAEACACADQADACACAFQABAEAAAFIAAAkg");
	this.shape_10.setTransform(-34.5,6.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgGAdIgGgBQgFgCgEgEQgEgFgCgFIgDgFIAAgHIAAAAQAAgDADgHQACgGAEgEQAFgFAFgCIAGgBIAFgBQAFgBAHADQAGACAEAFQAEAEADAFIACALIgBAGIgBAGQgDAFgEAFQgEAEgGACQgHADgFAAgAgHgQQgCABgDADIgEAFIAAAHQgBAEACADQABAEACACIAGAEIAGACQAEAAAEgCIAFgDIAEgGIABgIIAAAAIgBgGIgEgGIgGgEQgDgBgEgBQgDABgEABg");
	this.shape_11.setTransform(-41.5,6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgTAlIgGgCIAEgLQAEADAEAAIAFgBIADgGIgYg5IAOAAIAQAqIAPgqIAOAAIgXA6IgEAIQgCAEgBABIgFADIgHABIgHgBg");
	this.shape_12.setTransform(41.7,-5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgGAoIAAhPIANAAIAABPg");
	this.shape_13.setTransform(36.9,-7.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AAMAeIAAggIAAgGIgDgFQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgGgBIgEABIgEACIgDAFIgBAGIAAAgIgNAAIAAg5IANAAIAAAJQADgFAEgCIAFgDIAGgBQAEAAAEACQAEACACADQADACACAFQABAEAAAFIAAAkg");
	this.shape_14.setTransform(32,-6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgGAdIgGgBQgFgDgEgEQgEgDgCgGIgDgGIAAgFIAAgBQAAgDADgIQACgFAEgFQAEgEAGgCIAGgCIAFgBQAFAAAHADQAGACAEAEQAFAEACAGIACALIgBAGIgBAGQgCAFgFAEQgEAEgGADQgHADgFgBgAgGgQQgDABgDADIgDAGIgBAGQgBAEACADQABADACADIAGAFIAGABQAEAAAEgBIAFgFIAEgFIABgHIAAgBIgBgGIgEgGIgGgEQgDgBgEAAQgDAAgDABg");
	this.shape_15.setTransform(25,-6.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgKAcIgMgHIAGgJQAEAEAFACQAFACAEAAQAEgBACgBQADgCAAgDIAAAAQAAgDgEgCIgIgDQgJgDgDgCIgFgEQgBgDAAgEIAAgBQAAgEABgDIAFgFIAGgEIAHgBQAGAAAFACQAGACAFACIgGAKIgIgEIgIgBQgDAAgCABQgCABAAADQAAADAEADIAIACIAGADIAGACQADACABADQACADAAADIAAABQAAAEgCAEIgEAGQgDACgEABIgIABQgGAAgGgCg");
	this.shape_16.setTransform(15.2,-6.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AgGAoIAAg5IANAAIAAA5gAgGgaIAAgNIANAAIAAANg");
	this.shape_17.setTransform(11,-7.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgJAcQgFgCgEgEQgFgEgCgGIgCgGIAAgGQAAgFACgGQACgFAEgFQAEgEAFgCIAFgCIAFgBIAHABIAFACIAJAHQAEAFABAFQACAFAAAGIAAADIgqAAIACAHIAEAEIAFAEIAFABQAFAAAEgCQADgCAEgEIAIAIIgFAEIgFAEIgHABIgHABQgGABgFgDgAAPgDQAAgDgCgDIgCgFIgFgDIgGgBIgEABIgFADIgDAFIgCAGIAdAAIAAAAg");
	this.shape_18.setTransform(2.9,-6.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AAfAeIAAggIgBgGIgCgFQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAgBAAIgFgBIgFABIgEACIgCAFIgCAGIAAAgIgMAAIAAggIAAgGIgCgFQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAIgEgBIgGABIgDACIgDAFIgBAGIAAAgIgNAAIAAg5IANAAIAAAIQADgEAEgCIAFgDIAGgBIAGABIAEACIAEADIACAFQAEgFAEgDIAGgCIAGgBQAEAAAEACQAEABADADIAEAHIABAKIAAAkg");
	this.shape_19.setTransform(-5.6,-6.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgGAoIAAg5IANAAIAAA5gAgGgaIAAgNIANAAIAAANg");
	this.shape_20.setTransform(-12.4,-7.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AAAAkIgFgCQgDgDgBgCQgBgEAAgEIAAgeIgHAAIAAgMIAHAAIAAgQIANAAIAAAQIAPAAIAAAMIgPAAIAAAbQAAAEACACQABACADgBQAFAAAEgCIAAALIgFACIgHACIgGgCg");
	this.shape_21.setTransform(-16.3,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgJAcQgFgCgEgEQgFgEgCgGIgCgGIAAgGQAAgFACgGQACgFAEgFQAEgEAFgCIAFgCIAFgBIAHABIAFACIAJAHQAEAFABAFQACAFAAAGIAAADIgqAAIACAHIAEAEIAFAEIAFABQAFAAAEgCQADgCAEgEIAIAIIgFAEIgFAEIgHABIgHABQgGABgFgDgAAPgDQAAgDgCgDIgCgFIgFgDIgGgBIgEABIgFADIgDAFIgCAGIAdAAIAAAAg");
	this.shape_22.setTransform(-21.8,-6.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgKAoIAAgtIgHAAIAAgLIAHAAIAAgEIABgJIAEgGIAFgDIAHgCQAGAAAFACIAAAMIgIgCQgDAAgDACQgBACAAAFIAAADIAPAAIAAALIgPAAIAAAtg");
	this.shape_23.setTransform(-27,-7.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgGAoIAAg5IANAAIAAA5gAgGgaIAAgNIANAAIAAANg");
	this.shape_24.setTransform(-30.7,-7.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgGAoIAAhPIANAAIAABPg");
	this.shape_25.setTransform(-33.8,-7.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgNAdQgDgBgDgCQgDgDgCgDQgBgEAAgEIAAAAQAAgFABgEIAFgFIAIgDIAJgBQAGAAAJACIAAgBIgBgFIgCgEIgFgCIgFgBIgJABIgIACIgDgKIAKgDQAFgCAGAAQAGAAAFACIAIAEQADADACAFQABAFAAAFIAAAiIgNAAIAAgHIgHAGQgGACgFAAIgIgBgAgEADIgFACIgCADIgBADQAAAEADADQADACAFAAIAFAAIAFgDIADgEIABgFIAAgEQgIgCgFAAIgEABg");
	this.shape_26.setTransform(-42.1,-6.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgJAoIAAgtIgIAAIAAgLIAIAAIAAgFIABgIIADgGIAFgEIAHgBQAGABAFABIAAALIgIgBQgDAAgDACQgCACAAAEIAAAEIAQAAIAAALIgQAAIAAAtg");
	this.shape_27.setTransform(31.9,-20.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgFAeIgHgCQgFgCgEgEQgEgEgDgGIgCgGIAAgGIAAAAQAAgDACgIQADgFAEgEQAEgEAGgDIAGgCIAFAAQAEgBAJADQAFADAFAEQADADADAGIACALIAAAGIgCAGQgDAFgDAFQgFAEgFACQgJADgEAAgAgGgQQgEABgCADIgDAFIgBAHQAAAEABADQABAEACACIAGAEIAGACQAEAAADgCIAGgDIADgHIACgHIAAAAIgCgGIgDgGIgGgEQgDgBgEgBQgDABgDABg");
	this.shape_28.setTransform(26.1,-19.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgTAlIgGgDIAEgKQAEACAEAAIAFgBIADgFIgYg5IAOAAIAQAqIAPgqIAOAAIgXA7IgEAHQgCADgBACIgFADIgHABIgHgBg");
	this.shape_29.setTransform(15.9,-18.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgNAdQgDgBgDgDQgDgCgCgDQgBgDAAgEIAAgBQAAgEABgEIAFgGIAIgDIAJgBQAGAAAJADIAAgBIgBgGIgCgEIgFgCIgFgBIgJABIgIADIgDgLIAKgEQAFgBAGAAQAGAAAFABIAIAGQADADACAEQABAEAAAHIAAAhIgNAAIAAgHIgHAGQgGACgFAAIgIgBgAgEADIgFACIgCACIgBAFQAAAEADACQADACAFAAIAFgBIAFgCIADgEIABgFIAAgDQgIgCgFAAIgEAAg");
	this.shape_30.setTransform(9.3,-19.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgMAnQgFgCgDgEQgFgEgCgFIgBgGIgBgHQAAgFACgHQADgGADgEQAEgEAFgCQAFgCAFAAIAGABIAFADQAEACADAFIAAggIAOAAIAABQIgOAAIAAgKQgDAFgFADIgEACIgGABQgFAAgFgCgAgGgGIgFAEIgEAFIgBAIIABAHIAFAGIAEAEIAGABIAHgBIAFgEIAEgGQABgDAAgEIgBgIIgEgFIgFgEIgHgBIgGABg");
	this.shape_31.setTransform(2.4,-20.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgGAoIAAg5IANAAIAAA5gAgGgaIAAgNIANAAIAAANg");
	this.shape_32.setTransform(-2.7,-20.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgGAoIAAhPIANAAIAABPg");
	this.shape_33.setTransform(-5.8,-20.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgGAeIgGgCQgFgCgEgEQgEgEgCgGIgDgGIAAgGIAAAAQAAgDADgIQACgFAEgEQAFgEAFgDIAGgCIAFAAQAFgBAHADQAGADAEAEQAEADADAGIACALIgBAGIgBAGQgDAFgEAFQgEAEgGACQgHADgFAAgAgHgQQgCABgDADIgEAFIAAAHQgBAEACADQABAEACACIAGAEIAGACQAEAAAEgCIAFgDIAEgHIABgHIAAAAIgBgGIgEgGIgGgEQgDgBgEgBQgDABgEABg");
	this.shape_34.setTransform(-10.9,-19.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AAMAoIAAghIAAgGIgCgDQgBgBAAAAQgBgBAAAAQgBAAAAAAQgBgBgBAAIgEgBIgFABIgEADIgDADIgBAGIAAAhIgNAAIAAhPIANAAIAAAfQAEgFADgCIAFgCIAFgBQAFAAAEACQAEABADADQACADABAEQACAEAAAEIAAAlg");
	this.shape_35.setTransform(-17.9,-20.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AgJAcQgFgCgEgEQgFgEgCgFIgCgHIAAgGQAAgFACgGQACgFAEgEQAEgEAFgDIAFgCIAFAAIAHAAIAFACIAJAHQAEAFABAFQACAFAAAGIAAAEIgqAAIACAGIAEAEIAFADIAFABQAFAAAEgCQADgBAEgDIAIAGIgFAFIgFADIgHADIgHABQgGAAgFgDgAAPgDQAAgDgCgDIgCgFIgFgDIgGgCIgEABIgFAEIgDAEIgCAHIAdAAIAAAAg");
	this.shape_36.setTransform(-27.9,-19.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AAMAoIAAghIAAgGIgDgDQAAgBAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAIgGgBIgEABIgEADIgDADIgBAGIAAAhIgNAAIAAhPIANAAIAAAfQADgFAEgCIAFgCIAGgBQAEAAAEACQAEABACADQADADACAEQABAEAAAEIAAAlg");
	this.shape_37.setTransform(-34.6,-20.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgGAmIAAg/IgYAAIAAgNIA9AAIAAANIgYAAIAAA/g");
	this.shape_38.setTransform(-41.6,-20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text_body, new cjs.Rectangle(-47.1,-27,94.4,54), null);


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


(lib.flag_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.flag();
	this.instance.parent = this;
	this.instance.setTransform(-50,-50,0.333,0.333);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.flag_1, new cjs.Rectangle(-50,-50,100,100), null);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxgxIBjBj");
	this.shape.setTransform(-22.5,-9.1,0.696,0.707);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgxgxIBjBj");
	this.shape_1.setTransform(-22.5,-2,0.707,0.696,-90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJAgIgHgFQgEgDgCgFIgBgFIgBgFIAAgBIACgJQACgFADgDIAHgFQAEgBAFAAIAEAAIAEACQADACADAEIAAgZIAMAAIAABAIgMAAIAAgIIgGAHIgEACIgEAAQgFAAgDgBgAgEgFIgEADIgEAEIgBAGIAAABIABAGIAEAFIAEADIAEABIAFgBIAFgDIACgFIACgGIAAgBIgCgGIgCgEIgFgDIgFgBIgEABg");
	this.shape_2.setTransform(16.5,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHAXQgEgCgDgDQgEgDgCgFIgCgFIAAgFIAAAAQAAgEACgFQACgEADgDQADgEAEgCIAEgBIAFgBIAFABIAFABIAHAGQACADACAFIABAJIAAADIgiAAIABAFIAEAEIAEACIAEABIAHgCIAFgEIAHAGIgDAEIgFACIgGACIgFABQgEAAgFgCgAAMgCIgBgFIgCgEIgEgDIgEgBIgEABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABIgDAEIgBAFIAXAAIAAAAg");
	this.shape_3.setTransform(10.9,0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAAeQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgFIgBgGIAAgYIgGAAIAAgKIAGAAIAAgNIAKAAIAAANIANAAIAAAKIgNAAIAAAWQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQAEAAADgCIAAAJIgFACIgFABIgFgBg");
	this.shape_4.setTransform(6.3,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgNAYIAAguIALAAIAAAKIACgEIADgEIAFgDIAGAAIAAALIgBAAQgDAAgDACQgDABgDACQgBACgBAEQgBADAAAEIAAASg");
	this.shape_5.setTransform(2.9,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAYIgFgDIgEgFQgBgCgBgEIAAAAQABgEABgDIAEgEIAGgDIAIgBQAFAAAHACIAAgBIgBgEIgCgDIgDgCIgFgBIgHABIgGACIgEgJIAJgCQAFgCAEAAQAFAAAEACQAEABACADQADACACAEIABAJIAAAbIgLAAIAAgGQgDADgDACQgFACgDAAIgHgBgAgDACIgDACIgDACIgBADIAAABQABADACACQACACAEAAIAFgBIADgCIADgDIABgEIAAgDIgLgCIgDAAg");
	this.shape_6.setTransform(-1.9,0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAAAeQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgFIgBgGIAAgYIgGAAIAAgKIAGAAIAAgNIAKAAIAAANIANAAIAAAKIgNAAIAAAWQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQAEAAADgCIAAAJIgFACIgFABIgFgBg");
	this.shape_7.setTransform(-6.3,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgJAXIgJgFIAFgIQADADAFACIAHABQADAAACgBQABgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgDgEgBIgGgDIgKgEIgDgDIgBgGIAAAAIABgGIADgFIAGgDIAFgBIAKACIAHAEIgEAIIgHgEIgGgBIgEABQAAABgBAAQAAAAAAABQAAAAAAABQAAAAAAABQAAACACACIAHADIAFACIAFABQACACABACQACACAAAEQAAADgCADQgBADgDACQgCACgDABIgHABQgEAAgGgCg");
	this.shape_8.setTransform(-10.3,0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAAAeQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgDgFIgBgGIAAgYIgGAAIAAgKIAGAAIAAgNIAKAAIAAANIANAAIAAAKIgNAAIAAAWQAAAAAAABQAAABABAAQAAABAAAAQAAABABAAQAAABABAAQAAAAABAAQAAABABAAQABAAAAAAQAEAAADgCIAAAJIgFACIgFABIgFgBg");
	this.shape_9.setTransform(1.7,-9.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgHAXQgEgCgDgDQgEgDgCgFIgBgFIgBgFIAAAAQAAgEACgFQABgEAEgDQADgEAEgCIAFgBIADgBIAGABIAFABIAGAGQAEADABAFIABAJIAAADIgiAAIABAFIAEAEIAEACIAEABIAHgCIAFgEIAHAGIgEAEIgEACIgGACIgFABQgFAAgEgCgAANgCIgCgFIgCgEIgEgDIgFgBIgDABQgBAAAAABQgBAAAAAAQgBAAAAABQgBAAAAABIgDAEIgBAFIAYAAIAAAAg");
	this.shape_10.setTransform(-2.8,-8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgDAgIgGgCIgGgDIgFgEIgDgEIgDgGIgCgGIAAgHIAAgFIACgHIADgFIAEgFIAEgEIAGgDIAGgCIAGAAIAIAAIAGABQAEACAGAFIgHAJIgHgGQgGgCgEAAQgEAAgDACQgEACgDADQgDADgBAEIgCAIQAAAFACAEQABAEADADQADADAEACQAEABAEAAIAIgBQAEgBADgDIAAgLIgQAAIAAgJIAaAAIAAAaQgGAFgFACIgHACIgIAAIgGAAg");
	this.shape_11.setTransform(-9.1,-9.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#092E77").s().p("AjvClQhkAAAAhGIAAi9QAAhGBkAAIHfAAQBkAAAABGIAAC9QAABGhkAAg");
	this.shape_12.setTransform(-2,-5.5,0.94,0.969);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-21.5,63.9,32);


(lib.brazil = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.travel_336x280_1();
	this.instance.parent = this;
	this.instance.setTransform(-168,-140);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.brazil, new cjs.Rectangle(-168,-140,336,280), null);


// stage content:
(lib.travel_336x280 = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(83));

	// btn
	this.instance = new lib.btn();
	this.instance.parent = this;
	this.instance.setTransform(49,200);
	this.instance.alpha = 0;
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({alpha:1},15).wait(39));

	// textMain
	this.instance_1 = new lib.text_main();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-80,51);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({x:75,alpha:1},15).wait(60));

	// TextBody
	this.instance_2 = new lib.text_body();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-60,127);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({x:60,alpha:1},14).wait(56));

	// greenLine
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(327,-145,1.093,1.093,0,0,0,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).to({x:161,y:143},20).wait(34));

	// yellowLine
	this.instance_4 = new lib.Tween2("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-9.1,424,1.093,1.093,0,0,0,-0.1,-1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({x:153.9,y:139.7},20).wait(34));

	// flag
	this.instance_5 = new lib.flag_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(82,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0},6).to({_off:true},1).wait(76));

	// size
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20B2AA").s().p("AgWApQgKgNAAgcQABgRADgKQAEgLAHgGQAHgGAKAAQAIAAAGADQAGADAEAHQAEAGACAIQACAJAAAOQABASgEALQgDAKgIAHQgHAFgLAAQgOAAgIgKgAgNghQgGAKAAAXQAAAZAGAIQAGAIAHAAQAJAAAFgIQAGgJAAgYQAAgXgGgJQgFgIgJAAQgHAAgGAHg");
	this.shape.setTransform(311.6,300.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#20B2AA").s().p("AgXArQgJgKAAgNQAAgKAFgGQAFgGAJgCQgHgCgEgGQgEgFAAgHQAAgLAIgIQAIgHAMAAQANAAAIAHQAIAIAAALQAAAHgEAFQgDAGgIACQAJADAGAGQAEAGAAAKQAAANgJAJQgJAIgPAAQgNAAgKgIgAgOAGQgFAGAAAIQAAAGADAFQACAEAEADQAFADAGAAQAIAAAGgFQAFgHABgIQgBgJgFgFQgGgHgJABQgIAAgGAFgAgLgjQgEAEAAAHQAAAGAEAFQAFAEAHABQAGgBAFgEQAFgFgBgGQABgHgFgEQgFgFgHAAQgGAAgFAFg");
	this.shape_1.setTransform(303.9,300.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#20B2AA").s().p("AggAyQAAgEABgEQADgHAGgHQAFgGALgJQAPgNAGgHQAFgIAAgHQAAgHgFgFQgFgFgIAAQgIAAgGAFQgFAFAAAKIgNgBQACgPAIgHQAJgHANAAQAOAAAJAIQAIAIAAALQAAAGgCAGQgDAGgGAGIgTARIgNANIgFAGIAwAAIAAAMg");
	this.shape_2.setTransform(296,300.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#20B2AA").s().p("AATAkIgPgWIgEgGIgSAcIgPAAIAagkIgYgjIAPAAIALARIAFAIIAFgIIAMgRIAPAAIgZAiIAbAlg");
	this.shape_3.setTransform(284.9,302.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#20B2AA").s().p("AgXAoQgJgLAAgbQAAgcALgNQAJgLAOAAQAMAAAIAHQAIAGABAMIgMABQgBgIgDgCQgGgGgHAAQgFAAgFAEQgFADgEAJQgDAIAAAPQAFgHAGgDQAHgDAFgBQAMAAAKAJQAIAJAAAOQAAAJgEAJQgEAHgIAFQgHAEgJAAQgOAAgKgLgAgMABQgGAHAAAJQAAAHACAFQADAGAFADQAFADAEAAQAIAAAGgGQAGgGgBgLQABgLgGgGQgGgEgIgBQgIABgFAEg");
	this.shape_4.setTransform(273.7,300.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#20B2AA").s().p("AgWArQgJgIgBgMIAMgCQADALAFAEQAFAFAHAAQAIAAAGgGQAGgGAAgJQAAgJgGgFQgFgGgJAAIgIACIACgKIACAAQAHAAAGgEQAGgEAAgJQAAgGgEgFQgFgEgGAAQgHAAgFAEQgFAFgBAJIgNgCQADgNAIgHQAIgGAMAAQAHAAAHADQAHAEADAGQAEAGAAAHQAAAGgEAFQgDAGgHADQAJACAFAGQAFAGAAAKQAAANgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_5.setTransform(265.9,300.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#20B2AA").s().p("AgWArQgJgIgBgMIAMgCQADALAFAEQAFAFAHAAQAIAAAGgGQAGgGAAgJQAAgJgGgFQgFgGgJAAIgIACIACgKIACAAQAHAAAGgEQAGgEAAgJQAAgGgEgFQgFgEgGAAQgHAAgFAEQgFAFgBAJIgNgCQADgNAIgHQAIgGAMAAQAHAAAHADQAHAEADAGQAEAGAAAHQAAAGgEAFQgDAGgHADQAJACAFAGQAFAGAAAKQAAANgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_6.setTransform(258.2,300.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(83));

	// control
	this.play_btn = new lib.play();
	this.play_btn.parent = this;
	this.play_btn.setTransform(23,300,0.774,0.774);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(82));

	// band
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Eg43AJYIAAyvMBxvAAAIAASvg");
	this.shape_7.setTransform(0.1,300,0.462,0.333,0,0,0,-363.7,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(83));

	// image
	this.instance_6 = new lib.brazil();
	this.instance_6.parent = this;
	this.instance_6.setTransform(168,142);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(168,162,336,318);
// library properties:
lib.properties = {
	width: 336,
	height: 320,
	fps: 24,
	color: "#C9E1FF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/travel_336x280_atlas_.png", id:"travel_336x280_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;