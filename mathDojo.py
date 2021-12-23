import unittest

class MathDojo:
  def __init__(self):
    self.result = 0
  

  def add(self, num, *nums):
    self.result += num

    for i in nums:
      self.result += i
        
    return self
  
  def subtract(self, num, *nums):
    self.result -= num

    for i in nums:
      self.result -= i

    return self


# md = MathDojo()

# x = md.add(2).add(3,5,10).result
# print("printing",x)

class TestMathDojo(unittest.TestCase):
  def setUp(self):
    self.md = MathDojo()
  def test_add(self):
    # md = MathDojo()
    self.assertEqual(self.md.add(2).result, 2)
  def test_add2(self):
    # md = MathDojo()
    self.assertEqual(self.md.add(2).add(3,5,10).result, 20)

  def test_sub(self):
    # md = MathDojo()
    self.assertEqual(self.md.subtract(2).result, -2)
  
  def test_sub2(self):
    # md = MathDojo()
    self.assertEqual(self.md.subtract(2).subtract(3,5,10).result, -20)

  def overallTest(self):
    # md = MathDojo()
    self.assertEqual(self.md.add(2).add(2,5,1).subtract(3,2).result, 5)

if __name__ == '__main__':
    unittest.main() 