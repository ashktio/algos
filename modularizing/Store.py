from Product import Product
class Store:
  def __init__(self, name):
    self.name = name
    self.stock = []

  def add_product(self, name, price, category):
    product = Product(name, price, category)
    self.stock.append(product)
    return self
  
  def sell_product(self, id):
    for i in self.stock:
      if i.pdt_id == id:
        self.stock.remove(i)
    return self

  def inflation(self, percent_change, is_increased):
    for i in self.stock:
      i.update_price(percent_change, is_increased)
    return self
  
  def set_clearance(self, category, percent_discount, is_increased):
    for i in self.stock:
      if i.category == category:
        i.update_price(percent_discount, is_increased)
    return self

Safeway = Store("Safeway")

Safeway.add_product("onion", 2, "Vegitables").add_product("toothpaste", 5, "Dental care")
Safeway.inflation(0.05, True)
Safeway.set_clearance("Vegitables", 0.1, False).set_clearance("Dental care", .5, False)
Safeway.sell_product(14)
for i in Safeway.stock:
  i.print_info()

