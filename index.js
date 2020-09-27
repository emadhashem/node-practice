var rect = {
    perimeter : (x , y) => (
        2 * (x + y)
    ),
    area : (x , y) => (x * y),

}
function solve(l , b) {
    console.log("solving the rec with " + l + " " + b)
    if(l <= 0 || b <= 0)  console.log("not good") 
    else {
        console.log("the arae is " + rect.area(l , b))
        console.log("the per is "  + rect.perimeter(l , b))

    }
}
solve(2 , 4);