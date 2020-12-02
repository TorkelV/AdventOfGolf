r = "1000\n1000\n20\n1020" #Some input with numbers separated by newlines

from itertools import combinations 
from math import prod
s = lambda r,n: prod([x for x in combinations([int(k) for k in r.splitlines()],n) if sum(x)==2020][0])
part1 = s(r,2)
part2 = s(r,3)