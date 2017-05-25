(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"food_300x250_atlas_", frames: [[0,0,300,250],[236,252,48,200],[302,0,45,200],[0,252,234,144],[286,252,47,194]]}
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



(lib.food_300x250_1 = function() {
	this.spriteSheet = ss["food_300x250_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fork = function() {
	this.spriteSheet = ss["food_300x250_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.knife = function() {
	this.spriteSheet = ss["food_300x250_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.service = function() {
	this.spriteSheet = ss["food_300x250_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.spoon = function() {
	this.spriteSheet = ss["food_300x250_atlas_"];
	this.gotoAndStop(4);
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


(lib.text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhEBHQABgEACgHQAGAEAHAAQAdAAAZgmQgEgagKgZQgLgagMgNQAHgGAIAAQAGAAAEAGQAFAGAGARQAKAcAFAXQAhg0ACgnQASACgBAKQABAJgPAdQgQAdgSAXQgUAcgUARQgUAQgPAAQgNAAAAgLg");
	this.shape.setTransform(6.9,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXAsIACgcIACgUIABgVQABgKgFgGIAHgDQAFgCAFAAQAHABAAAKIgCAVIAAAFIgDAbQAjhJAcAAQAUABAAArIAAALQAAAUADAIQABAHAGAAQAJAAALgNQAKgNAYgnIAIAEQgVAogRATQgRAUgNAAQgNAAgFgMQgEgMAAgdIAAgIQAAgQgCgGQgDgHgFAAQgNAAgcAzIgJAQQgIANABAGIABAEQgGACgEAAQgJAAAAgLg");
	this.shape_1.setTransform(-3.1,-5.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWAuQgHgJAAgPQAAgeATgXQASgYAZAAQAPAAAQAKQACgKASAAIAEABQgFAIgDAPIgCAJQgDANAAASQAAAVAKAAQALAAASgRQASgRASgbIAIAFQgSAfgYAVQgXAWgRAAQgUAAAAgjIABgSQgNAYgSASQgSATgOgBQgKAAgGgJgAg+gZQgLATAAAXQAAAUANAAQAOAAAog8IAEgGQgVgOgOAAQgOAAgLASg");
	this.shape_2.setTransform(-19.8,-5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6AsQgMgNAAgVQAAgaAVgTQAUgVAbAAQAKAAAHAEQAHAEAAAHQAAALgSAFIABgEQAAgQgQAAQgOAAgNARQgMAQAAASQAAAQAIAJQAIALAOAAQAigBAxhJIAIAFQgYAngaAWQgaAXgWAAQgTAAgMgNg");
	this.shape_3.setTransform(-33.3,-5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgzA8QgGgGgBgHQAAgHAKgIQAJgIAXgLIgIgMQgPgWAAgNQABgTAVgLQANAFAAAIQABALgSAKIAMAUIAJAPQARgKAKgIQAJgIAOgQIAIAEQgUAcgjASQAEAIAAAHQAAAOgMAMQgMALgRAAQgKAAgHgFgAgpAuQAAAIAMAAQAJAAAFgGQAFgGAAgJQAAgFgCgGQgdAQAAAIg");
	this.shape_4.setTransform(-43.4,-4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhSAwQgGgHAAgNQAAgPAKgoIADgOQAAgDgCgDIAOAAQAIAAAAAGQAAAEgFAUIgDAIIgBAHQgEAQAAAKQAAAOAKAAQAQAAAZgoQAUggAAgOIgCgEQAIgCAGgBQAJABAAAFIgBADIgCAIIgCAIIgCAHIgBAFQgDAQAAANQAAAWAKAAQAXAAAjhAIAIAFQgoBMghAAQgVAAAAgnIABgRQgOAbgQARQgRARgNAAQgLABgHgIg");
	this.shape_5.setTransform(-55.1,-5.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnBQIACgMIAXh0IgOAAQgXAAgRAEQADgNAGgDQAFgDATAAIBBAAQAbAAAIgUQAEAGAAAEQAAAMgQAIQgKAFgaAAIgMAAIgVBtIgCAMIACAGQgKAFgIAAQgFAAAAgEg");
	this.shape_6.setTransform(-70.9,-7.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhXAsIACgcIACgUIABgVQABgKgFgGIAGgDQAGgCAFAAQAHABAAAKIgCAVIAAAFIgCAbQAihJAcAAQAUABAAArIAAALQAAAUACAIQADAHAFAAQAJAAAKgNQALgNAYgnIAIAEQgVAogRATQgRAUgNAAQgNAAgFgMQgEgMAAgdIAAgIQAAgQgCgGQgDgHgFAAQgNAAgcAzIgJAQQgIANABAGIABAEQgGACgEAAQgKAAABgLg");
	this.shape_7.setTransform(-90.5,-5.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgvBFQgHgIAAgLIACgPIADgKQAEgXAAgJQAAgGgDgDIAQgDQAHAAAAAKQAAAIgDANIgDATIgDASQAAAMAKAAQAMAAATgUQAVgVATgeIAIAEQgWAmgXAVQgVAXgSgBQgLAAgHgGgAghgrQAAgGACgGIABAAQAHAAAMgHQALgGAHgGQgEANgKAJQgQAOgGAAQgEAAAAgFg");
	this.shape_8.setTransform(-103.3,-7.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhDBHQAAgEACgGQAFADAIAAQAdAAAZgmQgDgagLgZQgKgZgNgOQAHgGAIAAQAHAAADAGQAFAGAFARQALAcAFAXQAhg0ACgnQARACABAJQgBAKgPAdQgPAdgSAXQgUAcgUARQgUAQgPAAQgMAAAAgLg");
	this.shape_9.setTransform(-27.2,-32.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag+AsQgKgLAAgUQAAgbATgVQASgTAagBQAMABAIAGQAHAHAAAKQAAASgUANQgVANgbAAQAAAcAYAAQAVAAAYgUQAZgUAVgfIAIAEQgTAjgfAXQgdAYgcAAQgRAAgLgMgAgkgeQgLAOgCATQAUgBAPgKQAOgKAAgOQAAgNgLAAQgNAAgMAPg");
	this.shape_10.setTransform(-35.6,-34.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhXAsIACgcIACgUIACgUQAAgLgFgGIAHgDQAGgCAEAAQAHABAAAKIgBAVIgBAFIgDAbQAjhJAbAAQAVABAAAqIABAMQAAAUACAIQACAIAFgBQAJAAALgNQAKgNAYgnIAJAEQgWAogRATQgRAUgNAAQgNAAgFgMQgEgMAAgdIAAgIQAAgQgDgGQgBgHgGAAQgNAAgcAzIgJAQQgHAMAAAHIAAAEQgFADgEAAQgJAAAAgMg");
	this.shape_11.setTransform(-48.8,-34.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1AvIAEgXIAFgYQAEgVABgKQgBgGgDgDQAKgEAHAAQAGAAAAAIQAAAGgEAXIgGAbQATgjARgUQATgTAQgBQAFAAAEAEQADADAAAEQAAAHgOALQgEgHgHAAQgNAAgSAaQgLAPgJASQgJARAAAHIAAACQgGADgEABQgLgBAAgIg");
	this.shape_12.setTransform(-64,-34.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhSAwQgGgIAAgLQAAgQAKgoIADgOQAAgDgCgEIAOAAQAIABAAAGQAAAFgFATIgDAIIgBAGQgEARAAAJQAAAPAKAAQAQAAAZgoQAUggAAgOIgCgEQAIgCAGgBQAJABAAAFIgBADIgCAHIgCAJIgCAHIgBAFQgDAQAAANQAAAWAKgBQAXAAAjg/IAIAFQgoBMghAAQgVAAAAgnIABgRQgOAbgQARQgRARgNABQgLAAgHgIg");
	this.shape_13.setTransform(-75.9,-34.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhFAuQgMgNAAgTQAAgXAQgQQAQgRAVAAIAHABQgCgEAAgDQAAgFADgEQAXABAQAXQAQALASAAQALAAANgHIAFAIQgPAKgRABQgKgBgOgEIAAAEQAAAcgTAUQgSAWgaAAQgTAAgNgNgAgwgRQgNAPAAASQAAAOAIAIQAIAJAMAAQAQAAAMgQQALgQAAgXQAAgIgCgIQgHgCgHgFIgJgBQgQAAgNAPg");
	this.shape_14.setTransform(-90.8,-35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhEBZQgKgGAAgIQAAgJANgJQAAAMAHAGQAHAHAMAAQASAAAIgNQAKgNAGglIAShfIgRADQgMAAgBgPQAEACAGAAQAHAAASgEIAKgCQAMgCAJgBQALABAFAEQAEAEACAMQgJgGgMAAIgPACIgRBVQgKAugTAVQgUAVgXAAQgMABgKgHg");
	this.shape_15.setTransform(-106.4,-34.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhEBHQAAgFADgFQAGACAHAAQAdAAAZglQgEgagKgZQgLgZgMgOQAHgGAIAAQAGAAAFAGQAEAGAFARQALAcAFAWQAhgzADgnQARADAAAIQAAAKgPAdQgQAegSAWQgUAdgTAQQgVAQgOAAQgOAAAAgLg");
	this.shape_16.setTransform(5.8,-61.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag1AvIAEgXIAFgYQAEgVABgKQgBgGgDgDQAKgEAHAAQAGAAAAAIQAAAGgEAXIgGAbQATgiARgUQATgVAQAAQAFAAAEAEQADADAAAEQAAAHgOAMQgEgIgHAAQgNAAgSAaQgLAQgJARQgJARAAAHIAAACQgGAEgEAAQgLgBAAgIg");
	this.shape_17.setTransform(-3.2,-64.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhWAvQgHgKAAgPQAAgeATgXQASgXAZgBQAPAAAQAKQACgKASAAIAEABQgFAJgDAOIgCAJQgDANAAASQAAAVAKAAQALAAASgRQASgRASgbIAIAFQgSAfgYAVQgXAWgRAAQgUAAAAgjIABgSQgNAYgSATQgSASgOAAQgKgBgGgIgAg+gYQgLARAAAYQAAAUANAAQAOAAAog8IAEgGQgVgNgOAAQgOgBgLATg");
	this.shape_18.setTransform(-15.5,-64.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhYAsIADgcIACgUIABgUQAAgLgEgGIAGgCQAHgDADAAQAIAAAAAMIgCAUIAAAFIgCAbQAihIAcgBQAUAAAAArIAAAMQAAAUACAIQACAIAGgBQAJAAAKgNQALgNAYgoIAIAFQgVAogRATQgRAUgOAAQgMAAgFgMQgEgMAAgdIAAgIQAAgQgCgHQgCgGgFAAQgNAAgdAyIgJARQgIAMAAAHIACAEQgGADgEAAQgKAAAAgMg");
	this.shape_19.setTransform(-30.8,-64.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvBFQgHgIAAgLIACgPIADgKQAEgXAAgJQAAgGgDgDIAQgDQAHAAAAAKQAAAIgDANIgDATIgDASQAAAMAKAAQAMAAATgUQAVgVATgfIAIAFQgWAmgXAVQgVAXgSAAQgLgBgHgGgAghgrQAAgHACgFIABAAQAHAAAMgHQALgGAHgGQgEANgKAJQgQAOgGAAQgEAAAAgFg");
	this.shape_20.setTransform(-43.6,-66.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnBOQgIgJAAgOQAAgIADgPIAUhhIgHABQgWAAgBgTIAAgCQANAGAOAAQAPAAALgHIgWB1QgEAPAAAGQABARAMAAQALAAALgNQAMgOAbgqIAHAFQgTAmgVAWQgUAWgPAAQgMAAgGgJg");
	this.shape_21.setTransform(-52.4,-67.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhSAwQgGgHAAgMQAAgQAKgoIADgOQAAgDgCgEIAOAAQAIABAAAGQAAAFgFATIgDAIIgBAGQgEARAAAJQAAAPAKAAQAQAAAZgoQAUggAAgOIgCgEQAIgDAGAAQAJAAAAAGIgBADIgCAHIgCAIIgCAIIgBAFQgDAQAAANQAAAWAKgBQAXAAAjg/IAIAFQgoBMghAAQgVAAAAgnIABgRQgOAagQASQgRASgNAAQgLAAgHgIg");
	this.shape_22.setTransform(-64,-64.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgvA9QgOgOAAgaQAAgmAagdQAagdAjAAQAPAAAKAFQALAGAAAHQAAAHgJAIQgMgXgWAAQgWAAgSAYQgRAZAAAgQAAAVAKAMQAKAMASAAQAfAAAagdIABAHQAAANgWAMQgVAMgWAAQgZAAgPgPg");
	this.shape_23.setTransform(-81.6,-66.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAhAXQgQACgRAAIgZAAIgCADQgNAXAAANQAAADADAEIgKADIgIACQgGAAAAgGQAAgOARgcIADgFIgFAAQgQAAgJAFQAEgRAUAAIANABIACgEQAQgWAegnQALgNAFgEQAFgCAPgDQgCARAAAPQAAAoAJApQAFAWAKAHQgJAJgGAAQgQAAgIg1gAANgiQgUAagJARIgCAEIASAAQAVAAAKgBQgEghAAgXIAAgHg");
	this.shape_24.setTransform(-104.1,-66.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-114,-81.5,128.1,90.8), null);


(lib.spoon_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spoon();
	this.instance.parent = this;
	this.instance.setTransform(-23.5,-97);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.spoon_1, new cjs.Rectangle(-23.5,-97,47,194), null);


(lib.service_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#504A3E").s().p("AglAaQgGgGAAgMQAAgQALgMQALgMAQAAQAHAAAEAEQAFADAAAHQAAAKgMAIQgMAHgRAAQAAARAPAAQAMAAAOgMQAQgLAMgTIAFADQgMAUgSAOQgRAOgRAAQgKAAgHgHgAgVgSQgHAJgBALQAMgBAJgFQAIgHAAgIQAAgHgGAAQgIAAgHAIg");
	this.shape.setTransform(16,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#504A3E").s().p("AgfAcIACgNIADgPQACgMABgGQAAgEgCgCIAKgCQAEAAAAAFIgDARIgDAQQAKgUALgMQALgMAJAAQADAAADACQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABQAAAEgJAHQgCgFgEAAQgIAAgKAQQgHAJgGAKQgEALgBAEIAAABIgGACQgGAAAAgFg");
	this.shape_1.setTransform(8.7,5.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#504A3E").s().p("AgpAcQgHgIAAgMQAAgNAJgKQAKgKANAAIAEABIgBgFQAAgDACgCQANABAJANQAKAHALAAQAHAAAIgEIACAEQgJAHgKAAQgGAAgIgCIAAACQAAAQgMAMQgKANgQAAQgLAAgIgHgAgcgKQgIAJAAALQAAAHAFAGQAEAFAIABQAKgBAHgJQAGgLAAgNQAAgEgCgFQgEgBgEgEIgFAAQgKAAgHAJg");
	this.shape_2.setTransform(2,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#504A3E").s().p("AAMARIADgRIABgHIADgKQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBAAgBAAQgFAAgQAYQgPAXAAADIAAABIgCABIgDAAQgFAAgBgFIACgJIABgHIADgMIADgPQAAgBgBgBQAAgBAAAAQAAgBgBAAQAAAAgBAAQgGAAgNAWQgMAWAAAEIABADIgGABQgGAAAAgGIABgRIACgMIAAgMQAAgHgCgDQAGgDADAAQAFAAABAGIgCAQIgCAQQAWgrAQAAQAHAAAAAKIgDAUIgDAQQAJgUALgNQALgNAIAAQAJAAAAAKIgDARIgBAIIgCANQAAAHAFAAQALAAAYgpIAEADQgZAwgTAAQgNAAAAgQg");
	this.shape_3.setTransform(-8,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#504A3E").s().p("Ag0AbIACgRIABgMIABgMQgBgHgCgDIAEgCIAGgBQAEAAAAAHIgBAMIAAADIgBAQQAUgrARAAQAMAAAAAZIAAAHIABARQABAEAEAAQAFAAAGgIIAVgfIAFADQgNAXgKAMQgKAMgIAAQgIAAgDgHQgCgIAAgRIAAgEIgBgOQgBgEgEAAQgHAAgRAeIgGAKQgEAIAAADIABADIgGABQgGAAAAgGg");
	this.shape_4.setTransform(17.8,-5.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#504A3E").s().p("AgfAcIACgNIADgPQACgMAAgGQAAgEgBgCIAKgCQAEAAAAAFIgDARIgDAQQAKgUALgMQALgMAJAAQADAAADACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAEgJAHQgCgFgEAAQgHAAgLAQQgHAJgGAKQgEALAAAEIAAABIgHACQgGAAAAgFg");
	this.shape_5.setTransform(8.8,-5.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#504A3E").s().p("Ag0AcQgDgGAAgJQAAgRALgOQALgOAPAAQAIAAAKAFQABgFALAAIACAAQgDAFgCAJIgBAFQgBAIAAAKQAAANAGAAQAGAAALgLQALgJALgQIAEADQgLASgOANQgOANgKAAQgLAAAAgVIAAgLQgHAOgLALQgLALgJAAQgGAAgEgFgAglgOQgGAKAAAOQAAAMAHAAQAJAAAXgkIADgDQgMgIgJAAQgJAAgGALg");
	this.shape_6.setTransform(1.4,-5.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#504A3E").s().p("AglAaQgGgGAAgMQAAgQALgMQALgMAQAAQAHAAAEAEQAFADAAAHQAAAKgMAIQgMAHgRAAQAAARAPAAQAMAAAOgMQAQgLAMgTIAFADQgMAUgSAOQgRAOgRAAQgKAAgHgHgAgVgSQgHAJgBALQAMgBAJgFQAIgHAAgIQAAgHgGAAQgIAAgHAIg");
	this.shape_7.setTransform(-6.8,-5.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#504A3E").s().p("AgdAkIADgNIALg5IABgHQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAHgDADAAQAEAAAAAEIgCALIgLAyIgBAQQgBAHAQAAQAOAAAPgGQgCAGgCACQgCADgMACQgKACgLAAQgSAAgBgNg");
	this.shape_8.setTransform(-15.1,-6.8);

	this.instance = new lib.service();
	this.instance.parent = this;
	this.instance.setTransform(-42.2,-26,0.361,0.361);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.service_1, new cjs.Rectangle(-42.2,-26,84.5,52), null);


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


(lib.knife_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.knife();
	this.instance.parent = this;
	this.instance.setTransform(-22.5,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.knife_1, new cjs.Rectangle(-22.5,-100,45,200), null);


(lib.fork_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.fork();
	this.instance.parent = this;
	this.instance.setTransform(-24,-100);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.fork_1, new cjs.Rectangle(-24,-100,48,200), null);


// stage content:
(lib.food_300x250 = function(mode,startPosition,loop) {
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(80));

	// service
	this.instance = new lib.service_1();
	this.instance.parent = this;
	this.instance.setTransform(48.1,215.2,0.771,0.771,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({alpha:1},15).wait(13));

	// control
	this.play_btn = new lib.play();
	this.play_btn.parent = this;
	this.play_btn.setTransform(21,270,0.774,0.774);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(79));

	// size
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20B2AA").s().p("AgWApQgJgNAAgcQgBgQAEgMQADgLAIgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAHADAJQACAIAAAOQgBARgDAMQgEAKgHAGQgHAGgLAAQgNAAgJgKgAgMghQgHAKAAAXQAAAZAGAIQAGAIAHAAQAIAAAHgIQAFgIAAgZQAAgXgFgJQgHgIgIAAQgIAAgEAHg");
	this.shape.setTransform(281.5,269.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#20B2AA").s().p("AgXArQgIgIgBgMIAMgCQACAKAFAFQAFAEAIAAQAIAAAGgGQAGgHAAgLQAAgLgGgFQgGgGgIAAQgGAAgFADQgFADgDADIgLgCIAJgyIAxAAIAAAMIgnAAIgFAbQAJgHAJAAQANAAAJAJQAJAIAAAPQAAANgIAKQgKAMgPAAQgOAAgJgHg");
	this.shape_1.setTransform(273.8,270);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#20B2AA").s().p("AggAyQAAgEABgEQADgHAGgHQAFgGALgJQAPgNAGgHQAFgIAAgHQAAgHgFgFQgFgFgIAAQgIAAgGAFQgFAFAAAKIgNgBQACgPAIgHQAJgHANAAQAOAAAJAIQAIAIAAALQAAAGgCAGQgDAGgGAGIgTARIgNANIgFAGIAwAAIAAAMg");
	this.shape_2.setTransform(265.9,269.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#20B2AA").s().p("AATAkIgPgWIgEgGIgSAcIgPAAIAbgkIgZgjIAQAAIAKARIAFAIIAFgIIANgRIAOAAIgZAiIAbAlg");
	this.shape_3.setTransform(254.8,271.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#20B2AA").s().p("AgWApQgKgNABgcQAAgQADgMQAEgLAHgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAHACAJQACAIAAAOQABARgEAMQgDAKgIAGQgHAGgLAAQgOAAgIgKgAgNghQgGAKAAAXQAAAZAGAIQAFAIAIAAQAJAAAFgIQAGgIAAgZQAAgXgGgJQgFgIgJAAQgIAAgFAHg");
	this.shape_4.setTransform(243.6,269.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#20B2AA").s().p("AgWApQgJgNAAgcQAAgQADgMQADgLAIgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAHADAJQABAIAAAOQAAARgDAMQgDAKgIAGQgHAGgLAAQgNAAgJgKgAgNghQgGAKAAAXQAAAZAGAIQAFAIAIAAQAJAAAFgIQAGgIAAgZQAAgXgGgJQgFgIgJAAQgIAAgFAHg");
	this.shape_5.setTransform(235.8,269.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#20B2AA").s().p("AgWArQgJgIgBgMIAMgCQADALAFAEQAFAFAHAAQAIAAAGgGQAGgGAAgJQAAgJgGgFQgFgGgJAAIgIACIACgKIACAAQAHAAAGgEQAGgEAAgJQAAgGgEgFQgFgEgGAAQgHAAgFAEQgFAFgBAJIgNgCQADgNAIgHQAIgGAMAAQAHAAAHADQAHAEADAGQAEAGAAAHQAAAGgEAFQgDAGgHADQAJACAFAGQAFAGAAAKQAAANgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_6.setTransform(228.1,269.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(80));

	// text
	this.instance_1 = new lib.text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(121,120);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:1},19).wait(21));

	// band
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Eg43AJYIAAyvMBxvAAAIAASvg");
	this.shape_7.setTransform(0.1,270,0.412,0.333,0,0,0,-363.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(80));

	// spoon
	this.instance_2 = new lib.spoon_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(167.5,292.7,0.447,0.447);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({x:168,y:216,alpha:1},20).wait(40));

	// knife
	this.instance_3 = new lib.knife_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(185.1,344.5,0.456,0.456,0,0,0,-21.2,99.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({y:259.1,alpha:1},20).wait(45));

	// fork
	this.instance_4 = new lib.fork_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(140,300,0.458,0.458);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:141,y:213,alpha:1},19).wait(51));

	// image
	this.instance_5 = new lib.food_300x250_1();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,145,300,290);
// library properties:
lib.properties = {
	width: 300,
	height: 290,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/food_300x250_atlas_.png", id:"food_300x250_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;