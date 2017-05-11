var Basic = require("./BasicCard.js");
var Cloze = require("./ClozeCard.js");
var request = require('request')
var clozeArray = [];
var basicArray = [];

Cloze.prototype.addToArray = function(){
	clozeArray.push(this);
}

var clozeQ0 = new Cloze ("The term 'astronaut' comes from Greek words that mean star and sailor.", "sailor");
var clozeQ1 = new Cloze ("The beagle Brigade, used in 21 international airports in the U.S., keeps a yearly average of 75,000 illegal items out of the country.", "beagle");
var clozeQ2 = new Cloze ("The TV remote is the dirtiest item in a typical household, hospital, or hotel room.", "TV remote");
var clozeQ3 = new Cloze ("The Australian billygoat plum can contain up to 100 times more vitamin C than an orange", "100");
var clozeQ4 = new Cloze ("The largest desert in the world, the Sahara, is 3,500,000 square miles.", "Sahara");
var clozeQ5 = new Cloze ("There is a basketball court on the top floor of the U.S. Supreme Court Building known as the 'highest court in the land.'", "basketball");
var clozeQ6 = new Cloze ("If our Sun were just inch in diameter, the nearest star would be 445 miles away", "445");
var clozeQ7 = new Cloze ("Maine is the closest U.S. state to Africa.", "Maine");
clozeQ0.addToArray();
clozeQ1.addToArray();
clozeQ2.addToArray();
clozeQ3.addToArray();
clozeQ4.addToArray();
clozeQ5.addToArray();
clozeQ6.addToArray();
clozeQ7.addToArray();


// var greek1 = new Basic ("Talos, the mythical giant bronze man, was the protector of which island?", "Crete")
// var greek2 = new Basic ("Who was the only god from Greece who did not get a name change in Rome", "Apollo")
// var greek3 = new Basic ("This Greek mythological figure is the god/goddess of battle strategy (among other things).", "Athena")
// greek1.addToArray()
// greek2.addToArray()
// greek3.addToArray()




module.exports.clozeArray = clozeArray;
