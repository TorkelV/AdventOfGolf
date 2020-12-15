var part1 = r => {
    let time = +r.split("\n")[0]
    let buses = r.split("\n")[1].split(",").filter(e=>e!="x").map(e=>+e)
    let diff = buses.map(e=>e-(time%e))
    let min = Math.min(...diff)
    return min * buses[diff.indexOf(min)]
}

var part2 = r => {
    let time = +r.split("\n")[0]
    let buses = r.split("\n")[1].split(",").map((e,i,a)=>e!="x"?({arrives: +e, n: i}):e).filter(e=>e!="x")
    let max = Math.max(...buses.map(e=>e.arrives))
    let i = buses.find(e=>max==e.arrives).n
    for(i=max-i;i<1068781200000000;i+=max){
        if(buses.every(e=>{
            return ((i+e.n)%e.arrives) == 0
        })) return i
    }
    return buses
}




var inp = `1006726
23,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,647,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,19,x,x,x,x,x,x,x,x,x,29,x,557,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,17` 

//console.log("solution 1:")
console.log(part2(inp))


var exinp = `939
7,13,x,x,59,x,31,19`
//console.log("ex solution:")
//console.log(part2(exinp))



var inp = `1006726
23,x,x,x,x,x,x,x,x,x,x,x,x,41,x,x,x,x,x,x,x,x,x,647,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,13,19,x,x,x,x,x,x,x,x,x,29,x,557,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,17` 

//console.log("solution 2:")
//console.log(part2(inp))