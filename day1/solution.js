const p=r=>r.split("\n").map(e=>+e)

const part1=(r,o=0)=>((a=p(r)).find((e,i)=>a.find((k,j)=>j!=i&&(e+k)==2020&&(o=e*k))),o)

const part2=(r,o=0)=>((a=p(r)).find((e,i)=>a.find((k,j)=>a.find((n,g)=>g!=i&&j!=i&&g!=j &&(e+k+n)==2020&&(o=e*k*n)))),o)
