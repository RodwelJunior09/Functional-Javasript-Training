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