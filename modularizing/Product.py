import random
class Product:
  def __init__(self, name, price, category):
    self.name = name
    self.price = price
    self.category = category
    self.pdt_id = random.randint(0,100)

  
  def update_price(self, percent_change, is_increased):
    if (is_increased):
      self.price += self.price * percent_change
    elif not (is_increased):
      self.price -= self.price * percent_change
    else:
      return
    return self
  
  def print_info(self):
    print(f"product name: {self.name}, id: {self.pdt_id} category {self.category}, price ${self.price}")
