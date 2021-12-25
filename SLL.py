

class SLNode:
  def __init__ (self, val):
    self.val = val 
    self.next = None

class Slist:
  def __init__ (self):
    self.head = None

  def add_to_front(self, val):
    new_node = SLNode(val)
    current_head = self.head
    new_node.next = current_head
    self.head = new_node
    return self
  def add_to_end(self, val):
    if self.head == None:
      self.add_to_front(val)
      return self
    
    new_node = SLNode(val)
    runner = self.head
    while runner.next != None:
      runner = runner.next
    runner.next = new_node
    return self

  def remove_from_front(self):
    if self.head == None:
      return "The list is Empty"

    runner = self.head
    self.head = runner.next
    runner = None

    return self

  def remove_from_back(self):
    runner = self.head

    while(runner.next != None):
      if runner.next.next == None:
        runner.next = None
        return self
      runner = runner.next
    return self

  def remove_val(self, val):
    runner = self.head
    if runner.val == val:
      self.remove_from_front()
      return self

    while(runner):
      if runner.next.val == val:
        runner.next = runner.next.next
        return self
      runner = runner.next
    return self

  def insert_at(self, val, n):

    if self.head == None or n == 0:
      self.add_to_front(val)
      return self

    runner = self.head
    x = 0

    while(runner):
      x += 1
      if x == n:
        current_node = runner.next
        new_node = SLNode(val)
        runner.next = new_node
        new_node.next = current_node
        return self
      runner = runner.next
    return self

  def display_val(self):
    runner = self.head

    while (runner):
      print(runner.val)
      runner = runner.next
      print("->")
    return self

my_list = Slist()
my_list.add_to_front("are").add_to_front("Linked lists").add_to_end("fun!").insert_at("absoluetly", 2).display_val()
# remove_from_back().display_val()



# this_arr =[]
# this_arr.append(54)
# this_arr.append(85)
# print(this_arr)