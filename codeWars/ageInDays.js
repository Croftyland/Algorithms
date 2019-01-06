/*
Did you ever want to know how many days you are old? Write a function ageInDays which returns your age in days.

For example if today is 30 November 2015 then

ageInDays(2015, 11, 1) returns "You are 29 days old"

The birthday is entered as integers in the following order

ageInDays(year, month, day)

For example if you are born 27 November 2007 then call ageInDays(2007, 11, 27).

Your birthday is expected to be in the past.

Suggestions on how to improve the kata are welcome!
*/
function ageInDays(year, month, day){
    let birthDate = new Date(year, month - 1, day);
    let today = new Date();
    let days = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
    return `You are ${days} days old`;
}
