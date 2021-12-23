arr = [19,5,-32,90,3,2,0,8]

def bubbleSort(arr):
  for j in range(len(arr) -1):
    for i in range(len(arr) -1 - j):
      if arr[i] > arr[i+1]:
        arr[i], arr[i+1] = arr[i+1], arr[i]
  return arr
print("bubble sorted", bubbleSort(arr))

def selectionSort(arr):
  for i in range(len(arr)):
    min_idx = i
    for j in range(i+1, len(arr)):
      if arr[min_idx] > arr[j]:
        min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
  return arr
print("selection sorted", selectionSort(arr))


def insertionSort(arr):
  for i in range(1, len(arr)):
    key = arr[i]
    j = i -1
    while j >=0 and key < arr[j]:
      arr[j], key = key,arr[j]
    
  for i in range(len(arr)):
    print ("%d" %arr[i])
  return arr
print("printed with insertion sort", insertionSort(arr))





