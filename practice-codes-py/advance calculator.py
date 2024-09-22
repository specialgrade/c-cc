# advance calculator

print('>>>>> CALCULATOR <<<<<\n')
print('Hi user!\n')

firstNum = int(input('Enter first number: ')) 
secNum = int(input('Enter second number: ')) 

operation = int(input('\nSelect operation: \n(1) ADDITION\n(2) SUBTRACTION\n(3) MULTIPLICATION\n(4) DIVISION\n>>>>> '))

if operation == 1: 
    sum = print('\nThe sum is: ', firstNum + secNum) 
elif operation == 2: 
    difference = print('\nThe difference is: ', firstNum - secNum) 
elif operation == 3: 
    product = print('\nThe product is: ', firstNum * secNum) 
else: 
    quotient = print('\nThe quotient is: ', firstNum / secNum) 

print('\nThank you for using my calculator!\n')