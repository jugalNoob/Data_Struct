# a=["jugal"  , "sharma" , "kanika" , "bitch"];

# # b=["fuck" , "suck" , "duck" , "muck"];

# # e=a.copy(b)

# a.remove("jugal");
# a.append("JUGAL")
# a.extend("JUGAL")
# a.sort()
# a.index("sharma")
# a.pop(0)
# print(a)
# print(e)


# h="jugal sharma"

# print(h.slice(0,  5))



def main( a , b):
    
    print("this is function start line class")
    
    return  a + b
    
    
b=main(100 , 100);

print(b)

# for i in range(10):
    
#     print( "number" , i)
    
    

tup=(True , "jugal" , 45 , 1.5)

print(tup.index(True))


thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": [2000 , 2001 , 2005]
}
print(thisdict["year"])


myfamily = {
  "child1" : {
    "name" : "Emil",
    "year" : 2004
  },
  "child2" : {
    "name" : "Tobias",
    "year" : 2007
  },
  "child3" : {
    "name" : "Linus",
    "year" : 2011
  }
}

print(myfamily)


class Person:
  def __init__(self, name, age):
    self.name = name
    self.age = age

p1 = Person("John", 36)

print(p1.name)
print(p1.age)


