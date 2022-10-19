#  Task 22

class Hunt:
    __Weapon = "Assault Rifle"

    def get_weapon(self):
        return "Not available"

    def __int__(self, __Weapon):
        self.__Weapon = __Weapon

hunt = Hunt()
print(hunt.get_weapon())