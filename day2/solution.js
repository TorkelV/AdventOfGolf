const p=r=>r.split("\n").map(e=>e.match(/(\d+)-(\d+) (.): (.+)/))

const part1=r=>p(r).filter(e=>(k=[...e[4].matchAll(e[3])].length)>= +e[1]&&k<= +e[2]).length

const part2=r=>p(r).filter(e=>e[4][e[1]-1]==e[3]^e[4][e[2]-1]==e[3]).length