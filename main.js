//setting game name
let gameName = "Gusse The Word";
document.title = gameName;
document.querySelector('h1').innerHTML = gameName;
document.querySelector('.footer').innerHTML = `${gameName} Created by ME.`;

//setting game options
let numTries = 5;
let numLetters = 6;
let currentTry = 1;

//words to guess
const storyWords = [
    {
        word: "tomato",
        hint: "A juicy red fruit found in the mysterious jungle.",
        message: "🌿 You discovered the sacred tomato hidden deep in the overgrown ruins. Its juice glows faintly... you feel strength returning to your body."
    },
    {
        word: "rocket",
        hint: "A vehicle needed to escape Earth’s danger.",
        message: "🚀 The rocket is ready. You fixed the final fuel cell. As the engines roar to life, the sky above begins to split... it's time to leave."
    },
    {
        word: "python",
        hint: "The guardian of the ancient code temple.",
        message: "🐍 The python uncoils from the temple gates and stares into your soul. You whispered the secret language... it slithered aside, letting you pass."
    },
    {
        word: "silver",
        hint: "A rare mineral needed to forge the magic blade.",
        message: "🔘 You unearthed the silver beneath the mountain’s heart. Cold and shining, it's exactly what the blacksmith needs to craft the legendary blade."
    },
    {
        word: "london",
        hint: "The final city where the truth is revealed.",
        message: "🌫️ You arrive in London. Fog swirls around the narrow streets. The final piece of the puzzle is here... hidden among whispers and shadows."
    },
    {
        word: "wizard",
        hint: "A magic user hidden in the shimmering tower.",
        message: "🧙‍♂️ The wizard, cloaked in starlight, descends from the tower's peak. They offer a cryptic riddle... solving it grants you ancient wisdom."
    },
    {
        word: "dragon",
        hint: "A mythical beast guarding forbidden treasure.",
        message: "🐉 The dragon awakes with a mighty roar, scales glinting like jewels. It tests your courage, then reveals a secret passage to its hoard."
    },
    {
        word: "temple",
        hint: "An ancient structure holding forgotten rituals.",
        message: "🏛️ You push aside the vines, revealing the entrance to the forgotten temple. Inside, echoes of a lost civilization whisper secrets of power."
    },
    {
        word: "shadow",
        hint: "It follows light, revealing hidden dangers.",
        message: "👤 A deep shadow detaches from the wall, taking solid form. It's a trick of the mind, but reveals a hidden alcove and a map."
    },
    {
        word: "galaxy",
        hint: "A swirling cosmic expanse of stars and secrets.",
        message: "🌌 Through the shimmering portal, you glimpse the galaxy in all its glory. A star twinkles brighter, guiding you to your next celestial quest."
    },
    {
        word: "forest",
        hint: "A dense expanse of trees, home to wild things.",
        message: "🌳 You wander deeper into the ancient forest. The trees seem to breathe around you, and a hidden path opens, leading to a secluded grove."
    },
    {
        word: "desert",
        hint: "A vast, arid land of shifting sands and lost oases.",
        message: "🏜️ The scorching desert stretches before you, mirages dancing on the horizon. A distant shimmer reveals a hidden oasis, offering refuge and a clue."
    },
    {
        word: "island",
        hint: "A secluded landmass surrounded by endless water.",
        message: "🏝️ You beach your raft on the shore of a remote island. Lush vegetation hides ancient ruins and the promise of untold discoveries."
    },
    {
        word: "castle",
        hint: "A formidable fortress of stone and mystery.",
        message: "🏰 The imposing castle looms against the stormy sky. Its gates, once sealed, creak open, inviting you into its dark, storied halls."
    },
    {
        word: "cipher",
        hint: "A secret code that unlocks hidden messages.",
        message: "🔐 You find a cryptic cipher etched into the old stone tablet. Decrypting it reveals the next step in your perilous journey."
    },
    {
        word: "dagger",
        hint: "A short, sharp blade used in close combat.",
        message: "🗡️ Hidden beneath loose bricks, you discover a gleaming dagger. Its hilt hums with a faint magic, promising protection in dire moments."
    },
    {
        word: "scroll",
        hint: "An ancient parchment holding forgotten knowledge.",
        message: "📜 Unrolling the fragile scroll, you find faded words describing a lost spell. Its wisdom illuminates a new path forward."
    },
    {
        word: "statue",
        hint: "A silent sentinel, carved from stone.",
        message: "🗿 A towering statue stands guard over a hidden entrance. A faint inscription on its base hints at a forgotten ritual required to proceed."
    },
    {
        word: "portal",
        hint: "A shimmering gateway to another dimension.",
        message: "🌀 A swirling portal opens before you, beckoning you to step into the unknown. Beyond it lies a world you've only dreamed of."
    },
    {
        word: "spirit",
        hint: "An ethereal being, bound to ancient places.",
        message: "👻 A translucent spirit manifests, its eyes glowing with ancient sorrow. It speaks in hushed tones, offering guidance to those who listen."
    },
    {
        word: "bridge",
        hint: "A path over a chasm or raging river.",
        message: "🌉 You discover a rickety bridge spanning a deep gorge. Though perilous, it's the only way across to the forbidden peaks."
    },
    {
        word: "puzzle",
        hint: "A perplexing challenge requiring clever thought.",
        message: "🧩 A complex puzzle box sits on a pedestal. Each turn of the gears reveals new patterns, slowly unlocking a hidden compartment."
    },
    {
        word: "relics",
        hint: "Ancient artifacts of immense power.",
        message: "🏺 You stumble upon a chamber filled with glowing relics. Each one hums with a different energy, hinting at their forgotten abilities."
    },
    {
        word: "beacon",
        hint: "A guiding light in the darkness.",
        message: "🕯️ A distant beacon flickers on the horizon, cutting through the night. It marks the location of the hidden sanctuary, your destination."
    },
    {
        word: "enigma",
        hint: "A perplexing mystery that defies understanding.",
        message: "❓ The old sage presents you with an enigma, a riddle with no clear answer. Solving it requires intuition, leading to a profound realization."
    },
    {
        word: "tablet",
        hint: "A stone slab etched with ancient script.",
        message: "🪨 You uncover a weathered tablet, its surface covered in forgotten glyphs. Deciphering its message reveals a prophecy of great change."
    },
    {
        word: "cavern",
        hint: "A vast underground chamber.",
        message: "🦇 You descend into a gaping cavern, its darkness stretching infinitely. Strange echoes bounce off the walls, guiding you deeper into the earth."
    },
    {
        word: "legend",
        hint: "A tale of heroes and forgotten glory.",
        message: "📖 The local elder recounts a legend of old, a story of a lost hero and a hidden treasure. The details within match your quest."
    },
    {
        word: "secret",
        hint: "Something hidden or unknown to most.",
        message: "🤫 You uncover a dusty journal, its pages filled with a long-lost secret. It reveals a hidden weakness of your foe, or a forgotten ally."
    },
    {
        word: "ruined",
        hint: "A place fallen to decay and time.",
        message: " crumbling fortress stands before you, now ruined by centuries of neglect. Yet, within its shattered walls, a glimmer of hope remains."
    },
    {
        word: "thorns",
        hint: "Sharp, protective growths guarding a path.",
        message: "🌿 A thicket of thorny bushes blocks your way. Careful navigation reveals a narrow, hidden passage, leading to a secluded clearing."
    },
    {
        word: "candle",
        hint: "A wax stick providing a flickering light.",
        message: "🕯️ In the dusty crypt, you find a lone candle, still lit. Its faint glow illuminates a hidden symbol on the wall, a crucial clue."
    },
    {
        word: "orb",
        hint: "A glowing sphere holding ancient power.",
        message: "🔮 You find a pulsating orb, radiating warmth and light. Holding it, you feel a surge of forgotten magic, unlocking new abilities."
    },
    {
        word: "shield",
        hint: "A defensive barrier against harm.",
        message: "🛡️ Propped against a forgotten altar, a sturdy shield awaits. Its surface depicts a lost crest, hinting at its true lineage and power."
    },
    {
        word: "valley",
        hint: "A low area between hills or mountains.",
        message: "🏞️ You descend into a serene valley, its tranquility a stark contrast to the dangers you've faced. A hidden stream murmurs a forgotten melody."
    },
    {
        word: "riddle",
        hint: "A puzzling question or statement.",
        message: "🤔 The ancient guardian poses a riddle, its words echoing through the chamber. Answer correctly, and the path forward is revealed."
    },
    {
        word: "cipher",
        hint: "A secret method of writing; a code.",
        message: "🔐 A complex cipher appears on the ancient map. Deciphering its symbols reveals the true location of the hidden treasure."
    },
    {
        word: "mirror",
        hint: "A reflective surface showing what is there, or what is not.",
        message: "🪞 You find an ornate mirror, its surface swirling with arcane energies. Peering into it, you glimpse a truth beyond current reality."
    },
    {
        word: "chains",
        hint: "Restraints that bind or protect something valuable.",
        message: "⛓️ Heavy chains clink in the darkness, securing a massive, ancient door. A complex mechanism holds them fast, requiring a clever solution."
    },
    {
        word: "gemini",
        hint: "A celestial pair, twins in the night sky.",
        message: "♊ As dusk falls, the constellation Gemini shines brightly. Its twin stars align perfectly with two distant peaks, revealing a hidden path."
    },
    {
        word: "spirit",
        hint: "A non-physical entity, often bound to a place.",
        message: "👻 A faint spirit drifts through the abandoned hall. It gestures towards a loose floorboard, revealing a hidden compartment."
    },
    {
        word: "embers",
        hint: "Glowing remnants of a dying fire.",
        message: "🔥 You discover a pile of warm embers in the burnt-out campsite. A faint shimmer reveals a hidden inscription in the ash, a message from the past."
    },
    {
        word: "anchor",
        hint: "A heavy object that keeps a ship in place.",
        message: "⚓ Buried in the sand near the ancient dock, you unearth a rusty anchor. Its weight and design suggest it belonged to a legendary vessel."
    },
    {
        word: "tablet",
        hint: "A thin slab for writing or display.",
        message: "📜 You find a smooth, obsidian tablet etched with intricate symbols. Touching it, visions of a forgotten history flood your mind."
    },
    {
        word: "whisps",
        hint: "Faint, ghostly trails of light or smoke.",
        message: "💨 Ethereal whisps of light dance in the forbidden grove. Following them leads you to a clearing where ancient magic still lingers."
    },
    {
        word: "abacus",
        hint: "An ancient tool for calculation.",
        message: "🧮 In the ruined scholar's chamber, you find a dusty abacus. Manipulating its beads reveals a numerical sequence, unlocking a hidden door."
    },
    {
        word: "crypts",
        hint: "Underground vaults for burials.",
        message: "⚰️ You delve into the echoing crypts beneath the old cathedral. Among the silent tombs, one sarcophagus holds a secret passage."
    },
    {
        word: "chisel",
        hint: "A tool used for carving stone or wood.",
        message: "⚒️ Tucked away in a stonemason's forgotten kit, you find a finely crafted chisel. It fits perfectly into a specific groove on a wall, revealing a hidden mechanism."
    },
    {
        word: "elixir",
        hint: "A magical potion or remedy.",
        message: "🧪 In a hidden alchemist's lab, you discover a glowing elixir. A single drop revives a wilting plant, hinting at its potent restorative powers."
    },
    {
        word: "flower",
        hint: "A delicate bloom, often with magical properties.",
        message: "🌸 You pluck a luminous flower from the forbidden garden. Its petals shimmer with an inner light, revealing faint magical traces."
    },
    {
        word: "grassy",
        hint: "Covered with green vegetation.",
        message: "🌱 You push through a thick, grassy field, the tall blades tickling your face. Beneath your foot, you feel a faint indentation, revealing a hidden switch."
    },
    {
        word: "hammer",
        hint: "A tool used for striking.",
        message: "🔨 Amidst the debris of a collapsed mine, you spot a sturdy hammer. Its head is engraved with a dwarven rune, hinting at its true purpose."
    },
    {
        word: "jagged",
        hint: "Having sharp, uneven edges.",
        message: "⛰️ You navigate a path of jagged rocks, each step precarious. A loose stone gives way, revealing a small, hidden cave entrance."
    },
    {
        word: "keypad",
        hint: "A numerical entry device.",
        message: "🔢 On a reinforced door, you find a dusty keypad. A faint, glowing sequence of numbers appears, beckoning you to enter the correct code."
    },
    {
        word: "lizard",
        hint: "A scaly reptile often found in hot climates.",
        message: "🦎 A quick lizard darts across your path, leading you to a sun-baked rock. Beneath it, you find a small, forgotten pouch."
    },
    {
        word: "meteor",
        hint: "A streak of light from space.",
        message: "☄️ A distant meteor streaks across the night sky, its fiery descent marking a precise spot on your map – a place of impact and power."
    },
    {
        word: "needle",
        hint: "A thin, sharp tool, also used for guidance.",
        message: "🧭 You find a delicate, magnetized needle. It twitches erratically, always pointing towards a hidden energy source or a crucial direction."
    },
    {
        word: "oyster",
        hint: "A bivalve mollusc, sometimes hiding treasure.",
        message: "🐚 Deep in the tidal pools, you pry open a large oyster. Inside, nestled in its soft flesh, is a shimmering, iridescent pearl."
    },
    {
        word: "parade",
        hint: "A celebratory procession.",
        message: "🎉 You follow the distant sounds of a parade into a bustling town square. Amidst the festivities, a cryptic message is passed to you by a stranger."
    },
    {
        word: "quiver",
        hint: "A case for holding arrows.",
        message: "🏹 Resting against an ancient tree, an ornate quiver still holds a single, glowing arrow. Its fletching points the way to a hidden target."
    },
    {
        word: "rubber",
        hint: "An elastic material, often bouncy.",
        message: "🎈 You discover a strange, stretchy piece of rubber in a forgotten toy chest. It can be used to propel a small object a great distance."
    },
    {
        word: "sentry",
        hint: "A guard keeping watch.",
        message: "💂‍♂️ A vigilant sentry stands motionless before a heavily guarded gate. You must find a way to bypass their unwavering gaze to proceed."
    },
    {
        word: "tapest",
        hint: "A woven cloth decoration, often telling a story.",
        message: "🖼️ In a dusty hall, a large tapestry hangs, depicting an ancient battle. Tracing its woven patterns reveals a hidden symbol or location."
    },
    {
        word: "unique",
        hint: "One of a kind, distinct from all others.",
        message: "🌟 You stumble upon a truly unique artifact, unlike anything you've ever seen. Its singular properties are key to solving a complex challenge."
    },
    {
        word: "vortex",
        hint: "A swirling mass, often leading to another place.",
        message: "🌪️ A shimmering vortex forms in the air, pulling at loose leaves. It's a temporary opening to another realm, if you're brave enough to enter."
    },
    {
        word: "window",
        hint: "An opening, often looking out onto a scene.",
        message: "🪟 You peer through a grimy window in an abandoned cabin. The view outside reveals a specific landmark not marked on any map."
    },
    {
        word: "yonder",
        hint: "A distant place, often vaguely specified.",
        message: "🌄 The old map points vaguely to 'yonder peak.' Following its ambiguous direction leads you to a hidden summit with a grand vista."
    },
    {
        word: "zenith",
        hint: "The highest point, often celestial.",
        message: "☀️ As the sun reaches its zenith, a ray of light pierces through a narrow opening, illuminating a hidden inscription on the cavern floor."
    },
    {
        word: "acorns",
        hint: "Small nuts from an oak tree.",
        message: "🌰 You find a scattered pile of acorns near the base of an ancient oak. Cracking one open reveals a tiny, glowing seed with magical properties."
    },
    {
        word: "blades",
        hint: "Sharp cutting edges, or tall grass.",
        message: "⚔️ Hidden in the tall blades of grass, you discover a collection of ancient, rusty blades. One glints faintly, hinting at its hidden power."
    },
    {
        word: "cobweb",
        hint: "A spider's dusty, abandoned trap.",
        message: "🕸️ You push through a thick cobweb in a forgotten attic. Behind it, a small, dusty box reveals a key and a cryptic note."
    },
    {
        word: "draped",
        hint: "Covered loosely with cloth.",
        message: "🧣 A tattered cloth is draped over a mysterious object. Pulling it back reveals a deactivated control panel for an ancient machine."
    },
    {
        word: "echoes",
        hint: "Reflected sounds, often from the past.",
        message: "👂 Faint echoes of whispers drift through the ruined library. Listening closely, you discern a fragment of a forgotten spell or password."
    },
    {
        word: "fabled",
        hint: "Legendary, told in myths.",
        message: "📚 You read a passage about a fabled creature in an old tome. Its description perfectly matches a beast you must encounter or avoid."
    },
    {
        word: "gullet",
        hint: "A passage for food, often referring to a deep throat.",
        message: "🤢 You navigate through a narrow, dark passage, feeling like you're in the gullet of some forgotten beast. It eventually opens into a cavern."
    },
    {
        word: "hollow",
        hint: "Empty inside, or a small valley.",
        message: "🌲 You tap on a tree trunk, and it sounds hollow. Pushing firmly, a hidden compartment swings open, revealing a dusty map."
    },
    {
        word: "inkpot",
        hint: "A container for writing fluid.",
        message: "🖋️ On an ancient desk, a dried-up inkpot sits beside a quill. A faint shimmer inside hints at a drop of magical ink, still potent."
    },
    {
        word: "jungle",
        hint: "A dense, overgrown tropical forest.",
        message: "🌿 You hack your way through the thick jungle, the air heavy with humidity. A glimmer of light leads to a hidden clearing and ancient ruins."
    },
    {
        word: "kernel",
        hint: "The central part of a nut or grain.",
        message: "🌽 You discover a single, glowing kernel of corn in a hidden chamber. Planting it in fertile soil causes a magical beanstalk to sprout rapidly."
    },
    {
        word: "locket",
        hint: "A small ornamental case for a picture.",
        message: "💖 You find a tarnished locket on a faded ribbon. Opening it reveals a miniature portrait and a tiny, coded message."
    },
    {
        word: "mantle",
        hint: "A cloak, or a covering.",
        message: "🧥 You pick up a dusty mantle draped over a forgotten throne. Wearing it, you feel a surge of protective energy, enhancing your defenses."
    },
    {
        word: "nimbus",
        hint: "A luminous cloud or halo.",
        message: "✨ A faint nimbus of light appears around a specific constellation. Following its ethereal glow leads you to a celestial portal."
    },
    {
        word: "orchid",
        hint: "An exotic and beautiful flower.",
        message: "🌺 You discover a rare, glowing orchid deep within the bioluminescent cave. Its vibrant petals pulse with a calming, healing aura."
    },
    {
        word: "portal",
        hint: "A magical gateway to another place.",
        message: "🌀 A shimmering portal pulsates in the heart of the ancient ruins. Stepping through it transports you to a realm of strange beauty and new challenges."
    },
    {
        word: "quarry",
        hint: "A place where stone is dug from the ground.",
        message: "⛏️ You arrive at an abandoned quarry, its terraced walls echoing with forgotten labor. A hidden vein of glowing ore is exposed, ripe for extraction."
    },
    {
        word: "rivers",
        hint: "Flowing bodies of water.",
        message: "🌊 You follow the winding rivers through the vast plains. One particular bend reveals a hidden grotto, home to ancient fish and a lost artifact."
    },
    {
        word: "scepter",
        hint: "A ceremonial staff of royalty.",
        message: "👑 You retrieve a gleaming scepter from the forgotten king's tomb. Its weight and intricate carvings suggest immense power, waiting to be unleashed."
    },
    {
        word: "tongue",
        hint: "A fleshy muscular organ, or a language.",
        message: "🗣️ You learn a lost tongue from an ancient inscription. Speaking its words aloud opens a hidden doorway, or calms a furious beast."
    },
    {
        word: "urinal", // This might be a tricky one given the theme. Let's make it abstract.
        hint: "A common fixture in public facilities, but can be a hidden passage in disguise.",
        message: "🚽 Behind a surprisingly ordinary urinal in the abandoned station, you discover a cleverly concealed lever. Pulling it reveals a secret passage to the underground."
    },
    {
        word: "vessel",
        hint: "A container, or a ship.",
        message: "⛵ You find a derelict vessel washed ashore, its sails tattered. Inside its hull, a waterproof chest contains a map to a sunken treasure."
    },
    {
        word: "wizard",
        hint: "A practitioner of magic.",
        message: "🧙‍♂️ You encounter a reclusive wizard in a hidden glade. They offer you a choice between two powerful spells, guiding your next move."
    },
    {
        word: "xenium", // A rare term for a gift given to a guest.
        hint: "A gift for a guest, often unexpected and valuable.",
        message: "🎁 In the silent ruins of a forgotten feast hall, you find a small, untouched xenium. It contains a rare gem, an offering from a long-gone host."
    },
    {
        word: "yachts",
        hint: "Luxurious sailing boats.",
        message: "🛥️ Moored in a secluded cove, you spot a collection of abandoned yachts. One contains a hidden compartment with valuable charts and logs."
    },
    {
        word: "zephyr",
        hint: "A gentle, mild breeze.",
        message: "🌬️ A soft zephyr whispers through the ancient trees, carrying with it a faint scent of a hidden grove and the sound of distant chimes."
    },
    {
        word: "advent",
        hint: "The arrival of a notable person, thing, or event.",
        message: "🌟 The advent of a rare celestial alignment is upon you. The energy it brings unlocks dormant powers within you, or opens a new path."
    },
    {
        word: "border",
        hint: "A line separating two areas.",
        message: "🚧 You reach the jagged border of the cursed lands. Crossing it requires a specific talisman, or a leap of faith into the unknown."
    },
    {
        word: "coffin",
        hint: "A box for burying the dead.",
        message: "⚰️ In the deepest part of the mausoleum, a stone coffin rests. Prying open its lid reveals not bones, but a hidden compartment with a scroll."
    },
    {
        word: "dolmen",
        hint: "An ancient stone structure, often a tomb.",
        message: "🗿 You discover a weathered dolmen standing alone on a windswept hill. Its ancient stones hum with faint magic, revealing a hidden ley line."
    },
    {
        word: "eagles",
        hint: "Large birds of prey, often symbolic.",
        message: "🦅 A pair of majestic eagles soars overhead, circling a specific peak. Following their flight leads you to a high-altitude sanctuary."
    },
    {
        word: "famine",
        hint: "An extreme scarcity of food.",
        message: "🌾 The land shows signs of an ancient famine, the earth cracked and barren. A resilient seed, miraculously preserved, promises to reverse the blight."
    },
    {
        word: "galaxy",
        hint: "A vast system of stars.",
        message: "🌌 You gaze upon the swirling galaxy in the night sky. One particular spiral arm seems to pulse, hinting at a distant cosmic event."
    },
    {
        word: "hermit",
        hint: "A person living in solitude.",
        message: "👤 You discover the secluded dwelling of a wise hermit. They offer cryptic advice and a map to a hidden spring with healing waters."
    },
    {
        word: "icicle",
        hint: "A hanging piece of ice.",
        message: "❄️ In a frozen cave, a massive icicle hangs, shimmering with an unusual light. Breaking it releases a trapped spirit or reveals a hidden key."
    },
    {
        word: "jigsaw",
        hint: "A puzzle with interlocking pieces.",
        message: "🧩 A fragmented jigsaw puzzle lies on a dusty table. Assembling its pieces reveals a complete image that points to your next destination."
    },
    {
        word: "kronor", // Swedish currency, but can be a coded name.
        hint: "A unit of currency, but here it's a code word.",
        message: "💰 You find a peculiar coin marked with 'Kronor'. It's not currency, but a hidden symbol, activating a secret compartment in the wall."
    },
    {
        word: "lyrics",
        hint: "Words to a song, often containing a message.",
        message: "🎶 You hear a faint melody, its lyrics barely audible. Deciphering the words reveals a prophecy or a clue about a lost artifact."
    },
    {
        word: "marrow",
        hint: "The soft, fatty tissue inside bones, or the essence.",
        message: "🦴 You find a strange bone, its marrow glowing faintly. Consuming it imparts ancient strength or reveals a forgotten memory."
    },
    {
        word: "noodle",
        hint: "A long strip of pasta, but here a tricky path.",
        message: "🍜 You follow a winding path that twists and turns like a noodle. It leads you through a labyrinthine network of tunnels, eventually to a hidden chamber."
    },
    {
        word: "oathen", // Obscure, but sounds ancient
        hint: "Pertaining to oaths, or ancient promises.",
        message: "📜 You find an ancient scroll written on oathen parchment. It details a sacred vow and a promise of a hidden reward to those who uphold it."
    },
    {
        word: "powder",
        hint: "Fine, dry particles, often explosive or magical.",
        message: "✨ You discover a small pouch of shimmering powder. Sprinkling it on certain objects reveals their hidden magical properties or makes them disappear."
    },
    {
        word: "quasar",
        hint: "A distant, extremely luminous celestial object.",
        message: "🔭 Through the ancient observatory's lens, you align with a distant quasar. Its intense light beam reveals a hidden star chart on the ceiling."
    },
    {
        word: "reason",
        hint: "A logical cause or motive, or the ability to think.",
        message: "🧠 You are presented with a logical dilemma; finding the reason behind the paradox unlocks a door that only opens to clear thought."
    },
    {
        word: "scarab",
        hint: "A beetle-shaped amulet from ancient Egypt.",
        message: "🐞 You unearth a gleaming scarab amulet from the desert sands. Its intricate carvings hint at its power to ward off curses or reveal hidden paths."
    },
    {
        word: "thrive",
        hint: "To grow or develop well.",
        message: "🌱 In the desolate wasteland, you find a lone plant that manages to thrive. Its resilience offers a clue to surviving the harsh environment."
    },
    {
        word: "unisex",
        hint: "Suitable for both sexes, hinting at duality.",
        message: "🚻 You find a symbol representing 'unisex' on an ancient portal. Understanding its duality is the key to balancing the opposing forces required to open it."
    },
    {
        word: "venom",
        hint: "A poisonous substance.",
        message: "🐍 A vial of glowing venom is hidden within a serpent's nest. While dangerous, a tiny drop is the antidote to a specific ancient curse."
    },
    {
        word: "wicker",
        hint: "Woven material, often for baskets.",
        message: "🧺 You discover a tightly woven wicker basket. Inside, carefully concealed beneath dried leaves, is a map to a hidden forest shrine."
    },
    {
        word: "xenium", // Re-using, but a different context (as it's a niche word)
        hint: "A ceremonial gift for a stranger.",
        message: "🎁 An old tradition demands a 'xenium' be offered to strangers. Presenting the correct item unlocks the goodwill of the wary villagers."
    },
    {
        word: "yellow",
        hint: "A bright primary color, or a sign of caution.",
        message: "🟡 You find a faded yellow ribbon tied around a gnarled tree branch. It's a marker, indicating a hidden trail or a safe passage through a dangerous area."
    },
    {
        word: "zither",
        hint: "A stringed musical instrument.",
        message: "🎶 In the silenced music hall, you discover a beautiful zither. Playing the correct melody on its strings reveals a secret passage behind the stage."
    },
    {
        word: "alumni",
        hint: "Former students of an institution.",
        message: "🎓 You discover a hidden list of alumni from the ancient academy. One name, specifically marked, holds a key to forgotten knowledge."
    },
    {
        word: "blight",
        hint: "A disease or affliction causing decay.",
        message: " blight spreads across the land, wilting everything it touches. You find a single, glowing herb that is immune, holding the cure."
    },
    {
        word: "canyon",
        hint: "A deep gorge, usually with a river.",
        message: "🏞️ You stand at the edge of a vast canyon, its depths echoing with ancient winds. A hidden rope bridge, almost invisible, spans the chasm."
    },
    {
        word: "dragon",
        hint: "A winged, reptilian creature of myth.",
        message: "🐉 The ancient dragon stirs in its slumber. Its open eye reveals a hidden symbol, a map to its hoard, or a test of your worth."
    },
    {
        word: "elixir",
        hint: "A magical or medicinal potion.",
        message: "🧪 You carefully pour the glowing elixir into the ancient basin. Its contents activate dormant runes, revealing a path through illusions."
    },
    {
        word: "fester",
        hint: "To grow or worsen over time, like a wound.",
        message: "🤢 A dark energy seems to fester in the cursed swamp. You must find its source to cleanse the land, or risk being consumed by its decay."
    },
    {
        word: "graven",
        hint: "Carved or engraved, especially on stone.",
        message: "🗿 You discover a stone tablet, its surface deeply graven with an ancient prophecy. Deciphering the symbols reveals your ultimate destiny."
    },
    {
        word: "herald",
        hint: "A messenger, or one who announces something.",
        message: "🎺 A lone figure emerges from the fog, a herald of a coming event. They deliver a cryptic warning, guiding your next difficult choice."
    },
    {
        word: "indigo",
        hint: "A deep blue-purple color.",
        message: "🔵 The light filtering into the ancient tomb takes on an indigo hue. It illuminates a hidden fresco on the ceiling, depicting a forgotten ritual."
    },
    {
        word: "jester",
        hint: "A comedic entertainer, often with hidden wisdom.",
        message: "🎭 You encounter a jester in the abandoned court. Their seemingly nonsensical riddles hide deep truths, unlocking a secret passage behind the throne."
    },
    {
        word: "kernel",
        hint: "The innermost part, or essence.",
        message: "🌰 You find the kernel of truth in the old prophecies. This core understanding reveals the true nature of the challenge ahead."
    },
    {
        word: "lagoon",
        hint: "A shallow body of water separated from the sea.",
        message: "🏝️ You discover a tranquil lagoon, its waters shimmering. Beneath the surface, the entrance to a sunken temple is faintly visible."
    },
    {
        word: "minnow",
        hint: "A small fish, often used as bait.",
        message: "🐟 In the clear stream, a single minnow glows faintly. Following it leads you to a hidden spring with remarkable healing properties."
    },
    {
        word: "nymphs",
        hint: "Mythical spirits of nature.",
        message: "🌸 You hear faint singing in the enchanted grove. Following the voices, you glimpse shy nymphs dancing, guarding a sacred pool."
    },
    {
        word: "oatmeal",
        hint: "A breakfast cereal, but can refer to simple sustenance.",
        message: "🥣 You find a simple bowl of oatmeal left in the abandoned cabin. Eating it restores a small amount of your strength and reveals a hidden note underneath."
    },
    {
        word: "priest",
        hint: "A religious leader.",
        message: "🙏 You meet a wise priest in the secluded monastery. They offer you a sacred relic, or a blessing that grants you temporary power."
    },
    {
        word: "quench",
        hint: "To satisfy thirst, or put out a fire.",
        message: "💧 You find a hidden spring that can quench the thirst of any traveler. Its pure waters also extinguish mystical flames, revealing a path."
    },
    {
        word: "repose",
        hint: "A state of rest, sleep, or tranquility.",
        message: "😴 In a hidden chamber, a figure lies in deep repose. Disturbing their rest reveals either a guardian or a long-lost secret."
    },
    {
        word: "sylvan",
        hint: "Pertaining to woods or forests.",
        message: "🌲 You enter a sylvan glade, untouched by time. The ancient trees seem to whisper secrets, leading you to a forgotten elven ruin."
    },
    {
        word: "tundra",
        hint: "A vast, flat, treeless arctic region.",
        message: "❄️ You brave the icy tundra, the wind biting at your skin. A strange, glowing snowflake guides you to an ancient ice cave."
    },
    {
        word: "unveil",
        hint: "To reveal or disclose something.",
        message: "🎭 You pull back the dusty curtain, and the truth starts to unveil itself. A hidden mural on the wall depicts the prophecy you seek."
    },
    {
        word: "vipers",
        hint: "Venomous snakes.",
        message: "🐍 A den of vipers guards the entrance to the forgotten tomb. You must navigate their treacherous lair to reach the treasure within."
    },
    {
        word: "webbed",
        hint: "Having connected digits, like a duck's foot.",
        message: "👣 You find strange, webbed footprints in the mud near the hidden lake. Following them leads you to a unique creature or a submerged entrance."
    },
    {
        word: "yeoman",
        hint: "A small landowner or a loyal attendant.",
        message: "🛡️ You encounter a loyal yeoman guarding an old gate. Answering their riddle or showing your crest grants you passage and their aid."
    },
    {
        word: "zygote", // Scientific, but can be used metaphorically for origin.
        hint: "The beginning of life, the starting point.",
        message: "🧬 You find a glowing crystal, pulsating like a zygote. It represents the very beginning of the world's magic, unlocking primordial energies."
    },
    {
        word: "arches",
        hint: "Curved structures spanning an opening.",
        message: "🏛️ You pass through a series of ancient arches, each one adorned with forgotten symbols. The final arch glows, revealing a path through a hidden illusion."
    },
    {
        word: "bamboo",
        hint: "A tall, hollow grass.",
        message: "🎋 You navigate a dense bamboo grove, its stalks creaking in the wind. A specific pattern of rustling leads you to a hidden clearing and a serene temple."
    },
    {
        word: "cobras",
        hint: "Venomous snakes, known for their hoods.",
        message: "🐍 Two watchful cobras rise from their baskets, guarding a treasure. Playing the correct tune on a flute causes them to sway aside."
    },
    {
        word: "dories",
        hint: "Small, flat-bottomed boats.",
        message: "🛶 You discover a pair of ancient dories hidden in the reeds of the forgotten river. They are the only means to cross to the forbidden island."
    },
    {
        word: "ending",
        hint: "The final part of something.",
        message: "🔚 You reach the final chapter, the ending of this long journey. What you find here will determine the fate of the world."
    },
    {
        word: "fables",
        hint: "Short stories teaching a moral lesson.",
        message: "📚 You read a collection of ancient fables. Hidden within their simple tales are complex truths and clues for your next quest."
    },
    {
        word: "goblin",
        hint: "A small, mischievous, often green creature.",
        message: "👹 A mischievous goblin leaps from the shadows, demanding a riddle be solved. Answer correctly, and it reveals a hidden shortcut."
    },
    {
        word: "harbor",
        hint: "A place of refuge for ships.",
        message: "⚓ You arrive at a secluded harbor, its docks old and creaking. A single, ancient ship is moored, waiting to carry you across the treacherous seas."
    },
    {
        word: "incase",
        hint: "To enclose in a case or covering.",
        message: "📦 You find a fragile parchment incased in clear amber. Breaking the amber reveals the ancient text, perfectly preserved and full of secrets."
    },
    {
        word: "jumper",
        hint: "A piece of clothing, or one who jumps.",
        message: "🏃 You see a figure, a \"jumper\", disappear over the cliff edge. Following their path reveals a hidden path down to a secluded beach."
    },
    {
        word: "katana",
        hint: "A Japanese sword.",
        message: "🗡️ In a forgotten dojo, you discover a gleaming katana, its blade sharp and true. Wielding it imparts mastery of an ancient fighting style."
    },
    {
        word: "litter",
        hint: "Scattered rubbish, or a stretcher.",
        message: "🗑️ Among the scattered litter of an ancient campsite, you find a discarded map fragment, crucial to piecing together the full route."
    },
    {
        word: "mantis",
        hint: "An insect known for its prayer-like stance.",
        message: "🦗 A praying mantis sits motionless on a rare flower. Its silent gaze directs you to a hidden pathway through the dense undergrowth."
    },
    {
        word: "nectar",
        hint: "A sweet fluid produced by flowers.",
        message: "🍯 You find a glowing flower dripping with pure nectar. A single taste restores your vitality and reveals a hidden truth about the local fauna."
    },
    {
        word: "oriole",
        hint: "A type of colorful bird.",
        message: "🐦 A brightly colored oriole sings a unique melody from a specific branch. Mimicking its tune reveals a hidden cave entrance."
    },
    {
        word: "purity",
        hint: "The state of being unadulterated or uncorrupted.",
        message: "💧 You discover a spring of absolute purity, its waters crystal clear. Drinking from it cleanses you of negative effects and reveals spiritual insights."
    },
    {
        word: "quiche",
        hint: "A savory baked dish, but here a coded name.",
        message: "🥧 In a forgotten kitchen, a cold 'quiche' sits on the counter. It's not food, but a coded message, its slices representing coordinates."
    },
    {
        word: "riches",
        hint: "Valuable possessions.",
        message: "💎 You stumble upon a hidden vault overflowing with ancient riches. Among the gold and jewels, a unique artifact catches your eye, a key to more."
    },
    {
        word: "savage",
        hint: "Wild and untamed.",
        message: "🐺 You encounter a savage beast in the untamed wilderness. Taming it, or outsmarting it, reveals a path previously inaccessible."
    },
    {
        word: "timber",
        hint: "Wood prepared for use in building.",
        message: "🪵 You find neatly stacked timber near an abandoned lumber mill. One log is hollowed out, containing a waterproof satchel with important documents."
    },
    {
        word: "undead",
        hint: "Beings that are dead but appear alive.",
        message: "🧟‍♂️ In the cursed cemetery, the undead stir from their graves. Navigating their restless ranks reveals a hidden passage beneath a tombstone."
    },
    {
        word: "velvet",
        hint: "A soft, luxurious fabric.",
        message: "👑 You discover a hidden box lined with old velvet. Inside, a single, delicate crown rests, signifying a forgotten lineage or power."
    },
    {
        word: "walrus",
        hint: "A large marine mammal with tusks.",
        message: "🌊 You observe a wise walrus basking on an ice floe. It nudges a specific chunk of ice, revealing a hidden compartment beneath the surface."
    },
    {
        word: "xylina", // Obscure, but sounds like a forest/woodland name.
        hint: "A rare, glowing forest fungi.",
        message: "🍄 In the darkest part of the ancient woods, you find the glowing xylina. Its bioluminescence illuminates a hidden symbol carved into a tree."
    },
    {
        word: "yogurt",
        hint: "A fermented milk product, often a simple sustenance.",
        message: "🥛 You find a small, clay pot of dried yogurt in the abandoned explorer's pack. Consuming it revives a small amount of energy and gives a boost of morale."
    },
    {
        word: "zodiac",
        hint: "A celestial band of constellations.",
        message: "🌟 You align the ancient mechanism with the Zodiac signs. As the gears turn, a hidden chamber is revealed, powered by cosmic energies."
    }
];

