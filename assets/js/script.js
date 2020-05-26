//BUTTONS
var completed = document.getElementById('completed');
var forfeit = document.getElementById('forfeit');
var reset = document.getElementById('reset');
var back = document.getElementById('back');
var navbar = document.querySelectorAll('.navbar ul li');
//PAGE ELEMENTS
var background = document.querySelector('body');
var navContainer = document.querySelector('.navbar');
var sentence = document.getElementById('sentence');
var container = document.querySelector('.container');
var custom = document.querySelector('#custom');
var about = document.querySelector('#about');
var rules = document.getElementById('rules');
var pages = [ about, rules, custom, container ];
//COLORS
var red = '#bf211eff';
var black = '#001011ff';
var yell = '#fde74cff';
var blue = '#46b1c9ff';
var pink = ' #f00699ff ';

//define the string
var string = '';
//define the noun pool
var nouns = [
	'a hole',
	'a bucket',
	'a machine',
	'a car',
	'a cat',
	'your cat',
	"your girlfriend's cat",
	"your boyfriend's cat",
	"your friend's dog",
	"your mom's car",
	"your dad's desk",
	'a desk',
	'your desk',
	"your doctor's desk",
	'your  mom',
	"your girlfriend's mom",
	"your boyfriend's dad",
	"your friend's sister",
	'a dog',
	'your dog',
	'a bird',
	'a computer',
	'a TV',
	'an Epipen',
	'your shoes',
	"a stranger's shoes",
	'your shoes',
	'your feet',
	'your hands',
	'your car',
	"your dad's money",
	"your neighbor's pockets",
	'your couch',
	'your therapist',
	'a Bible',
	'a Christian',
	'an Atheist',
	'an inordinate amount of beans',
	'a bean',
	'a bug',
	'a scary bug',
	'a bear',
	'a book',
	'a Babadook',
	'the bed',
	"your ex-best friend's bed",
	'the couch',
	'the chair',
	'a kite',
	'a string',
	'a plate',
	'a cup',
	'some grapes',
	'some peaches',
	'your ears',
	'your stomach',
	'your arms',
	'your feet',
	'your big toe',
	"anyone's big toe",
	'your butt',
	"anyone's butt",
	'Spaghetti',
	'a dress',
	'your pants',
	"a stranger's pants",
	'a dog',
	'a cat',
	'a bird',
	'a mouse',
	'your relationship',
	'a child',
	'a smoothie',
	'a slushie',
	'a family',
	'a woman',
	'a man',
	'a non-binary person',
	'your mouth',
	'a guitar',
	'a trombone',
	'your ex',
	'your fingernails',
	'your hair',
	"someone else's hair",
	'a dumb bitch',
	'an INCEL',
	'a regret',
	'5 coins',
	"your boyfriend's belly button",
	"someone's belly button",
	'your underwear',
	"someone else's underwear",
	"someone else's opinion",
	'your opinion',
	'a hat',
	'a BIG hat',
	'a tree',
	'your therapist',
	'too many cats',
	'a bunch of jars',
	'a sock',
	'a sockpuppet',
	'your keys',
	'a cactus',
	'a box',
	'a scooter',
	'an angry guy',
	'a rock',
	'a tomato plant',
	'some toilet paper',
	'a windchime',
	'a pretty girl',
	'some muffins',
	'a toad',
	'a single hair',
	'a mask',
	'some lotion',
	'your search history',
	'a chicken ',
	'a puddle',
	'100 reasons',
	'a tampon',
	'a picture',
	'some eyeliner',
	'some lipstick',
	'a Q-tip',
	'a handful of shaving cream',
	'the juices',
	'the trash',
	'a balloon',
	'the radio',
	'a pot',
	'a pan',
	'your bones',
	'your boss',
	'all your pets',
	'a can of soup'
];
var pronouns = [ 'my', 'your', "player 1's", "player 2's", "player 3's", "everyone's" ];

