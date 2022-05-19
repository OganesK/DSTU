import random
import math
from collections import Counter
from termcolor import colored

def selection_sort(arr,array):#cортировка
    array_result = []
    for i in range(len(arr)):
        minimum = i

        for j in range(i + 1, len(arr)):
            if arr[j] > arr[minimum]:
                minimum = j

        arr[minimum], arr[i] = arr[i], arr[minimum]
        array[minimum],array[i] = array[i],array[minimum]
    index = len(array)-1
    while (index>=0):
        array_result.append(array[index])
        index = index-1
    return array_result

class Individual:
    def __init__(self,value):
        self.value = value
        self.phenotype = -1

    def print(self):
        print([self.value,self.phenotype])


def make_interval_array(n):
    intervals_array = []
    interval_value = 0
    interval = math.trunc(255 / n)
    while(len(intervals_array)<=n-1):
        intervals_array.append(interval_value)
        interval_value = interval_value+interval
    intervals_array.append(interval_value+(255%n))
    print(intervals_array)
    return intervals_array

def make_first_generation(m,individual_value,intervals_array,array):
    individuals_array = []
    for i in range(0,individual_value):
        individual = Individual([random.randint(0, 255) for i in range(0, m)])
        individuals_array.append(individual)
        print(colored("Первое поколение:", 'green'))
    make_phenotype(individuals_array,intervals_array,array)
    for q in individuals_array:
        q.print()
    print(colored(("<><><><><><><><><><>"), 'yellow'))
    return individuals_array

def make_phenotype(individuals_array,intervals_array,array):
    for x in range(len(individuals_array)):
        interval_division = [0 for i in range(0, len(intervals_array)-1)]
        for y in range((len(individuals_array[x].value))):
            t = 0
            while (intervals_array[t]<individuals_array[x].value[y]):
                t = t+1
            interval_division[t-1] = interval_division[t-1]+array[y][t-1]
        individuals_array[x].phenotype = max(interval_division)
    return individuals_array

def make_probability(probability_value):
    probability_value = probability_value*100
    random_value = random.randint(1,100)
    if (random_value<=probability_value):
        return True
    else:
        return False

def make_pair_crossing(individuals_array,pk):
    pair_crossing = []
    while (len(pair_crossing)!=2):
        for i in individuals_array:
            if (len(pair_crossing)==2):
                break
            if (make_probability(pk)==True):
                if (len(pair_crossing)==1)and(pair_crossing[0]==i):
                    continue
                pair_crossing.append(i)
    print(colored("Пара для размножения:", 'green'))
    for w in pair_crossing:
        w.print()
    return pair_crossing

def mutation(pair_result,inteervals_array,array):
    print(colored(("<><><><><><><><><><>"), 'yellow'))
    print(colored("Мутация:", 'green'))
    for individual in pair_result:
        print(colored(("<><><><><><><><><><>"), 'yellow'))
        if (make_probability(pm)==False):
            continue
        else:
            mutation_point = random.randint(0,len(individuals_array)-1)
            print("Элемент на замену:",mutation_point)
            mutation_index = random.randint(0,7)
            print("Разряд для замены:",mutation_index)
            mutation_index2 = random.randint(0,7)
            while (mutation_index==mutation_index2):
                mutation_index2 = random.randint(0,7)
            print("Разряд для замены2:", mutation_index2)
            mutation_element = bin(individual.value[mutation_point]).replace("0b","")
            while(len(mutation_element)!=8):
                mutation_element = "0"+mutation_element
            print("Элемент в двоичной системе исчисления до преобразований:",mutation_element)
            mutation_element_result = ""
            mutation_simvol1 = mutation_element[mutation_index]
            mutation_simvol2 = mutation_element[mutation_index2]
            for q in range(0,len(mutation_element)):
                if ((q==mutation_index)):
                    mutation_element_result = mutation_element_result+mutation_simvol2
                    continue
                elif ((q == mutation_index2)):
                    mutation_element_result = mutation_element_result + mutation_simvol1
                    continue
                else:
                    mutation_element_result = mutation_element_result+mutation_element[q]
            print("Элемент после мутации:", mutation_element_result)
            mutation_element = int(mutation_element_result,base=2)
            (individual.value)[mutation_point] = mutation_element

    print("Пара после мутации:")
    pair_result = make_phenotype(pair_result,intervals_array,array)
    for q in pair_result:
        q.print()
    print(colored(("<><><><><><><><><><>"), 'yellow'))
    return pair_result


