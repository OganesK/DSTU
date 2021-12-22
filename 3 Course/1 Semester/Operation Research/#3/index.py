import math
import numpy as np
def get_pivot_position(tableau):
    z = tableau[-1]
    column = next(i for i, x in enumerate(z[:-1]) if x > 0)
    
    restrictions = []
    for eq in tableau[:-1]:
        el = eq[column]
        restrictions.append(math.inf if el <= 0 else eq[-1] / el)

    row = restrictions.index(min(restrictions))
    return row, column
def pivot_step(tableau, pivot_position):
    new_tableau = [[] for eq in tableau]
    
    i, j = pivot_position
    pivot_value = tableau[i][j]
    new_tableau[i] = np.array(tableau[i]) / pivot_value
    
    for eq_i, eq in enumerate(tableau):
        if eq_i != i:
            multiplier = np.array(new_tableau[i]) * tableau[eq_i][j]
            new_tableau[eq_i] = np.array(tableau[eq_i]) - multiplier
   
    return new_tableau
def is_basic(column):
    return sum(column) == 1 and len([c for c in column if c == 0]) == len(column) - 1

def get_solution(tableau):
    columns = np.array(tableau).T
    solutions = []
    for column in columns[:-1]:
        solution = 0
        if is_basic(column):
            one_index = column.tolist().index(1)
            solution = columns[-1][one_index]
        solutions.append(solution)
        
    return solutions

def simplex(c, A, b):
    tableau = to_tableau(c, A, b)

    while can_be_improved(tableau):
        pivot_position = get_pivot_position(tableau)
        tableau = pivot_step(tableau, pivot_position)

    return get_solution(tableau)
def to_tableau(c, A, b):
    xb = [eq + [x] for eq, x in zip(A, b)]
    z = c + [0]
    return xb + [z]
def can_be_improved(tableau):
    z = tableau[-1]
    return any(x > 0 for x in z[:-1])

print("Введите прибыль через запятую")
tmp_c = str(input()).replace(" ","").split(',')
c=list(map(int, tmp_c))

# c = [40, 50, 30, 20,0,0, 0]
print()
print("Введите вектор b:")
tmp_c = str(input()).replace(" ","").split(',')
b=list(map(int, tmp_c))
A=[]
print("Введите матрицу A")
for i in range(0,len(b)):
    print("Введи строку x-ов через ','")
    tmp_c = str(input()).replace(" ","").split(',')
    tmpVec=list(map(int, tmp_c))
    A.append(tmpVec)
# A = [
#     [3, 5, 2, 7, 1,0,0],
#     [ 4, 3, 3, 5, 0,1,0],
#     [ 5, 6, 4, 8,0,0, 1]
# ]
# print("Введите вектор b:")
# tmp_c = str(input()).replace(" ","").split(',')
# b=list(map(int, tmp_c))
# b = [15, 9, 30]

solution = simplex(c, A, b)
for i in range(0, len(solution)):
    print(f"x{i}={solution[i]}")