var nouns2 = [
	'a barbie',
	'a blanket',
	"your therapist's office",
	"your doctor's office",
	'the family car',
	'a circle',
	"your brother's hair",
	'some pants',
	'the moon',
	'a cloud',
	'the window',
	'the door',
	'Facebook',
	'a lawnchair',
	'the pool',
	'the lake',
	'a river',
	'a lamp',
	'a sink',
	'the shower',
	'the toilet',
	'a piece of paper',
	'a paper clip',
	"your friend's wallet",
	'a toothbrush',
	'your medication',
	'the shelf',
	'a squirrel',
	'Youtube',
	'an anime girl',
	'your favorite cartoon character',
	'your highschool crush',
	'some christmas lights',
	'a ferret',
	'the room',
	'the park',
	'a sitcom',
	'the shed',
	'the garden',
	'the office',
	'the computer',
	'the living room',
	'the kitchen',
	'the blender',
	'the oven',
	'your phone',
	'your favorite shirt',
	'your favorite family member',
	'your least favorite family member',
	'a tombstone',
	'a graveyard',
	'a church',
	'the pope',
	'a celebrity',
	'Kim Kardashian',
	'your ex',
	'the spa',
	'a cop',
	'your mom',
	'your girlfriend',
	'your boyfriend',
	'your best friend',
	'your friend',
	'a cashier',
	'the gas station',
	'Walmart',
	'the street',
	'the sidewalk',
	'a feather',
	'a pen',
	'the countertop',
	"your dog's ear",
	"your cat's tail",
	'the stairs',
	'a spider',
	'a comb',
	'a puppet',
	'a suit',
	'a holiday card',
	'a religion',
	'a puzzle',
	'a slug',
	'the freezer',
	'a restaurant',
	'a store',
	'the closet',
	'Discord',
	'Reddit',
	'a plan to take over the world',
	'a bad joke',
	'a videogame',
	'the DMV',
	'a parking lot',
	"your girlfriend's house",
	"your boyfriend's house",
	"your friend's lawn",
	'the backseat',
	'the classroom',
	'all of your socks',
	'Donald Trump',
	'all the cats in the neighborhood',
	'Napoleon',
	'The Antichrist',
	'the dogs of hell',
	'in a supermarket',
	'Tupac',
	'a skunk',
	'a possum',
	'a rock',
	'a bell',
	'Kim Jung Un',
	'a tattoo artist',
	'religion',
	'your childhood',
	'a headache',
	'a skeleton',
	'taxes',
	'your death',
	'this game',
	'your backyard',
	'a backrub',
	'a snail',
	'a dad',
	'a bush',
	'a hairbrush',
	'a slab of meat',
	'a pentagram',
	'a nugget',
	'a frog'
];

