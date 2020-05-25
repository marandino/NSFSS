var completed = document.getElementById("completed");
var forfeit = document.getElementById("forfeit");
var sentence = document.getElementById("sentence");
// var string = sentence.textContent;

completed.addEventListener("click", newString);
    //define the string
var string = ""
//define the noun pool
var nouns = [
    "house",
    "movie",
    "family",
    "shirt",
    "hair",
    "bucket",
    "cat"
]

var pronouns = [
    "my", 
    "your",
    "player 1's",
    "player 2's",
    "player 3's",
    "everyone's"
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
    var n2 = Math.floor(Math.random()*nouns.length);
    var a = Math.floor(Math.random()*articles.length);
   string = pronouns[p] + " " + nouns[n1] + " " + verbs[v] + " " + articles[a] + " " + nouns[n2];
}