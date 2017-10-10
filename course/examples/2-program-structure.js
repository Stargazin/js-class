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
var x;
if (100) {
	x = 1;
}
console.log(x); // prints 1





if (/*falsey*/) {
	// skip block
}


var x;
if (false) {
	x = 1;
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


var x;
if ('hello world') {
	x = 1;
} else if (/*doesn't matter*/) {
	x = 2;
} else {
	x = 3;
}
console.log(1); // prints 1





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
}
console.log('x'); // prints ?




// each `if` statement stands alone
if (/*truthy*/) {
	// do block
}
if (/*truthy*/) {
	// do block
}

var x;
var y;
if (1) {
	x = 1;
}
if (2) {
	 y = 2;
}
console.log(x + y); // prints 3