fetch('url')
.then(res => res.json())
.then(data =>console.log(data))

//json
const person={
    name: 'abuol',
    age: 34
}
// JSON convert back and forth
console.log(JSON.stringify(person))
// local storage
localStorage.setItem('userId,234')
const useeId = localStorage.getItem('userId');
console.log(useeId)