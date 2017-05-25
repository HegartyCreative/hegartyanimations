(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"food_728x90_atlas_", frames: [[0,0,728,90],[966,0,48,200],[49,92,45,200],[730,0,234,144],[0,92,47,194]]}
];


// symbols:



(lib.food_728x90_1 = function() {
	this.spriteSheet = ss["food_728x90_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.fork = function() {
	this.spriteSheet = ss["food_728x90_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.knife = function() {
	this.spriteSheet = ss["food_728x90_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.service = function() {
	this.spriteSheet = ss["food_728x90_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.spoon = function() {
	this.spriteSheet = ss["food_728x90_atlas_"];
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
	this.shape.graphics.f("#FFFFFF").s().p("AhVBYQAAgFADgHQAHADAKAAQAkAAAfgvQgEgggNgfQgOgggPgSQAJgHAJAAQAJAAAFAHQAFAIAIAWQAMAjAHAcQAphAAEgxQAVACAAAMQAAAMgTAkQgUAlgWAdQgZAjgZAUQgZAVgSAAQgRgBAAgOg");
	this.shape.setTransform(71.2,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhuA4IAEgkIACgZIACgaQAAgNgGgIIAJgCQAHgDAFAAQAJAAAAAOIgBAZIgBAHIgDAhQArhaAjAAQAZAAAAA1IABAPQAAAZACAKQADAKAHAAQAKAAAOgRQANgRAegxIALAGQgbAxgWAZQgVAYgRAAQgPAAgGgPQgGgPAAgkIAAgKQAAgUgCgIQgDgJgGAAQgQAAgkBAIgMAUQgJAQAAAIQAAADACACQgHADgFAAQgNAAAAgNg");
	this.shape_1.setTransform(58.6,20);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsA6QgIgMAAgTQAAglAXgdQAXgdAfAAQASAAAVALQADgLAWAAIAFAAQgHALgDASIgCAKQgEASAAAWQAAAbAMAAQAOAAAXgWQAWgVAXgiIAJAGQgXAngdAbQgdAbgVAAQgZAAAAgsIABgXQgQAfgXAXQgXAWgRAAQgNAAgHgLgAhOgfQgNAXAAAdQAAAZAQAAQARAAAyhMIAFgHQgagQgRAAQgTAAgNAWg");
	this.shape_2.setTransform(37.9,20);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJA3QgPgQAAgaQAAghAagZQAZgZAiAAQANAAAJAFQAJAFgBAJQAAANgWAHIABgGQAAgUgUAAQgSAAgPAVQgPAUgBAXQABAUAJAMQALANAQAAQAsAAA8hdIAKAHQgdAwghAdQggAcgdAAQgXAAgPgQg");
	this.shape_3.setTransform(21,20.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag/BLQgJgGAAgKQAAgJAMgKQAMgJAcgOIgKgPQgSgdAAgPQAAgYAbgOQARAGAAAKQAAAOgVAMIAOAaIAKATQAXgNAMgKQALgKASgVIAKAGQgaAkgqAWQAEAJAAAIQAAAUgPAOQgPANgVAAQgNAAgIgGgAgzA6QAAAKAPAAQAKAAAHgIQAHgHAAgLQAAgHgDgHQgkAUAAAKg");
	this.shape_4.setTransform(8.2,20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhmA8QgJgJAAgQQAAgTANgyIAEgSQAAgDgCgFIAQAAQALAAAAAJQAAAFgHAZIgDAKIgBAHQgGAWAAALQAAASANAAQAUAAAfgxQAZgpAAgSIgBgEQAKgDAHAAQAKAAAAAGIgBAFIgCAJIgCAKIgDAJIgBAGQgEAUAAARQAAAaANAAQAdAAArhPIALAGQgyBfgqAAQgbAAAAgwIABgWQgRAigUAWQgVAVgRAAQgNAAgIgJg");
	this.shape_5.setTransform(-6.3,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBjIACgPIAdiRIgRAAQgdAAgVAGQAEgRAHgEQAHgDAXAAIBSAAQAhAAALgZQAEAIAAAEQAAAQgUAJQgMAGghAAIgOAAIgbCJIgCAPIABAIQgMAFgKABQgGgBAAgFg");
	this.shape_6.setTransform(-26.1,16.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhuA4IAEgkIACgZIACgaQAAgNgGgIIAJgCQAHgDAFAAQAJAAAAAOIgBAZIgBAHIgDAhQArhaAjAAQAZAAAAA1IABAPQAAAZACAKQADAKAHAAQAKAAAOgRQANgRAegxIALAGQgbAxgWAZQgVAYgRAAQgPAAgGgPQgGgPAAgkIAAgKQAAgUgCgIQgDgJgGAAQgQAAgkBAIgMAUQgJAQAAAIQAAADACACQgHADgFAAQgNAAAAgNg");
	this.shape_7.setTransform(-50.7,20);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag7BVQgIgJAAgOIACgSIADgNQAGgdAAgLQAAgHgFgEIAUgEQAJAAAAANQAAAJgDARIgFAYQgDARAAAFQAAAPAMAAQAQAAAYgaQAZgZAYgnIAKAGQgbAwgcAbQgcAbgWAAQgOAAgIgJgAgqg2QAAgIADgHIABAAQAJAAAPgIQAOgIAJgIQgFARgNALQgVARgHAAQgFAAAAgGg");
	this.shape_8.setTransform(-66.6,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhVBYQAAgFADgHQAHADAKAAQAkAAAfgvQgEgggNgfQgOgggPgSQAJgHAJAAQAJAAAFAHQAFAIAIAWQAMAjAHAcQAphAAEgyQAVADAAAMQAAAMgTAkQgUAlgWAdQgZAjgZAUQgZAVgSAAQgRgBAAgOg");
	this.shape_9.setTransform(130.9,-13.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhOA3QgMgOAAgZQAAgiAXgZQAXgZAhAAQAOAAAKAIQAKAIAAANQAAAWgaARQgaAPgjAAQABAkAeAAQAaAAAfgZQAfgZAZgoIALAGQgYAsgmAdQglAdgjAAQgVAAgOgOgAgtgmQgOARgEAZQAagCASgMQASgNABgSQgBgPgOAAQgQAAgOASg");
	this.shape_10.setTransform(120.3,-16.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhuA4IAEgkIACgZIACgaQAAgNgGgIIAJgCQAHgDAFAAQAJAAAAAOIgBAZIgBAHIgDAhQArhaAjAAQAZAAAAA1IABAPQAAAZACAKQADAKAHAAQAKAAAOgRQANgRAegxIALAGQgbAxgWAZQgVAYgRAAQgPAAgGgPQgGgPAAgkIAAgKQAAgUgCgIQgDgJgGAAQgQAAgkBAIgMAUQgJAQAAAIQAAADACACQgHADgFAAQgNAAAAgNg");
	this.shape_11.setTransform(103.7,-16.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhCA6QAAgFAEgXIAHgeQAFgaAAgNQAAgHgEgFQANgEAIAAQAJAAAAAKQAAAHgHAdIgGAiQAXgsAWgYQAXgZATAAQAHAAAFAEQAFADAAAGQAAAIgTAPQgEgKgJAAQgPAAgXAhQgPATgLAWQgLAWAAAJIAAACQgIAEgGAAQgMAAAAgLg");
	this.shape_12.setTransform(84.8,-16.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhmA8QgJgJAAgQQAAgTANgyIAEgSQAAgDgCgFIAQAAQALAAAAAJQAAAFgHAZIgDAKIgBAHQgGAWAAALQAAASANAAQAUAAAfgxQAZgpAAgSIgBgEQAKgDAHAAQAKAAAAAGIgBAFIgCAJIgCAKIgDAJIgBAGQgEAUAAARQAAAaANAAQAdAAArhPIALAGQgyBfgqAAQgbAAAAgwIABgWQgRAigUAWQgVAVgRAAQgNAAgIgJg");
	this.shape_13.setTransform(70,-16.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhXA6QgPgRAAgZQAAgbAUgUQAUgWAbAAIAJABQgDgFAAgEQAAgGAEgFQAdACAUAdQAUAOAWgBQAOABARgLIAGALQgTAOgVAAQgOAAgRgGIABAGQAAAhgYAbQgYAagfAAQgZAAgQgPgAg9gWQgQATAAAXQAAARALAMQAJAKAPABQAVgBAPgUQAOgVAAgcQAAgKgDgJQgJgDgJgHIgLgBQgVAAgQASg");
	this.shape_14.setTransform(51.4,-16.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhVBvQgNgIAAgJQAAgMARgKQAAAOAJAJQAIAIAPAAQAWAAALgRQALgQAJguIAXh3IgWAEQgOAAgCgUQAFADAHAAQAJAAAXgEIAMgDQAPgDAMAAQANAAAGAFQAGAFACAPQgLgHgPAAIgTACIgWBrQgLA5gZAbQgZAagdAAQgOAAgNgIg");
	this.shape_15.setTransform(31.7,-16.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhVBYQAAgFADgHQAHADAKAAQAkAAAfgvQgEgggNgfQgOgggPgSQAJgHAJAAQAJAAAFAHQAFAIAIAWQAMAjAHAcQAphAAEgyQAVADAAAMQAAAMgTAkQgUAlgWAdQgZAjgZAUQgZAVgSAAQgRgBAAgOg");
	this.shape_16.setTransform(10.2,-13.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhCA6QAAgFAEgXIAHgeQAFgaAAgNQAAgHgEgFQANgEAIAAQAJAAAAAKQAAAHgHAdIgGAiQAXgsAWgYQAXgZATAAQAHAAAFAEQAFADAAAGQAAAIgTAPQgEgKgJAAQgPAAgXAhQgPATgLAWQgLAWAAAJIAAACQgIAEgGAAQgMAAAAgLg");
	this.shape_17.setTransform(-1.1,-16.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhsA6QgIgMAAgTQAAglAXgdQAXgdAfAAQASAAAVALQADgLAWAAIAFAAQgHALgDASIgCAKQgEASAAAWQAAAbAMAAQAOAAAXgWQAWgVAXgiIAJAGQgXAngdAbQgdAbgVAAQgZAAAAgsIABgXQgQAfgXAXQgXAWgRAAQgNAAgHgLgAhOgfQgNAXAAAdQAAAZAQAAQARAAAyhMIAFgHQgagQgRAAQgTAAgNAWg");
	this.shape_18.setTransform(-16.5,-16.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhuA4IAEgkIACgZIACgaQAAgNgGgIIAJgCQAHgDAFAAQAJAAAAAOIgBAZIgBAHIgDAhQArhaAjAAQAZAAAAA1IABAPQAAAZACAKQADAKAHAAQAKAAAOgRQANgRAegxIALAGQgbAxgWAZQgVAYgRAAQgPAAgGgPQgGgPAAgkIAAgKQAAgUgCgIQgDgJgGAAQgQAAgkBAIgMAUQgJAQAAAIQAAADACACQgHADgFAAQgNAAAAgNg");
	this.shape_19.setTransform(-35.6,-16.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("Ag7BVQgIgJAAgOIACgSIADgNQAGgdAAgLQAAgHgFgEIAUgEQAJAAAAANQAAAJgDARIgFAYQgDARAAAFQAAAPAMAAQAQAAAYgaQAZgZAYgnIAKAGQgbAwgcAbQgcAbgWAAQgOAAgIgJgAgqg2QAAgIADgHIABAAQAJAAAPgIQAOgIAJgIQgFARgNALQgVARgHAAQgFAAAAgGg");
	this.shape_20.setTransform(-51.5,-19);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgyBiQgJgLAAgTQAAgJAEgTIAYh5IgIABQgcAAAAgYIAAgCQAOAIATAAQATAAAOgJIgdCRQgEAVAAAGQAAAWAQgBQAOAAAOgQQAPgQAhg2IAKAGQgZAwgZAcQgZAbgTAAQgPgBgJgKg");
	this.shape_21.setTransform(-62.6,-20.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhmA8QgJgJAAgQQAAgTANgyIAEgSQAAgDgCgFIAQAAQALAAAAAJQAAAFgHAZIgDAKIgBAHQgGAWAAALQAAASANAAQAUAAAfgxQAZgpAAgSIgBgEQAKgDAHAAQAKAAAAAGIgBAFIgCAJIgCAKIgDAJIgBAGQgEAUAAARQAAAaANAAQAdAAArhPIALAGQgyBfgqAAQgbAAAAgwIABgWQgRAigUAWQgVAVgRAAQgNAAgIgJg");
	this.shape_22.setTransform(-77.1,-16.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag6BNQgTgTABgfQgBgxAhgkQAhgkAsAAQATAAAMAHQANAGABAKQgBAIgKALQgPgegcAAQgcAAgXAfQgVAfAAAoQAAAaANAPQANAQAWAAQAnAAAfglQADAFAAAEQAAAPgcAQQgbAPgbAAQggAAgRgSg");
	this.shape_23.setTransform(-99.2,-18.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AApAdQgUACgVAAIggAAIgDAEQgPAdAAAQQAAAEAEAFIgOAFIgJABQgIAAAAgIQAAgRAVgjIAEgGIgGAAQgUAAgLAGQAFgUAZAAIAQAAIADgFQATgcAmgwQAOgRAGgEQAHgEATgDQgEAWAAATQAAAyAMAyQAGAdANAIQgLALgIAAQgUAAgKhCgAAPgqQgYAfgMAXIgCAEIAXABQAaAAANgCQgGgqAAgcIABgJg");
	this.shape_24.setTransform(-127.2,-18.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.text, new cjs.Rectangle(-139.2,-37.4,278.4,74.9), null);


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
(lib.food_728x90 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		this.play_btn.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			// This example code displays the words "Mouse clicked" in the Output panel.
			this.gotoAndPlay(2);
			// End your custom code
		}
	}
	this.frame_79 = function() {
		
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79).wait(1));

	// Service
	this.instance = new lib.service_1();
	this.instance.parent = this;
	this.instance.setTransform(512.3,50.2,1.538,1.538,0,0,0,0,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({regY:0,scaleX:1,scaleY:1,y:50,alpha:1},16).wait(12));

	// Food
	this.instance_1 = new lib.text();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275.2,46.6);
	this.instance_1.alpha = 0;
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",3,3,2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(41).to({_off:false},0).to({alpha:1},19).wait(20));

	// control
	this.play_btn = new lib.play();
	this.play_btn.parent = this;
	this.play_btn.setTransform(25.5,110.3,0.774,0.774);
	new cjs.ButtonHelper(this.play_btn, 0, 1, 2, false, new lib.play(), 3);

	this.timeline.addTween(cjs.Tween.get(this.play_btn).to({_off:true},1).wait(79));

	// size
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#20B2AA").s().p("AgWApQgKgNAAgcQABgRADgKQAEgLAHgGQAHgGAKAAQAIAAAGADQAGADAEAHQAEAGACAIQACAJAAAOQABASgEAKQgDALgIAHQgHAFgLAAQgOAAgIgKgAgNghQgGAKAAAXQAAAZAGAIQAFAIAIAAQAJAAAFgIQAGgJAAgYQAAgXgGgJQgFgIgJAAQgIAAgFAHg");
	this.shape.setTransform(711.1,111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#20B2AA").s().p("AgVAtQgIgHgBgLIAMgCQABAJAEAEQAFADAGAAQAFAAAEgDQAFgCACgFQADgEACgHQACgIAAgHIAAgDQgEAGgGAEQgHAEgGAAQgNgBgIgIQgJgJAAgOQAAgQAJgJQAJgJAOAAQAIAAAIAFQAJAGAEAJQAEAKAAATQAAASgEALQgEALgJAHQgIAFgKAAQgMAAgHgGgAgNghQgGAHAAAKQAAAJAGAHQAFAEAIAAQAIAAAGgEQAFgHAAgKQAAgKgFgHQgGgGgIAAQgHAAgGAHg");
	this.shape_1.setTransform(703.4,111);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#20B2AA").s().p("AATAkIgPgWIgEgGIgSAcIgPAAIAagkIgYgjIAPAAIALARIAFAIIAFgIIAMgRIAPAAIgZAiIAbAlg");
	this.shape_2.setTransform(692.2,112.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#20B2AA").s().p("AgXArQgJgKAAgNQAAgKAFgGQAFgGAJgCQgIgCgDgGQgEgFAAgIQAAgKAIgHQAIgIAMAAQANAAAIAIQAIAHAAALQAAAHgDAFQgEAGgHACQAIADAFAGQAFAGAAAKQAAANgJAJQgJAIgPAAQgOAAgJgIgAgOAGQgFAGAAAIQAAAGACAFQADAEAFADQAFADAEAAQAJAAAGgFQAGgHgBgIQABgJgGgFQgGgHgJABQgIAAgGAFgAgKgjQgFAEAAAGQAAAHAFAFQAEAEAGABQAIgBAEgEQAEgFABgGQgBgHgEgEQgFgFgHAAQgGAAgEAFg");
	this.shape_3.setTransform(680.9,111);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#20B2AA").s().p("AggAyQAAgEABgEQADgHAGgHQAFgGALgJQAPgNAGgHQAFgIAAgHQAAgHgFgFQgFgFgIAAQgIAAgGAFQgFAFAAAKIgNgBQACgPAIgHQAJgHANAAQAOAAAJAIQAIAIAAALQAAAGgCAGQgDAGgGAGIgTARIgNANIgFAGIAwAAIAAAMg");
	this.shape_4.setTransform(673,110.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#20B2AA").s().p("AgSAxQABgMAFgQQADgRAJgOQAHgQAJgKIgvAAIAAgNIBAAAIAAAKQgKALgJAQQgKAQgEASQgEANAAAOg");
	this.shape_5.setTransform(665.5,111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(80));

	// band
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Eg43AJYIAAyvMBxvAAAIAASvg");
	this.shape_6.setTransform(364,110,1,0.333);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(80));

	// spoon
	this.instance_2 = new lib.spoon_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(53,138,0.447,0.447);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({y:61,alpha:1},21).wait(39));

	// knife
	this.instance_3 = new lib.knife_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(70.4,189.1,0.456,0.456,0,0,0,-21.2,99.6);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({x:70.1,y:104.1,alpha:1},21).wait(44));

	// fork
	this.instance_4 = new lib.fork_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(26,139,0.458,0.458);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).to({y:58,alpha:1},21).wait(50));

	// image
	this.instance_5 = new lib.food_728x90_1();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,65,728,130);
// library properties:
lib.properties = {
	width: 728,
	height: 130,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/food_728x90_atlas_.png?1495484663759", id:"food_728x90_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;