
import scala.collection.mutable.ListBuffer
import scala.math._

trait addElem extends list with delElem with printList
{
	def addElem(elem: Double): Unit = {
		listTmp = listTmp :+ elem;
	}
}
trait delElem extends list
{
	def delElem(index: Int): Unit = {
		var newListTmp = ListBuffer[Double]();
		for (i <- 0 to listTmp.length-1) {
			{
				if (i != index)
				{
					newListTmp = newListTmp:+(listTmp(i))
				}
			}
		}
		listTmp = newListTmp;
	}
}
trait printList extends list
{
	def printList(): Unit = {
		for (i <- listTmp)
		{
			print(i+" ");
		}
	}
}

trait instert extends list
{
	def insertEmel(index :Int,elem: Double): Unit = {
		var newListTmp = ListBuffer[Double]();
		for (i <- 0 to listTmp.length-1) {
			{
				newListTmp = newListTmp:+(listTmp(i))
				if (i == index-1)
				{
					newListTmp = newListTmp:+elem;
				}
			}
		}
		listTmp = newListTmp;
	}
}
trait SortIns extends list
{
	def SortInsert(): Unit = {
		for (i <- 1 until listTmp.length)
		{
			val item = listTmp(i)
			var iHole = i
			while (iHole > 0 && listTmp(iHole - 1) > item) {
				listTmp(iHole) = listTmp(iHole - 1)
				iHole = iHole - 1
			}
			listTmp(iHole) = item
		}
		for (i <- listTmp)
		{
			println(i);
		}
	}
}
trait Sort extends list
{
	def Sort(): Unit = {
		var x :Double = 0;
		for(i<- 1 to listTmp.length-1)
		{
			for (j <- (i - 1) to 0 by -1) {
				if (listTmp(j) > listTmp(j + 1)) {
					val temp = listTmp(j + 1)
					listTmp(j + 1) = listTmp(j)
					listTmp(j) = temp
				}
			}
		}
		for (i <- listTmp)
		{
			println(i);
		}
	}
}


trait power2
{
	def pow2(number: Double): Double = return pow(number,0.5);
}
trait power3
{
	def pow3(number: Double): Double = {
		return ceil(pow(number,0.3))
	}
}
trait power4
{
	def pow4(number: Double): Double = return pow(number,0.25);
}
trait power5
{
	def pow5(number: Double): Double = return pow(number,0.2);
}

trait list
{
	var listTmp = new ListBuffer[Double];
}

trait values
{
	var a :Int;
	var b :Int;

}
trait sum extends values with mul with midValue
{
	def sum2 () :Unit
	println(a+b)
}
trait mul extends values
{
	def mul () :Unit
	println(a*b)
}
trait midValue extends values
{
	def mid () :Unit
	println((a+b)/2)
}

object laba3 {
	def main(args: Array[String]): Unit =
	{
		var addElem = new addElem {};
		addElem.listTmp = ListBuffer(1,2,3,4)
		addElem.addElem(55);
		for (i<- addElem.listTmp) {
			{
				print(i + " ")
			}
		}
		println();
		addElem.delElem(0);
		println();
		addElem.printList();
		var sum = new sum {
			override var a: Int = 2;
			override var b: Int = 2;
		}
		println();
		sum.sum2();
		sum.mid();
		sum.mul();
	}
}


