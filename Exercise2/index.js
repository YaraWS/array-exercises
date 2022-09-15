let names = ['Anna', 'Bob', 'Victoria']

 



// #1. Adicione outro nome sem usar o método 'push()'
    // names[names.length]= 'Yara'
    // console.log(names)

// 2. Crie uma nova lista com sobrenomes para esses nomes usando a keyword 'new'
    // let newSobrenomes = new Array ('Santos','Silva','Pereira')
    // console.log(newSobrenomes)

// 3. Use o método 'map()' e adicione "My name is " para cada nome
    // const newArr = names.map(function(value){
    //   return "My name is " + value + "."
    // })
    // console.log(newArr)

// 4. Use o método 'map()' e adicione um sobrenome da lista anterior para cada nome do primeiro array
    // NAO SEI
    // const lastName = names.map(x => {
    //   return names + " " + newSobrenomes;
    // })

    // console.log(lastName)
    // const map1 = array1.map(x => x * 2);
    // console.log(lastName)

// 5. Adicione outro nome na posição (não índice) 15
      // names.splice(14,0,'Aurora')
      // console.log(names)


// 6. Escolha um nome e mostre a posição (não índice) dela na lista
  //  console.log(names.indexOf('Bob') + 1)

// 7. Adicione 2 outros dois nomes já existentes com apenas um comando
  // Not sure
  names.push('Bob','Bob')
  console.log(names)

// 8. Use o método 'forEach()' para exibir cada um dos nomes
  //  names.forEach(element => console.log(element));
   

// 9. Encontre a posição do ultimo nome de um dos nomes duplicados
  //  console.log(names.lastIndexOf('Bob'))

// 10. Remova o ultimo item da lista e exiba ele depois
  //  console.log(names.pop())

// 11. Verifique se o nome "John" está na lista
  //  console.log(names.indexOf('John'))
  //  Nao esta na lista pq deu -1

// 12. Remova o quarto nome
//  const removed = names.splice(3,1)
//  console.log(names)

// 13. Crie um nova lista com mais alguns nomes

// const newNames = new Array ('Olivia','Aurora','Elliot','Jack')

// 14. Crie um novo array com a lista nova e a existente utilizando a expressão 'destructuring assignment'
// const combinedNames = [...names,...newNames]
// console.log(combinedNames)

// 15. Adicione um novo nome no final da lista sem usar o método 'push()'
  // names = [...names,'Malu']
  // console.log(names)

// 16. Remova os 2 primeiros nomes com apenas um comando
let removedElements = names.splice(0,2)
console.log(names)
  






