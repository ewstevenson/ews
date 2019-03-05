#!/usr/bin/python

nested_list = []
names = []

for _ in range(int(raw_input())):
    name = raw_input()
    score = float(raw_input())
    nested_list.append([name, score])

#print(sorted(nested_list))

second_lowest = sorted(nested_list,key=lambda x:x[::-1])[1]
#print(second_lowest[1])
for i in range(len(nested_list)):
    if nested_list[i][1] == second_lowest[1]:
        names.append(nested_list[i][0])
for i in (sorted(names)):
    print(i)
