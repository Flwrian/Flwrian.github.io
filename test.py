nums = [0,1,2]

if 0 not in nums:
    print(0)
    exit()

arr = []

for i in range(max(nums) + 1):
    arr.append(i + 1)

print("Array : ", arr)

for i in range(len(nums)):
    print("i: ", i)
    if nums[i] != 0:
        print("nums I: ", nums[i])
        arr.remove(nums[i])
        print(arr)

print(arr[0])