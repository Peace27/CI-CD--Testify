class Animal:
    def sound(self):
        animal_sound = "No sound"
        return animal_sound


class Cat(Animal):
    def sound(self):
        animal_sound = "Meow"
        return animal_sound


class Dog(Animal):
    def sound(self):
        animal_sound = "Bark"
        return animal_sound


cat = Cat()
dog = Dog()

print("Cat Sound:", cat.sound())
print("Dog Sound:", dog.sound())