const AvlTree = require('./AVL_TREE');
var treeify = require('treeify');
var fs = require('fs');
const readlineSync = require("readline-sync");

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

const prettierPrint = (tree) => {
  let stringJSONTree = JSON.stringify(tree, getCircularReplacer(), 2);
  stringJSONTree = stringJSONTree.replace(/"left": null,/g, '');
  stringJSONTree = stringJSONTree.replace(/"meta": {}/g, '');
  stringJSONTree = stringJSONTree.replace(/"meta": {},/g, '');
  stringJSONTree = stringJSONTree.replace(/"right": null,/g, '')
  stringJSONTree = stringJSONTree.replace(/"parent": null/g, '')
  stringJSONTree = stringJSONTree.replace(',}', '}', 'g')
  stringJSONTree = stringJSONTree.replace(/\n/g, '')
  stringJSONTree = stringJSONTree.replace(/"size": 7/g, '')
  stringJSONTree = stringJSONTree.replace(/\s/g, '');
  stringJSONTree = stringJSONTree.replace(/,}/g,'}')
  stringJSONTree = stringJSONTree.replace(',}', '}', 'g')
  stringJSONTree = stringJSONTree.replace(/,,,/g,',')
  stringJSONTree = stringJSONTree.replace(/,,/g,',')
  console.log(treeify.asTree(JSON.parse(stringJSONTree), true))
}

const testMenu = () => {
  let choice = new Number;
  let tree = new AvlTree();
  let values = new Number;
  let deletevValue = new Number;
  let searchValue = new Number;
  let searchedValue;
  while(choice !== 0){
    console.log("1.Пример №1(1,2,3,10,25,8,41,7,13,5) \n2.Вывести дерево \n3.Ввести числа с консоли  \n4.Удалить  \n5.Поиск \n6.Очистить \n0.Выход")
    choice = Number(readlineSync.question('Меню: '));
    switch(choice){
      case 1:
        console.clear();
        const values = [1,2,3,10,25,8,41,7,13,5]
        values.map(val => {
          tree.add(Number(val))
          console.log(`ДОБАВЛЯЕМ ЭЛЕМЕНТ ${val}`)
          prettierPrint(tree)
        })
        break
      case 2:
        console.clear();
        prettierPrint(tree);
        break;
      case 3:
        const rawValues = readlineSync.question('Введите числа через запятую: ');
        const inputValues = rawValues.split(',')
        inputValues.map(val => {
          tree.add(Number(val))
          console.log(`ДОБАВЛЯЕМ ЭЛЕМЕНТ ${val}`)
          prettierPrint(tree)
        })
        break
      case 4:
        console.clear();
        console.log('Дерево до удаления: ')
        prettierPrint(tree);
        deletevValue = Number(readlineSync.question('Введите число, которое необходимо удалить: '));
        tree.remove(deletevValue);
        console.log('Дерево после удаления: ')
        prettierPrint(tree);
        break
      case 5:
        console.clear();
        searchValue = Number(readlineSync.question('Введите число, которое необходимо найти: '));
        searchedValue = tree.get(searchValue);
        if(searchedValue === null){
          console.log('Такого числа нет в дереве.')
        }else{
          prettierPrint(searchedValue)
        }
        break
    }
  }
}

testMenu();
