#Leet code solutions

from contextlib import nullcontext


class Solution:
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            for k in range(i+1, len(nums) -1):
                if nums[i] + nums[k] == target:
                    return [i, k]
        return "None of the elements in the list add up to the target"

X = Solution()
print(X.twoSum([2,5,5,15], 10))


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def addFront(self, val):
        new_node = Node(val)

        if self.head == None:
            self.head = new_node
            return self
            
        new_node.next = self.head
        self.head = new_node
        return self
    
    def litstItems(self):

        runner = self.head
        while runner != None:
            print(runner.data, end=" --> ") 
            runner = runner.next
        print(None)
        return runner

    def removeFront(self):
        if self.head == None:
            return "List is empyt"

        runner = self.head
        self.head = runner.next
        runner.next = None

    def front(self):
        if self.head == None:
            return "The List is Empty"
        return f"The head of the SLL is  --> {self.head.data}"
        
    def listSum(self):
        if self.head == None:
            return "The List is Empty"
        
        runner = self.head
        lSum = 0

        while runner != None:
            lSum += runner.data
            runner = runner.next

        return f"The sum of the items on the list is --> {lSum}"


    def contains(self, val):
        if self.head == None:
            return "The list is empty"
        

        runner = self.head

        while runner != None:
            if runner.data == val:
                return f"Does the list contain {val}? ==> {True}"
            runner = runner.next
        return f"Does the list contain {val}? --> {False}"


    def sllLength(self):
        if self.head == None:
            return "The list is empty"
        
        runner = self.head

        length = 0

        while runner != None:
            length += 1
            runner = runner.next
        return length
        # RETURN STATEMENT ABOVE ADDED TO HAVE OTHER DEPENDENT FUNCTIONS WORK
        return f"The  length of the list is, {length}"

    def maxNode(self):
        if self.head == None:
            return "The list is empty"
        
        runner = self.head

        maxi = self.head.data
        while runner != None:
            if maxi < runner.data:
                maxi = runner.data
            runner = runner.next
        return f"The maximum value in the list is ==> {maxi}"

    def minNode(self):
        if self.head == None:
            return "The list is Empty"
        
        runner = self.head

        minVal = runner.data

        while runner is not None:
            if minVal > runner.data:
                minVal = runner.data
            runner = runner.next
        return f"The minimum value in the list is ==> {minVal}"

    def average(self):
        if self.head.next == None:
            return f"The average of the ist is ==> {self.head.data}"
        
        if self.head ==None:
            return "The list is Empty"
        lgth = sll.sllLength()
        ave = 0

        runner = self.head
        while runner.next is not None:
            ave += runner.data
            runner = runner.next
        return f"The average of the ist is ==> {ave/lgth}"

    def back(self, val):
        if self.head == None:
            new_Node = Node(val)
            self.head = new_Node
            return 

        runner = self.head

        while runner.next is not None:
            runner = runner.next
        runner.next = Node(val)
        return 

    def removeBack(self):
        if self.head.next == None:
            self.head = None
            return None
        runner = self.head

        while runner is not None:
            if runner.next.next is None:
                runner.next = None
            runner = runner.next
        return
    def backVal(self):
        if self.head is None:
            return "Dude the list is empty"
        
        runner = self.head
        while runner is not None:
            val = runner
            runner = runner.next
        return val.data

    def prependVal(self, val, before):
        if self.head is None:
            new_node = Node(val)
            self.head = new_node
            return 
        
        runner = self.head

        p = None
        while runner.next is not None:
            if runner.next.data == before:
                p = runner
                new_node = Node(val)
                new_node.next = p.next
                p.next = new_node
                return 
            runner = runner.next
        return

    def appendVal(self, val, after):
        if self.head is None:
            new_node = Node(val)
            self.head = new_node
            return 
        
        runner = self.head

        p = None
        while runner.next is not None:
            if runner.next.data == after:
                p = runner.next
                new_node = Node(val)
                new_node.next = p.next
                p.next = new_node
                return f"successfully added {val} after {after} in the list"
            runner = runner.next
        return f"Couldn't find {after} in the list."


sll = LinkedList()

print(sll.front())

sll.addFront(4).addFront(30).addFront(90).addFront(0)


sll.addFront(5).addFront(9).removeFront()
sll.litstItems()
print(sll.front())
print(sll.listSum())
print(sll.contains(4))
print(sll.sllLength())
print(sll.maxNode())
print(sll.minNode())
print(sll.average())
sll.back(10)
sll.removeBack()
sll.litstItems()
print(sll.backVal())
sll.prependVal(10, 4)
print(sll.appendVal(35, 9))
sll.litstItems()