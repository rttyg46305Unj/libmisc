# libmisc
Miscellaneous library for [Mastermind](https://mastermind.lostpixels.org/) that adds... miscellaneous stuff.
This repository comes with `u16`, `u8`, `i8`, and `bitops`, which are included in the Mastermind IDE by default. They are required to make libmisc function correctly.
## Functions
### `random`
The `random` function takes in either 2 cells or 1 `u16`, and using said value(s), replaces it with a pseudo-random number.
#### Usage
`random(cell1, cell2);`

`random(u16);`
### `div_10`
`div_10` is a function where, it divides the inputted number by 10.

It's based on the `u16` library's function of the same name.
#### Usage
`div_10(cell);`

`div_10(u16);`(u16 library)
### `printhex`
It prints the input number, in hexadecimal.
#### Usage
`printhex(cell);`

`printhex(u16);`

`printhex(cell, lowercase);`

`printhex(u16, lowercase);`
### printbin
Prints the input number in binary.
### Usage
`printbin(cell);`

`printbin(u16);`
### printoct
> This function is broken, you can submit a pull request to fix it.

Prints the input number in octal.
### `printheader`
It prints the bases header.
#### Usage
`printheader(base);`
## Variables
### `cellwidth`
Gives the cell width.
### `zero`
Gives 0.
### `binary`, `octal`, `hex`, `hexadecimal`
Gives the corresponding number of digits in the base.
