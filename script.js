const clickSound = new Audio('click_sound.mp3'); // Make sure the sound file is in the same folder

const categories = {
    edgelord: [
        "Dark", "Shadow", "Night", "Death", "Ghost", "Soul", "Venom", "Fang", "Slayer", "Blood",
        "xX", "Xx", "Killer", "Toxic", "Crimson", "Void", "Inferno", "Rage", "Chaos", "Dagger",
        "Oblivion", "Demon", "Ash", "Blade", "Reaper", "Sin", "Hell", "Plague", "Nocturne", "Wrath",
        "Decay", "Hollow", "Midnight", "Curse", "Burn"
    ],
    devpro: [
        "Dev", "Code", "Core", "Build", "Script", "System", "Bot", "Pixel", "Forge", "Data",
        "Game", "Tech", "Mr", "Labs", "Works", "Hack", "Chip", "Console", "Proto", "Net",
        "Byte", "Cloud", "Server", "Updater", "Bit", "Driver", "AI", "Kernel", "Null", "Root", 
        "Node", "Ping", "Compile", "Loop", "Cyber"
    ],
    mysterious: [
        "1337", "Gl1tch", "Void", "Hex", "XOR", "Byte", "Lock", "Error", "Reboot", "Crypt",
        "v1x", "Term", "Drone", "Datakor", "Sys", "Echo", "Silent", "Phase", "Proxy", "Sigma",
        "Zer0", "Trace", "404", "Fragment", "Rootkit", "Blink", "Nul", "Wire", "Decay", "Pulse",
        "Override", "Ghost", "Loop", "Shell", "Index"
    ],
    meme: [
        "ieat", "uwu", "noodle", "snacc", "vented", "sussy", "lol", "milk", "toe", "penguin",
        "yeehaw", "bacon", "pain", "waffle", "cheater", "beans", "sleepy", "69", "burb", "pupper",
        "fart", "omg", "cringe", "derp", "bruh", "egg", "ham", "nugget", "spork", "dumpster",
        "goober", "jelly", "bugz", "catjam", "nope"
    ],
    legacy: [
        "Bright", "Eye", "Clock", "Telamon", "Storm", "Tide", "Moon", "Byte", "Frost", "Shade",
        "Sky", "Ghost", "Neo", "Silent", "Hex", "Fire", "Builder", "Gear", "Admin", "Brick",
        "Spark", "Gold", "Silver", "Retro", "Robloxian", "Block", "Classic", "Maple", "Nova", "Crown",
        "Mint", "Rain", "Cypher", "Dust", "Flame"
    ]
};

const endings = [
    "123", "_RBLX", "360", "X", "_YT", "1337", "666", "_dev", "lol", "69", "xD", "_v", "v2", "_alt",
    "000", "777", "EXE", "VX", "_pro", "v3", "_Xx", "_user", "XYZ", "101", "0MG", "BETA", "LOLZ", "JS", "VX2"
];

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
clickSound.play(); // This will play the sound when the button is clicked

function generateUsername(category) {
    const word1 = random(categories[category]);
    const word2 = random(categories[category]);
    const ending = Math.random() < 0.5 ? random(endings) : "";

    const name = word1 === word2 ? word1 + "_" + random(categories[category]) : word1 + word2;
    return name + ending;
}

document.getElementById('generateBtn').addEventListener('click', () => {
clickSound.play(); // Play the sound when the button is clicked
    const category = document.getElementById('category').value;
    const generatedUsername = generateUsername(category);
    document.getElementById('result').innerHTML = `Generated Username: <strong>${generatedUsername}</strong>`;
});
