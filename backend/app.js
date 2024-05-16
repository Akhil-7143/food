const express = require("express");
const cors = require("cors"); // Import the cors middleware

const app = express();

// Use the cors middleware
app.use(cors());

// BISCUITES DATA

const biscuitsData = [
  {
    id: 1,
    name: "Coconut",
    altText: "COCONUT",
  },
  {
    id: 2,
    name: "Oreo",
    altText: "Oreo",
  },
  {
    id: 3,
    name: "Bourbon",
    altText: "Bourbon",
  },
];
// INSERT THE BISCUITS DATA
app.get("/food-items/Biscuits", (req, res) => {
  res.json(biscuitsData);
});

// __________________________________________________________________________________________

// TEA DATA

const teadata = [
  {
    id: 1,
    name: "Masala Tea",
    altText: "Masala Tea",
  },
  {
    id: 2,
    name: "Irani Tea",
    altText: "Irani Tea",
  },
  {
    id: 3,
    name: "Ginger Tea",
    altText: "Ginger Tea",
  },
  {
    id: 4,
    name: "Green Tea",
    altText: "Green Tea",
  },
];

// INSERT THE TEA DATA

app.get("/food-items/Tea", (req, res) => {
  res.json(teadata);
});

// ____________________________________________________________________________________________

// COFFE DATA

const coffeData = [
  {
    id: 1,
    name: "Cappuccino",
    altText: "Cappuccino",
  },
  {
    id: 2,
    name: "Espresso",
    altText: "Espresso",
  },
  {
    id: 3,
    name: "Latte",
    altText: "Latte",
  },
];

// INSERT THE COFFE DATA

app.get("/food-items/Coffee", (req, res) => {
  res.json(coffeData);
});

// _________________________________________________________________________________________________

// FASTFOOD DATA ///

const fastfoodData = [
  {
    id: 1,
    name: "Egg-fried-rice",
    altText: "Egg-fried-rice",
  },
  {
    id: 2,
    name: "Chicken-fried-rice",
    altText: "Chicken-fried-rice",
  },
  {
    id: 4,
    name: "Gobi-manchurian-rice",
    altText: "Gobi-manchurian-rice",
  },
  {
    id: 5,
    name: "Chicken-manchurian-rice",
    altText: "Chicken-manchurian-rice",
  },
  {
    id: 3,
    name: "Gobi",
    altText: "Gobi",
  },
];

app.get("/food-items/FastFood", (req, res) => {
  try {
    res.json(fastfoodData);
  } catch (e) {
    console.log(e);
  }
});

// _______________________________________________________________________________________________________//

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
