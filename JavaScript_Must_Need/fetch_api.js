fetch('url')
.then(res => res.json())
.then(data =>console.log(data))

//json
const person={
    name: 'abuol',
    age: 34
}

console.log(JSON.stringify(person))
