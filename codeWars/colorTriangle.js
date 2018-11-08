// A coloured triangle is created from a row of colours,
//     each of which is red, green or blue. Successive rows,
//     each containing one fewer colour than the last,
//     are generated by considering the two touching colours in the previous row.
//     If these colours are identical, the same colour is used in the new row.
// If they are different, the missing colour is used in the new row.
// This is continued until the final row, with only a single colour, is generated.
//
//     For example, different possibilities are:
//     Colour here:            G G        B G        R G        B R
// Becomes colour here:         G          R          B          G

function triangle(row) {
    let nextRow = [];
    let result = row.split("")
    for (var j=0; j < row.length-1; j++) {
        nextRow = []
        for (var i=0; i <result.length -1; i++){
            nextRow.push(nextColor(result[i],result[i+1]))
        }
        result = nextRow.slice(0)
    }
    return result.join("")
}

function nextColor(c1, c2) {
    let colors = {"R": 1, "G":2, "B":3}

    if (colors[c1] + colors[c2] ===6) return "B";
    else if (colors[c1] + colors[c2] === 2) return "R"
    else if (colors[c1] + colors[c2] === 3) return "B"
    else if (colors[c1] + colors[c2] === 5) return "R"
    else if (colors[c1]  + colors[c2] ===4)  return "G"

}

// 27           8      1
// BBB - B, GGG -G, RRR - R
//
// 12        12
// BGG - B, GGB - B  (whichever is 1)
// 3         3
// RRB - B, BRR - B,
//     4         4
// GGR - R, RGG - R
// 9         9
// RBB - R, BBR - R
// 18        18
// GBB - G, BBG - G
// 2         2
// GRR - G, RRG - G
//
// 6         6        6
// BGR - G, BRG - R, RBG -B (MIDDLE)
//
// 4       2
// GRG - B, RGR - B
// 9         3
// BRB - G, RBR - G
// 12        18
// GBG - R, BGB - R (whatever is missing)
//
// 9 B
// 6 G
// 3 R
//
// 8

