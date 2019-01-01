// You have an amount of money a0 > 0 and you deposit it with a
// constant interest rate of p% > 0 per year on the 1st of January 2016.
// You want to have an amount a >= a0.
//
//     Task:
// The function date_nb_days (or dateNbDays...) with parameters a0,
// a, p will return, as a string, the date on which you have just reached a.
//
//     Example:
// date_nb_days(100, 101, 0.98) --> "2017-01-01" (366 days)
//
// date_nb_days(100, 150, 2.00) --> "2035-12-26" (7299 days)
//
// Notes:
//     The return format of the date is "YYYY-MM-DD"
// The deposit is always on the "2016-01-01"
// If p% is the rate for a year the rate for a day is p divided by 36000
// since banks consider that there are 360 days in a year.
//     You have: a0 > 0, p% > 0, a >= a0


function dateNbDays(a0, a, p) {
    // Bankers use 360 day year, so the daily percent is set like this (360 * 100)
    let dailyRate = p / 36000
    let days = 0
    // Determine the number of days it will take to reach "a"
    while (a0 < a) {
        a0 = a0 * (1 + dailyRate)
        days++
    }
    // Set Date to January 1, 2016
    var targetDate = new Date("2016-01-01")
    // Add the number of days need to set date
    targetDate.setDate(targetDate.getDate() +  days)
    // String version of Year
    var y = targetDate.getFullYear(targetDate).toString();
    // String version of Month (Added 1 because month index at 0)
    var m = (targetDate.getMonth(targetDate) + 1).toString();
    // Add "0" in front of "m" if it is a single digit value
    m = m.length === 1 ? '0' + m: m
    // String version of Day
    var d = targetDate.getDate(targetDate).toString();
    // Add "0" in front of "d" if it is a single digit value
    d = d.length === 1 ? '0' + d: d
    // Add y, m, and d together with "-" in between them
    return y + "-" + m + "-" + d

}


