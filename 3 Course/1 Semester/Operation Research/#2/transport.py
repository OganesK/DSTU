import pulp
import time

def solveTransport(varCount, mainFunc, restrictions):
  start = time.time()
  for i in range(1,varCount+1):
    globals()['x%s' % i] = pulp.LpVariable('x'+str(i), lowBound=0)
  problem = pulp.LpProblem('0', pulp.LpMaximize)
  problem += eval(mainFunc)
  for i in range(len(restrictions)):
    problem += eval(restrictions[i]), str(i)
  problem.solve()
  print ("Результат:")
  for variable in problem.variables():
      print (variable.name, "=", variable.varValue)
  print ("Стоимость доставки:")
  print (abs(pulp.value(problem.objective)))
  stop = time.time()  

#1*x1+4*x2+7*x3+9*x4+1*x5+0*x6+2*x7+3*x8+1*x9+2*x10+4*x11+0*x12+2*x13+1*x14+3*x15+1*x16+4*x17+0*x18

#x1+x2+x3+x4+x5+x6==250
#x7+x8+x9+x10+x11+x12==300
#x13+x14+x15+x16+x17+x18==150
#x1+x7+x13==110
#x3+x9+x15==100
#x5+x11+x17==70
#x2+x8+x14==80
#x4+x10+x16==90
#x6+x12+x18==250