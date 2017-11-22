var animal = {};
animal.username = "Cow";
console.log(animal);
animal["tagline"] = "Yippie!";
console.log(animal);
var noises = [];
animal["noises"] = noises;
console.log(animal);
var count = 0;
for (key in animal) {
	count++;
	if (key === "username") {
		console.log("Hi My Name is " + animal.username);
	}
	if (key === "tagline") {
		console.log("I like to say " + animal.tagline);
	}
}
var noiseArray = ["Quack"];
noiseArray.push("Lol");
console.log(noiseArray);
noiseArray.unshift("Hello");
console.log(noiseArray);

noiseArray[3] = "Numbers";
console.log(noiseArray);

animal.noises = noiseArray;
console.log(animal);

var animals = [];
animals.push(animal);

var quakers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
animals[1] = quakers;

var another = {username: "Mr Rabit", tagline: "What's wrong buddy", noises: ['hahaha', 'So..', 'None']}
animals.push(another);

var anotherOne = {username: "Mr Cocodrile", tagline: "This is it", noises: ['Heehehe', 'Finish Him', 'Crush Him']}
animals.push(anotherOne);

console.log(animals);
