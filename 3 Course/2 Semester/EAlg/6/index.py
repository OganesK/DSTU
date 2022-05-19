import random
import math
from collections import Counter
from termcolor import colored


class Individual():
  def __init__(self,value):
    self.value = value;
    self.phenotype = -1;

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

def make_first_generation(m,individual_value):
    individuals_array = []
    for i in range(0,individual_value):
        individual = Individual([random.randint(0, 255) for i in range(0, m)])
        individuals_array.append(individual)
    print(colored("Первое поколение:", 'green'))
    for q in individuals_array:
        print(q.value)
    print(colored(("<><><><><><><><><><>"), 'yellow'))

    return individuals_array

def make_phenotype(individuals_array,intervals_array,array):
    print(colored("Полученые фенотипы:", 'green'))
    for x in range(len(individuals_array)):
        interval_division = [0 for i in range(0, len(intervals_array)-1)]
        for y in range((len(individuals_array[x].value))):
            t = 0
            while (intervals_array[t]<individuals_array[x].value[y]):
                t = t+1
            interval_division[t-1] = interval_division[t-1]+array[y]
        individuals_array[x].phenotype = max(interval_division)
    for i in individuals_array:
        i.print()
    print(colored(("<><><><><><><><><><>"), 'yellow'))

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
    print(colored("Пара:", 'green'))
    for w in pair_crossing:
        w.print()
    return pair_crossing

def mutation(pair_result):
    print(colored(("<><><><><><><><><><>"), 'yellow'))

    print(colored(("Мутация"), 'green'))
    for individual in pair_result:
        print(colored(("<><><><><><><><><><>"), 'yellow'))

        if (make_probability(pm)==False):
            continue
        else:
            mutation_point = random.randint(0,len(individuals_array)-1)
            print(colored(("Индекс мутированного элемента",mutation_point), 'green'))
            mutation_index = random.randint(0,7)
            print(colored(("Разряд, для инверсии(с 0):",mutation_index), 'green'))
            mutation_element = bin(individual.value[mutation_point]).replace("0b","")
            while(len(mutation_element)!=8):
                mutation_element = "0"+mutation_element
            print(colored(("Элемент в двоичной системе исчисления:",mutation_element), 'green'))
            mutation_element_result = ""
            for q in range(0,len(mutation_element)):
                if ((q==mutation_index)and(mutation_element[q]=="0")):
                    mutation_element_result = mutation_element_result+"1"
                    continue
                elif ((q == mutation_index) and (mutation_element[q] == "1")):
                    mutation_element_result = mutation_element_result + "0"
                    continue
                else:
                    mutation_element_result = mutation_element_result+mutation_element[q]
            print(colored(("Элемент после мутации:", mutation_element_result), 'green'))
            mutation_element = int(mutation_element_result,base=2)
            (individual.value)[mutation_point] = mutation_element
    print(colored(("Пара после мутации:"), 'green'))
    for q in pair_result:
        q.print()
    return pair_result

def tourney(individuals_array,best_new_individuals):
    print(colored(("<><><><><><><><><><>"), 'yellow'))

    print(colored(("Турнир"), 'green'))
    print(colored(("<><><><><><><><><><>"), 'yellow'))

    print(colored(("Исходное поколение:"), 'green'))
    for i in individuals_array:
        i.print()
    print(colored(("<><><><><><><><><><>"), 'yellow'))

    print(colored(("Новые особи:"), 'green'))
    for j in best_new_individuals:
        j.print()
    for x in range(0,len(individuals_array)):
        if (individuals_array[x].phenotype>best_new_individuals[x].phenotype):
            individuals_array[x]=best_new_individuals[x]
    print(colored(("Результат турнира:"), 'green'))
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
            print(colored(("Точка разбиения:",split_point), 'green'))
            p1 = Individual(pair_crossing[0].value[:split_point]+pair_crossing[1].value[split_point:])
            p2 = Individual(pair_crossing[1].value[:split_point]+pair_crossing[0].value[split_point:])
            print(p1.value)
            print(p2.value)
            pair_result.append(p1)
            pair_result.append(p2)
            pair_result = make_phenotype(pair_result, intervals_array, array_start)
            pair_result = mutation(pair_result)
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
    print(colored(("Лучшие особи в поколениях:"), 'green'))
    for y in best_individuals_in_generation:
        y.print()

m = int(input("Введите число заданий m "))
n = int(input("Введите число процессоров n "))
a = int(input("Введите начало диапазона для заданий "))
b = int(input("Введите конец диапазона для заданий "))
pk = float(input("Введите вероятность кроссовера "))
pm = float(input("Введите вероятность мутации "))
kpovtor = int(input("Введите количество раз, когда лучшая особь повторяется в поколении "))
individual_value = int(input("Введите количество особей в начальном поколении "))
# m = 8
# n = 3
# a = 10
# b = 20
# pk = 0.89
# pm = 0.4
# kpovtor = 4
# individual_value = 3

array_start = [random.randint(a, b) for i in range(0, m)]
print(colored(("Массив заданий"), 'green'))
print(array_start)
print(colored(("Границы интервалов"), 'green'))
intervals_array = make_interval_array(n)
print(colored(("<><><><><><><><><><>"), 'yellow'))

individuals_array = make_first_generation(m,individual_value)
phenotype = make_phenotype(individuals_array,intervals_array,array_start)
reproduction(individuals_array,pk,pm,intervals_array,kpovtor)