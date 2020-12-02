const p=r=>r.split("\n").map(e=>e.match(/(\d+)-(\d+) (.): (.+)/))

const part1=r=>p(r).filter(([,b,c,d,e])=>(k=[...e.matchAll(d)].length)>=+b&&k<=+c).length

const part2=r=>p(r).filter(([,b,c,d,e])=>e[b-1]==d^e[c-1]==d).length