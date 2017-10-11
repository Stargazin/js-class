/* QUIZ 2
 * Given a block of code,
 * change `??` to produce the expected `x` value
 * Anything in the block of code may be used,
 * but only `??` may be replaced.
 * `??` may be replaced with *anything* if it works.
 * *Make it as simple as possible.*
 *ctrl+d for multi line edits*
 */

/* ------------------- */

var greet = "hi alex"; //can do truthy or falsey value, since result will end up being true anyway (8 or 2)
var hello = (greet ? 8 : 2); //output is true value regardless
var goodbye = !0;

var x = (hello && goodbye); //goodbye= bang a false value
x; // true

/* ------------------- */

var apple = (19 || 19);
var lime = ("hi alex" && 8);
var orange = (apple - lime); // 19-8= 11

var x = orange;

x; // 11

/* ------------------- */

var z = {
	a: {
		val: 1
	},
	b: 9
};

var y;     // y is already declared as a variable here, although undefined
y = z.b - z.a.val;    //y is undefined, here you reassign value to y, y has to be 8 since x = y (see below)
                      //you can simply reassign y to 8 (simple answer) -- do not get fooled by the object for Z (produce complex answer) 

var x = y;
x; // 8

/* ------------------- */
