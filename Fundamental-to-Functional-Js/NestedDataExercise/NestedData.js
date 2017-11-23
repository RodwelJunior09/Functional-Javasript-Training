//Objects Exercise 

var animal = {};
animal.username = "Cow";
animal["tagline"] = "Yippie!";
var noises = [];
animal["noises"] = noises;
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

//Array Exercise
var noiseArray = ["Quack"];
noiseArray.push("Lol");
noiseArray.unshift("Hello");

noiseArray[3] = "Numbers";

animal.noises = noiseArray;

var animals = [];
animals.push(animal);

var quakers = { username: 'DaffyDuck', tagline: 'Yippeee!', noises: ['quack', 'honk', 'sneeze', 'growl'] }
animals[1] = quakers;

var another = {username: "Mr Rabit", tagline: "What's wrong buddy", noises: ['hahaha', 'So..', 'None']}
animals.push(another);

var anotherOne = {username: "Mr Cocodrile", tagline: "This is it", noises: ['Heehehe', 'Finish Him', 'Crush Him']}
animals.push(anotherOne);


//Functions Exercise

function AnimalTestUser(name_user) {
    if (arguments.length == 1) {
        return {'username': name_user}
    } 
    if (arguments.length > 1) {
        let Other = [];
        var username = Array.prototype.shift.call(arguments);
        for (let index = 0; index < arguments.length; index++) {
            Other.push(arguments[index]);
        }
        return {'username': username, 'OtherArgs': Other }
    }
}

function AnimalCreator(username, species, tagline, noises) {
    return {
        'username': username,
        'species': species,
        'tagline': tagline,
        'noises': noises,
        'friends': []
    }
}

function addFriend(first, second){
    first.friends.push(second.username);
    // console.log(first);
}

function addMatchesArray(collection){
    for (let index = 0; index < collection.length; index++) {
        collection[index].Matches = []
    }
    // console.log(collection);
}

function giveMatches(collection){
    for (let index = 0; index < collection.length; index++) {
        collection[index].Matches.push(collection[index].friends[0]);
    }
    // console.log(collection);
}

// console.log(AnimalTestUser('Coldplay'));
// console.log(AnimalTestUser('Coldplay', {'loves dancing': true}, [1,2,3]));

var Coco = AnimalCreator('Coco01', 'Cocodrile', 'Do not do that', ['Bahh', 'Nooo', 'Hahaha']);
var Cow = AnimalCreator('Cow09', 'Sheep', 'Like that', ['Bahhh', 'Arrg', 'Cheewcheww']);
var Sheep = AnimalCreator('Sheep21', 'Sheep', 'How to know !', ['Hello', 'Wow are you?']);
var MyFarm = [Coco, Cow, Sheep];

addFriend(Cow, Sheep);
addFriend(Cow, Coco);

addFriend(Coco, Sheep);
addFriend(Coco, Cow);

addFriend(Sheep, Coco);
addFriend(Sheep, Cow);

addMatchesArray(MyFarm);
giveMatches(MyFarm);

//Nested Data Exercise 

var friends = [];

friends.push(animals[0].username, animals[1].username);

var relationship = {};

relationship.friends = friends;

matches = [];

relationship.matches = matches;

relationship.matches.push("User10");

// console.log(relationship);

for (let index = 0; index < animals.length; index++) {
    animals[index].relationships = relationship;
}

console.log(animals);