#!/usr/bin/python
# -*- coding: utf-8 -*-
import scipy
import numpy
from scipy.optimize import linprog
import warnings
warnings.filterwarnings('ignore')



def testMenu():
  choice = 123
  while choice != 0:
    choice = int(input('1-пример(9 вариант).\n2-ввести задачу.\n0-выход\nПункт меню: '))
    if choice == 1:
      A_ub = [[6,2], 
               [4,3],
              [3,4]] 
      c=[600,520,600] 
      b_ub = [-6,-3]
      A_ub_T = scipy.transpose(A_ub) * (-1)
      d=linprog(c, A_ub_T, b_ub)
      print('Значение функции: ', d['fun'].round(2))
      print('Текущий план: ', d['x'])
    elif choice == 2:
      a = int(input('Введите кол-во переменных: '))
      b = int(input('Введите кол-во ограничений: '))
      values = numpy.array(list(map(int, input('Введите матрицу коэффициентов через запятую: ').split(','))))
      A_ub = values.reshape((b,a))
      cValues = numpy.array(list(map(int, input('Введите матрицу ограничений через запятую: ').split(','))))
      bValues = numpy.array(list(map(int, input('Введите прибыль через запятую: ').split(',')))) * (-1)
      A_ub_T = scipy.transpose(A_ub) * (-1)
      d=linprog(cValues, A_ub_T, bValues)
      print('Значение функции: ', d['fun'].round(2))
      print('Текущий план: ', d['x'])
testMenu()