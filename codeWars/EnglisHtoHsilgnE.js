/*
Your goal is to take a string like the classic:

const example = "Hello world"

and output the string backwards like so:

 "dlrow olleH"

if it's a number, it should also return the number reversed

const num = 123

Turns into:

321

Negative numbers should throw an error

But the result of inputting a positive number should still be a number!!

Also if it's not a string or number it should throw a type error saying "That's not a string or number"

If the inputted number is greater than 9007199254740991 throw an error saying "That number is too big"

And lastly if the first and last letter are the same it should throw an error

wordFlipper("bob")

Should not output:

"bob"
*/
const wordFlipper = stringOrNum =>{
    if (typeof stringOrNum === 'number') {
        if (stringOrNum < 0) throw new Error('Negative number')
        if (stringOrNum > 9007199254740991) throw new Error('That number is too big')
        return +stringOrNum.toString().split('').reverse().join('')
    } else if (typeof stringOrNum === 'string') {
        if (stringOrNum[0] === stringOrNum.slice(-1)) throw new Error('Same first and last letters')
        return stringOrNum.split('').reverse().join('')
    } else {
        throw new Error('That\'s not a string or number')
    }
}
