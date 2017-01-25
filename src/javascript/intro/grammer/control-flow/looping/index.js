for(var i = 0; i <= 10; i += 1){
console.log(i);
};

const people = ['Bob', 'Billy', 'Aaron', 'Jimmy', 'Gerald'];
people.forEach(p => console.log(p));

for(let p of people) {
    console.log(p);
}

const person = { name: 'Bob', age: 25, isHappy: true };

for(let p in person) {
    console.log(p);
}