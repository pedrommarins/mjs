var person = {
    age: 17,
    name: 'Pedro'
}

// função pura (não altera o objeto inicial)
function getRemainingYearsToMajority(person){
    return 18 - person.age
}

// função impura (altera o objeto inicial e gera efeitos colaterais)
function increasePersonAge(person){
    person.age = person.age + 1
}

//chamada do método impuro
increasePersonAge(person)


var remainingYears = getRemainingYearsToMajority(person)

console.log(remainingYears)