//def. verb pool
var verbs = [
	'Bring',
	'Lecture',
	'Break',
	'Toss',
	'Walk',
	'Boogie down on',
	'Dance on',
	'Dance with',
	'Get busy with',
	'Indoctrinate',
	'Climb',
	'Fall off of',
	'Pretend you murdered',
	'Move',
	'Jiggle',
	'Eat',
	'Lick',
	'Suck',
	'Take apart',
	'Fix',
	'Color',
	'Conceptualize',
	'Teach',
	'Inspire',
	'Fight',
	'Kiss',
	'Smooch',
	'Hug',
	'Cuddle',
	'Apologize to',
	'Slap',
	'Kick',
	'Reorganize',
	'Clean',
	'Convert',
	'Disorient',
	'Confuse',
	'Educate',
	'Embellish',
	'Exchange',
	'Booty bump',
	'Raise',
	'Bury',
	'Jump on',
	'Wear',
	'Try on',
	'Caress',
	'Balance',
	'Dig',
	'Move',
	'Bring',
	'Give',
	'Shove',
	'Puppeteer ',
	'Buy',
	'Take',
	'Steal',
	'Pretend',
	'Build',
	'Get inside of',
	'Get on top of',
	'Draw',
	'Paint',
	'Have an epiphany because of',
	'Pretend you just got horrible news regarding',
	'Summon a demon with',
	'Praise Jesus for',
	'Put',
	'Shoot',
	'Sling',
	'Peek',
	'Throw down with',
	'Switch',
	'Condescend ',
	'Judge',
	'Corroborate',
	'Sanctify',
	'Summon a demon for',
	'Stretch',
	'Stand on',
	'Take',
	'Abduct',
	'Convince',
	'Argue with',
	'Drive',
	'Turn',
	'Decorate',
	'Impersonate',
	'Argue for ',
	'Try to find',
	'Race',
	'Bake',
	'Put',
	'Place',
	'Slide',
	'Rub',
	'Be honest about',
	'Draw',
	'Analyze',
	'Explain',
	'Call',
	'Chew',
	'Munch',
	'Talk like',
	'Act like',
	'Boop',
	'Dig',
	'Video',
	'Take a picture of',
	'Doodle',
	'Sing',
	'Spin',
	'Vibrate',
	'Make',
	'Twiddle',
	'Become',
	'Aim',
	'Gangsta lean to',
	'Harrass',
	'Incorporate',
	'Traumatize',
	'Give',
	'Rub',
	'Invoke',
	'Paddle',
	'Pretend to be',
	'Carry'
];
// def article pool
var articles = [
	'the',
	'a', //avoid using any noun starting with a vowel
	'my',
	"player 2's"
];
var descriptor = [
	'silently',
	'elegantly',
	'without you knowing about it',
	'stylishly',
	'and make it look effortless',
	'like you mean it',
	'like you want it',
	"like it's going out of style",
	"like there's a shortage",
	"like you're dying tomorrow",
	'like you forgot why you were doing it',
	"like you can't stand it",
	'dressed like a cat',
	'dressed as batman',
	'with a smile',
	'carefully',
	'over a hole',
	'over a bowl',
	'and then write a haiku about it',
	'while describing your search history',
	'while describing your bowel movements',
	'while explaining your favorite movie',
	'then take off your pants',
	'without laughing',
	'slyly',
	'intelligently',
	'quietly',
	'deviously',
	'surreptitiously ',
	'vengefully',
	'gleefully',
	'violently',
	'like a villian',
	'maniacally',
	'instead of doing something useful',
	"like you're a billionaire",
	'super fast',
	"like you're a ballerina",
	'condescendingly',
	'just cause you can',
	"like you're an ice dancer",
	'without touching the ground',
	'in the rain',
	'softly',
	'viciously',
	'madly',
	'lovingly',
	'thoughtfully',
	'decoratively',
	'somberly',
	'while crying',
	'without explaining why',
	'with your eyes closed',
	'like an idiot',
	'in mime',
	"like you're a fish",
	'like a fox',
	"like you're happy about it",
	'like an asshole',
	'because you hate yourself',
	'because you love life',
	'because you gotta learn somehow',
	'at night',
	'at lunch',
	'after sex',
	'on a date',
	'rudely',
	'politely',
	'coyly',
	'squishily',
	"like you're on a cooking show",
	"like you're a really bad pornstar",
	"like you're a superhero",
	"like you know what's good for them",
	"if you know what's good for you",
	'in any halloween costume',
	'like you’re hotter than a two dollar pistol',
	'like you’re hungry as a wet dog in a meathouse',
	'while running around like a chicken with its head cut off',
	'like the house is burning down',
	'sluggishly',
	"like you're doing them a favor",
	'in an outfit Lady GaGa would envy',
	"then say, 'yeehaw!'",
	'like a cowboy',
	'like a redneck',
	'like a hipster',
	'like your mind was just blown',
	'and then do the macarena',
	"like you're Vlad the Impaler",
	"and say ten Hail Mary's",
	'and then do the hand-jive',
	'and then do the charleston',
	'and then do the twist',
	'while moonwalking',
	'tenderly',
	'and then pray for forgiveness',
	'and then ask for some gum',
	"like you wish you hadn't",
	'like a heathen',
	'like the sad sack you are',
	'like the hot stud you are',
	'as if it changed your life',
	"like you've just been betrayed",
	"like you're hearing voices",
	'and say your dog made you do it',
	'and say your cat made you do it',
	"and then say, 'I love you'",
	'and then apologize',
	"and then take a bow, you're an idiot!",
	'like it just fell from the sky',
	"because you're desperate",
	"because you don't know any better",
	"because you're a genius ",
	"then go take a shower, you're gross",
	'then ask yourself why you did it',
	"like you're late for a very important date",
	'like your life depends on it',
	'secretly',
	'with your bare hands',
	'like a chicken',
	'like a penguin',
	'while swimming',
	'while wet',
	'in the grass',
	"as if you're in a Miyazaki movie",
	"as if you're in a Tarantino movie",
	"as if you're in a Shakespeare play",
	'in a British accent',
	'in a Russian accent',
	'in an American accent',
	'in a French accent',
	'in an Australian accent',
	'in a Chinese accent',
	'in a German accent',
	'like a nature documentary narrator',
	'like a sports announcer',
	'like a robot',
	"like it's freezing cold",
	'like a debutante',
	'with both guns blazing',
	'like a G',
	"like it's 2020",
	"like it's 1999",
	"and then go, 'meow'",
	"like you're in a kung fu movie",
	'like a vampire',
	'for Satan',
	'for Jesus',
	'all alone'
];
var prepositions = [
	'on',
	'with',
	'on top of',
	'inside of',
	'around',
	'underneath',
	'outside of',
	'through',
	'next to',
	'over',
	'aboard',
	'onto',
	'above',
	'under',
	'among',
	'to',
	'toward',
	'at',
	'behind',
	'below',
	'beneath',
	'beside',
	'while watching',
	'in',
	'into',
	'near',
	'off',
	'outside',
	'over',
	'while eating',
	'while holding',
	'while wearing',
	'while pretending to be',
	'with your hand in',
	'while fearing',
	'while talking about',
	'while singing about',
	'at',
	'at',
	'while yelling at',
	'while yelling about',
	'while staring at',
	'while thinking about',
	'while yelling about',
	'while yelling about',
	'while doing',
	'about doing',
	'who just broke up with',
	'who just found out about',
	'who was just rejected by',
	"who's in love with",
	"who's obsessed with",
	'while arguing with',
	"who's on their way to",
	'on their way to a date with',
	'to',
	'just had sex with',
	'to',
	'to',
	'on',
	'on',
	'onto',
	'onto ',
	'onto',
	'into',
	'into',
	'into',
	'into',
	'on',
	'to',
	'to',
	'on',
	'around',
	'around',
	'inside of',
	'inside of',
	'on top of',
	'on top of',
	'toward',
	'toward',
	'at',
	'at',
	'under',
	'under',
	'under',
	'with',
	'with',
	'with',
	'with'
];
////EVENT LISTENERS
//navbar buttons
navbar[0].addEventListener('click', showAbout);
navbar[1].addEventListener('click', customize);
navbar[2].addEventListener('click', showRules);
///back button
back.addEventListener('click', showContainer);
//Game Buttons
completed.addEventListener('click', newString);
reset.addEventListener('click', newString);
//Gameplay Start
function newString() {
	//generate new strings
	stringGenerator();
	//replace the text on the website
	sentence.textContent = string;
}
function stringGenerator() {
	var p = Math.floor(Math.random() * pronouns.length);
	var v = Math.floor(Math.random() * verbs.length);
	var n1 = Math.floor(Math.random() * nouns.length);
	var n2 = Math.floor(Math.random() * nouns2.length);
	var a = Math.floor(Math.random() * articles.length);
	var pp = Math.floor(Math.random() * prepositions.length);
	var d = Math.floor(Math.random() * descriptor.length);
	string = verbs[v] + ' ' + nouns[n1] + ' ' + prepositions[pp] + ' ' + nouns2[n2] + ' ' + descriptor[d];
}
//Gameplay End

//Navbar Functionality
function showAbout() {
	//Show the About Page
	hideThemAll();
	about.classList.remove('hide');
}

function showContainer() {
	hideThemAll();
	container.classList.remove('hide');
	backColor(red);
}
function customize() {
	hideThemAll();
	custom.classList.remove('hide');
	//define player 1
	//define player 2
}
function showRules() {
	//Show the About Page
	hideThemAll();
	rules.classList.remove('hide');
}

function backColor(color) {
	background.style.backgroundColor = color;
	console.log(color);
}

function hideThemAll() {
	for (let i = 0; i < pages.length; i++) {
		pages[i].classList.add('hide');
	}
}
//End of Navbar Functionality
