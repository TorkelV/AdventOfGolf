part1 = r => r.split`\n`.map(e=>+e).find((n,i)=>i>=25 && r.slice(Math.max(0,i-25),i).find((k,j,a)=>!a.some((u,y)=>j!=i&&(u+k)==n)))

inp =`35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`

part1(inp)