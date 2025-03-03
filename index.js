const maxCapacity = 5;
console.log(maxCapacity);
let inventory = ["dragon sword", "metal armor", "health potion"];
console.log(inventory);
inventory.push("magic ring");
console.log(inventory);

let item = inventory.splice(1, 1);

console.log(item);
console.log(inventory);

function addItem(item) {
  if (inventory.length >= maxCapacity) {
    console.log("Inventory is full! Cannot add more items.");
    return;
  }
}

inventory.push(item);
console.log(`${item} added! Inventory:`, inventory);

const mysteriousLocations = [
  "Whispering Forest",
  "Echoing Caves",
  "Shimmering Riverside",
  "Crumbling Tower",
];

const ancientTomeLocation = "Echoing Caves";

console.log(ancientTomeLocation[0]);
let heroInventory = [];

const updateInventory = () => {
  return (document.getElementById("inventory").textContent =
    "Inventory: " + heroInventory.join(", "));
};

updateInventory();

for (let location of mysteriousLocations) {
  console.log(`Exploring: ${location}`);

  if (location === ancientTomeLocation) {
    console.log("Ancient Tome found! Adding Mysterious Tome to inventory.");
    heroInventory.push("Mysterious Tome");
  } else {
    console.log("Nothing special found here.");
  }
}

console.log("Hero's Inventory:", heroInventory);
console.log(`Hero's Inventory:  ${heroInventory}`);

const attackBtn = document.getElementById("attackBtn");

let ghoulHealth = 100;
// while (ghoulHealth > 0) {
//   console.log("Ghoul is alive. Keep attacking")
// }
attackBtn.addEventListener("click", function () {
  // alert("Button clicked!");
  if (ghoulHealth > 0) {
    ghoulHealth -= 10;
  } else {
    console.log("Congratulations! You have defeated the ghoul!");
    addQuest("Battle for Ghoul", "You bravely defeated the terrifying ghoul!");
  }
  console.log("Current health of ghoul is:", ghoulHealth);
});

const decipherBtn = document.getElementById("decipherBtn");

function decipherMessage() {
  // Select all spans with class "cryptic"
  let crypticSpans = document.querySelectorAll(".cryptic");

  // Extract text from each span
  let words = Array.from(crypticSpans).map((span) => span.textContent);

  // Combine words into a single message
  let message = words.join(" ");

  // Display the message on the page
  document.getElementById("tome-content").textContent =
    "Deciphered Message: " + message;

  // Display updated inventory
  updateInventory();

  return message;
}
// console.log(decipherMessage());
// If the message contains a special item, add it to the inventory
decipherBtn.addEventListener("click", function () {
  let message = decipherMessage();
  if (decipherMessage().includes("ring")) {
    heroInventory.push("Ancient Ring"); // Add item to inventory
    addQuest(
      "Deciphered Message",
      "You discovered the Ancient Ring hidden in the cryptic text!"
    );
    console.log(heroInventory);
  }
});

const inventoryInput = document.getElementById("inventoryInput");
const inventoryAdd = document.getElementById("inventoryAdd");
const inventoryRemove = document.getElementById("inventoryRemove");

inventoryAdd.addEventListener("click", function () {
  // console.log(inventoryInput.value);
  heroInventory.push(inventoryInput.value); // Add item to inventory
  updateInventory();

  inventoryInput.value = "";
});

inventoryRemove.addEventListener("click", function () {
  heroInventory = [];
  updateInventory();
});

let questLog = ["Ancient Tome", "Deciphered message", "Misty ruins"];

function addQuest(AncientTome, DiscoveringOfThe) {
  let questEntry = `${AncientTome}: ${questSummary}`;
  questLog.push(questEntry);
  updateQuestLog();
}

function updateQuestLog() {
  let questList = document.getElementById("questList");
  questList.innerHTML = "";

  questLog.forEach((quest) => {
    let listItem = document.createElement("li");
    listItem.textContent = quest;
    questList.appendChild(listItem);
  });
}

let quests = [
  {
    name: "Decipher the Cryptic Message",
    event:
      "You uncovered a hidden message revealing the location of a powerful item!",
    reward: "Ancient Ring",
  },
  {
    name: "Battle the Ghoul",
    event: "You defeated a terrifying ghoul guarding an ancient tome.",
    reward: "Mysterious Tome",
  },
  {
    name: "Defeat Fyrebreath",
    event:
      "You faced the mighty dragon Fyrebreath and used your discovered item to slay it!",
    reward: "Victory!",
  },
];
let currentQuestIndex = 0;
// let heroInventory = [];

function nextQuest() {
  if (currentQuestIndex < quests.length) {
    let quest = quests[currentQuestIndex];
    let questEntry = `${quest.name}: ${quest.event}`;
    heroInventory.push(quest.reward);
    questLog.push(questEntry);

    updateQuestLog();
    currentQuestIndex++;
  } else {
    console.log("All quests completed");
  }
}

function updateQuestLog() {
  let questList = document.getElementById("questList");
  questList.innerHTML = "";

  questLog.forEach((quest) => {
    let listItem = document.createElement("li");
    listItem.textContent = quest;
    questList.appendChild(listItem);
  });
  console.log("Hero's Inventory:", heroInventory);
}

document.getElementById("nextQuestBtn").addEventListener("click", nextQuest);

let locations = [
  {
    name: "Whispering Forest",
    description: "A mystical forest where the trees seem to whisper secrets.",
  },
  {
    name: "Echoing Caves",
    description: "A dark cavern where echoes of the past reveal hidden truths.",
  },
  {
    name: "Dragon's Lair",
    description: "A fiery cavern where Fyrebreath, the ancient dragon, awaits.",
  },
];

function createLocationButtons() {
  let locationContainer = document.getElementById("locations");

  locations.forEach((location) => {
    let button = document.createElement("button");
    button.textContent = location.name;

    button.addEventListener("click", function () {
      document.getElementById("locationDescription").textContent =
        location.description;
    });

    locationContainer.appendChild(button);
  });
}

createLocationButtons();
