# Task 25

class Utilities:
    def add(num1, num2):
        return num1 + num2


Utilities.add = (Utilities.add)
print("100 + 200 =", Utilities.add(100, 200))