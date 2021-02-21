a = 00000000000000000000000000001011
b = str(a)
print(b)

count = 0
for i in b:
    if i == "1":
        count += 1
print(count)
        