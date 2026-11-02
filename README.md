
# libmisc
Miscellaneous library for [Mastermind](https://mastermind.lostpixels.org/) that adds many stuff.
This repository comes with `u16`, `u8`, `i8`, and `bitops`, which are included in the Mastermind IDE by default. They are required to make libmisc function correctly.
## Functions
### Random
#### `random` 
The `random` function takes in either 2 cells or 1 `u16`, and using said value(s), replaces it with a pseudo-random number.
##### Usage
`random(cell1, cell2);`

`random(u16);`
### Compatibility
#### `div_10`
> This function has been replaced by the `divmod` function. Use this function if you need to divide a `u16`  by 10.

`div_10` is a function where, it divides the inputted number by 10.

It's based on the `u16` library's function of the same name.
##### Usage
`div_10(cell);`

`div_10(u16);`(u16 library)
### Printing
#### `printhex`
It prints the input number, in hexadecimal.
##### Usage
`printhex(cell);`

`printhex(u16);`

`printhex(cell, lowercase);`

`printhex(u16, lowercase);`
#### `printbin`
Prints the input number in binary.
##### Usage
`printbin(cell);`

`printbin(u16);`
#### `printoct`
> This function is broken, you can submit a pull request to fix it.

Prints the input number in octal.
#### `printheader`
It prints the bases header. If it doesn't have a header for the base, it prints `0?`
##### Usage
`printheader(base);`
### Booleans
#### `and`, `or`, `xor`
Computes the corresponding function.
##### Usage
`and(a, b, output);`

`or(a, b, output);`

`xor(a, b, output);`
#### `less`, `lessequal`, `greater`, `greaterthan`
Compares A and B.
##### Usage
`less(a, b, output)`

`lessequal(a, b, output)`

`greater(a, b, output)`

`greaterequal(a, b, output)`
### Math
#### `mult`
Multiply a by b.
##### Usage
`mult(multiplier, multiplicand, output)`
#### `divmod`
Execute the [Divmod](https://esolangs.org/wiki/Brainfuck_algorithms#Divmod) algorithm, with the numerator and denominator as arguments.
##### Usage
	divmod(numerator, denominator, output_mod, output_div)
#### `pow`
Pretty much works like the C math.h `pow` function, but only accepts cells.
##### Usage
`pow(base, exponent, output)`
#### `log`
Take the logarithm of a number with your chosen base.
##### Usage
`log(base, antilog, output)`
#### `root`
Take the root of a number with your chosen degree.
##### Usage
`root(degree, radicand, output)`
## Variables
### `cellwidth`
Gives the cell width.
### `zero`
Gives 0.
### `binary`, `octal`, `hexadecimal`
Gives the corresponding number of digits in the base.
