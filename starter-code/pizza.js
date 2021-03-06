// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperonni: { name: "Pepperonni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderPrice();
  renderPepperonni();
}

function renderPepperonni() {
  document.querySelectorAll(".pep").forEach(function(pep) {
    if (state.pepperonni) {
      pep.style.visibility = "visible";
      document.querySelector(".btn-pepperonni").classList.add("active");
    } else {
      pep.style.visibility = "hidden";
      document.querySelector(".btn-pepperonni").classList.remove("active");
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach(function(mushroom) {
    if (state.mushrooms) {
      mushroom.style.visibility = "visible";
      document.querySelector(".btn-mushrooms").classList.add("active");
    } else {
      mushroom.style.visibility = "hidden";
      document.querySelector(".btn-mushrooms").classList.remove("active");
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach(function(greenPepper) {
    if (state.greenPeppers) {
      greenPepper.style.visibility = "visible";
      document.querySelector(".btn-green-peppers").classList.add("active");
    } else {
      greenPepper.style.visibility = "hidden";
      document.querySelector(".btn-green-peppers").classList.remove("active");
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll(".sauce").forEach(function($sauce) {
    if (state.whiteSauce) {
      $sauce.style.visibility = "visible";
    } else {
      $sauce.style.visibility = "hidden";
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector(".crust").classList.add("crust-gluten-free");
    document.querySelector(".btn-crust").classList.add("active");
  } else {
    document.querySelector(".crust").classList.remove("crust-gluten-free");
    document.querySelector(".btn-crust").classList.remove("active");
  }
}

function renderButtons(e) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (!e.target.className.includes("active")) {
    e.target.classList.add("active");
  } else {
    e.target.classList.remove("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let price = basePrice;
  let prices = {
    pepperonni: 1,
    mushrooms: 1,
    greenPeppers: 1,
    whiteSauce: 3,
    glutenFreeCrust: 5
  };

  let thePriceDiv = document.querySelector(".panel.price > ul");
  thePriceDiv.innerHTML = "";

  for (let ing in state) {
    if (state[ing]) {
      price += prices[ing];
      let thing = document.createElement("li");
      thing.innerHTML = `$${prices[ing]} ${ing}`;
      thePriceDiv.append(thing);
    }
  }
  document.querySelector(".panel.price strong").innerHTML = "$" + price;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector(".btn.btn-pepperonni").onclick = function(e) {
  renderButtons(e);
  state.pepperonni = !state.pepperonni;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").onclick = function(e) {
  renderButtons(e);
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").onclick = function(e) {
  renderButtons(e);
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").onclick = function(e) {
  renderButtons(e);
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").onclick = function(e) {
  renderButtons(e);
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};