let wordToGuess = storyWords[Math.floor(Math.random() * storyWords.length)].word.toUpperCase();
let wordHint = storyWords.find(Cword => Cword.word.toUpperCase() === wordToGuess).hint;
let wordMessage = storyWords.find(Cword => Cword.word.toUpperCase() === wordToGuess).message;
console.log(`Hint: ${wordHint}`); // For debuggings
console.log(`Word to guess: ${wordToGuess}`); // For debuggings
const popup = document.querySelector('.popup');

function generateInput() {
    const inputContainer = document.querySelector('.inputs');

    for (let i=1; i <= numTries; i++) {
        const tryDiv = document.createElement('div');
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>Try ${i}</span>`;
        
        if (i !== 1) tryDiv.classList.add('disabled-inputs')

        for (let j = 1; j <= numLetters; j++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute('maxlength', '1');
            tryDiv.appendChild(input);
        }

        inputContainer.appendChild(tryDiv);
    }

    inputContainer.children[0].children[1].focus();

    //disable all inputs except the first try
    const inputsInDisabled = document.querySelectorAll('.disabled-inputs input');
    inputsInDisabled.forEach((input) => input.disabled = true);

    //make all inputs uppercase and the focus on the next input
    const inputs = document.querySelectorAll('input');
    inputs.forEach((input, index) => {

        //set the first input to focus
        input.addEventListener('input', function () {
            this.value = this.value.toUpperCase();
            const nextInput = inputs[index + 1];
            if (nextInput) nextInput.focus();
        });

        //navigations with arrows
        input.addEventListener('keydown', function (event) {
            currentIndex = Array.from(inputs).indexOf(event.target);
            if (event.key =="ArrowRight") {
                if(currentIndex < inputs.length -1) {
                    inputs[currentIndex + 1].focus();
                }
            }
            if (event.key == "ArrowLeft") {
                if (currentIndex > 0) {
                    inputs[currentIndex - 1].focus();
                }
            }
        });

        //backspace navigation
        input.addEventListener('keydown', function (event) {
            if (event.key === 'Backspace' && this.value === '') {
                const prevInput = inputs[index - 1];
                if (prevInput) {
                    prevInput.focus();
                    prevInput.value = '';
                }
            }
        });
    });
}

const guessButton = document.querySelector('.check');
guessButton.addEventListener('click', handleGuess);

function handleGuess() {

    let successGuess = true;
    for (let i = 1; i <= numLetters; i++) {
        const inputField = document.querySelector(`#guess-${currentTry}-letter-${i}`);
        const letter = inputField.value.toUpperCase();
        const actualLetter = wordToGuess[i - 1];
        if (letter === actualLetter) {
            inputField.classList.add('in-place');
        } else if (wordToGuess.includes(letter) && letter !== '') {
            inputField.classList.add('not-in-place');
            successGuess = false;
        } else {
            inputField.classList.add('wrong');
            successGuess = false;
        }
    }
    
    const messageElement = document.querySelector('.message');
    const userGuess = document.querySelector(`.try-${currentTry}`);
    const inputs = userGuess.querySelectorAll('input');
    let guessWord = '';
    inputs.forEach(input => {
        guessWord += input.value.toUpperCase();
    });
    guessWord = guessWord.trim();
    
    if (guessWord.length !== numLetters) {
        alert(`Please enter a ${numLetters}-letter word.`);
    }else if (successGuess) {
        popup.classList.add('open-popup');
        popup.querySelector('img').src = 'imgs/check.png';
        popup.querySelector('h2').innerText = "Congratulations!";
        popup.querySelector('p').innerText = wordMessage;      
        
        // Disable all inputs after correct guess
        const allInputs = document.querySelectorAll('.inputs > div');
        allInputs.forEach(div => div.classList.add('disabled-inputs'));
        const checkButton = document.querySelector('.check');
        checkButton.disabled = true;

    } else {
        if (currentTry === numTries) {
            popup.classList.add('open-popup');
            popup.querySelector('img').src = 'imgs/close.png';
            popup.querySelector('h2').innerText = "Game Over!";
            popup.querySelector('p').innerText = `Game Over! The word was: ${wordToGuess}`;
            document.querySelector('.check').disabled = true;
            // return;
        };
        messageElement.innerHTML = `<span class="error">Incorrect guess. Try again!</span>`;
        let currDiv = document.querySelector(`.try-${currentTry}`);
        currDiv.classList.add('disabled-inputs');
        currDiv.querySelectorAll('input').forEach(input => {
            input.disabled = true;
        });
        currentTry++;
        let nextDiv = document.querySelector(`.try-${currentTry}`);
        if (nextDiv) {
            nextDiv.classList.remove('disabled-inputs');
            nextDiv.querySelectorAll('input').forEach(input => {
                input.disabled = false;
            });
            nextDiv.children[1].focus();
        }

    }
    
    
};

const hintbutton = document.querySelector('.hint');
hintbutton.addEventListener('click', function () {
    popup.classList.add('open-popup');
    popup.querySelector('img').src = 'imgs/hint.png';
    popup.querySelector('h2').innerText = "Hint";
    popup.querySelector('p').innerText = `Hint: ${wordHint}`;
});

function closePopup() {
    popup.classList.remove('open-popup');}

window.onload = function () {
    generateInput();
};