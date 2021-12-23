import unittest

def reverseList(some_list):
  for i in range(int(len(some_list)/2)):
    some_list[i], some_list[len(some_list) -1 -i] = some_list[len(some_list) -1 -i], some_list[i]
  return some_list

def isPlaindrome(str):
  for i in range(int(len(str)/2)):
    if str[i] != str[len(str) -1 -i]:
      return False
  return True 

# Still need to figure out coin change 
def coinChange(amount):
  drawer = [25,10,5,1]
  change = 0
  combination = []
  while change < amount:
      change += drawer[0]
print("here is your change", coinChange(81))

def recursiveFib(val):
  if val <= 1:
    return val
  return recursiveFib(val -1) + recursiveFib(val -2)
print("printing recursive fibb", recursiveFib(10))

#  Factorial with iteration
def factoialOf(num):
  fact = 1
  for i in range(1, num+1):
    fact = fact * i
  return fact
print("printing factorial", factoialOf(5))


#  Factorial with recursion

def factorialRec(num):
  if (num == 1 or num == 0):
    return 1
  else:
    return (num * factorialRec(num -1))

print("factorial with recursion", factorialRec(5))

class isPlaindromeTests(unittest.TestCase):
    def testTwo(self):
      self.assertTrue(isPlaindrome("racecar"), True)
    def testThree(self):
      self.assertFalse(isPlaindrome("rcecar"), False)

class reverseListTests(unittest.TestCase):
  def testTwo(self):
    self.assertEqual(reverseList([1,3,5]), [5,3,1])
  def testThree(self):
    self.assertEqual(reverseList([-9,5,3,7,]), [7,3,5,-9])
  def setUp(self):
        # add the setUp tasks
    print("running setUp")
    # any task you want run after the tests are executed, put them in the tearDown method
  def tearDown(self):
        # add the tearDown tasks
    print("running tearDown tasks")


    
if __name__ == '__main__':
    unittest.main() # this runs our tests
