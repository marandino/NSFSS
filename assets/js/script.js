var completed = document.getElementById("completed");
var forfeit = document.getElementById("forfeit");
var reset = document.getElementById("reset");
var sentence = document.getElementById("sentence");
var about = document.querySelectorAll(".navbar ul li");

    //define the string
var string = ""
//define the noun pool
var nouns = [
    'a hole', 'a bucket', 'a machine', 'a car', 'a cat', 'your cat', "your girlfriend's cat", "your boyfriend's cat", "your friend's dog", "your mom's car", "your dad's desk", 'a desk', 'your desk', "your doctor's desk", 'your  mom', "your girlfriend's mom", "your boyfriend's dad", "your friend's sister", 'a dog', 'your dog', 'a bird', 'a computer', 'a TV', 'an Epipen', 'your shoes', "a stranger's shoes", 'your shoes', 'your feet', 'your hands', 'your car', "your dad's money", "your neighbor's pockets", 'your couch', 'your therapist', 'a Bible', 'a Christian', 'an Atheist', 'an inordinate amount of beans', 'a bean', 'a bug', 'a scary bug', 'a bear', 'a book', 'a Babadook', 'the bed', "your ex-best friend's bed", 'the couch', 'the chair', 'a kite', 'a string', 'a plate', 'a cup', 'some grapes', 'some peaches', 'your ears', 'your stomach', 'your arms', 'your feet', 'your big toe', "anyone's big toe", 'your butt', "anyone's butt", 'Spaghetti', 'a dress', 'your pants', "a stranger's pants", 'a dog', 'a cat', 'a bird', 'a mouse', 'a house', 'a child', 'a smoothie', 'a slushie', 'a family', 'a woman', 'a man', 'a non-binary person', 'your mouth', 'a guitar', 'a trombone', 'your ex', 'your fingernails', 'your hair', "the closest person's hair", 'a dumb bitch', 'an INCEL', 'Zja Zja Gabor'
]
var pronouns = [
    "my", 
    "your",
    "player 1's",
    "player 2's",
    "player 3's",
    "everyone's"
]

var nouns2 = [
    'a barbie', 'a blanket', "your therapist's office", "your doctor's office", 'the family car', 'the family business', "your brother's hair", 'some pants', 'the moon', 'a cloud', 'the window', 'the door', 'Facebook', 'a lawnchair', 'the pool', 'the lake', 'a river', 'a lamp', 'a sink', 'the shower', 'the toilet', 'a piece of paper', 'a paper clip', "your friend's wallet", 'a toothbrush', 'your medication', 'the shelf', 'a squirrel', 'Youtube', 'an anime girl', 'some christmas lights', 'a ferret', 'the room', 'the park', 'a sitcom', 'the shed', 'the garden', 'the office', 'the computer', 'the living room', 'the kitchen', 'the blender', 'the oven', 'your phone', 'your favorite shirt', 'your favorite family member', 'your least favorite family member', 'a tombstone', 'a graveyard', 'a church', 'the pope', 'a celebrity', 'Kim Kardashian', 'your ex', 'the spa', 'a cop', 'your mom', 'your girlfriend', 'your boyfriend', 'your best friend', 'your friend', 'a cashier', 'the gas station', 'Walmart', 'the street', 'the sidewalk', 'a feather', 'a pen', 'the countertop', "your dog's ear", "your cat's tail", 'the stairs', 'a spider', 'a comb', 'a puppet', 'a suit', 'a holiday card', 'a religion', 'a puzzle', 'a slug', 'the freezer', 'a restaurant', 'a store', 'the closet', 'Discord', 'Reddit'
]

