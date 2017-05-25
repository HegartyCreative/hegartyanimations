(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"food_600x300_atlas_", frames: [[0,0,300,600],[0,748,48,200],[99,748,45,200],[0,602,234,144],[50,748,47,194]]}
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



(lib.food_600x300_1 = function() {
	this.spriteSheet = ss["food_600x300_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fork = function() {
	this.spriteSheet = ss["food_600x300_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.knife = function() {
	this.spriteSheet = ss["food_600x300_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.service = function() {
	this.spriteSheet = ss["food_600x300_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.spoon = function() {
	this.spriteSheet = ss["food_600x300_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AhfBjQAAgGAEgIQAHAEALAAQAoAAAjg1QgEgkgPgjQgPgkgSgTQAKgIAMAAQAIAAAGAIQAGAIAIAZQAPAnAHAfQAuhIAEg3QAYAEAAAMQAAAOgWAoQgVApgZAhQgcAogcAWQgcAXgVAAQgSAAAAgQg");
	this.shape.setTransform(29.8,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah7A+IAEgnIADgdIACgdQAAgOgHgJIAKgDQAJgDAEAAQALAAAAAQIgCAcIgBAIIgEAlQAxhmAnAAQAdAAAAA9IABAQQAAAcADALQACALAIAAQAMAAAPgTQAPgTAhg3IAMAHQgeA3gYAcQgYAbgTAAQgRAAgHgRQgGgQAAgpIAAgMQAAgWgDgJQgDgJgHAAQgSAAgoBHIgNAXQgLASAAAIQAAADACADQgHAEgGAAQgOAAAAgQg");
	this.shape_1.setTransform(15.7,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah6BBQgIgNAAgWQAAgpAaghQAaghAiAAQAVAAAXANQADgMAaAAIAFAAQgIAMgEAUIgCAMQgFATAAAZQAAAeAPAAQAOAAAagYQAagYAYgmIALAHQgZAsghAeQggAfgYAAQgcAAgBgyIABgaQgRAjgZAZQgaAagTAAQgPAAgJgNgAhXgjQgPAZgBAiQABAcARAAQAUAAA3hVIAGgIQgdgTgTAAQgUAAgPAZg");
	this.shape_2.setTransform(-7.5,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRA+QgRgSAAgdQAAglAcgcQAcgdAnAAQAOAAAKAHQAKAFAAAKQAAAPgZAHIABgGQAAgWgXAAQgUAAgRAXQgSAWAAAaQAAAWAMAOQALAOATAAQAxAABEhnIALAHQghA2glAgQgkAgggAAQgaAAgQgSg");
	this.shape_3.setTransform(-26.5,23.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhHBUQgKgHAAgKQAAgLANgLQANgLAggPIgLgSQgUgfAAgSQAAgaAegQQATAIAAAKQAAAQgYAOIAQAcIAMAWQAZgPAOgLQANgLAUgXIALAGQgeAogvAZQAEALABAJQAAAVgRAPQgRAQgYAAQgOAAgJgHgAg6BBQAAALARAAQAMAAAHgIQAIgIAAgNQAAgIgDgIQgpAWAAAMg");
	this.shape_4.setTransform(-40.7,23.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhzBDQgJgKAAgRQAAgWAOg4IAFgUQAAgEgEgFIAUAAQALAAABAJQgBAGgHAcIgDALIgDAJQgFAYAAANQgBAUAOAAQAXAAAkg3QAbguAAgUIgBgFQAKgEAJAAQAMAAgBAIIgBAFIgCAKIgDALIgDALIgBAGQgFAXABASQAAAeAOAAQAgAAAxhZIAMAHQg4BrgvAAQgeAAAAg2IABgZQgTAmgXAYQgXAZgTAAQgPAAgJgLg");
	this.shape_5.setTransform(-57,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag3BwIACgRIAhijIgTAAQghAAgXAGQAEgSAIgFQAIgEAaAAIBbAAQAlAAANgbQAEAIAAAFQAAASgWALQgNAGglAAIgQAAIgeCZIgDARIACAIQgOAHgLAAQgHAAAAgFg");
	this.shape_6.setTransform(-79.2,19.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ah7A+IAEgnIADgdIACgdQAAgOgGgJIAJgDQAJgDAEAAQALAAAAAQIgCAcIgBAIIgDAlQAwhmAnAAQAdAAAAA9IAAAQQAAAcADALQADALAIAAQAMAAAPgTQAOgTAjg3IALAHQgeA3gYAcQgXAbgUAAQgRAAgHgRQgGgQAAgpIAAgMQAAgWgDgJQgDgJgHAAQgSAAgoBHIgNAXQgLASAAAIQABADACADQgJAEgFAAQgOAAAAgQg");
	this.shape_7.setTransform(-106.7,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhCBgQgKgKAAgRQAAgGADgNIADgPQAHghAAgMQAAgIgFgFIAWgEQALAAAAAPQAAAKgEATIgGAaQgEAUAAAFQAAARAPAAQARAAAbgcQAdgdAagrIAMAGQgfA2ggAeQgeAfgaAAQgPAAgJgKgAgvg8QAAgKADgHIACAAQAJgBARgJQAQgIAKgKQgGATgOANQgYATgIAAQgFAAAAgGg");
	this.shape_8.setTransform(-124.6,20.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhfBjQAAgGAEgIQAHAEALAAQAoAAAjg1QgEgkgPgjQgPgkgSgTQAKgIAMAAQAIAAAGAIQAGAIAIAZQAPAnAHAfQAuhIAEg3QAYAEAAAMQAAAOgWAoQgVApgZAhQgcAogcAWQgcAXgVAAQgSAAAAgQg");
	this.shape_9.setTransform(5.9,-13.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhWA+QgPgQAAgcQAAgmAagcQAagdAkAAQARAAAKAJQALAJAAAPQAAAZgcATQgeARgmAAQAAAoAiAAQAdAAAigcQAkgcAcgsIAMAGQgbAxgrAhQgpAhgnAAQgYAAgOgQgAgygrQgQAUgEAbQAdgBAUgOQAVgPgBgTQAAgSgPAAQgTAAgPAUg");
	this.shape_10.setTransform(-5.9,-17.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah7A+IAEgnIADgdIACgdQAAgOgGgJIAJgDQAJgDAEAAQALAAAAAQIgCAcIgBAIIgDAlQAwhmAnAAQAdAAAAA9IABAQQAAAcACALQADALAIAAQAMAAAPgTQAOgTAjg3IALAHQgeA3gYAcQgXAbgUAAQgRAAgHgRQgGgQAAgpIAAgMQAAgWgDgJQgDgJgHAAQgSAAgoBHIgNAXQgLASAAAIQAAADADADQgJAEgFAAQgOAAAAgQg");
	this.shape_11.setTransform(-24.5,-17.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhKBBQAAgGAFgZIAHgiQAGgdAAgPQAAgIgFgFQAPgFAJAAQAJAAAAAMQAAAIgGAgIgIAmQAagxAZgcQAagcAWAAQAHAAAFAFQAGAEAAAGQAAAKgVAQQgFgLgJAAQgSAAgaAlQgRAWgLAYQgNAZAAAKIAAACQgJAFgGAAQgOAAAAgNg");
	this.shape_12.setTransform(-45.6,-17.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhzBDQgJgKAAgRQAAgWAPg4IADgUQAAgEgCgFIATAAQAMAAgBAJQAAAGgHAcIgDALIgCAJQgHAYAAANQABAUAOAAQAWAAAjg3QAcguAAgUIgCgFQAMgEAHAAQAMAAAAAIIgBAFIgCAKIgDALIgDALIgBAGQgFAXABASQAAAeAOAAQAgAAAxhZIAMAHQg4BrgvAAQgeAAAAg2IABgZQgTAmgXAYQgYAZgRAAQgPAAgKgLg");
	this.shape_13.setTransform(-62.2,-17.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhhBAQgRgRAAgcQAAgfAWgYQAXgXAeAAIAKABQgEgGAAgEQAAgHAFgGQAgADAWAfQAXAQAZAAQAQAAASgLIAHAMQgWAPgXAAQgPAAgTgHIAAAGQAAAngaAdQgaAegkAAQgcAAgRgSgAhEgZQgSAVAAAaQAAATALANQALAMARAAQAXAAARgXQAQgXAAgfQAAgMgEgKQgKgEgKgHIgMgCQgXAAgSAVg");
	this.shape_14.setTransform(-83.1,-18);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhfB9QgOgKAAgKQAAgNASgLQAAAPAKAKQAJAJARAAQAZAAAMgTQANgSAJg0IAbiEIgZAEQgQAAgCgWQAFADAIAAQALAAAYgFIAOgDQASgEAMAAQAQAAAGAGQAGAGACARQgMgIgQAAIgWACIgYB4QgNBAgbAeQgdAegfAAQgRAAgOgJg");
	this.shape_15.setTransform(-105.1,-17.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhfBjQAAgGADgIQAIAEALAAQAoAAAkg1QgFgkgPgjQgPgkgSgTQALgIAKAAQAKAAAFAIQAHAIAIAZQAOAnAHAfQAuhIAEg3QAYAEAAAMQAAAOgVAoQgWApgZAhQgcAogcAWQgcAXgVAAQgSAAAAgQg");
	this.shape_16.setTransform(29,-54.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhKBBQAAgGAFgZIAHgiQAGgdAAgPQAAgIgFgFQAPgFAJAAQAJAAAAAMQAAAIgGAgIgIAmQAagxAZgcQAagcAVAAQAIAAAGAFQAFAEAAAGQAAAKgVAQQgFgLgJAAQgSAAgaAlQgRAWgMAYQgMAZAAAKIAAACQgJAFgGAAQgOAAAAgNg");
	this.shape_17.setTransform(16.4,-58.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ah6BBQgIgNAAgWQAAgpAZghQAaghAjAAQAUAAAYANQADgMAZAAIAGAAQgIAMgEAUIgDAMQgDATAAAZQgBAeAOAAQAPAAAagYQAagYAYgmIALAHQgaAsggAeQghAfgXAAQgcAAAAgyIABgaQgSAjgaAZQgaAagTAAQgOAAgJgNgAhYgjQgOAZAAAiQgBAcATAAQATAAA4hVIAFgIQgdgTgTAAQgVAAgPAZg");
	this.shape_18.setTransform(-0.8,-58.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah7A+IAEgnIADgdIACgdQAAgOgHgJIAKgDQAIgDAGAAQAKAAAAAQIgCAcIgBAIIgEAlQAxhmAnAAQAdAAAAA9IAAAQQAAAcAEALQACALAIAAQAMAAAPgTQAPgTAhg3IAMAHQgeA3gYAcQgYAbgSAAQgSAAgHgRQgGgQAAgpIAAgMQAAgWgDgJQgDgJgHAAQgSAAgoBHIgNAXQgKASAAAIQAAADABADQgIAEgFAAQgOAAAAgQg");
	this.shape_19.setTransform(-22.3,-58.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhCBgQgKgKAAgRQAAgGADgNIADgPQAHghAAgMQAAgIgFgFIAWgEQALAAAAAPQAAAKgEATIgGAaQgEAUAAAFQAAARAPAAQARAAAbgcQAdgdAagrIAMAGQgfA2ggAeQgeAfgaAAQgPAAgJgKgAgvg8QAAgKADgHIACAAQAJgBARgJQAQgIAKgKQgGATgOANQgYATgIAAQgFAAAAgGg");
	this.shape_20.setTransform(-40.1,-61.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag4BtQgKgNAAgTQAAgMAEgUIAbiIIgJABQgfAAAAgbIAAgDQAQAKAVgBQAUABAQgKIggCjQgEAWAAAJQAAAWARAAQAQAAAQgSQAQgTAmg7IALAGQgcA3gdAeQgbAegWABQgQAAgKgNg");
	this.shape_21.setTransform(-52.5,-62.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhzBDQgJgKAAgRQAAgWAPg4IADgUQAAgEgDgFIATAAQAMAAAAAJQABAGgIAcIgEALIgCAJQgFAYgBANQAAAUAPAAQAXAAAig3QAcguAAgUIgCgFQAMgEAHAAQAMAAABAIIgBAFIgDAKIgDALIgCALIgCAGQgEAXgBASQAAAeAPAAQAgAAAyhZIALAHQg4BrguAAQgfAAAAg2IABgZQgTAmgXAYQgYAZgSAAQgPAAgJgLg");
	this.shape_22.setTransform(-68.7,-58.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhCBWQgUgUAAgkQAAg3AlgoQAkgoAyAAQAVAAAOAHQAPAIAAAKQAAAKgNALQgQghgfAAQggAAgZAjQgYAiAAAtQAAAeAPARQAOARAZAAQArAAAkgpQACAGAAAEQAAARgeARQgeARgfAAQgjAAgVgUg");
	this.shape_23.setTransform(-93.5,-61);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAuAgQgXADgXAAIgkgBIgDAFQgRAgAAASQAAAGAEAFIgPAEQgFACgFABQgKgBAAgIQAAgUAYgnIAEgHIgHAAQgWABgMAGQAGgXAcABIARAAIAEgGQAVgfArg3QAPgSAIgEQAHgFAVgDQgEAYAAAVQAAA5ANA4QAHAfAPAKQgNANgJAAQgWAAgLhLgAARgvQgbAjgNAZIgDAFIAaABQAdAAAPgCQgHgvAAgfIABgLg");
	this.shape_24.setTransform(-124.9,-61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-138.8,-81.5,177.7,124), null);


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
(lib.food_600x300 = function(mode,startPosition,loop) {
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
	this.instance.setTransform(151.9,349.9,1.304,1.304,0,0,0,0.2,0.2);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({alpha:1},15).wait(13));

	// text
	this.instance_1 = new lib.text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(193,230);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({alpha:1},20).wait(20));

	// size
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20B2AA").s().p("AgWApQgKgNAAgcQABgRADgLQAEgLAHgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAGACAKQACAIAAAOQABASgEAKQgDAMgIAFQgHAGgLAAQgOAAgIgKgAgNghQgGAKAAAXQAAAZAGAIQAGAIAHAAQAJAAAFgIQAGgIAAgZQAAgXgGgJQgFgIgJAAQgHAAgGAHg");
	this.shape.setTransform(281.9,619.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#20B2AA").s().p("AgWApQgKgNAAgcQABgRADgLQAEgLAHgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAGACAKQACAIAAAOQABASgEAKQgDAMgIAFQgHAGgLAAQgOAAgIgKgAgNghQgGAKAAAXQAAAZAGAIQAFAIAIAAQAJAAAFgIQAGgIAAgZQAAgXgGgJQgFgIgJAAQgIAAgFAHg");
	this.shape_1.setTransform(274.2,619.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#20B2AA").s().p("AgWArQgJgIgBgMIAMgCQADALAFAEQAFAFAHAAQAIAAAGgGQAGgGAAgJQAAgJgGgFQgFgGgJAAIgIACIACgKIACAAQAHAAAGgEQAGgEAAgJQAAgGgEgFQgFgEgGAAQgHAAgFAEQgFAFgBAJIgNgCQADgNAIgHQAIgGAMAAQAHAAAHADQAHAEADAGQAEAGAAAHQAAAGgEAFQgDAGgHADQAJACAFAGQAFAGAAAKQAAANgKAJQgJAJgOAAQgNAAgJgIg");
	this.shape_2.setTransform(266.4,619.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#20B2AA").s().p("AATAkIgPgWIgEgGIgSAcIgPAAIAagkIgYgjIAPAAIALARIAFAIIAFgIIAMgRIAPAAIgZAiIAbAlg");
	this.shape_3.setTransform(255.2,621.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#20B2AA").s().p("AgWApQgKgNAAgcQAAgRAEgLQAEgLAHgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAGACAKQADAIAAAOQAAASgEAKQgDAMgIAFQgHAGgLAAQgOAAgIgKgAgMghQgHAKAAAXQAAAZAGAIQAFAIAIAAQAIAAAHgIQAFgIAAgZQAAgXgFgJQgHgIgIAAQgIAAgEAHg");
	this.shape_4.setTransform(244,619.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#20B2AA").s().p("AgWApQgKgNAAgcQAAgRAEgLQADgLAIgFQAHgGAKAAQAIAAAGADQAGAEAEAFQAEAGACAKQACAIABAOQAAASgEAKQgEAMgHAFQgHAGgLAAQgNAAgJgKgAgNghQgGAKAAAXQAAAZAGAIQAFAIAIAAQAIAAAHgIQAFgIAAgZQAAgXgFgJQgHgIgIAAQgHAAgGAHg");
	this.shape_5.setTransform(236.2,619.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#20B2AA").s().p("AgXAoQgJgMAAgZQAAgdAKgMQAKgMAOAAQAMAAAIAGQAHAHACAMIgMABQgBgHgEgEQgFgFgHAAQgFAAgEADQgGAEgDAIQgEAJAAAPQAEgHAHgDQAHgDAFAAQAMAAAKAJQAIAHAAAPQAAAJgEAIQgEAJgHAEQgHAEgKAAQgOAAgKgLgAgNABQgFAHAAAJQAAAHADAFQACAGAFADQAFADAEAAQAIAAAGgGQAFgHAAgLQAAgKgFgGQgFgEgJAAQgHAAgHAEg");
	this.shape_6.setTransform(228.5,619.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(80));

	// control
	this.play_btn = new lib.play();
	this.play_btn.parent = this;
	this.play_btn.setTransform(21,620,0.774,0.774);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).wait(80));

	// band
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Eg43AJYIAAyvMBxvAAAIAASvg");
	this.shape_7.setTransform(0.1,620,0.412,0.333,0,0,0,-363.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(80));

	// spoon
	this.instance_2 = new lib.spoon_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(145,682,0.749,0.749);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({x:145.1,y:537.6,alpha:1},20).wait(40));

	// knife
	this.instance_3 = new lib.knife_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(173.8,758.8,0.765,0.765,0,0,0,-21.2,99.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({x:173.6,y:609.8,alpha:1},20).wait(45));

	// fork
	this.instance_4 = new lib.fork_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(100,682.8,0.768,0.768);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).to({x:99.8,y:532.5,alpha:1},21).wait(49));

	// background
	this.instance_5 = new lib.food_600x300_1();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,320,300,640);
// library properties:
lib.properties = {
	width: 300,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/food_600x300_atlas_.png", id:"food_600x300_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;