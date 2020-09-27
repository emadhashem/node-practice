module.exports = (x , y , cb) => {
    if(x <= 0 || y <= 0)  {
        setTimeout(() => cb(new Error("not good") , null) , 2000)
        
    }
    else {
        setTimeout(() => cb(null, {
            permi : (x , y) => 2 * (x + y),
            area : (x , y) =>  x * y
        }) , 2000)
    }
    console.log("this statment after call back")
}