//def. verb pool
var verbs = [
    'Bring', 'Lecture', 'Break', 'Toss', 'Walk', 'Boogie down on', 'Dance on', 'Dance with', 'Get busy with', 'Indoctrinate', 'Climb', 'Fall off of', 'Pretend you murdered', 'Move', 'Jiggle', 'Eat', 'Lick', 'Suck', 'Take apart', 'Fix', 'Color', 'Conceptualize', 'Teach', 'Inspire', 'Fight', 'Kiss', 'Smooch', 'Hug', 'Cuddle', 'Apologize to', 'Slap', 'Kick', 'Reorganize', 'Clean', 'Convert', 'Disorient', 'Confuse', 'Educate', 'Embellish', 'Exchange', 'Booty bump', 'Raise', 'Jump over', 'Jump on top of', 'Wear', 'Try on', 'Caress', 'Balance', 'Dig', 'Move', 'Bring', 'Give', 'Shove', 'Puppeteer ', 'Buy', 'Take', 'Steal', 'Pretend', 'Build', 'Get inside of', 'Get on top of', 'Draw', 'Paint', 'Have an epiphany because of', 'Pretend you just got horrible news regarding', 'Summon a demon with', 'Praise Jesus', 'Put', 'Shoot', 'Sling', 'Peek', 'Throw down with', 'Switch', 'Condescend ', 'Judge', 'Corroborate', 'Sanctify', 'Summon a demon for', 'Stretch', 'Stand on', 'Take', 'Abduct', 'Convince', 'Argue with', 'Drive', 'Turn', 'Decorate', 'Impersonate', ]
// def article pool
var articles = [
    "the",
    "a", //avoid using any noun starting with a vowel
    "my",
    "player 2's"
]
var descriptor = [
    'silently', 'elegantly', 'effortlessly', 'stylishly', 'abhorrently', 'like you mean it', 'like you want it', "like it's going out of style", "like there's a shortage", "like you're dying tomorrow", 'like you forgot why you were doing it', "like you can't stand it", 'dressed like a cat', 'dressed as batman', 'with a smile', 'carefully', 'on top of a cat', 'on top of a dog', 'on top of the house', 'on top of your head', "on top of P3's head", "on top of a stranger's head", "on top of your doctor's head", 'without laughing', 'slyly', 'intelligently', 'quietly', 'deviously', 'surreptitiously ', 'vengefully', 'gleefully', 'violently', 'like a villian', 'maniacally', 'childishly', "like you're a billionaire", 'super fast', 'beautifully', 'condescendingly', 'just cause you can', 'cleverly', 'without touching the ground', 'in the rain', 'softly', 'viciously', 'madly', 'lovingly', 'thoughtfully', 'decoratively', 'somberly', 'while crying', 'without explaining why', 'with your eyes closed', 'like an idiot', 'in mime', 'like a fish', 'like a fox', "like you're happy about it", 'like an asshole', 'because you hate yourself', 'because you love life', 'because you gotta learn somehow', 'at night', 'at lunch', 'after sex', 'on a date', 'rudely', 'politely', 'coyly', 'squishily', "like you're on a cooking show", "like you're a really bad pornstar", "like you're a superhero", "like you know what's good for them", "if you know what's good for you", 'in a costume'
]
var prepositions = [
    'on', 'with', 'on top of', 'inside of', 'around', 'underneath', 'outside of', 'through', 'next to', 'over', 'aboard', 'onto', 'above', 'under', 'among', 'to', 'toward', 'at', 'behind', 'below', 'beneath', 'beside', 'while watching', 'in', 'into', 'near', 'off', 'outside', 'over', 'while eating', 'while holding', 'while wearing', 'while pretending to be', 'with your hand in', 'while fearing', 'while talking about', 'while singing about', 'at', 'at', 'while yelling at', 'while yelling about', 'while staring at', 'while thinking about']
////////////////////////////////


completed.addEventListener("click", newString);

reset.addEventListener("click", newString);




function newString() { 
    //generate new strings
    stringGenerator();
    //replace the text on the website
    sentence.textContent = string;
}


function stringGenerator(){
    var p = Math.floor(Math.random()*pronouns.length);
    var v = Math.floor(Math.random()*verbs.length);
    var n1 = Math.floor(Math.random()*nouns.length);
    var n2 = Math.floor(Math.random()*nouns2.length);
    var a = Math.floor(Math.random()*articles.length);
    var pp = Math.floor(Math.random()*prepositions.length);
    var d = Math.floor(Math.random()*descriptor.length);
   string = verbs[v] + " " + nouns[n1] + " " + prepositions[pp] + " " + nouns2[n2] + " " + descriptor[d];
}

