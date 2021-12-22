import scala.io.StdIn

sealed trait Position
{
	var salary :Int
}
case object Programmer extends Position {
	override var salary: Int = 60000
}
case object Designer extends Position {
	override var salary: Int = 30000
}
case object TeamLead extends Position {
	override var salary: Int = 100000
}

class Employee(name :String, age :Int, position: Position)
{
	def getName(): String =
	{
		name
	}

	def getAge(): Int = {
		{
			age
		}
	}

	def getPost(): Position = {
		{
			position
		}
	}
	def getSalary(): Int = {
		{
			position.salary
		}
	}
}


object Main extends App
{
	var employeeProg = new Employee("Alex",28,position = Programmer)
	var employeeDesign = new Employee("John",23,position = Designer)
	var employeeTeamLead = new Employee("Jacob",35,position = TeamLead)


	print("Employee name: ")
	var employee :String = StdIn.readLine()
	employee match {
		case "Alex" => println(employeeProg.getSalary())
		case _ => employeeDesign.getName() match {
			case "John" => println(employeeDesign.getSalary())
			case _ => employeeTeamLead.getName() match {
				case "Jacob" => println(employeeTeamLead.getSalary())
				case _ => println("Employee not found")
			}
		}
	}
	// Выбор должности у одного объекта в зависимости от результата выбора в match case?
}
