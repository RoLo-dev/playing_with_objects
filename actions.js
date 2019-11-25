var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];

var john = users.find(function(obj){
    return obj.name == 'John';
})
console.log(john.age);

console.log(users[0].name);

for(let i = 0; i < users.length; i++){
    console.log(users[i].name + " - " + users[i].age);
}


