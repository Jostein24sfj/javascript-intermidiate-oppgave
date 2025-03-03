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
  // decipherMessage();
  if (decipherMessage().includes("ring")) {
    heroInventory.push("Ancient Ring"); // Add item to inventory
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
