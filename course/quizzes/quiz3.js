/* QUIZ 3
 * Given a block of code,
 * change `??` to produce the expected `x` value
 * Anything in the block of code may be used,
 * but only `??` may be replaced.
 * If given `x; // ??`,
 * figure out what value is assigned to `x`.
 */
/* ------------------- */

var x = {
	jack: { apple: 3 },
	jill: { apple: 4 }
};

x; // ??

/* ------------------- */

var x = {
	jack: { apple: 3 },
	jill: { apple: 4 }
};

var y = x.jack.apple + x.jill.apple;

x = y;
x = x;
x; // ??

/* ------------------- */

var base = [1, 2, 3, 4, 5];

var x = ?? + base[3];
x; // 6;

/* ------------------- */

var x = {
	jack: { apple: 3 },
	jill: { apple: 4 }
};

var y = x.jack;
x = y.jack;
y = x;
x = y;

x; // ??

/* ------------------- */

var x = {
	jack: { apple: 3 },
	jill: { apple: 4 }
};

var y = x.jill;
x = (y.apple || 0);
y = x;
x = (undefined || y);

x; // ??

/* ------------------- */
