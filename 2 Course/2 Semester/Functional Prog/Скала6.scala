//Написать замыкание, каждый вызов которого будет генерировать случайные числа от 1 до 10, но так,
//чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
//Если цифры закончились, то вернуть 0.

object rand extends App {

  def foo(): () => Any = {
    val rnd = new scala.util.Random
    var s = Set[Int]()
    var l = List(1, 2, 3, 4, 5,6,7,8,9,10)


    def f1(): Any = {
      if (s.size == l.length){
        return "Все, я устал"
      }
      var u = 0
      var p = rnd.nextInt(l.size)
      while (s.contains(p)) {
        p = rnd.nextInt(l.size)
      }
      s += p
      p
    }
    f1
  }

  var k = foo()
  println(k())
  println(k())
  println(k())
  println(k())
  println(k())
  println(k())
  println(k())
  println(k())
  println(k())
  println(k())
  println(k())
}
