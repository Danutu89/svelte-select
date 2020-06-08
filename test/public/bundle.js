(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var nameyMcnameface = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
		module.exports = factory();
	}(commonjsGlobal, function () {
		var animals = [
		  "aardvark",
		  "aardwolf",
		  "albatross",
		  "alligator",
		  "alpaca",
		  "amphibian",
		  "anaconda",
		  "angelfish",
		  "anglerfish",
		  "ant",
		  "anteater",
		  "antelope",
		  "antlion",
		  "ape",
		  "aphid",
		  "armadillo",
		  "asp",
		  "baboon",
		  "badger",
		  "bandicoot",
		  "barnacle",
		  "barracuda",
		  "basilisk",
		  "bass",
		  "bat",
		  "bear",
		  "beaver",
		  "bedbug",
		  "bee",
		  "beetle",
		  "bird",
		  "bison",
		  "blackbird",
		  "boa",
		  "boar",
		  "bobcat",
		  "bobolink",
		  "bonobo",
		  "booby",
		  "bovid",
		  "bug",
		  "butterfly",
		  "buzzard",
		  "camel",
		  "canid",
		  "capybara",
		  "cardinal",
		  "caribou",
		  "carp",
		  "cat",
		  "catshark",
		  "caterpillar",
		  "catfish",
		  "cattle",
		  "centipede",
		  "cephalopod",
		  "chameleon",
		  "cheetah",
		  "chickadee",
		  "chicken",
		  "chimpanzee",
		  "chinchilla",
		  "chipmunk",
		  "clam",
		  "clownfish",
		  "cobra",
		  "cockroach",
		  "cod",
		  "condor",
		  "constrictor",
		  "coral",
		  "cougar",
		  "cow",
		  "coyote",
		  "crab",
		  "crane",
		  "crawdad",
		  "crayfish",
		  "cricket",
		  "crocodile",
		  "crow",
		  "cuckoo",
		  "cicada",
		  "damselfly",
		  "deer",
		  "dingo",
		  "dinosaur",
		  "dog",
		  "dolphin",
		  "donkey",
		  "dormouse",
		  "dove",
		  "dragonfly",
		  "dragon",
		  "duck",
		  "eagle",
		  "earthworm",
		  "earwig",
		  "echidna",
		  "eel",
		  "egret",
		  "elephant",
		  "elk",
		  "emu",
		  "ermine",
		  "falcon",
		  "ferret",
		  "finch",
		  "firefly",
		  "fish",
		  "flamingo",
		  "flea",
		  "fly",
		  "flyingfish",
		  "fowl",
		  "fox",
		  "frog",
		  "gamefowl",
		  "galliform",
		  "gazelle",
		  "gecko",
		  "gerbil",
		  "gibbon",
		  "giraffe",
		  "goat",
		  "goldfish",
		  "goose",
		  "gopher",
		  "gorilla",
		  "grasshopper",
		  "grouse",
		  "guan",
		  "guanaco",
		  "guineafowl",
		  "gull",
		  "guppy",
		  "haddock",
		  "halibut",
		  "hamster",
		  "hare",
		  "harrier",
		  "hawk",
		  "hedgehog",
		  "heron",
		  "herring",
		  "hippopotamus",
		  "hookworm",
		  "hornet",
		  "horse",
		  "hoverfly",
		  "hummingbird",
		  "hyena",
		  "iguana",
		  "impala",
		  "jackal",
		  "jaguar",
		  "jay",
		  "jellyfish",
		  "junglefowl",
		  "kangaroo",
		  "kingfisher",
		  "kite",
		  "kiwi",
		  "koala",
		  "koi",
		  "krill",
		  "ladybug",
		  "lamprey",
		  "landfowl",
		  "lark",
		  "leech",
		  "lemming",
		  "lemur",
		  "leopard",
		  "leopon",
		  "limpet",
		  "lion",
		  "lizard",
		  "llama",
		  "lobster",
		  "locust",
		  "loon",
		  "louse",
		  "lungfish",
		  "lynx",
		  "macaw",
		  "mackerel",
		  "magpie",
		  "mammal",
		  "manatee",
		  "mandrill",
		  "marlin",
		  "marmoset",
		  "marmot",
		  "marsupial",
		  "marten",
		  "mastodon",
		  "meadowlark",
		  "meerkat",
		  "mink",
		  "minnow",
		  "mite",
		  "mockingbird",
		  "mole",
		  "mollusk",
		  "mongoose",
		  "monkey",
		  "moose",
		  "mosquito",
		  "moth",
		  "mouse",
		  "mule",
		  "muskox",
		  "narwhal",
		  "newt",
		  "nightingale",
		  "ocelot",
		  "octopus",
		  "opossum",
		  "orangutan",
		  "orca",
		  "ostrich",
		  "otter",
		  "owl",
		  "ox",
		  "panda",
		  "panther",
		  "parakeet",
		  "parrot",
		  "parrotfish",
		  "partridge",
		  "peacock",
		  "peafowl",
		  "pelican",
		  "penguin",
		  "perch",
		  "pheasant",
		  "pig",
		  "pigeon",
		  "pike",
		  "pinniped",
		  "piranha",
		  "planarian",
		  "platypus",
		  "pony",
		  "porcupine",
		  "porpoise",
		  "possum",
		  "prawn",
		  "primate",
		  "ptarmigan",
		  "puffin",
		  "puma",
		  "python",
		  "quail",
		  "quelea",
		  "quokka",
		  "rabbit",
		  "raccoon",
		  "rat",
		  "rattlesnake",
		  "raven",
		  "reindeer",
		  "reptile",
		  "rhinoceros",
		  "roadrunner",
		  "rodent",
		  "rook",
		  "rooster",
		  "roundworm",
		  "sailfish",
		  "salamander",
		  "salmon",
		  "sawfish",
		  "scallop",
		  "scorpion",
		  "seahorse",
		  "shark",
		  "sheep",
		  "shrew",
		  "shrimp",
		  "silkworm",
		  "silverfish",
		  "skink",
		  "skunk",
		  "sloth",
		  "slug",
		  "smelt",
		  "snail",
		  "snake",
		  "snipe",
		  "sole",
		  "sparrow",
		  "spider",
		  "spoonbill",
		  "squid",
		  "squirrel",
		  "starfish",
		  "stingray",
		  "stoat",
		  "stork",
		  "sturgeon",
		  "swallow",
		  "swan",
		  "swift",
		  "swordfish",
		  "swordtail",
		  "tahr",
		  "takin",
		  "tapir",
		  "tarantula",
		  "tarsier",
		  "termite",
		  "tern",
		  "thrush",
		  "tick",
		  "tiger",
		  "tiglon",
		  "toad",
		  "tortoise",
		  "toucan",
		  "trout",
		  "tuna",
		  "turkey",
		  "turtle",
		  "urial",
		  "vicuna",
		  "viper",
		  "vole",
		  "vulture",
		  "wallaby",
		  "walrus",
		  "wasp",
		  "warbler",
		  "weasel",
		  "whale",
		  "whippet",
		  "whitefish",
		  "wildcat",
		  "wildebeest",
		  "wildfowl",
		  "wolf",
		  "wolverine",
		  "wombat",
		  "woodpecker",
		  "worm",
		  "wren",
		  "xerinae",
		  "yak",
		  "zebra",
		  "alpaca",
		  "cat",
		  "cattle",
		  "chicken",
		  "dog",
		  "donkey",
		  "ferret",
		  "gayal",
		  "goldfish",
		  "guppy",
		  "horse",
		  "koi",
		  "llama",
		  "sheep",
		  "yak"
		]
		;

		var adjectives = [
		  "aback",
		  "abaft",
		  "abandoned",
		  "abashed",
		  "aberrant",
		  "abhorrent",
		  "abiding",
		  "abject",
		  "ablaze",
		  "able",
		  "abnormal",
		  "aboard",
		  "aboriginal",
		  "abortive",
		  "abounding",
		  "abrasive",
		  "abrupt",
		  "absent",
		  "absolute",
		  "absorbed",
		  "absorbing",
		  "abstracted",
		  "absurd",
		  "abundant",
		  "abusive",
		  "academic",
		  "acceptable",
		  "accessible",
		  "accidental",
		  "acclaimed",
		  "accomplished",
		  "accurate",
		  "aching",
		  "acid",
		  "acidic",
		  "acoustic",
		  "acrid",
		  "acrobatic",
		  "active",
		  "actual",
		  "actually",
		  "ad hoc",
		  "adamant",
		  "adaptable",
		  "addicted",
		  "adept",
		  "adhesive",
		  "adjoining",
		  "admirable",
		  "admired",
		  "adolescent",
		  "adorable",
		  "adored",
		  "advanced",
		  "adventurous",
		  "affectionate",
		  "afraid",
		  "aged",
		  "aggravating",
		  "aggressive",
		  "agile",
		  "agitated",
		  "agonizing",
		  "agreeable",
		  "ahead",
		  "ajar",
		  "alarmed",
		  "alarming",
		  "alcoholic",
		  "alert",
		  "alienated",
		  "alike",
		  "alive",
		  "all",
		  "alleged",
		  "alluring",
		  "aloof",
		  "altruistic",
		  "amazing",
		  "ambiguous",
		  "ambitious",
		  "amiable",
		  "ample",
		  "amuck",
		  "amused",
		  "amusing",
		  "anchored",
		  "ancient",
		  "ancient",
		  "angelic",
		  "angry",
		  "angry",
		  "anguished",
		  "animated",
		  "annoyed",
		  "annoying",
		  "annual",
		  "another",
		  "antique",
		  "antsy",
		  "anxious",
		  "any",
		  "apathetic",
		  "appetizing",
		  "apprehensive",
		  "appropriate",
		  "apt",
		  "aquatic",
		  "arctic",
		  "arid",
		  "aromatic",
		  "arrogant",
		  "artistic",
		  "ashamed",
		  "aspiring",
		  "assorted",
		  "assured",
		  "astonishing",
		  "athletic",
		  "attached",
		  "attentive",
		  "attractive",
		  "auspicious",
		  "austere",
		  "authentic",
		  "authorized",
		  "automatic",
		  "available",
		  "avaricious",
		  "average",
		  "awake",
		  "aware",
		  "awesome",
		  "awful",
		  "awkward",
		  "axiomatic",
		  "babyish",
		  "back",
		  "bad",
		  "baggy",
		  "barbarous",
		  "bare",
		  "barren",
		  "bashful",
		  "basic",
		  "batty",
		  "bawdy",
		  "beautiful",
		  "beefy",
		  "befitting",
		  "belated",
		  "belligerent",
		  "beloved",
		  "beneficial",
		  "bent",
		  "berserk",
		  "best",
		  "better",
		  "bewildered",
		  "bewitched",
		  "big",
		  "big-hearted",
		  "billowy",
		  "biodegradable",
		  "bite-sized",
		  "biting",
		  "bitter",
		  "bizarre",
		  "black",
		  "black-and-white",
		  "bland",
		  "blank",
		  "blaring",
		  "bleak",
		  "blind",
		  "blissful",
		  "blond",
		  "bloody",
		  "blue",
		  "blue-eyed",
		  "blushing",
		  "bogus",
		  "boiling",
		  "bold",
		  "bony",
		  "boorish",
		  "bored",
		  "boring",
		  "bossy",
		  "both",
		  "bouncy",
		  "boundless",
		  "bountiful",
		  "bowed",
		  "brainy",
		  "brash",
		  "brave",
		  "brawny",
		  "breakable",
		  "breezy",
		  "brief",
		  "bright",
		  "brilliant",
		  "brisk",
		  "broad",
		  "broken",
		  "bronze",
		  "brown",
		  "bruised",
		  "bubbly",
		  "bulky",
		  "bumpy",
		  "buoyant",
		  "burdensome",
		  "burly",
		  "bustling",
		  "busy",
		  "buttery",
		  "buzzing",
		  "cagey",
		  "calculating",
		  "callous",
		  "calm",
		  "candid",
		  "canine",
		  "capable",
		  "capital",
		  "capricious",
		  "carefree",
		  "careful",
		  "careless",
		  "caring",
		  "cautious",
		  "cavernous",
		  "ceaseless",
		  "celebrated",
		  "certain",
		  "changeable",
		  "charming",
		  "cheap",
		  "cheeky",
		  "cheerful",
		  "cheery",
		  "chemical",
		  "chief",
		  "childlike",
		  "chilly",
		  "chivalrous",
		  "chubby",
		  "chunky",
		  "circular",
		  "clammy",
		  "classic",
		  "classy",
		  "clean",
		  "clear",
		  "clear-cut",
		  "clever",
		  "cloistered",
		  "close",
		  "closed",
		  "cloudy",
		  "clueless",
		  "clumsy",
		  "cluttered",
		  "coarse",
		  "coherent",
		  "cold",
		  "colorful",
		  "colorless",
		  "colossal",
		  "colossal",
		  "combative",
		  "comfortable",
		  "common",
		  "compassionate",
		  "competent",
		  "complete",
		  "complex",
		  "complicated",
		  "composed",
		  "concerned",
		  "concrete",
		  "condemned",
		  "condescending",
		  "confused",
		  "conscious",
		  "considerate",
		  "constant",
		  "contemplative",
		  "content",
		  "conventional",
		  "convincing",
		  "convoluted",
		  "cooing",
		  "cooked",
		  "cool",
		  "cooperative",
		  "coordinated",
		  "corny",
		  "corrupt",
		  "costly",
		  "courageous",
		  "courteous",
		  "cowardly",
		  "crabby",
		  "crafty",
		  "craven",
		  "crazy",
		  "creamy",
		  "creative",
		  "creepy",
		  "criminal",
		  "crisp",
		  "critical",
		  "crooked",
		  "crowded",
		  "cruel",
		  "crushing",
		  "cuddly",
		  "cultivated",
		  "cultured",
		  "cumbersome",
		  "curious",
		  "curly",
		  "curved",
		  "curvy",
		  "cut",
		  "cute",
		  "cylindrical",
		  "cynical",
		  "daffy",
		  "daily",
		  "damaged",
		  "damaging",
		  "damp",
		  "dangerous",
		  "dapper",
		  "dapper",
		  "daring",
		  "dark",
		  "darling",
		  "dashing",
		  "dazzling",
		  "dead",
		  "deadly",
		  "deadpan",
		  "deafening",
		  "dear",
		  "dearest",
		  "debonair",
		  "decayed",
		  "deceitful",
		  "decent",
		  "decimal",
		  "decisive",
		  "decorous",
		  "deep",
		  "deeply",
		  "defeated",
		  "defective",
		  "defenseless",
		  "defensive",
		  "defiant",
		  "deficient",
		  "definite",
		  "delayed",
		  "delectable",
		  "delicate",
		  "delicious",
		  "delightful",
		  "delirious",
		  "demanding",
		  "demonic",
		  "dense",
		  "dental",
		  "dependable",
		  "dependent",
		  "depraved",
		  "depressed",
		  "deranged",
		  "descriptive",
		  "deserted",
		  "despicable",
		  "detailed",
		  "determined",
		  "devilish",
		  "devoted",
		  "didactic",
		  "different",
		  "difficult",
		  "digital",
		  "dilapidated",
		  "diligent",
		  "dim",
		  "diminutive",
		  "dimpled",
		  "dimwitted",
		  "direct",
		  "direful",
		  "dirty",
		  "disagreeable",
		  "disastrous",
		  "discreet",
		  "discrete",
		  "disfigured",
		  "disguised",
		  "disgusted",
		  "disgusting",
		  "dishonest",
		  "disillusioned",
		  "disloyal",
		  "dismal",
		  "dispensable",
		  "distant",
		  "distinct",
		  "distorted",
		  "distraught",
		  "distressed",
		  "disturbed",
		  "divergent",
		  "dizzy",
		  "domineering",
		  "dopey",
		  "doting",
		  "double",
		  "doubtful",
		  "downright",
		  "drab",
		  "draconian",
		  "drafty",
		  "drained",
		  "dramatic",
		  "dreary",
		  "droopy",
		  "drunk",
		  "dry",
		  "dual",
		  "dull",
		  "dull",
		  "dusty",
		  "dutiful",
		  "dynamic",
		  "dysfunctional",
		  "each",
		  "eager",
		  "early",
		  "earnest",
		  "earsplitting",
		  "earthy",
		  "easy",
		  "easy-going",
		  "eatable",
		  "economic",
		  "ecstatic",
		  "edible",
		  "educated",
		  "efficacious",
		  "efficient",
		  "eight",
		  "elaborate",
		  "elastic",
		  "elated",
		  "elderly",
		  "electric",
		  "elegant",
		  "elementary",
		  "elfin",
		  "elite",
		  "elliptical",
		  "emaciated",
		  "embarrassed",
		  "embellished",
		  "eminent",
		  "emotional",
		  "empty",
		  "enchanted",
		  "enchanting",
		  "encouraging",
		  "endurable",
		  "energetic",
		  "enlightened",
		  "enormous",
		  "enraged",
		  "entertaining",
		  "enthusiastic",
		  "entire",
		  "envious",
		  "envious",
		  "equable",
		  "equal",
		  "equatorial",
		  "erect",
		  "erratic",
		  "essential",
		  "esteemed",
		  "ethereal",
		  "ethical",
		  "euphoric",
		  "evanescent",
		  "evasive",
		  "even",
		  "evergreen",
		  "everlasting",
		  "every",
		  "evil",
		  "exalted",
		  "exasperated",
		  "excellent",
		  "excitable",
		  "excited",
		  "exciting",
		  "exclusive",
		  "exemplary",
		  "exhausted",
		  "exhilarated",
		  "exotic",
		  "expensive",
		  "experienced",
		  "expert",
		  "extensive",
		  "extra-large",
		  "extraneous",
		  "extra-small",
		  "extroverted",
		  "exuberant",
		  "exultant",
		  "fabulous",
		  "faded",
		  "failing",
		  "faint",
		  "fair",
		  "faithful",
		  "fake",
		  "fallacious",
		  "false",
		  "familiar",
		  "famous",
		  "fanatical",
		  "fancy",
		  "fantastic",
		  "far",
		  "faraway",
		  "far-flung",
		  "far-off",
		  "fascinated",
		  "fast",
		  "fat",
		  "fatal",
		  "fatherly",
		  "faulty",
		  "favorable",
		  "favorite",
		  "fearful",
		  "fearless",
		  "feeble",
		  "feigned",
		  "feisty",
		  "feline",
		  "female",
		  "feminine",
		  "fertile",
		  "festive",
		  "few",
		  "fickle",
		  "fierce",
		  "filthy",
		  "fine",
		  "finicky",
		  "finished",
		  "firm",
		  "first",
		  "firsthand",
		  "fitting",
		  "five",
		  "fixed",
		  "flagrant",
		  "flaky",
		  "flamboyant",
		  "flashy",
		  "flat",
		  "flawed",
		  "flawless",
		  "flickering",
		  "flimsy",
		  "flippant",
		  "floppy",
		  "flowery",
		  "flufy",
		  "fluid",
		  "flustered",
		  "fluttering",
		  "foamy",
		  "focused",
		  "fond",
		  "foolhardy",
		  "foolish",
		  "forceful",
		  "foregoing",
		  "forgetful",
		  "forked",
		  "formal",
		  "forsaken",
		  "forthright",
		  "fortunate",
		  "four",
		  "fragile",
		  "fragrant",
		  "frail",
		  "frank",
		  "frantic",
		  "frayed",
		  "free",
		  "freezing",
		  "french",
		  "frequent",
		  "fresh",
		  "fretful",
		  "friendly",
		  "frightened",
		  "frightening",
		  "frigid",
		  "frilly",
		  "frivolous",
		  "frizzy",
		  "front",
		  "frosty",
		  "frothy",
		  "frozen",
		  "frugal",
		  "fruitful",
		  "frustrating",
		  "full",
		  "fumbling",
		  "fumbling",
		  "functional",
		  "funny",
		  "furry",
		  "furtive",
		  "fussy",
		  "future",
		  "futuristic",
		  "fuzzy",
		  "gabby",
		  "gainful",
		  "gamy",
		  "gaping",
		  "gargantuan",
		  "garrulous",
		  "gaseous",
		  "gaudy",
		  "general",
		  "general",
		  "generous",
		  "gentle",
		  "genuine",
		  "ghastly",
		  "giant",
		  "giddy",
		  "gifted",
		  "gigantic",
		  "giving",
		  "glamorous",
		  "glaring",
		  "glass",
		  "gleaming",
		  "gleeful",
		  "glib",
		  "glistening",
		  "glittering",
		  "gloomy",
		  "glorious",
		  "glossy",
		  "glum",
		  "godly",
		  "golden",
		  "good",
		  "good-natured",
		  "goofy",
		  "gorgeous",
		  "graceful",
		  "gracious",
		  "grand",
		  "grandiose",
		  "grandiose",
		  "granular",
		  "grateful",
		  "gratis",
		  "grave",
		  "gray",
		  "greasy",
		  "great",
		  "greedy",
		  "green",
		  "gregarious",
		  "grey",
		  "grieving",
		  "grim",
		  "grimy",
		  "gripping",
		  "grizzled",
		  "groovy",
		  "gross",
		  "grotesque",
		  "grouchy",
		  "grounded",
		  "growing",
		  "growling",
		  "grown",
		  "grubby",
		  "gruesome",
		  "grumpy",
		  "guarded",
		  "guiltless",
		  "guilty",
		  "gullible",
		  "gummy",
		  "gusty",
		  "guttural",
		  "habitual",
		  "hairy",
		  "half",
		  "half",
		  "hallowed",
		  "halting",
		  "handmade",
		  "handsome",
		  "handsomely",
		  "handy",
		  "hanging",
		  "hapless",
		  "happy",
		  "happy-go-lucky",
		  "hard",
		  "hard-to-find",
		  "harebrained",
		  "harmful",
		  "harmless",
		  "harmonious",
		  "harsh",
		  "hasty",
		  "hateful",
		  "haunting",
		  "heady",
		  "healthy",
		  "heartbreaking",
		  "heartfelt",
		  "hearty",
		  "heavenly",
		  "heavy",
		  "hefty",
		  "hellish",
		  "helpful",
		  "helpless",
		  "hesitant",
		  "hidden",
		  "hideous",
		  "high",
		  "highfalutin",
		  "high-level",
		  "high-pitched",
		  "hilarious",
		  "hissing",
		  "historical",
		  "hoarse",
		  "holistic",
		  "hollow",
		  "homeless",
		  "homely",
		  "honest",
		  "honorable",
		  "honored",
		  "hopeful",
		  "horrible",
		  "horrific",
		  "hospitable",
		  "hot",
		  "huge",
		  "hulking",
		  "humble",
		  "humdrum",
		  "humiliating",
		  "humming",
		  "humongous",
		  "humorous",
		  "hungry",
		  "hurried",
		  "hurt",
		  "hurtful",
		  "hushed",
		  "husky",
		  "hypnotic",
		  "hysterical",
		  "icky",
		  "icy",
		  "ideal",
		  "ideal",
		  "idealistic",
		  "identical",
		  "idiotic",
		  "idle",
		  "idolized",
		  "ignorant",
		  "ill",
		  "illegal",
		  "ill-fated",
		  "ill-informed",
		  "illiterate",
		  "illustrious",
		  "imaginary",
		  "imaginative",
		  "immaculate",
		  "immaterial",
		  "immediate",
		  "immense",
		  "imminent",
		  "impartial",
		  "impassioned",
		  "impeccable",
		  "imperfect",
		  "imperturbable",
		  "impish",
		  "impolite",
		  "important",
		  "imported",
		  "impossible",
		  "impractical",
		  "impressionable",
		  "impressive",
		  "improbable",
		  "impure",
		  "inborn",
		  "incandescent",
		  "incomparable",
		  "incompatible",
		  "incompetent",
		  "incomplete",
		  "inconclusive",
		  "inconsequential",
		  "incredible",
		  "indelible",
		  "indolent",
		  "industrious",
		  "inexpensive",
		  "inexperienced",
		  "infamous",
		  "infantile",
		  "infatuated",
		  "inferior",
		  "infinite",
		  "informal",
		  "innate",
		  "innocent",
		  "inquisitive",
		  "insecure",
		  "insidious",
		  "insignificant",
		  "insistent",
		  "instinctive",
		  "instructive",
		  "insubstantial",
		  "intelligent",
		  "intent",
		  "intentional",
		  "interesting",
		  "internal",
		  "international",
		  "intrepid",
		  "intrigued",
		  "invincible",
		  "irate",
		  "ironclad",
		  "irresponsible",
		  "irritable",
		  "irritating",
		  "itchy",
		  "jaded",
		  "jagged",
		  "jam-packed",
		  "jaunty",
		  "jazzy",
		  "jealous",
		  "jittery",
		  "jobless",
		  "joint",
		  "jolly",
		  "jovial",
		  "joyful",
		  "joyous",
		  "jubilant",
		  "judicious",
		  "juicy",
		  "jumbled",
		  "jumbo",
		  "jumpy",
		  "jumpy",
		  "junior",
		  "juvenile",
		  "kaleidoscopic",
		  "kaput",
		  "keen",
		  "key",
		  "kind",
		  "kindhearted",
		  "kindly",
		  "klutzy",
		  "knobby",
		  "knotty",
		  "knowing",
		  "knowledgeable",
		  "known",
		  "kooky",
		  "kosher",
		  "labored",
		  "lackadaisical",
		  "lacking",
		  "lame",
		  "lame",
		  "lamentable",
		  "languid",
		  "lanky",
		  "large",
		  "last",
		  "lasting",
		  "late",
		  "laughable",
		  "lavish",
		  "lawful",
		  "lazy",
		  "leading",
		  "leafy",
		  "lean",
		  "learned",
		  "left",
		  "legal",
		  "legitimate",
		  "lethal",
		  "level",
		  "lewd",
		  "light",
		  "lighthearted",
		  "likable",
		  "like",
		  "likeable",
		  "likely",
		  "limited",
		  "limp",
		  "limping",
		  "linear",
		  "lined",
		  "liquid",
		  "literate",
		  "little",
		  "live",
		  "lively",
		  "livid",
		  "living",
		  "loathsome",
		  "lone",
		  "lonely",
		  "long",
		  "longing",
		  "long-term",
		  "loose",
		  "lopsided",
		  "lost",
		  "loud",
		  "loutish",
		  "lovable",
		  "lovely",
		  "loving",
		  "low",
		  "lowly",
		  "loyal",
		  "lucky",
		  "ludicrous",
		  "lumbering",
		  "luminous",
		  "lumpy",
		  "lush",
		  "lustrous",
		  "luxuriant",
		  "luxurious",
		  "lying",
		  "lyrical",
		  "macabre",
		  "macho",
		  "mad",
		  "maddening",
		  "made-up",
		  "madly",
		  "magenta",
		  "magical",
		  "magnificent",
		  "majestic",
		  "major",
		  "makeshift",
		  "male",
		  "malicious",
		  "mammoth",
		  "maniacal",
		  "many",
		  "marked",
		  "married",
		  "marvelous",
		  "masculine",
		  "massive",
		  "material",
		  "materialistic",
		  "mature",
		  "meager",
		  "mealy",
		  "mean",
		  "measly",
		  "meaty",
		  "medical",
		  "mediocre",
		  "medium",
		  "meek",
		  "melancholy",
		  "mellow",
		  "melodic",
		  "melted",
		  "memorable",
		  "menacing",
		  "merciful",
		  "mere",
		  "merry",
		  "messy",
		  "metallic",
		  "mighty",
		  "mild",
		  "military",
		  "milky",
		  "mindless",
		  "miniature",
		  "minor",
		  "minty",
		  "minute",
		  "miscreant",
		  "miserable",
		  "miserly",
		  "misguided",
		  "mistaken",
		  "misty",
		  "mixed",
		  "moaning",
		  "modern",
		  "modest",
		  "moist",
		  "moldy",
		  "momentous",
		  "monstrous",
		  "monthly",
		  "monumental",
		  "moody",
		  "moral",
		  "mortified",
		  "motherly",
		  "motionless",
		  "mountainous",
		  "muddled",
		  "muddy",
		  "muffled",
		  "multicolored",
		  "mundane",
		  "mundane",
		  "murky",
		  "mushy",
		  "musty",
		  "mute",
		  "muted",
		  "mysterious",
		  "naive",
		  "nappy",
		  "narrow",
		  "nasty",
		  "natural",
		  "naughty",
		  "nauseating",
		  "nautical",
		  "near",
		  "neat",
		  "nebulous",
		  "necessary",
		  "needless",
		  "needy",
		  "negative",
		  "neglected",
		  "negligible",
		  "neighboring",
		  "neighborly",
		  "nervous",
		  "nervous",
		  "new",
		  "next",
		  "nice",
		  "nice",
		  "nifty",
		  "nimble",
		  "nine",
		  "nippy",
		  "nocturnal",
		  "noiseless",
		  "noisy",
		  "nonchalant",
		  "nondescript",
		  "nonsensical",
		  "nonstop",
		  "normal",
		  "nostalgic",
		  "nosy",
		  "notable",
		  "noted",
		  "noteworthy",
		  "novel",
		  "noxious",
		  "null",
		  "numb",
		  "numberless",
		  "numerous",
		  "nutritious",
		  "nutty",
		  "oafish",
		  "obedient",
		  "obeisant",
		  "obese",
		  "oblivious",
		  "oblong",
		  "obnoxious",
		  "obscene",
		  "obsequious",
		  "observant",
		  "obsolete",
		  "obtainable",
		  "obvious",
		  "occasional",
		  "oceanic",
		  "odd",
		  "oddball",
		  "offbeat",
		  "offensive",
		  "official",
		  "oily",
		  "old",
		  "old-fashioned",
		  "omniscient",
		  "one",
		  "onerous",
		  "only",
		  "open",
		  "opposite",
		  "optimal",
		  "optimistic",
		  "opulent",
		  "orange",
		  "orderly",
		  "ordinary",
		  "organic",
		  "original",
		  "ornate",
		  "ornery",
		  "ossified",
		  "other",
		  "our",
		  "outgoing",
		  "outlandish",
		  "outlying",
		  "outrageous",
		  "outstanding",
		  "oval",
		  "overconfident",
		  "overcooked",
		  "overdue",
		  "overjoyed",
		  "overlooked",
		  "overrated",
		  "overt",
		  "overwrought",
		  "painful",
		  "painstaking",
		  "palatable",
		  "pale",
		  "paltry",
		  "panicky",
		  "panoramic",
		  "parallel",
		  "parched",
		  "parsimonious",
		  "partial",
		  "passionate",
		  "past",
		  "pastel",
		  "pastoral",
		  "pathetic",
		  "peaceful",
		  "penitent",
		  "peppery",
		  "perfect",
		  "perfumed",
		  "periodic",
		  "perky",
		  "permissible",
		  "perpetual",
		  "perplexed",
		  "personal",
		  "pertinent",
		  "pesky",
		  "pessimistic",
		  "petite",
		  "petty",
		  "petty",
		  "phobic",
		  "phony",
		  "physical",
		  "picayune",
		  "piercing",
		  "pink",
		  "piquant",
		  "pitiful",
		  "placid",
		  "plain",
		  "plaintive",
		  "plant",
		  "plastic",
		  "plausible",
		  "playful",
		  "pleasant",
		  "pleased",
		  "pleasing",
		  "plucky",
		  "plump",
		  "plush",
		  "pointed",
		  "pointless",
		  "poised",
		  "polished",
		  "polite",
		  "political",
		  "pompous",
		  "poor",
		  "popular",
		  "portly",
		  "posh",
		  "positive",
		  "possessive",
		  "possible",
		  "potable",
		  "powerful",
		  "powerless",
		  "practical",
		  "precious",
		  "premium",
		  "present",
		  "present",
		  "prestigious",
		  "pretty",
		  "previous",
		  "pricey",
		  "prickly",
		  "primary",
		  "prime",
		  "pristine",
		  "private",
		  "prize",
		  "probable",
		  "productive",
		  "profitable",
		  "profuse",
		  "proper",
		  "protective",
		  "proud",
		  "prudent",
		  "psychedelic",
		  "psychotic",
		  "public",
		  "puffy",
		  "pumped",
		  "punctual",
		  "pungent",
		  "puny",
		  "pure",
		  "purple",
		  "purring",
		  "pushy",
		  "pushy",
		  "putrid",
		  "puzzled",
		  "puzzling",
		  "quack",
		  "quaint",
		  "quaint",
		  "qualified",
		  "quarrelsome",
		  "quarterly",
		  "queasy",
		  "querulous",
		  "questionable",
		  "quick",
		  "quickest",
		  "quick-witted",
		  "quiet",
		  "quintessential",
		  "quirky",
		  "quixotic",
		  "quixotic",
		  "quizzical",
		  "rabid",
		  "racial",
		  "radiant",
		  "ragged",
		  "rainy",
		  "rambunctious",
		  "rampant",
		  "rapid",
		  "rare",
		  "rash",
		  "raspy",
		  "ratty",
		  "raw",
		  "ready",
		  "real",
		  "realistic",
		  "reasonable",
		  "rebel",
		  "recent",
		  "receptive",
		  "reckless",
		  "recondite",
		  "rectangular",
		  "red",
		  "redundant",
		  "reflecting",
		  "reflective",
		  "regal",
		  "regular",
		  "reliable",
		  "relieved",
		  "remarkable",
		  "reminiscent",
		  "remorseful",
		  "remote",
		  "repentant",
		  "repulsive",
		  "required",
		  "resolute",
		  "resonant",
		  "respectful",
		  "responsible",
		  "responsive",
		  "revolving",
		  "rewarding",
		  "rhetorical",
		  "rich",
		  "right",
		  "righteous",
		  "rightful",
		  "rigid",
		  "ringed",
		  "ripe",
		  "ritzy",
		  "roasted",
		  "robust",
		  "romantic",
		  "roomy",
		  "rosy",
		  "rotating",
		  "rotten",
		  "rotund",
		  "rough",
		  "round",
		  "rowdy",
		  "royal",
		  "rubbery",
		  "ruddy",
		  "rude",
		  "rundown",
		  "runny",
		  "rural",
		  "rustic  rusty",
		  "ruthless",
		  "sable",
		  "sad",
		  "safe",
		  "salty",
		  "same",
		  "sandy",
		  "sane",
		  "sarcastic",
		  "sardonic",
		  "sassy",
		  "satisfied",
		  "satisfying",
		  "savory",
		  "scaly",
		  "scandalous",
		  "scant",
		  "scarce",
		  "scared",
		  "scary",
		  "scattered",
		  "scented",
		  "scholarly",
		  "scientific",
		  "scintillating",
		  "scornful",
		  "scratchy",
		  "scrawny",
		  "screeching",
		  "second",
		  "secondary",
		  "second-hand",
		  "secret",
		  "secretive",
		  "sedate",
		  "seemly",
		  "selective",
		  "self-assured",
		  "selfish",
		  "self-reliant",
		  "sentimental",
		  "separate",
		  "serene",
		  "serious",
		  "serpentine",
		  "several",
		  "severe",
		  "shabby",
		  "shadowy",
		  "shady",
		  "shaggy",
		  "shaky",
		  "shallow",
		  "shameful",
		  "shameless",
		  "sharp",
		  "shimmering",
		  "shiny",
		  "shivering",
		  "shocked",
		  "shocking",
		  "shoddy",
		  "short",
		  "short-term",
		  "showy",
		  "shrill",
		  "shut",
		  "shy",
		  "sick",
		  "silent",
		  "silky",
		  "silly",
		  "silver",
		  "similar",
		  "simple",
		  "simplistic",
		  "sincere",
		  "sinful",
		  "single",
		  "six",
		  "sizzling",
		  "skeletal",
		  "skillful",
		  "skinny",
		  "sleepy",
		  "slight",
		  "slim",
		  "slimy",
		  "slippery",
		  "sloppy",
		  "slow",
		  "slushy",
		  "small",
		  "smarmy",
		  "smart",
		  "smelly",
		  "smiling",
		  "smoggy",
		  "smooth",
		  "smug",
		  "snappy",
		  "snarling",
		  "sneaky",
		  "sniveling",
		  "snobbish",
		  "snoopy",
		  "snotty",
		  "sociable",
		  "soft",
		  "soggy",
		  "solid",
		  "somber",
		  "some",
		  "sophisticated",
		  "sordid",
		  "sore",
		  "sorrowful",
		  "soulful",
		  "soupy",
		  "sour",
		  "sour",
		  "spanish",
		  "sparkling",
		  "sparse",
		  "special",
		  "specific",
		  "spectacular",
		  "speedy",
		  "spherical",
		  "spicy",
		  "spiffy",
		  "spiky",
		  "spirited",
		  "spiritual",
		  "spiteful",
		  "splendid",
		  "spooky",
		  "spotless",
		  "spotted",
		  "spotty",
		  "spry",
		  "spurious",
		  "squalid",
		  "square",
		  "squeaky",
		  "squealing",
		  "squeamish",
		  "squiggly",
		  "stable",
		  "staid",
		  "stained",
		  "staking",
		  "stale",
		  "standard",
		  "standing",
		  "starchy",
		  "stark",
		  "starry",
		  "statuesque",
		  "steadfast",
		  "steady",
		  "steel",
		  "steep",
		  "stereotyped",
		  "sticky",
		  "stiff",
		  "stimulating",
		  "stingy",
		  "stormy",
		  "stout",
		  "straight",
		  "strange",
		  "strict",
		  "strident",
		  "striking",
		  "striped",
		  "strong",
		  "studious",
		  "stunning",
		  "stunning",
		  "stupendous",
		  "stupid",
		  "sturdy",
		  "stylish",
		  "subdued",
		  "submissive",
		  "subsequent",
		  "substantial",
		  "subtle",
		  "suburban",
		  "successful",
		  "succinct",
		  "succulent",
		  "sudden",
		  "sugary",
		  "sulky",
		  "sunny",
		  "super",
		  "superb",
		  "superficial",
		  "superior",
		  "supportive",
		  "supreme",
		  "sure-footed",
		  "surprised",
		  "suspicious",
		  "svelte",
		  "swanky",
		  "sweaty",
		  "sweet",
		  "sweltering",
		  "swift",
		  "sympathetic",
		  "symptomatic",
		  "synonymous",
		  "taboo",
		  "tacit",
		  "tacky",
		  "talented",
		  "talkative",
		  "tall",
		  "tame",
		  "tan",
		  "tangible",
		  "tangy",
		  "tart",
		  "tasteful",
		  "tasteless",
		  "tasty",
		  "tattered",
		  "taut",
		  "tawdry",
		  "tearful",
		  "tedious",
		  "teeming",
		  "teeny",
		  "teeny-tiny",
		  "telling",
		  "temporary",
		  "tempting",
		  "ten",
		  "tender",
		  "tense",
		  "tenuous",
		  "tepid",
		  "terrible",
		  "terrific",
		  "tested",
		  "testy",
		  "thankful",
		  "that",
		  "therapeutic",
		  "these",
		  "thick",
		  "thin",
		  "thinkable",
		  "third",
		  "thirsty",
		  "this",
		  "thorny",
		  "thorough",
		  "those",
		  "thoughtful",
		  "thoughtless",
		  "threadbare",
		  "threatening",
		  "three",
		  "thrifty",
		  "thundering",
		  "thunderous",
		  "tidy",
		  "tight",
		  "tightfisted",
		  "timely",
		  "tinted",
		  "tiny",
		  "tired",
		  "tiresome",
		  "toothsome",
		  "torn",
		  "torpid",
		  "total",
		  "tough",
		  "towering",
		  "tragic",
		  "trained",
		  "tranquil",
		  "trashy",
		  "traumatic",
		  "treasured",
		  "tremendous",
		  "triangular",
		  "tricky",
		  "trifling",
		  "trim",
		  "trite",
		  "trivial",
		  "troubled",
		  "truculent",
		  "true",
		  "trusting",
		  "trustworthy",
		  "trusty",
		  "truthful",
		  "tubby",
		  "turbulent",
		  "twin",
		  "two",
		  "typical",
		  "ubiquitous",
		  "ugliest",
		  "ugly",
		  "ultimate",
		  "ultra",
		  "unable",
		  "unaccountable",
		  "unarmed",
		  "unaware",
		  "unbecoming",
		  "unbiased",
		  "uncomfortable",
		  "uncommon",
		  "unconscious",
		  "uncovered",
		  "understated",
		  "understood",
		  "undesirable",
		  "unequal",
		  "unequaled",
		  "uneven",
		  "unfinished",
		  "unfit",
		  "unfolded",
		  "unfortunate",
		  "unhappy",
		  "unhealthy",
		  "uniform",
		  "unimportant",
		  "uninterested",
		  "unique",
		  "united",
		  "unkempt",
		  "unknown",
		  "unlawful",
		  "unlined",
		  "unlucky",
		  "unnatural",
		  "unpleasant",
		  "unrealistic",
		  "unripe",
		  "unruly",
		  "unselfish",
		  "unsightly",
		  "unsteady",
		  "unsuitable",
		  "unsung",
		  "untidy",
		  "untimely",
		  "untried",
		  "untrue",
		  "unused",
		  "unusual",
		  "unwelcome",
		  "unwieldy",
		  "unwitting",
		  "unwritten",
		  "upbeat",
		  "uppity",
		  "upright",
		  "upset",
		  "uptight",
		  "urban",
		  "usable",
		  "used",
		  "used",
		  "useful",
		  "useless",
		  "utilized",
		  "utopian",
		  "utter",
		  "uttermost",
		  "vacant",
		  "vacuous",
		  "vagabond",
		  "vague",
		  "vain",
		  "valid",
		  "valuable",
		  "vapid",
		  "variable",
		  "various",
		  "vast",
		  "velvety",
		  "venerated",
		  "vengeful",
		  "venomous",
		  "verdant",
		  "verifiable",
		  "versed",
		  "vexed",
		  "vibrant",
		  "vicious",
		  "victorious",
		  "vigilant",
		  "vigorous",
		  "villainous",
		  "violent",
		  "violet",
		  "virtual",
		  "virtuous",
		  "visible",
		  "vital",
		  "vivacious",
		  "vivid",
		  "voiceless",
		  "volatile",
		  "voluminous",
		  "voracious",
		  "vulgar",
		  "wacky",
		  "waggish",
		  "waiting",
		  "wakeful",
		  "wan",
		  "wandering",
		  "wanting",
		  "warlike",
		  "warm",
		  "warmhearted",
		  "warped",
		  "wary",
		  "wasteful",
		  "watchful",
		  "waterlogged",
		  "watery",
		  "wavy",
		  "weak",
		  "wealthy",
		  "weary",
		  "webbed",
		  "wee",
		  "weekly",
		  "weepy",
		  "weighty",
		  "weird",
		  "welcome",
		  "well-documented",
		  "well-groomed",
		  "well-informed",
		  "well-lit",
		  "well-made",
		  "well-off",
		  "well-to-do",
		  "well-worn",
		  "wet",
		  "which",
		  "whimsical",
		  "whirlwind",
		  "whispered",
		  "whispering",
		  "white",
		  "whole",
		  "wholesale",
		  "whopping",
		  "wicked",
		  "wide",
		  "wide-eyed",
		  "wiggly",
		  "wild",
		  "willing",
		  "wilted",
		  "winding",
		  "windy",
		  "winged",
		  "wiry",
		  "wise",
		  "wistful",
		  "witty",
		  "wobbly",
		  "woebegone",
		  "woeful",
		  "womanly",
		  "wonderful",
		  "wooden",
		  "woozy",
		  "wordy",
		  "workable",
		  "worldly",
		  "worn",
		  "worried",
		  "worrisome",
		  "worse",
		  "worst",
		  "worthless",
		  "worthwhile",
		  "worthy",
		  "wrathful",
		  "wretched",
		  "writhing",
		  "wrong",
		  "wry",
		  "xenophobic",
		  "yawning",
		  "yearly",
		  "yellow",
		  "yellowish",
		  "yielding",
		  "young",
		  "youthful",
		  "yummy",
		  "zany",
		  "zealous",
		  "zesty",
		  "zigzag",
		  "zippy",
		  "zonked"
		]
		;

		function pickRandom ( array ) {
			return array[ ~~( Math.random() * array.length ) ];
		}

		function nameyMcNameface (mcMode) {
			if ( mcMode === void 0 ) mcMode = false;

			var animal = pickRandom(animals);
			if(mcMode) {
				animal = 'mc' + animal.substr(0,1).toUpperCase() + animal.substr(1);
			}

			return ((pickRandom(adjectives)) + "-" + animal);
		}
		return nameyMcNameface;

	}));
	});

	function normalizeHtml(html) {
	  const div = document.createElement('div');
	  div.innerHTML = html
	    .replace(/<link.+\/?>/g, '')
	    .replace(/<!--.+?-->/g, '')
	    .replace(/<!---->/g, '')
	    .replace(/<object.+\/object>/g, '')
	    .replace(/svelte-ref-\w+/g, '')
	    .replace(/\s*svelte-\w+\s*/g, '')
	    .replace(/class=""/g, '')
	    .replace(/style=""/g, '')
	    .replace(/>\s+/g, '>')
	    .replace(/\s+</g, '<');

	  indent(div, '');

	  div.normalize();
	  return div.innerHTML;
	}

	function indent(node, spaces) {
	  if (node.childNodes.length === 0) return;

	  if (node.childNodes.length > 1 || node.childNodes[0].nodeType !== 3) {
	    const first = node.childNodes[0];
	    const last = node.childNodes[node.childNodes.length - 1];

	    const head = `\n${spaces}  `;
	    const tail = `\n${spaces}`;

	    if (first.nodeType === 3) {
	      first.data = `${head}${first.data}`;
	    } else {
	      node.insertBefore(document.createTextNode(head), first);
	    }

	    if (last.nodeType === 3) {
	      last.data = `${last.data}${tail}`;
	    } else {
	      node.appendChild(document.createTextNode(tail));
	    }

	    let lastType = null;
	    for (let i = 0; i < node.childNodes.length; i += 1) {
	      const child = node.childNodes[i];
	      if (child.nodeType === 1) {
	        indent(node.childNodes[i], `${spaces}  `);

	        if (lastType === 1) {
	          node.insertBefore(document.createTextNode(head), child);
	          i += 1;
	        }
	      }

	      lastType = child.nodeType;
	    }
	  }
	}

	function noop() { }
	function assign(tar, src) {
	    // @ts-ignore
	    for (const k in src)
	        tar[k] = src[k];
	    return tar;
	}
	function add_location(element, file, line, column, char) {
	    element.__svelte_meta = {
	        loc: { file, line, column, char }
	    };
	}
	function run(fn) {
	    return fn();
	}
	function blank_object() {
	    return Object.create(null);
	}
	function run_all(fns) {
	    fns.forEach(run);
	}
	function is_function(thing) {
	    return typeof thing === 'function';
	}
	function safe_not_equal(a, b) {
	    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
	}
	function create_slot(definition, ctx, $$scope, fn) {
	    if (definition) {
	        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
	        return definition[0](slot_ctx);
	    }
	}
	function get_slot_context(definition, ctx, $$scope, fn) {
	    return definition[1] && fn
	        ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
	        : $$scope.ctx;
	}
	function get_slot_changes(definition, $$scope, dirty, fn) {
	    if (definition[2] && fn) {
	        const lets = definition[2](fn(dirty));
	        if ($$scope.dirty === undefined) {
	            return lets;
	        }
	        if (typeof lets === 'object') {
	            const merged = [];
	            const len = Math.max($$scope.dirty.length, lets.length);
	            for (let i = 0; i < len; i += 1) {
	                merged[i] = $$scope.dirty[i] | lets[i];
	            }
	            return merged;
	        }
	        return $$scope.dirty | lets;
	    }
	    return $$scope.dirty;
	}
	function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
	    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
	    if (slot_changes) {
	        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
	        slot.p(slot_context, slot_changes);
	    }
	}

	function append(target, node) {
	    target.appendChild(node);
	}
	function insert(target, node, anchor) {
	    target.insertBefore(node, anchor || null);
	}
	function detach(node) {
	    node.parentNode.removeChild(node);
	}
	function destroy_each(iterations, detaching) {
	    for (let i = 0; i < iterations.length; i += 1) {
	        if (iterations[i])
	            iterations[i].d(detaching);
	    }
	}
	function element(name) {
	    return document.createElement(name);
	}
	function svg_element(name) {
	    return document.createElementNS('http://www.w3.org/2000/svg', name);
	}
	function text(data) {
	    return document.createTextNode(data);
	}
	function space() {
	    return text(' ');
	}
	function empty() {
	    return text('');
	}
	function listen(node, event, handler, options) {
	    node.addEventListener(event, handler, options);
	    return () => node.removeEventListener(event, handler, options);
	}
	function prevent_default(fn) {
	    return function (event) {
	        event.preventDefault();
	        // @ts-ignore
	        return fn.call(this, event);
	    };
	}
	function attr(node, attribute, value) {
	    if (value == null)
	        node.removeAttribute(attribute);
	    else if (node.getAttribute(attribute) !== value)
	        node.setAttribute(attribute, value);
	}
	function set_attributes(node, attributes) {
	    // @ts-ignore
	    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
	    for (const key in attributes) {
	        if (attributes[key] == null) {
	            node.removeAttribute(key);
	        }
	        else if (key === 'style') {
	            node.style.cssText = attributes[key];
	        }
	        else if (key === '__value') {
	            node.value = node[key] = attributes[key];
	        }
	        else if (descriptors[key] && descriptors[key].set) {
	            node[key] = attributes[key];
	        }
	        else {
	            attr(node, key, attributes[key]);
	        }
	    }
	}
	function set_custom_element_data(node, prop, value) {
	    if (prop in node) {
	        node[prop] = value;
	    }
	    else {
	        attr(node, prop, value);
	    }
	}
	function children(element) {
	    return Array.from(element.childNodes);
	}
	function set_input_value(input, value) {
	    input.value = value == null ? '' : value;
	}
	function set_style(node, key, value, important) {
	    node.style.setProperty(key, value, important ? 'important' : '');
	}
	// unfortunately this can't be a constant as that wouldn't be tree-shakeable
	// so we cache the result instead
	let crossorigin;
	function is_crossorigin() {
	    if (crossorigin === undefined) {
	        crossorigin = false;
	        try {
	            if (typeof window !== 'undefined' && window.parent) {
	                void window.parent.document;
	            }
	        }
	        catch (error) {
	            crossorigin = true;
	        }
	    }
	    return crossorigin;
	}
	function add_resize_listener(node, fn) {
	    const computed_style = getComputedStyle(node);
	    const z_index = (parseInt(computed_style.zIndex) || 0) - 1;
	    if (computed_style.position === 'static') {
	        node.style.position = 'relative';
	    }
	    const iframe = element('iframe');
	    iframe.setAttribute('style', `display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ` +
	        `overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: ${z_index};`);
	    iframe.setAttribute('aria-hidden', 'true');
	    iframe.tabIndex = -1;
	    const crossorigin = is_crossorigin();
	    let unsubscribe;
	    if (crossorigin) {
	        iframe.src = `data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>`;
	        unsubscribe = listen(window, 'message', (event) => {
	            if (event.source === iframe.contentWindow)
	                fn();
	        });
	    }
	    else {
	        iframe.src = 'about:blank';
	        iframe.onload = () => {
	            unsubscribe = listen(iframe.contentWindow, 'resize', fn);
	        };
	    }
	    append(node, iframe);
	    return () => {
	        if (crossorigin) {
	            unsubscribe();
	        }
	        else if (unsubscribe && iframe.contentWindow) {
	            unsubscribe();
	        }
	        detach(iframe);
	    };
	}
	function toggle_class(element, name, toggle) {
	    element.classList[toggle ? 'add' : 'remove'](name);
	}
	function custom_event(type, detail) {
	    const e = document.createEvent('CustomEvent');
	    e.initCustomEvent(type, false, false, detail);
	    return e;
	}

	let current_component;
	function set_current_component(component) {
	    current_component = component;
	}
	function get_current_component() {
	    if (!current_component)
	        throw new Error(`Function called outside component initialization`);
	    return current_component;
	}
	function beforeUpdate(fn) {
	    get_current_component().$$.before_update.push(fn);
	}
	function onMount(fn) {
	    get_current_component().$$.on_mount.push(fn);
	}
	function onDestroy(fn) {
	    get_current_component().$$.on_destroy.push(fn);
	}
	function createEventDispatcher() {
	    const component = get_current_component();
	    return (type, detail) => {
	        const callbacks = component.$$.callbacks[type];
	        if (callbacks) {
	            // TODO are there situations where events could be dispatched
	            // in a server (non-DOM) environment?
	            const event = custom_event(type, detail);
	            callbacks.slice().forEach(fn => {
	                fn.call(component, event);
	            });
	        }
	    };
	}

	const dirty_components = [];
	const binding_callbacks = [];
	const render_callbacks = [];
	const flush_callbacks = [];
	const resolved_promise = Promise.resolve();
	let update_scheduled = false;
	function schedule_update() {
	    if (!update_scheduled) {
	        update_scheduled = true;
	        resolved_promise.then(flush);
	    }
	}
	function tick() {
	    schedule_update();
	    return resolved_promise;
	}
	function add_render_callback(fn) {
	    render_callbacks.push(fn);
	}
	function add_flush_callback(fn) {
	    flush_callbacks.push(fn);
	}
	let flushing = false;
	const seen_callbacks = new Set();
	function flush() {
	    if (flushing)
	        return;
	    flushing = true;
	    do {
	        // first, call beforeUpdate functions
	        // and update components
	        for (let i = 0; i < dirty_components.length; i += 1) {
	            const component = dirty_components[i];
	            set_current_component(component);
	            update(component.$$);
	        }
	        dirty_components.length = 0;
	        while (binding_callbacks.length)
	            binding_callbacks.pop()();
	        // then, once components are updated, call
	        // afterUpdate functions. This may cause
	        // subsequent updates...
	        for (let i = 0; i < render_callbacks.length; i += 1) {
	            const callback = render_callbacks[i];
	            if (!seen_callbacks.has(callback)) {
	                // ...so guard against infinite loops
	                seen_callbacks.add(callback);
	                callback();
	            }
	        }
	        render_callbacks.length = 0;
	    } while (dirty_components.length);
	    while (flush_callbacks.length) {
	        flush_callbacks.pop()();
	    }
	    update_scheduled = false;
	    flushing = false;
	    seen_callbacks.clear();
	}
	function update($$) {
	    if ($$.fragment !== null) {
	        $$.update();
	        run_all($$.before_update);
	        const dirty = $$.dirty;
	        $$.dirty = [-1];
	        $$.fragment && $$.fragment.p($$.ctx, dirty);
	        $$.after_update.forEach(add_render_callback);
	    }
	}
	const outroing = new Set();
	let outros;
	function group_outros() {
	    outros = {
	        r: 0,
	        c: [],
	        p: outros // parent group
	    };
	}
	function check_outros() {
	    if (!outros.r) {
	        run_all(outros.c);
	    }
	    outros = outros.p;
	}
	function transition_in(block, local) {
	    if (block && block.i) {
	        outroing.delete(block);
	        block.i(local);
	    }
	}
	function transition_out(block, local, detach, callback) {
	    if (block && block.o) {
	        if (outroing.has(block))
	            return;
	        outroing.add(block);
	        outros.c.push(() => {
	            outroing.delete(block);
	            if (callback) {
	                if (detach)
	                    block.d(1);
	                callback();
	            }
	        });
	        block.o(local);
	    }
	}

	const globals = (typeof window !== 'undefined'
	    ? window
	    : typeof globalThis !== 'undefined'
	        ? globalThis
	        : global);
	function outro_and_destroy_block(block, lookup) {
	    transition_out(block, 1, 1, () => {
	        lookup.delete(block.key);
	    });
	}
	function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
	    let o = old_blocks.length;
	    let n = list.length;
	    let i = o;
	    const old_indexes = {};
	    while (i--)
	        old_indexes[old_blocks[i].key] = i;
	    const new_blocks = [];
	    const new_lookup = new Map();
	    const deltas = new Map();
	    i = n;
	    while (i--) {
	        const child_ctx = get_context(ctx, list, i);
	        const key = get_key(child_ctx);
	        let block = lookup.get(key);
	        if (!block) {
	            block = create_each_block(key, child_ctx);
	            block.c();
	        }
	        else if (dynamic) {
	            block.p(child_ctx, dirty);
	        }
	        new_lookup.set(key, new_blocks[i] = block);
	        if (key in old_indexes)
	            deltas.set(key, Math.abs(i - old_indexes[key]));
	    }
	    const will_move = new Set();
	    const did_move = new Set();
	    function insert(block) {
	        transition_in(block, 1);
	        block.m(node, next);
	        lookup.set(block.key, block);
	        next = block.first;
	        n--;
	    }
	    while (o && n) {
	        const new_block = new_blocks[n - 1];
	        const old_block = old_blocks[o - 1];
	        const new_key = new_block.key;
	        const old_key = old_block.key;
	        if (new_block === old_block) {
	            // do nothing
	            next = new_block.first;
	            o--;
	            n--;
	        }
	        else if (!new_lookup.has(old_key)) {
	            // remove old block
	            destroy(old_block, lookup);
	            o--;
	        }
	        else if (!lookup.has(new_key) || will_move.has(new_key)) {
	            insert(new_block);
	        }
	        else if (did_move.has(old_key)) {
	            o--;
	        }
	        else if (deltas.get(new_key) > deltas.get(old_key)) {
	            did_move.add(new_key);
	            insert(new_block);
	        }
	        else {
	            will_move.add(old_key);
	            o--;
	        }
	    }
	    while (o--) {
	        const old_block = old_blocks[o];
	        if (!new_lookup.has(old_block.key))
	            destroy(old_block, lookup);
	    }
	    while (n)
	        insert(new_blocks[n - 1]);
	    return new_blocks;
	}
	function validate_each_keys(ctx, list, get_context, get_key) {
	    const keys = new Set();
	    for (let i = 0; i < list.length; i++) {
	        const key = get_key(get_context(ctx, list, i));
	        if (keys.has(key)) {
	            throw new Error(`Cannot have duplicate keys in a keyed each`);
	        }
	        keys.add(key);
	    }
	}

	function get_spread_update(levels, updates) {
	    const update = {};
	    const to_null_out = {};
	    const accounted_for = { $$scope: 1 };
	    let i = levels.length;
	    while (i--) {
	        const o = levels[i];
	        const n = updates[i];
	        if (n) {
	            for (const key in o) {
	                if (!(key in n))
	                    to_null_out[key] = 1;
	            }
	            for (const key in n) {
	                if (!accounted_for[key]) {
	                    update[key] = n[key];
	                    accounted_for[key] = 1;
	                }
	            }
	            levels[i] = n;
	        }
	        else {
	            for (const key in o) {
	                accounted_for[key] = 1;
	            }
	        }
	    }
	    for (const key in to_null_out) {
	        if (!(key in update))
	            update[key] = undefined;
	    }
	    return update;
	}

	function bind(component, name, callback) {
	    const index = component.$$.props[name];
	    if (index !== undefined) {
	        component.$$.bound[index] = callback;
	        callback(component.$$.ctx[index]);
	    }
	}
	function create_component(block) {
	    block && block.c();
	}
	function mount_component(component, target, anchor) {
	    const { fragment, on_mount, on_destroy, after_update } = component.$$;
	    fragment && fragment.m(target, anchor);
	    // onMount happens before the initial afterUpdate
	    add_render_callback(() => {
	        const new_on_destroy = on_mount.map(run).filter(is_function);
	        if (on_destroy) {
	            on_destroy.push(...new_on_destroy);
	        }
	        else {
	            // Edge case - component was destroyed immediately,
	            // most likely as a result of a binding initialising
	            run_all(new_on_destroy);
	        }
	        component.$$.on_mount = [];
	    });
	    after_update.forEach(add_render_callback);
	}
	function destroy_component(component, detaching) {
	    const $$ = component.$$;
	    if ($$.fragment !== null) {
	        run_all($$.on_destroy);
	        $$.fragment && $$.fragment.d(detaching);
	        // TODO null out other refs, including component.$$ (but need to
	        // preserve final state?)
	        $$.on_destroy = $$.fragment = null;
	        $$.ctx = [];
	    }
	}
	function make_dirty(component, i) {
	    if (component.$$.dirty[0] === -1) {
	        dirty_components.push(component);
	        schedule_update();
	        component.$$.dirty.fill(0);
	    }
	    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
	}
	function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
	    const parent_component = current_component;
	    set_current_component(component);
	    const prop_values = options.props || {};
	    const $$ = component.$$ = {
	        fragment: null,
	        ctx: null,
	        // state
	        props,
	        update: noop,
	        not_equal,
	        bound: blank_object(),
	        // lifecycle
	        on_mount: [],
	        on_destroy: [],
	        before_update: [],
	        after_update: [],
	        context: new Map(parent_component ? parent_component.$$.context : []),
	        // everything else
	        callbacks: blank_object(),
	        dirty
	    };
	    let ready = false;
	    $$.ctx = instance
	        ? instance(component, prop_values, (i, ret, ...rest) => {
	            const value = rest.length ? rest[0] : ret;
	            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
	                if ($$.bound[i])
	                    $$.bound[i](value);
	                if (ready)
	                    make_dirty(component, i);
	            }
	            return ret;
	        })
	        : [];
	    $$.update();
	    ready = true;
	    run_all($$.before_update);
	    // `false` as a special case of no DOM component
	    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
	    if (options.target) {
	        if (options.hydrate) {
	            const nodes = children(options.target);
	            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	            $$.fragment && $$.fragment.l(nodes);
	            nodes.forEach(detach);
	        }
	        else {
	            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	            $$.fragment && $$.fragment.c();
	        }
	        if (options.intro)
	            transition_in(component.$$.fragment);
	        mount_component(component, options.target, options.anchor);
	        flush();
	    }
	    set_current_component(parent_component);
	}
	class SvelteComponent {
	    $destroy() {
	        destroy_component(this, 1);
	        this.$destroy = noop;
	    }
	    $on(type, callback) {
	        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
	        callbacks.push(callback);
	        return () => {
	            const index = callbacks.indexOf(callback);
	            if (index !== -1)
	                callbacks.splice(index, 1);
	        };
	    }
	    $set() {
	        // overridden by instance, if it has props
	    }
	}

	function dispatch_dev(type, detail) {
	    document.dispatchEvent(custom_event(type, Object.assign({ version: '3.23.0' }, detail)));
	}
	function append_dev(target, node) {
	    dispatch_dev("SvelteDOMInsert", { target, node });
	    append(target, node);
	}
	function insert_dev(target, node, anchor) {
	    dispatch_dev("SvelteDOMInsert", { target, node, anchor });
	    insert(target, node, anchor);
	}
	function detach_dev(node) {
	    dispatch_dev("SvelteDOMRemove", { node });
	    detach(node);
	}
	function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
	    const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
	    if (has_prevent_default)
	        modifiers.push('preventDefault');
	    if (has_stop_propagation)
	        modifiers.push('stopPropagation');
	    dispatch_dev("SvelteDOMAddEventListener", { node, event, handler, modifiers });
	    const dispose = listen(node, event, handler, options);
	    return () => {
	        dispatch_dev("SvelteDOMRemoveEventListener", { node, event, handler, modifiers });
	        dispose();
	    };
	}
	function attr_dev(node, attribute, value) {
	    attr(node, attribute, value);
	    if (value == null)
	        dispatch_dev("SvelteDOMRemoveAttribute", { node, attribute });
	    else
	        dispatch_dev("SvelteDOMSetAttribute", { node, attribute, value });
	}
	function set_data_dev(text, data) {
	    data = '' + data;
	    if (text.data === data)
	        return;
	    dispatch_dev("SvelteDOMSetData", { node: text, data });
	    text.data = data;
	}
	function validate_each_argument(arg) {
	    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
	        let msg = '{#each} only iterates over array-like objects.';
	        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
	            msg += ' You can use a spread to convert this iterable into an array.';
	        }
	        throw new Error(msg);
	    }
	}
	function validate_slots(name, slot, keys) {
	    for (const slot_key of Object.keys(slot)) {
	        if (!~keys.indexOf(slot_key)) {
	            console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
	        }
	    }
	}
	class SvelteComponentDev extends SvelteComponent {
	    constructor(options) {
	        if (!options || (!options.target && !options.$$inline)) {
	            throw new Error(`'target' is a required option`);
	        }
	        super();
	    }
	    $destroy() {
	        super.$destroy();
	        this.$destroy = () => {
	            console.warn(`Component was already destroyed`); // eslint-disable-line no-console
	        };
	    }
	    $capture_state() { }
	    $inject_state() { }
	}

	/* test/src/CustomItem.svelte generated by Svelte v3.23.0 */

	const file = "test/src/CustomItem.svelte";

	function add_css() {
		var style = element("style");
		style.id = "svelte-1vo37vn-style";
		style.textContent = ".customItem.svelte-1vo37vn{display:flex;align-items:center;cursor:default;height:40px;line-height:40px;padding:0 16px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.customItem.svelte-1vo37vn:active{background:#b9daff}.customItem.active.svelte-1vo37vn{background:#007aff;color:#fff}.customItem.first.svelte-1vo37vn{border-radius:4px 4px 0 0}.customItem.hover.svelte-1vo37vn:not(.active){background:#e7f2ff}img.svelte-1vo37vn{width:5px;padding:5px 0;margin:0 10px}.customItem_title.svelte-1vo37vn{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.customItem_name.svelte-1vo37vn{display:inline-block;font-weight:700;margin-right:10px}.customItem_tagline.svelte-1vo37vn{display:inline-block}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tSXRlbS5zdmVsdGUiLCJzb3VyY2VzIjpbIkN1c3RvbUl0ZW0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpc0ZpcnN0ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaXNIb3ZlciA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGdldE9wdGlvbkxhYmVsID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGdldFNlbGVjdGlvbkxhYmVsID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGl0ZW0gPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgZmlsdGVyVGV4dCA9ICcnO1xuXG4gIGxldCBpdGVtQ2xhc3NlcyA9ICcnO1xuXG4gICQ6IHtcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgaWYgKGlzQWN0aXZlKSB7IGNsYXNzZXMucHVzaCgnYWN0aXZlJyk7IH1cbiAgICBpZiAoaXNGaXJzdCkgeyBjbGFzc2VzLnB1c2goJ2ZpcnN0Jyk7IH1cbiAgICBpZiAoaXNIb3ZlcikgeyBjbGFzc2VzLnB1c2goJ2hvdmVyJyk7IH1cbiAgICBpdGVtQ2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xuICB9XG5cbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiY3VzdG9tSXRlbSB7aXRlbUNsYXNzZXN9XCI+XG4gIDxpbWcgc3JjPVwie2l0ZW0uaW1hZ2VfdXJsfVwiIGFsdD1cIntpdGVtLm5hbWV9XCI+XG4gIDxkaXYgY2xhc3M9XCJjdXN0b21JdGVtX3RpdGxlXCI+XG4gICAgPGRpdiBjbGFzcz1cImN1c3RvbUl0ZW1fbmFtZVwiPntpdGVtLm5hbWV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImN1c3RvbUl0ZW1fdGFnbGluZVwiPntpdGVtLnRhZ2xpbmV9PC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLmN1c3RvbUl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIH1cblxuICAuY3VzdG9tSXRlbTphY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNiOWRhZmY7XG4gIH1cblxuICAuY3VzdG9tSXRlbS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICMwMDdhZmY7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cblxuICAuY3VzdG9tSXRlbS5maXJzdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIH1cblxuICAuY3VzdG9tSXRlbS5ob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgIGJhY2tncm91bmQ6ICNlN2YyZmY7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiA1cHg7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gIH1cblxuICAuY3VzdG9tSXRlbV90aXRsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLmN1c3RvbUl0ZW1fbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbiAgLmN1c3RvbUl0ZW1fdGFnbGluZSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCRSxXQUFXLGVBQUMsQ0FBQyxBQUNYLE9BQU8sQ0FBRSxJQUFJLENBQ2IsV0FBVyxDQUFFLE1BQU0sQ0FDbkIsTUFBTSxDQUFFLE9BQU8sQ0FDZixNQUFNLENBQUUsSUFBSSxDQUNaLFdBQVcsQ0FBRSxJQUFJLENBQ2pCLE9BQU8sQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUNmLGFBQWEsQ0FBRSxRQUFRLENBQ3ZCLFFBQVEsQ0FBRSxNQUFNLENBQ2hCLFdBQVcsQ0FBRSxNQUFNLEFBQ3JCLENBQUMsQUFFRCwwQkFBVyxPQUFPLEFBQUMsQ0FBQyxBQUNsQixVQUFVLENBQUUsT0FBTyxBQUNyQixDQUFDLEFBRUQsV0FBVyxPQUFPLGVBQUMsQ0FBQyxBQUNsQixVQUFVLENBQUUsT0FBTyxDQUNuQixLQUFLLENBQUUsSUFBSSxBQUNiLENBQUMsQUFFRCxXQUFXLE1BQU0sZUFBQyxDQUFDLEFBQ2pCLGFBQWEsQ0FBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEFBQzVCLENBQUMsQUFFRCxXQUFXLHFCQUFNLEtBQUssT0FBTyxDQUFDLEFBQUMsQ0FBQyxBQUM5QixVQUFVLENBQUUsT0FBTyxBQUNyQixDQUFDLEFBRUQsR0FBRyxlQUFDLENBQUMsQUFDSCxLQUFLLENBQUUsR0FBRyxDQUNWLE9BQU8sQ0FBRSxHQUFHLENBQUMsQ0FBQyxDQUNkLE1BQU0sQ0FBRSxDQUFDLENBQUMsSUFBSSxBQUNoQixDQUFDLEFBRUQsaUJBQWlCLGVBQUMsQ0FBQyxBQUNqQixRQUFRLENBQUUsTUFBTSxDQUNoQixhQUFhLENBQUUsUUFBUSxDQUN2QixXQUFXLENBQUUsTUFBTSxBQUNyQixDQUFDLEFBRUQsZ0JBQWdCLGVBQUMsQ0FBQyxBQUNoQixPQUFPLENBQUUsWUFBWSxDQUNyQixXQUFXLENBQUUsR0FBRyxDQUNoQixZQUFZLENBQUUsSUFBSSxBQUNwQixDQUFDLEFBRUQsbUJBQW1CLGVBQUMsQ0FBQyxBQUNuQixPQUFPLENBQUUsWUFBWSxBQUN2QixDQUFDIn0= */";
		append_dev(document.head, style);
	}

	function create_fragment(ctx) {
		let div3;
		let img;
		let img_src_value;
		let img_alt_value;
		let t0;
		let div2;
		let div0;
		let t1_value = /*item*/ ctx[0].name + "";
		let t1;
		let t2;
		let div1;
		let t3_value = /*item*/ ctx[0].tagline + "";
		let t3;
		let div3_class_value;

		const block = {
			c: function create() {
				div3 = element("div");
				img = element("img");
				t0 = space();
				div2 = element("div");
				div0 = element("div");
				t1 = text(t1_value);
				t2 = space();
				div1 = element("div");
				t3 = text(t3_value);
				if (img.src !== (img_src_value = /*item*/ ctx[0].image_url)) attr_dev(img, "src", img_src_value);
				attr_dev(img, "alt", img_alt_value = /*item*/ ctx[0].name);
				attr_dev(img, "class", "svelte-1vo37vn");
				add_location(img, file, 22, 2, 531);
				attr_dev(div0, "class", "customItem_name svelte-1vo37vn");
				add_location(div0, file, 24, 4, 615);
				attr_dev(div1, "class", "customItem_tagline svelte-1vo37vn");
				add_location(div1, file, 25, 4, 666);
				attr_dev(div2, "class", "customItem_title svelte-1vo37vn");
				add_location(div2, file, 23, 2, 580);
				attr_dev(div3, "class", div3_class_value = "customItem " + /*itemClasses*/ ctx[1] + " svelte-1vo37vn");
				add_location(div3, file, 21, 0, 490);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, div3, anchor);
				append_dev(div3, img);
				append_dev(div3, t0);
				append_dev(div3, div2);
				append_dev(div2, div0);
				append_dev(div0, t1);
				append_dev(div2, t2);
				append_dev(div2, div1);
				append_dev(div1, t3);
			},
			p: function update(ctx, [dirty]) {
				if (dirty & /*item*/ 1 && img.src !== (img_src_value = /*item*/ ctx[0].image_url)) {
					attr_dev(img, "src", img_src_value);
				}

				if (dirty & /*item*/ 1 && img_alt_value !== (img_alt_value = /*item*/ ctx[0].name)) {
					attr_dev(img, "alt", img_alt_value);
				}

				if (dirty & /*item*/ 1 && t1_value !== (t1_value = /*item*/ ctx[0].name + "")) set_data_dev(t1, t1_value);
				if (dirty & /*item*/ 1 && t3_value !== (t3_value = /*item*/ ctx[0].tagline + "")) set_data_dev(t3, t3_value);

				if (dirty & /*itemClasses*/ 2 && div3_class_value !== (div3_class_value = "customItem " + /*itemClasses*/ ctx[1] + " svelte-1vo37vn")) {
					attr_dev(div3, "class", div3_class_value);
				}
			},
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(div3);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance($$self, $$props, $$invalidate) {
		let { isActive = false } = $$props;
		let { isFirst = false } = $$props;
		let { isHover = false } = $$props;
		let { getOptionLabel = undefined } = $$props;
		let { getSelectionLabel = undefined } = $$props;
		let { item = undefined } = $$props;
		let { filterText = "" } = $$props;
		let itemClasses = "";

		const writable_props = [
			"isActive",
			"isFirst",
			"isHover",
			"getOptionLabel",
			"getSelectionLabel",
			"item",
			"filterText"
		];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<CustomItem> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("CustomItem", $$slots, []);

		$$self.$set = $$props => {
			if ("isActive" in $$props) $$invalidate(2, isActive = $$props.isActive);
			if ("isFirst" in $$props) $$invalidate(3, isFirst = $$props.isFirst);
			if ("isHover" in $$props) $$invalidate(4, isHover = $$props.isHover);
			if ("getOptionLabel" in $$props) $$invalidate(5, getOptionLabel = $$props.getOptionLabel);
			if ("getSelectionLabel" in $$props) $$invalidate(6, getSelectionLabel = $$props.getSelectionLabel);
			if ("item" in $$props) $$invalidate(0, item = $$props.item);
			if ("filterText" in $$props) $$invalidate(7, filterText = $$props.filterText);
		};

		$$self.$capture_state = () => ({
			isActive,
			isFirst,
			isHover,
			getOptionLabel,
			getSelectionLabel,
			item,
			filterText,
			itemClasses
		});

		$$self.$inject_state = $$props => {
			if ("isActive" in $$props) $$invalidate(2, isActive = $$props.isActive);
			if ("isFirst" in $$props) $$invalidate(3, isFirst = $$props.isFirst);
			if ("isHover" in $$props) $$invalidate(4, isHover = $$props.isHover);
			if ("getOptionLabel" in $$props) $$invalidate(5, getOptionLabel = $$props.getOptionLabel);
			if ("getSelectionLabel" in $$props) $$invalidate(6, getSelectionLabel = $$props.getSelectionLabel);
			if ("item" in $$props) $$invalidate(0, item = $$props.item);
			if ("filterText" in $$props) $$invalidate(7, filterText = $$props.filterText);
			if ("itemClasses" in $$props) $$invalidate(1, itemClasses = $$props.itemClasses);
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*isActive, isFirst, isHover*/ 28) {
				$: {
					const classes = [];

					if (isActive) {
						classes.push("active");
					}

					if (isFirst) {
						classes.push("first");
					}

					if (isHover) {
						classes.push("hover");
					}

					$$invalidate(1, itemClasses = classes.join(" "));
				}
			}
		};

		return [
			item,
			itemClasses,
			isActive,
			isFirst,
			isHover,
			getOptionLabel,
			getSelectionLabel,
			filterText
		];
	}

	class CustomItem extends SvelteComponentDev {
		constructor(options) {
			super(options);
			if (!document.getElementById("svelte-1vo37vn-style")) add_css();

			init(this, options, instance, create_fragment, safe_not_equal, {
				isActive: 2,
				isFirst: 3,
				isHover: 4,
				getOptionLabel: 5,
				getSelectionLabel: 6,
				item: 0,
				filterText: 7
			});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "CustomItem",
				options,
				id: create_fragment.name
			});
		}

		get isActive() {
			return this.$$.ctx[2];
		}

		set isActive(isActive) {
			this.$set({ isActive });
			flush();
		}

		get isFirst() {
			return this.$$.ctx[3];
		}

		set isFirst(isFirst) {
			this.$set({ isFirst });
			flush();
		}

		get isHover() {
			return this.$$.ctx[4];
		}

		set isHover(isHover) {
			this.$set({ isHover });
			flush();
		}

		get getOptionLabel() {
			return this.$$.ctx[5];
		}

		set getOptionLabel(getOptionLabel) {
			this.$set({ getOptionLabel });
			flush();
		}

		get getSelectionLabel() {
			return this.$$.ctx[6];
		}

		set getSelectionLabel(getSelectionLabel) {
			this.$set({ getSelectionLabel });
			flush();
		}

		get item() {
			return this.$$.ctx[0];
		}

		set item(item) {
			this.$set({ item });
			flush();
		}

		get filterText() {
			return this.$$.ctx[7];
		}

		set filterText(filterText) {
			this.$set({ filterText });
			flush();
		}
	}

	/* src/Item.svelte generated by Svelte v3.23.0 */

	const file$1 = "src/Item.svelte";

	function add_css$1() {
		var style = element("style");
		style.id = "svelte-1ik3nfy-style";
		style.textContent = ".item.svelte-1ik3nfy{cursor:default;height:2rem;line-height:2;padding:0.2rem 0.7rem;color:var(--color, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-1ik3nfy{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-1ik3nfy{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-1ik3nfy:active{background:var(--hover)}.item.active.svelte-1ik3nfy{background:var(--hover)}.item.first.svelte-1ik3nfy{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-1ik3nfy:not(.active){background:var(--hover)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXRlbS5zdmVsdGUiLCJzb3VyY2VzIjpbIkl0ZW0uc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpc0ZpcnN0ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaXNIb3ZlciA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGdldE9wdGlvbkxhYmVsID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGl0ZW0gPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgZmlsdGVyVGV4dCA9ICcnO1xuXG4gIGxldCBpdGVtQ2xhc3NlcyA9ICcnO1xuXG4gICQ6IHtcbiAgICBjb25zdCBjbGFzc2VzID0gW107XG4gICAgaWYgKGlzQWN0aXZlKSB7IGNsYXNzZXMucHVzaCgnYWN0aXZlJyk7IH1cbiAgICBpZiAoaXNGaXJzdCkgeyBjbGFzc2VzLnB1c2goJ2ZpcnN0Jyk7IH1cbiAgICBpZiAoaXNIb3ZlcikgeyBjbGFzc2VzLnB1c2goJ2hvdmVyJyk7IH1cbiAgICBpZiAoaXRlbS5pc0dyb3VwSGVhZGVyKSB7IGNsYXNzZXMucHVzaCgnZ3JvdXBIZWFkZXInKTsgfVxuICAgIGlmIChpdGVtLmlzR3JvdXBJdGVtKSB7IGNsYXNzZXMucHVzaCgnZ3JvdXBJdGVtJyk7IH1cbiAgICBpdGVtQ2xhc3NlcyA9IGNsYXNzZXMuam9pbignICcpO1xuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuaXRlbSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGhlaWdodDogMnJlbTtcbiAgICBsaW5lLWhlaWdodDogMjtcbiAgICBwYWRkaW5nOiAwLjJyZW0gMC43cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvciwgaW5oZXJpdCk7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgLmdyb3VwSGVhZGVyIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdmFyKC0tZ3JvdXBUaXRsZVRleHRUcmFuc2Zvcm0sIHVwcGVyY2FzZSk7XG4gIH1cblxuICAuZ3JvdXBJdGVtIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLWdyb3VwSXRlbVBhZGRpbmdMZWZ0LCA0MHB4KTtcbiAgfVxuXG4gIC5pdGVtOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taG92ZXIpO1xuICB9XG5cbiAgLml0ZW0uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ob3Zlcik7XG4gIH1cblxuICAuaXRlbS5maXJzdCB7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taXRlbUZpcnN0Qm9yZGVyUmFkaXVzLCA0cHggNHB4IDAgMCk7XG4gIH1cblxuICAuaXRlbS5ob3Zlcjpub3QoLmFjdGl2ZSkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWhvdmVyKTtcbiAgfVxuPC9zdHlsZT5cblxuXG5cbjxkaXYgY2xhc3M9XCJpdGVtIHtpdGVtQ2xhc3Nlc31cIj5cbiAge0BodG1sIGdldE9wdGlvbkxhYmVsKGl0ZW0sIGZpbHRlclRleHQpfVxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0JFLEtBQUssZUFBQyxDQUFDLEFBQ0wsTUFBTSxDQUFFLE9BQU8sQ0FDZixNQUFNLENBQUUsSUFBSSxDQUNaLFdBQVcsQ0FBRSxDQUFDLENBQ2QsT0FBTyxDQUFFLE1BQU0sQ0FBQyxNQUFNLENBQ3RCLEtBQUssQ0FBRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FDNUIsYUFBYSxDQUFFLFFBQVEsQ0FDdkIsUUFBUSxDQUFFLE1BQU0sQ0FDaEIsV0FBVyxDQUFFLE1BQU0sQUFDckIsQ0FBQyxBQUVELFlBQVksZUFBQyxDQUFDLEFBQ1osY0FBYyxDQUFFLElBQUkseUJBQXlCLENBQUMsVUFBVSxDQUFDLEFBQzNELENBQUMsQUFFRCxVQUFVLGVBQUMsQ0FBQyxBQUNWLFlBQVksQ0FBRSxJQUFJLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxBQUNqRCxDQUFDLEFBRUQsb0JBQUssT0FBTyxBQUFDLENBQUMsQUFDWixVQUFVLENBQUUsSUFBSSxPQUFPLENBQUMsQUFDMUIsQ0FBQyxBQUVELEtBQUssT0FBTyxlQUFDLENBQUMsQUFDWixVQUFVLENBQUUsSUFBSSxPQUFPLENBQUMsQUFDMUIsQ0FBQyxBQUVELEtBQUssTUFBTSxlQUFDLENBQUMsQUFDWCxhQUFhLENBQUUsSUFBSSx1QkFBdUIsQ0FBQyxZQUFZLENBQUMsQUFDMUQsQ0FBQyxBQUVELEtBQUsscUJBQU0sS0FBSyxPQUFPLENBQUMsQUFBQyxDQUFDLEFBQ3hCLFVBQVUsQ0FBRSxJQUFJLE9BQU8sQ0FBQyxBQUMxQixDQUFDIn0= */";
		append_dev(document.head, style);
	}

	function create_fragment$1(ctx) {
		let div;
		let raw_value = /*getOptionLabel*/ ctx[0](/*item*/ ctx[1], /*filterText*/ ctx[2]) + "";
		let div_class_value;

		const block = {
			c: function create() {
				div = element("div");
				attr_dev(div, "class", div_class_value = "item " + /*itemClasses*/ ctx[3] + " svelte-1ik3nfy");
				add_location(div, file$1, 60, 0, 1203);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				div.innerHTML = raw_value;
			},
			p: function update(ctx, [dirty]) {
				if (dirty & /*getOptionLabel, item, filterText*/ 7 && raw_value !== (raw_value = /*getOptionLabel*/ ctx[0](/*item*/ ctx[1], /*filterText*/ ctx[2]) + "")) div.innerHTML = raw_value;
				if (dirty & /*itemClasses*/ 8 && div_class_value !== (div_class_value = "item " + /*itemClasses*/ ctx[3] + " svelte-1ik3nfy")) {
					attr_dev(div, "class", div_class_value);
				}
			},
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$1.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$1($$self, $$props, $$invalidate) {
		let { isActive = false } = $$props;
		let { isFirst = false } = $$props;
		let { isHover = false } = $$props;
		let { getOptionLabel = undefined } = $$props;
		let { item = undefined } = $$props;
		let { filterText = "" } = $$props;
		let itemClasses = "";
		const writable_props = ["isActive", "isFirst", "isHover", "getOptionLabel", "item", "filterText"];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Item> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("Item", $$slots, []);

		$$self.$set = $$props => {
			if ("isActive" in $$props) $$invalidate(4, isActive = $$props.isActive);
			if ("isFirst" in $$props) $$invalidate(5, isFirst = $$props.isFirst);
			if ("isHover" in $$props) $$invalidate(6, isHover = $$props.isHover);
			if ("getOptionLabel" in $$props) $$invalidate(0, getOptionLabel = $$props.getOptionLabel);
			if ("item" in $$props) $$invalidate(1, item = $$props.item);
			if ("filterText" in $$props) $$invalidate(2, filterText = $$props.filterText);
		};

		$$self.$capture_state = () => ({
			isActive,
			isFirst,
			isHover,
			getOptionLabel,
			item,
			filterText,
			itemClasses
		});

		$$self.$inject_state = $$props => {
			if ("isActive" in $$props) $$invalidate(4, isActive = $$props.isActive);
			if ("isFirst" in $$props) $$invalidate(5, isFirst = $$props.isFirst);
			if ("isHover" in $$props) $$invalidate(6, isHover = $$props.isHover);
			if ("getOptionLabel" in $$props) $$invalidate(0, getOptionLabel = $$props.getOptionLabel);
			if ("item" in $$props) $$invalidate(1, item = $$props.item);
			if ("filterText" in $$props) $$invalidate(2, filterText = $$props.filterText);
			if ("itemClasses" in $$props) $$invalidate(3, itemClasses = $$props.itemClasses);
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*isActive, isFirst, isHover, item*/ 114) {
				$: {
					const classes = [];

					if (isActive) {
						classes.push("active");
					}

					if (isFirst) {
						classes.push("first");
					}

					if (isHover) {
						classes.push("hover");
					}

					if (item.isGroupHeader) {
						classes.push("groupHeader");
					}

					if (item.isGroupItem) {
						classes.push("groupItem");
					}

					$$invalidate(3, itemClasses = classes.join(" "));
				}
			}
		};

		return [getOptionLabel, item, filterText, itemClasses, isActive, isFirst, isHover];
	}

	class Item extends SvelteComponentDev {
		constructor(options) {
			super(options);
			if (!document.getElementById("svelte-1ik3nfy-style")) add_css$1();

			init(this, options, instance$1, create_fragment$1, safe_not_equal, {
				isActive: 4,
				isFirst: 5,
				isHover: 6,
				getOptionLabel: 0,
				item: 1,
				filterText: 2
			});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Item",
				options,
				id: create_fragment$1.name
			});
		}

		get isActive() {
			return this.$$.ctx[4];
		}

		set isActive(isActive) {
			this.$set({ isActive });
			flush();
		}

		get isFirst() {
			return this.$$.ctx[5];
		}

		set isFirst(isFirst) {
			this.$set({ isFirst });
			flush();
		}

		get isHover() {
			return this.$$.ctx[6];
		}

		set isHover(isHover) {
			this.$set({ isHover });
			flush();
		}

		get getOptionLabel() {
			return this.$$.ctx[0];
		}

		set getOptionLabel(getOptionLabel) {
			this.$set({ getOptionLabel });
			flush();
		}

		get item() {
			return this.$$.ctx[1];
		}

		set item(item) {
			this.$set({ item });
			flush();
		}

		get filterText() {
			return this.$$.ctx[2];
		}

		set filterText(filterText) {
			this.$set({ filterText });
			flush();
		}
	}

	/* src/VirtualList.svelte generated by Svelte v3.23.0 */
	const file$2 = "src/VirtualList.svelte";

	function add_css$2() {
		var style = element("style");
		style.id = "svelte-p6ehlv-style";
		style.textContent = "svelte-virtual-list-viewport.svelte-p6ehlv{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-p6ehlv,svelte-virtual-list-row.svelte-p6ehlv{display:block}svelte-virtual-list-row.svelte-p6ehlv{overflow:hidden}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlydHVhbExpc3Quc3ZlbHRlIiwic291cmNlcyI6WyJWaXJ0dWFsTGlzdC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgdGljayB9IGZyb20gJ3N2ZWx0ZSc7XG5cblx0Ly8gcHJvcHNcblx0ZXhwb3J0IGxldCBpdGVtcyA9IHVuZGVmaW5lZDtcblx0ZXhwb3J0IGxldCBoZWlnaHQgPSAnMTAwJSc7XG5cdGV4cG9ydCBsZXQgaXRlbUhlaWdodCA9IDQwO1xuXHRleHBvcnQgbGV0IGhvdmVySXRlbUluZGV4ID0gMDtcblxuXHQvLyByZWFkLW9ubHksIGJ1dCB2aXNpYmxlIHRvIGNvbnN1bWVycyB2aWEgYmluZDpzdGFydFxuXHRleHBvcnQgbGV0IHN0YXJ0ID0gMDtcblx0ZXhwb3J0IGxldCBlbmQgPSAwO1xuXG5cdC8vIGxvY2FsIHN0YXRlXG5cdGxldCBoZWlnaHRfbWFwID0gW107XG5cdGxldCByb3dzO1xuXHRsZXQgdmlld3BvcnQ7XG5cdGxldCBjb250ZW50cztcblx0bGV0IHZpZXdwb3J0X2hlaWdodCA9IDA7XG5cdGxldCB2aXNpYmxlO1xuXHRsZXQgbW91bnRlZDtcblxuXHRsZXQgdG9wID0gMDtcblx0bGV0IGJvdHRvbSA9IDA7XG5cdGxldCBhdmVyYWdlX2hlaWdodDtcblxuXHQkOiB2aXNpYmxlID0gaXRlbXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKChkYXRhLCBpKSA9PiB7XG5cdFx0cmV0dXJuIHsgaW5kZXg6IGkgKyBzdGFydCwgZGF0YSB9O1xuXHR9KTtcblxuXHQvLyB3aGVuZXZlciBgaXRlbXNgIGNoYW5nZXMsIGludmFsaWRhdGUgdGhlIGN1cnJlbnQgaGVpZ2h0bWFwXG5cdCQ6IGlmIChtb3VudGVkKSByZWZyZXNoKGl0ZW1zLCB2aWV3cG9ydF9oZWlnaHQsIGl0ZW1IZWlnaHQpO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIHJlZnJlc2goaXRlbXMsIHZpZXdwb3J0X2hlaWdodCwgaXRlbUhlaWdodCkge1xuXHRcdGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSB2aWV3cG9ydDtcblxuXHRcdGF3YWl0IHRpY2soKTsgLy8gd2FpdCB1bnRpbCB0aGUgRE9NIGlzIHVwIHRvIGRhdGVcblxuXHRcdGxldCBjb250ZW50X2hlaWdodCA9IHRvcCAtIHNjcm9sbFRvcDtcblx0XHRsZXQgaSA9IHN0YXJ0O1xuXG5cdFx0d2hpbGUgKGNvbnRlbnRfaGVpZ2h0IDwgdmlld3BvcnRfaGVpZ2h0ICYmIGkgPCBpdGVtcy5sZW5ndGgpIHtcblx0XHRcdGxldCByb3cgPSByb3dzW2kgLSBzdGFydF07XG5cblx0XHRcdGlmICghcm93KSB7XG5cdFx0XHRcdGVuZCA9IGkgKyAxO1xuXHRcdFx0XHRhd2FpdCB0aWNrKCk7IC8vIHJlbmRlciB0aGUgbmV3bHkgdmlzaWJsZSByb3dcblx0XHRcdFx0cm93ID0gcm93c1tpIC0gc3RhcnRdO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCByb3dfaGVpZ2h0ID0gaGVpZ2h0X21hcFtpXSA9IGl0ZW1IZWlnaHQgfHwgcm93Lm9mZnNldEhlaWdodDtcblx0XHRcdGNvbnRlbnRfaGVpZ2h0ICs9IHJvd19oZWlnaHQ7XG5cdFx0XHRpICs9IDE7XG5cdFx0fVxuXG5cdFx0ZW5kID0gaTtcblxuXHRcdGNvbnN0IHJlbWFpbmluZyA9IGl0ZW1zLmxlbmd0aCAtIGVuZDtcblx0XHRhdmVyYWdlX2hlaWdodCA9ICh0b3AgKyBjb250ZW50X2hlaWdodCkgLyBlbmQ7XG5cblx0XHRib3R0b20gPSByZW1haW5pbmcgKiBhdmVyYWdlX2hlaWdodDtcblx0XHRoZWlnaHRfbWFwLmxlbmd0aCA9IGl0ZW1zLmxlbmd0aDtcblxuXHRcdHZpZXdwb3J0LnNjcm9sbFRvcCA9IDA7XG5cdH1cblxuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVfc2Nyb2xsKCkge1xuXHRcdGNvbnN0IHsgc2Nyb2xsVG9wIH0gPSB2aWV3cG9ydDtcblxuXHRcdGNvbnN0IG9sZF9zdGFydCA9IHN0YXJ0O1xuXG5cdFx0Zm9yIChsZXQgdiA9IDA7IHYgPCByb3dzLmxlbmd0aDsgdiArPSAxKSB7XG5cdFx0XHRoZWlnaHRfbWFwW3N0YXJ0ICsgdl0gPSBpdGVtSGVpZ2h0IHx8IHJvd3Nbdl0ub2Zmc2V0SGVpZ2h0O1xuXHRcdH1cblxuXHRcdGxldCBpID0gMDtcblx0XHRsZXQgeSA9IDA7XG5cblx0XHR3aGlsZSAoaSA8IGl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0Y29uc3Qgcm93X2hlaWdodCA9IGhlaWdodF9tYXBbaV0gfHwgYXZlcmFnZV9oZWlnaHQ7XG5cdFx0XHRpZiAoeSArIHJvd19oZWlnaHQgPiBzY3JvbGxUb3ApIHtcblx0XHRcdFx0c3RhcnQgPSBpO1xuXHRcdFx0XHR0b3AgPSB5O1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHR5ICs9IHJvd19oZWlnaHQ7XG5cdFx0XHRpICs9IDE7XG5cdFx0fVxuXG5cdFx0d2hpbGUgKGkgPCBpdGVtcy5sZW5ndGgpIHtcblx0XHRcdHkgKz0gaGVpZ2h0X21hcFtpXSB8fCBhdmVyYWdlX2hlaWdodDtcblx0XHRcdGkgKz0gMTtcblxuXHRcdFx0aWYgKHkgPiBzY3JvbGxUb3AgKyB2aWV3cG9ydF9oZWlnaHQpIGJyZWFrO1xuXHRcdH1cblxuXHRcdGVuZCA9IGk7XG5cblx0XHRjb25zdCByZW1haW5pbmcgPSBpdGVtcy5sZW5ndGggLSBlbmQ7XG5cdFx0YXZlcmFnZV9oZWlnaHQgPSB5IC8gZW5kO1xuXG5cdFx0d2hpbGUgKGkgPCBpdGVtcy5sZW5ndGgpIGhlaWdodF9tYXBbaSsrXSA9IGF2ZXJhZ2VfaGVpZ2h0O1xuXHRcdGJvdHRvbSA9IHJlbWFpbmluZyAqIGF2ZXJhZ2VfaGVpZ2h0O1xuXG5cdFx0Ly8gcHJldmVudCBqdW1waW5nIGlmIHdlIHNjcm9sbGVkIHVwIGludG8gdW5rbm93biB0ZXJyaXRvcnlcblx0XHRpZiAoc3RhcnQgPCBvbGRfc3RhcnQpIHtcblx0XHRcdGF3YWl0IHRpY2soKTtcblxuXHRcdFx0bGV0IGV4cGVjdGVkX2hlaWdodCA9IDA7XG5cdFx0XHRsZXQgYWN0dWFsX2hlaWdodCA9IDA7XG5cblx0XHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IG9sZF9zdGFydDsgaSArPSAxKSB7XG5cdFx0XHRcdGlmIChyb3dzW2kgLSBzdGFydF0pIHtcblx0XHRcdFx0XHRleHBlY3RlZF9oZWlnaHQgKz0gaGVpZ2h0X21hcFtpXTtcblx0XHRcdFx0XHRhY3R1YWxfaGVpZ2h0ICs9IGl0ZW1IZWlnaHQgfHwgcm93c1tpIC0gc3RhcnRdLm9mZnNldEhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBkID0gYWN0dWFsX2hlaWdodCAtIGV4cGVjdGVkX2hlaWdodDtcblx0XHRcdHZpZXdwb3J0LnNjcm9sbFRvKDAsIHNjcm9sbFRvcCArIGQpO1xuXHRcdH1cblxuXHRcdC8vIFRPRE8gaWYgd2Ugb3ZlcmVzdGltYXRlZCB0aGUgc3BhY2UgdGhlc2Vcblx0XHQvLyByb3dzIHdvdWxkIG9jY3VweSB3ZSBtYXkgbmVlZCB0byBhZGQgc29tZVxuXHRcdC8vIG1vcmUuIG1heWJlIHdlIGNhbiBqdXN0IGNhbGwgaGFuZGxlX3Njcm9sbCBhZ2Fpbj9cblx0fVxuXG5cdC8vIHRyaWdnZXIgaW5pdGlhbCByZWZyZXNoXG5cdG9uTW91bnQoKCkgPT4ge1xuXHRcdHJvd3MgPSBjb250ZW50cy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3ZlbHRlLXZpcnR1YWwtbGlzdC1yb3cnKTtcblx0XHRtb3VudGVkID0gdHJ1ZTtcblx0fSk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRzdmVsdGUtdmlydHVhbC1saXN0LXZpZXdwb3J0IHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0b3ZlcmZsb3cteTogYXV0bztcblx0XHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHRzdmVsdGUtdmlydHVhbC1saXN0LWNvbnRlbnRzLFxuXHRzdmVsdGUtdmlydHVhbC1saXN0LXJvdyB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdH1cblxuXHRzdmVsdGUtdmlydHVhbC1saXN0LXJvdyB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZS12aXJ0dWFsLWxpc3Qtdmlld3BvcnQgYmluZDp0aGlzPXt2aWV3cG9ydH0gYmluZDpvZmZzZXRIZWlnaHQ9e3ZpZXdwb3J0X2hlaWdodH0gb246c2Nyb2xsPXtoYW5kbGVfc2Nyb2xsfVxuXHRzdHlsZT1cImhlaWdodDoge2hlaWdodH07XCI+XG5cdDxzdmVsdGUtdmlydHVhbC1saXN0LWNvbnRlbnRzIGJpbmQ6dGhpcz17Y29udGVudHN9IHN0eWxlPVwicGFkZGluZy10b3A6IHt0b3B9cHg7IHBhZGRpbmctYm90dG9tOiB7Ym90dG9tfXB4O1wiPlxuXHRcdHsjZWFjaCB2aXNpYmxlIGFzIHJvdyAocm93LmluZGV4KX1cblx0XHRcdDxzdmVsdGUtdmlydHVhbC1saXN0LXJvdz5cblx0XHRcdFx0PHNsb3QgaXRlbT17cm93LmRhdGF9IGk9e3Jvdy5pbmRleH0ge2hvdmVySXRlbUluZGV4fT5NaXNzaW5nIHRlbXBsYXRlPC9zbG90PlxuXHRcdFx0PC9zdmVsdGUtdmlydHVhbC1saXN0LXJvdz5cblx0XHR7L2VhY2h9XG5cdDwvc3ZlbHRlLXZpcnR1YWwtbGlzdC1jb250ZW50cz5cbjwvc3ZlbHRlLXZpcnR1YWwtbGlzdC12aWV3cG9ydD4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUlDLDRCQUE0QixjQUFDLENBQUMsQUFDN0IsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsVUFBVSxDQUFFLElBQUksQ0FDaEIsMEJBQTBCLENBQUUsS0FBSyxDQUNqQyxPQUFPLENBQUUsS0FBSyxBQUNmLENBQUMsQUFFRCwwQ0FBNEIsQ0FDNUIsdUJBQXVCLGNBQUMsQ0FBQyxBQUN4QixPQUFPLENBQUUsS0FBSyxBQUNmLENBQUMsQUFFRCx1QkFBdUIsY0FBQyxDQUFDLEFBQ3hCLFFBQVEsQ0FBRSxNQUFNLEFBQ2pCLENBQUMifQ== */";
		append_dev(document.head, style);
	}

	const get_default_slot_changes = dirty => ({
		item: dirty & /*visible*/ 32,
		i: dirty & /*visible*/ 32,
		hoverItemIndex: dirty & /*hoverItemIndex*/ 2
	});

	const get_default_slot_context = ctx => ({
		item: /*row*/ ctx[23].data,
		i: /*row*/ ctx[23].index,
		hoverItemIndex: /*hoverItemIndex*/ ctx[1]
	});

	function get_each_context(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[23] = list[i];
		return child_ctx;
	}

	// (160:57) Missing template
	function fallback_block(ctx) {
		let t;

		const block = {
			c: function create() {
				t = text("Missing template");
			},
			m: function mount(target, anchor) {
				insert_dev(target, t, anchor);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(t);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: fallback_block.name,
			type: "fallback",
			source: "(160:57) Missing template",
			ctx
		});

		return block;
	}

	// (158:2) {#each visible as row (row.index)}
	function create_each_block(key_1, ctx) {
		let svelte_virtual_list_row;
		let t;
		let current;
		const default_slot_template = /*$$slots*/ ctx[19].default;
		const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[18], get_default_slot_context);
		const default_slot_or_fallback = default_slot || fallback_block(ctx);

		const block = {
			key: key_1,
			first: null,
			c: function create() {
				svelte_virtual_list_row = element("svelte-virtual-list-row");
				if (default_slot_or_fallback) default_slot_or_fallback.c();
				t = space();
				set_custom_element_data(svelte_virtual_list_row, "class", "svelte-p6ehlv");
				add_location(svelte_virtual_list_row, file$2, 158, 3, 3514);
				this.first = svelte_virtual_list_row;
			},
			m: function mount(target, anchor) {
				insert_dev(target, svelte_virtual_list_row, anchor);

				if (default_slot_or_fallback) {
					default_slot_or_fallback.m(svelte_virtual_list_row, null);
				}

				append_dev(svelte_virtual_list_row, t);
				current = true;
			},
			p: function update(ctx, dirty) {
				if (default_slot) {
					if (default_slot.p && dirty & /*$$scope, visible, hoverItemIndex*/ 262178) {
						update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[18], dirty, get_default_slot_changes, get_default_slot_context);
					}
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(default_slot_or_fallback, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(default_slot_or_fallback, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(svelte_virtual_list_row);
				if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_each_block.name,
			type: "each",
			source: "(158:2) {#each visible as row (row.index)}",
			ctx
		});

		return block;
	}

	function create_fragment$2(ctx) {
		let svelte_virtual_list_viewport;
		let svelte_virtual_list_contents;
		let each_blocks = [];
		let each_1_lookup = new Map();
		let svelte_virtual_list_viewport_resize_listener;
		let current;
		let mounted;
		let dispose;
		let each_value = /*visible*/ ctx[5];
		validate_each_argument(each_value);
		const get_key = ctx => /*row*/ ctx[23].index;
		validate_each_keys(ctx, each_value, get_each_context, get_key);

		for (let i = 0; i < each_value.length; i += 1) {
			let child_ctx = get_each_context(ctx, each_value, i);
			let key = get_key(child_ctx);
			each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
		}

		const block = {
			c: function create() {
				svelte_virtual_list_viewport = element("svelte-virtual-list-viewport");
				svelte_virtual_list_contents = element("svelte-virtual-list-contents");

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				set_style(svelte_virtual_list_contents, "padding-top", /*top*/ ctx[6] + "px");
				set_style(svelte_virtual_list_contents, "padding-bottom", /*bottom*/ ctx[7] + "px");
				set_custom_element_data(svelte_virtual_list_contents, "class", "svelte-p6ehlv");
				add_location(svelte_virtual_list_contents, file$2, 156, 1, 3364);
				set_style(svelte_virtual_list_viewport, "height", /*height*/ ctx[0]);
				set_custom_element_data(svelte_virtual_list_viewport, "class", "svelte-p6ehlv");
				add_render_callback(() => /*svelte_virtual_list_viewport_elementresize_handler*/ ctx[22].call(svelte_virtual_list_viewport));
				add_location(svelte_virtual_list_viewport, file$2, 154, 0, 3222);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, svelte_virtual_list_viewport, anchor);
				append_dev(svelte_virtual_list_viewport, svelte_virtual_list_contents);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(svelte_virtual_list_contents, null);
				}

				/*svelte_virtual_list_contents_binding*/ ctx[20](svelte_virtual_list_contents);
				/*svelte_virtual_list_viewport_binding*/ ctx[21](svelte_virtual_list_viewport);
				svelte_virtual_list_viewport_resize_listener = add_resize_listener(svelte_virtual_list_viewport, /*svelte_virtual_list_viewport_elementresize_handler*/ ctx[22].bind(svelte_virtual_list_viewport));
				current = true;

				if (!mounted) {
					dispose = listen_dev(svelte_virtual_list_viewport, "scroll", /*handle_scroll*/ ctx[8], false, false, false);
					mounted = true;
				}
			},
			p: function update(ctx, [dirty]) {
				if (dirty & /*$$scope, visible, hoverItemIndex*/ 262178) {
					const each_value = /*visible*/ ctx[5];
					validate_each_argument(each_value);
					group_outros();
					validate_each_keys(ctx, each_value, get_each_context, get_key);
					each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, svelte_virtual_list_contents, outro_and_destroy_block, create_each_block, null, get_each_context);
					check_outros();
				}

				if (!current || dirty & /*top*/ 64) {
					set_style(svelte_virtual_list_contents, "padding-top", /*top*/ ctx[6] + "px");
				}

				if (!current || dirty & /*bottom*/ 128) {
					set_style(svelte_virtual_list_contents, "padding-bottom", /*bottom*/ ctx[7] + "px");
				}

				if (!current || dirty & /*height*/ 1) {
					set_style(svelte_virtual_list_viewport, "height", /*height*/ ctx[0]);
				}
			},
			i: function intro(local) {
				if (current) return;

				for (let i = 0; i < each_value.length; i += 1) {
					transition_in(each_blocks[i]);
				}

				current = true;
			},
			o: function outro(local) {
				for (let i = 0; i < each_blocks.length; i += 1) {
					transition_out(each_blocks[i]);
				}

				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(svelte_virtual_list_viewport);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].d();
				}

				/*svelte_virtual_list_contents_binding*/ ctx[20](null);
				/*svelte_virtual_list_viewport_binding*/ ctx[21](null);
				svelte_virtual_list_viewport_resize_listener();
				mounted = false;
				dispose();
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$2.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$2($$self, $$props, $$invalidate) {
		let { items = undefined } = $$props;
		let { height = "100%" } = $$props;
		let { itemHeight = 40 } = $$props;
		let { hoverItemIndex = 0 } = $$props;
		let { start = 0 } = $$props;
		let { end = 0 } = $$props;

		// local state
		let height_map = [];

		let rows;
		let viewport;
		let contents;
		let viewport_height = 0;
		let visible;
		let mounted;
		let top = 0;
		let bottom = 0;
		let average_height;

		async function refresh(items, viewport_height, itemHeight) {
			const { scrollTop } = viewport;
			await tick(); // wait until the DOM is up to date
			let content_height = top - scrollTop;
			let i = start;

			while (content_height < viewport_height && i < items.length) {
				let row = rows[i - start];

				if (!row) {
					$$invalidate(10, end = i + 1);
					await tick(); // render the newly visible row
					row = rows[i - start];
				}

				const row_height = height_map[i] = itemHeight || row.offsetHeight;
				content_height += row_height;
				i += 1;
			}

			$$invalidate(10, end = i);
			const remaining = items.length - end;
			average_height = (top + content_height) / end;
			$$invalidate(7, bottom = remaining * average_height);
			height_map.length = items.length;
			$$invalidate(2, viewport.scrollTop = 0, viewport);
		}

		async function handle_scroll() {
			const { scrollTop } = viewport;
			const old_start = start;

			for (let v = 0; v < rows.length; v += 1) {
				height_map[start + v] = itemHeight || rows[v].offsetHeight;
			}

			let i = 0;
			let y = 0;

			while (i < items.length) {
				const row_height = height_map[i] || average_height;

				if (y + row_height > scrollTop) {
					$$invalidate(9, start = i);
					$$invalidate(6, top = y);
					break;
				}

				y += row_height;
				i += 1;
			}

			while (i < items.length) {
				y += height_map[i] || average_height;
				i += 1;
				if (y > scrollTop + viewport_height) break;
			}

			$$invalidate(10, end = i);
			const remaining = items.length - end;
			average_height = y / end;
			while (i < items.length) height_map[i++] = average_height;
			$$invalidate(7, bottom = remaining * average_height);

			// prevent jumping if we scrolled up into unknown territory
			if (start < old_start) {
				await tick();
				let expected_height = 0;
				let actual_height = 0;

				for (let i = start; i < old_start; i += 1) {
					if (rows[i - start]) {
						expected_height += height_map[i];
						actual_height += itemHeight || rows[i - start].offsetHeight;
					}
				}

				const d = actual_height - expected_height;
				viewport.scrollTo(0, scrollTop + d);
			}
		} // TODO if we overestimated the space these
		// rows would occupy we may need to add some

		// more. maybe we can just call handle_scroll again?
		// trigger initial refresh
		onMount(() => {
			rows = contents.getElementsByTagName("svelte-virtual-list-row");
			$$invalidate(15, mounted = true);
		});

		const writable_props = ["items", "height", "itemHeight", "hoverItemIndex", "start", "end"];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<VirtualList> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("VirtualList", $$slots, ['default']);

		function svelte_virtual_list_contents_binding($$value) {
			binding_callbacks[$$value ? "unshift" : "push"](() => {
				$$invalidate(3, contents = $$value);
			});
		}

		function svelte_virtual_list_viewport_binding($$value) {
			binding_callbacks[$$value ? "unshift" : "push"](() => {
				$$invalidate(2, viewport = $$value);
			});
		}

		function svelte_virtual_list_viewport_elementresize_handler() {
			viewport_height = this.offsetHeight;
			$$invalidate(4, viewport_height);
		}

		$$self.$set = $$props => {
			if ("items" in $$props) $$invalidate(11, items = $$props.items);
			if ("height" in $$props) $$invalidate(0, height = $$props.height);
			if ("itemHeight" in $$props) $$invalidate(12, itemHeight = $$props.itemHeight);
			if ("hoverItemIndex" in $$props) $$invalidate(1, hoverItemIndex = $$props.hoverItemIndex);
			if ("start" in $$props) $$invalidate(9, start = $$props.start);
			if ("end" in $$props) $$invalidate(10, end = $$props.end);
			if ("$$scope" in $$props) $$invalidate(18, $$scope = $$props.$$scope);
		};

		$$self.$capture_state = () => ({
			onMount,
			tick,
			items,
			height,
			itemHeight,
			hoverItemIndex,
			start,
			end,
			height_map,
			rows,
			viewport,
			contents,
			viewport_height,
			visible,
			mounted,
			top,
			bottom,
			average_height,
			refresh,
			handle_scroll
		});

		$$self.$inject_state = $$props => {
			if ("items" in $$props) $$invalidate(11, items = $$props.items);
			if ("height" in $$props) $$invalidate(0, height = $$props.height);
			if ("itemHeight" in $$props) $$invalidate(12, itemHeight = $$props.itemHeight);
			if ("hoverItemIndex" in $$props) $$invalidate(1, hoverItemIndex = $$props.hoverItemIndex);
			if ("start" in $$props) $$invalidate(9, start = $$props.start);
			if ("end" in $$props) $$invalidate(10, end = $$props.end);
			if ("height_map" in $$props) height_map = $$props.height_map;
			if ("rows" in $$props) rows = $$props.rows;
			if ("viewport" in $$props) $$invalidate(2, viewport = $$props.viewport);
			if ("contents" in $$props) $$invalidate(3, contents = $$props.contents);
			if ("viewport_height" in $$props) $$invalidate(4, viewport_height = $$props.viewport_height);
			if ("visible" in $$props) $$invalidate(5, visible = $$props.visible);
			if ("mounted" in $$props) $$invalidate(15, mounted = $$props.mounted);
			if ("top" in $$props) $$invalidate(6, top = $$props.top);
			if ("bottom" in $$props) $$invalidate(7, bottom = $$props.bottom);
			if ("average_height" in $$props) average_height = $$props.average_height;
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		$$self.$$.update = () => {
			if ($$self.$$.dirty & /*items, start, end*/ 3584) {
				$: $$invalidate(5, visible = items.slice(start, end).map((data, i) => {
					return { index: i + start, data };
				}));
			}

			if ($$self.$$.dirty & /*mounted, items, viewport_height, itemHeight*/ 38928) {
				// whenever `items` changes, invalidate the current heightmap
				$: if (mounted) refresh(items, viewport_height, itemHeight);
			}
		};

		return [
			height,
			hoverItemIndex,
			viewport,
			contents,
			viewport_height,
			visible,
			top,
			bottom,
			handle_scroll,
			start,
			end,
			items,
			itemHeight,
			height_map,
			rows,
			mounted,
			average_height,
			refresh,
			$$scope,
			$$slots,
			svelte_virtual_list_contents_binding,
			svelte_virtual_list_viewport_binding,
			svelte_virtual_list_viewport_elementresize_handler
		];
	}

	class VirtualList extends SvelteComponentDev {
		constructor(options) {
			super(options);
			if (!document.getElementById("svelte-p6ehlv-style")) add_css$2();

			init(this, options, instance$2, create_fragment$2, safe_not_equal, {
				items: 11,
				height: 0,
				itemHeight: 12,
				hoverItemIndex: 1,
				start: 9,
				end: 10
			});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "VirtualList",
				options,
				id: create_fragment$2.name
			});
		}

		get items() {
			return this.$$.ctx[11];
		}

		set items(items) {
			this.$set({ items });
			flush();
		}

		get height() {
			return this.$$.ctx[0];
		}

		set height(height) {
			this.$set({ height });
			flush();
		}

		get itemHeight() {
			return this.$$.ctx[12];
		}

		set itemHeight(itemHeight) {
			this.$set({ itemHeight });
			flush();
		}

		get hoverItemIndex() {
			return this.$$.ctx[1];
		}

		set hoverItemIndex(hoverItemIndex) {
			this.$set({ hoverItemIndex });
			flush();
		}

		get start() {
			return this.$$.ctx[9];
		}

		set start(start) {
			this.$set({ start });
			flush();
		}

		get end() {
			return this.$$.ctx[10];
		}

		set end(end) {
			this.$set({ end });
			flush();
		}
	}

	/* src/List.svelte generated by Svelte v3.23.0 */
	const file$3 = "src/List.svelte";

	function add_css$3() {
		var style = element("style");
		style.id = "svelte-1dsxvxg-style";
		style.textContent = ".listContainer.svelte-1dsxvxg{border-radius:var(--border-radius);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--background)}.virtualList.svelte-1dsxvxg{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-1dsxvxg{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-1dsxvxg{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848F)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5zdmVsdGUiLCJzb3VyY2VzIjpbIkxpc3Quc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGltcG9ydCB7IGJlZm9yZVVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBvbkRlc3Ryb3ksIG9uTW91bnQsIHRpY2sgfSBmcm9tICdzdmVsdGUnO1xuXG4gIGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cbiAgZXhwb3J0IGxldCBjb250YWluZXIgPSB1bmRlZmluZWQ7XG5cbiAgaW1wb3J0IEl0ZW1Db21wb25lbnQgZnJvbSAnLi9JdGVtLnN2ZWx0ZSc7XG4gIGltcG9ydCBWaXJ0dWFsTGlzdCBmcm9tICcuL1ZpcnR1YWxMaXN0LnN2ZWx0ZSc7XG5cbiAgZXhwb3J0IGxldCBJdGVtID0gSXRlbUNvbXBvbmVudDtcbiAgZXhwb3J0IGxldCBpc1ZpcnR1YWxMaXN0ID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgaXRlbXMgPSBbXTtcbiAgZXhwb3J0IGxldCBnZXRPcHRpb25MYWJlbCA9IChvcHRpb24sIGZpbHRlclRleHQpID0+IHtcbiAgICBpZiAob3B0aW9uKSByZXR1cm4gb3B0aW9uLmlzQ3JlYXRvciA/IGBDcmVhdGUgXFxcIiR7ZmlsdGVyVGV4dH1cXFwiYCA6IG9wdGlvbi5sYWJlbDtcbiAgfTtcbiAgZXhwb3J0IGxldCBnZXRHcm91cEhlYWRlckxhYmVsID0gKG9wdGlvbikgPT4geyByZXR1cm4gb3B0aW9uLmxhYmVsIH07XG4gIGV4cG9ydCBsZXQgaXRlbUhlaWdodCA9IDQwO1xuICBleHBvcnQgbGV0IGhvdmVySXRlbUluZGV4ID0gMDtcbiAgZXhwb3J0IGxldCBzZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IG9wdGlvbklkZW50aWZpZXIgPSAndmFsdWUnO1xuICBleHBvcnQgbGV0IGhpZGVFbXB0eVN0YXRlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgbm9PcHRpb25zTWVzc2FnZSA9ICdObyBvcHRpb25zJztcbiAgZXhwb3J0IGxldCBpc011bHRpID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgYWN0aXZlSXRlbUluZGV4ID0gMDtcbiAgZXhwb3J0IGxldCBmaWx0ZXJUZXh0ID0gJyc7XG5cbiAgbGV0IGlzU2Nyb2xsaW5nVGltZXIgPSAwO1xuICBsZXQgaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgbGV0IHByZXZfaXRlbXM7XG4gIGxldCBwcmV2X2FjdGl2ZUl0ZW1JbmRleDtcbiAgbGV0IHByZXZfc2VsZWN0ZWRWYWx1ZTtcblxuICBvbk1vdW50KCgpID0+IHtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID4gMCAmJiAhaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICBjb25zdCBfaG92ZXJJdGVtSW5kZXggPSBpdGVtcy5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW1bb3B0aW9uSWRlbnRpZmllcl0gPT09IHNlbGVjdGVkVmFsdWVbb3B0aW9uSWRlbnRpZmllcl0pO1xuXG4gICAgICBpZiAoX2hvdmVySXRlbUluZGV4KSB7XG4gICAgICAgIGhvdmVySXRlbUluZGV4ID0gX2hvdmVySXRlbUluZGV4O1xuICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvQWN0aXZlSXRlbSgnYWN0aXZlJyk7XG5cblxuICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjbGVhclRpbWVvdXQoaXNTY3JvbGxpbmdUaW1lcik7XG5cbiAgICAgIGlzU2Nyb2xsaW5nVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaXNTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDEwMCk7XG4gICAgfSwgZmFsc2UpO1xuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIC8vIGNsZWFyVGltZW91dChpc1Njcm9sbGluZ1RpbWVyKTtcbiAgfSk7XG5cbiAgYmVmb3JlVXBkYXRlKCgpID0+IHtcblxuICAgIGlmIChpdGVtcyAhPT0gcHJldl9pdGVtcyAmJiBpdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBob3Zlckl0ZW1JbmRleCA9IDA7XG4gICAgfVxuXG5cbiAgICAvLyBpZiAocHJldl9hY3RpdmVJdGVtSW5kZXggJiYgYWN0aXZlSXRlbUluZGV4ID4gLTEpIHtcbiAgICAvLyAgIGhvdmVySXRlbUluZGV4ID0gYWN0aXZlSXRlbUluZGV4O1xuXG4gICAgLy8gICBzY3JvbGxUb0FjdGl2ZUl0ZW0oJ2FjdGl2ZScpO1xuICAgIC8vIH1cbiAgICAvLyBpZiAocHJldl9zZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWUpIHtcbiAgICAvLyAgIHNjcm9sbFRvQWN0aXZlSXRlbSgnYWN0aXZlJyk7XG5cbiAgICAvLyAgIGlmIChpdGVtcyAmJiAhaXNNdWx0aSkge1xuICAgIC8vICAgICBjb25zdCBob3Zlckl0ZW1JbmRleCA9IGl0ZW1zLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbVtvcHRpb25JZGVudGlmaWVyXSA9PT0gc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSk7XG5cbiAgICAvLyAgICAgaWYgKGhvdmVySXRlbUluZGV4KSB7XG4gICAgLy8gICAgICAgaG92ZXJJdGVtSW5kZXggPSBob3Zlckl0ZW1JbmRleDtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIHByZXZfaXRlbXMgPSBpdGVtcztcbiAgICBwcmV2X2FjdGl2ZUl0ZW1JbmRleCA9IGFjdGl2ZUl0ZW1JbmRleDtcbiAgICBwcmV2X3NlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xuICB9KTtcblxuICBmdW5jdGlvbiBpdGVtQ2xhc3Nlcyhob3Zlckl0ZW1JbmRleCwgaXRlbSwgaXRlbUluZGV4LCBpdGVtcywgc2VsZWN0ZWRWYWx1ZSwgb3B0aW9uSWRlbnRpZmllciwgaXNNdWx0aSkge1xuICAgIHJldHVybiBgJHtzZWxlY3RlZFZhbHVlICYmICFpc011bHRpICYmIChzZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBpdGVtW29wdGlvbklkZW50aWZpZXJdKSA/ICdhY3RpdmUgJyA6ICcnfSR7aG92ZXJJdGVtSW5kZXggPT09IGl0ZW1JbmRleCB8fCBpdGVtcy5sZW5ndGggPT09IDEgPyAnaG92ZXInIDogJyd9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVNlbGVjdChpdGVtKSB7XG4gICAgaWYgKGl0ZW0uaXNDcmVhdG9yKSByZXR1cm47XG4gICAgZGlzcGF0Y2goJ2l0ZW1TZWxlY3RlZCcsIGl0ZW0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlSG92ZXIoaSkge1xuICAgIGlmIChpc1Njcm9sbGluZykgcmV0dXJuO1xuICAgIGhvdmVySXRlbUluZGV4ID0gaTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGFyZ3MpIHtcbiAgICBjb25zdCB7IGl0ZW0sIGksIGV2ZW50IH0gPSBhcmdzO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKHNlbGVjdGVkVmFsdWUgJiYgIWlzTXVsdGkgJiYgc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSA9PT0gaXRlbVtvcHRpb25JZGVudGlmaWVyXSkgcmV0dXJuIGNsb3NlTGlzdCgpO1xuXG4gICAgaWYgKGl0ZW0uaXNDcmVhdG9yKSB7XG4gICAgICBkaXNwYXRjaCgnaXRlbUNyZWF0ZWQnLCBmaWx0ZXJUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaTtcbiAgICAgIGhvdmVySXRlbUluZGV4ID0gaTtcbiAgICAgIGhhbmRsZVNlbGVjdChpdGVtKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUxpc3QoKSB7XG4gICAgZGlzcGF0Y2goJ2Nsb3NlTGlzdCcpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSG92ZXJJdGVtKGluY3JlbWVudCkge1xuICAgIGlmIChpc1ZpcnR1YWxMaXN0KSByZXR1cm47XG5cbiAgICBsZXQgaXNOb25TZWxlY3RhYmxlSXRlbSA9IHRydWU7XG5cbiAgICB3aGlsZSAoaXNOb25TZWxlY3RhYmxlSXRlbSkge1xuICAgICAgaWYgKGluY3JlbWVudCA+IDAgJiYgaG92ZXJJdGVtSW5kZXggPT09IChpdGVtcy5sZW5ndGggLSAxKSkge1xuICAgICAgICBob3Zlckl0ZW1JbmRleCA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChpbmNyZW1lbnQgPCAwICYmIGhvdmVySXRlbUluZGV4ID09PSAwKSB7XG4gICAgICAgIGhvdmVySXRlbUluZGV4ID0gaXRlbXMubGVuZ3RoIC0gMTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBob3Zlckl0ZW1JbmRleCA9IGhvdmVySXRlbUluZGV4ICsgaW5jcmVtZW50O1xuICAgICAgfVxuXG4gICAgICBpc05vblNlbGVjdGFibGVJdGVtID0gaXRlbXNbaG92ZXJJdGVtSW5kZXhdLmlzR3JvdXBIZWFkZXIgJiYgIWl0ZW1zW2hvdmVySXRlbUluZGV4XS5pc1NlbGVjdGFibGU7XG4gICAgfVxuXG4gICAgYXdhaXQgdGljaygpO1xuXG4gICAgc2Nyb2xsVG9BY3RpdmVJdGVtKCdob3ZlcicpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpdGVtcy5sZW5ndGggJiYgdXBkYXRlSG92ZXJJdGVtKDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGl0ZW1zLmxlbmd0aCAmJiB1cGRhdGVIb3Zlckl0ZW0oLTEpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSBicmVhaztcbiAgICAgICAgY29uc3QgaG92ZXJJdGVtID0gaXRlbXNbaG92ZXJJdGVtSW5kZXhdO1xuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiAhaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBob3Zlckl0ZW1bb3B0aW9uSWRlbnRpZmllcl0pIHtcbiAgICAgICAgICBjbG9zZUxpc3QoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChob3Zlckl0ZW0uaXNDcmVhdG9yKSB7XG4gICAgICAgICAgZGlzcGF0Y2goJ2l0ZW1DcmVhdGVkJywgZmlsdGVyVGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaG92ZXJJdGVtSW5kZXg7XG4gICAgICAgICAgaGFuZGxlU2VsZWN0KGl0ZW1zW2hvdmVySXRlbUluZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdUYWInOlxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIGJyZWFrO1xuICAgICAgICBpZiAoc2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBpdGVtc1tob3Zlckl0ZW1JbmRleF1bb3B0aW9uSWRlbnRpZmllcl0pIHJldHVybiBjbG9zZUxpc3QoKTtcbiAgICAgICAgYWN0aXZlSXRlbUluZGV4ID0gaG92ZXJJdGVtSW5kZXg7XG4gICAgICAgIGhhbmRsZVNlbGVjdChpdGVtc1tob3Zlckl0ZW1JbmRleF0pO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxUb0FjdGl2ZUl0ZW0oY2xhc3NOYW1lKSB7XG4gICAgaWYgKGlzVmlydHVhbExpc3QgfHwgIWNvbnRhaW5lcikgcmV0dXJuO1xuXG4gICAgbGV0IG9mZnNldEJvdW5kaW5nO1xuICAgIGNvbnN0IGZvY3VzZWRFbGVtQm91bmRpbmcgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgLmxpc3RJdGVtIC4ke2NsYXNzTmFtZX1gKTtcblxuICAgIGlmIChmb2N1c2VkRWxlbUJvdW5kaW5nKSB7XG4gICAgICBvZmZzZXRCb3VuZGluZyA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b20gLSBmb2N1c2VkRWxlbUJvdW5kaW5nLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmJvdHRvbTtcbiAgICB9XG5cbiAgICBjb250YWluZXIuc2Nyb2xsVG9wIC09IG9mZnNldEJvdW5kaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNJdGVtQWN0aXZlKGl0ZW0sIHNlbGVjdGVkVmFsdWUsIG9wdGlvbklkZW50aWZpZXIpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZSAmJiAoc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSA9PT0gaXRlbVtvcHRpb25JZGVudGlmaWVyXSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gaXNJdGVtRmlyc3QoaXRlbUluZGV4KSB7XG4gICAgcmV0dXJuIGl0ZW1JbmRleCA9PT0gMDtcbiAgfTtcblxuICBmdW5jdGlvbiBpc0l0ZW1Ib3Zlcihob3Zlckl0ZW1JbmRleCwgaXRlbSwgaXRlbUluZGV4LCBpdGVtcykge1xuICAgIHJldHVybiBob3Zlckl0ZW1JbmRleCA9PT0gaXRlbUluZGV4IHx8IGl0ZW1zLmxlbmd0aCA9PT0gMTtcbiAgfVxuXG48L3NjcmlwdD5cblxuPHN2ZWx0ZTp3aW5kb3cgb246a2V5ZG93bj1cIntoYW5kbGVLZXlEb3dufVwiIC8+XG5cbnsjaWYgaXNWaXJ0dWFsTGlzdH1cbjxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyIHZpcnR1YWxMaXN0XCIgYmluZDp0aGlzPXtjb250YWluZXJ9PlxuXG4gIDxWaXJ0dWFsTGlzdCB7aXRlbXN9IHtpdGVtSGVpZ2h0fSBsZXQ6aXRlbSBsZXQ6aT5cbiAgXG4gICAgPGRpdiBvbjptb3VzZW92ZXI9XCJ7KCkgPT4gaGFuZGxlSG92ZXIoaSl9XCIgb246Y2xpY2s9XCJ7ZXZlbnQgPT4gaGFuZGxlQ2xpY2soe2l0ZW0sIGksIGV2ZW50fSl9XCJcbiAgICAgICAgY2xhc3M9XCJsaXN0SXRlbVwiPlxuICAgICAgICAgIDxzdmVsdGU6Y29tcG9uZW50IFxuICAgICAgICAgICAgdGhpcz1cIntJdGVtfVwiXG4gICAgICAgICAgICB7aXRlbX1cbiAgICAgICAgICAgIHtmaWx0ZXJUZXh0fVxuICAgICAgICAgICAge2dldE9wdGlvbkxhYmVsfVxuICAgICAgICAgICAgaXNGaXJzdD1cIntpc0l0ZW1GaXJzdChpKX1cIlxuICAgICAgICAgICAgaXNBY3RpdmU9XCJ7aXNJdGVtQWN0aXZlKGl0ZW0sIHNlbGVjdGVkVmFsdWUsIG9wdGlvbklkZW50aWZpZXIpfVwiXG4gICAgICAgICAgICBpc0hvdmVyPVwie2lzSXRlbUhvdmVyKGhvdmVySXRlbUluZGV4LCBpdGVtLCBpLCBpdGVtcyl9XCJcbiAgICAgICAgICAvPlxuICAgIDwvZGl2PlxuICBcbjwvVmlydHVhbExpc3Q+XG48L2Rpdj5cbnsvaWZ9XG5cbnsjaWYgIWlzVmlydHVhbExpc3R9XG48ZGl2IGNsYXNzPVwibGlzdENvbnRhaW5lclwiIGJpbmQ6dGhpcz17Y29udGFpbmVyfT5cbiAgeyNlYWNoIGl0ZW1zIGFzIGl0ZW0sIGl9XG4gICAgeyNpZiBpdGVtLmlzR3JvdXBIZWFkZXIgJiYgIWl0ZW0uaXNTZWxlY3RhYmxlfVxuICAgICAgPGRpdiBjbGFzcz1cImxpc3RHcm91cFRpdGxlXCI+e2dldEdyb3VwSGVhZGVyTGFiZWwoaXRlbSl9PC9kaXY+XG4gICAgeyA6ZWxzZSB9XG4gICAgPGRpdiBcbiAgICAgIG9uOm1vdXNlb3Zlcj1cInsoKSA9PiBoYW5kbGVIb3ZlcihpKX1cIiBcbiAgICAgIG9uOmNsaWNrPVwie2V2ZW50ID0+IGhhbmRsZUNsaWNrKHtpdGVtLCBpLCBldmVudH0pfVwiXG4gICAgICBjbGFzcz1cImxpc3RJdGVtXCJcbiAgICA+XG4gICAgICA8c3ZlbHRlOmNvbXBvbmVudCBcbiAgICAgICAgdGhpcz1cIntJdGVtfVwiXG4gICAgICAgIHtpdGVtfVxuICAgICAgICB7ZmlsdGVyVGV4dH1cbiAgICAgICAge2dldE9wdGlvbkxhYmVsfVxuICAgICAgICBpc0ZpcnN0PVwie2lzSXRlbUZpcnN0KGkpfVwiXG4gICAgICAgIGlzQWN0aXZlPVwie2lzSXRlbUFjdGl2ZShpdGVtLCBzZWxlY3RlZFZhbHVlLCBvcHRpb25JZGVudGlmaWVyKX1cIlxuICAgICAgICBpc0hvdmVyPVwie2lzSXRlbUhvdmVyKGhvdmVySXRlbUluZGV4LCBpdGVtLCBpLCBpdGVtcyl9XCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICAgey9pZn1cbiAgezplbHNlfVxuICAgIHsjaWYgIWhpZGVFbXB0eVN0YXRlfVxuICAgICAgPGRpdiBjbGFzcz1cImVtcHR5XCI+e25vT3B0aW9uc01lc3NhZ2V9PC9kaXY+XG4gICAgey9pZn1cbiAgey9lYWNofVxuPC9kaXY+XG57L2lmfVxuXG48c3R5bGU+XG4gIC5saXN0Q29udGFpbmVyIHtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1saXN0TWF4SGVpZ2h0LCAyNTBweCk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIC52aXJ0dWFsTGlzdCB7XG4gICAgaGVpZ2h0OiB2YXIoLS12aXJ0dWFsTGlzdEhlaWdodCwgMjAwcHgpO1xuICB9XG5cbiAgLmxpc3RHcm91cFRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JvdXBUaXRsZUNvbG9yLCAjOGY4ZjhmKTtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgZm9udC1zaXplOiB2YXIoLS1ncm91cFRpdGxlRm9udFNpemUsIDEycHgpO1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1ncm91cFRpdGxlRm9udFdlaWdodCwgNjAwKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgcGFkZGluZzogdmFyKC0tZ3JvdXBUaXRsZVBhZGRpbmcsIDAgMjBweCk7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHZhcigtLWdyb3VwVGl0bGVUZXh0VHJhbnNmb3JtLCB1cHBlcmNhc2UpO1xuICB9XG5cbiAgLmVtcHR5IHtcbiAgICB0ZXh0LWFsaWduOiB2YXIoLS1saXN0RW1wdHlUZXh0QWxpZ24sIGNlbnRlcik7XG4gICAgcGFkZGluZzogdmFyKC0tbGlzdEVtcHR5UGFkZGluZywgMjBweCAwKTtcbiAgICBjb2xvcjogdmFyKC0tbGlzdEVtcHR5Q29sb3IsICM3ODg0OEYpO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNRRSxjQUFjLGVBQUMsQ0FBQyxBQUNkLGFBQWEsQ0FBRSxJQUFJLGVBQWUsQ0FBQyxDQUNuQyxVQUFVLENBQUUsSUFBSSxlQUFlLENBQUMsTUFBTSxDQUFDLENBQ3ZDLFVBQVUsQ0FBRSxJQUFJLENBQ2hCLFVBQVUsQ0FBRSxJQUFJLFlBQVksQ0FBQyxBQUMvQixDQUFDLEFBRUQsWUFBWSxlQUFDLENBQUMsQUFDWixNQUFNLENBQUUsSUFBSSxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQUFDekMsQ0FBQyxBQUVELGVBQWUsZUFBQyxDQUFDLEFBQ2YsS0FBSyxDQUFFLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQ3RDLE1BQU0sQ0FBRSxPQUFPLENBQ2YsU0FBUyxDQUFFLElBQUksb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQzFDLFdBQVcsQ0FBRSxJQUFJLHNCQUFzQixDQUFDLElBQUksQ0FBQyxDQUM3QyxNQUFNLENBQUUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQzNCLFdBQVcsQ0FBRSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FDaEMsT0FBTyxDQUFFLElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQ3pDLGFBQWEsQ0FBRSxRQUFRLENBQ3ZCLFVBQVUsQ0FBRSxNQUFNLENBQ2xCLFdBQVcsQ0FBRSxNQUFNLENBQ25CLGNBQWMsQ0FBRSxJQUFJLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxBQUMzRCxDQUFDLEFBRUQsTUFBTSxlQUFDLENBQUMsQUFDTixVQUFVLENBQUUsSUFBSSxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsQ0FDN0MsT0FBTyxDQUFFLElBQUksa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQ3hDLEtBQUssQ0FBRSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxBQUN2QyxDQUFDIn0= */";
		append_dev(document.head, style);
	}

	function get_each_context$1(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[34] = list[i];
		child_ctx[36] = i;
		return child_ctx;
	}

	// (210:0) {#if isVirtualList}
	function create_if_block_3(ctx) {
		let div;
		let current;

		const virtuallist = new VirtualList({
				props: {
					items: /*items*/ ctx[4],
					itemHeight: /*itemHeight*/ ctx[7],
					$$slots: {
						default: [
							create_default_slot,
							({ item, i }) => ({ 34: item, 36: i }),
							({ item, i }) => [0, (item ? 8 : 0) | (i ? 32 : 0)]
						]
					},
					$$scope: { ctx }
				},
				$$inline: true
			});

		const block = {
			c: function create() {
				div = element("div");
				create_component(virtuallist.$$.fragment);
				attr_dev(div, "class", "listContainer virtualList svelte-1dsxvxg");
				add_location(div, file$3, 210, 0, 5850);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				mount_component(virtuallist, div, null);
				/*div_binding*/ ctx[30](div);
				current = true;
			},
			p: function update(ctx, dirty) {
				const virtuallist_changes = {};
				if (dirty[0] & /*items*/ 16) virtuallist_changes.items = /*items*/ ctx[4];
				if (dirty[0] & /*itemHeight*/ 128) virtuallist_changes.itemHeight = /*itemHeight*/ ctx[7];

				if (dirty[0] & /*Item, filterText, getOptionLabel, selectedValue, optionIdentifier, hoverItemIndex, items*/ 4918 | dirty[1] & /*$$scope, item, i*/ 104) {
					virtuallist_changes.$$scope = { dirty, ctx };
				}

				virtuallist.$set(virtuallist_changes);
			},
			i: function intro(local) {
				if (current) return;
				transition_in(virtuallist.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(virtuallist.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
				destroy_component(virtuallist);
				/*div_binding*/ ctx[30](null);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block_3.name,
			type: "if",
			source: "(210:0) {#if isVirtualList}",
			ctx
		});

		return block;
	}

	// (213:2) <VirtualList {items} {itemHeight} let:item let:i>
	function create_default_slot(ctx) {
		let div;
		let current;
		let mounted;
		let dispose;
		var switch_value = /*Item*/ ctx[2];

		function switch_props(ctx) {
			return {
				props: {
					item: /*item*/ ctx[34],
					filterText: /*filterText*/ ctx[12],
					getOptionLabel: /*getOptionLabel*/ ctx[5],
					isFirst: isItemFirst(/*i*/ ctx[36]),
					isActive: isItemActive(/*item*/ ctx[34], /*selectedValue*/ ctx[8], /*optionIdentifier*/ ctx[9]),
					isHover: isItemHover(/*hoverItemIndex*/ ctx[1], /*item*/ ctx[34], /*i*/ ctx[36], /*items*/ ctx[4])
				},
				$$inline: true
			};
		}

		if (switch_value) {
			var switch_instance = new switch_value(switch_props(ctx));
		}

		function mouseover_handler(...args) {
			return /*mouseover_handler*/ ctx[28](/*i*/ ctx[36], ...args);
		}

		function click_handler(...args) {
			return /*click_handler*/ ctx[29](/*item*/ ctx[34], /*i*/ ctx[36], ...args);
		}

		const block = {
			c: function create() {
				div = element("div");
				if (switch_instance) create_component(switch_instance.$$.fragment);
				attr_dev(div, "class", "listItem");
				add_location(div, file$3, 214, 4, 5972);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);

				if (switch_instance) {
					mount_component(switch_instance, div, null);
				}

				current = true;

				if (!mounted) {
					dispose = [
						listen_dev(div, "mouseover", mouseover_handler, false, false, false),
						listen_dev(div, "click", click_handler, false, false, false)
					];

					mounted = true;
				}
			},
			p: function update(new_ctx, dirty) {
				ctx = new_ctx;
				const switch_instance_changes = {};
				if (dirty[1] & /*item*/ 8) switch_instance_changes.item = /*item*/ ctx[34];
				if (dirty[0] & /*filterText*/ 4096) switch_instance_changes.filterText = /*filterText*/ ctx[12];
				if (dirty[0] & /*getOptionLabel*/ 32) switch_instance_changes.getOptionLabel = /*getOptionLabel*/ ctx[5];
				if (dirty[1] & /*i*/ 32) switch_instance_changes.isFirst = isItemFirst(/*i*/ ctx[36]);
				if (dirty[0] & /*selectedValue, optionIdentifier*/ 768 | dirty[1] & /*item*/ 8) switch_instance_changes.isActive = isItemActive(/*item*/ ctx[34], /*selectedValue*/ ctx[8], /*optionIdentifier*/ ctx[9]);
				if (dirty[0] & /*hoverItemIndex, items*/ 18 | dirty[1] & /*item, i*/ 40) switch_instance_changes.isHover = isItemHover(/*hoverItemIndex*/ ctx[1], /*item*/ ctx[34], /*i*/ ctx[36], /*items*/ ctx[4]);

				if (switch_value !== (switch_value = /*Item*/ ctx[2])) {
					if (switch_instance) {
						group_outros();
						const old_component = switch_instance;

						transition_out(old_component.$$.fragment, 1, 0, () => {
							destroy_component(old_component, 1);
						});

						check_outros();
					}

					if (switch_value) {
						switch_instance = new switch_value(switch_props(ctx));
						create_component(switch_instance.$$.fragment);
						transition_in(switch_instance.$$.fragment, 1);
						mount_component(switch_instance, div, null);
					} else {
						switch_instance = null;
					}
				} else if (switch_value) {
					switch_instance.$set(switch_instance_changes);
				}
			},
			i: function intro(local) {
				if (current) return;
				if (switch_instance) transition_in(switch_instance.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				if (switch_instance) transition_out(switch_instance.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
				if (switch_instance) destroy_component(switch_instance);
				mounted = false;
				run_all(dispose);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_default_slot.name,
			type: "slot",
			source: "(213:2) <VirtualList {items} {itemHeight} let:item let:i>",
			ctx
		});

		return block;
	}

	// (232:0) {#if !isVirtualList}
	function create_if_block(ctx) {
		let div;
		let current;
		let each_value = /*items*/ ctx[4];
		validate_each_argument(each_value);
		let each_blocks = [];

		for (let i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
		}

		const out = i => transition_out(each_blocks[i], 1, 1, () => {
			each_blocks[i] = null;
		});

		let each_1_else = null;

		if (!each_value.length) {
			each_1_else = create_else_block_1(ctx);
		}

		const block = {
			c: function create() {
				div = element("div");

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				if (each_1_else) {
					each_1_else.c();
				}

				attr_dev(div, "class", "listContainer svelte-1dsxvxg");
				add_location(div, file$3, 232, 0, 6482);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);

				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(div, null);
				}

				if (each_1_else) {
					each_1_else.m(div, null);
				}

				/*div_binding_1*/ ctx[33](div);
				current = true;
			},
			p: function update(ctx, dirty) {
				if (dirty[0] & /*getGroupHeaderLabel, items, handleHover, handleClick, Item, filterText, getOptionLabel, selectedValue, optionIdentifier, hoverItemIndex, noOptionsMessage, hideEmptyState*/ 32630) {
					each_value = /*items*/ ctx[4];
					validate_each_argument(each_value);
					let i;

					for (i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context$1(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(child_ctx, dirty);
							transition_in(each_blocks[i], 1);
						} else {
							each_blocks[i] = create_each_block$1(child_ctx);
							each_blocks[i].c();
							transition_in(each_blocks[i], 1);
							each_blocks[i].m(div, null);
						}
					}

					group_outros();

					for (i = each_value.length; i < each_blocks.length; i += 1) {
						out(i);
					}

					check_outros();

					if (!each_value.length && each_1_else) {
						each_1_else.p(ctx, dirty);
					} else if (!each_value.length) {
						each_1_else = create_else_block_1(ctx);
						each_1_else.c();
						each_1_else.m(div, null);
					} else if (each_1_else) {
						each_1_else.d(1);
						each_1_else = null;
					}
				}
			},
			i: function intro(local) {
				if (current) return;

				for (let i = 0; i < each_value.length; i += 1) {
					transition_in(each_blocks[i]);
				}

				current = true;
			},
			o: function outro(local) {
				each_blocks = each_blocks.filter(Boolean);

				for (let i = 0; i < each_blocks.length; i += 1) {
					transition_out(each_blocks[i]);
				}

				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
				destroy_each(each_blocks, detaching);
				if (each_1_else) each_1_else.d();
				/*div_binding_1*/ ctx[33](null);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block.name,
			type: "if",
			source: "(232:0) {#if !isVirtualList}",
			ctx
		});

		return block;
	}

	// (254:2) {:else}
	function create_else_block_1(ctx) {
		let if_block_anchor;
		let if_block = !/*hideEmptyState*/ ctx[10] && create_if_block_2(ctx);

		const block = {
			c: function create() {
				if (if_block) if_block.c();
				if_block_anchor = empty();
			},
			m: function mount(target, anchor) {
				if (if_block) if_block.m(target, anchor);
				insert_dev(target, if_block_anchor, anchor);
			},
			p: function update(ctx, dirty) {
				if (!/*hideEmptyState*/ ctx[10]) {
					if (if_block) {
						if_block.p(ctx, dirty);
					} else {
						if_block = create_if_block_2(ctx);
						if_block.c();
						if_block.m(if_block_anchor.parentNode, if_block_anchor);
					}
				} else if (if_block) {
					if_block.d(1);
					if_block = null;
				}
			},
			d: function destroy(detaching) {
				if (if_block) if_block.d(detaching);
				if (detaching) detach_dev(if_block_anchor);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_else_block_1.name,
			type: "else",
			source: "(254:2) {:else}",
			ctx
		});

		return block;
	}

	// (255:4) {#if !hideEmptyState}
	function create_if_block_2(ctx) {
		let div;
		let t;

		const block = {
			c: function create() {
				div = element("div");
				t = text(/*noOptionsMessage*/ ctx[11]);
				attr_dev(div, "class", "empty svelte-1dsxvxg");
				add_location(div, file$3, 255, 6, 7186);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				append_dev(div, t);
			},
			p: function update(ctx, dirty) {
				if (dirty[0] & /*noOptionsMessage*/ 2048) set_data_dev(t, /*noOptionsMessage*/ ctx[11]);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block_2.name,
			type: "if",
			source: "(255:4) {#if !hideEmptyState}",
			ctx
		});

		return block;
	}

	// (237:4) { :else }
	function create_else_block(ctx) {
		let div;
		let t;
		let current;
		let mounted;
		let dispose;
		var switch_value = /*Item*/ ctx[2];

		function switch_props(ctx) {
			return {
				props: {
					item: /*item*/ ctx[34],
					filterText: /*filterText*/ ctx[12],
					getOptionLabel: /*getOptionLabel*/ ctx[5],
					isFirst: isItemFirst(/*i*/ ctx[36]),
					isActive: isItemActive(/*item*/ ctx[34], /*selectedValue*/ ctx[8], /*optionIdentifier*/ ctx[9]),
					isHover: isItemHover(/*hoverItemIndex*/ ctx[1], /*item*/ ctx[34], /*i*/ ctx[36], /*items*/ ctx[4])
				},
				$$inline: true
			};
		}

		if (switch_value) {
			var switch_instance = new switch_value(switch_props(ctx));
		}

		function mouseover_handler_1(...args) {
			return /*mouseover_handler_1*/ ctx[31](/*i*/ ctx[36], ...args);
		}

		function click_handler_1(...args) {
			return /*click_handler_1*/ ctx[32](/*item*/ ctx[34], /*i*/ ctx[36], ...args);
		}

		const block = {
			c: function create() {
				div = element("div");
				if (switch_instance) create_component(switch_instance.$$.fragment);
				t = space();
				attr_dev(div, "class", "listItem");
				add_location(div, file$3, 237, 4, 6696);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);

				if (switch_instance) {
					mount_component(switch_instance, div, null);
				}

				append_dev(div, t);
				current = true;

				if (!mounted) {
					dispose = [
						listen_dev(div, "mouseover", mouseover_handler_1, false, false, false),
						listen_dev(div, "click", click_handler_1, false, false, false)
					];

					mounted = true;
				}
			},
			p: function update(new_ctx, dirty) {
				ctx = new_ctx;
				const switch_instance_changes = {};
				if (dirty[0] & /*items*/ 16) switch_instance_changes.item = /*item*/ ctx[34];
				if (dirty[0] & /*filterText*/ 4096) switch_instance_changes.filterText = /*filterText*/ ctx[12];
				if (dirty[0] & /*getOptionLabel*/ 32) switch_instance_changes.getOptionLabel = /*getOptionLabel*/ ctx[5];
				if (dirty[0] & /*items, selectedValue, optionIdentifier*/ 784) switch_instance_changes.isActive = isItemActive(/*item*/ ctx[34], /*selectedValue*/ ctx[8], /*optionIdentifier*/ ctx[9]);
				if (dirty[0] & /*hoverItemIndex, items*/ 18) switch_instance_changes.isHover = isItemHover(/*hoverItemIndex*/ ctx[1], /*item*/ ctx[34], /*i*/ ctx[36], /*items*/ ctx[4]);

				if (switch_value !== (switch_value = /*Item*/ ctx[2])) {
					if (switch_instance) {
						group_outros();
						const old_component = switch_instance;

						transition_out(old_component.$$.fragment, 1, 0, () => {
							destroy_component(old_component, 1);
						});

						check_outros();
					}

					if (switch_value) {
						switch_instance = new switch_value(switch_props(ctx));
						create_component(switch_instance.$$.fragment);
						transition_in(switch_instance.$$.fragment, 1);
						mount_component(switch_instance, div, t);
					} else {
						switch_instance = null;
					}
				} else if (switch_value) {
					switch_instance.$set(switch_instance_changes);
				}
			},
			i: function intro(local) {
				if (current) return;
				if (switch_instance) transition_in(switch_instance.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				if (switch_instance) transition_out(switch_instance.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
				if (switch_instance) destroy_component(switch_instance);
				mounted = false;
				run_all(dispose);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_else_block.name,
			type: "else",
			source: "(237:4) { :else }",
			ctx
		});

		return block;
	}

	// (235:4) {#if item.isGroupHeader && !item.isSelectable}
	function create_if_block_1(ctx) {
		let div;
		let t_value = /*getGroupHeaderLabel*/ ctx[6](/*item*/ ctx[34]) + "";
		let t;

		const block = {
			c: function create() {
				div = element("div");
				t = text(t_value);
				attr_dev(div, "class", "listGroupTitle svelte-1dsxvxg");
				add_location(div, file$3, 235, 6, 6616);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				append_dev(div, t);
			},
			p: function update(ctx, dirty) {
				if (dirty[0] & /*getGroupHeaderLabel, items*/ 80 && t_value !== (t_value = /*getGroupHeaderLabel*/ ctx[6](/*item*/ ctx[34]) + "")) set_data_dev(t, t_value);
			},
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block_1.name,
			type: "if",
			source: "(235:4) {#if item.isGroupHeader && !item.isSelectable}",
			ctx
		});

		return block;
	}

	// (234:2) {#each items as item, i}
	function create_each_block$1(ctx) {
		let current_block_type_index;
		let if_block;
		let if_block_anchor;
		let current;
		const if_block_creators = [create_if_block_1, create_else_block];
		const if_blocks = [];

		function select_block_type(ctx, dirty) {
			if (/*item*/ ctx[34].isGroupHeader && !/*item*/ ctx[34].isSelectable) return 0;
			return 1;
		}

		current_block_type_index = select_block_type(ctx, [-1]);
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

		const block = {
			c: function create() {
				if_block.c();
				if_block_anchor = empty();
			},
			m: function mount(target, anchor) {
				if_blocks[current_block_type_index].m(target, anchor);
				insert_dev(target, if_block_anchor, anchor);
				current = true;
			},
			p: function update(ctx, dirty) {
				let previous_block_index = current_block_type_index;
				current_block_type_index = select_block_type(ctx, dirty);

				if (current_block_type_index === previous_block_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				} else {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(if_block);
				current = true;
			},
			o: function outro(local) {
				transition_out(if_block);
				current = false;
			},
			d: function destroy(detaching) {
				if_blocks[current_block_type_index].d(detaching);
				if (detaching) detach_dev(if_block_anchor);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_each_block$1.name,
			type: "each",
			source: "(234:2) {#each items as item, i}",
			ctx
		});

		return block;
	}

	function create_fragment$3(ctx) {
		let t;
		let if_block1_anchor;
		let current;
		let mounted;
		let dispose;
		let if_block0 = /*isVirtualList*/ ctx[3] && create_if_block_3(ctx);
		let if_block1 = !/*isVirtualList*/ ctx[3] && create_if_block(ctx);

		const block = {
			c: function create() {
				if (if_block0) if_block0.c();
				t = space();
				if (if_block1) if_block1.c();
				if_block1_anchor = empty();
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				if (if_block0) if_block0.m(target, anchor);
				insert_dev(target, t, anchor);
				if (if_block1) if_block1.m(target, anchor);
				insert_dev(target, if_block1_anchor, anchor);
				current = true;

				if (!mounted) {
					dispose = listen_dev(window, "keydown", /*handleKeyDown*/ ctx[15], false, false, false);
					mounted = true;
				}
			},
			p: function update(ctx, dirty) {
				if (/*isVirtualList*/ ctx[3]) {
					if (if_block0) {
						if_block0.p(ctx, dirty);

						if (dirty[0] & /*isVirtualList*/ 8) {
							transition_in(if_block0, 1);
						}
					} else {
						if_block0 = create_if_block_3(ctx);
						if_block0.c();
						transition_in(if_block0, 1);
						if_block0.m(t.parentNode, t);
					}
				} else if (if_block0) {
					group_outros();

					transition_out(if_block0, 1, 1, () => {
						if_block0 = null;
					});

					check_outros();
				}

				if (!/*isVirtualList*/ ctx[3]) {
					if (if_block1) {
						if_block1.p(ctx, dirty);

						if (dirty[0] & /*isVirtualList*/ 8) {
							transition_in(if_block1, 1);
						}
					} else {
						if_block1 = create_if_block(ctx);
						if_block1.c();
						transition_in(if_block1, 1);
						if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
					}
				} else if (if_block1) {
					group_outros();

					transition_out(if_block1, 1, 1, () => {
						if_block1 = null;
					});

					check_outros();
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(if_block0);
				transition_in(if_block1);
				current = true;
			},
			o: function outro(local) {
				transition_out(if_block0);
				transition_out(if_block1);
				current = false;
			},
			d: function destroy(detaching) {
				if (if_block0) if_block0.d(detaching);
				if (detaching) detach_dev(t);
				if (if_block1) if_block1.d(detaching);
				if (detaching) detach_dev(if_block1_anchor);
				mounted = false;
				dispose();
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$3.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function itemClasses(hoverItemIndex, item, itemIndex, items, selectedValue, optionIdentifier, isMulti) {
		return `${selectedValue && !isMulti && selectedValue[optionIdentifier] === item[optionIdentifier]
	? "active "
	: ""}${hoverItemIndex === itemIndex || items.length === 1
	? "hover"
	: ""}`;
	}

	function isItemActive(item, selectedValue, optionIdentifier) {
		return selectedValue && selectedValue[optionIdentifier] === item[optionIdentifier];
	}

	function isItemFirst(itemIndex) {
		return itemIndex === 0;
	}

	function isItemHover(hoverItemIndex, item, itemIndex, items) {
		return hoverItemIndex === itemIndex || items.length === 1;
	}

	function instance$3($$self, $$props, $$invalidate) {
		const dispatch = createEventDispatcher();
		let { container = undefined } = $$props;
		let { Item: Item$$1 = Item } = $$props;
		let { isVirtualList = false } = $$props;
		let { items = [] } = $$props;

		let { getOptionLabel = (option, filterText) => {
			if (option) return option.isCreator
			? `Create \"${filterText}\"`
			: option.label;
		} } = $$props;

		let { getGroupHeaderLabel = option => {
			return option.label;
		} } = $$props;

		let { itemHeight = 40 } = $$props;
		let { hoverItemIndex = 0 } = $$props;
		let { selectedValue = undefined } = $$props;
		let { optionIdentifier = "value" } = $$props;
		let { hideEmptyState = false } = $$props;
		let { noOptionsMessage = "No options" } = $$props;
		let { isMulti = false } = $$props;
		let { activeItemIndex = 0 } = $$props;
		let { filterText = "" } = $$props;
		let isScrollingTimer = 0;
		let isScrolling = false;
		let prev_items;
		let prev_activeItemIndex;
		let prev_selectedValue;

		onMount(() => {
			if (items.length > 0 && !isMulti && selectedValue) {
				const _hoverItemIndex = items.findIndex(item => item[optionIdentifier] === selectedValue[optionIdentifier]);

				if (_hoverItemIndex) {
					$$invalidate(1, hoverItemIndex = _hoverItemIndex);
				}
			}

			scrollToActiveItem("active");

			container.addEventListener(
				"scroll",
				() => {
					clearTimeout(isScrollingTimer);

					isScrollingTimer = setTimeout(
						() => {
							isScrolling = false;
						},
						100
					);
				},
				false
			);
		});

		onDestroy(() => {
			
		}); // clearTimeout(isScrollingTimer);

		beforeUpdate(() => {
			if (items !== prev_items && items.length > 0) {
				$$invalidate(1, hoverItemIndex = 0);
			}

			// if (prev_activeItemIndex && activeItemIndex > -1) {
			//   hoverItemIndex = activeItemIndex;
			//   scrollToActiveItem('active');
			// }
			// if (prev_selectedValue && selectedValue) {
			//   scrollToActiveItem('active');
			//   if (items && !isMulti) {
			//     const hoverItemIndex = items.findIndex((item) => item[optionIdentifier] === selectedValue[optionIdentifier]);
			//     if (hoverItemIndex) {
			//       hoverItemIndex = hoverItemIndex;
			//     }
			//   }
			// }
			prev_items = items;

			prev_activeItemIndex = activeItemIndex;
			prev_selectedValue = selectedValue;
		});

		function handleSelect(item) {
			if (item.isCreator) return;
			dispatch("itemSelected", item);
		}

		function handleHover(i) {
			if (isScrolling) return;
			$$invalidate(1, hoverItemIndex = i);
		}

		function handleClick(args) {
			const { item, i, event } = args;
			event.stopPropagation();
			if (selectedValue && !isMulti && selectedValue[optionIdentifier] === item[optionIdentifier]) return closeList();

			if (item.isCreator) {
				dispatch("itemCreated", filterText);
			} else {
				$$invalidate(16, activeItemIndex = i);
				$$invalidate(1, hoverItemIndex = i);
				handleSelect(item);
			}
		}

		function closeList() {
			dispatch("closeList");
		}

		async function updateHoverItem(increment) {
			if (isVirtualList) return;
			let isNonSelectableItem = true;

			while (isNonSelectableItem) {
				if (increment > 0 && hoverItemIndex === items.length - 1) {
					$$invalidate(1, hoverItemIndex = 0);
				} else if (increment < 0 && hoverItemIndex === 0) {
					$$invalidate(1, hoverItemIndex = items.length - 1);
				} else {
					$$invalidate(1, hoverItemIndex = hoverItemIndex + increment);
				}

				isNonSelectableItem = items[hoverItemIndex].isGroupHeader && !items[hoverItemIndex].isSelectable;
			}

			await tick();
			scrollToActiveItem("hover");
		}

		function handleKeyDown(e) {
			switch (e.key) {
				case "ArrowDown":
					e.preventDefault();
					items.length && updateHoverItem(1);
					break;
				case "ArrowUp":
					e.preventDefault();
					items.length && updateHoverItem(-1);
					break;
				case "Enter":
					e.preventDefault();
					if (items.length === 0) break;
					const hoverItem = items[hoverItemIndex];
					if (selectedValue && !isMulti && selectedValue[optionIdentifier] === hoverItem[optionIdentifier]) {
						closeList();
						break;
					}
					if (hoverItem.isCreator) {
						dispatch("itemCreated", filterText);
					} else {
						$$invalidate(16, activeItemIndex = hoverItemIndex);
						handleSelect(items[hoverItemIndex]);
					}
					break;
				case "Tab":
					e.preventDefault();
					if (items.length === 0) break;
					if (selectedValue && selectedValue[optionIdentifier] === items[hoverItemIndex][optionIdentifier]) return closeList();
					$$invalidate(16, activeItemIndex = hoverItemIndex);
					handleSelect(items[hoverItemIndex]);
					break;
			}
		}

		function scrollToActiveItem(className) {
			if (isVirtualList || !container) return;
			let offsetBounding;
			const focusedElemBounding = container.querySelector(`.listItem .${className}`);

			if (focusedElemBounding) {
				offsetBounding = container.getBoundingClientRect().bottom - focusedElemBounding.getBoundingClientRect().bottom;
			}

			$$invalidate(0, container.scrollTop -= offsetBounding, container);
		}

		
		

		const writable_props = [
			"container",
			"Item",
			"isVirtualList",
			"items",
			"getOptionLabel",
			"getGroupHeaderLabel",
			"itemHeight",
			"hoverItemIndex",
			"selectedValue",
			"optionIdentifier",
			"hideEmptyState",
			"noOptionsMessage",
			"isMulti",
			"activeItemIndex",
			"filterText"
		];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<List> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("List", $$slots, []);
		const mouseover_handler = i => handleHover(i);
		const click_handler = (item, i, event) => handleClick({ item, i, event });

		function div_binding($$value) {
			binding_callbacks[$$value ? "unshift" : "push"](() => {
				$$invalidate(0, container = $$value);
			});
		}

		const mouseover_handler_1 = i => handleHover(i);
		const click_handler_1 = (item, i, event) => handleClick({ item, i, event });

		function div_binding_1($$value) {
			binding_callbacks[$$value ? "unshift" : "push"](() => {
				$$invalidate(0, container = $$value);
			});
		}

		$$self.$set = $$props => {
			if ("container" in $$props) $$invalidate(0, container = $$props.container);
			if ("Item" in $$props) $$invalidate(2, Item$$1 = $$props.Item);
			if ("isVirtualList" in $$props) $$invalidate(3, isVirtualList = $$props.isVirtualList);
			if ("items" in $$props) $$invalidate(4, items = $$props.items);
			if ("getOptionLabel" in $$props) $$invalidate(5, getOptionLabel = $$props.getOptionLabel);
			if ("getGroupHeaderLabel" in $$props) $$invalidate(6, getGroupHeaderLabel = $$props.getGroupHeaderLabel);
			if ("itemHeight" in $$props) $$invalidate(7, itemHeight = $$props.itemHeight);
			if ("hoverItemIndex" in $$props) $$invalidate(1, hoverItemIndex = $$props.hoverItemIndex);
			if ("selectedValue" in $$props) $$invalidate(8, selectedValue = $$props.selectedValue);
			if ("optionIdentifier" in $$props) $$invalidate(9, optionIdentifier = $$props.optionIdentifier);
			if ("hideEmptyState" in $$props) $$invalidate(10, hideEmptyState = $$props.hideEmptyState);
			if ("noOptionsMessage" in $$props) $$invalidate(11, noOptionsMessage = $$props.noOptionsMessage);
			if ("isMulti" in $$props) $$invalidate(17, isMulti = $$props.isMulti);
			if ("activeItemIndex" in $$props) $$invalidate(16, activeItemIndex = $$props.activeItemIndex);
			if ("filterText" in $$props) $$invalidate(12, filterText = $$props.filterText);
		};

		$$self.$capture_state = () => ({
			beforeUpdate,
			createEventDispatcher,
			onDestroy,
			onMount,
			tick,
			dispatch,
			container,
			ItemComponent: Item,
			VirtualList,
			Item: Item$$1,
			isVirtualList,
			items,
			getOptionLabel,
			getGroupHeaderLabel,
			itemHeight,
			hoverItemIndex,
			selectedValue,
			optionIdentifier,
			hideEmptyState,
			noOptionsMessage,
			isMulti,
			activeItemIndex,
			filterText,
			isScrollingTimer,
			isScrolling,
			prev_items,
			prev_activeItemIndex,
			prev_selectedValue,
			itemClasses,
			handleSelect,
			handleHover,
			handleClick,
			closeList,
			updateHoverItem,
			handleKeyDown,
			scrollToActiveItem,
			isItemActive,
			isItemFirst,
			isItemHover
		});

		$$self.$inject_state = $$props => {
			if ("container" in $$props) $$invalidate(0, container = $$props.container);
			if ("Item" in $$props) $$invalidate(2, Item$$1 = $$props.Item);
			if ("isVirtualList" in $$props) $$invalidate(3, isVirtualList = $$props.isVirtualList);
			if ("items" in $$props) $$invalidate(4, items = $$props.items);
			if ("getOptionLabel" in $$props) $$invalidate(5, getOptionLabel = $$props.getOptionLabel);
			if ("getGroupHeaderLabel" in $$props) $$invalidate(6, getGroupHeaderLabel = $$props.getGroupHeaderLabel);
			if ("itemHeight" in $$props) $$invalidate(7, itemHeight = $$props.itemHeight);
			if ("hoverItemIndex" in $$props) $$invalidate(1, hoverItemIndex = $$props.hoverItemIndex);
			if ("selectedValue" in $$props) $$invalidate(8, selectedValue = $$props.selectedValue);
			if ("optionIdentifier" in $$props) $$invalidate(9, optionIdentifier = $$props.optionIdentifier);
			if ("hideEmptyState" in $$props) $$invalidate(10, hideEmptyState = $$props.hideEmptyState);
			if ("noOptionsMessage" in $$props) $$invalidate(11, noOptionsMessage = $$props.noOptionsMessage);
			if ("isMulti" in $$props) $$invalidate(17, isMulti = $$props.isMulti);
			if ("activeItemIndex" in $$props) $$invalidate(16, activeItemIndex = $$props.activeItemIndex);
			if ("filterText" in $$props) $$invalidate(12, filterText = $$props.filterText);
			if ("isScrollingTimer" in $$props) isScrollingTimer = $$props.isScrollingTimer;
			if ("isScrolling" in $$props) isScrolling = $$props.isScrolling;
			if ("prev_items" in $$props) prev_items = $$props.prev_items;
			if ("prev_activeItemIndex" in $$props) prev_activeItemIndex = $$props.prev_activeItemIndex;
			if ("prev_selectedValue" in $$props) prev_selectedValue = $$props.prev_selectedValue;
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		return [
			container,
			hoverItemIndex,
			Item$$1,
			isVirtualList,
			items,
			getOptionLabel,
			getGroupHeaderLabel,
			itemHeight,
			selectedValue,
			optionIdentifier,
			hideEmptyState,
			noOptionsMessage,
			filterText,
			handleHover,
			handleClick,
			handleKeyDown,
			activeItemIndex,
			isMulti,
			isScrollingTimer,
			isScrolling,
			prev_items,
			prev_activeItemIndex,
			prev_selectedValue,
			dispatch,
			handleSelect,
			closeList,
			updateHoverItem,
			scrollToActiveItem,
			mouseover_handler,
			click_handler,
			div_binding,
			mouseover_handler_1,
			click_handler_1,
			div_binding_1
		];
	}

	class List extends SvelteComponentDev {
		constructor(options) {
			super(options);
			if (!document.getElementById("svelte-1dsxvxg-style")) add_css$3();

			init(
				this,
				options,
				instance$3,
				create_fragment$3,
				safe_not_equal,
				{
					container: 0,
					Item: 2,
					isVirtualList: 3,
					items: 4,
					getOptionLabel: 5,
					getGroupHeaderLabel: 6,
					itemHeight: 7,
					hoverItemIndex: 1,
					selectedValue: 8,
					optionIdentifier: 9,
					hideEmptyState: 10,
					noOptionsMessage: 11,
					isMulti: 17,
					activeItemIndex: 16,
					filterText: 12
				},
				[-1, -1]
			);

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "List",
				options,
				id: create_fragment$3.name
			});
		}

		get container() {
			return this.$$.ctx[0];
		}

		set container(container) {
			this.$set({ container });
			flush();
		}

		get Item() {
			return this.$$.ctx[2];
		}

		set Item(Item$$1) {
			this.$set({ Item: Item$$1 });
			flush();
		}

		get isVirtualList() {
			return this.$$.ctx[3];
		}

		set isVirtualList(isVirtualList) {
			this.$set({ isVirtualList });
			flush();
		}

		get items() {
			return this.$$.ctx[4];
		}

		set items(items) {
			this.$set({ items });
			flush();
		}

		get getOptionLabel() {
			return this.$$.ctx[5];
		}

		set getOptionLabel(getOptionLabel) {
			this.$set({ getOptionLabel });
			flush();
		}

		get getGroupHeaderLabel() {
			return this.$$.ctx[6];
		}

		set getGroupHeaderLabel(getGroupHeaderLabel) {
			this.$set({ getGroupHeaderLabel });
			flush();
		}

		get itemHeight() {
			return this.$$.ctx[7];
		}

		set itemHeight(itemHeight) {
			this.$set({ itemHeight });
			flush();
		}

		get hoverItemIndex() {
			return this.$$.ctx[1];
		}

		set hoverItemIndex(hoverItemIndex) {
			this.$set({ hoverItemIndex });
			flush();
		}

		get selectedValue() {
			return this.$$.ctx[8];
		}

		set selectedValue(selectedValue) {
			this.$set({ selectedValue });
			flush();
		}

		get optionIdentifier() {
			return this.$$.ctx[9];
		}

		set optionIdentifier(optionIdentifier) {
			this.$set({ optionIdentifier });
			flush();
		}

		get hideEmptyState() {
			return this.$$.ctx[10];
		}

		set hideEmptyState(hideEmptyState) {
			this.$set({ hideEmptyState });
			flush();
		}

		get noOptionsMessage() {
			return this.$$.ctx[11];
		}

		set noOptionsMessage(noOptionsMessage) {
			this.$set({ noOptionsMessage });
			flush();
		}

		get isMulti() {
			return this.$$.ctx[17];
		}

		set isMulti(isMulti) {
			this.$set({ isMulti });
			flush();
		}

		get activeItemIndex() {
			return this.$$.ctx[16];
		}

		set activeItemIndex(activeItemIndex) {
			this.$set({ activeItemIndex });
			flush();
		}

		get filterText() {
			return this.$$.ctx[12];
		}

		set filterText(filterText) {
			this.$set({ filterText });
			flush();
		}
	}

	/* src/Selection.svelte generated by Svelte v3.23.0 */

	const file$4 = "src/Selection.svelte";

	function add_css$4() {
		var style = element("style");
		style.id = "svelte-ch6bh7-style";
		style.textContent = ".selection.svelte-ch6bh7{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0aW9uLnN2ZWx0ZSIsInNvdXJjZXMiOlsiU2VsZWN0aW9uLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBleHBvcnQgbGV0IGdldFNlbGVjdGlvbkxhYmVsID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGl0ZW0gPSB1bmRlZmluZWQ7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuc2VsZWN0aW9uIHtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBjbGFzcz1cInNlbGVjdGlvblwiPlxuICB7QGh0bWwgZ2V0U2VsZWN0aW9uTGFiZWwoaXRlbSl9IFxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUUsVUFBVSxjQUFDLENBQUMsQUFDVixhQUFhLENBQUUsUUFBUSxDQUN2QixVQUFVLENBQUUsTUFBTSxDQUNsQixXQUFXLENBQUUsTUFBTSxBQUNyQixDQUFDIn0= */";
		append_dev(document.head, style);
	}

	function create_fragment$4(ctx) {
		let div;
		let raw_value = /*getSelectionLabel*/ ctx[0](/*item*/ ctx[1]) + "";

		const block = {
			c: function create() {
				div = element("div");
				attr_dev(div, "class", "selection svelte-ch6bh7");
				add_location(div, file$4, 13, 0, 210);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				div.innerHTML = raw_value;
			},
			p: function update(ctx, [dirty]) {
				if (dirty & /*getSelectionLabel, item*/ 3 && raw_value !== (raw_value = /*getSelectionLabel*/ ctx[0](/*item*/ ctx[1]) + "")) div.innerHTML = raw_value;		},
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$4.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$4($$self, $$props, $$invalidate) {
		let { getSelectionLabel = undefined } = $$props;
		let { item = undefined } = $$props;
		const writable_props = ["getSelectionLabel", "item"];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Selection> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("Selection", $$slots, []);

		$$self.$set = $$props => {
			if ("getSelectionLabel" in $$props) $$invalidate(0, getSelectionLabel = $$props.getSelectionLabel);
			if ("item" in $$props) $$invalidate(1, item = $$props.item);
		};

		$$self.$capture_state = () => ({ getSelectionLabel, item });

		$$self.$inject_state = $$props => {
			if ("getSelectionLabel" in $$props) $$invalidate(0, getSelectionLabel = $$props.getSelectionLabel);
			if ("item" in $$props) $$invalidate(1, item = $$props.item);
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		return [getSelectionLabel, item];
	}

	class Selection extends SvelteComponentDev {
		constructor(options) {
			super(options);
			if (!document.getElementById("svelte-ch6bh7-style")) add_css$4();
			init(this, options, instance$4, create_fragment$4, safe_not_equal, { getSelectionLabel: 0, item: 1 });

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Selection",
				options,
				id: create_fragment$4.name
			});
		}

		get getSelectionLabel() {
			return this.$$.ctx[0];
		}

		set getSelectionLabel(getSelectionLabel) {
			this.$set({ getSelectionLabel });
			flush();
		}

		get item() {
			return this.$$.ctx[1];
		}

		set item(item) {
			this.$set({ item });
			flush();
		}
	}

	/* src/MultiSelection.svelte generated by Svelte v3.23.0 */
	const file$5 = "src/MultiSelection.svelte";

	function add_css$5() {
		var style = element("style");
		style.id = "svelte-rtzfov-style";
		style.textContent = ".multiSelectItem.svelte-rtzfov.svelte-rtzfov{background:var(--multiItemBG, #EBEDEF);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px)}.multiSelectItem_label.svelte-rtzfov.svelte-rtzfov{margin:var(--multiLabelMargin, 0 5px 0 0)}.multiSelectItem.svelte-rtzfov.svelte-rtzfov:hover,.multiSelectItem.active.svelte-rtzfov.svelte-rtzfov{background-color:var(--multiItemActiveBG, #006FFF);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-rtzfov.svelte-rtzfov:hover{background:var(--multiItemDisabledHoverBg, #EBEDEF);color:var(--multiItemDisabledHoverColor, #C1C6CC)}.multiSelectItem_clear.svelte-rtzfov.svelte-rtzfov{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616F);width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-rtzfov.svelte-rtzfov:hover,.active.svelte-rtzfov .multiSelectItem_clear.svelte-rtzfov{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-rtzfov:hover svg.svelte-rtzfov,.active.svelte-rtzfov .multiSelectItem_clear svg.svelte-rtzfov{fill:var(--multiClearHoverFill, #006FFF)}.multiSelectItem_clear.svelte-rtzfov svg.svelte-rtzfov{fill:var(--multiClearFill, #EBEDEF);vertical-align:top}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTXVsdGlTZWxlY3Rpb24uc3ZlbHRlIiwic291cmNlcyI6WyJNdWx0aVNlbGVjdGlvbi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblxuICBjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXG4gIGV4cG9ydCBsZXQgc2VsZWN0ZWRWYWx1ZSA9IFtdO1xuICBleHBvcnQgbGV0IGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgaXNEaXNhYmxlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGdldFNlbGVjdGlvbkxhYmVsID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsZWFyKGksIGV2ZW50KSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZGlzcGF0Y2goJ211bHRpSXRlbUNsZWFyJywge2l9KTtcbiAgfVxuPC9zY3JpcHQ+XG5cbnsjZWFjaCBzZWxlY3RlZFZhbHVlIGFzIHZhbHVlLCBpfVxuPGRpdiBjbGFzcz1cIm11bHRpU2VsZWN0SXRlbSB7YWN0aXZlU2VsZWN0ZWRWYWx1ZSA9PT0gaSA/ICdhY3RpdmUnIDogJyd9IHtpc0Rpc2FibGVkID8gJ2Rpc2FibGVkJyA6ICcnfVwiPlxuICA8ZGl2IGNsYXNzPVwibXVsdGlTZWxlY3RJdGVtX2xhYmVsXCI+XG4gICAge0BodG1sIGdldFNlbGVjdGlvbkxhYmVsKHZhbHVlKX1cbiAgPC9kaXY+XG4gIHsjaWYgIWlzRGlzYWJsZWR9XG4gIDxkaXYgY2xhc3M9XCJtdWx0aVNlbGVjdEl0ZW1fY2xlYXJcIiBvbjpjbGljaz1cIntldmVudCA9PiBoYW5kbGVDbGVhcihpLCBldmVudCl9XCI+XG4gICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIi0yIC0yIDUwIDUwXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTM0LjkyMywzNy4yNTFMMjQsMjYuMzI4TDEzLjA3NywzNy4yNTFMOS40MzYsMzMuNjFsMTAuOTIzLTEwLjkyM0w5LjQzNiwxMS43NjVsMy42NDEtMy42NDFMMjQsMTkuMDQ3TDM0LjkyMyw4LjEyNCBsMy42NDEsMy42NDFMMjcuNjQxLDIyLjY4OEwzOC41NjQsMzMuNjFMMzQuOTIzLDM3LjI1MXpcIj48L3BhdGg+XG4gICAgPC9zdmc+XG4gIDwvZGl2PlxuICB7L2lmfVxuPC9kaXY+XG57L2VhY2h9XG5cblxuXG48c3R5bGU+XG4gIC5tdWx0aVNlbGVjdEl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLW11bHRpSXRlbUJHLCAjRUJFREVGKTtcbiAgICBtYXJnaW46IHZhcigtLW11bHRpSXRlbU1hcmdpbiwgNXB4IDVweCAwIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW11bHRpSXRlbUJvcmRlclJhZGl1cywgMTZweCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1tdWx0aUl0ZW1IZWlnaHQsIDMycHgpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1tdWx0aUl0ZW1IZWlnaHQsIDMycHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIHBhZGRpbmc6IHZhcigtLW11bHRpSXRlbVBhZGRpbmcsIDAgMTBweCAwIDE1cHgpO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0SXRlbV9sYWJlbCB7XG4gICAgbWFyZ2luOiB2YXIoLS1tdWx0aUxhYmVsTWFyZ2luLCAwIDVweCAwIDApO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0SXRlbTpob3ZlcixcbiAgLm11bHRpU2VsZWN0SXRlbS5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW11bHRpSXRlbUFjdGl2ZUJHLCAjMDA2RkZGKTtcbiAgICBjb2xvcjogdmFyKC0tbXVsdGlJdGVtQWN0aXZlQ29sb3IsICNmZmYpO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0SXRlbS5kaXNhYmxlZDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbXVsdGlJdGVtRGlzYWJsZWRIb3ZlckJnLCAjRUJFREVGKTtcbiAgICBjb2xvcjogdmFyKC0tbXVsdGlJdGVtRGlzYWJsZWRIb3ZlckNvbG9yLCAjQzFDNkNDKTtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLW11bHRpQ2xlYXJSYWRpdXMsIDUwJSk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbXVsdGlDbGVhckJHLCAjNTI2MTZGKTtcbiAgICB3aWR0aDogdmFyKC0tbXVsdGlDbGVhcldpZHRoLCAxNnB4KTtcbiAgICBoZWlnaHQ6IHZhcigtLW11bHRpQ2xlYXJIZWlnaHQsIDE2cHgpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IHZhcigtLW11bHRpQ2xlYXJUb3AsIDhweCk7XG4gICAgdGV4dC1hbGlnbjogdmFyKC0tbXVsdGlDbGVhclRleHRBbGlnbiwgY2VudGVyKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1tdWx0aUNsZWFyUGFkZGluZywgMXB4KTtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXI6aG92ZXIsXG4gIC5hY3RpdmUgLm11bHRpU2VsZWN0SXRlbV9jbGVhciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbXVsdGlDbGVhckhvdmVyQkcsICNmZmYpO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0SXRlbV9jbGVhcjpob3ZlciBzdmcsXG4gIC5hY3RpdmUgLm11bHRpU2VsZWN0SXRlbV9jbGVhciBzdmcge1xuICAgIGZpbGw6IHZhcigtLW11bHRpQ2xlYXJIb3ZlckZpbGwsICMwMDZGRkYpO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0SXRlbV9jbGVhciBzdmcge1xuICAgIGZpbGw6IHZhcigtLW11bHRpQ2xlYXJGaWxsLCAjRUJFREVGKTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1DRSxnQkFBZ0IsNEJBQUMsQ0FBQyxBQUNoQixVQUFVLENBQUUsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQ3ZDLE1BQU0sQ0FBRSxJQUFJLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUMzQyxhQUFhLENBQUUsSUFBSSx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FDakQsTUFBTSxDQUFFLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQ3BDLFdBQVcsQ0FBRSxJQUFJLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUN6QyxPQUFPLENBQUUsSUFBSSxDQUNiLE1BQU0sQ0FBRSxPQUFPLENBQ2YsT0FBTyxDQUFFLElBQUksa0JBQWtCLENBQUMsY0FBYyxDQUFDLEFBQ2pELENBQUMsQUFFRCxzQkFBc0IsNEJBQUMsQ0FBQyxBQUN0QixNQUFNLENBQUUsSUFBSSxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQUFDNUMsQ0FBQyxBQUVELDRDQUFnQixNQUFNLENBQ3RCLGdCQUFnQixPQUFPLDRCQUFDLENBQUMsQUFDdkIsZ0JBQWdCLENBQUUsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FDbkQsS0FBSyxDQUFFLElBQUksc0JBQXNCLENBQUMsS0FBSyxDQUFDLEFBQzFDLENBQUMsQUFFRCxnQkFBZ0IscUNBQVMsTUFBTSxBQUFDLENBQUMsQUFDL0IsVUFBVSxDQUFFLElBQUksMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQ3BELEtBQUssQ0FBRSxJQUFJLDZCQUE2QixDQUFDLFFBQVEsQ0FBQyxBQUNwRCxDQUFDLEFBRUQsc0JBQXNCLDRCQUFDLENBQUMsQUFDdEIsYUFBYSxDQUFFLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQzNDLFVBQVUsQ0FBRSxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FDeEMsS0FBSyxDQUFFLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQ25DLE1BQU0sQ0FBRSxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUNyQyxRQUFRLENBQUUsUUFBUSxDQUNsQixHQUFHLENBQUUsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQzlCLFVBQVUsQ0FBRSxJQUFJLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUM5QyxPQUFPLENBQUUsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQUFDeEMsQ0FBQyxBQUVELGtEQUFzQixNQUFNLENBQzVCLHFCQUFPLENBQUMsc0JBQXNCLGNBQUMsQ0FBQyxBQUM5QixVQUFVLENBQUUsSUFBSSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQUFDNUMsQ0FBQyxBQUVELG9DQUFzQixNQUFNLENBQUMsaUJBQUcsQ0FDaEMscUJBQU8sQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLGNBQUMsQ0FBQyxBQUNsQyxJQUFJLENBQUUsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQUFDM0MsQ0FBQyxBQUVELG9DQUFzQixDQUFDLEdBQUcsY0FBQyxDQUFDLEFBQzFCLElBQUksQ0FBRSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUNwQyxjQUFjLENBQUUsR0FBRyxBQUNyQixDQUFDIn0= */";
		append_dev(document.head, style);
	}

	function get_each_context$2(ctx, list, i) {
		const child_ctx = ctx.slice();
		child_ctx[7] = list[i];
		child_ctx[9] = i;
		return child_ctx;
	}

	// (22:2) {#if !isDisabled}
	function create_if_block$1(ctx) {
		let div;
		let svg;
		let path;
		let mounted;
		let dispose;

		function click_handler(...args) {
			return /*click_handler*/ ctx[6](/*i*/ ctx[9], ...args);
		}

		const block = {
			c: function create() {
				div = element("div");
				svg = svg_element("svg");
				path = svg_element("path");
				attr_dev(path, "d", "M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z");
				add_location(path, file$5, 24, 6, 806);
				attr_dev(svg, "width", "100%");
				attr_dev(svg, "height", "100%");
				attr_dev(svg, "viewBox", "-2 -2 50 50");
				attr_dev(svg, "focusable", "false");
				attr_dev(svg, "role", "presentation");
				attr_dev(svg, "class", "svelte-rtzfov");
				add_location(svg, file$5, 23, 4, 707);
				attr_dev(div, "class", "multiSelectItem_clear svelte-rtzfov");
				add_location(div, file$5, 22, 2, 623);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				append_dev(div, svg);
				append_dev(svg, path);

				if (!mounted) {
					dispose = listen_dev(div, "click", click_handler, false, false, false);
					mounted = true;
				}
			},
			p: function update(new_ctx, dirty) {
				ctx = new_ctx;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
				mounted = false;
				dispose();
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block$1.name,
			type: "if",
			source: "(22:2) {#if !isDisabled}",
			ctx
		});

		return block;
	}

	// (17:0) {#each selectedValue as value, i}
	function create_each_block$2(ctx) {
		let div1;
		let div0;
		let raw_value = /*getSelectionLabel*/ ctx[3](/*value*/ ctx[7]) + "";
		let t0;
		let t1;
		let div1_class_value;
		let if_block = !/*isDisabled*/ ctx[2] && create_if_block$1(ctx);

		const block = {
			c: function create() {
				div1 = element("div");
				div0 = element("div");
				t0 = space();
				if (if_block) if_block.c();
				t1 = space();
				attr_dev(div0, "class", "multiSelectItem_label svelte-rtzfov");
				add_location(div0, file$5, 18, 2, 519);

				attr_dev(div1, "class", div1_class_value = "multiSelectItem " + (/*activeSelectedValue*/ ctx[1] === /*i*/ ctx[9]
				? "active"
				: "") + " " + (/*isDisabled*/ ctx[2] ? "disabled" : "") + " svelte-rtzfov");

				add_location(div1, file$5, 17, 0, 412);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div1, anchor);
				append_dev(div1, div0);
				div0.innerHTML = raw_value;
				append_dev(div1, t0);
				if (if_block) if_block.m(div1, null);
				append_dev(div1, t1);
			},
			p: function update(ctx, dirty) {
				if (dirty & /*getSelectionLabel, selectedValue*/ 9 && raw_value !== (raw_value = /*getSelectionLabel*/ ctx[3](/*value*/ ctx[7]) + "")) div0.innerHTML = raw_value;
				if (!/*isDisabled*/ ctx[2]) {
					if (if_block) {
						if_block.p(ctx, dirty);
					} else {
						if_block = create_if_block$1(ctx);
						if_block.c();
						if_block.m(div1, t1);
					}
				} else if (if_block) {
					if_block.d(1);
					if_block = null;
				}

				if (dirty & /*activeSelectedValue, isDisabled*/ 6 && div1_class_value !== (div1_class_value = "multiSelectItem " + (/*activeSelectedValue*/ ctx[1] === /*i*/ ctx[9]
				? "active"
				: "") + " " + (/*isDisabled*/ ctx[2] ? "disabled" : "") + " svelte-rtzfov")) {
					attr_dev(div1, "class", div1_class_value);
				}
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div1);
				if (if_block) if_block.d();
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_each_block$2.name,
			type: "each",
			source: "(17:0) {#each selectedValue as value, i}",
			ctx
		});

		return block;
	}

	function create_fragment$5(ctx) {
		let each_1_anchor;
		let each_value = /*selectedValue*/ ctx[0];
		validate_each_argument(each_value);
		let each_blocks = [];

		for (let i = 0; i < each_value.length; i += 1) {
			each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
		}

		const block = {
			c: function create() {
				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].c();
				}

				each_1_anchor = empty();
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				for (let i = 0; i < each_blocks.length; i += 1) {
					each_blocks[i].m(target, anchor);
				}

				insert_dev(target, each_1_anchor, anchor);
			},
			p: function update(ctx, [dirty]) {
				if (dirty & /*activeSelectedValue, isDisabled, handleClear, getSelectionLabel, selectedValue*/ 31) {
					each_value = /*selectedValue*/ ctx[0];
					validate_each_argument(each_value);
					let i;

					for (i = 0; i < each_value.length; i += 1) {
						const child_ctx = get_each_context$2(ctx, each_value, i);

						if (each_blocks[i]) {
							each_blocks[i].p(child_ctx, dirty);
						} else {
							each_blocks[i] = create_each_block$2(child_ctx);
							each_blocks[i].c();
							each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
						}
					}

					for (; i < each_blocks.length; i += 1) {
						each_blocks[i].d(1);
					}

					each_blocks.length = each_value.length;
				}
			},
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				destroy_each(each_blocks, detaching);
				if (detaching) detach_dev(each_1_anchor);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$5.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$5($$self, $$props, $$invalidate) {
		const dispatch = createEventDispatcher();
		let { selectedValue = [] } = $$props;
		let { activeSelectedValue = undefined } = $$props;
		let { isDisabled = false } = $$props;
		let { getSelectionLabel = undefined } = $$props;

		function handleClear(i, event) {
			event.stopPropagation();
			dispatch("multiItemClear", { i });
		}

		const writable_props = ["selectedValue", "activeSelectedValue", "isDisabled", "getSelectionLabel"];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<MultiSelection> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("MultiSelection", $$slots, []);
		const click_handler = (i, event) => handleClear(i, event);

		$$self.$set = $$props => {
			if ("selectedValue" in $$props) $$invalidate(0, selectedValue = $$props.selectedValue);
			if ("activeSelectedValue" in $$props) $$invalidate(1, activeSelectedValue = $$props.activeSelectedValue);
			if ("isDisabled" in $$props) $$invalidate(2, isDisabled = $$props.isDisabled);
			if ("getSelectionLabel" in $$props) $$invalidate(3, getSelectionLabel = $$props.getSelectionLabel);
		};

		$$self.$capture_state = () => ({
			createEventDispatcher,
			dispatch,
			selectedValue,
			activeSelectedValue,
			isDisabled,
			getSelectionLabel,
			handleClear
		});

		$$self.$inject_state = $$props => {
			if ("selectedValue" in $$props) $$invalidate(0, selectedValue = $$props.selectedValue);
			if ("activeSelectedValue" in $$props) $$invalidate(1, activeSelectedValue = $$props.activeSelectedValue);
			if ("isDisabled" in $$props) $$invalidate(2, isDisabled = $$props.isDisabled);
			if ("getSelectionLabel" in $$props) $$invalidate(3, getSelectionLabel = $$props.getSelectionLabel);
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		return [
			selectedValue,
			activeSelectedValue,
			isDisabled,
			getSelectionLabel,
			handleClear,
			dispatch,
			click_handler
		];
	}

	class MultiSelection extends SvelteComponentDev {
		constructor(options) {
			super(options);
			if (!document.getElementById("svelte-rtzfov-style")) add_css$5();

			init(this, options, instance$5, create_fragment$5, safe_not_equal, {
				selectedValue: 0,
				activeSelectedValue: 1,
				isDisabled: 2,
				getSelectionLabel: 3
			});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "MultiSelection",
				options,
				id: create_fragment$5.name
			});
		}

		get selectedValue() {
			return this.$$.ctx[0];
		}

		set selectedValue(selectedValue) {
			this.$set({ selectedValue });
			flush();
		}

		get activeSelectedValue() {
			return this.$$.ctx[1];
		}

		set activeSelectedValue(activeSelectedValue) {
			this.$set({ activeSelectedValue });
			flush();
		}

		get isDisabled() {
			return this.$$.ctx[2];
		}

		set isDisabled(isDisabled) {
			this.$set({ isDisabled });
			flush();
		}

		get getSelectionLabel() {
			return this.$$.ctx[3];
		}

		set getSelectionLabel(getSelectionLabel) {
			this.$set({ getSelectionLabel });
			flush();
		}
	}

	function isOutOfViewport(elem) {
	  const bounding = elem.getBoundingClientRect();
	  const out = {};

	  out.top = bounding.top < 0;
	  out.left = bounding.left < 0;
	  out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
	  out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
	  out.any = out.top || out.left || out.bottom || out.right;

	  return out;
	}

	function debounce(func, wait, immediate) {
	  let timeout;

	  return function executedFunction() {
	    let context = this;
	    let args = arguments;
		    
	    let later = function() {
	      timeout = null;
	      if (!immediate) func.apply(context, args);
	    };

	    let callNow = immediate && !timeout;
		
	    clearTimeout(timeout);

	    timeout = setTimeout(later, wait);
		
	    if (callNow) func.apply(context, args);
	  };
	}

	/* src/Select.svelte generated by Svelte v3.23.0 */

	const { Object: Object_1, document: document_1 } = globals;
	const file$6 = "src/Select.svelte";

	function add_css$6() {
		var style = element("style");
		style.id = "svelte-7bommo-style";
		style.textContent = ".selectContainer.svelte-7bommo.svelte-7bommo{--padding:0 0.5rem;border-radius:20px;height:2rem;position:relative;display:flex;align-items:center;padding:var(--padding);background:var(--secondary-background)}.selectContainer.svelte-7bommo input.svelte-7bommo{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0)}.selectContainer.svelte-7bommo input.svelte-7bommo::placeholder{color:var(--placeholderColor, #78848f)}.selectContainer.svelte-7bommo input.svelte-7bommo:focus{outline:none}.selectContainer.svelte-7bommo.svelte-7bommo:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-7bommo.svelte-7bommo{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-7bommo.svelte-7bommo{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-7bommo input.svelte-7bommo::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc)}.selectedItem.svelte-7bommo.svelte-7bommo{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-7bommo.svelte-7bommo:focus{outline:none}.clearSelect.svelte-7bommo.svelte-7bommo{position:absolute;right:0.3rem;top:0.3rem;bottom:0.3rem;width:1rem;color:var(--color);flex:none !important}.clearSelect.svelte-7bommo.svelte-7bommo:hover{color:var(--theme-color)}.selectContainer.focused.svelte-7bommo .clearSelect.svelte-7bommo{color:var(--theme-color)}.indicator.svelte-7bommo.svelte-7bommo{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-7bommo svg.svelte-7bommo{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-7bommo.svelte-7bommo{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);animation:svelte-7bommo-rotate 0.75s linear infinite}.spinner_icon.svelte-7bommo.svelte-7bommo{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-7bommo.svelte-7bommo{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-7bommo.svelte-7bommo{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap}.multiSelect.svelte-7bommo>.svelte-7bommo{flex:1 1 50px}.selectContainer.multiSelect.svelte-7bommo input.svelte-7bommo{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-7bommo.svelte-7bommo{border:var(--errorBorder, 1px solid #ff2d55)}@keyframes svelte-7bommo-rotate{100%{transform:rotate(360deg)}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LnN2ZWx0ZSIsInNvdXJjZXMiOlsiU2VsZWN0LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQge1xuICAgIGJlZm9yZVVwZGF0ZSxcbiAgICBjcmVhdGVFdmVudERpc3BhdGNoZXIsXG4gICAgb25EZXN0cm95LFxuICAgIG9uTW91bnQsXG4gICAgdGlja1xuICB9IGZyb20gXCJzdmVsdGVcIjtcbiAgaW1wb3J0IExpc3QgZnJvbSBcIi4vTGlzdC5zdmVsdGVcIjtcbiAgaW1wb3J0IEl0ZW1Db21wb25lbnQgZnJvbSBcIi4vSXRlbS5zdmVsdGVcIjtcbiAgaW1wb3J0IFNlbGVjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9TZWxlY3Rpb24uc3ZlbHRlXCI7XG4gIGltcG9ydCBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCBmcm9tIFwiLi9NdWx0aVNlbGVjdGlvbi5zdmVsdGVcIjtcbiAgaW1wb3J0IGlzT3V0T2ZWaWV3cG9ydCBmcm9tIFwiLi91dGlscy9pc091dE9mVmlld3BvcnRcIjtcbiAgaW1wb3J0IGRlYm91bmNlIGZyb20gXCIuL3V0aWxzL2RlYm91bmNlXCI7XG5cbiAgY29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcbiAgZXhwb3J0IGxldCBjb250YWluZXIgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgaW5wdXQgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgSXRlbSA9IEl0ZW1Db21wb25lbnQ7XG4gIGV4cG9ydCBsZXQgU2VsZWN0aW9uID0gU2VsZWN0aW9uQ29tcG9uZW50O1xuICBleHBvcnQgbGV0IE11bHRpU2VsZWN0aW9uID0gTXVsdGlTZWxlY3Rpb25Db21wb25lbnQ7XG4gIGV4cG9ydCBsZXQgaXNNdWx0aSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgZXhwb3J0IGxldCBpc0NyZWF0YWJsZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGlzRm9jdXNlZCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IHNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgZmlsdGVyVGV4dCA9IFwiXCI7XG4gIGV4cG9ydCBsZXQgcGxhY2Vob2xkZXIgPSBcIlNlbGVjdC4uLlwiO1xuICBleHBvcnQgbGV0IGl0ZW1zID0gW107XG4gIGV4cG9ydCBsZXQgaXRlbUZpbHRlciA9IChsYWJlbCwgZmlsdGVyVGV4dCwgb3B0aW9uKSA9PlxuICAgIGxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVGV4dC50b0xvd2VyQ2FzZSgpKTtcbiAgZXhwb3J0IGxldCBncm91cEJ5ID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IGdyb3VwRmlsdGVyID0gZ3JvdXBzID0+IGdyb3VwcztcbiAgZXhwb3J0IGxldCBpc0dyb3VwSGVhZGVyU2VsZWN0YWJsZSA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGdldEdyb3VwSGVhZGVyTGFiZWwgPSBvcHRpb24gPT4ge1xuICAgIHJldHVybiBvcHRpb24ubGFiZWw7XG4gIH07XG4gIGV4cG9ydCBsZXQgZ2V0T3B0aW9uTGFiZWwgPSAob3B0aW9uLCBmaWx0ZXJUZXh0KSA9PiB7XG4gICAgcmV0dXJuIG9wdGlvbi5pc0NyZWF0b3IgPyBgQ3JlYXRlIFxcXCIke2ZpbHRlclRleHR9XFxcImAgOiBvcHRpb24ubGFiZWw7XG4gIH07XG4gIGV4cG9ydCBsZXQgb3B0aW9uSWRlbnRpZmllciA9IFwidmFsdWVcIjtcbiAgZXhwb3J0IGxldCBsb2FkT3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgZXhwb3J0IGxldCBoYXNFcnJvciA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGNvbnRhaW5lclN0eWxlcyA9IFwiXCI7XG4gIGV4cG9ydCBsZXQgZ2V0U2VsZWN0aW9uTGFiZWwgPSBvcHRpb24gPT4ge1xuICAgIGlmIChvcHRpb24pIHJldHVybiBvcHRpb24ubGFiZWw7XG4gIH07XG5cbiAgZXhwb3J0IGxldCBjcmVhdGVHcm91cEhlYWRlckl0ZW0gPSBncm91cFZhbHVlID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IGdyb3VwVmFsdWUsXG4gICAgICBsYWJlbDogZ3JvdXBWYWx1ZVxuICAgIH07XG4gIH07XG5cbiAgZXhwb3J0IGxldCBjcmVhdGVJdGVtID0gZmlsdGVyVGV4dCA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiBmaWx0ZXJUZXh0LFxuICAgICAgbGFiZWw6IGZpbHRlclRleHRcbiAgICB9O1xuICB9O1xuXG4gIGV4cG9ydCBsZXQgaXNTZWFyY2hhYmxlID0gdHJ1ZTtcbiAgZXhwb3J0IGxldCBpbnB1dFN0eWxlcyA9IFwiXCI7XG4gIGV4cG9ydCBsZXQgaXNDbGVhcmFibGUgPSB0cnVlO1xuICBleHBvcnQgbGV0IGlzV2FpdGluZyA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGxpc3RQbGFjZW1lbnQgPSBcImF1dG9cIjtcbiAgZXhwb3J0IGxldCBsaXN0T3BlbiA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGxpc3QgPSB1bmRlZmluZWQ7XG4gIGV4cG9ydCBsZXQgaXNWaXJ0dWFsTGlzdCA9IGZhbHNlO1xuICBleHBvcnQgbGV0IGxvYWRPcHRpb25zSW50ZXJ2YWwgPSAzMDA7XG4gIGV4cG9ydCBsZXQgbm9PcHRpb25zTWVzc2FnZSA9IFwiTm8gb3B0aW9uc1wiO1xuICBleHBvcnQgbGV0IGhpZGVFbXB0eVN0YXRlID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgZmlsdGVyZWRJdGVtcyA9IFtdO1xuICBleHBvcnQgbGV0IGlucHV0QXR0cmlidXRlcyA9IHt9O1xuICBleHBvcnQgbGV0IGxpc3RBdXRvV2lkdGggPSB0cnVlO1xuICBleHBvcnQgbGV0IGl0ZW1IZWlnaHQgPSA0MDtcbiAgZXhwb3J0IGxldCBJY29uID0gdW5kZWZpbmVkO1xuICBleHBvcnQgbGV0IHNob3dDaGV2cm9uID0gZmFsc2U7XG4gIGV4cG9ydCBsZXQgY29udGFpbmVyQ2xhc3NlcyA9IFwiXCI7XG5cbiAgbGV0IHRhcmdldDtcbiAgbGV0IGFjdGl2ZVNlbGVjdGVkVmFsdWU7XG4gIGxldCBfaXRlbXMgPSBbXTtcbiAgbGV0IG9yaWdpbmFsSXRlbXNDbG9uZTtcbiAgbGV0IHByZXZfc2VsZWN0ZWRWYWx1ZTtcbiAgbGV0IHByZXZfbGlzdE9wZW47XG4gIGxldCBwcmV2X2ZpbHRlclRleHQ7XG4gIGxldCBwcmV2X2lzRm9jdXNlZDtcbiAgbGV0IHByZXZfZmlsdGVyZWRJdGVtcztcblxuICBhc3luYyBmdW5jdGlvbiByZXNldEZpbHRlcigpIHtcbiAgICBhd2FpdCB0aWNrKCk7XG4gICAgZmlsdGVyVGV4dCA9IFwiXCI7XG4gIH1cblxuICBsZXQgZ2V0SXRlbXNIYXNJbnZva2VkID0gZmFsc2U7XG4gIGNvbnN0IGdldEl0ZW1zID0gZGVib3VuY2UoYXN5bmMgKCkgPT4ge1xuICAgIGdldEl0ZW1zSGFzSW52b2tlZCA9IHRydWU7XG4gICAgaXNXYWl0aW5nID0gdHJ1ZTtcblxuICAgIGl0ZW1zID0gYXdhaXQgbG9hZE9wdGlvbnMoZmlsdGVyVGV4dCk7XG5cbiAgICBpc1dhaXRpbmcgPSBmYWxzZTtcbiAgICBpc0ZvY3VzZWQgPSB0cnVlO1xuICAgIGxpc3RPcGVuID0gdHJ1ZTtcbiAgfSwgbG9hZE9wdGlvbnNJbnRlcnZhbCk7XG5cbiAgJDogZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuXG4gICQ6IHtcbiAgICBpZiAodHlwZW9mIHNlbGVjdGVkVmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHNlbGVjdGVkVmFsdWUgPSB7XG4gICAgICAgIFtvcHRpb25JZGVudGlmaWVyXTogc2VsZWN0ZWRWYWx1ZSxcbiAgICAgICAgbGFiZWw6IHNlbGVjdGVkVmFsdWVcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgJDogc2hvd1NlbGVjdGVkSXRlbSA9IHNlbGVjdGVkVmFsdWUgJiYgZmlsdGVyVGV4dC5sZW5ndGggPT09IDA7XG5cbiAgJDogcGxhY2Vob2xkZXJUZXh0ID0gc2VsZWN0ZWRWYWx1ZSA/IFwiXCIgOiBwbGFjZWhvbGRlcjtcblxuICBsZXQgX2lucHV0QXR0cmlidXRlcyA9IHt9O1xuICAkOiB7XG4gICAgX2lucHV0QXR0cmlidXRlcyA9IE9iamVjdC5hc3NpZ24oaW5wdXRBdHRyaWJ1dGVzLCB7XG4gICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICBhdXRvY29ycmVjdDogXCJvZmZcIixcbiAgICAgIHNwZWxsY2hlY2s6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBpZiAoIWlzU2VhcmNoYWJsZSkge1xuICAgICAgX2lucHV0QXR0cmlidXRlcy5yZWFkb25seSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgJDoge1xuICAgIGxldCBfZmlsdGVyZWRJdGVtcztcbiAgICBsZXQgX2l0ZW1zID0gaXRlbXM7XG5cbiAgICBpZiAoaXRlbXMgJiYgaXRlbXMubGVuZ3RoID4gMCAmJiB0eXBlb2YgaXRlbXNbMF0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgIF9pdGVtcyA9IGl0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpbmRleCxcbiAgICAgICAgICB2YWx1ZTogaXRlbSxcbiAgICAgICAgICBsYWJlbDogaXRlbVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGxvYWRPcHRpb25zICYmIGZpbHRlclRleHQubGVuZ3RoID09PSAwICYmIG9yaWdpbmFsSXRlbXNDbG9uZSkge1xuICAgICAgX2ZpbHRlcmVkSXRlbXMgPSBKU09OLnBhcnNlKG9yaWdpbmFsSXRlbXNDbG9uZSk7XG4gICAgICBfaXRlbXMgPSBKU09OLnBhcnNlKG9yaWdpbmFsSXRlbXNDbG9uZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9maWx0ZXJlZEl0ZW1zID0gbG9hZE9wdGlvbnNcbiAgICAgICAgPyBmaWx0ZXJUZXh0Lmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gW11cbiAgICAgICAgICA6IF9pdGVtc1xuICAgICAgICA6IF9pdGVtcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICBsZXQga2VlcEl0ZW0gPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAoaXNNdWx0aSAmJiBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgICAgIGtlZXBJdGVtID0gIXNlbGVjdGVkVmFsdWUuZmluZCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlW29wdGlvbklkZW50aWZpZXJdID09PSBpdGVtW29wdGlvbklkZW50aWZpZXJdO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFrZWVwSXRlbSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKGZpbHRlclRleHQubGVuZ3RoIDwgMSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICByZXR1cm4gaXRlbUZpbHRlcihcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWwoaXRlbSwgZmlsdGVyVGV4dCksXG4gICAgICAgICAgICAgIGZpbHRlclRleHQsXG4gICAgICAgICAgICAgIGl0ZW1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGdyb3VwQnkpIHtcbiAgICAgIGNvbnN0IGdyb3VwVmFsdWVzID0gW107XG4gICAgICBjb25zdCBncm91cHMgPSB7fTtcblxuICAgICAgX2ZpbHRlcmVkSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBWYWx1ZSA9IGdyb3VwQnkoaXRlbSk7XG5cbiAgICAgICAgaWYgKCFncm91cFZhbHVlcy5pbmNsdWRlcyhncm91cFZhbHVlKSkge1xuICAgICAgICAgIGdyb3VwVmFsdWVzLnB1c2goZ3JvdXBWYWx1ZSk7XG4gICAgICAgICAgZ3JvdXBzW2dyb3VwVmFsdWVdID0gW107XG5cbiAgICAgICAgICBpZiAoZ3JvdXBWYWx1ZSkge1xuICAgICAgICAgICAgZ3JvdXBzW2dyb3VwVmFsdWVdLnB1c2goXG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oY3JlYXRlR3JvdXBIZWFkZXJJdGVtKGdyb3VwVmFsdWUsIGl0ZW0pLCB7XG4gICAgICAgICAgICAgICAgaWQ6IGdyb3VwVmFsdWUsXG4gICAgICAgICAgICAgICAgaXNHcm91cEhlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGFibGU6IGlzR3JvdXBIZWFkZXJTZWxlY3RhYmxlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGdyb3Vwc1tncm91cFZhbHVlXS5wdXNoKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oeyBpc0dyb3VwSXRlbTogISFncm91cFZhbHVlIH0sIGl0ZW0pXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc29ydGVkR3JvdXBlZEl0ZW1zID0gW107XG5cbiAgICAgIGdyb3VwRmlsdGVyKGdyb3VwVmFsdWVzKS5mb3JFYWNoKGdyb3VwVmFsdWUgPT4ge1xuICAgICAgICBzb3J0ZWRHcm91cGVkSXRlbXMucHVzaCguLi5ncm91cHNbZ3JvdXBWYWx1ZV0pO1xuICAgICAgfSk7XG5cbiAgICAgIGZpbHRlcmVkSXRlbXMgPSBzb3J0ZWRHcm91cGVkSXRlbXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkSXRlbXMgPSBfZmlsdGVyZWRJdGVtcztcbiAgICB9XG4gIH1cblxuICBiZWZvcmVVcGRhdGUoKCkgPT4ge1xuICAgIGlmIChpc011bHRpICYmIHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBjaGVja1NlbGVjdGVkVmFsdWVGb3JEdXBsaWNhdGVzKCk7XG4gICAgfVxuXG4gICAgaWYgKCFpc011bHRpICYmIHNlbGVjdGVkVmFsdWUgJiYgcHJldl9zZWxlY3RlZFZhbHVlICE9PSBzZWxlY3RlZFZhbHVlKSB7XG4gICAgICBpZiAoXG4gICAgICAgICFwcmV2X3NlbGVjdGVkVmFsdWUgfHxcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRWYWx1ZVtvcHRpb25JZGVudGlmaWVyXSkgIT09XG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkocHJldl9zZWxlY3RlZFZhbHVlW29wdGlvbklkZW50aWZpZXJdKVxuICAgICAgKSB7XG4gICAgICAgIGRpc3BhdGNoKFwic2VsZWN0XCIsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgIGlzTXVsdGkgJiZcbiAgICAgIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkVmFsdWUpICE9PSBKU09OLnN0cmluZ2lmeShwcmV2X3NlbGVjdGVkVmFsdWUpXG4gICAgKSB7XG4gICAgICBpZiAoY2hlY2tTZWxlY3RlZFZhbHVlRm9yRHVwbGljYXRlcygpKSB7XG4gICAgICAgIGRpc3BhdGNoKFwic2VsZWN0XCIsIHNlbGVjdGVkVmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb250YWluZXIgJiYgbGlzdE9wZW4gIT09IHByZXZfbGlzdE9wZW4pIHtcbiAgICAgIGlmIChsaXN0T3Blbikge1xuICAgICAgICBsb2FkTGlzdCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3ZlTGlzdCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmaWx0ZXJUZXh0ICE9PSBwcmV2X2ZpbHRlclRleHQpIHtcbiAgICAgIGlmIChmaWx0ZXJUZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICAgICAgbGlzdE9wZW4gPSB0cnVlO1xuXG4gICAgICAgIGlmIChsb2FkT3B0aW9ucykge1xuICAgICAgICAgIGdldEl0ZW1zKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbG9hZExpc3QoKTtcbiAgICAgICAgICBsaXN0T3BlbiA9IHRydWU7XG5cbiAgICAgICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldExpc3QoW10pO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdCkge1xuICAgICAgICBsaXN0LiRzZXQoe1xuICAgICAgICAgIGZpbHRlclRleHRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlzRm9jdXNlZCAhPT0gcHJldl9pc0ZvY3VzZWQpIHtcbiAgICAgIGlmIChpc0ZvY3VzZWQgfHwgbGlzdE9wZW4pIHtcbiAgICAgICAgaGFuZGxlRm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc2V0RmlsdGVyKCk7XG4gICAgICAgIGlmIChpbnB1dCkgaW5wdXQuYmx1cigpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcmV2X2ZpbHRlcmVkSXRlbXMgIT09IGZpbHRlcmVkSXRlbXMpIHtcbiAgICAgIGxldCBfZmlsdGVyZWRJdGVtcyA9IFsuLi5maWx0ZXJlZEl0ZW1zXTtcblxuICAgICAgaWYgKGlzQ3JlYXRhYmxlICYmIGZpbHRlclRleHQpIHtcbiAgICAgICAgY29uc3QgaXRlbVRvQ3JlYXRlID0gY3JlYXRlSXRlbShmaWx0ZXJUZXh0KTtcbiAgICAgICAgaXRlbVRvQ3JlYXRlLmlzQ3JlYXRvciA9IHRydWU7XG5cbiAgICAgICAgY29uc3QgZXhpc3RpbmdJdGVtV2l0aEZpbHRlclZhbHVlID0gX2ZpbHRlcmVkSXRlbXMuZmluZChpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gaXRlbVtvcHRpb25JZGVudGlmaWVyXSA9PT0gaXRlbVRvQ3JlYXRlW29wdGlvbklkZW50aWZpZXJdO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZXhpc3RpbmdTZWxlY3Rpb25XaXRoRmlsdGVyVmFsdWU7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkVmFsdWUpIHtcbiAgICAgICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgICAgZXhpc3RpbmdTZWxlY3Rpb25XaXRoRmlsdGVyVmFsdWUgPSBzZWxlY3RlZFZhbHVlLmZpbmQoc2VsZWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25bb3B0aW9uSWRlbnRpZmllcl0gPT09IGl0ZW1Ub0NyZWF0ZVtvcHRpb25JZGVudGlmaWVyXVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIHNlbGVjdGVkVmFsdWVbb3B0aW9uSWRlbnRpZmllcl0gPT09IGl0ZW1Ub0NyZWF0ZVtvcHRpb25JZGVudGlmaWVyXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZXhpc3RpbmdTZWxlY3Rpb25XaXRoRmlsdGVyVmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXhpc3RpbmdJdGVtV2l0aEZpbHRlclZhbHVlICYmICFleGlzdGluZ1NlbGVjdGlvbldpdGhGaWx0ZXJWYWx1ZSkge1xuICAgICAgICAgIF9maWx0ZXJlZEl0ZW1zID0gWy4uLl9maWx0ZXJlZEl0ZW1zLCBpdGVtVG9DcmVhdGVdO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNldExpc3QoX2ZpbHRlcmVkSXRlbXMpO1xuICAgIH1cblxuICAgIHByZXZfc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWU7XG4gICAgcHJldl9saXN0T3BlbiA9IGxpc3RPcGVuO1xuICAgIHByZXZfZmlsdGVyVGV4dCA9IGZpbHRlclRleHQ7XG4gICAgcHJldl9pc0ZvY3VzZWQgPSBpc0ZvY3VzZWQ7XG4gICAgcHJldl9maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcztcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2hlY2tTZWxlY3RlZFZhbHVlRm9yRHVwbGljYXRlcygpIHtcbiAgICBsZXQgbm9EdXBsaWNhdGVzID0gdHJ1ZTtcbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgY29uc3QgaWRzID0gW107XG4gICAgICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBbXTtcblxuICAgICAgc2VsZWN0ZWRWYWx1ZS5mb3JFYWNoKHZhbCA9PiB7XG4gICAgICAgIGlmICghaWRzLmluY2x1ZGVzKHZhbFtvcHRpb25JZGVudGlmaWVyXSkpIHtcbiAgICAgICAgICBpZHMucHVzaCh2YWxbb3B0aW9uSWRlbnRpZmllcl0pO1xuICAgICAgICAgIHVuaXF1ZVZhbHVlcy5wdXNoKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbm9EdXBsaWNhdGVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzZWxlY3RlZFZhbHVlID0gdW5pcXVlVmFsdWVzO1xuICAgIH1cbiAgICByZXR1cm4gbm9EdXBsaWNhdGVzO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gc2V0TGlzdChpdGVtcykge1xuICAgIGF3YWl0IHRpY2soKTtcbiAgICBpZiAobGlzdCkgcmV0dXJuIGxpc3QuJHNldCh7IGl0ZW1zIH0pO1xuICAgIGlmIChsb2FkT3B0aW9ucyAmJiBnZXRJdGVtc0hhc0ludm9rZWQgJiYgaXRlbXMubGVuZ3RoID4gMCkgbG9hZExpc3QoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU11bHRpSXRlbUNsZWFyKGV2ZW50KSB7XG4gICAgY29uc3QgeyBkZXRhaWwgfSA9IGV2ZW50O1xuICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9XG4gICAgICBzZWxlY3RlZFZhbHVlW2RldGFpbCA/IGRldGFpbC5pIDogc2VsZWN0ZWRWYWx1ZS5sZW5ndGggLSAxXTtcblxuICAgIGlmIChzZWxlY3RlZFZhbHVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWUuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gaXRlbVRvUmVtb3ZlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goXCJjbGVhclwiLCBpdGVtVG9SZW1vdmUpO1xuXG4gICAgZ2V0UG9zaXRpb24oKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldFBvc2l0aW9uKCkge1xuICAgIGF3YWl0IHRpY2soKTtcbiAgICBpZiAoIXRhcmdldCB8fCAhY29udGFpbmVyKSByZXR1cm47XG4gICAgY29uc3QgeyB0b3AsIGhlaWdodCwgd2lkdGggfSA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgIHRhcmdldC5zdHlsZVtcIm1pbi13aWR0aFwiXSA9IGAke3dpZHRofXB4YDtcbiAgICB0YXJnZXQuc3R5bGUud2lkdGggPSBgJHtsaXN0QXV0b1dpZHRoID8gXCJhdXRvXCIgOiBcIjEwMCVcIn1gO1xuICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG5cbiAgICBpZiAobGlzdFBsYWNlbWVudCA9PT0gXCJ0b3BcIikge1xuICAgICAgdGFyZ2V0LnN0eWxlLmJvdHRvbSA9IGAke2hlaWdodCArIDV9cHhgO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXJnZXQuc3R5bGUudG9wID0gYCR7aGVpZ2h0ICsgNX1weGA7XG4gICAgfVxuXG4gICAgdGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgaWYgKGxpc3RQbGFjZW1lbnQgPT09IFwiYXV0b1wiICYmIGlzT3V0T2ZWaWV3cG9ydCh0YXJnZXQpLmJvdHRvbSkge1xuICAgICAgdGFyZ2V0LnN0eWxlLnRvcCA9IGBgO1xuICAgICAgdGFyZ2V0LnN0eWxlLmJvdHRvbSA9IGAke2hlaWdodCArIDV9cHhgO1xuICAgIH1cblxuICAgIHRhcmdldC5zdHlsZS52aXNpYmlsaXR5ID0gXCJcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZSkge1xuICAgIGlmICghaXNGb2N1c2VkKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGlzdE9wZW4gPSB0cnVlO1xuICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGlzdE9wZW4gPSB0cnVlO1xuICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJUYWJcIjpcbiAgICAgICAgaWYgKCFsaXN0T3BlbikgaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxuICAgICAgICBpZiAoIWlzTXVsdGkgfHwgZmlsdGVyVGV4dC5sZW5ndGggPiAwKSByZXR1cm47XG4gICAgICAgIGlmIChpc011bHRpICYmIHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaGFuZGxlTXVsdGlJdGVtQ2xlYXIoXG4gICAgICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyBhY3RpdmVTZWxlY3RlZFZhbHVlXG4gICAgICAgICAgICAgIDogc2VsZWN0ZWRWYWx1ZS5sZW5ndGggLSAxXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9PT0gMCB8fCBhY3RpdmVTZWxlY3RlZFZhbHVlID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlID1cbiAgICAgICAgICAgIHNlbGVjdGVkVmFsdWUubGVuZ3RoID4gYWN0aXZlU2VsZWN0ZWRWYWx1ZVxuICAgICAgICAgICAgICA/IGFjdGl2ZVNlbGVjdGVkVmFsdWUgLSAxXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICBpZiAobGlzdCkgbGlzdC4kc2V0KHsgaG92ZXJJdGVtSW5kZXg6IC0xIH0pO1xuICAgICAgICBpZiAoIWlzTXVsdGkgfHwgZmlsdGVyVGV4dC5sZW5ndGggPiAwKSByZXR1cm47XG5cbiAgICAgICAgaWYgKGFjdGl2ZVNlbGVjdGVkVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlLmxlbmd0aCAtIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiBhY3RpdmVTZWxlY3RlZFZhbHVlICYmXG4gICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSAhPT0gMFxuICAgICAgICApIHtcbiAgICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlIC09IDE7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICBpZiAobGlzdCkgbGlzdC4kc2V0KHsgaG92ZXJJdGVtSW5kZXg6IC0xIH0pO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgIWlzTXVsdGkgfHxcbiAgICAgICAgICBmaWx0ZXJUZXh0Lmxlbmd0aCA+IDAgfHxcbiAgICAgICAgICBhY3RpdmVTZWxlY3RlZFZhbHVlID09PSB1bmRlZmluZWRcbiAgICAgICAgKVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKGFjdGl2ZVNlbGVjdGVkVmFsdWUgPT09IHNlbGVjdGVkVmFsdWUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAoYWN0aXZlU2VsZWN0ZWRWYWx1ZSA8IHNlbGVjdGVkVmFsdWUubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIGFjdGl2ZVNlbGVjdGVkVmFsdWUgKz0gMTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVGb2N1cygpIHtcbiAgICBpc0ZvY3VzZWQgPSB0cnVlO1xuICAgIGlmIChpbnB1dCkgaW5wdXQuZm9jdXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3QoKSB7XG4gICAgcmVzZXRGaWx0ZXIoKTtcbiAgICBhY3RpdmVTZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKCFsaXN0KSByZXR1cm47XG4gICAgbGlzdC4kZGVzdHJveSgpO1xuICAgIGxpc3QgPSB1bmRlZmluZWQ7XG5cbiAgICBpZiAoIXRhcmdldCkgcmV0dXJuO1xuICAgIGlmICh0YXJnZXQucGFyZW50Tm9kZSkgdGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGFyZ2V0KTtcbiAgICB0YXJnZXQgPSB1bmRlZmluZWQ7XG5cbiAgICBsaXN0ID0gbGlzdDtcbiAgICB0YXJnZXQgPSB0YXJnZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVXaW5kb3dDbGljayhldmVudCkge1xuICAgIGlmICghY29udGFpbmVyKSByZXR1cm47XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPVxuICAgICAgZXZlbnQucGF0aCAmJiBldmVudC5wYXRoLmxlbmd0aCA+IDAgPyBldmVudC5wYXRoWzBdIDogZXZlbnQudGFyZ2V0O1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZXZlbnRUYXJnZXQpKSByZXR1cm47XG4gICAgaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgbGlzdE9wZW4gPSBmYWxzZTtcbiAgICBhY3RpdmVTZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xuICAgIGlmIChpbnB1dCkgaW5wdXQuYmx1cigpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHJldHVybjtcbiAgICBpc0ZvY3VzZWQgPSB0cnVlO1xuICAgIGxpc3RPcGVuID0gIWxpc3RPcGVuO1xuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNsZWFyKCkge1xuICAgIHNlbGVjdGVkVmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgbGlzdE9wZW4gPSBmYWxzZTtcbiAgICBkaXNwYXRjaChcImNsZWFyXCIsIHNlbGVjdGVkVmFsdWUpO1xuICAgIGhhbmRsZUZvY3VzKCk7XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBsb2FkTGlzdCgpIHtcbiAgICBhd2FpdCB0aWNrKCk7XG4gICAgaWYgKHRhcmdldCAmJiBsaXN0KSByZXR1cm47XG5cbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgSXRlbSxcbiAgICAgIGZpbHRlclRleHQsXG4gICAgICBvcHRpb25JZGVudGlmaWVyLFxuICAgICAgbm9PcHRpb25zTWVzc2FnZSxcbiAgICAgIGhpZGVFbXB0eVN0YXRlLFxuICAgICAgaXNWaXJ0dWFsTGlzdCxcbiAgICAgIHNlbGVjdGVkVmFsdWUsXG4gICAgICBpc011bHRpLFxuICAgICAgZ2V0R3JvdXBIZWFkZXJMYWJlbCxcbiAgICAgIGl0ZW1zOiBmaWx0ZXJlZEl0ZW1zLFxuICAgICAgaXRlbUhlaWdodFxuICAgIH07XG5cbiAgICBpZiAoZ2V0T3B0aW9uTGFiZWwpIHtcbiAgICAgIGRhdGEuZ2V0T3B0aW9uTGFiZWwgPSBnZXRPcHRpb25MYWJlbDtcbiAgICB9XG5cbiAgICB0YXJnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgT2JqZWN0LmFzc2lnbih0YXJnZXQuc3R5bGUsIHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBcInotaW5kZXhcIjogMixcbiAgICAgIHZpc2liaWxpdHk6IFwiaGlkZGVuXCJcbiAgICB9KTtcblxuICAgIGxpc3QgPSBsaXN0O1xuICAgIHRhcmdldCA9IHRhcmdldDtcbiAgICBpZiAoY29udGFpbmVyKSBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFyZ2V0KTtcblxuICAgIGxpc3QgPSBuZXcgTGlzdCh7XG4gICAgICB0YXJnZXQsXG4gICAgICBwcm9wczogZGF0YVxuICAgIH0pO1xuXG4gICAgbGlzdC4kb24oXCJpdGVtU2VsZWN0ZWRcIiwgZXZlbnQgPT4ge1xuICAgICAgY29uc3QgeyBkZXRhaWwgfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoZGV0YWlsKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBPYmplY3QuYXNzaWduKHt9LCBkZXRhaWwpO1xuXG4gICAgICAgIGlmICghaXRlbS5pc0dyb3VwSGVhZGVyIHx8IGl0ZW0uaXNTZWxlY3RhYmxlKSB7XG5cbiAgICAgICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWUgPyBzZWxlY3RlZFZhbHVlLmNvbmNhdChbaXRlbV0pIDogW2l0ZW1dO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlID0gaXRlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXNldEZpbHRlcigpO1xuICAgICAgICAgIHNlbGVjdGVkVmFsdWUgPSBzZWxlY3RlZFZhbHVlO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBsaXN0T3BlbiA9IGZhbHNlO1xuICAgICAgICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGlzdC4kb24oXCJpdGVtQ3JlYXRlZFwiLCBldmVudCA9PiB7XG4gICAgICBjb25zdCB7IGRldGFpbCB9ID0gZXZlbnQ7XG4gICAgICBpZiAoaXNNdWx0aSkge1xuICAgICAgICBzZWxlY3RlZFZhbHVlID0gc2VsZWN0ZWRWYWx1ZSB8fCBbXTtcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IFsuLi5zZWxlY3RlZFZhbHVlLCBjcmVhdGVJdGVtKGRldGFpbCldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IGNyZWF0ZUl0ZW0oZGV0YWlsKTtcbiAgICAgIH1cblxuICAgICAgZmlsdGVyVGV4dCA9IFwiXCI7XG4gICAgICBsaXN0T3BlbiA9IGZhbHNlO1xuICAgICAgYWN0aXZlU2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgIHJlc2V0RmlsdGVyKCk7XG4gICAgfSk7XG5cbiAgICBsaXN0LiRvbihcImNsb3NlTGlzdFwiLCAoKSA9PiB7XG4gICAgICBsaXN0T3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgKGxpc3QgPSBsaXN0KSwgKHRhcmdldCA9IHRhcmdldCk7XG4gICAgZ2V0UG9zaXRpb24oKTtcbiAgfVxuXG4gIG9uTW91bnQoKCkgPT4ge1xuICAgIGlmIChpc0ZvY3VzZWQpIGlucHV0LmZvY3VzKCk7XG4gICAgaWYgKGxpc3RPcGVuKSBsb2FkTGlzdCgpO1xuXG4gICAgaWYgKGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIG9yaWdpbmFsSXRlbXNDbG9uZSA9IEpTT04uc3RyaW5naWZ5KGl0ZW1zKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgaWYgKGlzTXVsdGkpIHtcbiAgICAgICAgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWUubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IGl0ZW0sIGxhYmVsOiBpdGVtIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIHJlbW92ZUxpc3QoKTtcbiAgfSk7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuICAuc2VsZWN0Q29udGFpbmVyIHtcbiAgICAtLXBhZGRpbmc6IDAgMC41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQpO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lciBpbnB1dCB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0taW5wdXRDb2xvciwgIzNmNGY1Zik7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQsIDQycHgpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1oZWlnaHQsIDQycHgpO1xuICAgIHBhZGRpbmc6IHZhcigtLWlucHV0UGFkZGluZywgdmFyKC0tcGFkZGluZykpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogdmFyKC0taW5wdXRGb250U2l6ZSwgMTRweCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IHZhcigtLWlucHV0TGV0dGVyU3BhY2luZywgLTAuMDhweCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IHZhcigtLWlucHV0TGVmdCwgMCk7XG4gIH1cblxuICAuc2VsZWN0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHZhcigtLXBsYWNlaG9sZGVyQ29sb3IsICM3ODg0OGYpO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC5zZWxlY3RDb250YWluZXI6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVySG92ZXJDb2xvciwgI2IyYjhiZik7XG4gIH1cblxuICAuc2VsZWN0Q29udGFpbmVyLmZvY3VzZWQge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYm9yZGVyRm9jdXNDb2xvciwgIzAwNmZlOCk7XG4gIH1cblxuICAuc2VsZWN0Q29udGFpbmVyLmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXNhYmxlZEJhY2tncm91bmQsICNlYmVkZWYpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGlzYWJsZWRCb3JkZXJDb2xvciwgI2ViZWRlZik7XG4gICAgY29sb3I6IHZhcigtLWRpc2FibGVkQ29sb3IsICNjMWM2Y2MpO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lci5kaXNhYmxlZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1kaXNhYmxlZFBsYWNlaG9sZGVyQ29sb3IsICNjMWM2Y2MpO1xuICB9XG5cbiAgLnNlbGVjdGVkSXRlbSB7XG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWhlaWdodCwgNDJweCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQsIDQycHgpO1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiB2YXIoLS1zZWxlY3RlZEl0ZW1QYWRkaW5nLCAwIDIwcHggMCAwKTtcbiAgfVxuXG4gIC5zZWxlY3RlZEl0ZW06Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuY2xlYXJTZWxlY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMC4zcmVtO1xuICAgIHRvcDogMC4zcmVtO1xuICAgIGJvdHRvbTogMC4zcmVtO1xuICAgIHdpZHRoOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvcik7XG4gICAgZmxleDogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmNsZWFyU2VsZWN0OmhvdmVyIHtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtY29sb3IpO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lci5mb2N1c2VkIC5jbGVhclNlbGVjdCB7XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLWNvbG9yKTtcbiAgfVxuXG4gIC5pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogdmFyKC0taW5kaWNhdG9yUmlnaHQsIDEwcHgpO1xuICAgIHRvcDogdmFyKC0taW5kaWNhdG9yVG9wLCAxMXB4KTtcbiAgICB3aWR0aDogdmFyKC0taW5kaWNhdG9yV2lkdGgsIDIwcHgpO1xuICAgIGhlaWdodDogdmFyKC0taW5kaWNhdG9ySGVpZ2h0LCAyMHB4KTtcbiAgICBjb2xvcjogdmFyKC0taW5kaWNhdG9yQ29sb3IsICNjNWNhY2YpO1xuICB9XG5cbiAgLmluZGljYXRvciBzdmcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmaWxsOiB2YXIoLS1pbmRpY2F0b3JGaWxsLCBjdXJyZW50Y29sb3IpO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIHN0cm9rZTogdmFyKC0taW5kaWNhdG9yU3Ryb2tlLCBjdXJyZW50Y29sb3IpO1xuICAgIHN0cm9rZS13aWR0aDogMDtcbiAgfVxuXG4gIC5zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IHZhcigtLXNwaW5uZXJSaWdodCwgMTBweCk7XG4gICAgdG9wOiB2YXIoLS1zcGlubmVyTGVmdCwgMTFweCk7XG4gICAgd2lkdGg6IHZhcigtLXNwaW5uZXJXaWR0aCwgMjBweCk7XG4gICAgaGVpZ2h0OiB2YXIoLS1zcGlubmVySGVpZ2h0LCAyMHB4KTtcbiAgICBjb2xvcjogdmFyKC0tc3Bpbm5lckNvbG9yLCAjNTFjZTZjKTtcbiAgICBhbmltYXRpb246IHJvdGF0ZSAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cblxuICAuc3Bpbm5lcl9pY29uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogbm9uZTtcbiAgfVxuXG4gIC5zcGlubmVyX3BhdGgge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwO1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiB2YXIoLS1tdWx0aVNlbGVjdFBhZGRpbmcsIDAgMzVweCAwIDE2cHgpO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAubXVsdGlTZWxlY3QgPiAqIHtcbiAgICBmbGV4OiAxIDEgNTBweDtcbiAgfVxuXG4gIC5zZWxlY3RDb250YWluZXIubXVsdGlTZWxlY3QgaW5wdXQge1xuICAgIHBhZGRpbmc6IHZhcigtLW11bHRpU2VsZWN0SW5wdXRQYWRkaW5nLCAwKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiB2YXIoLS1tdWx0aVNlbGVjdElucHV0TWFyZ2luLCAwKTtcbiAgfVxuXG4gIC5oYXNFcnJvciB7XG4gICAgYm9yZGVyOiB2YXIoLS1lcnJvckJvcmRlciwgMXB4IHNvbGlkICNmZjJkNTUpO1xuICB9XG5cbiAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6d2luZG93XG4gIG9uOmNsaWNrPXtoYW5kbGVXaW5kb3dDbGlja31cbiAgb246a2V5ZG93bj17aGFuZGxlS2V5RG93bn1cbiAgb246cmVzaXplPXtnZXRQb3NpdGlvbn0gLz5cblxuPGRpdlxuICBjbGFzcz1cInNlbGVjdENvbnRhaW5lciB7Y29udGFpbmVyQ2xhc3Nlc31cIlxuICBjbGFzczpoYXNFcnJvclxuICBjbGFzczptdWx0aVNlbGVjdD17aXNNdWx0aX1cbiAgY2xhc3M6ZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XG4gIGNsYXNzOmZvY3VzZWQ9e2lzRm9jdXNlZH1cbiAgc3R5bGU9e2NvbnRhaW5lclN0eWxlc31cbiAgb246Y2xpY2s9e2hhbmRsZUNsaWNrfVxuICBiaW5kOnRoaXM9e2NvbnRhaW5lcn0+XG5cbiAgeyNpZiBJY29ufVxuICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e0ljb259IC8+XG4gIHsvaWZ9XG5cbiAgeyNpZiBpc011bHRpICYmIHNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRWYWx1ZS5sZW5ndGggPiAwfVxuICAgIDxzdmVsdGU6Y29tcG9uZW50XG4gICAgICB0aGlzPXtNdWx0aVNlbGVjdGlvbn1cbiAgICAgIHtzZWxlY3RlZFZhbHVlfVxuICAgICAge2dldFNlbGVjdGlvbkxhYmVsfVxuICAgICAge2FjdGl2ZVNlbGVjdGVkVmFsdWV9XG4gICAgICB7aXNEaXNhYmxlZH1cbiAgICAgIG9uOm11bHRpSXRlbUNsZWFyPXtoYW5kbGVNdWx0aUl0ZW1DbGVhcn1cbiAgICAgIG9uOmZvY3VzPXtoYW5kbGVGb2N1c30gLz5cbiAgey9pZn1cblxuICB7I2lmIGlzRGlzYWJsZWR9XG4gICAgPGlucHV0XG4gICAgICB7Li4uX2lucHV0QXR0cmlidXRlc31cbiAgICAgIGJpbmQ6dGhpcz17aW5wdXR9XG4gICAgICBvbjpmb2N1cz17aGFuZGxlRm9jdXN9XG4gICAgICBiaW5kOnZhbHVlPXtmaWx0ZXJUZXh0fVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyVGV4dH1cbiAgICAgIHN0eWxlPXtpbnB1dFN0eWxlc31cbiAgICAgIGRpc2FibGVkIC8+XG4gIHs6ZWxzZX1cbiAgICA8aW5wdXRcbiAgICAgIHsuLi5faW5wdXRBdHRyaWJ1dGVzfVxuICAgICAgYmluZDp0aGlzPXtpbnB1dH1cbiAgICAgIG9uOmZvY3VzPXtoYW5kbGVGb2N1c31cbiAgICAgIGJpbmQ6dmFsdWU9e2ZpbHRlclRleHR9XG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJUZXh0fVxuICAgICAgc3R5bGU9e2lucHV0U3R5bGVzfSAvPlxuICB7L2lmfVxuXG4gIHsjaWYgIWlzTXVsdGkgJiYgc2hvd1NlbGVjdGVkSXRlbX1cbiAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWRJdGVtXCIgb246Zm9jdXM9e2hhbmRsZUZvY3VzfT5cbiAgICAgIDxzdmVsdGU6Y29tcG9uZW50XG4gICAgICAgIHRoaXM9e1NlbGVjdGlvbn1cbiAgICAgICAgaXRlbT17c2VsZWN0ZWRWYWx1ZX1cbiAgICAgICAge2dldFNlbGVjdGlvbkxhYmVsfSAvPlxuICAgIDwvZGl2PlxuICB7L2lmfVxuXG4gIHsjaWYgc2hvd1NlbGVjdGVkSXRlbSAmJiBpc0NsZWFyYWJsZSAmJiAhaXNEaXNhYmxlZCAmJiAhaXNXYWl0aW5nfVxuICAgIDxkaXYgY2xhc3M9XCJjbGVhclNlbGVjdFwiIG9uOmNsaWNrfHByZXZlbnREZWZhdWx0PXtoYW5kbGVDbGVhcn0+XG4gICAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICB2aWV3Qm94PVwiLTIgLTIgNTAgNTBcIlxuICAgICAgICBmb2N1c2FibGU9XCJmYWxzZVwiXG4gICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIj5cbiAgICAgICAgPHBhdGhcbiAgICAgICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICBkPVwiTTM0LjkyMywzNy4yNTFMMjQsMjYuMzI4TDEzLjA3NywzNy4yNTFMOS40MzYsMzMuNjFsMTAuOTIzLTEwLjkyM0w5LjQzNiwxMS43NjVsMy42NDEtMy42NDFMMjQsMTkuMDQ3TDM0LjkyMyw4LjEyNFxuICAgICAgICAgIGwzLjY0MSwzLjY0MUwyNy42NDEsMjIuNjg4TDM4LjU2NCwzMy42MUwzNC45MjMsMzcuMjUxelwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgey9pZn1cblxuICB7I2lmIHNob3dDaGV2cm9uICYmICFzZWxlY3RlZFZhbHVlIHx8ICghaXNTZWFyY2hhYmxlICYmICFpc0Rpc2FibGVkICYmICFpc1dhaXRpbmcgJiYgKChzaG93U2VsZWN0ZWRJdGVtICYmICFpc0NsZWFyYWJsZSkgfHwgIXNob3dTZWxlY3RlZEl0ZW0pKX1cbiAgICA8ZGl2IGNsYXNzPVwiaW5kaWNhdG9yXCI+XG4gICAgICA8c3ZnXG4gICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgICAgZm9jdXNhYmxlPVwiZmFsc2VcIlxuICAgICAgICBjbGFzcz1cImNzcy0xOWJxaDJyXCI+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgZD1cIk00LjUxNiA3LjU0OGMwLjQzNi0wLjQ0NiAxLjA0My0wLjQ4MSAxLjU3NiAwbDMuOTA4IDMuNzQ3XG4gICAgICAgICAgMy45MDgtMy43NDdjMC41MzMtMC40ODEgMS4xNDEtMC40NDYgMS41NzQgMCAwLjQzNiAwLjQ0NSAwLjQwOCAxLjE5NyAwXG4gICAgICAgICAgMS42MTUtMC40MDYgMC40MTgtNC42OTUgNC41MDItNC42OTUgNC41MDItMC4yMTcgMC4yMjMtMC41MDJcbiAgICAgICAgICAwLjMzNS0wLjc4NyAwLjMzNXMtMC41Ny0wLjExMi0wLjc4OS0wLjMzNWMwXG4gICAgICAgICAgMC00LjI4Ny00LjA4NC00LjY5NS00LjUwMnMtMC40MzYtMS4xNyAwLTEuNjE1elwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgey9pZn1cblxuICB7I2lmIGlzV2FpdGluZ31cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPlxuICAgICAgPHN2ZyBjbGFzcz1cInNwaW5uZXJfaWNvblwiIHZpZXdCb3g9XCIyNSAyNSA1MCA1MFwiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgY2xhc3M9XCJzcGlubmVyX3BhdGhcIlxuICAgICAgICAgIGN4PVwiNTBcIlxuICAgICAgICAgIGN5PVwiNTBcIlxuICAgICAgICAgIHI9XCIyMFwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiNVwiXG4gICAgICAgICAgc3Ryb2tlLW1pdGVybGltaXQ9XCIxMFwiIC8+XG4gICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5cbiAgey9pZn1cbjwvZGl2PlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdtQkUsZ0JBQWdCLDRCQUFDLENBQUMsQUFDaEIsU0FBUyxDQUFFLFFBQVEsQ0FDbkIsYUFBYSxDQUFFLElBQUksQ0FDbkIsTUFBTSxDQUFFLElBQUksQ0FDWixRQUFRLENBQUUsUUFBUSxDQUNsQixPQUFPLENBQUUsSUFBSSxDQUNiLFdBQVcsQ0FBRSxNQUFNLENBQ25CLE9BQU8sQ0FBRSxJQUFJLFNBQVMsQ0FBQyxDQUN2QixVQUFVLENBQUUsSUFBSSxzQkFBc0IsQ0FBQyxBQUN6QyxDQUFDLEFBRUQsOEJBQWdCLENBQUMsS0FBSyxjQUFDLENBQUMsQUFDdEIsTUFBTSxDQUFFLE9BQU8sQ0FDZixNQUFNLENBQUUsSUFBSSxDQUNaLEtBQUssQ0FBRSxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FDakMsTUFBTSxDQUFFLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUMzQixXQUFXLENBQUUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQ2hDLE9BQU8sQ0FBRSxJQUFJLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FDNUMsS0FBSyxDQUFFLElBQUksQ0FDWCxVQUFVLENBQUUsV0FBVyxDQUN2QixTQUFTLENBQUUsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQ3JDLGNBQWMsQ0FBRSxJQUFJLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUNsRCxRQUFRLENBQUUsUUFBUSxDQUNsQixJQUFJLENBQUUsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLEFBQzNCLENBQUMsQUFFRCw4QkFBZ0IsQ0FBQyxtQkFBSyxhQUFhLEFBQUMsQ0FBQyxBQUNuQyxLQUFLLENBQUUsSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQUFDekMsQ0FBQyxBQUVELDhCQUFnQixDQUFDLG1CQUFLLE1BQU0sQUFBQyxDQUFDLEFBQzVCLE9BQU8sQ0FBRSxJQUFJLEFBQ2YsQ0FBQyxBQUVELDRDQUFnQixNQUFNLEFBQUMsQ0FBQyxBQUN0QixZQUFZLENBQUUsSUFBSSxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQUFDaEQsQ0FBQyxBQUVELGdCQUFnQixRQUFRLDRCQUFDLENBQUMsQUFDeEIsWUFBWSxDQUFFLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLEFBQ2hELENBQUMsQUFFRCxnQkFBZ0IsU0FBUyw0QkFBQyxDQUFDLEFBQ3pCLFVBQVUsQ0FBRSxJQUFJLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUM5QyxZQUFZLENBQUUsSUFBSSxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FDakQsS0FBSyxDQUFFLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxBQUN0QyxDQUFDLEFBRUQsZ0JBQWdCLHVCQUFTLENBQUMsbUJBQUssYUFBYSxBQUFDLENBQUMsQUFDNUMsS0FBSyxDQUFFLElBQUksMEJBQTBCLENBQUMsUUFBUSxDQUFDLEFBQ2pELENBQUMsQUFFRCxhQUFhLDRCQUFDLENBQUMsQUFDYixXQUFXLENBQUUsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLENBQ2hDLE1BQU0sQ0FBRSxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FDM0IsVUFBVSxDQUFFLE1BQU0sQ0FDbEIsT0FBTyxDQUFFLElBQUkscUJBQXFCLENBQUMsV0FBVyxDQUFDLEFBQ2pELENBQUMsQUFFRCx5Q0FBYSxNQUFNLEFBQUMsQ0FBQyxBQUNuQixPQUFPLENBQUUsSUFBSSxBQUNmLENBQUMsQUFFRCxZQUFZLDRCQUFDLENBQUMsQUFDWixRQUFRLENBQUUsUUFBUSxDQUNsQixLQUFLLENBQUUsTUFBTSxDQUNiLEdBQUcsQ0FBRSxNQUFNLENBQ1gsTUFBTSxDQUFFLE1BQU0sQ0FDZCxLQUFLLENBQUUsSUFBSSxDQUNYLEtBQUssQ0FBRSxJQUFJLE9BQU8sQ0FBQyxDQUNuQixJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsQUFDdkIsQ0FBQyxBQUVELHdDQUFZLE1BQU0sQUFBQyxDQUFDLEFBQ2xCLEtBQUssQ0FBRSxJQUFJLGFBQWEsQ0FBQyxBQUMzQixDQUFDLEFBRUQsZ0JBQWdCLHNCQUFRLENBQUMsWUFBWSxjQUFDLENBQUMsQUFDckMsS0FBSyxDQUFFLElBQUksYUFBYSxDQUFDLEFBQzNCLENBQUMsQUFFRCxVQUFVLDRCQUFDLENBQUMsQUFDVixRQUFRLENBQUUsUUFBUSxDQUNsQixLQUFLLENBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FDbEMsR0FBRyxDQUFFLElBQUksY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUM5QixLQUFLLENBQUUsSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FDbEMsTUFBTSxDQUFFLElBQUksaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQ3BDLEtBQUssQ0FBRSxJQUFJLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxBQUN2QyxDQUFDLEFBRUQsd0JBQVUsQ0FBQyxHQUFHLGNBQUMsQ0FBQyxBQUNkLE9BQU8sQ0FBRSxZQUFZLENBQ3JCLElBQUksQ0FBRSxJQUFJLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FDeEMsV0FBVyxDQUFFLENBQUMsQ0FDZCxNQUFNLENBQUUsSUFBSSxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsQ0FDNUMsWUFBWSxDQUFFLENBQUMsQUFDakIsQ0FBQyxBQUVELFFBQVEsNEJBQUMsQ0FBQyxBQUNSLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEtBQUssQ0FBRSxJQUFJLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDaEMsR0FBRyxDQUFFLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUM3QixLQUFLLENBQUUsSUFBSSxjQUFjLENBQUMsS0FBSyxDQUFDLENBQ2hDLE1BQU0sQ0FBRSxJQUFJLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FDbEMsS0FBSyxDQUFFLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUNuQyxTQUFTLENBQUUsb0JBQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFFBQVEsQUFDekMsQ0FBQyxBQUVELGFBQWEsNEJBQUMsQ0FBQyxBQUNiLE9BQU8sQ0FBRSxLQUFLLENBQ2QsTUFBTSxDQUFFLElBQUksQ0FDWixnQkFBZ0IsQ0FBRSxNQUFNLENBQUMsTUFBTSxDQUMvQixLQUFLLENBQUUsSUFBSSxDQUNYLFFBQVEsQ0FBRSxRQUFRLENBQ2xCLEdBQUcsQ0FBRSxDQUFDLENBQ04sTUFBTSxDQUFFLENBQUMsQ0FDVCxJQUFJLENBQUUsQ0FBQyxDQUNQLEtBQUssQ0FBRSxDQUFDLENBQ1IsTUFBTSxDQUFFLElBQUksQ0FDWixpQkFBaUIsQ0FBRSxJQUFJLEFBQ3pCLENBQUMsQUFFRCxhQUFhLDRCQUFDLENBQUMsQUFDYixnQkFBZ0IsQ0FBRSxFQUFFLENBQ3BCLGNBQWMsQ0FBRSxLQUFLLEFBQ3ZCLENBQUMsQUFFRCxZQUFZLDRCQUFDLENBQUMsQUFDWixPQUFPLENBQUUsSUFBSSxDQUNiLE9BQU8sQ0FBRSxJQUFJLG9CQUFvQixDQUFDLGNBQWMsQ0FBQyxDQUNqRCxNQUFNLENBQUUsSUFBSSxDQUNaLFNBQVMsQ0FBRSxJQUFJLEFBQ2pCLENBQUMsQUFFRCwwQkFBWSxDQUFHLGNBQUUsQ0FBQyxBQUNoQixJQUFJLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEFBQ2hCLENBQUMsQUFFRCxnQkFBZ0IsMEJBQVksQ0FBQyxLQUFLLGNBQUMsQ0FBQyxBQUNsQyxPQUFPLENBQUUsSUFBSSx5QkFBeUIsQ0FBQyxFQUFFLENBQUMsQ0FDMUMsUUFBUSxDQUFFLFFBQVEsQ0FDbEIsTUFBTSxDQUFFLElBQUksd0JBQXdCLENBQUMsRUFBRSxDQUFDLEFBQzFDLENBQUMsQUFFRCxTQUFTLDRCQUFDLENBQUMsQUFDVCxNQUFNLENBQUUsSUFBSSxhQUFhLENBQUMsa0JBQWtCLENBQUMsQUFDL0MsQ0FBQyxBQUVELFdBQVcsb0JBQU8sQ0FBQyxBQUNqQixJQUFJLEFBQUMsQ0FBQyxBQUNKLFNBQVMsQ0FBRSxPQUFPLE1BQU0sQ0FBQyxBQUMzQixDQUFDLEFBQ0gsQ0FBQyJ9 */";
		append_dev(document_1.head, style);
	}

	// (787:2) {#if Icon}
	function create_if_block_6(ctx) {
		let switch_instance_anchor;
		let current;
		var switch_value = /*Icon*/ ctx[16];

		function switch_props(ctx) {
			return { $$inline: true };
		}

		if (switch_value) {
			var switch_instance = new switch_value(switch_props(ctx));
		}

		const block = {
			c: function create() {
				if (switch_instance) create_component(switch_instance.$$.fragment);
				switch_instance_anchor = empty();
			},
			m: function mount(target, anchor) {
				if (switch_instance) {
					mount_component(switch_instance, target, anchor);
				}

				insert_dev(target, switch_instance_anchor, anchor);
				current = true;
			},
			p: function update(ctx, dirty) {
				if (switch_value !== (switch_value = /*Icon*/ ctx[16])) {
					if (switch_instance) {
						group_outros();
						const old_component = switch_instance;

						transition_out(old_component.$$.fragment, 1, 0, () => {
							destroy_component(old_component, 1);
						});

						check_outros();
					}

					if (switch_value) {
						switch_instance = new switch_value(switch_props(ctx));
						create_component(switch_instance.$$.fragment);
						transition_in(switch_instance.$$.fragment, 1);
						mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
					} else {
						switch_instance = null;
					}
				}
			},
			i: function intro(local) {
				if (current) return;
				if (switch_instance) transition_in(switch_instance.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				if (switch_instance) transition_out(switch_instance.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(switch_instance_anchor);
				if (switch_instance) destroy_component(switch_instance, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block_6.name,
			type: "if",
			source: "(787:2) {#if Icon}",
			ctx
		});

		return block;
	}

	// (791:2) {#if isMulti && selectedValue && selectedValue.length > 0}
	function create_if_block_5(ctx) {
		let switch_instance_anchor;
		let current;
		var switch_value = /*MultiSelection*/ ctx[7];

		function switch_props(ctx) {
			return {
				props: {
					selectedValue: /*selectedValue*/ ctx[3],
					getSelectionLabel: /*getSelectionLabel*/ ctx[12],
					activeSelectedValue: /*activeSelectedValue*/ ctx[20],
					isDisabled: /*isDisabled*/ ctx[9]
				},
				$$inline: true
			};
		}

		if (switch_value) {
			var switch_instance = new switch_value(switch_props(ctx));
			switch_instance.$on("multiItemClear", /*handleMultiItemClear*/ ctx[24]);
			switch_instance.$on("focus", /*handleFocus*/ ctx[27]);
		}

		const block = {
			c: function create() {
				if (switch_instance) create_component(switch_instance.$$.fragment);
				switch_instance_anchor = empty();
			},
			m: function mount(target, anchor) {
				if (switch_instance) {
					mount_component(switch_instance, target, anchor);
				}

				insert_dev(target, switch_instance_anchor, anchor);
				current = true;
			},
			p: function update(ctx, dirty) {
				const switch_instance_changes = {};
				if (dirty[0] & /*selectedValue*/ 8) switch_instance_changes.selectedValue = /*selectedValue*/ ctx[3];
				if (dirty[0] & /*getSelectionLabel*/ 4096) switch_instance_changes.getSelectionLabel = /*getSelectionLabel*/ ctx[12];
				if (dirty[0] & /*activeSelectedValue*/ 1048576) switch_instance_changes.activeSelectedValue = /*activeSelectedValue*/ ctx[20];
				if (dirty[0] & /*isDisabled*/ 512) switch_instance_changes.isDisabled = /*isDisabled*/ ctx[9];

				if (switch_value !== (switch_value = /*MultiSelection*/ ctx[7])) {
					if (switch_instance) {
						group_outros();
						const old_component = switch_instance;

						transition_out(old_component.$$.fragment, 1, 0, () => {
							destroy_component(old_component, 1);
						});

						check_outros();
					}

					if (switch_value) {
						switch_instance = new switch_value(switch_props(ctx));
						switch_instance.$on("multiItemClear", /*handleMultiItemClear*/ ctx[24]);
						switch_instance.$on("focus", /*handleFocus*/ ctx[27]);
						create_component(switch_instance.$$.fragment);
						transition_in(switch_instance.$$.fragment, 1);
						mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
					} else {
						switch_instance = null;
					}
				} else if (switch_value) {
					switch_instance.$set(switch_instance_changes);
				}
			},
			i: function intro(local) {
				if (current) return;
				if (switch_instance) transition_in(switch_instance.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				if (switch_instance) transition_out(switch_instance.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(switch_instance_anchor);
				if (switch_instance) destroy_component(switch_instance, detaching);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block_5.name,
			type: "if",
			source: "(791:2) {#if isMulti && selectedValue && selectedValue.length > 0}",
			ctx
		});

		return block;
	}

	// (811:2) {:else}
	function create_else_block$1(ctx) {
		let input_1;
		let mounted;
		let dispose;

		let input_1_levels = [
			/*_inputAttributes*/ ctx[21],
			{ placeholder: /*placeholderText*/ ctx[23] },
			{ style: /*inputStyles*/ ctx[14] }
		];

		let input_1_data = {};

		for (let i = 0; i < input_1_levels.length; i += 1) {
			input_1_data = assign(input_1_data, input_1_levels[i]);
		}

		const block = {
			c: function create() {
				input_1 = element("input");
				set_attributes(input_1, input_1_data);
				toggle_class(input_1, "svelte-7bommo", true);
				add_location(input_1, file$6, 811, 4, 19630);
			},
			m: function mount(target, anchor) {
				insert_dev(target, input_1, anchor);
				/*input_1_binding_1*/ ctx[74](input_1);
				set_input_value(input_1, /*filterText*/ ctx[4]);

				if (!mounted) {
					dispose = [
						listen_dev(input_1, "focus", /*handleFocus*/ ctx[27], false, false, false),
						listen_dev(input_1, "input", /*input_1_input_handler_1*/ ctx[75])
					];

					mounted = true;
				}
			},
			p: function update(ctx, dirty) {
				set_attributes(input_1, input_1_data = get_spread_update(input_1_levels, [
					dirty[0] & /*_inputAttributes*/ 2097152 && /*_inputAttributes*/ ctx[21],
					dirty[0] & /*placeholderText*/ 8388608 && { placeholder: /*placeholderText*/ ctx[23] },
					dirty[0] & /*inputStyles*/ 16384 && { style: /*inputStyles*/ ctx[14] }
				]));

				if (dirty[0] & /*filterText*/ 16 && input_1.value !== /*filterText*/ ctx[4]) {
					set_input_value(input_1, /*filterText*/ ctx[4]);
				}

				toggle_class(input_1, "svelte-7bommo", true);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(input_1);
				/*input_1_binding_1*/ ctx[74](null);
				mounted = false;
				run_all(dispose);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_else_block$1.name,
			type: "else",
			source: "(811:2) {:else}",
			ctx
		});

		return block;
	}

	// (802:2) {#if isDisabled}
	function create_if_block_4(ctx) {
		let input_1;
		let mounted;
		let dispose;

		let input_1_levels = [
			/*_inputAttributes*/ ctx[21],
			{ placeholder: /*placeholderText*/ ctx[23] },
			{ style: /*inputStyles*/ ctx[14] },
			{ disabled: true }
		];

		let input_1_data = {};

		for (let i = 0; i < input_1_levels.length; i += 1) {
			input_1_data = assign(input_1_data, input_1_levels[i]);
		}

		const block = {
			c: function create() {
				input_1 = element("input");
				set_attributes(input_1, input_1_data);
				toggle_class(input_1, "svelte-7bommo", true);
				add_location(input_1, file$6, 802, 4, 19418);
			},
			m: function mount(target, anchor) {
				insert_dev(target, input_1, anchor);
				/*input_1_binding*/ ctx[72](input_1);
				set_input_value(input_1, /*filterText*/ ctx[4]);

				if (!mounted) {
					dispose = [
						listen_dev(input_1, "focus", /*handleFocus*/ ctx[27], false, false, false),
						listen_dev(input_1, "input", /*input_1_input_handler*/ ctx[73])
					];

					mounted = true;
				}
			},
			p: function update(ctx, dirty) {
				set_attributes(input_1, input_1_data = get_spread_update(input_1_levels, [
					dirty[0] & /*_inputAttributes*/ 2097152 && /*_inputAttributes*/ ctx[21],
					dirty[0] & /*placeholderText*/ 8388608 && { placeholder: /*placeholderText*/ ctx[23] },
					dirty[0] & /*inputStyles*/ 16384 && { style: /*inputStyles*/ ctx[14] },
					{ disabled: true }
				]));

				if (dirty[0] & /*filterText*/ 16 && input_1.value !== /*filterText*/ ctx[4]) {
					set_input_value(input_1, /*filterText*/ ctx[4]);
				}

				toggle_class(input_1, "svelte-7bommo", true);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(input_1);
				/*input_1_binding*/ ctx[72](null);
				mounted = false;
				run_all(dispose);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block_4.name,
			type: "if",
			source: "(802:2) {#if isDisabled}",
			ctx
		});

		return block;
	}

	// (821:2) {#if !isMulti && showSelectedItem}
	function create_if_block_3$1(ctx) {
		let div;
		let current;
		let mounted;
		let dispose;
		var switch_value = /*Selection*/ ctx[6];

		function switch_props(ctx) {
			return {
				props: {
					item: /*selectedValue*/ ctx[3],
					getSelectionLabel: /*getSelectionLabel*/ ctx[12]
				},
				$$inline: true
			};
		}

		if (switch_value) {
			var switch_instance = new switch_value(switch_props(ctx));
		}

		const block = {
			c: function create() {
				div = element("div");
				if (switch_instance) create_component(switch_instance.$$.fragment);
				attr_dev(div, "class", "selectedItem svelte-7bommo");
				add_location(div, file$6, 821, 4, 19863);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);

				if (switch_instance) {
					mount_component(switch_instance, div, null);
				}

				current = true;

				if (!mounted) {
					dispose = listen_dev(div, "focus", /*handleFocus*/ ctx[27], false, false, false);
					mounted = true;
				}
			},
			p: function update(ctx, dirty) {
				const switch_instance_changes = {};
				if (dirty[0] & /*selectedValue*/ 8) switch_instance_changes.item = /*selectedValue*/ ctx[3];
				if (dirty[0] & /*getSelectionLabel*/ 4096) switch_instance_changes.getSelectionLabel = /*getSelectionLabel*/ ctx[12];

				if (switch_value !== (switch_value = /*Selection*/ ctx[6])) {
					if (switch_instance) {
						group_outros();
						const old_component = switch_instance;

						transition_out(old_component.$$.fragment, 1, 0, () => {
							destroy_component(old_component, 1);
						});

						check_outros();
					}

					if (switch_value) {
						switch_instance = new switch_value(switch_props(ctx));
						create_component(switch_instance.$$.fragment);
						transition_in(switch_instance.$$.fragment, 1);
						mount_component(switch_instance, div, null);
					} else {
						switch_instance = null;
					}
				} else if (switch_value) {
					switch_instance.$set(switch_instance_changes);
				}
			},
			i: function intro(local) {
				if (current) return;
				if (switch_instance) transition_in(switch_instance.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				if (switch_instance) transition_out(switch_instance.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
				if (switch_instance) destroy_component(switch_instance);
				mounted = false;
				dispose();
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block_3$1.name,
			type: "if",
			source: "(821:2) {#if !isMulti && showSelectedItem}",
			ctx
		});

		return block;
	}

	// (830:2) {#if showSelectedItem && isClearable && !isDisabled && !isWaiting}
	function create_if_block_2$1(ctx) {
		let div;
		let svg;
		let path;
		let mounted;
		let dispose;

		const block = {
			c: function create() {
				div = element("div");
				svg = svg_element("svg");
				path = svg_element("path");
				attr_dev(path, "fill", "currentColor");
				attr_dev(path, "d", "M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\n          l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z");
				add_location(path, file$6, 837, 8, 20326);
				attr_dev(svg, "width", "100%");
				attr_dev(svg, "height", "100%");
				attr_dev(svg, "viewBox", "-2 -2 50 50");
				attr_dev(svg, "focusable", "false");
				attr_dev(svg, "role", "presentation");
				attr_dev(svg, "class", "svelte-7bommo");
				add_location(svg, file$6, 831, 6, 20185);
				attr_dev(div, "class", "clearSelect svelte-7bommo");
				add_location(div, file$6, 830, 4, 20115);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				append_dev(div, svg);
				append_dev(svg, path);

				if (!mounted) {
					dispose = listen_dev(div, "click", prevent_default(/*handleClear*/ ctx[19]), false, true, false);
					mounted = true;
				}
			},
			p: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
				mounted = false;
				dispose();
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block_2$1.name,
			type: "if",
			source: "(830:2) {#if showSelectedItem && isClearable && !isDisabled && !isWaiting}",
			ctx
		});

		return block;
	}

	// (846:2) {#if showChevron && !selectedValue || (!isSearchable && !isDisabled && !isWaiting && ((showSelectedItem && !isClearable) || !showSelectedItem))}
	function create_if_block_1$1(ctx) {
		let div;
		let svg;
		let path;

		const block = {
			c: function create() {
				div = element("div");
				svg = svg_element("svg");
				path = svg_element("path");
				attr_dev(path, "d", "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747\n          3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0\n          1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502\n          0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0\n          0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z");
				add_location(path, file$6, 853, 8, 20910);
				attr_dev(svg, "width", "100%");
				attr_dev(svg, "height", "100%");
				attr_dev(svg, "viewBox", "0 0 20 20");
				attr_dev(svg, "focusable", "false");
				attr_dev(svg, "class", "css-19bqh2r svelte-7bommo");
				add_location(svg, file$6, 847, 6, 20771);
				attr_dev(div, "class", "indicator svelte-7bommo");
				add_location(div, file$6, 846, 4, 20741);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				append_dev(div, svg);
				append_dev(svg, path);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block_1$1.name,
			type: "if",
			source: "(846:2) {#if showChevron && !selectedValue || (!isSearchable && !isDisabled && !isWaiting && ((showSelectedItem && !isClearable) || !showSelectedItem))}",
			ctx
		});

		return block;
	}

	// (864:2) {#if isWaiting}
	function create_if_block$2(ctx) {
		let div;
		let svg;
		let circle;

		const block = {
			c: function create() {
				div = element("div");
				svg = svg_element("svg");
				circle = svg_element("circle");
				attr_dev(circle, "class", "spinner_path svelte-7bommo");
				attr_dev(circle, "cx", "50");
				attr_dev(circle, "cy", "50");
				attr_dev(circle, "r", "20");
				attr_dev(circle, "fill", "none");
				attr_dev(circle, "stroke", "currentColor");
				attr_dev(circle, "stroke-width", "5");
				attr_dev(circle, "stroke-miterlimit", "10");
				add_location(circle, file$6, 866, 8, 21391);
				attr_dev(svg, "class", "spinner_icon svelte-7bommo");
				attr_dev(svg, "viewBox", "25 25 50 50");
				add_location(svg, file$6, 865, 6, 21334);
				attr_dev(div, "class", "spinner svelte-7bommo");
				add_location(div, file$6, 864, 4, 21306);
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				append_dev(div, svg);
				append_dev(svg, circle);
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_if_block$2.name,
			type: "if",
			source: "(864:2) {#if isWaiting}",
			ctx
		});

		return block;
	}

	function create_fragment$6(ctx) {
		let div;
		let t0;
		let t1;
		let t2;
		let t3;
		let t4;
		let t5;
		let div_class_value;
		let current;
		let mounted;
		let dispose;
		let if_block0 = /*Icon*/ ctx[16] && create_if_block_6(ctx);
		let if_block1 = /*isMulti*/ ctx[8] && /*selectedValue*/ ctx[3] && /*selectedValue*/ ctx[3].length > 0 && create_if_block_5(ctx);

		function select_block_type(ctx, dirty) {
			if (/*isDisabled*/ ctx[9]) return create_if_block_4;
			return create_else_block$1;
		}

		let current_block_type = select_block_type(ctx, [-1]);
		let if_block2 = current_block_type(ctx);
		let if_block3 = !/*isMulti*/ ctx[8] && /*showSelectedItem*/ ctx[22] && create_if_block_3$1(ctx);
		let if_block4 = /*showSelectedItem*/ ctx[22] && /*isClearable*/ ctx[15] && !/*isDisabled*/ ctx[9] && !/*isWaiting*/ ctx[5] && create_if_block_2$1(ctx);
		let if_block5 = (/*showChevron*/ ctx[17] && !/*selectedValue*/ ctx[3] || !/*isSearchable*/ ctx[13] && !/*isDisabled*/ ctx[9] && !/*isWaiting*/ ctx[5] && (/*showSelectedItem*/ ctx[22] && !/*isClearable*/ ctx[15] || !/*showSelectedItem*/ ctx[22])) && create_if_block_1$1(ctx);
		let if_block6 = /*isWaiting*/ ctx[5] && create_if_block$2(ctx);

		const block = {
			c: function create() {
				div = element("div");
				if (if_block0) if_block0.c();
				t0 = space();
				if (if_block1) if_block1.c();
				t1 = space();
				if_block2.c();
				t2 = space();
				if (if_block3) if_block3.c();
				t3 = space();
				if (if_block4) if_block4.c();
				t4 = space();
				if (if_block5) if_block5.c();
				t5 = space();
				if (if_block6) if_block6.c();
				attr_dev(div, "class", div_class_value = "selectContainer " + /*containerClasses*/ ctx[18] + " svelte-7bommo");
				attr_dev(div, "style", /*containerStyles*/ ctx[11]);
				toggle_class(div, "hasError", /*hasError*/ ctx[10]);
				toggle_class(div, "multiSelect", /*isMulti*/ ctx[8]);
				toggle_class(div, "disabled", /*isDisabled*/ ctx[9]);
				toggle_class(div, "focused", /*isFocused*/ ctx[2]);
				add_location(div, file$6, 776, 0, 18810);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				if (if_block0) if_block0.m(div, null);
				append_dev(div, t0);
				if (if_block1) if_block1.m(div, null);
				append_dev(div, t1);
				if_block2.m(div, null);
				append_dev(div, t2);
				if (if_block3) if_block3.m(div, null);
				append_dev(div, t3);
				if (if_block4) if_block4.m(div, null);
				append_dev(div, t4);
				if (if_block5) if_block5.m(div, null);
				append_dev(div, t5);
				if (if_block6) if_block6.m(div, null);
				/*div_binding*/ ctx[76](div);
				current = true;

				if (!mounted) {
					dispose = [
						listen_dev(window, "click", /*handleWindowClick*/ ctx[28], false, false, false),
						listen_dev(window, "keydown", /*handleKeyDown*/ ctx[26], false, false, false),
						listen_dev(window, "resize", /*getPosition*/ ctx[25], false, false, false),
						listen_dev(div, "click", /*handleClick*/ ctx[29], false, false, false)
					];

					mounted = true;
				}
			},
			p: function update(ctx, dirty) {
				if (/*Icon*/ ctx[16]) {
					if (if_block0) {
						if_block0.p(ctx, dirty);

						if (dirty[0] & /*Icon*/ 65536) {
							transition_in(if_block0, 1);
						}
					} else {
						if_block0 = create_if_block_6(ctx);
						if_block0.c();
						transition_in(if_block0, 1);
						if_block0.m(div, t0);
					}
				} else if (if_block0) {
					group_outros();

					transition_out(if_block0, 1, 1, () => {
						if_block0 = null;
					});

					check_outros();
				}

				if (/*isMulti*/ ctx[8] && /*selectedValue*/ ctx[3] && /*selectedValue*/ ctx[3].length > 0) {
					if (if_block1) {
						if_block1.p(ctx, dirty);

						if (dirty[0] & /*isMulti, selectedValue*/ 264) {
							transition_in(if_block1, 1);
						}
					} else {
						if_block1 = create_if_block_5(ctx);
						if_block1.c();
						transition_in(if_block1, 1);
						if_block1.m(div, t1);
					}
				} else if (if_block1) {
					group_outros();

					transition_out(if_block1, 1, 1, () => {
						if_block1 = null;
					});

					check_outros();
				}

				if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block2) {
					if_block2.p(ctx, dirty);
				} else {
					if_block2.d(1);
					if_block2 = current_block_type(ctx);

					if (if_block2) {
						if_block2.c();
						if_block2.m(div, t2);
					}
				}

				if (!/*isMulti*/ ctx[8] && /*showSelectedItem*/ ctx[22]) {
					if (if_block3) {
						if_block3.p(ctx, dirty);

						if (dirty[0] & /*isMulti, showSelectedItem*/ 4194560) {
							transition_in(if_block3, 1);
						}
					} else {
						if_block3 = create_if_block_3$1(ctx);
						if_block3.c();
						transition_in(if_block3, 1);
						if_block3.m(div, t3);
					}
				} else if (if_block3) {
					group_outros();

					transition_out(if_block3, 1, 1, () => {
						if_block3 = null;
					});

					check_outros();
				}

				if (/*showSelectedItem*/ ctx[22] && /*isClearable*/ ctx[15] && !/*isDisabled*/ ctx[9] && !/*isWaiting*/ ctx[5]) {
					if (if_block4) {
						if_block4.p(ctx, dirty);
					} else {
						if_block4 = create_if_block_2$1(ctx);
						if_block4.c();
						if_block4.m(div, t4);
					}
				} else if (if_block4) {
					if_block4.d(1);
					if_block4 = null;
				}

				if (/*showChevron*/ ctx[17] && !/*selectedValue*/ ctx[3] || !/*isSearchable*/ ctx[13] && !/*isDisabled*/ ctx[9] && !/*isWaiting*/ ctx[5] && (/*showSelectedItem*/ ctx[22] && !/*isClearable*/ ctx[15] || !/*showSelectedItem*/ ctx[22])) {
					if (if_block5) ; else {
						if_block5 = create_if_block_1$1(ctx);
						if_block5.c();
						if_block5.m(div, t5);
					}
				} else if (if_block5) {
					if_block5.d(1);
					if_block5 = null;
				}

				if (/*isWaiting*/ ctx[5]) {
					if (if_block6) ; else {
						if_block6 = create_if_block$2(ctx);
						if_block6.c();
						if_block6.m(div, null);
					}
				} else if (if_block6) {
					if_block6.d(1);
					if_block6 = null;
				}

				if (!current || dirty[0] & /*containerClasses*/ 262144 && div_class_value !== (div_class_value = "selectContainer " + /*containerClasses*/ ctx[18] + " svelte-7bommo")) {
					attr_dev(div, "class", div_class_value);
				}

				if (!current || dirty[0] & /*containerStyles*/ 2048) {
					attr_dev(div, "style", /*containerStyles*/ ctx[11]);
				}

				if (dirty[0] & /*containerClasses, hasError*/ 263168) {
					toggle_class(div, "hasError", /*hasError*/ ctx[10]);
				}

				if (dirty[0] & /*containerClasses, isMulti*/ 262400) {
					toggle_class(div, "multiSelect", /*isMulti*/ ctx[8]);
				}

				if (dirty[0] & /*containerClasses, isDisabled*/ 262656) {
					toggle_class(div, "disabled", /*isDisabled*/ ctx[9]);
				}

				if (dirty[0] & /*containerClasses, isFocused*/ 262148) {
					toggle_class(div, "focused", /*isFocused*/ ctx[2]);
				}
			},
			i: function intro(local) {
				if (current) return;
				transition_in(if_block0);
				transition_in(if_block1);
				transition_in(if_block3);
				current = true;
			},
			o: function outro(local) {
				transition_out(if_block0);
				transition_out(if_block1);
				transition_out(if_block3);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
				if (if_block0) if_block0.d();
				if (if_block1) if_block1.d();
				if_block2.d();
				if (if_block3) if_block3.d();
				if (if_block4) if_block4.d();
				if (if_block5) if_block5.d();
				if (if_block6) if_block6.d();
				/*div_binding*/ ctx[76](null);
				mounted = false;
				run_all(dispose);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$6.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$6($$self, $$props, $$invalidate) {
		const dispatch = createEventDispatcher();
		let { container = undefined } = $$props;
		let { input = undefined } = $$props;
		let { Item: Item$$1 = Item } = $$props;
		let { Selection: Selection$$1 = Selection } = $$props;
		let { MultiSelection: MultiSelection$$1 = MultiSelection } = $$props;
		let { isMulti = false } = $$props;
		let { isDisabled = false } = $$props;
		let { isCreatable = false } = $$props;
		let { isFocused = false } = $$props;
		let { selectedValue = undefined } = $$props;
		let { filterText = "" } = $$props;
		let { placeholder = "Select..." } = $$props;
		let { items = [] } = $$props;
		let { itemFilter = (label, filterText, option) => label.toLowerCase().includes(filterText.toLowerCase()) } = $$props;
		let { groupBy = undefined } = $$props;
		let { groupFilter = groups => groups } = $$props;
		let { isGroupHeaderSelectable = false } = $$props;

		let { getGroupHeaderLabel = option => {
			return option.label;
		} } = $$props;

		let { getOptionLabel = (option, filterText) => {
			return option.isCreator
			? `Create \"${filterText}\"`
			: option.label;
		} } = $$props;

		let { optionIdentifier = "value" } = $$props;
		let { loadOptions = undefined } = $$props;
		let { hasError = false } = $$props;
		let { containerStyles = "" } = $$props;

		let { getSelectionLabel = option => {
			if (option) return option.label;
		} } = $$props;

		let { createGroupHeaderItem = groupValue => {
			return { value: groupValue, label: groupValue };
		} } = $$props;

		let { createItem = filterText => {
			return { value: filterText, label: filterText };
		} } = $$props;

		let { isSearchable = true } = $$props;
		let { inputStyles = "" } = $$props;
		let { isClearable = true } = $$props;
		let { isWaiting = false } = $$props;
		let { listPlacement = "auto" } = $$props;
		let { listOpen = false } = $$props;
		let { list = undefined } = $$props;
		let { isVirtualList = false } = $$props;
		let { loadOptionsInterval = 300 } = $$props;
		let { noOptionsMessage = "No options" } = $$props;
		let { hideEmptyState = false } = $$props;
		let { filteredItems = [] } = $$props;
		let { inputAttributes = {} } = $$props;
		let { listAutoWidth = true } = $$props;
		let { itemHeight = 40 } = $$props;
		let { Icon = undefined } = $$props;
		let { showChevron = false } = $$props;
		let { containerClasses = "" } = $$props;
		let target;
		let activeSelectedValue;
		let _items = [];
		let originalItemsClone;
		let prev_selectedValue;
		let prev_listOpen;
		let prev_filterText;
		let prev_isFocused;
		let prev_filteredItems;

		async function resetFilter() {
			await tick();
			$$invalidate(4, filterText = "");
		}

		let getItemsHasInvoked = false;

		const getItems = debounce(
			async () => {
				getItemsHasInvoked = true;
				$$invalidate(5, isWaiting = true);
				$$invalidate(30, items = await loadOptions(filterText));
				$$invalidate(5, isWaiting = false);
				$$invalidate(2, isFocused = true);
				$$invalidate(31, listOpen = true);
			},
			loadOptionsInterval
		);

		let _inputAttributes = {};

		beforeUpdate(() => {
			if (isMulti && selectedValue && selectedValue.length > 1) {
				checkSelectedValueForDuplicates();
			}

			if (!isMulti && selectedValue && prev_selectedValue !== selectedValue) {
				if (!prev_selectedValue || JSON.stringify(selectedValue[optionIdentifier]) !== JSON.stringify(prev_selectedValue[optionIdentifier])) {
					dispatch("select", selectedValue);
				}
			}

			if (isMulti && JSON.stringify(selectedValue) !== JSON.stringify(prev_selectedValue)) {
				if (checkSelectedValueForDuplicates()) {
					dispatch("select", selectedValue);
				}
			}

			if (container && listOpen !== prev_listOpen) {
				if (listOpen) {
					loadList();
				} else {
					removeList();
				}
			}

			if (filterText !== prev_filterText) {
				if (filterText.length > 0) {
					$$invalidate(2, isFocused = true);
					$$invalidate(31, listOpen = true);

					if (loadOptions) {
						getItems();
					} else {
						loadList();
						$$invalidate(31, listOpen = true);

						if (isMulti) {
							$$invalidate(20, activeSelectedValue = undefined);
						}
					}
				} else {
					setList([]);
				}

				if (list) {
					list.$set({ filterText });
				}
			}

			if (isFocused !== prev_isFocused) {
				if (isFocused || listOpen) {
					handleFocus();
				} else {
					resetFilter();
					if (input) input.blur();
				}
			}

			if (prev_filteredItems !== filteredItems) {
				let _filteredItems = [...filteredItems];

				if (isCreatable && filterText) {
					const itemToCreate = createItem(filterText);
					itemToCreate.isCreator = true;

					const existingItemWithFilterValue = _filteredItems.find(item => {
						return item[optionIdentifier] === itemToCreate[optionIdentifier];
					});

					let existingSelectionWithFilterValue;

					if (selectedValue) {
						if (isMulti) {
							existingSelectionWithFilterValue = selectedValue.find(selection => {
								return selection[optionIdentifier] === itemToCreate[optionIdentifier];
							});
						} else if (selectedValue[optionIdentifier] === itemToCreate[optionIdentifier]) {
							existingSelectionWithFilterValue = selectedValue;
						}
					}

					if (!existingItemWithFilterValue && !existingSelectionWithFilterValue) {
						_filteredItems = [..._filteredItems, itemToCreate];
					}
				}

				setList(_filteredItems);
			}

			prev_selectedValue = selectedValue;
			prev_listOpen = listOpen;
			prev_filterText = filterText;
			prev_isFocused = isFocused;
			prev_filteredItems = filteredItems;
		});

		function checkSelectedValueForDuplicates() {
			let noDuplicates = true;

			if (selectedValue) {
				const ids = [];
				const uniqueValues = [];

				selectedValue.forEach(val => {
					if (!ids.includes(val[optionIdentifier])) {
						ids.push(val[optionIdentifier]);
						uniqueValues.push(val);
					} else {
						noDuplicates = false;
					}
				});

				$$invalidate(3, selectedValue = uniqueValues);
			}

			return noDuplicates;
		}

		async function setList(items) {
			await tick();
			if (list) return list.$set({ items });
			if (loadOptions && getItemsHasInvoked && items.length > 0) loadList();
		}

		function handleMultiItemClear(event) {
			const { detail } = event;
			const itemToRemove = selectedValue[detail ? detail.i : selectedValue.length - 1];

			if (selectedValue.length === 1) {
				$$invalidate(3, selectedValue = undefined);
			} else {
				$$invalidate(3, selectedValue = selectedValue.filter(item => {
					return item !== itemToRemove;
				}));
			}

			dispatch("clear", itemToRemove);
			getPosition();
		}

		async function getPosition() {
			await tick();
			if (!target || !container) return;
			const { top, height, width } = container.getBoundingClientRect();
			target.style["min-width"] = `${width}px`;
			target.style.width = `${listAutoWidth ? "auto" : "100%"}`;
			target.style.left = "0";

			if (listPlacement === "top") {
				target.style.bottom = `${height + 5}px`;
			} else {
				target.style.top = `${height + 5}px`;
			}

			target = target;

			if (listPlacement === "auto" && isOutOfViewport(target).bottom) {
				target.style.top = ``;
				target.style.bottom = `${height + 5}px`;
			}

			target.style.visibility = "";
		}

		function handleKeyDown(e) {
			if (!isFocused) return;

			switch (e.key) {
				case "ArrowDown":
					e.preventDefault();
					$$invalidate(31, listOpen = true);
					$$invalidate(20, activeSelectedValue = undefined);
					break;
				case "ArrowUp":
					e.preventDefault();
					$$invalidate(31, listOpen = true);
					$$invalidate(20, activeSelectedValue = undefined);
					break;
				case "Tab":
					if (!listOpen) $$invalidate(2, isFocused = false);
					break;
				case "Backspace":
					if (!isMulti || filterText.length > 0) return;
					if (isMulti && selectedValue && selectedValue.length > 0) {
						handleMultiItemClear(activeSelectedValue !== undefined
						? activeSelectedValue
						: selectedValue.length - 1);

						if (activeSelectedValue === 0 || activeSelectedValue === undefined) break;

						$$invalidate(20, activeSelectedValue = selectedValue.length > activeSelectedValue
						? activeSelectedValue - 1
						: undefined);
					}
					break;
				case "ArrowLeft":
					if (list) list.$set({ hoverItemIndex: -1 });
					if (!isMulti || filterText.length > 0) return;
					if (activeSelectedValue === undefined) {
						$$invalidate(20, activeSelectedValue = selectedValue.length - 1);
					} else if (selectedValue.length > activeSelectedValue && activeSelectedValue !== 0) {
						$$invalidate(20, activeSelectedValue -= 1);
					}
					break;
				case "ArrowRight":
					if (list) list.$set({ hoverItemIndex: -1 });
					if (!isMulti || filterText.length > 0 || activeSelectedValue === undefined) return;
					if (activeSelectedValue === selectedValue.length - 1) {
						$$invalidate(20, activeSelectedValue = undefined);
					} else if (activeSelectedValue < selectedValue.length - 1) {
						$$invalidate(20, activeSelectedValue += 1);
					}
					break;
			}
		}

		function handleFocus() {
			$$invalidate(2, isFocused = true);
			if (input) input.focus();
		}

		function removeList() {
			resetFilter();
			$$invalidate(20, activeSelectedValue = undefined);
			if (!list) return;
			list.$destroy();
			$$invalidate(32, list = undefined);
			if (!target) return;
			if (target.parentNode) target.parentNode.removeChild(target);
			target = undefined;
			$$invalidate(32, list);
			target = target;
		}

		function handleWindowClick(event) {
			if (!container) return;

			const eventTarget = event.path && event.path.length > 0
			? event.path[0]
			: event.target;

			if (container.contains(eventTarget)) return;
			$$invalidate(2, isFocused = false);
			$$invalidate(31, listOpen = false);
			$$invalidate(20, activeSelectedValue = undefined);
			if (input) input.blur();
		}

		function handleClick() {
			if (isDisabled) return;
			$$invalidate(2, isFocused = true);
			$$invalidate(31, listOpen = !listOpen);
		}

		function handleClear() {
			$$invalidate(3, selectedValue = undefined);
			$$invalidate(31, listOpen = false);
			dispatch("clear", selectedValue);
			handleFocus();
		}

		async function loadList() {
			await tick();
			if (target && list) return;

			const data = {
				Item: Item$$1,
				filterText,
				optionIdentifier,
				noOptionsMessage,
				hideEmptyState,
				isVirtualList,
				selectedValue,
				isMulti,
				getGroupHeaderLabel,
				items: filteredItems,
				itemHeight
			};

			if (getOptionLabel) {
				data.getOptionLabel = getOptionLabel;
			}

			target = document.createElement("div");

			Object.assign(target.style, {
				position: "absolute",
				"z-index": 2,
				visibility: "hidden"
			});

			$$invalidate(32, list);
			target = target;
			if (container) container.appendChild(target);
			$$invalidate(32, list = new List({ target, props: data }));

			list.$on("itemSelected", event => {
				const { detail } = event;

				if (detail) {
					const item = Object.assign({}, detail);

					if (!item.isGroupHeader || item.isSelectable) {
						if (isMulti) {
							$$invalidate(3, selectedValue = selectedValue ? selectedValue.concat([item]) : [item]);
						} else {
							$$invalidate(3, selectedValue = item);
						}

						resetFilter();
						($$invalidate(3, selectedValue), $$invalidate(43, optionIdentifier));

						setTimeout(() => {
							$$invalidate(31, listOpen = false);
							$$invalidate(20, activeSelectedValue = undefined);
						});
					}
				}
			});

			list.$on("itemCreated", event => {
				const { detail } = event;

				if (isMulti) {
					$$invalidate(3, selectedValue = selectedValue || []);
					$$invalidate(3, selectedValue = [...selectedValue, createItem(detail)]);
				} else {
					$$invalidate(3, selectedValue = createItem(detail));
				}

				$$invalidate(4, filterText = "");
				$$invalidate(31, listOpen = false);
				$$invalidate(20, activeSelectedValue = undefined);
				resetFilter();
			});

			list.$on("closeList", () => {
				$$invalidate(31, listOpen = false);
			});

			($$invalidate(32, list), target = target);
			getPosition();
		}

		onMount(() => {
			if (isFocused) input.focus();
			if (listOpen) loadList();

			if (items && items.length > 0) {
				$$invalidate(56, originalItemsClone = JSON.stringify(items));
			}

			if (selectedValue) {
				if (isMulti) {
					$$invalidate(3, selectedValue = selectedValue.map(item => {
						if (typeof item === "string") {
							return { value: item, label: item };
						} else {
							return item;
						}
					}));
				}
			}
		});

		onDestroy(() => {
			removeList();
		});

		const writable_props = [
			"container",
			"input",
			"Item",
			"Selection",
			"MultiSelection",
			"isMulti",
			"isDisabled",
			"isCreatable",
			"isFocused",
			"selectedValue",
			"filterText",
			"placeholder",
			"items",
			"itemFilter",
			"groupBy",
			"groupFilter",
			"isGroupHeaderSelectable",
			"getGroupHeaderLabel",
			"getOptionLabel",
			"optionIdentifier",
			"loadOptions",
			"hasError",
			"containerStyles",
			"getSelectionLabel",
			"createGroupHeaderItem",
			"createItem",
			"isSearchable",
			"inputStyles",
			"isClearable",
			"isWaiting",
			"listPlacement",
			"listOpen",
			"list",
			"isVirtualList",
			"loadOptionsInterval",
			"noOptionsMessage",
			"hideEmptyState",
			"filteredItems",
			"inputAttributes",
			"listAutoWidth",
			"itemHeight",
			"Icon",
			"showChevron",
			"containerClasses"
		];

		Object_1.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Select> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("Select", $$slots, []);

		function input_1_binding($$value) {
			binding_callbacks[$$value ? "unshift" : "push"](() => {
				$$invalidate(1, input = $$value);
			});
		}

		function input_1_input_handler() {
			filterText = this.value;
			$$invalidate(4, filterText);
		}

		function input_1_binding_1($$value) {
			binding_callbacks[$$value ? "unshift" : "push"](() => {
				$$invalidate(1, input = $$value);
			});
		}

		function input_1_input_handler_1() {
			filterText = this.value;
			$$invalidate(4, filterText);
		}

		function div_binding($$value) {
			binding_callbacks[$$value ? "unshift" : "push"](() => {
				$$invalidate(0, container = $$value);
			});
		}

		$$self.$set = $$props => {
			if ("container" in $$props) $$invalidate(0, container = $$props.container);
			if ("input" in $$props) $$invalidate(1, input = $$props.input);
			if ("Item" in $$props) $$invalidate(34, Item$$1 = $$props.Item);
			if ("Selection" in $$props) $$invalidate(6, Selection$$1 = $$props.Selection);
			if ("MultiSelection" in $$props) $$invalidate(7, MultiSelection$$1 = $$props.MultiSelection);
			if ("isMulti" in $$props) $$invalidate(8, isMulti = $$props.isMulti);
			if ("isDisabled" in $$props) $$invalidate(9, isDisabled = $$props.isDisabled);
			if ("isCreatable" in $$props) $$invalidate(35, isCreatable = $$props.isCreatable);
			if ("isFocused" in $$props) $$invalidate(2, isFocused = $$props.isFocused);
			if ("selectedValue" in $$props) $$invalidate(3, selectedValue = $$props.selectedValue);
			if ("filterText" in $$props) $$invalidate(4, filterText = $$props.filterText);
			if ("placeholder" in $$props) $$invalidate(36, placeholder = $$props.placeholder);
			if ("items" in $$props) $$invalidate(30, items = $$props.items);
			if ("itemFilter" in $$props) $$invalidate(37, itemFilter = $$props.itemFilter);
			if ("groupBy" in $$props) $$invalidate(38, groupBy = $$props.groupBy);
			if ("groupFilter" in $$props) $$invalidate(39, groupFilter = $$props.groupFilter);
			if ("isGroupHeaderSelectable" in $$props) $$invalidate(40, isGroupHeaderSelectable = $$props.isGroupHeaderSelectable);
			if ("getGroupHeaderLabel" in $$props) $$invalidate(41, getGroupHeaderLabel = $$props.getGroupHeaderLabel);
			if ("getOptionLabel" in $$props) $$invalidate(42, getOptionLabel = $$props.getOptionLabel);
			if ("optionIdentifier" in $$props) $$invalidate(43, optionIdentifier = $$props.optionIdentifier);
			if ("loadOptions" in $$props) $$invalidate(44, loadOptions = $$props.loadOptions);
			if ("hasError" in $$props) $$invalidate(10, hasError = $$props.hasError);
			if ("containerStyles" in $$props) $$invalidate(11, containerStyles = $$props.containerStyles);
			if ("getSelectionLabel" in $$props) $$invalidate(12, getSelectionLabel = $$props.getSelectionLabel);
			if ("createGroupHeaderItem" in $$props) $$invalidate(45, createGroupHeaderItem = $$props.createGroupHeaderItem);
			if ("createItem" in $$props) $$invalidate(46, createItem = $$props.createItem);
			if ("isSearchable" in $$props) $$invalidate(13, isSearchable = $$props.isSearchable);
			if ("inputStyles" in $$props) $$invalidate(14, inputStyles = $$props.inputStyles);
			if ("isClearable" in $$props) $$invalidate(15, isClearable = $$props.isClearable);
			if ("isWaiting" in $$props) $$invalidate(5, isWaiting = $$props.isWaiting);
			if ("listPlacement" in $$props) $$invalidate(47, listPlacement = $$props.listPlacement);
			if ("listOpen" in $$props) $$invalidate(31, listOpen = $$props.listOpen);
			if ("list" in $$props) $$invalidate(32, list = $$props.list);
			if ("isVirtualList" in $$props) $$invalidate(48, isVirtualList = $$props.isVirtualList);
			if ("loadOptionsInterval" in $$props) $$invalidate(49, loadOptionsInterval = $$props.loadOptionsInterval);
			if ("noOptionsMessage" in $$props) $$invalidate(50, noOptionsMessage = $$props.noOptionsMessage);
			if ("hideEmptyState" in $$props) $$invalidate(51, hideEmptyState = $$props.hideEmptyState);
			if ("filteredItems" in $$props) $$invalidate(33, filteredItems = $$props.filteredItems);
			if ("inputAttributes" in $$props) $$invalidate(52, inputAttributes = $$props.inputAttributes);
			if ("listAutoWidth" in $$props) $$invalidate(53, listAutoWidth = $$props.listAutoWidth);
			if ("itemHeight" in $$props) $$invalidate(54, itemHeight = $$props.itemHeight);
			if ("Icon" in $$props) $$invalidate(16, Icon = $$props.Icon);
			if ("showChevron" in $$props) $$invalidate(17, showChevron = $$props.showChevron);
			if ("containerClasses" in $$props) $$invalidate(18, containerClasses = $$props.containerClasses);
		};

		$$self.$capture_state = () => ({
			beforeUpdate,
			createEventDispatcher,
			onDestroy,
			onMount,
			tick,
			List,
			ItemComponent: Item,
			SelectionComponent: Selection,
			MultiSelectionComponent: MultiSelection,
			isOutOfViewport,
			debounce,
			dispatch,
			container,
			input,
			Item: Item$$1,
			Selection: Selection$$1,
			MultiSelection: MultiSelection$$1,
			isMulti,
			isDisabled,
			isCreatable,
			isFocused,
			selectedValue,
			filterText,
			placeholder,
			items,
			itemFilter,
			groupBy,
			groupFilter,
			isGroupHeaderSelectable,
			getGroupHeaderLabel,
			getOptionLabel,
			optionIdentifier,
			loadOptions,
			hasError,
			containerStyles,
			getSelectionLabel,
			createGroupHeaderItem,
			createItem,
			isSearchable,
			inputStyles,
			isClearable,
			isWaiting,
			listPlacement,
			listOpen,
			list,
			isVirtualList,
			loadOptionsInterval,
			noOptionsMessage,
			hideEmptyState,
			filteredItems,
			inputAttributes,
			listAutoWidth,
			itemHeight,
			Icon,
			showChevron,
			containerClasses,
			target,
			activeSelectedValue,
			_items,
			originalItemsClone,
			prev_selectedValue,
			prev_listOpen,
			prev_filterText,
			prev_isFocused,
			prev_filteredItems,
			resetFilter,
			getItemsHasInvoked,
			getItems,
			_inputAttributes,
			checkSelectedValueForDuplicates,
			setList,
			handleMultiItemClear,
			getPosition,
			handleKeyDown,
			handleFocus,
			removeList,
			handleWindowClick,
			handleClick,
			handleClear,
			loadList,
			disabled,
			showSelectedItem,
			placeholderText
		});

		$$self.$inject_state = $$props => {
			if ("container" in $$props) $$invalidate(0, container = $$props.container);
			if ("input" in $$props) $$invalidate(1, input = $$props.input);
			if ("Item" in $$props) $$invalidate(34, Item$$1 = $$props.Item);
			if ("Selection" in $$props) $$invalidate(6, Selection$$1 = $$props.Selection);
			if ("MultiSelection" in $$props) $$invalidate(7, MultiSelection$$1 = $$props.MultiSelection);
			if ("isMulti" in $$props) $$invalidate(8, isMulti = $$props.isMulti);
			if ("isDisabled" in $$props) $$invalidate(9, isDisabled = $$props.isDisabled);
			if ("isCreatable" in $$props) $$invalidate(35, isCreatable = $$props.isCreatable);
			if ("isFocused" in $$props) $$invalidate(2, isFocused = $$props.isFocused);
			if ("selectedValue" in $$props) $$invalidate(3, selectedValue = $$props.selectedValue);
			if ("filterText" in $$props) $$invalidate(4, filterText = $$props.filterText);
			if ("placeholder" in $$props) $$invalidate(36, placeholder = $$props.placeholder);
			if ("items" in $$props) $$invalidate(30, items = $$props.items);
			if ("itemFilter" in $$props) $$invalidate(37, itemFilter = $$props.itemFilter);
			if ("groupBy" in $$props) $$invalidate(38, groupBy = $$props.groupBy);
			if ("groupFilter" in $$props) $$invalidate(39, groupFilter = $$props.groupFilter);
			if ("isGroupHeaderSelectable" in $$props) $$invalidate(40, isGroupHeaderSelectable = $$props.isGroupHeaderSelectable);
			if ("getGroupHeaderLabel" in $$props) $$invalidate(41, getGroupHeaderLabel = $$props.getGroupHeaderLabel);
			if ("getOptionLabel" in $$props) $$invalidate(42, getOptionLabel = $$props.getOptionLabel);
			if ("optionIdentifier" in $$props) $$invalidate(43, optionIdentifier = $$props.optionIdentifier);
			if ("loadOptions" in $$props) $$invalidate(44, loadOptions = $$props.loadOptions);
			if ("hasError" in $$props) $$invalidate(10, hasError = $$props.hasError);
			if ("containerStyles" in $$props) $$invalidate(11, containerStyles = $$props.containerStyles);
			if ("getSelectionLabel" in $$props) $$invalidate(12, getSelectionLabel = $$props.getSelectionLabel);
			if ("createGroupHeaderItem" in $$props) $$invalidate(45, createGroupHeaderItem = $$props.createGroupHeaderItem);
			if ("createItem" in $$props) $$invalidate(46, createItem = $$props.createItem);
			if ("isSearchable" in $$props) $$invalidate(13, isSearchable = $$props.isSearchable);
			if ("inputStyles" in $$props) $$invalidate(14, inputStyles = $$props.inputStyles);
			if ("isClearable" in $$props) $$invalidate(15, isClearable = $$props.isClearable);
			if ("isWaiting" in $$props) $$invalidate(5, isWaiting = $$props.isWaiting);
			if ("listPlacement" in $$props) $$invalidate(47, listPlacement = $$props.listPlacement);
			if ("listOpen" in $$props) $$invalidate(31, listOpen = $$props.listOpen);
			if ("list" in $$props) $$invalidate(32, list = $$props.list);
			if ("isVirtualList" in $$props) $$invalidate(48, isVirtualList = $$props.isVirtualList);
			if ("loadOptionsInterval" in $$props) $$invalidate(49, loadOptionsInterval = $$props.loadOptionsInterval);
			if ("noOptionsMessage" in $$props) $$invalidate(50, noOptionsMessage = $$props.noOptionsMessage);
			if ("hideEmptyState" in $$props) $$invalidate(51, hideEmptyState = $$props.hideEmptyState);
			if ("filteredItems" in $$props) $$invalidate(33, filteredItems = $$props.filteredItems);
			if ("inputAttributes" in $$props) $$invalidate(52, inputAttributes = $$props.inputAttributes);
			if ("listAutoWidth" in $$props) $$invalidate(53, listAutoWidth = $$props.listAutoWidth);
			if ("itemHeight" in $$props) $$invalidate(54, itemHeight = $$props.itemHeight);
			if ("Icon" in $$props) $$invalidate(16, Icon = $$props.Icon);
			if ("showChevron" in $$props) $$invalidate(17, showChevron = $$props.showChevron);
			if ("containerClasses" in $$props) $$invalidate(18, containerClasses = $$props.containerClasses);
			if ("target" in $$props) target = $$props.target;
			if ("activeSelectedValue" in $$props) $$invalidate(20, activeSelectedValue = $$props.activeSelectedValue);
			if ("_items" in $$props) $$invalidate(65, _items = $$props._items);
			if ("originalItemsClone" in $$props) $$invalidate(56, originalItemsClone = $$props.originalItemsClone);
			if ("prev_selectedValue" in $$props) prev_selectedValue = $$props.prev_selectedValue;
			if ("prev_listOpen" in $$props) prev_listOpen = $$props.prev_listOpen;
			if ("prev_filterText" in $$props) prev_filterText = $$props.prev_filterText;
			if ("prev_isFocused" in $$props) prev_isFocused = $$props.prev_isFocused;
			if ("prev_filteredItems" in $$props) prev_filteredItems = $$props.prev_filteredItems;
			if ("getItemsHasInvoked" in $$props) getItemsHasInvoked = $$props.getItemsHasInvoked;
			if ("_inputAttributes" in $$props) $$invalidate(21, _inputAttributes = $$props._inputAttributes);
			if ("disabled" in $$props) disabled = $$props.disabled;
			if ("showSelectedItem" in $$props) $$invalidate(22, showSelectedItem = $$props.showSelectedItem);
			if ("placeholderText" in $$props) $$invalidate(23, placeholderText = $$props.placeholderText);
		};

		let disabled;
		let showSelectedItem;
		let placeholderText;

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		$$self.$$.update = () => {
			if ($$self.$$.dirty[0] & /*isDisabled*/ 512) {
				$: disabled = isDisabled;
			}

			if ($$self.$$.dirty[0] & /*selectedValue*/ 8 | $$self.$$.dirty[1] & /*optionIdentifier*/ 4096) {
				$: {
					if (typeof selectedValue === "string") {
						$$invalidate(3, selectedValue = {
							[optionIdentifier]: selectedValue,
							label: selectedValue
						});
					}
				}
			}

			if ($$self.$$.dirty[0] & /*selectedValue, filterText*/ 24) {
				$: $$invalidate(22, showSelectedItem = selectedValue && filterText.length === 0);
			}

			if ($$self.$$.dirty[0] & /*selectedValue*/ 8 | $$self.$$.dirty[1] & /*placeholder*/ 32) {
				$: $$invalidate(23, placeholderText = selectedValue ? "" : placeholder);
			}

			if ($$self.$$.dirty[0] & /*isSearchable*/ 8192 | $$self.$$.dirty[1] & /*inputAttributes*/ 2097152) {
				$: {
					$$invalidate(21, _inputAttributes = Object.assign(inputAttributes, {
						autocomplete: "off",
						autocorrect: "off",
						spellcheck: false
					}));

					if (!isSearchable) {
						$$invalidate(21, _inputAttributes.readonly = true, _inputAttributes);
					}
				}
			}

			if ($$self.$$.dirty[0] & /*items, filterText, isMulti, selectedValue*/ 1073742104 | $$self.$$.dirty[1] & /*loadOptions, originalItemsClone, optionIdentifier, itemFilter, getOptionLabel, groupBy, createGroupHeaderItem, isGroupHeaderSelectable, groupFilter*/ 33586112) {
				$: {
					let _filteredItems;
					let _items = items;

					if (items && items.length > 0 && typeof items[0] !== "object") {
						_items = items.map((item, index) => {
							return { index, value: item, label: item };
						});
					}

					if (loadOptions && filterText.length === 0 && originalItemsClone) {
						_filteredItems = JSON.parse(originalItemsClone);
						_items = JSON.parse(originalItemsClone);
					} else {
						_filteredItems = loadOptions
						? filterText.length === 0 ? [] : _items
						: _items.filter(item => {
								let keepItem = true;

								if (isMulti && selectedValue) {
									keepItem = !selectedValue.find(value => {
										return value[optionIdentifier] === item[optionIdentifier];
									});
								}

								if (!keepItem) return false;
								if (filterText.length < 1) return true;
								return itemFilter(getOptionLabel(item, filterText), filterText, item);
							});
					}

					if (groupBy) {
						const groupValues = [];
						const groups = {};

						_filteredItems.forEach(item => {
							const groupValue = groupBy(item);

							if (!groupValues.includes(groupValue)) {
								groupValues.push(groupValue);
								groups[groupValue] = [];

								if (groupValue) {
									groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
										id: groupValue,
										isGroupHeader: true,
										isSelectable: isGroupHeaderSelectable
									}));
								}
							}

							groups[groupValue].push(Object.assign({ isGroupItem: !!groupValue }, item));
						});

						const sortedGroupedItems = [];

						groupFilter(groupValues).forEach(groupValue => {
							sortedGroupedItems.push(...groups[groupValue]);
						});

						$$invalidate(33, filteredItems = sortedGroupedItems);
					} else {
						$$invalidate(33, filteredItems = _filteredItems);
					}
				}
			}
		};

		return [
			container,
			input,
			isFocused,
			selectedValue,
			filterText,
			isWaiting,
			Selection$$1,
			MultiSelection$$1,
			isMulti,
			isDisabled,
			hasError,
			containerStyles,
			getSelectionLabel,
			isSearchable,
			inputStyles,
			isClearable,
			Icon,
			showChevron,
			containerClasses,
			handleClear,
			activeSelectedValue,
			_inputAttributes,
			showSelectedItem,
			placeholderText,
			handleMultiItemClear,
			getPosition,
			handleKeyDown,
			handleFocus,
			handleWindowClick,
			handleClick,
			items,
			listOpen,
			list,
			filteredItems,
			Item$$1,
			isCreatable,
			placeholder,
			itemFilter,
			groupBy,
			groupFilter,
			isGroupHeaderSelectable,
			getGroupHeaderLabel,
			getOptionLabel,
			optionIdentifier,
			loadOptions,
			createGroupHeaderItem,
			createItem,
			listPlacement,
			isVirtualList,
			loadOptionsInterval,
			noOptionsMessage,
			hideEmptyState,
			inputAttributes,
			listAutoWidth,
			itemHeight,
			target,
			originalItemsClone,
			prev_selectedValue,
			prev_listOpen,
			prev_filterText,
			prev_isFocused,
			prev_filteredItems,
			getItemsHasInvoked,
			disabled,
			dispatch,
			_items,
			resetFilter,
			getItems,
			checkSelectedValueForDuplicates,
			setList,
			removeList,
			loadList,
			input_1_binding,
			input_1_input_handler,
			input_1_binding_1,
			input_1_input_handler_1,
			div_binding
		];
	}

	class Select extends SvelteComponentDev {
		constructor(options) {
			super(options);
			if (!document_1.getElementById("svelte-7bommo-style")) add_css$6();

			init(
				this,
				options,
				instance$6,
				create_fragment$6,
				safe_not_equal,
				{
					container: 0,
					input: 1,
					Item: 34,
					Selection: 6,
					MultiSelection: 7,
					isMulti: 8,
					isDisabled: 9,
					isCreatable: 35,
					isFocused: 2,
					selectedValue: 3,
					filterText: 4,
					placeholder: 36,
					items: 30,
					itemFilter: 37,
					groupBy: 38,
					groupFilter: 39,
					isGroupHeaderSelectable: 40,
					getGroupHeaderLabel: 41,
					getOptionLabel: 42,
					optionIdentifier: 43,
					loadOptions: 44,
					hasError: 10,
					containerStyles: 11,
					getSelectionLabel: 12,
					createGroupHeaderItem: 45,
					createItem: 46,
					isSearchable: 13,
					inputStyles: 14,
					isClearable: 15,
					isWaiting: 5,
					listPlacement: 47,
					listOpen: 31,
					list: 32,
					isVirtualList: 48,
					loadOptionsInterval: 49,
					noOptionsMessage: 50,
					hideEmptyState: 51,
					filteredItems: 33,
					inputAttributes: 52,
					listAutoWidth: 53,
					itemHeight: 54,
					Icon: 16,
					showChevron: 17,
					containerClasses: 18,
					handleClear: 19
				},
				[-1, -1, -1]
			);

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Select",
				options,
				id: create_fragment$6.name
			});
		}

		get container() {
			return this.$$.ctx[0];
		}

		set container(container) {
			this.$set({ container });
			flush();
		}

		get input() {
			return this.$$.ctx[1];
		}

		set input(input) {
			this.$set({ input });
			flush();
		}

		get Item() {
			return this.$$.ctx[34];
		}

		set Item(Item$$1) {
			this.$set({ Item: Item$$1 });
			flush();
		}

		get Selection() {
			return this.$$.ctx[6];
		}

		set Selection(Selection$$1) {
			this.$set({ Selection: Selection$$1 });
			flush();
		}

		get MultiSelection() {
			return this.$$.ctx[7];
		}

		set MultiSelection(MultiSelection$$1) {
			this.$set({ MultiSelection: MultiSelection$$1 });
			flush();
		}

		get isMulti() {
			return this.$$.ctx[8];
		}

		set isMulti(isMulti) {
			this.$set({ isMulti });
			flush();
		}

		get isDisabled() {
			return this.$$.ctx[9];
		}

		set isDisabled(isDisabled) {
			this.$set({ isDisabled });
			flush();
		}

		get isCreatable() {
			return this.$$.ctx[35];
		}

		set isCreatable(isCreatable) {
			this.$set({ isCreatable });
			flush();
		}

		get isFocused() {
			return this.$$.ctx[2];
		}

		set isFocused(isFocused) {
			this.$set({ isFocused });
			flush();
		}

		get selectedValue() {
			return this.$$.ctx[3];
		}

		set selectedValue(selectedValue) {
			this.$set({ selectedValue });
			flush();
		}

		get filterText() {
			return this.$$.ctx[4];
		}

		set filterText(filterText) {
			this.$set({ filterText });
			flush();
		}

		get placeholder() {
			return this.$$.ctx[36];
		}

		set placeholder(placeholder) {
			this.$set({ placeholder });
			flush();
		}

		get items() {
			return this.$$.ctx[30];
		}

		set items(items) {
			this.$set({ items });
			flush();
		}

		get itemFilter() {
			return this.$$.ctx[37];
		}

		set itemFilter(itemFilter) {
			this.$set({ itemFilter });
			flush();
		}

		get groupBy() {
			return this.$$.ctx[38];
		}

		set groupBy(groupBy) {
			this.$set({ groupBy });
			flush();
		}

		get groupFilter() {
			return this.$$.ctx[39];
		}

		set groupFilter(groupFilter) {
			this.$set({ groupFilter });
			flush();
		}

		get isGroupHeaderSelectable() {
			return this.$$.ctx[40];
		}

		set isGroupHeaderSelectable(isGroupHeaderSelectable) {
			this.$set({ isGroupHeaderSelectable });
			flush();
		}

		get getGroupHeaderLabel() {
			return this.$$.ctx[41];
		}

		set getGroupHeaderLabel(getGroupHeaderLabel) {
			this.$set({ getGroupHeaderLabel });
			flush();
		}

		get getOptionLabel() {
			return this.$$.ctx[42];
		}

		set getOptionLabel(getOptionLabel) {
			this.$set({ getOptionLabel });
			flush();
		}

		get optionIdentifier() {
			return this.$$.ctx[43];
		}

		set optionIdentifier(optionIdentifier) {
			this.$set({ optionIdentifier });
			flush();
		}

		get loadOptions() {
			return this.$$.ctx[44];
		}

		set loadOptions(loadOptions) {
			this.$set({ loadOptions });
			flush();
		}

		get hasError() {
			return this.$$.ctx[10];
		}

		set hasError(hasError) {
			this.$set({ hasError });
			flush();
		}

		get containerStyles() {
			return this.$$.ctx[11];
		}

		set containerStyles(containerStyles) {
			this.$set({ containerStyles });
			flush();
		}

		get getSelectionLabel() {
			return this.$$.ctx[12];
		}

		set getSelectionLabel(getSelectionLabel) {
			this.$set({ getSelectionLabel });
			flush();
		}

		get createGroupHeaderItem() {
			return this.$$.ctx[45];
		}

		set createGroupHeaderItem(createGroupHeaderItem) {
			this.$set({ createGroupHeaderItem });
			flush();
		}

		get createItem() {
			return this.$$.ctx[46];
		}

		set createItem(createItem) {
			this.$set({ createItem });
			flush();
		}

		get isSearchable() {
			return this.$$.ctx[13];
		}

		set isSearchable(isSearchable) {
			this.$set({ isSearchable });
			flush();
		}

		get inputStyles() {
			return this.$$.ctx[14];
		}

		set inputStyles(inputStyles) {
			this.$set({ inputStyles });
			flush();
		}

		get isClearable() {
			return this.$$.ctx[15];
		}

		set isClearable(isClearable) {
			this.$set({ isClearable });
			flush();
		}

		get isWaiting() {
			return this.$$.ctx[5];
		}

		set isWaiting(isWaiting) {
			this.$set({ isWaiting });
			flush();
		}

		get listPlacement() {
			return this.$$.ctx[47];
		}

		set listPlacement(listPlacement) {
			this.$set({ listPlacement });
			flush();
		}

		get listOpen() {
			return this.$$.ctx[31];
		}

		set listOpen(listOpen) {
			this.$set({ listOpen });
			flush();
		}

		get list() {
			return this.$$.ctx[32];
		}

		set list(list) {
			this.$set({ list });
			flush();
		}

		get isVirtualList() {
			return this.$$.ctx[48];
		}

		set isVirtualList(isVirtualList) {
			this.$set({ isVirtualList });
			flush();
		}

		get loadOptionsInterval() {
			return this.$$.ctx[49];
		}

		set loadOptionsInterval(loadOptionsInterval) {
			this.$set({ loadOptionsInterval });
			flush();
		}

		get noOptionsMessage() {
			return this.$$.ctx[50];
		}

		set noOptionsMessage(noOptionsMessage) {
			this.$set({ noOptionsMessage });
			flush();
		}

		get hideEmptyState() {
			return this.$$.ctx[51];
		}

		set hideEmptyState(hideEmptyState) {
			this.$set({ hideEmptyState });
			flush();
		}

		get filteredItems() {
			return this.$$.ctx[33];
		}

		set filteredItems(filteredItems) {
			this.$set({ filteredItems });
			flush();
		}

		get inputAttributes() {
			return this.$$.ctx[52];
		}

		set inputAttributes(inputAttributes) {
			this.$set({ inputAttributes });
			flush();
		}

		get listAutoWidth() {
			return this.$$.ctx[53];
		}

		set listAutoWidth(listAutoWidth) {
			this.$set({ listAutoWidth });
			flush();
		}

		get itemHeight() {
			return this.$$.ctx[54];
		}

		set itemHeight(itemHeight) {
			this.$set({ itemHeight });
			flush();
		}

		get Icon() {
			return this.$$.ctx[16];
		}

		set Icon(Icon) {
			this.$set({ Icon });
			flush();
		}

		get showChevron() {
			return this.$$.ctx[17];
		}

		set showChevron(showChevron) {
			this.$set({ showChevron });
			flush();
		}

		get containerClasses() {
			return this.$$.ctx[18];
		}

		set containerClasses(containerClasses) {
			this.$set({ containerClasses });
			flush();
		}

		get handleClear() {
			return this.$$.ctx[19];
		}

		set handleClear(value) {
			throw new Error("<Select>: Cannot set read-only property 'handleClear'");
		}
	}

	/* test/src/TestIcon.svelte generated by Svelte v3.23.0 */

	const file$7 = "test/src/TestIcon.svelte";

	function create_fragment$7(ctx) {
		let svg;
		let path;

		const block = {
			c: function create() {
				svg = svg_element("svg");
				path = svg_element("path");
				attr_dev(path, "d", "M11.0526 0.294881L9.28328 2.06416L13.9577 6.71672L15.7051 4.94744C16.0983\n    4.55427 16.0983 4.00819 15.7051 3.61502L12.4068 0.294881C11.9918 -0.0982935\n    11.4457 -0.0982935 11.0526 0.294881ZM2.11877 11.2164L1.66007 13.4881L2.51195\n    14.3618L4.78362 13.8812L2.11877 11.2164ZM0 15.5631L1.11399 10.2116L8.51877\n    2.80683L13.1932 7.45939L5.76655 14.8642L0.371331 15.9563C0.349488 15.9782\n    0.327645 15.9782 0.305802 15.9782C0.174744 15.9782 0 15.8471 0 15.5631Z");
				attr_dev(path, "fill", "currentColor");
				add_location(path, file$7, 6, 2, 110);
				attr_dev(svg, "id", "testIcon");
				attr_dev(svg, "width", "16");
				attr_dev(svg, "height", "16");
				attr_dev(svg, "viewBox", "0 0 16 16");
				attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
				add_location(svg, file$7, 0, 0, 0);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, svg, anchor);
				append_dev(svg, path);
			},
			p: noop,
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(svg);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$7.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$7($$self, $$props) {
		const writable_props = [];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TestIcon> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("TestIcon", $$slots, []);
		return [];
	}

	class TestIcon extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "TestIcon",
				options,
				id: create_fragment$7.name
			});
		}
	}

	/* test/src/Select/Select--default.html generated by Svelte v3.23.0 */

	const file$8 = "test/src/Select/Select--default.html";

	function create_fragment$8(ctx) {
		let div;
		let input;
		let input_spellcheck_value;

		const block = {
			c: function create() {
				div = element("div");
				input = element("input");
				attr_dev(input, "autocomplete", "off");
				attr_dev(input, "autocorrect", "off");
				attr_dev(input, "spellcheck", input_spellcheck_value = false);
				attr_dev(input, "placeholder", "Select...");
				add_location(input, file$8, 1, 2, 32);
				attr_dev(div, "class", "selectContainer");
				add_location(div, file$8, 0, 0, 0);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				append_dev(div, input);
			},
			p: noop,
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$8.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$8($$self, $$props) {
		const writable_props = [];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Select_default> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("Select_default", $$slots, []);
		return [];
	}

	class Select_default extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$8, create_fragment$8, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Select_default",
				options,
				id: create_fragment$8.name
			});
		}
	}

	/* test/src/Select/Select--multiSelected.html generated by Svelte v3.23.0 */

	const file$9 = "test/src/Select/Select--multiSelected.html";

	function add_css$7() {
		var style = element("style");
		style.id = "svelte-1dx2sh5-style";
		style.textContent = ".selectContainer.svelte-1dx2sh5.svelte-1dx2sh5{border:1px solid #D8DBDF;border-radius:3px;height:42px;position:relative}.selectContainer.svelte-1dx2sh5 input.svelte-1dx2sh5{border:none;color:#3F4F5F;height:42px;line-height:42px;padding:0 16px;width:100%;background:transparent;font-size:14px;letter-spacing:-0.08px}.selectContainer.svelte-1dx2sh5 input.svelte-1dx2sh5::placeholder{color:#78848F}.selectContainer.svelte-1dx2sh5.svelte-1dx2sh5:hover{border-color:#b2b8bf}.selectContainer.svelte-1dx2sh5 input.svelte-1dx2sh5:focus{outline:none}.clearSelect.svelte-1dx2sh5.svelte-1dx2sh5{position:absolute;right:10px;top:12px;width:20px;height:20px;color:#c5cacf}.clearSelect.svelte-1dx2sh5.svelte-1dx2sh5:hover{color:#2c3e50}.multiSelect.svelte-1dx2sh5.svelte-1dx2sh5{display:flex;padding:0 16px}.multiSelectItem.svelte-1dx2sh5.svelte-1dx2sh5{background:#E8EAED;margin-right:5px;border-radius:4px;line-height:26px;display:flex;cursor:default}.multiSelectItem_label.svelte-1dx2sh5.svelte-1dx2sh5{padding:0 5px 0 10px}.selectContainer.multiSelect.svelte-1dx2sh5 input.svelte-1dx2sh5{width:auto;padding:0;flex-grow:1}.multiSelectItem_clear.svelte-1dx2sh5.svelte-1dx2sh5{border-radius:0 4px 4px 0;width:20px;text-align:center}.multiSelectItem_clear.svelte-1dx2sh5.svelte-1dx2sh5:hover{background-color:red}.multiSelectItem_clear.svelte-1dx2sh5 svg.svelte-1dx2sh5{width:14px;height:14px;position:relative;top:3px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LS1tdWx0aVNlbGVjdGVkLmh0bWwiLCJzb3VyY2VzIjpbIlNlbGVjdC0tbXVsdGlTZWxlY3RlZC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIjwhLS0gREVWIE9OTFkgSU1QT1JUUyAtLT5cbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi4vcmVzZXQuY3NzXCIvPlxuXG48ZGl2IGNsYXNzPVwic2VsZWN0Q29udGFpbmVyIG11bHRpU2VsZWN0XCI+XG4gICAgPGRpdiBjbGFzcz1cIm11bHRpU2VsZWN0SXRlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm11bHRpU2VsZWN0SXRlbV9sYWJlbFwiPlxuICAgICAgICBQaXp6YVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibXVsdGlTZWxlY3RJdGVtX2NsZWFyXCI+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCItMiAtMiA1MCA1MFwiIGZvY3VzYWJsZT1cImZhbHNlXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTM0LjkyMywzNy4yNTFMMjQsMjYuMzI4TDEzLjA3NywzNy4yNTFMOS40MzYsMzMuNjFsMTAuOTIzLTEwLjkyM0w5LjQzNiwxMS43NjVsMy42NDEtMy42NDFMMjQsMTkuMDQ3TDM0LjkyMyw4LjEyNCBsMy42NDEsMy42NDFMMjcuNjQxLDIyLjY4OEwzOC41NjQsMzMuNjFMMzQuOTIzLDM3LjI1MXpcIj48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cIm11bHRpU2VsZWN0SXRlbVwiPlxuICAgICAgPGRpdiBjbGFzcz1cIm11bHRpU2VsZWN0SXRlbV9sYWJlbFwiPlxuICAgICAgICBDaGlwc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibXVsdGlTZWxlY3RJdGVtX2NsZWFyXCI+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCItMiAtMiA1MCA1MFwiIGZvY3VzYWJsZT1cImZhbHNlXCIgcm9sZT1cInByZXNlbnRhdGlvblwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTM0LjkyMywzNy4yNTFMMjQsMjYuMzI4TDEzLjA3NywzNy4yNTFMOS40MzYsMzMuNjFsMTAuOTIzLTEwLjkyM0w5LjQzNiwxMS43NjVsMy42NDEtMy42NDFMMjQsMTkuMDQ3TDM0LjkyMyw4LjEyNCBsMy42NDEsMy42NDFMMjcuNjQxLDIyLjY4OEwzOC41NjQsMzMuNjFMMzQuOTIzLDM3LjI1MXpcIj48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDxpbnB1dCBhdXRvY29tcGxldGU9XCJvZmZcIiBhdXRvY29ycmVjdD1cIm9mZlwiIHNwZWxsY2hlY2s9XCJ0cnVlXCIgcGxhY2Vob2xkZXI9XCJcIj5cbiAgPGRpdiBjbGFzcz1cImNsZWFyU2VsZWN0XCI+XG4gICAgPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIi0yIC0yIDUwIDUwXCIgZm9jdXNhYmxlPVwiZmFsc2VcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+XG4gICAgICA8cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgIGQ9XCJNMzQuOTIzLDM3LjI1MUwyNCwyNi4zMjhMMTMuMDc3LDM3LjI1MUw5LjQzNiwzMy42MWwxMC45MjMtMTAuOTIzTDkuNDM2LDExLjc2NWwzLjY0MS0zLjY0MUwyNCwxOS4wNDdMMzQuOTIzLDguMTI0IGwzLjY0MSwzLjY0MUwyNy42NDEsMjIuNjg4TDM4LjU2NCwzMy42MUwzNC45MjMsMzcuMjUxelwiPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPHN0eWxlPlxuICAuc2VsZWN0Q29udGFpbmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDhEQkRGO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lciBpbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjM0Y0RjVGO1xuICAgIGhlaWdodDogNDJweDtcbiAgICBsaW5lLWhlaWdodDogNDJweDtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wOHB4O1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjNzg4NDhGO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lcjpob3ZlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAjYjJiOGJmO1xuICB9XG5cbiAgLnNlbGVjdENvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgfVxuXG4gIC5jbGVhclNlbGVjdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTJweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgY29sb3I6ICNjNWNhY2Y7XG4gIH1cblxuICAuY2xlYXJTZWxlY3Q6aG92ZXIge1xuICAgIGNvbG9yOiAjMmMzZTUwO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAgMTZweDtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICB9XG5cbiAgLm11bHRpU2VsZWN0SXRlbSB7XG4gICAgYmFja2dyb3VuZDogI0U4RUFFRDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cblxuICAubXVsdGlTZWxlY3RJdGVtX2xhYmVsIHtcbiAgICBwYWRkaW5nOiAwIDVweCAwIDEwcHg7XG4gIH1cblxuICAuc2VsZWN0Q29udGFpbmVyLm11bHRpU2VsZWN0IGlucHV0IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweCAwO1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgfVxuXG4gIC5tdWx0aVNlbGVjdEl0ZW1fY2xlYXIgc3ZnIHtcbiAgICB3aWR0aDogMTRweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9DRSxnQkFBZ0IsOEJBQUMsQ0FBQyxBQUNoQixNQUFNLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3pCLGFBQWEsQ0FBRSxHQUFHLENBQ2xCLE1BQU0sQ0FBRSxJQUFJLENBQ1osUUFBUSxDQUFFLFFBQVEsQUFDcEIsQ0FBQyxBQUVELCtCQUFnQixDQUFDLEtBQUssZUFBQyxDQUFDLEFBQ3RCLE1BQU0sQ0FBRSxJQUFJLENBQ1osS0FBSyxDQUFFLE9BQU8sQ0FDZCxNQUFNLENBQUUsSUFBSSxDQUNaLFdBQVcsQ0FBRSxJQUFJLENBQ2pCLE9BQU8sQ0FBRSxDQUFDLENBQUMsSUFBSSxDQUNmLEtBQUssQ0FBRSxJQUFJLENBQ1gsVUFBVSxDQUFFLFdBQVcsQ0FDdkIsU0FBUyxDQUFFLElBQUksQ0FDZixjQUFjLENBQUUsT0FBTyxBQUN6QixDQUFDLEFBRUQsK0JBQWdCLENBQUMsb0JBQUssYUFBYSxBQUFDLENBQUMsQUFDbkMsS0FBSyxDQUFFLE9BQU8sQUFDaEIsQ0FBQyxBQUVELDhDQUFnQixNQUFNLEFBQUMsQ0FBQyxBQUN0QixZQUFZLENBQUUsT0FBTyxBQUN2QixDQUFDLEFBRUQsK0JBQWdCLENBQUMsb0JBQUssTUFBTSxBQUFDLENBQUMsQUFDNUIsT0FBTyxDQUFFLElBQUksQUFDZixDQUFDLEFBRUQsWUFBWSw4QkFBQyxDQUFDLEFBQ1osUUFBUSxDQUFFLFFBQVEsQ0FDbEIsS0FBSyxDQUFFLElBQUksQ0FDWCxHQUFHLENBQUUsSUFBSSxDQUNULEtBQUssQ0FBRSxJQUFJLENBQ1gsTUFBTSxDQUFFLElBQUksQ0FDWixLQUFLLENBQUUsT0FBTyxBQUNoQixDQUFDLEFBRUQsMENBQVksTUFBTSxBQUFDLENBQUMsQUFDbEIsS0FBSyxDQUFFLE9BQU8sQUFDaEIsQ0FBQyxBQUVELFlBQVksOEJBQUMsQ0FBQyxBQUNaLE9BQU8sQ0FBRSxJQUFJLENBQ2IsT0FBTyxDQUFFLENBQUMsQ0FBQyxJQUFJLEFBQ2pCLENBQUMsQUFPRCxnQkFBZ0IsOEJBQUMsQ0FBQyxBQUNoQixVQUFVLENBQUUsT0FBTyxDQUNuQixZQUFZLENBQUUsR0FBRyxDQUNqQixhQUFhLENBQUUsR0FBRyxDQUNsQixXQUFXLENBQUUsSUFBSSxDQUNqQixPQUFPLENBQUUsSUFBSSxDQUNiLE1BQU0sQ0FBRSxPQUFPLEFBQ2pCLENBQUMsQUFFRCxzQkFBc0IsOEJBQUMsQ0FBQyxBQUN0QixPQUFPLENBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxBQUN2QixDQUFDLEFBRUQsZ0JBQWdCLDJCQUFZLENBQUMsS0FBSyxlQUFDLENBQUMsQUFDbEMsS0FBSyxDQUFFLElBQUksQ0FDWCxPQUFPLENBQUUsQ0FBQyxDQUNWLFNBQVMsQ0FBRSxDQUFDLEFBQ2QsQ0FBQyxBQUVELHNCQUFzQiw4QkFBQyxDQUFDLEFBQ3RCLGFBQWEsQ0FBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQzFCLEtBQUssQ0FBRSxJQUFJLENBQ1gsVUFBVSxDQUFFLE1BQU0sQUFDcEIsQ0FBQyxBQUVELG9EQUFzQixNQUFNLEFBQUMsQ0FBQyxBQUM1QixnQkFBZ0IsQ0FBRSxHQUFHLEFBQ3ZCLENBQUMsQUFFRCxxQ0FBc0IsQ0FBQyxHQUFHLGVBQUMsQ0FBQyxBQUMxQixLQUFLLENBQUUsSUFBSSxDQUNYLE1BQU0sQ0FBRSxJQUFJLENBQ1osUUFBUSxDQUFFLFFBQVEsQ0FDbEIsR0FBRyxDQUFFLEdBQUcsQUFDVixDQUFDIn0= */";
		append_dev(document.head, style);
	}

	function create_fragment$9(ctx) {
		let link;
		let t0;
		let div7;
		let div2;
		let div0;
		let t2;
		let div1;
		let svg0;
		let path0;
		let t3;
		let div5;
		let div3;
		let t5;
		let div4;
		let svg1;
		let path1;
		let t6;
		let input;
		let t7;
		let div6;
		let svg2;
		let path2;

		const block = {
			c: function create() {
				link = element("link");
				t0 = space();
				div7 = element("div");
				div2 = element("div");
				div0 = element("div");
				div0.textContent = "Pizza";
				t2 = space();
				div1 = element("div");
				svg0 = svg_element("svg");
				path0 = svg_element("path");
				t3 = space();
				div5 = element("div");
				div3 = element("div");
				div3.textContent = "Chips";
				t5 = space();
				div4 = element("div");
				svg1 = svg_element("svg");
				path1 = svg_element("path");
				t6 = space();
				input = element("input");
				t7 = space();
				div6 = element("div");
				svg2 = svg_element("svg");
				path2 = svg_element("path");
				attr_dev(link, "rel", "stylesheet");
				attr_dev(link, "href", "../reset.css");
				add_location(link, file$9, 1, 0, 26);
				attr_dev(div0, "class", "multiSelectItem_label svelte-1dx2sh5");
				add_location(div0, file$9, 5, 6, 154);
				attr_dev(path0, "d", "M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z");
				add_location(path0, file$9, 10, 10, 370);
				attr_dev(svg0, "width", "100%");
				attr_dev(svg0, "height", "100%");
				attr_dev(svg0, "viewBox", "-2 -2 50 50");
				attr_dev(svg0, "focusable", "false");
				attr_dev(svg0, "role", "presentation");
				attr_dev(svg0, "class", "svelte-1dx2sh5");
				add_location(svg0, file$9, 9, 8, 267);
				attr_dev(div1, "class", "multiSelectItem_clear svelte-1dx2sh5");
				add_location(div1, file$9, 8, 6, 223);
				attr_dev(div2, "class", "multiSelectItem svelte-1dx2sh5");
				add_location(div2, file$9, 4, 4, 118);
				attr_dev(div3, "class", "multiSelectItem_label svelte-1dx2sh5");
				add_location(div3, file$9, 16, 6, 647);
				attr_dev(path1, "d", "M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z");
				add_location(path1, file$9, 21, 10, 863);
				attr_dev(svg1, "width", "100%");
				attr_dev(svg1, "height", "100%");
				attr_dev(svg1, "viewBox", "-2 -2 50 50");
				attr_dev(svg1, "focusable", "false");
				attr_dev(svg1, "role", "presentation");
				attr_dev(svg1, "class", "svelte-1dx2sh5");
				add_location(svg1, file$9, 20, 8, 760);
				attr_dev(div4, "class", "multiSelectItem_clear svelte-1dx2sh5");
				add_location(div4, file$9, 19, 6, 716);
				attr_dev(div5, "class", "multiSelectItem svelte-1dx2sh5");
				add_location(div5, file$9, 15, 4, 611);
				attr_dev(input, "autocomplete", "off");
				attr_dev(input, "autocorrect", "off");
				attr_dev(input, "spellcheck", "true");
				attr_dev(input, "placeholder", "");
				attr_dev(input, "class", "svelte-1dx2sh5");
				add_location(input, file$9, 26, 2, 1102);
				attr_dev(path2, "fill", "currentColor");
				attr_dev(path2, "d", "M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z");
				add_location(path2, file$9, 29, 6, 1311);
				attr_dev(svg2, "width", "100%");
				attr_dev(svg2, "height", "100%");
				attr_dev(svg2, "viewBox", "-2 -2 50 50");
				attr_dev(svg2, "focusable", "false");
				attr_dev(svg2, "role", "presentation");
				add_location(svg2, file$9, 28, 4, 1212);
				attr_dev(div6, "class", "clearSelect svelte-1dx2sh5");
				add_location(div6, file$9, 27, 2, 1182);
				attr_dev(div7, "class", "selectContainer multiSelect svelte-1dx2sh5");
				add_location(div7, file$9, 3, 0, 72);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, link, anchor);
				insert_dev(target, t0, anchor);
				insert_dev(target, div7, anchor);
				append_dev(div7, div2);
				append_dev(div2, div0);
				append_dev(div2, t2);
				append_dev(div2, div1);
				append_dev(div1, svg0);
				append_dev(svg0, path0);
				append_dev(div7, t3);
				append_dev(div7, div5);
				append_dev(div5, div3);
				append_dev(div5, t5);
				append_dev(div5, div4);
				append_dev(div4, svg1);
				append_dev(svg1, path1);
				append_dev(div7, t6);
				append_dev(div7, input);
				append_dev(div7, t7);
				append_dev(div7, div6);
				append_dev(div6, svg2);
				append_dev(svg2, path2);
			},
			p: noop,
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(link);
				if (detaching) detach_dev(t0);
				if (detaching) detach_dev(div7);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$9.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$9($$self, $$props) {
		const writable_props = [];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Select_multiSelected> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("Select_multiSelected", $$slots, []);
		return [];
	}

	class Select_multiSelected extends SvelteComponentDev {
		constructor(options) {
			super(options);
			if (!document.getElementById("svelte-1dx2sh5-style")) add_css$7();
			init(this, options, instance$9, create_fragment$9, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "Select_multiSelected",
				options,
				id: create_fragment$9.name
			});
		}
	}

	/* test/src/List/List--default.html generated by Svelte v3.23.0 */

	const file$a = "test/src/List/List--default.html";

	function add_css$8() {
		var style = element("style");
		style.id = "svelte-mj7ksi-style";
		style.textContent = ".listContainer.svelte-mj7ksi{box-shadow:0 2px 3px 0 rgba(44, 62, 80, 0.24);border-radius:4px;height:176px;overflow-y:auto}.listItem.svelte-mj7ksi{padding:20px}.listItem.svelte-mj7ksi:hover,.listItem.hover.svelte-mj7ksi{background:#e7f2ff}.listItem.svelte-mj7ksi:first-child{border-radius:4px 4px 0 0}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC0tZGVmYXVsdC5odG1sIiwic291cmNlcyI6WyJMaXN0LS1kZWZhdWx0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiPCEtLSBERVYgT05MWSBJTVBPUlRTIC0tPlxuPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIuLi9yZXNldC5jc3NcIi8+XG5cbjxkaXYgY2xhc3M9XCJsaXN0Q29udGFpbmVyXCI+XG4gIDxkaXYgY2xhc3M9XCJsaXN0SXRlbSBob3ZlclwiPjxkaXYgY2xhc3M9XCJpdGVtXCI+Q2hvY29sYXRlPC9kaXY+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsaXN0SXRlbVwiPjxkaXYgY2xhc3M9XCJpdGVtXCI+UGl6emE8L2Rpdj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImxpc3RJdGVtXCI+PGRpdiBjbGFzcz1cIml0ZW1cIj5DYWtlPC9kaXY+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsaXN0SXRlbVwiPjxkaXYgY2xhc3M9XCJpdGVtXCI+Q2hpcHM8L2Rpdj48L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImxpc3RJdGVtXCI+PGRpdiBjbGFzcz1cIml0ZW1cIj5JY2UgQ3JlYW08L2Rpdj48L2Rpdj5cbjwvZGl2PlxuXG48c3R5bGU+XG4gIC5saXN0Q29udGFpbmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggMCByZ2JhKDQ0LCA2MiwgODAsIDAuMjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBoZWlnaHQ6IDE3NnB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cblxuICAubGlzdEl0ZW0ge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAubGlzdEl0ZW06aG92ZXIsXG4gIC5saXN0SXRlbS5ob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2U3ZjJmZjtcbiAgfVxuXG4gIC5saXN0SXRlbTpmaXJzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUUsY0FBYyxjQUFDLENBQUMsQUFDZCxVQUFVLENBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQzlDLGFBQWEsQ0FBRSxHQUFHLENBQ2xCLE1BQU0sQ0FBRSxLQUFLLENBQ2IsVUFBVSxDQUFFLElBQUksQUFDbEIsQ0FBQyxBQUVELFNBQVMsY0FBQyxDQUFDLEFBQ1QsT0FBTyxDQUFFLElBQUksQUFDZixDQUFDLEFBRUQsdUJBQVMsTUFBTSxDQUNmLFNBQVMsTUFBTSxjQUFDLENBQUMsQUFDZixVQUFVLENBQUUsT0FBTyxBQUNyQixDQUFDLEFBRUQsdUJBQVMsWUFBWSxBQUFDLENBQUMsQUFDckIsYUFBYSxDQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQUFDNUIsQ0FBQyJ9 */";
		append_dev(document.head, style);
	}

	function create_fragment$a(ctx) {
		let link;
		let t0;
		let div10;
		let div1;
		let div0;
		let t2;
		let div3;
		let div2;
		let t4;
		let div5;
		let div4;
		let t6;
		let div7;
		let div6;
		let t8;
		let div9;
		let div8;

		const block = {
			c: function create() {
				link = element("link");
				t0 = space();
				div10 = element("div");
				div1 = element("div");
				div0 = element("div");
				div0.textContent = "Chocolate";
				t2 = space();
				div3 = element("div");
				div2 = element("div");
				div2.textContent = "Pizza";
				t4 = space();
				div5 = element("div");
				div4 = element("div");
				div4.textContent = "Cake";
				t6 = space();
				div7 = element("div");
				div6 = element("div");
				div6.textContent = "Chips";
				t8 = space();
				div9 = element("div");
				div8 = element("div");
				div8.textContent = "Ice Cream";
				attr_dev(link, "rel", "stylesheet");
				attr_dev(link, "href", "../reset.css");
				add_location(link, file$a, 1, 0, 26);
				attr_dev(div0, "class", "item");
				add_location(div0, file$a, 4, 30, 130);
				attr_dev(div1, "class", "listItem hover svelte-mj7ksi");
				add_location(div1, file$a, 4, 2, 102);
				attr_dev(div2, "class", "item");
				add_location(div2, file$a, 5, 24, 194);
				attr_dev(div3, "class", "listItem svelte-mj7ksi");
				add_location(div3, file$a, 5, 2, 172);
				attr_dev(div4, "class", "item");
				add_location(div4, file$a, 6, 24, 254);
				attr_dev(div5, "class", "listItem svelte-mj7ksi");
				add_location(div5, file$a, 6, 2, 232);
				attr_dev(div6, "class", "item");
				add_location(div6, file$a, 7, 24, 313);
				attr_dev(div7, "class", "listItem svelte-mj7ksi");
				add_location(div7, file$a, 7, 2, 291);
				attr_dev(div8, "class", "item");
				add_location(div8, file$a, 8, 24, 373);
				attr_dev(div9, "class", "listItem svelte-mj7ksi");
				add_location(div9, file$a, 8, 2, 351);
				attr_dev(div10, "class", "listContainer svelte-mj7ksi");
				add_location(div10, file$a, 3, 0, 72);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, link, anchor);
				insert_dev(target, t0, anchor);
				insert_dev(target, div10, anchor);
				append_dev(div10, div1);
				append_dev(div1, div0);
				append_dev(div10, t2);
				append_dev(div10, div3);
				append_dev(div3, div2);
				append_dev(div10, t4);
				append_dev(div10, div5);
				append_dev(div5, div4);
				append_dev(div10, t6);
				append_dev(div10, div7);
				append_dev(div7, div6);
				append_dev(div10, t8);
				append_dev(div10, div9);
				append_dev(div9, div8);
			},
			p: noop,
			i: noop,
			o: noop,
			d: function destroy(detaching) {
				if (detaching) detach_dev(link);
				if (detaching) detach_dev(t0);
				if (detaching) detach_dev(div10);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$a.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$a($$self, $$props) {
		const writable_props = [];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<List_default> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("List_default", $$slots, []);
		return [];
	}

	class List_default extends SvelteComponentDev {
		constructor(options) {
			super(options);
			if (!document.getElementById("svelte-mj7ksi-style")) add_css$8();
			init(this, options, instance$a, create_fragment$a, safe_not_equal, {});

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "List_default",
				options,
				id: create_fragment$a.name
			});
		}
	}

	/* test/src/Select/ParentContainer.html generated by Svelte v3.23.0 */
	const file$b = "test/src/Select/ParentContainer.html";

	function create_fragment$b(ctx) {
		let div;
		let updating_selectedValue;
		let t0;
		let p;
		let t1_value = /*selectedValue*/ ctx[0].label + "";
		let t1;
		let current;

		function select_selectedValue_binding(value) {
			/*select_selectedValue_binding*/ ctx[2].call(null, value);
		}

		let select_props = { items: /*items*/ ctx[1] };

		if (/*selectedValue*/ ctx[0] !== void 0) {
			select_props.selectedValue = /*selectedValue*/ ctx[0];
		}

		const select = new Select({ props: select_props, $$inline: true });
		binding_callbacks.push(() => bind(select, "selectedValue", select_selectedValue_binding));

		const block = {
			c: function create() {
				div = element("div");
				create_component(select.$$.fragment);
				t0 = space();
				p = element("p");
				t1 = text(t1_value);
				attr_dev(p, "class", "result");
				add_location(p, file$b, 10, 2, 194);
				attr_dev(div, "class", "container");
				add_location(div, file$b, 7, 0, 120);
			},
			l: function claim(nodes) {
				throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
			},
			m: function mount(target, anchor) {
				insert_dev(target, div, anchor);
				mount_component(select, div, null);
				append_dev(div, t0);
				append_dev(div, p);
				append_dev(p, t1);
				current = true;
			},
			p: function update(ctx, [dirty]) {
				const select_changes = {};
				if (dirty & /*items*/ 2) select_changes.items = /*items*/ ctx[1];

				if (!updating_selectedValue && dirty & /*selectedValue*/ 1) {
					updating_selectedValue = true;
					select_changes.selectedValue = /*selectedValue*/ ctx[0];
					add_flush_callback(() => updating_selectedValue = false);
				}

				select.$set(select_changes);
				if ((!current || dirty & /*selectedValue*/ 1) && t1_value !== (t1_value = /*selectedValue*/ ctx[0].label + "")) set_data_dev(t1, t1_value);
			},
			i: function intro(local) {
				if (current) return;
				transition_in(select.$$.fragment, local);
				current = true;
			},
			o: function outro(local) {
				transition_out(select.$$.fragment, local);
				current = false;
			},
			d: function destroy(detaching) {
				if (detaching) detach_dev(div);
				destroy_component(select);
			}
		};

		dispatch_dev("SvelteRegisterBlock", {
			block,
			id: create_fragment$b.name,
			type: "component",
			source: "",
			ctx
		});

		return block;
	}

	function instance$b($$self, $$props, $$invalidate) {
		let { selectedValue } = $$props;
		let { items } = $$props;
		const writable_props = ["selectedValue", "items"];

		Object.keys($$props).forEach(key => {
			if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<ParentContainer> was created with unknown prop '${key}'`);
		});

		let { $$slots = {}, $$scope } = $$props;
		validate_slots("ParentContainer", $$slots, []);

		function select_selectedValue_binding(value) {
			selectedValue = value;
			$$invalidate(0, selectedValue);
		}

		$$self.$set = $$props => {
			if ("selectedValue" in $$props) $$invalidate(0, selectedValue = $$props.selectedValue);
			if ("items" in $$props) $$invalidate(1, items = $$props.items);
		};

		$$self.$capture_state = () => ({ Select, selectedValue, items });

		$$self.$inject_state = $$props => {
			if ("selectedValue" in $$props) $$invalidate(0, selectedValue = $$props.selectedValue);
			if ("items" in $$props) $$invalidate(1, items = $$props.items);
		};

		if ($$props && "$$inject" in $$props) {
			$$self.$inject_state($$props.$$inject);
		}

		return [selectedValue, items, select_selectedValue_binding];
	}

	class ParentContainer extends SvelteComponentDev {
		constructor(options) {
			super(options);
			init(this, options, instance$b, create_fragment$b, safe_not_equal, { selectedValue: 0, items: 1 });

			dispatch_dev("SvelteRegisterComponent", {
				component: this,
				tagName: "ParentContainer",
				options,
				id: create_fragment$b.name
			});

			const { ctx } = this.$$;
			const props = options.props || {};

			if (/*selectedValue*/ ctx[0] === undefined && !("selectedValue" in props)) {
				console.warn("<ParentContainer> was created without expected prop 'selectedValue'");
			}

			if (/*items*/ ctx[1] === undefined && !("items" in props)) {
				console.warn("<ParentContainer> was created without expected prop 'items'");
			}
		}

		get selectedValue() {
			return this.$$.ctx[0];
		}

		set selectedValue(selectedValue) {
			this.$set({ selectedValue });
			flush();
		}

		get items() {
			return this.$$.ctx[1];
		}

		set items(items) {
			this.$set({ items });
			flush();
		}
	}

	/*! *****************************************************************************
	Copyright (c) Microsoft Corporation. All rights reserved.
	Licensed under the Apache License, Version 2.0 (the "License"); you may not use
	this file except in compliance with the License. You may obtain a copy of the
	License at http://www.apache.org/licenses/LICENSE-2.0

	THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
	KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
	WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
	MERCHANTABLITY OR NON-INFRINGEMENT.

	See the Apache Version 2.0 License for specific language governing permissions
	and limitations under the License.
	***************************************************************************** */
	/* global Reflect, Promise */













	function __awaiter(thisArg, _arguments, P, generator) {
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });
	}

	function __generator(thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }
	}

	var fulfil;
	var done = new Promise(function (f) {
	    fulfil = f;
	});
	function start() {
	    if (!running) {
	        running = true;
	        console.log('TAP version 13');
	        Promise.resolve().then(function () {
	            var hasOnly = tests.some(function (test) { return test.only; });
	            tests.forEach(function (test) {
	                test.shouldRun = test.skip
	                    ? false
	                    : hasOnly ? test.only : true;
	            });
	            dequeue();
	        });
	    }
	}
	var test = Object.assign(function test(name, fn) {
	    tests.push({ name: name, fn: fn, skip: false, only: false, shouldRun: false });
	    start();
	}, {
	    skip: function (name, fn) {
	        tests.push({ name: name, fn: fn, skip: true, only: false, shouldRun: null });
	        start();
	    },
	    only: function (name, fn) {
	        tests.push({ name: name, fn: fn, skip: false, only: true, shouldRun: null });
	        start();
	    }
	});
	var testIndex = 0;
	var assertIndex = 0;
	var running = false;
	var tests = [];
	var passed = 0;
	var failed = 0;
	var skipped = 0;
	var isNode = typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]';
	function logResult(ok, operator, msg, info) {
	    if (info === void 0) { info = {}; }
	    assertIndex += 1;
	    if (ok) {
	        console.log("ok " + assertIndex + " \u2014 " + msg);
	        passed += 1;
	    }
	    else {
	        console.log("not ok " + assertIndex + " \u2014 " + msg);
	        failed += 1;
	        console.log('  ---');
	        console.log("  operator: " + operator);
	        if (isNode) {
	            var util = require('util');
	            if ('expected' in info)
	                console.log("  expected:\n    " + util.format(info.expected).replace(/\n/gm, "\n    "));
	            if ('actual' in info)
	                console.log("  actual:\n    " + util.format(info.actual).replace(/\n/gm, "\n    "));
	        }
	        else {
	            if ('expected' in info)
	                console.log("  expected:", info.expected);
	            if ('actual' in info)
	                console.log("  actual:", info.actual);
	        }
	        // find where the error occurred, and try to clean it up
	        var lines = new Error().stack.split('\n').slice(3);
	        var cwd_1 = '';
	        if (isNode) {
	            cwd_1 = process.cwd();
	            if (/[\/\\]/.test(cwd_1[0]))
	                cwd_1 += cwd_1[0];
	            var dirname = typeof __dirname === 'string' && __dirname.replace(/dist$/, '');
	            for (var i = 0; i < lines.length; i += 1) {
	                if (~lines[i].indexOf(dirname)) {
	                    lines = lines.slice(0, i);
	                    break;
	                }
	            }
	        }
	        var stack = lines
	            .map(function (line) { return "    " + line.replace(cwd_1, '').trim(); })
	            .join('\n');
	        console.log("  stack:   \n" + stack);
	        console.log("  ...");
	    }
	}
	var assert = {
	    fail: function (msg) { return logResult(false, 'fail', msg); },
	    pass: function (msg) { return logResult(true, 'pass', msg); },
	    ok: function (value, msg) {
	        if (msg === void 0) { msg = 'should be truthy'; }
	        return logResult(Boolean(value), 'ok', msg, {
	            actual: value,
	            expected: true
	        });
	    },
	    equal: function (a, b, msg) {
	        if (msg === void 0) { msg = 'should be equal'; }
	        return logResult(a === b, 'equal', msg, {
	            actual: a,
	            expected: b
	        });
	    },
	    throws: function (fn, expected, msg) {
	        if (msg === void 0) { msg = 'should throw'; }
	        try {
	            fn();
	            logResult(false, 'throws', msg, {
	                expected: expected
	            });
	        }
	        catch (err) {
	            if (expected instanceof Error) {
	                logResult(err.name === expected.name, 'throws', msg, {
	                    actual: err.name,
	                    expected: expected.name
	                });
	            }
	            else if (expected instanceof RegExp) {
	                logResult(expected.test(err.toString()), 'throws', msg, {
	                    actual: err.toString(),
	                    expected: expected
	                });
	            }
	            else if (typeof expected === 'function') {
	                logResult(expected(err), 'throws', msg, {
	                    actual: err
	                });
	            }
	            else {
	                throw new Error("Second argument to t.throws must be an Error constructor, regex, or function");
	            }
	        }
	    }
	};
	function dequeue() {
	    return __awaiter(this, void 0, void 0, function () {
	        var test, err_1, total;
	        return __generator(this, function (_a) {
	            switch (_a.label) {
	                case 0:
	                    test = tests[testIndex++];
	                    if (!test) return [3 /*break*/, 5];
	                    if (!test.shouldRun) {
	                        if (test.skip) {
	                            console.log("# skip " + test.name);
	                        }
	                        skipped += 1;
	                        dequeue();
	                        return [2 /*return*/];
	                    }
	                    console.log("# " + test.name);
	                    _a.label = 1;
	                case 1:
	                    _a.trys.push([1, 3, , 4]);
	                    return [4 /*yield*/, test.fn(assert)];
	                case 2:
	                    _a.sent();
	                    return [3 /*break*/, 4];
	                case 3:
	                    err_1 = _a.sent();
	                    failed += 1;
	                    console.log("not ok " + assertIndex + " \u2014 " + err_1.message);
	                    console.error("  " + err_1.stack.replace(/^\s+/gm, '    '));
	                    return [3 /*break*/, 4];
	                case 4:
	                    dequeue();
	                    return [3 /*break*/, 6];
	                case 5:
	                    total = passed + failed + skipped;
	                    console.log("\n1.." + total);
	                    console.log("# tests " + total);
	                    if (passed)
	                        console.log("# pass " + passed);
	                    if (failed)
	                        console.log("# fail " + failed);
	                    if (skipped)
	                        console.log("# skip " + skipped);
	                    fulfil();
	                    if (isNode)
	                        process.exit(failed ? 1 : 0);
	                    _a.label = 6;
	                case 6: return [2 /*return*/];
	            }
	        });
	    });
	}

	function querySelectorClick(selector) {
	  document.querySelector(selector).click();
	  return new Promise(f => setTimeout(f, 0));
	}

	function handleKeyboard(key) {
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': key}));
	  return new Promise(f => setTimeout(f, 0));
	}

	function handleSet(component, data) {
	  component.$set(data);
	  return new Promise(f => setTimeout(f, 0));
	}

	// setup
	const target = document.querySelector('main');
	const testTarget = document.getElementById('testTemplate');
	const extraTarget = document.getElementById('extra');
	const items = [
	  {value: 'chocolate', label: 'Chocolate'},
	  {value: 'pizza', label: 'Pizza'},
	  {value: 'cake', label: 'Cake'},
	  {value: 'chips', label: 'Chips'},
	  {value: 'ice-cream', label: 'Ice Cream'},
	];
	const itemsWithGroup = [
	  {value: 'chocolate', label: 'Chocolate', group: 'Sweet'},
	  {value: 'pizza', label: 'Pizza', group: 'Savory'},
	  {value: 'cake', label: 'Cake', group: 'Sweet'},
	  {value: 'chips', label: 'Chips', group: 'Savory'},
	  {value: 'ice-cream', label: 'Ice Cream', group: 'Sweet'}
	];
	const itemsWithIndex = [
	  {value: 'chocolate', label: 'Chocolate', index: 0},
	  {value: 'pizza', label: 'Pizza', index: 1},
	  {value: 'cake', label: 'Cake', index: 2},
	  {value: 'chips', label: 'Chips', index: 3},
	  {value: 'ice-cream', label: 'Ice Cream', index: 4},
	];

	function wait$1(ms) {
	  return new Promise(f => setTimeout(f, ms));
	}

	assert.htmlEqual = (a, b) => {
	  assert.equal(normalizeHtml(a), normalizeHtml(b));
	};

	// tests
	test('with no data creates default elements', async (t) => {
	  const testTemplate = new Select_default({
	    target: testTarget
	  });

	  const select = new Select({
	    target,
	  });

	  t.htmlEqual(target.innerHTML, testTarget.innerHTML);

	  testTemplate.$destroy();
	  select.$destroy();
	});

	test('when isFocused true container adds focused class', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isFocused: true
	    }
	  });

	  t.ok(target.querySelector('.focused'));

	  select.$destroy();
	});

	test('when isFocused changes to true input should focus', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isFocused: false
	    }
	  });

	  const setFocus = () => {
	    select.$set({isFocused: true});
	  };

	  const hasFocused = await focus(select.input, setFocus);
	  t.ok(hasFocused);
	  select.$destroy();
	});

	test('default empty list', async (t) => {
	  const list = new List({
	    target,
	  });

	  t.ok(target.querySelector('.empty'));

	  list.$destroy();
	});

	test('default list with five items', async (t) => {
	  const list = new List({
	    target,
	    props: {
	      items: itemsWithIndex
	    }
	  });

	  t.ok(target.getElementsByClassName('listItem').length);

	  list.$destroy();
	});

	test('should highlight active list item', async (t) => {
	  const list = new List({
	    target,
	    props: {
	      items: itemsWithIndex,
	      selectedValue: {value: 'pizza', label: 'Pizza', index: 1}
	    }
	  });

	  t.ok(target.querySelector('.listItem .active').innerHTML === 'Pizza');

	  list.$destroy();
	});

	test('list scrolls to active item', async (t) => {
	  const extras = [
	    {value: 'chicken-schnitzel', label: 'Chicken Schnitzel', index: 5},
	    {value: 'fried-chicken', label: 'Fried Chicken', index: 6},
	    {value: 'sunday-roast', label: 'Sunday Roast', index: 7},
	  ];
	  const list = new List({
	    target,
	    props: {
	      items: itemsWithIndex.concat(extras),
	      selectedValue: {value: 'sunday-roast', label: 'Sunday Roast'},
	    }
	  });

	  let offsetBounding;
	  const container = target.querySelector('.listContainer');
	  const focusedElemBounding = container.querySelector('.listItem .active');
	  if (focusedElemBounding) {
	    offsetBounding = container.getBoundingClientRect().bottom - focusedElemBounding.getBoundingClientRect().bottom;
	  }

	  t.equal(offsetBounding, 0);
	  list.$destroy();
	});

	test('list scrolls to hovered item when navigating with keys', async (t) => {
	  const extras = [
	    {value: 'chicken-schnitzel', label: 'Chicken Schnitzel', index: 5},
	    {value: 'fried-chicken', label: 'Fried Chicken', index: 6},
	    {value: 'sunday-roast', label: 'Sunday Roast', index: 7},
	  ];
	  const list = new List({
	    target,
	    props: {
	      items: itemsWithIndex.concat(extras)
	    }
	  });

	  const container = target.querySelector('.listContainer');
	  const totalListItems = container.querySelectorAll('.listItem').length;
	  let selectedItemsAreWithinBounds = true;
	  let loopCount = 1;

	  do {
	    await handleKeyboard('ArrowDown');

	    const hoveredItem = container.querySelector('.listItem .hover');
	    const isInViewport = container.getBoundingClientRect().bottom - hoveredItem.getBoundingClientRect().bottom >= 0;

	    selectedItemsAreWithinBounds = selectedItemsAreWithinBounds && isInViewport;

	    loopCount += 1;
	  } while (loopCount < totalListItems);


	  t.ok(selectedItemsAreWithinBounds);
	  list.$destroy();
	});

	test('hover item updates on keyUp or keyDown', async (t) => {
	  const list = new List({
	    target,
	    props: {
	      items: items,
	      activeItemIndex: 0,
	    }
	  });

	  await handleKeyboard('ArrowDown');
	  const focusedElemBounding = target.querySelector('.listItem .hover');
	  t.equal(focusedElemBounding.innerHTML.trim(), `Pizza`);
	  list.$destroy();
	});

	test('on enter active item fires a itemSelected event', async (t) => {
	  const list = new List({
	    target,
	    props: {
	      items: itemsWithIndex
	    }
	  });

	  let selectedValue = undefined;
	  list.$on('itemSelected', event => {
	    selectedValue = event;
	  });

	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  t.equal(JSON.stringify(selectedValue.detail), JSON.stringify({value: 'cake', label: 'Cake', index: 2}));
	  list.$destroy();
	});

	test('on tab active item fires a itemSelected event', async (t) => {
	  const list = new List({
	    target,
	    props: {
	      items: itemsWithIndex
	    }
	  });

	  let selectedValue = undefined;
	  list.$on('itemSelected', event => {
	    selectedValue = event;
	  });

	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Tab'}));
	  t.equal(JSON.stringify(selectedValue.detail), JSON.stringify({value: 'cake', label: 'Cake', index: 2}));
	  list.$destroy();
	});

	test('on selected of current active item does not fire a itemSelected event', async (t) => {
	  const list = new List({
	    target,
	    props: {
	      items: itemsWithIndex,
	      selectedValue: { value: 'chocolate', label: 'Chocolate', index: 0 }
	    }
	  });

	  let itemSelectedFired = false;

	  list.$on('itemSelected', () => {
	    itemSelectedFired = true;
	  });

	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));

	  t.equal(itemSelectedFired, false);
	  list.$destroy();
	});

	test('selected item\'s default view', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      selectedValue: {value: 'chips', label: 'Chips'},
	    }
	  });

	  t.ok(target.querySelector('.selectedItem .selection').innerHTML === 'Chips');
	  select.$destroy();
	});

	test('select view updates with selectedValue updates', async (t) => {
	  const select = new Select({
	    target,
	  });
	  
	  await handleSet(select, {selectedValue: {value: 'chips', label: 'Chips'}});
	  t.ok(target.querySelector('.selectedItem .selection').innerHTML === 'Chips');
	  
	  select.$destroy();
	});

	test('clear wipes selectedValue and updates view', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      selectedValue: {value: 'chips', label: 'Chips'},
	    }
	  });

	  await wait$1(0);
	  await handleSet(select, {selectedValue: undefined});
	  t.ok(!target.querySelector('.selectedItem .selection'));

	  select.$destroy();
	});

	test('clicking on Select opens List', async (t) => {
	  const select = new Select({
	    target,
	  });

	  await querySelectorClick('.selectContainer');
	  const listContainer = document.querySelector('.listContainer');
	  t.ok(listContainer);

	  select.$destroy();
	});

	test('Select opens List populated with items', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  await querySelectorClick('.selectContainer');
	  t.ok(target.querySelector('.listItem'));
	  
	  select.$destroy();
	});

	test('List starts with first item in hover state', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  await querySelectorClick('.selectContainer');
	  t.ok(target.querySelector('.listItem .hover').innerHTML === 'Chocolate');

	  select.$destroy();
	});

	test('List starts with first item in hover state', async (t) => {
	  const testTemplate = new List_default({
	    target: testTarget
	  });

	  const select = new Select({
	    target,
	    props: {
	      items,
	    }
	  });

	  document.querySelector('.selectContainer').click();

	  testTemplate.$destroy();
	  select.$destroy();
	});

	test('select item from list', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	    }
	  });

	  await querySelectorClick('.selectContainer');
	  await handleKeyboard('ArrowDown');
	  await handleKeyboard('ArrowDown');
	  await handleKeyboard('Enter');
	  t.ok(document.querySelector('.selection').innerHTML === 'Cake');

	  select.$destroy();
	});

	test('when listPosition is set to top list should be above the input', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      listOpen: true,
	      listPlacement: 'top'
	    }
	  });

	  await wait$1(0);
	  const distanceOfListBottomFromViewportTop = document.querySelector('.listContainer').getBoundingClientRect().bottom;
	  const distanceOfInputTopFromViewportTop = document.querySelector('.selectContainer').getBoundingClientRect().top;

	  t.ok(distanceOfListBottomFromViewportTop <= distanceOfInputTopFromViewportTop);

	  select.$destroy();
	});

	test('when listPlacement is set to bottom the list should be below the input', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      listOpen: true,
	      listPlacement: 'bottom'
	    }
	  });

	  await wait$1(0);
	  const distanceOfListTopFromViewportTop = document.querySelector('.listContainer').getBoundingClientRect().top;
	  const distanceOfInputBottomFromViewportTop = document.querySelector('.selectContainer').getBoundingClientRect().bottom;

	  t.ok(distanceOfListTopFromViewportTop >= distanceOfInputBottomFromViewportTop);

	  select.$destroy();
	});

	test('blur should close list and remove focus from select', async (t) => {
	  const div = document.createElement('div');
	  document.body.appendChild(div);

	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  select.$set({isFocused: true});
	  div.click();
	  div.remove();
	  t.ok(!document.querySelector('.listContainer'));
	  t.ok(document.querySelector('.selectContainer input') !== document.activeElement);
	  select.$destroy();
	});

	test('selecting item should close list but keep focus on select', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  document.querySelector('.selectContainer').click();
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  await wait$1(0);
	  t.ok(!document.querySelector('.listContainer'));
	  t.ok(document.querySelector('.selectContainer.focused'));
	  select.$destroy();
	});

	test('clicking Select with selected item should open list with item listed as active', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  document.querySelector('.selectContainer').click();
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  await wait$1(0);
	  document.querySelector('.selectContainer').click();
	  await wait$1(0);
	  t.ok(document.querySelector('.listItem .hover').innerHTML === 'Cake');
	  select.$destroy();
	});

	test('focus on Select input updates focus state', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  document.querySelector('.selectContainer input').focus();
	  t.ok(select.isFocused);
	  select.$destroy();
	});

	test('key up and down when Select focused opens list', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  document.querySelector('.selectContainer input').focus();
	  await wait$1(0);
	  t.ok(select.isFocused);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  await wait$1(0);
	  t.ok(document.querySelector('.listContainer'));

	  select.$destroy();
	});

	test('List should keep width of parent Select', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isFocused: true
	    }
	  });

	  document.querySelector('.selectContainer input').focus();
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  await wait$1(0);
	  const selectContainer = document.querySelector('.selectContainer');
	  const listContainer = document.querySelector('.listContainer');
	  t.equal(selectContainer.offsetWidth, listContainer.offsetWidth);

	  select.$destroy();
	});

	test('Placeholder text should reappear when List is closed', async (t) => {
	  const div = document.createElement('div');
	  document.body.appendChild(div);

	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  document.querySelector('.selectContainer').click();
	  div.click();
	  div.remove();
	  const selectInput = document.querySelector('.selectContainer input');
	  t.equal(selectInput.attributes.placeholder.value, 'Select...');

	  select.$destroy();
	});

	test('typing in Select filter will hide selected Item', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  document.querySelector('.selectContainer').click();
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  select.$set({filterText: 'potato'});
	  t.ok(!document.querySelector('.selectContainer .selectedValue'));

	  select.$destroy();
	});

	test('clearing selected item closes List if open', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  document.querySelector('.selectContainer').click();
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  await wait$1(0);
	  select.handleClear();
	  await wait$1(0);
	  t.ok(!document.querySelector('.listContainer'));

	  select.$destroy();
	});

	test('closing List clears Select filter text', async (t) => {
	  const div = document.createElement('div');
	  document.body.appendChild(div);

	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  document.querySelector('.selectContainer').click();
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  select.$set({filterText: 'potato'});
	  div.click();
	  div.remove();
	  const selectInput = document.querySelector('.selectContainer input');
	  t.equal(selectInput.attributes.placeholder.value, 'Select...');

	  select.$destroy();
	});

	test('closing List clears Select filter text', async (t) => {
	  const div = document.createElement('div');
	  document.body.appendChild(div);

	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  document.querySelector('.selectContainer').click();
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  select.$set({filterText: 'potato'});
	  div.click();
	  div.remove();
	  const selectInput = document.querySelector('.selectContainer input');
	  t.equal(selectInput.attributes.placeholder.value, 'Select...');

	  select.$destroy();
	});

	test('closing List item clears Select filter text', async (t) => {
	  const div = document.createElement('div');
	  document.body.appendChild(div);

	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  document.querySelector('.selectContainer').click();
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  select.$set({filterText: 'potato'});
	  div.click();
	  div.remove();
	  const selectInput = document.querySelector('.selectContainer input');
	  t.equal(selectInput.attributes.placeholder.value, 'Select...');

	  select.$destroy();
	});

	test('typing while Select is focused populates Select filter text', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  select.$set({isFocused: true});
	  document.querySelector('.selectContainer input').blur();
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'e'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 's'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 't'}));
	  // KeyboardEvent not firing in svelte - not sure why, manual test seems to work

	  select.$destroy();
	});

	test('Select input placeholder wipes while item is selected', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      selectedValue: {name: 'Item #2'},
	    }
	  });

	  const selectInput = document.querySelector('.selectContainer input');
	  t.equal(selectInput.attributes.placeholder.value, '');

	  select.$destroy();
	});

	test('Select listOpen state controls List', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      listOpen: true
	    }
	  });

	  await wait$1(0);
	  t.ok(document.querySelector('.listContainer'));
	  await handleSet(select, {listOpen: false});
	  t.ok(!document.querySelector('.listContainer'));

	  select.$destroy();
	});

	test('clicking Select toggles List open state', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  t.ok(!document.querySelector('.listContainer'));
	  await querySelectorClick('.selectContainer');
	  t.ok(document.querySelector('.listContainer'));
	  await querySelectorClick('.selectContainer');
	  t.ok(!document.querySelector('.listContainer'));

	  select.$destroy();
	});

	test('Select filter text filters list', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  await wait$1(0);
	  t.ok(select.filteredItems.length === 5);
	  await handleSet(select, {filterText: 'Ice'});
	  t.ok(select.filteredItems.length === 1);

	  select.$destroy();
	});

	test('Select filter text filters list with itemFilter', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      itemFilter: (label, filterText, option) => label === 'Ice Cream'
	    }
	  });

	  await wait$1(0);
	  t.ok(select.filteredItems.length === 5);
	  await handleSet(select, {filterText: 'cream ice'});
	  t.ok(select.filteredItems.length === 1);

	  select.$destroy();
	});

	test('Typing in the Select filter opens List', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isFocused: true
	    }
	  });

	  await handleSet(select, {filterText: '5'});
	  t.ok(document.querySelector('.listContainer'));
	  select.$destroy();
	});

	test('While filtering, the first item in List should receive hover class', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isFocused: true
	    }
	  });

	  await handleSet(select, {filterText: 'I'});
	  t.ok(document.querySelector('.listItem .hover'));
	  select.$destroy();
	});

	test('Select container styles can be overridden', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      selectedValue: {name: 'Item #2'},
	      containerStyles: `padding-left: 40px;`
	    }
	  });

	  t.equal(document.querySelector('.selectContainer').style.cssText, `padding-left: 40px;`);
	  select.$destroy();
	});

	test('Select can be disabled', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isDisabled: true,
	    }
	  });

	  t.ok(document.querySelector('.selectContainer.disabled'));

	  select.$destroy();
	});

	test('Select List closes when you click enter', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isFocused: true
	    }
	  });

	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));


	  select.$destroy();
	});

	test('tabbing should move between tabIndexes and others Selects', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isFocused: false
	    }
	  });

	  const other = new Select({
	    target: extraTarget,
	    props: {
	      items,
	      isFocused: false
	    }
	  });

	  // window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Tab'}));
	  // TAB not working from Puppeteer - not sure why.

	  select.$destroy();
	  other.$destroy();
	});

	test(`shouldn't be able to clear a disabled Select`, async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isDisabled: true,
	      selectedValue: {name: 'Item #4'}
	    }
	  });


	  t.ok(!document.querySelector('.clearSelect'));

	  select.$destroy();
	});

	test(`two way binding between Select and it's parent component`, async (t) => {
	  const parent = new ParentContainer({
	    target,
	    props: {
	      items,
	      selectedValue: {value: 'chips', label: 'Chips'},
	    }
	  });

	  t.equal(document.querySelector('.selection').innerHTML, document.querySelector('.result').innerHTML);

	  parent.$set({
	    selectedValue: {value: 'ice-cream', label: 'Ice Cream'},
	  });

	  t.equal(document.querySelector('.selection').innerHTML, document.querySelector('.result').innerHTML);
	  document.querySelector('.selectContainer').click();
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  t.equal(document.querySelector('.selection').innerHTML, document.querySelector('.result').innerHTML);

	  parent.$destroy();
	});

	test(`show ellipsis for overflowing text in a List item`, async (t) => {
	  const longest = 'super super super super super super super super super super super super super super super super super super super super super super super super super super super super loooooonnnng name';

	  target.style.width = '300px';

	  const list = new List({
	    target,
	    props: {
	      items: [
	        {
	          index: 0,
	          label: longest
	        },
	        {
	          index: 1,
	          label: 'Not so loooooonnnng name'
	        }
	      ]
	    }
	  });

	  const first = document.querySelector('.listItem:first-child .item');
	  const last = document.querySelector('.listItem:last-child .item');

	  t.ok(first.scrollWidth > first.clientWidth);
	  t.ok(last.scrollWidth === last.clientWidth);

	  list.$destroy();
	  target.style.width = '';
	});


	test('clicking between Selects should close and blur other Select', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isFocused: false
	    }
	  });

	  const other = new Select({
	    target: extraTarget,
	    props: {
	      items,
	      isFocused: false
	    }
	  });

	  await querySelectorClick('.selectContainer');
	  t.ok(select.list);
	  await querySelectorClick('#extra .selectContainer');
	  t.ok(!select.list);
	  t.ok(other.list);

	  select.$destroy();
	  other.$destroy();
	});

	test('if only one item in list it should have hover state', async (t) => {
	  const list = new List({
	    target,
	    props: {
	      items: [{
	        index: 0,
	        name: 'test one'
	      }]
	    }
	  });

	  t.ok(document.querySelector('.listItem .item').classList.contains('hover'));

	  list.$destroy();
	});

	test(`hovered item in a filtered list shows hover state`, async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  select.$set({filterText: 'i'});

	  // const lastItem = document.querySelector('.listItem:last-child');
	  // hover item and check for hover state

	  t.ok(true);

	  select.$destroy();
	});

	test(`data shouldn't be stripped from item - currently only saves name`, async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items
	    }
	  });

	  await querySelectorClick('.selectContainer');
	  await querySelectorClick('.listItem');
	  t.equal(JSON.stringify(select.selectedValue), JSON.stringify({value: 'chocolate', label: 'Chocolate'}));

	  select.$destroy();
	});

	test('should not be able to clear when clearing is disabled', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isClearable: false
	    }
	  });

	  document.querySelector('.selectContainer').click();
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));

	  t.ok(!document.querySelector('.clearSelect'));

	  select.$destroy();
	});

	test('should not be able to search when searching is disabled', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isSearchable: false
	    }
	  });

	  const selectInput = document.querySelector('.selectContainer input');
	  t.ok(selectInput.attributes.readonly);

	  select.$destroy();
	});

	test('should display indicator when searching is disabled', async (t) => {
	  const div = document.createElement('div');
	  document.body.appendChild(div);

	  const select = new Select({
	    target,
	    props: {
	      items,
	      isSearchable: false
	    }
	  });

	  t.ok(document.querySelector('.indicator'));

	  select.$destroy();
	});

	test('placeholder should be prop value', async (t) => {
	  const div = document.createElement('div');
	  document.body.appendChild(div);

	  const placeholder = 'Test placeholder value';

	  const select = new Select({
	    target,
	    props: {
	      items: itemsWithGroup,
	      placeholder
	    }
	  });

	  const selectInput = document.querySelector('.selectContainer input');
	  t.equal(selectInput.attributes.placeholder.value, placeholder);

	  select.$destroy();
	});

	test('should display spinner when waiting is enabled', async (t) => {
	  const div = document.createElement('div');
	  document.body.appendChild(div);

	  const select = new Select({
	    target,
	    props: {
	      items,
	      isWaiting: true
	    }
	  });

	  t.ok(document.querySelector('.spinner'));

	  select.$destroy();
	});

	test('inputStyles prop applies css to select input', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      selectedValue: {value: 'pizza', label: 'Pizza'},
	      inputStyles: `padding-left: 40px;`
	    }
	  });

	  t.equal(document.querySelector('.selectContainer input').style.cssText, `padding-left: 40px;`);
	  select.$destroy();
	});

	test('items should be grouped by groupBy expression', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      listOpen: true,
	      items: itemsWithGroup,
	      groupBy
	    }
	  });

	  function groupBy(item) {
	    return item.group;
	  }

	  await wait$1(0);

	  const groupedListItems = select.list.items;

	  groupedListItems.forEach((item, itemIndex) => {
	    if(itemIndex > 0) {
	      const prevItem = groupedListItems[itemIndex - 1];
	      const prevItemIsHeaderOrInSameGroup = item.group === (prevItem.isGroupHeader ? prevItem.value : prevItem.group);
	      t.ok(item.isGroupHeader || prevItemIsHeaderOrInSameGroup);
	    }
	  });
	  
	  select.$destroy();
	});


	test('clicking group header should not make a selected', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      listOpen: true,
	      items: itemsWithGroup,
	      groupBy: (item) => item.group
	    }
	  });
	  
	  await wait$1(0);
	  await querySelectorClick('.listGroupTitle');

	  t.equal(select.selectedValue, undefined);

	  select.$destroy();
	});

	test('when groupBy, no active item and keydown enter is fired then list should close without selecting item', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      listOpen: true,
	      items: itemsWithGroup,
	      groupBy: (item) => item.group
	    }
	  });
	  
	  await wait$1(0);
	  await querySelectorClick('.selectContainer');
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  t.equal(select.selectedValue, undefined);

	  select.$destroy();
	});

	test('when isGroupHeaderSelectable clicking group header should select createGroupHeaderItem(groupValue,item)', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      listOpen: true,
	      items: itemsWithGroup,
	      isGroupHeaderSelectable: true,
	      groupBy,
	      createGroupHeaderItem
	    }
	  });

	  function groupBy(item) {
	    return item.group;
	  }

	  function createGroupHeaderItem(groupValue, item) {
	    return {
	      label: `XXX ${groupValue} XXX ${item.label}`
	    };
	  }

	  await querySelectorClick('.selectContainer');

	  const groupHeaderItem = select.list.items[0];
	  const groupItem = select.list.items.find((item) => {
	    return item.group === groupHeaderItem.id;
	  });

	  await querySelectorClick('.listItem');

	  t.ok(select.selectedValue.isGroupHeader);
	  t.equal(select.selectedValue.label, createGroupHeaderItem(groupBy(groupItem), groupItem).label);

	  select.$destroy();
	});

	test('group headers label should be created by getGroupHeaderLabel(item)', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      listOpen: true,
	      items: itemsWithGroup,
	      groupBy,
	      getGroupHeaderLabel
	    }
	  });

	  function groupBy(item) {
	    return item.group;
	  }

	  function getGroupHeaderLabel(item) {
	    return `Group label is ${item.id}`;
	  }

	  await querySelectorClick('.selectContainer');

	  const groupHeaderItem = select.list.items[0];

	  t.equal(target.querySelector('.listGroupTitle').textContent, getGroupHeaderLabel(groupHeaderItem));

	  select.$destroy();
	});

	test('groups should be sorted by expression', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      listOpen: true,
	      items: itemsWithGroup,
	      groupBy: (item) => item.group,
	      groupFilter: (groups) => groups.reverse()
	    }
	  });

	  await wait$1();

	  t.ok(target.querySelector('.listGroupTitle').textContent.trim() === 'Savory');
	  t.ok(target.querySelector('.listItem').textContent.trim() === 'Pizza');

	  select.$destroy();
	});

	test('when isMulti is true show each item in selectedValue', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [
	        {value: 'pizza', label: 'Pizza'},
	        {value: 'chips', label: 'Chips'},
	      ],
	    }
	  });

	  const all = target.querySelectorAll('.multiSelectItem .multiSelectItem_label');
	  t.ok(all[0].innerHTML === 'Pizza');
	  t.ok(all[1].innerHTML === 'Chips');

	  select.$destroy();
	});

	test('when isMulti is true and selectedValue is undefined show placeholder text', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: undefined
	    }
	  });

	  t.ok(!target.querySelector('.multiSelectItem'));

	  select.$destroy();
	});

	test('when isMulti is true clicking item in List will populate selectedValue', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: undefined
	    }
	  });

	  await querySelectorClick('.selectContainer');
	  await querySelectorClick('.listItem');

	  t.equal(JSON.stringify(select.selectedValue), JSON.stringify([{value: 'chocolate', label: 'Chocolate'}]));

	  select.$destroy();
	});

	test('when isMulti is true items in selectedValue will not appear in List', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [{value: 'chocolate', label: 'Chocolate'}]
	    }
	  });

	  t.equal(JSON.stringify(select.filteredItems), JSON.stringify([
	    {value: 'pizza', label: 'Pizza'},
	    {value: 'cake', label: 'Cake'},
	    {value: 'chips', label: 'Chips'},
	    {value: 'ice-cream', label: 'Ice Cream'}
	  ]));

	  select.$destroy();
	});

	test('when isMulti is true both selectedValue and filterText filters List', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      listOpen: true,
	      isMulti: true,
	      items,
	      filterText: 'Pizza',
	      selectedValue: [{value: 'chocolate', label: 'Chocolate'}]
	    }
	  });

	  t.equal(JSON.stringify(select.filteredItems), JSON.stringify([
	    {value: 'pizza', label: 'Pizza'}
	  ]));

	  select.$destroy();
	});

	test('when isMulti is true clicking X on a selected item will remove it from selectedValue', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [{value: 'chocolate', label: 'Chocolate'}, {value: 'pizza', label: 'Pizza'}]
	    }
	  });

	  document.querySelector('.multiSelectItem_clear').click();
	  t.equal(JSON.stringify(select.selectedValue), JSON.stringify([{value: 'pizza', label: 'Pizza'}]));

	  select.$destroy();
	});

	test('when isMulti is true and all selected items have been removed then placeholder should show and clear all should hide', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [{value: 'chocolate', label: 'Chocolate'}]
	    }
	  });

	  document.querySelector('.multiSelectItem_clear').click();

	  select.$destroy();
	});

	test('when isMulti is true and items are selected then clear all should wipe all selected items', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [{value: 'chocolate', label: 'Chocolate'}, {value: 'pizza', label: 'Pizza'}]
	    }
	  });

	  document.querySelector('.clearSelect').click();
	  t.equal(select.selectedValue, undefined);

	  select.$destroy();
	});

	test('when isMulti and groupBy is active then items should be selectable', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items: itemsWithGroup,
	      groupBy: (item) => item.group
	    }
	  });

	  target.style.maxWidth = '400px';
	  await querySelectorClick('.selectContainer');
	  await querySelectorClick('.listItem');
	  t.equal(JSON.stringify(select.selectedValue), JSON.stringify([{"isGroupItem":true,"value":"chocolate","label":"Chocolate","group":"Sweet"}]));

	  select.$destroy();
	});

	test('when isMulti and selected items reach edge of container then Select height should increase and selected items should wrap to new line', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items
	    }
	  });

	  target.style.maxWidth = '250px';
	  t.ok(document.querySelector('.selectContainer').scrollHeight === 42);
	  await handleSet(select, {selectedValue: [{value: 'chocolate', label: 'Chocolate'}, {value: 'pizza', label: 'Pizza'}]});
	  t.ok(document.querySelector('.selectContainer').scrollHeight > 44);
	  select.$destroy();
	});

	test('when isMulti and selectedValue is populated then navigating with LeftArrow updates activeSelectedValue', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [{value: 'chocolate', label: 'Chocolate'}, {value: 'pizza', label: 'Pizza'}, {value: 'chips', label: 'Chips'},],
	      isFocused: true
	    }
	  });

	  target.style.maxWidth = '100%';
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowLeft'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowLeft'}));
	  t.ok(select.$capture_state().activeSelectedValue === 1);

	  select.$destroy();
	});

	test('when isMulti and selectedValue is populated then navigating with ArrowRight updates activeSelectedValue', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [{value: 'chocolate', label: 'Chocolate'}, {value: 'pizza', label: 'Pizza'}, {value: 'chips', label: 'Chips'},],
	      isFocused: true
	    }
	  });

	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowLeft'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowLeft'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowLeft'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowRight'}));
	  t.ok(select.$capture_state().activeSelectedValue === 1);

	  select.$destroy();
	});

	test('when isMulti and selectedValue has items and list opens then first item in list should be active', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      isFocused: true
	    }
	  });

	  await querySelectorClick('.selectContainer');
	  await querySelectorClick('.listItem');
	  await handleKeyboard('ArrowDown');

	  t.ok(document.querySelector('.listItem .hover'));

	  select.$destroy();
	});

	test('when isMulti, isDisabled, and selectedValue has items then items should be locked', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      isDisabled: true,
	      selectedValue: [{value: 'chocolate', label: 'Chocolate'}],
	    }
	  });

	  t.ok(document.querySelector('.multiSelectItem.disabled'));

	  select.$destroy();
	});

	test('when getValue method is set should use that key to update selectedValue', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items: [{id: 0, label: 'ONE'}, {id: 1, label: 'TWO'}],
	      selectedValue: {id: 0, label: 'ONE'},
	      optionIdentifier: 'id'
	    }
	  });

	  t.ok(select.selectedValue.id === 0);
	  await querySelectorClick('.selectContainer');
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  t.ok(select.selectedValue.id === 1);

	  select.$destroy();
	});

	test('when loadOptions method is supplied and filterText has length then items should populate via promise resolve', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      getOptionLabel: (option) => option.name,
	      loadOptions: getPosts,
	      optionIdentifier: 'id',
	      Item: CustomItem,
	      Selection: CustomItem
	    }
	  });

	  select.$set({filterText: 'Juniper'});
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));

	  select.$destroy();
	});

	test('when noOptionsMessage is set and there are no items then show message', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      noOptionsMessage: 'SO SO SO SCANDALOUS',
	      isFocused: true
	    }
	  });

	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  await wait$1(0);
	  t.ok(document.querySelector('.empty').innerHTML === 'SO SO SO SCANDALOUS');

	  select.$destroy();
	});

	test('when getSelectionLabel method is supplied and selectedValue are no items then display result of getSelectionLabel', async (t) => {
	 const select = new Select({
	    target,
	    props: {
	      getSelectionLabel: (option) => option.notLabel,
	      selectedValue: {notLabel: 'This is not a label', value: 'not important'},
	    }
	  });


	  t.ok(document.querySelector('.selection').innerHTML === 'This is not a label');

	  select.$destroy();
	});

	test('when getOptionLabel method and items is supplied then display result of getOptionLabel for each option', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      getOptionLabel: (option) => option.notLabel,
	      isFocused: true,
	      items: [{notLabel: 'This is not a label', value: 'not important #1'}, {notLabel: 'This is not also not a label', value: 'not important #2'}],
	    }
	  });

	  await handleKeyboard('ArrowDown');
	  t.ok(document.querySelector('.item').innerHTML === 'This is not a label');

	  select.$destroy();
	});

	test('when getOptionLabel method and items is supplied then display result of getOptionLabel for each option', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      getOptionLabel: (option) => option.notLabel,
	      isFocused: true,
	      items: [{notLabel: 'This is not a label', value: 'not important #1'}, {notLabel: 'This is not also not a label', value: 'not important #2'}],
	    }
	  });

	  await handleKeyboard('ArrowDown');
	  t.ok(document.querySelector('.item').innerHTML === 'This is not a label');

	  select.$destroy();
	});


	test('when a custom Item component is supplied then use to display each item', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      Item: CustomItem,
	      getOptionLabel: (option) => option.name,
	      isFocused: true,
	      items: [{
	        image_url: 'https://images.punkapi.com/v2/keg.png',
	        name: 'A Name', tagline: 'A tagline', abv: 'A abv'}],
	    }
	  });

	  await handleKeyboard('ArrowDown');
	  t.ok(document.querySelector('.customItem_name').innerHTML === 'A Name');

	  select.$destroy();
	});

	test('when a custom Selection component is supplied then use to display selection', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      Item: CustomItem,
	      Selection: CustomItem,
	      getOptionLabel: (option) => option.name,
	      isFocused: true,
	      items: [{
	        image_url: 'https://images.punkapi.com/v2/keg.png',
	        name: 'A Name', tagline: 'A tagline', abv: 'A abv'}],
	    }
	  });

	  await handleKeyboard('ArrowDown');
	  await handleKeyboard('Enter');

	  t.ok(document.querySelector('.customItem_name').innerHTML === 'A Name');

	  select.$destroy();
	});

	test('when loadOptions method is supplied, isMulti is true and filterText has length then items should populate via promise resolve', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      getOptionLabel: (option) => option.name,
	      getSelectionLabel: (option) => option.name,
	      loadOptions: getPosts,
	      optionIdentifier: 'id',
	      Item: CustomItem,
	      isMulti: true
	    }
	  });

	  await wait$1(0);
	  await handleSet(select, {filterText: 'Juniper'});
	  await wait$1(600);
	  await handleKeyboard('ArrowDown');
	  await handleKeyboard('Enter');
	  t.ok(document.querySelector('.multiSelectItem_label').innerHTML === 'Juniper Wheat Beer');
	  select.$destroy();
	});

	test('when getSelectionLabel contains HTML then render the HTML', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      selectedValue: items[0],
	      getSelectionLabel: (option) => `<p>${option.label}</p>`,
	    }
	  });

	  t.ok(document.querySelector('.selection').innerHTML === '<p>Chocolate</p>');

	  select.$destroy();
	});

	test('when getOptionLabel contains HTML then render the HTML', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      getOptionLabel: (option) => `<p>${option.label}</p>`,
	      isFocused: true
	    }
	  });

	  await handleKeyboard('ArrowDown');
	  t.ok(document.querySelector('.item').innerHTML === '<p>Chocolate</p>');

	  select.$destroy();
	});

	test('when isMulti is true, selectedValue populated and arrowLeft is pressed then no items in list should be active', async (t) => {
	  const selectMultiSelected = new Select_multiSelected({
	    target: testTarget,
	  });

	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [
	        {value: 'pizza', label: 'Pizza'},
	        {value: 'chips', label: 'Chips'},
	      ],
	      isFocused: true

	    }
	  });

	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowLeft'}));
	  t.ok(!document.querySelector('.hover'));
	  select.$destroy();
	  selectMultiSelected.$destroy();
	});

	test('when hideEmptyState true then do not show "no options" div ', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      listOpen: true,
	      filterText: 'x',
	      hideEmptyState: true
	    }
	  });

	  await wait$1(0);

	  t.ok(!document.querySelector('.empty'));

	  select.$destroy();
	});

	test('when selectedValue changes then select event should fire', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	    }
	  });

	  let selectEvent = undefined;

	  select.$on('select', event => {
	    selectEvent = event;
	  });

	  await handleSet(select, {isFocused: true});
	  await handleKeyboard('ArrowDown');
	  await handleKeyboard('Enter');

	  t.ok(selectEvent);

	  select.$destroy();
	});

	test('when selectedValue is cleared the clear event is fired', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      selectedValue: items[0],
	    }
	  });

	  let clearEvent = false;
	  select.$on('clear', () => {
	    clearEvent = true;
	  });

	  document.querySelector('.clearSelect').click();
	  t.ok(clearEvent);

	  select.$destroy();
	});

	test('when multi item is cleared the clear event is fired with removed item', async (t) => {
	  const itemToRemove = items[0];

	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [itemToRemove]
	    }
	  });

	  let removedItem;

	  select.$on('clear', (event) => {
	    removedItem = event.detail;
	  });

	  document.querySelector('.multiSelectItem_clear').click();
	  t.equal(JSON.stringify(removedItem), JSON.stringify(itemToRemove));

	  select.$destroy();
	});

	test('when items in list filter or update then first item in list should highlight', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isFocused: true
	    }
	  });

	  await handleKeyboard('ArrowDown');
	  await handleKeyboard('ArrowDown');
	  await handleKeyboard('ArrowDown');
	  
	  t.ok(document.querySelector('.hover').innerHTML === 'Cake');
	  await handleSet(select, {filterText: 'c'});
	  t.ok(document.querySelector('.hover').innerHTML === 'Chocolate');

	  select.$destroy();
	});

	test('when item is selected or state changes then check selectedValue[optionIdentifier] has changed before firing "select" event', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      selectedValue: {value: 'cake', label: 'Cake'}
	    }
	  });

	  let item = undefined;

	  select.$on('select', () => {
	    item = true;
	  });

	  await handleSet(select, {selectedValue: {value: 'cake', label: 'Cake'}});

	  t.ok(!item);
	  select.$destroy();
	});

	test('when isMulti and item is selected or state changes then check selectedValue[optionIdentifier] has changed before firing "select" event', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [
	        {value: 'pizza', label: 'Pizza'},
	        {value: 'chips', label: 'Chips'},
	      ],
	    }
	  });

	  let item = undefined;

	  select.$on('select', () => {
	    item = true;
	  });

	  await handleSet(select, {selectedValue: [{value: 'pizza', label: 'Pizza'},{value: 'chips', label: 'Chips'}]});
	  t.ok(!item);
	  item = false;
	  await handleSet(select, {selectedValue: [{value: 'pizza', label: 'Pizza'}]});
	  
	  t.ok(item);
	  select.$destroy();
	});

	test('when isFocused turns to false then check Select is no longer in focus', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isFocused: true,
	      items,
	    }
	  });

	  const selectSecond = new Select({
	    target: extraTarget,
	    props: {
	      isFocused: false,
	      items,
	    }
	  });

	  select.$on('select', () => {
	    setTimeout(() => {
	      select.$set({
	        isFocused: false,
	      });
	    }, 0);
	  
	    selectSecond.$set({
	      isFocused: true
	    });
	  });

	  await handleSet(select, {selectedValue: {value: 'pizza', label: 'Pizza'}});


	  await wait$1(0);

	  t.ok(selectSecond.isFocused);
	  t.ok(!select.isFocused);  

	  selectSecond.$destroy();
	  select.$destroy();
	});

	test('when items and loadOptions method are both supplied then fallback to items until filterText changes', async (t) => {
	  const items = [{name: 'test1', id: 0}, {name: 'test2', id: 1}, {name: 'test3', id: 2}];

	  const select = new Select({
	    target,
	    props: {
	      getOptionLabel: (option) => option.name,
	      getSelectionLabel: (option) => option.name,
	      loadOptions: getPosts,
	      optionIdentifier: 'id',      
	      items,
	      isFocused: true,
	      listOpen: true
	    }
	  });

	  select.$on('state', ({current, changed}) => {
	    if (changed.filterText && current.filterText === '' && !current.selectedValue) {
	      select.$set({
	        items
	      });
	    }
	  });

	  await wait$1(0);
	  t.ok(document.querySelector('.item').innerHTML === 'test1');
	  await handleSet(select, {filterText: 'Juniper'});
	  await wait$1(500);
	  t.ok(document.querySelector('.item').innerHTML === 'Juniper Wheat Beer');
	  await handleSet(select, {filterText: ''});
	  t.ok(document.querySelector('.item').innerHTML === 'test1');

	  select.$destroy();
	});

	test('when items is just an array of strings then render list', async (t) => {
	  const items = ['one', 'two', 'three'];

	  const select = new Select({
	    target,
	    props: {
	      items,
	      listOpen: true
	    }
	  });

	  await wait$1(0);
	  t.ok(document.querySelector('.item').innerHTML === 'one');

	  select.$destroy();
	});

	test('when selectedValue just a string then selectedValue should render', async (t) => {
	  const items = ['one', 'two', 'three'];

	  const select = new Select({
	    target,
	    props: {
	      items,
	      selectedValue: {value: 'one', label: 'one', index: 0}
	    }
	  });

	  t.ok(document.querySelector('.selection').innerHTML === 'one');
	  select.$destroy();
	});

	test('when isVirtualList then render list', async (t) => {
	  function fill(len, fn) {
	    return Array(len).fill().map((_, i) => fn(i));
	  }

	  const items = fill(10000, (i) => {
	      const name = nameyMcnameface();
	      return name
	  });

	  const select = new Select({
	    target,
	    props: {
	      items,
	      isVirtualList: true,
	      listOpen: true
	    }
	  });

	  await wait$1(0);
	  t.ok(document.querySelector('.listItem'));

	  select.$destroy();
	});

	test('when isVirtualList and filterText changes then rendered list scrolls to top', async (t) => {
	  function fill(len, fn) {
	    return Array(len).fill().map((_, i) => fn(i));
	  }

	  const items = fill(10000, (i) => {
	      const name = nameyMcnameface();
	      return name
	  });

	  const select = new Select({
	    target,
	    props: {
	      items,
	      isVirtualList: true,
	      listOpen: true
	    }
	  });

	  await wait$1(0);
	  const virtual = document.querySelector('svelte-virtual-list-viewport');
	  virtual.scrollTop = 120000;

	  select.$set({
	    filterText: 'swift'
	  });

	  await wait$1(0);
	  t.ok(virtual.scrollTop === 0);

	  select.$destroy();
	});

	test('when loadOptions method is supplied but filterText is empty then do not run loadOptions and clean list', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      getOptionLabel: (option) => option.name,
	      loadOptions: getPosts,
	      optionIdentifier: 'id',
	      Item: CustomItem,
	      Selection: CustomItem
	    }
	  });

	  await wait$1(0);
	  select.$set({filterText: 'Juniper'});
	  await wait$1(500);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  t.ok(document.querySelector('.customItem_name').innerHTML === 'Juniper Wheat Beer');
	  select.$set({selectedValue: undefined, filterText: ''});  
	  await wait$1(0);
	  select.$set({listOpen: true});
	  await wait$1(0);
	  t.ok(document.querySelector('.empty'));

	  select.$destroy();
	});

	test('when isMulti and selectedValue has items then check each item is unique', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      selectedValue: [
	        {value: 'pizza', label: 'Pizza'},
	        {value: 'pizza', label: 'Pizza'},
	        {value: 'cake', label: 'Cake'},
	      ],
	    }
	  });

	  t.ok(select.selectedValue.length === 2);

	  select.$destroy();
	});

	test('when isMulti and textFilter has length then enter should select item', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      isFocused: true,
	      filterText: 'p',
	      listOpen: true
	    }
	  });

	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  t.ok(select.selectedValue[0].value === 'pizza');

	  select.$destroy();
	});

	test('when isMulti and textFilter has length and no items in list then enter should do nothing', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      isFocused: true,
	      filterText: 'zc',
	      listOpen: true
	    }
	  });

	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  t.ok(select.selectedValue === undefined);

	  select.$destroy();
	});

	test('When isMulti and no selected item then delete should do nothing', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items,
	      isFocused: true,
	      listOpen: true
	    }
	  });

	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Backspace'}));
	  t.ok(select.listOpen === true);

	  select.$destroy();
	});

	test('When list is open, filterText applied and Enter/Tab key pressed should select and show highlighted value', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      listOpen: true,
	      isFocused: true,
	      filterText: 'A5',
	      items: ['A5', 'test string', 'something else']
	    }
	  });

	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'ArrowDown'}));
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  t.equal(select.selectedValue.value, 'A5');
	  await wait$1(0);
	  t.ok(target.querySelector('.selectedItem .selection').innerHTML === 'A5');

	  select.$destroy();
	});


	test('When inputAttributes is supplied each attribute is placed on the Select input field', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      inputAttributes: { id: 'testId' }
	    }
	  });

	  t.ok(document.getElementById('testId'));

	  select.$destroy();
	});

	test('when items and selectedValue supplied as just strings then selectedValue should render correctly', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items: ['Pizza', 'Chocolate', 'Crisps'],
	      selectedValue: 'Pizza'
	    }
	  });

	  t.equal(document.querySelector('.selectedItem .selection').innerHTML, 'Pizza');

	  select.$destroy();
	});

	test('when isMulti with items and selectedValue supplied as just strings then selectedValue should render correctly', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items: ['Pizza', 'Chocolate', 'Crisps'],
	      selectedValue: ['Pizza']
	    }
	  });

	  t.equal(document.querySelector('.multiSelectItem_label').innerHTML, 'Pizza');

	  select.$destroy();
	});

	test('when isMulti, groupBy and selectedValue are supplied then list should be filtered', async (t) => {
	  let _items = [
	    { id: 1, name: "Foo", group: "first" },
	    { id: 2, name: "Bar", group: "second" },
	    { id: 3, name: "Baz", group: "second" },
	    { id: 4, name: "Qux", group: "first" }
	  ];

	  const select = new Select({
	    target,
	    props: {
	      isMulti: true,
	      items: _items,
	      groupBy: (item) => item.group,
	      optionIdentifier: 'id',
	      getSelectionLabel: (item) => item.name, 
	      getOptionLabel: (item) => item.name,  
	      selectedValue: [{ id: 2, name: "Bar", group: "second" }],
	      listOpen: true
	    }
	  });

	  t.ok(!select.filteredItems.find(item => item.name === 'Bar'));

	  select.$destroy();
	});

	test('When isCreatable disabled, creator is not displayed', async (t) => {
	  const filterText = 'abc';

	  const select = new Select({
	    target,
	    props: {
	      items,
	      isFocused: true,
	      listOpen: true
	    }
	  });

	  select.$set({ filterText });

	  await wait$1(0);

	  t.ok(document.querySelector('.listContainer > .empty'));

	  select.$destroy();
	});

	test('When isCreatable enabled, creator displays getOptionLabel for isCreator', async (t) => {
	  const filterText = 'abc_XXXX';

	  function getOptionLabel(item, filterText) {
	    return item.isCreator ? `Wanna add ${filterText}?`: item.label;
	  }

	  const creatorItem = { label: filterText, value: filterText, isCreator: true };

	  const select = new Select({
	    target,
	    props: {
	      items,
	      isCreatable: true,
	      isFocused: true,
	      listOpen: true,
	      getOptionLabel
	    }
	  });

	  await wait$1(0);
	  select.$set({ filterText });
	  await wait$1(0);
	  const listItems = document.querySelectorAll('.listContainer > .listItem');
	  t.equal(listItems[listItems.length - 1].querySelector('.item').innerHTML, getOptionLabel(creatorItem, filterText));

	  select.$destroy();
	});

	test('When isCreatable enabled, creator is not displayed when duplicate item value in item list', async (t) => {
	  const dupeValueForCheck = 'xxxxxx';
	  const item = {
	    value: dupeValueForCheck,
	    label: dupeValueForCheck
	  };

	  const select = new Select({
	    target,
	    props: {
	      items: [item],
	      isCreatable: true,
	      listOpen: true
	    }
	  });

	  await wait$1(0);
	  select.$set({ filterText: dupeValueForCheck });
	  await wait$1(0);

	  const listItems = document.querySelectorAll('.listContainer > .listItem');
	  t.equal(listItems[listItems.length - 1].querySelector('.item').innerHTML, dupeValueForCheck);

	  select.$destroy(); 
	});

	test('When creator selected, selected item is set to created item', async (t) => {
	  const filterText = 'abc';

	  const select = new Select({
	    target,
	    props: {
	      items,
	      isCreatable: true,
	      isFocused: true,
	      listOpen: true
	    }
	  });

	  await wait$1(0);
	  select.$set({ filterText });
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));

	  const { selectedValue } = select;
	  t.ok(selectedValue.value === 'abc');
	  t.ok(selectedValue.label === 'abc');

	  select.$destroy();
	});

	test('When creator is selected, created item it added to multi selection', async (t) => {
	  const filterText = 'abc';

	  const select = new Select({
	    target,
	    props: {
	      items,
	      isCreatable: true,
	      isFocused: true,
	      listOpen: true,
	      isMulti: true
	    }
	  });

	  await wait$1(0);
	  select.$set({ filterText });
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));

	  const { selectedValue } = select;
	  t.ok(selectedValue[0].value === 'abc');
	  t.ok(selectedValue[0].label === 'abc');

	  select.$destroy();
	});

	test('When creator is selected multiple times, items are all added to multi selection', async (t) => {
	  const filterTextForItem1 = 'abc';
	  const filterTextForItem2 = 'def';

	  const select = new Select({
	    target,
	    props: {
	      items,
	      isCreatable: true,
	      isFocused: true,
	      listOpen: true,
	      isMulti: true
	    }
	  });
	  
	  select.$set({ filterText: filterTextForItem1 });
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  await wait$1(0);
	  t.ok(select.selectedValue[0].value === 'abc');

	  select.$set({ filterText: filterTextForItem2 });
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  await wait$1(0);
	  t.ok(select.selectedValue[1].value === 'def');

	  select.$destroy();
	});

	test('When isMulti and an items remove icon is clicked then item should be removed from selectedValue', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      isCreatable: true,
	      selectedValue: [
	        {value: 'pizza', label: 'Pizza'},
	        {value: 'cake', label: 'Cake'},
	      ],
	      isMulti: true
	    }
	  });

	  await querySelectorClick('.multiSelectItem_clear'); 
	  t.ok(select.selectedValue[0].value === 'cake');
	  await querySelectorClick('.multiSelectItem_clear');
	  t.ok(select.selectedValue === undefined);

	  select.$destroy();
	});

	test('When isCreatable with non-default item structure, item creator displays getCreatorLabel label for isCreator', async (t) => {
	  const _items = [
	    {country: 'Italy', food: 'Pizza'},
	    {country: 'Australia', food: 'Meat Pie'},
	    {country: 'China', food: 'Fried Rice'}
	  ];

	  const filterText = 'Fried Chicken Roll';

	  function creatorLabel(filterText) {
	    return `Do you want to create ${ filterText } as an added food?`;
	  }

	  function itemDisplay(item, filterText) {
	    return item.isCreator ? creatorLabel(filterText) : `${item.food} (${item.country})`;
	  }

	  const select = new Select({
	    target,
	    props: {
	      optionIdentifier: 'food',
	      getOptionLabel: itemDisplay,
	      getSelectionLabel: itemDisplay,
	      items: _items,
	      isCreatable: true,
	      createItem(filterText) {
	        return {
	          food: filterText,
	          country: 'Added'
	        };
	      }
	    }
	  });

	  await wait$1(0);
	  select.$set({ filterText });
	  await wait$1(0);
	  const listItems = document.querySelectorAll('.listContainer > .listItem');
	  t.equal(listItems[listItems.length - 1].querySelector('.item').innerHTML, creatorLabel(filterText));

	  select.$destroy();
	});

	test('When isCreatable and isMulti and optionIdentifier is supplied creator displays getCreatorLabel label', async (t) => {
	  const filterText = 'abc';
	  const _items = [
	    {foo: 'chocolate', label: 'Chocolate'},
	    {foo: 'pizza', label: 'Pizza'}
	  ];

	  const select = new Select({
	    target,
	    props: {
	      optionIdentifier: 'foo',
	      isMulti: true,
	      items: _items,
	      isCreatable: true
	    }
	  });

	  await wait$1(0);
	  select.$set({ filterText });
	  await wait$1(0);
	  const listItems = document.querySelectorAll('.listContainer > .listItem');
	  t.equal(listItems[listItems.length - 1].querySelector('.item').innerHTML, `Create \"${ filterText }\"`);

	  select.$destroy();
	});

	test('When isCreatable and isMulti and optionIdentifier is supplied multiple creatable items can be added', async (t) => {
	  const filterText = 'foo';
	  const filterText2 = 'bar';

	  const _items = [
	    {id: 1, tag_name: 'Banana'},
	    {id: 5, tag_name: 'Orange'},
	    {id: 4, tag_name: 'Tree'},
	    {id: 3, tag_name: 'Guns'},
	    {id: 2, tag_name: 'Cars'},
	  ];

	  const optionIdentifier = 'tag_name';
	  const getOptionLabel = (option) => option.tag_name;
	  const getSelectionLabel = (option) => option.tag_name;
	  const createItem = (filterText) => ({id:undefined, tag_name:filterText});

	  const select = new Select({
	    target,
	    props: {
	      optionIdentifier,
	      isMulti: true,
	      items: _items,
	      isCreatable: true,
	      getOptionLabel,
	      getSelectionLabel,
	      createItem,
	    }
	  });

	  await wait$1(0);
	  select.$set({ filterText });
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  await wait$1(0);
	  select.$set({ filterText: filterText2 });
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));
	  await wait$1(0);

	  t.ok(select.selectedValue.length === 2);
	  t.ok(select.selectedValue[0].tag_name);

	  select.$destroy();
	});

	test('When isCreatable and item is created then createItem method should only run once', async (t) => {
	  let createItemRun = 0;
	  const createItem = (filterText) => {
	    createItemRun += 1;
	    return {
	      value: filterText,
	      label: filterText
	    };
	  };

	  const select = new Select({
	    target,
	    props: {
	      isCreatable: true,
	      items,
	      createItem
	    }
	  });

	  await wait$1(0);
	  select.$set({ filterText: 'foo' });
	  await wait$1(0);
	  window.dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'}));

	  t.ok(createItemRun === 2);

	  select.$destroy();
	});

	test('When items are collection and selectedValue a string then lookup item using optionIdentifier and update value to match', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      selectedValue: 'cake'
	    }
	  });

	  await wait$1(0);
	  t.ok(select.selectedValue.value === 'cake');
	  select.$set({ selectedValue: 'pizza' });
	  await wait$1(0);
	  t.ok(select.selectedValue.value === 'pizza');
	  select.$destroy();
	});

	test('When listAutoWidth is set to false list container should have style of width:100%', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      listAutoWidth: false,
	      listOpen: true
	    }
	  });

	  await wait$1(0);
	  const listWidth = document.querySelectorAll('.selectContainer > div')[0].style.width;
	  t.ok(listWidth === '100%');
	  select.$destroy();
	});


	test('When item is already active and is selected from list then close list', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      listOpen: true,
	      selectedValue: 'pizza'
	    }
	  });

	  await wait$1(0);
	  await querySelectorClick('.listContainer > .listItem > .item.active');
	  await wait$1(0);
	  t.ok(select.selectedValue.value === 'pizza');
	  select.$destroy();
	});


	test('When Icon prop is supplied then render on Select', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      Icon: TestIcon
	    }
	  });

	  t.ok(document.querySelectorAll('#testIcon')[0]);

	  select.$destroy();
	});

	test('When showChevron prop is true always show chevron on Select', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      showChevron: true
	    }
	  });

	  t.ok(document.querySelectorAll('.indicator')[0]);

	  select.$destroy();
	});

	test('When items and loadItems then listOpen should be false', async (t) => {
	  const select = new Select({
	    target,
	    props: {      
	      getSelectionLabel: (option) => option.name,
	      getOptionLabel: (option) => option.name,
	      loadOptions: getPosts,
	      optionIdentifier: 'id',
	      items: [{
	        id: 1,
	        name: 'Initial Items #1'
	      }]
	      
	    }
	  });

	  t.ok(select.listOpen === false);

	  select.$destroy();
	});

	test('Select container classes can be injected', async (t) => {
	  const select = new Select({
	    target,
	    props: {
	      items,
	      selectedValue: { name: 'Item #2' },
	      containerClasses: 'testclass',
	    },
	  });

	  t.ok(
	    document.querySelector('.selectContainer').classList.contains('testclass')
	  );
	  select.$destroy();
	});

	function focus(element, setFocus) {
	  return new Promise(fulfil => {
	    element.addEventListener('focus', function handler() {
	      element.removeEventListener('focus', handler);
	      fulfil(true);
	    });

	    setFocus();
	  });
	}

	function getPosts(filterText) {
	  filterText = filterText ? filterText.replace(' ','_') : '';

	  return new Promise((resolve, reject) => {
	    const xhr = new XMLHttpRequest();
	    xhr.open('GET', `https://api.punkapi.com/v2/beers?beer_name=${filterText}`);
	    xhr.send();

	    xhr.onload = () => {
	      if (xhr.status >= 200 && xhr.status < 300) {
	        setTimeout(resolve(JSON.parse(xhr.response).sort((a, b) => {
	          if (a.name > b.name) return 1;
	          if (a.name < b.name) return -1;
	        })), 2000);
	      } else {
	        reject();
	      }
	    };
	  });
	}

	// this allows us to close puppeteer once tests have completed
	window.done = done;

}());
