var rect = require('./rectangle')
function solve(l , b) {
    rect(l , b , (err , rectangel) => {
        if(err) {
            console.log(err.message)
        } else {
            console.log(rectangel.permi(l , b))
            console.log(rectangel.area(l , b))
        }
    })
}
solve(2 , 4);
solve(-2 , 4);