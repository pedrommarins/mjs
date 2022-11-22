var person1 = {
    name: 'Joao',
    age:21
}

var person2 = {
name: 'Paulo',
age:25
}

var person3 = {
    name: 'Silas',
    age:18
}

var list = [person1, person2, person3]

console.log(list)

for(var person of list){
    console.log(person)
}
