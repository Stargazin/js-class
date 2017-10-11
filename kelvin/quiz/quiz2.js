/* QUIZ 2
 * Given a block of code,
 * change `??` to produce the expected `x` value
 * Anything in the block of code may be used,
 * but only `??` may be replaced.
 * `??` may be replaced with *anything* if it works.
 * *Make it as simple as possible.*
 */

/* ------------------- */

var greet = true;
var hello = (greet ? 8 : 2);//8
var goodbye = true;//true

var x = (hello && goodbye);//8 && true
x; // true

/* ------------------- */

var apple = (undefined || 19);
var lime = ([] && 8);
var orange = (apple - lime);

var x = orange;

x; // 11

/* ------------------- */

var z = {
	a: {
		val: 1
	},
	b: 9
};

var y;
y = 8;

var x = y;
x; // 8

/* ------------------- */