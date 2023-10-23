const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");
const box = document.querySelector(".suggestions");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = fruit.filter((fruitStr) => {
    if (fruitStr.toLowerCase().includes(str.toLowerCase())) {
      return fruitStr;
    }
  });
  return results;
}

function searchHandler(e) {
  suggestions.innerHTML = "";
  let inputVal = input.value;
  let results = search(inputVal);
  showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
  if (inputVal !== "") {
    results.forEach((fruit) => {
      let newFruit = document.createElement("li");
      suggestions.appendChild(newFruit);
      newFruit.innerText = fruit;
    });
    if (results.length > 7) {
      box.classList.add("longscroll");
    } else {
      box.classList.remove("longscroll");
    }
  } else {
    box.classList.remove("longscroll");
  }
}

function useSuggestion(e) {
  if (e.target.tagName === "LI") {
    input.value = e.target.innerText;
    suggestions.innerHTML = "";
    box.classList.remove("longscroll");
  }
}

input.addEventListener("keyup", searchHandler);
suggestions.addEventListener("click", useSuggestion);
