(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"noFish_atlas_1", frames: [[0,0,1536,1548]]},
		{name:"noFish_atlas_2", frames: [[0,0,1612,1237]]},
		{name:"noFish_atlas_3", frames: [[0,0,1473,1207]]},
		{name:"noFish_atlas_4", frames: [[1129,1517,555,370],[837,0,769,769],[1608,236,414,130],[1431,1141,564,374],[1608,368,211,130],[0,874,1818,265],[0,0,835,872],[0,1470,1127,322],[0,1141,1429,327],[1608,0,382,234]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_20 = function() {
	this.initialize(ss["noFish_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["noFish_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["noFish_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["noFish_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["noFish_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["noFish_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["noFish_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(img.CachedBmp_13);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2100,195);


(lib.CachedBmp_12 = function() {
	this.initialize(img.CachedBmp_12);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2100,195);


(lib.CachedBmp_11 = function() {
	this.initialize(img.CachedBmp_11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6144,4869);


(lib.CachedBmp_10 = function() {
	this.initialize(img.CachedBmp_10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,6144,4869);


(lib.CachedBmp_9 = function() {
	this.initialize(ss["noFish_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["noFish_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2513,1995);


(lib.CachedBmp_6 = function() {
	this.initialize(ss["noFish_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["noFish_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(img.CachedBmp_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4096,3246);


(lib.CachedBmp_2 = function() {
	this.initialize(ss["noFish_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(img.CachedBmp_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4163,2334);


(lib.photo = function() {
	this.initialize(ss["noFish_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#399DD7").s().p("Eh1zAT7IAA9LUB78ANGBvqgXwMAAAAn1g");
	this.shape.setTransform(753.95,127.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,1507.9,255), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,2,1).p("AgniOIAAEdIBPhVg");
	this.shape.setTransform(360.725,596.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("ACFh0QgEAJgqgKQgpgKg1gXQgBAAgCgBQg3gYglgYQgkgXAEgKQAEgKAqALQAkAJAtASQAHADAJAEQA4AYAkAXQAkAYgEAKgACGgYQgEAKgrgLQgpgJg1gXQgBgBgBAAQg4gYgkgYQgkgYAEgJQAEgKAqAKQAjAJAtASQAIAEAJAEQA3AYAkAXQAlAXgEAKgACGBEQgEAJgqgKQgqgKg1gXQgBAAgBgBQg3gYglgXQgkgXAEgKQAEgKAqALQAkAIAsATQAIADAJAEQA4AXAkAXQAkAYgEAKgACHCcQgEAJgqgKQgqgKg2gXQgBgBAAAAQg3gYglgYQgkgXAEgKQAEgKAqALQAjAIAsASQAIAEAKAEQA4AYAkAXQAkAYgEAKgACHDpQgEAKgrgLQgpgJg2gYQgBAAAAAAQg4gYgkgYQgkgYAEgJQAEgKAqAKQAjAJAsASQAIAEAKAEQA3AYAkAXQAlAXgEAKg");
	this.shape_1.setTransform(320.0998,525.7817);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(7,1,1).p("EAXaAmjIAAkoUAP3gomhBvgf3");
	this.shape_2.setTransform(169.4883,246.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(6,1,1).p("AjYrqQgCAAgCAAQg+AAgrgrQgrgrAAg+QAAg9ArgsQArgrA+AAQACAAACAAQA7ACApApQAsAsAAA9QAAA+gsArQgpAqg7ABIAAB4IAAA2AjYoWIAAA2IAAAmIAAA3IAAAhIAAA2IAAAXIAAA3IAANEQAhDXCDCIQBiBdCDgSQCIgSA4jjQgBjiiCji");
	this.shape_3.setTransform(340.925,568.0285);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-3.5,-3.5,384.4,678.8), null);


(lib.start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(52.5,84.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_19();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(-0.5,-0.5,384.5,384.5), null);


(lib.Scene_1_text = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(112.7,145.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_15();
	this.instance_1.setTransform(122.5,406.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_14();
	this.instance_2.setTransform(228.35,340.25,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_13();
	this.instance_3.setTransform(112.7,145.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},712).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},37).wait(76));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_splash = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// splash
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#399DD7").s().p("As5JrQgugYgogoIgTgUQhShfAAiCQAAiPAZlKQAYlMDMC1QDMC3BbB6QBaB7AaA5QgRhZAAhlQAAj5BhivQBiivCKAAQCIAABhCvQBaCiAIDhQA3hMBWhXQD0jzCLAfQCKAeAaDUQAaDUAACpQAACoh4B4QggAggkAXQhhBAh8AAQh8AAhhhAQgjgXggggQg6g6gehIQgMAbgPAbQgwBXg5AsQg8AthEAAQhGAAg7gtQg6gsgxhXQgZgugSgyIgJABIAAACQAACBhSBfIgTAUQgoAogtAYgAlBEiIADAAIgDgLIAAALg");
	this.shape.setTransform(829.825,649.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#399ED7").s().p("As5JrQgugYgognIgTgVQhShfAAiCQAAiPAZlKQAYlMDMC1QDMC2BbB8QBaB6AaA5QgRhZAAhlQAAj4BhivQBiiwCKAAQCIAABhCwQBaChAIDhQA3hNBWhWQD0jzCLAfQCKAeAaDVQAaDTAACoQAACph4B3QggAhgkAXQhhBAh8AAQh8AAhhhAQgjgXggghQg6g6gehGQgMAagPAbQgwBXg5AsQg8AthEAAQhGAAg7gtQg6gsgxhXQgZgugSgzIgJACIAAACQAACBhSBfIgTAVQgoAngtAYg");
	this.shape_1.setTransform(829.775,645.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#399ED7").s().p("As5JrQgugYgogoIgTgUQhShfAAiCQAAiPAZlKQAYlNDMC3QDMC1BbB7QBaB7AaA6QgRhaAAhlQAAj5BhivQBiivCKAAQCIAABhCvQBaCiAIDhQA3hNBWhWQD0jyCLAeQCKAeAaDUQAaDUAACpQAACoh4B4QggAggkAXQhhBAh8AAQh8AAhhhAQgjgXggggQg6g7gehHQgMAbgPAbQgwBXg5AsQg8AthEAAQhGAAg7gtQg6gsgxhXQgZgugSgyIgJABIAAACQAACBhSBfIgTAUQgoAogtAYg");
	this.shape_2.setTransform(829.725,640.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#399FD7").s().p("As5JrQgugYgognIgTgVQhRhfAAiCQAAiPAZlKQAXlMDMC1QDNC3BaB6QBaB7AaA5QgRhZAAhlQAAj4BhivQBiiwCKAAQCIAABhCwQBaCiAIDgQA2hMBXhXQDzjzCMAfQCKAeAaDUQAZDUABCoQgBCph3B3QghAhgjAXQhhBAh9AAQh7AAhhhAQgjgXghghQg6g6gdhHQgMAbgPAbQgwBXg6AsQg7AthEAAQhGAAg8gtQg5gsgxhXQgZgugSgzIgJACIAAACQAACBhSBfIgUAVQgmAnguAYg");
	this.shape_3.setTransform(829.7,636.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#399FD7").s().p("As5JrQgugYgngoIgUgUQhShfAAiCQAAiPAZlKQAYlMDMC2QDNC2BaB6QBaB7AaA5QgRhZAAhlQABj4BgivQBiiwCKAAQCIAABhCwQBaCiAIDgQA3hMBWhXQDzjyCLAeQCKAeAbDVQAZDTAACoQAACph4B3QgfAggkAYQhhBAh8AAQh8AAhhhAQgkgYgfggQg6g6gehHQgMAbgPAbQgwBXg5AsQg7AthFAAQhFAAg8gtQg6gsgxhXQgZgugSgzIgJACIAAACQAACBhSBfIgTAUQgoAogtAYg");
	this.shape_4.setTransform(829.65,631.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#39A0D7").s().p("As5JrQgugYgngoIgTgUQhShfAAiCQAAiPAZlKQAXlMDNC2QDLC2BbB6QBbB7AZA5QgQhZAAhlQAAj4BgivQBjiwCJAAQCIAABhCwQBaCiAHDgQA4hMBWhXQDzjyCMAeQCJAeAbDVQAZDTABCoQgBCph4B3QgfAggkAYQhhBAh9AAQh7AAhhhAQgjgYghggQg6g6gdhHQgMAbgPAbQgvBXg6AsQg8AthEAAQhGAAg7gtQg6gsgxhXQgYgugTgzIgJACIAAACQAACBhSBfIgTAUQgnAoguAYg");
	this.shape_5.setTransform(829.6,627.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#39A0D7").s().p("As5JrQgugYgogoIgTgUQhShfAAiCQAAiPAZlKQAYlMDMC2QDMC2BbB6QBbB7AZA5QgRhZAAhlQABj4BhivQBhiwCKAAQCIAABhCwQBaCiAIDgQA3hMBWhXQD0jyCKAeQCKAeAbDVQAaDTgBCoQABCph4B3QggAggkAYQhhBAh8AAQh8AAhhhAQgkgYgfggQg7g6gdhHQgMAbgPAbQgwBXg5AsQg8AthEAAQhGAAg7gtQg6gsgwhXQgagugSgzIgJACIAAACQAACBhSBfIgTAUQgoAogtAYg");
	this.shape_6.setTransform(829.55,623.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#39A1D7").s().p("As5JrQgugYgngnIgTgVQhShfAAiCQAAiOAZlLQAXlNDNC3QDMC1BaB8QBaB6AaA6QgRhaAAhlQAAj4BhivQBiiwCKAAQCIAABhCwQBaChAIDhQA3hNBWhWQD0jyCLAeQCJAeAbDVQAZDTAACoQAACqh3B2QggAggkAYQhhBAh8AAQh8AAhhhAQgjgYggggQg6g5gehHQgMAagPAbQgwBXg5AsQg8AthEAAQhGAAg7gtQg6gsgxhXQgZgugSgzIgJACIAAACQAACBhSBfIgTAVQgnAnguAYg");
	this.shape_7.setTransform(829.525,618.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#39A2D7").s().p("As5JrQgugYgngoIgTgUQhShfAAiCQAAiOAZlLQAXlMDNC1QDMC3BaB6QBaB7AaA5QgRhZAAhlQAAj5BhivQBiivCKAAQCIAABhCvQBaCiAIDhQA3hMBWhXQD0jyCLAeQCJAeAbDUQAZDUAACpQAACoh3B4QggAggkAXQhhBAh8AAQh8AAhhhAQgjgXggggQg6g6gehIQgMAbgPAbQgwBXg5AsQg8AthEAAQhGAAg7gtQg6gsgxhXQgZgugSgyIgJABIAAACQAACBhSBfIgTAUQgnAoguAYg");
	this.shape_8.setTransform(829.475,614.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#39A2D7").s().p("As5JrQgugYgngnIgTgVQhShfAAiCQAAiPAZlKQAXlNDNC2QDMC2BaB8QBaB6AaA5QgRhZAAhlQAAj4BhivQBiiwCKAAQCIAABhCwQBaChAIDhQA3hNBWhWQD0jzCLAfQCJAeAbDVQAZDTAACoQAACph3B3QggAhgkAXQhhBAh8AAQh8AAhhhAQgjgXggghQg6g6gehGQgMAagPAbQgwBXg5AsQg8AthEAAQhGAAg7gtQg6gsgxhXQgZgugSgzIgJACIAAACQAACBhSBfIgTAVQgnAnguAYg");
	this.shape_9.setTransform(829.425,609.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#39A3D7").s().p("As5JrQgugYgngoIgTgUQhShfAAiCQAAiPAZlKQAXlNDNC3QDMC1BaB7QBaB7AaA6QgRhaAAhlQAAj5BhivQBiivCKAAQCIAABhCvQBaCiAIDhQA3hNBWhWQD0jyCLAeQCJAeAbDUQAZDUAACpQAACoh3B4QggAggkAXQhhBAh8AAQh8AAhhhAQgjgXggggQg6g7gehHQgMAbgPAbQgwBXg5AsQg8AthEAAQhGAAg7gtQg6gsgxhXQgZgugSgyIgJABIAAACQAACBhSBfIgTAUQgnAoguAYg");
	this.shape_10.setTransform(829.375,605.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#39A3D7").s().p("As5JrQgugYgngoIgTgUQhShfAAiCQAAiPAZlKQAXlMDNC2QDMC2BaB6QBbB7AZA5QgQhZAAhlQAAj4BhivQBiiwCJAAQCJAABgCwQBaCiAIDgQA3hMBWhXQD0jyCLAeQCJAeAbDVQAZDTAACoQAACph3B3QggAggkAYQhhBAh8AAQh8AAhhhAQgjgYggggQg6g6gehHQgMAbgPAbQgvBXg6AsQg7AthFAAQhFAAg8gtQg6gsgwhXQgZgugTgzIgJACIAAACQAACBhSBfIgTAUQgnAoguAYg");
	this.shape_11.setTransform(829.325,600.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#39A4D7").s().p("As5JrQgtgYgogoIgTgUQhShfAAiCQAAiPAZlKQAYlMDMC2QDMC2BaB6QBbB7AZA5QgRhZAAhlQAAj4BhivQBiiwCKAAQCJAABgCwQBaCiAHDgQA3hMBXhXQDzjyCLAeQCKAeAbDVQAZDTAACoQAACph4B3QgfAggkAYQhhBAh9AAQh7AAhhhAQgkgYggggQg5g6gehHQgMAbgPAbQgwBXg5AsQg7AthFAAQhFAAg8gtQg6gsgxhXQgZgugSgzIgJACIAAACQAACBhSBfIgTAUQgnAogtAYg");
	this.shape_12.setTransform(829.3,596.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#39A4D7").s().p("As4JrQgvgYgngoIgTgUQhShfAAiCQAAiPAZlKQAXlMDNC2QDMC2BbB6QBZB7AaA5QgQhZAAhlQgBj4BiivQBiiwCJAAQCIAABhCwQBaCiAIDgQA2hMBXhXQDzjyCMAeQCJAeAaDVQAaDTAACoQAACph3B3QghAggjAYQhhBAh9AAQh7AAhhhAQgjgYghggQg6g6gdhHQgMAbgPAbQgvBXg6AsQg8AthEAAQhGAAg7gtQg6gsgwhXQgZgugTgzIgJACIAAACQAACBhSBfIgTAUQgnAoguAYg");
	this.shape_13.setTransform(829.25,591.925);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#39A5D7").s().p("As5JrQgtgYgogoIgTgUQhShfAAiCQAAiPAZlKQAXlMDNC2QDMC2BaB6QBbB7AZA5QgRhZAAhlQABj4BgivQBiiwCKAAQCIAABhCwQBaCiAHDgQA4hMBWhXQD0jyCKAeQCKAeAaDVQAaDTAACoQAACph3B3QggAggkAYQhhBAh8AAQh8AAhhhAQgkgYgfggQg6g6gehHQgMAbgPAbQgwBXg5AsQg7AthFAAQhGAAg7gtQg6gsgxhXQgZgugSgzIgJACIAAACQAACBhSBfIgTAUQgnAogtAYgAlBEhIADAAIgDgKIAAAKg");
	this.shape_14.setTransform(829.2,587.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#39A5D7").s().p("As1JjQgsgXgmgmQgOgOgPgXQhUhnACiMQACiXAokrQAlktDHCzQDHCzBXB3QBUBwAZAxQgQhhAMhoQANj1B1ilQB2inBsAIQBuAIBcCyQBZCWALDRQBAhVBjhSQD4jmCCAoQCBAoATDTQARDRgGCmQgBCjhzByQgkAhgoAXQhiA8h7gDQh3gBheg+QglgagfghQg4g2gdhCQgOAegRAbQgwBVg6AqQg8AqhEgCQhFgCg7gvQg4gsgvhVQgYgsgSgwIgJACQAAAHgEAGQAAB7hOBaQgLAMgMALQgtAmgzAWIkzgDg");
	this.shape_15.setTransform(828.4243,591.4817);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#39A4D7").s().p("As0JcQgrgXgkgkQgRgTgVgjQhWhvAFiVQAEigA1kMQA0kODBCwQDBCwBUBzQBPBmAXAqQgPhqAZhrQAZjxCJicQCKidBRAPQBSAPBXC1QBXCKAPDBQBKhdBvhNQD7jZB7AxQB4AxALDSQAKDQgMCjQgDCchwBtQgmAjgsAWQhlA5h5gGQhzgDhag8QgmgbgggkQg1gygcg9QgQAhgTAcQgwBTg7AoQg9AohDgEQhFgFg6gxQg3gsgthTQgXgqgRgtIgIABQAAAOgIALQgBB1hLBWQgMAOgOALQgzAkg5AVQiUgCiTgEg");
	this.shape_16.setTransform(827.8737,595.4804);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#39A4D7").s().p("As1JVQgpgWgjgjQgVgWgZgwQhYh4AGidQAGipBEjtQBCjvC7CtQC7CtBRBvQBKBcAWAiQgOhyAlhvQAljsCdiUQCciTA3AXQA2AXBUC3QBUB+AUCyQBThlB6hJQEAjNByA7QBxA6ACDRQACDOgSCiQgFCUhrBpQgqAkgwAUQhmA3h4gKQhugDhXg7QgngdgggmQgzgtgbg5QgRAkgWAdQgxBRg7AmQg9AmhDgHQhEgHg6gzQg1gsgshSQgWgngQgqIgIABQAAAUgMAPQgCBwhHBSQgNAPgQAMQg5Ahg+AVQiPgEiNgGg");
	this.shape_17.setTransform(827.5118,599.3949);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#39A3D7").s().p("As4JOQgngVghgiQgZgbgfg8Qhah/AIinQAIiwBSjPQBQjRC2CqQC1CqBOBtQBFBRAUAZQgNh4AyhzQAxjpCxiKQCwiKAbAeQAbAfBPC5QBTBzAXCiQBdhuCGhDQEEjBBpBFQBpBDgGDPQgGDOgYCeQgGCOhnBkQgtAmg1ATQhnAzh2gNQhqgEhUg6QgogegggoQgxgpgag0QgTAngYAeQgyBPg8AjQg9AkhDgJQhDgJg5g1QgzgtgrhPQgVglgQgoIgHABQAAAbgQAUQgCBphEBOQgPAQgRANQg/AghEATQiJgFiHgIg");
	this.shape_18.setTransform(827.3561,603.324);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39A3D7").s().p("As8JIQglgUggggQgcggglhIQhciIALiwQAKi4BgixQBfiyCwCoQCvCnBKBpQBABGATASQgMiAA+h3QA+jlDFiBQDEiBgBAnQgBAmBKC8QBSBmAbCTQBmh2CSg/QEIi0BhBOQBgBNgNDOQgODMgeCcQgICHhiBfQgxAog5ARQhoAwh2gQQhlgGhRg4QgpgggfgpQgvglgagvQgVAqgZAfQgzBNg8AhQg+AhhCgLQhDgLg5g3QgxgtgphOQgUgigPgmIgHACQAAAhgUAYQgDBkhABJQgQASgTAOQhFAdhKASQiDgGiCgKg");
	this.shape_19.setTransform(827.2794,607.1825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#39A3D7").s().p("AtAJCQgjgTgfgfQgfgkgrhUQheiQAMi6QANjBBuiRQBtiTCqCkQCqCkBHBmQA6A8ASAKQgMiIBLh7QBLjhDXh3QDZh4gcAuQgdAuBGC/QBPBaAgCDQBvh+Ceg6QENioBYBXQBYBXgVDMQgXDLgjCZQgKCAheBbQg0Apg+ARQhpAsh0gTQhhgHhOg2QgqgigfgsQgsgggagqQgWAtgcAgQgzBKg9AfQg+AfhCgNQhCgNg4g6QgwgsgohMQgTghgOgjIgGACQAAAngZAeQgDBdg8BGQgSATgVAOQhLAchPAQQh+gHh7gMg");
	this.shape_20.setTransform(827.2549,611.0007);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#39A2D7").s().p("AtFI9QghgTgdgeQgjgngxhhQhgiYAPjDQAOjKB9hyQB7h0ClChQCkChBDBjQA1AxARACQgLiQBXh+QBXjdDshuQDshvg4A2Qg4A2BBDBQBOBOAjB0QB5iHCrg1QEQibBQBgQBPBggdDLQgeDJgqCXQgLB6haBVQg3ArhCAQQhrAphygWQhdgIhKg1QgsgkgfgtQgqgdgYglQgZAwgdAhQg0BIg+AdQg/AdhBgQQhBgPg4g8QgugsgmhLQgSgdgOghIgGACQAAAugcAiQgDBXg5BBQgUAVgWAPQhRAahVAPQh4gIh2gOg");
	this.shape_21.setTransform(827.2692,614.8137);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#39A2D7").s().p("AtKI4QgggSgbgcQgngsg2htQhiihARjLQAQjTCLhTQCJhVCfCeQCeCeBBBgQAvAmAQgGQgKiYBjiBQBkjaD/hlQEBhlhUA+QhUA+A9DDQBMBCAnBkQCDiPC2gwQEUiPBIBqQBHBqglDJQgmDIgwCVQgNByhVBRQg7AshHAOQhrAnhygaQhYgJhHgzQgsgmgfgvQgogYgYggQgaAzggAhQg0BGg+AbQg/AbhBgSQhBgSg3g+QgtgsglhJQgQgbgNgeIgGACQAAA0ghAmQgDBSg1A9QgVAWgZAQQhXAXhbAPQhygKhvgQg");
	this.shape_22.setTransform(827.3792,618.5362);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#39A1D7").s().p("AtQIzQgegRgagbQgqgwg8h6QhkioATjUQASjcCZg1QCYg2CZCbQCZCcA9BcQAqAcAOgOQgJigBwiFQBwjWEThbQEVhchwBFQhvBGA4DFQBKA3ArBUQCMiXDDgsQEYiCBAB0QA+BzgtDIQguDGg1CSQgPBrhSBNQg9AuhLANQhuAjhvgdQhUgKhEgyQgugngfgyQglgTgXgbQgcA2giAiQg1BEg/AYQg/AZhBgUQhAgUg2hAQgsgtgjhGQgPgZgNgcIgEACQAAA7glArQgEBMgyA4QgXAYgaAQQhdAWhgANQhtgLhpgSg");
	this.shape_23.setTransform(827.514,622.2668);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#39A1D7").s().p("AtXIwQgcgRgYgZQgug1hBiGQhmixAVjdQAUjkCngWQCmgXCUCYQCTCZA6BYQAkASANgWQgIioB8iJQB9jREnhTQEohSiLBNQiLBNA0DIQBIArAvBFQCWigDOgnQEdh1A3B8QA2B9g1DGQg2DFg8CQQgQBkhNBIQhBAwhQALQhuAghvggQhPgLhBgwQgugpgfg0QgjgPgWgWQgeA5gkAjQg2BCg/AWQhAAWhAgWQhAgWg2hCQgpgtgihFQgPgXgLgYIgFABQAABBgpAwQgEBGguA1QgYAZgcARQhjAThmAMQhngMhkgTg");
	this.shape_24.setTransform(827.7334,625.9164);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#39A1D7").s().p("AteIsQgagQgXgYQgxg5hHiSQhoi5AXjmQAWjtC1AIQC1AICNCWQCOCWA3BVQAfAHALgeQgHiwCJiMQCJjOE7hJQE8hJinBVQinBUAwDLQBHAfAzA1QCeioDagiQEhhpAvCGQAuCGg9DFQg+DEhCCNQgRBehJBCQhEAyhVAKQhvAdhugjQhLgNg9gvQgwgqgeg1QghgMgWgRQgfA8gmAkQg2BAhAAUQhAAUhAgZQhAgYg1hEQgogtgghDQgOgVgKgWIgFACQAABHgtA1QgFBAgqAwQgZAbgeARQhpAShsALQhhgNhegWg");
	this.shape_25.setTransform(827.9805,629.5208);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#39A0D7").s().p("AtlIpQgZgQgVgWQg1g9hNifQhqjBAZjwQAZj1DDAnQDDAnCICTQCICTAzBSQAagEAKgmQgGi4CViPQCWjKFOhAQFQhAjCBdQjDBcArDNQBFATA3AmQCoiwDngeQElhcAmCPQAlCPhFDDQhFDDhICLQgTBXhFA9QhHA0hZAJQhxAahsgnQhHgOg6gtQgxgsgeg3QgegHgVgNQgiA/goAlQg2A+hBASQhBASg/gbQg/gbg1hGQgmgtgehBQgNgSgKgUIgEACQAABOgxA5QgFA6gnAsQgbAcgfASQhvAQhyAKQhcgPhXgXg");
	this.shape_26.setTransform(828.2967,633.1164);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#39A0D7").s().p("AtuImQgXgPgUgUQg4hChSirQhsjJAbj5QAaj+DSBGQDRBGCCCQQCCCPAwBPQAVgOAJguQgGjACiiTQCijGFig2QFkg3jeBkQjeBlAnDPQBDAHA7AWQCxi4DygZQEphQAeCZQAeCZhODBQhNDChNCIQgVBQhBA5QhLA1hdAIQhyAWhrgpQhCgQg3grQgygugeg5QgcgDgUgHQgjBCgrAlQg3A8hBAQQhBAPg/gdQg+gdg1hIQgkgtgdg/QgMgQgJgRIgDACQAABUg2A+QgGA0gjAoQgcAdghATQh1AOh4AIQhWgPhRgag");
	this.shape_27.setTransform(828.7117,636.6138);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#399FD7").s().p("At3IkQgVgPgSgTQg9hFhXi4QhujRAdkCQAckHDgBlQDfBlB9CNQB8CMAtBMQAQgZAHg2QgFjICviWQCujCF2gtQF4gtj6BrQj6BsAjDSQBBgFA/AHQC7jBD+gUQEthDAWCiQAVCihWDAQhVDAhTCGQgXBJg8A0QhOA3hiAHQhzAThpgtQg+gQg0gqQgzgvgeg8QgaACgTgDQglBFgtAnQg4A5hCAOQhBANg/gfQg9gfg0hLQgjgtgbg+QgLgNgJgOIgCABQAABbg6BDQgGAuggAjQgeAfgiAUQh7AMh+AHQhQgRhLgbg");
	this.shape_28.setTransform(829.1545,640.1111);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#399FD7").s().p("AuBIiQgTgNgQgSQhAhKhejEQhwjZAfkMQAfkPDuCEQDtCEB3CKQB3CJAqBJQAKgkAGg+QgEjPC7iaQC6i+GLgkQGLgkkVBzQkVB0AdDUQBAgRBDgJQDEjJEKgPQEyg3ANCsQAMCrhdC/QhdC/hZCDQgYBDg5AvQhRA4hmAGQh1AQhogwQg5gSgwgoQg1gxgeg9QgXAFgTACQgnBIguAoQg5A4hBALQhDALg+giQg9ghgzhMQgigugag8QgJgLgIgMIgCACQAABhg+BIQgHAogcAfQgfAgglAVQiBAKiDAGQhKgShGgeg");
	this.shape_29.setTransform(829.663,643.5223);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#399FD7").s().p("AuLIhQgRgNgQgQQhDhOhjjQQhyjiAhkUQAhkZD8CkQD8CjBxCGQBxCGAmBGIAKhzQgDjZDHidQDGi6GggbQGfgbkxB8QkxB7AZDXQA+gdBHgZQDNjREWgLQE2gqAFC1QAEC1hlC9QhmC+hfCBQgZA7g1ArQhUA5hqAFQh3ANhmgzQg1gTgtgmQg2g0geg/QgVAKgSAHQgoBLgxApQg5A1hCAJQhDAJg+gkQg8gjgzhPQgggtgYg6IgQgSIgCACQAABnhBBMQgIAigYAbQghAigmAVQiHAIiJAFQhFgTg/ggg");
	this.shape_30.setTransform(830.2522,646.8828);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#399ED7").s().p("AuWIgQgPgMgOgPQhHhShpjdQh0joAkkfQAjkhEKDCQEKDCBrCDQBrCEAkBDQgBg6AEhMQgDjhDUigQDTi3GzgRQGzgSlMCDQlNCDAUDZQA9gpBKgnQDYjaEigGQE5gegEC/QgEC+htC8QhtC8hlB+QgbA1gwAmQhYA7hvAEQh3AJhlg2QgxgUgqglQg2g1gehBIgkAaQgrBOgyAqQg6AzhDAGQhEAHg9gmQg7glgzhRQgdgugXg4IgPgNIgBACQAABuhGBRQgHAcgVAXQgjAjgoAWQiNAGiOADQg/gUg6gig");
	this.shape_31.setTransform(830.8616,650.2219);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#399ED7").s().p("AuhIgQgNgLgMgOQhLhWhujpQh2jxAlkoQAlkpEYDhQEYDgBmCBQBmCAAgBAQgGhEAChVQgBjoDgikQDfizHHgIQHHgIloCKQlpCLARDcQA6g1BPg3QDgjiEugCQE+gRgMDIQgMDIh2C6Qh1C7hrB8QgdAugrAhQhbA9h0ACQh4AGhkg5QgsgVgngkQg4g2gdhDIghAjQgsBRg1AqQg7AxhDAFQhEAEg9goQg7gogyhTQgcgtgVg3IgNgIIgBACQAAB0hKBWQgIAWgRATQgkAkgqAXQiTAEiUACQg5gVg0gkg");
	this.shape_32.setTransform(831.532,653.4532);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#399DD7").s().p("AusIhQgMgLgLgMQhOhbh0j1Qh4j5AokxQAnkyEmEAQEnD/BgB+QBfB9AdA8QgLhOABhcQAAjxDsioQDsiuHbABQHaABmDCSQmFCTAMDeQA5hBBShHQDrjqE6ADQFBgEgUDRQgVDRh9C5Qh9C6hxB5QgeAngoAcQheA/h4ABQh6ADhig9QgogWgkgiQg4g4gehFQgOAXgQAVQguBUg3ArQg7AwhEACQhFACg8grQg6gqgxhUQgbgugUg1IgLgDIAAACQAAB7hOBaQgIAQgOAPQgmAmgrAXIkzADQg0gXgtglg");
	this.shape_33.setTransform(832.2223,656.6747);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#399DD7").s().p("AtiJhQgugYgognIgTgVQhShfh5kCQh6kBApk6QApk7E1EfQE1EfBaB6QBaB7AaA5QgRhZAAhlQAAj4D5irQD4irHvAKQHvALmgCaQmgCaAIDgQA3hMBWhXQD0jyFGAIQFGAIgdDbQgdDaiFC4QiFC4h3B3QggAggkAXQhhBAh8AAQh8AAhhhAQgjgXggggQg6g6gehHQgMAbgPAaQgvBXg5AsQg7AthFAAQhGAAg7gtQg6gsgxhXQgZgugSgyIgJABIAAACQAACBhSBfIgTAVQgnAnguAYgAlrEYIADAAIgDgLIAAALg");
	this.shape_34.setTransform(832.91,659.8205);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},140).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sky
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ehoxg9KMDRjAAAMAAAB6VMjRjAAAg");
	this.shape.setTransform(646.525,351.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BDF1FE").s().p("EhoxA9LMAAAh6VMDRjAAAMAAAB6Vg");
	this.shape_1.setTransform(646.525,351.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},299).wait(99));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ship = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// ship
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Eg0yg3lIpsAqIhaitMBWngF3IBaCvIqyArUAcuAVFgKjAkiIGBgvIiMDgIktAnIiBAQMguLAF3IrCBaIBxdeQoNCknsikIlbiOIAAJ6IAAGgEgncAGCIm7A1IAjDwIRQiMEgwHAtlQiDhNh5hkEAYJAq9QhjFSh4C6QjDEoh0CUQifDKgdCRMg9CgB0IAApnEAopANgIXQiMIAADhQ2EC+qVKZQhVBVhCBVQi8Drg0DnQgnCogpCNMhIQAJIEAOMAjOQAACDhrBbQhqBdiXAAQiYAAhrhdQhrhbAAiDQAAiDBrhdQBrhbCYAAQCXAABqBbQBrBdAACDgEARoAgbQAxBiAABzQAADRiiCYQgJAIgLAJQi2CckAAAQkAAAi2icQi1idAAjdQAAgIAAgGQAGjUCviYQC2idEAAAQEAAAC2CdQALAIAJAJQBJBEAoBQILhhlEgJdAlEIIfhiEAiBAOIIAAHRMgoUADJQgJHTjBFPQjCFQl5DMQxrHAsEm7AxAR5Ii3AOQEbGYjfGZQiOEJjDB0QhPAuhYAWAxAR5IAAADEAmPANuICagOIp/smEAiBAOIIEOgaIpmskEgncAGCMBG+gIgAxiHBIAiK4EAiBAOIMgzBADxEg0yg3lUATKAXdgF0AmKEANXg8FMhCJAEg");
	this.shape.setTransform(267.95,325.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("EgrkgcjMBCJgEgUAcuAVFgKjAkgMhG+AIiUAF0gmLgTKgXcg");
	this.shape_1.setTransform(208.976,152.2625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#824221").s().p("AlxuCILBhZIAiK4Ii3ANQEbGYjfGZQiOEJjCB0QhPAuhYAWg");
	this.shape_2.setTransform(122.05,468.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#A36431").s().p("EgmoAEHQMFG8RqnAQF6jMDBlPIIfhiIAAANQAADeC1CcQC3CcD/AAQEBAAC2icIATgRQCjiXgBjSQABhygxhiILghlQi8DrgzDnQgnCogpCMMhIRAJHg");
	this.shape_3.setTransform(207.2,590.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6C431D").s().p("AkBDeQhrhbAAiDQAAiCBrhcQBrhcCXAAQCXAABqBcQBrBcAACCQAACDhrBbQhqBdiXAAQiXAAhrhdg");
	this.shape_4.setTransform(322.275,550.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EDA155").s().p("EgsYAUnIAAp6IFcCPQHsCkINikQBYgWBOguQDEh0COkJQDfmYkbmZIC2gNIAAADIAAgDMAzBgDxIAAHQMgoUADKQgIHSjBFPQjCFQl6DMQo4DhneAAQnYAAmBjdgAFmQtQi1idAAjeIAAgNQAFjVCwiYQC3idD/AAQEBAAC2CdIATASQBKBEAoBQQAxBigBByQABDRijCYIgTASQi2CckBAAQj/AAi3icgAINGxQhsBdABCCQgBCDBsBcQBqBcCZAAQCWAABqhcQBshcAAiDQAAiChshdQhqhciWAAQiZAAhqBcgEAgZgXyICAgRIJ/MnIiaAOg");
	this.shape_5.setTransform(244,484.9815);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CD8241").s().p("Eg4AAYSIAApnMBIRgJIQhjFSh4C6QjEEoh0CUQieDKgeCRgAuMs3MAoUgDJIAAnRIEOgaICagNIXRiNIAADhQ2FC/qVKYQhVBVhCBVIrgBlQgohPhKhEIgTgSQi2idkBAAQj+AAi3CdQiwCYgFDVIofBhQDBlOAInUg");
	this.shape_6.setTransform(318.4,564.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#824A21").s().p("EghMAhUIG7g1MBG+gIiIGBgvIiMDiIktAmIiBAQMguLAF4IrCBZIxQCMgEgytgfMMBWngF2IBaCvIqyArMhCJAEgIpsAqg");
	this.shape_7.setTransform(183.675,156);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},299).wait(99));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sea_top_copy_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sea_top_copy_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#399DD7").s().p("EhmoBZvUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AMGgZQUAMGgZQA2VgBkUA2WgBkAfhAM2QfiM2IxDCUACygLTApjgK+UApjgK+AqcACiUAqbACjAIgAXaQIgXbA3f7QA3f6pEZQUgJEAZQgoIgEEUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape.setTransform(777.49,1048.5059);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#399DD7").s().p("EhmrBZgUggGgF/gYlgYmUgYlgYlgHjgi7UgHjgi8AMGgZUUAMEgZUA2WgBjUA2WgBkAfiAM6QfiM5IvC+UAC0gLLApkgK7UApjgK6ArJADAUArIADAAH4AW8QH4W6Axf4QAyf2pEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_1.setTransform(777.6997,1050.013);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#399DD7").s().p("EhmtBZSUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AMFgZYUAMFgZYA2WgBiUA2VgBjAfjAM9QfiM8ItC6UAC3gLCApkgK4UApkgK3Ar1ADeUAr1ADfAHQAWcQHQWbAsfzQAsfypDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_2.setTransform(777.9277,1051.4468);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#399DD7").s().p("EhmvBZEUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AMFgZcUAMDgZdA2WgBgUA2WgBiAfjANAQfjM/IrC2UAC5gK6AplgK0UApkgK0AsiAD8UAsiAD9AGoAV8QGnV8AnfvQAnfupDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_3.setTransform(778.1417,1052.8187);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#399ED7").s().p("EhmxBY3UggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AMDgZgUAMDgZhA2XgBfUA2VgBhAfkANDQfkNCIoCyUAC8gKyAplgKxUApkgKwAtPAEbUAtPAEaAGAAVdQF/VcAifrQAifqpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_4.setTransform(778.3779,1054.1474);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#399ED7").s().p("EhmzBYqUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AMDgZlUAMCgZkA2WgBeUA2WgBgAflANGQfjNFInCtUAC/gKoApkgKuUAplgKtAt8AE5UAt8AE4AFYAU+QFXU8AcfnQAdfmpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo0hpg");
	this.shape_5.setTransform(778.5995,1055.4032);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#399ED7").s().p("Ehm2BYeUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AMCgZpUAMCgZoA2XgBdUA2WgBeAfkANIQflNIIkCpUADBgKgApmgKqUAplgKqAupAFXUAuoAFWAEwAUeQEuUdAYfjQAXfipDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_6.setTransform(778.821,1056.6201);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#399ED7").s().p("Ehm4BYSUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AMBgZsUAMBgZtA2XgBcUA2WgBdAflANLQfmNLIiCmUADDgKYApmgKnUAplgKnAvWAF1UAvVAF1AEIAT+QEGT+ATffQASfdpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_7.setTransform(779.0736,1057.7933);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#399ED7").s().p("Ehm7BYPUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AMBgZwUAMAgZxA2XgBbUA2XgBcAflANOQfmNOIgChUADGgKOApmgKkUApmgKkAwCAGTUAwDAGTADfATfQDeTeANfbQANfZpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_8.setTransform(779.3033,1058.0875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#399ED7").s().p("Ehm9BYTUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AMAgZ1UAL/gZ0A2XgBbUA2XgBaAfmANRQfnNRIdCdUADJgKHApmgKgUApmgKgAwwAGxUAwvAGxAC3AS/QC2S/AIfWQAIfWpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_9.setTransform(779.5651,1057.7481);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#399ED7").s().p("EhnABYWUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL/gZ5UAL/gZ4A2XgBaUA2XgBZAfnANUQfnNUIbCZUADMgJ+ApmgKdUApmgKdAxdAHPUAxcAHPACPASgQCOSfADfSQACfSpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_10.setTransform(779.8034,1057.4086);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#399ED7").s().p("EhnCBYZUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL+gZ8UAL+gZ9A2YgBYUA2XgBZAfnANXQfoNXIZCVUADOgJ1ApmgKaUApngKaAyJAHuUAyJAHtABnASAQBmR/gDfPQgCfNpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaABo1hqg");
	this.shape_11.setTransform(780.0521,1057.069);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#399FD7").s().p("EhnFBYdUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AL9gaBUAL+gaBA2XgBXUA2YgBXAfoANaQfoNaIXCQUADQgJsApngKXUApngKWAy2AILUAy2AIMAA+ARgQA+RggHfLQgIfJpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_12.setTransform(780.3571,1056.7292);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#399FD7").s().p("EhnKBYgUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL9gaFUAL9gaEA2YgBWUA2XgBXAfpANdQfoNdIVCNUADTgJkApngKUUApngKTAzjAIqUAzjAIpAAWARBQAWRBgNfGQgNfFpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_13.setTransform(780.8043,1056.3892);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#399FD7").s().p("EhncBYkUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL8gaJUAL8gaJA2YgBVUA2YgBVAfpANgQfpNgITCIUADVgJcApogKQUApngKQA0QAJIUA0QAJIgASAQiQgTQggSfDQgSfBpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_14.setTransform(782.6352,1056.0491);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#399FD7").s().p("Ehn2BYnUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL8gaNUAL7gaNA2YgBUUA2YgBUAfqANjQfpNjIQCEUADZgJTApngKNUApogKNA09AJmUA09AJmgA6AQCQg7QBgXe/QgYe9pDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_15.setTransform(785.2254,1055.709);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#399FD7").s().p("EhoQBYqUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL7gaRUAL6gaRA2ZgBSUA2YgBUAfqANnQfqNlIOCAUADbgJKApogKKUApogKJA1qAKEUA1pAKEgBiAPiQhjPigce6Qgde5pDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaABo1hqg");
	this.shape_16.setTransform(787.8301,1055.3686);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#399FD7").s().p("EhoqBYuUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AL6gaVUAL5gaVA2ZgBSUA2YgBSAfrANpQfrNpILB8UADegJCApogKHUApogKGA2XAKjUA2XAKigCLAPDQiLPCghe2Qgie1pEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_17.setTransform(790.4805,1055.0281);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#399FD7").s().p("EhpFBYxUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL5gaZUAL5gaZA2ZgBQUA2YgBRAfrANsQfsNrIJB4UADggI5AppgKEUApogKCA3EALAUA3DALAgCyAOkQi0OigmeyQgnexpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_18.setTransform(793.1631,1054.6912);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39A0D7").s().p("EhpgBY0UggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL4gadUAL4gadA2ZgBPUA2ZgBQAfsANvQfsNuIHB0UADjgIxApogKAUAppgJ/A3xALeUA3wALfgDbAODQjbODgsevQgsespEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lc40AAQpaAAo0hqg");
	this.shape_19.setTransform(795.8872,1054.3504);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#39A0D7").s().p("Ehp8BY4UggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL4gahUAL3gahA2agBPUA2ZgBPAfsANyQfsNyIFBvUADmgIoApogJ9UAppgJ8A4eAL9UA4dAL8gEDANlQkDNjgxeqQgyeppDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_20.setTransform(798.6415,1054.0093);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#39A0D7").s().p("EhqYBY7UggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL3galUAL3galA2ZgBNUA2ZgBOAftAN1QftN0IDBrUADogIfAppgJ6UAppgJ4A5LAMaUA5KAMbgErANFQksNEg2emQg3ekpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaABo1hqg");
	this.shape_21.setTransform(801.4258,1053.6681);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#39A0D7").s().p("Ehq0BY/UggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL3gaqUAL1gapA2agBMUA2ZgBNAfuAN4QftN4IBBnUADqgIXApqgJ2UAppgJ2A54AM5UA53AM5gFUAMlQlUMkg7eiQg8ehpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_22.setTransform(804.2395,1053.3268);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#39A0D7").s().p("EhrQBZCUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL1gatUAL1gatA2agBMUA2agBLAfuAN7QfuN6H+BjUADtgIOApqgJzUApqgJzA6kANYUA6kANWgF8AMGQl8MFhAeeQhBecpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb40ABQpZAAo1hqg");
	this.shape_23.setTransform(807.0801,1052.9641);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#39A0D7").s().p("EhrtBZGUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL1gayUAL0gaxA2bgBKUA2ZgBLAfvAN+QfuN+H9BeUADvgIFApqgJwUApqgJvA7RAN1UA7RAN1gGkALmQmkLmhGeZQhGeZpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_24.setTransform(809.946,1052.6225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#39A0D7").s().p("EhsKBZJUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL0ga1UAL0ga2A2agBJUA2agBJAfvAOBQfvOAH7BbUADxgH+AprgJsUApqgJsA7+AOUUA7+AOTgHMALGQnMLGhLeWQhMeUpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_25.setTransform(812.8318,1052.2807);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#39A1D7").s().p("EhsnBZNUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8ALzga6UALzga5A2agBIUA2bgBJAfvAOEQfwOEH4BWUAD0gH1AprgJpUApqgJoA8rAOxUA8rAOygH0AKnQn1KmhQeSQhQeQpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_26.setTransform(815.768,1051.9388);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#39A1D7").s().p("EhtEBZQUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8ALyga9UALyga+A2bgBHUA2agBHAfxAOHQfwOGH2BSUAD3gHsApqgJlUAprgJmA9YAPQUA9YAPPgIcAKIQodKHhVeNQhWeMpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb40AAQpaAAo0hpg");
	this.shape_27.setTransform(818.697,1051.5967);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#39A1D7").s().p("EhtiBZTUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8ALygbBUALxgbCA2bgBGUA2agBGAfxAOKQfxOJH0BOUAD5gHjAprgJjUAprgJiA+FAPuUA+FAPtgJFAJpQpFJnhaeJQhbeIpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lc4zAAQpaAAo1hqg");
	this.shape_28.setTransform(821.6553,1051.2545);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#39A1D7").s().p("EhuABZXUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8ALxgbGUALxgbFA2bgBFUA2bgBGAfxAONQfxONHyBKUAD8gHbAprgJgUApsgJeA+xAQLUA+yAQMgJtAJJQptJHhgeGQhgeEpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_29.setTransform(824.6227,1050.9122);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#39A1D7").s().p("EhueBZaUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALxgbKUALwgbJA2bgBEUA2bgBEAfxAOQQfyOPHwBGUAD+gHTApsgJbUAprgJcA/fAQqUA/fAQqgKVAIpQqWIohkeBQhmeApDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_30.setTransform(827.6182,1050.573);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#39A1D7").s().p("Ehu8BZeUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8ALwgbOUALvgbOA2cgBCUA2bgBDAfyAOSQfyOTHuBBUAEBgHKAprgJYUApsgJZBAMARJUBALARIgK9AIJQq9IJhqd9Qhrd8pDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_31.setTransform(830.6203,1050.2304);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#39A1D7").s().p("EhvaBZhUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALvgbSUALvgbRA2bgBCUA2cgBCAfyAOWQfzOVHrA+UAEFgHCAprgJVUApsgJVBA5ARmUBA4ARmgLlAHqQrmHphvd5Qhwd4pDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_32.setTransform(833.649,1049.8876);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#39A1D7").s().p("Ehv4BZlUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8ALugbWUALugbWA2cgBAUA2bgBBAfzAOYQf0OZHpA5UAEHgG5AprgJSUAptgJSBBlASFUBBlASEgMNAHKQsOHKh0d1Qh1d0pEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_33.setTransform(836.6828,1049.5447);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#39A2D7").s().p("EhwXBZoUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8ALtgbaUALtgbaA2cgA/UA2cgBAAf0AObQf0OcHmA1UAEKgGwApsgJPUAptgJPBCSASjUBCSASigM1AGrQs3Gqh5dxQh6dwpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_34.setTransform(839.7585,1049.2016);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#39A2D7").s().p("Ehw2BZrUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALtgbeUALsgbeA2cgA+UA2cgA/Af1AOfQf0OeHlAxUAEMgGoApsgJLUAptgJLBC/ATAUBC/ATBgNdAGLQtfGLh+dtQiAdrpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_35.setTransform(842.8202,1048.8585);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#39A2D7").s().p("EhxUBZvUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8ALsgbiUALrgbiA2dgA9UA2cgA+Af1AOhQf1OiHiAsUAEPgGfApsgJIUAptgJIBDtATfUBDrATfgOFAFrQuHFriEdpQiEdopEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo0hpg");
	this.shape_36.setTransform(845.8988,1048.5152);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#39A2D7").s().p("EhxzBZzUggGgF/gYmgYmUgYlgYlgHjgi8UgHjgi7ALrgbmUALrgbmA2cgA9UA2dgA8Af1AOkQf2OkHgApUAERgGWAptgJFUAptgJFBEZAT9UBEZAT9gOuAFMQuuFMiKdkQiJdjpEZRUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPwQ81Lc40AAQpaAAo0hpg");
	this.shape_37.setTransform(848.9924,1048.1497);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#39A2D7").s().p("EhySBZ2UggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8ALqgbrUALqgbpA2dgA8UA2dgA7Af2AOnQf2OoHeAkUAEUgGOApsgJBUApugJCBFGAUbUBFGAUbgPWAEtQvXEsiOdgQiPdgpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_38.setTransform(852.0952,1047.8061);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#39A2D7").s().p("EhyyBZ5UggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALqgbuUALpgbuA2dgA6UA2dgA7Af3AOrQf2OqHcAgUAEWgGFApugI+UApugI/BFyAU6UBFzAU5gP+AENQv/EMiUddQiUdbpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_39.setTransform(855.2121,1047.4624);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#39A2D7").s().p("EhzRBZ9UggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8ALpgbzUALpgbyA2dgA5UA2dgA5Af3AOtQf3OuHaAcUAEZgF9AptgI7UApvgI7BGfAVXUBGgAVXgQnADuQwnDtiYdYQiadYpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_40.setTransform(858.337,1047.1186);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#39A3D7").s().p("EhzwBaAUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8ALogb2UALogb2A2dgA4UA2dgA5Af4AOxQf4OwHXAYUAEcgF0AptgI4UApvgI4BHNAV2UBHMAV1gRPADOQxPDOiedUQiedTpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lb40AAQpZAAo1hpg");
	this.shape_41.setTransform(861.48,1046.7746);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#39A3D7").s().p("Eh0QBaEUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8ALogb7UALngb6A2egA3UA2dgA3Af4AOzQf4O0HVATUAEfgFrAptgI1UApvgI0BH6AWTUBH5AWUgR3ACuQx3CuijdRQikdPpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_42.setTransform(864.6201,1046.4331);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#39A3D7").s().p("Eh0vBaHUggGgF/gYmgYlUgYlgYmgHjgi8UgHjgi7ALngb+UALmgb+A2egA2UA2dgA2Af5AO2Qf5O2HSAQUAEhgFjApvgIyUApvgIxBImAWyUBInAWygSgACPQyfCOiodMQipdLpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lb40AAQpaAAo0hpg");
	this.shape_43.setTransform(867.7826,1046.0888);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#39A3D7").s().p("Eh1PBaLUggGgF/gYlgYmUgYlgYlgHjgi8UgHkgi7ALmgcDUALmgcCA2egA1UA2egA1Af5AO5Qf5O6HRALUAEjgFaApvgIuUApvgIuBJUAXQUBJTAXPgTIABwQzHBviudIQiudHpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_44.setTransform(870.9421,1045.7444);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#39A3D7").s().p("Eh1vBaOUggGgF/gYlgYmUgYlgYlgHjgi8UgHkgi7ALmgcGUALkgcHA2fgA0UA2dgA0Af6AO9Qf6O8HOAIUAEngFSApugIsUApwgIqBKAAXuUBKBAXtgTwABRQzwBPiydEQi0dDpDZQUgJEAZQgoIgEEUgoJgECgLJADvUgLIADwgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_45.setTransform(874.1369,1045.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#39A3D7").s().p("Eh2PBaRUggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALlgcKUALkgcLA2egAyUA2egAzAf7AO/Qf6O/HMADUAEpgFJApvgIoUApwgInBKtAYMUBKtAYMgUXAAxQ0ZAvi3dAQi5c/pDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_46.setTransform(877.3131,1045.0553);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#39A3D7").s().p("Eh2vBaVUggGgF/gYlgYmUgYlgYlgHjgi8UgHkgi7ALkgcPUALjgcOA2fgAyUA2egAyAf7APDQf7PCHKgBUAErgFBApwgIkUApwgIlBLaAYrUBLaAYqgVAAARQ1AAQi9c8Qi+c7pDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_47.setTransform(880.5096,1044.7106);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#39A4D7").s().p("Eh3PBaYUggGgF/gYlgYlUgYlgYmgHjgi8UgHjgi7ALigcTUALjgcSA2fgAwUA2egAxAf8APFQf8PFHHgFUAEugE4ApvgIhUApxgIhBMHAZIUBMHAZIgVogAOQ1pgPjBc4QjEc2pDZQUgJDAZQgoJgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zABQpaAAo1hqg");
	this.shape_48.setTransform(883.7002,1044.3657);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#39A4D7").s().p("Eh3vBacUggGgF/gYlgYmUgYlgYlgHjgi8UgHkgi7ALjgcXUALhgcXA2ggAvUA2egAwAf8APJQf8PIHGgKUAEwgEvApwgIeUApxgIeBM0AZnUBMzAZmgWQgAuQ2QgvjIc0QjIczpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_49.setTransform(886.903,1044.0207);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#39A4D7").s().p("Eh4PBafUggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALigcbUALhgcaA2fgAuUA2fgAvAf9APLQf8PLHDgNUAEzgEnApxgIbUApxgIaBNgAaFUBNhAaEgW4gBOQ25hOjNcwQjNcupDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_50.setTransform(890.1165,1043.6756);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#39A4D7").s().p("Eh4vBajUggGgF/gYlgYmUgYlgYlgHjgi8UgHkgi7ALhgcfUALhgcfA2fgAtUA2fgAuAf9APPQf9POHBgSUAE2gEfApwgIXUApxgIXBOOAajUBOOAajgXhgBuQ3hhtjRcrQjTcrpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_51.setTransform(893.333,1043.3304);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#39A4D7").s().p("Eh5PBamUggGgF/gYmgYlUgYlgYmgHjgi8UgHjgi7ALggcjUALggciA2fgAtUA2fgAsAf+APRQf+PRG+gWUAE5gEWApwgITUApygIUBO7AbBUBO6AbAgYJgCMQ4JiOjXcoQjXcmpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lc4zAAQpaAAo1hqg");
	this.shape_52.setTransform(896.5611,1042.9622);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#39A4D7").s().p("Eh5vBaqUggGgF/gYmgYmUgYlgYlgHjgi8UgHjgi7ALfgcnUALfgcnA2ggArUA2fgAsAf/APVQf+PUG8gaUAE7gEOApxgIQUApygIRBPnAbfUBPoAbfgYxgCsQ4xitjccjQjdcjpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_53.setTransform(899.789,1042.6166);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#39A4D7").s().p("Eh6QBatUggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALfgcrUALegcrA2ggAqUA2ggAqAf+APXQf/PXG6geUAE+gEFApxgINUApygINBQVAb9UBQUAb9gZZgDMQ5ajMjhcfQjicepDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_54.setTransform(903.0294,1042.273);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#39A4D7").s().p("Eh6wBaxUggGgF/gYmgYmUgYlgYlgHjgi8UgHjgi7ALegcwUALdgcuA2ggApUA2ggApAf/APaUAgAAPaAG4gAjUAFAgD8ApxgIKUApzgIKBRBAcbUBRBAcbgaBgDrQ6CjsjmcbQjncbpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_55.setTransform(906.2847,1041.9272);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#39A5D7").s().p("Eh7RBa0UggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALdgczUALdgczA2hgAoUA2ggAoAf/APdUAgAAPdAG2gAmUAFDgD0ApxgIHUApzgIHBRuAc6UBRvAc5gaqgELQ6qkLjrcXQjtcWpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_56.setTransform(909.535,1041.5813);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#39A5D7").s().p("Eh7xBa4UggGgF/gYmgYmUgYlgYlgHjgi8UgHjgi7ALcgc4UALcgc3A2hgAmUA2ggAnAgAAPgUAgBAPgAGzgArUAFGgDrApxgIEUApzgIDBScAdYUBSbAdXgbSgErQ7SkrjxcUQjxcSpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_57.setTransform(912.7868,1041.2353);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#39A5D7").s().p("Eh8SBa7UggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALcgc7UALbgc7A2hgAmUA2ggAmAgBAPjUAgBAPjAGxgAvUAFIgDiApzgIAUApzgIBBTIAd2UBTIAd2gb6gFKQ76lLj2cPQj3cOpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_58.setTransform(916.0476,1040.8891);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#39A5D7").s().p("Eh8yBa+UggGgF+gYmgYmUgYlgYlgHjgi8UgHjgi7ALagdAUALbgc/A2hgAlUA2hgAkAgBAPmUAgCAPmAGvgAzUAFKgDaApzgH9UApzgH9BT1AeTUBT1AeUgcigFqQ8ilpj8cLQj7cKpEZPUgJEAZQgoIgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb4zAAQpaAAo1hqg");
	this.shape_59.setTransform(919.2935,1040.5269);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#39A5D7").s().p("Eh9UBajUggAgGQgYYgYsUgYYgYrgHcgipUgHcgioAMNgczUAMMgcyA2OgAaUA2NgAbAftAPbQfnPRHhhFUAF8gDqAp6gHbUAp6gHcBScAeAUBScAd/gcLgFKQ8KlLkAcIQkBcIpfY1UgJgAY1gnugD8UgnvgD7gLdADlUgLbADsgiVgHGUgfWgAXgnrAPdQ8QLB4XAAQp2AApMhzg");
	this.shape_60.setTransform(917.5837,1040.5523);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#39A5D7").s().p("Eh91BaHQ/5mh4M4xUgYLgYygHUgiVUgHVgiWAM/gcmUAM+gclA17gAQUA16gAQAfYAPPQfNO9IRhYUAGwgD6AqAgG5UAqBgG6BRCAdrUBRDAdqgbzgEqQ7ykskFcGQkFcFp7YbUgJ8AYbgnUgD1UgnVgD1gLyADcUgLtADngiagGxUgfegAIgnjAPJQ7sKn37AAQqRAApkh9g");
	this.shape_61.setTransform(915.7833,1040.6065);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#39A5D7").s().p("Eh+XBZrQ/xmx3/44UgX/gY3gHMgiCUgHNgiEANwgcYUANwgcZA1ogAFUA1ngAGAfDAPEQezOoJChqUAHigEKAqHgGYUAqIgGYBPpAdXUBPpAdVgbagELQ7ckMkIcDQkKcCqYYBUgKXAYAgm6gDuUgm7gDtgMHADRUgL/ADkgifgGcUgfmAAGgncAO2Q7HKM3fAAQqsAAp9iHg");
	this.shape_62.setTransform(913.9886,1040.641);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#39A5D7").s().p("Eh+3BZPQ/rnD3y49UgXygY9gHFghwUgHGghwAOigcMUAOigcMA1VAAGUA1UAAEAeuAO5QeZOUJzh9UAIVgEaAqNgF2UAqPgF3BOQAdCUBOQAdBgbDgDsQ7DjskOcAQkOcAq0XmUgKzAXmgmggDnUgmhgDngMbADIUgMRADggikgGIUgfuAAWgnVAOiQ6iJz3CAAQrJAAqUiSg");
	this.shape_63.setTransform(912.1126,1040.7225);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#39A4D7").s().p("Eh/XBYyQ/knS3m5EUgXlgZDgG9ghcUgG+gheAPTgb/UAPUgb/A1CAAQUA1BAAPAeZAOtQd/N/KkiOUAJHgEqAqUgFVUAqWgFVBM2ActUBM3ActgargDNQ6rjNkSb+QkTb9rQXMUgLQAXLgmFgDgUgmHgDfgMwAC9UgMjADcgipgFyUgf2AAkgnOAOOQ59Ja2lAAQrlAAqsieg");
	this.shape_64.setTransform(910.2359,1040.7704);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#39A4D7").s().p("Eh/3BYWQ/dnk3Z5JUgXYgZJgG2ghKUgG3ghKAQGgbzUAQFgbyA0vAAaUA0uAAaAeEAOiQdlNrLViiUAJ5gE6AqcgEzUAqcgEzBLdAcZUBLeAcYgaTgCtQ6UiukXb7QkXb6rsWyUgLrAWxglsgDZUglsgDZgNGAC0UgM1ADYgiugFeUgf9AAzgnHAN7Q5YJC2JAAQsBAArEiqg");
	this.shape_65.setTransform(908.2974,1040.8602);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#39A4D7").s().p("EiAXBX5Q/Wn03M5PUgXMgZPgGugg3UgGvgg4AQ3gblUAQ3gblA0cAAkUA0bAAkAdvAOXQdLNWMGi0UAKrgFKAqjgERUAqjgERBKEAcDUBKEAcEgZ7gCOQ58iOkbb3Qkdb5sHWXUgMIAWXglRgDSUglSgDSgNbACqUgNHADUgizgFJUggFABCgnAANnQ4zIq1sAAQsdAArci3g");
	this.shape_66.setTransform(906.3658,1040.9771);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#39A4D7").s().p("EiA2BXcQ/QoF2/5VUgW+gZVgGoggkUgGngglARpgbYUARpgbZA0IAAvUA0JAAvAdaAOLQcxNBM3jFUALdgFaAqqgDwUAqqgDwBIrAbwUBIqAbugZjgBuQ5khvkgb1Qkhb2sjV9UgMkAV8gk3gDLUgk4gDLgNwACgUgNZADQgi4gE0UggMABRgm6ANTQ4OIT1QAAQs5AArzjEg");
	this.shape_67.setTransform(904.3751,1041.1008);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#39A4D7").s().p("EiBWBXAQ/JoW2y5bUgWygZbgGfggRUgGgggSASagbMUASbgbLAz2AA5UAz1AA5AdFAOAQcXMtNojYUAMQgFqAqwgDOUAqxgDPBHSAbbUBHRAbbgZLgBQQ5NhPkkbyQkmbzs/VjUgNAAVigkdgDEUgkegDEgOEACVUgNsADNgi8gEfUggUABfgmzANAQ3pH70zAAQtWAAsLjQg");
	this.shape_68.setTransform(902.408,1041.2315);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#39A4D7").s().p("EiB0BWjQ/Con2m5hQ2l5hmY/+QmZ//TN6/UATMga/AzjABEUAziABDAcwAN1Qb9MYOZjqUANCgF6Aq4gCsUAq4gCtBF4AbGUBF4AbGgY0gAwQ40gwkpbwQkqbwtcVIUgNcAVIgkDgC9UgkDgC9gOZACMUgN+ADIgjCgEKUggcABugmsAMsQ3EHl0XAAQtxAAsijeg");
	this.shape_69.setTransform(900.3873,1041.3971);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#39A4D7").s().p("EiCTBWFQ+8o32Y5nQ2Y5nmR/rQmR/tT+6yUAT+gaxAzQABOUAzPABNAcbANqQbjMEPKj9UAN0gGKAq/gCLUAq+gCLBEfAayUBEfAaxgYcgAQQ4cgRkubtQkvbut3UtUgN4AUugjpgC2UgjqgC2gOtACBUgOQADFgjHgD1UggjAB8gmlAMZQ2gHPz5AAQuPAAs5jtg");
	this.shape_70.setTransform(898.3522,1041.5746);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#39A4D7").s().p("EiCxBVoQ+1pJ2M5sQ2L5tmJ/ZQmK/ZUw6lUAUwgalAy8ABZUAy9ABYAcGANeQbILvP8kPUAOngGaArFgBpUArFgBqBDGAadUBDFAadgYEAAPQ4EAPkzbqQkzbruUUUUgOUAUSgjOgCuUgjQgCvgPCAB3UgOiADBgjMgDhUggrACMgmeAMFQ18G5zcAAQurAAtQj7g");
	this.shape_71.setTransform(896.2963,1041.7808);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#39A4D7").s().p("EiDQBVKQ+upZ1/5zQ1+5zmC/FQmC/GVi6ZUAVhgaYAyqABjUAypABjAbxANTQavLaQskiUAPZgGqArNgBHUArMgBHBBsAaIUBBsAaIgXsAAuQ3tAvk3bnQk4bpuwT5UgOvAT4gi1gCoUgi1gCngPYABtUgO0AC8gjQgDLUggzACagmXALyQ1XGjy/AAQvIAAtokKg");
	this.shape_72.setTransform(894.2262,1041.987);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#39A3D7").s().p("EiDuBUsQ+npp1y55Q1y55l6+yQl7+0WU6LUAWTgaLAyWABtUAyXABtAbcANHQaULGRek0UAQMgG6ArTgAlUArSgAmBATAZ0UBATAZzgXUABOQ3VBNk8blQk8bmvMTfUgPMATegiagChUgibgChgPsABjUgPHAC5gjVgC2Ugg7ACogmQALfQ0yGOyiAAQvlAAt/kag");
	this.shape_73.setTransform(892.1377,1042.1988);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#39A3D7").s().p("EiENBUOQ+gp71l5+Q1l5/lz+gQlz+gXF5/UAXFgZ+AyEAB4UAyDAB3AbHAM8QZ7KxSNlGUAQ/gHKAragAEUAragAEA+5AZfUA+6AZfgW8ABtQ2+BtlAbjQlBbjvoTEUgPoATDgiAgCZUgiBgCagQBABZUgPYAC1gjbgCiUghCAC4gmKALLQ0NF6yEAAQwCAAuXkqg");
	this.shape_74.setTransform(890.0511,1042.4679);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#39A3D7").s().p("EiEqBTwQ+aqL1Y6FQ1Y6Fls+MQls+OX45yUAX2gZxAxxACCUAxwACCAayAMwQZhKdS+lYUARygHaArhAAdUArgAAeA9gAZKUA9hAZLgWlACMQ2lCMlFbgQlGbhwESpUgQEASqghmgCTUghmgCTgQWABPUgPrACxgjfgCMUghKADGgmDAK3QzpFnxnAAQwfAAutk7g");
	this.shape_75.setTransform(887.936,1042.7181);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#39A3D7").s().p("EiFIBTSQ+Tqc1M6LQ1L6Klk96Qlk97Yp5lUAYogZlAxeACNUAxdACMAadAMmQZHKITvlrUASkgHqAroAA/UArnAA/A8HAY2UA8HAY2gWNACsQ2NCslKbdQlKbewgSPUgQgASPghMgCMUghMgCLgQrABEUgP9ACugjlgB4UghRADVgl8AKjQzEFTxJAAQw9ABvElMg");
	this.shape_76.setTransform(885.8101,1042.9888);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#39A3D7").s().p("EiFmBSzQ+Mqt0/6RQ0+6Qld9nQld9oZb5YUAZagZYAxLACXUAxKACXAaIAMaQYtJ0Ugl+UATXgH6AruABhUAruABhA6uAYiUA6uAYhgV1ADLQ12DLlObbQlPbbw8R1UgQ8AR0ggygCFUggygCEgRAAA7UgQPACpgjpgBjUghZADkgl1AKPQygFBwsAAQxaAAvbldg");
	this.shape_77.setTransform(883.6741,1043.3089);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#39A3D7").s().p("EiGEBSUQ+Fq90y6XQ0y6WlV9UQlV9WaN5LUAaMgZLAw3ACiUAw3AChAZ0AMPQYSJfVSmQUAUJgIKAr1ACDUAr1ACCA5UAYNUA5VAYNgVeADqQ1dDrlTbYQlUbZxYRaUgRYARaggXgB+UggZgB9gRUAAwUgQhACmgjvgBOUghhADygltAJ8Qx9EvwNAAQx4AAvylwg");
	this.shape_78.setTransform(881.5261,1043.6163);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#39A3D7").s().p("EiGhBR1Q9/rO0l6dQ0l6clN9BQlO9Ca+4/UAa+gY+AwkACsUAwkACsAZfAMDQX4JKWDmhUAU7gIaAr8ACkUAr8ACkA37AX4UA37AX4gVFAEKQ1GEKlXbVQlZbXx0Q/QxzRA/+h3Q/+h2xpAmUgQ0ACigjzgA5UghpAEBglmAJpQxYEcvwABQyWAAwImDg");
	this.shape_79.setTransform(879.3687,1043.9795);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#39A3D7").s().p("EiG/BRWQ93rf0Z6iQ0Y6jlG8uQlG8vbw4yUAbvgYxAwSAC2UAwRAC2AZJAL4QXeI2W0m0UAVugIqAsDADGUAsCADGA2iAXjUA2iAXkgUtAEpQ0vEplcbTQldbUyPQlQyQQl/khvQ/khwx+AdUgRFACdgj5gAkUghwAEQglgAJVQw0ELvSAAQyzAAwfmVg");
	this.shape_80.setTransform(877.2325,1044.3214);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#39A3D7").s().p("EiHcBQ3Q9xrw0L6oQ0M6ok+8cQk/8cci4lUAchgYkAv+ADAUAv+ADBAY1ALtQXEIhXlnHUAWggI6AsKADoUAsJADnA1JAXPUA1IAXPgUVAFJQ0XFJlgbQQlibRysQLQysQK/JhoQ/KhpyTATUgRXACZgj+gAPUgh4AEfglYAJBQwQD7u0AAQzSAAw1mpg");
	this.shape_81.setTransform(875.0405,1044.6975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#39A2D7").s().p("EiH5BQXQ9rsBz+6uQz/6uk38IQk38KdT4YUAdTgYXAvsADLUAvrADKAYfALiQWqINYWnZUAXTgJKAsQAEJUAsQAEJAzwAW7UAzvAW6gT+AFoQz+FolmbNQlmbPzIPwQzIPw+vhhQ+vhhyoAIUgRqACWgkCAAFUgiAAEuglSAIuQvrDquVAAQzwAAxMm9g");
	this.shape_82.setTransform(872.8753,1045.1003);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#39A2D7").s().p("EiIWBP4Q9ksSzy60Qzx60kw72Qkw72eF4LUAeFgYLAvZADWUAvXADVAYLALWQWQH4ZHnrUAYFgJaAsXAErUAsXAErAyWAWmUAyWAWlgTmAGIQzmGHlqbLQlrbMzkPWQzkPW+VhbQ+Vhay9gCUgR8ACSgkHAAaUgiHAE9glMAIaQvHDat3AAQ0OAAxinRg");
	this.shape_83.setTransform(870.6685,1045.494);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#39A2D7").s().p("EiI0BPXQ9csizl66Qzl66ko7jQkp7ke33+UAe3gX9AvFADgUAvFADfAX2ALLQV2HkZ4n+UAY3gJqAseAFMUAseAFNAw9AWRUAw9AWRgTPAGnQzOGnlvbIQlvbJ0AO8Q0AO797hTQ98hTzRgMUgSOACOgkMAAvUgiPAFLglEAIHQukDMtYAAQ0tAAx5nog");
	this.shape_84.setTransform(868.4898,1045.9521);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#39A2D7").s().p("EiJRBO4Q9VszzZ7AQzY7Akh7QQkh7Rfp3xUAfpgXxAuyADqUAuyADqAXhALAQVcHPapoQUAZqgJ6AskAFuUAslAFuAvjAV9UAvkAV8gS3AHHQy2HGl0bFQl0bH0cOhQ0cOh9ghMQ9ihNzmgVUgSgACKgkRABEUgiXAFZgk9AHzQuAC9s6AAQ1LAAyPn8g");
	this.shape_85.setTransform(866.2705,1046.3835);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#39A2D7").s().p("EiJuBOXQ9PtDzL7GQzM7GkZ69UgEZga/AgagXkUAgbgXkAufAD1UAufAD0AXMAK1QVBG6baoiUAadgKKAsrAGQUAssAGPAuKAVoUAuKAVpgSeAHlQygHml3bCQl5bE04OHQ04OH9HhFQ9HhGz7ggUgSyACGgkVABaUgigAFogk2AHfQtcCvsbAAQ1qAAyloTg");
	this.shape_86.setTransform(864.0933,1046.8616);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#39A2D7").s().p("EiKLBN3Q9ItVy/7MQy+7MkS6qUgESgarAhMgXXUAhMgXYAuNAEAUAuLAD+AW3AKqQUoGlcLo0UAbPgKaAsyAGxUAsyAGxAsxAVUUAsxAVUgSGAIEQyIIFl8bBQl9bB1UNsQ1UNs8tg+Q8tg+0QgqUgTEACCgkaABuUginAF3gkwAHMQs4Chr8AAQ2IAAy8opg");
	this.shape_87.setTransform(861.8635,1047.3605);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#39A2D7").s().p("EiKoBNWQ9Btlyy7SQyy7SkK6XUgELgaYAh+gXLUAh+gXKAt5AEJUAt5AEKAWiAKdQUOGRc8pHUAcBgKqAs5AHUUAs5AHTArYAU/UArYAU/gRvAIkQxwIkmBa+QmCa+1wNSQ1wNS8Sg3Q8Tg30lg0UgTWAB+gkfACDUgivAGGgkoAG4QsVCUreAAQ2nAAzRpBg");
	this.shape_88.setTransform(859.6642,1047.8676);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#39A2D7").s().p("EiLEBM2Q87t2yl7YQyl7YkD6EUgEDgaGAiwgW+UAivgW9AtnAEUUAtlAEUAWNAKSQT0F9dtpaUAc0gK6AtAAH1UAtAAH1Ap+AUqUAp+AUrgRXAJDQxXJEmGa7QmGa82MM3Q2NM474gwQ74gx06g+UgTpAB7gkkACYUgi2AGUgkiAGlQrxCHq+AAQ3HAAzmpYg");
	this.shape_89.setTransform(857.4281,1048.3875);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#39A2D7").s().p("EiLiBMUQ80uHyY7eQyY7dj75yUgD8gZyAjigWxUAjhgWxAtTAEfUAtTAEeAV4AKHQTaFoeepsUAdmgLKAtHAIXUAtGAIWAomAUWUAolAUWgRAAJjQw/JjmLa4QmLa52oMeQ2oMd7egqQ7egp1PhIUgT7AB2gkpACtUgi+AGjgkaAGSQrNB7qfAAQ3nAAz9pxg");
	this.shape_90.setTransform(855.2216,1048.9634);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#39A1D7").s().p("EiL+BLzQ8tuYyM7jQyL7kj05fUgD0gZfAkTgWkUAkTgWkAtBAEpUAs/AEoAVjAJ8QTAFUfPp/UAeZgLaAtNAI5UAtOAI4AnMAUBUAnLAUBgQnAKDQwoKCmPa2QmQa23EMDQ3EMD7EgiQ7Egj1jhSUgUNABzgkuADBUgjGAGygkUAF+QqpBwqAAAQ4GAA0SqKg");
	this.shape_91.setTransform(852.9974,1049.5173);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#39A1D7").s().p("EiMbBLRQ8nuox+7qQx/7pjs5MUgDtgZNAlFgWXUAlFgWXAstAE0UAstAEyAVOAJxUASmAE/AgAgKRUAfLgLqAtUAJaUAtVAJaAlyATsUAlzATtgQQAKiQwQKimUazQmUa03gLoQ3gLo6qgbQ6qgb14hcUgUfABvgkzADWUgjOAHBgkNAFqQqFBlpgAAQ4mAA0oqkg");
	this.shape_92.setTransform(850.7774,1050.1164);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#39A1D7").s().p("EiM4BKwQ8gu5xx7wQxy7vjl45UgDlgY6Al3gWKUAl3gWKAsaAE9UAsZAE+AU6AJlUASLAEqAgxgKjUAf+gL6AtbAJ8UAtbAJ7AkZATYUAkZATYgP3ALBQv5LCmYawQmZax38LOQ38LO6QgUQ6QgU2NhnUgUxABrgk4ADsUgjVAHPgkGAFXQpiBapAAAQ5GAA0+q9g");
	this.shape_93.setTransform(848.5491,1050.7367);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#39A1D7").s().p("EiNVBKOQ8ZvKxl71Qxl72jd4mUgDegYnAmpgV9UAmogV9AsHAFIUAsHAFIAUkAJaUARyAEVAhigK1UAgwgMKAtiAKdUAtiAKdAjAATEUAjAATDgPgALhQvhLgmdauQmdav4YKzQ4YK052gNQ52gN2ihxUgVDABngk9AEAUgjdAHfgj/AFCQo+BRohAAQ5lAA1UrYg");
	this.shape_94.setTransform(846.3132,1051.3469);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#39A1D7").s().p("EiNyBJsQ8SvbxY77QxY78jW4TUgDWgYUAnbgVxUAnagVwAr0AFTUArzAFSAUQAJOUARXAEBAiTgLHUAhjgMaAtpAK/UAtoAK+AhnASvUAhmASvgPIAMAQvIMAmiarQmias40KaQ40KZ5cgGQ5bgH23h6UgVVABjglCAEVUgjlAHtgj4AEvQobBHoBAAQ6GAB1przg");
	this.shape_95.setTransform(844.0833,1052.0242);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#39A1D7").s().p("EiOOBJKQ8LvsxM8BQxL8CjP4AUgDOgYBAoMgVkUAoMgVjArhAFdUArgAFcAT7AJEUAQ9ADsAjEgLaUAiVgMqAtwALhUAtwALgAgNASaUAgNASbgOwAMfQuxMfmmapQmnap5QJ/Q5QJ/5BABQ5CAB3LiFUgVoABfglHAEqUgjsAH8gjxAEbQn5A/nhAAQ6lAA1+sOg");
	this.shape_96.setTransform(841.8461,1052.6754);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#39A1D7").s().p("EiOrBInQ8Fv8w+8HQw/8IjH3tUgDHgXuAo+gVXUAo+gVXArOAFnUArNAFoATmAI3UAQjADYAj1gLsUAjIgM6At2AMCUAt2AMCAe0ASGQe0SGuYM/QuZM+mramQmran5sJkQ5sJl4oAIQ4nAH3giOUgV6ABbglMAE/Ugj0AIKgjqAEIQnVA2nBAAQ7GAB2Tsrg");
	this.shape_97.setTransform(839.6167,1053.3794);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#39A1D7").s().p("EiPIBIEQ7+wNwx8NQwy8NjA3bUgC/gXbApwgVKUApvgVKAq7AFyUAq6AFxATRAItUAQJADDAkmgL+UAj6gNKAt+AMjUAt9AMkAdaARxQdbRxuANeQuCNfmvajQmwak6IJKQ6IJK4NAPQ4OAP31iZUgWLABXglRAFUUgj8AIZgjjAD1QmyAumgAAQ7nAB2ptIg");
	this.shape_98.setTransform(837.3925,1054.1043);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#39A0D7").s().p("EiPlBHzQ73wewl8TQwl8Si43JUgC4gXIAqigU9UAqhgU9AqoAF8UAqnAF8AS8AIhUAPvACvAlXgMRUAksgNaAuFANFUAuEANGAcBARcQcBRdtoN9QtqN+m0agQm0ai6kIvQ6lIw3yAWQ30AW4KijUgWdABUglWAFoUgkEAIogjcADhQmPAnl/AAQ8IAA2+tkg");
	this.shape_99.setTransform(835.1665,1053.0625);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#39A0D7").s().p("EiQCBHjQ7wwvwY8ZQwY8Yix22UgCxgW1ArUgUwUArTgUwAqUAGGUAqVAGGASnAIWUAPUACaAmJgMjUAlfgNqAuLANnUAuKANnAaoARIQapRItROdQtSOdm4aeQm6af7AIVQ7AIV3ZAdQ3ZAd4fitUgWvABQglbAF9UgkLAI3gjWADNQlrAhlfAAQ8pAA3TuCg");
	this.shape_100.setTransform(832.9577,1051.9098);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#39A0D7").s().p("EiQfBHTQ7pw/wL8gQwM8eip2iUgCpgWjAsFgUkUAsFgUjAqCAGRUAqBAGRASSAILUAO7ACFAm5gM1UAmRgN6AuSAOIUAuSAOJAZPAQzQZOQ0s5O8Qs5O8m+acQm9ac7cH7Q7dH62+AlQ2/Aj40i3UgXCABMglgAGTUgkTAJFgjOAC6QlIAbk+AAQ9KAA3puhg");
	this.shape_101.setTransform(830.7198,1050.7751);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#39A0D7").s().p("EiQ8BHDQ7ixQv/8lQv+8kii2QUgCigWQAs3gUXUAs3gUWApuAGbUApvAGcAR9AH/UAOgABxAnrgNIUAnEgOKAuYAOqUAuZAOrAX1AQeQX2QfsiPcQshPcnCaYQnDaa74HgQ74Hh2lArQ2kAr5JjBUgXUABHgllAGoUgkaAJUgjIACmQkmAVkdAAQ9rAA39u/g");
	this.shape_102.setTransform(828.5206,1049.634);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#39A0D7").s().p("EiRYBGyQ7cxhvy8rQvx8qib19UgCagV9AtpgUJUAtogUKApcAGmUApbAGlARoAH1UAOHABcAobgNbUAn2gOaAugAPMUAufAPNAWcAQKQWcQKsJP7QsKP6nHaYQnHaW8UHGQ8UHG2KAyQ2LAy5djLUgXnABEglpAG8UgkiAJjgjBACTQkDAQj8AAQ+NAA4Rvfg");
	this.shape_103.setTransform(826.2919,1048.55);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#39A0D7").s().p("EiR2BGhQ7Vxyvl8xQvl8wiS1qUgCTgVqAuagT9UAuagT8ApJAGwUApIAGwARTAHpUANtABHApMgNsUAopgOqAumAPuUAumAPtAVDAP2QVDP2rxQaQrzQZnLaVQnLaU8wGsQ8xGr1wA5Q1wA55zjVUgX4ABAglvAHRUgkqAJygi5AB/QjgANjaAAQ+vAA4nwAg");
	this.shape_104.setTransform(824.1184,1047.5033);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#39A0D7").s().p("EiSTBGQQ7OyDvY83QvY81iM1YUgCLgVXAvMgTwUAvMgTwAo2AG7UAo1AG6AQ+AHeUANTAAzAp9gN/UApbgO6AutAQQUAutAQPATqAPhQTpPhrZQ6QrbQ5nPaRQnRaS9MGRQ9MGR1WBAQ1WBA6IjfUgYKAA8gl0AHmUgkxAKBgizABrQi9AJi6AAQ/QAA47wgg");
	this.shape_105.setTransform(821.9084,1046.4519);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#39A0D7").s().p("EiSwBF/Q7IyTvL89QvL88iE1EUgCEgVFAv+gTjUAv+gTjAoiAHFUAojAHFAQpAHSUAM4AAfAqvgOSUAqNgPKAu0AQyUAu0AQwASQAPNQSRPNrCRZQrDRYnUaPQnVaP9oF3Q9pF208BIQ08BH6bjqUgYdAA4gl5AH8Ugk5AKOgisABYQiaAGiYAAQ/zAA5PxBg");
	this.shape_106.setTransform(819.7481,1045.4324);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#39A0D7").s().p("EiTOBFtQ7Ayku/9DQu+9Bh90yUgB8gUxAwwgTWUAwvgTXAoQAHQUAoPAHPAQUAHHUAMfAAKArfgOkUArAgPaAu7ARTUAu6ARTAQ3AO3QQ3O5qqR4QqqR4nZaMQnaaM+EFdQ+EFc0iBOQ0iBO6xjzUgYvAA0gl9AIQUglBAKegilABEQh4ADh2AAUggVAAAgZkgRjg");
	this.shape_107.setTransform(817.5674,1044.4342);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#399FD7").s().p("EiTrBFbQ66y1uy9IQux9Ih10fUgB1gUeAxhgTKUAxhgTJAn9AHaUAn8AHaAP/AG7UAMFgAKAsRgO2UArygPqAvBAR0UAvBAR0APeAOkQPeOjqSSYQqTSXneaKQneaJ+gFCQ+gFC0IBWQ0IBV7Fj+UgZBAAxgmDAIkUglIAKtgifAAwQhUAChUAAUgg4AAAgZ4gSGg");
	this.shape_108.setTransform(815.4438,1043.4863);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#399FD7").s().p("EiUJBFIQ60zFuk9PQul9Nhu0MUgBtgUMAyTgS8UAyTgS9AnqAHlUAnpAHkAPqAGwUALrgAfAtBgPIUAslgP6AvIASWUAvIASVAOFAOPQOEOPp6S3Qp7S3niaHQnjaH+8EoQ+9EnztBcQzuBc7akHUgZTAAsgmIAI6UglQAK7giXAAdIhkABUghbAAAgaMgSqg");
	this.shape_109.setTransform(813.3086,1042.5687);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#399FD7").s().p("EiUoBE2Q6szWuY9UQuY9Uhmz5UgBmgT5AzFgSvUAzEgSwAnXAHvUAnWAHuAPVAGlUALQgAzAt0gPbUAtXgQKAvPAS4UAvPAS3AMrAN6QMrN7piTWQpkTWnnaFQnnaE/YENQ/ZENzTBkQzTBj7wkSUgZlAApgmMAJOUglYALKgiRAAJIgfAAUgh9AAAgahgTNg");
	this.shape_110.setTransform(811.2508,1041.6344);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#399FD7").s().p("EhYXBYVUgiJgALgamgTnQ6mznuL9aQuL9ahfzmUgBfgTlAz3gSjUAz3gSjAnDAH5UAnDAH5APBAGaUAK1gBJAulgPtUAuJgQaAvWATaUAvWATZALSANlQLSNmpLT2QpLT1nsaCQnsaC/0DzQ/0Dyy6BrQy5Bq8EkcUgZ3AAlgmSAJjUgk/ALPghuAAAIg8AAg");
	this.shape_111.setTransform(809.212,1040.7755);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#399FD7").s().p("EhZEBYmUgiCgAfgaggT3Q6fz4t+9gQt+9ghXzTUgBXgTTA0ogSWUA0pgSWAmwAIEUAmwAIDAOsAGOUAKbgBdAvWgP/UAu8gQqAvcAT7UAvdAT7AJ4ANRQJ5NRozUWQozUUnwZ/UgHxAZ/ggQADZUggRADYgSfAByQyfBx8ZkmUgaJAAhgmXAJ4UgkLALLgg4AAAIingBg");
	this.shape_112.setTransform(807.2167,1039.9606);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#399FD7").s().p("EhZxBY2Ugh8gAxgaZgUJQ6Y0Itx9nQty9lhPzAUgBQgTAA1agSJUA1agSJAmeAIOUAmdAINAOWAGDUAKBgBxAwHgQSUAvvgQ6AvjAUdUAvkAUcAIfAM9QIfM8obU1QobU0n1Z9UgH1AZ8ggsAC+UggtAC+gSFAB4QyFB48ukvUgacAAcgmbAKOUgjbALHggEAAAQiGAAiFgDg");
	this.shape_113.setTransform(805.3087,1039.1647);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#399FD7").s().p("EhagBZHUgh0gBGgaSgUZQ6S0Ztk9sQtl9shIytUgBIgStA2MgR9UA2MgR8AmKAIZUAmKAIYAOCAF4UAJngCHAw4gQkUAwggRKAvrAU/UAvqAU+AHGAMoQHGMooDVUQoEVTn5Z6UgH6AZ6ghIACkUghJACjgRrACAQxrB/9Ck6UgauAAZgmhAKiUgiwALGgfWAAAQizAAiygGg");
	this.shape_114.setTransform(803.4818,1038.4078);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#399FD7").s().p("EhbQBZXUghugBZgaLgUqQ6K0qtY9yQtY9yhByaUgBBgSaA2+gRwUA2+gRvAl3AIjUAl3AIjANtAFsUAJNgCbAxpgQ2UAxTgRaAvxAVgUAvxAVfAFtAMUQFtMTnsV0QnrVyn/Z4UgH+AZ3ghkACJUghlACJgRQACHQxRCG9YlEUgbAAAVgmlAK3UgiHALEgesAAAQjdAAjcgJg");
	this.shape_115.setTransform(801.8016,1037.6823);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#399FD7").s().p("EhcCBZmUghngBsgaEgU7Q6E07tL94QtL93g5yIUgA5gSHA3vgRjUA3wgRiAlkAItUAlkAItANYAFhUAIzgCvAyagRJUAyFgRqAv4AWCUAv4AWBAEUAL/QETL/nTWTQnVWSoCZ1UgIDAZ0giAABvUgiBABugQ3ACOQw2CN9tlOUgbSAARgmqALMUghjALDgeFAAAQkEAAkBgNg");
	this.shape_116.setTransform(800.3129,1037.0053);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#399ED7").s().p("Ehc3BZ2UghggCAgZ9gVMQ591Ls+9+Qs/99gxx1UgAygR1A4hgRVUA4hgRWAlSAI4UAlRAI3ANCAFWUAIZgDEAzLgRbUAy5gR6Av+AWjUAv/AWjAC6ALqQC6Lrm7WyQm9WxoHZzUgIIAZygicABUUgidABUgQcACVQwcCU+BlYUgblAANgmvALhUghEALCgdiAAAQkmAAkigRg");
	this.shape_117.setTransform(799.1388,1036.3472);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#399ED7").s().p("EhdxBaFUghZgCTgZ3gVdQ521csx+EQsy+DgqxiUgAqgRiA5TgRIUA5TgRJAk+AJCUAk+AJCAMuAFKUAH/gDYAz8gRuUAzqgSKAwGAXFUAwFAXFABhALWQBhLVmkXSQmkXRoMZvUgIMAZwgi5AA5Ugi4AA6gQDACcQwCCb+WliUgb2AAJgm1AL2UggjALCgc/AAAQlKAAlCgWg");
	this.shape_118.setTransform(798.4612,1035.6787);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#399ED7").s().p("Ehe0BaUUghSgCngZwgVtQ5w1tsk+KQsl+JgjxPUgAjgRPA6GgQ8UA6EgQ8AkrAJNUAkrAJMAMZAE/UAHlgDtA0tgSAUA0dgSaAwNAXnUAwMAXmAAHALBQAILBmMXxQmNXxoQZtUgIRAZsgjVAAgUgjUAAfgPoACjQvoCi+rlsUgcJAAFgm5AMLUggIALDgcgAAAQloAAlfgcg");
	this.shape_119.setTransform(798.7407,1035.0681);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#399ED7").s().p("EhgBBajUghMgC7gZpgV+Q5p1+sX+QQsY+Pgcw8UgAbgQ7A63gQvUA62gQvAkZAJWUAkXAJXAMEAE0UAHLgECA1egSSUA1QgSqAwTAYIUAwTAYIgBSAKtQhRKsl1YRQl0YPoWZrUgIVAZqgjwAAFUgjxAAFgPOACpQvOCq/Al3UgcaAACgm/AMfQ/tLE8EAAQmFAAl5ghg");
	this.shape_120.setTransform(799.9951,1034.4752);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#399ED7").s().p("EhhSBayUghEgDPgZigWOQ5i2PsL+WQsL+VgUwpUgAUgQpA7pgQiUA7ogQiAkFAJhUAkFAJhALvAEpUAGwgEXA2PgSkUA2CgS6AwbAYqUAwZAYqgCrAKXQirKYlcYwQldYvoaZoUgIaAZngkMgAVUgkNgAWgO0ACxQu0Cw/UmAUgctgACgnDAM0Q/ULF7oAAQmhAAmUgng");
	this.shape_121.setTransform(801.5171,1033.8624);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#399ED7").s().p("EhikBbBUgg9gDjgZcgWfQ5b2fr++cQr/+bgMwWUgAMgQWA8agQWUA8agQVAjyAJsUAjyAJrALaAEdUAGWgEqA3BgS3UA20gTKAwhAZMUAwhAZLgEFAKDQkEKElEZPQlGZOoeZlUgIfAZlgkogAwUgkpgAwgOaAC4QuZC3/pmKUgc/gAHgnJANKQ++LG7PAAQm6AAmqgtg");
	this.shape_122.setTransform(803.2563,1033.297);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#399ED7").s().p("Ehj4BbPUgg2gD2gZVgWwQ5V2wrx+iQrx+hgFwDUgAFgQDA9MgQJUA9MgQIAjfAJ2UAjfAJ2ALFAESUAF8gFAA3xgTJUA3ngTaAwoAZuUAwnAZsgFdAJvQleJvksZuQkuZuojZjUgIjAZiglEgBKUglFgBLgOAAC/Qt/C+/+mUUgdRgAKgnOANeQ+oLI64AAQnSAAnAg0g");
	this.shape_123.setTransform(805.1646,1032.7487);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#399ED7").s().p("EhlOBbdUggwgEJgZOgXBQ5N3Brl+oQrl+mADvxUAADgPwA9+gP8UA99gP7AjMAKAUAjMAKBAKwAEGUAFigFUA4jgTbUA4ZgTqAwvAaPUAwuAaOgG3AJaQm3JbkVaNQkVaOooZfUgIoAZgglggBlUglhgBkgNlADFUgNmADGggTgGfUgdjgAOgnSANzQ+VLK6hAAQnoAAnVg7g");
	this.shape_124.setTransform(807.3027,1032.1962);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#399ED7").s().p("EhmlBbsUggpgEdgZHgXSQ5H3SrY+tQrY+uAKvdUAAKgPdA+wgPvUA+vgPvAi5AKLUAi5AKLAKbAD7UAFJgFoA5TgTuUA5MgT6Aw1AaxUAw1AawgIQAJFQoQJGj9atQj+atosZcUgItAZegl8gB/Ugl9gB/gNLADNUgNLADMggogGpUgd2gASgnXAOIQ+CLN6MAAQn+AAnnhCg");
	this.shape_125.setTransform(809.5591,1031.6496);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#399DD7").s().p("Ehn+Bb5UggigEwgZAgXjQ5A3irL+0QrL+yARvLUAASgPLA/hgPhUA/hgPiAimAKVUAimAKVAKGADwUAEugF9A6FgUAUA5+gUKAw8AbSUAw8AbSgJpAIxQpqIxjlbNQjmbMoxZaUgIxAZagmYgCZUgmZgCagMxADUUgMxADUgg9gGzUgeIgAWgncAOdQ9wLP54AAQoTAAn5hKg");
	this.shape_126.setTransform(811.982,1031.1204);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#399DD7").s().p("EhpYBcHUggbgFEgY6gXzQ453zq++6Qq/+5AZu3UAAZgO4BAUgPVUBASgPVAiTAKgUAiTAKfAJxADlUAEVgGSA61gUSUA6xgUaAxDAb0UAxCAbzgLCAIcQrDIdjObsQjNbro2ZYUgI2AZYgm0gC0Ugm1gC0gMXADbUgMXADaghSgG8UgeZgAagnhAOyQ9gLS5mAAQomAAoJhSg");
	this.shape_127.setTransform(814.5228,1030.6135);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#399DD7").s().p("Ehq0BcVUggUgFYgYzgYEQ4z4Eqx+/Qqx+/AgulUAAhgOkBBFgPJUBBEgPIAiAAKqUAiAAKrAJcADZUAD6gGnA7ngUkUA7jgUqAxKAcVUAxJAcVgMcAIIQscIIi1cLQi3cLo6ZVUgI6AZVgnRgDOUgnRgDOgL8ADiUgL9ADhghmgHHUgesgAdgnmAPGQ9SLV5UAAQo4AAoYhZg");
	this.shape_128.setTransform(817.2146,1030.1054);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#399DD7").s().p("EhsQBcjUggNgFrgYtgYVQ4r4Uql/GQql/FAouRUAAogOSBB3gO8UBB2gO7AhtAK1UAhtAK0AJHADOUADhgG7A8XgU3UA8WgU6AxQAc3UAxQAc3gN1AHzQt1H0iecqQiecqo/ZTUgI/AZSgnsgDoUgntgDpgLjADpUgLjADogh7gHQUge+gAignrAPcQ9DLX5CAAQpKAAonhhg");
	this.shape_129.setTransform(819.989,1029.5821);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#399DD7").s().p("EhtvBcxUggGgF/gYlgYlQ4l4mqY/LQqY/LAwt/UAAwgN/BCogOuUBCogOvAhaAK/UAhZAK/AIzADDUADGgHQA9IgVKUA9IgVJAxYAdYUAxXAdZgPPAHfQvOHeiGdLQiGdJpEZQUgJEAZQgoIgEDUgoJgEDgLJADvUgLIADwgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo2hpg");
	this.shape_130.setTransform(822.9028,1029.0894);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#399DD7").s().p("EhtvBcfUggGgF/gYlgYlQ4l4mqY/LQqY/LAvuJUAAvgOKBCogOwUBCogOwAhbALLUAhaALLAIzADDUADGgHQA9MgUyUA9MgUyAxUAdDUAxTAdDgPOAHdQvPHdiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_131.setTransform(822.9166,1030.8581);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#399DD7").s().p("EhtuBcOUggGgF/gYmgYmQ4l4lqX/MQqY/KAuuUUAAugOUBCogOxUBCogOyAhcALXUAhbALXAIyADCUADGgHPA9RgUbUA9PgUbAxRAcuUAxPActgPPAHbQvPHbiGdKQiGdKpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_132.setTransform(822.8945,1032.6094);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#399DD7").s().p("EhtvBb8UggGgF/gYlgYlQ4l4mqY/LQqY/LAuueUAAtgOfBCpgOyUBCngOzAhcALjMAqPAOlUADGgHQA9UgUDUA9UgUEAxMAcYUAxNAcYgPQAHZQvPHaiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_133.setTransform(822.9165,1034.3592);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#399DD7").s().p("EhtvBbrUggGgF/gYlgYmQ4l4lqY/MQqY/KAtupUAAtgOpBCogO0UBCogO1AhdALvUAhcALvAIzADCUADGgHPA9YgTsUA9XgTtAxJAcDUAxJAcCgPQAHXQvPHYiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_134.setTransform(822.9148,1036.1048);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#399DD7").s().p("EhtvBbZUggGgF/gYlgYlQ4l4mqY/LQqY/LAtuzUAAsgOzBCogO2UBCngO2AheAL7UAhdAL6AIzADDUADGgHQA9cgTUUA9bgTVAxGAbtUAxFAbsgPQAHWQvQHWiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zABQpaAAo1hqg");
	this.shape_135.setTransform(822.9291,1037.8659);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#399DD7").s().p("EhtvBbIUggGgF/gYlgYmQ4l4lqY/MQqY/KAsu+UAArgO+BCogO3UBCogO3AheAMGUAheAMHAIzADCUADGgHPA9ggS9UA9fgS+AxCAbXUAxBAbXgPQAHUQvQHUiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_136.setTransform(822.9199,1039.6221);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#399DD7").s().p("EhtvBa2UggGgF/gYlgYlQ4l4mqY/LQqY/LArvIUAArgPIBCogO5UBCngO4AhfAMSUAhfAMSAIzADDUADGgHQA9jgSmUA9kgSmAw+AbCUAw+AbBgPRAHSQvQHTiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_137.setTransform(822.9196,1041.3566);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#399DD7").s().p("EhtvBalUggGgF/gYlgYmQ4l4lqY/MQqY/KArvTUAAqgPTBCngO6UBCogO6AhgAMeUAhfAMfAIzADCUADGgHPA9ngSPUA9ngSOAw7AasUAw6AargPQAHQQvRHRiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_138.setTransform(822.9325,1043.1152);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#399DD7").s().p("EhtvBaTUggGgF/gYlgYlQ4l4mqY/LQqY/LAqvdUAApgPdBCogO8UBCngO7AhhAMqUAhgAMqAIzADDUADGgHQA9rgR3UA9rgR3Aw3AaWUAw3AaWgPRAHPQvRHPiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_139.setTransform(822.9177,1044.8567);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#399DD7").s().p("EhtvBaCUggGgF/gYlgYmQ4l4lqY/MQqY/KApvoUAApgPoBCogO8UBCngO9AhhAM2UAhhAM2AIzADCUADGgHPA9vgRgUA9vgRgAw0AaBUAwzAaAgPSAHNQvRHNiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_140.setTransform(822.9319,1046.6093);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#399DD7").s().p("EhtvBZwUggGgF/gYlgYlQ4l4mqY/LQqY/LApvyUAAogPyBCngO+UBCngO/AhiANCUAhiANCAIzADDUADGgHQA9zgRIUA9zgRIAwwAZrUAwvAZqgPRAHLQvSHMiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zABQpaAAo1hqg");
	this.shape_141.setTransform(822.9446,1048.365);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#399DD7").s().p("EhtvBZfUggGgF/gYlgYlQ4l4mqY/LQqY/LAov8UAAngP9BCogPAUBCngPAAhjANOUAhiANOAIzADDUADGgHQA93gQxUA93gQxAwsAZWUAwsAZVgPSAHJQvSHKiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_142.setTransform(822.9206,1050.0946);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#399DD7").s().p("EhtvBZOUggGgF/gYlgYmQ4l4lqY/MQqY/KAnwHUAAngQHBCngPCUBCngPBAhkANaUAhjANaAIzADCUADGgHPA97gQaUA96gQZAwpAY/UAwoAZAgPSAHHQvSHIiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_143.setTransform(822.9348,1051.8441);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#399DD7").s().p("EhtvBY8UggGgF/gYlgYlQ4l4mqY/LQqY/LAnwRUAAmgQSBCngPCUBCngPDAhkANmUAhkANlAIzADDUADGgHQA9/gQCUA9+gQCAwlAYqUAwlAYqgPTAHGQvSHFiGdLQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_144.setTransform(822.9421,1053.5844);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#399DD7").s().p("EhtvBYrUggGgF/gYmgYmQ4l4lqX/MQqY/KAmwcUAAlgQcBCngPEUBCngPEAhlANxUAhlANyAIyADCUADGgHPA+DgPrUA+CgPrAwiAYVUAwhAYUgPTAHEQvTHEiGdKQiGdKpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_145.setTransform(822.9563,1055.3316);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#399DD7").s().p("EhtvBYZUggGgF/gYlgYlQ4l4mqY/LQqY/LAlwmUAAlgQnBCngPFUBCngPGAhmAN+UAhlAN9AIzADDUADGgHQA+GgPTUA+HgPUAweAX/UAwdAX/gPTAHCQvTHCiGdLQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_146.setTransform(822.9321,1057.0563);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#399DD7").s().p("EhtvBYIUggGgF/gYlgYmQ4l4lqY/MQqY/KAlwxUAAkgQxBCngPHUBCmgPHAhnAOJUAhmAOKAIzADCUADGgHPA+KgO8UA+KgO8AwbAXpUAwaAXpgPUAHAQvTHBiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_147.setTransform(822.9447,1058.8046);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#399DD7").s().p("EhtvBX3UggGgF/gYmgYmQ4l4lqX/MQqY/KAkw8UAAjgQ7BCngPIUBCmgPJAhoAOVUAhnAOWAIyADCUADGgHPA+PgOlUA+OgOkAwXAXTUAwWAXTgPUAG/QvUG/iGdKQiGdKpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_148.setTransform(822.9588,1060.5476);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#399DD7").s().p("EhtvBXlUggGgF/gYlgYlQ4l4mqY/LQqY/LAjxGUAAjgRFBCngPKUBCmgPKAhoAOhUAhoAOhAIzADDUADGgHQA+SgONUA+SgONAwTAW+UAwTAW9gPUAG+QvUG8iGdLQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_149.setTransform(822.9436,1062.2774);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#399DD7").s().p("EhtvBXUUggGgF/gYmgYmQ4l4lqX/MQqY/KAixRUAAigRQBCngPLUBCmgPMAhpAOuUAhpAOtAIyADCUADGgHPA+XgN2UA+VgN2AwQAWpUAwPAWngPUAG8QvVG7iGdKQiGdKpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_150.setTransform(822.9562,1064.0211);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#399DD7").s().p("EhtvBXDUggGgF/gYmgYmQ4l4lqX/MQqY/KAixbUAAhgRbBCngPNUBCmgPMAhpAO5UAhqAO5AIyADCUADGgHPA+agNfUA+agNeAwMAWTUAwMAWSgPVAG6QvVG5iGdKQiGdKpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_151.setTransform(822.9558,1065.738);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#399DD7").s().p("EhtvBW9UggGgF/gYlgYmQ4l4lqY/MQqY/KAhxlUAAhgRmBCngPOUBCmgPOAhqAPFUAhqAPFAIzADCUADGgHPA+egNHUA+dgNHAwJAV9UAwIAV9gPVAG3QvVG4iGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_152.setTransform(822.9457,1066.3022);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#399DD7").s().p("EhtvBXHUggGgF/gYmgYlQ4l4mqX/LQqY/LAgxvUAAhgRwBCmgPQUBCmgPPAhrAPQUAhrAPRAIyADDUADGgHQA+igMvUA+igMwAwFAVoUAwEAVngPVAG2QvWG1iGdLQiGdJpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_153.setTransform(822.9597,1065.284);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#399DD7").s().p("EhtvBXRUggGgF/gYmgYlQ4l4mqX/LQqY/LAgx6UAAfgR6BCmgPRUBCmgPRAhsAPcUAhsAPdAIyADDUADGgHQA+mgMYUA+lgMYAwCAVSUAwAAVRgPVAG0QvWG0iGdLQiGdJpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lc4zAAQpaAAo1hqg");
	this.shape_154.setTransform(822.9578,1064.2519);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#399DD7").s().p("EhtvBXcUggGgF/gYmgYmQ4l4lqX/MQqY/KAfyFUAAfgSEBCmgPTUBCmgPTAhsAPpUAhtAPpAIyADCUADGgHPA+qgMBUA+pgMBAv+AU8UAv9AU8gPWAGzQvWGyiGdKQiGdKpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb40AAQpZAAo1hpg");
	this.shape_155.setTransform(822.9795,1063.2246);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#399DD7").s().p("EhtvBXmUggGgF/gYmgYmQ4l4lqX/MQqY/KAeyPUAAfgSPBCmgPUUBClgPUAhuAP0UAhtAP1AIyADCUADGgHPA+ugLqUA+tgLpAv6AUnUAv6AUmgPXAGwQvWGxiGdKQiGdKpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_156.setTransform(822.9563,1062.2087);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#399DD7").s().p("EhtvBXwUggGgF/gYmgYlQ4l4mqX/LQqY/LAeyZUAAdgSaBCmgPVUBCmgPWAhuAQBUAhuAQAAIyADDUADHgHQA+xgLSUA+xgLSAv2AURUAv2AURgPWAGvQvXGviGdKQiGdJpEZQUgJDAZQgoJgEDUgoIgEDgLJADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_157.setTransform(822.9554,1061.1682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},398).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sea_top_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sea_top_copy
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#399DD7").s().p("EhmoBZvUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AMGgZQUAMGgZQA2VgBkUA2WgBkAfhAM2QfiM2IxDCUACygLTApjgK+UApjgK+AqcACiUAqbACjAIgAXaQIgXbA3f7QA3f6pEZQUgJEAZQgoIgEEUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape.setTransform(777.49,1048.5059);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#399DD7").s().p("EhmrBZgUggGgF/gYlgYmUgYlgYlgHjgi7UgHjgi8AMGgZUUAMEgZUA2WgBjUA2WgBkAfiAM6QfiM5IvC+UAC0gLLApkgK7UApjgK6ArJADAUArIADAAH4AW8QH4W6Axf4QAyf2pEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_1.setTransform(777.6997,1050.013);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#399DD7").s().p("EhmtBZSUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AMFgZYUAMFgZYA2WgBiUA2VgBjAfjAM9QfiM8ItC6UAC3gLCApkgK4UApkgK3Ar1ADeUAr1ADfAHQAWcQHQWbAsfzQAsfypDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_2.setTransform(777.9277,1051.4468);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#399DD7").s().p("EhmvBZEUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AMFgZcUAMDgZdA2WgBgUA2WgBiAfjANAQfjM/IrC2UAC5gK6AplgK0UApkgK0AsiAD8UAsiAD9AGoAV8QGnV8AnfvQAnfupDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_3.setTransform(778.1417,1052.8187);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#399ED7").s().p("EhmxBY3UggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AMDgZgUAMDgZhA2XgBfUA2VgBhAfkANDQfkNCIoCyUAC8gKyAplgKxUApkgKwAtPAEbUAtPAEaAGAAVdQF/VcAifrQAifqpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_4.setTransform(778.3779,1054.1474);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#399ED7").s().p("EhmzBYqUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AMDgZlUAMCgZkA2WgBeUA2WgBgAflANGQfjNFInCtUAC/gKoApkgKuUAplgKtAt8AE5UAt8AE4AFYAU+QFXU8AcfnQAdfmpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo0hpg");
	this.shape_5.setTransform(778.5995,1055.4032);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#399ED7").s().p("Ehm2BYeUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AMCgZpUAMCgZoA2XgBdUA2WgBeAfkANIQflNIIkCpUADBgKgApmgKqUAplgKqAupAFXUAuoAFWAEwAUeQEuUdAYfjQAXfipDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_6.setTransform(778.821,1056.6201);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#399ED7").s().p("Ehm4BYSUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AMBgZsUAMBgZtA2XgBcUA2WgBdAflANLQfmNLIiCmUADDgKYApmgKnUAplgKnAvWAF1UAvVAF1AEIAT+QEGT+ATffQASfdpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_7.setTransform(779.0736,1057.7933);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#399ED7").s().p("Ehm7BYPUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AMBgZwUAMAgZxA2XgBbUA2XgBcAflANOQfmNOIgChUADGgKOApmgKkUApmgKkAwCAGTUAwDAGTADfATfQDeTeANfbQANfZpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_8.setTransform(779.3033,1058.0875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#399ED7").s().p("Ehm9BYTUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AMAgZ1UAL/gZ0A2XgBbUA2XgBaAfmANRQfnNRIdCdUADJgKHApmgKgUApmgKgAwwAGxUAwvAGxAC3AS/QC2S/AIfWQAIfWpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_9.setTransform(779.5651,1057.7481);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#399ED7").s().p("EhnABYWUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL/gZ5UAL/gZ4A2XgBaUA2XgBZAfnANUQfnNUIbCZUADMgJ+ApmgKdUApmgKdAxdAHPUAxcAHPACPASgQCOSfADfSQACfSpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_10.setTransform(779.8034,1057.4086);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#399ED7").s().p("EhnCBYZUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL+gZ8UAL+gZ9A2YgBYUA2XgBZAfnANXQfoNXIZCVUADOgJ1ApmgKaUApngKaAyJAHuUAyJAHtABnASAQBmR/gDfPQgCfNpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaABo1hqg");
	this.shape_11.setTransform(780.0521,1057.069);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#399FD7").s().p("EhnFBYdUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AL9gaBUAL+gaBA2XgBXUA2YgBXAfoANaQfoNaIXCQUADQgJsApngKXUApngKWAy2AILUAy2AIMAA+ARgQA+RggHfLQgIfJpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_12.setTransform(780.3571,1056.7292);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#399FD7").s().p("EhnKBYgUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL9gaFUAL9gaEA2YgBWUA2XgBXAfpANdQfoNdIVCNUADTgJkApngKUUApngKTAzjAIqUAzjAIpAAWARBQAWRBgNfGQgNfFpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_13.setTransform(780.8043,1056.3892);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#399FD7").s().p("EhncBYkUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL8gaJUAL8gaJA2YgBVUA2YgBVAfpANgQfpNgITCIUADVgJcApogKQUApngKQA0QAJIUA0QAJIgASAQiQgTQggSfDQgSfBpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_14.setTransform(782.6352,1056.0491);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#399FD7").s().p("Ehn2BYnUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL8gaNUAL7gaNA2YgBUUA2YgBUAfqANjQfpNjIQCEUADZgJTApngKNUApogKNA09AJmUA09AJmgA6AQCQg7QBgXe/QgYe9pDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_15.setTransform(785.2254,1055.709);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#399FD7").s().p("EhoQBYqUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL7gaRUAL6gaRA2ZgBSUA2YgBUAfqANnQfqNlIOCAUADbgJKApogKKUApogKJA1qAKEUA1pAKEgBiAPiQhjPigce6Qgde5pDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaABo1hqg");
	this.shape_16.setTransform(787.8301,1055.3686);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#399FD7").s().p("EhoqBYuUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AL6gaVUAL5gaVA2ZgBSUA2YgBSAfrANpQfrNpILB8UADegJCApogKHUApogKGA2XAKjUA2XAKigCLAPDQiLPCghe2Qgie1pEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_17.setTransform(790.4805,1055.0281);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#399FD7").s().p("EhpFBYxUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL5gaZUAL5gaZA2ZgBQUA2YgBRAfrANsQfsNrIJB4UADggI5AppgKEUApogKCA3EALAUA3DALAgCyAOkQi0OigmeyQgnexpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_18.setTransform(793.1631,1054.6912);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39A0D7").s().p("EhpgBY0UggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL4gadUAL4gadA2ZgBPUA2ZgBQAfsANvQfsNuIHB0UADjgIxApogKAUAppgJ/A3xALeUA3wALfgDbAODQjbODgsevQgsespEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lc40AAQpaAAo0hqg");
	this.shape_19.setTransform(795.8872,1054.3504);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#39A0D7").s().p("Ehp8BY4UggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL4gahUAL3gahA2agBPUA2ZgBPAfsANyQfsNyIFBvUADmgIoApogJ9UAppgJ8A4eAL9UA4dAL8gEDANlQkDNjgxeqQgyeppDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_20.setTransform(798.6415,1054.0093);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#39A0D7").s().p("EhqYBY7UggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL3galUAL3galA2ZgBNUA2ZgBOAftAN1QftN0IDBrUADogIfAppgJ6UAppgJ4A5LAMaUA5KAMbgErANFQksNEg2emQg3ekpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaABo1hqg");
	this.shape_21.setTransform(801.4258,1053.6681);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#39A0D7").s().p("Ehq0BY/UggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL3gaqUAL1gapA2agBMUA2ZgBNAfuAN4QftN4IBBnUADqgIXApqgJ2UAppgJ2A54AM5UA53AM5gFUAMlQlUMkg7eiQg8ehpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_22.setTransform(804.2395,1053.3268);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#39A0D7").s().p("EhrQBZCUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL1gatUAL1gatA2agBMUA2agBLAfuAN7QfuN6H+BjUADtgIOApqgJzUApqgJzA6kANYUA6kANWgF8AMGQl8MFhAeeQhBecpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb40ABQpZAAo1hqg");
	this.shape_23.setTransform(807.0801,1052.9641);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#39A0D7").s().p("EhrtBZGUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AL1gayUAL0gaxA2bgBKUA2ZgBLAfvAN+QfuN+H9BeUADvgIFApqgJwUApqgJvA7RAN1UA7RAN1gGkALmQmkLmhGeZQhGeZpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_24.setTransform(809.946,1052.6225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#39A0D7").s().p("EhsKBZJUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL0ga1UAL0ga2A2agBJUA2agBJAfvAOBQfvOAH7BbUADxgH+AprgJsUApqgJsA7+AOUUA7+AOTgHMALGQnMLGhLeWQhMeUpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_25.setTransform(812.8318,1052.2807);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#39A1D7").s().p("EhsnBZNUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8ALzga6UALzga5A2agBIUA2bgBJAfvAOEQfwOEH4BWUAD0gH1AprgJpUApqgJoA8rAOxUA8rAOygH0AKnQn1KmhQeSQhQeQpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_26.setTransform(815.768,1051.9388);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#39A1D7").s().p("EhtEBZQUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8ALyga9UALyga+A2bgBHUA2agBHAfxAOHQfwOGH2BSUAD3gHsApqgJlUAprgJmA9YAPQUA9YAPPgIcAKIQodKHhVeNQhWeMpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb40AAQpaAAo0hpg");
	this.shape_27.setTransform(818.697,1051.5967);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#39A1D7").s().p("EhtiBZTUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8ALygbBUALxgbCA2bgBGUA2agBGAfxAOKQfxOJH0BOUAD5gHjAprgJjUAprgJiA+FAPuUA+FAPtgJFAJpQpFJnhaeJQhbeIpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lc4zAAQpaAAo1hqg");
	this.shape_28.setTransform(821.6553,1051.2545);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#39A1D7").s().p("EhuABZXUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8ALxgbGUALxgbFA2bgBFUA2bgBGAfxAONQfxONHyBKUAD8gHbAprgJgUApsgJeA+xAQLUA+yAQMgJtAJJQptJHhgeGQhgeEpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_29.setTransform(824.6227,1050.9122);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#39A1D7").s().p("EhueBZaUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALxgbKUALwgbJA2bgBEUA2bgBEAfxAOQQfyOPHwBGUAD+gHTApsgJbUAprgJcA/fAQqUA/fAQqgKVAIpQqWIohkeBQhmeApDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_30.setTransform(827.6182,1050.573);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#39A1D7").s().p("Ehu8BZeUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8ALwgbOUALvgbOA2cgBCUA2bgBDAfyAOSQfyOTHuBBUAEBgHKAprgJYUApsgJZBAMARJUBALARIgK9AIJQq9IJhqd9Qhrd8pDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_31.setTransform(830.6203,1050.2304);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#39A1D7").s().p("EhvaBZhUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALvgbSUALvgbRA2bgBCUA2cgBCAfyAOWQfzOVHrA+UAEFgHCAprgJVUApsgJVBA5ARmUBA4ARmgLlAHqQrmHphvd5Qhwd4pDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_32.setTransform(833.649,1049.8876);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#39A1D7").s().p("Ehv4BZlUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8ALugbWUALugbWA2cgBAUA2bgBBAfzAOYQf0OZHpA5UAEHgG5AprgJSUAptgJSBBlASFUBBlASEgMNAHKQsOHKh0d1Qh1d0pEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_33.setTransform(836.6828,1049.5447);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#39A2D7").s().p("EhwXBZoUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8ALtgbaUALtgbaA2cgA/UA2cgBAAf0AObQf0OcHmA1UAEKgGwApsgJPUAptgJPBCSASjUBCSASigM1AGrQs3Gqh5dxQh6dwpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_34.setTransform(839.7585,1049.2016);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#39A2D7").s().p("Ehw2BZrUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALtgbeUALsgbeA2cgA+UA2cgA/Af1AOfQf0OeHlAxUAEMgGoApsgJLUAptgJLBC/ATAUBC/ATBgNdAGLQtfGLh+dtQiAdrpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_35.setTransform(842.8202,1048.8585);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#39A2D7").s().p("EhxUBZvUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8ALsgbiUALrgbiA2dgA9UA2cgA+Af1AOhQf1OiHiAsUAEPgGfApsgJIUAptgJIBDtATfUBDrATfgOFAFrQuHFriEdpQiEdopEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo0hpg");
	this.shape_36.setTransform(845.8988,1048.5152);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#39A2D7").s().p("EhxzBZzUggGgF/gYmgYmUgYlgYlgHjgi8UgHjgi7ALrgbmUALrgbmA2cgA9UA2dgA8Af1AOkQf2OkHgApUAERgGWAptgJFUAptgJFBEZAT9UBEZAT9gOuAFMQuuFMiKdkQiJdjpEZRUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPwQ81Lc40AAQpaAAo0hpg");
	this.shape_37.setTransform(848.9924,1048.1497);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#39A2D7").s().p("EhySBZ2UggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8ALqgbrUALqgbpA2dgA8UA2dgA7Af2AOnQf2OoHeAkUAEUgGOApsgJBUApugJCBFGAUbUBFGAUbgPWAEtQvXEsiOdgQiPdgpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_38.setTransform(852.0952,1047.8061);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#39A2D7").s().p("EhyyBZ5UggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALqgbuUALpgbuA2dgA6UA2dgA7Af3AOrQf2OqHcAgUAEWgGFApugI+UApugI/BFyAU6UBFzAU5gP+AENQv/EMiUddQiUdbpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_39.setTransform(855.2121,1047.4624);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#39A2D7").s().p("EhzRBZ9UggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8ALpgbzUALpgbyA2dgA5UA2dgA5Af3AOtQf3OuHaAcUAEZgF9AptgI7UApvgI7BGfAVXUBGgAVXgQnADuQwnDtiYdYQiadYpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_40.setTransform(858.337,1047.1186);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#39A3D7").s().p("EhzwBaAUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8ALogb2UALogb2A2dgA4UA2dgA5Af4AOxQf4OwHXAYUAEcgF0AptgI4UApvgI4BHNAV2UBHMAV1gRPADOQxPDOiedUQiedTpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lb40AAQpZAAo1hpg");
	this.shape_41.setTransform(861.48,1046.7746);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#39A3D7").s().p("Eh0QBaEUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8ALogb7UALngb6A2egA3UA2dgA3Af4AOzQf4O0HVATUAEfgFrAptgI1UApvgI0BH6AWTUBH5AWUgR3ACuQx3CuijdRQikdPpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_42.setTransform(864.6201,1046.4331);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#39A3D7").s().p("Eh0vBaHUggGgF/gYmgYlUgYlgYmgHjgi8UgHjgi7ALngb+UALmgb+A2egA2UA2dgA2Af5AO2Qf5O2HSAQUAEhgFjApvgIyUApvgIxBImAWyUBInAWygSgACPQyfCOiodMQipdLpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lb40AAQpaAAo0hpg");
	this.shape_43.setTransform(867.7826,1046.0888);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#39A3D7").s().p("Eh1PBaLUggGgF/gYlgYmUgYlgYlgHjgi8UgHkgi7ALmgcDUALmgcCA2egA1UA2egA1Af5AO5Qf5O6HRALUAEjgFaApvgIuUApvgIuBJUAXQUBJTAXPgTIABwQzHBviudIQiudHpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_44.setTransform(870.9421,1045.7444);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#39A3D7").s().p("Eh1vBaOUggGgF/gYlgYmUgYlgYlgHjgi8UgHkgi7ALmgcGUALkgcHA2fgA0UA2dgA0Af6AO9Qf6O8HOAIUAEngFSApugIsUApwgIqBKAAXuUBKBAXtgTwABRQzwBPiydEQi0dDpDZQUgJEAZQgoIgEEUgoJgECgLJADvUgLIADwgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_45.setTransform(874.1369,1045.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#39A3D7").s().p("Eh2PBaRUggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALlgcKUALkgcLA2egAyUA2egAzAf7AO/Qf6O/HMADUAEpgFJApvgIoUApwgInBKtAYMUBKtAYMgUXAAxQ0ZAvi3dAQi5c/pDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_46.setTransform(877.3131,1045.0553);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#39A3D7").s().p("Eh2vBaVUggGgF/gYlgYmUgYlgYlgHjgi8UgHkgi7ALkgcPUALjgcOA2fgAyUA2egAyAf7APDQf7PCHKgBUAErgFBApwgIkUApwgIlBLaAYrUBLaAYqgVAAARQ1AAQi9c8Qi+c7pDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_47.setTransform(880.5096,1044.7106);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#39A4D7").s().p("Eh3PBaYUggGgF/gYlgYlUgYlgYmgHjgi8UgHjgi7ALigcTUALjgcSA2fgAwUA2egAxAf8APFQf8PFHHgFUAEugE4ApvgIhUApxgIhBMHAZIUBMHAZIgVogAOQ1pgPjBc4QjEc2pDZQUgJDAZQgoJgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zABQpaAAo1hqg");
	this.shape_48.setTransform(883.7002,1044.3657);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#39A4D7").s().p("Eh3vBacUggGgF/gYlgYmUgYlgYlgHjgi8UgHkgi7ALjgcXUALhgcXA2ggAvUA2egAwAf8APJQf8PIHGgKUAEwgEvApwgIeUApxgIeBM0AZnUBMzAZmgWQgAuQ2QgvjIc0QjIczpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_49.setTransform(886.903,1044.0207);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#39A4D7").s().p("Eh4PBafUggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALigcbUALhgcaA2fgAuUA2fgAvAf9APLQf8PLHDgNUAEzgEnApxgIbUApxgIaBNgAaFUBNhAaEgW4gBOQ25hOjNcwQjNcupDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_50.setTransform(890.1165,1043.6756);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#39A4D7").s().p("Eh4vBajUggGgF/gYlgYmUgYlgYlgHjgi8UgHkgi7ALhgcfUALhgcfA2fgAtUA2fgAuAf9APPQf9POHBgSUAE2gEfApwgIXUApxgIXBOOAajUBOOAajgXhgBuQ3hhtjRcrQjTcrpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfPgAmgnxAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_51.setTransform(893.333,1043.3304);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#39A4D7").s().p("Eh5PBamUggGgF/gYmgYlUgYlgYmgHjgi8UgHjgi7ALggcjUALggciA2fgAtUA2fgAsAf+APRQf+PRG+gWUAE5gEWApwgITUApygIUBO7AbBUBO6AbAgYJgCMQ4JiOjXcoQjXcmpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lc4zAAQpaAAo1hqg");
	this.shape_52.setTransform(896.5611,1042.9622);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#39A4D7").s().p("Eh5vBaqUggGgF/gYmgYmUgYlgYlgHjgi8UgHjgi7ALfgcnUALfgcnA2ggArUA2fgAsAf/APVQf+PUG8gaUAE7gEOApxgIQUApygIRBPnAbfUBPoAbfgYxgCsQ4xitjccjQjdcjpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_53.setTransform(899.789,1042.6166);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#39A4D7").s().p("Eh6QBatUggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALfgcrUALegcrA2ggAqUA2ggAqAf+APXQf/PXG6geUAE+gEFApxgINUApygINBQVAb9UBQUAb9gZZgDMQ5ajMjhcfQjicepDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_54.setTransform(903.0294,1042.273);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#39A4D7").s().p("Eh6wBaxUggGgF/gYmgYmUgYlgYlgHjgi8UgHjgi7ALegcwUALdgcuA2ggApUA2ggApAf/APaUAgAAPaAG4gAjUAFAgD8ApxgIKUApzgIKBRBAcbUBRBAcbgaBgDrQ6CjsjmcbQjncbpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_55.setTransform(906.2847,1041.9272);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#39A5D7").s().p("Eh7RBa0UggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALdgczUALdgczA2hgAoUA2ggAoAf/APdUAgAAPdAG2gAmUAFDgD0ApxgIHUApzgIHBRuAc6UBRvAc5gaqgELQ6qkLjrcXQjtcWpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_56.setTransform(909.535,1041.5813);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#39A5D7").s().p("Eh7xBa4UggGgF/gYmgYmUgYlgYlgHjgi8UgHjgi7ALcgc4UALcgc3A2hgAmUA2ggAnAgAAPgUAgBAPgAGzgArUAFGgDrApxgIEUApzgIDBScAdYUBSbAdXgbSgErQ7SkrjxcUQjxcSpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb40AAQpaAAo0hpg");
	this.shape_57.setTransform(912.7868,1041.2353);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#39A5D7").s().p("Eh8SBa7UggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALcgc7UALbgc7A2hgAmUA2ggAmAgBAPjUAgBAPjAGxgAvUAFIgDiApzgIAUApzgIBBTIAd2UBTIAd2gb6gFKQ76lLj2cPQj3cOpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_58.setTransform(916.0476,1040.8891);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#39A5D7").s().p("Eh8yBa+UggGgF+gYmgYmUgYlgYlgHjgi8UgHjgi7ALagdAUALbgc/A2hgAlUA2hgAkAgBAPmUAgCAPmAGvgAzUAFKgDaApzgH9UApzgH9BT1AeTUBT1AeUgcigFqQ8ilpj8cLQj7cKpEZPUgJEAZQgoIgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb4zAAQpaAAo1hqg");
	this.shape_59.setTransform(919.2935,1040.5269);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#39A5D7").s().p("Eh9gBaZQ/9mV4U4uUgYUgYtgHZgijUgHZgihAMdgcvUAMegcuA2HgAWUA2HgAXAfmAPXQfePKHxhLUAGOgDwAp8gHQUAp8gHQBR+Ad5UBR9Ad4gcCgFAQ8DlAkBcIQkCcGppYtUgJpAYsgnmgD6UgnmgD5gLkADiUgLhADrgiXgG/UgfZgASgnoAPWQ8DK44OAAQp/AApVh3g");
	this.shape_60.setTransform(916.9665,1040.5616);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#39A5D7").s().p("Eh+MBZ0Q/0ms4D41UgYDgY2gHPgiIUgHPgiKANggcdUANggccA1ugAJUA1tgAJAfKAPIQe7OvIzhlUAHSgEEAqEgGjUAqGgGjBQGAddUBQGAdcgbjgEVQ7ikWkIcEQkIcDqPYJUgKOAYJgnDgDwUgnDgDxgMAADVUgL5ADlgidgGjUgfkAACgneAO8Q7SKV3oAAQqkAAp1iEg");
	this.shape_61.setTransform(914.5592,1040.6257);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#39A5D7").s().p("Eh+4BZOQ/qnC3y49UgXygY+gHFghvUgHFghwAOjgcMUAOigcLA1VAAFUA1UAAFAetAO5QeZOTJ0h9UAIVgEaAqOgF2UAqPgF1BOOAdBUBOOAdBgbCgDsQ7DjskNcBQkPb/q0XmUgK0AXlgmggDmUgmfgDngMdADHUgMRADggikgGHUgfuAAWgnVAOiQ6hJy3BAAQrKAAqViTg");
	this.shape_62.setTransform(912.0746,1040.6888);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#39A4D7").s().p("Eh/jBYoQ/hnZ3h5FUgXggZFgG7ghWUgG8ghXAPmgb7UAPlgb6A07AAUUA07AASAeRAOqQd2N3K1iVUAJZgEwAqXgFIUAqYgFJBMXAcmUBMWAclgaigDBQ6jjCkUb9QkUb8raXCUgLZAXCgl9gDdUgl9gDegM4AC6UgMqADbgiqgFrUgf4AApgnMAOIQ5wJR2cAAQruAAq1iig");
	this.shape_63.setTransform(909.544,1040.8128);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#39A4D7").s().p("EiANBYCQ/Znv3Q5NUgXPgZOgGxgg8UgGxgg+AQogbpUAQogbpA0hAAhUA0hAAhAd2AOaQdTNcL3iuUAKbgFFAqigEbUAqhgEcBKfAcKUBKfAcKgaDgCXQ6DiYkab4Qkbb6r/WfUgL/AWeglZgDUUglagDUgNUACtUgNCADVgiygFPUggCAA+gnDANtQ49Ix12AAQsUAArUizg");
	this.shape_64.setTransform(906.9616,1040.9451);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#39A4D7").s().p("EiA3BXcQ/QoG2+5VUgW/gZWgGmggjUgGoggkARrgbYUARrgbYA0IAAvUA0HAAvAdZAOLQcwNBM6jHUALfgFaAqqgDvUAqqgDuBInAbuUBIoAbvgZjgBuQ5jhukgb1Qkhb2slV8UgMkAV7gk3gDKUgk3gDLgNwACfUgNaADQgi4gEzUggNABRgm5ANTQ4MIR1PAAQs6AAr0jDg");
	this.shape_65.setTransform(904.32,1041.0983);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#39A4D7").s().p("EiBhBW0Q/Goc2u5dUgWtgZdgGdggKUgGdggLASugbHUAStgbHAzvAA+UAzuAA8Ac9AN8QcNMlN7jfUAMigFwAq0gDBUAqzgDCBGwAbTUBGvAbTgZCgBDQ5DhEknbxQknbztKVYUgNKAVYgkUgDBUgkTgDBgOMACRUgNzADLgi/gEXUggXABlgmwAM4Q3bHz0oAAQtgAAsUjWg");
	this.shape_66.setTransform(901.6257,1041.301);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#39A4D7").s().p("EiCKBWNQ++oy2c5lQ2c5mmT/wQmT/yTw62UATwga1AzVABLUAzVABLAchANtQbqMJO9j3UANmgGGAq8gCUUAq9gCVBE4Aa4UBE4Aa3gYjgAZQ4jgaksbuQkubvtvU1UgNwAU0gjxgC4UgjwgC3gOoACEUgOLADFgjFgD7UggiAB5gmmAMeQ2qHV0CAAQuGAAszjpg");
	this.shape_67.setTransform(898.9162,1041.5171);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#39A4D7").s().p("EiCzBVmQ+1pJ2L5tQ2K5tmJ/YQmJ/YUz6kUAUygalAy8ABaUAy7ABYAcFANeQbHLuP+kRUAOqgGbArGgBnUArFgBnBDBAacUBDAAabgYCAARQ4EARkybqQk0bruVUSUgOWAURgjNgCuUgjOgCvgPDAB3UgOkADAgjMgDfUggrACMgmeAMFQ15G3zbAAQusAAtSj8g");
	this.shape_68.setTransform(896.1811,1041.794);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#39A3D7").s().p("EiDcBU+Q+rpg1651Q1551mA++Ql++/V16TUAV1gaTAyjABnUAyhABnAbpANOQakLSRAkoUAPtgGxArPgA6UArPgA6BBJAaAUBBJAaAgXjAA7Q3jA7k6bmQk5bou7TuUgO7ATugiqgClUgirgClgPgABpUgO7AC8gjTgDEUgg2ACggmUALqQ1IGcy0AAQvTAAtxkRg");
	this.shape_69.setTransform(893.3999,1042.069);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#39A3D7").s().p("EiEFBUWQ+ip21o59Q1p59l1+lQl1+lW46CUAW4gaCAyJAB1UAyIAB1AbNAM/QaBK2SClBUAQxgHGArYgANUArYgANA/RAZlUA/RAZkgXDABlQ3DBlk/bjQlAbkvhTLUgPgATKgiHgCbUgiIgCcgP8ABcUgPTAC2gjagCnUghAACzgmLALQQ0XGAyMAAQv6AAuRkmg");
	this.shape_70.setTransform(890.6038,1042.3787);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#39A3D7").s().p("EiEtBTuQ+ZqN1X6FQ1X6Flr+LQlr+NX75wUAX6gZxAxvACDUAxvACDAaxAMwQZeKbTClaUAR2gHbArhAAgUArhAAgA9aAZJUA9ZAZJgWjACPQ2jCOlGbgQlGbgwFSoUgQGASnghlgCSUghkgCSgQYABOUgPsACxgjggCLUghKADHgmCAK1QznFmxlAAQwhAAuvk8g");
	this.shape_71.setTransform(887.7752,1042.7401);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#39A3D7").s().p("EiFVBTFQ+Qqj1G6NQ1G6Nlh9yQlh9zY+5gUAY9gZfAxWACRUAxVACQAaUAMhQY8KAUElzUAS5gHwArqABNUArqABNA7iAYtUA7iAYugWDAC5Q2DC4lMbcQlMbdwrSEUgQsASEghBgCIUghCgCJgQzABAUgQEACsgjngBvUghVADbgl4AKbQy2FMw9AAQxJAAvOlTg");
	this.shape_72.setTransform(884.9222,1043.115);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#39A3D7").s().p("EiF8BSbQ+Hq5026VQ006VlX9ZQlY9aaB5OUAaAgZOAw8ACfUAw7ACeAZ5AMSQYZJkVGmLUAT8gIGArzAB6UAr0AB7A5qAYSUA5rAYRgVkADjQ1jDjlSbYQlSbaxRRhUgRRARgggfgB/UggegCAgRPAA0UgQdACmgjtgBTUghfADvglwAKBQyEEzwVAAQxxAAvslsg");
	this.shape_73.setTransform(882.0544,1043.5606);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#39A3D7").s().p("EiGkBRyQ9+rQ0k6dQ0j6dlN8/QlO9BbE49UAbCgY9AwjACtUAwiACtAZcAMCQX2JJWImkUAVAgIcAr8ACoUAr9ACnA3yAX3UA3zAX2gVDAENQ1EEMlYbVQlYbWx3Q+Qx2Q9/7h2Q/8h2xrAmUgQ1AChgj0gA3UghpAECglnAJnQxVEbvtAAQyYAAwKmEg");
	this.shape_74.setTransform(879.1786,1044.0006);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#39A3D7").s().p("EiHLBRJQ91rn0T6lQ0S6llD8mQlE8ncG4sUAcFgYrAwJAC6UAwJAC7AZBALzQXTItXJm8UAWDgIxAsGADUUAsFADVA18AXbUA17AXagUjAE3Q0kE3lebRQlfbTycQaQycQZ/YhsQ/ZhsyHAYUgRNACcgj7gAcUghzAEXgldAJMQwkEEvFAAQzBABwomeg");
	this.shape_75.setTransform(876.2748,1044.4803);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#39A2D7").s().p("EiHzBQeQ9sr90B6tQ0C6sk48NQk68OdJ4bUAdIgYaAvvADJUAvwADIAYkALkQWwIRYLnUUAXHgJHAsPAECUAsOAEBA0EAXAUA0DAW/gUDAFhQ0EFglkbOQllbPzBP3QzCP2+1hjQ+2hjyjALUgRlACWgkCAABUgh+AEqglTAIzQv0DuucAAQzpAAxHm5g");
	this.shape_76.setTransform(873.3548,1045.0097);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#39A2D7").s().p("EiIaBP0Q9isUzx60Qzw61kv70Qkv70eL4KUAeLgYJAvWADXUAvVADWAYJALVQWNH2ZMntUAYLgJcAsYAEuUAsYAEvAyMAWkUAyMAWjgTkAGLQzkGLlqbKQlrbMznPTQzoPT+ShaQ+ShZy/gDUgR+ACRgkIAAdUgiIAE+glKAIYQvEDZt0AAQ0RAAxlnUg");
	this.shape_77.setTransform(870.434,1045.5503);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#39A2D7").s().p("EiJBBPJQ9Zspzg69Qzf69kk7aQkm7cfO34UAfNgX4Au9ADlUAu8ADkAXtALGQVqHaaOoGUAZOgJxAshAFcUAshAFcAwUAWIUAwVAWIgTEAG1QzEG0lwbHQlybI0MOwQ0NOw9vhRQ9whQzagQUgSXACMgkOAA5UgiTAFRglBAH+QuTDFtKAAQ07AAyDnxg");
	this.shape_78.setTransform(867.4901,1046.1481);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#39A2D7").s().p("EiJoBOeQ9QtAzO7FQzO7Fkb7BUgEbgbCAgQgXnUAgQgXmAujADyUAujADyAXQAK3QVIG/bPofUAaSgKGAsrAGIUAsqAGJAucAVtUAudAVsgSkAHfQykHfl3bDQl3bF0yOMQ0yOM9NhGQ9MhHz3geUgSuACHgkUABVUgieAFlgk4AHjQtjCysiAAQ1jAAyhoOg");
	this.shape_79.setTransform(864.5182,1046.758);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#39A2D7").s().p("EiKPBNzQ9HtXy97NQy97NkR6nUgERgapAhTgXWUAhTgXVAuKAEAUAuJAEBAW0AKnQUkGjcSo3UAbWgKcAszAG2UAszAG2AslAVRUAslAVQgSDAIKQyFIJl9a/Ql9bB1YNpQ1YNp8pg9Mgw8gBpUgTHACCgkbABwUgioAF5gkuAHKQs0Cfr4AAQ2NAAy+osg");
	this.shape_80.setTransform(861.5772,1047.4105);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#39A2D7").s().p("EiK2BNHQ8+tuys7UQyr7VkH6OUgEHgaQAiWgXEUAiVgXEAtwAEOUAtwAEOAWYAKZQUBGHdUpQUAcZgKxAs8AHjUAs8AHjAquAU1UAqtAU1gRjAI0QxlIzmDa8QmEa919NGQ19NF8Gg0Q8Hg00ug5UgTfAB9gkiACNUgiyAGNgkmAGvQsDCOrOAAQ23AAzcpMg");
	this.shape_81.setTransform(858.6078,1048.1201);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#39A2D7").s().p("EiLcBMbQ81uEyb7dQya7cj951UgD9gZ2AjYgW0UAjYgWzAtXAEdUAtWAEcAV8AKJQTfFseVpoUAdcgLHAtGAIQUAtFAIQAo2AUaUAo2AUZgREAJeQxEJdmKa4QmKa62iMiQ2jMi7jgqQ7kgr1KhGUgT3AB3gkpACpUgi8AGhgkcAGUQrUB+qlAAQ3gAAz5psg");
	this.shape_82.setTransform(855.6316,1048.8407);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#39A1D7").s().p("EiMDBLuQ8suayK7lQyJ7ljz5bUgDzgZdAkbgWiUAkbgWiAs9AErUAs9AEqAVgAJ6QS8FQfWqBUAeggLcAtPAI9UAtPAI9Am+AT+UAm+AT+gQkAKIQwkKHmQa1QmQa23IL/Q3JL/7AghQ7Agi1nhTUgUPABygkvADEUgjHAG1gkTAF6QqkBup6AAQ4LAA0WqNg");
	this.shape_83.setTransform(852.6583,1049.6226);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#39A1D7").s().p("EiMpBLBQ8juxx57sQx47tjp5CUgDpgZEAlegWRUAldgWQAskAE4UAsjAE4AVEAJrUASZAE1AgYgKaUAfkgLxAtYAJqUAtXAJqAlHATjUAlHATigQEAKyQwFKxmVaxQmXaz3uLcQ3uLb6dgYQ6dgY2ChhUgUoABtgk2ADhUgjRAHIgkJAFgQp0BgpRAAQ41AA0zqwg");
	this.shape_84.setTransform(849.6728,1050.4173);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#39A1D7").s().p("EiNQBKUQ8avHxn71Qxn70jf4pUgDfgYqAmhgWAUAmggV/AsKAFGUAsKAFGAUoAJcUAR1AEZAhagKyUAgogMHAthAKXUAtgAKXAjPATHUAjPATHgPkALcQvkLbmcauQmdav4TK4Q4UK456gOQ56gP2ehuUgVAABngk8AD9UgjcAHcgkAAFGQpFBSomAAQ5gAA1QrTg");
	this.shape_85.setTransform(846.6819,1051.2434);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#39A1D7").s().p("EiN3BJmQ8RvdxW79QxW78jU4QUgDVgYRAnjgVuUAnigVvArxAFVUArwAFUAUMAJMUARTAD+AicgLLUAhrgMdAtqALFUAtqALEAhXASsUAhYASrgPEAMFQvFMGmiaqQmjas45KVQ45KU5XgEQ5XgF26h9UgVZABjglDAEYUgjmAHwgj2AEsQoWBFn7AAQ6LAA1tr3g");
	this.shape_86.setTransform(843.7144,1052.1319);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#39A1D7").s().p("EiOdBI4Q8Iv0xF8EQxF8FjK32UgDLgX4AolgVdUAomgVdArXAFiUArXAFiATwAI+UAQwADiAjdgLjUAiugMzAt0ALyUAtzALxAffASQQfgSQukMvQukMwmpanQmpao5eJxQ5fJy40AEQ40AF3WiKUgVxABdglJAE1UgjxAIDgjtAERQnnA6nQAAQ62AA2Jscg");
	this.shape_87.setTransform(840.7217,1053.0325);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#39A1D7").s().p("EiPEBIKQ7+wLw08MQw08LjA3fUgDBgXeApogVMUApogVMAq+AFwUAq9AFwATUAIvUAQNADGAkfgL8UAjygNHAt8AMfUAt8AMeAdpAR0QdoR1uENZQuFNZmvakQmvak6EJOQ6EJO4RAOQ4RAO3yiXUgWJABYglQAFRUgj7AIWgjkAD4Qm3AvmlAAQ7iAA2mtCg");
	this.shape_88.setTransform(837.7332,1053.9787);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#39A0D7").s().p("EiPrBHwQ71whwj8UQwi8Ui33FUgC3gXFAqrgU6UAqrgU7AqkAF+UAqkAF+AS4AIfUAPqACrAlggMUUAk2gNdAuGANMUAuFANLAbwARZQbxRZtkODQtlODm1ahQm1ag6qIrQ6pIr3uAXQ3uAX4OilUgWiABTglWAFtUgkFAIqgjbADeQmIAml5AAQ8OAA3Dtqg");
	this.shape_89.setTransform(834.7565,1052.8641);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#39A0D7").s().p("EiQRBHaQ7tw3wR8cQwR8cit2rUgCtgWsArugUpUArtgUqAqLAGMUAqKAGMAScAIQUAPHACPAmigMsUAl6gNzAuOAN5UAuPAN5AZ5AQ9QZ5Q9tFOtQtEOum8adQm7ad7PIHQ7PIH3LAhQ3LAh4qiyUgW6ABNgldAGJUgkPAI+gjSADDQlZAelPAAQ85AA3euTg");
	this.shape_90.setTransform(831.7774,1051.3102);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#39A0D7").s().p("EiQ4BHEQ7kxNwA8lQwA8jii2SUgCjgWTAswgUYUAswgUYApxAGaUApxAGaASAAIBUAOkABzAnkgNFUAm9gOIAuYAOmUAuXAOmAYCAQhQYBQislPXQskPYnCaZQnCaa70HkQ71Hj2oArQ2oAq5FjAUgXSABIglkAGlUgkaAJSgjIACpQkqAWkiAAQ9nAA36u8g");
	this.shape_91.setTransform(828.8068,1049.8048);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#39A0D7").s().p("EiRfBGvQ7axlvv8sQvv8riZ15UgCZgV5AtzgUHUAtzgUHApYAGoUApXAGoARkAHxUAOBABYAomgNeUAoAgOdAuhAPTUAugAPTAWKAQGQWKQGsEQBQsFQBnIaXQnIaW8aHAQ8aHB2FAzQ2FA05ijNUgXqABDglrAHAUgkjAJmgjAACPQj7AQj1AAQ+UAA4Wvmg");
	this.shape_92.setTransform(825.8669,1048.3397);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#39A0D7").s().p("EiSGBGYQ7Rx7ve80Qve80iP1fUgCOgVgAu1gT2UAu2gT1Ao+AG1UAo+AG2ARHAHjUANfAA8ApngN2UApEgOzAuqAQAUAuqAQAAUSAPqQUSPrrkQrQrlQrnOaTQnOaT9AGdQ9AGd1hA9Q1iA95+jbUgYCAA+glyAHdUgkuAJ5gi2AB0QjMALjJAAQ/BAA4ywRg");
	this.shape_93.setTransform(822.9013,1046.9136);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#39A0D7").s().p("EiStBGBQ7IyRvN89QvM87iF1GUgCFgVHAv5gTkUAv3gTlAolAHEUAolAHEAQrAHTUAM8AAhAqpgOPUAqHgPIAuzAQtUAuzAQtASbAPPQSaPPrERVQrFRVnUaQQnVaP9lF6Q9lF50/BHQ0/BG6ZjoUgYbAA4gl4AH5Ugk4AKNgitABaQieAGicAAQ/vAA5Nw9g");
	this.shape_94.setTransform(819.9762,1045.5488);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#39A0D7").s().p("EiTUBFpQ6/you89EQu79Dh70tUgB7gUtAw7gTUUAw7gTTAoLAHSUAoLAHSAQPAHEUAMZAAFArrgOoUArLgPdAu8ARaUAu8ARaAQjAOzQQjO0qlR/QqlR/naaMQnaaM+LFWQ+LFW0cBQQ0cBQ61j2UgYzAA0gl/AIUUglCAKhgikABAQhwADhvAAUggcAAAgZogRrg");
	this.shape_95.setTransform(817.0951,1044.2178);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#399FD7").s().p("EiT8BFQQ62y+ur9MQuq9Lhx0UUgBwgUUAx9gTCUAx+gTCAnyAHgUAnxAHgAPzAG1UAL2gAXAssgPAUAsPgPzAvGASIUAvFASHAOrAOXQOrOYqFSqQqFSpngaIQnhaI+wEzQ+wEzz5BZQz5BZ7RkDUgZMAAugmFAIxUglNAK1giaAAlIiCACUghMAAAgaDgSbg");
	this.shape_96.setTransform(814.2368,1042.959);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#399FD7").s().p("EiUlBE3Q6tzUuZ9UQuZ9Thnz7UgBmgT6AzAgSxUAzAgSxAnYAHuUAnYAHtAPYAGmUALRgAyAtvgPYUAtTgQJAvOAS1UAvOAS0AM0AN8QM0N8plTUQplTTnnaFQnnaE/VEQQ/WEPzWBjQzWBj7tkRUgZkAApgmMAJMUglXALJgiRAALIglABUgh7AAAgafgTLg");
	this.shape_97.setTransform(811.4348,1041.7516);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#399FD7").s().p("EhYiBYZUgiIgAQgakgTqQ6kzruI9dQuI9bhdzhUgBcgThA0DgSgUA0CgSfAm/AH7UAm/AH8AO7AGXUAKvgBOAuwgPxUAuWgQeAvYATiUAvXAThAK8ANgQK8NhpET+QpGT9ntaBQntaB/7DsQ/7DtyzBsQyzBs8JkfUgZ8AAkgmTAJpUgkxALNghgAAAIhYAAg");
	this.shape_98.setTransform(808.7082,1040.5566);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#399FD7").s().p("EhZeBYwUgh/gAqgabgUBQ6b0Ct39kQt39jhSzIUgBTgTIA1GgSOUA1FgSOAmlAIJUAmlAIKAOgAGHUAKLgBpAvzgQKUAvagQzAvgAUPUAvhAUOAJEANFQJFNFolUoQomUnnzZ+UgHzAZ9gghADJUgghADJgSPAB1QyQB28lksUgaVAAegmZAKFUgjuALJggYAAAQhzAAhxgCg");
	this.shape_99.setTransform(806.0933,1039.4857);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#399FD7").s().p("EhacBZGUgh2gBEgaSgUYQ6S0Ytl9sQtm9rhJyvUgBJgSuA2JgR+UA2IgR9AmMAIYUAmLAIXAODAF5UAJpgCFAw1gQiUAwdgRJAvqAU8UAvpAU7AHNAMqQHNMpoFVSQoGVRn5Z6UgH5AZ6ghHACmUghGAClgRtAB/QxtB/9Bk5UgasAAZgmgAKgUgizALGgfaAAAQiwAAiugFg");
	this.shape_100.setTransform(803.6148,1038.481);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#399FD7").s().p("EhbdBZbUghsgBegaJgUvQ6J0utU90QtV9zg+yVUgA/gSWA3LgRsUA3LgRrAlyAIlUAlyAIlANnAFqUAJGgCgAx2gQ8UAxhgReAvzAVpUAvyAVpAFWAMOQFVMOnlV7QnmV7n/Z3UgIAAZ3ghrACCUghsACCgRKACIQxKCI9dlGUgbFAAUgmmAK8Ugh/ALEgehAAAQjoAAjlgKg");
	this.shape_101.setTransform(801.3836,1037.5054);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#399FD7").s().p("EhchBZwUghjgB5gaAgVFQ6A1EtD98QtE97g0x8UgA1gR8A4OgRbUA4NgRbAlZAI0UAlYAIzANLAFaMA7bgUPUAykgR0Av9AWWUAv7AWWADeALyQDeLznGWlMgPLAwZUgIGAZzgiRABeUgiRABfgQnACSQwnCR95lUUgbdAAPgmtALZUghQALCgdvAAAQkaAAkUgPg");
	this.shape_102.setTransform(799.5708,1036.6066);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#399ED7").s().p("EhdtBaEUghagCSgZ3gVcQ521bsy+EQsz+DgqxiUgArgRjA5QgRKUA5QgRJAlAAJBUAk/AJCAMvAFLUAIAgDYAz5gRsUAzogSJAwFAXDUAwFAXDABmALXQBmLXmlXPQmmXPoMZwUgILAZvgi3AA8Ugi3AA7gQEACbQwECb+VlhUgb1AAJgm0AL1UgglALCgdCAAAQlHAAlAgWg");
	this.shape_103.setTransform(798.4938,1035.7303);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#399ED7").s().p("EhfKBaZUghQgCtgZugVyQ5u1ysh+MQsh+KggxKUgAhgRJA6TgQ4UA6TgQ5AkmAJQUAklAJPAMTAE8UAHdgDzA07gSFUA0sgSfAwOAXxUAwOAXwgARAK7QgSK7mFX6QmGX5oSZsUgISAZsgjdAAYUgjcAAYgPhAClQvhCk+wlvUgcOAAEgm7AMRUggAALDgcYAAAQlwAAlngdg");
	this.shape_104.setTransform(799.0905,1034.8885);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#399ED7").s().p("EhgzBatUghHgDIgZlgWIQ5l2IsP+UQsQ+TgXwwUgAXgQwA7WgQnUA7VgQnAkNAJdUAkMAJeAL3AEsUAG6gEOA19gSeUA1vgS0AwXAYeUAwYAYdgCKAKfQiJKgllYkQlmYjoYZpUgIZAZogkBgALUgkDgAMgO9ACuQu+Cu/Nl9UgcmgABgnBAMtQ/eLE7zAAQmWAAmJgkg");
	this.shape_105.setTransform(800.9355,1034.0977);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#399ED7").s().p("EhihBbAUgg9gDigZcgWeQ5c2fr++cQr/+agNwXUgAMgQXA8YgQWUA8YgQWAjzAJsUAjzAJrALbAEdUAGXgEqA2+gS2UA2zgTJAwhAZKUAwgAZKgEBAKEQkBKElFZOQlGZOofZlUgIeAZkgkngAuUgkogAvgObAC3QuaC3/pmKUgc+gAGgnIANJQ+/LG7QAAQm5AAmqgtg");
	this.shape_106.setTransform(803.1769,1033.3169);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#399ED7").s().p("EhkRBbTUgg1gD8gZTgW1Q5S21rt+kQru+igDv+UgACgP9A9bgQFUA9bgQEAjZAJ5UAjZAJ5AK/AEOUAF0gFFA4AgTPUA33gTfAwpAZ4UAwqAZ3gF5AJoQl4JpkmZ4QkmZ3okZiUgIlAZhglNgBSUglNgBSgN4ADBUgN3ADAggFgGYUgdWgALgnPANlQ+iLI6xABQnZAAnGg3g");
	this.shape_107.setTransform(805.7808,1032.577);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#399ED7").s().p("EhmGBbmUggrgEWgZJgXMQ5K3Lrc+sQrd+rAIvkUAAHgPkA+egPzUA+dgP0AjAAKHUAjAAKIAKjAD/UAFRgFhA5CgToUA46gT0AwzAalUAwyAakgHwAJNQnwJNkGaiQkGahoqZeUgIrAZeglzgB2UglzgB1gNUADKUgNVADKggggGlUgdvgARgnVAOBQ+JLM6UAAQn2AAnhhAg");
	this.shape_108.setTransform(808.7206,1031.8572);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#399DD7").s().p("Ehn8Bb5UggigEwgZBgXiQ5A3irL+0QrM+yASvLUAARgPLA/hgPiUA/ggPiAimAKVUAimAKVAKHADwUAEvgF9A6DgUAUA59gUJAw8AbRUAw8AbRgJoAIyQpnIxjmbMQjmbMoxZaUgIxAZagmYgCZUgmYgCYgMyADTUgMyADUgg8gGzUgeHgAWgncAOdQ9xLP54AAQoSAAn5hKg");
	this.shape_109.setTransform(811.9162,1031.1424);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#399DD7").s().p("Ehp2BcMUggYgFKgY4gX5Q4334q6+8Qq6+7AbuxUAAcgOyBAjgPRUBAjgPRAiNAKjUAiMAKjAJrADhUAEMgGYA7FgUYUA7AgUgAxGAb/UAxEAb/gLfAIVQrfIWjGb2QjGb2o3ZXUgI4AZWgm9gC8Ugm+gC8gMOADdUgMPADdghYgHAUgeggAbgniAO4Q9cLT5fAAQosAAoPhUg");
	this.shape_110.setTransform(815.3677,1030.4466);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#399DD7").s().p("EhrxBceUggPgFkgYvgYPQ4u4Pqp/EQqp/CAmuZUAAlgOYBBmgPAUBBlgO/Ah0AKxUAhzAKxAJOADRUADpgG0A8HgUxUA8FgU0AxOAcsUAxOAcrgNXAH6QtXH7imcgQimcfo+ZUUgI9AZTgnjgDgUgnjgDfgLsADmUgLrADmgh0gHNUge4gAhgnpAPVQ9ILX5IAAQpEAAojhfg");
	this.shape_111.setTransform(819.0285,1029.754);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#399DD7").s().p("EhtvBcxUggGgF/gYlgYlQ4l4mqY/LQqY/LAwt/UAAwgN/BCogOuUBCogOvAhaAK/UAhZAK/AIzADDUADGgHQA9IgVKUA9IgVJAxYAdYUAxXAdZgPPAHfQvOHeiGdLQiGdJpEZQUgJEAZQgoIgEDUgoJgEDgLJADvUgLIADwgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo2hpg");
	this.shape_112.setTransform(822.9028,1029.0894);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#399DD7").s().p("EhtvBcGUggGgF/gYlgYmQ4l4lqY/MQqY/KAuuZUAAugOZBCogOyUBCogOyAhcALdUAhbALcAIzADCUADGgHPA9SgUQUA9RgURAxPAckUAxOAcjgPPAHbQvPHaiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_113.setTransform(822.9091,1033.4101);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#399DD7").s().p("EhtvBbbUggGgF/gYlgYmQ4l4lqY/MQqY/KAtuzUAAsgOyBCogO2UBCngO1AheAL5UAhdAL6AIzADCUADGgHPA9bgTXUA9bgTXAxGAbvUAxGAbugPQAHWQvQHWiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_114.setTransform(822.9277,1037.7012);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#399DD7").s().p("EhtvBawUggGgF/gYlgYlQ4l4mqY/LQqY/LArvMUAArgPMBCngO5UBCogO5AhfAMXUAhfAMWAIzADDUADGgHQA9lgSdUA9lgSeAw9Aa6UAw8Aa5gPRAHSQvQHSiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_115.setTransform(822.9109,1041.9951);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#399DD7").s().p("EhtvBaFUggGgF/gYlgYlQ4l4mqY/LQqY/LApvlUAApgPmBCogO9UBCngO9AhhAM0UAhhAM0AIzADDUADGgHQA9ugRkUA9vgRkAw0AaFUAw0AaEgPSAHNQvRHOiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_116.setTransform(822.929,1046.2882);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#399DD7").s().p("EhtvBZaUggGgF/gYlgYlQ4l4mqY/LQqY/LAov/UAAngQABCngPAUBCngPAAhjANRUAhjANRAIzADDUADGgHQA94gQqUA94gQrAwrAZQUAwrAZPgPSAHJQvSHJiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_117.setTransform(822.934,1050.5793);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#399DD7").s().p("EhtvBYwUggGgF/gYlgYmQ4l4lqY/MQqY/KAmwZUAAmgQZBCngPEUBCngPEAhlANuUAhkANvAIzADCUADGgHPA+CgPxUA+BgPyAwiAYbUAwiAYagPSAHEQvTHFiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_118.setTransform(822.9428,1054.8478);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#399DD7").s().p("EhtvBYFUggGgF/gYlgYmQ4l4lqY/MQqY/KAlwzUAAkgQzBCngPHUBCmgPHAhnAOLUAhmAOMAIzADCUADGgHPA+LgO4UA+LgO4AwaAXmUAwZAXlgPUAHAQvTHAiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_119.setTransform(822.9476,1059.1244);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#399DD7").s().p("EhtvBXaUggGgF/gYmgYlQ4l4mqX/LQqY/LAjxMUAAigRNBCngPLUBCmgPKAhoAOoUAhpAOpAIyADDUADGgHQA+VgN+UA+UgN+AwRAWwUAwRAWwgPUAG8QvVG7iGdLQiGdJpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_120.setTransform(822.9653,1063.3886);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#399DD7").s().p("EhtvBW+UggGgF/gYlgYmQ4l4lqY/MQqY/KAhxmUAAhgRnBCngPOUBCmgPOAhqAPGUAhqAPGAIzADCUADGgHPA+egNFUA+egNFAwIAV7UAwIAV7gPVAG4QvVG3iGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_121.setTransform(822.9472,1066.2148);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#399DD7").s().p("EhtvBXXUggGgF/gYmgYlQ4l4mqX/LQqY/LAfyAUAAfgR/BCngPSUBClgPSAhtAPjUAhsAPjAIyADDUADGgHQA+ogMLUA+ogMMAv/AVGUAv/AVGgPWAGzQvWGziGdLQiGdJpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_122.setTransform(822.9644,1063.6947);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#399DD7").s().p("EhtvBXwUggGgF/gYmgYlQ4l4mqX/LQqY/LAeyZUAAdgSaBCmgPVUBCmgPWAhuAQBUAhuAQAAIyADDUADHgHQA+xgLSUA+xgLSAv2AURUAv2AURgPWAGvQvXGviGdKQiGdJpEZQUgJDAZQgoJgEDUgoIgEDgLJADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_123.setTransform(822.9554,1061.1682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},556).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sea_top = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sea_top
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#399DD7").s().p("EhmoBZvUggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AMGgZQUAMGgZQA2VgBkUA2WgBkAfhAM2QfiM2IxDCUACygLTApjgK+UApjgK+AqcACiUAqbACjAIgAXaQIgXbA3f7QA3f6pEZQUgJEAZQgoIgEEUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape.setTransform(777.49,1048.5059);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#399DD7").s().p("EhmtBZRUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AMFgZYUAMFgZYA2WgBiUA2VgBiAfjAM8QfiM8ItC6UAC3gLCApkgK3UApkgK3Ar3ADfUAr2ADgAHPAWaQHOWaAsf0QAsfxpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_1.setTransform(777.9277,1051.499);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#399ED7").s().p("EhmxBY2UggGgF/gYmgYmUgYlgYlgHjgi7UgHjgi8AMDgZhUAMDgZgA2XgBgUA2VgBgAfkANDQfkNCIoCxUAC8gKwAplgKxUApkgKwAtTAEcUAtRAEdAF9AVbQF9VZAhfrQAifqpEZQUgJDAZPgoJgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfQgAmgnwAPxQ81Lb4zAAQpaAAo1hpg");
	this.shape_2.setTransform(778.3779,1054.2226);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#399ED7").s().p("Ehm2BYdUggGgF/gYlgYmUgYlgYlgHjgi7UgHkgi8AMCgZpUAMCgZpA2WgBdUA2XgBeAfkANJQflNIIkCpUADBgKfApmgKqUAplgKqAutAFaUAuuAFaAErAUaQErUaAWfjQAXfhpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_3.setTransform(778.8441,1056.7474);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#399ED7").s().p("Ehm7BYPUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AMAgZxUAMAgZxA2XgBbUA2XgBcAfmANPQfmNOIfChUADHgKOAplgKjUApmgKjAwJAGXUAwJAGXADZATbQDZTZANfaQAMfZpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lc4zAAQpaAAo1hqg");
	this.shape_4.setTransform(779.3512,1058.0581);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#399ED7").s().p("EhnABYWUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL/gZ5UAL+gZ5A2YgBZUA2XgBaAfnANVQfnNUIbCYUADLgJ8ApngKdUApmgKcAxkAHVUAxkAHUACIASaQCHSaACfSQACfQpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lc4zAAQpaAAo1hqg");
	this.shape_5.setTransform(779.853,1057.3589);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#399FD7").s().p("EhnGBYdUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL+gaBUAL9gaCA2YgBXUA2XgBXAfoANbQfoNaIXCQUADRgJrApngKWUApmgKWAzAAISUAy/AISAA2ARaQA2RZgJfKQgJfIpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lc4zAAQpaAAo1hqg");
	this.shape_6.setTransform(780.4249,1056.6588);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#399FD7").s().p("EhniBYkUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL8gaKUAL7gaJA2ZgBVUA2XgBVAfqANhQfpNgISCHUADWgJZApngKPUApogKPA0bAJPUA0aAJPgAbAQaQgdQZgTfBQgTfApEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_7.setTransform(783.2666,1055.9745);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#399FD7").s().p("EhoXBYrUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL6gaSUAL6gaSA2ZgBSUA2YgBTAfqANnQfrNmINB/UADcgJIApogKJUApogKIA12AKMUA12AKNgBtAPZQhuPZgee5Qgee4pEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_8.setTransform(788.5612,1055.273);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#399FD7").s().p("EhpNBYyUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8AL5gaaUAL4gaaA2ZgBRUA2YgBQAfsANtQfsNsIIB3UADhgI3AppgKCUApogKCA3SALKUA3SALKgDAAOZQi/OZgpexQgoevpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo0hpg");
	this.shape_9.setTransform(793.9995,1054.5706);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#39A0D7").s().p("EhqGBY5UggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL4gaiUAL3gajA2ZgBOUA2ZgBOAftANzQfsNyIEBuUADngIlAppgJ8UAppgJ7A4tAMHUA4tAMHgERANaQkSNYgzepQgzenpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_10.setTransform(799.6015,1053.8886);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#39A0D7").s().p("Ehq/BZAUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL2garUAL2gaqA2agBMUA2ZgBNAfuAN5QftN5IABmUADrgIUApqgJ1UApqgJ0A6IANEUA6IANEgFiAMaQlkMYg9egQg+efpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_11.setTransform(805.3272,1053.181);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#39A0D7").s().p("Ehr5BZHUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8AL1gazUAL0gazA2agBJUA2agBLAfvAN/QfuN/H8BdUADwgICApqgJuUApqgJuA7kAOCUA7kAOBgG1ALZQm1LZhHeYQhJeWpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_12.setTransform(811.1413,1052.4978);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#39A1D7").s().p("Ehs0BZOUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8ALzga7UALyga7A2bgBIUA2agBIAfwAOFQfwOFH3BVUAD1gHxAprgJoUAprgJnA8/AO/UA8/AO/gIGAKZQoHKYhSeQQhTeOpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_13.setTransform(817.0719,1051.7926);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#39A1D7").s().p("EhtwBZVUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8ALxgbDUALxgbEA2bgBFUA2bgBGAfxAOLQfxOLHzBMUAD6gHfAprgJhUApsgJhA+aAP9UA+aAP8gJXAJZQpZJYhdeHQhdeGpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb40AAQpaAAo0hpg");
	this.shape_14.setTransform(823.0879,1051.0867);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#39A1D7").s().p("EhutBZcUggGgF/gYmgYlUgYlgYmgHjgi7UgHjgi8ALwgbMUALvgbLA2cgBDUA2bgBEAfyAORQfyORHuBEUAEAgHOApsgJaUAprgJaA/2AQ5UA/2AQ6gKqAIYQqqIYhnd/Qhod+pEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_15.setTransform(829.1669,1050.3985);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#39A1D7").s().p("EhvrBZjUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALvgbUUALugbUA2cgBBUA2bgBBAfzAOXQfzOXHqA7UAEGgG8AprgJUUAptgJTBBRAR3UBBRAR3gL7AHYQr8HYhyd3Qhzd1pDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_16.setTransform(835.3274,1049.6913);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#39A2D7").s().p("EhwpBZqUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALtgbcUALtgbcA2cgA/UA2cgA/Af0AOdQf0OdHmAzUAELgGrApsgJNUAptgJNBCsAS0UBCtAS0gNNAGZQtOGXh9dvQh9dtpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_17.setTransform(841.5481,1048.9833);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#39A2D7").s().p("EhxoBZxUggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALsgbkUALrgblA2cgA8UA2dgA9Af1AOjQf1OjHhAqUAERgGZApsgJHUAptgJGBEIATyUBEIATxgOfAFYQufFYiHdmQiIdlpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_18.setTransform(847.8066,1048.2966);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#39A2D7").s().p("EhynBZ4UggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALqgbtUALqgbsA2dgA7UA2cgA7Af3AOqQf2OpHdAiUAEVgGIAptgJAUApugI/BFkAUvUBFjAUugPxAEYQvxEYiRddQiTddpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_19.setTransform(854.1329,1047.5844);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#39A3D7").s().p("EhznBZ/UggGgF/gYlgYlUgYlgYmgHjgi7UgHkgi8ALpgb1UALogb1A2dgA4UA2dgA5Af4AOwQf3OvHYAZUAEbgF2ApugI5UApugI5BG/AVsUBG+AVsgRCADYQxDDXicdWQiddUpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_20.setTransform(860.5034,1046.8967);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#39A3D7").s().p("Eh0nBaGUggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALngb9UALngb9A2egA2UA2dgA3Af5AO2Qf4O1HUARUAEggFlApugIzUApvgIyBIaAWqUBIaAWpgSUACYQyVCXimdNQiodMpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_21.setTransform(866.908,1046.1861);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#39A3D7").s().p("Eh1nBaNUggGgF/gYmgYlUgYlgYmgHjgi8UgHjgi7ALlgcFUALlgcGA2egA0UA2egA0Af6AO8Qf6O7HOAJUAEmgFVApvgIrUApvgIsBJ2AXnUBJ1AXngTmABXQzmBXixdFQiydEpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_22.setTransform(873.3575,1045.4748);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#39A3D7").s().p("Eh2oBaUUggGgF/gYlgYlUgYlgYmgHjgi8UgHkgi7ALkgcOUALkgcNA2egAyUA2egAyAf7APCQf7PBHKAAUAErgFDApvgIkUApxgIlBLRAYkUBLQAYkgU3AAXQ04AXi8c9Qi9c7pDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfPgAlgnxAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_23.setTransform(879.8424,1044.7831);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#39A4D7").s().p("Eh3pBabUggGgF/gYmgYlUgYlgYmgHjgi8UgHjgi7ALigcWUALigcWA2fgAvUA2fgAwAf8APIQf8PHHFgIUAExgEyApvgIeUApxgIeBMsAZhUBMsAZhgWJgAoQ2KgqjGc1QjHczpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_24.setTransform(886.3575,1044.0706);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#39A4D7").s().p("Eh4qBaiUggGgF/gYmgYlUgYlgYmgHjgi8UgHjgi7ALhgceUALggceA2ggAuUA2fgAtAf9APOQf9PNHBgRUAE1gEgApxgIXUApxgIYBOHAafUBOIAaegXbgBpQ3chpjRcsQjRcrpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lc40AAQpaAAo0hqg");
	this.shape_25.setTransform(892.8867,1043.3575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#39A4D7").s().p("Eh5sBapUggGgF/gYmgYlUgYlgYmgHjgi8UgHjgi7ALfgcmUALfgcnA2ggArUA2fgArAf/APTQf+PUG8gZUAE7gEPApxgIRUApygIRBPjAbdUBPiAbbgYsgCpQ4uipjbcjQjccjpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lb4zABQpaAAo1hqg");
	this.shape_26.setTransform(899.459,1042.6665);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#39A4D7").s().p("Eh6uBawUggGgF+gYmgYmUgYlgYlgHjgi9UgHjgi6ALegcvUALdgcvA2ggApUA2ggAqAf/APaUAgAAPaAG4gAhUAFAgD+ApxgIKUApzgIKBQ+AcZUBQ+AcZgZ+gDpQ5/jqjmccQjncapEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lc4zAAQpaAAo1hqg");
	this.shape_27.setTransform(906.0637,1041.9502);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#39A5D7").s().p("Eh7wBa3UggGgF/gYmgYlUgYlgYmgHjgi8UgHjgi7ALcgc3UALcgc3A2hgAmUA2ggAoAgAAPgUAgBAPgAGzgAqUAFGgDsApxgIDUApzgIEBSaAdXUBSaAdWgbRgEpQ7QkqjxcTQjxcSpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfPgAlgnxAPwQ81Lc4zAAQpaAAo1hqg");
	this.shape_28.setTransform(912.6696,1041.2584);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#39A5D7").s().p("Eh8yBa+UggGgF+gYmgYmUgYlgYlgHjgi8UgHjgi7ALagdAUALbgc/A2hgAlUA2hgAkAgBAPmUAgCAPmAGvgAzUAFKgDaApzgH9UApzgH9BT1AeTUBT1AeUgcigFqQ8ilpj8cLQj7cKpEZPUgJEAZQgoIgEDUgoJgEDgLIADwUgLJADwgiQgHbUgfPgAmgnxAPxQ81Lb4zAAQpaAAo1hqg");
	this.shape_29.setTransform(919.2935,1040.5269);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#39A5D7").s().p("Eh9iBaXQ/9mX4T4uUgYTgYugHYgihUgHZgigAMigctUAMhgctA2GgAWUA2FgAWAfkAPWQfcPJH1hNUAGSgDxAp8gHNUAp+gHNBR2Ad2UBR2Ad3gcAgE9Q8Bk+kBcIQkDcGprYqUgJsAYqgnjgD5UgnkgD5gLmADiUgLiADqgiXgG9UgfagARgnnAPVQ8BK14MAAQqAAApXh3g");
	this.shape_30.setTransform(916.816,1040.5702);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#39A5D7").s().p("Eh+RBZwQ/zmv4B42UgYBgY3gHOgiFUgHOgiHANogcbUANogcaA1rgAHUA1rgAHAfGAPFQe3OsI6hnUAHagEIAqGgGdUAqHgGdBP3AdZUBP4AdZgbfgEQQ7ekRkJcDQkJcDqTYFUgKTAYFgm+gDwUgm/gDvgMDADUUgL8ADkgifgGfUgfkAAEgneAO5Q7MKQ3jAAQqpAAp4iFg");
	this.shape_31.setTransform(914.2558,1040.6322);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#39A5D7").s().p("Eh+/BZHQ/qnG3u4/UgXvgY/gHDghqUgHEghsAOvgcJUAOvgcIA1QAAIUA1PAAIAeoAO1QeTOPKAiCUAIhgEeAqQgFtUAqQgFuBN5Ac8UBN5Ac8ga9gDkQ69jkkPcAQkPb/q7XfUgK7AXfgmZgDlUgmagDlgMhADFUgMWADfgilgGCUgfwAAZgnTAOdQ6YJt27AAQrQAAqaiWg");
	this.shape_32.setTransform(911.6277,1040.7216);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#39A4D7").s().p("Eh/tBYfQ/fne3d5HUgXcgZIgG5ghPUgG5ghRAP2gb2UAP1gb2A01AAWUA00AAWAeLAOmQdtNxLGibUAJpgE1AqZgE+UAqagE9BL6AcfUBL6AcegabgC3Q6bi4kVb8QkWb7rjW6UgLjAW6gl0gDbUgl0gDbgM/AC2UgMwADagisgFlUgf6AAvgnKAOBQ5jJJ2TAAQr3AAq9img");
	this.shape_33.setTransform(908.912,1040.8415);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#39A4D7").s().p("EiAaBX3Q/Wn23K5QUgXLgZQgGtgg1UgGvgg2AQ9gbkUAQ7gbkA0aAAmUA0aAAlAdsAOWQdJNTMLi1UAKwgFMAqkgEOUAqkgEOBJ7AcCUBJ7AcCgZ5gCLQ56iLkbb3Qkdb4sLWVUgMKAWUglPgDRUglPgDRgNdACoUgNJADUgizgFHUggGABDgnAANmQ4vIn1qAAQsfAArei3g");
	this.shape_34.setTransform(906.1742,1040.9832);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#39A4D7").s().p("EiBHBXNQ/MoN245ZUgW4gZYgGjggaUgGkggbASDgbRUASCgbSAz/AA0UAz/AA0AdPAOFQcjM3NRjPUAL3gFjAqugDeUAqtgDeBH9AblUBH8AbkgZXgBeQ5Yhfkib0Qkjb0syVvUgMzAVvgkqgDIUgkqgDHgN6ACaUgNjADPgi6gEpUggRABYgm2ANJQ36IG1BABQtIAAsAjLg");
	this.shape_35.setTransform(903.3509,1041.1504);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#39A4D7").s().p("EiBzBWkQ/Col2m5hUgWmgZggGZggAUgGZggAATKgbAUATJga/AzkABDUAzjABDAcxAN1Qb/MaOWjqUAM/gF5Aq3gCuUAq4gCvBF9AbIUBF+AbHgY2gAyQ41gykpbwQkqbxtaVJUgNaAVJgkFgC9UgkFgC9gOXACMUgN9ADJgjCgEMUggbABtgmsAMuQ3GHl0YAAQtxAAshjdg");
	this.shape_36.setTransform(900.5046,1041.3975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#39A4D7").s().p("EiCeBV7Q+5o+2U5pQ2U5pmO/kQmO/mUQ6tUAUQgatAzJABSUAzIABRAcUANmQbZL8PckEUAOHgGPArBgB/UArBgB/BD+AaqUBD/AaqgYTgAFQ4UgFkwbsQkwbtuCUkUgOCAUjgjfgCzUgjggCzgO1AB+UgOXADDgjIgDuUggnACCgmiAMSQ2THGzvAAQuZAAtBjxg");
	this.shape_37.setTransform(897.6132,1041.6421);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#39A4D7").s().p("EiDJBVRQ+wpW2B5xQ2C5ymD/JQmE/LVX6bUAVWgabAyuABhUAyuABgAb1ANVQa1LfQhkdUAPPgGnArKgBOUArLgBPBCAAaNUBCAAaMgXyAAoQ3yAnk2boQk3bpupT/UgOqAT+gi6gCpUgi7gCpgPTABvUgOwAC+gjQgDQUggxACWgmZAL2Q1fGozFAAQvCAAtikGg");
	this.shape_38.setTransform(894.6819,1041.9239);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#39A3D7").s().p("EiD0BUmQ+mpt1w56Q1v55l5+vQl5+wWe6JUAWdgaIAyTABvUAySABvAbYANFQaQLCRnk4UAQWgG9ArUgAfUArUgAfBABAZwUBABAZvgXPABUQ3QBUk9blQk+blvRTZUgPRATZgiWgCgUgiVgCfgPxABhUgPKAC4gjWgCyUgg8ACsgmPALaQ0rGKycAAQvrAAuDkdg");
	this.shape_39.setTransform(891.7192,1042.2467);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#39A3D7").s().p("EiEfBT7Q+cqF1d6CQ1d6Clv+UQlu+VXk53UAXkgZ2Ax4AB+UAx3AB+Aa6AM1QZrKlSslSUARegHUAreAARUAreAARA+CAZSUA+DAZSgWuACBQ2uCAlEbhQlEbiv5SzUgP5ASzghwgCVUghxgCVgQOABSUgPjACzgjegCVUghHADBgmFAK+Qz4FvxyAAQwUAAukk1g");
	this.shape_40.setTransform(888.7298,1042.6195);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#39A3D7").s().p("EiFJBTQQ+Tqd1L6KQ1L6Llk95Qlk96Yr5lUAYrgZkAxdACNUAxcACNAadAMlQZFKHTylrUASmgHrArnABBUAroABAA8DAY1UA8EAY1gWMACtQ2MCtlKbdQlLbewhSOUgQhASOghLgCLUghLgCMgQsABFUgP9ACtgjlgB3UghSADVgl7AKjQzEFTxIAAQw9AAvFlNg");
	this.shape_41.setTransform(885.7047,1043.0222);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#39A3D7").s().p("EiF0BSlQ+Jq1056TQ046TlZ9fQla9fZy5SUAZxgZSAxCACcUAxBACbAZ/AMVQYgJqU3mFUATugICArxABxUAryABwA6EAYYUA6FAYYgVqADZQ1rDalQbZQlRbaxJRpUgRIARoggmgCBUggngCCgRJAA3UgQXACngjsgBZUghdADqglxAKHQyQE5wdAAQxoAAvmlmg");
	this.shape_42.setTransform(882.7055,1043.4562);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#39A3D7").s().p("EiGdBR5Q+ArM0m6cQ0n6clO9DQlP9Fa45AUAa4gY/AwnACqUAwmACrAZhAMFQX7JMV9mfUAU2gIYAr7ACgUAr6ACgA4GAX7UA4GAX6gVIAEGQ1JEGlXbWQlXbXxxRDUgRwARCggBgB3UggBgB3gRnAAnUgQxACigjzgA7UghoAD/glnAJrQxcEfvzAAQyTAAwFmAg");
	this.shape_43.setTransform(879.6387,1043.9116);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#39A3D7").s().p("EiHIBRNQ91rk0V6kQ0U6llE8oQlE8qb/4uUAb/gYtAwLAC6UAwLAC5AZEAL1QXWIvXDm6UAV9gIvAsEADQUAsFADQA2HAXeUA2HAXdgUmAEzQ0nEzlebRQlebTyYQeQyZQd/bhtQ/chuyFAaUgRKACcgj6gAeUghzAEUgleAJQQwoEGvJAAQy9AAwmmbg");
	this.shape_44.setTransform(876.5657,1044.447);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#39A2D7").s().p("EiHxBQgQ9sr80C6sQ0D6tk58OQk58PdF4bUAdGgYbAvwADIUAvwADIAYmALlQWxISYJnUUAXEgJFAsPAEAUAsOAD/A0IAXBUA0IAXAgUEAFfQ0FFflkbOQllbPzAP4QzAP4+3hjQ+3hkyiALUgRkACXgkBAAAUgh+AEpglUAI0Qv1DvueAAQznAAxGm4g");
	this.shape_45.setTransform(873.4702,1044.9881);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#39A2D7").s().p("EiIbBPzQ9isUzw61Qzw61kv7zQkv70eN4JUAeMgYJAvVADXUAvVADXAYIALVQWNH1ZNnuUAYNgJcAsYAEvUAsXAEwAyKAWjUAyKAWjgTjAGMQzjGLlrbLQlrbLzoPSQzoPT+RhaQ+ShZzAgDUgR+ACRgkIAAdUgiJAE/glKAIXQvCDZtzAAQ0SAAxmnVg");
	this.shape_46.setTransform(870.3645,1045.5622);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#39A2D7").s().p("EiJEBPGQ9Yssze69Qze6+kk7YQkl7ZfU33UAfSgX2Au7ADlUAu6ADmAXqALFQVnHXaUoHUAZUgJzAshAFfUAsiAFfAwLAWGUAwKAWGgTAAG4QzCG4lxbHQlybI0QOtQ0POs9thPQ9shQzdgRUgSYACMgkPAA7UgiUAFTglAAH8QuQDDtHAAQ0+AAyFnzg");
	this.shape_47.setTransform(867.2487,1046.1886);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#39A2D7").s().p("EiJtBOYQ9PtEzM7FQzM7GkZ6+UgEaga+AgagXlUAgZgXkAugAD1UAufAD0AXMAK0QVDG7bZoiUAabgKKAssAGQUAsrAGPAuMAVoUAuMAVpgSfAHlQygHll4bCQl4bE04OIQ03OH9HhFQ9IhGz6ggUgSyACGgkVABZUgigAFogk2AHgQtdCvsbAAQ1pAAyloSg");
	this.shape_48.setTransform(864.1237,1046.865);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#39A2D7").s().p("EiKWBNqQ9Gtcy57OQy67OkP6jUgEPgajAhhgXTUAhggXSAuEAEEUAuEAEDAWvAKkQUdGecfo8UAbjgKhAs1AG/UAs1AG/AsNAVLUAsNAVMgR9AIRQx9ISl/a/Ql/bA1fNiQ1fNi8ig8Q8jg70YguUgTMACAgkcAB3UgiqAF9gktAHEQspCcrwAAQ2VAAzEozg");
	this.shape_49.setTransform(860.9736,1047.5674);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#39A2D7").s().p("EiK/BM7Q89tzyn7XQyn7WkE6IUgEFgaJAingXAUAingXAAtpAESUAtpAESAWRAKVQT5GAdkpWUAcrgK3As+AHuUAs/AHvAqPAUuUAqOAUugRbAI+QxdI+mEa8QmGa82HM8Q2HM979gyQ79gx02g9UgTlAB8gkjACUUgi1AGRgkkAGpQr3CKrDAAQ3CAAzipVg");
	this.shape_50.setTransform(857.8501,1048.3045);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#39A1D7").s().p("EiLoBMMQ8zuKyV7gQyV7fj55tUgD6gZuAjtgWtUAjugWuAtOAEhUAtOAEgAV0AKFQTTFjeqpwUAdygLOAtJAIfUAtIAIeAoPAURUAoQAURgQ6AJqQw6JrmLa4QmMa42vMXQ2vMX7YgoQ7Ygn1ThLUgT/AB2gkrACxUgjAAGngkZAGNQrEB4qXAAQ3uAA0Cp3g");
	this.shape_51.setTransform(854.6843,1049.0808);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#39A1D7").s().p("EiMRBLdQ8pujyD7oQyD7njv5SUgDvgZTAk0gWcUAk0gWbAs0AEwUAszAEvAVVAJ0QSvFGfvqKUAe6gLlAtSAJPUAtSAJOAmRAT0UAmRATzgQYAKXQwYKYmSa0QmTa03WLyQ3XLx6zgdQ6zge1xhZUgUZABwgkxADPUgjLAG8gkPAFxQqSBoprAAQ4aAA0hqag");
	this.shape_52.setTransform(851.536,1049.9204);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#39A1D7").s().p("EiM6BKtQ8gu6xw7wQxx7wjk44UgDlgY4Al7gWJUAl7gWJAsYAE+UAsYAE+AU4AJlUASJAEoAg1gKkUAgCgL7AtcAJ+UAtbAJ+AkSATWUAkTATXgP2ALDQv3LEmYawQmaax3+LMQ3+LM6OgTQ6OgU2OhnUgUzABqgk4ADtUgjWAHRgkFAFVQpgBZo+AAQ5IAA0/q/g");
	this.shape_53.setTransform(848.3752,1050.7806);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#39A1D7").s().p("EiNjBJ9Q8VvSxf75Qxe74ja4dUgDagYdAnCgV3UAnBgV3Ar9AFNUAr9AFNAUaAJVUARlAELAh6gK+UAhKgMSAtlAKuUAtlAKtAiUAS6UAiSAS5gPTALwQvVLwmfatQmgat4mKnQ4mKm5ogKQ5pgJ2sh2UgVNABlgk/AELUgjhAHlgj7AE5QouBMoRAAQ51AA1erlg");
	this.shape_54.setTransform(845.1995,1051.6922);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#39A1D7").s().p("EiOMBJMQ8MvqxM8BQxN8BjP4BUgDPgYDAoIgVlUAoIgVkArjAFcUAriAFcAT8AJEUAQ/ADuAjBgLYUAiRgMpAtvALeUAtvALdAgUAScUAgUAScgOyAMdQuyMdmmapQmmap5OKBQ5OKB5EAAQ5DAB3KiEUgVmABfglHAEpUgjrAH6gjyAEdQn7A/njAAQ6jAA19sMg");
	this.shape_55.setTransform(842.0205,1052.6274);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#39A1D7").s().p("EiO1BIbQ8CwCw68JQw78JjE3nUgDFgXoApPgVTUApPgVSArHAFrUArHAFrATfAI0UAQaADQAkGgLyUAjYgM/At5AMNUAt5AMOAeWAR+QeVR/uQNKQuRNJmsalQmtam52JbQ51Jc4fAKQ4eAK3oiSUgV/ABaglOAFGUgj3AIPgjnAECQnJAzm2AAQ7RAA2bs0g");
	this.shape_56.setTransform(838.8567,1053.615);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#39A1D7").s().p("EiPeBH3Q75wawo8SQwo8Ri63NUgC6gXNAqWgVAUAqVgVAAqtAF6UAqsAF5ATAAIkUAP2AC0AlLgMNUAkggNWAuDAM9UAuCAM+AcXARhQcXRituN2QtvN2mzahQm0ai6dI2Q6eI235AUQ35AU4FigUgWaABUglUAFkUgkCAIkgjeADmQmXApmIAAQ7/AA25tdg");
	this.shape_57.setTransform(835.7041,1053.3669);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#39A0D7").s().p("EiQHBHgQ7vwxwV8aQwW8aiw2yUgCvgWyArcgUuUArcgUuAqSAGJUAqRAGIASjAIUUAPQACWAmRgMmUAlogNtAuMANtUAuMANtAaYAREQaYRFtMOiQtNOjm6adQm6af7FIQQ7GIQ3UAfQ3UAe4iivUgW0ABPglbAGBUgkNAI6gjUADJQllAglZAAQ8vAA3XuIg");
	this.shape_58.setTransform(832.5346,1051.6985);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#39A0D7").s().p("EiQwBHJQ7mxJwD8jQwE8hik2YUgClgWXAsjgUcUAsigUbAp3AGXUAp2AGXASFAIEUAOrAB5AnXgNBUAmvgODAuWAOdUAuWAOcAYZAQoQYaQnsrPPQssPPnAaaQnAaa7tHrQ7tHr2vAoQ2vAo5Ai9UgXNABKgljAGfUgkYAJOgjKACuQkzAXkqAAQ9fAA30uzg");
	this.shape_59.setTransform(829.41,1050.0865);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#39A0D7").s().p("EiRZBGyQ7cxhvx8sQvy8qia18UgCagV9AtqgUJUAtpgUKApbAGmUApbAGmARoAH0UAOGABcAocgNbUAn3gOaAugAPNUAufAPMAWbAQKQWaQKsJP8QsJP6nHaYQnHaW8UHGQ8VHF2KAyQ2KAz5ejMUgXnABEglqAG9UgkiAJjgjAACSQkCARj8AAQ+NAA4Svgg");
	this.shape_60.setTransform(826.2618,1048.5306);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#39A0D7").s().p("EiSCBGaQ7Tx5vf80Qvf8yiP1iUgCQgViAuwgT3UAuwgT3ApBAG1UApAAG0ARJAHkUANiAA/ApigN1UAo+gOxAuqAP9UAupAP8AUbAPsQUcPtrnQoQroQonNaTQnOaT88GgQ89Gg1kA8Q1lA858jZUgYAAA+glxAHaUgktAJ4gi3AB2QjQALjNAAQ+9AA4vwNg");
	this.shape_61.setTransform(823.1445,1047.0147);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#39A0D7").s().p("EiSsBGBQ7IyRvN88QvN87iF1HUgCFgVHAv3gTlUAv2gTkAomAHDUAolAHEAQsAHTUAM8AAiAqogOPUAqGgPIAuzAQtUAuzAQsAScAPPQSdPQrFRUQrGRUnUaQQnUaP9kF7Q9lF60/BGQ1ABG6ZjoUgYaAA5gl4AH4Ugk4AKNgitABaQigAHidAAQ/tAA5Mw9g");
	this.shape_62.setTransform(820.0467,1045.5694);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#39A0D7").s().p("EiTWBFoQ6/ypu79EQu69Eh70sUgB6gUsAw+gTTUAw9gTSAoKAHSUAoKAHTAQOAHDUAMYAAEArtgOoUArOgPfAu8ARcUAu9ARcAQeAOyQQeOzqjSBQqkSAnbaMQnaaM+MFVQ+NFV0aBQQ0bBQ62j2UgY0AAzgl/AIWUglDAKhgijAA/QhuADhtAAUggfAAAgZpgRtg");
	this.shape_63.setTransform(816.9825,1044.1684);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#399FD7").s().p("EiUABFOQ62zAuo9NQup9Mhw0RUgBvgUSAyEgTAUAyEgTAAnvAHhUAnvAHhAPxAGzUALygAZAszgPCUAsVgP1AvHASMUAvGASLAOfAOVQOfOVqBSuQqCStnhaIQniaI+zEvQ+0Ewz2BaQz1Ba7UkFUgZOAAugmGAIzUglOAK3giZAAjIh5ABUghQAAAgaGgSfg");
	this.shape_64.setTransform(813.9517,1042.8292);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#399FD7").s().p("EiUrBE0Q6szYuW9VQuX9Vhlz2UgBlgT3AzLgSuUAzLgSuAnUAHwUAnUAHwAPTAGjUALMgA2At6gPdUAtdgQMAvQAS8UAvQAS8AMgAN3QMhN4pgTbQpgTZnoaEQnoaE/bEKQ/cEKzQBlQzRBj7xkSUgZoAAogmNAJRUglZALLgiPAAHIgZAAUgiBAAAgaigTRg");
	this.shape_65.setTransform(810.9965,1041.5297);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#399FD7").s().p("EhYvBYeUgiGgAVgaigTwQ6izwuE9eQuF9dhazbUgBbgTcA0SgScUA0SgScAm5AH/UAm5AH/AO1AGTUAKngBTAu/gP3UAulgQjAvaATsUAvZATrAKiANbQKhNao+UHQo+UGnuaBUgHuAaAggEADlUggEADkgSrABuQyrBu8PkhUgaBAAigmVAJvUgkgALMghPAAAIh6AAg");
	this.shape_66.setTransform(808.1113,1040.3112);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#399FD7").s().p("EhZvBY2Ugh8gAygaZgUHQ6Z0Itx9mQtz9lhPzBUgBQgTBA1YgSKUA1YgSJAmeAINUAmeAIOAOXAGDUAKCgBxAwFgQRUAvtgQ5AvjAUbUAvjAUbAIjAM+QIjM9ocU0QodUyn0Z9UgH1AZ9ggrAC/UggsAC/gSGAB4QyGB48tkwUgabAAdgmbAKNUgjeALIggGAAAQiEAAiCgDg");
	this.shape_67.setTransform(805.3965,1039.2036);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#399FD7").s().p("EhayBZNUghygBNgaPgUfQ6P0gtg9vQtg9thFymUgBFgSmA2fgR4UA2fgR3AmDAIcUAmCAIdAN6AFzUAJdgCOAxLgQrUAw0gRQAvtAVLUAvsAVLAGlAMgQGkMgn6VgQn7Vfn7Z6UgH8AZ4ghTACaUghTACZgRhACCQxhCC9Kk9Uga1AAXgmiAKqUgihALFgfGAAAQjDAAjCgHg");
	this.shape_68.setTransform(802.8319,1038.1395);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#399FD7").s().p("Ehb3BZkUghpgBpgaFgU3Q6F04tO93QtO92g6yLUgA7gSLA3mgRmUA3lgRlAloAIsUAloAIrANcAFjUAI4gCrAyQgRFUAx7gRnAv4AV7UAv2AV6AElAMDQEmMDnZWNQnZWMoBZ1UgICAZ1gh7AB0Ugh7AB0gQ8ACMQw8CM9olMUgbPAASgmpALIUghsALCgeNAABQj8AAj3gMg");
	this.shape_69.setTransform(800.5997,1037.1475);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#399ED7").s().p("EhdDBZ5UghegCEgZ8gVQQ581Ps79/Qs89/gwxwUgAwgRxA4tgRSUA4sgRTAlNAI6UAlMAI5AM/AFUUAITgDJAzWgRfUAzDgR9AwAAWqUAwAAWrACnALlQCmLmm2W5Qm3W5oJZxUgIIAZygijABOUgijABOgQWACXQwXCV+FlaUgbpAAMgmwALmUgg8ALDgdaAAAQkvAAkpgTg");
	this.shape_70.setTransform(798.9348,1036.2041);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#399ED7").s().p("EheaBaPUghVgCggZygVnQ5y1nsp+IQsq+HglxWUgAmgRVA5zgRBUA5zgRAAkyAJIUAkyAJJAMgAFDUAHugDmA0cgR5UA0LgSUAwKAXbUAwJAXaAAoALIQAoLJmVXlQmVXloPZuUgIPAZugjKAApUgjLAApgPxACgQvyCg+jlpUgcCAAHgm4AMDUggRALDgcsAAAQldAAlUgag");
	this.shape_71.setTransform(798.486,1035.298);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#399ED7").s().p("EhgGBakUghLgC8gZpgV/Q5o1/sX+QQsX+Qgbw6UgAbgQ7A66gQuUA65gQvAkXAJYUAkXAJXAMDAEzUAHJgEDA1hgSTUA1SgSrAwUAYLUAwTAYKgBXAKrQhXKrlyYSQl0YSoVZqUgIWAZqgjyAADUgjzAAEgPMACqQvMCq/Bl3UgccAABgm+AMhQ/tLE8CAAQmGAAl7gig");
	this.shape_72.setTransform(800.0845,1034.4303);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#399ED7").s().p("Ehh5Ba5UghBgDYgZfgWXQ5f2XsE+YQsF+YgRwgUgAQgQgA8BgQcUA8AgQcAj8AJmUAj7AJmALlAEjUAGkgEgA2ngStUA2agTCAweAY6UAwdAY6gDWAKOQjWKOlRY/QlRY+ocZmUgIdAZmgkagAiUgkagAigOnAC1QunCz/fmFUgc1gAEgnGAM+Q/JLG7cAAQmtAAmfgqg");
	this.shape_73.setTransform(802.3124,1033.6023);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#399ED7").s().p("EhjvBbNUgg3gD0gZWgWuQ5V2vrz+hQry+ggGwFUgAGgQFA9HgQKUA9HgQKAjhAJ1UAjhAJ1ALHAETUAF/gE9A3sgTIUA3igTYAwnAZqUAwnAZqgFVAJwQlUJxkvZrQkwZrojZjUgIiAZiglCgBHUglCgBIgOCAC+QuCC+/8mUUgdQgAJgnMANcQ+qLI66AAQnQAAm+g0g");
	this.shape_74.setTransform(804.9544,1032.8076);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#399ED7").s().p("EhlqBbiUggtgEQgZMgXGQ5M3Grg+qQrh+pAGvqUAAFgPrA+NgP3UA+OgP4AjGAKEUAjFAKEAKqAEDUAFagFbA4ygThUA4pgTvAwxAaaUAwwAaZgHTAJTQnTJUkOaYQkOaXopZfUgIpAZfglpgBtUglqgBtgNdADIUgNdADHggagGhUgdpgAQgnUAN6Q+OLL6bAAQnvAAnbg9g");
	this.shape_75.setTransform(808.013,1032.0123);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#399DD7").s().p("EhnnBb2UggjgEsgZDgXeQ5B3erP+yQrO+xAQvQUAAPgPPA/VgPlUA/UgPmAirAKTUAiqAKSAKMADzUAE1gF4A54gT7UA5xgUGAw6AbKUAw6AbJgJSAI2QpSI3jsbEQjsbEovZbUgIwAZbgmRgCTUgmSgCSgM4ADSUgM4ADRgg3gGwUgeDgAVgnbAOYQ91LP59AAQoOAAn0hIg");
	this.shape_76.setTransform(811.3449,1031.2664);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#399DD7").s().p("EhpnBcKUggagFIgY5gX2Q4431q8+7Qq8+6Aau0UAAagO1BAcgPTUBAagPTAiQAKiUAiQAKhAJuADjUAEQgGVA69gUWUA65gUcAxEAb5UAxEAb5gLRAIZQrRIZjKbxQjKbxo2ZXUgI3AZXgm5gC4Ugm5gC4gMTADcUgMTADcghVgG/UgecgAagniAO1Q9eLS5iAAQopAAoMhSg");
	this.shape_77.setTransform(814.9587,1030.533);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#399DD7").s().p("EhrqBceUggQgFjgYvgYOQ4u4Oqq/DQqq/CAluaUAAlgOaBBhgPAUBBigPBAh1AKwUAh0AKwAJQADTUADsgGyA8CgUwUA8BgUzAxOAcpUAxNAcpgNQAH8QtPH8iocdQipcdo9ZUUgI9AZTgnggDdUgnhgDegLuADmUgLuADmghygHNUge2gAggnpAPTQ9JLW5KAAQpCAAoihdg");
	this.shape_78.setTransform(818.8159,1029.7994);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#399DD7").s().p("EhtvBcxUggGgF/gYlgYlQ4l4mqY/LQqY/LAwt/UAAwgN/BCogOuUBCogOvAhaAK/UAhZAK/AIzADDUADGgHQA9IgVKUA9IgVJAxYAdYUAxXAdZgPPAHfQvOHeiGdLQiGdJpEZQUgJEAZQgoIgEDUgoJgEDgLJADvUgLIADwgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo2hpg");
	this.shape_79.setTransform(822.9028,1029.0894);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#399DD7").s().p("EhtvBcGUggGgF/gYlgYmQ4l4lqY/MQqY/KAuuZUAAugOZBCogOyUBCogOyAhcALdUAhbALcAIzADCUADGgHPA9SgUQUA9RgURAxPAckUAxOAcjgPPAHbQvPHaiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_80.setTransform(822.9091,1033.4101);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#399DD7").s().p("EhtvBbbUggGgF/gYlgYmQ4l4lqY/MQqY/KAtuzUAAsgOyBCogO2UBCngO1AheAL5UAhdAL6AIzADCUADGgHPA9bgTXUA9bgTXAxGAbvUAxGAbugPQAHWQvQHWiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_81.setTransform(822.9277,1037.7012);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#399DD7").s().p("EhtvBawUggGgF/gYlgYlQ4l4mqY/LQqY/LArvMUAArgPMBCngO5UBCogO5AhfAMXUAhfAMWAIzADDUADGgHQA9lgSdUA9lgSeAw9Aa6UAw8Aa5gPRAHSQvQHSiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_82.setTransform(822.9109,1041.9951);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#399DD7").s().p("EhtvBaFUggGgF/gYlgYlQ4l4mqY/LQqY/LApvlUAApgPmBCogO9UBCngO9AhhAM0UAhhAM0AIzADDUADGgHQA9ugRkUA9vgRkAw0AaFUAw0AaEgPSAHNQvRHOiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_83.setTransform(822.929,1046.2882);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#399DD7").s().p("EhtvBZaUggGgF/gYlgYlQ4l4mqY/LQqY/LAov/UAAngQABCngPAUBCngPAAhjANRUAhjANRAIzADDUADGgHQA94gQqUA94gQrAwrAZQUAwrAZPgPSAHJQvSHJiGdKQiHdJpDZQUgJEAZQgoIgEDUgoJgEDgLJADwUgLIADvgiQgHbUgfQgAlgnwAPwQ82Lb4zAAQpaAAo1hpg");
	this.shape_84.setTransform(822.934,1050.5793);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#399DD7").s().p("EhtvBYwUggGgF/gYlgYmQ4l4lqY/MQqY/KAmwZUAAmgQZBCngPEUBCngPEAhlANuUAhkANvAIzADCUADGgHPA+CgPxUA+BgPyAwiAYbUAwiAYagPSAHEQvTHFiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_85.setTransform(822.9428,1054.8478);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#399DD7").s().p("EhtvBYFUggGgF/gYlgYmQ4l4lqY/MQqY/KAlwzUAAkgQzBCngPHUBCmgPHAhnAOLUAhmAOMAIzADCUADGgHPA+LgO4UA+LgO4AwaAXmUAwZAXlgPUAHAQvTHAiGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_86.setTransform(822.9476,1059.1244);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#399DD7").s().p("EhtvBXaUggGgF/gYmgYlQ4l4mqX/LQqY/LAjxMUAAigRNBCngPLUBCmgPKAhoAOoUAhpAOpAIyADDUADGgHQA+VgN+UA+UgN+AwRAWwUAwRAWwgPUAG8QvVG7iGdLQiGdJpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_87.setTransform(822.9653,1063.3886);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#399DD7").s().p("EhtvBW+UggGgF/gYlgYmQ4l4lqY/MQqY/KAhxmUAAhgRnBCngPOUBCmgPOAhqAPGUAhqAPGAIzADCUADGgHPA+egNFUA+egNFAwIAV7UAwIAV7gPVAG4QvVG3iGdKQiHdKpDZQUgJEAZPgoIgEDUgoJgEDgLJADwUgLIADwgiQgHbUgfQgAmgnwAPxQ82Lb4zAAQpaAAo1hpg");
	this.shape_88.setTransform(822.9472,1066.2148);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#399DD7").s().p("EhtvBXXUggGgF/gYmgYlQ4l4mqX/LQqY/LAfyAUAAfgR/BCngPSUBClgPSAhtAPjUAhsAPjAIyADDUADGgHQA+ogMLUA+ogMMAv/AVGUAv/AVGgPWAGzQvWGziGdLQiGdJpEZQUgJDAZQgoJgEDUgoJgEDgLIADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_89.setTransform(822.9644,1063.6947);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#399DD7").s().p("EhtvBXwUggGgF/gYmgYlQ4l4mqX/LQqY/LAeyZUAAdgSaBCmgPVUBCmgPWAhuAQBUAhuAQAAIyADDUADHgHQA+xgLSUA+xgLSAv2AURUAv2AURgPWAGvQvXGviGdKQiGdJpEZQUgJDAZQgoJgEDUgoIgEDgLJADwUgLJADvgiQgHbUgfQgAlgnwAPwQ81Lb4zAAQpaAAo1hpg");
	this.shape_90.setTransform(822.9554,1061.1682);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},119).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_pirat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// pirat
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AcqqMQAHBVgYA9QgYA+gqAEQgpAEgjg5Qgig5gIhUQgHhUAYg+QAYg+ApgEQAqgEAjA5QAiA5AIBUgAZ6tYQAXgdAfgDQAzgFApBFQAqBFAJBlQAJBmgeBLQgcBLgzAEIgBABQAAAAgBAAIgBAAQgBAAgBAAIgBAAIgxgUQgDgDgDgDQgEgEgEgEIgVgcQgBgCgBgBQgqhEgJhmQgJhmAehLQALgcAOgTIoABzQhsCeB4C6IABAFAakmhQgEgDgDgDQgEgEgDgEAaemnIgBAAIoXAaIgvAEIl/ARAjCqDQgogYiLAWIADAiIDWAPIgmgvIgphIQi3Avi4ArQg+APg/AOQhMAQhMAQQhEBMhfAfQgjAJADgLQAwgcA2g5QglAHglAIQg0ATgCAQQABBpgXBeQgyDIgsBfQgZhTAChWQAAgaADgaAhapGIAAAAQgjhdgog3IhGAPAicpUIACAAQgEgagkgVAhRotIgDgJQgDgHgDgIIAAgBApapxQh1BVgzASIgkADQgFgWBUg3AslkxQADAigRAiQgRAjggAGQghAEgfghQgfgggDgiQgDghAhgTQAhgUAcgGQAbgGAUATQAUASADAhgAr5nvIAFAzQh2APhiAlQgGACgGADQgiANggAQIA7hBQBxg5B1gPgAtMkIQAAAIgEAFQgEAFgIABQgHABgFgFQgGgEAAgIQgBgHAFgFQAEgFAHgBQAIgBAFAFQAFAEABAHgApDi9QA8g4AVgCQAygEAkAVQAmAVADAjQADAighAcQghAcgxAEQgXACgVgCAjelKQgBABgBABQgFAHgJABQgJAAgGgFQgHgFgBgJQAAgIAFgHQAGgHAIgBQAEAAAEABQAAARAMAOQACAEAEADQAGAFAIAFIC/gPIA+gEIBAgFIBCgFQgNgiAlg2QAMgSAPgLAjOmtQgdAnABAdAjOmtQhKggg8ArQgUA9A4A4QA3A3AhhNAhgtzQj5BvjlADAlwtqIlrBYA3MqWQhGiSiIgzIhphAQgjCGBnB9ICQBlQh3BmgwBNQhkCsgGBBQCJAgCsiNQA1g5AXg9QgaB6AIB9QAABjAhhMIALB7IgFBfQgTB8BZiDIA3iLQBZEIgOhlA2tqZQgIAqgHAsA2tqZQgVAIgKgFIg5DWIBXALQgFAggMAfA2tnCQgBAGAAAHA2tnCIgbAFQADhFAJhBA0sndQgPACgNADIhlAWA0MgaQgWhqAKhtQgOAxgWAPQgXiXAniVA1InYQi8CsC0DxQATASAQAJA0MgaQACAAACgBQACAVAEAUQAKA6AWA7AwWoRQiLAbiLAZAxUqkQioBYjAAJA0MgaQgQACgRgIAutH/QhJgmg4g+Qh9iKg3iOA6xT7IBykyQBhijB1iTQAggUAvAHIFggPIGKgSAutH/IgNB4ArjDIQAjAzgZA4Ao0I0IAEAxAFXh+QgNAbAOApICDH8QlqAylkBkIk9ANAk8DSQjIgui9BQAAlhGQgDBDgUBEQhzF8l2BqQguAJgrAEQjiAZiXhOAm2EdQgUgOiXAmAzXipQgLCBggA2QgFgUgFgUAtvo0QgvAKguAKAQ3rWQhFCFBlDIAR6rlIhDAPIl8BWQhbCWB4ByIg1ACIgwADIh9AFAJRpoQgHgpgegnQgXgYgSAbIgVAoQgOgzgrAJQgwAFgDAxQggg3gvAPQg2ATAYA2QgWgpgzgGQgpASAHAvIALBHIAzA8AFgoEQgHgRgMgWIAJgCQADASAHAXgAG3pEQAAgCAAgBQgBgCAAgCQAAAEABADQAAABAAAAIAAABQAAABAAACQAAABABACQACALAFAQQAFAfgIAwQgMBJgbgfQgBgBgBgBQACAEgEAJQgFAKhHAyICxgNIieAHAJRpoQAAAEAKAfQAKAegDAeQgDAegYgPQgXgOgLgYQgKgXgDgiQAAgBAAAAIgLACQABAFAFATQAGASAKA+QAJA/gcgEQgcgFgcg0QgRgdgIgWAK7qAIhAAOQgvCIBXB0IAAAFAJRpoIAqgKAhgtzQAqA4AoBAIgmAJQCJC6gDBXIBjgmAF9nJQgggphKATQgBAAAAABQgXAEgTAPAg0nRIAigIIBkgIAA3ksQgEgPAAgRABPj6IAAACQAdBIAABdQgBAzgWASQgpgPgHgpABzlRQgEBRgRAWQgIgIgHgIIgYgyAgLlIQA3B+gHCEABPj6QgSgWgGgcAF9nJIgPgXQgDgGgCgFQgFgOgEgLQALAWADAOAGTmqQgGgHgGgIIgKgQAKBjVQhlCdjFhGAJzlzQAdBVgPBJIDdLzQgRCTgdADQhKBGh8AOIiZAeIqkCbIAjDOIyXBNIlqAfIiMANAC1lWQAKBSCYCGAhRotQATA+gUALQgwgdgahTAg0nRQgPgygOgqAhgtzQlenemiBXQnlCBhoHgAjOmtICagkAgSnZIhIhtAg0ryIhxAYA1iOmIAbE2");
	this.shape.setTransform(494.8302,299.6046);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AyUG2QBgijB1iSQAggVAvAIIFggQIGLgRIE7gOQFlhjFqgxIiCn9QgPgqANgbQDFBHBmieIDcLzQgQCUgeACQhKBHh8ANIiZAfIqlCaIAkDOIyXBNIgbk1IAbE1IlqAgg");
	this.shape_1.setTransform(452.2,352.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1BBA1").s().p("AA/GzQCXBODigZIAEAxImKARgAlAhtQgQgIgTgTQi0jwC8itIAcgEQgnCVAXCWQAWgOAOgxQgKBtAWBqIgGAAQgNAAgOgHg");
	this.shape_2.setTransform(394.3418,307.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#500004").s().p("AgrBnIA4jVQAKAFAVgIQgIAqgHAsQgJBAgDBFIAbgFIgCANg");
	this.shape_3.setTransform(345.05,244.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#990000").s().p("AuYI3QAGhBBkisQAwhNB3hmIiQhlQhnh8AiiGIBqBAQCIAzBGCRIg5DWIBWALQgEAggMAfQgXA9g1A5QiNBzh1AAQgaAAgZgGgAoUCHQAHgsAIgqQBnnfHliBQGihXFeHeQj6BvjkADQDkgDD6hvQAqA4AoBAIgmAJIhxAYIhGAPQi3Aui4ArIh9AdIiZAgIhbAUIhLAPIkVA0IgdAFIhkAWIgbAFQADhFAJhBgAoUCHQC/gJCphYQipBYi/AJgADMhHIFrhYg");
	this.shape_4.setTransform(401.25,228.118);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#663300").s().p("Ar6GUIAFhfIgLh8QghBMABhjQgJh8Abh5QAMggAEgfIACgOIBkgWQi7CtC0DvQASASARAJIg3CNQguBDgRAAQgRAAAJg9gAp8EBQARAIAQgCIAJApQALA7AWA6QADAcgEAAQgKAAhAjAgApXEHIgEAAQgWhqAJhsQgOAxgVAOQgYiWAniVIEWgzQg0ATgBAPQABBqgYBeQgyDGgsBhQgYhUABhWQABgbADgaQgDAagBAbQgKCBghA2IgFgpgALWDcQAHiEg4h9IA/gFQAAARADAQQgDgQAAgRIBAgFQgEBRgRAVQgJgHgHgJIgYgwQAGAaASAWIABACQAcBIAABeQgBAzgVASQgqgQgGgogAmCioQAwgdA2g5IBdgTQhDBLhfAfQgRAEgIAAQgKAAACgFgAJekLIgCgIIgHgQIAAAAIAAAAIAHAQIACAIQATA+gTAMQgxgegahSIADAAQgFgagkgVIgphIIBHgPQAnA2AjBdIAAABIAAgBQgjhdgng2IBwgZQCKC6gDBXIhkAJIhJhtIBJBtIgjAHQgOgxgPgrgAKei2gAgmkyIB8gcQh1BUgyATIgkADQgFgXBUg3g");
	this.shape_5.setTransform(425.9968,270.5708);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E1CAA1").s().p("ApuJIQhKgmg4g+Qh8iKg3iOQgWg7gLg6QAhg3AKiAQgBBWAYBTQAshfAyjIQAYhegBhpQABgQA0gTIBKgPQg2A5gwAcQgDALAkgJQBfgfBDhMICZggQhUA3AFAWIAkgDQAygSB2hVQC3grC2gvIApBIQgogYiKAWIADAiIDVAPQAaBTAxAdQATgLgTg+QAPAqAOAyIiZAkQhLggg7ArQgTA9A2A4QA4A3AhhNQAGAFAHAFIDAgPQA4B+gHCDQgEBDgUBFQh0F8l1BqQguAJgrAEQg2AGgyAAQidAAhzg7gAkiF+IACgBIAJgCIACgBIABAAIABAAIAEgBIACgBIATgEIAGgBIAAAAIAAAAIAEgBIADgBIABAAQAegHAXgDIAAAAIAJgCIABAAIACAAIABAAIAHgBIACAAIAEgBIAAAAIALgBIAGAAIAAAAQAPAAAGAEQgGgEgPAAIAAAAIgGAAIgLABIAAAAIgEABIgCAAIgHABIgBAAIgCAAIgBAAIgJACIAAAAQgXADgeAHIgBAAIgDABIgEABIAAAAIAAAAIgGABIgTAEIgCABIgEABIgBAAIgBAAIgCABIgJACIgCABgAmbF8QALgYAAgXQAAgfgUgdQAUAdAAAfQAAAXgLAYgAmCE9IAFgCQB1gxB5AAIABAAIAAAAQBIAABIARQhIgRhIAAIAAAAIgBAAQh5AAh1AxIgFACgAilgHQAygEAggcQAfgZAAgfIgBgGQgDgjglgVQgfgSgoAAIAAAAIAAAAIgMAAIgBAAIgCABQgWACg8A4QA8g4AWgCIACgBIABAAIAMAAIAAAAIAAAAQAoAAAfASQAlAVADAjIABAGQAAAfgfAZQggAcgyAEQgWACgVgCQAVACAWgCgAotkoQgcAGghAUQggATADAhQADAiAeAgQAfAhAhgEQAhgGARgjQARgigDgiQgDghgUgSQgPgPgTAAQgHAAgHACgAqgleIg8BBQAggQAigNIANgFQBhglB2gPIgEgzQh1APhxA5gAKWg1QiYiGgLhSQgNgiAmg2QAMgSAPgLQATgPAXgEIABgBIADgBIACAAIAAAAQAUgFARAAIABAAIABAAQAnAAAVAaIAAABIABABIAKAQIANAPIgNgPIgKgQIgOgXIAOAXIgBgBIAAgBQgVgagnAAIgBAAIgBAAQgRAAgUAFIAAAAIgCAAIgDABIgBABQgXAEgTAPIgzg8IgLhHQgIgvAqgSQAzAGAVApQgYg2A3gTQAugPAgA3QAEgxAwgFQAqgJAPAzIAVgoQARgbAXAYQAfAnAGApIALAjQAJAegDAeQgDAegXgPQgYgOgKgYQgLgXgDgiIAAgBIgKACQAAAFAGATQAGASAJA+QAJA/gcgEQgcgFgbg0QgRgdgIgWQgGgQgCgLIAAgDIAAgDIAAgBIgBgBIAAgDIAAgEIAAAHIABABIAAABIAAADIAAADQACALAGAQQAEAfgHAwQgMBJgcgfIgBgCQABADgEAKQgEAKhHAyICxgNIB9gFQAcBVgOBJQhGBsh0AAQgzAAg9gVgAKomiIAFALQgEgOgKgWIAJAZgAKMniQALAWAIARQgIgXgCgSgAL1n7IAAgHIAAAEIAAADIAAAAg");
	this.shape_6.setTransform(462.9695,292.3442);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#533302").s().p("AmDBUQBxg6B2gPIAEA0Qh2APhiAlIgMAEQgiAOggAQgADphnIgDgjQCLgVAoAYIAmAvg");
	this.shape_7.setTransform(434.4,248.867);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A0/C4QgGgFAAgHQgBgHAFgFQAEgGAHgBQAIAAAFAEQAFAFABAHQAAAHgEAFQgEAGgIAAIgCAAQgGAAgEgDgArUBsQgHgGgBgIQAAgJAFgHQAGgHAIAAQAEgBAEACQAAARAMAOIgCACQgFAGgJABIgCAAQgHAAgGgEgATNg5QgRgOgCgWQgBgXANgOQAOgOALA5QALA4AzheQAzhfgMA0QgMA0gXAiQgWAjgXACIgFAAQgTAAgPgMg");
	this.shape_8.setTransform(541.906,256.2789);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AuxEFQgEgDgCgDQgMgOAAgRQgBgeAdgnICagkIAigHIBlgJIBjgmIAzA8QgPALgMASQglA2ANAiIhCAFIhAAFIg/AFIi/AOQgIgEgGgGgAlHCsQAEgKgCgDIACACQAbAeAMhIQAIgwgFgfQAIAVARAeQAcAzAcAFQAcAEgJg+QgKg+gGgTQgFgRgBgFIALgDIAAABQADAhAKAXQALAYAXAPQAYAOADgdQADgegKgeIgKgiIAqgKQgvCHBXB0IgwACIh9AGIieAHICegHIixANQBHgzAFgJgAgdg2IF7hWQhFCFBlDHIl+ARQh4hyBbiVgAGhibIIAhzQgOASgLAcQgeBMAJBlQAJBlAqBEIACADIAVAdIAHAIIoXAZQh4i6Bsicg");
	this.shape_9.setTransform(567.7234,241.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("A1XEoQgegggDgiQgDghAggTQAhgUAcgGQAcgGAUATQAUASADAhQADAigRAiQgRAjghAGIgHAAQgdAAgcgdgA0RDyQgHABgFAFQgFAFABAHQABAIAFAEQAGAFAHgBQAHgBAEgFQAFgFgBgIQgBgHgFgEQgEgEgHAAIgBAAgArjDcQg3g4ATg9QA8grBLAgQgeAnABAdQgDgBgEAAQgJABgFAHQgGAHABAIQABAJAGAFQAHAFAIAAQAJgBAFgHIADgCQACAEAEADQgTAtgbAAQgTAAgYgXgATYAcQgig4gHhUQgIhUAYg+QAYg+AqgEQAqgEAjA5QAiA5AHBUQAIBVgYA8QgYA+gqAEIgFAAQgnAAghg1gATrgpQgOAOACAWQACAVARAOQARAPAWgCQAWgCAXgjQAWgiAMg0QAMgzgzBfQgzBdgKg5QgJgsgKAAQgDAAgDADg");
	this.shape_10.setTransform(538.2516,247.4169);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("ApaAFIBAgNQhbCVB4ByIg0ACQhXh0AuiIgAieheIBEgPQhsCdB4C6IgvAEQhmjIBFiEgAIEDqIgCAAIgCAAIAAAAIgxgUIgHgGIgIgIIgVgcIgCgDQgphEgJhlQgJhmAdhLQAMgcAOgTQAWgdAfgDQAzgFAqBFQApBFAJBlQAJBlgdBLQgdBLgzAEIAAABIgBAAgAHejWQgqAEgYA+QgYA+AIBUQAHBTAiA5QAjA5AqgEQAqgEAYg+QAYg9gIhUQgHhUgig5Qghg1goAAIgEAAg");
	this.shape_11.setTransform(618.5954,236.4111);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},299).wait(99));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_photographer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// photographer
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99F40B").ss(1,1,1).p("AFnBwIrNjf");
	this.shape.setTransform(582.25,730.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AAU1pQiFhSiiACQkDAxiPDNQhiCMgzCyQnJCEkYDgQjsDnAMC5QDDGrLlA0ANLwjQB7DPAeD7QsLJIx8igQAFlzBklZAmsM8QiWgVhpgxIiomQA29VeIhuAAA29VeQh6BCh0BOApbQ2QnWBTmMDVMAy5AAAQmbjqolhOQglAJglAJQtaDPlRhsQhsgig2hDgAm5SbIiihlANLwjQEJg/D4A5QCNAyAzBuQA/Ebh/DlQjKEfktCKQgwAWgzATQg5AVg9AQQh1CfAFBxIAIF4Qq6B/mGg5QAXCfgKBcQgGA7gUApAAU1pQC+i3DCBHQEhC7CWD7Al7xRIGPkYALcMeIALCNIALCNAPVAgQBGFigXEUQgwCKjtCLAL8BuQgQEFCQg9QgvhsAliBAL8BuQsvERsggZAj7wZQjoBcgwhcAmfQ3Ii8gB");
	this.shape_1.setTransform(367.5712,581.8183);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BD7B4C").s().p("AvDKNQAFl0BjlXQA0iyBiiMQCPjNEDgxQCigCCGBSImQEYIGQkYQC8i3DDBHQEgC7CXD7QB7DPAeD6QpjHKtGAAQjnAAj3gigAnVitQBGAAB0gtQh0AthGAAQhGAAgYgtQAYAtBGAAg");
	this.shape_2.setTransform(370.8,498.7449);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E38D53").s().p("ArlLUQrlg0jDmsQgMi4DsjnQEYjfHIiEQhjFYgFFyQR8ChMLpIQgej6h8jPQEKg/D4A4QCMAzA0BtQA/Ebh/DlQjKEfkuCLQgwAWgyASQg6AVg8AQQrqD6rcABQhFAAhEgDg");
	this.shape_3.setTransform(356.6106,545.1664);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#61383B").s().p("AmBFfQiWgWhogxIiomPQMgAaMvkSQh2CfAGBxIAIF3QnkBYlPAAQiVAAh5gRg");
	this.shape_4.setTransform(363.2,629.5974);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAA990").s().p("Ag+hWQA8gQA5gVQglCAAvBsQgcALgVAAQhbAAANjSg");
	this.shape_5.setTransform(450.3173,601.5364);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAB190").s().p("ArhIrQAUgqAGg6QAKhcgXifQGGA5K6h/IgIl3QgGhyB2ieQgQEFCQg9QgvhsAliBQAzgTAwgWQBGFigXETQgwCKjtCLIgLiNIALCNIALCNQo0CIlTAAQixAAhzglg");
	this.shape_6.setTransform(397.1815,644.246);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#396541").s().p("ABEAzIihhlIC7ABQgHA6gTAqgAhdgyIChBlQhrgjg2hCgAhdgyg");
	this.shape_7.setTransform(316.5875,694.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#399941").s().p("A5cCcQGMjUHWhTQA2BDBsAiQFRBrNajOIBKgSQIkBOGcDpg");
	this.shape_8.setTransform(383.4875,703.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},119).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_photo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// photo
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(577.65,92.1,0.5,0.5);

	this.instance_1 = new lib.photo();
	this.instance_1.setTransform(793.95,340.65,0.9575,0.9575,3.73);

	this.instance_2 = new lib.CachedBmp_5();
	this.instance_2.setTransform(456.05,83.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},210).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_newspapper_no = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// newspapper_no
	this.instance = new lib.CachedBmp_9();
	this.instance.setTransform(570.8,126.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(345.1,-37.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1},{t:this.instance}]},210).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_newspaper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// newspaper
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(44.6,-226,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210).to({_off:false},0).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_hand_camera = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hand_camera
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99F40B").ss(1,1,1).p("AFUBLIqniV");
	this.shape.setTransform(580.4,726.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhvugIh4AAIhLA8Iq0AAIABC+IADGlAlksyQgLgLgLgIQg4g9ghBOQgkA6AaBUQBWBxAXBkQgQBwA2BgQAPAdAXAcQANARAQARQCBB9BFCJQAKATAJAUQBoDHAMEZACdxnIj7B8Ig1AAIgBg7Ii8AAIj9CWImaAAIABAsAhvugQgPgJAGgMIDQhiQA7geAhAyIAACtIAlAAQAlALAYBNIAABsQAhgEAfA6AhvugQAaAPBVAEIgCBEQgKAKgJANIlPAAACdxnIBPgnIB1g6QBcgnBoAnQDHBMghEfQgSAPgSAOQgxAogrAiQgxAngoAeQiABhgcAGIAAgSAFhzIQE9BSAJE2ADsyOQFUBBALFXACdxnQFkB+gPE4AqosyICSAAIAABWIiSAAgArAqmIgYgDArAqmIklAAAkHimIrRAAIgKhbAFWpKIAABAIApBVQhIGKA2B7QAgBGAUAgQCyEZCbEvQBDCEA/CHAFWpKQgOADAOgVANwPNQA+CGA6CJAgVsyQhMBhhBDOQhQjIhyhnAndqmIjjAAAlKkBIqYAA");
	this.shape_1.setTransform(539.425,657.6625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AlJEZIgDmlIElAAIDiAAQBWByAWBjQgPBvA1BhgAgQjCIAAhWICRAAIAABWg");
	this.shape_2.setTransform(472.9625,603.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCC7CC").s().p("Ao0EbIgYgDIAYADIklAAIgCi+IK1AAIBLg8IB3AAQAaAPBWAEIgDBEQgKAKgJANIlOAAQgLgLgLgIQg4g9ghBOQgkA6AaBUgAocDlICSAAIAAhWIiSAAgAEpilIBPgnQFUBBALFWIhZBFQAPk3lkh+gAHtkGQBcgnBoAnQDHBMghEeIgkAdQgJk1k9hSg");
	this.shape_3.setTransform(525.4411,561.4875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A3632").s().p("As4IRIgKhbIKYAAQAPAdAXAcQANARAQARgAjEh6IFOAAQhMBhg/DNQhRjHhyhngAH3BbQggg6ggAEIAAhrQgYhNgmgLIglAAIAAitQgggyg7AeIjSBiQgGAMAPAJIh3AAIhKA8Iq1AAIAAgsIGZAAID9iWIC7AAIABA7IA1AAID8h8QFkB+gPE3QiABhgbAGgAGMnWIB1g6QE+BSAIE2IhcBKQgLlXlUhBg");
	this.shape_4.setTransform(523.4,588.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB190").s().p("Ag8L6QgLkZhqjIIgSgmQhFiKiCh9QgQgRgNgRQgWgcgQgcQg1hhAPhvQgWhkhWhyQgbhUAlg6QAghOA4A9QAMAJAKAKQByBnBRDIQBAjOBMhhQAKgMAJgKIAEhEQhWgFgagPQgPgJAFgMIDShiQA6geAgAyIAACtIAmAAQAlAMAYBMIAABtQAggEAgA6QgOAVAOgDIAAA/IApBVQhIGJA2B9QAfBFAUAgQCyEaCbEvg");
	this.shape_5.setTransform(552.4677,643.0125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},119).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_flash = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF66").s().p("AkqI1Iw7HnIGBq2I29AiIS4mZIyRmzIW5BBIlEq8IQOH9IKip+IB7LMIVPkVItRJKIV+DVI2PC4IMaJcI00kyIi8LJg");
	this.shape.setTransform(623.2,366.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF77").s().p("A2bPdMgqoAILIeLx7MgnzgHBMArvgFQIyYy8MAk4AJ3ILq1/IMtUWMAkSgOwIxaVVMAr5gAmMgnXAMUIe/N0Mgq6gCcIDkVyI6YwFI5fTjg");
	this.shape_1.setTransform(608.925,368.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF88").s().p("EgsjAXFMhEVAIvMA2VgY/Mg4pgOlMBEmgEHIye/EMAy2ASsMAcXghCMAJOAgwMA+AgTjMgkvAffMBClADIMhBdAPfMAoAAYTMg/lgHxMgFTAiII/77YMgwEAb+g");
	this.shape_2.setTransform(622.475,365.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF99").s().p("Egh/AfAMhQ1AT3MAzRgltMhSqgKCMBUfgOQMgt1gjNMBOMAPyMAMcgr6MAjRAmfMBA+ggGMgYMArLMBXGgFPMhIVAbrMBEdAYDMhWngA0MARxAqJMg8Ygc7MgpLAoeg");
	this.shape_3.setTransform(574.125,383.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFAA").s().p("EggSAnIMhdVAe/MAwOgyaMhsrgFeMBkYgYcMhJMgnWMBpgAM6MgDeg2zMA9VAsPMBD8gsqMgLpA24MBrmgNmMhPLAn1MBg4AX1MhtoAGKMAo1AyHMhY0gebMgiTA09g");
	this.shape_4.setTransform(582.425,399.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFBB").s().p("EgggAydMhp2AqHMAtLg/IMiGtgA5MB0SgimMhkjgrfMCE2AKAMgTahBsMBXaAx/MBG4g5OMAA6BCkMCAIgV8MhWDAz+MB9VAXnMiEqANHMA/4A6IMh1Pgf8MgbcBBbg");
	this.shape_5.setTransform(603.075,396.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFCC").s().p("EggvA9xMh2VA1QMAqGhL2MigtADrMCEKgsxMh/5gvoMCgLAHHMgjWhMkMBxeA3uMBJ3hFxMANdBOQMCUogeTMhc6BAJMCZxAXZMibrAUEMBW8BCHMiRrgheMgUkBN7g");
	this.shape_6.setTransform(623.75,392.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},198).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fish_eyes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fish_eyes
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("ADisdQABACABAAQAEgCADgCQB/hDCaAAQDkAACoCSQAGAGAIAGQAJAJAJAIQAfAfAYAgQB5CdAADQQAAD6iwCwQgMALgOAMQg/A3hHAmQgDACgEACQgHADgIADADgDEQAABVgSBNQgMA1gWAzQgxByheBfQgOANgPAOQhFA9hQAqQiHBCijAAQkXAAjEjEQjFjEAAkXQAAjnCIivQAbgkAigiQDEjDEXAAQD9AAC8CjQAGAHAIAHQALAKAKAIQAiAiAbAkQAzBCAfBKQAWAzAMA1QASBNAABVg");
	this.shape.setTransform(930.15,251.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AnGJMQgTAAgTgCQgzgFgygTQA2g1AAhOQAAhMg4g2Qg1g3hMAAQg1AAgqAdQgDgdAAgbQgBibBshrQBthsCYAAQCaAABrBsIADAFIAQARQBEBMAQBhQAGAgAAAjQAAA7gRA2QgaBRhCBCQgRASgSAOQg0Ang7AVQgmAMgrADIgDAAQgOACgPAAgAHrBMIgXgBQg6lSh2kCQBXhCBwAAQCLAABfBiIAEADIAOAPQA8BGAOBXQAHAdAAAfQAAA1gQAxQgYBIg7A7QgOARgSALQgtAjg2ATQghAKgoAEIgBAAIgbABg");
	this.shape_1.setTransform(948.5,263.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AubKfQjFjEAAkWQAAjoCJivQAbgjAhgiQDFjEEWAAQD+AAC7CjIAPAOIAUATQAiAiAcAjQAyBDAgBKQAVAyANA1QASBNAABWQAABUgSBNQgNA1gVAzQgxByhfBfIgcAbQhGA9hPArQiHBBikAAQkWAAjFjEgAmcGdQA4A2AABMQAABOg2A1QAxATA0AFQATACASAAIADAAQAOAAAPgCIACAAQAsgDAlgMQA8gVAzgnQATgOARgSQBAhCAbhRQARg2AAg7QAAgjgGggQgRhhhDhNIgPgRIgDgFQhrhribAAQiXAAhtBrQhsBsAACbQAAAbAEAdQAqgdA1AAQBMAAA1A3gAL5EfIgKAAIgGgFQgogcgtgNIgJg2IAXABIACAAIAbgBIABAAQAngEAigKQA2gTAtgjQARgMAPgRQA7g7AYhHQAPgxAAg1QAAgfgGgdQgOhXg9hGIgNgPIgEgDQhghiiKAAQhxAAhWBCQhjjZiNigIgIgJIAIgEQB+hDCbAAQDjAACpCTIANALIATARQAeAfAZAgQB4CdAADQQAAD6ivCwIgaAYQg/A3hIAmIgGACIgQAHgADggHQAAgcABgaIAABtQgBgbAAgcgARfm+QAAgZACgYIAABkQgCgZAAgag");
	this.shape_2.setTransform(930.225,251.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fish_dots_small = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fish_dots_small
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(236.8,43.95,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fish_dots = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fish_dots
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("EAm7A4bQhfAAhEiwQhDiwAAj4QAAj5Cxk6QCyk6AjBMQAjBMidDiQidDhBFD+QBFD9AmC3QAnC4hgAAIAAAAgEBNkA0FQjLh1AAilQAAimCiBcQCiBbD3DLQD2DKEakmQEakmAACmQgBCljKB1QjKB2keAAQkdAAjKh2gEBDsAuUQgqrKj5AAQj4AAnml1Qnml2AAiFQAAiEIxH3QIyH3DGjWQDFjVBCH3QBCH3gxGsQgSCggSAAQgdAAgZm/gEAViAtcQlRmhgzAxQgxAyhHAAQhGAAgygyQgxgxgBhHQABhGAxgyQAygyBdAhQBdAgFtH6QDHEUgKAAQgJAAiZi9gEgTeAueQikhniDgUQiEgUhJiEQhJiEAAi7QAAi6BJiEQBKiEBnAAQBnAAiYEBQiZECFYE8QEEDugeAAQgJAAgogZgEgABAlAQklqpgNiwQgMiwA6hmQA7hnBTAAQBTAAhwCYQhwCXA9B/QA9CAAzBHQAzBHCkJiQBNEggYAAQgcAAialogEg0mAo4QhdhdABh1QABh0BvCbQBwCaDfsZQDfsYBQBaQBPBai0KZQi1KYgIBdQgJBeiFAAQiEAAhehegEhP3An4QiHhDAAhfQAAhgCHhDQCHhDAXDMQAYDMEhh5QEhh5AMBQQAOBPiHBDQiHBEi+AAQi/AAiHhEgEBUkAd2QhYAAg9ikQg+ikAAjoQAAjoA+ikQA9ikBYAAQBWAAidFgQieFgCfBgQCeBggBBwQAABwhXAAIAAAAgEhf9AcSQAAhTBzg6QByg7CiAAQCiAABerRQBerSAABTQABBTg/LnQg+LniSgxQiSgwiiBVQhTAsgoAAQgnAAgBgpgEhJ1AZ5Qg3jBAAkSQAAkRBKkBQBKkBB6iZQB6iZhEGaQhDGahNERQhNESBTDBQBTDBhPAAQhPAAg4jBgEA6kAY5QjroBgvAAQgwAAgigiQghghAAgwQAAgvAhgiQAigiAwAAQAwAAA1BYQA1BXC1IcQBdEVgRAAQgQAAhxj5gEgkxAY/QgahvAAieQAAidAahwQAahvAmAAQAlAAAaBvQAaBwABCdQgBCegaBvQgaBvglAAQgmAAgahvgAVuQgQkdkmiMjSQiMjSGYGzQGZGzDWg1QDXg2DUsnQDWsmhMH8QhLH9iAGlQiBGkjQAAQjPAAkckmgAxxPrQg+kKAAl5QAAl4BBkSQBCkSE/mWQE/mVlbKdQlbKcAZF6QAZF6BWEUQBWEUhXAAQhXAAg9kLgAIqPOQkqoggliwQgniwAAj3QAAj5AniwQAliwA3AAQA2AAg1C6QgzC6BgHQQBhHRDHHtQBeDrgSAAQgTAAickdgEgzeAOjQgahkAAiNQAAiNAahjQAGgUAGgQQANBxAXCaQA2FdgmAAQglAAgbhjgEhcnALEQg1jKAAkeQAAkdA1jLQA1jKBKAAQBLAAg+D+Qg9D+AIEaQAIEbA1CZQA1CahKAAQhKAAg1jKgEg6+ACnQAWqugTgTQgSgTgBgbQABgbASgTQAUgTAaAAQAbAAAUATQATATgfG4QgeG3gmElQgMBYgGAAQgPAAARnigEBFtAF8QAQkbAVjVQAVjVANAAQAMAAAIA3QAKA4gBBPQABBOgKA4QgIA3gMAAQgNAAglEzQgTCfgEAAQgFAAAHiIgAcVEtQmdlTgnAmQgoAog3AAQg4AAgogoQgogmABg4QgBg4AogoQAognCQBUQCPBVFsFeQC5CygQAAQgPAAjKingEA39AC+QilAAh2h2Qh1h0AAilQAAimExk4QExk5EOhtQEPhuo/HyQo/HyF7BeQF7BdhhBxQhgBximAAIAAAAgEhOWgA3Qgah+AAiyQAAiyAah+QAbh+AlAAQAmAAAZB+QAbB+hEBMQhEBLAeDTQAeDRgaASQgDACgDAAQgXAAgXhtgEAiZgBFQgyAAgkiKQgiiKAAjCQAAjDAiiKQAkiJAyAAQAyAAggCBQghCBgZDAQgZC/A5CWQA6CVgyAAIAAAAgEBSMgDxQg7iEAAi6QAAi7A7iEQA6iDBUAAQBSAAglBPQgmBQBUBlQBUBlAMAaQAMAbABAkQgBC6g6CEQg7CEhSAAQhUAAg6iEgA7IlQQjtmJimAAQimAAh2hKQh1hJAAhnQABhoByhCQBxhDA1DjQA1DjEmBKQEmBJA7FQQAcCagkAAQgpAAiAjTgAQomgQgEgvAAhCQAAhDAEgvQADguADAAQAFAAACAuQADAvAABDQAABCgDAvQgCAvgFAAQgDAAgDgvgEAvJgRBQBXnLAwhuQAwhvhFhpQhFhph6odQh5odDjITQBVDIA7CDQAtBlAeA7QAhBCANANQAoAoAAA4QAAA4jTJNQh3FLgYAAQgTAAAnjJgA26v4QhygwhxkmQhwkmAAjgQAAjgBFifQBHieBjAAQBkAAiHD+QiHD+BvCtQBtCsBTErQBHEAhLAAQgNAAgQgHgEAjpgThQkwipiFgkQiGgjgxAAQgyAAgkgkQgigjAAgxQAAgyAigjQAkgjAyAAQAxAAG1FEQEgDWghAAQgRAAhog6gEg2hgS5QhPAAg4jOQg4jNAAkiQAAkiA4jNQA4jNBPAAQBOAAAvDFQAvDGiOClQiPClBgFSQBfFShOAAIAAAAgAFs15QB8khgrgsQgsgsAAg+QAAg+AsgsQArgsA/AAQA9AAAsAsQAsAsghByQghBxjFEZQhiCLgTAAQgTAAA/iSgEhcGgV2QguhsAAiaQAAiZAuhtQAwhsAzAFQA0AGhUCdQhTCeCRBjQCRBjgvBsQgvBthCAAQhCAAgwhtgEhLbgVSQg1g1AAhKQAAhLDGl9IFYqYQCSkbkyMkQkzMjCPhBQCOhBg1A1Qg1A1hKAAQhLAAg0g1gA0K6WQgIhZgBh7QAUBlAIBKQAOCGgMAAQgMAAgJhhgEBE6gboQiVgmABg2QgBg2CGggQCFghAXBFQAYBEFhgkQFigkgBA2QAAA2iVAmQiVAnjTAAQjUAAiWgngEgmlgd2QhoAAhKj5QhIj5gBlgQABlgBIj5QBKj5BoAAQBnAAihGlQihGlCoDkQCpDlgIDJQgHDIhnAAIAAAAgEhOyglCQg6iNAAjHQAAjHA6iMQA7iNBTAAQBTAAA7CNQA6CMisBgQitBfBWDkQBXDjg3ARQgGABgGAAQgyAAg1h9gEBYZgjUQh3AAhThTQhThUgBh2QABh2BThTQBThUB3AAQB2AAAlBKQAmBJkMA6QkNA7DmCZQDnCZh1AAIAAAAgEgDtgl7Qjeh1AAimQAAilDJheQDJheAPFEQAOFDGYhQQGZhQCIAQQCIAQjfB1QjeB1k7AAQk7AAjfh1gEA7Rgl/Qhwg+AAhXQAAhXBwg9QBvg+gYB2QgZB1CHAvQCHAuCegPQCfgQhwA+QhvA9idAAQieAAhvg9gEAZsgmqQhohoABiTQAAhMAchBQB6C4BEBeQCDC0BViVQBUiWAKgXQBijhAOASQBFBcAAB4QABCThoBoQhpBoiSAAQiTAAhphogEgVCgtYQg1hyAAiiQAAihA1hzQA1hyBKAAQBLAAhZByQhYBzBmChQBmCigOByQgOByhKAAQhKAAg1hygEhcngtQQhKgaABgmQgBglBKgbQBJgaBoAAQBoAABJAaQBKAbgCAgQgCAghagXQhZgXhWA3Qg6Akg0AAQgZAAgYgIg");
	this.shape.setTransform(614.15,359.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fish_body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fish_body
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EhzLhCkMDmXAAAMAAACFJMjmXAAAg");
	this.shape.setTransform(623.175,390.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8003E").s().p("EhzLBClMAAAiFJMDmXAAAMAAACFJg");
	this.shape_1.setTransform(623.175,390.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fish
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EApggY+QDyBREYENQBVBRBLCLQCQEJBvHbQAHAdAHAeQDsBnAuDnQgDBAgJBAQhFHWmuHfQACgDACgDQhUBohsBeQp2ImsCA7QsCA6okmMQoimMgVn+QkNlYlbHkQhEDUgBDOQgDLJnZGCQnYGCj4jZQj4jYDBj7QDAj6kihiQh1AVhYBiQiWD+lMD5QnAEYlymcQlymdCqqQQCpqQN/kLQOAkKiTh/QiTiAARARQgmgWgqg2Qgqg3gVg8QgCgHgCgGQhDjSFLiOQFKiOEGBfQEFBfG9GYQG9GXFFlKQB/lNCHigQAUgYATgXEApggY+QkImdAahtQAZhtgaiZQgNiUjbhkQhMgYhMAYQiKAug+B6QggBghAAQImQBoQjXCAhhDMQhxCPimg0QhyglhTBWQhmBPgCDNQAbD2gSBbQgtDjhKBrQDqjPDWi4QDWi3KHigQKIigFsBzgEghngEAQgnghgpgr");
	this.shape.setTransform(637.5437,299.9294);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("ACyAxQhNg9hggOQhggOhQAgQhRAfANgWQAMgUAygWQAygWBWgRQBVgRBaA7QBaA5APAuQAHAUgKAAQgOAAgsgkg");
	this.shape_1.setTransform(994.7647,295.4321);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AguBDQgThCAAhcIABgoQBAAyBBgyIABAoQAABcgUBCQgSBBgcAAQgaAAgUhBg");
	this.shape_2.setTransform(1010.2,336.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C0014").s().p("Am6G+QochPlaiuQlbivAAiEQAAiFFvAzQFvAzHTEeQHSEeNuoNQNvoOhQDuQhQDurrFQQpdERnTAAQhuAAhmgPg");
	this.shape_3.setTransform(821.8844,416.3166);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8003E").s().p("Ege4AoFQj4jYDBj7QDAj6kihiQh1AVhYBiQiWD+lMD5QnAEYlymcQlymdCqqQQCpqQN/kLQOAkKiTh/QiTiAARARQgnghgpgrQgqg3gVg8IgEgNQhDjSFLiOQFKiOEGBfQEFBfG9GYQG9GXFFlKQB/lNCHigIAngvQDqjPDWi4QDWi3KHigIAXgGQFphXEQAAIAAAAIABAAQDKAACZAwQDyBREYENQBVBRBLCLQCQEJBvHbIAOA7QDsBnAuDnQgDBAgJBAQhFHWmuHfIAEgGQhUBohsBeQp2ImsCA7QsCA6okmMQoimMgVn+QkNlYlbHkQhEDUgBDOQgDLJnZGCQkuD3jTAAQh2AAhZhOgACoQZQAACFFaCvQFbCuIbBPQIbBOLrlQQLqlRBRjuQBQjutvIOQtwIOnSkeQnSkflvgzQhmgOhKAAQi/AAAABggEA5NAERQAABdATBBQATBCAcAAQAbAAAThCQAUhBAAhdIgBgoQhBAyhBgyIgBAogEA35gBHQBgAOBNA9QBNA+gPguQgQgthag6Qhag7hWARQhWARgyAWQgyAWgMAVQgMAWBQggQA4gWBAAAQAcAAAdAEgAHGyBQAShbgbj2QACjNBmhPQBThWByAlQCmA0BxiPQBhjMDXiAIGQhoQBAgQAghgQA+h6CKguQBMgYBMAYQDbBkANCUQAaCZgZBtQgaBtEIGdQiZgwjKAAIgBAAIAAAAQkQAAlpBXIgXAGQqHCgjWC3QjWC4jqDPQBKhrAtjjgEApggY+IAAAAg");
	this.shape_4.setTransform(637.5437,299.9294);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},29).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fence = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fence
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(1,1,1).p("ECuGgIQIAAALECuGAEjIAAFcEiuFgJ6IAAgE");
	this.shape.setTransform(737.9,775.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#663300").s().p("EBZWAIxIAAAEIgFgEIsQgOIAAABIgBgBMj+5gEpIAAmRMBZRABoIAAhvMhbagBqIAAmSMCxuADPIAAgDIACADMC0OADSIAAGQIpzgLMhOzgBbIAABuMBatABqIAAGSgEBNBACRIKcAMIAAhvIqcgMgEA3TAB4IT2AXIAAhvIz2gXgEAlLABjIQPATIAAhvIwPgSgAR9BMIRWAUIAAhtIxWgUgAgcA3IQhATIAAhuIwhgTgAz0AgIRgAUIAAhtIxggUgEhWwgAtMBBEABLIAAhuMhBEgBMg");
	this.shape_1.setTransform(776.05,708.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},119).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_dots = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// dots
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("EAm7A4bQhfAAhEiwQhDiwAAj4QAAj5Cxk6QCyk6AjBMQAjBMidDiQidDhBFD+QBFD9AmC3QAnC4hgAAIAAAAgEBNkA0FQjLh1AAilQAAimCiBcQCiBbD3DLQD2DKEakmQEakmAACmQgBCljKB1QjKB2keAAQkdAAjKh2gEBDsAuUQgqrKj5AAQj4AAnml1Qnml2AAiFQAAiEIxH3QIyH3DGjWQDFjVBCH3QBCH3gxGsQgSCggSAAQgdAAgZm/gEAViAtcQlRmhgzAxQgxAyhHAAQhGAAgygyQgxgxgBhHQABhGAxgyQAygyBdAhQBdAgFtH6QDHEUgKAAQgJAAiZi9gEgTeAueQikhniDgUQiEgUhJiEQhJiEAAi7QAAi6BJiEQBKiEBnAAQBnAAiYEBQiZECFYE8QEEDugeAAQgJAAgogZgEgABAlAQklqpgNiwQgMiwA6hmQA7hnBTAAQBTAAhwCYQhwCXA9B/QA9CAAzBHQAzBHCkJiQBNEggYAAQgcAAialogEg0mAo4QhdhdABh1QABh0BvCbQBwCaDfsZQDfsYBQBaQBPBai0KZQi1KYgIBdQgJBeiFAAQiEAAhehegEhP3An4QiHhDAAhfQAAhgCHhDQCHhDAXDMQAYDMEhh5QEhh5AMBQQAOBPiHBDQiHBEi+AAQi/AAiHhEgEBUkAd2QhYAAg9ikQg+ikAAjoQAAjoA+ikQA9ikBYAAQBWAAidFgQieFgCfBgQCeBggBBwQAABwhXAAIAAAAgEhf9AcSQAAhTBzg6QByg7CiAAQCiAABerRQBerSAABTQABBTg/LnQg+LniSgxQiSgwiiBVQhTAsgoAAQgnAAgBgpgEhJ1AZ5Qg3jBAAkSQAAkRBKkBQBKkBB6iZQB6iZhEGaQhDGahNERQhNESBTDBQBTDBhPAAQhPAAg4jBgEA6kAY5QjroBgvAAQgwAAgigiQghghAAgwQAAgvAhgiQAigiAwAAQAwAAA1BYQA1BXC1IcQBdEVgRAAQgQAAhxj5gEgkxAY/QgahvAAieQAAidAahwQAahvAmAAQAlAAAaBvQAaBwABCdQgBCegaBvQgaBvglAAQgmAAgahvgAVuQgQkdkmiMjSQiMjSGYGzQGZGzDWg1QDXg2DUsnQDWsmhMH8QhLH9iAGlQiBGkjQAAQjPAAkckmgAxxPrQg+kKAAl5QAAl4BBkSQBCkSE/mWQE/mVlbKdQlbKcAZF6QAZF6BWEUQBWEUhXAAQhXAAg9kLgAIqPOQkqoggliwQgniwAAj3QAAj5AniwQAliwA3AAQA2AAg1C6QgzC6BgHQQBhHRDHHtQBeDrgSAAQgTAAickdgEgzeAOjQgahkAAiNQAAiNAahjQAGgUAGgQQANBxAXCaQA2FdgmAAQglAAgbhjgEhcnALEQg1jKAAkeQAAkdA1jLQA1jKBKAAQBLAAg+D+Qg9D+AIEaQAIEbA1CZQA1CahKAAQhKAAg1jKgEg6+ACnQAWqugTgTQgSgTgBgbQABgbASgTQAUgTAaAAQAbAAAUATQATATgfG4QgeG3gmElQgMBYgGAAQgPAAARnigEBFtAF8QAQkbAVjVQAVjVANAAQAMAAAIA3QAKA4gBBPQABBOgKA4QgIA3gMAAQgNAAglEzQgTCfgEAAQgFAAAHiIgAcVEtQmdlTgnAmQgoAog3AAQg4AAgogoQgogmABg4QgBg4AogoQAognCQBUQCPBVFsFeQC5CygQAAQgPAAjKingEA39AC+QilAAh2h2Qh1h0AAilQAAimExk4QExk5EOhtQEPhuo/HyQo/HyF7BeQF7BdhhBxQhgBximAAIAAAAgEhOWgA3Qgah+AAiyQAAiyAah+QAbh+AlAAQAmAAAZB+QAbB+hEBMQhEBLAeDTQAeDRgaASQgDACgDAAQgXAAgXhtgEAiZgBFQgyAAgkiKQgiiKAAjCQAAjDAiiKQAkiJAyAAQAyAAggCBQghCBgZDAQgZC/A5CWQA6CVgyAAIAAAAgEBSMgDxQg7iEAAi6QAAi7A7iEQA6iDBUAAQBSAAglBPQgmBQBUBlQBUBlAMAaQAMAbABAkQgBC6g6CEQg7CEhSAAQhUAAg6iEgA7IlQQjtmJimAAQimAAh2hKQh1hJAAhnQABhoByhCQBxhDA1DjQA1DjEmBKQEmBJA7FQQAcCagkAAQgpAAiAjTgAQomgQgEgvAAhCQAAhDAEgvQADguADAAQAFAAACAuQADAvAABDQAABCgDAvQgCAvgFAAQgDAAgDgvgEAvJgRBQBXnLAwhuQAwhvhFhpQhFhph6odQh5odDjITQBVDIA7CDQAtBlAeA7QAhBCANANQAoAoAAA4QAAA4jTJNQh3FLgYAAQgTAAAnjJgA26v4QhygwhxkmQhwkmAAjgQAAjgBFifQBHieBjAAQBkAAiHD+QiHD+BvCtQBtCsBTErQBHEAhLAAQgNAAgQgHgEAjpgThQkwipiFgkQiGgjgxAAQgyAAgkgkQgigjAAgxQAAgyAigjQAkgjAyAAQAxAAG1FEQEgDWghAAQgRAAhog6gEg2hgS5QhPAAg4jOQg4jNAAkiQAAkiA4jNQA4jNBPAAQBOAAAvDFQAvDGiOClQiPClBgFSQBfFShOAAIAAAAgAFs15QB8khgrgsQgsgsAAg+QAAg+AsgsQArgsA/AAQA9AAAsAsQAsAsghByQghBxjFEZQhiCLgTAAQgTAAA/iSgEhcGgV2QguhsAAiaQAAiZAuhtQAwhsAzAFQA0AGhUCdQhTCeCRBjQCRBjgvBsQgvBthCAAQhCAAgwhtgEhLbgVSQg1g1AAhKQAAhLDGl9IFYqYQCSkbkyMkQkzMjCPhBQCOhBg1A1Qg1A1hKAAQhLAAg0g1gA0K6WQgIhZgBh7QAUBlAIBKQAOCGgMAAQgMAAgJhhgEBE6gboQiVgmABg2QgBg2CGggQCFghAXBFQAYBEFhgkQFigkgBA2QAAA2iVAmQiVAnjTAAQjUAAiWgngEgmlgd2QhoAAhKj5QhIj5gBlgQABlgBIj5QBKj5BoAAQBnAAihGlQihGlCoDkQCpDlgIDJQgHDIhnAAIAAAAgEhOyglCQg6iNAAjHQAAjHA6iMQA7iNBTAAQBTAAA7CNQA6CMisBgQitBfBWDkQBXDjg3ARQgGABgGAAQgyAAg1h9gEBYZgjUQh3AAhThTQhThUgBh2QABh2BThTQBThUB3AAQB2AAAlBKQAmBJkMA6QkNA7DmCZQDnCZh1AAIAAAAgEgDtgl7Qjeh1AAimQAAilDJheQDJheAPFEQAOFDGYhQQGZhQCIAQQCIAQjfB1QjeB1k7AAQk7AAjfh1gEA7Rgl/Qhwg+AAhXQAAhXBwg9QBvg+gYB2QgZB1CHAvQCHAuCegPQCfgQhwA+QhvA9idAAQieAAhvg9gEAZsgmqQhohoABiTQAAhMAchBQB6C4BEBeQCDC0BViVQBUiWAKgXQBijhAOASQBFBcAAB4QABCThoBoQhpBoiSAAQiTAAhphogEgVCgtYQg1hyAAiiQAAihA1hzQA1hyBKAAQBLAAhZByQhYBzBmChQBmCigOByQgOByhKAAQhKAAg1hygEhcngtQQhKgaABgmQgBglBKgbQBJgaBoAAQBoAABJAaQBKAbgCAgQgCAghagXQhZgXhWA3Qg6Akg0AAQgZAAgYgIg");
	this.shape.setTransform(614.15,359.125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(680).to({_off:false},0).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_clouds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clouds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgeXAiKIAAAAQkGggheAAQhSAAhIgaQixBHjhAAQk0AAjbiGQjbiGAAi9QAAi7DWiFIAFgEQBAgnBIgbQgTg6AAhCQgBicBvhvQBuhuCdgBQCXABBtBoQAhhYBIhJQAhghAkgYQBwhNCOAAQCQAABuBNQAlAYAhAhQB0B1AQCfQB5gsCUAAQDsAACoBwQCnBvAACdIgBAQQgGCIiJBlIAbALQDfBhAACHQAACIjfBgQjfBfk8AAQjUAAirgrgEBLJAdTIABAAQiagTg3AAQgwAAgqgPQhpAqiDAAQi2AAiBhPQiAhPAAhvQAAhuB+hOIACgCQAngXApgPQgLgjAAgnQAAhbBBhBQBBhBBbAAQBaAABAA+QATg1ArgqQATgTAVgPQBCgsBTAAQBVAABAAsQAWAPATATQBFBFAIBdQBIgaBXAAQCLAABhBCQBjBBAABcIAAAJQgEBQhRA8IAQAGQCEA5AABQQAABPiEA5QiCA4i6AAQh9gBhlgZgAanVmIAAAAQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGIAFgDQBAgnBIgbQgTg7gBhCQABicBuhuQBuhuCdAAQCXgBBtBpQAhhYBJhIQAhghAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5grCUgBQDtAACnBwQCoBwgBCeIAAAOQgHCJiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhTgAJEIABAAQnEg4igAAQiPAAh8grQkwB6mEAAQoVAAl6jnQl4jnAAlFQAAlDFwjkIAIgGQBvhDB9gxQgihkAAhxQAAkOC/i+QC9i/EOAAQEGAAC7C0QA5iYB9h8QA4g5A/gqQDAiFD2AAQD2AAC/CFQA/AqA5A5QDJDJAaERQDQhLD+AAQGZAAEgDAQEhDBAAEQIgBAaQgMDrjrCuIAuATQGCClgBDpQABDqmCClQmACmogAAQlvAAkmhMgEBhUAGQIAAAAQnDg4ihAAQiPAAh8grQkxB6mDAAQoUAAl6jnQl4jmAAlGQAAlDFwjlIAIgFQBvhEB8gwQghhkgBhyQAAkNC/i+QC+i/ENAAQEGAAC8C0QA5iYB8h9QA5g5A+gqQDAiED2AAQD2AADACEQA+AqA5A5QDJDKAaERQDQhMD/AAQGYABEgDAQEgDAAAEQIAAAaQgNDrjqCuIAuATQGCCmAADqQAADomCCmQl/CmogAAQlwgBklhLgAlClVIAAAAQiagUg2ABQgxAAgqgPQhpAqiEAAQi1AAiAhPQiBhPABhvQAAhuB9hOIADgCQAmgXAqgQQgMgjAAgnQAAhbBChBQBAhBBbABQBaAABAA8QATg0ArgqQATgTAWgPQBBgtBTAAQBUAABCAtQAVAPATATQBFBEAJBeQBHgaBWAAQCLAABiBCQBiBBAABdIAAAJQgEBQhQA7IAQAGQCCA5AABQQAABQiCA4QiEA4i3AAQh+AAhkgZg");
	this.shape.setTransform(1199.2387,9.3978);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdgBQhSAAhJgZQiwBHjhAAQk1AAjaiGQjbiGAAi9QAAi7DViFQBGgrBIgbQgUg6AAhCQAAicBuhvQBvhuCcgBQCYABBtBoQAhhYBIhJQAhghAkgYQBvhNCPAAQCPAABvBNQAlAYAgAhQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiIBlIAbALQDfBgAACIQAACIjfBgQjfBfk7AAQjVAAirgrgEBLJAdTQiZgTg3AAQgwAAgqgPQhpAqiDAAQi2AAiBhPQiAhPAAhvQAAhuB+hOQAogYAqgQQgLgjAAgnQAAhbBBhBQBBhABcAAQBZgBBAA+QATg1ArgqQATgTAVgPQBCgsBUAAQBTAABBAsQAWAPAUATQBEBFAIBdQBIgaBXAAQCLAABhBCQBjBBAABcQgEBZhQA8QCTA+gBBRQAABPiDA5QiCA4i6AAQh9gBhlgZgAanVmQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgbQgTg7gBhCQABicBuhuQBuhuCcgBQCYAABtBpQAhhYBJhIQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5grCUgBQDtAACnBwQCnBwAACeQgHCXiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgsgEhJMAKQQluAAkmhMIAAAAQnDg4igAAIgBAAQiMAAh7gqIgDgBQkuB5mAABIgFAAQoTAAl4jlIgEgCQl2jlgClDIAAgEQAAlDFwjkIAIgGQBvhDB9gxIgCgDQgghiAAhwIAAgEQAAkKC+i+IABgBQC+i+ENAAIABAAQEEABC8CzIAAgCQA6iWB7h8IABgBQA5g5A9gpIAEgDQC/iBDzgBIADAAQD0ABC/CEIADACQA9AqA3A3IACACQDHDIAaEQIADgBQDPhKD9AAIADAAQGWABEgC/IABADQEfC/AAEPIAAACIAAAYIAAABQgODqjpCuIACABIAsASIACABQF/ClAADoIAAACQgCDol/ClIgCABQmACloeAAIgCAAgEBrpAHcQltgBkmhKIgCgBQm/g4ijAAIgCAAQiPAAh8grQkwB6mDAAIgBAAQoUAAl5jmIgBgBQl3jmgBlEIAAgCQAAlDFwjlQB3hJB8gwQghhkAAhyQAAkNC+i+QC/i/EMAAQEGAAC8C0QA5iYB8h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDPhKD+gBIACAAQGXABEfC/QEhDBABEPIAAABIgBAaQgMDrjpCtIgBABIAtATIABAAQF/ClACDpIAAACQAADol/ClIgCABQmACmodAAIgCAAgAhhk8Qh9AAhkgZIAAAAQiXgTg4AAIgBAAQgwAAgpgOIgCgBQhoAqiEAAIgBAAQi1AAh/hOIgBgBQiAhPAAhvQAAhuB+hOQApgaApgPQgMgkAAgmQAAhcBChAQBBhBBaABQBbABA/A7QAUg1AqgpQATgTAWgPQBBgtBTAAQBVABBBAsQAVAQATASQBEBEAKBdQBHgZBVAAQCLAABhBBQBiBCACBaIAAAJIAAADQgEBPhOA6IgCACIAOAGIACAAQCBA5ACBPIAAABQgBBPiBA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_1.setTransform(1189.2,10.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgeXAiKQkGghhdAAQhTAAhHgYQixBGjhAAQk1AAjbiFQjbiGAAi+QAAi7DXiGQBFgpBIgcQgUg7AAhBQAAicBvhvQBthuCdAAQCYAABsBoQAihZBIhIQAhghAkgYQBvhNCPAAQCPAABvBNQAkAYAiAhQB0B1APCfQB5gsCUAAQDsAACnBwQCoBwAACcQgHCYiIBlIAaAMQDgBgAACHQAACIjgBfQjeBgk8ABQjVAAirgsgEBLKAdTQiagTg2AAQgxAAgrgOQhnApiFAAQi1AAiAhPQiBhOAAhwQAAhtB+hPQApgZAqgQQgMgiAAgnQAAhbBBhBQBBhBBbAAQBaABBAA8QATg0ArgqQATgTAVgPQBCgsBTAAQBVAABAAsQAWAPATATQBFBEAJBeQBHgaBWAAQCLAABjBCQBiBBAABdQgEBZhRA6QCTBAAABQQABBPiDA5QiEA3i4AAQh+ABhkgagAanVnQkGghhdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiFQBFgrBJgcQgVg6ABhCQAAicBuhuQBuhvCcAAQCZABBsBoQAhhYBIhIQAighAkgYQBwhNCOAAQCPAABvBNQAkAYAhAhQB1B0APCeQB5grCUAAQDtgBCnBwQCnBwABCdQgICYiIBlIAbALQDfBhAACHQAACIjfBfQjgBgk7AAQjVAAirgrgEhJMAKQQluAAkmhLIAAAAQnDg5igAAIgBAAQiMAAh8gpIgBgBQkvB4mAABIgGAAQoSAAl4jlIgEgCQl2jlgClDIAAgDQAAlDFwjmIAIgFQBvhEB8gvIAAgEQgihjAAhwIAAgCQABkMC+i9IABgBQC+i+EMABIADAAQEDAAC7C0IABgCQA6iYB7h8IABAAQA4g4A/grIACgBQC/iDD0AAIAEAAQDzABC/CDIADACQA9AqA3A3IACACQDHDJAaEQIADgBQDQhKD8AAIADAAQGWABEfDAIADABQEeDAAAEPIAAACIgBAXIAAACQgNDrjpCtIACABIAsASIACABQF/ClAADoIAAACQgCDpl/CkIgCABQmACloeAAIgCAAgEBrpAHcQluAAkkhLIgEgBQm+g3ijgBIgDAAQiNAAh8grQkyB5mBAAIgBAAQoVAAl4jlIgBgBQl4jmgBlEIAAgCQAAlDFxjlQB2hJB9gwQgjhkAAhyQAAkNC/i+QC/i+EMAAQEGgBC7C1QA5iZB9h9QA5g4A+grQDAiDD1gBQD3ABC/CCQA/ArA4A4QDJDKAaERQDQhKD+gBIACAAQGXAAEgDAQEgDBABEOIAAACIAAAaQgNDrjpCuIgBABIAtATIABAAQGAClABDoIAAABQAADpl/ClIgCABQmAClodABIgCAAgAhhk8Qh8AAhlgaIgBAAQiXgSg3AAIgCAAQgvAAgqgOIgCgBQhnAqiEAAIAAAAQi1AAiAhPIgBgBQiAhOAAhvQAAhuB9hPQApgZApgPQgLgkAAgmQAAhbBBhBQBChABbAAQBaABA/A8QAVg2ApgpQATgUAVgOQBDgsBTgBQBUABBAAsQAWAPAUATQBEBEAIBdQBHgZBXAAQCJAABiBBQBiBCACBaIAAAJIAAACQgEBQhOA6IgCACIAOAFIACABQCCA4AABQIAAABQABBPiCA5IgBAAQiDA4i2AAIgDAAg");
	this.shape_2.setTransform(1179.25,10.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdgBQhTAAhHgZQixBIjhgBQk1AAjbiGQjbiGAAi9QAAi7DXiFQBFgqBIgcQgUg7AAhBQAAicBvhvQBthvCdAAQCYABBsBoQAihYBIhJQAhggAkgZQBwhNCOAAQCPAABvBNQAkAZAiAgQB0B1APCfQB5gsCUAAQDtAACmBwQCoBvAACdQgHCYiIBlIAaALQDgBhgBCHQABCIjgBgQjeBgk8AAQjVgBirgrgEBLJAdTQiZgTg3AAQgwAAgrgPQhnAqiFAAQi1AAiAhPQiBhPAAhvQAAhtB+hPQAogZAqgPQgLgjAAgnQAAhbBBhBQBBhBBcAAQBZAABAA+QATg1ArgqQATgTAVgPQBCgsBUAAQBUAABAAsQAWAPATATQBFBFAJBdQBHgaBWAAQCLAABiBCQBjBBAABcQgFBZhQA8QCTA+AABRQAABPiCA5QiEA3i4AAQh+ABhlgagAanVmQkGgghdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiFQBFgrBJgbQgVg7AAhCQAAicBvhuQBuhuCcgBQCZAABsBpQAhhYBIhIQAighAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5grCUAAQDtAACnBvQCnBwABCeQgICXiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgsgEhJMAKQQluAAkmhMIAAAAQnDg4igAAIgBAAQiMAAh7gqIgCgBQkvB5mAABIgFAAQoTAAl4jlIgEgCQl2jlgClDIAAgEQAAlDFwjlIAIgFQBvhEB9gvIgBgEQgihiAAhwIAAgEQACkKC9i+IABgBQC+i9EMAAIADAAQEDAAC7C0IABgDQA6iXB7h7IABgBQA4g4A/gqIADgCQC+iDD0AAIAEAAQDzABC/CEIADABQA9ArA3A3IACABQDHDJAaEQIADgBQDQhKD8AAIADAAQGWAAEfDBIACACQEfC/AAEPIAAACIgBAXIAAACQgNDrjpCtIACABIAsASIACABQF/ClAADoIAAACQgBDpmACkIgCABQmACloeAAIgCAAgEBrpAHcQlugBklhKIgDgBQm+g3ijgBIgDAAQiNAAh9grQkxB6mBAAIgBAAQoVAAl4jmIgBgBQl4jlgBlFIAAgCQAAlDFxjlQB2hJB9gwQgjhkABhyQgBkNC/i+QC/i+EMAAQEGgBC8C1QA4iZB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA/ArA4A4QDJDKAaERQDQhKD+gBIACAAQGWABEhC/QEgDBABEPIAAABIAAAaQgNDrjpCtIgBABIAtAUIABAAQF/CkACDpIAAACQAADol/ClIgCABQmACmodAAIgCAAgAhhk8Qh8AAhlgZIgBAAQiXgTg3AAIgCAAQgvAAgqgOIgCgBQhnAqiDAAIgBAAQi2AAh/hPIgBAAQiAhPAAhvQAAhuB9hOQApgaApgPQgLgkAAgmQAAhcBBhAQBChABbAAQBaABA/A7QAVg1ApgpQATgTAVgPQBCgtBUAAQBUABBAAsQAWAQAUASQBEBEAIBdQBHgZBXAAQCJAABiBBQBjBBABBbIAAAJIAAADQgEBPhOA6IgCACIAOAFIACABQCCA4AABQIAAABQABBPiCA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_3.setTransform(1169.25,11.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSAAhJgaQiwBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiFQBEgrBJgbQgUg7AAhBQAAicBuhvQBvhvCcAAQCYAABsBpQAhhZBJhIQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDtAACnBwQCnBvAACdQgICYiHBlIAaALQDgBggBCIQAACIjfBgQjfBgk7AAQjVAAirgsgEBLJAdTQiZgTg3AAQgwAAgrgPQhnAqiFAAQi1AAiBhPQiAhPAAhvQAAhuB+hOQAogZAqgQQgLgiAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBUAABAAtQAWAPAUATQBEBEAIBeQBIgaBWAAQCLAABiBCQBjBBAABcQgFBZhPA8QCTA+gBBQQAABQiCA4QiEA4i4AAQh+AAhlgZgAanVmQkGgghdAAQhTAAhHgZQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6AAhCQAAicBvhuQBuhvCcAAQCYAABtBpQAhhZBJhHQAhghAkgZQBvhMCPAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtAACnBwQCnBwABCdQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgsgEhJMAKQQluAAkmhMIAAAAQnDg4igAAIgBAAQiMAAh7gqIgCAAQkvB4mAABIgFAAQoTAAl4jlIgEgCQl2jmgClDIAAgDQAAlDFwjlIAIgFQBvhDB9gwIgBgDQgihjAAhwIAAgDQACkLC9i+IABgBQC+i+EMAAIACAAQEFABC6CzIABgBQA6iXB7h8IABgBQA4g4A/gqIADgCQC+iDD0AAIAEAAQD0ABC+CDIADACQA9AqA3A3IACACQDHDJAaEQIADgBQDPhKD9AAIADAAQGWAAEfDAIACACQEfDAAAEPIAAACIgBAXIAAACQgNDqjpCuIACABIAsASIACABQF/ClAADoIAAACQgBDomAClIgCABQmACloeAAIgCAAgEBrpAHbQltAAkmhKIgCgBQm/g4ijAAIgDAAQiNAAh9grQkwB5mCAAIgBAAQoVAAl5jlIgBgBQl3jmgBlEIAAgCQAAlDFwjlQB3hJB9gwQgjhkABhyQAAkNC+i+QC/i/EMAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA/ArA4A4QDJDKAaERQDQhKD+gBIACAAQGWAAEhDAQEgDBABEPIAAACIAAAZIAAAAQgNDrjpCuIgBAAIAtATIABAAQF/CmACDoIAAACQAADol/ClIgCABQl/CloeAAIgCAAgAhhk8Qh8AAhlgaIgBAAQiXgSg3gBIgCAAQgvAAgqgNIgBgBQhoApiDAAIgBAAQi2AAh/hOIgBgBQiAhOAAhvQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhBQBChABagBQBbACA/A7QAVg1ApgpQATgUAWgOQBBgtBTAAQBVABBAAsQAXAPATATQBDBEAJBdQBHgZBXAAQCJAABiBBQBjBCABBaIAAAJIAAADQgEBPhOA6IgBACIANAGIACABQCBA4ACBPIAAABQAABPiCA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_4.setTransform(1159.25,12.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdgBQhTAAhHgZQixBIjhgBQk1AAjaiGQjciFAAi+QAAi7DWiFQBFgqBJgcQgUg7AAhBQAAicBvhvQBthvCdAAQCYAABsBpQAhhZBJhIQAhghAkgYQBwhNCOAAQCPAABvBNQAkAYAhAhQB1B1APCfQB5gsCUAAQDsAACnBwQCoBwAACcQgHCYiJBlIAbAMQDgBgAACHQAACIjgBfQjeBhk8AAQjVAAirgsgEBLKAdTQiagTg2AAQgxAAgqgOQhpApiEAAQi1AAiAhPQiBhOAAhwQAAhtB+hPQApgZAqgPQgMgjAAgnQAAhbBBhBQBBhBBbAAQBaAABAA+QATg1ArgqQATgTAVgPQBCgsBTAAQBUAABCAsQAVAPATATQBFBEAJBeQBHgaBWAAQCLAABjBCQBiBBAABcQgEBahRA7QCUA/AABQQAABPiEA5QiDA3i5AAQh9ABhkgagAanVnQkGghhdAAQhTAAhIgZQixBHjhAAQk0AAjbiGQjbiGAAi9QAAi7DWiFQBFgrBIgbQgUg7ABhCQgBicBvhuQBuhuCdgBQCXABBtBoQAhhYBIhIQAighAkgYQBwhNCOAAQCPAABvBNQAlAYAgAhQB1B0APCeQB5grCUAAQDtgBCnBwQCnBwAACdQgHCYiIBlIAbALQDfBgAACIQAACIjfBfQjgBgk7AAQjVAAirgrgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiMAAh8gpIgCgCQkuB5mAABIgGAAQoTAAl4jlIgEgCQl2jmgBlDIAAgDQAAlCFwjmIAIgFQBvhEB8gvIgBgEQgghjgBhvIAAgDQACkMC9i9IABgBQC9i9ENAAIACAAQEEAAC8C0IABgDQA5iXB7h7IABgBQA4g4A+gqIADgCQC/iDD0AAIADAAQD0ABC+CEIAEABQA8AqA3A4IADABQDGDJAbEQIACgBQDQhKD8AAIADAAQGXAAEfDBIACACQEeC/ABEPIAAACIAAAXIAAACQgODrjpCtIABABIAsASIACABQF/ClABDoIAAACQgCDpl/CkIgCABQmACloeAAIgCAAgEBrpAHcQluAAklhLIgDgBQm+g3ijgBIgDAAQiOAAh7grQkyB6mCAAIgBAAQoUAAl5jmIgBgBQl3jlgBlFIAAgCQAAlDFwjlQB3hJB8gwQgihkAAhyQAAkNC+i+QDAi+EMAAQEGgBC7C1QA5iZB9h9QA5g5A/gqQC/iDD1gBQD3ABC/CCQA+ArA5A4QDJDKAaERQDQhKD+gBIACAAQGWABEgC/QEhDBABEOIAAACIgBAaQgMDrjpCtIgBACIAtATIABAAQGAClABDoIAAABQAADpmAClIgBABQmACloeABIgBAAgAhgk8Qh+AAhjgZIgCAAQiXgTg3AAIgCAAQgwAAgpgOIgCgBQhnAqiEAAIgBAAQi0AAiAhPIgBgBQiAhOAAhvQAAhuB9hPQApgZApgPQgLgkAAgmQABhbBBhBQBAhABbAAQBbABA/A7QAUg1AqgpQAUgUAUgOQBCgtBUAAQBUABBAAsQAXAPASATQBEBEAKBdQBHgZBVAAQCLAABhBBQBiBCACBaIAAAJIAAACQgFBQhOA6IgBACIAOAFIACABQCCA4AABQIAAABQAABPiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_5.setTransform(1149.3,13);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTgBhHgZQixBHjhAAQk1AAjaiGQjciGAAi9QAAi7DWiFQBGgrBIgbQgUg6AAhCQAAicBvhvQBthuCdgBQCYABBsBoQAihYBIhJQAhghAkgYQBvhNCPAAQCPAABvBNQAkAYAiAhQB0B1APCfQB5gsCUAAQDsAACnBwQCoBvAACdQgHCYiIBlIAaALQDgBgAACIQAACIjgBgQjeBfk8AAQjVAAirgrgEBLKAdTQiagTg2AAQgxAAgrgPQhnAqiFAAQi1AAiAhPQiBhPAAhvQAAhuB+hOQApgYAqgQQgMgjAAgnQAAhbBBhBQBBhABbgBQBaAABAA+QATg1ArgqQATgTAVgPQBCgsBTAAQBUAABCAsQAVAPATATQBFBFAJBdQBHgaBWAAQCLAABjBCQBiBBAABcQgEBZhRA8QCUA+AABRQAABPiEA5QiCA4i5AAQh+gBhkgZgAanVmQkGgghdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgbQgVg7ABhCQAAicBuhuQBuhuCdgBQCYAABsBpQAhhYBIhIQAighAkgZQBwhMCOAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5grCUgBQDtAACnBwQCnBwAACeQgHCXiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiMAAh8gqIgCgBQkuB5mAABIgGAAQoTAAl3jlIgEgCQl2jlgClDIAAgEQAAlDFwjkIAIgGQBvhDB8gxIgBgCQgghjgBhwIAAgDQABkMC+i9IABgBQC+i+ENAAIACAAQEEABC6CzIACgCQA5iWB7h8IABgBQA4g5A/gpIACgDQC/iBD0gBIADAAQD0ABC/CEIADACQA9AqA3A3IACACQDHDIAaEQIADgBQDPhKD9AAIADAAQGWABEfC/IADADQEeC/AAEPIAAACIgBAYIAAABQgNDqjpCuIACABIAsASIACABQF/ClAADoIAAACQgCDol/ClIgCABQmACloeAAIgCAAgEBrpAHcQlugBkkhKIgEgBQm+g3iigBIgEAAQiNAAh8grQkxB6mCAAIgBAAQoVAAl4jmIgBgBQl4jmgBlEIAAgCQAAlDFxjlQB3hJB8gwQgjhkAAhyQABkNC+i+QC/i/EMAAQEGAAC7C0QA5iYB9h9QA5g5A/gqQC/iED1AAQD3AAC/CDQA+ArA5A4QDJDKAaERQDQhKD+gBIACAAQGXABEfC/QEhDBABEPIAAABIgBAaQgMDrjpCtIgBABIAtATIABAAQGAClABDpIAAACQAADol/ClIgCABQl/CmoeAAIgCAAgAhgk8Qh+AAhjgZIgCAAQiWgTg4AAIgCAAQgvAAgqgOIgCgBQhnAqiEAAIgBAAQi0AAiAhOIgBgBQiAhPAAhvQAAhuB9hOQApgaApgPQgLgkAAgmQABhcBAhAQBChBBbABQBaABA/A7QAVg1ApgpQAUgTAUgPQBDgtBTAAQBUABBAAsQAWAQAUASQBEBEAIBdQBIgZBWAAQCJAABiBBQBjBCABBbIAAAIIAAADQgEBPhOA6IgCACIAOAGIACAAQCCA5AABPIAAABQAABPiBA5IgBAAQiDA4i2AAIgCAAg");
	this.shape_6.setTransform(1139.3,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTAAhHgZQixBHjhAAQk1AAjbiGQjbiGAAi+QAAi7DXiFQBFgqBIgcQgUg6AAhCQAAicBvhvQBthvCdAAQCYAABsBpQAihZBIhIQAhghAkgZQBvhMCPAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDsAACnBwQCoBvAACeQgHCXiIBmIAaALQDfBgAACHQAACIjfBgQjeBgk8AAQjVAAirgsgEBLKAdTQiagTg3AAQgwAAgrgOQhnApiFAAQi1AAiAhPQiBhOAAhvQAAhuB+hPQAogYArgQQgMgjAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABCAtQAVAPATATQBFBEAJBeQBHgaBWAAQCMAABhBCQBjBBAABdQgEBZhRA7QCTA/AABQQABBPiDA5QiEA4i4AAQh+AAhkgagAanVnQkGghhdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6AAhCQAAicBvhuQBuhvCcAAQCZAABsBpQAhhZBIhHQAighAkgZQBwhMCOAAQCPAABvBMQAkAZAhAhQB1B0APCeQB5gsCUAAQDtAACnBwQCnBwAACdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgrgEhJLAKQQluAAkmhMIgBAAQnDg4igAAIgBAAQiMAAh8gqIgBAAQkvB4mAABIgFAAQoTAAl4jlIgEgCQl2jmgClDIAAgDQAAlDFwjlIAJgFQBuhDB9gwIgBgDQghhjgBhwIAAgDQABkLC+i+IABgBQC+i9EMgBIADAAQEDABC7CzIABgBQA6iXB7h8IABgBQA4g4A/gqIACgCQC/iCD0gBIAEAAQDzABC/CDIADACQA9AqA3A3IACACQDHDJAaEQIADgBQDQhKD8AAIADAAQGWAAEfDAIADACQEeDAAAEPIAAACIgBAXIAAACQgNDqjoCuIABABIAsASIACABQF/ClAADoIAAACQgCDol/ClIgBABQmBCloeAAIgBAAgEBrpAHbQluAAklhKIgDgBQm+g4iiAAIgEAAQiNAAh8grQkyB5mBAAIgBAAQoVAAl4jlIgBgBQl4jmgBlEIAAgCQAAlDFxjlQB3hJB8gwQgjhkABhyQAAkNC+i+QC/i/EMAAQEGAAC7C0QA6iYB8h9QA5g5A/gqQC/iED1AAQD3AAC/CDQA+ArA5A4QDJDKAaERQDRhKD9gBIADAAQGWABEgC/QEgDBABEPIAAACIgBAZIAAAAQgMDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQAADol/ClIgCABQl/CloeAAIgCAAgAhhk8Qh8AAhlgaIgBAAQiWgSg4gBIgCAAQgvAAgqgNIgCgBQhnApiEAAIAAAAQi2AAh/hOIgBgBQiAhOAAhvQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhBQBChABbgBQBaACA/A7QAVg1ApgpQAUgTAUgPQBCgsBUgBQBUABBAAsQAWAPAUATQBEBEAIBdQBIgZBWAAQCKAABhBBQBjBCABBaIAAAJIAAADQgEBPhOA6IgBACIANAGIADABQCBA4AABPIAAABQABBPiCA5IgBAAQiDA4i2AAIgDAAg");
	this.shape_7.setTransform(1129.3,14.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdgBQhTAAhIgZQiwBIjhgBQk1AAjaiGQjbiGAAi9QgBi7DWiFQBFgqBJgcQgUg7AAhBQAAicBuhvQBvhvCcAAQCYABBtBoQAhhYBIhJQAhggAkgZQBvhNCPAAQCPAABvBNQAlAZAgAgQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiIBlIAbALQDfBhABCHQgBCIjfBgQjfBgk7AAQjVgBirgrgEBLJAdTQiZgTg2AAQgxAAgqgPQhpAqiDAAQi2AAiBhPQiAhPAAhvQAAhtB+hPQAogZAqgPQgLgjAAgnQAAhbBBhBQBBhBBbAAQBaAABAA+QATg1ArgqQATgTAVgPQBCgsBTAAQBVAABAAsQAWAPAUATQBEBFAIBdQBIgaBXAAQCLAABiBCQBiBBAABcQgFBZhPA8QCSA+ABBRQAABPiEA5QiCA4i6gBQh9ABhlgagAanVmQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiFQBFgrBIgbQgTg7AAhCQAAicBuhuQBuhuCdgBQCXAABtBpQAhhYBIhIQAighAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5grCUAAQDtAACnBvQCoBwgBCeQgHCXiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiMAAh8gqIgCgBQkvB5l/ABIgGAAQoSAAl4jlIgFgCQl1jmgClDIAAgDQAAlDFwjlIAIgFQBvhEB8gvIgBgEQgghiAAhwIAAgEQAAkKC+i+IABgBQC+i9EMAAIACAAQEEAAC8C0IABgDQA5iXB7h7IABgBQA4g4A+gqIADgCQC/iDD0AAIADAAQD0ABC+CDIAEACQA8AqA4A3IACACQDGDIAbEQIACAAQDQhKD8AAIAEAAQGWABEfC/IACACQEfDAAAEOIAAACIAAAYIAAACQgODqjpCuIACABIArASIADABQF/ClAADoIAAABQgCDpl/ClIgCABQmACloeAAIgCAAgEBroAHcQltgBklhKIgDgBQm/g3iigBIgDAAQiNAAh9grQkxB6mCAAIgBAAQoUAAl5jmIgBgBQl3jlgBlGIAAgBQAAlDFwjlQB4hJB7gwQghhkgBhyQAAkNC/i+QC/i+EMAAQEGgBC7C1QA6iZB8h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDPhKD+gBIACAAQGXABEfC/QEhDBABEPIAAABIgBAaQgMDrjpCtIgBABIAtAUIABAAQF/CkACDpIAAACQAADol/ClIgCABQmACmoeAAIgCAAgAhgk8Qh+AAhjgZIgBAAQiYgTg2AAIgCAAQgwAAgpgOIgDgBQhnAqiEAAIgBAAQi0AAiAhPIgBAAQiAhPAAhvQAAhuB+hOQApgaApgPQgMgkAAgmQAAhcBChAQBBhABaAAQBbABA+A7QAVg1AqgpQATgTAVgPQBCgtBTAAQBVABBBAsQAVAQATASQBEBEAKBdQBGgZBWAAQCKAABiBBQBiBBACBbIAAAJIAAADQgEBPhPA6IgBACIAOAFIACABQCBA4ACBQIAAABQgBBPiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_8.setTransform(1119.35,15.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTAAhHgaQixBHjhABQk1gBjaiGQjbiFgBi+QAAi7DWiFQBFgrBJgbQgUg7AAhBQAAicBuhvQBuhuCdgBQCYAABtBpQAghYBJhJQAhggAkgaQBwhMCOAAQCPAABvBMQAlAaAgAgQB1B1APCfQB5gsCUAAQDtAACmBwQCoBvAACeQgICXiIBmIAbAKQDfBgABCIQgBCIjfBgQjfBfk7AAQjVAAirgrgEBLJAdTQiZgTg2AAQgxAAgqgPQhpAqiDAAQi2AAiBhPQiAhPAAhuQAAhvB+hOQAogYAqgQQgLgjAAgnQAAhbBBhBQBBhABbAAQBagBBAA+QATg0ArgrQATgTAVgPQBCgsBTgBQBVABBBAsQAVAPATATQBFBFAJBdQBHgaBXAAQCLAABiBCQBiBBAABcQgFBZhQA8QCUA/AABPQAABQiEA5QiCA4i6AAQh9gBhlgZgAanVmQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgbQgTg7AAhCQgBicBvhuQBuhvCdABQCXgBBtBpQAhhZBIhHQAighAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCoBwgBCeQgHCXiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiMAAh8gqIgCgBQkvB5l/ABIgGAAQoTAAl3jlIgFgCQl2jmgBlDIAAgDQAAlCFwjlIAIgGQBvhDB8gxIgBgCQgghjAAhwIAAgDQABkLC9i+IABgBQC+i+EMAAIACAAQEEABC8CzIABgBQA5iXB7h8IABgCQA4g3A+gqIADgCQC/iDD0ABIADAAQD0AAC+CEIAEACQA8ApA4A4IACACQDGDIAbEQIACgBQDQhKD8AAIAEAAQGWAAEfDAIACADQEfC/AAEPIAAACIAAAYIAAABQgODqjpCuIABABIAsASIADABQF/ClAADoIAAACQgCDol/ClIgCABQmACloeAAIgCAAgEBroAHbQltAAklhKIgDgBQm/g4iiAAIgDAAQiOAAh8grQkxB6mCAAIgBAAQoUAAl5jmIgBgBQl3jmgBlEIAAgCQAAlDFwjlQB4hJB7gwQghhlgBhwQAAkOC/i/QC/i+EMAAQEGAAC7C0QA6iYB8h9QA5g4A/grQC/iED1ABQD3gBC/CDQA/ArA4A4QDJDKAbERQDPhKD+AAIACAAQGXgBEfDAQEhDBABEPIAAACIgBAZQgMDrjpCtIgBABIAtATIABAAQGACmABDoIAAACQAADol/ClIgCABQmACloeAAIgCAAgAhgk8Qh+AAhjgZIgBAAQiYgTg2gBIgDAAQgvAAgpgNIgDgBQhnApiEAAIgBAAQi0ABiAhOIgBgBQiAhPAAhvQAAhuB+hOQApgZApgQQgMgjAAgnQABhbBBhAQBAhBBbgBQBbACA+A7QAWg1ApgoQAUgUAUgPQBCgtBUAAQBUABBBAsQAVAQATASQBEBEAKBdQBHgZBVAAQCKAABiBBQBiBCACBaIAAAJIAAADQgEBQhPA5IgBACIAOAGIACABQCBA4ABBPIAAABQAABPiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_9.setTransform(1109.35,15.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdgBQhTAAhHgZQixBIjhgBQk1AAjaiGQjciFAAi+QAAi7DWiFQBFgqBJgcQgUg7AAhBQAAicBvhvQBthvCdAAQCYAABsBpQAhhZBJhIQAhghAkgYQBwhNCOAAQCPAABvBNQAkAYAiAhQB0B1APCfQB5gsCUAAQDsAACnBwQCoBwAACcQgHCYiIBlIAaAMQDgBgAACHQAACIjgBfQjeBhk8AAQjVAAirgsgEBLKAdTQiagTg2AAQgxAAgqgOQhpApiEAAQi1AAiBhPQiAhOAAhwQAAhtB+hPQAogZArgPQgMgjAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgsBTAAQBUAABCAsQAVAPATATQBFBEAJBeQBHgaBWAAQCLAABjBCQBiBBAABcQgFBahQA7QCUA/AABQQAABPiEA5QiDA3i4AAQh+ABhkgagAanVnQkGghhdAAQhTAAhIgZQiwBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiFQBFgrBJgbQgVg7ABhCQgBicBvhuQBuhuCdgBQCXABBtBoQAhhYBIhIQAighAkgYQBvhNCPAAQCPAABvBNQAlAYAgAhQB1B0APCeQB5grCUAAQDtgBCnBwQCnBwAACdQgHCYiIBlIAbALQDfBgAACIQAACIjfBfQjgBgk7AAQjVAAirgrgEhJMAKQQltAAkmhMIgBAAQnCg4ihAAIgBAAQiMAAh8gqIgCgBQkuB5mAABIgGAAQoTgBl3jlIgEgCQl2jlgClDIAAgDQAAlCFwjmIAIgFQBvhEB8gvIAAgEQgihjAAhvIAAgDQACkMC9i9IABgBQC+i9ENAAIACAAQEDAAC8CzIABgCQA5iXB7h7IABgBQA4g4A/gqIACgCQC/iDD0AAIADAAQD0ABC+CDIAEACQA8AqA4A3IACACQDHDIAaERIACgBQDQhKD8AAIADAAQGWAAEhDAIACACQEeDAAAEOIAAACIAAAYIAAACQgODqjpCuIACABIAsASIACABQF/ClAADnIAAACQgCDpl/CkIgCABQl/CmofAAIgCAAgEBrpAHcQluAAkkhMIgEAAQm/g4ihAAIgEAAQiNAAh8grQkxB6mDAAIgBAAQoUgBl5jmIAAgBQl4jlgBlEIAAgCQAAlDFwjlQB4hJB7gwQgihkAAhyQABkNC+i+QC/i+EMAAQEGgBC7C1QA6iZB8h9QA5g5A/gqQC/iDD1gBQD3ABC/CCQA+ArA5A4QDJDKAaERQDQhLD/AAIABAAQGXABEgC/QEhDBAAEOIAAACIgBAaQgMDrjpCtIAAACIAtATIABAAQF/ClABDoIAAACQAADol/ClIgCABQl/CloeABIgCAAgAhgk8Qh+AAhjgZIgBAAQiYgUg2ABIgDAAQgvgBgpgOIgDAAQhnAqiEAAIgBAAQi0gBiAhOIgBgBQiAhOAAhvQAAhuB9hPQApgZAqgPQgMgkAAgmQABhbBBhBQBBhABaAAQBbABA/A7QAUg1AqgpQAUgUAUgOQBDgtBTAAQBUAABAAsQAXAQATATQBEBEAIBdQBIgZBWAAQCKAABhBBQBjBCABBaIAAAJIAAACQgEBQhOA6IgCACIAPAFIACABQCBA4AABQIAAABQAABPiBA5IgBAAQiDA4i2AAIgCAAg");
	this.shape_10.setTransform(1099.35,16.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdgBQhSABhJgaQiwBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiFQBFgrBHgbQgTg6gBhCQAAicBvhvQBuhuCdgBQCYABBtBoQAghYBJhJQAhghAjgYQBxhNCOAAQCPAABvBNQAlAYAgAhQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiIBlIAbALQDfBhAACHQAACIjfBgQjfBfk7AAQjVAAirgrgEBLJAdTQiZgTg3AAQgwAAgrgPQhoAqiDAAQi2AAiBhPQiAhPAAhvQAAhuB+hOQApgYApgQQgLgjAAgnQAAhbBBhBQBBhBBcAAQBZAABAA+QATg1ArgqQATgTAVgPQBCgsBUAAQBTAABBAsQAWAPAUATQBEBFAIBdQBIgaBXAAQCKAABiBCQBjBBAABcQgFBZhPA8QCTA+gBBRQAABPiCA5QiEA4i5AAQh9gBhlgZgAanVmQkGgghdAAQhTAAhHgZQiyBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgbQgUg7AAhCQAAicBvhuQBuhuCcgBQCYAABtBpQAhhYBJhIQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5grCUgBQDtAACnBwQCoBwAACeQgICXiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgsgEhJMAKQQluAAkmhMIAAAAQnDg4igAAIgBAAQiNAAh7gqIgCgBQkuB5mBABIgFAAQoTAAl3jlIgFgCQl1jmgClDIAAgDQAAlDFwjkIAIgGQBuhDB9gxIAAgCQgihjABhwIAAgDQAAkMC9i9IABgBQC/i+EMAAIACAAQEEABC7CzIABgCQA6iWB6h8IABgBQA5g5A+gpIADgDQC/iBD0gBIADAAQD0ABC/CDIACACQA+AqA3A3IABACQDIDIAaEQIACAAQDQhKD9AAIADAAQGVABEgC/IACACQEeDAABEOIAAACIAAAYIAAACQgODqjpCuIACABIAsASIACABQF+ClAADoIAAABQAADpmAClIgCABQmACloeAAIgCAAgEBroAHcQltgBklhKIgDgBQm/g4iiAAIgDAAQiOAAh8grQkwB6mDAAIgBAAQoVAAl4jmIgBgBQl3jmgBlFIAAgBQAAlDFwjlQB3hJB8gwQghhkAAhyQAAkNC+i+QC+i/ENAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA/ArA4A4QDJDKAbERQDPhKD+gBIACAAQGWABEhC/QEgDBABEPIAAABIAAAaQgNDrjpCtIgBABIAtATIABAAQGAClABDpIAAACQAADol/ClIgDABQl/CmoeAAIgCAAgAhhk8Qh9AAhkgZIgBAAQiXgTg3AAIgCAAQgwAAgpgOIgCgBQhnAqiDAAIgBAAQi1AAiBhOIgBgBQh/hPAAhvQAAhuB+hOQAogaApgPQgLgkAAgmQABhcBAhAQBBhBBbABQBbABA+A7QAVg1ApgpQAUgTAWgPQBBgtBTAAQBVABBBAsQAVAQATASQBEBEAJBdQBHgZBWAAQCLAABhBBQBiBCACBbIAAAJIAAACQgFBPhNA6IgCACIAOAGIACAAQCBA5ACBPIAAABQgBBPiCA5IgBAAQiCA4i3AAIgCAAg");
	this.shape_11.setTransform(1089.4,17.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSAAhJgaQiwBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DViFQBGgrBIgbQgUg7AAhBQAAicBuhvQBvhvCcAAQCYAABtBpQAhhZBIhIQAhghAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiIBlIAbALQDfBgAACIQAACIjfBgQjfBgk7AAQjVAAirgsgEBLJAdTQiZgTg3AAQgwAAgrgPQhnAqiEAAQi2AAiBhPQiAhPAAhvQAAhuB+hOQApgZApgQQgLgiAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBVAABAAtQAWAPAUATQBEBEAIBeQBIgaBXAAQCKAABiBCQBjBBAABcQgFBZhPA8QCTA+AABQQAABQiEA4QiCA4i6AAQh9AAhlgZgAanVmQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6gBhCQABicBuhuQBuhvCdAAQCXAABtBpQAhhZBJhHQAhghAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCoBwAACdQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiMAAh7gqIgDAAQkuB4mBABIgFAAQoSAAl4jlIgFgCQl1jmgClDIAAgDQAAlDFwjlIAIgFQBvhDB8gwIgBgDQgghjAAhwIAAgDQAAkLC+i+IABgBQC+i+EMAAIACAAQEEABC8CzIAAgBQA6iXB7h8IABgBQA4g4A+gqIADgCQC/iDD0AAIADAAQD0ABC/CDIADACQA8AqA4A3IACACQDHDIAaERIACgBQDQhKD8AAIAEAAQGWAAEfDAIACACQEfDAAAEPIAAACIAAAXIAAACQgODqjpCuIACABIAsASIACABQF+ClABDoIAAACQgBDomAClIgCABQmACloeAAIgCAAgEBrpAHbQluAAklhKIgDgBQm+g4ijAAIgDAAQiNAAh9grQkwB5mDAAIgBAAQoUAAl5jlIgBgBQl3jmgBlEIAAgCQAAlDFwjlQB3hJB8gwQghhkAAhyQAAkNC+i+QC/i/EMAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDPhKD+gBIACAAQGXAAEfDAQEhDBABEPIAAACIAAAZIAAAAQgNDrjpCuIgBAAIAtATIABAAQF/CmACDoIAAACQAADol/ClIgCABQl/ClofAAIgBAAgAhgk8Qh+AAhjgaIgBAAQiXgSg4gBIgBAAQgwAAgpgNIgCgBQhoApiDAAIgCAAQi1AAh/hOIgBgBQiAhOAAhvQAAhuB+hPQApgYApgQQgMgjAAgmQAAhcBChBQBBhABagBQBbACA+A7QAWg1ApgpQATgUAWgOQBCgtBSAAQBVABBBAsQAVAPATATQBEBEAKBdQBGgZBWAAQCLAABiBBQBiBCABBaIAAAJIAAADQgEBPhOA6IgCACIAPAGIABABQCCA4ABBPIAAABQgBBPiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_12.setTransform(1079.4,18.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdgBQhTAAhIgZQiwBIjhgBQk1AAjaiGQjbiGAAi9QgBi7DWiFQBFgqBJgcQgUg7AAhBQAAicBuhvQBvhvCcAAQCYABBtBoQAghYBJhJQAhggAkgZQBvhNCPAAQCPAABvBNQAlAZAgAgQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiIBlIAbALQDgBhgBCHQABCIjgBgQjeBgk8AAQjVgBirgrgEBLJAdTQiZgTg3AAQgwAAgqgPQhpAqiDAAQi2AAiBhPQiAhPAAhvQAAhtB+hPQAogZAqgPQgLgjAAgnQAAhbBBhBQBBhBBbAAQBaAABAA+QATg1ArgqQATgTAVgPQBCgsBTAAQBVAABAAsQAWAPATATQBFBEAIBeQBIgaBXAAQCLAABhBCQBjBBAABcQgFBZhQA8QCTA+ABBRQAABPiEA5QiCA3i6ABQh9AAhlgagAanVmQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DViFQBGgrBIgbQgUg7AAhCQAAicBuhuQBuhuCdgBQCYAABtBpQAghYBJhIQAhghAkgZQBwhMCPAAQCPAABvBMQAkAZAgAhQB2B0AOCeQB5grCUAAQDtAACoBvQCnBwAACeQgHCXiJBlIAcALQDeBgAACIQAACHjeBgQjgBgk7AAQjWAAirgsgEhJMAKQQluAAklhMIAAAAQnEg4ifAAIgBAAQiNAAh7gqIgDgBQkuB5mAABIgGAAQoSgBl4jlIgEgCQl2jlgClDIAAgDQAAlDFwjlIAIgFQBvhEB8gvIAAgEQghhiAAhwIAAgEQAAkKC+i+IABgBQC+i9ENAAIABAAQEEAAC8CzIABgCQA5iXB7h7IABgBQA5g4A9gqIAEgCQC+iDD0AAIADAAQD0AAC+CEIAEACQA8AqA4A3IACACQDHDIAaEQIACAAQDQhKD8AAIAEAAQGVAAEhDAIABACQEfC/AAEPIAAACIAAAYIAAACQgNDqjqCtIACACIAsASIACABQF/ClAADoIAAABQgBDpl/CkIgDABQl/CmofAAIgCAAgEBrpAHcQltAAkmhMIgCAAQnAg4iiAAIgCAAQiPAAh8grQkxB6mCAAIgBAAQoUgBl5jmIgBgBQl3jlgBlFIAAgBQAAlDFwjlQB4hJB7gwQghhkgBhyQAAkNC/i+QC/i+EMAAQEGgBC8C1QA5iZB8h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA/ArA4A4QDJDKAbERQDPhLD+AAIACAAQGXABEgC/QEgDBACEPIAAABIgBAaQgNDrjpCtIgBABIAtAUIABAAQGACkABDpIAAACQAADol/ClIgCABQmACmodAAIgCAAgAhgk8Qh9AAhkgZIgBAAQiXgUg3ABIgCAAQgwgBgpgOIgCAAQhoAqiEAAIgBAAQi0gBiAhOIgBgBQiAhOAAhvQAAhuB+hOQApgaApgPQgLgkAAgmQAAhcBBhAQBBhABaAAQBbAAA/A8QAUg1AqgpQATgTAWgPQBBgtBTAAQBVABBBArQAVAQAUATQBEBEAJBdQBHgZBWAAQCKAABiBBQBiBBACBbIgBAJIAAADQgEBPhOA6IgCACIAPAFIABABQCCA4ABBQIAAABQgBBPiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_13.setTransform(1069.4,18.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhHgaQiyBHjgAAQk1ABjbiHQjaiFgBi+QABi7DWiFQBFgrBHgbQgTg7gBhBQAAicBwhvQBthuCdgBQCYAABsBpQAihYBIhJQAhggAjgaQBxhMCOAAQCPAABvBMQAkAaAiAgQB0B1APCfQB5gsCUAAQDtAACnBwQCnBvAACeQgHCXiIBlIAaALQDgBggBCIQABCHjgBhQjeBfk8AAQjVAAisgrgEBLKAdTQiagTg3AAQgwAAgrgPQhnAqiFAAQi1AAiAhPQiBhPAAhvQAAhuB+hOQAogYArgQQgMgjAAgnQAAhbBBhBQBBhABcAAQBZgBBAA+QATg0ArgrQATgTAVgPQBCgsBUgBQBUABBAAsQAWAPAUATQBEBFAIBdQBIgaBWAAQCLAABiBCQBjBBAABcQgEBZhQA8QCSA/AABPQAABQiCA5QiEA4i4AAQh+gBhkgZgAanVmQkGgghdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgbQgVg7AAhCQAAicBvhuQBuhvCcABQCZgBBsBpQAhhZBIhHQAighAkgZQBvhMCPAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtAACnBwQCnBwABCeQgICXiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgsgEhJMAKQQluAAkmhMIAAAAQnDg4igAAIgBAAQiMAAh8gqIgCgBQkuB5mBABIgFAAQoTAAl4jlIgDgCQl2jmgClDIAAgDQAAlCFwjlIAIgGQBuhDB9gxIAAgCQgihjAAhwIAAgDQABkLC9i+IABgBQC+i+ENAAIACAAQEEABC7CzIABgBQA5iYB7h7IABgCQA5g3A+gqIADgCQC/iDD0ABIADAAQD0AAC/CDIACACQA+AqA2A3IACACQDIDIAaEQIADAAQDPhKD9AAIACAAQGWAAEgDAIACACQEeDAAAEPIAAABIAAAYIAAACQgNDrjpCtIABABIAtASIABABQF/ClABDoIAAACQgBDomAClIgCABQmACloeAAIgCAAgEBrpAHbQluAAklhKIgDgBQm/g4iiAAIgDAAQiOAAh7grQkyB6mCAAIgBAAQoUAAl5jmIgBgBQl3jmgBlFIAAgBQAAlDFwjlQB3hJB9gwQgjhlABhxQAAkNC9i/QC/i+ENAAQEGAAC7C0QA5iYB9h9QA5g4A+grQDAiED1ABQD3gBC/CDQA/ArA4A4QDJDKAaERQDQhKD+AAIACAAQGWgBEhDAQEgDBABEPIAAACIAAAZQgNDrjpCtIgBABIAtATIABAAQGACmABDoIAAACQgBDol+ClIgCABQmAClodAAIgCAAgAhhk8Qh8AAhlgZIgBAAQiXgTg3gBIgCAAQgwAAgpgNIgCgBQhnApiDAAIgBAAQi2ABiAhOIgBgBQh/hPAAhvQAAhuB9hOQApgZApgQQgLgjAAgnQAAhcBBhAQBBhBBbAAQBbACA/A7QAUg1ApgpQAUgTAWgPQBBgtBUAAQBTABBBAsQAWAQAUASQBDBEAJBdQBHgZBXAAQCJAABiBBQBiBCACBaIAAAJIAAADQgFBQhNA5IgBACIANAGIACABQCBA4ACBPIAAABQgBBPiBA5IgCAAQiCA4i3AAIgCAAg");
	this.shape_14.setTransform(1059.45,19.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSAAhJgZQiwBHjhAAQk1AAjbiGQjaiGAAi+QAAi7DWiFQBEgqBJgcQgUg6AAhCQAAicBuhvQBvhvCcAAQCYAABsBpQAhhZBJhIQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDsAACoBwQCnBvAACeQgICXiHBmIAaALQDgBggBCHQABCIjgBgQjeBgk8AAQjVAAirgsgEBLJAdTQiZgTg3AAQgwAAgrgOQhoApiDAAQi2AAiAhPQiBhOAAhvQAAhuB+hPQApgYApgQQgLgjAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABBAtQAWAPAUATQBEBEAIBeQBIgaBXAAQCKAABiBCQBjBBAABdQgFBZhPA7QCTA/gBBQQAABPiCA5QiEA4i4AAQh+AAhlgagAanVnQkGghhdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6AAhCQAAicBvhuQBuhvCcAAQCYAABtBpQAhhZBJhHQAhghAkgZQBvhMCPAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtAACnBwQCnBwABCdQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgrgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiNAAh7gqIgCAAQkuB4mBABIgFAAQoTAAl4jlIgDgCQl3jmgBlDIAAgDQAAlDFwjlIAIgFQBvhDB8gwIAAgDQgihjABhwIAAgDQAAkLC9i+IABgBQC+i9ENgBIACAAQEEABC7CzIABgBQA5iXB8h8IABgBQA4g4A+gqIADgCQC/iCD0gBIADAAQD0ABC/CDIACACQA+AqA2A3IACACQDIDIAaERIADgBQDPhKD9AAIACAAQGWAAEgDAIACACQEfDAAAEPIAAACIgBAXIAAACQgNDqjpCuIACABIAsASIABABQF/ClABDoIAAACQgBDomAClIgCABQmACloeAAIgCAAgEBroAHbQltAAklhKIgDgBQm/g4iiAAIgDAAQiOAAh8grQkwB5mDAAIgBAAQoUAAl5jlIgBgBQl3jmgBlEIAAgCQAAlDFwjlQB3hJB8gwQghhkAAhyQAAkNC+i+QC/i/EMAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA/ArA4A4QDJDKAbERQDPhKD+gBIADAAQGWABEgC/QEgDBABEPIAAACIAAAZIAAAAQgNDrjpCuIgBAAIAtATIABAAQF/CmACDoIAAACQAADol/ClIgDABQl/ClodAAIgDAAgAhhk8Qh8AAhlgaIgBAAQiXgSg3gBIgCAAQgvAAgqgNIgCgBQhnApiDAAIgBAAQi2AAh/hOIgBgBQiAhOAAhvQAAhuB9hPQAqgYAogQQgLgjAAgmQAAhcBBhBQBBhABbgBQBbACA+A7QAWg1ApgpQATgTAWgPQBCgsBSgBQBVABBAAsQAXAPATATQBDBEAJBdQBHgZBXAAQCKAABiBBQBiBCABBaIAAAJIAAADQgFBPhNA6IgBACIANAGIACABQCCA4ABBPIAAABQAABPiCA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_15.setTransform(1049.45,20.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSgBhJgZQiwBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiFQBEgrBJgbQgUg6AAhCQAAicBuhvQBuhuCdgBQCYABBtBoQAghYBJhJQAhghAkgYQBvhNCPAAQCPAABvBNQAlAYAgAhQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACeQgHCXiJBlIAbALQDfBgAACIQAACIjfBgQjfBfk7AAQjVAAirgrgEBLJAdTQiZgTg3AAQgwAAgrgPQhoAqiDAAQi2AAiBhPQiAhPAAhvQAAhuB+hOQAogYAqgQQgLgjAAgnQAAhbBBhBQBBhBBcABQBZgBBAA+QATg1ArgqQATgTAVgPQBCgsBUAAQBTAABBAsQAWAPAUATQBEBFAIBdQBIgaBXAAQCKAABiBCQBjBBAABcQgFBZhPA8QCTA+gBBRQAABPiDA5QiCA4i6AAQh9gBhlgZgAanVmQkGgghdAAQhTAAhHgZQiyBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgbQgUg7AAhCQAAicBvhuQBuhuCcgBQCZAABsBpQAhhYBJhIQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5grCUgBQDtAACnBwQCoBwAACeQgICXiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgsgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiMAAh7gqIgCgBQkvB5mBABIgFAAQoSgBl4jlIgFgCQl1jlgClDIAAgDQAAlDFxjkIAIgGQBuhDB8gxIAAgCQghhjAAhwIAAgDQABkMC9i9IABgBQC+i+EMAAIACAAQEEABC7CzIABgCQA6iWB7h8IABgBQA4g5A+gpIADgDQC/iBD0gBIADAAQD0ABC/CDIACACQA+AqA3A3IACACQDHDIAaEQIACAAQDQhKD9AAIADAAQGWABEfC/IACACQEfC/AAEPIAAACIgBAYIAAACQgNDqjoCtIABABIAsASIACACQF+ClABDoIAAABQgCDpl+ClIgCABQmBClodAAIgDAAgEBrpAHcQlugBklhKIgDgBQm/g3iigBIgDAAQiOAAh8grQkwB6mCAAIgCAAQoUAAl5jnIgBgBQl3jlgBlFIAAgBQAAlDFwjlQB3hJB8gwQghhkAAhyQAAkNC+i+QC/i/EMAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDPhKD+gBIACAAQGXABEgC/QEgDBABEPIAAABIAAAaQgNDrjpCtIgBABIAtATIABAAQGAClABDpIAAACQAADol/ClIgCABQl/CmoeAAIgCAAgAhhk8Qh9AAhkgZIgBAAQiWgTg4AAIgBAAQgwAAgqgPIgBAAQhoAqiDAAIgBAAQi2AAh/hPIgBgBQiAhOAAhvQAAhuB+hOQApgaAogPQgLgkAAgmQAAhcBBhAQBChBBaABQBbAAA+A8QAWg1ApgpQATgTAWgPQBCgtBSAAQBVABBBAsQAWAQASASQBEBEAJBdQBIgZBWAAQCKAABiBBQBiBCABBbIAAAJIAAACQgEBPhOA6IgBACIANAGIACAAQCCA5ABBPIAAABQgBBPiBA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_16.setTransform(1039.45,20.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("EgeYAiKQkFghhdABQhTAAhIgaQiwBHjiABQk1AAjaiHQjbiFAAi+QAAi7DWiGQBFgqBJgbQgVg6AAhCQAAicBvhvQBuhuCcAAQCZgBBsBpQAhhYBIhJQAhggAlgaQBvhMCPAAQCOAABvBMQAlAaAhAgQB0B1APCfQB5gsCUAAQDuAACmBwQCoBwAACdQgHCXiIBmIAaAKQDgBgAACIQAACHjgBhQjfBgk7gBQjWAAirgrgEBLJAdTQiZgTg3AAQgwAAgrgPQhoAqiEAAQi2AAiAhPQiAhOAAhvQgBhuB/hPQAogYAqgRQgMgiAAgnQAAhbBChBQBAhABcAAQBZgBBAA+QAUg0AqgrQATgTAVgPQBCgtBUAAQBUAABBAtQAVAPAUATQBFBFAIBdQBIgaBWAAQCLAABjBCQBhBBAABcQgEBahQA6QCTA/AABQQAABQiCA4QiEA5i5AAQh9AAhlgagAanVmQkGgghdAAQhTAAhIgZQiwBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6ABhCQAAicBuhuQBuhvCdABQCXgBBtBpQAhhZBIhHQAighAkgZQBwhMCOAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtABCnBvQCnBwAACeQgHCXiIBlIAbAMQDfBfAACIQAACIjfBfQjgBgk7AAQjVAAirgsgEhJMAKQQluAAklhLIgBAAQnDg5igAAIgBAAQiMAAh8gqIgCgBQkvB5mAABIgGAAQoSAAl4jlIgDgCQl3jmgBlDIAAgDQAAlCFwjlIAIgGQBvhDB8gxIgBgCQgghjgBhvIAAgEQABkLC9i+IACgBQC+i9EMgBIACAAQEEABC7CzIABgBQA5iXB8h9IABgBQA4g3A+gqIADgCQC+iDD0ABIAEAAQDzAAC/CDIADACQA9AqA3A3IADACQDGDJAbEPIACAAQDQhKD8AAIADAAQGWAAEgDAIACACQEeDAAAEPIAAABIAAAYIAAACQgNDqjpCuIABABIAsASIACABQGAClAADoIAAACQgCDol/ClIgCABQmACloeAAIgCAAgEBrpAHbQluAAklhKIgDgBQm/g4iiAAIgDAAQiOAAh8grQkxB5mCAAIgBAAQoUAAl5jlIgBgBQl4jmAAlFIAAgBQAAlDFwjlQB3hJB8gwQgihlAAhxQAAkNC+i/QC/i+EMAAQEHABC7CzQA5iYB8h9QA6g4A+grQC/iED2ABQD3gBC/CDQA+ArA5A4QDJDKAaERQDQhKD+AAIACAAQGWgBEhDAQEgDBABEPIAAACIgBAZQgMDrjpCtIgBABIAtATIABAAQGAClABDpIAAACQgBDol+ClIgCABQmACmoegBIgBAAgAhhk8Qh9AAhkgaIgBAAQiXgSg3gBIgCAAQgwAAgpgNIgCgBQhoApiDAAIgBAAQi1AAh/hNIgBgBQiBhPAAhvQAAhuB+hOQApgZApgQQgLgjAAgmQAAhcBBhAQBChBBagBQBaABBAA8QAUg0AqgpQAUgVAUgOQBCgsBTAAQBUAABBAsQAWAPAUATQBEBEAIBdQBHgZBXAAQCJAABiBBQBjBCABBaIAAAJIAAADQgFBQhOA6IgBABIAOAGIACABQCCA3AABQIAAABQAABPiBA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_17.setTransform(1029.5,21.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTAAhHgZQixBHjhAAQk1AAjbiGQjbiGAAi+QAAi7DXiFQBFgqBIgcQgUg6AAhCQAAicBvhvQBthvCdAAQCYAABsBpQAihZBIhIQAhghAkgZQBvhMCPAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDsAACnBwQCoBvAACeQgHCXiIBmIAaALQDgBgAACHQAACIjgBgQjeBgk8AAQjVAAirgsgEBLKAdTQiagTg2AAQgxAAgrgOQhnApiFAAQi1AAiAhPQiBhOAAhvQAAhuB+hPQApgYAqgQQgMgjAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBVAABAAtQAWAPATATQBFBEAJBeQBHgaBWAAQCLAABjBCQBiBBAABdQgEBZhRA7QCTA/AABQQABBPiDA5QiEA4i4AAQh+AAhkgagAanVnQkGghhdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6ABhCQAAicBuhuQBuhvCcAAQCZAABsBpQAhhZBIhHQAighAkgZQBwhMCOAAQCPAABvBMQAkAZAhAhQB1B0APCeQB5gsCUAAQDtAACnBwQCnBwABCdQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgrgEhJLAKQQluAAkmhMIgBAAQnCg4ihAAIgBAAQiNAAh7gqIgCAAQkvB4l/ABIgGAAQoTAAl4jlIgDgCQl2jmgClDIAAgDQAAlDFwjlIAIgFQBvhDB8gwIAAgDQghhjgBhwIAAgDQABkLC9i+IABgBQC+i9ENgBIACAAQEEABC7CzIABgBQA6iXB7h8IABgBQA4g4A+gqIADgCQC/iCDzgBIAEAAQD0ABC+CDIADACQA+AqA2A3IACACQDHDIAbEQIADAAQDOhKD+AAIACAAQGWAAEgDAIACACQEeDAABEPIAAACIgBAXIAAACQgNDqjoCuIAAABIAtASIABABQGAClAADoIAAACQgCDol/ClIgBABQmBCloeAAIgBAAgEBrpAHbQluAAklhKIgDgBQm/g4iiAAIgDAAQiOAAh7grQkyB5mCAAIgBAAQoUAAl5jlIgBgBQl3jmgBlEIAAgCQAAlDFwjlQB3hJB9gwQgjhkAAhyQAAkNC+i+QDAi/EMAAQEGAAC7C0QA5iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA/ArA4A4QDJDKAaERQDQhKD/gBIACAAQGWABEgC/QEgDBABEPIAAACIAAAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQAADol/ClIgCABQmAClodAAIgCAAgAhhk8Qh8AAhlgaIgBAAQiXgSg3gBIgCAAQgwAAgpgNIgCgBQhnApiEAAIAAAAQi2AAh/hOIgBgBQiAhOAAhvQAAhuB9hPQApgYApgQQgLgjAAgmQABhcBAhBQBBhABbgBQBbACA/A7QAUg1AqgpQAUgTAUgPQBCgsBUgBQBUABBAAsQAWAPAUATQBEBEAIBdQBIgZBWAAQCKAABhBBQBjBCABBbIAAAIIAAADQgFBPhOA6IAAACIANAGIADABQCBA4AABPIAAABQABBPiCA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_18.setTransform(1019.5,22.325);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTAAhHgaQixBHjhABQk1gBjbiGQjbiFAAi+QAAi7DXiFQBFgrBIgbQgUg7AAhBQAAicBvhvQBthuCdgBQCYAABsBpQAihYBIhJQAhggAkgaQBwhMCOAAQCPAABvBMQAkAaAiAgQB0B1APCfQB5gsCUAAQDtAACmBwQCoBvAACeQgHCXiIBmIAbAKQDeBgAACIQAACHjeBhQjfBfk8AAQjVAAirgrgEBLJAdTQiZgTg3AAQgwAAgrgPQhnAqiFAAQi1AAiAhPQiBhPAAhuQAAhvB+hOQAogYAqgQQgLgjAAgnQAAhbBBhBQBBhABcAAQBZgBBAA+QATg0ArgrQATgTAVgPQBCgsBUgBQBUABBAAsQAWAPATATQBFBFAJBdQBHgaBWAAQCLAABiBCQBjBBAABcQgFBahQA7QCTA/AABPQAABQiCA5QiEA4i4AAQh+gBhlgZgAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgbQgUg7AAhCQAAicBvhuQBthvCdABQCYgBBsBpQAhhZBJhHQAhghAkgZQBwhMCPAAQCPAABuBMQAlAZAhAhQB0B0AQCeQB4gsCUAAQDuAACmBwQCoBwAACeQgHCXiJBlIAcALQDfBgAACIQAACHjfBgQjgBgk8AAQjVAAirgsgEhJLAKQQluAAkmhMIgBAAQnCg4ihAAIgBAAQiMAAh8gqIgBgBQkwB5mAABIgFAAQoTgBl4jlIgDgBQl2jmgClEIAAgCQAAlCFxjlIAIgGQBuhDB8gxIAAgCQghhjAAhwIAAgDQABkLC9i+IABgBQC+i+EMAAIACAAQEEABC7CzIABgBQA6iYB7h7IABgCQA4g3A+gqIADgCQC/iDD0ABIADAAQD0AAC/CDIACACQA+AqA3A3IACACQDHDIAaEQIADAAQDPhKD9AAIACAAQGWAAEgDAIACACQEfC/AAEQIAAABIgBAYIAAACQgNDqjoCtIAAABIAtASIABABQF/ClABDpIAAACQgBDomAClIgBABQmBClodAAIgCAAgEBrpAHbQluAAklhKIgDgBQm/g4iiAAIgDAAQiNAAh9grQkxB6mBAAIgBAAQoVAAl4jnIgBAAQl4jmAAlFIAAgBQgBlDFxjlQB2hJB9gwQgjhlABhxQgBkNC/i/QC/i+EMAAQEGAAC8C0QA4iYB9h9QA5g4A+grQDAiED1ABQD3gBDACDQA+ArA5A4QDIDKAaERQDRhKD9AAIADAAQGWgBEgDAQEhDBABEPIAAACIgBAZQgNDrjpCtIAAABIAtATIABAAQF/CmABDoIAAACQAADol/ClIgCABQl/CloeAAIgCAAgAhhk8Qh8AAhlgZIgBAAQiXgTg3gBIgCAAQgvAAgqgNIgCgBQhnApiDAAIgBAAQi2AAh/hOIgBgBQiAhOAAhvQAAhuB9hOQApgZApgQQgLgjAAgnQAAhcBBhAQBChBBaAAQBbACA/A6QAUg0AqgpQATgTAVgPQBCgtBUAAQBUABBAAsQAXAQATASQBEBEAJBdQBHgZBWAAQCKAABiBBQBiBCABBaIAAAJIAAADQgEBQhOA5IgBACIANAGIACABQCCA4ABBPIAAABQgBBPiBA5IgBAAQiDA4i2AAIgDAAg");
	this.shape_19.setTransform(1009.5,23.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("EgeXAiKQkHgghdAAQhSAAhIgaQixBHjhAAQk1AAjaiGQjbiGAAi9QAAi7DWiFQBFgrBJgbQgVg7ABhBQAAicBuhvQBuhvCdAAQCYAABsBpQAhhZBIhIQAighAkgZQBvhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCfQB5gsCUAAQDsAACnBwQCoBvAACdQgICYiIBlIAbALQDfBgABCIQgBCIjfBgQjfBgk8AAQjVAAiqgsgEBLJAdTQiagTg2AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiAhPAAhvQgBhuB/hOQAogZAqgQQgLgiAAgnQAAhbBBhBQBBhBBbAAQBZAABAA9QAUg0AqgqQAUgTAVgPQBCgtBTAAQBUAABBAtQAVAPAUATQBFBEAIBeQBIgaBWAAQCLAABjBCQBhBBABBcQgFBZhQA8QCTA+AABQQAABQiDA4QiDA4i5AAQh+AAhkgZgAanVmQkGgghdAAQhTAAhIgZQixBHjhAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6AAhCQgBicBvhuQBuhvCdAAQCXAABtBpQAhhZBIhHQAighAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCoBwgBCdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiMAAh8gqIgCAAQkvB4mAABIgGAAQoTAAl3jmIgEgCQl2jlgBlDIAAgDQAAlDFwjlIAIgFQBvhDB7gwIAAgDQgghjAAhwIAAgDQAAkLC+i+IABgBQC+i+EMAAIACAAQEEABC7CzIABgBQA5iXB8h8IABgBQA3g4A/gqIACgCQC/iDD1AAIACAAQD1ABC+CDIADACQA9AqA4A3IACACQDGDIAbEQIACAAQDPhKD9AAIADAAQGWAAEgDAIACACQEfC/AAEPIAAACIgBAYIAAACQgNDqjpCuIABABIAsASIACABQF/ClAADnIAAACQgBDpl/ClIgCABQmACloeAAIgCAAgEBrpAHbQlvAAkkhKIgEgBQm/g4ihAAIgEAAQiNAAh8grQkxB5mCAAIgBAAQoVAAl4jlIgBgBQl3jmgBlFIAAgBQAAlDFwjlQB3hJB8gwQgihkAAhyQAAkNC+i+QDAi/ELAAQEHAAC7C0QA5iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDPhKD+gBIACAAQGXAAEfDAQEhDBABEPIAAACIgBAZIAAAAQgMDrjqCuIAAAAIAtATIABAAQF/CmACDoIAAACQAADomAClIgCABQl/CloeAAIgBAAgAhhk8Qh9AAhkgaIgBAAQiXgSg3gBIgCAAQgwAAgpgNIgCgBQhoApiDAAIgBAAQi1AAh/hOIgBgBQiBhOABhvQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhBQBBhABbgBQBbABA+A8QAVg1AqgpQATgUAVgOQBCgtBTAAQBVABBAAsQAWAPATATQBEBEAKBdQBHgZBVAAQCKAABiBBQBiBCACBaIAAAJIAAADQgEBPhPA6IgBACIAOAGIACABQCBA4ABBPIAAABQAABPiCA5IAAAAQiEA4i2AAIgCAAg");
	this.shape_20.setTransform(999.55,23.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhHgZQiyBHjgAAQk1AAjaiGQjciGAAi+QAAi7DWiFQBFgqBJgcQgVg6ABhCQAAicBvhvQBthvCdAAQCYAABsBpQAhhZBJhIQAhghAkgZQBvhMCPAAQCPAABvBMQAkAZAhAhQB1B1APCfQB5gsCUAAQDtAACmBwQCoBvAACeQgHCXiIBmIAaALQDgBgAACHQAACIjgBgQjeBgk8AAQjVAAisgsgEBLKAdTQiagTg2AAQgxAAgqgOQhpApiEAAQi1AAiBhPQiAhOAAhvQAAhuB+hPQApgYAqgQQgMgjAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBUAABCAtQAVAPATATQBFBEAJBeQBHgaBWAAQCLAABjBCQBiBBAABdQgEBZhRA7QCUA/AABQQAABPiEA5QiDA4i5AAQh9AAhkgagAanVnQkGghhdAAQhTAAhIgZQixBHjhAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgUg6ABhCQgBicBvhuQBuhvCdAAQCXAABtBpQAhhZBIhHQAighAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCnBwAACdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgrgEhJMAKQQltAAkmhMIgBAAQnCg4ihAAIgBAAQiMAAh8gqIgCAAQkvB4mAABIgGAAQoSAAl4jlIgEgCQl2jmgBlDIAAgDQAAlDFwjlIAIgFQBuhDB9gwIAAgDQgihjAAhwIAAgDQACkLC9i+IABgBQC9i9ENgBIACAAQEEABC7CzIABgBQA6iXB7h8IABgBQA4g4A+gqIADgCQC+iCD1gBIADAAQD0ABC+CDIADACQA9AqA3A3IADACQDGDIAbEQIACAAQDQhKD8AAIADAAQGWAAEgDAIACACQEeDAABEPIAAACIAAAXIAAACQgODqjpCuIABABIAsASIACABQGAClgBDoIAAACQAADomAClIgCABQl/ClofAAIgCAAgEBrpAHbQluAAklhKIgDgBQm/g4iiAAIgDAAQiOAAh7grQkyB5mCAAIgBAAQoVAAl4jlIgBgBQl3jmgBlEIAAgCQAAlDFwjlQB3hJB8gwQgihkAAhyQAAkNC+i+QC/i/ENAAQEGAAC7C0QA5iYB9h9QA5g5A/gqQC/iED1AAQD3AAC/CDQA+ArA5A4QDJDKAaERQDQhKD/gBIACAAQGWABEgC/QEhDBAAEPIAAACIgBAZIAAAAQgMDrjpCuIAAAAIAtATIAAAAQGACmABDoIAAACQgBDol/ClIgBABQmACloeAAIgBAAgAhgk8Qh+AAhjgaIgBAAQiYgSg3gBIgCAAQgwAAgpgNIgCgBQhoApiDAAIgBAAQi1AAh/hOIgBgBQiAhOAAhvQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhBQBBhABbgBQBbACA/A7QAUg1AqgpQATgTAVgPQBCgsBUgBQBUABBAAsQAXAPATATQBDBEAKBdQBGgZBXAAQCKAABhBBQBjBCABBbIAAAJIAAACQgEBPhPA7IgBABIAPAGIACABQCBA4AABPIAAABQAABPiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_21.setTransform(989.55,24.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("EgeXAiKQkGghhdABQhTAAhHgZQixBGjhABQk1AAjaiGQjciGAAi+QAAi7DWiGQBGgqBIgbQgUg6AAhCQAAicBvhvQBthuCdAAQCYgBBsBpQAihYBIhJQAhggAkgaQBvhMCPAAQCPAABvBMQAkAaAiAgQB0B1APCfQB5gsCUAAQDsAACnBwQCoBwAACdQgHCXiIBmIAbAKQDeBgABCIQgBCHjeBhQjgBgk7gBQjVAAirgrgEBLKAdTQiagTg2AAQgxAAgrgPQhnAqiFAAQi1AAiAhPQiBhOAAhvQAAhuB+hPQApgYAqgRQgMgiAAgnQAAhbBBhBQBBhABbAAQBagBBAA+QATg0ArgrQATgTAVgPQBCgtBTAAQBUAABCAtQAVAPATATQBFBFAJBdQBHgaBWAAQCLAABjBCQBiBBAABcQgEBahRA6QCUA/AABQQAABQiEA4QiCA5i5AAQh+AAhkgagAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGgBi9QAAi7DWiGQBFgqBJgcQgUg6AAhCQAAicBuhuQBuhvCdABQCYgBBtBpQAghZBJhHQAhghAkgZQBwhMCOAAQCQAABuBMQAlAZAgAhQB2B0APCeQB5gsCUAAQDsABCnBvQCoBwAACeQgICXiIBlIAbAMQDgBfgBCIQABCIjgBfQjfBgk8AAQjVAAirgsgEhJLAKQQluAAkmhLIAAAAQnEg5ifAAIgBAAQiNAAh8gqIgCgBQkvB5mAABIgGAAQoSAAl4jmIgDgBQl3jmgBlEIAAgCQAAlCFwjlIAIgGQBvhDB8gxIAAgCQghhjAAhvIAAgEQABkLC9i+IABgBQC+i9EMgBIACAAQEEABC7CzIACgBQA5iXB7h9IABgBQA4g3A+gqIADgCQC/iDDzABIAEAAQD0AAC+CDIADACQA+AqA2A3IADACQDGDIAbEQIADAAQDOhKD9AAIADAAQGXAAEfDAIACACQEeDAABEPIAAABIgBAYIAAACQgNDqjpCtIABABIAsASIACABQGACmAADoIAAACQgBDomAClIgCABQl/ClofAAIgBAAgEBrpAHbQluAAklhKIgDgBQm/g4iiAAIgDAAQiOAAh7grQkxB5mCAAIgBAAQoVAAl4jlIgBgBQl4jmgBlFIAAgBQABlDFwjlQB3hJB8gwQgjhlAAhxQABkNC+i/QC/i+EMAAQEGABC7CzQA5iYB9h9QA5g4A/grQC/iED1ABQD3gBDACDQA+ArA4A4QDJDKAaERQDRhKD+AAIACAAQGWgBEgDAQEhDBAAEPIAAACIAAAZQgNDrjpCtIAAABIAtATIABAAQF/ClABDpIAAACQAADol/ClIgCABQmACmoegBIgBAAgAhgk8Qh+AAhjgaIgCAAQiXgSg2gBIgDAAQgvAAgqgNIgCgBQhnApiEAAIAAAAQi1AAiAhOIgBgBQiAhOAAhvQAAhuB9hOQApgZApgQQgKgjgBgmQABhcBAhAQBBhBBbgBQBbACA/A6QAUgzAqgpQAUgVAUgOQBDgsBTAAQBUAABAAsQAXAPATATQBEBEAJBdQBHgZBWAAQCKAABhBBQBjBCABBaIAAAJIAAADQgEBQhPA6IAAABIAOAGIACABQCBA3ABBQIAAABQAABPiCA5IgBAAQiDA4i2AAIgCAAg");
	this.shape_22.setTransform(979.55,25.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("EgeXAiKQkHgghdAAQhSAAhIgaQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiFQBFgrBIgbQgTg7AAhBQgBicBvhvQBuhvCdAAQCXAABtBpQAhhZBIhIQAhghAkgZQBwhMCOAAQCPAABwBMQAkAZAhAhQB0B1AQCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiIBlIAbALQDfBgAACIQAACIjfBgQjfBgk8AAQjVAAiqgsgEBLJAdTQiZgTg3AAQgwAAgrgPQhoAqiEAAQi2AAiAhPQiBhPABhvQAAhuB+hOQAogZAqgQQgLgiAAgnQgBhbBBhBQBBhBBcAAQBaAAA/A9QAUg0AqgqQATgTAWgPQBCgtBTAAQBUAABBAtQAWAPATATQBEBEAJBeQBIgaBWAAQCLAABiBCQBiBBAABcQgEBZhPA8QCSA+AABQQAABQiDA4QiDA4i5AAQh+AAhkgZgAanVmQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6gBhCQABicBuhuQBuhvCcAAQCYAABtBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtAACnBwQCnBwAACdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiNAAh7gqIgCAAQkvB4mAABIgGAAQoSAAl4jmIgEgCQl2jlgBlDIAAgDQAAlDFwjlIAIgFQBuhDB8gwIAAgDQgghjAAhwIAAgDQAAkLC+i+IAAgBQC+i+ENAAIABAAQEFABC7CzIABgBQA6iXB6h8IABgBQA5g4A9gqIAEgCQC/iDD0AAIACAAQD0ABC/CDIADACQA9AqA4A3IACACQDHDIAaEQIACAAQDPhKD9AAIADAAQGWAAEgDAIACACQEeC/ABEPIAAACIgBAYIAAACQgNDqjpCuIABABIAsASIACABQF/ClAADnIAAACQAADpmAClIgCABQmACloeAAIgCAAgEBroAHbQltAAkmhKIgCgBQnAg4iiAAIgCAAQiOAAh8grQkxB5mCAAIgBAAQoVAAl4jlIgBgBQl3jmgBlFIAAgBQAAlDFwjlQB3hJB8gwQgihkAAhyQAAkNC/i+QC/i/EMAAQEFAAC8C0QA5iYB9h9QA4g5A/gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDPhKD+gBIACAAQGXAAEfDAQEhDBABEPIAAACIAAAZIAAAAQgNDrjqCuIAAAAIAtATIABAAQF/CmACDoIAAACQgBDol/ClIgCABQl/CloeAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiXgSg3gBIgCAAQgvAAgqgNIgCgBQhoApiDAAIgBAAQi1AAiAhOIgBgBQh/hOAAhvQAAhuB9hPQApgYApgQQgLgjAAgmQABhcBAhBQBBhABagBQBcABA+A8QAVg1ApgpQAVgUAVgOQBBgtBTAAQBUABBBAsQAWAPATATQBEBEAKBdQBGgZBWAAQCLAABiBBQBiBCABBbIAAAIIAAADQgFBPhNA6IgCACIAOAGIACABQCCA4ABBPIAAABQgBBPiCA5IgBAAQiDA4i2AAIgCAAg");
	this.shape_23.setTransform(969.6,25.925);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTAAhIgaQiwBHjhAAQk1AAjaiGQjbiFAAi+QgBi7DWiFQBFgrBJgbQgUg7AAhBQAAicBuhvQBvhuCcgBQCYAABtBpQAhhYBIhJQAhggAkgaQBvhMCPAAQCPAABvBMQAlAaAgAgQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACeQgICXiIBlIAbALQDfBgAACIQAACIjfBgQjfBfk7AAQjVAAirgrgEBLJAdTQiZgTg2AAQgxAAgqgPQhpAqiDAAQi2AAiBhPQiAhPAAhvQAAhuB+hOQAogYAqgQQgLgjAAgnQAAhbBBhBQBBhABbAAQBagBBAA+QATg0ArgrQATgTAVgPQBCgsBTgBQBVABBAAsQAWAPAUATQBEBFAIBdQBIgaBXAAQCLAABiBCQBiBBAABcQgFBZhPA8QCSA/ABBPQAABQiEA5QiCA4i6AAQh9gBhlgZgAanVmQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgbQgTg7gBhCQABicBuhuQBuhvCdABQCXgBBtBpQAhhZBIhHQAighAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCoBwgBCeQgHCXiIBlIAbAMQDfBfAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiMAAh8gqIgCgBQkvB5mAABIgGAAQoTgBl3jlIgEgBQl2jngBlDIAAgCQAAlCFwjlIAIgGQBvhDB8gxIAAgCQghhjAAhvIAAgEQABkLC9i+IABgBQC9i+ENAAIACAAQEEAAC8C0IABgBQA4iYB8h7IABgCQA4g3A9gqIADgCQDAiDD0ABIACAAQD0AAC/CCIADADQA9ApA4A3IACADQDHDIAaEQIACAAQDPhKD9AAIADAAQGWAAEgC/IACACQEfDBAAEOIAAACIAAAYIAAACQgODqjpCtIACABIArASIADABQF/CmAADnIAAACQgBDpl/CkIgDABQl/ClofABIgCAAgEBroAHbQltABklhMIgDAAQnAg4ihAAIgDAAQiOgBh8gqQkxB6mCAAIgBAAQoUAAl5jnIgBAAQl3jmgBlFIAAgBQAAlDFwjlQB3hJB8gwQghhlgBhxQAAkNC+i/QDAi+EMAAQEGAAC7C0QA6iYB8h9QA5g4A+grQDAiED1ABQD3gBC/CDQA+ArA5A4QDJDKAbERQDPhLD/ABIABAAQGXgBEgDAQEgDBABEPIAAACIgBAZQgMDrjpCtIgBABIAtATIABAAQGACmABDoIAAACQAADomAClIgCABQl/CloeAAIgCAAgAhgk8Qh+AAhjgZIgBAAQiYgUg3AAIgCAAQgvAAgqgNIgCgBQhnApiEAAIgBAAQi0AAiAhOIgBgBQiAhPAAhuQAAhuB+hOQApgZAogQQgLgjAAgnQAAhcBChAQBBhBBZAAQBcACA+A6QAVg0AqgpQATgTAWgPQBBgtBTAAQBVABBBAsQAVAPATATQBEBEAKBdQBHgZBWAAQCKAABiBBQBiBCABBaIAAAJIAAADQgEBQhPA5IAAACIAOAGIABABQCCA4ABBPIAAABQgBBPiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_24.setTransform(959.6,26.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("EgeXAiKQkGghhdABQhTAAhIgZQiwBGjhABQk1AAjaiGQjbiHgBi9QAAi7DWiGQBFgqBJgbQgUg6AAhCQAAicBuhvQBuhvCdABQCYgBBtBpQAghZBJhIQAhggAkgaQBwhMCOAAQCPAABvBMQAlAaAgAgQB1B1APCfQB5gsCUAAQDtAACmBwQCoBwAACdQgICXiIBmIAbAKQDgBgAACIQAACHjgBgQjeBhk8gBQjVAAirgrgEBLJAdTQiZgTg2AAQgxAAgqgPQhpAqiDAAQi2AAiBhPQiAhOAAhvQAAhuB+hPQAogYAqgRQgLgiAAgnQAAhbBBhBQBBhABbAAQBaAABAA8QATgzArgrQATgTAVgPQBCgtBTAAQBVAABBAtQAVAPATATQBFBFAJBdQBHgaBXAAQCLAABiBCQBiBBAABdQgFBYhQA7QCUA/AABQQAABQiEA4QiCA4i6ABQh9AAhlgagAanVmQkGgghdAAQhSAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DViGQBGgqBIgcQgUg6AAhCQAAicBuhuQBvhuCcAAQCYAABtBoQAhhZBIhHQAhghAkgZQBwhMCOAAQCPAABwBMQAkAZAgAhQB2B0AOCeQB6gsCUAAQDsABCoBvQCnBwAACdQgHCYiJBlIAbAMQDgBggBCHQABCIjgBfQjfBgk8AAQjUAAisgsgEhJMAKQQltAAklhLIgBAAQnEg5ifAAIgBAAQiNAAh8gqIgCAAQkvB4mAABIgGAAQoSAAl3jlIgFgCQl2jmgBlEIAAgBQAAlDFwjlIAIgGQBvhDB8gxIAAgBQghhjAAhxIAAgDQAAkLC+i+IABgBQC+i9EMgBIACAAQEEABC8CzIABgBQA5iXB7h9IABgBQA4g3A+gqIADgCQC/iCD0AAIACAAQD1AAC+CDIAEACQA8AqA4A3IACACQDHDIAaEQIACAAQDPhKD9AAIAEAAQGWAAEfDAIACACQEfDAAAEPIAAACIAAAXIAAACQgNDqjqCtIABABIAsASIADABQF/ClAADoIAAADQgBDomAClIgCABQmACloeAAIgCAAgEBroAHbQltABklhLIgDgBQnAg4ihAAIgDAAQiOAAh8grQkxB5mCAAIgBAAQoUAAl5jlIgBgBQl3jmgBlFIAAgBQAAlDFwjlQB4hJB7gwQghhkgBhyQAAkNC/i/QC/i+EMAAQEGABC7CzQA6iYB8h9QA5g4A/grQC/iDD1AAQD3AAC/CCQA/ArA4A4QDKDKAaERQDPhKD/AAIACAAQGWAAEgC/QEgDBABEPIAAACIAAAZQgNDrjpCuIAAAAIAtATIAAAAQGACmABDoIAAACQAADol/ClIgCABQmACmoegBIgCAAgAhgk8Qh+AAhjgaIgBAAQiYgSg2gBIgCAAQgwABgpgOIgDgBQhnApiEAAIgBAAQi0ABiAhPIgBgBQiAhOAAhvQAAhuB+hPQApgYApgQQgMgjAAgmQAAhcBChBQBAhABbgBQBbACA+A7QAWg0ApgpQAUgVAUgOQBCgsBTAAQBVAABBAsQAVAQAUASQBEBEAJBdQBHgZBWAAQCLAABhBBQBiBCACBbIgBAIIAAAEQgEBOhPA7IAAABIAOAGIACABQCBA3ABBQIAAACQgBBOiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_25.setTransform(949.6,27.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("EgeXAiKQkHgghcAAQhTAAhIgZQixBHjgAAQk1AAjbiGQjbiGAAi+QAAi7DWiFQBFgqBIgcQgTg6gBhCQABicBuhvQBuhvCdAAQCXAABtBpQAhhZBJhIQAhghAjgZQBwhMCPAAQCPAABvBMQAkAZAhAhQB1B1AOCfQB5gsCVAAQDsAACoBwQCnBvAACeQgICXiHBmIAaALQDgBggBCHQABCIjgBgQjfBgk7AAQjVAAirgsgEBLJAdTQiagTg2AAQgxAAgqgOQhoApiEAAQi1AAiBhPQiAhOgBhvQAAhuB+hPQApgYAqgQQgMgjAAgnQAAhbBBhBQBBhBBcAAQBaAABAA9QASg0AsgqQASgTAVgPQBDgtBTAAQBUAABBAtQAVAPAUATQBEBEAJBeQBHgaBXAAQCLAABiBCQBjBBgBBdQgDBZhQA7QCSA/AABQQAABPiCA5QiEA4i5AAQh+AAhkgagAanVnQkGghhdAAQhTAAhHgZQiyBHjhAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6AAhCQAAicBvhuQBuhvCcAAQCYAABtBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtAACnBwQCnBwABCdQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgrgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiNAAh7gqIgCAAQkvB4mBABIgFAAQoSAAl4jmIgEgCQl2jlgBlDIAAgDQAAlDFwjlIAIgFQBuhDB9gwIAAgDQgihjABhvIAAgEQAAkLC9i+IABgBQC+i9EMgBIACAAQEFABC7CzIABgBQA5iXB7h8IABgBQA4g4A+gqIAEgCQC/iCDzgBIADAAQD0ABC/CDIADACQA9AqA3A3IACACQDHDIAaEQIADAAQDPhKD9AAIADAAQGWAAEfDAIACACQEfC/AAEPIAAACIAAAYIAAACQgNDqjpCuIABABIAsASIACABQF/ClABDnIAAACQgCDpl/ClIgCABQmACloeAAIgCAAgEBroAHbQltAAkmhKIgCgBQnAg4iiAAIgCAAQiOAAh8grQkxB5mCAAIgBAAQoVAAl4jlIgBgBQl4jmAAlFIAAgBQAAlDFwjlQB3hJB8gwQgihkAAhyQAAkNC/i+QC+i/ENAAQEFAAC8C0QA5iYB9h9QA4g5A/gqQC/iED2AAQD3AAC/CDQA/ArA4A4QDJDKAaERQDQhKD+gBIADAAQGWABEgC/QEgDBABEPIAAACIAAAZIAAAAQgNDrjqCuIAAAAIAtATIABAAQF/CmACDoIAAACQAADol/ClIgDABQmAClodAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgSg2gBIgCAAQgvAAgqgNIgCgBQhnApiEAAIgBAAQi1AAiAhOIgBgBQh/hOAAhvQgBhuB+hPQApgYApgQQgLgjAAgmQAAhcBBhBQBBhABagBQBbABA/A8QAVg1ApgpQAUgTAWgPQBBgsBTgBQBVABBAAsQAWAPAUATQBDBEAJBdQBHgZBXAAQCKAABiBBQBiBCABBbIAAAJIAAACQgFBPhOA7IAAABIANAGIACABQCCA4ABBPIAAABQgBBPiCA5IgBAAQiDA4i2AAIgCAAg");
	this.shape_26.setTransform(939.65,28.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("EgeXAiKQkGghhdABQhSAAhJgaQiwBHjhABQk1AAjbiHQjaiFAAi+QAAi7DWiGQBFgqBHgbQgTg6gBhCQAAicBvhvQBuhuCdgBQCYAABtBpQAghYBJhJQAhggAjgaQBxhMCOAAQCPAABvBMQAlAaAgAgQB1B1APCfQB5gsCUAAQDsAACoBwQCnBwAACdQgICXiIBmIAbAKQDfBgAACIQAACHjfBhQjfBgk7gBQjVAAirgrgEBLJAdTQiZgTg3AAQgwAAgrgPQhoAqiDAAQi2AAiBhPQiAhOAAhvQAAhuB+hPQApgYApgRQgLgiAAgnQAAhbBBhBQBBhABcAAQBZgBBAA+QATg0ArgrQATgTAVgPQBCgtBUAAQBTAABBAtQAWAPAUATQBEBFAIBdQBIgaBXAAQCKAABiBCQBjBBAABdQgFBZhPA6QCTA/gBBQQAABQiCA4QiEA5i5AAQh9AAhlgagAanVmQkGgghdAAQhTAAhHgZQiyBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6gBhCQAAicBvhuQBuhvCcABQCYgBBtBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtABCnBvQCoBwAACeQgICXiIBlIAbAMQDfBfAACIQAACIjfBfQjfBgk8AAQjVAAirgsgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiNAAh7gqIgCgBQkvB5mBABIgFAAQoSAAl4jlIgEgCQl2jmgBlEIAAgCQAAlCFxjlIAIgGQBthDB9gxIAAgCQghhjAAhvIAAgEQAAkLC+i+IAAgBQC+i9EMgBIACAAQEFAAC7C0IABgBQA6iXB6h9IABgBQA5g3A9gqIAEgCQC/iDDzABIADAAQD0AAC/CCIADADQA9AqA4A2IABADQDIDIAaEQIACAAQDPhKD9AAIADAAQGWAAEgC/IABACQEfDBABEOIAAACIAAAYIAAACQgODqjoCtIAAABIAsASIACABQF/CmAADnIAAACQgBDpl+ClIgCAAQmBClodABIgDAAgEBroAHbQluABklhMIgCAAQm/g4ijAAIgCAAQiOAAh8grQkwB5mDAAIgBAAQoVAAl4jlIgBgBQl3jmgBlFIAAgBQAAlDFwjlQB3hJB8gwQghhlAAhxQAAkNC+i/QC+i+ENAAQEGABC8CzQA4iYB9h9QA5g4A+grQDAiED1ABQD3gBC/CDQA/ArA4A4QDJDKAbERQDPhLD+ABIACAAQGXgBEgDAQEgDBABEPIAAACIAAAZQgNDrjpCtIgBABIAtATIABAAQGAClABDpIAAACQAADol/ClIgDABQl/CmoegBIgCAAgAhhk8Qh9AAhkgaIgBAAQiXgTg3AAIgCAAQgwAAgpgNIgCgBQhnApiDAAIgBAAQi1AAiBhOIgBgBQh/hPAAhuQAAhuB+hOQAogZApgQQgLgjAAgmQABhcBAhAQBChBBZgBQBbACA/A6QAVgzApgpQAVgVAVgOQBBgsBTAAQBVAABBAsQAWAPASATQBEBEAKBdQBHgZBWAAQCKAABiBBQBiBCABBaIAAAJIAAADQgFBQhNA6IgBABIANAGIACABQCCA3ABBQIAAABQgBBPiCA5IgBAAQiCA4i3AAIgCAAg");
	this.shape_27.setTransform(929.65,28.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSAAhJgaQiwBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DViFQBGgrBIgbQgUg7AAhBQAAicBuhvQBvhvCcAAQCYAABtBpQAhhZBIhIQAhghAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiIBlIAbALQDgBggBCIQABCIjgBgQjfBgk7AAQjVAAirgsgEBLJAdTQiZgTg3AAQgwAAgrgPQhnAqiEAAQi2AAiBhPQiAhPAAhvQAAhuB+hOQApgZApgQQgLgiAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBVAABAAtQAWAPAUATQBEBEAIBeQBIgaBXAAQCKAABiBCQBjBBAABcQgFBZhPA8QCTA+AABQQAABQiEA4QiCA4i6AAQh9AAhlgZgAanVmQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiGQBFgqBIgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABtBpQAghZBJhHQAhghAkgZQBwhMCPAAQCOAABwBMQAkAZAgAhQB1B0APCeQB5gsCUAAQDuAACmBwQCoBwAACdQgICYiHBlIAbALQDeBgAACIQAACHjeBgQjgBgk7AAQjWAAirgsgEhJMAKQQltAAkmhMIgBAAQnCg4ihAAIgBAAQiMAAh8gqIgCAAQkvB4mAABIgGAAQoSgBl4jlIgEgCQl2jmgBlDIAAgCQAAlDFxjlIAHgFQBvhDB8gwIAAgDQghhjAAhwIAAgDQAAkLC+i+IAAgBQC/i+EMAAIACAAQEEABC8CzIAAgBQA5iXB8h8IABgBQA4g4A9gqIAEgCQC/iDD0AAIACAAQD0ABC/CDIADACQA9ApA4A4IABACQDIDIAaEQIACAAQDPhKD9AAIADAAQGWAAEgDAIACACQEeC/ABEPIAAACIAAAYIAAACQgNDqjpCtIABABIAsASIACABQF+ClABDoIAAACQgBDpl/ClIgDABQl/CloeAAIgDAAgEBroAHbQltAAkmhKIgCgBQm/g4iiAAIgDAAQiOAAh8grQkxB5mCAAIgBAAQoUAAl5jmIgBgBQl3jlgBlFIAAgBQABlDFvjlQB4hJB7gwQghhkAAhyQAAkNC+i+QC/i/EMAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED2AAQD2AAC/CDQA/ArA5A4QDIDKAbERQDPhKD+gBIADAAQGXAAEfDAQEgDBACEPIAAACIgBAZIAAAAQgNDrjpCuIgBAAIAtATIABAAQGACmABDoIAAACQAADomAClIgCABQl/CloeAAIgCAAgAhhk8Qh9AAhkgaIAAAAQiYgSg3gBIgCAAQgvAAgqgOIgCAAQhnApiDAAIgCAAQi1AAh/hOIgBgBQiAhOAAhvQAAhuB+hPQAogYApgQQgKgjAAgmQAAhcBBhBQBAhABagBQBcABA+A7QAVg0AqgpQATgUAWgOQBCgtBSAAQBVABBBAsQAVAPAUATQBEBEAJBdQBHgZBWAAQCKAABiBBQBiBCACBbIgBAJIAAACQgFBPhNA7IgBABIAOAGIACABQCBA4ABBPIAAABQgBBPiBA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_28.setTransform(919.65,29.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhIgZQiwBHjiAAQk1AAjaiGQjbiGAAi+QAAi7DWiFQBFgqBJgcQgVg6AAhCQAAicBvhvQBuhvCcAAQCYAABtBpQAhhZBJhIQAgghAlgZQBvhMCPAAQCOAABvBMQAlAZAhAhQB1B1AOCfQB5gsCUAAQDuAACmBwQCoBvAACeQgHCXiIBmIAaALQDgBgAACHQAACIjgBgQjfBgk7AAQjVAAisgsgEBLJAdTQiZgTg3AAQgxAAgqgOQhoApiEAAQi2AAiAhPQiAhOgBhvQAAhuB+hPQApgYAqgQQgMgjAAgnQABhbBAhBQBChBBbAAQBZAABAA9QATg0AsgqQASgTAVgPQBCgtBUAAQBUAABBAtQAWAPATATQBFBEAIBeQBHgaBXAAQCLAABiBCQBiBBAABdQgEBZhQA7QCTA/AABQQAABPiCA5QiEA4i5AAQh9AAhlgagAanVnQkGghhdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6ABhCQAAicBuhuQBuhvCcAAQCZAABsBpQAhhZBIhHQAighAkgZQBwhMCOAAQCPAABvBMQAlAZAhAhQB0B0APCeQB5gsCUAAQDtAACnBwQCnBwAACdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgrgEhJLAKQQluAAkmhMIgBAAQnDg4igAAIgBAAQiNAAh8gqIgBAAQkwB4mAABIgFAAQoTAAl3jmIgEgCQl2jlgBlEIAAgCQAAlDFwjlIAIgFQBvhDB8gwIAAgDQghhigBhwIAAgEQABkLC9i+IABgBQC/i9ELgBIADAAQEEABC7CzIABgBQA5iXB7h8IACgBQA3g4A/gqIACgCQC/iCD0gBIADAAQD0ABC/CDIACACQA+AqA3A3IACACQDHDIAaEQIADAAQDPhKD9AAIACAAQGXAAEfDAIACACQEfC/AAEPIAAACIAAAYIAAACQgNDqjpCuIABABIAsASIACABQF/ClABDnIAAACQgCDpl/ClIgBABQmBCloeAAIgBAAgEBroAHbQltAAkmhKIgDgBQm/g4iiAAIgDAAQiNAAh8grQkxB5mCAAIgBAAQoUAAl5jlIgBgBQl4jmAAlFIAAgBQAAlDFwjlQB3hJB8gwQgihkAAhyQAAkNC+i+QC/i/EMAAQEGAAC8C0QA5iYB8h9QA5g5A/gqQC/iED2AAQD3AAC/CDQA/ArA4A4QDJDKAaERQDQhKD+gBIADAAQGWABEgC/QEhDBAAEPIAAACIgBAZIAAAAQgMDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQgBDol+ClIgCABQmBClodAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiXgSg3gBIgCAAQgwAAgpgNIgCgBQhoApiDAAIgBAAQi1AAh/hOIgCgBQh/hOgBhvQAAhuB+hPQApgYApgQQgLgjAAgmQABhcBAhBQBBhABagBQBbABA/A7QAVgzAqgqQAUgTAUgPQBCgsBTgBQBUABBBAsQAWAPAUATQBEBEAIBdQBIgZBWAAQCKAABhBBQBjBCABBbIAAAJIAAACQgFBQhOA6IAAABIANAGIADABQCBA4AABPIAAACQAABOiBA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_29.setTransform(909.7,30.225);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("EgeYAiKQkFghhdABQhTAAhHgZQiyBGjgABQk1AAjbiGQjbiHAAi9QABi7DWiGQBFgqBHgbQgTg6gBhCQAAicBwhvQBthvCdABQCYgBBsBpQAihZBIhIQAhggAjgaQBxhMCOAAQCPAABvBMQAkAaAiAgQB0B1APCfQB5gsCUAAQDtAACnBwQCnBwAACdQgHCXiIBmIAaALQDgBfgBCIQABCHjgBgQjeBhk8gBQjVAAisgrgEBLKAdTQiagTg3AAQgwAAgrgPQhnAqiFAAQi1AAiAhPQiBhOAAhvQAAhuB+hPQAogYArgRQgMgiAAgnQAAhbBBhBQBBhABcAAQBZAABAA8QATgzArgrQATgTAVgPQBCgtBUAAQBUAABAAtQAWAPAUATQBEBFAIBdQBIgaBWAAQCLAABiBCQBjBBAABdQgEBYhQA7QCSA/AABQQAABQiCA4QiEA4i4ABQh+AAhkgagAanVmQkGgghdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6AAhCQAAicBvhuQBuhuCcAAQCZAABsBoQAhhZBIhHQAighAkgZQBvhMCPAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtABCnBvQCnBwABCdQgICYiIBlIAbAMQDfBgAACHQAACIjfBfQjfBgk8AAQjVAAirgsgEhJLAKQQluAAkmhLIgBAAQnDg5igAAIgBAAQiMAAh8gqIgCAAQkvB4mBABIgFAAQoTAAl3jlIgEgCQl1jmgClEIAAgBQAAlDFxjlIAIgGQBuhDB8gxIAAgBQghhjgBhxIAAgDQABkLC9i+IABgBQC+i9EMgBIACAAQEFAAC7C0IABgBQA5iXB7h9IABgBQA5g3A+gqIADgCQC/iCDzAAIADAAQD0AAC/CCIADACQA9ArA3A2IACACQDIDJAaEQIACAAQDPhKD9AAIADAAQGWAAEfC/IACACQEgDAgBEPIAAACIAAAXIAAADQgNDqjoCtIAAABIAsASIACABQF/ClABDoIAAACQgCDpl+ClIgCABQmBClodAAIgCAAgEBrpAHbQlvAAklhKIgDgBQm/g4iiAAIgCAAQiOgBh7gqQkyB5mCAAIgBAAQoUAAl5jlIgBgBQl3jmgBlFIAAgBQAAlDFwjlQB3hJB9gwQgjhkABhyQAAkNC9i/QC/i+ENAAQEGABC7CzQA5iYB9h9QA5g4A+grQDAiDD1AAQD3AAC/CCQA/ArA4A4QDJDKAaERQDRhKD9AAIADAAQGWAAEgC/QEhDBAAEPIAAACIAAAZQgNDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQgBDol+ClIgCABQmACmoegBIgBAAgAhhk8Qh8AAhlgaIgBAAQiXgSg3gBIgCAAQgwAAgpgNIgCgBQhnApiDAAIgBAAQi2AAiAhOIgBgBQh/hPAAhuQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhBQBBhABagBQBbACA/A7QAVg0ApgpQAUgVAWgOQBBgsBUAAQBTgBBBAtQAWAPAUATQBEBEAIBdQBIgZBWAAQCKAABiBBQBiBCABBbIAAAIIAAAEQgFBOhNA7IgBABIANAGIADABQCBA3AABQIAAACQAABOiBA5IgCAAQiCA4i3AAIgCAAg");
	this.shape_30.setTransform(899.7,30.95);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSAAhJgaQiwBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiFQBEgrBJgbQgUg7AAhBQAAicBuhvQBvhvCcAAQCYAABsBpQAhhZBJhIQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiHBlIAbALQDeBgAACIQAACIjeBgQjfBgk8AAQjVAAirgsgEBLJAdTQiZgTg3AAQgwAAgrgPQhoAqiDAAQi2AAiAhPQiBhPAAhvQAAhuB+hOQApgZApgQQgLgiAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABBAtQAWAPAUATQBEBEAIBeQBIgaBXAAQCKAABiBCQBjBBAABcQgFBZhPA8QCTA+gBBQQAABQiCA4QiEA4i4AAQh+AAhlgZgAanVmQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi7DXiGQBFgqBIgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAihZBIhHQAhghAkgZQBwhMCPAAQCOAABvBMQAlAZAhAhQB0B0APCeQB5gsCUAAQDuAACmBwQCoBwAACdQgHCYiIBlIAbALQDeBgABCIQgBCHjeBgQjgBgk8AAQjVAAirgsgEhJLAKQQlvAAklhMIgBAAQnCg4ihAAIgBAAQiNAAh7gqIgCAAQkvB4mBABIgFAAQoSgBl4jlIgEgCQl2jmgBlDIAAgCQAAlDFxjlIAIgFQBuhDB8gwIAAgDQghhjAAhvIAAgEQABkLC8i+IABgBQC+i+EMAAIACAAQEFABC7CzIABgBQA5iXB8h8IABgBQA4g4A9gqIAEgCQC/iDDzAAIADAAQD0ABC/CDIADACQA9ApA4A4IABACQDIDIAaEQIACAAQDPhKD9AAIADAAQGWAAEgDAIABACQEfC/ABEPIAAACIgBAYIAAACQgNDqjoCtIAAABIAsASIACABQF/ClABDoIAAACQgBDpl/ClIgCABQmBClodAAIgCAAgEBroAHbQluAAklhKIgCgBQnAg4iiAAIgCAAQiOAAh8grQkwB5mDAAIgBAAQoUAAl5jmIgBgBQl3jlAAlFIAAgBQAAlDFvjlQB3hJB8gwQghhkAAhyQAAkNC+i+QC/i/EMAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED2AAQD2AADACDQA+ArA5A4QDJDKAaERQDPhKD+gBIADAAQGXAAEfDAQEgDBACEPIAAACIgBAZIAAAAQgNDrjpCuIgBAAIAtATIABAAQGACmABDoIAAACQAADol/ClIgDABQl/CloeAAIgCAAgAhhk8Qh8AAhlgaIgBAAQiXgSg3gBIgCAAQgvAAgqgOIgCAAQhnApiDAAIgBAAQi2AAh/hOIgBgBQiAhOAAhvQAAhuB9hPQAqgYAogQQgKgjAAgmQgBhcBBhBQBChABZgBQBbABA/A7QAVg0AqgpQATgUAWgOQBCgtBSAAQBVABBBAsQAWAPATATQBEBEAJBdQBHgZBWAAQCKAABiBBQBjBCABBbIgBAJIAAACQgEBPhOA7IgBABIAOAGIACABQCBA4ABBPIAAABQAABPiCA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_31.setTransform(889.7,31.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGAAi+QAAi7DWiFQBFgqBJgcQgVg6ABhCQAAicBuhvQBuhvCcAAQCZAABsBpQAhhZBIhIQAighAkgZQBvhMCPAAQCPAABuBMQAlAZAhAhQB0B1AQCfQB4gsCUAAQDuAACmBwQCoBvAACeQgHCXiJBmIAbALQDgBgAACHQAACIjgBgQjfBgk8AAQjVAAirgsgEBLJAdTQiagTg2AAQgwAAgrgOQhoApiEAAQi2AAiAhPQiAhOAAhvQgBhuB/hPQAogYAqgQQgMgjABgnQAAhbBBhBQBBhBBbAAQBZAABAA9QAUg0AqgqQATgTAVgPQBCgtBUAAQBUAABBAtQAVAPAUATQBFBEAIBeQBHgaBXAAQCLAABjBCQBiBBAABdQgFBZhQA7QCTA/AABQQAABPiDA5QiDA4i5AAQh9AAhlgagAanVnQkGghhdAAQhTAAhIgZQiwBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6AAhCQgBicBvhuQBuhvCdAAQCXAABtBpQAhhZBIhHQAighAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCnBwAACdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgrgEhJMAKQQltAAkmhMIgBAAQnCg4ihAAIgBAAQiNAAh8gqIgCAAQkuB4mBABIgGAAQoSAAl4jmIgDgCQl2jlgBlEIAAgCQAAlDFwjlIAIgFQBvhDB7gwIABgCQgihjAAhwIAAgDQABkMC+i+IABgBQC+i9EMgBIACAAQEDABC8CzIABgBQA5iXB8h8IABgBQA4g4A9gqIADgCQC/iCD0gBIADAAQD0ABC+CDIADACQA+AqA3A3IACACQDHDIAbEQIACAAQDPhKD8AAIADAAQGXAAEfDAIADACQEeC/ABEPIAAACIgBAYIAAACQgNDqjpCuIABABIAsASIACABQF/ClABDnIAAACQgBDpmAClIgCABQl/ClofAAIgCAAgEBroAHbQltAAkmhKIgDgBQm/g4iiAAIgDAAQiNAAh8grQkxB5mCAAIgBAAQoVAAl4jlIgBgBQl3jmgBlFIAAgBQAAlDFwjlQB3hJB8gwQgihkAAhyQAAkNC+i+QC/i/EMAAQEHAAC7C0QA5iYB8h9QA6g5A+gqQC/iED2AAQD3AAC/CDQA+ArA5A4QDJDKAaERQDQhKD/gBIABAAQGXABEgC/QEhDBAAEPIAAACIgBAZIAAAAQgMDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQgBDol/ClIgBABQmBClodAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiXgSg3gBIgCAAQgwAAgpgNIgCgBQhoApiDAAIgBAAQi1AAh/hOIgBgBQiBhOAAhvQABhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhBQBBhABagBQBbABA/A7QAVgzAqgqQAUgTAUgPQBCgsBTgBQBVABBAAsQAWAPATATQBEBEAKBdQBGgZBXAAQCKAABhBBQBjBCABBbIAAAJIAAADQgFBPhOA6IAAABIAOAGIACABQCBA4AABPIAAACQAABOiBA5IgBAAQiEA4i2AAIgCAAg");
	this.shape_32.setTransform(879.75,32.375);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("EgeYAiKQkFghhdABQhTAAhHgZQiyBHjgAAQk1AAjaiGQjciHAAi9QAAi7DWiGQBFgqBJgbQgVg6AAhCQABicBvhvQBthvCdABQCYgBBsBpQAhhZBJhIQAhggAkgaQBwhMCOAAQCPAABvBMQAkAaAiAgQB0B1APCfQB5gsCUAAQDsAACnBwQCoBvAACeQgHCXiIBmIAaALQDgBfAACIQAACHjgBgQjeBgk8AAQjVAAisgrgEBLKAdTQiagTg2AAQgxAAgqgOQhpApiEAAQi1AAiAhPQiBhPAAhuQAAhuB+hPQApgZAqgQQgMgiAAgnQAAhbBBhBQBBhBBbABQBaAABAA8QATg0ArgqQATgTAVgPQBCgtBTAAQBUAABCAtQAVAPATATQBFBEAJBeQBHgaBWAAQCLAABjBCQBiBBAABdQgEBYhRA7QCUBAAABPQAABQiDA4QiDA4i5AAQh+AAhkgZgAanVnQkGghhdAAQhSAAhJgZQiwBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6ABhCQAAicBuhuQBuhuCdAAQCYAABsBoQAhhZBIhHQAighAkgYQBwhNCOAAQCPAABvBNQAlAYAgAhQB1B0APCeQB5gsCUAAQDtABCnBvQCnBwAACdQgHCYiIBlIAbAMQDfBgAACHQAACHjfBgQjgBgk7AAQjVAAirgrgEhJLAKQQluAAkmhLIgBAAQnCg5ihAAIgBAAQiMAAh9gqIgBAAQkwB4l/ABIgGAAQoTAAl3jlIgEgCQl2jmgBlEIAAgBQAAlEFwjlIAIgFQBvhDB7gxIABgBQghhkgBhvIAAgEQABkLC9i+IACgBQC+i9ELgBIADAAQEDAAC8C0IABgBQA5iXB8h9IABgBQA3g3A/gqIACgCQC/iCD0AAIADAAQD0gBC+CDIADACQA+AqA3A3IACACQDHDJAbEQIACABQDPhLD9AAIACAAQGWAAEgDAIADABQEeDAAAEPIAAACIAAAXIAAADQgNDqjpCuIABAAIAsASIACABQF/CmABDnIAAACQgBDpmAClIgBABQmAClofAAIgBAAgEBroAHbQluAAklhKIgDgBQm/g4ihAAIgEAAQiNgBh7gqQkyB5mCAAIgBAAQoUABl5jmIgBgBQl3jmgBlFIAAgBQAAlDFwjlQB3hJB9gwQgjhkAAhyQAAkNC+i/QC/i+ENAAQEGABC7CzQA5iYB9h9QA5g5A/gqQC/iDD1AAQD3AAC/CCQA+ArA5A4QDJDKAaERQDRhKD+AAIACAAQGWAAEgC/QEhDBAAEPIAAACIgBAZQgMDrjpCuIAAABIAtASIABAAQF/ClABDpIAAACQgBDol+ClIgCABQmBClodAAIgCAAgAhgk8Qh+AAhjgaIgCAAQiYgSg2gBIgCAAQgwAAgpgNIgCgBQhnApiEAAIgBAAQi0AAiAhOIgBgBQiAhPAAhuQAAhuB9hPQApgZApgPQgLgjAAgmQABhcBAhBQBBhABagBQBbABA/A8QAVg1AqgpQAUgTAUgPQBCgsBUAAQBUgBBAAtQAWAPAUATQBEBEAIBdQBIgZBWAAQCKAABhBBQBjBCABBbIAAAJIAAACQgFBQhOA6IAAACIAOAEIACACQCBA3AABQIAAACQAABOiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_33.setTransform(869.75,33.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTAAhHgaQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi7DXiFQBFgrBIgbQgUg7AAhBQAAicBvhvQBthvCdAAQCYAABsBpQAihZBIhIQAhghAkgZQBvhMCPAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDsAACnBwQCoBvAACdQgHCYiIBlIAbALQDeBgABCIQgBCIjeBgQjfBgk8AAQjVAAirgsgEBLKAdTQiagTg2AAQgxAAgrgPQhnAqiFAAQi1AAiAhPQiBhPAAhvQAAhuB+hOQApgZAqgQQgMgiAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBVAABAAtQAWAPATATQBFBEAJBeQBHgaBWAAQCLAABjBCQBiBBAABcQgEBZhRA8QCTA+AABQQABBQiDA4QiEA4i4AAQh+AAhkgZgAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjciGAAi9QAAi7DWiGQBFgqBJgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCQAABuBMQAlAZAgAhQB2B0APCeQB5gsCUAAQDsAACnBwQCoBwAACdQgICYiIBlIAbALQDgBgAACIQAACHjgBgQjfBgk8AAQjVAAirgsgEhJLAKQQlvAAkkhMIgCAAQnDg4ifAAIgCAAQiMAAh8gqIgCAAQkvB4mBABIgFAAQoTgBl3jlIgEgCQl1jmgClDIAAgCQAAlDFwjlIAJgFQBuhDB8gwIAAgDQghhiAAhwIAAgEQAAkLC9i+IABgBQC/i+ELAAIADAAQEEABC7CzIABgBQA6iXB7h8IABgBQA3g4A/gqIACgCQDAiDDzAAIADAAQD0ABC/CDIADACQA9ApA3A4IACACQDHDIAbEQIACAAQDPhKD9AAIADAAQGWAAEfDAIACACQEgC/AAEPIAAACIgBAYIAAACQgNDqjpCtIABABIAsASIACABQF/ClABDoIAAACQgBDpmAClIgBABQmBCloeAAIgBAAgEBrpAHbQlvAAklhKIgDgBQm/g4iiAAIgDAAQiNAAh7grQkyB5mCAAIgBAAQoUAAl5jmIgBgBQl3jlAAlFIAAgBQAAlDFvjlQB3hJB9gwQgjhkAAhyQAAkNC+i+QDAi/EMAAQEGAAC7C0QA5iYB9h9QA5g5A+gqQDAiED1AAQD3AADACDQA+ArA5A4QDIDKAaERQDRhKD+gBIACAAQGWAAEgDAQEhDBAAEPIAAACIAAAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQAADol/ClIgCABQmACloeAAIgBAAgAhhk8Qh8AAhlgaIgBAAQiXgSg3gBIgCAAQgwAAgpgOIgCAAQhnApiEAAIAAAAQi2AAh/hOIgBgBQiAhOAAhvQAAhuB9hPQAqgYAogQQgLgjAAgmQABhcBAhBQBBhABbgBQBaABA/A7QAWgzApgqQAUgUAUgOQBCgtBUAAQBUABBAAsQAXAPATATQBEBEAJBdQBHgZBWAAQCKAABiBBQBiBCABBbIAAAJIAAACQgFBQhNA6IAAABIANAGIACABQCBA4ABBPIAAACQAABOiCA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_34.setTransform(859.75,33.825);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("EgeXAiKQkHgghdAAQhSAAhIgZQixBHjhAAQk0AAjbiGQjbiGAAi+QAAi7DWiFQBFgqBIgcQgUg6ABhCQgBicBvhvQBuhvCdAAQCXAABtBpQAhhZBIhIQAighAjgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCfQB5gsCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDfBgABCHQgBCIjfBgQjfBgk8AAQjUAAirgsgEBLJAdTQiagTg2AAQgxAAgqgOQhoApiEAAQi2AAiAhPQiBhOABhvQAAhuB+hPQAogYAqgQQgLgjAAgnQgBhbBBhBQBBhBBcAAQBZAABAA9QAUg0AqgqQATgTAWgPQBCgtBTAAQBUAABBAtQAWAPATATQBEBEAJBeQBIgaBWAAQCLAABiBCQBiBBABBdQgFBZhQA7QCTA/AABQQAABPiDA5QiDA4i5AAQh+AAhkgagAanVnQkGghhdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6gBhCQABicBuhuQBuhvCdAAQCXAABtBpQAhhZBJhHQAhghAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCoBwgBCdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgrgEhJMAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiMAAh9gqIgCAAQkuB4mBABIgGAAQoSAAl3jmIgFgCQl1jmgBlDIAAgCQAAlDFwjlIAIgFQBuhDB8gwIABgCQghhjAAhwIAAgDQAAkMC+i+IABgBQC9i9ENgBIACAAQEDABC8CzIABgBQA6iXB7h8IABgBQA3g4A+gqIADgCQC/iCD0gBIADAAQD0ABC+CDIAEACQA8ApA4A4IACACQDHDIAbEQIABABQDQhLD8AAIAEAAQGWAAEfDAIADACQEeC/ABEPIAAACIgBAYIAAACQgNDqjpCuIABABIAsASIACABQF/ClAADnIAAACQgBDpl+ClIgDABQl/ClofAAIgCAAgEBroAHbQluAAklhKIgDgBQnAg4ihAAIgDAAQiNAAh8grQkxB5mCAAIgBAAQoVAAl4jlIgBgBQl3jmgBlFIAAgBQAAlDFwjlQB3hJB8gwQgihkAAhxQAAkOC/i+QC/i/EMAAQEFAAC8C0QA5iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDPhKD+gBIACAAQGXABEgC/QEgDBABEPIAAACIgBAZIAAAAQgMDrjqCuIAAAAIAtATIABAAQGACmABDoIAAACQAADomAClIgCABQl/CloeAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgSg2gBIgCAAQgvAAgqgNIgCgBQhoApiDAAIgBAAQi1AAiAhOIAAgBQiBhOABhvQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhAQBBhBBagBQBbABA+A7QAWgzAqgpQATgUAWgPQBBgsBTgBQBUABBBAsQAWAPATATQBEBEAKBdQBHgZBWAAQCKAABiBBQBiBCABBbIAAAJIAAADQgEBPhPA6IAAACIAOAFIABABQCCA4ABBPIAAACQgBBOiCA5IgBAAQiDA4i2AAIgCAAg");
	this.shape_35.setTransform(849.8,34.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTAAhHgaQiyBHjgAAQk1AAjaiGQjbiGgBi9QAAi7DWiFQBGgrBIgbQgVg7ABhBQAAicBuhvQBvhvCcAAQCYAABtBpQAghZBJhIQAhghAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B1APCfQB5gsCUAAQDtAACmBwQCoBvAACdQgICYiIBlIAbALQDgBgAACIQAACIjgBgQjeBgk8AAQjVAAirgsgEBLJAdTQiZgTg2AAQgxAAgqgPQhpAqiDAAQi2AAiBhPQiAhPAAhvQAAhuB+hOQAogZAqgQQgLgiAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBUAABCAtQAVAPATATQBFBEAIBeQBIgaBXAAQCLAABiBCQBiBBAABcQgFBZhQA8QCTA+ABBQQAABQiEA4QiDA4i5AAQh9AAhlgZgAanVmQkGgghdAAQhSAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DViGQBGgqBIgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABtBpQAhhZBIhHQAhghAkgZQBwhMCOAAQCPAABwBMQAkAZAgAhQB2B0AOCeQB6gsCUAAQDsAACoBwQCnBwAACdQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk7AAQjVAAisgsgEhJMAKQQltAAklhMIgBAAQnEg4ifAAIgBAAQiOAAh7gqIgCAAQkvB4mBABIgGAAQoSgBl3jlIgEgCQl2jmgBlDIAAgCQAAlDFwjlIAIgFQBuhDB8gwIABgDQghhiAAhwIAAgEQABkLC9i+IABgBQC+i+EMAAIACAAQEEAAC7C0IABgBQA5iXB8h8IABgBQA3g4A+gqIADgCQC/iDD0AAIADAAQD0AAC+CDIAEACQA8AqA5A3IACACQDGDIAbERIABAAQDQhKD8AAIADAAQGXAAEgC/IACACQEfDAAAEPIAAACIAAAXIAAACQgNDrjqCtIABABIAsASIACABQF/ClAADoIAAACQAADpmACkIgCABQmACloeABIgCAAgEBrpAHbQlvAAkkhLIgEAAQm/g4ihAAIgEAAQiNgBh8gqQkxB5mCAAIgBAAQoVAAl4jmIgBgBQl3jlgBlFIAAgBQAAlDFwjlQB3hJB8gwQghhkgBhyQAAkNC+i+QDAi/EMAAQEGAAC7C0QA6iYB8h9QA5g5A/gqQC/iED1AAQD3AAC/CDQA/ArA4A4QDKDKAaERQDPhLD/AAIACAAQGWAAEgDAQEgDBABEPIAAACIAAAZIAAAAQgNDrjpCuIgBAAIAtATIABAAQGACmABDoIAAACQAADomAClIgCABQl/CloeAAIgBAAgAhgk8Qh9AAhkgaIgBAAQiYgTg3AAIgCAAQgwAAgpgOIgCAAQhoApiDAAIgBAAQi1AAh/hOIgBgBQiAhPAAhuQAAhuB+hPQAogYApgQQgLgjAAgmQAAhcBBhBQBChABZgBQBbABA/A7QAVg0AqgpQATgUAVgOQBCgtBUAAQBTAABCAsQAVAQAUATQBEBEAJBdQBHgZBWAAQCLAABhBBQBiBCACBbIgBAJIAAACQgEBPhPA7IAAABIAOAGIACABQCBA4ABBPIAAABQgBBPiCA5IAAAAQiDA4i3AAIgBAAg");
	this.shape_36.setTransform(839.8,35.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhHgZQiyBHjgAAQk1AAjaiGQjciGAAi+QAAi7DWiFQBFgqBJgcQgVg6ABhCQAAicBvhvQBthvCdAAQCYAABsBpQAhhZBJhIQAhghAkgZQBvhMCPAAQCPAABvBMQAkAZAhAhQB1B1APCfQB5gsCUAAQDtAACmBwQCoBvAACeQgHCXiIBmIAaALQDfBgABCHQgBCIjfBgQjfBgk7AAQjVAAisgsgEBLKAdTQiagTg2AAQgxAAgqgOQhpApiEAAQi1AAiBhPQiAhOAAhvQAAhuB+hPQApgYAqgQQgMgjAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBUAABCAtQAVAPATATQBFBEAJBeQBHgaBWAAQCLAABjBCQBiBBAABdQgEBZhRA7QCUA/AABQQAABPiEA5QiDA4i5AAQh9AAhkgagAanVnQkFghheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGAAi9QgBi7DWiGQBFgqBJgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABtBpQAghZBJhHQAhghAkgZQBwhMCOAAQCPAABwBMQAkAZAgAhQB2B0APCeQB5gsCUAAQDsAACoBwQCnBwAACdQgICYiIBlIAbALQDgBggBCIQABCHjgBgQjfBgk8AAQjUAAisgrgEhJLAKQQlvAAkkhMIgBAAQnEg4ifAAIgBAAQiOAAh7gqIgCAAQkvB4mBABIgGAAQoSgBl3jlIgEgCQl1jmgClDIAAgCQAAlDFwjlIAIgFQBuhDB8gwIABgCQghhjAAhwIAAgDQABkMC9i+IABgBQC+i9EMgBIACAAQEEABC7CzIABgBQA5iXB8h8IABgBQA3g4A/gqIACgCQC/iCD0gBIADAAQD0ABC+CDIADACQA+ApA3A4IADACQDGDIAbEQIACAAQDPhKD8AAIADAAQGWAAEgDAIADACQEfC/AAEPIAAACIAAAYIAAACQgODqjpCtIABABIAsASIACABQF/ClAADoIAAACQAADpmAClIgCABQl/ClofAAIgBAAgEBrpAHbQlvAAkkhKIgEgBQm/g4ihAAIgEAAQiNAAh7grQkyB5mCAAIgBAAQoVAAl4jmIgBgBQl3jlgBlFIAAgBQAAlDFwjlQB3hJB8gwQgihkAAhyQAAkNC+i+QC/i/ENAAQEGAAC7C0QA5iYB9h9QA5g5A/gqQC/iED1AAQD3AADACDQA+ArA4A4QDKDKAZERQDRhKD+gBIACAAQGXABEfC/QEgDBABEPIAAACIAAAZIAAAAQgNDrjpCuIAAAAIAtATIAAAAQGACmABDoIAAACQgBDol/ClIgBABQmACloeAAIgBAAgAhgk8Qh+AAhjgaIgBAAQiYgSg3gBIgCAAQgwAAgpgOIgCAAQhoApiDAAIgBAAQi1AAh/hOIgBgBQiAhOAAhvQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhBQBChABZgBQBbABA/A7QAVgzAqgqQATgTAVgPQBCgsBUgBQBUABBAAsQAWAPAUATQBEBEAJBdQBHgZBWAAQCLAABhBBQBiBCABBbIAAAJIAAADQgEBPhPA6IAAABIAOAGIACABQCBA4ABBPIAAACQgBBOiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_37.setTransform(829.8,35.975);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("EgeXAiKQkHghhdABQhSAAhIgZQixBHjgAAQk1AAjbiGQjbiHAAi9QAAi7DWiGQBFgqBIgbQgTg6gBhCQABicBuhvQBuhvCdABQCXgBBtBpQAhhZBJhIQAhggAjgaQBwhMCOAAQCPAABwBMQAkAaAhAgQB1B1AOCfQB6gsCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDfBfAACIQAACHjfBgQjfBgk7AAQjVABirgsgEBLJAdTQiagTg2AAQgwAAgrgOQhoApiEAAQi2AAiAhPQiBhPAAhuQABhuB9hPQApgZAqgQQgLgigBgnQAAhbBBhBQBBhBBcABQBaAABAA8QASg0AsgqQASgTAVgPQBDgtBTAAQBUAABBAtQAVAPAUATQBEBEAJBeQBIgaBWAAQCLAABiBCQBiBBAABdQgDBYhQA7QCSBAAABPQAABQiCA4QiEA4i5AAQh+AAhkgZgAanVnQkGghhdAAQhTAAhHgZQiyBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6gBhCQABicBuhuQBuhuCcAAQCYAABtBoQAhhZBJhHQAhghAkgYQBwhNCOAAQCPAABvBNQAkAYAiAhQB0B0APCeQB5gsCUABQDtAACnBvQCoBwAACdQgICYiIBlIAbAMQDfBgAACHQAACHjfBgQjfBgk8AAQjVAAirgrgEhJMAKQQluAAklhLIgBAAQnDg5igAAIgBAAQiNAAh7gqIgDAAQkvB4mAABIgGAAQoSAAl3jmIgFgCQl1jmgBlDIAAgBQAAlEFwjlIAIgFQBuhDB8gxIABgBQghhkAAhvIAAgEQAAkLC9i+IABgBQC+i9EMgBIACAAQEFAAC7C0IABgBQA5iXB7h9IABgBQA4g3A+gqIADgCQC/iCD0AAIACAAQD1gBC/CDIADACQA8AqA4A3IACACQDHDJAaEQIACABQDQhLD8AAIAEAAQGWAAEfDAIACABQEfDAAAEPIAAACIAAAXIAAADQgNDpjoCvIAAAAIAsASIACABQF+CmABDnIAAACQgBDpl+ClIgCABQmBClodAAIgDAAgEBroAHbQluAAklhKIgDgBQnAg4ihAAIgDAAQiNgBh8gqQkxB5mDAAIgBAAQoUABl5jmIgBgBQl3jmAAlFIAAgBQAAlDFvjlQB4hJB8gwQgihkAAhyQAAkNC+i/QC/i+ENAAQEFABC8CzQA5iYB9h9QA4g5A/gqQDAiDD1AAQD3AAC/CCQA+ArA5A4QDJDKAbERQDPhKD+AAIACAAQGXAAEgC/QEgDBABEPIAAACIAAAZQgNDrjqCuIAAABIAtASIABAAQGAClABDpIAAACQgBDol/ClIgCABQl/ClofAAIgBAAgAhhk8Qh9AAhkgaIgBAAQiYgSg3gBIgBAAQgwAAgpgNIgCgBQhnApiEAAIgBAAQi1AAiAhOIgBgBQh/hPAAhuQAAhuB9hPQApgZApgPQgLgjAAgmQABhcBAhBQBBhABagBQBbABA+A7QAWg0ApgpQAVgTAVgPQBBgsBTAAQBVgBBAAtQAWAPATATQBEBEAKBdQBHgZBWAAQCKAABiBBQBiBCABBbIAAAJIAAACQgFBQhOA6IAAACIANAEIACACQCCA3ABBQIAAACQgBBOiCA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_38.setTransform(819.85,36.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSAAhJgaQiwBHjhAAQk1AAjaiGQjbiGAAi9QAAi7DViFQBGgrBHgbQgTg7AAhBQAAicBuhvQBvhvCcAAQCYAABtBpQAhhZBIhIQAhghAjgZQBwhMCPAAQCPAABvBMQAlAZAgAhQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiIBlIAbALQDfBgAACIQAACIjfBgQjfBgk7AAQjVAAirgsgEBLJAdTQiZgTg3AAQgwAAgqgPQhpAqiDAAQi2AAiBhPQiAhPAAhvQAAhuB+hOQApgZApgQQgLgiAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABBAtQAWAPAUATQBEBEAIBeQBIgaBXAAQCKAABiBCQBjBBAABcQgFBZhPA8QCSA+AABQQAABQiDA4QiCA4i6AAQh9AAhlgZgAanVmQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6gBhCQABicBuhuQBuhvCcAAQCYAABtBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtAACnBwQCnBwAACdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJMAKQQltAAkmhMIgBAAQnDg4igAAIgBAAQiMAAh8gqIgDAAQkuB4mBABIgGAAQoSgBl3jlIgFgCQl1jmgBlDIAAgCQAAlDFxjlIAHgFQBvhDB7gwIABgDQghhiAAhwIAAgEQABkLC9i+IAAgBQC+i+ENAAIABAAQEEAAC8C0IABgBQA6iXB6h8IABgBQA4g4A+gqIADgCQC/iDD0AAIADAAQD0AAC+CDIAEACQA8AqA4A3IACACQDHDIAbERIABAAQDQhKD8AAIAEAAQGWAAEfC/IACACQEfDAABEPIAAACIAAAXIAAACQgODrjoCtIAAABIAsASIACABQF/ClAADoIAAACQgBDpl+CkIgDABQl/CloeABIgDAAgEBroAHbQltAAkmhLIgDAAQnAg4ihAAIgDAAQiNgBh8gqQkxB5mCAAIgBAAQoVAAl4jmIgBgBQl3jlgBlFIAAgBQAAlDFwjlQB3hJB8gwQgihkAAhyQAAkNC/i+QC+i/ENAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDPhLD+AAIADAAQGXAAEfDAQEgDBABEPIAAACIAAAZIAAAAQgNDrjpCuIgBAAIAtATIABAAQGACmABDoIAAACQgBDol/ClIgCABQl/CloeAAIgCAAgAhhk8Qh9AAhkgaIAAAAQiYgTg3AAIgCAAQgvAAgqgOIgCAAQhoApiCAAIgCAAQi0AAiBhOIgBgBQh/hPAAhuQAAhuB+hPQAogYApgQQgLgjAAgmQABhcBAhBQBBhABagBQBbABA+A7QAWgzApgqQAVgUAVgOQBBgtBTAAQBUAABCAsQAVAQATATQBEBEAKBdQBHgZBWAAQCKAABiBBQBjBCAABbIAAAJIAAACQgEBQhPA6IABABIANAGIACABQCBA4ABBPIAAACQgBBOiCA5IgBAAQiCA4i3AAIgCAAg");
	this.shape_39.setTransform(809.85,37.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTAAhIgZQiwBHjhAAQk1AAjaiGQjbiGAAi+QgBi7DWiFQBFgqBIgcQgTg6AAhCQAAicBuhvQBvhvCcAAQCYAABtBpQAhhZBIhIQAhghAjgZQBwhMCPAAQCPAABvBMQAlAZAgAhQB1B1APCfQB5gsCUAAQDtAACnBwQCnBvAACeQgICXiIBmIAbALQDgBggBCHQABCIjgBgQjfBgk7AAQjVAAirgsgEBLJAdTQiZgTg2AAQgxAAgqgOQhpApiDAAQi2AAiBhPQiAhOAAhvQAAhuB+hPQAogYAqgQQgLgjAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBVAABAAtQAWAPAUATQBEBEAIBeQBIgaBXAAQCLAABiBCQBiBBAABdQgFBZhPA7QCSA/ABBQQAABPiEA5QiCA4i6AAQh9AAhlgagAanVnQkGghhcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiGQBEgqBJgcQgUg6AAhCQAAicBuhuQBuhvCdAAQCYAABtBpQAghZBJhHQAhghAkgZQBwhMCPAAQCPAABvBMQAkAZAgAhQB2B0AOCeQB5gsCVAAQDtAACnBwQCnBwAACdQgICYiHBlIAbALQDeBgAACIQAACHjeBgQjgBgk7AAQjWAAirgrgEhJLAKQQluAAkmhMIAAAAQnDg4igAAIgBAAQiOAAh7gqIgCAAQkwB4mAABIgGAAQoSgBl3jlIgEgCQl2jmgBlDIAAgCQAAlDFwjlIAIgFQBuhDB8gwIABgCQghhjAAhwIAAgDQAAkMC+i+IABgBQC+i9EMgBIABAAQEFABC7CzIABgBQA6iXB7h8IAAgBQA5g4A9gqIADgCQC/iCD0gBIADAAQD0ABC+CCIAEACQA8AqA5A3IACACQDHDJAaEQIABABQDQhLD8AAIAEAAQGVAAEhC/IACACQEeDAABEPIAAACIAAAXIAAACQgODrjoCtIAAABIAsASIACABQF/ClAADoIAAACQAADpl/ClIgCABQmACloeAAIgCAAgEBroAHbQltAAklhKIgDgBQnBg4igAAIgDAAQiOAAh8grQkxB5mCAAIgBAAQoVAAl4jmIgBgBQl3jlgBlFIAAgBQAAlDFwjlQB3hJB8gwQghhkgBhxQAAkOC+i+QDAi/EMAAQEGAAC7C0QA6iYB8h9QA5g5A+gqQDAiED2AAQD2AAC/CDQA/ArA4A4QDJDKAbERQDQhKD+gBIACAAQGXABEfC/QEhDBAAEPIAAACIAAAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQAADomAClIgCABQl/CloeAAIgCAAgAhgk8Qh+AAhjgaIgBAAQiYgSg3gBIgCAAQgvAAgqgOIgCAAQhoApiDAAIgBAAQi1AAiAhOIAAgBQiAhOAAhvQAAhuB+hPQAogYApgQQgLgjABgmQgBhcBBhAQBChBBZgBQBbABA/A7QAVgzApgpQAUgUAWgPQBBgsBTgBQBUABBCAsQAVAPAUATQBEBEAJBdQBHgZBWAAQCLAABhBBQBiBCACBbIgBAJIAAADQgEBPhPA6IAAACIAOAFIACABQCBA4ABBPIAAACQgBBOiCA5IAAAAQiDA4i3AAIgBAAg");
	this.shape_40.setTransform(799.85,38.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("EgeYAiKQkFghhdAAQhTABhIgZQiwBHjhAAQk2AAjaiGQjbiHAAi9QAAi7DWiGQBFgpBIgcQgTg6gBhCQABicBuhvQBuhuCcAAQCYAABtBoQAhhZBJhIQAhghAjgZQBwhMCPAAQCOAABwBMQAkAZAhAhQB1B1AOCfQB5gsCUAAQDuAACmBwQCoBvAACdQgHCYiIBmIAaALQDgBggBCHQABCHjgBgQjfBgk7ABQjVAAisgsgEBLJAdTQiZgTg3AAQgxAAgqgOQhoApiEAAQi2AAiAhPQiAhPgBhuQAAhvB+hOQApgZAqgQQgMgiAAgnQABhbBAhBQBBhBBcAAQBaABBAA8QASg0AsgqQATgTAUgPQBCgsBUAAQBUAABBAsQAVAPAUATQBFBEAIBeQBHgaBXAAQCLAABiBCQBjBBgBBdQgDBYhRA7QCTBAAABPQAABQiCA4QiEA4i5AAQh+AAhkgZgAanVnQkGghhdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiFQBFgrBJgcQgVg6AAhCQAAicBvhuQBuhvCcAAQCZAABsBpQAhhZBJhHQAhghAkgYQBvhNCPAAQCPAABvBNQAkAYAiAhQB0B0APCeQB5grCUAAQDtAACnBvQCnBwABCdQgICYiIBlIAbAMQDfBgAACHQAACHjfBgQjfBgk8AAQjVAAirgrgEhJLAKQQluAAkmhLIgBAAQnDg5igAAIgBAAQiNAAh7gqIgCAAQkwB4mBABIgFAAQoSAAl3jmIgEgCQl2jmgBlDIAAgBQAAlEFxjlIAIgFQBthEB8gvIABgCQghhjgBhwIAAgDQABkMC9i+IABgBQC+i+EMABIACAAQEEAAC8CzIABgBQA5iXB7h9IABgBQA4g3A+gqIADgCQC/iCDzgBIADAAQD1AAC/CDIACACQA9AqA4A3IACACQDHDJAaEQIADABQDOhLD+AAIACAAQGWAAEgDAIACABQEfDAAAEPIAAACIAAAXIAAACQgNDrjoCuIAAABIAsASIABAAQF/ClACDoIAAACQgCDpl/ClIgBABQmBClodAAIgCAAgEBroAHcQlugBklhKIgDgBQnAg4ihAAIgDAAQiNgBh8gqQkxB5mCAAIgBAAQoVABl4jmIgCgCQl2jlgBlFIAAgBQAAlDFwjlQB3hJB8gwQgihlAAhxQAAkNC+i/QDAi9EMAAQEFAAC8C0QA5iZB8h9QA5g5A/gqQC/iED2AAQD3ABC/CCQA/ArA4A4QDJDKAaERQDQhKD+gBIADAAQGWAAEgDAQEhDBAAEPIAAACIAAAZQgNDrjqCuIAAABIAtATIACAAQF/CkABDpIAAACQAADomAClIgCABQl/CloeABIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgSg3AAIgCAAQgvgBgqgOIgBAAQhoApiDABIgBAAQi1gBiAhOIgBgBQh/hOgBhvQAAhuB+hPQApgZAogPQgKgjAAgmQAAhcBBhBQBBhABagBQBbABA+A7QAWg0ApgpQAUgTAVgPQBCgsBTAAQBUAABBArQAWAQAUATQBEBEAIBdQBIgZBWAAQCLAABhBBQBiBCABBbIAAAJIAAACQgFBQhOA6IAAACIAOAEIACABQCBA5AABPIAAACQAABOiBA5IgCAAQiCA4i4AAIgBAAg");
	this.shape_41.setTransform(789.9,38.85);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSAAhJgaQixBHjgAAQk1AAjbiGQjaiGAAi9QAAi7DWiFQBFgrBHgbQgTg7gBhBQAAicBvhvQBvhvCcAAQCYAABsBpQAhhZBJhIQAhghAjgZQBxhMCOAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiHBlIAbALQDeBgAACIQAACIjeBgQjfBgk8AAQjVAAirgsgEBLJAdTQiZgTg3AAQgwAAgrgPQhoAqiEAAQi1AAiBhPQiAhPAAhvQAAhuB+hOQAogZAqgQQgLgiAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABBAtQAWAPAUATQBEBEAIBeQBIgaBWAAQCLAABiBCQBjBBAABcQgFBZhPA8QCSA+AABQQAABQiCA4QiEA4i5AAQh9AAhlgZgAanVmQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi7DXiGQBFgqBIgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAihZBIhHQAhghAkgZQBwhMCPAAQCOAABvBMQAlAZAhAhQB0B0APCeQB5gsCUAAQDuAACmBwQCoBwAACdQgHCYiIBlIAbALQDeBgABCIQgBCHjeBgQjgBgk8AAQjVAAirgsgEhJLAKQQluAAkmhMIgBAAQnCg4ihAAIgBAAQiMAAh8gqIgCAAQkwB4mAABIgGAAQoSgBl3jlIgFgCQl1jmgBlDIAAgCQAAlDFxjlIAIgFQBthDB9gwIABgCQgihjAAhwIAAgDQABkMC8i+IABgBQC+i+EMAAIACAAQEFAAC7C0IABgBQA5iXB7h8IABgBQA4g4A+gqIADgCQC/iDDzAAIADAAQD1AAC/CDIACACQA+AqA3A3IACACQDHDIAbERIABAAQDQhKD9AAIADAAQGVAAEgC/IACACQEfDAAAEPIAAACIAAAXIAAACQgMDrjpCtIAAABIAsASIACABQF/ClABDoIAAACQgBDpl/CkIgCABQmACloeABIgCAAgEBroAHbQluAAklhLIgDAAQm/g4iiAAIgDAAQiNgBh8gqQkwB5mDAAIgBAAQoVAAl4jmIgBgBQl3jlAAlFIAAgBQAAlDFvjlQB3hJB9gwQgjhkABhyQAAkNC+i+QC/i/EMAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED2AAQD2AADACDQA+ArA5A4QDJDKAZERQDQhLD/AAIACAAQGWAAEhDAQEgDBABEPIAAACIgBAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQAADol/ClIgDABQmAClodAAIgCAAgAhhk8Qh8AAhlgaIgBAAQiXgTg3AAIgCAAQgvAAgqgOIgCAAQhoApiCAAIgBAAQi2AAiAhOIgBgBQh/hPAAhuQAAhuB9hPQApgYApgQQgKgjAAgmQAAhcBAhBQBBhABagBQBbABA+A7QAWgzApgqQAUgUAWgOQBBgtBTAAQBVAABBAsQAWAQATATQBEBEAJBdQBHgZBXAAQCJAABiBBQBjBCAABbIAAAJIAAADQgFBPhOA6IABABIANAGIACABQCCA4AABPIAAACQgBBOiCA5IgBAAQiCA4i3AAIgCAAg");
	this.shape_42.setTransform(779.9,39.575);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSAAhJgZQiwBHjhAAQk1AAjbiGQjaiGAAi+QAAi7DWiFQBFgqBHgcQgTg6gBhCQAAicBvhvQBuhvCdAAQCYAABtBpQAghZBJhIQAhghAjgZQBxhMCOAAQCPAABvBMQAlAZAgAhQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDgBggBCHQABCIjgBgQjfBgk7AAQjVAAirgsgEBLJAdTQiZgTg3AAQgwAAgrgOQhoApiDAAQi2AAiBhPQiAhOAAhvQAAhuB+hPQApgYApgQQgLgjAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABBAtQAWAPAUATQBEBEAIBeQBIgaBXAAQCKAABiBCQBjBBAABdQgFBZhPA7QCTA/gBBQQAABPiCA5QiEA4i5AAQh9AAhlgagAanVnQkGghhcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjbiGABi9QgBi7DXiGQBFgqBIgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAihZBIhHQAhghAkgZQBwhMCPAAQCOAABvBMQAlAZAhAhQB0B0APCeQB5gsCUAAQDuAACmBwQCoBwAACdQgHCYiIBlIAbALQDeBgAACIQAACHjeBgQjgBgk7AAQjWAAirgrgEhJLAKQQluAAkmhMIgBAAQnCg4ihAAIgBAAQiMAAh8gqIgDAAQkvB4mAABIgGAAQoSgBl3jlIgFgCQl1jmgBlDIAAgCQAAlDFxjlIAIgFQBthDB9gwIABgCQgihjAAhwIAAgDQAAkMC9i+IABgBQC+i9EMgBIACAAQEFABC7CzIABgBQA6iXB6h8IABgBQA4g4A+gqIADgCQC/iCD0gBIACAAQD1ABC/CCIADACQA8AqA4A3IACACQDHDIAbERIABABQDQhLD8AAIAEAAQGWAAEfC/IACACQEfDAAAEPIAAACIAAAXIAAACQgNDrjoCtIAAABIAsASIACABQF/ClAADoIAAACQAADpl/ClIgCABQmACloeAAIgCAAgEBroAHbQluAAklhKIgDgBQm/g4iiAAIgDAAQiNAAh8grQkwB5mDAAIgBAAQoVAAl4jmIgBgBQl3jlAAlFIAAgBQAAlDFvjlQB3hJB8gwQghhkAAhxQAAkOC+i+QC+i/ENAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED2AAQD2AAC/CDQA/ArA5A4QDJDKAaERQDPhKD/gBIACAAQGWABEhC/QEgDBABEPIAAACIgBAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQAADol/ClIgDABQl/CloeAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiXgSg3gBIgCAAQgwAAgpgOIgCAAQhnApiDAAIgBAAQi1AAiBhOIgBgBQh/hOAAhvQAAhuB+hPQAogYApgQQgKgjAAgmQAAhcBAhAQBBhBBagBQBbABA+A7QAWgzApgpQAVgUAVgPQBBgsBTgBQBVABBBAsQAWAPATATQBEBEAJBdQBHgZBXAAQCJAABiBBQBjBCABBbIgBAJIAAADQgEBPhPA6IABACIANAFIACABQCBA4ABBPIAAACQgBBOiCA5IgBAAQiCA4i3AAIgCAAg");
	this.shape_43.setTransform(769.9,40.275);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhIgaQiwBHjiAAQk1AAjaiGQjbiGAAi9QAAi7DWiFQBFgrBJgbQgVg7AAhBQAAicBvhvQBuhvCcAAQCZAABsBpQAhhZBJhIQAgghAlgZQBvhMCPAAQCOAABvBMQAlAZAhAhQB0B1APCfQB5gsCUAAQDuAACmBwQCoBvAACdQgHCYiIBlIAaALQDgBgAACIQAACIjgBgQjfBgk8AAQjVAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiAhPAAhvQAAhuB9hOQApgZAqgQQgMgiAAgnQAAhbBChBQBAhBBcAAQBZAABAA9QATg0AsgqQASgTAVgPQBCgtBUAAQBUAABBAtQAWAPATATQBEBEAJBeQBHgaBXAAQCLAABjBCQBiBBAABcQgFBZhQA8QCTA+AABQQAABQiDA4QiDA4i5AAQh9AAhlgZgAanVmQkGgghdAAQhTAAhIgZQiwBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6ABhCQAAicBuhuQBuhvCdAAQCYAABsBpQAhhZBIhHQAighAkgZQBwhMCOAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCnBwAACdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJLAKQQlvAAkkhMIgCAAQnCg4ihAAIgBAAQiNAAh8gqIgBAAQkwB4mBABIgFAAQoSgBl4jlIgDgCQl2jmgBlDIAAgCQAAlDFwjlIAIgFQBuhDB8gwIABgCQghhjgBhwIAAgDQABkMC9i+IABgBQC+i+EMAAIACAAQEEAAC8C0IABgBQA5iXB8h8IABgBQA3g4A+gqIADgCQC/iDDzAAIAEAAQDzAAC/CDIADACQA9AqA4A3IACACQDHDIAbEQIABABQDQhKD8AAIADAAQGWAAEgC/IACACQEfDAAAEPIAAACIAAAXIAAACQgNDqjpCuIAAABIAsASIACABQGAClABDoIAAACQgBDpmACkIgCABQl/ClofABIgBAAgEBroAHbQluAAklhLIgDAAQnAg4ihAAIgDAAQiOgBh7gqQkxB5mCAAIgBAAQoVAAl4jmIgBgBQl4jlAAlFIAAgBQAAlDFwjlQB3hJB8gwQgihkAAhyQAAkNC+i+QC/i/EMAAQEHAAC7C0QA5iYB8h9QA5g5A/gqQC/iED2AAQD3AAC/CDQA+ArA5A4QDJDKAaERQDRhLD+AAIACAAQGWAAEgDAQEhDBAAEPIAAACIgBAZIAAAAQgMDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQAADomAClIgCABQl/CloeAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgTg3AAIgCAAQgvAAgqgOIgCAAQhnApiDAAIgBAAQi1AAh/hOIgBgBQiBhPAAhuQAAhuB+hPQApgYAogQQgKgjAAgmQABhcBAhBQBBhABagBQBaABBAA7QAVgzAqgqQAUgUAUgOQBCgtBTAAQBUAABBAsQAWAQAUATQBEBEAIBdQBIgZBWAAQCLAABhBBQBjBCAABbIAAAJIAAADQgFBPhOA6IAAABIAOAGIACABQCBA4AABPIAAACQAABOiBA5IgBAAQiEA4i2AAIgCAAg");
	this.shape_44.setTransform(759.95,41.025);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhHgZQiyBHjgAAQk1AAjbiGQjbiGAAi+QAAi7DXiFQBEgqBJgcQgVg6AAhCQAAicBwhvQBthvCdAAQCYAABsBpQAihZBIhIQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDsAACnBwQCoBvAACeQgHCXiIBmIAbALQDeBgABCHQgBCIjeBgQjgBgk7AAQjVAAisgsgEBLKAdTQiagTg3AAQgwAAgrgOQhnApiFAAQi1AAiAhPQiBhOAAhvQAAhuB+hPQAogYArgQQgMgjAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABCAtQAVAPATATQBFBEAJBeQBHgaBWAAQCLAABiBCQBjBBAABdQgEBZhRA7QCTA/AABQQAABPiCA5QiEA4i4AAQh+AAhkgagAanVnQkFghheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjciGAAi9QAAi7DWiGQBFgqBJgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB1B0APCeQB5gsCUAAQDsAACnBwQCoBwAACdQgICYiIBlIAbALQDgBgAACIQAACHjgBgQjfBgk8AAQjVAAirgrgEhJLAKQQluAAklhMIgCAAQnCg4igAAIgCAAQiNAAh7gqIgCAAQkwB4mBABIgFAAQoSgBl4jlIgDgCQl2jmgBlDIAAgCQAAlDFwjlIAJgFQBuhDB8gwIAAgCQghhjAAhwIAAgDQAAkMC9i+IABgBQC/i9ELgBIADAAQEEABC7CzIABgBQA5iXB7h8IACgBQA4g4A9gqIADgCQC/iCDzgBIAEAAQD0ABC/CCIACACQA+AqA3A3IACACQDHDIAbERIACABQDOhLD+AAIACAAQGWAAEgC/IACACQEfDAAAEPIAAACIAAAXIAAACQgNDrjoCtIAAABIAsASIACABQF/ClABDoIAAACQgBDpl/ClIgCABQmACloeAAIgCAAgEBroAHbQltAAkmhKIgDgBQnAg4ihAAIgDAAQiNAAh7grQkyB5mCAAIgBAAQoUAAl5jmIgBgBQl3jlAAlFIAAgBQAAlDFvjlQB3hJB9gwQgjhkAAhxQAAkOC+i+QC/i/ENAAQEGAAC7C0QA6iYB8h9QA5g5A/gqQC/iED1AAQD3AADACDQA+ArA4A4QDJDKAaERQDRhKD+gBIACAAQGWABEgC/QEhDBAAEPIAAACIAAAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQGACmAADoIAAACQgBDol+ClIgCABQmBClodAAIgCAAgAhhk8Qh8AAhlgaIgBAAQiXgSg3gBIgCAAQgwAAgpgOIgCAAQhnApiDAAIgBAAQi2AAh/hOIgCgBQh/hOAAhvQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhAQBBhBBagBQBbABA/A7QAVgzAqgpQAUgUAUgPQBCgsBUgBQBTABBBAsQAXAPATATQBEBEAJBdQBHgZBXAAQCJAABiBBQBiBCABBbIAAAJIAAADQgFBPhOA6IAAACIAOAFIACABQCCA4AABPIAAACQgBBOiBA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_45.setTransform(749.95,41.725);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhHgZQiyBHjgAAQk1AAjbiGQjbiGAAi+QAAi7DXiFQBFgqBHgcQgTg6gBhCQAAicBwhvQBthvCdAAQCYAABsBpQAihZBIhIQAhghAjgZQBxhMCOAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDsAACoBwQCnBvAACeQgHCXiIBmIAbALQDeBgAACHQAACIjeBgQjfBgk8AAQjVAAisgsgEBLKAdTQiagTg3AAQgwAAgrgOQhnApiFAAQi1AAiAhPQiBhOAAhvQAAhuB+hPQAogYArgQQgMgjAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBUAABAAtQAWAPAUATQBEBEAIBeQBIgaBWAAQCLAABiBCQBjBBAABdQgEBZhQA7QCSA/AABQQAABPiCA5QiEA4i4AAQh+AAhkgagAanVnQkGghhdAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjciGAAi9QAAi7DWiGQBGgqBIgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAhhZBJhHQAhghAkgZQBwhMCPAAQCPAABuBMQAlAZAhAhQB0B0AQCeQB4gsCUAAQDuAACmBwQCoBwAACdQgHCYiJBlIAbALQDfBgABCIQgBCHjfBgQjfBgk8AAQjUAAisgrgEhJLAKQQluAAkmhMIgBAAQnCg4ihAAIgBAAQiMAAh8gqIgCAAQkwB4mBABIgFAAQoSgBl4jlIgDgCQl2jmgBlDIAAgCQAAlDFxjlIAIgFQBuhDB8gwIABgCQgihjAAhwIAAgDQABkMC8i+IABgBQC+i9EMgBIACAAQEFABC7CzIABgBQA5iXB7h8IABgBQA5g4A9gqIADgCQC/iCDzgBIADAAQD1ABC/CCIACACQA9AqA4A3IACACQDHDIAbERIACABQDOhLD+AAIACAAQGWAAEgC/IACACQEfDAAAEPIAAACIAAAXIAAACQgMDrjpCtIAAABIAsASIACABQF/ClABDoIAAACQgBDpl/ClIgCABQmACloeAAIgCAAgEBroAHbQluAAklhKIgDgBQm/g4iiAAIgDAAQiNAAh7grQkyB5mCAAIgBAAQoUAAl5jmIgBgBQl3jlAAlFIAAgBQAAlDFvjlQB3hJB9gwQgjhkABhxQAAkOC9i+QC/i/ENAAQEGAAC7C0QA5iYB9h9QA5g5A+gqQDAiED2AAQD2AADACDQA+ArA5A4QDJDKAZERQDRhKD+gBIACAAQGWABEhC/QEgDBAAEPIAAACIAAAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQGACmAADoIAAACQgBDol+ClIgCABQmBClodAAIgCAAgAhhk8Qh8AAhlgaIgBAAQiXgSg3gBIgCAAQgwAAgpgOIgCAAQhnApiDAAIgBAAQi2AAiAhOIgBgBQh/hOAAhvQAAhuB9hPQApgYApgQQgKgjAAgmQAAhcBAhAQBBhBBagBQBbABA+A7QAWgzApgpQAUgUAWgPQBBgsBUgBQBTABBBAsQAXAPATATQBEBEAJBdQBHgZBXAAQCJAABiBBQBiBCABBbIAAAJIAAADQgFBPhOA6IABACIANAFIACABQCCA4AABPIAAACQgBBOiBA5IgCAAQiCA4i3AAIgCAAg");
	this.shape_46.setTransform(739.95,42.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("EgeXAiKQkHgghdAAQhSAAhIgaQixBHjhAAQk1AAjaiGQjbiGAAi9QAAi7DWiFQBFgrBJgbQgVg7ABhBQAAicBuhvQBuhvCdAAQCYAABsBpQAhhZBIhIQAighAkgZQBvhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCfQB5gsCUAAQDsAACnBwQCoBvAACdQgICYiIBlIAbALQDfBgABCIQgBCIjfBgQjfBgk8AAQjVAAiqgsgEBLJAdTQiagTg2AAQgwAAgrgPQhoAqiEAAQi1AAiBhPQiBhPABhvQgBhuB/hOQAogZAqgQQgLgiAAgnQAAhbBBhBQBBhBBbAAQBZAABAA9QAUg0AqgqQAUgTAVgPQBBgtBUAAQBUAABBAtQAVAPAUATQBFBEAIBeQBIgaBWAAQCLAABjBCQBiBBAABcQgFBZhQA8QCTA+AABQQAABQiDA4QiDA4i5AAQh+AAhkgZgAanVmQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6AAhCQgBicBvhuQBuhvCdAAQCXAABtBpQAhhZBIhHQAighAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCoBwgBCdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJMAKQQltAAklhMIgCAAQnCg4ihAAIgBAAQiNAAh8gqIgCAAQkvB4mBABIgFAAQoTgBl3jlIgEgCQl1jmgBlDIAAgCQAAlDFwjlIAIgFQBvhDB7gwIABgCQghhjAAhwIAAgDQAAkMC9i+IABgBQC+i+EMAAIACAAQEFAAC7C0IABgBQA5iXB8h8IABgBQA3g4A+gqIADgCQC+iDD1AAIADAAQD0AAC+CDIADACQA9AqA4A3IACACQDHDIAbEQIABABQDQhKD8AAIADAAQGWAAEgC/IACACQEfDAABEPIAAACIgBAXIAAACQgNDqjpCuIAAABIAsASIACABQGAClAADoIAAACQAADpmACkIgCABQmACloeABIgCAAgEBroAHbQluAAklhLIgDAAQnAg4ihAAIgDAAQiNgBh8gqQkxB5mDAAIAAAAQoUAAl5jmIgBgBQl3jlgBlFIAAgBQAAlDFvjlQB4hJB8gwQgihkAAhyQAAkNC+i+QDAi/ELAAQEHAAC7C0QA5iYB8h9QA6g5A+gqQC/iED2AAQD3AAC/CDQA+ArA5A4QDJDKAaERQDRhLD+AAIACAAQGWAAEgDAQEgDBABEPIAAACIgBAZIAAAAQgMDrjqCuIAAAAIAtATIABAAQGACmABDoIAAACQgBDol/ClIgCABQmACloeAAIgBAAgAhhk8Qh9AAhkgaIgBAAQiXgTg3AAIgDAAQgvAAgpgOIgDAAQhmApiEAAIgBAAQi1AAh/hOIgBgBQiBhPABhuQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhBQBBhABagBQBaABBAA7QAVgzAqgqQATgUAVgOQBCgtBTAAQBVAABAAsQAWAQATATQBEBEAKBdQBHgZBWAAQCLAABhBBQBiBCABBbIAAAJIAAADQgFBPhOA6IAAABIAOAGIACABQCBA4AABPIAAACQAABOiBA5IgBAAQiEA4i2AAIgCAAg");
	this.shape_47.setTransform(730,43.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgZQiwBHjiAAQk1AAjaiGQjbiGAAi+QAAi7DWiFQBFgqBJgcQgVg6ABhCQAAicBuhvQBuhvCcAAQCZAABsBpQAhhZBIhIQAighAkgZQBvhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCfQB4gsCUAAQDuAACmBwQCoBvAACeQgHCXiJBmIAbALQDgBgAACHQAACIjgBgQjfBgk8AAQjVAAirgsgEBLJAdTQiagTg2AAQgwAAgrgOQhoApiEAAQi2AAiAhPQiAhOAAhvQgBhuB/hPQAogYAqgQQgMgjABgnQAAhbBBhBQBBhBBbAAQBZAABAA9QAUg0AqgqQATgTAVgPQBCgtBUAAQBUAABBAtQAVAPAUATQBFBEAIBeQBHgaBXAAQCLAABjBCQBiBBAABdQgFBZhQA7QCTA/AABQQAABPiDA5QiDA4i5AAQh9AAhlgagAanVnQkGghhdAAQhTAAhIgZQiwBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6AAhCQgBicBvhuQBuhvCdAAQCXAABtBpQAhhZBIhHQAighAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCoBwgBCdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgrgEhJLAKQQlvAAkkhMIgCAAQnCg4ihAAIgBAAQiNAAh8gqIgBAAQkwB4mBABIgFAAQoTgBl3jlIgDgCQl2jmgBlDIAAgCQAAlDFwjlIAIgFQBuhDB8gwIABgCQghhjgBhwIAAgDQABkMC9i+IABgBQC+i9EMgBIACAAQEFABC7CzIABgBQA5iXB8h8IABgBQA3g4A+gqIADgCQC+iCD0gBIAEAAQDzABC/CCIADACQA9AqA4A3IACACQDHDIAbEQIABACQDQhLD8AAIADAAQGWAAEgC/IACACQEfDAABEPIAAACIgBAXIAAACQgNDqjpCuIAAABIAsASIACABQGAClAADoIAAACQAADpmAClIgCABQl/ClofAAIgBAAgEBroAHbQluAAklhKIgDgBQnAg4ihAAIgDAAQiOAAh7grQkxB5mCAAIgBAAQoVAAl4jmIgBgBQl3jlgBlFIAAgBQAAlDFwjlQB3hJB8gwQgihkAAhxQAAkOC+i+QC/i/EMAAQEHAAC7C0QA5iYB8h9QA6g5A+gqQC/iED2AAQD3AAC/CDQA+ArA5A4QDJDKAaERQDRhKD+gBIACAAQGWABEgC/QEhDBAAEPIAAACIgBAZIAAAAQgMDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQAADomAClIgCABQmACloeAAIgBAAgAhhk8Qh9AAhkgaIgBAAQiXgSg3gBIgDAAQgvAAgqgOIgCAAQhnApiDAAIgBAAQi1AAh/hOIgBgBQiBhOAAhvQABhuB9hPQApgYAogQQgKgjAAgmQAAhcBBhAQBBhBBagBQBaABBAA7QAVgzAqgpQATgUAVgPQBCgsBTgBQBVABBAAsQAWAPATATQBEBEAKBdQBHgZBWAAQCLAABhBBQBiBCABBbIAAAJIAAADQgFBPhOA6IAAACIAOAFIACABQCBA4AABPIAAACQAABOiBA5IgBAAQiEA4i2AAIgCAAg");
	this.shape_48.setTransform(720,43.875);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhHgZQiyBGjgAAQk1AAjaiFQjciGAAi+QAAi7DWiFQBFgrBJgbQgVg7AAhCQABibBvhvQBthvCdAAQCYAABsBoQAhhYBJhIQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCgQB5gsCUAAQDsAACnBvQCoBwAACdQgHCYiIBlIAbAMQDeBgABCHQgBCIjeBgQjgBgk7AAQjVAAisgsgEBLKAdTQiagTg2AAQgxAAgqgOQhpApiEAAQi1AAiAhPQiBhOAAhwQAAhtB+hPQApgZAqgQQgMgiAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBUAABCAtQAVAPATATQBFBEAJBeQBHgaBWAAQCLAABjBCQBiBBAABdQgEBYhRA8QCUA+AABRQAABPiDA5QiDA3i5AAQh+ABhkgagAanVnQkFghheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGgBi+QAAi7DWiFQBFgqBJgcQgUg6AAhCQAAicBuhuQBuhvCdAAQCYAABtBpQAghZBJhIQAhggAkgZQBwhNCOAAQCQAABuBNQAlAZAgAgQB2B0APCfQB5gsCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDgBgAACHQAACIjgBgQjfBgk8AAQjUAAisgrgEhJLAKQQluAAklhMIgBAAQnDg4igAAIgBAAQiOAAh8gqIgBAAQkwB4mBAAIgFAAQoSAAl4jlIgDgCQl2jmgBlDIAAgCQAAlDFwjlIAIgFQBvhDB7gwIABgCQghhjAAhwIAAgDQAAkLC9i/IACAAQC+i/ELAAIADAAQEDAAC8C0IABAAQA5iYB8h8IABgBQA4g4A9gqIADgBQC/iEDzAAIAEAAQDzABC/CCIADACQA9AqA4A3IACACQDHDIAbERIABABQDQhLD8gBIADAAQGWABEgC/IADACQEeDAAAEOIAAACIAAAYIAAACQgNDqjoCuIAAABIAsASIACABQF/ClABDnIAAACQgBDpl/ClIgCACQmACloeAAIgCAAgEBroAHbQltAAkmhKIgDgBQnAg4ihgBIgDAAQiNABh7gsQkyB6mCAAIgBAAQoUAAl5jmIgBgBQl3jlAAlFIAAgCQAAlBFvjmQB3hJB9gwQgjhkAAhyQAAkNC+i+QC/i/ENAAQEGAAC7C0QA5iZB9h8QA5g5A/gqQC/iED1AAQD3AADACEQA+ArA4A4QDJDJAaESQDRhMD+AAIACAAQGXAAEfDBQEhDAAAEPIAAACIAAAYIAAABQgNDrjpCuIAtATIABAAQGACmAADoIAAACQgBDol+ClIgCACQmBCkodAAIgCAAgAhgk8Qh+gBhjgZIgCAAQiYgTg2AAIgCAAQgwAAgpgOIgCAAQhnApiEAAIgBAAQi0AAiAhPIgBgBQiAhOAAhvQAAhuB9hOQApgYApgPQgLgkAAgmQAAhcBBhBQBBhABagBQBaABBAA6QAVgyAqgqQAUgTAUgPQBCgsBUgBQBUABBAArQAXAQATATQBEBEAJBdQBHgZBWAAQCLABBhBBQBiBBABBbIAAAJIAAADQgFBPhOA6IABACIANAFIACABQCCA4AABPIAAACQgBBOiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_49.setTransform(710,44.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("EgeXAiKQkHgghdAAQhSAAhIgaQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiFQBFgrBIgbQgTg7AAhBQgBicBvhvQBuhvCdAAQCXAABtBpQAhhZBIhIQAhghAkgZQBwhMCOAAQCPAABwBMQAkAZAhAhQB0B1AQCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiIBlIAbALQDfBgAACIQAACIjfBgQjfBgk8AAQjVAAiqgsgEBLJAdTQiagTg2AAQgwAAgrgPQhoAqiEAAQi2AAiAhPQiBhPAAhvQABhuB9hOQApgZAqgQQgLgiAAgnQgBhbBBhBQBBhBBcAAQBaAABAA9QASg0ArgqQATgTAWgPQBCgtBTAAQBUAABBAtQAWAPATATQBEBEAJBeQBIgaBWAAQCLAABiBCQBiBBAABcQgDBZhQA8QCSA+AABQQAABQiDA4QiDA4i5AAQh+AAhkgZgAanVmQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6gBhCQABicBuhuQBuhvCcAAQCYAABtBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtAACnBwQCoBwAACdQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgsgEhJMAKQQltAAkmhMIgBAAQnDg4igAAIgBAAQiNAAh8gqIgCAAQkwB4mAABIgGAAQoSgBl3jlIgEgCQl2jmAAlEIAAgBQAAlDFxjlIAHgFQBvhDB7gwIABgCQghhjAAhwIAAgDQAAkMC9i+IABgBQC+i+EMAAIACAAQEEAAC8C0IABgBQA5iXB7h8IABgBQA4g4A9gqIADgCQDAiDDzAAIADAAQD1AAC+CDIADACQA9AqA4A3IACACQDHDIAbEQIABABQDPhKD9AAIADAAQGWAAEgC/IACACQEfDAABEPIAAACIgBAXIAAACQgNDqjoCuIAAABIArASIADABQF+ClABDoIAAACQgBDpl+CkIgDABQl/CloeABIgDAAgEBrnAHbQltAAklhLIgEAAQm/g4ihAAIgDAAQiOgBh7gqQkxB5mDAAIgBAAQoTAAl6jmIgBgBQl3jlAAlFIAAgBQAAlDFvjlQB4hJB8gwQgihkAAhyQAAkNC+i+QC/i/ENAAQEFAAC8C0QA5iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDPhLD+AAIADAAQGXAAEfDAQEgDBABEPIAAACIgBAZIAAAAQgMDrjqCuIAAAAIAtATIABAAQGACmABDoIAAACQgBDol/ClIgCABQmACloeAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgTg2AAIgCAAQgwAAgpgOIgCAAQhnApiEAAIgBAAQi1AAiAhOIAAgBQiAhPAAhuQAAhuB9hPQApgYApgQQgLgjAAgmQABhcBAhBQBAhABagBQBcABA+A6QAWgyApgqQAVgUAVgOQBBgtBTAAQBUAABBAsQAWAQATATQBEBEAKBdQBHgZBWAAQCKAABiBBQBjBCAABbIAAAJIAAADQgFBPhPA6IACABIANAGIACABQCBA4ABBPIAAACQgBBOiCA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_50.setTransform(700.05,45.325);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("EgeXAiKQkHgghdAAQhSAAhIgZQixBHjhAAQk0AAjbiGQjbiGAAi+QAAi7DWiFQBFgqBIgcQgUg6ABhCQgBicBvhvQBuhvCdAAQCXAABtBpQAhhZBIhIQAighAkgZQBvhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCfQB5gsCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDgBgAACHQAACIjgBgQjfBgk8AAQjUAAirgsgEBLJAdTQiagTg2AAQgxAAgqgOQhoApiEAAQi2AAiAhPQiBhOABhvQAAhuB+hPQAogYAqgQQgLgjAAgnQgBhbBBhBQBBhBBcAAQBZAABAA9QAUg0AqgqQATgTAWgPQBCgtBTAAQBUAABBAtQAWAPATATQBEBEAJBeQBIgaBWAAQCLAABiBCQBiBBABBdQgFBZhQA7QCTA/AABQQAABPiDA5QiDA4i5AAQh+AAhkgagAanVnQkGghhcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiGQBEgqBJgcQgUg6AAhCQAAicBuhuQBuhvCdAAQCYAABtBpQAghZBJhHQAhghAkgZQBwhMCPAAQCPAABvBMQAkAZAgAhQB2B0AOCeQB5gsCVAAQDtAACnBwQCnBwAACdQgICYiHBlIAbALQDeBgAACIQAACHjeBgQjgBgk7AAQjWAAirgrgEhJLAKQQluAAkmhMIAAAAQnDg4ihAAIAAAAQiOAAh8gqIgCAAQkvB4mBABIgGAAQoSgBl2jlIgFgCQl1jmgBlDIAAgCQAAlDFwjlIAIgFQBuhDB8gwIABgCQghhjAAhvIAAgEQAAkMC9i+IABgBQC+i9EMgBIACAAQEFABC7CzIABgBQA5iXB8h8IAAgBQA4g4A+gqIADgCQC+iCD0gBIADAAQD1ABC+CCIADACQA9AqA4A3IACACQDHDIAbEQIABACQDPhLD9AAIADAAQGWAAEgC/IACACQEfDAABEPIAAACIgBAXIAAACQgNDqjoCuIgBABIAsASIADABQF+ClABDoIAAACQAADpl/ClIgCABQmACloeAAIgCAAgEBroAHbQluAAklhKIgDgBQnAg4ihAAIgDAAQiOAAh7grQkxB5mDAAIgBAAQoTAAl6jmIgBgBQl3jlAAlFIAAgBQAAlDFvjlQB4hJB8gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA/ArA4A4QDJDKAbERQDPhKD/gBIACAAQGWABEgC/QEhDBABEPIAAACIgBAZIAAAAQgNDrjqCuIABAAIAtATIABAAQF/CmABDoIAAACQgBDol/ClIgCABQmACloeAAIgBAAgAhhk8Qh9AAhkgaIgBAAQiXgSg3gBIgCAAQgwAAgpgOIgDAAQhmApiEAAIgBAAQi1AAiAhOIAAgBQiBhOABhvQAAhuB9hPQApgYApgQQgKgjAAgmQgBhcBBhAQBBhBBagBQBaABA/A7QAWgzAqgpQATgUAWgPQBBgsBTgBQBUABBBAsQAWAPAUATQBEBEAJBdQBHgZBWAAQCLAABhBBQBiBCACBcIgBAIIAAADQgFBPhOA6IAAACIAOAFIACABQCBA4ABBPIAAACQgBBOiCA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_51.setTransform(690.05,46.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTAAhIgaQiwBIjhgBQk1AAjaiGQjbiFgBi+QAAi7DWiFQBGgqBIgcQgVg7ABhCQAAibBuhvQBvhvCcAAQCYAABtBoQAghYBJhIQAhghAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCgQB5gsCUAAQDtAACmBvQCoBwAACdQgICYiIBlIAbAMQDgBgAACHQAACIjgBgQjeBgk8AAQjVAAirgsgEBLJAdTQiZgTg2AAQgxAAgqgOQhpApiDAAQi2AAiBhPQiAhOAAhwQAAhtB+hPQAogZAqgPQgLgjAAgnQAAhcBBhAQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBUAABCAtQAVAPATATQBFBEAIBdQBIgZBXAAQCLAABiBCQBiBBAABcQgFBahQA7QCTA/ABBQQAABPiEA5QiDA3i5AAQh9ABhlgagAanVnQkGghhdAAQhSAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi+QAAi7DViFQBGgqBIgcQgUg6AAhCQAAicBuhvQBvhuCcAAQCYAABtBpQAhhZBIhHQAhghAkgZQBwhNCOAAQCPAABwBNQAkAZAgAhQB2B0AOCeQB6gsCUAAQDsAACoBwQCnBwAACdQgICYiIBlIAbALQDgBggBCHQABCIjgBgQjfBgk7AAQjVAAisgrgEhJLAKQQlugBklhLIgBAAQnDg4igAAIgBAAQiNAAh9grIgCABQkvB5mBAAIgFAAQoTgBl3jlIgEgCQl1jmgBlDIAAgCQAAlDFxjlIAIgFQBuhDB7gwIABgCQgghjgBhwIAAgDQABkMC9i9IABgBQC+i+EMgBIACAAQEDAAC8C0IABAAQA5iYB8h8IABgBQA4g4A9gqIADgBQC+iDD1gBIADAAQD0ABC+CCIADACQA9AqA4A3IACACQDHDIAbEQIABACQDQhLD8gBIADAAQGWABEgC/IADACQEeDAABEOIAAACIAAAYIAAACQgNDqjpCuIAAABIAsASIACABQF/ClAADoIAAABQAADpl/ClIgCABQmACmoeAAIgCAAgEBroAHbQluAAklhLIgDAAQnAg4ihgBIgDAAQiNABh8gsQkxB6mCAAIgBAAQoVAAl4jmIgBgBQl3jlgBlGIAAgBQAAlCFwjlQB3hJB8gwQghhkgBhxQAAkOC+i+QDAi/EMAAQEGAAC7C0QA6iYB8h9QA5g5A/gqQC/iED1AAQD3AAC/CEQA/ArA4A4QDKDJAaESQDQhLD+gBIACAAQGXAAEfDBQEhDAAAEPIAAACIAAAYIAAABQgNDrjpCuIAtATIABAAQF/CmABDpIAAABQAADomAClIgCABQl/CloeAAIgCAAgAhgk8Qh9AAhkgaIgBAAQiZgTg2AAIgCAAQgwAAgpgOIgCAAQhoApiDAAIgBAAQi1AAh/hOIgBgBQiAhPAAhuQAAhuB+hPQAogYApgPQgLgkAAgmQAAhcBBhBQBBhABagBQBaABBAA6QAVgyAqgqQATgTAVgPQBCgtBUAAQBTABBCArQAVAQAUATQBEBEAJBdQBIgZBVAAQCLABBiBAQBiBCABBcIgBAIIAAADQgEBPhPA6IABACIAOAFIABABQCCA4AABPIAAACQgBBPiCA3IAAAAQiDA5i3AAIgBAAg");
	this.shape_52.setTransform(680.05,46.75);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgaQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiFQBFgrBIgbQgTg7gBhBQABicBuhvQBuhvCcAAQCYAABtBpQAhhZBJhIQAhghAjgZQBwhMCPAAQCPAABvBMQAkAZAhAhQB1B1AOCfQB5gsCVAAQDtAACnBwQCnBvAACdQgICYiHBlIAaALQDgBggBCIQABCIjgBgQjfBgk7AAQjVAAisgsgEBLJAdTQiZgTg3AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiBhPAAhvQABhuB9hOQApgZAqgQQgMgiAAgnQABhbBAhBQBBhBBcAAQBaAABAA9QASg0AsgqQATgTAUgPQBCgtBUAAQBUAABBAtQAVAPAUATQBEBEAJBeQBHgaBXAAQCLAABiBCQBjBBgBBcQgDBZhQA8QCSA+AABQQAABQiCA4QiEA4i5AAQh+AAhkgZgAanVmQkGgghdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6AAhCQAAicBvhuQBuhvCcAAQCYAABtBpQAhhZBJhHQAhghAkgZQBvhMCPAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtAACnBwQCnBwABCdQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgsgEhJLAKQQluAAkmhMIgBAAQnCg4ihAAIgBAAQiNAAh8gqIgCAAQkvB4mBABIgGAAQoSgBl3jlIgEgCQl2jmAAlEIAAgBQAAlDFxjlIAIgFQBuhDB7gwIACgCQgihjgBhvIAAgEQABkMC9i+IABgBQC+i+EMAAIACAAQEEAAC8C0IABgBQA5iXB7h8IABgBQA4g4A9gqIAEgCQC+iDD0AAIADAAQD1AAC+CDIADACQA9AqA4A3IABACQDIDIAaEQIACACQDPhLD9AAIADAAQGWAAEgC/IACACQEeDAABEOIAAACIAAAYIAAACQgNDqjoCuIAAABIAsASIACABQF+ClACDnIAAACQgCDql+CkIgCABQmACloeABIgCAAgEBrnAHbQltAAkmhLIgCAAQnAg4iiAAIgCAAQiOgBh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl2jlgBlGIAAAAQAAlDFvjlQB4hJB8gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iYB8h9QA5g5A/gqQC/iED2AAQD3AAC/CDQA/ArA4A4QDJDKAaERQDQhLD/AAIACAAQGWAAEhDAQEgDBAAEPIAAACIAAAZIAAAAQgNDrjqCuIABAAIAtATIABAAQGACmAADoIAAACQAADomAClIgCABQmAClodAAIgDAAgAhhk8Qh9AAhkgaIgBAAQiYgTg3AAIgBAAQgwAAgpgOIgCAAQhoApiDAAIgBAAQi1AAiAhOIgBgBQh/hPAAhuQgBhuB+hPQApgYAogQQgKgjAAgmQAAhcBBhAQBAhBBagBQBbABA/A6QAWgyApgpQAUgVAWgOQBBgtBTAAQBVAABAAsQAWAQAUATQBDBEAJBdQBIgZBXAAQCJAABiBBQBjBCAABbIAAAJIAAADQgFBPhOA6IABACIANAFIACABQCCA4AABPIAAACQgBBOiCA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_53.setTransform(670.1,47.475);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("EgeXAiKQkHgghdAAQhSAAhIgZQixBHjgAAQk1AAjbiGQjbiGAAi+QAAi7DWiFQBFgqBIgcQgTg6gBhCQABicBuhvQBuhvCdAAQCXAABtBpQAhhZBJhIQAhghAjgZQBwhMCOAAQCPAABwBMQAkAZAhAhQB0B1APCfQB6gsCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDfBgAACHQAACIjfBgQjfBgk7AAQjVAAirgsgEBLJAdTQiagTg2AAQgwAAgrgOQhoApiEAAQi2AAiAhPQiBhOAAhvQABhuB9hPQApgYAqgQQgLgjgBgnQAAhbBBhBQBBhBBcAAQBaAABAA9QASg0AsgqQASgTAVgPQBDgtBTAAQBUAABBAtQAVAPAUATQBEBEAJBeQBIgaBWAAQCLAABiBCQBiBBAABdQgDBZhQA7QCSA/AABQQAABPiCA5QiEA4i5AAQh+AAhkgagAanVnQkGghhdAAQhTAAhHgZQiyBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6gBhCQABicBuhuQBuhvCcAAQCYAABtBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtAACnBwQCoBwAACdQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgrgEhJLAKQQluAAkmhMIgBAAQnCg4ihAAIgBAAQiNAAh8gqIgCAAQkwB4mAABIgGAAQoSgBl3jlIgEgCQl2jmAAlDIAAgCQAAlDFxjlIAIgFQBuhDB7gwIACgCQgihjAAhvIAAgEQAAkLC9i/IABgBQC+i9EMgBIACAAQEEABC8CzIABAAQA5iYB7h8IABgBQA4g3A9gqIAEgCQC+iDD0gBIADAAQD1ABC+CCIADACQA9AqA4A3IABACQDIDIAaEQIACACQDPhLD9AAIADAAQGWAAEgC/IACACQEfDAAAEPIAAACIAAAXIAAACQgNDqjoCuIAAABIAsASIACABQF+ClABDoIAAACQAADpl/ClIgCABQmACloeAAIgCAAgEBrnAHbQltAAkmhKIgCgBQnBg4igAAIgDAAQiOAAh7grQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl3jlAAlFIAAgBQAAlDFvjlQB4hJB8gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iYB9h9QA4g5A/gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDPhKD/gBIACAAQGWABEhC/QEgDBAAEQIAAACIAAAYIAAAAQgNDrjqCuIABAAIAtATIABAAQF/CmABDpIAAACQgBDnl/ClIgCABQmACloeAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgSg3gBIgBAAQgwAAgpgOIgCAAQhnApiEAAIgBAAQi1AAiAhOIgBgBQh/hOAAhvQAAhuB9hPQApgYApgQQgLgjAAgmQABhcBAhAQBAhBBagBQBbABA/A7QAWgzApgpQAVgUAVgPQBBgsBTgBQBVABBAAsQAWAPATATQBEBEAKBdQBHgZBXAAQCKAABhBBQBjBDAABbIAAAIIAAADQgFBPhOA6IABACIANAFIACABQCBA4ABBPIAAACQgBBOiCA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_54.setTransform(660.1,48.175);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSAAhJgaQiwBHjhAAQk1AAjaiGQjbiGAAi9QAAi7DViFQBGgrBHgbQgTg7AAhBQAAicBuhvQBvhvCcAAQCYAABtBpQAhhZBIhIQAhghAjgZQBwhMCPAAQCPAABvBMQAlAZAgAhQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACdQgICYiIBlIAbALQDgBggBCIQABCIjgBgQjfBgk7AAQjVAAirgsgEBLJAdTQiZgTg3AAQgwAAgqgPQhpAqiDAAQi2AAiBhPQiAhPAAhvQAAhuB+hOQApgZApgQQgLgiAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABBAtQAWAPAUATQBEBEAIBeQBIgaBXAAQCKAABiBCQBjBBAABcQgFBZhPA8QCSA+AABQQAABQiDA4QiCA4i6AAQh9AAhlgZgAanVmQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiGQBEgqBJgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABtBpQAghZBJhHQAhghAkgZQBwhMCPAAQCOAABwBMQAkAZAhAhQB0B0APCeQB5gsCUAAQDuAACmBwQCoBwAACdQgHCYiIBlIAbALQDeBgAACIQAACHjeBgQjgBgk7AAQjWAAirgsgEhJLAKQQluAAklhMIgBAAQnDg4ihAAIAAAAQiOAAh7grIgDABQkvB4mBABIgGAAQoSgBl2jlIgFgCQl1jmgBlEIAAgBQAAlDFxjlIAHgFQBvhDB7gwIACgCQgihjAAhwIAAgDQAAkMC9i+IABgBQC+i+EMAAIACAAQEEAAC8CzIABAAQA5iXB7h8IABgBQA4g4A+gqIADgCQC+iDD0AAIADAAQD1AAC+CDIADACQA9AqA4A3IACACQDHDIAbEQIABABQDPhKD9AAIADAAQGWAAEgC/IACACQEfDAABEOIAAACIAAAYIAAACQgODqjoCuIAAABIArASIADABQF+ClABDnIAAACQAADpl/ClIgCABQmACloeABIgCAAgEBroAHbQluAAklhLIgDAAQnAg4ihAAIgDAAQiNgBh8gqQkwB5mEAAIgBAAQoTAAl6jmIgBgBQl2jmgBlFIAAAAQAAlDFvjlQB4hJB8gwQgihkAAhyQAAkNC+i+QC/i/ENAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED2AAQD2AAC/CDQA/ArA4A4QDJDKAbERQDPhLD/AAIACAAQGXAAEfDAQEhDBABEPIAAACIgBAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQgBDol/ClIgCABQmACloeAAIgBAAgAhhk8Qh9AAhkgaIAAAAQiYgTg3AAIgCAAQgwAAgpgOIgCAAQhoApiCAAIgCAAQi0AAiBhPIgBgBQh/hOAAhuQAAhuB+hPQAogYApgQQgKgjAAgmQAAhcBAhBQBBhABZgBQBbABA/A6QAWgyApgqQAVgUAVgOQBBgtBTAAQBUAABCAsQAVAQAUATQBEBEAJBdQBHgZBWAAQCLAABiBBQBiBCABBbIgBAJIAAADQgFBPhOA6IABABIANAGIACABQCCA4AABPIAAACQgBBOiCA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_55.setTransform(650.1,48.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgZQixBHjgAAQk2AAjaiGQjbiGAAi+QAAi7DWiFQBFgqBIgcQgUg6AAhCQAAicBvhvQBuhvCcAAQCYAABtBpQAhhZBJhIQAgghAkgZQBwhMCPAAQCOAABwBMQAkAZAhAhQB1B1AOCfQB5gsCUAAQDuAACmBwQCoBvAACeQgHCXiIBmIAaALQDgBgAACHQAACIjgBgQjfBgk7AAQjWAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgOQhoApiEAAQi2AAiAhPQiBhOAAhvQAAhuB+hPQApgYAqgQQgMgjAAgnQAAhbBChBQBAhBBcAAQBZAABBA9QASg0AsgqQASgTAVgPQBCgtBUAAQBUAABBAtQAWAPATATQBEBEAJBeQBHgaBXAAQCLAABjBCQBhBBAABdQgEBZhQA7QCTA/AABQQAABPiCA5QiEA4i5AAQh9AAhlgagAanVnQkGghhdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6ABhCQAAicBuhuQBuhvCcAAQCZAABsBpQAhhZBIhHQAighAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B0APCeQB5gsCUAAQDtAACnBwQCnBwAACdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgrgEhJLAKQQluAAklhMIgCAAQnCg4ihAAIgBAAQiNAAh8gqIgCAAQkvB4mCABIgFAAQoTgBl2jlIgEgCQl2jmAAlEIAAgBQAAlDFwjlIAJgFQBthDB8gwIABgCQghhjgBhvIAAgEQABkMC9i+IABgBQC+i9EMgBIACAAQEEAAC7C0IABgBQA6iXB7h8IABgBQA4g4A+gqIADgCQC+iCD0gBIADAAQD0AAC/CDIACACQA+AqA3A3IACACQDHDIAbEQIACACQDPhLD9AAIADAAQGWAAEfC/IADACQEfDAAAEOIAAACIAAAYIAAACQgNDqjoCuIAAABIAsASIABABQF/ClABDnIAAACQgBDql+CkIgCABQmACloeABIgCAAgEBroAHbQluAAkmhLIgDAAQm/g4iiAAIgCAAQiOgBh7gqQkxB5mCAAIgBAAQoVAAl4jmIgBgBQl4jlAAlGIAAAAQAAlDFwjlQB2hJB9gwQgihkAAhxQAAkOC+i+QC/i/EMAAQEHAAC7C0QA5iYB8h9QA5g5A/gqQC/iED2AAQD3AAC/CDQA/ArA4A4QDJDKAaERQDRhLD+AAIACAAQGWABEhC/QEgDBAAEPIAAACIgBAZIAAAAQgMDrjpCuIAAAAIAtATIABAAQGACmAADoIAAACQgBDol/ClIgCABQmAClodAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgTg3AAIgCAAQgvAAgqgOIgCAAQhnApiDAAIgBAAQi1AAiAhOIgBgBQiAhPAAhuQAAhuB+hPQApgYAogQQgKgjAAgmQAAhcBAhAQBBhBBagBQBbABA/A6QAWgyApgpQAUgUAVgPQBCgsBTgBQBUAABBAsQAWAQAUATQBEBEAIBdQBIgZBXAAQCJAABiBBQBjBCAABcIAAAIIAAADQgFBPhOA6IAAACIAOAFIACABQCCA4gBBPIAAACQAABOiCA5IgBAAQiDA4i2AAIgCAAg");
	this.shape_56.setTransform(640.15,49.625);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhIgaQiwBIjhgBQk2AAjaiGQjbiFAAi+QAAi7DWiFQBFgqBIgcQgTg7gBhCQABibBuhvQBuhvCcAAQCZAABsBpQAhhZBJhIQAhghAjgZQBwhMCPAAQCOAABwBMQAkAZAhAhQB1B0AOCgQB5gsCUAAQDuAACmBvQCoBwAACdQgHCYiIBlIAbAMQDeBgAACHQAACIjeBgQjgBgk7AAQjVAAisgsgEBLJAdTQiZgTg3AAQgxAAgqgOQhoApiEAAQi1AAiBhPQiAhOgBhwQAAhtB+hPQApgZAqgPQgMgjAAgnQABhcBAhAQBBhBBcAAQBaAABAA9QASg0AsgqQATgTAUgPQBCgtBUAAQBUAABBAtQAVAPAUATQBFBEAIBdQBHgZBXAAQCLAABiBCQBjBBgBBcQgDBahRA7QCTA/AABQQAABPiCA5QiEA3i5AAQh+ABhkgagAanVnQkGghhcAAQhTAAhIgZQixBHjhAAQk1AAjaiGQjciGAAi+QAAi7DWiFQBGgqBIgcQgUg6AAhCQAAicBvhvQBthuCdAAQCYAABsBpQAhhZBJhHQAhghAkgZQBwhNCOAAQCQAABuBNQAlAZAhAhQB0B0AQCeQB4gsCUAAQDuAACmBwQCoBwAACdQgHCYiJBlIAbALQDgBgAACHQAACIjgBgQjfBgk8AAQjUAAisgrgEhJLAKQQlugBklhLIgCAAQnCg4ihAAIgBAAQiNAAh7grIgCABQkwB5mCAAIgEAAQoTgBl3jmIgEgCQl1jmgBlDIAAgBQAAlDFxjlIAIgFQBthDB8gwIACgCQgihjAAhwIAAgDQAAkMC9i9IABgBQC+i+EMgBIACAAQEEAAC8C0IABAAQA5iYB7h8IABgBQA4g4A9gqIAEgBQC/iDDzgBIADAAQD0ABC/CCIADACQA9AqA4A3IACACQDHDIAaEQIACACQDPhLD9gBIADAAQGWABEfC/IADACQEfC/AAEPIAAACIAAAYIAAACQgMDqjpCuIAAABIAsASIABABQF/ClACDoIAAABQgBDpl/ClIgCABQmACmoeAAIgCAAgEBroAHbQluAAkmhLIgCAAQnAg4iigBIgCAAQiOABh7gsQkxB6mCAAIgBAAQoVAAl4jmIgCgBQl2jlAAlGIAAgBQgBlCFwjlQB3hJB8gwQgihkAAhxQAAkOC+i+QDAi/EMAAQEFAAC8C0QA5iYB8h9QA5g5A/gqQDAiED1AAQD3AADACEQA+ArA5A4QDJDJAZESQDQhLD/gBIADAAQGWAAEgDBQEgDAABEPIAAACIgBAYIAAABQgNDrjqCuIABAAIAtATIABAAQGACmAADpIAAABQAADomAClIgCABQl/CloeAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgTg3AAIgCAAQgvAAgqgOIgBAAQhoApiDAAIgBAAQi1AAiAhPIgBAAQh/hPgBhuQAAhuB+hPQApgYAogPQgKgkABgmQAAhcBAhBQBBhABZgBQBbAAA/A7QAWgyApgqQAUgTAVgPQBCgtBTAAQBUABBBArQAWAQAUATQBEBEAJBdQBHgZBXAAQCKABBhBAQBjBCAABcIAAAIIAAADQgFBPhOA6IABACIANAFIADABQCAA4ABBPIAAACQgBBPiBA3IgCAAQiCA5i4AAIgBAAg");
	this.shape_57.setTransform(630.15,50.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhSAAhJgaQixBHjgAAQk1AAjbiGQjaiGAAi9QAAi7DWiFQBFgrBHgbQgTg7gBhBQAAicBvhvQBvhvCcAAQCYAABsBpQAhhZBJhIQAhghAjgZQBxhMCOAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDtAACnBwQCnBvAACdQgICYiHBlIAbALQDeBgAACIQAACIjeBgQjfBgk8AAQjVAAisgsgEBLJAdTQiZgTg3AAQgwAAgrgPQhoAqiEAAQi1AAiAhPQiBhPAAhvQAAhuB+hOQAogZAqgQQgLgiAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABBAtQAWAPAUATQBEBEAIBeQBIgaBWAAQCLAABiBCQBjBBAABcQgFBZhPA8QCSA+AABQQAABQiCA4QiEA4i5AAQh9AAhlgZgAanVmQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi7DXiGQBFgqBIgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAihZBIhHQAhghAkgZQBwhMCPAAQCOAABvBMQAlAZAhAhQB0B0APCeQB5gsCUAAQDuAACmBwQCoBwAACdQgHCYiIBlIAbALQDeBgABCIQgBCHjeBgQjgBgk8AAQjVAAirgsgEhJLAKQQluAAklhMIgCAAQnCg4ihAAIgBAAQiNAAh7grIgCABQkxB4mAABIgGAAQoSgBl2jlIgFgCQl1jngBlDIAAgBQAAlDFxjlIAIgFQBthDB8gwIACgCQgihjAAhvIAAgEQABkMC8i+IABgBQC+i+EMAAIACAAQEFAAC7CzIABAAQA5iXB7h8IABgBQA4g4A+gqIADgCQC+iDD0AAIADAAQD1AAC+CDIADACQA9ApA4A4IACACQDHDIAbEQIABACQDPhLD9AAIADAAQGWAAEgC/IACACQEfDAAAEOIAAACIAAAYIAAACQgMDqjpCuIAAABIAsASIACABQF+ClACDnIAAACQgBDpl/ClIgCABQmACloeABIgCAAgEBroAHbQluAAklhLIgDAAQnAg4ihAAIgDAAQiNgBh8gqQkxB5mCAAIgCAAQoUAAl5jmIgBgBQl2jmAAlFIAAAAQAAlDFujlQB4hJB9gwQgjhkABhxQgBkOC+i+QDAi/EMAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED2AAQD2AADACDQA+ArA5A4QDJDKAZERQDRhLD+AAIADAAQGWAAEgDAQEgDBABEPIAAACIgBAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQF/CmABDoIAAACQgBDol/ClIgCABQmACloeAAIgBAAgAhhk8Qh8AAhlgaIgBAAQiXgTg4AAIgBAAQgwAAgpgOIgCAAQhoApiCAAIgBAAQi2AAiAhPIgBgBQh/hOAAhuQAAhuB+hPQAogYApgQQgLgjABgmQAAhcBAhAQBBhBBZgBQBcABA+A6QAWgyApgpQAUgVAWgOQBBgtBTAAQBVAABBAsQAWAQATATQBEBEAJBdQBHgZBXAAQCKAABiBBQBiBCAABbIAAAJIAAADQgFBPhOA6IABACIANAFIADABQCAA4ABBPIAAACQgBBOiCA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_58.setTransform(620.15,51.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhIgZQixBHjhAAQk1AAjaiGQjbiGAAi+QAAi7DWiFQBFgqBIgcQgUg6AAhCQAAicBvhvQBuhvCcAAQCZAABsBpQAhhZBIhIQAighAjgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCfQB5gsCTAAQDuAACmBwQCoBvAACeQgHCXiIBmIAaALQDgBgAACHQAACIjgBgQjfBgk8AAQjUAAisgsgEBLJAdTQiZgTg3AAQgwAAgrgOQhoApiEAAQi2AAiAhPQiAhOAAhvQgBhuB/hPQAogYAqgQQgMgjABgnQAAhbBBhBQBBhBBbAAQBZAABAA9QAUg0AqgqQATgTAWgPQBBgtBUAAQBUAABBAtQAVAPAUATQBFBEAIBeQBHgaBXAAQCLAABjBCQBiBBAABdQgFBZhQA7QCTA/AABQQAABPiDA5QiDA4i5AAQh9AAhlgagAanVnQkGghhdAAQhTAAhIgZQiwBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgUg6AAhCQgBicBvhuQBuhvCdAAQCXAABtBpQAhhZBIhHQAighAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCoBwgBCdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgrgEhJLAKQQluAAklhMIgCAAQnCg4ihAAIgBAAQiNAAh8gqIgCAAQkvB4mCABIgFAAQoSgBl3jlIgEgCQl1jmgBlEIAAgBQAAlDFwjlIAIgFQBuhDB8gwIABgCQghhigBhwIAAgEQABkLC9i/IABgBQC+i9EMgBIACAAQEEAAC7C0IACAAQA5iYB7h8IABgBQA4g3A+gqIACgCQC/iDD0gBIADAAQD0AAC/CDIACACQA+AqA3A3IADACQDGDIAcEQIABACQDPhLD9AAIACAAQGWAAEgC/IADACQEeDAABEOIAAACIAAAYIAAACQgNDqjoCuIgBABIAsASIACABQGAClAADnIAAACQgBDql+CkIgCABQmACloeABIgCAAgEBroAHbQluAAklhLIgEAAQnAg4ihAAIgDAAQiNgBh7gqQkxB5mDAAIAAAAQoVAAl4jmIgBgBQl3jlgBlGIAAAAQAAlDFwjlQB3hJB8gwQgihkAAhxQAAkOC+i+QC/i/EMAAQEHAAC7C0QA5iYB8h9QA6g5A+gqQC/iED2AAQD3AAC/CDQA+ArA5A4QDJDKAaERQDQhLD/AAIACAAQGXABEfC/QEhDBAAEQIAAACIgBAYIAAAAQgMDrjpCuIAAAAIAtATIABAAQF/CmABDpIAAACQgBDnl/ClIgCABQmAClodAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgTg2AAIgDAAQgvAAgqgOIgCAAQhnApiDAAIgBAAQi1AAiAhOIgBgBQh/hPgBhuQABhuB9hPQAogYApgQQgKgjAAgmQABhcA/hAQBBhBBagBQBbABA/A6QAWgyApgpQAVgUAUgPQBBgsBUgBQBUAABBAsQAWAQATATQBEBEAKBdQBHgZBWAAQCKAABiBBQBiBDABBbIAAAIIAAADQgFBPhPA6IACACIANAFIACABQCBA4AABPIAAACQAABOiCA5IgBAAQiCA4i3AAIgCAAg");
	this.shape_59.setTransform(610.2,51.775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhIgaQiwBIjigBQk1AAjaiGQjbiGAAi9QAAi7DWiFQBFgqBJgcQgVg7AAhCQAAibBvhvQBuhvCcAAQCZAABsBpQAhhZBJhIQAgghAlgZQBvhMCPAAQCOAABvBMQAlAZAhAhQB0B0APCgQB5gsCUAAQDuAACmBvQCoBwAACdQgHCYiIBlIAbALQDeBhABCHQgBCIjeBgQjgBgk8AAQjVAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiAhPAAhvQgBhtB/hPQAogZAqgPQgMgjAAgnQAAhbBChBQBAhBBcAAQBZAABAA9QATg0AsgqQASgUAVgOQBCgtBUAAQBUAABBAtQAWAOATAUQBEBEAJBdQBHgZBXAAQCLAABjBCQBiBBAABcQgFBahQA7QCTA/AABQQAABPiDA5QiDA3i5ABQh9AAhlgagAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGgBi+QAAi7DWiFQBFgqBJgcQgUg6AAhCQAAicBuhvQBuhuCdAAQCYAABtBpQAghZBJhHQAhghAkgZQBwhNCOABQCQgBBuBNQAlAZAgAhQB2BzAPCfQB5gsCUAAQDsAACoBwQCnBwAACdQgICYiIBlIAbALQDgBggBCIQABCHjgBgQjfBgk8AAQjUAAisgsgEhJLAKQQlugBklhLIgBAAQnDg4igAAIgBAAQiOAAh8grIgCABQkvB5mCAAIgFAAQoTgBl2jmIgEgCQl1jlgBlEIAAgBQAAlDFwjlIAIgFQBuhDB8gwIABgCQghhiAAhwIAAgEQAAkMC9i9IABgBQC+i+EMgBIACAAQEEAAC8CzIABAAQA5iXB8h8IABgBQA3g4A+gpIACgCQC/iDD0gBIADAAQD0AAC/CDIACACQA+ApA3A4IACACQDIDIAbEQIABABQDPhKD9gBIACAAQGXABEfC/IADACQEeC/ABEPIAAACIAAAYIAAACQgMDqjpCuIgBABIAtASIABABQGAClABDoIAAABQgBDpl/ClIgCABQmACmoeAAIgCAAgEBroAHbQluAAkmhLIgDAAQnAg4ihgBIgDAAQiMAAh8grQkxB6mCAAIgBAAQoVAAl4jmIgBgBQl4jmAAlFIAAgBQABlCFvjlQB3hJB8gwQgihkAAhxQAAkOC+i+QC/i/EMAAQEHAAC7C0QA5iYB8h9QA5g5A/gqQC/iED2AAQD3AADACEQA+ArA4A4QDJDKAaEQQDRhKD+gBIADAAQGWABEfC/QEhDCAAEOIAAACIAAAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQGACmAADpIAAABQAADomAClIgCABQmAClodAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgSg3gBIgCAAQgvAAgqgOIgCAAQhnApiDAAIgBAAQi1AAh/hOIgBgBQiBhPAAhuQAAhuB+hPQApgYAogQQgJgjgBgmQAAhcBBhAQBAhBBagBQBbAAA/A7QAWgyAqgqQAUgTAUgPQBCgtBTAAQBUABBBArQAWAQAUATQBEBEAJBeQBHgaBWAAQCLABBhBAQBjBCAABcIAAAJIAAACQgFBPhPA6IACABIAOAGIACABQCAA4ABBPIAAACQgBBPiBA3IgBAAQiEA4i2ABIgCAAg");
	this.shape_60.setTransform(600.2,52.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhHgaQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi7DXiFQBEgrBJgbQgVg7AAhBQAAicBwhvQBthvCdAAQCYAABsBpQAihZBIhIQAhghAkgZQBwhMCOAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDsAACnBwQCoBvAACdQgHCYiIBlIAbALQDeBgABCIQgBCIjeBgQjfBgk8AAQjVAAisgsgEBLKAdTQiagTg3AAQgwAAgrgPQhnAqiFAAQi1AAiAhPQiBhPAAhvQAAhuB+hOQApgZAqgQQgMgiAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABCAtQAVAPATATQBFBEAJBeQBHgaBWAAQCLAABiBCQBjBBAABcQgEBZhRA8QCTA+AABQQAABQiCA4QiEA4i4AAQh+AAhkgZgAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjciGAAi9QAAi7DWiGQBFgqBJgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB1B0APCeQB5gsCUAAQDsAACnBwQCoBwAACdQgICYiIBlIAbALQDgBgAACIQAACHjgBgQjfBgk8AAQjVAAirgsgEhJLAKQQluAAklhMIgCAAQnCg4igAAIgCAAQiNAAh8grIgBABQkxB4mBABIgEAAQoTgBl3jlIgEgCQl1jngBlDIAAgBQAAlDFxjlIAIgFQBuhDB7gwIABgCQgghjgBhvIAAgEQABkMC8i+IABgBQC+i+EMAAIACAAQEEAAC8CzIABAAQA5iXB7h8IACgBQA3g4A+gqIADgCQC/iDDzAAIADAAQD0AAC/CDIADACQA9ApA4A4IACACQDHDIAbEQIABACQDPhLD9AAIADAAQGWAAEfC/IADACQEfDAAAEOIAAACIAAAYIAAACQgNDqjoCuIgBABIAtASIABABQF/ClACDnIAAACQgBDpl/ClIgCABQmACloeABIgCAAgEBroAHbQluAAkmhLIgCAAQnBg4ihAAIgDAAQiMgBh7gqQkyB5mCAAIgBAAQoVAAl4jmIgBgBQl3jmAAlFIAAAAQgBlDFwjlQB3hJB9gwQgjhkAAhxQAAkOC+i+QDAi/EMAAQEGAAC7C0QA6iYB8h9QA5g5A/gqQC/iED1AAQD3AADACDQA+ArA4A4QDJDKAaERQDRhLD+AAIADAAQGWAAEfDAQEhDBAAEPIAAACIAAAZIAAAAQgNDrjpCuIAAAAIAtATIABAAQGACmAADoIAAACQAADomAClIgCABQl/CloeAAIgCAAgAhhk8Qh8AAhlgaIgBAAQiYgTg3AAIgCAAQgvAAgqgOIgCAAQhnApiCAAIgBAAQi2AAh/hPIgCgBQh/hOAAhuQAAhuB9hPQApgYAogQQgKgjAAgmQAAhcBBhAQBBhBBZgBQBbABA/A6QAWgyAqgpQAUgVAUgOQBCgtBUAAQBTAABBAsQAXAQATATQBEBEAJBdQBHgZBXAAQCKAABhBBQBjBCAABcIAAAIIAAADQgFBPhOA6IABACIAOAFIACABQCAA4ABBPIAAACQgBBOiBA5IgBAAQiDA4i3AAIgCAAg");
	this.shape_61.setTransform(590.2,53.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgZQixBHjhAAQk0AAjbiGQjbiGAAi+QAAi7DWiFQBFgqBIgcQgUg6AAhCQAAicBvhvQBuhvCdAAQCXAABtBpQAhhZBIhIQAighAjgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCfQB5gsCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDfBgAACHQAACIjfBgQjfBgk8AAQjUAAisgsgEBLJAdTQiagTg2AAQgxAAgqgOQhoApiEAAQi1AAiBhPQiBhOABhvQAAhuB+hPQAogYAqgQQgLgjAAgnQgBhbBChBQBBhBBbAAQBaAAA/A9QAUg0AqgqQAUgTAVgPQBCgtBTAAQBUAABBAtQAVAPAUATQBFBEAIBeQBIgaBWAAQCLAABjBCQBhBBABBdQgFBZhPA7QCSA/AABQQAABPiDA5QiDA4i5AAQh+AAhkgagAanVnQkGghhdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBIgcQgTg6gBhCQABicBuhuQBuhvCdAAQCXAABtBpQAhhZBJhHQAhghAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B0APCeQB5gsCUAAQDtAACnBwQCoBwgBCdQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgrgEhJLAKQQluAAkmhMIgBAAQnCg4ihAAIgBAAQiNAAh8gqIgCAAQkwB4mBABIgFAAQoTgBl2jlIgEgCQl2jmAAlEIAAgBQAAlDFwjlIAIgFQBuhDB7gwIACgCQghhiAAhwIAAgEQAAkLC9i/IABgBQC+i9EMgBIACAAQEEAAC8C0IABAAQA5iYB7h8IABgBQA4g3A9gqIADgCQC/iDD0gBIADAAQD0AAC+CDIAEACQA8AqA5A3IACACQDHDIAbEQIAAACQDPhLD9AAIADAAQGXAAEgC/IACACQEeDAABEOIAAACIAAAYIAAACQgNDqjoCuIgBABIAsASIACABQF/ClABDnIAAACQgBDql+CkIgCABQmACloeABIgCAAgEBroAHbQlvAAkkhLIgEAAQnAg4igAAIgEAAQiMgBh8gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl3jlAAlGIAAAAQAAlDFvjlQB3hJB9gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iYB9h9QA5g5A+gqQDAiED1AAQD3AAC/CDQA+ArA5A4QDJDKAbERQDQhLD+AAIACAAQGXABEfC/QEhDBAAEQIAAACIgBAYIAAAAQgMDrjqCuIABAAIAtATIABAAQF/CmABDpIAAACQgBDnl/ClIgCABQmACloeAAIgBAAgAhhk8Qh9AAhkgaIgBAAQiYgTg2AAIgCAAQgwAAgpgOIgDAAQhnApiDAAIgBAAQi1AAiAhOIgBgBQh/hPAAhuQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhAQBAhBBagBQBbABA/A6QAVgyAqgpQAUgUAWgPQBAgsBUgBQBUAABBAsQAWAQATATQBEBEAKBdQBHgZBWAAQCLAABhBBQBiBDABBbIAAAIIAAADQgFBPhPA6IACACIANAFIACABQCBA4ABBPIAAACQgCBOiBA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_62.setTransform(580.25,53.925);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("EgeXAiKQkHgghdAAQhSAAhIgaQixBHjhAAQk1AAjaiGQjbiGAAi9QAAi7DWiFQBFgrBJgbQgVg6ABhDQAAibBuhwQBuhuCdAAQCYAABsBpQAhhZBIhIQAighAkgZQBvhMCOAAQCQAABuBMQAlAZAhAhQB1B1APCfQB5gsCUAAQDsAACnBvQCoBwAACeQgICXiIBlIAbALQDgBgAACIQAACIjgBgQjfBgk8AAQjVAAiqgsgEBLJAdTQiagTg2AAQgwAAgrgPQhoAqiEAAQi1AAiBhPQiBhPABhvQgBhuB/hOQAogYAqgQQgLgjAAgnQAAhcBBhAQBBhBBbAAQBaAAA/A9QAUg0AqgqQAUgUAVgOQBCgtBTAAQBUAABBAtQAVAOAUAUQBFBEAIBdQBIgZBWAAQCLAABjBCQBhBBABBcQgFBahQA7QCTA/AABQQAABPiDA5QiDA4i5AAQh+gBhkgZgAanVmQkGgghdAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGAAi9QAAi7DViGQBGgqBIgcQgUg6AAhCQAAicBuhvQBvhuCcAAQCYAABtBpQAhhZBIhHQAhghAkgZQBwhNCOABQCPgBBwBNQAkAZAgAhQB2BzAPCfQB5gsCUAAQDsAACoBwQCnBwAACdQgICXiIBmIAbALQDfBgAACIQAACHjfBgQjfBgk7AAQjVAAisgsgEhJLAKQQlugBklhLIgBAAQnDg4igAAIgBAAQiOAAh8grIgCABQkwB5mAAAIgGAAQoSgBl3jmIgEgBQl1jmgBlEIAAgBQAAlDFwjlIAIgFQBvhDB7gwIABgCQghhiAAhwIAAgDQAAkMC9i+IABgBQC+i/EMAAIACAAQEEABC8CyIABAAQA5iXB8h8IABgBQA3g3A+gqIACgCQC/iEDzAAIAEAAQD0AAC+CDIADACQA+ApA3A4IADACQDGDHAcERIABABQDOhKD9gBIADAAQGWABEgC/IADACQEeC/ACEQIAAABIgBAYIAAACQgNDqjoCuIgBABIAsASIACABQGAClAADoIAAACQAADol/ClIgCABQmACloeABIgCAAgEBroAHbQluAAklhLIgEAAQnAg4igAAIgEAAQiMgBh8grQkxB6mDAAIAAAAQoUAAl5jmIgBgBQl4jmAAlFIAAgBQABlCFujkQB4hKB8gwQgihkAAhxQAAkOC+i+QDAi/ELAAQEHAAC7C0QA5iYB8h9QA6g5A+gqQC/iED2AAQD3AAC/CEQA/AqA4A5QDKDKAZEQQDQhLD/AAIACAAQGXAAEfDAQEhDCAAEPIAAABIAAAZIAAABQgNDqjqCuIABAAIAtATIABAAQF/CmABDpIAAACQgBDnl/ClIgCABQmACloeAAIgBAAgAhhk9Qh9AAhkgZIgBAAQiYgSg2gBIgDAAQgvAAgpgOIgDABQhmAoiEAAIgBAAQi1AAh/hOIgBgBQiBhOABhvQAAhuB9hPQApgYApgQQgLgjAAgmQAAhcBBhAQBBhBBZgBQBbAAA/A7QAWgyAqgpQATgVAVgOQBCgtBTAAQBVABBAArQAWAQAUATQBEBEAJBeQBHgaBWAAQCLAABiBBQBiBCABBcIgBAJIAAACQgFBPhPA6IACABIAOAGIABABQCCA4AABPIAAACQgBBPiBA3IgBAAQiEA4i2AAIgCAAg");
	this.shape_63.setTransform(570.25,54.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhHgaQiyBHjgAAQk1AAjaiGQjciGAAi9QAAi7DWiFQBFgrBJgbQgVg7ABhBQAAicBvhvQBthvCdAAQCYAABsBpQAhhZBJhIQAhghAkgZQBvhMCPAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDsAACnBwQCoBvAACdQgHCYiJBlIAcALQDfBgAACIQAACIjfBgQjgBgk7AAQjVAAisgsgEBLKAdTQiagTg2AAQgxAAgqgPQhpAqiEAAQi1AAiAhPQiBhPAAhvQAAhuB+hOQApgZAqgQQgMgiAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBUAABCAtQAVAPATATQBFBEAJBeQBHgaBWAAQCMAABiBCQBiBBAABcQgFBZhQA8QCUA+AABQQAABQiEA4QiDA4i5AAQh9AAhkgZgAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGAAi9QgBi7DWiGQBFgqBJgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABtBpQAghZBJhHQAhghAkgZQBwhMCOAAQCPAABwBMQAkAZAgAhQB2B0APCeQB5gsCUAAQDsAACoBwQCnBwAACdQgICYiIBlIAbALQDgBggBCIQABCHjgBgQjfBgk8AAQjUAAisgsgEhJLAKQQltAAkmhMIgBAAQnDg4igAAIgBAAQiOAAh8grIgCABQkwB4mBABIgFAAQoSgBl3jlIgEgCQl1jngBlDIAAgBQAAlDFxjlIAIgFQBthDB8gwIACgCQgihiAAhwIAAgEQAAkLC9i/IABgBQC+i+EMAAIACAAQEFAAC7CzIABABQA5iYB8h8IABgBQA3g3A+gqIACgCQC/iED0AAIADAAQD0AAC+CDIADACQA+ApA4A4IACACQDHDHAbERIABACQDPhLD9AAIACAAQGWAAEgC/IADACQEfDAABEOIAAACIAAAYIAAACQgNDqjpCuIgBABIAsASIACABQGAClAADnIAAACQAADpl/ClIgCABQmACloeABIgCAAgEBroAHbQluAAkmhLIgDAAQnAg4igAAIgEAAQiMgBh7gqQkyB5mCAAIgBAAQoVAAl4jmIgBgBQl3jmgBlFIAAAAQABlDFvjlQB3hJB9gwQgjhkAAhxQABkOC9i+QC/i/ENAAQEGAAC7C0QA6iYB8h9QA5g5A/gqQC/iED1AAQD3AAC/CDQA/ArA4A4QDJDKAaERQDRhLD/AAIABAAQGXAAEgDAQEgDBAAEQIAAACIAAAYIAAAAQgNDrjpCuIABAAIAtATIAAAAQGACmAADpIAAACQAADnmAClIgCABQmACloeAAIgBAAgAhgk8Qh+AAhjgaIgBAAQiZgTg2AAIgDAAQgvAAgqgOIgCAAQhmApiEAAIgBAAQi1AAh/hPIgBgBQiAhOAAhuQAAhuB9hPQApgYAogQQgJgjgBgmQAAhcBBhAQBBhBBZgBQBbABA/A6QAWgyAqgpQATgVAVgOQBCgtBUAAQBUAABAAsQAWAQAUATQBEBEAJBdQBHgZBXAAQCKAABhBBQBjBDAABbIAAAIIAAADQgFBPhOA6IABACIAOAFIABABQCCA4AABPIAAACQgBBOiBA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_64.setTransform(560.25,55.375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghdAAQhSAAhIgaQixBIjggBQk1AAjbiGQjbiGAAi9QAAi7DWiFQBFgqBIgcQgUg7AAhCQAAibBvhvQBuhvCdAAQCXAABtBpQAhhZBJhIQAgghAkgZQBwhMCOAAQCPAABwBMQAkAZAhAhQB1B0AOCgQB6gsCUAAQDsAACoBvQCnBwAACdQgHCYiJBlIAbALQDfBhAACHQAACIjfBgQjfBgk7AAQjVAAisgsgEBLJAdTQiagTg2AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiBhPAAhvQABhtB9hPQApgZAqgPQgLgjgBgnQAAhbBBhBQBBhBBcAAQBaAABAA9QASg0AsgqQASgUAVgOQBDgtBTAAQBUAABBAtQAVAOAUAUQBEBEAJBdQBHgZBXAAQCLAABiBCQBiBBAABcQgDBahQA7QCSA/AABQQAABPiDA5QiDA3i5AAQh9ABhlgagAanVmQkGgghdAAQhTAAhHgZQiyBHjgAAQk1AAjbiGQjbiGAAi+QAAi7DWiFQBFgqBIgcQgUg6AAhCQABicBuhvQBuhuCcAAQCYAABtBpQAhhZBJhHQAhghAkgZQBwhNCOABQCPgBBvBNQAkAZAiAhQB0BzAPCfQB5gsCUAAQDtAACnBwQCoBwAACdQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgsgEhJLAKQQlugBkmhLIgBAAQnCg4ihAAIgBAAQiOAAh7grIgCABQkwB5mBAAIgGAAQoSgBl2jmIgFgBQl0jmgBlEIAAgBQAAlDFxjlIAIgFQBthDB7gwIADgCQgihiAAhwIAAgEQAAkMC9i9IAAgBQC+i+ENgBIABAAQEFAAC8CzIAAAAQA5iXB8h8IABgBQA3g4A+gpIADgCQC/iDD0gBIACAAQD1AAC+CDIADACQA9ApA5A4IABACQDIDIAaEQIABABQDPhKD9gBIADAAQGWAAEgC/IADADQEeC/ABEPIAAACIAAAYIAAABQgNDrjoCuIgBABIAsASIACABQF/ClABDnIAAACQAADpl/ClIgCABQmACloeABIgCAAgEBrnAHbQluAAklhLIgDAAQnAg4ihgBIgDAAQiNAAh7grQkxB6mDAAIgBAAQoUAAl5jmIgBgBQl3jmAAlFIAAgBQAAlCFvjlQB4hJB8gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iYB9h9QA4g5A/gqQDAiED1AAQD3AAC/CEQA+ArA5A4QDJDKAbEQQDPhLD/AAIACAAQGWABEhC/QEgDCAAEOIAAACIAAAZIAAAAQgNDrjqCuIABAAIAtATIABAAQF/CmABDpIAAABQgBDomAClIgCABQl/CloeAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgTg3AAIgCAAQgvAAgqgOIgCAAQhnApiDAAIgBAAQi1AAiAhOIgBgBQiAhPABhuQAAhuB9hPQAogYApgQQgKgjAAgmQAAhcBBhAQBAhBBZgBQBbAAA/A7QAXgyApgqQAUgTAWgPQBBgtBTAAQBUAABBAsQAWAQATATQBEBEAJBeQBIgaBXAAQCJABBiBAQBjBCAABcIAAAJIAAACQgGBPhNA6IABABIANAGIACABQCBA4ABBPIAAACQgCBPiBA3IgBAAQiDA4i3ABIgBAAg");
	this.shape_65.setTransform(550.3,56.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgaQixBHjgABQk1AAjbiHQjbiFAAi+QAAi7DWiFQBFgrBIgbQgUg6AAhCQAAicBvhwQBuhuCdAAQCXAABtBpQAhhZBIhIQAighAjgZQBwhMCOAAQCPAABwBMQAkAZAhAhQB0B1AQCeQB5grCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbAKQDgBggBCIQABCIjgBgQjfBgk8AAQjUAAisgsgEBLJAdTQiagTg2AAQgwAAgrgPQhoAqiEAAQi2AAiAhPQiBhPAAhuQABhvB+hOQAogYAqgQQgLgjAAgnQgBhcBBhAQBBhBBcAAQBaAABAA9QASg0ArgqQATgUAWgOQBCgtBTAAQBUAABBAtQAWAOATAUQBEBEAJBdQBIgZBWAAQCLAABiBCQBiBBAABcQgDBahQA7QCSA/AABPQAABQiDA5QiDA4i5AAQh+gBhkgZgAanVmQkFgghdAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiGQBEgqBJgcQgUg6AAhCQAAicBuhvQBvhuCcAAQCYAABsBoQAhhYBJhHQAhghAkgZQBwhMCPAAQCOAABwBMQAkAZAhAhQB0BzAPCfQB5gsCUAAQDuAACmBwQCoBvAACeQgHCYiIBlIAbALQDeBgAACIQAACHjeBgQjgBgk7AAQjWAAirgsgEhJLAKPQluAAklhLIgCAAQnCg4ihAAIgBAAQiNAAh8grIgCABQkwB5mBAAIgFAAQoTgBl2jmIgEgBQl2jmAAlEIAAgBQAAlDFxjlIAHgFQBuhDB7gwIADgCQgihiAAhwIAAgEQAAkLC9i+IABgCQC+i+EMAAIABAAQEFABC8CyIABAAQA5iXB7h8IABgBQA4g3A9gqIADgDQC/iCD0gBIACAAQD1AAC+CDIAEACQA9AqA4A3IACACQDHDHAaERIABACQDPhLD9AAIAEAAQGVAAEhC/IACACQEeDAABEPIAAABIAAAYIAAACQgNDqjoCuIgBABIAsASIACABQF/ClABDoIAAACQAADpl/CkIgCABQmACloeAAIgCAAgEBrnAHbQltAAklhLIgEAAQnAg4igAAIgDAAQiOgBh7grQkxB6mDAAIgBAAQoUAAl5jmIgBgBQl3jmAAlFIAAgBQAAlBFvjlQB4hKB8gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iZB9h9QA5g4A+grQC/iDD3AAQD2AAC/CDQA/AsA5A3QDIDKAbERQDPhKD/gBIACAAQGXAAEgDAQEgDCABEPIAAABIgBAZIAAABQgNDqjqCuIABAAIAtATIABAAQF/CmABDpIAAACQgBDol/CkIgCABQmACloeAAIgCAAgAhhk9Qh9AAhkgZIgBAAQiYgSg2gBIgCAAQgwAAgpgOIgCABQhoAoiDAAIgBAAQi1AAiAhOIgBgBQh/hOAAhvQAAhvB9hOQAogYAqgQQgKgjAAgmQAAhbBAhBQBBhBBZgBQBbABA/A6QAVgyAqgpQAUgUAWgPQBAgtBUAAQBUAABBAtQAWAPAUATQBEBEAJBeQBHgaBWAAQCLAABiBBQBiBCABBcIgBAJIAAADQgFBOhPA6IACACIANAFIACABQCCA4AABPIAAACQgCBOiBA4IgBAAQiCA4i4AAIgBAAg");
	this.shape_66.setTransform(540.3,56.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhTAAhIgZQiwBHjhAAQk1AAjaiGQjbiGAAi+QgBi7DWiFQBFgqBIgcQgTg6AAhCQAAicBuhvQBvhvCcAAQCYAABtBpQAghZBJhIQAhghAkgZQBvhMCPAAQCPAABvBMQAlAZAgAhQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDgBggBCHQABCIjgBgQjeBgk8AAQjVAAirgsgEBLJAdTQiZgTg2AAQgxAAgqgOQhpApiDAAQi2AAiBhPQiAhOAAhvQAAhuB+hPQAogYAqgQQgLgjAAgnQAAhbBBhBQBBhBBbAAQBaAABAA9QATg0ArgqQATgTAVgPQBCgtBTAAQBVAABBAtQAVAPAUATQBEBEAIBeQBIgaBXAAQCLAABhBCQBjBBAABdQgFBZhQA7QCTA/ABBQQAABPiEA5QiCA4i6AAQh9AAhlgagAanVnQkGghhcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiGQBEgqBJgcQgUg6AAhCQAAicBuhuQBuhvCdAAQCYAABtBpQAghZBJhHQAhghAkgZQBwhMCPAAQCPAABvBMQAkAZAgAhQB2B0AOCeQB5gsCVAAQDtAACnBwQCnBwAACdQgICYiHBlIAbALQDeBgAACIQAACHjeBgQjgBgk7AAQjWAAirgrgEhJLAKQQluAAklhMIgBAAQnCg4iiAAIAAAAQiOAAh8grIgCABQkwB4mBABIgFAAQoTgBl2jlIgEgCQl2jnAAlDIAAgBQAAlDFxjlIAIgFQBuhDB7gwIACgCQghhigBhwIAAgEQAAkLC9i/IABgBQC+i9EMgBIACAAQEEAAC8CzIABABQA5iYB8h8IAAgBQA4g3A9gqIADgCQC/iDD0gBIADAAQD0AAC+CDIAEACQA8ApA5A4IACACQDHDHAbERIAAACQDPhLD9AAIADAAQGXAAEgC/IACACQEfDAABEOIAAACIAAAYIAAACQgNDqjoCuIgCABIAsASIADABQF+ClABDnIAAACQAADpl+ClIgDABQl/CloeABIgDAAgEBrnAHbQltAAklhLIgEAAQnAg4igAAIgEAAQiNgBh7gqQkxB5mDAAIgBAAQoTAAl6jmIAAgBQl3jmgBlFIAAAAQAAlDFvjlQB4hJB8gwQghhkgBhxQAAkOC+i+QC/i/ENAAQEGAAC8C0QA5iYB8h9QA5g5A/gqQC/iED1AAQD3AAC/CDQA/ArA4A4QDJDKAbERQDQhLD+AAIACAAQGXABEgC/QEgDBABEQIAAACIgBAYIAAAAQgNDrjpCuIAAAAIAtATIABAAQGACmAADpIAAACQgBDnl/ClIgCABQmACloeAAIgCAAgAhgk8Qh+AAhjgaIgBAAQiZgTg2AAIgCAAQgwAAgpgOIgDAAQhmApiEAAIgBAAQi1AAiAhPIAAgBQiAhOAAhuQAAhuB+hPQAogYApgQQgKgjAAgmQgBhcBBhAQBBhBBZgBQBbABA/A6QAWgyApgpQAUgUAWgPQBBgsBTgBQBUAABCAsQAVAQAUATQBEBEAJBdQBHgZBXAAQCKAABiBBQBiBDABBbIgBAJIAAACQgFBPhPA7IADABIAMAFIACABQCCA4AABPIAAACQgBBOiCA5IgBAAQiCA4i4AAIAAAAg");
	this.shape_67.setTransform(530.3,57.525);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhIgaQixBHjgAAQk2AAjaiGQjbiGAAi9QAAi7DWiFQBFgrBIgbQgUg6AAhDQAAibBvhwQBuhuCcAAQCZAABsBpQAhhZBJhIQAgghAkgZQBwhMCPAAQCOAABwBMQAkAZAhAhQB1B1AOCfQB5gsCUAAQDuAACnBvQCnBwAACdQgHCYiIBlIAaALQDgBhgBCHQABCIjgBgQjfBgk7AAQjWAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgPQhoAqiEAAQi1AAiBhPQiAhPgBhvQAAhuB+hOQApgYAqgQQgMgjAAgnQABhcBAhAQBChBBbAAQBZAABBA9QATg0ArgqQATgUAUgOQBCgtBUAAQBUAABBAtQAVAOAUAUQBEBEAJBdQBHgZBXAAQCLAABiBCQBjBBgBBcQgDBahQA7QCSA/AABQQAABPiCA5QiEA4i5AAQh+gBhkgZgAanVmQkGgghdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi+QAAi6DWiGQBFgqBJgcQgVg6AAhCQAAicBvhvQBuhuCcAAQCZAABsBpQAhhZBJhHQAhghAkgZQBvhNCPABQCPgBBvBNQAkAZAiAhQB0BzAPCfQB5gsCUAAQDtAACnBwQCnBwABCdQgICXiIBmIAbALQDfBgAACIQAACHjfBgQjfBgk8AAQjVAAirgsgEhJLAKQQlugBklhLIgCAAQnCg4ihAAIgBAAQiOAAh7grIgCABQkwB5mBAAIgGAAQoSgBl2jmIgFgBQl1jnAAlDIAAgBQAAlDFxjlIAIgFQBthDB8gwIACgCQgihigBhwIAAgDQABkMC8i+IABgBQC+i/EMAAIACAAQEFAAC7CzIABAAQA5iXB8h8IABgBQA3g3A+gqIADgCQC+iED0AAIADAAQD0AAC/CCIADADQA9ApA4A3IACADQDHDHAbEQIABACQDPhKD9gBIADAAQGWAAEgC/IACACQEfDBABEOIAAACIAAAYIAAACQgNDqjoCuIgBABIAsASIACABQF/ClABDnIAAACQgBDpl+ClIgCABQmACloeABIgCAAgEBrnAHbQluAAklhLIgDAAQnAg5ihABIgDAAQiNgBh7grQkxB6mDAAIgBAAQoUAAl5jmIgBgBQl3jmAAlFIAAgBQAAlCFvjkQB4hKB8gwQgihkAAhxQAAkOC+i+QC/i/EMAAQEHAAC7C0QA5iYB8h9QA5g5A/gqQC/iED2AAQD3AAC/CEQA/AqA4A5QDJDKAaEQQDQhLD/AAIADAAQGWAAEgDAQEgDCAAEPIAAABIAAAZIAAABQgNDqjpCuIAAAAIAtATIABAAQGACmAADpIAAACQgBDnl/ClIgDABQl/CloeAAIgCAAgAhhk9Qh9AAhkgZIgBAAQiYgTg3AAIgCAAQgvgBgqgNIgCAAQhnApiDAAIgBAAQi1AAiAhOIgBgBQiAhPAAhuQAAhuB+hPQApgYAogQQgKgjAAgmQAAhcBAhAQBChBBYgBQBcAAA+A7QAXgyApgpQAUgVAWgOQBBgtBTAAQBUAABBAsQAWAQAUATQBEBEAIBeQBIgaBXAAQCKAABhBBQBjBCAABcIAAAJIAAACQgFBPhOA6IABABIANAGIADABQCAA4AABPIAAACQAABPiCA3IgBAAQiCA4i4AAIgBAAg");
	this.shape_68.setTransform(520.35,58.25);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgaQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi7DWiFQBFgrBIgbQgTg7gBhBQABicBuhvQBuhvCcAAQCYAABtBpQAhhZBJhIQAhghAjgZQBwhMCPAAQCPAABvBMQAkAZAhAhQB1B1AOCfQB5gsCUAAQDuAACnBwQCnBvAACdQgICYiHBlIAbALQDeBgAACIQAACIjeBgQjgBgk7AAQjVAAisgsgEBLJAdTQiagTg2AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiBhPAAhvQABhuB9hOQApgZAqgQQgMgiAAgnQAAhbBBhBQBBhBBcAAQBaAABAA9QASg0AsgqQATgTAUgPQBDgtBTAAQBUAABBAtQAVAPAUATQBEBEAJBeQBHgaBXAAQCLAABiBCQBjBBgBBcQgDBZhQA8QCSA+AABQQAABQiCA4QiEA4i5AAQh+AAhkgZgAanVmQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi7DXiGQBFgqBIgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAihZBIhHQAhghAkgZQBwhMCPAAQCOAABvBMQAlAZAhAhQB0B0APCeQB5gsCUAAQDuAACmBwQCoBwAACdQgHCYiIBlIAbALQDeBgABCIQgBCHjeBgQjgBgk8AAQjVAAirgsgEhJLAKQQluAAklhMIgCAAQnCg4ihAAIgBAAQiNAAh8grIgCABQkwB4mBABIgGAAQoSgBl2jmIgFgCQl0jmgBlDIAAgBQAAlDFxjlIAIgFQBthDB8gwIACgCQgihiAAhwIAAgEQAAkLC9i/IABgBQC+i+ELAAIACAAQEFAAC8CzIABABQA5iYB7h8IABgBQA3g3A+gqIADgCQC/iED0AAIACAAQD1AAC/CCIADACQA8AqA5A3IABACQDIDIAaERIABACQDQhLD8AAIAEAAQGWAAEfC+IACACQEfDAABEPIAAACIAAAXIAAACQgMDrjpCuIgBABIAsASIACABQF/ClACDnIAAACQgBDpl/ClIgCABQmACloeABIgCAAgEBrnAHbQluAAklhLIgDAAQnAg4ihAAIgDAAQiMgBh8gqQkxB5mCAAIgCAAQoUAAl5jmIgBgBQl2jmAAlFQAAlDFujlQB4hJB8gwQgihkAAhxQAAkOC+i+QDAi/EMAAQEFAAC8C0QA5iYB8h9QA5g5A/gqQDAiED2AAQD2AAC/CDQA/ArA5A4QDJDKAZERQDRhLD+AAIADAAQGWAAEgDAQEgDBABEQIAAACIgBAYIAAAAQgNDrjqCuIABAAIAtATIABAAQGACmAADpIAAACQAADnmAClIgCABQmACloeAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgTg3AAIgBAAQgwAAgqgOIgBAAQhoApiDAAIgBAAQi1AAiAhPIgBgBQh/hOgBhuQAAhuB+hPQApgYAogQQgKgjABgmQAAhcBAhAQBAhBBagBQBbAAA+A7QAXgyApgpQAUgVAWgOQBBgtBTAAQBVAABAAsQAWAQAUATQBEBEAJBdQBHgZBXAAQCKAABiBBQBiBDAABbIAAAIIAAADQgFBPhOA6IACACIAMAFIADABQCAA4ABBPIAAACQgBBOiCA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_69.setTransform(510.35,58.975);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("EgeXAiKQkGgghdAAQhSAAhJgZQiwBHjhAAQk1AAjbiGQjaiGAAi+QAAi7DWiFQBFgqBHgcQgTg6gBhCQABicBuhvQBuhvCdAAQCYAABtBpQAghZBJhIQAhghAjgZQBxhMCOAAQCPAABvBMQAlAZAgAhQB1B1APCfQB5gsCUAAQDsAACoBwQCnBvAACeQgHCXiJBmIAbALQDgBggBCHQABCIjgBgQjfBgk7AAQjVAAirgsgEBLJAdTQiZgTg3AAQgwAAgrgOQhoApiDAAQi2AAiBhPQiAhOAAhvQAAhuB+hPQApgYApgQQgLgjAAgnQAAhbBBhBQBBhBBcAAQBZAABAA9QATg0ArgqQATgTAVgPQBCgtBUAAQBTAABBAtQAWAPAUATQBEBEAIBeQBIgaBXAAQCKAABiBCQBjBBAABdQgFBZhPA7QCTA/gBBQQAABPiCA5QiEA4i5AAQh9AAhlgagAanVnQkGghhcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi7DXiGQBFgqBIgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAihZBIhHQAhghAkgZQBwhMCPAAQCOAABvBMQAlAZAhAhQB0B0APCeQB5gsCUAAQDuAACmBwQCoBwAACdQgHCYiIBlIAbALQDeBgABCIQgBCHjeBgQjgBgk7AAQjWAAirgrgEhJKAKQQlvAAklhMIgCAAQnBg4iiAAIgBAAQiNAAh8grIgCABQkwB4mBABIgFAAQoTgBl2jlIgEgCQl2jnAAlDIAAgBQAAlDFxjlIAIgFQBthDB8gwIACgBQgihjAAhwIAAgDQAAkMC9i/IABgBQC+i9EMgBIACAAQEEAAC8CzIABABQA5iYB7h8IABgBQA4g3A9gqIAEgCQC+iDD0gBIACAAQD1AAC+CDIAEACQA8ApA5A4IABACQDIDHAbERIAAACQDQhLD8AAIAEAAQGVAAEhC/IACACQEfDAAAEOIAAACIAAAYIAAACQgNDqjnCuIgBABIAsASIACABQF+ClABDnIAAACQAADpl+ClIgCABQmBClodABIgCAAgEBrnAHbQltAAkmhLIgCAAQnBg4igAAIgDAAQiOgBh7gqQkwB5mEAAIgBAAQoTAAl6jmIgBgBQl2jmAAlFIAAAAQAAlDFujlQB4hJB8gwQghhkAAhxQAAkOC9i+QC/i/ENAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED2AAQD2AAC/CDQA/ArA5A4QDJDKAaERQDQhLD+AAIADAAQGXABEfC/QEgDBABEQIAAACIgBAYIAAAAQgNDrjpCuIAAAAIAtATIABAAQGACmAADpIAAACQgBDnl/ClIgCABQmACloeAAIgCAAgAhhk8Qh8AAhlgaIgBAAQiYgTg3AAIgBAAQgwAAgpgOIgCAAQhoApiCAAIgBAAQi1AAiBhPIgBgBQh/hOAAhuQAAhuB+hPQAogYApgQQgLgjABgmQAAhcBAhAQBAhBBagBQBbABA/A6QAWgyApgpQAVgUAVgPQBBgsBTgBQBVAABBAsQAWAQATATQBEBEAJBdQBIgZBWAAQCKAABiBBQBjBDAABbIgBAJIAAADQgFBOhOA7IACABIANAFIACABQCBA4AABPIAAACQgBBOiCA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_70.setTransform(500.35,59.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgaQixBHjhABQk1AAjaiHQjbiFAAi+QAAi7DWiFQBFgrBIgbQgUg6AAhDQAAibBvhwQBuhuCcAAQCZAABsBpQAhhZBJhIQAgghAkgZQBwhMCPAAQCOAABvBMQAlAZAhAhQB0B1APCeQB5grCUAAQDuAACmBvQCoBwAACeQgHCXiIBlIAaALQDgBgAACIQAACIjgBgQjfBgk7AAQjWAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiAhPAAhvQgBhuB/hOQAogYAqgQQgMgjAAgnQAAhcBChAQBAhBBcAAQBZAABAA9QAUg0AqgqQATgUAVgOQBCgtBUAAQBUAABBAtQAWAOATAUQBFBEAIBdQBHgZBXAAQCLAABjBCQBiBBAABcQgFBahQA7QCTA/AABPQAABQiDA5QiDA4i5AAQh9gBhlgZgAanVmQkGgghdAAQhTAAhHgZQixBHjiAAQk0AAjbiGQjbiGAAi9QAAi7DWiGQBFgqBJgcQgVg6ABhCQAAicBuhvQBuhuCdAAQCYAABsBoQAhhYBIhHQAighAkgZQBwhMCOAAQCPAABvBMQAlAZAgAhQB1BzAPCfQB5gsCUAAQDtAACnBwQCnBvAACeQgHCYiIBlIAbALQDfBgAACIQAACHjfBgQjgBgk7AAQjVAAirgsgEhJLAKPQluAAklhLIgCAAQnCg4ihAAIgBAAQiNAAh9grIgBABQkxB5mBAAIgEAAQoTgBl3jlIgDgCQl2jnAAlDIAAgBQAAlDFwjlIAIgFQBuhDB8gwIABgCQghhigBhvIAAgFQABkLC8i+IABgCQC/i+ELAAIADAAQEDAAC8CzIABAAQA6iXB7h8IABgBQA4g3A9gqIADgDQC/iCDzgBIADAAQD0AAC/CCIADADQA9ApA4A3IACADQDHDHAcEQIAAADQDPhLD9AAIADAAQGWAAEgC+IACACQEfDBABEOIAAACIAAAYIAAACQgNDqjoCuIgBABIAsASIACABQF/ClABDnIAAACQgBDql+CkIgCABQmACloeAAIgCAAgEBrnAHbQltAAkmhLIgDAAQnBg5igABIgDAAQiNgBh7grQkxB6mDAAIgBAAQoUAAl5jmIgBgBQl3jlAAlGIAAAAQAAlCFvjlQB3hKB9gwQgihkAAhxQAAkOC9i+QDAi/EMAAQEHAAC7C0QA5iZB8h9QA6g4A+grQC/iDD2AAQD3AAC/CDQA+AsA5A3QDJDKAaERQDRhLD+AAIACAAQGXAAEfDAQEhDCAAEPIAAABIgBAZIAAABQgMDqjpCuIAAAAIAtATIABAAQGACmAADpIAAACQgBDol/CkIgCABQmBClodAAIgCAAgAhhk9Qh9AAhkgZIgBAAQiYgTg3AAIgCAAQgwgBgpgNIgCABQhnAoiDAAIgBAAQi1gBiAhNIgBgBQh/hPgBhuQAAhvB+hOQApgYAogQQgKgjAAgmQABhbA/hBQBBhBBZgBQBbABBAA6QAVgyAqgpQAVgUAUgPQBCgtBTAAQBUAABBAsQAWAPAUAUQBEBEAIBeQBIgaBWAAQCLAABhBBQBjBCAABcIAAAJIAAADQgGBOhOA6IACACIAOAFIACABQCAA4AABPIAAACQAABOiCA4IgBAAQiDA4i3AAIgBAAg");
	this.shape_71.setTransform(490.4,60.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgaQixBHjhAAQk1AAjaiGQjbiGAAi9QAAi7DWiFQBFgrBIgbQgUg7AAhBQAAicBvhvQBuhvCcAAQCYAABtBpQAhhZBJhIQAgghAkgZQBwhMCPAAQCOAABwBMQAkAZAhAhQB1B1AOCfQB5gsCUAAQDuAACmBwQCoBvAACdQgHCYiIBlIAbALQDeBgABCIQgBCIjeBgQjgBgk7AAQjWAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiAhPgBhvQAAhuB+hOQApgZAqgQQgMgiAAgnQAAhbBChBQBAhBBcAAQBZAABAA9QATg0AsgqQATgTAUgPQBCgtBUAAQBUAABBAtQAWAPATATQBEBEAJBeQBHgaBXAAQCLAABjBCQBhBBAABcQgEBZhQA8QCTA+AABQQAABQiCA4QiEA4i5AAQh9AAhlgZgAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjciGAAi9QAAi7DWiGQBFgqBJgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB1B0APCeQB5gsCUAAQDsAACnBwQCoBwAACdQgICYiIBlIAbALQDgBgAACIQAACHjgBgQjfBgk8AAQjVAAirgsgEhJLAKQQluAAklhMIgCAAQnCg4igAAIgCAAQiNAAh8grIgCABQkwB4mCABIgEAAQoTgBl3jmIgDgCQl1jmgBlDIAAgBQAAlDFxjlIAIgFQBthDB8gwIABgCQgghigBhwIAAgEQAAkLC9i/IABgBQC+i+ELAAIACAAQEFAAC7CzIABABQA6iYB7h8IABgBQA3g3A+gqIADgCQC+iED0AAIADAAQD1AAC+CCIADACQA9AqA4A3IACACQDHDIAbERIABACQDPhLD9AAIADAAQGWAAEgC+IACACQEgDAAAEPIAAACIAAAXIAAACQgMDrjpCuIgBABIAsASIACABQF/ClABDnIAAACQAADpl/ClIgCABQmACloeABIgCAAgEBroAHbQlvAAklhLIgDAAQnAg4ihAAIgDAAQiNgBh7gqQkxB5mCAAIgBAAQoVAAl4jmIgBgBQl3jmAAlFQgBlDFwjlQB2hJB9gwQgihkAAhxQAAkOC+i+QC/i/EMAAQEHAAC7C0QA5iYB8h9QA5g5A/gqQC/iED2AAQD3AADACDQA+ArA5A4QDIDKAaERQDRhLD+AAIADAAQGWAAEgDAQEgDBAAEQIAAACIAAAYIAAAAQgNDrjpCuIAAAAIAtATIABAAQGACmAADpIAAACQgBDnl/ClIgCABQmACloeAAIgBAAgAhhk8Qh9AAhkgaIgBAAQiYgTg3AAIgCAAQgvAAgqgOIgCAAQhnApiDAAIgBAAQi1AAiAhPIgBgBQiAhOAAhuQAAhuB+hPQApgYAogQQgKgjAAgmQAAhcBAhAQBChBBYgBQBcAAA+A7QAXgyApgpQAVgVAUgOQBCgtBTAAQBUAABBAsQAWAQAUATQBEBEAJBdQBIgZBWAAQCKAABhBBQBjBDAABbIAAAJIAAACQgFBPhOA7IABABIAOAFIACABQCAA4ABBPIAAACQgBBOiCA5IgBAAQiDA4i2AAIgCAAg");
	this.shape_72.setTransform(480.4,61.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhHgaQiyBHjgAAQk1AAjbiGQjbiGAAi9QABi7DWiFQBFgrBHgbQgTg6gBhDQAAibBwhwQBthuCdAAQCYAABsBpQAihZBIhIQAhghAjgZQBxhMCOAAQCPAABvBMQAkAZAiAhQB0B1APCfQB5gsCUAAQDtAACmBvQCoBwAACdQgHCYiIBlIAbALQDeBgAACIQAACIjeBgQjfBgk8AAQjVAAisgsgEBLKAdTQiagTg3AAQgwAAgrgPQhnAqiFAAQi1AAiAhPQiBhPAAhvQAAhuB+hOQAogYArgQQgMgjAAgnQAAhcBBhAQBBhBBcAAQBZAABAA9QATg0ArgqQATgUAVgOQBCgtBUAAQBUAABAAtQAWAOATAUQBFBEAJBdQBHgZBWAAQCLAABiBCQBjBBAABcQgEBahQA7QCSA/AABQQAABPiCA5QiEA4i4AAQh+gBhkgZgAanVmQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjaiGQjciGAAi+QAAi6DXiGQBFgqBIgcQgUg6AAhCQAAicBvhvQBthuCdAAQCYAABsBpQAihZBIhHQAhghAkgZQBwhNCOABQCQgBBuBNQAlAZAhAhQB0BzAQCfQB4gsCUAAQDuAACmBwQCoBwAACdQgHCXiJBmIAbALQDgBgAACIQAACHjgBgQjfBgk8AAQjUAAisgsgEhJKAKQQlvgBkkhLIgDAAQnCg4ihAAIgBAAQiNAAh8grIgCABQkwB5mBAAIgGAAQoSgBl2jmIgFgBQl0jngBlEIAAAAQAAlDFxjlIAIgFQBthDB8gwIACgCQghhigBhwIAAgDQABkMC8i+IABgBQC+i/ELAAIACAAQEFAAC8CzIABAAQA5iXB7h8IABgBQA4g3A9gqIADgCQC/iEDzAAIADAAQD1AAC/CCIACADQA+ApA3A3IACADQDIDHAbEQIAAACQDQhKD9gBIADAAQGWAAEfC/IACACQEfDBABEOIAAACIAAAYIAAACQgNDqjoCtIgBABIAsASIACABQF/CmACDnIAAACQgBDpl/ClIgBABQmBCloeABIgBAAgEBrnAHbQluAAklhLIgDAAQnBg5igABIgDAAQiMgBh7grQkyB6mCAAIgBAAQoVAAl4jnIgCAAQl2jmAAlFIAAgBQgBlCFwjkQB3hKB9gwQgjhkABhxQgBkOC+i+QDAi/EMAAQEGAAC7C0QA5iYB9h9QA5g5A+gqQDAiED1AAQD3AADACEQA+AqA5A5QDJDKAZEQQDRhLD/AAIACAAQGWAAEgDAQEhDCAAEPIAAABIgBAZIAAABQgNDqjpCuIABAAIAtATIABAAQF/CmAADpIAAACQAADnmAClIgCABQmACloeAAIgCAAgAhhk9Qh8AAhlgZIgBAAQiYgTg3AAIgCAAQgvAAgqgOIgBAAQhnApiDAAIgBAAQi2AAiAhPIgBgBQh/hOAAhuQAAhuB9hPQApgYAogQQgKgjAAgmQAAhcBBhAQBAhBBagBQBbABA+A5QAXgxApgpQAUgVAVgOQBCgtBUAAQBTAABBAsQAXAQATATQBEBEAJBeQBIgaBWAAQCKAABiBBQBiBCAABcIAAAJIAAACQgFBPhOA6IABABIAOAGIACABQCBA4AABPIAAACQgBBPiBA3IgCAAQiCA4i4AAIgBAAg");
	this.shape_73.setTransform(470.4,61.85);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgaQixBHjhABQk1AAjaiGQjbiGAAi+QAAi7DWiFQBFgrBIgbQgUg6AAhCQAAidBvhvQBuhuCdAAQCYAABsBpQAhhZBIhIQAighAjgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCeQB5grCUAAQDsAACnBwQCoBvAACeQgICXiIBmIAbAKQDgBgAACIQAACIjgBgQjfBgk8AAQjVAAirgsgEBLJAdTQiagTg2AAQgwAAgrgPQhoAqiEAAQi1AAiBhPQiBhOABhvQgBhuB/hPQAogYAqgRQgLgiAAgnQAAhcBBhAQBBhBBbAAQBaAAA/A9QAUg0AqgqQAUgUAVgOQBCgtBTAAQBUAABBAtQAVAOAUAUQBFBEAIBeQBIgaBWAAQCLAABjBBQBhBCABBdQgFBZhQA7QCTA/AABPQAABQiDA4QiDA5i5AAQh+AAhkgagAanVmQkGgghdAAQhSAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DViGQBGgqBIgcQgUg6AAhCQAAicBuhvQBvhuCcAAQCYAABtBoQAhhYBIhIQAhggAkgZQBwhMCOAAQCPAABwBMQAkAZAgAgQB2B1APCeQB5gsCUAAQDsAACoBwQCnBvAACeQgHCYiJBlIAbALQDfBgAACIQAACHjfBgQjfBgk7AAQjVAAisgsgEhJLAKPQluAAklhLIgBAAQnDg4igAAIgBAAQiPAAh8grIgCABQkwB4mBAAIgFAAQoSAAl3jlIgDgCQl2jnAAlEIAAAAQAAlDFwjlIAIgFQBuhDB7gwIACgCQghhiAAhvIAAgFQAAkLC9i/IABgBQC+i9EMgBIACAAQEEAAC8CzIABABQA4iYB8h8IABgBQA3g3A+gqIADgCQC/iEDzAAIADAAQD0AAC/CCIADACQA9AqA4A3IACACQDHDIAcERIAAACQDPhLD9AAIADAAQGWAAEgC+IADACQEeDAABEPIAAACIAAAXIAAADQgNDqjoCuIgBABIAsASIACABQF/ClABDnIAAACQAADpl/ClIgCABQmACloeAAIgCAAgEBrnAHbQltAAkmhLIgDAAQnBg4igAAIgDAAQiNgBh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl2jlgBlGIAAAAQAAlCFvjlQB3hKB9gwQgihkAAhxQAAkOC9i+QDAi/EMAAQEHAAC7C0QA5iYB9h+QA5g4A+grQC/iDD2AAQD3AAC/CDQA/AsA4A3QDKDKAaERQDQhLD+AAIACAAQGXAAEfDAQEhDBAAEQIAAACIAAAYIAAABQgNDqjpCuIAAAAIAtATIABAAQF/CmABDpIAAACQgBDnmACmIgBAAQmACloeAAIgCAAgAhhk9Qh9ABhkgaIgBAAQiYgTg3AAIgCAAQgwAAgpgOIgCABQhnAoiDAAIgBAAQi1gBiAhNIgBgCQh/hOAAhvQAAhtB9hPQAogYApgQQgKgiAAgnQAAhbBBhBQBAhBBagBQBaAABAA7QAVgyAqgpQAVgUAUgPQBBgtBUAAQBUAABBAsQAWAQAUATQBEBEAJBeQBHgaBWAAQCLAABiBBQBiBDABBbIgBAIIAAAEQgGBPhOA5IACACIAOAFIABABQCCA4AABQIAAABQgBBPiCA3IgBAAQiCA4i4AAIgBAAg");
	this.shape_74.setTransform(460.45,62.55);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgaQixBHjhAAQk1AAjaiGQjbiGAAi9QAAi7DWiFQBFgrBIgbQgUg7AAhBQAAicBvhvQBuhvCcAAQCZAABsBpQAhhZBIhIQAighAjgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCfQB4gsCUAAQDuAACmBwQCoBvAACdQgHCYiIBlIAaALQDfBgABCIQgBCIjfBgQjfBgk8AAQjUAAisgsgEBLJAdTQiagTg2AAQgwAAgrgPQhoAqiEAAQi2AAiAhPQiAhPAAhvQgBhuB/hOQAogZAqgQQgMgiABgnQAAhbBBhBQBBhBBbAAQBZAABAA9QAUg0AqgqQAUgTAVgPQBBgtBUAAQBUAABBAtQAVAPAUATQBFBEAIBeQBHgaBXAAQCLAABjBCQBiBBAABcQgFBZhQA8QCTA+AABQQAABQiDA4QiDA4i5AAQh9AAhlgZgAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGAAi9QgBi7DWiGQBFgqBJgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABtBpQAghZBJhHQAhghAkgZQBwhMCOAAQCPAABwBMQAkAZAgAhQB2B0APCeQB5gsCUAAQDsAACoBwQCnBwAACdQgICYiIBlIAbALQDgBggBCIQABCHjgBgQjfBgk8AAQjUAAisgsgEhJLAKQQltAAkmhMIgBAAQnDg4igAAIgBAAQiOAAh8grIgCABQkwB4mCABIgEAAQoTgBl3jmIgDgCQl2jmAAlDIAAgBQAAlDFxjlIAIgFQBthDB7gwIADgBQgihjAAhwIAAgDQAAkMC9i/IABgBQC+i+ELAAIADAAQEEAAC7CzIACABQA5iYB7h8IABgBQA4g3A9gqIADgCQC/iEDzAAIADAAQD0AAC/CCIADACQA9AqA4A3IADACQDGDIAcEQIAAADQDPhLD9AAIADAAQGWAAEgC+IADACQEfDAAAEPIAAACIAAAXIAAACQgMDrjpCuIgBABIAsASIACABQF/ClABDnIAAACQAADpl/ClIgCABQmACloeABIgCAAgEBroAHbQluAAkmhLIgDAAQnBg4igAAIgDAAQiNgBh7gqQkxB5mCAAIgBAAQoVAAl4jmIgBgBQl4jmAAlFQABlDFvjlQB3hJB8gwQgihkAAhxQAAkOC+i+QC/i/EMAAQEHAAC7C0QA5iYB8h9QA6g5A+gqQC/iED2AAQD3AAC/CDQA/ArA4A4QDJDKAaERQDRhLD/AAIABAAQGXAAEgDAQEgDBAAEQIAAACIAAAYIAAAAQgNDrjpCuIAAAAIAtATIABAAQGACmAADpIAAACQgBDnl/ClIgCABQmACloeAAIgBAAgAhhk8Qh9AAhkgaIgBAAQiYgTg2AAIgDAAQgvAAgqgOIgCAAQhnApiDAAIgBAAQi1AAiAhPIgBgBQh/hOgBhuQABhuB9hPQAogYApgQQgJgjgBgmQABhcA/hAQBBhBBagBQBaAABAA7QAVgyAqgpQAVgVAUgOQBBgtBUAAQBUAABBAsQAWAQAUATQBEBEAJBdQBHgZBXAAQCKAABhBBQBjBDAABbIAAAJIAAADQgFBOhPA7IACABIAOAFIACABQCBA4AABPIAAACQgBBOiCA5IgBAAQiCA4i3AAIgCAAg");
	this.shape_75.setTransform(450.45,63.275);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("EgeYAiKQkFgghdAAQhTAAhIgaQiwBHjiAAQk1AAjaiGQjbiFAAi+QAAi7DWiFQBFgrBJgbQgVg6AAhCQAAicBvhwQBuhuCcAAQCZAABsBpQAhhZBIhIQAhghAlgZQBvhMCPAAQCOAABvBMQAlAZAhAhQB0B1APCeQB5grCUAAQDuAACmBwQCoBvAACeQgHCXiIBlIAbALQDeBgABCIQgBCIjeBgQjgBgk8AAQjVAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiAhPAAhvQgBhuB/hOQAogYAqgQQgMgjAAgnQAAhcBChAQBAhBBcAAQBZAABAA9QAUg0AqgqQATgUAVgOQBCgtBUAAQBUAABBAtQAWAOATAUQBFBEAIBdQBHgZBXAAQCLAABjBCQBiBBAABcQgFBahQA7QCTA/AABPQAABQiDA5QiDA4i5AAQh9gBhlgZgAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGgBi9QAAi7DWiGQBFgqBJgcQgUg6AAhCQAAicBvhvQBuhuCcAAQCYAABtBoQAghYBJhHQAhghAkgZQBwhMCOAAQCQAABuBMQAlAZAgAhQB2BzAPCfQB5gsCUAAQDsAACoBwQCnBvAACeQgICYiIBlIAbALQDgBggBCIQABCHjgBgQjfBgk8AAQjUAAisgsgEhJLAKPQluAAkkhLIgCAAQnDg4igAAIgBAAQiOAAh8grIgCABQkwB5mCAAIgEAAQoTgCl3jlIgDgCQl1jmgBlEIAAAAQAAlDFxjlIAIgFQBuhDB7gwIACgCQgihiAAhvIAAgFQAAkLC9i+IABgCQC+i+ELAAIADAAQEEAAC8CzIABAAQA5iXB8h8IABgBQA3g3A9gqIADgDQC/iCDzgBIADAAQD0AAC/CCIADADQA9ApA4A3IACADQDIDHAbEQIAAADQDPhLD9AAIADAAQGWAAEgC+IACACQEgDAAAEPIAAACIAAAYIAAACQgNDpjoCuIgBABIAsASIACABQF/CmACDnIAAACQgBDpl/ClIgCABQl/ClofAAIgCAAgEBroAHbQlvAAklhLIgDAAQnAg5ihABIgDAAQiNgBh7grQkxB6mCAAIgBAAQoVAAl4jmIgBgBQl4jmAAlFIAAgBQABlBFvjlQB3hKB8gwQgihkAAhxQAAkOC+i+QC/i/EMAAQEHAAC7C0QA5iZB8h9QA6g4A+grQC/iDD2AAQD3AADACDQA+AsA4A3QDJDKAaERQDRhLD/AAIACAAQGXAAEfDAQEgDCAAEPIAAABIAAAZIAAABQgNDqjpCuIABAAIAtATIAAAAQGACmAADpIAAACQAADomACkIgCABQmACloeAAIgBAAgAhhk9Qh9AAhkgZIgBAAQiYgTg3AAIgCAAQgvAAgqgOIgCABQhnAoiDAAIgBAAQi1AAh/hPIgBgBQiBhOAAhuQAAhvB+hOQApgYAogQQgJgjgBgmQAAhbBBhBQBBhBBYgBQBbAABAA7QAWgyAqgpQAUgUAUgPQBCgtBTAAQBUAABBAsQAWAPAUAUQBEBEAJBeQBHgaBXAAQCLAABhBBQBiBCAABcIAAAJIAAADQgFBOhPA6IACACIAOAFIACABQCBA4AABQIAAABQgBBOiBA4IgBAAQiEA4i2AAIgCAAg");
	this.shape_76.setTransform(440.45,64);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgZQixBGjgABQk1AAjbiGQjbiHAAi9QAAi7DWiFQBFgqBIgcQgUg6AAhCQAAidBvhvQBuhuCdAAQCXAABtBoQAhhYBIhIQAighAjgZQBwhMCOAAQCPAABwBMQAkAZAhAhQB0B0AQCfQB5grCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDfBfAACIQAACIjfBgQjfBgk8AAQjUAAisgsgEBLJAdTQiagTg2AAQgwAAgrgPQhoAqiEAAQi2AAiAhPQiBhOAAhvQABhuB9hPQApgYAqgRQgLgiAAgnQgBhcBBhAQBBhBBcAAQBaAABAA9QASg0ArgqQATgTAWgPQBCgtBTAAQBUAABBAtQAWAPATATQBEBEAJBeQBIgaBWAAQCLAABiBBQBiBCABBdQgEBYhQA8QCSA/AABPQAABQiDA4QiDA4i5ABQh+AAhkgagAanVmQkGgghdAAQhSAAhJgZQixBHjgAAQk1AAjbiGQjbiGAAi9QAAi8DWiFQBFgqBIgcQgTg6gBhCQABicBuhuQBuhvCdAAQCXAABtBoQAhhYBJhIQAhggAkgZQBwhMCOgBQCPABBvBMQAkAZAiAgQB0B1APCeQB5gsCUAAQDtAACnBwQCoBvAACeQgICXiIBmIAbALQDfBgAACHQAACIjfBgQjfBgk8AAQjVAAirgsgEhJLAKPQluABklhMIgCAAQnCg4ihAAIgBAAQiNAAh9gqIgCAAQkvB4mCAAIgFAAQoTAAl2jlIgEgCQl1jnAAlDIAAgBQAAlDFxjlIAHgFQBuhDB7gwIADgBQgihjAAhvIAAgEQAAkMC9i/IABgBQC9i9EMgBIACAAQEFABC8CyIABABQA4iYB8h8IABgBQA3g3A9gqIADgCQC/iED0AAIADAAQD1AAC+CCIADACQA9AqA4A3IACACQDHDIAbERIABACQDPhLD9AAIADAAQGWAAEgC/IACABQEfDAABEPIAAACIAAAXIAAADQgNDqjoCuIgCABIAsASIADABQF/ClABDnIAAACQAADql/ClIgCABQmACkoeAAIgCAAgEBrnAHbQluAAklhKIgEgBQnAg4igAAIgEAAQiMAAh7grQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl2jmgBlFIAAAAQAAlCFvjlQB3hKB9gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iZB9h9QA4g4A/grQDAiDD1AAQD3AAC/CDQA+ArA5A4QDJDLAbEQQDPhLD/AAIACAAQGXABEfC/QEhDBAAEQIAAACIAAAXIAAACQgNDqjqCuIABAAIAtATIABAAQF/CmABDpIAAACQgBDomAClIgCABQmACkoeAAIgBAAgAhhk9Qh9ABhkgaIgBAAQiZgTg2AAIgCAAQgvAAgqgOIgCABQhnAoiDAAIgBAAQi1AAiAhPIgBgBQh/hNAAhwQAAhtB9hPQAogYApgQQgKgjAAgmQAAhbBBhBQBAhBBagBQBbAAA+A7QAWgyAqgpQAUgUAWgPQBAgtBUAAQBUAABBAtQAWAPATATQBEBEAKBdQBHgZBWAAQCLAABiBCQBiBCAABbIAAAJIAAADQgFBPhPA6IADABIAMAFIACABQCCA4AABQIAAABQgCBPiBA4IgBAAQiDA3i3AAIgBAAg");
	this.shape_77.setTransform(430.5,64.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgZQixBHjhAAQk0AAjbiGQjbiGAAi+QAAi7DWiFQBFgqBIgcQgUg6AAhCQAAicBvhvQBuhvCdAAQCXAABtBpQAhhZBIhIQAighAjgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCfQB5gsCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDgBggBCHQABCIjgBgQjfBgk8AAQjUAAisgsgEBLJAdTQiagTg2AAQgxAAgqgOQhoApiEAAQi1AAiBhPQiBhOABhvQAAhuB+hPQAogYAqgQQgLgjAAgnQgBhbBChBQBBhBBbAAQBaAAA/A9QAUg0AqgqQAUgTAVgPQBCgtBTAAQBUAABBAtQAWAPATATQBEBEAJBeQBIgaBWAAQCLAABiBCQBiBBABBdQgFBZhPA7QCSA/AABQQAABPiDA5QiDA4i5AAQh+AAhkgagAanVnQkGghhcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiGQBEgqBJgcQgUg6AAhCQAAicBuhuQBuhvCdAAQCYAABtBpQAghZBJhHQAhghAkgZQBwhMCPAAQCPAABvBMQAkAZAgAhQB2B0AOCeQB5gsCUAAQDuAACnBwQCnBwAACdQgICYiHBlIAbALQDeBgAACIQAACHjeBgQjgBgk7AAQjWAAirgrgEhJLAKQQluAAklhMIgBAAQnCg4iiAAIAAAAQiOAAh9grIgCABQkvB4mBABIgGAAQoTgBl2jmIgEgCQl1jmAAlDIAAgBQAAlDFxjlIAIgFQBthDB7gwIADgBQghhjgBhvIAAgEQAAkMC9i/IABgBQC+i9EMgBIACAAQEDAAC9CzIABABQA4iYB8h8IABgBQA4g3A9gqIADgCQC/iDDzgBIADAAQD0AAC/CCIADACQA9AqA4A3IACACQDHDIAcEQIAAADQDPhLD9AAIADAAQGWAAEgC+IADACQEeDAABEPIAAACIAAAXIAAACQgNDrjnCuIgCABIAsASIACABQF/ClABDnIAAACQAADpl+ClIgDABQl/CloeABIgDAAgEBrnAHbQluAAklhLIgDAAQnBg4igAAIgDAAQiNgBh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl2jmgBlFQAAlDFvjlQB3hJB9gwQgihkAAhxQAAkOC9i+QDAi/ENAAQEFAAC8C0QA5iYB9h9QA5g5A+gqQDAiED2AAQD2AAC/CDQA/ArA4A4QDJDKAbERQDQhLD+AAIACAAQGXABEgC/QEgDBABEQIAAACIgBAYIAAAAQgNDrjqCuIABAAIAtATIABAAQGACmAADpIAAACQgBDnmAClIgCABQmAClodAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiZgTg2AAIgCAAQgwAAgpgOIgCAAQhnApiDAAIgBAAQi1AAiAhPIgBgBQh/hOAAhuQAAhuB9hPQAogYApgQQgKgjABgmQAAhcBAhAQBAhBBagBQBaAABAA7QAWgyApgpQAVgUAVgPQBAgsBUgBQBUAABBAsQAWAQAUATQBEBEAJBdQBHgZBXAAQCKAABiBBQBiBDABBbIgBAJIAAADQgFBOhPA7IADABIANAFIABABQCCA4AABPIAAACQgCBOiBA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_78.setTransform(420.5,65.425);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("EgeXAiKQkHgghdAAQhSAAhIgZQixBGjhABQk1AAjaiHQjbiFAAi+QAAi7DWiFQBFgrBJgbQgVg6ABhCQAAidBuhvQBuhuCdAAQCYAABsBpQAhhZBIhIQAighAkgZQBvhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCeQB5grCUAAQDsAACnBwQCoBvAACeQgICXiIBmIAbAKQDgBgAACIQAACIjgBgQjfBgk8AAQjVAAiqgsgEBLJAdTQiagTg2AAQgwAAgrgPQhoAqiEAAQi1AAiBhPQiBhOABhvQgBhuB/hPQAogYAqgRQgLgiAAgnQAAhcBBhAQBBhBBbAAQBaAAA/A9QAUg0AqgqQAUgUAVgOQBCgtBTAAQBUAABBAtQAVAOAUAUQBFBEAIBdQBIgZBWAAQCLAABjBBQBhBCABBcQgFBahQA7QCTA/AABPQAABQiDA4QiDA5i5AAQh+AAhkgagAanVmQkGgghdAAQhSAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DViGQBGgqBIgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABtBoQAhhYBIhIQAhggAkgZQBwhMCOAAQCPAABwBMQAkAZAgAgQB2B1APCeQB5gsCUAAQDsAACoBwQCnBvAACeQgICYiIBlIAbALQDfBgAACIQAACHjfBgQjfBgk7AAQjVAAisgsgEhJLAKPQltAAkmhLIgBAAQnDg4igAAIgBAAQiOAAh8grIgCABQkwB4mCAAIgEAAQoTgBl3jlIgDgCQl2jmAAlDIAAgBQAAlDFxjlIAIgFQBuhDB6gwIADgCQgihiAAhvIAAgFQAAkLC9i/IABgBQC+i9EMgBIACAAQEEAAC8CzIABABQA5iYB8h8IABgBQA3g3A9gqIADgCQC/iEDzAAIADAAQD0AAC/CCIADACQA9AqA4A3IADACQDGDIAcERIAAACQDPhLD9AAIADAAQGWAAEgC+IADACQEfDAABEPIAAACIgBAXIAAADQgMDpjpCuIgBABIAsASIACABQF/ClABDoIAAACQAADpl+ClIgDABQl/ClofAAIgCAAgEBroAHbQluAAkmhLIgDAAQnAg4ihAAIgDAAQiMgBh8gqQkxB5mDAAIgBAAQoTAAl5jmIgBgBQl4jmAAlFIAAAAQABlCFujlQB4hKB8gwQgihkAAhxQAAkOC+i+QDAi/ELAAQEHAAC7C0QA5iYB9h+QA5g4A+grQC/iDD2AAQD3AAC/CDQA/AsA4A3QDKDKAZERQDRhLD/AAIACAAQGWAAEgDAQEgDBAAEQIAAACIAAAYIAAABQgNDqjqCuIABAAIAtATIABAAQGACmAADpIAAACQgBDnl/CmIgCAAQmACloeAAIgBAAgAhhk9Qh9ABhkgaIgBAAQiYgTg2AAIgDAAQgvAAgpgOIgDABQhmAoiEAAIgBAAQi1AAh/hPIgBgBQiBhOABhvQAAhtB9hPQApgYApgQQgLgiAAgnQAAhbBBhBQBAhBBagBQBaAABAA7QAWgyAqgpQATgUAVgPQBCgtBTAAQBVAABAAsQAWAQAUATQBEBEAJBeQBHgaBXAAQCKAABiBBQBiBDABBbIgBAIIAAAEQgFBPhPA5IADACIANAFIACABQCBA4AABQIAAABQgBBPiCA3IAAAAQiDA4i3AAIgCAAg");
	this.shape_79.setTransform(410.5,66.15);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgZQixBHjgAAQk1AAjbiGQjbiHAAi9QAAi7DWiFQBFgqBIgcQgUg6AAhCQAAidBvhvQBuhuCcAAQCYAABtBoQAhhYBJhIQAgghAkgZQBwhMCPAAQCPAABvBMQAkAZAhAhQB1B1AOCeQB5grCUAAQDtAACoBwQCnBvAACeQgICXiHBmIAbALQDeBfAACIQAACIjeBgQjgBgk7AAQjWAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgOQhoApiEAAQi2AAiAhPQiBhPAAhuQABhuB9hPQApgZAqgQQgMgiAAgnQABhbBAhBQBBhBBcAAQBaAABAA9QASg0AsgqQATgTAUgPQBDgtBTAAQBUAABBAtQAVAPAUATQBEBEAJBeQBHgaBXAAQCLAABiBBQBjBCgBBdQgDBYhQA8QCSA+AABQQAABQiCA4QiEA4i5AAQh+AAhkgZgAanVnQkGghhcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi8DXiFQBFgqBIgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBoQAihYBIhIQAhggAkgZQBwhMCPgBQCOABBvBMQAlAZAhAgQB0B1APCeQB5gsCUAAQDuAACmBwQCoBvAACeQgHCXiIBmIAbALQDeBgABCHQgBCIjeBgQjgBgk8AAQjVAAirgrgEhJLAKPQluABklhMIgCAAQnCg4ihAAIgBAAQiNAAh8gqIgDAAQkvB4mCAAIgFAAQoTAAl2jlIgEgDQl1jmAAlDIAAgBQAAlDFxjlIAIgFQBthDB7gwIADgBQgihjAAhvIAAgEQAAkMC8i/IABgBQC/i+ELAAIACAAQEEAAC8C0IABAAQA6iYB7h8IABgBQA3g3A9gqIAEgCQC+iED0AAIADAAQD1AAC+CCIADACQA9AqA4A3IACACQDHDIAbERIABACQDPhLD9AAIADAAQGWAAEgC/IACABQEfDAABEPIAAACIAAAXIAAACQgMDrjpCuIgBABIAsASIACABQF+ClACDnIAAACQAADpl/CmIgCABQmACkoeAAIgCAAgEBrnAHbQluAAkmhKIgCgBQnBg4ihgBIgCAAQiNAAh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl2jmAAlFIAAAAQAAlDFujlQB4hJB8gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iZB8h9QA5g4A/grQDAiDD2AAQD2AADACDQA+ArA5A4QDJDLAZERQDRhMD+AAIADAAQGWABEgDAQEgDAABEQIAAACIgBAXIAAABQgNDrjqCuIABAAIAtATIABAAQF/CmABDpIAAACQgBDnmACmIgCABQl/CkofAAIgBAAgAhhk9Qh9ABhkgaIgBAAQiZgTg2AAIgCAAQgvAAgqgOIgCABQhnAoiDAAIgBAAQi1AAiAhPIgBgBQiAhOAAhvQAAhtB+hPQAogYApgPQgJgkAAgmQgBhcBAhAQBBhABZgCQBcAAA+A7QAWgyAqgpQAUgVAWgOQBBgsBTgBQBUAABBAtQAWAPAUATQBEBEAJBdQBHgZBXAAQCKAABhBCQBjBCAABbIAAAJIAAADQgFBPhPA6IADABIAMAFIADABQCAA4ABBQIAAACQgCBOiBA4IgBAAQiDA3i3AAIgBAAg");
	this.shape_80.setTransform(400.55,66.85);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghdAAQhSAAhIgaQixBHjgAAQk1AAjbiGQjbiFAAi+QAAi7DWiFQBFgrBIgbQgUg6AAhDQAAibBvhwQBuhuCdAAQCXAABtBpQAhhZBJhIQAgghAkgZQBwhMCOAAQCPAABwBMQAkAZAhAhQB1B1AOCeQB6grCUAAQDsAACoBvQCnBwAACeQgHCXiJBmIAbAKQDgBggBCIQABCIjgBgQjfBgk7AAQjVAAisgsgEBLJAdTQiagTg2AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiBhPAAhuQABhvB9hOQApgYAqgQQgLgjgBgnQAAhcBBhAQBBhBBcAAQBaAABAA9QASg0AsgqQASgUAVgOQBDgtBTAAQBUAABBAtQAVAOAUAUQBEBEAJBdQBIgZBWAAQCLAABiBCQBiBBAABcQgDBahQA7QCSA/AABPQAABQiCA5QiEA4i5AAQh9gBhlgZgAanVmQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiGQBFgqBIgcQgUg6AAhCQAAicBvhvQBthuCdAAQCYAABsBoQAihYBIhHQAhghAkgZQBwhMCPAAQCOAABwBMQAkAZAhAhQB0BzAPCfQB5gsCUAAQDuAACmBwQCoBvAACeQgHCYiIBlIAbALQDeBgABCIQgBCHjeBgQjgBgk7AAQjWAAirgsgEhJKAKPQlvAAklhLIgCAAQnBg4iiAAIgBAAQiNAAh8grIgCABQkxB5mBAAIgFAAQoTgCl1jlIgFgCQl0jmgBlEQAAlDFxjlIAIgFQBthDB7gwIADgCQgihiAAhvIAAgFQAAkLC9i+IAAgCQC+i+ENAAIABAAQEFAAC8CzIAAAAQA5iXB8h8IABgBQA3g3A+gqIADgDQC+iCD0gBIADAAQD1AAC+CCIADACQA9AqA5A3IABACQDIDIAaEQIABACQDPhKD9AAIADAAQGWgBEgC/IACACQEfDAABEPIAAACIAAAXIAAACQgMDrjoCtIgCABIAsASIACABQF/CmABDmIAAADQAADpl+ClIgCABQmBClodAAIgCAAgEBrnAHbQluAAklhLIgDAAQnBg5igABIgDAAQiNgBh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl2jmAAlGQAAlBFujlQB4hKB8gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iZB9h9QA4g4A/grQDAiDD2AAQD2AAC/CDQA/AsA5A3QDJDKAaERQDQhLD+AAIADAAQGWAAEgDAQEhDCAAEPIAAABIgBAZIAAABQgNDqjqCuIABAAIAtATIACAAQF/CmAADpIAAACQgBDomACkIgCABQl/CloeAAIgCAAgAhhk9Qh9AAhkgZIgBAAQiYgTg3AAIgCAAQgvAAgqgOIgCABQhnAoiDAAIgBAAQi1AAiAhPIgBgBQiAhOABhuQAAhvB9hOQAogYApgQQgJgjAAgmQgBhcBBhAQBAhBBZgBQBbAAA/A6QAXgxApgpQAUgUAWgPQBBgtBTAAQBUAABBAsQAWAPAUAUQBEBEAJBeQBIgaBWAAQCKAABiBBQBjBCAABcIgBAJIAAADQgGBOhNA6IACABIANAGIACABQCBA4AABPIAAACQgCBOiBA4IgBAAQiDA4i3AAIgBAAg");
	this.shape_81.setTransform(390.55,67.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgZQixBGjgABQk1AAjbiGQjbiHAAi9QAAi7DWiFQBFgqBIgcQgUg6AAhCQAAidBvhvQBuhuCdAAQCXAABtBoQAhhYBIhIQAighAjgZQBwhMCOAAQCPAABwBMQAkAZAhAhQB0B0AQCfQB5grCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbAKQDgBggBCIQABCIjgBgQjfBgk8AAQjUAAisgsgEBLJAdTQiagTg2AAQgwAAgrgPQhoAqiEAAQi2AAiAhPQiBhOAAhvQABhuB+hPQAogYAqgRQgLgiAAgnQgBhcBBhAQBBhBBcAAQBaAABAA9QASg0ArgqQATgTAWgPQBCgtBTAAQBUAABBAtQAWAPATATQBEBEAJBeQBIgaBWAAQCLAABiBBQBiBCAABdQgDBYhQA8QCSA/AABPQAABQiDA4QiDA4i5ABQh+AAhkgagAanVnQkFghhdAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi8DWiFQBFgqBIgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABsBoQAhhYBJhIQAhggAkgZQBwhMCPgBQCOABBwBMQAkAZAhAgQB0B1APCeQB5gsCUAAQDuAACmBwQCoBvAACeQgHCXiIBmIAbALQDeBgAACHQAACIjeBgQjgBgk7AAQjWAAirgrgEhJLAKPQluABklhMIgCAAQnBg4iiAAIgBAAQiOAAh7grIgCABQkwB4mCAAIgFAAQoTgBl1jlIgFgCQl1jmAAlDIAAgBQAAlDFxjlIAIgFQBthDB7gwIADgBQghhjgBhvIAAgEQAAkMC9i/IABgBQC9i9ENgBIABAAQEFAAC8CzIABABQA4iYB8h8IABgBQA4g3A9gqIADgCQC+iED0AAIADAAQD1AAC+CCIADACQA9AqA5A3IACACQDHDIAaERIABACQDPhLD9AAIADAAQGWAAEgC/IADABQEeDAABEPIAAACIAAAXIAAADQgNDpjnCvIgCAAIAsASIACABQF/CmABDnIAAACQAADpl+ClIgCABQmBClodAAIgDAAgEBrnAHbQltAAkmhLIgDAAQnBg4igAAIgDAAQiNgBh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl3jmAAlFIAAAAQABlCFujlQB3hKB9gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iZB9h9QA4g4A/grQC/iDD3AAQD2AAC/CDQA/ArA5A4QDIDLAbEQQDQhLD+AAIADAAQGXABEfC/QEgDBABEQIAAACIgBAXIAAACQgNDqjqCuIABAAIAtATIABAAQGACmAADpIAAACQgBDomAClIgCABQl/CkoeAAIgCAAgAhhk9Qh9ABhkgaIgBAAQiYgTg3AAIgCAAQgvAAgqgOIgCABQhnAoiDAAIgBAAQi1AAiAhPIgBgBQh/hOAAhvQAAhtB9hPQAogYApgQQgKgjABgmQAAhbBAhBQBAhBBagBQBaAAA/A7QAWgyAqgpQAUgUAWgPQBAgtBUAAQBUAABBAsQAWAQAUATQBEBEAJBdQBIgZBWAAQCKAABiBCQBjBCAABbIgBAJIAAADQgFBPhPA6IADABIANAFIACABQCBA4AABQIAAABQgCBPiBA4IgBAAQiDA3i3AAIgBAAg");
	this.shape_82.setTransform(380.55,68.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgaQixBHjhAAQk1AAjaiGQjbiGAAi9QAAi7DWiFQBFgrBIgbQgUg7AAhBQAAicBvhvQBuhvCcAAQCYAABtBpQAhhZBJhIQAgghAkgZQBwhMCPAAQCOAABvBMQAlAZAhAhQB1B1AOCfQB5gsCUAAQDuAACmBwQCoBvAACdQgHCYiIBlIAbALQDeBgABCIQgBCIjeBgQjgBgk7AAQjWAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiAhPgBhvQAAhuB+hOQApgZAqgQQgMgiAAgnQAAhbBChBQBAhBBcAAQBZAABAA9QATg0AsgqQATgTAUgPQBCgtBUAAQBUAABBAtQAWAPATATQBEBEAJBeQBHgaBXAAQCLAABjBCQBhBBAABcQgEBZhQA8QCTA+AABQQAABQiCA4QiEA4i5AAQh9AAhlgZgAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjciGAAi9QAAi7DWiGQBFgqBJgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBpQAhhZBJhHQAhghAkgZQBwhMCOAAQCQAABuBMQAlAZAgAhQB2B0APCeQB5gsCUAAQDsAACnBwQCoBwAACdQgICYiIBlIAbALQDgBgAACIQAACHjgBgQjfBgk8AAQjVAAirgsgEhJLAKQQluAAklhMIgCAAQnCg4igAAIgCAAQiNAAh8grIgCABQkxB4mBABIgGAAQoSgBl2jmIgEgCQl1jmAAlEQAAlDFwjlIAJgFQBthDB7gwIACgBQghhjAAhvIAAgEQAAkMC8i/IABgBQC+i+EMAAIACAAQEEAAC8CzIABABQA6iYB7h8IABgBQA3g3A9gqIAEgCQC+iEDzAAIADAAQD1AAC/CCIACACQA9AqA5A3IACACQDHDIAbEQIAAADQDQhLD9AAIADAAQGWAAEfC+IADACQEfDAABEPIAAACIAAAXIAAACQgMDrjpCuIgBABIAsASIABABQF/ClACDnIAAACQAADpl/ClIgCABQmACloeABIgCAAgEBrnAHbQluAAkmhLIgCAAQnBg4ihAAIgCAAQiNgBh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl3jmABlFQAAlDFujlQB4hJB8gwQgihkAAhxQAAkOC9i+QDAi/EMAAQEGAAC8C0QA5iYB8h9QA5g5A/gqQDAiED1AAQD3AADACDQA+ArA4A4QDJDKAaERQDRhLD+AAIADAAQGWAAEfDAQEhDBAAEQIAAACIAAAYIAAAAQgNDrjpCuIAAAAIAtATIABAAQGACmAADpIAAACQgBDnl/ClIgCABQmBClodAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiZgTg2AAIgCAAQgwAAgpgOIgCAAQhnApiDAAIgBAAQi1AAiAhPIgBgBQiAhOAAhuQAAhuB+hPQApgYAogQQgKgjAAgmQAAhcBAhAQBBhBBZgBQBbAAA/A6QAXgxApgpQAVgVAUgOQBCgtBTAAQBUAABBAsQAWAQAUATQBEBEAJBdQBHgZBXAAQCKAABhBBQBjBDAABbIAAAJIAAADQgGBOhOA7IACABIAOAFIACABQCAA4ABBPIAAACQgBBOiCA5IgBAAQiDA4i3AAIgBAAg");
	this.shape_83.setTransform(370.6,69.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgZQixBGjgABQk2AAjaiHQjbiFAAi+QAAi7DWiFQBFgrBIgbQgUg6AAhCQAAidBvhvQBuhuCcAAQCZAABsBpQAhhZBJhIQAgghAkgZQBwhMCPAAQCOAABwBMQAkAZAhAhQB1B1AOCeQB5grCUAAQDuAACnBwQCnBvAACeQgHCXiIBmIAbAKQDeBgAACIQAACIjeBgQjgBgk7AAQjWAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgPQhoAqiEAAQi1AAiBhPQiAhOgBhvQAAhuB+hPQApgYAqgRQgMgiAAgnQABhcBAhAQBChBBbAAQBZAABBA9QATg0ArgqQATgUAUgOQBCgtBUAAQBUAABBAtQAVAOAUAUQBEBEAJBdQBHgZBXAAQCLAABiBBQBjBCgBBdQgDBZhRA7QCTA/AABPQAABQiCA4QiEA5i5AAQh+AAhkgagAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjciGAAi9QAAi7DWiGQBGgqBIgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBoQAihYBIhIQAhggAkgZQBwhMCPAAQCPAABuBMQAlAZAhAgQB0B1AQCeQB4gsCUAAQDuAACmBwQCoBvAACeQgHCYiJBlIAcALQDeBgABCIQgBCHjeBgQjgBgk8AAQjUAAisgsgEhJKAKPQlvAAkkhLIgDAAQnCg4ihAAIgBAAQiNAAh8grIgCABQkxB4mBAAIgFAAQoSgBl3jlIgEgCQl1jnAAlDQAAlDFxjlIAIgFQBthDB7gwIADgCQghhigBhvIAAgFQAAkLC8i/IABgBQC+i9EMgBIACAAQEEAAC8CzIABABQA5iYB8h8IABgBQA3g3A9gqIAEgCQC+iED0AAIADAAQD0AAC/CCIADACQA8AqA5A3IACACQDHDIAbEQIAAADQDQhLD8AAIAEAAQGWgBEgC/IACACQEfDAABEPIAAACIAAAXIAAACQgNDqjoCuIgBABIAsASIACABQF+ClACDnIAAADQAADpl/ClIgBABQmBCloeAAIgBAAgEBrnAHbQluAAkmhLIgCAAQnBg4ihAAIgCAAQiNgBh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl3jmABlFQAAlCFujlQB4hKB8gwQgihkAAhxQAAkOC+i+QC/i/EMAAQEHAAC7C0QA5iYB8h+QA5g4A/grQDAiDD1AAQD3AADACDQA+AsA5A3QDIDKAaERQDRhLD+AAIADAAQGWAAEgDAQEhDBgBEQIAAACIAAAYIAAABQgNDqjpCuIABAAIAtATIABAAQF/CmAADpIAAACQgBDnl/CmIgDAAQl/ClofAAIgBAAgAhhk9Qh9ABhkgaIgBAAQiZgTg2AAIgCAAQgvAAgqgOIgCABQhnAoiDAAIgBAAQi1AAiAhPIgBgBQiAhOAAhvQAAhtB+hPQApgYAogQQgKgiAAgnQAAhbBAhBQBBhBBZgBQBbAAA/A6QAWgwAqgqQAUgUAWgPQBBgtBTAAQBUAABBAsQAWAQAUATQBEBEAJBeQBIgaBWAAQCKAABiBBQBiBDAABbIAAAJIAAADQgGBOhOA7IADABIANAFIACABQCBA4AABQIAAABQgCBPiBA3IgBAAQiCA4i4AAIgBAAg");
	this.shape_84.setTransform(360.6,69.75);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgZQixBHjgAAQk1AAjbiGQjbiHAAi9QAAi7DWiFQBFgqBIgcQgUg6AAhCQAAidBvhuQBuhvCcAAQCYAABtBoQAhhYBJhIQAgghAkgZQBwhMCPAAQCPAABvBMQAkAZAhAhQB1B1AOCeQB5grCUAAQDuAACnBwQCnBvAACeQgICXiHBmIAbALQDeBfAACIQAACIjeBgQjgBgk7AAQjVAAisgsgEBLJAdTQiagTg2AAQgxAAgqgOQhoApiEAAQi2AAiAhPQiBhPAAhuQABhuB9hPQApgZAqgQQgMgiAAgnQAAhbBBhBQBBhBBcAAQBaAABAA9QASg0AsgqQATgTAUgPQBDgtBTAAQBUAABBAtQAVAPAUATQBEBEAJBeQBHgaBXAAQCLAABiBBQBjBCgBBdQgDBYhQA8QCSA+AABQQAABQiCA4QiEA4i5AAQh+AAhkgZgAanVnQkGghhcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjbiGAAi9QAAi8DXiFQBFgqBIgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBoQAihYBIhIQAhggAkgZQBwhMCPgBQCOABBvBMQAlAZAhAgQB0B1APCeQB5gsCUAAQDuAACmBwQCoBvAACeQgHCXiIBmIAbALQDeBgABCHQgBCIjeBgQjgBgk8AAQjVAAirgrgEhJKAKPQluABkmhMIgCAAQnBg4iiAAIgBAAQiNAAh8grIgCABQkxB4mBAAIgFAAQoTgBl1jlIgFgCQl0jmgBlDIAAgBQAAlDFxjlIAIgFQBthDB8gwIACgBQghhjgBhvIAAgEQAAkMC9i/IABgBQC+i+ELAAIACAAQEFAAC7CzIABABQA6iYB7h8IABgBQA3g3A+gqIADgCQC+iED0AAIADAAQD1AAC+CCIADACQA9ApA5A4IABACQDIDIAaEQIABADQDPhLD9AAIADAAQGWAAEgC+IACACQEgDAAAEOIAAADIAAAXIAAACQgMDqjoCvIgCABIAsASIACAAQF/ClABDnIAAACQAADql/ClIgBABQmBClodAAIgCAAgEBrnAHbQluAAklhLIgDAAQnBg5igAAIgDAAQiMAAh8gqQkxB5mCAAIgCAAQoUAAl5jmIgBgCQl2jlAAlFQAAlDFujlQB4hJB8gwQgihkAAhxQAAkOC+i+QC/i/ENAAQEFAAC8C0QA5iZB9h9QA4g4A/grQDAiDD2AAQD2AADACDQA+ArA5A4QDJDLAZERQDRhMD+AAIADAAQGWABEgDAQEhDAAAEQIAAACIgBAXIAAABQgNDrjqCuIACAAIAtATIABAAQF/CmAADpIAAACQgBDnl/CmIgCABQmACkoeAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgTg3AAIgBAAQgwgBgqgOIgBACQhoAoiDAAIgBAAQi1AAiAhPIgBgBQiAhOAAhvQAAhtB+hPQAogYApgPQgKgkABgmQgBhcBBhAQBBhABYgCQBcAAA+A7QAXgyApgpQAUgVAWgOQBBgsBTgBQBUAABBAsQAWAPAUAUQBEBEAJBdQBIgZBWAAQCLAABhBCQBjBCAABbIgBAJIAAADQgFBPhOA6IACABIANAFIACABQCBA4AABQIAAACQgCBOiBA4IgBAAQiDA4i3AAIgBAAg");
	this.shape_85.setTransform(350.6,70.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGAAi+QAAi7DWiFQBFgqBIgcQgUg6AAhCQAAicBvhvQBuhvCcAAQCZAABsBpQAhhZBIhIQAighAjgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCfQB5gsCTAAQDuAACmBwQCoBvAACeQgHCXiIBmIAbALQDfBgAACHQAACIjfBgQjgBgk8AAQjUAAisgsgEBLJAdTQiagTg2AAQgwAAgrgOQhoApiEAAQi2AAiAhPQiAhOAAhvQgBhuB/hPQAogYAqgQQgMgjABgnQAAhbBBhBQBBhBBbAAQBZAABAA9QAUg0AqgqQATgTAWgPQBBgtBUAAQBUAABBAtQAVAPAUATQBFBEAIBeQBHgaBXAAQCLAABjBCQBiBBAABdQgFBZhQA7QCTA/AABQQAABPiDA5QiDA4i5AAQh9AAhlgagAanVnQkFghheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGAAi9QgBi7DWiGQBFgqBJgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABtBpQAhhZBIhHQAhghAkgZQBwhMCOAAQCPAABwBMQAkAZAgAhQB2B0APCeQB5gsCUAAQDsAACoBwQCnBwAACdQgICYiIBlIAbALQDgBggBCIQABCHjgBgQjfBgk8AAQjUAAisgrgEhJLAKQQltAAklhMIgCAAQnDg4igAAIgBAAQiPAAh8grIgBABQkxB4mCABIgEAAQoTgBl2jmIgEgCQl1jmAAlEQAAlDFxjlIAIgFQBthDB7gwIADgBQgihjAAhvIAAgEQAAkMC8i/IACgBQC+i9ELgBIACAAQEFAAC7CzIACABQA5iYB7h8IABgBQA3g3A+gqIACgCQC/iDDzgBIAEAAQD0AAC/CCIACACQA+AqA4A3IACACQDHDIAcEQIAAADQDOhLD+AAIACAAQGXAAEfC+IADACQEfDAABEPIAAACIAAAXIAAACQgMDrjpCuIgCABIAsASIACABQGAClABDnIAAACQAADpl/ClIgCABQmACloeABIgCAAgEBrnAHbQluAAkmhLIgDAAQnAg4ihAAIgDAAQiMgBh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl3jmAAlFQAAlDFvjlQB3hJB9gwQgihkAAhxQAAkOC9i+QDAi/EMAAQEHAAC7C0QA5iYB8h9QA6g5A+gqQC/iED2AAQD3AADACDQA+ArA4A4QDJDKAaERQDRhLD/AAIACAAQGWABEgC/QEgDBAAEQIAAACIAAAYIAAAAQgNDrjpCuIAAAAIAtATIABAAQGACmAADpIAAACQgBDnmAClIgBABQmBClodAAIgCAAgAhhk8Qh9AAhkgaIgBAAQiYgTg3AAIgCAAQgwAAgpgOIgCAAQhnApiDAAIgBAAQi1AAiAhPIgBgBQh/hOgBhuQABhuB9hPQApgYAogQQgKgjAAgmQABhcA/hAQBBhBBZgBQBbAAA/A6QAXgxApgpQAVgUAUgPQBBgsBUgBQBUAABBAsQAWAQAUATQBEBEAJBdQBHgZBXAAQCLAABhBBQBiBDAABbIAAAJIAAADQgGBOhOA7IACABIAOAFIACABQCBA4AABPIAAACQgBBOiCA5IgBAAQiCA4i4AAIgBAAg");
	this.shape_86.setTransform(340.65,71.175);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgZQixBGjhABQk1AAjaiGQjbiHAAi9QAAi7DWiFQBFgqBIgcQgUg6AAhCQAAidBvhvQBuhuCcAAQCZAABsBoQAhhYBIhIQAhghAkgZQBwhMCPAAQCOAABvBMQAlAZAhAhQB0B0APCfQB5grCUAAQDuAACmBwQCoBvAACeQgHCXiIBmIAbAKQDeBgABCIQgBCIjeBgQjgBgk8AAQjVAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgPQhoAqiEAAQi2AAiAhPQiAhOAAhvQgBhuB/hPQAogYAqgRQgMgiAAgnQAAhcBChAQBAhBBcAAQBZAABAA9QAUg0AqgqQATgTAVgPQBCgtBUAAQBUAABBAtQAWAPATATQBFBEAIBeQBHgaBXAAQCLAABjBBQBiBCAABdQgFBYhQA8QCTA/AABPQAABQiDA4QiDA4i5ABQh9AAhlgagAanVmQkFggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiGgBi9QAAi8DWiFQBFgqBJgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABtBoQAghYBJhIQAhggAkgZQBwhMCOgBQCQABBuBMQAlAZAgAgQB2B1APCeQB5gsCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbALQDgBggBCHQABCIjgBgQjfBgk8AAQjUAAisgsgEhJLAKPQluABkkhMIgCAAQnDg4igAAIgBAAQiPAAh8grIgBABQkxB4mBAAIgFAAQoTgBl2jlIgEgCQl1jnAAlDQAAlDFxjlIAIgFQBthDB7gwIADgBQgihjAAhvIAAgEQAAkMC8i/IABgBQC/i9ELgBIACAAQEEAAC8CzIABABQA6iYB7h8IABgBQA3g3A+gqIADgCQC+iEDzAAIADAAQD1AAC/CCIACACQA9ApA5A4IACACQDHDIAcEQIAAADQDOhLD+AAIACAAQGXAAEfC+IADACQEfDAABEOIAAADIAAAXIAAACQgNDqjoCvIgCAAIAtATIABAAQF/ClACDnIAAACQAADql/ClIgCABQl/ClofAAIgCAAgEBrnAHbQluAAkmhLIgDAAQnAg4ihAAIgDAAQiMgBh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl3jmAAlFQABlCFujlQB3hKB9gwQgihkAAhxQAAkOC9i+QDAi/EMAAQEHAAC7C0QA5iZB8h9QA6g4A+grQC/iDD2AAQD3AADACDQA+ArA4A4QDJDLAaEQQDRhLD/AAIACAAQGWABEgC/QEgDBAAEQIAAACIAAAXIAAACQgNDqjpCuIABAAIAtATIABAAQF/CmAADpIAAACQgBDol/ClIgCABQmBCkodAAIgCAAgAhhk9Qh9ABhkgaIgBAAQiYgTg3AAIgCAAQgwAAgpgOIgCABQhnAoiDAAIgBAAQi1AAiAhPIgBgBQh/hOgBhvQAAhtB+hPQApgYAogQQgKgjAAgmQABhbA/hBQBBhBBZgBQBbAAA/A6QAXgwApgqQAVgUAUgPQBCgtBTAAQBUAABBAsQAWAQAUATQBEBEAJBdQBHgZBXAAQCLAABhBCQBiBCAABbIAAAJIAAADQgGBPhOA6IADABIANAFIACABQCBA4AABQIAAABQgBBPiCA4IgBAAQiDA3i3AAIgBAAg");
	this.shape_87.setTransform(330.65,71.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("EgeYAiKQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjaiGQjbiHAAi9QAAi7DWiFQBFgqBIgcQgUg7AAhBQAAidBvhuQBuhvCcAAQCYAABtBoQAhhYBJhIQAgghAkgZQBwhMCPAAQCOAABwBMQAkAZAhAhQB1B1AOCfQB5gsCUAAQDuAACmBwQCoBvAACdQgHCYiIBmIAbALQDeBgABCHQgBCIjeBgQjgBgk7AAQjWAAirgsgEBLJAdTQiZgTg3AAQgxAAgqgOQhoApiEAAQi2AAiAhPQiAhPgBhuQAAhvB+hOQApgZAqgQQgMgiAAgnQAAhbBChBQBAhBBcAAQBZAABAA9QATg0AsgqQATgTAUgPQBCgtBUAAQBUAABBAtQAWAPATATQBEBEAJBeQBHgaBXAAQCLAABjBBQBhBCAABdQgEBYhQA8QCTA+AABQQAABQiCA4QiEA4i5AAQh9AAhlgZgAanVnQkFghheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjciGAAi+QAAi6DWiGQBFgqBJgcQgUg6AAhCQAAicBvhuQBthvCdAAQCYAABsBoQAhhYBJhIQAhggAkgZQBwhMCOgBQCQABBuBMQAlAZAgAgQB2B0APCfQB5gsCUAAQDsAACnBwQCoBvAACeQgICXiIBmIAbALQDgBgAACHQAACIjgBgQjfBgk8AAQjVAAirgrgEhJKAKPQlvABkkhMIgDAAQnCg4igAAIgCAAQiNAAh8grIgCABQkxB4mBAAIgGAAQoSgBl2jlIgEgCQl1jmAAlEQAAlDFxjlIAIgFQBthDB7gwIADgBQgihjAAhvIAAgEQAAkMC8i/IABgBQC+i+EMAAIACAAQEEAAC8CzIABABQA6iYB7h8IABgBQA3g3A9gqIAEgCQC+iDDzgBIADAAQD1AAC/CCIACACQA9AqA5A3IACACQDHDHAbERIAAADQDQhLD9gBIADAAQGWAAEfC/IADACQEfDAABEOIAAACIAAAYIAAACQgNDqjoCvIgBABIAsASIABABQF/ClACDmIAAACQAADql/ClIgCABQl/ClofAAIgBAAgEBrnAHbQluAAkmhLIgCAAQnBg5ihAAIgCAAQiNAAh7gqQkxB5mDAAIgBAAQoUAAl5jnIgBgBQl3jlABlFQAAlDFujlQB4hJB8gwQgihkAAhxQAAkOC9i+QDAi/EMAAQEHAAC7C0QA5iZB8h9QA5g4A/grQC/iDD2AAQD3AADACDQA+ArA4A4QDJDLAaERQDRhMD/AAIACAAQGXABEfDAQEgDBAAEPIAAACIAAAXIAAABQgNDrjpCuIABAAIAtATIABAAQF/CmAADpIAAACQgBDnl/CmIgDABQl/CkoeAAIgCAAgAhhk8Qh9gBhkgZIgBAAQiZgTg2AAIgCAAQgwgBgpgOIgCABQhnApiDAAIgBAAQi1gBiAhOIgBgBQiAhOAAhvQAAhuB+hOQApgYAogPQgKgkAAgmQAAhbBAhBQBBhABZgCQBbAAA/A6QAXgxApgpQAVgVAUgOQBCgsBTgBQBUAABBAsQAWAPAUAUQBEBEAJBdQBHgZBXAAQCLABBhBBQBiBCAABbIAAAJIAAADQgGBPhOA6IADABIANAFIACABQCBA4AABQIAAACQgBBOiCA4IgBAAQiCA4i4AAIgBAAg");
	this.shape_88.setTransform(320.65,72.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("EgeYAiKQkFggheAAQhSAAhIgaQixBHjhABQk0AAjbiHQjbiFAAi+QAAi7DWiFQBFgrBIgbQgUg6AAhCQAAidBvhvQBuhuCdAAQCXAABtBpQAhhZBIhIQAighAjgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB0B1AQCeQB5grCUAAQDsAACoBwQCnBvAACeQgICXiIBmIAbAKQDgBggBCIQABCIjgBgQjfBgk8AAQjUAAisgsgEBLJAdTQiagTg2AAQgxAAgqgPQhoAqiEAAQi1AAiBhPQiBhOABhvQAAhuB+hPQAogYAqgRQgLgiAAgnQgBhcBChAQBBhBBbAAQBZAABAA9QAUg0AqgqQAUgUAVgOQBCgtBTAAQBUAABBAtQAWAOATAUQBEBEAJBeQBIgaBWAAQCLAABiBBQBiBCABBcQgFBahPA7QCSA/AABPQAABQiDA4QiDA5i5AAQh+AAhkgagAanVmQkGgghcAAQhTAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi7DWiGQBEgqBJgcQgUg6AAhCQAAicBuhvQBuhuCdAAQCYAABtBoQAghYBJhIQAhggAkgZQBwhMCPAAQCPAABvBMQAkAZAgAgQB2B1AOCeQB5gsCUAAQDtAACoBwQCnBvAACeQgICYiHBlIAbALQDeBgAACIQAACHjeBgQjgBgk7AAQjVAAisgsgEhJLAKPQltAAkmhLIgBAAQnCg4iiAAIAAAAQiOAAh9grIgCABQkwB4mCAAIgEAAQoTgBl2jlIgEgCQl1jnAAlDQAAlDFxjlIAIgFQBthDB7gwIADgBQghhigBhwIAAgEQAAkMC9i/IABgBQC9i9EMgBIACAAQEFAAC8CzIABABQA4iYB8h8IABgBQA3g3A+gqIACgCQC/iEDzAAIAEAAQD0AAC+CCIADACQA+AqA4A3IACACQDHDIAcEQIAAADQDOhLD9AAIADAAQGWgBEgC/IADACQEfDAABEPIAAACIAAAXIAAACQgNDqjnCuIgDABIAsASIACABQGAClABDnIAAADQAADpl+ClIgDABQl/CloeAAIgDAAgEBrnAHbQluAAklhLIgEAAQnAg4igAAIgEAAQiMgBh7gqQkxB5mDAAIgBAAQoUAAl5jmIgBgBQl2jmgBlFQAAlCFvjlQB3hKB9gwQgihkAAhxQAAkOC9i+QDAi/ENAAQEFAAC8C0QA5iYB9h+QA5g4A+grQC/iDD3AAQD2AAC/CDQA/AsA4A3QDJDKAbERQDQhLD+AAIADAAQGXAAEfDAQEgDBAAEQIAAACIAAAYIAAABQgNDqjqCuIABAAIAtATIABAAQGACmAADpIAAACQgBDnmACmIgBABQmACkofAAIgBAAgAhhk9Qh9ABhkgaIgBAAQiZgTg2AAIgCAAQgwAAgpgOIgCABQhnAoiDAAIgBAAQi1AAiAhPIgBgBQh/hOAAhvQAAhtB9hPQAogYApgQQgKgiABgnQAAhbBAhBQBAhBBZgBQBbAAA/A6QAWgwAqgqQAVgUAVgPQBAgtBUAAQBUAABBAsQAWAQAUATQBEBEAJBeQBHgaBXAAQCKAABiBBQBiBDABBcIgBAIIAAADQgFBOhPA7IADABIANAFIACABQCBA4AABQIAAABQgCBPiBA3IgBAAQiCA4i4AAIgBAAg");
	this.shape_89.setTransform(310.7,73.35);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("EgeYAiKIABAAQkGggheAAQhSAAhIgZQixBHjhAAQk1AAjaiGQjbiHAAi9QAAi7DWiFIAFgDQBAgoBIgbQgUg6AAhCQAAidBvhvQBuhuCdAAQCYAABsBoQAhhYBIhIQAighAjgZQBwhMCOAAQCQAABuBMQAlAZAhAhQB1B1APCeQB5grCUAAQDsAACnBwQCoBvAACeIAAAPQgICIiIBmIAbALQDgBfAACIQAACIjgBgQjfBgk8AAQjVAAirgsgEBLJAdTIAAAAQiZgTg3AAQgwAAgrgOQhoApiEAAQi1AAiBhPQiBhPABhuQgBhuB/hPIACgBQAmgYAqgQQgLgiAAgnQAAhbBBhBQBBhBBbAAQBaAAA/A9QAUg0AqgqQAUgTAVgPQBCgtBTAAQBUAABBAtQAVAPAUATQBFBEAIBeQBIgaBWAAQCLAABjBBQBhBCABBdIAAAIQgFBQhQA8IAQAGQCDA5AABPQAABQiDA4QiDA4i5AAQh+AAhkgZgAanVnIABAAQkHghhdAAQhSAAhIgZQixBHjhAAQk1AAjbiGQjaiGAAi9QAAi8DViFIAFgDQBAgnBJgcQgUg6AAhCQAAicBuhuQBvhvCcAAQCYAABtBoQAhhYBIhIQAhggAkgZQBwhMCOgBQCPABBwBMQAkAZAgAgQB2B1AOCeQB6gsCUAAQDsAACoBwQCnBvAACeIgBAPQgGCJiJBlIAbALQDfBgAACHQAACIjfBgQjfBgk7AAQjVAAisgrgEhTfAJEQnEg4igAAQiPAAh8grQkwB5mEAAQoVAAl4jmQl5jnAAlFQAAlDFxjlIAIgFQBvhEB8gwQgihkAAhyQAAkNC+i/QC+i+ENAAQEGAAC8C0QA4iYB9h9QA5g5A+gqQDAiED2AAQD2AAC/CEQA/AqA5A5QDJDJAaESQDPhLD/AAQGYAAEhDAQEgDAAAERIAAAZQgMDrjrCvIAuATQGBClAADoQAADrmBClQmAClogAAQluABkmhMgEBhUAGQQnEg5igAAQiOAAh9gqQkxB5mDAAQoVAAl5jmQl3jngBlFQAAlDFwjmIAIgEQBuhEB9gwQgihkAAhyQAAkNC+i/QC/i+EMAAQEHAAC7C0QA5iZB9h9QA5g4A+grQC/iDD2AAQD3AAC/CDQA/ArA4A4QDKDKAaESQDPhMEAAAQGYAAEgDBQEgDAAAEQIAAAZQgNDsjpCuIAtATQGBClAADqQAADpmBCmQmAClogAAQlvAAklhLgAlClWQiZgTg3AAQgwAAgrgPQhoAqiEAAQi2AAiAhPQiAhPAAhvQAAhtB9hPIADgCQAmgXAqgPQgMgjAAgnQAAhbBChBQBAhBBcAAQBZAABAA9QATg0ArgqQAUgUAUgOQBCgtBUAAQBUAABBAtQAVAOAUAUQBEBEAJBdQBHgZBXAAQCKAABiBCQBiBBABBcIgBAJQgEBRhQA7IAQAGQCDA4AABRQAABPiDA5QiDA3i4AAQh9ABhlgag");
	this.shape_90.setTransform(300.7,74.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},119).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A7ae0IABAAQjtgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4IAFgDQA5gjBBgZQgRg1gBg8QABiMBjhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAhAXAdAdQBpBpAOCQQBtgoCGAAQDVAACXBlQCXBlAACOIAAAOQgHB7h6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQhdAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHIACgCQAjgVAmgOQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTIgBAIQgDBIhIA1IAOAHQB3AzgBBHQABBJh3AyQh2AzinAAQhxAAhbgYgAYATgIABAAQjtgehTAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4IAEgDQA6gjBCgaQgTg0ABg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOIAAAOQgHB7h7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoIABAAQmYgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPIAGgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFbCVAADTQAADSlbCVQlaCWnrAAQlLgBkKhEgAkjk0IAAAAQiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGIADgCQAjgVAlgOQgLgfAAgjQAAhTA8g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTIAAAIQgDBIhJA2IAPAFQB1AzABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape.setTransform(1194.5,141.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCXBlABCOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABgmgNQhdAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjsgehUAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQABkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQA0gzA4gmQCth3DdAAQDfAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEECtQEECuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA7g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_1.setTransform(1187.8,141.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1AAg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCXBlABCOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDeAACtB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBaA8gBBTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_2.setTransform(1181.15,141.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh3AAQikAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA9A+AJBUQBAgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBjhjCOAAQCJgBBhBeQAehPBChBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFcCWgBDRQABDUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiSAAQiAAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_3.setTransform(1174.45,141.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhBgWQifA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQikAAh0hHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjFh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmXgyiRAAQh/AAhxgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8AABTQgFBQhIA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_4.setTransform(1167.8,141.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBjhjCOAAQCJAABhBfQAehRBChBQAegdAggXQBkhFCBAAQCCAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiLgQgxgBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AIBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCNAAQCKgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiAAAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAyAzQC2C2AXD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCFA4AABIQgBBIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_5.setTransform(1161.1,141.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QAAiMBkhlQBkhjCNAAQCJAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAhAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCXBlAACOQgHCJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQABBJh3AyQh2AzinAAQhxAAhbgYgAYATgQjsgehTAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0AAg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkdAAQjAAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBrhCBwgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_6.setTransform(1154.45,141.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQABkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC1C2AYD2QC8hDDmAAQFwAAEECtQEECuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA6gmQCsh3DeAAQDfAACsB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_7.setTransform(1147.75,141.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQikAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA7g7BSABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBMAAA6ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYATgQjsgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0AAg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAibgngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlUjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_8.setTransform(1141.05,141.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh2AAQilAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBjhjCOAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFbCWAADRQAADUlbCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiAAAhxgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_9.setTransform(1134.4,141.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1AAg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAiAXAdAdQBqBpANCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkXABjGh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBjhjCMAAQCKgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjQgBklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQh/AAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACsB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCFA4AABIQAABIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_10.setTransform(1127.7,141.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCNAAQCJAABhBfQAehRBChBQAegdAggXQBkhFCCAAQCBAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBugoCFAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQAAhTA8g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQATAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCFA4AABIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_11.setTransform(1121.05,141.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkXAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCNAAQCKAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCBAABkBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQhdAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQAUANARARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBX0AFoQmYgyiRAAQh/AAhxgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIAqARQFbCVgBDTQABDSlbCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8gBBTQgEBQhIA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_12.setTransform(1114.35,141.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QABiMBjhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAhAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCXBlAACOQgHCJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiLgQgxgBQgrABgngNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFbCVAADTQAADSlbCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_13.setTransform(1107.65,141.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehTAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0gBg7QABiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFbCVAADTQAADSlbCVQlbCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQAABIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_14.setTransform(1101,141.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh4AAQikAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BUABQBQAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBMAAA6ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgRg0AAg7QgBiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQh/AAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDfAACsB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBMAAA7AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBZA8AABTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_15.setTransform(1094.3,141.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1gBg8QABiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAiAXAdAdQBqBpANCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh4AAQijAAh0hHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkXABjGh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCNAAQCKgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiAAAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBMAAA7AoQASAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_16.setTransform(1087.65,141.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhBgWQifA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBqBpANCQQBtgoCGAAQDWAACWBlQCXBlAACOQgHCJh6BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQilAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkXABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QABiOBjhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmWgyiSAAQh/AAhxgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC1C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlbCWnrAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8AABTQgFBQhIA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_17.setTransform(1080.95,141.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkXAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCNAAQCKAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCBAABjBFQAhAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQAAhTA6g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjsgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DdAAQDfAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFbCVgBDTQABDSlbCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8AABTQgFBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_18.setTransform(1074.3,141.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAhAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCXBlABCOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiLgQgxgBQgsABglgNQhfAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBMAAA6ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQABBJh3AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0AAg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDsAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFbCVABDTQgBDSlbCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_19.setTransform(1067.6,141.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCXBlABCOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABgmgNQhdAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5AABIQgBBJh2AyQh2AzinAAQhxAAhbgYgAYATgQjsgehUAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkcAAQjBAAibgngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQAAklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC1C2AYD2QC8hDDmAAQFwAAEECtQEECuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDfAACsB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIApARQFbCVAADTQAADSlbCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_20.setTransform(1060.9,141.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1AAg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BTABQBRAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0AAg7QAAiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDeAACtB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_21.setTransform(1054.25,141.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh2AAQilAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFbCWAADRQAADUlbCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiSAAQh/AAhxgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_22.setTransform(1047.55,141.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkXABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBjhjCNAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmWgyiSAAQh/AAhxgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmAzAzQC1C2AYD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8AABTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_23.setTransform(1040.9,141.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCNAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCBAAQCCAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiLgQgxgBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AIBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILQmXgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiAAAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA7g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCEA4ABBIQAABIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_24.setTransform(1034.2,141.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDVAACXBlQCXBlAACOQgHCJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0AAg7QAAiOBkhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBrhCBwgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFcCVgBDTQABDSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA7g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_25.setTransform(1027.55,141.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkYAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCXBlABCOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQABBJh3AyQh2AzinAAQhxAAhbgYgAYATgQjrgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkdAAQjAAAibgngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQABkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQA0gzA4gmQCth3DdAAQDfAACtB3QA4AmAzAzQC1C2AYD2QC8hDDmAAQFwAAEECtQEECuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA6gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_26.setTransform(1020.85,141.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BTABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQAABIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_27.setTransform(1014.15,141.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh2AAQilAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBjhjCOAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFbCWAADRQAADUlbCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACuB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBZA8AABTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_28.setTransform(1007.5,141.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAiAXAdAdQBqBpANCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkXABjFh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCNAAQCKgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjQgBklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWAADRQAADUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiAAAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACsB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCFA4AABIQAABIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_29.setTransform(1000.8,141.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBjhjCOAAQCJAABhBfQAehRBChBQAegdAggXQBkhFCBAAQCCAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQhfAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCOAAQCJgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiAAAhxgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQAAhTA8g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCFA4AABIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_30.setTransform(994.15,141.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkXAAjFh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCNAAQCKAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCBAABjBFQAhAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABgmgNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQAUANARARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DdAAQDfAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFbCVgBDTQABDSlbCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8AABTQgFBQhIA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_31.setTransform(987.45,141.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAhAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCXBlAACOQgHCJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQhdAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQABBJh3AyQh2AzinAAQhxAAhbgYgAYATgQjsgehTAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0AAg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFbCVAADTQAADSlbCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_32.setTransform(980.75,141.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhBgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQikAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0AAg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACuB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFbCVAADTQAADSlbCVQlbCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQAABIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_33.setTransform(974.1,141.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1AAg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDfAACsB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBMAAA7AoQASAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBaA8gBBTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_34.setTransform(967.4,141.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAiAXAdAdQBqBpANCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQikAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkXABjGh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCNAAQCKgBBhBeQAfhPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjQgBklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiAAAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDfAACtB3QA4AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCFA4AABIQAABIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_35.setTransform(960.75,141.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhBgWQifA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgHCJh6BbIAYALQDJBWABB6QgBB6jJBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQikAAh0hHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjFh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmXgyiRAAQh/AAhxgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA7AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8AABTQgEBQhJA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_36.setTransform(954.05,141.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkXAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCNAAQCKAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCBAABkBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjsgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DdAAQDfAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmXgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC1C2AYD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIAqARQFbCVgBDTQABDSlbCVQlbCWnrAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8gBBTQgEBQhIA2QCFA4gBBIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_37.setTransform(947.4,141.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QAAiMBkhlQBkhjCNAAQCJAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAhAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCXBlAACOQgHCJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQABBJh3AyQh2AzinAAQhxAAhbgYgAYATgQjsgehTAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkdAAQjAAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDsAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBrhCBwgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_38.setTransform(940.7,141.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCXBlABCOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQABkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC1C2AYD2QC8hDDmAAQFwAAEECtQEECuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA6gmQCsh3DeAAQDfAACsB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_39.setTransform(934,141.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1AAg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh4AAQikAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BTABQBRAAA5A3QASgwAmgmQASgRATgNQA7gpBMAAQBLAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQh/AAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDeAACtB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBMAAA7AoQASAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBaA8gBBTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_40.setTransform(927.35,141.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh2AAQilAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBiBeQAdhPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFbCWAADRQAADUlbCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiAAAhxgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4AABIQAABIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_41.setTransform(920.65,141.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhBgWQifA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgHCJh6BbIAYALQDJBWABB6QgBB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjFh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmWgyiSAAQh/AAhxgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC1C2AYD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlbCWnrAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA7AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8AABTQgEBQhJA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_42.setTransform(914,141.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCNAAQCJAABhBfQAehRBChBQAegdAggXQBkhFCCAAQCBAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBugoCFAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQAAhTA8g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQATAOASARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCFA4AABIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_43.setTransform(907.3,141.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkXAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCNAAQCKAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCBAABkBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQAUANARARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DdAAQDfAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBX0AFoQmYgyiRAAQh/AAhxgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_44.setTransform(900.6,141.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCBAABjBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDXAACWBlQCXBlABCOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQhfAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQABkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQgBhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_45.setTransform(893.95,141.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehTAAQhLAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFbCVAADTQAADSlbCVQlbCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_46.setTransform(887.25,141.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh3AAQikAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBiBeQAdhPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFbCWABDRQgBDUlbCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiSAAQiAAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACuB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_47.setTransform(880.6,141.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1gBg8QABiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAiAXAdAdQBqBpANCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh4AAQijAAh0hHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkXABjFh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCNAAQCKgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjQgBklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiAAAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCFA4AABIQAABIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_48.setTransform(873.9,141.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCNAAQCJAABhBfQAehRBChBQAegdAggXQBkhFCCAAQCBAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQhfAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AIBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBugoCFAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiAAAhxgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA7g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQATAOASARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCFA4AABIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_49.setTransform(867.25,141.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkXAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCNAAQCKAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCBAABjBFQAhAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQAAhTA6g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjsgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DdAAQDfAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFbCVgBDTQABDSlbCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8AABTQgFBQhIA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_50.setTransform(860.55,141.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkXAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDVAACXBlQCXBlABCOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiLgQgxgBQgsABglgNQhfAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBMAAA6ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQABBJh3AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0AAg7QAAiOBkhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA5gmQCsh3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFbCVABDTQgBDSlbCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_51.setTransform(853.85,141.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQikAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBMAAQBMAAA6ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_52.setTransform(847.2,141.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1AAg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BTABQBRAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDeAACtB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBPAAQB8AABYA7QBaA8gBBTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_53.setTransform(840.5,141.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAiAXAdAdQBqBpANCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkXABjFh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCNAAQCKgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQh/AAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAygzA6gmQCsh3DeAAQDfAACtB3QA4AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCFA4AABIQAABIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_54.setTransform(833.85,141.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjFh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmWgyiSAAQh/AAhxgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBZA8AABTQgEBQhJA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_55.setTransform(827.15,141.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCBAAQCCAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiLgQgxgBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AIBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCOAAQCJgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBugoCFAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiAAAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA7g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCFA4AABIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_56.setTransform(820.45,141.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDVAACXBlQCXBlAACOQgHCJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjsgehTAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0AAg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBrhCBwgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFcCVgBDTQABDSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA7g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_57.setTransform(813.8,141.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkYAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCXBlABCOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQABBJh3AyQh2AzinAAQhxAAhbgYgAYATgQjsgehUAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQABkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC1C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA6gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_58.setTransform(807.1,141.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1AAg8QAAiMBkhlQBihjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh4AAQikAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQh/AAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDeAACtB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOARARQA+A+AIBUQBAgXBPAAQB8AABYA7QBaA8gBBTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_59.setTransform(800.45,141.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh2AAQilAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACuB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_60.setTransform(793.75,141.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1gBg8QABiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAiAXAdAdQBqBpANCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkXABjGh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCNAAQCKgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjQgBklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiAAAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACsB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCFA4AABIQAABIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_61.setTransform(787.05,141.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCNAAQCJAABhBfQAehRBChBQAegdAggXQBkhFCBAAQCCAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQhfAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBugoCFAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiAAAhxgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQAAhTA8g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCFA4AABIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_62.setTransform(780.4,141.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkXAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCNAAQCKAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCBAABjBFQAhAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQhdAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQAUANARARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjsgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFbCVgBDTQABDSlbCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_63.setTransform(773.7,141.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDXAACWBlQCXBlABCOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABgmgNQhdAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYBTgQjsgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAiagngEhLWAILQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQABkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC1C2AYD2QC8hDDmAAQFwAAEECtQEECuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_64.setTransform(767.05,141.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0AAg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACuB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFbCVAADTQAADSlbCVQlbCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQAABIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_65.setTransform(760.35,141.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh3AAQikAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFbCWAADRQAADUlbCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiSAAQiAAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_66.setTransform(753.7,141.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAiAXAdAdQBqBpANCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQikAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkXABjGh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCNAAQCKgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiAAAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDfAACtB3QA4AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCFA4AABIQAABIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_67.setTransform(747,141.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhBgWQifA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgHCJh6BbIAYALQDJBWABB6QgBB6jJBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQikAAh0hHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjFh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QABiOBjhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmXgyiRAAQh/AAhxgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA7AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8AABTQgEBQhJA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_68.setTransform(740.3,141.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkXAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCNAAQCKAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCBAABkBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjsgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DdAAQDfAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmXgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC1C2AYD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIAqARQFbCVgBDTQABDSlbCVQlbCWnrAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8gBBTQgEBQhIA2QCFA4gBBIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_69.setTransform(733.65,141.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAhAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCXBlAACOQgHCJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQABBJh3AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBrhCBwgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_70.setTransform(726.95,141.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQikAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA7g7BSABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBMAAA6ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehTAAQhLAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0gBg7QABiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQAABIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_71.setTransform(720.3,141.9);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1AAg8QAAiMBkhlQBihjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh4AAQikAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BTABQBRAAA5A3QASgwAmgmQASgRATgNQA7gpBMAAQBLAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuABD1IgBAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQh/AAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDeAACtB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBMAAA7AoQASAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBaA8gBBTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_72.setTransform(713.6,141.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh2AAQilAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBiBeQAdhPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBxhxQAzgzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFbCWAADRQAADUlbCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiAAAhxgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4AABIQAABIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_73.setTransform(706.9,141.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhBgWQifA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgHCJh6BbIAYALQDJBWABB6QgBB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjFh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmWgyiSAAQiAAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC1C2AYD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlbCWnrAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8AABTQgEBQhJA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_74.setTransform(700.25,141.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCNAAQCJAABhBfQAehRBChBQAegdAggXQBkhFCCAAQCBAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBugoCFAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiAAAhxgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQAAhTA8g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQATAOASARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCFA4AABIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_75.setTransform(693.55,141.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAhAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCXBlABCOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiLgQgxgBQgrABgngNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0AAg7QAAiOBkhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFbCVAADTQAADSlbCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_76.setTransform(686.9,141.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCXBlABCOQgHCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQhfAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjsgehUAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQABkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQA0gzA4gmQCth3DdAAQDfAACtB3QA4AmAzAzQC1C2AYD2QC8hDDmAAQFwAAEECtQEECuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQgBhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_77.setTransform(680.2,141.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1AAg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh4AAQikAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BUABQBQAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQh/AAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDfAACsB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBPAAQB8AABYA7QBaA8gBBTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_78.setTransform(673.55,141.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh3AAQikAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBiBeQAdhPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFbCWAADRQAADUlbCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiSAAQiAAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACuB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_79.setTransform(666.85,141.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAiAXAdAdQBqBpANCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQijAAh0hHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkXABjFh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCNAAQCKgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjQgBklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBX0AFoQmYgyiQAAQiAAAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCFA4AABIQAABIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_80.setTransform(660.15,141.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCNAAQCJAABhBfQAehRBChBQAegdAggXQBkhFCBAAQCCAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQhfAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AIBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBugoCFAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILQmXgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiAAAhxgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA7g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQATAOASARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCFA4AABIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_81.setTransform(653.5,141.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkXAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCNAAQCKAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCBAABjBFQAhAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQheAlh2AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjsgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFbCVgBDTQABDSlbCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8AABTQgFBQhIA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_82.setTransform(646.8,141.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCXBlABCOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABgmgNQhdAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA9A+AIBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5AABIQgBBJh2AyQh2AzinAAQhxAAhbgYgAYATgQjsgehUAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQABkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEECtQEECuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDfAACsB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_83.setTransform(640.15,141.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhBgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA7g7BSABQBRAAA6A3QARgwAmgmQASgRATgNQA7gpBMAAQBMAAA6ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_84.setTransform(633.45,141.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQilAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBjhjCOAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFbCWAADRQAADUlbCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiSAAQh/AAhxgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_85.setTransform(626.8,141.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1AAg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAiAXAdAdQBqBpANCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQAAhTA6g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkXABjFh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCNAAQCKgBBiBeQAehPBBhBQAegdAggXQBlhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlTjQgBklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQh/AAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBrhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAygzA6gmQCsh3DeAAQDfAACtB3QA4AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCFA4AABIQAABIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_86.setTransform(620.1,141.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhBgWQifA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQikAAh0hHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AIBUQBBgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjFh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QAAiOBkhjQBkhjCNAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmXgyiRAAQh/AAhxgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBZA8AABTQgEBQhJA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_87.setTransform(613.4,141.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jKABQkXAAjGh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCNAAQCKAABiBfQAehRBBhBQAegdAggXQBkhFCCAAQCBAABkBFQAgAXAeAdQBqBpANCQQBtgoCFAAQDXAACWBlQCXBlAACOQgGCJh7BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgrABgngNQhdAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfABgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQAUANARARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjsgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBkhjQBkhjCMAAQCKgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDVABCXBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DdAAQDfAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmXgyiRAAQh/AAhxgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC1C2AYD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlbCWnrAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8AABTQgFBQhIA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_88.setTransform(606.75,141.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAhAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCXBlAACOQgHCJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjsgehTAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0AAg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkdAAQjAAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCdIApARQFcCVgBDTQABDSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA7g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_89.setTransform(600.05,141.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBkhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA7g7BSABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0AAg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCsirQCrisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDfAACtB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfABgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_90.setTransform(593.4,141.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1AAg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA7g7BSABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBMAAA6ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQh/AAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDeAACtB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh4AAQijAAh0hHQh0hIAAhjQAAhkBxhGQAmgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBaA8gBBTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_91.setTransform(586.7,141.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOQgGCJh7BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQilAAh0hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCFA5AABIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBxhxQAzgzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmWgyiRAAQiBAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACuB3QA3AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTQgFBQhIA2QCFA4gBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_92.setTransform(580,141.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhBgWQifA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBqBpANCQQBtgoCGAAQDWAACWBlQCXBlAACOQgHCJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQikAAh0hHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCEA5ABBIQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgQjtgehUAAQhKAAhBgXQigBBjLgBQkWABjFh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgRg0gBg7QAAiOBkhjQBkhjCNAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAeAdQBpBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOQgHCJh7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQniAAlTjRQlVjQABklQAAkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCsirQCsisDyAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlcCWnqAAQlLgBkKhEgEBXzAFoQmXgyiRAAQh/AAhxgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC1C2AYD2QC8hEDmABQFwAAEECtQEECuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlbCWnrAAQlLgBkKhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAkgXAmgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQASAOATARQA9A+AIBUQBAgXBOAAQB8AABZA7QBaA8AABTQgEBQhJA2QCFA4gBBIQABBIh3AzQh2AyimAAQhxAAhbgWg");
	this.shape_93.setTransform(573.35,141.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjGh6QjFh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCNAAQCJAABhBfQAehRBChBQAegdAggXQBkhFCCAAQCBAABjBFQAiAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgrABgmgNQheAlh4AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA+A+AIBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBihjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBugoCFAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQngAAlVjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCtisDyAAQDsAACpCiQA0iJBxhxQAygzA6gmQCsh3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlbCWnqAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiAAAhxgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA7g6QA6g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8AABTQgDBQhJA2QCFA4AABIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_94.setTransform(566.65,141.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhLAAhAgWQigA/jLABQkWAAjFh6QjGh5AAiqQAAipDBh4QA+gmBBgZQgRg1gBg8QABiMBjhlQBkhjCMAAQCKAABhBfQAehRBChBQAegdAggXQBlhFCAAAQCCAABkBFQAhAXAdAdQBqBpANCQQBtgoCGAAQDVAACXBlQCYBlAACOQgICJh6BbIAYALQDKBWAAB6QAAB6jKBXQjJBXkdAAQjAAAibgogEBD0AabQiLgQgxgBQgsABgmgNQheAlh3AAQijAAh1hHQhzhIAAhkQAAhiBxhHQAlgWAmgPQgLgfAAgjQABhTA6g6QA6g7BTABQBRAAA6A3QARgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQAUANARARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTQgEBRhIA0QCEA5AABIQABBJh3AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjLgBQkXABjFh5QjFh6AAiqQAAipDBh4QA+gmBCgaQgSg0AAg7QAAiOBjhjQBjhjCOAAQCJgBBiBeQAdhPBChBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCXBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkdAAQjAAAibgngEhLWAILIABAAQmYgyiQAAQiBAAhwgnQkTBuleAAQnhAAlUjRQlUjQAAklQAAkjFNjPIAHgEQBkg+BxgrQgfhaAAhnQAAjzCrirQCsisDzAAQDtAACpCiQAziJBxhxQAzgzA5gmQCsh3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEFCugBD1IAAAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjPAAklQAAkkFNjPQBqhCBxgrQgfhaAAhnQAAjzCsirQCsisDzAAQDrAACqCiQAziJBwhxQA0gzA5gmQCsh3DeAAQDfAACtB3QA4AmAzAzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuAAD1IAAAXQgLDVjTCdIApARQFbCVAADTQAADSlbCVQlaCWnrAAQlLgBkKhEgAkjk0QiKgRgyAAQgrAAgngOQhdAmh3AAQikAAh0hHQh0hIAAhjQAAhkBxhGQAlgXAmgOQgLgfAAgjQABhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBLAAA7AoQAUAOARARQA+A+AIBUQBAgXBPAAQB7AABaA7QBYA8ABBTQgFBQhIA2QCEA4ABBIQgBBIh1AzQh3AyimAAQhxAAhbgWg");
	this.shape_95.setTransform(560,141.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgTg1ABg8QgBiMBlhlQBihjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCXBlABCOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjKBXkcAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh3AAQilAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA7g7BTABQBQAAA5A3QASgwAmgmQASgRATgNQA7gpBLAAQBNAAA6ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYBTgQjsgehVAAQhKAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBBgaQgSg0AAg7QAAiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAhgXQBkhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCXBkQCYBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAiagngEhLWAILIAAAAQmXgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQABkjFMjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC1C2AYD2QC8hDDmAAQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCcIAqARQFaCWAADRQAADUlaCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQiAAAhwgnQkTBuleAAQngAAlUjRQlUjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA5gmQCth3DeAAQDeAACtB3QA4AmAzAzQC2C2AXD2QC8hEDmABQFwAAEECtQEECuAAD1IAAAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlbCWnrAAQlLgBkJhEgAkjk0QiKgRgxAAQgsAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBLAAA8AoQATAOASARQA9A+AIBUQBAgXBOAAQB9AABYA7QBaA8gBBTQgEBQhIA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_96.setTransform(553.3,141.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("A7ae0QjsgdhUAAQhKAAhCgWQifA/jLABQkXAAjFh6QjFh5AAiqQAAipDBh4QA+gmBCgZQgSg1AAg8QAAiMBjhlQBjhjCOAAQCJAABiBfQAdhRBChBQAegdAggXQBkhFCCAAQCAAABkBFQAhAXAeAdQBpBpAOCQQBtgoCFAAQDWAACXBlQCYBlAACOQgICJh6BbIAYALQDJBWAAB6QAAB6jJBXQjJBXkdAAQjBAAiagogEBD0AabQiKgQgygBQgsABglgNQheAlh4AAQikAAhzhHQh0hIAAhkQAAhiBxhHQAlgWAmgPQgKgfAAgjQgBhTA7g6QA6g7BTABQBRAAA5A3QASgwAngmQARgRATgNQA7gpBMAAQBLAAA7ApQATANASARQA+A+AHBUQBBgXBOAAQB+AABYA7QBZA8AABTQgEBRhIA0QCFA5gBBIQAABJh2AyQh2AzinAAQhxAAhbgYgAYATgQjrgehUAAQhLAAhBgXQigBBjKgBQkYABjEh5QjGh6AAiqQAAipDBh4QA+gmBCgaQgTg0ABg7QgBiOBlhjQBjhjCMAAQCKgBBhBeQAfhPBBhBQAegdAggXQBlhFCBABQCAgBBlBFQAhAXAeAdQBpBpANCPQBugoCFAAQDVABCYBkQCXBlAACOQgHCJh7BbIAZAKQDJBXAAB6QAAB7jJBWQjKBXkcAAQjBAAibgngEhLWAILIABAAQmYgyiRAAQiAAAhwgnQkTBuleAAQnhAAlTjRQlUjQgBklQAAkjFNjPIAIgEQBjg+BwgrQgehaAAhnQAAjzCrirQCtisDyAAQDtAACoCiQA0iJBwhxQAzgzA5gmQCth3DdAAQDfAACtB3QA4AmAzAzQC2C2AXD2QC8hDDmAAQFwAAEECtQEECuAAD1IAAAXQgLDVjTCcIAqARQFbCWgBDRQABDUlbCVQlbCWnrAAQlLgBkKhEgEBX0AFoQmXgyiSAAQh/AAhxgnQkTBuleAAQngAAlVjRQlTjPAAklQAAkkFMjPQBshCBwgrQgfhaAAhnQAAjzCsirQCsisDyAAQDtAACoCiQA0iJBxhxQAygzA6gmQCsh3DeAAQDfAACsB3QA5AmAyAzQC2C2AXD2QC8hEDmABQFwAAEECtQEFCugBD1IAAAXQgLDVjTCdIApARQFcCVAADTQAADSlcCVQlbCWnqAAQlLgBkJhEgAkjk0QiKgRgyAAQgrAAgmgOQheAmh4AAQijAAh0hHQh0hIAAhjQAAhkByhGQAlgXAlgOQgLgfAAgjQAAhTA8g6QA6g7BSAAQBRAAA6A3QARguAngnQARgRATgOQA8goBLAAQBMAAA7AoQASAOASARQA+A+AIBUQBAgXBPAAQB8AABYA7QBZA8AABTQgDBQhJA2QCEA4AABIQAABIh2AzQh2AyimAAQhxAAhbgWg");
	this.shape_97.setTransform(546.65,141.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("A7ae0IABAAQjtgdhUAAQhLAAhAgWQigA/jKABQkYAAjEh6QjGh5AAiqQAAipDBh4IAFgDQA5gjBBgZQgSg1AAg8QAAiMBlhlQBjhjCMAAQCKAABhBfQAfhRBBhBQAegdAggXQBlhFCAAAQCBAABlBFQAgAXAeAdQBpBpAOCQQBtgoCGAAQDWAACWBlQCXBlAACOIAAAOQgHB7h6BbIAYALQDKBWAAB6QAAB6jKBXQjKBXkcAAQjAAAibgogEBD0AabQiLgQgxgBQgrABgngNQheAlh2AAQilAAh0hHQhzhIAAhkQAAhiBxhHIACgCQAjgVAmgOQgLgfAAgjQAAhTA7g6QA6g7BUABQBQAAA6A3QARgwAmgmQASgRATgNQA7gpBLAAQBMAAA7ApQATANASARQA9A+AJBUQBAgXBOAAQB9AABZA7QBZA8AABTIgBAIQgDBIhIA1IAOAHQB3AzAABHQAABJh3AyQh2AzinAAQhxAAhbgYgAYBTgIAAAAQjsgehVAAQhKAAhBgXQigBBjLgBQkWABjGh5QjFh6AAiqQAAipDBh4IAEgDQA6gjBBgaQgRg0gBg7QABiOBjhjQBkhjCNAAQCJgBBhBeQAehPBChBQAegdAhgXQBkhFCBABQCBgBBkBFQAhAXAdAdQBqBpANCPQBtgoCGAAQDWABCWBkQCYBlAACOIAAAOQgHB7h7BbIAYAKQDKBXAAB6QAAB7jKBWQjJBXkdAAQjAAAiagngEhLWAILIAAAAQmXgyiQAAQiBAAhwgnQkTBuldAAQnhAAlVjRQlTjQAAklQgBkjFNjPIAHgEQBkg+BwgrQgehaAAhnQAAjzCsirQCrisDzAAQDsAACqCiQAziJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hDDmAAQFwAAEFCtQEECuAAD1IgBAXQgLDVjTCcIApARQFcCWAADRQAADUlcCVQlaCWnrAAQlLgBkKhEgEBXzAFoIABAAQmXgyiSAAQiAAAhwgnQkTBuldAAQnhAAlUjRQlUjPAAklQAAkkFNjPIAHgEQBjg+BxgrQgfhaAAhnQAAjzCsirQCsisDyAAQDsAACpCiQA0iJBwhxQA0gzA4gmQCth3DeAAQDeAACtB3QA4AmA0AzQC0C2AYD2QC8hEDmABQFwAAEFCtQEDCuABD1IgBAXQgLDVjTCdIAqARQFaCVAADTQAADSlaCVQlcCWnqAAQlLgBkKhEgAkjk0IABAAQiLgRgxAAQgsAAgmgOQheAmh3AAQikAAh0hHQh0hIAAhjQAAhkByhGIACgCQAjgVAlgOQgKgfAAgjQAAhTA6g6QA7g7BTAAQBQAAA6A3QARguAngnQARgRATgOQA7goBMAAQBMAAA6AoQATAOATARQA9A+AIBUQBAgXBOAAQB8AABaA7QBYA8ABBTIgBAIQgEBIhIA2IAPAFQB2AzgBBIQABBIh2AzQh3AyimAAQhxAAhbgWg");
	this.shape_98.setTransform(539.95,141.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},299).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bubblin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bubblin
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBrNgNlQBDhEBfAAQBfAABDBEQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfQAAhfBEhDgEB4FgR7QAhgiAwAAQAvAAAiAiQAhAhABAvQAAAwgiAjQgiAhgvgBQgwAAgighQghgiAAgvQAAgwAighgEB4agF+QBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCQAAiCBchcgEBnVAAbQAxgxBGAAQBHAAAxAwQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGQAAhGAygxgEBtKAKgQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhNAAhvQAAhwBPhOgEhqIgIIQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGgEhi9AEgQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfQAAhfBDhEQBEhCBfAAQBfAABDBCQBDBEAABfgEho/AQsQAAAvgiAiQghAhgwAAQgvAAgighQgigiAAgwQAAgvAigiQAighAvAAQAwAAAhAhQAiAiAAAwgEhybgLKQAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/QAAi+CGiGQCHiGC+AAQC+AACGCGQCHCGAAC+gEhxrAIeQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCg");
	this.shape.setTransform(708.2751,1204.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,255,255,0.2)").s().p("EhsDAR9QgigiAAgwQAAgvAigiQAighAvgBQAwABAhAhQAiAhAAAxQAAAvgiAiQghAhgwAAQgvAAgighgEBtKAQbQhPhPAAhuQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOgEh6DAL8QhchcAAiDQAAiCBchbQBchdCCAAQCCAABcBdQBcBbAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhpFAHCQhDhDAAhfQAAhfBDhEQBEhCBfAAQBfAABDBCQBDBEAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEBnVAEKQgygyAAhGQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxgEB74ACYQiCAAhchbQhchbAAiCQAAiCBchcQBdhdCCAAQCCABBcBbQBbBcAACCQABCChdBcQhbBbiCABIgBgBgEh+rgGEQiGiHAAi+QAAi+CGiHQCHiHC+ABQC+gBCGCHQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGgEhuogGRQgygyAAhGQAAhFAygyQAxgyBGAAQBGAAAyAyQAxAyAABFQAABGgxAyQgyAyhGAAQhGAAgxgygEBrMgIhQhDhDAAhfQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEB5WgO4QgwABgigiQghghAAgwQAAgvAigjQAhghAwAAQAvAAAiAhQAhAiABAwQAAAvgiAjQghAhgvAAIgBgBg");
	this.shape_1.setTransform(708.2751,1204.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBpegLDQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEB24gQqQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhgwAAQgwAAghgiQgighABgwgEB2TgCgQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBl4ACSQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEBrQANeQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhOAAhvgEhuvgIJQAAhGAygxQAxgyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgxgyQgygyAAhGgEhpdAEgQAAhfBDhEQBEhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEhr6AQrQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwgEiAGgLKQAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/gEh60AIdQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDg");
	this.shape_2.setTransform(709.2001,1188.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(102,255,255,0.2)").s().p("EhrYAR8QgighAAgwQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigigEBseAQbQhOhOAAhvQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOgEh5YAL8QhchcAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhoaAHCQhChDAAhfQAAhfBChEQBEhDBfAAQBfAABDBDQBEBEAABfQAABfhEBDQhDBDhfAAQhfAAhEhDgEBmpAEKQgxgyAAhGQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxgEB7NACZQiDAAhbhcQhchbAAiCQAAiCBchcQBchcCDAAQCBAABcBcQBcBbAACCQABCDhdBbQhcBciBAAIgBAAgEh+AgGFQiGiGAAi/QAAi+CGiGQCHiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiHiHgEht9gGRQgygyAAhGQAAhGAygxQAygyBGAAQBFAAAyAyQAxAxABBGQgBBGgxAyQgyAyhFAAQhGAAgygygEBqhgIhQhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhDBEhgAAQhfAAhDhEgEB4qgO3QgwAAghgiQgighABgwQgBgvAigiQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAiQgiAhguAAIgCAAg");
	this.shape_3.setTransform(709.2001,1188.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBoygLDQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBlMACSQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEB2MgQqQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEB1ngCgQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBqkANeQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOQhPhOAAhvgEhuDgIJQAAhGAygxQAxgyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgxgyQgygyAAhGgEhoxAEgQAAhfBDhEQBEhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEhrOAQrQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwgEh/agLKQAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/gEh6IAIdQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDg");
	this.shape_4.setTransform(710.1251,1172.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(102,255,255,0.2)").s().p("EhqsAR8QgighAAgwQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigigEBrzAQbQhPhOAAhvQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOgEh4sAL8QhchcAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhnuAHCQhDhDAAhfQAAhfBDhEQBEhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBl+AEKQgygyAAhGQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxgEB6hACZQiCAAhchcQhchbAAiCQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhbBciCAAIgBAAgEh9UgGFQiGiGAAi/QAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHgEhtRgGRQgygyAAhGQAAhGAygxQAxgyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgxgygEBp1gIhQhDhDAAhfQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEB3/gO3QgwAAgigiQghghAAgwQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_5.setTransform(710.1251,1172.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBoHgLDQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBkhACSQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEB1hgQqQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhgwAAQgwAAghgiQgighABgwgEB08gCgQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBp5ANeQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhOAAhvgEhtYgIJQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhoGAEfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEhqjAQqQAAgvAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwAAQgvAAgighQgigiAAgwgEh+vgLKQAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGQiGiHAAi+gEh5dAIdQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCg");
	this.shape_6.setTransform(711.0501,1155.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(102,255,255,0.2)").s().p("EhqBAR8QgigiAAgwQAAgvAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwAAQgvAAgighgEBrIAQbQhPhOAAhvQAAhvBPhPQBOhOBvAAQBvAABOBOQBPBPAABuQAABwhPBOQhOBOhvAAQhvAAhOhOgEh4BAL8QhchcAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBbiCABQiCgBhchbgEhnDAHCQhDhDABhfQgBhfBDhEQBEhDBfAAQBfAABDBDQBEBEAABfQAABfhEBDQhDBDhfAAQhfAAhEhDgEBlSAEKQgxgyAAhGQAAhFAxgyQAygxBGAAQBGAAAyAxQAxAxAABGQAABGgyAyQgxAxhGABQhGgBgygxgEB51ACZQiBAAhchcQhchbAAiBQAAiDBchcQBchcCDAAQCBAABcBcQBcBbAACDQAACChcBbQhcBciBAAIgCAAgEh8ogGFQiHiGAAi/QAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC/iGCGQiHCGi+AAQi+AAiGiGgEhsmgGSQgxgxgBhGQABhGAxgyQAygxBFAAQBGAAAyAxQAxAyABBGQgBBGgxAxQgyAzhGAAQhFAAgygzgEBpKgIhQhDhDAAhfQAAheBDhEQBEhDBeAAQBfAABDBDQBEBEAABeQAABfhDBDQhEBEhfAAQhfAAhDhEgEB3TgO3QgwAAghgiQgighABgwQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_7.setTransform(711.0501,1155.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBnbgLCQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBj1ACTQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEB01gQpQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEB0QgCfQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhcBciCgBQiCAAhchbQhchbAAiCgEBpNANeQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEhssgIJQAAhGAygxQAxgyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgxgyQgygyAAhGgEhnaAEgQAAhfBDhEQBEhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEhp3AQrQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwgEh+DgLKQAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/gEh4xAIdQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDg");
	this.shape_8.setTransform(711.9751,1139.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(102,255,255,0.2)").s().p("EhpVAR8QgighAAgxQAAgvAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAhgwAAQgvAAgighgEBqcAQbQhPhOAAhvQAAhvBPhPQBOhPBwAAQBvAABOBPQBOBOAABwQAABuhOBPQhPBPhvAAQhvAAhOhPgEh3VAL8QhchdAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBdQhcBciCgBQiCABhchcgEhmXAHCQhDhEAAhfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBEQhDBDhfAAQhfAAhEhDgEBknAEKQgygxAAhHQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAyhGgBQhGABgxgygEB5KACZQiCAAhchbQhchbAAiDQAAiBBchdQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBcQhbBbiCAAIgBAAgEh79gGFQiGiHAAi+QAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC+iHCHQiGCHi+AAQi+AAiHiHgEhr6gGSQgygxAAhGQAAhGAygxQAxgyBGAAQBGAAAyAyQAxAxAABGQAABGgxAxQgyAzhGAAQhGAAgxgzgEBoegIhQhDhDAAhfQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEB2ogO3QgwAAgighQghgiAAgvQAAgwAigiQAhghAwAAQAvAAAiAhQAhAhABAwQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_9.setTransform(711.9751,1139.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBmwgLDQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBjKACSQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEB0KgQqQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhgwAAQgwAAghgiQgighABgwgEBzlgCgQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBoiANeQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhOAAhvgEhsBgIJQAAhGAygxQAxgyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgxgyQgygyAAhGgEhmvAEgQAAhfBDhEQBEhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEhpMAQrQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwgEh9YgLKQAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/gEh4GAIdQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDg");
	this.shape_10.setTransform(712.9001,1123.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(102,255,255,0.2)").s().p("EhoqAR8QgighABgwQgBgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigigEBpxAQbQhPhOAAhvQAAhwBPhOQBOhPBvAAQBvAABPBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOgEh2qAL8QhchcAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhlsAHCQhDhDAAhfQAAhfBDhEQBEhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBj7AEKQgxgyAAhGQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgxAyQgyAxhGAAQhGAAgygxgEB4eACZQiBAAhchcQhchbAAiCQAAiCBchcQBdhcCBAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciBAAIgCAAgEh7SgGFQiGiGAAi/QAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHgEhrPgGRQgygyAAhGQAAhGAygxQAxgyBGAAQBGAAAyAyQAyAxgBBGQABBGgyAyQgyAyhGAAQhGAAgxgygEBnzgIhQhDhDAAhfQAAhfBDhDQBEhDBfAAQBeAABEBDQBDBDAABfQAABfhDBDQhEBEheAAQhgAAhDhEgEB18gO3QgwAAghgiQgighABgwQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_11.setTransform(712.9001,1123.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBzegQpQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBmEgLDQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBEQhDBDhfAAQhfAAhEhDQhDhEAAhfgEBieACTQAAhGAygyQAxgxBGAAQBHAAAxAxQAyAxgBBHQAABGgxAxQgyAxhGAAQhGAAgxgxQgygxAAhGgEBn2ANeQAAhwBPhOQBOhOBwAAQBvAABOBOQBOBOAABwQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBy5gCfQAAiCBchdQBdhcCCAAQCCAABcBcQBbBcAACCQABCChdBcQhcBciCgBQiCAAhchbQhchbAAiCgEhrVgIJQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhmDAEgQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEh3bAIdQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBbiCAAQiCAAhchbQhchcAAiDgEhogAQrQAAgwAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwgEh8tgLKQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC+iGCHQiHCHi+AAQi+AAiGiHQiHiHAAi+g");
	this.shape_12.setTransform(713.8001,1106.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(102,255,255,0.2)").s().p("Ehn/AR8QghgiAAgvQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAhgvAAQgwAAgighgEBpFAQbQhPhOAAhvQAAhwBPhOQBOhOBwgBQBvABBOBOQBOBPABBuQgBBvhOBPQhOBOhwABQhvgBhOhOgEh1+AL7QhdhcAAiCQAAiCBdhcQBbhcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhbhcgEhlAAHBQhDhDAAhfQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEgEBjQAEKQgygxAAhHQAAhGAygxQAxgxBHABQBGgBAxAwQAyAygBBGQAABHgxAxQgxAxhGAAQhHAAgxgxgEB3zACZQiCAAhchcQhchbABiCQgBiBBchcQBdhdCCAAQCCAABcBcQBbBcAACBQABCDhdBbQhbBciCAAIgBAAgEh6mgGFQiHiHABi+QgBi+CHiGQCGiHC/AAQC9AACHCHQCGCGABC+QgBC+iGCHQiHCGi9ABQi/gBiGiGgEhqjgGRQgygyAAhGQAAhGAygxQAxgyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAxhGAAQhGAAgxgxgEBnHgIgQhDhDAAhfQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEB1RgO3QgwAAgighQghgiABgvQgBgwAigiQAhghAwgBQAvABAiAhQAhAiABAvQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_13.setTransform(713.8001,1106.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(1,1,1).p("EByzgQpQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBlZgLCQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEByOgCfQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBhzACTQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEBnLANeQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEhqqgIJQAAhGAygxQAxgyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgxgyQgygyAAhGgEhlYAEgQAAhfBDhEQBEhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEh2vAIdQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhn1AQrQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwgEh8BgLKQAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/g");
	this.shape_14.setTransform(714.7501,1090.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(102,255,255,0.2)").s().p("EhnTAR8QghghAAgxQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvABQgwgBgighgEBoaAQbQhPhOAAhvQAAhvBPhPQBOhOBwAAQBuAABPBOQBOBPAABuQAABwhOBOQhPBPhvgBQhvABhOhPgEh1TAL7QhchbAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBbQhcBdiCAAQiCAAhchdgEhkUAHCQhEhDAAhgQAAheBEhEQBDhDBfAAQBfAABDBDQBDBEAABeQAABghDBDQhDBDhfAAQhfAAhDhDgEBikAEKQgxgyAAhFQAAhGAxgyQAygxBGAAQBHAAAxAwQAyAygBBHQAABFgxAyQgyAxhGABQhGgBgygxgEB3HACZQiBAAhchcQhchbAAiBQAAiDBchcQBdhcCBAAQCCAABcBcQBcBbAACDQAACChcBbQhcBciBAAIgCAAgEh57gGFQiGiGAAi/QAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC/iHCGQiGCGi+AAQi+AAiHiGgEhp4gGRQgygyABhGQgBhGAygyQAxgxBGAAQBHAAAxAxQAxAyAABGQAABGgxAyQgxAyhHgBQhGABgxgygEBmcgIgQhDhEAAheQAAhgBEhDQBDhDBfAAQBfAABDBDQBDBDAABgQAABehDBEQhEBDheAAQhgAAhDhDgEB0lgO3QgwAAghgiQgighABgwQAAgvAhgiQAigiAwAAQAvAAAhAiQAiAhAAAwQABAwgjAiQghAhguAAIgCAAg");
	this.shape_15.setTransform(714.7501,1090.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(1,1,1).p("EByHgQpQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBktgLCQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBxigCfQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhcBciCgBQiCAAhchbQhchbAAiCgEBhHACTQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEBmfANeQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEhksAEfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhp+gIJQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEh7WgLKQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGQiHiHAAi+gEh2EAIdQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhnJAQqQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_16.setTransform(715.6501,1074.125);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(102,255,255,0.2)").s().p("EhmoAR8QghgiAAgwQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBnuAQbQhPhOAAhvQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhOBPhvAAQhvAAhPhPgEh0nAL7QhchcAAiCQAAiCBchcQBchcCBAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiBAAhchcgEhjpAHBQhDhDAAhfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEBh5AEKQgygxABhGQgBhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgxAyhHAAQhGAAgxgygEB2cACZQiCAAhchbQhbhbAAiCQAAiCBbhcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhbBbiCAAIgBAAgEh5PgGFQiHiHAAi+QAAi+CHiHQCGiGC+AAQC+AACHCGQCHCHgBC+QABC+iHCHQiHCGi+AAQi+AAiGiGgEhpNgGSQgxgxAAhGQAAhGAxgyQAygxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgygygEBlxgIgQhEhDAAhfQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhDhDgEBz6gO3QgwAAgighQghgiABgvQgBgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_17.setTransform(715.6501,1074.125);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBxcgQpQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBkCgLCQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBw3gCfQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBgcACTQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEBl0ANeQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEh6qgLKQAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGQiGiHAAi+gEhkBAEfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEhpTgIJQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEh1YAIdQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhmeAQqQAAgvAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwAAQgvAAgighQgigiAAgwg");
	this.shape_18.setTransform(716.6001,1057.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(102,255,255,0.2)").s().p("Ehl8AR8QghgigBgwQABgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBnCAQbQhOhOAAhvQAAhvBOhPQBPhOBwAAQBvAABNBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPgEhz8AL7QhchcAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcgEhi+AHBQhDhDAAhfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEBhNAEKQgxgxAAhGQAAhGAxgyQAygwBGAAQBGgBAyAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgygygEB1wACZQiCAAhbhbQhchbAAiCQAAiCBchcQBdhdCBAAQCCAABcBcQBcBcAACCQAACChcBcQhcBbiBAAIgCAAgEh4kgGFQiGiHAAi+QAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGgEhohgGSQgygxAAhGQAAhGAygyQAxgxBHAAQBGAAAxAxQAxAyAABGQAABGgxAxQgxAyhGAAQhHAAgxgygEBlFgIgQhDhDAAhfQAAhfBEhEQBChDBgAAQBeAABDBDQBEBEAABfQAABfhDBDQhEBDheAAQhgAAhDhDgEBzOgO3QgwAAghghQgigiABgvQAAgwAhgiQAighAwAAQAvAAAhAhQAiAiAAAvQABAwgjAiQghAhguAAIgCAAg");
	this.shape_19.setTransform(716.6001,1057.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBwwgQpQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBjWgLCQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBwLgCfQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCDhdBbQhcBciCgBQiCAAhchbQhchbAAiCgEBfwACTQAAhGAygxQAxgxBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEBlIANfQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhugEhongIKQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEh5/gLLQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhjVAEfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEh0tAIcQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhlyAQqQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_20.setTransform(717.5001,1041.45);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(102,255,255,0.2)").s().p("EhlQAR8QgigiAAgwQAAgvAigiQAighAvAAQAwAAAhAhQAiAigBAwQABAvgiAiQghAhgwAAQgvAAgighgEBmXAQbQhPhOAAhvQAAhvBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBOQhPBPhuAAQhwAAhOhPgEhzRAL7QhchcABiDQgBiCBchbQBchdCDAAQCBAABcBdQBdBbAACCQAACDhdBcQhcBciBAAQiDAAhchcgEhiSAHBQhDhDAAhfQAAhfBDhDQBDhEBgAAQBfAABDBEQBDBDAABfQAABfhDBDQhDBDhfAAQhgAAhDhDgEBgiAELQgygyABhGQgBhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAyQgxAxhHAAQhGAAgxgxgEB1FACZQiCAAhbhbQhdhbAAiCQAAiCBdhcQBchdCCAAQCCAABcBdQBbBbAACCQABCChdBcQhbBbiCABIgBgBgEh34gGFQiHiHAAi+QAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGgEhn2gGSQgxgyAAhGQAAhFAxgyQAygxBGgBQBGABAyAxQAxAyAABFQAABGgxAyQgyAyhGAAQhGAAgygygEBkagIgQhEhDAAhfQAAhfBEhDQBDhDBfgBQBfABBDBDQBDBDAABfQAABfhCBDQhEBDhfAAQhfAAhDhDgEByjgO3QgwABgigiQghghABgwQgBgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAvgiAjQghAhgvAAIgBgBg");
	this.shape_21.setTransform(717.5001,1041.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBvggCfQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBirgLCQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBwFgQpQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhgwAAQgwAAghgiQgighABgwgEBfFACTQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEBkdANfQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhOAAhvgEh5TgLKQAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGQiGiHAAi+gEhn8gIJQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhiqAEfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEh0BAIdQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhlHAQqQAAgvAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwAAQgvAAgighQgigiAAgwg");
	this.shape_22.setTransform(718.4501,1025.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(102,255,255,0.2)").s().p("EhklAR7QgighAAgwQAAgvAigiQAighAvgBQAwABAhAhQAiAhAAAxQAAAvgiAhQghAigwAAQgvAAgigigEBlrAQbQhOhNAAhwQAAhvBOhPQBPhOBvAAQBwAABNBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPgEhylAL7QhchcAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcgEhhnAHBQhDhDABhfQgBhfBDhEQBEhDBfABQBfgBBDBDQBEBEAABfQAABfhEBDQhDBEhfAAQhfAAhEhEgEBf2AEKQgxgxAAhGQAAhGAxgxQAygxBGAAQBGgBAyAxQAxAyAABGQAABGgyAxQgxAyhGAAQhGAAgygygEB0ZACZQiCAAhbhbQhchbAAiCQAAiCBchcQBchcCCAAQCCgBBdBcQBbBcAACCQAACDhcBbQhbBbiCAAIgCAAgEh3MgGGQiHiGAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHgEhnKgGSQgygxAAhHQAAhGAygxQAygxBFAAQBGAAAyAxQAxAxABBGQgBBHgxAxQgyAyhGAAQhFAAgygygEBjugIgQhDhDAAhfQAAhfBDhDQBDhEBfAAQBgAABCBEQBEBDAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBx3gO2QgwgBghghQghgiAAgvQgBgwAigiQAighAwAAQAvAAAhAhQAiAiABAwQgBAwgiAhQghAiguAAIgCAAg");
	this.shape_23.setTransform(718.4501,1025.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBu0gCfQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBh/gLCQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBvZgQpQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBjxANfQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOQhPhOAAhvgEBeZACTQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEh4ogLKQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGQiHiHAAi+gEhnQgIJQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhh+AEfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEhzWAIcQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhkbAQqQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwg");
	this.shape_24.setTransform(719.3501,1008.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(102,255,255,0.2)").s().p("Ehj5AR7QgighAAgwQAAgwAighQAhgiAwAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgwAAghgigEBlAAQcQhPhOABhvQgBhwBPhOQBPhPBvAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOgEhx6AL7QhchcAAiDQAAiCBchcQBchbCCAAQCDAABcBbQBbBcABCCQgBCDhbBcQhcBciDAAQiCAAhchcgEhg7AHBQhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBfLAELQgxgyAAhGQAAhGAxgxQAxgxBGAAQBHAAAyAwQAxAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxgEBzuACaQiCAAhbhcQhdhbAAiCQAAiCBdhcQBchcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhbBciCAAIgBAAgEh2hgGFQiHiHAAi+QAAi+CHiHQCGiGC+AAQC/AACGCGQCGCHAAC+QAAC+iGCHQiGCGi/AAQi+AAiGiGgEhmfgGSQgxgxAAhGQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygygEBjCgIgQhDhDAAhfQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhCBDQhEBEhfAAQhfAAhEhEgEBxMgO2QgwAAgigiQghghAAgwQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_25.setTransform(719.3501,1008.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBuJgCfQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBuugQpQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBhUgLCQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBjGANfQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOQhPhOAAhvgEBduACTQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhmlgIJQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEh38gLKQAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGQiGiHAAi+gEhhTAEfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEhyqAIcQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhjwAQqQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwg");
	this.shape_26.setTransform(720.2751,992.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(102,255,255,0.2)").s().p("EhjOAR7QgighAAgwQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigigEBkVAQcQhPhOAAhvQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOgEhxOAL7QhchcAAiDQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhgQAHBQhDhDAAhfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBegAELQgygyAAhGQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxgEBzDACaQiCAAhchcQhchbAAiCQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhbBciCAAIgBAAgEh12gGFQiGiHAAi+QAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGgEhlzgGSQgygxAAhGQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgygEBiXgIgQhDhDAAhfQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEBwhgO2QgwAAgigiQghghAAgwQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_27.setTransform(720.2751,992.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBtdgCfQAAiCBchbQBdhdCCAAQCCAABcBcQBbBbAACCQABCDhdBcQhcBbiCAAQiCAAhchbQhchcAAiCgEBuCgQpQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBgogLBQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBCQhDBEhfAAQhfAAhEhEQhDhCAAhfgEBdCACUQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAxhGAAQhGAAgxgxQgygxAAhGgEBiaANfQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABwhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEh3RgLLQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhl5gIKQAAhGAxgxQAygxBGAAQBGAAAxAxQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhgnAEeQAAheBDhEQBDhCBfAAQBfAABDBCQBEBEAABeQAABfhEBEQhDBDhfAAQhfAAhDhDQhDhEAAhfgEhjEAQqQAAgwAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwgEhx/AIcQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBbQhcBciCAAQiCAAhchcQhchbAAiDg");
	this.shape_28.setTransform(721.2001,976.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(102,255,255,0.2)").s().p("EhijAR7QghgiAAgwQAAgvAhgiQAjghAvAAQAvAAAiAhQAhAiABAwQgBAvghAiQgiAhgvAAQgvAAgjghgEBjpAQcQhPhOABhvQgBhwBPhOQBPhPBvAAQBvAABOBPQBOBPAABvQAABvhOBOQhOBPhwAAQhvAAhOhPgEhwjAL7QhbhdgBiCQABiCBbhcQBchcCCAAQCDAABcBcQBcBcgBCCQABCChcBdQhcBciDgBQiCABhchcgEhfkAHBQhDhDAAhfQAAhfBDhDQBDhEBfAAQBfAABDBEQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBd0AELQgygxAAhHQAAhGAygxQAxgwBGAAQBHgBAyAwQAxAygBBGQABBHgyAxQgyAyhGgBQhGABgxgygEByXACaQiCAAhchcQhbhbgBiCQABiCBbhbQBdhdCCAAQCCAABcBcQBbBcAACBQABCDhcBbQhcBciCAAIgBAAgEh1KgGFQiHiHABi+QgBi/CHiGQCHiGC+AAQC9AACHCGQCGCGABC/QgBC+iGCHQiHCGi9AAQi+AAiHiGgEhlHgGSQgygyAAhGQAAhFAygyQAxgxBGgBQBGABAxAxQAyAyAABFQAABGgyAyQgxAyhGAAQhGAAgxgygEBhrgIfQhDhDAAhfQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBDAABgQAABfhDBDQhDBDhfAAQhfAAhEhDgEBv1gO2QgwAAgighQghgiAAgvQAAgwAigiQAighAvAAQAvAAAiAhQAhAiABAvQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_29.setTransform(721.2001,976.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBsygCfQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBtXgQpQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBf9gLCQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBcXACTQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEBhvANfQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOQhPhOAAhvgEh2lgLLQAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/gEhlOgIKQAAhGAygxQAxgyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgxgyQgygyAAhGgEhf8AEfQAAhfBDhEQBEhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEhiZAQqQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwgEhxTAIcQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDg");
	this.shape_30.setTransform(722.1251,959.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(102,255,255,0.2)").s().p("Ehh3AR7QgighAAgwQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigigEBi+AQcQhPhOAAhvQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOgEhv3AL7QhchcAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhe5AHBQhDhDAAhfQAAhfBDhEQBEhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBdJAELQgygyAAhGQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxgEBxsACaQiCAAhchcQhchbAAiCQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhbBciCAAIgBAAgEh0fgGGQiGiGAAi/QAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHgEhkcgGSQgygyAAhGQAAhGAygxQAxgyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgxgygEBhAgIgQhDhDAAhfQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEBvKgO2QgwAAgigiQghghAAgwQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_31.setTransform(722.1251,959.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBsGgCfQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBcQhcBbiCAAQiCAAhchbQhchcAAiCgEBsrgQpQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBfRgLCQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBbrACUQAAhGAygyQAxgxBGAAQBHAAAxAxQAyAxgBBHQAABGgxAxQgyAxhGAAQhGAAgxgxQgygxAAhGgEBhDANfQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABwQAABuhOBPQhPBOhvAAQhvAAhOhOQhPhOAAhvgEhkigIKQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEh16gLLQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGQiHiHAAi+gEhwoAIcQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBdQhcBciCAAQiCAAhchcQhchdAAiCgEhfQAEeQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhtAQpQAAgvAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_32.setTransform(723.0501,943.45);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(102,255,255,0.2)").s().p("EhhMAR7QghgiAAgvQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAhgvAAQgwAAgighgEBiSAQcQhPhOAAhvQAAhwBPhOQBPhPBvAAQBvAABOBPQBPBOgBBvQABBvhPBPQhOBOhwABQhugBhPhOgEhvLAL7QhdhdAAiCQAAiCBdhcQBbhcCCAAQCCAABcBcQBcBcAACCQAACChcBdQhcBciCgBQiCABhbhcgEheNAHAQhDhDAAhfQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEgEBcdAELQgxgxgBhGQABhHAxgxQAxgxBGABQBHgBAxAwQAyAygBBHQAABGgxAxQgyAxhGAAQhGAAgxgxgEBxAACaQiCAAhchcQhchbAAiBQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACBQABCDhcBbQhcBciCAAIgBAAgEhzzgGGQiHiHAAi+QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC+iGCHQiHCGi+ABQi+gBiGiGgEhjxgGTQgxgxAAhGQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAxQgxAyhGAAQhGAAgygygEBgUgIfQhDhDAAhfQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBuegO2QgwAAgighQghgiAAgvQAAgwAigiQAhghAwgBQAvABAiAhQAhAiABAvQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_33.setTransform(723.0501,943.45);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBrbgCfQAAiCBchbQBdhdCCAAQCCAABcBcQBbBbAACCQABCDhdBcQhcBbiCAAQiCAAhchbQhchcAAiCgEBsAgQpQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBemgLBQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBCQhDBEhfAAQhfAAhEhEQhDhCAAhfgEBbAACUQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAxhGAAQhGAAgxgxQgygxAAhGgEBgYANfQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABwQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEhj3gIKQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEh1OgLLQAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCHi+AAQi+AAiHiHQiGiHAAi+gEhv8AIcQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBdQhcBbiCAAQiCAAhchbQhchdAAiCgEhelAEeQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBEQhDBDhfAAQhfAAhEhDQhDhEAAhfgEhhCAQqQAAgwAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwg");
	this.shape_34.setTransform(723.9751,927.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(102,255,255,0.2)").s().p("EhggAR7QgighAAgwQAAgwAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwABQgvgBgighgEBhnAQcQhPhOAAhvQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABuQAABwhOBOQhPBOhvAAQhvAAhOhOgEhugAL6QhchbAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBbQhcBdiCAAQiCAAhchdgEhdiAHAQhDhDAAhfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEBbyAELQgygyAAhGQAAhFAygyQAxgwBGgBQBHAAAxAxQAyAxgBBGQAABGgxAyQgyAxhGABQhGgBgxgxgEBwVACaQiCAAhchbQhchcAAiBQAAiDBchcQBdhcCCAAQCCAABcBcQBbBbAACDQABCChdBcQhbBbiCAAIgBAAgEhzIgGGQiGiGAAi/QAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC/iHCGQiGCHi+gBQi+ABiHiHgEhjFgGSQgygyAAhGQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAyQgyAxhGAAQhGAAgxgxgEBfpgIgQhDhDAAhfQAAheBEhEQBDhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEgEBtzgO2QgwAAgigiQghghAAgwQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_35.setTransform(723.9751,927.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBqwgCeQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBrVgQoQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBd7gLBQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBaVACUQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEBftANfQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEhd5AEeQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhjLgIKQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEh0jgLLQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGQiHiHAAi+gEhvRAIcQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhgWAQpQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_36.setTransform(724.8751,910.775);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(102,255,255,0.2)").s().p("Ehf1AR7QghgiAAgwQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBg7AQcQhOhOAAhvQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPgEht1AL6QhchcAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcgEhc2AHAQhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEgEBbGAELQgxgxAAhGQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygygEBvpACaQiCAAhbhbQhchbAAiCQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBbiBAAIgCAAgEhycgGGQiHiHAAi+QAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGgEhiagGTQgxgxAAhGQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygygEBe+gIfQhDhDAAhfQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBtHgO2QgwAAghghQgigiABgvQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_37.setTransform(724.8751,910.775);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBqpgQoQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBqEgCeQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhcBciCgBQiCAAhchbQhchbAAiCgEBdPgLBQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBZpACUQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEBfBANfQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEhz3gLLQAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGQiGiHAAi+gEhdOAEeQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEhiggIKQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhulAIcQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhfrAQpQAAgvAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwAAQgvAAgighQgigiAAgwg");
	this.shape_38.setTransform(725.8251,894.425);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(102,255,255,0.2)").s().p("EhfJAR7QgigiAAgwQAAgvAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwAAQgvAAgighgEBgQAQcQhPhOAAhvQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPgEhtJAL6QhchcAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcgEhcLAHAQhDhDAAhfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEBabAELQgygxAAhGQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgygEBu+ACaQiCAAhchbQhchbAAiCQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhbBbiCAAIgBAAgEhxxgGGQiGiHAAi+QAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGgEhhugGTQgygxAAhGQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgygEBeSgIfQhDhDAAhfQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBscgO2QgwAAgighQghgiAAgvQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_39.setTransform(725.8251,894.425);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBckgLBQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBp+gQoQgBgwAighQAigiAwAAQAvAAAhAiQAiAhAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBpZgCeQAAiCBchcQBchdCCAAQCCAABcBdQBcBbAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBY+ACUQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEBeWANgQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhPAAhugEhzMgLLQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCHi+AAQi+AAiGiHQiHiHAAi+gEhciAEeQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEhh0gIKQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEht6AIbQAAiCBchbQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhe/AQpQAAgvAhgiQAigiAwAAQAvAAAiAiQAhAiAAAvQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwg");
	this.shape_40.setTransform(726.7251,878.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(102,255,255,0.2)").s().p("EheeAR7QghgiAAgwQAAgwAhghQAigiAwABQAvgBAiAiQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighgEBfkAQcQhOhOAAhvQAAhvBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBOQhOBPhvAAQhvAAhPhPgEhseAL6QhchcAAiDQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhbfAHAQhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBZvAEMQgxgyAAhGQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAyQgxAxhGAAQhGAAgygxgEBuSACaQiCAAhbhbQhchbAAiCQAAiCBchcQBchdCCABQCCAABcBcQBcBbAACCQAACDhcBbQhcBbiBAAIgCAAgEhxFgGGQiHiHAAi+QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC+iGCHQiHCHi+AAQi+AAiGiHgEhhDgGTQgxgxAAhGQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAxQgxAzhGAAQhGAAgygzgEBdngIfQhDhDAAhfQAAhfBDhDQBDhDBfgBQBfABBDBDQBEBDAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBrwgO1QgwAAghgiQgighABgwQgBgwAighQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAvgiAjQghAhguAAIgCAAg");
	this.shape_41.setTransform(726.7251,878.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBb4gLBQAAhfBEhEQBDhCBfAAQBfAABDBCQBDBEAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBpSgQoQAAgwAighQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAvgiAiQgiAigvAAQgwAAgigiQghgiAAgvgEBotgCeQAAiCBchcQBdhdCCAAQCCAABcBdQBbBbAACCQABCChdBcQhcBciCAAQiCAAhchcQhchbAAiCgEBYSACUQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEBdqANgQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOQhPhOAAhvgEhyggLLQAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/gEhb3AEeQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEhhJgIKQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhtOAIcQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEheUAQpQAAgvAigiQAigiAvAAQAwAAAhAiQAiAiAAAvQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwg");
	this.shape_42.setTransform(727.6751,861.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(102,255,255,0.2)").s().p("EhdyAR7QgigiAAgwQAAgvAigiQAighAvgBQAwABAhAhQAiAhAAAxQAAAvgiAiQghAhgwAAQgvAAgighgEBe5AQcQhPhNAAhwQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPgEhryAL6QhchcAAiDQAAiBBchcQBchcCCAAQCCAABcBcQBcBcAACBQAACDhcBcQhcBciCAAQiCAAhchcgEha0AHAQhDhDAAhfQAAheBDhEQBEhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEgEBZEAELQgygxAAhGQAAhGAygxQAxgxBGAAQBHgBAxAxQAyAygBBGQAABGgxAxQgyAyhGAAQhGAAgxgygEBtnACbQiCAAhchcQhchbAAiCQAAiCBchcQBdhcCCAAQCCgBBcBcQBbBcAACCQABCChdBcQhbBciCAAIgBAAgEhwagGGQiGiGAAi/QAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+gBQi+AAiHiGgEhgXgGSQgygyAAhGQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAyQgyAxhGAAQhGAAgxgxgEBc7gIfQhDhDAAhfQAAhfBEhEQBDhCBfAAQBfAABDBCQBDBEAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEBrFgO1QgwgBgighQghgiAAgvQAAgvAigjQAhghAwAAQAvAAAiAhQAhAiABAvQAAAxgiAhQghAigvAAIgBAAg");
	this.shape_43.setTransform(727.6751,861.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBbNgLBQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBongQoQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhgwAAQgwAAghgiQgighABgwgEBoCgCeQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBXnACUQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEBc/ANgQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhOAAhvgEhx1gLLQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGQiHiHAAi+gEhgdgIKQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhbLAEeQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEhsjAIbQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhdoAQpQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwg");
	this.shape_44.setTransform(728.5751,845.425);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(102,255,255,0.2)").s().p("EhdHAR6QghghAAgwQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigigEBeNAQdQhOhOAAhvQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOgEhrHAL6QhchcAAiDQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhaIAHAQhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBYYAEMQgxgyAAhGQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxgEBs7ACbQiCAAhbhcQhchbAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciBAAIgCAAgEhvugGGQiHiHAAi+QAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGgEhfsgGTQgxgxAAhGQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygygEBcQgIfQhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEgEBqZgO1QgwAAghgiQgighABgwQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_45.setTransform(728.5751,845.425);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBahgLBQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBn7gQoQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBnWgCeQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBW7ACUQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEBcTANgQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOQhPhOAAhvgEhxKgLLQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGQiHiHAAi+gEhfygIKQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhagAEeQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEhr4AIbQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhc9AQpQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwg");
	this.shape_46.setTransform(729.5001,829.075);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(102,255,255,0.2)").s().p("EhcbAR6QgighAAgwQAAgwAighQAhgiAwAAQAwAAAhAiQAhAhAAAwQAAAwghAhQghAigwAAQgwAAghgigEBdiAQdQhPhOAAhvQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOgEhqcAL6QhchcAAiDQAAiCBchcQBchbCDAAQCBAABcBbQBcBcABCCQgBCDhcBcQhcBciBAAQiDAAhchcgEhZdAHAQhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBXtAEMQgxgygBhGQABhGAxgxQAygxBFAAQBHAAAxAwQAyAyAABGQgBBGgxAyQgyAxhGAAQhFAAgygxgEBsQACbQiCAAhchcQhchbAAiCQAAiCBchcQBdhcCCAAQCCAABcBcQBcBbgBCCQABCDhcBbQhcBciCAAIgBAAgEhvDgGGQiHiHAAi+QAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGgEhfBgGTQgxgxAAhGQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygygEBbkgIfQhDhDABhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEgEBpugO1QgwAAghgiQgighAAgwQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_47.setTransform(729.5001,829.075);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBZ2gLAQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBCQhEBEhfAAQhfAAhDhEQhDhCAAhfgEBnQgQoQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhgwAAQgwAAghgiQgighABgwgEBmrgCeQAAiCBchbQBchdCCAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBbiDAAQiCAAhbhbQhchcAAiCgEBWQACVQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEBboANgQAAhvBOhPQBPhPBvAAQBvAABOBPQBPBPAABvQAABvhPBOQhOBOhvAAQhvAAhPhOQhOhOAAhvgEhwegLLQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGQiHiHAAi+gEhfGgILQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhZ0AEdQAAheBDhDQBDhEBfAAQBfAABDBEQBEBDAABeQAABfhEBEQhDBDhfAAQhfAAhDhDQhDhEAAhfgEhrMAIbQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBbQhcBdiCAAQiCAAhchdQhchbAAiDgEhcRAQpQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwg");
	this.shape_48.setTransform(730.4251,812.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(102,255,255,0.2)").s().p("EhbwAR6QghgiAAgwQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBc2AQdQhOhOAAhvQAAhwBOhOQBPhOBvgBQBvABBOBOQBPBPAABuQAABvhPBPQhOBOhvABQhvgBhPhOgEhpwAL6QhchcAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBbiCABQiCgBhchbgEhYxAHAQhDhDAAhfQAAhfBDhDQBDhEBfAAQBfAABDBEQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBXBAEMQgxgxAAhGQAAhHAxgxQAygxBGABQBGgBAyAwQAxAyAABHQAABGgyAxQgxAxhGAAQhGAAgygxgEBrkACbQiCAAhbhcQhchbAAiCQAAiBBchcQBchdCCAAQCCAABcBcQBcBcAACBQAACDhcBbQhcBciBAAIgCAAgEhuXgGGQiHiHAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCHQiHCGi+AAQi+AAiGiGgEheVgGTQgxgyAAhFQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABFgyAyQgxAyhGAAQhGAAgygygEBa5gIeQhDhDAAhfQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBpCgO1QgwAAghghQgigiABgvQgBgwAigiQAighAwgBQAvABAhAhQAiAiAAAvQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_49.setTransform(730.4251,812.75);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBmkgQoQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBZKgLBQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBl/gCeQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBVkACUQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEBa8ANgQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOQhPhOAAhvgEhvzgLMQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhebgILQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhZJAEeQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEhbmAQpQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwgEhqhAIbQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDg");
	this.shape_50.setTransform(731.3501,796.425);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(102,255,255,0.2)").s().p("EhbFAR6QghghAAgwQAAgwAhghQAigiAwAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgwAAgigigEBcLAQdQhPhOAAhvQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOgEhpFAL6QhbhcgBiDQABiCBbhcQBchcCCAAQCDAABcBcQBbBcAACCQAACDhbBcQhcBciDAAQiCAAhchcgEhYGAHAQhDhDAAhfQAAhfBDhEQBEhDBeAAQBfAABDBDQBEBEAABfQAABfhEBDQhDBDhfAAQheAAhEhDgEBWWAEMQgygyAAhGQAAhGAygxQAygxBFAAQBHAAAxAwQAyAyAABGQgBBGgxAyQgyAxhGAAQhFAAgygxgEBq5ACbQiCAAhchcQhchbAAiCQAAiCBchcQBdhcCCAAQCCAABcBcQBcBbAACCQAACDhdBbQhbBciCAAIgBAAgEhtsgGHQiGiGAAi/QAAi+CGiGQCGiHC/AAQC9AACHCHQCHCGAAC+QAAC/iHCGQiHCHi9AAQi/AAiGiHgEhdpgGTQgygyAAhGQAAhGAygxQAxgyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgxgygEBaNgIfQhDhDABhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQgBBfhDBDQhDBEhfAAQhfAAhEhEgEBoXgO1QgwAAghgiQgighAAgwQAAgvAigiQAhgiAxAAQAuAAAiAiQAiAhAAAwQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_51.setTransform(731.3501,796.425);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBl5gQnQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBYfgLAQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBlUgCdQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBU5ACVQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEBaRANgQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEhvHgLMQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhdvgILQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhYdAEeQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEha6AQpQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwgEhp1AIbQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDg");
	this.shape_52.setTransform(732.2751,780.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(102,255,255,0.2)").s().p("EhaZAR6QghghAAgwQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvgBQgwABgigigEBbfAQdQhOhOAAhvQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBPhvAAQhvAAhPhPgEhoZAL6QhchdAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBdQhcBciCgBQiCABhchcgEhXaAG/QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEgEBVqAEMQgxgyAAhFQAAhGAxgyQAygxBGAAQBGAAAyAwQAxAyAABHQAABFgyAyQgxAxhGABQhGgBgygxgEBqNACbQiCAAhbhcQhchbAAiBQAAiCBchdQBchcCCAAQCCAABcBcQBcBbAACDQAACChcBbQhcBciBAAIgCAAgEhtAgGHQiHiHAAi+QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC+iGCHQiHCHi+AAQi+AAiGiHgEhc+gGUQgxgxAAhGQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAxQgxAzhGAAQhGAAgygzgEBZigIeQhDhDAAhfQAAhgBDhDQBDhDBfAAQBfAABDBDQBEBDAABgQAABfhDBDQhEBDhfAAQhfAAhDhDgEBnrgO1QgwAAghghQgigiABgwQgBgvAigiQAigiAwAAQAvAAAhAiQAiAiAAAvQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_53.setTransform(732.2751,780.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBlNgQoQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBXzgLAQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBCQhDBEhfAAQhfAAhEhEQhDhCAAhfgEBUNACVQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEBkogCeQAAiCBchbQBdhdCCAAQCCAABcBcQBbBbAACCQABCDhdBcQhcBbiCAAQiCAAhchbQhchcAAiCgEBZlANgQAAhvBPhPQBOhPBwAAQBvAABOBPQBOBPAABvQAABvhOBOQhPBOhvAAQhvAAhOhOQhPhOAAhvgEhucgLMQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCGi+AAQi+AAiGiGQiHiGAAi/gEhdEgILQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhXyAEdQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBEQhDBDhfAAQhfAAhDhDQhDhEAAhfgEhaPAQpQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwgEhpKAIbQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBbQhcBdiCAAQiCAAhchdQhchbAAiDg");
	this.shape_54.setTransform(733.2001,763.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(102,255,255,0.2)").s().p("EhZuAR6QghgiAAgvQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigigEBa0AQdQhOhOgBhvQABhvBOhPQBOhPBwABQBvgBBOBPQBOBOABBwQgBBuhOBPQhPBOhvAAQhvAAhOhOgEhntAL5QhdhcAAiCQAAiCBdhcQBbhcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhbhcgEhWvAG/QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEgEBU/AEMQgygyAAhGQAAhFAygyQAygwBGgBQBGAAAxAxQAyAxgBBGQAABGgxAyQgyAyhFAAQhGAAgygygEBpiACbQiCAAhchbQhchbAAiDQAAiCBchcQBdhcCCAAQCCAABcBcQBcBcAACCQAACChdBcQhbBbiCAAIgBAAgEhsVgGHQiHiGABi/QgBi+CHiGQCGiHC/AAQC9AACHCHQCGCGABC+QgBC/iGCGQiHCGi9AAQi/AAiGiGgEhcSgGTQgygyAAhGQAAhGAygyQAxgxBGAAQBGAAAxAxQAyAyAABGQAABGgyAyQgxAxhGAAQhGAAgxgxgEBY2gIfQhChDAAhfQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhEhEgEBnAgO1QgwAAghgiQgighAAgwQAAgvAigiQAhgiAxABQAugBAiAiQAhAhABAwQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_55.setTransform(733.2001,763.75);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBkigQnQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBXIgLAQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBTiACVQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEBj9gCdQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBY6ANgQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEhcZgILQAAhGAygxQAxgyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgxgyQgygyAAhGgEhtwgLMQAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/gEhoeAIbQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhXHAEdQAAheBDhEQBEhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEhZkAQoQAAgvAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwAAQgvAAgighQgigiAAgwg");
	this.shape_56.setTransform(734.1001,747.425);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(102,255,255,0.2)").s().p("EhZCAR6QgigiAAgwQAAgvAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwAAQgvAAgighgEBaIAQdQhOhOAAhvQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPgEhnCAL5QhchcAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcgEhWEAG/QhDhDABhfQgBheBDhEQBEhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhEhEgEBUUAEMQgygxAAhGQAAhGAygyQAxgwBGAAQBHgBAxAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgxgygEBo3ACbQiDAAhbhbQhchbAAiCQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBbiBAAIgBAAgEhrpgGHQiHiGAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHgEhbngGTQgygyAAhGQAAhGAygxQAygyBFAAQBGAAAyAyQAxAxABBGQgBBGgxAyQgyAyhGAAQhFAAgygygEBYLgIeQhDhDAAhfQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBmVgO1QgxAAghghQgigiABgvQgBgwAjgiQAhghAwAAQAvAAAiAhQAhAiAAAvQAAAwghAiQgiAhguAAIgBAAg");
	this.shape_57.setTransform(734.1001,747.425);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBj2gQnQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBWcgLAQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBjRgCdQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhcBciCgBQiCAAhchbQhchbAAiCgEBYOANgQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBS2ACVQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhtFgLMQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhbtgILQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhnzAIbQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhWbAEdQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhY4AQoQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_58.setTransform(735.0501,731.075);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(102,255,255,0.2)").s().p("EhYXAR6QghgiAAgwQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBZdAQdQhPhOAAhvQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPABBvQgBBvhOBOQhOBPhwAAQhvAAhOhPgEhmWAL5QhchcAAiCQAAiCBchcQBchcCBAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiBAAhchcgEhVYAG/QhDhDAAhfQAAheBDhEQBEhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEgEBToAEMQgygxAAhGQAAhGAygyQAxgwBHAAQBGgBAxAxQAyAxgBBHQAABGgxAxQgxAyhGAAQhHAAgxgygEBoLACbQiCAAhchbQhchbABiCQgBiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhbBbiCAAIgBAAgEhq+gGHQiHiGAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCHCGgBC+QABC/iHCGQiHCHi+AAQi+AAiGiHgEha8gGTQgxgyAAhGQAAhGAxgxQAygyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgygygEBXfgIeQhDhDAAhfQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBlpgO1QgwAAgighQghgiABgvQgBgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_59.setTransform(735.0501,731.075);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBjLgQnQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAvQAAAxgiAhQghAigwgBQgwAAghghQgighABgwgEBimgCdQAAiCBchcQBchdCCAAQCCAABcBdQBcBbAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBVxgLAQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBXjANhQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhPAAhugEBSLACVQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEhsZgLMQAAi+CGiGQCHiHC+AAQC+AACGCHQCHCGAAC+QAAC/iHCGQiGCGi+AAQi+AAiHiGQiGiGAAi/gEhbCgILQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhnHAIbQAAiCBchdQBchbCCAAQCCAABcBbQBcBdAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhVwAEdQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEhYNAQoQAAgwAighQAighAvAAQAwAAAhAhQAiAhAAAxQAAAvgiAhQghAigwAAQgvAAgigiQgighAAgwg");
	this.shape_60.setTransform(735.9501,714.75);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(102,255,255,0.2)").s().p("EhXrAR5QgighAAgwQAAgwAighQAigiAvABQAwgBAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigigEBYxAQdQhOhOAAhvQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPgEhlrAL5QhchcAAiDQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhUtAG/QhDhDAAhfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBS9AEMQgygxAAhGQAAhGAygyQAxgwBGAAQBGgBAyAxQAxAyAABGQAABGgyAxQgxAyhGAAQhGAAgxgygEBngACbQiDABhbhcQhchbAAiCQAAiCBchcQBchcCDAAQCBAABcBcQBcBbAACCQAACDhcBbQhcBciBgBIgBAAgEhqSgGHQiHiHAAi+QAAi+CHiHQCGiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCHi+AAQi+AAiGiHgEhaQgGUQgxgxgBhGQABhGAxgxQAygyBFAAQBGAAAyAyQAyAxgBBGQABBGgyAxQgyAzhGAAQhFAAgygzgEBW0gIeQhDhDAAhfQAAhfBDhDQBDhEBfAAQBfAABDBEQBEBDAABfQAABfhDBDQhEBDhfAAQheAAhEhDgEBk+gO0QgwAAgigiQgighABgwQgBgwAjghQAhgiAwAAQAvAAAiAiQAhAhAAAwQAAAvghAiQgiAiguAAIgBAAg");
	this.shape_61.setTransform(735.9501,714.75);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBifgQnQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAhQgiAigvAAQgwAAgigiQghghAAgwgEBh6gCdQAAiCBchcQBdhdCCAAQCCAABcBdQBbBbAACCQABCChdBcQhcBciCAAQiCAAhchcQhchbAAiCgEBVFgLAQAAhfBEhEQBDhCBfAAQBfAABDBCQBDBEAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBW3ANhQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOQhPhOAAhvgEBRfACVQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhrugLMQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCGi+AAQi+AAiGiGQiHiGAAi/gEhmcAIbQAAiCBchdQBchbCCAAQCCAABcBbQBcBdAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhaWgILQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhVEAEdQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhXhAQoQAAgwAhghQAighAwAAQAvAAAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_62.setTransform(736.9001,698.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(102,255,255,0.2)").s().p("EhW/AR6QgigiAAgwQAAgvAigiQAighAvgBQAwABAhAhQAiAigBAwQABAvgiAiQghAhgwAAQgvAAgighgEBYGAQeQhPhOAAhvQAAhwBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBPQhOBOhvAAQhvAAhPhOgEhlAAL5QhchcABiDQgBiCBchbQBchcCDAAQCBAABcBcQBdBbAACCQAACDhdBcQhcBciBAAQiDAAhchcgEhUBAG/QhDhDAAhfQAAheBDhEQBDhDBgAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhgAAhDhEgEBSRAEMQgygxABhGQgBhGAygxQAxgxBGAAQBHAAAxAwQAyAxgBBHQAABGgxAxQgxAyhHAAQhGAAgxgygEBm0ACcQiCAAhchcQhbhbAAiCQAAiCBbhcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhbBciCAAIgBAAgEhpngGHQiHiHAAi+QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC+iGCHQiHCGi+ABQi+gBiGiGgEhZlgGTQgxgyAAhGQAAhGAxgyQAygxBGAAQBGAAAyAxQAxAyAABGQAABGgxAyQgyAxhGAAQhGAAgygxgEBWJgIeQhEhDAAhfQAAhfBEhEQBDhCBfAAQBfAABDBCQBDBEAABfQAABfhDBDQhDBEhfAAQhfAAhDhEgEBkSgO0QgwgBgighQghgiABgvQgBgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAxgiAhQghAigvAAIgBAAg");
	this.shape_63.setTransform(736.9001,698.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBh0gQnQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhgwAAQgwAAghgiQgighABgwgEBhPgCdQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBUagLAQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBWMANhQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhOAAhvgEBQ0ACVQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEhrCgLMQAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGQiGiHAAi+gEhlwAIaQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhZrgILQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhUZAEdQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEhW2AQoQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwg");
	this.shape_64.setTransform(737.8001,682.075);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(102,255,255,0.2)").s().p("EhWUAR5QgighABgwQgBgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigigEBXaAQeQhOhOAAhvQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOgEhkUAL5QhchcAAiDQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhTVAG/QhEhDAAhfQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhDhDgEBRlAENQgxgyAAhGQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxgEBmIACcQiCAAhbhcQhchbAAiCQAAiCBchcQBchcCDAAQCCAABbBcQBcBbAACCQAACDhcBbQhcBciBAAIgCAAgEho8gGHQiGiHAAi+QAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGgEhY5gGUQgxgxAAhGQAAhGAxgyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgygEBVdgIeQhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEgEBjngO0QgxAAghgiQghghAAgwQgBgvAjgiQAhgiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhguAAIgBAAg");
	this.shape_65.setTransform(737.8001,682.075);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBTugLAQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBhIgQnQAAgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBgjgCdQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBVgANhQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOQhPhOAAhvgEBQIACVQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhqXgLMQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGQiHiHAAi+gEhlFAIaQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhY/gILQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhTtAEdQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEhWKAQoQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwg");
	this.shape_66.setTransform(738.7501,665.725);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(102,255,255,0.2)").s().p("EhVoAR5QgighAAgwQAAgwAighQAhgiAwAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgwAAghgigEBWvAQeQhPhOAAhvQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBOhuAAQhwAAhOhOgEhjpAL5QhchcAAiDQAAiCBchcQBchbCCAAQCDAABcBbQBbBcABCCQgBCDhbBcQhcBciDAAQiCAAhchcgEhSqAG/QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBQ6AENQgygyABhGQgBhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgxAxhHAAQhGAAgxgxgEBldACcQiCAAhbhcQhdhbAAiCQAAiCBdhcQBchcCCAAQCCAABcBcQBbBbAACCQABCDhdBbQhbBciCAAIgBAAgEhoQgGHQiHiHAAi+QAAi+CHiHQCGiGC+AAQC/AACGCGQCGCHAAC+QAAC+iGCHQiGCGi/AAQi+AAiGiGgEhYOgGUQgxgxAAhGQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygygEBUygIeQhEhDAAhfQAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhCBDQhEBEhfAAQhfAAhDhEgEBi7gO0QgwAAgigiQghghABgwQgBgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_67.setTransform(738.7501,665.725);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBgdgQnQgBgvAigiQAigiAwAAQAvAAAhAiQAiAiAAAvQAAAwgiAiQghAhgwAAQgwAAghgiQgighABgwgEBTDgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBCQhEBEhfAAQhfAAhDhEQhDhCAAhfgEBf4gCdQAAiCBchbQBchdCCAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBbiDAAQiCAAhbhbQhchcAAiCgEBU1ANhQAAhvBOhPQBPhPBvAAQBvAABOBPQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPdACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhYUgILQAAhGAygyQAxgyBGAAQBGAAAyAyQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhprgLNQAAi+CGiGQCHiGC+AAQC+AACGCGQCHCGAAC+QAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/gEhkZAIaQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhTCAEdQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBCQhDBEhfAAQhfAAhEhEQhDhCAAhfgEhVfAQoQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAvgiAiQghAigwAAQgvAAgigiQgigiAAgvg");
	this.shape_68.setTransform(739.6501,649.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(102,255,255,0.2)").s().p("EhU9AR5QghgigBgwQABgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvABQgwgBgighgEBWEAQeQhPhOAAhvQAAhwBPhOQBOhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvABQhvgBhOhOgEhi9AL5QhchcAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACDhcBcQhcBbiCABQiCgBhchbgEhR+AG/QhEhDAAhfQAAhfBEhDQBDhDBfgBQBfABBDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhDhDgEBQOAENQgxgxAAhGQAAhHAxgxQAygxBGABQBGgBAyAwQAxAyAABHQAABGgyAxQgxAxhGAAQhGAAgygxgEBkxACcQiBAAhchcQhchbAAiBQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACBQABCDhdBbQhcBciBAAIgCAAgEhnlgGIQiGiGAAi/QAAi9CGiHQCHiHC+AAQC+AACGCHQCHCHAAC9QAAC/iHCGQiGCHi+AAQi+AAiHiHgEhXigGUQgygyABhFQgBhGAygyQAxgyBHAAQBGAAAxAyQAxAyAABGQAABFgxAyQgxAyhGAAQhHAAgxgygEBUGgIdQhDhDAAhfQAAhgBDhDQBDhDBfAAQBfAABDBDQBEBDAABgQAABfhDBDQhEBDhfAAQhfAAhDhDgEBiPgO0QgwAAghghQgigiABgvQgBgwAigiQAighAwgBQAvABAhAhQAiAiAAAvQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_69.setTransform(739.6501,649.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBfygQnQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhgwAAQgwAAghgiQgighABgwgEBSYgLAQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBfNgCdQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBUKANhQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhOAAhvgEBOyACVQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEhXogILQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhpAgLMQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGQiHiHAAi+gEhjuAIaQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhSWAEdQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEhUzAQoQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigiQghghAAgwg");
	this.shape_70.setTransform(740.5751,633.075);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(102,255,255,0.2)").s().p("EhUSAR5QghghAAgwQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigigEBVYAQeQhOhOAAhvQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOgEhiSAL5QhchcAAiDQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhRTAG/QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBPjAENQgxgyAAhGQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxgEBkGACcQiCAAhbhcQhchbAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciBAAIgCAAgEhm5gGHQiHiHAAi+QAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGgEhW3gGUQgxgxAAhGQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygygEBTbgIeQhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEgEBhkgO0QgwAAghgiQgighABgwQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_71.setTransform(740.5751,633.075);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBfGgQnQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhgwAAQgwAAghgiQgighABgwgEBRsgLAQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBehgCdQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBTeANhQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhOAAhvgEBOGACVQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEhW9gILQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhoUgLMQAAi+CGiHQCHiGC+AAQC+AACGCGQCHCHAAC+QAAC+iHCHQiGCGi+AAQi+AAiHiGQiGiHAAi+gEhjCAIaQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhRrAEdQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEhUIAQoQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwg");
	this.shape_72.setTransform(741.5001,616.725);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(102,255,255,0.2)").s().p("EhTmAR5QgighAAgwQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigigEBUtAQeQhPhOAAhvQAAhwBPhOQBOhPBwAAQBuAABPBPQBOBOAABvQAABvhOBPQhPBOhvAAQhvAAhOhOgEhhmAL5QhchcAAiDQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhQoAG/QhChDAAhfQAAhfBChDQBEhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhEhDgEBO3AENQgxgyAAhGQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgxAyQgyAxhGAAQhGAAgygxgEBjaACcQiBAAhchcQhchbAAiCQAAiCBchcQBdhcCBAAQCCAABcBcQBcBbAACCQAACDhcBbQhcBciBAAIgCAAgEhmOgGHQiGiHAAi+QAAi+CGiHQCHiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiHiGgEhWLgGUQgygxAAhGQAAhGAygyQAygxBGAAQBFAAAyAxQAxAyABBGQgBBGgxAxQgyAyhFAAQhGAAgygygEBSvgIeQhDhDAAhfQAAhfBEhDQBDhDBeAAQBgAABDBDQBDBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEgEBg4gO0QgwAAghgiQgighABgwQgBgvAigiQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_73.setTransform(741.5001,616.725);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBebgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghgiQgighABgvgEBRBgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBCQhEBEhfAAQhfAAhDhEQhDhCAAhfgEBd2gCdQAAiCBchbQBchdCCAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBbiDAAQiCAAhbhbQhchcAAiCgEBSzANhQAAhvBOhPQBPhPBvAAQBvAABOBPQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBNbACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhWRgILQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhnpgLNQAAi+CHiGQCGiGC+AAQC+AACHCGQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhiXAIaQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhQ/AEdQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBCQhDBEhfAAQhfAAhDhEQhDhCAAhfgEhTcAQoQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAvghAiQgiAigvAAQgwAAgigiQghgiAAgvg");
	this.shape_74.setTransform(742.4251,600.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("rgba(102,255,255,0.2)").s().p("EhS7AR5QghgiAAgvQAAgwAhghQAigiAwAAQAvAAAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigigEBUBAQeQhOhOAAhvQAAhvBOhPQBPhPBvABQBvgBBOBPQBPBOAABwQAABuhPBPQhOBOhvAAQhvAAhPhOgEhg7AL4QhchbAAiDQAAiCBchcQBchcCCABQCCgBBcBcQBcBcAACCQAACDhcBbQhcBciCAAQiCAAhchcgEhP8AG+QhDhDAAhfQAAheBDhEQBDhDBfABQBfgBBDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEgEBOMAENQgxgyAAhGQAAhFAxgyQAygwBGgBQBGAAAyAxQAxAxAABGQAABGgyAyQgxAyhGAAQhGAAgygygEBivACcQiCAAhbhbQhchbAAiDQAAiCBchcQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBbiBAAIgCAAgEhligGIQiHiGAAi+QAAi/CHiGQCGiHC+ABQC+gBCHCHQCGCGAAC/QAAC+iGCGQiHCHi+AAQi+AAiGiHgEhVggGUQgxgyAAhGQAAhGAxgxQAygxBGAAQBGAAAxAxQAyAxAABGQAABHgyAxQgxAyhGAAQhGAAgygygEBSEgIeQhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEgEBgNgO0QgwAAghgiQgighABgwQgBgvAigiQAigiAwABQAvgBAhAiQAiAhAAAwQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_75.setTransform(742.4251,600.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdvgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBQVgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBCQhEBEhfAAQhfAAhDhEQhDhCAAhfgEBdKgCdQAAiCBchbQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchcAAiCgEBSHANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBMvACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhVmgILQAAhGAygyQAxgxBGAAQBGAAAyAxQAxAyAABGQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhm9gLNQAAi9CGiHQCHiGC+AAQC+AACGCGQCHCHAAC9QAAC/iHCGQiGCHi+AAQi+AAiHiHQiGiGAAi/gEhhrAIaQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhQUAEdQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEhSxAQoQAAgwAighQAigiAvAAQAwAAAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgvAAgigiQgighAAgwg");
	this.shape_76.setTransform(743.3501,584.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("rgba(102,255,255,0.2)").s().p("EhSPAR5QgighAAgxQAAgvAigiQAighAvAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwABQgvgBgighgEBTVAQeQhOhOAAhvQAAhwBOhOQBPhOBwgBQBuABBPBOQBOBPAABvQAABuhOBPQhPBOhvABQhvgBhPhOgEhgPAL4QhchbAAiDQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBbQhcBdiCAAQiCAAhchdgEhPRAG/QhDhDABhfQgBhfBDhDQBEhDBfgBQBfABBDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhEhDgEBNgAENQgxgxAAhGQAAhHAxgxQAygxBGABQBHgBAxAwQAyAygBBHQAABGgxAxQgyAxhGAAQhGAAgygxgEBiDACcQiBAAhchcQhchbAAiCQAAiBBchcQBdhdCBAAQCCAABcBcQBcBcAACBQAACDhcBbQhcBciBAAIgCAAgEhk2gGIQiHiGAAi/QAAi9CHiHQCGiGC+gBQC+ABCHCGQCGCHAAC9QAAC/iGCGQiHCHi+AAQi+AAiGiHgEhU0gGUQgxgxgBhGQABhHAxgxQAygyBFABQBGgBAyAyQAxAxABBHQgBBGgxAxQgyAyhGAAQhFAAgygygEBRYgIdQhDhDAAhfQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhEBDheAAQhfAAhEhDgEBfhgO0QgwAAghghQgigiABgvQAAgwAhgiQAighAwgBQAvABAhAhQAiAiAAAvQABAwgjAiQghAhguAAIgCAAg");
	this.shape_77.setTransform(743.3501,584.05);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdlgR4QAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvQgBgwAigigEBd7gF6QBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCQAAiCBchcgEBSqAKjQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvQAAhvBOhPgEBQtgNiQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfQAAhfBDhEgEBM1AAeQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGQAAhGAxgygEhPogIMQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGgEhX8gLNQAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+gEhIdAEcQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABegEhXMAIaQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCgEhOgAQoQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwg");
	this.shape_78.setTransform(744.2751,567.725);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhOhOAAhvQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPgEhfkAL4QhchcAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEgEBM1AENQgxgxAAhGQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygygEBhYACcQiCAAhbhbQhchbAAiCQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBbiBAAIgCAAgEhkLgGIQiHiGAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgyAAhGQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygygEBQtgIdQhDhDAAhfQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBe2gO0QgwAAghghQgigiABgvQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAhguAAIgCAAg");
	this.shape_79.setTransform(744.2751,567.725);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCcQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBRcANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBMEACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_80.setTransform(744.2751,549.875);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCcQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBRcANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBMEACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_81.setTransform(744.2751,531.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCcQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBRcANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBMEACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_82.setTransform(744.2751,478.375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAjQghAhgwgBQgwAAghghQgigiABgvgEBcfgCdQAAiBBchcQBchcCCAAQCCAABcBcQBcBbAACBQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBRcANhQAAhvBOhPQBPhPBvAAQBvAABOBPQBPBPAABvQAABuhPBPQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhDQBDhEBfAAQBfAABDBEQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBMEACVQAAhGAxgxQAygwBGAAQBGgBAyAwQAxAyAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhmSgLNQAAi+CHiGQCGiGC+AAQC+AACHCGQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhU6gILQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgwAhghQAighAwAAQAvAAAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_83.setTransform(744.2751,460.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwABQAvgBAiAiQAhAiAAAvQAAAwghAhQgiAigvAAQgwAAgigigEBSqAQeQhOhOAAhvQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBPhvAAQhvAAhPhPgEhfkAL4QhchcAAiCQAAiDBchcQBchbCCAAQCCAABcBbQBcBcAACDQAACChcBcQhcBciCAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBM1AENQgxgyAAhFQAAhGAxgyQAygxBGAAQBGAAAyAwQAxAyAABHQAABFgyAyQgxAxhGABQhGgBgygxgEBhYACcQiCAAhbhcQhchaAAiCQAAiCBchcQBchcCCAAQCCgBBcBcQBcBcAACCQAACChcBbQhcBciBAAIgCAAgEhkLgGHQiHiHAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCHQiHCGi+AAQi+AAiGiGgEhUJgGUQgxgyAAhFQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABFgyAyQgxAyhGAAQhGAAgygygEBQtgIdQhDhDAAhfQAAhfBDhDQBDhEBfAAQBfAABDBEQBEBDAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBe2gOzQgwgBghghQgigiABgvQgBgvAigjQAighAwAAQAvAAAhAhQAiAiAAAvQAAAxgiAhQghAiguAAIgCAAg");
	this.shape_84.setTransform(744.2751,460.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCcQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBRcANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBMEACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCg");
	this.shape_85.setTransform(744.2751,442.625);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAjQghAhgwgBQgwAAghghQgigiABgvgEBcfgCdQAAiBBchcQBchcCCAAQCCAABcBcQBcBbAACBQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBRcANhQAAhvBOhPQBPhPBvAAQBvAABOBPQBPBPAABuQAABvhPBPQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhDQBDhEBfAAQBfAABDBEQBEBDAABfQAABfhDBDQhEBEhfAAQhfAAhDhEQhDhDAAhfgEBMEACVQAAhGAxgxQAygwBGAAQBGgBAyAwQAxAyAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhmSgLNQAAi+CHiGQCGiGC+AAQC+AACHCGQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gILQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgwAhghQAighAwAAQAvAAAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_86.setTransform(744.2751,424.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwAAQAvAAAiAiQAhAiAAAvQAAAwghAhQgiAigvAAQgwAAgigigEBSqAQeQhOhOAAhvQAAhwBOhOQBPhOBvgBQBvABBOBOQBPBPAABvQAABuhPBPQhOBOhvABQhvgBhPhOgEhfkAL4QhchcAAiCQAAiCBchdQBchbCCAAQCCAABcBbQBcBdAACCQAACChcBcQhcBciCAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEgEBM1AENQgxgxAAhGQAAhHAxgxQAygxBGABQBGgBAyAwQAxAyAABHQAABGgyAxQgxAxhGAAQhGAAgygxgEBhYACcQiCAAhbhcQhchbAAiCQAAiBBchcQBchdCCABQCCAABcBcQBcBbAACBQAACDhcBbQhcBciBAAIgCAAgEhkLgGIQiHiGAAi/QAAi9CHiHQCGiGC+gBQC+ABCHCGQCGCHAAC9QAAC/iGCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgxAAhGQAAhHAxgxQAygyBGABQBGgBAxAyQAyAxAABHQAABGgyAxQgxAyhGAAQhGAAgygygEBQtgIdQhDhDAAhfQAAhfBDhDQBDhDBfgBQBfABBDBDQBEBDAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBe2gOzQgwAAghgiQgighABgwQgBgwAighQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAvgiAjQghAhguAAIgCAAg");
	this.shape_87.setTransform(744.2751,424.75);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCcQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBRcANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBMEACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_88.setTransform(744.2751,353.275);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgvAigjQAhghAwAAQAvAAAiAhQAhAiABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBcegCdQAAiBBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCChdBcQhcBciCgBQiCAAhchbQhchcAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBMDACWQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhmSgLNQAAi9CHiHQCGiGC+AAQC+AACHCGQCGCHAAC9QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhU6gILQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_89.setTransform(744.2501,335.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwABQAwgBAhAiQAiAiAAAvQAAAwgiAhQghAigwAAQgwAAgigigEBSqAQeQhPhOAAhvQAAhwBPhOQBOhPBwAAQBvAABOBPQBPBOAABvQAABvhPBPQhPBPhugBQhwABhOhPgEhfkAL4QhbhcgBiCQABiDBbhcQBchbCCAAQCDAABcBbQBbBcAACDQAACChbBcQhcBciDAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBEhDBeAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQheAAhEhDgEBM1AENQgygyAAhFQAAhGAygyQAxgxBHAAQBGAAAxAwQAyAygBBHQAABFgxAyQgxAxhGABQhHgBgxgxgEBhYACcQiCAAhbhcQhdhaAAiCQAAiCBdhcQBchcCCAAQCCgBBcBcQBbBcAACCQABCChdBbQhbBciCAAIgBAAgEhkLgGHQiGiHAAi/QAAi+CGiGQCGiHC/AAQC9AACHCHQCHCGAAC+QAAC/iHCHQiHCGi9AAQi/AAiGiGgEhUIgGUQgygyAAhFQAAhGAygyQAxgyBGAAQBGAAAxAyQAyAyAABGQAABFgyAyQgxAyhGAAQhGAAgxgygEBQtgIdQhEhDAAhfQAAhfBEhDQBDhEBfAAQBfAABDBEQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhDhDgEBe2gOzQgwgBgighQghgiABgvQgBgvAigjQAhghAwAAQAvAAAiAhQAhAiABAwQAAAwgiAhQghAigvAAIgBAAg");
	this.shape_90.setTransform(744.2501,335.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCcQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhcBciCgBQiCAAhchbQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACWQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_91.setTransform(744.2501,317.525);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgvAhgiQAighAwAAQAwAAAhAhQAiAiAAAwQAAAvgiAiQghAhgwAAQgwAAgighgEBSqAQeQhPhOAAhvQAAhvBPhPQBOhOBwAAQBvAABOBOQBPBPAABvQAABvhPBOQhPBPhuAAQhwAAhOhPgEhfkAL4QhbhcgBiCQABiCBbhcQBchcCCAAQCDAABcBcQBbBcAACCQAACChbBcQhcBciDAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBEhDBeAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQheAAhEhEgEBM1AENQgygxAAhGQAAhGAygyQAxgwBHAAQBGgBAxAxQAyAxgBBHQAABGgxAxQgxAyhGAAQhHAAgxgygEBhYACcQiCAAhbhbQhdhbAAiCQAAiCBdhcQBchdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhbBbiCAAIgBAAgEhkLgGIQiGiGAAi/QAAi+CGiGQCGiHC/AAQC9AACHCHQCHCGAAC+QAAC/iHCGQiHCHi9AAQi/AAiGiHgEhUIgGUQgygyAAhGQAAhGAygxQAxgyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgxgygEBQtgIdQhEhDAAhfQAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhDhDgEBe2gO0QgwAAgighQghgiABgvQgBgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_92.setTransform(744.2501,317.525);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgvAigjQAhghAwAAQAvAAAiAhQAhAiABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBcegCdQAAiBBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCChdBcQhcBciCgBQiCAAhchbQhchcAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBMDACWQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhmSgLMQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi+gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhU6gILQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_93.setTransform(744.2501,299.65);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwAAQAwAAAhAiQAiAiAAAvQAAAwgiAhQghAigwAAQgwAAgigigEBSqAQeQhPhOAAhvQAAhwBPhOQBOhOBwgBQBvABBOBOQBPBPAABvQAABuhPBPQhPBOhuABQhwgBhOhOgEhfkAL4QhbhcgBiCQABiCBbhdQBchbCCAAQCDAABcBbQBbBdAACCQAACChbBcQhcBciDAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBEhDBeAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQheAAhEhEgEBM1AENQgygxAAhGQAAhHAygxQAxgxBHABQBGgBAxAwQAyAygBBHQAABGgxAxQgxAxhGAAQhHAAgxgxgEBhYACcQiCAAhbhcQhdhbAAiCQAAiBBdhcQBchdCCABQCCAABcBcQBbBbAACBQABCDhdBbQhbBciCAAIgBAAgEhkLgGIQiGiGAAi/QAAi9CGiHQCGiGC/gBQC9ABCHCGQCHCHAAC9QAAC/iHCGQiHCHi9AAQi/AAiGiHgEhUIgGUQgygxAAhGQAAhHAygxQAxgyBGABQBGgBAxAyQAyAxAABHQAABGgyAxQgxAyhGAAQhGAAgxgygEBQtgIdQhEhDAAhfQAAhfBEhDQBDhDBfgBQBfABBDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhDhDgEBe2gOzQgwAAgigiQghghABgwQgBgwAighQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAvgiAjQghAhgvAAIgBAAg");
	this.shape_94.setTransform(744.2501,299.65);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCcQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhcBciCgBQiCAAhchbQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACWQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_95.setTransform(744.2501,281.775);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgvAigjQAhghAwAAQAvAAAiAhQAhAiABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwgEBcegCcQAAiCBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCChdBcQhcBciCgBQiCAAhchbQhchcAAiBgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhDQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBMDACWQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhmSgLMQAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGQiHiHAAi+gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhU6gILQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_96.setTransform(744.2501,263.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgvAhgiQAighAwgBQAwABAhAhQAiAhAAAxQAAAvgiAiQghAhgwAAQgwAAgighgEBSqAQeQhPhOAAhvQAAhvBPhPQBOhPBwAAQBvAABOBPQBPBPAABvQAABvhPBOQhPBPhuAAQhwAAhOhPgEhfkAL4QhbhcgBiDQABiBBbhcQBchcCCAAQCDAABcBcQBbBcAACBQAACDhbBcQhcBciDAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBEhDBeAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQheAAhEhEgEBM1AENQgygxAAhHQAAhGAygxQAxgwBHAAQBGgBAxAxQAyAxgBBGQAABHgxAxQgxAyhGgBQhHABgxgygEBhYACcQiCAAhbhbQhdhbAAiDQAAiBBdhcQBchdCCAAQCCAABcBdQBbBbAACBQABCDhdBcQhbBbiCAAIgBAAgEhkLgGIQiGiGAAi/QAAi+CGiGQCGiHC/ABQC9gBCHCHQCHCGAAC+QAAC/iHCGQiHCHi9AAQi/AAiGiHgEhUIgGUQgygxAAhHQAAhGAygxQAxgxBGAAQBGAAAxAxQAyAxAABGQAABHgyAxQgxAyhGAAQhGAAgxgygEBQtgIdQhEhDAAhfQAAhfBEhEQBDhDBfABQBfgBBDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhDhDgEBe2gO0QgwABgigiQghghABgwQgBgvAigiQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAvgiAjQghAhgvAAIgBgBg");
	this.shape_97.setTransform(744.2501,263.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBcQBbBcAACBQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBRbANhQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABwhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACVQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEhSFAQnQAAgvAhgiQAigiAwAAQAvAAAiAiQAhAiAAAvQAAAwghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_98.setTransform(744.2501,246.05);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgwAhghQAighAwAAQAwAAAhAhQAiAhAAAxQAAAvgiAiQghAhgwAAQgwAAgighgEBSqAQeQhPhOAAhvQAAhvBPhPQBOhOBwAAQBvAABOBOQBPBPAABuQAABwhPBOQhPBPhugBQhwABhOhPgEhfkAL4QhbhcgBiDQABiCBbhcQBchbCCAAQCDAABcBbQBbBcAACCQAACDhbBcQhcBciDAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBEhDBeAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQheAAhEhDgEBM1AENQgygyAAhGQAAhFAygyQAxgwBHgBQBGAAAxAxQAyAxgBBGQAABGgxAyQgxAxhGABQhHgBgxgxgEBhYACcQiCAAhbhbQhdhbAAiCQAAiCBdhcQBchdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhbBbiCAAIgBAAgEhkLgGHQiGiHAAi+QAAi+CGiHQCGiGC/AAQC9AACHCGQCHCHAAC+QAAC+iHCHQiHCGi9AAQi/AAiGiGgEhUIgGUQgygyAAhGQAAhFAygyQAxgxBGgBQBGABAxAxQAyAyAABFQAABGgyAyQgxAyhGAAQhGAAgxgygEBQtgIdQhEhDAAhfQAAhfBEhEQBDhCBfAAQBfAABDBCQBDBEAABfQAABfhDBDQhDBEhfAAQhfAAhDhEgEBe2gO0QgwAAgighQghgiABgvQgBgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAxgiAhQghAigvAAIgBgBg");
	this.shape_99.setTransform(744.2501,246.05);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCcQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhcBciCgBQiCAAhchbQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACWQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_100.setTransform(744.2501,228.175);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBcQBbBcAACBQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBRbANhQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABwhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACVQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchdQBchbCCAAQCCAABcBbQBcBdAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDQhDhDAAhfgEhSFAQnQAAgvAhgiQAigiAwAAQAvAAAiAiQAhAiAAAvQAAAwghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_101.setTransform(744.2501,210.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwABQAwgBAhAiQAiAhAAAwQAAAwgiAhQghAigwAAQgwAAgigigEBSqAQeQhPhOAAhvQAAhwBPhOQBOhPBwAAQBvAABOBPQBPBOAABvQAABvhPBPQhPBPhugBQhwABhOhPgEhfkAL4QhbhcgBiCQABiDBbhcQBchbCCAAQCDAABcBbQBbBcAACDQAACChbBcQhcBciDAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBEhDBeAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQheAAhEhDgEBM1AENQgygyAAhFQAAhGAygyQAxgxBHAAQBGAAAxAwQAyAygBBHQAABFgxAyQgxAxhGABQhHgBgxgxgEBhYACcQiCAAhbhcQhdhaAAiCQAAiCBdhcQBchcCCAAQCCgBBcBcQBbBcAACCQABCChdBbQhbBciCAAIgBAAgEhkLgGHQiGiHAAi/QAAi+CGiGQCGiHC/AAQC9AACHCHQCHCGAAC+QAAC/iHCHQiHCGi9AAQi/AAiGiGgEhUIgGUQgygyAAhFQAAhGAygyQAxgyBGAAQBGAAAxAyQAyAyAABGQAABFgyAyQgxAyhGAAQhGAAgxgygEBQtgIdQhEhDAAhfQAAhfBEhDQBDhEBfAAQBfAABDBEQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhDhDgEBe2gOzQgwgBgighQghgiABgvQgBgvAigjQAhghAwAAQAvAAAiAhQAhAiABAvQAAAxgiAhQghAigvAAIgBAAg");
	this.shape_102.setTransform(744.2501,210.3);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCcQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhcBciCgBQiCAAhchbQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACWQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_103.setTransform(744.2501,192.425);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBcQBbBcAACBQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBRbANhQAAhvBPhPQBOhPBwAAQBvAABOBPQBOBPAABuQAABwhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACVQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhAAIaQAAiCBchdQBchbCCAAQCCAABcBbQBcBdAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgvAhgiQAigiAwAAQAvAAAiAiQAhAiAAAvQAAAwghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_104.setTransform(744.2501,174.55);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwAAQAwAAAhAiQAiAiAAAvQAAAwgiAhQghAigwAAQgwAAgigigEBSqAQeQhPhOAAhvQAAhwBPhOQBOhOBwgBQBvABBOBOQBPBPAABuQAABvhPBPQhPBOhuABQhwgBhOhOgEhfkAL4QhbhcgBiCQABiCBbhdQBchbCCAAQCDAABcBbQBbBdAACCQAACChbBcQhcBciDAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBEhDBeAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQheAAhEhDgEBM1AENQgygxAAhGQAAhHAygxQAxgxBHABQBGgBAxAwQAyAygBBHQAABGgxAxQgxAxhGAAQhHAAgxgxgEBhYACcQiCAAhbhcQhdhbAAiCQAAiBBdhcQBchdCCABQCCAABcBcQBbBbAACBQABCDhdBbQhbBciCAAIgBAAgEhkLgGIQiGiGAAi/QAAi9CGiHQCGiGC/gBQC9ABCHCGQCHCHAAC9QAAC/iHCGQiHCHi9AAQi/AAiGiHgEhUIgGUQgygxAAhGQAAhHAygxQAxgyBGABQBGgBAxAyQAyAxAABHQAABGgyAxQgxAyhGAAQhGAAgxgygEBQtgIdQhEhDAAhfQAAhfBEhDQBDhDBfgBQBfABBDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhDhDgEBe2gOzQgwAAgigiQghghABgwQgBgwAighQAhgiAwAAQAvAAAiAiQAhAhABAwQAAAvgiAjQghAhgvAAIgBAAg");
	this.shape_105.setTransform(744.2501,174.55);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCcQAAiCBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBcQhcBciCgBQiCAAhchbQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACWQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_106.setTransform(744.2501,156.675);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCdQAAiBBchcQBchdCCAAQCCAABcBcQBcBcAACBQAACDhcBcQhcBbiDAAQiCAAhbhbQhchcAAiCgEBRcANhQAAhvBOhPQBPhPBvAAQBvAABOBPQBPBPAABvQAABvhPBOQhOBOhvAAQhvAAhPhOQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBMEACWQAAhGAxgyQAygxBGAAQBGAAAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhhAAIZQAAiCBchbQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_107.setTransform(744.2251,120.95);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgwAhghQAighAwAAQAvAAAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhOhOAAhvQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABuQAABwhPBOQhOBPhvgBQhvABhPhPgEhfkAL4QhchcAAiDQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBM1AENQgxgyAAhGQAAhFAxgyQAygwBGgBQBGAAAyAxQAxAxAABGQAABGgyAyQgxAxhGABQhGgBgygxgEBhYACcQiCAAhbhbQhchbAAiCQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBbiBAAIgCAAgEhkLgGHQiHiHAAi+QAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGgEhUJgGUQgxgyAAhGQAAhFAxgyQAygxBGgBQBGABAxAxQAyAyAABFQAABGgyAyQgxAyhGAAQhGAAgygygEBQtgIdQhDhDAAhfQAAhfBDhEQBDhCBfAAQBfAABDBCQBEBEAABfQAABfhDBDQhEBEhfAAQhfAAhDhEgEBe2gOzQgwgBghghQgigiABgvQgBgvAigjQAighAwAAQAvAAAhAhQAiAiAAAvQAAAxgiAhQghAiguAAIgCAAg");
	this.shape_108.setTransform(744.2251,120.95);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCcQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBRcANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBMEACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGg");
	this.shape_109.setTransform(744.2251,103.075);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCdQAAiBBchcQBchdCCAAQCCAABcBcQBcBcAACBQAACDhcBcQhcBbiDAAQiCAAhbhbQhchcAAiCgEBRcANhQAAhvBOhPQBPhPBvAAQBvAABOBPQBPBPAABvQAABvhPBOQhOBOhvAAQhvAAhPhOQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhhAAIZQAAiBBchcQBchcCCAAQCCAABcBcQBcBcAACBQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwgEBMEACWQAAhGAxgyQAygxBGAAQBGAAAyAxQAxAxAABHQAABGgyAxQgxAxhGAAQhGAAgygxQgxgxAAhGg");
	this.shape_110.setTransform(744.2251,85.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwABQAvgBAiAiQAhAiAAAvQAAAwghAhQgiAigvAAQgwAAgigigEBSqAQeQhOhOAAhvQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBPhvgBQhvABhPhPgEhfkAL4QhchcAAiCQAAiDBchcQBchbCCAAQCCAABcBbQBcBcAACDQAACChcBcQhcBciCAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBM1AENQgxgyAAhFQAAhGAxgyQAygxBGAAQBGAAAyAwQAxAyAABHQAABFgyAyQgxAxhGABQhGgBgygxgEBhYACcQiCAAhbhcQhchaAAiCQAAiCBchcQBchcCCAAQCCgBBcBcQBcBcAACCQAACChcBbQhcBciBAAIgCAAgEhkLgGHQiHiHAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCHQiHCGi+AAQi+AAiGiGgEhUJgGUQgxgyAAhFQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABFgyAyQgxAyhGAAQhGAAgygygEBQtgIdQhDhDAAhfQAAhfBDhDQBDhEBfAAQBfAABDBEQBEBDAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBe2gOzQgwgBghghQgigiABgvQgBgvAigjQAighAwAAQAvAAAhAhQAiAiAAAvQAAAxgiAhQghAiguAAIgCAAg");
	this.shape_111.setTransform(744.2251,85.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCcQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBRcANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwgEBMEACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGg");
	this.shape_112.setTransform(744.2251,67.325);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCdQAAiBBchcQBchdCCAAQCCAABcBcQBcBcAACBQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBRcANhQAAhvBOhPQBPhPBvAAQBvAABOBPQBPBPAABvQAABvhPBOQhOBOhvAAQhvAAhPhOQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEBMEACWQAAhHAxgxQAygxBGAAQBGAAAyAwQAxAyAABHQAABGgyAxQgxAxhGAAQhGAAgygxQgxgxAAhGg");
	this.shape_113.setTransform(744.2251,49.45);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwAAQAvAAAiAiQAhAiAAAvQAAAwghAhQgiAigvAAQgwAAgigigEBSqAQeQhOhOAAhvQAAhwBOhOQBPhOBvgBQBvABBOBOQBPBPAABuQAABvhPBPQhOBOhvABQhvgBhPhOgEhfkAL4QhchcAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBM1AENQgxgxAAhGQAAhHAxgxQAygxBGABQBGgBAyAwQAxAyAABHQAABGgyAxQgxAxhGAAQhGAAgygxgEBhYACcQiCAAhbhcQhchbAAiCQAAiBBchcQBchdCCABQCCAABcBcQBcBbAACBQAACDhcBbQhcBciBAAIgCAAgEhkLgGIQiHiGAAi/QAAi9CHiHQCGiGC+gBQC+ABCHCGQCGCHAAC9QAAC/iGCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgxAAhGQAAhHAxgxQAygyBGABQBGgBAxAyQAyAxAABHQAABGgyAxQgxAyhGAAQhGAAgygygEBQtgIdQhDhDAAhfQAAhfBDhDQBDhDBfgBQBfABBDBDQBEBDAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBe2gOzQgwAAghgiQgighABgwQgBgwAighQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAvgiAjQghAhguAAIgCAAg");
	this.shape_114.setTransform(744.2251,49.45);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCdQAAiBBchcQBchdCCAAQCCAABcBcQBcBcAACBQAACDhcBbQhcBdiDgBQiCAAhbhcQhchbAAiCgEBRcANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABuQAABwhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhAAIZQAAiCBchbQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwgEBMEACVQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGg");
	this.shape_115.setTransform(744.2251,31.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgvAhgiQAighAwgBQAvABAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhOhOAAhvQAAhvBOhPQBPhPBvABQBvgBBOBPQBPBOAABwQAABuhPBPQhOBOhvAAQhvAAhPhOgEhfkAL4QhchcAAiDQAAiCBchbQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEgEBM1AENQgxgyAAhGQAAhFAxgyQAygwBGgBQBGAAAyAxQAxAxAABGQAABGgyAyQgxAyhGAAQhGAAgygygEBhYACcQiCAAhbhbQhchbAAiDQAAiBBchcQBchdCCAAQCCABBcBbQBcBcAACBQAACDhcBcQhcBbiBAAIgCAAgEhkLgGIQiHiGAAi+QAAi/CHiGQCGiHC+ABQC+gBCHCHQCGCGAAC/QAAC+iGCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgxAAhHQAAhGAxgxQAygxBGAAQBGAAAxAxQAyAxAABGQAABHgyAxQgxAyhGAAQhGAAgygygEBQtgIdQhDhDAAhfQAAhfBDhEQBDhDBfABQBfgBBDBDQBEBEAABfQAABfhDBDQhEBEhfAAQhfAAhDhEgEBe2gO0QgwAAghghQgighABgwQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAjQghAhguAAIgCgBg");
	this.shape_116.setTransform(744.2251,31.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCcQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciDgBQiCAAhbhbQhchbAAiCgEBRcANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABvQAABvhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwgEBMEACWQAAhGAxgyQAygwBGAAQBGgBAyAxQAxAxAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGg");
	this.shape_117.setTransform(744.2251,13.725);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCdQAAiBBchcQBchdCCAAQCCAABcBcQBcBcAACBQAACDhcBbQhcBdiDgBQiCAAhbhcQhchbAAiCgEBRcANhQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABuQAABwhPBOQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBMEACWQAAhHAxgxQAygxBGAAQBGAAAyAwQAxAyAABHQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_118.setTransform(744.2251,-4.15);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgwAhghQAighAwAAQAvAAAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhOhOAAhvQAAhvBOhPQBPhOBvAAQBvAABOBOQBPBPAABuQAABwhPBOQhOBPhvgBQhvABhPhPgEhfkAL4QhchcAAiDQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBM1AENQgxgyAAhFQAAhGAxgyQAygwBGgBQBGAAAyAxQAxAxAABHQAABFgyAyQgxAxhGABQhGgBgygxgEBhYACcQiCAAhbhbQhchbAAiCQAAiCBchcQBchdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBbiBAAIgCAAgEhkLgGHQiHiHAAi+QAAi+CHiHQCGiGC+AAQC+AACHCGQCGCHAAC+QAAC+iGCHQiHCGi+AAQi+AAiGiGgEhUJgGUQgxgyAAhGQAAhFAxgyQAygxBGgBQBGABAxAxQAyAyAABFQAABGgyAyQgxAyhGAAQhGAAgygygEBQtgIdQhDhDAAhfQAAhfBDhEQBDhCBfAAQBfAABDBCQBEBEAABfQAABfhDBDQhEBEhfAAQhfAAhDhEgEBe2gO0QgwAAghghQgigiABgvQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAxgiAhQghAiguAAIgCgBg");
	this.shape_119.setTransform(744.2251,-4.15);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCdQAAiBBchcQBchdCCAAQCCAABcBcQBcBcAACBQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBRcANhQAAhvBOhPQBPhPBvAAQBvAABOBPQBPBPAABuQAABvhPBPQhOBOhvAAQhvAAhPhOQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBMEACVQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIZQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgwAhghQAighAwAAQAvAAAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_120.setTransform(744.2251,-39.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwABQAvgBAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigigEBSqAQeQhOhOAAhvQAAhwBOhOQBPhPBvAAQBvAABOBPQBPBOAABvQAABvhPBPQhOBPhvgBQhvABhPhPgEhfkAL4QhchcAAiCQAAiDBchcQBchbCCAAQCCAABcBbQBcBcAACDQAACChcBcQhcBciCAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBM1AENQgxgyAAhFQAAhGAxgyQAygxBGAAQBGAAAyAwQAxAyAABHQAABFgyAyQgxAxhGABQhGgBgygxgEBhYACcQiCAAhbhcQhchaAAiCQAAiCBchcQBchcCCAAQCCgBBcBcQBcBcAACCQAACChcBbQhcBciBAAIgCAAgEhkLgGHQiHiHAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCHQiHCGi+AAQi+AAiGiGgEhUJgGUQgxgyAAhFQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABFgyAyQgxAyhGAAQhGAAgygygEBQtgIdQhDhDAAhfQAAhfBDhDQBDhEBfAAQBfAABDBEQBEBDAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBe2gOzQgwgBghghQgigiABgvQgBgvAigjQAighAwAAQAvAAAhAhQAiAiAAAvQAAAxgiAhQghAiguAAIgCAAg");
	this.shape_121.setTransform(744.2251,-39.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdEgQmQgBgwAigiQAighAwAAQAvAAAhAhQAiAiAAAvQAAAwgiAiQghAigwgBQgwAAghghQgigiABgvgEBcfgCdQAAiBBchcQBchdCCAAQCCAABcBcQBcBcAACBQAACDhcBbQhcBciDAAQiCAAhbhcQhchbAAiCgEBRcANhQAAhvBOhPQBPhPBvAAQBvAABOBPQBPBPAABuQAABvhPBPQhOBPhvAAQhvAAhPhPQhOhOAAhvgEBPqgK/QAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQAABfhDBDQhEBDhfAAQhfAAhDhDQhDhDAAhfgEBMEACVQAAhGAxgxQAygxBGAAQBGAAAyAwQAxAyAABGQAABGgyAyQgxAxhGAAQhGAAgygxQgxgyAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIZQAAiCBchcQBchbCCAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgwAhghQAighAwAAQAvAAAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_122.setTransform(744.2251,-75.65);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwAAQAvAAAiAiQAhAiAAAvQAAAwghAhQgiAigvAAQgwAAgigigEBSqAQeQhOhOAAhvQAAhwBOhOQBPhOBvgBQBvABBOBOQBPBPAABvQAABuhPBPQhOBOhvABQhvgBhPhOgEhfkAL4QhchcAAiCQAAiCBchdQBchbCCAAQCCAABcBbQBcBdAACCQAACChcBcQhcBciCAAQiCAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBDhfAAQhfAAhDhDgEBM1AENQgxgxAAhGQAAhHAxgxQAygxBGABQBGgBAyAwQAxAyAABHQAABGgyAxQgxAxhGAAQhGAAgygxgEBhYACcQiCAAhbhcQhchbAAiCQAAiBBchcQBchdCCABQCCAABcBcQBcBbAACBQAACDhcBbQhcBciBAAIgCAAgEhkLgGIQiHiGAAi/QAAi9CHiHQCGiGC+gBQC+ABCHCGQCGCHAAC9QAAC/iGCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgxAAhGQAAhHAxgxQAygyBGABQBGgBAxAyQAyAxAABHQAABGgyAxQgxAyhGAAQhGAAgygygEBQtgIdQhDhDAAhfQAAhfBDhDQBDhDBfgBQBfABBDBDQBEBDAABfQAABfhDBDQhEBDhfAAQhfAAhDhDgEBe2gOzQgwAAghgiQgighABgwQgBgwAighQAigiAwAAQAvAAAhAiQAiAhAAAwQAAAvgiAjQghAhguAAIgCAAg");
	this.shape_123.setTransform(744.2251,-75.65);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBdQBbBbAACCQABCChdBcQhcBciCgBQiCAAhchbQhchcAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBMDACWQAAhGAygyQAxgxBGAAQBHAAAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhU6gILQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_124.setTransform(744.2001,-93.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhPhOAAhvQAAhvBPhPQBOhPBwABQBvgBBOBPQBOBOAABwQAABuhOBPQhPBOhvAAQhvAAhOhOgEhfjAL4QhchcAAiDQAAiCBchbQBchcCBAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBciCAAQiBAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBEhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEgEBM1AENQgygyAAhGQAAhFAygyQAygwBFgBQBHAAAxAxQAyAxgBBGQAABGgxAyQgyAyhGgBQhFABgygygEBhYACcQiCAAhchbQhchbAAiDQAAiBBchcQBdhdCCAAQCCABBcBbQBcBcAACBQAACDhcBcQhcBbiCAAIgBAAgEhkLgGIQiHiGAAi+QAAi/CHiGQCGiHC+ABQC+gBCHCHQCHCGgBC/QABC+iHCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgxAAhHQAAhGAxgxQAygxBGAAQBGAAAyAxQAxAxAABGQAABHgxAxQgyAyhGAAQhGAAgygygEBQsgIdQhDhDABhfQAAhfBDhEQBDhDBfABQBfgBBDBDQBEBEAABfQgBBfhDBDQhDBEhfAAQhfAAhEhEgEBe2gO0QgwAAghghQgighAAgwQAAgwAigiQAhghAwAAQAvAAAiAhQAiAiAAAvQAAAwgiAjQghAhgvAAIgBgBg");
	this.shape_125.setTransform(744.2001,-93.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBcQBbBcAACBQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBRbANhQAAhvBPhPQBOhPBwAAQBvAABOBPQBOBPAABuQAABwhOBOQhPBOhvAAQhvAAhOhOQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACVQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIZQAAiCBchbQBchcCCAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBciCAAQiCAAhchcQhchcAAiDgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_126.setTransform(744.2001,-111.4);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgvAhgiQAighAwgBQAvABAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhPhOAAhvQAAhvBPhPQBOhPBwAAQBvAABOBPQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPgEhfjAL4QhchcAAiDQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACDhcBcQhcBciCAAQiBAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBEhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEgEBM1AENQgygxAAhHQAAhGAygxQAygwBFAAQBHgBAxAwQAyAygBBGQAABHgxAxQgyAyhGgBQhFABgygygEBhYACcQiCAAhchbQhchbAAiDQAAiBBchcQBdhdCCAAQCCAABcBdQBcBbAACBQAACDhcBcQhcBbiCAAIgBAAgEhkLgGIQiHiGAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCHCGgBC+QABC/iHCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgxAAhHQAAhGAxgxQAygxBGAAQBGAAAyAxQAxAxAABGQAABHgxAxQgyAyhGAAQhGAAgygygEBQsgIdQhDhDABhfQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQgBBfhDBDQhDBDhfAAQhfAAhEhDgEBe2gO0QgwABghgiQgighAAgwQAAgvAigiQAhgiAwAAQAvAAAiAiQAiAhAAAwQAAAvgiAjQghAhgvAAIgBgBg");
	this.shape_127.setTransform(744.2001,-111.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAiQgiAigvgBQgwAAgighQghgiAAgvgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBdQBbBbAACCQABCChdBcQhcBciCgBQiCAAhchbQhchcAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBMDACWQAAhGAygyQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAxhGAAQhGAAgxgxQgygxAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABeQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhU6gILQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_128.setTransform(744.2001,-129.25);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgwAhghQAighAwAAQAvAAAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhPhOAAhvQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABuQAABwhOBOQhPBPhvgBQhvABhOhPgEhfjAL4QhchcAAiDQAAiCBchcQBchbCBAAQCCAABcBbQBcBcAACCQAACDhcBcQhcBciCAAQiBAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBM1AENQgygyAAhGQAAhFAygyQAygwBFgBQBHAAAxAxQAyAxgBBGQAABGgxAyQgyAxhGABQhFgBgygxgEBhYACcQiCAAhchbQhchbAAiCQAAiCBchcQBdhdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBbiCAAIgBAAgEhkLgGHQiHiHAAi+QAAi+CHiHQCGiGC+AAQC+AACHCGQCHCHgBC+QABC+iHCHQiHCGi+AAQi+AAiGiGgEhUJgGUQgxgyAAhGQAAhFAxgyQAygxBGgBQBGABAyAxQAxAyAABFQAABGgxAyQgyAyhGAAQhGAAgygygEBQsgIdQhDhDABhfQAAhfBDhEQBDhCBfAAQBfAABDBCQBEBEAABfQgBBfhDBDQhDBEhfAAQhfAAhEhEgEBe2gO0QgwAAghghQgigiAAgvQAAgwAigiQAhghAwAAQAvAAAiAhQAiAiAAAvQAAAxgiAhQghAigvAAIgBgBg");
	this.shape_129.setTransform(744.2001,-129.25);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhPhOAAhvQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPgEhfjAL4QhchcAAiCQAAiCBchcQBchcCBAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiBAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBEhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEgEBM1AENQgygxAAhGQAAhGAygyQAygwBFAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhFAAgygygEBhYACcQiCAAhchbQhchbAAiCQAAiCBchcQBdhdCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBbiCAAIgBAAgEhkLgGIQiHiGAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCHCGgBC+QABC/iHCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgyAAhGQAAhGAxgxQAygyBGAAQBGAAAyAyQAxAxAABGQAABGgxAyQgyAyhGAAQhGAAgygygEBQsgIdQhDhDABhfQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQgBBfhDBDQhDBDhfAAQhfAAhEhDgEBe2gO0QgwAAghghQgigiAAgvQAAgwAigiQAhghAwAAQAvAAAiAhQAiAiAAAvQAAAwgiAiQghAhgvAAIgBAAg");
	this.shape_130.setTransform(744.2001,-147.125);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAjQgiAhgvgBQgwAAgighQghgiAAgvgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBdQBbBbAACCQABCChdBbQhcBdiCgBQiCAAhchcQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBMDACVQAAhGAygxQAxgwBGAAQBHgBAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhmSgLNQAAi+CHiGQCGiGC+AAQC+AACHCGQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gILQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_131.setTransform(744.2001,-165);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwABQAvgBAiAiQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigigEBSqAQeQhPhOAAhvQAAhwBPhOQBOhPBwAAQBvAABOBPQBOBOAABvQAABvhOBPQhPBPhvgBQhvABhOhPgEhfjAL4QhchcAAiCQAAiDBchcQBchbCBAAQCCAABcBbQBcBcAACDQAACChcBcQhcBciCAAQiBAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBM1AENQgygyAAhFQAAhGAygyQAygxBFAAQBHAAAxAwQAyAygBBHQAABFgxAyQgyAxhGABQhFgBgygxgEBhYACcQiCAAhchcQhchaAAiCQAAiCBchcQBdhcCCAAQCCgBBcBcQBcBcAACCQAACChcBbQhcBciCAAIgBAAgEhkLgGHQiHiHAAi/QAAi+CHiGQCGiHC+AAQC+AACHCHQCHCGgBC+QABC/iHCHQiHCGi+AAQi+AAiGiGgEhUJgGUQgxgyAAhFQAAhGAxgyQAygyBGAAQBGAAAyAyQAxAyAABGQAABFgxAyQgyAyhGAAQhGAAgygygEBQsgIdQhDhDABhfQAAhfBDhDQBDhEBfAAQBfAABDBEQBEBDAABfQgBBfhDBDQhDBDhfAAQhfAAhEhDgEBe2gOzQgwgBghghQgigiAAgvQAAgvAigjQAhghAwAAQAvAAAiAhQAiAiAAAvQAAAxgiAhQghAigvAAIgBAAg");
	this.shape_132.setTransform(744.2001,-165);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgvAigjQAhghAwAAQAvAAAiAhQAhAiABAvQAAAxgiAhQgiAigvgBQgwAAgighQghghAAgwgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBbQhcBdiCgBQiCAAhchcQhchbAAiCgEBRbANhQAAhvBPhPQBOhPBwAAQBvAABOBPQBOBPAABuQAABwhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACVQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhhAAIaQAAiCBchdQBchbCCAAQCCAABcBbQBcBdAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_133.setTransform(744.2001,-182.85);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgvAhgiQAighAwgBQAvABAiAhQAhAhAAAwQAAAwghAhQgiAigvAAQgwAAgigigEBSqAQeQhPhOAAhvQAAhwBPhOQBOhOBwgBQBvABBOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPgEhfjAL4QhchcAAiCQAAiCBchcQBchcCBAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiBAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBEhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEgEBM1AENQgygxAAhHQAAhGAygxQAygwBFAAQBHgBAxAwQAyAygBBGQAABHgxAxQgyAyhGgBQhFABgygygEBhYACcQiCAAhchcQhchbAAiCQAAiBBchcQBdhdCCAAQCCAABcBdQBcBbAACBQAACDhcBbQhcBciCAAIgBAAgEhkLgGIQiHiGAAi/QAAi9CHiHQCGiGC+gBQC+ABCHCGQCHCHgBC9QABC/iHCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgxAAhGQAAhHAxgxQAygyBGABQBGgBAyAyQAxAxAABHQAABGgxAxQgyAyhGAAQhGAAgygygEBQsgIdQhDhDABhfQAAhfBDhDQBDhDBfgBQBfABBDBDQBEBDAABfQgBBfhDBDQhDBDhfAAQhfAAhEhDgEBe2gO0QgwABghgiQgighAAgwQAAgvAigiQAhgiAwAAQAvAAAiAiQAiAhAAAwQAAAvgiAjQghAggvABIgBgBg");
	this.shape_134.setTransform(744.2001,-182.85);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAjQgiAhgvgBQgwAAgighQghgiAAgvgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBdQBbBbAACCQABCChdBbQhcBdiCgBQiCAAhchcQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhDQBDhEBfAAQBfAABDBEQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBMDACVQAAhGAygxQAxgwBGAAQBHgBAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhU6gILQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhmSgLNQAAi+CHiGQCGiGC+AAQC+AACHCGQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_135.setTransform(744.2001,-200.75);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR4QghghAAgwQAAgwAhghQAigiAwAAQAvAAAiAiQAhAiAAAvQAAAwghAhQgiAigvAAQgwAAgigigEBSqAQeQhPhOAAhvQAAhwBPhOQBOhOBwgBQBvABBOBOQBOBPAABuQAABvhOBPQhPBOhvABQhvgBhOhOgEhfjAL4QhchcAAiCQAAiCBchdQBchbCBAAQCCAABcBbQBcBdAACCQAACChcBcQhcBciCAAQiBAAhchcgEhOlAG+QhDhDAAhfQAAhfBDhDQBEhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBDhfAAQhfAAhEhDgEBM1AENQgygxAAhGQAAhHAygxQAygxBFABQBHgBAxAwQAyAygBBHQAABGgxAxQgyAxhGAAQhFAAgygxgEBhYACcQiCAAhchcQhchbAAiCQAAiBBchcQBdhdCCABQCCAABcBcQBcBbAACBQAACDhcBbQhcBciCAAIgBAAgEhkLgGIQiHiGAAi/QAAi9CHiHQCGiGC+gBQC+ABCHCGQCHCHgBC9QABC/iHCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgxAAhGQAAhHAxgxQAygyBGABQBGgBAyAyQAxAxAABHQAABGgxAxQgyAyhGAAQhGAAgygygEBQsgIdQhDhDABhfQAAhfBDhDQBDhDBfgBQBfABBDBDQBEBDAABfQgBBfhDBDQhDBDhfAAQhfAAhEhDgEBe2gOzQgwAAghgiQgighAAgwQAAgwAighQAhgiAwAAQAvAAAiAiQAiAhAAAwQAAAvgiAjQghAhgvAAIgBAAg");
	this.shape_136.setTransform(744.2001,-200.75);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgvAigjQAhghAwAAQAvAAAiAhQAhAiABAvQAAAxgiAhQgiAigvgBQgwAAgighQghghAAgwgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBbQhcBdiCgBQiCAAhchcQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABuQAABwhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACVQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhAAIaQAAiCBchdQBchbCCAAQCCAABcBbQBcBdAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_137.setTransform(744.2001,-218.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgvAhgiQAighAwgBQAvABAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhPhOAAhvQAAhvBPhPQBOhPBwABQBvgBBOBPQBOBOAABwQAABuhOBPQhPBOhvAAQhvAAhOhOgEhfjAL4QhchcAAiDQAAiCBchbQBchcCBAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBciCAAQiBAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBEhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEgEBM1AENQgygyAAhGQAAhFAygyQAygwBFgBQBHAAAxAxQAyAxgBBGQAABGgxAyQgyAyhGgBQhFABgygygEBhYACcQiCAAhchbQhchbAAiDQAAiBBchcQBdhdCCAAQCCABBcBbQBcBcAACBQAACDhcBcQhcBbiCAAIgBAAgEhkLgGIQiHiGAAi+QAAi/CHiGQCGiHC+ABQC+gBCHCHQCHCGgBC/QABC+iHCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgxAAhHQAAhGAxgxQAygxBGAAQBGAAAyAxQAxAxAABGQAABHgxAxQgyAyhGAAQhGAAgygygEBQsgIdQhDhDABhfQAAhfBDhEQBDhDBfABQBfgBBDBDQBEBEAABfQgBBfhDBDQhDBEhfAAQhfAAhEhEgEBe2gO0QgwAAghghQgighAAgwQAAgvAigjQAhghAwAAQAvAAAiAhQAiAiAAAvQAAAwgiAjQghAhgvAAIgBgBg");
	this.shape_138.setTransform(744.2001,-218.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAjQgiAhgvgBQgwAAgighQghgiAAgvgEBcegCdQAAiBBchcQBdhcCCAAQCCAABcBcQBbBbAACCQABCChdBbQhcBdiCgBQiCAAhchcQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABuQAABwhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhDQBDhEBfAAQBfAABDBEQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBMDACVQAAhGAygxQAxgwBGAAQBHgBAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhmSgLNQAAi+CHiGQCGiGC+AAQC+AACHCGQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gILQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_139.setTransform(744.2001,-236.5);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgvAhgiQAighAwgBQAvABAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhPhOAAhvQAAhvBPhPQBOhPBwAAQBvAABOBPQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPgEhfjAL4QhchcAAiDQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACDhcBcQhcBciCAAQiBAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBEhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEgEBM1AENQgygxAAhHQAAhGAygxQAygwBFAAQBHgBAxAwQAyAygBBGQAABHgxAxQgyAyhGgBQhFABgygygEBhYACcQiCAAhchbQhchbAAiDQAAiBBchcQBdhdCCAAQCCAABcBdQBcBbAACBQAACDhcBcQhcBbiCAAIgBAAgEhkLgGIQiHiGAAi/QAAi+CHiGQCGiGC+gBQC+ABCHCGQCHCGgBC+QABC/iHCGQiHCHi+AAQi+AAiGiHgEhUJgGUQgxgxAAhHQAAhGAxgxQAygxBGAAQBGAAAyAxQAxAxAABGQAABHgxAxQgyAyhGAAQhGAAgygygEBQsgIdQhDhDABhfQAAhfBDhEQBDhDBfAAQBfAABDBDQBEBEAABfQgBBfhDBDQhDBDhfAAQhfAAhEhDgEBe2gO0QgwABghgiQgighAAgwQAAgvAigiQAhgiAwAAQAvAAAiAiQAiAhAAAwQAAAvgiAjQghAhgvAAIgBgBg");
	this.shape_140.setTransform(744.2001,-236.5);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgvAigjQAhghAwAAQAvAAAiAhQAhAiABAvQAAAxgiAhQgiAigvgBQgwAAgighQghghAAgwgEBcegCdQAAiBBchcQBdhdCCAAQCCAABcBcQBbBcAACCQABCChdBbQhcBdiCgBQiCAAhchcQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABuQAABvhOBPQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhEQBDhDBfAAQBfAABDBDQBDBEAABfQAABfhDBDQhDBDhfAAQhfAAhEhDQhDhDAAhfgEBMDACVQAAhGAygxQAxgxBGAAQBHAAAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhU6gIMQAAhGAxgxQAygyBGAAQBGAAAxAyQAyAxAABGQAABGgyAyQgxAyhGAAQhGAAgygyQgxgyAAhGgEhmSgLNQAAi+CHiGQCGiHC+AAQC+AACHCHQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhhAAIaQAAiCBchdQBchbCCAAQCCAABcBbQBcBdAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgwAhghQAighAwAAQAvAAAiAhQAhAhAAAxQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_141.setTransform(744.2001,-254.35);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdDgQmQAAgwAigiQAhghAwAAQAvAAAiAhQAhAiABAvQAAAwgiAjQgiAhgvgBQgwAAgighQghgiAAgvgEBcegCdQAAiBBchcQBdhcCCAAQCCAABcBcQBbBbAACBQABCDhdBbQhcBciCAAQiCAAhchcQhchbAAiCgEBRbANhQAAhvBPhPQBOhOBwAAQBvAABOBOQBOBPAABuQAABwhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvgEBPpgK/QAAhfBEhDQBDhEBfAAQBfAABDBEQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfgEBMDACVQAAhGAygxQAxgwBGAAQBHgBAxAwQAyAygBBGQAABGgxAyQgyAxhGAAQhGAAgxgxQgygyAAhGgEhmSgLNQAAi+CHiGQCGiGC+AAQC+AACHCGQCGCGAAC+QAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/gEhU6gILQAAhGAxgyQAygyBGAAQBGAAAxAyQAyAyAABGQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGgEhhAAIaQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCgEhPoAEcQAAhfBDhDQBDhDBfAAQBfAABDBDQBEBDAABfQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfgEhSFAQnQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwg");
	this.shape_142.setTransform(744.2001,-272.25);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("rgba(102,255,255,0.2)").s().p("EhRkAR5QghgiAAgwQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwQAAAvghAiQgiAhgvAAQgwAAgighgEBSqAQeQhPhOAAhvQAAhvBPhPQBOhPBwABQBvgBBOBPQBOBOAABwQAABuhOBPQhPBOhvAAQhvAAhOhOgEhfjAL4QhchcAAiDQAAiCBchbQBchcCBAAQCCAABcBcQBcBbAACCQAACDhcBcQhcBciCAAQiBAAhchcgEhOlAG+QhDhDAAhfQAAheBDhEQBEhDBfAAQBfAABDBDQBDBEAABeQAABfhDBDQhDBEhfAAQhfAAhEhEgEBM1AENQgygyAAhGQAAhFAygyQAygwBFgBQBHAAAxAxQAyAxgBBGQAABGgxAyQgyAyhGAAQhFAAgygygEBhYACcQiCAAhchbQhchbAAiDQAAiBBchcQBdhdCCAAQCCABBcBbQBcBcAACCQAACChcBcQhcBbiCAAIgBAAgEhkLgGHQiHiHAAi+QAAi+CHiHQCGiHC+ABQC+gBCHCHQCHCHgBC+QABC+iHCHQiHCGi+AAQi+AAiGiGgEhUJgGUQgxgyAAhGQAAhFAxgyQAygxBGgBQBGABAyAxQAxAyAABFQAABGgxAyQgyAyhGAAQhGAAgygygEBQsgIdQhDhDABhfQAAhfBDhEQBDhDBfABQBfgBBDBDQBEBEAABfQgBBfhDBDQhDBEhfAAQhfAAhEhEgEBe2gO0QgwAAghghQgigiAAgvQAAgwAigiQAhghAwAAQAvAAAiAhQAiAiAAAvQAAAxgiAhQghAigvAAIgBgBg");
	this.shape_143.setTransform(744.2001,-272.25);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#FFFFFF").ss(1,1,1).p("EBdlgR4QAhghAwAAQAvAAAiAhQAhAiABAwQAAAwgiAiQgiAhgvAAQgwAAgigiQghghAAgwQAAgvAigjgEBd6gF6QBdhcCCAAQCCAABcBcQBbBbAACCQABCChdBcQhcBciCgBQiCAAhchbQhchcAAiCQAAiBBchcgEBSqAKjQBOhOBwAAQBvAABOBOQBOBPAABvQAABvhOBOQhPBPhvAAQhvAAhOhPQhPhOAAhvQAAhvBPhPgEBQtgNhQBDhDBfAAQBfAABDBDQBDBDAABfQAABfhDBDQhDBEhfAAQhfAAhEhEQhDhDAAhfQAAhfBEhDgEBM1AAeQAxgwBGAAQBHgBAxAxQAyAxgBBHQAABGgxAxQgyAyhGAAQhGAAgxgyQgygxAAhGQAAhGAygygEhPogILQAABGgyAxQgxAyhGAAQhGAAgygyQgxgxAAhGQAAhGAxgyQAygxBGAAQBGAAAxAxQAyAyAABGgEhX8gLNQAAC/iGCGQiHCHi+AAQi+AAiGiHQiHiGAAi/QAAi+CHiGQCGiGC+AAQC+AACHCGQCGCGAAC+gEhIdAEcQAABfhEBDQhDBEhfAAQhfAAhDhEQhDhDAAhfQAAheBDhEQBDhDBfAAQBfAABDBDQBEBEAABegEhXMAIaQAACChcBcQhcBciCAAQiCAAhchcQhchcAAiCQAAiCBchcQBchcCCAAQCCAABcBcQBcBcAACCgEhOgAQoQAAAvghAiQgiAhgvAAQgwAAgighQghgiAAgwQAAgvAhgiQAighAwAAQAvAAAiAhQAhAiAAAwg");
	this.shape_144.setTransform(744.2001,-290.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},29).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_19},{t:this.shape_18}]},1).to({state:[{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_25},{t:this.shape_24}]},1).to({state:[{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_49},{t:this.shape_48}]},1).to({state:[{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_55},{t:this.shape_54}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_75},{t:this.shape_74}]},1).to({state:[{t:this.shape_77},{t:this.shape_76}]},1).to({state:[{t:this.shape_79,p:{y:567.725,x:744.2751}},{t:this.shape_78}]},1).to({state:[{t:this.shape_79,p:{y:549.875,x:744.2751}},{t:this.shape_80,p:{y:549.875,x:744.2751}}]},1).to({state:[{t:this.shape_79,p:{y:531.975,x:744.2751}},{t:this.shape_81}]},1).to({state:[{t:this.shape_79,p:{y:514.125,x:744.2751}},{t:this.shape_80,p:{y:514.125,x:744.2751}}]},1).to({state:[{t:this.shape_79,p:{y:496.225,x:744.2751}},{t:this.shape_80,p:{y:496.225,x:744.2751}}]},1).to({state:[{t:this.shape_79,p:{y:478.375,x:744.2751}},{t:this.shape_82}]},1).to({state:[{t:this.shape_84},{t:this.shape_83}]},1).to({state:[{t:this.shape_79,p:{y:442.625,x:744.2751}},{t:this.shape_85}]},1).to({state:[{t:this.shape_87},{t:this.shape_86}]},1).to({state:[{t:this.shape_79,p:{y:406.875,x:744.2751}},{t:this.shape_80,p:{y:406.875,x:744.2751}}]},1).to({state:[{t:this.shape_79,p:{y:389.025,x:744.2751}},{t:this.shape_80,p:{y:389.025,x:744.2751}}]},1).to({state:[{t:this.shape_79,p:{y:371.125,x:744.2751}},{t:this.shape_80,p:{y:371.125,x:744.2751}}]},1).to({state:[{t:this.shape_79,p:{y:353.275,x:744.2751}},{t:this.shape_88,p:{x:744.2751,y:353.275}}]},1).to({state:[{t:this.shape_90},{t:this.shape_89}]},1).to({state:[{t:this.shape_92,p:{y:317.525}},{t:this.shape_91}]},1).to({state:[{t:this.shape_94},{t:this.shape_93}]},1).to({state:[{t:this.shape_92,p:{y:281.775}},{t:this.shape_95}]},1).to({state:[{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_99},{t:this.shape_98}]},1).to({state:[{t:this.shape_92,p:{y:228.175}},{t:this.shape_100}]},1).to({state:[{t:this.shape_102},{t:this.shape_101}]},1).to({state:[{t:this.shape_92,p:{y:192.425}},{t:this.shape_103,p:{y:192.425,x:744.2501}}]},1).to({state:[{t:this.shape_105},{t:this.shape_104}]},1).to({state:[{t:this.shape_92,p:{y:156.675}},{t:this.shape_106}]},1).to({state:[{t:this.shape_92,p:{y:138.825}},{t:this.shape_103,p:{y:138.825,x:744.2501}}]},1).to({state:[{t:this.shape_108},{t:this.shape_107}]},1).to({state:[{t:this.shape_79,p:{y:103.075,x:744.2251}},{t:this.shape_109}]},1).to({state:[{t:this.shape_111},{t:this.shape_110}]},1).to({state:[{t:this.shape_79,p:{y:67.325,x:744.2251}},{t:this.shape_112}]},1).to({state:[{t:this.shape_114},{t:this.shape_113}]},1).to({state:[{t:this.shape_116},{t:this.shape_115}]},1).to({state:[{t:this.shape_79,p:{y:13.725,x:744.2251}},{t:this.shape_117}]},1).to({state:[{t:this.shape_119},{t:this.shape_118}]},1).to({state:[{t:this.shape_79,p:{y:-22.025,x:744.2251}},{t:this.shape_80,p:{y:-22.025,x:744.2251}}]},1).to({state:[{t:this.shape_121},{t:this.shape_120}]},1).to({state:[{t:this.shape_79,p:{y:-57.775,x:744.2251}},{t:this.shape_88,p:{x:744.2251,y:-57.775}}]},1).to({state:[{t:this.shape_123},{t:this.shape_122}]},1).to({state:[{t:this.shape_125},{t:this.shape_124}]},1).to({state:[{t:this.shape_127},{t:this.shape_126}]},1).to({state:[{t:this.shape_129,p:{y:-129.25}},{t:this.shape_128}]},1).to({state:[{t:this.shape_130},{t:this.shape_103,p:{y:-147.125,x:744.2001}}]},1).to({state:[{t:this.shape_132,p:{y:-165}},{t:this.shape_131}]},1).to({state:[{t:this.shape_134},{t:this.shape_133}]},1).to({state:[{t:this.shape_136},{t:this.shape_135}]},1).to({state:[{t:this.shape_138},{t:this.shape_137}]},1).to({state:[{t:this.shape_140},{t:this.shape_139}]},1).to({state:[{t:this.shape_129,p:{y:-254.35}},{t:this.shape_141}]},1).to({state:[{t:this.shape_143},{t:this.shape_142}]},1).to({state:[{t:this.shape_132,p:{y:-290.1}},{t:this.shape_144}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bady = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bady
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("EhzLhCkMDmXAAAMAAACFJMjmXAAAg");
	this.shape.setTransform(623.175,390.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8003E").s().p("EhzLBClMAAAiFJMDmXAAAMAAACFJg");
	this.shape_1.setTransform(623.175,390.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},680).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background_back_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background_back
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(-728,-665.75,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(556).to({_off:false},0).wait(124));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background_back
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(-216,-260,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(119).to({_off:false},0).wait(91));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-359,-139,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// background
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(-359,-139,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_background, null, null);


(lib.Scene_1_back_background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// back_background
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(-728,-665.75,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(398).to({_off:false},0).wait(158));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.play_again = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(28,59.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.play_again, new cjs.Rectangle(-0.5,-0.5,282,187), null);


(lib.fish_jump1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_16();
	this.instance.setTransform(0,-0.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.4,806,618.5);


(lib.eye_open = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// עין_נפתחת
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#860022").s().p("EgnhA2tQkJjOj9jxQjZjYi1jyQnWpmjZrHQi1pOAAqjQAAiDANh5QAvusGasDQCplRDxk5QAxhJA7g8QB5idCdidQTxzlb2AAQZaAAS1QZQAxAkAwAwQBJA9A8A7QCQCRCECdIB5CRQDxE4C1FeQGCMPAwOgIAADwQgBJ+icJDQjBKjmmJOQjZEhkIEVQhVBVhgBUIkKDZQlQD9lqDBQtjGlwZAAQ2ZAAxIsmg");
	this.shape.setTransform(0,-57.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.1,1,1).p("EgnhA2tQkJjNj9jxQjZjZi1jxQnWpmjZrIQi0pOAAqjQAAiDAMh5QAwurGasEQColSDxk4QAxhJA8g8QB4idCdicQTxzmb2AAQZaAAS1QYQAwAlAwAwQBJA8A8A9QCRCQCECdQA8BIA9BJQDxE4C0FeQGCMPAwOgQAAB5AAB3QAAJ/icJCQjBKjmmJPQjZEgkJEWQhUBUhhBUQiEBtiFBsQlRD9lpDBQtkGmwYAAQ2ZAAxIsngEAo2A1wUgp9gFpgmaAGm");
	this.shape_1.setTransform(-0.025,-57.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgoLgEhUAmagGmAp9AFqQlRD9lpDAQtkGlwXAAQ2aAAxIsmg");
	this.shape_2.setTransform(4.175,321.9854);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#860022").s().p("EgvnA2CQjZjYi1jyQnWpmjZrIQi0pNAAqjQAAiEAMh5QAwurGasDQColSDxk5QAxhIA8g8QB4idCdicQTxzmb2AAQZaAAS1QYQAwAlAwAwQBJA8A8A9QCRCQCECcIB5CRQDxE5C0FeQGCMPAwOeIAADyQAAJ+icJDQjBKimmJPQjZEgkJEWQhUBUhhBUIkJDZUgp9gFpgmaAGmQkJjNj9jxg");
	this.shape_3.setTransform(-0.025,-97.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("Eg11AolQnVpnjZrHQi1pOAAqjQAAiDAMh5QAwusGasDQCplSDwk4QAxhJA8g8QB4idCdicQTxzmb2AAQZbAAS0QZQAwAkAxAwQBIA8A8A9QCRCQCECdQA8BIA9BJQDxE4C0FfQGCMOAwOgQAAB5AAB3QAAJ/idJCQjBKjmlJOQjZEhkJEVQhUBVhhBUQnKGOn6EJQtjGmwYAAQ72AAzxzmQjZjYi1jxgEA3WAm4Qkhg8khgwQzZjlxtgkUgiPgBVgc0AI3");
	this.shape_4.setTransform(-0.025,-57.05);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AnVIwQh4AAh5gMQlRgkk6h5QFelRAAntIAAh4QRrAkTaDlIieCdQhsB4h4BTQlGD9mBCFQjwBIkVAYIgMAAQhhAMhfAAg");
	this.shape_5.setTransform(160.2,210.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgwXgCXQjZjYi1jxUAc0gI3AiPABVIAAB4QAAHuldFRQE5B5FRAjQB5AMB4AAIANAAQBgAABggMIAMAAQEWgXDwhIQGCiFFFj9QB4hUBth4ICdidQEhAwEhA8QjZEhkJEVQhUBVhhBTQnKGOn6EJQtjGmwXAAQ73AAzxzlg");
	this.shape_6.setTransform(4.775,263.5016);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#860022").s().p("EhAjAhOQi1pOAAqiQAAiFAMh4QAwusGasCQCplSDwk5QAxhJA8g7QB4ieCdibQTxzmb2AAQZbAAS0QYQAwAlAxAvQBIA8A8A+QCRCPCECdIB5CRQDxE5C0FeQGCMOAwOfIAADyQAAJ+idJDQjBKimlJPQkhg9khgwQzZjlxtgkUgiPgBVgc0AI3QnVpmjZrIg");
	this.shape_7.setTransform(-0.025,-142.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.1,1,1).p("Eg/nAWsQjyqiAAsEQAAiDANh4QAwutGZsDQCplRDxk5QAwhJA8g8QB5idCdidQTxzlb2AAQZbAAS1QZQAwAkAwAwQBIA8A9A8QCRCRCECdQA8BIA8BJQDyE5C0FeQGCMOAwOgQAAB5AAB3QAAL3jlKjQk5N8rHLTQhUBUhhBVQjECqjMCSQkSDDkiCXQtjGmwZAAQ1zAAw3sAQkrjVkSkQQrTrTkttwgEA/1AWgQk5hIktg8UgkugHWgkhAC0Q2aBh2NFR");
	this.shape_8.setTransform(0,-57.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAGRuQh4AAh4gMQlRgkk6h5QFelRAAnuQAAntlqldQlRlenuAAQlRAAkJC1QgNhsAAhhUAkigC1AktAHWQgZCRgwCRQioIEmmGmQhtB5h4BUQlFD9mCCEQjxBJkVAYIgMAAQhgAMhhAAg");
	this.shape_9.setTransform(112.675,153.0958);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EgmwANtQkrjVkSkQQrTrSkttwQWNlRWahhQAABhAMBsQEJi0FSAAQHuAAFQFdQFpFdAAHuQAAHtldFSQE5B4FRAlQB5ALB5AAIALAAQBhAABggLIAMAAQEWgZDxhIQGBiFFGj9QB4hTBth4QGlmmCpoGQAwiRAYiQQEuA8E4BIQk4N8rILSQhUBUhgBVQjECqjNCSQkSDDkhCXQtkGmwXAAQ10AAw3sAg");
	this.shape_10.setTransform(0.625,209.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#860022").s().p("EhDZAWaQAAiFANh4QAwusGZsCQCqlRDwk6QAxhIA7g8QB6idCcidQTxzlb2AAQZbAAS0QZQAxAkAwAwQBIA8A9A8QCQCRCFCcIB4CRQDyE6C0FdQGCMOAwOgIAADxQgBL3jlKjQk4hIkug9UgktgHWgkhAC1Q2ZBh2OFRQjxqjgBsDg");
	this.shape_11.setTransform(0,-199.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.1,1,1).p("EhDMgD2QAwusGZsDQCplSDxk4QAwhJA9g9QB4icCcidQTyzlb2AAQZbAAS1QZQAwAkAwAwQBJA8A7A8QCRCRCFCdQA8BIA8BJQDxE4C1FeQGCMPAwOgQAAB5AAB3QAAb3zmTxQhUBVhgBUQnKGOn6EJQtkGmwYAAQ72AAzyzmQzxzxAA73QAAiEANh4gEBDagDqQqLjNqLiEQ7GmC67A8Q+UAw97Jb");
	this.shape_12.setTransform(0.025,-57.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("EgAFAgXQh4AAh5gNQlRgkk5h4QFdlRAAnvQAAnulpldQlSlcnuAAQlRAAkKC0QgYi0AAi1QAAvcKvqvQAwgwAxgkQa6g8bHGBQFpG+BhI2QAkDNAADZQAAGBhtFdQioIGmmGmQhsB4h5BUQlFD+mCCEQjxBIkVAYIgMAAQhgANhhAAg");
	this.shape_13.setTransform(113.875,59.396);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EgvoAVFQzxzxAA72QAAiFANh4Qd7pbeUgwQgwAlgwAwQqvKuAAPdQAAC0AYC1QEJi1FSAAQHtAAFRFeQFqFcAAHuQAAHuleFRQE5B5FSAkQB4AMB4AAIANAAQBgAABhgMIAMAAQEVgYDxhJQGBiEFGj9QB4hUBth5QGlmlCpoGQBsldAAmBQAAjZgkjNQhgo3lqm9QKLCEKLDNIAADxQAAb2zmTxQhUBVhgBUQnKGOn6EJQtkGmwYAAQ72AAzyzmg");
	this.shape_14.setTransform(0.025,113.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#860022").s().p("EAu+AajQ7GmC67A8Q+UAw98JbQAxusGZsDQCplQDwk5QAxhJA9g8QB4idCcicQTxzlb4AAQZZAAS2QYQAwAkAwAwQBIA9A8A8QCRCQCFCdIB4CRQDxE5C1FcQGBMPAwOgQqKjNqLiEg");
	this.shape_15.setTransform(0.65,-284.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.1,1,1).p("Egz9gq0QB4idCdicQTyzlb2AAQZbAAS0QXQAxAmAvAvQBJA8A8A9QCQCRCFCcQA9BIA8BJQNYRgAAXUQAAb4zmTxQhUBVhgBUQnKGOn7EIQtjGmwYAAQ72AAzyzlQzxzxAA74QAA3UNwxgQAwhJA8g8gEA0JgrAUg42gWBgvQAWN");
	this.shape_16.setTransform(0,-57.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#860022").s().p("EgvuAHWQTyzkb3AAQZaAAS0QXQAxAlAvAvQBKA9A8A8QCQCRCFCcUg43gWAgvQAWMQB5idCcicg");
	this.shape_17.setTransform(0.55,-409.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("EgAFAlGQh5AAh4gNQlSgkk5h4QFelTAAntQAAnulqldQlQlenvAAQlRAAkJC1QgYi1AAi0QAAvbKuqvQK7q7PQAAQPbAAKuK7IAYAXQAxAyAwA8QGxHuBtJyQAkDNAADYQAAGBhsFdQipIHmmGmQhrB3h5BWQlGD8mBCFQjxBIkWAYIgLAAQhhANhgAAg");
	this.shape_18.setTransform(113.825,29.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("EgvoApDQzwzwgB73QAB3WNvxgQAxhJA7g8UAvQgWNA42AWCIB5CQQNXRgABXWQAAb3zmTwQhUBVhhBVQnJGNn7EJQtjGmwYAAQ72AAzyzmgADlPFQFqFdgBHuQAAHuleFSQE5B4FSAlQB5AMB4AAIAMAAQBgAABhgMIALAAQEXgZDwhIQGCiFFGj8QB4hVBrh4QGnmmCpoGQBrleAAmBQABjZgljNQhtpxmxnuQgvg8gygxIgYgYQquq6vcAAQvQAAq6K6QquKvAAPbQAAC0AYC1QEKi1FRAAQHuAAFQFeg");
	this.shape_19.setTransform(0,-14.4443);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.1,1,1).p("EBDaAAFQAAb4zmTxQhUBUhgBVQnKGNn6EJQtkGmwYAAQ72AAzyzlQzxzxAA74QAA3UNwxgQCpjlDYjaQTyzkb2AAQZaAAS1QYQAxAkAwAwQBIA9A8A7QDZDaC1DlQNYRgAAXUg");
	this.shape_20.setTransform(0,-57.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("EgAFAlFQh5AAh4gMQlSgkk5h4QFdlSAAnuQAAntlpleQlRldnuAAQlRAAkJC0QgYi0AAi1QAAvbKuqvQK7q6PQAAQPbAAKuK6IAYAZQAxAwAwA8QGyHuBsJzQAkDMAADYQAAGBhtFdQioIHmmGlQhsB5h5BUQlFD9mCCFQjxBIkVAYIgMAAQhgAMhhAAg");
	this.shape_21.setTransform(113.875,29.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("EgvnAvuQzyzxAA73QAB3VNvxgQCpjlDZjZQTxzlb2AAQZaAAS1QYQAwAkAxAwQBIA9A8A8QDYDZC2DlQNXRgABXVQAAb3zmTxQhUBUhhBUQnJGOn7EJQtjGmwYAAQ72AAzxzlgADlVvQFpFeAAHtQAAHvleFRQE6B4FSAkQB4AMB4AAIAMAAQBhAABggMIAMAAQEVgYDxhIQGBiFFGj8QB4hVBth4QGmmlCooIQBtldAAmAQAAjZgljNQhspymxnuQgxg8gwgwIgYgYQquq7vdAAQvPAAq6K7QqvKvAAPbQAAC0AZC1QEIi1FSAAQHtAAFRFdg");
	this.shape_22.setTransform(0,-57.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},6).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},4).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},4).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},4).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},4).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},4).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-432.3,-488.8,864.7,863.5);


(lib.eye_close = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// עין_נסגרת
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,1,1).p("ACzAAQAABKg0A1QgDADgEAEQgTAQgVALQgkASgsAAQhJAAg0g0Qg1g1AAhKQAAg9AlguQAGgKAKgJQA0g0BJAAQBEAAAyAsQACABACACQADADACACQAJAJAIAKQAjAuAAA9g");
	this.shape.setTransform(17.9,17.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAABjIgJgBQgOgCgNgEQAOgPAAgUQAAgVgPgOQgOgOgUAAQgOgBgLAIIgBgPQAAgoAcgdQAdgcAoAAQApAAAcAcIABABIAEAFQASAVAFAaQABAIAAAIQAAAQgEAOQgHAWgSASIgJAIQgOAKgQAGQgKADgLABIgBAAIgIABg");
	this.shape_1.setTransform(22.625,21.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah+B/Qg0g1AAhKQAAg9AlguQAHgKAIgJQA1g0BJAAQBEAAAxAsIAFADIAFAFIAQATQAkAuAAA9QAABKg0A1IgHAHQgUAQgVALQgjASgsAAQhJAAg1g0gAAJA6QAQAOgBAVQAAAUgOAOQANAFAOACIAKAAIABAAIAIAAIAAAAQALgBAKgDQAQgGAOgKIAJgJQASgRAHgWQAFgOAAgQQAAgJgCgJQgEgZgSgUIgFgFIgBgBQgcgdgpAAQgpAAgbAdQgdAdAAAoIABAPQALgIAOAAQAVAAAMAPg");
	this.shape_2.setTransform(17.9,17.875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.1,1,1).p("ACLhxQACADADADQAjAuAAA9QAABKg0A1QgDADgEAEQgTAQgVALQgkASgsAAQhJAAg0g0Qg1g1AAhKQAAg9AlguQACgDACgDQAFgGAHgHQA0g0BJAAQBEAAAyAsQACABACACQADADACACQAGAGAGAHQiXg7h9A7");
	this.shape_3.setTransform(17.9,17.875);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#860022").s().p("Ah+AUQA1g0BJAAQBDABAyAqIAEADIAGAGIALAMQiWg5h9A5IALgMg");
	this.shape_4.setTransform(17.9125,3.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah+BtQg0g0AAhJQAAg+AlgvIAEgFQB9g7CXA6IAEAGQAkAvAAA+QAABJg0A0IgHAHQgUARgVALQgjARgsAAQhJAAg1g0gAAJAoQAQAPgBAUQAAAVgOAOQANAFAOABIAKABIABAAIAIgBIAAAAQALgBAKgDQAQgFAOgLIAJgIQASgSAHgVQAFgPAAgQQAAgJgCgIQgEgZgSgVIgFgEIgBgBQgcgdgpAAQgpAAgbAdQgdAcAAAoIABAPQALgHAOAAQAVAAAMAOg");
	this.shape_5.setTransform(17.9,19.6446);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.1,1,1).p("AifhRQAHgNALgNQACgDACgDQAFgGAHgHQA0g0BJAAQBEAAAyAsQACABACACQADADACACQAGAGAGAHQACADADADQAKANAHAOQASAlAAArQAABKg0A1QgDADgEAEQgTAQgVALQgkASgsAAQhJAAg0g0Qg1g1AAhKQAAgsATglgAChhQQiggjigAi");
	this.shape_6.setTransform(17.9,17.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#860022").s().p("AifAwQAHgOAKgNIAEgFIAMgNQA0gzBKAAQBDAAAyArIAEAEIAGAEIALANIAFAFQAKAOAHAOQiggjifAig");
	this.shape_7.setTransform(17.95,4.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah+BXQg0g1AAhJQAAgtATglQCggiCgAjQASAlAAAsQAABJg0A1IgHAHQgUAQgVALQgjASgsAAQhJAAg1g0gAAJASQAQAOgBAVQAAAUgOAOQANAFAOACIAKAAIABAAIAIAAIAAAAQALgBAKgDQAQgGAOgKIAJgJQASgRAHgWQAFgOAAgPQAAgJgCgJQgEgagSgUIgFgFIgBgBQgcgdgpAAQgpAAgbAdQgdAdAAApIABAOQALgIAOAAQAVAAAMAPg");
	this.shape_8.setTransform(17.9,21.8814);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(0.1,1,1).p("AiygJQACgnARghQAHgNALgNQACgDACgDQAFgGAHgHQA0g0BJAAQBEAAAyAsQACABACACQADADACACQAGAGAGAHQACADADADQAKANAHAOQAQAhACAmQgbgIgbgGQhIgQhHACQhQADhQAZgACzgJQAAAFAAAEQAABKg0A1QgDADgEAEQgTAQgVALQgkASgsAAQhJAAg0g0Qg1g1AAhKQAAgEAAgF");
	this.shape_9.setTransform(17.9,17.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAABWIgJgBQgOgBgNgFQAOgOAAgUQAAgVgPgOQgOgOgUAAQgOAAgLAGIgBgOQAAgpAcgcIAEgEQBHgCBIAQQAPATAEAXQABAJAAAIQAAAQgEAOQgHAVgSASIgJAIQgOALgQAGQgKACgLABIgBAAIgIABg");
	this.shape_10.setTransform(22.625,22.7001);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ah+A4Qg0g0AAhJIAAgLQBQgZBQgCIgDAEQgdAcAAApIABAPQALgHAOAAQAVAAAMAOQAQAOgBAUQAAAVgOAOQANAFAOABIAKABIABAAIAIgBIAAAAQALgBAKgDQAQgFAOgLIAJgIQASgSAHgUQAFgPAAgQQAAgJgCgIQgEgYgPgTQAbAGAbAIIAAALQAABJg0A0IgHAHQgUARgVALQgjARgsAAQhJAAg1g0g");
	this.shape_11.setTransform(17.9,24.9375);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#860022").s().p("AB9BGQhIgPhHACQhQAChQAZQACgnARggQAHgNALgNIAEgFIALgNQA1g0BJAAQBEAAAxArIAFAEIAFAFIAMAMIAEAGQALANAHAOQAQAgACAmQgbgIgbgGg");
	this.shape_12.setTransform(17.9,8.4375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.1,1,1).p("AioA8QgKgcAAggQAAgEAAgFQACgnARghQAHgNALgNQACgDACgDQAFgGAHgHQA0g0BJAAQBEAAAyAsQACABACACQADADACACQAGAGAGAHQACADADADQAKANAHAOQAQAhACAmQAAAFAAAEQAAAggJAcQgNgDgNgDQhhgThhAHQg7AEg7AOgACqA8QgNAlgeAeQgDADgEAEQgTAQgVALQgkASgsAAQhJAAg0g0QgegegNgl");
	this.shape_13.setTransform(17.9,17.875);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAAAvIgJAAQgOgCgNgFQAPgOAAgUQAAgUgPgOQgOgPgVAAQgOAAgLAIIAAgJQBggHBhATIgDAMQgHAVgRARIgKAJQgNAKgQAGQgKADgMABIAAAAIgIAAg");
	this.shape_14.setTransform(22.5625,26.5919);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ah+AQQgdgcgNglQA7gOA7gEIABAIQALgHAOAAQAUAAANAOQAPAPAAAUQAAAUgOAOQANAFAOABIAKABIAAAAIAIgBIABAAQALgBAKgDQAQgFAOgLIAJgHQASgSAHgVIADgMIAZAFQgMAlgeAdIgIAHQgTARgVALQgkARgrAAQhJAAg1g0g");
	this.shape_15.setTransform(17.9125,28.9125);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#860022").s().p("AiyA8IAAgLQACgnARgfQAHgOALgNIAEgGIALgMQA1g1BJAAQBEABAxArIAFADIAFAGIAMAMIAEAGQALANAHAPQAQAfACAmIAAALQAAAfgKAcIgZgFQhhgUhhAHQg7AEg7APQgKgdAAgfg");
	this.shape_16.setTransform(17.9,11.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.1,1,1).p("AiOBsQgUgagJgdQgHgZAAgcQAAgEAAgFQACgnARghQAHgNALgNQACgDACgDQAFgGAHgHQA0g0BJAAQBEAAAyAsQACABACACQADADACACQAGAGAGAHQACADADADQAKANAHAOQAQAhACAmQAAAFAAAEQAAAbgHAYQgIAcgRAYQgJAMgLAMQgDADgEAEQgTAQgVALQgkASgsAAQhJAAg0g0QgKgJgHgKgACTBnQgMgCgMgCQgzgKgwgBQhagEhMAY");
	this.shape_17.setTransform(17.9,17.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgSAXIgKAAQgOgCgNgFQAOgOAAgTIAAgFQAuABAzAKIgGAGIgJAIQgOAKgQAGQgKADgKABIgBAAIgIAAg");
	this.shape_18.setTransform(24.5375,28.9625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ah/gFQgKgJgHgKQBMgYBaAEIABAFQAAAUgPAOQANAFAOABIAKAAIABAAIAIAAIAAAAQAMgBAKgCQAQgGANgKIAKgJIAGgGIAYAEQgJANgLALIgHAGQgTAQgVALQgkASgrAAQhKAAg0gzg");
	this.shape_19.setTransform(18.0875,31.1651);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#860022").s().p("AirBYQgHgYAAgcIAAgLQACgmARggQAHgOALgNIAEgFIALgNQA1g0BJAAQBEAAAxArIAFAEIAFAFIAMAMIAEAGQALANAHAPQAQAgACAmIAAAKQAAAagHAYQgIAcgRAZIgYgFQgzgJgwgCQhagDhMAXQgUgZgJgeg");
	this.shape_20.setTransform(17.9,14.325);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(0.1,1,1).p("AhoCRQgLgIgKgKQgKgJgHgKQgUgagJgdQgHgZAAgcQAAgEAAgFQACgnARghQAHgNALgNQACgDACgDQAFgGAHgHQA0g0BJAAQBEAAAyAsQACABACACQADADACACQAGAGAGAHQACADADADQAKANAHAOQAQAhACAmQAAAFAAAEQAAAbgHAYQgIAcgRAYQgJAMgLAMQgDADgEAEQgGAEgFAFQgOAKgPAIQgkASgsAAQg6AAgugigABtCPQhvgPhmAR");
	this.shape_21.setTransform(17.9,17.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhqgLQBmgRBvAOQgOALgPAHQgkARgrAAQg7AAguggg");
	this.shape_22.setTransform(18.075,33.6081);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#860022").s().p("Ah+CPQgJgJgHgKQgUgZgJgeQgHgYAAgcIAAgLQACglARghQAHgOALgNIAEgFIALgNQA1g0BJAAQBEAAAxArIAFAEIAFAFIAMANIAEAFQALAOAHAOQAQAgACAmIAAAKQAAAbgHAXQgIAdgRAYQgJAMgLALIgHAHIgMAJQhugOhmARQgLgIgLgLg");
	this.shape_23.setTransform(17.9,16.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.1,1,1).p("ACzAAQAAAbgHAYQgIAcgRAYQgJAMgLAMQgDADgEAEQgGAEgFAFQgOAKgPAIQgkASgsAAQg6AAgugiQgLgIgKgKQgKgJgHgKQgUgagJgdQgHgZAAgcQAAgEAAgFQACgnARghQAHgNALgNQACgDACgDQAFgGAHgHQA0g0BJAAQBEAAAyAsQACABACACQADADACACQAGAGAGAHQACADADADQAKANAHAOQAQAhACAmQAAAFAAAEg");
	this.shape_24.setTransform(17.9,17.875);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAAAAIAAgOIAAAdIAAgPg");
	this.shape_25.setTransform(35.825,12.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#860022").s().p("AhoCRQgLgIgLgKQgJgJgHgKQgUgagJgdQgHgZAAgcIAAgJQACgnARggQAHgOALgNIAEgGIALgNQA1g0BJAAQBEAAAxAsIAFADIAFAFIAMANIAEAGQALANAHAOQAQAhACAmIAAAJQAAAbgHAYQgIAcgRAYQgJAMgLAMIgHAHIgMAJQgNAKgQAIQgjASgsAAQg6AAgugig");
	this.shape_26.setTransform(17.9,17.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_1},{t:this.shape_4},{t:this.shape_3}]},4).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_1},{t:this.shape_6}]},4).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},4).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},4).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},4).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},4).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},4).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.8,37.8);


(lib.bubblin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AC7AAQAABOg3A2Qg2A3hOAAQhNAAg3g3Qg2g2AAhOQAAhNA2g3QA3g2BNAAQBOAAA2A2QA3A3AABNg");
	this.shape.setTransform(18.725,18.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.5,39.5);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-641,-361,1282,722);


(lib.Scene_1_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// start
	this.start = new lib.start();
	this.start.name = "start";
	this.start.setTransform(870.1,226.4,1,1,0,0,0,191.7,191.7);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Scene_1_start, null, null);


(lib.Scene_1_sea_wave_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sea_wave_
	this.instance = new lib.Symbol3();
	this.instance.setTransform(734.15,695.3,1,1,0,0,0,870.1,127.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(299).to({_off:false},0).wait(1).to({regX:754,scaleX:1.0193,x:630.4,y:694.95},0).wait(1).to({scaleX:1.0386,x:642.8,y:694.05},0).wait(1).to({scaleX:1.058,x:655.15,y:692.7},0).wait(1).to({scaleX:1.0773,x:667.5,y:690.95},0).wait(1).to({scaleX:1.0966,x:679.85,y:689.3},0).wait(1).to({scaleX:1.1159,x:692.2,y:689.85},0).wait(1).to({scaleX:1.1352,x:704.55,y:690.3},0).wait(1).to({scaleX:1.1545,x:716.9,y:690.7},0).wait(1).to({scaleX:1.1739,x:729.3,y:690.9},0).wait(1).to({scaleX:1.1932,x:741.6,y:690.95},0).wait(1).to({scaleX:1.2125,x:753.95,y:690.85},0).wait(1).to({scaleX:1.2318,x:766.35,y:690.55},0).wait(1).to({scaleX:1.2511,x:778.7,y:690.15},0).wait(1).to({scaleX:1.2705,x:791.05,y:689.6},0).wait(1).to({scaleX:1.2898,x:803.4,y:689.8},0).wait(1).to({scaleX:1.3091,x:815.75,y:691.65},0).wait(1).to({scaleX:1.3284,x:828.1,y:693.3},0).wait(1).to({scaleX:1.3477,x:840.5,y:694.5},0).wait(1).to({scaleX:1.367,x:852.8,y:695.15},0).wait(1).to({scaleX:1.3864,x:865.15,y:695.25},0).wait(1).to({scaleX:1.4057,x:877.55,y:694.7},0).wait(1).to({scaleX:1.425,x:889.9,y:693.55},0).wait(1).to({scaleX:1.4443,x:902.25,y:692},0).wait(1).to({scaleX:1.4636,x:914.55,y:690.2},0).wait(1).to({scaleX:1.4829,x:926.95,y:689.5},0).wait(1).to({scaleX:1.5023,x:939.3,y:690.05},0).wait(1).to({scaleX:1.5216,x:951.65,y:690.5},0).wait(1).to({scaleX:1.5409,x:964.05,y:690.8},0).wait(1).to({scaleX:1.5602,x:976.35,y:690.95},0).wait(1).to({scaleX:1.5795,x:988.7},0).wait(1).to({scaleX:1.5989,x:1001.1,y:690.75},0).wait(1).to({scaleX:1.6182,x:1013.45,y:690.4},0).wait(1).to({scaleX:1.6375,x:1025.8,y:689.95},0).wait(1).to({scaleX:1.6568,x:1038.15,y:689.4},0).wait(1).to({scaleX:1.6761,x:1050.5,y:690.55},0).wait(1).to({scaleX:1.6954,x:1062.85,y:692.35},0).wait(1).to({scaleX:1.7148,x:1075.2,y:693.85},0).wait(1).to({scaleX:1.7341,x:1087.55,y:694.85},0).wait(1).to({scaleX:1.7534,x:1099.9,y:695.25},0).wait(1).to({scaleX:1.7727,x:1112.25,y:695.1},0).wait(1).to({scaleX:1.792,x:1124.65,y:694.3},0).wait(1).to({scaleX:1.8114,x:1137,y:693},0).wait(1).to({scaleX:1.8307,x:1149.3,y:691.3},0).wait(1).to({scaleX:1.85,x:1161.7,y:689.4},0).wait(1).to({scaleX:1.8693,x:1174.05,y:689.7},0).wait(1).to({scaleX:1.8886,x:1186.4,y:690.25},0).wait(1).to({scaleX:1.9079,x:1198.8,y:690.65},0).wait(1).to({scaleX:1.9273,x:1211.1,y:690.9},0).wait(1).to({scaleX:1.9466,x:1223.45,y:690.95},0).wait(1).to({scaleX:1.9273,x:1211.1,y:690.9},0).wait(1).to({scaleX:1.9079,x:1198.8,y:690.65},0).wait(1).to({scaleX:1.8886,x:1186.4,y:690.25},0).wait(1).to({scaleX:1.8693,x:1174.05,y:689.7},0).wait(1).to({scaleX:1.85,x:1161.7,y:689.4},0).wait(1).to({scaleX:1.8307,x:1149.3,y:691.3},0).wait(1).to({scaleX:1.8113,x:1137,y:693},0).wait(1).to({scaleX:1.792,x:1124.65,y:694.3},0).wait(1).to({scaleX:1.7727,x:1112.25,y:695.1},0).wait(1).to({scaleX:1.7534,x:1099.9,y:695.25},0).wait(1).to({scaleX:1.7341,x:1087.6,y:694.85},0).wait(1).to({scaleX:1.7148,x:1075.2,y:693.85},0).wait(1).to({scaleX:1.6954,x:1062.85,y:692.35},0).wait(1).to({scaleX:1.6761,x:1050.5,y:690.55},0).wait(1).to({scaleX:1.6568,x:1038.15,y:689.4},0).wait(1).to({scaleX:1.6375,x:1025.8,y:689.95},0).wait(1).to({scaleX:1.6182,x:1013.45,y:690.4},0).wait(1).to({scaleX:1.5988,x:1001.05,y:690.75},0).wait(1).to({scaleX:1.5795,x:988.7,y:690.95},0).wait(1).to({scaleX:1.5602,x:976.4},0).wait(1).to({scaleX:1.5409,x:964,y:690.8},0).wait(1).to({scaleX:1.5216,x:951.65,y:690.5},0).wait(1).to({scaleX:1.5023,x:939.3,y:690.05},0).wait(1).to({scaleX:1.4829,x:926.95,y:689.5},0).wait(1).to({scaleX:1.4636,x:914.6,y:690.2},0).wait(1).to({scaleX:1.4443,x:902.25,y:692},0).wait(1).to({scaleX:1.425,x:889.9,y:693.55},0).wait(1).to({scaleX:1.4057,x:877.5,y:694.7},0).wait(1).to({scaleX:1.3863,x:865.2,y:695.25},0).wait(1).to({scaleX:1.367,x:852.85,y:695.15},0).wait(1).to({scaleX:1.3477,x:840.45,y:694.5},0).wait(1).to({scaleX:1.3284,x:828.1,y:693.3},0).wait(1).to({scaleX:1.3091,x:815.7,y:691.65},0).wait(1).to({scaleX:1.2897,x:803.4,y:689.8},0).wait(1).to({scaleX:1.2704,x:791.05,y:689.6},0).wait(1).to({scaleX:1.2511,x:778.7,y:690.15},0).wait(1).to({scaleX:1.2318,x:766.3,y:690.55},0).wait(1).to({scaleX:1.2125,x:754,y:690.85},0).wait(1).to({scaleX:1.1932,x:741.65,y:690.95},0).wait(1).to({scaleX:1.1738,x:729.25,y:690.9},0).wait(1).to({scaleX:1.1545,x:716.9,y:690.7},0).wait(1).to({scaleX:1.1352,x:704.55,y:690.3},0).wait(1).to({scaleX:1.1159,x:692.2,y:689.85},0).wait(1).to({scaleX:1.0966,x:679.85,y:689.3},0).wait(1).to({scaleX:1.0772,x:667.5,y:690.95},0).wait(1).to({scaleX:1.0579,x:655.1,y:692.7},0).wait(1).to({scaleX:1.0386,x:642.8,y:694.05},0).wait(1).to({scaleX:1.0193,x:630.45,y:694.95},0).wait(1).to({scaleX:1,x:618.05,y:695.3},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_play_again = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// play_again
	this.replay = new lib.play_again();
	this.replay.name = "replay";
	this.replay.setTransform(208.15,684.75,1,1,0,0,0,116.9,133.5);
	this.replay._off = true;

	this.timeline.addTween(cjs.Tween.get(this.replay).wait(824).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fishing = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fishing
	this.instance = new lib.Symbol2();
	this.instance.setTransform(125.2,99,1,1,0,0,0,188.7,335.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(556).to({_off:false},0).wait(1).to({x:126.25,y:96.8},0).wait(1).to({x:127.2,y:94.65},0).wait(1).to({x:128.1,y:92.65},0).wait(1).to({x:128.9,y:90.7},0).wait(1).to({x:129.7,y:88.8},0).wait(1).to({x:130.4,y:87},0).wait(1).to({x:131.1,y:85.25},0).wait(1).to({x:131.75,y:83.55},0).wait(1).to({x:132.35,y:81.85},0).wait(1).to({x:132.95,y:80.25},0).wait(1).to({x:133.5,y:78.65},0).wait(1).to({x:134,y:77.05},0).wait(1).to({x:134.55,y:75.55},0).wait(1).to({x:135,y:74},0).wait(1).to({x:135.45,y:72.55},0).wait(1).to({x:135.9,y:71.05},0).wait(1).to({x:136.35,y:69.6},0).wait(1).to({x:136.75,y:68.2},0).wait(1).to({x:137.15,y:66.8},0).wait(1).to({x:137.5,y:65.4},0).wait(1).to({x:137.9,y:64},0).wait(1).to({x:138.25,y:62.65},0).wait(1).to({x:138.55,y:61.3},0).wait(1).to({x:138.9,y:60},0).wait(1).to({x:139.2,y:58.65},0).wait(1).to({x:139.5,y:57.35},0).wait(1).to({x:139.75,y:56.05},0).wait(1).to({x:140.05,y:54.75},0).wait(1).to({x:140.3,y:53.45},0).wait(1).to({x:140.55,y:52.2},0).wait(1).to({x:140.8,y:50.9},0).wait(1).to({x:141,y:49.65},0).wait(1).to({x:141.25,y:48.4},0).wait(1).to({x:141.45,y:47.15},0).wait(1).to({x:141.65,y:45.95},0).wait(1).to({x:141.85,y:44.7},0).wait(1).to({x:142.05,y:43.45},0).wait(1).to({x:142.2,y:42.25},0).wait(1).to({x:142.35,y:41},0).wait(1).to({x:142.5,y:39.8},0).wait(1).to({x:142.65,y:38.6},0).wait(1).to({x:142.8,y:37.4},0).wait(1).to({x:142.95,y:36.2},0).wait(1).to({x:143.05,y:35},0).wait(1).to({x:143.2,y:33.8},0).wait(1).to({x:143.3,y:32.6},0).wait(1).to({x:143.4,y:31.4},0).wait(1).to({x:143.5,y:30.2},0).wait(1).to({x:143.6,y:29},0).wait(1).to({x:143.65,y:27.8},0).wait(1).to({x:143.75,y:26.65},0).wait(1).to({x:143.8,y:25.45},0).wait(1).to({x:143.85,y:24.25},0).wait(1).to({x:143.9,y:23.1},0).wait(1).to({x:143.95,y:21.9},0).wait(1).to({x:144,y:20.7},0).wait(1).to({x:144.05,y:19.5},0).wait(1).to({y:18.35},0).wait(1).to({y:17.15},0).wait(1).to({x:144.1,y:15.95},0).wait(1).to({y:14.8},0).wait(1).to({y:13.6},0).wait(1).to({x:144.05,y:12.4},0).wait(1).to({y:11.2},0).wait(1).to({y:10},0).wait(1).to({x:144,y:8.8},0).wait(1).to({x:143.95,y:7.6},0).wait(1).to({x:143.9,y:6.4},0).wait(1).to({x:143.85,y:5.2},0).wait(1).to({x:143.8,y:4},0).wait(1).to({x:143.75,y:2.8},0).wait(1).to({x:143.65,y:1.55},0).wait(1).to({x:143.6,y:0.35},0).wait(1).to({x:143.5,y:-0.9},0).wait(1).to({x:143.4,y:-2.1},0).wait(1).to({x:143.3,y:-3.35},0).wait(1).to({x:143.2,y:-4.6},0).wait(1).to({x:143.05,y:-5.85},0).wait(1).to({x:142.95,y:-7.1},0).wait(1).to({x:142.8,y:-8.35},0).wait(1).to({x:142.65,y:-9.6},0).wait(1).to({x:142.5,y:-10.9},0).wait(1).to({x:142.35,y:-12.15},0).wait(1).to({x:142.2,y:-13.45},0).wait(1).to({x:142.05,y:-14.75},0).wait(1).to({x:141.85,y:-16.05},0).wait(1).to({x:141.65,y:-17.35},0).wait(1).to({x:141.45,y:-18.65},0).wait(1).to({x:141.25,y:-20},0).wait(1).to({x:141,y:-21.35},0).wait(1).to({x:140.8,y:-22.7},0).wait(1).to({x:140.55,y:-24.05},0).wait(1).to({x:140.3,y:-25.4},0).wait(1).to({x:140.05,y:-26.8},0).wait(1).to({x:139.75,y:-28.2},0).wait(1).to({x:139.5,y:-29.6},0).wait(1).to({x:139.2,y:-31.05},0).wait(1).to({x:138.9,y:-32.5},0).wait(1).to({x:138.55,y:-33.95},0).wait(1).to({x:138.25,y:-35.45},0).wait(1).to({x:137.9,y:-36.95},0).wait(1).to({x:137.5,y:-38.45},0).wait(1).to({x:137.15,y:-40},0).wait(1).to({x:136.75,y:-41.55},0).wait(1).to({x:136.35,y:-43.15},0).wait(1).to({x:135.9,y:-44.75},0).wait(1).to({x:135.45,y:-46.4},0).wait(1).to({x:135,y:-48.1},0).wait(1).to({x:134.55,y:-49.8},0).wait(1).to({x:134,y:-51.5},0).wait(1).to({x:133.5,y:-53.3},0).wait(1).to({x:132.95,y:-55.1},0).wait(1).to({x:132.35,y:-57},0).wait(1).to({x:131.75,y:-58.9},0).wait(1).to({x:131.1,y:-60.85},0).wait(1).to({x:130.4,y:-62.9},0).wait(1).to({x:129.7,y:-65},0).wait(1).to({x:128.9,y:-67.2},0).wait(1).to({x:128.1,y:-69.45},0).wait(1).to({x:127.2,y:-71.85},0).wait(1).to({x:126.25,y:-74.35},0).wait(1).to({x:125.2,y:-77},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fish_jump = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fish_jump
	this.instance = new lib.fish_jump1("synched",0);
	this.instance.setTransform(639.3,888.9,0.2849,0.2849,-52.4911);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(134).to({_off:false},0).wait(1).to({regX:403,regY:308.8,rotation:-52.0808,x:783.6,y:822.4},0).wait(1).to({rotation:-51.6712,x:788.1,y:795.95},0).wait(1).to({rotation:-51.2668,x:792.45,y:771.55},0).wait(1).to({rotation:-50.865,x:796.7,y:748.85},0).wait(1).to({rotation:-50.4639,x:800.85,y:727.55},0).wait(1).to({rotation:-50.062,x:804.9,y:707.5},0).wait(1).to({rotation:-49.6578,x:808.85,y:688.65},0).wait(1).to({rotation:-49.2502,x:812.85,y:670.7},0).wait(1).to({rotation:-48.8383,x:816.75,y:653.65},0).wait(1).to({rotation:-48.4211,x:820.65,y:637.45},0).wait(1).to({rotation:-47.9978,x:824.45,y:621.85},0).wait(1).to({rotation:-47.5675,x:828.35,y:607},0).wait(1).to({rotation:-47.1294,x:832.1,y:592.75},0).wait(1).to({rotation:-46.6828,x:835.9,y:579.1},0).wait(1).to({rotation:-46.2269,x:839.65,y:566},0).wait(1).to({rotation:-45.7609,x:843.45,y:553.4},0).wait(1).to({rotation:-45.284,x:847.25,y:541.3},0).wait(1).to({rotation:-44.7955,x:851,y:529.6},0).wait(1).to({rotation:-44.2944,x:854.75,y:518.4},0).wait(1).to({rotation:-43.7799,x:858.5,y:507.55},0).wait(1).to({rotation:-43.2512,x:862.2,y:497.15},0).wait(1).to({rotation:-42.7073,x:866,y:487.15},0).wait(1).to({rotation:-42.1471,x:869.8,y:477.45},0).wait(1).to({rotation:-41.5697,x:873.55,y:468.15},0).wait(1).to({rotation:-40.974,x:877.35,y:459.2},0).wait(1).to({rotation:-40.3588,x:881.1,y:450.65},0).wait(1).to({rotation:-39.7228,x:884.85,y:442.4},0).wait(1).to({rotation:-39.0648,x:888.7,y:434.45},0).wait(1).to({rotation:-38.3834,x:892.45,y:426.8},0).wait(1).to({rotation:-37.677,x:896.25,y:419.5},0).wait(1).to({rotation:-36.944,x:900.05,y:412.5},0).wait(1).to({rotation:-36.1828,x:903.9,y:405.8},0).wait(1).to({rotation:-35.3915,x:907.7,y:399.45},0).wait(1).to({rotation:-34.5681,x:911.5,y:393.4},0).wait(1).to({rotation:-33.7105,x:915.3,y:387.7},0).wait(1).to({rotation:-32.8165,x:919.2,y:382.25},0).wait(1).to({rotation:-31.8836,x:922.95,y:377.1},0).wait(1).to({rotation:-30.9091,x:926.75,y:372.35},0).wait(1).to({rotation:-29.8904,x:930.6,y:367.75},0).wait(1).to({rotation:-28.8242,x:934.35,y:363.6},0).wait(1).to({rotation:-27.7075,x:938.1,y:359.75},0).wait(1).to({rotation:-26.5366,x:941.8,y:356.2},0).wait(1).to({rotation:-25.308,x:945.55,y:353},0).wait(1).to({rotation:-24.0175,x:949.15,y:350.15},0).wait(1).to({rotation:-22.6609,x:952.8,y:347.65},0).wait(1).to({rotation:-21.2336,x:956.3,y:345.45},0).wait(1).to({rotation:-19.731,x:959.8,y:343.65},0).wait(1).to({rotation:-18.1479,x:963.2,y:342.25},0).wait(1).to({rotation:-16.4791,x:966.5,y:341.15},0).wait(1).to({rotation:-14.719,x:969.7,y:340.5},0).wait(1).to({rotation:-12.862,x:972.7,y:340.1},0).wait(1).to({rotation:-10.9023,x:975.65,y:340.2},0).wait(1).to({rotation:-8.8343,x:978.3,y:340.65},0).wait(1).to({rotation:-6.6522,x:980.85,y:341.45},0).wait(1).to({rotation:-4.3508,x:983.15,y:342.6},0).wait(1).to({rotation:-1.9251,x:985.2,y:344.15},0).wait(1).to({rotation:0.6289,x:986.95,y:346.05},0).wait(1).to({rotation:3.3147,x:988.45,y:348.3},0).wait(1).to({rotation:6.1344,x:989.65,y:350.8},0).wait(1).to({rotation:9.0885,x:990.5,y:353.65},0).wait(1).to({rotation:12.176,x:991.1,y:356.7},0).wait(1).to({rotation:15.3942,x:991.4,y:359.95},0).wait(1).to({rotation:18.7383,y:363.35},0).wait(1).to({rotation:22.2017,x:991.2,y:366.9},0).wait(1).to({rotation:25.7765,x:990.8,y:370.45},0).wait(1).to({rotation:29.454,x:990.3,y:374.15},0).wait(1).to({rotation:33.226,x:989.85,y:377.9},0).wait(1).to({rotation:37.0863,x:989.55,y:381.7},0).wait(1).to({rotation:41.0336,x:989.6,y:385.7},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fish_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fish
	this.instance = new lib.fish_jump1("synched",0);
	this.instance.setTransform(350.85,823.7,0.2616,0.2616,-104.996,0,0,-729.7,55.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(556).to({_off:false},0).wait(1).to({regX:403,regY:308.8,rotation:-104.997,x:339.75,y:518.05},0).wait(1).to({x:341.15,y:516},0).wait(1).to({x:342.45,y:514.05},0).wait(1).to({x:343.7,y:512.15},0).wait(1).to({x:344.85,y:510.3},0).wait(1).to({x:345.9,y:508.55},0).wait(1).to({x:346.95,y:506.8},0).wait(1).to({x:347.9,y:505.15},0).wait(1).to({x:348.8,y:503.5},0).wait(1).to({x:349.7,y:501.95},0).wait(1).to({x:350.5,y:500.35},0).wait(1).to({x:351.3,y:498.85},0).wait(1).to({x:352.05,y:497.35},0).wait(1).to({x:352.75,y:495.85},0).wait(1).to({x:353.45,y:494.4},0).wait(1).to({x:354.1,y:493},0).wait(1).to({x:354.75,y:491.6},0).wait(1).to({x:355.35,y:490.2},0).wait(1).to({x:355.95,y:488.8},0).wait(1).to({x:356.5,y:487.45},0).wait(1).to({x:357.05,y:486.1},0).wait(1).to({x:357.55,y:484.8},0).wait(1).to({x:358.05,y:483.45},0).wait(1).to({x:358.5,y:482.15},0).wait(1).to({x:359,y:480.9},0).wait(1).to({x:359.4,y:479.6},0).wait(1).to({x:359.85,y:478.3},0).wait(1).to({x:360.25,y:477.05},0).wait(1).to({x:360.65,y:475.8},0).wait(1).to({x:361,y:474.55},0).wait(1).to({x:361.35,y:473.35},0).wait(1).to({x:361.7,y:472.1},0).wait(1).to({x:362.05,y:470.9},0).wait(1).to({x:362.35,y:469.65},0).wait(1).to({x:362.65,y:468.45},0).wait(1).to({x:362.95,y:467.25},0).wait(1).to({x:363.2,y:466.05},0).wait(1).to({x:363.45,y:464.85},0).wait(1).to({x:363.7,y:463.65},0).wait(1).to({x:363.95,y:462.45},0).wait(1).to({x:364.15,y:461.3},0).wait(1).to({x:364.35,y:460.1},0).wait(1).to({x:364.55,y:458.95},0).wait(1).to({x:364.75,y:457.75},0).wait(1).to({x:364.95,y:456.6},0).wait(1).to({x:365.1,y:455.4},0).wait(1).to({x:365.25,y:454.25},0).wait(1).to({x:365.4,y:453.1},0).wait(1).to({x:365.5,y:451.95},0).wait(1).to({x:365.65,y:450.75},0).wait(1).to({x:365.75,y:449.6},0).wait(1).to({x:365.85,y:448.45},0).wait(1).to({x:365.95,y:447.3},0).wait(1).to({x:366,y:446.15},0).wait(1).to({x:366.1,y:445},0).wait(1).to({x:366.15,y:443.8},0).wait(1).to({x:366.2,y:442.65},0).wait(1).to({y:441.5},0).wait(1).to({x:366.25,y:440.35},0).wait(1).to({y:439.2},0).wait(1).to({y:438},0).wait(1).to({y:436.85},0).wait(1).to({y:435.7},0).wait(1).to({x:366.2,y:434.55},0).wait(1).to({y:433.35},0).wait(1).to({x:366.15,y:432.2},0).wait(1).to({x:366.1,y:431},0).wait(1).to({x:366,y:429.85},0).wait(1).to({x:365.95,y:428.65},0).wait(1).to({x:365.85,y:427.5},0).wait(1).to({x:365.75,y:426.3},0).wait(1).to({x:365.65,y:425.1},0).wait(1).to({x:365.5,y:423.9},0).wait(1).to({x:365.4,y:422.7},0).wait(1).to({x:365.25,y:421.5},0).wait(1).to({x:365.1,y:420.3},0).wait(1).to({x:364.95,y:419.1},0).wait(1).to({x:364.75,y:417.9},0).wait(1).to({x:364.55,y:416.65},0).wait(1).to({x:364.35,y:415.45},0).wait(1).to({x:364.15,y:414.2},0).wait(1).to({x:363.95,y:412.95},0).wait(1).to({x:363.7,y:411.7},0).wait(1).to({x:363.45,y:410.45},0).wait(1).to({x:363.2,y:409.2},0).wait(1).to({x:362.95,y:407.9},0).wait(1).to({x:362.65,y:406.6},0).wait(1).to({x:362.35,y:405.35},0).wait(1).to({x:362.05,y:404.05},0).wait(1).to({x:361.7,y:402.7},0).wait(1).to({x:361.35,y:401.4},0).wait(1).to({x:361,y:400.05},0).wait(1).to({x:360.65,y:398.7},0).wait(1).to({x:360.25,y:397.35},0).wait(1).to({x:359.85,y:396},0).wait(1).to({x:359.4,y:394.6},0).wait(1).to({x:359,y:393.2},0).wait(1).to({x:358.5,y:391.8},0).wait(1).to({x:358.05,y:390.35},0).wait(1).to({x:357.55,y:388.9},0).wait(1).to({x:357.05,y:387.45},0).wait(1).to({x:356.5,y:385.95},0).wait(1).to({x:355.95,y:384.45},0).wait(1).to({x:355.35,y:382.95},0).wait(1).to({x:354.75,y:381.35},0).wait(1).to({x:354.1,y:379.8},0).wait(1).to({x:353.45,y:378.2},0).wait(1).to({x:352.75,y:376.55},0).wait(1).to({x:352.05,y:374.9},0).wait(1).to({x:351.3,y:373.2},0).wait(1).to({x:350.5,y:371.45},0).wait(1).to({x:349.7,y:369.65},0).wait(1).to({x:348.8,y:367.85},0).wait(1).to({x:347.9,y:365.95},0).wait(1).to({x:346.95,y:364.05},0).wait(1).to({x:345.9,y:362.05},0).wait(1).to({x:344.85,y:360},0).wait(1).to({x:343.7,y:357.85},0).wait(1).to({x:342.45,y:355.6},0).wait(1).to({x:341.15,y:353.3},0).wait(1).to({x:339.75,y:350.85},0).wait(1).to({x:338.2,y:348.25},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fish_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fish
	this.instance = new lib.fish_jump1("synched",0);
	this.instance.setTransform(115.9,551.45,0.4083,0.4083,0,0,0,-192.5,396.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(398).to({_off:false},0).wait(56).to({regX:-184.7,regY:398.6,y:567.15},0).wait(1).to({regX:403,regY:308.8,x:357.3,y:529.8},0).wait(1).to({x:358.7,y:529.1},0).wait(1).to({x:360,y:528.35},0).wait(1).to({x:361.15,y:527.55},0).wait(1).to({x:362.2,y:526.7},0).wait(1).to({x:363.15,y:525.8},0).wait(1).to({x:364,y:524.85},0).wait(1).to({x:364.75,y:523.85},0).wait(1).to({x:365.4,y:522.8},0).wait(1).to({x:365.95,y:521.7},0).wait(1).to({x:366.35,y:520.55},0).wait(1).to({x:366.65,y:519.35},0).wait(1).to({x:366.9,y:518.15},0).wait(1).to({x:367,y:516.85},0).wait(1).to({y:515.5},0).wait(1).to({x:366.9,y:514.15},0).wait(1).to({x:366.65,y:512.7},0).wait(1).to({x:366.35,y:511.2},0).wait(1).to({x:365.95,y:509.7},0).wait(1).to({x:365.4,y:508.1},0).wait(1).to({x:364.75,y:506.5},0).wait(1).to({x:364,y:504.8},0).wait(1).to({x:363.15,y:503.1},0).wait(1).to({x:362.2,y:501.35},0).wait(1).to({x:361.15,y:499.5},0).wait(1).to({x:360,y:497.65},0).wait(1).to({x:358.7,y:495.75},0).wait(1).to({x:357.3,y:493.8},0).wait(1).to({x:355.85,y:491.75},0).wait(1).to({x:356.55,y:492.65},0).wait(1).to({x:357.25,y:493.55},0).wait(1).to({x:357.9,y:494.45},0).wait(1).to({x:358.5,y:495.35},0).wait(1).to({x:359.05,y:496.2},0).wait(1).to({x:359.6,y:497.1},0).wait(1).to({x:360.1,y:497.95},0).wait(1).to({x:360.55,y:498.8},0).wait(1).to({x:360.95,y:499.65},0).wait(1).to({x:361.3,y:500.5},0).wait(1).to({x:361.65,y:501.35},0).wait(1).to({x:361.9,y:502.2},0).wait(1).to({x:362.15,y:503},0).wait(1).to({x:362.35,y:503.85},0).wait(1).to({x:362.5,y:504.65},0).wait(1).to({x:362.65,y:505.5},0).wait(1).to({x:362.7,y:506.3},0).wait(1).to({x:362.75,y:507.1},0).wait(1).to({y:507.9},0).wait(1).to({x:362.7,y:508.65},0).wait(1).to({x:362.65,y:509.45},0).wait(1).to({x:362.5,y:510.2},0).wait(1).to({x:362.35,y:511},0).wait(1).to({x:362.15,y:511.75},0).wait(1).to({x:361.9,y:512.5},0).wait(1).to({x:361.65,y:513.25},0).wait(1).to({x:361.3,y:514},0).wait(1).to({x:360.95,y:514.75},0).wait(1).to({x:360.55,y:515.5},0).wait(1).to({x:360.1,y:516.25},0).wait(1).to({x:359.6,y:516.95},0).wait(1).to({x:359.05,y:517.65},0).wait(1).to({x:358.5,y:518.4},0).wait(1).to({x:357.9,y:519.1},0).wait(1).to({x:357.25,y:519.8},0).wait(1).to({x:356.55,y:520.5},0).wait(1).to({x:355.85,y:521.15},0).wait(1).to({x:355,y:520.5},0).wait(1).to({x:354.2,y:519.8},0).wait(1).to({x:353.45,y:519.1},0).wait(1).to({x:352.75,y:518.4},0).wait(1).to({x:352.15,y:517.7},0).wait(1).to({x:351.6,y:516.95},0).wait(1).to({x:351.05,y:516.25},0).wait(1).to({x:350.6,y:515.5},0).wait(1).to({x:350.2,y:514.75},0).wait(1).to({x:349.85,y:514},0).wait(1).to({x:349.55,y:513.25},0).wait(1).to({x:349.3,y:512.5},0).wait(1).to({x:349.1,y:511.7},0).wait(1).to({x:348.95,y:510.95},0).wait(1).to({x:348.9,y:510.15},0).wait(1).to({x:348.85,y:509.35},0).wait(1).to({x:348.9,y:508.55},0).wait(1).to({x:348.95,y:507.75},0).wait(1).to({x:349.1,y:506.9},0).wait(1).to({x:349.3,y:506.1},0).wait(1).to({x:349.55,y:505.25},0).wait(1).to({x:349.85,y:504.4},0).wait(1).to({x:350.2,y:503.55},0).wait(1).to({x:350.6,y:502.7},0).wait(1).to({x:351.05,y:501.85},0).wait(1).to({x:351.6,y:500.95},0).wait(1).to({x:352.15,y:500.1},0).wait(1).to({x:352.75,y:499.2},0).wait(1).to({x:353.45,y:498.3},0).wait(1).to({x:354.2,y:497.4},0).wait(1).to({x:355,y:496.5},0).wait(1).to({x:355.85,y:495.55},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_eye_open = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eye_open
	this.instance = new lib.eye_open("synched",0);
	this.instance.setTransform(716.35,427.4,0.615,0.6363);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(28));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// eye
	this.instance = new lib.eye_close("synched",0);
	this.instance.setTransform(789.7,350.2,18.7793,18.7793,0,0,0,17.9,16.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(680).to({_off:false},0).wait(32));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_bobblin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// bobblin
	this.instance = new lib.bubblin("synched",0);
	this.instance.setTransform(1293.4,1091.6,1,1,0,0,0,18.7,18.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({x:1300,y:1076.8},0).wait(1).to({x:1306.25,y:1061.85},0).wait(1).to({x:1312.3,y:1046.8},0).wait(1).to({x:1318.1,y:1031.65},0).wait(1).to({x:1323.7,y:1016.45},0).wait(1).to({x:1328.95,y:1001.1},0).wait(1).to({x:1333.75,y:985.65},0).wait(1).to({x:1338.1,y:970},0).wait(1).to({x:1342.35,y:954.35},0).wait(1).to({x:1346.5,y:938.7},0).wait(1).to({x:1350.6,y:923},0).wait(1).to({x:1354.6,y:907.3},0).wait(1).to({x:1358.55,y:891.55},0).wait(1).to({x:1362.4,y:875.85},0).wait(1).to({x:1366.1,y:860.05},0).wait(1).to({x:1369.65,y:844.25},0).wait(1).to({x:1371.45,y:828.15},0).wait(1).to({x:1370.9,y:811.95},0).wait(1).to({x:1369.3,y:795.85},0).wait(1).to({x:1367,y:779.8},0).wait(1).to({x:1364.15,y:763.85},0).wait(1).to({x:1360.8,y:747.95},0).wait(1).to({x:1357.05,y:732.2},0).wait(1).to({x:1352.9,y:716.55},0).wait(1).to({x:1348.35,y:700.95},0).wait(1).to({x:1343.45,y:685.55},0).wait(1).to({x:1338.15,y:670.2},0).wait(1).to({x:1332.55,y:655},0).wait(1).to({x:1326.55,y:639.95},0).wait(1).to({x:1320.2,y:625.05},0).wait(1).to({x:1313.5,y:610.25},0).wait(1).to({x:1306.4,y:595.7},0).wait(1).to({x:1298.95,y:581.3},0).wait(1).to({x:1291.15,y:567.1},0).wait(1).to({x:1282.9,y:553.1},0).wait(1).to({x:1274.3,y:539.4},0).wait(1).to({x:1265.3,y:525.9},0).wait(1).to({x:1255.9,y:512.7},0).wait(1).to({x:1246.05,y:499.8},0).wait(1).to({x:1235.8,y:487.3},0).wait(1).to({x:1225.1,y:475.1},0).wait(1).to({x:1214,y:463.3},0).wait(1).to({x:1203.2,y:451.2},0).wait(1).to({x:1193.3,y:438.35},0).wait(1).to({x:1184.15,y:424.95},0).wait(1).to({x:1175.7,y:411.15},0).wait(1).to({x:1167.9,y:396.95},0).wait(1).to({x:1160.65,y:382.45},0).wait(1).to({x:1154,y:367.65},0).wait(1).to({x:1147.95,y:352.6},0).wait(1).to({x:1142.5,y:337.35},0).wait(1).to({x:1137.65,y:321.9},0).wait(1).to({x:1133.4,y:306.25},0).wait(1).to({x:1129.85,y:290.4},0).wait(1).to({x:1127,y:274.45},0).wait(1).to({x:1124.85,y:258.4},0).wait(1).to({x:1123.5,y:242.25},0).wait(1).to({x:1123.05,y:226.05},0).wait(1).to({x:1123.45,y:209.85},0).wait(1).to({x:1124.85,y:193.7},0).wait(1).to({x:1127.3,y:177.65},0).wait(1).to({x:1130.8,y:161.85},0).wait(1).to({x:1135.45,y:146.3},0).wait(1).to({x:1141.25,y:131.2},0).wait(1).to({x:1148.2,y:116.55},0).wait(1).to({x:1156.35,y:102.55},0).wait(1).to({x:1165.6,y:89.2},0).wait(1).to({x:1175.75,y:76.6},0).wait(1).to({x:1186.1,y:64.1},0).wait(1).to({x:1196.35,y:51.55},0).wait(1).to({x:1206.5,y:38.95},0).wait(1).to({x:1216.6,y:26.25},0).wait(1).to({x:1226.6,y:13.55},0).wait(1).to({x:1236.55,y:0.75},0).wait(1).to({x:1246.45,y:-12.1},0).wait(1).to({x:1256.3,y:-25},0).wait(1).to({x:1266.05,y:-37.9},0).wait(1).to({x:1275.75,y:-50.9},0).wait(1).to({x:1285.4,y:-63.9},0).wait(1).to({x:1295,y:-77},0).wait(1).to({x:1304.55,y:-90.1},0).wait(1).to({x:1314.05,y:-103.25},0).wait(1).to({x:1323.45,y:-116.45},0).wait(1).to({x:1332.8,y:-129.7},0).wait(1).to({x:1342.05,y:-143},0).wait(1).to({x:1351.25,y:-156.35},0).wait(1).to({x:1360.35,y:-169.8},0).wait(1).to({x:1369.1,y:-183.45},0).wait(1).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.noFish = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,824,826];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		if(this.start.parent == undefined || this.start.parent == this)
		this.start = this.start.start;
		var self=this;
		self.stop();
		
		self.start.addEventListener("click",startPlay);
		
		function startPlay(){
			self.gotoAndPlay(1)
		}
	}
	this.frame_824 = function() {
		this.replay = this.play_again.replay;
		var self=this;
		self.stop();
		
		self.replay.addEventListener("click",playAgain)
		
		function playAgain(){
		self.gotoAndPlay(1);
			}
	}
	this.frame_826 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(824).call(this.frame_824).wait(2).call(this.frame_826).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(1).to({regX:0.1,regY:0.1,scaleX:1.0552,scaleY:1.0552,y:360.05},0).wait(28).to({regX:0.8,regY:1.3,scaleX:0.1888,scaleY:0.1888,x:837.9,y:271.6,visible:false},0).wait(1).to({regX:0,regY:0,scaleX:0.2045,scaleY:0.2045,x:835.875,y:273.1908},0).wait(1).to({scaleX:0.2202,scaleY:0.2202,x:834.0001,y:275.0316},0).wait(1).to({scaleX:0.2359,scaleY:0.2359,x:832.1252,y:276.8724},0).wait(1).to({scaleX:0.2517,scaleY:0.2517,x:830.2502,y:278.7131},0).wait(1).to({scaleX:0.2674,scaleY:0.2674,x:828.3753,y:280.5539},0).wait(1).to({scaleX:0.2831,scaleY:0.2831,x:826.5003,y:282.3947},0).wait(1).to({scaleX:0.2989,scaleY:0.2989,x:824.6254,y:284.2355},0).wait(1).to({scaleX:0.3146,scaleY:0.3146,x:822.7505,y:286.0763},0).wait(1).to({scaleX:0.3303,scaleY:0.3303,x:820.8755,y:287.9171},0).wait(1).to({scaleX:0.346,scaleY:0.346,x:819.0006,y:289.7579},0).wait(1).to({scaleX:0.3618,scaleY:0.3618,x:817.1256,y:291.5987},0).wait(1).to({scaleX:0.3775,scaleY:0.3775,x:815.2507,y:293.4395},0).wait(1).to({scaleX:0.3932,scaleY:0.3932,x:813.3758,y:295.2803},0).wait(1).to({scaleX:0.4089,scaleY:0.4089,x:811.5008,y:297.1211},0).wait(1).to({scaleX:0.4247,scaleY:0.4247,x:809.6259,y:298.9618},0).wait(1).to({scaleX:0.4404,scaleY:0.4404,x:807.7509,y:300.8026},0).wait(1).to({scaleX:0.4561,scaleY:0.4561,x:805.876,y:302.6434},0).wait(1).to({scaleX:0.4719,scaleY:0.4719,x:804.001,y:304.4842},0).wait(1).to({scaleX:0.4876,scaleY:0.4876,x:802.1261,y:306.325},0).wait(1).to({scaleX:0.5033,scaleY:0.5033,x:800.2512,y:308.1658},0).wait(1).to({scaleX:0.519,scaleY:0.519,x:798.3762,y:310.0066},0).wait(1).to({scaleX:0.5348,scaleY:0.5348,x:796.5013,y:311.8474},0).wait(1).to({scaleX:0.5505,scaleY:0.5505,x:794.6263,y:313.6882},0).wait(1).to({scaleX:0.5662,scaleY:0.5662,x:792.7514,y:315.529},0).wait(1).to({scaleX:0.5819,scaleY:0.5819,x:790.8765,y:317.3698},0).wait(1).to({scaleX:0.5977,scaleY:0.5977,x:789.0015,y:319.2105},0).wait(1).to({scaleX:0.6134,scaleY:0.6134,x:787.1266,y:321.0513},0).wait(1).to({scaleX:0.6291,scaleY:0.6291,x:785.2516,y:322.8921},0).wait(1).to({scaleX:0.6448,scaleY:0.6448,x:783.3767,y:324.7329},0).wait(1).to({scaleX:0.6606,scaleY:0.6606,x:781.5018,y:326.5737},0).wait(1).to({scaleX:0.6763,scaleY:0.6763,x:779.6268,y:328.4145},0).wait(1).to({scaleX:0.692,scaleY:0.692,x:777.7519,y:330.2553},0).wait(1).to({scaleX:0.7078,scaleY:0.7078,x:775.8769,y:332.0961},0).wait(1).to({scaleX:0.7235,scaleY:0.7235,x:774.002,y:333.9369},0).wait(1).to({scaleX:0.7392,scaleY:0.7392,x:772.1271,y:335.7777},0).wait(1).to({scaleX:0.7549,scaleY:0.7549,x:770.2521,y:337.6185},0).wait(1).to({scaleX:0.7707,scaleY:0.7707,x:768.3772,y:339.4592},0).wait(1).to({scaleX:0.7864,scaleY:0.7864,x:766.5022,y:341.3},0).wait(1).to({scaleX:0.8021,scaleY:0.8021,x:764.6273,y:343.1408},0).wait(1).to({scaleX:0.8178,scaleY:0.8178,x:762.7523,y:344.9816},0).wait(1).to({scaleX:0.8336,scaleY:0.8336,x:760.8774,y:346.8224},0).wait(1).to({scaleX:0.8493,scaleY:0.8493,x:759.0025,y:348.6632},0).wait(1).to({scaleX:0.865,scaleY:0.865,x:757.1275,y:350.504},0).wait(1).to({scaleX:0.8807,scaleY:0.8807,x:755.2526,y:352.3448},0).wait(1).to({scaleX:0.8965,scaleY:0.8965,x:753.3776,y:354.1856},0).wait(1).to({scaleX:0.9122,scaleY:0.9122,x:751.5027,y:356.0264},0).wait(1).to({scaleX:0.9279,scaleY:0.9279,x:749.6278,y:357.8672},0).wait(1).to({scaleX:0.9437,scaleY:0.9437,x:747.7528,y:359.7079},0).wait(1).to({scaleX:0.9594,scaleY:0.9594,x:745.8779,y:361.5487},0).wait(1).to({scaleX:0.9751,scaleY:0.9751,x:744.0029,y:363.3895},0).wait(1).to({scaleX:0.9908,scaleY:0.9908,x:742.128,y:365.2303},0).wait(1).to({scaleX:1.0066,scaleY:1.0066,x:740.2531,y:367.0711},0).wait(1).to({scaleX:1.0223,scaleY:1.0223,x:738.3781,y:368.9119},0).wait(1).to({scaleX:1.038,scaleY:1.038,x:736.5032,y:370.7527},0).wait(1).to({scaleX:1.0537,scaleY:1.0537,x:734.6282,y:372.5935},0).wait(1).to({scaleX:1.0695,scaleY:1.0695,x:732.7533,y:374.4343},0).wait(1).to({scaleX:1.0852,scaleY:1.0852,x:730.8783,y:376.2751},0).wait(1).to({scaleX:1.1009,scaleY:1.1009,x:729.0034,y:378.1159},0).wait(1).to({scaleX:1.1167,scaleY:1.1167,x:727.1285,y:379.9566},0).wait(1).to({scaleX:1.1324,scaleY:1.1324,x:725.2535,y:381.7974},0).wait(1).to({scaleX:1.1481,scaleY:1.1481,x:723.3786,y:383.6382},0).wait(1).to({scaleX:1.1638,scaleY:1.1638,x:721.5036,y:385.479},0).wait(1).to({scaleX:1.1796,scaleY:1.1796,x:719.6287,y:387.3198},0).wait(1).to({scaleX:1.1953,scaleY:1.1953,x:717.7538,y:389.1606},0).wait(1).to({scaleX:1.211,scaleY:1.211,x:715.8788,y:391.0014},0).wait(1).to({scaleX:1.2267,scaleY:1.2267,x:714.0039,y:392.8422},0).wait(1).to({scaleX:1.2425,scaleY:1.2425,x:712.1289,y:394.683},0).wait(1).to({scaleX:1.2582,scaleY:1.2582,x:710.254,y:396.5238},0).wait(1).to({scaleX:1.2739,scaleY:1.2739,x:708.3791,y:398.3646},0).wait(1).to({scaleX:1.2896,scaleY:1.2896,x:706.5041,y:400.2053},0).wait(1).to({scaleX:1.3054,scaleY:1.3054,x:704.6292,y:402.0461},0).wait(1).to({scaleX:1.3211,scaleY:1.3211,x:702.7542,y:403.8869},0).wait(1).to({scaleX:1.3368,scaleY:1.3368,x:700.8793,y:405.7277},0).wait(1).to({scaleX:1.3526,scaleY:1.3526,x:699.0043,y:407.5685},0).wait(1).to({scaleX:1.3683,scaleY:1.3683,x:697.1294,y:409.4093},0).wait(1).to({scaleX:1.384,scaleY:1.384,x:695.2545,y:411.2501},0).wait(1).to({scaleX:1.3997,scaleY:1.3997,x:693.3795,y:413.0909},0).wait(1).to({scaleX:1.4155,scaleY:1.4155,x:691.5046,y:414.9317},0).wait(1).to({scaleX:1.4312,scaleY:1.4312,x:689.6296,y:416.7725},0).wait(1).to({scaleX:1.4469,scaleY:1.4469,x:687.7547,y:418.6133},0).wait(1).to({scaleX:1.4626,scaleY:1.4626,x:685.8798,y:420.4541},0).wait(1).to({scaleX:1.4784,scaleY:1.4784,x:684.0048,y:422.2948},0).wait(1).to({scaleX:1.4941,scaleY:1.4941,x:682.1299,y:424.1356},0).wait(1).to({scaleX:1.5098,scaleY:1.5098,x:680.2549,y:425.9764},0).wait(1).to({scaleX:1.5256,scaleY:1.5256,x:678.38,y:427.8172},0).wait(1).to({scaleX:1.5413,scaleY:1.5413,x:676.5051,y:429.658},0).wait(1).to({scaleX:1.557,scaleY:1.557,x:674.6301,y:431.4988},0).wait(1).to({scaleX:1.5727,scaleY:1.5727,x:672.7552,y:433.3396},0).wait(1).to({scaleX:1.5885,scaleY:1.5885,x:670.8802,y:435.1804},0).wait(1).to({regX:0.1,regY:0.1,scaleX:0.9391,scaleY:0.9391,x:752.85,y:378.85,visible:true},0).wait(91).to({x:673.8,y:356.25},0).wait(89).to({regX:0,regY:0,scaleX:1,scaleY:1,x:640,y:392.05},0).wait(99).to({scaleX:1.028,scaleY:1.028,y:360},0).wait(158).to({regY:0.2},0).wait(1).to({regY:0,scaleX:1.0218,scaleY:1.0218,x:637.4118,y:359.132},0).wait(1).to({scaleX:1.0157,scaleY:1.0157,x:634.8236,y:358.4641},0).wait(1).to({scaleX:1.0095,scaleY:1.0095,x:632.2354,y:357.7961},0).wait(1).to({scaleX:1.0034,scaleY:1.0034,x:629.6472,y:357.1281},0).wait(1).to({scaleX:0.9972,scaleY:0.9972,x:627.0589,y:356.4601},0).wait(1).to({scaleX:0.991,scaleY:0.991,x:624.4707,y:355.7922},0).wait(1).to({scaleX:0.9849,scaleY:0.9849,x:621.8825,y:355.1242},0).wait(1).to({scaleX:0.9787,scaleY:0.9787,x:619.2943,y:354.4562},0).wait(1).to({scaleX:0.9726,scaleY:0.9726,x:616.7061,y:353.7883},0).wait(1).to({scaleX:0.9664,scaleY:0.9664,x:614.1179,y:353.1203},0).wait(1).to({scaleX:0.9602,scaleY:0.9602,x:611.5297,y:352.4523},0).wait(1).to({scaleX:0.9541,scaleY:0.9541,x:608.9415,y:351.7843},0).wait(1).to({scaleX:0.9479,scaleY:0.9479,x:606.3533,y:351.1164},0).wait(1).to({scaleX:0.9417,scaleY:0.9417,x:603.765,y:350.4484},0).wait(1).to({scaleX:0.9356,scaleY:0.9356,x:601.1768,y:349.7804},0).wait(1).to({scaleX:0.9294,scaleY:0.9294,x:598.5886,y:349.1124},0).wait(1).to({scaleX:0.9233,scaleY:0.9233,x:596.0004,y:348.4445},0).wait(1).to({scaleX:0.9171,scaleY:0.9171,x:593.4122,y:347.7765},0).wait(1).to({scaleX:0.9109,scaleY:0.9109,x:590.824,y:347.1085},0).wait(1).to({scaleX:0.9048,scaleY:0.9048,x:588.2358,y:346.4406},0).wait(1).to({scaleX:0.8986,scaleY:0.8986,x:585.6476,y:345.7726},0).wait(1).to({scaleX:0.8925,scaleY:0.8925,x:583.0593,y:345.1046},0).wait(1).to({scaleX:0.8863,scaleY:0.8863,x:580.4711,y:344.4366},0).wait(1).to({scaleX:0.8801,scaleY:0.8801,x:577.8829,y:343.7687},0).wait(1).to({scaleX:0.874,scaleY:0.874,x:575.2947,y:343.1007},0).wait(1).to({scaleX:0.8678,scaleY:0.8678,x:572.7065,y:342.4327},0).wait(1).to({scaleX:0.8617,scaleY:0.8617,x:570.1183,y:341.7648},0).wait(1).to({scaleX:0.8555,scaleY:0.8555,x:567.5301,y:341.0968},0).wait(1).to({scaleX:0.8493,scaleY:0.8493,x:564.9419,y:340.4288},0).wait(1).to({scaleX:0.8432,scaleY:0.8432,x:562.3537,y:339.7608},0).wait(1).to({scaleX:0.837,scaleY:0.837,x:559.7654,y:339.0929},0).wait(1).to({scaleX:0.8309,scaleY:0.8309,x:557.1772,y:338.4249},0).wait(1).to({scaleX:0.8247,scaleY:0.8247,x:554.589,y:337.7569},0).wait(1).to({scaleX:0.8185,scaleY:0.8185,x:552.0008,y:337.089},0).wait(1).to({scaleX:0.8124,scaleY:0.8124,x:549.4126,y:336.421},0).wait(1).to({scaleX:0.8062,scaleY:0.8062,x:546.8244,y:335.753},0).wait(1).to({scaleX:0.8,scaleY:0.8,x:544.2362,y:335.085},0).wait(1).to({scaleX:0.7939,scaleY:0.7939,x:541.648,y:334.4171},0).wait(1).to({scaleX:0.7877,scaleY:0.7877,x:539.0598,y:333.7491},0).wait(1).to({scaleX:0.7816,scaleY:0.7816,x:536.4715,y:333.0811},0).wait(1).to({scaleX:0.7754,scaleY:0.7754,x:533.8833,y:332.4131},0).wait(1).to({scaleX:0.7692,scaleY:0.7692,x:531.2951,y:331.7452},0).wait(1).to({scaleX:0.7631,scaleY:0.7631,x:528.7069,y:331.0772},0).wait(1).to({scaleX:0.7569,scaleY:0.7569,x:526.1187,y:330.4092},0).wait(1).to({scaleX:0.7508,scaleY:0.7508,x:523.5305,y:329.7413},0).wait(1).to({scaleX:0.7446,scaleY:0.7446,x:520.9423,y:329.0733},0).wait(1).to({scaleX:0.7384,scaleY:0.7384,x:518.3541,y:328.4053},0).wait(1).to({scaleX:0.7323,scaleY:0.7323,x:515.7659,y:327.7373},0).wait(1).to({scaleX:0.7261,scaleY:0.7261,x:513.1776,y:327.0694},0).wait(1).to({scaleX:0.72,scaleY:0.72,x:510.5894,y:326.4014},0).wait(1).to({scaleX:0.7138,scaleY:0.7138,x:508.0012,y:325.7334},0).wait(1).to({scaleX:0.7076,scaleY:0.7076,x:505.413,y:325.0655},0).wait(1).to({scaleX:0.7015,scaleY:0.7015,x:502.8248,y:324.3975},0).wait(1).to({scaleX:0.6953,scaleY:0.6953,x:500.2366,y:323.7295},0).wait(1).to({scaleX:0.6892,scaleY:0.6892,x:497.6484,y:323.0615},0).wait(1).to({scaleX:0.683,scaleY:0.683,x:495.0602,y:322.3936},0).wait(1).to({scaleX:0.6768,scaleY:0.6768,x:492.472,y:321.7256},0).wait(1).to({scaleX:0.6707,scaleY:0.6707,x:489.8837,y:321.0576},0).wait(1).to({scaleX:0.6645,scaleY:0.6645,x:487.2955,y:320.3897},0).wait(1).to({scaleX:0.6584,scaleY:0.6584,x:484.7073,y:319.7217},0).wait(1).to({scaleX:0.6522,scaleY:0.6522,x:482.1191,y:319.0537},0).wait(1).to({scaleX:0.646,scaleY:0.646,x:479.5309,y:318.3857},0).wait(1).to({scaleX:0.6399,scaleY:0.6399,x:476.9427,y:317.7178},0).wait(1).to({scaleX:0.6337,scaleY:0.6337,x:474.3545,y:317.0498},0).wait(1).to({scaleX:0.6275,scaleY:0.6275,x:471.7663,y:316.3818},0).wait(1).to({scaleX:0.6214,scaleY:0.6214,x:469.178,y:315.7138},0).wait(1).to({scaleX:0.6152,scaleY:0.6152,x:466.5898,y:315.0459},0).wait(1).to({scaleX:0.6091,scaleY:0.6091,x:464.0016,y:314.3779},0).wait(1).to({scaleX:0.6029,scaleY:0.6029,x:461.4134,y:313.7099},0).wait(1).to({scaleX:0.5967,scaleY:0.5967,x:458.8252,y:313.042},0).wait(1).to({scaleX:0.5906,scaleY:0.5906,x:456.237,y:312.374},0).wait(1).to({scaleX:0.5844,scaleY:0.5844,x:453.6488,y:311.706},0).wait(1).to({scaleX:0.5783,scaleY:0.5783,x:451.0606,y:311.038},0).wait(1).to({scaleX:0.5721,scaleY:0.5721,x:448.4724,y:310.3701},0).wait(1).to({scaleX:0.5659,scaleY:0.5659,x:445.8841,y:309.7021},0).wait(1).to({scaleX:0.5598,scaleY:0.5598,x:443.2959,y:309.0341},0).wait(1).to({scaleX:0.5536,scaleY:0.5536,x:440.7077,y:308.3662},0).wait(1).to({scaleX:0.5475,scaleY:0.5475,x:438.1195,y:307.6982},0).wait(1).to({scaleX:0.5413,scaleY:0.5413,x:435.5313,y:307.0302},0).wait(1).to({scaleX:0.5351,scaleY:0.5351,x:432.9431,y:306.3622},0).wait(1).to({scaleX:0.529,scaleY:0.529,x:430.3549,y:305.6943},0).wait(1).to({scaleX:0.5228,scaleY:0.5228,x:427.7667,y:305.0263},0).wait(1).to({scaleX:0.5167,scaleY:0.5167,x:425.1785,y:304.3583},0).wait(1).to({scaleX:0.5105,scaleY:0.5105,x:422.5902,y:303.6904},0).wait(1).to({scaleX:0.5043,scaleY:0.5043,x:420.002,y:303.0224},0).wait(1).to({scaleX:0.4982,scaleY:0.4982,x:417.4138,y:302.3544},0).wait(1).to({scaleX:0.492,scaleY:0.492,x:414.8256,y:301.6864},0).wait(1).to({scaleX:0.4858,scaleY:0.4858,x:412.2374,y:301.0185},0).wait(1).to({scaleX:0.4797,scaleY:0.4797,x:409.6492,y:300.3505},0).wait(1).to({scaleX:0.4735,scaleY:0.4735,x:407.061,y:299.6825},0).wait(1).to({scaleX:0.4674,scaleY:0.4674,x:404.4728,y:299.0145},0).wait(1).to({scaleX:0.4612,scaleY:0.4612,x:401.8846,y:298.3466},0).wait(1).to({scaleX:0.455,scaleY:0.455,x:399.2963,y:297.6786},0).wait(1).to({scaleX:0.4489,scaleY:0.4489,x:396.7081,y:297.0106},0).wait(1).to({scaleX:0.4427,scaleY:0.4427,x:394.1199,y:296.3427},0).wait(1).to({scaleX:0.4366,scaleY:0.4366,x:391.5317,y:295.6747},0).wait(1).to({scaleX:0.4304,scaleY:0.4304,x:388.9435,y:295.0067},0).wait(1).to({scaleX:0.4242,scaleY:0.4242,x:386.3553,y:294.3387},0).wait(1).to({scaleX:0.4181,scaleY:0.4181,x:383.7671,y:293.6708},0).wait(1).to({scaleX:0.4119,scaleY:0.4119,x:381.1789,y:293.0028},0).wait(1).to({scaleX:0.4058,scaleY:0.4058,x:378.5907,y:292.3348},0).wait(1).to({scaleX:0.3996,scaleY:0.3996,x:376.0024,y:291.6669},0).wait(1).to({scaleX:0.3934,scaleY:0.3934,x:373.4142,y:290.9989},0).wait(1).to({scaleX:0.3873,scaleY:0.3873,x:370.826,y:290.3309},0).wait(1).to({scaleX:0.3811,scaleY:0.3811,x:368.2378,y:289.6629},0).wait(1).to({scaleX:0.375,scaleY:0.375,x:365.6496,y:288.995},0).wait(1).to({scaleX:0.3688,scaleY:0.3688,x:363.0614,y:288.327},0).wait(1).to({scaleX:0.3626,scaleY:0.3626,x:360.4732,y:287.659},0).wait(1).to({scaleX:0.3565,scaleY:0.3565,x:357.885,y:286.9911},0).wait(1).to({scaleX:0.3503,scaleY:0.3503,x:355.2967,y:286.3231},0).wait(1).to({scaleX:0.3441,scaleY:0.3441,x:352.7085,y:285.6551},0).wait(1).to({scaleX:0.338,scaleY:0.338,x:350.1203,y:284.9871},0).wait(1).to({scaleX:0.3318,scaleY:0.3318,x:347.5321,y:284.3192},0).wait(1).to({scaleX:0.3257,scaleY:0.3257,x:344.9439,y:283.6512},0).wait(1).to({scaleX:0.3195,scaleY:0.3195,x:342.3557,y:282.9832},0).wait(1).to({scaleX:0.3133,scaleY:0.3133,x:339.7675,y:282.3152},0).wait(1).to({scaleX:0.3072,scaleY:0.3072,x:337.1793,y:281.6473},0).wait(1).to({scaleX:0.301,scaleY:0.301,x:334.5911,y:280.9793},0).wait(1).to({scaleX:0.2949,scaleY:0.2949,x:332.0028,y:280.3113},0).wait(1).to({scaleX:0.2887,scaleY:0.2887,x:329.4146,y:279.6434},0).wait(1).to({scaleX:0.2825,scaleY:0.2825,x:326.8264,y:278.9754},0).wait(1).to({scaleX:0.2764,scaleY:0.2764,x:324.2382,y:278.3074},0).wait(1).to({scaleX:0.2702,scaleY:0.2702,x:321.65,y:277.6394},0).wait(1).to({regX:0.1,regY:0.1,scaleX:1.0567,scaleY:1.0567,x:631.6,y:393.85},0).wait(147));

	// start_obj_
	this.start = new lib.Scene_1_start();
	this.start.name = "start";
	this.start.setTransform(870.1,226.5,1,1,0,0,0,870.1,226.5);
	this.start.depth = 0;
	this.start.isAttachedToCamera = 0
	this.start.isAttachedToMask = 0
	this.start.layerDepth = 0
	this.start.layerIndex = 0
	this.start.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.start).to({_off:true},1).wait(826));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.setTransform(681.8,444.5,1,1,0,0,0,681.8,444.5);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 1
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).to({_off:true},1).wait(826));

	// eye_open_obj_
	this.eye_open = new lib.Scene_1_eye_open();
	this.eye_open.name = "eye_open";
	this.eye_open.depth = 0;
	this.eye_open.isAttachedToCamera = 0
	this.eye_open.isAttachedToMask = 0
	this.eye_open.layerDepth = 0
	this.eye_open.layerIndex = 2
	this.eye_open.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.eye_open).wait(1).to({regX:-35.4,regY:-19.9,scaleX:0.9477,scaleY:0.9477,x:-0.05},0).to({_off:true},28).wait(798));

	// fish_dots_obj_
	this.fish_dots = new lib.Scene_1_fish_dots();
	this.fish_dots.name = "fish_dots";
	this.fish_dots.depth = 0;
	this.fish_dots.isAttachedToCamera = 0
	this.fish_dots.isAttachedToMask = 0
	this.fish_dots.layerDepth = 0
	this.fish_dots.layerIndex = 3
	this.fish_dots.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fish_dots).wait(1).to({regX:-35.4,regY:-19.9,scaleX:0.9477,scaleY:0.9477,x:-0.05},0).to({_off:true},28).wait(798));

	// fish_body_obj_
	this.fish_body = new lib.Scene_1_fish_body();
	this.fish_body.name = "fish_body";
	this.fish_body.depth = 0;
	this.fish_body.isAttachedToCamera = 0
	this.fish_body.isAttachedToMask = 0
	this.fish_body.layerDepth = 0
	this.fish_body.layerIndex = 4
	this.fish_body.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fish_body).wait(1).to({regX:-35.4,regY:-19.9,scaleX:0.9477,scaleY:0.9477,x:-0.05},0).to({_off:true},28).wait(798));

	// bubblin_obj_
	this.bubblin = new lib.Scene_1_bubblin();
	this.bubblin.name = "bubblin";
	this.bubblin.depth = 0;
	this.bubblin.isAttachedToCamera = 0
	this.bubblin.isAttachedToMask = 0
	this.bubblin.layerDepth = 0
	this.bubblin.layerIndex = 5
	this.bubblin.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bubblin).wait(29).to({regX:716.9,regY:203.3,scaleX:5.298,scaleY:5.298,y:-0.25},0).wait(1).to({regX:705,regY:199.5,scaleX:4.8907,scaleY:4.8907,x:0.25,y:0},0).wait(1).to({regX:693,regY:195.7,scaleX:4.5413,scaleY:4.5413,x:0,y:0.25},0).wait(1).to({regX:681.1,regY:191.8,scaleX:4.2385,scaleY:4.2385,x:0.25,y:0.05},0).wait(1).to({regX:669.1,regY:188,scaleX:3.9738,scaleY:3.9738,x:-0.2,y:0},0).wait(1).to({regX:657.1,regY:184.2,scaleX:3.74,scaleY:3.74,x:-0.15},0).wait(1).to({regX:645.2,regY:180.3,scaleX:3.5322,scaleY:3.5322,y:-0.15},0).wait(1).to({regX:633.3,regY:176.6,scaleX:3.3464,scaleY:3.3464,x:0.05,y:0.2},0).wait(1).to({regX:621.4,regY:172.7,scaleX:3.179,scaleY:3.179,x:0,y:0},0).wait(1).to({regX:609.4,regY:169,scaleX:3.0276,scaleY:3.0276,x:0.05,y:0.15},0).wait(1).to({regX:597.5,regY:165.1,scaleX:2.8901,scaleY:2.8901,x:0.15},0).wait(1).to({regX:585.6,regY:161.2,scaleX:2.7644,scaleY:2.7644,y:-0.15},0).wait(1).to({regX:573.6,regY:157.4,scaleX:2.6492,scaleY:2.6492,x:0.05,y:0.05},0).wait(1).to({regX:561.6,regY:153.6,scaleX:2.5433,scaleY:2.5433,x:-0.1,y:0.15},0).wait(1).to({regX:549.7,regY:149.8,scaleX:2.4454,scaleY:2.4454,x:0,y:0.05},0).wait(1).to({regX:537.8,regY:146,scaleX:2.3549,scaleY:2.3549,x:0.15,y:0.15},0).wait(1).to({regX:525.9,regY:142.1,scaleX:2.2708,scaleY:2.2708,x:0.1,y:0.05},0).wait(1).to({regX:513.9,regY:138.2,scaleX:2.1925,scaleY:2.1925,y:-0.1},0).wait(1).to({regX:501.9,regY:134.4,scaleX:2.1194,scaleY:2.1194,x:0},0).wait(1).to({regX:490,regY:130.7,scaleX:2.0511,scaleY:2.0511,y:0.15},0).wait(1).to({regX:478.1,regY:126.8,scaleX:1.987,scaleY:1.987,x:0.1,y:0.05},0).wait(1).to({regX:466.1,regY:123,scaleX:1.9267,scaleY:1.9267,x:0,y:0.15},0).wait(1).to({regX:454.2,regY:119.2,scaleX:1.8701,scaleY:1.8701,x:0.1,y:0.1},0).wait(1).to({regX:442.2,regY:115.3,scaleX:1.8167,scaleY:1.8167,x:-0.1,y:0},0).wait(1).to({regX:430.3,regY:111.5,scaleX:1.7662,scaleY:1.7662,x:0.05,y:0.05},0).wait(1).to({regX:418.4,regY:107.6,scaleX:1.7185,scaleY:1.7185,x:0.1,y:-0.05},0).wait(1).to({regX:406.4,regY:103.9,scaleX:1.6732,scaleY:1.6732,x:0,y:0.1},0).wait(1).to({regX:394.4,regY:100,scaleX:1.6303,scaleY:1.6303,x:-0.05,y:-0.05},0).wait(1).to({regX:382.6,regY:96.2,scaleX:1.5896,scaleY:1.5896,x:0.05,y:0},0).wait(1).to({regX:370.6,regY:92.4,scaleX:1.5508,scaleY:1.5508,x:0.1,y:0.05},0).wait(1).to({regX:358.6,regY:88.5,scaleX:1.5139,scaleY:1.5139,x:0,y:-0.05},0).wait(1).to({regX:346.7,regY:84.7,scaleX:1.4787,scaleY:1.4787,y:0.05},0).wait(1).to({regX:334.7,regY:80.9,scaleX:1.4451,scaleY:1.4451,x:-0.05,y:0},0).wait(1).to({regX:322.8,regY:77,scaleX:1.4129,scaleY:1.4129,x:0.1,y:-0.05},0).wait(1).to({regX:310.9,regY:73.2,scaleX:1.3822,scaleY:1.3822,y:0.05},0).wait(1).to({regX:298.9,regY:69.4,scaleX:1.3528,scaleY:1.3528,x:0},0).wait(1).to({regX:287,regY:65.5,scaleX:1.3246,scaleY:1.3246,y:-0.1},0).wait(1).to({regX:274.9,regY:61.8,scaleX:1.2976,scaleY:1.2976,x:-0.1,y:0.05},0).wait(1).to({regX:263.1,regY:57.9,scaleX:1.2717,scaleY:1.2717,x:0.05},0).wait(1).to({regX:251.1,regY:54.1,scaleX:1.2467,scaleY:1.2467,x:0},0).wait(1).to({regX:239.2,regY:50.2,scaleX:1.2227,scaleY:1.2227,x:0.1,y:0},0).wait(1).to({regX:227.2,regY:46.5,scaleX:1.1997,scaleY:1.1997,x:0,y:0.05},0).wait(1).to({regX:215.2,regY:42.6,scaleX:1.1775,scaleY:1.1775,x:-0.05,y:-0.05},0).wait(1).to({regX:203.3,regY:38.8,scaleX:1.1561,scaleY:1.1561,x:0.05,y:0},0).wait(1).to({regX:191.4,regY:35,scaleX:1.1354,scaleY:1.1354,x:0,y:0.05},0).wait(1).to({regX:179.4,regY:31.2,scaleX:1.1155,scaleY:1.1155,y:0},0).wait(1).to({regX:167.5,regY:27.3,scaleX:1.0963,scaleY:1.0963},0).wait(1).to({regX:155.5,regY:23.5,scaleX:1.0777,scaleY:1.0777,y:0.05},0).wait(1).to({regX:143.6,regY:19.7,scaleX:1.0597,scaleY:1.0597,y:0.1},0).wait(1).to({regX:131.7,regY:15.8,scaleX:1.0423,scaleY:1.0423,x:0.1,y:-0.05},0).wait(1).to({regX:119.7,regY:12.1,scaleX:1.0255,scaleY:1.0255,x:0,y:0.05},0).wait(1).to({regX:107.8,regY:8.2,scaleX:1.0093,scaleY:1.0093,x:0.05},0).wait(1).to({regX:95.8,regY:4.4,scaleX:0.9935,scaleY:0.9935,x:0,y:0},0).wait(1).to({regX:83.9,regY:0.5,scaleX:0.9782,scaleY:0.9782,y:0.05},0).wait(1).to({regX:72,regY:-3.1,scaleX:0.9634,scaleY:0.9634,x:0.05},0).wait(1).to({regX:60,regY:-7,scaleX:0.949,scaleY:0.949,y:0},0).wait(1).to({regX:48.1,regY:-10.8,scaleX:0.9351,scaleY:0.9351},0).wait(1).to({regX:36.1,regY:-14.7,scaleX:0.9215,scaleY:0.9215,x:0,y:-0.05},0).wait(1).to({regX:24.1,regY:-18.5,scaleX:0.9083,scaleY:0.9083,y:0},0).wait(1).to({regX:12.2,regY:-22.3,scaleX:0.8956,scaleY:0.8956},0).wait(1).to({regX:0.3,regY:-26.2,scaleX:0.8831,scaleY:0.8831,y:-0.05},0).wait(1).to({regX:-11.6,regY:-30,scaleX:0.871,scaleY:0.871,y:0},0).wait(1).to({regX:-23.5,regY:-33.8,scaleX:0.8592,scaleY:0.8592},0).wait(1).to({regX:-35.5,regY:-37.6,scaleX:0.8478,scaleY:0.8478,x:-0.05},0).wait(1).to({regX:-47.4,regY:-41.5,scaleX:0.8366,scaleY:0.8366,x:0},0).wait(1).to({regX:-59.4,regY:-45.3,scaleX:0.8258,scaleY:0.8258},0).wait(1).to({regX:-71.2,regY:-49.1,scaleX:0.8152,scaleY:0.8152,x:0.05,y:0.05},0).wait(1).to({regX:-83.2,regY:-52.9,scaleX:0.8049,scaleY:0.8049,y:-0.05},0).wait(1).to({regX:-95.2,regY:-56.8,scaleX:0.7948,scaleY:0.7948,x:0},0).wait(1).to({regX:-107.2,regY:-60.6,scaleX:0.785,scaleY:0.785,x:-0.05,y:0},0).wait(1).to({regX:-119.1,regY:-64.4,scaleX:0.7754,scaleY:0.7754,x:0},0).wait(1).to({regX:-131,regY:-68.2,scaleX:0.7661,scaleY:0.7661,y:0.05},0).wait(1).to({regX:-143,regY:-72,scaleX:0.757,scaleY:0.757,x:-0.05,y:0},0).wait(1).to({regX:-155,regY:-75.9,scaleX:0.748,scaleY:0.748,y:-0.05},0).wait(1).to({regX:-166.8,regY:-79.8,scaleX:0.7393,scaleY:0.7393,x:0.05},0).wait(1).to({regX:-178.8,regY:-83.5,scaleX:0.7309,scaleY:0.7309,x:0,y:0},0).wait(1).to({regX:-190.7,regY:-87.4,scaleX:0.7225,scaleY:0.7225},0).wait(1).to({regX:-202.7,regY:-91.2,scaleX:0.7144,scaleY:0.7144},0).wait(1).to({regX:-214.6,regY:-95,scaleX:0.7065,scaleY:0.7065,y:0.05},0).wait(1).to({regX:-226.6,regY:-98.9,scaleX:0.6987,scaleY:0.6987,x:-0.05,y:0},0).wait(1).to({regX:-238.5,regY:-102.7,scaleX:0.6911,scaleY:0.6911,x:0,y:-0.05},0).wait(1).to({regX:-250.5,regY:-106.5,scaleX:0.6837,scaleY:0.6837,y:0},0).wait(1).to({regX:-262.4,regY:-110.3,scaleX:0.6764,scaleY:0.6764},0).wait(1).to({regX:-274.4,regY:-114.2,scaleX:0.6693,scaleY:0.6693,y:-0.05},0).wait(1).to({regX:-286.2,regY:-118,scaleX:0.6623,scaleY:0.6623,x:0.05,y:0},0).wait(1).to({regX:-298.2,regY:-121.8,scaleX:0.6555,scaleY:0.6555,y:-0.05},0).wait(1).to({regX:-310.2,regY:-125.6,scaleX:0.6488,scaleY:0.6488,x:0,y:0},0).wait(1).to({regX:-322.2,regY:-129.4,scaleX:0.6423,scaleY:0.6423,x:-0.05},0).to({_off:true},3).wait(708));

	// bobblin_obj_
	this.bobblin = new lib.Scene_1_bobblin();
	this.bobblin.name = "bobblin";
	this.bobblin.depth = 0;
	this.bobblin.isAttachedToCamera = 0
	this.bobblin.isAttachedToMask = 0
	this.bobblin.layerDepth = 0
	this.bobblin.layerIndex = 6
	this.bobblin.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bobblin).wait(29).to({regX:716.9,regY:203.3,scaleX:5.298,scaleY:5.298,y:-0.25},0).wait(1).to({regX:1247.3,regY:454.1,scaleX:1,scaleY:1,x:530.45,y:250.8},0).wait(88).to({_off:true},1).wait(708));

	// fish_eyes_obj_
	this.fish_eyes = new lib.Scene_1_fish_eyes();
	this.fish_eyes.name = "fish_eyes";
	this.fish_eyes.depth = 0;
	this.fish_eyes.isAttachedToCamera = 0
	this.fish_eyes.isAttachedToMask = 0
	this.fish_eyes.layerDepth = 0
	this.fish_eyes.layerIndex = 7
	this.fish_eyes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fish_eyes).wait(29).to({regX:716.9,regY:203.3,scaleX:5.298,scaleY:5.298,y:-0.25},0).to({_off:true},90).wait(708));

	// fish_dots_small_obj_
	this.fish_dots_small = new lib.Scene_1_fish_dots_small();
	this.fish_dots_small.name = "fish_dots_small";
	this.fish_dots_small.depth = 0;
	this.fish_dots_small.isAttachedToCamera = 0
	this.fish_dots_small.isAttachedToMask = 0
	this.fish_dots_small.layerDepth = 0
	this.fish_dots_small.layerIndex = 8
	this.fish_dots_small.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fish_dots_small).wait(29).to({regX:716.9,regY:203.3,scaleX:5.298,scaleY:5.298,y:-0.25},0).to({_off:true},90).wait(708));

	// fish_obj_
	this.fish = new lib.Scene_1_fish();
	this.fish.name = "fish";
	this.fish.depth = 0;
	this.fish.isAttachedToCamera = 0
	this.fish.isAttachedToMask = 0
	this.fish.layerDepth = 0
	this.fish.layerIndex = 9
	this.fish.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fish).wait(29).to({regX:716.9,regY:203.3,scaleX:5.298,scaleY:5.298,y:-0.25},0).to({_off:true},90).wait(708));

	// background_obj_
	this.background_1 = new lib.Scene_1_background_1();
	this.background_1.name = "background_1";
	this.background_1.depth = 0;
	this.background_1.isAttachedToCamera = 0
	this.background_1.isAttachedToMask = 0
	this.background_1.layerDepth = 0
	this.background_1.layerIndex = 10
	this.background_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background_1).wait(29).to({regX:716.9,regY:203.3,scaleX:5.298,scaleY:5.298,y:-0.25},0).to({_off:true},90).wait(708));

	// flash_obj_
	this.flash = new lib.Scene_1_flash();
	this.flash.name = "flash";
	this.flash.depth = 0;
	this.flash.isAttachedToCamera = 0
	this.flash.isAttachedToMask = 0
	this.flash.layerDepth = 0
	this.flash.layerIndex = 11
	this.flash.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.flash).wait(198).to({regX:151.7,regY:40.6,scaleX:1.0648,scaleY:1.0648,x:0.05},0).wait(10).to({_off:true},2).wait(617));

	// photographer_obj_
	this.photographer = new lib.Scene_1_photographer();
	this.photographer.name = "photographer";
	this.photographer.depth = 0;
	this.photographer.isAttachedToCamera = 0
	this.photographer.isAttachedToMask = 0
	this.photographer.layerDepth = 0
	this.photographer.layerIndex = 12
	this.photographer.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.photographer).wait(119).to({regX:151.7,regY:40.6,scaleX:1.0648,scaleY:1.0648,x:0.05},0).to({_off:true},91).wait(617));

	// hand_camera_obj_
	this.hand_camera = new lib.Scene_1_hand_camera();
	this.hand_camera.name = "hand_camera";
	this.hand_camera.depth = 0;
	this.hand_camera.isAttachedToCamera = 0
	this.hand_camera.isAttachedToMask = 0
	this.hand_camera.layerDepth = 0
	this.hand_camera.layerIndex = 13
	this.hand_camera.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.hand_camera).wait(119).to({regX:151.7,regY:40.6,scaleX:1.0648,scaleY:1.0648,x:0.05},0).to({_off:true},91).wait(617));

	// fence_obj_
	this.fence = new lib.Scene_1_fence();
	this.fence.name = "fence";
	this.fence.depth = 0;
	this.fence.isAttachedToCamera = 0
	this.fence.isAttachedToMask = 0
	this.fence.layerDepth = 0
	this.fence.layerIndex = 14
	this.fence.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fence).wait(119).to({regX:151.7,regY:40.6,scaleX:1.0648,scaleY:1.0648,x:0.05},0).to({_off:true},91).wait(617));

	// clouds_obj_
	this.clouds = new lib.Scene_1_clouds();
	this.clouds.name = "clouds";
	this.clouds.depth = 0;
	this.clouds.isAttachedToCamera = 0
	this.clouds.isAttachedToMask = 0
	this.clouds.layerDepth = 0
	this.clouds.layerIndex = 15
	this.clouds.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clouds).wait(119).to({regX:151.7,regY:40.6,scaleX:1.0648,scaleY:1.0648,x:0.05},0).wait(90).to({_off:true},1).wait(617));

	// sea_top_obj_
	this.sea_top = new lib.Scene_1_sea_top();
	this.sea_top.name = "sea_top";
	this.sea_top.depth = 0;
	this.sea_top.isAttachedToCamera = 0
	this.sea_top.isAttachedToMask = 0
	this.sea_top.layerDepth = 0
	this.sea_top.layerIndex = 16
	this.sea_top.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sea_top).wait(119).to({regX:151.7,regY:40.6,scaleX:1.0648,scaleY:1.0648,x:0.05},0).wait(90).to({_off:true},1).wait(617));

	// splash_obj_
	this.splash = new lib.Scene_1_splash();
	this.splash.name = "splash";
	this.splash.depth = 0;
	this.splash.isAttachedToCamera = 0
	this.splash.isAttachedToMask = 0
	this.splash.layerDepth = 0
	this.splash.layerIndex = 17
	this.splash.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.splash).wait(140).to({regX:151.7,regY:40.6,scaleX:1.0648,scaleY:1.0648,x:0.05},0).wait(34).to({_off:true},1).wait(652));

	// fish_jump_obj_
	this.fish_jump = new lib.Scene_1_fish_jump();
	this.fish_jump.name = "fish_jump";
	this.fish_jump.depth = 0;
	this.fish_jump.isAttachedToCamera = 0
	this.fish_jump.isAttachedToMask = 0
	this.fish_jump.layerDepth = 0
	this.fish_jump.layerIndex = 18
	this.fish_jump.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fish_jump).wait(134).to({regX:151.7,regY:40.6,scaleX:1.0648,scaleY:1.0648,x:0.05},0).wait(1).to({regX:886.7,regY:608.9,scaleX:1,scaleY:1,x:735.05,y:568.3},0).wait(74).to({_off:true},1).wait(617));

	// background_back_obj_
	this.background_back = new lib.Scene_1_background_back();
	this.background_back.name = "background_back";
	this.background_back.depth = 0;
	this.background_back.isAttachedToCamera = 0
	this.background_back.isAttachedToMask = 0
	this.background_back.layerDepth = 0
	this.background_back.layerIndex = 19
	this.background_back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background_back).wait(119).to({regX:151.7,regY:40.6,scaleX:1.0648,scaleY:1.0648,x:0.05},0).to({_off:true},91).wait(617));

	// photo_obj_
	this.photo = new lib.Scene_1_photo();
	this.photo.name = "photo";
	this.photo.depth = 0;
	this.photo.isAttachedToCamera = 0
	this.photo.isAttachedToMask = 0
	this.photo.layerDepth = 0
	this.photo.layerIndex = 20
	this.photo.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.photo).wait(210).to({regX:72.7,regY:18.1,scaleX:1.0648,scaleY:1.0648,x:0.05,y:0.05},0).to({_off:true},89).wait(528));

	// newspaper_obj_
	this.newspaper = new lib.Scene_1_newspaper();
	this.newspaper.name = "newspaper";
	this.newspaper.depth = 0;
	this.newspaper.isAttachedToCamera = 0
	this.newspaper.isAttachedToMask = 0
	this.newspaper.layerDepth = 0
	this.newspaper.layerIndex = 21
	this.newspaper.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.newspaper).wait(210).to({regX:72.7,regY:18.1,scaleX:1.0648,scaleY:1.0648,x:0.05,y:0.05},0).to({_off:true},89).wait(528));

	// newspapper_no_obj_
	this.newspapper_no = new lib.Scene_1_newspapper_no();
	this.newspapper_no.name = "newspapper_no";
	this.newspapper_no.depth = 0;
	this.newspapper_no.isAttachedToCamera = 0
	this.newspapper_no.isAttachedToMask = 0
	this.newspapper_no.layerDepth = 0
	this.newspapper_no.layerIndex = 22
	this.newspapper_no.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.newspapper_no).wait(210).to({regX:72.7,regY:18.1,scaleX:1.0648,scaleY:1.0648,x:0.05,y:0.05},0).to({_off:true},89).wait(528));

	// pirat_obj_
	this.pirat = new lib.Scene_1_pirat();
	this.pirat.name = "pirat";
	this.pirat.depth = 0;
	this.pirat.isAttachedToCamera = 0
	this.pirat.isAttachedToMask = 0
	this.pirat.layerDepth = 0
	this.pirat.layerIndex = 23
	this.pirat.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.pirat).wait(299).to({regY:32,y:-0.05},0).to({_off:true},99).wait(429));

	// ship_obj_
	this.ship = new lib.Scene_1_ship();
	this.ship.name = "ship";
	this.ship.depth = 0;
	this.ship.isAttachedToCamera = 0
	this.ship.isAttachedToMask = 0
	this.ship.layerDepth = 0
	this.ship.layerIndex = 24
	this.ship.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ship).wait(299).to({regY:32,y:-0.05},0).to({_off:true},99).wait(429));

	// cloud_obj_
	this.cloud = new lib.Scene_1_cloud();
	this.cloud.name = "cloud";
	this.cloud.depth = 0;
	this.cloud.isAttachedToCamera = 0
	this.cloud.isAttachedToMask = 0
	this.cloud.layerDepth = 0
	this.cloud.layerIndex = 25
	this.cloud.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud).wait(299).to({regY:32,y:-0.05},0).wait(98).to({_off:true},1).wait(429));

	// sea_wave__obj_
	this.sea_wave_ = new lib.Scene_1_sea_wave_();
	this.sea_wave_.name = "sea_wave_";
	this.sea_wave_.depth = 0;
	this.sea_wave_.isAttachedToCamera = 0
	this.sea_wave_.isAttachedToMask = 0
	this.sea_wave_.layerDepth = 0
	this.sea_wave_.layerIndex = 26
	this.sea_wave_.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sea_wave_).wait(299).to({regY:32,y:-0.05},0).wait(1).to({regX:1223.4,regY:692.3,x:1223.4,y:660.25},0).wait(97).to({_off:true},1).wait(429));

	// sky_obj_
	this.sky = new lib.Scene_1_sky();
	this.sky.name = "sky";
	this.sky.depth = 0;
	this.sky.isAttachedToCamera = 0
	this.sky.isAttachedToMask = 0
	this.sky.layerDepth = 0
	this.sky.layerIndex = 27
	this.sky.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sky).wait(299).to({regY:32,y:-0.05},0).to({_off:true},99).wait(429));

	// mask_idn (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_398 = new cjs.Graphics().p("EBB8AkSQngngAAqoQAAqnHgnhQHhnfKnAAQKoAAHgHfQHgHhAAKnQAAKongHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_399 = new cjs.Graphics().p("EBBQAkTQnhngAAqnQAAqoHhngQHgngKoAAQKnAAHgHgQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_400 = new cjs.Graphics().p("EBAjAkVQnhngAAqoQAAqnHhnhQHgnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_401 = new cjs.Graphics().p("EA/2AkYQngngAAqoQAAqnHgnhQHgnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHgqnAAQqoAAngngg");
	var mask_graphics_402 = new cjs.Graphics().p("EA/JAkcQngnhAAqnQAAqnHgnhQHhnfKnAAQKoAAHgHfQHgHhAAKnQAAKnngHhQngHgqoAAQqnAAnhngg");
	var mask_graphics_403 = new cjs.Graphics().p("EA+dAkgQngngAAqoQAAqnHgnhQHgnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHgqnAAQqoAAngngg");
	var mask_graphics_404 = new cjs.Graphics().p("EA9wAklQngngAAqnQAAqoHgngQHhngKnAAQKoAAHgHgQHhHgAAKoQAAKnnhHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_405 = new cjs.Graphics().p("EA9EAkrQngngAAqoQAAqnHgnhQHhnfKnAAQKoAAHgHfQHgHhAAKnQAAKongHgQngHgqoAAQqnAAnhngg");
	var mask_graphics_406 = new cjs.Graphics().p("EA8YAkxQngngAAqnQAAqoHgngQHhnfKnAAQKoAAHgHfQHgHgAAKoQAAKnngHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_407 = new cjs.Graphics().p("EA7sAk5QngngAAqoQAAqnHgnhQHhnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHgqnAAQqoAAnhngg");
	var mask_graphics_408 = new cjs.Graphics().p("EA7BAlBQngngAAqnQAAqoHgngQHgngKoAAQKnAAHgHgQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_409 = new cjs.Graphics().p("EA6VAlKQngngAAqnQAAqoHgngQHhngKnAAQKnAAHhHgQHgHgAAKoQAAKnngHgQnhHhqnAAQqnAAnhnhg");
	var mask_graphics_410 = new cjs.Graphics().p("EA5qAlUQngngAAqoQAAqnHgnhQHgnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHgqnAAQqoAAngngg");
	var mask_graphics_411 = new cjs.Graphics().p("EA4+AlfQngnhAAqnQAAqnHgnhQHhnfKnAAQKoAAHgHfQHgHhAAKnQAAKnngHhQngHgqoAAQqnAAnhngg");
	var mask_graphics_412 = new cjs.Graphics().p("EA4TAlqQngngAAqoQAAqnHgnhQHgnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHgqnAAQqoAAngngg");
	var mask_graphics_413 = new cjs.Graphics().p("EA3oAl2QngngAAqoQAAqnHgnhQHgnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHgqnAAQqoAAngngg");
	var mask_graphics_414 = new cjs.Graphics().p("EA29AmDQngngAAqoQAAqnHgnhQHgnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHgqnAAQqoAAngngg");
	var mask_graphics_415 = new cjs.Graphics().p("EA2SAmRQngnhAAqnQAAqnHgnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_416 = new cjs.Graphics().p("EA1nAmfQngngAAqnQAAqoHgngQHhngKnAAQKoAAHgHgQHgHgAAKoQAAKnngHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_417 = new cjs.Graphics().p("EA09AmuQngngAAqnQAAqoHgngQHgnfKoAAQKnAAHgHfQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_418 = new cjs.Graphics().p("EA0SAm+QngngAAqnQAAqoHgngQHhnfKnAAQKoAAHgHfQHgHgAAKoQAAKnngHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_419 = new cjs.Graphics().p("EAzoAnPQngngAAqoQAAqnHgnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKongHgQnhHhqnAAQqnAAnhnhg");
	var mask_graphics_420 = new cjs.Graphics().p("EAy+AnhQngngAAqoQAAqnHgnhQHgnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHgqnAAQqoAAngngg");
	var mask_graphics_421 = new cjs.Graphics().p("EAyTAnzQngngAAqoQAAqnHgnhQHhnfKnAAQKoAAHgHfQHhHhAAKnQAAKonhHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_422 = new cjs.Graphics().p("EAxpAoGQngngAAqnQAAqoHgngQHhnfKnAAQKoAAHgHfQHhHgAAKoQAAKnnhHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_423 = new cjs.Graphics().p("EAxAAoaQngngAAqnQAAqoHgngQHgnfKoAAQKnAAHgHfQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_424 = new cjs.Graphics().p("EAwWAovQngngAAqnQAAqoHgngQHhngKnAAQKoAAHgHgQHgHgAAKoQAAKnngHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_425 = new cjs.Graphics().p("EAvsApFQngnhAAqnQAAqnHgnhQHhnfKnAAQKoAAHgHfQHhHhAAKnQAAKnnhHhQngHgqoAAQqnAAnhngg");
	var mask_graphics_426 = new cjs.Graphics().p("EAvDApbQngngAAqnQAAqoHgnhQHhnfKnAAQKnAAHhHfQHgHhAAKoQAAKnngHgQnhHhqnAAQqnAAnhnhg");
	var mask_graphics_427 = new cjs.Graphics().p("EAuaApyQnhngAAqoQAAqnHhnhQHgnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHgqnAAQqoAAngngg");
	var mask_graphics_428 = new cjs.Graphics().p("EAtxAqKQnhngAAqnQAAqoHhnhQHgnfKoAAQKnAAHgHfQHhHhAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_429 = new cjs.Graphics().p("EAtHAqjQngnhAAqnQAAqnHgnhQHhnfKnAAQKoAAHgHfQHhHhAAKnQAAKnnhHhQngHgqoAAQqnAAnhngg");
	var mask_graphics_430 = new cjs.Graphics().p("EAseAq8QngngAAqoQAAqnHgnhQHhnfKnAAQKoAAHgHfQHgHhAAKnQAAKongHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_431 = new cjs.Graphics().p("EAr1ArWQngngAAqnQAAqoHgngQHhnfKnAAQKoAAHgHfQHhHgAAKoQAAKnnhHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_432 = new cjs.Graphics().p("EAqtArBQngngAAqoQAAqnHgnhQHhnfKnAAQKoAAHgHfQHhHhAAKnQAAKonhHgQngHgqoAAQqnAAnhngg");
	var mask_graphics_433 = new cjs.Graphics().p("EApmAqqQngngAAqnQAAqoHgngQHgnfKoAAQKnAAHgHfQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_434 = new cjs.Graphics().p("EAoeAqSQngngAAqnQAAqoHgngQHhngKnAAQKoAAHgHgQHgHgAAKoQAAKnngHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_435 = new cjs.Graphics().p("EAnXAp4QngngAAqnQAAqoHgnhQHhnfKnAAQKoAAHgHfQHgHhAAKoQAAKnngHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_436 = new cjs.Graphics().p("EAmQApdQngnhAAqnQAAqnHgnhQHhnfKnAAQKoAAHgHfQHhHhAAKnQAAKnnhHhQngHgqoAAQqnAAnhngg");
	var mask_graphics_437 = new cjs.Graphics().p("EAlKApAQngnhAAqnQAAqnHgnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_438 = new cjs.Graphics().p("EAkEAohQngngAAqnQAAqoHgngQHgngKoAAQKnAAHgHgQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_439 = new cjs.Graphics().p("EAi9AoBQngngAAqnQAAqoHgnhQHhnfKnAAQKoAAHgHfQHhHhAAKoQAAKnnhHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_440 = new cjs.Graphics().p("EAh4AnfQngngAAqnQAAqoHgngQHhnfKnAAQKnAAHhHfQHgHgAAKoQAAKnngHgQnhHhqnAAQqnAAnhnhg");
	var mask_graphics_441 = new cjs.Graphics().p("EAgzAm8QngngAAqnQAAqoHgngQHgnfKoAAQKnAAHgHfQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_442 = new cjs.Graphics().p("EAfuAmYQngnhAAqnQAAqnHgnhQHgnfKoAAQKnAAHgHfQHhHhAAKnQAAKnnhHhQngHgqnAAQqoAAngngg");
	var mask_graphics_443 = new cjs.Graphics().p("EAepAlxQngngAAqnQAAqoHgnhQHhnfKnAAQKnAAHhHfQHgHhAAKoQAAKnngHgQnhHhqnAAQqnAAnhnhg");
	var mask_graphics_444 = new cjs.Graphics().p("EAdkAlJQngngAAqnQAAqoHgngQHhngKnAAQKoAAHgHgQHhHgAAKoQAAKnnhHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_445 = new cjs.Graphics().p("EAcgAkgQngngAAqoQAAqnHgnhQHhnfKnAAQKoAAHgHfQHhHhAAKnQAAKonhHgQngHgqoAAQqnAAnhngg");
	var mask_graphics_446 = new cjs.Graphics().p("EAbcAj1QngngAAqnQAAqoHgnfQHhngKnAAQKoAAHgHgQHhHfAAKoQAAKnnhHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_447 = new cjs.Graphics().p("EAaZAjJQngnhAAqnQAAqnHgngQHhngKnAAQKnAAHhHgQHgHgAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_448 = new cjs.Graphics().p("EAZWAibQngnhAAqnQAAqnHgngQHgngKoAAQKnAAHgHgQHhHgAAKnQAAKnnhHhQngHgqnAAQqoAAngngg");
	var mask_graphics_449 = new cjs.Graphics().p("EAYSAhrQngngAAqoQAAqnHgngQHhngKnAAQKoAAHgHgQHhHgAAKnQAAKonhHgQngHgqoAAQqnAAnhngg");
	var mask_graphics_450 = new cjs.Graphics().p("EAXQAg6QngngAAqoQAAqnHgngQHhngKnAAQKnAAHhHgQHgHgAAKnQAAKongHgQnhHgqnAAQqnAAnhngg");
	var mask_graphics_451 = new cjs.Graphics().p("EAWOAgHQnhngAAqoQAAqnHhngQHgngKoAAQKnAAHgHgQHhHgAAKnQAAKonhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_452 = new cjs.Graphics().p("AVLfSQngngAAqnQAAqoHgnfQHhngKnAAQKnAAHhHgQHgHfAAKoQAAKnngHgQnhHhqnAAQqnAAnhnhg");
	var mask_graphics_453 = new cjs.Graphics().p("AUrfbQngngAAqoQAAqnHgngQHgngKoAAQKnAAHgHgQHhHgAAKnQAAKonhHgQngHgqnAAQqoAAngngg");
	var mask_graphics_454 = new cjs.Graphics().p("AUIfjQngngAAqoQAAqnHgngQHhngKnAAQKoAAHgHgQHgHgAAKnQAAKongHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_455 = new cjs.Graphics().p("ATjfrQngngAAqnQAAqoHgnfQHhngKnAAQKnAAHhHgQHgHfAAKoQAAKnngHgQnhHhqnAAQqnAAnhnhg");
	var mask_graphics_456 = new cjs.Graphics().p("AS8fzQngngAAqnQAAqoHgnfQHgngKoAAQKnAAHgHgQHhHfAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_457 = new cjs.Graphics().p("ASSf8QngnhAAqnQAAqnHgngQHhngKnAAQKoAAHgHgQHgHgAAKnQAAKnngHhQngHgqoAAQqnAAnhngg");
	var mask_graphics_458 = new cjs.Graphics().p("EARmAgEQngngAAqoQAAqnHgngQHhngKnAAQKoAAHgHgQHgHgAAKnQAAKongHgQngHgqoAAQqnAAnhngg");
	var mask_graphics_459 = new cjs.Graphics().p("EAQ4AgMQngngAAqoQAAqnHgngQHhngKnAAQKnAAHhHgQHgHgAAKnQAAKongHgQnhHgqnAAQqnAAnhngg");
	var mask_graphics_460 = new cjs.Graphics().p("EAQIAgUQngngAAqnQAAqoHgngQHgngKoAAQKnAAHgHgQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_461 = new cjs.Graphics().p("EAPVAgcQngngAAqnQAAqoHgnfQHgngKoAAQKnAAHgHgQHhHfAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_462 = new cjs.Graphics().p("EAOfAgkQngngAAqnQAAqoHgnfQHhngKoAAQKnAAHgHgQHhHfAAKoQAAKnnhHgQngHhqnAAQqoAAnhnhg");
	var mask_graphics_463 = new cjs.Graphics().p("EANoAgtQngnhAAqnQAAqnHgngQHhngKnAAQKoAAHgHgQHgHgAAKnQAAKnngHhQngHgqoAAQqnAAnhngg");
	var mask_graphics_464 = new cjs.Graphics().p("EAMvAg1QngnhAAqnQAAqnHgngQHgngKoAAQKnAAHgHgQHhHgAAKnQAAKnnhHhQngHgqnAAQqoAAngngg");
	var mask_graphics_465 = new cjs.Graphics().p("EALzAg9QngngAAqoQAAqnHgngQHgngKoAAQKnAAHgHgQHhHgAAKnQAAKonhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_466 = new cjs.Graphics().p("EAK1AhFQnhngAAqnQAAqoHhnfQHgngKoAAQKnAAHgHgQHhHfAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_467 = new cjs.Graphics().p("EAJ0AhNQngngAAqnQAAqoHgnfQHgngKoAAQKnAAHgHgQHhHfAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_468 = new cjs.Graphics().p("EAIxAhWQngnhAAqnQAAqnHgngQHgngKoAAQKnAAHgHgQHhHgAAKnQAAKnnhHhQngHgqnAAQqoAAngngg");
	var mask_graphics_469 = new cjs.Graphics().p("EAHsAheQngngAAqoQAAqnHgngQHgngKoAAQKnAAHgHgQHhHgAAKnQAAKonhHgQngHgqnAAQqoAAngngg");
	var mask_graphics_470 = new cjs.Graphics().p("EAGkAhmQnfngAAqoQAAqnHfngQHhngKnAAQKoAAHgHgQHgHgAAKnQAAKongHgQngHgqoAAQqnAAnhngg");
	var mask_graphics_471 = new cjs.Graphics().p("EAFbAhuQngngAAqnQAAqoHgngQHgngKoAAQKnAAHgHgQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_472 = new cjs.Graphics().p("EAEOAh2QnfngAAqnQAAqoHfnfQHhnhKoAAQKnAAHgHhQHhHfAAKoQAAKnnhHgQngHhqnAAQqoAAnhnhg");
	var mask_graphics_473 = new cjs.Graphics().p("EADAAh+QnfngAAqnQAAqoHfnfQHhngKnAAQKoAAHgHgQHgHfAAKoQAAKnngHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_474 = new cjs.Graphics().p("EABwAiHQngnhAAqnQAAqnHgngQHgngKoAAQKnAAHgHgQHhHgAAKnQAAKnnhHhQngHgqnAAQqoAAngngg");
	var mask_graphics_475 = new cjs.Graphics().p("EAAcAiPQnfnhAAqnQAAqnHfngQHhngKnAAQKoAAHgHgQHhHgAAKnQAAKnnhHhQngHgqoAAQqnAAnhngg");
	var mask_graphics_476 = new cjs.Graphics().p("EgA4AiXQngngAAqoQAAqnHgngQHgngKnAAQKoAAHgHgQHgHgAAKnQAAKongHgQngHgqoAAQqnAAngngg");
	var mask_graphics_477 = new cjs.Graphics().p("EgCPAifQnhngAAqnQAAqoHhnfQHfngKoAAQKnAAHgHgQHhHfAAKoQAAKnnhHgQngHhqnAAQqoAAnfnhg");
	var mask_graphics_478 = new cjs.Graphics().p("EgDpAinQngngAAqnQAAqoHgnfQHfngKoAAQKnAAHgHgQHhHfAAKoQAAKnnhHgQngHhqnAAQqoAAnfnhg");
	var mask_graphics_479 = new cjs.Graphics().p("EgFGAiwQngnhAAqnQAAqnHgngQHgngKnAAQKoAAHgHgQHhHgAAKnQAAKnnhHhQngHgqoAAQqnAAngngg");
	var mask_graphics_480 = new cjs.Graphics().p("EgGkAi4QngnhAAqnQAAqnHgngQHgngKnAAQKnAAHhHgQHgHgAAKnQAAKnngHhQnhHgqnAAQqnAAngngg");
	var mask_graphics_481 = new cjs.Graphics().p("EgIFAjAQngngAAqoQAAqnHgngQHhngKmAAQKoAAHgHgQHgHgAAKnQAAKongHgQngHgqoAAQqmAAnhngg");
	var mask_graphics_482 = new cjs.Graphics().p("EgJoAjIQngngAAqnQAAqoHgngQHhngKmAAQKnAAHhHgQHgHgAAKoQAAKnngHgQnhHhqnAAQqmAAnhnhg");
	var mask_graphics_483 = new cjs.Graphics().p("EgLNAjQQngngAAqnQAAqoHgnfQHgnhKnAAQKnAAHgHhQHhHfAAKoQAAKnnhHgQngHhqnAAQqnAAngnhg");
	var mask_graphics_484 = new cjs.Graphics().p("EgM1AjYQngngAAqnQAAqoHgnfQHhngKmAAQKnAAHhHgQHgHfAAKoQAAKnngHgQnhHhqnAAQqmAAnhnhg");
	var mask_graphics_485 = new cjs.Graphics().p("EgOfAjhQngnhAAqnQAAqnHgngQHhngKmAAQKnAAHhHgQHgHgAAKnQAAKnngHhQnhHgqnAAQqmAAnhngg");
	var mask_graphics_486 = new cjs.Graphics().p("EgQLAjpQngnhAAqnQAAqnHgngQHgngKnAAQKnAAHgHgQHhHgAAKnQAAKnnhHhQngHgqnAAQqnAAngngg");
	var mask_graphics_487 = new cjs.Graphics().p("EgR6AjxQngngAAqoQAAqnHgngQHhngKmAAQKoAAHgHgQHgHgAAKnQAAKongHgQngHgqoAAQqmAAnhngg");
	var mask_graphics_488 = new cjs.Graphics().p("EgSHAj5QngngAAqnQAAqoHgngQHhngKmAAQKnAAHhHgQHgHgAAKoQAAKnngHgQnhHhqnAAQqmAAnhnhg");
	var mask_graphics_489 = new cjs.Graphics().p("EgSHAkBQngngAAqnQAAqoHgnfQHhngKmAAQKnAAHhHgQHgHfAAKoQAAKnngHgQnhHhqnAAQqmAAnhnhg");
	var mask_graphics_490 = new cjs.Graphics().p("EgSHAkKQngnhAAqnQAAqnHgngQHhngKmAAQKnAAHhHgQHgHgAAKnQAAKnngHhQnhHgqnAAQqmAAnhngg");
	var mask_graphics_491 = new cjs.Graphics().p("EgSHAkSQngngAAqoQAAqnHgnhQHhnfKmAAQKnAAHhHfQHgHhAAKnQAAKongHgQnhHgqnAAQqmAAnhngg");
	var mask_graphics_492 = new cjs.Graphics().p("EgSHAkaQngngAAqoQAAqnHgnhQHhnfKmAAQKnAAHhHfQHgHhAAKnQAAKongHgQnhHgqnAAQqmAAnhngg");
	var mask_graphics_493 = new cjs.Graphics().p("EgSHAlSQngngAAqoQAAqnHgnhQHhnfKmAAQKnAAHhHfQHgHhAAKnQAAKongHgQnhHgqnAAQqmAAnhngg");
	var mask_graphics_494 = new cjs.Graphics().p("EgSHAl4QngngAAqoQAAqnHgnhQHhnfKmAAQKnAAHhHfQHgHhAAKnQAAKongHgQnhHgqnAAQqmAAnhngg");
	var mask_graphics_495 = new cjs.Graphics().p("EgQZAmWQngngAAqoQAAqnHgnhQHhnfKmAAQKoAAHgHfQHgHhAAKnQAAKongHgQngHgqoAAQqmAAnhngg");
	var mask_graphics_496 = new cjs.Graphics().p("EgOIAmvQngnhAAqnQAAqnHgnhQHgnfKnAAQKnAAHgHfQHhHhAAKnQAAKnnhHhQngHgqnAAQqnAAngngg");
	var mask_graphics_497 = new cjs.Graphics().p("EgMKAnEQngngAAqoQAAqnHgnhQHhnfKmAAQKoAAHgHfQHgHhAAKnQAAKongHgQngHgqoAAQqmAAnhngg");
	var mask_graphics_498 = new cjs.Graphics().p("EgKZAnWQngngAAqnQAAqoHgnhQHgnfKnAAQKnAAHgHfQHhHhAAKoQAAKnnhHgQngHhqnAAQqnAAngnhg");
	var mask_graphics_499 = new cjs.Graphics().p("EgI0AnmQngngAAqoQAAqnHgnhQHhnfKmAAQKoAAHgHfQHhHhAAKnQAAKonhHgQngHgqoAAQqmAAnhngg");
	var mask_graphics_500 = new cjs.Graphics().p("EgHXAn0QngnhAAqnQAAqnHgnhQHgnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAngngg");
	var mask_graphics_501 = new cjs.Graphics().p("EgGCAoAQngngAAqoQAAqnHgnhQHgnfKnAAQKnAAHhHfQHgHhAAKnQAAKongHgQnhHhqnAAQqnAAngnhg");
	var mask_graphics_502 = new cjs.Graphics().p("EgE0AoLQngngAAqoQAAqnHgnhQHgnfKnAAQKnAAHhHfQHgHhAAKnQAAKongHgQnhHgqnAAQqnAAngngg");
	var mask_graphics_503 = new cjs.Graphics().p("EgDsAoUQngngAAqoQAAqnHgnhQHgnfKnAAQKnAAHhHfQHgHhAAKnQAAKongHgQnhHgqnAAQqnAAngngg");
	var mask_graphics_504 = new cjs.Graphics().p("EgCqAocQngngAAqoQAAqnHgnhQHgnfKnAAQKoAAHgHfQHgHhAAKnQAAKongHgQngHgqoAAQqnAAngngg");
	var mask_graphics_505 = new cjs.Graphics().p("EgBtAoiQngngAAqnQAAqoHgngQHgngKoAAQKnAAHgHgQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_506 = new cjs.Graphics().p("EgA1AonQngngAAqnQAAqoHgngQHgnfKoAAQKnAAHgHfQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_507 = new cjs.Graphics().p("EgABAorQngngAAqoQAAqnHgnhQHfnfKoAAQKnAAHgHfQHhHhAAKnQAAKonhHgQngHgqnAAQqoAAnfngg");
	var mask_graphics_508 = new cjs.Graphics().p("EAAsAotQnfngAAqoQAAqnHfnhQHhnfKnAAQKoAAHgHfQHgHhAAKnQAAKongHgQngHhqoAAQqnAAnhnhg");
	var mask_graphics_509 = new cjs.Graphics().p("EABWAotQnfngAAqnQAAqoHfngQHgnfKoAAQKnAAHgHfQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_510 = new cjs.Graphics().p("EAB5AosQnfnhAAqnQAAqnHfnhQHhnfKnAAQKoAAHgHfQHgHhAAKnQAAKnngHhQngHgqoAAQqnAAnhngg");
	var mask_graphics_511 = new cjs.Graphics().p("EACWAonQnfngAAqnQAAqoHfngQHgnfKoAAQKnAAHgHfQHhHgAAKoQAAKnnhHgQngHhqnAAQqoAAngnhg");
	var mask_graphics_512 = new cjs.Graphics().p("EACpAofQnfnhAAqnQAAqnHfnhQHhnfKnAAQKoAAHgHfQHgHhAAKnQAAKnngHhQngHgqoAAQqnAAnhngg");
	var mask_graphics_513 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_514 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_515 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_516 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_517 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_518 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_519 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_520 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_521 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_522 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_523 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_524 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_525 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_526 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_527 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_528 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_529 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_530 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_531 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_532 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_533 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_534 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_535 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_536 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_537 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_538 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_539 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_540 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_541 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_542 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_543 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_544 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_545 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_546 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_547 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_548 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_549 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_550 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_551 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_552 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_553 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_554 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");
	var mask_graphics_555 = new cjs.Graphics().p("EACsAoOQnfnhAAqnQAAqnHfnhQHhnfKnAAQKnAAHhHfQHgHhAAKnQAAKnngHhQnhHgqnAAQqnAAnhngg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(398).to({graphics:mask_graphics_398,x:702.0303,y:280.2553}).wait(1).to({graphics:mask_graphics_399,x:697.5553,y:280.3553}).wait(1).to({graphics:mask_graphics_400,x:693.0553,y:280.5553}).wait(1).to({graphics:mask_graphics_401,x:688.5803,y:280.8303}).wait(1).to({graphics:mask_graphics_402,x:684.1303,y:281.2053}).wait(1).to({graphics:mask_graphics_403,x:679.6803,y:281.6303}).wait(1).to({graphics:mask_graphics_404,x:675.2553,y:282.1553}).wait(1).to({graphics:mask_graphics_405,x:670.8303,y:282.7303}).wait(1).to({graphics:mask_graphics_406,x:666.4303,y:283.3803}).wait(1).to({graphics:mask_graphics_407,x:662.0553,y:284.1303}).wait(1).to({graphics:mask_graphics_408,x:657.6803,y:284.9553}).wait(1).to({graphics:mask_graphics_409,x:653.3053,y:285.8553}).wait(1).to({graphics:mask_graphics_410,x:648.9803,y:286.8303}).wait(1).to({graphics:mask_graphics_411,x:644.6303,y:287.9053}).wait(1).to({graphics:mask_graphics_412,x:640.2803,y:289.0303}).wait(1).to({graphics:mask_graphics_413,x:635.9803,y:290.2303}).wait(1).to({graphics:mask_graphics_414,x:631.6803,y:291.5303}).wait(1).to({graphics:mask_graphics_415,x:627.4053,y:292.9053}).wait(1).to({graphics:mask_graphics_416,x:623.1303,y:294.3553}).wait(1).to({graphics:mask_graphics_417,x:618.8803,y:295.8803}).wait(1).to({graphics:mask_graphics_418,x:614.6303,y:297.4803}).wait(1).to({graphics:mask_graphics_419,x:610.4053,y:299.1553}).wait(1).to({graphics:mask_graphics_420,x:606.1803,y:300.9303}).wait(1).to({graphics:mask_graphics_421,x:601.9553,y:302.7553}).wait(1).to({graphics:mask_graphics_422,x:597.7553,y:304.6803}).wait(1).to({graphics:mask_graphics_423,x:593.5803,y:306.6803}).wait(1).to({graphics:mask_graphics_424,x:589.4303,y:308.7553}).wait(1).to({graphics:mask_graphics_425,x:585.2553,y:310.9053}).wait(1).to({graphics:mask_graphics_426,x:581.1053,y:313.1553}).wait(1).to({graphics:mask_graphics_427,x:576.9553,y:315.4303}).wait(1).to({graphics:mask_graphics_428,x:572.8553,y:317.8553}).wait(1).to({graphics:mask_graphics_429,x:568.7553,y:320.3053}).wait(1).to({graphics:mask_graphics_430,x:564.6303,y:322.8553}).wait(1).to({graphics:mask_graphics_431,x:560.5553,y:325.4803}).wait(1).to({graphics:mask_graphics_432,x:553.3553,y:323.3303}).wait(1).to({graphics:mask_graphics_433,x:546.1803,y:321.0803}).wait(1).to({graphics:mask_graphics_434,x:539.0303,y:318.6553}).wait(1).to({graphics:mask_graphics_435,x:531.9303,y:316.0553}).wait(1).to({graphics:mask_graphics_436,x:524.8553,y:313.3053}).wait(1).to({graphics:mask_graphics_437,x:517.8053,y:310.4053}).wait(1).to({graphics:mask_graphics_438,x:510.7803,y:307.3553}).wait(1).to({graphics:mask_graphics_439,x:503.7553,y:304.1553}).wait(1).to({graphics:mask_graphics_440,x:496.8053,y:300.7803}).wait(1).to({graphics:mask_graphics_441,x:489.8803,y:297.2803}).wait(1).to({graphics:mask_graphics_442,x:482.9803,y:293.6053}).wait(1).to({graphics:mask_graphics_443,x:476.1053,y:289.7553}).wait(1).to({graphics:mask_graphics_444,x:469.2553,y:285.7553}).wait(1).to({graphics:mask_graphics_445,x:462.4553,y:281.6303}).wait(1).to({graphics:mask_graphics_446,x:455.6553,y:277.3803}).wait(1).to({graphics:mask_graphics_447,x:448.9053,y:272.9053}).wait(1).to({graphics:mask_graphics_448,x:442.1803,y:268.3053}).wait(1).to({graphics:mask_graphics_449,x:435.4553,y:263.5303}).wait(1).to({graphics:mask_graphics_450,x:428.8053,y:258.6303}).wait(1).to({graphics:mask_graphics_451,x:422.1553,y:253.5553}).wait(1).to({graphics:mask_graphics_452,x:415.5053,y:248.2803}).wait(1).to({graphics:mask_graphics_453,x:412.2803,y:249.1303}).wait(1).to({graphics:mask_graphics_454,x:408.8303,y:249.9553}).wait(1).to({graphics:mask_graphics_455,x:405.1053,y:250.7803}).wait(1).to({graphics:mask_graphics_456,x:401.1803,y:251.5803}).wait(1).to({graphics:mask_graphics_457,x:397.0303,y:252.4053}).wait(1).to({graphics:mask_graphics_458,x:392.6303,y:253.2303}).wait(1).to({graphics:mask_graphics_459,x:388.0053,y:254.0303}).wait(1).to({graphics:mask_graphics_460,x:383.1803,y:254.8553}).wait(1).to({graphics:mask_graphics_461,x:378.0803,y:255.6803}).wait(1).to({graphics:mask_graphics_462,x:372.7553,y:256.4803}).wait(1).to({graphics:mask_graphics_463,x:367.2303,y:257.3053}).wait(1).to({graphics:mask_graphics_464,x:361.4803,y:258.1053}).wait(1).to({graphics:mask_graphics_465,x:355.4803,y:258.9553}).wait(1).to({graphics:mask_graphics_466,x:349.2553,y:259.7803}).wait(1).to({graphics:mask_graphics_467,x:342.7803,y:260.5803}).wait(1).to({graphics:mask_graphics_468,x:336.0803,y:261.4053}).wait(1).to({graphics:mask_graphics_469,x:329.1803,y:262.2303}).wait(1).to({graphics:mask_graphics_470,x:322.0303,y:263.0303}).wait(1).to({graphics:mask_graphics_471,x:314.6553,y:263.8553}).wait(1).to({graphics:mask_graphics_472,x:307.0553,y:264.6553}).wait(1).to({graphics:mask_graphics_473,x:299.2303,y:265.4803}).wait(1).to({graphics:mask_graphics_474,x:291.1553,y:266.3053}).wait(1).to({graphics:mask_graphics_475,x:282.8553,y:267.1053}).wait(1).to({graphics:mask_graphics_476,x:274.3303,y:267.9303}).wait(1).to({graphics:mask_graphics_477,x:265.5553,y:268.7803}).wait(1).to({graphics:mask_graphics_478,x:256.5803,y:269.5803}).wait(1).to({graphics:mask_graphics_479,x:247.3553,y:270.4053}).wait(1).to({graphics:mask_graphics_480,x:237.9053,y:271.2053}).wait(1).to({graphics:mask_graphics_481,x:228.2303,y:272.0303}).wait(1).to({graphics:mask_graphics_482,x:218.3053,y:272.8553}).wait(1).to({graphics:mask_graphics_483,x:208.1803,y:273.6553}).wait(1).to({graphics:mask_graphics_484,x:197.8053,y:274.4803}).wait(1).to({graphics:mask_graphics_485,x:187.2053,y:275.3053}).wait(1).to({graphics:mask_graphics_486,x:176.3803,y:276.1053}).wait(1).to({graphics:mask_graphics_487,x:165.3303,y:276.9303}).wait(1).to({graphics:mask_graphics_488,x:144.0553,y:277.7553}).wait(1).to({graphics:mask_graphics_489,x:121.0053,y:278.5803}).wait(1).to({graphics:mask_graphics_490,x:97.5053,y:279.4053}).wait(1).to({graphics:mask_graphics_491,x:73.5053,y:280.2303}).wait(1).to({graphics:mask_graphics_492,x:49.0553,y:281.0303}).wait(1).to({graphics:mask_graphics_493,x:109.6053,y:286.6303}).wait(1).to({graphics:mask_graphics_494,x:152.0553,y:290.4303}).wait(1).to({graphics:mask_graphics_495,x:175.0303,y:293.4303}).wait(1).to({graphics:mask_graphics_496,x:189.4803,y:295.9053}).wait(1).to({graphics:mask_graphics_497,x:202.1303,y:298.0303}).wait(1).to({graphics:mask_graphics_498,x:213.3803,y:299.8553}).wait(1).to({graphics:mask_graphics_499,x:223.5553,y:301.4303}).wait(1).to({graphics:mask_graphics_500,x:232.8053,y:302.8053}).wait(1).to({graphics:mask_graphics_501,x:241.3053,y:304.0553}).wait(1).to({graphics:mask_graphics_502,x:249.1053,y:305.1303}).wait(1).to({graphics:mask_graphics_503,x:256.3053,y:306.0303}).wait(1).to({graphics:mask_graphics_504,x:262.9303,y:306.8303}).wait(1).to({graphics:mask_graphics_505,x:269.0553,y:307.4553}).wait(1).to({graphics:mask_graphics_506,x:274.6553,y:307.9803}).wait(1).to({graphics:mask_graphics_507,x:279.7803,y:308.3303}).wait(1).to({graphics:mask_graphics_508,x:284.4303,y:308.5553}).wait(1).to({graphics:mask_graphics_509,x:288.5803,y:308.5803}).wait(1).to({graphics:mask_graphics_510,x:292.1303,y:308.4053}).wait(1).to({graphics:mask_graphics_511,x:294.9803,y:307.9803}).wait(1).to({graphics:mask_graphics_512,x:296.9303,y:307.1053}).wait(1).to({graphics:mask_graphics_513,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_514,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_515,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_516,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_517,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_518,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_519,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_520,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_521,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_522,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_523,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_524,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_525,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_526,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_527,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_528,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_529,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_530,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_531,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_532,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_533,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_534,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_535,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_536,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_537,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_538,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_539,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_540,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_541,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_542,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_543,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_544,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_545,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_546,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_547,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_548,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_549,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_550,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_551,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_552,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_553,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_554,x:297.2053,y:305.4053}).wait(1).to({graphics:mask_graphics_555,x:297.2053,y:305.4053}).wait(272));

	// sea_top_copy_copy_obj_
	this.sea_top_copy_copy = new lib.Scene_1_sea_top_copy_copy();
	this.sea_top_copy_copy.name = "sea_top_copy_copy";
	this.sea_top_copy_copy.depth = 0;
	this.sea_top_copy_copy.isAttachedToCamera = 0
	this.sea_top_copy_copy.isAttachedToMask = 0
	this.sea_top_copy_copy.layerDepth = 0
	this.sea_top_copy_copy.layerIndex = 28
	this.sea_top_copy_copy.maskLayerName = 0

	var maskedShapeInstanceList = [this.sea_top_copy_copy];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.sea_top_copy_copy).wait(398).to({regX:-17.9,regY:-10,scaleX:0.9727,scaleY:0.9727},0).wait(157).to({_off:true},1).wait(271));

	// fish_obj_
	this.fish_1 = new lib.Scene_1_fish_1();
	this.fish_1.name = "fish_1";
	this.fish_1.depth = 0;
	this.fish_1.isAttachedToCamera = 0
	this.fish_1.isAttachedToMask = 0
	this.fish_1.layerDepth = 0
	this.fish_1.layerIndex = 29
	this.fish_1.maskLayerName = 0

	var maskedShapeInstanceList = [this.fish_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.fish_1).wait(398).to({regX:-17.9,regY:-10,scaleX:0.9727,scaleY:0.9727},0).wait(57).to({regX:358,regY:511.1,scaleX:1,scaleY:1,x:375.85,y:521.1},0).wait(100).to({_off:true},1).wait(271));

	// back_background_obj_
	this.back_background = new lib.Scene_1_back_background();
	this.back_background.name = "back_background";
	this.back_background.depth = 0;
	this.back_background.isAttachedToCamera = 0
	this.back_background.isAttachedToMask = 0
	this.back_background.layerDepth = 0
	this.back_background.layerIndex = 30
	this.back_background.maskLayerName = 0

	var maskedShapeInstanceList = [this.back_background];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.back_background).wait(398).to({regX:-17.9,regY:-10,scaleX:0.9727,scaleY:0.9727},0).to({_off:true},158).wait(271));

	// sea_top_copy_obj_
	this.sea_top_copy = new lib.Scene_1_sea_top_copy();
	this.sea_top_copy.name = "sea_top_copy";
	this.sea_top_copy.depth = 0;
	this.sea_top_copy.isAttachedToCamera = 0
	this.sea_top_copy.isAttachedToMask = 0
	this.sea_top_copy.layerDepth = 0
	this.sea_top_copy.layerIndex = 31
	this.sea_top_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sea_top_copy).wait(556).to({regX:-17.9,regY:-10.2,scaleX:0.9727,scaleY:0.9727,y:0.05},0).wait(1).to({regX:-16.4,regY:-8.6,scaleX:0.9787,scaleY:0.9787,y:0},0).wait(1).to({regX:-15.1,regY:-7,scaleX:0.9846,scaleY:0.9846},0).wait(1).to({regX:-13.8,regY:-5.5,scaleX:0.9906,scaleY:0.9906,x:-0.05},0).wait(1).to({regX:-12.4,regY:-4,scaleX:0.9967,scaleY:0.9967,x:0,y:-0.05},0).wait(1).to({regX:-11,regY:-2.4,scaleX:1.0028,scaleY:1.0028,y:0},0).wait(1).to({regX:-9.7,regY:-0.9,scaleX:1.0091,scaleY:1.0091,x:-0.05},0).wait(1).to({regX:-8.2,regY:0.7,scaleX:1.0154,scaleY:1.0154,x:0.05,y:0.05},0).wait(1).to({regX:-7,regY:2.1,scaleX:1.0218,scaleY:1.0218,x:-0.05,y:0},0).wait(1).to({regX:-5.6,regY:3.8,scaleX:1.0282,scaleY:1.0282,x:0,y:0.05},0).wait(1).to({regX:-4.2,regY:5.2,scaleX:1.0348,scaleY:1.0348,y:-0.05},0).wait(1).to({regX:-2.9,regY:6.8,scaleX:1.0415,scaleY:1.0415,y:0.05},0).wait(1).to({regX:-1.6,regY:8.3,scaleX:1.0482,scaleY:1.0482,x:-0.1,y:-0.05},0).wait(1).to({regX:-0.2,regY:9.8,scaleX:1.055,scaleY:1.055,x:0,y:0},0).wait(1).to({regX:1.2,regY:11.5,scaleX:1.0619,scaleY:1.0619,x:0.05},0).wait(1).to({regX:2.5,regY:13,scaleX:1.0689,scaleY:1.0689,x:0},0).wait(1).to({regX:3.8,regY:14.6,scaleX:1.076,scaleY:1.076,x:0.05,y:0.05},0).wait(1).to({regX:5.2,regY:16.1,scaleX:1.0831,scaleY:1.0831},0).wait(1).to({regX:6.5,regY:17.6,scaleX:1.0904,scaleY:1.0904,x:0,y:0},0).wait(1).to({regX:7.9,regY:19.2,scaleX:1.0978,scaleY:1.0978,x:0.05,y:0.05},0).wait(1).to({regX:9.2,regY:20.8,scaleX:1.1053,scaleY:1.1053,x:0},0).wait(1).to({regX:10.6,regY:22.3,scaleX:1.1128,scaleY:1.1128,x:0.05,y:0},0).wait(1).to({regX:12,regY:23.9,scaleX:1.1205,scaleY:1.1205,y:0.05},0).wait(1).to({regX:13.3,regY:25.4,scaleX:1.1283,scaleY:1.1283,x:0,y:-0.05},0).wait(1).to({regX:14.6,regY:26.9,scaleX:1.1362,scaleY:1.1362},0).wait(1).to({regX:16,regY:28.5,scaleX:1.1442,scaleY:1.1442,y:0},0).wait(1).to({regX:17.3,regY:30,scaleX:1.1523,scaleY:1.1523},0).wait(1).to({regX:18.7,regY:31.6,scaleX:1.1606,scaleY:1.1606,y:-0.05},0).wait(1).to({regX:20.1,regY:33.2,scaleX:1.1689,scaleY:1.1689,x:0.05,y:0},0).wait(1).to({regX:21.4,regY:34.7,scaleX:1.1774,scaleY:1.1774},0).wait(1).to({regX:22.8,regY:36.2,scaleX:1.186,scaleY:1.186},0).wait(1).to({regX:24.2,regY:37.8,scaleX:1.1947,scaleY:1.1947},0).wait(1).to({regX:25.4,regY:39.4,scaleX:1.2036,scaleY:1.2036,x:-0.1,y:0.05},0).wait(1).to({regX:26.8,regY:41,scaleX:1.2126,scaleY:1.2126,x:0.05},0).wait(1).to({regX:28.2,regY:42.5,scaleX:1.2217,scaleY:1.2217,x:0},0).wait(1).to({regX:29.6,regY:44.1,scaleX:1.231,scaleY:1.231,x:0.05,y:0.1},0).wait(1).to({regX:30.9,regY:45.6,scaleX:1.2404,scaleY:1.2404,x:0,y:0.05},0).wait(1).to({regX:32.2,regY:47.1,scaleX:1.2499,scaleY:1.2499,x:-0.05,y:0},0).wait(1).to({regX:33.6,regY:48.6,scaleX:1.2596,scaleY:1.2596,x:0,y:-0.05},0).wait(1).to({regX:35,regY:50.2,scaleX:1.2695,scaleY:1.2695,x:0.05,y:0.05},0).wait(1).to({regX:36.2,regY:51.8,scaleX:1.2795,scaleY:1.2795,x:-0.1},0).wait(1).to({regX:37.6,regY:53.2,scaleX:1.2897,scaleY:1.2897,x:-0.05,y:-0.1},0).wait(1).to({regX:39.1,regY:54.9,scaleX:1.3,scaleY:1.3,x:0.1,y:0.05},0).wait(1).to({regX:40.4,regY:56.4,scaleX:1.3105,scaleY:1.3105,x:0.05,y:0},0).wait(1).to({regX:41.8,regY:58,scaleX:1.3212,scaleY:1.3212,y:0.1},0).wait(1).to({regX:43.1,regY:59.6,scaleX:1.332,scaleY:1.332,x:0},0).wait(1).to({regX:44.4,regY:61.1,scaleX:1.343,scaleY:1.343,y:0},0).wait(1).to({regX:45.8,regY:62.6,scaleX:1.3542,scaleY:1.3542},0).wait(1).to({regX:47.1,regY:64.2,scaleX:1.3656,scaleY:1.3656,x:-0.05,y:0.05},0).wait(1).to({regX:48.6,regY:65.7,scaleX:1.3772,scaleY:1.3772,x:0.1},0).wait(1).to({regX:49.8,regY:67.2,scaleX:1.389,scaleY:1.389,x:-0.05,y:-0.05},0).wait(1).to({regX:51.2,regY:68.8,scaleX:1.401,scaleY:1.401,y:0.05},0).wait(1).to({regX:52.6,regY:70.4,scaleX:1.4132,scaleY:1.4132,x:0.05,y:0.1},0).wait(1).to({regX:54,regY:72,scaleX:1.4256,scaleY:1.4256,x:0.1},0).wait(1).to({regX:55.2,regY:73.4,scaleX:1.4382,scaleY:1.4382,x:-0.05,y:-0.05},0).wait(1).to({regX:56.6,regY:75,scaleX:1.4511,scaleY:1.4511,y:0.05},0).wait(1).to({regX:58,regY:76.5,scaleX:1.4642,scaleY:1.4642,y:-0.05},0).wait(1).to({regX:59.3,regY:78,scaleX:1.4775,scaleY:1.4775,y:-0.1},0).wait(1).to({regX:60.7,regY:79.7,scaleX:1.4911,scaleY:1.4911,x:0,y:0.1},0).wait(1).to({regX:62.1,regY:81.2,scaleX:1.5049,scaleY:1.5049,x:0.1,y:0.05},0).wait(1).to({regX:63.5,regY:82.7,scaleX:1.519,scaleY:1.519,y:-0.05},0).wait(1).to({regX:64.8,regY:84.3,scaleX:1.5334,scaleY:1.5334,y:0},0).wait(1).to({regX:66.1,regY:85.8,scaleX:1.548,scaleY:1.548,x:-0.05,y:-0.05},0).wait(1).to({regX:67.5,regY:87.4,scaleX:1.5629,scaleY:1.5629,x:0.05,y:0.05},0).wait(1).to({regX:68.9,regY:89,scaleX:1.5781,scaleY:1.5781,x:0.1,y:0.1},0).wait(1).to({regX:70.2,regY:90.5,scaleX:1.5936,scaleY:1.5936,x:0,y:0},0).wait(1).to({regX:71.5,regY:92.1,scaleX:1.6093,scaleY:1.6093,x:-0.05},0).wait(1).to({regX:72.9,regY:93.5,scaleX:1.6255,scaleY:1.6255,x:0.1,y:-0.1},0).wait(1).to({regX:74.2,regY:95.2,scaleX:1.6419,scaleY:1.6419,x:-0.05,y:0.1},0).wait(1).to({regX:75.7,regY:96.7,scaleX:1.6587,scaleY:1.6587,x:0.1,y:0.05},0).wait(1).to({regX:77,regY:98.2,scaleX:1.6758,scaleY:1.6758,y:-0.05},0).wait(1).to({regX:78.3,regY:99.9,scaleX:1.6933,scaleY:1.6933,x:0.05,y:0.1},0).wait(1).to({regX:79.6,regY:101.4,scaleX:1.7112,scaleY:1.7112,x:-0.05},0).wait(1).to({regX:81,regY:102.9,scaleX:1.7294,scaleY:1.7294,y:0},0).wait(1).to({regX:82.3,regY:104.5,scaleX:1.748,scaleY:1.748,y:0.1},0).wait(1).to({regX:83.7,regY:106,scaleX:1.767,scaleY:1.767,x:0,y:0},0).wait(1).to({regX:85.1,regY:107.5,scaleX:1.7865,scaleY:1.7865,x:0.05,y:-0.05},0).wait(1).to({regX:86.5,regY:109.1,scaleX:1.8064,scaleY:1.8064,x:0,y:0.05},0).wait(1).to({regX:87.8,regY:110.7,scaleX:1.8267,scaleY:1.8267,x:0.05,y:0.1},0).wait(1).to({regX:89.2,regY:112.2,scaleX:1.8475,scaleY:1.8475,x:0.1,y:-0.05},0).wait(1).to({regX:90.5,regY:113.8,scaleX:1.8688,scaleY:1.8688,x:0,y:0.1},0).wait(1).to({regX:91.9,regY:115.3,scaleX:1.8905,scaleY:1.8905,x:0.15,y:0.05},0).wait(1).to({regX:93.2,regY:116.8,scaleX:1.9128,scaleY:1.9128,x:0,y:0},0).wait(1).to({regX:94.6,regY:118.4,scaleX:1.9356,scaleY:1.9356,y:0.1},0).wait(1).to({regX:95.9,regY:120,scaleX:1.959,scaleY:1.959,y:0.05},0).wait(1).to({regX:97.3,regY:121.5,scaleX:1.9829,scaleY:1.9829,x:0.05},0).wait(1).to({regX:98.7,regY:123,scaleX:2.0075,scaleY:2.0075,x:0.15,y:-0.1},0).wait(1).to({regX:100,regY:124.6,scaleX:2.0326,scaleY:2.0326,x:0,y:0},0).wait(1).to({regX:101.3,regY:126.2,scaleX:2.0583,scaleY:2.0583,y:0.1},0).wait(1).to({regX:102.7,regY:127.7,scaleX:2.0848,scaleY:2.0848,x:0.1,y:0.05},0).wait(1).to({regX:104.1,regY:129.2,scaleX:2.1119,scaleY:2.1119,x:0,y:-0.1},0).wait(1).to({regX:105.4,regY:130.8,scaleX:2.1397,scaleY:2.1397,x:0.05,y:0.05},0).wait(1).to({regX:106.8,regY:132.4,scaleX:2.1683,scaleY:2.1683,x:0.15},0).wait(1).to({regX:108.1,regY:133.9,scaleX:2.1977,scaleY:2.1977,x:0,y:0},0).wait(1).to({regX:109.5,regY:135.4,scaleX:2.2279,scaleY:2.2279,y:-0.1},0).wait(1).to({regX:110.8,regY:137,scaleX:2.2588,scaleY:2.2588,x:0.05,y:0.15},0).wait(1).to({regX:112.2,regY:138.5,scaleX:2.2907,scaleY:2.2907,x:0.1,y:0},0).wait(1).to({regX:113.5,regY:140.2,scaleX:2.3235,scaleY:2.3235,x:-0.1,y:0.15},0).wait(1).to({regX:114.9,regY:141.7,scaleX:2.3573,scaleY:2.3573,x:0},0).wait(1).to({regX:116.2,regY:143.2,scaleX:2.392,scaleY:2.392,x:-0.1,y:0.05},0).wait(1).to({regX:117.6,regY:144.7,scaleX:2.4278,scaleY:2.4278,x:0,y:0},0).wait(1).to({regX:119,regY:146.3,scaleX:2.4647,scaleY:2.4647,x:0.15,y:0.05},0).wait(1).to({regX:120.3,regY:147.8,scaleX:2.5027,scaleY:2.5027,x:0,y:-0.1},0).wait(1).to({regX:121.7,regY:149.4,scaleX:2.5418,scaleY:2.5418,x:0.15,y:0.05},0).wait(1).to({regX:123,regY:151,scaleX:2.5823,scaleY:2.5823,x:-0.15,y:0.2},0).wait(1).to({regX:124.4,regY:152.6,scaleX:2.6241,scaleY:2.6241,x:0.15,y:0.15},0).wait(1).to({regX:125.7,regY:154.1,scaleX:2.6672,scaleY:2.6672,x:0},0).wait(1).to({regX:127.1,regY:155.6,scaleX:2.7117,scaleY:2.7117,y:0.05},0).wait(1).to({regX:128.4,regY:157.1,scaleX:2.7578,scaleY:2.7578,x:0.05},0).wait(1).to({regX:129.8,regY:158.7,scaleX:2.8055,scaleY:2.8055,x:0.15,y:0.2},0).wait(1).to({regX:131.2,regY:160.3,scaleX:2.8548,scaleY:2.8548,y:0.05},0).wait(1).to({regX:132.6,regY:161.8,scaleX:2.9059,scaleY:2.9059,y:0},0).wait(1).to({regX:133.8,regY:163.3,scaleX:2.9589,scaleY:2.9589,x:-0.1,y:-0.1},0).wait(1).to({regX:135.2,regY:164.8,scaleX:3.0138,scaleY:3.0138,x:0},0).wait(1).to({regX:136.6,regY:166.5,scaleX:3.0709,scaleY:3.0709,x:0.2,y:0.15},0).wait(1).to({regX:137.9,regY:168,scaleX:3.13,scaleY:3.13,x:0,y:0.05},0).wait(1).to({regX:139.2,regY:169.6,scaleX:3.1916,scaleY:3.1916,x:-0.15,y:0.2},0).wait(1).to({regX:140.7,regY:171.1,scaleX:3.2556,scaleY:3.2556,x:0.15,y:0.05},0).wait(1).to({regX:142,regY:172.6,scaleX:3.3223,scaleY:3.3223,x:0},0).wait(1).to({regX:143.3,regY:174.2,scaleX:3.3916,scaleY:3.3916,x:-0.15,y:0},0).wait(1).to({regX:144.7,regY:175.8,scaleX:3.464,scaleY:3.464,x:0.05,y:0.15},0).wait(1).to({regX:146.1,regY:177.2,scaleX:3.5396,scaleY:3.5396,x:0.2,y:-0.15},0).wait(1).to({regX:147.3,regY:178.8,scaleX:3.6186,scaleY:3.6186,x:-0.15},0).wait(1).to({regX:148.7,regY:180.4,scaleX:3.7009,scaleY:3.7009,x:0.05,y:0.05},0).to({_off:true},1).wait(147));

	// fish_obj_
	this.fish_2 = new lib.Scene_1_fish_2();
	this.fish_2.name = "fish_2";
	this.fish_2.depth = 0;
	this.fish_2.isAttachedToCamera = 0
	this.fish_2.isAttachedToMask = 0
	this.fish_2.layerDepth = 0
	this.fish_2.layerIndex = 32
	this.fish_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fish_2).wait(556).to({regX:-17.9,regY:-10.2,scaleX:0.9727,scaleY:0.9727,y:0.05},0).wait(1).to({regX:352.3,regY:434.3,scaleX:1,scaleY:1,x:370.15,y:444.5},0).wait(122).to({_off:true},1).wait(147));

	// fishing_obj_
	this.fishing = new lib.Scene_1_fishing();
	this.fishing.name = "fishing";
	this.fishing.depth = 0;
	this.fishing.isAttachedToCamera = 0
	this.fishing.isAttachedToMask = 0
	this.fishing.layerDepth = 0
	this.fishing.layerIndex = 33
	this.fishing.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fishing).wait(556).to({regX:-17.9,regY:-10.2,scaleX:0.9727,scaleY:0.9727,y:0.05},0).wait(1).to({regX:134.6,regY:11,scaleX:1,scaleY:1,x:152.45,y:21.2},0).wait(122).to({_off:true},1).wait(147));

	// background_back_obj_
	this.background_back_1 = new lib.Scene_1_background_back_1();
	this.background_back_1.name = "background_back_1";
	this.background_back_1.depth = 0;
	this.background_back_1.isAttachedToCamera = 0
	this.background_back_1.isAttachedToMask = 0
	this.background_back_1.layerDepth = 0
	this.background_back_1.layerIndex = 34
	this.background_back_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background_back_1).wait(556).to({regX:-17.9,regY:-10.2,scaleX:0.9727,scaleY:0.9727,y:0.05},0).to({_off:true},124).wait(147));

	// eye_obj_
	this.eye = new lib.Scene_1_eye();
	this.eye.name = "eye";
	this.eye.depth = 0;
	this.eye.isAttachedToCamera = 0
	this.eye.isAttachedToMask = 0
	this.eye.layerDepth = 0
	this.eye.layerIndex = 35
	this.eye.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.eye).wait(680).to({regX:-44.8,regY:13.2,scaleX:0.9463,scaleY:0.9463,x:-0.05,y:-0.05},0).to({_off:true},32).wait(115));

	// dots_obj_
	this.dots = new lib.Scene_1_dots();
	this.dots.name = "dots";
	this.dots.depth = 0;
	this.dots.isAttachedToCamera = 0
	this.dots.isAttachedToMask = 0
	this.dots.layerDepth = 0
	this.dots.layerIndex = 36
	this.dots.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.dots).wait(680).to({regX:-44.8,regY:13.2,scaleX:0.9463,scaleY:0.9463,x:-0.05,y:-0.05},0).to({_off:true},32).wait(115));

	// bady_obj_
	this.bady = new lib.Scene_1_bady();
	this.bady.name = "bady";
	this.bady.depth = 0;
	this.bady.isAttachedToCamera = 0
	this.bady.isAttachedToMask = 0
	this.bady.layerDepth = 0
	this.bady.layerIndex = 37
	this.bady.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.bady).wait(680).to({regX:-44.8,regY:13.2,scaleX:0.9463,scaleY:0.9463,x:-0.05,y:-0.05},0).to({_off:true},32).wait(115));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 38
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(712).to({regX:-44.8,regY:13.2,scaleX:0.9463,scaleY:0.9463,x:-0.05,y:-0.05},0).wait(37).to({_off:true},76).wait(2));

	// play_again_obj_
	this.play_again = new lib.Scene_1_play_again();
	this.play_again.name = "play_again";
	this.play_again.depth = 0;
	this.play_again.isAttachedToCamera = 0
	this.play_again.isAttachedToMask = 0
	this.play_again.layerDepth = 0
	this.play_again.layerIndex = 39
	this.play_again.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.play_again).wait(824).to({regX:-44.8,regY:13.2,scaleX:0.9463,scaleY:0.9463,x:-0.05,y:-0.05},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-462.2,-305.7,3153.2999999999997,2074.5);
// library properties:
lib.properties = {
	id: 'C06FB0D8CC0C924AAF4C015F2FB5323B',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_13.png?1617861235178", id:"CachedBmp_13"},
		{src:"images/CachedBmp_12.png?1617861235178", id:"CachedBmp_12"},
		{src:"images/CachedBmp_11.png?1617861235178", id:"CachedBmp_11"},
		{src:"images/CachedBmp_10.png?1617861235178", id:"CachedBmp_10"},
		{src:"images/CachedBmp_7.png?1617861235178", id:"CachedBmp_7"},
		{src:"images/CachedBmp_4.png?1617861235178", id:"CachedBmp_4"},
		{src:"images/CachedBmp_3.png?1617861235178", id:"CachedBmp_3"},
		{src:"images/noFish_atlas_1.png?1617861234704", id:"noFish_atlas_1"},
		{src:"images/noFish_atlas_2.png?1617861234704", id:"noFish_atlas_2"},
		{src:"images/noFish_atlas_3.png?1617861234704", id:"noFish_atlas_3"},
		{src:"images/noFish_atlas_4.png?1617861234704", id:"noFish_atlas_4"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['C06FB0D8CC0C924AAF4C015F2FB5323B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;