def tourney(individuals_array,best_new_individuals):
    generation = []
    generation_phenotype = []
    print(colored(("<><><><><><><><><><>"), 'yellow'))
    print("Отбор")
    print(colored(("<><><><><><><><><><>"), 'yellow'))
    print("Исходное поколение:")
    for i in individuals_array:
        generation.append(i)
        generation_phenotype.append(i.phenotype)
        i.print()
    print(colored(("<><><><><><><><><><>"), 'yellow'))
    print("Новые особи:")
    for j in best_new_individuals:
        generation.append(j)
        generation_phenotype.append(j.phenotype)
        j.print()
    array_sort = selection_sort(generation_phenotype,generation)
    print("\023[34m {}" .format("Результат отбора"))
    individuals_array = array_sort[0:len((individuals_array))]
    for q in individuals_array:
        q.print()
    print(colored(("<><><><><><><><><><>"), 'yellow'))
    return  individuals_array

def reproduction(individuals_array,pk,pm,intervals_array,kpovtor):
    best_individuals_in_generation = []


    while(True):
        best_new_individuals = []
        if (len(best_individuals_in_generation)>=kpovtor):
            phenotypes =[]
            for t in best_individuals_in_generation:
                phenotypes.append(t.phenotype)
            counter = Counter(phenotypes)
            index_dop = phenotypes[-1]
            if (counter[index_dop]==kpovtor):
                break
        for i in individuals_array:
            pair_result = []
            pair_crossing = make_pair_crossing(individuals_array,pk)
            split_point = random.randint(1,len(individuals_array)-1)
            split_point2 = random.randint(1,len(individuals_array)-1)
            while(split_point2==split_point):
                split_point2 = random.randint(1, len(individuals_array) - 1)
            print("Точка разбиения1:",split_point)
            print("Точка разбиения2:", split_point2)
            if (split_point<split_point2):
                p1 = Individual(pair_crossing[0].value[:split_point]+pair_crossing[1].value[split_point:split_point2]+pair_crossing[0].value[split_point2:])
                p2 = Individual(pair_crossing[1].value[:split_point]+pair_crossing[0].value[split_point:split_point2]+pair_crossing[1].value[split_point2:])
            else:
                p1 = Individual(
                    pair_crossing[0].value[:split_point2] + pair_crossing[1].value[split_point2:split_point] +
                    pair_crossing[0].value[split_point:])
                p2 = Individual(
                    pair_crossing[1].value[:split_point2] + pair_crossing[0].value[split_point2:split_point] +
                    pair_crossing[1].value[split_point:])
            pair_result.append(p1)
            pair_result.append(p2)
            pair_result = make_phenotype(pair_result, intervals_array, array_start)
            for i in pair_result:
                i.print()
            pair_result = mutation(pair_result,intervals_array,array_start)
            pair_result = make_phenotype(pair_result,intervals_array,array_start)
            if (pair_result[0].phenotype>pair_result[1].phenotype):
                best_new_individuals.append(pair_result[1])
            else:
                best_new_individuals.append(pair_result[0])
        individuals_array = tourney(individuals_array,best_new_individuals)
        best_individual = individuals_array[0]
        for individual in individuals_array:
            if individual.phenotype<best_individual.phenotype:
                best_individual = individual
        best_individuals_in_generation.append(best_individual)
    print("Лучшие особи в поколениях:")
    for y in best_individuals_in_generation:
        y.print()

# m = int(input("Введите число заданий m "))
# n = int(input("Введите число процессоров n "))
# a = int(input("Введите начало диапазона для заданий "))
# b = int(input("Введите конец диапазона для заданий "))
# pk = float(input("Введите вероятность кроссовера "))
# pm = float(input("Введите вероятность мутации "))
# kpovtor = int(input("Введите количество раз, когда лучшая особь повторяется в поколении "))
# individual_value = int(input("Введите количество особей в начальном поколении "))
m=8
n=4
a=10
b=20
pk=0.89
pm=0.8
kpovtor=4
individual_value=4

array_start = [[random.randint(a,b) for i in range(0,n)] for j in range(0,m)]
print("Массив заданий")
for i in array_start:
    print(i)
print("Границы интервалов")
intervals_array = make_interval_array(n)
print(colored(("<><><><><><><><><><>"), 'yellow'))
individuals_array = make_first_generation(m,individual_value,intervals_array,array_start)
phenotype = make_phenotype(individuals_array,intervals_array,array_start)
reproduction(individuals_array,pk,pm,intervals_array,kpovtor)
