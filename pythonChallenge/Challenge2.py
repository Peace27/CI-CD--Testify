def exponent(num, expo):
    result = 1
    for i in range(expo):
        result *= num
    return result


print(pow(2, 5))
print(exponent(7, 6))