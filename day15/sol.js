var ns = `20,9,11,0,1,2`.split(",").map(e=>+e)
var k = ns.length
var cache = {}
ns.forEach((e,i)=>{
 cache[e] = [i+1]
})
var last = ns[ns.length-1]
while(ns.length<30000000){
    let next = (cache[last][0] - cache[last][1]) || 0
    cache[next] = cache[next] || []
    cache[next][1] = cache[next][0]
    cache[next][0] = ns.length+1
    ns.push(next)
    last = next
}
console.log(ns[ns.length-1])