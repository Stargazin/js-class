/* console.log */
// function is console.log
// function call is console.log(x);
console.log(1); // prints 1

/*
 * CONTROL FLOW
 * if/[else if/]else statements
 */
{
	// block of code
}

if (/*truthy*/) {
	// do block and stop
}

// Favor next pattern -- try not to do variable declarations in blocks
if (100) {
	var x = 1;
}
console.log(x); // prints 1



// Favor this pattern
var x; // undefined
if (100) {
	x = 1;
}
console.log(x); //  1



if (/*falsey*/) {
	// skip block
}


var x; // undefined
if (false) {
	x = 1; // gets skipped
}
console.log(x); // prints undefined





if (/*truthy*/) {
	// do block and stop
} else {
	// doesn't reach block
}


var x;
if (200) {
	x = 1;
} else {
	x = 2;
}
console.log(x); // prints 1





if (/*falsey*/) {
	// skip block
} else {
	// do block
}


var x;
if (!200) {
	x = 1;
} else {
	x = 2;
}
console.log(x); // prints 2





if (/*truthy*/) {
	// do block and stop
} else if (/*doesn't matter*/) {
	// doesn't reach block
} else {
	// doesn't reach block
}


var x; // undefined;
if ('hello world') {
	x = 1;
} else if (/*doesn't matter*/) {
	x = 2;
} else {
	x = 3;
}
console.log(x); // prints 1





if (/*falsey*/) {
	// skip block
} else if (/*truthy*/) {
	// do block and stop
} else {
	// doesn't reach block
}


var x;
if (false) {
	x = 1;
} else if (!false) {
	x = 2;
} else {
	x = 3;
}
console.log(x); // prints 2



var x; // undefined
if (false) {
	x = 1;
} else if (false) {
	x = 2;
}
console.log(x); // prints undefined



// each `if` statement stands alone
if (/*truthy*/) {
	// do block
}

if (/*truthy*/) {
	// do block
}

var x; // undefined
var y; // undefined
if (1) {
	x = 1;
	y = 3;
} else if (2) {
	x = 2;
	y = 4;
}

if (2) {
	 x = 2;
}

console.log(x + y); // 5







var x; // undefined
var y; // undefined
var a;
var b;
if (1) {
	x = 1;
	y = 3;
}

if (2) {
	a = 2;
	b = 4;
}








var x;
var check = true;

if (check) {

	if (false) {
		x = 3;
	}

}

console.log(x); // ??
