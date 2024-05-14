const fruits = ['Apple', 'Orange', 'Grapes'];
fruits.forEach((fruit, index)=> {
	console.log(fruit);
});

// fruits.forEach((fruit,index)=> console.log(fruit));

// const singleFruit=fruits.map((fruits)=> fruits.slice(0));
// console.log(singleFruit);

// const singleFruit1=fruits.map((fruits)=> fruits.slice(0).toUpperCase());
// console.log(singleFruit1);

const people = [
	{id:1,name:'ABC'},
	{id:2,name:'XYZ'},
	{id:3,name:'LMN'}
];

const people2 = people.filter(person=>person.id!=2);
console.log(people2);

class Person {
	constructor(name, age) {
		console.log('ran');
		this.name=name;
		this.age=age;
	}
	
	greet() {
		return `Hello, my name is ${this.name} and iam ${this.age}`;
	}
}

const person1=new Person('abc', 33);
const person2=new Person('xyz', 28);

console.log(person1.name);
console.log(person2.name);

console.log(person1.age);
console.log(person2.age);

console.log(person1.greet());
console.log(person2.greet());


class Customer extends Person {
	constructor(name, age, balance) {
		super(name, age);
		this.balance=balance;
	}
	
	info() {
		return `${this.name} owes $${this.balance}.00`;
	}
}

const customer1=new Customer('ABC', 21, 300);
const customer2=new Customer('xyz',34,344)
console.log(customer1.info());
console.log(customer2.info());