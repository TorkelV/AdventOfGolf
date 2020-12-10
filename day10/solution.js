var parse = r => {
    return r.split("\n").map(e=>+e)
}


var part1 = input => {
    var r = parse(input)
    var diff = r.sort((a,b)=>a-b).map((e,i,a)=>i?e-a[i-1]:e-0)
    console.log(diff)
   // return diff
    return (diff.filter(e=>e==3).length+1) * diff.filter(e=>e==1).length
}


var part2=r=>parse(r).sort((a,b)=>a-b).reduce((c,j) => (c[j] = (c[j-3]||0)+(c[j-2]||0)+(c[j-1]||0),c),[1])
var ex2Inp = `16
10
15
5
1
11
7
19
6
12
4`


var exInp = `28
33
18
42
31
14
46
20
48
47
24
23
49
45
19
38
39
11
1
32
25
35
8
17
7
9
4
2
34
10
3`

console.log("example1:")
console.log(part2(ex2Inp))

console.log("example:")
console.log(part2(exInp))


var inp = `46
63
21
115
125
35
89
17
116
90
51
66
111
142
148
60
2
50
82
20
47
24
80
101
103
16
34
72
145
141
124
14
123
27
62
61
95
138
29
7
149
147
104
152
22
81
11
96
97
30
41
98
59
45
88
37
10
114
110
4
56
122
139
117
108
91
36
146
131
109
31
75
70
140
38
121
3
28
118
54
107
84
15
76
71
102
130
132
87
55
129
83
23
42
69
1
77
135
128
94`

console.log("solution:")
console.log(part2(inp))